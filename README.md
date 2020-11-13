无名杀是一款使用 JavaScript 实现的非官方版三国杀桌游。这是一个无名杀原始仓库的分支，鉴于原仓库 PR 审核并不活跃，分离出单独的仓库。

客户端下载戳这里：

GitHub： https://github.com/libccy/noname/releases/tag/SSS

Coding： https://nakamurayuri.coding.net/p/noname/d/noname/git/releases/SSS

---

和原仓库相比的改动：
* 在游戏结束后的统计中加入回合数，以便对比各项数据 ([f040916][f040916])
* 修复他人向手杀简雍发起拼点后卡死的问题 ([c422da2][c422da2])
* 游戏结束时显示木牛流马中的牌 ([4d5c9d0][4d5c9d0])
* 修复国战左慈汲魂每受一点伤害就能获得一个魂的问题，根据技能描述应为一次伤害一个 ([302d2b7][302d2b7])
* 修复录像回放中月份显示比实际多 1 的问题 ([9fe005c][9fe005c])
* 增加 package.json，不再上传 node_modules ([8915afd][8915afd], [8270c60][8270c60])
* 改正一些描述和界面文字上的 typo ([732bc6f][732bc6f], [cea5ea1][cea5ea1] etc.)

[f040916]: https://github.com/lziad/noname-sgs/commit/f040916
[c422da2]: https://github.com/lziad/noname-sgs/commit/c422da2
[4d5c9d0]: https://github.com/lziad/noname-sgs/commit/4d5c9d0
[302d2b7]: https://github.com/lziad/noname-sgs/commit/302d2b7
[9fe005c]: https://github.com/lziad/noname-sgs/commit/9fe005c
[8915afd]: https://github.com/lziad/noname-sgs/commit/8915afd
[8270c60]: https://github.com/lziad/noname-sgs/commit/8270c60
[732bc6f]: https://github.com/lziad/noname-sgs/commit/732bc6f
[cea5ea1]: https://github.com/lziad/noname-sgs/commit/cea5ea1