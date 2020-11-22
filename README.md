# 无名杀

无名杀是一款使用 JavaScript 实现的非官方版三国杀桌游，能够在多个平台上运行。这是一个[无名杀原始仓库][origin]的分支，鉴于原仓库 pull request 审核似乎不活跃，这里分离出单独的仓库。

## 安装与运行

本仓库暂时还未生成客户端。原始仓库作者提供的客户端下载链接如下：

GitHub： https://github.com/libccy/noname/releases/tag/SSS

Coding： https://nakamurayuri.coding.net/p/noname/d/noname/git/releases/SSS

如果要参与开发，下载代码后运行以下命令安装依赖
```bash
npm install
```
之后直接打开 index.html 或者运行
```bash
npm run start
```
即可。

## 特性改动

本仓库和原仓库相比，以下特性有所改动。每个类别中基本按修改时间从新到旧排列。

### 重大变更
#### 完整的【木牛流马】使用体验
由于代码框架限制，早前版本的木牛流马功能较简单：在需要打出卡牌时先询问是否用其中的牌再用手牌，以及需要使用卡牌时可以发动“流马”技能选择一张其中的牌使用。然而，当一些技能需要打出（如改判技）手牌，或将手牌当成其他牌使用时（丈八蛇矛、倾国等等），却无法使用木牛流马中的牌，这和官方的设计本意不符。原仓库中[有人反馈过这个问题][mumaissue]，这里提供一种解决方案，希望起到抛砖引玉的作用。

相关的代码修改包括三个部分：游戏核心 game/game.js 的修改 ([2ef6a60][2ef6a60])，以及相关技能触发条件的修改 ([b7a48a2][b7a48a2])。另外还对强制转化牌的技能触发条件做了修改 ([2ee726b][2ee726b])。

在游戏核心中，我们引入了一个新的 position——`'m'`——用来表示木牛流马中的牌，用在 `getCards` 和 `selectableCards` 函数中。另外，在 player 对象中加入了 `showMuniuCards` 和 `hideMuniuCards` 两个函数，用来弹出和收回木牛流马中的牌，供玩家（和 AI）选择。在点击技能时，以及在 `chooseCard`、`chooseToRespond`、`chooseToUse` 的过程中，我们检查相关的技能是否是视为技（有 `viewAs`）且是使用或打出，或者相关的 `event.position` 是否包含 `'m'`。如果有，就弹出木牛流马中的牌，之后（点击取消或确定后）收回。效果：
![muniu-demo](demo/muniu.gif)

这样，我们只需要修改相关技能的 filter，使得在木牛流马中有满足条件的牌时也能触发技能询问；另外针对各种询问选择牌的技能，如果选择牌的目的是使用或打出，全部加上 `'m'` 的 position 即可。

最后，神关羽的武神等强制转化牌的技能描述都是“锁定技，你的……牌视为……”，而木牛流马中的牌不属于任何人，所以需要对这些技能的触发条件也加以修改，排除木牛流马弹出 的牌。

由于涉及的技能繁多，修改可能会有遗漏，欢迎反馈仍然无法使用木牛流马的技能。

另外，卡牌移动特效还不太美观，经常直接显示和消失，不过不影响使用。

### 微小的改动
#### 新特性
* 应邀加入了新版最多放五张牌的木牛流马 ([bee40a7][bee40a7])
* 游戏结束后的统计中加入回合数，以便对比各项数据 ([f040916][f040916])
* 游戏结束后同时显示木牛流马中的牌 ([4d5c9d0][4d5c9d0])

#### Bug 修复
* 修复〖巧思〗有时会找到重复的牌而报错的问题 [eba3cbe][eba3cbe]
* 允许国战吕范〖调度〗选择是否自动发动摸牌 ([20fb824][20fb824])
* 修复手杀审配〖烈直〗描述问题，实际上不能弃自己牌 ([6278a53][6278a53])
* 修复他人向手杀简雍发起拼点后报错的问题 ([c422da2][c422da2])
* 修复国战左慈汲魂每受一点伤害就能获得一个魂的问题，根据技能描述应为一次伤害一个 ([302d2b7][302d2b7])
* 修复录像回放中月份显示比实际多 1 的问题 ([9fe005c][9fe005c])
* 改正一些描述和界面文字上的 typo ([732bc6f][732bc6f], [cea5ea1][cea5ea1] etc.)

#### 代码结构调整
* 增加 package.json，不再上传 node_modules ([8915afd][8915afd], [8270c60][8270c60])

## 反馈和贡献

如果您想反馈的问题涉及上方提到的特性改动，请直接[在本仓库提交 issue][newissue]。

如果您想反馈的问题不涉及本仓库所做出的改动，建议向原始仓库反馈，向本仓库反馈很可能不会得到处理。

参与贡献代码、提交 pull request 的原则也如上。

如果原仓库的作者有兴趣，本人也可以就上述改动向原始仓库提交 pull request。

[bee40a7]: https://github.com/lziad/noname-sgs/commit/bee40a7
[2ee726b]: https://github.com/lziad/noname-sgs/commit/2ee726b
[eba3cbe]: https://github.com/lziad/noname-sgs/commit/eba3cbe
[2ef6a60]: https://github.com/lziad/noname-sgs/commit/2ef6a60
[b7a48a2]: https://github.com/lziad/noname-sgs/commit/b7a48a2
[20fb824]: https://github.com/lziad/noname-sgs/commit/20fb824
[6278a53]: https://github.com/lziad/noname-sgs/commit/6278a53
[f040916]: https://github.com/lziad/noname-sgs/commit/f040916
[c422da2]: https://github.com/lziad/noname-sgs/commit/c422da2
[4d5c9d0]: https://github.com/lziad/noname-sgs/commit/4d5c9d0
[302d2b7]: https://github.com/lziad/noname-sgs/commit/302d2b7
[9fe005c]: https://github.com/lziad/noname-sgs/commit/9fe005c
[8915afd]: https://github.com/lziad/noname-sgs/commit/8915afd
[8270c60]: https://github.com/lziad/noname-sgs/commit/8270c60
[732bc6f]: https://github.com/lziad/noname-sgs/commit/732bc6f
[cea5ea1]: https://github.com/lziad/noname-sgs/commit/cea5ea1
[origin]: https://github.com/libccy/noname
[mumaissue]: https://github.com/libccy/noname/issues/55
[newissue]: https://github.com/lziad/noname-sgs/issues/new