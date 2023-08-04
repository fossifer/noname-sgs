'use strict';
game.import('character',function(lib,game,ui,get,ai,_status){
	return {
		name:'huicui',
		connect:true,
		character:{
			dc_wuban:['male','shu',4,['dcyouzhan'],['clan:陈留吴氏','unseen']],
			yue_caiwenji:['female','qun',3,['dcshuangjia','dcbeifen']],
			liuchongluojun:['male','qun',3,['dcminze','dcjini']],
			yuechen:['male','wei',4,['dcporui','dcgonghu'],['unseen']],
			zhangkai:['male','qun',4,['dcxiangshu']],
			gaoxiang:['male','shu',4,['dcchiying'],['unseen']],
			yuanyin:['male','qun',3,['dcmoshou','dcyunjiu'],['unseen']],
			dongwan:['female','qun',3,['dcshengdu','dcxianjiao'],['unseen']],
			zhangchu:['female','qun',3,['dcjizhong','dcrihui','dcguangshi']],
			peiyuanshao:['male','qun',4,['dcmoyu'],['unseen']],
			mengjie:['male','qun',3,['dcyinlu','dcyouqi']],
			dc_huojun:['male','shu',4,['dcgue','dcsigong']],
			dc_sunhanhua:['female','wu',3,['dchuiling','dcchongxu']],
			dc_sunziliufang:['male','wei',3,['dcqinshen','dcweidang']],
			yuantanyuanxiyuanshang:['male','qun',4,['dcneifa']],
			qiaorui:['male','qun',4,['dcaishou','dcsaowei']],
			xianglang:['male','shu',3,['dckanji','dcqianzheng']],
			qinlang:['male','wei',4,['dchaochong','dcjinjin']],
			furongfuqian:['male','shu','4/6',['dcxuewei','dcyuguan']],
			zhenghun:['male','wei',3,['dcqiangzhi','dcpitian']],
			dc_zhaotongzhaoguang:['male','shu',4,['yizan_use','dcqingren','dclongyuan']],
			dc_huanghao:['male','shu',3,['dcqinqing','huisheng','dccunwei']],
			liupi:['male','qun',4,['dcjuying']],
			dc_sp_jiaxu:['male','wei',3,['zhenlue','dcjianshu','dcyongdi']],
			leibo:['male','qun',4,['dcsilve','dcshuaijie']],
			gongsundu:['male','qun',4,['dczhenze','dcanliao']],
			panghui:['male','wei',5,['dcyiyong']],
			dc_yuejiu:['male','qun',4,['dccuijin']],
			chenjiao:['male','wei',3,['dcxieshou','dcqingyan','dcqizi']],
			wanglie:['male','qun',3,['dcchongwang','dchuagui']],
			chengui:['male','qun',3,['dcyingtu','dccongshi']],
			dc_huangquan:['male','shu',3,['dcquanjian','dctujue']],
			yinfuren:['female','wei',3,['dcyingyu','dcyongbi']],
			dc_lvkuanglvxiang:['male','wei',4,['dcshuhe','dcliehou']],
			guanhai:['male','qun',4,['suoliang','qinbao']],
			huzhao:['male','qun',3,['midu','xianwang']],
			dc_liuba:['male','shu',3,['dczhubi','dcliuzhuan']],
			zhangxun:['male','qun',4,['suizheng']],
			zongyu:['male','shu',3,['zyqiao','chengshang']],
			dc_jiling:['male','qun',4,['dcshuangren']],
			dc_yanghu:['male','wei',3,['dcdeshao','dcmingfa']],
			caimaozhangyun:['male','wei',4,['lianzhou','jinglan']],
			tenggongzhu:['female','wu',3,['xingchong','liunian']],
			dc_huangchengyan:['male','qun',3,['dcjiezhen','dczecai','dcyinshi']],
			dc_gaolan:['male','qun',4,['xizhen']],
			guanning:['male','qun','3/7',['dunshi']],
			dc_jiben:['male','qun',3,['xunli','zhishi','lieyi']],
			mamidi:['male','qun','4/6',['bingjie','zhengding']],
			re_dengzhi:['male','shu',3,['jianliang','weimeng']],
			fengxi:['male','wu',3,['yusui','boyan']],
			re_miheng:['male','qun',3,['rekuangcai','reshejian']],
			re_chendeng:['male','qun',3,['refuyuan','reyingshui','rewangzu']],
			wanniangongzhu:['female','qun',3,['zhenge','xinghan']],
			re_xunchen:['male','qun',3,['refenglve','anyong'],['clan:颍川荀氏']],
			re_kanze:['male','wu',3,['xiashu','rekuanshi']],
			lvlingqi:['female','qun',4,['guowu','zhuangrong']],
			zhanghu:['male','wei',4,['cuijian','zhtongyuan']],
			luyusheng:['female','wu',3,['zhente','zhiwei']],
			huaxin:['male','wei',3,['spwanggui','xibing']],
			mengyou:['male','qun',5,['hmmanyi','dcmanzhi'],['unseen']],
			liuyong:['male','shu',3,['zhuning','fengxiang']],
			dc_sunru:['female','wu',3,['xiecui','youxu']],
			xiahoulingnv:['female','wei',4,['fuping','weilie']],
			zhangyao:['female','wu',3,['yuanyu','xiyan']],
			tengyin:['male','wu',3,['chenjian','xixiu']],
			zhangxuan:['female','wu',4,['tongli','shezang']],
			wangtao:['female','shu',3,['huguan','yaopei']],
			wangyue:['female','shu',3,['huguan','mingluan']],
			zhaoyan:['female','wu',3,['jinhui','qingman']],
			heyan:['male','wei',3,['yachai','qingtan']],
			re_sunluyu:['female','wu',3,['remeibu','remumu']],
			re_dongbai:['female','qun',3,['relianzhu','rexiahui']],
			zhoushan:['male','wu',4,['dcmiyun','dcdanying']],
			dc_caiyang:['male','wei',4,['dcxunji','dcjiaofeng']],
			xiahoujie:['male','wei',5,['liedan','zhuangdan']],
			caoxing:['male','qun',4,['cxliushi','zhanwan']],
			re_chunyuqiong:['male','qun',4,['recangchu','reliangying','reshishou']],
			xingdaorong:['male','qun','4/6',['xuxie']],
			re_panfeng:['male','qun',4,['xinkuangfu']],
		},
		characterSort:{
			huicui:{
				sp_baigei:['re_panfeng','xingdaorong','caoxing','re_chunyuqiong','xiahoujie','dc_caiyang','zhoushan'],
				sp_caizijiaren:['re_dongbai','re_sunluyu','heyan','zhaoyan','wangtao','wangyue','zhangxuan','tengyin','zhangyao','xiahoulingnv','dc_sunru'],
				sp_zhilan:['liuyong','wanniangongzhu','zhanghu','lvlingqi','tenggongzhu','panghui','dc_zhaotongzhaoguang','yuantanyuanxiyuanshang','yuechen'],
				sp_guixin:['re_kanze','re_chendeng','caimaozhangyun','dc_lvkuanglvxiang','dc_gaolan','yinfuren','chengui','chenjiao','dc_sp_jiaxu','qinlang'],
				sp_daihan:['mamidi','dc_jiling','zhangxun','dc_yuejiu','wanglie','leibo','qiaorui','dongwan','yuanyin'],
				sp_jianghu:['guanning','huzhao','dc_huangchengyan','mengjie'],
				sp_zongheng:['huaxin','luyusheng','re_xunchen','re_miheng','fengxi','re_dengzhi','dc_yanghu','zongyu'],
				sp_taiping:['guanhai','liupi','peiyuanshao','zhangchu','zhangkai'],
				sp_yanhan:['dc_liuba','dc_huangquan','furongfuqian','xianglang','dc_huojun','gaoxiang','dc_wuban'],
				sp_jishi:['dc_jiben','zhenghun','dc_sunhanhua','liuchongluojun'],
				sp_raoting:['dc_huanghao','dc_sunziliufang','dc_sunchen'],
				sp_yijun:['gongsundu','mengyou'],
				sp_zhengyin:['yue_caiwenji'],
			}
		},
		skill:{
			//吴班
			dcyouzhan:{
				audio:2,
				trigger:{
					global:['loseAfter','equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
				},
				forced:true,
				filter:function(event,player){
					if(player!=_status.currentPhase) return false;
					return game.hasPlayer(current=>{
						if(current==player) return false;
						var evt=event.getl(current);
						return evt&&evt.cards2.length;
					});
				},
				content:function(){
					'step 0'
					var targets=game.filterPlayer(current=>{
						if(current==player) return false;
						var evt=trigger.getl(current);
						return evt&&evt.cards2.length;
					});
					event.targets=targets;
					player.logSkill('dcyouzhan',targets);
					'step 1'
					var target=targets.shift();
					player.draw();
					target.addTempSkill('dcyouzhan_effect');
					target.addMark('dcyouzhan_effect',1,false);
					target.addTempSkill('dcyouzhan_draw');
					if(targets.length){
						event.redo();
					}
				},
				subSkill:{
					effect:{
						trigger:{
							player:'damageBegin3',
						},
						filter:function(event,player){
							return player.hasMark('dcyouzhan_effect');
						},
						forced:true,
						charlotte:true,
						onremove:true,
						content:function(){
							'step 0'
							trigger.num+=player.countMark('dcyouzhan_effect');
							player.removeSkill('dcyouzhan_effect');
						},
						mark:true,
						intro:{
							content:'本回合下一次受到的伤害+#',
						},
						ai:{
							damageBonus:true,
							effect:{
								target:function(card,player,target){
									if(get.tag(card,'damage')) return 1+0.5*target.countMark('dcyouzhan_effect');
								}
							}
						}
					},
					draw:{
						trigger:{
							global:'phaseJieshuBegin',
						},
						forced:true,
						charlotte:true,
						filter:function(event,player){
							return !player.getHistory('damage').length;
						},
						content:function(){
							player.draw(player.getHistory('lose').length);
						},
					},
				}
			},
			//乐蔡文姬
			dcshuangjia:{
				audio:2,
				trigger:{
					global:'phaseBefore',
					player:'enterGame'
				},
				forced:true,
				filter:function(event,player){
					return (event.name!='phase'||game.phaseNumber==0);
				},
				content:function(){
					'step 0'
					var cards=player.getCards('h');
					player.addGaintag(cards,'dcshuangjia_tag');
				},
				mod:{
					ignoredHandcard:function(card,player){
						if(card.hasGaintag('dcshuangjia_tag')){
							return true;
						}
					},
					cardDiscardable:function(card,player,name){
						if(name=='phaseDiscard'&&card.hasGaintag('dcshuangjia_tag')){
							return false;
						}
					},
					globalTo:function(from,to,distance){
						return distance+Math.min(5,to.countCards('h',card=>card.hasGaintag('dcshuangjia_tag')));
					}
				},
			},
			dcbeifen:{
				audio:2,
				trigger:{
					player:['loseAfter'],
					global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
				},
				filter:function(event,player){
					var evt=event.getl(player);
					if(!evt||!evt.hs||!evt.hs.length) return false;
					if(event.name=='lose'){
						for(var i in event.gaintag_map){
							if(event.gaintag_map[i].contains('dcshuangjia_tag')) return true;
						}
						return false;
					}
					return player.hasHistory('lose',evt=>{
						if(event!=evt.getParent()) return false;
						for(var i in evt.gaintag_map){
							if(evt.gaintag_map[i].contains('dcshuangjia_tag')) return true;
						}
						return false;
					});
				},
				forced:true,
				content:function(){
					var suits=lib.suit.slice();
					player.countCards('h',card=>{
						if(!card.hasGaintag('dcshuangjia_tag')) return false;
						suits.remove(get.suit(card));
					});
					var cards=[];
					while(suits.length){
						var suit=suits.shift();
						var card=get.cardPile(cardx=>{
							return get.suit(cardx,false)==suit;
						});
						if(card) cards.push(card);
					}
					if(cards.length){
						player.gain(cards,'gain2');
					}
				},
				mod:{
					cardUsable:function(card,player){
						var len=player.countCards('h');
						var cnt=player.countCards('h',card=>card.hasGaintag('dcshuangjia_tag'));
						if(2*cnt<len) return Infinity;
					},
					targetInRange:function(card,player){
						var len=player.countCards('h');
						var cnt=player.countCards('h',card=>card.hasGaintag('dcshuangjia_tag'));
						if(2*cnt<len) return true;
					},
					aiOrder:function(player,card,num){
						if(get.itemtype(card)=='card'&&card.hasGaintag('dcshuangjia_tag')){
							var suits=lib.suit.slice();
							player.countCards('h',cardx=>{
								if(!cardx.hasGaintag('dcshuangjia_tag')) return false;
								if(card==cardx) return false;
								suits.remove(get.suit(cardx));
							});
							if(suits.length) return num+suits.length*2.5;
						}
					},
				},
			},
			//孟优
			dcmanzhi:{
				audio:2,
				trigger:{player:['phaseZhunbeiBegin','phaseJieshuBegin']},
				filter:function(event,player){
					if(event.name=='phaseJieshu'){
						var del=0;
						game.getGlobalHistory('changeHp',evt=>{
							if(evt.player!=player) return;
							for(var phase of lib.phaseName){
								var evtx=evt.getParent(phase);
								if(evtx&&evtx.name==phase) del+=evt.num;
							}
						});
						if(del!=0) return false;
					}
					return game.hasPlayer(current=>{
						if(current==player) return false;
						return !player.hasSkill('dcmanzhi_1')&&current.countCards('he')||!player.hasSkill('dcmanzhi_2')&&current.countCards('hej');
					})
				},
				direct:true,
				content:function(){
					'step 0'
					if(_status.connectMode) game.broadcastAll(function(){_status.noclearcountdown=true});
					player.chooseTarget(get.prompt2('dcmanzhi'),(card,player,target)=>{
						if(player==target) return false;
						return !player.hasSkill('dcmanzhi_1')&&target.countCards('he')||!player.hasSkill('dcmanzhi_2')&&target.countCards('hej');
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						var choices=[];
						var choiceList=[
							'令其交给你两张牌，然后其视为使用一张无距离限制的【杀】',
							'你获得其区域内的至多两张牌，然后交给其等量的牌并摸一张牌'
						];
						var chosen=[player.hasSkill('dcmanzhi_1'),player.hasSkill('dcmanzhi_2')];
						if(target.countCards('he')&&(!chosen[0]||trigger.name=='phaseZhunbei')) choices.push('选项一');
						else choiceList[0]='<span style="opacity:0.5">'+choiceList[0]+(chosen[0]?'（已被选择过）':'')+'</span>';
						if(target.countCards('hej')&&(!chosen[1]||trigger.name=='phaseZhunbei')) choices.push('选项二');
						else choiceList[1]='<span style="opacity:0.5">'+choiceList[1]+(chosen[1]?'（已被选择过）':'')+'</span>';
						if(trigger.name=='phaseJieshu') choices.push('cancel2');
						player.chooseControl(choices).set('choiceList',choiceList).set('ai',()=>{
							return _status.event.choice;
						}).set('choice',function(){
							if(target.getUseValue({name:'sha'},false)>5&&!player.hasShan()&&trigger.name=='phaseZhunbei') return 1;
							return 0;
						}()).set('prompt','蛮智：请选择一项');
					}
					else{
						if(_status.connectMode){game.broadcastAll(function(){delete _status.noclearcountdown;game.stopCountChoose()});}
						event.finish();
					}
					'step 2'
					if(_status.connectMode){game.broadcastAll(function(){delete _status.noclearcountdown;game.stopCountChoose()});}
					if(result.control=='cancel2'){event.finish();return;}
					player.logSkill('dcmanzhi',target);
					if(result.control=='选项一'){
						player.addTempSkill('dcmanzhi_1');
						target.chooseCard(2,'he','蛮智：请交给'+get.translation(player)+'两张牌');
					}
					else{
						player.addTempSkill('dcmanzhi_2');
						player.gainPlayerCard(target,'hej',[1,2],true);
						event.goto(5);
					}
					'step 3'
					if(result.bool){
						target.give(result.cards,player);
					}
					else event.finish();
					'step 4'
					target.chooseUseTarget('sha',true,'nodistance');
					event.finish();
					'step 5'
					if(result.bool&&target.isIn()){
						var num=result.cards.length,hs=player.getCards('he');
						if(!hs.length) event.finish();
						else if(hs.length<num) event._result={bool:true,cards:hs};
						else player.chooseCard('he',true,num,'交给'+get.translation(target)+get.cnNumber(num)+'张牌');
					}
					else event.finish();
					'step 6'
					if(result.bool){
						player.give(result.cards,target);
						player.draw();
					}
				},
				subSkill:{
					1:{charlotte:true},
					2:{charlotte:true},
				}
			},
			//孙綝
			dczigu:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterCard:true,
				position:'he',
				selectCard:1,
				check:function(card){
					var player=_status.event.player;
					if(!player.hasSkill('dczuowei')) return 6-get.value(card);
					if(player.countCards('h')==player.countCards('e')+1&&!player.hasCard(card=>player.hasValueTarget(card),'h')){
						if(get.position(card)=='e') return 0;
						return 8-get.value(card);
					}
					return 6-get.value(card);
				},
				content:function(){
					'step 0'
					var targets=game.filterPlayer(current=>{
						return current.countGainableCards(player,'e');
					});
					if(targets.length==0) event._result={bool:false};
					else if(targets.length==1) event._result={bool:true,targets:targets};
					else player.chooseTarget('自固：获得一名角色装备区里的一张牌',true,(card,player,target)=>{
						return target.countGainableCards(player,'e');
					}).set('ai',target=>{
						if(target==_status.event.player) return 10;
						if(get.attitude(_status.event.player,target)<0){
							if(target.hasCard(card=>{
								return get.value(card,player)>=6;
							})) return 12;
							return 8;
						}
						return 0;
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.gainPlayerCard('e',target,true);
					}
					'step 2'
					if(!result.bool||target==player||!result.cards||!result.cards.some(i=>get.owner(i)==player)) player.draw();
				},
				ai:{
					order:function(item,player){
						if(!player.hasSkill('dczuowei')) return 9;
						if(player.countCards('h')==player.countCards('e')+1&&!player.hasCard(card=>player.hasValueTarget(card),'h')) return 9;
						return 1;
					},
					result:{
						player:1
					}
				}
			},
			dczuowei:{
				audio:2,
				trigger:{player:'useCard'},
				filter:function(event,player){
					return !player.hasSkill('dczuowei_ban')&&_status.currentPhase==player;
				},
				direct:true,
				locked:false,
				content:function(){
					'step 0'
					var hs=player.countCards('h');
					var es=Math.max(1,player.countCards('e'));
					var sign=Math.sign(hs-es);
					event.sign=sign;
					if(sign>0) player.chooseBool(get.prompt('dczuowei'),'令'+get.translation(trigger.card)+'不可被响应').set('ai',()=>1);
					else if(sign==0) player.chooseTarget(get.prompt('dczuowei'),'对一名其他角色造成1点伤害',lib.filter.notMe).set('ai',target=>{
							return get.damageEffect(target,_status.event.player,_status.event.player);
						});
					else player.chooseBool(get.prompt('dczuowei'),'摸两张牌，然后此技能于本回合失效').set('ai',()=>1);
					'step 1'
					if(!result.bool) event.finish()
					else if(event.sign<=0&&!event.isMine()&&!event.isOnline()) game.delayx();
					'step 2'
					var sign=event.sign;
					if(sign>0){
						player.logSkill('dczuowei');
						trigger.directHit.addArray(game.players);
						event.finish();
					}
					else if(sign==0){
						var target=result.targets[0];
						player.logSkill('dczuowei',target);
						target.damage();
					}
					else{
						player.logSkill('dczuowei');
						player.draw(2);
						player.addTempSkill('dczuowei_ban');
					}
				},
				subSkill:{
					ban:{charlotte:true}
				},
				mod:{
					aiOrder:function(player,card,num){
						if(player.hasSkill('dczuowei_ban')||_status.currentPhase!=player) return;
						var cardsh=[],cardse=[];
						if(Array.isArray(card.cards)){
							cardsh.addArray(card.cards.filter(i=>get.position(i)=='h'));
							cardse.addArray(card.cards.filter(i=>get.position(i)=='e'));
						}
						if(_status.currentPhase==player){
							if(get.tag(card,'draw')||get.tag(card,'gain')){
								if(player.countCards('h')-cardsh.length<=Math.max(1,player.countCards('e'))-cardse.length+(get.type(card)=='equip')) return num+10;
								return num/5;
							}
						}
					},
				},
				ai:{
					threaten:3,
					reverseEquip:true,
					effect:{
						player_use:function(card,player,target,current){
							if(player.hasSkill('dczuowei_ban')||_status.currentPhase!=player) return;
							if(get.type(card)=='equip'&&get.cardtag(card,'gifts')) return;
							if(player.countCards('h')>Math.max(1,player.countCards('e'))) return [1,3];
						}
					}
				}
			},
			//刘宠骆俊
			dcminze:{
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					return !player.hasSkill('dcminze_ban');
				},
				filterTarget:function(card,player,target){
					if(player.getStorage('dcminze_targeted').contains(target)) return false;
					return target.countCards('h')<player.countCards('h');
				},
				filterCard:function(card,player){
					if(!ui.selected.cards.length) return true;
					return get.name(ui.selected.cards[0])!=get.name(card);
				},
				selectCard:[1,2],
				complexCard:true,
				position:'he',
				discard:false,
				lose:false,
				delay:false,
				group:'dcminze_draw',
				content:function(){
					'step 0'
					player.give(cards,target);
					player.addTempSkill('dcminze_targeted','phaseUseAfter');
					player.markAuto('dcminze_targeted',[target]);
					player.addTempSkill('dcminze_given');
					player.markAuto('dcminze_given',cards.map(i=>get.name(i,player)));
					'step 1'
					if(target.countCards('h')>player.countCards('h')){
						player.addTempSkill('dcminze_ban','phaseUseAfter');
					}
				},
				ai:{
					order:6.5,
					expose:0.2,
				},
				subSkill:{
					targeted:{onremove:true,charlotte:true},
					ban:{charlotte:true},
					given:{
						charlotte:true,
						onremove:true,
						intro:{
							content:'本回合以此法交出的牌名：$',
						},
					},
					draw:{
						trigger:{player:'phaseJieshuBegin'},
						filter:function(event,player){
							return player.getStorage('dcminze_given').length;
						},
						forced:true,
						locked:false,
						content:function(){
							var num=Math.min(5,player.getStorage('dcminze_given').length)-player.countCards('h');
							if(num>0) player.draw(num);
						}
					}
				}
			},
			dcjini:{
				audio:2,
				trigger:{player:'damageEnd'},
				direct:true,
				filter:function(event,player){
					return player.maxHp-player.countMark('dcjini_counted')>0;
				},
				content:function(){
					'step 0'
					player.chooseCard(get.prompt2('dcjini'),[1,player.maxHp-player.countMark('dcjini_counted')],(card,player,target)=>{
						var mod=game.checkMod(card,player,'unchanged','cardChongzhuable',player);
						return mod=='unchanged';
					}).set('ai',card=>{
						return 6-get.value(card);
					});
					'step 1'
					if(result.bool){
						var cards=result.cards;
						player.logSkill('dcjini');
						player.addTempSkill('dcjini_counted');
						player.addMark('dcjini_counted',cards.length,false);
						player.loseToDiscardpile(cards);
						player.draw(cards.length);
					}
					else event.finish();
					'step 2'
					if(trigger.source&&trigger.source.isIn()&&Array.isArray(result)){
						for(var i of result){
							if(get.name(i,player)=='sha'&&get.owner(i)==player&&get.position(i)=='h'){
								player.chooseToUse(function(card,player,event){
									if(get.name(card)!='sha') return false;
									return lib.filter.filterCard.apply(this,arguments);
								},'击逆：是否对'+get.translation(trigger.source)+'使用一张不可被响应的杀？').set('complexSelect',true).set('filterTarget',function(card,player,target){
									if(target!=_status.event.sourcex&&!ui.selected.targets.contains(_status.event.sourcex)) return false;
									return lib.filter.targetEnabled.apply(this,arguments);
								}).set('sourcex',trigger.source).set('oncard',()=>{
									_status.event.directHit.addArray(game.players);
								});
								break;
							}
						}
					}
				},
				subSkill:{
					counted:{
						onremove:true,
						charlotte:true
					}
				}
			},
			//乐綝
			dcporui:{
				audio:2,
				trigger:{global:'phaseJieshuBegin'},
				filter:function(event,player){
					if(player==event.player) return false;
					if(player.hasSkill('dcporui_round')) return false;
					return game.hasPlayer(current=>{
						if(current==player||current==event.player) return false;
						return current.getHistory('lose').length>0;
					})&&(_status.connectMode||player.hasCard({type:'basic'},'h'));
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseCardTarget({
						prompt:get.prompt('dcporui'),
						//prompt2:'弃置一张基本牌并选择一名本回合失去过牌的非当前回合的其他角色，你视为对其依次使用'+get.cnNumber(Math.max(0,player.hp)+1)+'张【杀】',
						prompt2:get.skillInfoTranslation('dcporui',player),
						filterCard:function(card,player){
							if(get.type(card)!='basic') return false;
							return lib.filter.cardDiscardable.apply(this,arguments);
						},
						selectCard:1,
						targets:game.filterPlayer(current=>{
							if(current==player||current==trigger.player) return false;
							return current.getHistory('lose').length>0;
						}),
						filterTarget:function(card,player,target){
							return _status.event.targets.contains(target);
						},
						ai1:function(card){
							return 7-get.value(card);
						},
						ai2:function(target){
							return get.effect(target,{name:'sha'},_status.event.player,_status.event.player);
						}
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0],cards=result.cards;
						event.target=target;
						player.logSkill('dcporui',target);
						player.discard(cards);
						event.num2=Math.max(0,player.hp);
						event.num=event.num2+1;
						player.addTempSkill('dcporui_round','roundStart');
					}
					else event.finish();
					'step 2'
					var card={name:'sha',isCard:true,storage:{dcporui:true}};
					if(player.canUse(card,target,false)&&target.isIn()){
						player.useCard(card,target);
						event.num--;
					}
					else event.goto(4);
					'step 3'
					if(event.num>0) event.goto(2);
					'step 4'
					if(!player.hasMark('dcgonghu_damage')){
						var cards=player.getCards('h');
						if(cards.length==0) event._result={bool:false};
						else if(cards.length<=event.num2) event._result={bool:true,cards:cards};
						else player.chooseCard('破锐：交给'+get.translation(target)+get.cnNumber(event.num2)+'张手牌',true,event.num2);
					}
					else event.goto(6)
					'step 5'
					if(result.bool){
						player.give(result.cards,target);
					}
					'step 6'
					if(player.hasMark('dcgonghu_basic')){
						if(!target.hasHistory('damage',evt=>{
							return evt.card&&evt.card.storage&&evt.card.storage.dcporui&&evt.getParent('dcporui')==event;
						})){
							player.recover();
						}
					}
				},
				subSkill:{
					round:{charlotte:true}
				},
				ai:{
					expose:0.4,
					threaten:4.8
				}
			},
			dcgonghu:{
				audio:2,
				trigger:{
					player:['loseAfter','damageEnd'],
					source:'damageSource',
					global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
				},
				forced:true,
				filter:function(event,player){
					if(event.name=='damage'){
						if(player.hasMark('dcgonghu_damage')) return false;
						return _status.currentPhase&&_status.currentPhase!=player;
					}
					if(player.hasMark('dcgonghu_basic')) return false;
					var evt=event.getl(player);
					return evt&&evt.cards2&&evt.cards2.some(i=>get.type2(i,player)=='basic');
				},
				group:['dcgonghu_basic','dcgonghu_trick'],
				content:function(){
					player.addMark('dcgonghu_'+(trigger.name=='damage'?'damage':'basic'),1,false);
					game.log(player,'修改了技能','#g【破锐】');
				},
				subSkill:{
					trick:{
						audio:'dcgonghu',
						trigger:{player:'useCard2'},
						direct:true,
						locked:true,
						filter:function(event,player){
							if(!player.hasMark('dcgonghu_basic')||!player.hasMark('dcgonghu_damage')) return false;
							var card=event.card;
							if(get.color(card,false)!='red'||get.type(card,null,true)!='trick') return false;
							var info=get.info(card);
							if(info.allowMultiple==false) return false;
							if(event.targets&&!info.multitarget){
								if(game.hasPlayer(function(current){
									return !event.targets.contains(current)&&lib.filter.targetEnabled2(card,player,current);
								})){
									return true;
								}
							}
							return false;
						},
						content:function(){
							'step 0'
							var prompt2='为'+get.translation(trigger.card)+'增加一个目标'
							player.chooseTarget(get.prompt('dcgonghu_trick'),function(card,player,target){
								var player=_status.event.player;
								return !_status.event.targets.contains(target)&&lib.filter.targetEnabled2(_status.event.card,player,target);
							}).set('prompt2',prompt2).set('ai',function(target){
								var trigger=_status.event.getTrigger();
								var player=_status.event.player;
								return get.effect(target,trigger.card,player,player);
							}).set('card',trigger.card).set('targets',trigger.targets);
							'step 1'
							if(result.bool){
								if(!event.isMine()&&!event.isOnline()) game.delayx();
								event.targets=result.targets;
							}
							else{
								event.finish();
							}
							'step 2'
							if(event.targets){
								player.logSkill('dcgonghu_trick',event.targets);
								trigger.targets.addArray(event.targets);
							}
						},
					},
					basic:{
						audio:'dcgonghu',
						trigger:{player:'useCard'},
						forced:true,
						filter:function(event,player){
							if(!player.hasMark('dcgonghu_basic')||!player.hasMark('dcgonghu_damage')) return false;
							var card=event.card;
							return (get.color(card,false)=='red'&&get.type(card,null,false)=='basic');
						},
						content:function(){
							trigger.directHit.addArray(game.filterPlayer());
							game.log(trigger.card,'不可被响应');
						},
					},
				}
			},
			//张闿
			dcxiangshu:{
				audio:2,
				trigger:{global:'phaseUseBegin'},
				direct:true,
				filter:function(event,player){
					return event.player!=player&&event.player.countCards('h')>=event.player.hp;
				},
				content:function(){
					'step 0'
					var list=[0,1,2,3,4,5,'cancel2'];
					player.chooseControl(list).set('prompt',get.prompt2('dcxiangshu')).set('ai',()=>{
						return _status.event.choice;
					}).set('choice',function(){
						if(get.attitude(player,trigger.player)>0) return 'cancel2';
						var cards=trigger.player.getCards('h');
						var num=0;
						for(var card of cards){
							if(!trigger.player.hasValueTarget(card)){
								num++;
								if(num>=5) break;
							}
						}
						if(cards.length>=3&&Math.random()<0.5) num=Math.max(0,num-1);
						return num;
					}());
					'step 1'
					if(result.control!='cancel2'){
						player.logSkill('dcxiangshu',trigger.player);
						var num=result.index;
						player.storage.dcxiangshu_lottery=num;
						player.addTempSkill('dcxiangshu_lottery','phaseUseAfter');
					}
					else event.finish();
					'step 2'
					player.chooseToDiscard('相鼠：是否弃置一张牌不公布此数字？').set('ai',card=>2-get.value(card));
					'step 3'
					if(!result.bool){
						var num=player.storage.dcxiangshu_lottery;
						player.markSkill('dcxiangshu_lottery');
						player.popup(num);
						game.log(player,'选择了数字','#g'+num);
					}
				},
				subSkill:{
					lottery:{
						audio:'dcxiangshu',
						trigger:{global:'phaseUseEnd'},
						charlotte:true,
						forced:true,
						onremove:true,
						logTarget:'player',
						filter:function(event,player){
							return typeof player.storage.dcxiangshu_lottery=='number'&&Math.abs(event.player.countCards('h')-player.storage.dcxiangshu_lottery)<=1;
						},
						content:function(){
							var delt=Math.abs(trigger.player.countCards('h')-player.storage.dcxiangshu_lottery);
							if(delt<=1&&trigger.player.countGainableCards('he',player)>0){
								player.gainPlayerCard(trigger.player,'he',true);
							}
							if(delt==0){
								trigger.player.damage(player);
							}
						},
						intro:{content:'猜测的数字为#'}
					}
				}
			},
			//裴元绍
			dcmoyu:{
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					return !player.hasSkill('dcmoyu_ban');
				},
				filterTarget:function(card,player,target){
					return player!=target&&!player.getStorage('dcmoyu_clear').contains(target)&&target.countGainableCards(player,'hej');
				},
				global:'dcmoyu_ai',
				content:function(){
					'step 0'
					player.addTempSkill('dcmoyu_clear');
					player.markAuto('dcmoyu_clear',[target]);
					player.gainPlayerCard(target,'hej',true);
					'step 1'
					var num=player.getStorage('dcmoyu_clear').length;
					target.chooseToUse(function(card,player,event){
						if(get.name(card)!='sha') return false;
						return lib.filter.filterCard.apply(this,arguments);
					},'是否对'+get.translation(player)+'使用一张【杀】（伤害基数为'+num+'）？').set('targetRequired',true).set('complexSelect',true).set('filterTarget',function(card,player,target){
						if(target!=_status.event.sourcex&&!ui.selected.targets.contains(_status.event.sourcex)) return false;
						return lib.filter.filterTarget.apply(this,arguments);
					}).set('sourcex',player).set('num',num).set('oncard',card=>{
						var evt=_status.event;
						evt.baseDamage=evt.num;
					});
					'step 2'
					if(result.bool){
						if(player.hasHistory('damage',evt=>{
							return evt.card&&evt.card.name=='sha'&&evt.getParent(4)==event;
						})) player.addTempSkill('dcmoyu_ban');
					}
				},
				subSkill:{
					clear:{
						charlotte:true,
						onremove:true,
					},
					ban:{charlotte:true},
					ai:{
						ai:{
							effect:{
								target:function(card,player,target,current){
									if(get.type(card)=='delay'&&current<0){
										var currentx=_status.currentPhase;
										if(!currentx||!currentx.isIn()) return;
										var list=game.filterPlayer(current=>{
											if(current==target) return true;
											if(!current.hasSkill('dcmoyu')) return false;
											if(current.hasJudge('lebu')) return false;
											return get.attitude(current,target)>0;
										});
										list.sortBySeat(currentx);
										if(list.indexOf(target)!=0) return 'zerotarget';
									}
								},
							},
						}
					}
				},
				ai:{
					order:9,
					threaten:2.4,
					result:{
						target:function(player,target){
							var eff=get.effect(target,{name:'shunshou'},player,player);
							if(eff>0) return eff/10;
							if(player.hasShan()&&!target.hasSkillTag('directHit_ai',true,{
								target:player,
								card:{name:'sha'},
							},true)) return eff;
							if(player.getStorage('dcmoyu_clear').length||player.hp+player.countCards('hs','tao')<=1) return 0;
							return eff;
						}
					}
				}
			},
			//张楚
			dcjizhong:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterTarget:lib.filter.notMe,
				selectTarget:1,
				content:function(){
					'step 0'
					target.draw(2);
					'step 1'
					var marked=target.hasMark('dcjizhong');
					if(marked){
						if(target.countCards('h')) target.chooseToDiscard('集众：弃置三张手牌',3,true);
						event.finish();
					}
					else{
						target.chooseToDiscard('集众：弃置三张手牌，或点击“取消”获得“信众”标记',3);
					}
					'step 2'
					if(!result.bool){
						target.addMark('dcjizhong',1);
					}
				},
				marktext:'信',
				intro:{
					name:'信众',
					name2:'信众',
					markcount:()=>0,
					content:'已成为信徒',
				},
				ai:{
					order:9.5,
					result:{
						target:function(player,target){
							if(get.attitude(player,target)>0) return 1;
							var num=target.countCards('h');
							if(num<=1) return -num;
							return -1/(num/2+1);
						}
					}
				}
			},
			dcrihui:{
				audio:2,
				trigger:{player:'useCardAfter'},
				usable:1,
				filter:function(event,player){
					if(!event.targets||event.targets.length!=1||event.targets[0]==player) return false;
					var card=event.card;
					var target=event.targets[0];
					var marked=target.hasMark('dcjizhong');
					return (get.type(card)=='trick'||get.color(card)=='black'&&get.type(card)=='basic')&&
						(marked||!marked&&game.hasPlayer(current=>current.hasMark('dcjizhong')));
				},
				direct:true,
				content:function(){
					'step 0'
					var target=trigger.targets[0];
					var card={name:trigger.card.name,nature:trigger.card.nature,isCard:true};
					event.target=target;
					event.card=card;
					if(target.hasMark('dcjizhong')) player.gainPlayerCard(get.prompt('dcrihui',target),target,'hej').set('logSkill',['dcrihui',target]);
					else{
						player.chooseBool(get.prompt('dcrihui',target),'令所有有“信众”的角色依次视为对其使用一张'+get.translation(card)).set('ai',()=>{
							return _status.event.bool;
						}).set('bool',function(){
							var eff=0;
							game.countPlayer(current=>{
								if(!current.hasMark('dcjizhong')) return;
								eff+=get.effect(target,card,current,player);
							});
							return eff>0;
						}());
					}
					'step 1'
					if(!result.bool){
						player.storage.counttrigger.dcrihui--;
						event.finish();
						return;
					}
					if(target.hasMark('dcjizhong')) event.finish();
					else{
						player.logSkill('dcrihui',target);
						event.targets=game.filterPlayer(current=>current.hasMark('dcjizhong'));
						event.targets.sortBySeat(_status.currentPhase);
					}
					'step 2'
					var current=event.targets.shift();
					if(current.canUse(card,target,false)){
						current.useCard(card,target,false);
					}
					if(event.targets.length) event.redo();
				}
			},
			dcguangshi:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				filter:function(event,player){
					return !game.hasPlayer(current=>current!=player&&!current.hasMark('dcjizhong'));
				},
				forced:true,
				content:function(){
					player.loseHp();
					player.draw(2);
				}
			},
			//董绾
			dcshengdu:{
				audio:2,
				trigger:{player:'phaseBegin'},
				direct:true,
				content:function(){
					'step 0'
					if(target) event._result={bool:true,targets:[target]};
					else player.chooseTarget(get.prompt2('dcshengdu'),lib.filter.notMe).set('ai',target=>{
						var player=_status.event.player;
						var att=get.attitude(player,target);
						var eff=get.effect(target,{
							name:'sha',
							storage:{dcxianjiao:true},
						},player,player);
						var value=att/5;
						if(value<0) value=-value/1.3;
						value=Math.max(value-eff/20,0.01);
						var skills=target.getSkills(null,false,false);
						for(var skill of skills){
							var str=get.skillInfoTranslation(skill,target);
							if(/摸牌阶段[^少放弃]{0,8}摸/.test(str)) value+=Math.random()/2+1.5;
						}
						return value;
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('dcshengdu',target);
						target.addSkill('dcshengdu_effect');
						target.markAuto('dcshengdu_effect',[player]);
					}
				},
				subSkill:{
					effect:{
						trigger:{player:'gainAfter'},
						charlotte:true,
						forced:true,
						popup:false,
						filter:function(event,player){
							return event.getParent(2).name=='phaseDraw';
						},
						content:function(){
							'step 0'
							var targets=player.getStorage('dcshengdu_effect');
							event.targets=targets.sortBySeat(player);
							'step 1'
							var target=targets.shift();
							if(target.isIn()){
								target.logSkill('dcshengdu_effect',player);
								target.draw(trigger.cards.length);
							}
							if(targets.length) event.redo();
							'step 2'
							player.removeSkill('dcshengdu_effect');
							game.delayx();
						},
						marktext:'绞',
						intro:{
							content:'下个摸牌阶段获得牌后，$摸等量的牌'
						}
					}
				}
			},
			dcxianjiao:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				position:'hs',
				viewAs:{
					name:'sha',
					storage:{dcxianjiao:true}
				},
				filterCard:function(card,player){
					if(ui.selected.cards.length){
						return get.color(card)!=get.color(ui.selected.cards[0]);
					}
					return true;
				},
				selectCard:2,
				complexCard:true,
				check:function(card){
					return 6-get.value(card);
				},
				precontent:function(){
					player.addTempSkill('dcxianjiao_after');
					event.getParent().addCount=false;
				},
				ai:{
					order:function(item,player){
						return get.order({name:'sha'})+0.1;
					},
				},
				locked:false,
				mod:{
					targetInRange:function(card){
						if(card.storage&&card.storage.dcxianjiao) return true;
					},
				},
				subSkill:{
					after:{
						trigger:{global:'useCardAfter'},
						forced:true,
						direct:true,
						charlotte:true,
						filter:function(event,player){
							return event.card.name=='sha'&&event.card.storage&&event.card.storage.dcxianjiao;
						},
						content:function(){
							'step 0'
							var damaged=game.hasPlayer2(current=>{
								return current.hasHistory('damage',evt=>evt.card==trigger.card);
							});
							var targets=trigger.targets.filter(i=>i.isIn());
							player.logSkill('dcxianjiao_after',targets);
							if(damaged){
								for(var target of targets){
									target.loseHp();
								}
							}
							else{
								for(var target of targets){
									var next=game.createEvent('dcshengdu',false);
									next.player=player;
									next.target=target;
									next.setContent(lib.skill.dcshengdu.content);
								}
							}
						}
					}
				}
			},
			//袁胤
			dcmoshou:{
				audio:2,
				trigger:{target:'useCardToTargeted'},
				init:function(player,skill){
					if(typeof player.storage[skill]!='number') player.storage[skill]=0;
				},
				filter:function(event,player){
					return get.color(event.card)=='black'&&event.player!=player;
				},
				frequent:true,
				prompt2:function(event,player){
					var num=player.getAllHistory('useSkill',evt=>evt.skill=='dcmoshou').length%3+1;
					return '摸'+get.cnNumber(num)+'张牌';
				},
				content:function(){
					var num=player.getAllHistory('useSkill',evt=>evt.skill=='dcmoshou').length;
					player.storage.dcmoshou=num;
					player.syncStorage('dcmoshou');
					player.markSkill('dcmoshou');
					num=(num-1)%3+1;
					player.draw(num);
				},
				mark:true,
				marktext:'守',
				intro:{
					markcount:function(storage,player){
						if(typeof storage!='number') return 1;
						return storage%3+1;
					},
					content:'本局游戏已发动过$次技能',
				}
			},
			dcyunjiu:{
				audio:2,
				trigger:{global:'dieAfter'},
				direct:true,
				content:function(){
					'step 0'
					var evt=trigger.player.getHistory('lose',evtx=>{
						return evtx.getParent(2)==trigger;
					})[0];
					if(!evt) event.finish();
					else{
						var cards=[];
						//冷知识，角色死亡后只有手牌区和装备区的牌是被系统弃置的，其余牌的处理方式均为置入弃牌堆
						cards.addArray(evt.hs).addArray(evt.es);
						event.cards=cards.filterInD('d');
						var num=cards.length;
						if(num){
							event.videoId=lib.status.videoId++;
							var func=function(cards,id){
								var num=cards.length;
								var dialog=ui.create.dialog(get.prompt('dcyunjiu'),'<div class="text center">弃置'+get.cnNumber(num)+'张牌，令一名其他角色获得以下这些牌</div>',cards);
								dialog.videoId=id;
								return dialog;
							};
							if(player.isOnline2()){
								player.send(func,cards,event.videoId);
							}
							event.dialog=func(cards,event.videoId);
							if(player!=game.me||_status.auto){
								event.dialog.style.display='none';
							}
							player.chooseCardTarget({
								prompt:false,
								filterTarget:lib.filter.notMe,
								filterCard:lib.filter.cardDiscardable,
								selectCard:num,
								position:'he',
								goon:function(){
									if(!game.hasPlayer(current=>get.attitude(player,current))>0) return false;
									var value=0;
									for(var card of cards){
										value+=get.value(card,player,'raw')-1.2;
									}
									return value>0;
								}(),
								ai1:function(card){
									if(_status.event.goon){
										if(ui.selected.cards.length==_status.event.selectCard[1]-1&&ui.selected.cards.length>0) return 7-get.value(card);
										return 5.5-get.value(card);
									}
									return 0;
								},
								ai2:function(target){
									return get.attitude(_status.event.player,target)/Math.sqrt(target.countCards('h')+1);
								}
							});
						}
						else event.finish();
					}
					'step 1'
					if(player.isOnline2()){player.send('closeDialog',event.videoId)}
					event.dialog.close();
					if(result.bool){
						var cardsx=result.cards,target=result.targets[0];
						player.logSkill('dcyunjiu',target);
						player.discard(cardsx);
						target.gain(cards.filterInD('d'),'gain2').giver=player;
					}
					else event.finish();
					'step 2'
					player.gainMaxHp();
					player.recover();
				}
			},
			//高翔
			dcchiying:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return target.hp<=player.hp;
				},
				content:function(){
					'step 0'
					var targets=game.filterPlayer(current=>target.inRange(current)&&current!=player).sortBySeat(player);
					event.targets=targets;
					'step 1'
					var current=targets.shift();
					if(current.countCards('he')) current.chooseToDiscard('驰应：请弃置一张牌','he',true);
					if(targets.length) event.redo();
					'step 2'
					if(target!=player){
						var cards=[];
						game.getGlobalHistory('cardMove',evt=>{
							if(evt.getParent(3)==event){
								cards.addArray(evt.cards.filter(card=>get.type(card)=='basic'));
							}
						});
						cards=cards.filterInD('d');
						if(cards.length) target.gain(cards,'gain2');
					}
				},
				ai:{
					order:6,
					result:{
						target:function(player,target){
							var targets=game.filterPlayer(current=>target.inRange(current)&&current!=player);
							var eff=0;
							for(var targetx of targets){
								var effx=get.effect(targetx,{name:'guohe_copy2'},player,target);
								if(get.attitude(player,targetx)<0) effx/=2;
								eff+=effx;
							}
							return (target==player?0.5:1)*eff*(get.attitude(player,target)<=0?0.75:1);
						}
					}
				}
			},
			//霍峻
			dcgue:{
				audio:2,
				enable:['chooseToUse','chooseToRespond'],
				hiddenCard:function(player,name){
					if(player.getStorage('dcgue').contains(_status.currentPhase)) return false;
					return name=='sha'||name=='shan';
				},
				filter:function(event,player){
					//if(event.dcgue||event.type=='wuxie'||player==_status.currentPhase||player.getStorage('dcgue').contains(_status.currentPhase)) return false;
					if(event.dcgue||event.type=='wuxie'||player==_status.currentPhase) return false;
					if(!player.countCards('h')||player.hasSkill('dcgue_blocker',null,null,false)) return false;
					for(var name of ['sha','shan']){
						if(event.filterCard({name:name,isCard:true},player,event)) return true;
					}
					return false;
				},
				chooseButton:{
					dialog:function(event,player){
						var vcards=[];
						for(var name of ['sha','shan']){
							var card={name:name,isCard:true};
							if(event.filterCard(card,player,event)) vcards.push(['基本','',name]);
						}
						return ui.create.dialog('孤扼',[vcards,'vcard'],'hidden');
					},
					check:function(button){
						if(_status.event.player.countCards('h',{name:['sha','shan']})>1) return 0;
						return 1;
					},
					backup:function(links,player){
						return {
							filterCard:()=>false,
							selectCard:-1,
							viewAs:{
								name:links[0][2],
								isCard:true,
							},
							popname:true,
							precontent:function(){
								'step 0'
								player.logSkill('dcgue');
								player.addTempSkill('dcgue_blocker');
								player.showHandcards();
								delete event.result.skill;
								'step 1'
								if(player.countCards('h',{name:['sha','shan']})>1){
									var evt=event.getParent();
									evt.set('dcgue',true);
									evt.goto(0);
									delete evt.openskilldialog;
									return;
								}
								//else player.markAuto('dcgue',[_status.currentPhase]);
								game.delayx();
							},
						}
					},
					prompt:function(links,player){
						return '展示所有手牌'+(player.countCards('h',{name:['sha','shan']})<=1?'，然后视为使用【'+get.translation(links[0][2])+'】':'');
					}
				},
				subSkill:{blocker:{charlotte:true}},
				//intro:{content:'已于$的回合发动过技能'},
				ai:{
					order:1,
					respondSha:true,
					respondShan:true,
					skillTagFilter:function(player,tag,arg){
						//if(player.getStorage('dcgue').contains(_status.currentPhase)) return false;
						if(player.countCards('h',{name:['sha','shan']})>1) return false;
					},
					result:{
						player:function(player){
							if(player.countCards('h',{name:['sha','shan']})>1) return 0;
							return 1;
						}
					}
				}
			},
			dcsigong:{
				audio:2,
				trigger:{global:'phaseEnd'},
				filter:function(event,player){
					if(player.hasSkill('dcsigong_round')) return false;
					if(event.player==player||!event.player.isIn()) return false;
					if(!player.canUse('sha',event.player,false)) return false;
					var respondEvts=[];
					game.countPlayer2(current=>respondEvts.addArray(current.getHistory('useCard')).addArray(current.getHistory('respond')));
					respondEvts=respondEvts.filter(i=>i.respondTo).map(evt=>evt.respondTo);
					return event.player.hasHistory('useCard',evt=>{
						return respondEvts.some(list=>list[1]==evt.card);
					});
				},
				direct:true,
				content:function(){
					'step 0'
					var num=1-player.countCards('h');
					event.num=num;
					var prompt2='';
					if(num>=0){
						var next=player.chooseBool().set('ai',()=>_status.event.goon);
						prompt2+=(num>0?'摸一张牌，':'')+'视为对'+get.translation(trigger.player)+'使用一张【杀】（伤害基数+1）';
					}
					else{
						var next=player.chooseToDiscard(-num).set('ai',card=>{
							if(_status.event.goon) return 5.2-get.value(card);
							return 0;
						}).set('logSkill',['dcsigong',trigger.player]);
						prompt2+='将手牌数弃置至1，视为对'+get.translation(trigger.player)+'使用一张【杀】（伤害基数+1）';
					}
					next.set('prompt',get.prompt('dcsigong',trigger.player));
					next.set('prompt2',prompt2);
					next.set('goon',get.effect(trigger.player,{name:'sha'},player,player)>0);
					'step 1'
					if(result.bool){
						if(num>=0) player.logSkill('dcsigong',trigger.player);
						if(num>0) player.draw(num,'nodelay');
						event.num=Math.max(1,Math.abs(num));
					}
					else event.finish();
					'step 2'
					if(player.canUse('sha',trigger.player,false)){
						player.addTempSkill('dcsigong_check');
						player.useCard({name:'sha',isCard:true},trigger.player,false).set('shanReq',num).set('oncard',card=>{
							var evt=_status.event;
							evt.baseDamage++;
							for(var target of evt.targets){
								var id=target.playerid;
								var map=evt.customArgs;
								if(!map[id]) map[id]={};
								map[id].shanRequired=evt.shanReq;
							}
						});
					}
				},
				subSkill:{
					round:{charlotte:true},
					check:{
						charlotte:true,
						forced:true,
						popup:false,
						trigger:{source:'damageSource'},
						filter:function(event,player){
							return event.card&&event.card.name=='sha'&&event.getParent(3).name=='dcsigong';
						},
						content:function(){
							player.addTempSkill('dcsigong_round','roundStart');
						}
					}
				}
			},
			//孙寒华
			dchuiling:{
				audio:2,
				trigger:{player:'useCard'},
				forced:true,
				direct:true,
				filter:function(){
					return ui.discardPile.childNodes.length>0;
				},
				onremove:true,
				mark:true,
				marktext:'灵',
				intro:{
					name2:'灵',
					mark:function(dialog,storage,player){
						dialog.addText('共有'+(storage||0)+'个标记');
						dialog.addText('注：图标的颜色代表弃牌堆中较多的颜色');
					},
				},
				global:'dchuiling_hint',
				content:function(){
					'step 0'
					var mark=false;
					var red=0,black=0;
					for(var i=0;i<ui.discardPile.childNodes.length;i++){
						var color=get.color(ui.discardPile.childNodes[i]);
						if(color=='red') red++;
						if(color=='black') black++;
					}
					if(red==black) event.finish();
					else if(red>black){
						player.logSkill('dchuiling');
						player.recover();
						event.finish();
						if(get.color(trigger.card)=='black') mark=true;
						event.logged=true;
					}
					else{
						if(!event.isMine()&&!event.isOnline()) game.delayx();
						player.chooseTarget(get.prompt('dchuiling'),'弃置一名角色的一张牌',(card,player,target)=>{
							return target.countDiscardableCards(player,'he')>0;
						}).set('ai',target=>{
							return get.effect(target,{name:'guohe_copy2'},_status.event.player);
						});
						if(get.color(trigger.card)=='red') mark=true;
					}
					if(mark){
						if(!event.logged) player.logSkill('dchuiling');
						player.addMark('dchuiling',1);
						event.logged=true;
					}
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						if(!event.logged) player.logSkill('dchuiling',target);
						else player.line(target);
						player.discardPlayerCard(target,'he',true);
					}
				},
				subSkill:{
					hint:{
						trigger:{
							global:['loseAfter','loseAsyncAfter','cardsDiscardAfter','equipAfter'],
						},
						forced:true,
						popup:false,
						lastDo:true,
						forceDie:true,
						forceOut:true,
						filter:function(event,player){
							if(event._dchuiling_checked) return false;
							event._dchuiling_checked=true;
							var cards=event.getd();
							if(!cards.filterInD('d').length) return false;
							return true;
						},
						markColor:[
							['rgba(241, 42, 42, 0.75)', 'black'],
							['',''],
							['rgba(18, 4, 4, 0.75)', 'rgb(200, 200, 200)']
						],
						content:function(){
							'step 0'
							var red=0,black=0;
							for(var i=0;i<ui.discardPile.childNodes.length;i++){
								var color=get.color(ui.discardPile.childNodes[i]);
								if(color=='red') red++;
								if(color=='black') black++;
							}
							if(trigger.name.indexOf('lose')==0){
								var cards=trigger.getd().filterInD('d');
								for(var i=0;i<cards.length;i++){
									var color=get.color(cards[i]);
									if(color=='red') red++;
									if(color=='black') black++;
								}
							}
							game.broadcastAll(function(ind){
								var bgColor=lib.skill.dchuiling_hint.markColor[ind][0],text='<span style="color: '+lib.skill.dchuiling_hint.markColor[ind][1]+'">灵</span>';
								for(var player of game.players){
									if(player.marks.dchuiling){
										player.marks.dchuiling.firstChild.style.backgroundColor=bgColor;
										player.marks.dchuiling.firstChild.innerHTML=text;
									}
								}
							},Math.sign(black-red)+1);
						},
					}
				},
				mod:{
					aiOrder:function(player,card,num){
						if(get.itemtype(card)!='card') return;
						var len=ui.discardPile.childNodes.length;
						if(!len){
							var type=get.type(card);
							if(type=='basic'||type=='trick'){
								if(player.getDamagedHp()>0){
									return num+(get.color(card)=='red'?15:10);
								}
								return num+10;
							}
							return;
						}
						if(len>40) return;
						var red=0,black=0;
						for(var i=0;i<ui.discardPile.childNodes.length;i++){
							var color=get.color(ui.discardPile.childNodes[i]);
							if(color=='red') red++;
							if(color=='black') black++;
						}
						if(red==black){
							var type=get.type(card);
							if(type=='basic'||type=='trick'){
								if(player.getDamagedHp()>0){
									return num+(get.color(card)=='red'?15:10);
								}
								return num+10;
							}
							return;
						}
						else{
							var color=get.color(card);
							if(color=='red'&&red<black||color=='black'&&red>black) return num+10;
						}
					},
				}
			},
			dcchongxu:{
				audio:2,
				enable:'phaseUse',
				limited:true,
				skillAnimation:true,
				animationColor:'wood',
				derivation:['dctaji','dcqinghuang'],
				filterCard:()=>false,
				selectCard:[0,1],
				prompt:function(){
					return '限定技。你可以失去〖汇灵〗，增加'+Math.min(game.countPlayer(),_status.event.player.countMark('dchuiling'))+'点体力上限，然后获得〖踏寂〗和〖清荒〗。'
				},
				filter:function(event,player){
					return player.countMark('dchuiling')>=4;
				},
				content:function(){
					'step 0'
					player.awakenSkill('dcchongxu');
					player.gainMaxHp(Math.min(game.countPlayer(),player.countMark('dchuiling')));
					player.removeSkill('dchuiling');
					'step 1'
					player.addSkillLog('dctaji');
					player.addSkillLog('dcqinghuang');
				},
				ai:{
					order:function(itemp,player){
						if(player.hasCard(card=>{
							return get.type(card)!='equip'&&player.getUseValue(card)>1;
						},'h')) return 12;
						return 0.1;
					},
					result:{
						player:function(player){
							var count=player.countMark('dchuiling');
							if(count>=game.countPlayer()-1) return 1;
							return (count>=6||player.hp<=2)?1:0;
						}
					}
				}
			},
			dctaji:{
				audio:2,
				trigger:{
					player:'loseAfter',
					global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
				},
				forced:true,
				locked:false,
				filter:function(event,player){
					var evt=event.getl(player);
					return evt&&evt.hs&&evt.hs.length;
				},
				content:function(){
					'step 0'
					var evt=trigger.getParent();
					var effects=[
						['useCard',function(){
							'step 0'
							var targets=game.filterPlayer(current=>{
								return current.countDiscardableCards(player,'he')&&current!=player;
							});
							if(!targets.length) event.finish();
							else player.chooseTarget('踏寂：弃置其他角色一张牌',true,(card,player,target)=>{
								return _status.event.targets.contains(target);
							}).set('targets',targets).set('ai',target=>{
								return get.effect(target,{name:'guohe_copy2'},_status.event.player);
							});
							'step 1'
							if(result.bool){
								var target=result.targets[0];
								player.line(target);
								player.discardPlayerCard(target,'he',true);
							}
						}],
						['respond',function(){
							player.draw();
						}],
						['discard',function(){
							player.recover();
						}],
						['other',function(){
							player.addSkill('dctaji_damage');
							player.addMark('dctaji_damage',1,false);
							game.log(player,'下一次对其他角色造成的伤害','#g+1');

						}]
					];
					var name=evt.name;
					if(trigger.name=='loseAsync') name=evt.type;
					var list=['useCard','respond','discard','other'];
					if(!list.contains(name)) name='other';
					for(var i=0;i<1+player.countMark('dcqinghuang_add');i++){
						if(!list.length) break;
						if(!list.contains(name)) name=list.randomRemove(1)[0];
						if(name=='useCard') list.remove('useCard');
						for(var effect of effects){
							if(effect[0]==name){
								list.remove(name);
								var next=game.createEvent('dctaji_'+name);
								next.player=player;
								next.setContent(effect[1]);
								break;
							}
						}
					}
				},
				subSkill:{
					damage:{
						trigger:{source:'damageBegin3'},
						forced:true,
						charlotte:true,
						onremove:true,
						filter:function(event,player){
							return event.player!=player;
						},
						content:function(){
							trigger.num+=player.countMark('dctaji_damage');
							player.removeSkill('dctaji_damage');
						},
						intro:{
							content:'下次对其他角色造成伤害时，此伤害+#',
						}
					}
				}
			},
			dcqinghuang:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				filter:function(event,player){
					return player.maxHp>1;
				},
				check:function(event,player){
					var num1=player.countCards('h');
					var num2=player.countCards('h',card=>player.hasValueTarget(card));
					var num3=player.getHandcardLimit();
					if(player.isDamaged()){
						return num2>1||num1-num2-num3>0;
					}
					else{
						return num2>2+Math.max(0,3-player.hp)||player.hp>2&&num1-num2-num3>2;
					}
				},
				content:function(){
					player.loseMaxHp();
					player.addTempSkill('dcqinghuang_add');
					player.addMark('dcqinghuang_add',1,false);
				},
				subSkill:{
					add:{
						charlotte:true,
						onremove:true,
					}
				}
			},
			//孟节
			dcyinlu:{
				audio:2,
				trigger:{
					global:'phaseBefore',
					player:'enterGame',
				},
				forced:true,
				locked:false,
				derivation:['dcyinlu_lequan','dcyinlu_huoxi','dcyinlu_zhangqi','dcyinlu_yunxiang'],
				global:['dcyinlu_lequan','dcyinlu_huoxi','dcyinlu_zhangqi','dcyinlu_yunxiang'],
				group:'dcyinlu_move',
				filter:function(event,player){
					return (event.name!='phase'||game.phaseNumber==0);
				},
				hasMark:function(target){
					return lib.skill.dcyinlu.derivation.some(i=>target.hasMark(i));
				},
				content:function(){
					'step 0'
					event.marks=lib.skill.dcyinlu.derivation.slice(0,3);
					if(game.countPlayer()<=2) event.goto(3);
					'step 1'
					player.chooseTarget('引路：令三名角色分别获得〖引路〗标记',true,3).set('targetprompt',()=>{
						return get.translation(lib.skill.dcyinlu.derivation[ui.selected.targets.length-1]);
					}).set('complexSelect',true).set('ai',target=>{
						var player=_status.event.player;
						if(ui.selected.targets.length==2) return get.effect(target,{name:'losehp'},player,player);
						return get.attitude(player,target);
					});
					'step 2'
					if(result.bool){
						var targets=result.targets;
						player.line(targets);
						for(var i=0;i<targets.length;i++){
							targets[i].addMark(event.marks[i]);
						}
					}
					event.goto(5);
					'step 3'
					player.logSkill('dcyinlu',game.players);
					var list=[];
					for(var mark of event.marks){
						list.push([mark,'<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【'+
							get.translation(mark)+'】</div><div>'+lib.translate[mark+'_info']+'</div></div>'])
					}
					var target=game.filterPlayer(i=>i!=player)[0];
					if(!game.hasPlayer(current=>current!=player)) target=player;
					event.target=target;
					player.chooseButton(['引路：令'+get.translation(target)+'获得2枚〖引路〗标记',[list,'textbutton']]).set('ai',button=>{
						var mark=button.link;
						if(mark=='dcyinlu_lequan') return 9;
						if(mark=='dcyinlu_zhangqi') return 10;
						return 8;
					}).set('forced',true).set('selectButton',2).set('forcebutton',true);
					'step 4'
					if(result.bool){
						var marks=result.links;
						for(var mark of marks) target.addMark(mark,1);
						event.marks.removeArray(marks);
						for(var mark of event.marks) player.addMark(mark,1);
					}
					'step 5'
					player.addMark('dcyinlu_yunxiang',1);
					player.addMark('dcyinlu_xiang',1);
					game.log(player,'获得了1点芸香值');
				},
				subSkill:{
					move:{
						audio:'dcyinlu',
						trigger:{
							player:'phaseZhunbeiBegin',
							global:'die',
						},
						direct:true,
						filter:function(event,player){
							if(event.name=='die'){
								return lib.skill.dcyinlu.hasMark(event.player);
							}
							return game.hasPlayer(current=>{
								return lib.skill.dcyinlu.hasMark(current);
							})
						},
						content:function(){
							'step 0'
							if(trigger.name=='die'){
								var marks=lib.skill.dcyinlu.derivation.filter(mark=>trigger.player.hasMark(mark));
								event.marks=marks;
								event.goto(3);
							}
							else{
								if(_status.connectMode) game.broadcastAll(function(){_status.noclearcountdown=true});
								player.chooseTarget(get.prompt('dcyinlu_move'),'移动一名角色的〖引路〗标记',2,(card,player,target)=>{
									if(ui.selected.targets.length==0) return lib.skill.dcyinlu.hasMark(target);
									return true;
								}).set('ai',target=>{
									var player=_status.event.player;
									if(ui.selected.targets.length==0){
										var owned=lib.skill.dcyinlu.derivation.filter(i=>target.hasMark(i));
										var att=get.attitude(player,target);
										if(att>0){
											if(owned.contains('dcyinlu_zhangqi')) return target.hasCard({suit:'spade'},'he')?5:10;
											if(owned.contains('dcyinlu_lequan')&&target.isHealthy()&&game.hasPlayer(current=>{
												return current!=target&&get.recoverEffect(current,player,player)>0;
											})) return 2;
											return 0;
										}
										if(att<0){
											if(owned.some(i=>i!='dcyinlu_zhangqi')) return 8;
											return 0;
										}
										if(owned.contains('dcyinlu_zhangqi')&&game.hasPlayer(current=>{
											return current!=target&&get.effect(current,{name:'losehp'},player,player)>0;
										})) return 3;
										return 1;
									}
									else{
										var targetx=ui.selected.targets[0];
										var att=get.attitude(player,targetx),att2=get.attitude(player,target);
										var owned=lib.skill.dcyinlu.derivation.filter(i=>targetx.hasMark(i));
										if(att>0){
											if(owned.contains('dcyinlu_zhangqi')) return -att2;
											if(owned.contains('dcyinlu_lequan')) return get.recoverEffect(target,player,player);
										}
										else if(att<0){
											if(owned.some(i=>i!='dcyinlu_zhangqi')) return att2;
										}
										else{
											if(owned.contains('dcyinlu_zhangqi')) return get.effect(target,{name:'losehp'},player,player);
											return att2;
										}
									}
									return Math.random();
								});
							}
							'step 1'
							if(result.bool){
								var marks=lib.skill.dcyinlu.derivation;
								var targets=result.targets,owned=marks.filter(mark=>targets[0].hasMark(mark));
								event.targets=targets;
								if(owned.length==1) event._result={bool:true,control:owned[0]};
								else{
									player.chooseControl(owned).set('prompt','引路：选择要移动'+get.translation(targets[0])+'的标记').set('choiceList',owned.map(mark=>{
										return '<div class="skill">【'+get.translation(mark)+'】</div><div>'+lib.translate[mark+'_info']+'</div>';
									})).set('displayIndex',false).set('ai',()=>{
										return _status.event.choice;
									}).set('choice',function(){
										var att=get.attitude(player,targets[0]),att2=get.attitude(player,targets[1]);
										if(att>0){
											if(owned.contains('dcyinlu_zhangqi')&&att2<0) return 'dcyinlu_zhangqi';
											if(owned.contains('dcyinlu_lequan')&&att2>0) return 'dcyinlu_lequan';
										}
										else if(att<0){
											var marksx=owned.filter(i=>i!='dcyinlu_zhangqi');
											if(marksx.length&&att2>0) return marksx[0];
											return owned[0];
										}
										else{
											if(owned.contains('dcyinlu_zhangqi')) return 'dcyinlu_zhangqi';
										}
										if(owned.length>1) owned.remove('dcyinlu_zhangqi');
										return owned[0];
									}());
								}
							}
							else{
								if(_status.connectMode) game.broadcastAll(function(){delete _status.noclearcountdown;game.stopCountChoose()});
								event.finish();
							}
							'step 2'
							if(_status.connectMode) game.broadcastAll(function(){delete _status.noclearcountdown;game.stopCountChoose()});
							var mark=result.control,count=targets[0].countMark(mark);
							player.logSkill('dcyinlu_move',targets,false);
							player.line2(targets,mark=='dcyinlu_zhangqi'?'fire':'green');
							targets[0].removeMark(mark,count);
							targets[1].addMark(mark,count);
							event.finish();
							'step 3'
							player.chooseTarget('引路：是否转移“'+get.translation(event.marks[0])+'”标记？').set('ai',target=>{
								var player=_status.event.player,mark=_status.event.mark;
								if(mark=='dcyinlu_zhangqi') return get.effect(target,{name:'losehp'},player,player)+0.1;
								if(mark=='dcyinlu_lequan') return get.recoverEffect(target,player,player)+get.attitude(player,target)/5;
								return get.attitude(player,target);
							}).set('mark',event.marks[0]);
							'step 4'
							if(result.bool){
								var target=result.targets[0];
								player.logSkill('dcyinlu_move',target);
								var count=trigger.player.countMark(event.marks[0]);
								trigger.player.removeMark(event.marks[0],count,false);
								target.addMark(event.marks[0],count);
							}
							'step 5'
							event.marks.shift();
							if(event.marks.length) event.goto(3);
						}
					},
					lequan:{
						trigger:{player:'phaseJieshuBegin'},
						direct:true,
						charlotte:true,
						filter:function(event,player){
							return player.hasMark('dcyinlu_lequan')&&game.hasPlayer(current=>current.hasSkill('dcyinlu'));
						},
						marktext:'乐',
						intro:{
							name:'乐泉',
							name2:'乐泉',
							markcount:()=>0,
							content:'结束阶段，你可以弃置一张♦牌并回复1点体力。'
						},
						content:function(){
							'step 0'
							player.chooseToDiscard('乐泉：是否弃置一张♦牌并回复1点体力？',{suit:'diamond'},'he').set('ai',card=>{
								if(_status.event.goon) return 7-get.value(card);
								return 0;
							}).set('logSkill','dcyinlu_lequan').set('goon',get.recoverEffect(player,player));
							'step 1'
							if(result.bool){
								player.recover();
							}
						}
					},
					huoxi:{
						trigger:{player:'phaseJieshuBegin'},
						direct:true,
						charlotte:true,
						filter:function(event,player){
							return player.hasMark('dcyinlu_huoxi')&&game.hasPlayer(current=>current.hasSkill('dcyinlu'));
						},
						marktext:'藿',
						intro:{
							name:'藿溪',
							name2:'藿溪',
							markcount:()=>0,
							content:'结束阶段，你可以弃置一张♥牌并摸两张牌。'
						},
						content:function(){
							'step 0'
							player.chooseToDiscard('藿溪：是否弃置一张♥牌并摸两张牌？',{suit:'heart'},'he').set('ai',card=>{
								return 6-get.value(card);
							}).set('logSkill','dcyinlu_huoxi');
							'step 1'
							if(result.bool){
								player.draw(2);
							}
						},
					},
					zhangqi:{
						trigger:{player:'phaseJieshuBegin'},
						forced:true,
						direct:true,
						charlotte:true,
						filter:function(event,player){
							return player.hasMark('dcyinlu_zhangqi')&&game.hasPlayer(current=>current.hasSkill('dcyinlu'));
						},
						marktext:'瘴',
						intro:{
							name:'瘴气',
							name2:'瘴气',
							markcount:()=>0,
							content:'锁定技。结束阶段，你须弃置一张♠牌，否则失去1点体力。'
						},
						content:function(){
							'step 0'
							player.chooseToDiscard('瘴气：弃置一张♠牌，或失去1点体力',{suit:'spade'},'he').set('ai',card=>{
								if(_status.event.goon) return 7-get.value(card);
								return 0;
							}).set('logSkill','dcyinlu_zhangqi').set('goon',get.effect(player,{name:'losehp'},player)<0);
							'step 1'
							if(!result.bool){
								player.logSkill('dcyinlu_zhangqi');
								player.loseHp();
							}
						}
					},
					yunxiang:{
						trigger:{player:['phaseJieshuBegin','damageBegin4']},
						direct:true,
						charlotte:true,
						filter:function(event,player){
							if(!game.hasPlayer(current=>current.hasSkill('dcyinlu'))) return false;
							if(event.name=='phaseJieshu') return player.hasMark('dcyinlu_yunxiang');
							return player.hasMark('dcyinlu_yunxiang')&&player.hasMark('dcyinlu_xiang');
						},
						onremove:function(player){
							delete player.storage.dcyinlu_xiang;
						},
						marktext:'芸',
						intro:{
							name:'芸香',
							name2:'芸香',
							markcount:function(storage,player){
								return player.countMark('dcyinlu_xiang');
							},
							content:function(storage,player){
								return '①结束阶段，你可以弃置一张♣牌，获得1点“芸香”值。②当你受到伤害时，你可以扣减所有“芸香”值，减少等量的伤害。<li>当前芸香值：'+player.countMark('dcyinlu_xiang');
							}
						},
						content:function(){
							'step 0'
							if(trigger.name=='phaseJieshu'){
								player.chooseToDiscard('芸香：是否弃置一张♣牌，获得1枚“香”？',{suit:'club'},'he').set('ai',card=>{
									return 6-get.value(card)+2.5*_status.event.player.countMark('dcyinlu_xiang');
								}).set('logSkill','dcyinlu_yunxiang');
							}
							else{
								player.chooseBool('芸香：是否移去所有“香”，令此伤害-'+player.countMark('dcyinlu_xiang')+'？').set('ai',()=>{
									return _status.event.bool;
								}).set('bool',get.damageEffect(player,trigger.source,player)<0);
							}
							'step 1'
							if(result.bool){
								if(trigger.name=='phaseJieshu'){
									player.addMark('dcyinlu_xiang',1,false);
									game.log(player,'获得了1点芸香值');
								}
								else{
									player.logSkill('dcyinlu_yunxiang');
									var num=player.countMark('dcyinlu_xiang');
									player.removeMark('dcyinlu_xiang',num,false);
									game.log(player,'扣减了',num,'点芸香值');
									trigger.num=Math.max(0,trigger.num-num);
								}
							}
						}
					}
				}
			},
			dcyouqi:{
				audio:2,
				trigger:{global:'loseAfter'},
				filter:function(event,player){
					if(event.getParent(3).name.indexOf('dcyinlu_')!=0||player==event.player) return false;
					return true;
				},
				derivation:'dcyouqi_faq',
				direct:true,
				forced:true,
				content:function(){
					if(Math.random()<1.25-0.25*get.distance(player,trigger.player)){
						player.logSkill('dcyouqi');
						player.gain(trigger.cards.filterInD('d'),'gain2');
					}
				},
			},
			//孙资刘放
			dcqinshen:{
				audio:2,
				trigger:{player:'phaseDiscardEnd'},
				frequent:true,
				prompt2:function(){
					return '摸'+get.cnNumber(lib.skill.dcqinshen.getNum())+'张牌';
				},
				getNum:function(){
					var list=lib.suit.slice();
					game.getGlobalHistory('cardMove',function(evt){
						if(evt.name!='lose'&&evt.name!='cardsDiscard') return false;
						if(evt.name=='lose'&&evt.position!=ui.discardPile) return false;
						for(var card of evt.cards) list.remove(get.suit(card,false));
					});
					return list.length;
				},
				filter:function(event,player){
					return lib.skill.dcqinshen.getNum()>0;
				},
				content:function(){
					player.draw(lib.skill.dcqinshen.getNum());
				}
			},
			dcweidang:{
				audio:2,
				trigger:{global:'phaseJieshuBegin'},
				getLength:function(card){
					var name=get.translation(get.name(card));
					if(name=='挟令') name='挟天子以令诸侯';
					if(name=='霹雳投石车') name='霹雳车';
					return name.length;
				},
				direct:true,
				filter:function(event,player){
					var num=lib.skill.dcqinshen.getNum();
					return event.player!=player&&(_status.connectMode?player.countCards('he'):player.hasCard(card=>lib.skill.dcweidang.getLength(card)==num,'he'));
				},
				content:function(){
					'step 0'
					var num=lib.skill.dcqinshen.getNum();
					event.num=num;
					player.chooseCard(get.prompt('dcweidang'),'将一张字数为'+num+'的牌置于牌堆底，然后获得一张字数为'+num+'的牌。若你能使用此牌，你使用之。','he',(card,player,target)=>{
						return lib.skill.dcweidang.getLength(card)==_status.event.num;
					}).set('num',num).set('ai',card=>{
						return 5-get.value(card);
					});
					'step 1'
					if(result.bool){
						player.logSkill('dcweidang'),
						player.lose(result.cards[0],ui.cardPile);
						game.broadcastAll(function(player){
							var cardx=ui.create.card();
							cardx.classList.add('infohidden');
							cardx.classList.add('infoflip');
							player.$throw(cardx,1000,'nobroadcast');
						},player);
						game.delayx();
					}
					else event.finish();
					'step 2'
					var card=get.cardPile(cardx=>lib.skill.dcweidang.getLength(cardx)==num);
					if(card){
						player.gain(card,'gain2');
						if(player.hasUseTarget(card)){
							player.chooseUseTarget(card,true);
						}
					}
				}
			},
			//三袁
			dcneifa:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				content:function(){
					'step 0'
					player.draw(3);
					player.chooseToDiscard(true,'he').set('ai',function(cardx){
						var player=_status.event.player;
						var num=0;
						var hs=player.getCards('h');
						var muniu=player.getEquip('muniu');
						if(muniu&&muniu.cards) hs=hs.concat(muniu.cards);
						if(get.type(cardx)=='basic'){
							var shas=hs.filter(function(card){
								return card!=cardx&&get.name(card,player)=='sha'&&player.hasValueTarget(card,false);
							});
							var numx=player.countCards('h',function(card){
								return get.type2(card,player)=='trick';
							});
							num+=Math.min(numx,Math.max(0,shas.length-player.getCardUsable('sha')))*0.65;
							num+=Math.min(player.getCardUsable('sha')+numx,shas.filter(function(card){
								return game.countPlayer(function(current){
									return player.canUse(card,current)&&get.effect(current,card,player,player)>0;
								})>1;
							}).length)*1.1;
							var taos=Math.min(player.maxHp-player.hp,hs.filter(function(card){
								return cardx!=card&&get.name(card,player)=='tao';
							}).length);
							num+=taos*player.getDamagedHp()*1.2;
						}
						else if(get.type2(cardx)=='trick'){
							var numx=Math.sqrt(Math.min(5,player.countCards('h',function(card){
								return get.type(card,player)=='basic';
							})));
							num+=hs.filter(function(card){
								return card!=cardx&&get.type2(card)=='trick'&&player.hasValueTarget(card);
							}).length*0.65;
						}
						else num=4;
						return num*1.5-get.value(cardx);
					});
					'step 1'
					if(result.bool&&result.cards&&result.cards.length&&get.type(result.cards[0])!='equip'){
						var name=get.type(result.cards[0])=='basic'?'dcneifa_basic':'dcneifa_trick';
						player.addTempSkill(name,'phaseUseAfter');
						var num=Math.min(5,player.countCards('h',function(cardx){
							var type=get.type(cardx,player);
							return (name=='dcneifa_basic')!=(type=='basic')&&type!='equip';
						}));
						if(num>0) player.addMark(name,num,false);
						else player.storage[name]=0;
					}
				},
				ai:{
					threaten:2.33,
				},
			},
			dcneifa_basic:{
				mark:true,
				marktext:'伐',
				onremove:true,
				intro:{
					name:'内伐 - 基本牌',
					content:'本回合内不能使用锦囊牌，且使用【杀】选择目标时可以多选择1个目标，且使用【杀】的目标次数上限+#。',
				},
				mod:{
					cardEnabled:function(card,player){
						if(get.type(card,'trick')=='trick') return false;
					},
					cardSavable:function(card,player){
						if(get.type(card,'trick')=='trick') return false;
					},
					cardUsable:function(card,player,num){
						if(card.name=='sha'){
							return num+player.countMark('dcneifa_basic');
						}
					},
				},
				trigger:{player:'useCard2'},
				filter:function(event,player){
					if(event.card.name!='sha') return false;
					return game.hasPlayer(function(current){
						return !event.targets.contains(current)&&player.canUse(event.card,current,false);
					});
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('dcneifa'),'为'+get.translation(trigger.card)+'额外指定一个目标',function(card,player,target){
						return !_status.event.sourcex.contains(target)&&player.canUse(_status.event.card,target,false);
					}).set('sourcex',trigger.targets).set('ai',function(target){
						var player=_status.event.player;
						return get.effect(target,_status.event.card,player,player);
					}).set('card',trigger.card);
					'step 1'
					if(result.bool){
						if(!event.isMine()&&!event.isOnline()) game.delayx();
						event.targets=result.targets;
					}
					else{
						event.finish();
					}
					'step 2'
					player.logSkill('dcneifa',event.targets);
					trigger.targets.addArray(event.targets);
				},
			},
			dcneifa_trick:{
				trigger:{player:'useCard2'},
				direct:true,
				mark:true,
				marktext:'伐',
				onremove:true,
				mod:{
					cardEnabled:function(card,player){
						if(get.type(card)=='basic') return false;
					},
					cardSavable:function(card,player){
						if(get.type(card)=='basic') return false;
					},
				},
				intro:{
					name:'内伐 - 锦囊牌',
					content:'本回合内不能使用基本牌，且使用普通锦囊牌选择目标时可以多选择或者取消1个目标。'
				},
				filter:function(event,player){
					if(get.type(event.card)!='trick') return false;
					if(event.targets&&event.targets.length>0) return true;
					var info=get.info(event.card);
					if(info.allowMultiple==false) return false;
					if(event.targets&&!info.multitarget){
						if(game.hasPlayer(function(current){
							return !event.targets.contains(current)&&lib.filter.targetEnabled2(event.card,player,current);
						})){
							return true;
						}
					}
					return false;
				},
				content:function(){
					'step 0'
					var prompt2='为'+get.translation(trigger.card)+'增加或减少一个目标'
					player.chooseTarget(get.prompt('dcneifa'),function(card,player,target){
						var player=_status.event.player;
						if(_status.event.targets.contains(target)) return true;
						return lib.filter.targetEnabled2(_status.event.card,player,target);
					}).set('prompt2',prompt2).set('ai',function(target){
						var trigger=_status.event.getTrigger();
						var player=_status.event.player;
						return get.effect(target,trigger.card,player,player)*(_status.event.targets.contains(target)?-1:1);
					}).set('targets',trigger.targets).set('card',trigger.card);
					'step 1'
					if(result.bool){
						if(!event.isMine()&&!event.isOnline()) game.delayx();
						event.targets=result.targets;
					}
					else{
						event.finish();
					}
					'step 2'
					if(event.targets){
						player.logSkill('dcneifa',event.targets);
						if(trigger.targets.contains(event.targets[0])) trigger.targets.removeArray(event.targets);
						else trigger.targets.addArray(event.targets);
					}
				}
			},
			//桥蕤
			dcaishou:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				filter:function(event,player){
					return player.hasCard(card=>card.hasGaintag('dcaishou_tag'),'h');
				},
				forced:true,
				locked:false,
				group:['dcaishou_draw','dcaishou_lose'],
				subfrequent:['draw'],
				content:function(){
					'step 0'
					player.discard(player.getCards('h',card=>card.hasGaintag('dcaishou_tag')));
					'step 1'
					var len=0;
					player.getHistory('lose',evt=>{
						if(evt.getParent(2)==event) len+=evt.cards.length;
					});
					if(len>Math.max(0,player.hp)&&player.maxHp<9){
						player.gainMaxHp();
					}
				},
				subSkill:{
					draw:{
						audio:'dcaishou',
						trigger:{player:'phaseJieshuBegin'},
						frequent:function(event,player){
							return player.maxHp>1;
						},
						prompt2:function(event,player){
							return '摸'+get.cnNumber(player.maxHp)+'张牌，称为“隘”';
						},
						check:function(event,player){
							return player.maxHp>1;
						},
						content:function(){
							player.draw(player.maxHp).gaintag=['dcaishou_tag'];
						}
					},
					lose:{
						audio:'dcaishou',
						trigger:{
							player:'loseAfter',
							global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
						},
						forced:true,
						locked:false,
						filter:function(event,player){
							if(player==_status.currentPhase) return false;
							var evt=event.getl(player);
							if(!evt||!evt.hs||!evt.hs.length||player.hasCard(card=>card.hasGaintag('dcaishou_tag'),'h')) return false;
							if(event.name=='lose'){
								for(var i in event.gaintag_map){
									if(event.gaintag_map[i].contains('dcaishou_tag')) return true;
								}
								return false;
							}
							return player.hasHistory('lose',function(evt){
								if(event!=evt.getParent()) return false;
								for(var i in evt.gaintag_map){
									if(evt.gaintag_map[i].contains('dcaishou_tag')) return true;
								}
								return false;
							});
						},
						content:function(){
							player.loseMaxHp();
						}
					},
				}
			},
			dcsaowei:{
				audio:2,
				trigger:{global:'useCardAfter'},
				filter:function(event,player){
					return event.player!=player&&event.card.name=='sha'&&event.targets.length&&!event.targets.contains(player)&&
						event.targets.every(current=>player.inRange(current)&&current.isIn())&&player.hasCard(card=>card.hasGaintag('dcaishou_tag'),'h');
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseCardTarget({
						position:'hs',
						prompt:get.prompt('dcsaowei'),
						prompt2:'将一张“隘”当做【杀】对'+get.translation(trigger.targets)+'使用',
						targets:trigger.targets,
						filterCard:function(card,player){
							if(get.itemtype(card)=='card'&&!card.hasGaintag('dcaishou_tag')) return false;
							return _status.event.targets.every(current=>player.canUse(get.autoViewAs({name:'sha'},[card]),current,false));
						},
						filterTarget:function(card,player,target){
							if(!_status.event.targets.contains(target)) return false;
							card=get.autoViewAs({name:'sha'},[card]);
							return lib.filter.filterTarget.apply(this,arguments);
						},
						selectTarget:-1,
						ai1:function(card){
							var player=_status.event.player;
							if(player.isHealthy()&&player.hasSkill('dcaishou')&&player.countCards('h',card=>card.hasGaintag('dcaishou_tag')==1)) return 0;
							var eff=0;
							for(var target of _status.event.targets){
								eff+=get.effect(target,get.autoViewAs({name:'sha'},[card]),player,player);
							}
							if(eff>0) return 6.5+eff/10-get.value(card);
							return 0;
						},
						ai2:()=>1,
					});
					'step 1'
					if(result.bool){
						var cards=result.cards,targets=result.targets;
						var cardx=get.autoViewAs({name:'sha'},cards);
						player.useCard(cardx,cards,targets,false,'dcsaowei');
					}
				},
			},
			//向朗
			dckanji:{
				audio:2,
				enable:'phaseUse',
				usable:2,
				filter:function(event,player){
					return player.countCards('h');
				},
				content:function(){
					'step 0'
					player.showHandcards();
					'step 1'
					var suits=[];
					player.getCards('h',card=>suits.add(get.suit(card)));
					if(suits.length==player.countCards('h')){
						player.draw(2);
						event.suitsLength=suits.length;
						player.addTempSkill('dckanji_check');
					}
				},
				subSkill:{
					check:{
						trigger:{player:'gainAfter'},
						filter:function(event,player){
							if(event.getParent(2).name!='dckanji') return false;
							var len=event.getParent(2).suitsLength;
							var suits=[];
							player.getCards('h',card=>suits.add(get.suit(card)));
							return suits.length>=4&&len<4;
						},
						charlotte:true,
						forced:true,
						popup:false,
						content:function(){
							player.skip('phaseDiscard');
							game.log(player,'跳过了','#y弃牌阶段');
						},
					}
				},
				ai:{
					order:9,
					result:{
						player:function(player,target){
							var count=player.countCards('h');
							if(count>4) return false;
							var suits=[];
							player.getCards('h',card=>suits.add(get.suit(card)));
							return suits.length==count?1:0;
						}
					}
				}
			},
			dcqianzheng:{
				audio:2,
				trigger:{target:'useCardToTargeted'},
				usable:2,
				direct:true,
				filter:function(event,player){
					return event.player!=player&&(get.type(event.card)=='trick'||event.card.name=='sha')&&player.countCards('he')>1;
				},
				content:function(){
					'step 0'
					var str='，若重铸的牌中没有'+get.translation(get.type2(trigger.card))+'牌，你于'+get.translation(trigger.cards)+'进入弃牌堆后获得之';
					player.chooseCard(get.prompt('dcqianzheng'),'重铸两张牌'+(trigger.cards.length?str:'')+'。',2,'he',(card,player,target)=>{
						var mod=game.checkMod(card,player,'unchanged','cardChongzhuable',player);
						return mod=='unchanged';
					}).set('ai',card=>{
						var val=get.value(card);
						if(get.type2(card)==_status.event.type) val+=0.5;
						return 6-val;
					}).set('type',get.type2(trigger.card));
					'step 1'
					if(result.bool){
						var cards=result.cards;
						player.logSkill('dcqianzheng');
						player.loseToDiscardpile(cards);
						player.draw(cards.length);
						if(cards.every(card=>get.type2(card)!=get.type2(trigger.card))){
							trigger.getParent().dcqianzheng=true;
							player.addTempSkill('dcqianzheng_gain');
						}
					}
					else player.storage.counttrigger.dcqianzheng--;
				},
				subSkill:{
					gain:{
						trigger:{global:'cardsDiscardAfter'},
						filter:function(event,player){
							var evt=event.getParent();
							if(evt.name!='orderingDiscard') return false;
							return evt.relatedEvent.dcqianzheng&&event.cards.filterInD('d').length;
						},
						charlotte:true,
						forced:true,
						popup:false,
						content:function(){
							player.gain(trigger.cards.filterInD('d'),'gain2');
						},
					}
				},
			},
			//秦朗
			dchaochong:{
				audio:2,
				trigger:{player:'useCardAfter'},
				filter:function(event,player){
					return player.getHandcardLimit()!=player.countCards('h');
				},
				direct:true,
				locked:false,
				content:function(){
					'step 0'
					var del=player.getHandcardLimit()-player.countCards('h');
					event.delta=del;
					if(del>0){
						player.chooseBool(get.prompt('dchaochong'),'摸'+get.cnNumber(Math.min(5,del))+'张牌，然后令你的手牌上限-1').set('ai',()=>{
							var player=_status.event.player;
							if(player.isPhaseUsing()&&player.hasCard(cardx=>player.hasUseTarget(cardx)&&player.hasValueTarget(cardx),'hs')) return false;
							return true;
						});
					}
					else if(del<0){
						player.chooseToDiscard(get.prompt('dchaochong'),'弃置'+get.cnNumber(-del)+'张手牌，然后令你的手牌上限+1',-del).set('ai',card=>{
							var player=_status.event.player;
							if(player.isPhaseUsing()&&player.hasCard(cardx=>player.hasValueTarget(cardx),'hs')) return 6-player.getUseValue(card);
							return 5-get.value(card);
						}).set('logSkill','dchaochong');
					}
					'step 1'
					if(result.bool){
						if(event.delta>0){
							player.logSkill('dchaochong');
							player.draw(Math.min(5,event.delta));
							lib.skill.dchaochong.change(player,-1);
						}
						else if(event.delta<0){
							lib.skill.dchaochong.change(player,1);
						}
					}
				},
				change:function(player,num){
					if(typeof player.storage.dchaochong!=='number') player.storage.dchaochong=0;
					if(!num) return;
					player.storage.dchaochong+=num;
					player.markSkill('dchaochong');
					game.log(player,'的手牌上限','#g'+(num>0?'+':'')+num);
				},
				markimage:'image/card/handcard.png',
				intro:{
					content:function(storage,player){
						var num=player.storage.dchaochong;
						return '手牌上限'+(num>=0?'+':'')+num;
					}
				},
				mod:{
					maxHandcard:function(player,num){
						return num+player.countMark('dchaochong');
					}
				},
				ai:{threaten:2.2}
			},
			dcjinjin:{
				audio:2,
				trigger:{
					source:'damageSource',
					player:'damageEnd',
				},
				usable:1,
				logTarget:'source',
				check:function(event,player){
					if(typeof player.storage.dchaochong!='number'||player.storage.dchaochong==0) return true;
					var evt=event.getParent('useCard');
					if(evt&&evt.player==player&&event.source==player) return false;
					if(player.isPhaseUsing()&&player.storage.dchaochong==-1) return true;
					return Math.abs(player.storage.dchaochong)>=2;
				},
				prompt2:function(event,player){
					var str='';
					if(typeof player.storage.dchaochong=='number'&&player.storage.dchaochong!=0){
						str +='重置因〖佞宠〗增加或减少的手牌上限，';
					}
					var num=Math.abs(player.countMark('dchaochong'))||1;
					if(event.source&&event.source.isIn()){
						str+='令伤害来源弃置至多'+get.cnNumber(num)+'张牌，然后你摸'+num+'-X张牌（X为其弃置的牌数）';
					}
					else str+='你摸'+get.cnNumber(num)+'张牌';
					return str;
				},
				content:function(){
					'step 0'
					var del=Math.abs(player.countMark('dchaochong'))||1;
					event.delta=del;
					player.storage.dchaochong=0;
					if(player.hasSkill('dchaochong',null,false,false)) player.markSkill('dchaochong');
					game.log(player,'重置了手牌上限');
					if(trigger.source&&trigger.source.isIn()){
						trigger.source.chooseToDiscard(get.translation(player)+'对你发动了【矜谨】','弃置至多'+get.cnNumber(del)+'张牌，然后'+get.translation(player)+'摸'+del+'-X张牌（X为你弃置的牌数）。',[1,del],'he').set('ai',card=>{
							if(_status.event.goon) return 5.5-get.value(card);
							return 0;
						}).set('goon',get.attitude(trigger.source,player)<0);
					}
					'step 1'
					var num=event.delta;
					if(result.bool) num-=result.cards.length;
					if(num>0) player.draw(num);
				},
				ai:{
					combo:'dchaochong',
					maixie:true,
					maixie_hp:true,
					threaten:0.85,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
								if(!target.hasFriend()) return;
								var num=0;
								if(typeof target.storage.dcninchong=='number') num=Math.abs(target.storage.dcninchong);
								if(num<=0) return;
								return [1,Math.min(1,num/3)];
							}
						},
					},
				},
			},
			//二傅
			dcxuewei:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('dcxuewei'),(card,player,target)=>{
						return target.hp<=player.hp;
					}).set('ai',target=>{
						var player=_status.event.player;
						return get.effect(target,{name:'tao'},player,player)+0.1;
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('dcxuewei',target);
						player.addTempSkill('dcxuewei_shelter',{player:'phaseBegin'});
						player.markAuto('dcxuewei_shelter',[target]);
					}
				},
				ai:{threaten:1.1},
				subSkill:{
					shelter:{
						audio:'dcxuewei',
						trigger:{global:'damageBegin4'},
						filter:function(event,player){
							return player.getStorage('dcxuewei_shelter').contains(event.player);
						},
						charlotte:true,
						forced:true,
						onremove:true,
						logTarget:'player',
						marktext:'卫',
						intro:{content:'保护对象：$'},
						content:function(){
							'step 0'
							trigger.cancel();
							'step 1'
							player.loseHp();
							if(trigger.player!=player) game.asyncDraw([player,trigger.player]);
							else player.draw('nodelay');
							'step 2'
							game.delayx();
						},
						ai:{
							filterDamage:true,
							skillTagFilter:function(player,tag,arg){
								if(arg&&arg.player&&arg.player.hasSkillTag('jueqing',false,player)) return false;
								return true;
							}
						},
					}
				},
			},
			dcyuguan:{
				audio:2,
				trigger:{global:'phaseEnd'},
				filter:function(event,player){
					var num=player.getDamagedHp();
					if(num==0) return false;
					return !game.hasPlayer(current=>{
						return current.getDamagedHp()>num;
					});
				},
				check:function(event,player){
					var num=player.getDamagedHp()-1;
					if(num<=0) return false;
					var list=game.filterPlayer().map(target=>{
						return get.attitude(player,target)*Math.pow(Math.max(0,target.maxHp-target.countCards('h')-1),2);
					}).sort((a,b)=>b-a);
					return list.slice(0,num).reduce((p,c)=>p+c,0)>0;
				},
				content:function(){
					'step 0'
					player.loseMaxHp();
					'step 1'
					var num=player.getDamagedHp();
					if(!player.isIn()||!num) event.finish();
					else player.chooseTarget('御关：令'+get.cnNumber(num)+'名角色将手牌摸至体力上限',Math.min(game.countPlayer(),num),true).set('ai',target=>{
						return get.attitude(_status.event.player,target)*Math.max(0.1,target.maxHp-target.countCards('h'));
					});
					'step 2'
					if(result.bool){
						var targets=result.targets.sortBySeat(_status.currentPhase);
						player.line(targets);
						for(var target of targets){
							target.drawTo(target.maxHp);
						}
					}
				}
			},
			//郑浑
			dcqiangzhi:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					if(target==player) return false;
					return target.countDiscardableCards(player,'he')+player.countDiscardableCards(player,'he')>=3;
				},
				content:function(){
					'step 0'
					var dialog=[];
					dialog.push('强峙：弃置你与'+get.translation(target)+'的共计三张牌');
					if(player.countCards('h')) dialog.addArray(['<div class="text center">你的手牌</div>',player.getCards('h')]);
					if(player.countCards('e')) dialog.addArray(['<div class="text center">你的装备</div>',player.getCards('e')]);
					if(target.countCards('h')){
						dialog.add('<div class="text center">'+get.translation(target)+'的手牌</div>');
						if(player.hasSkillTag('viewHandcard',null,target,true)) dialog.push(target.getCards('h'));
						else dialog.push([target.getCards('h'),'blank']);
					}
					if(target.countCards('e')) dialog.addArray(['<div class="text center">'+get.translation(target)+'的装备</div>',target.getCards('e')]);
					player.chooseButton(3,true).set('createDialog',dialog).set('filterButton',button=>{
						if(!lib.filter.canBeDiscarded(button.link,_status.event.player,get.owner(button.link))) return false;
						return true;
					}).set('filterOk',()=>{
						return ui.selected.buttons.length==3;
					}).set('ai',button=>{
						var player=_status.event.player;
						var target=_status.event.getParent().target;
						var card=button.link;
						if(get.owner(card)==player){
							if(_status.event.damage) return 15-get.value(card);
							if(player.hp>=3||get.damageEffect(player,target,player)>=0||player.hasSkill('dcpitian')&&player.getHandcardLimit()-player.countCards('h')>=1&&player.hp>1) return 0;
							if(ui.selected.buttons.length==0) return 10-get.value(card);
							return 0;
						}
						else{
							if(_status.event.damage) return 0;
							return -(get.sgnAttitude(player,target)||1)*get.value(card);
						}
					}).set('damage',get.damageEffect(target,player,player)>10&&player.countCards('he',card=>{
						return lib.filter.canBeDiscarded(card,player,player)&&get.value(card)<5;
					})>=3);
					'step 1'
					if(result.bool){
						var links=result.links;
						var list1=[],list2=[];
						event.players=[player,target];
						for(var card of links){
							if(get.owner(card)==player) list1.push(card);
							else list2.push(card);
						}
						if(list1.length&&list2.length){
							game.loseAsync({
								lose_list:[
									[player,list1],
									[target,list2]
								],
								discarder:player,
							}).setContent('discardMultiple');
							event.finish();
						}
						else if(list2.length) target.discard(list2);
						else player.discard(list1);
						if(list2.length>=3) event.players.reverse();
					}
					else event.finish();
					'step 2'
					event.players[0].line(event.players[1]);
					event.players[1].damage(event.players[0]);
				},
				ai:{
					expose:0.2,
					order:4,
					result:{
						target:function(player,target){
							return get.effect(target,{name:'guohe_copy2'},player,target)/2*(target.countDiscardableCards(player,'he')>=2?1.25:1)+get.damageEffect(target,player,target)/3;
						}
					}
				}
			},
			dcpitian:{
				audio:2,
				trigger:{
					player:['loseAfter','damageEnd'],
					global:'loseAsyncAfter',
				},
				forced:true,
				locked:false,
				group:'dcpitian_draw',
				filter:function(event,player){
					if(event.name=='damage') return true;
					return event.type=='discard'&&event.getl(player).cards2.length>0;
				},
				content:function(){
					player.addMark('dcpitian_handcard',1,false);
					player.addSkill('dcpitian_handcard');
					game.log(player,'的手牌上限','#y+1');
				},
				subSkill:{
					draw:{
						audio:'dcpitian',
						trigger:{player:'phaseJieshuBegin'},
						filter:function(event,player){
							return player.countCards('h')<player.getHandcardLimit();
						},
						prompt2:function(event,player){
							return '摸'+get.cnNumber(Math.min(5,player.getHandcardLimit()-player.countCards('h')))+'张牌，重置因〖辟田〗增加的手牌上限';
						},
						check:function(event,player){
							return player.getHandcardLimit()-player.countCards('h')>Math.min(2,player.hp-1);
						},
						content:function(){
							'step 0'
							var num=Math.min(5,player.getHandcardLimit()-player.countCards('h'));
							if(num>0) player.draw(num);
							'step 1'
							player.removeMark('dcpitian_handcard',player.countMark('dcpitian_handcard'),false);
							game.log(player,'重置了','#g【辟田】','增加的手牌上限');
						}
					},
					handcard:{
						markimage:'image/card/handcard.png',
						intro:{
							content:function(storage,player){
								return '手牌上限+'+storage;
							}
						},
						charlotte:true,
						mod:{
							maxHandcard:function(player,num){
								return num+player.countMark('dcpitian_handcard');
							}
						},
					}
				},
				ai:{
					effect:{
						target:function (card,player,target){
							if(get.tag(card,'discard')) return 0.9;
							if(get.tag(card,'damage')) return 0.95;
						},
					},
				},
			},
			//新服二赵
			dcqingren:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				frequent:true,
				filter:function(event,player){
					return player.hasHistory('useSkill',evt=>['yizan_use','yizan_use_backup'].contains(evt.sourceSkill||evt.skill));
				},
				content:function(){
					player.draw(player.getHistory('useSkill',evt=>['yizan_use','yizan_use_backup'].contains(evt.sourceSkill||evt.skill)).length)
				},
			},
			dclongyuan:{
				audio:'xinfu_longyuan',
				forced:true,
				unique:true,
				juexingji:true,
				trigger:{
					global:'phaseEnd',
				},
				skillAnimation:true,
				animationColor:'orange',
				filter:function(event,player){
					return player.countMark('yizan_use')>=3;
				},
				content:function(){
					player.awakenSkill('dclongyuan');
					player.draw(2);
					player.recover();
					player.storage.yizan=true;
				},
				derivation:'yizan_rewrite',
			},
			//黄皓
			dcqinqing:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				filter:function(event,player){
					var zhu=game.filterPlayer(current=>current.getSeatNum()==1)[0];
					if(!zhu||!zhu.isIn()) return false;
					return game.hasPlayer(current=>{
						return current!=player&&current.inRange(zhu);
					});
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('dcqinqing'),function(card,player,target){
						var zhu=game.filterPlayer(current=>current.getSeatNum()==1)[0];
						return target!=player&&target.inRange(zhu)&&target.countDiscardableCards(player,'he')>0;
					}).set('ai',function(target){
						var zhu=game.filterPlayer(current=>current.getSeatNum()==1)[0];
						var he=target.countCards('he');
						if(get.attitude(_status.event.player,target)>0){
							if(target.countCards('h')>zhu.countCards('h')+1) return 0.1;
						}
						else{
							if(he>zhu.countCards('h')+1) return 2;
							if(he>0) return 1;
						}
						return 0;
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('dcqinqing',target);
						if(target.countCards('he')) player.discardPlayerCard(target,'he',true);
					}
					else{
						event.finish();
					}
					'step 2'
					var zhu=game.filterPlayer(current=>current.getSeatNum()==1)[0];
					if(zhu&&zhu.isIn()){
						if(target.countCards('h')>zhu.countCards('h')) player.draw();
					}
				}
			},
			dccunwei:{
				audio:2,
				trigger:{target:'useCardToTargeted'},
				forced:true,
				filter:function(event,player){
					return event.player!=player&&get.type2(event.card)=='trick'&&(event.targets.length==1||player.countCards('he')>0);
				},
				content:function(){
					if(trigger.targets.length==1) player.draw();
					else if(player.countCards('he')>0) player.chooseToDiscard('he',true,'存畏：请弃置一张牌');
				}
			},
			//刘辟
			dcjuying:{
				audio:2,
				trigger:{player:'phaseUseEnd'},
				filter:function(event,player){
					return player.getCardUsable('sha',true)>player.getHistory('useCard',evt=>{
						return evt.getParent('phaseUse')==event&&evt.card.name=='sha'&&evt.addCount!==false;
					}).length;
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseButton([
						get.prompt('dcjuying'),
						[[
							['sha','你于下回合使用【杀】的次数上限+1'],
							['hand','本回合手牌上限+2'],
							['draw','摸三张牌'],
						],'textbutton']
					]).set('ai',function(button){
						var player=_status.event.player,choice=button.link;
						if(choice=='draw') return 10;
						if(choice=='sha') return 9;
						var del=3-player.hp;
						if(choice=='hand'&&player.needsToDiscard()>0&&del<=0) return 8;
						return 0;
					}).set('selectButton',[1,3]);
					'step 1'
					if(result.bool){
						player.logSkill('dcjuying');
						var choices=result.links;
						event.choices=choices;
						if(choices.contains('sha')){
							player.addMark('dcjuying_sha',1,false);
							player.addSkill('dcjuying_sha');
						}
						if(choices.contains('hand')){
							player.addMark('dcjuying_hand',1,false);
							player.addTempSkill('dcjuying_hand');
						}
						if(choices.contains('draw')){
							player.draw(3);
						}
					}
					else event.finish();
					'step 2'
					var num=event.choices.length-Math.max(0,player.hp);
					if(num>0){
						player.chooseToDiscard(num,true,'he');
					}
				},
				ai:{
					effect:{
						player_use:function(card,player,target){
							if(typeof card=='object'&&player.isPhaseUsing()&&card.name=='sha'&&player.getCardUsable('sha')==1) return 'zeroplayertarget';
						},
						target_use:function(card,player,target){
							if(card.name=='jiu'&&player.getCardUsable('sha')==2) return [1,1];
						}
					},
				},
				subSkill:{
					sha:{
						trigger:{player:'phaseBegin'},
						filter:function(event,player){
							return player.countMark('dcjuying_sha')>0;
						},
						silent:true,
						firstDo:true,
						charlotte:true,
						onremove:true,
						content:function(){
							player.addMark('dcjuying_effect',player.countMark('dcjuying_sha'),false);
							player.addTempSkill('dcjuying_effect');
							player.removeSkill('dcjuying_sha');
						},
						intro:{content:'下回合使用【杀】的次数上限+#'}
					},
					effect:{
						onremove:true,
						charlotte:true,
						mod:{
							cardUsable:function(card,player,num){
								if(card.name=='sha') return num+player.countMark('dcjuying_effect');
							},
						},
						intro:{content:'本回合使用【杀】的次数上限+#'}
					},
					hand:{
						onremove:true,
						charlotte:true,
						mod:{
							maxHandcard:function(player,num){
								return num+2*player.countMark('dcjuying_hand');
							}
						}
					}
				},
			},
			//新服加强魏贾诩
			dcjianshu:{
				audio:'jianshu',
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('h',{color:'black'})>0;
				},
				filterTarget:function(card,player,target){
					if(target==player) return false;
					if(ui.selected.targets.length){
						return ui.selected.targets[0]!=target&&!ui.selected.targets[0].hasSkillTag('noCompareSource')&&target.countCards('h')
						&&!target.hasSkillTag('noCompareTarget');
					}
					return true;
				},
				targetprompt:['发起者','拼点目标'],
				filterCard:{color:'black'},
				discard:false,
				lose:false,
				delay:false,
				check:function(card){
					if(_status.event.player.hp==1) return 8-get.value(card);
					return 6-get.value(card);
				},
				selectTarget:2,
				multitarget:true,
				content:function(){
					'step 0'
					player.give(cards,targets[0],'give');
					'step 1'
					targets[0].chooseToCompare(targets[1]);
					'step 2'
					player.addTempSkill('dcjianshu_check','phaseUseAfter');
					if(result.bool){
						var cards=targets[0].getCards('he',function(card){
							return lib.filter.cardDiscardable(card,targets[0],'dcjianshu');
						});
						if(cards.length>0) targets[0].discard(cards.randomGet());
						targets[1].loseHp();
					}
					else if(result.tie){
						targets[0].loseHp();
						targets[1].loseHp();
					}
					else{
						var cards=targets[1].getCards('he',function(card){
							return lib.filter.cardDiscardable(card,targets[1],'dcjianshu');
						});
						if(cards.length>0) targets[1].discard(cards.randomGet());
						targets[0].loseHp();
					}
				},
				subSkill:{
					check:{
						trigger:{global:'dieAfter'},
						charlotte:true,
						forced:true,
						popup:false,
						filter:function(event,player){
							return event.getParent(3).name=='dcjianshu';
						},
						content:function(){
							delete player.getStat('skill').dcjianshu;
						}
					}
				},
				ai:{
					expose:0.4,
					order:4,
					result:{
						target:function(player,target){
							if(ui.selected.targets.length) return -1;
							return -0.5;
						}
					}
				}
			},
			dcyongdi:{
				audio:'yongdi',
				audioname:['xinping'],
				unique:true,
				limited:true,
				enable:'phaseUse',
				filterTarget:function(card,player,target){
					return target.hasSex('male');
				},
				animationColor:'thunder',
				skillAnimation:'legend',
				mark:true,
				intro:{
					content:'limited'
				},
				content:function(){
					'step 0'
					player.awakenSkill('dcyongdi');
					//player.logSkill('dcyongdi',target);
					if(!game.hasPlayer(current=>current.maxHp<target.maxHp)){
						target.gainMaxHp();
					}
					'step 1'
					if(target.isMinHp()){
						target.recover();
					}
					'step 2'
					if(target.isMinHandcard()){
						target.draw(Math.min(5,target.maxHp));
					}
					'step 3'
					game.delayx();
				},
				ai:{
					expose:0.3,
					order:1,
					result:{
						target:function(player,target){
							var val=0;
							var bool1=!game.hasPlayer(current=>current.maxHp<target.maxHp),bool2=target.isMinHp(),bool3=target.isMinHandcard();
							if(bool1) val+=5;
							if(bool2){
								if(bool1) target.maxHp++;
								val+=get.recoverEffect(target,player,player);
								if(bool1) target.maxHp--;
							}
							if(bool3){
								var num=Math.max(0,Math.min(5,target.maxHp+(bool1?1:0)));
								val+=5*num;
							}
							return val;
						}
					}
				}
			},
			//雷普
			dcsilve:{
				audio:2,
				trigger:{
					player:'enterGame',
					global:'phaseBefore',
				},
				forced:true,
				locked:false,
				direct:true,
				onremove:['dcsilve','dcsilve_self'],
				filter:function(event,player){
					return game.hasPlayer(current=>current!=player)&&(event.name!='phase'||game.phaseNumber==0);
				},
				content:function(){
					'step 0'
					player.chooseTarget('私掠：请选择一名其他角色','选择一名其他角色（暂时仅你可见），称为“私掠”角色，且你获得后续效果',true,(card,player,target)=>{
						return target!=player&&!player.getStorage('dcsilve').contains(target);
					}).set('ai',target=>{
						var att=get.attitude(_status.event.player,target);
						if(att>0) return att+1;
						if(att==0) return Math.random();
						return att;
					}).set('animate',false);
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('dcsilve');
						player.markAuto('dcsilve',[target]);
						player.addSkill('dcsilve_rob');
						player.addSkill('dcsilve_revenge');
						target.addSkill('dcsilve_target');
						if(!target.storage.dcsilve_target) target.storage.dcsilve_target=[];
						target.storage.dcsilve_target.push(player);
					}
				},
				subSkill:{
					rob:{
						audio:'dcsilve',
						trigger:{global:'damageSource'},
						filter:function(event,player){
							if(!player.getStorage('dcsilve').contains(event.source)) return false;
							if(!event.player.isIn()||event.player==player) return false;
							if(player.getStorage('dcsilve_robbed').contains(event.player)) return false;
							return event.player.countCards('he')>0;
						},
						charlotte:true,
						prompt2:function(event,player){
							return '获得'+get.translation(event.player)+'一张牌';
						},
						logTarget:'player',
						content:function(){
							player.addTempSkill('dcsilve_robbed');
							player.markAuto('dcsilve_self',[trigger.player]);
							if(trigger.player.countGainableCards(player,'he')>0){
								player.markAuto('dcsilve_robbed',[trigger.player]);
								player.gainPlayerCard(trigger.player,'he',true);
							}
							if(trigger.source&&trigger.source!=player) trigger.source.markSkill('dcsilve_target');
						}
					},
					revenge:{
						audio:'dcsilve',
						trigger:{global:'damageEnd'},
						filter:function(event,player){
							if(!player.getStorage('dcsilve').contains(event.player)) return false;
							if(!event.player.isIn()||!event.source||!event.source.isIn()||event.source==player) return false;
							return true;
						},
						forced:true,
						locked:false,
						charlotte:true,
						direct:true,
						content:function(){
							'step 0'
							if(trigger.player&&trigger.player!=player) trigger.player.markSkill('dcsilve_target');
							player.markAuto('dcsilve_self',[trigger.player]);
							player.chooseToUse('私掠：对'+get.translation(trigger.source)+'使用一张【杀】，或弃置一张手牌',function(card,player,event){
								if(get.name(card)!='sha') return false;
								return lib.filter.filterCard.apply(this,arguments);
							}).set('targetRequired',true).set('complexSelect',true).set('filterTarget',function(card,player,target){
								if(target!=_status.event.source&&!ui.selected.targets.contains(_status.event.source)) return false;
								return lib.filter.targetEnabled.apply(this,arguments);
							}).set('source',trigger.source).set('logSkill','dcsilve_revenge');
							'step 1'
							if(!result.bool){
								if(player.countCards('h')>0) player.chooseToDiscard('h',true).set('logSkill','dcsilve_revenge');
							}
						}
					},
					self:{
						marktext:'私',
						intro:{
							name:'私掠',
							content:function(storage,player){
								if(!storage||!storage.length) return '没有打劫对象';
								if(storage[0]==player) return '已绑定'+get.translation(player)+'自己';
								return '打劫对象：'+get.translation(storage);
							}
						},
					},
					target:{
						marktext:'掠',
						intro:{
							name:'私掠',
							content:function(storage,player){
								return '被'+get.translation(storage)+'盯上了！';
							}
						}
					},
					robbed:{onremove:true,charlotte:true},
				}
			},
			dcshuaijie:{
				audio:2,
				enable:'phaseUse',
				limited:true,
				skillAnimation:true,
				animationColor:'thunder',
				filter:function(event,player){
					var targets=player.getStorage('dcsilve').filter(i=>i.isIn());
					if(!targets.length) return true;
					return targets.filter(target=>{
						return player.hp>target.hp&&player.countCards('e')>target.countCards('e');
					}).length==targets.length;
				},
				content:function(){
					'step 0'
					player.awakenSkill('dcshuaijie');
					player.loseMaxHp();
					var choices=[];
					var choiceList=[
						'获得“私掠”角色至多三张牌',
						'从牌堆中获得三张类型各不相同的牌'
					];
					var targets=player.getStorage('dcsilve').filter(i=>i.isIn());
					event.targets=targets;
					if(targets.length) choices.push('选项一');
					else choiceList[0]='<span style="opacity:0.5; ">'+choiceList[0]+'</span>';
					choices.push('选项二');
					player.chooseControl(choices).set('prompt','衰劫：选择一项').set('choiceList',choiceList).set('ai',()=>_status.event.choice).set('choice',function(){
						var eff=0;
						for(var target of targets){
							eff+=get.effect(target,{name:'shunshou_copy2'},player,player)*2;
						}
						eff-=get.effect(player,{name:'dongzhuxianji'},player,player);
						return eff>0&&choices.contains('选项一')?'选项一':'选项二';
					}());
					'step 1'
					if(result.control=='选项一'){
						if(targets.length){
							for(var target of targets){
								if(target.countGainableCards(player,'he')>0) {
									player.line(target);
									player.gainPlayerCard(target,'he',true,[1,3]);
								}
							}
						}
					}
					else{
						var cards=[];
						for(var i=0;i<3;i++){
							var card=get.cardPile(cardx=>{
								return cards.filter(cardxx=>get.type2(cardxx)==get.type2(cardx)).length==0;
							});
							if(card) cards.push(card);
						}
						if(cards.length) player.gain(cards,'gain2');
					}
					'step 2'
					var targets=player.getStorage('dcsilve').filter(i=>i.isIn());
					for(var target of targets){
						target.unmarkAuto('dcsilve_target',[player]);
					}
					delete player.storage.dcsilve;
					delete player.storage.dcsilve_self;
					player.markAuto('dcsilve',[player]);
					player.markAuto('dcsilve_self',[player]);
				},
				ai:{
					combo:'dcsilve',
					order:8,
					result:{
						player:function(player){
							var targets=player.getStorage('dcsilve').filter(i=>i.isIn());
							if(!targets.length) return 1;
							var att=0;
							targets.forEach(i=>att+=get.attitude(player,i));
							if(att<0) return 1;
							return 0;
						}
					}
				}
			},
			//庞会
			dcyiyong:{
				audio:2,
				trigger:{
					source:'damageBegin1',
				},
				usable:2,
				filter:function(event,player){
					return player.countDiscardableCards(player,'he')>0&&player!=event.player;
				},
				check:function(event,player){
					return get.attitude(player,event.player)<0&&player.countCards('he',card=>lib.filter.cardDiscardable(card,player,'dcyiyong')&&get.value(card,player)<7)>0;
				},
				logTarget:'player',
				content:function(){
					'step 0'
					event.list=[player];
					event.cards0=[];event.cards1=[];
					if(trigger.player.countDiscardableCards(trigger.player,'he')>0){
						event.list.push(trigger.player);
					}
					if(!event.isMine()&&!event.isOnline()) game.delayx();
					player.chooseCardOL(event.list,'he',true,[1,Infinity],'异勇：弃置任意张牌',(card,player,target)=>{
						return lib.filter.cardDiscardable(card,player,'dcyiyong');
					}).set('ai',card=>{
						var evt=_status.event.getParent(2);
						var source=evt.player,player=_status.event.player,target=evt.list[1];
						if(!target) return get.unuseful(card);
						if(player==source){
							var total=0,need=0;
							target.countCards('he',card=>{
								if(lib.filter.cardDiscardable(card,target,'dcyiyong')&&get.value(card)<5) need+=get.number(card);
							});
							for(var i of ui.selected.cards) total+=get.number(i);
							if(total>=need+5) return 0;
							var val=6;
							if(target.hp<=2&&!target.hasSkillTag('filterDamage',null,{
								player:player,
								card:evt.getTrigger().card,
							})) val+=2+get.number(card)/5;
							if(target.countCards('he',card=>get.value(card)<5)>=3) val-=3+get.number(card)/5;
							return val-get.value(card);
						}
						if(ui.selected.cards.length>1&&ui.selected.cards.length+2>=source.countCards('he')) return 0;
						if(player.hp<=2&&!target.hasSkillTag('filterDamage',null,{
							player:player,
							card:evt.getTrigger().card,
						})) return 10-get.value(card);
						return 5-get.value(card);
					});
					'step 1'
					var lose_list=[],cards=[];
					for(var i=0; i<result.length; i++){
						var current=event.list[i],cards2=result[i].cards;
						cards.push(cards2);
						event['cards'+i]=cards2;
						event.cards=cards;
						lose_list.push([current,cards2]);
					}
					game.loseAsync({lose_list:lose_list}).setContent('discardMultiple');
					'step 2'
					var getn=function(cards){
						return cards.map(i=>get.number(i,false)).reduce((p,c)=>p+c,0)
					}
					var num0=getn(event.cards0),num1=getn(event.cards1);
					if(num0<=num1){
						player.draw(event.cards1.length);
					}
					if(num0>=num1){
						trigger.num++;
					}
				}
			},
			//乐就
			dccuijin:{
				audio:2,
				trigger:{global:'useCard'},
				direct:true,
				filter:function(event,player){
					return event.card.name=='sha'&&(event.player==player||player.inRange(event.player))&&player.countCards('he')>0;
				},
				content:function(){
					'step 0'
					if(player!=game.me&&!player.isOnline()) game.delayx();
					var target=trigger.player;
					event.target=target;
					player.chooseToDiscard('he',get.prompt('dccuijin',target),'弃置一张牌并令'+get.translation(trigger.player)+'使用的【杀】伤害+1，但若其未造成伤害，则你摸一张牌并对其造成1点伤害。').set('ai',function(card){
						if(_status.event.goon) return 7-get.value(card);
						return 0;
					}).set('goon',function(){
						var d1=true;
						if(trigger.player.hasSkill('jueqing')||trigger.player.hasSkill('gangzhi')) d1=false
						for(var target of trigger.targets){
							if(!target.mayHaveShan()||trigger.player.hasSkillTag('directHit_ai',true,{
								target:target,
								card:trigger.card,
							},true)){
								if(!target.hasSkill('gangzhi')) d1=false;
								if(!target.hasSkillTag('filterDamage',null,{
									player:trigger.player,
									card:trigger.card,
								})&&get.attitude(player,target)<0) return true;
							}
						}
						if(d1) return get.damageEffect(trigger.player,player,player)>0;
						return false;
					}()).logSkill=['dccuijin',target];
					'step 1'
					if(result.bool){
						if(typeof trigger.baseDamage!='number') trigger.baseDamage=1;
						trigger.baseDamage++;
						player.addSkill('dccuijin_damage');
						player.markAuto('dccuijin_damage',[trigger.card]);
						if(!player.storage.dccuijin_map) player.storage.dccuijin_map={};
						player.storage.dccuijin_map[trigger.card.cardid]=trigger.targets.slice();
					}
				},
				subSkill:{
					damage:{
						trigger:{
							global:['damage','damageCancelled','damageZero','shaMiss','useCardToExcluded','useCardToEnd','eventNeutralized','useCardAfter','shaCancelled'],
						},
						forced:true,
						silent:true,
						firstDo:true,
						charlotte:true,
						onremove:true,
						filter:function(event,player,name){
							if(!event.card) return false;
							var cards=player.getStorage('dccuijin_damage');
							if(!cards.contains(event.card)) return false;
							return true;
						},
						content:function(){
							'step 0'
							var card=trigger.card;
							if(event.triggername=='useCardAfter'){
								var cards=player.getStorage('dccuijin_damage');
								cards=cards.remove(card);
								if(!cards.length){
									player.removeSkill('dccuijin_damage');
									delete player.storage.dccuijin_map;
								}
								else delete player.storage.dccuijin_map[card.cardid];
								event.finish();
							}
							else{
								var target,source;
								if(trigger.name.indexOf('damage')==0){
									target=trigger.player;
									source=trigger.source;
								}
								else{
									target=trigger.target;
									source=trigger.player;
								}
								if(player.storage.dccuijin_map[card.cardid].contains(target)&&!target.hasHistory('damage',evt=>{
									return evt.card==card;
								})){
									player.logSkill('dccuijin_damage',source);
									player.storage.dccuijin_map[card.cardid].remove(target);
									player.draw();
									if(source&&source.isIn()){
										player.line(trigger.player,'green');
										trigger.player.damage();
									}
								}
							}
							'step 1'
							game.delayx();
						},
					},
				},
			},
			//陈矫
			dcxieshou:{
				trigger:{
					global:'damageEnd',
				},
				usable:1,
				filter:function(event,player){
					return get.distance(player,event.player)<=2&&event.player.isIn();
				},
				check:function(event,player){
					return get.attitude(player,event.player)>4;
				},
				locked:false,
				logTarget:'player',
				onremove:true,
				change:function(player,num){
					player.addSkill('dcxieshoux');
					if(typeof player.storage.dcxieshoux!=='number') player.storage.dcxieshoux=0;
					if(!num) return;
					player.storage.dcxieshoux+=num;
					if(player.storage.dcxieshoux!=0) player.markSkill('dcxieshoux');
					else player.unmarkSkill('dcxieshoux');
					game.log(player,'的手牌上限',(num>0?'+':'')+num);
				},
				content:function(){
					'step 0'
					lib.skill.dcxieshou.change(player,-1);
					'step 1'
					var list=[],target=trigger.player;
					event.target=target;
					var choiceList=['回复1点体力','复原，摸两张牌'];
					if(target.getDamagedHp()==0) choiceList[0]='<span style="opacity:0.5; ">'+choiceList[0]+'</span>';
					else list.push('选项一');
					list.push('选项二');
					target.chooseControl(list).set('choiceList',choiceList).set('prompt',get.translation(player)+'对你发动了【协守】，请选择一项');
					'step 2'
					if(result.control=='选项一'){
						target.recover();
					}
					else {
						target.link(false);
						target.draw(2);
					}
				},
				ai:{
					expose:0.3,
				},
			},
			dcxieshoux:{
				markimage:'image/card/handcard.png',
				intro:{
					content:function(storage,player){
						var num=player.storage.dcxieshoux;
						return '手牌上限'+(num >= 0?'+':'')+num;
					}
				},
				charlotte:true,
				mod:{
					maxHandcard:function(player,num){
						return num+(player.storage.dcxieshoux||0);
					}
				},
			},
			dcqingyan:{
				trigger:{
					target:'useCardToTargeted',
				},
				filter:function(event,player){
					return event.player!=player&&get.color(event.card)=='black';
				},
				usable:2,
				direct:true,
				content:function(){
					'step 0'
					if(player.countCards('h')<player.hp){
						player.chooseBool(get.prompt('dcqingyan'),'将手牌摸至体力上限（摸'+get.cnNumber(player.maxHp-player.countCards('h'))+'张牌）').set('ai',()=>1);
					}else{
						player.chooseToDiscard(get.prompt('dcqingyan'),'弃置一张手牌令你的手牌上限+1').set('ai',card=>6-get.value(card)).set('logSkill','dcqingyan');
					}
					'step 1'
					if(result.bool){
						if(result.cards&&result.cards.length){
							lib.skill.dcxieshou.change(player,1);
						}else{
							player.logSkill('dcqingyan');
							player.drawTo(player.maxHp);
						}
					} else player.storage.counttrigger.dcqingyan--;
				}
			},
			dcqizi:{
				mod:{
					playerEnabled:function(card,player,target){
						if(get.distance(player,target)>2&&card.name=='tao'&&target==_status.event.dying) return false;
					},
				}
			},
			//公孙度
			dczhenze:{
				audio:2,
				trigger:{player:'phaseDiscardBegin'},
				direct:true,
				content:function(){
					'step 0'
					var getCond=(player)=>Math.sign(player.countCards('h')-Math.max(0,player.hp));
					var me=getCond(player);
					var recovers=game.filterPlayer(current=>getCond(current)==me),loses=game.filterPlayer().removeArray(recovers);
					event.recovers=recovers; event.loses=loses;
					var list=[];
					if(loses.length) list.push('选项一');
					if(recovers.length) list.push('选项二');
					list.push('cancel2');
					var sign=[['≥','＜'],['≠','＝'],['≤','＞']];
					var choiceList=[
						'令所有手牌数'+sign[me+1][0]+'体力值的角色失去1点体力'+(loses.length?'（'+get.translation(loses)+'）':''),
						'令所有手牌数'+sign[me+1][1]+'体力值的角色回复1点体力'+(recovers.length?'（'+get.translation(recovers)+'）':'')
					];
					if(!loses.length) choiceList[0]='<span style="opacity:0.5">'+choiceList[0]+'</span>';
					if(!recovers.length) choiceList[1]='<span style="opacity:0.5">'+choiceList[1]+'</span>';
					player.chooseControl(list).set('choiceList',choiceList).set('prompt',get.prompt('dczhenze')).set('ai',()=>_status.event.choice).set('choice',(()=>{
						var effect=0;
						if(list.length==2){
							if(list.contains('选项一')){
								loses.forEach(i=>effect+=get.effect(i,{name:'losehp'},player,player));
								if(effect>0) return '选项一';
							}else{
								recovers.forEach(i=>effect+=get.recoverEffect(i,player,player));
								if(effect>0) return '选项二';
							}
						}else{
							loses.forEach(i=>effect-=get.effect(i,{name:'losehp'},player,player));
							recovers.forEach(i=>effect+=get.recoverEffect(i,player,player));
							if(effect>0) return '选项二';
							return '选项一';
						}
					})());
					'step 1'
					if(result.control=='cancel2'){
						event.finish();
					}
					else {
						var lose=result.control=='选项一',targets=event[lose?'loses':'recovers'];
						player.logSkill('dczhenze',targets);
						for(var i of targets){
							i[lose?'loseHp':'recover']();
						}
					}
				}
			},
			dcanliao:{
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					if((player.getStat().skill.dcanliao||0)>=game.countPlayer(current=>current.group=='qun')) return false;
					return true;
				},
				filterTarget:function(card,player,target){
					return target.countCards('he');
				},
				content:function(){
					'step 0'
					player.choosePlayerCard(target,'he',true).set('filterButton',function(button){
						var player=_status.event.player,card=button.link;
						if(get.owner(card)==player){
							var mod=game.checkMod(card,player,'unchanged','cardChongzhuable',player);
							if(mod!='unchanged') return mod;
						}
						return true;
					}).set('ai',function(card){
						if(get.attitude(_status.event.player,_status.event.getParent().target)>=0) return -get.buttonValue(card);
						return get.buttonValue(card);
					});
					'step 1'
					if(result.bool){
						target.loseToDiscardpile(result.links);
						target.draw();
					}
				},
				ai:{
					expose:0.1,
					result:{
						target:function(player,target){
							if(target.hasCard(card=>get.value(card)>=6,'e')&&get.attitude(player,target)<0) return -1;
							return 1;
						}
					}
				}
			},
			//王烈
			dcchongwang:{
				audio:2,
				trigger:{global:'useCard'},
				direct:true,
				filter:function(event,player){
					if(player==event.player) return false;
					var type=get.type(event.card);
					if(type!='basic'&&type!='trick') return false;
					var history=game.getAllGlobalHistory('useCard');
					var index=history.indexOf(event);
					if(index>0) return history[index-1].player==player;
					return false;
				},
				content:function(){
					'step 0'
					var source=trigger.player;
					var list=[['exclude','令'+get.translation(trigger.card)+'无效']];
					var cards=trigger.cards.filterInD();
					if(source.isIn()&&cards.length>0) list.push(['gain','令'+get.translation(source)+'收回'+get.translation(cards)]);
					player.chooseButton([
						get.prompt('dcchongwang',source),
						[list,'textbutton'],
						'noforcebutton',
					]).set('ai',function(button){
						var player=_status.event.player,choice=button.link;
						var evt=_status.event.getTrigger();
						if(choice=='exclude'){
							var effect=0;
							if(!evt.targets.length&&get.info(evt.card,false).notarget) effect-=get.effect(evt.player,evt.card,evt.player,player);
							for(var i of evt.targets){
								effect-=get.effect(i,evt.card,evt.player,player);
							}
							return effect;
						}
						else{
							var cards=evt.cards.filterInD();
							return get.value(cards,evt.player)*get.attitude(player,evt.player);
						}
						return 0;
					})
					'step 1'
					if(result.bool){
						if(!event.isMine()&&!event.isOnline()) game.delayx();
					}
					else event.finish();
					'step 2'
					if(result.bool){
						player.logSkill('dcchongwang',trigger.player);
						if(result.links[0]=='gain'){
							player.addTempSkill('dcchongwang_gain');
							trigger._dcchongwang=true;
						}
						else{
							trigger.targets.length=0;
							trigger.all_excluded=true;
							game.log(trigger.card,'被无效了');
						}
					}
				},
				ai:{
					threaten:3.5,
					directHit_ai:true,
				},
				subSkill:{
					gain:{
						trigger:{global:'useCardAfter'},
						charlotte:true,
						forced:true,
						popup:false,
						filter:function(event,player){
							return event._dcchongwang;
						},
						content:function(){
							trigger.player.gain(trigger.cards.filterInD(),'gain2');
						}
					}
				}
			},
			dchuagui:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				direct:true,
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current!=player&&current.countCards('he')>0;
					});
				},
				content:function(){
					'step 0'
					var min=Math.max.apply(Math,game.filterPlayer().map(function(current){
						return 1+current.getFriends().length;
					}));
					var max=Math.min(min,game.countPlayer(function(current){
						return current!=player&&current.countCards('he')>0;
					}));
					player.chooseTarget(get.prompt('dchuagui'),'令至多'+get.cnNumber(max)+'名角色进行囚徒困境选择',[1,max],function(card,player,target){
						return target!=player&&target.countCards('he')>0;
					}).set('animate',false).set('ai',function(target){
						return -get.attitude(_status.event.player,target);
					});
					'step 1'
					if(result.bool){
						player.logSkill('dchuagui');
						event.players=result.targets.slice(0);
						event._global_waiting=true;
					}
					else event.finish();
					'step 2'
					var send=function(source){
						var next=game.createEvent('dchuagui_choose',false);
						next.player=game.me;
						next.source=source;
						next.setContent(lib.skill.dchuagui.contentx);
						game.resume();
					};
					var sendback=function(result,player){
						if(!Array.isArray(result)){
							result=[
								Math.random()<0.5?'仅展示牌':'交出牌',
								player.getCards('he').randomGet()
							];
						}
						event.results.push([player,result]);
					};
					event.ai_targets=[];
					event.results=[];
					var players=game.filterPlayer(function(current){
						return current!=player;
					}).sortBySeat();
					var time=10000;
					if(lib.configOL&&lib.configOL.choose_timeout) time=parseInt(lib.configOL.choose_timeout)*1000;
					for(var i=0;i<players.length;i++){
						players[i].showTimer(time);
						if(!event.players.contains(players[i])) continue;
						if(players[i].isOnline()){
							event.withol=true;
							players[i].send(send,player);
							players[i].wait(sendback);
						}
						else if(players[i]==game.me){
							event.withme=true;
							var next=game.createEvent('dchuagui_choose',false);
							next.player=game.me;
							next.source=player;
							next.setContent(lib.skill.dchuagui.contentx);
							if(_status.connectMode) game.me.wait(sendback);
						}
						else{
							event.ai_targets.push(players[i]);
						}
					}
					if(event.ai_targets.length){
						event.ai_targets.randomSort();
						setTimeout(function(){
							event.interval=setInterval(function(){
								var target=event.ai_targets.shift();
								var att=get.attitude(target,player),hs=target.getCards('he');
								hs.sort((b,a)=>get.value(b,target)-get.value(a,target));
								var choice='仅展示牌',card=hs[0];
								if(att<-2&&Math.random()>((get.value(card,target)-3)/5)) choice='交出牌';
								sendback([choice,card],target);
								if(!event.ai_targets.length){
									clearInterval(event.interval);
									if(event.withai) game.resume();
								}
							},_status.connectMove?750:75);
						},500)
					}
					'step 3'
					if(event.withme){
						if(_status.connectMode) game.me.unwait(result,game.me);
						else{
							if(!Array.isArray(result)){
								result=[
									Math.random()<0.5?'仅展示牌':'交出牌',
									player.getCards('he').randomGet()
								];
							}
							event.results.push([player,result]);
						}
					}
					'step 4'
					if(event.withol&&!event.resultOL){
						game.pause();
					}
					'step 5'
					if(event.ai_targets.length>0){
						event.withai=true;
						game.pause();
					}
					'step 6'
					delete event._global_waiting;
					for(var i of game.players) i.hideTimer();
					event.videoId=lib.status.videoId++;
					game.broadcastAll(function(name,id,results){
						var dialog=ui.create.dialog(name+'发动了技能【化归】','hidden','forcebutton');
						dialog.videoId=id;
						dialog.classList.add('scroll1');
						dialog.classList.add('scroll2');
						dialog.classList.add('fullwidth');
						dialog.classList.add('fullheight');
						dialog.buttonss=[];
						
						var list=['仅展示牌的玩家','交出牌的玩家']
						for(var i=0;i<list.length;i++){
							dialog.add('<div class="text center">'+list[i]+'</div>');
							var buttons=ui.create.div('.buttons',dialog.content);
							dialog.buttonss.push(buttons);
							buttons.classList.add('popup');
							buttons.classList.add('guanxing');
						}
						dialog.open();
						
						var getx=function(){
							var item=results.shift();
							var card=item[1][1],index=item[1][0]=='仅展示牌'?0:1;
							var button=ui.create.button(card,'card',dialog.buttonss[index]);
								button.querySelector('.info').innerHTML=(function(target){
								if(target._tempTranslate) return target._tempTranslate;
								var name=target.name;
								if(lib.translate[name+'_ab']) return lib.translate[name+'_ab'];
								return get.translation(name);
							}(item[0]));
							if(results.length>0) setTimeout(getx,500);
						}
						setTimeout(getx,500);
					},get.translation(player),event.videoId,event.results.slice(0));
					game.delay(0,2000+event.results.length*500)
					'step 7'
					game.broadcastAll('closeDialog',event.videoId);
					var shown=[],given=[];
					for(var i of event.results){
						(i[1][0]=='仅展示牌'?shown:given).push(i);
					}
					var list=given.length>0?given:shown;
					var cards=[],targets=[];
					for(var i of list){
						cards.push(i[1][1]);
						targets.push(i[0]);
						//i[0].$give(i[1][1],player);
					}
					player.line(targets);
					player.gain(cards,'give');
					//step 8
					//game.delayx();
				},
				contentx:function(){
					'step 0'
					event._global_waiting=true;
					event.result=['仅展示牌',player.getCards('he').randomGet()];
					var str=get.translation(source);
					player.chooseControl('仅展示牌','交出牌').set('choiceList',[
						'仅展示一张牌。但如果所有人都选择了仅展示，则'+str+'获得这张牌',
						'将一张牌交给'+str,
					]).set('_global_waiting',true);
					'step 1'
					event.result[0]=result.control;
					player.chooseCard('he',true).set('_global_waiting',true);
					'step 2'
					event.result[1]=result.cards[0];
				},
			},
			//陈珪
			dcyingtu:{
				audio:2,
				trigger:{
					global:['gainAfter','loseAsyncAfter'],
				},
				usable:1,
				filter:function(event,player){
					return lib.skill.dcyingtu.filterx(event,player,player.getNext())||lib.skill.dcyingtu.filterx(event,player,player.getPrevious());
				},
				filterx:function(event,player,target){
					var evt=event.getParent('phaseDraw');
					if(evt&&target==evt.player) return false;
					return event.getg(target).length>0&&target.hasCard(function(card){
						return lib.filter.canBeGained(card,target,player)
					},'he');
				},
				logTarget:'player',
				direct:true,
				checkx:function(player,source){
					var target=(source==player.getNext()?player.getPrevious():player.getNext());
					return Math.min(0,get.attitude(player,target))>=get.attitude(player,source);
				},
				content:function(){
					'step 0'
					var targets=[];
					event.targets=targets;
					if(lib.skill.dcyingtu.filterx(trigger,player,player.getNext())) targets.add(player.getNext());
					if(lib.skill.dcyingtu.filterx(trigger,player,player.getPrevious())) targets.add(player.getPrevious());
					'step 1'
					var target=targets.shift();
					event.target=target;
					player.chooseBool(
						get.prompt('dcyingtu',target),
						'获得该角色的一张牌，然后将一张牌交给该角色的对位角色。若你给出的是装备牌，则其使用其获得的牌。'
					).set('goon',lib.skill.dcyingtu.checkx(player,target)).set('ai',function(){
						return _status.event.goon;
					});
					'step 2'
					if(result.bool){
						player.logSkill('dcyingtu',target);
						var next=game.createEvent('dcyingtu_insert');
						next.player=player;
						next.target=target;
						next.setContent(lib.skill.dcyingtu.contentx);
						event.finish();
					}
					else if(targets.length>0) event.goto(1);
					else player.storage.counttrigger.dcyingtu--;
				},
				contentx:function(){
					'step 0'
					event.side=(target==player.getPrevious()?'getNext':'getPrevious');
					player.gainPlayerCard(target,true,'he');
					'step 1'
					var he=player.getCards('he');
					if(he.length>0){
						var target=player[event.side]();
						event.target=target;
						if(he.length==1) event._result={bool:true,cards:he};
						else player.chooseCard('he',true,'交给'+get.translation(target)+'一张牌')
					}
					else event.finish();
					'step 2'
					if(result.bool){
						var card=result.cards[0];
						event.card=card;
						player.line(target);
						player.give(card,target);
					}
					else event.finish();
					'step 3'
					if(target.getCards('h').contains(card)&&get.type(card,null,target)=='equip'&&target.canUse(card,target)) target.chooseUseTarget(card,true,'nopopup');
				},
			},
			dccongshi:{
				audio:2,
				trigger:{global:'useCardAfter'},
				forced:true,
				locked:false,
				filter:function(event,player){
					return get.type(event.card,null,false)=='equip'&&event.player.isMaxEquip();
				},
				content:function(){
					player.draw();
				},
			},
			//黄权
			dcquanjian:{
				audio:2,
				enable:'phaseUse',
				usable:2,
				filter:function(event,player){
					return game.hasPlayer(current=>current!=player);
				},
				chooseButton:{
					dialog:function(event,player){
						var dialog=ui.create.dialog('劝谏：令一名其他角色…','hidden');
						dialog.add([[
							['damage','对其攻击范围内的一名角色造成1点伤害'],
							['draw','将其手牌数调整至体力上限（至多摸至五张），且其本回合内不能使用手牌']
						],'textbutton']);
						return dialog;
					},
					filter:function(button,player){
						return !player.hasSkill('dcquanjian_'+button.link,null,null,false);
					},
					check:()=>1+Math.random(),
					backup:function(links){
						return get.copy(lib.skill['dcquanjian_'+links[0]]);
					},
					prompt:function(links){
						if(links[0]=='damage') return '令一名其他角色对攻击范围内的另一名角色造成1点伤害';
						return '令一名其他角色将手牌数调整至体力上限（至多摸至五张）且本回合内不能使用手牌';
					},
				},
				ai:{
					order:2,
					result:{player:1},
				},
				subSkill:{
					backup:{audio:'dcquanjian'},
					damage:{
						audio:'dcquanjian',
						charlotte:true,
						selectTarget:2,
						filterTarget:function(card,player,target){
							if(!ui.selected.targets.length) return target!=player;
							return ui.selected.targets[0].inRange(target);
						},
						complexTarget:true,
						complexSelect:true,
						filterCard:()=>false,
						selectCard:-1,
						targetprompt:['造成伤害','受到伤害'],
						multitarget:true,
						content:function(){
							'step 0'
							player.addTempSkill('dcquanjian_damage','phaseUseAfter');
							targets[0].chooseControl().set('choiceList',[
								'对'+get.translation(targets[1])+'造成1点伤害',
								'本回合下次受到的伤害+1',
							]).set('ai',function(){
								return _status.event.eff>=0?0:1;
							}).set('eff',get.damageEffect(targets[1],targets[0],targets[0]));
							'step 1'
							if(result.index==0){
								targets[1].damage(targets[0]);
							}
							else{
								target.addMark('dcquanjian_effect',1,false);
								target.addTempSkill('dcquanjian_effect');
							}
						},
						ai:{
							result:{
								player:function(player,target){
									if(ui.selected.targets.length==0){
										if(!game.hasPlayer((current)=>current.inRangeOf(target)&&get.damageEffect(current,target,player)>0)) return 0;
										if(get.attitude(player,target)>0) return 2;
										return 1;
									}
									return get.damageEffect(target,ui.selected.targets[0],player,player);
								},
							},
						},
					},
					draw:{
						audio:'dcquanjian',
						charlotte:true,
						filterTarget:function(card,player,target){
							if(target==player) return false;
							var num=target.countCards('h');
							if(num>target.maxHp) return true;
							return num<Math.min(5,target.maxHp);
						},
						filterCard:()=>false,
						selectCard:-1,
						content:function(){
							'step 0'
							player.addTempSkill('dcquanjian_draw','phaseUseAfter');
							var num1=target.countCards('h'),num2=target.maxHp;
							var num=0;
							if(num1>num2){
								event.index=0;
								num=num1-num2;
								target.chooseControl().set('choiceList',[
									'弃置'+get.cnNumber(num)+'张手牌',
									'本回合下次受到的伤害+1',
								]).set('ai',function(){
									var player=_status.event.player;
									if(_status.event.number==1&&player.hasCard(function(card){
										return lib.filter.cardDiscardable(card,player,'dcquanjian_draw')&&get.value(card)<5;
									},'h')) return 0;
									return 1;
								}).set('number',num);
							}
							else{
								event.index=1;
								num=Math.min(num2,5)-num1;
								if(num<=0) event.finish();
								else target.chooseControl().set('choiceList',[
									'摸'+get.cnNumber(num)+'张牌，且本回合内不能使用或打出手牌',
									'本回合下次受到的伤害+1',
								]).set('ai',function(){
									return 0;
								});
							}
							event.num=num;
							'step 1'
							if(result.index==0){
								if(event.index==0) target.chooseToDiscard('h',true,num);
								else target.draw(num);
							}
							else{
								target.addMark('dcquanjian_effect',1,false);
								target.addTempSkill('dcquanjian_effect');
								event.finish();
							}
							'step 2'
							target.addTempSkill('dcquanjian_disable');
						},
						ai:{
							result:{
								target:function(player,target){
									var num1=target.countCards('h'),num2=target.maxHp;
									if(num1>num2) return -1;
									return Math.min(5,num2)-num1;
								},
							},
						},
					},
					effect:{
						charlotte:true,
						trigger:{player:'damageBegin3'},
						forced:true,
						onremove:true,
						marktext:'谏',
						content:function(){
							trigger.num+=player.countMark(event.name);
							player.removeSkill(event.name);
						},
						intro:{content:'下次受到的伤害+#'},
						ai:{threaten:2.5},
					},
					disable:{
						charlotte:true,
						mod:{
							cardEnabled2:function(card){
								if(get.position(card)=='h') return false;
							},
						},
						mark:true,
						marktext:'禁',
						intro:{content:'不能使用或打出手牌'},
						ai:{threaten:2.5},
					},
				},
			},
			dctujue:{
				audio:2,
				trigger:{player:'dying'},
				direct:true,
				limited:true,
				skillAnimation:true,
				animationColor:'gray',
				filter:function(event,player){
					return player.countCards('he')>0;
				},
				content:function(){
					'step 0'
					player.chooseTarget(lib.filter.notMe,get.prompt2('dctujue')).set('ai',function(target){
						if(_status.event.skip) return 0;
						return 200+get.attitude(_status.event.player,target);
					}).set('skip',player.countCards('hs',{name:['tao','jiu']})+player.hp>0);
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('dctujue',target);
						player.awakenSkill('dctujue');
						var cards=player.getCards('he');
						player.give(cards,target);
						player.recover(cards.length);
						player.draw(cards.length);
					}
				},
			},
			//尹夫人
			dcyingyu:{
				audio:2,
				trigger:{player:['phaseZhunbeiBegin','phaseJieshuBegin']},
				direct:true,
				filter:function(event,player){
					if(event.name=='phaseJieshu'&&!player.storage.dcyingyu) return false;
					return game.countPlayer(function(current){
						return current.countCards('h')>0;
					})>1;
				},
				content:function(){
					'step 0'
					player.chooseTarget(2,get.prompt('dcyingyu'),'展示两名角色的各一张手牌。若这两张牌花色不同，则你可以令其中一名角色获得另一名角色的展示牌。',function(card,player,target){
						return target.countCards('h')>0;
					}).set('ai',function(target){
						var player=_status.event.player;
						if(!ui.selected.targets.length) return get.attitude(player,target);
						return 1-get.attitude(player,target);
					});
					'step 1'
					if(result.bool){
						var targets=result.targets.sortBySeat();
						event.targets=targets;
						event.cards=[];
						player.logSkill('dcyingyu',targets);
						player.choosePlayerCard(targets[0],true,'h');
					}
					else event.finish();
					'step 2'
					var card=result.cards[0];
					player.line(targets[0]);
					player.showCards(card,get.translation(player)+'对'+get.translation(targets[0])+'发动了【媵予】')
					event.cards.push(card);
					player.choosePlayerCard(targets[1],true,'h');
					'step 3'
					var card=result.cards[0];
					player.line(targets[1]);
					player.showCards(card,get.translation(player)+'对'+get.translation(targets[1])+'发动了【媵予】')
					event.cards.push(card);
					if(get.suit(cards[0],targets[0])==get.suit(cards[1],targets[1])) event.finish();
					'step 4'
					var str1=get.translation(targets[0]),str2=get.translation(targets[1]);
					player.chooseControl('cancel2').set('choiceList',[
						'令'+str1+'获得'+str2+'的'+get.translation(cards[1]),
						'令'+str2+'获得'+str1+'的'+get.translation(cards[0]),
					]).set('goon',get.attitude(player,targets[0])>0?0:1).set('ai',()=>_status.event.goon);
					'step 5'
					if(result.control!='cancel2'){
						var i=result.index;
						targets[1-i].give(cards[1-i],targets[i],'give');
					}
				},
				onremove:true,
			},
			dcyongbi:{
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					return player.countCards('h')>0&&game.hasPlayer((current)=>lib.skill.dcyongbi.filterTarget(null,player,current));
				},
				filterTarget:function(card,player,target){
					return target!=player&&target.hasSex('male');
				},
				selectCard:-1,
				filterCard:true,
				position:'h',
				limited:true,
				skillAnimation:true,
				animationColor:'fire',
				discard:false,
				lose:false,
				content:function(){
					'step 0'
					player.awakenSkill('dcyongbi');
					if(player.hasSkill('dcyingyu',null,null,false)) player.storage.dcyingyu=true;
					player.give(cards,target);
					'step 1'
					var list=[];
					for(var i of cards){
						list.add(get.suit(i,player));
						if(list.length>=3) break;
					}
					if(list.length>=2){
						player.addMark('dcyongbi_eff1',2,false);
						player.addSkill('dcyongbi_eff1');
						target.addMark('dcyongbi_eff1',2,false);
						target.addSkill('dcyongbi_eff1');
					}
					if(list.length>=3){
						player.addMark('dcyongbi_eff2',1,false);
						player.addSkill('dcyongbi_eff2');
						target.addMark('dcyongbi_eff2',1,false);
						target.addSkill('dcyongbi_eff2');
					}
				},
				ai:{
					order:1,
					result:{
						target:function(player,target){
							if(player.hasUnknown()) return 0;
							var zhu=get.zhu(player);
							if(zhu&&get.attitude(player,zhu)>0){
								if(target==zhu) return 4;
							}
							return 1;
						},
					},
				},
				subSkill:{
					eff1:{
						mod:{
							maxHandcard:(player,num)=>num+player.countMark('dcyongbi_eff1'),
						},
						charlotte:true,
						onremove:true,
						marktext:'拥',
						intro:{content:'手牌上限+#'},
					},
					eff2:{
						trigger:{player:'damageBegin4'},
						forced:true,
						filter:function(event,player){
							return event.num>1;
						},
						content:function(){
							trigger.num-=player.countMark('dcyongbi_eff2');
						},
						charlotte:true,
						onremove:true,
						marktext:'嬖',
						intro:{content:'受到大于1的伤害时，此伤害-#'},
					},
				},
			},
			//吕旷吕翔
			dcshuhe:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				filterCard:true,
				position:'h',
				discard:false,
				lose:false,
				delay:false,
				check:function(cardx){
					var player=_status.event.player;
					var num1=get.number(cardx),players=game.filterPlayer();
					var goon=false,effect=0;
					for(var current of players){
						var cards=current.getCards('ej',function(card){
							var num=get.number(card);
							return num==num1;
						});
						if(cards.length){
							goon=true;
							var att=get.attitude(player,current);
							for(var card of cards){
								if(get.position(card)=='e'){
									var val=get.value(card,current);
									if(att<=0) effect+=val;
									else effect-=val/2;
								}
								else{
									var eff=get.effect(current,{name:card.viewAs||card.name},player,player);
									effect-=get.sgn(att)*eff;
								}
							}
						}
					}
					if(goon){
						if(effect>0) return 6+effect-get.value(cardx);
						return 0;
					}
					return game.hasPlayer(function(current){
						return current!=player&&get.attitude(player,current)>0;
					})?(6-get.value(cardx)):0;
				},
				content:function(){
					'step 0'
					player.showCards(cards,get.translation(player)+'发动了【数合】');
					'step 1'
					event.cards2=[];
					var num1=get.number(cards[0],player);
					var lose_list=[],players=game.filterPlayer();
					for(var current of players){
						var cards=current.getCards('ej',function(card){
							var num=get.number(card);
							return num==num1;
						});
						if(cards.length>0){
							player.line(current,'thunder');
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
					else{
						event.goto(3);
						player.chooseTarget(true,lib.filter.notMe,'将'+get.translation(event.cards[0])+'交给一名其他角色').set('ai',function(target){
							return get.attitude(_status.event.player,target);
						});
					}
					'step 2'
					var cards=event.cards2;
					if(cards.length>0){
						if(event.lose_list) game.delayx();
						player.gain(cards,'gain2');
					}
					event.finish();
					'step 3'
					if(result.bool){
						var target=result.targets[0];
						player.line(target,'green');
						player.give(cards,target);
						player.addMark('dcliehou',1);
					}
				},
				ai:{
					order:2,
					result:{
						player:1,
					},
				},
			},
			dcliehou:{
				audio:2,
				trigger:{player:'phaseDrawBegin2'},
				forced:true,
				filter:function(event,player){
					return !event.numFixed;
				},
				content:function(){
					var num=Math.min(5,1+player.countMark('dcliehou'));
					trigger.num+=num;
					trigger._dcliehou=num;
				},
				group:'dcliehou_discard',
				subSkill:{
					discard:{
						trigger:{player:'phaseDrawEnd'},
						forced:true,
						filter:function(event,player){
							return typeof event._dcliehou=='number';
						},
						content:function(){
							'step 0'
							var num=trigger._dcliehou;
							player.chooseToDiscard(num,'he','弃置'+get.cnNumber(num)+'张牌，或失去1点体力').set('ai',function(card){
								if(_status.event.goon) return 6-get.value(card);
								return 26-get.value(card);
							}).set('goon',player.hp>Math.max(1,4-num)||get.effect(player,{name:'losehp'},player,player)>0);
							'step 1'
							if(!result.bool) player.loseHp();
						},
					},
				},
				marktext:'爵',
				intro:{
					name:'列侯(爵)',
					name2:'爵',
					content:'〖列侯〗的摸牌数+#',
				},
			},
			//管亥
			suoliang:{
				audio:2,
				trigger:{source:'damageSource'},
				logTarget:'player',
				usable:1,
				filter:function(event,player){
					return event.player!=player&&event.player.maxHp>0&&event.player.countCards('he')>0;
				},
				check:function(event,player){
					return get.attitude(player,event.player)<=0;
				},
				content:function(){
					'step 0'
					var target=trigger.player;
					event.target=target;
					player.choosePlayerCard(target,true,'he',[1,target.maxHp],'选择'+get.translation(target)+'的至多'+get.cnNumber(target.maxHp)+'张牌');
					'step 1'
					if(result.bool){
						player.showCards(result.cards,get.translation(player)+'对'+get.translation(target)+'发动了【索粮】')
						var cards=result.cards.filter(function(card){
							var suit=get.suit(card,target);
							if(suit!='heart'&&suit!='club') return false;
							return lib.filter.canBeGained(card,target,player)
						});
						if(cards.length) player.gain(cards,target,'giveAuto','bySelf');
						else{
							var cards=result.cards.filter(function(card){
								return lib.filter.canBeDiscarded(card,target,player)
							});
							if(cards.length) target.discard(cards,'notBySelf');
						}
					}
				},
			},
			qinbao:{
				audio:2,
				trigger:{player:'useCard'},
				forced:true,
				filter:function(event,player){
					return (event.card.name=='sha'||get.type(event.card,null,false)=='trick')&&game.hasPlayer(function(current){
						return current!=player&&current.countCards('h')>=player.countCards('h');
					});
				},
				content:function(){
					var hs=player.countCards('h');
					trigger.directHit.addArray(game.filterPlayer(function(current){
						return current!=player&&current.countCards('h')>=hs;
					}));
				},
				ai:{
					threaten:1.4,
					directHit_ai:true,
					skillTagFilter:function(player,tag,arg){
						return player.countCards('h',function(card){
							return !ui.selected.cards.contains(card);
						})<=arg.target.countCards('h');
					},
				},
			},
			//胡昭
			midu:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				isDisabled:function(player,pos){
					return pos>0?player.isDisabled(pos):player.storage._disableJudge;
				},
				chooseButton:{
					dialog:function(event,player){
						var dialog=ui.create.dialog('弥笃：选择要废除或恢复的装备栏或判定区','hidden');
						dialog.classList.add('withbg');
						dialog.noforcebutton=true;
						var list1=[],list2=[];
						for(var i=1;i<6;i++){
							(player.isDisabled(i)?list2:list1).push(i);
						}
						(player.storage._disableJudge?list2:list1).push(-1);
						var addTable=function(list){
							var table=document.createElement('div');
							table.classList.add('add-setting');
							table.style.margin='0';
							table.style.width='100%';
							table.style.position='relative';
							for(var i of list){
								var td=ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
								td.innerHTML='<span>'+(i>0?get.translation('equip'+i)+'栏':'判定区')+'</span>';
								td.link=i;
								td.addEventListener(lib.config.touchscreen?'touchend':'click',ui.click.button);
								for(var j in lib.element.button){
									td[j]=lib.element.button[j];
								}
								table.appendChild(td);
								dialog.buttons.add(td);
							}
							dialog.content.appendChild(table);
						}
						if(list1.length){
							dialog.addText('未废除');
							addTable(list1);
						}
						if(list2.length){
							dialog.addText('已废除');
							addTable(list2);
						}
						return dialog;
					},
					filter:function(button,player){
						if(!ui.selected.buttons.length) return true;
						if(lib.skill.midu.isDisabled(player,ui.selected.buttons[0].link)) return false;
						return !player.isDisabled(button.link);
					},
					check:function(button){
						var player=_status.event.player;
						if(lib.skill.midu.isDisabled(player,button.link)){
							if(button.link<=0) return -10;
							if(player.hasCard(function(card){
								return get.subtype(card)==('equip'+button.link);
							},'hs')) return 15;
							return 10;
						}
						if(button.link<=0||player.isEmpty(button.link)&&!player.hasCard(function(card){
							return get.subtype(card)==('equip'+button.link)&&player.canUse(card,player)&&get.effect(player,card,player,player)>0;
						},'hs')) return 5;
						return 0;
					},
					select:[1,6],
					backup:function(links,player){
						if(lib.skill.midu.isDisabled(player,links[0])){
							return {
								audio:'midu',
								selectCard:-1,
								selectTarget:-1,
								filterCard:()=>false,
								filterTarget:()=>false,
								equip:links[0],
								content:function(){
									var pos=lib.skill.midu_backup.equip;
									if(pos<=0) player.enableJudge();
									else player.enableEquip(pos);
									player.addTempSkill('huomo',{player:'phaseBegin'});
								},
							}
						}
						else{
							return {
								audio:'midu',
								selectCard:-1,
								filterCard:()=>false,
								filterTarget:true,
								equip:links.sort(),
								content:function(){
									var list=lib.skill.midu_backup.equip,bool=false;
									for(var i of list){
										if(i<=0) bool=true;
										else player.disableEquip(i);
									}
									if(bool) player.disableJudge();
									target.draw(list.length)
								},
								ai:{
									tag:{
										draw:1,
									},
									result:{
										target:2,
									},
								},
							}
						}
					},
					prompt:function(links,player){
						if(lib.skill.midu.isDisabled(player,links[0])){
							return '恢复一个装备栏或判定区并获得〖活墨〗';
						}
						var numc=get.cnNumber(links.length);
						return '废除'+numc+'个装备栏或判定区并令一名角色摸'+numc+'张牌';
					},
				},
				derivation:'huomo',
				ai:{
					order:8,
					result:{player:1},
				},
				subSkill:{backup:{}},
			},
			xianwang:{
				mod:{
					globalTo:function(source,player,distance){
						var num=player.countDisabled();
						if(num>0) return distance+(num>2?2:1);
					},
					globalFrom:function(source,player,distance){
						var num=source.countDisabled();
						if(num>0) return distance-(num>2?2:1);
					},
				},
			},
			//刘巴
			dczhubi:{
				audio:2,
				trigger:{
					global:['loseAfter','loseAsyncAfter'],
				},
				filter:function(event,player){
					if(event.type!='discard'||event.getlx===false) return false;
					for(var i of event.cards){
						if(get.suit(i,event.player)=='diamond') return true;
					}
					return false;
				},
				prompt2:'检索一张【无中生有】并置于牌堆顶',
				check:function(event,player){
					if(!_status.currentPhase) return false;
					return get.attitude(player,_status.currentPhase.next)>0;
				},
				content:function(){
					var card=get.cardPile(function(card){
						return card.name=='wuzhong'&&get.suit(card)!='diamond';
					});
					if(card){
						game.log(player,'将',card,'置于牌堆顶');
						card.fix();
						ui.cardPile.insertBefore(card,ui.cardPile.firstChild);
						game.updateRoundNumber();
						game.delayx();
					}
				},
			},
			dcliuzhuan:{
				audio:2,
				group:['dcliuzhuan_mark','dcliuzhuan_gain'],
				mod:{
					targetEnabled:function(card){
						if(card.cards){
							for(var i of card.cards){
								if(i.hasGaintag('dcliuzhuan_tag')) return false;
							}
						}
						else if(get.itemtype(card)=='card'){
							if(card.hasGaintag('dcliuzhuan_tag')) return false;
						}
					},
				},
				subSkill:{
					gain:{
						trigger:{global:['loseAfter','loseAsyncAfter','cardsDiscardAfter']},
						forced:true,
						logTarget:()=>_status.currentPhase,
						filter:function(event,player){
							var current=_status.currentPhase;
							if(!current) return false;
							if(event.name=='cardsDiscard'){
								var evtx=event.getParent();
								if(evtx.name!='orderingDiscard') return false;
								var evtx2=(evtx.relatedEvent||evtx.getParent());
								return current.hasHistory('lose',function(evtx3){
									var evtx4=evtx3.relatedEvent||evtx3.getParent();
									if(evtx2!=evtx4) return false;
									for(var i in evtx3.gaintag_map){
										if(evtx3.gaintag_map[i].contains('dcliuzhuan_tag')) return true;
									}
								});
								return false;
							}
							else if(event.name=='lose'){
								if(event.player!=current||event.position!=ui.discardPile) return false;
								for(var i in event.gaintag_map){
									if(event.gaintag_map[i].contains('dcliuzhuan_tag')) return true;
								}
								return false;
							}
							return current.hasHistory('lose',function(evt){
								if(evt.getParent()!=event||evt.position!=ui.discardPile) return false;
								for(var i in evt.gaintag_map){
									if(evt.gaintag_map[i].contains('dcliuzhuan_tag')) return true;
								}
							});
						},
						content:function(){
							var cards,current=_status.currentPhase;
							if(trigger.name=='lose') cards=trigger.hs.filter(function(i){
								return trigger.gaintag_map[i.cardid]&&trigger.gaintag_map[i.cardid].contains('dcliuzhuan_tag')&&get.position(i,true)=='d';
							});
							else if(trigger.name=='cardsDiscard'){
								var evtx=trigger.getParent();
								var evtx2=(evtx.relatedEvent||evtx.getParent());
								var bool=false;
								var history=current.getHistory('lose',function(evtx3){
									var evtx4=evtx3.relatedEvent||evtx3.getParent();
									if(evtx2!=evtx4) return false;
									for(var i in evtx3.gaintag_map){
										if(evtx3.gaintag_map[i].contains('dcliuzhuan_tag')) return true;
									}
								});
								cards=trigger.cards.filter(function(i){
									for(var evt of history){
										if(evt.gaintag_map[i.cardid]&&evt.gaintag_map[i.cardid].contains('dcliuzhuan_tag')&&get.position(i,true)=='d') return true;
									}
									return false;
								});
							}
							else{
								cards=[];
								current.getHistory('lose',function(evt){
									if(evt.getParent()!=trigger||evt.position!=ui.discardPile) return false;
									for(var card of evt.hs){
										if(get.position(card,true)!='d') continue;
										var i=card.cardid;
										if(evt.gaintag_map[i]&&evt.gaintag_map[i].contains('dcliuzhuan_tag')) cards.push(card);
									}
								});
							}
							if(cards&&cards.length>0) player.gain(cards,'gain2');
						},
					},
					mark:{
						trigger:{global:'gainBegin'},
						forced:true,
						popup:false,
						silent:true,
						lastDo:true,
						filter:function(event,player){
							if(player==event.player||event.player!=_status.currentPhase) return false;
							var evt=event.getParent('phaseDraw');
							if(evt&&evt.name=='phaseDraw') return false;
							return true;
						},
						content:function(){
							trigger.gaintag.add('dcliuzhuan_tag');
							trigger.player.addTempSkill('dcliuzhuan_tag');
						},
					},
					tag:{
						charlotte:true,
						onremove:(player,skill)=>player.removeGaintag(skill),
					},
				},
			},
			//张勋
			suizheng:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('suizheng'),'令一名角色下回合内获得〖随征〗效果').set('',function(target){
						var player=_status.event.player,att=get.attitude(player,target);
						if(target.hasJudge('lebu')) return att/2;
						return att*get.threaten(target)*Math.sqrt(2+player==target?(player.countCards('h','sha')*2):target.countCards('h'))
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('suizheng',target);
						target.addMark('suizheng_effect',1,false);
						target.markAuto('suizheng_source',[player]);
						target.addTempSkill('suizheng_effect',{player:player==target?'phaseJieshuBefore':'phaseAfter'});
					}
				},
				subSkill:{
					effect:{
						audio:'suizheng',
						charlotte:true,
						mod:{
							targetInRange:function(card){
								if(card.name=='sha') return true;
							},
							cardUsable:function(card,player,num){
								if(card.name=='sha') return num+player.countMark('suizheng_effect');
							},
						},
						trigger:{player:'phaseUseEnd'},
						forced:true,
						popup:false,
						filter:function(event,player){
							var list=player.getStorage('suizheng_source');
							if(!list.filter((i)=>i.isIn().length)) return false;
							return player.hasHistory('sourceDamage',function(evt){
								return evt.player.isIn()&&evt.getParent('phaseUse')==event;
							});
						},
						content:function(){
							'step 0'
							var targets=player.getStorage('suizheng_source').slice(0).sortBySeat();
							event.targets=targets;
							'step 1'
							var target=targets.shift();
							event.target=target;
							var list=[];
							player.getHistory('sourceDamage',function(evt){
								if(evt.player.isIn()&&evt.getParent('phaseUse')==trigger) list.add(evt.player);
							});
							if(!list.length) event.finish();
							else if(target.isIn()){
								list=list.filter(function(i){
									return target.canUse('sha',i,false);
								});
								if(list.length>0) target.chooseTarget('随征：是否对一名角色使用【杀】？',function(card,player,target){
									return _status.event.targets.contains(target);
								}).set('targets',list).set('ai',function(target){
									var player=_status.event.player;
									return get.effect(target,{name:'sha'},player,player);
								});
							}
							else event._result={bool:false};
							'step 2'
							if(result.bool){
								target.useCard({
									name:'sha',
									isCard:true,
								},result.targets,false,'suizheng_effect');
							}
							if(targets.length>0) event.goto(1);
						},
						onremove:function(player){
							delete player.storage.suizheng_effect;
							delete player.storage.suizheng_source;
						},
						intro:{content:'使用【杀】无距离限制且次数上限+#'},
					},
				},
			},
			//纪灵
			dcshuangren:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				direct:true,
				preHidden:true,
				filter:function(event,player){
					return player.countCards('h')>0&&game.hasPlayer(function(current){
						return current!=player&&player.canCompare(current);
					})
				},
				content:function(){
					'step 0'
					var goon;
					if(player.needsToDiscard()>1){
						goon=player.hasCard(function(card){
							return card.number>10&&get.value(card)<=5;
						});
					}
					else if(player.hasSha()){
						goon=player.hasCard(function(card){
							return (card.number>=9&&get.value(card)<=5)||get.value(card)<=3;
						});
					}
					else{
						goon=player.hasCard(function(card){
							return get.value(card)<=5;
						});
					}
					player.chooseTarget(get.prompt2('dcshuangren'),function(card,player,target){
						return player.canCompare(target);
					}).set('ai',function(target){
						var player=_status.event.player;
						if(_status.event.goon&&get.attitude(player,target)<0){
							return get.effect(target,{name:'sha'},player,player);
						}
						return 0;
					}).set('goon',goon).setHiddenSkill(event.name);
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('dcshuangren',target);
						player.chooseToCompare(target);
					}
					else{
						event.finish();
					}
					'step 2'
					if(result.bool){
						var target=event.target;
						if(game.hasPlayer(function(current){
							if(target==current||target.group!=current.group) return false;
							return player.canUse('sha',current,false);
						})){
							var str='请选择视为使用【杀】的目标';
							var str2='操作提示：选择一名角色B，或选择包含A（'+get.translation(target)+'）在内的两名角色A和B（B的势力需为'+get.translation(target.group)+'势力）';
							player.chooseTarget([1,2],str,str2,true,function(card,player,target){
								if(!player.canUse('sha',target,false)) return false;
								var current=_status.event.target;
								if(target==current) return true;
								if(target.group!=current.group) return false;
								if(!ui.selected.targets.length) return true;
								return ui.selected.targets[0]==current;
								return current==target;
							}).set('ai',function(target){
								var player=_status.event.player;
								return get.effect(target,{name:'sha'},player,player);
							}).set('target',target).set('complexTarget',true);
						}
						else{
							player.useCard({name:'sha',isCard:true},target,false);
							event.finish();
						}
					}
					else{
						player.addTempSkill('dcshuangren_debuff','phaseUseAfter');
						event.finish();
					}
					'step 3'
					if(result.bool&&result.targets&&result.targets.length){
						player.useCard({name:'sha',isCard:true},result.targets,false);
					}
				},
				subSkill:{
					debuff:{
						charlotte:true,
						mod:{
							cardEnabled:function(card){
								if(card.name=='sha') return false;
							},
						},
					},
				},
			},
			//羊祜
			dcdeshao:{
				audio:2,
				usable:2,
				trigger:{target:'useCardToTargeted'},
				filter:function(event,player){
					return player!=event.player&&get.color(event.card)=='black';
				},
				logTarget:'player',
				check:function(event,player){
					var eff=get.effect(player,{name:'wuzhong'},player,player)/2;
					if(player.countCards('h')+1<=event.player.countCards('h')&&event.player.countCards('he')>0) eff+=get.effect(event.player,{name:'guohe_copy2'},player,player);
					return eff;
				},
				content:function(){
					'step 0'
					player.draw();
					'step 1' 
					var target=trigger.player;
					if(player.countCards('h')<=target.countCards('h')&&target.countCards('he')>0){
						player.discardPlayerCard(target,true,'he');
						player.addExpose(0.2);
					}
				},
			},
			dcmingfa:{
				audio:2,
				trigger:{player:'useCardAfter'},
				direct:true,
				filter:function(event,player){
					return player.isPhaseUsing()&&(event.card.name=='sha'||get.type(event.card)=='trick')&&event.cards.filterInD().length>0&&!player.getExpansions('dcmingfa').length;
				},
				content:function(){
					'step 0'
					var str,cards=trigger.cards.filterInD(),card=trigger.card;
					if(cards.length==1&&card.name==cards[0].name&&(card.nature||false)==(cards[0].nature||false)) str=get.translation(cards[0]);
					else str=(get.translation(trigger.card)+'（'+get.translation(cards)+'）');
					var cardx={
						name:trigger.card.name,
						nature:trigger.card.nature,
						isCard:true,
					};
					player.chooseTarget(lib.filter.notMe,get.prompt('dcmingfa'),'将'+str+'作为“明伐”牌置于武将牌上，并选择一名其他角色。该角色下回合结束时对其执行〖明伐〗的后续效果。').set('card',cardx).set('goon',function(){
						var getMax=function(card){
							return Math.max.apply(Math,game.filterPlayer(function(current){
								return current!=player&&lib.filter.targetEnabled2(card,player,current);
							}).map(function(i){
								return get.effect(i,card,player,player)*Math.sqrt(Math.min(i.getHandcardLimit(),1+i.countCards('h')));
							}).concat([0]));
						}
						var eff1=getMax(cardx);
						if(player.hasCard(function(card){
							if((card.name!='sha'&&get.type(card)!='trick')||!player.hasValueTarget(card,null,true)) return false;
							return getMax({
								name:get.name(card),
								nature:get.nature(card),
								isCard:true,
							})>=eff1;
						},'hs')) return false;
						return true;
					}()).set('ai',function(target){
						if(!_status.event.goon) return 0;
						var player=_status.event.player,card=_status.event.card;
						if(!lib.filter.targetEnabled2(card,player,target)) return 0;
						return get.effect(target,card,player,player)*Math.sqrt(Math.min(target.getHandcardLimit(),1+target.countCards('h')));
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('dcmingfa',target);
						var card={
							name:trigger.card.name,
							nature:trigger.card.nature,
							isCard:true,
						};
						player.storage.dcmingfa_info=[card,target];
						player.addToExpansion(trigger.cards.filterInD(),'gain2').gaintag.add('dcmingfa');
					}
				},
				group:'dcmingfa_use',
				ai:{expose:0.2},
				intro:{
					mark:function(dialog,storage,player){
						var cards=player.getExpansions('dcmingfa');
						if(!cards.length) return '没有“明伐”牌';
						else dialog.add(cards);
						var info=player.storage.dcmingfa_info;
						if(info){
							dialog.addText('记录牌：'+get.translation(info[0])+'<br>记录目标：'+get.translation(info[1]));
						}
					},
					content:'expansion',
				},
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
					delete player.storage.dcmingfa_info;
				},
				subSkill:{
					use:{
						audio:'dcmingfa',
						trigger:{global:['phaseEnd','die']},
						forced:true,
						filter:function(event,player){
							if(!player.storage.dcmingfa_info||!player.getExpansions('dcmingfa').length) return false;
							return event.player==player.storage.dcmingfa_info[1];
						},
						content:function(){
							'step 0'
							var target=trigger.player;
							event.target=target;
							var card=player.storage.dcmingfa_info[0];
							delete player.storage.dcmingfa_info;
							event.card=card;
							event.count=Math.max(1,Math.min(5,target.countCards('h')));
							if(!event.player.isIn()) event.goto(2);
							'step 1'
							event.count--;
							if(target.isIn()&&lib.filter.targetEnabled2(card,player,target)){
								player.useCard(get.copy(card),target);
								if(event.count>0) event.redo();
							}
							'step 2'
							var cards=player.getExpansions('dcmingfa');
							if(cards.length>0) player.loseToDiscardpile(cards);
						},
					},
				},
			},
			//蔡瑁张允
			lianzhou:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				filter:function(event,player){
					if(!player.isLinked()) return true;
					return game.hasPlayer(function(current){
						return current!=player&&current.hp==player.hp&&!current.isLinked();
					});
				},
				content:function(){
					'step 0'
					if(!player.isLinked()) player.link();
					'step 1'
					var num=game.countPlayer(function(current){
						return current!=player&&current.hp==player.hp&&!current.isLinked();
					});
					if(num>0){
						player.chooseTarget([1,num],'选择横置任意名体力值等于你的角色',function(card,player,current){
							return current!=player&&current.hp==player.hp&&!current.isLinked();
						}).set('ai',function(target){
							var player=_status.event.player;
							return get.effect(target,{name:'tiesuo'},player,player);
						});
					}
					else event.finish();
					'step 2'
					if(result.bool){
						var targets=result.targets.sortBySeat();
						player.line(targets,'green');
						for(var i of targets) i.link();
					}
				},
				ai:{halfneg:true},
			},
			jinglan:{
				audio:2,
				trigger:{source:'damageSource'},
				forced:true,
				content:function(){
					var delta=player.countCards('h')-player.hp;
					if(delta>0) player.chooseToDiscard('h',4,true);
					else if(delta==0){
						player.chooseToDiscard('h',true);
						player.recover();
					}
					else{
						player.damage('fire','nosource');
						player.draw(5);
					}
				},
				ai:{halfneg:true},
			},
			//滕公主
			xingchong:{
				audio:2,
				trigger:{global:'roundStart'},
				direct:true,
				filter:function(event,player){
					return player.maxHp>0;
				},
				content:function(){
					'step 0'
					var list=[];
					for(var i=0;i<=Math.min(5,player.maxHp);i++){
						list.push(get.cnNumber(i)+'张');
					}
					list.push('cancel2');
					player.chooseControl(list).set('prompt',get.prompt('xingchong')).set('prompt2','请首先选择摸牌的张数').set('ai',function(){
						var player=_status.event.player,num1=player.maxHp,num2=player.countCards('h');
						if(num1<=num2) return 0;
						return Math.ceil((num1-num2)/2);
					});
					'step 1'
					if(result.control!='cancel2'){
						player.logSkill('xingchong');
						var num2=result.index;
						if(num2>0) player.draw(num2);
						var num=Math.min(5,player.maxHp)-num2;
						if(num==0) event.finish();
						else event.num=num;
					}
					else event.finish();
					'step 2'
					if(player.countCards('h')>0){
						player.chooseCard('h',[1,Math.min(player.countCards('h'),event.num)],'请选择要展示的牌').set('ai',()=>1+Math.random());
					}
					else event.finish();
					'step 3'
					if(result.bool){
						var cards=result.cards;
						player.showCards(cards,get.translation(player)+'发动了【幸宠】');
						player.addGaintag(cards,'xingchong');
						player.addTempSkill('xingchong_effect','roundStart');
					}
				},
				subSkill:{
					effect:{
						audio:'xingchong',
						trigger:{
							player:['loseAfter'],
							global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
						},
						filter:function(event,player){
							var evt=event.getl(player);
							if(!evt||!evt.cards2||!evt.cards2.length) return false;
							if(event.name=='lose'){
								for(var i in event.gaintag_map){
									if(event.gaintag_map[i].contains('xingchong')) return true;
								}
								return false;
							}
							return player.hasHistory('lose',function(evt){
								if(event!=evt.getParent()) return false;
								for(var i in evt.gaintag_map){
									if(evt.gaintag_map[i].contains('xingchong')) return true;
								}
								return false;
							});
						},
						forced:true,
						popup:false,
						charlotte:true,
						onremove:function(player){
							player.removeGaintag('xingchong');
						},
						content:function(){
							'step 0'
							if(trigger.delay===false) game.delayx();
							'step 1'
							player.logSkill('xingchong_effect');
							var num=0;
							if(trigger.name=='lose'){
								for(var i in trigger.gaintag_map){
									if(trigger.gaintag_map[i].contains('xingchong')) num++;
								}
							}
							else player.getHistory('lose',function(evt){
								if(trigger!=evt.getParent()) return false;
								for(var i in evt.gaintag_map){
									if(evt.gaintag_map[i].contains('xingchong')) num++;
								}
							});
							player.draw(2*num);
						},
					},
				},
			},
			liunian:{
				audio:2,
				trigger:{global:'washCard'},
				forced:true,
				filter:function(event,player){
					return game.shuffleNumber<=2;
				},
				content:function(){
					if(game.shuffleNumber==1) player.addTempSkill('liunian_shuffle1');
					else player.addTempSkill('liunian_shuffle2');
					game.delayx();
				},
				subSkill:{
					shuffle1:{
						charlotte:true,
						forced:true,
						trigger:{global:'phaseEnd'},
						content:function(){
							player.gainMaxHp();
							game.delayx();
						},
					},
					shuffle2:{
						charlotte:true,
						forced:true,
						trigger:{global:'phaseEnd'},
						content:function(){
							'step 0'
							player.recover();
							game.delayx();
							'step 1'
							player.addSkill('liunian_effect');
							player.addMark('liunian_effect',10,false);
						},
					},
					effect:{
						charlotte:true,
						mod:{
							maxHandcard:function(player,num){
								return num+player.countMark('liunian_effect');
							},
						},
						marktext:'年',
						intro:{
							content:'手牌上限+#',
						},
					},
				},
			},
			//黄承彦
			dcjiezhen:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return target!=player;
				},
				content:function(){
					var skills=target.getSkills(null,false,false).filter(function(i){
						if(i=='bazhen') return;
						var info=get.info(i);
						return info&&!get.is.locked(i)&&!info.limited&&!info.juexingji&&!info.zhuSkill&&!info.charlotte;
					});
					target.addAdditionalSkill('dcjiezhen_blocker','bazhen');
					target.addSkill('dcjiezhen_blocker');
					target.markAuto('dcjiezhen_blocker',skills);
					player.addSkill('dcjiezhen_clear');
					player.markAuto('dcjiezhen_clear',[target]);
				},
				ai:{
					order:1,
					result:{
						target:function(player,target){
							var skills=target.getSkills(null,false,false).filter(function(i){
								if(i=='bazhen') return;
								var info=get.info(i);
								return info&&!get.is.locked(i)&&!info.limited&&!info.juexingji&&!info.zhuSkill&&!info.charlotte;
							});
							if(!skills.length&&target.isEmpty(2)) return 1;
							return -0.5*skills.length;
						},
					},
				},
				subSkill:{
					blocker:{
						charlotte:true,
						init:function(player,skill){
							player.addSkillBlocker(skill);
						},
						onremove:function(player,skill){
							player.removeSkillBlocker(skill);
							player.removeAdditionalSkill(skill);
							delete player.storage.dcjiezhen_blocker;
						},
						charlotte:true,
						locked:true,
						skillBlocker:function(skill,player){
							return skill!='bazhen'&&skill!='dcjiezhen_blocker'&&!lib.skill[skill].charlotte&&player.getStorage('dcjiezhen_blocker').contains(skill);
						},
						mark:true,
						marktext:'阵',
						intro:{
							content:function(storage,player,skill){
								if(storage.length) return '失效技能：'+get.translation(storage);
								return '无失效技能';
							}
						}
					},
					clear:{
						audio:'dcjiezhen',
						charlotte:true,
						trigger:{
							global:['judgeAfter','die'],
							player:'phaseBegin',
						},
						forced:true,
						forceDie:true,
						onremove:true,
						filter:function(event,player){
							if(event.name=='die'){
								return player==event.player||player.getStorage('dcjiezhen_clear').contains(event.player);
							}
							else if(event.name=='judge'){
								return event.skill=='bagua'&&player.getStorage('dcjiezhen_clear').contains(event.player);
							}
							return player.getStorage('dcjiezhen_clear').length>0;
						},
						logTarget:function(event,player){
							if(event.name!='phase') return event.player;
							return player.getStorage('dcjiezhen_clear');
						},
						content:function(){
							'step 0'
							var targets=player.getStorage('dcjiezhen_clear');
							if(trigger.name=='die'&&player==trigger.player){
								for(var target of targets){
									target.removeSkill('dcjiezhen_blocker');
								}
								player.removeSkill('dcjiezhen_clear');
								event.finish();
								return;
							}
							if(trigger.name=='phase') event.targets=targets.slice(0).sortBySeat();
							else event.targets=[trigger.player];
							'step 1'
							var target=targets.shift();
							var storage=player.getStorage('dcjiezhen_clear');
							if(storage.contains(target)){
								storage.remove(target);
								target.removeSkill('dcjiezhen_blocker');
								if(target.isIn()&&target.countGainableCards(player,'hej')>0) player.gainPlayerCard(target,'hej',true);
							}
							if(targets.length>0){
								event.redo();
							}
							else{
								player.removeSkill('dcjiezhen_clear');
							}
						},
					},
				},
				derivation:'bazhen',
			},
			dczecai:{
				audio:2,
				trigger:{global:'roundStart'},
				limited:true,
				skillAnimation:true,
				direct:true,
				animationColor:'soil',
				filter:function(event,player){
					return game.roundNumber>1;
				},
				getMax:function(){
					var getNum=function(current){
						var history=current.actionHistory;
						var num=0;
						for(var i=history.length-2;i>=0;i--){
							for(var j=0;j<history[i].useCard.length;j++){
								if(get.type2(history[i].useCard[j].card,false)=='trick') num++;
							}
							if(history[i].isRound) break;
						}
						return num;
					};
					var max=0,current=false,targets=game.filterPlayer();
					for(var target of targets){
						var num=getNum(target);
						if(num>max){
							max=num;
							current=target;
						}
						else if(num==max) current=false;
					}
					return current;
				},
				content:function(){
					'step 0'
					event.target=lib.skill.dczecai.getMax();
					var str='令一名其他角色于本轮内获得〖集智〗';
					if(event.target&&event.target!=player) str+=('；若选择的目标为'+get.translation(event.target)+'，则其获得一个额外的回合');
					player.chooseTarget(lib.filter.notMe,get.prompt('dczecai'),str).set('maximum',event.target).set('ai',function(card,player,target){
						if(target!=_status.event.maximum) return 0;
						return get.attitude(_status.event.player,target);
					});
					'step 1'
					if(result.bool){
						player.awakenSkill('dczecai');
						var target=result.targets[0];
						player.logSkill('dczecai',target);
						target.addAdditionalSkill('dczecai_effect','rejizhi');
						target.addTempSkill('dczecai_effect','roundStart');
						if(target==event.target){
							var evt=trigger._trigger;
							target.insertPhase();
							if(evt.player!=target&&!evt._finished){
								evt.finish();
								evt._triggered=5;
								evt.player.insertPhase();
							}
						}
					}
				},
				derivation:'rejizhi',
				subSkill:{
					effect:{
						charlotte:true,
						mark:true,
						marktext:'才',
						intro:{content:'已拥有技能〖集智〗'},
					},
				},
			},
			dcyinshi:{
				audio:2,
				trigger:{player:'damageBegin'},
				usable:1,
				filter:function(event,player){
					return !event.card||get.color(event.card)=='none';
				},
				forced:true,
				content:function(){
					trigger.cancel();
				},
				group:'dcyinshi_gain',
				subSkill:{
					gain:{
						audio:'dcyinshi',
						trigger:{global:'judgeEnd'},
						forced:true,
						filter:function(event,player){
							return event.skill=='bagua'&&event.result.card&&get.position(event.result.card,true)=='o';
						},
						content:function(){
							player.gain(trigger.result.card,'gain2');
						},
					},
				},
			},
			//高览
			xizhen:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				direct:true,
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current!=player&&(player.canUse('sha',current,false)||player.canUse('juedou',current,false));
					})
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('xizhen'),'视为对一名角色使用【杀】或【决斗】',function(card,player,target){
						return target!=player&&(player.canUse('sha',target,false)||player.canUse('juedou',target,false));
					}).set('ai',function(target){
						var player=_status.event.player;
						var eff1=0,eff2=0;
						if(player.canUse('sha',target,false)) eff1=get.effect(target,{name:'sha'},player,player);
						if(player.canUse('juedou',target,false)) eff2=get.effect(target,{name:'juedou'},player,player);
						var effx=Math.max(eff1,eff2);
						if(effx<=0) return 0;
						if(target.isHealthy()) effx*=3;
						if(get.attitude(player,target)>0) effx*=1.6;
						return effx;
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('xizhen',target);
						var list=[];
						if(player.canUse('sha',target,false)) list.push('sha');
						if(player.canUse('juedou',target,false)) list.push('juedou');
						if(list.length==1) event._result={control:list[0]};
						else player.chooseControl(list).set('prompt','视为对'+get.translation(target)+'使用…').set('ai',function(){
							var player=_status.event.player,target=_status.event.getParent().target;
							var eff1=get.effect(target,{name:'sha'},player,player),eff2=get.effect(target,{name:'juedou'},player,player);
							return eff1>eff2?0:1;
						});
					}
					else event.finish();
					'step 2'
					player.useCard({name:result.control,isCard:true},target,false);
					'step 3'
					if(target.isIn()){
						player.storage.xizhen_effect=target;
						player.addTempSkill('xizhen_effect','phaseUseAfter');
					}
				},
				subSkill:{
					effect:{
						audio:'xizhen',
						charlotte:true,
						onremove:true,
						trigger:{global:['useCard','respond']},
						logTarget:function(event,player){
							return player.storage.xizhen_effect;
						},
						forced:true,
						filter:function(event,player){
							return Array.isArray(event.respondTo)&&event.respondTo[0]==player&&player.storage.xizhen_effect&&player.storage.xizhen_effect.isIn();
						},
						content:function(){
							'step 0'
							var target=player.storage.xizhen_effect;
							event.target=target;
							target.recover();
							'step 1'
							player.draw(target.isHealthy()?2:1);
						},
						mark:'character',
						intro:{content:'已指定$为目标'},
					},
				},
			},
			//管宁
			dunshi:{
				audio:2,
				enable:['chooseToUse','chooseToRespond'],
				usable:1,
				init:function(player,skill){
					if(!player.storage[skill]) player.storage[skill]=[['sha','shan','tao','jiu'],0];
				},
				hiddenCard:function(player,name){
					if(player.storage.dunshi&&player.storage.dunshi[0].contains(name)&&!player.getStat('skill').dunshi) return true;
					return false;
				},
				marktext:'席',
				mark:true,
				intro:{
					markcount:function(storage){
						return storage[1];
					},
					content:function(storage,player){
						if(!storage) return;
						var str='<li>';
						if(!storage[0].length){
							str+='已无可用牌';
						}
						else{
							str+='剩余可用牌：';
							str+=get.translation(storage[0]);
						}
						str+='<br><li>“席”标记数量：';
						str+=(storage[1]);
						return str;
					},
				},
				filter:function(event,player){
					if(event.type=='wuxie') return false;
					var storage=player.storage.dunshi;
					if(!storage||!storage[0].length) return false;
					for(var i of storage[0]){
						var card={name:i,isCard:true};
						if(event.filterCard(card,player,event)) return true;
					}
					return false;
				},
				chooseButton:{
					dialog:function(event,player){
						var list=[];
						var storage=player.storage.dunshi;
						for(var i of storage[0]) list.push(['基本','',i]);
						return ui.create.dialog('遁世',[list,'vcard'],'hidden');
					},
					filter:function(button,player){
						var evt=_status.event.getParent();
						return evt.filterCard({name:button.link[2],isCard:true},player,evt);
					},
					check:function(button){
						var card={name:button.link[2]},player=_status.event.player;
						if(_status.event.getParent().type!='phase') return 1;
						if(card.name=='jiu') return 0;
						if(card.name=='sha'&&player.hasSkill('jiu')) return 0;
						return player.getUseValue(card,null,true);
					},
					backup:function(links,player){
						return {
							audio:'dunshi',
							filterCard:function(){return false},
							popname:true,
							viewAs:{
								name:links[0][2],
								isCard:true,
							},
							selectCard:-1,
							precontent:function(){
								player.addTempSkill('dunshi_damage');
								player.storage.dunshi_damage=event.result.card.name;
							},
						}
					},
					prompt:function(links,player){
						return '选择【'+get.translation(links[0][2])+'】的目标';
					}
				},
				ai:{
					respondSha:true,
					respondShan:true,
					skillTagFilter:function(player,tag,arg){
						var storage=player.storage.dunshi;
						if(!storage||!storage[0].length) return false;
						if(player.getStat('skill').dunshi) return false;
						switch(tag){
							case 'respondSha':return (_status.event.type!='phase'||(player==game.me||player.isUnderControl()||player.isOnline()))&&storage[0].contains('sha');
							case 'respondShan':return storage[0].contains('shan');
							case 'save':
								if(arg==player&&storage[0].contains('jiu')) return true;
								return storage[0].contains('tao');
						}
					},
					order:2,
					result:{
						player:function(player){
							if(_status.event.type=='dying'){
								return get.attitude(player,_status.event.dying);
							}
							return 1;
						},
					},
				},
				initList:function(){
					var list,skills=[];
					var banned=['xunyi'];
					if(get.mode()=='guozhan'){
						list=[];
						for(var i in lib.characterPack.mode_guozhan) list.push(i);
					}
					else if(_status.connectMode) list=get.charactersOL();
					else{
						list=[];
						for(var i in lib.character){
							if(lib.filter.characterDisabled2(i)||lib.filter.characterDisabled(i)) continue;
							list.push(i);
						}
					}
					for(var i of list){
						if(i.indexOf('gz_jun')==0) continue;
						for(var j of lib.character[i][3]){
							var skill=lib.skill[j];
							if(!skill||skill.zhuSkill||banned.contains(j)) continue;
							if(skill.ai&&(skill.ai.combo||skill.ai.notemp||skill.ai.neg)) continue;
							var info=get.translation(j);
							for(var ix=0;ix<info.length;ix++){
								if(/仁|义|礼|智|信/.test(info[ix])==true){
									skills.add(j);
									break;
								}
							}
						}
					}
					_status.dunshi_list=skills;
				},
				subSkill:{
					backup:{audio:'dunshi'},
					damage:{
						audio:'dunshi',
						trigger:{global:'damageBegin2'},
						forced:true,
						charlotte:true,
						filter:function(event,player){
							return event.source==_status.currentPhase;
						},
						onremove:true,
						logTarget:'source',
						content:function(){
							'step 0'
							event.cardname=player.storage.dunshi_damage;
							player.removeSkill('dunshi_damage');
							event.target=trigger.source;
							event.videoId=lib.status.videoId++;
							var func=function(card,id,card2,card3){
								var list=[
									'防止即将对'+card3+'造成的伤害，并令'+card+'获得一个技能名中包含“仁/义/礼/智/信”的技能',
									'从〖遁世〗中删除【'+card2+'】并获得一枚“席”',
									'减1点体力上限，然后摸等同于“席”数的牌',
								];
								var choiceList=ui.create.dialog('遁世：请选择两项');
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
								player.send(func,get.translation(trigger.source),event.videoId,get.translation(event.cardname),get.translation(trigger.player));
							}
							event.dialog=func(get.translation(trigger.source),event.videoId,get.translation(event.cardname),get.translation(trigger.player));
							if(player!=game.me||_status.auto){
								event.dialog.style.display='none';
							}
							var next=player.chooseButton();
							next.set('dialog',event.videoId);
							next.set('forced',true);
							next.set('selectButton',2);
							next.set('ai',function(button){
								var player=_status.event.player;
								switch(button.link){
									case 0:
										if(get.attitude(player,_status.currentPhase)>0) return 3;
										return 0;
									case 1:
										return 1;
									case 2:
										var num=player.storage.dunshi[1];
										for(var i of ui.selected.buttons){
											if(i.link==1) num++;
										}
										if(num>0&&player.isDamaged()) return 2;
										return 0;
								}
							});
							'step 1'
							if(player.isOnline2()){
								player.send('closeDialog',event.videoId);
							}
							event.dialog.close();
							event.links=result.links.sort();
							for(var i of event.links){
								game.log(player,'选择了','#g【遁世】','的','#y选项'+get.cnNumber(i+1,true));
							}
							if(event.links.contains(0)){
								trigger.cancel();
								if(!_status.dunshi_list) lib.skill.dunshi.initList();
								var list=_status.dunshi_list.filter(function(i){
									return !target.hasSkill(i,null,null,false);
								}).randomGets(3);
								if(list.length==0) event.goto(3);
								else{
									event.videoId=lib.status.videoId++;
									var func=function(skills,id,target){
										var dialog=ui.create.dialog('forcebutton');
										dialog.videoId=id;
										dialog.add('令'+get.translation(target)+'获得一个技能');
										for(var i=0;i<skills.length;i++){
											dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【'+get.translation(skills[i])+'】</div><div>'+lib.translate[skills[i]+'_info']+'</div></div>');
										}
										dialog.addText(' <br> ');
									}
									if(player.isOnline()) player.send(func,list,event.videoId,target);
									else if(player==game.me) func(list,event.videoId,target);
									player.chooseControl(list).set('ai',function(){
										var controls=_status.event.controls;
										if(controls.contains('cslilu')) return 'cslilu';
										return controls[0];
									});
								}
							}
							else event.goto(3);
							'step 2'
							game.broadcastAll('closeDialog',event.videoId);
							target.addSkillLog(result.control);
							'step 3'
							var storage=player.storage.dunshi;
							if(event.links.contains(1)){
								storage[0].remove(event.cardname);
								storage[1]++;
								player.markSkill('dunshi');
							}
							if(event.links.contains(2)){
								player.loseMaxHp();
								if(storage[1]>0) player.draw(storage[1]);
							}
						},
					},
				},
			},
			//吉本
			xunli:{
				audio:2,
				trigger:{
					global:['loseAfter','loseAsyncAfter'],
				},
				forced:true,
				filter:function(event,player){
					if(event.type!='discard'||event.getlx===false||player.getExpansions('xunli').length>=9) return false;
					for(var i of event.cards){
						if(get.position(i,true)=='d'&&get.color(i,event.cards2&&event.cards2.contains(i)?event.player:false)=='black') return true;
					}
					return false;
				},
				content:function(){
					'step 0'
					var num=9-player.getExpansions('xunli').length;
					var cards=[];
					for(var i of trigger.cards){
						if(get.position(i,true)=='d'&&get.color(i,trigger.cards2&&trigger.cards2.contains(i)?trigger.player:false)=='black') cards.push(i);
					}
					if(cards.length<=num) event._result={
						bool:true,
						links:cards,
					}
					else player.chooseButton(true,num,['寻疠：将'+get.cnNumber(num)+'张牌置于武将牌上',cards]).set('forceAuto',true).set('ai',function(button){
						return get.value(button.link,_status.event.player);
					});
					'step 1'
					if(result.bool){
						player.addToExpansion('gain2',result.links).gaintag.add('xunli');
					}
				},
				marktext:'疠',
				intro:{
					content:'expansion',
					markcount:'expansion',
				},
				group:'xunli_exchange',
				subSkill:{
					exchange:{
						audio:'xunli',
						trigger:{player:'phaseUseBegin'},
						direct:true,
						filter:function(event,player){
							return player.getExpansions('xunli').length>0&&player.hasCard((card)=>get.color(card,player)=='black','h');
						},
						content:function(){
							"step 0"
							var cards=player.getExpansions('xunli');
							if(!cards.length||!player.countCards('h')){
								event.finish();
								return;
							}
							var next=player.chooseToMove('寻疠：是否交换“疠”和手牌？');
							next.set('list',[
								[get.translation(player)+'（你）的疠',cards],
								['手牌区',player.getCards('h',(card)=>get.color(card,player)=='black')],
							]);
							next.set('filterMove',function(from,to){
								return typeof to!='number';
							});
							next.set('processAI',function(list){
								var player=_status.event.player;
								var getv=function(card){
									if(get.info(card).toself) return 0;
									return player.getUseValue(card,false);
								};
								var cards=list[0][1].concat(list[1][1]).sort(function(a,b){
									return getv(b)-getv(a);
								}),cards2=cards.splice(0,player.getExpansions('xunli').length);
								return [cards2,cards];
							});
							"step 1"
							if(result.bool){
								var pushs=result.moved[0],gains=result.moved[1];
								pushs.removeArray(player.getExpansions('xunli'));
								gains.removeArray(player.getCards('h'));
								if(!pushs.length||pushs.length!=gains.length) return;
								player.logSkill('xunli_exchange');
								player.addToExpansion(pushs,player,'giveAuto').gaintag.add('xunli');
								game.log(player,'将',pushs,'作为“疠”置于武将牌上');
								player.gain(gains,'gain2');
							}
						},
					},
				},
			},
			zhishi:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('zhishi')).set('ai',function(target){
						var player=_status.event.player;
						var att=get.attitude(player,target);
						if(att<=4) return 0;
						if(target.hasSkillTag('nogain')) att/=10;
						return att;
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('zhishi',target);
						player.storage.zhishi_mark=target;
						player.addTempSkill('zhishi_mark',{player:'phaseBegin'});
					}
				},
				ai:{expose:0.3},
				subSkill:{
					mark:{
						trigger:{
							global:['dying','useCardToTargeted'],
						},
						direct:true,
						charlotte:true,
						filter:function(event,player){
							if(!player.getExpansions('xunli').length) return false;
							var target=player.storage.zhishi_mark;
							if(event.name=='dying') return event.player==target;
							return event.card.name=='sha'&&event.target==target;
						},
						content:function(){
							'step 0'
							var target=player.storage.zhishi_mark;
							event.target=target;
							player.chooseButton([get.prompt('zhishi',target),'<div class="text center">弃置任意张“疠”并令其摸等量的牌</div>',player.getExpansions('xunli')],[1,Infinity]).set('ai',function(button){
								var player=_status.event.player,target=player.storage.zhishi_mark;
								if(target.hp<1&&target!=get.zhu(player)) return 0;
								if(target.hasSkillTag('nogain')) return 0;
								return 3-player.getUseValue(card,false);
							});
							'step 1'
							if(result.bool){
								player.logSkill('zhishi',target);
								player.loseToDiscardpile(result.links);
								target.draw(result.links.length);
							}
						},
						mark:'character',
						intro:{
							content:'决定帮助$，具体帮不帮另说',
						},
					},
				},
			},
			lieyi:{
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.getExpansions('xunli').length>0;
				},
				filterTarget:lib.filter.notMe,
				content:function(){
					'step 0'
					var cards=player.getExpansions('xunli');
					var cards2=cards.filter(function(card){
						return target.isIn()&&player.canUse(card,target,false);
					});
					if(cards2.length){
						player.chooseButton(['对'+get.translation(target)+'使用一张牌',cards2],true).set('ai',function(button){
							return get.order(button.link);
						});
					}
					else{
						event.finish();
						if(cards.length) player.loseToDiscardpile(cards);
						if(target.isIn()&&!target.hasHistory('damage',function(evt){
							return evt.getParent('lieyi')==event&&evt._dyinged;
						})) player.loseHp();
					}
					'step 1'
					player.useCard(result.links[0],target,false);
					event.goto(0);
				},
				ai:{
					order:2,
					result:{
						target:function(player,target){
							var cards=player.getExpansions('xunli');
							var effect=0,damage=0;
							for(var i of cards){
								if(player.canUse(i,target,false)){
									effect+=get.effect(target,i,player,target);
									damage+=get.tag(i,'damage');
								}
							}
							if(damage>=target.hp) return effect;
							if(player.hp>2&&cards.length>3) return effect/3;
							return 0;
						},
					},
				},
			},
			//马日磾
			bingjie:{
				trigger:{player:'phaseUseBegin'},
				check:function(event,player){
					return player.maxHp>3&&player.isDamaged()&&player.hasCard(function(card){
						return game.hasPlayer(function(current){
							return current!=player&&get.attitude(player,current)<0&&player.canUse(card,current,null,true)&&get.effect(current,card,player,player)>0;
						})&&player.hasValueTarget(card);
					},'hs');
				},
				content:function(){
					'step 0'
					player.loseMaxHp();
					'step 1'
					player.addTempSkill('bingjie_effect');
					game.delayx();
				},
				subSkill:{
					effect:{
						audio:'bingjie',
						trigger:{player:'useCardToPlayered'},
						forced:true,
						charlotte:true,
						logTarget:'target',
						filter:function(event,player){
							return event.target!=player&&(event.card.name=='sha'||get.type(event.card,false)=='trick')&&event.target.countCards('he')>0;
						},
						content:function(){
							'step 0'
							trigger.target.chooseToDiscard('he',true);
							'step 1'
							if(result.bool&&result.cards.length&&get.color(result.cards[0],trigger.target)==get.color(trigger.card)){
								game.log(trigger.target,'不能响应',trigger.card);
								trigger.directHit.push(trigger.target);
							}
						},
					},
				},
			},
			zhengding:{
				audio:2,
				trigger:{player:['useCard','respond']},
				forced:true,
				filter:function(event,player){
					if(player==_status.currentPhase) return false;
					if(!Array.isArray(event.respondTo)) return false;
					if(player==event.respondTo[0]) return false;
					var color=get.color(event.card);
					if(color=='none') return false;
					return color==get.color(event.respondTo[1]);
				},
				content:function(){
					player.gainMaxHp();
					player.recover();
				},
			},
			//孙茹
			xiecui:{
				audio:2,
				trigger:{global:'damageBegin1'},
				filter:function(event,player){
					var source=event.source;
					if(!source||source!=_status.currentPhase||event.getParent().type!='card') return false;
					return !source.hasHistory('sourceDamage',function(evt){
						return evt.getParent().type=='card';
					});
				},
				logTarget:'source',
				prompt2:function(event,player){
					var str=('令'+get.translation(event.player)+'即将受到的');
					str+=(''+event.num+'点');
					if(lib.linked.contains(event.nature)){
						str+=(get.translation(event.nature)+'属性');
					}
					str+='伤害+1';
					if(event.source.group=='wu'){
						var cards=event.cards.filterInD();
						if(cards.length){
							str+=('；然后'+get.translation(event.source)+'获得'+get.translation(cards)+'，且本回合的手牌上限+1')
						}
					}
					return str;
				},
				check:function(event,player){
					var att=get.attitude(player,event.player);
					if(att<0){
						if(event.source.group!='wu'||!event.cards.filterInD().length) return true;
						return get.attitude(player,event.source)>0;
					}
					return false;
				},
				content:function(){
					trigger.num++;
					var source=trigger.source;
					if(source.group=='wu'){
						var cards=trigger.cards.filterInD();
						if(cards.length>0){
							source.gain(cards,'gain2');
							source.addMark('xiecui_effect',1,false);
							source.addTempSkill('xiecui_effect');
						}
					}
				},
				subSkill:{
					effect:{
						charlotte:true,
						mod:{
							maxHandcard:(player,num)=>num+player.countMark('xiecui_effect'),
						},
						marktext:'翠',
						onremove:true,
						intro:{content:'手牌上限+#'},
					},
				},
				ai:{threaten:1.75},
			},
			youxu:{
				audio:2,
				trigger:{global:'phaseEnd'},
				logTarget:'player',
				filter:function(event,player){
					return event.player.countCards('h')>event.player.hp;
				},
				check:function(event,player){
					if(get.attitude(player,event.player)<=0) return true;
					else return game.hasPlayer(function(current){
						return current!=event.player&&current.isDamaged()&&current.isMinHp()&&
							get.attitude(player,current)>0&&get.recoverEffect(current,player,player)>0;
					});
				},
				content:function(){
					'step 0'
					if(player==trigger.player){
						player.chooseCard('h',true,'请展示一张手牌');
					}
					else{
						player.choosePlayerCard(trigger.player,true,'h');
					}
					'step 1'
					var card=result.cards[0];
					event.card=card;
					var str=get.translation(player);
					if(player!=trigger.player) str+=('对'+get.translation(trigger.player));
					str+='发动了【忧恤】';
					player.showCards(card,str);
					player.chooseTarget('令一名角色获得'+get.translation(card),'若其体力值为全场最少，则其回复1点体力',function(card,player,target){
						return target!=_status.event.getTrigger().player;
					}).set('ai',function(target){
						var player=_status.event.player,att=get.attitude(player,target);
						if(att<0) return 0;
						if(target.isDamaged()&&target.isMinHp&&get.recoverEffect(target,player,player)>0) return 4*att;
						return att;
					});
					'step 2'
					var target=result.targets[0];
					event.target=target;
					player.line(target,'green');
					target.gain(card,trigger.player,'give').giver=player;
					'step 3'
					if(target.isMinHp()) target.recover();
				},
			},
			//夏侯令女
			fuping:{
				audio:2,
				hiddenCard:function(player,name){
					var list=player.getStorage('fuping').slice(0);
					list.removeArray(player.getStorage('fuping_round'));
					return list.contains(name)&&player.hasCard((card)=>(get.type(card)!='basic'),'ehs');
				},
				enable:'chooseToUse',
				locked:false,
				filter:function(event,player){
					var list=player.getStorage('fuping').slice(0);
					list.removeArray(player.getStorage('fuping_round'));
					if(!list.length) return false;
					if(!player.hasCard((card)=>(get.type(card)!='basic'),'ehs')) return false;
					for(var i of list){
						var type=get.type2(i,false);
						if((type=='basic'||type=='trick')&&event.filterCard({name:i},player,event)) return true;
					}
					return false;
				},
				chooseButton:{
					dialog:function(event,player){
						var list=player.getStorage('fuping').slice(0);
						list.removeArray(player.getStorage('fuping_round'));
						var list2=[];
						for(var i of list){
							var type=get.type2(i,false);
							if((type=='basic'||type=='trick')&&event.filterCard({name:i},player,event)) list2.push([type,'',i]);
						}
						return ui.create.dialog('浮萍',[list2,'vcard']);
					},
					check:function(button){
						if(_status.event.getParent().type!='phase') return 1;
						return _status.event.player.getUseValue({name:button.link[2]},null,true);
					},
					backup:function(links,player){
						return {
							audio:'fuping',
							filterCard:(card)=>get.type(card)!='basic',
							position:'he',
							popname:true,
							viewAs:{
								name:links[0][2],
								isCard:true,
							},
							check:function(card){
								return 8-get.value(card);
							},
							precontent:function(){
								player.addTempSkill('fuping_round');
								player.markAuto('fuping_round',[event.result.card.name]);
							},
						}
					},
					prompt:function(links,player){
						return '将一张非基本牌当做【'+get.translation(links[0][2])+'】使用';
					},
				},
				ai:{
					order:8,
					result:{player:1},
					respondSha:true,
					skillTagFilter:function(player){
						var list=player.getStorage('fuping').slice(0);
						list.removeArray(player.getStorage('fuping_round'));
						return list.contains('sha');
					},
				},
				mod:{
					targetInRange:function(card,player,target){
						if(player.countDisabled()>=5) return true;
					},
				},
				marktext:'萍',
				intro:{content:'已记录$'},
				group:'fuping_mark',
				subSkill:{
					mark:{
						trigger:{global:'useCardAfter'},
						filter:function(event,player){
							return player!=event.player&&event.targets.contains(player)&&
								player.countDisabled()<5&&!player.getStorage('fuping').contains(event.card.name);
						},
						logTarget:'player',
						prompt2:(event)=>('废除一个装备栏并记录【'+get.translation(event.card.name)+'】'),
						check:function(event,player){
							var list=['tao','juedou','guohe','shunshou','wuzhong','xietianzi','yuanjiao','wanjian','nanman','huoshaolianying','chuqibuyi','zhujinqiyuan','lebu','bingliang'];
							if(!list.contains(event.card.name)) return false;
							if(['nanman','wanjian'].contains(event.card.name)&&!player.hasValueTarget({name:event.card.name})) return false;
							var list=[3,5,4,1,2];
							for(var i of list){
								if(!player.isDisabled(i)){
									var card=player.getEquip(i);
									if(!card) return true;
									if(get.value(card,player)<=0) return true;
								}
							}
							return false;
						},
						content:function(){
							player.markAuto('fuping',[trigger.card.name]);
							game.log(player,'记录了','#y'+get.translation(trigger.card.name));
							player.chooseToDisable().set('ai',function(event,player,list){
								var list=[3,5,4,1,2];
								for(var i of list){
									if(!player.isDisabled(i)){
										var card=player.getEquip(i);
										if(!card) return 'equip'+i;
										if(get.value(card,player)<=0) return 'equip'+i;
									}
								}
								return list.randomGet();
							});
						},
					},
					backup:{audio:'fuping'},
					round:{charlotte:true,onremove:true},
				},
			},
			weilie:{
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					return player.countMark('weilie')<=player.getStorage('fuping').length&&player.countCards('he')>0&&game.hasPlayer((current)=>current.isDamaged())
				},
				filterCard:true,
				position:'he',
				filterTarget:(card,player,target)=>target.isDamaged(),
				check:function(card){
					return 8-get.value(card);
				},
				content:function(){
					'step 0'
					player.addMark('weilie',1,false);
					target.recover();
					'step 1'
					if(target.isDamaged()) target.draw();
				},
				onremove:true,
				ai:{
					order:1,
					result:{
						player:function(player,target){
							var eff=get.recoverEffect(target,player,player);
							if(target.getDamagedHp()>1) eff+=get.effect(target,{name:'wuzhong'},player,player)/2;
							return eff;
						},
					},
				},
			},
			//张瑶
			//Partly powered by 烟雨墨染
			yuanyu:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				content:function(){
					'step 0'
					player.draw();
					'step 1'
					if(player.countCards('h')>0&&game.hasPlayer(current=>current!=player)){
						var suits=lib.suit.slice(0),cards=player.getExpansions('yuanyu');
						for(var i of cards) suits.remove(get.suit(i,false));
						var str='选择一张手牌，作为“怨”置于武将牌上；同时选择一名其他角色，令该角色获得〖怨语〗的后续效果。'
						if(suits.length){
							str+='目前“怨”中未包含的花色：';
							for(var i of suits) str+=get.translation(i);
						}
						player.chooseCardTarget({
							filterCard:true,
							filterTarget:lib.filter.notMe,
							position:'h',
							prompt:'怨语：选择置于武将牌上的牌和目标',
							prompt2:str,
							suits:suits,
							forced:true,
							ai1:function(card){
								var val=get.value(card),evt=_status.event;
								if(evt.suits.contains(get.suit(card,false))) return 8-get.value(card);
								return 5-get.value(card);
							},
							ai2:function(target){
								var player=_status.event.player;
								if(player.storage.yuanyu_damage&&player.storage.yuanyu_damage.contains(target)) return 0;
								return -get.attitude(player,target);
							},
						});
					}
					else event.finish();
					'step 2'
					var target=result.targets[0];
					player.addSkill('yuanyu_damage');
					player.markAuto('yuanyu_damage',result.targets);
					player.line(target,'green');
					if(!target.storage.yuanyu_mark){
						target.storage.yuanyu_mark=player;
						target.markSkillCharacter('yuanyu_mark',player,'怨语','已获得〖怨语〗效果');
						target.addSkill('yuanyu_mark');
					}
					player.addToExpansion(result.cards,player,'give').gaintag.add('yuanyu');
				},
				intro:{
					content:'expansion',
					markcount:'expansion',
				},
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
					player.removeSkill('yuanyu_damage');
				},
				ai:{
					order:7,
					result:{
						player:1,
					},
				},
				subSkill:{
					mark:{
						mark:'character',
						charlotte:true,
						intro:{
							content:'已获得〖怨语〗效果',
							onunmark:true,
						},
					},
					damage:{
						trigger:{global:['damageSource','phaseDiscardBegin']},
						forced:true,
						charlotte:true,
						onremove:function(player,skill){
							if(player.storage[skill]){
								for(var i of player.storage[skill]){
									if(i.storage.yuanyu_mark==player) i.unmarkSkill('yuanyu_mark');
								}
							}
							delete player.storage[skill];
						},
						filter:function(event,player){
							if(event.name=='damage'){
								var source=event.source;
								return source&&player.getStorage('yuanyu_damage').contains(source)&&source.countCards('h')>0;
							}
							else{
								if(player==event.player){
									return player.getStorage('yuanyu_damage').some(function(target){
										return target.isIn()&&target.countCards('h')>0;
									});
								}
								else if(player.getStorage('yuanyu_damage').contains(event.player)){
									return event.player.countCards('h')>0;
								}
								return false;
							}
						},
						content:function(){
							'step 0'
							if(trigger.name=='phaseDiscard'){
								if(trigger.player==player){
									event.targets=player.getStorage('yuanyu_damage').filter(function(target){
										return target.isIn()&&target.countCards('h')>0;
									}).sortBySeat();
								}
								else event.targets=[trigger.player];
							}
							else event.targets=[trigger.source];
							'step 1'
							event.target=event.targets.shift();
							event.count=trigger.name=='damage'?trigger.num:1;
							'step 2'
							event.count--;
							var suits=lib.suit.slice(0),cards=player.getExpansions('yuanyu');
							for(var i of cards) suits.remove(get.suit(i,false));
							var next=target.chooseCard('h',true,'将一张手牌置于'+get.translation(player)+'的武将牌上');
							next.set('suits',suits);
							next.set('ai',function(card){
								var val=get.value(card),evt=_status.event;
								if(evt.suits.contains(get.suit(card,false))) return 5-get.value(card);
								return 8-get.value(card);
							});
							if(suits.length){
								var str='目前未包含的花色：';
								for(var i of suits) str+=get.translation(i);
								next.set('prompt2',str);
							}
							'step 3'
							player.addToExpansion(result.cards,target,'give').gaintag.add('yuanyu');
							'step 4'
							if(!player.hasSkill('yuanyu_damage')) event.finish();
							else if(event.count>0&&target.countCards('h')>0) event.goto(2);
							else if(event.targets.length>0) event.goto(1);
						},
					},
				},
			},
			xiyan:{
				audio:2,
				trigger:{player:'addToExpansionAfter'},
				filter:function(event,player){
					if(!event.gaintag.contains('yuanyu')) return false;
					var cards=player.getExpansions('yuanyu');
					if(cards.length<lib.suit.length) return false;
					var suits=lib.suit.slice(0);
					for(var i of cards){
						suits.remove(get.suit(i));
						if(!suits.length) return true;
					}
					return false;
				},
				logTarget:()=>_status.currentPhase,
				prompt2:'获得所有“怨”',
				check:()=>true,
				content:function(){
					'step 0'
					player.removeSkill('yuanyu_damage');
					var cards=player.getExpansions('yuanyu');
					player.gain(cards,'gain2');
					'step 1'
					var target=_status.currentPhase;
					if(player==target){
						player.addMark('xiyan_buff',4,false);
						player.addTempSkill('xiyan_buff');
						delete player.getStat('skill').yuanyu;
						event.finish();
					}
					else{
						player.chooseBool('夕颜：是否令'+get.translation(target)+'本回合的手牌上限-4且不能使用基本牌？').set('ai',function(){
							return _status.event.bool;
						}).set('bool',get.attitude(player,target)<0);
					}
					'step 2'
					if(result.bool){
						var target=_status.currentPhase;
						target.addMark('xiyan_debuff',4,false);
						target.addTempSkill('xiyan_debuff');
					}
				},
				subSkill:{
					buff:{
						charlotte:true,
						mark:true,
						marktext:" +4 ",
						intro:{
							content:"本回合手牌上限+4且使用牌无次数限制",
						},
						mod:{
							maxHandcard:function(player,num){
								return num+player.countMark('xiyan_buff');
							},
							cardUsable:function(card,player){
								return Infinity;
							},
						},
						sub:true,
					},
					debuff:{
						charlotte:true,
						mark:true,
						marktext:" -4 ",
						intro:{
							content:"本回合手牌上限-#且不能使用基本牌",
						},
						mod:{
							maxHandcard:function(player,num){
								return num-player.countMark('xiyan_debuff');
							},
							cardEnabled:function(card){
								if(get.type(card)=='basic') return false;
							},
							cardSavable:function(card){
								if(get.type(card)=='basic') return false;
							},
						},
						sub:true,
					},
				},
			},
			//滕胤
			chenjian:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				prompt2:function(event,player){
					return '展示牌堆顶的'+get.cnNumber(3+player.countMark('chenjian'))+'张牌。然后你可依次执行以下两项中的任意项：⒈弃置一张牌，然后令一名角色获得与你弃置牌花色相同的牌。⒉使用其中剩余的一张牌。若你执行了所有选项，则你获得一枚“陈见”，然后重铸所有手牌。';
				},
				content:function(){
					'step 0'
					var cards=get.cards(3+player.countMark('chenjian'));
					event.cards=cards;
					game.cardsGotoOrdering(cards);
					game.log(player,'展示了',event.cards);
					event.videoId=lib.status.videoId++;
					game.broadcastAll(function(player,id,cards){
						var str=get.translation(player)+'发动了【陈见】';
						var dialog=ui.create.dialog(str,cards);
						dialog.videoId=id;
					},player,event.videoId,event.cards);
					game.addVideo('showCards',player,[get.translation(player)+'发动了【陈见】',get.cardsInfo(event.cards)]);
					game.delay(2);
					'step 1'
					if(!player.countCards('he')){
						game.broadcastAll('closeDialog',event.videoId);
						game.addVideo('cardDialog',null,event.videoId);
						event.goto(4);
					}
					else{
						player.chooseToDiscard('he').set('prompt',false).set('ai',function(card){
							var cards=_status.event.getParent().cards,val=-get.value(card),suit=get.suit(card);
							for(var i of cards){
								if(get.suit(i,false)==suit) val+=get.value(i,'raw');
							}
							return val;
						});
						var func=function(id){
							var dialog=get.idDialog(id);
							if(dialog) dialog.content.firstChild.innerHTML='是否弃置一张牌？';
						};
						if(player==game.me) func(event.videoId);
						else if(player.isOnline()) player.send(func,event.videoId);
					}
					'step 2'
					game.broadcastAll('closeDialog',event.videoId);
					game.addVideo('cardDialog',null,event.videoId);
					if(result.bool){
						event.goon1=true;
						var suit=get.suit(result.cards[0],player);
						var cards2=event.cards.filter(function(i){
							return get.suit(i,false)==suit;
						});
						if(cards2.length){
							event.cards2=cards2;
							player.chooseTarget(true,'选择一名角色获得'+get.translation(cards2)).set('ai',function(target){
								var att=get.attitude(_status.event.player,target);
								if(att>0){
									return att+Math.max(0,5-target.countCards('h'));
								}
								return att;
							});
						}
						else event.goto(4);
					}
					else event.goto(4);
					'step 3'
					if(result.bool){
						var target=result.targets[0];
						player.line(target,'green');
						target.gain(event.cards2,'gain2');
						event.cards.removeArray(event.cards2);
					}
					'step 4'
					var cards2=cards.filter(function(i){
						return player.hasUseTarget(i);
					});
					if(cards2.length) player.chooseButton(['是否使用其中的一张牌？',cards2]).set('ai',function(button){
						return player.getUseValue(button.link);
					});
					else event.finish();
					'step 5'
					if(result.bool){
						player.chooseUseTarget(true,result.links[0],false);
						event.goon2=true;
					}
					'step 6'
					if(event.goon1&&event.goon2){
						if(player.countMark('chenjian')<2) player.addMark('chenjian',1,false);
						var cards=player.getCards('h');
						player.loseToDiscardpile(cards);
						player.draw(cards.length);
					}
				},
				marktext:'见',
				intro:{content:'展示牌数量+#'},
			},
			xixiu:{
				mod:{
					canBeDiscarded:function(card,player,target){
						if(player!=target&&get.position(card)=='e'&&target.countCards('e')==1) return false;
					},
				},
				audio:2,
				trigger:{target:'useCardToTargeted'},
				forced:true,
				filter:function(event,player){
					if(player==event.player||!player.countCards('e')) return false;
					var suit=get.suit(event.card,false);
					if(suit=='none') return false;
					return player.hasCard(function(card){
						return get.suit(card,player)==suit;
					},'e');
				},
				content:function(){
					player.draw();
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(typeof card=='object'&&player!=target){
								var suit=get.suit(card);
								if(suit=='none') return;
								if(player.hasCard(function(card){
									return get.suit(card,player)==suit;
								},'e')) return [1,0.08];
							}
						},
					},
				},
			},
			//张嫙
			tongli:{
				audio:2,
				trigger:{player:'useCardToPlayered'},
				filter:function(event,player){
					if(!event.isFirstTarget||(event.card.storage&&event.card.storage.tongli)) return false;
					var type=get.type(event.card);
					if(type!='basic'&&type!='trick') return false;
					var hs=player.getCards('h');
					if(!hs.length) return false;
					var evt=event.getParent('phaseUse');
					if(!evt||evt.player!=player) return false;
					var num1=player.getHistory('useCard',function(evtx){
						if(evtx.getParent('phaseUse')!=evt) return false;
						return !evtx.card.storage||!evtx.card.storage.tongli;
					}).length;
					if(hs.length<num1) return false;
					var list=[];
					for(var i of hs) list.add(get.suit(i,player));
					return list.length==num1;
				},
				prompt2:function(event,player){
					var evt=event.getParent('phaseUse');
					var num=player.getHistory('useCard',function(evtx){
						if(evtx.getParent('phaseUse')!=evt) return false;
						return !evtx.card.storage||!evtx.card.storage.tongli;
					}).length;
					//var str='视为额外使用'+get.cnNumber(num)+'张'
					var str='额外结算'+get.cnNumber(num)+'次'
					if(event.card.name=='sha'&&event.card.nature) str+=get.translation(event.card.nature);
					return (str+'【'+get.translation(event.card.name)+'】');
				},
				check:function(event,player){
					return !get.tag(event.card,'norepeat')
				},
				content:function(){
					//player.addTempSkill('tongli_effect');
					var evt=trigger.getParent('phaseUse');
					var num=player.getHistory('useCard',function(evtx){
						if(evtx.getParent('phaseUse')!=evt) return false;
						return true;
						//return !evtx.card.storage||!evtx.card.storage.tongli;
					}).length;
					trigger.getParent().effectCount+=num;
				},
				/*subSkill:{
					effect:{
						trigger:{player:'useCardAfter'},
						forced:true,
						charlotte:true,
						filter:function(event,player){
							return event.tongli_effect!=undefined;
						},
						content:function(){
							'step 0'
							event.card=trigger.tongli_effect[0];
							event.count=trigger.tongli_effect[1];
							'step 1'
							event.count--;
							for(var i of trigger.targets){
								if(!i.isIn()||!player.canUse(card,i,false)) return;
							}
							if(trigger.addedTarget&&!trigger.addedTarget.isIn()) return;
							if(trigger.addedTargets&&trigger.addedTargets.length){
								for(var i of trigger.addedTargets){
									if(!i.isIn()) return;
								}
							}
							var next=player.useCard(get.copy(card),trigger.targets,false);
							if(trigger.addedTarget) next.addedTarget=trigger.addedTarget;
							if(trigger.addedTargets&&trigger.addedTargets.length) next.addedTargets=trigger.addedTargets.slice(0);
							if(event.count>0) event.redo();
						},
					},
				},*/
			},
			shezang:{
				audio:2,
				round:1,
				trigger:{global:'dying'},
				frequent:true,
				filter:function(event,player){
					return event.player==player||player==_status.currentPhase;
				},
				content:function(){
					var cards=[];
					for(var i of lib.suit){
						var card=get.cardPile2(function(card){
							return get.suit(card,false)==i;
						});
						if(card) cards.push(card);
					}
					if(cards.length) player.gain(cards,'gain2');
				},
			},
			//王桃王悦
			huguan:{
				audio:2,
				audioname:['wangyue'],
				trigger:{global:'useCard'},
				direct:true,
				filter:function(event,player){
					if(get.color(event.card,false)!='red') return false;
					var evt=event.getParent('phaseUse');
					if(!evt||evt.player!=event.player) return false;
					return event.player.getHistory('useCard',function(event){
						return event.getParent('phaseUse')==evt;
					}).indexOf(event)==0;
				},
				content:function(){
					'step 0'
					player.chooseControl(lib.suit,'cancel2').set('prompt',get.prompt('huguan',trigger.player)).set('prompt2','令某种花色的手牌不计入其本回合的手牌上限').set('ai',function(){
						var player=_status.event.player,target=_status.event.getTrigger().player;
						if(get.attitude(player,target)<=0) return 'cancel2';
						var list=lib.suit.slice(0);
						list.removeArray(target.getStorage('huguan_add'));
						if(list.length) return list.randomGet();
						return 'cancel2';
					});
					'step 1'
					if(result.control!='cancel2'){
						var target=trigger.player;
						player.logSkill('huguan',target);
						game.log(player,'选择了','#g'+get.translation(result.control),'花色')
						target.addTempSkill('huguan_add');
						target.markAuto('huguan_add',[result.control]);
					}
				},
				subSkill:{
					add:{
						charlotte:true,
						onremove:true,
						mod:{
							ignoredHandcard:function(card,player){
								if(player.getStorage('huguan_add').contains(get.suit(card,player))) return true;
							},
							cardDiscardable:function(card,player,name){
								if(name=='phaseDiscard'&&player.getStorage('huguan_add').contains(get.suit(card,player))) return false;
							}
						},
						intro:{content:'本回合$花色的牌不计入手牌上限'},
					},
				},
			},
			yaopei:{
				audio:2,
				trigger:{global:'phaseDiscardEnd'},
				direct:true,
				filter:function(event,player){
					if(player==event.player||!event.player.isIn()) return false;
					if(!player.hasAllHistory('useSkill',function(evt){
						return evt.skill=='huguan'&&evt.targets.contains(event.player);
					})) return false;
					var suits=[];
					event.player.getHistory('lose',function(evt){
						if(evt.type=='discard'&&evt.getParent('phaseDiscard')==event){
							for(var i of evt.cards2) suits.add(get.suit(i,evt.hs.contains(i)?evt.player:false));
						}
					});
					if(suits.length>=lib.suit.length) return false;
					if(_status.connectMode&&player.countCards('h')>0) return true;
					return player.hasCard(function(card){
						return !suits.contains(get.suit(card));
					},'he');
				},
				content:function(){
					'step 0'
					var suits=[];
					trigger.player.getHistory('lose',function(evt){
						if(evt.type=='discard'&&evt.getParent('phaseDiscard')==trigger){
							for(var i of evt.cards2) suits.add(get.suit(i,evt.hs.contains(i)?evt.player:false));
						}
					});
					player.chooseCardTarget({
						prompt:get.prompt('yaopei',trigger.player),
						prompt2:'操作提示：选择要弃置的牌，并选择执行摸牌选项的角色，另一名角色执行回复体力的选项。',
						suits:suits,
						position:'he',
						filterCard:function(card,player){
							return !_status.event.suits.contains(get.suit(card))&&lib.filter.cardDiscardable(card,player,'yaopei');
						},
						filterTarget:function(card,player,target){
							return target==player||target==_status.event.getTrigger().player;
						},
						ai1:function(card){
							return 8-get.value(card);
						},
						ai2:function(target){
							var player=_status.event.player,source=_status.event.getTrigger().player;
							var recoverer=(player==target?source:player);
							if(recoverer.isHealthy()) return (get.attitude(player,target)>0?1:0);
							if(get.recoverEffect(recoverer,player,player)>0&&get.attitude(player,target)>0) return 2;
							return 0;
						},
					});
					'step 1'
					if(result.bool){
						var target=trigger.player;
						player.logSkill('yaopei',target);
						player.discard(result.cards);
						if(player==result.targets[0]){
							target.recover();
							player.draw(2);
						}
						else{
							target.draw(2);
							player.recover();
						}
					}
				},
			},
			mingluan:{
				audio:2,
				trigger:{global:'phaseJieshuBegin'},
				direct:true,
				filter:function(event,player){
					return player!=event.player&&event.player.isIn()&&player.hasSkill('mingluan_mark')&&player.countCards('he')>0;
				},
				content:function(){
					'step 0'
					player.chooseToDiscard('he',get.prompt('mingluan'),'弃置任意张牌，并摸等同于'+get.translation(trigger.player)+'手牌数的牌（至多摸至五张）',[1,Infinity]).set('ai',function(card){
						var player=_status.event.player;
						var ph=player.countCards('h');
						if(get.position(card)=='h') ph--;
						var num=Math.min(_status.event.getTrigger().player.countCards('h'),5-ph);
						if(num>0) return 3.5*num+0.01-get.value(card);
						return 0.01-get.value(card);
					}).logSkill=['mingluan',trigger.player];
					'step 1'
					if(result.bool){
						var num=trigger.player.countCards('h'),num2=5-player.countCards('h');
						if(num>0&&num2>0) player.draw(Math.min(num,num2));
					}
				},
				group:'mingluan_count',
				subSkill:{
					count:{
						charlotte:true,
						trigger:{global:'recoverEnd'},
						silent:true,
						popup:false,
						firstDo:true,
						filter:function(event,player){
							var current=_status.currentPhase;
							return current&&current!=player&&!player.hasSkill('mingluan_mark');
						},
						content:function(){
							player.addTempSkill('mingluan_mark');
						},
					},
					mark:{
						charlotte:true,
					},
				},
			},
			//赵嫣
			jinhui:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				content:function(){
					'step 0'
					var cards=[];
					while(cards.length<3){
						var card=get.cardPile2(function(card){
							for(var i of cards){
								if(i.name==card.name) return false;
							}
							var info=get.info(card,false);
							if(info.ai&&info.ai.tag&&info.ai.tag.damage) return false;
							return !info.notarget&&(info.toself||info.singleCard||!info.selectTarget||info.selectTarget==1);
						});
						if(card) cards.push(card);
						else break;
					}
					if(!cards.length) event.finish();
					else{
						player.showCards(cards,get.translation(player)+'发动了【锦绘】');
						event.cards=cards;
						game.cardsGotoOrdering(cards);
						if(game.hasPlayer((current)=>(current!=player))) player.chooseTarget('选择【锦绘】的目标',true,lib.filter.notMe).set('ai',function(target){
							var player=_status.event.player,cards=_status.event.getParent().cards.slice(0);
							var max_effect=0,max_effect_player=0;
							for(var i of cards){
								var targetx=lib.skill.jinhui.getUsableTarget(i,target,player);
								if(targetx){
									var effect2=get.effect(targetx,i,target,target);
									var effect3=get.effect(targetx,i,target,player);
									if(effect2>max_effect){
										max_effect=effect2;
										max_effect_player=effect3;
									}
								}
							}
							return max_effect_player;
						});
						else event.finish();
					}
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.line(target,'green');
						var cards=cards.filter(function(card){
							return lib.skill.jinhui.getUsableTarget(card,target,player);
						});
						if(cards.length){
							if(cards.length==1) event._result={bool:true,links:cards};
							else target.chooseButton(['选择按“锦绘”规则使用一张牌',cards],true).set('ai',function(button){
								var player=_status.event.player,target=_status.event.getParent().player,card=button.link;
								var targetx=lib.skill.jinhui.getUsableTarget(card,player,target);
								var effect=get.effect(targetx,card,player,player),cards=_status.event.getParent().cards.slice(0);
								var effect2=0,effect3=0;
								cards.remove(button.link);
								for(var i of cards){
									var targetx=lib.skill.jinhui.getUsableTarget(i,target,player);
									if(targetx){
										effect2+=get.effect(targetx,i,target,target);
										effect3+=get.effect(targetx,i,target,player);
									}
								}
								if(effect2>0) effect+=effect3;
								return effect;
							});
						}
						else event.goto(3);
					}
					else event.finish();
					'step 2'
					if(result.bool){
						var card=result.links[0];
						event.cards.remove(card);
						var targetx=lib.skill.jinhui.getUsableTarget(card,target,player);
						target.useCard(card,targetx,false,'noai');
					}
					'step 3'
					var cards=cards.filter(function(card){
						return lib.skill.jinhui.getUsableTarget(card,player,target);
					});
					if(cards.length){
						player.chooseButton(['是否按“锦绘”规则使用其中一张牌？',cards]).set('ai',function(button){
							var player=_status.event.player,target=_status.event.getParent().target;
							var card=button.link,targetx=lib.skill.jinhui.getUsableTarget(card,player,target);
							return get.effect(targetx,card,player,player)
						});
					}
					else event.finish();
					'step 4'
					if(result.bool){
						var card=result.links[0];
						cards.remove(card);
						var targetx=lib.skill.jinhui.getUsableTarget(card,player,target);
						if(targetx){
							player.useCard(card,targetx,false,'noai');
						}
						if(cards.length) event.goto(3);
					}
					else event.finish();
				},
				getUsableTarget:function(card,player,target){
					var info=get.info(card,false);
					if(info.toself) return player.canUse(card,player,false)?player:false;
					return (target.isIn()&&player.canUse(card,target,false))?target:false;
				},
				ai:{
					order:5,
					result:{player:1},
				},
			},
			qingman:{
				audio:2,
				trigger:{global:'phaseEnd'},
				forced:true,
				logTarget:'player',
				filter:function(event,player){
					if(!event.player.isIn()) return false;
					var num=player.countCards('h');
					if(num>=5) return false;
					var num2=0;
					for(var i=1;i<=5;i++){
					 if(event.player.isEmpty(i)) num2++;
					}
					return num<num2;
				},
				content:function(){
					var num2=0;
					for(var i=1;i<=5;i++){
					 if(trigger.player.isEmpty(i)) num2++;
					}
					player.drawTo(num2);
				},
			},
			//何晏
			yachai:{
				audio:2,
				trigger:{player:'damageEnd'},
				filter:function(event,player){
					return event.source&&event.source.isIn();
				},
				logTarget:'source',
				check:function(event,player){
					return get.attitude(player,event.source)<0;
				},
				content:function(){
					'step 0'
					var target=trigger.source,str=get.translation(player);
					event.target=target;
					var th=target.countCards('h');
					if(th>0){
						event.num=Math.ceil(th/2);
						var list=[
							'本回合不能使用或打出手牌，然后'+str+'摸两张牌',
							'展示所有手牌，并将其中一种花色的所有牌交给'+str,
							'弃置'+get.cnNumber(event.num)+'张手牌',
						];
						target.chooseControl().set('choiceList',list).set('ai',function(){
							return get.rand(0,2);
						});
					}
					else event._result={index:0};
					'step 1'
					switch(result.index){
						case 0:
							target.addTempSkill('yachai_block');
							player.draw(2);
							event.finish();
							break;
						case 1:target.showHandcards();break;
						case 2:event.goto(4);break;
					}
					'step 2'
					var map={},hs=target.getCards('h');
					for(var i of hs){
						map[get.suit(i,target)]=true;
					}
					var list=[];
					for(var i of lib.suit){
						if(map[i]) list.push(i);
					}
					if(!list.length) event.finish();
					else if(list.length==1) event._result={control:list[0]};
					else target.chooseControl(list).set('prompt','将一种花色的牌交给'+get.translation(player));
					'step 3'
					var cards=target.getCards('h',function(card){
						return get.suit(card,target)==result.control&&lib.filter.cardDiscardable(card,target,'yachai');
					});
					if(cards.length) target.give(cards,player,'give');
					event.finish();
					'step 4'
					target.chooseToDiscard('h',true,num);
				},
				subSkill:{
					block:{
						mark:true,
						intro:{content:'不能使用或打出手牌'},
						charlotte:true,
						mod:{
							cardEnabled2:function(card){
								if(get.position(card)=='h') return false;
							},
						},
					},
				},
			},
			qingtan:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return game.hasPlayer((current)=>current.countCards('h')>0);
				},
				filterTarget:function(card,player,target){
					return target.countCards('h')>0;
				},
				selectTarget:-1,
				multitarget:true,
				multiline:true,
				content:function(){
					'step 0'
					targets.sortBySeat();
					var next=player.chooseCardOL(targets,'请选择要展示的牌',true).set('ai',function(card){
						return -get.value(card);
					}).set('source',player);
					next.aiCard=function(target){
						var hs=target.getCards('h');
						return {bool:true,cards:[hs.randomGet()]};
					};
					next._args.remove('glow_result');
					'step 1'
					var cards=[];
					event.videoId=lib.status.videoId++;
					for(var i=0;i<targets.length;i++) cards.push(result[i].cards[0]);
					event.cards=cards;
					game.log(player,'展示了',targets,'的',cards);
					game.broadcastAll(function(targets,cards,id,player){
						var dialog=ui.create.dialog(get.translation(player)+'发动了【清谈】',cards);
						dialog.videoId=id;
						var getName=function(target){
							if(target._tempTranslate) return target._tempTranslate;
							var name=target.name;
							if(lib.translate[name+'_ab']) return lib.translate[name+'_ab'];
							return get.translation(name);
						}
						for(var i=0;i<targets.length;i++){
							dialog.buttons[i].querySelector('.info').innerHTML=getName(targets[i])+get.translation(cards[i].suit);
						}
					},targets,cards,event.videoId,player);
					game.delay(4);
					'step 2'
					game.broadcastAll('closeDialog',event.videoId);
					var list=[],map={};
					for(var i of cards){
						var suit=get.suit(i);
						if(!map[suit]) map[suit]=[];
						map[suit].push(i);
					}
					var dialog=['选择获得一种花色的所有牌'];
					for(var suit of lib.suit){
						if(map[suit]){
							var targetsx=map[suit].map(function(card){
								return targets[cards.indexOf(card)];
							});
							dialog.push('<div class="text center">'+get.translation(targetsx)+'</div>');
							dialog.push(map[suit]);
							list.push(suit);
						}
					}
					if(list.length){
						player.chooseControl(list,'cancel2').set('dialog',dialog);
					}
					else event.finish();
					'step 3'
					if(result.control!='cancel2'){
						event.cards2=cards.filter(function(i){
							return get.suit(i)==result.control;
						})
						for(var i=0;i<cards.length;i++){
							if(event.cards2.contains(cards[i])){
								targets[i].$give(cards[i],player,false);
							}
						}
						player.gain(event.cards2,'log');
					}
					else event.finish();
					'step 4'
					var draws=[];
					for(var i=0;i<cards.length;i++){
						if(!event.cards2.contains(cards[i])){
							targets[i].discard(cards[i]).delay=false;
						}
						else draws.push(targets[i]);
					}
					if(draws.length) game.asyncDraw(draws);
					'step 5'
					game.delayx();
				},
				ai:{
					order:7,
					result:{
						player:0.3,
						target:-1,
					},
				},
			},
			//邓芝
			jianliang:{
				audio:2,
				trigger:{player:'phaseDrawBegin2'},
				filter:function(event,player){
					return !player.isMaxHandcard();
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('jianliang'),'令至多两名角色各摸一张牌',[1,2]).set('ai',function(target){
						return Math.sqrt(5-Math.min(4,target.countCards('h')))*get.attitude(_status.event.player,target);
					});
					'step 1'
					if(result.bool){
						var targets=result.targets.sortBySeat();
						player.logSkill('jianliang',targets);
						if(targets.length==1){
							targets[0].draw();
							event.finish();
						}
						else game.asyncDraw(targets);
					}
					else event.finish();
					'step 2'
					game.delayx();
				},
			},
			weimeng:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return player.hp>0&&target!=player&&target.countGainableCards(player,'h')>0;
				},
				content:function(){
					'step 0'
					player.gainPlayerCard(target,'h',true,[1,player.hp]);
					'step 1'
					if(result.bool&&target.isIn()){
						var num=result.cards.length,hs=player.getCards('he');
						var numx=0;
						for(var i of result.cards) numx+=get.number(i,player);
						event.num=numx;
						event.cards=result.cards;
						if(!hs.length) event.finish();
						else if(hs.length<=num) event._result={bool:true,cards:hs};
						else player.chooseCard('he',true,'选择交给'+get.translation(target)+get.cnNumber(num)+'张牌','（已获得牌的点数和：'+numx+'）',num);
					}
					else event.finish();
					'step 2'
					player.give(result.cards,target);
					var numx=0;
					for(var i of result.cards) numx+=get.number(i,player);
					if(numx>num) player.draw();
					else if(numx<num) player.discardPlayerCard(target,true,'hej');
				},
				ai:{
					order:6,
					tag:{
						lose:1,
						loseCard:1,
						gain:1,
					},
					result:{
						target:function(player,target){
							return -Math.pow(Math.min(player.hp,target.countCards('h')),2)/4;
						},
					},
				},
			},
			//冯熙
			yusui:{
				audio:2,
				trigger:{target:'useCardToTargeted'},
				filter:function(event,player){
					return event.player!=player&&event.player.isIn()&&get.color(event.card)=='black';
				},
				logTarget:'player',
				check:function(event,player){
					var target=event.player;
					if(player.hp<3||get.attitude(player,target)>-3) return false;
					if(player.hp<target.hp) return true;
					if(Math.min(target.countCards('h')-player.countCards('h'),target.countCards('h'))>3) return true;
					return false;
				},
				preHidden:true,
				content:function(){
					'step 0'
					player.loseHp();
					event.target=trigger.player;
					'step 1'
					event.addIndex=0;
					var list=[],num=target.countCards('h')-player.countCards('h');
					event.num=num;
					if(num>0&&target.countCards('h')>0) list.push('令其弃置'+get.cnNumber(num)+'张手牌');
					else event.addIndex++;
					if(target.hp>player.hp) list.push('令其失去'+get.cnNumber(target.hp-player.hp)+'点体力');
					if(!list.length) event.finish();
					else if(list.length==1) event._result={index:0};
					else player.chooseControl().set('choiceList',list).set('prompt','令'+get.translation(target)+'执行一项').set('ai',function(){
						var player=_status.event.player,target=_status.event.getParent().target;
						return (target.hp-player.hp)>(Math.min(_status.event.getParent().num,target.countCards('h'))/2)?1:0;
					});
					'step 2'
					if(result.index+event.addIndex==0) target.chooseToDiscard(num,true,'h');
					else target.loseHp(target.hp-player.hp);
				},
			},
			boyan:{
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return target!=player;
				},
				content:function(){
					'step 0'
					target.drawTo(Math.min(5,target.maxHp));
					'step 1'
					target.addTempSkill('boyan_block');
				},
				subSkill:{
					block:{
						mark:true,
						intro:{content:'不能使用或打出手牌'},
						charlotte:true,
						mod:{
							cardEnabled2:function(card){
								if(get.position(card)=='h') return false;
							},
						},
					},
				},
				ai:{
					order:4,
					result:{
						target:function(player,target){
							if(get.attitude(player,target)>0) return Math.max(0,Math.min(5,target.maxHp)-target.countCards('h'));
							if(Math.max(0,Math.min(5,target.maxHp)-target.countCards('h'))<=1&&target.countCards('h','shan')&&!target.hasSkillTag('respondShan',true,null,true)&&player.countCards('h',function(card){
								return get.tag(card,'respondShan')&&player.getUseValue(card,null,true)>0&&get.effect(target,card,player,player)>0;
							})) return -2;
						},
					},
				},
			},
			//祢衡
			rekuangcai:{
				audio:2,
				forced:true,
				trigger:{player:'phaseDiscardBegin'},
				filter:function(event,player){
					return !player.getHistory('useCard').length||!player.getHistory('sourceDamage').length;
				},
				content:function(){
					lib.skill.rekuangcai.change(player,player.getHistory('useCard').length?-1:1);
				},
				mod:{
					targetInRange:function(card,player){
						if(player==_status.currentPhase) return true;
					},
					cardUsable:function(card,player){
						if(player==_status.currentPhase) return Infinity;
					},
				},
				change:function(player,num){
					if(typeof player.storage.rekuangcai_change!='number') player.storage.rekuangcai_change=0;
					player.storage.rekuangcai_change+=num;
					player.addSkill('rekuangcai_change');
				},
				group:'rekuangcai_draw',
				subSkill:{
					draw:{
						audio:'rekuangcai',
						trigger:{player:'phaseJieshuBegin'},
						forced:true,
						filter:function(event,player){
							return player.getHistory('sourceDamage').length>0;
						},
						content:function(){
							player.draw(Math.min(5,player.getStat('damage')));
						},
					},
					change:{
						mod:{
							maxHandcard:function(player,num){
								if(typeof player.storage.rekuangcai_change=='number') return num+player.storage.rekuangcai_change;
							},
						},
						charlotte:true,
						mark:true,
						intro:{
							content:(num)=>('手牌上限'+(num<0?'':'+')+num),
						},
					},
				},
			},
			reshejian:{
				audio:2,
				trigger:{target:'useCardToTargeted'},
				filter:function(event,player){
					if(player==event.player||event.targets.length!=1) return false;
					return player.countCards('h')>=2;
				},
				direct:true,
				usable:2,
				content:function(){
					'step 0'
					player.chooseToDiscard('he',[2,Infinity],get.prompt('reshejian',trigger.player),'<div class="text center">弃置至少两张手牌，然后选择一项：<br>⒈弃置其等量的牌。⒉对其造成1点伤害。</div>').set('ai',function(card){
						if(_status.event.goon&&ui.selected.cards.length<2) return 5.6-get.value(card);
						return 0;
					}).set('goon',function(){
						var target=trigger.player;
						if(get.damageEffect(target,player,player)>0) return true;
						if(target.countCards('he',function(card){
							return get.value(card,target)>6;
						})>=2) return true;
						return false;
					}()).logSkill=['reshejian',trigger.player];
					'step 1'
					if(!result.bool){
						player.storage.counttrigger.reshejian--;
						event.finish();
						return;
					}
					var num=result.cards.length;
					event.num=num;
					var target=trigger.player,str=get.translation(target);
					event.target=target;
					if(!target.isIn()) event.finish();
					else if(!target.hasCard(function(card){
						return lib.filter.canBeDiscarded(card,player,target);
					},'he')) event._result={index:1};
					else player.chooseControl().set('choiceList',[
						'弃置'+str+'的'+get.cnNumber(num)+'张牌',
						'对'+str+'造成1点伤害',
					]).set('ai',function(){
						var player=_status.event.player;
						var eff0=get.effect(target,{name:'guohe_copy2'},player,player)*Math.min(1.7,target.countCards('he'));
						var eff1=get.damageEffect(target,player,player);
						return eff0>eff1?0:1;
					});
					'step 2'
					if(result.index==0) player.discardPlayerCard(target,num,true,'he');
					else target.damage();
				},
			},
			//陈登
			refuyuan:{
				audio:2,
				trigger:{global:'useCardToTargeted'},
				logTarget:'target',
				filter:function(event,player){
					return event.card.name=='sha'&&event.target.isIn()&&!game.hasPlayer2(function(current){
						return current.hasHistory('useCard',function(evt){
							return evt.card!=event.card&&get.color(evt.card,false)=='red'&&evt.targets&&evt.targets.contains(event.target);
						});
					});
				},
				check:function(event,player){
					return get.attitude(player,event.target)>0;
				},
				content:function(){
					trigger.target.draw();
				},
			},
			reyingshui:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('he')>0&&game.hasPlayer((current)=>player.inRange(current));
				},
				position:'he',
				filterCard:true,
				filterTarget:function(card,player,target){
					return player.inRange(target);
				},
				discard:false,
				lose:false,
				delay:false,
				check:function(card){
					if(get.type(card)=='equip') return 3-get.value(card);
					return 6.5-get.value(card);
				},
				content:function(){
					'step 0'
					player.give(cards,target);
					'step 1'
					var next=target.chooseCard('he',[2,Infinity],'交给'+get.translation(player)+'至少两张装备牌，否则受到1点伤害',{type:'equip'});
					if(get.damageEffect(target,player,target)>=0) next.set('ai',()=>-1);
					else next.set('ai',(card)=>ui.selected.cards.length<2?(6-get.value(card)):0);
					'step 2'
					if(result.bool) target.give(result.cards,player);
					else target.damage('nocard');
				},
				ai:{
					order:5,
					tag:{
						damage:0.5,
					},
					result:{
						target:-1.5,
					},
				},
			},
			rewangzu:{
				audio:2,
				trigger:{player:'damageBegin1'},
				direct:true,
				filter:function(event,player){
					return event.source&&player!=event.source&&player.hasCard((card)=>lib.filter.cardDiscardable(card,player,'rewangzu'),'h');
				},
				usable:1,
				content:function(){
					'step 0'
					var num=player.getFriends().length;
					if(!game.hasPlayer(function(current){
						return current!=player&&current.getFriends().length>num;
					})){
						player.chooseToDiscard('h',get.prompt('rewangzu'),'弃置一张牌并令伤害-1').set('ai',function(card){
							return 7-get.value(card);
						}).logSkill='rewangzu';
					}
					else{
						player.chooseBool(get.prompt('rewangzu'),'随机弃置一张牌并令伤害-1');
					}
					'step 1'
					if(result.bool){
						trigger.num--;
						if(!result.cards||!result.cards.length){
							player.logSkill('rewangzu');
							var cards=player.getCards('h',(card)=>lib.filter.cardDiscardable(card,player,'rewangzu'));
							if(cards.length) player.discard(cards.randomGet());
						}
					}
					else player.storage.counttrigger.rewangzu--;
				},
			},
			//万年公主
			zhenge:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('zhenge'),'令一名角色的攻击范围+1').set('ai',function(target){
						var player=_status.event.player,att=get.attitude(player,target)
						if(att>0){
							if(!target.hasMark('zhenge_effect')) att*=1.5;
							if(!game.hasPlayer(function(current){
								return get.distance(target,current,'attack')>2;
							})){
								var usf=Math.max.apply(Math,game.filterPlayer().map(function(current){
									if(target.canUse('sha',current,false)) return get.effect(current,{name:'sha'},target,player);
									return 0;
								}));
								return att+usf;
							}
							return att;
						}
						return 0;
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('zhenge',target);
						target.addSkill('zhenge_effect');
						if(target.countMark('zhenge_effect')<5) target.addMark('zhenge_effect',1,false);
						if(!game.hasPlayer(function(current){
							return current!=target&&!target.inRange(current);
						})){
							player.chooseTarget('是否令'+get.translation(target)+'视为对另一名角色使用【杀】？',function(card,player,target){
								return _status.event.source.canUse('sha',target);
							}).set('source',target).set('ai',function(target){
								var evt=_status.event;
								return get.effect(target,{name:'sha'},evt.source,evt.player);
							});
						}
						else{
							game.delayx();
							event.finish();
						}
					}
					else event.finish();
					'step 2'
					if(result.bool){
						target.useCard({name:'sha',isCard:true},result.targets[0],false);
					}
					'step 3'
					game.delayx();
				},
				subSkill:{
					effect:{
						charlotte:true,
						onremove:true,
						mod:{
							attackRange:function(player,num){
								return num+player.countMark('zhenge_effect');
							},
						},
						intro:{content:'攻击范围+#'},
					},
				},
			},
			xinghan:{
				audio:2,
				init:function(player){
					player.addSkill('xinghan_count');
				},
				onremove:function(player){
					player.removeSkill('xinghan_count');
				},
				trigger:{global:'damageSource'},
				forced:true,
				filter:function(event,player){
					return event.card&&event.card==player.storage.xinghan_temp&&event.source&&event.source.hasMark('zhenge_effect');
				},
				logTarget:'source',
				content:function(){
					player.draw(player.isMaxHandcard(true)?1:Math.min(5,trigger.source.getAttackRange()));
				},
				subSkill:{
					count:{
						trigger:{global:'useCard1'},
						forced:true,
						charlotte:true,
						popup:false,
						firstDo:true,
						filter:function(event,player){
							return event.card.name=='sha'&&!game.hasPlayer2(function(current){
								return current.hasHistory('useCard',function(evt){
									return evt!=event&&evt.card.name=='sha';
								})
							});
						},
						content:function(){
							player.addTempSkill('xinghan_temp');
							player.storage.xinghan_temp=trigger.card;
						},
					},
					temp:{onremove:true},
				},
				ai:{combo:'zhenge'},
			},
			//荀谌
			refenglve:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('h')>0&&!player.hasSkillTag('noCompareSource')&&game.hasPlayer(function(current){
						return current!=player&&current.countCards('h')>0&&!current.hasSkillTag('noCompareTarget');
					});
				},
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('h')>0&&!target.hasSkillTag('noCompareTarget');
				},
				content:function(){
					'step 0'
					player.chooseToCompare(target);
					'step 1'
					if(result.bool){
						if(!target.countCards('hej')) event.finish();
						else{
							event.giver=target;
							event.gainner=player;
							target.choosePlayerCard(target,true,'hej',2,'交给'+get.translation(player)+'两张牌');
						}
					}
					else if(result.tie){
						delete player.getStat('skill').refenglve;
						event.finish();
					}
					else{
						if(get.position(result.player,true)=='d') target.gain(result.player,'gain2');
						event.finish();
						/*if(!player.countCards('he')) event.finish();
						else{
							event.giver=player;
							event.gainner=target;
							player.chooseCard(true,'he','交给'+get.translation(target)+'一张牌');
						}*/
					}
					'step 2'
					if(result.bool) event.giver.give(result.cards,event.gainner);
				},
				ai:{
					order:8,
					result:{
						target:function(player,target){
							if(!player.hasCard(function(card){
								if(get.position(card)!="h") return false;
								var val=get.value(card);
								if(val<0) return true;
								if(val<=5){
									return card.number>=11;
								}
								if(val<=6){
									return card.number>=13;
								}
								return false;
							})) return 0;
							return -Math.sqrt(1+target.countCards('he'))/(1+target.countCards('j'));
						},
					},
				},
			},
			anyong:{
				audio:2,
				trigger:{global:'damageSource'},
				direct:true,
				filter:function(event,player){
					return event.source&&event.source==_status.currentPhase&&event.num==1&&
					event.player!=event.source&&event.player.isIn()&&player.countCards('he')>0&&
					event.source.getHistory('sourceDamage',function(evt){
						return evt.player!=event.source;
					}).indexOf(event)==0;
				},
				content:function(){
					'step 0'
					player.chooseToDiscard('he',get.prompt('anyong',trigger.player),'弃置一张牌并对其造成1点伤害').set('goon',get.damageEffect(trigger.player,player,player)>0).set('ai',function(card){
						if(_status.event.goon) return 7-get.value(card);
						return 0;
					}).logSkill=['anyong',trigger.player];
					'step 1'
					if(result.bool) trigger.player.damage();
				},
			},
			//刘永
			zhuning:{
				audio:2,
				enable:'phaseUse',
				usable:2,
				filter:function(event,player){
					if(!player.countCards('he')) return false;
					return (!player.getStat('skill').zhuning||player.hasSkill('zhuning_double'));
				},
				filterCard:true,
				position:'he',
				filterTarget:lib.filter.notMe,
				selectCard:[1,Infinity],
				delay:false,
				lose:false,
				discard:false,
				check:function(card){
					if(ui.selected.cards.length&&ui.selected.cards[0].name=='du') return 0;
					if(!ui.selected.cards.length&&card.name=='du') return 20;
					var player=get.owner(card);
					if(ui.selected.cards.length>=Math.max(1,player.countCards('h')-player.hp)) return 0;
					return 10-get.value(card);
				},
				content:function(){
					'step 0'
					player.give(cards,target).gaintag.add('fengxiang_tag');
					'step 1'
					var list=[];
					for(var name of lib.inpile){
						var type=get.type(name);
						if(type!='basic'&&type!='trick') continue;
						var card={name:name,isCard:true};
						if(get.tag(card,'damage')>0&&player.hasUseTarget(card)){
							list.push([type,'',name]);
						}
						if(name=='sha'){
							for(var i of lib.inpile_nature){
								card.nature=i;
								if(player.hasUseTarget(card)) list.push([type,'',name,i]);
							}
						}
					}
					if(list.length){
						player.chooseButton(['是否视为使用一张伤害牌？',[list,'vcard']]).set('ai',function(button){
							return _status.event.player.getUseValue({name:button.link[2]});
						});
					}
					else event.finish();
					'step 2'
					if(result.bool){
						player.chooseUseTarget({name:result.links[0][2],nature:result.links[0][3],isCard:true},true,false);
					}
					else event.finish();
					'step 3'
					if(!player.hasHistory('sourceDamage',function(evt){
						if(!evt.card) return false;
						var evtx=evt.getParent('useCard');
						return evtx.card==evt.card&&evtx.getParent(2)==event;
					})) player.addTempSkill('zhuning_double');
				},
				subSkill:{
					double:{},
				},
				ai:{
					fireAttack:true,
					order:4,
					result:{
						target:function(player,target){
							if(target.hasSkillTag('nogain')) return 0;
							if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
								if(target.hasSkillTag('nodu')) return 0;
								return -10;
							}
							if(target.hasJudge('lebu')) return 0;
							var nh=target.countCards('h');
							var np=player.countCards('h');
							if(player.hp==player.maxHp||player.storage.rerende<0||player.countCards('h')<=1){
								if(nh>=np-1&&np<=player.hp&&!target.hasSkill('haoshi')) return 0;
							}
							return Math.max(1,5-nh);
						}
					},
				}
			},
			fengxiang:{
				getMax:function(event){
					var max=0,max2=null,players=game.filterPlayer();
					for(var current of players){
						var num=0,cards=current.getCards('h',function(card){
							return card.hasGaintag('fengxiang_tag');
						});
						if(event){
							if(event.name=='gain'&&event.gaintag.contains('fengxiang_tag')) cards.removeArray(event.cards);
							var evt=event.getl(current);
							if(evt&&evt.gaintag_map){
								for(var i in evt.gaintag_map){
									if(evt.gaintag_map[i].contains('fengxiang_tag')) num++;
								}
							}
						}
						num+=cards.length;
						if(num>max){
							max=num;
							max2=current;
						}
						else if(num==max) max2=null;
					}
					return max2;
				},
				audio:2,
				trigger:{player:'damageEnd'},
				forced:true,
				filter:function(event,player){
					var target=lib.skill.fengxiang.getMax(); 
					return !target||target.isDamaged();
				},
				logTarget:function(event,player){
					return lib.skill.fengxiang.getMax()||player;
				},
				content:function(){
					var target=lib.skill.fengxiang.getMax();
					if(target) target.recover();
					else player.draw();
				},
				group:'fengxiang_draw',
				subSkill:{
					draw:{
						trigger:{
							global:['equipAfter','addJudgeAfter','loseAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
						},
						forced:true,
						filter:function(event,player){
							if(event.name=='lose'&&event.getlx===false) return false;
							return lib.skill.fengxiang.getMax()!=lib.skill.fengxiang.getMax(event);
						},
						content:function(){
							if(trigger.delay===false) game.delayx();
							player.draw();
						},
					},
				},
			},
			//阚泽
			rekuanshi:{
				audio:'kuanshi',
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('rekuanshi')).set('animate',false).set('ai',function(target){
						var att=get.attitude(player,target);
						if(target.hp<3) att/=1.5;
						return att;
					});
					'step 1'
					if(result.bool){
						player.logSkill('rekuanshi');
						player.addTempSkill('rekuanshi_effect',{player:'phaseBegin'});
						player.storage.rekuanshi_effect=result.targets[0];
						game.delayx();
					}
				},
				subSkill:{
					effect:{
						audio:'kuanshi',
						trigger:{global:'damageEnd'},
						forced:true,
						charlotte:true,
						logTarget:'player',
						usable:1,
						filter:function(event,player){
							if(event.player!=player.storage.rekuanshi_effect||event.player.isHealthy()) return false;
							var history=event.player.getHistory('damage',null,event),num=0;
							for(var i of history) num+=i.num;
							return num>1&&(num-event.num)<2;
						},
						content:function(){
							trigger.player.recover();
						}
					},
				},
			},
			//吕玲绮
			guowu:{
				trigger:{player:'phaseUseBegin'},
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				preHidden:true,
				content:function(){
					'step 0'
					var hs=player.getCards('h');
					player.showCards(hs,get.translation(player)+'发动了【帼舞】');
					var list=[];
					for(var i of hs){
						list.add(get.type2(i,player));
						if(list.length>=3) break;
					}
					if(list.length>=1){
						var card=get.discardPile(function(i){
							return i.name=='sha';
						});
						if(card) player.gain(card,'gain2');
					}
					if(list.length>=2) player.addTempSkill('guowu_dist','phaseUseAfter');
					if(list.length>=3) player.addTempSkill('guowu_add','phaseUseAfter');
				},
				subSkill:{
					dist:{
						charlotte:true,
						mod:{targetInRange:()=>true},
					},
					add:{
						charlotte:true,
						trigger:{player:'useCard1'},
						direct:true,
						filter:function(event,player){
							var info=get.info(event.card,false);
							if(info.allowMultiple==false) return false;
							if(event.card.name!='sha'&&(info.type!='trick'||get.mode()=='guozhan')) return false;
							if(event.targets&&!info.multitarget){
								if(game.hasPlayer(function(current){
									return !event.targets.contains(current)&&lib.filter.targetEnabled2(event.card,player,current)&&lib.filter.targetInRange(event.card,player,current);
								})){
									return true;
								}
							}
							return false;
						},
						content:function(){
							'step 0'
							var num=game.countPlayer(function(current){
								return !trigger.targets.contains(current)&&lib.filter.targetEnabled2(trigger.card,player,current)&&lib.filter.targetInRange(trigger.card,player,current);
							});
							player.chooseTarget('帼舞：是否为'+get.translation(trigger.card)+'增加'+(num>1?'至多两个':'一个')+'目标？',[1,Math.min(2,num)],function(card,player,target){
								var trigger=_status.event.getTrigger();
								var card=trigger.card;
								return !trigger.targets.contains(target)&&lib.filter.targetEnabled2(card,player,target)&&lib.filter.targetInRange(card,player,target);
							}).set('ai',function(target){
								var player=_status.event.player;
								var card=_status.event.getTrigger().card;
								return get.effect(target,card,player,player);
							});
							'step 1'
							if(result.bool){
								if(player!=game.me&&!player.isOnline()) game.delayx();
							}
							else event.finish();
							'step 2'
							var targets=result.targets.sortBySeat();
							player.logSkill('guowu_add',targets);
							trigger.targets.addArray(targets);
							//if(get.mode()=='guozhan') player.removeSkill('guowu_add');
						},
					},
				},
			},
			zhuangrong:{
				derivation:['llqshenwei','wushuang'],
				trigger:{global:'phaseEnd'},
				forced:true,
				juexingji:true,
				skillAnimation:true,
				animationColor:'gray',
				filter:function(event,player){
					return player.hp==1||player.countCards('h')==1;
				},
				content:function(){
					'step 0'
					player.awakenSkill('zhuangrong');
					player.loseMaxHp();
					'step 1'
					if(player.maxHp>player.hp) player.recover(player.maxHp-player.hp);
					'step 2'
					player.drawTo(Math.min(5,player.maxHp));
					player.addSkillLog('llqshenwei');
					player.addSkillLog('wushuang');
				},
			},
			llqshenwei:{
				audio:2,
				trigger:{player:'phaseDrawBegin2'},
				forced:true,
				filter:(event)=>!event.numFixed,
				content:function(){
					trigger.num+=2;
				},
				mod:{
					maxHandcard:(player,num)=>num+2,
				},
			},
			cuijian:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return game.hasPlayer((current)=>lib.skill.cuijian.filterTarget(null,player,current));
				},
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('h')>0;
				},
				content:function(){
					'step 0'
					var hs=target.getCards('h','shan');
					if(hs.length){
						hs.addArray(target.getCards('he',function(card){
							return get.subtype(card)=='equip2';
						}))
						player.gain(hs,target,'give','bySelf');
						if(player.hasMark('zhtongyuan_basic')) event.finish();
						else event.num=hs.length;
					}
					else{
						if(player.hasMark('zhtongyuan_trick')) player.draw(2);
						event.finish();
					}
					'step 1'
					var hs=player.getCards('he');
					if(!hs.length||!target.isIn()) event.finish();
					else if(hs.length<=num) event._result={bool:true,cards:hs};
					else player.chooseCard('he',true,'选择交给'+get.translation(target)+get.cnNumber(num)+'张牌',num);
					'step 2'
					if(result.bool&&result.cards&&result.cards.length) player.give(result.cards,target);
				},
				ai:{
					order:4,
					result:{
						player:function(player,target){
							if(!target.countCards('h','shan')) return player.hasMark('zhtongyuan_trick')?2:0;
							return 0;
						},
						target:function(player,target){
							if(target.countCards('h','shan')){
								var num=-target.countCards('h')/2;
								var card=target.getEquip(2);
								if(card) num-=(get.value(card,target)/2);
								return num;
							}
							return -0.01;
						},
					},
				},
			},
			tongyuan:{audio:2},
			zhtongyuan:{
				audio:'tongyuan',
				trigger:{player:['useCardAfter','respondAfter']},
				forced:true,
				filter:function(event,player){
					var type=get.type2(event.card,false);
					return (type=='basic'||type=='trick')&&get.color(event.card,false)=='red'&&!player.hasMark('zhtongyuan_'+type);
				},
				content:function(){
					var type=get.type2(trigger.card,false);
					if(!player.hasMark('zhtongyuan_'+type)){
						player.addMark('zhtongyuan_'+type,1,false);
						game.log(player,'修改了技能','#g【摧坚】');
					}
				},
				group:['zhtongyuan_basic','zhtongyuan_trick'],
				subSkill:{
					basic:{
						trigger:{player:'useCard2'},
						direct:true,
						locked:true,
						filter:function(event,player){
							if(!player.hasMark('zhtongyuan_basic')||!player.hasMark('zhtongyuan_trick')) return false;
							var card=event.card;
							if(get.color(card,false)!='red'||get.type(card,null,true)!='basic') return false;
							var info=get.info(card);
							if(info.allowMultiple==false) return false;
							if(event.targets&&!info.multitarget){
								if(game.hasPlayer(function(current){
									return !event.targets.contains(current)&&lib.filter.targetEnabled2(card,player,current);
								})){
									return true;
								}
							}
							return false;
						},
						content:function(){
							'step 0'
							var prompt2='为'+get.translation(trigger.card)+'增加一个目标'
							player.chooseTarget(get.prompt('zhtongyuan'),function(card,player,target){
								var player=_status.event.player;
								return !_status.event.targets.contains(target)&&lib.filter.targetEnabled2(_status.event.card,player,target);
							}).set('prompt2',prompt2).set('ai',function(target){
								var trigger=_status.event.getTrigger();
								var player=_status.event.player;
								return get.effect(target,trigger.card,player,player);
							}).set('card',trigger.card).set('targets',trigger.targets);
							'step 1'
							if(result.bool){
								if(!event.isMine()&&!event.isOnline()) game.delayx();
								event.targets=result.targets;
							}
							else{
								event.finish();
							}
							'step 2'
							if(event.targets){
								player.logSkill('zhtongyuan',event.targets);
								trigger.targets.addArray(event.targets);
							}
						},
					},
					trick:{
						audio:'zhtongyuan',
						trigger:{player:'useCard'},
						forced:true,
						filter:function(event,player){
							if(!player.hasMark('zhtongyuan_basic')||!player.hasMark('zhtongyuan_trick')) return false;
							var card=event.card;
							return (get.color(card,false)=='red'&&get.type(card,null,false)=='trick');
						},
						content:function(){
							trigger.directHit.addArray(game.filterPlayer());
							game.log(trigger.card,'不可被响应');
						},
					},
				},
			},
			//陆郁生
			zhente:{
				audio:2,
				trigger:{target:'useCardToTargeted'},
				logTarget:'player',
				usable:1,
				preHidden:true,
				filter:function(event,player){
					var color=get.color(event.card);
					if(player==event.player||event.player.isDead()||color=='none'||(get.mode()=='guozhan'&&color!='black')) return false;
					var type=get.type(event.card);
					return type=='basic'||type=='trick';
				},
				check:function(event,player){
					return !event.excluded.contains(player)&&get.effect(player,event.card,event.player,player)<0;
				},
				content:function(){
					'step 0'
					trigger.player.chooseControl().set('choiceList',[
						'本回合内不能再使用'+get.translation(get.color(trigger.card))+'牌',
						'令'+get.translation(trigger.card)+'对'+get.translation(player)+'无效',
					]).set('prompt',get.translation(player)+'发动了【贞特】，请选择一项').set('ai',function(){
						var player=_status.event.player;
						var target=_status.event.getParent().player;
						var card=_status.event.getTrigger().card,color=get.color(card);
						if(get.effect(target,card,player,player)<=0) return 1;
						var hs=player.countCards('h',function(card){
							return get.color(card,player)==color&&player.hasValueTarget(card,null,true);
						});
						if(!hs.length) return 0;
						if(hs>1) return 1;
						return Math.random()>0.5?0:1;
					});
					'step 1'
					if(result.index==0){
						trigger.player.addTempSkill('zhente2');
						trigger.player.storage.zhente2.add(get.color(trigger.card));
						trigger.player.markSkill('zhente2');
					}
					else trigger.excluded.add(player);
				},
			},
			zhente2:{
				mod:{
					cardEnabled:function(card,player){
						if(player.getStorage('zhente2').contains(get.color(card))) return false;
					},
					cardSavable:function(card,player){
						if(player.getStorage('zhente2').contains(get.color(card))) return false;
					},
				},
				charlotte:true,
				onremove:true,
				init:function(player,skill){
					if(!player.storage[skill]) player.storage[skill]=[];
				},
				intro:{content:'本回合内不能使用$牌'},
			},
			zhiwei:{
				audio:2,
				trigger:{
					player:['enterGame','showCharacterAfter','phaseBegin'],
					global:['phaseBefore'],
				},
				direct:true,
				filter:function(event,player,name){
					if(player.hasSkill('zhiwei2')) return false;
					if(!game.hasPlayer(current=>current!=player)) return false;
					if(get.mode()=='guozhan') return event.name=='showCharacter'&&(event.toShow.contains('gz_luyusheng')||event.toShow.contains('luyusheng'));
					return event.name!='showCharacter'&&(name!='phaseBefore'||game.phaseNumber==0);
				},
				content:function(){
					'step 0'
					player.chooseTarget('请选择【至微】的目标','选择一名其他角色。该角色造成伤害后，你摸一张牌，该角色受到伤害后，你随机弃置一张手牌。你弃牌阶段弃置的牌均被该角色获得。',true,lib.filter.notMe).set('ai',function(target){
						var att=get.attitude(_status.event.player,target);
						if(att>0) return 1+att;
						return Math.random();
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('zhiwei',target);
						player.storage.zhiwei2=target;
						player.addSkill('zhiwei2');
					}
				},
			},
			zhiwei2:{
				group:['zhiwei2_draw','zhiwei2_discard','zhiwei2_gain','zhiwei2_clear'],
				charlotte:true,
				onremove:true,
				mark:'character',
				intro:{content:'$造成伤害后你摸一张牌；$受到伤害后你弃置一张牌；你于弃牌阶段弃置牌后交给$'},
				subSkill:{
					draw:{
						audio:'zhiwei',
						trigger:{global:'damageSource'},
						forced:true,
						filter:function(event,player){
							return event.source==player.storage.zhiwei2;
						},
						logTarget:'source',
						content:function(){
							player.draw();
						},
					},
					discard:{
						audio:'zhiwei',
						trigger:{global:'damageEnd'},
						forced:true,
						filter:function(event,player){
							return event.player==player.storage.zhiwei2&&player.countCards('h',function(card){
								return lib.filter.cardDiscardable(card,player,'zhiwei2_discard');
							});
						},
						logTarget:'player',
						content:function(){
							player.discard(player.getCards('h',function(card){
								return lib.filter.cardDiscardable(card,player,'zhiwei2_discard');
							}).randomGet());
						},
					},
					gain:{
						audio:'zhiwei',
						trigger:{
							player:'loseAfter',
							global:'loseAsyncAfter',
						},
						forced:true,
						filter:function(event,player){
							if(event.type!='discard'||event.getlx===false||event.getParent('phaseDiscard').player!=player||!player.storage.zhiwei2||!player.storage.zhiwei2.isIn()) return false;
							var evt=event.getl(player);
							return evt&&evt.cards2.filterInD('d').length>0;
						},
						logTarget:function(event,player){
							return player.storage.zhiwei2;
						},
						content:function(){
							if(trigger.delay===false) game.delay();
							player.storage.zhiwei2.gain(trigger.getl(player).cards2.filterInD('d'),'gain2');
						},
					},
					clear:{
						audio:'zhiwei',
						trigger:{
							global:'die',
							player:['hideCharacterEnd','removeCharacterEnd'],
						},
						forced:true,
						filter:function(event,player){
							if(event.name=='die') return event.player==player.storage.zhiwei2;
							if(event.name=='removeCharacter') return event.toRemove=='luyusheng'||event.toRemove=='gz_luyusheng';
							return event.toHide=='luyusheng'||event.toHide=='gz_luyusheng';
						},
						content:function(){
							'step 0'
							player.removeSkill('zhiwei2');
							if(trigger.name!='die'||get.mode()!='guozhan') event.finish();
							'step 1'
							if(player.name1=='gz_luyusheng'||player.name1=='luyusheng') player.hideCharacter(0);
							if(player.name2=='gz_luyusheng'||player.name2=='luyusheng') player.hideCharacter(1);
						},
					},
				},
			},
			//华歆
			spwanggui:{
				audio:'wanggui',
				trigger:{source:'damageSource'},
				direct:true,
				usable:1,
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current.group!=player.group;
					});
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('spwanggui'),'对一名势力不同的其他角色造成1点伤害',function(card,player,target){
						return target.group!=player.group;
					}).set('ai',function(target){
						var player=_status.event.player;
						return get.damageEffect(target,player,player);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('spwanggui',target);
						target.damage();
					}
					else player.storage.counttrigger.spwanggui--;
				},
				group:'spwanggui_draw',
				subSkill:{
					draw:{
						trigger:{player:'damageEnd'},
						direct:true,
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('spwanggui'),'令自己摸一张牌，或和一名势力相同的其他角色各摸一张牌',function(card,player,target){
								return target.group==player.group;
							}).set('ai',function(target){
								var player=_status.event.player,att=get.attitude(player,target);
								if(target!=player) att*=2;
								if(target.hasSkillTag('nogain')) att/=1.7;
								return att;
							});
							'step 1'
							if(result.bool){
								var target=result.targets[0];
								player.logSkill('spwanggui',target);
								if(player==target){
									player.draw();
									event.finish();
								}
								else{
									var list=[player,target].sortBySeat();
									game.asyncDraw(list);
								}
							}
							else event.finish();
							'step 2'
							game.delayx();
						},
					},
				},
			},
			wanggui:{
				audio:2,
				trigger:{
					player:'damageEnd',
					source:'damageSource',
				},
				direct:true,
				filter:function(event,player){
					return player.hasSkill('wanggui')&&!player.hasSkill('wanggui2');
				},
				preHidden:true,
				content:function(){
					'step 0'
					player.addTempSkill('wanggui2');
					var bool=player.isUnseen(2);
					if(bool){
						player.chooseTarget('望归：是否对一名势力不同的角色造成1点伤害？',function(card,player,target){
							return target.isEnemyOf(player);
						}).set('ai',function(target){
							var player=_status.event.player;
							return get.damageEffect(target,player,player);
						}).setHiddenSkill('wanggui');
					}
					else event.goto(2);
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('wanggui',target);
						target.damage();
					}
					event.finish();
					'step 2'
					player.chooseBool('望归：是否令所有与自己势力相同的角色各摸一张牌？').setHiddenSkill('wanggui');
					'step 3'
					if(result.bool){
						var targets=game.filterPlayer(function(current){
							return current.isFriendOf(player);
						});
						targets.sortBySeat();
						player.logSkill('wanggui',targets);
						game.asyncDraw(targets);
					}
					else event.finish();
					'step 4'
					game.delayx();
				},
			},
			wanggui2:{},
			xibing:{
				audio:2,
				trigger:{global:'useCardToPlayered'},
				filter:function(event,player){
					if(player==event.player||event.targets.length!=1||event.player.countCards('h')>=event.player.hp) return false;
					var bool=function(card){
						return (card.name=='sha'||get.type(card,false)=='trick')&&get.color(card,false)=='black';
					};
					if(!bool(event.card)) return false;
					var evt=event.getParent('phaseUse');
					if(evt.player!=event.player) return false;
					return get.mode()!='guozhan'||event.player.getHistory('useCard',function(evtx){
						return bool(evtx.card)&&evtx.getParent('phaseUse')==evt;
					})[0]==event.getParent();
				},
				logTarget:'player',
				check:function(event,player){
					var target=event.player;
					var att=get.attitude(player,target);
					var num2=Math.min(5,target.hp-target.countCards('h'));
					if(num2<=0) return att<=0;
					var num=target.countCards('h',function(card){
						return target.hasValueTarget(card,null,true);
					});
					if(!num) return att>0;
					return num>num2;
				},
				preHidden:true,
				content:function(){
					'step 0'
					var num=Math.min(5,trigger.player.hp-trigger.player.countCards('h'));
					if(num>0) trigger.player.draw(num);
					'step 1'
					trigger.player.addTempSkill('xibing2');
					player._xibing=true;
					if(get.mode()!='guozhan'||player.isUnseen(2)||trigger.player.isUnseen(2)) event.finish();
					'step 2'
					var target=trigger.player;
					var players1=[player.name1,player.name2];
					var players2=[target.name1,target.name2];
					player.chooseButton(2,[
						'是否暗置自己和'+get.translation(target)+'的各一张武将牌？',
						'<div class="text center">你的武将牌</div>',
						[players1,'character'],
						'<div class="text center">'+get.translation(target)+'的武将牌</div>',
						[players2,'character'],
					]).set('players',players1).set('complexSelect',true).set('filterButton',function(button){
						return !get.is.jun(button.link)&&(ui.selected.buttons.length==0)==(_status.event.players.contains(button.link));
					});
					'step 3'
					if(result.bool){
						var target=trigger.player;
						player.hideCharacter(player.name1==result.links[0]?0:1);
						target.hideCharacter(target.name1==result.links[1]?0:1);
						player.addTempSkill('xibing3');
						target.addTempSkill('xibing3');
					}
				},
			},
			xibing2:{
				mod:{
					cardEnabled2:function(card){
						if(get.position(card)=='h') return false;
					},
				},
			},
			xibing3:{
				ai:{nomingzhi:true},
			},
			//小虎
			remeibu:{
				audio:"meibu",
				trigger:{
					global:"phaseUseBegin",
				},
				filter:function(event,player){
					return event.player!=player&&event.player.isIn()&&event.player.inRange(player)&&player.countCards('he')>0;
				},
				direct:true,
				derivation:["rezhixi"],
				checkx:function(event,player){
					if(get.attitude(player,event.player)>=0) return false;
					return event.player.countCards('h')>event.player.hp;
				},
				content:function(){
					"step 0"
					var check=lib.skill.new_meibu.checkx(trigger,player);
					player.chooseToDiscard(get.prompt2('remeibu',trigger.player),'he').set('ai',function(card){
						if(_status.event.check) return 6-get.value(card);
						return 0;
					}).set('check',check).set('logSkill',['remeibu',trigger.player]);
					"step 1"
					if(result.bool){
						var target=trigger.player;
						var card=result.cards[0];
						player.line(target,'green');
						player.markAuto('remeibu_gain',[get.suit(card,player)]);
						player.addTempSkill('remeibu_gain');
						target.addTempSkill('rezhixi','phaseUseEnd');
					}
				},
				ai:{
					expose:0.2,
				},
				subSkill:{
					gain:{
						trigger:{global:'loseAfter'},
						forced:true,
						charlotte:true,
						popup:false,
						onremove:true,
						filter:function(event,player){
							return event.getParent(3).name=='rezhixi'&&player.getStorage('remeibu_gain').contains(get.suit(event.cards[0],event.player))&&get.position(event.cards[0])=='d';
						},
						content:function(){
							player.gain(trigger.cards[0],'gain2');
						},
					},
				},
			},
			remumu:{
				audio:"mumu",
				trigger:{
					player:"phaseUseBegin",
				},
				direct:true,
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current.countCards('e')>0;
					});
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('remumu'),function(card,player,target){
						return target.countCards('e')>0;
					}).set('ai',function(target){
						var player=_status.event.player,att=get.attitude(player,target),es=target.getCards('e'),val=0;
						for(var i of es){
							var eff=-(get.value(i,target)-0.1)*att;
							if(eff>val) val=eff;
						}
						return eff;
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('remumu',target);
						if(player==target) event._result={index:1};
						else{
							var str=get.translation(target);
							player.chooseControl().set('choiceList',[
								'弃置'+str+'装备区的一张牌且本阶段使用【杀】的次数上限+1',
								'获得'+str+'装备区的一张牌且本阶段使用【杀】的次数上限-1',
							]).set('ai',function(){
								var player=_status.event.player;
								if(player.countCards('hs',function(card){
									return get.name(card,player)=='sha'&&player.hasValueTarget(card);
								})<Math.max(1,player.getCardUsable('sha'))) return 1;
								return 0;
							});
						}
					}
					else event.finish();
					'step 2'
					if(result.index==0){
						player.addTempSkill('remumu3','phaseUseAfter');
						player.discardPlayerCard(target,'e',true);
					}
					else{
						player.addTempSkill('remumu2','phaseUseAfter');
						player.gainPlayerCard(target,'e',true);
					}
				},
			},
			remumu2:{
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=='sha') return num-1;
					},
				},
			},
			remumu3:{
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=='sha') return num+1;
					},
				},
			},
			rezhixi:{
				trigger:{
					player:"useCard",
				},
				forced:true,
				filter:function(event,player){
					return (event.card.name=='sha'||get.type(event.card)=='trick')&&player.countCards('h')>0;
				},
				content:function(){
					player.chooseToDiscard('h',true);
				},
			},
			//董白
			relianzhu:{
				audio:'lianzhu',
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('he')>0;
				},
				filterCard:true,
				discard:false,
				lose:false,
				delay:false,
				position:'he',
				filterTarget:lib.filter.notMe,
				check:function(card){
					var num=get.value(card);
					if(get.color(card)=='black'){
						if(num>=6) return 0;
						return 9-num;
					}
					else{
						return 7-num;
					}
				},
				content:function(){
					'step 0'
					player.give(cards,target);
					'step 1'
					if(get.color(cards[0],player)=='red'){
						player.draw();
						event.finish();
					}
					else{
						target.chooseToDiscard('he',2,'弃置两张牌，或令'+get.translation(player)+'摸两张牌').set('goon',get.attitude(target,player)<0).set('ai',function(card){
							if(!_status.event.goon) return -get.value(card);
							return 6-get.value(card);
						});
					}
					'step 2'
					if(!result.bool) player.draw(2);
				},
				ai:{
					order:3,
					expose:0.2,
					result:{
						target:function(player,target){
							if(ui.selected.cards.length&&get.color(ui.selected.cards[0])=='red'){
								if(target.countCards('h')<player.countCards('h')) return 1;
								return 0.5;
							}
							return -1;
						}
					}
				}
			},
			rexiahui:{
				audio:'xiahui',
				mod:{
					ignoredHandcard:function(card,player){
						if(get.color(card,player)=='black') return true;
					},
					cardDiscardable:function(card,player,name){
						if(name=='phaseDiscard'&&get.color(card,player)=='black') return false;
					}
				},
				trigger:{global:'phaseEnd'},
				forced:true,
				logTarget:'player',
				filter:function(event,player){
					var target=event.player;
					return target!=player&&target.countCards('h',function(card){
						return card.hasGaintag('rexiahui');
					})==0&&target.getHistory('lose',function(evt){
						for(var i in evt.gaintag_map){
							if(evt.gaintag_map[i].contains('rexiahui')) return true;
						}
					}).length>0;
				},
				content:function(){
					trigger.player.loseHp();
				},
				group:'rexiahui_gain',
				subSkill:{
					gain:{
						trigger:{global:'gainEnd'},
						forced:true,
						popup:false,
						filter:function(event,player){
							if(player==event.player) return false;
							var evt=event.getl(player);
							return evt&&evt.cards2&&evt.cards2.filter(function(card){
								return get.color(card,player)=='black';
							}).length>0;
						},
						content:function(){
							trigger.player.addSkill('rexiahui_block');
							var cards=trigger.getl(player).cards2.filter(function(card){
								return get.color(card,player)=='black';
							});
							trigger.player.addGaintag(cards,'rexiahui');
						},
					},
					block:{
						mod:{
							cardEnabled2:function(card){
								if(get.itemtype(card)=='card'&&card.hasGaintag('rexiahui')) return false;
							},
							cardDiscardable:function(card){
								if(card.hasGaintag('rexiahui')) return false;
							},
						},
						charlotte:true,
						forced:true,
						popup:false,
						trigger:{player:'changeHp'},
						filter:function(event,player){
							return event.num<0;
						},
						content:function(){
							player.removeSkill('rexiahui_block');
						},
						onremove:function(player){
							player.removeGaintag('rexiahui');
						},
					},
				},
			},
			//周善
			dcmiyun:{
				audio:2,
				trigger:{global:'roundStart'},
				forced:true,
				direct:true,
				group:'dcmiyun_lose',
				content:function(){
					'step 0'
					if(player.hasCard(card=>card.hasGaintag('dcmiyun_tag'),'h')){
						player.chooseCardTarget({
							prompt:'密运：将包括“安”在内的任意张手牌交给一名其他角色',
							forced:true,
							filterTarget:lib.filter.notMe,
							selectCard:[1,Infinity],
							filterOk:function(){
								for(var card of ui.selected.cards){
									if(card.hasGaintag('dcmiyun_tag')) return true;
								}
								return false;
							},
							goon:game.hasPlayer(current=>player!=current&&get.attitude(player,current)>0),
							ai1:function(card){
								if(get.itemtype(card)!='card') return 0;
								if(card.hasGaintag('dcmiyun_tag')) return 100;
								if(_status.event.goon) return 8-get.value(card);
								return -get.value(card);
							},
							ai2:function(target){
								return get.attitude(_status.event.player,target);
							}
						});
					}
					else event.goto(3);
					'step 1'
					if(result.bool){
						var target=result.targets[0],cards=result.cards;
						player.logSkill('dcmiyun',target);
						player.give(cards,target);
					}
					else event.goto(3);
					'step 2'
					player.drawTo(player.maxHp);
					'step 3'
					if(game.hasPlayer(current=>current!=player&&current.countGainableCards(player,'he'))){
						player.chooseTarget('密运：获得一名其他角色的一张牌，称为“安”',true,(card,player,target)=>{
							return target!=player&&target.countGainableCards(player,'he');
						}).set('ai',target=>{
							return get.effect(target,{name:'shunshou'},_status.event.player,_status.event.player);
						})
					}
					else event.finish();
					'step 4'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('dcmiyun',target);
						player.gainPlayerCard(target,true,'visibleMove').chooseonly=true;
					}
					else event.finish();
					'step 5'
					if(result.bool){
						player.gain(result.cards).gaintag.add('dcmiyun_tag');
					}
				},
				mod:{
					aiValue:function(player,card,num){
						if(get.itemtype(card)=='card'&&card.hasGaintag('dcmiyun_tag')) return Math.abs(num)*10;
					},
					aiUseful:function(){
						return lib.skill.dcmiyun.mod.aiValue.apply(this,arguments);
					},
					aiOrder:function(player,card,num){
						if(get.itemtype(card)=='card'&&card.hasGaintag('dcmiyun_tag')) return 0;
					}
				},
				subSkill:{
					lose:{
						audio:'dcmiyun',
						trigger:{
							player:'loseAfter',
							global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
						},
						forced:true,
						filter:function(event,player){
							if(event.getParent().name=='dcmiyun') return false;
							var evt=event.getl(player);
							if(!evt||!evt.cards2||!evt.cards2.length) return false;
							if(event.name=='lose'){
								for(var i in event.gaintag_map){
									if(event.gaintag_map[i].contains('dcmiyun_tag')) return true;
								}
								return false;
							}
							return player.hasHistory('lose',evt=>{
								if(event!=evt.getParent()) return false;
								for(var i in evt.gaintag_map){
									if(evt.gaintag_map[i].contains('dcmiyun_tag')) return true;
								}
								return false;
							});
						},
						content:function(){
							player.loseHp();
						}
					}
				}
			},
			dcdanying:{
				audio:2,
				enable:['chooseToUse','chooseToRespond'],
				usable:1,
				hiddenCard:function(player,name){
					if(!_status.connectMode&&!player.hasCard(card=>card.hasGaintag('dcmiyun_tag'),'h')) return false;
					return name=='sha'||name=='shan';
				},
				filter:function(event,player){
					if(event.type=='wuxie'||!player.hasCard(card=>card.hasGaintag('dcmiyun_tag'),'h')) return false;
					for(var name of ['sha','shan']){
						if(event.filterCard({name:name,isCard:true},player,event)) return true;
					}
					return false;
				},
				chooseButton:{
					dialog:function(event,player){
						var vcards=[];
						for(var name of ['sha','shan']){
							var card={name:name,isCard:true};
							if(event.filterCard(card,player,event)) vcards.push(['基本','',name]);
						}
						var dialog=ui.create.dialog('胆迎',[vcards,'vcard'],'hidden');
						dialog.direct=true;
						return dialog;
					},
					backup:function(links,player){
						return {
							filterCard:()=>false,
							selectCard:-1,
							viewAs:{
								name:links[0][2],
								isCard:true,
							},
							popname:true,
							precontent:function(){
								player.logSkill('dcdanying');
								player.showCards(player.getCards('h',card=>card.hasGaintag('dcmiyun_tag')),get.translation(player)+'的“安”');
								player.addTempSkill('dcdanying_discard');
							},
						}
					},
					prompt:function(links,player){
						return '展示“安”，然后视为使用【'+get.translation(links[0][2])+'】';
					}
				},
				ai:{
					order:function(item,player){
						var o1=get.order({name:'sha'}),o2=get.order({name:'shan'});
						if(player.countCards('h')>3||player==_status.currentPhase) return Math.max(o1,o2)+0.1;
						return Math.min(o1,o2)-0.1;
					},
					respondSha:true,
					respondShan:true,
					skillTagFilter:function(player,tag,arg){
						if(!player.hasCard(card=>card.hasGaintag('dcmiyun_tag'),'h')) return false;
					},
					result:{
						player:1
					}
				},
				subSkill:{
					discard:{
						trigger:{target:'useCardToTargeted'},
						charlotte:true,
						forced:true,
						filter:function(event,player){
							return player.countDiscardableCards(event.player,'he');
						},
						content:function(){
							trigger.player.discardPlayerCard(player,'he',true);
							player.removeSkill('dcdanying_discard');
						},
						ai:{
							effect:{
								target:function(card,player,target){
									if(_status._dcdanying_aiChecking) return;
									_status._dcdanying_aiChecking=true;
									var eff=get.effect(target,{name:'guohe_copy2'},player,player);
									delete _status._dcdanying_aiChecking;
									if(eff>0) eff=-1;
									else eff=1;
									return [1,eff];
								}
							}
						}
					}
				},
			},
			//蔡阳
			dcxunji:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return target!=player&&!player.getStorage('dcxunji_effect').contains(target);
				},
				content:function(){
					player.markAuto('dcxunji_effect',[target]);
					player.addTempSkill('dcxunji_effect',{player:'die'});
					target.markSkill('dcxunji_mark');
				},
				ai:{
					order:1,
					result:{
						player:function(player,target){
							if(player.hp<2) return 0;
							return get.effect(target,{name:'juedou'},player,player);
						},
					},
				},
				subSkill:{
					mark:{
						marktext:'嫉',
						intro:{content:'你已经被盯上了！'},
					},
					effect:{
						audio:'dcxunji',
						charlotte:true,
						trigger:{global:'phaseJieshuBegin'},
						forced:true,
						popup:false,
						onremove:true,
						filter:function(event,player){
							return player.getStorage('dcxunji_effect').contains(event.player);
						},
						content:function(){
							'step 0'
							var target=trigger.player;
							event.target=target;
							if(target.getHistory('sourceDamage').length>0&&player.canUse('juedou',target)){
								player.useCard({name:'juedou',isCard:true},target,'dcxunji_effect');
							}
							'step 1'
							player.unmarkAuto('dcxunji_effect',[target]);
							if(!player.storage.dcxunji_effect.length) player.removeSkill('dcxunji_effect');
						},
						group:'dcxunji_loseHp',
					},
					loseHp:{
						trigger:{source:'damageSource'},
						forced:true,
						popup:false,
						filter:function(event,player){
							return event.card&&event.card.name=='juedou'&&event.getParent().skill=='dcxunji_effect';
						},
						content:function(){
							player.loseHp(trigger.num);
						},
					},
				},
			},
			dcjiaofeng:{
				audio:2,
				trigger:{source:'damageBegin1'},
				forced:true,
				usable:1,
				filter:function(event,player){
					return player.isDamaged()&&!player.getHistory('sourceDamage').length;
				},
				content:function(){
					var num=player.getDamagedHp();
					if(num>0) player.draw();
					if(num>1) trigger.num++;
					if(num>2) player.recover();
				},
			},
			//夏侯杰
			liedan:{
				audio:2,
				trigger:{global:'phaseZhunbeiBegin'},
				forced:true,
				filter:function(event,player){
					return (player!=event.player||player.countMark('liedan')>4)&&!player.hasSkill('zhuangdan_mark');
				},
				logTarget:'player',
				content:function(){
					if(player==trigger.player){
						player.die();
						return;
					}
					var num=0;
					if(player.hp>trigger.player.hp) num++;
					if(player.countCards('h')>trigger.player.countCards('h')) num++;
					if(player.countCards('e')>trigger.player.countCards('e')) num++;
					if(num){
						player.draw(num);
						if(num==3&&player.maxHp<8) player.gainMaxHp();
					}
					else{
						player.addMark('liedan',1);
						player.loseHp();
					}
				},
				intro:{content:'mark'},
			},
			zhuangdan:{
				audio:2,
				trigger:{global:'phaseEnd'},
				forced:true,
				filter:function(event,player){
					return player!=event.player&&player.isMaxHandcard(true);
				},
				content:function(){
					player.addTempSkill('zhuangdan_mark',{player:'phaseEnd'})
				},
			},
			zhuangdan_mark:{
				mark:true,
				marktext:'胆',
				intro:{content:'我超勇的'},
			},
			//乌巢酒仙
			recangchu:{
				audio:2,
				trigger:{
					global:'gameStart',
					player:'enterGame',
				},
				marktext:'粮',
				forced:true,
				filter:function(event,player){
					return player.countMark('recangchu')<game.countPlayer();
				},
				content:function(){
					player.addMark('recangchu',Math.min(3,game.countPlayer()-player.countMark('recangchu')));
				},
				intro:{content:'mark',name:'粮'},
				mod:{
					maxHandcard:function(player,num){
						return num+player.countMark('recangchu');
					},
				},
				group:['recangchu2','recangchu3'],
			},
			recangchu2:{
				audio:'recangchu',
				trigger:{
					player:'gainAfter',
					global:'loseAsyncAfter',
				},
				forced:true,
				usable:1,
				filter:function(event,player){
					return player!=_status.currentPhase&&player.countMark('recangchu')<game.countPlayer()&&event.getg(player).length>0;
				},
				content:function(){
					player.addMark('recangchu',1);
				},
			},
			recangchu3:{
				audio:'recangchu',
				trigger:{global:'die'},
				forced:true,
				filter:function(event,player){
					return player.countMark('recangchu')>game.countPlayer();
				},
				content:function(){
					player.removeMark('recangchu',player.countMark('recangchu')-game.countPlayer());
				},
			},
			reliangying:{
				audio:2,
				trigger:{player:'phaseDiscardBegin'},
				direct:true,
				content:function(){
					'step 0'
					var map={};
					var list=[];
					for(var i=1;i<=player.countMark('recangchu');i++){
						var cn=get.cnNumber(i,true);
						map[cn]=i;
						list.push(cn);
					}
					list.push('cancel2');
					event.map=map;
					player.chooseControl(list).set('prompt',get.prompt('reliangying')).set('prompt2','摸至多'+get.cnNumber(player.countMark('recangchu'))+'张牌，然后交给等量的角色各一张牌').set('ai',function(){
						var player=_status.event.player;
						var num=Math.min(player.countMark('recangchu'),game.countPlayer(function(current){
							return get.attitude(player,current)>0;
						}));
						if(num>0) return get.cnNumber(num,true);
						return 'cancel2';
					});
					'step 1'
					if(result.control=='cancel2'){event.finish();return;}
					player.logSkill('reliangying');
					var num=event.map[result.control]||1;
					event.num=num;
					player.draw(num);
					'step 2'
					var num=Math.min(event.num,player.countCards('he'),game.countPlayer(function(target){
						return target!=player;
					}));
					if(num){
						player.chooseCardTarget({
							prompt:'将'+get.cnNumber(num)+'张牌交给其他角色',
							prompt2:'操作提示：先按顺序选中所有要给出的牌，然后再按顺序选择等量的目标角色。可少选一张牌，并将此牌留给自己',
							selectCard:[num-1,num],
							selectTarget:function(){
								return ui.selected.cards.length;
							},
							filterTarget:function(card,player,target){
								return target!=player;
							},
							filterOk:function(){
								return ui.selected.cards.length==ui.selected.targets.length;
							},
							complexSelect:true,
							position:'he',
							ai1:function(card){
								if(game.countPlayer(function(current){
									return target!=_status.event.player&&get.attitude(_status.event.player,target)>0;
								})<=ui.selected.cards.length) return 0;
								if(card.name=='shan') return 1;
								return Math.random();
							},
							ai2:function(target){
								if(!target) return 1;
								return Math.sqrt(5-Math.min(4,target.countCards('h')))*get.attitude(_status.event.player,target);
							},
							forced:true,
						});
					}
					else event.finish();
					'step 3'
					if(result.bool&&result.cards.length>0){
						var list=[];
						for(var i=0;i<result.targets.length;i++){
							var target=result.targets[i];
							var card=result.cards[i];
							list.push([target,card]);
							player.line(target);
						}
						game.loseAsync({
							gain_list:list,
							player:player,
							cards:result.cards,
							giver:player,
							animate:'giveAuto',
						}).setContent('gaincardMultiple');
					}
				},
			},
			reshishou:{
				audio:2,
				trigger:{player:['useCard','damageEnd']},
				forced:true,
				filter:function(event,player){
					if(!player.countMark('recangchu')) return false;
					return (event.name=='damage')?(event.nature=='fire'):(event.card&&event.card.name=='jiu');
				},
				content:function(){
					player.removeMark('recangchu',Math.min(player.countMark('recangchu'),trigger.num||1));
				},
				group:'reshishou2',
			},
			reshishou2:{
				audio:'reshishou',
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				filter:function(event,player){
					return !player.countMark('recangchu');
				},
				content:function(){
					player.loseHp();
				},
			},
			//曹性
			cxliushi:{
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					return player.countCards('he',{suit:'heart'})>0;
				},
				filterCard:{suit:'heart'},
				position:'he',
				filterTarget:function(card,player,target){
					return player.canUse('sha',target,false);
				},
				check:function(card){
					var player=_status.event.player;
					var next=player.getNext();
					var att=get.attitude(player,next);
					if(att>0){
						var js=next.getCards('j');
						if(js.length) return get.judge(js[0])+10-get.value(card);
						return 9-get.value(card)
					}
					return 6-get.value(card);
				},
				discard:false,
				prepare:'throw',
				loseTo:'cardPile',
				visible:true,
				insert:true,
				content:function(){
					game.log(player,'将',cards,'置于牌堆顶'); 
					player.useCard({name:'sha',isCard:true},false,targets).card.cxliushi=true;
				},
				group:'cxliushi_damage',
				subSkill:{
					damage:{
						trigger:{source:'damageSource'},
						forced:true,
						popup:false,
						filter:function(event,player){
							return event.card&&event.card.cxliushi==true&&event.player.isIn()&&event.getParent(3).name=='cxliushi';
						},
						content:function(){
							trigger.player.addMark('cxliushi2',1);
							trigger.player.addSkill('cxliushi2');
						},
					},
				},
				ai:{
					order:function(){
						return get.order({name:'sha'})-0.4;
					},
					result:{
						target:function(player,target){
							var eff=get.effect(target,{name:'sha'},player,target);
							var damageEff=get.damageEffect(target,player,player);
							if(eff>0) return damageEff>0?0:eff;
							if(target.hasSkill('bagua_skill')||target.hasSkill('rw_bagua_skill')||target.hasSkill('bazhen')) return 0;
							return eff;
						},
					},
				},
			},
			cxliushi2:{
				mod:{
					maxHandcard:function(player,num){
						return num-player.countMark('cxliushi2');
					},
				},
				onremove:true,
				charlotte:true,
				intro:{
					name2:'流',
					content:'手牌上限-#',
				},
			},
			zhanwan:{
				audio:2,
				trigger:{global:'phaseDiscardEnd'},
				forced:true,
				filter:function(event,player){
					return event.player.hasSkill('cxliushi2')&&event.player.getHistory('lose',function(evt){
						if(evt.type=='discard'&&evt.getParent('phaseDiscard')==event) return true;
					}).length>0;
				},
				logTarget:'player',
				content:function(){
					trigger.player.removeSkill('cxliushi2');
					var num=0;
					trigger.player.getHistory('lose',function(evt){
						if(evt.type=='discard'&&evt.getParent('phaseDiscard')==trigger) num+=evt.cards2.length;
					});
					player.draw(num);
				},
			},
			//说出吾名吓汝一跳
			xuxie:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				logTarget:function(event,player){
					return game.filterPlayer(function(current){
						return get.distance(player,current)<=1;
					}).sortBySeat();
				},
				check:function(event,player){
					if(player.isHealthy()) return false;
					var list=game.filterPlayer(function(current){
						return get.distance(player,current)<=1;
					});
					var draw=0;
					var discard=0;
					var num=2/player.getDamagedHp();
					while(list.length){
						var target=list.shift();
						var att=get.attitude(player,target);
						if(att>0){
							draw++;
							if(target.countDiscardableCards(player,'he')>0) discard--;
						}
						if(att==0){
							draw--;
							if(target.countDiscardableCards(player,'he')>0) discard--;
						}
						if(att<0){
							draw--;
							if(target.countDiscardableCards(player,'he')>0) discard++;
						}
					}
					return draw>=num||discard>=num;
				},
				content:function(){
					'step 0'
					player.loseMaxHp();
					'step 1'
					var targets=game.filterPlayer(function(current){
						return get.distance(player,current)<=1;
					}).sortBySeat();
					if(!targets.length) event.finish();
					else{
						event.targets=targets;
						player.chooseControl().set('choiceList',[
							'弃置'+get.translation(targets)+'的各一张牌',
							'令'+get.translation(targets)+'各摸一张牌',
						]).set('ai',function(){
							var player=_status.event.player;
							var list=_status.event.getParent().targets.slice(0);
							var draw=0;
							var discard=0;
							while(list.length){
								var target=list.shift();
								var att=get.attitude(player,target);
								if(att>0){
									draw++;
									if(target.countDiscardableCards(player,'he')>0) discard--;
								}
								if(att<0){
									draw--;
									if(target.countDiscardableCards(player,'he')>0) discard++;
								}
							}
							if(draw>discard) return 1;
							return 0;
						});
					}
					'step 2'
					event.index=result.index;
					if(result.index==1){
						game.asyncDraw(targets);
					}
					else event.goto(4);
					'step 3'
					game.delay();
					event.finish();
					'step 4'
					var target=targets.shift();
					if(target.countDiscardableCards(player,'he')>0) player.discardPlayerCard(target,'he',true);
					if(targets.length) event.redo();
				},
				group:'xuxie_add',
			},
			xuxie_add:{
				audio:'xuxie',
				trigger:{player:'phaseUseEnd'},
				forced:true,
				locked:false,
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current.maxHp>player.maxHp;
					});
				},
				content:function(){
					player.gainMaxHp();
					player.chooseDrawRecover(2,true);
				},
			},
			//新潘凤
			xinkuangfu:{
				enable:'phaseUse',
				usable:1,
				audio:2,
				delay:false,
				filterTarget:function(card,player,target){
					if(player==target) return player.countCards('e',function(card){
						return lib.filter.cardDiscardable(card,player);
					})>0;
					return target.countDiscardableCards(player,'e')>0;
				},
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current.countCards('e')>0;
					});
				},
				content:function(){
					'step 0'
					if(player==target) player.chooseToDiscard('e',true);
					else player.discardPlayerCard(target,'e',true);
					'step 1'
					player.chooseUseTarget('sha',true,false,'nodistance');
					'step 2'
					var bool=game.hasPlayer2(function(current){
						return current.getHistory('damage',function(evt){
							return evt.getParent('xinkuangfu')==event;
						}).length>0
					});
					if(player==target&&bool) player.draw(2);
					else if(player!=target&&!bool) player.chooseToDiscard('h',2,true);
				},
				ai:{
					order:function(){
						return get.order({name:'sha'})+0.3;
					},
					result:{
						target:function(player,target){
							var att=get.attitude(player,target);
							var max=0;
							var min=1;
							target.countCards('e',function(card){
								var val=get.value(card,target);
								if(val>max) max=val;
								if(val<min) min=val;
							});
							if(att>0&&min<=0) return target.hasSkillTag('noe')?3:1;
							if(att<0&&max>0){
								if(target.hasSkillTag('noe')) return max>6?(-max/3):0;
								return -max;
							}
							return 0;
						},
					},
				},
			},
		},
		card:{
		},
		characterIntro:{
			xingdaorong:'邢道荣是《三国演义》中虚构的人物，为零陵太守刘度手下武将，被评价有万夫不当之勇，于《三国演义》第五十二回登场，被赵云刺死。',
			caoxing:'曹性，东汉末年吕布部将，史载他曾与身为自己上司的反叛者郝萌交战，并砍去郝萌一臂，受到吕布的嘉奖。在罗贯中所著古典小说《三国演义》中，也有关于曹性箭射夏侯惇左目的描述，而曹性也随即被暴怒的夏侯惇所杀。在穿越小说《三国之银河射手》中，主角穿越成为曹性，经过一番闯荡之后，被封为“银河射手”。',
			xiahoujie:'夏侯杰（？—208年），是罗贯中的小说《三国演义》中曹操的部将，征战时常常带在身边。在第42回长坂坡之战中，张飞大吼，从马儿受惊跌下马来而死。',
			huaxin:'华歆（157年－232年1月30日），字子鱼，汉族。平原郡高唐县人（今山东省高唐县）。汉末至三国曹魏初年名士、重臣。华歆早年拜太尉陈球为师，与卢植、郑玄、管宁等为同门，又与管宁、邴原共称一龙，华歆为龙头。汉灵帝时华歆被举为孝廉，任郎中，因病去官。又被大将军何进征召为尚书郎。后任豫章太守，甚得民心。孙策率军南下，华歆举郡投降，被奉为上宾。官渡之战时，被征为议郎、参司空军事。入为尚书、侍中，又代荀彧为尚书令。丞相曹操讨孙权时，授华歆为军师。后为魏王国的御史大夫。曹丕即王位，拜华歆为相国，封安乐乡侯。曹魏建立后，其相国职名改称司徒。魏明帝即位，升任太尉，晋封博平侯。太和五年十二月（232年1月），华歆去世，年七十五，谥号“敬”。有文集三十卷，今佚失，其余见《全三国文》。',
			luyusheng:'陆郁生（？年-？），三国时期吴国官员陆绩之女。陆郁生的父亲陆绩是吴郡公认的才子，又是当时吴郡陆氏的领袖。陆绩赴任担任郁林太守，遂取此名。陆郁生年少的时候就定下坚贞的志向。建安二十四年（219年)，陆绩早亡，她与两个兄弟陆宏、陆睿当时都只有几岁，一起返回吴县，被他们的从兄陆瑁接回抚养。13周岁的陆郁生嫁给同郡出身的张白为妻。出嫁3个月后，张白因为其兄张温一族的案件遭到连坐，被处以流刑，后死于流放地，陆郁生成为了寡妇，其后公开宣言不再改嫁，困难于生计但拒绝了所有提亲，在艰苦中从未停止服侍、照顾张白的姐妹。事情传到朝廷，皇帝褒奖陆郁生，号其为“义姑”。她的表侄姚信在文集中称赞她的义举。',
			fengxi:'冯熙（?—223年），字子柔，颍川郡父城县（今河南省平顶山市宝丰县）人。汉末三国时期吴国官员，东汉初年名将冯异的后人。孙权担任车骑将军时，冯熙担任其幕府东曹掾，后迁立信都尉。刘备去世时，奉命进入蜀汉吊丧，返回后，任中大夫。后奉命出使魏国，受到魏文帝曹丕和尚书令陈群招揽，宁死不从，自尽未果。孙权闻之流泪，称其“东吴苏武”。最终在曹魏死去。',
			heyan:'何晏（？－249年），字平叔。南阳郡宛县（今河南省南阳市）人。三国时期曹魏大臣、玄学家，东汉大将军何进之孙（一称何进弟何苗之孙）。何晏之父早逝，司空曹操纳其母尹氏为妾，他因而被收养，为曹操所宠爱。少年时以才秀知名，喜好老庄之学，娶曹操之女金乡公主。魏文帝在位时，未被授予官职。魏明帝认为何晏虚浮不实，也只授其冗官之职。大将军曹爽秉政时，何晏与之共事，得以累官至侍中、吏部尚书，典选举，封列侯。高平陵之变后，与大将军曹爽同为太傅司马懿所杀，被夷灭三族。何晏有文集十一卷，并曾与郑冲等共撰《论语集解》，今已佚。钟嵘《诗品》称“平叔鸿鹄之篇，风规见矣。”将何晏诗列入中品。袁宏在《名士传》中将何晏等称为正始名士。他与夏侯玄、王弼等倡导玄学，竞事清谈，遂开一时风气，为魏晋玄学的创始者之一。',
			zhaoyan:'赵嫣，生卒年不详。东吴方士（一说是丞相）赵达之妹，吴大帝孙权之妃，人称赵夫人。她心灵手巧，多才多艺，有“三绝”之称。孙权曾经想要找擅长绘画之人绘制山川地势军阵之图。赵达举荐了自己的妹妹。赵嫣认为水墨容易褪色，不方便在军旅之中保存。自己擅长刺绣，可以在锦帛上绣出孙权所需之图。待制作完成后献于孙权，只见方帛锦绣之上有五岳河海城邑行阵之形，孙权大为赞叹。时人谓之“针绝”。除刺绣之外，赵嫣还擅长绘画织锦，她能用彩丝织成云霞龙蛇之锦，大则盈尺，小则方寸，宫中谓之“机绝”。孙权在昭阳宫居住之时，饱受暑气之扰，以紫绡制成帷帐缓解暑气。赵嫣认为此物不足为贵，她削下自己的头发剖为细丝，以郁夷国出产的神胶连接，花了数月功夫将其制成一顶幔帐，打开之后薄如蝉翼，轻赛寒烟。放下帐帷能笼罩一丈之地，帐内清风自生暑意顿消。收起来则可纳入枕中，携带方便。时人谓之“丝绝”。',
			wangtao:'王桃是在《花关索传》中登场的虚拟人物，盗贼王令公的两个女儿之一，王悦的姐姐，与妹妹都是关索之妻。姐妹俩原为卢塘寨山贼，以武艺与美貌而闻名，被众多男性求婚却皆不与理睬。她们在关索回西川认父途中与关索交手时不敌，因意气投合而一齐下嫁。虽为架空之人物，但四川省内有记述夫妻三人共同守护葭萌关一事，民间亦流传如夫妻三人曾共同参与诸葛亮之南蛮征伐等轶事。',
			wangyue:'王悦是在《花关索传》中登场的虚拟人物，盗贼王令公的两个女儿之一，王桃的妹妹，与姐姐都是关索之妻。姐妹俩原为卢塘寨山贼，以武艺与美貌而闻名，被众多男性求婚却皆不与理睬。她们在关索回西川认父途中与关索交手时不敌，因意气投合而一齐下嫁。虽为架空之人物，但四川省内有记述夫妻三人共同守护葭萌关一事，民间亦流传如夫妻三人曾共同参与诸葛亮之南蛮征伐等轶事。',
			zhangxuan:'张嫙，三国时期孙吴将领张布之女，孙皓后妃张媱的姐姐。初为卫尉冯朝之子冯纯的妻子，后为孙皓后妃，册封左夫人。因孙皓诛灭张布，张媱口吐怨言，被暴怒的孙皓下令棒杀。后来孙皓怀念她的容颜，于是询问侍从：“张布还有女儿吗？”侍从回答：“张布的大女儿嫁给了已故卫尉冯朝的儿子冯纯。”于是孙皓夺走了冯纯的妻子张嫙，纳入宫中。孙皓颇为宠爱张嫙，册封其为左夫人。昼夜嬉戏，纸醉金迷，不理朝政。后来张嫙也去世了，孙皓非常悲伤，下令以最高的规格埋葬张嫙。因为悲伤过度，孙皓一度半年都不出宫门，甚至由于葬礼太过奢华被宫外之人认为孙皓已经死了。',
			tengyin:'滕胤（？－256年），字承嗣，三国时期吴国重臣，北海郡剧县（今山东省昌乐县）人。滕胤仪表堂堂，少时有节操，后娶公主为妻。孙权称王后，滕胤被封都亭侯。其后历任丹杨太守、吴郡太守、会稽太守。孙亮继位后，出任太常、卫将军。诸葛恪被杀后，群臣推举滕胤为司徒，但遭权臣孙峻党羽所阻挠，滕胤也有意避嫌，最终只晋爵高密侯。孙峻死后，由其堂弟孙綝执政。滕胤的连襟、骠骑将军吕据联系北伐前线诸将推举滕胤为相，希望分割孙綝权力，但并未成功，滕胤被改任大司马，镇守武昌。不久，滕胤与吕据密谋推翻孙綝，因计划泄露而被杀，惨遭灭族。孙綝被杀后，景帝孙休为滕胤平反。',
			zhangyao:'张美人，三国东吴末帝孙皓后妃，张布之女。另有张布女，张美人姊被孙皓立为左夫人。《吴书五妃嫔传第五》：江表传曰：皓以张布女为美人，有宠，皓问曰：“汝父所在？”答曰：“贼以杀之。”皓大怒，棒杀之。后思其颜色，使巧工刻木作美人形象，恒置座侧。问左右：“布复有女否？”答曰：“布大女适故卫尉冯朝子纯。”即夺纯妻入宫，大有宠，拜为左夫人，昼夜与夫人房宴，不听朝政，使尚方以金作华燧、步摇、假髻以千数。令宫人著以相扑，朝成夕败，辄出更作，工匠因缘偷盗，府藏为空。会夫人死，皓哀愍思念，葬于苑中，大作冢，使工匠刻柏作木人，内冢中以为兵卫，以金银珍玩之物送葬，不可称计。已葬之后，皓治丧於内，半年不出。国人见葬太奢丽，皆谓皓已死，所葬者是也。皓舅子何都颜状似皓，云都代立。临海太守奚熙信讹言，举兵欲还诛都，都叔父植时为备海督，击杀熙，夷三族，讹言乃息，而人心犹疑。',
			xiahoulingnv:'夏侯令女，字令女，名不详。生卒年不详，三国时期人物。夏侯文宁之女（《三国演义》中为夏侯令之女），曹文叔之妻。其事迹见于《三国志·魏书·诸夏侯曹传第九》裴松之注引皇甫谧《列女传》。而在《三国演义》中，由于作者断句错误，便认为“夏侯令女”是“夏侯令之女”之意（见《三国演义》第107回：“乃夏侯令女也”，由其语气可推断）。',
			lvlingqi:'吕玲绮，虚拟人物，源于日本光荣株式会社（现光荣特库摩公司）旗下游戏《真·三国无双》系列，初次登场于《真三国无双7：猛将传》。吕布的女儿，寂寥而威风凛凛的战姬，发挥着不亚于父亲的武艺，非常勇敢地身先士卒立于前线。虽然有着能够直面困难的坚强意志，却由于过去的经历而有着非常害怕孤独的一面。',
			liuyong:'刘永，字公寿，涿郡涿县（今河北涿州）人，三国时期蜀汉昭烈帝刘备之子，蜀汉后主刘禅之弟。章武元年（221年）六月，封鲁王。建兴八年（230年），改封甘陵王。咸熙元年（264年），蜀汉灭亡，刘永被迁往洛阳，被任命为奉车都尉，封乡侯。',
			wanniangongzhu:'刘氏（生卒年不详），河南郡雒阳县（今河南省洛阳市）人，汉灵帝刘宏之女，汉少帝刘辩与汉献帝刘协的姐妹，封万年公主。',
			mamidi:'马日(mì)磾(dí)（？～194年），字翁叔。扶风茂陵（今陕西省兴平市）人。东汉中后期大臣，经学大师马融之族孙（一作族子）。马日磾年轻时即继承马融学说，以才学入仕。曾任谏议大夫，与蔡邕、卢植等人东观典校官藏的《五经》记传，并参与续写《东观汉记》。后历任射声校尉、太尉、太常等职。初平三年（192年），掌权的李傕任命马日磾为太傅、录尚书事，与太仆赵岐共同出使关东。他到寿春袁术处后，对其多有所求，遭袁术轻鄙，袁术遂夺其符节，来随意征辟将士，并企图强迫马日磾任其军师，马日磾求去不能，忧愤发病，兴平元年（194年），卒于寿春。',
			guanning:'管宁（158年—241年），字幼安。北海郡朱虚县（今山东省安丘、临朐东南）人。汉末三国时期著名隐士。管宁与华歆、邴原并称为“一龙”。汉末天下大乱时，与邴原及王烈等人避于辽。在当地只谈经典而不问世事，做讲解《诗经》《书经》，谈祭礼、整治威仪、陈明礼让等教化工作，人们都很乐于接受他的教导。直到魏文帝黄初四年（公元223年）才返乡，辽东太守公孙恭亲自送别。此后曹魏几代帝王数次征召管宁，他都没有应命。正始二年（公元241年），管宁逝世，年八十四。著有《氏姓论》。',
			tenggongzhu:'滕公主，名讳不详，三国人物，吴大帝孙权之女。一说为养女，生父为孙权堂弟孙奂。黄武年间（222年—228年），以公主身份下嫁功臣滕胄之子滕胤，当时滕胤年仅20岁。滕胤皮肤白皙，容貌俊美，每逢入朝大臣们没有不惊叹称羡的。滕胤仕官后，上书言及时局，又对政策多有匡弼。孙权对公主也特别宠爱，因为滕胤的缘故，又格外增加对公主的赏赐，又几次探望慰劳。少帝孙亮时期，孙綝以宗室身份独揽大权作恶多端，引发群臣不满。五凤三年（256年）滕胤与连襟吕据密谋推翻孙綝，事败遭到夷三族 。公主则被亲兄孙壹救出，携其逃亡曹魏。',
			caimaozhangyun:'蔡瑁，字德珪，生卒年不详。襄阳蔡州人，东汉末年荆州名士。少年时与曹操交好。初平元年（公元190年），刘表为荆州刺史。时宗贼猖獗，蔡瑁协助刘表诛杀宗贼，平定荆州之地，蔡瑁因此得刘表重用，并在刘表任镇南将军时担任他的军师。刘表病亡后，蔡瑁拥护刘表幼子刘琮继位，并逼迫他投降南征的曹操。蔡瑁在曹操麾下历任从事中郎、司马、长水校尉，受封汉阳亭侯。张允，生卒年不详，荆州牧刘表的外甥，与蔡瑁一样是刘表幼子刘琮的党羽。刘表病重之时，张允害怕刘表会把州牧之位传给长子刘琦，于是将远赴而来的刘琦阻于门外，不准他与刘表相见。曹操大军到达新野时，张允也随蔡瑁一同投降曹操。之后便隐没于历史之中，并无记载。在《三国演义》中，蔡瑁张允擅长水战，是东吴心腹大患。周瑜用反间计诱骗曹操除掉二人，使得曹军再无能够统领水军的大将。',
			zhangxun:'张勋，东汉末年军阀袁术帐下大将，袁术称帝后受封大将军。初平四年（公元193年），袁术引兵入陈留，被曹操、袁绍合力击败，逃至雍丘。后入九江，杀死扬州刺史陈温而自领之，并任命张勋、桥蕤为大将。时孙策依附于袁术，被表为怀义校尉，张勋对其倾心敬服。袁术称帝后，任命张勋为大将军，攻打吕布，大败而还。其后曹操又以袁术称帝为名南下进攻，袁术闻之大惊，即走度淮，留张勋、桥蕤守蕲阳以拒曹。曹操破其军，斩桥蕤，张勋退走。建安四年（公元199年），袁术病死，张勋率残军欲南投孙策，途中被袁术旧部刘勋俘虏，其后下落不明。',
			huzhao:'胡昭（162年－250年），字孔明，颍川（治今河南禹州）人。汉末三国时期隐士、书法家。胡昭善长隶书，与钟繇、邯郸淳、卫觊、韦诞齐名。有“钟氏小巧，胡氏豪放”之说，世人并称“钟胡”。',
			guanhai:'管亥（生卒年不详），青州黄巾军渠帅，率军侵略北海，围北海相孔融于都昌。孔融派遣太史慈突围而出，前往平原向刘备求援，刘备率军来到，击退管亥。《三国演义》中管亥在单挑中为关羽斩杀。',
			yinfuren:'尹夫人，原汉大将军何进的儿媳，丈夫早逝，生有一子何晏。曹操任司空时娶尹氏为妾，一并收养何晏，并生有一子曹矩。',
			chengui:'陈珪（生卒年不详），一作圭，字汉瑜。徐州下邳（治今江苏睢宁西北）人，广汉太守陈亹之孙，太尉陈球之侄，吴郡太守陈瑀（一作陈璃）、汝阴太守陈琮的从兄，陈登、陈应之父。官至沛相。',
			wanglie:'王烈，字彦方（141-219），平原县（今山东德州平原）人。生于永和六年（公元141年），卒于建安二十三年（公元218年）。王烈少时师从陈寔，闻名遐迩。董卓作乱时避乱辽东，并多次拒绝曹操的聘请。七十八岁时病死于辽东。',
			panghui:'庞会，（214—？），三国时期曹魏名将，庞德之子。曹丕即位后，思庞德忠烈，遂赐庞会等兄弟四人爵关内侯，邑各百户。庞会勇烈，有先父之风，官至中尉将军，封列侯。',
			chenjiao:'陈矫（？－237年7月11日），字季弼，广陵郡东阳县（治今安徽省天长市西北，今地属江苏省如皋市）人。三国时期曹魏名臣。陈矫本姓刘，因过继与母族而改姓陈。早年避乱江东，后广陵太守陈登请为功曹。曹操辟为丞相掾属，迁任相县令，转任征南长史。又为彭城、乐陵太守，迁任魏郡西部都尉。曹操东征，拜丞相长史，转西曹属、尚书。曹丕称帝，领吏部事，封高陵亭侯，迁尚书令。明帝继位后，进爵东乡侯，后转侍中，加光禄大夫，又拜司徒。景初元年（237年），陈矫去世，谥贞侯。',
			gongsundu:'公孙度 （？－204年），字升济，辽东襄平（今辽宁辽阳）人，东汉末年辽东太守。少随父迁居玄菟郡。初为玄菟小吏，建宁二年（169年），继升尚书郎、冀州刺史，后被免官。初平元年（190年），经同乡徐荣推荐，被董卓任命为辽东太守。公孙度到任后，厉行严刑峻法，打击豪强势力，使令行政通，羽翼渐丰。不久，中原地区董卓乱起，各地军阀无暇东顾。公孙度趁机自立为辽东侯、平州牧。继则东伐高句丽，西击乌桓，南取辽东半岛，越海取胶东半岛北部东莱诸县，开疆扩土；又招贤纳士，设馆开学，广招流民，威行海外，俨然以辽东王自居。建安九年（204年）病逝，子公孙康继承其位由于公孙度的锐意进取和苦心经营，使辽东地区在汉末三国的战乱年代，获得了暂时的安宁，推动了当地生产技术和封建文化的发展。',
			leibo:'雷薄（生卒年不详），本为东汉末年袁术麾下部将。离开称帝后昏庸奢侈的袁术，与陈兰一起占据嵩山为山贼。后来袭击兵败的袁术，抢夺财宝。同时在《三国演义》中也有出场。',
			liupi:'刘辟[pì]，东汉末年黄巾起义军将领。黄巾军将领。黄巾之乱后，与龚都一起率军盘踞在汝南。欲追随刘备，将汝南让给刘备。《三国演义》中，在与曹操的部将高览交战时，为保护刘备而战死。',
			zhenghun:'郑浑（生卒年不详），字文公。开封（今河南省开封市）人。汉末及三国时期曹魏大臣，东汉名儒郑众曾孙、名士郑泰之弟。郑浑早年避乱淮南，后转投豫章太守华歆。又被曹操辟为掾属，历任下蔡县长、邵陵县令，任内颇有政绩，深得民心。任左冯翊时，击杀扰乱郡县的梁兴，又击败作乱的山贼。历任上党太守、京兆尹、丞相掾属等职。曹丕称帝后，拜侍御史，加驸马都尉。先后任阳平、沛郡太守，任内兴修水利，使农田常年丰收，被百姓称为“郑陂”。后转任山阳和魏郡太守。魏明帝曹叡听闻郑浑的事迹之后，下诏将其政绩布告天下。官至将作大匠。卒年不详。',
			furongfuqian:'傅肜[róng]（？－222年），义阳（今湖北枣阳）人，三国时蜀汉将领。刘备攻伐吴国时，傅肜为别督。后刘备被陆逊击败，傅肜率部断后，奋战至死。死前怒斥道：“吴狗！何有汉将军降者！”<br>傅佥[qiān] ( ? ~263年），义阳（治今湖北省枣阳市)人，蜀汉将领傅彤之子，三国时期蜀汉名将。金长于谋略，并颇有胆勇，姜维甚爱之。傅佥官至关中都督。魏国攻伐蜀汉时，傅佥和蒋舒防守阳安关，兵败战死。',
			qinlang:'秦朗（生卒年不详），字元明，小字阿蘇（一作阿鳔），新兴（治今山西忻州）云中人。三国时期曹魏将领，官至骁骑将军、给事中，曾率兵讨伐鲜卑轲比能和步度根的叛军。',
			xianglang:'向朗（约167年—247年），字巨达。襄阳郡宜城县（今湖北宜城）人，三国时期蜀汉官员、藏书家、学者。向朗早年师从于司马徽，并被荆州牧刘表任命为临沮县长。后随刘备入蜀，历任巴西、牂牁、房陵太守，并拜步兵校尉，领丞相长史，随丞相诸葛亮北伐。因包庇马谡被免职，后为光禄勋，转左将军、特进，封显明亭侯。曾代理丞相册封张皇后及太子刘璿。晚年专心研究典籍，诱导青年学习，家中藏书丰富，受到举国尊重。延熙十年（247年），向朗去世。《全三国文》收录有一篇《遗言戒子》',
			yuantanyuanxiyuanshang:'袁谭袁尚介绍请移步「袁谭袁尚」，此处为袁熙的介绍。<br>袁熙（？－207年），字显奕（《后汉书》、《东光世系》作显雍），汝南郡汝阳县（今河南商水）人，是东汉末年占据河北的军阀袁绍次子，袁绍打败公孙瓒后，令袁熙为幽州刺史。袁绍官渡兵败后不久病死，其兄长袁谭、弟弟袁尚各自独立，互相攻伐，曹操趁机进攻袁谭、袁尚，并逐渐占河北。袁熙接纳兵败的袁尚后，因为属下叛变而逃往乌桓，被曹操击败后，逃往辽东太守公孙康帐下，却被公孙康杀死，二人首级被献给曹操。',
			zhanghu:'张虎，生卒年不详，雁门马邑(今山西朔城区大夫庄)人。张辽之子，三国时期曹魏武将。官至偏将军，封晋阳侯，有一子张统。',
			mengjie:'孟节，南中蛮王孟获之兄。是小说《三国演义》中杜撰的人物，史上并无记载。诸葛亮南征孟获之时，帐下军士因误饮哑泉之水失语。当地山神告知诸葛亮，言万安溪畔有一高士隐居彼处，号“万安隐者”。其草庵后有一泉，名安乐泉，可解哑泉之毒。庵前生有一草，名薤叶芸香，可防瘴气之染。诸葛亮于是带人连夜前往其隐居之处，求得泉水草叶解毒防瘴，拜求隐士姓名，方知其名为孟节，由此而叹：“方信盗跖、下惠之事，今亦有之。”诸葛亮欲申奏刘禅，立其为王，孟节辞之。又以金帛赠之，孟节坚辞不受。诸葛亮嗟叹不已，拜别而回。',
			peiyuanshao:'裴元绍，《三国演义》人物，原黄巾军之武将。黄巾起义失败之后，与周仓一同率领残部在山中落草当山贼。公元200年，在关羽欲返刘备旗下，在突破曹操的五道关卡后路过其落草之地，与周仓一同向关羽要求能以期成为关羽家臣。但此时仅周仓同行，其他弟兄则于山中等待。不久后，因其欲夺偶然路过的赵云之马，反遭讨伐战败身死。',
			zhangchu:'张楚，《阵面对决》第九弹“燎原”中登场的一个原创人物。她是张角的女儿，张宁的姐姐，在逃亡途中被刘备捕获。之后在诸葛亮的建议下，张楚被囚禁。在《阵面对决》的“怒焰”故事线中，张楚随着刘备入了西川，并被软禁在成都。夷陵之战后，刘备大败，全国主力外出用以支援刘备，朝内空虚，张楚趁机逃跑。',
			dongwan:'董绾，袁术老婆，嫉妒冯芳女的美貌，与冯方女有矛盾。',
			yuanyin:'袁胤（生卒年不详），东汉末期人物，据说是袁隗之子，是袁术从弟。兴平二年（公元195年）被袁术任命为丹杨太守，后因孙策平定江东被逐。建安四年（公元199年），袁术卒，袁胤因畏惧曹操，遂率领袁术部曲并带着其灵柩及妻子到皖城并投奔庐江太守刘勋。6个月后皖城被孙策所破，袁胤等人迁居吴郡，此后事迹不详。',
			gaoxiang:'高翔（又作高详、高祥）（生卒年不详），荆州南郡（治今湖北省公安县）人，三国时期蜀汉将领。曾随刘备攻打汉中，后又随蜀汉丞相诸葛亮参加北伐曹魏的战争。建兴九年（公元231年）的北伐中大破司马懿。官至杂号大将军（即某杂号将军加大，但无考何杂号将军），封玄乡侯。此后，关于高翔的记载不详。',
			zhoushan:'周善，《三国演义》中人物，不见于正史记载。为吴侯孙权的家将，此人最有胆量，自幼穿房入户，多随孙策。权为骗其妹回吴，遣善将五百人，扮为商人，分作五船；更诈修国书，以备盘诘；船内暗藏兵器。周善领命，往荆州。正骗得孙夫人带刘禅上船，赵云前来抢走禅，周善在后梢挟住舵，只顾放船下水。正僵持时张飞赶到，周善见张飞上船，提刀来迎，被张飞手起一剑砍倒，提头掷于孙夫人前。',
			zhangkai:'张闿[kǎi]，陶谦的手下都尉。奉命截杀曹操之父曹嵩，杀死曹嵩，夺去财宝逃往淮南投奔袁术，并担任刺杀陈王刘宠和陈国相骆俊的任务。',
			mengyou:'孟优，《三国演义》里的人物，南蛮王孟获之弟。与诸葛亮的南征军交战，向败战的兄长推荐朵思大王，劝兄长借助朵思之力与蜀汉军对抗。后来与兄长一起发誓归顺蜀汉。',
			liuchongluojun:'刘宠（?~197年），汉明帝刘庄玄孙，陈敬王刘羡曾孙，陈顷王刘崇之孙，陈孝王刘承之子，陈国第六位国君，也是东汉陈国的最后一位国君。骆俊（?-197），字孝远，东汉末年扬州会稽郡乌伤县（今浙江义乌）人。宗室陈王刘宠的国相，在任期间励精图治，深得民众爱戴。刘宠勇猛过人，善使弓弩，箭法高超。在其父刘承死后，继承陈王爵位。中平年间，黄巾军起义，郡县官兵都弃城逃走，刘宠于是征兵自守卫。当时天下饥荒，诸王侯都已不再享有租赋，反屡遭抢掠，有的甚至流离在外，死于荒野。只有陈国仍很富强，邻郡百姓纷纷前去投靠，陈国拥有部众达十余万人。初平元年（190年），各州郡起兵讨伐董卓，刘宠率军屯驻阳夏，自称辅汉大将军。建安二年（197年），袁术向陈国求取粮草，遭陈国国相骆俊拒绝，袁术大为生气，便派刺客张闿假装路过陈国，乘机杀死骆俊和刘宠。',
			yuechen:'乐綝（195~257年），字号不详，阳平郡卫国县（今河南省清丰县）人。三国时期曹魏将领，右将军乐进的儿子。果毅坚毅，袭封广昌亭侯，累迁扬州刺史。甘露二年，为叛乱的征东大将军诸葛诞所杀，追赠卫尉。',
		},
		characterTitle:{
		},
		perfectPair:{},
		characterFilter:{
		},
		dynamicTranslate:{
			cuijian:function(player){
				return '出牌阶段限一次，你可以选择一名有手牌的其他角色。若其手牌中有【闪】，则其将所有【闪】和防具牌交给你'+(player.hasMark('zhtongyuan_basic')?'':'，然后你交给其等量的牌')+'。'+(player.hasMark('zhtongyuan_trick')?'若其手牌中没有【闪】，则你摸两张牌。':'');
			},
			dunshi:function(player){
				var info=player.storage.dunshi;
				var str='每回合限一次。你可以视为使用或打出一张';
				var list=['sha','shan','tao','jiu'];
				for(var i of list){
					var strx='【'+get.translation(i)+'】';
					if(!info||!info[0].contains(i)) strx=('<span style="text-decoration:line-through;">'+strx+'</span>');
					str+=strx;
					if(i!='jiu') str+='/';
				}
				str+='，然后当前回合角色于本回合内下一次造成伤害时，你选择两项：⒈防止此伤害。系统从技能名中包含“仁/义/礼/智/信”字样的技能中随机选择三个其未拥有的技能，然后你令当前回合角色获得其中一个技能。⒉从〖遁世〗中删除你本次使用或打出的牌并获得一个“赂”。⒊减1点体力上限并摸X张牌（X为你的“赂”数）。';
				return str;
			},
			dcporui:function(player){
				return '每轮限一次。其他角色的结束阶段，你可以弃置一张基本牌并选择另一名于此回合内失去过牌的其他角色，你视为对其依次使用X+1张【杀】'+(player.hasMark('dcgonghu_damage')?'':'，然后你交给其X张手牌')+'（X为你的体力值）。'+(player.hasMark('dcgonghu_basic')?'若其没有因此受到伤害，你回复1点体力。':'');
			},
		},
		perfectPair:{},
		characterReplace:{
			dongbai:['re_dongbai','dongbai','jsrg_dongbai'],
			chunyuqiong:['chunyuqiong','re_chunyuqiong'],
			kanze:['re_kanze','kanze'],
			chendeng:['ol_chendeng','re_chendeng','chendeng'],
			miheng:['miheng','re_miheng'],
			liuba:['ol_liuba','dc_liuba','liuba'],
			lvkuanglvxiang:['lvkuanglvxiang','dc_lvkuanglvxiang'],
			dc_huangquan:['dc_huangquan','xf_huangquan'],
			yuejiu:['dc_yuejiu','yuejiu'],
			jiling:['dc_jiling','tw_jiling','jiling'],
			sp_jiaxu:['dc_sp_jiaxu','sp_jiaxu','yj_jiaxu'],
			qiaorui:['qiaorui','tw_qiaorui'],
			
		},
		translate:{
			re_panfeng:'潘凤',
			xinkuangfu:'狂斧',
			xinkuangfu_info:'出牌阶段限一次，你可选择：1，弃置装备区里的一张牌，你使用无对应实体牌的普【杀】。若此【杀】造成伤害，你摸两张牌。2，弃置一名其他角色装备区里的一张牌，你使用无对应实体牌的普【杀】。若此【杀】未造成伤害，你弃置两张手牌。',
			xingdaorong:'邢道荣',
			xuxie:'虚猲',
			xuxie_info:'出牌阶段开始时，你可以减1点体力上限并选择所有与你距离为1的角色，弃置这些角色的各一张牌或令这些角色各摸一张牌。出牌阶段结束时，若你的体力上限不为全场最多，则你加1点体力上限，然后回复1点体力或摸两张牌。',
			caoxing:'曹性',
			cxliushi:'流矢',
			cxliushi2:'流矢',
			cxliushi_info:'出牌阶段，你可以将一张红桃牌置于牌堆顶，视为对一名角色使用一张【杀】（无距离限制且不计入使用次数）。当此【杀】造成伤害后，受到伤害的角色获得一个“流”。有“流”的角色手牌上限-X（X为其“流”数）。',
			zhanwan:'斩腕',
			zhanwan_info:'锁定技，有“流”的角色于弃牌阶段弃牌后，你摸等量的牌，然后其移去所有的“流”。',
			re_chunyuqiong:'淳于琼',
			recangchu:'仓储',
			recangchu2:'仓储',
			recangchu3:'仓储',
			recangchu_info:'锁定技，游戏开始时，你获得3个“粮”。你的手牌上限+X（X为“粮”数）。当你于回合外获得牌时，你获得一个“粮”。（你的“粮”数不能超过存活角色数）',
			reliangying:'粮营',
			reliangying_info:'弃牌阶段开始时，你可以摸至多X张牌，然后交给等量的角色各一张牌。（X为你的“粮”数）',
			reshishou:'失守',
			reshishou2:'失守',
			reshishou_info:'锁定技，当你使用【酒】时或受到1点火焰伤害后，你移去一个“粮”。准备阶段，若你没有“粮”，你失去1点体力。',
			xiahoujie:'夏侯杰',
			liedan:'裂胆',
			liedan_info:'锁定技，其他角色的准备阶段开始时，若X大于0，则你摸X张牌。若X等于3，则你加1点体力上限（至多加到8）。若X为0，则你失去1点体力并获得一枚“裂”（X为你的手牌数，体力值，装备区牌数中大于其的数量）。准备阶段，若“裂”数大于4，则你死亡。',
			zhuangdan:'壮胆',
			zhuangdan_mark:'壮胆',
			zhuangdan_info:'锁定技，其他角色的回合结束时，若你的手牌数为全场唯一最多，则你令〖裂胆〗失效直到你下回合结束。',
			dc_caiyang:'蔡阳',
			dcxunji:'寻嫉',
			dcxunji_info:'出牌阶段限一次，你可以选择一名其他角色。该角色的下个结束阶段开始时，若其于该回合内造成过伤害，则你视为对其使用一张【决斗】，且当此【决斗】对其造成伤害后，你失去等量的体力。',
			dcjiaofeng:'交锋',
			dcjiaofeng_info:'锁定技。每回合限一次，当你造成伤害时，若你本回合内未造成过其他伤害且你已损失的体力值：大于0，则你摸一张牌；大于1，则此伤害+1；大于2，则你回复1点体力。',
			zhoushan:'周善',
			dcmiyun:'密运',
			dcmiyun_tag:'安',
			dcmiyun_info:'锁定技。①一轮游戏开始时，你依次执行：1.若你有“安”，你将包括“安”的在内的任意张手牌交给一名其他角色，然后你将手牌补至体力上限；2.你正面向上获得一名其他角色的一张牌，称为“安”。②当你不因〖密运①〗失去“安”后，你失去1点体力。',
			dcdanying:'胆迎',
			dcdanying_info:'每回合限一次。你可以展示“安”，然后视为使用或打出一张【杀】或【闪】。然后当你于本回合下一次成为牌的目标后，使用者弃置你的一张牌。',
			re_sunluyu:'孙鲁育',
			remeibu:'魅步',
			remeibu_info:'其他角色的出牌阶段开始时，若你在其攻击范围内，你可以弃置一张牌A，该角色于本阶段内拥有〖止息〗，且当其因〖止息〗弃置与牌A花色相同的牌时，你获得之。',
			rezhixi:'止息',
			rezhixi_info:'锁定技，当你使用【杀】或普通锦囊牌时，你弃置一张手牌。',
			remumu:'穆穆',
			remumu_info:'出牌阶段开始时，你可以选择一项：1.弃置一名其他角色装备区里的一张牌，然后你本回合可使用【杀】的次数+1；2.获得一名角色装备区里的一张牌，然后你本回合可使用【杀】的次数-1。',
			re_dongbai:'董白',
			relianzhu:'连诛',
			relianzhu_info:'出牌阶段限一次，你可将一张牌正面朝上交给一名其他角色。若此牌为：红色，你摸一张牌；黑色，对方弃置两张牌或令你摸两张牌。’',
			rexiahui:'黠慧',
			rexiahui_info:'锁定技，①你的黑色牌不计入手牌上限。②当有其他角色获得你的黑色牌后，其于下次扣减体力前不能使用，打出，弃置这些牌。③一名其他角色的回合结束时，若其本回合失去过其所有“黠慧”牌，则其失去1点体力。',
			heyan:'何晏',
			yachai:'崖柴',
			yachai_info:'当你受到伤害后，你可令伤害来源选择一项：①其本回合不能再使用手牌，然后你摸两张牌；②其展示所有手牌，然后将其手牌中一种花色的所有牌交给你；③弃置一半数量的手牌（向上取整）。',
			qingtan:'清谈',
			qingtan_info:'出牌阶段限一次，你可令所有有手牌的角色同时选择一张手牌并同时展示。你可以获得其中一种花色的牌，然后展示此花色牌的角色各摸一张牌。若如此做，弃置其他的牌。',
			zhaoyan:'赵嫣',
			jinhui:'锦绘',
			jinhui_info:'出牌阶段限一次，你可以随机展示牌堆中的三张不具有“伤害”标签且使用目标范围为“自己”或“一名角色”的牌，然后选择一名其他角色。该角色选择并按如下“锦绘”规则使用其中一张，然后你可以按如下“锦绘”规则使用剩余的任意张牌：若此牌的使用目标为“自己”，则对自己使用该牌，否则对对方使用该牌（无距离限制且不计入次数限制）。',
			qingman:'轻幔',
			qingman_info:'锁定技。一名角色的回合结束时，你将手牌摸至X张（X为其装备区中空栏的数量）。',
			wangtao:'王桃',
			wangyue:'王悦',
			huguan:'护关',
			huguan_info:'一名角色于出牌阶段内使用第一张牌时，若此牌为红色，则你可以声明一种花色。该花色的牌不计入其本回合的手牌上限。',
			yaopei:'摇佩',
			yaopei_info:'其他角色的弃牌阶段结束时，若你本局游戏内对其发动过〖护关〗，则你可以弃置一张与其于此阶段弃置的牌花色均不相同的牌。然后你选择一项：①其摸两张牌，你回复1点体力。②其回复1点体力，你摸两张牌。',
			mingluan:'鸣鸾',
			mingluan_info:'其他角色的结束阶段开始时，若有角色于本回合内回复过体力，则你可以弃置任意张牌，然后摸X张牌（X为当前角色的手牌数，且至多摸至5张）。',
			zhangxuan:'张嫙',
			tongli:'同礼',
			//tongli_info:'当你于出牌阶段内不因〖同礼〗而使用基本牌或普通锦囊牌指定第一个目标后，若你手牌中的花色数和你于本阶段内不因〖同礼〗而使用过的牌数相等，则你可以于此牌结算结束后依次视为对此牌的所有目标使用X张名称和属性相同的牌（X为你手牌中的花色数）。',
			tongli_info:'当你于出牌阶段内使用基本牌或普通锦囊牌指定第一个目标后，若你手牌中的花色数和你于本阶段内使用过的牌数相等，则你可以令此牌额外结算X次（X为你手牌中的花色数）。',
			shezang:'奢葬',
			shezang_info:'每轮限一次。当你或你回合内的其他角色进入濒死状态时，你可以从牌堆中获得每种花色的牌各一张。',
			tengyin:'滕胤',
			chenjian:'陈见',
			chenjian_info:'准备阶段，你可展示牌堆顶的3+X张牌（X为你“陈见”标记的数量且至多为2）。然后你可依次执行以下两项中的任意项：⒈弃置一张牌，然后令一名角色获得与你弃置牌花色相同的牌。⒉使用其中剩余的一张牌。若你执行了所有选项，则你获得一枚“陈见”，然后重铸所有手牌。',
			xixiu:'皙秀',
			xixiu_info:'锁定技。①当你成为其他角色使用牌的目标时，若你的装备区内有和此牌花色相同的牌，则你摸一张牌。②若你装备区内的牌数为1，则其他角色不能弃置你装备区内的牌。',
			zhangyao:'张媱',
			yuanyu:"怨语",
			yuanyu_info:"出牌阶段限一次。你可以摸一张牌，然后选择一张手牌和一名其他角色。该角色获得如下效果直到你发动〖夕颜〗：{你与该角色的弃牌阶段开始时，或当该角色造成1点伤害后，其须将一张手牌作为“怨”置于你的武将牌上}。然后你将你选择的手牌作为“怨”置于你的武将牌上。",
			xiyan:"夕颜",
			xiyan_info:"当有牌作为“怨”移动到你的武将牌上后，若“怨”中的花色数达到4种，则你可以获得所有“怨”。然后若当前回合角色：是你，你本回合手牌上限+4且使用牌无次数限制且重置你的〖怨语〗于此阶段的发动次数；不是你，你可令当前回合角色本回合手牌上限-4且不能使用基本牌。",
			xiahoulingnv:'夏侯令女',
			fuping:'浮萍',
			fuping_info:'①其他角色对你使用的牌结算结束后，若你未因此技能记录过此牌的名称且你有未废除的装备栏，则你可以废除一个装备栏，记录此牌的名称。②每回合每种牌名限一次。你可以将一张非基本牌当做〖浮萍①〗记录过的基本牌或锦囊牌使用或打出。③若你的所有装备栏均已被废除，则你使用牌无距离限制。',
			weilie:'炜烈',
			weilie_info:'每局游戏限X次。出牌阶段，你可以弃置一张牌并选择一名已受伤的角色，令该角色回复1点体力。然后若其体力值小于体力上限，则其摸一张牌（X为你〖浮萍①〗中的记录数+1）。',
			dc_sunru:'孙茹',
			xiecui:'撷翠',
			xiecui_info:'当有角色于回合内第一次因执行牌的效果而造成伤害时，你可以令此伤害+1。若其势力为吴，则该角色获得此伤害牌对应的实体牌，且其本回合的手牌上限+1。',
			youxu:'忧恤',
			youxu_info:'一名角色A的回合结束时，若其手牌数大于体力值，则你可以展示A的一张牌，然后将此牌交给另一名角色B。若B的体力值为全场最少，则B回复1点体力。',
			huaxin:'华歆',
			wanggui:'望归',
			wanggui_info:'每回合限触发一次，当你造成或受到伤害后，若你：仅明置了此武将牌，则你可对与你势力不同的一名角色造成1点伤害；武将牌均明置，则你可令与你势力相同的角色各摸一张牌。',
			spwanggui:'望归',
			spwanggui_info:'①当你受到伤害后，你可以摸一张牌，或和一名势力相同的其他角色各摸一张牌；②每回合限一次，当你造成伤害后，你可以对一名与你势力不同的角色造成1点伤害。',
			xibing:'息兵',
			xibing_info:'当一名其他角色在其出牌阶段内使用黑色【杀】或黑色普通锦囊牌指定唯一角色为目标后，你可令该角色将手牌摸至当前体力值(至多摸五张)且本回合不能再使用手牌。',
			xibing_info_guozhan:'当一名其他角色在其出牌阶段内使用第一张黑色【杀】或黑色普通锦囊牌指定唯一角色为目标后，你可令该角色将手牌摸至当前体力(至多摸五张)值且本回合不能再使用手牌。若你与其均明置了所有武将牌，则你可以暗置你与其各一张武将牌且本回合不能再明置此武将牌。',
			luyusheng:'陆郁生',
			zhente:'贞特',
			zhente2:'贞特',
			zhente_info:'每回合限一次，当你成为其他角色使用基本牌或普通锦囊牌的目标后，你可令使用者选择一项：1.本回合不能再使用与此牌颜色相同的牌；2.此牌对你无效。 ',
			zhente_info_guozhan:'每回合限一次，当你成为其他角色使用黑色基本牌或黑色普通锦囊牌的目标后，你可令使用者选择一项：1.本回合不能再使用黑色牌；2.此牌对你无效。 ',
			zhiwei:'至微',
			zhiwei2:'至微',
			zhiwei_info:'游戏开始时/你的回合开始时，若场上没有因此法被选择过的角色存活，则你选择一名其他角色。该角色造成伤害后，你摸一张牌，该角色受到伤害后，你随机弃置一张手牌。你弃牌阶段弃置的牌均被该角色获得。',
			zhiwei_info_guozhan:'你明置此武将牌时，选择一名其他角色。该角色造成伤害后，你摸一张牌，该角色受到伤害后，你随机弃置一张手牌。你弃牌阶段弃置的牌均被该角色获得。该角色死亡时，若你的两个武将牌均明置，你暗置此武将牌。 ',
			zhanghu:'张虎',
			cuijian:'摧坚',
			cuijian_info:'出牌阶段限一次，你可以选择一名有手牌的其他角色。若其手牌中有【闪】，则其将所有【闪】和防具牌交给你，然后你交给其等量的牌。',
			zhtongyuan:'同援',
			zhtongyuan_info:'锁定技。①当你使用红色锦囊牌后，你于〖摧坚〗后增加“若其手牌中没有【闪】，则你摸两张牌”；②当你使用或打出红色基本牌后，你删除〖摧坚〗中的“，然后你交给其等量的牌”。③当你使用红色的普通锦囊牌/基本牌时，若你已发动过〖摧坚①〗和〖摧坚②〗，则此牌不可被响应/可额外增加一个目标。',
			lvlingqi:'吕玲绮',
			guowu:'帼舞',
			guowu_info:'出牌阶段开始时，你可以展示全部手牌，根据你展示的类型数，你获得对应效果：至少一类，从弃牌堆获得一张【杀】；至少两类，此阶段使用牌无距离限制；至少三类，此阶段使用【杀】或普通锦囊牌可以多指定两个目标。',
			guowu_info_guozhan:'出牌阶段开始时，你可以展示全部手牌，根据你展示的类型数，你获得对应效果：至少一类，从弃牌堆获得一张【杀】；至少两类，此阶段使用牌无距离限制；至少三类，此阶段使用【杀】可以多指定两个目标。',
			zhuangrong:'妆戎',
			zhuangrong_info:'觉醒技，一名角色的回合结束时，若你的体力值或手牌数为1，你减1点体力上限并回复体力至上限，将手牌摸至体力上限，然后获得〖神威〗和〖无双〗。',
			llqshenwei:'神威',
			llqshenwei_info:'锁定技，摸牌阶段开始时，你令额定摸牌数+2；你的手牌上限+2。',
			re_kanze:'阚泽',
			rekuanshi:'宽释',
			rekuanshi_info:'结束阶段，你可以选择一名角色。你获得如下效果直到你下回合开始：每回合限一次，当其于一回合内受到第2点伤害后，其回复1点体力。',
			liuyong:'刘永',
			zhuning:'诛佞',
			zhuning_info:'出牌阶段限一次。你可将任意张牌交给一名其他角色（称为“隙”），然后可视为使用一张具有伤害标签的基本牌/锦囊牌（不计入次数限制）。若你以此法使用的牌未造成伤害，则你将〖诛佞〗于本回合内改为“限两次”。',
			fengxiang:'封乡',
			fengxiang_info:'锁定技。①当你受到伤害后，若场上：存在“隙”唯一最多的角色，则其回复1点体力；不存在，则你摸一张牌。②当有角色的手牌移动后，若场上“隙”最多的角色因此发生变化，则你摸一张牌。',
			fengxiang_tag:'隙',
			re_xunchen:'荀谌',
			refenglve:'锋略',
			refenglve_info:'出牌阶段限一次，你可以和一名其他角色进行拼点。若你赢，其将区域内的两张牌交给你；若平局，则你令此技能于本阶段内的发动次数上限+1；若你输，其获得你的拼点牌。',
			anyong:'暗涌',
			anyong_info:'当一名角色于其回合内第一次对其他角色造成伤害后，若伤害值为1，则你可弃置一张牌，并对受伤角色造成1点伤害。',
			wanniangongzhu:'万年公主',
			zhenge:'枕戈',
			zhenge_info:'准备阶段，你可以选择一名角色。该角色本局游戏的攻击范围+1（至多+5）。然后若所有其他角色都在该角色的攻击范围内，则你可以令其视为对另一名角色使用一张【杀】。',
			xinghan:'兴汉',
			xinghan_info:'锁定技，每回合的第一张【杀】造成伤害后，若此【杀】的使用者成为过〖枕戈〗的目标，则你摸一张牌。若你的手牌数不是全场唯一最多的，则改为摸X张牌（X为该角色的攻击范围且最多为5）。',
			re_chendeng:'陈登',
			refuyuan:'扶援',
			refuyuan_info:'一名角色成为【杀】的目标后，若其本回合内没有成为过其他红色牌的目标，则你可以令其摸一张牌。',
			reyingshui:'营说',
			reyingshui_info:'出牌阶段限一次，你可将一张牌交给攻击范围内的一名其他角色，然后其选择一项：①交给你至少两张装备牌。②受到1点伤害。',
			rewangzu:'望族',
			rewangzu_info:'每回合限一次。当你受到其他角色造成的伤害时，你可随机弃置一张手牌，令此伤害-1。若你所在阵营的存活角色数是全场最多的，则你可以自行选择弃置的牌。',
			re_miheng:'祢衡',
			rekuangcai:'狂才',
			rekuangcai_info:'锁定技。①你于回合内使用牌无距离和次数限制。②弃牌阶段开始时，若你本回合内：未使用过牌，则你本局游戏的手牌上限+1；使用过牌但未造成过伤害，则你本局游戏的手牌上限-1。③结束阶段开始时，你摸X张牌（X为你本回合内造成的伤害且至多为5）。',
			reshejian:'舌箭',
			reshejian_info:'当你成为其他角色使用牌的唯一目标后，你可以弃置至少两张手牌。若如此做，你选择一项：⒈弃置其等量的牌。⒉对其造成1点伤害。',
			fengxi:'冯熙',
			yusui:'玉碎',
			yusui_info:'当你成为其他角色使用黑色牌的目标后，你可以失去1点体力，然后选择一项：⒈令其将手牌数弃置至与你相同；⒉令其失去Y点体力（Y为其的体力值减去你的体力值，不为正时不可选择）',
			boyan:'驳言',
			boyan_info:'出牌阶段限一次，你可选择一名其他角色。其将手牌摸至体力上限（至多摸至五张），然后其本回合不能使用或打出手牌。',
			re_dengzhi:'邓芝',
			jianliang:'简亮',
			jianliang_info:'摸牌阶段开始时，若你的手牌数不为全场最多，则你可以令至多两名角色各摸一张牌。',
			weimeng:'危盟',
			weimeng_info:'出牌阶段限一次，你可以获得一名其他角色的至多X张手牌，然后交给其等量的牌（X为你的体力值）。若你给出的牌点数之和：大于获得的牌，则你摸一张牌；小于获得的牌，弃置该角色区域内的一张牌。',
			mamidi:'马日磾',
			bingjie:'秉节',
			bingjie_info:'出牌阶段开始时，你可减1点体力上限，然后当你于本阶段内使用【杀】或普通锦囊牌指定其他角色为目标后，其弃置一张牌。若其弃置的牌与你使用的牌颜色相同，其无法响应此牌。',
			zhengding:'正订',
			zhengding_info:'锁定技。当你于回合外使用或打出牌响应其他角色使用的牌时，若这两张牌颜色相同，则你加1点体力上限并回复1点体力。',
			dc_jiben:'吉本',
			xunli:'寻疠',
			xunli_info:'锁定技。①当有黑色牌因弃置而进入弃牌堆后，若X大于0，则你将其中的X张牌置于武将牌上作为“疠”（X=min(这些牌的数量，9-Y)，Y=你的“疠”数）。②出牌阶段开始时，你可以用任意张黑色手牌交换等量的“疠”。',
			zhishi:'指誓',
			zhishi_info:'结束阶段，你可选择一名角色。当该角色于你的下回合开始前{成为【杀】的目标后或进入濒死状态时}，你可移去任意张“疠”，然后其摸等量的牌。',
			lieyi:'烈医',
			lieyi_info:'出牌阶段限一次。你可以展示所有“疠”并选择一名其他角色，对其使用其中的一张可对其使用的牌（无距离和次数限制）并重复此流程，并将其余的牌置于弃牌堆。然后若其存活且未于此流程中因受到伤害而进入过濒死状态，则你失去1点体力。',
			guanning:'管宁',
			dunshi:'遁世',
			dunshi_info:'每回合限一次。你可以视为使用或打出一张【杀】/【闪】/【桃】/【酒】，然后当前回合角色于本回合内下一次造成伤害时，你选择两项：⒈防止此伤害。系统从技能名中包含“仁/义/礼/智/信”字样的技能中随机选择三个其未拥有的技能，然后你令当前回合角色获得其中一个技能。⒉从〖遁世〗中删除你本次使用或打出的牌并获得一个“席”。⒊减1点体力上限并摸X张牌（X为你的“席”数）。',
			dc_gaolan:'高览',
			xizhen:'袭阵',
			xizhen_info:'出牌阶段开始时，你可选择一名其他角色，视为对其使用【杀】或【决斗】。然后当有角色于本阶段内使用或打出牌响应你时，该角色回复1点体力，你摸一张牌（若其满体力，改为两张）。',
			dc_huangchengyan:'黄承彦',
			dcjiezhen:'解阵',
			dcjiezhen_info:'出牌阶段限一次，你可选择一名其他角色。该角色获得〖八阵〗，且其所有不为{锁定技、限定技、觉醒技、主公技、带有Charlotte标签}的技能失效。你的下回合开始时，或其因〖八卦阵〗发起的判定结算结束后，你令其恢复其以此法失效的所有技能并失去以此法获得的〖八阵〗，然后获得其区域内的一张牌。',
			dczecai:'择才',
			dczecai_info:'限定技。一轮游戏开始时，若游戏轮数大于1，则你可令一名其他角色获得〖集智〗直到下一轮游戏开始；若其是上一轮内使用过锦囊牌数量唯一最多的角色，则其获得一个额外的回合。',
			dcyinshi:'隐世',
			dcyinshi_info:'锁定技。①每回合限一次，当你受到伤害时，若此伤害的渠道不为有颜色的牌，则你防止此伤害。②当有因〖八卦阵〗发起的判定的判定牌生效时，你获得此判定牌。',
			tenggongzhu:'滕公主',
			xingchong:'幸宠',
			xingchong_info:'一轮游戏开始时，你可声明两个自然数X和Y，且(X+Y)≤min(5, 你的体力上限)。你摸X张牌并展示Y张手牌。若如此做，当你于本轮内失去一张以此法展示的牌后，你摸两张牌。',
			liunian:'流年',
			liunian_info:'锁定技。牌堆第一次洗牌后，你于回合结束时加1点体力上限；牌堆第二次洗牌后，你于本回合结束时回复1点体力，且本局游戏内的手牌上限+10。',
			caimaozhangyun:'蔡瑁张允',
			lianzhou:'连舟',
			lianzhou_info:'锁定技。准备阶段，你横置你的武将牌。然后你可横置任意名体力值等于你的角色。',
			jinglan:'惊澜',
			jinglan_info:'锁定技。当你造成伤害后，若你的手牌数：大于体力值，你弃置四张手牌；等于体力值，你弃置一张手牌并回复1点体力；小于体力值，你受到1点无来源火焰伤害并摸五张牌。',
			dc_yanghu:'羊祜',
			dcdeshao:'德劭',
			dcdeshao_info:'每回合限两次。当你成为其他角色使用的黑色牌的目标后，你可以摸一张牌，然后若其手牌数不小于你，则你弃置其一张牌。',
			dcmingfa:'明伐',
			dcmingfa_info:'①出牌阶段限一次。当你使用【杀】或普通锦囊牌结算结束后，若你的武将牌上没有“明伐”牌，则你可以将此牌作为“明伐”牌置于武将牌上并选择一名其他角色，记录该角色和此牌的名称。②一名角色的回合结束时，若其是你〖明伐①〗记录的角色，则你视为对其依次使用X张〖明伐①〗记录的牌，然后移去“明伐”牌（X为其手牌数且至少为1，至多为5）。③一名角色死亡时，若其是你〖明伐①〗记录的角色，则你移去“明伐”牌。',
			dc_jiling:'纪灵',
			dcshuangren:'双刃',
			dcshuangren_info:'出牌阶段开始时，你可以和一名其他角色A进行拼点。若你赢，你选择一名角色B，或选择包含A在内的两名角色A和B（B的势力需与A相同），然后视为对被选择的角色使用一张【杀】（不计入次数限制）；若你没赢，则你本阶段内不能使用【杀】。',
			zhangxun:'张勋',
			suizheng:'随征',
			suizheng_info:'结束阶段，你可以选择一名角色Ａ，获得如下效果直到其下回合结束：①Ａ于下回合出牌阶段内使用【杀】的次数上限+1且无距离限制；②Ａ下回合的出牌阶段结束时，你可以选择一名此阶段内受到过Ａ造成的伤害的角色Ｂ，视为对Ｂ使用一张【杀】。',
			dc_liuba:'刘巴',
			dczhubi:'铸币',
			dczhubi_info:'当有♦牌因弃置而进入弃牌堆后，你可以令系统从牌堆/弃牌堆中检索一张【无中生有】，并将此牌置于牌堆顶。',
			dcliuzhuan:'流转',
			dcliuzhuan_tag:'转',
			dcliuzhuan_info:'锁定技。①其他角色于其回合内不于摸牌阶段而获得的牌称为“转”。②你不能成为实体牌中包含“转”的牌的目标。③当有“转”直接进入弃牌堆或经由处理区进入弃牌堆后，你获得之。',
			huzhao:'胡昭',
			midu:'弥笃',
			midu_info:'出牌阶段限一次。你可以选择一项：⒈废除任意个装备栏或判定区，并令一名角色摸等量的牌。⒉恢复一个已经被废除的装备栏或判定区，然后你获得〖活墨〗直到下回合开始。',
			xianwang:'贤望',
			xianwang_info:'锁定技。若你有被废除的装备栏，则其他角色至你的距离+1，你至其他角色的距离-1；若废除的装备栏数大于2，则改为距离+2/-2。',
			guanhai:'管亥',
			suoliang:'索粮',
			suoliang_info:'每回合限一次。当你对其他角色造成伤害后，你可以选择并展示其的至多X张牌（X为其体力上限且至多为5）。若这些牌中有♥或♣牌，则你获得这些牌；否则你弃置这些牌。',
			qinbao:'侵暴',
			qinbao_info:'锁定技。当你使用【杀】或普通锦囊牌时，你令所有手牌数不小于你的角色不能响应此牌。',
			dc_lvkuanglvxiang:'吕旷吕翔',
			dcshuhe:'数合',
			dcshuhe_info:'出牌阶段限一次，你可以展示一张手牌。若场上有与此牌点数相同的牌，则你获得这些牌；否则你将此牌交给一名其他角色并获得一枚“爵”。',
			dcliehou:'列侯',
			dcliehou_info:'锁定技。摸牌阶段开始时，你令额定摸牌数+X；然后此摸牌阶段结束时，你选择一项：⒈弃置X张牌。⒉失去1点体力（X为你的“爵”数+1且至多为5）。',
			yinfuren:'尹夫人',
			dcyingyu:'媵予',
			dcyingyu_info:'准备阶段开始时，你可以展示两名角色的各一张手牌。若这两张牌的花色不同，则你可以令一名角色获得另一名角色的展示牌。',
			dcyongbi:'拥嬖',
			dcyongbi_info:'限定技。出牌阶段，你可以将所有手牌交给一名其他男性角色。你将〖媵予〗的发动时机改为“准备阶段和结束阶段开始时”。然后若这些牌中包含的花色数：大于1，则你与其本局游戏的手牌上限+2；大于2，则当你或其于本局游戏内受到大于1的伤害时，此伤害-1。',
			dc_huangquan:'黄权',
			dcquanjian:'劝谏',
			dcquanjian_info:'出牌阶段每项各限一次。你可以选择一项流程并选择一名其他角色A：⒈令A对其攻击范围内的另一名角色B造成1点伤害。⒉令A将手牌数调整至体力上限（至多摸至五张），且其本回合内不能使用或打出手牌。然后A选择一项：⒈执行此流程。⒉本回合下次受到的伤害+1。',
			dctujue:'途绝',
			dctujue_info:'限定技。当你进入濒死状态时，你可以将所有牌交给一名其他角色。然后你回复等量的体力并摸等量的牌。',
			chengui:'陈珪',
			dcyingtu:'营图',
			dcyingtu_info:'每回合限一次。当你的上家/下家于摸牌阶段外获得牌后，你可以获得其一张牌，然后将一张牌交给你的下家/上家。若你给出的牌为装备牌，则其使用之。',
			dccongshi:'从势',
			dccongshi_info:'一名角色使用的装备牌结算结束后，若其装备区内的牌数为全场最多，则你摸一张牌。',
			wanglie:'王烈',
			dcchongwang:'崇望',
			dcchongwang_info:'其他角色使用基本牌或普通锦囊牌时，若你是本局游戏内上一张被使用的牌的使用者，则你可以选择一项：⒈令其于此牌结算结束后收回此牌对应的所有实体牌；⒉取消此牌的所有目标。',
			dchuagui:'化归',
			dchuagui_info:'出牌阶段开始时，你可以选择至多X名有牌的其他角色（X为场上每个阵营中最大阵营的人数，且你的选择结果不展示）。这些角色同时选择一项：⒈交给你一张牌，⒉展示一张牌。若这些角色均选择选项二，则你获得所有展示牌。',		 
			gongsundu:'公孙度',
			dczhenze:'震泽',
			dczhenze_info:'弃牌阶段开始时，你可以选择一项：1.令所有手牌数与体力值大小关系与你不同的角色失去1点体力；2.令所有手牌数和体力值关系与你相同的角色回复1点体力。',
			dcanliao:'安辽',
			dcanliao_info:'出牌阶段限X次（X为群势力角色数）。你可以重铸一名角色的一张牌。',
			dc_yuejiu:'乐就',
			dccuijin:'催进',
			dccuijin_info:'当你或你攻击范围内的角色使用【杀】时，你可以弃置一张牌，令此【杀】的伤害基数+1。然后当此杀被目标角色抵消或无效或防止伤害后，你摸一张牌，对使用者造成1点伤害。',
			panghui:'庞会',
			dcyiyong:'异勇',
			dcyiyong_info:'每回合限两次。当你对其他角色造成伤害时，若你有牌，你可以与其同时弃置至少一张牌。若你以此法弃置的牌的点数之和：不大于其，你摸X张牌；不小于其，此伤害+1（X为其以此法弃置的牌数）。',
			chenjiao:'陈矫',
			dcxieshoux:'协守/清严',
			dcxieshou:'协守',
			dcxieshou_info:'每回合限一次。当一名角色受到伤害后，若你至其的距离不大于2，你可以令你的手牌上限-1，然后其选择一项：1.回复1点体力；2.复原，摸两张牌。',
			dcqingyan:'清严',
			dcqingyan_info:'每回合限两次。当你成为其他角色使用黑色牌的目标后，若你的手牌数：小于体力值，你可以将手牌补至体力上限；不小于体力值，你可以弃置一张牌令你的手牌上限+1。',
			dcqizi:'弃子',
			dcqizi_info:'锁定技。你不能对至其的距离大于2且正在进行濒死流程的角色使用【桃】。',
			leibo:'雷薄',
			dcsilve:'私掠',
			dcsilve_info:'游戏开始时，你选择一名其他角色（对其他角色不可见），称为“私掠”角色。然后你获得以下效果：①当“私掠”角色造成伤害后，若你本回合未因此效果得到过受伤角色的牌，你可以获得受伤角色一张牌；②当“私掠”角色受到其他角色造成的伤害后，若伤害来源存活，你须对伤害来源使用一张【杀】（无距离限制），否则你弃置一张手牌。',
			dcshuaijie:'衰劫',
			dcshuaijie_info:'限定技。出牌阶段，若你的体力值与装备区里的牌数均大于“私掠”角色，或没有角色有“私掠”，你可以减1点体力上限，然后选择一项：1.获得“私掠”角色至多三张牌；2.从牌堆随机获得三张类型各不同的牌。最后将你的“私掠”角色改为你。',
			dc_sp_jiaxu:'魏贾诩',
			dcjianshu:'间书',
			dcjianshu_info:'出牌阶段限一次。你可以将一张黑色手牌交给一名其他角色，并选择另一名其他角色，你令前者与后者拼点。赢的角色随机弃置一张牌，没赢的角色失去1点体力。若有角色因此死亡，你令你〖间书〗于此阶段发动的次数上限+1。',
			dcyongdi:'拥嫡',
			dcyongdi_info:'限定技。出牌阶段，你可以选择一名男性角色，若其：体力上限最少，其加1点体力上限；体力值最少，其回复1点体力；手牌数最少，其摸X张牌（X为其体力上限且至多为5）。',
			liupi:'刘辟',
			dcjuying:'踞营',
			dcjuying_info:'出牌阶段结束时，若你于此阶段内使用【杀】的次数未达到上限，你可以选择任意项：1.下回合使用【杀】的次数上限+1；2.本回合手牌上限+2；3.摸三张牌。若你选择的项数超过了你的体力值，你弃置X张牌（X为你选择的项数减你的体力值）。',
			dc_huanghao:'黄皓',
			dcqinqing:'寝情',
			dcqinqing_info:'结束阶段，你可以弃置一名攻击范围内包含一号位的其他角色一张牌。然后若其手牌数大于一号位，你摸一张牌。',
			dccunwei:'存畏',
			dccunwei_info:'锁定技。当你成为其他角色使用锦囊牌的目标后，若你是唯一目标，你摸一张牌；否则你弃置一张牌。',
			dc_zhaotongzhaoguang:'赵统赵广',
			dcqingren:'青刃',
			dcqingren_info:'结束阶段，你可以摸X张牌（X为你本回合发动〖翊赞〗的次数）。',
			dclongyuan:'龙渊',
			dclongyuan_info:'锁定技。一名角色的回合结束时，若你本局游戏已发动过至少三次〖翊赞〗，你摸两张牌并回复1点体力，修改〖翊赞〗。',
			zhenghun:'郑浑',
			dcqiangzhi:'强峙',
			dcqiangzhi_info:'出牌阶段限一次。你可以弃置你和一名其他角色的共计三张牌。然后若你与其之中有角色因此失去了三张牌，该角色对另一名角色造成1点伤害。',
			dcpitian:'辟田',
			dcpitian_info:'①当你的牌被弃置后，或当你受到伤害后，你的手牌上限+1。②结束阶段，若你的手牌数小于手牌上限，你可以摸至手牌上限（至多摸五张），然后重置因〖辟田①〗增加的手牌上限。',
			furongfuqian:'傅肜傅佥',
			dcxuewei:'血卫',
			dcxuewei_info:'结束阶段，你可以选择一名体力值不大于你的角色，然后你获得如下效果直到你的下回合开始时：当其受到伤害时，防止此伤害，然后你失去1点体力，你与其各摸一张牌（若该角色为你，则改为你摸一张牌）。',
			dcyuguan:'御关',
			dcyuguan_info:'一名角色的回合结束时，若你已损失的体力值为全场最多，你可以减1点体力上限，然后令X名角色将手牌摸至体力上限（X为你已损失的体力值）。',
			qinlang:'秦朗',
			dchaochong:'昊宠',
			dchaochong_info:'当你使用牌后，你可以将手牌摸至或弃置至你的手牌上限数（至多摸五张）。然后若你以此法：获得牌，你的手牌上限-1；失去牌，你的手牌上限+1。',
			dcjinjin:'矜谨',
			dcjinjin_info:'每回合限一次。当你造成或受到伤害后，你可以重置因〖昊宠〗增加或减少的手牌上限，令伤害来源弃置至多X张牌，然后你摸Y张牌（X为你以此法变化的手牌上限且至少为1，Y为X减其以此法弃置的牌数）。',
			xianglang:'向朗',
			dckanji:'勘集',
			dckanji_info:'出牌阶段限两次。你可以展示所有手牌，若花色均不同，你摸两张牌。然后若你的手牌因此包含了四种花色，你跳过下一个弃牌阶段。',
			dcqianzheng:'愆正',
			dcqianzheng_info:'每回合限两次。当你成为其他角色使用【杀】或普通锦囊牌的目标后，你可以重铸两张牌。若你以此法重铸的牌中没有与指定你为目标的牌类别相同的牌，你于此牌对应的实体牌进入弃牌堆后获得此牌对应的所有实体牌。',
			qiaorui:'桥蕤',
			dcaishou:'隘守',
			dcaishou_tag:'隘',
			dcaishou_info:'①结束阶段，你可以摸X张牌，称为“隘”（X为你的体力上限）。②准备阶段，你弃置所有“隘”，若你以此法弃置的牌数大于体力值且你的体力上限小于9，你加1点体力上限。③当你于回合外失去最后一张“隘”后，你减1点体力上限。',
			dcsaowei:'扫围',
			dcsaowei_info:'当一名其他角色使用【杀】结算结束后，若此牌的目标角色不包含你且均在你的攻击范围内，你可以将一张“隘”当做【杀】对所有目标角色使用。',
			yuantanyuanxiyuanshang:'袁谭袁尚袁熙',
			dcneifa:'内伐',
			dcneifa_info:'出牌阶段开始时，你可以摸三张牌，然后弃置一张牌。若你弃置的牌类型为：基本牌，本阶段你不能使用锦囊牌，且【杀】的使用次数上限+X且可以额外指定一名目标；锦囊牌，本阶段你不能使用基本牌，且使用普通锦囊牌选择目标时可以增加或减少一个目标（X为你发动〖内伐〗弃牌后手牌中因〖内伐〗而不能使用的牌的数量且最多为5。你以此法选择的额外目标均无距离限制）。',
			dc_sunziliufang:'孙资刘放',
			dcqinshen:'勤慎',
			dcqinshen_info:'弃牌阶段结束时，你可以摸X张牌（X为本回合未进入过弃牌堆的花色数）。',
			dcweidang:'伪谠',
			dcweidang_info:'其他角色的结束阶段，你可以将一张字数为X的牌置于牌堆底，然后获得牌堆里一张字数为X的牌（X为本回合未进入过弃牌堆的花色数）。若你能使用此牌，你使用之。',
			mengjie:'孟节',
			dcyinlu:'引路',
			dcyinlu_info:'①游戏开始时，你令三名角色依次分别获得“乐泉”、“藿溪”、“瘴气”标记（若场上角色数为2则改为令一名其他角色获得其中2枚，你获得剩余标记），然后你获得“芸香”标记并获得1点“芸香”值。②准备阶段/有〖引路〗标记的角色死亡时，你可以移动一名角色的1枚/其的所有〖引路〗标记。',
			dcyinlu_lequan:'乐泉',
			dcyinlu_lequan_info:'结束阶段，你可以弃置一张♦牌并回复1点体力。',
			dcyinlu_huoxi:'藿溪',
			dcyinlu_huoxi_info:'结束阶段，你可以弃置一张♥牌并摸两张牌。',
			dcyinlu_zhangqi:'瘴气',
			dcyinlu_zhangqi_info:'锁定技。结束阶段，你须弃置一张♠牌，否则失去1点体力。',
			dcyinlu_yunxiang:'芸香',
			dcyinlu_yunxiang_info:'①结束阶段，你可以弃置一张♣牌，获得1点“芸香”值。②当你受到伤害时，你可以扣减所有“芸香”值，减少等量的伤害。',
			dcyouqi:'幽栖',
			dcyouqi_info:'锁定技。当其他角色因〖引路〗标记弃置牌后，你有一定概率获得此牌。',
			dcyouqi_faq:'〖幽栖〗概率<br>',
			dcyouqi_faq_info:'当满足〖幽栖〗条件时，系统生成一个随机数X∈[0,1)。若X小于(1.25-0.25Y)，你获得此牌（Y为你至该角色的距离）。',
			dc_sunhanhua:'孙寒华',
			dchuiling:'汇灵',
			dchuiling_info:'锁定技。当你使用牌时，若此牌颜色为弃牌堆中数量较少的颜色，你获得1枚“灵”标记。若弃牌堆中：红色牌数大于黑色牌数，你回复1点体力；黑色牌数大于红色牌数，你可以弃置一名其他角色的一张牌。',
			dcchongxu:'冲虚',
			dcchongxu_info:'限定技。出牌阶段，若“灵”数不小于4，你可以失去〖汇灵〗，增加等同于“灵”数的体力上限（至多增加场上人数的体力上限），然后获得〖踏寂〗和〖清荒〗。',
			dctaji:'踏寂',
			dctaji_info:'当你失去手牌后，根据你失去牌的原因执行以下效果：1.使用：你弃置其他角色一张牌；2.打出：你摸一张牌；3.弃置：你回复1点体力；4.其他：你下一次对其他角色造成伤害时，此伤害+1。',
			dcqinghuang:'清荒',
			dcqinghuang_info:'出牌阶段开始时，你可以减1点体力上限，然后你于本回合发动〖踏寂〗时额外随机执行一种效果。',
			dc_huojun:'霍峻',
			dcgue:'孤扼',
			dcgue_info:'每名其他角色的回合限一次。当你需要使用或打出【杀】或【闪】时，若你有手牌，你可以展示之。若其中【杀】和【闪】的数量之和不超过1，你视为使用或打出此牌。',
			dcsigong:'伺攻',
			dcsigong_info:'其他角色的回合结束时，若其于本回合内使用牌被响应过，你可以将手牌摸至或弃置至1，视为对其使用一张需使用X张【闪】抵消的【杀】，且此【杀】的伤害基数+1（X为你以此法弃置的牌数且至少为1）。当你以此法造成伤害后，该技能于本轮失效。',
			peiyuanshao:'裴元绍',
			dcmoyu:'没欲',
			dcmoyu_info:'出牌阶段每名角色限一次。你可以获得一名其他角色区域里的一张牌，然后其可以对你使用一张【杀】，且此【杀】伤害基数为X（X为你于本回合发动此技能的次数）。若此【杀】对你造成了伤害，你令此技能于本回合失效。',
			zhangchu:'张楚',
			dcjizhong:'集众',
			dcjizhong_info:'出牌阶段限一次。你可以令一名其他角色摸两张牌，然后其选择一项：1.若其没有“信众”标记，其获得“信众”标记；2.弃置三张手牌。',
			dcrihui:'日彗',
			dcrihui_info:'每回合限一次。当你使用普通锦囊牌或黑色基本牌结算结束后，若此牌的目标数为1且目标不为你，且其：没有“信众”，则所有有“信众”的角色依次视为对其使用一张与此牌牌名和属性相同的牌；有“信众”，则你可以获得其区域里的一张牌。',
			dcguangshi:'光噬',
			dcguangshi_info:'锁定技。准备阶段，若所有其他角色均有“信众”，你失去1点体力并摸两张牌。',
			dongwan:'董绾',
			dcshengdu:'生妒',
			dcshengdu_info:'回合开始时，你可以选择一名其他角色。当其于其的下个摸牌阶段获得牌后，你摸等量的牌。',
			dcxianjiao:'献绞',
			dcxianjiao_info:'出牌阶段限一次。你可以将两张颜色不同的手牌当无距离限制且无任何次数限制的【杀】使用。然后若此【杀】：造成了伤害，所有目标角色失去1点体力；未造成伤害，你对所有目标角色依次发动一次〖生妒〗。',
			yuanyin:'袁胤',
			dcmoshou:'墨守',
			dcmoshou_info:'当你成为其他角色使用的黑色牌的目标后，你可以摸X张牌（X为你本局游戏此前发动过此技能的次数÷3的余数+1）。',
			dcyunjiu:'运柩',
			dcyunjiu_info:'一名角色死亡后，你可以弃置等同于其因死亡事件的规则而弃置的牌数，将其此次弃置的牌交给一名其他角色。然后你加1点体力上限并回复1点体力。',
			gaoxiang:'高翔',
			dcchiying:'驰应',
			dcchiying_info:'出牌阶段限一次。你可以选择一名体力不大于你的角色，令其攻击范围内的其他角色依次弃置一张牌。然后若你选择的角色不为你，其获得以此法弃置的牌中所有的基本牌。',
			zhangkai:'张闿',
			dcxiangshu:'相鼠',
			dcxiangshu_info:'其他角色的出牌阶段开始时，若其手牌数不小于其体力值，你可以选择一个不大于5的非负整数，然后你弃置一张牌或声明此数字。若如此做，此阶段结束时，若其手牌数与你选择的数字：差值不大于1，你获得其一张牌；相等，你对其造成1点伤害。',
			mengyou:'孟优',
			dcmanzhi:'蛮智',
			dcmanzhi_info:'①准备阶段，你可以选择一名其他角色并选择一项：1.令其交给你两张牌，然后其视为使用一张无距离限制的【杀】；2.获得其区域内至多两张牌，然后交给其等量的牌并摸一张牌。②结束阶段，若你的体力值与本回合准备阶段时的体力值相等，你可以执行你未于本回合执行过的〖蛮智①〗的分支。',
			dc_sunchen:'孙綝',
			dczigu:'自固',
			dczigu_info:'出牌阶段限一次。你可以弃置一张牌，然后获得场上的一张装备牌。若你没有因此获得其他角色的牌，你摸一张牌。',
			dczuowei:'作威',
			dczuowei_info:'当你于回合内使用牌时，你可以根据你的手牌数执行对应效果：大于X，令此牌不可被响应；等于X，对一名其他角色造成1点伤害；小于X，摸两张牌并令此技能于本回合失效（X为你装备区里牌的数量且至少为1）。',
			liuchongluojun:'刘宠骆俊',
			dcminze:'悯泽',
			dcminze_info:'①出牌阶段每名角色限一次。你可以将至多两张牌名不同的牌交给一名手牌数小于你的角色，若其因此手牌数大于你，〖悯泽①〗于此阶段失效。②结束阶段，你将手牌摸至X张（X为你本回合因〖悯泽①〗失去过的牌的牌名数且至多为5）',
			dcjini:'击逆',
			dcjini_info:'当你受到伤害后，你可以重铸至多Y张手牌（Y为你的体力上限减本回合你以此法重铸过的牌数）。若你以此法获得了【杀】，你可以对伤害来源使用一张无视距离且不可被响应的【杀】。',
			yuechen:'乐綝',
			dcporui:'破锐',
			dcporui_info:'每轮限一次。其他角色的结束阶段，你可以弃置一张基本牌并选择另一名于此回合内失去过牌的其他角色，你视为对其依次使用X+1张【杀】，然后你交给其X张手牌（X为你的体力值）。',
			dcgonghu:'共护',
			dcgonghu_info:'锁定技。①当你于回合外失去基本牌后，你于〖破锐〗后增加“若其没有因此受到伤害，你回复1点体力”。②当你于回合外造成或受到伤害后，你删除〖破锐〗中的“，然后你交给其X张手牌”。③当你使用红色基本牌/红色普通锦囊牌时，若你已发动过〖共护①〗和〖共护②〗，则此牌不可被响应/可额外增加一个目标。',
			yue_caiwenji:'乐蔡文姬',
			dcshuangjia:'霜笳',
			dcshuangjia_tag:'胡笳',
			dcshuangjia_info:'锁定技。①游戏开始，你将你的手牌标记为“胡笳”。②你的“胡笳”牌不计入手牌上限。③其他角色至你的距离+X（X为你的“胡笳”数且至多为5）。',
			dcbeifen:'悲愤',
			dcbeifen_info:'锁定技。①当你失去牌后，若这些牌中有“胡笳”牌，你获得与你手牌中“胡笳”牌花色均不同的每种花色的牌各一张。②若你手牌中“胡笳”牌数小于不为“胡笳”牌的牌数，你使用牌无距离和次数限制。',
			dc_wuban:'吴班',
			dcyouzhan:'诱战',
			dcyouzhan_info:'锁定技。当其他角色于你的回合内失去牌后，你摸一张牌，且其获得如下效果：1.其于此回合下一次受到的伤害+1；2.结束阶段，若其于此回合未受到过伤害，其摸X张牌（X为其此回合失去过牌的次数）。',
			
			sp_baigei:'无双上将',
			sp_caizijiaren:'才子佳人',
			sp_zhilan:'芝兰玉树',
			sp_zongheng:'纵横捭阖',
			sp_guixin:'天下归心',
			sp_jianghu:'江湖之远',
			sp_daihan:'代汉涂高',
			sp_taiping:'太平甲子',
			sp_yanhan:'匡鼎炎汉',
			sp_jishi:'悬壶济世',
			sp_raoting:'绕庭之鸦',
			sp_yijun:'异军突起',
			sp_zhengyin:'正音雅乐',
		},
	};
});
