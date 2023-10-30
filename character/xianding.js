'use strict';
game.import('character',function(lib,game,ui,get,ai,_status){
	return {
		name:'xianding',
		connect:true,
		character:{
			wu_luxun:['male','wu',3,['dcxiongmu','dczhangcai','dcruxian']],
			dc_xujing:['male','shu',3,['dcshangyu','dccaixia']],
			dc_zhaoxiang:['female','shu',4,['refanghun','refuhan']],
			ol_guansuo:['male','shu',4,['xinzhengnan','xiefang']],
			dc_shixie:['male','qun',3,['rebiluan','ollixia']],
			dc_sp_machao:['male','qun',4,['zhuiji','dc_olshichou']],
			old_huangfusong:['male','qun',4,['xinfenyue']],
			dc_xiahouba:['male','shu',4,['rebaobian']],
			dc_daxiaoqiao:['female','wu',3,['dcxingwu','dcluoyan']],
			tianshangyi:['female','wei',3,['dcposuo','dcxiaoren'],['unseen']],
			sunlingluan:['female','wu',3,['dclingyue','dcpandi']],
			dc_wangjun:['male','qun',4,['dctongye','dcchangqu']],
			zhoubuyi:['male','wei',3,['dcshiji','dcsilun']],
			dc_duyu:['male','wei',4,['dcjianguo','dcdyqingshi']],
			ganfurenmifuren:['female','shu',3,['dcchanjuan','dcxunbie']],
			dc_ganfuren:['female','shu',3,['dcshushen','dcshenzhi']],
			dc_mifuren:['female','shu',3,['dcguixiu','dccunsi']],
			wanglang:['male','wei',3,['regushe','rejici']],
			ruanji:['male','wei',3,['dczhaowen','dcjiudun']],
			wu_zhugeliang:['male','shu','4/7',['dcjincui','dcqingshi','dczhizhe']],
			duanqiaoxiao:['female','wei',3,['dccaizhuang','dchuayi']],
			zhangjinyun:['female','shu',3,['dchuizhi','dcjijiao']],
			huanfan:['male','wei',3,['dcjianzheng','dcfumou']],
			chentai:['male','wei',4,['dcctjiuxian','dcchenyong']],
			sunyu:['male','wu',3,['dcquanshou','dcshexue'],['unseen']],
			xizheng:['male','shu',3,['dcdanyi','dcwencan']],
			dc_ruiji:['female','wu',4,['dcwangyuan','dclingyin','dcliying']],
			zerong:['male','qun',4,['dccansi','dcfozong']],
			xielingyu:['female','wu',3,['dcyuandi','dcxinyou']],
			dc_yangbiao:['male','qun',3,['dczhaohan','dcjinjie','dcjue']],
			dc_tengfanglan:['female','wu',3,['dcluochong','dcaichen']],
			yanghong:['male','qun',3,['dcjianji','dcyuanmo']],
			xuelingyun:['female','wei',3,['dcxialei','dcanzhi']],
			dc_wangyun:['male','qun',4,['dclianji','dcmoucheng'],['clan:太原王氏']],
			dc_zhouxuān:['male','wei',3,['dcwumei','dczhanmeng']],
			chengbing:['male','wu',3,['dcjingzao','dcenyu']],
			dongguiren:['female','qun',3,['dclianzhi','dclingfang','dcfengying']],
			yuanji:['female','wu',3,['dcfangdu','dcjiexing']],
			zhujianping:['male','qun',3,['dcxiangmian','dctianji']],
			zhaozhi:['male','shu',3,['dctongguan','dcmengjie']],
			dc_liuye:['male','wei',3,['dcpoyuan','dchuace']],
			luyi:['female','qun',3,['dcyaoyi','dcfuxue']],
			dingshangwan:['female','wei',3,['dcfengyan','dcfudao']],
			quanhuijie:['female','wu',3,['dchuishu','dcyishu','dcligong']],
			dukui:['male','wei',3,['dcfanyin','dcpeiqi']],
			zhangfen:['male','wu',4,['dcwanglu','dcxianzhu','dcchaixie']],
			liuhui:['male','qun',4,['dcgeyuan','dcjieshu','dcgusuan']],
			dc_wangchang:['male','wei',3,['dckaiji','dcpingxi'],['clan:太原王氏']],
			zhaoang:['male','wei','3/4',['dczhongjie','dcsushou']],
			caohua:['female','wei',3,['caiyi','guili']],
			dc_liuyu:['male','qun',3,['dcsuifu','dcpijing']],
			dc_huangzu:['male','qun',4,['dcjinggong','dcxiaojuan']],
			laiyinger:['female','qun',3,['xiaowu','huaping']],
			caomao:['male','wei','3/4',['qianlong','fensi','juetao','zhushi'],['zhu']],
			dc_luotong:['male','wu',3,['renzheng','jinjian']],
			re_fengfangnv:['female','qun',3,['tiqi','baoshu']],
			wufan:['male','wu',4,['tianyun','wfyuyan']],
			re_zhangbao:['male','qun',3,['xinzhoufu','xinyingbing']],
			re_sunyi:['male','wu',5,['syjiqiao','syxiongyi']],
			caojinyu:['female','wei',3,['yuqi','shanshen','xianjing']],
			zhouyi:['female','wu',3,['zhukou','mengqing']],
			re_panshu:['female','wu',3,['zhiren','yaner']],
			yangwan:['female','shu',3,['youyan','zhuihuan']],
			ruanyu:['male','wei',3,['xingzuo','miaoxian']],
			fanyufeng:['female','qun',3,['bazhan','jiaoying']],
			guozhao:['female','wei',3,['pianchong','zunwei']],
			re_xinxianying:['female','wei',3,['rezhongjian','recaishi']],
			liubian:['male','qun',3,['shiyuan','dushi','yuwei'],['zhu']],
			re_liuzan:['male','wu',4,['refenyin','liji']],
			wenyang:['male','wei',5,['xinlvli','choujue']],
			wangshuang:['male','wei',8,['spzhuilie']],
			huaman:['female','shu',3,['hmmanyi','mansi','souying','zhanyuan']],
			puyuan:['male','shu',4,['pytianjiang','pyzhuren']],
			guanlu:['male','wei',3,['tuiyan','busuan','mingjie']],
			gexuan:['male','wu',3,['gxlianhua','zhafu']],
			leitong:['male','shu',4,['kuiji']],
			wulan:['male','shu',4,['wlcuorui']],
		},
		characterSort:{
			xianding:{
				sp2_huben:['wangshuang','wenyang','re_liuzan','dc_huangzu','wulan','leitong','chentai','dc_duyu','dc_wangjun','dc_xiahouba','old_huangfusong'],
				sp2_shengun:["puyuan","guanlu","gexuan",'wufan','re_zhangbao','dukui','zhaozhi','zhujianping','dc_zhouxuān','zerong'],
				sp2_bizhe:['dc_luotong','dc_wangchang','chengbing','dc_yangbiao','ruanji'],
				sp2_huangjia:['caomao','liubian','dc_liuyu','quanhuijie','dingshangwan','yuanji','xielingyu','sunyu','ganfurenmifuren','dc_ganfuren','dc_mifuren','dc_shixie'],
				sp2_zhangtai:['guozhao','fanyufeng','ruanyu','yangwan','re_panshu'],
				sp2_jinse:['caojinyu','re_sunyi','re_fengfangnv','caohua','laiyinger','zhangfen'],
				sp2_yinyu:['zhouyi','luyi','sunlingluan'],
				sp2_wangzhe:['dc_daxiaoqiao','dc_sp_machao'],
				sp2_doukou:['re_xinxianying','huaman','xuelingyun','dc_ruiji','duanqiaoxiao','tianshangyi'],
				sp2_jichu:['zhaoang','dc_liuye','dc_wangyun','yanghong','huanfan','xizheng'],
				sp2_yuxiu:['dongguiren','dc_tengfanglan','zhangjinyun','zhoubuyi'],
				sp2_qifu:['ol_guansuo','dc_zhaoxiang','dc_xujing'],
				sp2_gaoshan:['wanglang','liuhui'],
				sp2_wumiao:['wu_zhugeliang','wu_luxun'],
			}
		},
		skill:{
			//武陆逊
			dcxiongmu:{
				audio:2,
				trigger:{global:'roundStart'},
				// filter:function(event,player){
				// 	return player.countCards('h')<player.maxHp;
				// },
				group:'dcxiongmu_minus',
				prompt2:function(event,player){
					return (player.countCards('h')<player.maxHp?'将手牌摸至'+get.cnNumber(player.maxHp)+'张，然后':'')+'将任意张牌随机置入牌堆并从牌堆或弃牌堆中获得等量点数为8的牌。';
				},
				content:function(){
					'step 0'
					player.drawTo(player.maxHp);
					'step 1'
					var cards=player.getCards('he');
					if(!cards.length) event.finish();
					else if(cards.length==1) event._result={bool:true,cards:cards};
					else player.chooseCard('雄幕：将任意张牌置入牌堆的随机位置','he',[1,Infinity],true).set('ai',card=>{
						return 6-get.value(card);
					});
					'step 2'
					if(result.bool){
						var cards=result.cards;
						event.cards=cards;
						game.log(player,`将${get.cnNumber(cards.length)}张牌置入了牌堆`);
						player.loseToDiscardpile(cards,ui.cardPile,'blank').set('log',false).insert_index=function(){
							return ui.cardPile.childNodes[get.rand(0,ui.cardPile.childNodes.length-1)];
						};
					}
					else event.finish();
					'step 3'
					var list=[],shown=[]
					var piles=['cardPile','discardPile'];
					for(var pile of piles){
						for(var i=0;i<ui[pile].childNodes.length;i++){
							var card=ui[pile].childNodes[i];
							var number=get.number(card,false);
							if(!list.contains(card)&&number==8){
								list.push(card);
								if(pile=='discardPile') shown.push(card);
								if(list.length>=cards.length) break;
							}
						}
						if(list.length>=cards.length) break;
					}
					if(list.length){
						var next=player.gain(list);
						next.shown_cards=shown;
						next.set('animate',function(event){
							var player=event.player,cards=event.cards,shown=event.shown_cards;
							if(shown.length<cards.length){
								var num=cards.length-shown.length;
								player.$draw(num);
								game.log(player,'从牌堆获得了',num,'张点数为8的牌');
							}
							if(shown.length>0){
								player.$gain2(shown,false);
								game.log(player,'从弃牌堆获得了',shown);
							}
							return 500;
						});
						next.gaintag.add('dcxiongmu_tag');
						player.addTempSkill('dcxiongmu_tag','roundStart');
					}
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(target.countCards('h')>target.getHp()||player.hasSkillTag('jueqing')) return;
							if(player._dcxiongmu_temp) return;
							if(_status.event.getParent('useCard',true)||_status.event.getParent('_wuxie',true)) return;
							if(get.tag(card,'damage')){
								if(target.getHistory('damage').length>0){
									return [1,-2];
								}
								else{
									if(get.attitude(player,target)>0&&target.hp>1){
										return 0;
									}
									if(get.attitude(player,target)<0&&!player.hasSkillTag('damageBonus')){
										if(card.name=='sha') return;
										var sha=false;
										player._dcxiongmu_temp=true;
										var num=player.countCards('h',function(card){
											if(card.name=='sha'){
												if(sha){
													return false;
												}
												else{
													sha=true;
												}
											}
											return get.tag(card,'damage')&&player.canUse(card,target)&&get.effect(target,card,player,player)>0;
										});
										delete player._dcxiongmu_temp;
										if(player.hasSkillTag('damage')){
											num++;
										}
										if(num<2){
											var enemies=player.getEnemies();
											if(enemies.length==1&&enemies[0]==target&&player.needsToDiscard()){
												return;
											}
											return 0;
										}
									}
								}
							}
						}
					}
				},
				subSkill:{
					minus:{
						audio:'dcxiongmu',
						trigger:{player:'damageBegin4'},
						filter:function(event,player){
							return player.countCards('h')<=player.getHp()&&game.getGlobalHistory('everything',evt=>{
								return evt.name=='damage'&&evt.player==player;
							},event).indexOf(event)==0;
						},
						forced:true,
						locked:false,
						content:function(){
							trigger.num--;
						}
					},
					tag:{
						charlotte:true,
						onremove:function(player){
							player.removeGaintag('dcxiongmu_tag');
						},
						mod:{
							ignoredHandcard:function(card,player){
								if(card.hasGaintag('dcxiongmu_tag')) return true;
							},
							cardDiscardable:function(card,player,name){
								if(name=='phaseDiscard'&&card.hasGaintag('dcxiongmu_tag')) return false;
							},
						},
					}
				}
			},
			dczhangcai:{
				audio:2,
				trigger:{
					player:['useCard','respond'],
				},
				filter:function(event,player){
					if(player.hasSkill('dczhangcai_all')) return true;
					return get.number(event.card)==8;
				},
				prompt2:function(event,player){
					const num=player.hasSkill('dczhangcai_all')?get.number(event.card):8;
					let count=1;
					if(typeof num=='number') count=Math.max(1,player.countCards('h',card=>get.number(card)==num))
					return '你可以摸'+get.cnNumber(count)+'张牌。';
				},
				frequent:true,
				content:function(){
					var num=player.hasSkill('dczhangcai_all')?get.number(trigger.card):8;
					var count=1;
					if(typeof num=='number') count=Math.max(1,player.countCards('h',card=>get.number(card)==num));
					player.draw(count);
				},
				ai:{
					threaten:4,
				},
				subSkill:{
					all:{
						charlotte:true,
						mark:true,
						intro:{
							content:'当你使用或打出牌时，你可以摸X张牌（X为你手牌中与此牌点数相同的牌数且至少为1）'
						},
					},
				}
			},
			dcruxian:{
				audio:2,
				enable:'phaseUse',
				limited:true,
				skillAnimation:true,
				animationColor:'wood',
				content:function(){
					'step 0'
					player.awakenSkill('dcruxian');
					player.addTempSkill('dczhangcai_all',{player:'phaseBegin'});
				},
				ai:{
					order:15,
					result:{
						player:function(player){
							if(!player.hasSkill('dczhangcai')) return 0;
							if(player.countCards('hs',card=>get.number(card)!=8&&player.hasValueTarget(card))>3||player.hp==1) return 5;
							return 0;
						}
					}
				}
			},
			//新杀许靖
			dcshangyu:{
				audio:2,
				trigger:{
					global:'phaseBefore',
					player:'enterGame',
				},
				filter:function(event,player){
					return event.name!='phase'||game.phaseNumber==0;
				},
				forced:true,
				content:function(){
					'step 0'
					var card=get.cardPile(card=>get.name(card,false)=='sha');
					if(card){
						event.card=card;
						player.gain(card,'gain2').gaintag.add('dcshangyu_tag');
						player.markAuto('dcshangyu',card);
					}
					else{
						player.chat('不是，连杀都没有？');
						event.finish();
					}
					'step 1'
					if(get.owner(card)==player&&get.position(card)=='h'&&game.hasPlayer(current=>current!=player)){
						player.chooseTarget(`是否将${get.translation(card)}交给一名其他角色？`,lib.filter.notMe);
					}
					else event.finish();
					'step 2'
					if(result.bool){
						var target=result.targets[0];
						player.line(target);
						player.give(card,target).gaintag.add('dcshangyu_tag');
					}
					player.addSkill('dcshangyu_effect');
				},
				subSkill:{
					effect:{
						audio:'dcshangyu',
						trigger:{
							global:'damageSource',
						},
						filter:function(event,player){
							return event.cards&&event.cards.some(card=>player.getStorage('dcshangyu').includes(card));
						},
						forced:true,
						charlotte:true,
						direct:true,
						group:['dcshangyu_transfer','dcshangyu_addTag'],
						content:function(){
							'step 0'
							var list=[player];
							if(trigger.source&&trigger.source.isIn()){
								player.logSkill('dcshangyu_effect',trigger.source);
								list.push(trigger.source);
							}
							else player.logSkill('dcshangyu_effect');
							list.sortBySeat();
							game.asyncDraw(list);
						}
					},
					transfer:{
						audio:'dcshangyu',
						trigger:{
							global:['loseAfter','loseAsyncAfter','cardsDiscardAfter','equipAfter'],
						},
						forced:true,
						direct:true,
						filter:function(event,player){
							if(!game.hasPlayer(current=>{
								return !player.getStorage('dcshangyu_transfer').includes(current);
							})) return false;
							return event.getd().some(card=>{
								return get.position(card)=='d'&&player.getStorage('dcshangyu').includes(card);
							});
						},
						content:function(){
							'step 0'
							var cards=trigger.getd().filter(card=>{
								return get.position(card)=='d'&&player.getStorage('dcshangyu').includes(card);
							});
							event.cards=cards;
							player.chooseTarget(`赏誉：将${get.translation(cards)}交给一名可选角色`,(card,player,target)=>{
								return !player.getStorage('dcshangyu_transfer').includes(target);
							},true);
							'step 1'
							if(result.bool){
								var target=result.targets[0];
								player.logSkill('dcshangyu_transfer',target);
								if(!player.storage.dcshangyu_transfer){
									player.when({global:'phaseAfter'})
										.then(()=>{
											player.unmarkSkill('dcshangyu_transfer');
											delete player.storage.dcshangyu_transfer;
										});
								}
								player.markAuto('dcshangyu_transfer',target);
								target.gain(cards,'gain2').set('giver',player).gaintag.add('dcshangyu_tag');
							}
						},
						intro:{
							content:'本回合已交给过$',
						},
					},
					addTag:{
						trigger:{
							global:['gainAfter','loseAsyncAfter'],
						},
						charlotte:true,
						popup:false,
						silent:true,
						lastDo:true,
						filter:function(event,player){
							return game.hasPlayer(current=>{
								var cards=event.getg(current);
								return cards.some(card=>player.getStorage('dcshangyu').includes(card));
							});
						},
						content:function(){
							game.countPlayer(current=>{
								var cards=trigger.getg(current);
								if(cards.length){
									cards=cards.filter(card=>player.getStorage('dcshangyu').includes(card));
									current.addGaintag(cards,'dcshangyu_tag');
								}
							});
						},
					},
				},
			},
			dccaixia:{
				audio:2,
				trigger:{
					player:'damageEnd',
					source:'damageSource',
				},
				filter:function(event,player){
					return !player.hasMark('dccaixia_clear');
				},
				direct:true,
				content:function(){
					'step 0'
					var choices=Array.from({length:Math.min(5,game.players.length+game.dead.length)}).map((_,i)=>get.cnNumber(i+1,true));
					player.chooseControl(choices,'cancel2').set('prompt',get.prompt('dccaixia')).set('prompt2','你可以摸至多'+get.cnNumber(choices.length)+'张牌，但是你此后需要再使用等量的牌才可再发动本技能。').set('ai',()=>{
						return _status.event.choice;
					}).set('choice',function(){
						if(player.isPhaseUsing()){
							if(!player.hasCard(card=>{
								return get.tag(card,'damage')&&player.hasValueTarget(card);
							},'hs')) return 0;
							var cards=player.getCards('hs',card=>{
								return player.hasValueTarget(card);
							});
							if(!cards.some(card=>get.tag(card,'damage'))) return 0;
							return Math.min(choices.length,cards.filter(card=>!get.tag(card,'damage')).length+1);
						}
						return choices.length;
					}());
					'step 1'
					if(result.control!='cancel2'){
						player.logSkill('dccaixia');
						var num=result.index+1;
						player.draw(num);
						player.addMark('dccaixia_clear',num);
						player.addSkill('dccaixia_clear');
					}
				},
				mod:{
					aiOrder:function(player,card,num){
						if(!get.tag(card,'damage')) return;
						if(player.countMark('dccaixia_clear')>1) return num/2;
						return num+6;
					},
				},
				subSkill:{
					clear:{
						trigger:{player:'useCard1'},
						filter:function(event,player){
							return player.hasMark('dccaixia_clear');
						},
						forced:true,
						popup:false,
						charlotte:true,
						content:function(){
							player.removeMark('dccaixia_clear',1);
						},
						intro:{
							name:'才瑕',
							name2:'瑕',
							content:'距离刷新技能还需使用&张牌',
						},
					}
				},
			},
			//十周年二乔
			dcxingwu: {
				intro: {
					content: 'expansion',
					markcount: 'expansion',
					onunmark: function (storage, player) {
						player.removeAdditionalSkill('dcluoyan');
					},
				},
				onremove: function (player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				audio: 'xingwu',
				trigger: { player: 'phaseDiscardBegin' },
				filter: function (event, player) {
					return player.countCards('h');
				},
				direct: true,
				content: function () {
					'step 0'
					player.chooseCard('h', get.prompt('dcxingwu'), '将一张手牌作为“舞”置于武将牌上').set('ai', function (card) {
						var att = 1, list = [];
						for (var i of player.getExpansions('dcxingwu')) {
							if (!list.includes(get.suit(i))) list.push(get.suit(i));
						}
						if (!list.includes(get.suit(card))) att = 2;
						if (_status.event.goon) return (20 - get.value(card)) * att;
						return (7 - get.value(card)) * att;
					}).set('goon', player.needsToDiscard() || player.getStorage('dcxingwu').length == 2);
					'step 1'
					if (result.bool) {
						player.logSkill('dcxingwu');
						var cards = result.cards;
						player.addToExpansion(cards, player, 'give').gaintag.add('dcxingwu');
					}
					'step 2'
					game.delayx();
					if (player.getExpansions('dcxingwu').length > 2) {
						player.chooseButton(['是否移去三张“舞”并发射核弹？', player.getExpansions('dcxingwu')], 3).ai = (button) => {
							if (game.hasPlayer(function (current) {
								return get.attitude(player, current) < 0;
							})) return 1;
							return 0;
						}
					}
					else event.finish();
					'step 3'
					if (result.bool) {
						event.cards = result.links;
						var list = [], str = [
							'<span class=\'texiaotext\' style=\'color:#66FF00\'>小型</span>',
							'<span class=\'texiaotext\' style=\'color:#6666FF\'>中型</span>',
							'<span class=\'texiaotext\' style=\'color:#FF0000\'>巨型</span>'
						];
						for (var i of event.cards) {
							if (!list.includes(get.suit(i))) list.push(get.suit(i));
						}
						player.chooseTarget('请选择' + str[list.length - 1] + '核弹的投射的目标（伤害：' + list.length + '点）', lib.filter.notMe, true).ai = (target) => {
							var att = 1;
							if (target.sex == 'male') att = 1.5;
							if (target.hp == target.sex == 'male' ? 2 : 1) att *= 1.2;
							if (get.mode() == 'identity' && player.identity == 'fan' && target.isZhu) att *= 3;
							return (-get.attitude(player, target)) * att * (Math.max(1, target.countCards('e')));
						}
					}
					'step 4'
					if (result.bool) {
						var list = [];
						for (var i of event.cards) {
							if (!list.includes(get.suit(i))) list.push(get.suit(i));
						}
						player.loseToDiscardpile(event.cards);
						player.logSkill('dcxingwu', result.targets[0]);
						player.discardPlayerCard(result.targets[0], 'e', result.targets[0].countCards('e'), true);
						result.targets[0].damage(result.targets[0].sex == 'female' ? 1 : list.length);
					}
				},
			},
			dcluoyan: {
				derivation: ['retianxiang', 'liuli'],
				init: function (player) {
					if (player.getStorage('dcxingwu').length) player.addAdditionalSkill('dcluoyan', ['retianxiang_daxiaoqiao', 'liuli_daxiaoqiao']);
					else player.removeAdditionalSkill('dcluoyan');
				},
				onremove: function (player) {
					player.removeAdditionalSkill('dcluoyan');
				},
				trigger: {
					player: ['loseAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				filter: function (event, player) {
					var cards = player.getExpansions('dcxingwu'), skills = player.additionalSkills.dcluoyan;
					if ((cards.length && skills && skills.length) || (!cards.length && (!skills || !skills.length))) {
						return false;
					}
					return true;
				},
				forced: true,
				content: function () {
					lib.skill.twpingting.init(player, 'dcluoyan');
				},
			},
			retianxiang_daxiaoqiao: {
				audio: 'tianxiang_daxiaoqiao',
				inherit: 'retianxiang',
			},
			//田尚衣
			dcposuo:{
				onChooseToUse:function(event){
					if(!game.online&&!event.dcposuo_cards){
						var player=event.player;
						var evtx=event.getParent('phaseUse');
						var suits=lib.suit.slice(0).reverse();
						suits=suits.filter(suit=>!player.getStorage('dcposuo_suits').contains(suit)&&player.countCards('hs',card=>get.suit(card,player)==suit));
						if(!suits.length||player.getHistory('sourceDamage',evt=>{
							return evt.player!=player&&evt.getParent('phaseUse')==evtx;
						}).length) event.set('dcposuo_cards',undefined);
						else{
							var list=[],cards=Array.from(ui.cardPile.childNodes);
							cards.addArray(Array.from(ui.discardPile.childNodes));
							game.countPlayer(current=>cards.addArray(current.getCards('hejxs')));
							for(var name of lib.inpile){
								if(!get.tag({name:name},'damage')) continue;
								if(cards.some(card=>get.name(card,false)==name&&!get.natureList(card,false).length)){
									for(var suit of suits){
										if(cards.some(card=>get.name(card,false)==name&&!get.natureList(card,false).length&&get.suit(card,false)==suit)){
											list.push([get.type(name),get.translation(suit),name,undefined,suit]);
										}
									}
								}
								if(name=='sha'){
									for(var nature of lib.inpile_nature){
										if(cards.some(card=>get.name(card,false)==name&&get.is.sameNature(get.natureList(card,false),nature))){
											for(var suit of suits){
												if(cards.some(card=>get.name(card,false)==name&&get.is.sameNature(get.natureList(card,false),nature)&&get.suit(card,false)==suit)){
													list.push([get.type(name),get.translation(suit),name,nature,suit]);
												}
											}
										}
									}
								}
							}
							event.set('dcposuo_cards',list);
						}
					}
				},
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					return event.dcposuo_cards&&event.dcposuo_cards.length;
				},
				chooseButton:{
					dialog:function(event,player){
						return ui.create.dialog('婆娑',[event.dcposuo_cards,'vcard'],'hidden');
					},
					check:function(button){
						var player=_status.event.player;
						return player.getUseValue({name:button.link[2],nature:button.link[3]});
					},
					backup:function(links,player){
						return {
							suit:links[0][4],
							filterCard:function(card,player){
								return get.suit(card,player)==lib.skill.dcposuo_backup.suit;
							},
							viewAs:{
								name:links[0][2],
								nature:links[0][3],
								isCard:true,
							},
							check:function(card){
								return 6.5-get.value(card);
							},
							precontent:function(){
								player.logSkill('dcposuo');
								delete event.result.skill;
								player.addTempSkill('dcposuo_suits','phaseUseAfter');
								player.markAuto('dcposuo_suits',[get.suit(event.result.cards[0])]);
							},
						}
					},
					prompt:function(links,player){
						var suit=links[0][4];
						var name=links[0][2];
						var nature=links[0][3];
						return '将一张'+get.translation(suit)+'牌当作'+(get.translation(nature)||'')+get.translation(name)+'使用';
					},
				},
				ai:{
					order:10,
					result:{player:1},
				},
				subSkill:{
					suits:{
						charlotte:true,
						onremove:true,
					},
				},
			},
			dcxiaoren:{
				audio:2,
				trigger:{source:'damageSource'},
				usable:1,
				content:function(){
					'step 0'
					player.judge();
					'step 1'
					if(result.color!='red'&&result.color!='black') return;
					if(result.color=='red'&&!game.hasPlayer(current=>current.isDamaged())) return;
					if(result.color=='black'&&(!trigger.player.isIn()||game.countPlayer()<3)) return;
					var next=game.createEvent('dcxiaoren_'+result.color);
					next.player=player;
					if(result.color=='black') next.target=trigger.player;
					next.setContent(lib.skill.dcxiaoren['content_'+result.color]);
				},
				content_red:function(){
					'step 0'
					player.chooseTarget('绡刃：是否令一名其他角色回复1点体力？',(card,player,target)=>target.isDamaged()).set('ai',target=>get.recoverEffect(target,_status.event.player,_status.event.player));
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.line(target);
						target.recover();
					}
				},
				content_black:function(){
					'step 0'
					if(target.getPrevious()==player) event._result={control:'下家'};
					else if(target.getNext()==player) event._result={control:'上家'};
					else player.chooseControl('上家','下家').set('prompt','绡刃：请选择一个方向').set('prompt2','对'+get.translation(target)+'上家或下家造成1点伤害，然后你以此方向可重复此流程直到有角色因此死亡或此方向的下个目标为你').set('ai',()=>{
						var player=_status.event.player;
						var target=_status.event.target;
						var left=0,right=0;
						var leftx=target.getPrevious(),lefty=target.getNext();
						while(leftx!=player){
							if(get.damageEffect(leftx,player,player)<0) break;
							else{
								left+=get.damageEffect(leftx,player,player);
								leftx=leftx.getPrevious();
							}
						}
						while(rightx!=player){
							if(get.damageEffect(rightx,player,player)<0) break;
							else{
								right+=get.damageEffect(rightx,player,player);
								rightx=leftx.getPrevious();
							}
						}
						return left>right?'上家':'下家';
					}).set('target',target);
					'step 1'
					if(result.control){
						event.num=1;
						player.popup(result.control);
						game.log(player,'选择了','#y'+result.control);
						event.fangxiang=result.control;
					}
					else event.finish();
					'step 2'
					var current=target;
					for(var i=0;i<event.num;i++){
						current=current[event.fangxiang=='上家'?'getPrevious':'getNext']();
					}
					if(current==player) event.finish();
					else{
						event.current=current;
						player.line(current);
						current.damage();
					}
					'step 3'
					var aim=event.current[event.fangxiang=='上家'?'getPrevious':'getNext']();
					if(!event.current.isIn()||aim==player) event.finish();
					else player.chooseBool('绡刃：是否对'+get.translation(aim)+'造成1点伤害？').set('choice',get.damageEffect(aim,player,player)>=0);
					'step 4'
					if(result.bool){
						event.num++;
						event.goto(2);
					}
				},
			},
			//孙翎鸾
			dclingyue:{
				audio:2,
				trigger:{global:'damageSource'},
				forced:true,
				filter:function(event,player){
					if(!event.source||!event.source.isIn()) return false;
					var history=event.source.actionHistory;
					for(var i=history.length-1;i>=0;i--){
						if(i==history.length-1){
							if(history[i].sourceDamage.indexOf(event)>0) return false;
						}
						else if(history[i].sourceDamage.some(evt=>evt!=event)) return false;
						if(history[i].isRound) break;
					}
					return true;
				},
				content:function(){
					var num=1,current=_status.currentPhase;
					if(current&&trigger.source!=current){
						var num=0,players=game.players.slice(0).concat(game.dead);
						for(var target of players){
							target.getHistory('sourceDamage',function(evt){
								num+=evt.num;
							});
						}
					}
					player.draw(num);
				},
			},
			dcpandi:{
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					var players=event.dcpandi;
					if(!players||!players.length) return false;
					var source=player.storage.dcpandi_effect;
					return get.itemtype(source)!='player'||!source.isIn();
				},
				pandi_wrapKey:function(){
					var str = "";
					for(var arg of arguments){
						if(arg === null || arg === undefined){
							str += (arg + "-");
							continue;
						}
						switch(get.itemtype(arg)){
							case 'player':
								str+=("p:"+arg.playerid);
								break;
							case 'card':
								if(arg.cardid){
									str+=("c:"+arg.cardid);
								}else{
									str+=("c:"+arg.name);
								}
								break;
							default:
								str+=("n:"+arg);
								break;
						}
						str+="-";
					}
					return str;
				},
				pandi_effect:function(target,card,player,viewer){
					if(!_status.event)return get.effect(target,card,player,viewer);
					var key = lib.skill.dcpandi.pandi_wrapKey.apply(null,arguments);
					var effect = _status.event.getTempCache('effect',key);
					if(effect !== undefined)return effect;
					effect = get.effect(target,card,player,viewer);
					_status.event.putTempCache('effect',key,effect);
					return effect;
				},
				pandi_canUse:function(player,card,target,arg1,arg2){
					if(!_status.event)return player.canUse(card,target,arg1,arg2);
					var key = lib.skill.dcpandi.pandi_wrapKey.apply(null,arguments);
					var effect = _status.event.getTempCache('canUse',key);
					if(effect !== undefined)return effect;
					effect = player.canUse(card,target,arg1,arg2);
					_status.event.putTempCache('canUse',key,effect);
					return effect;
				},
				pandi_effect_use:function(target,card,player,viewer){
					if(!_status.event)return get.effect_use(target,card,player,viewer);
					var key = lib.skill.dcpandi.pandi_wrapKey.apply(null,arguments);
					var effect = _status.event.getTempCache('effect_use',key);
					if(effect !== undefined)return effect;
					effect = get.effect_use(target,card,player,viewer);
					_status.event.putTempCache('effect_use',key,effect);
					return effect;
				},
				onChooseToUse:function(event){
					if(!game.online&&event.type=='phase'&&!event.dcpandi){
						var players=game.filterPlayer(function(current){
							return current!=event.player&&current.getHistory('sourceDamage').length==0;
						})
						event.set('dcpandi',players)
					}
				},
				filterTarget:function(card,player,target){
					var players=_status.event.dcpandi;
					if(!players||!players.length) return false;
					return players.contains(target);
				},
				content:function(){
					if(target.isIn()){
						player.storage.dcpandi_effect=target;
						player.addTempSkill('dcpandi_effect','phaseUseAfter');
					}
				},
				ai:{
					threaten:4,
					order:12,
					result:{
						player:function(player,target){
							return player.getCards('hs').reduce(function(eff,card){
								return Math.max(eff,lib.skill.dcpandi.getUseValue(card,target,player)-lib.skill.dcpandi.getUseValue(card,player,player))
							},0)
						},
					},
				},
				getUseValue:function(card,player,viewer){
					if(typeof(card)=='string'){
						card={name:card,isCard:true};
					}
					var key = lib.skill.dcpandi.pandi_wrapKey(card,player,viewer);
					if(_status.event){
						var uv = _status.event.getTempCache('getUseValue',key);
						if(uv!==undefined){
							return uv;
						}
					}
					var targets=game.filterPlayer();
					var value=[];
					var min=0;
					var info=get.info(card);
					if(!info||info.notarget){
						if(_status.event){
							_status.event.putTempCache('getUseValue',key,0);
						}
						return 0;
					}
					var range;
					var select=get.copy(info.selectTarget);
					if(select==undefined){
						if(info.filterTarget==undefined) {
							if(_status.event){
								_status.event.putTempCache('getUseValue',key,true);
							}
							return true;
						}
						range=[1,1];
					}
					else if(typeof select=='number') range=[select,select];
					else if(get.itemtype(select)=='select') range=select;
					else if(typeof select=='function') range=select(card,player);
					if(info.singleCard) range=[1,1];
					game.checkMod(card,player,range,'selectTarget',player);
					if(!range){
						if(_status.event){
							_status.event.putTempCache('getUseValue',key,0);
						}
						return 0;
					}
				
					for(var i=0;i<targets.length;i++){
						if(lib.skill.dcpandi.pandi_canUse(player,card,targets[i],null,true)){
							var eff=lib.skill.dcpandi.pandi_effect(targets[i],card,player,viewer);
							value.push(eff);
						}
					}
					value.sort(function(a,b){
						return b-a;
					});
					for(var i=0;i<value.length;i++){
						if(i==range[1]||range[1]!=-1&&value[i]<=0) break;
						min+=value[i];
					}
					if(_status.event){
						_status.event.putTempCache('getUseValue',key,min);
					}
					return min;
				},
				subSkill:{
					effect:{
						audio:'dcpandi',
						charlotte:true,
						priority:Infinity,
						onremove:true,
						mark:'character',
						intro:{
							content:'下一张牌视为由$使用',
						},
						trigger:{player:'useCardBefore'},
						forced:true,
						filter:function(event,player){
							var source=player.storage.dcpandi_effect;
							return get.itemtype(source)=='player'&&source.isIn();
						},
						logTarget:(event,player)=>player.storage.dcpandi_effect,
						content:function(){
							trigger.player=player.storage.dcpandi_effect;
							trigger.noai=true;
							player.removeSkill('dcpandi_effect');
							game.delay(0.5);
						},
						ai:{
							order:function(card,player,target,current){
								if(typeof card!='object') return;
								var source=player.storage.dcpandi_effect;
								if(!source.isIn()||get.itemtype(source)!='player'||get.itemtype(source.storage.dcpandi_effect)=='player') return;
								return [0,lib.skill.dcpandi.pandi_effect_use(target,card,source,player),0,lib.skill.dcpandi.pandi_effect(target,card,source,target)]
							},
						},
						mod:{
							selectCard:function(card,player,range){
								var source=player.storage.dcpandi_effect;
								if(!source.isIn()||get.itemtype(source)!='player'||get.itemtype(source.storage.dcpandi_effect)=='player') return;
								var range,info=get.info(card);
								var select=get.copy(info.selectTarget);
								if(select==undefined){
									if(info.filterTarget==undefined) return [0,0];
									range=[1,1];
								}
								else if(typeof select=='number') range=[select,select];
								else if(get.itemtype(select)=='select') range=select;
								else if(typeof select=='function') range=select(card,source);
								game.checkMod(card,source,range,'selectTarget',source);
							},
							cardEnabled2:function(card,player,event){
								var source=player.storage.dcpandi_effect;
								if(!source.isIn()||get.itemtype(source)!='player'||get.itemtype(source.storage.dcpandi_effect)=='player') return;
								var check=game.checkMod(card,source,event,'unchanged','cardEnabled2',source);
								return check;
							},
							cardEnabled:function(card,player,event){
								var source=player.storage.dcpandi_effect;
								if(!source.isIn()||get.itemtype(source)!='player'||get.itemtype(source.storage.dcpandi_effect)=='player') return;
								if(event==='forceEnable'){
									var mod=game.checkMod(card,source,event,'unchanged','cardEnabled',source);
									if(mod!='unchanged') return mod;
									return true;
								}
								else{
									var filter=get.info(card).enable;
									if(!filter) return;
									var mod=game.checkMod(card,player,source,'unchanged','cardEnabled',source);
									if(mod!='unchanged') return mod;
									if(typeof filter=='boolean') return filter;
									if(typeof filter=='function') return filter(card,source,event);
								}
							},
							cardUsable:function(card,player,num){
								var source=player.storage.dcpandi_effect;
								if(!source.isIn()||get.itemtype(source)!='player'||get.itemtype(source.storage.dcpandi_effect)=='player') return;
								var event=_status.event;
								if(event.type=='chooseToUse_button') event=event.getParent();
								if(source!=_status.event.player) return true;
								if(info.updateUsable=='phaseUse'){
									if(event.getParent().name!='phaseUse') return true;
									if(event.getParent().player!=source) return true;
								}
								event.addCount_extra=true;
								var num=info.usable;
								if(typeof num=='function') num=num(card,source);
								num=game.checkMod(card,source,num,event,'cardUsable',source);
								if(typeof num!='number') return true;
								if(source.countUsed(card)<num) return true;
								if(game.hasPlayer(function(current){
									return game.checkMod(card,source,current,false,'cardUsableTarget',source);
								})){
									return true;
								}
								return false;
							},
							playerEnabled:function(card,player,target){
								var source=player.storage.dcpandi_effect;
								if(!source.isIn()||get.itemtype(source)!='player'||get.itemtype(source.storage.dcpandi_effect)=='player') return;
								return lib.filter.targetEnabledx(card,source,target);
							},
							targetInRange:function(card,player,target){
								var source=player.storage.dcpandi_effect;
								if(!source.isIn()||get.itemtype(source)!='player'||get.itemtype(source.storage.dcpandi_effect)=='player') return;
								return lib.filter.targetInRange(card,source,target);
							},
						},
					},
				},
			},
			//新服灭霸
			dctongye:{
				audio:2,
				trigger:{
					global:['phaseBefore','dieAfter'],
					player:'enterGame',
				},
				forced:true,
				filter:function(event,player){
					if(game.countGroup()>4) return false;
					if(event.name=='die') return true;
					return event.name!='phase'||game.phaseNumber==0;
				},
				content:function(){
					player.addSkill('dctongye_buff');
					var num=game.countGroup();
					if(num<=4){
						player.addMark('dctongye_handcard',3,false);
						game.log(player,'手牌上限','#y+3');
					}
					if(num<=3){
						player.addMark('dctongye_range',3,false);
						game.log(player,'攻击范围','#y+3');
					}
					if(num<=2){
						player.addMark('dctongye_sha',3,false);
						game.log(player,'使用杀的次数上限','#y+3');
					}
					if(num<=1){
						player.addMark('dctongye_draw',3,false);
						game.log(player,'摸牌阶段额定摸牌数','#y+3');
					}
				},
				subSkill:{
					buff:{
						audio:'dctongye',
						trigger:{player:'phaseDrawBegin2'},
						forced:true,
						filter:function(event,player){
							if(!player.hasMark('dctongye_draw')) return false;
							return !event.numFixed;
						},
						content:function(){
							trigger.num+=player.countMark('dctongye_draw');
						},
						charlotte:true,
						onremove:['dctongye_handcard','dctongye_range','dctongye_sha','dctongye_draw'],
						mark:true,
						marktext:'统',
						intro:{
							content:function(storage,player){
								var str='';
								var hand=player.countMark('dctongye_handcard'),range=player.countMark('dctongye_range'),sha=player.countMark('dctongye_sha'),draw=player.countMark('dctongye_draw');
								if(hand>0){
									str+='<li>手牌上限+'+hand+'；';
								}
								if(range>0){
									str+='<li>攻击范围+'+range+'；';
								}
								if(sha>0){
									str+='<li>使用【杀】的次数上限+'+sha+'；'
								}
								if(draw>0){
									str+='<li>摸牌阶段额定摸牌数+'+draw+'。';
								}
								str=str.slice(0,-1)+'。';
								return str;
							}
						},
						mod:{
							maxHandcard:function(player,num){
								return num+player.countMark('dctongye_handcard');
							},
							attackRange:function(player,num){
								return num+player.countMark('dctongye_range');
							},
							cardUsable:function(card,player,num){
								if(card.name=='sha'){
									return num+player.countMark('dctongye_sha');
								}
							},
						},
						ai:{
							threaten:2.6,
						},
					},
				},
			},
			dcmianyao:{
				audio:2,
				trigger:{
					player:'phaseDrawEnd',
				},
				direct:true,
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				content:function(){
					'step 0'
					player.chooseCard('h',get.prompt('dcmianyao'),'展示点数最小的一张牌并随机插入牌堆中，然后于回合结束时摸此牌点数张牌。',function(card,player){
						var num=get.number(card,player);
						return !player.hasCard(card2=>{
							return card!=card2&&get.number(card2,player)<num;
						});
					}).set('ai',card=>{
						var player=_status.event.player;
						var value=player.getUseValue(card,null,true);
						if(value>5&&get.number(card)<=2) return 0;
						return 1+1/Math.max(0.1,value);
					});
					'step 1'
					if(result.bool){
						player.logSkill('dcmianyao');
						var card=result.cards[0];
						event.card=card;
						player.showCards([card],get.translation(player)+'发动了【免徭】');
					}
					else event.finish();
					'step 2'
					player.$throw(1,1000);
					player.lose(card,ui.cardPile).insert_index=function(){
						return ui.cardPile.childNodes[get.rand(0,ui.cardPile.childNodes.length-1)];
					}
					player.addTempSkill('dcmianyao_draw');
					var num=get.number(card);
					if(num>0) player.addMark('dcmianyao_draw',num,false);
				},
				subSkill:{
					draw:{
						trigger:{
							player:'phaseEnd',
						},
						filter:function(event,player){
							return player.hasMark('dcmianyao_draw');
						},
						forced:true,
						charlotte:true,
						onremove:true,
						content:function(){
							player.draw(player.countMark('dcmianyao_draw'));
						},
					}
				}
			},
			dcchangqu:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				selectTarget:function(){
					return [1,game.countPlayer()-1];
				},
				complexSelect:true,
				complexTarget:true,
				multitarget:true,
				multiline:true,
				filterTarget:function(card,player,target){
					if(player==target) return false;
					var next=player.getNext(),prev=player.getPrevious();
					var selected=ui.selected.targets;
					if(!selected.contains(next)&&!selected.contains(prev)) return (target==next||target==prev);
					for(var i of selected){
						if(i.getNext()==target||i.getPrevious()==target) return true;
					}
					return false;
				},
				contentBefore:function(){
					event.getParent()._dcchangqu_targets=targets.slice();
				},
				content:function(){
					'step 0'
					event.targets=event.getParent()._dcchangqu_targets;
					var current=targets[0];
					current.addMark('dcchangqu_warship');
					current.addMark('dcchangqu_warshipx',1,false);
					event.num=0;
					game.delayx();
					'step 1'
					var target=targets.shift();
					event.target=target;
					var num=Math.max(1,event.num);
					var nextPlayer=targets.find(i=>{
						return i.isIn();
					});
					if(target.hasMark('dcchangqu_warshipx')){
						var prompt2='是否交给'+get.translation(player)+get.cnNumber(num)+'张手牌？'+(nextPlayer?'若如此做，将“战舰”移动给'+get.translation(nextPlayer)+'，':'，')+'否则你下次受到的属性伤害值+'+num;
						target.chooseCard(get.translation(player)+'对你发动了【长驱】',prompt2).set('ai',card=>{
							if(_status.event.att>0) return 6-get.value(card);
							if(_status.event.take) return -get.value(card);
							return 5-get.value(card);
						}).set('att',get.attitude(target,player)).set('take',function(){
							var base=num;
							var getEffect=function(target,player,num){
								var natures=['fire','thunder','ice'];
								return natures.map(nature=>{
									return get.damageEffect(target,target,player,nature)*Math.sqrt(num)/Math.min(1.5,1+target.countCards('h'));
								}).reduce((sum,eff)=>{
									return sum+eff;
								},0)/natures.length;
							}
							var eff=getEffect(player,player,base);
							return targets.some((current,ind)=>{
								var num=base+ind+1;
								var effx=getEffect(current,player,num);
								return effx<eff;
							});
						});
					}
					else event.goto(4);
					'step 2'
					if(result.bool){
						var cards=result.cards;
						target.give(cards,player);
						event.num++;
					}
					else{
						target.addSkill('dcchangqu_add');
						target.addMark('dcchangqu_add',Math.max(1,event.num),false);
						target.link(true);
						event.goto(4);
					}
					'step 3'
					var nextPlayer=targets.find(i=>{
						return i.isIn();
					});
					if(nextPlayer){
						target.line(nextPlayer);
						nextPlayer.addMark('dcchangqu_warship',target.countMark('dcchangqu_warship'));
						nextPlayer.addMark('dcchangqu_warshipx',target.countMark('dcchangqu_warshipx'),false);
						event.goto(1);
						game.delayx();
					}
					target.removeMark('dcchangqu_warship',target.countMark('dcchangqu_warship'));
					target.removeMark('dcchangqu_warshipx',target.countMark('dcchangqu_warshipx'),false);
					'step 4'
					var targets=game.players.slice().concat(game.dead);
					targets.forEach(i=>{
						delete i.storage.dcchangqu_warshipx;
					});
				},
				ai:{
					order:10,
					expose:0.05,
					result:{
						target:function(player,target){
							var att=get.attitude(player,target);
							var targets=game.filterPlayer(i=>i!=player);
							targets.sortBySeat(player);
							var targets2=targets.reverse();
							var sum=0;
							var maxSum=-Infinity,maxIndex=-1;
							var maxSum2=-Infinity,maxIndex2=-1;
							for(var i=0;i<targets.length;i++){
								var current=targets[i];
								var att=-get.attitude(player,current)-0.1;
								var val=Math.sqrt(i+1)*att;
								val/=0.01+Math.max(3,current.countCards('h')/2);
								sum+=val;
								if(sum>maxSum){
									maxSum=sum;
									maxIndex=i;
								}
							}
							var sum=0;
							for(var i=0;i<targets2.length;i++){
								var current=targets[i];
								var att=-get.attitude(player,current)-0.1;
								var val=Math.sqrt(i+1)*att;
								val/=0.01+Math.max(3,current.countCards('h')/2);
								sum+=val;
								if(sum>maxSum2){
									maxSum2=sum;
									maxIndex2=i;
								}
							}
							if(maxSum<maxSum2){
								targets=targets2;
								maxIndex=maxIndex2;
							}
							if(ui.selected.targets.length>maxIndex) return -100*get.sgnAttitude(player,target);
							if(target==targets[ui.selected.targets.length]) return get.sgnAttitude(player,target);
							return 0;
						}
					},
				},
				subSkill:{
					warship:{
						marktext:'舰',
						intro:{
							name:'战舰',
							name2:'战舰',
							content:'这里停了&艘战舰！不过啥用没有。',
						}
					},
					add:{
						trigger:{
							player:'damageBegin3',
						},
						filter:function(event,player){
							return event.hasNature()&&player.hasMark('dcchangqu_add');
						},
						forced:true,
						onremove:true,
						charlotte:true,
						content:function(){
							'step 0'
							trigger.num+=player.countMark('dcchangqu_add');
							player.removeSkill('dcchangqu_add');
						},
						marktext:'驱',
						intro:{
							content:'下次受到的属性伤害+#',
						}
					},
				}
			},
			//周不疑
			dcshiji:{
				audio:2,
				trigger:{
					global:'phaseJieshuBegin',
				},
				filter:function(event,player){
					return event.player.isIn()&&!event.player.getHistory('sourceDamage').length;
				},
				direct:true,
				content:function(){
					'step 0'
					trigger.player.addTempSkill('dcshiji_forbidself');
					var list=[];
					for(var name of lib.inpile){
						var type=get.type(name);
						if(type!='trick') continue;
						if(player.getStorage('dcshiji_used').contains(name)) continue;
						var card={
							name:name,
							storage:{dcshiji:true},
						};
						if(trigger.player.hasUseTarget(card)){
							list.push([type,'',name]);
						}
					}
					if(list.length){
						player.chooseButton([get.prompt('dcshiji',trigger.player),[list,'vcard']]).set('ai',button=>{
							if(_status.event.tochoose) return _status.event.getTrigger().player.getUseValue({name:button.link[2]});
							return 0;
						}).set('tochoose',get.attitude(player,trigger.player)>0&&trigger.player.hasCard(card=>{
							return get.value(card)<7;
						},'hes'));
					}
					else event.finish();
					'step 1'
					if(result.bool){
						var card={
							name:result.links[0][2],
							storage:{dcshiji:true},
						};
						var str=get.translation(card);
						player.logSkill('dcshiji',trigger.player);
						player.addTempSkill('dcshiji_used','roundStart');
						player.markAuto('dcshiji_used',[card.name]);
						player.popup(str);
						game.log(player,'声明了','#y'+str);
						game.broadcastAll(function(card){
							lib.skill.dcshiji_backup.viewAs=card;
							lib.skill.dcshiji_backup.prompt='十计：是否将一张牌当做'+get.translation(card)+'使用？';
						},card);
						var next=trigger.player.chooseToUse();
						next.set('openskilldialog','十计：是否将一张牌当做'+get.translation(card)+'使用？');
						next.set('norestore',true);
						next.set('addCount',false);
						next.set('_backupevent','dcshiji_backup');
						next.set('custom',{
							add:{},
							replace:{window:function(){}}
						});
						next.backup('dcshiji_backup');
					}
				},
				subSkill:{
					backup:{
						filterCard:function(card){
							return get.itemtype(card)=='card';
						},
						position:'hes',
						selectCard:1,
						check:(card)=>7-get.value(card),
						popname:true,
					},
					used:{
						charlotte:true,
						onremove:true,
						mark:true,
						marktext:'计',
						intro:{
							content:'本轮已声明过$',
						},
					},
					forbidself:{
						charlotte:true,
						mod:{
							targetEnabled:function(card,player,target){
								if(player==target&&card.storage&&card.storage.dcshiji) return false;
							},
						},
					}
				}
			},
			dcsilun:{
				audio:2,
				trigger:{
					player:['phaseZhunbeiBegin','damageEnd'],
				},
				frequent:true,
				content:function(){
					'step 0'
					player.draw(4);
					event.count=0;
					event.equipCount={};
					game.countPlayer(current=>{
						event.equipCount[current.playerid]=current.countCards('e');
					},true);
					'step 1'
					if(!player.countCards('he')) event.goto(5);
					else player.chooseCard('四论：选择一张牌（'+(event.count+1)+'/'+'4）','然后选择将此牌置于场上或牌堆的两端',true,'he').set('ai',card=>{
						var player=_status.event.player;
						if(['equip','delay'].contains(get.type(card))&&player.hasValueTarget(card)) return 50;
						return 50-get.value(card);
					});
					'step 2'
					if(result.bool){
						var card=result.cards[0];
						event.card=card;
						event.count++;
						var choices=['牌堆顶','牌堆底'];
						var type=get.type(card);
						if(type=='equip'&&game.hasPlayer(current=>{
							return current.canEquip(card);
						})||type=='delay'&&game.hasPlayer(current=>{
							return !current.storage._disableJudge&&!current.hasJudge(card.name);
						})) choices.unshift('场上');
						player.chooseControl(choices).set('prompt','请选择要将'+get.translation(card)+'置于的位置').set('ai',()=>{
							return _status.event.choice;
						}).set('choice',function(){
							if(['equip','delay'].contains(get.type(card))&&player.hasValueTarget(card)&&choices.contains('场上')) return '场上';
							var val=get.value(card);
							var next=_status.currentPhase;
							if(trigger.name=='damage') next=next.getNext();
							if(get.attitude(player,next)>0&&val>=6||get.attitude(player,next)<0&&val<=4.5) return '牌堆顶';
							return '牌堆底';
						}());
					}
					'step 3'
					if(result.control=='场上'){
						var type=get.type(card);
						player.chooseTarget('将'+get.translation(card)+'置于一名角色的场上',true,(card,player,target)=>{
							return _status.event.targets.contains(target);
						}).set('targets',game.filterPlayer(current=>{
							if(type=='equip') return current.canEquip(card);
							if(type=='delay') return !current.storage._disableJudge&&!current.hasJudge(card.name);
							return false;
						})).set('ai',target=>{
							var player=_status.event.player;
							var card=_status.event.card;
							return get.attitude(player,target)*(get.type(card)=='equip'?get.value(card,target):get.effect(target,{
								name:card.viewAs||card.name,
								cards:[card],
							},target,target));
						}).set('card',card);
					}
					else{
						player.$throw(card,1000);
						var next=player.lose(card,ui.cardPile);
						if(result.control=='牌堆顶') next.insert_card=true;
						game.log(player,'将',card,'置于了','#y'+result.control);
					}
					'step 4'
					if(result.bool&&result.targets&&result.targets.length){
						var target=result.targets[0];
						player.line(target);
						player.$give(card,target,false);
						if(get.type(card)=='equip'){
							target.equip(card);
						}
						else{
							target.addJudge(card);
						}
					}
					if(event.count<4) event.goto(1);
					'step 5'
					game.countPlayer(current=>{
						var count=current.countCards('e');
						var prevCount=event.equipCount[current.playerid]||0;
						if(count!=prevCount){
							current.link(false);
							current.turnOver(false);
						}
					});
				}
			},
			//杜预
			dcjianguo:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				chooseButton:{
					dialog:function(event,player){
						var dialog=ui.create.dialog('谏国：请选择一项','hidden');
						dialog.add([[
							['discard','令一名角色摸一张牌，然后弃置一半手牌'],
							['draw','令一名角色弃置一张牌，然后摸等同于手牌数一半的牌']
						],'textbutton']);
						return dialog;
					},
					check:function(button){
						var player=_status.event.player;
						if(button.link=='discard'){
							var discard=Math.max.apply(Math,game.filterPlayer(current=>{
								return lib.skill.dcjianguo_discard.filterTarget(null,player,current);
							}).map(current=>{
								return get.effect(current,'dcjianguo_discard',player,player);
							}));
							return discard;
						}
						if(button.link=='draw'){
							var draw=Math.max.apply(Math,game.filterPlayer(current=>{
								return lib.skill.dcjianguo_draw.filterTarget(null,player,current);
							}).map(current=>{
								return get.effect(current,'dcjianguo_draw',player,player);
							}));
							return draw;
						}
						return 0;
					},
					backup:function(links){
						return get.copy(lib.skill['dcjianguo_'+links[0]]);
					},
					prompt:function(links){
						if(links[0]=='discard') return '令一名角色摸一张牌，然后弃置一半手牌';
						return '令一名角色弃置一张牌，然后摸等同于手牌数一半的牌';
					},
				},
				ai:{
					order:10,
					threaten:2.8,
					result:{
						//想让杜预两个技能自我联动写起来太累了，开摆
						player:1,
					},
				},
				subSkill:{
					backup:{audio:'dcjianguo'},
					discard:{
						audio:'dcjianguo',
						filterTarget:()=>true,
						filterCard:()=>false,
						selectCard:-1,
						charlotte:true,
						content:function(){
							'step 0'
							target.draw();
							game.delayex();
							'step 1'
							var num=Math.floor(target.countCards('h')/2);
							if(num>0) target.chooseToDiscard(num,true,'谏国：请弃置'+get.cnNumber(num)+'张手牌');
						},
						ai:{
							result:{
								target:function(player,target){
									return 1.1-Math.ceil(target.countCards('h')/2);
								},
							},
							tag:{
								gain:1,
								loseCard:2,
							},
						},
					},
					draw:{
						audio:'dcjianguo',
						filterTarget:function(card,player,target){
							return target.countCards('he');
						},
						filterCard:()=>false,
						selectCard:-1,
						charlotte:true,
						content:function(){
							'step 0'
							target.chooseToDiscard('he',true,'谏国：请弃置一张牌');
							'step 1'
							var num=Math.floor(target.countCards('h')/2);
							if(num>0) target.draw(num);
						},
						ai:{
							result:{
								target:function(player,target){
									var fix=0;
									var num=target.countCards('h');
									if(player==target&&num%2==1&&num>=5) fix+=1;
									return Math.floor(num/2-0.5)+fix;
								},
							},
							tag:{
								loseCard:1,
								gain:2,
							},
						},
					},
				},
			},
			dcdyqingshi:{
				audio:2,
				trigger:{
					player:'useCardToPlayered',
				},
				filter:function(event,player){
					if(player!=_status.currentPhase) return false;
					if(!event.isFirstTarget) return false;
					if(event.card.name!='sha'&&get.type(event.card,false)!='trick') return false;
					if(player.countCards('h')!=player.getHistory('useCard').indexOf(event.getParent())+1) return false;
					return event.targets.some(target=>{
						return target!=player&&target.isIn();
					});
				},
				direct:true,
				content:function(){
					'step 0'
					var targets=trigger.targets.filter(target=>{
						return target!=player&&target.isIn();
					});
					player.chooseTarget(get.prompt('dcdyqingshi'),'对一名不为你的目标角色造成1点伤害',(card,player,target)=>{
						return _status.event.targets.contains(target);
					}).set('ai',target=>{
						var player=_status.event.player;
						return get.damageEffect(target,player,player);
					}).set('targets',targets);
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('dcdyqingshi',target);
						target.damage();
					}
				},
				mod:{
					aiOrder:function(player,card,num){
						if(_status.currentPhase!=player) return;
						var cardsh=[];
						if(Array.isArray(card.cards)){
							cardsh.addArray(card.cards.filter(card=>{
								return get.position(card)=='h';
							}));
						}
						var del=player.countCards('h')-cardsh.length-player.getHistory('useCard').length-1;
						if(del<0) return;
						if(del>0){
							if(card.name=='sha'||get.type(card,false)!='trick') return num/3;
							return num+1;
						}
						return num+15;
					},
				},
			},
			//甘糜
			dcchanjuan:{
				audio:2,
				trigger:{
					player:'useCardAfter',
				},
				filter:function(event,player){
					if(event.targets.length!=1) return false;
					if(!['basic','trick'].contains(get.type(event.card,false))) return false;
					if(event.getParent(2).name=='dcchanjuan') return false;
					return !player.getStorage('dcchanjuan').contains(event.card.name);
				},
				direct:true,
				content:function(){
					'step 0'
					var card={
						name:trigger.card.name,
						nature:trigger.card.nature,
						isCard:true,
					}
					player.chooseUseTarget(card,get.prompt('dcchanjuan'),false,false).set('prompt2','视为再使用一张'+get.translation(card)).set('logSkill','dcchanjuan');
					'step 1'
					if(result.bool){
						player.markAuto('dcchanjuan',[trigger.card.name]);
						var list1=trigger.targets,list2=result.targets;
						if(list1.slice().removeArray(list2).length==0&&list2.slice().removeArray(list1).length==0) player.draw();
					}
				},
				ai:{
					threaten:2,
				},
				intro:{
					content:'已记录牌名：$',
				}
			},
			dcxunbie:{
				audio:2,
				trigger:{
					player:'dying',
				},
				filter:function(event,player){
					if(player.hp>0) return false;
					var characters=['dc_ganfuren','dc_mifuren'];
					game.countPlayer(current=>{
						if(current.name1=='dc_ganfuren'||current.name2=='dc_ganfuren'){
							characters.remove('dc_ganfuren');
						}
						if(current.name1=='dc_mifuren'||current.name2=='dc_mifuren'){
							characters.remove('dc_mifuren');
						}
					});
					return characters.length;
				},
				check:()=>true,
				skillAnimation:true,
				animationColor:'fire',
				limited:true,
				derivation:['dcyongjue','dcshushen','dcshenzhi','dcguixiu','dccunsi'],
				content:function(){
					'step 0'
					player.awakenSkill('dcxunbie');
					if(player.name1=='ganfurenmifuren'||player.name2=='ganfurenmifuren'){
						var characters=['dc_ganfuren','dc_mifuren'];
						game.countPlayer(current=>{
							if(current.name1=='dc_ganfuren'||current.name2=='dc_ganfuren'){
								characters.remove('dc_ganfuren');
							}
							if(current.name1=='dc_mifuren'||current.name2=='dc_mifuren'){
								characters.remove('dc_mifuren');
							}
						});
						if(characters.length==1) event._result={control:characters[0]};
						else{
							player.chooseControl(characters).set('dialog',[
								'选择要替换成的武将',
								[characters,'character']
							]).set('ai',()=>[0,1].randomGet());
						}
					}
					else event.goto(2);
					'step 1'
					var character=result.control;
					if(!_status.characterlist){
						lib.skill.pingjian.initList();
					}
					_status.characterlist.remove(character);
					_status.characterlist.add('ganfurenmifuren');
					player.reinit('ganfurenmifuren',character,false);
					'step 2'
					player.recover(1-player.hp);
					player.addTempSkill('dcxunbie_muteki');
				},
				subSkill:{
					muteki:{
						trigger:{
							player:'damageBegin4',
						},
						charlotte:true,
						forced:true,
						content:function(){
							trigger.cancel();
						},
						mark:true,
						intro:{content:'防止本回合受到的所有伤害'},
						ai:{
							nofire:true,
							nothunder:true,
							nodamage:true,
							effect:{
								target:function(card,player,target,current){
									if(get.tag(card,'damage')) return 'zeroplayertarget';
								}
							},
						}
					}
				}
			},
			//散装版糜夫人
			dcguixiu:{
				audio:'guixiu',
				trigger:{
					player:'phaseBegin',
				},
				forced:true,
				onremove:true,
				filter:function(event,player){
					return !player.hasMark('dcguixiu');
				},
				group:'dcguixiu_rec',
				content:function(){
					player.addMark('dcguixiu',1,false);
					player.draw(2);
				},
				subSkill:{
					rec:{
						audio:'guixiu',
						trigger:{
							player:'logSkill',
						},
						forced:true,
						filter:function(event,player){
							return event.skill=='dccunsi'&&player.isDamaged();
						},
						content:function(){
							player.recover();
						}
					}
				}
			},
			dccunsi:{
				audio:'cunsi',
				enable:'phaseUse',
				limited:true,
				skillAnimation:true,
				animationColor:'orange',
				filterTarget:true,
				derivation:'dcyongjue',
				content:function(){
					'step 0'
					player.awakenSkill('dccunsi');
					target.addSkillLog('dcyongjue');
					if(target!=player) player.draw(2);
				},
				ai:{
					order:10,
					result:{
						target:1,
					}
				}
			},
			dcyongjue:{
				audio:'yongjue',
				trigger:{
					player:'useCard',
				},
				filter:function(event,player){
					var evtx=event.getParent('phaseUse');
					if(!evtx||evtx.player!=player) return false;
					return player.getHistory('useCard',evt=>{
						return evt.card.name=='sha'&&event.getParent('phaseUse')==evtx;
					}).indexOf(event)==0;
				},
				direct:true,
				content:function(){
					'step 0'
					var choices=['选项一'];
					var choiceList=['令'+get.translation(trigger.card)+'不计入次数','获得此牌'];
					if(trigger.cards.length){
						choices.push('选项二');
						choiceList[1]='获得'+get.translation(trigger.cards);
					}
					else choiceList[1]='<span style="opacity:0.5">'+choiceList[1]+'</span>';
					choices.push('cancel2');
					player.chooseControl(choices).set('choiceList',choiceList).set('ai',()=>{
						return _status.event.choice;
					}).set('choice',function(){
						if(choices.length==3&&trigger.addCount===false) return 1;
						if(player.getCardUsable({name:'sha'})<player.countCards('hs','sha')) return 0;
						if(choices.length==3) return 1;
						return 0;
					}());
					'step 1'
					if(result.control=='cancel2'){
						event.finish();
						return;
					}
					player.logSkill('dcyongjue');
					game.log(player,'选择了','#y'+result.control);
					if(result.control=='选项一'){
						if(trigger.addCount!==false){
							trigger.addCount=false;
							trigger.player.getStat().card.sha--;
						}
					}
					else{
						var cards=trigger.cards.filterInD();
						if(cards.length) player.gain(cards,'gain2');
					}
				}
			},
			//散装版甘夫人
			dcshushen:{
				audio:'shushen',
				trigger:{
					player:'recoverEnd',
				},
				direct:true,
				content:function(){
					'step 0'
					event.num=trigger.num;
					'step 1'
					player.chooseTarget(get.prompt('dcshushen'),'选择一名其他角色，然后令其回复1点体力或令你与其各摸一张牌',lib.filter.notMe).set('ai',target=>{
						var player=_status.event.player;
						return get.recoverEffect(target,player,player)/2+get.attitude(player,target);
					});
					'step 2'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('dcshushen',target);
						event.num--;
						var choices=['选项二'];
						var choiceList=[
							'令'+get.translation(target)+'回复1点体力',
							'你于'+get.translation(target)+'各摸一张牌'
						];
						if(target.isDamaged()) choices.unshift('选项一');
						else choiceList[0]='<span style="opacity:0.5">'+choiceList[0]+'</span>';
						player.chooseControl(choices).set('choiceList',choiceList).set('prompt','淑慎：请选择一项').set('ai',()=>{
							return _status.event.choice;
						}).set('choice',function(){
							if(target.hp<=2||get.recoverEffect(target,player,player)>20) return 0;
							return '选项二';
						}());
					}
					else event.finish();
					'step 3'
					if(result.control=='选项一'){
						target.recover();
					}
					else{
						var drawers=[player,target].sortBySeat(_status.currentPhase);
						game.asyncDraw(drawers);
					}
					'step 4'
					if(event.num>0) event.goto(1);
				}
			},
			dcshenzhi:{
				audio:'shenzhi',
				trigger:{
					player:'phaseZhunbeiBegin',
				},
				filter:function(event,player){
					return player.countCards('h')>player.hp;
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseToDiscard(get.prompt('dcshenzhi'),'弃置一张手牌，然后回复1点体力').set('logSkill','dcshenzhi').set('ai',card=>{
						var player=_status.event.player;
						if(!player.isDamaged()) return 0;
						return Math.min(3,10-2*player.hp)-get.value(card);
					});
					'step 1'
					if(result.bool){
						player.recover();
					}
				}
			},
			//阮籍
			dczhaowen:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				filter:function(event,player){
					return player.countCards('h');
				},
				check:function(event,player){
					return player.hasCard(card=>{
						return get.color(card)=='black'||get.color(card)=='red'&&player.hasValueTarget(card);
					});
				},
				content:function(){
					'step 0'
					player.showHandcards();
					'step 1'
					player.addTempSkill('dczhaowen_effect');
					game.broadcastAll(function(cards){
						cards.forEach(card=>card.addGaintag('dczhaowen_tag'));
					},player.getCards('h'));
				},
				ai:{
					threaten:3
				},
				subSkill:{
					effect:{
						audio:'dczhaowen',
						enable:'chooseToUse',
						charlotte:true,
						onremove:function(player){
							player.removeGaintag('dczhaowen_tag');
						},
						hiddenCard:function(player,name){
							return get.type(name)=='trick'&&!player.getStorage('dczhaowen_viewed').contains(name)&&player.countCards('h',card=>{
								return get.color(card)=='black'&&card.hasGaintag('dczhaowen_tag');
							})>0;
						},
						filter:function(event,player){
							if(!player.hasCard(card=>{
								return get.color(card)=='black'&&card.hasGaintag('dczhaowen_tag');
							})) return false;
							var storage=player.getStorage('dczhaowen_viewed');
							for(var i of lib.inpile){
								if(!storage.contains(i)&&get.type(i)=='trick'&&event.filterCard({name:i},player,event)) return true;
							}
							return false;
						},
						chooseButton:{
							dialog:function(event,player){
								var cards=player.getCards('h',card=>{
									return get.color(card)=='black'&&card.hasGaintag('dczhaowen_tag');
								});
								var storage=player.getStorage('dczhaowen_viewed');
								var list=[];
								for(var i of lib.inpile){
									if(!storage.contains(i)&&get.type(i)=='trick'&&event.filterCard({name:i},player,event)){
										list.push(['锦囊','',i]);
									}
								}
								return ui.create.dialog('昭文',[list,'vcard'],'hidden');
							},
							check:function(button){
								var player=_status.event.player;
								return player.getUseValue({name:button.link[2]})+1;
							},
							backup:function(links,player){
								return {
									audio:'dczhaowen',
									popname:true,
									filterCard:function(card,player){
										return get.color(card)=='black'&&card.hasGaintag('dczhaowen_tag');
									},
									selectCard:1,
									position:'h',
									viewAs:{
										name:links[0][2],
									},
									onuse:function(links,player){
										player.addTempSkill('dczhaowen_viewed');
										player.markAuto('dczhaowen_viewed',[links.card.name]);
									},
								}
							},
							prompt:function(links,player){
								return '将一张展示过的黑色手牌当做'+get.translation(links[0][2])+'使用';
							},
						},
						group:'dczhaowen_draw',
						mod:{
							aiOrder:function(player,card,num){
								var cards=[];
								if(card.cards) cards.addArray(cards);
								if(get.itemtype(card)=='card') cards.push(card);
								for(var cardx of cards){
									if(get.color(cardx)!='red') continue;
									if(cardx.hasGaintag('dczhaowen_tag')) return num+0.2;
								}
							},
						},
						ai:{
							order:12,
							result:{
								player:1,
							},
						},
					},
					draw:{
						audio:'dczhaowen',
						forced:true,
						charlotte:true,
						trigger:{player:'useCard'},
						filter:function(event,player){
							var cards=event.cards.filter(card=>get.color(card,player)=='red');
							return player.hasHistory('lose',evt=>{
								if(event!=evt.getParent()) return false;
								for(var i in evt.gaintag_map){
									if(evt.gaintag_map[i].contains('dczhaowen_tag')){
										if(cards.some(card=>card.cardid==i)) return true;
									}
								}
							});
						},
						content:function(){
							var num=0;
							var cards=trigger.cards.filter(card=>get.color(card,player)=='red');
							player.getHistory('lose',evt=>{
								if(trigger!=evt.getParent()) return false;
								for(var i in evt.gaintag_map){
									if(evt.gaintag_map[i].contains('dczhaowen_tag')){
										if(cards.some(card=>card.cardid==i)) num++;
									}
								}
							});
							while(num--) player.draw();
						},
					},
					viewed:{
						onremove:true,
						charlotte:true,
					},
					effect_backup:{
						audio:'dczhaowen',
					},
				}
			},
			dcjiudun:{
				audio:2,
				trigger:{target:'useCardToTargeted'},
				filter:function(event,player){
					if(event.player==player||get.color(event.card)!='black') return false;
					if(player.hasSkill('jiu')) return player.countCards('h',card=>{
						return _status.connectMode||lib.filter.cardDiscardable(card,player,'dcjiudun');
					});
					return true;
				},
				direct:true,
				content:function(){
					'step 0'
					if(player.hasSkill('jiu')){
						player.chooseToDiscard(get.prompt('dcjiudun'),'<div class="text center">弃置一张手牌，令'+get.translation(trigger.card)+'对你无效</div>').set('logSkill','dcjiudun').set('ai',card=>{
							if(_status.event.goon) return 4.5+Math.max(0,3-player.hp)-get.value(card);
							return 0;
						}).set('goon',function(){
							if(get.effect(player,trigger.card,trigger.player,player)<-4*Math.max(0,5-Math.sqrt(player.countCards('h')))) return true;
							return false;
						}());
						event.goto(2);
					}
					else{
						player.chooseBool(get.prompt('dcjiudun'),'摸一张牌，然后视为使用一张【酒】').set('ai',()=>1);
					}
					'step 1'
					if(result.bool){
						player.logSkill('dcjiudun');
						player.draw();
						player.chooseUseTarget('jiu',true);
					}
					event.finish();
					'step 2'
					if(result.bool){
						trigger.excluded.add(player);
						game.log(trigger.card,'对',player,'无效');
					}
				},
				ai:{
					jiuSustain:true,
					skillTagFilter:function(player,tag,name){
						if(name!='phase') return false;
					}
				}
			},
			//武诸葛
			dcjincui:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				filter:function(event,player){
					return true;
				},
				forced:true,
				group:'dcjincui_advent',
				content:function(){
					'step 0'
					var num=0;
					for(var i=0;i<ui.cardPile.childNodes.length;i++){
						var card=ui.cardPile.childNodes[i];
						if(get.number(card)==7){
							num++;
							if(num>=player.maxHp) break;
						}
					}
					if(num<1) num=1;
					if(num>player.hp) player.recover(num-player.hp);
					else if(num<player.hp) player.loseHp(player.hp-num);
					'step 1'
					var num=player.hp;
					var cards=get.cards(num);
					game.cardsGotoOrdering(cards);
					var next=player.chooseToMove();
					next.set('list',[
						['牌堆顶',cards],
						['牌堆底'],
					]);
					next.set('prompt','尽瘁：点击将牌移动到牌堆顶或牌堆底');
					next.processAI=function(list){
						var cards=list[0][1],player=_status.event.player;
						var target=(_status.event.getTrigger().name=='phaseZhunbei')?player:player.next;
						var att=get.sgn(get.attitude(player,target));
						var top=[];
						var judges=target.getCards('j');
						var stopped=false;
						if(player!=target||!target.hasWuxie()){
							for(var i=0;i<judges.length;i++){
								var judge=get.judge(judges[i]);
								cards.sort(function(a,b){
									return (judge(b)-judge(a))*att;
								});
								if(judge(cards[0])*att<0){
									stopped=true;break;
								}
								else{
									top.unshift(cards.shift());
								}
							}
						}
						var bottom;
						if(!stopped){
							cards.sort(function(a,b){
								return (get.value(b,player)-get.value(a,player))*att;
							});
							while(cards.length){
								if((get.value(cards[0],player)<=5)==(att>0)) break;
								top.unshift(cards.shift());
							}
						}
						bottom=cards;
						return [top,bottom];
					}
					'step 2'
					var top=result.moved[0];
					var bottom=result.moved[1];
					top.reverse();
					for(var i=0;i<top.length;i++){
						ui.cardPile.insertBefore(top[i],ui.cardPile.firstChild);
					}
					for(i=0;i<bottom.length;i++){
						ui.cardPile.appendChild(bottom[i]);
					}
					if(event.triggername=='phaseZhunbeiBegin'&&top.length==0){
						player.addTempSkill('reguanxing_on');
					}
					player.popup(get.cnNumber(top.length)+'上'+get.cnNumber(bottom.length)+'下');
					game.log(player,'将'+get.cnNumber(top.length)+'张牌置于牌堆顶');
					game.updateRoundNumber();
					game.delayx();
				},
				ai:{
					guanxing:true,
					effect:{
						target:function(card,player,target){
							if(!get.tag(card,'damage')) return;
							var num=0,bool=false;
							for(var i=0;i<ui.cardPile.childNodes.length;i++){
								var card=ui.cardPile.childNodes[i];
								if(get.number(card)==7){
									num++;
									if(num>=target.hp){
										bool=true;
										break;
									}
								}
							}
							if(bool) return 0.2;
						}
					},
					threaten:0.6,
				},
				subSkill:{
					advent:{
						audio:'dcjincui',
						trigger:{global:'phaseBefore',player:'enterGame'},
						forced:true,
						filter:function(event,player){
							return (event.name!='phase'||game.phaseNumber==0)&&player.countCards('h')<7;
						},
						content:function(){
							player.drawTo(7);
						}
					}
				},
			},
			dcqingshi:{
				audio:2,
				trigger:{player:'useCard'},
				filter:function(event,player){
					if(!player.isPhaseUsing()||player.hasSkill('dcqingshi_blocker')) return false;
					if(player.getStorage('dcqingshi_clear').contains(event.card.name)) return false;
					if(player.hasCard(card=>{
						return get.name(card)==event.card.name;
					})) return true;
					return false;
				},
				direct:true,
				content:function(){
					'step 0'
					var choices=[];
					var choiceList=[
						'令'+get.translation(trigger.card)+'对其中一个目标角色造成的伤害+1',
						'令任意名其他角色各摸一张牌',
						'摸三张牌，然后〖情势〗于本回合失效'
					];
					if(trigger.targets&&trigger.targets.length) choices.push('选项一');
					else choiceList[0]='<span style="opacity:0.5">'+choiceList[0]+'(无目标角色)</span>';
					if(game.countPlayer(i=>i!=player)) choices.push('选项二');
					else choiceList[1]='<span style="opacity:0.5">'+choiceList[1]+'</span>';
					if(player.hp>0) choices.push('选项三');
					else choiceList[2]='<span style="opacity:0.5">'+choiceList[1]+'(体力值为0)</span>';
					player.chooseControl(choices,'cancel2').set('choiceList',choiceList).set('prompt',get.prompt('dcqingshi')).set('ai',()=>{
						return _status.event.choice;
					}).set('choice',(()=>{
						var choicesx=choices.slice();
						var cards=player.getCards('hs');
						var bool1=get.tag(trigger.card,'damage')&&choicesx.contains('选项一')&&trigger.targets.some(current=>{
							return get.attitude(player,current)<0;
						}),bool2=choicesx.contains('选项二')&&game.countPlayer(current=>get.attitude(player,current)>0)>=1;
						if(!bool1&&!bool2){
							for(var i=0;i<cards.length;i++){
								var name=get.name(cards[i]);
								if(player.getStorage('dcqingshi_clear').contains(name)) continue;
								for(var j=i+1;j<cards.length;j++){
									if(name==get.name(cards[j])&&get.position(cards[i])+get.position(cards[j])!='ss'&&player.hasValueTarget(cards[i])){
										choicesx.remove('选项三');
										break;
									}
								}
							}
						}
						if(choicesx.contains('选项三')) return '选项三';
						if(bool1) return '选项一';
						if(bool2) return '选项二';
						return 'cancel2';
					})());
					'step 1'
					if(result.control!='cancel2'){
						player.logSkill('dcqingshi');
						game.log(player,'选择了','#y'+result.control);
						var index=['选项一','选项二','选项三'].indexOf(result.control)+1;
						player.addTempSkill('dcqingshi_clear');
						player.markAuto('dcqingshi_clear',[trigger.card.name]);
						var next=game.createEvent('dcqingshi_after');
						next.player=player;
						next.card=trigger.card;
						next.setContent(lib.skill.dcqingshi['content'+index]);
					}
				},
				content1:function(){
					'step 0'
					player.chooseTarget('令'+get.translation(card)+'对其中一个目标造成的伤害+1',true,(card,player,target)=>{
						return _status.event.targets.contains(target);
					}).set('ai',target=>{
						return 2-get.attitude(_status.event.player,target);
					}).set('targets',event.getParent().getTrigger().targets);
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.line(target);
						player.addTempSkill('dcqingshi_ex');
						if(!player.storage.dcqingshi_ex) player.storage.dcqingshi_ex=[];
						player.storage.dcqingshi_ex.push([target,card]);
					}
				},
				content2:function(){
					'step 0'
					player.chooseTarget('令任意名其他角色各摸一张牌',[1,Infinity],true,lib.filter.notMe).set('ai',target=>{
						return get.attitude(_status.event.player,target);
					});
					'step 1'
					if(result.bool){
						var targets=result.targets;
						targets.sortBySeat();
						player.line(targets);
						game.asyncDraw(targets);
						game.delayex();
					}
				},
				content3:function(){
					'step 0'
					player.draw(3);
					player.addTempSkill('dcqingshi_blocker');
				},
				subSkill:{
					ex:{
						trigger:{source:'damageBegin1'},
						filter:function(event,player){
							return player.storage.dcqingshi_ex&&player.storage.dcqingshi_ex.some(info=>{
								return info[0]==event.player&&info[1]==event.card;
							});
						},
						forced:true,
						charlotte:true,
						popup:false,
						onremove:true,
						content:function(){
							trigger.num++;
							for(var i=0;i<player.storage.dcqingshi_ex.length;i++){
								if(player.storage.dcqingshi_ex[i][1]==trigger.card) player.storage.dcqingshi_ex.splice(i--,1);
							}
						}
					},
					clear:{
						onremove:true,
						charlotte:true
					},
					blocker:{charlotte:true}
				},
				ai:{
					threaten:6,
				}
			},
			dczhizhe:{
				audio:2,
				enable:'phaseUse',
				limited:true,
				filterCard:true,
				position:'h',
				discard:false,
				lose:false,
				delay:false,
				skillAnimation:true,
				animationColor:'metal',
				check:function(card){
					if(get.type(card)!='basic'&&get.type(card)!='trick') return 0;
					return get.value(card)-7.5;
				},
				content:function(){
					'step 0'
					var card=cards[0];
					player.awakenSkill('dczhizhe');
					var cardx=game.createCard2(card.name,card.suit,card.number,card.nature);
					player.gain(cardx).gaintag.add('dczhizhe');
					player.addSkill('dczhizhe_effect');
				},
				ai:{
					order:15,
					result:{
						player:1
					}
				},
				subSkill:{
					effect:{
						trigger:{player:['useCardAfter','respondAfter']},
						charlotte:true,
						forced:true,
						filter:function(event,player){
							return player.hasHistory('lose',function(evt){
								if(evt.getParent()!=event) return false;
								for(var i in evt.gaintag_map){
									if(evt.gaintag_map[i].contains('dczhizhe')){
										if(event.cards.some(card=>{
											return get.position(card,true)=='o'&&card.cardid==i;
										})) return true;
									}
								}
								return false;
							});
						},
						content:function(){
							'step 0'
							var cards=[];
							player.getHistory('lose',function(evt){
								if(evt.getParent()!=trigger) return false;
								for(var i in evt.gaintag_map){
									if(evt.gaintag_map[i].contains('dczhizhe')){
										var cardsx=trigger.cards.filter(card=>{
											return get.position(card,true)=='o'&&card.cardid==i;
										});
										if(cardsx.length) cards.addArray(cardsx);
									}
								}
							});
							if(cards.length){
								player.gain(cards,'gain2').gaintag.addArray(['dczhizhe','dczhizhe_clear']);
								player.addTempSkill('dczhizhe_clear');
							}
						},
					},
					clear:{
						charlotte:true,
						onremove:function(player){
							player.removeGaintag('dczhizhe_clear');
						},
						mod:{
							cardEnabled2:function(card,player){
								var cards=[];
								if(card.cards) cards.addArray(cards);
								if(get.itemtype(card)=='card') cards.push(card);
								for(var cardx of cards){
									if(cardx.hasGaintag('dczhizhe_clear')) return false;
								}
							},
							cardRespondable:function(card,player){
								var cards=[];
								if(card.cards) cards.addArray(cards);
								if(get.itemtype(card)=='card') cards.push(card);
								for(var cardx of cards){
									if(cardx.hasGaintag('dczhizhe_clear')) return false;
								}
							},
							cardSavable:function(card,player){
								var cards=[];
								if(card.cards) cards.addArray(cards);
								if(get.itemtype(card)=='card') cards.push(card);
								for(var cardx of cards){
									if(cardx.hasGaintag('dczhizhe_clear')) return false;
								}
							},
						}
					}
				}
			},
			//段巧笑
			dccaizhuang:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.hasCard(function(card){
						return lib.filter.cardDiscardable(card,player,'dccaizhuang');
					},'he');
				},
				complexCard:true,
				selectCard:[1,4],
				position:'he',
				filterCard:function(card,player){
					var suit=get.suit(card);
					if(!lib.suit.contains(suit)) return false;
					if(ui.selected.cards.length){
						if(ui.selected.cards.some(i=>{
							return get.suit(i)==suit;
						})) return false;
					}
					return true;
				},
				check:function(card){
					var player=_status.event.player;
					var suit=get.suit(card);
					if(get.position(card)!='h'&&player.countCards('h',{suit:suit})==1) return 0.1;
					if(!player.hasCard(cardx=>cardx!=card&&get.suit(cardx)==suit)) return 7.5-get.value(card);
					return 6-get.value(card);	
				},
				content:function(){
					'step 0'
					var suits=[];
					player.countCards('h',card=>{
						if(suits.length>=4) return;
						var suit=get.suit(card);
						if(!lib.suit.contains(suit)) return;
						suits.add(suit);
					});
					if(suits.length>=cards.length) event.finish();
					'step 1'
					player.draw();
					event.goto(0);
				},
				ai:{
					order:2,
					result:{
						player:function(player){
							var suits=lib.suit.filter(suit=>{
								return player.countCards('h',{suit:suit})>1;
							});
							var suits2=[],cards=player.getCards('h');
							for(var card of cards){
								var suitx=get.suit(card);
								if(suits2.contains(suitx)) continue;
								if(!player.hasCard(cardx=>cardx!=card&&get.suit(cardx)==suitx)&&get.value(card)<7.5||get.value(card)<6) suits2.add(suitx);
							}
							if(suits2.length<=suits.length) return 0;
							return 1;
						}
					}
				}
			},
			dchuayi:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				frequent:true,
				content:function(){
					'step 0'
					player.judge(()=>1).judge2=(result)=>result.bool;
					'step 1'
					var color=result.color;
					if(color=='red'||color=='black') player.addTempSkill('dchuayi_'+color,{player:'phaseBegin'});
				},
				subSkill:{
					red:{
						trigger:{global:'phaseEnd'},
						charlotte:true,
						forced:true,
						filter:function(event,player){
							return event.player!=player;
						},
						content:function(){
							player.draw();
						},
						mark:true,
						intro:{
							name:'华衣·红',
							content:'其他角色的回合结束时，你摸一张牌'
						},
					},
					black:{
						trigger:{player:'damageEnd'},
						charlotte:true,
						forced:true,
						content:function(){
							player.draw(2);
						},
						mark:true,
						intro:{
							name:'华衣·黑',
							content:'当你受到伤害后，摸两张牌'
						},
						ai:{
							maixie:true,
							maixie_hp:true,
							effect:{
								target:function(card,player,target){
									if(get.tag(card,'damage')){
										if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
										if(!target.hasFriend()) return;
										var num=1;
										if(get.attitude(player,target)>0){
											if(player.needsToDiscard()){
												num=0.5;
											}
											else{
												num=0.3;
											}
										}
										if(target.hp>=4) return [1,num*2];
										if(target.hp==3) return [1,num*1.5];
										if(target.hp==2) return [1,num*0.5];
									}
								}
							}
						}
					}
				}
			},
			//张瑾云
			dchuizhi:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				direct:true,
				content:function(){
					'step 0'
					player.chooseToDiscard(get.prompt('dchuizhi'),'你可以选择弃置任意张手牌并点击“确定”，将手牌摸至与全场手牌数最多的角色数相同。',[0,Infinity]).set('logSkill','dchuizhi').set('ai',card=>{
						if(_status.event.isMax){
							if(ui.selected.cards.length) return -get.value(card);
							return 0;
						}
						return 6-get.value(card);
					}).set('isMax',player.isMaxHandcard());
					'step 1'
					if(result.bool){
						var num=0,targets=game.filterPlayer();
						for(var current of targets){
							if(current.isMaxHandcard()){
								num=current.countCards('h');
								break;
							}
						}
						num=Math.max(1,Math.min(5,num-player.countCards('h')));
						player.draw(num);
					}
				}
			},
			dcjijiao:{
				audio:2,
				enable:'phaseUse',
				limited:true,
				skillAnimation:true,
				animationColor:'orange',
				init:function(player){
					player.addSkill('dcjijiao_machi');
				},
				onremove:function(player){
					player.removeSkill('dcjijiao_machi');
				},
				onChooseToUse:function(event){
					if(event.dcjijiao==undefined&&!game.online){
						var bool=lib.skill.dcjijiao.getCards(event.player,true);
						event.set('dcjijiao',bool);
					}
				},
				filter:function(event,player){
					return event.dcjijiao;
				},
				filterTarget:true,
				getCards:function(player,bool){
					var cards=Array.from(ui.discardPile.childNodes);
					var gains=cards.slice(0);
					var history=game.getAllGlobalHistory('cardMove',function(evt){
						if(evt.name=='lose') return evt.position==ui.discardPile;
						return evt.name=='cardsDiscard';
					});
					for(var i=history.length-1;i>=0;i--){
						var evt=history[i];
						var cards2=evt.cards.filter(function(card){
							return cards.contains(card);
						});
						if(cards2.length){
							if(!lib.skill.dcjijiao.isUse(evt,player)){
								gains.removeArray(cards2);
							}
							cards.removeArray(cards2);
						}
						if(!cards.length) break;
					}
					if(bool) return gains.some(card=>get.type2(card,false)=='trick');
					return gains.filter(card=>get.type2(card,false)=='trick');
				},
				isUse:function(event,player){
					if(event.name!='cardsDiscard') return (event.type=='discard'&&event.player==player);
					var evtx=event.getParent();
					if(evtx.name!='orderingDiscard') return false;
					var evt2=(evtx.relatedEvent||evtx.getParent());
					return (evt2.name=='useCard'&&evt2.player==player);
				},
				content:function(){
					player.awakenSkill('dcjijiao');
					var cards=lib.skill.dcjijiao.getCards(player);
					if(cards.length){
						target.gain(cards,'gain2').gaintag.add('dcjijiao');
						target.addSkill('dcjijiao_nowuxie');
					}
				},
				ai:{
					order:1,
					result:{
						target:function(player,target){
							if(game.roundNumber==1&&ui.cardPile.childNodes.length>game.countPlayer()*5&&!game.hasPlayer(current=>current.hp<=2)&&!player.hasSkill('dcjijiao_risutoa')) return 0;
							return 5;
						}
					}
				},
				subSkill:{
					machi:{
						charlotte:true,
						forced:true,
						popup:false,
						trigger:{
							global:['washCard','die'],
						},
						filter:function(event,player){
							return player.hasSkill('dcjijiao',null,false,false);
						},
						content:function(){
							player.addSkill('dcjijiao_risutoa');
						}
					},
					risutoa:{
						charlotte:true,
						forced:true,
						popup:false,
						trigger:{global:'phaseAfter'},
						content:function(){
							if(player.awakenedSkills.contains('dcjijiao')){
								player.restoreSkill('dcjijiao');
								game.log(player,'重置了','#g【继椒】');
								//player.removeSkill('dcjijiao_machi');
							}
							player.removeSkill('dcjijiao_risutoa');
						}
					},
					nowuxie:{
						trigger:{player:'useCard1'},
						forced:true,
						charlotte:true,
						firstDo:true,
						popup:false,
						filter:function(event,player){
							if(get.type(event.card)!='trick') return false;
							return player.hasHistory('lose',function(evt){
								if(evt.getParent()!=event) return false;
								for(var i in evt.gaintag_map){
									if(evt.gaintag_map[i].contains('dcjijiao')) return true;
								}
								return false;
							});
						},
						content:function(){
							trigger.nowuxie=true;
						},
						onremove:function(player){
							player.removeGaintag('dcjijiao');
						},
					}
				}
			},
			//桓范
			dcjianzheng:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return target.countCards('h')&&target!=player;
				},
				content:function(){
					'step 0'
					var forced=target.hasCard(i=>player.hasUseTarget(i),'h');
					player.choosePlayerCard(target,'h','visible',forced,'获得并使用其中一张牌').set('filterButton',button=>{
						return _status.event.player.hasUseTarget(button.link);
					}).set('ai',button=>{
						return _status.event.player.getUseValue(button.link);
					});
					'step 1'
					if(result.bool){
						var card=result.links[0];
						event.card=card;
						player.gain(card,'giveAuto');
					}
					else event.goto(3);
					'step 2'
					if(get.position(card)=='h'&&get.owner(card)==player&&player.hasUseTarget(card)){
						if(get.name(card,player)=='sha') player.chooseUseTarget(card,true,false);
						else player.chooseUseTarget(card,true);
					}
					'step 3'
					if(player.hasHistory('useCard',evt=>{
						return evt.getParent(2).name=='dcjianzheng'&&evt.targets.contains(target);
					})){
						player.link(true);
						target.link(true);
					}
					else event.finish();
					'step 4'
					target.viewHandcards(player);
				},
				ai:{
					order:10,
					expose:0.2,
					result:{
						target:function(player,target){
							return -Math.sqrt(target.countCards('h'));
						}
					}
				}
			},
			//fumo!
			dcfumou:{
				audio:2,
				trigger:{player:'damageEnd'},
				direct:true,
				filter:function(event,player){
					return player.getDamagedHp()>0;
				},
				content:function(){
					'step 0'
					event.num=trigger.num;
					'step 1'
					player.chooseTarget(get.prompt2('dcfumou'),[1,player.getDamagedHp()]).set('ai',target=>{
						var att=get.attitude(_status.event.player,target);
						if(target.countCards('h')>=3||target.countCards('e')&&!target.isDamaged()){
							if(!target.canMoveCard()) return -att;
							else if(!target.canMoveCard(true)) return -att/5;
						}
						return att;
					});
					'step 2'
					if(result.bool){
						var targets=result.targets;
						targets.sortBySeat(player);
						event.targets=targets;
						player.logSkill('dcfumou',targets);
						event.num--;
					}
					else event.finish();
					'step 3'
					var target=targets.shift();
					event.target=target;
					var choices=[];
					var choiceList=[
						'移动场上的一张牌',
						'弃置所有手牌并摸两张牌',
						'弃置装备区里的所有牌并回复1点体力'
					];
					if(target.canMoveCard()) choices.push('选项一');
					else choiceList[0]='<span style="opacity:0.5">'+choiceList[0]+'</span>';
					if(target.countCards('h')&&!target.hasCard(card=>{
						return !lib.filter.cardDiscardable(card,target,'dcfumou');
					},'h')) choices.push('选项二');
					else choiceList[1]='<span style="opacity:0.5">'+choiceList[1]+'</span>';
					if(target.countCards('e')&&!target.hasCard(card=>{
						return !lib.filter.cardDiscardable(card,target,'dcfumou');
					},'h')) choices.push('选项三');
					else choiceList[2]='<span style="opacity:0.5">'+choiceList[2]+'</span>';
					if(choices.length){
						target.chooseControl(choices).set('prompt','腹谋：请选择一项').set('choiceList',choiceList).set('ai',()=>{
							return _status.event.choice;
						}).set('choice',function(){
							if(choices.length==1) return choices[0];
							var func=(choice,target)=>{
								switch(choice){
									case '选项一':
										if(target.canMoveCard(true)) return 5;
										return 3;
									case '选项二':
										if(target.countCards('h')<2&&get.value(target.getCards('h')[0])<6) return 4.5;
										return 4.5-target.countCards('h');
									case '选项三':
										var e2=target.getEquip(2);
										if(target.hp+target.countCards('hs',['tao','jiu'])<2&&!e2) return 5.5;
										if(get.recoverEffect(target,target,target)<=0) return 3;
										if(!e2) return 4.4;
										return 5-1.5*target.countCards('e');
								}
							}
							var choicesx=choices.map(i=>[i,func(i,target)]).sort((a,b)=>b[1]-a[1]);
							return choicesx[0][0];
						}());
					}
					else event.goto(5);
					'step 4'
					game.log(target,'选择了','#y'+result.control);
					if(result.control=='选项一'){
						target.moveCard(true);
					}
					else if(result.control=='选项二'){
						target.chooseToDiscard(true,'h',target.countCards('h'));
						target.draw(2);
					}
					else{
						target.chooseToDiscard(true,'e',target.countCards('e'));
						target.recover();
					}
					'step 5'
					if(event.targets.length) event.goto(3);
					// else if(event.num) event.goto(1);
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
								if(!target.hasFriend()) return;
								var num=1;
								if(get.attitude(player,target)>0){
									if(player.needsToDiscard()){
										num=0.7;
									}
									else{
										num=0.5;
									}
								}
								if(target.hp==2&&target.hasFriend()) return [1,num*1.5];
								if(target.hp>=2) return [1,num];
							}
						},
					},
				}
			},
			//陈泰
			dcctjiuxian:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterCard:lib.filter.cardRecastable,
				selectCard:function(){
					return Math.ceil(_status.event.player.countCards('h')/2);
				},
				check:function(card){
					return 6.5-get.value(card);
				},
				discard:false,
				lose:false,
				delay:false,
				content:function(){
					'step 0'
					player.recast(cards);
					'step 1'
					player.addTempSkill('dcctjiuxian_help');
					player.chooseUseTarget({
						name:'juedou',
						isCard:true,
						storage:{dcctjiuxian:true}
					},true);
				},
				ai:{
					order:5.5,
					result:{player:1}
				},
				subSkill:{
					help:{
						trigger:{global:'damageSource'},
						filter:function(event,player){
							return event.card&&event.card.storage&&event.card.storage.dcctjiuxian&&event.player.isIn()&&
								event.getParent(2).targets.contains(event.player)&&game.hasPlayer(current=>{
									return current!=player&&event.player.inRange(current)&&current.isDamaged();
								});
						},
						direct:true,
						forced:true,
						charlotte:true,
						content:function(){
							'step 0'
							player.chooseTarget('救陷：是否令其攻击范围内的一名其他角色回复1点体力？',(card,player,target)=>{
								if(_status.event.player==target) return false;
								return target.isDamaged()&&_status.event.targetx.inRange(target);
							}).set('targetx',trigger.player).set('ai',target=>get.recoverEffect(target,_status.event.player,_status.event.player));
							'step 1'
							if(result.bool){
								var target=result.targets[0];
								player.logSkill('dcctjiuxian_help',target);
								target.recover(player);
							}
						}
					}
				}
			},
			dcchenyong:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				frequent:true,
				filter:function(event,player){
					return player.getHistory('useCard').length;
				},
				content:function(){
					var types=[];
					var history=player.getHistory('useCard');
					for(var evt of history){
						types.add(get.type2(evt.card));
					}
					var num=types.length;
					player.draw(num);
				},
				ai:{threaten:2.2}
			},
			//孙瑜
			dcquanshou:{
				audio:2,
				trigger:{global:'phaseBegin'},
				filter:function(event,player){
					return event.player.countCards('h')<event.player.maxHp;
				},
				logTarget:'player',
				check:function(event,player){
					return get.attitude(player,event.player)>0||event.player.maxHp-event.player.countCards('h')<=2;
				},
				content:function(){
					'step 0'
					var draw=Math.min(5,trigger.player.maxHp-trigger.player.countCards('h'));
					trigger.player.chooseControl().set('choiceList',[
						(draw>0?'摸'+get.cnNumber(draw)+'张牌，然后':'令')+'你本回合使用【杀】的次数上限-1',
						'当你本回合使用牌被抵消后，'+get.translation(player)+'摸一张牌'
					]).set('ai',()=>_status.event.choice).set('choice',function(){
						var draw=Math.min(5,Math.max(0,trigger.player.maxHp-trigger.player.countCards('h')));
						if(get.attitude(trigger.player,player)>0){
							if(draw>=3||trigger.player.getCardUsable('sha')>1) return '选项一';
							if(draw<=1&&trigger.player.countCards('hs',card=>{
								return get.name(card)=='sha'&&trigger.player.hasValueTarget(card);
							})) return '选项二';
							return '选项一';
						}
						else{
							if(draw>=4) return '选项一';
							if(draw<2&&trigger.player.countCards('hs',card=>{
								return trigger.player.hasValueTarget(card);
							})) return '选项二';
							return '选项一';
						}
					}()).set('prompt','劝守：请选择一项');
					'step 1'
					game.log(trigger.player,'选择了','#y'+result.control);
					if(result.control=='选项一'){
						var draw=Math.min(5,trigger.player.maxHp-trigger.player.countCards('h'));
						if(draw>0) trigger.player.draw(draw);
						trigger.player.addTempSkill('dcquanshou_sha');
						trigger.player.addMark('dcquanshou_sha',1,false);
					}
					else{
						trigger.player.addTempSkill('dcquanshou_respond');
						trigger.player.markAuto('dcquanshou_respond',[player]);
					}
				},
				ai:{
					expose:0.1
				},
				subSkill:{
					sha:{
						charlotte:true,
						onremove:true,
						marktext:'守',
						intro:{content:'使用【杀】的次数上限-#'},
						mod:{
							cardUsable:function(card,player,num){
								if(card.name=='sha') return num-player.countMark('dcquanshou_sha');
							},
						}
					},
					respond:{
						trigger:{player:['shaMiss','eventNeutralized']},
						filter:function(event,player){
							if(event.type!='card'&&event.name!='_wuxie') return false;
							return player.getStorage('dcquanshou_respond').some(i=>i.isIn());
						},
						forced:true,
						popup:false,
						charlotte:true,
						onremove:true,
						marktext:'守',
						intro:{content:'本回合使用的牌被抵消后，$摸一张牌'},
						content:function(){
							var targets=player.getStorage('dcquanshou_respond');
							targets.sortBySeat();
							for(var target of targets){
								if(target.isIn()){
									target.logSkill('dcquanshou_respond',player);
									target.draw();
								}
							}
						}
					}
				}
			},
			dcshexue:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				filter:function(event,player){
					var card=lib.skill.dcshexue.getLast();
					return card&&player.hasUseTarget(card);
				},
				getLast:function(){
					for(var current of game.filterPlayer()){
						var history=current.actionHistory;
						if(history.length<2) continue;
						if(history[history.length-2].isMe){
							var evts=history[history.length-2].useCard;
							for(var i=evts.length-1;i>=0;i--){
								var evt=evts[i];
								if(get.type(evt.card)!='basic'&&get.type(evt.card)!='trick') continue;
								var evtx=evt.getParent('phaseUse');
								if(evtx&&evtx.player==current){
									return {name:evt.card.name,nature:evt.card.nature};
								}
							}
						}
					}
					return null;
				},
				direct:true,
				group:'dcshexue_end',
				content:function(){
					var card=lib.skill.dcshexue.getLast();
					game.broadcastAll(function(card){
						lib.skill.dcshexue_backup.viewAs=card;
						lib.skill.dcshexue_backup.prompt='设学：是否将一张牌当做'+get.translation(card)+'使用？';
					},card);
					var next=player.chooseToUse();
					next.set('openskilldialog','设学：是否将一张牌当做'+get.translation(card)+'使用？');
					next.set('norestore',true);
					next.set('addCount',false);
					next.set('_backupevent','dcshexue_backup');
					next.set('custom',{
						add:{},
						replace:{window:function(){}}
					});
					next.backup('dcshexue_backup');
				},
				subSkill:{
					backup:{
						audio:'dcshexue',
						filterCard:function(card){
							return get.itemtype(card)=='card';
						},
						position:'hes',
						selectCard:1,
						check:(card)=>6-get.value(card),
						popname:true,
					},
					end:{
						audio:'dcshexue',
						trigger:{player:'phaseUseEnd'},
						filter:function(event,player){
							return player.getHistory('useCard',evt=>{
								return evt.getParent('phaseUse')==event&&(get.type(evt.card)=='basic'||get.type(evt.card)=='trick');
							}).length;
						},
						prompt2:function(event,player){
							var history=player.getHistory('useCard',evt=>{
								return evt.getParent('phaseUse')==event&&(get.type(evt.card)=='basic'||get.type(evt.card)=='trick');
							});
							var card=history[history.length-1].card;
							return '令下一回合的角色于其出牌阶段开始时选择是否将一张牌当做'+(get.translation(card.nature)||'')+'【'+get.translation(card.name)+'】使用';
						},
						content:function(){
							var history=player.getHistory('useCard',evt=>{
								return evt.getParent('phaseUse')==trigger&&(get.type(evt.card)=='basic'||get.type(evt.card)=='trick');
							});
							var card=history[history.length-1].card;
							card={name:card.name,nature:card.nature};
							player.addSkill('dcshexue_studyclear');
							if(!player.storage.dcshexue_studyclear) player.storage.dcshexue_studyclear=[];
							player.storage.dcshexue_studyclear.push(card);
						}
					},
					study:{
						trigger:{player:'phaseUseBegin'},
						filter:function(event,player){
							return player.getStorage('dcshexue_study').some(i=>event.player.hasUseTarget(i));
						},
						onremove:true,
						charlotte:true,
						direct:true,
						content:function(){
							'step 0'
							event.cards=player.getStorage('dcshexue_study');
							'step 1'
							var card=cards.pop();
							if(trigger.player.hasUseTarget(card)){
								game.broadcastAll(function(card){
									lib.skill.dcshexue_backup.viewAs=card;
									lib.skill.dcshexue_backup.prompt='设学：是否将一张牌当做'+get.translation(card)+'使用？';
								},card);
								var next=trigger.player.chooseToUse();
								next.set('openskilldialog','设学：是否将一张牌当做'+get.translation(card)+'使用？');
								next.set('norestore',true);
								next.set('addCount',false);
								next.set('_backupevent','dcshexue_backup');
								next.set('custom',{
									add:{},
									replace:{window:function(){}}
								});
								next.backup('dcshexue_backup');
							}
							if(cards.length) event.redo();
						}
					},
					studyclear:{
						trigger:{global:'phaseBegin'},
						charlotte:true,
						forceDie:true,
						silent:true,
						onremove:true,
						lastDo:true,
						content:function(){
							trigger.player.addTempSkill('dcshexue_study');
							if(!trigger.player.storage.dcshexue_study) trigger.player.storage.dcshexue_study=[];
							trigger.player.storage.dcshexue_study=trigger.player.storage.dcshexue_study.concat(player.getStorage('dcshexue_studyclear'));
							player.removeSkill('dcshexue_studyclear');
						}
					}
				}
			},
			//郤正
			dcdanyi:{
				audio:2,
				trigger:{player:'useCardToPlayered'},
				filter:function(event,player){
					if(!event.isFirstTarget) return false;
					if(!event.targets||!event.targets.length) return false;
					var evt=lib.skill.dcjianying.getLastUsed(player,event.getParent());
					if(!evt||!evt.targets||!evt.targets.length||evt.targets.length!=event.targets.length) return false;
					var targetsx=event.targets.slice();
					var targetsy=evt.targets.slice();
					return targetsx.slice().removeArray(targetsy).length==0&&targetsy.slice().removeArray(targetsx).length==0;
				},
				frequent:true,
				locked:false,
				content:function(){
					player.draw(trigger.targets.length);
				},
				mod:{
					aiOrder:function(player,card,num){
						var evt=lib.skill.dcjianying.getLastUsed(player);
						if(!evt) return;
						var targets=evt.targets;
						if(!targets.length) return;
						var select=get.select(_status.event.selectTarget);
						if(select[0]==-1){
							var targetsx=game.filterPlayer(current=>player.canUse(card,current));
							if(targetsx.length!=targets.length) return;
						}
						else if(targets.length>=select[0]&&targets.length<=select[1]){
							var eff=0;
							for(var i of targets){
								eff+=get.effect(i,card,player,player);
							}
							if(eff<0) return;
						}
						return num+10;
					},
				},
				ai:{
					threaten:2.5,
					effect:{
						player:function(card,player,target){
							if(player._dcdanyi_aiChecking) return;
							player._dcdanyi_aiChecking=true;
							var evt=lib.skill.dcjianying.getLastUsed(player),targets;
							if(evt){
								targets=evt.targets;
								var select=get.select(_status.event.selectTarget);
								if(select[0]==-1){
									var targetsx=game.filterPlayer(current=>player.canUse(card,current));
									if(targetsx.length!=targets.length){
										delete player._dcdanyi_aiChecking;
										return;
									}
								}
								else if(targets.length>=select[0]&&targets.length<=select[1]){
									var eff=0;
									for(var i of targets){
										eff+=get.effect(i,card,player,player);
									}
									if(eff<0){
										delete player._dcdanyi_aiChecking;
										return;
									}
								}
							}
							delete player._dcdanyi_aiChecking;
							if((targets||[]).contains(target)) return [1,1];
						}
					},
				},
			},
			dcwencan:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					if(ui.selected.targets.length){
						if(ui.selected.targets[0].hp==target.hp) return false;
					}
					return target.hp!=player.hp;
				},
				selectTarget:[1,2],
				complexTarget:true,
				multiline:true,
				content:function(){
					'step 0'
					target.chooseToDiscard(get.translation(player)+'对你发动了【文灿】','是否弃置两张花色不同的牌？或者点击“取消”，令其本回合对你使用牌无次数限制','he',2,(card,player)=>{
						if(!ui.selected.cards.length) return true;
						var suit=get.suit(card,player);
						for(var i of ui.selected.cards){
							if(get.suit(i,player)==suit) return false;
						}
						return true;
					}).set('complexCard',true).set('ai',card=>{
						if(_status.event.nofear) return 0;
						return 5-get.value(card);
					}).set('nofear',player.countCards('hs',card=>{
						return get.tag(card,'damage')&&player.canUse(card,target)&&get.effect(target,card,player,target)<=0;
					})<target.hp);
					'step 1'
					if(!result.bool){
						player.addTempSkill('dcwencan_paoxiao');
						player.markAuto('dcwencan_paoxiao',[target]);
					}
				},
				subSkill:{
					paoxiao:{
						charlotte:true,
						onremove:true,
						marktext:'灿',
						intro:{content:'对$使用牌无次数限制'},
						mod:{
							cardUsableTarget:function(card,player,target){
								if(player.getStorage('dcwencan_paoxiao').contains(target)) return true;
							},
						}
					}
				},
				ai:{
					order:9,
					result:{target:-1}
				}
			},
			//芮姬
			dcwangyuan:{
				audio:2,
				trigger:{
					player:['loseAfter','logSkill'],
					global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
				},
				frequent:true,
				filter:function(event,player,name){
					if(player==_status.currentPhase) return (name=='logSkill'&&event.skill=='dcliying'&&player.getExpansions('dcwangyuan').length<game.countPlayer());
					if(name=='logSkill') return false;
					if(player.getExpansions('dcwangyuan').length>=game.countPlayer()) return false;
					if(event.name=='gain'&&event.player==player) return false;
					var evt=event.getl(player);
					return evt&&evt.cards2&&evt.cards2.length>0;
				},
				content:function(){
					'step 0'
					var cards=player.getExpansions('dcwangyuan');
					var card=get.cardPile2(cardx=>{
						var type=get.type2(cardx);
						return (type=='basic'||type=='trick')&&!cards.some(cardxx=>get.name(cardx,false)==get.name(cardxx,false));
					});
					if(card) player.addToExpansion(card,'gain2').gaintag.add('dcwangyuan');
				},
				marktext:'妄',
				intro:{
					name:'妄(妄缘/铃音)',
					content:'expansion',
					markcount:'expansion',
				},
			},
			dclingyin:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				filter:function(event,player){
					return player.getExpansions('dcwangyuan').length;
				},
				direct:true,
				content:function(){
					'step 0'
					var cards=player.getExpansions('dcwangyuan');
					player.chooseButton([
						get.prompt('dclingyin')+'（当前轮数：'+get.cnNumber(game.roundNumber,true)+'）',
						cards
					],[1,game.roundNumber]).set('ai',button=>{
						var color=_status.event.color,player=_status.event.player;
						if(ui.selected.buttons.length>0&&ui.selected.buttons.length==player.getExpansions('dcwangyuan').length-1) return 0;
						if(color==1) return get.value(button.link);
						if(color) return get.color(button.link)==color?1:0;
						return 0;
					}).set('color',function(){
						var cardsR=cards.filter(i=>get.color(i)=='red');
						if(cardsR.length==cards.length||cardsR.length==0||cards.length<=game.roundNumber) return 1;
						if(cardsR.length<=game.roundNumber) return 'red';
						if(cards.length-cardsR.length<=game.roundNumber) return 'black';
						return 1;
					}());
					'step 1'
					if(result.bool){
						player.logSkill('dclingyin');
						var cards=result.links;
						player.gain(cards,'gain2');
						var cardsx=player.getExpansions('dcwangyuan').removeArray(cards);
						if(cardsx.length<=1||get.color(cardsx)!='none'){
							player.addTempSkill('dclingyin_effect');
							game.log(player,'获得了','#g【铃音】','的后续效果');
						}
					}
				},
				ai:{
					combo:'dcwangyuan',
					threaten:3,
				},
				subSkill:{
					effect:{
						audio:'dclingyin',
						enable:'phaseUse',
						trigger:{source:'damageBegin1'},
						viewAs:{name:'juedou'},
						charlotte:true,
						forced:true,
						prompt:'将一张武器牌或防具牌当【决斗】使用',
						filterCard:function(card){
							return get.subtype(card)=='equip1'||get.subtype(card)=='equip2';
						},
						position:'hes',
						filter:function(event,player){
							if(event.name=='chooseToUse') return player.countCards('hes',{subtype:['equip1','equip2']})>0;
							return event.player!=player;
						},
						content:function(){
							trigger.num++;
						},
						ai:{
							damageBonus:true,
						}
					}
				}
			},
			dcliying:{
				audio:2,
				usable:1,
				trigger:{
					player:'gainAfter',
					global:'loseAsyncAfter',
				},
				filter:function(event,player){
					var cards=event.getg(player).filter(i=>get.owner(i)==player&&get.position(i)=='h');
					if(!cards.length) return false;
					var evt=event.getParent('phaseDraw');
					if(evt&&evt.name=='phaseDraw') return false;
					return true;
				},
				direct:true,
				content:function(){
					'step 0'
					var cards=trigger.getg(player).filter(i=>get.owner(i)==player&&get.position(i)=='h');
					player.chooseCardTarget({
						prompt:get.prompt('dcliying'),
						prompt2:'选择本次获得的任意张牌交给一名其他角色，然后摸一张牌',
						filterTarget:lib.filter.notMe,
						filterCard:card=>_status.event.cards.contains(card),
						cards:cards,
						selectCard:[1,cards.length],
						ai1:function(card){
							if(ui.selected.cards.length) return 0;
							return 3/(Math.abs(get.value(card))+0.1)
						},
						ai2:function(target){
							return get.value(ui.selected.cards,target)*get.attitude(_status.event.player,target);
						},
					}).set('cards',cards);
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('dcliying',target);
						player.give(result.cards,target);
						player.draw();
						//if(player!=_status.currentPhase) event.finish();
					}
					else{
						player.storage.counttrigger.dcliying--;
						event.finish();
					}/*
					'step 2'
					var cards=player.getExpansions('dcwangyuan');
					var card=get.cardPile2(cardx=>{
						var type=get.type2(cardx);
						return (type=='basic'||type=='trick')&&!cards.some(cardxx=>get.name(cardx,false)==get.name(cardxx,false));
					});
					if(card) player.addToExpansion(card,'gain2').gaintag.add('dcwangyuan');*/
				}
			},
			//谢灵毓
			dcyuandi:{
				audio:2,
				trigger:{global:'useCard'},
				filter:function(event,player){
					var evt=event.getParent('phaseUse');
					if(!evt||evt.player!=event.player) return false;
					if(event.player==player||!event.targets||event.targets.length>1||event.targets[0]!=event.player) return false;
					return event.player.getHistory('useCard',evtx=>{
						return evtx.getParent('phaseUse')==evt;
					}).indexOf(event)==0;
				},
				direct:true,
				global:'dcyuandi_ai',
				content:function(){
					'step 0'
					var target=trigger.player;
					var name=get.translation(target);
					var choices=['选项二'];
					var choiceList=['弃置'+name+'一张手牌','你与'+name+'各摸一张牌'];
					if(target.countDiscardableCards(player,'h')) choices.unshift('选项一');
					else choiceList[0]='<span style="opacity:0.5; ">'+choiceList[0]+'</span>';
					player.chooseControl(choices,'cancel2').set('choiceList',choiceList).set('ai',()=>{
						return _status.event.choice;
					}).set('prompt',get.prompt('dcyuandi',trigger.player)).set('choice',function(){
						if(get.attitude(player,target)<0){
							if(choices.contains('选项一')) return '选项一';
							return 'cancel2';
						}
						return '选项二';
					}());
					'step 1'
					if(result.control!='cancel2'){
						var target=trigger.player;
						player.logSkill('dcyuandi',target);
						if(result.control=='选项一'){
							player.discardPlayerCard(target,'h',true);
						}
						else game.asyncDraw([target,player]);
					}
				},
				subSkill:{
					ai:{
						mod:{
							aiOrder:function(player,card,num){
								var info=get.info(card);
								if(!info||!info.toself) return;
								var evt=_status.event.getParent('phaseUse');
								if(!evt||evt.player!=player) return;
								if(player.hasHistory('useCard',evtx=>evtx.getParent('phaseUse')==evt)) return;
								if(game.hasPlayer(current=>{
									return current.hasSkill('dcyuandi')&&get.attitude(player,current)>=0;
								})) return num+10;
								return num/3;
							},
						},
					},
				}
			},
			dcxinyou:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('h')<player.maxHp||player.isDamaged();
				},
				content:function(){
					'step 0'
					player.recover(player.getDamagedHp());
					player.drawTo(player.maxHp);
					'step 1'
					var check=0;
					if(player.hasHistory('gain',evt=>{
						return evt.getParent(2)==event&&evt.cards.length>=2;
					})) check|=1;
					if(game.getGlobalHistory('changeHp',evt=>{
						return evt.getParent().name=='recover'&&evt.getParent(2)==event;
					}).length) check|=2;
					if(check>0){
						player.addTempSkill('dcxinyou_effect');
						player.storage.dcxinyou_effect=check;
					}
				},
				ai:{
					order:1,
					result:{player:1}
				},
				subSkill:{
					effect:{
						audio:'dcxinyou',
						trigger:{player:'phaseJieshuBegin'},
						charlotte:true,
						forced:true,
						onremove:true,
						filter:function(event,player){
							return player.storage.dcxinyou_effect;
						},
						content:function(){
							if((player.storage.dcxinyou_effect&1)>0) player.loseHp();
							if((player.storage.dcxinyou_effect&2)>0) player.chooseToDiscard('心幽：弃置两张牌',2,true,'he');
						}
					}
				}
			},
			//笮融
			dccansi:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				content:function(){
					'step 0'
					player.recover();
					if(!game.hasPlayer(current=>current!=player)) event.finish();
					else player.chooseTarget('残肆：选择一名其他角色',true,lib.filter.notMe).set('ai',target=>{
						var player=_status.event.player;
						var list=['recover','sha','juedou','huogong'];
						return list.reduce((p,c)=>{
							return p+get.effect(target,{name:c},player,player);
						},0);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.line(target,'fire');
						target.recover();
						event.list=['sha','juedou','huogong'];
						player.addTempSkill('dccansi_draw');
						player.storage.dccansi_draw=target;
					}
					else event.finish();
					'step 2'
					var card={name:event.list.shift(),isCard:true};
					if(target.isIn()&&player.canUse(card,target,false)) player.useCard(card,target,false);
					if(event.list.length) event.redo();
					'step 3'
					player.removeSkill('dccansi_draw');
				},
				subSkill:{
					draw:{
						trigger:{global:'damageEnd'},
						forced:true,
						charlotte:true,
						onremove:true,
						filter:function(event,player){
							return event.getParent(3).name=='dccansi'&&player.storage.dccansi_draw==event.player;
						},
						content:function(){
							for(var i=0;i<trigger.num;i++){
								player.draw(2);
							}
						}
					}
				},
				ai:{
					threaten:5,
					expose:0.3
				}
			},
			dcfozong:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				filter:function(event,player){
					return player.countCards('h')>7;
				},
				forced:true,
				direct:true,
				intro:{
					markcount:'expansion',
					content:'expansion',
				},
				content:function(){
					'step 0'
					var num=player.countCards('h')-7;
					player.chooseCard('佛宗：将'+get.cnNumber(num)+'张手牌置于武将上',true,num);
					'step 1'
					if(result.bool){
						var cards=result.cards;
						player.logSkill('dcfozong');
						player.addToExpansion(cards,player,'give').gaintag.add('dcfozong');
					}
					'step 2'
					var cards=player.getExpansions('dcfozong');
					if(cards.length<7) event.finish();
					else{
						event.targets=game.filterPlayer(i=>i!=player).sortBySeat(player);
						game.delayx();
					}
					'step 3'
					var target=targets.shift();
					event.target=target;
					player.line(target);
					var cards=player.getExpansions('dcfozong');
					if(!cards.length) event._result={bool:false};
					else target.chooseButton(['###佛宗###<div class="text center">获得一张牌并令'+get.translation(player)+'回复1点体力，或点击“取消”令其失去1点体力</div>',cards]).set('ai',button=>{
						if(_status.event.refuse) return get.value(button.link)-7.5;
						return get.value(button.link);
					}).set('refuse',get.attitude(target,player)<1&&get.effect(player,{name:'losehp'},player,target)>0);
					'step 4'
					if(result.bool){
						var card=result.links[0];
						target.gain(card,'give',player);
						player.recover(target);
					}
					else player.loseHp();
					'step 5'
					if(targets.length) event.goto(3);
				},
				ai:{halfneg:true}
			},
			//滕芳兰
			dcluochong:{
				audio:2,
				trigger:{global:'roundStart'},
				filter:function(event,player){
					return game.hasPlayer(current=>current.countDiscardableCards(player,'hej')>0);
				},
				direct:true,
				content:function(){
					'step 0'
					var num=4-player.countMark('dcluochong');
					var dialog=[];
					dialog.push('###'+get.prompt('dcluochong')+'###<div class="text center">弃置任意名角色区域内共计至多'+get.cnNumber(num)+'张牌</div>');
					game.filterPlayer().sortBySeat().forEach(target=>{
						if(target.countDiscardableCards(player,'hej')<=0) return false;
						var name=(target==player?'你':get.translation(target));
						if(target.countCards('h')){
							dialog.add('<div class="text center">'+name+'的手牌区</div>');
							if(player.hasSkillTag('viewHandcard',null,target,true)||player==target) dialog.push(target.getCards('h'));
							else dialog.push([target.getCards('h'),'blank']);
						}
						if(target.countCards('e')) dialog.addArray(['<div class="text center">'+name+'的装备区</div>',target.getCards('e')]);
						if(target.countCards('j')) dialog.addArray(['<div class="text center">'+name+'的判定区</div>',target.getCards('j')]);
					});
					player.chooseButton([1,num]).set('createDialog',dialog).set('filterButton',button=>{
						return lib.filter.canBeDiscarded(button.link,_status.event.player,get.owner(button.link));
					}).set('ai',button=>{
						var card=button.link;
						var player=_status.event.player,target=get.owner(card);
						if(target==player&&ui.cardPile.childNodes.length>80){
							if(ui.selected.buttons.some(i=>get.owner(i.link)==player)) return 0;
							if(get.value(card,player)<6) return 60-get.value(card,player);
							return 0;
						}
						var num=ui.selected.buttons.filter(i=>get.owner(i.link)==target).length;
						var val=get.buttonValue(button);
						if(num>2) val/=Math.sqrt(num);
						if(get.attitude(player,target)>0) return -val;
						return val;
						//return -(get.position(card)!='h'?get.value(card,target):(4.5+Math.random()-0.2*(num>2?1:0)))*get.attitude(player,target);
					});
					'step 1'
					if(result.bool){
						var links=result.links;
						var lose_list=[];
						var log=false;
						for(var target of game.players){
							var cards=links.filter(card=>get.owner(card)==target);
							if(cards.length){
								if(cards.length>2){
									player.addMark('dcluochong',1,false);
									log=true;
								}
								lose_list.push([target,cards]);
							}
						}
						player.logSkill('dcluochong',lose_list.map(i=>i[0]));
						if(log) game.log(player,'可弃置牌数','#g-1');
						if(lose_list[0].length==1) lose_list[0][0].discard(lose_list[0][1]);
						else{
							game.loseAsync({
								lose_list:lose_list,
								discarder:player,
							}).setContent('discardMultiple');
						}
					}
				},
				ai:{
					threaten:2.5,
					effect:{
						target:function(card,player,target,current){
							if(get.type(card)=='delay'&&current<0){
								var current=_status.currentPhase;
								if(current.getSeatNum()>target.getSeatNum()) return 'zerotarget';
							}
						},
					},
				},
			},
			dcaichen:{
				audio:2,
				trigger:{
					player:['loseAfter','phaseDiscardBefore'],
					global:'loseAsyncAfter',
					target:'useCardToTargeted'
				},
				filter:function(event,player,name){
					if(event.name=='phaseDiscard') return ui.cardPile.childNodes.length>40;
					if(name=='useCardToTargeted') return ui.cardPile.childNodes.length<40&&get.suit(event.card)=='spade';
					if(event.getParent().name!='dcluochong') return false;
					if(event.name=='loseAsync'&&!event.getl(player).cards.length) return false;
					return ui.cardPile.childNodes.length>80;
				},
				forced:true,
				content:function(){
					if(trigger.name.indexOf('lose')==0) player.draw(2);
					else if(trigger.name=='phaseDiscard'){
						trigger.cancel();
						game.log(player,'跳过了弃牌阶段');
					}
					else{
						trigger.directHit.add(player);
						game.log(player,'不可响应',trigger.card);
					}
				}
			},
			//杨彪
			dczhaohan:{
				audio:2,
				trigger:{player:'phaseDrawBegin2'},
				frequent:true,
				filter:function(event,player){
					return !event.numFixed;
				},
				content:function(){
					trigger.num+=2;
					trigger.dczhaohan=true;
					player.addTempSkill('dczhaohan_choose','phaseDrawAfter');
				},
				subSkill:{
					choose:{
						trigger:{player:'gainAfter'},
						filter:function(event,player){
							return event.getParent(2).dczhaohan&&player.countCards('h')>=2;
						},
						forced:true,
						charlotte:true,
						popup:false,
						content:function(){
							'step 0'
							var choices=[],choiceList=[
								'将两张手牌交给一名没有手牌的角色',
								'弃置两张手牌'
							];
							if(game.hasPlayer(current=>current.countCards('h')==0)) choices.push('选项一');
							else choiceList[0]='<span style="opacity:0.5; ">'+choiceList[0]+'</span>';
							choices.push('选项二');
							if(choices.length==1) event._result={control:'选项二'};
							else player.chooseControl(choices).set('choiceList',choiceList).set('ai',()=>_status.event.choice).set('choice',function(){
								if(game.hasPlayer(current=>{
									return current.countCards('h')==0&&get.attitude(player,current)>0;
								})) return '选项一';
								return '选项二';
							}());
							'step 1'
							if(result.control=='选项一'){
								player.chooseCardTarget({
									filterCard:true,
									selectCard:2,
									forced:true,
									filterTarget:function(card,player,target){
										return !target.countCards('h');
									},
									ai1:function(card){
										return 7-get.value(card);
									},
									ai2:function(target){
										return get.attitude(_status.event.player,target);
									},
									prompt:'将两张手牌交给一名没有手牌的角色'
								});
							}
							else{
								player.chooseToDiscard('昭汉：请弃置两张手牌',true,2);
								event.finish();
							}
							'step 2'
							if(result.bool){
								player.give(result.cards,result.targets[0]);
							}
						}
					}
				}
			},
			dcjinjie:{
				audio:2,
				trigger:{global:'dying'},
				hasPhase:function(player){
					var history=player.actionHistory;
					for(var i=history.length-1;i>=0;i--){
						if(history[i].isMe) return true;
						if(history[i].isRound) break;
					}
					return false;
				},
				direct:true,
				content:function(){
					'step 0'
					if(lib.skill.dcjinjie.hasPhase(player)){
						player.chooseBool(get.prompt('dcjinjie',trigger.player),'令其摸一张牌').set('ai',()=>{
							return get.attitude(_status.event.player,_status.event.getTrigger().player)>0;
						});
					}
					else{
						var num=0;
						var history=player.actionHistory;
						for(var i=history.length-1;i>=0;i--){
							for(var evt of history[i].useSkill){
								if(evt.skill=='dcjinjie') num++;
							}
							if(history[i].isRound) break;
						}
						if(num==0){
							player.chooseBool(get.prompt('dcjinjie',trigger.player),'令其回复1点体力').set('ai',()=>{
								var player=_status.event.player;
								return get.effect(_status.event.getTrigger().player,{name:'tao'},player,player)>0;
							});
						}
						else{
							player.chooseToDiscard(get.prompt('dcjinjie',trigger.player),'弃置'+get.cnNumber(num)+'张牌，令其回复1点体力','he',num).set('ai',card=>{
								if(_status.event.eff>0) return get.value({name:'tao'})-get.value(card);
								return 0;
							}).set('eff',get.effect(trigger.player,{name:'tao'},player,player)).set('logSkill',['dcjinjie',trigger.player]);
						}
						event.goto(2);
					}
					'step 1'
					if(result.bool){
						player.logSkill('dcjinjie',trigger.player);
						trigger.player.draw();
					}
					event.finish();
					'step 2'
					if(result.bool){
						if(!result.cards||!result.cards.length) player.logSkill('dcjinjie',trigger.player);
						trigger.player.recover();
					}
				},
			},
			dcjue:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				direct:true,
				filter:function(event,player){
					return game.hasPlayer(current=>current.isHealthy()&&player.canUse('sha',current,false));
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('dcjue'),'视为对一名未受伤的角色使用一张【杀】',(card,player,target)=>{
						return player.canUse('sha',target,false)&&target.isHealthy();
					}).set('ai',target=>{
						return get.effect(target,{name:'sha'},_status.event.player);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('dcjue',target);
						player.useCard({name:'sha',isCard:true},target,false);
					}
				},
			},
			//杨弘
			dcjianji:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.getAttackRange()>=1;
				},
				selectTarget:function(){
					return [1,_status.event.player.getAttackRange()];
				},
				complexSelect:true,
				complexTarget:true,
				filterTarget:function(card,player,target){
					var selected=ui.selected.targets;
					if(!selected.length) return true;
					for(var i of selected){
					 if(i.getNext()==target||i.getPrevious()==target) return true;
					}
					return false;
				},
				contentBefore:function(){
					event.getParent()._dcjianji_discarded=[];
				},
				content:function(){
					'step 0'
					if(target.countCards('he')>0) target.chooseToDiscard(true,'he');
					else event.finish();
					'step 1'
					if(result.bool){
						event.getParent()._dcjianji_discarded.push(target);
					}
				},
				contentAfter:function(){
					'step 0'
					var list=targets.filter(target=>{
						var num=target.countCards('h');
						return targets.every(targetx=>{
							return targetx.countCards('h')<=num;
						});
					});
					if(list.length){
						event.list=list;
						event.current=event.list.shift();
						event.getParent()._dcjianji_discarded.remove(player);
						event.targets=event.getParent()._dcjianji_discarded;
					}
					else event.finish();
					'step 1'
					var targets=event.targets.slice();
					targets.remove(event.current);
					if(!targets.length) event._result={bool:false};
					else event.current.chooseTarget('间计：是否视为对除'+get.translation(player)+'外的弃置过牌的一名角色使用一张杀？',(card,player,target)=>{
						return _status.event.targets.contains(target)&&player.canUse('sha',target,false);
					}).set('targets',event.targets).set('ai',target=>{
						var player=_status.event.player;
						return get.effect(target,{name:'sha'},player,player);
					});
					'step 2'
					if(result.bool){
						event.current.useCard({name:'sha',isCard:true},result.targets,false);
					}
					'step 3'
					if(event.list.length){
						event.current=event.list.shift();
						event.goto(1);
					}
				},
				ai:{
					order:7,
					result:{
						target:function(player,target){
							var eff=get.effect(target,{name:'guohe_copy2'},player,target)/2;
							if(ui.selected.targets.length&&eff<0){
								var len=target.countCards('h');
								if(ui.selected.targets.every(i=>{
									return i.countCards('h')<len+1;
								})&&ui.selected.targets.some(i=>{
									return get.effect(i,{name:'sha'},target,player)>0;
								})) return 0.1;
							}
							return ui.selected.targets.reduce((p,c)=>p+get.effect(c,{name:'guohe_copy2'},player,c)/2,0)+eff;
						}
					}
				},
			},
			dcyuanmo:{
				audio:2,
				trigger:{player:['damageEnd','phaseZhunbeiBegin']},
				direct:true,
				group:'dcyuanmo_add',
				init:function(player){player.storage.dcyuanmo_range=0},
				change:function(player,num){
					player.addSkill('dcyuanmo_range');
					if(typeof player.storage.dcyuanmo_range!=='number') player.storage.dcyuanmo_range=0;
					if(!num) return;
					player.storage.dcyuanmo_range+=num;
					if(player.storage.dcyuanmo_range!=0) player.markSkill('dcyuanmo_range');
					else player.unmarkSkill('dcyuanmo_range');
					game.log(player,'的攻击范围',(num>0?'+':'')+num);
				},
				content:function(){
					'step 0'
					event.targets=game.filterPlayer(current=>player.inRange(current));
					var choiceList=['攻击范围+1。然后若你攻击范围内的角色数因此增加，你可以获得其中任意名角色的一张牌','攻击范围-1。然后你摸两张牌'];
					player.chooseControl('cancel2').set('prompt',get.prompt('dcyuanmo')).set('choiceList',choiceList).set('ai',()=>{
						return _status.event.choice;
					}).set('choice',function(){
						if(trigger.name=='phaseZhunbei'&&player.getAttackRange()==1&&!player.hasCard(card=>{
							if(get.subtype(card)!='equip1'&&!player.hasUseTarget(card)) return false;
							var num=1;
							var info=get.info(card,false);
							if(info&&info.distance&&typeof info.distance.attackFrom=='number') num-=info.distance.attackFrom;
							return num>1;
						},'hs')) return '选项一';
						var targets=event.targets.slice(),targetsx=[];
						var _tmp=player.storage.dcyuanmo_range;
						player.storage.dcyuanmo_range++;
						try{
							targetsx=game.filterPlayer(current=>player.inRange(current));
						}
						catch(e){player.storage.dcyuanmo_range=_tmp};
						player.storage.dcyuanmo_range=_tmp;
						targetsx.removeArray(targets);
						return targetsx.reduce((p,c)=>{
							return p+Math.max(0,get.effect(c,{name:'shunshou_copy2'},player,player));
						},0)>get.effect(player,{name:'wuzhong'},player,player)/1.5?'选项一':'选项二';
					}());
					'step 1'
					if(result.control=='cancel2'){
						event.finish(); return;
					}
					player.logSkill('dcyuanmo');
					if(result.control=='选项一'){
						lib.skill.dcyuanmo.change(player,1);
						var targetsx=game.filterPlayer(current=>player.inRange(current));
						if(targetsx.length<=targets.length){
							event.finish();
						}
						else event.targets=targetsx.removeArray(targets);
					}
					else{
						lib.skill.dcyuanmo.change(player,-1);
						player.draw(2);
						event.finish();
					}
					'step 2'
					player.chooseTarget('远谟：获得任意名本次进入你攻击范围的角色的一张牌',[1,targets.length],(card,player,target)=>{
						return _status.event.getParent().targets.contains(target)&&target.countGainableCards(player,'he')>0;
					}).set('ai',target=>{
						var player=_status.event.player;
						return get.effect(target,{name:'shunshou_copy2'},player,player);
					});
					'step 3'
					if(result.bool){
						var targets=result.targets.sortBySeat();
						player.line(targets);
						for(var target of targets){
							player.gainPlayerCard(target,'he',true);
						}
					}
				},
				subSkill:{
					add:{
						audio:'dcyuanmo',
						trigger:{player:'phaseJieshuBegin'},
						filter:function(event,player){
							return !game.hasPlayer(current=>player.inRange(current));
						},
						prompt2:'令你的攻击范围+1',
						check:()=>true,
						content:function(){
							lib.skill.dcyuanmo.change(player,1);
						},
					},
					range:{
						charlotte:true,
						intro:{
							content:function(storage,player){
								var num=player.storage.dcyuanmo_range;
								return '攻击范围'+(num>=0?'+':'')+num;
							}
						},
						mod:{
							attackRange:function(player,num){
								return num+player.countMark('dcyuanmo_range');
							},
						},
					}
				},
			},
			//薛灵芸
			dcxialei:{
				audio:2,
				trigger:{
					player:'loseAfter',
					global:['cardsDiscardAfter','loseAsyncAfter','equipAfter'],
				},
				filter:function(event,player){
					if(player.countMark('dcxialei_clear')>=3) return false;
					if(event.name!='cardsDiscard'){
						return event.getd(player,'cards2').some(i=>get.color(i,player)=='red');
					}
					else{
						if(!event.cards.filterInD('d').some(i=>get.color(i,player)=='red')) return false;
						var evt=event.getParent();
						if(evt.name!='orderingDiscard') return false;
						var evtx=(evt.relatedEvent||evt.getParent());
						if(evtx.player!=player) return false;
						return player.hasHistory('lose',evtxx=>{
							return evtx==(evtxx.relatedEvent||evtxx.getParent())&&evtxx.cards2.length>0;
						});
					}
				},
				content:function(){
					'step 0'
					var cards=get.cards(3-player.countMark('dcxialei_clear'));
					event.cards=cards;
					game.cardsGotoOrdering(cards);
					if(cards.length==1) event._result={bool:true,links:cards};
					else player.chooseButton(['霞泪：获得其中的一张牌',cards],true);
					'step 1'
					if(result.bool){
						var card=result.links[0];
						player.gain(card,'gain2');
						event.cards.remove(card);
						if(event.cards.length){
							player.chooseBool().set('createDialog',['是否将剩余牌置于牌堆底？',event.cards]).set('ai',()=>_status.event.bool).set('bool',function(){
								if(!player.hasSkill('dcanzhi')) return Math.random()<0.5;
								if(player.hasSkill('dcanzhi_blocker')){
									var next=_status.currentPhase.getNext();
									var judges=next.getCards('j');
									var val=0;
									if(judges.length&&!next.hasWuxie()){
										var att=get.attitude(player,next);
										for(var i=0;;i++){
											var judge=judges[i]&&get.judge(judges[i]),card=event.cards[i];
											if(!judge||!card) break;
											val+=judge(card)*att;
											i++;
										}
									}
									if(val>0) return false;
									else if(val==0) return Math.random()<0.5;
									return true;
								}
								var card=event.cards[0];
								if(get.color(card,player)=='red'&&player.isPhaseUsing()&&player.countCards('hs',card=>{
									return get.color(card)=='red'&&player.hasValueTarget(card)&&['basic','trick'].contains(get.type(card));
								})>0) return false;
								if(get.color(card,player)=='black') return false;
								return true;
							}());
						}
						else event.goto(3);
					} else event.finish();
					'step 2'
					if(result.bool){
						player.popup('牌堆底');
						game.log(player,'将'+get.cnNumber(event.cards.length)+'张牌置于了牌堆底');
					}
					else player.popup('牌堆顶');
					while(cards.length){
						var card=cards.pop();
						card.fix();
						if(result.bool) ui.cardPile.appendChild(card);
						else ui.cardPile.insertBefore(card,ui.cardPile.firstChild);
					}
					game.updateRoundNumber();
					'step 3'
					player.addMark('dcxialei_clear',1,false);
					player.addTempSkill('dcxialei_clear');
				},
				subSkill:{clear:{onremove:true}}
			},
			dcanzhi:{
				enable:'phaseUse',
				filter:function(event,player){
					return !player.hasSkill('dcanzhi_blocker');
				},
				group:'dcanzhi_damage',
				content:function(){
					'step 0'
					player.judge(result=>{
						if(get.color(result)=='red') return _status.event.getParent().player.countMark('dcxialei_clear')/2;
						return 2;
					}).judge2=result=>result.bool;
					'step 1'
					if(result.color=='red'){
						player.removeSkill('dcxialei_clear');
						event.finish();
					}
					else if(result.color=='black'){
						player.addTempSkill('dcanzhi_blocker');
						player.chooseTarget('暗织：是否令一名非当前回合角色获得本回合进入弃牌堆的两张牌？',(card,player,target)=>{
							return target!=_status.currentPhase;
						}).set('ai',target=>{
							return get.effect(target,{name:'wuzhong'},_status.event.player);
						});
					}
					else event.finish();
					'step 2'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.line(target);
						var cards=[];
						game.getGlobalHistory('cardMove',evt=>{
							if(evt.name=='lose'&&evt.position==ui.discardPile||evt.name=='cardsDiscard'){
								cards.addArray(evt.cards.filterInD('d'));
							}
						});
						if(cards.length){
							player.chooseButton(['暗织：选择令'+get.translation(target)+'获得的牌',cards],true,Math.min(cards.length,2)).set('ai',button=>{
								var player=_status.event.player,target=_status.event.getParent().target;
								return get.sgnAttitude(player,target)*get.buttonValue(button);
							});
						}
					}else event.finish();
					'step 3'
					if(result.bool){
						target.gain(result.links,'gain2');
					}
				},
				ai:{
					combo:'dcxialei',
					order:function(item,player){
						if(player.countMark('dcxialei_clear')>=2) return 10;
						if(player.hasHistory('useSkill',evt=>evt.skill=='dcxialei')&&get.color(ui.cardPile.firstChild,player)=='red'&&player.countMark('dcxialei_clear')>0) return 9;
						return 1;
					},
					result:{
						player:function(player){
							return 1;
						}
					}
				},
				subSkill:{
					damage:{
						audio:'dcanzhi',
						trigger:{player:'damageEnd'},
						filter:function(event,player){
							return !player.hasSkill('dcanzhi_blocker');
						},
						check:function(event,player){
							return game.hasPlayer(current=>{
								return get.attitude(player,current)>0&&current!=_status.currentPhase;
							});
						},
						prompt2:'你判定，若结果为红色，你重置〖霞泪〗的观看牌数；若结果为黑色，〖暗织〗于本回合失效，然后你可以令一名非当前回合角色获得本回合进入弃牌堆的两张牌。',
						content:function(){
							event.setContent(lib.skill.dcanzhi.content);
							event.goto(0);
						}
					},
					blocker:{charlotte:true}
				}
			},
			//十周年王允
			dclianji:{
				enable:'phaseUse',
				audio:'wylianji',
				usable:1,
				check:function(card){
					return 5-get.value(card);
				},
				filterTarget:function(card,player,target){
					return target!=player;
				},
				filterCard:true,
				content:function(){
					'step 0'
					var card=get.cardPile2(function(card){
						return get.subtype(card)=='equip1'&&targets[0].hasUseTarget(card);
					});
					if(card){
						if(card.name=='qinggang'&&!lib.inpile.contains('qibaodao')){
							card.remove();
							card=game.createCard('qibaodao',card.suit,card.number);
						}
						targets[0].chooseUseTarget(card,true,'nopopup','nothrow');
					}
					else{
						player.chat('没有装备牌了吗');
						game.log('但是牌堆里已经没有装备牌了！');
					}
					'step 1'
					game.updateRoundNumber();
					targets[0].chooseToUse(get.translation(player)+'对你发动了【连计】',
						{name:'sha'}).set('targetRequired',true).set('complexSelect',true).set('filterTarget',function(card,player,target){
							if(target==_status.event.source) return false;
							return lib.filter.filterTarget.apply(this,arguments);
						}).set('addCount',false).set('source',player).set('prompt2','对除'+get.translation(player)+'外的一名角色使用一张【杀】，并将装备区内的武器牌交给其中一名目标角色；或点击“取消”，令'+get.translation(player)+'视为对你使用一张【杀】，并获得你装备区内的武器牌');
					'step 2'
					var card=targets[0].getEquips(1);
					if(result.bool){
						player.addSkill('dclianji_1');
						if(card.length&&result.targets.filter(target=>target.isIn()).length>0){
							event.card=card;
							targets[0].chooseTarget(true,'将'+get.translation(card)+'交给一名目标角色',(card,player,target)=>{
								return _status.event.targets.contains(target);
							}).set('ai',function(target){
								var card=_status.event.getParent().card[0];
								return (target.hasSkillTag('nogain')?0:get.attitude(_status.event.player,target))*Math.max(0.1,target.getUseValue(card));
							}).set('targets',result.targets);
						} else event.finish();
					}
					else{
						player.addSkill('dclianji_2');
						event.goto(4);
					}
					'step 3'
					targets[0].give(card,result.targets[0],'give');
					event.finish();
					'step 4'
					player.useCard({name:'sha',isCard:true},targets[0],false);
					'step 5'
					var card=targets[0].getEquips(1);
					if(card.length) targets[0].give(card,player,'give');
				},
				ai:{
					order:4,
					result:{
						target:function(player,target){
							if(game.countPlayer()==2) return -3;
							if(!target.getEquip(1)){
								if(game.hasPlayer(function(current){
									return current!=target&&!current.hasSkillTag('nogain')&&get.attitude(current,target)>0;
								})) return 3;
								return -3;
							}
							if(!game.hasPlayer(function(current){
								return current!=target&&!current.hasSkillTag('nogain')&&get.attitude(current,target)>0;
							})) return -6;
							return 4-get.value(target.getEquip(1));
						},
					},
				},
				subSkill:{
					1:{charlotte:true,onremove:true},
					2:{charlotte:true,onremove:true},
				}
			},
			dcmoucheng:{
				trigger:{player:'phaseZhunbeiBegin'},
				audio:'moucheng',
				forced:true,
				juexingji:true,
				skillAnimation:true,
				animationColor:'gray',
				derivation:'xinjingong',
				unique:true,
				filter:function(event,player){
					return player.hasSkill('dclianji_1')&&player.hasSkill('dclianji_2');
				},
				content:function(){
					player.awakenSkill('dcmoucheng');
					player.removeSkill('dclianji');
					game.log(player,'失去了技能','#g【连计】');
					player.addSkillLog('xinjingong');
				},
			},
			//周宣
			dcwumei:{
				audio:2,
				trigger:{player:'phaseBegin'},
				filter:function(event,player){
					return !player.hasSkill('dcwumei_used');
				},
				priority:10,//离谱的优先机制
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('dcwumei')).set('ai',target=>{
						return get.attitude(_status.event.player,target);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('dcwumei',target);
						player.addTempSkill('dcwumei_used','roundStart');
						target.insertPhase();
						target.addTempSkill('dcwumei_wake','phaseAfter');
						var targets=game.filterPlayer();
						if(!target.storage.dcwumei_wake) target.storage.dcwumei_wake=[[],[]];
						for(var targetx of targets){
							target.storage.dcwumei_wake[0].push(targetx);
							target.storage.dcwumei_wake[1].push(targetx.hp);
						}
						target.markSkill('dcwumei_wake');
						if(!trigger._finished){
							trigger.finish();
							trigger.untrigger(true);
							trigger._triggered=5;
							var evt=player.insertPhase();
							delete evt.skill;
						} 
					}
				},
				subSkill:{
					used:{charlotte:true},
					wake:{
						trigger:{player:'phaseJieshuBegin'},
						charlotte:true,
						popup:false,
						forced:true,
						onremove:true,
						filter:function(event,player){
							return player.storage.dcwumei_wake&&player.storage.dcwumei_wake.length;
						},
						content:function(){
							var storage=player.storage.dcwumei_wake;
							for(var i=0;i<storage[0].length;i++){
								var target=storage[0][i];
								if(target&&target.isIn()){
									if(target.hp!=storage[1][i]){
										game.log(target,'将体力从',get.cnNumber(target.hp,true),'改为',get.cnNumber(storage[1][i],true));
										target.changeHp(storage[1][i]-target.hp)._triggered=null;
									}
								}
							}
							player.removeSkill('dcwumei_wake');
						},
						marktext:'寐',
						intro:{
							markcount:function(storage,player){
								if(!storage||!storage.length) return 0;
								return storage[0].length;
							},
							content:function(storage,player){
								if(!storage||!storage.length) return '无信息';
								var str='所有角色于回合开始时的体力值：<br>';
								for(var i=0;i<storage[0].length;i++){
									var str2=get.translation(storage[0][i])+'：'+storage[1][i];
									if(!storage[0][i].isIn()) str2='<span style="opacity:0.5">'+str2+'（已故）</span>';
									str+='<li>'+str2;
								}
								return str;
							}
						},
						ai:{
							effect:{
								player_use:function(card,player,target){
									if(get.tag(card,'damage')) return 0.5;
								},
								target:function(card,player,target){
									if(_status.event.type!='phase') return;
									if (get.tag(card,'recover')){
										return [1,1-target.hp];
									}
								}
							}
						}
					}
				}
			},
			dczhanmeng:{
				audio:2,
				trigger:{player:'useCard'},
				filter:function(event,player){
					return !player.hasSkill('dczhanmeng_choice1')||!player.hasSkill('dczhanmeng_choice2')||
						!player.hasSkill('dczhanmeng_choice0')&&!game.hasPlayer2(current=>{
							var history=current.actionHistory;
							if(history.length<2) return false;
							var list=history[history.length-2].useCard.map(evt=>evt.card.name);
							if(list.contains(event.card.name)) return true;
							return false;
						});
				},
				direct:true,
				content:function(){
					'step 0'
					var list=[];
					var choiceList=[
						'上回合若没有同名牌被使用过，你获得一张非伤害牌',
						'下回合当同名牌首次被使用后，你获得一张伤害牌',
						'令一名其他角色弃置两张牌，若点数之和大于10，你对其造成1点火焰伤害'
					];
					var used=game.hasPlayer2(current=>{
						var history=current.actionHistory;
						if(history.length<2) return false;
						var list=history[history.length-2].useCard.map(evt=>evt.card.name);
						if(list.contains(trigger.card.name)) return true;
						return false;
					});
					if(!player.hasSkill('dczhanmeng_choice0')&&!used) list.push('选项一');
					else choiceList[0]='<span style="opacity:0.5; ">'+choiceList[0]+(used?'（同名牌被使用过）':'（已选择）')+'</span>';
					if(!player.hasSkill('dczhanmeng_choice1')) list.push('选项二');
					else choiceList[1]='<span style="opacity:0.5">'+choiceList[1]+'（已选择）</span>';
					var other=game.hasPlayer(current=>current!=player);
					if(!player.hasSkill('dczhanmeng_choice2')&&other) list.push('选项三');
					else choiceList[2]='<span style="opacity:0.5">'+choiceList[2]+(!other?'（没人啦）':'（已选择）')+'</span>';
					list.push('cancel2');
					player.chooseControl(list).set('prompt',get.prompt('dczhanmeng')).set('ai',()=>{
						var choices=_status.event.controls.slice().remove('cancel2');
						var player=_status.event.player,evt=_status.event.getTrigger();
						if(!game.hasPlayer(current=>get.attitude(player,current)<0)) choices.remove('选项三');
						else if(choices.contains('选项三')) return '选项三';
						if(choices.contains('选项二')){
							if(evt.card.name=='sha') return '选项二';
							if(get.type(evt.card,null,false)=='equip') choices.remove('选项二');
						}
						if(!choices.length) return 'cancel2';
						return choices.randomGet();
					}).set('choiceList',choiceList);
					'step 1'
					if(result.control=='cancel2'){event.finish();return;}
					if(result.control=='选项一'){
						player.logSkill('dczhanmeng');
						game.log(player,'选择了','#y'+result.control);
						player.addTempSkill('dczhanmeng_choice0');
						var card=get.cardPile2(card=>{
							return !get.tag(card,'damage');
						});
						if(card) player.gain(card,'gain2');
						event.finish();
					}
					else if(result.control=='选项二'){
						player.logSkill('dczhanmeng');
						game.log(player,'选择了','#y'+result.control);
						player.addTempSkill('dczhanmeng_choice1');
						trigger['dczhanmeng_'+player.playerid]=true;
						player.addSkill('dczhanmeng_delay');
						event.finish();
					}
					else{
						player.addTempSkill('dczhanmeng_choice2');
						player.chooseTarget('占梦：令一名其他角色弃置两张牌',lib.filter.notMe,true).set('ai',target=>{
							var player=_status.event.player;
							var eff1=get.effect(target,{name:'guohe_copy2'},player,player)+0.1;
							var eff2=get.damageEffect(target,player,player,'fire')+0.1;
							if(eff1<0&&eff2<0) return -eff1*eff2;
							return eff1*eff2;
						});
					}
					'step 2'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('dczhanmeng',target);
						game.log(player,'选择了','#y选项三');
						target.chooseToDiscard(2,'he',true);
					} else event.finish();
					'step 3'
					if(result.bool){
						var cards=result.cards;
						var num=0;
						for(var card of cards){
							num+=get.number(card,false);
						}
						if(num>10){
							player.line(target,'fire');
							target.damage('fire');
						}
					}
				},
				ai:{threaten:8},
				subSkill:{
					delay:{
						trigger:{global:['useCardAfter','phaseBeginStart']},
						charlotte:true,
						forced:true,
						popup:false,
						filter:function(event,player,name){
							var history=player.actionHistory;
							if(history.length<2) return false;
							var list=history[history.length-2].useCard;
							if(name=='phaseBeginStart'){
								return !list.some(evt=>evt['dczhanmeng_'+player.playerid]);
							}
							for(var evt of list){
								if(evt['dczhanmeng_'+player.playerid]&&event.card.name==evt.card.name&&game.getGlobalHistory('useCard',evtx=>{
									return evtx.card.name==event.card.name;
								}).indexOf(event)==0) return true;
							}
							return false;
						},
						content:function(){
							if(event.triggername!='phaseBeginStart'){
								player.logSkill('dczhanmeng_delay');
								var card=get.cardPile2(card=>{
									return get.tag(card,'damage');
								});
								if(card) player.gain(card,'gain2');
							}
							else player.removeSkill('dczhanmeng_delay');
						}
					},
					choice0:{charlotte:true},
					choice1:{charlotte:true},
					choice2:{charlotte:true},
				}
			},
			//程秉
			dcjingzao:{
				audio:2,
				enable:'phaseUse',
				filter:function(event,player) {
					return !player.hasSkill('dcjingzao_ban')&&game.hasPlayer(current=>lib.skill.dcjingzao.filterTarget(null,player,current));
				},
				filterTarget:function(card,player,target){
					return player!=target&&!target.hasSkill('dcjingzao_temp');
				},
				content:function(){
					'step 0'
					target.addTempSkill('dcjingzao_temp');
					var cards=game.cardsGotoOrdering(get.cards(3+player.countMark('dcjingzao_add'))).cards;
					event.cards=cards;
					game.log(player,'亮出了',event.cards);
					event.videoId=lib.status.videoId++;
					game.broadcastAll(function(player,target,id,cards){
						var str=get.translation(player)+'对'+(target==game.me?'你':get.translation(target))+'发动了【经造】';
						var dialog=ui.create.dialog(str,cards);
						dialog.videoId=id;
					},player,target,event.videoId,event.cards);
					game.addVideo('showCards',player,[get.translation(player)+'发动了【经造】',get.cardsInfo(event.cards)]);
					game.delay(cards.length-1);
					'step 1'
					target.chooseToDiscard('he').set('prompt',false).set('filterCard',card=>{
						var names=_status.event.getParent().cards.map(i=>i.name);
						return names.contains(get.name(card));
					}).set('ai',card=>{
						var target=_status.event.player,player=_status.event.getParent().player;
						var att=get.attitude(target,player),val=get.value(card);
						if(!lib.skill.dcjingzao.filter(null,player)){
							if(att>0) return 0;
							return 6-val;
						}
						else{
							if(att>0) return 4-val;
							return 0;
						}
					});
					var update=function(id,source){
						var dialog=get.idDialog(id);
						if(dialog){
							var div=ui.create.div('',dialog.content,1);
							var name=get.translation(source);
							div.innerHTML='弃置一张满足条件的牌，然后'+name+'〖经造〗本回合亮出牌数+1；或点“取消”令'+name+'随机获得每种牌名的牌各一张，且〖经造〗本回合失效';
							ui.update();
						}
					};
					if(target==game.me) update(event.videoId,player);
					else if(target.isOnline()) target.send(update,event.videoId,player);
					'step 2'
					game.broadcastAll('closeDialog',event.videoId);
					if(result.bool){
						player.addTempSkill('dcjingzao_add');
						player.addMark('dcjingzao_add',1,false);
					}
					else{
						var cards=cards.randomSort(),cards2=[];
						for(var card of cards){
							if(!cards2.map(i=>i.name).contains(card.name)) cards2.push(card);
						}
						if(cards2.length) player.gain(cards2,'gain2');
						player.addTempSkill('dcjingzao_ban');
					}
				},
				ai:{
					order:7,
					result:{
						player:1,
					}
				},
				subSkill:{
					add:{charlotte:true,onremove:true},
					ban:{charlotte:true},
					temp:{charlotte:true}
				}
			},
			dcenyu:{
				audio:2,
				trigger:{target:'useCardToTargeted'},
				forced:true,
				filter:function(event,player){
					return event.player!=player&&game.hasPlayer2(current=>{
						return current.hasHistory('useCard',evt=>{
							return evt.card.name==event.card.name&&evt!=event.getParent()&&evt.targets&&evt.targets.contains(player);
						});
					});
				},
				content:function(){
					trigger.getParent().excluded.add(player);
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(player==target) return;
							if(game.hasPlayer2(current=>{
								return current.hasHistory('useCard',evt=>evt.card.name==card.name&&evt.targets&&evt.targets.contains(player));
							})) return 'zerotarget';
						}
					}
				}
			},
			//董贵人
			dclianzhi:{
				audio:2,
				trigger:{player:'dying'},
				usable:1,
				forced:true,
				locked:false,
				derivation:'dcshouze',
				group:['dclianzhi_connect','dclianzhi_reproach'],
				filter:function(event,player){
					return player.getStorage('dclianzhi').filter(i=>i&&i.isIn()).length;
				},
				content:function(){
					player.recover();
					game.asyncDraw([player].concat(player.getStorage('dclianzhi').filter(i=>i&&i.isIn())).sortBySeat());
				},
				ai:{
					threaten:0.6,
				},
				subSkill:{
					connect:{
						audio:'dclianzhi',
						trigger:{
							player:'enterGame',
							global:'phaseBefore',
						},
						forced:true,
						direct:true,
						filter:function(event,player){
							return game.hasPlayer(current=>current!=player)&&(event.name!='phase'||game.phaseNumber==0);
						},
						content:function(){
							'step 0'
							player.chooseTarget('连枝：请选择一名其他角色',lib.translate.dclianzhi_info,true,(card,player,target)=>{
								return target!=player&&!player.getStorage('dclianzhi').contains(target);
							}).set('ai',target=>{
								var att=get.attitude(_status.event.player,target);
								if(att>0) return att+1;
								if(att==0) return Math.random();
								return att;
							}).set('animate',false);
							'step 1'
							if(result.bool){
								var target=result.targets[0];
								player.logSkill('dclianzhi');
								player.markAuto('dclianzhi',[target]);
							}
						},
					},
					reproach:{
						audio:'dclianzhi',
						trigger:{global:'dieAfter'},
						filter:function(event,player){
							return player.getStorage('dclianzhi').contains(event.player);
						},
						direct:true,
						content:function(){
							'step 0'
							var num=Math.max(1,player.countMark('dclingfang'));
							player.chooseTarget(get.prompt('dclianzhi'),'选择一名其他角色，你与其各获得〖受责〗，且其获得'+num+'枚“绞”标记',(card,player,target)=>{
								return target!=player;
							}).set('ai',target=>-get.attitude(_status.event.player,target));
							'step 1'
							if(result.bool){
								var target=result.targets[0];
								player.logSkill('dclianzhi_reproach',target);
								player.addSkillLog('dcshouze');
								target.addSkillLog('dcshouze');
								target.addMark('dclingfang',Math.max(1,player.countMark('dclingfang')));
							}
						},
					}
				}
			},
			dclingfang:{
				audio:2,
				trigger:{
					player:'phaseZhunbeiBegin',
					global:'useCardAfter',
				},
				forced:true,
				filter:function(event,player){
					if(event.name!='useCard') return true;
					if(get.color(event.card)!='black') return false;
					if(event.player==player) return !event.targets||!event.targets.contains(player);
					return event.targets&&event.targets.contains(player);
				},
				content:function(){
					player.addMark('dclingfang',1);
				},
				marktext:'绞',
				intro:{
					name:'绞',
					name2:'绞',
					content:'mark'
				}
			},
			dcfengying:{
				audio:2,
				enable:'chooseToUse',
				group:'dcfengying_record',
				locked:false,
				filter:function(event,player){
					var mark=player.countMark('dclingfang');
					if(mark<=0||!player.hasCard(card=>get.number(card)<=mark,'hs')) return false;
					var storage=player.getStorage('dcfengying');
					if(!storage.length) return false;
					var storage2=player.getStorage('dcfengying_used')
					return storage.some(name=>{
						return !storage2.contains(name)&&event.filterCard({name:name},player,event);
					});
				},
				hiddenCard:function(player,name){
					var list=player.getStorage('dcfengying');
					if(player.getStorage('dcfengying_used').contains(name)) return false;
					return list.contains(name)&&player.hasCard((card)=>(get.number(card)<=player.countMark('dclingfang')),'hs');
				},
				chooseButton:{
					dialog:function(event,player){
						var list=[];
						for(var name of player.storage.dcfengying){
							if(get.type(name)=='basic') list.push(['基本','',name]);
							if(get.type(name)=='trick') list.push(['锦囊','',name]);
						}
						return ui.create.dialog('风影',[list,'vcard']);
					},
					filter:function(button,player){
						var card={name:button.link[2],storage:{dcfengying:true}};
						if(player.getStorage('dcfengying_used').contains(card.name)) return false;
						return _status.event.getParent().filterCard(card,player,_status.event.getParent());
					},
					check:function(button){
						var player=_status.event.player;
						if(player.countCards('hs',button.link[2])>0) return 0;
						if(button.link[2]=='wugu') return;
						var effect=player.getUseValue(button.link[2]);
						if(effect>0) return effect;
						return 0;
					},
					backup:function(links,player){
						return {
							filterCard:function(card,player,event){
								return get.number(card)<=player.countMark('dclingfang');
							},
							audio:'dcfengying',
							selectCard:1,
							popname:true,
							check:function(card){
								return 6-get.value(card)+get.number(card)/15;
							},
							position:'hs',
							viewAs:{
								name:links[0][2],
								storage:{dcfengying:true},
							},
							precontent:function(){
								player.logSkill('dcfengying');
								player.addTempSkill('dcfengying_used');
								player.markAuto('dcfengying_used',[event.result.card.name]);
								event.getParent().addCount=false;
								delete event.result.skill;
							}
						}
					},
					prompt:function(links,player){
						return '将一张点数不大于'+get.strNumber(player.countMark('dclingfang'))+'的手牌当做'+get.translation(links[0][2])+'使用（无距离和次数限制）';
					}
				},
				mod:{
					targetInRange:function(card){
						if(card.storage&&card.storage.dcfengying) return true;
					},
					cardUsable:function(card,player){
						if(card.storage&&card.storage.dcfengying) return Infinity;
					},
				},
				ai:{
					order:4,
					result:{
						player:function(player){
							if(_status.event.dying) return get.attitude(player,_status.event.dying);
							return 1;
						}
					},
					threaten:2,
				},
				subSkill:{
					record:{
						trigger:{global:'phaseBegin'},
						filter:function(event,player){
							return ui.discardPile.childNodes.length>0;
						},
						forced:true,
						popup:false,
						content:function(){
							player.storage.dcfengying=[];
							for(var i=0;i<ui.discardPile.childNodes.length;i++){
								var card=ui.discardPile.childNodes[i];
								if(get.color(card,false)!='black') continue;
								if(!['basic','trick'].contains(get.type(card))) continue;
								player.storage.dcfengying.add(card.name);
							}
							player.storage.dcfengying.sort((a,b)=>{
								return lib.inpile.indexOf(a)-lib.inpile.indexOf(b);
							});
						}
					},
					used:{
						charlotte:true,
						onremove:true,
						intro:{
							content:'已使用过$',
						},
					},
				}
			},
			dcshouze:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				forced:true,
				filter:function(event,player){
					return player.countMark('dclingfang')>0;
				},
				content:function(){
					'step 0'
					player.removeMark('dclingfang',1);
					'step 1'
					var card=get.discardPile(card=>get.color(card,false)=='black');
					if(card) player.gain(card,'gain2');
					player.loseHp();
				}
			},
			//袁姬
			dcmengchi:{
				audio:'dcfangdu',
				trigger:{player:['linkBefore','damageEnd']},
				forced:true,
				filter:function(event,player){
					var num=player.getStat('gain');
					if(num&&num>0) return false;
					if(event.name=='link') return !player.isLinked();
					return event.hasNature();
				},
				content:function(){
					if(trigger.name=='link') trigger.cancel();
					else player.recover();
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(get.itemtype(player)!='player'||player._dcmengchi_aiChecking||target.getStat('gain')) return;
							if(card.name=='tiesuo'&&!target.isLinked()) return 0;
							if(player.hasSkillTag('jueqing',false,target)) return;
							if(!get.tag(card,'damage')||get.tag(card,'natureDamage')) return;
							if(target.hp<=1) return 0.75;
							if(!target.hasSkillTag('filterDamage',null,{
								player:player,
								card:card
							})&&player.hasSkillTag('damageBonus',false,{
								target:target,
								card:card
							})){
								if(target.hp>2) return 0.5;
								return 0.75;
							}
							if(get.attitude(player,target)>0) return [0,0];
							var sha=player.getCardUsable({name:'sha'});
							player._dcmengchi_aiChecking=true;
							var num=player.countCards('h',function(card){
								if(get.name(card)=='sha'){
									if(sha==0) return false;
									else sha--;
								}
								return player.canUse(card,target)&&get.effect(target,card,player,player)>0;
							});
							delete player._dcmengchi_aiChecking;
							if(player.hasSkillTag('damage')) num++;
							if(num<2) return [0,0];
						},
					},
				},
				mod:{
					cardEnabled:function(card,player){
						if(!player.getStat('gain')) return false;
					},
					cardSavable:function(card,player){
						if(!player.getStat('gain')) return false;
					},
				},
			},
			dcfangdu:{
				audio:2,
				trigger:{
					player:'damageEnd',
				},
				forced:true,
				filter:function(event,player){
					if(player==_status.currentPhase) return false;
					return !event.hasNature()&&!player.hasHistory('damage',evt=>{
						return !evt.hasNature()&&evt!=event;
					},event)||event.hasNature()&&!player.hasHistory('damage',evt=>{
						return evt.hasNature()&&evt!=event;
					},event)&&event.source&&event.source.isIn()&&event.source.countGainableCards(player,'h');
				},
				content:function(){
					'step 0'
					if(!trigger.hasNature()){
						player.recover();
					}
					else{
						var cards=trigger.source.getGainableCards(player,'h');
						if(cards.length){
							player.gain(cards.randomGet(),trigger.source,'giveAuto','bySelf');
						}
					}
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(player._dcfangdu_aiChecking||target==_status.currentPhase) return;
							if(!get.tag(card,'damage')||player.hasSkillTag('jueqing',false,target)) return;
							if(_status.event.getParent('useCard',true)||_status.event.getParent('_wuxie',true)) return;
							if(!get.tag(card,'natureDamage')){
								if(target.hasHistory('damage',evt=>!evt.hasNature())) return 1.5;
								else if(target.hp<=1||player.hasSkillTag('damageBonus',false,{
									target:target,
									card:card
								})&&!target.hasSkillTag('filterDamage',null,{
									player:player,
									card:card
								})) return 0.75;
								else{
									if(get.attitude(player,target)>0) return [0,0];
									var sha=player.getCardUsable({name:'sha'});
									player._dcfangdu_aiChecking=true;
									var num=player.countCards('h',function(card){
										if(get.name(card)=='sha'){
											if(sha==0) return false;
											else sha--;
										}
										return player.canUse(card,target)&&get.effect(target,card,player,player)>0;
									});
									delete player._dcfangdu_aiChecking;
									if(player.hasSkillTag('damage')) num++;
									if(num<2) return [0,0];
								}
							}
							if(get.tag(card,'natureDamage')&&!target.hasHistory('damage',evt=>evt.hasNature())&&player.countCards('he')>1) return [1,1,1,-1];
						}
					}
				}
			},
			dcjiexing:{
				audio:2,
				trigger:{player:['recoverEnd','damageEnd','loseHpEnd']},
				check:function(event,player){
					var current=_status.currentPhase;
					if(!player.hasSkill('dcmengchi')||get.attitude(player,current)>=0) return true;
					var num=player.getStat('gain');
					if(num&&num>0) return true;
					if(current.countCards('hs',card=>current.canUse(card,player)&&get.effect(player,card,current,player)<0)>=2) return false;
					return true;
				},
				frequent:'check',
				content:function(){
					player.draw().gaintag=['dcjiexing'];
					player.addTempSkill('dcjiexing_add');
				},
				subSkill:{
					add:{
						charlotte:true,
						mod:{
							ignoredHandcard:function(card,player){
								if(card.hasGaintag('dcjiexing')) return true;
							},
							cardDiscardable:function(card,player,name){
								if(name=='phaseDiscard'&&card.hasGaintag('dcjiexing')) return false;
							},
						},
						onremove:function(player){
							player.removeGaintag('dcjiexing');
						},
					}
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'recover')) return [1,1];
							if(get.tag(card,'damage')){
								var draw=0.9;
								if(target.hasSkill('dcmengchi')&&target.getStat('gain')) draw=1.8;
								if(target.hp<=1||card.name=='sha'&&player.hasSkill('jiu')||get.itemtype(player)=='player'&&!target.hasSkillTag('filterDamage',null,{
									player:player,
									card:card
								})&&player.hasSkillTag('damageBonus',false,{
									target:target,
									card:card
								})){
									if(target.hp>2) return [1,draw];
									return;
								}
								return [1,draw];
							}
						}
					}
				}
			},
			//朱建平
			olddcxiangmian:{
				audio:'dcxiangmian',
				trigger:{global:'phaseJieshuBegin'},
				filter:function(event,player){
					return !player.getStorage('olddcxiangmian').contains(event.player)&&player!=event.player;
				},
				logTarget:'player',
				check:function(event,player){
					return get.attitude(player,event.player)<0;
				},
				content:function(){
					'step 0'
					player.judge(card=>2/Math.sqrt(get.number(card,false))).set('judge2',result=>result.bool);
					'step 1'
					player.markAuto('olddcxiangmian',[trigger.player]);
					trigger.player.addSkill('olddcxiangmian_countdown');
					if (!trigger.player.storage['olddcxiangmian_countdown']) trigger.player.storage['olddcxiangmian_countdown'] = [];
					[player.playerid, result.suit, result.number].forEach(i => trigger.player.storage['olddcxiangmian_countdown'].push(i));
					trigger.player.markSkill('olddcxiangmian_countdown');
				},
				intro:{content:'已对$发动过技能'},
				ai:{
					expose:0.3,
				},
				subSkill:{
					countdown:{
						trigger:{player:'useCardAfter'},
						mark:true,
						marktext:'噬',
						silent:true,
						forced:true,
						charlotte:true,
						intro:{
							markcount:function(storage){
								if(storage){
									var list=storage.filter((_,i)=>i%3==2);
									return Math.min.apply(null,list);
								}
							},
							content:function(storage,player){
								var str='使用'
								for(var i=0;i<storage.length/3;i++){
									str+=get.cnNumber(storage[i*3+2])+'张'+get.translation(storage[i*3+1])+'牌、';
								}
								str=str.slice(0,-1);
								str+='后，失去等同于体力值的体力';
								return str;
							},
						},
						filter:function(event,player){
							if(!player.getStorage('olddcxiangmian_countdown').length) return false;
							return (player.getStorage('olddcxiangmian_countdown').filter((_,i)=>i%3==1)).contains(get.suit(event.card,player));
						},
						content:function(){
							'step 0'
							var storage=player.getStorage('olddcxiangmian_countdown');
							for(var i=0;i<storage.length/3;i++){
								if(storage[i*3+1]==get.suit(trigger.card,player)){
									storage[i*3+2]--;
								}
							}
							player.markSkill('olddcxiangmian_countdown');
							'step 1'
							var storage=player.getStorage('olddcxiangmian_countdown');
							for(var i=0;i<storage.length/3;i++){
								if(storage[i*3+2]<=0){
									if(!event.isMine()&&!event.isOnline()) game.delayx();
									player.logSkill('olddcxiangmian_countdown');
									var target=(_status.connectMode?lib.playerOL:game.playerMap)[i];
									player.storage['olddcxiangmian_countdown'].splice(i*3,3);
									if(!player.getStorage('olddcxiangmian_countdown').length){
										player.removeSkill('olddcxiangmian_countdown');
									}
									if(player.hp>0) player.loseHp(player.hp);
									i--;
								}
							}
						},
						ai:{
							effect:{
								player_use:function(card,player,target){
									if(typeof card!='object') return;
									var storage=player.getStorage('olddcxiangmian_countdown');
									for(var i=0;i<storage.length/3;i++){
										if(get.suit(card,player)==storage[i*3+1]&&storage[i*3+2]==1&&!player.canSave(player)&&!get.tag(card,'save'))
											return 'zeroplayertarget';
									}
								},
							},
						}
					}
				}
			},
			dcxiangmian:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return game.hasPlayer(current=>lib.skill.dcxiangmian.filterTarget(null,player,current));
				},
				filterTarget:function(card,player,target){
					return !player.getStorage('dcxiangmian').contains(target)&&player!=target;
				},
				content:function(){
					'step 0'
					target.judge(card=>-2/Math.sqrt(get.number(card,false))).set('judge2',result=>result.bool===false?true:false);
					'step 1'
					player.markAuto('dcxiangmian',[target]);
					target.addSkill('dcxiangmian_countdown');
					if (!target.storage['dcxiangmian_countdown']) target.storage['dcxiangmian_countdown']=[];
					[player.playerid,result.suit,result.number].forEach(i=>target.storage['dcxiangmian_countdown'].push(i));
					target.markSkill('dcxiangmian_countdown');
				},
				intro:{content:'已对$发动过技能'},
				ai:{
					expose:0.3,
					order:10,
					result:{target:-5}
				},
				subSkill:{
					countdown:{
						trigger:{player:'useCardAfter'},
						mark:true,
						marktext:'💀',
						silent:true,
						forced:true,
						charlotte:true,
						intro:{
							markcount:function(storage){
								if(storage){
									var list=storage.filter((_,i)=>i%3==2);
									return Math.min.apply(null,list);
								}
							},
							content:function(storage,player){
								if(!storage) return;
								var str='使用';
								str+=get.cnNumber(Math.min.apply(null,storage.filter((_,i)=>i%3==2)))+'张牌后，或使用一张';
								for(var i=0;i<storage.length/3;i++){
									str+=get.translation(storage[i*3+1])+'、';
								}
								str=str.slice(0,-1);
								str+='后，失去等同于体力值的体力';
								return str;
							},
						},
						filter:function(event,player){
							if(!player.getStorage('dcxiangmian_countdown').length) return false;
							//return (player.getStorage('dcxiangmian_countdown').filter((_,i)=>i%3==1)).contains(get.suit(event.card,player));
							return true;
						},
						content:function(){
							'step 0'
							var storage=player.getStorage('dcxiangmian_countdown');
							for(var i=0;i<storage.length/3;i++){
								if(storage[i*3+1]==get.suit(trigger.card,player)){
									storage[i*3+2]=0;
								}
								else storage[i*3+2]--;
							}
							player.markSkill('dcxiangmian_countdown');
							'step 1'
							var storage=player.getStorage('dcxiangmian_countdown');
							for(var i=0;i<storage.length/3;i++){
								if(storage[i*3+2]<=0){
									if(!event.isMine()&&!event.isOnline()) game.delayx();
									player.logSkill('dcxiangmian_countdown');
									player.storage['dcxiangmian_countdown'].splice(i*3,3);
									if(!player.getStorage('dcxiangmian_countdown').length){
										player.removeSkill('dcxiangmian_countdown');
									}
									if(player.hp>0) player.loseHp(player.hp);
									i--;
								}
							}
						},
						ai:{
							effect:{
								player_use:function(card,player,target){
									if(typeof card!='object') return;
									var storage=player.getStorage('dcxiangmian_countdown');
									for(var i=0;i<storage.length/3;i++){
										if((storage[i*3+2]==1||get.suit(card,player)==storage[i*3+1])&&!player.canSave(player)&&!get.tag(card,'save'))
											return 'zeroplayertarget';
									}
								},
							},
						}
					}
				}
			},
			dctianji:{
				audio:2,
				trigger:{global:'cardsDiscardAfter'},
				forced:true,
				filter:function(event,player){
					var evt=event.getParent().relatedEvent;
					return evt&&evt.name=='judge'&&event.cards.filterInD('d').length;
				},
				content:function(){
					var card=trigger.cards[0],cards=[],func=['type2','suit','number'];
					for(var fn of func){
						var cardx=get.cardPile2(cardxx=>{
							if(get[fn](card,player)==get[fn](cardxx,player)&&!cards.contains(cardxx)){
								return true;
							}
						});
						if(cardx) cards.push(cardx);
					}
					/*if(cards.length&&!player.isMaxHandcard(true)) player.draw();
					else*/ if(cards.length) player.gain(cards,'gain2')
				}
			},
			//赵直
			dctongguan:{
				trigger:{
					global:'phaseBegin',
				},
				filter:function(event,player){
					return event.player.phaseNumber==1&&lib.skill.dctongguan.derivation.some(i=>{
						return (player.getStorage('dctongguan')[i]||0)<2;
					});
				},
				forced:true,
				locked:false,
				logTarget:'player',
				derivation:['dctongguan_wuyong','dctongguan_gangying','dctongguan_duomou','dctongguan_guojue','dctongguan_renzhi'],
				content:function(){
					'step 0'
					var skills=lib.skill.dctongguan.derivation.slice();
					player.chooseControl(skills.filter(i=>{
						return (player.getStorage('dctongguan')[i]||0)<2;
					})).set('choiceList',skills.map(i=>{
						var info='';
						switch (player.getStorage('dctongguan')[i]){
							case 1:
								info=' style="opacity:0.65;"';
								break;
							case 2:
								info=' style="text-decoration:line-through; opacity:0.3;"';
								break;
						}
						return '<div class="skill">「'+get.translation(lib.translate[i+'_ab']||get.translation(i).slice(0,2))+'」</div>' +
							'<div'+info+'>'+get.skillInfoTranslation(i,player)+'（已选过'+get.cnNumber(player.getStorage('dctongguan')[i]||0)+'次）'+'</div>';
					})).set('displayIndex',false).set('prompt','统观：为'+get.translation(trigger.player)+'选择一个属性').set('ai',function(){
						var controls=_status.event.controls,target=_status.event.getTrigger().player;
						var str=target.getSkills(null,false,false).map(i=>get.skillInfoTranslation(i)).join('');
						var choices=[];
						if(controls.contains('dctongguan_wuyong')&&/你对\S{1,15}造成\S{1,10}伤害/.test(str)) choices.push('dctongguan_wuyong');
						if(controls.contains('dctongguan_gangying')&&/回复\S{1,5}体力/.test(str)&&_status.event.player.getFriends().length) choices.push('dctongguan_gangying');
						if(controls.contains('dctongguan_duomou')&&/你(可|可以)?摸\S{1,3}张牌/.test(str)) choices.push('dctongguan_duomou');
						if(controls.contains('dctongguan_guojue')&&/(当【过河拆桥】使用|((弃置|获得)\S{1,5}其他角色\S{1,7}牌|))/.test(str)) choices.push('dctongguan_guojue');
						if(controls.contains('dctongguan_renzhi')&&/交给\S{0,5}其他角色/.test(str)&&_status.event.player.getFriends().length) choices.push('dctongguan_renzhi');
						if(choices.length) return choices.randomGet();
						return _status.event.controls.randomGet();
					});
					'step 1'
					if(result.control){
						var skill=result.control;
						var func=lib.skill.dctongguan.localMark;
						if(event.player==game.me) func(skill,trigger.player)
						else if(event.isOnline()) player.send(func,skill,trigger.player)
						// game.log(player,'为',trigger.player,'选择了','#g「'+get.translation(skill)+'」','属性');
						game.log(player,'为',trigger.player,'选择了','#g一个属性');
						// player.popup(skill);
						trigger.player.addSkill(skill);
						if(!player.storage.dctongguan) player.storage.dctongguan={};
						if(!player.storage.dctongguan[skill]) player.storage.dctongguan[skill]=0;
						player.storage.dctongguan[skill]++;
					}
				},
				localMark:function(skill,player){
					var name=skill,info;
					if(player.marks[name]) player.updateMarks();
					if(lib.skill[name]) info=lib.skill[name].intro;
					if(!info) return;
					if(player.marks[name]) player.marks[name].info=info;
					else player.marks[name]=player.mark(name,info);
					player.updateMarks();
				},
				subSkill:{
					forceFinish:{charlotte:true},
					wuyong:{
						marktext:'勇',
						intro:{
							name:'武勇',
							content:'属性目标：造成伤害',
						},
						charlotte:true,
						silent:true,
						nopop:true,
					},
					gangying:{
						marktext:'刚',
						intro:{
							name:'刚硬',
							content:'属性目标：回复体力，或于得到牌后手牌数大于体力值',
						},
						charlotte:true,
						silent:true,
						forced:true,
						nopop:true,
						lastDo:true,
						trigger:{player:'gainEnd'},
						filter:function(event,player){
							return player.countCards('h')>player.hp;
						},
						content:function(){
							trigger._dctongguan_gangying=true;
						},
					},
					duomou:{
						marktext:'谋',
						intro:{
							name:'多谋',
							content:'属性目标：于摸牌阶段外摸牌',
						},
						charlotte:true,
						silent:true,
						nopop:true,
					},
					guojue:{
						marktext:'决',
						intro:{
							name:'果决',
							content:'属性目标：弃置或获得其他角色牌',
						},
						charlotte:true,
						silent:true,
						nopop:true,
					},
					renzhi:{
						marktext:'仁',
						intro:{
							name:'仁智',
							content:'属性目标：交给其他角色牌',
						},
						charlotte:true,
						silent:true,
						nopop:true,
					},
				}
			},
			dcmengjie:{
				trigger:{
					global:'phaseEnd',
				},
				forced:true,
				direct:true,
				locked:false,
				filter:function(event,player){
					var target=event.player;
					if((target.hasSkill('dctongguan_gangying')&&(target.hasHistory('gain',function(evt){
						return evt._dctongguan_gangying==true;
					})||game.getGlobalHistory('changeHp',function(evt){
						return evt.player==target&&(evt.getParent().name=='recover'||target.countCards('h')>target.hp);
					}).length>0)) ||
						target.hasSkill('dctongguan_wuyong')&&target.getHistory('sourceDamage').length ||
						target.hasSkill('dctongguan_duomou')&&target.getHistory('gain',evt=>evt.getParent().name=='draw'&&evt.getParent('phaseDraw').name!='phaseDraw').length){
						return true;
					}
					var guojue=false,renzhi=false;
					game.countPlayer2(current=>{
						if(current==target) return false;
						if(!guojue&&current.hasHistory('lose',evt=>{
							if(evt.type=='discard'){
								if((evt.discarder||evt.getParent(2).player)!=target) return false;
								if(!evt.getl(current).cards2.length) return false;
								return true;
							}
							else if(evt.type=='gain'){
								var evtx=evt.getParent();
								if(evtx.giver||evtx.getParent().name=='gift') return false;
								var cards=evtx.getg(target);
								if(!cards.length) return false;
								var cards2=evtx.getl(current).cards2;
								for(var card of cards2){
									if(cards.contains(card)) return true;
								}
							}
							return false;
						})) guojue=true;
						if(!renzhi&&current.hasHistory('gain',evt=>{
							if(evt.giver!=target||evt.getParent().name=='gift') return false;
							return evt.cards.length;
						})) renzhi=true;
					});
					return target.hasSkill('dctongguan_guojue')&&guojue||target.hasSkill('dctongguan_renzhi')&&renzhi;
				},
				rules:[
					(target)=>target.getHistory('sourceDamage').length,
					(target)=>target.hasHistory('gain',function(evt){
						return evt._dctongguan_gangying;
					})||game.getGlobalHistory('changeHp',function(evt){
						return evt.player==target&&evt.getParent().name=='recover';
					}).length>0||target.countCards('h')>target.hp,
					(target)=>target.getHistory('gain',evt=>evt.getParent().name=='draw'&&evt.getParent('phaseDraw').name!='phaseDraw').length,
					(target,bool)=>bool,
					(target,bool)=>bool
				],
				content:function(){
					'step 0'
					event.nowProperty=0;
					var target=trigger.player;
					var guojue=false,renzhi=false;
					game.countPlayer2(current=>{
						if(current==target) return false;
						if(!guojue&&current.hasHistory('lose',evt=>{
							if(evt.type=='discard'){
								if((evt.discarder||evt.getParent(2).player)!=target) return false;
								if(!evt.getl(current).cards2.length) return false;
								return true;
							}
							else if(evt.type=='gain'){
								var evtx=evt.getParent();
								if(evtx.giver||evtx.getParent().name=='gift') return false;
								var cards=evtx.getg(target);
								if(!cards.length) return false;
								var cards2=evtx.getl(current).cards2;
								for(var card of cards2){
									if(cards.contains(card)) return true;
								}
							}
							return false;
						})) guojue=true;
						if(!renzhi&&current.hasHistory('gain',evt=>{
							if(evt.giver!=target||evt.getParent().name=='gift') return false;
							return evt.cards.length;
						})) renzhi=true;
					});
					event.guojue=guojue; event.renzhi=renzhi;
					'step 1'
					if(event.nowProperty>=5){
						event.finish();
						return;
					}
					var skills=lib.skill.dctongguan.derivation;
					if(trigger.player.hasSkill(skills[event.nowProperty])&&lib.skill.dcmengjie.rules[event.nowProperty](trigger.player,event[event.nowProperty==3?'guojue':'renzhi'])){
						event.goto(2+event.nowProperty*2);
					} else event.redo();
					event.nowProperty++;
					'step 2'
					if(!game.hasPlayer(current=>current!=player)) event._result={bool:false};
					else player.chooseTarget('梦解：对一名其他角色造成1点伤害',true,lib.filter.notMe).set('ai',target=>get.damageEffect(target,player,player));
					'step 3'
					if(result.bool){
						player.logSkill('dcmengjie',result.targets[0]);
						result.targets[0].damage();
					}
					game.delayx();
					event.goto(1);
					'step 4'
					if(game.hasPlayer(target=>target!=player&&target.isDamaged())) player.chooseTarget('梦解：令一名角色回复1点体力',function(card,player,target){
						return target.isDamaged();
					}).set('ai',target=>get.recoverEffect(target,player,player));
					else event._result={bool:false};
					'step 5'
					if(result.bool){
						player.logSkill('dcmengjie',result.targets[0]);
						result.targets[0].recover();
					}
					game.delayx();
					event.goto(1);
					'step 6'
					player.logSkill('dcmengjie');
					player.draw(2);
					'step 7'
					game.delayx();
					event.goto(1);
					'step 8'
					if(game.hasPlayer(target=>target.countDiscardableCards(player,'hej'))) player.chooseTarget('梦解：弃置一名角色区域内至多两张牌',true,(card,player,target)=>{
						return target.countDiscardableCards(player,'hej');
					}).set('ai',target=>get.effect(target,{name:'guohe'},player,player));
					else event._result={bool:false};
					'step 9'
					if(result.bool){
						player.logSkill('dcmengjie',result.targets[0]);
						player.discardPlayerCard(result.targets[0],true,'hej',[1,2]);
					}
					game.delayx();
					event.goto(1);
					'step 10'
					if(!game.hasPlayer(current=>current!=player)) event._result={bool:false};
					else player.chooseTarget('梦解：令一名其他角色将手牌补至上限',true,(card,player,target)=>{
						return target!=player;
					}).set('ai',target=>{
						var att=get.attitude(_status.event.player,target);
						if(target.hasSkillTag('nogain')) att/=6;
						if(att>2){
							return Math.min(5,target.maxHp)-target.countCards('h');
						}
						return att/3;
					});
					'step 11'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('dcmengjie',target);
						var num=Math.min(5,target.maxHp-target.countCards('h'));
						target.draw(num);
					}
					game.delayx();
					event.goto(1);
				}
			},
			//刘晔
			dcpoyuan:{
				audio:2,
				trigger:{
					global:'phaseBefore',
					player:['phaseZhunbeiBegin','enterGame'],
				},
				filter:function(event,player){
					if(event.name=='phase'&&game.phaseNumber>0) return false;
					if(player.getEquip('pilitoushiche')){
						return game.hasPlayer(function(current){
							return current!=player&&current.countDiscardableCards(player,'he')>0;
						});
					}
					else{
						return player.hasEquipableSlot(5);
					}
				},
				direct:true,
				content:function(){
					'step 0'
					if(player.getEquip('pilitoushiche')){
						event.goto(2);
						player.chooseTarget(get.prompt('dcpoyuan'),'弃置一名其他角色的至多两张牌',function(card,player,target){
							return target!=player&&target.countDiscardableCards(player,'he')>0;
						}).set('ai',function(target){
							var player=_status.event.player,cards=target.getDiscardableCards(player,'he');
							var att=get.attitude(player,target);
							if(att<0&&target.hasSkillTag('noe')) att/=2;
							var zheng=[],fu=[];
							for(var i of cards){
								var val=get.value(i,target);
								if(val>0) zheng.push(i);
								else fu.push(i);
							}
							zheng.sort((a,b)=>get.value(b,target)-get.value(a,target));
							fu.sort((a,b)=>get.value(b,target)-get.value(a,target));
							zheng=zheng.slice(0,2);
							fu=fu.slice(0,2);
							var eff1=0,eff2=0;
							for(var i of zheng) eff1+=get.value(i,target);
							for(var i of fu){
								if(get.position(i)=='e') eff2+=(1-get.value(i,target));
							}
							return -att*Math.max(eff1,eff2);
						});
					}
					else{
						player.chooseBool(get.prompt('dcpoyuan'),'装备一张【霹雳投石车】').set('ai',function(){
							return true;
						})
					}
					'step 1'
					if(result.bool){
						player.logSkill('dcpoyuan');
						var card=game.createCard('pilitoushiche','diamond',9);
						player.$gain2(card);
						game.delayx();
						player.equip(card);
					}
					event.finish();
					'step 2'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('dcpoyuan',target);
						player.discardPlayerCard(target,true,'he',[1,2])
					}
				},
			},
			dchuace:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return event.dchuace&&event.dchuace.length>0&&player.countCards('hs')>0;
				},
				onChooseToUse:function(event){
					if(game.online||event.dchuace) return;
					var list=lib.inpile.filter(function(i){
						return get.type(i)=='trick'&&lib.filter.filterCard({name:i},event.player,event);
					});
					if(!list.length){
						event.set('dchuace',list);
						return;
					}
					var history=_status.globalHistory;
					var stop=false;
					for(var i=history.length-1;i>=0;i--){
						var evt=history[i];
						if(!stop){
							if(evt.isRound) stop=true;
							continue;
						}
						else{
							for(var j of evt.useCard) list.remove(j.card.name);
							if(evt.isRound) break;
						}
					}
					event.set('dchuace',list);
				},
				chooseButton:{
					dialog:function(event,player){
						return ui.create.dialog('画策',[event.dchuace,'vcard'],'hidden');
					},
					check:function(button){
						var player=_status.event.player,card={name:button.link[2]};
						return player.getUseValue(card);
					},
					backup:function(links,player){
						return {
							audio:'dchuace',
							viewAs:{name:links[0][2]},
							ai1:(card)=>7-get.value(card),
							filterCard:true,
							position:'hs',
							popname:true,
						}
					},
					prompt:function(links,player){
						return '将一张手牌当做【'+get.translation(links[0][2])+'】使用';
					},
				},
				ai:{
					order:6,
					result:{player:1},
				},
				subSkill:{backup:{}},
			},
			pilitoushiche:{
				trigger:{player:['useCard','respond']},
				forced:true,
				equipSkill:true,
				filter:function(event,player){
					return get.type(event.card)=='basic';
				},
				content:function(){
					if(player==_status.currentPhase) trigger.baseDamage++;
					else player.draw();
				},
				mod:{
					targetInRange:function(card,player){
						if(get.type(card)=='basic'&&player==_status.currentPhase) return true;
					},
				}
			},
			//路易
			dcyaoyi:{
				audio:2,
				getZhuanhuanji:function(player,bool){
					var skills=player.getSkills(null,false,false).filter(function(i){
						var info=get.info(i);
						return info&&!info.charlotte&&info.zhuanhuanji;
					});
					if(!bool) return skills;
					if(!skills.length) return 'none';
					var state=lib.skill.dcyaoyi.getState(player,skills[0]);
					for(var i=1;i<skills.length;i++){
						if(lib.skill.dcyaoyi.getState(player,skills[i])!=state) return 'none';
					}
					return state;
				},
				getState:function(player,skill){
					var info=get.info(skill),zhuanhuan=info.zhuanhuanji;
					if(zhuanhuan=='number') return (player.countMark(skill)%2==1);
					return Boolean(player.storage[skill]);
				},
				trigger:{
					player:'enterGame',
					global:'phaseBefore',
				},
				forced:true,
				filter:function(event,player){
					if(event.name=='phase'&&game.phaseNumber!=0) return false;
					return game.hasPlayer(function(current){
						return lib.skill.dcyaoyi.getZhuanhuanji(current).length==0;
					});
				},
				logTarget:function(){
					return game.filterPlayer(function(current){
						return lib.skill.dcyaoyi.getZhuanhuanji(current).length==0;
					});
				},
				content:function(){
					var targets=lib.skill.dcyaoyi.logTarget().sortBySeat();
					for(var target of targets) target.addSkill('dcshoutan');
					game.delayx();
				},
				global:'dcyaoyi_blocker',
				subSkill:{
					blocker:{
						mod:{
							targetEnabled:function(card,player,target){
								if(player==target||!game.hasPlayer(function(current){
									return current.hasSkill('dcyaoyi');
								})) return;
								var state1=lib.skill.dcyaoyi.getZhuanhuanji(player,true);
								if(state1=='none') return;
								if(lib.skill.dcyaoyi.getZhuanhuanji(target,true)==state1) return false;
							},
							cardSavable:function(card,player,target){
								if(player==target||!game.hasPlayer(function(current){
									return current.hasSkill('dcyaoyi');
								})) return;
								var state1=lib.skill.dcyaoyi.getZhuanhuanji(player,true);
								if(state1=='none') return;
								if(lib.skill.dcyaoyi.getZhuanhuanji(target,true)==state1) return false;
							},
						},
					},
				},
			},
			dcshoutan:{
				audio:2,
				enable:'phaseUse',
				selectCard:-1,
				position:'h',
				filter:function(event,player){
					if(player.hasSkill('dcyaoyi')) return !player.hasSkill('dcshoutan_blocker',null,null,false);
					return player.countCards('h')>0&&!player.getStat('skill').dcshoutan;
				},
				selectCard:function(){
					if(_status.event.player.hasSkill('dcyaoyi')) return [0,1];
					return [1,1];
				},
				filterCard:function(card,player){
					if(player.hasSkill('dcyaoyi')) return false;
					var color=get.color(card,player);
					if(player.storage.dcshoutan) return color=='black';
					return color!='black';
				},
				prompt:function(){
					var player=_status.event.player;
					if(player.hasSkill('dcyaoyi')) return '点击“确认”来变更转换技状态';
					if(player.storage.dcshoutan) return '弃置一张黑色手牌，变更转换技状态';
					return '弃置一张非黑色手牌，变更转换技状态';
				},
				check:function(card){
					return 11-get.value(card);
				},
				content:function(){
					player.changeZhuanhuanji('dcshoutan');
					player.addTempSkill('dcshoutan_blocker',{player:['useCard1','useSkillBegin','phaseUseEnd']});
				},
				zhuanhuanji:true,
				mark:true,
				marktext:'☯',
				intro:{
					content:function(storage,player){
						if(storage) return '转换技。出牌阶段限一次，你可以弃置一张黑色手牌。';
						return '转换技。出牌阶段限一次，你可以弃置一张不为黑色的手牌。';
					},
				},
				ai:{
					order:0.1,
					result:{
						player:function(player){
							var base=0;
							if(ui.selected.cards.length) base=get.value(ui.selected.cards[0]);
							var status=player.storage.dcshoutan;
							var cards=player.getCards('hs',function(card){
								return !ui.selected.cards.contains(card);
							});
							for(var card of cards){
								var val1=player.getUseValue(card,null,true);
								player.storage.dcshoutan=!status;
								var val2=0;
								try{
									val2=player.getUseValue(card,null,true);
								}catch(e){
									player.storage.dcshoutan=status;
								}
								player.storage.dcshoutan=status;
								if(val2>val1) base-=(val2-val1);
							}
							if(base<0) return 1;
							return 0;
						},
					},
				},
				subSkill:{blocker:{charlotte:true}},
			},
			dcfuxue:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				direct:true,
				filter:function(event,player){
					return player.hp>0&&ui.discardPile.childNodes.length>0;
				},
				content:function(){
					'step 0'
					var cards=Array.from(ui.discardPile.childNodes);
					var gains=cards.slice(0);
					var history=game.getAllGlobalHistory('cardMove',function(evt){
						if(evt.name=='lose') return evt.position==ui.discardPile;
						return evt.name=='cardsDiscard';
					});
					for(var i=history.length-1;i>=0;i--){
						var evt=history[i];
						var cards2=evt.cards.filter(function(card){
							return cards.contains(card);
						});
						if(cards2.length){
							if(lib.skill.dcfuxue.isUse(evt)){
								gains.removeArray(cards2);
							}
							cards.removeArray(cards2);
						}
						if(!cards.length) break;
					}
					if(gains.length){
						var num=player.hp;
						player.chooseButton([
							'复学：选择获得'+(num>0?'至多':'')+get.cnNumber(num)+'张牌',
							gains,
						],[1,num]).set('ai',function(button){
							var player=_status.event.player,card=button.link;
							var getn=function(card){
								return player.countCards('h',card.name)+ui.selected.buttons.filter((button)=>button.link.name==card.name).length;
							}
							var val=player.getUseValue(card);
							if(card.name=='tao'&&getn(card)>=player.getDamagedHp()) return 0;
							if(card.name=='sha'&&getn(card)>=player.getCardUsable('sha')) return 0;
							return val;
						});
					}
					else event.finish();
					'step 1'
					if(result.bool){
						player.logSkill('dcfuxue');
						player.gain(result.links,'gain2').gaintag.add('dcfuxue');
					}
				},
				isUse:function(event){
					if(event.name!='cardsDiscard') return false;
					var evtx=event.getParent();
					if(evtx.name!='orderingDiscard') return false;
					var evt2=(evtx.relatedEvent||evtx.getParent());
					return (evt2.name=='phaseJudge'||evt2.name=='useCard');
				},
				group:'dcfuxue_draw',
				subSkill:{
					draw:{
						audio:'dcfuxue',
						trigger:{player:'phaseJieshuBegin'},
						forced:true,
						locked:false,
						mod:{
							aiOrder:function(player,card,num){
								if(get.itemtype(card)=='card'&&card.hasGaintag('dcfuxue')) return num+0.5;
							},
						},
						filter:function(event,player){
							return player.hp>0&&!player.hasCard(function(card){
								return card.hasGaintag('dcfuxue');
							},'h');
						},
						content:function(){
							player.draw(player.hp);
						},
					},
				},
			},
			//丁尚涴
			dcfengyan:{
				enable:'phaseUse',
				usable:2,
				chooseButton:{
					dialog:function(event,player){
						var dialog=ui.create.dialog('讽言：请选择一项','hidden');
						dialog.add([[
							['gain','令一名体力值不大于你的其他角色交给你一张手牌'],
							['sha','视为对一名手牌数不大于你的其他角色使用一张【杀】']
						],'textbutton']);
						return dialog;
					},
					filter:function(button,player){
						return !player.hasSkill('dcfengyan_'+button.link,null,null,false);
					},
					check:function(button){
						var player=_status.event.player;
						if(button.link=='gain'&&game.hasPlayer(function(current){
							return lib.skill.dcfengyan_gain.filterTarget(null,player,current)&&get.effect(current,'dcfengyan_gain',player,player)>0;
						})) return 4;
						if(button.link=='sha'&&game.hasPlayer(function(current){
							return lib.skill.dcfengyan_sha.filterTarget(null,player,current)&&get.effect(current,'dcfengyan_sha',player,player)>0;
						})) return 4;
						return 2;
					},
					backup:function(links){
						return get.copy(lib.skill['dcfengyan_'+links[0]]);
					},
					prompt:function(links){
						if(links[0]=='gain') return '令一名体力值不大于你的其他角色交给你一张手牌';
						return '视为对一名手牌数不大于你的其他角色使用【杀】';
					},
				},
				ai:{
					order:10,
					threaten:1.7,
					result:{player:1},
				},
				subSkill:{
					backup:{audio:'dcfengyan'},
					gain:{
						audio:'dcfengyan',
						filterTarget:function(card,player,target){
							return target!=player&&target.hp<=player.hp&&target.countCards('h')>0;
						},
						filterCard:()=>false,
						selectCard:-1,
						charlotte:true,
						content:function(){
							'step 0'
							player.addTempSkill('dcfengyan_gain','phaseUseAfter');
							target.chooseCard('h',true,'交给'+get.translation(player)+'一张牌');
							'step 1'
							if(result.bool) target.give(result.cards,player);
						},
						ai:{
							tag:{
								loseCard:1,
								gain:1,
							},
							result:{
								player:0.1,
								target:-1,
							},
						},
					},
					sha:{
						audio:'dcfengyan',
						filterTarget:function(card,player,target){
							return target!=player&&target.countCards('h')<=player.countCards('h')&&player.canUse('sha',target,false);
						},
						filterCard:()=>false,
						selectCard:-1,
						charlotte:true,
						content:function(){
							player.addTempSkill('dcfengyan_sha','phaseUseAfter');
							player.useCard({
								name:'sha',
								isCard:true,
							},target,false);
						},
						ai:{
							result:{
								player:function(player,target){
									return get.effect(target,{
										name:'sha',
										isCard:true,
									},player,player);
								},
							},
						},
					},
				},
			},
			dcfudao:{
				trigger:{
					global:'phaseBefore',
					player:'enterGame',
				},
				forced:true,
				locked:false,
				filter:function(event,player){
					return (event.name!='phase'||game.phaseNumber==0)&&game.hasPlayer((current)=>current!=player);
				},
				content:function(){
					'step 0'
					player.chooseTarget(true,lib.filter.notMe,'抚悼：请选择一名“继子”','你或“继子”每回合首次使用牌指定对方为目标后各摸两张牌；杀死你或“继子”的角色称为“决裂”。你或“继子”对“决裂”造成的伤害+1。“决裂”对你使用牌后，其本回合内不能再使用牌。').set('ai',function(target){
						return get.attitude(_status.event.player,target);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('dcfudao',target);
						game.log(target,'成为了',player,'的继子');
						player.addSkill('dcfudao_effect');
						target.addSkill('dcfudao_effect');
						player.markAuto('dcfudao_effect',[target]);
						target.markAuto('dcfudao_effect',[player]);
					}
				},
				group:'dcfudao_refuse',
				subSkill:{
					effect:{
						trigger:{player:'useCardToPlayered'},
						forced:true,
						charlotte:true,
						usable:1,
						filter:function(event,player){
							var target=event.target;
							if(player==target||!target.isIn()) return false;
							return player.getStorage('dcfudao_effect').contains(target);
						},
						logTarget:'target',
						content:function(){
							'step 0'
							var list=[player,trigger.target];
							list.sortBySeat();
							game.asyncDraw(list,2);
							'step 1'
							game.delayx();
						},
						marktext:'继',
						intro:{content:'已和$成为继母子关系'},
						group:['dcfudao_revenge','dcfudao_deadmark'],
					},
					deadmark:{
						trigger:{player:'dieBegin'},
						forced:true,
						popup:false,
						lastDo:true,
						silent:true,
						filter:function(event,player){
							return get.itemtype(event.source)=='player';
						},
						content:function(){
							trigger.source.markAuto('dcfudao_deadmark',[player]);
						},
						marktext:'裂',
						intro:{
							name:'决裂',
							content:'你害死了$！',
						},
					},
					revenge:{
						trigger:{source:'damageBegin1'},
						forced:true,
						filter:function(event,player){
							var storage1=event.player.getStorage('dcfudao_deadmark'),storage2=player.getStorage('dcfudao_effect');
							for(var i of storage1){
								if(storage2.contains(i)) return true;
							}
							return false;
						},
						content:function(){
							trigger.num++;
						},
						logTarget:'player',
					},
					refuse:{
						trigger:{target:'useCardToTargeted'},
						forced:true,
						filter:function(event,player){
							var storage1=event.player.getStorage('dcfudao_deadmark'),storage2=player.getStorage('dcfudao_effect');
							for(var i of storage1){
								if(storage2.contains(i)) return true;
							}
							return false;
						},
						content:function(){
							trigger.player.addTempSkill('dcfudao_blocker');
						},
						logTarget:'player',
					},
					blocker:{
						charlotte:true,
						mod:{
							cardEnabled:()=>false,
							cardSavable:()=>false,
						},
					},
				},
			},
			//全惠解
			dchuishu:{
				audio:2,
				getList:function(player){
					if(!player.storage.dchuishu) return [3,1,2];
					return player.storage.dchuishu.slice(0);
				},
				trigger:{player:'phaseDrawEnd'},
				content:function(){
					'step 0'
					var list=lib.skill.dchuishu.getList(player);
					event.list=list;
					player.draw(list[0]);
					'step 1'
					player.addTempSkill('dchuishu_effect');
					player.chooseToDiscard('h',true,event.list[1]);
				},
				onremove:true,
				mark:true,
				intro:{
					markcount:function(storage,player){
						var list=lib.skill.dchuishu.getList(player);
						return Math.max.apply(Math,list);
					},
					content:function(storage,player){
						var list=lib.skill.dchuishu.getList(player);
						return '摸牌阶段结束时，你可以摸['+list[0]+']张牌。若如此做：你弃置['+list[1]+']张手牌，且当你于本回合内弃置第['+list[2]+']+1张牌后，你从弃牌堆中获得['+list[2]+']张非基本牌。';
					},
				},
				subSkill:{
					effect:{
						charlotte:true,
						audio:'dchuishu',
						trigger:{
							player:'loseAfter',
							global:'loseAsyncAfter',
						},
						filter:function(event,player){
							var num=lib.skill.dchuishu.getList(player)[2];
							if(typeof num!='number') return false;
							if(event.type!='discard'||event.getlx===false) return false;
							var evt=event.getl(player);
							if(evt.cards2.length==0) return false;
							var prev=0,goon=true;
							player.getHistory('lose',function(evt){
								if(!goon||evt.type!='discard') return false;
								prev+=evt.cards2.length;
								if(evt==event||event.getParent()==event){
									goon=false;
									return false;
								}
							});
							return prev>num;
						},
						forced:true,
						popup:false,
						firstDo:true,
						content:function(){
							var num=lib.skill.dchuishu.getList(player)[2];
							var cards=[];
							for(var i=0;i<num;i++){
								var card=get.discardPile(function(card){
									return get.type(card)!='basic'&&!cards.contains(card);
								});
								if(card) cards.push(card);
								else break;
							}
							if(cards.length) player.gain(cards,'gain2');
						},
					},
				},
			},
			dcyishu:{
				audio:2,
				trigger:{
					player:['loseAfter'],
					global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
				},
				forced:true,
				filter:function(event,player){
					var evt=event.getl(player);
					if(!evt||!evt.cards2.length) return false;
					return !player.isPhaseUsing()&&player.hasSkill('dchuishu',null,null,false);
				},
				content:function(){
					'step 0'
					var list=lib.skill.dchuishu.getList(player);
					var min=list[0],max=list[0];
					for(var i of list){
						if(i<min) min=i;
						if(i>max) max=i;
					}
					var exps=['摸牌数[','弃牌数[','目标牌数['];
					var choices_min=[],choices_max=[];
					for(var i=0;i<list.length;i++){
						if(list[i]==min) choices_min.push(exps[i]+min+']');
						if(list[i]==max) choices_max.push(exps[i]+max+']');
					}
					if(choices_min.length==1&&choices_max.length==1){
						event._result={bool:true,min:choices_min[0],max:choices_max[0]};
					}
					else{
						if(player.isUnderControl()) game.swapPlayerAuto(player);
						var switchToAuto=function(){
							_status.imchoosing=false;
							event._result={
								bool:true,
								min:choices_min[0],
								max:choices_max[0],
							};
							if(event.dialog) event.dialog.close();
							if(event.control) event.control.close();
						};
						var chooseButton=function(player,min,max){
							var event=_status.event;
							player=player||event.player;
							var list=lib.skill.dchuishu.getList(player);
							if(!event._result) event._result={};
							var dialog=ui.create.dialog('###易数：请选择更改的数值###令〖慧淑〗的一个最小数值+2并令一个最大数值-1','forcebutton','hidden');
							event.dialog=dialog;
							dialog.addText('最小值+2');
							var table=document.createElement('div');
							table.classList.add('add-setting');
							table.style.margin='0';
							table.style.width='100%';
							table.style.position='relative';
							for(var i=0;i<min.length;i++){
								var td=ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
								td.link=min[i];
								table.appendChild(td);
								td.innerHTML='<span>'+min[i]+'</span>';
								td.addEventListener(lib.config.touchscreen?'touchend':'click',function(){
									if(_status.dragged) return;
									if(_status.justdragged) return;
									_status.tempNoButton=true;
									setTimeout(function(){
										_status.tempNoButton=false;
									},500);
									var link=this.link;
									var current=this.parentNode.querySelector('.bluebg');
									if(current) current.classList.remove('bluebg');
									this.classList.add('bluebg');
									event._result.min=link;
								});
							}
							dialog.content.appendChild(table);
							dialog.addText('最大值-1');
							var table2=document.createElement('div');
							table2.classList.add('add-setting');
							table2.style.margin='0';
							table2.style.width='100%';
							table2.style.position='relative';
							for(var i=0;i<max.length;i++){
								var td=ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
								td.link=max[i];
								table2.appendChild(td);
								td.innerHTML='<span>'+max[i]+'</span>';
								td.addEventListener(lib.config.touchscreen?'touchend':'click',function(){
									if(_status.dragged) return;
									if(_status.justdragged) return;
									_status.tempNoButton=true;
									setTimeout(function(){
										_status.tempNoButton=false;
									},500);
									var link=this.link;
									var current=this.parentNode.querySelector('.bluebg');
									if(current) current.classList.remove('bluebg');
									this.classList.add('bluebg');
									event._result.max=link;
								});
							}
							dialog.content.appendChild(table2);
							dialog.add('　　');
							event.dialog.open();
							
							event.switchToAuto=function(){
								event._result={
									bool:true,
									min:min[0],
									max:max[0],
								};
								event.dialog.close();
								event.control.close();
								game.resume();
								_status.imchoosing=false;
							};
							event.control=ui.create.control('ok',function(link){
								var result=event._result;
								if(!result.min||!result.max) return;
								result.bool=true;
								event.dialog.close();
								event.control.close();
								game.resume();
								_status.imchoosing=false;
							});
							for(var i=0;i<event.dialog.buttons.length;i++){
								event.dialog.buttons[i].classList.add('selectable');
							}
							game.pause();
							game.countChoose();
						};
						if(event.isMine()) chooseButton(player,choices_min,choices_max);
						else if(event.isOnline()){
							event.player.send(chooseButton,event.player,choices_min,choices_max);
							event.player.wait();
							game.pause();
						}
						else switchToAuto();
					}
					'step 1'
					var map=event.result||result;
					if(map.bool){
						var min=map.min,max=map.max;
						min=min.slice(0,min.indexOf('['));
						max=max.slice(0,max.indexOf('['));
						var exps=['摸牌数','弃牌数','目标牌数'];
						var list=lib.skill.dchuishu.getList(player);
						list[exps.indexOf(min)]+=2;
						list[exps.indexOf(max)]--;
						game.log(player,'令','#g【慧淑】','中的','#y'+min,'+2');
						game.log(player,'令','#g【慧淑】','中的','#y'+max,'-1');
						player.storage.dchuishu=list;
					}
					else event.finish();
					'step 2'
					player.markSkill('dchuishu');
					game.delayx();
				},
				ai:{combo:'dchuishu'},
			},
			dcligong:{
				audio:2,
				juexingji:true,
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				filter:function(event,player){
					if(!player.hasSkill('dcligong')) return false;
					var list=lib.skill.dchuishu.getList(player);
					for(var i of list){
						if(i>=5) return true;
					}
					return false;
				},
				skillAnimation:true,
				animationColor:'wood',
				content:function(){
					'step 0'
					player.awakenSkill('dcligong');
					player.gainMaxHp();
					player.recover();
					'step 1'
					player.removeSkill('dcyishu');
					'step 2'
					var list;
					if(_status.characterlist){
						list=[];
						for(var i=0;i<_status.characterlist.length;i++){
							var name=_status.characterlist[i];
							if(lib.character[name][1]=='wu'&&(lib.character[name][0]=='female'||lib.character[name][0]=='double')) list.push(name);
						}
					}
					else if(_status.connectMode){
						list=get.charactersOL(function(i){
							return lib.character[i][1]!='wu'||(lib.character[i][0]!='female'&&lib.character[i][0]!='double');
						});
					}
					else{
						list=get.gainableCharacters(function(info){
							return info[1]=='wu'&&(info[0]=='female'||info[0]=='double');
						});
					}
					var players=game.players.concat(game.dead);
					for(var i=0;i<players.length;i++){
						list.remove(players[i].name);
						list.remove(players[i].name1);
						list.remove(players[i].name2);
					}
					list=list.randomGets(4);
					var skills=[];
					for(var i of list){
						skills.addArray((lib.character[i][3]||[]).filter(function(skill){
							var info=get.info(skill);
							return info&&!info.charlotte;
						}));
					}
					if(!list.length||!skills.length){
						event.result={
							bool:false,
							skills:[],
						};
						return;
					}
					if(player.isUnderControl()){
						game.swapPlayerAuto(player);
					}
					var switchToAuto=function(){
						_status.imchoosing=false;
						event._result={
							bool:true,
							skills:skills.randomGets(2),
						};
						if(event.dialog) event.dialog.close();
						if(event.control) event.control.close();
					};
					var chooseButton=function(list,skills){
						var event=_status.event;
						if(!event._result) event._result={};
						event._result.skills=[];
						var rSkill=event._result.skills;
						var dialog=ui.create.dialog('请选择获得至多两个技能',[list,'character'],'hidden');
						event.dialog=dialog;
						var table=document.createElement('div');
						table.classList.add('add-setting');
						table.style.margin='0';
						table.style.width='100%';
						table.style.position='relative';
						for(var i=0;i<skills.length;i++){
							var td=ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
							td.link=skills[i];
							table.appendChild(td);
							td.innerHTML='<span>'+get.translation(skills[i])+'</span>';
							td.addEventListener(lib.config.touchscreen?'touchend':'click',function(){
								if(_status.dragged) return;
								if(_status.justdragged) return;
								_status.tempNoButton=true;
								setTimeout(function(){
									_status.tempNoButton=false;
								},500);
								var link=this.link;
								if(!this.classList.contains('bluebg')){
									if(rSkill.length>=2) return;
									rSkill.add(link);
									this.classList.add('bluebg');
								}
								else{
									this.classList.remove('bluebg');
									rSkill.remove(link);
								}
							});
						}
						dialog.content.appendChild(table);
						dialog.add('　　');
						dialog.open();
						
						event.switchToAuto=function(){
							event.dialog.close();
							event.control.close();
							game.resume();
							_status.imchoosing=false;
						};
						event.control=ui.create.control('ok',function(link){
							event.dialog.close();
							event.control.close();
							game.resume();
							_status.imchoosing=false;
						});
						for(var i=0;i<event.dialog.buttons.length;i++){
							event.dialog.buttons[i].classList.add('selectable');
						}
						game.pause();
						game.countChoose();
					};
					if(event.isMine()){
						chooseButton(list,skills);
					}
					else if(event.isOnline()){
						event.player.send(chooseButton,list,skills);
						event.player.wait();
						game.pause();
					}
					else{
						switchToAuto();
					}
					'step 3'
					var map=event.result||result;
					if(map.skills&&map.skills.length){
						player.removeSkill('dchuishu');
						for(var i of map.skills) player.addSkillLog(i);
						player.markAuto('zhuSkill_dcligong',map.skills);
					}
					else{
						player.draw(3);
					}
				},
			},
			//杜夔
			dcfanyin:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				filter:function(event,player){
					return ui.cardPile.childNodes.length>0;
				},
				frequent:true,
				locked:false,
				content:function(){
					'step 0'
					var card=false;
					if(typeof event.num!='number'){
						var num=false;
						for(var i=0;i<ui.cardPile.childNodes.length;i++){
							var cardx=ui.cardPile.childNodes[i],numc=get.number(cardx,false);
							if(!num||numc<num){
								num=numc;
								card=cardx;
								if(num==1) break;
							}
						}
						event.num=num;
					}
					else{
						card=get.cardPile2(function(card){
							return get.number(card,false)==event.num;
						});
					}
					if(!card) event.finish();
					else{
						event.card=card;
						game.cardsGotoOrdering(card);
						player.showCards(card,get.translation(player)+'发动了【泛音】')
					}
					'step 1'
					if(!player.hasUseTarget(card,false)) event._result={index:1};
					else{
						player.chooseControl().set('choiceList',[
							'使用'+get.translation(card)+'（无距离限制）',
							'令本回合使用的下一张牌可以多选择一个目标',
						]).set('ai',function(){
							var player=_status.event.player,card=_status.event.getParent().card;
							if(player.hasValueTarget(card,false)) return 0;
							return 1;
						});
					}
					'step 2'
					if(result.index==0){
						var cardx=get.autoViewAs(card);
						cardx.storage.dcfanyin=true;
						player.chooseUseTarget(cardx,[card],true,false);
					}
					else{
						player.addTempSkill('dcfanyin_effect');
						player.addMark('dcfanyin_effect',1,false);
					}
					event.num*=2;
					if(event.num<=13) event.goto(0);
				},
				mod:{
					targetInRange:function(card){
						if(card.storage&&card.storage.dcfanyin) return true;
					},
				},
				subSkill:{
					effect:{
						audio:'dcfanyin',
						trigger:{player:'useCard2'},
						forced:true,
						charlotte:true,
						popup:false,
						onremove:true,
						filter:function(event,player){
							var type=get.type(event.card,null,false);
							return type=='basic'||type=='trick';
						},
						content:function(){
							'step 0'
							var num=player.countMark('dcfanyin_effect');
							player.removeSkill('dcfanyin_effect');
							var filter=function(event,player){
								var card=event.card,info=get.info(card);
								if(info.allowMultiple==false) return false;
								if(event.targets&&!info.multitarget){
									if(game.hasPlayer(function(current){
										return !event.targets.contains(current)&&lib.filter.targetEnabled2(card,player,current)&&lib.filter.targetInRange(card,player,current);
									})){
										return true;
									}
								}
								return false;
							}
							if(!filter(trigger,player)) event.finish();
							else{
								var prompt='为'+get.translation(trigger.card)+'增加至多'+get.cnNumber(num)+'个目标？'
								trigger.player.chooseTarget(get.prompt('dcfanyin_effect'),prompt,[1,num],function(card,player,target){
									var player=_status.event.player;
									return !_status.event.targets.contains(target)&&lib.filter.targetEnabled2(_status.event.card,player,target)&&lib.filter.targetInRange(_status.event.card,player,target);
								}).set('ai',function(target){
									var trigger=_status.event.getTrigger();
									var player=_status.event.player;
									return get.effect(target,trigger.card,player,player);
								}).set('card',trigger.card).set('targets',trigger.targets);
							}
							'step 1'
							if(result.bool){
								if(!event.isMine()&&!event.isOnline()) game.delayx();
							}
							else event.finish();
							'step 2'
							player.logSkill('dcfanyin_effect',result.targets);
							game.log(result.targets,'也成为了',trigger.card,'的目标')
							trigger.targets.addArray(result.targets);
						},
						intro:{content:'使用下一张牌选择目标后，可以增加#个目标'},
					},
				},
			},
			dcpeiqi:{
				audio:2,
				trigger:{player:'damageEnd'},
				filter:function(event,player){
					return player.canMoveCard();
				},
				check:function(event,player){
					return player.canMoveCard(true);
				},
				content:function(){
					'step 0'
					player.moveCard(true);
					'step 1'
					if(result.bool&&player.canMoveCard()){
						var goon=true,players=game.filterPlayer();
						for(var i=0;i<players.length;i++){
							for(var j=i+1;j<players.length;j++){
								if(!players[i].inRange(players[j])||!players[i].inRangeOf(players[j])){
									goon=false;
									break;
								}
							}
							if(!goon) break;
						}
						if(goon) player.moveCard();
					}
				},
			},
			//张奋和大风车
			dcwanglu:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				content:function(){
					if(!player.hasEquipableSlot(5)||player.getEquip('dagongche')){
						var next=player.phaseUse();
						event.next.remove(next);
						trigger.getParent().next.push(next);
					}
					else{
						var card=game.createCard('dagongche','spade',9);
						player.$gain2(card);
						game.delayx();
						player.equip(card);
					}
				},
				broadcast:function(player){
					var card=player.getEquip('dagongche');
					if(card) game.broadcast(function(card,storage){
						card.storage=storage;
					},card,card.storage);
				},
			},
			dcxianzhu:{
				audio:2,
				trigger:{source:'damageSource'},
				direct:true,
				filter:function(event,player){
					if(!event.card||event.card.name!='sha') return false;
					var card=player.getEquip('dagongche');
					if(!card) return false;
					var num=0;
					for(var i=1;i<=3;i++){
						var key='大攻车选项'+get.cnNumber(i,true);
						if(card.storage[key]) num+=card.storage[key];
					}
					return num<5;
				},
				content:function(){
					'step 0'
					var choiceList=[
						'令【杀】无距离限制且无视防具',
						'令【杀】的可选目标数+1',
						'令后续的弃牌数量+1',
					];
					var list=[];
					var card=player.getEquip('dagongche');
					for(var i=1;i<=3;i++){
						var key='大攻车选项'+get.cnNumber(i,true);
						var num=card.storage[key];
						if(i==1){
							if(!num) list.push('选项一');
							else choiceList[0]=('<span style="opacity:0.5; ">'+choiceList[0]+'（已强化）</span>');
						}
						else{
							list.push('选项'+get.cnNumber(i,true));
							if(num) choiceList[i-1]+=('（已强化'+num+'次）');
						}
					}
					player.chooseControl(list,'cancel2').set('prompt','是否发动【陷筑】强化【大攻车】？').set('choiceList',choiceList).set('ai',function(){
						var player=_status.event.player,controls=_status.event.controls.slice(0);
						var getval=function(choice){
							var card=player.getEquip('dagongche');
							if(choice=='选项一'){
								card.storage.大攻车选项一=1;
								var goon=false;
								if(game.hasPlayer(function(current){
									var eff1=0,eff2=0;
									var cardx={name:'sha',isCard:true};
									if(player.canUse(cardx,current)) eff1=get.effect(current,cardx,player,player);
									cardx.storage={dagongche:true};
									if(player.canUse(cardx,current)) eff2=get.effect(current,cardx,player,player);
									return (eff2>eff1);
								})) goon=true;
								delete card.storage.大攻车选项一;
								if(goon) return 5;
								return 0;
							}
							else if(choice=='选项二'){
								var num=1;
								if(card.storage.大攻车选项二) num+=card.storage.大攻车选项二;
								var cardx={name:'sha',isCard:true};
								if(game.countPlayer(function(current){
									return player.canUse(cardx,current)&&get.effect(current,cardx,player,player)>0;
								})>num) return 2;
							}
							else if(choice=='选项三') return 1;
							return 0;
						};
						var eff=0,current='cancel2';
						for(var i of controls){
							var effx=getval(i);
							if(effx>eff){
								eff=effx;
								current=i;
							}
						}
						return current;
					});
					'step 1'
					if(result.control!='cancel2'){
						player.logSkill('dcxianzhu');
						var card=player.getEquip('dagongche'),key='大攻车'+result.control;
						if(!card.storage[key]) card.storage[key]=0;
						card.storage[key]++;
						lib.skill.dcwanglu.broadcast(player);
					}
				},
			},
			dcchaixie:{
				audio:2,
				trigger:{
					player:['loseAfter'],
					global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
				},
				forced:true,
				filter:function(event,player){
					var evt=event.getl(player);
					if(!evt||!evt.es||!evt.es.length) return false;
					for(var card of evt.es){
						if(card.name=='dagongche'){
							for(var i=1;i<=3;i++){
								if(card.storage['大攻车选项'+get.cnNumber(i,true)]) return true;
							}
						}
					}
					return false;
				},
				content:function(){
					var num=0;
					var evt=trigger.getl(player);
					for(var card of evt.es){
						if(card.name=='dagongche'){
							for(var i=1;i<=3;i++){
								var key='大攻车选项'+get.cnNumber(i,true);
								if(card.storage[key]) num+=card.storage[key];
							}
						}
					}
					player.draw(num);
				},
			},
			dagongche_skill:{
				trigger:{player:'phaseUseBegin'},
				direct:true,
				filter:function(event,player){
					var cardx={
						name:'sha',
						isCard:true,
						storage:{dagongche:true},
					};
					return player.hasUseTarget(cardx);
				},
				equipSkill:true,
				content:function(){
					var card={
						name:'sha',
						isCard:true,
						storage:{dagongche:true},
					};
					lib.skill.dcwanglu.broadcast(player);
					player.chooseUseTarget(card,'大攻车：是否视为使用【杀】？',false).logSkill='dagongche_skill';
				},
				mod:{
					targetInRange:function(card,player,target){
						if(card.storage&&card.storage.dagongche){
							var cardx=player.getEquip('dagongche');
							if(cardx&&cardx.storage.大攻车选项一) return true;
						}
					},
					selectTarget:function(card,player,range){
						if(card.storage&&card.storage.dagongche&&range[1]!=-1){
							var cardx=player.getEquip('dagongche');
							if(cardx&&cardx.storage.大攻车选项二) range[1]+=cardx.storage.大攻车选项二;
						}
					},
					canBeDiscarded:function(card){
						if(card.name=='dagongche'&&get.position(card)=='e'){
							for(var i=1;i<=3;i++){
								if(card.storage['大攻车选项'+get.cnNumber(i,true)]) return;
							}
							return false;
						}
					},
				},
				ai:{
					unequip:true,
					skillTagFilter:function(player,tag,arg){
						if(!arg||!arg.card||!arg.card.storage||!arg.card.storage.dagongche) return false;
						var card=player.getEquip('dagongche');
						if(!card||!card.storage.大攻车选项一) return false;
					},
				},
				group:'dagongche_skill_discard',
				subSkill:{
					discard:{
						trigger:{source:'damageSource'},
						equipSkill:true,
						forced:true,
						filter:function(event,player){
							if(!event.card||!event.card.storage||!event.card.storage.dagongche) return false;
							if(event.getParent().type!='card') return false;
							return event.player.hasCard(function(card){
								return lib.filter.canBeDiscarded(card,event.player,player);
							},'he');
						},
						logTarget:'player',
						content:function(){
							var num=1;
							var cardx=player.getEquip('dagongche');
							if(cardx&&cardx.storage.大攻车选项三) num+=cardx.storage.大攻车选项三;
							player.discardPlayerCard(trigger.player,true,num,'he');
						},
					},
				},
			},
			//刘徽
			dcgeyuan:{
				audio:2,
				trigger:{
					global:['loseAfter','loseAsyncAfter','cardsDiscardAfter','equipAfter'],
				},
				forced:true,
				filter:function(event,player){
					var cards=event.getd();
					for(var i of cards){
						if(lib.skill.dcgeyuan.filterNumber(player,get.number(i,false))) return true;
					}
					return false;
				},
				content:function(){
					'step 0'
					event.cards=trigger.getd();
					'step 1'
					var card=false;
					for(var i of cards){
						if(lib.skill.dcgeyuan.filterNumber(player,get.number(i,false))){
							card=i;
							cards.remove(card);
							break;
						}
					}
					if(card){
						var number=get.number(card,false);
						game.log(player,'将','#y'+get.strNumber(number),'记录为','#g“圆环之弧”');
						player.markAuto('dcgeyuan_homura',[number]);
						if(player.getStorage('dcgeyuan').length>player.getStorage('dcgeyuan_homura').length){
							if(cards.length>0) event.redo();
							else event.finish()
						}
						else if(player.storage.dcgusuan) event.goto(5);
					}
					else event.finish();
					'step 2'
					var list=player.getStorage('dcgeyuan_homura');
					var num1=list[0],num2=list[list.length-1];
					event.cards2=[];
					var lose_list=[],players=game.filterPlayer();
					for(var current of players){
						var cards=current.getCards('ej',function(card){
							var num=get.number(card);
							return num==num1||num==num2;
						});
						if(cards.length>0){
							current.$throw(cards);
							lose_list.push([current,cards]);
							event.cards2.addArray(cards);
						}
					}
					if(lose_list.length){
						event.lose_list=lose_list;
						game.loseAsync({
							lose_list:lose_list,
						}).setContent('chooseToCompareLose');
					}
					'step 3'
					var list=player.getStorage('dcgeyuan_homura');
					var num1=list[0],num2=list[list.length-1];
					var cards=event.cards2;
					for(var i=0;i<ui.cardPile.childNodes.length;i++){
						var card=ui.cardPile.childNodes[i];
						var number=get.number(card,false);
						if(number==num1||number==num2) cards.push(card);
					}
					if(cards.length>0){
						if(event.lose_list) game.delayx();
						player.gain(cards,'gain2');
					}
					'step 4'
					var list=player.getStorage('dcgeyuan_homura');
					var num1=list[0],num2=list[list.length-1];
					player.storage.dcgeyuan_homura=[];
					game.log(player,'清空了','#g“圆环之弧”');
					if(player.getStorage('dcgeyuan').length>3){
						player.unmarkAuto('dcgeyuan',[num1,num2]);
						game.log(player,'从','#g“圆环之理”','中移除了','#y'+get.strNumber(num1),'和','#y'+get.strNumber(num2));
					}
					event.finish();
					'step 5'
					player.chooseTarget('割圆：选择至多三名角色','第一名角色摸三张牌，第二名角色弃置四张牌，第三名角色将所有手牌与牌堆底的牌交换',true,[1,3]);
					'step 6'
					if(result.bool){
						var targets=result.targets;
						event.targets=targets;
						player.line(targets);
						targets[0].draw(3);
						if(targets.length<2) event.goto(4);
					}
					else event.goto(4);
					'step 7'
					if(targets[1].countCards('he')>0) targets[1].chooseToDiscard('he',true,4);
					if(targets.length<3) event.goto(4);
					'step 8'
					var target=targets[2];
					var cards=get.bottomCards(5);
					game.cardsGotoOrdering(cards);
					var hs=target.getCards('h');
					if(hs.length>0) target.lose(hs,ui.cardPile);
					target.gain(cards,'draw');
					event.goto(4);
				},
				group:'dcgeyuan_kyubey',
				filterNumber:function(player,num){
					var list1=player.getStorage('dcgeyuan');
					var list2=player.getStorage('dcgeyuan_homura');
					if(!list1.contains(num)) return false;
					if(!list2.length) return true;
					if(list2.contains(num)) return false;
					var madoka=list1.indexOf(num);
					for(var i of list2){
						var homura=list1.indexOf(i);
						var dist=Math.abs(madoka-homura);
						if(dist==1||dist==list1.length-1) return true;
					}
					return false;
				},
				subSkill:{
					kyubey:{
						audio:'dcgeyuan',
						trigger:{
							global:'phaseBefore',
							player:'enterGame',
						},
						forced:true,
						filter:function(event,player){
							return (event.name!='phase'||game.phaseNumber==0)&&!player.storage.dcgusuan;
						},
						content:function(){
							var list=[];
							for(var i=1;i<=13;i++){
								list.push(i);
							}
							list.randomSort();
							player.storage.dcgeyuan=list;
							player.markSkill('dcgeyuan');
							var str='#y';
							for(var i=0;i<13;i++){
								str+=get.strNumber(list[i]);
								if(i!=12) str+=',';
							}
							game.log(player,'将','#y“圆环之理”','赋值为',str);
						},
					},
				},
				intro:{
					name:'圆环之理',
					mark:function(dialog,storage,player){
						dialog.content.style['overflow-x']='visible';
						var list=storage;
						if(!storage||!storage.length) return '（圆环之理尚不存在）';
						var list2=player.getStorage('dcgeyuan_homura');
						var core=document.createElement('div');
						core.style.width='0';
						var centerX=-15,centerY=80,radius=80;
						var radian=Math.PI*2/list.length;
						var fulllist=['Ａ','２','３','４','５','６','７','８','９','10','Ｊ','Ｑ','Ｋ'];
						for(var i=0;i<list.length;i++){
							var td=document.createElement('div');
							var color='';
							if(list2[0]==list[i]) color=' class="yellowtext"';
							else if(list2.contains(list[i])) color=' class="greentext"';
							td.innerHTML='<span'+color+'>['+fulllist[list[i]-1]+']</span>';
							td.style.position='absolute';
							core.appendChild(td);
							td.style.left=(centerX+radius*Math.sin(radian*i))+'px';
							td.style.top=(centerY-radius*Math.cos(radian*i))+'px';
						}
						dialog.content.appendChild(core);
					},
				},
			},
			dcjieshu:{
				audio:2,
				trigger:{player:['useCard','respond']},
				forced:true,
				filter:function(event,player){
					var num=get.number(event.card,false);
					if(typeof num!='number') return false;
					return lib.skill.dcgeyuan.filterNumber(player,num)
				},
				content:function(){
					player.draw();
				},
				mod:{
					ignoredHandcard:function(card,player){
						if(!player.getStorage('dcgeyuan').contains(get.number(card))) return true;
					},
					cardDiscardable:function(card,player,name){
						if(name=='phaseDiscard'&&!player.getStorage('dcgeyuan').contains(get.number(card))) return false;
					},
				},
			},
			dcgusuan:{
				audio:2,
				trigger:{global:'phaseEnd'},
				forced:true,
				juexingji:true,
				skillAnimation:true,
				animationColor:'soil',
				filter:function(event,player){
					return player.getStorage('dcgeyuan').length==3;
				},
				content:function(){
					player.awakenSkill('dcgusuan');
					player.storage.dcgusuan=true;
					player.loseMaxHp();
				},
				ai:{combo:'dcgeyuan'},
				derivation:'dcgeyuan_magica',
			},
			//王昶
			dckaiji:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					if(player.maxHp<=0) return false;
					if(!player.storage.dckaiji) return true;
					return player.hasCard((card)=>lib.filter.cardDiscardable(card,player,'phaseUse'),'he');
				},
				filterCard:function(card,player){
					if(!player.storage.dckaiji) return false;
					return true;
				},
				position:'he',
				selectCard:function(){
					var player=_status.event.player;
					return player.storage.dckaiji?[1,player.maxHp]:-1;
				},
				check:function(card){
					var player=_status.event.player;
					if(!player.hasSkill('dcpingxi')) return 0;
					var num=lib.skill.dcpingxi.getNum()+ui.selected.cards.length;
					if(num<game.countPlayer(function(current){
						if(current==player||current.countCards('he')==0) return false;
						return get.effect(current,{name:'guohe_copy2'},player,player)+get.effect(current,{name:'sha'},player,player)>0;
					})){
						if(get.position(card)=='h'&&player.needsToDiscard()>ui.selected.cards.length) return 7+1/Math.max(1,get.value(card));
						return 7-get.value(card);
					}
					return 0;
				},
				content:function(){
					player.changeZhuanhuanji('dckaiji');
					if(!cards.length) player.draw(Math.min(player.maxHp,5));
				},
				zhuanhuanji:true,
				mark:true,
				marktext:'☯',
				intro:{
					content:(storage)=>('转换技。出牌阶段限一次，你可以'+(storage?'弃置至多X张牌':'摸X张牌')+'（X为你的体力上限且至多为5）。'),
				},
				ai:{
					threaten:1.6,
					order:function(item,player){
						if(player.storage.dckaiji) return 0.1;
						return 8;
					},
					result:{player:1},
				},
			},
			dcpingxi:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				getNum:function(){
					var num=0;
					game.getGlobalHistory('cardMove',function(evt){
						if(evt.name=='lose'&&evt.type=='discard') num+=evt.cards2.length;
					});
					return num;
				},
				filter:function(event,player){
					return lib.skill.dcpingxi.getNum()>0&&game.hasPlayer(function(current){
						return current!=player;
					});
				},
				content:function(){
					'step 0'
					var num=lib.skill.dcpingxi.getNum();
					player.chooseTarget([1,num],function(card,player,target){
						return target!=player;
					},get.prompt('dcpingxi'),'选择至多'+get.cnNumber(num)+'名其他角色。弃置这些角色的各一张牌，然后视为对这些角色使用一张【杀】').set('ai',function(target){
						var player=_status.event.player;
						return get.effect(target,{name:'guohe_copy2'},player,player)+get.effect(target,{name:'sha'},player,player);
					});
					'step 1'
					if(result.bool){
						var targets=result.targets.sortBySeat();
						event.targets=targets;
						player.logSkill('dcpingxi',targets);
						event.num=0;
					}
					else event.finish();
					'step 2'
					var target=targets[num];
					if(target.hasCard(function(card){
						return lib.filter.canBeDiscarded(card,player,target);
					},'he')) player.discardPlayerCard(target,'he',true);
					event.num++;
					if(event.num<targets.length) event.redo();
					'step 3'
					var targetsx=targets.filter(function(target){
						return player.canUse('sha',target,false);
					});
					if(targetsx.length>0) player.useCard({
						name:'sha',
						isCard:true,
					},targetsx);
				},
			},
			//赵昂
			dczhongjie:{
				audio:2,
				round:1,
				trigger:{global:'dying'},
				logTarget:'player',
				filter:function(event,player){
					return event.player.hp<1&&event.reason&&event.reason.name=='loseHp';
				},
				check:function(event,player){
					return get.attitude(player,event.player)>2;
				},
				content:function(){
					trigger.player.recover();
					trigger.player.draw();
				},
			},
			dcsushou:{
				audio:2,
				trigger:{global:'phaseUseBegin'},
				filter:function(event,player){
					return player.hp>0&&event.player.isMaxHandcard(true);
				},
				logTarget:'player',
				check:function(event,player){
					var num=player.hp;
					if(player.hasSkill('dczhongjie')&&(player.storage.dczhongjie_roundcount||0)<game.roundNumber) num++;
					return num>1;
				},
				content:function(){
					'step 0'
					player.loseHp();
					event.target=trigger.player;
					'step 1'
					var num=player.getDamagedHp();
					if(num>0) player.draw(num);
					if(player==target) event.finish();
					'step 2'
					var ts=target.getCards('h');
					if(ts.length<2) event.finish();
					else{
						var hs=player.getCards('h');
						ts=ts.randomGets(Math.floor(ts.length/2));
						if(!hs.length){
							player.viewCards(get.translation(target)+'的部分手牌');
							event.finish();
							return;
						}
						var next=player.chooseToMove('夙守：交换至多'+get.cnNumber(Math.min(hs.length,ts.length,player.getDamagedHp()))+'张牌');
						next.set('list',[
							[get.translation(target)+'的部分手牌',ts,'dcsushou_tag'],
							['你的手牌',hs],
						]);
						next.set('filterMove',function(from,to,moved){
							if(typeof to=='number') return false;
							var player=_status.event.player;
							var hs=player.getCards('h');
							var changed=hs.filter(function(card){
								return !moved[1].contains(card);
							});
							var changed2=moved[1].filter(function(card){
								return !hs.contains(card);
							});
							if(changed.length<player.getDamagedHp()) return true;
							var pos1=(moved[0].contains(from.link)?0:1),pos2=(moved[0].contains(to.link)?0:1);
							if(pos1==pos2) return true;
							if(pos1==0){
								if(changed.contains(from.link)) return true;
								return changed2.contains(to.link);
							}
							if(changed2.contains(from.link)) return true;
							return changed.contains(to.link);
						});
						next.set('processAI',function(list){
							return [list[0][1],list[1][1]];
						});
					}
					'step 3'
					var moved=result.moved;
					var hs=player.getCards('h'),ts=target.getCards('h');
					var cards1=[],cards2=[];
					for(var i of result.moved[0]){
						if(!ts.contains(i)) cards1.push(i);
					}
					for(var i of result.moved[1]){
						if(!hs.contains(i)) cards2.push(i);
					}
					if(cards1.length){
						player.swapHandcards(target,cards1,cards2);
					}
				},
			},
			//蓝曹华
			caiyi:{
				audio:2,
				zhuanhuanji:true,
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				onremove:function(player){
					delete player.storage.caiyi;
					delete player.storage.caiyi_info;
				},
				filter:function(event,player){
					if(player.storage.caiyi_info){
						if(player.storage.caiyi_info[player.storage.caiyi?1:0].length>=4) return false;
					}
					return true;
				},
				choices:[[
					'回复X点体力',
					'摸X张牌',
					'复原武将牌',
					'随机执行一个已经移除过的选项',
				],[
					'受到X点伤害',
					'弃置X张牌',
					'翻面并横置',
					'随机执行一个已经移除过的选项',
				]],
				filterx:[[
					(player)=>player.isDamaged(),
					()=>true,
					(player)=>player.isTurnedOver()||player.isLinked(),
					()=>true,
				],[
					()=>true,
					(player)=>player.hasCard(function(card){
						return lib.filter.cardDiscardable(card,player,'caiyi');
					},'he'),
					(player)=>!player.isTurnedOver()||!player.isLinked(),
					()=>true,
				]],
				content:function(){
					'step 0'
					if(!player.storage.caiyi_info) player.storage.caiyi_info=[[],[]];
					var index=player.storage.caiyi?1:0;
					event.index=index;
					var list=player.storage.caiyi_info[index],choices=lib.skill.caiyi.choices[index],numbers=['⒈','；⒉','；⒊','；⒋'];
					event.num=4-list.length;
					var str='令一名角色选择执行其中一项：';
					for(var i=0;i<4;i++){
						if(list.contains(i)) continue;
						if(i==3&&!list.length) continue;
						str+=numbers.shift();
						str+=choices[i];
					}
					str+='。';
					str=str.replace(/X/g,get.cnNumber(event.num));
					player.chooseTarget(get.prompt('caiyi')+'（当前状态：'+(index?'阳':'阴')+'）',str).set('ai',function(target){
						var player=_status.event.player;
						return (player.storage.caiyi?-1:1)*get.attitude(player,target);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('caiyi',target);
						player.changeZhuanhuanji('caiyi');
						event.goto(event.index==1?5:2);
					}
					else event.finish();
					'step 2'
					var list=[],str=get.cnNumber(num);
					var choiceList=[
						'回复'+str+'点体力。',
						'摸'+str+'张牌。',
						'将武将牌翻至正面且重置。',
						'随机执行一个已经被移除的选项。',
					];
					var storage=player.storage.caiyi_info[event.index];
					for(var i=0;i<4;i++){
						if(storage.contains(i)){
							choiceList[i]=('<span style="text-decoration:line-through; opacity:0.5; ">'+choiceList[i]+'</span>');
						}
						else if(!lib.skill.caiyi.filterx[event.index][i](target)||(i==3&&!storage.length)){
							choiceList[i]=('<span style="opacity:0.5;">'+choiceList[i]+'</span>');
						}
						else list.push('选项'+get.cnNumber(i+1,true))
					}
					if(!list.length){
						event.finish();
						return;
					}
					target.chooseControl(list).set('choiceList',choiceList).set('ai',function(){
						var evt=_status.event,player=evt.player;
						var list=evt.controls.slice(0);
						var gett=function(choice){
							if(choice=='cancel2') return 0.1;
							var max=0,func={
								选项一:function(current){
									max=get.recoverEffect(current,player,player)*Math.min(evt.getParent().num,player.getDamagedHp());
								},
								选项二:function(target){
									max=get.effect(target,{name:'wuzhong'},player,player)/2*evt.getParent().num;
								},
								选项三:function(target){
									if(player.isTurnedOver()) max+=25;
									if(player.isLinked()) max+=get.effect(player,{name:'tiesuo'},player,player);
								},
								选项四:function(target){
									max=3;
								},
							}[choice];
							func(player);
							return max;
						};
						return list.sort(function(a,b){
							return gett(b)-gett(a);
						})[0];
					});
					'step 3'
					var index2=['选项一','选项二','选项三','选项四'].indexOf(result.control);
					player.storage.caiyi_info[event.index].push(index2);
					if(index2==3){
						var list=player.storage.caiyi_info[event.index].filter(function(i){
							return i!=3&&lib.skill.caiyi.filterx[event.index][i](target);
						});
						if(!list.length){
							event.finish();
							return;
						}
						index2=list.randomGet();
					}
					switch(index2){
						case 0:
							target.recover(num);
							break;
						case 1:
							target.draw(num);
							break;
						case 2:
							!target.isTurnedOver()||target.turnOver();
							break;
					}
					if(index2!=2) event.finish();
					'step 4'
					!target.isLinked()||target.link();
					event.finish();
					'step 5'
					var list=[],str=get.cnNumber(num);
					var choiceList=[
						'受到'+str+'点伤害。',
						'弃置'+str+'张牌。',
						'将武将牌翻至背面并横置。',
						'随机执行一个已经被移除的选项。',
					];
					var storage=player.storage.caiyi_info[event.index];
					for(var i=0;i<4;i++){
						if(storage.contains(i)){
							choiceList[i]=('<span style="text-decoration:line-through; opacity:0.5; ">'+choiceList[i]+'</span>');
						}
						else if(!lib.skill.caiyi.filterx[event.index][i](target)||(i==3&&!storage.length)){
							choiceList[i]=('<span style="opacity:0.5;">'+choiceList[i]+'</span>');
						}
						else list.push('选项'+get.cnNumber(i+1,true))
					}
					if(!list.length){
						event.finish();
						return;
					}
					target.chooseControl(list).set('choiceList',choiceList).set('ai',function(){
						var evt=_status.event,player=evt.player;
						var list=evt.controls.slice(0);
						var gett=function(choice){
							if(choice=='cancel2') return 0.1;
							var max=0,func={
								选项一:function(current){
									max=get.effect(current,{name:'damage'},player,player)*evt.getParent().num;
								},
								选项二:function(target){
									max=get.effect(target,{name:'guohe_copy2'},player,player)*Math.min(player.countCards('he'),evt.getParent().num);
								},
								选项三:function(target){
									if(!player.isTurnedOver()) max-=5;
									if(!player.isLinked()) max+=get.effect(player,{name:'tiesuo'},player,player);
								},
								选项四:function(target){
									max=-3;
								},
							}[choice];
							func(player);
							return max;
						};
						return list.sort(function(a,b){
							return gett(b)-gett(a);
						})[0];
					});
					'step 6'
					var index2=['选项一','选项二','选项三','选项四'].indexOf(result.control);
					player.storage.caiyi_info[event.index].push(index2);
					if(index2==3){
						var list=player.storage.caiyi_info[event.index].filter(function(i){
							return i!=3&&lib.skill.caiyi.filterx[event.index][i](target);
						});
						if(!list.length){
							event.finish();
							return;
						}
						index2=list.randomGet();
					}
					switch(index2){
						case 0:
							target.damage(num);
							break;
						case 1:
							target.chooseToDiscard(num,true,'he');
							break;
						case 2:
							target.isTurnedOver()||target.turnOver();
							break;
					}
					if(index2!=2) event.finish();
					'step 7'
					target.isLinked()||target.link();
					event.finish();
				},
				mark:true,
				marktext:'☯',
				intro:{
					content:function(storage){
						if(storage) return '转换技。结束阶段，你可令一名角色选择并执行一项，然后移除此选项：⒈受到X点伤害。⒉弃置X张牌。⒊翻面并横置。⒋随机执行一个已经移除过的阳选项。（X为该阴阳态剩余选项的数量）。';
						return '转换技。结束阶段，你可令一名角色选择并执行一项，然后移除此选项：⒈回复X点体力。⒉摸X张牌，⒊复原武将牌。⒋随机执行一个已经移除过的阴选项。⒋随机执行一个已经移除过的阳选项。（X为该阴阳态剩余选项的数量）。';
					},
				},
			},
			guili:{
				audio:2,
				trigger:{player:'phaseBegin'},
				forced:true,
				locked:false,
				filter:function(event,player){
					return player.phaseNumber==1&&game.hasPlayer((current)=>current!=player);
				},
				content:function(){
					'step 0'
					player.chooseTarget(lib.filter.notMe,true,'请选择【归离】的目标',lib.translate.guili_info).set('ai',function(target){
						return -get.threaten(target);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.line(target,'green');
						game.log(player,'选择了',target);
						player.storage.guili_insert=target;
						player.addSkill('guili_insert');
						game.delayx();
					}
				},
				onremove:true,
				subSkill:{
					insert:{
						trigger:{global:'phaseAfter'},
						forced:true,
						charlotte:true,
						logTarget:'player',
						filter:function(event,player){
							if(event.player!=player.storage.guili_insert) return false;
							if(event.player.getHistory('sourceDamage').length>0) return false;
							var history=event.player.actionHistory;
							if(history[history.length-1].isRound) return true;
							for(var i=history.length-2;i>=0;i--){
								if(history[i].isMe) return false;
								if(history[i].isRound) return true;
							}
							return false;
						},
						content:function(){
							player.insertPhase();
						},
					},
				},
			},
			//刘虞
			dcsuifu:{
				audio:2,
				trigger:{global:'phaseJieshuBegin'},
				filter:function(event,player){
					if(player==event.player||!event.player.countCards('h')) return false;
					var num=0;
					game.countPlayer(function(current){
						if(current==player||current.getSeatNum()==1){
							current.getHistory('damage',function(evt){
								num+=evt.num;
							});
						}
					});
					return num>=2;
				},
				logTarget:'player',
				check:function(event,player){
					return get.attitude(player,event.player)<=0;
				},
				content:function(){
					'step 0'
					var target=trigger.player,cards=target.getCards('h');
					target.lose(cards,ui.cardPile,'insert');
					target.$throw(cards.length);
					game.updateRoundNumber();
					game.log(player,'将',target,'的',get.cnNumber(cards.length),'张手牌置于牌堆顶');
					'step 1'
					game.delayx();
					player.chooseUseTarget({name:'wugu',isCard:true},true);
				},
			},
			dcpijing:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget([1,game.countPlayer()],get.prompt('dcpijing'),'令任意名角色获得技能〖自牧〗').set('ai',function(target){
						return get.attitude(_status.event.player,target);
					});
					'step 1'
					if(result.bool){
						var targets=result.targets;
						targets.add(player);
						targets.sortBySeat();
						player.logSkill('dcpijing',targets);
						game.countPlayer(function(current){
							if(!targets.contains(current)) current.removeSkill('dczimu');
							else current.addSkill('dczimu');
						});
						game.delayx();
					}
				},
				derivation:'dczimu',
			},
			dczimu:{
				audio:2,
				trigger:{player:'damageEnd'},
				forced:true,
				mark:true,
				logTarget:function(event,player){
					return game.filterPlayer(function(current){
						return current.hasSkill('dczimu',null,null,false);
					}).sortBySeat();
				},
				content:function(){
					'step 0'
					var list=game.filterPlayer(function(current){
						return current.hasSkill('dczimu',null,null,false);
					});
					if(list.length>0){
						if(list.length==1) list[0].draw();
						else{
							game.asyncDraw(list);
							event.delay=true;
						}
					}
					'step 1'
					player.removeSkill('dczimu');
					if(event.delay) game.delayx();
				},
				marktext:'牧',
				intro:{content:'锁定技。当你受到伤害后，你令所有拥有〖自牧〗的角色各摸一张牌，然后你失去〖自牧〗。'},
			},
			//黄祖
			dcjinggong:{
				audio:2,
				enable:'chooseToUse',
				locked:false,
				mod:{
					targetInRange:function(card){
						if(card.storage&&card.storage.dcjinggong) return true;
					},
				},
				viewAsFilter:function(player){
					return player.hasCard(function(card){
						return get.type(card)=='equip';
					},'ehs');
				},
				position:'hes',
				filterCard:{type:'equip'},
				viewAs:{
					name:'sha',
					storage:{dcjinggong:true},
				},
				check:function(card){
					return 6-get.value(card);
				},
				ai:{
					respondSha:true,
					skillTagFilter:function(player){
						return player.hasCard(function(card){
							return get.type(card)=='equip';
						},'ehs');
					},
				},
				group:'dcjinggong_base',
				subSkill:{
					base:{
						trigger:{player:'useCard1'},
						forced:true,
						popup:false,
						firstDo:true,
						filter:function(event,player){
							return event.skill=='dcjinggong'&&event.targets.length>0;
						},
						content:function(){
							trigger.baseDamage=Math.min(5,get.distance(player,trigger.targets[0]));
						},
					},
				},
			},
			dcxiaojuan:{
				audio:2,
				trigger:{player:'useCardToPlayered'},
				logTarget:'target',
				filter:function(event,player){
					return event.targets.length==1&&player!=event.target&&event.target.countCards('h')>1;
				},
				check:function(event,player){
					var target=event.target;
					if(get.attitude(player,target)>=0) return false;
					if(get.color(event.card)=='none') return true;
					return Math.floor(target.countCards('h')/2)>=Math.floor(player.countCards('h')/2);
				},
				content:function(){
					'step 0'
					var target=trigger.target;
					event.target=target;
					var num=Math.floor(target.countCards('h')/2);
					if(num>0) player.discardPlayerCard(target,'h',num,true);
					else event.finish();
					'step 1'
					var suit=get.suit(trigger.card);
					if(result.bool&&lib.suit.contains(suit)&&player.countCards('h')>1){
						var bool=false;
						for(var i of result.cards){
							if(get.suit(i,target)==suit){
								bool=true;
								break;
							}
						}
						if(!bool) event.finish();
					}
					else event.finish();
					'step 2'
					if(player.countCards('h')>0) player.chooseToDiscard('h',1,true);
				},
			},
			//来莺儿
			xiaowu:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				selectTarget:function(){
					return [1,game.countPlayer()-1];
				},
				complexSelect:true,
				complexTarget:true,
				filterTarget:function(card,player,target){
					if(player==target) return false;
					var next=player.getNext(),prev=player.getPrevious();
					var selected=ui.selected.targets;
					if(!selected.contains(next)&&!selected.contains(prev)) return (target==next||target==prev);
					for(var i of selected){
					 if(i.getNext()==target||i.getPrevious()==target) return true;
					}
					return false;
				},
				contentBefore:function(){
					event.getParent()._xiaowu_targets=[];
				},
				content:function(){
					'step 0'
					if(!target.isIn()){
						event.finish();
						return;
					}
					target.chooseControl().set('choiceList',[
						'令'+get.translation(player)+'摸一张牌',
						'令自己摸一张牌',
					]).set('ai',function(){
						var player=_status.event.player,target=_status.event.getParent().player;
						var all=_status.event.getParent().targets.length,dam=_status.event.getParent(2)._xiaowu_targets.length;
						if(get.attitude(player,target)>0||dam>=Math.floor(all/2)) return 0;
						return 1;
					});
					'step 1'
					if(result.index==0){
						player.draw();
					}
					else{
						target.draw();
						event.getParent()._xiaowu_targets.push(target);
					}
				},
				contentAfter:function(){
					var targetsx=event.getParent()._xiaowu_targets;
					var num=(targets.length-targetsx.length-targetsx.length);
					if(num>0) player.addMark('shawu',1);
					else if(num<0){
						player.line(targetsx,'fire');
						for(var i of targetsx) i.damage();
					}
				},
				ai:{
					order:8,
					result:{player:1},
				},
			},
			huaping:{
				audio:'huaping',
				trigger:{global:'die'},
				limited:true,
				skillAnimation:true,
				animationColor:'fire',
				filter:function(event,player){
					return player!=event.player;
				},
				logTarget:'player',
				check:function(event,player){
					return get.rank(event.player.name,true)>=5;
				},
				content:function(){
					player.awakenSkill('huaping');
					var skills=trigger.player.getSkills(null,false,false).filter(function(i){
						var info=get.info(i);
						return info&&!info.charlotte;
					});
					if(skills.length){
						for(var i of skills) player.addSkillLog(i);
					}
					player.removeSkill('xiaowu');
					var num=player.countMark('shawu');
					if(num>0){
						player.removeMark('shawu',num);
						player.draw(num);
					}
				},
				group:'huaping_give',
				subSkill:{
					give:{
						audio:'huaping',
						trigger:{player:'die'},
						direct:true,
						filter:function(event,player){
							return event.player==player;
						},
						forceDie:true,
						skillAnimation:true,
						animationColor:'gray',
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('huaping'),'令一名其他角色获得〖沙舞〗',lib.filter.notMe).set('forceDie',true).set('ai',function(target){
								return get.attitude(_status.event.player,target)+100;
							});
							'step 1'
							if(result.bool){
								var target=result.targets[0];
								player.awakenSkill('huaping');
								player.logSkill('huaping_give',target);
								target.addSkill('shawu');
								var num=player.countMark('shawu');
								if(num>0){
									player.removeMark('shawu',num);
									target.addMark('shawu',num);
								}
							}
						},
					},
				},
				derivation:'shawu',
			},
			shawu:{
				audio:2,
				trigger:{player:'useCardToTargeted'},
				shaRelated:true,
				direct:true,
				filter:function(event,player){
					return event.card.name=='sha'&&event.player.isIn()&&(player.hasMark('shawu')||player.countCards('h',function(card){
						return lib.filter.cardDiscardable(card,player,'shawu');
					})>1);
				},
				content:function(){
					'step 0'
					var list=[];
					if(player.countCards('h',function(card){
						return lib.filter.cardDiscardable(card,player,'shawu');
					})>1) list.push('弃置手牌');
					if(player.hasMark('shawu')) list.push('移除标记');
					list.push('cancel2');
					player.chooseControl(list).set('prompt',get.prompt('shawu',trigger.target)).set('prompt2','弃置两张手牌，或移去一枚“沙”并摸两张牌，然后对该角色造成1点伤害').set('ai',function(){
						var player=_status.event.player,target=_status.event.getTrigger().target;
						if(get.damageEffect(target,player,player)<=0) return 'cancel2';
						if(player.hasMark('shawu')) return '移除标记';
						if(player.countCards('h',function(card){
							return lib.filter.cardDiscardable(card,player,'shawu')&&get.value(card)<=6.5;
						})>1) return '弃置手牌';
						return 'cancel2';
					});
					'step 1'
					var target=trigger.target;
					if(result.control=='cancel2'){
						event.finish();
						return;
					}
					else if(result.control=='移除标记'){
						player.logSkill('shawu',target);
						player.removeMark('shawu',1);
						player.draw(2);
						target.damage();
						event.finish();
					}
					else{
						player.chooseToDiscard('h',true,2).logSkill=['shawu',target];
					}
					'step 2'
					trigger.target.damage();
				},
				intro:{
					content:'mark',
				},
			},
			//曹髦
			qianlong:{
				audio:2,
				trigger:{player:'damageEnd'},
				frequent:true,
				content:function(){
					'step 0'
					var cards=get.cards(3);
					event.cards=cards;
					game.cardsGotoOrdering(cards);
					//展示牌
					game.log(player,'展示了',event.cards);
					event.videoId=lib.status.videoId++;
					game.broadcastAll(function(player,id,cards){
						if(player==game.me||player.isUnderControl()) return;
						var str=get.translation(player)+'发动了【潜龙】';
						var dialog=ui.create.dialog(str,cards);
						dialog.videoId=id;
					},player,event.videoId,event.cards);
					game.addVideo('showCards',player,[get.translation(player)+'发动了【潜龙】',get.cardsInfo(event.cards)]);
					if(player!=game.me&&!player.isUnderControl()&&!player.isOnline()) game.delay(2);
					//选牌
					var next=player.chooseToMove('潜龙：获得至多'+get.cnNumber(Math.min(3,player.getDamagedHp()))+'张牌并将其余牌置于牌堆底');
					next.set('list',[
						['置于牌堆底',cards],
						['自己获得'],
					])
					next.set('filterMove',function(from,to,moved){
						if(moved[0].contains(from.link)){
							if(typeof to=='number'){
								if(to==1){
									if(moved[1].length>=_status.event.player.getDamagedHp()) return false;
								}
								return true;
							}
						}
						return true;
					});
					next.set('processAI',function(list){
						var cards=list[0][1].slice(0).sort(function(a,b){
							if(b.name=='sha') return 1;
							return get.value(b)-get.value(a);
						});
						return [cards,cards.splice(0,_status.event.player.getDamagedHp())];
					});
					'step 1'
					game.broadcastAll('closeDialog',event.videoId);
					game.addVideo('cardDialog',null,event.videoId);
					var moved=result.moved;
					if(moved[0].length>0){
						for(var i of moved[0]){
							i.fix();
							ui.cardPile.appendChild(i);
						}
					}
					if(moved[1].length>0) player.gain(moved[1],'gain2');
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return;
								if(!target.hasFriend()) return;
								var num=1;
								if(!player.needsToDiscard()&&target.isDamaged()){
									num=0.7;
								}
								else{
									num=0.5;
								}
								if(target.hp>=4) return [1,num*2];
								if(target.hp==3) return [1,num*1.5];
								if(target.hp==2) return [1,num*0.5];
							}
						}
					}
				}
			},
			fensi:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				content:function(){
					'step 0'
					if(!game.hasPlayer(function(current){
						return current!=player&&current.hp>=player.hp;
					})){
						player.damage();
						event.finish();
						return;
					}
					else{
						player.chooseTarget(true,'忿肆：对一名体力值不小于你的角色造成1点伤害',function(card,player,target){
							return target.hp>=player.hp;
						}).set('ai',function(target){
							var player=_status.event.player;
							return get.damageEffect(target,player,player);
						});
					}
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.line(target,'green');
						target.damage();
					}
					else event.finish();
					'step 2'
					if(target.isIn()&&target.canUse('sha',player,false)) target.useCard({name:'sha',isCard:true},player,false,'noai');
				},
			},
			juetao:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				direct:true,
				limited:true,
				skillAnimation:true,
				animationColor:'thunder',
				filter:function(event,player){
					return player.hp==1;
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('juetao'),lib.filter.notMe).set('ai',function(target){
						return -get.attitude(_status.event.player,target);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('juetao',target);
						player.awakenSkill('juetao');
					}
					else event.finish();
					'step 2'
					var card=get.bottomCards()[0];
					game.cardsGotoOrdering(card);
					player.showCards(card);
					player.chooseUseTarget(card,true,false,'nodistance').set('filterTarget',function(card,player,target){
						var evt=_status.event;
						if(_status.event.name=='chooseTarget') evt=evt.getParent();
						if(target!=player&&target!=evt.juetao_target) return false;
						return lib.filter.targetEnabledx(card,player,target);
					}).set('juetao_target',target);
					'step 3'
					if(result.bool&&target.isIn()) event.goto(2);
				},
			},
			zhushi:{
				audio:2,
				usable:1,
				trigger:{global:'recoverEnd'},
				direct:true,
				zhuSkill:true,
				filter:function(event,player){
					return player!=event.player&&event.player.group=='wei'&&event.player==_status.currentPhase&&
					event.player.isIn()&&player.hasZhuSkill('zhushi',event.player);
				},
				content:function(){
					'step 0'
					var str=get.translation(player);
					trigger.player.chooseBool('是否响应'+get.translation(player)+'的主公技【助势】？','令'+get.translation(player)+'摸一张牌').set('goon',get.attitude(trigger.player,player)>0).set('ai',()=>_status.event.goon);
					'step 1'
					if(result.bool){
						player.logSkill('zhushi');
						trigger.player.line(player,'thunder');
						player.draw();
					}
					else player.storage.counttrigger.zhushi--;
				},
			},
			//骆统
			renzheng:{
				audio:2,
				trigger:{global:['damageCancelled','damageZero','damageAfter']},
				forced:true,
				filter:function(event,player,name){
					if(name=='damageCancelled') return true;
					for(var i of event.change_history){
						if(i<0) return true;
					}
					return false;
				},
				content:function(){
					player.draw(2);
				},
			},
			jinjian:{
				audio:2,
				trigger:{source:'damageBegin1'},
				logTarget:'player',
				filter:function(event,player){
					return !event.jinjian_source2&&!player.hasSkill('jinjian_source2');
				},
				prompt2:'令即将对其造成的伤害+1',
				check:function(event,player){
					return get.attitude(player,event.player)<0&&!event.player.hasSkillTag('filterDamage',null,{
						player:player,
						card:event.card,
					});
				},
				content:function(){
					trigger.jinjian_source=true;
					trigger.num++;
					player.addTempSkill('jinjian_source2')
				},
				group:'jinjian_player',
				subSkill:{
					player:{
						audio:'jinjian',
						trigger:{player:'damageBegin4'},
						filter:function(event,player){
							return !event.jinjian_player2&&!player.hasSkill('jinjian_player2');
						},
						prompt2:'令即将受到的伤害-1',
						content:function(){
							trigger.jinjian_player=true;
							trigger.num--;
							player.addTempSkill('jinjian_player2')
						},
					},
					source2:{
						trigger:{source:'damageBegin1'},
						forced:true,
						charlotte:true,
						filter:function(event,player){
							return !event.jinjian_source;
						},
						content:function(){
							trigger.num--;
							trigger.jinjian_source2=true;
							player.removeSkill('jinjian_source2');
						},
						marktext:' -1 ',
						intro:{
							content:'下次造成的伤害-1',
						},
					},
					player2:{
						trigger:{player:'damageBegin3'},
						forced:true,
						charlotte:true,
						filter:function(event,player){
							return !event.jinjian_player;
						},
						content:function(){
							trigger.num++;
							trigger.jinjian_player2=true;
							player.removeSkill('jinjian_player2');
						},
						marktext:' +1 ',
						intro:{
							content:'下次受到的伤害+1',
						},
					},
				},
				ai:{
					maixie_defend:true,
					threaten:0.9,
					effect:{
						target:function(card,player,target){
							if(player.hasSkillTag('jueqing')) return;
							//if(target.hujia) return;
							if(player._jinjian_tmp) return;
							if(_status.event.getParent('useCard',true)||_status.event.getParent('_wuxie',true)) return;
							if(get.tag(card,'damage')){
								if(target.hasSkill('jinjian_player2')){
									return [1,-2];
								}
								else{
									if(get.attitude(player,target)>0){
										return [0,0.2];
									}
									if(get.attitude(player,target)<0&&!player.hasSkillTag('damageBonus')){
										var sha=player.getCardUsable({name:'sha'});
										player._jinjian_tmp=true;
										var num=player.countCards('h',function(card){
											if(card.name=='sha'){
												if(sha==0){
													return false;
												}
												else{
													sha--;
												}
											}
											return get.tag(card,'damage')&&player.canUse(card,target)&&get.effect(target,card,player,player)>0;
										});
										delete player._jinjian_tmp;
										if(player.hasSkillTag('damage')){
											num++;
										}
										if(num<2){
											return [0,0.8];
										}
									}
								}
							}
						}
					}
				}
			},
			//冯妤
			tiqi:{
				audio:2,
				trigger:{global:['phaseDrawEnd','phaseDrawSkipped','phaseDrawCancelled']},
				filter:function(event,player){
					if(player==event.player) return false;
					var num=0;
					event.player.getHistory('gain',function(evt){
						if(evt.getParent().name=='draw'&&evt.getParent('phaseDraw')==event) num+=evt.cards.length;
					});
					return num!=2;
				},
				frequent:true,
				logTarget:'player',
				content:function(){
					'step 0'
					var num=0;
					trigger.player.getHistory('gain',function(evt){
						if(evt.getParent().name=='draw'&&evt.getParent('phaseDraw')==trigger) num+=evt.cards.length;
					});
					num=Math.abs(num-2);
					event.num=num;
					player.draw(num);
					'step 1'
					if(trigger.player.isIn()){
						player.chooseControl(' +'+num+' ',' -'+num+' ','cancel2').set('prompt','是否改变'+get.translation(trigger.player)+'本回合的手牌上限？').set('ai',function(){
							var sgn=get.sgn(get.attitude(_status.event.player,_status.event.getTrigger().player));
							if(sgn==0) return 2;
							if(sgn==1) return 0;
							return 1;
						});
					}
					else event.finish();
					'step 2'
					if(result.index<2){
						var target=trigger.player;
						player.line(target);
						if(!target.storage.tiqi_effect) target.storage.tiqi_effect=0;
						target.storage.tiqi_effect+=(num*get.sgn(0.5-result.index));
						target.addTempSkill('tiqi_effect');
						target.markSkill('tiqi_effect');
					}
				},
				subSkill:{
					effect:{
						mod:{
							maxHandcard:function(player,num){
								if(typeof player.storage.tiqi_effect=='number') return num+player.storage.tiqi_effect;
							},
						},
						charlotte:true,
						onremove:true,
						mark:true,
						intro:{
							content:(num)=>('手牌上限'+(num<0?'':'+')+num),
						},
					},
				},
			},
			baoshu:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				direct:true,
				filter:function(event,player){
					return player.maxHp>0;
				},
				content:function(){
					'step 0'
					player.chooseTarget([1,player.maxHp],get.prompt('baoshu'),'令至多'+get.cnNumber(player.maxHp)+'名角色重置武将牌并获得“梳”').set('ai',function(target){
						var att=get.attitude(player,target);
						if(att<=0) return 0;
						//if(target.isTurnedOver()) return 3*att;
						if(target.isLinked()&&get.effect(target,{name:'tiesuo'},player,player)>0) return 1.6*att;
						if(ui.selected.targets.length>=Math.sqrt(1+player.maxHp)) return 0;
						if(target!=player) return 1.3*att;
						return att;
					});
					'step 1'
					if(result.bool){
						var targets=result.targets;
						targets.sortBySeat();
						player.logSkill('baoshu',targets);
						event.targets=targets;
						event.num=0;
						event.num2=(1+player.maxHp-targets.length);
					}
					else event.finish();
					'step 2'
					var target=targets[num];
					event.target=target;
					if(!target.isIn()){
						if(num<targets.length-1){
							event.num++;
							event.goto(2);
						}
						else event.finish();
					}
					else if(target.isLinked()) target.link();
					'step 3'
					if(target.isIn()) target.addMark('baoshu',event.num2);
					if(num<targets.length-1){
						event.num++;
						event.goto(2);
					}
					else event.finish();
				},
				marktext:'梳',
				intro:{
					name2:'梳',
					content:'mark',
				},
				group:'baoshu_draw',
				subSkill:{
				 draw:{
				  trigger:{global:'phaseDrawBegin2'},
				  forced:true,
				  popup:false,
				  filter:function(event,player){
				   return !event.numFixed&&event.player.hasMark('baoshu');
				  },
				  content:function(){
				   var target=trigger.player,num=target.countMark('baoshu');
				   trigger.player.logSkill('baoshu_draw');
				   trigger.num+=num;
				   trigger.player.removeMark('baoshu',num);
				  },
				 },
				},
			},
			//吴范
			tianyun:{
				audio:2,
				trigger:{global:'phaseBegin'},
				frequent:true,
				filter:function(event,player){
					return event.player.getSeatNum()==game.roundNumber&&player.countCards('h')>0;
				},
				content:function(){
					'step 0'
					var suits=[],hs=player.getCards('h');
					for(var i of hs){
						suits.add(get.suit(i,player));
					}
					var num=suits.length;
					event.num=num;
					var cards=get.cards(num);
					game.cardsGotoOrdering(cards);
					var next=player.chooseToMove();
					next.set('list',[
						['牌堆顶',cards],
						['牌堆底'],
					]);
					next.set('prompt','天运：点击将牌移动到牌堆顶或牌堆底');
					next.processAI=function(list){
						var cards=list[0][1]
						return [[],cards];
					}
					'step 1'
					var top=result.moved[0];
					var bottom=result.moved[1];
					top.reverse();
					for(var i=0;i<top.length;i++){
						ui.cardPile.insertBefore(top[i],ui.cardPile.firstChild);
					}
					for(i=0;i<bottom.length;i++){
						ui.cardPile.appendChild(bottom[i]);
					}
					player.popup(get.cnNumber(top.length)+'上'+get.cnNumber(bottom.length)+'下');
					game.log(player,'将'+get.cnNumber(top.length)+'张牌置于牌堆顶');
					game.updateRoundNumber();
					if(top.length){
						game.delayx();
						event.finish();
					}
					'step 2'
					player.chooseTarget('是否令一名角色摸'+get.cnNumber(num)+'张牌，然后失去1点体力？').set('',function(target){
						if(!_status.event.goon||target.hasSkillTag('nogain')) return 0;
						return get.attitude(_status.event.player,target)*Math.sqrt(Math.max(1,5-target.getCards('h')));
					}).set('goon',num>1&&player.hp>5-num);
					'step 3'
					if(result.bool){
						var target=result.targets[0];
						player.line(target,'green');
						target.draw(num);
						player.loseHp();
					}
					else game.delayx();
				},
				group:'tianyun_gain',
				subSkill:{
					gain:{
						audio:'tianyun',
						trigger:{
							global:'phaseBefore',
							player:'enterGame',
						},
						forced:true,
						locked:false,
						filter:function(event,player){
							if(event.name=='phase'&&game.phaseNumber!=0) return false;
							var suits=lib.suit.slice(0),hs=player.getCards('h');
							for(var i of hs){
								suits.remove(get.suit(i,player));
								if(!suits.length) return false;
							}
							return true;
						},
						content:function(){
							var suits=lib.suit.slice(0),hs=player.getCards('h');
							for(var i of hs){
								suits.remove(get.suit(i,player));
							}
							var cards=[];
							for(var i of suits){
								var card=get.cardPile(function(card){
									return get.suit(card,false)==i;
								});
								if(card) cards.push(card);
							}
							if(cards.length) player.gain(cards,'gain2');
						},
					},
				},
			},
			wfyuyan:{
				audio:2,
				derivation:'refenyin',
				trigger:{global:'roundStart'},
				forced:true,
				locked:false,
				content:function(){
					'step 0'
					var next=player.chooseTarget('请选择【预言】的目标',true).set('animate',false).set('ai',function(){
						return Math.random();
					});
					'step 1'
					if(result.bool){
						player.storage.wfyuyan=result.targets[0];
						player.addSkill('wfyuyan_dying');
						player.addSkill('wfyuyan_damage');
					}
				},
				subSkill:{
					dying:{
						trigger:{global:'dying'},
						forced:true,
						charlotte:true,
						popup:false,
						content:function(){
							if(trigger.player==player.storage.wfyuyan){
								player.logSkill('wfyuyan',trigger.player);
								player.addTempSkill('iwasawa_refenyin',{player:'phaseEnd'});
							}
							player.removeSkill('wfyuyan_dying');
						},
					},
					damage:{
						trigger:{global:'damageSource'},
						forced:true,
						popup:false,
						charlotte:true,
						filter:function(event,player){
							return event.source&&event.source.isIn();
						},
						content:function(){
							if(trigger.source==player.storage.wfyuyan){
								player.logSkill('wfyuyan',trigger.source);
								player.draw(2);
							}
							player.removeSkill('wfyuyan_damage');
						},	
					},
				},
			},
			//张宝
			xinzhoufu:{
				audio:'zhoufu',
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('he')>0;
				},
				filterCard:true,
				filterTarget:function(card,player,target){
					return target!=player&&!target.getExpansions('xinzhoufu2').length;
				},
				check:function(card){
					return 6-get.value(card)
				},
				position:'he',
				discard:false,
				lose:false,
				delay:false,
				content:function(){
					target.addToExpansion(cards,player,'give').gaintag.add('xinzhoufu2');
					target.addSkill('xinzhoufu_judge');
				},
				ai:{
					order:9,
					result:{
						target:function(player,target){
							if(player.inRange(target)) return -1.3;
							return -1;
						},
					},
				},
				subSkill:{
					judge:{
						audio:'zhoufu',
						trigger:{player:'judgeBefore'},
						forced:true,
						charlotte:true,
						filter:function(event,player){
							return !event.directresult&&player.getExpansions('xinzhoufu2').length;
						},
						content:function(){
							var cards=[player.getExpansions('xinzhoufu2')[0]];
							trigger.directresult=cards[0];
						},
					},
				},
			},
			xinzhoufu2:{
				intro:{
					content:'expansion',
					markcount:'expansion',
				},
			},
			xinyingbing:{
				audio:'yingbin',
				trigger:{player:'useCardToPlayered'},
				forced:true,
				logTarget:'target',
				filter:function(event,player){
					return event.target.getExpansions('xinzhoufu2').length>0&&!player.hasHistory('gain',function(evt){
						var evtx=evt.getParent(2);
						return evtx&&evtx.name=='xinyingbing'&&evtx._trigger.target==event.target;
					});
				},
				content:function(){
					player.draw(2);
				},
				ai:{
					effect:{
						player:function(card,player,target){
							if(target&&target.getExpansions('xinzhoufu2').length>0&&!player.hasHistory('gain',function(evt){
								var evtx=evt.getParent(2);
								return evtx&&evtx.name=='xinyingbing'&&evtx._trigger.target==target;
							})) return [1,1];
						},
					},
				},
			},
			//孙翊
			syjiqiao:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				content:function(){
					var cards=get.cards(player.maxHp);
					cards.sort(function(a,b){
						return get.color(b).length-get.color(a).length;
					});
					player.addToExpansion(cards,'gain2').gaintag.add('syjiqiao');
					player.addTempSkill('syjiqiao_gain','phaseUseAfter');
				},
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				intro:{
					content:'expansion',
					markcount:'expansion',
				},
				subSkill:{
					gain:{
						audio:'syjiqiao',
						trigger:{player:'useCardAfter'},
						charlotte:true,
						forced:true,
						filter:function(event,player){
							return player.hasCard((card)=>card.hasGaintag('syjiqiao'),'x');
						},
						content:function(){
							'step 0'
							var cards=player.getExpansions('syjiqiao')
							var dialog=['激峭：选择获得一张牌']
							var reds=[],blacks=[];
							for(var i of cards) (get.color(i)=='red'?reds:blacks).push(i);
							if(reds.length>0){
								dialog.push('<div class="text center">红色牌</div>');
								dialog.push(reds);
							}
							if(blacks.length>0){
								dialog.push('<div class="text center">黑色牌</div>');
								dialog.push(blacks);
							};
							player.chooseButton(dialog,true).set('ai',function(button){
								var player=_status.event.player;
								var color=get.color(button.link),cards=player.getExpansions('syjiqiao');
								var num1=cards.filter((card)=>get.color(card)==color).length,num2=cards.length-num1;
								if(num1>=num2) return get.value(button.link);
								return 0;
							});
							'step 1'
							if(result.bool){
								player.gain(result.links,'gain2');
							}
							else event.finish();
							'step 2'
							var map={red:0,black:0},cards=player.getExpansions('syjiqiao')
							for(var i of cards){
								var color=get.color(i,false);
								if(map[color]!=undefined) map[color]++;
							}
							if(map.red==map.black) player.recover();
							else player.loseHp();
						},
						onremove:function(player){
							var cards=player.getExpansions('syjiqiao')
							if(cards.length) player.loseToDiscardpile(cards);
						},
					},
				},
			},
			syxiongyi:{
				audio:2,
				skillAnimation:true,
				animationColor:'wood',
				limited:true,
				enable:'chooseToUse',
				filter:function(event,player){
					if(event.type!='dying') return false;
					if(player!=event.dying) return false;
					return true;
				},
				content:function(){
					'step 0'
					player.awakenSkill('syxiongyi');
					if(!_status.characterlist){
						lib.skill.pingjian.initList();
					}
					event.hp=1-player.hp;
					if(_status.characterlist.contains('xushi')){
						if(player.name1=='re_sunyi'||player.name2=='re_sunyi') event._result={control:'re_sunyi'};
						else if(player.name2!=undefined){
							player.chooseControl(player.name1,player.name2).set('prompt','请选择要更换的武将牌');
						}
						else event._result={control:player.name1};
						hp+=2;
						_status.characterlist.remove('xushi');
						_status.characterlist.add('re_sunyi');
						player.reinit('re_sunyi','xushi',false);
					}
					else{
						player.addSkillLog('olhunzi');
						event.goto(2);
					}
					'step 1'
					event.hp+=2;
					var name=result.control;
					_status.characterlist.remove('xushi');
					_status.characterlist.add(name);
					player.reinit(name,'xushi',false);
					'step 2'
					var hp=event.hp;
					if(hp>0) player.recover(hp);
				},
				ai:{
					order:1,
					save:true,
					skillTagFilter:function(player,arg,target){
						return player==target;
					},
					result:{
						player:10
					},
				},
				derivation:['olhunzi','reyingzi','gzyinghun'],
			},
			gzyinghun_re_sunyi:{audio:1},
			reyingzi_re_sunyi:{audio:1},
			//曹金玉
			yuqi:{
				audio:2,
				trigger:{global:'damageEnd'},
				init:function(player){
					if(!player.storage.yuqi) player.storage.yuqi=[0,3,1,1];
				},
				getInfo:function(player){
					if(!player.storage.yuqi) player.storage.yuqi=[0,3,1,1];
					return player.storage.yuqi;
				},
				onremove:true,
				usable:2,
				filter:function(event,player){
					var list=lib.skill.yuqi.getInfo(player);
					return event.player.isIn()&&get.distance(player,event.player)<=list[0];
				},
				logTarget:'player',
				content:function(){
					'step 0'
					event.list=lib.skill.yuqi.getInfo(player);
					var cards=get.cards(event.list[1]);
					event.cards=cards;
					game.cardsGotoOrdering(cards);
					var next=player.chooseToMove(true,'隅泣（若对话框显示不完整，可下滑操作）');
					next.set('list',[
						['牌堆顶的牌',cards],
						['交给'+get.translation(trigger.player)+'（至少一张'+(event.list[2]>1?('，至多'+get.cnNumber(event.list[2])+'张'):'')+'）'],
						['交给自己（至多'+get.cnNumber(event.list[3])+'张）'],
					]);
					next.set('filterMove',function(from,to,moved){
						var info=lib.skill.yuqi.getInfo(_status.event.player);
						if(to==1) return moved[1].length<info[2];
						if(to==2) return moved[2].length<info[3];
						return true;
					});
					next.set('processAI',function(list){
						var cards=list[0][1].slice(0).sort(function(a,b){
							return get.value(b,'raw')-get.value(a,'raw');
						}),player=_status.event.player,target=_status.event.getTrigger().player;
						var info=lib.skill.yuqi.getInfo(_status.event.player);
						var cards1=cards.splice(0,Math.min(info[3],cards.length-1));
						var card2;
						if(get.attitude(player,target)>0) card2=cards.shift();
						else card2=cards.pop();
						return [cards,[card2],cards1];
					});
					next.set('filterOk',function(moved){
						return moved[1].length>0;
					});
					'step 1'
					if(result.bool){
						var moved=result.moved;
						cards.removeArray(moved[1]);
						cards.removeArray(moved[2]);
						while(cards.length){
							ui.cardPile.insertBefore(cards.pop().fix(),ui.cardPile.firstChild);
						}
						var list=[[trigger.player,moved[1]]];
						if(moved[2].length) list.push([player,moved[2]]);
						game.loseAsync({
							gain_list:list,
							giver:player,
							animate:'gain2',
						}).setContent('gaincardMultiple');
					}
				},
				mark:true,
				intro:{
					content:function(storage,player){
						var info=lib.skill.yuqi.getInfo(player);
						return '<div class="text center"><span class=thundertext>蓝色：'+info[0]+'</span>　<span class=firetext>红色：'+info[1]+'</span><br><span class=greentext>绿色：'+info[2]+'</span>　<span class=yellowtext>黄色：'+info[3]+'</span></div>'
					},
				},
				ai:{
					threaten:8.8,
				},
			},
			shanshen:{
				audio:2,
				trigger:{global:'die'},
				direct:true,
				content:function(){
					'step 0'
					event.goon=!player.hasAllHistory('sourceDamage',function(evt){
						return evt.player==trigger.player;
					});
					var list=lib.skill.yuqi.getInfo(player);
					player.chooseControl('<span class=thundertext>蓝色('+list[0]+')</span>','<span class=firetext>红色('+list[1]+')</span>','<span class=greentext>绿色('+list[2]+')</span>','<span class=yellowtext>黄色('+list[3]+')</span>','cancel2').set('prompt',get.prompt('shanshen')).set('prompt2','令〖隅泣〗中的一个数字+2'+(event.goon?'并回复1点体力':'')).set('ai',function(){
						var player=_status.event.player,info=lib.skill.yuqi.getInfo(player);
						if(info[0]<info[3]&&game.countPlayer(function(current){
							return get.distance(player,current)<=info[0];
						})<Math.min(3,game.countPlayer())) return 0;
						if(info[3]<info[1]-1) return 3;
						if(info[1]<5) return 1;
						if(info[0]<5&&game.hasPlayer(function(current){
							return current!=player&&get.distance(player,current)>info[0];
						})) return 0;
						return 2;
					});
					'step 1'
					if(result.control!='cancel2'){
						player.logSkill('shanshen',trigger.player);
						var list=lib.skill.yuqi.getInfo(player);
						list[result.index]=Math.min(5,list[result.index]+2);
						game.log(player,'将',result.control,'数字改为','#y'+list[result.index])
						player.markSkill('yuqi');
						if(event.goon) player.recover();
					}
				},
			},
			xianjing:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				direct:true,
				content:function(){
					'step 0'
					var list=lib.skill.yuqi.getInfo(player);
					player.chooseControl('<span class=thundertext>蓝色('+list[0]+')</span>','<span class=firetext>红色('+list[1]+')</span>','<span class=greentext>绿色('+list[2]+')</span>','<span class=yellowtext>黄色('+list[3]+')</span>','cancel2').set('prompt',get.prompt('xianjing')).set('prompt2','令〖隅泣〗中的一个数字+1').set('ai',function(){
						var player=_status.event.player,info=lib.skill.yuqi.getInfo(player);
						if(info[0]<info[3]&&game.countPlayer(function(current){
							return get.distance(player,current)<=info[0];
						})<Math.min(3,game.countPlayer())) return 0;
						if(info[3]<info[1]-1) return 3;
						if(info[1]<5) return 1;
						if(info[0]<5&&game.hasPlayer(function(current){
							return current!=player&&get.distance(player,current)>info[0];
						})) return 0;
						return 2;
					});
					'step 1'
					if(result.control!='cancel2'){
						player.logSkill('xianjing');
						var list=lib.skill.yuqi.getInfo(player);
						list[result.index]=Math.min(5,list[result.index]+1);
						game.log(player,'将',result.control,'数字改为','#y'+list[result.index])
						player.markSkill('yuqi');
						if(player.isDamaged()) event.finish();
					}
					else event.finish();
					'step 2'
					var list=lib.skill.yuqi.getInfo(player);
					player.chooseControl('<span class=thundertext>蓝色('+list[0]+')</span>','<span class=firetext>红色('+list[1]+')</span>','<span class=greentext>绿色('+list[2]+')</span>','<span class=yellowtext>黄色('+list[3]+')</span>','cancel2').set('prompt','是否令〖隅泣〗中的一个数字+1？').set('ai',function(){
						var player=_status.event.player,info=lib.skill.yuqi.getInfo(player);
						if(info[0]<info[3]&&game.countPlayer(function(current){
							return get.distance(player,current)<=info[0];
						})<Math.min(3,game.countPlayer())) return 0;
						if(info[3]<info[1]-1) return 3;
						if(info[1]<5) return 1;
						if(info[0]<5&&game.hasPlayer(function(current){
							return current!=player&&get.distance(player,current)>info[0];
						})) return 0;
						return 2;
					});
					'step 3'
					if(result.control!='cancel2'){
						var list=lib.skill.yuqi.getInfo(player);
						list[result.index]=Math.min(5,list[result.index]+1);
						game.log(player,'将',result.control,'数字改为','#y'+list[result.index])
						player.markSkill('yuqi');
					}
				},
			},
			//周夷
			zhukou:{
				audio:2,
				trigger:{source:'damageSource'},
				filter:function(event,player){
					if(!player.getHistory('useCard').length) return false;
					var evt=event.getParent('phaseUse');
					if(!evt||!evt.player) return false;
					return player.getHistory('sourceDamage',function(evtx){
						return evtx.getParent('phaseUse')==evt;
					}).indexOf(event)==0;
				},
				frequent:true,
				content:function(){
					player.draw(player.getHistory('useCard').length);
				},
				group:'zhukou_all',
				subSkill:{
					all:{
						audio:'zhukou',
						trigger:{player:'phaseJieshuBegin'},
						filter:function(event,player){
							return game.countPlayer((current)=>(current!=player))>1&&!player.getHistory('sourceDamage').length;
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('zhukou'),'对两名其他角色各造成1点伤害',2,lib.filter.notMe).set('ai',function(target){
								var player=_status.event.player;
								return get.damageEffect(target,player,player);
							});
							'step 1'
							if(result.bool){
								var targets=result.targets.sortBySeat();
								player.logSkill('zhukou',targets);
								for(var i of targets) i.damage();
							}
						},
					},
				},
			},
			mengqing:{
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				filter:function(event,player){
					return game.countPlayer((current)=>current.isDamaged())>player.hp;
				},
				juexingji:true,
				skillAnimation:true,
				animationColor:'wood',
				content:function(){
					player.awakenSkill('mengqing');
					player.gainMaxHp(3);
					player.recover(3);
					player.removeSkill('zhukou');
					player.addSkill('yuyun');
				},
				derivation:'yuyun',
			},
			yuyun:{
				trigger:{player:'phaseUseBegin'},
				forced:true,
				filter:function(event,player){
					return player.hp>0||player.maxHp>1;
				},
				content:function(){
					'step 0'
					if(player.maxHp<=1) event._result={control:'失去体力',index:0};
					else if(player.hp<1) event._result={control:'减体力上限',index:1};
					else player.chooseControl('失去体力','减体力上限').set('prompt','玉陨：失去1点体力或减1点体力上限').set('ai',function(){
						var player=_status.event.player;
						if(player.hp<2||player.getDamagedHp()>2) return 1;
						return 0;
					});
					'step 1'
					if(result.index==1) player.loseMaxHp();
					else player.loseHp();
					'step 2'
					event.videoId=lib.status.videoId++;
					var func=function(player,id){
						var list=[
							'选项一：摸两张牌',
							'选项二：对一名其他角色造成1点伤害，且本回合对其使用【杀】无距离和次数限制',
							'选项三：本回合手牌上限视为无限',
							'选项四：获得一名其他角色区域内的一张牌',
							'选项五：令一名其他角色将手牌数摸至体力上限（至多摸至五张）',
						];
						var choiceList=ui.create.dialog('玉陨：请选择一'+(player.getDamagedHp()>0?('至'+get.cnNumber(player.getDamagedHp()+1)):'')+'项');
						choiceList.videoId=id;
						for(var i=0;i<list.length;i++){
							var str='<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
							str+=list[i];
							str+='</div>';
							var next=choiceList.add(str);
							next.firstChild.addEventListener(lib.config.touchscreen?'touchend':'click',ui.click.button);
							next.firstChild.link=i;
							for(var j in lib.element.button){
								next[j]=lib.element.button[j];
							}
							choiceList.buttons.add(next.firstChild);
						}
						return choiceList;
					};
					if(player.isOnline2()){
						player.send(func,player,event.videoId);
					}
					event.dialog=func(player,event.videoId);
					if(player!=game.me||_status.auto){
						event.dialog.style.display='none';
					}
					var next=player.chooseButton();
					next.set('dialog',event.videoId);
					next.set('forced',true);
					next.set('ai',function(button){
						var player=_status.event.player;
						switch(button.link){
							case 0:
								return 2;
								break;
							case 1:
								return Math.max(0.5,player.countCards('hs',function(card){
									return get.name(card)=='sha'&&player.hasValueTarget(card);
								})-player.getCardUsable({name:'sha'}))+Math.max.apply(Math,game.filterPlayer(function(current){
									return current!=player;
								}).map(function(target){
									return get.damageEffect(target,player,player);
								}));
							 break;
							case 2:
								return player.needsToDiscard()/4;
							 break;
							case 3:
								var num=0;
								return 0.8*Math.max.apply(Math,game.filterPlayer(function(current){
									return current!=player&&current.hasCard((card)=>lib.filter.canBeGained(card,current,player),'hej');
								}).map(function(target){
									return get.effect(target,{name:'shunshou_copy'},player,player);
								}));
							 break;
							case 4:
								var num=0;
								game.countPlayer(function(current){
									if(current!=player&&get.attitude(player,current)>0){
										var num2=Math.min(5,current.maxHp)-current.countCards('h');
										if(num2>num) num=num2;
									}
								});
								return num*0.8;
							 break;
						}
					});
					if(player.getDamagedHp()>0) next.set('selectButton',[1,1+player.getDamagedHp()]);
					'step 3'
					if(player.isOnline2()){
						player.send('closeDialog',event.videoId);
					}
					event.dialog.close();
					result.links.sort();
					for(var i of result.links) game.log(player,'选择了','#g【玉陨】','的','#y选项'+get.cnNumber(1+i,true))
					event.links=result.links;
					if(result.links.contains(0)) player.draw(2);
					if(result.links.contains(2)) player.addTempSkill('yuyun_114514');
					'step 4'
					if(event.links.contains(1)&&game.hasPlayer(function(current){
						return current!=player;
					})) player.chooseTarget(lib.filter.notMe,true,'对一名其他角色造成1点伤害').set('ai',function(target){
						var player=_status.event.player;
						return get.damageEffect(target,player,player);
					});
					else if(event.links.contains(3)) event.goto(6);
					else if(event.links.contains(4)) event.goto(8);
					else event.finish();
					'step 5'
					if(result.bool){
						var target=result.targets[0];
						player.line(target,'green');
						target.damage();
						player.markAuto('yuyun_sha',[target]);
						player.addTempSkill('yuyun_sha');
					}
					if(event.links.contains(3)) event.goto(6);
					else if(event.links.contains(4)) event.goto(8);
					else event.finish();
					'step 6'
					if(event.links.contains(3)&&game.hasPlayer(function(current){
						return current!=player&&current.hasCard((card)=>lib.filter.canBeGained(card,current,player),'hej');
					})){
						player.chooseTarget(true,'获得一名其他角色区域内的一张牌',function(card,player,current){
							return current!=player&&current.hasCard((card)=>lib.filter.canBeGained(card,current,player),'hej');
						}).set('ai',function(target){
							var player=_status.event.player;
							return get.effect(target,{name:'shunshou_copy'},player,player);
						});
					}
					else if(event.links.contains(4)) event.goto(8);
					else event.finish();
					'step 7'
					if(result.bool){
						var target=result.targets[0];
						player.line(target,'green');
						player.gainPlayerCard(target,'hej',true);
					}
					if(!event.links.contains(4)) event.finish();
					'step 8'
					if(event.links.contains(4)&&game.hasPlayer(function(current){
						return current!=player&&current.countCards('h')<Math.min(5,current.maxHp);
					})){
						player.chooseTarget(true,'令一名其他角色将手牌数摸至体力上限',function(card,player,current){
							return current!=player&&current.countCards('h')<Math.min(5,current.maxHp);
						}).set('ai',function(target){
							var att=get.attitude(_status.event.player,target);
							if(target.hasSkillTag('nogain')) att/=6;
							if(att>2){
								return Math.min(5,target.maxHp)-target.countCards('h');
							}
							return att/3;
						});
					}
					else event.finish();
					'step 9'
					if(result.bool){
						var target=result.targets[0];
						player.line(target,'green');
						target.drawTo(Math.min(5,target.maxHp));
					}
				},
				subSkill:{
					'114514':{
						mod:{
							maxHandcardFinal:function(player,num){
								return 114514;
							},
						},
						charlotte:true,
					},
					sha:{
						mod:{
							cardUsableTarget:function(card,player,target){
								if(card.name=='sha'&&player.getStorage('yuyun_sha').contains(target)) return Infinity;
							},
							targetInRange:function(card,player,target){
								if(card.name=='sha'&&player.getStorage('yuyun_sha').contains(target)) return true;
							},
						},
						charlotte:true,
						onremove:true,
					},
				},
			},
			//潘淑
			zhiren:{
				audio:2,
				trigger:{player:'useCard'},
				filter:function(event,player){
					return (player==_status.currentPhase||player.hasSkill('yaner_zhiren'))&&event.card.isCard&&player.getHistory('useCard',function(evt){
						return evt.card.isCard;
					}).indexOf(event)==0;
				},
				frequent:true,
				locked:false,
				content:function(){
					'step 0'
					event.num=get.translation(trigger.card.name).length;
					player.chooseToGuanxing(event.num);
					if(event.num<2) event.finish();
					'step 1'
					if(!game.hasPlayer(function(current){
						return current.countDiscardableCards(player,'e')>0;
					})){
						event.goto(3);
					}
					else player.chooseTarget('织纴：是否弃置一名角色装备区内的一张牌？',function(card,player,target){
						return target.countDiscardableCards(player,'e')>0;
					}).set('ai',function(target){
						var player=_status.event.player,att=get.attitude(player,target),es=target.getCards('e'),val=0;
						for(var i of es){
							var eff=-(get.value(i,target)-0.1)*att;
							if(eff>val) val=eff;
						}
						return eff;
					});
					'step 2'
					if(result.bool){
						var target=result.targets[0];
						player.addExpose(0.15);
						player.line(target,'green');
						player.discardPlayerCard(target,'e',true);
					}
					else event.goto(5);
					if(event.num<3) event.finish();
					'step 3'
					if(!game.hasPlayer(function(current){
						return current.countDiscardableCards(player,'j')>0;
					})){
						if(event.num<3) event.finish();
						else event.goto(5);
					}
					else player.chooseTarget('织纴：是否弃置一名角色判定区内的一张牌？',function(card,player,target){
						return target.countDiscardableCards(player,'j')>0;
					}).set('ai',function(target){
						var player=_status.event.player,att=get.attitude(player,target),es=target.getCards('j'),val=0;
						for(var i of es){
							var eff=-(get.effect(target,i,target,player))
							if(eff>val) val=eff;
						}
						return eff;
					});
					'step 4'
					if(result.bool){
						var target=result.targets[0];
						player.addExpose(0.15);
						player.line(target,'green');
						player.discardPlayerCard(target,'j',true);
					}
					if(event.num<3) event.finish();
					'step 5'
					player.recover();
					if(event.num<4) event.finish();
					'step 6'
					player.draw(3);
				},
				mod:{
					aiOrder:function(player,card,num){
						if(player==_status.currentPhase&&!player.getHistory('useCard',function(evt){
							return evt.card.isCard;
						}).length) return num+Math.pow(get.translation(card.name).length,2);
					},
				},
			},
			yaner:{
				audio:2,
				trigger:{
					global:['equipAfter','addJudgeAfter','loseAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
				},
				filter:function(event,player){
					var current=_status.currentPhase;
					if(!current||current==player||!current.isIn()||!current.isPhaseUsing()) return false;
					var evt=event.getl(current);
					return evt&&evt.hs&&evt.hs.length&&current.countCards('h')==0;
				},
				usable:1,
				logTarget:function(){
					return _status.currentPhase;
				},
				prompt2:'与该角色各摸两张牌',
				check:function(event,player){
					return get.attitude(player,_status.currentPhase)>0;
				},
				content:function(){
					'step 0'
					game.asyncDraw([_status.currentPhase,player],2);
					'step 1'
					var e1=player.getHistory('gain',function(evt){
						return evt.getParent(2)==event;
					})[0];
					if(e1&&e1.cards&&e1.cards.length==2&&get.type(e1.cards[0])==get.type(e1.cards[1])){
						player.addTempSkill('yaner_zhiren',{player:'phaseBegin'});
						game.log(player,'修改了技能','#g【织纴】');
					}
					var target=_status.currentPhase;
					if(target.isIn()&&target.isDamaged()){
						var e2=target.getHistory('gain',function(evt){
							return evt.getParent(2)==event;
						})[0];
						if(e2&&e2.cards&&e2.cards.length==2&&get.type(e2.cards[0])==get.type(e2.cards[1])) target.recover();
					}
					'step 2'
					game.delayx();
				},
				subSkill:{
					zhiren:{charlotte:true},
				},
				ai:{
					expose:0.5,
				},
			},
			//杨婉
			youyan:{
				audio:2,
				// trigger:{
				// 	player:'loseAfter',
				// 	global:'loseAsyncAfter',
				// },
				trigger:{
					player:['loseAfter','equipAfter'],
					global:['loseAsyncAfter','cardsDiscardAfter'],
				},
				//usable:1,
				prompt2:function(event,player){
					var cards2=[];
					if(event.name=='cardsDiscard'){
						var evtx=event.getParent();
						if(evtx.name!='orderingDiscard') return false;
						var evtx2=(evtx.relatedEvent||evtx.getParent());
						if(evtx2.name=='useCard'||evtx2.name=='respond') return false;
						player.getHistory('lose',evtx3=>{
							var evtx4=evtx3.relatedEvent||evtx3.getParent();
							if(evtx2!=evtx4) return false;
							if(!evtx3.cards2||!evtx3.cards2.length) return false;
							cards2.addArray(evtx3.cards2.filterInD('d'));
						});
					}
					else if(event.name=='loseAsync'){
						player.hasHistory('lose',evt=>{
							if(evt.getParent()!=event||evt.position!=ui.discardPile) return false;
							cards2.addArray(evt.cards2.filterInD('d'));
						});
					}
					else{
						cards2.addArray(event.getd(player).filterInD('d'));
					}
					return '获得与'+get.translation(cards2)+'花色'+(cards2.length>1?'各':'')+'不相同的牌各一张';
				},
				filter:function(event,player){
					if(player!=_status.currentPhase) return false;
					var cards2=[];
					if(event.name=='cardsDiscard'){
						var evtx=event.getParent();
						if(evtx.name!='orderingDiscard') return false;
						var evtx2=(evtx.relatedEvent||evtx.getParent());
						if(evtx2.name=='useCard'||evtx2.name=='respond') return false;
						player.getHistory('lose',evtx3=>{
							var evtx4=evtx3.relatedEvent||evtx3.getParent();
							if(evtx2!=evtx4) return false;
							if(!evtx3.cards2||!evtx3.cards2.length) return false;
							cards2.addArray(evtx3.cards2.filterInD('d'));
						});
					}
					else if(event.name=='loseAsync'){
						player.hasHistory('lose',evt=>{
							if(evt.getParent()!=event||evt.position!=ui.discardPile) return false;
							cards2.addArray(evt.cards2.filterInD('d'));
						});
					}
					else{
						cards2.addArray(event.getd(player).filterInD('d'));
					}
					if(!cards2.length) return false;
					var list=[];
					for(var i of cards2){
						list.add(get.suit(i,player));
						if(list.length>=lib.suit.length) return false;
					}
					var evt=event.getParent('phaseUse');
					if(evt&&evt.player==player&&!evt.youyaned) return true;
					var evt=event.getParent('phaseDiscard');
					if(evt&&evt.player==player&&!evt.youyaned) return true;
					return false;
				},
				content:function(){
					var evt=trigger.getParent('phaseUse');
					if(evt&&evt.player==player) evt.youyaned=true;
					else{
						var evt=trigger.getParent('phaseDiscard');
						if(evt) evt.youyaned=true;
					}
					var list=[],cards=[];
					var cards2=[];
					if(trigger.name=='cardsDiscard'){
						var evtx=trigger.getParent();
						if(evtx.name!='orderingDiscard') return false;
						var evtx2=(evtx.relatedEvent||evtx.getParent());
						if(evtx2.name=='useCard'||evtx2.name=='respond') return false;
						player.getHistory('lose',evtx3=>{
							var evtx4=evtx3.relatedEvent||evtx3.getParent();
							if(evtx2!=evtx4) return false;
							if(!evtx3.cards2||!evtx3.cards2.length) return false;
							cards2.addArray(evtx3.cards2.filterInD('d'));
						});
					}
					else if(trigger.name=='loseAsync'){
						player.hasHistory('lose',evt=>{
							if(evt.getParent()!=trigger||evt.position!=ui.discardPile) return false;
							cards2.addArray(evt.cards2.filterInD('d'));
						});
					}
					else{
						cards2.addArray(trigger.getd(player).filterInD('d'));
					}
					for(var i of cards2){
						list.add(get.suit(i,player));
					}
					for(var i of lib.suit){
						if(list.contains(i)) continue;
						var card=get.cardPile2(function(card){
							return get.suit(card,false)==i;
						})
						if(card) cards.push(card);
					}
					if(cards.length) player.gain(cards,'gain2');
				},
				ai:{
					effect:{
						player_use:function(card,player,target){
							if(typeof card=='object'&&player==_status.currentPhase&&
							//(!player.storage.counttrigger||!player.storage.counttrigger.youyan)&&
							player.needsToDiscard()==1&&card.cards&&card.cards.filter(function(i){
								return get.position(i)=='h';
							}).length>0&&!get.tag(card,'draw')&&!get.tag(card,'gain')&&!get.tag(card,'discard')) return 'zeroplayertarget';
						},
					},
				},
			},
			zhuihuan:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return !current.hasSkill('zhuihuan2_new');
					});
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('zhuihuan'),'令一名角色获得“追还”效果',function(card,player,target){
						return !target.hasSkill('zhuihuan2_new');
					}).set('ai',function(target){
						var player=_status.event.player,att=get.attitude(player,target);
						if(target.hasSkill('maixie')||target.hasSkill('maixie_defend')) att/=3;
						if(target!=player) att/=Math.pow(game.players.length-get.distance(player,target,'absolute'),0.7);
						return att;
					}).set('animate',false);
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('zhuihuan');
						target.addTempSkill('zhuihuan2_new',{player:'phaseZhunbei'});
						game.delayx();
					}
				},
			},
			zhuihuan2_new:{
				trigger:{player:'phaseZhunbeiBegin'},
				charlotte:true,
				forced:true,
				onremove:true,
				filter:function(event,player){
					if(player.storage.zhuihuan2_new){
						for(var source of player.storage.zhuihuan2_new){
							if(!source.isIn()) continue;
							if(source.hp>player.hp) return true;
							return source.countCards('h')>0;
						}
					}
				},
				logTarget:function(event,player){
					return player.storage.zhuihuan2_new.filter(function(target){
						return target.isIn();
					});
				},
				content:function(){
					'step 0'
					event.targets=player.storage.zhuihuan2_new;
					player.removeSkill('zhuihuan2_new');
					'step 1'
					var target=targets.shift();
					if(target.isIn()){
						if(target.hp>player.hp) target.damage(2);
						else{
							var hs=target.getCards('h');
							if(hs.length) target.discard(hs.randomGets(2));
						}
					}
					if(targets.length) event.redo();
				},
				group:'zhuihuan2_new_count',
				subSkill:{
					count:{
						trigger:{player:'damage'},
						forced:true,
						silent:true,
						popup:false,
						charlotte:true,
						filter:function(event,player){
							return get.itemtype(event.source)=='player';
						},
						content:function(){
							player.markAuto('zhuihuan2_new',[trigger.source]);
						},
					},
				},
			},
			zhuihuan2:{
				trigger:{player:'damageEnd'},
				forced:true,
				charlotte:true,
				logTarget:'source',
				filter:function(event,player){
					var source=event.source;
					if(source.hp>player.hp) return true;
					return source.countCards('h')>0;
				},
				content:function(){
					if(player.hp<trigger.source.hp) trigger.source.damage();
					else trigger.source.discard(trigger.source.getCards('h').randomGet());
				},
				mark:true,
				intro:{content:'当你受到伤害后，若伤害来源体力值大于你，则你对其造成1点伤害，否则其随机弃置一张手牌'},
			},
			//阮瑀
			xingzuo:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				frequent:true,
				content:function(){
					'step 0'
					player.addTempSkill('xingzuo2');
					var cards=get.bottomCards(3);
					event.cards2=cards;
					game.cardsGotoOrdering(cards);
					var next=player.chooseToMove('兴作：将三张牌置于牌堆底');
					var list=[['牌堆底',cards]],hs=player.getCards('h');
					if(hs.length){
						list.push(['手牌',hs]);
						next.set('filterMove',function(from,to){
							return typeof to!='number';
						});
					}
					next.set('list',list);
					next.set('processAI',function(list){
						var allcards=list[0][1].slice(0),cards=[];
						if(list.length>1){
							allcards=allcards.concat(list[1][1]);
						}
						var canchoose=allcards.slice(0);
						var player=_status.event.player;
						var getv=function(button){
							if(button.name=='sha'&&allcards.filter(function(card){
								return card.name=='sha'&&!cards.filter(function(){
									return button==card;
								}).length;
							}).length>player.getCardUsable({name:'sha'})) return 10;
							return -player.getUseValue(button,player);
						};
						while(cards.length<3){
							canchoose.sort(function(a,b){
								return getv(b)-getv(a);
							});
							cards.push(canchoose.shift());
						}
						return [cards,canchoose];
					})
					'step 1'
					if(result.bool){
						event.forceDie=true;
						var cards=result.moved[0];
						event.cards=cards;
						player.storage.xingzuo2=cards;
						var hs=player.getCards('h');
						var lose=[],gain=event.cards2;
						for(var i of cards){
							if(hs.contains(i)) lose.push(i);
							else gain.remove(i);
						}
						if(lose.length) player.lose(lose,ui.cardPile);
						if(gain.length) player.gain(gain,'draw');
					}
					else event.finish();
					'step 2'
					for(var i of cards){
						if(!(('hejsdx').includes(get.position(i,true)))){
							i.fix();
							ui.cardPile.appendChild(i);
						}
					}
					game.updateRoundNumber();
				},
			},
			xingzuo2:{
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				charlotte:true,
				onremove:true,
				filter:function(event,player){
					return game.hasPlayer(function(target){
						return target.countCards('h')>0;
					});
				},
				content:function(){
					'step 0'
					player.chooseTarget(function(card,player,target){
						return target.countCards('h')>0;
					},'兴作：是否令一名角色将其手牌与牌堆底的三张牌替换？').set('ai',function(target){
						var player=_status.event.player,att=get.attitude(player,target),hs=target.getCards('h'),num=hs.length;
						var getv=function(list,target){
							var num=0;
							for(var i of list) num+=get.value(i,target);
							return num;
						},val=getv(hs,target)-getv(player.storage.xingzuo2,target);
						if(num<3) return att*Math.sqrt(Math.max(0,-val))*1.5;
						if(num==3) return -att*Math.sqrt(Math.max(0,val));
						if(player.hp<(num>4?3:2)) return 0;
						return -att*Math.sqrt(Math.max(0,val));
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('xingzuo',target);
						var cards=get.bottomCards(3);
						game.cardsGotoOrdering(cards);
						var hs=target.getCards('h');
						target.lose(hs,ui.cardPile);
						target.gain(cards,'draw');
						if(hs.length>3) player.loseHp();
					}
					else event.finish();
					'step 2'
					game.updateRoundNumber();
				},
			},
			miaoxian:{
				hiddenCard:function(player,name){
					return get.type(name)=='trick'&&!player.hasSkill('miaoxian2')&&player.countCards('h',{color:'black'})==1;
				},
				enable:'chooseToUse',
				filter:function(event,player){
					if(player.hasSkill('miaoxian2')) return false;
					var cards=player.getCards('h',{color:'black'});
					if(cards.length!=1) return false;
					var mod2=game.checkMod(cards[0],player,'unchanged','cardEnabled2',player);
					if(mod2===false) return false;
					for(var i of lib.inpile){
						if(get.type(i)=='trick'&&event.filterCard({
							name:i,
							cards:cards,
						},player,event)) return true;
					}
					return false;
				},
				chooseButton:{
					dialog:function(event,player){
						var cards=player.getCards('h',{color:'black'});
						var list=[];
						for(var i of lib.inpile){
							if(get.type(i)=='trick'&&event.filterCard({
								name:i,
								cards:cards,
							},player,event)){
								list.push(['锦囊','',i]);
							}
						}
						return ui.create.dialog('妙弦',[list,'vcard'],'hidden');
					},
					check:function(button){
						var player=_status.event.player;
						return player.getUseValue({name:button.link[2]})+1;
					},
					backup:function(links,player){
						return {
							audio:'miaoxian',
							popname:true,
							filterCard:{color:'black'},
							selectCard:-1,
							position:'h',
							viewAs:{
								name:links[0][2],
							},
							onuse:function(links,player){
								player.addTempSkill('miaoxian2');
							},
						}
					},
					prompt:function(links,player){
						return '将'+get.translation(player.getCards('h',{color:'black'})[0])+'当做'+get.translation(links[0][2])+'使用';
					},
				},
				group:'miaoxian_use',
				subfrequent:['use'],
				subSkill:{
					use:{
						audio:'miaoxian',
						trigger:{player:'loseAfter'},
						frequent:true,
						prompt:'是否发动【妙弦】摸一张牌？',
						filter:function(event,player){
							var evt=event.getParent();
							if(evt.name!='useCard') return false;
							return event.hs&&event.hs.length==1&&event.cards&&event.cards.length==1
							&&get.color(event.hs[0],player)=='red'&&!player.countCards('h',{color:'red'});
						},
						content:function(){
							player.draw();
						},
					},
					backup:{
						audio:'miaoxian',
					},
				},
				ai:{
					order:12,
					result:{
						player:1,
					},
				},
			},
			miaoxian2:{
				charlotte:true,
			},
			//樊玉凤
			bazhan:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				zhuanhuanji:true,
				marktext:'☯',
				mark:true,
				intro:{
					content:function(storage,player){
						return '出牌阶段限一次，'+(storage?'你可以获得一名其他角色的至多两张手牌。':'你可以将至多两张手牌交给一名其他角色。')+'若以此法移动的牌包含【酒】或♥牌，则你可令得到牌的角色执行一项：①回复1点体力。②复原武将牌。'
					},
				},
				filter:function(event,player){
					if(player.storage.bazhan){
						return game.hasPlayer(function(current){
							return current!=player&&current.countGainableCards(player,'h')>0;
						})
					}
					return player.countCards('h')>0;
				},
				filterCard:true,
				discard:false,
				lose:false,
				selectCard:function(){
					if(_status.event.player.storage.bazhan) return 0;
					return [1,2];
				},
				filterTarget:function(card,player,target){
					if(player==target) return false;
					if(player.storage.bazhan) return target.countGainableCards(player,'h')>0;
					return true;
				},
				prompt:function(){
					if(_status.event.player.storage.bazhan) return '获得一名其他角色的至多两张手牌';
					return '将至多两张手牌交给一名其他角色';
				},
				delay:false,
				check:function(card){
					var player=_status.event.player;
					var bool1=false,bool2=false;
					for(var i of game.players){
						if(get.attitude(player,i)<=0||player==i) continue;
						bool1=true;
						if(i.isDamaged()||i.isTurnedOver()){
							bool2=true;
							break;
						}
					}
					if(bool2&&!ui.selected.cards.length&&(get.suit(card,player)=='heart'||get.name(card,player)=='jiu')) return 10;
					if(bool1) return 9-get.value(card);
					if(get.color(card)=='red') return 5-get.value(card);
					return 0;
				},
				content:function(){
					'step 0'
					if(player.storage.bazhan){
						event.recover=player;
						player.gainPlayerCard(target,'h',true,'visibleMove',[1,2]);
					}
					else{
						event.recover=target;
						player.give(cards,target);
					}
					player.changeZhuanhuanji('bazhan');
					'step 1'
					var target=event.recover;
					if(result.bool&&result.cards&&result.cards.length){
						cards=result.cards;
					}
					if(!cards||!target||!target.getCards('h').filter(function(i){
						return cards.contains(i);
					}).length||function(){
						for(var card of cards){
							if(get.suit(card,target)=='heart'||get.name(card,target)=='jiu') return false;
						}
						return true;
					}()){
						event.finish();
						return;
					}
					var list=[];
					event.addIndex=0;
					var str=get.translation(target);
					if(target.isDamaged()) list.push('令'+str+'回复一点体力');
					else event.addIndex++;
					if(target.isLinked()||target.isTurnedOver()) list.push('令'+get.translation(target)+'复原武将牌');
					if(!list.length) event.finish();
					else player.chooseControl('cancel2').set('choiceList',list).set('ai',function(){
						var evt=_status.event.getParent();
						if(get.attitude(evt.player,evt.target)<0) return 'cancel2';
						if(target.hp>1&&target.isTurnedOver()) return 1-evt.addIndex;
						return 0;
					});
					'step 2'
					if(result.control=='cancel2') event.finish();
					else if(result.index+event.addIndex==0){
						event.recover.recover();
						event.finish();
					}
					else if(event.recover.isLinked()) event.recover.link();
					'step 3'
					if(event.recover.isTurnedOver()) event.recover.turnOver();
				},
				ai:{
					order:7,
					result:{
						target:function(player,target){
							if(player.storage.bazhan) return -1;
							if(ui.selected.cards.length){
								var cards=ui.selected.cards,card=cards[0];
								if(get.value(cards,target)<0) return -0.5;
								if(get.attitude(player,target)>0){
									if((target.isDamaged()||target.isTurnedOver())&&(get.suit(card,target)=='heart'||get.name(card,target)=='jiu')) return 3;
									if(target.hasUseTarget(card)&&target.getUseValue(card)>player.getUseValue(card,null,true)) return 1.4;
									return 1;
								}
							}
							return 0;
						},
					},
				},
			},
			jiaoying:{
				audio:2,
				trigger:{source:'gainEnd'},
				forced:true,
				filter:function(event,player){
					if(player==event.player) return false;
					var evt=event.getl(player);
					return evt&&evt.hs&&evt.hs.length;
				},
				logTarget:'player',
				content:function(){
					var target=trigger.player;
					if(!target.storage.jiaoying2) target.storage.jiaoying2=[];
					var cs=trigger.getl(player).hs;
					for(var i of cs) target.storage.jiaoying2.add(get.color(i,player));
					target.addTempSkill('jiaoying2');
					target.markSkill('jiaoying2');
					player.addTempSkill('jiaoying3');
					if(!player.storage.jiaoying3) player.storage.jiaoying3=[];
					player.storage.jiaoying3.add(target);
				},
				ai:{
					directHit_ai:true,
					skillTagFilter:function(player,tag,arg){
						var target=arg.target;
						if(target.getStorage('jiaoying2').contains('red')&&get.tag(arg.card,'respondShan')&&!target.hasSkillTag('respondShan',true,null,true)) return true;
						return false;
					},
				}
			},
			jiaoying2:{
				onremove:true,
				charlotte:true,
				mod:{
					cardEnabled2:function(card,player){
						if(player.getStorage('jiaoying2').contains(get.color(card))) return false;
					},
				},
				intro:{
					content:'本回合内不能使用或打出$牌',
				},
			},
			jiaoying3:{
				onremove:true,
				trigger:{global:'useCard1'},
				silent:true,
				firstDo:true,
				charlotte:true,
				filter:function(event,player){
					return player.storage.jiaoying3.contains(event.player);
				},
				content:function(){
					while(player.storage.jiaoying3.contains(trigger.player)) player.storage.jiaoying3.remove(trigger.player);
					if(!player.storage.jiaoying3.length) player.removeSkill('jiaoying3');
				},
				group:'jiaoying3_draw',
			},
			jiaoying3_draw:{
				trigger:{global:'phaseEnd'},
				direct:true,
				charlotte:true,
				filter:function(event,player){
					return player.getStorage('jiaoying3').length>0&&game.hasPlayer(function(current){
						return current.countCards('h')<5;
					})
				},
				content:function(){
					'step 0'
					player.storage.jiaoying3.shift();
					player.chooseTarget('醮影：令一名角色将手牌摸至五张',function(card,player,target){
						return target.countCards('h')<5;
					}).set('ai',function(target){
						var att=get.attitude(_status.event.player,target);
						if(att>2){
							return 5-target.countCards('h');
						}
						return att/3;
					});
					'step 1'
					if(result.bool){
						player.logSkill('jiaoying',result.targets);
						for(var i=0;i<result.targets.length;i++){
							result.targets[i].drawTo(5);
						}
						if(lib.skill.jiaoying3_draw.filter(null,player)) event.goto(0);
					}
				},
			},
			//郭照
			pianchong:{
				audio:2,
				trigger:{player:'phaseDrawBegin1'},
				filter:function(event,player){
					return !event.numFixed;
				},
				content:function(){
					'step 0'
					trigger.changeToZero();
					var cards=[];
					var card1=get.cardPile2(function(card){
						return get.color(card,false)=='red';
					});
					if(card1) cards.push(card1);
					var card2=get.cardPile2(function(card){
						return get.color(card,false)=='black';
					});
					if(card2) cards.push(card2);
					if(cards.length) player.gain(cards,'gain2');
					'step 1'
					player.chooseControl('red','black').set('prompt','偏宠：请选择一种颜色。直至你的下回合开始时，失去该颜色的一张牌后，从牌堆获得另一种颜色的一张牌。').set('ai',function(){
						var red=0,black=0;
						var player=_status.event.player;
						var cards=player.getCards('he');
						for(var i of cards){
							var add=1;
							var color=get.color(i,player);
							if(get.position(i)=='e') add=0.5;
							else if(get.name(i,player)!='sha'&&player.hasValueTarget(i)) add=1.5;
							if(color=='red') red+=add;
							else black+=add;
						}
						if(black>red) return 'black';
						return 'red';
					});
					'step 2'
					player.storage.pianchong2=result.control;
					player.addTempSkill('pianchong2',{player:'phaseBeginStart'});
					player.popup(result.control,result.control=='red'?'fire':'thunder');
					game.log(player,'声明了','#y'+get.translation(result.control));
				},
				ai:{
					threaten:4.8,
				},
			},
			pianchong2:{
				audio:'pianchong',
				trigger:{
					player:'loseAfter',
					global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
				},
				forced:true,
				charlotte:true,
				onremove:true,
				filter:function(event,player){
					var evt=event.getl(player);
					if(!evt||!evt.cards2||!evt.cards2.length) return false;
					for(var i of evt.cards2){
						if(get.color(i,player)==player.storage.pianchong2) return true;
					}
					return false;
				},
				content:function(){
					'step 0'
					var num=trigger.getl(player).cards2.filter(function(card){
						return get.color(card,player)==player.storage.pianchong2;
					}).length;
					var cards=[];
					while(num--){
						var card=get.cardPile2(function(card){
							return !cards.contains(card)&&get.color(card,false)!=player.storage.pianchong2;
						});
						if(card) cards.push(card);
						else break;
					}
					if(cards.length) player.gain(cards,'gain2');
				},
				mark:true,
				intro:{
					content:'失去一张$牌后，从牌堆中获得一张与此牌颜色不同的牌',
				},
			},
			zunwei:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return !player.storage.zunwei||player.storage.zunwei.length<3;
				},
				chooseButton:{
					dialog:function(event,player){
						var list=[
							'选择体力值大于你的一名角色',
							'选择手牌数大于你的一名角色',
							'选择装备数大于你的一名角色',
						];
						var choiceList=ui.create.dialog('尊位：清选择一项','forcebutton','hidden');
						for(var i=0;i<list.length;i++){
							if(player.storage.zunwei&&player.storage.zunwei.contains(i)) continue;
							var bool=game.hasPlayer(function(current){
								return current!=player&&lib.skill.zunwei.backups[i].filterTarget(null,player,current);
							});
							var str='<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
							if(!bool) str+='<div style="opacity:0.5">';
							str+=list[i];
							if(!bool) str+='</div>';
							str+='</div>';
							var next=choiceList.add(str);
							next.firstChild.addEventListener(lib.config.touchscreen?'touchend':'click',ui.click.button);
							next.firstChild.link=i;
							next.firstChild._filterButton=bool;
							for(var j in lib.element.button){
								next[j]=lib.element.button[j];
							}
							choiceList.buttons.add(next.firstChild);
						}
						return choiceList;
					},
					filter:function(button){
						return button._filterButton;
					},
					backup:function(links){
						var next=get.copy(lib.skill.zunwei.backups[links[0]]);
						next.audio='zunwei';
						next.filterCard=function(){return false};
						next.selectCard=-1;
						return next;
					},
					check:function(button){
					 var player=_status.event.player;
					 switch(button.link){
					 	case 0:{
					 		var target=game.findPlayer(function(current){
					 			return current.isMaxHp();
					 		});
					 		return (Math.min(target.hp,player.maxHp)-player.hp)*2;
					 	}
					 	case 1:{
					 		var target=game.findPlayer(function(current){
					 			return current.isMaxHandcard();
					 		});
					 		return Math.min(5,target.countCards('h')-player.countCards('h'))*0.8;
					 	}
					 	case 2:{
					 		var target=game.findPlayer(function(current){
					 			return current.isMaxEquip();
					 		});
					 		return (target.countCards('e')-player.countCards('e'))*1.4;
					 	}
					 }
					},
					prompt:function(links){
						return [
							'选择一名体力值大于你的其他角色，将体力值回复至与其相同',
							'选择一名手牌数大于你的其他角色，将手牌数摸至与其相同',
							'选择一名装备区内牌数大于你的其他角色，依次使用牌堆中的装备牌，直到装备数与其相同',
						][links[0]];
					},
				},
				backups:[
				{
					filterTarget:function(card,player,target){
						if(player.isHealthy()) return false;
						return target.hp>player.hp;
					},
					content:function(){
						player.recover(target.hp-player.hp);
						if(!player.storage.zunwei) player.storage.zunwei=[];
						player.storage.zunwei.add(0);
					},
					ai:{
						order:10,
						result:{
							player:function(player,target){
								return (Math.min(target.hp,player.maxHp)-player.hp);
							},
						},
					},
				},
				{
					filterTarget:function(card,player,target){
						return target.countCards('h')>player.countCards('h');
					},
					content:function(){
						player.draw(Math.min(5,target.countCards('h')-player.countCards('h')));
						if(!player.storage.zunwei) player.storage.zunwei=[];
						player.storage.zunwei.add(1);
					},
					ai:{
						order:10,
						result:{
							player:function(player,target){
								return Math.min(5,target.countCards('h')-player.countCards('h'));
							},
						},
					},
				},
				{
					filterTarget:function(card,player,target){
						return target.countCards('e')>player.countCards('e');
					},
					content:function(){
						'step 0'
						if(!player.storage.zunwei) player.storage.zunwei=[];
						player.storage.zunwei.add(2);
						event.num=1;
						'step 1'
						var type='equip'+num;
						if(!player.hasEmptySlot(type)) return;
						var card=get.cardPile2(function(card){
							return get.subtype(card,false)==type&&player.canUse(card,player);
						});
						if(card) player.chooseUseTarget(card,true).nopopup=true;
						'step 2'
						event.num++;
						if(event.num<=5&&target.isIn()&&player.countCards('e')<target.countCards('e')) event.goto(1);
					},
					ai:{
						order:10,
						result:{
							player:function(player,target){
								return (target.countCards('e')-player.countCards('e'));
							},
						},
					},
				},
				],
				ai:{
					order:10,
					result:{
						player:1,
					},
				},
			},
			//辛宪英
			rezhongjian:{
				enable:'phaseUse',
				audio:'zhongjian',
				usable:2,
				filter:function(event,player){
					if(player.getStat().skill.rezhongjian&&!player.hasSkill('recaishi2')) return false;
					return game.hasPlayer(function(current){
						return lib.skill.rezhongjian.filterTarget(null,player,current);
					});
				},
				filterTarget:function(card,player,target){
					if(!player.storage.rezhongjian2) return true;
					return !player.storage.rezhongjian2[0].contains(target)&&!player.storage.rezhongjian2[1].contains(target);
				},
				content:function(){
					'step 0'
					player.chooseControl().set('prompt','忠鉴：为'+get.translation(target)+'选择获得一项效果').set('choiceList',[
						'令其于下回合开始前首次造成伤害后弃置两张牌',
						'令其于下回合开始前首次受到伤害后摸两张牌',
					]).set('ai',function(){
						return get.attitude(_status.event.player,_status.event.getParent().target)>0?1:0;
					});
					'step 1'
					player.addTempSkill('rezhongjian2',{player:'phaseBeginStart'});
					//var str=['造成伤害弃牌','受到伤害摸牌'][result.index];
					//player.popup(str,['fire','wood'][result.index]);
					//game.log(player,'选择了','#y'+str)
					player.storage.rezhongjian2[result.index].push(target);
					player.markSkill('rezhongjian2');
				},
				ai:{
					order:10,
					expose:0,
					result:{
						player:function(player,target){
							if(get.attitude(player,target)==0) return false;
							var sgn=get.sgn((get.realAttitude||get.attitude)(player,target));
							if(game.countPlayer(function(current){
								return get.sgn((get.realAttitude||get.attitude)(player,current))==sgn;
							})<=game.countPlayer(function(current){
								return get.sgn((get.realAttitude||get.attitude)(player,current))!=sgn;
							})) return 1;
							return 0.9;
						},
					},
				},
			},
			rezhongjian2:{
				trigger:{
					global:['damageSource','damageEnd'],
				},
				forced:true,
				filter:function(event,player,name){
					var num=(name=='damageSource'?0:1);
					var logTarget=(name=='damageSource'?event.source:event.player);
					return logTarget&&logTarget.isIn()&&player.storage.rezhongjian2[num].contains(logTarget);
				},
				logTarget:function(event,player,name){
					return (name=='damageSource'?event.source:event.player);
				},
				content:function(){
					var num=(event.triggername=='damageSource'?0:1);
					var target=(event.triggername=='damageSource'?trigger.source:trigger.player);
					var storage=player.storage.rezhongjian2;
					storage[num].remove(target);
					if(storage[0].length+storage[1].length) player.markSkill('rezhongjian2');
					else player.removeSkill('rezhongjian2');
					target[event.triggername=='damageSource'?'chooseToDiscard':'draw'](2,true,'he');
					player.draw();
				},
				init:function(player,skill){
					if(!player.storage[skill]) player.storage[skill]=[[],[]];
				},
				onremove:true,
				intro:{
					markcount:function(storage){
						return storage[0].length+storage[1].length;
					},
					mark:function(dialog,storage,player){
						if(player==game.me||player.isUnderControl()){
							if(storage[0].length){
								dialog.addText('弃牌');
								dialog.add([storage[0],'player']);
							}
							if(storage[1].length){
								dialog.addText('摸牌');
								dialog.add([storage[1],'player']);
							}
						}
						else{
							var list=storage[0].concat(storage[1]).sortBySeat(player);
							dialog.add([list,'player']);
						}
					},
				},
			},
			recaishi:{
				trigger:{player:'phaseDrawEnd'},
				direct:true,
				audio:'caishi',
				isSame:function(event){
					var cards=[];
					event.player.getHistory('gain',function(evt){
						if(evt.getParent().name=='draw'&&evt.getParent('phaseDraw')==event) cards.addArray(evt.cards);
					});
					if(!cards.length) return 'nogain';
					var list=[];
					for(var i=0;i<cards.length;i++){
						list.add(get.suit(cards[i]));
					}
					if(list.length==1) return true;
					if(list.length==cards.length) return false;
					return 'nogain';
				},
				filter:function(event,player){
					var isSame=lib.skill.recaishi.isSame(event);
					if(isSame=='nogain') return false;
					return isSame||player.isDamaged();
				},
				content:function(){
					'step 0'
					if(lib.skill.recaishi.isSame(trigger)){
						player.logSkill('recaishi');
						player.addTempSkill('recaishi2');
						event.finish();
						return;
					}
					player.chooseBool(get.prompt('recaishi'),'回复1点体力，然后本回合内不能对自己使用牌').set('ai',function(){
						if(player.countCards('h','tao')) return false;
						if(player.hp<2) return true;
						return player.countCards('h',function(card){
							var info=get.info(card);
							return info&&(info.toself||info.selectTarget==-1)&&player.canUse(card,player)&&player.getUseValue(card)>0;
						})==0;
					});
					'step 1'
					if(result.bool){
						player.logSkill('recaishi');
						player.recover();
						player.addTempSkill('recaishi3');
					}
				},
			},
			recaishi2:{},
			recaishi3:{
				mod:{
					targetEnabled:function(card,player,target){
						if(player==target) return false;
					},
				},
				mark:true,
				intro:{content:'本回合内不能对自己使用牌'},
			},
			//刘辩
			shiyuan:{
				audio:2,
				trigger:{target:'useCardToTargeted'},
				frequent:true,
				filter:function(event,player){
					var num=1;
					if(_status.currentPhase&&_status.currentPhase!=player&&_status.currentPhase.group=='qun'&&player.hasZhuSkill('yuwei',_status.currentPhase)) num=2;
					return player!=event.player&&player.getHistory('gain',function(evt){
						return evt.getParent(2).name=='shiyuan'&&evt.cards.length==(2+get.sgn(event.player.hp-player.hp));
					}).length<num;
				},
				content:function(){
					player.draw(2+get.sgn(trigger.player.hp-player.hp));
				},
			},
			dushi:{
				audio:2,
				global:'dushi2',
				locked:true,
				trigger:{player:'die'},
				forceDie:true,
				direct:true,
				skillAnimation:true,
				animationColor:'gray',
				filter:function(event,player){
					return game.hasPlayer(current=>current!=player);
				},
				content:function(){
					'step 0'
					player.chooseTarget('请选择【毒逝】的目标','选择一名其他角色，令其获得技能【毒逝】',true,lib.filter.notMe).set('forceDie',true).set('ai',function(target){
						return -get.attitude(_status.event.player,target);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('dushi',target);
						target.markSkill('dushi');
						target.addSkillLog('dushi');
					}
				},
				intro:{content:'您已经获得弘农王的诅咒'},
			},
			dushi2:{
				mod:{
					cardSavable:function(card,player,target){
						if(card.name=='tao'&&target!=player&&target.hasSkill('dushi')) return false;
					},
				},
			},
			yuwei:{
				zhuSkill:true,
				locked:true,
				ai:{combo:'shiyuan'},
			},
			
			//新岩泽(划掉)留赞
			refenyin:{
				audio:2,
				audioname:['wufan'],
				trigger:{global:['loseAfter','cardsDiscardAfter','loseAsyncAfter','equipAfter']},
				forced:true,
				filter:function(event,player){
					if(player!=_status.currentPhase) return false;
					var cards=event.getd();
					if(!cards.length) return false;
					var list=[];
					var num=cards.length;
					for(var i=0;i<cards.length;i++){
						var card=cards[i];
						list.add(get.suit(card,false));
					}
					game.getGlobalHistory('cardMove',function(evt){
						if(evt==event||evt.getParent()==event||(evt.name!='lose'&&evt.name!='cardsDiscard')) return false;
						if(evt.name=='lose'&&evt.position!=ui.discardPile) return false;
						num+=evt.cards.length;
						for(var i=0;i<evt.cards.length;i++){
							var card=evt.cards[i];
							list.remove(get.suit(card,false));
						}
					},event);
					player.storage.refenyin_mark2=num;
					return list.length>0;
				},
				content:function(){
					var list=[];
					var list2=[];
					var cards=trigger.getd();
					for(var i=0;i<cards.length;i++){
						var card=cards[i];
						var suit=get.suit(card,(trigger.cards2&&trigger.cards2.contains(card))?trigger.player:false);
						list.add(suit);
						list2.add(suit);
					}
					game.getGlobalHistory('cardMove',function(evt){
						if(evt==trigger||evt.getParent()==trigger||(evt.name!='lose'&&evt.name!='cardsDiscard')) return false;
						if(evt.name=='lose'&&evt.position!=ui.discardPile) return false;
						for(var i=0;i<evt.cards.length;i++){
							var card=evt.cards[i];
							var suit=get.suit(card,(evt.cards2&&evt.cards2.contains(card))?evt.player:false);
							list.remove(suit);
							list2.add(suit);
						}
					},trigger);
					list2.sort();
					player.draw(list.length);
					player.storage.refenyin_mark=list2;
					player.addTempSkill('refenyin_mark');
					player.markSkill('refenyin_mark');
				},
				subSkill:{
					mark:{
						onremove:function(player){
							delete player.storage.refenyin_mark;
							delete player.storage.refenyin_mark2;
						},
						intro:{
							content:function(s,p){
								var str='本回合已经进入过弃牌堆的卡牌的花色：';
								for(var i=0;i<s.length;i++){
									str+=get.translation(s[i]);
								}
								str+='<br>本回合进入过弃牌堆的牌数：'
								str+=p.storage.refenyin_mark2;
								return str;
							},
						},
					},
				},
			},
			liji:{
				enable:'phaseUse',
				audio:2,
				filter:function(event,player){
					return (player.getStat().skill.liji||0)<(event.liji_num||0);
				},
				onChooseToUse:function(event){
					if(game.online) return;
					var num=0;
					var evt2=event.getParent();
					if(!evt2.liji_all) evt2.liji_all=(game.players.length>4?8:4);
					game.getGlobalHistory('cardMove',function(evt){
						if(evt.name=='cardsDiscard'||(evt.name=='lose'&&evt.position==ui.discardPile)) num+=evt.cards.length;
					});
					event.set('liji_num',Math.floor(num/evt2.liji_all));
				},
				filterCard:true,
				position:'he',
				check:function(card){
					var val=get.value(card);
					if(!_status.event.player.getStorage('refenyin_mark').contains(get.suit(card))) return 12-val;
					return 8-val;
				},
				filterTarget:lib.filter.notMe,
				content:function(){
					target.damage('nocard');
				},
				ai:{
					order:1,
					result:{
						target:-1.5
					},
					tag:{
						damage:1
					},
				},
			},
			//文鸯
			xinlvli:{
				audio:'lvli',
				trigger:{player:'damageEnd',source:'damageSource'},
				filter:function(event,player,name){
					var stat=player.getStat().skill;
					if(!stat.xinlvli) stat.xinlvli=0;
					if(name=='damageEnd'&&!player.storage.beishui) return false;
					if(stat.xinlvli>1) return false;
					if(stat.xinlvli>0&&(player!=_status.currentPhase||!player.storage.choujue)) return false;
					if(player.hp==player.countCards('h')) return false;
					if(player.hp<player.countCards('h')&&player.isHealthy()) return false;
					return true;
				},
				content:function(){
					var stat=player.getStat().skill;
					stat.xinlvli++;
					var num=player.hp-player.countCards('h');
					if(num>0) player.draw(num);
					else player.recover(-num);
				},
				//group:'lvli3',
			},
			lvli:{
				audio:2,
				init:function(player,skill){
					player.storage[skill]=0;
				},
				enable:'chooseToUse',
				filter:function(event,player){
					if(player.storage.lvli>1) return false;
					if(player.storage.lvli>0&&(player!=_status.currentPhase||!player.storage.choujue)) return false;
					return event.type!='wuxie'&&event.type!='respondShan';
				},
				chooseButton:{
					dialog:function(event,player){
					var list=[];
						for(var i=0;i<lib.inpile.length;i++){
							var name=lib.inpile[i];
							if(name=='wuxie') continue;
							if(name=='sha'){
								list.push(['基本','','sha']);
								list.push(['基本','','sha','fire']);
								list.push(['基本','','sha','thunder']);
							}
							else if(get.type(name)=='trick') list.push(['锦囊','',name]);
							else if(get.type(name)=='basic') list.push(['基本','',name]);
						}
						return ui.create.dialog(event.lvli6?get.prompt('lvli'):'膂力',[list,'vcard']);
					},
					filter:function(button,player){
						var evt=_status.event.getParent();
						if(evt&&typeof evt.filterCard=='function') return evt.filterCard({name:button.link[2]},player,evt);
						return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
					},
					check:function(button){
						var player=_status.event.player;
						if(player.countCards('h',button.link[2])) return 0;
						if(_status.event.getParent().type!='phase'&&!_status.event.getParent().lvli6) return 1;
						return player.getUseValue({name:button.link[2]});
					},
					backup:function(links,player){
						return {
							filterCard:function(){return false;},
							audio:'lvli',
							selectCard:-1,
							check:function(card){
								return 1;
							},
							viewAs:{name:links[0][2],nature:links[0][3],isCard:true},
						}
					},
					prompt:function(links,player){
						return '请选择'+(get.translation(links[0][3])||'')+get.translation(links[0][2])+'的目标';
					}
				},
				ai:{
					order:4,
					result:{
						player:1,
					},
					threaten:2.9,
					fireAttack:true,
				},
				group:['lvli2','lvli3','lvli4','lvli5','lvli6']
			},
			lvli2:{
				trigger:{player:['useCardBefore','respondBefore']},
				forced:true,
				popup:false,
				priority:35,
				filter:function(event,player){
					return event.skill=='lvli_backup'||event.skill=='lvli5'||event.skill=='lvli4';
				},
				content:function(){
					'step 0'
					player.logSkill('lvli');
					player.storage.lvli++;
					player.popup(trigger.card.name,trigger.name=='useCard'?'metal':'wood');
					'step 1'
					var random=0.5+player.countCards('e')*0.1;
					if(get.isLuckyStar(player)) random=1;
					if(random>=Math.random()){
						player.popup('洗具');
					}
					else{
						player.popup('杯具');
						trigger.cancel();
						if(!trigger.getParent().lvli6){
							trigger.getParent().goto(0);
						}
						game.broadcastAll(function(str){
							var dialog=ui.create.dialog(str);
							dialog.classList.add('center');
							setTimeout(function(){
								dialog.close();
							},1000);
						},get.translation(player)+'声明的'+get.translation(trigger.card.name)+'并没有生效');
						game.log('然而什么都没有发生');
						game.delay(2);
					}
				},
			},
			lvli3:{
				trigger:{global:'phaseBefore'},
				forced:true,
				silent:true,
				popup:false,
				content:function(){
					player.storage.lvli=0;
				},
			},
			lvli4:{
				log:false,
				enable:'chooseToUse',
				viewAsFilter:function(player){
					if(player.storage.lvli>1) return false;
					if(player.storage.lvli>0&&(player!=_status.currentPhase||!player.storage.choujue)) return false;
					return true;
				},
				filterCard:function(){return false},
				selectCard:-1,
				viewAs:{name:'shan'},
				ai:{
					skillTagFilter:function(player){
						if(player.storage.lvli>1) return false;
						if(player.storage.lvli>0&&(player!=_status.currentPhase||!player.storage.choujue)) return false;
						return true;
					},
					threaten:1.5,
					respondShan:true,
				}
			},
			lvli5:{
				log:false,
				enable:'chooseToUse',
				viewAsFilter:function(player){
					if(player.storage.lvli>1) return false;
					if(player.storage.lvli>0&&(player!=_status.currentPhase||!player.storage.choujue)) return false;
					return true;
				},
				filterCard:function(){return false},
				selectCard:-1,
				viewAs:{name:'wuxie'},
			},
			lvli6:{
				trigger:{player:'damageEnd'},
				direct:true,
				filter:function(event,player){
					if(!player.storage.beishui) return false;
					if(player.storage.lvli>1) return false;
					if(player.storage.lvli>0&&(player!=_status.currentPhase||!player.storage.choujue)) return false;
					return true;
				},
				content:function(){
					var next=player.chooseToUse();
					next.set('norestore',true);
					next.set('_backupevent','lvli');
					next.backup('lvli');
					next.set('lvli6',true);
				},
			},
			choujue:{
				derivation:['beishui','qingjiao'],
				trigger:{global:'phaseAfter'},
				audio:2,
				skillAnimation:true,
				animationColor:'water',
				unique:true,
				juexingji:true,
				forced:true,
				init:function(player,skill){
					if(!player.storage[skill]) player.storage[skill]=false;
				},
				filter:function(event,player){
					if(player.storage.choujue) return false;
					return Math.abs(player.hp-player.countCards('h'))>=3;
				},
				content:function(){
					player.awakenSkill('choujue');
					player.storage.choujue=true;
					player.loseMaxHp();
					player.addSkill('beishui');
				},
			},
			beishui:{
				trigger:{player:'phaseZhunbeiBegin'},
				audio:2,
				skillAnimation:'epic',
				animationColor:'thunder',
				unique:true,
				juexingji:true,
				forced:true,
				init:function(player,skill){
					if(!player.storage[skill]) player.storage[skill]=false;
				},
				filter:function(event,player){
					if(player.storage.beishui) return false;
					return Math.min(player.hp,player.countCards('h'))<2;
				},
				content:function(){
					player.awakenSkill('beishui');
					player.storage.beishui=true;
					player.loseMaxHp();
					player.addSkill('qingjiao');
				},
			},
			qingjiao:{
				trigger:{player:'phaseUseBegin'},
				filter:function(event,player){
					if(!ui.cardPile.hasChildNodes()&&!ui.discardPile.hasChildNodes());
					var hs=player.getCards('h');
					if(!hs.length) return false;
					for(var i of hs){
						if(!lib.filter.cardDiscardable(i,player,'qingjiao')) return false;
					}
					return true;
				},
				//check:function(event,player){
				//	return player.countCards('h')<=player.hp;
				//},
				content:function(){
					'step 0'
					player.chooseToDiscard(true,'h',player.countCards('h'));
					'step 1'
					var evt=trigger.getParent();
					if(evt&&evt.getParent&&!evt.qingjiao){
						evt.qingjiao=true;
						var next=game.createEvent('qingjiao_discard',false,evt.getParent());
						next.player=player;
						next.setContent(function(){
							var hs=player.getCards('he');
							if(hs.length) player.discard(hs);
						});
					}
					'step 2'
					var list=[];
					var typelist=[];
					var getType=function(card){
						var sub=get.subtype(card);
						if(sub) return sub;
						return card.name;
					};
					for(var i=0;i<ui.cardPile.childElementCount;i++){
						var node=ui.cardPile.childNodes[i];
						var typex=getType(node);
						if(!typelist.contains(typex)){
							list.push(node);
							typelist.push(typex);
							if(list.length>=8) break;
						}
					}
					if(list.length<8){
						for(var i=0;i<ui.discardPile.childElementCount;i++){
							var node=ui.discardPile.childNodes[i];
							var typex=getType(node);
								if(!typelist.contains(typex)){
								list.push(node);
								typelist.push(typex);
								if(list.length>=8) break;
							}
						}
					}
					player.gain(list,'gain2');
				},
			},
			//王双
			spzhuilie:{
				mod:{
					targetInRange:function(card){
						if(card.name=='sha') return true;
					},
				},
				trigger:{player:'useCardToTargeted'},
				filter:function(event,player){
					return event.card&&event.card.name=='sha'&&!player.inRange(event.target);
				},
				forced:true,
				logTarget:'target',
				content:function(){
					'step 0'
					player.judge(function(card){
						var type=get.subtype(card);
						return ['equip1','equip4','equip3','equip6'].contains(type)?6:-6;
						switch(type){
							case 'equip':return 4;
							case 'trick':return -4;
							default:return 0;
						}
					}).judge2=function(result){
						return result.bool;
					};
					'step 1'
					if(trigger.getParent().addCount!==false){
						trigger.getParent().addCount=false;
						var stat=player.getStat();
						if(stat&&stat.card&&stat.card.sha) stat.card.sha--;
					}
					if(result.bool===true){
						var map=trigger.customArgs;
						var id=trigger.target.playerid;
						if(!map[id]) map[id]={};
						if(typeof map[id].extraDamage!='number') map[id].extraDamage=0;
						map[id].extraDamage+=trigger.target.hp-1;
					}
					else if(result.bool===false) player.loseHp();
				},
			},
			spzhuilie2:{
				onremove:true,
				intro:{
					content:'使用【杀】的次数上限+#',
				},
				mod:{
					cardUsable:function(card,player,num){
					 if(card.name=='sha') return num+player.countMark('spzhuilie2');
					},
				},
			},
			//花鬘
			manyi:{
				audio:2,
				audioname:['mengyou'],
			},
			hmmanyi:{
				trigger:{target:'useCardToBefore'},
				forced:true,
				audio:'manyi',
				audioname:['mengyou'],
				filter:function(event,player){
					return event.card.name=='nanman';
				},
				content:function(){
					trigger.cancel();
				},
			},
			mansi:{
				audio:2,
				group:'mansi_viewas',
				trigger:{global:'damageEnd'},
				filter:function(event,player){
					return event.card&&event.card.name=='nanman';
				},
				frequent:true,
				content:function(){
				 player.draw();
				 player.addMark('mansi',1,false);
				},
				intro:{content:'已因此技能得到了#张牌'},
			},
			mansi_viewas:{
				audio:'mansi',
				position:'h',
				enable:'phaseUse',
				usable:1,
				filterCard:true,
				selectCard:-1,
				filter:function(event,player){
					var hs=player.getCards('h');
					if(!hs.length) return false;
					for(var i=0;i<hs.length;i++){
						var mod2=game.checkMod(hs[i],player,'unchanged','cardEnabled2',player);
						if(mod2===false) return false;
					}
					return true;
				},
				viewAs:{name:'nanman'},
				ai:{order:0.1},
			},
			souying:{
				audio:2,
				trigger:{
					player:'useCardToPlayered',
					target:'useCardToTargeted',
				},
				direct:true,
				filter:function(event,player,name){
					if(!player.countCards('he')||player.hasSkill('souying2')) return false;
					if(!event.targets||event.targets.length!=1||event.player==event.target) return false;
					if(event.card.name!='sha'&&get.type(event.card)!='trick') return false;
					if(name=='useCardToPlayered'){
						if(!event.cards.filterInD().length) return false;
						var target=event.target;
						return player.getHistory('useCard',function(evt){
							return evt.targets&&evt.targets.contains(target);
						}).indexOf(event.getParent())>0;
					}
					else{
						var source=event.player;
						return source.getHistory('useCard',function(evt){
							return evt.targets&&evt.targets.contains(player);
						}).indexOf(event.getParent())>0;
					}
				},
				content:function(){
					'step 0'
					var next=player.chooseToDiscard('he');
					var prompt;
					if(event.triggername=='useCardToTargeted'){
						event.target=trigger.player;
						prompt='令'+get.translation(trigger.card)+'对你无效';
						next.set('goon',-get.effect(player,trigger.card,trigger.player,player));
					}
					else{
						event.target=trigger.targets[0];
						prompt='弃置一张牌，并获得'+get.translation(trigger.cards.filterInD());
						next.set('goon',get.value(trigger.cards.filterInD()));
					}
					next.set('prompt',get.prompt('souying',event.target));
					next.set('prompt2',prompt)
					next.set('ai',function(card){
						return _status.event.goon-get.value(card);
					});
					next.set('logSkill',['souying',event.target]);
					'step 1'
					if(result.bool){
						player.addTempSkill('souying2');
						if(event.triggername=='useCardToPlayered') player.gain(trigger.cards.filterInD(),'gain2');
						else trigger.excluded.add(player);
					}
				},
				ai:{
					expose:0.25,
				},
			},
			souying2:{},
			zhanyuan:{
				unique:true,
				audio:2,
				derivation:'hmxili',
				skillAnimation:true,
				animationColor:'soil',
				juexingji:true,
				forced:true,
				filter:function(event,player){
					return player.countMark('mansi')>7;
				},
				trigger:{player:'phaseZhunbeiBegin'},
				content:function(){
					'step 0'
					player.awakenSkill('zhanyuan');
					player.gainMaxHp();
					player.recover();
					'step 1'
					player.chooseTarget('是否失去〖蛮嗣〗，令一名其他男性角色和自己一同获得技能〖系力〗？',function(card,player,target){
						return target!=player&&target.hasSex('male');
					}).ai=function(target){
						return get.attitude(_status.event.player,target);
					};
					'step 2'
					if(result.bool){
						var target=result.targets[0];
						player.line(target,'fire');
						player.addSkill('hmxili');
						target.addSkill('hmxili');
						player.removeSkill('mansi');
					}
				},
			},
			hmxili:{
				trigger:{global:'damageBegin1'},
				direct:true,
				audio:2,
				filter:function(event,player){
					return event.source&&event.source!=player&&event.source==_status.currentPhase&&event.source.hasSkill('hmxili')&&!event.player.hasSkill('hmxili')&&player.countCards('he')>0&&!player.hasSkill('hmxili2');
				},
				content:function(){
					'step 0'
					player.chooseToDiscard('是否弃置一张牌，令'+get.translation(trigger.source)+'对'+get.translation(trigger.player)+'的伤害+1，且你与其各摸两张牌？','he').set('logSkill',['hmxili',trigger.player]).ai=function(card){
						return 9-get.value(card);
					};
					'step 1'
					if(result.bool){
						game.asyncDraw([trigger.source,player],2);
						trigger.num++;
						player.addTempSkill('hmxili2');
					}
					else event.finish();
					'step 2'
					game.delayx();
				},
			},
			hmxili2:{},
			//吴兰雷铜
			wlcuorui:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				direct:true,
				filter:function(event,player){
					if(!['identity','guozhan'].contains(get.mode())){
						return game.hasPlayer(function(current){
							return current.isFriendOf(player)&&current.countDiscardableCards(player,'hej')>0;
						});
					}
					return game.hasPlayer(current=>{
						return get.distance(player,current)<=1&&current.countDiscardableCards(player,'hej')>0;
					});
				},
				content:function(){
					'step 0'
					if(!['identity','guozhan'].contains(get.mode())){
						player.chooseTarget(function(card,player,target){
							return target.isFriendOf(player)&&target.countDiscardableCards(player,'hej')>0;
						},get.prompt2('wlcuorui')).set('ai',function(target){
							if(target.countCards('e',function(card){
								return card.name!='tengjia'&&get.value(card,target)<=0;
							})) return 10;
							if(target.countCards('j',function(card){
								return get.effect(target,{name:card.viewAs||card.name},target,target)<0;
							})) return 10;
							return Math.random()+0.2-1/target.countCards('hej');
						});
					}
					else{
						player.chooseTarget(function(card,player,target){
							return get.distance(player,target)<=1&&target.countDiscardableCards(player,'hej')>0;
						},get.prompt2('wlcuorui')).set('ai',function(target){
							if(game.hasPlayer(current=>{
								return current!=target&&get.attitude(_status.event.player,current)<0;
							})) return get.effect(target,{name:'guohe'},player,player)+10;
							return 0;
						});
					}
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('wlcuorui',target);
						player.discardPlayerCard(target,'hej',true);
						if(['identity','guozhan'].contains(get.mode())) event.goto(7);
					}
					else event.finish();
					'step 2'
					if(!result.cards||!result.cards.length){
						event.finish();
						return;
					}
					var color=get.color(result.cards[0],result.cards[0].original=='j'?false:target);
					event.color=color;
					var list=[];
					if(game.hasPlayer(function(current){
						return (get.mode()=='versus'?current.isEnemyOf(player):current!=player&&current!=target)&&current.countCards('h');
					})) list.push('展示手牌');
					if(game.hasPlayer(function(current){
						return (get.mode()=='versus'?current.isEnemyOf(player):current!=player&&current!=target)&&current.countCards('e',{color:color});
					})) list.push('弃置装备');
					if(!list.length){
						event.finish();
						return;
					}
					if(list.length==1) event._result={control:list[0]};
					else player.chooseControl(list).set('prompt','挫锐：展示对手的至多两张手牌，或弃置对手装备区内至多两张'+get.translation(color)+'牌').set('ai',function(){
						var player=_status.event.player;
						var color=_status.event.getParent().color;
						if(game.countPlayer(function(current){
							if(!current.isEnemyOf(player)) return false;
							return current.countCards('e',function(card){
								return get.color(card)==color&&get.value(card)>0;
							});
						})>1) return 1;
						return 0;
					});
					'step 3'
					if(result.control=='弃置装备') event.goto(5);
					else{
						var dialog=['请选择要展示的牌'];
						var list=game.filterPlayer(function(current){
							return current.isEnemyOf(player)&&current.countCards('h');
						}).sortBySeat();
						for(var i of list){
							dialog.push('<div class="text center">'+get.translation(i)+'</div>');
							if(player.hasSkillTag('viewHandcard',null,i,true)) dialog.push(i.getCards('h'));
							else dialog.push([i.getCards('h'),'blank']);
						}
						player.chooseButton([1,2],true).set('createDialog',dialog).set('ai',function(button){
							var color=(get.color(button.link)==_status.event.getParent().color);
							return color?Math.random():0.35;
						});
					}
					'step 4'
					player.showCards(result.links);
					var map={};
					var map2={};
					for(var i of result.links){
						var id=get.owner(i).playerid;
						if(!map[id]) map[id]=[];
						map[id].push(i);
						if(get.color(i)!=event.color) continue;
						if(!map2[id]) map2[id]=[];
						map2[id].push(i);
					}
					for(var i in map){
						var source=(_status.connectMode?lib.playerOL:game.playerMap)[i];
						if(map2[i]) player.gain(map2[i],source,'bySelf','give');
						player.line(source);
						game.log(player,'展示了',source,'的',map[i]);
					}
					event.next.sort(function(a,b){
						return lib.sort.seat(a.source||a.player,b.source||b.player);
					});
					event.finish();
					'step 5'
					var dialog=['请选择要弃置的牌'];
					var list=game.filterPlayer(function(current){
						return current.isEnemyOf(player)&&current.countCards('e',function(card){
							return get.color(card)==event.color;
						});
					}).sortBySeat();
					for(var i of list){
						dialog.push('<div class="text center">'+get.translation(i)+'</div>');
						dialog.push(i.getCards('e',function(card){
							return get.color(card)==event.color;
						}));
					}
					player.chooseButton([1,2],true).set('createDialog',dialog).set('ai',function(button){
						var owner=get.owner(button.link);
						return get.value(button.link,owner)
					});
					'step 6'
					var map={};
					for(var i of result.links){
						if(get.color(i)!=event.color) continue;
						var id=get.owner(i).playerid;
						if(!map[id]) map[id]=[];
						map[id].push(i);
					}
					for(var i in map){
						(_status.connectMode?lib.playerOL:game.playerMap)[i].discard(map[i],'notBySelf').discarder=player;
					}
					event.next.sort(function(a,b){
						return lib.sort.seat(a.player,b.player);
					});
					event.finish();
					'step 7'
					if(!result.cards||!result.cards.length){
						event.finish();
						return;
					}
					if(game.hasPlayer(current=>{
						return current.countCards('he')>0&&current!=player&&current!=target;
					})){
						var color=get.color(result.cards[0],result.cards[0].original=='j'?false:target);
						event.color=color;
						var next=player.chooseTarget(true,'挫锐：选择另一名其他角色','弃置该角色装备区里至多两张'+get.translation(event.color)+'牌；或展示该角色的至多两张手牌，然后获得其中的'+get.translation(event.color)+'牌');
						next.set('filterTarget',(card,player,target)=>{
							return target.countCards('he')>0&&target!=player&&target!=_status.event.getParent().target;
						});
						next.set('ai',target=>{
							return -get.attitude(_status.event.player,target)*target.countCards('he')+0.1;
						});
					}
					else event.finish();
					'step 8'
					if(result.bool){
						var targetx=result.targets[0];
						event.targetx=targetx;
						player.line(targetx);
						player.choosePlayerCard(targetx,'he',true,[1,2]).set('prompt','展示至多两张手牌，或弃置至多两张'+get.translation(event.color)+'装备').set('filterButton',button=>{
							if(ui.selected.buttons.length){
								var linkx=ui.selected.buttons[0].link;
								if(get.position(button.link)!=get.position(linkx)) return false;
							}
							if(get.position(button.link)=='e') return get.color(button.link,_status.event.target)==_status.event.getParent().color;
							return true;
						}).set('target',targetx);
					}
					else event.finish();
					'step 9'
					if(result.bool){
						var cards=result.links;
						if(get.position(cards[0])=='e'){
							event.targetx.discard(cards,'notBySelf').discarder=player;
							event.finish();
						}
						else{
							player.showCards(cards,get.translation(event.targetx)+'因【挫锐】展示的牌');
							var cards2=cards.filter(card=>{
								return get.color(card)==event.color;
							});
							if(cards2.length) player.gain(cards2,event.targetx,'give');
						}
					}
				},
			},
			kuiji:{
				audio:2,
				usable:1,
				enable:"phaseUse",
				filter:function(event,player){
					if(player.hasJudge('bingliang')) return false;
					return player.countCards('hes',function(card){
						return get.color(card)=='black'&&get.type(card)=='basic';
					})>0;
				},
				position:'hes',
				discard:false,
				lose:false,
				delay:false,
				prepare:function(cards,player){
					player.$give(cards,player,false);
				},
				filterCard:function(card,player,event){
					return get.color(card)=='black'&&get.type(card)=='basic'&&player.canAddJudge({name:'bingliang',cards:[card]});
				},
				selectTarget:-1,
				filterTarget:function(card,player,target){
					return player==target;
				},
				check:function(card){
					return 9-get.value(card);
				},
				// onuse:function(links,player){
				// 	var next=game.createEvent('kuiji_content',false,_status.event.getParent());
				// 	next.player=player;
				// 	next.setContent(lib.skill.kuiji.kuiji_content);
				// },
				// kuiji_content:function(){
				content:function(){
					'step 0'
					player.addJudge({name:'bingliang'},cards);
					player.draw();
					'step 1'
					var next=player.chooseTarget().set('ai',function(target){
						var player=_status.event.player;
						return get.damageEffect(target,player,player)
					});
					if(!['identity','guozhan'].contains(get.mode())){
						next.set('prompt','选择一名体力值最大的敌方角色，对其造成2点伤害');
						next.set('filterTarget',function(card,player,target){
							return target.isEnemyOf(player)&&!game.hasPlayer(function(current){
								return current.isEnemyOf(player)&&current.hp>target.hp;
							});
						});
					}
					else{
						next.set('prompt','选择一名除你外体力值最大的角色，对其造成2点伤害');
						next.set('filterTarget',function(card,player,target){
							return player!=target&&!game.hasPlayer(function(current){
								return current!=player&&current.hp>target.hp;
							});
						});
					}
					'step 2'
					if(result.bool){
						var target=result.targets[0];
						player.line(target);
						target.damage(2);
					}
				},
				ai:{
					result:{
						target:function(player,target){
							if(!['identity','guozhan'].contains(get.mode())) return 1;
							var target=game.filterPlayer(i=>i!=player).sort((a,b)=>b.hp-a.hp)[0];
							return target&&get.damageEffect(target,player,player)>0?1:0;
						},
					},
					order:12,
				},
				group:'kuiji_dying',
				subSkill:{
					dying:{
						trigger:{global:'dying'},
						forced:true,
						popup:false,
						filter:function(event,player){
							var evt=event.getParent(2);
							if(!evt||evt.name!='kuiji_content'||evt.player!=player) return false;
							var list=game.filterPlayer(function(current){
								return current.isFriendOf(player);
							}).sort(function(a,b){
								return a.hp-b.hp;
							});
							return (list.length==1||list[0].hp<list[1].hp)&&list[0].isDamaged();
						},
						content:function(){
							var list=game.filterPlayer(function(current){
								return current.isFriendOf(player);
							}).sort(function(a,b){
								return a.hp-b.hp;
							})[0];
							player.logSkill('kuiji',list);
							list.recover();
						},
					},
				},
			},
			//蒲元
			pytianjiang:{
				audio:2,
				trigger:{
					global:'phaseBefore',
					player:'enterGame',
				},
				forced:true,
				locked:false,
				filter:function(event,player){
					return (event.name!='phase'||game.phaseNumber==0);
				},
				content:function(){
					'step 0'
					var i=0;
					var list=[];
					while(i++<2){
						var card=get.cardPile(function(card){
							if(get.type(card)!='equip') return false;
							return list.length==0||get.subtype(card)!=get.subtype(list[0]);
						});
						if(card) list.push(card);
					}
					if(!list.length){event.finish();return;}
					event.list=list;
					player.gain(event.list,'gain2');
					'step 1'
					game.delay(1);
					var card=event.list.shift();
					if(player.getCards('h').contains(card)){
						player.$give(card,player,false)
						player.equip(card);
					}
					if(event.list.length) event.redo();
				},
				group:'pytianjiang_move',
			},
			pytianjiang_move:{
				audio:'pytianjiang',
				prompt:'将装备区里的一张牌移动至其他角色的装备区',
				enable:'phaseUse',
				position:'e',
				filter:function(event,player){
					return player.countCards('e')>0;
				},
				check:function(){return 1},
				filterCard:true,
				filterTarget:function(event,player,target){
					return target!=player&&target.canEquip(ui.selected.cards[0],true);
				},
				prepare:'give',
				discard:false,
				lose:false,
				content:function(){
					'step 0'
					target.equip(cards[0]);
					'step 1'
					if(cards[0].name.indexOf('pyzhuren_')==0&&!player.getCards('e').contains(cards[0])) player.draw(2);
				},
				ai:{
					order:11,
					expose:0.2,
					result:{
						target:function(player,target){
							if(ui.selected.cards.length){
								var card=ui.selected.cards[0];
								if(target.getEquip(card)||target.countCards('h',{subtype:get.subtype(card)})) return 0;
								return get.effect(target,card,player,target);
							}
							return 0;
						},
					},
				},
			},
			pyzhuren:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterCard:true,
				selectCard:1,
				check:function(card){
					var player=_status.event.player;
					var name='pyzhuren_'+(card[card.name=='shandian'?'name':'suit']);
					if(!lib.card[name]||_status.pyzhuren&&_status.pyzhuren[name]){
						if(!player.countCards('h','sha')) return 4-get.value(card);
						return 0;
					}
					return 7-get.value(card);
				},
				content:function(){
					player.addSkill('pyzhuren_destroy');
					if(!_status.pyzhuren) _status.pyzhuren={};
					var rand=0.85;
					var num=get.number(cards[0]);
					if(num>4) rand=0.9;
					if(num>8) rand=0.95;
					if(num>12||cards[0].name=='shandian'||get.isLuckyStar(player)) rand=1;
					var name='pyzhuren_'+(cards[0][cards[0].name=='shandian'?'name':'suit']);
					if(!lib.card[name]||_status.pyzhuren[name]||Math.random()>rand){
						player.popup('杯具');
						game.log(player,'锻造失败');
						var card=get.cardPile(function(card){
							return card.name=='sha';
						});
						if(card) player.gain(card,'gain2');
					}
					else{
						_status.pyzhuren[name]=true;
						player.gain(game.createCard(name,cards[0].name=='shandian'?'spade':cards[0].suit,1),'gain2')
					}
				},
				ai:{
					order:10,
					result:{
						player:1,
					},
				},
			},
			pyzhuren_destroy:{
				trigger:{global:['loseEnd','cardsDiscardEnd']},
				forced:true,
				charlotte:true,
				filter:function(event,player){
					var cs=event.cards;
					for(var i=0;i<cs.length;i++){
						if(cs[i].name.indexOf('pyzhuren_')==0&&get.position(cs[i],true)=='d') return true;
					}
					return false;
				},
				forceDie:true,
				content:function(){
					if(!_status.pyzhuren) _status.pyzhuren={};
					var list=[];
					var cs=trigger.cards;
					for(var i=0;i<cs.length;i++){
						if(cs[i].name.indexOf('pyzhuren_')==0&&get.position(cs[i],true)=='d'){
							_status.pyzhuren[cs[i].name]=false;
							list.push(cs[i]);
						}
					}
					game.log(list,'已被移出游戏');
					game.cardsGotoSpecial(list);
				},
			},
			pyzhuren_heart:{
				audio:true,
				trigger:{source:'damageSource'},
				usable:1,
				equipSkill:true,
				filter:function(event,player){
					return event.getParent().name=='sha';
				},
				check:function(event,player){
					return player.isDamaged();
				},
				content:function(){
					'step 0'
					player.judge(function(card){
						var player=_status.event.getParent('pyzhuren_heart').player;
						if(player.isHealthy()&&get.color(card)=='red') return 0;
						return 2;
					});
					'step 1'
					if(result.color=='red') player.recover();
					else player.draw(2);
				},
			},
			pyzhuren_diamond:{
				audio:true,
				trigger:{source:'damageBegin1'},
				direct:true,
				usable:2,
				equipSkill:true,
				mod:{
					cardUsable:function(card,player,num){
						var cardx=player.getEquip('pyzhuren_diamond');
						if(card.name=='sha'&&(!cardx||player.hasSkill('pyzhuren_diamond',null,false)||(!_status.pyzhuren_diamond_temp&&!ui.selected.cards.contains(cardx)))){
							return num+1;
						}
					},
					cardEnabled2:function(card,player){
						if(!_status.event.addCount_extra||player.hasSkill('pyzhuren_diamond',null,false)) return;
						if(card&&card==player.getEquip('pyzhuren_diamond')){
							_status.pyzhuren_diamond_temp=true;
							var bool=lib.filter.cardUsable(get.autoViewAs({name:'sha'},ui.selected.cards.concat([card])),player);
							delete _status.pyzhuren_diamond_temp;
							if(!bool) return false;
						}
					},
				},
				filter:function(event,player){
					if(event.getParent().name!='sha') return false;
					return player.countCards('he',function(card){
						return card!=player.getEquip('pyzhuren_diamond');
					})>0;
				},
				content:function(){
					'step 0'
					var next=player.chooseToDiscard('he',function(card,player){
						return card!=player.getEquip('pyzhuren_diamond');
					},get.prompt(event.name,trigger.player),'弃置一张牌，令即将对其造成的伤害+1');
					next.ai=function(card){
						if(_status.event.goon) return 6-get.value(card);
						return -1;
					};
					next.set('goon',get.attitude(player,trigger.player)<0&&!trigger.player.hasSkillTag('filterDamage',null,{
						player:player,
						card:trigger.card,
					}));
					next.logSkill=[event.name,trigger.player];
					'step 1'
					if(result.bool) trigger.num++;
					else player.storage.counttrigger.pyzhuren_diamond--;
				},
				ai:{
					expose:0.25,
				},
			},
			pyzhuren_club:{
				audio:true,
				trigger:{player:'useCard2'},
				direct:true,
				equipSkill:true,
				filter:function(event,player){
					if(event.card.name!='sha'&&get.type(event.card)!='trick') return false;
					var info=get.info(event.card);
					if(info.allowMultiple==false) return false;
					var num=player.getHistory('useSkill',function(evt){
						return evt.skill=='pyzhuren_club';
					}).length;
					if(num>=2) return false;
					if(event.targets&&!info.multitarget){
						if(game.hasPlayer(function(current){
							return lib.filter.targetEnabled2(event.card,player,current)&&!event.targets.contains(current);
						})){
							return true;
						}
					}
					return false;
				},
				content:function(){
					'step 0'
					var prompt2='为'+get.translation(trigger.card)+'额外指定一个目标';
					player.chooseTarget([1,player.storage.fumian_red],get.prompt(event.name),function(card,player,target){
						var player=_status.event.player;
						if(_status.event.targets.contains(target)) return false;
						return lib.filter.targetEnabled2(_status.event.card,player,target);
					}).set('prompt2',prompt2).set('ai',function(target){
						var trigger=_status.event.getTrigger();
						var player=_status.event.player;
						return get.effect(target,trigger.card,player,player);
					}).set('targets',trigger.targets).set('card',trigger.card);
					'step 1'
					if(result.bool){
						if(!event.isMine()&&!event.isOnline()) game.delayx();
						event.targets=result.targets;
					}
					'step 2'
					if(event.targets){
						player.logSkill(event.name,event.targets);
						trigger.targets.addArray(event.targets);
					}
				},
			},
			pyzhuren_spade:{
				audio:true,
				trigger:{player:'useCardToPlayered'},
				filter:function(event,player){
					return event.card.name=='sha';//&&event.targets.length==1&&get.color(event.card)=='black';
				},
				check:function(event,player){
					return get.attitude(player,event.target)<=0;
				},
				logTarget:'target',
				content:function(){
					var num=player.getHistory('useSkill',function(evt){
						return evt.skill=='pyzhuren_spade';
					}).length;
					trigger.target.loseHp(Math.min(num,5));//.set('source',player);
				},
				ai:{
					jueqing:true,
					unequip_ai:true,
					skillTagFilter:function(player,tag,arg){
						if(tag=='unequip_ai'){
							if(arg&&arg.name=='sha'&&get.color(arg.card)=='black') return true;
							return false;
						}
					}
				},
			},
			pyzhuren_shandian:{
				audio:true,
				trigger:{player:'useCardToPlayered'},
				filter:function(event,player){
					return event.card.name=='sha';//&&event.targets.length==1;
				},
				check:function(event,player){
					return get.attitude(player,event.target)<=0;
				},
				logTarget:'target',
				content:function(){
					'step 0'
					trigger.target.judge(function(card){
						var suit=get.suit(card);
						if(suit=='spade') return -10;
						if(suit=='club') return -5;
						return 0;
					}).judge2=function(result){
						return result.color=='black'?true:false;
					};
					'step 1'
					if(result.suit=='spade'){
						trigger.target.damage(3,'thunder');
						//trigger.getParent().excluded.add(trigger.target);
					}
					else if(result.suit=='club'){
						trigger.target.damage('thunder');
						player.recover();
						player.draw();
					}
				},
			},
			//管辂和葛玄
			gxlianhua:{
				derivation:['reyingzi','reguanxing','xinzhiyan','gongxin'],
				audio:2,
				init:function(player,skill){
					if(!player.storage[skill]) player.storage[skill]={
						red:0,black:0,
					}
				},
				marktext:'丹',
				intro:{
					name:'丹血',
					markcount:function(storage){
						return storage.red+storage.black;
					},
					content:function(storage){
						return '共有'+(storage.red+storage.black)+'个标记';
					},
				},
				trigger:{global:'damageEnd'},
				forced:true,
				locked:false,
				filter:function(event,player){
					return event.player!=player&&event.player.isIn()&&_status.currentPhase!=player;
				},
				content:function(){
					player.storage.gxlianhua[player.getFriends().contains(trigger.player)?'red':'black']++;
					player.markSkill('gxlianhua');
				},
				group:'gxlianhua_harmonia',
				subSkill:{
					harmonia:{
						forced:true,
						audio:'gxlianhua',
						sub:true,
						trigger:{player:'phaseZhunbeiBegin'},
						//filter:function(event,player){
						//	return player.storage.gxlianhua&&player.storage.gxlianhua.red+player.storage.gxlianhua.black>0;
						//},
						forced:true,
						content:function(){
							var cards=[];
							var cards2=[];
							var skill='';
							var red=player.storage.gxlianhua.red;
							var black=player.storage.gxlianhua.black;
							player.storage.gxlianhua={red:0,black:0};
							player.unmarkSkill('gxlianhua');
							if(red+black<4){
								cards=['tao'];
								skill='reyingzi';
							}
							else if(red>black){
								cards=['wuzhong'];
								skill='reguanxing';
							}
							else if(red<black){
								cards=['shunshou'];
								skill='xinzhiyan';
							}
							else{
								cards=['sha','juedou'];
								skill='gongxin';
							}
							for(var i=0;i<cards.length;i++){
								var card=get.cardPile(function(shiona){
									return shiona.name==cards[i];
								});
								if(card) cards2.push(card);
							}
							player.addTempSkill(skill);
							if(cards2.length) player.gain(cards2,'gain2','log');
						},
					},
				},
			},
			zhafu:{
				audio:2,
				enable:'phaseUse',
				limited:true,
				skillAnimation:true,
				animationColor:'wood',
				filterTarget:lib.filter.notMe,
				content:function(){
					player.awakenSkill('zhafu');
					player.addSkill('zhafu_hf');
					target.addMark('zhafu_hf',1);
				},
				ai:{
					order:1,
					result:{
						player:function(player,target){
							return Math.max(0,1+target.countCards('h')-game.countPlayer(current=>{
								if(get.attitude(target,current)>0) return 0.3;
								if(target.hasJudge('lebu')) return 0.6;
								if(target.inRange(current)) return 1.5;
								return 1;
							}));
						},
						target:function(player,target){
							return -Math.max(0,1+target.countCards('h')-game.countPlayer(current=>{
								if(get.attitude(target,current)>0) return 0.3;
								if(target.hasJudge('lebu')) return 0.6;
								if(target.inRange(current)) return 1.5;
								return 1;
							}));
						}
					}
				},
				subSkill:{
					hf:{
						trigger:{
							global:'phaseDiscardBegin'
						},
						forced:true,
						charlotte:true,
						filter:function(event,player){
							return event.player!=player&&event.player.hasMark('zhafu_hf');
						},
						content:function(){
							'step 0'
							var target=trigger.player;
							event.target=target;
							target.removeMark('zhafu_hf',1);
							if(target.countCards('h')<=1) event.finish()	
							'step 1'
							target.chooseCard('h',true,'选择保留一张手牌，将其余的手牌交给'+get.translation(player)).set('ai',get.value);
							'step 2'
							var cards=target.getCards('h');
							cards.remove(result.cards[0]);
							target.give(cards,player);
						},
						intro:{
							content:'mark',
							onunmark:true,
						},
					},
				},
			},
			
			tuiyan:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				frequent:true,
				content:function(){
					'step 0'
					var cards=get.cards(3);
					event.cards=cards;
					game.log(player,'观看了牌堆顶的'+get.cnNumber(cards.length)+'张牌');
					player.chooseControl('ok').set('dialog',['推演',cards]);
					'step 1'
					while(cards.length){
						ui.cardPile.insertBefore(cards.pop(),ui.cardPile.firstChild);
					}
					game.updateRoundNumber();
				},
			},
			busuan:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterTarget:lib.filter.notMe,
				content:function(){
					'step 0'
					var list=[];
					for(var i=0;i<lib.inpile.length;i++){
						var name=lib.inpile[i];
						var type=get.type(name,'trick');
						if(['basic','trick'].contains(type)) list.push([type,'',name]);
					}
					player.chooseButton(['选择至多两种牌',[list,'vcard']],true,[1,2]).set('ai',function(button){
						var target=_status.event.getParent().target;
						var card={name:button.link[2]};
						if(get.type(card)=='basic'||!target.hasUseTarget(card)) return false;
						return get.attitude(_status.event.player,target)*(target.getUseValue(card)-0.1);
					});
					'step 1'
					target.storage.busuan_angelbeats=result.links.slice(0);
					target.addSkill('busuan_angelbeats');
				},
				ai:{
					order:1,
					result:{
						target:function(player,target){
							var att=get.attitude(player,target);
							if(att>0) return 1
							return -5/(target.countCards('h')+1);
						},
					},
				},
			},
			busuan_angelbeats:{
				mark:true,
				intro:{
					mark:function(dialog,content,player){
						if(content&&content.length) dialog.add([content,'vcard']);
					},
				},
				trigger:{player:'drawBefore'},
				forced:true,
				filter:function(event,player){
					return event.getParent().name=='phaseDraw';
				},
				onremove:true,
				content:function(){
					'step 0'
					var list=player.storage['busuan_angelbeats'];
					var cards=[];
					for(var i=0;i<Math.min(trigger.num,list.length);i++){
						var card=get.cardPile(function(cardx){
							return !cards.contains(cardx)&&cardx.name==list[Math.min(i,list.length-1)][2];
						});
						if(card){
							player.storage.busuan_angelbeats.splice(i--,1);
							trigger.num--;
							cards.push(card);
						}
					}
					if(cards.length){
						player.gain(cards,'gain2','log');
					}
					'step 1'
					if(!trigger.num) trigger.cancel();
					if(!player.storage.busuan_angelbeats.length) player.removeSkill('busuan_angelbeats');
				},
			},
			mingjie:{
				audio:1,
				trigger:{player:'phaseJieshuBegin'},
				check:function(){
					return ui.cardPile.hasChildNodes()&&get.color(ui.cardPile.firstChild)!='black';
				},
				content:function(){
					'step 0'
					event.count=0;
					'step 1'
					player.draw('visible');
					'step 2'
					if(Array.isArray(result)){
						event.count+=result.length;
						if(get.color(result)!='red'){
							if(player.hp>1) player.loseHp();
							event.finish();
						}
						else if(event.count<3) player.chooseBool('是否继续发动【命戒】？').ai=function(){
							if(event.count==2) return Math.random()<0.5;
							return lib.skill.mingjie.check();
						};
					}
					else event.finish();
					'step 3'
					if(result.bool) event.goto(1);
				},
			},
		},
		card:{
			pyzhuren_heart:{
				fullskin:true,
				derivation:'puyuan',
				type:'equip',
				subtype:'equip1',
				distance:{attackFrom:-2},
				skills:['pyzhuren_heart'],
				ai:{
					basic:{
						equipValue:4
					}
				},
			},
			pyzhuren_diamond:{
				fullskin:true,
				derivation:'puyuan',
				type:'equip',
				subtype:'equip1',
				distance:{attackFrom:-1},
				skills:['pyzhuren_diamond'],
				ai:{
					basic:{
						equipValue:3
					}
				},
			},
			pyzhuren_club:{
				fullskin:true,
				derivation:'puyuan',
				type:'equip',
				subtype:'equip1',
				distance:{attackFrom:-1},
				skills:['pyzhuren_club'],
				ai:{
					basic:{
						equipValue:5
					}
				},
				loseDelay:false,
				onLose:function(){
					var next=game.createEvent('baiyin_recover');
					event.next.remove(next);
					var evt=event.getParent();
					if(evt.getlx===false) evt=evt.getParent();
					evt.after.push(next);
					next.player=player;
					next.setContent(function(){
						if(player.isDamaged()) player.logSkill('pyzhuren_club');
						player.recover();
					});
				},
			},
			pyzhuren_spade:{
				fullskin:true,
				derivation:'puyuan',
				type:'equip',
				subtype:'equip1',
				skills:['pyzhuren_spade'],
				ai:{
					basic:{
						equipValue:3
					}
				},
			},
			pyzhuren_shandian:{
				fullskin:true,
				derivation:'puyuan',
				type:'equip',
				subtype:'equip1',
				distance:{attackFrom:-3},
				skills:['pyzhuren_shandian'],
				ai:{
					basic:{
						equipValue:3
					}
				},
			},
			dagongche:{
				fullskin:true,
				derivation:'zhangfen',
				type:'equip',
				subtype:'equip5',
				skills:['dagongche_skill'],
				cardPrompt:function(card){
					if(!card.storage) return '出牌阶段开始时，你可以视为使用一张【杀】，且当此【杀】因执行效果而对目标角色造成伤害后，你弃置其一张牌。若此【大攻车】未被强化，则其他角色无法弃置你装备区内的【大攻车】。当此牌离开你的装备区后，销毁之。';
					var str='出牌阶段开始时，你可以视为使用一张';
					if(card.storage.大攻车选项一) str+='无距离限制且无视防具的';
					str+='【杀】';
					if(card.storage.大攻车选项二) str+=('（此【杀】的目标上限+'+card.storage.大攻车选项二+'）');
					str+='，且当此【杀】因执行效果而对目标角色造成伤害后，你弃置其';
					var num=1;
					if(card.storage.大攻车选项三) num+=card.storage.大攻车选项三;
					str+=get.cnNumber(num);
					str+='张牌。当此牌离开你的装备区后，销毁之。';
					return str;
				},
				destroy:true,
				ai:{
					basic:{
						equipValue:3
					}
				},
			},
			pilitoushiche:{
				fullskin:true,
				derivation:'dc_liuye',
				cardimage:'ly_piliche',
				type:'equip',
				subtype:'equip5',
				skills:['pilitoushiche'],
				destroy:true,
				ai:{
					basic:{
						equipValue:3
					}
				},
			},
		},
		characterIntro:{
			puyuan:'蒲元是三国时蜀汉杰出的工匠。为诸葛亮造刀三千口，并且制作木牛流马。后来姜维为他写过两部传记《蒲元传》《蒲元别传》。',
			guanlu:"管辂（209年－256年），字公明，平原（今山东德州平原县）人。三国时期曹魏术士。年八九岁，便喜仰观星辰。成人后，精通《周易》，善于卜筮、相术，习鸟语，相传每言辄中，出神入化。体性宽大，常以德报怨。正元初，为少府丞。北宋时被追封为平原子。管辂是历史上著名的术士，被后世奉为卜卦观相的祖师。",
			gexuan:"葛玄（164年-244年），汉族，吴丹阳郡句容县都乡吉阳里人（今句容市），祖籍山东琅琊，三国著名高道，道教灵宝派祖师。字孝先，号仙翁，被尊称为“葛天师”。道教尊为葛仙翁，又称太极仙翁，与张道陵、许逊、萨守坚共为四大天师。为汉下邳僮侯葛艾后裔，祖葛矩，安平太守，黄门郎；从祖葛弥，豫章第五郡太守。父葛焉，字德儒，州主簿，山阴令，散骑常侍，大尚书。随左慈学道，得《太清丹经》、《黄帝九鼎神丹经》、《金液丹经》等道经。曾采药海山，吴嘉禾二年（233年），在閤皂山修道建庵，筑坛立炉，修炼九转金丹。喜好遨游山川，去过括苍山、南岳山、罗浮山。编撰《灵宝经诰》，精研上清、灵宝等道家真经，并嘱弟子世世箓传。",
			wulan:'吴兰（？~218年），青州（今山东潍坊市）人。东汉末年将领。初为益州牧刘璋部将，后来归降刘备。汉中之战中，与马超、张飞各领一军，驻扎于下辩。建安二十三年，为曹操将领曹洪、张郃所败，退回汉中。途中，为阴平氐族首领强端所杀。',
			leitong:'雷铜（？-218年），阴平（今甘肃文县）人，氐族，东汉末年益州名将。本属益州牧刘璋麾下。刘备攻取益州后，归刘备麾下。参加汉中之战，为魏将张郃所杀。',
			huaman:'花鬘，古典戏曲《龙凤巾》（一名《化外奇缘》）中的人物，身份为三国时期南蛮王孟获与祝融夫人的女儿，关索的夫人之一。在关于关三小姐·关银屏的民间传说中，其名字为“花中秀”，与关索其他几位夫人鲍三娘、王桃、王悦都被关索之姐关银屏编入自己的女兵营中。花鬘在《三国志》，《三国演义》均未有提及，只是戏曲中的虚构人物。其形象并非一般君主家中闺秀，而是与其母祝融相似，是一个可以披甲上阵，善于刀枪作战的女武将。戏曲中在诸葛亮平定南蛮时，花鬘曾与关索作战，失败被俘，两人互生爱意，南蛮王孟获降服后二人成婚。近些年，花鬘接连在各类三国题材的游戏中登场，更广被人知晓。',
			wangshuang:'王双（？-228年），三国时期曹魏将领。蜀汉建兴六年（228年）冬，诸葛亮出散关，攻陈仓，后粮尽而退。王双率领骑兵追击蜀军，但在与蜀军的交战中被击败，王双也被蜀军所斩。在《三国演义》中，王双字子全，是陇西郡狄道县（今甘肃临洮县）人，有万夫不当之勇。在诸葛亮北伐期间，被魏延所斩。',
			wenyang:"文俶（238年—291年），一作文淑，字次骞，小名阿鸯，世称文鸯，谯郡（今安徽亳州市）人。魏末晋初名将，曹魏扬州刺史文钦之子。骁勇善战，依附大将军曹爽，效忠于王室。司马师废黜皇帝曹芳后，随父联合毌丘俭于淮南起兵勤王。兵败之后，向南投奔吴国。诸葛诞发动淮南叛乱，奉命率军驰援。双方发生内讧，父亲为诸葛诞所害，遂降于司马昭，封关内侯。西晋建立后，任平虏护军。咸宁三年（277年），拜平西将军、都督凉秦雍州三州军事，大破鲜卑首领秃发树机能，名震天下，迁使持节、护东夷校尉、监辽东军事。八王之乱中，为诸葛诞外孙、东安王司马繇所诬杀，惨遭灭族，时年五十四岁。",
			liubian:'刘辩（176年－190年3月6日），是汉灵帝刘宏与何皇后的嫡长子。刘辩在灵帝驾崩后继位为帝，史称少帝，由于年幼，实权掌握在临朝称制的母亲何太后和母舅大将军何进手中。少帝在位时期，东汉政权已经名存实亡，他即位后不久即遭遇以何进为首的外戚集团和以十常侍为首的内廷宦官集团这两大敌对政治集团的火并，被迫出宫，回宫后又受制于以“勤王”为名进京的凉州军阀董卓，终于被废为弘农王，成为东汉唯一被废黜的皇帝，其同父异母弟陈留王刘协继位为帝，是为汉献帝。被废黜一年之后，刘辩在董卓胁迫下自尽，时年仅十五岁（一说十八岁），其弟献帝追谥他为怀王。中国古代的史书中称刘辩为皇子辩、少帝和弘农王等。因为在位不逾年，传统上称东汉共十二帝，刘辩与东汉另一位少帝刘懿都不在其中，亦皆无本纪；不过，现代史学界也有观点承认两位少帝均是汉朝皇帝，则刘辩为东汉第十三位皇帝。',
			guozhao:'郭照，电视剧《军师联盟》中的女主角之一，由唐艺昕饰演。原型为文德皇后郭氏（字女王），魏国皇后，张春华的义妹，深爱曹丕，替甄宓抚育曹叡，因甄宓之死被曹叡记恨，曹丕死后，成为皇太后，被曹叡逼上死路。自尽身亡。',
			fanyufeng:'樊夫人，东汉末年人物，昔桂阳太守赵范寡嫂。赵云随刘备平定江南四郡后，刘备以赵云为桂阳太守。赵范居心叵测，要将自己的嫂嫂樊氏嫁给赵云，但遭到赵云的拒绝。后来，赵范逃走，樊氏也下落不明。2001年，应日本日中青少年文化中心成立50周年之邀，北京京剧院赴日进行40场巡回演出，这次访日的剧目都不同程度地进行了加工改编，以符合日本观众的需求。《取桂阳》是根据老本重新排演的，叶金援饰赵云，王怡饰樊玉凤。剧中的樊玉凤成为文武双全的巾帼英雄，被赵云收降，后来在《龙凤呈祥》中也参与堵截东吴的追兵。',
			ruanyu:'阮瑀（约165—212年），字元瑜，陈留尉氏（今河南开封市尉氏县）人，是东汉末年文学家，建安七子之一。阮瑀所作章表书记很出色，当时军国书檄文字，多为阮瑀与陈琳所拟。名作有《为曹公作书与孙权》。诗有《驾出北郭门行》，描写孤儿受后母虐待的苦难遭遇，比较生动形象。年轻时曾受学于蔡邕，蔡邕称他为“奇才”。后徙为丞相仓曹掾属。诗歌语言朴素，往往能反映出一般的社会问题。阮瑀的音乐修养颇高，他的儿子阮籍，孙子阮咸皆当时名人，位列“竹林七贤”，妙于音律。明人辑有《阮元瑜集》。',
			yangwan:'杨氏（婉字出自小说，史书无记载），生卒年不详，东汉末年凉州人。早年嫁于东汉前将军、槐里侯马腾之子马超，追随马超转战并州、雍州、凉州，为马超生下子嗣。公元212年，马超联军在渭南战败后，杨婉随马超逃亡凉州，很快马超反攻吞并陇上诸郡县。公元213年，杨婉为了帮助马超，结识王异，了解马超这些投降部下。可惜被王异蛊惑，遭致马超大败。自己和孩子都被赵衢、梁宽杀害。',
			zhouyi:'周夷，游卡桌游旗下产品《三国杀》自行杜撰的人物。设定为周瑜的妹妹，和周瑜一同征战。',
			caojinyu:'金乡公主，本姓曹氏，名字不详，沛国谯县（今安徽省亳州市）人。魏武帝曹操的女儿，母为杜夫人。适婚的时候，嫁给曹操的养子何晏。高平陵之变，何晏作为大将军曹爽的党羽，遭到太傅司马懿处死。在何晏母亲尹夫人苦苦哀求下，何晏的儿子得以保全。',
			wufan:'吴范（？－226年），字文则，会稽上虞（今浙江绍兴上虞区）人。三国时期孙吴官员，擅长术数。与刘惇、赵达、严武、曹不兴、皇象、宋寿和郑妪合称“吴中八绝”。吴范以推算天象节气和观察气候闻名于郡中。孙权起于东南，他委身事奉，每推算灾祥多应验，遂显名。孙权委以骑都尉，领太史令。初，孙权为将军时，他曾说江南有王气。及孙权立为吴王，论功行封，欲以为都亭侯，但因不愿将其术要诀告知孙权，为权所怨恨，被除名。黄武中，病死。',
			caomao:'曹髦（241年11月15日－260年6月2日），字彦士，沛国谯县（今安徽省亳州市）人，魏文帝曹丕之孙，东海王曹霖之子，曹魏第四位皇帝（254年11月1日－260年6月2日）。正始二年（241年），生于东海王宫，自幼聪明好学，才慧早成，正始五年（244年），封为高贵乡公，嘉平六年（254年），大将军司马师废除齐王曹芳后，拥立为帝，年号正元，曹髦文才武略，崇拜少康，不满司马氏专权秉政，甘露五年（260年），亲自讨伐司马昭，为太子舍人成济所弑，年仅十九岁，以王礼葬于洛阳西北。曹髦擅长诗文，创制了九言诗，传世文章有《伤魂赋并序》《颜子论》等。爱好儒学，亲赴太学论道，著有《春秋左氏传音》（失传）。精通绘画，一说为中国第一位成为画家的皇帝，唐张彦远《历代名画记》目曹髦为中品。',
			laiyinger:'来莺儿，是个传说中的人物，正史及古代典籍并无记载。相传来莺儿是东汉歌妓，建安年间洛阳名妓，后爱上曹操的侍卫王图，王图因延误军机而押赴刑场，当时来莺儿奋不顾身以己命换王图一死。新编古装潮剧《曹营恋歌》，秦腔《雀台歌女》讲述了歌女来莺儿与情人王图及曹操三人之间催人泪下的故事。',
			caohua:'曹华，东汉末年人物，曹操之女，为汉献帝妃嫔。建安十八年（213年），曹操进为魏公，把曹宪、曹节、曹华三个女儿，一齐都送给汉献帝刘协做了妃子，皆封为夫人，聘以束帛五万匹，年龄尚小者在魏公国待年长而聘。',
			zhaoang:'赵昂，字伟章（一作伟璋），天水冀人。汉末时曹操部下。初为羌道令，建安中转参军事徒居州治冀城。建安十八年，马超围冀城多天，城中饥困，凉州刺史韦康不愿百姓再受苦而打算投降，赵昂进劝但不为所纳。后马超背信弃义杀韦康并劫其子赵月为人质，把他送至南郑。欲以此要迫使赵昂为己所用。后与梁宽、赵衢、庞恭、杨阜等结谋为康报仇，并举兵讨伐马超。马超兵败遂弃城，投奔张鲁。得张鲁之援后马超于建安十九年复寇，赵昂与妻子王异坚守祁山三十天至夏侯渊的救兵解围，其子赵月终为马超斩杀。自冀城之难，至于祁山，赵昂出九奇策。',
			liuhui:'刘徽（约225年—约295年），汉族，山东滨州邹平市人，魏晋期间伟大的数学家，中国古典数学理论的奠基人之一。在中国数学史上作出了极大的贡献，他的杰作《九章算术注》和《海岛算经》，是中国最宝贵的数学遗产。刘徽思想敏捷，方法灵活，既提倡推理又主张直观。他是中国最早明确主张用逻辑推理的方式来论证数学命题的人。刘徽的一生是为数学刻苦探求的一生。他虽然地位低下，但人格高尚。他不是沽名钓誉的庸人，而是学而不厌的伟人，他给我们中华民族留下了宝贵的财富。2021年5月，国际天文学联合会（IAU）批准中国在嫦娥五号降落地点附近月球地貌的命名，刘徽（liuhui）为八个地貌地名之一。',
			zhangfen:'张奋，徐州彭城（今江苏徐州）人。三国时期孙吴将领，辅吴将军张昭的侄子。善于制作攻城器械。在步骘举荐下，担任将军，累迁平州都督，册封乐乡亭侯，病逝于任上。',
			dukui:'杜夔，字公良，河南人，擅长音律，聪明过人。管弦等各种乐器，他无所不能。他长期总管歌舞音乐，精心研究，继承复兴了前代古乐，并有所创新。仕于曹操、曹丕之世，以通晓音乐称于世。早年任雅乐郎，汉中平五年（188年），因病离职。州郡的司徒以礼相请，他因时世混乱而奔荆州。荆州牧刘表的儿子刘琮投降曹操后，曹操以杜夔为军谋祭酒 ，参与太乐署之事，令他创制雅乐。魏文帝曹丕黄初年间，任太乐令、协律都尉。',
			quanhuijie:'全皇后（244年－301年），吴郡钱塘（今浙江杭州）人，吴废帝孙亮的皇后，全尚之女，母孙恭之女。吴大帝长女全公主的侄孙女。赤乌十三年（250年），因全公主推荐全氏被册为孙亮的太子妃，建兴二年（253年），全氏被立为皇后。太平三年（258年），孙亮被权臣孙綝贬为会稽王，全皇后也一同贬为会稽王夫人。永安三年（260年），全皇后随夫到侯官，孙亮在途中死去，全皇后在侯官居住二十余年，吴亡后返回吴郡，永宁元年（301年）去世。',
			dingshangwan:'丁尚涴，又名丁夫人。东汉末年权臣曹操的原配夫人。丁尚涴嫁给曹操时，曹操另有刘夫人，生长子曹昂和清河长公主。后刘夫人早亡，曹昂便由丁尚涴抚养，丁尚涴视其为己出。<br>建安二年（公元197年），曹昂随军出征宛城，战死沙场。丁尚涴悲痛欲绝，口出怨言数落曹操，又悲啼不止。曹操恼羞成怒，将其打发回了娘家。不久之后，心生悔意的曹操亲自前往丁家，打算将丁尚涴接回。然而丁尚涴却只是闷头织布。曹操手抚其背，说：“顾我共载归乎！”丁尚涴依旧不理不睬。曹操走到门口，又回过头：“得无尚可邪！”然而依旧得不到回应，只得感叹：“真诀矣。”于是与之和离，并让丁家允许她改嫁，丁家不敢为之。<br>丁尚涴去世后，卞夫人请求曹操安葬她，于是葬在许城以南。后来曹操病重，知道自己时日无多，临终前叹道：“我前后行意，于心未曾有所负也。假令死而有灵，子修若问‘我母所在’，我将何辞以答！”',
			luyi:'卢弈，游卡桌游《三国杀》中虚构的人物。设定为卢植之女。至情至孝。其人虽体弱多病，然而却天资聪颖，有过目不忘、出口成章之才。先后拜蔡邕、王允等人为师，纳诸家之长融会贯通。又善弈棋，曾与当时国手山子道、王九真、郭凯对弈，不分胜负，一时之间名动京华，被太学征辟为女博士，世人皆称其为“女先生”。董卓之乱后，卢弈随父亲隐居乡野，创办上谷学宫，邀天下士子论道。相传诸葛亮、曹植、荀彧、张昭等人都参加过。各学派在卢弈主持下论道，成为一时佳话。后上谷学宫遭曹魏所忌，卢弈为请求曹叡赦免学宫，与司马懿对无棋之弈。卢弈破指凝血，以血为棋，终胜司马懿半子。但却旧伤复发，局终而陨。',
			zhaozhi:'赵直，豫章人，生于公元175年左右，死年不详，字不详。为蜀汉官方占梦者。曾预言蒋琬位极人臣、何祗48岁去世、魏延离死期不远，后果一一应验。',
			dongguiren:'董贵人（？—200年），父董承，汉献帝刘协妃嫔之一。董贵人父亲被曹操所杀，自己也受牵连。董贵人虽有身孕，汉献帝数次为她向曹操求情，仍被杀。',
			zhujianping: '朱建平（生卒年不详），汉末三国时期沛国（今安徽省）人。精通相术，于街巷之间为人相面，效果非常灵验。三国时，他在街头巷尾给人们看相。曹丕做五官将时，请他看相，朱建平说：将军寿命80，40会有小难，愿您多多保护。 又说曹彪：您居于自己的封国，到57当遭兵灾，要好好提防此事。 结果曹丕40去世，曹彪57岁时，犯了与王凌合谋罪，被赐死。他的妙算，都这么准确，即使是唐举，许负也比不上。时人将他与平原郡相士管公明并称为“朱”、“管”。',
			yuanji:'袁氏（生卒年不详），汝南郡汝阳县（今河南商水）人，袁术之女，孙权妃嫔。袁夫人出身世家大族汝南袁氏，其父袁术败亡后，入吴宫拜为夫人，以节操品行着称。',
			chengbing:'程秉（生卒年不详），字德枢，汝南南顿（今河南项城西）人。三国时期吴国官员、儒学家。起初跟随郑玄，后来北方荒乱而到交州避难，期间与刘熙考究五经大义，因此通绕五经。后来交趾太守士燮任命程秉为长史。吴大帝孙权听闻程秉的名声，于是以礼征召他，程秉到后，被任命为太子太傅。黄武四年（225年），孙权为太子孙登娶周瑜之女为妃，程秉以太常身份于吴郡迎候，孙权亲身上程秉的船，可见孙权对他的极为礼待。程秉又教诲孙登对婚后相处要尊重儒家礼教。后来因病在任职期间逝世。著有《周易摘》、《尚书驳》、《论语弼》，凡三万余言。',
			dc_zhouxuān:'周宣，生卒年不详，字孔和，乐安（治今山东高苑西北）人，擅长解梦，在郡做官时曾为太守解过梦，后又给曹丕解梦，都灵验。官至中郎，死于魏明帝末年。',
			xuelingyun:'薛灵芸，东晋王嘉志怪小说《拾遗记》中的人物，魏文帝曹丕的宫人，妙于针工，虽处于深帷之内，不用灯烛之光，裁制立成。凡不是薛灵芸缝制的衣服，文帝一概不穿，宫中号为针神。薛灵芸的故事在正史中虽无记载，却由于许多野史笔记偶尔提及，如《拾遗记》、《太平广记》、《艳异编》等，渐于后世成为中国古代著名美女形象。,',
			yanghong:'杨弘，东汉末年袁术部将。袁术死后，杨弘等将其众欲归孙策，后庐江太守刘勋截击，转归于勋。',
			xielingyu:'谢夫人，会稽山阴（今浙江省绍兴市）人，东汉尚书郎、徐令谢煚之女，吴大帝孙权的原配发妻，又称谢妃。深受孙权宠爱，爱幸有宠。后来孙权为了巩固江东政权，又纳徐氏，欲让谢夫人屈居其下。谢夫人不同意，失志早卒。谢夫人的弟弟是三国著名史学家、武陵太守谢承。豫章太守谢斐与谢夫人同宗同族。',
			zerong:'笮融（？—195年），丹杨（治今安徽宣城）人，东汉末年豪强，生性残暴却笃信佛教，为佛教在中国的发展做出了很大贡献。东汉末年投奔徐州刺史陶谦，督管下邳、彭城、广陵三郡运粮。将其中大量物资占为己有累积财力，遂在徐州一带大规模崇佛，修建豪华佛寺，铸造金铜大佛，衣以锦彩，并举行浴佛节，招揽信徒万余人。其崇佛活动奠定了中国大型佛事活动的基础。后又投奔赵昱、薛礼、朱皓并将他们杀害，扬州牧刘繇因此兴兵讨伐笮融。笮融兵败后逃入深山，由于当地山民同样对他恨之入骨，便联手搜捕、杀死笮融，并将他的首级献给刘繇。',
			huanfan:'桓范（？～249年），字元则，沛郡龙亢县（今安徽省怀远县龙亢镇）人。三国时期曹魏大臣、文学家、画家。建安末年，担任丞相府掾，联合王象等共同撰写《皇览》。延康元年，担任羽林左监。魏明帝时，历任中领军、尚书，出任征虏将军、东中郎将、兖州刺史等。正始年间，授大司农，为大将军曹爽出谋划策，号称“智囊 ”。高平陵政变（249年）发生后，力劝曹爽挟带皇帝曹芳进入许昌，没有得到采纳，最终被太傅司马懿诛杀。桓范颇有文才，著有《世要论》（《桓范新书》）。善于画画，唐朝张彦远《历代名画记》目为中品。',
			sunyu:'孙瑜（177年－215年），字仲异，吴郡富春（今浙江富阳）人，孙坚之弟孙静的次子，孙权的堂兄。官至奋威将军、丹杨太守。孙瑜初以恭义校尉的身份统领士兵，曾跟随周瑜、孙权等人征战，擅于安抚部下、招降纳顺。孙瑜爱读古籍，又请学者马普来为将领官员的子弟讲学，于是东吴开始设立学官。215年，孙瑜去世，时年三十九岁。',
			xizheng:'郤正（？－278年），本名郤纂，字令先，司州河南郡偃师县（今河南省偃师市）人，三国蜀汉至西晋时期学者、官员。少好学，广读古籍。弱冠即善写文章，为蜀汉朝廷征为秘书吏，官至秘书令。公元263年（景耀六年），曹魏攻伐蜀汉，后主刘禅投降，郤正为之撰写投降书。后随刘禅前往洛阳，受封关内侯，又得到晋武帝司马炎赏识，任巴西郡太守，公元278年（咸宁四年）去世。郤正为人不重名利，曾作《释讥》，表明自己淡泊之心境；又醉心于文学，共作诗歌、论著、辞赋等近百篇，但多散佚于后世。',
			zhangjinyun:'张瑾云，张星彩的妹妹，刘禅的第二任皇后，238年正月立为皇后。景耀六年（263年），蜀汉灭亡，刘禅被俘，此后，受封为安乐公。张皇后也随之成为安乐公夫人，咸熙元年（264年），随刘禅到洛阳。',
			duanqiaoxiao:'段巧笑，三国时代魏国魏文帝时的宫人，甚受到魏文帝的宠爱。传说她以原有的化妆品中的米粉和胡粉，再加入葵花子汁，发明了女性化妆用的脂粉。',
			ruanji:'阮籍（公元210年～263年），字嗣宗，陈留尉氏（今河南省开封市）人，三国时期魏国诗人、竹林七贤之一。阮瑀之子，门荫入仕，累迁步兵校尉，世称阮步兵。崇奉老庄之学，政治上则采取谨慎避祸的态度。景元四年（公元263年），阮籍去世，享年五十三岁。作为“正始之音”的代表，著有《咏怀八十二首》、《大人先生传》等，其著作收录在《阮籍集》中。',
			ganfurenmifuren:'甘夫人，刘备起兵后于沛城娶之为妾。后来，甘夫人随刘备到荆州，生了阿斗(也就是后主刘禅)。223年四月，刘备病死于白帝城，追谥甘夫人为“昭烈皇后”。<br>糜夫人，刘备夫人。徐州别驾糜竺之妹。长坂兵败，她怀抱年仅两岁的刘禅在乱军中走散，被赵云发现；但麋夫人因为赵云只有一匹马，不肯上马，在将阿斗托付给赵云后投井而亡。',
			sunlingluan:'孙翎鸾，孙坚与妾室丁氏的女儿，孙策的妹妹，孙权、孙尚香的姐姐。孙翎年幼时曾得杜夔点化，窥得音律玄妙，丝竹八音，擅长琵琶，每次弹奏琵琶时，经常引来百鸟，称为奇观。早年孙翎鸾出游，山林巧遇葛玄，葛玄观其面相为吉，特传授修行辟谷之法，可令其身心洗涤，容颜久存。孙翎鸾有恋人名张奋，两人情投意合，可惜造化弄人，张奋病死外域，孙翎鸾倚楼盼归，日复一日、年复一年。后有五彩孔雀自东南而来，绕楼而鸣，其声如慕，孙翎鸾泪染笑靥，与孔雀耳语几句后乘翎而去。',
			zhoubuyi:'周不疑（192年—208年），字元直（或作“文直”），零陵重安（今湖南衡阳县）人，刘表别驾刘先的外甥，少有异才，聪明敏达，在十七岁时就著有文论四首。曹冲死后，曹操怀疑曹丕无法驾驭周不疑，于是派人杀了周不疑。',
			tianshangyi:'田尚衣，一作陈尚衣，魏文帝曹丕宫中著名宫人。能歌善舞，一时冠绝于世，私以为比之汉宫飞燕也不遑多让。',
		},
		characterTitle:{
			// wulan:'#b对决限定武将',
			// leitong:'#b对决限定武将',
		},
		perfectPair:{},
		characterFilter:{
			// leitong:function(mode){
			// 	return mode!='identity'&&mode!='guozhan';
			// },
			// wulan:function(mode){
			// 	return mode!='identity'&&mode!='guozhan';
			// },
		},
		dynamicTranslate:{
			xinlvli:function(player){
				var str='每回合限一次';
				if(player.storage.choujue) str+='（自己的回合内则改为限两次）';
				str+='，当你造成';
				if(player.storage.beishui) str+='或受到';
				str+='伤害后，你可选择：1，若你的体力值大于你的手牌数，你摸Ｘ张牌；2，若你的手牌数大于你的体力值且你已受伤，你回复Ｘ点体力（Ｘ为你的手牌数与体力值之差）。';
				return str;
			},
			lvli:function(player){
				var str='每名角色的回合限一次';
				if(player.storage.choujue) str+='（自己的回合内则改为限两次）';
				str+='，你可以声明一个基本牌或普通锦囊牌的牌名，有随机概率视为使用之（装备区里的牌数越多，成功概率越大）';
				if(player.storage.beishui) str+='。当你受到伤害后，你也可以以此法使用一张牌。';
				return str;
			},
			rezhongjian:function(player){
				return '出牌阶段限'+(player.hasSkill('recaishi2')?'两':'一')+'次，你可以选择一名本回合内未选择过的角色。你令其获得一项效果直至你的下回合开始：①其下次造成伤害后弃置两张牌，然后你摸一张牌。②其下次受到伤害后摸两张牌，然后你摸一张牌。'
			},
			bazhan:function(player){
				if(player.storage.bazhan) return '转换技，出牌阶段限一次，阴：你可以将至多两张手牌交给一名其他角色。<span class="bluetext">阳：你可以获得一名其他角色的至多两张手牌。</span>若以此法移动的牌包含【酒】或♥牌，则你可令得到此牌的角色执行一项：①回复1点体力。②复原武将牌。';
				return '转换技，出牌阶段限一次，<span class="bluetext">阴：你可以将至多两张手牌交给一名其他角色。</span>阳：你可以获得一名其他角色的至多两张手牌。若以此法移动的牌包含【酒】或♥牌，则你可令得到此牌的角色执行一项：①回复1点体力。②复原武将牌。';
			},
			zhiren:function(player){
				return '当你于'+(player.hasSkill('yaner_zhiren')?'一':'你的')+'回合内使用第一张非转化牌时，你可依次执行以下选项中的前X项：①卜算X。②可弃置场上的一张装备牌和延时锦囊牌。③回复1点体力。④摸三张牌。（X为此牌的名称的字数）';
			},
			yuqi:function(player){
				var info=lib.skill.yuqi.getInfo(player);
				return '每回合限两次。当有角色受到伤害后，若你至其的距离不大于<span class=thundertext>'+info[0]+'</span>，则你可以观看牌堆顶的<span class=firetext>'+info[1]+'</span>张牌。你将其中至多<span class=greentext>'+info[2]+'</span>张牌交给受伤角色，然后可以获得剩余牌中的至多<span class=yellowtext>'+info[3]+'</span>张牌，并将其余牌以原顺序放回牌堆顶。（所有具有颜色的数字至多为5）';
			},
			caiyi:function(player){
				var current=player.storage.caiyi,list=player.storage.caiyi_info||[[],[]];
				var str='转换技。结束阶段，你可令一名角色选择并执行一项，然后移除此选项。';
				var list1=['⒈回复X点体力。','⒉摸X张牌。','⒊复原武将牌。','⒋随机执行一个已经移除过的阴选项；'],list2=['⒈受到X点伤害。','⒉弃置X张牌。','⒊翻面并横置。','⒋随机执行一个已经移除过的阳选项。'],str1='阴：',str2='阳：';
				for(var i=0;i<4;i++){
					var clip1=list1[i],clip2=list2[i];
					if(list[0].contains(i)) clip1=('<span style="text-decoration:line-through;">'+clip1+'</span>');
					if(list[1].contains(i)) clip2=('<span style="text-decoration:line-through;">'+clip2+'</span>');
					str1+=clip1;
					str2+=clip2;
				}
				if(current) str2=('<span class="bluetext">'+str2+'</span>');
				else str1=('<span class="bluetext">'+str1+'</span>');
				return str+str1+str2+'（X为该阴阳态剩余选项的数量）。';
			},
			dchuishu:function(player){
				var list=lib.skill.dchuishu.getList(player);
				return '摸牌阶段结束时，你可以摸['+list[0]+']张牌。若如此做：你弃置['+list[1]+']张手牌，且当你于本回合内弃置第['+list[2]+']+1张牌后，你从弃牌堆中随机获得〖慧淑〗第三个括号数字张非基本牌。';
			},
			dcshoutan:function(player){
				if(player.storage.dcshoutan) return '转换技。出牌阶段限一次，阴：你可以弃置一张不为黑色的手牌。<span class="bluetext">阳：你可以弃置一张黑色手牌。</span>';
				return '转换技。出牌阶段限一次，<span class="bluetext">阴：你可以弃置一张不为黑色的手牌。</span>阳：你可以弃置一张黑色手牌。';
			},
			dcluochong:function(player){
				return '一轮游戏开始时，你可以弃置任意名角色区域里的共计至多['+(4-player.countMark('dcluochong'))+']张牌，然后若你以此法弃置了一名角色的至少三张牌，则你方括号内的数字-1。';
			},
			dczhangcai:function(player){
				return '当你使用或打出'+(player.hasSkill('dczhangcai_all')?'':'点数为8的')+'牌时，你可以摸X张牌（X为你手牌区里'+(player.hasSkill('dczhangcai_all')?'与此牌点数相同':'点数为8')+'的牌数且至少为1）。';
			},
		},
		perfectPair:{},
		characterReplace:{
			wenyang:['wenyang','db_wenyang','diy_wenyang'],
			gexuan:['gexuan','tw_gexuan'],
			panshu:['panshu','re_panshu'],
			yangwan:['yangwan','sp_yangwan'],
			sunyi:['re_sunyi','sunyi','tw_sunyi'],
			fengfangnv:['fengfangnv','re_fengfangnv'],
			luotong:['dc_luotong','luotong'],
			dc_wangchang:['dc_wangchang','tw_wangchang'],
			guozhao:['guozhao','xin_guozhao'],
		},
		translate:{
			puyuan:'蒲元',
			pytianjiang:'天匠',
			pytianjiang_info:'游戏开始时，你随机获得两张不同副类别的装备牌，并置入你的装备区。出牌阶段，你可以将装备区的牌移动至其他角色的装备区（可替换原装备）。若你以此法移动了〖铸刃〗的衍生装备，你摸两张牌。',
			pytianjiang_move:'天匠',
			pyzhuren:'铸刃',
			pyzhuren_info:'出牌阶段限一次，你可以弃置一张手牌。根据此牌的花色点数，你有一定概率打造成功并获得一张武器牌（若打造失败或武器已有则改为摸一张【杀】，花色决定武器名称，点数决定成功率）。此武器牌进入弃牌堆时，将其移出游戏。',
			pyzhuren_destroy:'铸刃',
			pyzhuren_heart:'红缎枪',
			pyzhuren_heart_info:'每回合限一次，当你使用【杀】造成伤害后，你可以进行判定，若结果为：红色，你回复1点体力；黑色：你摸两张牌。',
			pyzhuren_diamond:'烈淬刀',
			pyzhuren_diamond_info:'每回合限两次，当你使用【杀】对目标角色造成伤害时，你可以弃置一张牌，令此伤害+1。你使用【杀】的次数上限+1。',
			pyzhuren_club:'水波剑',
			pyzhuren_club_info:'每回合限两次，当你使用普通锦囊牌或【杀】时，你可以为此牌增加一个目标。当你失去装备区里的【水波剑】后，你回复1点体力。',
			pyzhuren_spade:'混毒弯匕',
			pyzhuren_spade_info:'当你使用【杀】指定目标后，你可令其失去X点体力（X为此技能本回合内发动过的次数且至多为5）。',
			pyzhuren_shandian:'天雷刃',
			pyzhuren_shandian_info:'当你使用【杀】指定目标后，可令其进行判定，若结果为：黑桃，其受到3点雷属性伤害；梅花，其受到1点雷属性伤害，你回复1点体力并摸一张牌。',
			guanlu:'管辂',
			tuiyan:'推演',
			tuiyan_info:'出牌阶段开始时，你可以观看牌堆顶的三张牌。',
			busuan:'卜算',
			busuan_info:'出牌阶段限一次，你可以选择一名其他角色，然后选择至多两张不同的卡牌名称（限基本牌或锦囊牌）。该角色下次摸牌阶段摸牌时，改为从牌堆或弃牌堆中获得你选择的牌。',
			busuan_angelbeats:'卜算',
			mingjie:'命戒',
			mingjie_info:'结束阶段，你可以摸一张牌，若此牌为红色，你可以重复此流程直到摸到黑色牌或摸到第三张牌。当你以此法摸到黑色牌时，若你的体力值大于1，则你失去1点体力。',
			gexuan:'葛玄',
			gxlianhua:'炼化',
			gxlianhua_info:'你的回合外，每当有其他角色受到伤害后，你获得一个“丹血”标记（该角色与你阵营一致时为红色，不一致为黑色，此颜色对所有玩家均不可见）直到你的准备阶段开始。准备阶段，根据你获得的“丹血”标记的数量和颜色，你从牌堆/弃牌堆中获得相应的牌以及相应技能直到回合结束。3枚或以下：〖英姿〗和【桃】；超过3枚且红色“丹血”较多：〖观星〗和【无中生有】；超过3枚且黑色“丹血”较多：〖直言〗和【顺手牵羊】；超过3枚且红色和黑色一样多：【杀】、【决斗】和〖攻心〗。',
			zhafu:'札符',
			zhafu_info:'限定技，出牌阶段，你可以选择一名其他角色，令其获得一枚「札」。有「札」的角色弃牌阶段开始时，若其手牌数大于1，其移去「札」并选择保留一张手牌，然后将其余的手牌交给你。',
			leitong:'雷铜',
			kuiji:'溃击',
			kuiji_info:'出牌阶段限一次。你可以将一张黑色基本牌当作【兵粮寸断】置于你的判定区，然后摸一张牌。若如此做，你可以对体力值最多的一名对手造成2点伤害。对手因此进入濒死状态时，你或队友体力值最少的一方回复1点体力。',
			kuiji_info_identity:'出牌阶段限一次。你可以将一张黑色基本牌当做【兵粮寸断】置于你的判定区，摸一张牌，然后你可以对体力值最多的一名其他角色造成2点伤害。该角色因此进入濒死状态时，你可令一名除其外体力值最少的角色回复1点体力。',
			kuiji_info_guozhan:'出牌阶段限一次。你可以将一张黑色基本牌当做【兵粮寸断】置于你的判定区，摸一张牌，然后你可以对体力值最多的一名其他角色造成2点伤害。该角色因此进入濒死状态时，你可令一名除其外体力值最少的角色回复1点体力。',
			wulan:'吴兰',
			wlcuorui:'挫锐',
			wlcuorui_info:'出牌阶段开始时，你可以弃置你或队友区域里的一张牌。若如此做，你选择一项：1.弃置对手装备区里至多两张与此牌颜色相同的牌；2.展示对手的共计两张手牌，然后获得其中与此牌颜色相同的牌。',
			wlcuorui_info_identity:'出牌阶段开始时，你可以弃置一名你至其的距离不大于1的角色区域里的一张牌，然后你选择一项：1.弃置另一名其他角色装备区里至多两张与此牌颜色相同的牌；2.展示另一名其他角色的至多两张手牌，然后获得其中与此牌颜色相同的牌。',
			wlcuorui_info_guozhan:'出牌阶段开始时，你可以弃置一名你至其的距离不大于1的角色区域里的一张牌，然后你选择一项：1.弃置另一名其他角色装备区里至多两张与此牌颜色相同的牌；2.展示另一名其他角色的至多两张手牌，然后获得其中与此牌颜色相同的牌。',
			huaman:'花鬘',
			hmmanyi:'蛮裔',
			hmmanyi_info:'锁定技，【南蛮入侵】对你无效。',
			mansi_viewas:'蛮嗣',
			mansi:'蛮嗣',
			mansi_info:'出牌阶段限一次，你可以将所有手牌当做【南蛮入侵】使用；当有角色受到【南蛮入侵】的伤害后，你摸一张牌。',
			souying:'薮影',
			souying_info:'每回合限一次，当你对其他角色（或其他角色对你）使用【杀】或普通锦囊牌指定唯一目标后，若此牌不是本回合你对其（或其对你）使用的第一张【杀】或普通锦囊牌，你可以弃置一张牌，获得此牌对应的所有实体牌（或令此牌对你无效）。',
			zhanyuan:'战缘',
			zhanyuan_info:'觉醒技，准备阶段，若你已因蛮嗣累计获得超过7张牌，你加一点体力上限并回复1点体力，并可以选择一名男性角色，你与其获得技能〖系力〗，然后你失去技能〖蛮嗣〗',
			hmxili:'系力',
			hmxili_info:'每回合限一次，你的回合外，当其他拥有【系力】技能的角色在其回合内对没有【系力】技能的角色造成伤害时，你可以弃置一张牌，令此伤害+1，然后你与其各摸两张牌。',
			wangshuang:'王双',
			spzhuilie:'追猎',
			spzhuilie2:'追猎',
			spzhuilie_info:'锁定技，你使用【杀】无距离限制；当你使用【杀】指定目标后，若其不在你的攻击范围内，此【杀】不计入使用次数限制且你判定。若判定结果为武器牌或坐骑牌，此【杀】的伤害基数改为X（X为其体力值）。否则你失去1点体力。',
			wenyang:'文鸯',
			xinlvli:'膂力',
			xinlvli_info:'每回合限一次，当你造成伤害后，你可选择：1，若你的体力值大于你的手牌数，你摸Ｘ张牌；2，若你的手牌数大于你的体力值且你已受伤，你回复Ｘ点体力（Ｘ为你的手牌数与体力值之差）。',
			lvli:'膂力',
			lvli4:'膂力',
			lvli5:'膂力',
			lvli_info:'每名角色的回合限一次，你可以声明一个基本牌或普通锦囊牌的牌名，有随机概率视为使用之（装备区里的牌数越多，成功概率越大）',
			choujue:'仇决',
			choujue_info:'觉醒技，一名角色的回合结束时，若你的手牌数和体力值相差3或更多，你减1点体力上限并获得技能〖背水〗，然后将〖膂力〗改为“在自己的回合时每回合限两次”。',
			beishui:'背水',
			beishui_info:'觉醒技，准备阶段，若你的手牌数或体力值小于2，你减1点体力上限并获得技能〖清剿〗，然后将〖膂力〗改为受到伤害后也可以发动。',
			qingjiao:'清剿',
			qingjiao_info:'出牌阶段开始时，你可以弃置所有手牌，然后从牌堆或弃牌堆中随机获得八张牌名各不相同且副类别不同的牌。若如此做，结束阶段，你弃置所有牌。',
			re_liuzan:'留赞',
			refenyin:'奋音',
			refenyin_info:'锁定技，你的回合内，当一张牌进入弃牌堆后，若本回合内没有过与此牌花色相同的卡牌进入过弃牌堆，则你摸一张牌。',
			liji:'力激',
			liji_info:'出牌阶段限X次，你可以弃置一张牌并对一名其他角色造成1点伤害。（X为本回合内进入过弃牌堆的卡牌数除以8，若场上人数小于5则改为除以4，向下取整）',
			liubian:'刘辩',
			shiyuan:'诗怨',
			shiyuan_info:'每回合每项限一次，当你成为其他角色使用牌的目标后：①若其体力值大于你，你摸三张牌。②若其体力值等于你，你摸两张牌。③若其体力值小于你，你摸一张牌。',
			dushi:'毒逝',
			dushi_info:'锁定技，你处于濒死状态时，其他角色不能对你使用【桃】。你死亡时，你选择一名其他角色获得〖毒逝〗。',
			yuwei:'余威',
			yuwei_info:'主公技，锁定技，其他群雄角色的回合内，你将〖诗怨〗改为“每回合每项限两次”。',
			re_xinxianying:'新杀辛宪英',
			re_xinxianying_prefix:'新杀',
			rezhongjian:'忠鉴',
			rezhongjian2:'忠鉴',
			rezhongjian_info:'出牌阶段限一次，你可以选择一名本回合内未选择过的角色。你令其获得一项效果直至你的下回合开始：①其下次造成伤害后弃置两张牌，然后你摸一张牌。②其下次受到伤害后摸两张牌，然后你摸一张牌。',
			recaishi:'才识',
			recaishi3:'才识',
			recaishi_info:'摸牌阶段结束时，若你于本阶段内因摸牌而获得的所有的牌：花色均相同，你将〖忠鉴〗于本回合内改为“出牌阶段限两次”。不均相同，你可回复1点体力。若如此做，你本回合内不能对自己使用牌。',
			guozhao:'郭照',
			pianchong:'偏宠',
			pianchong2:'偏宠',
			pianchong_info:'摸牌阶段开始时，你可放弃摸牌。若如此做，你从牌堆中获得一张红色牌和一张黑色牌。然后你选择一种颜色。你的下回合开始前，当你失去该颜色的一张牌后，你从牌堆中获得另一种颜色的一张牌。',
			zunwei:'尊位',
			zunwei_backup:'尊位',
			zunwei_info:"出牌阶段限一次，你可选择本局游戏内未选择过的一项：①若你已受伤，则你可以选择一名体力值大于你的其他角色，你将体力值回复至X（X为你的体力上限与其体力值中的较小值）②选择一名手牌数大于你的其他角色，你将手牌数摸至与其相同（至多摸五张）③选择一名装备区内牌数大于你的其他角色。你令X=1。若你装备区内的('equip'+X)栏为空，则你使用牌堆中的一张副类别为('equip'+X)，且能对自己使用的装备牌。你令X+1。若X不大于5，且你装备区内的牌数仍小于目标角色，则你重复此流程。",
			fanyufeng:'樊玉凤',
			bazhan:'把盏',
			bazhan_info:'转换技，出牌阶段限一次，阴：你可以将至多两张手牌交给一名其他角色。阳：你可以获得一名其他角色的至多两张手牌。若以此法移动的牌包含【酒】或♥牌，则你可令得到牌的角色执行一项：①回复1点体力。②复原武将牌。',
			jiaoying:'醮影',
			jiaoying2:'醮影',
			jiaoying3:'醮影',
			jiaoying3_draw:'醮影',
			jiaoying_info:'锁定技，其他角色得到你的手牌后，该角色本回合不能使用或打出与此牌颜色相同的牌。然后此回合结束时，若其本回合没有再使用牌，你令一名角色将手牌摸至五张。',
			ruanyu:'阮瑀',
			xingzuo:'兴作',
			xingzuo2:'兴作',
			xingzuo_info:'出牌阶段开始时，你可观看牌堆底的三张牌并用任意张手牌替换其中等量的牌。若如此做，结束阶段，你可令一名有手牌的角色用所有手牌替换牌堆底的三张牌。若其因此法失去的牌多于三张，则你失去1点体力。',
			miaoxian:'妙弦',
			miaoxian_info:'若你的手牌中仅有一张黑色牌，你可将此牌当作任意一张普通锦囊牌使用（每回合限一次）；若你的手牌中仅有一张红色牌，你使用此牌时摸一张牌。',
			yangwan:'杨婉',
			youyan:'诱言',
			youyan_info:'出牌阶段/弃牌阶段各限一次。当有牌进入弃牌堆后，若其中有你不因使用或打出而失去的牌，你可以从牌堆中获得你本次失去的牌中没有的花色的牌各一张。',
			zhuihuan:'追还',
			zhuihuan2:'追还',
			zhuihuan2_new:'追还',
			zhuihuan_info:'结束阶段开始时，你可以选择一名角色（对其他角色不可见）。记录所有对该角色造成过伤害的角色。该角色的下个准备阶段开始时停止记录，且所有记录过的角色：若体力值大于该角色，则受到其造成的2点伤害；若体力值小于等于该角色，则随机弃置两张手牌。',
			re_panshu:'潘淑',
			zhiren:'织纴',
			zhiren_info:'当你于你的回合内使用第一张非转化牌时，你可依次执行以下选项中的前X项：①卜算X。②可弃置场上的一张装备牌和延时锦囊牌。③回复1点体力。④摸三张牌。（X为此牌的名称的字数）',
			yaner:'燕尔',
			yaner_info:'每回合限一次。当有其他角色于其出牌阶段内失去手牌后，若其没有手牌，则你可以与其各摸两张牌。若其以此法摸得的两张牌类型相同，则其回复1点体力。若你以此法摸得的两张牌类型相同，则你将〖织纴〗中的“你的回合内”改为“一回合内”直至你下回合开始。',
			zhouyi:'周夷',
			zhukou:'逐寇',
			zhukou_info:'①当你于一名角色的出牌阶段第一次造成伤害后，你可以摸X张牌（X为本回合你已使用的牌数）。②你的结束阶段，若你本回合没有造成伤害，你可以对两名其他角色各造成1点伤害。',
			mengqing:'氓情',
			mengqing_info:'觉醒技。准备阶段，若场上已受伤的角色数大于你的体力值，你加3点体力上限并回复3点体力，失去〖逐寇〗，获得〖玉殒〗。',
			yuyun:'玉殒',
			yuyun_info:'锁定技，出牌阶段开始时，你失去1点体力或体力上限（不能减至1以下），然后选择X+1项（X为你已损失的体力值）：①摸两张牌；②对一名其他角色造成1点伤害，然后本回合对其使用【杀】无距离和次数限制；③本回合的手牌上限视为无限；④获得一名其他角色区域内的一张牌；⑤令一名其他角色将手牌摸至体力上限（最多摸至5）。',
			caojinyu:'曹金玉',
			yuqi:'隅泣',
			yuqi_info:'每回合限两次。当有角色受到伤害后，若你至其的距离不大于<span class=thundertext>0</span>，则你可以观看牌堆顶的<span class=firetext>3</span>张牌。你将其中至多<span class=greentext>1</span>张牌交给受伤角色，然后可以获得剩余牌中的至多<span class=yellowtext>1</span>张牌，并将其余牌以原顺序放回牌堆顶。（所有具有颜色的数字至多为5）',
			shanshen:'善身',
			shanshen_info:'当有角色死亡时，你可令你的〖隅泣〗中的一个具有颜色的数字+2。然后若你未对该角色造成过伤害，则你回复1点体力。',
			xianjing:'娴静',
			xianjing_info:'准备阶段，你可令你的〖隅泣〗中的一个具有颜色的数字+1。若你的体力值等于体力上限，则你可以重复一次此流程。',
			re_sunyi:'孙翊',
			syjiqiao:'激峭',
			syjiqiao_info:'出牌阶段开始时，你可将牌堆顶的X张牌置于你的武将牌上（X为你的体力上限）。当你于此出牌阶段内使用的牌结算结束后，你可以获得其中的一张牌，然后若剩余牌中红色牌和黑色牌的数量：不相等，你失去1点体力；相等，你回复1点体力。出牌阶段结束时，你将这些牌置入弃牌堆。',
			syxiongyi:'凶疑',
			syxiongyi_info:'限定技。当你处于濒死状态时，若剩余武将牌堆中：有“徐氏”，则你可以将体力值回复至3点，并将此武将牌替换为“徐氏”；没有“徐氏”，则你可以将体力值回复至1点并获得〖魂姿〗。',
			re_zhangbao:'新杀张宝',
			re_zhangbao_prefix:'新杀',
			xinzhoufu:'咒缚',
			xinzhoufu2:'咒缚',
			xinzhoufu_info:'出牌阶段限一次。你可以将一张手牌置于一名其他角色的武将牌上并称为“咒”，且当其判定时，将其“咒”作为判定牌。',
			xinyingbing:'影兵',
			xinyingbing_info:'锁定技。每回合每名角色限一次，当你使用牌指定有“咒”的角色为目标后，你摸两张牌。',
			wufan:'吴范',
			tianyun:'天运',
			tianyun_info:'①游戏的第一个回合开始前，你从牌堆中获得手牌区内没有的花色的各一张牌。②一名角色的回合开始时，若其座位号等于游戏轮数，则你可观看牌堆顶的X张牌并以任意顺序置于牌堆顶或牌堆底。若你将所有的牌均置于了牌堆底，则你可以令一名角色摸X张牌，然后失去1点体力。（X为你手牌中包含的花色数）',
			wfyuyan:'预言',
			wfyuyan_info:'一轮游戏开始时，你选择一名角色（对其他角色不可见）：当第一次有角色于本轮内进入濒死状态时，若其是你选择的角色，则你获得〖奋音〗直到你的回合结束；当第一次有角色于本轮内造成伤害后，若其是你选择的角色，则你摸两张牌。',
			re_fengfangnv:'冯妤',
			tiqi:'涕泣',
			tiqi_info:'其他角色的摸牌阶段结束时/被跳过时，若其于本阶段内因摸牌而得到的牌数X不等于2，则你可以摸|X-2|张牌，并可令其本回合的手牌上限±|X-2|。',
			baoshu:'宝梳',
			baoshu_info:'①准备阶段，你可选择Y名角色，这些角色重置武将牌并获得(X-Y+1)个“梳”（X为你的体力上限，Y∈[1, X]）。②一名角色的摸牌阶段开始时，若其有“梳”，则其本阶段的额定摸牌数+Z且移去Z个“梳”（Z为其“梳”的数量）。',
			dc_luotong:'骆统',
			renzheng:'仁政',
			renzheng_info:'锁定技。当有伤害被防止时，或伤害值发生过减少的伤害事件结算结束后，你摸两张牌。',
			jinjian:'进谏',
			jinjian_info:'①当你造成伤害时，你可令此伤害+1，然后你本回合内下一次造成的伤害-1且不触发〖进谏①〗。②当你受到伤害时，你可令此伤害-1。然后你于本回合内下一次受到的伤害+1且不触发〖进谏②〗。',
			caomao:'曹髦',
			qianlong:'潜龙',
			qianlong_info:'当你受到伤害后，你可以展示牌堆顶的三张牌并获得其中的至多X张牌（X为你已损失的体力值），然后将剩余的牌置于牌堆底。',
			fensi:'忿肆',
			fensi_info:'锁定技。准备阶段，你须选择一名体力值不小于你的角色并对其造成1点伤害，然后若你选择的角色不为你自己，则其视为对你使用一张【杀】。',
			juetao:'决讨',
			juetao_info:'限定技。出牌阶段开始时，若你的体力值为1，则你可以选择一名其他角色。你展示牌堆底的一张牌，若此牌能被你使用，则你使用此牌并重复此流程直到出现不可使用的牌或其死亡（你与其以外的角色不是此牌的合法目标）。',
			zhushi:'助势',
			zhushi_info:'主公技。每回合限一次，其他魏势力角色于回合内回复体力时，其可令你摸一张牌。',
			laiyinger:'来莺儿',
			xiaowu:'绡舞',
			xiaowu_info:'出牌阶段限一次，你可以选择任意名座位连续且包含你的上家/下家的角色。这些角色依次选择一项：⒈令你摸一张牌；⒉其摸一张牌。然后若选择选项一的角色数大于选项二的角色数，则你获得一枚“沙”；若选择选项二的角色数大于选项一的角色数，则你对这些角色依次造成1点伤害。',
			huaping:'化萍',
			huaping_info:'限定技。①一名其他角色死亡时，你可获得其当前拥有的所有不带有「Charlotte」标签的技能，然后你失去〖绡舞〗，移去所有“沙”并摸等量的牌。②当你死亡时，你可令一名其他角色获得〖沙舞〗和你的所有“沙”。',
			shawu:'沙舞',
			shawu_info:'当你使用【杀】指定目标后，你可选择一项：⒈弃置两张手牌；⒉移去一枚“沙”并摸两张牌。然后你对目标角色造成1点伤害。',
			dc_huangzu:'黄祖',
			dcjinggong:'精弓',
			dcjinggong_info:'你可以将一张装备牌当做无距离限制的【杀】使用。当你声明使用此【杀】后，你将此杀的伤害值基数改为X（X为你至此【杀】第一个目标角色的距离且至多为5）。',
			dcxiaojuan:'骁隽',
			dcxiaojuan_info:'当你使用牌指定其他角色为唯一目标后，你可以弃置其一半的手牌（向下取整）。若这些牌中有与你使用牌花色相同的牌，则你弃置一张手牌。',
			dc_liuyu:'新杀刘虞',
			dc_liuyu_prefix:'新杀',
			dcsuifu:'绥抚',
			dcsuifu_info:'其他角色的结束阶段开始时，若你和一号位本回合内累计受到过的伤害值大于1，则你可以将该角色的所有手牌置于牌堆顶，然后视为使用一张【五谷丰登】。',
			dcpijing:'辟境',
			dcpijing_info:'结束阶段开始时，你可以选择任意名角色。你令所有未选择的角色失去〖自牧〗，然后你和这些角色获得〖自牧〗。',
			dczimu:'自牧',
			dczimu_info:'锁定技。当你受到伤害后，你令所有拥有〖自牧〗的角色各摸一张牌，然后你失去〖自牧〗。',
			caohua:'曹华',
			caiyi:'彩翼',
			caiyi_info:'转换技。结束阶段，你可令一名角色选择并执行一项，然后移除此选项。阴：⒈回复X点体力。⒉摸X张牌，⒊复原武将牌。⒋随机执行一个已经移除过的阴选项；阳：⒈受到X点伤害。⒉弃置X张牌。⒊翻面并横置。⒋随机执行一个已经移除过的阳选项。（X为该阴阳态剩余选项的数量）。',
			guili:'归离',
			guili_info:'你的第一个回合开始时，你须选择一名其他角色。该角色每轮的第一个回合结束后，若其本回合内未造成过伤害，则你执行一个额外的回合。',
			zhaoang:'赵昂',
			dczhongjie:'忠节',
			dczhongjie_info:'每轮限一次。当有角色因失去体力而进入濒死状态时，你可令其回复1点体力并摸一张牌。',
			dcsushou:'夙守',
			dcsushou_tag:'对方手牌',
			dcsushou_info:'一名角色的出牌阶段开始时，若其手牌数为全场唯一最多，则你可以失去1点体力并摸X张牌。然后若该角色不是你，则你可以观看其一半的手牌（向下取整），且用至多X张手牌替换其中等量的牌。（X为你已损失的体力值）',
			dc_wangchang:'王昶',
			dckaiji:'开济',
			dckaiji_info:'转换技。出牌阶段限一次，你可以：阴：摸X张牌；阳：弃置至多X张牌（X为你的体力上限且至多为5）。',
			dcpingxi:'平袭',
			dcpingxi_info:'结束阶段，若X大于0，则你可以选择至多X名其他角色（X为本回合内因弃置而进入弃牌堆的牌数）。你依次弃置这些角色的各一张牌，然后视为对这些角色使用一张【杀】。',
			liuhui:'刘徽',
			dcgeyuan:'割圆',
			dcgeyuan_info:'锁定技。①游戏开始时，你将从A至K的所有整数排列为一个环形链表，称为“圆环之理”。②当有一张牌进入弃牌堆后，若此牌的点数在“圆环之理”内，且“圆环之弧”为空或此牌的点数与“圆环之弧”两端的点数相邻，则你将此牌的点数记录进“圆环之弧”；然后若“圆环之弧”与“圆环之理”长度相同，则你从“圆环之理”中移除“圆环之弧”记录的第一个和最后一个数字A和B（当“圆环之理”长度不大于3时则不移除），清空“圆环之弧”，获得场上和牌堆中所有点数为A和B的牌。',
			dcjieshu:'解术',
			dcjieshu_info:'锁定技。①所有点数不在“圆环之理”中的牌不计入你的手牌上限。②当你使用牌时，若“圆环之弧”为空或此牌的点数与“圆环之弧”两端的点数相邻，则你摸一张牌。',
			dcgusuan:'股算',
			dcgusuan_info:'觉醒技。一名角色的回合结束时，若你的“圆环之理”长度为3，则你减1点体力上限并修改〖割圆〗。',
			dcgeyuan_magica:'割圆·改',
			dcgeyuan_magica_info:'锁定技。当有一张牌进入弃牌堆后，若此牌的点数在“圆环之理”内，且“圆环之弧”为空或此牌的点数与“圆环之弧”两端的点数相邻，则你将此牌的点数记录进“圆环之弧”；然后若“圆环之弧”与“圆环之理”长度相同，则你清空“圆环之弧”并选择至多三名角色，这些角色中的第一名角色摸三张牌，第二名角色弃置四张牌，第三名角色将其手牌与牌堆底的五张牌交换。',
			zhangfen:'张奋',
			dcwanglu:'望橹',
			dcwanglu_info:'锁定技。准备阶段开始时，若你的装备区内：有【大攻车】，则你获得一个额外的出牌阶段；没有【大攻车】，则你将一张【大攻车】置入装备区。',
			dcxianzhu:'陷筑',
			dcxianzhu_info:'当你造成渠道为【杀】伤害后，你可以为你装备区内的【大攻车】选择一项强化（每张【大攻车】最多被强化五次）：⒈通过【大攻车】使用【杀】无视距离和防具；⒉通过此【大攻车】使用的【杀】可以额外选择1个目标（可叠加）；⒊通过此【大攻车】使用的【杀】造成伤害后的弃置牌数+1（可叠加）。',
			dcchaixie:'拆械',
			dcchaixie_info:'锁定技。当你的【大攻车】被销毁后，你摸X张牌（X为此【大攻车】被强化过的次数）。',
			dagongche:'大攻车',
			dagongche_skill:'大攻车',
			dagongche_info:'出牌阶段开始时，你可以视为使用一张【杀】，且当此【杀】因执行效果而对目标角色造成伤害后，你弃置其一张牌。若此【大攻车】未被强化，则其他角色无法弃置你装备区内的【大攻车】。当此牌离开你的装备区后，销毁之。',
			dukui:'杜夔',
			dcfanyin:'泛音',
			dcfanyin_info:'出牌阶段开始时，你可以亮出牌堆中点数最小的一张牌。然后你选择一项，并可以亮出一张点数为此牌二倍的牌且重复此流程：⒈使用此牌（无距离限制）；⒉你于本回合内使用的下一张基本牌或普通锦囊牌选择目标后，可以增加一个目标。',
			dcpeiqi:'配器',
			dcpeiqi_info:'当你受到伤害后，你可以移动场上的一张牌。然后若场上所有角色均在彼此的攻击范围内，则你可以再移动场上的一张牌。',
			quanhuijie:'全惠解',
			dchuishu:'慧淑',
			dchuishu_info:'摸牌阶段结束时，你可以摸[3]张牌。若如此做：你弃置[1]张手牌，且当你于本回合内弃置第[2]+1张牌后，你从弃牌堆中随机获得〖慧淑〗第三个括号数字张非基本牌。',
			dcyishu:'易数',
			dcyishu_info:'锁定技。当你不因出牌阶段而失去牌后，你同时令{〖慧淑〗的中括号内最小的一个数字+2}且{〖慧淑〗的中括号内最大的一个数字-1}。',
			dcligong:'离宫',
			dcligong_info:'觉醒技。准备阶段，若〖慧淑〗的中括号内有不小于5的数字，则你加1点体力上限，回复1点体力并失去〖易数〗。系统随机检索四张吴势力的女性武将牌，然后你选择一项：⒈摸三张牌。⒉失去〖慧淑〗，然后获得这些武将牌上的任意两个非Charlotte技能。',
			dingshangwan:'丁尚涴',
			dcfengyan:'讽言',
			dcfengyan_info:'出牌阶段每项各限一次。你可以：⒈令一名体力值不大于你的其他角色交给你一张手牌。⒉视为对一名手牌数不大于你的角色使用一张【杀】（无距离和次数限制）。',
			dcfudao:'抚悼',
			dcfudao_info:'游戏开始时，你选择一名其他角色，称为“继子”角色。当你或“继子”每回合首次使用牌指定对方为目标后，你与其各摸两张牌。当有角色杀死你或“继子”后，该角色称为“决裂”角色。当你或“继子”对“决裂”造成伤害时，此伤害+1。当你成为“决裂”角色使用牌的目标后，其本回合内不能再使用牌。',
			luyi:'卢弈',
			dcyaoyi:'邀弈',
			dcyaoyi_info:'锁定技。①游戏开始时，你令所有存活且未拥有转换技的角色获得〖手谈〗。②你发动〖手谈〗时无需弃置牌，且无次数限制。③所有拥有转换技的角色不能使用牌指定其他拥有转换技且双方所有转换技状态均相同的角色为目标。',
			dcfuxue:'复学',
			dcfuxue_info:'①准备阶段，你可以从弃牌堆中选择获得至多X张不因使用而进入弃牌堆的牌。②结束阶段，若你的手牌区中没有因〖复学①〗得到的牌，则你摸X张牌（X为你的体力值）。',
			dcshoutan:'手谈',
			dcshoutan_info:'转换技。出牌阶段限一次，阴：你可以弃置一张不为黑色的手牌。阳：你可以弃置一张黑色手牌。',
			dc_liuye:'刘晔',
			dcpoyuan:'破垣',
			dcpoyuan_info:'游戏开始时或准备阶段开始时，若你的装备区内：没有【霹雳投石车】，则你可以将一张【霹雳投石车】置入装备区；有【霹雳投石车】，则你可以弃置一名其他角色至多两张牌。',
			dchuace:'画策',
			dchuace_info:'出牌阶段限一次。你可以将一张手牌当做上一轮内未被使用过的普通锦囊牌使用。',
			pilitoushiche:'霹雳投石车',
			pilitoushiche_info:'锁定技。①你于回合内使用基本牌无距离限制，且当你于回合内使用基本牌时，你令此牌的牌面数值+1。②当你于回合外使用或打出基本牌时，你摸一张牌。③当此牌离开你的装备区时，销毁之。',
			zhaozhi:'赵直',
			dctongguan:'统观',
			dctongguan_info:'一名角色的第一个回合开始时，你为其选择一项属性（每个属性至多选两次，且仅对你可见）。',
			dcmengjie:'梦解',
			dcmengjie_info:'一名角色的回合结束时，若其本回合完成了其〖统观〗属性，你执行对应效果：<li>「武勇」造成伤害：对一名其他角色造成1点伤害；<li>「刚硬」回复体力，或于得到牌后手牌数大于体力值：令一名角色回复1点体力；<li>「多谋」于摸牌阶段外摸牌：摸两张牌；<li>「果决」弃置或获得其他角色的牌：弃置一名角色区域内至多两张牌；<li>「仁智」交给其他角色牌：令一名其他角色将手牌补至体力上限（至多摸五张）。',
			dctongguan_wuyong:'武勇',
			dctongguan_wuyong_info:'任务目标：造成伤害。',
			dctongguan_gangying:'刚硬',
			dctongguan_gangying_info:'任务目标：回复体力，或于得到牌后手牌数大于体力值。',
			dctongguan_duomou:'多谋',
			dctongguan_duomou_info:'任务目标：于摸牌阶段外摸牌。',
			dctongguan_guojue:'果决',
			dctongguan_guojue_info:'任务目标：弃置或获得其他角色的牌。',
			dctongguan_renzhi:'仁智',
			dctongguan_renzhi_info:'任务目标：交给其他角色牌。',
			zhujianping:'朱建平',
			olddcxiangmian:'相面',
			olddcxiangmian_info:'其他角色的结束阶段，你可以判定。然后你不能再对其发动此技能，其获得以下效果：当其使用第X张结果的花色的牌后（X为结果的点数），其失去等同于其体力值的体力。',
			dcxiangmian:'相面',
			dcxiangmian_info:'出牌阶段限一次。你可以令一名其他角色判定，然后你不能再对其发动此技能，其获得以下效果：当其使用结果的花色的牌后，或当其使用X张牌后（X为结果的点数），其失去等同于其体力值的体力。',
			dctianji:'天机',
			dctianji_info:'锁定技。当判定牌进入弃牌堆后，你从牌堆随机获得分别与该牌类型、花色和点数相同的牌各一张。',
			yuanji:'袁姬',
			dcmengchi:'蒙斥',
			dcmengchi_info:'锁定技。若你未于当前回合得到过牌：你不能使用牌；当你横置前，取消之；当你受到无属性伤害后，回复1点体力。',
			dcfangdu:'芳妒',
			dcfangdu_info:'锁定技。当你于回合外受到伤害后，若此次伤害为你于本回合受到的：第一次无属性伤害，你回复1点体力；第一次属性伤害，你随机获得伤害来源的一张牌。',
			dcjiexing:'节行',
			dcjiexing_info:'当你受到伤害后、失去体力后或回复体力后，你可以摸一张牌，且此牌不计入本回合的手牌上限。',
			dongguiren:'董贵人',
			dclianzhi:'连枝',
			dclianzhi_info:'①游戏开始时，你选择一名其他角色（仅你可见）。②每回合限一次。当你进入濒死状态时，若〖连枝①〗角色存活，你回复1点体力并与其各摸一张牌。③当〖连枝①〗角色死亡后，你可以与一名其他角色各获得〖受责〗，且其获得与你拥有的等量枚“绞”标记（至少获得1枚）。',
			dclingfang:'凌芳',
			dclingfang_info:'锁定技。准备阶段，或当其他角色使用黑色牌结算结束后，若你是此牌的目标，或你使用黑色牌结算结束后，若你不是此牌目标，你获得1枚“绞”。',
			dcfengying:'风影',
			dcfengying_info:'①一名角色的回合开始时，你记录弃牌堆中所有黑色基本牌或黑色普通锦囊牌的牌名。②每回合每种牌名各限一次。你可以将一张点数不大于“绞”数的手牌当做任意一张〖风影①〗记录中的牌使用。',
			dcshouze:'受责',
			dcshouze_info:'锁定技。结束阶段，若你有“绞”，你弃1枚“绞”，随机获得弃牌堆中的一张黑色牌，失去1点体力。',
			chengbing:'程秉',
			dcjingzao:'经造',
			dcjingzao_info:'出牌阶段每名角色限一次。你可以选择一名其他角色并亮出牌堆顶三张牌，其选择一项：1.弃置一张牌名与这些牌的其中一张牌名相同的牌，然后你〖经造〗本回合亮出的牌数+1；2.令你随机获得这些牌中每种牌名的牌各一张，然后你本回合不能再发动〖经造〗。',
			dcenyu:'恩遇',
			dcenyu_info:'锁定技。当你成为其他角色使用牌的目标后，若你本回合成为过此牌名的牌的目标，此牌对你无效。',
			dc_zhouxuān:'周宣',
			dcwumei:'寤寐',
			dcwumei_info:'每轮限一次。回合开始时，你可以令一名角色记录场上所有角色的体力值并进行一个额外的回合，并将你的回合移至该回合后进行。该角色以此法进行的回合的结束阶段，将场上所有角色的体力值改为记录内的对应数值。',
			dczhanmeng:'占梦',
			dczhanmeng_info:'当你使用牌时，你可以选择本回合未选择过的一项：1.上一回合内，若没有同名牌被使用过，你获得一张非伤害牌；2.下一回合内，当同名牌首次被使用后，你获得一张伤害牌；3.令一名其他角色弃置两张牌，若点数之和大于10，你对其造成1点火焰伤害。',
			dc_wangyun:'新杀王允',
			dc_wangyun_prefix:'新杀',
			dclianji:'连计',
			dclianji_info:'出牌阶段限一次。你可以弃置一张手牌并选择一名其他角色，其随机使用牌堆中的一张武器牌，然后其选择一项：1.对另一名其他角色使用一张【杀】，并将武器牌交给其中一个目标；2.令你视为对其使用一张【杀】，并将武器牌交给你。',
			dcmoucheng:'谋逞',
			dcmoucheng_info:'觉醒技。准备阶段，若你发动过〖连计〗且两个选项均被选择过，你失去〖连计〗，然后获得〖矜功〗。',
			xuelingyun:'薛灵芸',
			dcxialei:'霞泪',
			dcxialei_info:'当你的红色牌进入弃牌堆后，或当你使用或打出的红色牌经由处理区进入弃牌堆后，你可以观看牌堆顶的三张牌，获得其中的一张牌，且可以将其余牌置于牌堆底。然后你本回合以此法观看的牌数-1。',
			dcanzhi:'暗织',
			dcanzhi_info:'出牌阶段或当你受到伤害后，你可以判定，若结果为红色，你重置〖霞泪〗的观看牌数；若结果为黑色，〖暗织〗于本回合失效，然后你可以令一名非当前回合角色获得本回合进入弃牌堆的两张牌。',
			yanghong:'杨弘',
			dcjianji:'间计',
			dcjianji_info:'出牌阶段限一次。你可以令至多X名座位连续的角色依次弃置一张牌。然后其中手牌数最多的角色可以视为对一名其他以此法弃置过牌的角色使用一张【杀】（X为你的攻击范围）。',
			dcyuanmo:'远谟',
			dcyuanmo_info:'①准备阶段或当你受到伤害后，你可以选择一项：1.攻击范围+1，然后若你攻击范围内的角色数因此增加，你可以获得任意名本次进入你攻击范围的角色各一张牌；2.攻击范围-1，然后摸两张牌。②结束阶段，若你的攻击范围内没有角色，你可以令你的攻击范围+1。',
			dc_yangbiao:'杨彪',
			dczhaohan:'昭汉',
			dczhaohan_info:'摸牌阶段，你可以多摸两张牌，然后你于得到牌后选择一项：1.将两张手牌交给一名没有手牌的角色；2.弃置两张手牌。',
			dcjinjie:'尽节',
			dcjinjie_info:'当一名角色进入濒死状态时，若你本轮：进行过回合，你可以令其摸一张牌；未进行过回合，你可以弃置X张手牌令其回复1点体力（X为本轮你发动过〖尽节〗的次数）。',
			dcjue:'举讹',
			dcjue_info:'准备阶段，你可以视为对一名未受伤的角色使用一张【杀】。',
			dc_tengfanglan:'滕芳兰',
			dcluochong:'落宠',
			dcluochong_info:'一轮游戏开始时，你可以弃置任意名角色区域里的共计至多[4]张牌，然后若你以此法弃置了一名角色的至少三张牌，则你方括号内的数字-1。',
			dcaichen:'哀尘',
			dcaichen_info:'锁定技。若牌堆剩余数：大于80，当你因〖落宠〗弃置你区域内的牌后，你摸两张牌；大于40，你跳过弃牌阶段；小于40，你不能响应♠牌。',
			xielingyu:'谢灵毓',
			dcyuandi:'元嫡',
			dcyuandi_info:'当其他角色于其出牌阶段使用第一张牌时，若此牌仅指定其为目标，你可以选择一项：1.弃置其一张手牌；2.你与其各摸一张牌。',
			dcxinyou:'心幽',
			dcxinyou_info:'出牌阶段限一次。你可以将体力回复至上限并将手牌补至体力上限。若你以此法：获得了至少两张牌，你于结束阶段失去1点体力；回复了体力，你于结束阶段弃置两张牌。',
			zerong:'笮融',
			dccansi:'残肆',
			dccansi_info:'锁定技。准备阶段，你回复1点体力，然后选择一名其他角色，其回复1点体力，你视为对其依次使用以下能使用的牌：【杀】（无距离限制）、【决斗】、【火攻】。当其以此法受到1点伤害后，你摸两张牌。',
			dcfozong:'佛宗',
			dcfozong_info:'锁定技。出牌阶段开始时，若你的手牌数大于7，你将X张手牌置于武将牌上（X为你的手牌数-7）。然后若你的武将牌上有至少七张牌，其他角色依次选择一项：1.获得其中的一张牌并令你回复1点体力；2.令你失去1点体力。',
			dc_ruiji:'芮姬',
			dcwangyuan:'妄缘',
			dcwangyuan_info:'当你于回合外失去牌后，或于回合内发动〖俐影〗后，你可以随机将牌堆里的一张与你所有“妄”牌名均不同的基本牌或锦囊牌置于武将牌上，称为“妄”（不超过游戏人数）。',
			dclingyin:'铃音',
			// dclingyin_info:'出牌阶段开始时，你可以获得至多X张“妄”（X为游戏轮数）然后若你的“妄”颜色均相同，你于本回合对其他角色造成的伤害+1，且可以将一张武器牌或防具牌当【决斗】使用。',
			dclingyin_info:'出牌阶段开始时，你可以选择至多X张“妄”（X为游戏轮数），若这些牌以外的“妄”中不存在颜色不同的牌，则你于本回合对其他角色造成的伤害+1，且可以将一张武器牌或防具牌当【决斗】使用。你获得这些牌。',
			dcliying:'俐影',
			dcliying_info:'每回合限一次。当你于摸牌阶段外得到牌后，你可以将这些牌中的任意张交给一名其他角色，然后摸一张牌。',
			huanfan:'桓范',
			dcjianzheng:'谏诤',
			dcjianzheng_info:'出牌阶段限一次。你可以观看一名其他角色的手牌，然后若其中有你可以使用的手牌，你获得并使用其中一张。若你以此法使用牌指定了其为目标，你令你与其横置，然后其观看你的手牌。',
			dcfumou:'腹谋',
			dcfumou_info:'当你受到伤害后，你可以令至多X名角色从你开始逆时针依次选择一项：1.移动场上的一张牌；2.弃置所有手牌并摸两张牌；3.弃置装备区里的所有牌并回复1点体力（X为你已损失的体力值）。',
			chentai:'陈泰',
			dcctjiuxian:'救陷',
			dcctjiuxian_info:'出牌阶段限一次。你可以重铸一半数量的手牌（向上取整），然后视为使用一张【决斗】。当此牌对目标角色造成伤害后，你可以令其攻击范围内的一名其他角色回复1点体力。',
			dcchenyong:'沉勇',
			dcchenyong_info:'结束阶段，你可以摸X张牌（X为本回合你使用过的牌的类型数）。',
			sunyu:'孙瑜',
			dcquanshou:'劝守',
			dcquanshou_info:'一名角色的回合开始时，若其手牌数小于其体力上限，你可以令其选择一项：1.将手牌摸至体力上限，然后本回合使用【杀】的次数上限-1（至多摸五张）；2.其本回合使用牌被抵消后，你摸一张牌。',
			dcshexue:'设学',
			dcshexue_info:'①出牌阶段开始时，你可以将一张牌当做于上回合的角色于其出牌阶段内使用的最后一张基本牌或普通锦囊牌使用。②出牌阶段结束时，你可以令下回合的角色于其出牌阶段开始时可以将一张牌当做你于此阶段内使用的最后一张基本牌或普通锦囊牌使用。',
			xizheng:'郤正',
			dcdanyi:'耽意',
			dcdanyi_info:'当你使用牌指定第一个目标后，若此牌的目标与你使用的上一张牌目标相同，你可以摸X张牌（X为此牌目标数）。',
			dcwencan:'文灿',
			dcwencan_info:'出牌阶段限一次。你可以选择至多两名体力值不同且均与你的体力值不同的角色，这些角色依次选择一项：1.弃置两张花色不同的牌；2.本回合你对其使用牌无次数限制。',
			zhangjinyun:'张瑾云',
			dchuizhi:'蕙质',
			dchuizhi_info:'准备阶段，你可以选择是否弃置任意张手牌，然后将手牌摸至与全场手牌数最多的角色相同（至少摸一张，至多摸五张）。',
			dcjijiao:'继椒',
			dcjijiao_info:'限定技。出牌阶段，你可以令一名角色获得所有弃牌堆中你于本局游戏内使用或弃置过的普通锦囊牌，且这些牌不能被【无懈可击】响应。一名角色的回合结束后，若本回合牌堆洗过牌或有角色死亡，你重置〖继椒〗。',
			duanqiaoxiao:'段巧笑',
			dccaizhuang:'彩妆',
			dccaizhuang_info:'出牌阶段限一次。你可以弃置任意张花色各不相同的牌。然后若你手牌中的花色数小于你以此法弃置的牌数，你摸一张牌并重复此流程。',
			dchuayi:'华衣',
			dchuayi_info:'结束阶段，你可以判定，然后你获得如下效果直到你下回合开始时：红色，其他角色回合结束时，你摸一张牌；黑色，当你受到伤害后，你摸两张牌。',
			wu_zhugeliang:'武诸葛亮',
			wu_zhugeliang_prefix:'武',
			dcjincui:'尽瘁',
			dcjincui_info:'锁定技。①游戏开始时，你将手牌摸至七张。②准备阶段，你将体力值回复或失去至等同于牌堆中点数为7的牌数（你的体力值最低因此调整至1）。然后你观看牌堆顶X张牌，将这些牌以任意顺序置于牌堆顶或牌堆底（X为你的体力值）。',
			dcqingshi:'情势',
			dcqingshi_info:'当你于出牌阶段使用牌时，若你手牌中有同名牌且你本回合未因此牌名的牌发动过该技能，你可以选择一项：1.令此牌对其中一个目标角色造成的伤害+1；2.令任意名其他角色各摸一张牌；3.摸三张牌，然后〖情势〗于本回合无效。',
			dczhizhe:'智哲',
			dczhizhe_clear:'invisible',
			dczhizhe_info:'限定技。出牌阶段，你可以选择一张手牌并复制之。当你使用或打出此复制牌结算结束后，你获得之，然后你本回合不能再使用或打出此牌。',
			ruanji:'阮籍',
			dczhaowen:'昭文',
			dczhaowen_tag:'昭文',
			dczhaowen_info:'出牌阶段开始时，你可以展示所有手牌。然后你于本回合获得如下效果：1.你可以将其中一张黑色牌当做任意一张普通锦囊牌使用（每回合每种牌名限一次）；2.当你使用其中的一张红色牌时，你摸一张牌。',
			dcjiudun:'酒遁',
			dcjiudun_info:'①以你为目标的【酒】（使用方法①）的作用效果改为“目标对应的角色使用的下一张【杀】的伤害基数+1”。②当你成为其他角色使用黑色牌的目标后，若你：未处于【酒】状态，你可以摸一张牌并视为使用一张【酒】；处于【酒】状态，你可以弃置一张手牌令此牌对你无效。',
			ganfurenmifuren:'甘夫人糜夫人',
			dcchanjuan:'婵娟',
			dcchanjuan_info:'每种牌名限一次。当你使用仅指定单一目标的【杀】或普通锦囊牌结算结束后，你可以视为使用一张名称和属性均相同的牌。若这两张牌指定的目标完全相同，你摸一张牌。',
			dcxunbie:'殉别',
			dcxunbie_info:'限定技。当你进入濒死状态时，你可以将此武将牌替换为“甘夫人”或“糜夫人”（不能选择已在场上的武将）。然后回复至1点体力并防止所有伤害直到当前回合结束。',
			dc_mifuren:'糜夫人',
			dcguixiu:'闺秀',
			dcguixiu_info:'锁定技。①回合开始时，若你于本局游戏未发动过〖闺秀①〗，你摸两张牌。②当你发动〖存嗣〗后，你回复1点体力。',
			dccunsi:'存嗣',
			dccunsi_info:'限定技。出牌阶段，你可以令一名角色获得〖勇决〗。若该角色不为你，你摸两张牌。',
			dcyongjue:'勇决',
			dcyongjue_info:'当你于出牌阶段使用第一张【杀】时，你可以选择一项：1.令此【杀】不计入次数；2.获得此牌。',
			dc_ganfuren:'甘夫人',
			dcshushen:'淑慎',
			dcshushen_info:'当你回复1点体力后，你可以选择一名其他角色并选择一项：1.令其回复1点体力；2.你与其各摸一张牌。',
			dcshenzhi:'神智',
			dcshenzhi_info:'准备阶段，若你的手牌数大于体力值，你可以弃置一张手牌，然后回复1点体力。',
			dc_duyu:'杜预',
			dcjianguo:'谏国',
			dcjianguo_info:'出牌阶段限一次。你可以选择一名角色并选择一项：1.令其摸一张牌，然后其弃置一半的手牌；2.令其弃置一张牌，然后其摸等同于手牌数一半的牌（均向下取整）。',
			dcdyqingshi:'倾势',
			dcdyqingshi_info:'当你于回合内使用【杀】或普通锦囊牌指定第一个目标后，若目标角色包括其他角色且此牌为你本回合使用的第X张牌，你可以对其中一名不为你的目标角色造成1点伤害（X为你的手牌数）。',
			sunlingluan:'孙翎鸾',
			dclingyue:'聆乐',
			dclingyue_info:'锁定技。一名角色于一轮内首次造成伤害后，你摸一张牌。若此时是该角色回合外，则改为摸X张牌（X为本回合全场造成的伤害值）。',
			dcpandi:'盻睇',
			dcpandi_info:'出牌阶段，你可以选择一名本回合内未造成过伤害的角色。你本阶段内使用的下一张牌改为以该角色为基准判断使用目标合法性，且使用者改为该角色。',
			zhoubuyi:'周不疑',
			dcshiji:'十计',
			dcshiji_info:'一名角色的结束阶段，若其本回合未造成过伤害，你可以声明一种本轮未以此法声明过的普通锦囊牌，然后其可以将一张牌当你声明的牌使用（其不是此牌的合法目标）。',
			dcsilun:'四论',
			dcsilun_info:'准备阶段或当你受到伤害后，你可以摸四张牌，然后将四张牌依次置于场上或牌堆两端（对所有角色可见）。装备区牌数因此变化的角色复原其武将牌。',
			dc_wangjun:'王濬',
			dcmianyao:'免徭',
			dcmianyao_info:'摸牌阶段结束时，你可以展示手牌中点数最小的一张牌并将此牌随机插入牌堆中。然后你于此回合结束时摸等同于此牌点数的牌。',
			dcchangqu:'长驱',
			dcchangqu_info:'出牌阶段限一次。你可以开一艘战舰（你从你的上家或下家开始选择任意名座位连续的其他角色，且起点角色获得“战舰”标记）。这些角色按照你选择的顺序依次执行：{若其有本次获得的“战舰”，其选择一项：1.交给你X张手牌，然后将“战舰”移动给你选择的下一名目标角色；2.令其下次受到的属性伤害值+X，然后横置（X为本次〖长驱〗中选项一被选择过的次数且至少为1）。}。',
			dctongye:'统业',
			dctongye_info:'锁定技。游戏开始时或一名角色死亡后，若场上势力数：不大于4，你的手牌上限+3；不大于3，你的攻击范围+3；不大于2，你使用【杀】的次数上限+3；不大于1，你摸牌阶段额定摸牌数+3。',
			tianshangyi:'田尚衣',
			dcposuo:'婆娑',
			dcposuo_info:'出牌阶段，若你本阶段未造成过伤害，则你可以将一张你本阶段未以此法使用过的花色的手牌当作任意一张存在于游戏的同花色伤害牌使用。',
			dcxiaoren:'绡刃',
			dcxiaoren_info:'每回合限一次，当你造成伤害后，你可以进行判定，若结果为：红色，你可以令一名角色回复1点体力；黑色，你可以对受伤角色的上家或下家造成1点伤害，然后你可以重复此方向的伤害流程直到有角色因此死亡或下个目标角色为你。',
			dc_daxiaoqiao:'新杀大乔小乔',
			dc_daxiaoqiao_prefix:'新杀',
			dcxingwu:'星舞',
			dcxingwu_info:'弃牌阶段开始时，你可以将一张手牌置于武将牌上，称为“星舞”。若你的“星舞”牌达到三张，则你可移去三张“星舞”，弃置一名其他角色装备区里的所有牌，然后对其造成X点伤害（X为移去的“星舞”牌的花色数，若为女性角色则改为1点伤害）。',
			dcluoyan:'落雁',
			dcluoyan_info:'锁定技，若你有“星舞”牌，你视为拥有技能〖天香〗和〖流离〗。',
			dc_xiahouba:'新杀夏侯霸',
			dc_xiahouba_prefix:'新杀',
			old_huangfusong:'新杀皇甫嵩',
			old_huangfusong_prefix:'新杀',
			dc_sp_machao:'群马超',
			dc_sp_machao_prefix:'群',
			dc_shixie:'新杀士燮',
			dc_shixie_prefix:'新杀',
			ol_guansuo:'新杀关索',
			ol_guansuo_prefix:'新杀',
			dc_zhaoxiang:'新杀赵襄',
			dc_zhaoxiang_prefix:'新杀',
			dc_xujing:'许靖',
			dcshangyu:'赏誉',
			dcshangyu_tag:'赏誉',
			dcshangyu_info:'锁定技。游戏开始时，你获得一张【杀】并记录之，并可以将此牌交给一名角色。然后你获得如下效果：1.当一名角色使用此牌造成伤害后，你与其各摸一张牌；2.当此牌进入弃牌堆后，你将此牌交给一名本回合未以此法得到过此牌的角色。',
			dccaixia:'才瑕',
			dccaixia_info:'当你造成或受到伤害后，若你没有“瑕”，你可以摸至多X张牌并获得X枚“瑕”，然后当你使用牌时，移去1枚“瑕”（X为本局游戏总角色数且至多为5）。',
			wu_luxun:'武陆逊',
			wu_luxun_prefix:'武',
			dcxiongmu:'雄幕',
			dcxiongmu_tag:'雄幕',
			dcxiongmu_info:'①一轮游戏开始时，你可以将手牌摸至体力上限（若手牌数不小于体力上限则跳过），然后将任意张牌随机置入牌堆，从牌堆或弃牌堆中获得等量的点数为8的牌，且这些牌不计入手牌上限。②当你于一回合首次受到伤害时，若你的手牌数不大于你的体力值，此伤害-1。',
			dczhangcai:'彰才',
			dczhangcai_info:'当你使用或打出点数为8的牌时，你可以摸X张牌（X为你手牌区里点数为8的牌数且至少为1）。',
			dcruxian:'儒贤',
			dcruxian_info:'限定技。出牌阶段，你可以令你〖彰才〗的点数限制取消，且摸牌数改为等同于你手牌区内与此牌点数相同的牌数且至少为1，直到你的下回合开始。',
			
			sp2_yinyu:'隐山之玉',
			sp2_huben:'百战虎贲',
			sp2_shengun:'奇人异士',
			sp2_huangjia:'皇家贵胄',
			sp2_zhangtai:'章台春望',
			sp2_jinse:'锦瑟良缘',
			sp2_bizhe:'笔舌如椽',
			sp2_wangzhe:'往者可荐',
			sp2_doukou:'豆蔻梢头',
			sp2_jichu:'计将安出',
			sp2_yuxiu:'钟灵毓秀',
			sp2_wumiao:'武庙',
			sp2_gaoshan:'高山仰止',
			sp2_qifu:'祈福',
		},
	};
});
