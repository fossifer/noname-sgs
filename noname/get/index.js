import { userAgent, Uninstantable, GeneratorFunction, AsyncFunction } from "../util/index.js";
import { AI as ai } from '../ai/index.js';
import { Game as game } from '../game/index.js';
import { Library as lib } from '../library/index.js';
import { status as _status } from '../status/index.js';
import { UI as ui } from '../ui/index.js';
import { GNC as gnc } from '../gnc/index.js';
import { CacheContext } from "../library/cache/cacheContext.js";

import { Is } from "./is.js";

export class Get extends Uninstantable {
	static is = Is;
	/**
	 * 获取当前内核版本信息
	 *
	 * 目前仅考虑`chrome`, `firefox`和`safari`三种浏览器的信息，其余均归于其他范畴
	 *
	 * > 其他后续或许会增加，但`IE`永无可能
	 *
	 * @returns {["firefox" | "chrome" | "safari" | "other", number, number, number]}
	 */
	static coreInfo() {
		const regex = /(firefox|chrome|safari)\/(\d+(?:\.\d+)+)/
		let result
		if (!(result = userAgent.match(regex))) return ["other", NaN, NaN, NaN]
		if (result[1] != "safari") {
			const [major, minor, patch] = result[2].split(".")
			return [result[1], parseInt(major), parseInt(minor), parseInt(patch)]
		}
		result = userAgent.match(/version\/(\d+(?:\.\d+)+).*safari/)
		const [major, minor, patch] = result[1].split(".")
		return ["safari", parseInt(major), parseInt(minor), parseInt(patch)]
	}
	/**
	 * 返回 VCard[] 形式的所有牌，用于印卡将遍历
	 * @param {Function} filter
	 * @returns {string[][]}
	 */
	static inpileVCardList(filter) {
		let list = [];
		for (const name of lib.inpile) {
			const type = get.type(name);
			const info = [type, '', name];
			if (!filter || filter(info)) list.push(info);
			if (name == 'sha') {
				for (const nature of lib.inpile_nature) {
					const info = [type, '', name, nature];
					if (!filter || filter(info)) list.push(info);
				}
			}
		}
		return list;
	}
	/**
	 * 根据座次数n（从0开始）获取对应的“n+1号位”翻译
	 * @param {number} seat
	 */
	static seatTranslation(seat) { return `${get.cnNumber(seat + 1, true)}号位`; }
	/**
	 * @param {number} numberOfPlayers
	 * @returns {string[]}
	 */
	static identityList(numberOfPlayers) {
		const modeConfig = lib.config.mode_config;
		if (modeConfig) {
			const identityConfig = modeConfig.identity;
			if (identityConfig) {
				const identityLists = identityConfig.identity;
				if (identityLists) {
					const identityList = identityLists[numberOfPlayers - 2];
					if (Array.isArray(identityList)) return identityList.slice();
				}
			}
		}
		const numberOfPlayersExceptLord = numberOfPlayers - 1, numberOfLoyalists = Math.round(numberOfPlayersExceptLord * 3 / 9), numberOfSpys = Math.round(numberOfPlayersExceptLord * 2 / 9);
		return ['zhu'].concat(Array.from({
			length: numberOfLoyalists
		}, () => 'zhong'), Array.from({
			length: numberOfSpys
		}, () => 'nei'), Array.from({
			length: numberOfPlayersExceptLord - numberOfLoyalists - numberOfSpys
		}, () => 'fan'));
	}
	/**
	 * Generate an object URL from the Base64-encoded octet stream
	 *
	 * 从Base64编码的八位字节流生成对象URL
	 */
	static objectURL(octetStream) {
		const objectURLMap = lib.objectURL;
		if (objectURLMap.has(octetStream)) return objectURLMap.get(octetStream);
		const objectURL = URL.createObjectURL(new Blob([Uint8Array.from(atob(octetStream.replace(/^data:[\s\S]*\/[\s\S]*;base64,/, '')), character => character.charCodeAt())]));
		objectURLMap.set(octetStream, objectURL);
		return objectURL;
	}
	/**
	 * Get the card name length
	 *
	 * 获取此牌的字数
	 */
	static cardNameLength(card, player) {
		const actualCardName = lib.actualCardName, name = get.translation(typeof card == 'string' ? card : get.name(card, player));
		return (actualCardName.has(name) ? actualCardName.get(name) : name).length;
	}
	//Yingbian
	//应变
	/**
	 * Get the Yingbian conditions (of the card)
	 *
	 * 获取（此牌的）应变条件
	 */
	static yingbianConditions(card) { return get.complexYingbianConditions(card).concat(get.simpleYingbianConditions(card)); }
	static complexYingbianConditions(card) {
		const complexYingbianConditions = Array.from(lib.yingbian.condition.complex.keys());
		return card ? complexYingbianConditions.filter(value => get.cardtag(card, `yingbian_${value}`)) : complexYingbianConditions;
	}
	static simpleYingbianConditions(card) {
		const simpleYingbianConditions = Array.from(lib.yingbian.condition.simple.keys());
		return card ? simpleYingbianConditions.filter(value => get.cardtag(card, `yingbian_${value}`)) : simpleYingbianConditions;
	}
	/**
	 * Get the Yingbian effects (of the card)
	 *
	 * 获取（此牌的）应变效果
	 */
	static yingbianEffects(card) {
		const yingbianEffects = Array.from(lib.yingbian.effect.keys());
		return card ? yingbianEffects.filter(value => get.cardtag(card, `yingbian_${value}`)) : yingbianEffects;
	}
	/**
	 * Get the default Yingbian effect of the card
	 *
	 * 获取此牌的默认应变效果
	 */
	static defaultYingbianEffect(card) {
		const info = get.info(card);
		return info && info.defaultYingbianEffect || null;
	}
	/**
	 * 优先度判断
	 */
	static priority(skill) {
		const info = get.info(skill);
		if (!info) return 0;
		if ('_priority' in info) return info._priority;
		let priority = 0;
		if (info.priority) {
			priority = info.priority * 100;
		}
		if (info.silent) {
			priority++;
		}
		if (info.equipSkill) priority -= 25;
		if (info.cardSkill) priority -= 50;
		if (info.ruleSkill) priority -= 75;
		info._priority = priority;
		return priority;
	}
	/**
	 * 新装备栏相关
	 *
	 * 获取一张装备牌实际占用的装备栏(君曹操六龙)
	 *
	 * 用法同{@link subtype}，返回数组
	 *
	 * @param { string | Card | VCard | CardBaseUIData } obj
	 * @param { false | Player } [player]
	 * @returns { string[] }
	 */
	static subtypes(obj, player) {
		if (typeof obj == 'string') obj = { name: obj };
		if (typeof obj != 'object') return;
		var name = get.name(obj, player);
		if (!lib.card[name]) return [];
		if (lib.card[name].subtypes) {
			const subtypes = get.copy(lib.card[name].subtypes);
			return subtypes;
		}
		else if (lib.card[name].subtype) {
			const subtype = lib.card[name].subtype;
			return [subtype];
		}
		return [];
	}
	//装备栏 END
	/**
	 * @returns { string[] }
	 */
	static pinyin(chinese, withTone) {
		const pinyinUtilx = window.pinyinUtilx;
		if (!pinyinUtilx) return [];
		const pinyins = lib.pinyins;
		if (pinyins) {
			const pinyin = pinyins[chinese];
			if (Array.isArray(pinyin)) return withTone === false ? pinyin.map(pinyinUtilx.removeTone) : pinyin.slice();
		}
		return pinyinUtilx.getPinyin(chinese, null, withTone, true);
	}
	static yunmu(str) {
		//部分整体认读音节特化处理
		const util = window.pinyinUtilx;
		if (util && lib.pinyins._metadata.zhengtirendu.includes(util.removeTone(str))) {
			return '-' + str[str.length - 1];
		}
		//排除声母
		for (let i of lib.pinyins._metadata.shengmu) {
			if (str.startsWith(i)) {
				str = str.slice(i.length);
				if (str[0] == 'u' && lib.pinyins._metadata.special_shengmu.includes(i)) str = 'ü' + str.slice(1);
				break;
			}
		}
		//排除介母
		if (str.length > 0) {
			for (let i in lib.pinyins._metadata.feijiemu) {
				if (str[0] == i) {
					let goon = false;
					for (let j of lib.pinyins._metadata.feijiemu[i]) {
						if (str.startsWith(j)) goon = true;
					}
					if (!goon) str = str.slice(1);
					break;
				}
			}
		}
		return str;
	}
	/**
	 * 用于将参数转换为字符串，作为缓存的key。
	 */
	static paramToCacheKey() {
		var str = "";
		for (var arg of arguments) {
			if (arg === null || arg === undefined) {
				str += (arg + "-");
				continue;
			}
			if (arg.playerid) {
				str += "p:" + arg.playerid;
			} else if (arg.cardid) {
				str += "c:" + arg.cardid;
			} else if (arg.name) {
				str += "n:" + arg.name;
			} else {
				str += "s:" + arg;
			}
			str += "-";
		}
		return str;
	}
	static yunjiao(str) {
		const util = window.pinyinUtilx;
		if (util) str = util.removeTone(str);
		if (lib.pinyins._metadata.zhengtirendu.includes(str)) {
			str = ('-' + str[str.length - 1]);
		}
		else {
			for (let i of lib.pinyins._metadata.shengmu) {
				if (str.startsWith(i)) {
					str = str.slice(i.length);
					if (str[0] == 'u' && lib.pinyins._metadata.special_shengmu.includes(i)) str = 'ü' + str.slice(1);
					break;
				}
			}
		}
		for (let i in lib.pinyins._metadata.yunjiao) {
			if (lib.pinyins._metadata.yunjiao[i].includes(str)) return i;
		}
		return null;
	}
	/**
	 * @param { string } skill
	 * @param { Player } player
	 * @returns { string[] }
	 */
	static skillCategoriesOf(skill, player) {
		const list = [], info = get.info(skill);
		if (!info) return list;
		if (get.is.locked(skill, player)) list.add('锁定技');
		if (info.zhuSkill) list.add('主公技');
		if (info.limited) list.add('限定技');
		if (info.juexingji) list.add('觉醒技');
		if (get.is.zhuanhuanji(skill, player)) list.add('转换技');
		if (info.hiddenSkill) list.add('隐匿技');
		if (info.clanSkill) list.add('宗族技');
		if (info.groupSkill) list.add('势力技');
		if (info.dutySkill) list.add('使命技');
		if (info.chargeSkill) list.add('蓄力技');
		if (info.zhenfa) list.add('阵法技');
		if (info.mainSkill) list.add('主将技');
		if (info.viceSkill) list.add('副将技');
		if (info.lordSkill) list.add('君主技');
		if (info.chargingSkill) list.add('蓄能技');
		if (info.charlotte) list.add('Charlotte');
		if (info.sunbenSkill) list.add('昂扬技');
		if (info.categories) list.addArray(info.categories(skill, player));
		return list;
	}
	static numOf(obj, item) { return obj.filter(element => element == item).length; }
	static connectNickname() { return typeof lib.config.connect_nickname == 'string' ? (lib.config.connect_nickname.slice(0, 12)) : "无名玩家"; }
	static zhinangs(filter) {
		var list = (_status.connectMode ? lib.configOL : lib.config).zhinang_tricks;
		if (!list || !list.filter || !list.length) return get.inpile('trick', 'trick').randomGets(3);
		if (filter === false) return list.slice(0);
		list = list.filter(card => lib.inpile.includes(card));
		if (list.length) return list;
		return get.inpile('trick', 'trick').randomGets(3);
	}
	static sourceCharacter(str) {
		if (str) {
			for (var i in lib.characterReplace) {
				if (lib.characterReplace[i].includes(str)) return i;
			}
		}
		return str;
	}
	static isLuckyStar(player) {
		if (player && player.hasSkillTag('luckyStar')) return true;
		if (_status.connectMode) return false;
		return (!player || player == game.me || player.isUnderControl()) && lib.config.lucky_star == true;
	}
	static infoHp(hp) {
		if (typeof hp == 'number') return hp;
		else if (typeof hp == 'string' && hp.includes('/')) {
			return parseInt(hp.split('/')[0]);
		}
		return 0;
	}
	static infoMaxHp(hp) {
		if (typeof hp == 'number') return hp;
		else if (typeof hp == 'string' && hp.includes('/')) {
			return parseInt(hp.split('/')[1]);
		}
		return 0;
	}
	static infoHujia(hp) {
		if (typeof hp == 'string' && hp.includes('/')) {
			var splited = hp.split('/');
			if (splited.length > 2) return parseInt(splited[2]);
		}
		return 0;
	}
	static bottomCards(num, putBack) {
		if (_status.waitingForCards) {
			ui.create.cards.apply(ui.create, _status.waitingForCards);
			delete _status.waitingForCards;
		}
		var list = [];
		var card = false;
		if (typeof num != 'number') num = 1;
		if (num == 0) { card = true; num = 1; }
		if (num < 0) num = 1;
		while (num--) {
			if (ui.cardPile.hasChildNodes() == false) {
				game.washCard();
			}
			if (ui.cardPile.hasChildNodes() == false) {
				game.over('平局');
				return [];
			}
			var cardx = ui.cardPile.removeChild(ui.cardPile.lastChild);
			cardx.original = 'c';
			list.push(cardx);
		}
		if (putBack) {
			for (let i = list.length - 1; i >= 0; i--) {
				ui.cardPile.appendChild(list[i]);
			}
		}
		game.updateRoundNumber();
		if (card) return list[0];
		return list;
	}
	static discarded() { return _status.discarded.filter(item => item.parentNode == ui.discardPile); }
	static cardOffset() {
		var x = ui.arena.getBoundingClientRect();
		var y = ui.window.getBoundingClientRect();
		return -y.width / 2 + (x.left + x.width / 2);
	}
	static colorspan(str) {
		if (str[0] == '#') {
			var color;
			switch (str[1]) {
				case 'r': color = 'fire'; break;
				case 'p': color = 'legend'; break;
				case 'b': color = 'blue'; break;
				case 'g': color = 'green'; break;
				default: return str.slice(2);
			}
			return '<span class="' + color + 'text ' + color + 'auto">' + str.slice(2) + '</span>';
		}
		return str;
	}
	static evtprompt(next, str) {
		if (next.prompt) {
			next.set('prompt2', str);
		}
		else {
			if (str.startsWith('###')) {
				var prompts = str.slice(3).split('###');
				if (prompts[0]) next.set('prompt', prompts[0]);
				if (prompts[1]) next.set('prompt2', prompts[1]);
			}
			else {
				next.set('prompt', str);
			}
		}
	}
	static autoViewAs(card, cards) { return new lib.element.VCard(card, cards); }
	/**
	 * @deprecated
	 */
	static _autoViewAs(card, cards) {
		var info = get.info(card);
		if (info.autoViewAs) {
			if (cards === false) {
				return {
					name: info.autoViewAs,
				};
			}
			else if (Array.isArray(cards)) {
				return {
					name: info.autoViewAs,
					cards: cards.slice(0),
				};
			}
			else if (get.itemtype(card) == 'card') {
				return {
					name: info.autoViewAs,
					cards: [card],
				};
			}
			else {
				return {
					name: info.autoViewAs,
					suit: card.suit,
					number: card.number,
					nature: card.nature,
				};
			}
		}
		else {
			if (card.isCard || get.itemtype(card) == 'card') {
				var next = {
					name: get.name(card),
					suit: get.suit(card),
					number: get.number(card),
					nature: get.nature(card),
					isCard: true,
					cardid: card.cardid,
					wunature: card.wunature,
					storage: get.copy(card.storage),
					cards: get.copy(card.cards),
				};
				if (get.itemtype(cards) == 'cards' && !card.cards) next.cards = cards.slice(0);
				else if (get.itemtype(card) == 'card') next.cards = [card];
				return next;
			}
			else if (get.is.object(card) && get.itemtype(cards) == 'cards' && !card.cards) {
				card = get.copy(card);
				card.cards = cards.slice(0);
			}
			return card;
		}
	}
	static max(list, func, type) {
		list = list.slice(0);
		if (typeof func == 'string') {
			var key = func;
			func = function (item) {
				return item[key];
			};
		}
		list.sort(function (a, b) {
			return func(b) - func(a);
		});
		if (type == 'list') {
			var list2 = [];
			for (var i = 0; i < list.length; i++) {
				if (func(list[i]) == func(list[0])) {
					list2.push(list[i]);
				}
			}
			return list2;
		}
		else if (type == 'item') {
			return list[0];
		}
		else {
			return func(list[0]);
		}
	}
	static min(list, func, type) {
		list = list.slice(0);
		if (typeof func == 'string') {
			var key = func;
			func = function (item) {
				return item[key];
			};
		}
		list.sort(function (a, b) {
			return func(a) - func(b);
		});
		if (type == 'list') {
			var list2 = [];
			for (var i = 0; i < list.length; i++) {
				if (func(list[i]) == func(list[0])) {
					list2.push(list[i]);
				}
			}
			return list2;
		}
		else if (type == 'item') {
			return list[0];
		}
		else {
			return func(list[0]);
		}
	}
	/**
	 * @overload
	 * @param { string } name
	 * @returns { Character }
	 */
	/**
	 * @template { 0 | 1 | 2 | 3 | 4 } T
	 * @overload
	 * @param { string } name
	 * @param { T } num
	 * @returns { Character[T] }
	 */
	static character(name, num) {
		let info = lib.character[name];
		if (!info) {
			const pack = Object.keys(lib.characterPack).find(pack => name in lib.characterPack[pack]);
			if (pack) info = lib.characterPack[pack][name];
		}
		if (typeof num === 'number') {
			if (!info) info = [];
			if (info[num]) return info[num];
			if (num === 3 || num === 4) return [];
			return;
		}
		return info;
	}
	static characterInitFilter(name) {
		const info = get.character(name);
		if (!info || !info[4]) return [];
		const filter = info[4].find(tag => tag.startsWith('InitFilter'));
		if (!filter) return [];
		return filter.split(':').slice(1);
	}
	static characterIntro(name) {
		if (lib.characterIntro[name]) return lib.characterIntro[name];
		var tags = get.character(name, 4);
		if (tags) {
			for (var i = 0; i < tags.length; i++) {
				if (tags[i].startsWith('des:')) {
					return tags[i].slice(4);
				}
			}
		}
		while (name.includes('_') && !lib.characterIntro[name]) {
			name = name.slice(name.indexOf('_') + 1);
		}
		if (lib.characterIntro[name]) return lib.characterIntro[name];
		return '暂无武将介绍';
	}
	static bordergroup(info, raw) {
		if (!Array.isArray(info)) {
			info = lib.character[info];
			if (!info) return '';
		}
		if (Array.isArray(info[4])) for (const str of info[4]) {
			if (typeof str == 'string' && str.startsWith('border:')) return str.slice(7);
		}
		return raw ? '' : info[1] || '';
	}
	static groupnature(group, method) {
		var nature = lib.groupnature[group];
		if (!nature) return '';
		if (method == 'raw') {
			return nature;
		}
		return nature + 'mm';
	}
	static sgn(num) {
		if (num > 0) return 1;
		if (num < 0) return -1;
		return 0;
	}
	static rand(num, num2) {
		if (typeof num2 == 'number') {
			return num + Math.floor(Math.random() * (num2 - num + 1));
		}
		else {
			return Math.floor(Math.random() * num);
		}
	}
	static sort(arr, method, arg) { return method == "seat" ? arr.sortBySeat(arg) : void 0; }
	static sortSeat(arr, target) { return arr.sortBySeat(target); }
	static zip(callback) {
		if (!window.JSZip) {
			lib.init.js(lib.assetURL + 'game', 'jszip', function () {
				callback(new JSZip());
			});
		}
		else {
			callback(new JSZip());
		}
	}
	static delayx(num, max) {
		if (typeof num != 'number') num = 1;
		if (typeof max != 'number') max = Infinity;
		switch (lib.config.game_speed) {
			case 'vslow': return Math.min(max, 2.5 * num);
			case 'slow': return Math.min(max, 1.5 * num);
			case 'fast': return Math.min(max, 0.7 * num);
			case 'vfast': return Math.min(max, 0.4 * num);
			case 'vvfast': return Math.min(max, 0.2 * num);
			default: return Math.min(max, num);
		}
	}
	static prompt(skill, target, player) {
		player = player || _status.event.player;
		if (target) {
			var str = get.translation(target);
			if (target == player) {
				str += '（你）';
			}
			return '是否对' + str + '发动【' + get.skillTranslation(skill, player) + '】？';
		}
		else {
			return '是否发动【' + get.skillTranslation(skill, player) + '】？';
		}
	}
	static prompt2(skill, target, player) {
		var str = get.prompt.apply(this, arguments);
		if (!lib.translate[skill + '_info']) return str;
		return '###' + str + '###' + lib.translate[skill + '_info'];
	}
	static url(master) {
		var url = lib.config.updateURL || lib.updateURL;
		if (url[url.length - 1] != '/') {
			url += '/';
		}
		if (master != 'nodev') {
			return url + 'master/';
		}
		else {
			return url + 'v' + lib.version + '/';
		}
	}
	static round(num, f) {
		var round = Math.pow(10, f);
		return Math.round(num * round) / round;
	}
	static playerNumber() {
		var num;
		if (_status.brawl && _status.brawl.playerNumber) {
			num = _status.brawl.playerNumber;
		}
		else {
			num = get.config('player_number');
		}
		return parseInt(num) || 2;
	}
	static benchmark(func1, func2, iteration, arg) {
		var tic, toc;
		var key1, key2;
		if (!arg) arg = [];
		if (Array.isArray(func2)) {
			key1 = func2[0];
			key2 = func2[1];
		}
		else if (typeof func2 == 'string') {
			key1 = func2;
			func2 = iteration || 100;
		}
		else if (typeof func2 == 'number') {
			arg = iteration || arg;
			iteration = func2;
		}
		tic = get.utc();
		for (var i = 0; i < iteration; i++) {
			if (key1) {
				func1[key1](arg.randomGet());
			}
			else {
				func1(arg.randomGet());
			}
		}
		toc = get.utc();
		if (typeof func2 == 'number') {
			return toc - tic;
		}
		console.log('time1: ' + (toc - tic));
		tic = get.utc();
		for (var i = 0; i < iteration; i++) {
			if (key2) {
				func1[key2](arg.randomGet());
			}
			else {
				func2(arg.randomGet());
			}
		}
		toc = get.utc();
		console.log('time2: ' + (toc - tic));
	}
	static stringify(obj, level) {
		level = level || 0;
		let indent = '';
		let str;
		for (let i = 0; i < level; i++) {
			indent += '    ';
		}
		if (get.objtype(obj) == 'object' || obj instanceof lib.element.GameEventPromise) {
			str = '{\n';
			for (let i in obj) {
				let insertDefaultString;
				let insertFunctionString = indent + '    ' + get.stringify(obj[i], level + 1) + ',\n';
				let parseFunction = i => {
					// let string = obj[i].toString();
					let execResult;
					if (obj[i] instanceof GeneratorFunction) {
						// *content(){}
						execResult = new RegExp(`\\*\\s*${i}[\\s\\S]*?\\(`).exec(obj[i]);
						if (execResult && execResult.index === 0) {
							return insertFunctionString;
						}
						// content:function*(){}
						else {
							return insertDefaultString;
						}
					}
					else if (obj[i] instanceof AsyncFunction) {
						execResult = new RegExp(`async\\s*${i}[\\s\\S]*?\\(`).exec(obj[i]);
						// async content(){}
						if (execResult && execResult.index === 0) {
							return insertFunctionString;
						}
						// content:async function(){}
						else {
							return insertDefaultString;
						}
					} else {
						execResult = new RegExp(`${i}[\\s\\S]*?\\(`).exec(obj[i]);
						// content(){}
						if (execResult && execResult.index === 0) {
							return insertFunctionString;
						}
						// content:function(){}
						else {
							return insertDefaultString;
						}
					}
				};
				if (/[^a-zA-Z]/.test(i)) {
					insertDefaultString = indent + '    "' + i + '":' + get.stringify(obj[i], level + 1) + ',\n';
					if (typeof obj[i] !== 'function') {
						str += insertDefaultString;
					} else {
						str += parseFunction(i);
					}
				}
				else {
					insertDefaultString = indent + '    ' + i + ':' + get.stringify(obj[i], level + 1) + ',\n';
					if (typeof obj[i] !== 'function') {
						str += insertDefaultString;
					} else {
						str += parseFunction(i);
					}
				}
			}
			str += indent + '}';
			return str;
		}
		else {
			if (typeof obj == 'function') {
				str = obj.toString();
				str = str.replace(/\t/g, '    ');
				let i = str.lastIndexOf('\n');
				let num = 0;
				for (let j = i + 1; j < str.length && str[j] == ' '; j++) {
					num++;
				}
				num = Math.floor(num / 4);
				for (i = 0; i < num - level; i++) {
					str = str.replace(/\n {4}/g, '\n');
				}
			}
			else {
				try {
					if (Array.isArray(obj) && obj.includes(Infinity)) {
						obj = obj.slice(0);
						let rand = get.id();
						for (let i = 0; i < obj.length; i++) {
							if (obj[i] === Infinity) {
								obj[i] = parseInt(rand);
							}
						}
						str = JSON.stringify(obj).replace(new RegExp(rand, 'g'), 'Infinity');
					}
					else {
						str = JSON.stringify(obj) || '';
					}
				}
				catch (e) {
					str = '';
				}
			}
			return str;
		}
	}
	/**
	 * 深拷贝函数（虽然只处理了部分情况）
	 *
	 * 除了普通的Object和NullObject，均不考虑自行赋值的数据，但会原样将Symbol复制过去
	 *
	 * @template T
	 * @param {T} obj - 要复制的对象，若不是对象则直接返回原值
	 * @param {boolean} [copyKeyDeep = false] - 是否深复制`Map`的`key`
	 * @param {WeakMap<object, unknown>} [map] - 拷贝用的临时存储，用于处理循环引用（请勿自行赋值）
	 * @returns {T} - 深拷贝后的对象，若传入值不是对象则为传入值
	 */
	static copy(obj, copyKeyDeep = false, map = new WeakMap()) {
		// 参考[这里](https://juejin.cn/post/7315612852890026021)实现深拷贝
		// 不再判断是否能structuredClone是因为structuredClone会把Symbol给毙了
		const getType = (obj) => Object.prototype.toString.call(obj);

		const canTranverse = {
			"[object Map]": true,
			"[object Set]": true,
			"[object Object]": true,
			"[object Array]": true,
			"[object Arguments]": true,
			"[object Date]": true
		};

		if (typeof obj !== "object" || obj === null || !canTranverse[getType(obj)])
			return obj;

		// @ts-ignore
		if (map.has(obj)) return map.get(obj);

		const constructor = obj.constructor;
		// @ts-ignore
		const target =
			constructor
				? (
					// 这四类数据处理单独处理
					// （实际上需要处理的只有Map和Set）
					// 除此之外的就只能祝愿有拷贝构造函数了
					(Array.isArray(obj) || obj instanceof Map || obj instanceof Set || constructor === Object)
						// @ts-ignore
						? new constructor()
						: (
							(constructor.name in window && /\[native code\]/.test(constructor.toString()))
								// @ts-ignore
								? new constructor(obj)
								: obj
						)
				)
				: Object.create(null);
		if (target === obj) return target;

		map.set(obj, target);

		if (obj instanceof Map) {
			obj.forEach((value, key) => {
				target.set(copyKeyDeep ? get.copy(key, copyKeyDeep, map) : key, get.copy(value, copyKeyDeep, map));
			});
		} else if (obj instanceof Set) {
			obj.forEach((value) => {
				target.add(get.copy(value, copyKeyDeep, map));
			});
		}

		const descriptors = Object.getOwnPropertyDescriptors(obj);
		if (descriptors) {
			for (const [key, descriptor] of Object.entries(descriptors)) {
				const { enumerable, configurable } = descriptor;
				if (obj.hasOwnProperty(key)) {
					const result = { enumerable, configurable };
					if (descriptor.hasOwnProperty('value')) {
						result.value = get.copy(descriptor.value, copyKeyDeep, map);
						result.writable = descriptor.writable;
					} else {
						const { get, set } = descriptor;
						result.get = get;
						result.set = set;
					}
					Reflect.defineProperty(target, key, result);
				}
			}
		}

		const symbols = Object.getOwnPropertySymbols(obj);
		symbols.forEach((symbol) => {
			target[symbol] = get.copy(obj[symbol], copyKeyDeep, map);
		});

		return target;
	}
	static inpilefull(type) {
		var list = [];
		for (var i in lib.cardPile) {
			for (var j = 0; j < lib.cardPile[i].length; j++) {
				var info = lib.cardPile[i][j];
				if (lib.inpile.includes(info[2]) && get.type(info[2]) == type) {
					list.push({
						name: info[2],
						suit: info[0],
						number: info[1],
						nature: info[3]
					});
				}
			}
		}
		return list;
	}
	static inpile(type, filter) {
		var list = [];
		if (filter == 'trick') {
			for (var i = 0; i < lib.inpile.length; i++) {
				if (get.type(lib.inpile[i], 'trick') == type) list.push(lib.inpile[i]);
			}
		}
		else {
			for (var i = 0; i < lib.inpile.length; i++) {
				if (typeof type == 'function') {
					if (type(lib.inpile[i])) {
						list.push(lib.inpile[i]);
					}
				}
				else {
					if (typeof filter == 'function' && !filter(lib.inpile[i])) continue;
					if (type.startsWith('equip') && type.length == 6) {
						if (get.subtype(lib.inpile[i]) == type) list.push(lib.inpile[i]);
					}
					else {
						if (get.type(lib.inpile[i]) == type) list.push(lib.inpile[i]);
					}
				}
			}
		}
		return list;
	}
	static inpile2(type) { return get.inpile(type, 'trick'); }
	static typeCard(type, filter) {
		var list = [];
		for (var i in lib.card) {
			if (lib.card[i].mode && lib.card[i].mode.includes(get.mode()) == false) continue;
			// if(lib.card[i].vanish||lib.card[i].destroy) continue;
			if (lib.card[i].destroy) continue;
			if (typeof filter == 'function' && !filter(i)) continue;
			if (lib.config.bannedcards.includes(i)) continue;
			if (!lib.translate[i + '_info']) continue;
			if ((type.startsWith('equip') && type.length == 6) ||
				(type.startsWith('hslingjian') && type.length == 11) ||
				(type.startsWith('spell_'))) {
				if (get.subtype(i) == type) list.push(i);
			}
			else {
				if (get.type(i) == type) list.push(i);
			}
		}
		return list;
	}
	static libCard(filter) {
		var list = [];
		for (var i in lib.card) {
			if (lib.card[i].mode && lib.card[i].mode.includes(get.mode()) == false) continue;
			// if(lib.card[i].vanish||lib.card[i].destroy) continue;
			if (lib.card[i].destroy) continue;
			if (lib.config.bannedcards.includes(i)) continue;
			if (!lib.translate[i + '_info']) continue;
			if (filter(lib.card[i], i)) {
				list.push(i);
			}
		}
		return list;
	}
	static ip() {
		if (!require) return '';
		var interfaces = require('os').networkInterfaces();
		for (var devName in interfaces) {
			var iface = interfaces[devName];
			for (var i = 0; i < iface.length; i++) {
				var alias = iface[i];
				if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
					return alias.address;
				}
			}
		}
	}
	static modetrans(config, server) {
		if (config.mode == 'doudizhu') {
			switch (config.doudizhu_mode) {
				case 'kaihei': return '开黑斗地主';
				case 'huanle': return '欢乐斗地主';
				case 'binglin': return '兵临城下';
				case 'online': return '智斗三国';
				default: return '休闲' + (config.double_character ? '双将' : '') + '斗地主';
			}
		}
		if (config.mode == 'versus') {
			switch (config.versus_mode) {
				case '1v1': return '单人对决';
				case '2v2': return '欢乐成双';
				case '3v3': return '血战到底';
				case '4v4': return '四人对决';
				case 'guandu': return '官渡之战';
			}
		}
		if (config.mode == 'single') {
			switch (config.single_mode) {
				case 'normal': return '新１ｖ１';
				case 'changban': return '血战长坂坡';
				case 'dianjiang': return '点将单挑';
			}
		}
		if (config.mode == 'identity') {
			switch (config.identity_mode) {
				case 'purple': return '三对三对二';
				case 'zhong': return (config.double_character ? '双将' : '') + '忠胆英杰';
				case 'stratagem': return get.cnNumber(parseInt(config.number)) + '人' + (config.double_character ? '双将' : '') + '谋攻';
				default: return `${get.cnNumber(parseInt(config.number))}人${config.double_nei ? '双内' : ''}${config.enable_commoner ? '带民' : ''}${config.double_character ? '双将' : ''}身份`;
			}
		}
		if (config.mode == 'guozhan') {
			if (config.separatism) return '群雄割据';
			if (config.guozhan_mode != 'normal') switch (config.guozhan_mode) {
				case 'yingbian': return '应变国战';
				case 'old': return '怀旧国战';
			}
		}
		if (server) {
			return get.translation(config.mode) + '模式';
		}
		else {
			return get.cnNumber(parseInt(config.number)) + '人' + get.translation(config.mode);
		}
	}
	static charactersOL(func) {
		var list = [];
		var libCharacter = {};
		for (var i = 0; i < lib.configOL.characterPack.length; i++) {
			var pack = lib.characterPack[lib.configOL.characterPack[i]];
			for (var j in pack) {
				if (typeof func == 'function' && func(j)) continue;
				if (lib.connectBanned.includes(j)) continue;
				if (lib.character[j]) libCharacter[j] = pack[j];
			}
		}
		for (i in libCharacter) {
			if (lib.filter.characterDisabled(i, libCharacter)) continue;
			list.push(i);
		}
		return list;
	}
	static trimip(str) {
		var len = str.length - 5;
		if (str.lastIndexOf(':8080') == len) {
			str = str.slice(0, len);
		}
		return str;
	}
	static mode() { return lib[_status.connectMode ? 'configOL' : 'config'].mode; }
	static idDialog(id) { return ui.dialogs.find(dialog => dialog.videoId == id) || null; }
	static arenaState() {
		var state = {
			number: ui.arena.dataset.number,
			players: {},
			mode: _status.mode,
			dying: _status.dying,
			servermode: window.isNonameServer,
			roomId: game.roomId,
			over: _status.over,
			inpile: lib.inpile,
			inpile_nature: lib.inpile_nature,
			renku: _status.renku,
		};
		for (var i in lib.playerOL) {
			state.players[i] = lib.playerOL[i].getState();
		}
		return state;
	}
	static skillState(player) {
		var skills = {
			global: lib.skill.global
		};
		var skillinfo = {};
		for (var i in lib.playerOL) {
			skills[i] = {
				skills: lib.playerOL[i].skills,
				hiddenSkills: lib.playerOL[i].hiddenSkills,
				invisibleSkills: lib.playerOL[i].invisibleSkills,
				additionalSkills: lib.playerOL[i].additionalSkills,
				disabledSkills: lib.playerOL[i].disabledSkills,
				tempSkills: lib.playerOL[i].tempSkills,
				storage: lib.playerOL[i].storage,
			};
		}
		//for(var i in lib.skill){
		//	if(lib.skill[i].chooseButton&&lib.skill[i].enable){
		//		skillinfo[i]=lib.skill[i].chooseButton;
		//	}
		//}
		skills.skillinfo = skillinfo;
		if (player) {
			skills.stat = player.getStat();
		}
		return skills;
	}
	static id() { return (Math.floor(1000000 + 9000000 * Math.random())).toString() + (10 + lib.status.globalId++); }
	static zhu(player, skill, group) {
		if (typeof player == 'string') {
			skill = player;
			player = null;
		}
		var mode = get.mode();
		if (mode == 'identity') {
			if (_status.mode == 'purple') {
				if (!player) return null;
				var zhu = game[player.identity.slice(0, 1) + 'Zhu'];
				if (!zhu) return null;
				if (skill && !zhu.hasSkill(skill)) return null;
				return zhu;
			}
			if (!game.zhu) return null;
			if (skill && !game.zhu.hasSkill(skill)) return null;
			if (game.zhu.isZhu) return game.zhu;
		}
		else if (mode == 'versus' && (_status.mode == 'four' || _status.mode == 'guandu')) {
			for (var i = 0; i < game.players.length; i++) {
				if (game.players[i].isZhu) {
					if (skill && !(game.players[i].hasSkill(skill))) continue;
					if (!player) return game.players[i];
					if (player.side == game.players[i].side) {
						return game.players[i];
					}
				}
			}
		}
		else if (mode == 'guozhan') {
			for (var i = 0; i < game.players.length; i++) {
				if (get.is.jun(game.players[i]) && !game.players[i].isUnseen()) {
					if (skill && !game.players[i].hasSkill(skill)) continue;
					if (!player) return game.players[i];
					if (player.identity == game.players[i].identity) {
						return game.players[i];
					}
					else if (group && group == game.players[i].identity) {
						return game.players[i];
					}
				}
			}
		}
		return null;
	}
	static config(item, mode) {
		mode = mode || lib.config.mode;
		if (!lib.config.mode_config[mode]) return;
		return lib.config.mode_config[mode][item];
	}
	static coinCoeff(list) {
		var num = 0;
		for (var i = 0; i < list.length; i++) {
			var rank = get.rank(list[i]);
			switch (rank) {
				case 'sp': return 0.1;
				case 's': num += 0.4; break;
				case 'ap': num += 0.6; break;
				case 'a': num += 0.8; break;
				case 'am': num += 0.95; break;
				case 'bp': num += 1.05; break;
				case 'b': num += 1.2; break;
				case 'bm': num += 1.4; break;
				case 'c': num += 1.6; break;
				case 'd': num += 1.8; break;
			}
		}
		return num / list.length;
	}
	static rank(name, num) {
		if (typeof name == 'object' && name.name) {
			name = name.name;
		}
		if (num == true) num = 9;
		if (typeof num != 'number') num = false;
		if (name == _status.lord) return num ? Math.round(7 * (num - 1) / 8 + 1) : 'ap';
		var rank = lib.rank;
		if (lib.characterPack.standard[name] || lib.characterPack.shenhua[name]) {
			var skills;
			if (lib.character[name]) {
				skills = lib.character[name][3];
			}
			else {
				var tmpinfo = get.character(name);
				if (tmpinfo) {
					skills = tmpinfo[3];
				}
				else {
					skills = [];
				}
			}
			for (var i = 0; i < skills.length; i++) {
				if (skills[i].alter && !lib.config.vintageSkills.includes(skills[i])) {
					name = lib.rank.a[0]; break;
				}
			}
		}
		if (rank.s.includes(name)) return num ? Math.round(8 * (num - 1) / 8 + 1) : 's';
		if (rank.ap.includes(name)) return num ? Math.round(7 * (num - 1) / 8 + 1) : 'ap';
		if (rank.a.includes(name)) return num ? Math.round(6 * (num - 1) / 8 + 1) : 'a';
		if (rank.am.includes(name)) return num ? Math.round(5 * (num - 1) / 8 + 1) : 'am';
		if (rank.bp.includes(name)) return num ? Math.round(4 * (num - 1) / 8 + 1) : 'bp';
		if (rank.b.includes(name)) return num ? Math.round(3 * (num - 1) / 8 + 1) : 'b';
		if (rank.bm.includes(name)) return num ? Math.round(2 * (num - 1) / 8 + 1) : 'bm';
		if (rank.c.includes(name)) return num ? Math.round(1 * (num - 1) / 8 + 1) : 'c';
		if (rank.d.includes(name)) return num ? Math.round(0 * (num - 1) / 8 + 1) : 'd';
		if (lib.character[name] && lib.character[name][4]) {
			if (lib.character[name][4].includes('boss') ||
				lib.character[name][4].includes('bossallowed') ||
				lib.character[name][4].includes('hiddenboss')) {
				return num ? Math.round(9 * (num - 1) / 8 + 1) : 'sp';
			}
		}
		return num ? Math.round(9 * (num - 1) / 8 + 1) : 'x';
	}
	static skillRank(skill, type, grouped) {
		var info = lib.skill[skill];
		var player = _status.event.skillRankPlayer || _status.event.player;
		if (!info) return 0;
		if (info.ai) {
			if (info.ai.halfneg) return 0;
			if (typeof info.ai.combo == 'string' && player && !player.hasSkill(info.ai.combo)) {
				return 0;
			}
			if (info.ai.neg) return -1;
		}
		var num = 1;
		var threaten = 1;
		if (info.ai && info.ai.threaten) {
			if (typeof info.ai.threaten == 'number') {
				threaten = info.ai.threaten;
			}
			else if (typeof info.ai.threaten == 'function' && player) {
				threaten = info.ai.threaten(player, player);
			}
		}
		if (type && type.includes('in')) {
			if (info.enable == 'phaseUse') num += 0.5;
			if (info.trigger && info.trigger.player) {
				var list = Array.isArray(info.trigger.player) ? info.trigger.player : [info.trigger.player];
				var add = false;
				for (var i of list) {
					if (i.startsWith('phase')) {
						num += 0.5;
						add = true;
					}
					else {
						for (var j of lib.phaseName) {
							if (i.indexOf[j] == 0) {
								num += 0.5;
								add = true;
								break;
							}
						}
					}
					if (add) break;
				}
			}
			if (info.trigger && ((typeof info.trigger.player == 'string' && info.trigger.player.startsWith('use')) || info.trigger.source)) {
				num += 0.3;
			}
			if (num > 1 && threaten > 1) {
				num += Math.sqrt(threaten) - 1;
			}
		}
		if (type && type.includes('out')) {
			if (threaten < 1) {
				num *= 1 / Math.sqrt(threaten);
			}
			if (info.trigger) {
				if (info.trigger.global) {
					var list = Array.isArray(info.trigger.global) ? info.trigger.global : [info.trigger.global];
					num += Math.min(3, list.length) / 10;
					for (var i of list) {
						if (i.startsWith('lose') || i.startsWith('use')) num += 0.3;
						if (i.startsWith('cardsDiscard')) num += 0.4;
					}
				}
				if (info.trigger.target || (typeof info.trigger.player == 'string' &&
					(info.trigger.player.startsWith('damage') || info.trigger.player.startsWith('lose')))) num += 0.1;
			}
			if (info.ai) {
				if (info.ai.maixie || info.ai.maixie_hp || info.ai.maixie_defend) {
					num += 0.5;
				}
				if (info.ai.nolose || info.ai.noh || info.ai.noe || info.ai.nodiscard) {
					num += 0.3;
				}
			}
		}
		if (!grouped) {
			var groups = game.expandSkills([skill]);
			groups.remove(skill);
			var ggt = [];
			for (var i = 0; i < groups.length; i++) {
				var gi = get.skillRank(groups[i], type, true);
				if (gi < 0) {
					num -= 0.5;
				}
				else if (gi > 1) {
					ggt.push(gi);
				}
			}
			if (ggt.length) {
				num += Math.max.apply(this, ggt) - 1 + ggt.length / 20;
			}
		}
		return num;
	}
	static targetsInfo(targets) {
		var info = [];
		for (var i = 0; i < targets.length; i++) {
			info.push(targets[i].dataset.position);
		}
		return info;
	}
	static infoTargets(infos) { return Array.from(infos || []).map(info => game.playerMap[info]); }
	static cardInfo(card) { return [card.suit, card.number, card.name, card.nature]; }
	static cardsInfo(cards = []) { return Array.from(cards).map(get.cardInfo); }
	static infoCard(info) {
		var card = ui.create.card();
		if (info[0]) {
			card.init(info);
		}
		return card;
	}
	static infoCards(infos) { return Array.from(infos || []).map(get.infoCard); }
	static cardInfoOL(card) { return '_noname_card:' + JSON.stringify([card.cardid, card.suit, card.number, card.name, card.nature]); }
	static infoCardOL(info) {
		if (!lib.cardOL) return info;
		var card;
		try {
			var info = JSON.parse(info.slice(13));
			var id = info.shift();
			if (!id) {
				card = ui.create.card();
				if (info && info[2]) card.init(info);
			}
			else if (lib.cardOL[id]) {
				if (lib.cardOL[id].name != info[2]) {
					if (info && info[2]) lib.cardOL[id].init(info);
				}
				card = lib.cardOL[id];
			}
			else if (game.online) {
				card = ui.create.card();
				card.cardid = id;
				if (info && info[2]) card.init(info);
				lib.cardOL[id] = card;
			}
		}
		catch (e) {
			console.log(e);
		}
		return card || info;
	}
	static cardsInfoOL(cards) { return Array.from(cards || []).map(get.cardInfoOL); }
	static infoCardsOL(infos) { return Array.from(infos || []).map(get.infoCardOL); }
	static playerInfoOL(player) { return '_noname_player:' + player.playerid; }
	static infoPlayerOL(info) { return lib.playerOL ? (lib.playerOL[info.slice(15)] || info) : info; }
	static playersInfoOL(players) { return Array.from(players || []).map(get.playerInfoOL); }
	static infoPlayersOL(infos) { return Array.from(infos || []).map(get.infoPlayerOL); }
	static funcInfoOL(func) {
		if (typeof func == 'function') {
			if (func._filter_args) {
				return '_noname_func:' + JSON.stringify(get.stringifiedResult(func._filter_args, 3));
			}
			const str = func.toString();
			// js内置的函数
			if ((/\{\s*\[native code\]\s*\}/).test(str)) return '_noname_func:function () {}';
			return '_noname_func:' + str;
		}
		return '';
	}
	static infoFuncOL(info) {
		let func;
		const str = info.slice(13).trim();
		try {
			// js内置的函数
			if ((/\{\s*\[native code\]\s*\}/).test(str)) return function () {};
			// 一般fun和数组形式
			if (str.startsWith("function") || str.startsWith("(")) eval(`func=(${str});`);
			// 其他奇形怪状的fun
			else {
				try {
					eval(`func = ${str}`);
				} catch {
					eval(`let obj = {${str}}; func = obj[Object.keys(obj)[0]]`);
				}
			}
		} catch (e) {
			console.error(`${e} in \n${str}`);
			return function () {};
		}
		if (Array.isArray(func)) {
			func = get.filter.apply(this, get.parsedResult(func));
		}
		return func;
	}
	static eventInfoOL(item, level, noMore) {
		return get.itemtype(item) == 'event' ? `_noname_event:${JSON.stringify(Object.entries(item).reduce((stringifying, entry) => {
			const key = entry[0];
			if (key == '_trigger') {
				if (noMore !== false) stringifying[key] = get.eventInfoOL(entry[1], null, false);
			}
			else if (!lib.element.GameEvent.prototype[key] && key != 'content' && get.itemtype(entry[1]) != 'event') stringifying[key] = get.stringifiedResult(entry[1], null, false);
			return stringifying;
		}, {}))}` : '';
	}
	/**
	 * @param {string} item
	 */
	static infoEventOL(item) {
		const evt = new lib.element.GameEvent();
		try {
			Object.entries(JSON.parse(item.slice(14))).forEach(entry => {
				const key = entry[0];
				if (typeof evt[key] != 'function') evt[key] = get.parsedResult(entry[1]);
			});
		}
		catch (error) {
			console.log(error);
		}
		return evt || item;
	}
	static stringifiedResult(item, level, nomore) {
		if (!item) return item;
		if (typeof item == 'function') {
			return get.funcInfoOL(item);
		}
		else if (typeof item == 'object') {
			switch (get.itemtype(item)) {
				case 'card': return get.cardInfoOL(item);
				case 'cards': return get.cardsInfoOL(item);
				case 'player': return get.playerInfoOL(item);
				case 'players': return get.playersInfoOL(item);
				case 'event':
					if (nomore === false) return '';
					return get.eventInfoOL(item);
				default:
					if (typeof level != 'number') {
						level = 8;
					}
					if (Array.isArray(item)) {
						if (level == 0) {
							return [];
						}
						var item2 = [];
						for (var i = 0; i < item.length; i++) {
							item2.push(get.stringifiedResult(item[i], level - 1, nomore));
						}
						return item2;
					}
					else if (Object.prototype.toString.call(item) == '[object Object]') {
						if (level == 0) {
							return {};
						}
						var item2 = {};
						for (var i in item) {
							item2[i] = get.stringifiedResult(item[i], level - 1, nomore);
						}
						return item2;
					}
					else {
						return {};
					}
			}
		}
		else if (item === Infinity) {
			return '_noname_infinity';
		}
		else {
			return item;
		}
	}
	static parsedResult(item) {
		if (!item) return item;
		if (typeof item == 'string') {
			if (item.startsWith('_noname_func:')) {
				return get.infoFuncOL(item);
			}
			else if (item.startsWith('_noname_card:')) {
				return get.infoCardOL(item);
			}
			else if (item.startsWith('_noname_player:')) {
				return get.infoPlayerOL(item);
			}
			else if (item.startsWith('_noname_event:')) {
				return get.infoEventOL(item);
			}
			else if (item == '_noname_infinity') {
				return Infinity;
			}
			else {
				return item;
			}
		}
		else if (Array.isArray(item)) {
			var item2 = [];
			for (var i = 0; i < item.length; i++) {
				item2.push(get.parsedResult(item[i]));
			}
			return item2;
		}
		else if (typeof item == 'object') {
			var item2 = {};
			for (var i in item) {
				item2[i] = get.parsedResult(item[i]);
			}
			return item2;
		}
		else {
			return item;
		}
	}
	static verticalStr(str, sp) {
		if (typeof str != 'string') return '';
		return Array.from(str).filter(value => value != '`').join('');
	}
	static numStr(num, method) {
		if (num == Infinity) {
			if (method == 'card') return get.selectableCards().length + ui.selected.cards.length;
			if (method == 'target') return get.selectableTargets().length + ui.selected.targets.length;
			return '∞';
		}
		return num.toString();
	}
	static rawName(str) {
		let str2 = lib.translate[str];
		if (lib.translate[str + '_ab']) str2 = lib.translate[str + '_ab'];
		if (!str2) return '';
		if (lib.translate[str + '_prefix'] && str2.startsWith(lib.translate[str + '_prefix'])) {
			return str2.slice(lib.translate[str + '_prefix'].length);
		}
		return str2;
	}
	/**
	 * 作用修改：只读前缀 不读_ab
	 */
	static rawName2(str) {
		let str2 = lib.translate[str];
		if (!str2) return '';
		if (lib.translate[str + '_prefix'] && str2.startsWith(lib.translate[str + '_prefix'])) {
			return str2.slice(lib.translate[str + '_prefix'].length);
		}
		return str2;
	}
	static slimNameHorizontal(str) {
		const slimName = lib.translate[`${str}_ab`] || lib.translate[str];
		if (!slimName) return '';
		const prefix = lib.translate[`${str}_prefix`];
		if (prefix && slimName.startsWith(prefix)) {
			//兼容版特化处理
			if (lib.compatibleEdition) return `${get.prefixSpan(prefix, str)}<span>${slimName.slice(prefix.length)}　</span>`;
			return `${get.prefixSpan(prefix, str)}<span>${slimName.slice(prefix.length)}</span>`;
		}
		return slimName;
	}
	/**
	 * @param {string} prefix
	 * @param {string} name
	 * @returns {string}
	 */
	static prefixSpan(prefix, name) {
		const config = lib.config.buttoncharacter_prefix;
		if (config == 'off') return '';
		if (config == 'simple') {
			const span = document.createElement('span');
			span.innerHTML = prefix;
			return span.outerHTML;
		}
		const namePrefix = lib.namePrefix.get(prefix), exists = Boolean(namePrefix);
		if (exists && 'getSpan' in namePrefix) return namePrefix.getSpan(prefix, name);
		const span = document.createElement('span');
		if (exists) {
			if ('color' in namePrefix) span.style.color = namePrefix.color;
			if ('nature' in namePrefix) span.dataset.nature = namePrefix.nature;
			if ('showName' in namePrefix) prefix = namePrefix.showName;
		}
		else span.style.color = '#ffffff';
		span.innerHTML = prefix;
		return span.outerHTML;
	}
	static slimName(str) { return get.verticalStr(get.slimNameHorizontal(str), true); }
	static time() {
		if (lib.status.dateDelaying) {
			return lib.getUTC(lib.status.dateDelaying) - lib.getUTC(lib.status.date) - lib.status.dateDelayed;
		}
		else {
			return lib.getUTC(new Date()) - lib.getUTC(lib.status.date) - lib.status.dateDelayed;
		}
	}
	static utc() { return (new Date()).getTime(); }
	static evtDistance(e1, e2) {
		var dx = (e1.clientX - e2.clientX) / game.documentZoom;
		var dy = (e1.clientY - e2.clientY) / game.documentZoom;
		return Math.sqrt(dx * dx + dy * dy);
	}
	static xyDistance(from, to) { return Math.sqrt((from[0] - to[0]) * (from[0] - to[0]) + (from[1] - to[1]) * (from[1] - to[1])); }
	/**
	 * @overload
	 * @returns { void }
	 */
	/**
	 * @overload
	 * @param { string } obj
	 * @returns { 'position' | 'natures' | 'nature' }
	 */
	/**
	 * @overload
	 * @param { Player[] } obj
	 * @returns { 'players' }
	 */
	/**
	 * @overload
	 * @param { Card[] } obj
	 * @returns { 'cards' }
	 */
	/**
	 * @overload
	 * @param { [number, number] } obj
	 * @returns { 'select' }
	 */
	/**
	 * @overload
	 * @param { [number, number, number, number] } obj
	 * @returns { 'divposition' }
	 */
	/**
	 * @overload
	 * @param { Button } obj
	 * @returns { 'button' }
	 */
	/**
	 * @overload
	 * @param { Card } obj
	 * @returns { 'card' }
	 */
	/**
	 * @overload
	 * @param { Player } obj
	 * @returns { 'player' }
	 */
	/**
	 * @overload
	 * @param { Dialog } obj
	 * @returns { 'dialog' }
	 */
	/**
	 * @overload
	 * @param { GameEvent | GameEventPromise } obj
	 * @returns { 'event' }
	 */
	static itemtype(obj) {
		if (typeof obj == 'string') {
			if (obj.length <= 5) {
				let bool = true;
				for (let i = 0; i < obj.length; i++) {
					if (/h|e|j|s|x/.test(obj[i]) == false) {
						bool = false; break;
					}
				}
				if (bool) return 'position';
			}
			if (obj.includes(lib.natureSeparator) && obj.split(lib.natureSeparator).every(n => lib.nature.has(n))) return 'natures';
			if (lib.nature.has(obj)) return 'nature';
		}
		if (Array.isArray(obj) && obj.length > 0) {
			if (obj.every(p => p instanceof lib.element.Player)) return 'players';
			if (obj.every(p => p instanceof lib.element.Card)) return 'cards';
			if (obj.length == 2) {
				if (typeof obj[0] == 'number' && typeof obj[1] == 'number') {
					if (obj[0] <= obj[1] || obj[1] <= -1) return 'select';
				}
			}
			if (obj.length == 4) {
				if (obj.every(p => typeof p == 'number')) {
					return 'divposition';
				}
			}
		}
		if (obj instanceof lib.element.Button || obj instanceof HTMLDivElement && obj.classList.contains('button') ) return 'button';
		if (obj instanceof lib.element.Card) return 'card';
		if (obj instanceof lib.element.Player) return 'player';
		if (obj instanceof lib.element.Dialog) return 'dialog';
		if (obj instanceof lib.element.GameEvent ||
			obj instanceof lib.element.GameEventPromise) return 'event';

		if (typeof obj !== 'object' || obj === null) return;

		if (lib.experimental.symbol.itemType in obj)
			return obj[lib.experimental.symbol.itemType];
	}
	static equipNum(card) {
		if (get.type(card) == 'equip') {
			return parseInt(get.subtype(card)[5]);
		}
		return 0;
	}
	static objtype(obj) {
		if (Object.prototype.toString.call(obj) === '[object Array]') return 'array';
		if (Object.prototype.toString.call(obj) === '[object Object]') return 'object';
		if (Object.prototype.toString.call(obj) === '[object HTMLDivElement]') return 'div';
		if (Object.prototype.toString.call(obj) === '[object HTMLTableElement]') return 'table';
		if (Object.prototype.toString.call(obj) === '[object HTMLTableRowElement]') return 'tr';
		if (Object.prototype.toString.call(obj) === '[object HTMLTableCellElement]') return 'td';
		if (Object.prototype.toString.call(obj) === '[object HTMLBodyElement]') return 'td';
		if (Object.prototype.toString.call(obj) === '[object DocumentFragment]') return 'fragment';
	}
	static type(obj, method, player) {
		if (typeof obj == 'string') obj = { name: obj };
		if (typeof obj != 'object') return;
		var name = get.name(obj, player);
		if (!lib.card[name]) {
			if (!name.startsWith('sha_')) return;
			if (name.slice(4).split('_').every(n => lib.nature.has(n))) return lib.card['sha'].type;
		}
		if (method == 'trick' && lib.card[name].type == 'delay') return 'trick';
		return lib.card[name].type;
	}
	static type2(card, player) { return get.type(card, 'trick', player); }
	/**
	 *
	 * @param { string | Card | VCard | CardBaseUIData } obj
	 * @param { false | Player } [player]
	 * @returns { string }
	 */
	static subtype(obj, player) {
		if (typeof obj == 'string') obj = { name: obj };
		if (typeof obj != 'object') return;
		const name = get.name(obj, player);
		if (!lib.card[name]) return;
		let subtype = lib.card[name].subtype;
		return subtype;
	}
	static equiptype(card, player) {
		var subtype = get.subtype(card, player);
		if (subtype.startsWith('equip')) return parseInt(subtype[5]);
		return 0;
	}
	/**
	 *
	 * @param { Card | VCard | CardBaseUIData } card
	 * @param { false | Player } [player]
	 * @returns { string }
	 */
	static name(card, player) {
		if (get.itemtype(player) == 'player' || (player !== false && get.position(card) == 'h')) {
			var owner = player || get.owner(card);
			if (owner) {
				return game.checkMod(card, owner, card.name, 'cardname', owner);
			}
		}
		return card.name;
	}
	/**
	 * @param {Card | VCard | Card[] | VCard[]} card
	 * @param {false | Player} [player]
	 * @returns {string}
	 */
	static suit(card, player) {
		if (typeof card !== 'object') return;
		if (Array.isArray(card)) {
			if (card.length == 1) return get.suit(card[0], player);
			return 'none';
		}
		else if (!('suit' in card) && Array.isArray(card.cards)) {
			return get.suit(card.cards, player);
		}
		else {
			if (player !== false) {
				const owner = player || get.owner(card);
				if (owner) {
					return game.checkMod(card, owner, game.checkMod(card, card.suit, 'suit', owner), 'cardsuit', owner);
				}
			}
			if (card.suit === 'unsure' || lib.suits.includes(card.suit)) return card.suit;
			return 'none';
		}
	}
	/**
	 * @param {Card | VCard | Card[] | VCard[]} card
	 * @param {false | Player} [player]
	 * @returns {string}
	 */
	static color(card, player) {
		if (typeof card !== 'object') return;
		if (Array.isArray(card)) {
			if (!card.length) return 'none';
			const cards = card.slice(), color = get.color(cards.shift(), player);
			for (const anotherCard of cards) {
				if (get.color(anotherCard, player) != color) return 'none';
			}
			return color;
		}
		else if (card.color === 'unsure' || Object.keys(lib.color).includes(card.color)) {
			return card.color;
		}
		else if (Array.isArray(card.cards) && !lib.suit.includes(card.suit)) {
			return get.color(card.cards, player);
		}
		else {
			const suit = get.suit(card, player);
			for (const entry of Object.entries(lib.color)) {
				if (entry[1].includes(suit)) return entry[0];
			}
			return 'none';
		}
	}
	/**
	 * @param {Card | VCard} card
	 * @param {false | Player} [player]
	 * @returns {number}
	 */
	static number(card, player) {
		if (typeof card !== 'object') return;
		//狗卡你是真敢出啊
		var number = null;
		if ('number' in card) {
			number = card.number;
			if (number === 'unsure') return number;
			else if (typeof number != 'number') number = null;
		}
		else {
			if (card.cards && card.cards.length == 1) number = get.number(card.cards[0], false);
		}
		if (player !== false) {
			var owner = player || get.owner(card);
			if (owner) {
				return game.checkMod(card, owner, number, 'cardnumber', owner);
			}
		}
		return number;
	}
	/**
	 * 返回一张杀的属性。如有多种属性则用`lib.natureSeparator`分割开来。例：火雷【杀】的返回值为`fire|thunder`
	 * @param {string | string[] | Card | VCard} card
	 * @param {false | Player} [player]
	 * @returns {string}
	 */
	static nature(card, player) {
		if (typeof card == 'string') return card.split(lib.natureSeparator).sort(lib.sort.nature).join(lib.natureSeparator);
		if (Array.isArray(card)) return card.sort(lib.sort.nature).join(lib.natureSeparator);
		var nature = card.nature;
		if (get.itemtype(player) == 'player' || player !== false) {
			var owner = get.owner(card);
			if (owner) {
				return game.checkMod(card, owner, nature, 'cardnature', owner);
			}
		}
		return nature;
	}
	/**
	 * 返回包含所有属性的数组
	 * @param {string[] | string} card
	 * @param {false | Player} [player]
	 * @returns {string[]}
	 */
	static natureList(card, player) {
		if (!card) return [];
		if (get.itemtype(card) == 'natures') return card.split(lib.natureSeparator);
		if (get.itemtype(card) == 'nature') return [card];
		const natures = get.nature(card, player);
		if (typeof natures != 'string') return [];
		return natures.split(lib.natureSeparator);
	}
	static cards(num, putBack) {
		if (_status.waitingForCards) {
			ui.create.cards.apply(ui.create, _status.waitingForCards);
			delete _status.waitingForCards;
		}
		var list = [];
		var card = false;
		if (typeof num != 'number') num = 1;
		if (num == 0) { card = true; num = 1; }
		if (num < 0) num = 1;
		while (num--) {
			if (ui.cardPile.hasChildNodes() == false) {
				game.washCard();
			}
			if (ui.cardPile.hasChildNodes() == false) {
				game.over('平局');
				return [];
			}
			var cardx = ui.cardPile.removeChild(ui.cardPile.firstChild);
			cardx.original = 'c';
			list.push(cardx);
		}
		if (putBack) {
			for (let i = list.length - 1; i >= 0; i--) {
				ui.cardPile.insertBefore(list[i], ui.cardPile.firstChild);
			}
		}
		game.updateRoundNumber();
		if (card) return list[0];
		return list;
	}
	static judge(card) {
		const cardInfo = (card.viewAs ? lib.card[card.viewAs] : get.info(card));
		return (cardInfo && cardInfo.judge) ? cardInfo.judge : ()=>0;
	}
	static judge2(card) { return card.viewAs ? lib.card[card.viewAs].judge2 : get.info(card).judge2; }
	static distance(from, to, method) {
		if (from == to) return 0;
		if (!game.players.includes(from) && !game.dead.includes(from)) return Infinity;
		if (!game.players.includes(to) && !game.dead.includes(to)) return Infinity;
		let n = 1;
		if (game.chess) {
			let fxy = from.getXY(), txy = to.getXY();
			n = Math.abs(fxy[0] - txy[0]) + Math.abs(fxy[1] - txy[1]);
			if (method == 'raw' || method == 'pure' || method == 'absolute') return n;
		}
		else if (to.isMin(true) || from.isMin(true)) {
			if (method == 'raw' || method == 'pure' || method == 'absolute') return n;
		}
		else {
			let player = from, length = game.players.length;
			const totalPopulation = game.players.length + game.dead.length + 1;
			for (let iwhile = 0; iwhile < totalPopulation; iwhile++) {
				if (player.nextSeat != to) {
					player = player.nextSeat;
					if (player.isAlive() && !player.isOut() && !player.hasSkill('undist') && !player.isMin(true)) n++;
				}
				else {
					break;
				}
			}
			for (let i = 0; i < game.players.length; i++) {
				if (game.players[i].isOut() || game.players[i].hasSkill('undist') || game.players[i].isMin(true)) length--;
			}
			if (method == 'absolute') return n;
			if (from.isDead()) length++;
			if (to.isDead()) length++;
			const left = from.hasSkillTag('left_hand'), right = from.hasSkillTag('right_hand');
			if (left === right) n = Math.min(n, length - n);
			else if (left == true) n = length - n;
			if (method == 'raw' || method == 'pure') return n;
		}
		n = game.checkMod(from, to, n, 'globalFrom', from);
		n = game.checkMod(from, to, n, 'globalTo', to);
		const equips1 = from.getCards('e', function (card) {
			return !ui.selected.cards || !ui.selected.cards.includes(card);
		}), equips2 = to.getCards('e', function (card) {
			return !ui.selected.cards || !ui.selected.cards.includes(card);
		});
		for (let i = 0; i < equips1.length; i++) {
			let info = get.info(equips1[i]).distance;
			if (!info) continue;
			if (info.globalFrom) {
				n += info.globalFrom;
			}
		}
		for (let i = 0; i < equips2.length; i++) {
			let info = get.info(equips2[i]).distance;
			if (!info) continue;
			if (info.globalTo) {
				n += info.globalTo;
			}
			if (info.attaclTo) {
				m += info.attaclTo;
			}
		}
		if (method == 'attack') {
			let m = n;
			m = game.checkMod(from, to, m, 'attackFrom', from);
			m = game.checkMod(from, to, m, 'attackTo', to);
			return m;
			// const attakRange=from.getEquipRange();
			// m+=(1-attakRange);
			// for(let i=0;i<equips2.length;i++){
			// 	let info=get.info(equips2[i]).distance;
			// 	if(!info) continue;
			// 	if(info.attaclTo){
			// 		m+=info.attaclTo;
			// 	}
			// }
			// return n;
		}
		else if (method == 'unchecked') return n;
		return Math.max(1, n);
	}
	/**
	 * @overload
	 * @param { string } item
	 * @returns { Skill }
	 */
	/**
	 * @overload
	 * @param { Card | VCard | CardBaseUIData } item
	 * @param { Player | false } [player]
	 * @returns { any }
	 */
	static info(item, player) {
		if (typeof item == 'string') {
			return lib.skill[item];
		}
		if (typeof item == 'object') {
			var name = item.name;
			if (player !== false) name = get.name(item, player);
			return lib.card[name];
		}
	}
	/**
	 * @param { number | Select | (()=>Select) } [select]
	 * @returns { Select }
	 */
	static select(select) {
		if (typeof select == 'function') return get.select(select());
		else if (typeof select == 'number') return [select, select];
		else if (select && get.itemtype(select) == 'select') return select;
		return [1, 1];
	}
	static card(original) {
		if (_status.event.skill) {
			var card = get.info(_status.event.skill).viewAs;
			if (typeof card == 'function') card = card(ui.selected.cards, _status.event.player);
			if (card) {
				return get.autoViewAs(card, ui.selected.cards);
			}
		}
		if (_status.event._get_card) {
			return _status.event._get_card;
		}
		var card = ui.selected.cards[0];
		if (original) return card;
		if (card) {
			card = get.autoViewAs(card, ui.selected.cards);
		}
		return card;
	}
	/**
	 * @overload
	 * @returns {GameEvent}
	 */
	/**
	 * @template { keyof GameEvent } T
	 * @overload
	 * @param {T} key
	 * @returns {GameEvent[T]}
	 */
	static event(key) { return key ? _status.event[key] : _status.event; }
	static player() { return _status.event.player; }
	static players(sort, dead, out) {
		var players = game.players.slice(0);
		if (sort != false) {
			if (typeof sort == 'function') players.sort(sort);
			else players.sortBySeat(get.itemtype(sort) == "player" ? sort : _status.event.player);
		}
		if (dead) players = players.concat(game.dead);
		if (!out) players = players.filter(current => !current.isOut());
		return players;
	}
	static position(card, ordering) {
		if (get.itemtype(card) == 'player') return parseInt(card.dataset.position);
		if (card.timeout && card.destiny && card.destiny.classList) {
			if (card.destiny.classList.contains('equips')) return 'e';
			if (card.destiny.classList.contains('judges')) return 'j';
			if (card.destiny.classList.contains('expansions')) return 'x';
			if (card.destiny.classList.contains('handcards')) return card.classList.contains('glows') ? 's' : 'h';
			if (card.destiny.id == 'cardPile') return 'c';
			if (card.destiny.id == 'discardPile') return 'd';
			if (card.destiny.id == 'special') return 's';
			if (card.destiny.id == 'ordering') return ordering ? 'o' : 'd';
			return null;
		}
		if (!card.parentNode || !card.parentNode.classList) return;
		if (card.parentNode.classList.contains('equips')) return 'e';
		if (card.parentNode.classList.contains('judges')) return 'j';
		if (card.parentNode.classList.contains('expansions')) return 'x';
		if (card.parentNode.classList.contains('handcards')) return card.classList.contains('glows') ? 's' : 'h';
		if (card.parentNode.id == 'cardPile') return 'c';
		if (card.parentNode.id == 'discardPile') return 'd';
		if (card.parentNode.id == 'special') return 's';
		if (card.parentNode.id == 'ordering') return ordering ? 'o' : 'd';
		return null;
	}
	static skillTranslation(str, player) {
		var str2;
		if (str.startsWith('re')) {
			str2 = str.slice(2);
			if (str2) {
				if (lib.translate[str] == lib.translate[str2]) {
					if (player.hasSkill(str2)) {
						return '界' + lib.translate[str];
					}
				}
			}
		}
		else if (str.startsWith('xin')) {
			str2 = str.slice(3);
			if (str2) {
				if (lib.translate[str] == lib.translate[str2]) {
					if (player.hasSkill(str2)) {
						return '新' + lib.translate[str];
					}
				}
			}
		}
		return get.translation(str);
	}
	static skillInfoTranslation(name, player) {
		if (player && lib.dynamicTranslate[name]) return lib.dynamicTranslate[name](player, name);
		var str = lib.translate[name + '_info'];
		if (!str) return '';
		return str;
		// return str.replace(/锁定技/g,'<span class="yellowtext">锁定技</span>').
		// 	replace(/限定技/g,'<span class="yellowtext">限定技</span>').
		// 	replace(/觉醒技/g,'<span class="greentext">觉醒技</span>').
		// 	replace(/主将技/g,'<span class="bluetext">主将技</span>').
		// 	replace(/副将技/g,'<span class="bluetext">副将技</span>').
		// 	replace(/阵法技/g,'<span class="bluetext">阵法技</span>').
		// 	replace(/主公技/g,'<span class="firetext">主公技</span>');
	}
	/**
	 * @returns {string}
	 */
	static translation(str, arg) {
		if (str && typeof str == 'object' && (str.name || str._tempTranslate)) {
			if (str._tempTranslate) return str._tempTranslate;
			var str2;
			if (arg == 'viewAs' && str.viewAs) {
				str2 = get.translation(str.viewAs);
			}
			else {
				str2 = get.translation(str.name);
			}
			if (str2 == '杀') {
				str2 = '';
				if (typeof str.nature == 'string') {
					let natures = str.nature.split(lib.natureSeparator).sort(lib.sort.nature);
					for (let nature of natures) {
						str2 += lib.translate['nature_' + nature] || lib.translate[nature] || '';
					}
				}
				str2 += '杀';
			}
			if (get.itemtype(str) == 'card' || str.isCard) {
				if (_status.cardtag && str.cardid) {
					var tagstr = '';
					for (var i in _status.cardtag) {
						if (_status.cardtag[i].includes(str.cardid)) {
							tagstr += lib.translate[i + '_tag'];
						}
					}
					if (tagstr) {
						str2 += '·' + tagstr;
					}
				}
				if (str.suit && str.number || str.isCard) {
					var cardnum = get.number(str, false) || '';
					if ([1, 11, 12, 13].includes(cardnum)) {
						cardnum = { '1': 'A', '11': 'J', '12': 'Q', '13': 'K' }[cardnum];
					}
					if (arg == 'viewAs' && str.viewAs != str.name && str.viewAs) {
						str2 += '（' + get.translation(str) + '）';
					}
					else {
						str2 += '【' + get.translation(get.suit(str, false)) + cardnum + '】';
						// var len=str2.length-1;
						// str2=str2.slice(0,len)+'<span style="letter-spacing: -2px">'+str2[len]+'·</span>'+get.translation(str.suit)+str.number;
					}
				}
			}
			return str2;
		}
		if (Array.isArray(str)) {
			var str2 = get.translation(str[0], arg);
			for (var i = 1; i < str.length; i++) {
				str2 += '、' + get.translation(str[i], arg);
			}
			return str2;
		}
		if (get.itemtype(str) == 'natures') {
			let natures = str.split(lib.natureSeparator).sort(lib.sort.nature);
			var str2 = '';
			for (var nature of natures) {
				str2 += lib.translate['nature_' + nature] || lib.translate[nature] || '';
			}
			return str2;
		}
		if (arg == 'skill') {
			if (lib.translate[str + '_ab']) return lib.translate[str + '_ab'];
			if (lib.translate[str]) return lib.translate[str].slice(0, 2);
			return str;
		}
		else if (arg == 'info') {
			if (lib.translate[str + '_info']) return lib.translate[str + '_info'];
			var str2 = str.slice(0, str.length - 1);
			if (lib.translate[str2 + '_info']) return lib.translate[str2 + '_info'];
			if (str.lastIndexOf('_') > 0) {
				str2 = str.slice(0, str.lastIndexOf('_'));
				if (lib.translate[str2 + '_info']) return lib.translate[str2 + '_info'];
			}
			str2 = str.slice(0, str.length - 2);
			if (lib.translate[str2 + '_info']) return lib.translate[str2 + '_info'];
			if (lib.skill[str] && lib.skill[str].prompt) return lib.skill[str].prompt;
		}
		if (lib.translate[str]) {
			return lib.translate[str];
		}
		if (typeof str == 'string') {
			if (lib.translate['nature_' + str]) return lib.translate['nature_' + str];
			return str;
		}
		if (typeof str == 'number' || typeof str == 'boolean') {
			return str.toString();
		}
		if (str && str.toString) {
			return str.toString();
		}
		return '';
	}
	static menuZoom(){
		if(game.menuZoom === undefined || game.menuZoom === null){
			return game.documentZoom;
		}
		return game.menuZoom;
	}
	static strNumber(num) {
		switch (num) {
			case 1: return 'A';
			case 11: return 'J';
			case 12: return 'Q';
			case 13: return 'K';
			default: return num.toString();
		}
	}
	static cnNumber(num, ordinal) {
		if (isNaN(num)) return '';
		let numStr = num.toString();
		if (numStr === 'Infinity') return '∞';
		if (numStr === '-Infinity') return '-∞';
		if (!/^\d+$/.test(numStr)) return num;

		const chars = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
		const units = ['', '十', '百', '千'];

		if (numStr.length <= 2) {//两位数以下单独处理保证效率
			if (numStr.length === 1) return !ordinal && num === 2 ? '两' : chars[num];
			return `${numStr[0] === '1' ? '' : chars[numStr[0]]}十${numStr[1] === '0' ? '' : chars[numStr[1]]}`;
		}

		numStr = numStr.replace(/(?=(\d{4})+$)/g, ',').split(',').filter(Boolean);
		const handleZero = str => {
			let result = str.replace(/零{2,}/g, '零');
			if (result.length > 1) result = result.replace(/零+$/g, '');
			return result;
		};
		const _transform = str => {
			if (str === '2' && !ordinal) return '两';
			let result = '';
			for (let i = 0; i < str.length; i++) {
				const part = str[str.length - 1 - i];
				let char = chars[+part];
				let unit = units[i];
				if (char === '零') unit = '';
				else if (char === '一' && i === 1) char = '';
				else if (char === '二' && i > 1 && !ordinal) char = '两';
				result = char + unit + result;
			}
			result = handleZero(result);
			return result;
		};
		let result = '';
		let tempYi = '';
		for (let i = 0; i < numStr.length; i++) {
			const part = numStr[numStr.length - 1 - i];
			let char = _transform(part);
			let unit = '';
			if (i % 2) {
				[unit, tempYi] = ['万' + tempYi, ''];
				if (char === '零') unit = '';
			} else {
				unit = '亿'.repeat(i / 2);
				if (char === '零') [unit, tempYi] = ['', unit];
			}
			result = char + unit + result;
		}
		result = handleZero(result);
		return result;
	}
	/**
	 * 遍历子元素
	 * @param {HTMLElement} node
	 * @returns {Iterable<HTMLElement>} 迭代器
	 */
	static *iterableChildNodes(node){
		for(let i=0;i<arguments.length;i++){
			let arg = arguments[i];
			for(let j=0;j<arg.childElementCount;j++){
				yield arg.childNodes[j];
			}
		}
	}
	/**
	 * @param {((a: Button, b: Button) => number)} [sort] 排序函数
	 * @returns { Button[] }
	 */
	static selectableButtons(sort) {
		if (!_status.event.player) return [];
		var buttons = _status.event.dialog.buttons;
		var selectable = [];
		for (var i = 0; i < buttons.length; i++) {
			if (buttons[i].classList.contains('selectable') &&
				buttons[i].classList.contains('selected') == false) {
				selectable.push(buttons[i]);
			}
		}
		if (sort) {
			selectable.sort(sort);
		}
		return selectable;
	}
	/**
	 * @param {((a: Card, b: Card) => number)} [sort] 排序函数
	 * @returns { Card[] }
	 */
	static selectableCards(sort) {
		if (!_status.event.player) return [];
		var cards = _status.event.player.getCards('hes');
		var selectable = [];
		for (var i = 0; i < cards.length; i++) {
			if (cards[i].classList.contains('selectable') &&
				cards[i].classList.contains('selected') == false) {
				selectable.push(cards[i]);
			}
		}
		if (sort) {
			selectable.sort(sort);
		}
		return selectable;
	}
	/**
	 * @returns { string[] } 技能名数组
	 */
	static skills() {
		var skills = [];
		if (ui.skills) {
			skills = skills.concat(ui.skills.skills);
		}
		if (ui.skills2) {
			skills = skills.concat(ui.skills2.skills);
		}
		if (ui.skills3) {
			skills = skills.concat(ui.skills3.skills);
		}
		return skills;
	}
	static gainableSkills(func, player) {
		var list = [];
		for (var i in lib.character) {
			if (lib.filter.characterDisabled(i)) continue;
			if (lib.filter.characterDisabled2(i)) continue;
			if (lib.character[i][4]) {
				if (lib.character[i][4].includes('boss')) continue;
				if (lib.character[i][4].includes('hiddenboss')) continue;
				if (lib.character[i][4].includes('minskin')) continue;
				if (lib.character[i][4].includes('unseen')) continue;
			}
			for (var j = 0; j < lib.character[i][3].length; j++) {
				var skill = lib.character[i][3][j];
				var info = lib.skill[skill];
				if (lib.filter.skillDisabled(skill)) continue;
				if (func && !func(info, skill, i)) continue;
				if (player && player.hasSkill && info.ai && info.ai.combo && !player.hasSkill(info.ai.combo)) continue;
				list.add(skill);
			}
		}
		return list;
	}
	static gainableSkillsName(name, func) {
		var list = [];
		if (name && lib.character[name]) {
			if (lib.character[name][4]) {
				if (lib.character[name][4].includes('boss')) return list;
				if (lib.character[name][4].includes('hiddenboss')) return list;
				if (lib.character[name][4].includes('minskin')) return list;
				if (lib.character[name][4].includes('unseen')) return list;
			}
			for (var j = 0; j < lib.character[name][3].length; j++) {
				var skill = lib.character[name][3][j];
				var info = lib.skill[skill];
				if (lib.filter.skillDisabled(skill)) continue;
				if (func && !func(info, skill, name)) continue;
				list.add(skill);
			}
		}
		return list;
	}
	static gainableCharacters(func) {
		var list = [];
		for (var i in lib.character) {
			var info = lib.character[i];
			if (!info) continue;
			if (typeof func == 'function' && !func(info, i)) continue;
			if (lib.filter.characterDisabled(i)) continue;
			if (lib.filter.characterDisabled2(i)) continue;
			list.push(i);
		}
		if (func === true) {
			var players = game.players.concat(game.dead);
			for (var i = 0; i < players.length; i++) {
				list.remove(players[i].name);
				list.remove(players[i].name1);
				list.remove(players[i].name2);
			}
		}
		return list;
	}
	/**
	 * @param {((a: Player, b: Player) => number)} [sort] 排序函数
	 * @returns { Player[] }
	 */
	static selectableTargets(sort) {
		var selectable = [];
		var players = game.players.slice(0);
		if (_status.event.deadTarget) players.addArray(game.dead);
		for (var i = 0; i < players.length; i++) {
			if (players[i].classList.contains('selectable') &&
				players[i].classList.contains('selected') == false) {
				selectable.push(players[i]);
			}
		}
		selectable.randomSort();
		if (sort) {
			selectable.sort(sort);
		}
		return selectable;
	}
	static filter(filter, i) {
		if (typeof filter == 'function') return filter;
		if (i == undefined) i = 0;
		var result = function () {
			if (filter == arguments[i]) return true;
			for (var j in filter) {
				if (Object.prototype.hasOwnProperty.call(filter, j)) {
					if (get.itemtype(arguments[i]) == 'card') {
						if (j == 'name') {
							if (Array.isArray(filter[j])) {
								if (filter[j].includes(get.name(arguments[i])) == false) return false;
							}
							else if (typeof filter[j] == 'string') {
								if (get.name(arguments[i]) != filter[j]) return false;
							}
						}
						else if (j == 'type') {
							if (Array.isArray(filter[j])) {
								if (filter[j].includes(get.type(arguments[i])) == false) return false;
							}
							else if (typeof filter[j] == 'string') {
								if (get.type(arguments[i]) != filter[j]) return false;
							}
						}
						else if (j == 'subtype') {
							if (Array.isArray(filter[j])) {
								if (filter[j].includes(get.subtype(arguments[i])) == false) return false;
							}
							else if (typeof filter[j] == 'string') {
								if (get.subtype(arguments[i]) != filter[j]) return false;
							}
						}
						else if (j == 'color') {
							if (Array.isArray(filter[j])) {
								if (filter[j].includes(get.color(arguments[i])) == false) return false;
							}
							else if (typeof filter[j] == 'string') {
								if (get.color(arguments[i]) != filter[j]) return false;
							}
						}
						else if (j == 'suit') {
							if (Array.isArray(filter[j])) {
								if (filter[j].includes(get.suit(arguments[i])) == false) return false;
							}
							else if (typeof filter[j] == 'string') {
								if (get.suit(arguments[i]) != filter[j]) return false;
							}
						}
						else if (j == 'number') {
							if (Array.isArray(filter[j])) {
								if (filter[j].includes(get.number(arguments[i])) == false) return false;
							}
							else if (typeof filter[j] == 'string') {
								if (get.number(arguments[i]) != filter[j]) return false;
							}
						}
						else if (Array.isArray(filter[j])) {
							if (filter[j].includes(arguments[i][j]) == false) return false;
						}
						else if (typeof filter[j] == 'string') {
							if (arguments[i][j] != filter[j]) return false;
						}
					}
					else {
						if (arguments[i][j] != filter[j]) return false;
					}
				}
			}
			return true;
		};
		result._filter_args = [filter, i];
		return result;
	}
	static cardCount(card, player) {
		var num;
		if (player == undefined) player = _status.event.player;
		if (card == true) {
			num = 0;
			var stat = player.getStat('card');
			for (var i in stat) {
				if (typeof stat[i] == 'number') num += stat[i];
			}
			return num;
		}
		if (typeof card == 'object') {
			card = card.name;
		}
		num = player.getStat('card')[card];
		if (num == undefined) return 0;
		return num;
	}
	static skillCount(skill, player) {
		if (player == undefined) player = _status.event.player;
		var num = player.getStat('skill')[skill];
		if (num == undefined) return 0;
		return num;
	}
	static owner(card, method) {
		return game.players.concat(game.dead).find(current=>{
			if(current.judging[0] == card && method != "judge")return true;
			let parent = card.parentNode;
			if(parent == current.node.handcards1 || parent == current.node.handcards2){
				return !card.classList.contains('removing');
			}else if(parent == current.node.equips){
				return !card.classListContains('removing','feichu','emptyequip');
			}else if(parent == current.node.judges){
				return !card.classListContains('removing','feichu');
			}else if(parent == current.node.expansions){
				return !card.classListContains('removing');
			}
			return false;
		});
		//return game.players.concat(game.dead).find(current =>
		//	current.getCards("hejsx").includes(card) || (current.judging[0] == card && method != "judge"));
	}
	static noSelected() { return ui.selected.buttons.length + ui.selected.cards.length + ui.selected.targets.length == 0; }
	static population(identity) {
		return identity == undefined ?
			game.players.length + game.dead.length :
			game.players.filter(current => current.identity == identity).length;
	}
	static totalPopulation(identity) {
		return identity == undefined ?
			game.players.length + game.dead.length :
			game.players.concat(game.dead).filter(current => current.identity == identity).length;
	}
	/**
	 * @param { Card | VCard } item
	 */
	static cardtag(item, tag) {
		return (item.cardid && (get.itemtype(item) == 'card' || !item.cards || !item.cards.length || item.name == item.cards[0].name) && _status.cardtag && _status.cardtag[tag] && _status.cardtag[tag].includes(item.cardid))
			|| (item.cardtags && item.cardtags.includes(tag));
	}
	static tag(item, tag, item2, bool) {
		var result;
		if (get.info(item, bool) && get.info(item, bool).ai && get.info(item, bool).ai.tag) {
			result = get.info(item, bool).ai.tag[tag];
		}
		if (typeof result == 'function') return result(item, item2);
		return result;
	}
	static sortCard(sort) {
		var func;
		if (sort == 'type_sort') {
			func = function (card) {
				var type = get.type(card, null, false);
				var subtype = get.subtype(card, false);
				if (lib.cardType[subtype]) {
					return lib.cardType[subtype];
				}
				if (lib.cardType[type]) {
					return lib.cardType[type];
				}
				switch (type) {
					case 'basic': return 2;
					case 'chess': return 1.5;
					case 'trick': return -1;
					case 'delay': return -2;
					case 'equip': return -3;
					default: return -4;
				}
			};
		}
		else if (sort == 'suit_sort') {
			func = function (card) {
				if (get.suit(card) == 'heart') return 2;
				if (get.suit(card) == 'diamond') return 1;
				if (get.suit(card) == 'spade') return -1;
				if (get.suit(card) == 'club') return -2;
			};
		}
		else if (sort == 'number_sort') {
			func = function (card) {
				return get.number(card) - 7 + 0.5;
			};
		}
		return func;
	}
	static difficulty() {
		switch (get.config('difficulty')) {
			case 'easy': return 1;
			case 'normal': return 2;
			case 'hard': return 3;
			default: return 1;
		}
	}
	static cardPile(name, create) {
		var filter = function (card) {
			if (typeof name == 'string') {
				if (card.name == name) {
					return true;
				}
			}
			else if (typeof name == 'function') {
				if (name(card)) {
					return true;
				}
			}
			return false;
		};
		if (create != 'discardPile') {
			var num = get.rand(0, ui.cardPile.childNodes.length - 1);
			for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
				var j = i;
				if (j >= ui.cardPile.childNodes.length) j -= ui.cardPile.childNodes.length;
				if (filter(ui.cardPile.childNodes[j])) {
					return ui.cardPile.childNodes[j];
				}
			}
		}
		if (create != 'cardPile') {
			for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
				var j = i;
				if (j >= ui.discardPile.childNodes.length) j -= ui.discardPile.childNodes.length;
				if (filter(ui.discardPile.childNodes[j])) {
					return ui.discardPile.childNodes[j];
				}
			}
		}
		if (create == 'field') {
			var found = null;
			game.findPlayer(function (current) {
				var ej = current.getCards('ej');
				for (var i = 0; i < ej.length; i++) {
					if (filter(ej[i])) {
						found = ej[i];
						return true;
					}
				}
			});
			return found;
		}
		if (create && !['cardPile', 'discardPile', 'field'].includes(create)) {
			return game.createCard(name);
		}
		return null;
	}
	static cardPile2(name) { return get.cardPile(name, 'cardPile'); }
	static discardPile(name) { return get.cardPile(name, 'discardPile'); }
	static aiStrategy() {
		switch (get.config('ai_strategy')) {
			case 'ai_strategy_1': return 1;
			case 'ai_strategy_2': return 2;
			case 'ai_strategy_3': return 3;
			case 'ai_strategy_4': return 4;
			case 'ai_strategy_5': return 5;
			case 'ai_strategy_6': return 6;
			default: return 1;
		}
	}
	static skillintro(name, learn, learn2) {
		var str = '';
		var infoitem = lib.character[name];
		if (!infoitem) {
			for (var itemx in lib.characterPack) {
				if (lib.characterPack[itemx][name]) {
					infoitem = lib.characterPack[itemx][name]; break;
				}
			}
		}
		var skills = infoitem[3];
		var opacity;
		for (var i = 0; i < skills.length; i++) {
			if (lib.translate[skills[i]] && lib.translate[skills[i] + '_info'] && lib.skill[skills[i]]) {
				if (learn && lib.skill[skills[i]].unique && (learn2 || !lib.skill[skills[i]].gainable)) {
					opacity = 'opacity:0.5';
				}
				else {
					opacity = '';
				}
				var skilltrans = get.translation(skills[i]).slice(0, 2);
				str += '<div class="skill" style="' + opacity +
					'">【' + skilltrans + '】</div><div style="' + opacity + '">' +
					get.skillInfoTranslation(skills[i]) + '</div><div style="display:block;height:10px"></div>';
			}
		}
		return str;
	}
	static intro(name) {
		var info = lib.character[name];
		var str = '性别：' + get.translation(info[0]) + '<br/>';
		str += '势力：' + get.translation(info[1]) + '<br/>';
		str += '体力：' + get.translation(info[2]) + '<br/>';
		str += '技能：';
		if (info[3].length) {
			str += get.translation(info[3][0]);
			for (var i = 1; i < info[3].length; i++) {
				str += '、' + get.translation(info[3][i]);
			}
		}
		return str;
	}
	static storageintro(type, content, player, dialog, skill) {
		switch (type) {
			case 'mark': {
				if (content > 0) {
					return '共有' + content + '个标记';
				}
				return false;
			}
			case 'turn': {
				if (content > 0) {
					return '剩余' + content + '个回合';
				}
				return false;
			}
			case 'time': {
				if (content > 0) {
					return '剩余' + content + '次';
				}
				return false;
			}
			case 'limited': {
				if (content) {
					return '已发动';
				}
				return '未发动';
			}
			case 'info': {
				return lib.translate[skill + '_info'];
			}
			case 'cardCount': {
				if (Array.isArray(content)) {
					return '共有' + get.cnNumber(content.length) + '张牌';
				}
				return false;
			}
			case 'expansion': {
				content = player.getCards('x', function (card) {
					return card.hasGaintag(skill);
				});
				if (dialog && content.length) {
					dialog.addAuto(content);
				}
				else {
					return '没有卡牌';
				}
				return false;
			}
			case 'card': case 'cards': {
				if (get.itemtype(content) == 'card') {
					content = [content];
				}
				if (dialog && get.itemtype(content) == 'cards') {
					dialog.addAuto(content);
				}
				else {
					if (content && content.length) {
						return get.translation(content);
					}
				}
				if (Array.isArray(content) && !content.length) {
					return '没有卡牌';
				}
				return false;
			}
			case 'player': case 'players': {
				if (get.itemtype(content) == 'player') {
					content = [content];
				}
				if (dialog && get.itemtype(content) == 'players') {
					dialog.addAuto(content);
					return false;
				}
				else {
					if (content && content.length) {
						return get.translation(content);
					}
					return false;
				}
			}
			case 'character': case 'characters': {
				if (typeof content == 'string') {
					content = [content];
				}
				if (dialog && Array.isArray(content)) {
					dialog.addAuto([content, 'character']);
					return false;
				}
				else {
					if (content && content.length) {
						return get.translation(content);
					}
					return false;
				}
			}
			default: {
				if (typeof type == 'string') {
					type = type.replace(/#/g, content);
					type = type.replace(/&/g, get.cnNumber(content));
					type = type.replace(/\$/g, get.translation(content));
					return type;
				}
				else if (typeof type == 'function') {
					return type(content, player, skill);
				}
				return false;
			}
		}
	}
	static nodeintro(node, simple, evt) {
		var uiintro = ui.create.dialog('hidden', 'notouchscroll');
		if (node.classList.contains('player') && !node.name) {
			return uiintro;
		}
		var i, translation, intro, str;
		if (node._nointro) return;
		if (typeof node._customintro == 'function') {
			if (node._customintro(uiintro, evt) === false) return;
			if (evt) lib.placePoppedDialog(uiintro, evt);
		}
		else if (Array.isArray(node._customintro)) {
			var caption = node._customintro[0];
			var content = node._customintro[1];
			if (typeof caption == 'function') {
				caption = caption(node);
			}
			if (typeof content == 'function') {
				content = content(node);
			}
			uiintro.add(caption);
			uiintro.add('<div class="text center" style="padding-bottom:5px">' + content + '</div>');
		}
		else if (node.classList.contains('player') || node.linkplayer) {
			if (node.linkplayer) {
				node = node.link;
			}
			let capt = get.translation(node.name);
			const characterInfo = get.character(node.name), sex = node.sex || characterInfo[0];
			if (sex && sex != 'unknown' && lib.config.show_sex) capt += `&nbsp;&nbsp;${sex == 'none' ? '无' : get.translation(sex)}`;
			const group = node.group;
			if (group && group != 'unknown' && lib.config.show_group) capt += `&nbsp;&nbsp;${get.translation(group)}`;
			uiintro.add(capt);

			if (lib.characterTitle[node.name]) {
				uiintro.addText(get.colorspan(lib.characterTitle[node.name]));
			}

			if (get.characterInitFilter(node.name)) {
				const initFilters = get.characterInitFilter(node.name).filter(tag => {
					if (!lib.characterInitFilter[node.name]) return true;
					return lib.characterInitFilter[node.name](tag) !== false;
				});
				if(initFilters.length){
					const str = initFilters.reduce((strx, stry) => strx + lib.InitFilter[stry] + '<br>', '').slice(0, -4);
					uiintro.addText(str);
				}
			}

			if (!node.noclick) {
				const allShown = (node.isUnderControl() || (!game.observe && game.me && game.me.hasSkillTag('viewHandcard', null, node, true)));
				const shownHs = node.getShownCards();
				if (shownHs.length) {
					uiintro.add('<div class="text center">明置的手牌</div>');
					uiintro.addSmall(shownHs);
					if (allShown) {
						var hs = node.getCards('h');
						hs.removeArray(shownHs);
						if (hs.length) {
							uiintro.add('<div class="text center">其他手牌</div>');
							uiintro.addSmall(hs);
						}
					}
				}
				else if (allShown) {
					var hs = node.getCards('h');
					if (hs.length) {
						uiintro.add('<div class="text center">手牌</div>');
						uiintro.addSmall(hs);
					}
				}
			}

			var skills = node.getSkills(null, false, false).slice(0);
			var skills2 = game.filterSkills(skills, node);
			if (node == game.me && node.hiddenSkills.length) {
				skills.addArray(node.hiddenSkills);
			}
			for (var i in node.disabledSkills) {
				if (node.disabledSkills[i].length == 1 &&
					node.disabledSkills[i][0] == i + '_awake' &&
					!node.hiddenSkills.includes(i)) {
					skills.add(i);
				}
			}
			for (i = 0; i < skills.length; i++) {
				if (lib.skill[skills[i]] && (lib.skill[skills[i]].nopop || lib.skill[skills[i]].equipSkill)) continue;
				if (lib.translate[skills[i] + '_info']) {
					if (lib.translate[skills[i] + '_ab']) translation = lib.translate[skills[i] + '_ab'];
					else {
						translation = get.translation(skills[i]);
						if (!lib.skill[skills[i]].nobracket) translation = `【${translation.slice(0, 2)}】`;
					}

					if (node.forbiddenSkills[skills[i]]) {
						var forbidstr = '<div style="opacity:0.5"><div class="skill">' + translation + '</div><div>';
						if (node.forbiddenSkills[skills[i]].length) {
							forbidstr += '（与' + get.translation(node.forbiddenSkills[skills[i]]) + '冲突）<br>';
						}
						else {
							forbidstr += '（双将禁用）<br>';
						}
						forbidstr += get.skillInfoTranslation(skills[i], node) + '</div></div>';
						uiintro.add(forbidstr);
					}
					else if (!skills2.includes(skills[i])) {
						if (lib.skill[skills[i]].preHidden && get.mode() == 'guozhan') {
							uiintro.add('<div><div class="skill" style="opacity:0.5">' + translation + '</div><div><span style="opacity:0.5">' + get.skillInfoTranslation(skills[i], node) + '</span><br><div class="underlinenode on gray" style="position:relative;padding-left:0;padding-top:7px">预亮技能</div></div></div>');
							var underlinenode = uiintro.content.lastChild.querySelector('.underlinenode');
							if (_status.prehidden_skills.includes(skills[i])) {
								underlinenode.classList.remove('on');
							}
							underlinenode.link = skills[i];
							underlinenode.listen(ui.click.hiddenskill);
						}
						else uiintro.add('<div style="opacity:0.5"><div class="skill">' + translation + '</div><div>' + get.skillInfoTranslation(skills[i], node) + '</div></div>');
					}
					else if (lib.skill[skills[i]].temp || !node.skills.includes(skills[i]) || lib.skill[skills[i]].thundertext) {
						if (lib.skill[skills[i]].frequent || lib.skill[skills[i]].subfrequent) {
							uiintro.add('<div><div class="skill thundertext thunderauto">' + translation + '</div><div class="thundertext thunderauto">' + get.skillInfoTranslation(skills[i], node) + '<br><div class="underlinenode on gray" style="position:relative;padding-left:0;padding-top:7px">自动发动</div></div></div>');
							var underlinenode = uiintro.content.lastChild.querySelector('.underlinenode');
							if (lib.skill[skills[i]].frequent) {
								if (lib.config.autoskilllist.includes(skills[i])) {
									underlinenode.classList.remove('on');
								}
							}
							if (lib.skill[skills[i]].subfrequent) {
								for (var j = 0; j < lib.skill[skills[i]].subfrequent.length; j++) {
									if (lib.config.autoskilllist.includes(skills[i] + '_' + lib.skill[skills[i]].subfrequent[j])) {
										underlinenode.classList.remove('on');
									}
								}
							}
							if (lib.config.autoskilllist.includes(skills[i])) {
								underlinenode.classList.remove('on');
							}
							underlinenode.link = skills[i];
							underlinenode.listen(ui.click.autoskill2);
						}
						else {
							uiintro.add('<div><div class="skill thundertext thunderauto">' + translation + '</div><div class="thundertext thunderauto">' + get.skillInfoTranslation(skills[i], node) + '</div></div>');
						}
					}
					else if (lib.skill[skills[i]].frequent || lib.skill[skills[i]].subfrequent) {
						uiintro.add('<div><div class="skill">' + translation + '</div><div>' + get.skillInfoTranslation(skills[i], node) + '<br><div class="underlinenode on gray" style="position:relative;padding-left:0;padding-top:7px">自动发动</div></div></div>');
						var underlinenode = uiintro.content.lastChild.querySelector('.underlinenode');
						if (lib.skill[skills[i]].frequent) {
							if (lib.config.autoskilllist.includes(skills[i])) {
								underlinenode.classList.remove('on');
							}
						}
						if (lib.skill[skills[i]].subfrequent) {
							for (var j = 0; j < lib.skill[skills[i]].subfrequent.length; j++) {
								if (lib.config.autoskilllist.includes(skills[i] + '_' + lib.skill[skills[i]].subfrequent[j])) {
									underlinenode.classList.remove('on');
								}
							}
						}
						if (lib.config.autoskilllist.includes(skills[i])) {
							underlinenode.classList.remove('on');
						}
						underlinenode.link = skills[i];
						underlinenode.listen(ui.click.autoskill2);
					}
					else if (lib.skill[skills[i]].clickable && node.isIn() && node.isUnderControl(true)) {
						var intronode = uiintro.add('<div><div class="skill">' + translation + '</div><div>' + get.skillInfoTranslation(skills[i], node) + '<br><div class="menubutton skillbutton" style="position:relative;margin-top:5px">点击发动</div></div></div>').querySelector('.skillbutton');
						if (!_status.gameStarted || (lib.skill[skills[i]].clickableFilter && !lib.skill[skills[i]].clickableFilter(node))) {
							intronode.classList.add('disabled');
							intronode.style.opacity = 0.5;
						}
						else {
							intronode.link = node;
							intronode.func = lib.skill[skills[i]].clickable;
							intronode.classList.add('pointerdiv');
							intronode.listen(ui.click.skillbutton);
						}
					}
					else {
						uiintro.add('<div><div class="skill">' + translation + '</div><div>' + get.skillInfoTranslation(skills[i], node) + '</div></div>');
					}
					if (lib.translate[skills[i] + '_append']) {
						uiintro._place_text = uiintro.add('<div class="text">' + lib.translate[skills[i] + '_append'] + '</div>');
					}
				}
			}
			// if(get.is.phoneLayout()){
			// 	var storage=node.storage;
			// 	for(i in storage){
			// 		if(get.info(i)&&get.info(i).intro){
			// 			intro=get.info(i).intro;
			// 			if(node.getSkills().concat(lib.skill.global).includes(i)==false&&!intro.show) continue;
			// 			var name=intro.name?intro.name:get.translation(i);
			// 			if(typeof name=='function'){
			// 				name=name(storage[i],node);
			// 			}
			// 			translation='<div><div class="skill">『'+name.slice(0,2)+'』</div><div>';
			// 			var stint=get.storageintro(intro.content,storage[i],node,null,i);
			// 			if(stint){
			// 				translation+=stint+'</div></div>';
			// 				uiintro.add(translation);
			// 			}
			// 		}
			// 	}
			// }

			if (lib.config.right_range && _status.gameStarted) {
				uiintro.add(ui.create.div('.placeholder'));
				var table, tr, td;
				table = document.createElement('table');
				tr = document.createElement('tr');
				table.appendChild(tr);
				td = document.createElement('td');
				td.innerHTML = '距离';
				tr.appendChild(td);
				td = document.createElement('td');
				td.innerHTML = '手牌';
				tr.appendChild(td);
				td = document.createElement('td');
				td.innerHTML = '行动';
				tr.appendChild(td);
				td = document.createElement('td');
				td.innerHTML = '伤害';
				tr.appendChild(td);

				tr = document.createElement('tr');
				table.appendChild(tr);
				td = document.createElement('td');
				if (node == game.me || !game.me || !game.me.isIn()) {
					td.innerHTML = '-';
				}
				else {
					var dist1 = get.numStr(Math.max(1, game.me.distanceTo(node)));
					var dist2 = get.numStr(Math.max(1, node.distanceTo(game.me)));
					if (dist1 == dist2) {
						td.innerHTML = dist1;
					}
					else {
						td.innerHTML = dist1 + '/' + dist2;
					}
				}
				tr.appendChild(td);
				td = document.createElement('td');
				let handcardLimit = node.getHandcardLimit();
				td.innerHTML = `${node.countCards('h')}/${handcardLimit >= 114514 ? '∞' : handcardLimit}`;
				tr.appendChild(td);
				td = document.createElement('td');
				td.innerHTML = node.phaseNumber;
				tr.appendChild(td);
				td = document.createElement('td');

				(function () {
					num = 0;
					for (var j = 0; j < node.stat.length; j++) {
						if (typeof node.stat[j].damage == 'number') num += node.stat[j].damage;
					}
					td.innerHTML = num;
				}());
				tr.appendChild(td);
				table.style.width = 'calc(100% - 20px)';
				table.style.marginLeft = '10px';

				uiintro.content.appendChild(table);
				if (!lib.config.show_favourite) {
					table.style.paddingBottom = '5px';
				}
			}
			if (!simple || get.is.phoneLayout()) {
				var es = node.getCards('e');
				for (var i = 0; i < es.length; i++) {
					var cardinfo = lib.card[es[i].name];
					if (cardinfo && cardinfo.cardPrompt) uiintro.add('<div><div class="skill">' + es[i].outerHTML + '</div><div>' + cardinfo.cardPrompt(es[i]) + '</div></div>');
					else uiintro.add('<div><div class="skill">' + es[i].outerHTML + '</div><div>' + lib.translate[es[i].name + '_info'] + '</div></div>');
					uiintro.content.lastChild.querySelector('.skill>.card').style.transform = '';

					if (lib.translate[es[i].name + '_append']) {
						uiintro.add('<div class="text">' + lib.translate[es[i].name + '_append'] + '</div>');
					}
				}
				var js = node.getCards('j');
				for (var i = 0; i < js.length; i++) {
					if (js[i].viewAs && js[i].viewAs != js[i].name) {
						let html = js[i].outerHTML;
						let cardInfo = lib.card[js[i].viewAs], showCardIntro=true;
						if (cardInfo.blankCard) {
							var cardOwner = get.owner(js[i]);
							if (cardOwner && !cardOwner.isUnderControl(true)) showCardIntro = false;
						}
						if (!showCardIntro) {
							html=ui.create.button(js[i],'blank').outerHTML;
						}
						uiintro.add('<div><div class="skill">' + html + '</div><div>' + lib.translate[js[i].viewAs] + '：' + lib.translate[js[i].viewAs + '_info'] + '</div></div>');
					}
					else {
						uiintro.add('<div><div class="skill">' + js[i].outerHTML + '</div><div>' + lib.translate[js[i].name + '_info'] + '</div></div>');
					}
					uiintro.content.lastChild.querySelector('.skill>.card').style.transform = '';
				}
				if (get.is.phoneLayout()) {
					var markCoutainer = ui.create.div('.mark-container.marks');
					for (var i in node.marks) {
						var nodemark = node.marks[i].cloneNode(true);
						nodemark.classList.add('pointerdiv');
						nodemark.link = node.marks[i];
						nodemark.style.transform = '';
						markCoutainer.appendChild(nodemark);
						nodemark.listen(function () {
							uiintro.noresume = true;
							var rect = this.link.getBoundingClientRect();
							ui.click.intro.call(this.link, {
								clientX: rect.left + rect.width,
								clientY: rect.top + rect.height / 2,
							});
							if (lib.config.touchscreen) {
								uiintro._close();
							}
						});
					}
					if (markCoutainer.childElementCount) {
						uiintro.addText('标记');
						uiintro.add(markCoutainer);
					}
				}
			}
			if (!game.observe && _status.gameStarted && game.me && node != game.me) {
				ui.throwEmotion = [];
				uiintro.addText('发送交互表情');
				var click = function () {
					if (_status.dragged) return;
					if (_status.justdragged) return;
					if (_status.throwEmotionWait) return;
					var emotion = this.link;
					if (game.online) {
						game.send('throwEmotion', node, emotion);
					}
					else game.me.throwEmotion(node, emotion);
					uiintro._close();
					_status.throwEmotionWait = true;
					setTimeout(function () {
						_status.throwEmotionWait = false;
						if (ui.throwEmotion) {
							for (var i of ui.throwEmotion) i.classList.remove('exclude');
						}
					}, (emotion == 'flower' || emotion == 'egg') ? 500 : 5000);
				};
				var td;
				var table = document.createElement('div');
				table.classList.add('add-setting');
				table.style.margin = '0';
				table.style.width = '100%';
				table.style.position = 'relative';
				var listi = ['flower', 'egg'];
				for (var i = 0; i < listi.length; i++) {
					td = ui.create.div('.menubutton.reduce_radius.pointerdiv.tdnode');
					ui.throwEmotion.add(td);
					if (_status.throwEmotionWait) td.classList.add('exclude');
					td.link = listi[i];
					table.appendChild(td);
					td.innerHTML = '<span>' + get.translation(listi[i]) + '</span>';
					td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', click);
				}
				uiintro.content.appendChild(table);
				table = document.createElement('div');
				table.classList.add('add-setting');
				table.style.margin = '0';
				table.style.width = '100%';
				table.style.position = 'relative';
				var listi = ['wine', 'shoe'];
				if (game.me.storage.zhuSkill_shanli) listi = ['yuxisx', 'jiasuo'];
				for (var i = 0; i < listi.length; i++) {
					td = ui.create.div('.menubutton.reduce_radius.pointerdiv.tdnode');
					ui.throwEmotion.add(td);
					if (_status.throwEmotionWait) td.classList.add('exclude');
					td.link = listi[i];
					table.appendChild(td);
					td.innerHTML = '<span>' + get.translation(listi[i]) + '</span>';
					td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', click);
				}
				uiintro.content.appendChild(table);
			}
			var modepack = lib.characterPack['mode_' + get.mode()];
			if (lib.config.show_favourite && lib.character[node.name] && game.players.includes(node) &&
				(!modepack || !modepack[node.name]) && (!simple || get.is.phoneLayout())) {
				var addFavourite = ui.create.div('.text.center.pointerdiv');
				addFavourite.link = node.name;
				if (lib.config.favouriteCharacter.includes(node.name)) {
					addFavourite.innerHTML = '移除收藏';
				}
				else {
					addFavourite.innerHTML = '添加收藏';
				}
				addFavourite.listen(ui.click.favouriteCharacter);
				uiintro.add(addFavourite);
			}
			if (!simple || get.is.phoneLayout()) {
				if ((lib.config.change_skin || lib.skin) && !node.isUnseen()) {
					var num = 1;
					var introadded = false;
					var createButtons = function (num, avatar2) {
						if (!introadded) {
							introadded = true;
							uiintro.add('<div class="text center">更改皮肤</div>');
						}
						var buttons = ui.create.div('.buttons.smallzoom.scrollbuttons');
						lib.setMousewheel(buttons);
						var nameskin = (avatar2 ? node.name2 : node.name1);
						var nameskin2 = nameskin;
						var gzbool = false;
						if (nameskin.startsWith('gz_shibing')) {
							nameskin = nameskin.slice(3, 11);
						}
						else if (nameskin.startsWith('gz_')) {
							nameskin = nameskin.slice(3);
							gzbool = true;
						}
						for (var i = 0; i <= num; i++) {
							var button = ui.create.div('.button.character.pointerdiv', buttons, function () {
								if (this._link) {
									if (avatar2) {
										lib.config.skin[nameskin] = this._link;
										node.node.avatar2.style.backgroundImage = this.style.backgroundImage;
									}
									else {
										lib.config.skin[nameskin] = this._link;
										node.node.avatar.style.backgroundImage = this.style.backgroundImage;
									}
								}
								else {
									delete lib.config.skin[nameskin];
									if (avatar2) {
										if (gzbool && lib.character[nameskin2][4].includes('gzskin') && lib.config.mode_config.guozhan.guozhanSkin) node.node.avatar2.setBackground(nameskin2, 'character');
										else node.node.avatar2.setBackground(nameskin, 'character');
									}
									else {
										if (gzbool && lib.character[nameskin2][4].includes('gzskin') && lib.config.mode_config.guozhan.guozhanSkin) node.node.avatar.setBackground(nameskin2, 'character');
										else node.node.avatar.setBackground(nameskin, 'character');
									}
								}
								game.saveConfig('skin', lib.config.skin);
							});
							button._link = i;
							if (i) {
								button.setBackgroundImage('image/skin/' + nameskin + '/' + i + '.jpg');
							}
							else {
								if (gzbool && lib.character[nameskin2][4].includes('gzskin') && lib.config.mode_config.guozhan.guozhanSkin) button.setBackground(nameskin2, 'character', 'noskin');
								else button.setBackground(nameskin, 'character', 'noskin');
							}
						}
						uiintro.add(buttons);
					};
					var loadImage = function (avatar2) {
						var img = new Image();
						img.onload = function () {
							num++;
							loadImage(avatar2);
						};
						img.onerror = function () {
							num--;
							if (num) {
								createButtons(num, avatar2);
							}
							if (!avatar2) {
								if (!node.classList.contains('unseen2') && node.name2) {
									num = 1;
									loadImage(true);
								}
							}
						};
						var nameskin = (avatar2 ? node.name2 : node.name1);
						var nameskin2 = nameskin;
						var gzbool = false;
						if (nameskin.startsWith('gz_shibing')) {
							nameskin = nameskin.slice(3, 11);
						}
						else if (nameskin.startsWith('gz_')) {
							nameskin = nameskin.slice(3);
							gzbool = true;
						}
						img.src = lib.assetURL + 'image/skin/' + nameskin + '/' + num + '.jpg';
					};
					if (lib.config.change_skin) {
						if (!node.isUnseen(0)) {
							loadImage();
						}
						else if (node.name2) {
							loadImage(true);
						}
					}
					else {
						setTimeout(function () {
							var nameskin1 = node.name1;
							var nameskin2 = node.name2;
							if (nameskin1 && nameskin1.startsWith('gz_')) {
								nameskin1 = nameskin1.slice(3);
							}
							if (nameskin2 && nameskin2.startsWith('gz_')) {
								nameskin2 = nameskin2.slice(3);
							}
							if (!node.isUnseen(0) && lib.skin[nameskin1]) {
								createButtons(lib.skin[nameskin1]);
							}
							if (!node.isUnseen(1) && lib.skin[nameskin2]) {
								createButtons(lib.skin[nameskin2], true);
							}
						});
					}
				}
			}

			uiintro.add(ui.create.div('.placeholder.slim'));
		}
		else if (node.classList.contains('mark') && node.info &&
			node.parentNode && node.parentNode.parentNode && node.parentNode.parentNode.classList.contains('player')) {
			var info = node.info;
			var player = node.parentNode.parentNode;
			if (info.name) {
				if (typeof info.name == 'function') {
					var named = info.name(player.storage[node.skill], player);
					if (named) {
						uiintro.add(named);
					}
				}
				else {
					uiintro.add(info.name);
				}
			}
			else if (info.name !== false) {
				uiintro.add(get.translation(node.skill));
			}
			if (typeof info.id == 'string' && info.id.startsWith('subplayer') &&
				player.isUnderControl(true) && player.storage[info.id] && !_status.video) {
				var storage = player.storage[info.id];
				uiintro.addText('当前体力：' + storage.hp + '/' + storage.maxHp);
				if (storage.hs.length) {
					uiintro.addText('手牌区');
					uiintro.addSmall(storage.hs);
				}
				if (storage.es.length) {
					uiintro.addText('装备区');
					uiintro.addSmall(storage.es);
				}
			}
			if (typeof info.mark == 'function') {
				var stint = info.mark(uiintro, player.storage[node.skill], player);
				if (stint) {
					var placetext = uiintro.add('<div class="text" style="display:inline">' + stint + '</div>');
					if (!stint.startsWith('<div class="skill"')) {
						uiintro._place_text = placetext;
					}
					// if(stint.length<=100){
					// 	uiintro.add('<div class="text center">'+stint+'</div>');
					// }
					// else{
					// 	uiintro.add('<div class="text">'+stint+'</div>');
					// }
				}
			}
			else {
				var stint = get.storageintro(info.content, player.storage[node.skill], player, uiintro, node.skill);
				if (stint) {
					if (stint[0] == '@') {
						uiintro.add('<div class="caption">' + stint.slice(1) + '</div>');
					}
					else {
						var placetext = uiintro.add('<div class="text" style="display:inline">' + stint + '</div>');
						if (!stint.startsWith('<div class="skill"')) {
							uiintro._place_text = placetext;
						}
					}
					// else if(stint.length<=100){
					// 	uiintro.add('<div class="text center">'+stint+'</div>');
					// }
					// else{
					// 	uiintro.add('<div class="text">'+stint+'</div>');
					// }
				}
			}
			uiintro.add(ui.create.div('.placeholder.slim'));
		}
		else if (node.classList.contains('card')) {
			//卡牌长按介绍
			if (ui.arena.classList.contains('observe') && node.parentNode.classList.contains('handcards')) {
				return;
			}
			var name = node.name;
			if (node.parentNode.cardMod) {
				var moded = false;
				for (var i in node.parentNode.cardMod) {
					var item = node.parentNode.cardMod[i](node);
					if (Array.isArray(item)) {
						moded = true;
						uiintro.add(item[0]);
						uiintro._place_text = uiintro.add('<div class="text" style="display:inline">' + item[1] + '</div>');
					}
				}
				if (moded) return uiintro;
			}
			if (node.link && node.link.name && lib.card[node.link.name]) {
				name = node.link.name;
			}
			if (get.position(node) == 'j' && node.viewAs && node.viewAs != name) {
				uiintro.add(get.translation(node.viewAs));
				var cardInfo = lib.card[node.viewAs], showCardIntro=true;
				if (cardInfo.blankCard) {
					var cardOwner = get.owner(node);
					if (cardOwner && !cardOwner.isUnderControl(true)) showCardIntro = false;
				}
				if (showCardIntro) uiintro.add('<div class="text center">（' + get.translation(get.translation(node)) + '）</div>');
				// uiintro.add(get.translation(node.viewAs)+'<br><div class="text center" style="padding-top:5px;">（'+get.translation(node)+'）</div>');
				uiintro.nosub = true;
				name = node.viewAs;
			}
			else {
				uiintro.add(get.translation(node));
			}
			if (node._banning) {
				var clickBanned = function () {
					var banned = lib.config[this.bannedname] || [];
					if (banned.includes(name)) {
						banned.remove(name);
					}
					else {
						banned.push(name);
					}
					game.saveConfig(this.bannedname, banned);
					this.classList.toggle('on');
					if (node.updateBanned) {
						node.updateBanned();
					}
				};
				var modeorder = lib.config.modeorder || [];
				for (var i in lib.mode) {
					modeorder.add(i);
				}
				var list = [];
				uiintro.contentContainer.listen(function (e) {
					ui.click.touchpop();
					e.stopPropagation();
				});
				for (var i = 0; i < modeorder.length; i++) {
					if (node._banning == 'online') {
						if (!lib.mode[modeorder[i]].connect) continue;
					}
					else if (modeorder[i] == 'connect' || modeorder[i] == 'brawl') {
						continue;
					}
					if (lib.config.all.mode.includes(modeorder[i])) {
						list.push(modeorder[i]);
					}
				}
				if (lib.card[name] && lib.card[name].type == 'trick') list.push('zhinang_tricks');
				var page = ui.create.div('.menu-buttons.configpopped', uiintro.content);
				var banall = false;
				for (var i = 0; i < list.length; i++) {
					var cfg = ui.create.div('.config', list[i] == 'zhinang_tricks' ? '设为智囊' : (lib.translate[list[i]] + '模式'), page);
					cfg.classList.add('toggle');
					if (list[i] == 'zhinang_tricks') {
						cfg.bannedname = ((node._banning == 'offline') ? '' : 'connect_') + 'zhinang_tricks';
					}
					else if (node._banning == 'offline') {
						cfg.bannedname = list[i] + '_bannedcards';
					}
					else {
						cfg.bannedname = 'connect_' + list[i] + '_bannedcards';
					}
					cfg.listen(clickBanned);
					ui.create.div(ui.create.div(cfg));
					var banned = lib.config[cfg.bannedname] || [];
					if (banned.includes(name) == (list[i] == 'zhinang_tricks')) {
						cfg.classList.add('on');
						banall = true;
					}
				}
				ui.create.div('.menubutton.pointerdiv', banall ? '全部禁用' : '全部启用', uiintro.content, function () {
					if (this.innerHTML == '全部禁用') {
						for (var i = 0; i < page.childElementCount; i++) {
							if (page.childNodes[i].bannedname.indexOf('zhinang_tricks') == -1 && page.childNodes[i].bannedname && page.childNodes[i].classList.contains('on')) {
								clickBanned.call(page.childNodes[i]);
							}
						}
						this.innerHTML = '全部启用';
					}
					else {
						for (var i = 0; i < page.childElementCount; i++) {
							if (page.childNodes[i].bannedname.indexOf('zhinang_tricks') == -1 && page.childNodes[i].bannedname && !page.childNodes[i].classList.contains('on')) {
								clickBanned.call(page.childNodes[i]);
							}
						}
						this.innerHTML = '全部禁用';
					}
				}).style.marginTop = '-10px';
				ui.create.div('.placeholder.slim', uiintro.content);
			}
			else {
				if (lib.translate[name + '_info']) {
					if (!uiintro.nosub) {
						if (lib.card[name] && lib.card[name].derivation) {
							if (typeof lib.card[name].derivation == 'string') {
								uiintro.add('<div class="text center">来源：' + get.translation(lib.card[name].derivation) + '</div>');
							}
							else if (lib.card[name].derivationpack) {
								uiintro.add('<div class="text center">来源：' + get.translation(lib.card[name].derivationpack + '_card_config') + '包</div>');
							}
						}
						let typeinfo = '';
						if (lib.card[name] && lib.card[name].unique) {
							typeinfo += ('特殊' + get.translation(lib.card[name].type) + '牌');
						}
						else if (lib.card[name] && lib.card[name].type && lib.translate[lib.card[name].type]) {
							typeinfo += (get.translation(lib.card[name].type) + '牌');
						}
						if (get.subtype(name, false)) {
							typeinfo += ('-' + get.translation(get.subtype(name, false)));
						}
						if (typeinfo) {
							uiintro.add('<div class="text center">' + typeinfo + '</div>');
						}
						if (lib.card[name].unique && lib.card[name].type == 'equip') {
							if (lib.cardPile.guozhan && lib.cardPack.guozhan.includes(name)) {
								uiintro.add('<div class="text center">专属装备</div>').style.marginTop = '-5px';
							}
							else {
								uiintro.add('<div class="text center">特殊装备</div>').style.marginTop = '-5px';
							}
						}
						if (lib.card[name] && lib.card[name].addinfomenu) {
							uiintro.add('<div class="text center">' + lib.card[name].addinfomenu + '</div>');
						}
						if (get.subtype(name, false) == 'equip1') {
							var added = false;
							if (lib.card[node.name] && lib.card[node.name].distance) {
								var dist = lib.card[node.name].distance;
								if (dist.attackFrom) {
									added = true;
									uiintro.add('<div class="text center">攻击范围：' + (-dist.attackFrom + 1) + '</div>');
								}
							}
							if (!added) {
								uiintro.add('<div class="text center">攻击范围：1</div>');
							}
						}
					}
					if (lib.card[name].cardPrompt) {
						var str = lib.card[name].cardPrompt(node.link || node), placetext = uiintro.add('<div class="text" style="display:inline">' + str + '</div>');
						if (!str.startsWith('<div class="skill"')) {
							uiintro._place_text = placetext;
						}
					}
					else if (lib.translate[name + '_info']) {
						var placetext = uiintro.add('<div class="text" style="display:inline">' + lib.translate[name + '_info'] + '</div>');
						if (!lib.translate[name + '_info'].startsWith('<div class="skill"')) {
							uiintro._place_text = placetext;
						}
					}
					if (get.is.yingbianConditional(node.link || node)) {
						const yingbianEffects = get.yingbianEffects(node.link || node);
						if (!yingbianEffects.length) {
							const defaultYingbianEffect = get.defaultYingbianEffect(node.link || node);
							if (lib.yingbian.prompt.has(defaultYingbianEffect)) yingbianEffects.push(defaultYingbianEffect);
						}
						if (yingbianEffects.length && showCardIntro) uiintro.add(`<div class="text" style="font-family: yuanli">应变：${yingbianEffects.map(value => lib.yingbian.prompt.get(value)).join('；')}</div>`);
					}
					if (lib.translate[name + '_append']) {
						uiintro.add('<div class="text" style="display:inline">' + lib.translate[name + '_append'] + '</div>');
					}
				}
				uiintro.add(ui.create.div('.placeholder.slim'));
			}
		}
		else if (node.classList.contains('character')) {
			const character = node.link, characterInfo = get.character(node.link);
			let capt = get.translation(character);
			if (characterInfo) {
				const infoSex = characterInfo[0];
				if (infoSex && lib.config.show_sex) capt += `&nbsp;&nbsp;${infoSex == 'none' ? '无' : lib.translate[infoSex]}`;
				const infoGroup = characterInfo[1];
				if (infoGroup && lib.config.show_group) {
					const group = get.is.double(character, true);
					if (group) capt += `&nbsp;&nbsp;${group.map(value => get.translation(value)).join('/')}`;
					else capt += `&nbsp;&nbsp;${lib.translate[infoGroup]}`;
				}
			}
			uiintro.add(capt);

			if (lib.characterTitle[node.link]) {
				uiintro.addText(get.colorspan(lib.characterTitle[node.link]));
			}

			if (get.characterInitFilter(node.link)) {
				const initFilters = get.characterInitFilter(node.link).filter(tag => {
					if (!lib.characterInitFilter[node.link]) return true;
					return lib.characterInitFilter[node.link](tag) !== false;
				});
				if(initFilters.length){
					const str = initFilters.reduce((strx, stry) => strx + lib.InitFilter[stry] + '<br>', '').slice(0, -4);
					uiintro.addText(str);
				}
			}

			if (node._banning) {
				var clickBanned = function () {
					var banned = lib.config[this.bannedname] || [];
					if (banned.includes(character)) {
						banned.remove(character);
					}
					else {
						banned.push(character);
					}
					game.saveConfig(this.bannedname, banned);
					this.classList.toggle('on');
					if (node.updateBanned) {
						node.updateBanned();
					}
				};
				var modeorder = lib.config.modeorder || [];
				for (var i in lib.mode) {
					modeorder.add(i);
				}
				var list = [];
				uiintro.contentContainer.listen(function (e) {
					ui.click.touchpop();
					e.stopPropagation();
				});
				for (var i = 0; i < modeorder.length; i++) {
					if (node._banning == 'online') {
						if (!lib.mode[modeorder[i]].connect) continue;
						if (!lib.config['connect_' + modeorder[i] + '_banned']) {
							lib.config['connect_' + modeorder[i] + '_banned'] = [];
						}
					}
					else if (modeorder[i] == 'connect' || modeorder[i] == 'brawl') {
						continue;
					}
					if (lib.config.all.mode.includes(modeorder[i])) {
						list.push(modeorder[i]);
					}
				}
				var page = ui.create.div('.menu-buttons.configpopped', uiintro.content);
				var banall = false;
				for (var i = 0; i < list.length; i++) {
					var cfg = ui.create.div('.config', lib.translate[list[i]] + '模式', page);
					cfg.classList.add('toggle');
					if (node._banning == 'offline') {
						cfg.bannedname = list[i] + '_banned';
					}
					else {
						cfg.bannedname = 'connect_' + list[i] + '_banned';
					}
					cfg.listen(clickBanned);
					ui.create.div(ui.create.div(cfg));
					var banned = lib.config[cfg.bannedname] || [];
					if (!banned.includes(character)) {
						cfg.classList.add('on');
						banall = true;
					}
				}
				if (node._banning == 'offline') {
					var cfg = ui.create.div('.config', '随机选将可用', page);
					cfg.classList.add('toggle');
					cfg.listen(function () {
						this.classList.toggle('on');
						if (this.classList.contains('on')) {
							lib.config.forbidai_user.remove(character);
						}
						else {
							lib.config.forbidai_user.add(character);
						}
						game.saveConfig('forbidai_user', lib.config.forbidai_user);
					});
					ui.create.div(ui.create.div(cfg));
					if (!lib.config.forbidai_user.includes(character)) {
						cfg.classList.add('on');
					}
				}
				ui.create.div('.menubutton.pointerdiv', banall ? '全部禁用' : '全部启用', uiintro.content, function () {
					if (this.innerHTML == '全部禁用') {
						for (var i = 0; i < page.childElementCount; i++) {
							if (page.childNodes[i].bannedname && page.childNodes[i].classList.contains('on')) {
								clickBanned.call(page.childNodes[i]);
							}
						}
						this.innerHTML = '全部启用';
					}
					else {
						for (var i = 0; i < page.childElementCount; i++) {
							if (page.childNodes[i].bannedname && !page.childNodes[i].classList.contains('on')) {
								clickBanned.call(page.childNodes[i]);
							}
						}
						this.innerHTML = '全部禁用';
					}
				}).style.marginTop = '-10px';
				ui.create.div('.placeholder.slim', uiintro.content);
			}
			else {
				var infoitem = get.character(character);
				var skills = infoitem[3];
				for (i = 0; i < skills.length; i++) {
					if (lib.translate[skills[i] + '_info']) {
						if (lib.translate[skills[i] + '_ab']) translation = lib.translate[skills[i] + '_ab'];
						else {
							translation = get.translation(skills[i]);
							if (!lib.skill[skills[i]].nobracket) translation = `【${translation.slice(0, 2)}】`;
						}

						uiintro.add('<div><div class="skill">' + translation + '</div><div>' + get.skillInfoTranslation(skills[i]) + '</div></div>');

						if (lib.translate[skills[i] + '_append']) {
							uiintro._place_text = uiintro.add('<div class="text">' + lib.translate[skills[i] + '_append'] + '</div>');
						}
					}
				}
				var modepack = lib.characterPack['mode_' + get.mode()];
				if (lib.config.show_favourite &&
					lib.character[node.link] && (!modepack || !modepack[node.link]) && (!simple || get.is.phoneLayout())) {
					var addFavourite = ui.create.div('.text.center.pointerdiv');
					addFavourite.link = node.link;
					addFavourite.style.marginBottom = '15px';
					if (lib.config.favouriteCharacter.includes(node.link)) {
						addFavourite.innerHTML = '移除收藏';
					}
					else {
						addFavourite.innerHTML = '添加收藏';
					}
					addFavourite.listen(ui.click.favouriteCharacter);
					uiintro.add(addFavourite);
				}
				else {
					uiintro.add(ui.create.div('.placeholder.slim'));
				}
				var addskin = false;
				if (node.parentNode.classList.contains('menu-buttons')) {
					addskin = !lib.config.show_charactercard;
				}
				else {
					addskin = lib.config.change_skin || lib.skin;
				}
				if (addskin && (!simple || get.is.phoneLayout())) {
					var num = 1;
					var introadded = false;
					var nameskin = node.link;
					var nameskin2 = nameskin;
					var gzbool = false;
					if (nameskin.startsWith('gz_shibing')) {
						nameskin = nameskin.slice(3, 11);
					}
					else if (nameskin.startsWith('gz_')) {
						nameskin = nameskin.slice(3);
						gzbool = true;
					}
					var createButtons = function (num) {
						if (!num) return;
						if (!introadded) {
							introadded = true;
							uiintro.add('<div class="text center">更改皮肤</div>');
						}
						var buttons = ui.create.div('.buttons.smallzoom.scrollbuttons');
						lib.setMousewheel(buttons);
						for (var i = 0; i <= num; i++) {
							var button = ui.create.div('.button.character.pointerdiv', buttons, function () {
								if (this._link) {
									lib.config.skin[nameskin] = this._link;
									node.style.backgroundImage = this.style.backgroundImage;
									game.saveConfig('skin', lib.config.skin);
								}
								else {
									delete lib.config.skin[nameskin];
									if (gzbool && lib.character[nameskin2][4].includes('gzskin') && lib.config.mode_config.guozhan.guozhanSkin) node.setBackground(nameskin2, 'character');
									else node.setBackground(nameskin, 'character');
									game.saveConfig('skin', lib.config.skin);
								}
							});
							button._link = i;
							if (i) {
								button.setBackgroundImage('image/skin/' + nameskin + '/' + i + '.jpg');
							}
							else {
								if (gzbool && lib.character[nameskin2][4].includes('gzskin') && lib.config.mode_config.guozhan.guozhanSkin) button.setBackground(nameskin2, 'character', 'noskin');
								else button.setBackground(nameskin, 'character', 'noskin');
							}
						}
						uiintro.add(buttons);
					};
					var loadImage = function () {
						var img = new Image();
						img.onload = function () {
							num++;
							loadImage();
						};
						img.onerror = function () {
							num--;
							createButtons(num);
						};
						img.src = lib.assetURL + 'image/skin/' + nameskin + '/' + num + '.jpg';
					};
					if (lib.config.change_skin) {
						loadImage();
					}
					else {
						setTimeout(function () {
							createButtons(lib.skin[nameskin]);
						});
					}
				}
			}
		}
		else if (node.classList.contains('equips') && ui.arena.classList.contains('selecting')) {
			(function () {
				uiintro.add('选择装备');
				uiintro.addSmall(Array.from(node.childNodes).filter(node => !node.classList.contains('emptyequip') && !node.classList.contains('feichu')), true);
				uiintro.clickintro = true;
				ui.control.hide();
				uiintro._onclose = function () {
					ui.control.show();
				};
				var confirmbutton;
				for (var i = 0; i < uiintro.buttons.length; i++) {
					var button = uiintro.buttons[i];
					button.classList.add('pointerdiv');
					if (button.link.classList.contains('selected')) {
						button.classList.add('selected');
					}
					button.listen(function (e) {
						ui.click.card.call(this.link, 'popequip');
						ui.click.window.call(ui.window, e);
						if (this.link.classList.contains('selected')) {
							this.classList.add('selected');
						}
						else {
							this.classList.remove('selected');
						}
						if (ui.confirm && ui.confirm.str && ui.confirm.str.includes('o')) {
							confirmbutton.classList.remove('disabled');
						}
						else {
							confirmbutton.classList.add('disabled');
						}
					});
				}
				var buttoncontainer = uiintro.add(ui.create.div());
				buttoncontainer.style.display = 'block';
				confirmbutton = ui.create.div('.menubutton.large.pointerdiv', '确定', function () {
					if (ui.confirm && ui.confirm.str && ui.confirm.str.includes('o')) {
						uiintro._clickintro();
						ui.click.ok(ui.confirm.firstChild);
					}
				}, buttoncontainer);
				confirmbutton.style.position = 'relative';
				setTimeout(function () {
					if (ui.confirm && ui.confirm.str && ui.confirm.str.includes('o')) {
						confirmbutton.classList.remove('disabled');
					}
					else {
						confirmbutton.classList.add('disabled');
					}
				}, 300);
			}());
		}
		else if (node.classList.contains('identity') && node.dataset.career) {
			var career = node.dataset.career;
			uiintro.add(get.translation(career));
			uiintro.add('<div class="text center" style="padding-bottom:5px">' + lib.translate['_' + career + '_skill_info'] + '</div>');
		}
		else if (node.classList.contains('skillbar')) {
			if (node == ui.friendBar) {
				uiintro.add('友方怒气值');
				uiintro.add('<div class="text center" style="padding-bottom:5px">' + _status.friendRage + '/100</div>');
			}
			else if (node == ui.enemyBar) {
				uiintro.add('敌方怒气值');
				uiintro.add('<div class="text center" style="padding-bottom:5px">' + _status.enemyRage + '/100</div>');
			}
		}
		else if (node.parentNode == ui.historybar) {
			if (node.dead) {
				if (!node.source || node.source == node.player) {
					uiintro.add('<div class="text center">' + get.translation(node.player) + '阵亡</div>');
					uiintro.addSmall([node.player]);
				}
				else {
					uiintro.add('<div class="text center">' + get.translation(node.player) + '被' + get.translation(node.source) + '杀害</div>');
					uiintro.addSmall([node.source]);
				}
			}
			if (node.skill) {
				uiintro.add('<div class="text center">' + get.translation(node.skill, 'skill') + '</div>');
				uiintro._place_text = uiintro.add('<div class="text" style="display:inline">' + get.translation(node.skill, 'info') + '</div>');
			}
			if (node.targets && get.itemtype(node.targets) == 'players') {
				uiintro.add('<div class="text center">目标</div>');
				uiintro.addSmall(node.targets);
			}
			if (node.players && node.players.length > 1) {
				uiintro.add('<div class="text center">使用者</div>');
				uiintro.addSmall(node.players);
			}
			if (node.cards && node.cards.length) {
				uiintro.add('<div class="text center">卡牌</div>');
				uiintro.addSmall(node.cards);
			}
			for (var i = 0; i < node.added.length; i++) {
				uiintro.add(node.added[i]);
			}
			if (node.added.length) {
				uiintro.add(ui.create.div('.placeholder.slim'));
			}
			if (uiintro.content.firstChild) {
				uiintro.content.firstChild.style.paddingTop = '3px';
			}
		}
		if (lib.config.touchscreen) {
			lib.setScroll(uiintro.contentContainer);
		}
		return uiintro;
	}
	static linkintro(dialog, content, player) {
		dialog.content.firstChild.remove();
		dialog.add('<div class="text center">已横置</div>');
		var list = [];
		for (var i = 0; i < game.players.length; i++) {
			if (game.players[i].isLinked() && game.players[i].name && !game.players[i].name.startsWith('unknown')) {
				list.push(game.players[i]);
			}
		}
		if (list.length) {
			dialog.add(list, true, true);
		}
	}
	static groups() { return ['wei', 'shu', 'wu', 'qun', 'jin', 'western', 'key']; }
	static types() {
		var types = [];
		for (var i in lib.card) {
			if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
			if (lib.card[i].forbid && lib.card[i].forbid.includes(lib.config.mode)) continue;
			if (lib.card[i].type) {
				if (lib.card[i].type == 'delay') types.add('trick');
				else types.add(lib.card[i].type);
			}
		}
		return types;
	}
	static links(buttons) {
		var links = [];
		for (var i = 0; i < buttons.length; i++) {
			if (buttons[i].link != undefined) links.push(buttons[i].link);
		}
		return links;
	}
	static threaten(target, player, hp) {
		var threaten = 1;
		var skills = target.getSkills();
		if (!player && player !== false) {
			player = _status.event.player;
		}
		for (var i = 0; i < skills.length; i++) {
			var info = get.info(skills[i]);
			if (info && info.ai && info.ai.threaten) {
				if (typeof info.ai.threaten == 'function' && player) {
					var tmp = info.ai.threaten(player, target);
					if (typeof tmp == 'number') {
						threaten *= tmp;
					}
				}
				else if (typeof info.ai.threaten == 'number') {
					threaten *= info.ai.threaten;
				}
			}
		}
		if (hp) {
			switch (target.hp) {
				case 0: threaten *= 1.5; break;
				case 1: threaten *= 1.2; break;
			}
			switch (target.countCards('h')) {
				case 0: threaten *= 1.5; break;
				case 1: threaten *= 1.2; break;
			}
		}
		return threaten;
	}
	static condition(player) {
		var num = player.hp;
		if (num > 4) {
			num = 4 + Math.sqrt(num - 4);
		}
		else {
			if (player.isHealthy()) {
				if (player.hp == 3) {
					num += 0.5;
				}
				else if (player.hp < 3) {
					num++;
				}
			}
		}
		num += player.countCards('h') / 2;
		var es = player.getCards('e');
		for (var i = 0; i < es.length; i++) {
			var val = get.equipValueNumber(es[i]);
			if (val >= 7) num += 0.8;
			if (val >= 5) num += 0.5;
			if (val >= 3) num += 0.2;
		}
		return num;
	}
	static attitude(from, to) {
		if (!from || !to) return 0;
		from = from._trueMe || from;
		arguments[0] = from;
		var att = CacheContext.requireCacheContext().get.rawAttitude.apply(this, arguments);
		if (from.isMad()) att = -att;
		if (to.isMad() && att > 0) {
			if (to.identity == 'zhu') {
				att = 1;
			}
			else {
				att = 0;
			}
		}
		if (!_status.tempnofake) {
			_status.tempnofake = true;
			if (from.ai.modAttitudeFrom) {
				att = from.ai.modAttitudeFrom(from, to, att);
			}
			if (to.ai.modAttitudeTo) {
				att = to.ai.modAttitudeTo(from, to, att);
			}
			delete _status.tempnofake;
		}
		return att;
	}
	static sgnAttitude() {
		return get.sgn(get.attitude.apply(this, arguments));
	}
	static useful_raw(card, player) {
		if (get.position(card) == 'j') return -1;
		if (get.position(card) == 'e') return get.equipValue(card);
		if (card._modUseful) {
			return card._modUseful();
		}
		var i = 0;
		if (!player) player = _status.event.player;
		if (player) {
			if (_status.event.useCache) {
				i = game.callFuncUseStepCache("player.getCardsInUseful", function (player, position, cardname) {
					return player.getCards(position, cardname);
				}, [player, 'h', card.name]).indexOf(card);
			} else {
				i = player.getCards('h', card.name).indexOf(card);
			}
			if (i < 0) i = 0;
		}
		var aii = get.info(card).ai;
		var useful;
		if (aii && aii.useful) useful = aii.useful;
		else if (aii && aii.basic) useful = aii.basic.useful;
		var result;
		if (useful == undefined) result = -1;
		else if (typeof useful == 'function') {
			result = useful(card, i);
		}
		else if (typeof useful == 'number') result = useful;
		else if (i < useful.length) {
			result = useful[i];
		}
		else result = useful[useful.length - 1];
		result = game.checkMod(player, card, result, 'aiUseful', player);
		return result;
	}
	static useful(card, player) {
		if (_status.event.useCache) {
			return game.callFuncUseStepCache("get.useful_raw", get.useful_raw, [card, player]);
		}
		return get.useful_raw(card, player);
	}
	static unuseful(card) { return -get.useful(card); }
	static unuseful2(card) { return 10 - get.useful(card); }
	static unuseful3(card) {
		if (card.name == 'du') return 20;
		return 10 - get.useful(card);
	}
	static value(card, player, method) {
		var result = 0;
		var value;
		if (Array.isArray(card)) {
			if (!card.length) return 0;
			value = 0;
			for (var i = 0; i < card.length; i++) {
				value += get.value(card[i], player, method);
			}
			return value / Math.sqrt(card.length);
		}
		if (card._modValue) {
			return card._modValue(player, method);
		}
		var aii = get.info(card).ai;
		if (aii && aii.value) value = aii.value;
		else if (aii && aii.basic) value = aii.basic.value;
		if (player == undefined || get.itemtype(player) != 'player') player = _status.event.player;
		var geti = function () {
			return player.getCardIndex('hs',card.name,card,5);
		};
		if (typeof value == 'function') {
			result = value(card, player, geti(), method);
		}
		if (typeof value == 'number') result = value;
		if (Array.isArray(value)) {
			if (method == 'raw') result = value[0];
			var num = geti();
			if (num < value.length) result = value[Math.max(0,num)];
			else result = value[value.length - 1];
		}
		result = game.checkMod(player, card, result, 'aiValue', player);
		return result;
	}
	static equipResult(player, target, name) {
		var card = get.card();
		if (!card || card.name != name) {
			card = { name: name };
		}
		var value1 = get.equipValue(card, target);
		var value2 = 0;
		if (!player.canEquip(card)) {
			if (!player.canEquip(card, true)) return 0;
			var current = target.getEquip(card);
			if (current && current != card) {
				value2 = get.equipValue(current, target);
				if (value2 > 0 && !target.needsToDiscard() && !get.tag(card, 'valueswap')) {
					return 0;
				}
			}
		}
		return Math.max(0, value1 - value2) / 5;
	}
	static equipValue(card, player) {
		if (player == undefined || get.itemtype(player) != 'player') player = get.owner(card);
		if (player == undefined || get.itemtype(player) != 'player') player = _status.event.player;
		var info = get.info(card);
		if (!info.ai) return 0;
		var value = info.ai.equipValue;
		if (value == undefined) {
			if (info.ai.basic && info.ai.basic.equipValue != undefined) {
				value = info.ai.basic.equipValue;
			}
			else return 0;
		}
		if (typeof value == 'number') return value;
		if (typeof value == 'function') return value(card, player, null, 'raw2');
		return 0;
	}
	static equipValueNumber(card) {
		var info = get.info(card);
		if (info.ai) {
			if (typeof info.ai.equipValue == 'number') return info.ai.equipValue;
			if (info.ai.basic && typeof info.ai.basic.equipValue == 'number') return info.ai.basic.equipValue;
		}
		return 0;
	}
	static disvalue(card, player) { return -get.value(card, player); }
	static disvalue2(card, player) { return -get.value(card, player, 'raw'); }
	static skillthreaten(skill, player, target) {
		if (!lib.skill[skill]) return 1;
		if (!lib.skill[skill].ai) return 1;
		var threaten = lib.skill[skill].ai.threaten;
		if (typeof threaten == 'number') return threaten;
		if (typeof threaten == 'function') {
			player = player || _status.event.player;
			target = target || player;
			return threaten(player, target);
		}
		return 1;
	}
	static cacheOrder(item){
		let cache = CacheContext.requireCacheContext();
		return cache.get.order(item);
	}
	/**
	 * @returns { number }
	 */
	static order(item, player = get.player() || game.me) {
		let cache = CacheContext.requireCacheContext();
		var info = get.info(item);
		if (!info) return -1;
		var aii = info.ai;
		var order;
		if (aii && aii.order) order = aii.order;
		else if (aii && aii.basic) order = aii.basic.order;
		if (order == undefined) return -1;
		var num = order;
		if (typeof (order) == 'function') {
			num = order(item, player);
		}
		if (typeof item == 'object' && player) {
			num = game.checkMod(player, item, num, 'aiOrder', player);
		}
		return num;
	}
	static result(item, skill) {
		var result;
		var info = get.info(item);
		if (info.ai) result = get.copy(info.ai.result);
		if (typeof (result) == 'function') result = result(item);
		if (!result) result = {};
		if (skill) {
			var info2 = get.info(skill);
			if (info2.ai) {
				info2 = info2.ai.result;
				for (var i in info2) {
					result[i] = info2[i];
				}
			}
		}
		return result;
	}
	static cacheEffectUse(target, card, player, player2, isLink){
		let cache = CacheContext.requireCacheContext();
		return cache.get.effect_use(target,card,player,player2,isLink);
	}
	static effect_use(target, card, player, player2, isLink) {
		let cache = CacheContext.requireCacheContext();
		var event = _status.event;
		var eventskill = null;
		if (player == undefined) player = _status.event.player;
		if (card && typeof card == 'object' && 'name' in card) card = get.autoViewAs(card);
		if (typeof card != 'string' && (typeof card != 'object' || !card.name)) {
			var skillinfo = get.info(event.skill);
			if (event.skill && skillinfo.viewAs == undefined) card = _status.event.skill;
			else {
				card = get.card();
				if (skillinfo && skillinfo.viewAs && card.name === skillinfo.viewAs.name) {
					eventskill = event.skill;
				}
			}
		}
		var info = get.info(card);
		if (typeof card == 'object' && info && info.changeTarget) {
			var targets = [target];
			info.changeTarget(player, targets);
			var eff = 0;
			for (var i of targets) {
				eff += cache.get.effect(i, card, player, player2, isLink);
			}
			return eff;
		}
		var result = get.result(card, eventskill);
		var result1 = result.player_use || result.player, result2 = result.target_use || result.target;
		if (typeof result1 == 'function') result1 = result1(player, target, card, isLink);
		if (typeof result2 == 'function') result2 = result2(player, target, card, isLink);

		if (typeof result1 != 'number') result1 = 0;
		if (typeof result2 != 'number') result2 = 0;
		var temp1, temp2, temp3, temp01 = 0, temp02 = 0, threaten = 1;
		var skills1 = player.getSkills().concat(lib.skill.global);
		game.expandSkills(skills1);
		var zerotarget = false, zeroplayer = false;
		for (var i = 0; i < skills1.length; i++) {
			temp1 = get.info(skills1[i]).ai;
			if (temp1 && typeof temp1.effect == 'object' && typeof temp1.effect.player_use == 'function') {
				temp1 = cache.delegate(temp1.effect).player_use(card, player, target, result1, isLink);
			}
			else if (temp1 && typeof temp1.effect == 'object' && typeof temp1.effect.player == 'function') {
				temp1 = cache.delegate(temp1.effect).player(card, player, target, result1, isLink);
			}
			else temp1 = undefined;
			if (typeof temp1 == 'object') {
				if (temp1.length == 2 || temp1.length == 4) {
					result1 *= temp1[0];
					temp01 += temp1[1];
				}
				if (temp1.length == 4) {
					result2 *= temp1[2];
					temp02 += temp1[3];
				}
			}
			else if (typeof temp1 == 'number') {
				result1 *= temp1;
			}
			else if (temp1 == 'zeroplayer') {
				zeroplayer = true;
			}
			else if (temp1 == 'zerotarget') {
				zerotarget = true;
			}
			else if (temp1 == 'zeroplayertarget') {
				zeroplayer = true;
				zerotarget = true;
			}
		}
		if (target) {
			var skills2 = target.getSkills().concat(lib.skill.global);
			game.expandSkills(skills2);
			for (var i = 0; i < skills2.length; i++) {
				temp2 = get.info(skills2[i]).ai;
				if (temp2 && temp2.threaten) temp3 = temp2.threaten;
				else temp3 = undefined;
				if (temp2 && typeof temp2.effect == 'function') {
					if (!player.hasSkillTag('ignoreSkill', true, {
						card: card,
						target: target,
						skill: skills2[i],
						isLink: isLink,
					})) temp2 = cache.delegate(temp2).effect(card, player, target, result2, isLink);
					else temp2 = undefined;
				}
				else if (temp2 && typeof temp2.effect == 'object' && typeof temp2.effect.target_use == 'function') {
					if (!player.hasSkillTag('ignoreSkill', true, {
						card: card,
						target: target,
						skill: skills2[i],
						isLink: isLink,
					})) temp2 = cache.delegate(temp2.effect).target_use(card, player, target, result2, isLink);
					else temp2 = undefined;
				}
				else if (temp2 && typeof temp2.effect == 'object' && typeof temp2.effect.target == 'function') {
					if (!player.hasSkillTag('ignoreSkill', true, {
						card: card,
						target: target,
						skill: skills2[i],
						isLink: isLink,
					})) temp2 = cache.delegate(temp2.effect).target(card, player, target, result2, isLink);
					else temp2 = undefined;
				}
				else temp2 = undefined;
				if (typeof temp2 == 'object') {
					if (temp2.length == 2 || temp2.length == 4) {
						result2 *= temp2[0];
						temp02 += temp2[1];
					}
					if (temp2.length == 4) {
						result1 *= temp2[2];
						temp01 += temp2[3];
					}
				}
				else if (typeof temp2 == 'number') {
					result2 *= temp2;
				}
				else if (temp2 == 'zeroplayer') {
					zeroplayer = true;
				}
				else if (temp2 == 'zerotarget') {
					zerotarget = true;
				}
				else if (temp2 == 'zeroplayertarget') {
					zeroplayer = true;
					zerotarget = true;
				}
				if (typeof temp3 == 'function' && temp3(player, target) != undefined) {
					threaten *= temp3(player, target);
				}
				else if (typeof temp3 == 'object') {
					if (typeof temp3.target == 'number') {
						threaten *= temp3;
					}
					else if (typeof temp3.target == 'function' && temp3(player, target) != undefined) {
						threaten *= temp3(player, target);
					}
				}
				else if (typeof temp3 == 'number') {
					threaten *= temp3;
				}
			}
			result2 += temp02;
			result1 += temp01;
			if (typeof card == 'object' && !result.ignoreStatus) {
				if (cache.get.attitude(player, target) < 0) {
					result2 *= Math.sqrt(threaten);
				}
				else {
					result2 *= Math.sqrt(Math.sqrt(threaten));
				}
				if (target.hp == 1) result2 *= 2.5;
				if (target.hp == 2) result2 *= 1.8;
				let countTargetCards = target.countCards('h');
				if (countTargetCards == 0) {
					if (get.tag(card, 'respondSha') || get.tag(card, 'respondShan')) {
						result2 *= 1.7;
					}
					else {
						result2 *= 1.5;
					}
				}else if (countTargetCards == 1) result2 *= 1.3;
				else if (countTargetCards == 2) result2 *= 1.1;
				else if (countTargetCards >= 3) result2 *= 0.5;

				if (target.hp == 4) result2 *= 0.9;
				else if (target.hp == 5) result2 *= 0.8;
				else if (target.hp > 5) result2 *= 0.6;
			}
		}
		else {
			result2 += temp02;
			result1 += temp01;
		}
		if (zeroplayer) result1 = 0;
		if (zerotarget) result2 = 0;
		var final = 0;
		if (player2) {
			final = (result1 * cache.get.attitude(player2, player) + (target ? result2 * cache.get.attitude(player2, target) : 0));
		}
		else final = (result1 * cache.get.attitude(player, player) + (target ? result2 * cache.get.attitude(player, target) : 0));
		if (!isLink && get.tag(card, 'natureDamage') && !zerotarget) {
			var info = get.info(card);
			if (!info || !info.ai || !info.ai.canLink) {
				if (target.isLinked()) game.players.forEach(function (current) {
					if (current != target && current.isLinked()) final += cache.get.effect(current, card, player, player2, true);
				});
			}
			else if (info.ai.canLink(player, target, card)) {
				game.players.forEach(function (current) {
					if (current != target && current.isLinked()) final += cache.get.effect(current, card, player, player2, true);
				});
			}
		}
		return final;
	}
	static cacheEffect(target, card, player, player2, isLink){
		let cache = CacheContext.requireCacheContext();
		return cache.get.effect(target,card,player,player2,isLink);
	}
	static effect(target, card, player, player2, isLink) {
		let cache = CacheContext.requireCacheContext();
		var event = _status.event;
		var eventskill = null;
		if (player == undefined) player = _status.event.player;
		if (card && typeof card == 'object' && 'name' in card) card = get.autoViewAs(card);
		if (typeof card != 'string' && (typeof card != 'object' || !card.name)) {
			var skillinfo = get.info(event.skill);
			if (event.skill && skillinfo.viewAs == undefined) card = _status.event.skill;
			else {
				card = get.card();
				if (skillinfo && skillinfo.viewAs && card.name === skillinfo.viewAs.name) {
					eventskill = event.skill;
				}
			}
		}
		var result = get.result(card, eventskill);
		var result1 = result.player, result2 = result.target;
		if (typeof result1 == 'function') result1 = result1(player, target, card, isLink);
		if (typeof result2 == 'function') result2 = result2(player, target, card, isLink);

		if (typeof result1 != 'number') result1 = 0;
		if (typeof result2 != 'number') result2 = 0;
		var temp1, temp2, temp3, temp01 = 0, temp02 = 0, threaten = 1;
		var skills1 = player.getSkills().concat(lib.skill.global);
		game.expandSkills(skills1);
		var zerotarget = false, zeroplayer = false;
		for (var i = 0; i < skills1.length; i++) {
			temp1 = get.info(skills1[i]).ai;
			if (temp1 && typeof temp1.effect == 'object' && typeof temp1.effect.player == 'function') {
				temp1 = temp1.effect.player(card, player, target, result1, isLink);
			}
			else temp1 = undefined;
			if (typeof temp1 == 'object') {
				if (temp1.length == 2 || temp1.length == 4) {
					result1 *= temp1[0];
					temp01 += temp1[1];
				}
				if (temp1.length == 4) {
					result2 *= temp1[2];
					temp02 += temp1[3];
				}
			}
			else if (typeof temp1 == 'number') {
				result1 *= temp1;
			}
			else if (temp1 == 'zeroplayer') {
				zeroplayer = true;
			}
			else if (temp1 == 'zerotarget') {
				zerotarget = true;
			}
			else if (temp1 == 'zeroplayertarget') {
				zeroplayer = true;
				zerotarget = true;
			}
		}
		if (target) {
			var skills2 = target.getSkills().concat(lib.skill.global);
			game.expandSkills(skills2);
			for (var i = 0; i < skills2.length; i++) {
				temp2 = get.info(skills2[i]).ai;
				if (temp2 && temp2.threaten) temp3 = cache.delegate(temp2).threaten;
				else temp3 = undefined;
				if (temp2 && typeof temp2.effect == 'function') {
					if (!player.hasSkillTag('ignoreSkill', true, {
						card: card,
						target: target,
						skill: skills2[i],
						isLink: isLink,
					})) temp2 = cache.delegate(temp2).effect(card, player, target, result2, isLink);
					else temp2 = undefined;
				}
				else if (temp2 && typeof temp2.effect == 'object' && typeof temp2.effect.target == 'function') {
					if (!player.hasSkillTag('ignoreSkill', true, {
						card: card,
						target: target,
						skill: skills2[i],
						isLink: isLink,
					})) temp2 = cache.delegate(temp2.effect).target(card, player, target, result2, isLink);
					else temp2 = undefined;
				}
				else temp2 = undefined;
				if (typeof temp2 == 'object') {
					if (temp2.length == 2 || temp2.length == 4) {
						result2 *= temp2[0];
						temp02 += temp2[1];
					}
					if (temp2.length == 4) {
						result1 *= temp2[2];
						temp01 += temp2[3];
					}
				}
				else if (typeof temp2 == 'number') {
					result2 *= temp2;
				}
				else if (temp2 == 'zeroplayer') {
					zeroplayer = true;
				}
				else if (temp2 == 'zerotarget') {
					zerotarget = true;
				}
				else if (temp2 == 'zeroplayertarget') {
					zeroplayer = true;
					zerotarget = true;
				}
				if (typeof temp3 == 'function' && temp3(player, target) != undefined) {
					threaten *= temp3(player, target);
				}
				else if (typeof temp3 == 'object') {
					if (typeof temp3.target == 'number') {
						threaten *= temp3;
					}
					else if (typeof temp3.target == 'function' && temp3(player, target) != undefined) {
						threaten *= temp3(player, target);
					}
				}
				else if (typeof temp3 == 'number') {
					threaten *= temp3;
				}
			}
			result2 += temp02;
			result1 += temp01;
			if (typeof card == 'object' && !result.ignoreStatus) {
				if (cache.get.attitude(player, target) < 0) {
					result2 *= Math.sqrt(threaten);
				}
				else {
					result2 *= Math.sqrt(Math.sqrt(threaten));
				}
				// *** continue here ***
				if (target.hp == 1) result2 *= 2.5;
				if (target.hp == 2) result2 *= 1.8;
				let targetCountCards = target.countCards('h');
				if (targetCountCards == 0) {
					if (get.tag(card, 'respondSha') || get.tag(card, 'respondShan')) {
						result2 *= 1.7;
					}
					else {
						result2 *= 1.5;
					}
				}
				if (targetCountCards == 1) result2 *= 1.3;
				else if (targetCountCards == 2) result2 *= 1.1;
				else if (targetCountCards > 3) result2 *= 0.5;
				if (target.hp == 4) result2 *= 0.9;
				else if (target.hp == 5) result2 *= 0.8;
				else if (target.hp > 5) result2 *= 0.6;
			}
		}
		else {
			result2 += temp02;
			result1 += temp01;
		}
		if (zeroplayer) result1 = 0;
		if (zerotarget) result2 = 0;
		var final = 0;
		if (player2) {
			final = (result1 * cache.get.attitude(player2, player) + (target ? result2 * cache.get.attitude(player2, target) : 0));
		}
		else final = (result1 * cache.get.attitude(player, player) + (target ? result2 * cache.get.attitude(player, target) : 0));
		if (!isLink && get.tag(card, 'natureDamage') && !zerotarget) {
			var info = get.info(card);
			if (!info || !info.ai || !info.ai.canLink) {
				if (target.isLinked()) game.players.forEach(function (current) {
					if (current != target && current.isLinked()) final += cache.get.effect(current, card, player, player2, true);
				});
			}
			else if (info.ai.canLink(player, target, card)) {
				game.players.forEach(function (current) {
					if (current != target && current.isLinked()) final += cache.get.effect(current, card, player, player2, true);
				});
			}
		}
		return final;
	}
	static damageEffect(target, player, viewer, nature) {
		if (get.itemtype(nature) == 'natures') {
			var natures = get.natureList(nature);
			return natures.map(n => get.damageEffect(target, player, viewer, n)).reduce((p, c) => p + c, 0) / (natures.length || 1);
		}
		if (!player) {
			player = target;
		}
		if (!viewer) {
			viewer = target;
		}
		var name = 'damage';
		if (nature == 'fire') {
			name = 'firedamage';
		}
		else if (nature == 'thunder') {
			name = 'thunderdamage';
		}
		else if (nature == 'ice') {
			name = 'icedamage';
		}
		var eff = get.effect(target, { name: name }, player, viewer);
		if (eff > 0 && target.hujia > 0) return eff / 1.3;
		return eff;
	}
	/**
	 * 
	 * @param {any} source 如果参数是function，执行此函数并返回结果，传参为此方法剩余的参数。如果参数不是function，直接返回结果。
	 * @returns 返回的结果
	 */
	static dynamicVariable(source){
		if(typeof source == 'function'){
			return source.call(null,...(Array.from(arguments).slice(1)));
		}
		return source;
	}
	static recoverEffect(target, player, viewer) {
		if (target.hp == target.maxHp) return 0;
		if (!player) {
			player = target;
		}
		if (!viewer) {
			viewer = target;
		}
		return get.effect(target, { name: 'recover' }, player, viewer);
	}
	static buttonValue(button) {
		var card = button.link;
		var player = get.owner(card);
		if (!player) player = _status.event.player;
		if (player.getCards('j').includes(card)) {
			var efff = get.effect(player, {
				name: card.viewAs || card.name,
				cards: [card],
			}, player, player);
			if (efff > 0) return 0.5;
			if (efff == 0) return 0;
			return -1.5;
		}
		if (player.getCards('e').includes(card)) {
			var evalue = get.value(card, player);
			if (player.hasSkillTag('noe')) {
				if (evalue >= 7) {
					return evalue / 6;
				}
				return evalue / 10;
			}
			return evalue / 3;
		}
		if (player.hasSkillTag('noh')) return 0.1;
		var nh = player.countCards('h');
		switch (nh) {
			case 1: return 2;
			case 2: return 1.6;
			case 3: return 1;
			case 4: return 0.8;
			case 5: return 0.6;
			default: return 0.4;
		}
	}
	static attitude2(to) { return get.attitude(_status.event.player, to); }
}

export const get = Get;

export {
	Is
};
