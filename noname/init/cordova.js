// @ts-nocheck
import { Get as get } from '../get/index.js';
import { Library as lib } from '../library/index.js';
import { Game as game } from '../game/index.js';
import { status as _status } from '../status/index.js';
import { UI as ui } from '../ui/index.js';
import { nonameInitialized } from '../util/index.js';

export async function cordovaReady() {
	if (lib.device == 'android') {
		document.addEventListener("pause", function () {
			if (!_status.paused2 && (typeof _status.event.isMine == 'function' && !_status.event.isMine())) {
				ui.click.pause();
			}
			if (ui.backgroundMusic) {
				ui.backgroundMusic.pause();
			}
		});
		document.addEventListener("resume", () => {
			if (ui.backgroundMusic && !isNaN(ui.backgroundMusic.duration)) ui.backgroundMusic.play();
		});
		document.addEventListener("backbutton", function () {
			if (ui.arena && ui.arena.classList.contains('menupaused')) {
				if (window.saveNonameInput) {
					window.saveNonameInput();
				}
				else {
					ui.click.configMenu();
				}
			}
			else if (lib.config.confirm_exit) {
				navigator.notification.confirm(
					'是否退出游戏？',
					function (index) {
						switch (index) {
							case 2: game.reload(); break;
							case 3: navigator.app.exitApp(); break;
						}
					},
					'确认退出',
					['取消', '重新开始', '退出']
				);
			}
			else {
				navigator.app.exitApp();
			}
		});
		if ("cordova" in window && "plugins" in window.cordova && "permissions" in window.cordova.plugins) {
			const permissions = cordova.plugins.permissions;
			const requests = ["WRITE_EXTERNAL_STORAGE", "READ_EXTERNAL_STORAGE"]
			requests.forEach(request => {
				permissions.checkPermission(permissions[request], status => {
					if (!status.hasPermission) {
						permissions.requestPermission(permissions[request], lib.other.ignore, lib.other.ignore);
					}
				}, lib.other.ignore);
			});
		}
	}
	game.download = function (url, folder, onsuccess, onerror, dev, onprogress) {
		if (!url.startsWith('http')) {
			url = get.url(dev) + url;
		}
		var fileTransfer = new FileTransfer();
		folder = nonameInitialized + folder;
		if (onprogress) {
			fileTransfer.onprogress = function (progressEvent) {
				onprogress(progressEvent.loaded, progressEvent.total);
			};
		}
		lib.config.brokenFile.add(folder);
		game.saveConfigValue('brokenFile');
		fileTransfer.download(encodeURI(url), encodeURI(folder), function () {
			lib.config.brokenFile.remove(folder);
			game.saveConfigValue('brokenFile');
			if (onsuccess) {
				onsuccess();
			}
		}, onerror);
	};
	game.readFile = function (filename, callback, onerror) {
		window.resolveLocalFileSystemURL(nonameInitialized, function (entry) {
			entry.getFile(filename, {}, function (fileEntry) {
				fileEntry.file(function (fileToLoad) {
					var fileReader = new FileReader();
					fileReader.onload = function (e) {
						callback(e.target.result);
					};
					fileReader.readAsArrayBuffer(fileToLoad, "UTF-8");
				}, onerror);
			}, onerror);
		}, onerror);
	};
	game.readFileAsText = function (filename, callback, onerror) {
		window.resolveLocalFileSystemURL(nonameInitialized, function (entry) {
			entry.getFile(filename, {}, function (fileEntry) {
				fileEntry.file(function (fileToLoad) {
					var fileReader = new FileReader();
					fileReader.onload = function (e) {
						callback(e.target.result);
					};
					fileReader.readAsText(fileToLoad, "UTF-8");
				}, onerror);
			}, onerror);
		}, onerror);
	};
	game.writeFile = function (data, path, name, callback) {
		game.ensureDirectory(path, function () {
			if (Object.prototype.toString.call(data) == '[object File]') {
				var fileReader = new FileReader();
				fileReader.onload = function (e) {
					game.writeFile(e.target.result, path, name, callback);
				};
				fileReader.readAsArrayBuffer(data, "UTF-8");
			}
			else {
				window.resolveLocalFileSystemURL(nonameInitialized + path, function (entry) {
					entry.getFile(name, { create: true }, function (fileEntry) {
						fileEntry.createWriter(function (fileWriter) {
							fileWriter.onwriteend = callback;
							fileWriter.write(data);
						}, callback);
					}, callback);
				}, callback);
			}
		});
	};
	game.removeFile = function (dir, callback) {
		window.resolveLocalFileSystemURL(nonameInitialized, function (entry) {
			entry.getFile(dir, {}, function (fileEntry) {
				fileEntry.remove();
				if (callback) callback();
			}, callback || function () { });
		}, callback || function () { });
	};
	game.getFileList = (dir, success, failure) => {
		var files = [], folders = [];
		window.resolveLocalFileSystemURL(nonameInitialized + dir, entry => {
			var dirReader = entry.createReader();
			var entries = [];
			var readEntries = () => {
				dirReader.readEntries(results => {
					if (!results.length) {
						entries.sort();
						for (var i = 0; i < entries.length; i++) {
							if (entries[i].isDirectory) {
								folders.push(entries[i].name);
							}
							else {
								files.push(entries[i].name);
							}
						}
						success(folders, files);
					}
					else {
						entries = entries.concat(Array.from(results));
						readEntries();
					}
				}, failure);
			};
			readEntries();
		}, failure);
	};
	game.ensureDirectory = (list, callback, file) => {
		const directoryList = typeof list == 'string' ? [list] : list.slice().reverse(), num = file ? 1 : 0, access = (entry, directory, createDirectory) => {
			if (directory.length <= num) {
				createDirectory();
				return;
			}
			const str = directory.pop();
			return new Promise((resolve, reject) => entry.getDirectory(str, {
				create: false
			}, resolve, reject)).catch(() => new Promise(resolve => entry.getDirectory(str, {
				create: true
			}, resolve))).then(directoryEntry => access(directoryEntry, directory, createDirectory));
		};
		return new Promise((resolve, reject) => window.resolveLocalFileSystemURL(nonameInitialized, rootEntry => {
			const createDirectory = () => {
				if (directoryList.length) access(rootEntry, directoryList.pop().split('/').reverse(), createDirectory);
				if (typeof callback == 'function') callback();
				resolve();
			};
			createDirectory();
		}, reject));
	};
	if (ui.updateUpdate) {
		ui.updateUpdate();
	}
	var showbar = function () {
		if (window.StatusBar) {
			if (lib.device == 'android') {
				if (lib.config.show_statusbar_android) {
					window.StatusBar.overlaysWebView(false);
					window.StatusBar.backgroundColorByName('black');
					window.StatusBar.show();
				}
			}
			else if (lib.device == 'ios') {
				if (lib.config.show_statusbar_ios != 'off' && lib.config.show_statusbar_ios != 'auto') {
					if (lib.config.show_statusbar_ios == 'default') {
						window.StatusBar.overlaysWebView(false);
					}
					else {
						window.StatusBar.overlaysWebView(true);
					}
					window.StatusBar.backgroundColorByName('black');
					window.StatusBar.show();
				}
			}
		}
	}
	if (lib.arenaReady) {
		lib.arenaReady.push(showbar);
	}
	else {
		showbar();
	}
}
