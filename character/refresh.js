import { game } from '../noname.js';
game.import('character',function(lib,game,ui,get,ai,_status){
	return {
		name:'refresh',
		characterSort:{
			refresh:{
				refresh_standard:["re_caocao","re_simayi","re_guojia","re_zhangliao","re_xuzhu","re_xiahoudun","re_zhangfei","re_zhaoyun","re_guanyu","re_machao","re_zhouyu","re_lvmeng","re_ganning","re_luxun","re_daqiao","re_huanggai","re_lvbu","re_huatuo","re_liubei","re_diaochan","re_huangyueying","re_sunquan","re_sunshangxiang","re_zhenji","re_zhugeliang","re_huaxiong",'re_gongsunzan',"re_lidian","re_xushu"],
				refresh_feng:['caoren','ol_xiahouyuan','ol_weiyan','ol_xiaoqiao','zhoutai','re_zhangjiao','xin_yuji','ol_huangzhong'],
				refresh_huo:["ol_sp_zhugeliang","ol_xunyu","ol_dianwei","ol_yanwen","ol_pangtong","ol_yuanshao","ol_pangde","re_taishici"],
				refresh_lin:['re_menghuo','ol_sunjian','re_caopi','ol_xuhuang','ol_dongzhuo','ol_zhurong','re_jiaxu','ol_lusu'],
				refresh_shan:['ol_jiangwei','ol_caiwenji','ol_liushan','ol_zhangzhang','re_zuoci','re_sunce','ol_dengai','re_zhanghe'],
				refresh_yijiang1:['xin_wuguotai','xin_gaoshun','dc_caozhi','yujin_yujin','re_masu','xin_xusheng','re_fazheng','xin_lingtong','re_zhangchunhua','dc_xushu','re_chengong'],
				refresh_yijiang2:['re_madai','re_wangyi','xin_handang','xin_zhonghui','re_liaohua','re_chengpu','re_caozhang','dc_bulianshi','xin_liubiao','re_xunyou','re_guanzhang'],
				refresh_yijiang3:['re_jianyong','re_guohuai','re_zhuran','re_panzhangmazhong','xin_yufan','dc_liru','re_manchong','re_fuhuanghou','re_guanping','re_liufeng','re_caochong'],
				refresh_yijiang4:['re_sunluban','re_wuyi','re_hanhaoshihuan','re_caozhen','re_zhoucang','dc_chenqun','re_caifuren','re_guyong','re_jushou','re_zhuhuan','re_zhangsong'],
				refresh_yijiang5:['re_zhangyi','re_quancong','re_caoxiu','re_sunxiu','re_gongsunyuan','re_guotufengji','re_xiahoushi','re_liuchen','re_zhuzhi','re_caorui','re_zhongyao'],
				refresh_yijiang6:['re_guohuanghou','re_sundeng'],
				refresh_xinghuo:['xin_zhangliang','re_zhugedan','re_simalang','re_duji','dc_gongsunzan','re_sp_taishici','re_caiyong','re_mazhong','re_wenpin','re_jsp_huangyueying'],
			},
		},
		connect:true,
		character:{
			re_xushu:['male','shu',4,['zhuhai','qianxin']],
			re_lidian:['male','wei',3,['xunxun','xinwangxi']],
			re_zhongyao:['male','wei',3,['rehuomo','zuoding'],['clan:颍川钟氏']],
			xin_zhangliang:['male','qun',4,['rejijun','refangtong']],
			re_simalang:['male','wei',3,['requji','rejunbing']],
			re_zhugedan:['male','wei',4,['regongao','rejuyi']],
			re_caorui:['male','wei',3,['huituo','remingjian','rexingshuai'],['zhu']],
			re_caochong:['male','wei',3,['rechengxiang','renxin']],
			ol_zhangzhang:['male','wu',3,['olzhijian','olguzheng']],
			re_jsp_huangyueying:['female','qun',3,['rejiqiao','relinglong']],
			re_zhangsong:['male','shu',3,['qiangzhi','rexiantu']],
			re_zhuzhi:['male','wu',4,['reanguo']],
			dc_caozhi:['male','wei',3,['reluoying','dcjiushi']],
			ol_huangzhong:['male','shu',4,['xinliegong','remoshi']],
			re_wenpin:['male','wei',5,['rezhenwei']],
			re_guanzhang:['male','shu',4,['fuhun','retongxin']],
			re_mazhong:['male','shu',4,['refuman']],
			dc_chenqun:['male','wei',3,['repindi','dcfaen']],
			re_sundeng:['male','wu',4,['rekuangbi']],
			re_caiyong:['male','qun',3,['rebizhuan','retongbo']],
			re_chengong:['male','qun',3,['remingce','zhichi']],
			re_xunyou:['male','wei',3,['reqice','rezhiyu'],['clan:颍川荀氏']],
			dc_liru:['male','qun',3,['xinjuece','dcmieji','dcfencheng']],
			re_zhuhuan:['male','wu',4,['refenli','repingkou']],
			ol_dianwei:['male','wei',4,['olqiangxi','olningwu']],
			re_sp_taishici:['male','qun',4,['rejixu']],
			re_liufeng:['male','shu',4,['rexiansi']],
			ol_xunyu:['male','wei',3,['quhu','oljieming'],['clan:颍川荀氏']],
			re_liuchen:['male','shu',4,['rezhanjue','reqinwang'],['zhu']],
			dc_gongsunzan:['male','qun',4,['dcyicong','dcqiaomeng']],
			re_duji:['male','wei',3,['reandong','reyingshi']],
			re_jushou:['male','qun',3,['dcjianying','dcshibei']],
			re_zhanghe:['male','wei',4,['reqiaobian']],
			dc_xushu:['male','shu',4,['rezhuhai','xsqianxin']],
			xin_gaoshun:['male','qun',4,['decadexianzhen','decadejinjiu']],
			re_guohuanghou:['female','wei',3,['rejiaozhao','redanxin']],
			re_xiahoushi:['female','shu',3,['reqiaoshi','reyanyu']],
			ol_lusu:['male','wu',3,['olhaoshi','oldimeng']],
			re_jiaxu:['male','qun',3,['rewansha','reluanwu','reweimu']],
			re_guyong:['male','wu',3,['reshenxing','rebingyi']],
			xin_zhonghui:['male','wei',4,['xinquanji','xinzili'],['clan:颍川钟氏']],
			re_caifuren:['female','qun',3,['reqieting','rexianzhou']],
			re_guanping:['male','shu',4,['relongyin','jiezhong']],
			re_guotufengji:['male','qun',3,['rejigong','shifei']],
			re_zhoucang:['male','shu',4,['rezhongyong']],
			ol_zhurong:['female','shu',4,['juxiang','lieren','changbiao']],
			re_zhangchunhua:['female','wei',3,['rejueqing','reshangshi']],
			re_gongsunyuan:['male','qun',4,['rehuaiyi']],
			re_caozhen:['male','wei',4,['residi']],
			re_fuhuanghou:['female','qun',3,['rezhuikong','reqiuyuan']],
			re_fazheng:['male','shu',3,['reenyuan','rexuanhuo']],
			xin_lingtong:['male','wu',4,['decadexuanfeng','yongjin']],
			xin_liubiao:['male','qun',3,['decadezishou','decadezongshi']],
			re_caoxiu:['male','wei',4,['qianju','reqingxi']],
			re_sunxiu:['male','wu',3,['reyanzhu','rexingxue','zhaofu'],['zhu']],
			ol_dengai:['male','wei',4,['oltuntian','olzaoxian']],
			re_gongsunzan:['male','qun',4,['reqiaomeng','reyicong']],
			re_manchong:['male','wei',3,['rejunxing','yuce']],
			xin_yufan:['male','wu',3,['xinzhiyan','xinzongxuan']],
			dc_bulianshi:['female','wu',3,['dcanxu','dczhuiyi']],
			re_hanhaoshihuan:['male','wei',4,['reshenduan','reyonglve']],
			re_panzhangmazhong:['male','wu',4,['reduodao','reanjian']],
			re_wangyi:['female','wei',4,['zhenlie','miji']],
			re_madai:['male','shu',4,['mashu','reqianxi']],
			xin_xusheng:['male','wu',4,['decadepojun']],
			re_taishici:['male','wu',4,['tianyi','hanzhan']],
			re_masu:['male','shu',3,['resanyao','rezhiman']],
			re_sunluban:['female','wu',3,['rechanhui','rejiaojin']],
			xin_handang:['male','wu',4,['xingongji','xinjiefan']],
			yujin_yujin:['male','wei',4,['decadezhenjun']],
			re_caozhang:['male','wei',4,['xinjiangchi']],
			re_chengpu:['male','wu',4,['ollihuo','rechunlao']],
			re_quancong:['male','wu',4,['xinyaoming']],
			re_liaohua:['male','shu',4,['xindangxian','xinfuli']],
			re_guohuai:['male','wei',4,['decadejingce']],
			re_wuyi:['male','shu',4,['xinbenxi'],['clan:陈留吴氏']],
			re_zhuran:['male','wu',4,['xindanshou']],
			ol_pangtong:['male','shu',3,['ollianhuan','olniepan'],[]],
			re_zhangyi:['male','shu',5,['rewurong','reshizhi']],
			xin_wuguotai:['female','wu',3,['xinganlu','xinbuyi']],
			re_caocao:['male','wei',4,['new_rejianxiong','rehujia'],['zhu']],
			re_simayi:['male','wei',3,['refankui','reguicai']],
			re_guojia:['male','wei',3,['tiandu','new_reyiji']],
			re_zhangliao:['male','wei',4,['new_retuxi']],
			re_xuzhu:['male','wei',4,['new_reluoyi']],
			re_xiahoudun:['male','wei',4,['reganglie','new_qingjian']],
			re_zhangfei:['male','shu',4,['olpaoxiao','oltishen']],
			re_zhaoyun:['male','shu',4,['ollongdan','olyajiao']],
			re_guanyu:['male','shu',4,['new_rewusheng','new_yijue']],
			re_machao:['male','shu',4,['mashu','retieji']],
			re_zhouyu:['male','wu',3,['reyingzi','refanjian']],
			re_lvmeng:['male','wu',4,['keji','qinxue','rebotu']],
			re_ganning:['male','wu',4,['qixi','fenwei']],
			re_luxun:['male','wu',3,['reqianxun','relianying']],
			re_daqiao:['female','wu',3,['reguose','liuli']],
			re_huanggai:['male','wu',4,['rekurou','zhaxiang']],
			re_lvbu:['male','qun',5,['wushuang','new_liyu']],
			re_huatuo:['male','qun',3,['jijiu','new_reqingnang']],
			re_liubei:['male','shu',4,['rerende','rejijiang'],['zhu']],
			re_diaochan:['female','qun',3,['lijian','rebiyue']],
			re_huangyueying:['female','shu',3,['rejizhi','reqicai']],
			re_sunquan:['male','wu',4,['rezhiheng','rejiuyuan'],['zhu']],
			re_sunshangxiang:['female','wu',3,['xiaoji','rejieyin']],
			re_zhenji:['female','wei',3,['reluoshen','reqingguo']],
			re_zhugeliang:['male','shu',3,['reguanxing','kongcheng']],
			re_huaxiong:["male","qun",6,["reyaowu","shizhan"]],

			re_zhangjiao:['male','qun',3,['xinleiji','xinguidao','xinhuangtian'],['zhu']],
			xin_yuji:['male','qun',3,['reguhuo']],
			re_zuoci:['male','qun',3,['rehuashen','rexinsheng']],

			ol_xiahouyuan:['male','wei',4,['xinshensu','shebian']],
			caoren:['male','wei',4,['xinjushou','xinjiewei']],
			ol_weiyan:['male','shu',4,['xinkuanggu','reqimou']],
			ol_xiaoqiao:['female','wu',3,['oltianxiang','olhongyan','piaoling']],
			zhoutai:['male','wu',4,['buqu','fenji']],
			ol_pangde:['male','qun',4,['mashu','rejianchu']],
			ol_xuhuang:['male','wei',4,['olduanliang','oljiezi']],
			ol_sp_zhugeliang:["male","shu",3,["bazhen","olhuoji","olkanpo","cangzhuo"],[]],
			ol_yanwen:["male","qun",4,["olshuangxiong"],[]],
			ol_yuanshao:['male','qun',4,['olluanji','olxueyi'],['zhu']],
			re_menghuo:['male','shu',4,['huoshou','rezaiqi']],
			ol_dongzhuo:['male','qun',8,['oljiuchi','roulin','benghuai','olbaonue'],['zhu']],
			ol_sunjian:['male','wu','4/5',['gzyinghun','wulie']],
			re_caopi:['male','wei',3,['rexingshang','refangzhu','songwei'],['zhu']],
			ol_jiangwei:['male','shu',4,['oltiaoxin','olzhiji']],
			ol_caiwenji:['female','qun',3,['olbeige','duanchang']],
			ol_liushan:['male','shu',3,['xiangle','olfangquan','olruoyu'],['zhu']],

			re_sunce:['male','wu',4,['oljiang','olhunzi','olzhiba'],['zhu']],
			re_jianyong:['male','shu',3,['reqiaoshui','jyzongshi']],
		},
		characterIntro:{
			jsp_huangyueying:'荆州沔南白水人，沔阳名士黄承彦之女，诸葛亮之妻，诸葛瞻之母。容貌甚丑，而有奇才：上通天文，下察地理，韬略近于诸书无所不晓，诸葛亮在南阳闻其贤而迎娶。',
			re_gongsunzan:'群雄之一。出身贵族，因母地位卑贱，只当了郡中小吏。他貌美，声音洪亮，机智善辩。后随卢植于缑氏山中读书，粗通经传。',
			re_lidian:'字曼成，曹操麾下将领。李典深明大义，不与人争功，崇尚学习与高贵儒雅，尊重博学之士，在军中被称为长者。李典有长者之风，官至破虏将军，三十六岁去世。魏文帝曹丕继位后追谥号为愍侯。',
			sunben:' ',
		},
		characterFilter:{
			re_zuoci:function(mode){
				return mode!='guozhan';
			}
		},
		perfectPair:{
			sunben:['zhouyu','taishici','daqiao'],
			re_xushu:['zhaoyun','sp_zhugeliang'],
			re_guohuai:['xiahouyuan','zhanghe'],
		},
		skill:{
			ollianhuan:{
				audio:'xinlianhuan',
				audioname:['ol_pangtong'],
				hiddenCard:(player,name)=>{
					return name=='tiesuo'&&player.hasCard(card=>get.suit(card)=='club','she');
				},
				filter:function(event,player){
					if(!player.hasCard(card=>get.suit(card)=='club','she')) return false;
					return (event.type=='phase'||event.filterCard({name:'tiesuo'},player,event));
				},
				position:'hes',
				inherit:'lianhuan',
				group:'ollianhuan_add',
				subSkill:{
					add:{
						audio:'xinlianhuan',
						audioname:['ol_pangtong'],
						trigger:{player:'useCard2'},
						filter:function(event,player){
							if(event.card.name!='tiesuo') return false;
							var info=get.info(event.card);
							if(info.allowMultiple==false) return false;
							if(event.targets&&!info.multitarget){
								if(game.hasPlayer(current=>{
									return !event.targets.includes(current)&&lib.filter.targetEnabled2(event.card,player,current);
								})) return true;
							}
							return false;
						},
						charlotte:true,
						forced:true,
						popup:false,
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('ollianhuan'),'为'+get.translation(trigger.card)+'额外指定一个目标',(card,player,target)=>{
								return !_status.event.sourcex.includes(target)&&lib.filter.targetEnabled2(_status.event.card,player,target);
							}).set('sourcex',trigger.targets).set('ai',function(target){
								var player=_status.event.player;
								return get.effect(target,_status.event.card,player,player);
							}).set('card',trigger.card);
							'step 1'
							if(result.bool){
								if(!event.isMine()&&!event.isOnline()) game.delayex();
							}
							else event.finish();
							'step 2'
							if(result.bool){
								var targets=result.targets;
								player.logSkill('ollianhuan_add',targets);
								trigger.targets.addArray(targets);
								game.log(targets,'也成为了',trigger.card,'的目标');
							}
						},
					},
				},
			},
			rehuomo:{
				audio:'huomo',
				audioname:['huzhao','re_zhongyao'],
				enable:'chooseToUse',
				hiddenCard:function(player,name){
					if(get.type(name)!='basic') return false;
					const list=player.getStorage('rehuomo');
					if(list.includes(name)) return false;
					return player.hasCard(function(card){
						return get.color(card)=='black'&&get.type(card)!='basic';
					},'eh');
				},
				filter:function(event,player){
					if(event.type=='wuxie'||!player.hasCard(function(card){
						return get.color(card)=='black'&&get.type(card)!='basic';
					},'eh')) return false;
					const list=player.getStorage('rehuomo');
					for(let name of lib.inpile){
						if(get.type(name)!='basic'||list.includes(name)) continue;
						let card={name:name,isCard:true};
						if(event.filterCard(card,player,event)) return true;
						if(name=='sha'){
							for(let nature of lib.inpile_nature){
								card.nature=nature;
								if(event.filterCard(card,player,event)) return true;
							}
						}
					}
					return false;
				},
				chooseButton:{
					dialog:function(event,player){
						const vcards=[];
						const list=player.getStorage('rehuomo');
						for(let name of lib.inpile){
							if(get.type(name)!='basic'||list.includes(name)) continue;
							let card={name:name,isCard:true};
							if(event.filterCard(card,player,event)) vcards.push(['基本','',name]);
							if(name=='sha'){
								for(let nature of lib.inpile_nature){
									card.nature=nature;
									if(event.filterCard(card,player,event)) vcards.push(['基本','',name,nature]);
								}
							}
						}
						return ui.create.dialog('活墨',[vcards,'vcard'],'hidden');
					},
					check:function(button){
						const player=_status.event.player;
						const card={name:button.link[2],nature:button.link[3]};
						if(game.hasPlayer(function(current){
							return player.canUse(card,current)&&get.effect(current,card,player,player)>0;
						})){
							switch(button.link[2]){
								case 'tao':return 5;
								case 'jiu':return 3.01;
								case 'sha':
									if(button.link[3]=='fire') return 2.95;
									else if(button.link[3]=='thunder') return 2.92;
									else return 2.9;
								case 'shan':return 1;
							}
						}
						return 0;
					},
					backup:function(links,player){
						return {
							check:function(card){
								return 1/Math.max(0.1,get.value(card));
							},
							filterCard:function(card){
								return get.type(card)!='basic'&&get.color(card)=='black';
							},
							viewAs:{
								name:links[0][2],
								nature:links[0][3],
								suit:'none',
								number:null,
								isCard:true,
							},
							position:'he',
							popname:true,
							ignoreMod:true,
							precontent:function(){
								player.logSkill('rehuomo');
								var card=event.result.cards[0];
								game.log(player,'将',card,'置于牌堆顶');
								player.loseToDiscardpile(card,ui.cardPile,'visible','insert').log=false;
								var viewAs={name:event.result.card.name,nature:event.result.card.nature};
								event.result.card=viewAs;
								event.result.cards=[];
								if(!player.storage.rehuomo){
									player.when({global:'phaseAfter'}).then(()=>{player.unmarkSkill('rehuomo')});
								}
								player.markAuto('rehuomo',viewAs.name)
							},
						}
					},
					prompt:function(links,player){
						return '将一张黑色非基本牌置于牌堆顶并视为使用一张'+get.translation(links[0][3]||'')+get.translation(links[0][2]);
					}
				},
				marktext:'墨',
				intro:{
					content:'本回合已因〖活墨〗使用过$',
					onunmark:true,
				},
				ai:{
					order:function(){
						var player=_status.event.player;
						var event=_status.event;
						var list=player.getStorage('rehuomo');
						if(!list.includes('jiu')&&event.filterCard({name:'jiu'},player,event)&&get.effect(player,{name:'jiu'})>0){
							return 3.1;
						}
						return 2.9;
					},
					respondSha:true,
					fireAttack:true,
					respondShan:true,
					skillTagFilter:function(player,tag,arg){
						if(tag=='fireAttack') return true;
						if(player.hasCard(function(card){
							return get.color(card)=='black'&&get.type(card)!='basic';
						},'he')){
							var list=player.getStorage('rehuomo');
							if(tag=='respondSha'){
								if(arg!='use') return false;
								if(list.includes('sha')) return false;
							}
							else if(tag=='respondShan'){
								if(list.includes('shan')) return false;
							}
						}
						else{
							return false;
						}
					},
					result:{
						player:1
					}
				}
			},
			//界张梁
			rejijun:{
				audio:2,
				trigger:{player:'useCardAfter'},
				filter:function(event,player){
					return event.targets&&event.targets.includes(player);
				},
				frequent:true,
				content:function(){
					player.judge(card=>1).callback=lib.skill.rejijun.callback;
				},
				callback:function(){
					if(typeof card.number=='number') player.addToExpansion(card,'gain2').gaintag.add('rejijun');
				},
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				intro:{
					content:'expansion',
					markcount:'expansion',
				},
				marktext:'方',
				ai:{combo:'refangtong'},
			},
			refangtong:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				filter:function(event,player){
					return player.countCards('h');
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseCard(get.prompt2('refangtong'),(card,player)=>typeof card.number=='number').set('ai',card=>{
						var player=_status.event.player;
						if(!game.hasPlayer(target=>target!=player&&get.damageEffect(target,player,player,'thunder')>0)) return 0;
						if(player.getExpansions('rejijun').reduce(function(num,card){
							return num+get.number(card,false);
						},0)>36) return 1/(get.value(card)||0.5);
						else{
							if(lib.skill.refangtong.thunderEffect(card,player)) return 10-get.value(card);
							return 5-get.value(card);
						}
					});
					'step 1'
					if(result.bool){
						player.logSkill('refangtong');
						player.addToExpansion(result.cards,player,'give').gaintag.add('rejijun');
					}
					else event.finish();
					'step 2'
					player.chooseButton(['###是否移去任意张“方”，对一名其他角色造成1点雷属性伤害？###若你移去的“方”的点数和大于36，则改为造成3点雷属性伤害',player.getExpansions('rejijun')],[1,player.getExpansions('rejijun').length]).set('ai',button=>{
						var player=_status.event.player;
						var cards=player.getExpansions('rejijun');
						if(cards.reduce(function(num,card){
							return num+get.number(card,false);
						},0)<=36){
							if(!ui.selected.buttons.length) return 1/get.number(button.link,false);
							return 0;
						}
						else{
							var num=0,list=[];
							cards.sort((a,b)=>get.number(b,false)-get.number(a,false));
							for(var i=0;i<cards.length;i++){
								list.push(cards[i]);
								num+=get.number(cards[i],false)
								if(num>36) break;
							}
							return list.includes(button.link)?1:0;
						}
					});
					'step 3'
					if(result.bool){
						var bool=(result.links.reduce(function(num,card){
							return num+get.number(card,false);
						},0)>36);
						event.bool=bool;
						player.loseToDiscardpile(result.links);
						player.chooseTarget('请选择一名其他角色','对其造成'+(bool?3:1)+'点雷属性伤害',lib.filter.notMe).set('ai',target=>get.damageEffect(target,_status.event.player,_status.event.player,'thunder'));
					}
					else event.finish();
					'step 4'
					if(result.bool){
						var target=result.targets[0];
						player.line(target);
						target.damage(event.bool?3:1,'thunder');
					}
				},
				thunderEffect:function(card,player){
					var cards=player.getExpansions('rejijun'),num=0;
					cards.push(card);
					if(cards.reduce(function(num,card){
						return num+get.number(card,false);
					},0)<=36) return false;
					cards.sort((a,b)=>get.number(b,false)-get.number(a,false));
					var bool=false;
					for(var i=0;i<cards.length;i++){
						if(cards[i]==card) bool=true;
						num+=get.number(cards[i],false);
						if(num>36) break;
					}
					return bool;
				},
				ai:{combo:'rejijun'},
			},
			//界司马朗
			requji:{
				inherit:'quji',
				content:function(){
					'step 0'
					target.recover();
					'step 1'
					if(target.isDamaged()) target.draw();
					'step 2'
					if(target==targets[targets.length-1]&&cards.some(card=>get.color(card,player)=='black')) player.loseHp();
				},
			},
			rejunbing:{
				audio:2,
				trigger:{global:'phaseJieshuBegin'},
				filter:function(event,player){
					return event.player.countCards('h')<event.player.getHp();
				},
				direct:true,
				content:function(){
					'step 0'
					var target=trigger.player;
					event.player=player;
					event.target=target;
					target.chooseBool(target==player?get.prompt('rejunbing'):'是否响应'+get.translation(player)+'的【郡兵】？','摸一张牌'+(target==player?'':'，将所有手牌交给'+get.translation(player)+'，然后其可以交给你等量张牌')).set('choice',get.attitude(target,player)>0);
					'step 1'
					if(result.bool){
						player.logSkill('rejunbing',target);
						if(target!=player) game.log(target,'响应了',player,'的','#g【郡兵】');
						target.draw();
					}
					else event.finish();
					'step 2'
					var cards=target.getCards('h');
					if(target==player||!cards.length){event.finish();return;}
					target.give(cards,player);
					event.num=cards.length;
					'step 3'
					if(player.countCards('he')<num) event.finish();
					else player.chooseCard('郡兵：是否还给'+get.translation(target)+get.translation(num)+'张牌？','he',num).set('ai',card=>{
						var player=_status.event.player;
						var target=_status.event.target;
						if(get.attitude(player,target)<=0){
							if(card.name=='du') return 1145141919810;
							return -get.value(card);
						}
						return 6-get.value(card);
					}).set('target',target);
					'step 4'
					if(result.bool) player.give(result.cards,target);
				},
			},
			//界诸葛诞
			regongao:{
				audio:2,
				trigger:{global:'dying'},
				filter:function(event,player){
					if(player==event.player) return false;
					return !player.getAllHistory('useSkill',evt=>evt.skill=='regongao'&&evt.targets[0]==event.player).length;
				},
				forced:true,
				logTarget:'player',
				content:function(){
					player.gainMaxHp();
					player.recover();
				},
			},
			rejuyi:{
				unique:true,
				audio:2,
				derivation:['benghuai','reweizhong'],
				trigger:{player:'phaseZhunbeiBegin'},
				filter:function(event,player){
					return player.maxHp>game.countPlayer()&&player.isDamaged();
				},
				forced:true,
				juexingji:true,
				skillAnimation:true,
				animationColor:'thunder',
				content:function(){
					'step 0'
					player.awakenSkill('rejuyi');
					'step 1'
					player.drawTo(player.maxHp);
					'step 2'
					player.addSkills(['benghuai','reweizhong']);
				}
			},
			reweizhong:{
				audio:2,
				inherit:'weizhong',
				content:function(){
					player.draw(2);
				},
			},
			//堪比界曹冲的界曹叡
			remingjian:{
				inherit:'mingjian',
				content:function(){
					player.give(cards,target);
					target.addTempSkill('remingjian_buff',{player:'phaseAfter'});
					if(!target.storage.remingjian_buff) target.storage.remingjian_buff=[];
					target.storage.remingjian_buff.push(player);
					target.markSkill('remingjian_buff');
				},
				subSkill:{
					buff:{
						charlotte:true,
						mark:true,
						marktext:'鉴',
						intro:{
							content:(storage,player)=>{
								const num=storage.length;
								return `<li>被${get.translation(storage.toUniqued())}鉴识<li>手牌上限+${num}，出杀次数+${num}`;
							},
						},
						onremove:true,
						trigger:{
							source:'damageSource',
						},
						filter:function(event,player){
							if(_status.currentPhase!=player) return false;
							return player.getHistory('sourceDamage').indexOf(event)==0&&player.getStorage('remingjian_buff').some(i=>i.isIn());
						},
						content:function*(event,map){
							const player=map.player;
							const masters=player.getStorage('remingjian_buff').filter(i=>i.isIn()).toUniqued().sortBySeat(_status.currentPhase);
							while(masters.length){
								const master=masters.shift();
								if(!master.isIn()) continue;
								const result=yield player.chooseBool(`是否令${get.translation(master)}发动一次〖恢拓〗？`).set('choice',get.attitude(player,master)>0);
								if(!result.bool) continue;
								if(!player.isUnderControl(true)&&!event.isOnline()) game.delayx();
								player.logSkill('remingjian_buff',master);
								const next=game.createEvent('huituo');
								next.setContent(lib.skill.huituo.content);
								next.player=master;
								next.forced=true;
								next._trigger=map.trigger;
								yield next;
							}
						},
						mod:{
							maxHandcard:function(player,num){
								return num+player.getStorage('remingjian_buff').length;
							},
							cardUsable:function(card,player,num){
								if(card.name=='sha') return num+player.getStorage('remingjian_buff').length;
							}
						},
					}
				},
			},
			rexingshuai:{
				audio:2,
				skillAnimation:true,
				animationColor:'thunder',
				trigger:{player:'dying'},
				zhuSkill:true,
				filter:function(event,player){
					if(player.hp>0) return false;
					if(!player.hasZhuSkill('rexingshuai')) return false;
					return game.hasPlayer(function(current){
						return current!=player&&current.group=='wei';
					});
				},
				limited:true,
				mark:true,
				content:function(){
					'step 0'
					player.awakenSkill('rexingshuai');
					var targets=game.filterPlayer();
					targets.sortBySeat(_status.currentPhase);
					targets.remove(player);
					event.targets=targets;
					event.damages=[];
					player.addSkill('rexingshuai_restore');
					'step 1'
					if(event.targets.length){
						var current=event.targets.shift();
						if(current.group=='wei'){
							current.chooseBool('是否令'+get.translation(player)+'回复1点体力？').set('ai',function(){
								return get.attitude(_status.event.player,_status.event.target)>2;
							}).set('target',player);
							event.current=current;
						}
						else{
							event.redo();
						}
					}
					else{
						event.goto(3);
					}
					'step 2'
					if(result.bool){
						event.damages.push(event.current);
						event.current.line(player,'green');
						game.log(event.current,'令',player,'回复1点体力');
						player.recover();
					}
					if(event.targets.length){
						event.goto(1);
					}
					'step 3'
					if(event.damages.length){
						var next=game.createEvent('rexingshuai_next');
						event.next.remove(next);
						trigger.after.push(next);
						next.targets=event.damages;
						next.setContent(function(){
							targets.shift().damage();
							if(targets.length) event.redo();
						});
					}
				},
				subSkill:{
					restore:{
						trigger:{
							global:'dieAfter',
						},
						charlotte:true,
						forced:true,
						filter:function(event,player){
							return event.source&&event.source.isIn()&&event.source.hasSkill('mingjian2');
						},
						content:function(){
							player.restoreSkill('rexingshuai');
							game.log(player,'重置了','#g【兴衰】');
						}
					},
				}
			},
			//不想突破可以不突破的界曹冲
			rechengxiang:{
				audio:2,
				group:'rechengxiang_gain',
				trigger:{
					player:'rechengxiang_gainEnd',
				},
				direct:true,
				subfrequent:['gain'],
				filter:function(event,player){
					return event.cards2&&event.cards2.map(card=>{
						return get.number(card);
					}).reduce((sum,num)=>{
						return sum+=num;
					},0)==13;
				},
				content:function(){
					'step 0'
					player.link(false);
					'step 1'
					player.turnOver(false);
				},
				subSkill:{
					gain:{
						inherit:'chengxiang',
						audio:'rechengxiang',
					}
				}
			},
			//OL界二张
			olzhijian:{
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					return player.countCards('he',{type:'equip'})>0;
				},
				filterCard:function(card){
					return get.type(card)=='equip';
				},
				position:'he',
				check:function(card){
					var player=_status.currentPhase;
					if(player.countCards('he',{subtype:get.subtype(card)})>1){
						return 11-get.equipValue(card);
					}
					return 6-get.value(card);
				},
				filterTarget:function(card,player,target){
					if(target.isMin()) return false;
					return player!=target&&target.canEquip(card,true);
				},
				content:function(){
					target.equip(cards[0]);
					player.draw();
				},
				discard:false,
				lose:false,
				prepare:function(cards,player,targets){
					player.$give(cards,targets[0],false);
				},
				ai:{
					basic:{
						order:10
					},
					result:{
						target:function(player,target){
							var card=ui.selected.cards[0];
							if(card) return get.effect(target,card,target,target);
							return 0;
						},
					},
					threaten:1.35
				}
			},
			olguzheng:{
				audio:2,
				trigger:{
					global:['loseAfter','loseAsyncAfter'],
				},
				filter:function(event,player){
					if(event.type!='discard') return false;
					if(player.hasSkill('olguzheng_used')) return false;
					var phaseName;
					for(var name of lib.phaseName){
						var evt=event.getParent(name);
						if(!evt||evt.name!=name) continue;
						phaseName=name;
						break;
					}
					if(!phaseName) return false;
					return game.hasPlayer(current=>{
						if(current==player) return false;
						var evt=event.getl(current);
						if(!evt||!evt.cards2||evt.cards2.filterInD('d').length<2) return false;
						return true;
					});
				},
				checkx:function(event,player,cards){
					if(cards.length>2||get.attitude(player,event.player)>0) return true;
					for(var i=0;i<cards.length;i++){
						if(get.value(cards[i],event.player,'raw')<0) return true;
					}
					return false;
				},
				direct:true,
				preHidden:true,
				content:function(){
					'step 0'
					var targets=[],cardsList=[];
					var players=game.filterPlayer().sortBySeat(_status.currentPhase);
					for(var current of players){
						if(current==player) continue;
						var cards=[];
						var evt=trigger.getl(current);
						if(!evt||!evt.cards2) continue;
						var cardsx=evt.cards2.filterInD('d');
						cards.addArray(cardsx);
						if(cards.length){
							targets.push(current);
							cardsList.push(cards);
						}
					}
					event.targets=targets;
					event.cardsList=cardsList;
					'step 1'
					var target=targets.shift();
					var cards=event.cardsList.shift();
					event.target=target;
					event.cards=cards;
					player.chooseButton(2,[
						get.prompt('olguzheng',target),
						'<span class="text center">被选择的牌将成为对方收回的牌</span>',
						cards,
						[['获得剩余的牌','放弃剩余的牌'],'tdnodes'],
					]).set('filterButton',function(button){
						var type=typeof button.link;
						if(ui.selected.buttons.length&&type==typeof ui.selected.buttons[0].link) return false;
						return true;
					}).set('check',lib.skill.olguzheng.checkx(trigger,player,cards)).set('ai',function(button){
						if(typeof button.link=='string'){
							return button.link=='获得剩余的牌'?1:0;
						}
						if(_status.event.check){
							return 20-get.value(button.link,_status.event.getTrigger().player);
						}
						return 0;
					}).setHiddenSkill('olguzheng');
					'step 2'
					if(result.bool){
						player.logSkill('olguzheng',target);
						player.addTempSkill('olguzheng_used',['phaseZhunbeiAfter','phaseDrawAfter','phaseJudgeAfter','phaseUseAfter','phaseDiscardAfter','phaseJieshuAfter']);
						if(typeof result.links[0]!='string') result.links.reverse();
						var card=result.links[1];
						target.gain(card,'gain2');
						event.cards.remove(card);
						if(result.links[0]!='获得剩余的牌') event.finish();
					}
					else if(event.targets.length) event.goto(1);
					else event.finish();
					'step 3'
					var cards=cards.filterInD('d');
					if(cards.length>0) player.gain(cards,'gain2');
				},
				ai:{
					threaten:1.3,
					expose:0.2
				},
				subSkill:{
					used:{
						charlotte:true,
					}
				},
			},
			//SP黄月英
			rejiqiao:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				direct:true,
				filter:function(event,player){
					return player.countCards('he')>0;
				},
				content:function(){
					'step 0'
					player.chooseToDiscard(get.prompt2('rejiqiao'),[1,player.countCards('he')],'he').set('ai',function(card){
						if(card.name=='bagua') return 10;
						return 7-get.value(card);
					}).set('logSkill','rejiqiao');
					'step 1'
					if(result.bool){
						var num=result.cards.length;
						for(var i of result.cards){
							if(get.type(i,false)=='equip') num++;
						}
						event.cards=game.cardsGotoOrdering(get.cards(num)).cards;
						player.showCards(event.cards);
					}
					else{
						event.finish();
					}
					'step 2'
					var gained=[];
					var tothrow=[];
					for(var i=0;i<event.cards.length;i++){
						if(get.type(event.cards[i])!='equip'){
							gained.push(event.cards[i]);
						}
						else{
							tothrow.push(event.cards[i]);
						}
					}
					player.gain(gained,'gain2');
				},
				ai:{
					threaten:1.6
				}
			},
			relinglong:{
				audio:2,
				trigger:{
					player:['loseAfter','disableEquipAfter','enableEquipAfter'],
					global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter','phaseBefore'],
				},
				forced:true,
				onremove:true,
				derivation:'reqicai',
				filter:function(event,player){
					if(event.name=='disableEquip'||event.name=='enableEquip'){
						if(!event.slots.includes('equip5')) return false;
					}
					else if(event.name!='phase'&&(event.name!='equip'||event.player!=player)){
						var evt=event.getl(player);
						if(!evt||!evt.es||!evt.es.some(i=>get.subtypes(i).includes('equip5'))) return false;
					}
					var skills=player.additionalSkills['relinglong'];
					return (skills&&skills.length>0)!=player.hasEmptySlot(5);
				},
				direct:true,
				content:function(){
					player.removeAdditionalSkill('relinglong');
					if(player.hasEmptySlot(5)){
						player.addAdditionalSkill('relinglong',['reqicai']);
					}
				},
				group:['linglong_bagua','relinglong_directhit'],
				mod:{
					maxHandcard:function(player,num){
						if(!player.hasEmptySlot(3)||!player.hasEmptySlot(4)) return;
						return num+2;
					},
				},
				subSkill:{
					directhit:{
						audio:'relinglong',
						trigger:{player:'useCard'},
						forced:true,
						filter:function(event,player){
							if(event.card.name!='sha'&&get.type(event.card,false)!='trick') return false;
							for(var i=2;i<6;i++){
								if(!player.hasEmptySlot(i)) return false;
							}
							return true;
						},
						content:function(){
							trigger.directHit.addArray(game.players);
							game.log(trigger.card,'不可被响应');
						},
						ai:{
							directHit_ai:true,
							skillTagFilter:function(player,tag,arg){
								if(!arg||!arg.card||!arg.target||(arg.card.name!='sha'&&get.type(arg.card,false)!='trick')) return false;
								for(var i=2;i<6;i++){
									if(!player.hasEmptySlot(i)) return false;
								}
								return true;
							},
						},
					}
				}
			},
			//张松
			rexiantu:{
				audio:2,
				trigger:{global:'phaseUseBegin'},
				filter:function(event,player){
					return event.player!=player;
				},
				logTarget:'player',
				check:function(event,player){
					if(get.attitude(_status.event.player,event.player)<1) return false;
					return player.hp>1||player.hasCard(card=>(get.name(card)==='tao'||get.name(card)==='jiu')&&lib.filter.cardEnabled(card,player),'hs');
				},
				content:function(){
					'step 0'
					if(get.mode()!=='identity'||player.identity!=='nei') player.addExpose(0.2);
					player.draw(2);
					'step 1'
					var cards=player.getCards('he');
					if(!cards.length) event.finish();
					else if(cards.length<=2) event._result={cards:cards};
					else player.chooseCard(2,'he',true,'交给'+get.translation(trigger.player)+'两张牌').set('ai',function(card){
						if(ui.selected.cards.length&&card.name==ui.selected.cards[0].name) return -1;
						if(get.tag(card,'damage')) return 1;
						if(get.type(card)=='equip') return 1;
						return 0;
					});
					'step 2'
					player.give(result.cards,trigger.player);
					trigger.player.addTempSkill('rexiantu_check','phaseUseAfter');
					trigger.player.markAuto('rexiantu_check',[player]);
				},
				ai:{
					threaten:function(player,target){
						return 1+game.countPlayer((current)=>{
							if(current!=target&&get.attitude(target,current)>0) return 0.5;
							return 0;
						});
					},
					expose:0.3
				},
				subSkill:{
					check:{
						charlotte:true,
						trigger:{player:'phaseUseEnd'},
						forced:true,
						popup:false,
						onremove:true,
						filter:function(event,player){
							return !player.getHistory('sourceDamage',evt=>{
								return evt.getParent('phaseUse')==event;
							}).length;
						},
						content:function(){
							var targets=player.getStorage('rexiantu_check');
							targets.sortBySeat();
							for(var i of targets){
								if(i.isIn()){
									i.loseHp();
								}
							}
							player.removeSkill('rexiantu_check');
						}
					}
				}
			},
			//新服公孙瓒
			dcyicong:{
				trigger:{
					player:["changeHp"],
				},
				audio:2,
				forced:true,
				filter:function(event,player){
					return get.sgn(player.getDamagedHp()-1.5)!=get.sgn(player.getDamagedHp()-1.5+event.num);
				},
				content:function (){},
				mod:{
					globalFrom:function(from,to,current){
						return current-1;
					},
					globalTo:function(from,to,current){
						if(to.getDamagedHp()>=2) return current+1;
					},
				},
				ai:{
					threaten:0.8
				}
			},
			//朱治
			reanguo:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterTarget:lib.filter.notMe,
				content:function(){
					'step 0'
					if(target.isMinHandcard()){
						target.draw();
						event.h=true;
					}
					'step 1'
					if(target.isMinHp()&&target.isDamaged()){
						target.recover();
						event.hp=true;
					}
					'step 2'
					var equip=get.cardPile(function(card){
						return get.type(card)=='equip'&&target.hasUseTarget(card);
					});
					if(target.isMinEquip()&&equip){
						target.chooseUseTarget(equip,'nothrow','nopopup',true);
						event.e=true;
					}
					'step 3'
					game.updateRoundNumber();
					if(!event.h&&player.isMinHandcard()){
						player.draw();
						event.h=true;
					}
					'step 4'
					if(!event.hp&&player.isMinHp()&&player.isDamaged()){
						player.recover();
						event.hp=true;
					}
					'step 5'
					if(!event.e&&player.isMinEquip()){
						var equip=get.cardPile(function(card){
							return get.type(card)=='equip'&&player.hasUseTarget(card);
						});
						if(equip){
							player.chooseUseTarget(equip,'nothrow','nopopup',true);
							event.e=true;
						}
					}
					'step 6'
					if(event.h&&event.hp&&event.e){
						player.chooseCard('安国：是否重铸任意张牌？',[1,Infinity],lib.filter.cardRecastable,'he').set('ai',card=>{
							return 6-get.value(card);
						});
					}
					else event.finish();
					'step 7'
					if(result.bool){
						player.recast(result.cards);
					}
				},
				ai:{
					threaten:1.65,
					order:9,
					result:{
						player:function(player,target){
							if(get.attitude(player,target)<=0){
								if(target.isMinHandcard()||target.isMinEquip()||target.isMinHp()) return -1;
							}
							var num=0;
							if(player.isMinHandcard()||target.isMinHandcard()) num++;
							if(player.isMinEquip()||target.isMinEquip()) num++;
							if((player.isMinHp()&&player.isDamaged())||(target.isMinHp()&&target.isDamaged())) num+=2.1;
							return num;
						}
					}
				}
			},
			//颜良文丑
			olshuangxiong:{
				audio:2,
				trigger:{player:'phaseDrawEnd'},
				direct:true,
				filter:(event,player)=>player.countCards('he')>0,
				content:function(){
					'step 0'
					player.chooseToDiscard('he',get.prompt('olshuangxiong'),'弃置一张牌，然后你本回合内可以将一张与此牌颜色不同的牌当做【决斗】使用').set('ai',function(card){
						let  player=_status.event.player;
						if(!_status.event.goon||player.skipList.includes('phaseUse')) return -get.value(card);
						let color=get.color(card),effect=0,cards=player.getCards('hes'),sha=false;
						for(var cardx of cards){
							if(cardx==card||get.color(cardx)==color) continue;
							var cardy=get.autoViewAs({name:'juedou'},[cardx]),eff1=player.getUseValue(cardy);
							if(get.position(cardx)=='e'){
								var eff2=get.value(cardx);
								if(eff1>eff2) effect+=(eff1-eff2);
								continue;
							}
							else if(get.name(cardx)=='sha'){
								if(sha){
									effect+=eff1;
									continue;
								}
								else sha=true;
							}
							var eff2=player.getUseValue(cardx,null,true);
							if(eff1>eff2) effect+=(eff1-eff2);
						}
						return effect-get.value(card);
					}).set('goon',player.hasValueTarget({name:'juedou'})&&!player.hasSkill('olshuangxiong_effect')).logSkill='olshuangxiong';
					'step 1'
					if(result.bool){
						var color=get.color(result.cards[0],player);
						player.markAuto('olshuangxiong_effect',[color]);
						player.addTempSkill('olshuangxiong_effect');
					}
				},
				group:'olshuangxiong_jianxiong',
				subSkill:{
					effect:{
						audio:'olshuangxiong',
						enable:'chooseToUse',
						viewAs:{name:'juedou'},
						position:'hes',
						viewAsFilter:function(player){
							return player.hasCard(card=>lib.skill.olshuangxiong_effect.filterCard(card,player),'hes');
						},
						filterCard:function(card,player){
							var color=get.color(card),colors=player.getStorage('olshuangxiong_effect');
							for(var i of colors){
								if(color!=i) return true;
							}
							return false;
						},
						prompt:function(){
							var colors=_status.event.player.getStorage('olshuangxiong_effect');
							var str='将一张颜色';
							for(var i=0;i<colors.length;i++){
								if(i>0) str+='或';
								str+='不为';
								str+=get.translation(colors[i]);
							}
							str+='的牌当做【决斗】使用';
							return str;
						},
						check:function(card){
							var player=_status.event.player;
							if(get.position(card)=='e'){
								var raw=get.value(card);
								var eff=player.getUseValue(get.autoViewAs({name:'juedou'},[card]));
								return eff-raw;
							}
							var raw=player.getUseValue(card,null,true);
							var eff=player.getUseValue(get.autoViewAs({name:'juedou'},[card]));
							return eff-raw;
						},
						onremove:true,
						charlotte:true,
						ai:{order:7},
					},
					jianxiong:{
						audio:'olshuangxiong',
						trigger:{player:'phaseJieshuBegin'},
						forced:true,
						locked:false,
						filter:function(event,player){
							return player.hasHistory('damage',function(evt){
								//Disable Umi Kato's chaofan
								return evt.card&&evt.cards&&evt.cards.some(card=>get.position(card,true));
							});
						},
						content:function(){
							var cards=[];
							player.getHistory('damage',function(evt){
								if(evt.card&&evt.cards) cards.addArray(evt.cards.filter(card=>get.position(card,true)));
							});
							if(cards.length) player.gain(cards,'gain2');
						},
					},
				},
			},
			//新李典
			xinwangxi:{
				audio:'wangxi',
				trigger:{player:'damageEnd',source:'damageSource'},
				filter:function(event){
					if(event._notrigger.includes(event.player)) return false;
					return event.num&&event.source&&event.player&&
					event.player.isIn()&&event.source.isIn()&&event.source!=event.player;
				},
				check:function(event,player){
					if(player.isPhaseUsing()) return true;
					if(event.player==player) return get.attitude(player,event.source)>-5;
					return get.attitude(player,event.player)>-5;
				},
				logTarget:function(event,player){
					if(event.player==player) return event.source;
					return event.player;
				},
				preHidden:true,
				content:function(){
					'step 0'
					event.count=trigger.num;
					event.target=lib.skill.xinwangxi.logTarget(trigger,player);
					'step 1'
					player.draw(2);
					event.count--;
					'step 2'
					var cards=player.getCards('he');
					if(cards.length>0&&target.isIn()){
						if(cards.length==1) event._result={bool:true,cards:cards};
						else player.chooseCard('he','忘隙：交给'+get.translation(target)+'一张牌',true);
					}
					else event.goto(4);
					'step 3'
					if(result.bool){
						player.give(result.cards,target);
					}
					'step 4'
					if(event.count&&target.isIn()&&player.hasSkill('xinwangxi')){
						player.chooseBool(get.prompt2('xinwangxi',target));
					}
					else event.finish();
					'step 5'
					if(result.bool){
						player.logSkill('xinwangxi',target);
						event.goto(1);
					}
				},
				ai:{
					maixie:true,
					maixie_hp:true
				}
			},
			//OL界火诸葛
			olhuoji:{
				audio:'rehuoji',
				audioname:['ol_sp_zhugeliang'],
				trigger:{player:'huogongBegin'},
				forced:true,
				locked:false,
				popup:false,
				group:'olhuoji_viewAs',
				content:function(){
					trigger.setContent(lib.skill.olhuoji.huogongContent);
				},
				huogongContent:function(){
					"step 0"
					if(target.countCards('h')==0){
						event.finish();
						return;
					}
					event._result={cards:target.getCards('h').randomGets(1)};
					"step 1"
					target.showCards(result.cards).setContent(function(){});
					event.dialog=ui.create.dialog(get.translation(target)+'展示的手牌',result.cards);
					event.videoId=lib.status.videoId++;

					game.broadcast('createDialog',event.videoId,get.translation(target)+'展示的手牌',result.cards);
					game.addVideo('cardDialog',null,[get.translation(target)+'展示的手牌',get.cardsInfo(result.cards),event.videoId]);
					event.card2=result.cards[0];
					game.log(target,'展示了',event.card2);
					event._result={};
					player.chooseToDiscard({color:get.color(event.card2)},'he',function(card){
						var evt=_status.event.getParent();
						if(get.damageEffect(evt.target,evt.player,evt.player,'fire')>0){
							return 7-get.value(card,evt.player);
						}
						return -1;
					}).set('prompt',false);
					game.delay(2);
					"step 2"
					if(result.bool){
						target.damage('fire');
					}
					else{
						target.addTempSkill('huogong2');
					}
					event.dialog.close();
					game.addVideo('cardDialog',null,event.videoId);
					game.broadcast('closeDialog',event.videoId);
				},
				subSkill:{viewAs:{inherit:'rehuoji',audio:'rehuoji'}}
			},
			olkanpo:{
				audio:'rekanpo',
				audioname:['ol_sp_zhugeliang'],
				trigger:{player:'useCard'},
				forced:true,
				locked:false,
				popup:false,
				group:'olkanpo_viewAs',
				filter:function(event,player){
					return event.card.name=='wuxie';
				},
				content:function(){
					trigger.directHit.addArray(game.players);
				},
				subSkill:{viewAs:{inherit:'rekanpo',audio:'rekanpo'}}
			},
			//新杀界曹植
			dcjiushi:{
				audio:2,
				trigger:{
					player:'useCardAfter',
				},
				filter:function(event,player){
					return event.card.name=='jiu';
				},
				forced:true,
				locked:false,
				content:function(){
					player.addTempSkill('dcjiushi_sha',{player:'phaseEnd'});
					player.addMark('dcjiushi_sha',1,false);
				},
				group:['dcjiushi_use','dcjiushi_record','dcjiushi_damage'],
				subSkill:{
					use:{
						audio:'dcjiushi',
						enable:'chooseToUse',
						hiddenCard:function(player,name){
							if(name=='jiu') return !player.isTurnedOver();
							return false;
						},
						filter:function(event,player){
							if(player.isTurnedOver()) return false;
							return event.filterCard({name:'jiu',isCard:true},player,event);
						},
						content:function(){
							if(_status.event.getParent(2).type=='dying'){
								event.dying=player;
								event.type='dying';
							}
							player.turnOver();
							player.useCard({name:'jiu',isCard:true},player);
						},
						ai:{
							order:5,
							result:{
								player:function(player){
									if(_status.event.parent.name=='phaseUse'){
										if(player.countCards('h','jiu')>0) return 0;
										if(player.getEquip('zhuge')&&player.countCards('h','sha')>1) return 0;
										if(!player.countCards('h','sha')) return 0;
										var targets=[];
										var target;
										var players=game.filterPlayer();
										for(var i=0;i<players.length;i++){
											if(get.attitude(player,players[i])<0){
												if(player.canUse('sha',players[i],true,true)){
													targets.push(players[i]);
												}
											}
										}
										if(targets.length){
											target=targets[0];
										}
										else{
											return 0;
										}
										var num=get.effect(target,{name:'sha'},player,player);
										for(var i=1;i<targets.length;i++){
											var num2=get.effect(targets[i],{name:'sha'},player,player);
											if(num2>num){
												target=targets[i];
												num=num2;
											}
										}
										if(num<=0) return 0;
										var e2=target.getEquip(2);
										if(e2){
											if(e2.name=='tengjia'){
												if(!player.countCards('h',{name:'sha',nature:'fire'})&&!player.getEquip('zhuque')) return 0;
											}
											if(e2.name=='renwang'){
												if(!player.countCards('h',{name:'sha',color:'red'})) return 0;
											}
											if(e2.name=='baiyin') return 0;
										}
										if(player.getEquip('guanshi')&&player.countCards('he')>2) return 1;
										return target.countCards('h')>3?0:1;
									}
									if(player==_status.event.dying||player.isTurnedOver()) return 3;
								}
							},
							effect:{
								target:function(card,player,target){
									if(card.name=='guiyoujie') return [0,0.5];
									if(target.isTurnedOver()){
										if(get.tag(card,'damage')){
											if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
											if(target.hp==1) return;
											return [1,target.countCards('h')/2];
										}
									}
								}
							}
						},
					},
					record:{
						trigger:{player:'damageBegin3'},
						silent:true,
						firstDo:true,
						filter:function(event,player){
							return player.isTurnedOver();
						},
						content:function(){
							trigger.dcjiushi=true;
						}
					},
					damage:{
						audio:'dcjiushi',
						trigger:{player:'damageEnd'},
						check:function(event,player){
							return player.isTurnedOver();
						},
						prompt:'是否发动【酒诗】，将武将牌翻面？',
						filter:function(event,player){
							if(event.dcjiushi){
								return true;
							}
							return false;
						},
						content:function(){
							delete trigger.dcjiushi;
							player.turnOver();
						}
					},
					sha:{
						charlotte:true,
						onremove:true,
						mod:{
							cardUsable:function(card,player,num){
								if(card.name=='sha') return num+player.countMark('dcjiushi_sha');
							},
						},
					},
				}
			},
			//OL界黄忠
			remoshi:{
				audio:2,
				trigger:{source:'damageSource'},
				forced:true,
				filter:function(event,player){
					return event.player.isIn()&&event.card&&event.card.name=='sha'&&event.cards.filterInD('od').length&&
						event.notLink()&&[2,3,4].some(i=>event.player.getEquips(i).length>0);
				},
				group:'remoshi_retrieve',
				content:function(){
					trigger.player.addSkill('remoshi_stuck')
					trigger.player.addToExpansion(trigger.cards.filterInD('od'),'gain2').gaintag.add('remoshi_stuck');
				},
				subSkill:{
					retrieve:{
						audio:'remoshi',
						trigger:{
							global:['loseAfter','equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
						},
						filter:function(event,player){
							var keys=['equip2','equip3','equip4'];
							return game.hasPlayer(current=>{
								if(event.name=='gain'&&current==player) return false;
								var cards=current.getExpansions('remoshi_stuck');
								if(!cards.length) return false;
								var evt=event.getl(current);
								if(evt&&evt.cards2&&evt.cards2.some(i=>get.subtypes(i).some(slot=>keys.includes(slot)))) return true;
							});
						},
						direct:true,
						forced:true,
						content:function(){
							'step 0'
							var keys=['equip2','equip3','equip4'];
							var targets=game.filterPlayer(current=>{
								var cards=current.getExpansions('remoshi_stuck');
								if(!cards.length) return false;
								var evt=trigger.getl(current);
								if(evt&&evt.cards2&&evt.cards2.some(i=>get.subtypes(i).some(slot=>keys.includes(slot)))) return true;
							});
							event.targets=targets;
							'step 1'
							var target=targets.shift();
							var cards=target.getExpansions('remoshi_stuck');
							if(cards.length){
								player.logSkill('remoshi_retrieve',target);
								player.gain(cards,target,'give','bySelf');
								game.delayx();
							}
							if(targets.length) event.redo();
						},
					},
					stuck:{
						marktext:'矢',
						charlotte:true,
						intro:{
							name:'没矢',
							name2:'矢',
							content:'expansion',
							markcount:'expansion',
						},
						onremove:function(player,skill){
							var cards=player.getExpansions(skill);
							if(cards.length) player.loseToDiscardpile(cards);
						},
					}
				}
			},
			//界文聘
			rezhenwei:{
				audio:'zhenwei',
				inherit:'zhenwei',
				filter:function(event,player){
					if(player==event.target) return false;
					if(!player.countCards('he')) return false;
					if(event.targets.length>1) return false;
					if(!event.target) return false;
					if(event.target.hp>player.hp) return false;
					var card=event.card;
					if(card.name=='sha') return true;
					if(get.color(card)=='black'&&get.type(card,'trick')=='trick') return true;
					return false;
				},
			},
			//界关张……
			retongxin:{
				mod:{
					attackRange:(player,num)=>num+2
				}
			},
			//马忠
			refuman:{
				audio:2,
				enable:'phaseUse',
				filterTarget:function(card,player,target){
					if(target==player) return false;
					var stat=player.getStat('skill').refuman_targets;
					return !stat||!stat.includes(target);
				},
				filter:function(event,player){
					return player.countCards('h')>0&&game.hasPlayer((current)=>lib.skill.refuman.filterTarget(null,player,current));
				},
				filterCard:true,
				content:function(){
					var card=get.discardPile(card=>card.name=='sha');
					if(card){
						target.gain(card,'gain2').gaintag.add('refuman');
						target.addTempSkill('refuman2',{player:'phaseAfter'});
						player.addSkill('refuman_draw');
					}
					var stat=player.getStat('skill');
					if(!stat.refuman_targets) stat.refuman_targets=[];
					stat.refuman_targets.push(target);
				},
				check:function(card){
					return get.discardPile(card=>card.name=='sha')?6-get.value(card):0;
				},
				ai:{
					order:2,
					result:{
						target:function(player,target){
							if(!target.hasSha()) return 1.2;
							return 1;
						}
					}
				},
				subSkill:{
					draw:{
						trigger:{global:['useCard','respond']},
						forced:true,
						charlotte:true,
						filter:function(event,player){
							return event.player.hasHistory('lose',function(evt){
								if(evt.getParent()!=event) return false;
								for(var i in evt.gaintag_map){
									if(evt.gaintag_map[i].includes('refuman')) return true;
								}
								return false;
							});
						},
						logTarget:'player',
						content:function(){
							game.asyncDraw([trigger.player,player]);
						},
					},
				},
			},
			refuman2:{
				onremove:function(player){
					player.removeGaintag('refuman');
				},
				mod:{
					aiOrder:function(player,card,num){
						if(get.itemtype(card)=='card'&&card.hasGaintag('refuman')) return num+1;
					}
				},
			},
			//十周年陈群
			repindi:{
				audio:2,
				enable:'phaseUse',
				filterTarget:function(card,player,target){
					return !player.getStorage('repindi_target').includes(target);
				},
				filterCard:function(card,player){
					return !player.getStorage('repindi_type').includes(get.type2(card));
				},
				check:function(card){
					var num=_status.event.player.getStat('skill').repindi||0;
					return 6+num-get.value(card);
				},
				position:'he',
				content:function(){
					'step 0'
					player.addTempSkill('repindi_clear',['phaseUseAfter','phaseAfter']);
					player.markAuto('repindi_target',[target]);
					player.markAuto('repindi_type',[get.type2(cards[0],cards[0].original=='h'?player:false)]);
					event.num=player.getStat('skill').repindi;
					player.syncStorage();
					if(target.countCards('he')==0) event._result={index:0};
					else{
						player.chooseControlList([
							'令'+get.translation(target)+'摸'+get.cnNumber(event.num)+'张牌',
							'令'+get.translation(target)+'弃置'+get.cnNumber(event.num)+'张牌'
						],function(){
							return _status.event.choice;
						}).set('choice',get.attitude(player,target)>0?0:1);
					}
					'step 1'
					if(result.index==0){
						target.draw(event.num);
					}
					else{
						target.chooseToDiscard(event.num,'he',true);
					}
					'step 2'
					if(target.isDamaged()){
						player.link();
					}
				},
				subSkill:{
					clear:{
						trigger:{player:'phaseAfter'},
						charlotte:true,
						silent:true,
						onremove:function(player){
							delete player.storage.repindi_target;
							delete player.storage.repindi_type;
						}
					}
				},
				ai:{
					order:8,
					threaten:1.9,
					result:{
						target:function(player,target){
							var att=get.attitude(player,target);
							var num=(player.getStat('skill').repindi||0)+1;
							if(att<=0&&target.countCards('he')<num) return 0;
							return get.sgn(att);
						}
					}
				}
			},
			//十周年孙登
			rekuangbi:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('rekuangbi'),(card,player,target) => {
						return target.countCards('he')>0&&target!=player;
					}).set('ai',target=>{
						var player=_status.event.player;
						if(_status.event.goon) return get.attitude(player,target)*Math.sqrt(target.countCards('he'));
						return -get.attitude(player,target)/(target.countCards('he')+1)*10;
					}).set('goon',player.countCards('hs',card=>player.hasValueTarget(card))>=2);
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('rekuangbi',target);
						target.chooseCard('匡弼：将至多三张牌置于'+get.translation(player)+'的武将牌上','he',[1,3],true).set('ai',card=>{
							if(get.attitude(_status.event.player,_status.event.getParent().player)>0){
								return 7-get.value(card);
							}
							return -get.value(card);
						});
					}else event.finish();
					'step 2'
					if(result.bool){
						player.addToExpansion(result.cards,target,'give').gaintag.add('rekuangbi_effect');
						player.addTempSkill('rekuangbi_effect','phaseUseEnd');
						player.markAuto('rekuangbi_effect',[target]);
					}
				},
				subSkill:{
					effect:{
						trigger:{player:'useCard'},
						charlotte:true,
						forced:true,
						filter:function(event,player){
							return player.getExpansions('rekuangbi_effect').length>0;
						},
						content:function(){
							'step 0'
							var cards=player.getExpansions('rekuangbi_effect');
							var suit=get.suit(trigger.card),cardsx=cards.filter(card=>get.suit(card)==suit);
							var len=cardsx.length;
							if(len>1){
								player.chooseButton(['匡弼：移去一张同花色的“匡弼”牌',cards],true).set('filterButton',button=>{
									return get.suit(button.link)==_status.event.suit;
								}).set('suit',suit);
							}
							else if(len==1){
								event._result={bool:true,links:cardsx};
							}
							else{
								event._result={bool:false,links:[cards.randomGet()]};
							}
							'step 1'
							if(result.links&&result.links.length){
								player.loseToDiscardpile(result.links);
								game.delayx();
							}
							if(result.bool){
								player.draw('nodelay');
								var target=player.getStorage('rekuangbi_effect')[0];
								if(target&&target.isIn()) target.draw();
							}
							else{
								player.draw();
							}
						},
						intro:{
							content:'expansion',
							markcount:'expansion',
						},
						onremove:function(player,skill){
							var cards=player.getExpansions(skill);
							if(cards.length) player.loseToDiscardpile(cards);
							delete player.storage[skill];
						},
					}
				}
			},
			//十周年蔡邕
			rebizhuan:{
				audio:2,
				trigger:{
					player:'useCard',
					target:'useCardToTargeted',
				},
				filter:function(event,player){
					if(event.name!='useCard'&&event.player==event.target) return false;
					var num=4+Math.min(player.countMark('retongbo'),game.countPlayer());
					if(player.getExpansions('rebizhuan').length>=num) return false;
					return get.suit(event.card)=='spade';
				},
				marktext:'书',
				intro:{
					name:'辟撰(书)',
					name2:'书',
					content:'expansion',
					markcount:'expansion',
				},
				frequent:true,
				locked:false,
				content:function(){
					player.addToExpansion(get.cards(),'gain2').gaintag.add('rebizhuan');
				},
				mod:{
					maxHandcard:function(player,num){
						return num+player.getExpansions('rebizhuan').length;
					}
				}
			},
			retongbo:{
				audio:2,
				trigger:{player:'phaseDrawAfter'},
				direct:true,
				filter:function(event,player){
					return player.getExpansions('rebizhuan').length>0&&player.countCards('he')>0;
				},
				content:function(){
					'step 0'
					var next=player.chooseToMove('通博：是否交换“书”和手牌？');
					next.set('list',[
						[get.translation(player)+'（你）的“书”',player.getExpansions('rebizhuan')],
						['你的牌',player.getCards('he')],
					]);
					next.set('filterMove',function(from,to){
						return typeof to!='number';
					});
					next.set('processAI',function(list){
						var player=_status.event.player,cards=list[0][1].concat(list[1][1]),cards2=[];
						cards.sort((a,b)=>{
							return get.useful(a)-get.useful(b);
						});
						cards2=cards.splice(0,player.getExpansions('rebizhuan').length);
						return [cards2,cards];
					});
					'step 1'
					if(result.bool){
						var pushs=result.moved[0],gains=result.moved[1];
						pushs.removeArray(player.getExpansions('rebizhuan'));
						gains.removeArray(player.getCards('he'));
						if(!pushs.length||pushs.length!=gains.length){
							event.finish();
							return;
						}
						player.logSkill('retongbo');
						player.addToExpansion(pushs,'give',player).gaintag.add('rebizhuan');
						player.gain(gains,'gain2');
					}
					'step 2'
					event.cards=player.getExpansions('rebizhuan').slice(0);
					if(event.cards.length<4) event.finish();
					else {
						event.given=[];
						var list=[];
						event.cards.forEach(i=>list.add(get.suit(i)));
						if(list.length>=4&&player.hp<=2) event.four=true;
					}
					'step 3'
					if(event.given.length<4){
						player.chooseCardButton('是否将'+get.cnNumber(4-event.given.length)+'张“书”交给任意名其他角色？',event.cards,[1,4-event.given.length],event.given.length>0).set('ai',function(button){
							if(!_status.event.goon) return 0;
							var four=_status.event.getParent().four,given=_status.event.getParent().given;
							if(four) return get.value(button.link)+(given.map(i=>get.suit(i)).includes(get.suit(button.link))?0:10);
							if(ui.selected.buttons.length==0) return get.value(button.link);
							return 0;
						}).set('goon',game.hasPlayer(current=>current!=player&&get.attitude(player,current)>0));
					}
					else{
						event.goto(6);
					}
					'step 4'
					if(result.bool){
						for(var i=0;i<result.links.length;i++){
							event.cards.remove(result.links[i]);
						}
						event.togive=result.links.slice(0);
						event.given.addArray(event.togive);
						player.chooseTarget('将'+get.translation(result.links)+'交给一名其他角色',true,function(card,player,target){
							return target!=player;
						}).set('ai',function(target){
							var att=get.attitude(_status.event.player,target);
							if(_status.event.enemy){
								return -att;
							}
							else if(att>0){
								return att/(1+target.countCards('h'));
							}
							else{
								return att/100;
							}
						}).set('enemy',get.value(event.togive[0],player,'raw')<0);
					}
					else{
						event.finish();
					}
					'step 5'
					if(result.targets.length){
						result.targets[0].gain(event.togive,'draw').giver=player;
						player.line(result.targets[0],'green');
						game.log(result.targets[0],'获得了'+get.cnNumber(event.togive.length)+'张','#g“书”');
						if(event.given.length<4) event.goto(3);
					}
					'step 6'
					if(event.given.length==4){
						var suits=lib.suit.slice(0);
						event.given.forEach(i=>suits.remove(get.suit(i,player)));
						if(suits.length==0){
							player.recover();
							player.addMark('retongbo',1,false);
						}
					}
				},
				marktext:'博',
				intro:{
					content:function(storage,player){
						var num=4+Math.min(storage,game.countPlayer());
						return '“书”的上限+'+num;
					}
				},
				ai:{
					combo:'rebizhuan',
				}
			},
			//十周年陈宫
			remingce:{
				enable:'phaseUse',
				usable:1,
				audio:2,
				position:'he',
				filterCard:function(card){
					return get.name(card)=='sha'||get.type(card)=='equip';
				},
				filter:function(event,player){
					return player.countCards('h','sha')>0||player.countCards('he',{type:'equip'})>0;
				},
				check:function(card){return 8-get.value(card)},
				selectTarget:2,
				multitarget:true,
				discard:false,
				lose:false,
				targetprompt:['得到牌','出杀目标'],
				filterTarget:function(card,player,target){
					if(ui.selected.targets.length==0){
						return player!=target;
					}
					return true;
				},
				delay:false,
				content:function(){
					'step 0'
					player.give(cards,targets[0],'visible');
					'step 1'
					if(!targets[0].canUse({name:'sha',isCard:true},targets[1],false,false)) event._result={control:'选项二'};
					else targets[0].chooseControl().set('ai',function(){
						var player=_status.event.player,target=_status.event.target;
						return get.effect(target,{name:'sha',isCard:true},player,player)>0?0:1;
					}).set('choiceList',['视为对'+get.translation(targets[1])+'使用一张【杀】，若此杀造成伤害则执行选项二','你与'+get.translation(player)+'各摸一张牌']).set('target',targets[1]).set('prompt','对'+get.translation(targets[1])+'使用一张杀，或摸一张牌');
					'step 2'
					if(result.control=='选项二'){
						game.asyncDraw([player,targets[0]]);
						event.finish();
					}
					else{
						targets[0].useCard({name:'sha',isCard:true},targets[1]);
					}
					'step 3'
					if(targets[0].hasHistory('useCard',evt=>{
						return evt.getParent()==event&&targets[0].hasHistory('sourceDamage',evtx=>evt.card==evtx.card);
					})){
						game.asyncDraw([player,targets[0]]);
					}
				},
				ai:{
					result:{
						player:function(player){
							var players=game.filterPlayer();
							for(var i=0;i<players.length;i++){
								if(players[i]!=player&&get.attitude(player,players[i])>1&&get.attitude(players[i],player)>1){
									return 1;
								}
							}
							return 0;
						},
						target:function(player,target){
							if(ui.selected.targets.length){
								return -0.1;
							}
							return 1;
						}
					},
					order:8.5,
					expose:0.2
				}
			},
			// 界荀攸
			reqice:{
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					const hs=player.getCards('h');
					if(!hs.length) return false;
					if((player.getStat('skill').reqice||0)>=player.countMark('reqice_mark')+1) return false;
					if(hs.some(card=>{
						const mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
						return (mod2===false)
					})) return false;
					return lib.inpile.some(name=>{
						if(get.type(name)!='trick') return false;
						const card=get.autoViewAs({name},hs);
						return event.filterCard(card,player,event);
					});
				},
				chooseButton:{
					dialog:function(event,player){
						var list=[];
						for(var i=0; i<lib.inpile.length; i++){
							if(get.type(lib.inpile[i])=='trick') list.push(['锦囊','',lib.inpile[i]]);
						}
						return ui.create.dialog(get.translation('reqice'),[list,'vcard']);
					},
					filter:function(button,player){
						const event=_status.event.getParent(),card=get.autoViewAs({
							name:button.link[2],
						},player.getCards('h'));
						return event.filterCard(card,player,event);
					},
					check:function(button){
						var player=_status.event.player;
						var effect=player.getUseValue(button.link[2]);
						if(player.countCards('hs',button.link[2])>0) return 0;
						if((player.getStat('skill').reqice||0)<player.countMark('reqice_mark')+1){
							if(['draw','gain'].some(i=>get.tag(button.link[2],i) >= 1)) return effect*5;
						}
						if(effect>0) return effect;
						return 0;
					},
					backup:function(links,player){
						return {
							filterCard:true,
							selectCard:-1,
							position:'h',
							audio:'reqice',
							popname:true,
							viewAs:{name:links[0][2]},
						}
					},
					prompt:function(links,player){
						return '将所有手牌当【'+get.translation(links[0][2])+'】使用';
					}
				},
				ai:{
					order:1,
					result:{
						player:function(player){
							var num=0;
							var cards=player.getCards('h');
							if(cards.length >= 3&&player.hp >= 3&&player.countMark('reqice_mark')<2) return 0;
							for(var i=0; i<cards.length; i++){
								num+=Math.max(0,get.value(cards[i],player,'raw'));
							}
							num/=cards.length;
							num/=(player.countMark('reqice_mark')+1)*1.3;
							num*=Math.min(cards.length,player.hp);
							return 13-num;
						}
					},
					nokeep:true,
					skillTagFilter:function(player,tag,arg){
						if(tag==='nokeep') return (!arg||arg.card&&get.name(arg.card)==='tao')&&player.isPhaseUsing()&&!player.getStat('skill').reqice&&player.hasCard((card)=>get.name(card)!='tao','h');
					},
					threaten:1.7,
				},
				subSkill:{
					bakcup:{},
					mark:{
						charlotte:true,
						onremove:true,
						intro:{
							name2:'奇策',
							content:'mark',
						},
					},
				}
			},
			rezhiyu:{
				audio:2,
				trigger:{player:'damageEnd'},
				content:function(){
					'step 0'
					player.draw();
					'step 1'
					if(!player.countCards('h')) event.finish();
					else player.showHandcards();
					'step 2'
					if(!trigger.source||!trigger.source.isIn()) event._result={bool:false,cards:[]};
					else trigger.source.chooseToDiscard('智愚：请弃置一张手牌',true);
					'step 3'
					var cards=player.getCards('h');
					var color=get.color(cards[0],player);
					var bool=true;
					for(var i=1; i<cards.length; i++){
						if(get.color(cards[i],player)!=color){
							bool=false;
							break;
						}
					}
					if(bool){
						var cards=result.cards.filterInD('d');
						if(cards.length){
							player.gain(cards,'gain2');
						}
						player.addMark('reqice_mark',1);
						player.addTempSkill('reqice_mark',{player:'phaseAfter'});
					}
				},
				ai:{
					maixie_defend:true,
					threaten:0.85
				}
			},
			oljiang:{
				audio:'jiang',
				inherit:'jiang',
				group:'oljiang_gain',
				subSkill:{
					gain:{
						audio:'jiang',
						audioname:['sp_lvmeng','re_sunben','re_sunce'],
						trigger:{global:['loseAfter','loseAsyncAfter']},
						usable:1,
						filter:function(event,player){
							if(player.hp<1||event.type!='discard'||event.position!=ui.discardPile) return false;
							var filter=(card)=>(card.name=='juedou'||(card.name=='sha'&&get.color(card,false)=='red'));
							var cards=event.getd().filter(filter);
							if(!cards.filter((card)=>(get.position(card,true)=='d')).length) return false;
							var searched=false;
							if(game.getGlobalHistory('cardMove',function(evt){
								if(searched||evt.type!='discard'||evt.position!=ui.discardPile) return false;
								var evtx=evt;
								if(evtx.getlx===false) evtx=evt.getParent();
								var cards=evtx.getd().filter(filter);
								if(!cards.length) return false;
								searched=true;
								return evtx!=event;
							}).length>0) return false;
							return true;
						},
						prompt2:function(event,player){
							var cards=event.getd().filter(function(card){
								return (card.name=='juedou'||(card.name=='sha'&&get.color(card,false)=='red'))&&get.position(card,true)=='d';
							});
							return '失去1点体力并获得'+get.translation(cards);
						},
						check:function(event,player){
							return player.hp>1&&!player.storage.olhunzi;
						},
						content:function(){
							player.loseHp();
							var cards=trigger.getd().filter(function(card){
								return (card.name=='juedou'||(card.name=='sha'&&get.color(card,false)=='red'))&&get.position(card,true)=='d';
							});
							if(cards.length>0) player.gain(cards,'gain2');
						},
					},
				},
			},
			//李儒
			dcmieji:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.hasCard(lib.skill.dcmieji.filterCard,'eh');
				},
				position:'he',
				filterCard:function(card){
					if(get.subtype(card)=='equip1') return true;
					return get.color(card)=='black'&&get.type(card,'trick')=='trick';
				},
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('h')>0;
				},
				discard:false,
				delay:false,
				check:function(card){
					return 8-get.value(card);
				},
				loseTo:'cardPile',
				insert:true,
				visible:true,
				content:function(){
					'step 0'
					player.showCards(cards);
					'step 1'
					target.chooseToDiscard('he',true).set('prompt','请弃置一张锦囊牌，或依次弃置两张非锦囊牌。');
					'step 2'
					if((!result.cards||get.type(result.cards[0],'trick',result.cards[0].original=='h'?target:false)!='trick')&&target.countCards('he',function(card){
						return get.type(card,'trick')!='trick';
					})){
						target.chooseToDiscard('he',true,function(card){
							return get.type(card,'trick')!='trick';
						}).set('prompt','请弃置第二张非锦囊牌');
					}
				},
				ai:{
					order:9,
					result:{
						target:-1
					}
				}
			},
			dcfencheng:{
				skillAnimation:'epic',
				animationColor:'fire',
				audio:2,
				enable:'phaseUse',
				filterTarget:function(card,player,target){
					return player!=target;
				},
				limited:true,
				line:'fire',
				content:function(){
					"step 0"
					player.awakenSkill('dcfencheng');
					event.num=1;
					event.targets=game.filterPlayer((current)=>current!=player);
					event.targets.sortBySeat(target);
					"step 1"
					if(event.targets.length){
						var target=event.targets.shift();
						if(!target.isIn()){
							event.redo();
							return;
						}
						event.target=target;
						player.line(target,'fire');
						var res=get.damageEffect(target,player,target,'fire');
						target.chooseToDiscard('he','弃置至少'+get.cnNumber(event.num)+'张牌或受到2点火焰伤害',[num,Infinity]).set('ai',function(card){
							if(ui.selected.cards.length>=_status.event.getParent().num) return -1;
							if(_status.event.player.hasSkillTag('nofire')) return -1;
							if(_status.event.res>=0) return 6-get.value(card);
							if(get.type(card)!='basic'){
								return 10-get.value(card);
							}
							return 8-get.value(card);
						}).set('res',res);
					}
					else{
						event.finish();
					}
					"step 2"
					if(!result.bool){
						event.target.damage(2,'fire');
						event.num=1;
					}
					else{
						event.num=result.cards.length+1;
						event.goto(1);
					}
					"step 3"
					game.delayx();
					event.goto(1);
				},
				ai:{
					order:1,
					result:{
						player:function(player,target){
							if(player.hasUnknown(2)) return 0;
							var num=0,eff=0,players=game.filterPlayer(function(current){
								return current!=player;
							}).sortBySeat(target);
							for(var target of players){
								if(get.damageEffect(target,player,target,'fire')>=0){num=0;continue}
								var shao=false;
								num++;
								if(target.countCards('he',function(card){
									if(get.type(card)!='basic'){
										return get.value(card)<10;
									}
									return get.value(card)<8;
								})<num) shao=true;
								if(shao){
									eff-=4*(get.realAttitude||get.attitude)(player,target);
									num=0;
								}
								else eff-=num*(get.realAttitude||get.attitude)(player,target)/4;
							}
							if(eff<4) return 0;
							return eff;
						}
					}
				},
			},
			//朱桓
			refenli:{
				audio:2,
				group:['refenli_draw','refenli_use','refenli_discard'],
				subfrequent:['discard'],
				subSkill:{
					draw:{
						audio:'refenli',
						trigger:{player:'phaseJudgeBefore'},
						prompt:'是否发动【奋励】跳过判定和摸牌阶段？',
						filter:function(event,player){
							return player.isMaxHandcard();
						},
						check:function(event,player){
							if(player.hasJudge('lebu')||player.hasJudge('bingliang')) return true;
							if(player.getHistory('skipped').length>0) return false;
							return game.hasPlayer(function(current){
								return get.attitude(player,current)<0&&current.hp==1&&get.damageEffect(current,player,player)>0;
							});
						},
						content:function(){
							trigger.cancel();
							player.skip('phaseDraw');
						}
					},
					use:{
						audio:'refenli',
						trigger:{player:'phaseUseBefore'},
						prompt:'是否发动【奋励】跳过出牌阶段？',
						filter:function(event,player){
							return player.isMaxHp();
						},
						check:function(event,player){
							if(!player.needsToDiscard()||(player.countCards('e')&&player.isMaxEquip())) return true;
							if(player.getHistory('skipped').length>0) return false;
							return game.hasPlayer(function(current){
								return get.attitude(player,current)<0&&current.hp==1&&get.damageEffect(current,player,player)>0;
							});
						},
						content:function(){
							trigger.cancel();
						}
					},
					discard:{
						audio:'refenli',
						trigger:{player:'phaseDiscardBefore'},
						prompt:'是否发动【奋励】跳过弃牌阶段？',
						frequent:true,
						filter:function(event,player){
							return player.isMaxEquip()&&player.countCards('e');
						},
						content:function(){
							trigger.cancel();
						}
					}
				},
				ai:{
					combo:'repingkou'
				}
			},
			repingkou:{
				audio:2,
				trigger:{player:'phaseEnd'},
				direct:true,
				filter:function(event,player){
					return player.getHistory('skipped').length>0;
				},
				content:function(){
					'step 0'
					player.chooseTarget([1,player.getHistory('skipped').length],get.prompt2('repingkou'),'对至多'+get.cnNumber(num)+'名其他角色各造成1点伤害。若你选择的角色数小于最大角色数，则你可以弃置其中一名目标角色装备区内的一张牌',function(card,player,target){
						return target!=player;
					}).set('ai',function(target){
						var player=_status.event.player;
						return get.damageEffect(target,player,player);
					});
					'step 1'
					if(result.bool){
						player.logSkill('repingkou',result.targets);
						event.targets=result.targets.slice(0).sortBySeat();
						event.num=0;
					}
					else{
						event.finish();
					}
					'step 2'
					var target=targets[event.num];
					if(target.isIn()) target.damage();
					event.num++;
					if(event.num<targets.length) event.redo();
					else if(event.num==player.getHistory('skipped').length) event.finish();
					'step 3'
					var targets2=targets.filter(function(target){
						return target.countDiscardableCards(player,'e')>0;
					});
					if(targets2.length>0){
						player.chooseTarget('是否弃置一名目标角色的一张装备牌？',function(card,player,target){
							return _status.event.targets.includes(target);
						}).set('targets',targets2).set('ai',function(target){
							var att=get.attitude(player,target),eff=0;
							target.getCards('e',function(card){
								var val=get.value(card,target);
								eff=Math.max(eff,-val*att);
							});
							return eff;
						});
					}
					else event.finish();
					'step 4'
					if(result.bool){
						var target=result.targets[0];
						player.line(target,'green');
						player.discardPlayerCard(target,'e',true);
					}
				},
				ai:{
					combo:'fenli',
					effect:{
						target:function(card){
							if(card.name=='lebu'||card.name=='bingliang') return 0.5;
						}
					}
				}
			},
			//典韦
			olqiangxi:{
				audio:'qiangxi',
				audioname:['ol_dianwei','boss_lvbu3'],
				enable:'phaseUse',
				usable:2,
				filter:function(event,player){
					if(player.hp<1&&!player.hasCard((card)=>lib.skill.olqiangxi.filterCard(card),'he')) return false;
					return game.hasPlayer((current)=>lib.skill.olqiangxi.filterTarget(null,player,current));
				},
				filterCard:function(card){
					return get.subtype(card)=='equip1';
				},
				position:'he',
				filterTarget:function(card,player,target){
					if(target==player) return false;
					var stat=player.getStat()._olqiangxi;
					return !stat||!stat.includes(target);
				},
				selectCard:function(){
					if(_status.event.player.hp<1) return 1;
					return [0,1];
				},
				content:function(){
					var stat=player.getStat();
					if(!stat._olqiangxi) stat._olqiangxi=[];
					stat._olqiangxi.push(target);
					if(!cards.length) player.damage('nosource','nocard');
					target.damage('nocard');
				},
				ai:{
					damage:true,
					order:8,
					result:{
						player:function(player,target){
							if(ui.selected.cards.length) return 0;
							if(player.hp>=target.hp) return -0.9;
							if(player.hp<=2) return -10;
							return get.damageEffect(player,player,player);
						},
						target:function(player,target){
							if(!ui.selected.cards.length){
								if(player.hp<2) return 0;
								if(player.hp==2&&target.hp>=2) return 0;
								if(target.hp>player.hp) return 0;
							}
							return get.damageEffect(target,player,target);
						}
					},
					threaten:1.5,
				},
			},
			olningwu:{
				audio:2,
				trigger:{global:'damageEnd'},
				filter:function(event,player){
					if(player!=event.player&&player!=event.source) return false;
					return event.player.getHistory('damage').indexOf(event)==1;
				},
				logTarget:'player',
				forced:true,
				content:function(){
					player.draw();
					player.discardPlayerCard(trigger.player,true,'ej');
				},
			},
			//群太史慈
			rejixu:{
				audio:2,
				enable:"phaseUse",
				usable:1,
				filter:function(event,player){
					return player.hp>0&&player.countCards('h')>0;
				},
				filterTarget:lib.filter.notMe,
				selectTarget:function(){
					return [1,_status.event.player.hp];
				},
				multitarget:true,
				multiline:true,
				content:function(){
					"step 0"
					targets.sortBySeat();
					event.num=0;
					"step 1"
					if(!event.caicuolist) event.caicuolist=[];
					targets[event.num].chooseBool("是否押杀？").ai=function(event,player){
						var evt=_status.event.getParent();
						if(get.attitude(targets[event.num],evt.player)>0) return evt.player.countCards('h','sha')?false:true;
						if(evt.player.hasKnownCards(targets[event.num],c=>{return c.name == 'sha';})){
							return true;
						}
						return Math.random()<0.5;
					};
					"step 2"
					if(result.bool){
						targets[event.num].chat('有杀');
						game.log(targets[event.num],'认为',player,'#g有杀');
						if(!player.countCards('h','sha')) event.caicuolist.add(targets[event.num]);
					}else{
						targets[event.num].chat('没杀');
						game.log(targets[event.num],'认为',player,'#y没有杀');
						if(player.countCards('h','sha')) event.caicuolist.add(targets[event.num]);
					}
					event.num++;
					game.delay();
					if(event.num<targets.length) event.goto(1);
					"step 3"
					player.popup(player.countCards('h','sha')?"有杀":"没杀");
					game.log(player,player.countCards('h','sha')?"有杀":"没杀");
					if(event.caicuolist.length>0){
						if(player.countCards('h','sha')){
							player.markAuto('rejixu_sha',event.caicuolist);
							player.addTempSkill('rejixu_sha','phaseUseAfter');
							player.draw(event.caicuolist.length)
							event.finish();
						}
						else{
							event.num=0;
						}
					}
					else event.finish();
					"step 4"
					var target=event.caicuolist[event.num];
					if(target.countCards('he')>0){
						player.line(target);
						player.discardPlayerCard(true,'he',target);
					}
					event.num++;
					if(event.num<event.caicuolist.length) event.redo();
					else player.draw(event.caicuolist.length);
				},
				ai:{
					order:function(){
						return get.order({name:'sha'})+0.6;
					},
					result:{
						target:function(player,target){
							if(player.countCards('h','sha')){
								return get.effect(target,{name:'sha'},player,target);
							}
							else{
								return get.effect(target,{name:'guohe_copy2'},player,target);
							}
						},
					},
					expose:0.4,
				},
				subSkill:{
					sha:{
						audio:'rejixu',
						mod:{
							cardUsable:function(card,player,num){
								if(card.name=='sha') return num+player.getStorage('rejixu_sha').length;
							},
						},
						charlotte:true,
						onremove:true,
						trigger:{player:'useCard2'},
						filter:function(event,player){
							if(event.card.name!='sha') return false;
							for(var target of player.getStorage('rejixu_sha')){
								if(event.targets.includes(target)||!target.isIn()) return false;
								if(lib.filter.targetEnabled2(event.card,player,target)) return true;
							}
							return false;
						},
						prompt:'是否发动【击虚】？',
						prompt2:function(event,player){
							var list=player.getStorage('rejixu_sha').filter(function(target){
								if(event.targets.includes(target)||!target.isIn()) return false;
								return lib.filter.targetEnabled2(event.card,player,target)
							});
							return '令'+get.translation(list)+'也成为'+get.translation(event.card)+'的目标';
						},
						logTarget:function(event,player){
							return player.getStorage('rejixu_sha').filter(function(target){
								if(event.targets.includes(target)||!target.isIn()) return false;
								return lib.filter.targetEnabled2(event.card,player,target)
							});
						},
						check:function(event,player){
							var eff=0;
							var list=player.getStorage('rejixu_sha').filter(function(target){
								if(event.targets.includes(target)||!target.isIn()) return false;
								return lib.filter.targetEnabled2(event.card,player,target)
							});
							for(var i of list) eff+=get.effect(i,event.card,player,player);
							return eff>0;
						},
						content:function(){
							var list=player.getStorage('rejixu_sha').filter(function(target){
								if(trigger.targets.includes(target)||!target.isIn()) return false;
								return lib.filter.targetEnabled2(trigger.card,player,target)
							});
							if(list.length>0){
								trigger.targets.addArray(list);
								game.log(list,'也成为了',trigger.card,'的目标');
							}
						},
					},
				},
			},
			//界刘封
			rexiansi:{
				inherit:'xiansi',
				audio:'xiansi',
				audioname:['re_liufeng'],
				group:['rexiansi2','xiansix'],
			},
			rexiansi2:{
				enable:'chooseToUse',
				filter:function(event,player){
					return player.getExpansions('xiansi').length>Math.max(0,player.hp)&&event.filterCard({name:'sha',isCard:true},player,event);
				},
				chooseButton:{
					dialog:function(event,player){
						return ui.create.dialog('陷嗣',player.getExpansions('xiansi'),'hidden');
					},
					backup:function(links,player){
						return {
							viewAs:{name:'sha',isCard:true},
							filterCard:()=>false,
							selectCard:-1,
							card:links[0],
							precontent:function(){
								player.logSkill('rexiansi');
								player.loseToDiscardpile(lib.skill.rexiansi2_backup.card);
								delete event.result.skill;
							},
						};
					},
					prompt:()=>'请选择【杀】的目标',
				},
				ai:{
					order:function(){
						return get.order({name:'sha'})+0.6;
					},
					result:{player:1},
				},
			},
			//界荀彧
			oljieming:{
				audio:2,
				trigger:{player:['damageEnd','die']},
				direct:true,
				forceDie:true,
				filter:function(event,player){
					if(event.name=='die') return true;
					return player.isIn();
				},
				content:function(){
					'step 0'
					event.count=trigger.num||1;
					'step 1'
					event.count--;
					player.chooseTarget(get.prompt2('oljieming'),function(card,player,target){
						return target.maxHp>0;
					}).set('ai',function(target){
						var att=get.attitude(_status.event.player,target);
						var draw=Math.min(5,target.maxHp)-target.countCards('h');
						if(draw>=0){
							if(target.hasSkillTag('nogain')) att/=6;
							if(att>2){
								return Math.sqrt(draw+1)*att;
							}
							return att/3;
						}
						if(draw<-1){
							if(target.hasSkillTag('nogain')) att*=6;
							if(att<-2){
								return -Math.sqrt(1-draw)*att;
							}
						}
						return 0;
					});
					'step 2'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('oljieming',target);
						target.draw(Math.min(5,target.maxHp));
					}
					else event.finish();
					'step 3'
					var num=target.countCards('h')-Math.min(5,target.maxHp);
					if(num>0) target.chooseToDiscard('h',true,num);
					'step 4'
					if(event.count>0&&player.isIn()&&player.hasSkill('oljieming')) event.goto(1);
				},
				ai:{
					expose:0.2,
					maixie:true,
					maixie_hp:true,
					effect:{
						target:function(card,player,target,current){
							if(get.tag(card,'damage')&&target.hp>1){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
								var max=0;
								var players=game.filterPlayer();
								for(var i=0;i<players.length;i++){
									if(get.attitude(target,players[i])>0){
										max=Math.max(Math.min(5,players[i].hp)-players[i].countCards('h'),max);
									}
								}
								switch(max){
									case 0:return 2;
									case 1:return 1.5;
									case 2:return [1,2];
									default:return [0,max];
								}
							}
							if((card.name=='tao'||card.name=='caoyao')&&
								target.hp>1&&target.countCards('h')<=target.hp) return [0,0];
						}
					},
				}
			},
			//OL华雄
			shizhan:{
				audio:2,
				enable:'phaseUse',
				usable:2,
				filterTarget:function(card,player,target){
					return target!=player&&target.canUse('juedou',player);
				},
				content:function(){
					target.useCard({name:'juedou',isCard:true},player,'noai');
				},
				ai:{
					order:2,
					result:{
						player:function(player,target){
							return get.effect(player,{name:'juedou',isCard:true},target,player);
						},
					},
				},
			},
			//刘谌
			rezhanjue:{
				audio:2,enable:'phaseUse',
				filterCard:function(card){
					return !card.hasGaintag('reqinwang');
				},
				selectCard:-1,
				position:'h',
				filter:function(event,player){
					var stat=player.getStat().skill;
					if(stat.rezhanjue_draw&&stat.rezhanjue_draw>=3) return false;
					var hs=player.getCards('h',function(card){
						return !card.hasGaintag('reqinwang');
					});
					if(!hs.length) return false;
					for(var i=0;i<hs.length;i++){
						var mod2=game.checkMod(hs[i],player,'unchanged','cardEnabled2',player);
					if(mod2===false) return false;
					}
					return event.filterCard(get.autoViewAs({name:'juedou'},hs))
				},
				viewAs:{name:'juedou'},
				onuse:function(links,player){
					player.addTempSkill('rezhanjue_effect','phaseUseEnd');
				},
				ai:{
					order:1,
					tag:{
						respond:2,
						respondSha:2,
						damage:1,
					},
					result:{
						target:-1.5,
						player:function(player,target){
							if(player.hasSkillTag('directHit_ai',true,{
								target:target,
								card:{name:'juedou'},
							},true)){
								return 0;
							}
							if(get.damageEffect(target,player,target)>0&&get.attitude(player,target)>0&&get.attitude(target,player)>0){
								return 0;
							}
							var hs1=target.getCards('h','sha');
							var hs2=player.getCards('h',function(card){
								return card.hasGaintag('reqinwang')&&get.name(card)=='sha';
							});
							if(hs1.length>hs2.length+1){
								return -2;
							}
							var hsx=target.getCards('h');
							if(hsx.length>2&&hs2.length==0&&hsx[0].number<6){
								return -2;
							}
							if(hsx.length>3&&hs2.length==0){
								return -2;
							}
							if(hs1.length>hs2.length&&(!hs2.length||hs1[0].number>hs2[0].number)){
								return -2;
							}
							return -0.5;
						}
					},
					nokeep:true,
					skillTagFilter:function(player,tag,arg){
						if(tag==='nokeep') return (!arg||arg.card&&get.name(arg.card)==='tao')&&player.isPhaseUsing()&&player.countSkill('rezhanjue_draw')<3&&player.hasCard((card)=>{
							return get.name(card)!=='tao'&&!card.hasGaintag('reqinwang');
						},'h');
					}
				},
			},
			rezhanjue_effect:{
				audio:false,
				trigger:{player:'useCardAfter'},
				forced:true,
				popup:false,
				charlotte:true,
				onremove:function(player){
					delete player.getStat().skill.rezhanjue_draw;
				},
				filter:function(event,player){
					return event.skill=='rezhanjue';
				},
				content:function(){
					"step 0"
					var stat=player.getStat().skill;
					if(!stat.rezhanjue_draw) stat.rezhanjue_draw=0;
					stat.rezhanjue_draw++;
					player.draw('nodelay');
					var list=game.filterPlayer(function(current){
						if(current.getHistory('damage',function(evt){
							return evt.card==trigger.card;
						}).length>0){
							if(current==player){
								stat.rezhanjue_draw++;
							}
							return true;
						}
						return false;
					});
					if(list.length){
						list.sortBySeat();
						game.asyncDraw(list);
					}
					"step 1"
					game.delay();
				}
			},
			reqinwang:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				zhuSkill:true,
				filter:function(event,player){
					if(!player.hasZhuSkill('reqinwang')) return false;
					return game.hasPlayer(function(current){
						return current!=player&&current.group=='shu'&&player.hasZhuSkill('reqinwang',current);
					});
				},
				selectTarget:-1,
				filterTarget:function(card,player,current){
					return current!=player&&current.group=='shu'&&player.hasZhuSkill('reqinwang',current);
				},
				content:function(){
					'step 0'
					if(target.hasCard(function(card){
						return _status.connectMode||get.name(card,target)=='sha';
					},'h')){
						target.chooseCard('是否交给'+get.translation(player)+'一张【杀】？',function(card,player){
							return get.name(card,player)=='sha';
						},'h').set('goon',get.attitude(target,player)>0).set('ai',function(card){
							return _status.event.goon?1:0;
						});
					}
					else event.finish();
					'step 1'
					if(result.bool){
						var card=result.cards[0];
						target.give(card,player).gaintag.add('reqinwang');
						player.addTempSkill('reqinwang_clear');
						player.chooseBool('是否令'+get.translation(target)+'摸一张牌？');
					}
					else event.finish();
					'step 2'
					if(result.bool) target.draw();
				},
				ai:{
					order:5,
					result:{player:1},
				},
				subSkill:{
					clear:{
						charlotte:true,
						onremove:function(player){
							player.removeGaintag('reqinwang');
						},
					},
				},
			},
			//公孙瓒
			dcqiaomeng:{
				audio:2,
				trigger:{player:'useCardToPlayered'},
				direct:true,
				filter:function(event,player){
					if(!event.isFirstTarget||get.color(event.card)!='black') return false;
					for(var i of event.targets){
						if(i!=player&&i.hasCard(function(card){
							return lib.filter.canBeDiscarded(card,player,i);
						},'he')) return true;
					}
					return false;
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('dcqiaomeng'),'选择一名不为自己的目标角色，然后弃置其一张牌。若以此法弃置的牌为：装备牌，你获得此牌；锦囊牌，你令'+get.translation(trigger.card)+'不可被响应。',function(card,player,target){
						return target!=player&&_status.event.getTrigger().targets.includes(target)&&target.hasCard(function(card){
							return lib.filter.canBeDiscarded(card,player,target);
						},'he');
					}).set('ai',function(target){
						var player=_status.event.player;
						return get.effect(target,{name:'guohe_copy2'},player,player)
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('dcqiaomeng',target);
						player.discardPlayerCard(target,true,'he');
					}
					else event.finish();
					'step 2'
					if(result.bool&&result.cards&&result.cards.length){
						//为了体现白马义从野性纯真的美 直接获取卡牌原类型 不考虑维系区域
						var card=result.cards[0],type=get.type2(card,false);
						if(type=='trick') trigger.directHit.addArray(game.filterPlayer((current)=>current!=player));
						if(type=='equip'&&get.position(card,true)=='d') player.gain(card,'gain2');
					}
				},
			},
			//杜畿
			reandong:{
				audio:2,
				trigger:{player:'damageBegin2'},
				filter:function(event,player){
					return event.source&&event.source.isIn();
				},
				logTarget:'source',
				content:function(){
					'step 0'
					var target=trigger.source,str=get.translation(player);
					var bool=player.storage.reandong;
					if(bool) str='自己';
					var choiceList=['防止'+str+'即将受到的伤害，且本回合内红桃牌不计入'+(bool?get.translation(target):'自己')+'的手牌上限。'];
					if(!target.countCards('h')) choiceList.push('令'+str+'下次发动〖安东〗时改为自行选择');
					else choiceList.push('令'+str+'观看你的手牌并获得所有红桃牌');
					if(bool){
						delete player.storage.reandong;
						player.chooseControl().set('choiceList',choiceList).set('prompt','安东：请选择一项');
					}
					else{
						target.chooseControl().set('choiceList',choiceList).set('prompt','安东：请选择一项').set('ai',function(event,player){
							var target=_status.event.getParent().player;
							var player=_status.event.player;
							if(get.attitude(player,target)>0) return 0;
							return 1;
						});
					}
					'step 1'
					var target=trigger.source;
					if(result.index==0){
						target.addTempSkill('reandong_ignore');
						trigger.cancel();
						game.delayx();
					}
					else{
						if(!target.countCards('h')){
							player.storage.reandong=true;
							game.delayx();
						}
						else{
							player.viewHandcards(target);
							var cards=target.getCards('h',function(card){
								return get.suit(card,target)=='heart';
							});
							if(cards.length>0) player.gain(cards,target,'give','bySelf');
						}
					}
				},
				ai:{
					maixie:true,
					effect:{
						target:function(card,player,target){
							if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
							if(get.tag(card,'damage')&&player!=target&&get.attitude(player,target)<0){
								var cards=player.getCards('h',function(cardx){
									return card!=cardx&&(!card.cards||!card.cards.includes(cardx))&&get.suit(cardx)=='heart';
								});
								if(!cards.length) return;
								for(var i of cards){
									if(get.name(i,target)=='tao') return 'zeroplayertarget';
								}
								if(get.value(cards,target)>=(6+target.getDamagedHp())) return 'zeroplayertarget';
								return [1,0.6];
							}
						},
					},
				},
				subSkill:{
					ignore:{
						mod:{
							ignoredHandcard:function(card,player){
								if(get.suit(card)=='heart'){
									return true;
								}
							},
							cardDiscardable:function(card,player,name){
								if(name=='phaseDiscard'&&get.suit(card)=='heart') return false;
							}
						},
						charlotte:true,
						marktext:'♥',
						intro:'红桃牌于本回合内不计入手牌上限',
					},
				},
			},
			reyingshi:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				direct:true,
				filter:function(event,player){
					return player.countCards('h')>0&&game.countPlayer()>1;
				},
				content:function(){
					'step 0'
					player.chooseCardTarget({
						prompt:get.prompt('reyingshi'),
						prompt2:'操作提示：选择一张作为赏金的手牌，然后选择作为赏金猎人的角色A和作为出杀目标的其他角色B',
						filterCard:true,
						selectTarget:2,
						position:'h',
						filterTarget:function(card,player,target){
							if(!ui.selected.targets.length) return true;
							return target!=player;
						},
						complexTarget:true,
						targetprompt:['出杀','被杀'],
						complexSelect:true,
						ai1:function(card){
							return 1/Math.max(1,get.value(card));
						},
						ai2:function(target){
							var player=_status.event.player;
							if(!ui.selected.targets.length){
								var att=get.attitude(player,target);
								if(att<0) return 0;
								if(target.hasSha()) return Math.pow(target.countCards('h')+1,1.1)*(player==target?3:1);
								return Math.sqrt(1+target.countCards('h'));
							}
							return get.effect(target,{name:'sha'},ui.selected.targets[0],player);
						},
					});
					'step 1'
					if(result.bool){
						var targets=result.targets;
						event.targets=targets;
						player.logSkill('reyingshi',targets[1]);
						var card=result.cards[0];
						event.card=card;
						player.showCards(card,get.translation(player)+'对'+get.translation(targets[1])+'发动了【应势】');
						player.line(targets[0],'fire');
					}
					else event.finish();
					'step 2'
					var next=targets[0].chooseToUse(function(card,player,event){
						if(get.name(card)!='sha') return false;
						return lib.filter.cardEnabled.apply(this,arguments)&&lib.filter.targetEnabled(card,player,(event||_status.event).sourcex);
					},'###是否对'+get.translation(targets[1])+'使用一张【杀】？###若选择使用，则获得赏金（'+get.translation(card)+'）。若造成伤害，则再从牌堆中获得与此牌花色点数相同的牌作为额外赏金。');
					next.set('addCount',false);
					next.set('complexSelect',true);
					next.set('filterTarget',function(card,player,target){
						if(target!=_status.event.sourcex&&!ui.selected.targets.includes(_status.event.sourcex)) return false;
						return lib.filter.targetEnabled.apply(this,arguments);
					});
					next.set('sourcex',targets[1]);
					'step 3'
					var target=targets[0]
					if(result.bool&&target.isIn()){
						var cards=[],slice=0;
						if(player!=target&&player.getCards('h').includes(card)){
							cards.push(card);
							slice++;
						}
						if(target.hasHistory('useCard',function(evt){
							if(evt.getParent(2)!=event) return false;
							return target.hasHistory('sourceDamage',function(evtx){
								return evtx.card==evt.card;
							});
						})){
							var suit=get.suit(card),number=get.number(card);
							for(var i=0;i<ui.cardPile.childNodes.length;i++){
								var card=ui.cardPile.childNodes[i];
								if(card.suit==suit&&card.number==number) cards.push(card);
							}
							if(cards.length>0){
								if(!slice) target.gain(cards,'gain2');
								else{
									setTimeout(function(){
										target.$gain2(cards.slice(slice),true);
									},get.delayx(200,200));
									target.gain(cards,player,'give');
								}
							}
						}
						else{
							if(cards.length>0) target.gain(cards,player,'give');
						}
					}
				},
			},
			//十周年沮授
			dcshibei:{
				trigger:{player:'damageEnd'},
				forced:true,
				audio:2,
				check:function(event,player){
					return player.getHistory('damage').indexOf(event)==0;
				},
				filter:function(event,player){
					var index=player.getHistory('damage').indexOf(event);
					return index==0||index==1;
				},
				content:function(){
					if(player.getHistory('damage').indexOf(trigger)>0){
						player.loseHp();
					}
					else{
						player.recover();
					}
				},
				subSkill:{
					damaged:{},
					ai:{}
				},
				ai:{
					maixie_defend:true,
					threaten:0.9,
					effect:{
						target:function(card,player,target){
							if(player.hasSkillTag('jueqing')) return;
							if(target.hujia) return;
							if(player._shibei_tmp) return;
							if(target.hasSkill('shibei_ai')) return;
							if(_status.event.getParent('useCard',true)||_status.event.getParent('_wuxie',true)) return;
							if(get.tag(card,'damage')){
								if(target.getHistory('damage').length>0){
									return [1,-2];
								}
								else{
									if(get.attitude(player,target)>0&&target.hp>1){
										return 0;
									}
									if(get.attitude(player,target)<0&&!player.hasSkillTag('damageBonus','e',{
										target:target,
										card:card
									})){
										if(card.name=='sha') return;
										var sha=false;
										player._shibei_tmp=true;
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
										delete player._shibei_tmp;
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
				}
			},
			dcjianying:{
				audio:2,
				locked:false,
				mod:{
					aiOrder:function(player,card,num){
						if(typeof card=='object'&&player.isPhaseUsing()){
							var evt=lib.skill.dcjianying.getLastUsed(player);
							if(evt&&evt.card&&(get.suit(evt.card)&&get.suit(evt.card)==get.suit(card)||evt.card.number&&evt.card.number==get.number(card))){
								return num+10;
							}
						}
					},
				},
				trigger:{player:'useCard'},
				frequent:true,
				getLastUsed:function(player,event){
					var history=player.getAllHistory('useCard');
					var index;
					if(event) index=history.indexOf(event)-1;
					else index=history.length-1;
					if(index>=0) return history[index];
					return false;
				},
				filter:function(event,player){
					var evt=lib.skill.dcjianying.getLastUsed(player,event);
					if(!evt||!evt.card) return false;
					return lib.suit.includes(get.suit(evt.card))&&get.suit(evt.card)==get.suit(event.card)||
						typeof get.number(evt.card,false)=='number'&&get.number(evt.card,false)==get.number(event.card);
				},
				content:function(){
					player.draw();
				},
				group:'dcjianying_mark',
				init:function(player){
					var history=player.getAllHistory('useCard');
					if(history.length){
						var trigger=history[history.length-1];
						if(get.suit(trigger.card,player)=='none'||typeof get.number(trigger.card,player)!='number') return;
						player.storage.dcjianying_mark=trigger.card;
						player.markSkill('dcjianying_mark');
						game.broadcastAll(function(player,suit){
							if(player.marks.dcjianying_mark) player.marks.dcjianying_mark.firstChild.innerHTML=get.translation(suit);
						},player,get.suit(trigger.card,player));
					}
				},
				onremove:function(player){
					player.unmarkSkill('dcjianying_mark');
					delete player.storage.dcjianying_mark;
				},
				subSkill:{
					mark:{
						charlotte:true,
						trigger:{player:'useCard1'},
						forced:true,
						popup:false,
						firstDo:true,
						content:function(){
							if(get.suit(trigger.card,player)=='none'||typeof get.number(trigger.card,player)!='number') player.unmarkSkill('dcjianying_mark');
							else{
								player.storage.dcjianying_mark=trigger.card;
								player.markSkill('dcjianying_mark');
								game.broadcastAll(function(player,suit){
									if(player.marks.dcjianying_mark) player.marks.dcjianying_mark.firstChild.innerHTML=get.translation(suit);
								},player,get.suit(trigger.card,player));
							}
						},
						intro:{
							markcount:function(card,player){
								var num=get.number(card,player);
								var list=[1,11,12,13];
								if(list.includes(num)) return ['A','J','Q','K'][list.indexOf(num)];
								return parseFloat(num);
							},
							content:function(card,player){
								var suit=get.suit(card,player);
								var num=get.number(card,player);
								var str='<li>上一张牌的花色：'+get.translation(suit);
								str+='<br><li>上一张牌的点数：';
								var list=[1,11,12,13];
								if(list.includes(num)) str+=['A(1)','J(11)','Q(12)','K(13)'][list.indexOf(num)];
								else str+=parseFloat(num);
								return str;
							},
						},
					},
				},
			},
			//十周年步练师
			dcanxu:{
				enable:'phaseUse',
				usable:1,
				multitarget:true,
				audio:2,
				filterTarget:function(card,player,target){
					if(player==target) return false;
					var num=target.countCards('h');
					if(ui.selected.targets.length){
						return num<ui.selected.targets[0].countCards('h');
					}
					var players=game.filterPlayer();
					for(var i=0;i<players.length;i++){
						if(num>players[i].countCards('h')) return true;
					}
					return false;
				},
				selectTarget:2,
				content:function(){
					'step 0'
					var gainner,giver;
					if(targets[0].countCards('h')<targets[1].countCards('h')){
						gainner=targets[0];
						giver=targets[1];
					}
					else{
						gainner=targets[1];
						giver=targets[0];
					}
					gainner.gainPlayerCard(giver,true,'h','visibleMove');
					event.gainner=gainner;
					event.giver=giver;
					'step 1'
					if(result.cards){
						var card=result.cards[0];
						if(event.gainner.getCards('h').includes(card)&&get.suit(card,event.gainner)!='spade') player.draw()
					}
					if(event.gainner.countCards('h')==event.giver.countCards('h')) player.recover();
				},
				ai:{
					order:10.5,
					threaten:2.3,
					result:{
						target:function(player,target){
							var num=target.countCards('h');
							var att=get.attitude(player,target);
							if(ui.selected.targets.length==0){
								if(att>0) return -1;
								var players=game.filterPlayer();
								for(var i=0;i<players.length;i++){
									var num2=players[i].countCards('h');
									var att2=get.attitude(player,players[i]);
									if(num2<num){
										if(att2>0) return -3;
										return -1;
									}
								}
								return 0;
							}
							else{
								return 1;
							}
						},
						player:1,
					}
				}
			},
			dczhuiyi:{
				audio:2,
				trigger:{player:'die'},
				direct:true,
				skillAnimation:true,
				animationColor:'wood',
				forceDie:true,
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt2('dczhuiyi'),function(card,player,target){
						return player!=target&&_status.event.sourcex!=target;
					}).set('forceDie',true).set('ai',function(target){
						var num=get.attitude(_status.event.player,target);
						if(num>0){
							if(target.hp==1){
								num+=2;
							}
							if(target.hp<target.maxHp){
								num+=2;
							}
						}
						return num;
					}).set('sourcex',trigger.source);
					"step 1"
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('dczhuiyi',target);
						player.line(target,'green');
						target.recover();
						target.draw(game.countPlayer());
					}
				},
				ai:{
					expose:0.5,
				}
			},
			//OL界蔡文姬
			olbeige:{
				audio:'beige',
				audioname:['ol_caiwenji'],
				trigger:{global:'damageEnd'},
				logTarget:'player',
				filter:function(event,player){
					return event.card&&event.card.name=='sha'&&event.player.isIn()&&player.countCards('he')>0;
				},
				check:function(event,player){
					let att=get.attitude(player,event.player);
					if(event.player.hasSkill('xinleiji')) return att>0;
					if(att>0||event.player.isHealthy()) return true;
					if(!event.source) return true;
					att=get.attitude(player,event.source);
					return att<=0||event.source.isTurnedOver();
				},
				prompt2:'令其进行判定，然后你可根据判定结果，弃置一张牌并令其执行对应效果。',
				content:function(){
					'step 0'
					event.target=trigger.player;
					event.source=trigger.source;
					trigger.player.judge();
					'step 1'
					event.judgeResult=get.copy(result);
					var str='是否弃置一张牌',strt=get.translation(target),strs=get.translation(source),goon=0;
					switch(result.suit){
						case 'heart':
							if(target.isIn()&&target.isDamaged()){
								str+=('，令'+strt+'回复1点体力');
								goon=get.recoverEffect(target,player,player);
							}
							break;
						case 'diamond':
							if(target.isIn()){
								str+=('，令'+strt+'摸两张牌');
								goon=2*get.effect(target,{name:'draw'},player,player);
							}
							break;
						case 'spade':
							if(source&&source.isIn()){
								str+=('，令'+strs+'翻'+(source.isTurnedOver()?'回正':'')+'面');
								goon=get.attitude(player,source)*(source.isTurnedOver()?2:-2);
							}
							break;
						case 'club':
							if(source&&source.isIn()){
								str+=('，令'+strs+'弃置两张牌');
								var cards=source.getCards('he').sort(function(a,b){
									return get.value(a,source)-get.value(b,source);
								}).slice(0,2);
								for(var i of cards) goon+=get.value(i,source);
								goon*=(-get.sgn(get.attitude(player,source)));
							}
							break;
					}
					str+='？';
					var str2=('若弃置点数为'+get.strNumber(result.number)+'的牌则收回自己弃置的牌');
					if(get.position(result.card,true)=='d'){
						str2+=('；若弃置花色为'+get.translation(result.suit)+'的牌则获得'+get.translation(result.card));
					}
					player.chooseToDiscard('he',str,str2).set('goon',goon).set('ai',function(card){
						var goon=_status.event.goon;
						var player=_status.event.player;
						var result=_status.event.getParent().judgeResult;
						var eff=Math.min(7,goon);
						if(eff<=0) return 0;
						if(get.suit(card,player)==result.suit) eff+=get.value(result.card,player);
						if(get.number(card,player)==result.number) return eff;
						return eff-get.value(card);
					});
					'step 2'
					if(result.bool){
						event.card=result.cards[0];
						switch(event.judgeResult.suit){
							case 'heart':
								if(target.isIn()&&target.isDamaged()) target.recover();
								break;
							case 'diamond':
								if(target.isIn()) target.draw(2);
								break;
							case 'spade':
								if(source&&source.isIn()) source.turnOver();
								player.addExpose(0.1);
								break;
							case 'club':
								if(source&&source.isIn()&&source.countCards('he')>0) source.chooseToDiscard(2,'he',true);
								player.addExpose(0.1);
								break;
						}
					}
					else event.finish();
					'step 3'
					var gains=[];
					if(get.position(event.judgeResult.card,true)=='d'&&get.suit(card,player)==event.judgeResult.suit) gains.push(event.judgeResult.card);
					if(get.position(card,true)=='d'&&get.number(card,player)==event.judgeResult.number) gains.push(card);
					if(gains.length) player.gain(gains,'gain2');
				},
			},
			//OL界张郃
			reqiaobian:{
				audio:2,
				trigger:{
					global:'phaseBefore',
					player:'enterGame',
				},
				forced:true,
				locked:false,
				filter:function(event,player){
					return event.name!='phase'||game.phaseNumber==0;
				},
				content:function(){
					player.addMark('reqiaobian',2);
					game.delayx();
				},
				marktext:'变',
				intro:{
					name2:'变',
					content:function(storage,player){
						var str='共有'+(storage||0)+'个标记';
						if(player.storage.reqiaobian_jieshu){
							str=('<li>'+str+'<br><li>已记录手牌数：'+get.translation(player.storage.reqiaobian_jieshu));
						}
						return str;
					},
				},
				group:['reqiaobian_judge','reqiaobian_draw','reqiaobian_use','reqiaobian_discard','reqiaobian_jieshu'],
				subSkill:{
					judge:{
						audio:'reqiaobian',
						trigger:{player:'phaseJudgeBefore'},
						direct:true,
						filter:function(event,player){
							return player.hasMark('reqiaobian')||player.hasCard((card)=>lib.filter.cardDiscardable(card,player,'reqiaobian_judge'),'he');
						},
						check:function(event,player){
							return player.hasCard(function(card){
								return get.effect(player,{
									name:card.viewAs||card.name,
									cards:[card],
								},player,player)<0;
							},'j');
						},
						content:function(){
							'step 0'
							var choices=[];
							if(player.hasMark('reqiaobian')) choices.push('弃置标记');
							if(player.hasCard((card)=>lib.filter.cardDiscardable(card,player,'reqiaobian_judge'),'he')) choices.push('弃置牌');
							choices.push('cancel2');
							player.chooseControl(choices).set('prompt','巧变：是否跳过判定阶段？').set('ai',function(){
								var evt=_status.event;
								if(lib.skill[evt.getParent().name].check(evt.getTrigger(),evt.player)) return 0;
								return 'cancel2';
							});
							'step 1'
							if(result.control!='cancel2'){
								if(result.control=='弃置牌'){
									player.chooseToDiscard('he',true).logSkill=event.name;
								}
								else{
									player.logSkill(event.name);
									player.removeMark('reqiaobian',1);
								}
							}
							else event.finish();
							'step 2'
							trigger.cancel();
						},
					},
					draw:{
						audio:'reqiaobian',
						trigger:{player:'phaseDrawBefore'},
						direct:true,
						filter:function(event,player){
							return player.hasMark('reqiaobian')||player.hasCard((card)=>lib.filter.cardDiscardable(card,player,'reqiaobian_judge'),'he');
						},
						check:function(event,player){
							return game.countPlayer(function(current){
								if(current==player||current.countGainableCards(player,'h')==0) return false;
								var att=get.attitude(player,current);
								if(current.hasSkill('tuntian')) return att>0;
								return att<1;
							})>1;
						},
						content:function(){
							'step 0'
							var choices=[];
							if(player.hasMark('reqiaobian')) choices.push('弃置标记');
							if(player.hasCard((card)=>lib.filter.cardDiscardable(card,player,'reqiaobian_draw'),'he')) choices.push('弃置牌');
							choices.push('cancel2');
							player.chooseControl(choices).set('prompt','巧变：是否跳过摸牌阶段？').set('ai',function(){
								var evt=_status.event;
								if(lib.skill[evt.getParent().name].check(evt.getTrigger(),evt.player)) return 0;
								return 'cancel2';
							});
							'step 1'
							if(result.control!='cancel2'){
								if(result.control=='弃置牌'){
									player.chooseToDiscard('he',true).logSkill=event.name;
								}
								else{
									player.logSkill(event.name);
									player.removeMark('reqiaobian',1);
								}
							}
							else event.finish();
							'step 2'
							trigger.cancel();
							if(game.hasPlayer((current)=>current.countGainableCards(player,'h')>0)){
								player.chooseTarget('是否获得至多两名其他角色的各一张手牌？',[1,2],function(card,player,target){
									return target!=player&&target.countGainableCards(player,'h')>0;
								}).set('ai',function(target){
									var att=get.attitude(_status.event.player,target);
									if(target.hasSkill('tuntian')) return att/10;
									return 1-att;
								});
							}
							else event.finish();
							'step 3'
							if(result.bool){
								var targets=result.targets.sortBySeat();
								player.line(targets,'green');
								player.gainMultiple(targets);
							}
						},
					},
					use:{
						audio:'reqiaobian',
						trigger:{player:'phaseUseBefore'},
						direct:true,
						filter:function(event,player){
							return player.hasMark('reqiaobian')||player.hasCard((card)=>lib.filter.cardDiscardable(card,player,'reqiaobian_judge'),'he');
						},
						check:function(event,player){
							if(player.countCards('h',function(card){
								return player.hasValueTarget(card,null,true);
							})>1) return false;
							return game.hasPlayer(function(current){
								var att=get.sgn(get.attitude(player,current));
								if(att!=0){
									var es=current.getCards('e');
									for(var i=0;i<es.length;i++){
										if(game.hasPlayer(function(current2){
											if(get.sgn(get.value(es[i],current))!=-att||get.value(es[i],current)<5) return false;
											var att2=get.sgn(get.attitude(player,current2));
											if(att==att2||att2!=get.sgn(get.effect(current2,es[i],player,current2))) return false;
											return current!=current2&&!current2.isMin()&&current2.canEquip(es[i]);
										})){
											return true;
										}
									}
								}
								if(att>0){
									var js=current.getCards('j',function(card){
										return get.effect(current,{
											name:card.viewAs||card.name,
											cards:[card],
										},current,current)<-2;
									});
									for(var i=0;i<js.length;i++){
										if(game.hasPlayer(function(current2){
											var att2=get.attitude(player,current2);
											if(att2>=0) return false;
											return current!=current2&&current2.canAddJudge(js[i]);
										})){
											return true;
										}
									}
								}
							});
						},
						content:function(){
							'step 0'
							var choices=[];
							if(player.hasMark('reqiaobian')) choices.push('弃置标记');
							if(player.hasCard((card)=>lib.filter.cardDiscardable(card,player,'reqiaobian_use'),'he')) choices.push('弃置牌');
							choices.push('cancel2');
							player.chooseControl(choices).set('prompt','巧变：是否跳过出牌阶段？').set('ai',function(){
								var evt=_status.event;
								if(lib.skill[evt.getParent().name].check(evt.getTrigger(),evt.player)) return 0;
								return 'cancel2';
							});
							'step 1'
							if(result.control!='cancel2'){
								if(result.control=='弃置牌'){
									player.chooseToDiscard('he',true).logSkill=event.name;
								}
								else{
									player.logSkill(event.name);
									player.removeMark('reqiaobian',1);
								}
							}
							else event.finish();
							'step 2'
							trigger.cancel();
							player.moveCard();
						},
					},
					discard:{
						audio:'reqiaobian',
						trigger:{player:'phaseDiscardBefore'},
						direct:true,
						filter:function(event,player){
							return player.hasMark('reqiaobian')||player.hasCard((card)=>lib.filter.cardDiscardable(card,player,'reqiaobian_judge'),'he');
						},
						check:function(event,player){
							return player.needsToDiscard();
						},
						content:function(){
							'step 0'
							var choices=[];
							if(player.hasMark('reqiaobian')) choices.push('弃置标记');
							if(player.hasCard((card)=>lib.filter.cardDiscardable(card,player,'reqiaobian_discard'),'he')) choices.push('弃置牌');
							choices.push('cancel2');
							player.chooseControl(choices).set('prompt','巧变：是否跳过弃牌阶段？').set('ai',function(){
								var evt=_status.event;
								if(lib.skill[evt.getParent().name].check(evt.getTrigger(),evt.player)) return 0;
								return 'cancel2';
							});
							'step 1'
							if(result.control!='cancel2'){
								if(result.control=='弃置牌'){
									player.chooseToDiscard('he',true).logSkill=event.name;
								}
								else{
									player.logSkill(event.name);
									player.removeMark('reqiaobian',1);
								}
							}
							else event.finish();
							'step 2'
							trigger.cancel();
						},
					},
					jieshu:{
						audio:2,
						trigger:{player:'phaseJieshuBegin'},
						forced:true,
						filter:function(event,player){
							return !player.getStorage('reqiaobian_jieshu').includes(player.countCards('h'));
						},
						content:function(){
							player.addMark('reqiaobian',1);
							player.markAuto('reqiaobian_jieshu',[player.countCards('h')]);
							player.storage.reqiaobian_jieshu.sort();
						},
					},
				},
			},
			//十周年徐庶
			rezhuhai:{
				audio:2,
				trigger:{global:'phaseJieshuBegin'},
				direct:true,
				filter:function(event,player){
					return player!=event.player&&event.player.getHistory('sourceDamage').length>0&&event.player.isIn()&&(player.countCards('h')>0||player.canUse('guohe',event.player));
				},
				content:function(){
					'step 0'
					var target=trigger.player;
					var choiceList=['将一张手牌当做【杀】对其使用','视为对其使用一张【过河拆桥】'];
					var bool=false,hs=player.getCards('h');
					for(var i of hs){
						if(game.checkMod(i,player,'unchanged','cardEnabled2',player)!==false&&player.canUse(get.autoViewAs({name:'sha'},[i]),target,false)){
							bool=true;
							break;
						}
					}
					var choices=[];
					if(bool) choices.push('选项一');
					else choiceList[0]='<span style="opacity:0.5">'+choiceList[0]+'</span>';
					if(player.canUse('guohe',target)) choices.push('选项二');
					else choiceList[1]='<span style="opacity:0.5">'+choiceList[1]+'</span>';
					choices.push('cancel2');
					player.chooseControl(choices).set('choiceList',choiceList).set('prompt',get.prompt('rezhuhai',target)).set('ai',function(){
						var choices=_status.event.controls;
						var eff1=0,eff2=0;
						var player=_status.event.player,target=_status.event.getTrigger().player;
						if(choices.includes('选项一')) eff1=get.effect(target,{name:'sha'},player,player);
						if(choices.includes('选项二')) eff2=get.effect(target,{name:'guohe'},player,player);
						if(eff1>0&&(player.hasSkill('xsqianxin')&&player.isDamaged()||eff1>eff2)) return '选项一';
						if(eff2>0) return '选项二';
						return 'cancel2';
					});
					'step 1'
					if(result.control!='cancel2'){
						if(result.control=='选项一'){
							player.chooseCard('h',true,function(card,player){
								if(!game.checkMod(card,player,'unchanged','cardEnabled2',player)) return false;
								return player.canUse(get.autoViewAs({name:'sha'},[card]),_status.event.getTrigger().player,false);
							},'选择一张手牌当做【杀】对'+get.translation(trigger.player)+'使用').set('ai',function(card){
								var player=_status.event.player;
								return get.effect(_status.event.getTrigger().player,get.autoViewAs({name:'sha'},[card]),player,player)/Math.max(1,get.value(card));
							});
						}
						else{
							player.useCard({name:'guohe',isCard:true},trigger.player,'rezhuhai');
							event.finish();
						}
					}
					else event.finish();
					'step 2'
					if(result.bool){
						player.useCard({name:'sha'},result.cards,'rezhuhai',trigger.player,false);
					}
				},
			},
			xsqianxin:{
				trigger:{source:'damageSource'},
				juexingji:true,
				forced:true,
				skillAnimation:true,
				animationColor:'orange',
				filter:function(event,player){
					return player.isDamaged();
				},
				content:function(){
					player.awakenSkill('xsqianxin');
					player.loseMaxHp();
					player.addSkills('rejianyan');
				},
				derivation:'rejianyan',
			},
			rejianyan:{
				audio:2,
				enable:'phaseUse',
				usable:2,
				filter:function(event,player){
					return game.hasPlayer((current)=>current.group=='key'||current.hasSex('male'));
				},
				chooseButton:{
					dialog:function(){
						return ui.create.dialog('###荐言###'+get.translation('rejianyan_info'));
					},
					chooseControl:function(event,player){
						var list=[];
						if(!player.hasSkill('rejianyan_color')) list.addArray(['red','black']);
						if(!player.hasSkill('rejianyan_type')) list.addArray(['basic','trick','equip']);
						list.push('cancel2');
						return list;
					},
					check:function(){
						if(!_status.event.player.hasSkill('rejianyan_color')) return 'red';
						return 'trick';
					},
					backup:function(result,player){
						return {
							audio:'rejianyan',
							filterCard:()=>false,
							selectCard:-1,
							info:result.control,
							content:function(){
								'step 0'
								var card=false,info=lib.skill.rejianyan_backup.info;
								if(info=='red'||info=='black'){
									player.addTempSkill('rejianyan_color','phaseUseEnd');
									card=get.cardPile2(function(card){
										return get.color(card)==info;
									});
								}
								else{
									player.addTempSkill('rejianyan_type','phaseUseEnd');
									card=get.cardPile2(function(card){
										return get.type(card)==info;
									});
								}
								if(card){
									event.card=card;
									player.showCards(card,get.translation(player)+'发动了【荐言】');
								}
								else event.finish();
								'step 1'
								player.chooseTarget(true,'选择一名角色获得'+get.translation(card),function(card,player,target){
									return target.group=='key'||target.hasSex('male');
								}).set('ai',function(target){
									var player=_status.event.player,att=get.attitude(player,target);
									if(target.hasSkill('nogain')) att/=10;
									return att/Math.sqrt(get.distance(player,target,'absolute'))
								});
								'step 2'
								if(result.bool){
									var target=result.targets[0];
									player.line(target,'green');
									target.gain(card,'gain2');
								}
							},
							ai:{result:{player:1}},
						}
					},
				},
				ai:{
					order:8,
					result:{
						player:function(player,target){
							if(game.hasPlayer((current)=>(current.group=='key'||current.hasSex('male'))&&get.attitude(player,current)>0)) return 1;
							return 0;
						},
					},
				},
				subSkill:{type:{},color:{},backup:{}},
			},
			//野兽高顺
			decadexianzhen:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return player.canCompare(target);
				},
				filter:function(event,player){
					return player.countCards('h')>0&&!player.hasSkill('decadexianzhen2')&&!player.hasSkill('decadexianzhen3');
				},
				content:function(){
					"step 0"
					player.chooseToCompare(target);
					"step 1"
					if(result.bool){
						player.storage.decadexianzhen2=target;
						player.addTempSkill('decadexianzhen2');
					}
					else{
						player.addTempSkill('decadexianzhen3');
					}
				},
				ai:{
					order:function(name,player){
						var cards=player.getCards('h');
						if(player.countCards('h','sha')==0){
							return 1;
						}
						for(var i=0;i<cards.length;i++){
							if(cards[i].name!='sha'&&get.number(cards[i])>11&&get.value(cards[i])<7){
								return 9;
							}
						}
						return get.order({name:'sha'})-1;
					},
					result:{
						player:function(player){
							if(player.countCards('h','sha')>0) return 0;
							var num=player.countCards('h');
							if(num>player.hp) return 0;
							if(num==1) return -2;
							if(num==2) return -1;
							return -0.7;
						},
						target:function(player,target){
							var num=target.countCards('h');
							if(num==1) return -1;
							if(num==2) return -0.7;
							return -0.5
						},
					},
					threaten:1.3
				}
			},
			decadexianzhen2:{
				audio:'decadexianzhen',
				charlotte:true,
				onremove:true,
				mod:{
					targetInRange:function(card,player,target){
						if(target==player.storage.decadexianzhen2) return true;
					},
					cardUsableTarget:function(card,player,target){
						if(target==player.storage.decadexianzhen2) return true;
					},
				},
				ai:{
					unequip:true,
					skillTagFilter:function(player,tag,arg){
						if(arg.target!=player.storage.decadexianzhen2) return false;
					},
				},
				group:'decadexianzhen2_damage',
				subSkill:{
					damage:{
						audio:'decadexianzhen',
						trigger:{source:'damageBegin1'},
						forced:true,
						filter:function(event,player){
							return event.card&&event.player==player.storage.decadexianzhen2&&!player.hasHistory('custom',function(evt){
								return evt.name=='decadexianzhen'&&evt.cardname==event.card.name;
							})
						},
						logTarget:'player',
						content:function(){
							trigger.num++;
							player.getHistory('custom').push({
								name:'decadexianzhen',
								cardname:trigger.card.name,
							});
						},
					},
				},
			},
			decadexianzhen3:{
				charlotte:true,
				mod:{
					cardEnabled:function(card){
						if(card.name=='sha') return false;
					},
					ignoredHandcard:function(card,player){
						if(get.name(card)=='sha'){
							return true;
						}
					},
					cardDiscardable:function(card,player,name){
						if(name=='phaseDiscard'&&get.name(card)=='sha'){
							return false;
						}
					},
				},
			},
			decadejinjiu:{
				global:'decadejinjiu_global',
				mod:{
					cardname(card){
						if(card.name=='jiu') return 'sha';
					},
					cardnumber(card){
						if(card.name=='jiu') return 13;
					},
				},
				audio:2,
				audioname2:{
					ol_gaoshun:'rejinjiu',
				},
				trigger:{player:['useCard1','respond']},
				filter(event,player){
					return event.card.name=='sha'&&!event.skill&&event.cards&&event.cards.length==1&&event.cards[0].name=='jiu';
				},
				forced:true,
				firstDo:true,
				content(){},
				subSkill:{
					global:{
						mod:{
							cardEnabled(card,player){
								if(card.name=='jiu'){
									var source=_status.currentPhase;
									if(source&&source!=player&&source.hasSkill('decadejinjiu')) return false;
								}
							},
							cardSavable(card,player){
								if(card.name=='jiu'){
									var source=_status.currentPhase;
									if(source&&source!=player&&source.hasSkill('decadejinjiu')) return false;
								}
							},
						},
					},
				},
			},
			rebotu:{
				audio:'botu',
				trigger:{player:'phaseEnd'},
				frequent:true,
				filter:function(event,player){
					if(player.countMark('rebotu_count')>=Math.min(3,game.countPlayer())) return false;
					var suits=[];
					game.getGlobalHistory('cardMove',function(evt){
						if(suits.length>=4) return;
						if(evt.name=='lose'){
							if(evt.position==ui.discardPile){
								for(var i of evt.cards) suits.add(get.suit(i,false));
							}
						}
						else{
							if(evt.name=='cardsDiscard'){
								for(var i of evt.cards) suits.add(get.suit(i,false));
							}
						}
					});
					return suits.length>=4;
				},
				content:function(){
					player.addTempSkill('rebotu_count','roundStart');
					player.addMark('rebotu_count',1,false);
					player.insertPhase();
				},
				group:'rebotu_mark',
				subSkill:{
					count:{
						onremove:true,
						charlotte:true,
					},
					mark:{
						trigger:{
							global:['loseAfter','cardsDiscardAfter'],
							player:'phaseAfter',
						},
						forced:true,
						firstDo:true,
						silent:true,
						filter:function(event,player){
							if(event.name=='phase') return true;
							if(player!=_status.currentPhase) return false;
							if(event.name=='lose') return event.position==ui.discardPile;
							return true;
						},
						content:function(){
							if(trigger.name=='phase'){
								player.unmarkSkill('rebotu_mark');
								return;
							}
							var suits=[];
							game.getGlobalHistory('cardMove',function(evt){
								if(suits.length>=4) return;
								if(evt.name=='lose'){
									if(evt.position==ui.discardPile){
										for(var i of evt.cards) suits.add(get.suit(i,false));
									}
								}
								else{
									if(evt.name=='cardsDiscard'){
										for(var i of evt.cards) suits.add(get.suit(i,false));
									}
								}
							});
							player.storage.rebotu_mark=suits;
							player.markSkill('rebotu_mark');
						},
						intro:{
							onunmark:true,
							content:'本回合已有$花色的牌进入过弃牌堆',
						},
					},
				},
			},
			xinganlu:{
				enable:'phaseUse',
				usable:1,
				audio:2,
				selectTarget:2,
				delay:0,
				filterTarget:function(card,player,target){
					if(target.isMin()) return false;
					if(ui.selected.targets.length==0) return true;
					if(ui.selected.targets[0].countCards('e')==0&&target.countCards('e')==0) return false;
					return true;
				},
				multitarget:true,
				multiline:true,
				content:function(){
					'step 0'
					targets[0].swapEquip(targets[1]);
					'step 1'
					game.delayx();
					var num=Math.abs(targets[0].countCards('e')-targets[1].countCards('e'));
					if(num>player.getDamagedHp()) player.chooseToDiscard('h',2,true);
				},
				ai:{
					order:10,
					expose:0.2,
					threaten:function(player,target){
						return 0.8*Math.max(1+target.maxHp-target.hp);
					},
					result:{
						target:function(player,target){
							if(!ui.selected.targets.length) return -get.value(target.getCards('e'),target);
							var target2=ui.selected.targets[0];
							var eff_target=(get.value(target2.getCards('e'),target)-get.value(target.getCards('e'),target));
							if(get.sgn(eff_target)==get.sgn(-get.value(target2.getCards('e'),target2))) return 0;
							return eff_target;
						}
					},
				}
			},
			xinbuyi:{
				audio:2,
				trigger:{global:'dying'},
				filter:function(event,player){
					return event.player.countCards('h')>0;
				},
				check:function(event,player){
					return get.attitude(player,event.player)>0;
				},
				content:function(){
					'step 0'
					if(player==trigger.player) player.chooseCard('h',true).set('ai',function(card){
						if(get.type(card)!='basic') return 100-get.value(card);
						return 0;
					});
					else player.choosePlayerCard('h',trigger.player,true);
					'step 1'
					var card=result.cards[0],target=trigger.player;
					player.showCards(card,get.translation(player)+'对'+(player==target?'自己':get.translation(target))+'发动了【补益】');
					if(get.type(card,target)!='basic'){
						target.discard(card);
						target.recover();
						if(target.countCards('h')==1) target.draw();
					}
				},
				logTarget:'player',
			},
			rejiaozhao:{
				audio:2,
				enable:'phaseUse',
				group:'rejiaozhao_base',
				locked:false,
				mod:{
					targetEnabled:function(card,player,target){
						if(player==target&&card.storage&&card.storage.rejiaozhao) return false;
					},
				},
				filter:function(event,player){
					return (player.hasMark('redanxin')&&player.countCards('h')&&player.getStorage('rejiaozhao_clear').length<player.countMark('redanxin'));
				},
				chooseButton:{
					dialog:function(event,player){
						var list=[],storage=player.getStorage('rejiaozhao_clear');
						for(var name of lib.inpile){
							var type=get.type(name);
							if((type=='basic'||type=='trick')&&!storage.includes(type)){
								list.push([type,'',name]);
								if(name=='sha'){
									for(var nature of lib.inpile_nature) list.push([type,'',name,nature]);
								}
							}
						}
						return ui.create.dialog('惮心',[list,'vcard']);
					},
					filter:function(button,player){
						var card={name:button.link[2],nature:button.link[3]};
						if(player.countMark('redanxin')<2) card.storage={rejiaozhao:true};
						var evt=_status.event.getParent();
						return evt.filterCard(card,player,evt);
					},
					check:function(button){
						var card={name:button.link[2],nature:button.link[3]},player=_status.event.player;
						if(player.countMark('redanxin')<2) card.storage={rejiaozhao:true};
						return player.getUseValue(card,null,true);
					},
					backup:function(links,player){
						var next={
							audio:'redanxin',
							viewAs:{name:links[0][2],nature:links[0][3]},
							filterCard:true,
							position:'h',
							popname:true,
							ai1:(card)=>8-get.value(card),
							onuse:function(result,player){
								player.addTempSkill('rejiaozhao_clear','phaseUseAfter');
								player.markAuto('rejiaozhao_clear',[get.type(result.card)])
							},
						}
						if(player.countMark('redanxin')<2) next.viewAs.storage={rejiaozhao:true};
						return next;
					},
					prompt:function(links){
						return '将一张手牌当做'+(get.translation(links[0][3])||'')+get.translation(links[0][2])+'使用';
					},
				},
				ai:{
					order:6,
					result:{
						player:1
					}
				},
				derivation:['rejiaozhao_lv2','rejiaozhao_lv3'],
				subSkill:{
					clear:{onremove:true},
					base:{
						audio:'rejiaozhao',
						enable:'phaseUse',
						usable:1,
						filter:function(event,player){
							if(player.hasMark('redanxin')) return false;
							return player.countCards('h')>0&&game.hasPlayer((current)=>current!=player);
						},
						filterCard:true,
						position:'h',
						discard:false,
						lose:false,
						check:function(card){
							return 1/Math.max(1,_status.event.player.getUseValue(card));
						},
						prompt:'出牌阶段限一次。你可以展示一张手牌，并令一名距离你最近的角色选择一种基本牌或普通锦囊牌的牌名。你可将此牌当做其声明的牌使用直到此阶段结束（你不是此牌的合法目标）。',
						content:function(){
							'step 0'
							player.showCards(cards);
							'step 1'
							var targets=game.filterPlayer();
							targets.remove(player);
							targets.sort(function(a,b){
								return Math.max(1,get.distance(player,a))-Math.max(1,get.distance(player,b));
							});
							var distance=Math.max(1,get.distance(player,targets[0]));
							for(var i=1;i<targets.length;i++){
								if(Math.max(1,get.distance(player,targets[i]))>distance){
									targets.splice(i);break;
								}
							}
							player.chooseTarget('请选择【矫诏】的目标',true,function(card,player,target){
								return _status.event.targets.includes(target);
							}).set('ai',function(target){
								return get.attitude(_status.event.player,target);
							}).set('targets',targets);
							'step 2'
							if(!result.bool){
								event.finish();
								return;
							}
							var target=result.targets[0];
							event.target=target;
							var list=[];
							for(var i=0;i<lib.inpile.length;i++){
								var name=lib.inpile[i];
								if(name=='sha'){
									list.push(['基本','','sha']);
									for(var j of lib.inpile_nature) list.push(['基本','','sha',j]);
								}
								else if(get.type(name)=='basic') list.push(['基本','',name]);
								else if(get.type(name)=='trick') list.push(['锦囊','',name]);
							}
							target.chooseButton(['矫诏',[list,'vcard']],true).set('ai',function(button){
								var player=_status.event.getParent().player,card={
									name:button.link[2],
									nature:button.link[3],
									storage:{
										rejiaozhao:true,
									}
								};
								return player.getUseValue(card,null,true)*_status.event.att;
							}).set('att',get.attitude(event.target,player)>0?1:-1);
							'step 3'
							var chosen=result.links[0][2];
							var nature=result.links[0][3];
							var fakecard={
								name:chosen,
								storage:{rejiaozhao:true},
							};
							if(nature) fakecard.nature=nature;
							event.target.showCards(game.createCard({
								name:chosen,
								nature:nature,
								suit:cards[0].suit,
								number:cards[0].number,
							}),get.translation(event.target)+'声明了'+get.translation(chosen));
							player.storage.rejiaozhao_viewas=fakecard;
							cards[0].addGaintag('rejiaozhao')
							player.addTempSkill('rejiaozhao_viewas','phaseUseEnd');
						},
						ai:{
							order:9,
							result:{
								player:1,
							}
						},
					},
					backup:{audio:'rejiaozhao'},
					viewas:{
						enable:'phaseUse',
						mod:{
							targetEnabled:function(card,player,target){
								if(player==target&&card.storage&&card.storage.rejiaozhao) return false;
							},
						},
						filter:function(event,player){
							if(!player.storage.rejiaozhao_viewas) return false;
							var cards=player.getCards('h',function(card){
								return card.hasGaintag('rejiaozhao');
							});
							if(!cards.length) return false;
							if(!game.checkMod(cards[0],player,'unchanged','cardEnabled2',player)) return false;
							var card=get.autoViewAs(player.storage.rejiaozhao_viewas,cards);
							return event.filterCard(card,player,event);
						},
						viewAs:function(cards,player){
							return player.storage.rejiaozhao_viewas;
						},
						filterCard:function(card){
							return card.hasGaintag('rejiaozhao');
						},
						selectCard:-1,
						position:'h',
						popname:true,
						prompt:function(){
							return '将“矫诏”牌当做'+get.translation(_status.event.player.storage.rejiaozhao_viewas)+'使用';
						},
						onremove:function(player){
							player.removeGaintag('rejiaozhao');
							delete player.storage.rejiaozhao_viewas;
						},
						ai:{order:8},
					},
				},
			},
			redanxin:{
				audio:2,
				trigger:{player:'damageEnd'},
				frequent:true,
				content:function(){
					player.draw();
					if(player.countMark('redanxin')<2) player.addMark('redanxin',1,false);
				},
				intro:{content:'当前升级等级。：Lv#'},
				ai:{
					maixie:true,
					effect:{
						target:(card,player,target)=>{
							if(!get.tag(card,'damage')) return;
							if(target.hp+target.hujia<2||player.hasSkillTag('jueqing',false,target)) return 2;
							if(target.countMark('redanxin')>1) return [1,1];
							return [1,0.8*target.hp-0.4];
						}
					}
				}
			},
			//马岱
			reqianxi:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				frequent:true,
				content:function(){
					'step 0'
					player.draw();
					'step 1'
					if(player.hasCard((card)=>lib.filter.cardDiscardable(card,player,'reqianxi'),'he')) player.chooseToDiscard('he',true);
					else event.finish();
					'step 2'
					if(result.bool&&game.hasPlayer((current)=>current!=player&&get.distance(player,current)<=1)){
						var color=get.color(result.cards[0],player);
						event.color=color;
						color=get.translation(color);
						player.chooseTarget(true,'选择【潜袭】的目标','令其本回合不能使用或打出'+color+'牌，且'+color+'防具失效，且回复体力时，你摸两张牌',function(card,player,target){
							return target!=player&&get.distance(player,target)<=1;
						}).set('ai',function(target){
							return -get.attitude(_status.event.player,target)*Math.sqrt(1+target.countCards('he'));
						});
					}
					else event.finish();
					'step 3'
					if(result.bool){
						var target=result.targets[0];
						player.line(target,'green');
						target.storage.reqianxi_effect=[event.color,player];
						target.addTempSkill('reqianxi_effect');
					}
				},
				subSkill:{
					effect:{
						mark:true,
						intro:{
							markcount:()=>0,
							content:function(storage,player){
								var color=get.translation(storage[0]),source=get.translation(storage[1]);
								return '本回合不能使用或打出'+color+'牌，且'+color+'防具失效，且回复体力时，'+source+'摸两张牌';
							},
						},
						charlotte:true,
						onremove:true,
						mod:{
							cardEnabled2:function(card,player){
								if(get.itemtype(card)=='card'&&get.color(card)==player.getStorage('reqianxi_effect')[0]) return false;
							},
						},
						trigger:{player:'recoverEnd'},
						forced:true,
						popup:false,
						filter:function(event,player){
							return player.storage.reqianxi_effect&&player.storage.reqianxi_effect[1].isIn();
						},
						content:function(){
							var target=player.storage.reqianxi_effect[1];
							target.logSkill('reqianxi',player);
							target.draw(2);
						},
						ai:{
							unequip2:true,
							skillTagFilter:function(player){
								var evt=_status.event,color=player.getStorage('reqianxi_effect')[0];
								if(evt.name=='lose'&&evt.loseEquip){
									var card=evt.cards[evt.num];
									if(card&&get.subtype(card,false)=='equip2'&&get.color(card)==color) return true;
									return false;
								}
								else{
									var equip=player.getEquip(2);
									if(equip&&get.color(equip)==color) return true;
									return false;
								}
							},
						},
					},
				},
			},
			//徐晃
			olduanliang:{
				audio:2,
				locked:false,
				enable:'chooseToUse',
				filterCard:function(card){
					return (get.type2(card)!='trick'&&get.color(card)=='black');
				},
				filter:function(event,player){
					return player.hasCard((card)=>(get.type2(card)!='trick'&&get.color(card)=='black'),'hes');
				},
				position:'hes',
				viewAs:{name:'bingliang'},
				prompt:'将一张黑色非锦囊牌当做兵粮寸断使用',
				check:function(card){return 6-get.value(card)},
				ai:{
					order:9
				},
				mod:{
					targetInRange:function(card,player,target){
						if(card.name=='bingliang'&&!player.getStat('damage')) return true;
					},
				},
			},
			oljiezi:{
				audio:2,
				trigger:{global:['phaseDrawSkipped','phaseDrawCancelled']},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('oljiezi'),'你可选择一名角色。若该角色：手牌数为全场最少且没有“辎”，则其获得一枚“辎”。否则其摸一张牌。').set('ai',function(target){
						var att=get.attitude(_status.event.player,target);
						if(!target.hasMark('oljiezi')&&target.isMinHandcard()) att*=2;
						return att;
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('oljiezi',target);
						if(!target.hasMark('oljiezi')&&target.isMinHandcard()) target.addMark('oljiezi',1);
						else target.draw();
					}
				},
				marktext:'辎',
				intro:{
					name2:'辎',
					content:'mark',
					onunmark:true,
				},
				group:'oljiezi_extra',
				subSkill:{
					extra:{
						audio:'oljiezi',
						trigger:{global:'phaseDrawAfter'},
						forced:true,
						filter:function(event,player){
							return event.player.hasMark('oljiezi');
						},
						logTarget:'player',
						content:function(){
							var next=trigger.player.phaseDraw();
							event.next.remove(next);
							trigger.getParent().next.add(next);
							trigger.player.removeMark('oljiezi',trigger.player.countMark('oljiezi'));
						},
					},
				},
			},
			//界护驾
			rehujia:{
				audio:'hujia',
				inherit:'hujia',
				filter:function(event,player){
					if(event.responded) return false;
					if(player.storage.hujiaing) return false;
					if(!player.hasZhuSkill('rehujia')) return false;
					if(!event.filterCard({name:'shan'},player,event)) return false;
					return game.hasPlayer(function(current){
						return current!=player&&current.group=='wei';
					});
				},
				ai:{
					respondShan:true,
					skillTagFilter:function(player){
						if(player.storage.hujiaing) return false;
						if(!player.hasZhuSkill('rehujia')) return false;
						return game.hasPlayer(function(current){
							return current!=player&&current.group=='wei';
						});
					},
				},
				group:'rehujia_draw',
				subSkill:{
					draw:{
						trigger:{global:['useCard','respond']},
						usable:1,
						direct:true,
						filter:function(event,player){
							return event.card.name=='shan'&&event.player!=player&&event.player.group=='wei'&&event.player.isIn()&&
								event.player!=_status.currentPhase&&player.hasZhuSkill('rehujia');
						},
						content:function(){
							'step 0'
							trigger.player.chooseBool('护驾：是否令'+get.translation(player)+'摸一张牌？').set('ai',function(){
								var evt=_status.event;
								return get.attitude(evt.player,evt.getParent().player)>0;
							});
							'step 1'
							if(result.bool){
								player.logSkill('rehujia');
								trigger.player.line(player,'fire');
								player.draw();
							}
							else player.storage.counttrigger.rehujia_draw--;
						},
					},
				},
			},
			//夏侯氏
			reqiaoshi:{
				audio:2,
				trigger:{global:'phaseJieshuBegin'},
				filter:function(event,player){
					return event.player!=player&&event.player.countCards('h')==player.countCards('h')&&event.player.isIn();
				},
				check:function(event,player){
					return get.attitude(player,event.player)>=0;
				},
				//priority:-5,
				logTarget:'player',
				content:function(){
					'step 0'
					game.asyncDraw([trigger.player,player]);
					'step 1'
					game.delayx();
					if(player.isIn()&&trigger.player.isIn()){
						var getGainSuit=function(player){
							var last=player.getHistory('gain',function(evt){
								return evt.getParent(2)==event;
							});
							if(last.length){
								var evt=last.pop();
								if(evt.cards.length==1&&player.getCards('h').includes(evt.cards[0])) return get.suit(evt.cards[0],player);
							}
							else return player;
						}
						if(getGainSuit(player)==getGainSuit(trigger.player)) player.chooseBool('是否继续发动【樵拾】？','和'+get.translation(trigger.player)+'各摸一张牌');
					}
					else event.finish();
					'step 2'
					if(result.bool) event.goto(0);
				},
				ai:{
					expose:0.1
				}
			},
			reyanyu:{
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					return player.hasCard(card=>lib.skill.reyanyu.filterCard(card,player),'h');
				},
				filterCard:(card,player)=>get.name(card)=='sha'&&player.canRecast(card),
				discard:false,
				lose:false,
				delay:false,
				content:function(){
					player.recast(cards);
				},
				ai:{
					basic:{
						order:1
					},
					result:{
						player:1
					}
				},
				group:'reyanyu2'
			},
			reyanyu2:{
				trigger:{player:'phaseUseEnd'},
				direct:true,
				filter:(event,player)=>player.hasHistory('useSkill',evt=>evt.skill=='reyanyu'&&evt.event.getParent(2)==event)&&game.hasPlayer(target=>target.hasSex('male')&&target!=player),
				content:function(){
					'step 0'
					event.num=Math.min(3,player.getHistory('useSkill',evt=>evt.skill=='reyanyu'&&evt.event.getParent(2)==trigger).length);
					player.chooseTarget(get.prompt('reyanyu'),'令一名男性角色摸'+get.cnNumber(event.num)+'张牌',function(card,player,target){
						return target.hasSex('male')&&target!=player;
					}).set('ai',function(target){
						return get.attitude(_status.event.player,target);
					});
					'step 1'
					if(result.bool){
						player.logSkill('reyanyu',result.targets);
						result.targets[0].draw(event.num);
					}
				}
			},
			//虞翻
			xinzongxuan:{
				audio:2,
				trigger:{
					player:'loseAfter',
					global:'loseAsyncAfter',
				},
				filter:function(event,player){
					if(event.type!='discard') return false;
					var evt=event.getl(player);
					if(!evt||!evt.cards2) return false;
					for(var i=0;i<evt.cards2.length;i++){
						if(get.position(evt.cards2[i])=='d'){
							return true;
						}
					}
					return false;
				},
				check:function(trigger,player){
					if(trigger.getParent(3).name=='phaseDiscard') return true;
					if(!game.hasPlayer(function(current){
						return current!=player&&get.attitude(player,current)>0&&!current.hasSkillTag('nogain');
					})) return false;
					var cards=trigger.getl(player).cards2;
					for(var i=0;i<cards.length;i++){
						if(get.position(cards[i],true)=='d'&&get.type2(cards[i],false)=='trick'){
							return true;
						}
					}
					return false;
				},
				content:function(){
					"step 0"
					var cards=[],cards2=trigger.getl(player).cards2;
					for(var i=0;i<cards2.length;i++){
						if(get.position(cards2[i],true)=='d'){
							cards.push(cards2[i]);
						}
					}
					var next=player.chooseToMove('纵玄：将任意张牌置于牌堆顶',true);
					next.set('list',[
						['本次弃置的牌（请将要给出的锦囊牌留在这里）',cards],
						['牌堆顶'],
					]);
					next.set('filterOk',function(moved){
						if(moved[0].length==1&&get.type2(moved[0][0],false)=='trick') return true;
						return moved[1].length>0;
					});
					next.set('processAI',function(list){
						var cards=list[0][1].slice(0),player=_status.event.player;
						var result=[[],[]];
						if(game.hasPlayer(function(current){
							return current!=player&&get.attitude(player,current)>0&&!current.hasSkillTag('nogain');
						})){
							var max_val=0;
							var max_card=false;
							for(var i of cards){
								if(get.type2(i,false)=='trick'){
									var val=get.value(i,'raw');
									if(val>max_val){
										max_card=i;
										max_val=val;
									}
								}
							}
							if(max_card){
								result[0].push(max_card);
								cards.remove(max_card);
							}
						}
						if(cards.length){
							var max_val=0;
							var max_card=false;
							var equip=game.hasPlayer(function(current){
								return current.isDamaged()&&get.recoverEffect(current,player,player)>0;
							})
							for(var i of cards){
								var val=get.value(i);
								var type=get.type2(i,false);
								if(type=='basic') val+=3;
								if(type=='equip'&&equip) val+=9;
								if(max_val==0||val>max_val){
									max_card=i;
									max_val=val;
								}
							}
							if(max_card){
								result[1].push(max_card);
								cards.remove(max_card);
							}
							result[0].addArray(cards);
						}
						return result;
					})
					'step 1'
					if(result.bool){
						var cards=result.moved[1].slice(0);
						if(cards.length){
							game.log(player,'将',cards,'置于了牌堆顶');
							while(cards.length) ui.cardPile.insertBefore(cards.pop().fix(),ui.cardPile.firstChild);
						}
						var list=result.moved[0].filter(function(i){
							return get.type2(i,false)=='trick';
						});
						if(list.length&&game.hasPlayer((current)=>(current!=player))){
							var next=player.chooseButton(['是否将一张锦囊牌交给一名其他角色？',list]).set('ai',function(button){
								if(_status.event.goon) return Math.max(0.1,get.value(button.link,'raw'));
								return 0;
							}).set('goon',game.hasPlayer(function(current){
								return current!=player&&get.attitude(player,current)>0&&!current.hasSkillTag('nogain');
							}));
							if(!result.moved[1].length) next.set('forced',true);
						}
						else event.finish();
					}
					else event.finish();
					'step 2'
					if(result.bool){
						var card=result.links[0];
						event.card=card;
						player.chooseTarget(lib.filter.notMe,true,'令一名其他角色获得'+get.translation(card)).set('card',card).set('ai',function(target){
							var card=_status.event.card,player=_status.event.player;
							var eff=Math.max(0.1,get.value(card,target))*get.attitude(player,target);
							if(target.hasSkill('nogain')) eff/=10;
							return eff;
						});
					}
					else event.finish();
					'step 3'
					if(result.bool){
						var target=result.targets[0];
						player.line(target,'green');
						target.gain(card,'gain2');
					}
				},
			},
			xinzhiyan:{
				audio:'zhiyan',
				audioname:['gexuan','re_yufan','xin_yufan'],
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt('zhiyan'),'令一名角色摸一张牌并展示之。若为基本牌则你摸一张牌；若为装备牌，则其回复1点体力').set('ai',function(target){
						return get.attitude(_status.event.player,target)*(target.isDamaged()?2:1);
					});
					"step 1"
					if(result.bool){
						event.target=result.targets[0];
						player.logSkill('xinzhiyan',result.targets);
						event.bool=false;
						event.target.draw('visible');
					}
					else{
						event.finish();
					}
					"step 2"
					var card=result[0];
					event.card=card;
					if(get.type(card)=='basic') player.draw();
					"step 3"
					if(get.type(card)=='equip'){
						if(target.getCards('h').includes(card)&&target.hasUseTarget(card)){
							event.target.chooseUseTarget(card,true,'nopopup');
							game.delay();
						}
						event.bool=true;
					}
					"step 4"
					if(event.bool) target.recover();
				},
				ai:{
					expose:0.2,
					threaten:1.2
				}
			},
			//新主公技
			xinhuangtian:{
				unique:true,
				audio:'xinhuangtian2',
				audioname:['zhangjiao','re_zhangjiao'],
				global:'xinhuangtian2',
				zhuSkill:true,
			},
			xinhuangtian2:{
				audio:2,
				enable:'phaseUse',
				discard:false,
				lose:false,
				delay:false,
				line:true,
				prepare:function(cards,player,targets){
					targets[0].logSkill('xinhuangtian');
				},
				prompt:function(){
					var player=_status.event.player;
					var list=game.filterPlayer(function(target){
						return target!=player&&target.hasZhuSkill('xinhuangtian',player);
					});
					var str='将一张【闪】或黑桃手牌交给'+get.translation(list);
					if(list.length>1) str+='中的一人';
					return str;
				},
				filter:function(event,player){
					if(player.group!='qun') return false;
					if(!game.hasPlayer(function(target){
						return target!=player&&target.hasZhuSkill('xinhuangtian',player)&&!target.hasSkill('xinhuangtian3');
					})) return false;
					return player.hasCard(function(card){
						return lib.skill.xinhuangtian2.filterCard(card,player);
					},'h');
				},
				filterCard:function(card,player){
					return get.name(card,player)=='shan'||get.suit(card,player)=='spade';
				},
				log:false,
				visible:true,
				filterTarget:function(card,player,target){
					return target!=player&&target.hasZhuSkill('xinhuangtian',player)&&!target.hasSkill('xinhuangtian3');
				},
				//usable:1,
				//forceaudio:true,
				content:function(){
					player.give(cards,target);
					target.addTempSkill('xinhuangtian3','phaseUseEnd');
				},
				ai:{
					expose:0.3,
					order:10,
					result:{
						target:5
					}
				}
			},
			xinhuangtian3:{},
			rejijiang:{
				audio:'jijiang1',
				audioname:['liushan','re_liubei','re_liushan','ol_liushan'],
				unique:true,
				group:['rejijiang1','rejijiang3'],
				zhuSkill:true,
				filter:function(event,player){
					if(!player.hasZhuSkill('rejijiang')||!game.hasPlayer(function(current){
						return current!=player&&current.group=='shu';
					})) return false;
					return !event.jijiang&&(event.type!='phase'||!player.hasSkill('jijiang3'));
				},
				enable:['chooseToUse','chooseToRespond'],
				viewAs:{name:'sha'},
				filterCard:function(){return false},
				selectCard:-1,
				ai:{
					order:function(){
						return get.order({name:'sha'})+0.3;
					},
					respondSha:true,
					skillTagFilter:function(player){
						if(!player.hasZhuSkill('rejijiang')||!game.hasPlayer(function(current){
							return current!=player&&current.group=='shu';
						})) return false;
					},
				},
			},
			rejijiang1:{
				audio:'jijiang1',
				audioname:['liushan','re_liubei','re_liushan','ol_liushan'],
				trigger:{player:['useCardBegin','respondBegin']},
				logTarget:'targets',
				filter:function(event,player){
					return event.skill=='rejijiang';
				},
				forced:true,
				content:function(){
					"step 0"
					delete trigger.skill;
					trigger.getParent().set('jijiang',true);
					"step 1"
					if(event.current==undefined) event.current=player.next;
					if(event.current==player){
						player.addTempSkill('jijiang3');
						event.finish();
						trigger.cancel();
						trigger.getParent().goto(0);
					}
					else if(event.current.group=='shu'){
						var next=event.current.chooseToRespond('是否替'+get.translation(player)+'打出一张杀？',{name:'sha'});
						next.set('ai',function(){
							var event=_status.event;
							return (get.attitude(event.player,event.source)-2);
						});
						next.set('source',player);
						next.set('jijiang',true);
						next.set('skillwarn','替'+get.translation(player)+'打出一张杀');
						next.noOrdering=true;
						next.autochoose=lib.filter.autoRespondSha;
					}
					else{
						event.current=event.current.next;
						event.redo();
					}
					"step 2"
					if(result.bool){
						event.finish();
						trigger.card=result.card;
						trigger.cards=result.cards;
						trigger.throw=false;
						if(typeof event.current.ai.shown=='number'&&event.current.ai.shown<0.95){
							event.current.ai.shown+=0.3;
							if(event.current.ai.shown>0.95) event.current.ai.shown=0.95;
						}
					}
					else{
						event.current=event.current.next;
						event.goto(1);
					}
				}
			},
			rejijiang3:{
				trigger:{global:['useCard','respond']},
				usable:1,
				direct:true,
				filter:function(event,player){
					return event.card.name=='sha'&&event.player!=player&&event.player.group=='shu'&&event.player.isIn()&&
						event.player!=_status.currentPhase&&player.hasZhuSkill('rejijiang');
				},
				content:function(){
					'step 0'
					trigger.player.chooseBool('激将：是否令'+get.translation(player)+'摸一张牌？').set('ai',function(){
						var evt=_status.event;
						return get.attitude(evt.player,evt.getParent().player)>0;
					});
					'step 1'
					if(result.bool){
						player.logSkill('rejijiang');
						trigger.player.line(player,'fire');
						player.draw();
					}
					else player.storage.counttrigger.rejijiang3--;
				},
			},
			//鲁肃
			olhaoshi:{
				trigger:{player:'phaseDrawBegin2'},
				filter:function(event,player){
					return !event.numFixed;
				},
				check:function(event,player){
					return (player.countCards('h')+2+event.num)<=5||game.hasPlayer(function(target){
						return player!==target&&!game.hasPlayer(function(current){
							return current!==player&&current!==target&&current.countCards('h')<target.countCards('h');
						})&&get.attitude(player,target)>0;
					});
				},
				content:function(){
					trigger.num+=2;
					player.addTempSkill('olhaoshi_give','phaseDrawAfter');
				},
				subSkill:{
					give:{
						trigger:{player:'phaseDrawEnd'},
						forced:true,
						charlotte:true,
						popup:false,
						filter:function(event,player){
							return player.countCards('h')>5;
						},
						content:function(){
							'step 0'
							var targets=game.filterPlayer(function(target){
								return target!=player&&!game.hasPlayer(function(current){
									return current!=player&&current!=target&&current.countCards('h')<target.countCards('h');
								});
							}),num=Math.floor(player.countCards('h')/2);
							player.chooseCardTarget({
								position:'h',
								filterCard:true,
								filterTarget:function(card,player,target){
									return _status.event.targets.includes(target);
								},
								targets:targets,
								selectTarget:targets.length==1?-1:1,
								selectCard:num,
								prompt:'将'+get.cnNumber(num)+'张手牌交给一名手牌数最少的其他角色',
								forced:true,
								ai1:function(card){
									var goon=false,player=_status.event.player;
									for(var i of _status.event.targets){
										if(get.attitude(i,player)>0&&get.attitude(player,i)>0) goon=true;break;
									}
									if(goon){
										if(!player.hasValueTarget(card)||card.name=='sha'&&player.countCards('h',function(cardx){
											return cardx.name=='sha'&&!ui.selected.cards.includes(cardx);
										})>player.getCardUsable('sha')) return 2;
										return Math.max(2,get.value(card)/4);
									}
									return 1/Math.max(1,get.value(card));
								},
								ai2:function(target){
									return get.attitude(_status.event.player,target);
								},
							});
							'step 1'
							if(result.bool){
								var target=result.targets[0];
								player.line(target,'green');
								player.give(result.cards,target);
								player.markAuto('olhaoshi_help',[target]);
								player.addTempSkill('olhaoshi_help',{player:'phaseBeginStart'});
							}
						},
					},
					help:{
						trigger:{target:'useCardToTargeted'},
						direct:true,
						charlotte:true,
						onremove:true,
						filter:function(event,player){
							if(!player.storage.olhaoshi_help||!player.storage.olhaoshi_help.length) return false;
							if(event.card.name!='sha'&&get.type(event.card)!='trick') return false;
							for(var i of player.storage.olhaoshi_help){
								if(i.countCards('h')>0) return true;
							}
							return false;
						},
						content:function(){
							'step 0'
							if(!event.targets) event.targets=player.storage.olhaoshi_help.slice(0).sortBySeat();
							event.target=event.targets.shift();
							event.target.chooseCard('h','好施：是否将一张手牌交给'+get.translation(player)+'？').set('ai',function(card){
								var player=_status.event.player,target=_status.event.getTrigger().player;
								if(!_status.event.goon){
									if(get.value(card,player)<0||get.value(card,target)<0) return 1;
									return 0;
								}
								var cardx=_status.event.getTrigger().card;
								if(card.name=='shan'&&get.tag(cardx,'respondShan')&&target.countCards('h','shan')<player.countCards('h','shan')) return 2;
								if(card.name=='sha'&&(cardx.name=='juedou'||get.tag(card,'respondSha')&&(target.countCards('h','sha')<player.countCards('h','sha')))) return 2;
								if(get.value(card,target)>get.value(card,player)||target.getUseValue(card)>player.getUseValue(card)) return 1;
								if(player.hasSkillTag('noh')) return 0.5/Math.max(1,get.value(card,player));
								return 0;
							}).set('goon',get.attitude(event.target,player)>0);
							'step 1'
							if(result.bool){
								target.logSkill('olhaoshi_help',player);
								target.give(result.cards,player);
							}
							if(targets.length) event.goto(0);
						},
					},
				},
			},
			oldimeng:{
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return game.hasPlayer((current)=>lib.skill.oldimeng.filterTarget(null,player,current));
				},
				selectTarget:2,
				complexTarget:true,
				filterTarget:function(card,player,target){
					if(target==player) return false;
					var ps=player.countCards('he');
					if(!ui.selected.targets.length){
						var hs=target.countCards('h');
						return game.hasPlayer(function(current){
							if(current==player||current==target) return false;
							var cs=current.countCards('h');
							return (hs>0||cs>0)&&Math.abs(hs-cs)<=ps;
						});
					}
					var current=ui.selected.targets[0],hs=target.countCards('h'),cs=current.countCards('h');
					return (hs>0||cs>0)&&Math.abs(hs-cs)<=ps;
				},
				multitarget:true,
				multiline:true,
				content:function(){
					targets[0].swapHandcards(targets[1]);
					var num=Math.abs(targets[0].countCards('h')-targets[1].countCards('h'));
					if(num>0){
						player.addMark('oldimeng_discard',num,false);
						player.addTempSkill('oldimeng_discard','phaseUseAfter');
					}
				},
				ai:{
					threaten:4.5,
					pretao:true,
					nokeep:true,
					order:1,
					expose:0.2,
					result:{
						target:function(player,target){
							if(!ui.selected.targets.length) return -Math.sqrt(target.countCards('h'));
							var h1=ui.selected.targets[0].getCards('h'),h2=target.getCards('h');
							if(h2.length>h1.length) return 0;
							var delval=get.value(h2,target)-get.value(h1,ui.selected.targets[0]);
							if(delval>=0) return 0;
							return -delval*(h1.length-h2.length);
						},
					},
				},
				subSkill:{
					discard:{
						trigger:{player:'phaseUseEnd'},
						forced:true,
						charlotte:true,
						onremove:true,
						filter:function(event,player){
							return player.countCards('he')>0;
						},
						content:function(){
							player.chooseToDiscard('he',true,player.countMark('oldimeng_discard'));
						},
					},
				},
			},
			//贾诩
			rewansha:{
				audio:'wansha',
				audioname:['re_jiaxu','shen_simayi','boss_lvbu3'],
				global:'rewansha_global',
				trigger:{global:'dyingBegin'},
				forced:true,
				logTarget:'player',
				filter:function(event,player){
					return player==_status.currentPhase;
				},
				content:function(){
					game.countPlayer(function(current){
						if(current!=player&&current!=trigger.player) current.addSkillBlocker('rewansha_fengyin');
					});
					player.addTempSkill('rewansha_clear');
				},
				subSkill:{
					global:{
						mod:{
							cardEnabled:function(card,player){
								var source=_status.currentPhase;
								if(card.name=='tao'&&source&&source!=player&&source.hasSkill('rewansha')&&!player.isDying()) return false;
							},
							cardSavable:function(card,player){
								var source=_status.currentPhase;
								if(card.name=='tao'&&source&&source!=player&&source.hasSkill('rewansha')&&!player.isDying()) return false;
							},
						},
					},
					fengyin:{
						inherit:'fengyin',
					},
					clear:{
						trigger:{global:'dyingAfter'},
						forced:true,
						charlotte:true,
						popup:false,
						filter:function(event,player){
							return !_status.dying.length;
						},
						content:function(){
							player.removeSkill('rewansha_clear');
						},
						onremove:function(){
							game.countPlayer2(function(current){
								current.removeSkillBlocker('rewansha_fengyin');
							});
						},
					},
				},
			},
			reluanwu:{
				audio:'luanwu',
				audioname:['re_jiaxu'],
				unique:true,
				enable:'phaseUse',
				limited:true,
				skillAnimation:'epic',
				animationColor:'thunder',
				filterTarget:function(card,player,target){
					return target!=player;
				},
				selectTarget:-1,
				multiline:true,
				contentBefore:function(){
					player.awakenSkill('reluanwu');
				},
				content:function(){
					"step 0"
					target.chooseToUse('乱武：使用一张杀或失去1点体力',function(card){
						if(get.name(card)!='sha') return false;
						return lib.filter.filterCard.apply(this,arguments)
					},function(card,player,target){
						if(player==target) return false;
						var dist=get.distance(player,target);
						if(dist>1){
							if(game.hasPlayer(function(current){
								return current!=player&&get.distance(player,current)<dist;
							})){
								return false;
							}
						}
						return lib.filter.filterTarget.apply(this,arguments)
					}).set('ai2',function(){
						return get.effect_use.apply(this,arguments)-_status.event.effect;
					}).set('effect',get.effect(target,{name:'losehp'},target,target));
					"step 1"
					if(result.bool==false){
						target.loseHp();
					}
				},
				contentAfter:function(){
					player.chooseUseTarget('sha','是否使用一张【杀】？',false,'nodistance');
				},
				ai:{
					order:1,
					result:{
						player:function(player){
							if(lib.config.mode=='identity'&&game.zhu.isZhu&&player.identity=='fan'){
								if(game.zhu.hp==1&&game.zhu.countCards('h')<=2) return 1;
							}
							var num=0;
							var players=game.filterPlayer();
							for(var i=0;i<players.length;i++){
								var att=get.attitude(player,players[i]);
								if(att>0) att=1;
								if(att<0) att=-1;
								if(players[i]!=player&&players[i].hp<=3){
									if(players[i].countCards('h')==0) num+=att/players[i].hp;
									else if(players[i].countCards('h')==1) num+=att/2/players[i].hp;
									else if(players[i].countCards('h')==2) num+=att/4/players[i].hp;
								}
								if(players[i].hp==1) num+=att*1.5;
							}
							if(player.hp==1){
								return -num;
							}
							if(player.hp==2){
								return -game.players.length/4-num;
							}
							return -game.players.length/3-num;
						}
					}
				}
			},
			reweimu:{
				audio:2,
				mod:{
					targetEnabled:function(card){
						if(get.type2(card)=='trick'&&get.color(card)=='black') return false;
					},
				},
				trigger:{player:'damageBegin4'},
				forced:true,
				filter:function(event,player){
					return player==_status.currentPhase;
				},
				content:function(){
					trigger.cancel();
					var num=trigger.num;
					player.draw(2*num);
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(target==_status.currentPhase&&get.tag(card,'damage')) return [0,1];
						},
					},
				},
			},
			//顾雍
			reshenxing:{
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					return player.countCards('he')>=Math.min(2,(player.getStat('skill').reshenxing||0));
				},
				selectCard:function(){
					return Math.min(2,(_status.event.player.getStat('skill').reshenxing||0));
				},
				prompt:function(){
					return '弃置'+get.cnNumber(Math.min(2,(_status.event.player.getStat('skill').reshenxing||0)))+'张牌并摸一张牌';
				},
				check:function(card){
					var num=_status.event.player.countCards('h',{color:get.color(card)});
					if(get.position(card)=='e') num++;
					return (Math.max(4,7.1-num)-get.value(card))/num;
				},
				filterCard:true,
				position:'he',
				content:function(){
					player.draw();
				},
				ai:{
					order:function(item,player){
						if(!player.getStat('skill').reshenxing) return 10;
						return 1;
					},
					result:{player:1},
				},
			},
			rebingyi:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				filterx:function(player){
					var cards=player.getCards('h');
					if(cards.length==1) return true;
					var color=get.color(cards[0],player);
					for(var i=1;i<cards.length;i++){
						if(get.color(cards[i],player)!=color) return false;
					}
					return true;
				},
				filtery:function(player){
					var cards=player.getCards('h');
					if(cards.length==1) return true;
					var color=get.number(cards[0],player);
					for(var i=1;i<cards.length;i++){
						if(get.number(cards[i],player)!=color) return false;
					}
					return true;
				},
				direct:true,
				content:function(){
					"step 0"
					if(lib.skill.rebingyi.filtery(player)) event.draw=true;
					if(lib.skill.rebingyi.filterx(player)){
						player.chooseTarget(get.prompt('xinbingyi'),'展示所有手牌，并选择至多'+get.cnNumber(player.countCards('h'))+'名角色各摸一张牌',[0,player.countCards('h')],function(card,player,target){
							return true;
						}).set('ai',function(target){
							return get.attitude(_status.event.player,target);
						});
					}
					else player.chooseBool(get.prompt('bingyi'),'展示所有手牌').ai=function(){return false};
					"step 1"
					if(result.bool){
						player.logSkill('rebingyi');
						player.showHandcards(get.translation(player)+'发动了【秉壹】');
						event.targets=result.targets;
					}
					else{
						event.finish();
					}
					"step 2"
					if(targets&&targets.length){
						player.line(targets,'green');
						targets.sortBySeat();
						game.asyncDraw(targets);
					}
					else event.finish();
					if(event.draw){
						player.draw();
						event.finish();
					}
					"step 3"
					game.delayx();
				},
			},
			//钟会
			xinquanji:{
				audio:2,
				trigger:{
					player:['damageEnd'],
					global:['gainAfter','loseAsyncAfter'],
				},
				filter:function(event,player){
					if(event.name=='damage') return true;
					if(event.name=='loseAsync'){
						if(event.type!='gain'||event.giver) return false;
						var cards=event.getl(player).cards2;
						return game.hasPlayer(function(current){
							if(current==player) return false;
							var cardsx=event.getg(current);
							for(var i of cardsx){
								if(cards.includes(i)) return true;
							}
							return false;
						});
					}
					if(player==event.player) return false;
					if(event.giver||event.getParent().name=='gift') return false;
					var evt=event.getl(player);
					return evt&&evt.cards2&&evt.cards2.length>0;
				},
				frequent:true,
				content:function(){
					'step 0'
					event.count=(trigger.name=='damage'?trigger.num:1);
					'step 1'
					event.count--;
					player.draw();
					'step 2'
					var hs=player.getCards('h');
					if(hs.length){
						if(hs.length==1) event._result={bool:true,cards:hs};
						else player.chooseCard('h',true,'选择一张手牌作为“权”');
					}
					else event.goto(4);
					'step 3'
					if(result.bool&&result.cards&&result.cards.length){
						player.addToExpansion(result.cards,'giveAuto',player).gaintag.add('xinquanji');
					}
					'step 4'
					if(event.count>0&&player.hasSkill(event.name)&&!get.is.blocked(event.name,player)){
						player.chooseBool(get.prompt2('xinquanji')).set('frequentSkill',event.name);
					}
					else event.finish();
					'step 5'
					if(result.bool){
						player.logSkill('xinquanji');
						event.goto(1);
					}
				},
				locked:false,
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				intro:{
					content:'expansion',
					markcount:'expansion',
				},
				mod:{
					maxHandcard:function(player,num){
						return num+player.getExpansions('xinquanji').length;
					},
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					threaten:0.8,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')&&!target.storage.xinzili){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
								if(!target.hasFriend()) return;
								if(target.hp>=4) return [0.5,get.tag(card,'damage')*2];
								if(!target.hasSkill('xinpaiyi')&&target.hp>1) return [0.5,get.tag(card,'damage')*1.5];
								if(target.hp==3) return [0.5,get.tag(card,'damage')*1.5];
								if(target.hp==2) return [1,get.tag(card,'damage')*0.5];
							}
						}
					}
				}
			},
			xinzili:{
				derivation:'xinpaiyi',
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				juexingji:true,
				skillAnimation:true,
				animationColor:'thunder',
				filter:function(event,player){
					return player.getExpansions('xinquanji').length>2;
				},
				content:function(){
					player.awakenSkill('xinzili');
					player.recover();
					player.draw(2);
					player.loseMaxHp();
					player.addSkills('xinpaiyi');
				},
			},
			xinpaiyi:{
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					return player.getExpansions('xinquanji').length>0&&(!player.hasSkill('xinpaiyi_0')||!player.hasSkill('xinpaiyi_1'))
				},
				chooseButton:{
					check:function(button){
						if(typeof button.link=='object') return 1;
						var player=_status.event.player,num=player.getExpansions('xinquanji').length-1;
						if(button.link==1){
							if(game.countPlayer(function(current){
								return get.damageEffect(current,player,player)>0;
							})<num) return 0.5;
							return 2;
						}
						if(num<2) return 0;
						return 1;
					},
					dialog:function(event,player){
						var dialog=ui.create.dialog('权计','hidden');
						var table=document.createElement('div');
						table.classList.add('add-setting');
						table.style.margin='0';
						table.style.width='100%';
						table.style.position='relative';
						var list=['摸牌','造成伤害'];
						dialog.add([list.map((item,i)=>{
							return [i,item];
						}),'tdnodes']);
						dialog.add(player.getExpansions('xinquanji'));
						return dialog;
					},
					select:2,
					filter:function(button,player){
						if(typeof button.link=='number'&&player.hasSkill('xinpaiyi_'+button.link)) return false;
						if(ui.selected.buttons.length) return (typeof ui.selected.buttons[0].link)!=(typeof button.link);
						return true;
					},
					backup:function(links){
						if(typeof links[0]=='object') links.reverse();
						var next=get.copy(lib.skill['xinpaiyi_backup'+links[0]]);
						next.card=links[1];
						return next;
					},
					prompt:function(links,player){
						if(typeof links[0]=='object') links.reverse();
						var num=get.cnNumber(Math.max(1,player.getExpansions('xinquanji').length-1)),card=get.translation(links[1]);
						if(links[0]==0) return '移去'+card+'并令一名角色摸'+num+'张牌';
						return '移去'+card+'并对至多'+num+'名角色造成1点伤害';
					},
				},
				ai:{
					order:1,
					result:{player:1},
				},
				subSkill:{
					0:{},
					1:{},
					backup0:{
						audio:'xinpaiyi',
						filterCard:()=>false,
						selectCard:-1,
						filterTarget:true,
						delay:false,
						content:function(){
							'step 0'
							player.addTempSkill('xinpaiyi_0','phaseUseEnd');
							var card=lib.skill.xinpaiyi_backup.card;
							player.loseToDiscardpile(card);
							'step 1'
							target.draw(Math.max(1,player.getExpansions('xinquanji').length));
						},
						ai:{
							result:{
								target:function(player,target){
									if(target.hasSkill('nogain')) return 0;
									if(player==target&&!player.needsToDiscard()) return 3;
									return 1;
								},
							},
						},
					},
					backup1:{
						audio:'xinpaiyi',
						filterCard:()=>false,
						selectCard:-1,
						filterTarget:true,
						delay:false,
						multitarget:true,
						multiline:true,
						selectTarget:function(){
							return [1,Math.max(1,_status.event.player.getExpansions('xinquanji').length-1)];
						},
						content:function(){
							'step 0'
							targets.sortBySeat();
							player.addTempSkill('xinpaiyi_1','phaseUseEnd');
							var card=lib.skill.xinpaiyi_backup.card;
							player.loseToDiscardpile(card);
							'step 1'
							for(var i of targets) i.damage();
						},
						ai:{
							tag:{
								damage:1,
							},
							result:{
								target:-1.5,
							},
						},
					},
				},
			},
			//界蔡夫人
			reqieting:{
				audio:2,
				trigger:{global:'phaseEnd'},
				direct:true,
				filter:function(event,player){
					var target=event.player;
					if(player==target) return false;
					if(!target.getHistory('sourceDamage').length){
						var cards=target.getCards('e');
						for(var i of cards){
							if(player.canEquip(i)) return true;
						}
					}
					return target.getHistory('useCard',function(evt){
						return evt.targets&&evt.targets.filter(function(i){
							return i!=target;
						}).length>0;
					}).length==0;
				},
				frequent:true,
				content:function(){
					'step 0'
					var target=trigger.player;
					event.target=target;
					event.logged=false;
					var list=[];
					if(!target.getHistory('sourceDamage').length){
						var cards=target.getCards('e');
						for(var i of cards){
							if(player.canEquip(i)) list.push(i);
						}
					}
					if(list.length){
						player.choosePlayerCard(target,'e',get.prompt('reqieting',target)).set('list',list).set('filterButton',function(button){
							return _status.event.list.includes(button.link);
						}).set('ai',function(button){
							var evt=_status.event,val=get.value(button.link);
							if(evt.target.hasSkillTag('noe')) val-=4;
							if((evt.att>0)==(val>0)) return 0;
							return get.effect(evt.player,button.link,evt.player,evt.player);
						}).set('att',get.attitude(player,target));
					}
					else event.goto(2);
					'step 1'
					if(result.bool){
						player.logSkill('reqieting',target);
						event.logged=true;
						var card=result.links[0];
						target.$give(card,player,false);
						game.delay(0.5);
						player.equip(card);
					}
					if(target.getHistory('useCard',function(evt){
						return evt.targets&&evt.targets.filter(function(i){
							return i!=target;
						}).length>0;
					}).length!=0) event.finish();
					'step 2'
					player.chooseBool('是否发动【窃听】摸一张牌？').set('frequentSkill','reqieting');
					'step 3'
					if(result.bool){
						if(!event.logged) player.logSkill('reqieting',target);
						player.draw();
					}
				},
			},
			rexianzhou:{
				audio:2,
				enable:'phaseUse',
				limited:true,
				skillAnimation:true,
				animationColor:'gray',
				filter:function(event,player){
					return player.countCards('e')>0;
				},
				filterCard:true,
				position:'e',
				selectCard:-1,
				filterTarget:lib.filter.notMe,
				discard:false,
				lose:false,
				delay:false,
				content:function(){
					'step 0'
					player.awakenSkill('rexianzhou');
					player.give(cards,target);
					player.recover(cards.length)
					'step 1'
					var list=game.filterPlayer(function(current){
						return target.inRange(current);
					});
					if(list.length){
						var max=Math.min(list.length,cards.length);
						target.chooseTarget(true,[1,max],'对至多'+get.cnNumber(max)+'名范围内的角色各造成1点伤害',function(card,player,target){
							return _status.event.list.includes(target);
						}).set('list',list).set('ai',function(target){
							var player=_status.event.player;
							return get.damageEffect(target,player,player);
						});
					}
					else event.finish();
					'step 2'
					if(result.bool){
						var targets=result.targets.sortBySeat();
						player.line(targets,'green');
						for(var i of targets) i.damage('nocard');
					}
				},
				ai:{
					order:1,
					result:{
						target:1,
						player:function(player){
							var bool=true,players=game.filterPlayer();
							for(var i=0;i<players.length;i++){
								if(players[i]!=player&&get.attitude(player,players[i])>2&&get.attitude(players[i],player)>2){
									bool=false;break;
								}
							}
							if(bool) return -10;
							if(player.hp==1) return 1;
							if(game.phaseNumber<game.players.length) return -10;
							if(player.countCards('e')+player.hp<=player.maxHp) return 1;
							return -10;
						}
					},
				}
			},
			//界关平
			relongyin:{
				audio:2,
				shaRelated:true,
				init:(player)=>{
					game.addGlobalSkill('relongyin_order');
				},
				onremove:(player)=>{
					if(!game.hasPlayer(current=>current.hasSkill('relongyin'),true)) game.removeGlobalSkill('relongyin_order');
				},
				trigger:{global:'useCard'},
				direct:true,
				filter:function(event,player){
					return event.card.name=='sha'&&player.countCards('he')>0&&event.player.isPhaseUsing();
				},
				content:function(){
					'step 0'
					var go=false;
					if(get.attitude(player,trigger.player)>0){
						if(get.color(trigger.card)=='red'){
							go=true;
						}
						else if(trigger.addCount===false||!trigger.player.isPhaseUsing()) go=false;
						else if(!trigger.player.hasSkill('paoxiao')&&
							!trigger.player.hasSkill('tanlin3')&&
							!trigger.player.hasSkill('zhaxiang2')&&
							!trigger.player.hasSkill('fengnu')&&
							!trigger.player.getEquip('zhuge')){
							var nh=trigger.player.countCards('h');
							if(player==trigger.player){
								go=(player.countCards('h','sha')>0);
							}
							else if(nh>=4){
								go=true;
							}
							else if(player.countCards('h','sha')){
								if(nh==3){
									go=Math.random()<0.8;
								}
								else if(nh==2){
									go=Math.random()<0.5;
								}
							}
							else if(nh>=3){
								if(nh==3){
									go=Math.random()<0.5;
								}
								else if(nh==2){
									go=Math.random()<0.2;
								}
							}
						}
					}
					//AI停顿
					if(go&&!event.isMine()&&!event.isOnline()&&player.hasCard(function(card){
						return get.value(card)<6&&lib.filter.cardDiscardable(card,player,event.name);
					},'he')){
						game.delayx();
					}
					var next=player.chooseToDiscard(get.prompt('longyin'),'弃置一张牌'+(get.color(trigger.card)=='red'?'并摸一张牌':'')+'，令'+get.translation(trigger.player)+'本次使用的【杀】不计入使用次数','he');
					next.logSkill=['relongyin',trigger.player];
					next.set('ai',function(card){
						if(_status.event.go){
							return 6-get.value(card);
						}
						return 0;
					});
					next.set('go',go);
					'step 1'
					if(result.bool){
						if(trigger.addCount!==false){
							trigger.addCount=false;
							trigger.player.getStat().card.sha--;
						}
						if(get.color(trigger.card)=='red'){
							player.draw();
						}
						if(get.number(result.cards[0],player)==get.number(trigger.card)) player.restoreSkill('jiezhong');
					}
				},
				ai:{
					expose:0.2
				},
				subSkill:{
					order:{
						mod:{
							aiOrder:(player,card,num)=>{
								if(num&&card.name==='sha'&&get.color(card)==='red'){
									let gp=game.findPlayer(current=>{
										return current.hasSkill('relongyin')&&current.hasCard(i=>true,'he');
									});
									if(gp) return num+0.15*Math.sign(get.attitude(player,gp));
								}
							}
						},
						trigger:{player:'dieAfter'},
						filter:(event,player)=>{
							return !game.hasPlayer(current=>current.hasSkill('relongyin'),true);
						},
						silent:true,
						forceDie:true,
						charlotte:true,
						content:()=>{
							game.removeGlobalSkill('relongyin_order');
						}
					}
				}
			},
			jiezhong:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				limited:true,
				skillAnimation:true,
				animationColor:'orange',
				filter:function(event,player){
					return player.countCards('h')<player.maxHp;
				},
				content:function(){
					player.awakenSkill('jiezhong');
					player.draw(Math.min(5,player.maxHp-player.countCards('h')));
				},
			},
			//新郭淮
			decadejingce:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				frequent:true,
				filter:function(event,player){
					return player.getHistory('useCard').length>=player.hp;
				},
				content:function(){
					'step 0'
					var list=[],history=player.getHistory('useCard');
					for(var i of history){
						list.add(get.suit(i.card));
						if(list.length>=player.hp) break;
					}
					if(list.length>=player.hp) event.goon=true;
					else player.chooseControl('摸牌阶段','出牌阶段').set('prompt','精策：选择要执行的额外阶段');
					'step 1'
					if(event.goon||result.index==0){
						var next=player.phaseDraw();
						event.next.remove(next);
						trigger.getParent().next.push(next);
					}
					if(event.goon||result.index==1){
						var next=player.phaseUse();
						event.next.remove(next);
						trigger.getParent().next.push(next);
					}
				},
			},
			//新于禁
			decadezhenjun:{
				audio:2,
				trigger:{
					player:['phaseZhunbeiBegin','phaseJieshuBegin']
				},
				filter:function (event,player){
					return game.hasPlayer(function(current){
						return current.countCards('he')>0;
					});
				},
				direct:true,
				content:function (){
					'step 0'
					player.chooseTarget(get.prompt2('decadezhenjun'),function(card,player,target){
						return target.countCards('he')>0;
					}).set('ai',function(target){
						return -get.attitude(_status.event.player,target)*(target.countCards('e')+1);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						var num=Math.max(target.countCards('h')-target.hp,1);
						player.logSkill('decadezhenjun',target);
						player.discardPlayerCard(num,target,true);
					}
					'step 2'
					if(result.cards&&result.cards.length){
						for(var i=0;i<result.cards.length;i++){
							if(get.type(result.cards[i])=='equip'){
								event.finish();
								return;
							}
						}
						event.num=result.cards.length;
						if(event.num>0){
							var prompt='弃置一张牌，或令'+get.translation(event.target)+'摸'+get.cnNumber(event.num)+'张牌';
							player.chooseToDiscard(prompt,'he').ai=function(card){
								return 7-get.value(card);
							}
						}
						else event.finish();
					}
					else event.finish();
					'step 3'
					if(!result.bool){
						event.target.draw(event.num);
					}
				},
			},
			//界姜维
			oltiaoxin:{
				audio:'tiaoxin',
				audioname:['sp_jiangwei','xiahouba','re_jiangwei','gz_jiangwei','ol_jiangwei'],
				enable:'phaseUse',
				usable:2,
				filter:function(event,player){
					if(player.getStat('skill').oltiaoxin) return !player.hasSkill('oltiaoxin2');
					return true;
				},
				filterTarget:function(card,player,target){
					return target!=player&&target.inRange(player)&&target.countCards('he')>0;
				},
				content:function(){
					"step 0"
					target.chooseToUse(function(card,player,event){
						if(get.name(card)!='sha') return false;
						return lib.filter.filterCard.apply(this,arguments);
					},'挑衅：对'+get.translation(player)+'使用一张杀，或令其弃置你的一张牌').set('targetRequired',true).set('complexSelect',true).set('filterTarget',function(card,player,target){
						if(target!=_status.event.sourcex&&!ui.selected.targets.includes(_status.event.sourcex)) return false;
						return lib.filter.filterTarget.apply(this,arguments);
					}).set('sourcex',player);
					"step 1"
					if(result.bool&&player.getHistory('damage',function(evt){
						return evt.getParent().type=='card'&&evt.getParent(4)==event;
					}).length>0) player.addTempSkill('oltiaoxin2','phaseUseEnd');
					else if(target.countDiscardableCards(player,'he')>0) player.discardPlayerCard(target,'he',true).boolline=true;
				},
				ai:{
					order:4,
					expose:0.2,
					result:{
						target:-1,
						player:function(player,target){
							if(target.countCards('h')==0) return 0;
							if(target.countCards('h')==1) return -0.1;
							if(player.hp<=2) return -2;
							if(player.countCards('h','shan')==0) return -1;
							return -0.5;
						}
					},
					threaten:1.1
				}
			},
			oltiaoxin2:{},
			olzhiji:{
				skillAnimation:true,
				animationColor:'fire',
				audio:2,
				unique:true,
				juexingji:true,
				//priority:-10,
				derivation:'reguanxing',
				trigger:{player:['phaseZhunbeiBegin','phaseJieshuBegin']},
				forced:true,
				filter:function(event,player){
					if(player.storage.zhiji) return false;
					return player.countCards('h')==0;
				},
				content:function(){
					"step 0"
					player.awakenSkill('olzhiji');
					player.chooseDrawRecover(2,true);
					"step 1"
					player.loseMaxHp();
					player.addSkills('reguanxing');
				}
			},
			//界郭图张嶷
			rejigong:{
				audio:2,
				direct:true,
				trigger:{player:'phaseUseBegin'},
				content:function(){
					'step 0'
					player.chooseControl('一张','两张','三张','cancel2').set('prompt',get.prompt2('rejigong')).set('ai',()=>'三张');
					'step 1'
					if(result.control!='cancel2'){
						player.logSkill('rejigong');
						player.addTempSkill('rejigong2');
						player.draw(1+result.index);
					}
				},
			},
			rejigong2:{
				audio:'rejigong',
				mod:{
					maxHandcardBase:function(player){
						if(game.online) return (player.getStat('damage')||0);
						var num=0;
						player.getHistory('sourceDamage',function(evt){
							num+=evt.num;
						});
						return num;
					},
				},
				trigger:{player:'phaseDiscardBegin'},
				forced:true,
				charlotte:true,
				filter:function(event,player){
					if(player.isHealthy()) return false;
					var num=0;
					player.getHistory('sourceDamage',function(evt){
						num+=evt.num;
					});
					if(!num) return false;
					var num2=0;
					player.getHistory('gain',function(evt){
						var evtx=evt.getParent(2);
						if(evtx.name=='rejigong'&&evtx.player==player) num2+=evt.cards.length;
					});
					return num>=num2;
				},
				content:function(){
					player.recover();
				},
			},
			reshizhi:{
				mod:{
					cardname:function(card,player){
						if(card.name=='shan'&&player.hp==1) return 'sha';
					},
				},
				trigger:{source:'damageEnd'},
				forced:true,
				filter:function(event,player){
					return event.card&&event.card.name=='sha'&&player.hp==1&&
					event.cards&&event.cards.length==1&&event.cards[0].name=='shan';
				},
				content:function(){
					player.recover();
				},
			},
			//界陈群
			redingpin:{
				audio:2,
				enable:'phaseUse',
				onChooseToUse:function(event){
					if(event.type!='phase'||game.online) return;
					var list=[],player=event.player;
					player.getHistory('useCard',function(evt){
						list.add(get.type2(evt.card));
					});
					player.getHistory('lose',function(evt){
						if(evt.type!='discard'||evt.getParent(2).redingpin_ignore) return;
						for(var i of evt.cards2){
							list.add(get.type2(i,evt.hs.includes(i)?player:false));
						}
					})
					event.set('redingpin_types',list);
				},
				filter:function(event,player){
					var list=event.redingpin_types||[];
					return player.countCards('he',function(card){
						return !list.includes(get.type2(card));
					})>0;
				},
				filterCard:function(card){
					var list=_status.event.redingpin_types||[];
					return !list.includes(get.type2(card));
				},
				position:'he',
				filterTarget:function(card,player,target){
					return !target.hasSkill('redingpin2');
				},
				content:function(){
					'step 0'
					target.judge(function(card){
						var evt=_status.event.getParent('redingpin'),suit=get.suit(card);
						switch(suit){
							case 'club':case 'spade':return evt.target.hp;
							case 'diamond':return get.sgn(get.attitude(evt.target,evt.player))*-3;
						}
						return 0;
					}).judge2=function(result){
						if(result.color=='black') return true;
						return false;
					};
					'step 1'
					switch(result.suit){
						case 'spade':case 'club':
							if(target.hp>0) target.draw(Math.min(3,target.hp));
							target.addTempSkill('redingpin2');
							break;
						case 'heart':
							event.getParent().redingpin_ignore=true;
							break;
						case 'diamond':
							player.turnOver();
							break;
					}
				},
				ai:{
					order:9,
					result:{
						target:function(player,target){
							if(player.isTurnedOver()) return target.hp;
							var card=ui.cardPile.firstChild;
							if(!card) return;
							if(get.color(card)=='black') return target.hp;
							return 0;
						},
					},
				},
			},
			redingpin2:{charlotte:true},
			refaen:{
				audio:2,
				audioname:['dc_chenqun'],
				trigger:{global:['turnOverAfter','linkAfter']},
				logTarget:'player',
				filter:function(event,player){
					if(event.name=='link') return event.player.isLinked();
					return true;
				},
				check:function(event,player){
					return get.attitude(player,event.player)>0;
				},
				content:function(){
					trigger.player.draw();
				},
			},
			dcfaen:{
				audio:'refaen',
				audioname:['dc_chenqun'],
				trigger:{global:['turnOverAfter','linkAfter']},
				logTarget:'player',
				filter:function(event,player){
					if(event.name=='link') return event.player.isLinked();
					return !event.player.isTurnedOver();
				},
				check:function(event,player){
					return get.attitude(player,event.player)>0;
				},
				content:function(){
					trigger.player.draw();
				},
			},
			//界曹彰
			xinjiangchi:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				direct:true,
				content:function(){
					'step 0'
					var list=[
						'摸一张牌',
						'摸两张牌，本回合内不能使用或打出【杀】',
					];
					if(player.countCards('he',function(card){
						return lib.filter.cardDiscardable(card,player,'xinjiangchi')>0;
					})>0) list.push('弃置一张牌，本回合可以多使用一张【杀】且无距离限制');
					player.chooseControl('cancel2').set('prompt',get.prompt('xinjiangchi')).set('choiceList',list).set('ai',function(){
						var player=_status.event.player;
						if(!player.countCards('hs',function(card){
							return get.name(card)=='sha'&&player.hasValueTarget(card,false);
						})) return 1;
						return 0;
					});
					'step 1'
					if(result.control!='cancel2'){
						player.logSkill('xinjiangchi');
						switch(result.index){
							case 0:{
								player.draw();
								break;
							}
							case 1:{
								player.draw(2);
								player.addTempSkill('xinjiangchi_less');
								break;
							}
							case 2:{
								player.chooseToDiscard('he',true);
								player.addTempSkill('xinjiangchi_more');
								break;
							}
						}
					}
				},
				subSkill:{
					less:{
						mod:{
							cardEnabled:function(card){
								if(card.name=='sha') return false;
							},
							cardRespondable:function(card){
								if(card.name=='sha') return false;
							},
						},
						charlotte:true,
					},
					more:{
						mod:{
							cardUsable:function(card,player,num){
								if(card.name=='sha') return num+1;
							},
							targetInRange:function(card){
								if(card.name=='sha') return true;
							},
						},
						charlotte:true,
					},
				},
			},
			//界周仓和程普
			ollihuo:{
				mod:{
					aiOrder:function(player,card,num){
						if(card.name=='sha'&&!player.getHistory('useCard').length) return num+7;
					},
				},
				trigger:{player:'useCard1'},
				filter:function(event,player){
					if(event.card.name=='sha'&&!game.hasNature(event.card)) return true;
					return false;
				},
				audio:'lihuo',
				locked:false,
				prompt2:function(event){
					return '将'+get.translation(event.card)+'改为火属性';
				},
				audioname:['re_chengpu'],
				check:function(event,player){
					return (event.baseDamage>1||player.getHistory('useCard').indexOf(event)==0)&&(player.hp>1||player.getExpansions('rechunlao').length)&&game.hasPlayer(function(current){
						return !event.targets.includes(current)&&player.canUse(event.card,current)
						&&get.attitude(player,current)<0&&!current.hasShan()
						&&get.effect(current,{name:'sha',nature:'fire'},player,player)>0;
					});
				},
				content:function(){
					game.setNature(trigger.card,'fire');
					trigger.lihuo_changed=true;
				},
				group:['ollihuo2','ollihuo3','ollihuo4'],
				ai:{
					fireAttack:true,
				},
			},
			ollihuo2:{
				trigger:{player:'useCard2'},
				filter:function(event,player){
					if(event.card.name!='sha'||!game.hasNature(event.card,'fire')) return false;
					return game.hasPlayer(function(current){
						return !event.targets.includes(current)&&lib.filter.targetEnabled(event.card,player,current)&&lib.filter.targetInRange(event.card,player,current);
					});
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('ollihuo'),'为'+get.translation(trigger.card)+'增加一个目标',function(card,player,target){
						return !_status.event.sourcex.includes(target)&&lib.filter.targetInRange(_status.event.card,player,target)&&lib.filter.targetEnabled(_status.event.card,player,target);
					}).set('sourcex',trigger.targets).set('card',trigger.card).set('ai',function(target){
						var player=_status.event.player;
						return get.effect(target,_status.event.card,player,player);
					});
					'step 1'
					if(result.bool){
						if(!event.isMine()&&!_status.connectMode) game.delayx();
						event.target=result.targets[0];
					}
					else{
						event.finish();
					}
					'step 2'
					player.logSkill('ollihuo',event.target);
					trigger.targets.push(event.target);
				},
			},
			ollihuo3:{
				trigger:{player:'useCardEnd'},
				filter:function(event,player){
					return event.lihuo_changed==true&&player.getHistory('sourceDamage',function(evt){
						return evt.card==event.card;
					}).length>0;
				},
				forced:true,
				audio:'lihuo',
				audioname:['re_chengpu'],
				content:function(){
					player.loseHp();
				}
			},
			ollihuo4:{
				trigger:{player:'useCardAfter'},
				frequent:true,
				audio:'lihuo',
				audioname:['re_chengpu'],
				filter:function(event,player){
					return event.card.name=='sha'&&player.getHistory('useCard').indexOf(event)==0&&event.cards.filterInD().length>0;
				},
				content:function(){
					var cards=trigger.cards.filterInD();
					player.addToExpansion('gain2',cards).gaintag.add('rechunlao');
				},
			},
			rezhongyong:{
				trigger:{player:'useCardAfter'},
				audio:2,
				direct:true,
				filter:function(event,player){
					return event.card.name=='sha';
				},
				content:function(){
					"step 0"
					event.cards=trigger.cards.filterInD();
					game.countPlayer2(function(current){
						current.getHistory('useCard',function(evt){
							if(evt.card.name=='shan'&&evt.getParent(3)==trigger) event.cards.addArray(evt.cards.filterInD('od'));
						});
					});
					if(!event.cards.length) event.finish();
					player.chooseTarget(get.prompt2('rezhongyong'),'令一名其他角色获得'+get.translation(event.cards),function(card,player,target){
						return !_status.event.source.includes(target)&&target!=player;
					}).set('ai',function(target){
						return get.attitude(_status.event.player,target);
					}).set('source',trigger.targets);
					"step 1"
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('rezhongyong',target);
						target.gain(cards,'gain2');
						var red=false,black=false;
						for(var i of cards){
							var color=get.color(i,false);
							if(color=='red') red=true;
							if(color=='black') black=true;
							if(red&&black) break;
						}
						if(red) target.chooseToUse('是否使用一张杀？',{name:'sha'}).set('filterTarget',function(card,player,target){
							return target!=_status.event.sourcex&&_status.event.sourcex.inRange(target)&&lib.filter.targetEnabled.apply(this,arguments);
						}).set('sourcex',player).set('addCount',false);
						if(black) target.draw();
					}
				}
			},
			//长标
			changbiao:{
				audio:2,
				mod:{
					targetInRange:function(card,player,target){
						if(card.changbiao) return true;
					},
				},
				enable:'phaseUse',
				usable:1,
				viewAs:{
					name:'sha',
					changbiao:true,
				},
				locked:false,
				filter:function(event,player){
					return player.countCards('hs')>0;
				},
				filterCard:true,
				selectCard:[1,Infinity],
				position:'hs',
				check:function(card){
					let player = _status.event.player;
					if (ui.selected.cards.length) {
						let list = game.filterPlayer(function (current) {
							return current !== player && player.canUse('sha', current, false) && get.effect(current, {name: 'sha'}, player, player) > 0;
						}).sort(function (a, b) {
							return get.effect(b, {name: 'sha'}, player, player) - get.effect(a, {name: 'sha'}, player, player);
						});
						if (!list.length) return 0;
						let target = list[0],
							cards = ui.selected.cards.concat([card]),
							color = [];
						for (let i of cards) {
							if (!color.includes(get.color(i, player))) color.add(get.color(i, player));
						}
						if (color.length !== 1) color[0] = 'none';
						if (player.hasSkillTag(
							'directHit_ai',
							true,
							{
								target: target,
								card: {name: 'sha', suit: 'none', color: color[0], cards: cards, isCard: true}
							},
							true
						)) return 6.5 - get.value(card, player);
						if (Math.random() * target.countCards('hs') < 1 || player.needsToDiscard(0,(i,player)=>{
							return !ui.selected.cards.includes(i)&&!player.canIgnoreHandcard(i);
						})) return 6 - get.value(card, player);
						return 0;
					}
					return 6.3 - get.value(card);
				},
				onuse:function(result,player){
					player.addTempSkill('changbiao_draw');
				},
				subSkill:{
					draw:{
						trigger:{player:'phaseUseEnd'},
						forced:true,
						charlotte:true,
						filter:function(event,player){
							return player.getHistory('sourceDamage',function(evxt){
								var evt=evxt.getParent();
								return evt&&evt.name=='sha'&&evt.skill=='changbiao'&&evt.getParent('phaseUse')==event;
							}).length>0;
						},
						content:function(){
							var num=0;
							player.getHistory('sourceDamage',function(evxt){
								var evt=evxt.getParent();
								if(evt&&evt.name=='sha'&&evt.skill=='changbiao'&&evt.getParent('phaseUse')==trigger) num+=evt.cards.length;
							});
							player.draw(num);
						},
					},
				},
				ai:{
					order:function(item,player){
						return get.order({name:'sha'},player)+0.3*(Math.min(player.getCardUsable('sha'),player.countCards('hs','sha')+player.hasCard(function(card){
							return card.name!='sha'&&get.value(card,player)<6.3;
						},'hs')?1:0)>1?-1:1);
					},
					nokeep:true,
					skillTagFilter:function(player,tag,arg){
						if(tag==='nokeep'){
							let num=0;
							if(arg&&(!arg.card||get.name(arg.card)!=='tao')) return false;
							player.getHistory('sourceDamage',function(evxt){
								let evt=evxt.getParent();
								if(evt&&evt.name=='sha'&&evt.skill=='changbiao') num+=evt.cards.length;
							});
							return player.needsToDiscard(num)>0;
						}
					}
				},
			},
			//国钟会
			gzquanji:{
				audio:2,
				trigger:{
					player:'damageEnd',
					source:'damageSource',
				},
				frequent:true,
				preHidden:true,
				filter:function(event,player,name){
					//if(name=='damageEnd') return true;
					//if(!event.card) return false;
					if(player.hasHistory('useSkill',function(evt){
						return evt.skill=='gzquanji'&&evt.event.triggername==name;
					})) return false;
					return true;
				},
				content:function(){
					'step 0'
					player.draw();
					'step 1'
					var hs=player.getCards('he');
					if(hs.length>0){
						if(hs.length==1) event._result={bool:true,cards:hs};
						else player.chooseCard('he',true,'选择一张牌作为“权”');
					}
					else event.finish();
					'step 2'
					if(result.bool){
						var cs=result.cards;
						player.addToExpansion(cs,player,'give').gaintag.add('gzquanji');
					}
				},
				intro:{
					content:'expansion',
					markcount:'expansion',
				},
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				locked:false,
				mod:{
					maxHandcard:function(player,num){
						return num+player.getExpansions('gzquanji').length;
					},
				},
			},
			gzpaiyi:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.getExpansions('gzquanji').length>0;
				},
				chooseButton:{
					dialog:function(event,player){
						return ui.create.dialog('排异',player.getExpansions('gzquanji'),'hidden')
					},
					backup:function(links,player){
						return {
							audio:'gzpaiyi',
							filterTarget:true,
							filterCard:function(){return false},
							selectCard:-1,
							card:links[0],
							delay:false,
							content:lib.skill.gzpaiyi.contentx,
							ai:{
								order:10,
								result:{
									target:function(player,target){
										if(target!=player) return 0;
										if(player.getExpansions('gzquanji').length<=1||(player.needsToDiscard()&&!player.getEquip('zhuge')&&!player.hasSkill('new_paoxiao'))) return 0;
										return 1;
									}
								},
							},
						}
					},
					prompt:function(){return '请选择【排异】的目标'},
				},
				contentx:function(){
					"step 0"
					var card=lib.skill.gzpaiyi_backup.card;
					player.loseToDiscardpile(card);
					"step 1"
					var num=player.getExpansions('gzquanji').length;
					if(num>0) target.draw(Math.min(7,num));
					"step 2"
					if(target.countCards('h')>player.countCards('h')){
						target.damage();
					}
				},
				ai:{
					order:function(item,player){
						var num=player.getExpansions('gzquanji').length;
						if(num==1) return 8;
						return 1;
					},
					result:{
						player:1,
					},
				},
			},
			gzquanji2:{charlotte:true},
			xingongji:{
				enable:'phaseUse',
				usable:1,
				audio:2,
				position:'he',
				filterCard:true,
				filter:function(event,player){
					return player.countCards('he')>0;
				},
				check:function(card){
					var base=0,player=_status.event.player,suit=get.suit(card,player),added=false,added2=false,added3;
					if(get.type(card)=='equip'&&game.hasPlayer(function(target){
						var att=get.attitude(player,target);
						if(att>=0) return 0;
						if(target.countCards('he',function(card){
							return get.value(card)>5;
						})) return -att;
					})) base+=6;
					var hs=player.getCards('h');
					var muniu=player.getEquip('muniu');
					if(muniu&&card!=muniu&&muniu.cards) hs=hs.concat(muniu.cards);
					for(var i of hs){
						if(i!=card&&get.name(i)=='sha'){
							if(get.suit(i,player)==suit){
								if(player.hasValueTarget(i,false)){
									added3=true;
									base+=5.5;
								}
							}
							else{
								if(player.hasValueTarget(i,false)) added2=true;
								if(!added&&!player.hasValueTarget(i,null,true)&&player.hasValueTarget(i,false,true)){
									base+=4;
									added=true;
								}
							}
						}
					}
					if(added3&&!added2) base-=4.5;
					return base-get.value(card);
				},
				content:function(){
					"step 0"
					if(!player.storage.xingongji2) player.storage.xingongji2=[];
					player.storage.xingongji2.add(get.suit(cards[0],player));
					player.addTempSkill('xingongji2');
					"step 1"
					if(get.type(cards[0],null,cards[0].original=='h'?player:false)=='equip'){
						player.chooseTarget('是否弃置一名角色的一张牌？',function(card,player,target){
							return player!=target&&target.countCards('he')>0;
						}).set('ai',function(target){
							var att=get.attitude(player,target);
							if(att>=0) return 0;
							if(target.countCards('he',function(card){
								return get.value(card)>5;
							})) return -att;
							return -att*0.8;
						});
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						player.line(result.targets,'green');
						player.discardPlayerCard(result.targets[0],'he',true);
					}
				},
				ai:{
					order:4.5,
					result:{
						player:1
					}
				}
			},
			xingongji2:{
				charlotte:true,
				onremove:true,
				mod:{
					attackRangeBase:function(){
						return Infinity;
					},
					cardUsable:function(card,player){
						if(card.name=='sha'){
							const suit = get.suit(card);
							return suit === 'unsure' || player.storage.xingongji2.includes(suit);
						}
					},
					aiOrder:function(player,card,num){
						if(get.name(card)=='sha'&&!player.storage.xingongji2.includes(get.suit(card))) return num+1;
					},
				},
				mark:true,
				intro:{
					content:'使用$花色的杀无次数限制',
				},
			},
			xinjiefan:{
				skillAnimation:true,
				animationColor:'wood',
				audio:2,
				unique:true,
				limited:true,
				enable:'phaseUse',
				filterTarget:true,
				content:function(){
					"step 0"
					player.awakenSkill('xinjiefan');
					event.players=game.filterPlayer(function(current){
						return current!=target&&current.inRange(target);
					});
					event.players.sortBySeat();
					"step 1"
					if(event.players.length){
						event.current=event.players.shift();
						event.current.addTempClass('target');
						player.line(event.current,'green');
						if(event.current.countCards('he')&&target.isIn()){
							event.current.chooseToDiscard({subtype:'equip1'},'he','弃置一张武器牌或让'+
							get.translation(target)+'摸一张牌').set('ai',function(card){
								if(get.attitude(_status.event.player,_status.event.target)<0) return 7-get.value(card);
								return -1;
							}).set('target',target);
							event.tempbool=false;
						}
						else{
							event.tempbool=true;
						}
					}
					else{
						if(game.roundNumber<=1) player.addTempSkill('xinjiefan2');
						event.finish();
					}
					"step 2"
					if(event.tempbool||result.bool==false){
						target.draw();
					}
					event.goto(1);
				},
				ai:{
					order:5,
					result:{
						target:function(player,target){
							if(player.hp>2&&game.roundNumber>1){
								if(game.phaseNumber<game.players.length*2) return 0;
							}
							var num=0,players=game.filterPlayer();
							for(var i=0;i<players.length;i++){
								if(players[i]!=target&&players[i].inRange(target)){
									num++;
								}
							}
							return num;
						}
					}
				}
			},
			xinjiefan2:{
				trigger:{player:'phaseEnd'},
				forced:true,
				popup:false,
				content:function(){
					player.restoreSkill('xinjiefan');
				},
			},
			residi:{
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				audio:2,
				filter:function(event,player){
					return player.countCards('he',function(card){
						if(_status.connectMode) return true;
						return get.type(card)!='basic';
					})>0;
				},
				content:function(){
					'step 0'
					player.chooseCard('he',get.prompt('residi'),'将一张非基本牌置于武将牌上作为“司”',function(card,player){
						return get.type(card)!='basic';
					}).set('ai',function(card){
						if(get.position(card)=='e') return 5+player.hp-get.value(card);
						return 7-get.value(card);
					});
					'step 1'
					if(result.bool){
						player.logSkill('residi');
						player.addToExpansion(result.cards,'give',player).gaintag.add('residi');
					}
				},
				intro:{
					content:'expansion',
					markcount:'expansion',
				},
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				group:'residi_push',
				ai:{notemp:true},
			},
			residi_push:{
				trigger:{global:'phaseUseBegin'},
				direct:true,
				filter:function(event,player){
					return event.player!=player&&player.getExpansions('residi').length>0;
				},
				content:function(){
					'step 0'
					player.chooseButton([get.prompt('residi',trigger.player),player.getExpansions('residi')]).set('ai',function(button){
						var player=_status.event.player;
						var target=_status.event.getTrigger().player;
						if(get.attitude(player,target)>-1) return 0;
						var card=button.link;
						var color=get.color(button.link,false);
						var eff=target.countCards('h',function(card){
							return get.color(card,target)==color&&target.hasValueTarget(card);
						});
						if(!target.countCards('h',function(card){
							return get.color(card,target)==color&&get.name(card,target)=='sha'&&target.hasValueTarget(card);
						})) eff+=1.5;
						if(!target.countCards('h',function(card){
							return get.color(card,target)==color&&get.type2(card,target)=='trick'&&target.hasValueTarget(card);
						})) eff+=1.5;
						return eff-1;
					});
					'step 1'
					if(result.bool){
						if(!trigger.residi) trigger.residi=[];
						trigger.residi.push(player);
						var card=result.links[0];
						var target=trigger.player;
						player.logSkill('residi',target);
						player.loseToDiscardpile(card);
						var color=get.color(card,false);
						if(!target.storage.residi2) target.storage.residi2=[];
						target.storage.residi2.add(color);
						target.addTempSkill('residi2','phaseUseAfter');
						target.markSkill('residi2');
						player.addTempSkill('residi3','phaseUseAfter');
					}
				},
			},
			residi2:{
				onremove:true,
				mod:{
					cardEnabled:function(card,player){
						if(player.getStorage('residi2').includes(get.color(card,player))) return false;
					},
					cardRespondable:function(card,player){
						if(player.getStorage('residi2').includes(get.color(card,player))) return false;
					},
					cardSavable:function(card,player){
						if(player.getStorage('residi2').includes(get.color(card,player))) return false;
					},
				},
				intro:{
					content:'不能使用或打出$牌',
				},
				marktext:'敌',
			},
			residi3:{
				audio:'residi',
				trigger:{global:'phaseUseEnd'},
				forced:true,
				filter:function(event,player){
					if(!event.residi||!event.residi.includes(player)) return false;
					var sha=(player.canUse('sha',event.player,false)),trick=true;
					event.player.getHistory('useCard',function(evt){
						if(evt.getParent('phaseUse')!=event) return false;
						if(sha&&evt.card.name=='sha') sha=false;
						if(trick&&get.type2(evt.card,false)=='trick') trick=false;
					});
					return sha||trick;
				},
				content:function(){
					var sha=(player.canUse('sha',trigger.player,false)),trick=true;
					trigger.player.getHistory('useCard',function(evt){
						if(evt.getParent('phaseUse')!=trigger) return false;
						if(sha&&evt.card.name=='sha') sha=false;
						if(trick&&get.type2(evt.card,false)=='trick') trick=false;
					});
					if(sha) player.useCard({name:'sha',isCard:true},trigger.player);
					if(trick) player.draw(2);
				},
			},
			rehuaiyi:{
				audio:2,
				enable:'phaseUse',
				usable:2,
				delay:false,
				filter:function(event,player){
					return player.countCards('h')>0&&(!player.getStat('skill').rehuaiyi||player.hasSkill('rehuaiyi2'));
				},
				content:function(){
					'step 0'
					player.showHandcards();
					if(get.color(player.getCards('h'))!='none'){
						player.draw();
						player.addTempSkill('rehuaiyi2','phaseUseEnd');
						event.finish();
					}
					'step 1'
					player.chooseControl('红色','黑色').set('ai',function(){
						var player=_status.event.player;
						if(player.countCards('h',{color:'red'})==1&&
						player.countCards('h',{color:'black'})>1) return '红色';
						return '黑色';
					});
					'step 2'
					event.control=result.control;
					var cards;
					if(event.control=='红色'){
						cards=player.getCards('h',{color:'red'});
					}
					else{
						cards=player.getCards('h',{color:'black'});
					}
					player.discard(cards);
					event.num=cards.length;
					'step 3'
					player.chooseTarget('请选择至多'+get.cnNumber(event.num)+'名有牌的其他角色，获得这些角色的各一张牌。',[1,event.num],function(card,player,target){
						return target!=player&&target.countCards('he')>0;
					}).set('ai',function(target){
						return -get.attitude(_status.event.player,target)+0.5;
					});
					'step 4'
					if(result.bool&&result.targets){
						player.line(result.targets,'green');
						event.targets=result.targets;
						event.targets.sort(lib.sort.seat);
						event.gained=0;
					}
					else{
						event.finish();
					}
					'step 5'
					if(player.isIn()&&event.targets.length){
						player.gainPlayerCard(event.targets.shift(),'he',true);
					}
					else event.finish();
					'step 6'
					if(result.bool){
						event.gained+=result.cards.length;
					}
					if(event.targets.length) event.goto(5);
					'step 7'
					if(event.gained>1) player.loseHp();
				},
				ai:{
					order:function(item,player){
						if(player.countCards('h',{color:'red'})==0) return 10;
						if(player.countCards('h',{color:'black'})==0) return 10;
						return 1;
					},
					result:{
						player:1
					}
				}
			},
			rehuaiyi2:{},
			rezhuikong:{
				audio:2,
				trigger:{global:'phaseZhunbeiBegin'},
				check:function(event,player){
					if(get.attitude(player,event.player)<-2){
						var cards=player.getCards('h');
						if(cards.length>player.hp) return true;
						for(var i=0;i<cards.length;i++){
							var useful=get.useful(cards[i]);
							if(useful<5) return true;
							if(get.number(cards[i])>7&&useful<7) return true;
						}
					}
					return false;
				},
				logTarget:'player',
				filter:function(event,player){
					return player.hp<player.maxHp&&player.canCompare(event.player);
				},
				content:function(){
					"step 0"
					player.chooseToCompare(trigger.player).set('small',(player.hp>1&&get.effect(player,{name:'sha'},trigger.player,player)>0&&Math.random()<0.9));
					"step 1"
					if(result.bool){
						trigger.player.addTempSkill('zishou2');
						event.finish();
					}
					else if(result.target&&get.position(result.target)=='d') player.gain(result.target,'gain2','log');
					"step 2"
					var card={name:'sha',isCard:true};
					if(trigger.player.canUse(card,player,false)) trigger.player.useCard(card,player,false);
				},
			},
			reqiuyuan:{
				audio:2,
				trigger:{target:'useCardToTarget'},
				direct:true,
				filter:function(event,player){
					return event.card.name=='sha'&&game.hasPlayer(function(current){
						return current!=player&&!event.targets.includes(current)&&lib.filter.targetEnabled(event.card,event.player,current);
					});
				},
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt2('reqiuyuan'),function(card,player,target){
						var evt=_status.event.getTrigger();
						return target!=player&&!evt.targets.includes(target)&&lib.filter.targetEnabled(evt.card,evt.player,target);
					}).set('ai',function(target){
						var trigger=_status.event.getTrigger();
						var player=_status.event.player;
						return get.effect(target,trigger.card,trigger.player,player)+0.1;
					});
					"step 1"
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('reqiuyuan',target);
						event.target=target;
						target.chooseCard(function(card,player){
							var name=get.name(card,player);
							return name!='sha'&&get.type(name)=='basic';
						},'h','交给'+get.translation(player)+
						'一张不为【杀】的基本牌，或成为此杀的额外目标且不可响应此【杀】').set('ai',function(card){
							return get.attitude(target,_status.event.sourcex)>=0?1:-1;
						}).set('sourcex',player);
						game.delay();
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						target.give(result.cards,player);
						game.delay();
					}
					else{
						trigger.getParent().targets.push(event.target);
						trigger.getParent().triggeredTargets2.push(event.target);
						trigger.directHit.push(event.target);
						game.log(event.target,'成为了',trigger.card,'的额外目标');
					}
				},
				ai:{
					expose:0.2,
					effect:{
						target:function(card,player,target){
							if(card.name!='sha') return;
							var players=game.filterPlayer();
							if(get.attitude(player,target)<=0){
								for(var i=0;i<players.length;i++){
									var target2=players[i];
									if(player!=target2&&target!=target2&&player.canUse(card,target2,false)&&
										get.effect(target2,{name:'shacopy',nature:card.nature,suit:card.suit},player,target)>0&&
										get.effect(target2,{name:'shacopy',nature:card.nature,suit:card.suit},player,player)<0){
										if(target.hp==target.maxHp) return 0.3;
										return 0.6;
									}
								}
							}
							else{
								for(var i=0;i<players.length;i++){
									var target2=players[i];
									if(player!=target2&&target!=target2&&player.canUse(card,target2,false)&&
										get.effect(target2,{name:'shacopy',nature:card.nature,suit:card.suit},player,player)>0){
										if(player.canUse(card,target2)) return;
										if(target.hp==target.maxHp) return [0,1];
										return [0,0];
									}
								}
							}
						}
					}
				}
			},
			reenyuan:{
				audio:2,
				group:['reenyuan1','reenyuan2'],
			},
			reenyuan1:{
				audio:'reenyuan',
				trigger:{player:'gainEnd'},
				filter:function(event,player){
					if(!event.source||event.source==player||!event.source.isIn()||event.cards.length<2) return false;
					var evt=event.getl(event.source);
					return evt&&evt.cards2&&evt.cards2.length>1;
				},
				check:function(event,player){
					return get.attitude(player,event.source)>0;
				},
				logTarget:'source',
				prompt2:'令该角色摸一张牌',
				content:function(){
					trigger.source.draw();
				},
			},
			reenyuan2:{
				audio:'reenyuan',
				trigger:{player:'damageEnd'},
				logTarget:'source',
				filter:function(event,player){
					return event.source&&event.source!=player&&event.source.isIn();
				},
				check:function(event,player){
					var att=get.attitude(player,event.source);
					var num=event.source.countCards('h');
					if(att<=0) return true;
					if(num>2) return true;
					if(num) return att<4;
					return false;
				},
				prompt2:'令该角色选择一项：①失去1点体力。②交给你一张手牌。若此牌不为♥，则你摸一张牌。',
				content:function(){
					'step 0'
					event.count=trigger.num;
					'step 1'
					var target=trigger.source;
					event.count--;
					if(!target.countCards('h')) event._result={bool:false};
					else target.chooseCard('h','恩怨：将一张手牌交给'+get.translation(player)+'，或失去1点体力').set('ai',function(card){
						if(get.attitude(_status.event.player,_status.event.getParent().player)>0){
							if(get.suit(card)!='heart') return 15-get.value(card);
							return 11-get.value(card);
						}
						else{
							var num=12-_status.event.player.hp*2;
							if(get.suit(card)!='heart') num-=2;
							return num-get.value(card);
						}
					});
					'step 2'
					var target=trigger.source;
					if(result.bool){
						var card=result.cards[0];
						event.card=card;
						target.give(card,player);
					}
					else{
						target.loseHp();
						event.goto(4);
					}
					'step 3'
					if(get.suit(card)!='heart') player.draw();
					'step 4'
					var target=trigger.source;
					if(target.isIn()&&event.count>0&&player.hasSkill('reenyuan')) player.chooseBool(get.prompt('reenyuan',target),'令该角色选择一项：①失去1点体力。②交给你一张手牌。若此牌不为♥，则你摸一张牌。').set('ai',function(){
						var evt=_status.event.getTrigger();
						return lib.skill.reenyuan2.check(evt,evt.player);
					});
					else event.finish();
					'step 5'
					if(result.bool){
						player.logSkill('reenyuan2',trigger.source);
						event.goto(1);
					}
				},
			},
			rexuanhuo:{
				audio:2,
				trigger:{player:'phaseDrawEnd'},
				direct:true,
				filter:function(event,player){
					return player.countCards('h')>1&&game.countPlayer()>2;
				},
				content:function(){
					'step 0'
					var ai2=function(target){
						var player=_status.event.player;
						if(get.attitude(player,target)<=0) return 0;
						var list=[null,'juedou'].concat(lib.inpile_nature);
						if(target.hasSkill('ayato_zenshen')) list.push('kami');
						var num=Math.max.apply(Math,list.map(function(i){
							if(i=='juedou') return target.getUseValue({name:'juedou',isCard:true},false);
							var card={name:'sha',nature:i,isCard:true};
							return target.getUseValue(card,false);
						}));
						if(target.hasSkillTag('nogain')) num/=4;
						return num;
					};
					player.chooseCardTarget({
						prompt:get.prompt2('rexuanhuo'),
						filterCard:true,
						selectCard:2,
						position:'h',
						filterTarget:lib.filter.notMe,
						goon:game.hasPlayer(function(current){
							return current!=player&&ai2(player,current)>0;
						}),
						ai1:function(card){
							if(!_status.event.goon) return 0;
							return 7-get.value(card);
						},
						ai2:ai2,
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('rexuanhuo',target);
						player.give(result.cards,target);
					}
					else event.finish();
					'step 2'
					if(game.hasPlayer(function(current){
						return current!=player&&current!=target;
					})) player.chooseTarget(function(card,player,target){
						return target!=player&&target!=_status.event.target;
					},'选择'+get.translation(target)+'使用【杀】或【决斗】的目标',true).set('target',target).set('ai',function(target){
						var evt=_status.event;
						var list=[null,'juedou'].concat(lib.inpile_nature);
						if(evt.target.hasSkill('ayato_zenshen')) list.push('kami')
						return Math.max.apply(Math,list.map(function(i){
							var card={name:'sha',isCard:true};
							if(i=='juedou') card.name='juedou';
							else if(i) card.nature=i;
							if(!evt.target.canUse(card,target,false)) return 0;
							return get.effect(target,card,evt.target,evt.player);
						}));
					});
					else event.finish();
					'step 3'
					var target2=result.targets[0];
					event.target2=target2;
					player.line(target2);
					game.log(player,'选择了',target2);
					var list=lib.inpile_nature.slice(0);
					list.unshift(null);
					var vcards=[];
					if(target.hasSkill('ayato_zenshen')) list.add('kami');
					for(var i of list){
						if(target.canUse({name:'sha',isCard:true,nature:i},target2,false)) vcards.push(['基本','','sha',i]);
					}
					if(target.canUse({name:'juedou',isCard:true},target2,false)) vcards.push(['基本','','juedou']);
					if(!vcards.length){
						if(!target.countCards('h')) event.finish();
						else event._result={index:1};
					}
					else if(!target.countCards('h')){
						event.vcards=vcards;
						event._result={index:0};
					}
					else{
						event.vcards=vcards;
						target.chooseControl().set('choiceList',[
							'视为对'+get.translation(target2)+'使用任意一种【杀】或【决斗】',
							'将所有手牌交给'+get.translation(player),
						]);
					}
					'step 4'
					if(result.index==0){
						if(event.vcards.length==1) event._result={links:event.vcards,bool:true};
						else target.chooseButton(['请选择要对'+get.translation(event.target2)+'使用的牌',[event.vcards,'vcard']],true).set('ai',function(button){
							var player=_status.event.player;
							return get.effect(_status.event.getParent().target2,{name:button.link[2],isCard:true,nature:button.link[3]},player,player);
						});
					}
					else{
						target.give(target.getCards('h'),player,'giveAuto');
						event.finish();
					}
					'step 5'
					if(result.bool) target.useCard({name:result.links[0][2],isCard:true,nature:result.links[0][3]},false,event.target2);
				},
				ai:{
					expose:0.17,
					fireAttack:true,
					skillTagFilter:function(player){
						return player.hasFriend();
					},
				},
			},
			decadezongshi:{
				audio:2,
				mod:{
					maxHandcard:function(player,num){
						return num+game.countGroup();
					},
				},
				trigger:{target:'useCardToTargeted'},
				forced:true,
				filter:function(event,player){
					return player!=_status.currentPhase&&player.countCards('h')>=player.getHandcardLimit()&&
					(get.type(event.card)=='delay'||get.color(event.card)=='none');
				},
				content:function(){
					trigger.excluded.add(player);
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(target!=_status.currentPhase&&target.countCards('h')>=target.getHandcardLimit()&&
								(get.type(card)=='delay'||get.color(card)=='none')) return 'zerotarget';
						},
					},
				},
			},
			decadezishou:{
				audio:2,
				inherit:'rezishou',
				group:'decadezishou_zhiheng',
				ai:{
					threaten:1.8,
				},
			},
			decadezishou_zhiheng:{
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				filter:function(event,player){
					return player.countCards('h')>0&&!player.getHistory('useCard',function(evt){
						return evt.targets.filter(function(target){
							return target!=player;
						}).length>0;
					}).length;
				},
				content:function(){
					'step 0'
					var list=[];
					var hs=player.getCards('h');
					for(var i of hs){
						list.add(get.suit(i,player));
					}
					player.chooseToDiscard('h',get.prompt('decadezishou'),'弃置任意张花色不同的手牌并摸等量的牌',[1,list.length],function(card,player){
						if(ui.selected.cards.length){
							var suit=get.suit(card,player);
							for(var i of ui.selected.cards){
								if(get.suit(i,player)==suit) return false;
							}
						}
						return true;
					}).set('ai',lib.skill.zhiheng.check).set('complexCard',true).logSkill='decadezishou';
					'step 1'
					if(result.bool){
						player.draw(result.cards.length);
					}
				},
			},
			yongjin:{
				audio:2,
				audioname:['xin_lingtong'],
				unique:true,
				limited:true,
				skillAnimation:true,
				animationColor:'wood',
				enable:'phaseUse',
				filter:function(event,player,cards){
					return game.hasPlayer(function(current){
						var es=current.getCards('e',function(card){
							return !cards||!cards.includes(card);
						});
						for(var i=0;i<es.length;i++){
							if(game.hasPlayer(function(current2){
								return current!=current2&&!current2.isMin()&&current2.canEquip(es[i]);
							})){
								return true;
							}
						}
					});
				},
				content:function(){
					'step 0'
					player.awakenSkill('yongjin');
					event.count=3;
					event.cards=[];
					'step 1'
					event.count--;
					if(!lib.skill.yongjin.filter(null,player,cards)){
						event.finish();
						return;
					}
					var next=player.chooseTarget(2,function(card,player,target){
						if(ui.selected.targets.length){
							var from=ui.selected.targets[0];
							if(target.isMin()) return false;
							var es=from.getCards('e',function(card){
								return !_status.event.cards.includes(card);
							});
							for(var i=0;i<es.length;i++){
								if(target.canEquip(es[i])) return true;
							}
							return false;
						}
						else{
							return target.countCards('e',function(card){
								return !_status.event.cards.includes(card);
							})>0;
						}
					});
					next.set('ai',function(target){
						var player=_status.event.player;
						var att=get.attitude(player,target);
						var sgnatt=get.sgn(att);
						if(ui.selected.targets.length==0){
							if(target==player&&player.hasSkill('decadexuanfeng')){
								if(player.countCards('e',function(card){
									return !_status.event.cards.includes(card)&&game.hasPlayer(function(current){
										return current!=target&&current.canEquip(card)&&get.effect(current,card,player,player)<0;
									});
								})>0) return 18;
								return 7;
							}
							else if(att>0){
								if(target.countCards('e',function(card){
									return get.value(card,target)<0&&!_status.event.cards.includes(card)&&game.hasPlayer(function(current){
										return current!=target&&current.canEquip(card)&&get.effect(current,card,player,player)<0;
									});
								})>0) return 9;
							}
							else if(att<0){
								if(game.hasPlayer(function(current){
									if(current!=target&&get.attitude(player,current)>0){
										var es=target.getCards('e',function(card){
											return !_status.event.cards.includes(card);
										});
										for(var i=0;i<es.length;i++){
											if(get.value(es[i],target)>0&&current.canEquip(card)&&get.effect(current,es[i],player,current)>0) return true;
										}
									}
								})){
									return -att;
								}
							}
							return 0;
						}
						var es=ui.selected.targets[0].getCards('e',function(card){
							return !_status.event.cards.includes(card);
						});
						var i;
						var att2=get.sgn(get.attitude(player,ui.selected.targets[0]));
						for(i=0;i<es.length;i++){
							if(ui.selected.targets[0]==player&&player.hasSkill('decadexuanfeng')){
								var bool=game.hasPlayer(function(current){
									return get.attitude(player,current)<0&&current.countDiscardableCards(player,'he')>0&&get.damageEffect(current,player,player)>0;
								});
								if(bool&&player.countCards('e',function(card){
									return !_status.event.cards.includes(card)&&target.canEquip(card)&&get.effect(target,card,player,player)>0;
								})) return 2.5*Math.abs(att);
								else if(bool) return 1/Math.max(1,Math.abs(att));
								else return get.damageEffect(target,player,player);
							}
							if(sgnatt!=0&&att2!=0&&sgnatt!=att2&&
								get.sgn(get.value(es[i],ui.selected.targets[0]))==-att2&&
								get.sgn(get.effect(target,es[i],player,target))==sgnatt&&
								target.canEquip(es[i])){
								return Math.abs(att);
							}
						}
						if(i==es.length){
							return 0;
						}
						return -att*get.attitude(player,ui.selected.targets[0]);
					});
					next.set('multitarget',true);
					next.set('cards',cards);
					next.set('targetprompt',['被移走','移动目标']);
					next.set('prompt','移动场上的一张装备牌');
					'step 2'
					if(result.bool){
						player.line2(result.targets,'green');
						event.targets=result.targets;
					}
					else{
						event.finish();
					}
					'step 3'
					game.delay();
					'step 4'
					if(targets.length==2){
						player.choosePlayerCard('e',true,function(button){
							var player=_status.event.player;
							var targets0=_status.event.targets0;
							var targets1=_status.event.targets1;
							if(get.attitude(player,targets0)>0&&get.attitude(player,targets1)<0){
								if(get.value(button.link,targets0)<0&&get.effect(targets1,button.link,player,targets1)>0) return 10;
								return 0;
							}
							else{
								return get.value(button.link)*get.effect(targets1,button.link,player,player);
							}
						},targets[0]).set('nojudge',event.nojudge||false).set('targets0',targets[0]).set('targets1',targets[1]).set('filterButton',function(button){
							if(_status.event.cards.includes(button.link)) return false;
							var targets1=_status.event.targets1;
							return targets1.canEquip(button.link);
						}).set('cards',cards);
					}
					else{
						event.finish();
					}
					'step 5'
					if(result.bool&&result.links.length){
						var link=result.links[0];
						cards.add(link);
						event.targets[1].equip(link);
						event.targets[0].$give(link,event.targets[1])
						game.delay();
					}
					else event.finish();
					'step 6'
					if(event.count>0) event.goto(1);
				},
				ai:{
					order:7,
					result:{
						player:function(player){
							var num=0;
							var friends=game.filterPlayer(function(current){
								return get.attitude(player,current)>=4;
							});
							var vacancies={
								equip1:0,
								equip2:0,
								equip3:0,
								equip4:0,
								equip5:0
							};
							for(var i=0;i<friends.length;i++){
								for(var j=1;j<=5;j++){
									if(friends[i].hasEmptySlot(j)){
										vacancies['equip'+j]++;
									}
								}
							}
							var sources=game.filterPlayer(function(current){
								return ((current==player&&current.hasSkill('decadexuanfeng'))||get.attitude(player,current)<0)&&current.countCards('e');
							});
							for(var i=0;i<sources.length;i++){
								var es=sources[i].getCards('e');
								for(var j=0;j<es.length;j++){
									var type=get.subtype(es[j]);
									if(sources[i]==player||vacancies[type]>0&&get.value(es[j])>0){
										num++;
										if(sources[i]==player&&vacancies[type]&&game.hasPlayer(function(current){
											return get.attitude(player,current)<0&&current.countDiscardableCards(player,'he')>0&&get.damageEffect(current,player,player)>0;
										})) num+=0.5;
										if(num>=3){
											return 1;
										}
										vacancies[type]--;
									}
								}
							}
							if(num&&player.hp==1){
								return 0.5;
							}
							return 0;
						}
					}
				}
			},
			decadexuanfeng:{
				audio:'xuanfeng',
				audioname:['boss_lvbu3','re_heqi','xin_lingtong'],
				trigger:{
					player:['loseAfter','phaseDiscardEnd'],
					global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
				},
				direct:true,
				filter:function(event,player){
					if(_status.dying.length) return false;
					if(event.name=='phaseDiscard'){
						var cards=[];
						player.getHistory('lose',function(evt){
							if(evt&&evt.type=='discard'&&evt.getParent('phaseDiscard')==event&&evt.hs) cards.addArray(evt.hs);
						});
						return cards.length>1;
					}
					else{
						var evt=event.getl(player);
						return evt&&evt.es&&evt.es.length>0;
					}
				},
				content:function(){
					"step 0"
					event.count=2;
					event.targets=[];
					event.logged=false;
					"step 1"
					event.count--;
					player.chooseTarget(get.prompt('decadexuanfeng'),'弃置一名其他角色的一张牌',function(card,player,target){
						if(player==target) return false;
						return target.countDiscardableCards(player,'he');
					}).set('ai',function(target){
						return -get.attitude(_status.event.player,target);
					});
					"step 2"
					if(result.bool){
						if(!event.logged){
							player.logSkill('decadexuanfeng',result.targets);
							event.logged=true;
						}
						else player.line(result.targets[0],'green');
						targets.add(result.targets[0]);
						player.discardPlayerCard(result.targets[0],'he',true);
					}
					else if(!targets.length) event.finish();
					"step 3"
					if(event.count) event.goto(1);
					else if(player==_status.currentPhase){
						player.chooseTarget('是否对一名目标角色造成1点伤害',function(card,player,target){
							return _status.event.targets.includes(target);
						}).set('targets',targets).set('ai',function(target){
							var player=_status.event.player;
							return get.damageEffect(target,player,player);
						});
					}
					else event.finish();
					"step 4"
					if(result.bool){
						player.line(result.targets[0],'thunder');
						result.targets[0].damage();
					}
				},
				ai:{
					effect:{
						player_use:function(card,player,target){
							if(player==target&&get.type(card)=='equip'&&player.countCards('hes',function(cardx){
								return card!=cardx&&(!card.cards||!card.cards.includes(cardx))&&(player.hasSkill('yongjin')||get.subtype(card)==get.subtype(cardx))&&(get.position(cardx)=='e'||player.canUse(cardx,player));
							})>0) return;
							if(!game.hasPlayer(function(current){
								return get.attitude(player,current)<0&&current.countDiscardableCards(player,'he')>0&&get.damageEffect(current,player,player)>0;
							})) return;
							if(typeof card=='object'&&player.isPhaseUsing()&&
							player.needsToDiscard()==2&&card.cards&&card.cards.filter(function(i){
								return get.position(i)=='h';
							}).length>0&&!get.tag(card,'draw')&&!get.tag(card,'gain')&&!(get.tag(card,'discard')&&target==player&&player.countCards('e')>0)) return 'zeroplayertarget';
						},
						target:function(card,player,target,current){
							if(get.type(card)=='equip'&&!get.cardtag(card,'gifts')) return [1,3];
							if(get.tag(card,'damage')&&target.hp>2){
								var num1=target.countCards('h'),num2=target.getHandcardLimit();
								if(num1>num2) return [1,1];
								if(num1==num2) return [1.1,_status.event.player==target?3:0.5];
								if(num1==num2-1) return [0.1,_status.event.player==target?4.5:0.1];
							}
							if(typeof card=='object'&&(card.name=='shunshou'||card.name=='guohe'||card.name=='zhujinqiyuan')&&target.countCards('h')>0&&get.attitude(player,target)<0) return [1,-1];
						}
					},
					reverseEquip:true,
					noe:true,
					expose:0.2,
				}
			},
			oltuntian:{
				inherit:'tuntian',
				filter:function(event,player){
					if(player==_status.currentPhase){
						if(event.type!='discard') return false;
						var evt=event.getl(player);
						return evt&&evt.cards2&&evt.cards2.filter(function(i){
							return get.name(i,evt.hs.includes(i)?player:false)=='sha';
						}).length>0;
					}
					if(event.name=='gain'&&event.player==player) return false;
					var evt=event.getl(player);
					return evt&&evt.cards2&&evt.cards2.length>0;
				},
			},
			olzaoxian:{
				inherit:'zaoxian',
				content:function(){
					player.awakenSkill('olzaoxian');
					player.loseMaxHp();
					player.addSkills('jixi');
					player.insertPhase();
				}
			},
			rejunxing:{
				enable:'phaseUse',
				audio:2,
				usable:1,
				filterCard:true,
				selectCard:[1,Infinity],
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				check:function(card){
					if(ui.selected.cards.length) return -1;
					return 6-get.value(card);
				},
				filterTarget:function(card,player,target){
					return player!=target;
				},
				content:function(){
					"step 0"
					target.chooseToDiscard(cards.length,'弃置'+get.cnNumber(cards.length)+'张牌并失去1点体力，或点取消将武将牌翻面并摸'+get.cnNumber(cards.length)+'张牌','he').set('ai',function(card){
						if(cards.length>3||target.hasSkillTag('noturn')||target.isTurnedOver()||(get.name(card)=='tao'||get.name(card)=='jiu')&&lib.filter.cardSavable(card,target,target)) return -1;
						if(target.hp<=1){
							if(cards.length<target.getEnemies().length&&target.hasCard((cardx)=>{
								return (get.name(cardx)=='tao'||get.name(cardx)=='jiu')&&lib.filter.cardSavable(cardx,target,target);
							},'hs')) return 7-get.value(card);
							return -1;
						}
						return 24-5*cards.length-2*Math.min(4,target.hp)-get.value(card);
					});
					"step 1"
					if(!result.bool){
						target.turnOver();
						target.draw(cards.length);
					}
					else target.loseHp();
				},
				ai:{
					order:2,
					threaten:1.8,
					result:{
						target:function(player,target){
							if(target.hasSkillTag('noturn')) return 0;
							if(target.isTurnedOver()) return 2;
							return -1/(target.countCards('h')+1);
						}
					}
				}
			},
			rejuece:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current!=player&&current.getHistory('lose',function(evt){
							return evt.cards2&&evt.cards2.length>0;
						}).length>0;
					});
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('rejuece'),'对一名本回合失去过牌的其他角色造成1点伤害',function(card,player,target){
						return _status.event.targets.includes(target);
					}).set('targets',game.filterPlayer(function(current){
						return current!=player&&current.getHistory('lose',function(evt){
							return evt.cards2&&evt.cards2.length>0;
						}).length>0;
					})).set('ai',function(target){
						var player=_status.event.player;
						return get.damageEffect(target,player,player);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('rejuece',target);
						target.damage();
					}
				},
			},
			remieji:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('h',{type:['trick','delay'],color:'black'});
				},
				filterCard:function(card){
					return get.color(card)=='black'&&get.type(card,'trick')=='trick';
				},
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('he')>0;
				},
				discard:false,
				delay:false,
				loseTo:'cardPile',
				insert:true,
				visible:true,
				check:function(card){
					return 8-get.value(card);
				},
				content:function(){
					'step 0'
					player.showCards(cards);
					'step 1'
					if(!target.countCards('he',function(card){
						if(get.type2(card)=='trick') return true;
						return lib.filter.cardDiscardable(card,target,'remieji');
					})) event.finish();
					else target.chooseCard('he',true,function(card,player){
						if(get.type2(card)=='trick') return true;
						return lib.filter.cardDiscardable(card,player,'remieji');
					}).set('prompt','选择交给'+get.translation(player)+'一张锦囊牌，或依次弃置两张非锦囊牌。');
					'step 2'
					if(result.cards&&result.cards.length){
						if(get.type2(result.cards[0])=='trick'){
							target.give(result.cards,player);
							event.finish();
						}
						else target.discard(result.cards);
					}
					else event.finish();
					'step 3'
					if(target.countCards('he',function(card){
						return get.type2(card)!='trick';
					})) target.chooseToDiscard('he',true,function(card){
						return get.type2(card)!='trick';
					});
				},
				ai:{
					order:9,
					result:{
						target:-1
					}
				}
			},
			decadelihuo:{
				trigger:{player:'useCard1'},
				filter:function(event,player){
					if(event.card.name=='sha'&&!game.hasNature(event.card)) return true;
					return false;
				},
				audio:'lihuo',
				prompt2:function(event){
					return '将'+get.translation(event.card)+'改为火属性';
				},
				audioname:['re_chengpu'],
				check:function(event,player){
					return event.baseDamage>1&&game.hasPlayer(function(current){
						return !event.targets.includes(current)&&player.canUse(event.card,current)
						&&get.attitude(player,current)<0&&!current.hasShan()
						&&get.effect(current,{name:'sha',nature:'fire'},player,player)>0;
					});
				},
				content:function(){
					game.setNature(trigger.card,'fire');
				},
				group:['decadelihuo2','decadelihuo3'],
				ai:{
					fireAttack:true,
				},
			},
			decadelihuo2:{
				trigger:{player:'useCard2'},
				filter:function(event,player){
					if(event.card.name!='sha'||!game.hasNature(event.card,'fire')) return false;
					return game.hasPlayer(function(current){
						return !event.targets.includes(current)&&player.canUse(event.card,current);
					});
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('decadelihuo'),'为'+get.translation(trigger.card)+'增加一个目标',function(card,player,target){
						return !_status.event.sourcex.includes(target)&&player.canUse(_status.event.card,target);
					}).set('sourcex',trigger.targets).set('card',trigger.card).set('ai',function(target){
						var player=_status.event.player;
						return get.effect(target,_status.event.card,player,player);
					});
					'step 1'
					if(result.bool){
						if(!event.isMine()&&!_status.connectMode) game.delayx();
						event.target=result.targets[0];
					}
					else{
						event.finish();
					}
					'step 2'
					player.logSkill('decadelihuo',event.target);
					trigger.targets.push(event.target);
				},
			},
			decadelihuo3:{
				trigger:{player:'useCardAfter'},
				filter:function(event,player){
					return event.card.name=='sha'&&game.hasNature(event.card,'fire')&&event.targets.length>1&&player.getHistory('sourceDamage',function(evt){
						return evt.card==event.card;
					}).length>0;
				},
				forced:true,
				audio:'lihuo',
				audioname:['re_chengpu'],
				content:function(){
					player.loseHp();
				}
			},
			decadechunlao:{
				audio:'chunlao',
				audioname:['re_chengpu'],
				enable:'chooseToUse',
				viewAs:{name:'jiu',isCard:true},
				viewAsFilter:function(player){
					return !player.isLinked();
				},
				filter:function(event,player){
					return !player.isLinked();
				},
				filterCard:function(){return false},
				selectCard:-1,
				precontent:function(){
					player.logSkill('decadechunlao');
					player.link();
					delete event.result.skill;
				},
				group:['decadechunlao2','decadechunlaox'],
				ai:{
					jiuOther:true,
				},
			},
			decadechunlaox:{
				trigger:{player:'damageBegin2'},
				silent:true,
				lastDo:true,
				filter:function(event,player){
					return !player.isLinked();
				},
				content:function(){
					trigger.decadechunlaox=true;
				},
			},
			decadechunlao2:{
				trigger:{
					source:'damageSource',
					player:'damageEnd',
				},
				prompt:'是否发动【醇醪】将武将牌重置？',
				filter:function(event,player){
					return player.isLinked()&&event.num>1&&!event.decadechunlaox;
				},
				content:function(){
					player.link();
				},
			},
			oltianxiang:{
				audio:'tianxiang',
				audioname:['daxiaoqiao','re_xiaoqiao','ol_xiaoqiao'],
				trigger:{player:'damageBegin4'},
				direct:true,
				filter:function(event,player){
					return player.countCards('he',function(card){
						if(_status.connectMode&&get.position(card)=='h') return true;
						return get.suit(card,player)=='heart';
					})>0&&event.num>0;
				},
				content:function(){
					"step 0"
					player.chooseCardTarget({
						filterCard:function(card,player){
							return get.suit(card)=='heart'&&lib.filter.cardDiscardable(card,player);
						},
						filterTarget:function(card,player,target){
							return player!=target;
						},
						position:'he',
						ai1:function(card){
							return 10-get.value(card);
						},
						ai2:function(target){
							var att=get.attitude(_status.event.player,target);
							var trigger=_status.event.getTrigger();
							var da=0;
							if(_status.event.player.hp==1){
								da=10;
							}
							var eff=get.damageEffect(target,trigger.source,target);
							if(att==0) return 0.1+da;
							if(eff>=0&&att>0){
								return att+da;
							}
							if(att>0&&target.hp>1){
								if(target.maxHp-target.hp>=3) return att*1.1+da;
								if(target.maxHp-target.hp>=2) return att*0.9+da;
							}
							return -att+da;
						},
						prompt:get.prompt('oltianxiang'),
						prompt2:lib.translate.oltianxiang_info
					});
					"step 1"
					if(result.bool){
						player.discard(result.cards);
						var target=result.targets[0];
						player.chooseControlList(true,function(event,player){
							var target=_status.event.target;
							var att=get.attitude(player,target);
							if(target.hasSkillTag('maihp')) att=-att;
							if(att>0){
								return 0;
							}
							else{
								return 1;
							}
						},
							['令'+get.translation(target)+'受到伤害来源对其造成的1点伤害，然后摸X张牌（X为其已损失体力值且至多为5）',
							'令'+get.translation(target)+'失去1点体力，然后获得'+get.translation(result.cards)]).set('target',target);
						player.logSkill(event.name,target);
						trigger.cancel();
						event.target=target;
						event.card=result.cards[0];
					}
					else{
						event.finish();
					}
					"step 2"
					if(typeof result.index=='number'){
						event.index=result.index;
						if(result.index){
							event.related=event.target.loseHp();
						}
						else{
							event.related=event.target.damage(trigger.source||'nosource','nocard');
						}
					}
					else event.finish();
					"step 3"
					if(event.related.cancelled||target.isDead()) return;
					if(event.index&&card.isInPile()) target.gain(card,'gain2');
					else if(target.getDamagedHp()) target.draw(Math.min(5,target.getDamagedHp()));
				},
				ai:{
					maixie_defend:true,
					effect:{
						target:function(card,player,target){
							if(player.hasSkillTag('jueqing',false,target)) return;
							if(get.tag(card,'damage')&&target.countCards('he')>1) return 0.7;
						}
					},
				}
			},
			olhongyan:{
				audio:'rehongyan',
				mod:{
					suit:function(card,suit){
						if(suit=='spade') return 'heart';
					},
					maxHandcardBase:function(player,num){
						if(player.countCards('e',function(card){
							return get.suit(card,player)=='heart';
						})) return player.maxHp;
					},
				},
			},
			piaoling:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				frequent:true,
				content:function(){
					'step 0'
					player.judge(function(card){
						return get.suit(card)=='heart'?2:0;
					}).judge2=function(result){
						return result.bool?true:false;
					};
					'step 1'
					event.card=result.card;
					if(result.bool&&get.position(event.card,true)=='d'){
						player.chooseTarget('令一名角色获得'+get.translation(event.card)+'，或点【取消】将其置于牌堆顶').set('ai',function(target){
							var player=_status.event.player;
							var att=get.attitude(player,target);
							if(player==target) att/=2;
							return att;
						});
					}
					else event.finish();
					'step 2'
					if(result.targets&&result.targets.length){
						var target=result.targets[0];
						player.line(target,'green');
						target.gain(card,'gain2','log');
						if(player==target) player.chooseToDiscard('he',true);
					}
					else{
						card.fix();
						ui.cardPile.insertBefore(card,ui.cardPile.firstChild);
						game.updateRoundNumber();
					}
				},
			},
			xinyicong:{
				mod:{
					globalFrom:function(from,to,current){
						return current-Math.max(0,from.hp-1);
					},
					globalTo:function(from,to,current){
						return current+Math.max(0,to.getDamagedHp()-1);
					},
				},
				ai:{
					threaten:0.8
				}
			},
			rezongshi:{
				audio:2,
				mod:{
					maxHandcard:function(player,num){
						return num+game.countGroup();
					},
				},
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				filter:function(event,player){
					return player.countCards('h')>player.hp;
				},
				content:function(){
					player.addTempSkill('rezongshi_paoxiao');
				},
			},
			rezongshi_paoxiao:{
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=='sha') return Infinity;
					},
				},
			},
			olbaonue:{
				audio:2,
				unique:true,
				zhuSkill:true,
				trigger:{global:'damageSource'},
				filter:function(event,player){
					if(player==event.source||!event.source||event.source.group!='qun') return false;
					return player.hasZhuSkill('olbaonue',event.source);
				},
				direct:true,
				content:function(){
					'step 0'
					event.count=trigger.num;
					'step 1'
					event.count--;
					player.chooseBool('是否发动【暴虐】？').set('choice',get.attitude(player,player)>0);
					'step 2'
					if(result.bool){
						player.logSkill('olbaonue',trigger.source);
						player.judge(function(card){
							if(get.suit(card)=='spade') return 4;
							return 0;
						}).set('callback',function(){
							if(event.judgeResult.suit=='spade'){
								player.recover();
								if(get.position(event.judgeResult.card,true)=='o') player.gain(event.judgeResult.card,'gain2','log')
							}
						}).judge2=function(result){
							return result.bool?true:false;
						};
					}
					else{
						event.finish();
					}
					'step 3'
					if(event.count&&lib.skill.olbaonue.filter(trigger,player)) event.goto(1);
				}
			},
			rezishou:{
				audio:'zishou',
				audioname:['re_liubiao'],
				trigger:{player:'phaseDrawBegin2'},
				check:function(event,player){
					return player.countCards('h')<=(player.hasSkill('zongshi')?player.maxHp:(player.hp-2))||player.skipList.includes('phaseUse')||!player.countCards('h',function(card){
						return get.tag(card,'damage')&&player.hasUseTarget(card);
					});
				},
				filter:function(event,player){
					return !event.numFixed;
				},
				content:function(){
					trigger.num+=game.countGroup();
					player.addTempSkill('rezishou2');
				},
				ai:{
					threaten:1.5
				}
			},
			rezishou2:{
				audio:'rezishou',
				trigger:{
					source:'damageBegin2',
					//player:'phaseJieshuBegin',
				},
				forced:true,
				filter:function(event,player){
					if(event.name=='damage') return event.player!=player;
					if(player.getHistory('skipped').includes('phaseUse')) return false;
					return player.getHistory('useCard',function(evt){
						if(evt.targets&&evt.targets.length&&evt.isPhaseUsing()){
							var targets=evt.targets.slice(0);
							while(targets.includes(player)) targets.remove(player);
							return targets.length>0;
						}
						return false;
					}).length==0;
				},
				popup:false,
				content:function(){
					'step 0'
					if(trigger.name=='damage'){
						player.logSkill('rezishou',trigger.player);
						trigger.cancel();
						event.finish();
						return;
					}
					else{
						var filterTarget=function(card,player,target){
							return target!=player&&target.countCards('e',function(card){
								return player.canEquip(card);
							});
						}
						if(game.hasPlayer(function(current){
							return filterTarget(null,player,current)
						})) player.chooseTarget(filterTarget,'是否将一名其他角色装备区内的一张牌移动到自己的装备区？').set('ai',function(target){
							var player=_status.event.player;
							var att=get.attitude(player,target);
							if(att>0&&!target.hasSkillTag('noe')) return 0;
							var num=0;
							target.countCards('e',function(card){
								if(player.canEquip(card)){
									var eff=get.effect(player,card,player,player);
									if(eff>num) num=eff;
								}
							});
							if(num<=0) return 0;
							if(att<0) return num*-att;
							return 1/num;
						});
						else event.finish();
					}
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('rezishou',target);
						player.choosePlayerCard(target,'e','将一张装备牌移至你的装备区').set('filterButton',function(button){
							return _status.event.player.canEquip(button.link);
						});
					}
					else event.finish();
					"step 2"
					if(result&&result.links&&result.links.length){
						game.delay(2);
						target.$give(result.links[0],player,false);
						player.equip(result.links[0]);
						player.addExpose(0.2);
					}
				},
				ai:{
					effect:{
						player:function(card,player,target){
							if(get.tag(card,'damage')) return 'zeroplayertarget';
						},
					},
				},
			},
			decadepojun:{
				shaRelated:true,
				audio:2,
				trigger:{player:'useCardToPlayered'},
				direct:true,
				filter:function(event,player){
					return event.card.name=='sha'&&event.target.hp>0&&event.target.countCards('he')>0;
				},
				content:function(){
					'step 0'
					var next=player.choosePlayerCard(trigger.target,'he',[1,Math.min(trigger.target.hp,trigger.target.countCards('he'))],get.prompt('decadepojun',trigger.target));
					next.set('ai',function(button){
						if(!_status.event.goon) return 0;
						var val=get.value(button.link);
						if(button.link==_status.event.target.getEquip(2)) return 2*(val+3);
						return val;
					});
					next.set('goon',get.attitude(player,trigger.target)<=0);
					next.set('forceAuto',true);
					'step 1'
					if(result.bool){
						event.cards=result.cards;
						var target=trigger.target;
						player.logSkill('decadepojun',trigger.target);
						target.addSkill('decadepojun2');
						target.addToExpansion(result.cards,'giveAuto',target).gaintag.add('decadepojun2');
					}
					else event.finish();
					'step 2'
					var discard=false,draw=false;
					for(var i of cards){
						var type=get.type2(i);
						if(type=='equip') discard=true;
						if(type=='trick') draw=true;
					}
					if(discard){
						event.equip=true;
						player.chooseButton(['选择一张牌置入弃牌堆',cards.filter(function(card){
							return get.type(card)=='equip';
						})],true).set('ai',function(button){
							return get.value(button.link,_status.event.getTrigger().target);
						});
					}
					if(draw) event.draw=true;
					'step 3'
					if(event.equip&&result.links&&result.links.length){
						trigger.target.loseToDiscardpile(result.links);
					}
					if(event.draw) player.draw();
				},
				ai:{
					unequip_ai:true,
					directHit_ai:true,
					skillTagFilter:function(player,tag,arg){
						if(get.attitude(player,arg.target)>0) return false;
						if(tag=='directHit_ai') return arg.target.hp>=Math.max(1,arg.target.countCards('h')-1);
						if(arg&&arg.name=='sha'&&arg.target.getEquip(2)) return true;
						return false;
					}
				},
			},
			decadepojun2:{
				trigger:{global:'phaseEnd'},
				forced:true,
				popup:false,
				charlotte:true,
				filter:function(event,player){
					return player.getExpansions('decadepojun2').length>0;
				},
				content:function(){
					'step 0'
					var cards=player.getExpansions('decadepojun2');
					player.gain(cards,'draw');
					game.log(player,'收回了'+get.cnNumber(cards.length)+'张“破军”牌');
					'step 1'
					player.removeSkill('decadepojun2');
				},
				intro:{
					markcount:'expansion',
					mark:function(dialog,storage,player){
						var cards=player.getExpansions('decadepojun2');
						if(player.isUnderControl(true)) dialog.addAuto(cards);
						else return '共有'+get.cnNumber(cards.length)+'张牌';
					},
				},
			},
			hanzhan:{
				audio:2,
				trigger:{
					global:'chooseToCompareBegin',
				},
				filter:function(event,player){
					if(player==event.player) return true;
					if(event.targets) return event.targets.includes(player);
					return player==event.target;
				},
				logTarget:function(event,player){
					if(player!=event.player) return event.player;
					return event.targets||event.target;
				},
				prompt2:function(event,player){
					return '令其改为使用随机的手牌进行拼点'
				},
				check:function(trigger,player){
					var num=0;
					var targets=player==trigger.player?(trigger.targets?trigger.targets.slice(0):[trigger.target]):[trigger.player];
					while(targets.length){
						var target=targets.shift();
						if(target.getCards('h').length>1) num-=get.attitude(player,target);
					}
					return num>0;
				},
				content:function(){
					var targets=player==trigger.player?(trigger.targets?trigger.targets.slice(0):[trigger.target]):[trigger.player];
					if(!trigger.fixedResult) trigger.fixedResult={};
					while(targets.length){
						var target=targets.shift();
						var hs=target.getCards('h');
						if(hs.length) trigger.fixedResult[target.playerid]=hs.randomGet();
					}
				},
				group:'hanzhan_gain',
				subfrequent:['gain'],
			},
			hanzhan_gain:{
				trigger:{
					global:'chooseToCompareAfter',
				},
				audio:'hanzhan',
				filter:function(event,player){
					if(event.preserve) return false;
					if(player!=event.player&&player!=event.target&&(!event.targets||!event.targets.includes(player))) return false;
					for(var i of event.lose_list){
						if(Array.isArray(i[1])){
							for(var j of i[1]){
								if(get.name(j,i[0])=='sha'&&get.position(j,true)=='o') return true;
							}
						}
						else{
							var j=i[1];
							if(get.name(j,i[0])=='sha'&&get.position(j,true)=='o') return true;
						}
					}
					return false;
				},
				frequent:true,
				prompt2:function(event,player){
					var cards=[],max=0;
					for(var i of event.lose_list){
						if(Array.isArray(i[1])){
							for(var j of i[1]){
								if(get.name(j,i[0])=='sha'&&get.position(j,true)=='o'){
									var num=get.number(j,i[0]);
									if(num>max){
										cards=[];
										max=num;
									}
									if(num==max) cards.push(j);
								}
							}
						}
						else{
							var j=i[1];
							if(get.name(j,i[0])=='sha'&&get.position(j,true)=='o'){
								var num=get.number(j,i[0]);
								if(num>max){
									cards=[];
									max=num;
								}
								if(num==max) cards.push(j);
							}
						}
					}
					return '获得'+get.translation(cards);
				},
				content:function(){
					var cards=[],max=0;
					for(var i of trigger.lose_list){
						if(Array.isArray(i[1])){
							for(var j of i[1]){
								if(get.name(j,i[0])=='sha'&&get.position(j,true)=='o'){
									var num=get.number(j,i[0]);
									if(num>max){
										cards=[];
										max=num;
									}
									if(num==max) cards.push(j);
								}
							}
						}
						else{
							var j=i[1];
							if(get.name(j,i[0])=='sha'&&get.position(j,true)=='o'){
								var num=get.number(j,i[0]);
								if(num>max){
									cards=[];
									max=num;
								}
								if(num==max) cards.push(j);
							}
						}
					}
					player.gain(cards,'gain2');
				},
			},
			rejianchu:{
				shaRelated:true,
				audio:2,
				audioname:['re_pangde'],
				trigger:{player:'useCardToPlayered'},
				filter:function(event,player){
					return event.card.name=='sha'&&event.target.countDiscardableCards(player,'he')>0;
				},
				direct:true,
				content:function(){
					'step 0'
					player.discardPlayerCard(trigger.target,get.prompt('rejianchu',trigger.target)).set('ai',function(button){
						if(!_status.event.att) return 0;
						if(get.position(button.link)=='e'){
							if(get.subtype(button.link)=='equip2') return 2*get.value(button.link);
							return get.value(button.link);
						}
						return 1;
					}).set('logSkill',['rejianchu',trigger.target]).set('att',get.attitude(player,trigger.target)<=0);
					'step 1'
					if(result.bool&&result.links&&result.links.length){
						if(get.type(result.links[0],null,result.links[0].original=='h'?player:false)!='basic'){
							trigger.getParent().directHit.add(trigger.target);
							player.addTempSkill('rejianchu2');
							player.addMark('rejianchu2',1,false);
						}
						else if(trigger.cards){
							var list=[];
							for(var i=0;i<trigger.cards.length;i++){
								if(get.position(trigger.cards[i],true)=='o') list.push(trigger.cards[i]);
							}
							if(list.length) trigger.target.gain(list,'gain2','log');
						}
					}
				},
				ai:{
					unequip_ai:true,
					directHit_ai:true,
					skillTagFilter:function(player,tag,arg){
						if(tag=='directHit_ai') return arg.card.name=='sha'&&arg.target.countCards('e',function(card){
							return get.value(card)>1;
						})>0;
						if(arg&&arg.name=='sha'&&arg.target.getEquip(2)) return true;
						return false;
					}
				},
			},
			rejianchu2:{
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=='sha') return num+player.countMark('rejianchu2');
					},
				},
				onremove:true,
			},
			wulie:{
				trigger:{player:'phaseJieshuBegin'},
				audio:2,
				direct:true,
				limited:true,
				skillAnimation:true,
				animationColor:'wood',
				unique:true,
				filter:function(event,player){
					return player.hp>0;
				},
				content:function(){
					'step 0'
					player.chooseTarget([1,player.hp],get.prompt2('wulie'),lib.filter.notMe).set('ai',function(target){
						var player=_status.event.player;
						if(player.hasUnknown()) return 0;
						if(player.hp-ui.selected.targets.length>1+player.countCards('hs',card=>player.canSaveCard(card,player))) return get.attitude(player,target);
						return 0;
					});
					'step 1'
					if(result.bool){
						var targets=result.targets.sortBySeat();
						player.logSkill('wulie',targets);
						player.awakenSkill('wulie');
						player.loseHp(targets.length);
						while(targets.length){
							targets[0].addSkill('wulie2');
							targets.shift().addMark('wulie2');
						}
					}
				},
			},
			wulie2:{
				marktext:'烈',
				intro:{name2:'烈',content:'mark'},
				trigger:{player:'damageBegin3'},
				forced:true,
				content:function(){
					trigger.cancel();
					player.removeMark('wulie2',1);
					if(!player.storage.wulie2) player.removeSkill('wulie2');
				},
			},
			regongji:{
				mod:{
					attackRangeBase:function(player){
						if(player.getEquips(3).length>0||player.getEquips(4).length>0) return Infinity;
					},
				},
				locked:false,
				enable:'phaseUse',
				usable:1,
				position:'he',
				filter:function(event,player){
					return player.hasCard(function(card){
						return lib.skill.regongji.filterCard(card);
					},'eh');
				},
				filterCard:function(card,player){
					return get.type(card)!='basic';
				},
				filterTarget:function(card,player,target){
					return target!=player&&target.countDiscardableCards(player,'he')>0;
				},
				check:function(card){
					return 4.5-get.value(card);
				},
				content:function(){
					if(target.countDiscardableCards(player,'he')>0) player.discardPlayerCard(target,'he',true);
				},
				ai:{
					order:5,
					result:{
						target:function(player,target){
							var att=get.attitude(player,target);
							var nh=target.countCards('h');
							if(att>0){
								if(target.getEquip('baiyin')&&target.isDamaged()&&
									get.recoverEffect(target,player,player)>0){
									if(target.hp==1&&!target.hujia) return 1.6;
									if(target.hp==2) return 0.01;
									return 0;
								}
							}
							var es=target.getCards('e');
							var noe=(es.length==0||target.hasSkillTag('noe'));
							var noe2=(es.length==1&&es[0].name!='tengjia'&&get.value(es[0])<=0);
							var noh=(nh==0||target.hasSkillTag('noh'));
							if(noh&&(noe||noe2)) return 0;
							if(att<=0&&!target.countCards('he')) return 1.5;
							return -1.5;
						},
					},
					tag:{
						loseCard:1,
						discard:1
					},
				},
			},
			ollongdan:{
				mod:{
					aiValue:function(player,card,num){
						if(card.name!='sha'&&card.name!='shan') return;
						var geti=function(){
							var cards=player.getCards('hs',function(card){
								return card.name=='sha'||card.name=='shan';
							});
							if(cards.includes(card)){
								return cards.indexOf(card);
							}
							return cards.length;
						};
						return Math.max(num,[7,5,5,3][Math.min(geti(),3)]);
					},
					aiUseful:function(){
						return lib.skill.ollongdan.mod.aiValue.apply(this,arguments);
					},
				},
				locked:false,
				audio:'longdan_sha',
				audioname:['re_zhaoyun'],
				audioname2:{tongyuan:'longdan_tongyuan'},
				hiddenCard:function(player,name){
					if(name=='tao') return player.countCards('hs','jiu')>0;
					if(name=='jiu') return player.countCards('hs','tao')>0;
					return false;
				},
				enable:['chooseToUse','chooseToRespond'],
				position:'hs',
				prompt:'将杀当做闪，或将闪当做杀，或将桃当做酒，或将酒当做桃使用或打出',
				viewAs:function(cards,player){
					if(cards.length){
						var name=false;
						switch(get.name(cards[0],player)){
							case 'sha':name='shan';break;
							case 'shan':name='sha';break;
							case 'tao':name='jiu';break;
							case 'jiu':name='tao';break;
						}
						if(name) return {name:name};
					}
					return null;
				},
				check:function(card){
					var player=_status.event.player;
					if(_status.event.type=='phase'){
						var max=0;
						var name2;
						var list=['sha','tao','jiu'];
						var map={sha:'shan',tao:'jiu',jiu:'tao'}
						for(var i=0;i<list.length;i++){
							var name=list[i];
							if(player.countCards('hs',map[name])>(name=='jiu'?1:0)&&player.getUseValue({name:name})>0){
								var temp=get.order({name:name});
								if(temp>max){
									max=temp;
									name2=map[name];
								}
							}
						}
						if(name2==get.name(card,player)) return 1;
						return 0;
					}
					return 1;
				},
				filterCard:function(card,player,event){
					event=event||_status.event;
					var filter=event._backup.filterCard;
					var name=get.name(card,player);
					if(name=='sha'&&filter({name:'shan',cards:[card]},player,event)) return true;
					if(name=='shan'&&filter({name:'sha',cards:[card]},player,event)) return true;
					if(name=='tao'&&filter({name:'jiu',cards:[card]},player,event)) return true;
					if(name=='jiu'&&filter({name:'tao',cards:[card]},player,event)) return true;
					return false;
				},
				filter:function(event,player){
					var filter=event.filterCard;
					if(filter(get.autoViewAs({name:'sha'},'unsure'),player,event)&&player.countCards('hs','shan')) return true;
					if(filter(get.autoViewAs({name:'shan'},'unsure'),player,event)&&player.countCards('hs','sha')) return true;
					if(filter(get.autoViewAs({name:'tao'},'unsure'),player,event)&&player.countCards('hs','jiu')) return true;
					if(filter(get.autoViewAs({name:'jiu'},'unsure'),player,event)&&player.countCards('hs','tao')) return true;
					return false;
				},
				ai:{
					respondSha:true,
					respondShan:true,
					skillTagFilter:function(player,tag){
						var name;
						switch(tag){
							case 'respondSha':name='shan';break;
							case 'respondShan':name='sha';break;
						}
						if(!player.countCards('hs',name)) return false;
					},
					order:function(item,player){
						if(player&&_status.event.type=='phase'){
							var max=0;
							var list=['sha','tao','jiu'];
							var map={sha:'shan',tao:'jiu',jiu:'tao'}
							for(var i=0;i<list.length;i++){
								var name=list[i];
								if(player.countCards('hs',map[name])>(name=='jiu'?1:0)&&player.getUseValue({name:name})>0){
									var temp=get.order({name:name});
									if(temp>max) max=temp;
								}
							}
							if(max>0) max+=0.3;
							return max;
						}
						return 4;
					},
				},
			},
			olyajiao:{
				audio:'reyajiao',
				trigger:{player:'loseAfter'},
				frequent:true,
				filter:function(event,player){
					return player!=_status.currentPhase&&event.hs&&event.hs.length>0&&['useCard','respond'].includes(event.getParent().name);
				},
				content:function(){
					"step 0"
					event.card=get.cards()[0];
					game.cardsGotoOrdering(event.card);
					event.videoId=lib.status.videoId++;
					var judgestr=get.translation(player)+'发动了【涯角】';
					game.addVideo('judge1',player,[get.cardInfo(event.card),judgestr,event.videoId]);
					game.broadcastAll(function(player,card,str,id,cardid){
						var event;
						if(game.online){
							event={};
						}
						else{
							event=_status.event;
						}
						if(game.chess){
							event.node=card.copy('thrown','center',ui.arena).addTempClass('start');
						}
						else{
							event.node=player.$throwordered(card.copy(),true);
						}
						if(lib.cardOL) lib.cardOL[cardid]=event.node;
						event.node.cardid=cardid;
						event.node.classList.add('thrownhighlight');
						ui.arena.classList.add('thrownhighlight');
						event.dialog=ui.create.dialog(str);
						event.dialog.classList.add('center');
						event.dialog.videoId=id;
					},player,event.card,judgestr,event.videoId,get.id());

					game.log(player,'展示了',event.card);
					game.delay(2);
					if(get.type(event.card,'trick')==get.type(trigger.getParent().card,'trick')){
						player.chooseTarget('选择获得此牌的角色').set('ai',function(target){
							var att=get.attitude(_status.event.player,target);
							if(_status.event.du){
								if(target.hasSkillTag('nodu')) return 0;
								return -att;
							}
							if(att>0){
								return att+Math.max(0,5-target.countCards('h'));
							}
							return att;
						}).set('du',event.card.name=='du');
					}
					else{
						event.disbool=true;
						player.chooseTarget('是否弃置攻击范围内包含你的一名角色区域内的一张牌？',function(card,player,target){
							return target.inRange(player)&&target.countDiscardableCards(player,'hej')>0;
						}).set('ai',function(target){
							var player=_status.event.player;
							return get.effect(target,{name:'guohe'},player,player);
						});
					}
					"step 1"
					if(event.disbool){
						if(result.bool){
							player.line(result.targets[0],'green');
							player.discardPlayerCard(result.targets[0],'hej',true);
						}
						event.dialog.close();
						game.addVideo('judge2',null,event.videoId);
						game.addVideo('deletenode',player,[get.cardInfo(event.node)]);
						event.node.delete();
						game.broadcast(function(id,card){
							var dialog=get.idDialog(id);
							if(dialog){
								dialog.close();
							}
							if(card.clone){
								card.clone.delete();
							}
							ui.arena.classList.remove('thrownhighlight');
						},event.videoId,event.card);
						ui.arena.classList.remove('thrownhighlight');
					}
					else if(result.targets){
						event.dialog.close();
						game.addVideo('judge2',null,event.videoId);
						player.line(result.targets,'green');
						result.targets[0].gain(event.card,'log');
						event.node.moveDelete(result.targets[0]);
						game.addVideo('gain2',result.targets[0],[get.cardInfo(event.node)]);
						ui.arena.classList.remove('thrownhighlight');
						game.broadcast(function(card,target,id){
							var dialog=get.idDialog(id);
							if(dialog){
								dialog.close();
							}
							ui.arena.classList.remove('thrownhighlight');
							if(card.clone){
								card.clone.moveDelete(target);
							}
						},event.card,result.targets[0],event.videoId);
					}
					else{
						game.addVideo('deletenode',player,[get.cardInfo(event.node)]);
						event.node.delete();
						game.broadcast(function(id){
							var dialog=get.idDialog(id);
							if(dialog){
								dialog.close();
							}
							if(card.clone){
								card.clone.delete();
							}
							ui.arena.classList.remove('thrownhighlight');
						},event.videoId,event.card);
						event.dialog.close();
						game.addVideo('judge2',null,event.videoId);
						ui.arena.classList.remove('thrownhighlight');
					}
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'respond')&&target.countCards('h')>1) return [1,0.2];
						}
					}
				}
			},
			olpaoxiao:{
				audio:"paoxiao",
				audioname:['re_zhangfei','guanzhang','xiahouba','re_guanzhang'],
				trigger:{player:'shaMiss'},
				forced:true,
				content:function(){
					player.addTempSkill('olpaoxiao2');
					player.addMark('olpaoxiao2',1,false);
				},
				mod:{
					cardUsable:function (card,player,num){
						if(card.name=='sha') return Infinity;
					},
				},
			},
			olpaoxiao2:{
				trigger:{source:'damageBegin1'},
				forced:true,
				audio:'paoxiao',
				audioname:['re_zhangfei','guanzhang','xiahouba','re_guanzhang'],
				filter:function(event,player){
					return event.card&&event.card.name=='sha'&&player.countMark('olpaoxiao2')>0;
				},
				onremove:true,
				content:function(){
					trigger.num+=player.countMark('olpaoxiao2');
					player.removeSkill('olpaoxiao2');
				},
				intro:{content:'本回合内下一次使用【杀】造成伤害时令伤害值+#'},
			},
			oltishen:{
				audio:'retishen',
				unique:true,
				mark:true,
				skillAnimation:true,
				animationColor:'soil',
				limited:true,
				trigger:{player:'phaseZhunbeiBegin'},
				filter:function(event,player){
					if(player.storage.oltishen) return false;
					return player.isDamaged();
				},
				check:function(event,player){
					if(player.hp<=2||player.getDamagedHp()>2) return true;
					if(player.getDamagedHp()<=1) return false;
					return player.getDamagedHp()<game.roundNumber;
				},
				content:function(){
					player.awakenSkill('oltishen');
					player.recover(player.maxHp-player.hp);
					player.draw(player.maxHp-player.hp);
				},
				intro:{
					content:'limited'
				},
			},
			rexuanfeng:{
				audio:'xuanfeng',
				audioname:['boss_lvbu3','re_heqi','re_lingtong'],
				trigger:{
					player:['loseAfter','phaseDiscardEnd'],
					global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
				},
				direct:true,
				filter:function(event,player){
					if(!game.hasPlayer(function(current){
						return current!=player&&current.countCards('he')>0;
					})) return false;
					if(event.name=='phaseDiscard'){
						var cards=[];
						player.getHistory('lose',function(evt){
							if(evt&&evt.type=='discard'&&evt.getParent('phaseDiscard')==event&&evt.hs) cards.addArray(evt.hs);
						});
						return cards.length>1;
					}
					var evt=event.getl(player);
					return evt&&evt.es&&evt.es.length>0;
				},
				content:function(){
					'step 0'
					var list=['弃置至多两名其他角色的合计两张牌'];
					if(lib.skill.rexuanfeng.canMoveCard(player)) list.push('将一名其他角色装备区内的一张牌移动到另一名角色的装备区内');
					player.chooseControl('cancel2').set('choiceList',list).set('prompt',get.prompt('rexuanfeng')).set('ai',function(){
						if(lib.skill.rexuanfeng.canMoveCard(player,true)) return 1;
						return 0;
					});
					'step 1'
					if(result.control!='cancel2'){
						player.logSkill('rexuanfeng');
						if(result.index==1) event.goto(5);
						else event.count=2;
					}
					else event.finish();
					'step 2'
					player.chooseTarget('弃置一名其他角色的一张牌',function(card,player,target){
						if(player==target) return false;
						return target.countDiscardableCards(player,'he');
					}).set('ai',function(target){
						return -get.attitude(_status.event.player,target);
					});
					'step 3'
					if(result.bool){
						player.line(result.targets[0],'green');
						player.discardPlayerCard(result.targets[0],'he',true);
						event.count--;
					}
					else event.finish();
					'step 4'
					if(event.count) event.goto(2);
					else event.finish();
					'step 5'
					var next=player.chooseTarget(2,function(card,player,target){
						if(player==target) return false;
						if(ui.selected.targets.length){
							var from=ui.selected.targets[0];
							if(target.isMin()) return false;
							var es=from.getCards('e');
							for(var i=0;i<es.length;i++){
								if(target.canEquip(es[i])) return true;
							}
							return false;
						}
						else{
							return target.countCards('e')>0;
						}
					});
					next.set('ai',function(target){
						var player=_status.event.player;
						var att=get.attitude(player,target);
						var sgnatt=get.sgn(att);
						if(ui.selected.targets.length==0){
							if(att>0){
								if(target.countCards('e',function(card){
									return get.value(card,target)<0&&game.hasPlayer(function(current){
										return current!=player&&current!=target&&get.attitude(player,current)<0&&current.canEquip(card)&&get.effect(current,card,player,player)>0;
									});
								})>0) return 9;
							}
							else if(att<0){
								if(game.hasPlayer(function(current){
									if(current!=target&&current!=player&&get.attitude(player,current)>0){
										var es=target.getCards('e');
										for(var i=0;i<es.length;i++){
											if(get.value(es[i],target)>0&&current.canEquip(es[i])&&get.effect(current,es[i],player,player)>0) return true;
										}
									}
								})){
									return -att;
								}
							}
							return 0;
						}
						var es=ui.selected.targets[0].getCards('e');
						var i;
						var att2=get.sgn(get.attitude(player,ui.selected.targets[0]));
						for(i=0;i<es.length;i++){
							if(sgnatt!=0&&att2!=0&&sgnatt!=att2&&
								get.sgn(get.value(es[i],ui.selected.targets[0]))==-att2&&
								get.sgn(get.value(es[i],target))==sgnatt&&
								target.canEquip(es[i])){
								return Math.abs(att);
							}
						}
						if(i==es.length){
							return 0;
						}
						return -att*get.attitude(player,ui.selected.targets[0]);
					});
					next.set('multitarget',true);
					next.set('targetprompt',['被移走','移动目标']);
					next.set('prompt',event.prompt||'移动场上的一张装备牌');
					next.set('forced',true);
					'step 6'
					if(result.bool){
						player.line2(result.targets,'green');
						event.targets=result.targets;
					}
					else{
						event.finish();
					}
					'step 7'
					game.delay();
					'step 8'
					if(targets.length==2){
						player.choosePlayerCard('e',true,function(button){
							var player=_status.event.player;
							var targets0=_status.event.targets0;
							var targets1=_status.event.targets1;
							if(get.attitude(player,targets0)>get.attitude(player,targets1)){
								if(get.value(button.link,targets0)<0) return get.effect(targets1,button.link,player,player);
								return 0;
							}
							else{
								return get.value(button.link,targets0)*get.effect(targets1,button.link,player,player);
							}
						},targets[0]).set('targets0',targets[0]).set('targets1',targets[1]).set('filterButton',function(button){
							var targets1=_status.event.targets1;
							return targets1.canEquip(button.link);
						});
					}
					else{
						event.finish();
					}
					'step 9'
					if(result.bool&&result.links.length){
						var link=result.links[0];
						event.targets[1].equip(link);
						event.targets[0].$give(link,event.targets[1])
						game.delay();
						event.result={bool:true};
					}
				},
				canMoveCard:function(player,withatt){
					return game.hasPlayer(function(current){
						if(player==current) return false;
						var att=get.sgn(get.attitude(player,current));
						if(!withatt||att!=0){
							var es=current.getCards('e');
							for(var i=0;i<es.length;i++){
								if(game.hasPlayer(function(current2){
									if(player==current2) return false;
									if(withatt){
										if(get.sgn(get.value(es[i],current))!=-att) return false;
										var att2=get.sgn(get.attitude(player,current2));
										if(att==att2||att2!=get.sgn(get.value(es[i],current2))) return false;
									}
									return current!=current2&&!current2.isMin()&&current2.canEquip(es[i]);
								})){
									return true;
								}
							}
						}
					});
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(get.type(card)=='equip'&&!get.cardtag(card,'gifts')) return [1,3];
						}
					},
					reverseEquip:true,
					noe:true
				}
			},
			rechunlao:{
				trigger:{player:'phaseUseEnd'},
				direct:true,
				audio:2,
				filter:function(event,player){
					return player.countCards('h')>0&&(_status.connectMode||player.countCards('h','sha')>0)&&!player.getExpansions('rechunlao').length;
				},
				intro:{
					content:'expansion',
					markcount:'expansion',
				},
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				content:function(){
					'step 0'
					player.chooseCard([1,Math.max(1,player.countCards('h','sha'))],get.prompt('rechunlao'),'将任意张【杀】置于武将牌上作为“醇”',{name:'sha'}).set('ai',function(){
						return 1;
					});
					'step 1'
					if(result.bool){
						player.logSkill('rechunlao');
						player.addToExpansion('gain2',result.cards).gaintag.add('rechunlao');
					}
				},
				ai:{
					threaten:1.4
				},
				group:'rechunlao2'
			},
			rechunlao2:{
				enable:'chooseToUse',
				filter:function(event,player){
					return event.type=='dying'&&event.dying&&event.dying.hp<=0&&player.getExpansions('rechunlao').length>0;
				},
				filterTarget:function(card,player,target){
					return target==_status.event.dying;
				},
				direct:true,
				delay:false,
				selectTarget:-1,
				content:function(){
					"step 0"
					player.chooseCardButton(get.translation('rechunlao'),player.getExpansions('rechunlao'),true);
					"step 1"
					if(result.bool){
						player.logSkill('rechunlao');
						event.type='dying';
						player.loseToDiscardpile(result.links);
						target.useCard({name:'jiu',isCard:true},target);
						var natures=get.natureList(result.links[0]);
						if(natures.includes('fire')) player.recover();
						if(natures.includes('thunder')) player.draw(2);
					}
				},
				ai:{
					order:6,
					skillTagFilter:function(player){
						return player.getExpansions('rechunlao').length>0;
					},
					save:true,
					result:{
						target:3
					},
					threaten:1.6
				},
			},
			reluoying:{
				audio:2,
				audioname:['dc_caozhi'],
				group:['reluoying_discard','reluoying_judge'],
				subfrequent:['judge'],
				subSkill:{
					discard:{
						audio:'reluoying',
						audioname:['dc_caozhi'],
						trigger:{global:['loseAfter','loseAsyncAfter']},
						filter:function(event,player){
							if(event.type!='discard'||event.getlx===false) return false;
							var cards=event.cards.slice(0);
							var evt=event.getl(player);
							if(evt&&evt.cards) cards.removeArray(evt.cards);
							for(var i=0;i<cards.length;i++){
								if(cards[i].original!='j'&&get.suit(cards[i],event.player)=='club'&&get.position(cards[i],true)=='d'){
									return true;
								}
							}
							return false;
						},
						direct:true,
						content:function(){
							"step 0"
							if(trigger.delay==false) game.delay();
							"step 1"
							var cards=[],cards2=trigger.cards.slice(0),evt=trigger.getl(player);
							if(evt&&evt.cards) cards2.removeArray(evt.cards);
							for(var i=0;i<cards2.length;i++){
								if(cards2[i].original!='j'&&get.suit(cards2[i],trigger.player)=='club'&&get.position(cards2[i],true)=='d'){
									cards.push(cards2[i]);
								}
							}
							if(cards.length){
								player.chooseButton(['落英：选择要获得的牌',cards],[1,cards.length]).set('ai',function(button){
									return get.value(button.link,_status.event.player,'raw');
								});
							}
							"step 2"
							if(result.bool){
								player.logSkill(event.name);
								player.gain(result.links,'gain2','log');
							}
						},
					},
					judge:{
						audio:'reluoying',
						audioname:['dc_caozhi'],
						trigger:{global:'cardsDiscardAfter'},
						direct:true,
						filter:function(event,player){
							var evt=event.getParent().relatedEvent;
							if(!evt||evt.name!='judge') return;
							if(evt.player==player) return false;
							if(get.position(event.cards[0],true)!='d') return false;
							return (get.suit(event.cards[0])=='club');
						},
						content:function(){
							"step 0"
							player.chooseButton(['落英：选择要获得的牌',trigger.cards],[1,trigger.cards.length]).set('ai',function(button){
								return get.value(button.link,_status.event.player,'raw');
							});
							"step 1"
							if(result.bool){
								player.logSkill(event.name);
								player.gain(result.links,'gain2','log');
							}
						}
					}
				}
			},
			chengzhang:{
				trigger:{player:'phaseZhunbeiBegin'},
				derivation:'rejiushi_mark',
				forced:true,
				unique:true,
				juexingji:true,
				skillAnimation:true,
				animationColor:'water',
				filter:function(event,player){
					var num=0;
					player.getAllHistory('sourceDamage',function(evt){
						num+=evt.num;
					});
					if(num>=7) return true;
					player.getAllHistory('damage',function(evt){
						num+=evt.num;
					});
					return num>7;
				},
				content:function(){
					player.markSkill('rejiushi_mark');
					player.awakenSkill('chengzhang');
					player.storage.chengzhang=true;
					player.recover();
					player.draw();
				},
			},
			rejiushi:{
				audio:2,
				group:['rejiushi1','rejiushi2','rejiushi3','rejiushi_gain'],
				subfrequent:['gain'],
				subSkill:{
					gain:{
						audio:'rejiushi',
						trigger:{player:'turnOverAfter'},
						frequent:true,
						filter:function(event,player){
							return player.storage.chengzhang==true;
						},
						prompt:'是否发动【酒诗】，获得牌堆中的一张锦囊牌？',
						content:function(){
							var card=get.cardPile2(function(card){
								return get.type2(card)=='trick';
							});
							if(card) player.gain(card,'gain2','log');
						},
					},
				},
			},
			rejiushi1:{
				hiddenCard:function(player,name){
					if(name=='jiu') return !player.isTurnedOver();
					return false;
				},
				audio:'rejiushi',
				enable:'chooseToUse',
				filter:function(event,player){
					if(player.classList.contains('turnedover')) return false;
					return event.filterCard({name:'jiu',isCard:true},player,event);
				},
				content:function(){
					if(_status.event.getParent(2).type=='dying'){
						event.dying=player;
						event.type='dying';
					}
					player.turnOver();
					player.useCard({name:'jiu',isCard:true},player);
				},
				ai:{
					order:5,
					result:{
						player:function(player){
							if(_status.event.parent.name=='phaseUse'){
								if(player.countCards('h','jiu')>0) return 0;
								if(player.getEquip('zhuge')&&player.countCards('h','sha')>1) return 0;
								if(!player.countCards('h','sha')) return 0;
								var targets=[];
								var target;
								var players=game.filterPlayer();
								for(var i=0;i<players.length;i++){
									if(get.attitude(player,players[i])<0){
										if(player.canUse('sha',players[i],true,true)){
											targets.push(players[i]);
										}
									}
								}
								if(targets.length){
									target=targets[0];
								}
								else{
									return 0;
								}
								var num=get.effect(target,{name:'sha'},player,player);
								for(var i=1;i<targets.length;i++){
									var num2=get.effect(targets[i],{name:'sha'},player,player);
									if(num2>num){
										target=targets[i];
										num=num2;
									}
								}
								if(num<=0) return 0;
								var e2=target.getEquip(2);
								if(e2){
									if(e2.name=='tengjia'){
										if(!player.countCards('h',{name:'sha',nature:'fire'})&&!player.getEquip('zhuque')) return 0;
									}
									if(e2.name=='renwang'){
										if(!player.countCards('h',{name:'sha',color:'red'})) return 0;
									}
									if(e2.name=='baiyin') return 0;
								}
								if(player.getEquip('guanshi')&&player.countCards('he')>2) return 1;
								return target.countCards('h')>3?0:1;
							}
							if(player==_status.event.dying||player.isTurnedOver()) return 3;
						}
					},
					effect:{
						target:function(card,player,target){
							if(card.name=='guiyoujie') return [0,0.5];
							if(target.isTurnedOver()){
								if(get.tag(card,'damage')){
									if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
									if(target.hp==1) return;
									return [1,target.countCards('h')/2];
								}
							}
						}
					}
				},
			},
			rejiushi2:{
				trigger:{player:'damageBegin3'},
				silent:true,
				firstDo:true,
				filter:function(event,player){
					return player.classList.contains('turnedover');
				},
				content:function(){
					trigger.rejiushi=true;
				}
			},
			rejiushi3:{
				audio:'rejiushi',
				trigger:{player:'damageEnd'},
				check:function(event,player){
					return player.isTurnedOver();
				},
				filter:function(event,player){
					if(event.rejiushi){
						return true;
					}
					return false;
				},
				prompt:function(event,player){
					var str='是否发动【酒诗】，将武将牌翻面';
					if(!player.storage.chengzhang) str+='，并获得牌堆中的一张锦囊牌';
					str+='？'
					return str;
				},
				content:function(){
					delete trigger.rejiushi;
					player.turnOver();
					if(!player.storage.chengzhang){
						var card=get.cardPile2(function(card){
							return get.type2(card)=='trick';
						});
						if(card) player.gain(card,'gain2','log');
					}
				}
			},
			rejiushi_mark:{
				mark:true,
				marktext:'改',
				intro:{
					content:'当你需要使用【酒】时，若你的武将牌正面向上，你可以翻面，视为使用一张【酒】。当你受到伤害后，若你的武将牌背面向上，你可以翻面。当你翻面时，你获得牌堆中的一张随机锦囊。',
				},
			},
			rehongyan:{
				audio:2,
				mod:{
					suit:function(card,suit){
						if(suit=='spade') return 'heart';
					}
				},
				trigger:{player:'loseEnd'},
				filter:function(event,player){
					if(player==_status.currentPhase||!event.visible||player.hp<=player.countCards('h')) return false;
					for(var i=0;i<event.cards2.length;i++){
						if(get.suit(event.cards2[i],player)=='heart') return true;
					}
					return false;
				},
				frequent:true,
				content:function(){
					player.draw();
				},
			},
			reqimou:{
				unique:true,
				limited:true,
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					return !player.storage.reqimou;
				},
				init:function(player){
					player.storage.reqimou=false;
				},
				mark:true,
				intro:{
					content:'limited'
				},
				skillAnimation:true,
				animationColor:'orange',
				content:function(){
					'step 0'
					var num=player.hp-1;
					if(player.countCards('hs',{name:['tao','jiu']})){
						num=player.hp;
					}
					var map={};
					var list=[];
					for(var i=1;i<=player.hp;i++){
						var cn=get.cnNumber(i,true);
						map[cn]=i;
						list.push(cn);
					}
					event.map=map;
					player.awakenSkill('reqimou');
					player.storage.reqimou=true;
					player.chooseControl(list,function(){
						return get.cnNumber(_status.event.goon,true);
					}).set('prompt','失去任意点体力').set('goon',num);
					'step 1'
					var num=event.map[result.control]||1;
					player.storage.reqimou2=num;
					player.loseHp(num);
					player.draw(num);
					player.addTempSkill('reqimou2');
				},
				ai:{
					order:14,
					result:{
						player:function(player){
							if(player.hp<3) return false;
							var mindist=player.hp;
							if(player.countCards('hs',card=>player.canSaveCard(card,player))) mindist++;
							if(game.hasPlayer(function(current){
								return (get.distance(player,current)<=mindist&&
									player.canUse('sha',current,false)&&
									get.effect(current,{name:'sha'},player,player)>0);
							})){
								return 1;
							}
							return 0;
						}
					}
				}
			},
			reqimou2:{
				onremove:true,
				mod:{
					cardUsable:function(card,player,num){
						if(typeof player.storage.reqimou2=='number'&&card.name=='sha'){
							return num+player.storage.reqimou2;
						}
					},
					globalFrom:function(from,to,distance){
						if(typeof from.storage.reqimou2=='number'){
							return distance-from.storage.reqimou2;
						}
					}
				}
			},
			olniepan:{
				audio:2,
				unique:true,
				enable:'chooseToUse',
				mark:true,
				skillAnimation:true,
				limited:true,
				animationColor:'orange',
				init:function(player){
					player.storage.olniepan=false;
				},
				filter:function(event,player){
					if(player.storage.olniepan) return false;
					if(event.type=='dying'){
						if(player!=event.dying) return false;
						return true;
					}
					return false;
				},
				content:function(){
					'step 0'
					player.awakenSkill('olniepan');
					player.storage.olniepan=true;
					player.discard(player.getCards('hej'));
					'step 1'
					player.link(false);
					'step 2'
					player.turnOver(false);
					'step 3'
					player.draw(3);
					'step 4'
					if(player.hp<3){
						player.recover(3-player.hp);
					}
					'step 5'
					player.chooseControl('bazhen','olhuoji','olkanpo').set('prompt','选择获得一个技能').ai=function(){
						return ['olhuoji','bazhen'].randomGet();
					};
					'step 6'
					player.addSkills(result.control);
				},
				derivation:['bazhen','olhuoji','olkanpo'],
				ai:{
					order:1,
					skillTagFilter:function(player,tag,target){
						if(player!=target||player.storage.olniepan) return false;
					},
					save:true,
					result:{
						player:function(player){
							if(player.hp<=0) return 10;
							if(player.hp<=2&&player.countCards('he')<=1) return 10;
							return 0;
						}
					},
					threaten:function(player,target){
						if(!target.storage.olniepan) return 0.6;
					}
				},
				intro:{
					content:'limited'
				}
			},
			rewurong:{
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('h')>0;
				},
				content:function(){
					"step 0"
					if(target.countCards('h')==0||player.countCards('h')==0){
						event.finish();
						return;
					}
					"step 1"
					var sendback=function(){
						if(_status.event!=event){
							return function(){
								event.resultOL=_status.event.resultOL;
							};
						}
					};
					if(player.isOnline()){
						player.wait(sendback);
						event.ol=true;
						player.send(function(){
							game.me.chooseCard(true).set('glow_result',true).ai=function(){
								return Math.random();
							};
							game.resume();
						});
					}
					else{
						event.localPlayer=true;
						var hasShan=!target.countCards('h','shan');
						player.chooseCard(true).set('glow_result',true).ai=function(card){
							if(hasShan&&get.name(card)=='sha') return 1;
							return Math.random();
						}
					}
					if(target.isOnline()){
						target.wait(sendback);
						event.ol=true;
						target.send(function(){
							var rand=Math.random()<0.4;
							game.me.chooseCard(true).set('glow_result',true).ai=function(card){
								if(rand) return card.name=='shan'?1:0;
								return card.name=='shan'?0:1;
							};
							game.resume();
						});
					}
					else{
						event.localTarget=true;
					}
					"step 2"
					if(event.localPlayer){
						event.card1=result.cards[0];
					}
					if(event.localTarget){
						var rand=Math.random()<0.4;
						target.chooseCard(true).set('glow_result',true).ai=function(card){
							if(rand) return card.name=='shan'?1:0;
							return card.name=='shan'?0:1;
						};
					}
					"step 3"
					if(event.localTarget){
						event.card2=result.cards[0];
					}
					if(!event.resultOL&&event.ol){
						game.pause();
					}
					"step 4"
					try{
						if(!event.card1) event.card1=event.resultOL[player.playerid].cards[0];
						if(!event.card2) event.card2=event.resultOL[target.playerid].cards[0];
						if(!event.card1||!event.card2){
							throw('err');
						}
					}
					catch(e){
						console.log(e);
						event.finish();
						return;
					}
					game.broadcastAll(function(card1,card2){
						card1.classList.remove('glow');
						card2.classList.remove('glow');
					},event.card1,event.card2);
					"step 5"
					game.broadcastAll(function(){
						ui.arena.classList.add('thrownhighlight');
					});
					game.addVideo('thrownhighlight1');
					player.$compare(event.card1,target,event.card2);
					game.delay(4);
					"step 6"
					var next=game.createEvent('showCards');
					next.player=player;
					next.cards=[event.card1];
					next.setContent('emptyEvent');
					game.log(player,'展示了',event.card1);
					"step 7"
					var next=game.createEvent('showCards');
					next.player=target;
					next.cards=[event.card2];
					next.setContent('emptyEvent');
					game.log(target,'展示了',event.card2);
					"step 8"
					var name1=get.name(event.card1);
					var name2=get.name(event.card2);
					if(name1=='sha'&&name2!='shan'){
						//player.discard(event.card1).set('animate',false);
						target.$gain2(event.card2);
						var clone=event.card1.clone;
						if(clone){
							clone.style.transition='all 0.5s';
							clone.style.transform='scale(1.2)';
							clone.delete();
							game.addVideo('deletenode',player,get.cardsInfo([clone]));
						}
						game.broadcast(function(card){
							var clone=card.clone;
							if(clone){
								clone.style.transition='all 0.5s';
								clone.style.transform='scale(1.2)';
								clone.delete();
							}
						},event.card1);
						target.damage('nocard');
					}
					else if(name1!='sha'&&name2=='shan'){
						//player.discard(event.card1).set('animate',false);
						target.$gain2(event.card2);
						var clone=event.card1.clone;
						if(clone){
							clone.style.transition='all 0.5s';
							clone.style.transform='scale(1.2)';
							clone.delete();
							game.addVideo('deletenode',player,get.cardsInfo([clone]));
						}
						game.broadcast(function(card){
							var clone=card.clone;
							if(clone){
								clone.style.transition='all 0.5s';
								clone.style.transform='scale(1.2)';
								clone.delete();
							}
						},event.card1);
						player.gainPlayerCard(target,true,'he');
					}
					else{
						player.$gain2(event.card1);
						target.$gain2(event.card2);
					}
					game.broadcastAll(function(){
						ui.arena.classList.remove('thrownhighlight');
					});
					game.addVideo('thrownhighlight2');
				},
				ai:{
					order:6,
					result:{
						target:-1,
					}
				}
			},
			cangzhuo:{
				trigger:{player:'phaseDiscardBegin'},
				frequent:true,
				audio:2,
				filter:function(event,player){
					return player.getHistory('useCard',function(card){
						return get.type(card.card,'trick')=='trick';
					}).length==0;
				},
				content:function(){
					player.addTempSkill('cangzhuo2');
				},
			},
			cangzhuo2:{
				mod:{
					ignoredHandcard:function(card,player){
						if(get.type(card,'trick')=='trick'){
							return true;
						}
					},
					cardDiscardable:function(card,player,name){
						if(name=='phaseDiscard'&&get.type(card,'trick')=='trick') return false;
					}
				},
			},
			shebian:{
				trigger:{player:'turnOverEnd'},
				check:function(event,player){
					return player.canMoveCard(true,true);
				},
				filter:function(event,player){
					return player.canMoveCard(null,true);
				},
				content:function(){
					player.moveCard().nojudge=true;
				},
			},
			rexianzhen:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return player.canCompare(target);
				},
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				content:function(){
					"step 0"
					player.chooseToCompare(target);
					"step 1"
					if(result.player&&get.name(result.player,player)=='sha') player.addTempSkill('rexianzhen4');
					if(result.bool){
						player.storage[event.name]=target;
						player.addTempSkill(event.name+2);
					}
					else{
						player.addTempSkill(event.name+3);
					}
				},
				ai:{
					order:function(name,player){
						var cards=player.getCards('h');
						if(player.countCards('h','sha')==0){
							return 1;
						}
						for(var i=0;i<cards.length;i++){
							if(cards[i].name!='sha'&&get.number(cards[i])>11&&get.value(cards[i])<7){
								return 9;
							}
						}
						return get.order({name:'sha'})-1;
					},
					result:{
						player:function(player){
							if(player.countCards('h','sha')>0) return 0;
							var num=player.countCards('h');
							if(num>player.hp) return 0;
							if(num==1) return -2;
							if(num==2) return -1;
							return -0.7;
						},
						target:function(player,target){
							var num=target.countCards('h');
							if(num==1) return -1;
							if(num==2) return -0.7;
							return -0.5
						},
					},
					threaten:1.3
				}
			},
			rexianzhen2:{
				charlotte:true,
				mod:{
					targetInRange:function(card,player,target){
						if(target==player.storage.rexianzhen) return true;
					},
					cardUsableTarget:function(card,player,target){
						if(target==player.storage.rexianzhen) return true;
					}
				},
				ai:{
					unequip:true,
					skillTagFilter:function(player,tag,arg){
						if(arg.target!=player.storage.rexianzhen) return false;
					},
				}
			},
			rexianzhen3:{
				charlotte:true,
				mod:{
					cardEnabled:function(card){if(card.name=='sha') return false}
				}
			},
			rexianzhen4:{
				mod:{
					ignoredHandcard:function(card,player){
						if(get.name(card)=='sha'){
							return true;
						}
					},
					cardDiscardable:function(card,player,name){
						if(name=='phaseDiscard'&&get.name(card)=='sha'){
							return false;
						}
					},
				},
			},
			rejinjiu:{
				mod:{
					cardname:function(card,player){
						if(card.name=='jiu') return 'sha';
					},
				},
				ai:{
					skillTagFilter:function(player){
						if(!player.countCards('h','jiu')) return false;
					},
					respondSha:true,
				},
				audio:2,
				trigger:{player:['useCard1','respond']},
				firstDo:true,
				forced:true,
				filter:function(event,player){
					return event.card.name=='sha'&&!event.skill&&
					event.cards.length==1&&event.cards[0].name=='jiu';
				},
				content:function(){},
				group:'rejinjiu2',
				global:'rejinjiu3',
			},
			rejinjiu3:{
				mod:{
					cardEnabled:function(card,player){
						if(card.name=='jiu'&&_status.currentPhase&&_status.currentPhase!=player&&_status.currentPhase.hasSkill('rejinjiu')) return false;
					},
					cardSavable:function(card,player){
						if(card.name=='jiu'&&_status.currentPhase&&_status.currentPhase!=player&&_status.currentPhase.hasSkill('rejinjiu')) return false;
					},
				},
			},
			rejinjiu2:{
				audio:'rejinjiu',
				forced:true,
				trigger:{player:'damageBegin3'},
				filter:function(event,player){
					return event.getParent(2).jiu==true;
				},
				content:function(){
					trigger.num-=trigger.getParent(2).jiu_add;
				},
				ai:{
					filterDamage:true,
					skillTagFilter:function(player,tag,arg){
						return arg&&arg.jiu==true;
					},
				},
			},
			repojun:{
				shaRelated:true,
				audio:2,
				trigger:{player:'useCardToPlayered'},
				direct:true,
				filter:function(event,player){
					return event.card.name=='sha'&&event.target.hp>0&&event.target.countCards('he')>0;
				},
				content:function(){
					'step 0'
					var next=player.choosePlayerCard(trigger.target,'he',[1,Math.min(trigger.target.hp,trigger.target.countCards('he'))],get.prompt('repojun',trigger.target));
					next.set('ai',function(button){
						if(!_status.event.goon) return 0;
						var val=get.value(button.link);
						if(button.link==_status.event.target.getEquip(2)) return 2*(val+3);
						return val;
					});
					next.set('goon',get.attitude(player,trigger.target)<=0);
					next.set('forceAuto',true);
					'step 1'
					if(result.bool){
						var target=trigger.target;
						player.logSkill('repojun',target);
						target.addSkill('repojun2');
						target.addToExpansion('giveAuto',result.cards,target).gaintag.add('repojun2');
					}
				},
				ai:{
					unequip_ai:true,
					directHit_ai:true,
					skillTagFilter:function(player,tag,arg){
						if(get.attitude(player,arg.target)>0) return false;
						if(tag=='directHit_ai') return arg.target.hp>=Math.max(1,arg.target.countCards('h')-1);
						if(arg&&arg.name=='sha'&&arg.target.getEquip(2)) return true;
						return false;
					}
				},
				group:'repojun3',
			},
			repojun3:{
				audio:'repojun',
				trigger:{source:'damageBegin1'},
				filter:function(event,player){
					var target=event.player;
					return event.card&&event.card.name=='sha'&&player.countCards('h')>=target.countCards('h')&&player.countCards('e')>=target.countCards('e');
				},
				forced:true,
				locked:false,
				logTarget:'player',
				content:function(){
					trigger.num++;
				},
			},
			repojun2:{
				trigger:{global:'phaseEnd'},
				forced:true,
				popup:false,
				charlotte:true,
				filter:function(event,player){
					return player.getExpansions('repojun2').length>0;
				},
				content:function(){
					'step 0'
					var cards=player.getExpansions('repojun2');
					player.gain(cards,'draw');
					game.log(player,'收回了'+get.cnNumber(cards.length)+'张“破军”牌');
					'step 1'
					player.removeSkill('repojun2');
				},
				intro:{
					markcount:'expansion',
					mark:function(dialog,storage,player){
						var cards=player.getExpansions('repojun2');
						if(player.isUnderControl(true)) dialog.addAuto(cards);
						else return '共有'+get.cnNumber(cards.length)+'张牌';
					},
				},
			},
			sishu:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('sishu')).ai=function(target){
						var att=get.attitude(_status.event.player,target);
						if(target.countMark('sishu2')%2==1) return -att;
						return att;
					}
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('sishu',target)
						target.addSkill('sishu2');
						target.addMark('sishu2',1,false);
					}
				},
			},
			sishu2:{
				charlotte:true,
				marktext:'思',
				intro:{
					name:'思蜀',
					content:'本局游戏内计算【乐不思蜀】的效果时反转#次',
				},
				mod:{
					judge:function(player,result){
						if(_status.event.cardname=='lebu'&&player.countMark('sishu2')%2==1){
							if(result.bool==false){
								result.bool=true;
							}
							else{
								result.bool=false;
							}
						}
					}
				},
			},
			olruoyu:{
				skillAnimation:true,
				animationColor:'fire',
				audio:2,
				unique:true,
				juexingji:true,
				zhuSkill:true,
				keepSkill:true,
				derivation:['rejijiang','sishu'],
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				filter:function(event,player){
					if(!player.hasZhuSkill('olruoyu')) return false;
					return player.isMinHp();
				},
				content:function(){
					'step 0'
					player.awakenSkill('olruoyu');
					player.gainMaxHp();
					'step 1'
					if(player.hp<3) player.recover(3-player.hp);
					player.addSkills(['sishu', 'rejijiang']);
				}
			},
			olfangquan:{
				audio:2,
				audioname:['shen_caopi'],
				trigger:{player:'phaseUseBefore'},
				filter:function(event,player){
					return player.countCards('h')>0&&!player.hasSkill('olfangquan3');
				},
				direct:true,
				content:function(){
					"step 0"
					var fang=player.countMark('olfangquan2')==0&&player.hp>=2&&player.countCards('h')<=player.hp+2;
					player.chooseBool(get.prompt2('olfangquan')).set('ai',function(){
						if(!_status.event.fang) return false;
						return game.hasPlayer(function(target){
							if(target.hasJudge('lebu')||target==player) return false;
							if(get.attitude(player,target)>4){
								return (get.threaten(target)/Math.sqrt(target.hp+1)/Math.sqrt(target.countCards('h')+1)>0);
							}
							return false;
						});
					}).set('fang',fang);
					"step 1"
					if(result.bool){
						player.logSkill('olfangquan');
						trigger.cancel();
						player.addTempSkill('olfangquan2');
						player.addMark('olfangquan2',1,false);
					}
				}
			},
			olfangquan2:{
				trigger:{player:'phaseDiscardBegin'},
				forced:true,
				popup:false,
				audio:false,
				onremove:true,
				content:function(){
					"step 0"
					event.count=player.countMark(event.name);
					player.removeMark(event.name,event.count,false);
					"step 1"
					event.count--;
					player.chooseToDiscard('是否弃置一张牌并令一名其他角色进行一个额外回合？').set('logSkill','olfangquan').ai=function(card){
						return 20-get.value(card);
					};
					"step 2"
					if(result.bool){
						player.chooseTarget(true,'请选择进行额外回合的目标角色',lib.filter.notMe).ai=function(target){
							if(target.hasJudge('lebu')) return -1;
							if(get.attitude(player,target)>4){
								return get.threaten(target)/Math.sqrt(target.hp+1)/Math.sqrt(target.countCards('h')+1);
							}
							return -1;
						};
					}
					else event.finish();
					"step 3"
					var target=result.targets[0];
					player.line(target,'fire');
					target.markSkillCharacter('olfangquan',player,'放权','进行一个额外回合');
					target.insertPhase();
					target.addSkill('olfangquan3');
					if(event.count>0) event.goto(1);
				}
			},
			olfangquan3:{
				trigger:{player:['phaseAfter','phaseCancelled']},
				forced:true,
				popup:false,
				audio:false,
				content:function(){
					player.unmarkSkill('olfangquan');
					player.removeSkill('olfangquan3');
				}
			},
			olluanji:{
				inherit:'luanji',
				audioname:['shen_caopi'],
				audio:2,
				line:false,
				group:'olluanji_remove',
				check:function(card){
					return 7-get.value(card);
				},
			},
			olluanji_remove:{
				trigger:{player:'useCard2'},
				direct:true,
				filter:function(event,player){
					return event.card.name=='wanjian'&&event.targets.length>0;
				},
				line:false,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('olluanji'),'为'+get.translation(trigger.card)+'减少一个目标',function(card,player,target){
						return _status.event.targets.includes(target)
					}).set('targets',trigger.targets).set('ai',function(target){
						var player=_status.event.player;
						return -get.effect(target,_status.event.getTrigger().card,player,player)
					});
					'step 1'
					if(result.bool){
						player.logSkill('olluanji',result.targets);
						trigger.targets.remove(result.targets[0]);
					}
				},
			},
			olxueyi:{
				audio:2,
				trigger:{global:'phaseBefore',player:'enterGame'},
				forced:true,
				zhuSkill:true,
				unique:true,
				filter:function(event,player){
					return (event.name!='phase'||game.phaseNumber==0)&&player.hasZhuSkill('olxueyi');
				},
				content:function(){
					// player.storage.olxueyi_inited=true;
					var num=game.countPlayer(function(current){
						return	current.group=='qun';
					})
					if(num) player.addMark('olxueyi',num*2);
				},
				marktext:'裔',
				intro:{
					name2:'裔',
					content:'mark',
				},
				mod:{
					maxHandcard:function(player,num){
						if(player.hasZhuSkill('olxueyi')) return num+player.countMark('olxueyi');
					},
				},
				group:'olxueyi_draw',
			},
			olxueyi_draw:{
				audio:'olxueyi',
				trigger:{player:'phaseUseBegin'},
				prompt2:'弃置一枚「裔」标记，然后摸一张牌',
				check:function(event,player){
					return player.getUseValue('wanjian')>0||!player.needsToDiscard();
				},
				filter:function(event,player){
					return player.hasZhuSkill('olxueyi')&&player.hasMark('olxueyi');
				},
				content:function(){
					player.removeMark('olxueyi',1);
					player.draw();
				},
			},
			olhunzi:{
				audio:2,
				audioname:['re_sunyi'],
				inherit:'hunzi',
				content:function(){
					player.awakenSkill(event.name);
					player.loseMaxHp();
					//player.recover();
					player.addSkills(['reyingzi','gzyinghun']);
					player.addTempSkill('olhunzi_effect');
				},
				subSkill:{
					effect:{
						trigger:{player:'phaseJieshuBegin'},
						forced:true,
						popup:false,
						charlotte:true,
						content:function(){
							player.chooseDrawRecover(2,true);
						},
					},
				},
			},
			olzhiba:{
				audio:2,
				unique:true,
				zhuSkill:true,
				global:'olzhiba2',
			},
			olzhiba2:{
				ai:{
					order:1,
					result:{
						target:function(player,target){
							if(player.hasZhuSkill('olzhiba')&&!player.hasSkill('olzhiba3')&&target.group=='wu'){
								if(player.countCards('h',function(card){
									var val=get.value(card);
									if(val<0) return true;
									if(val<=5){
										return get.number(card)>=12;
									}
									if(val<=6){
										return get.number(card)>=13;
									}
									return false;
								})>0) return -1;
								return 0;
							}
							else{
								if(player.countCards('h','du')&&get.attitude(player,target)<0) return -1;
								if(player.countCards('h')<=player.hp) return 0;
								var maxnum=0;
								var cards2=target.getCards('h');
								for(var i=0;i<cards2.length;i++){
									if(get.number(cards2[i])>maxnum){
										maxnum=get.number(cards2[i]);
									}
								}
								if(maxnum>10) maxnum=10;
								if(maxnum<5&&cards2.length>1) maxnum=5;
								var cards=player.getCards('h');
								for(var i=0;i<cards.length;i++){
									if(get.number(cards[i])<maxnum) return 1;
								}
								return 0;
							}
						},
					},
				},
				enable:'phaseUse',
				//usable:1,
				prompt:'请选择〖制霸〗的目标',
				filter:function(event,player){
					if(player.hasZhuSkill('olzhiba')&&!player.hasSkill('olzhiba3')&&game.hasPlayer(function(current){
						return current!=player&&current.group=='wu'&&player.canCompare(current);
					})) return true;
					return (player.group=='wu'&&game.hasPlayer(function(current){
						return current!=player&&current.hasZhuSkill('olzhiba',player)&&!current.hasSkill('olzhiba3')&&player.canCompare(current);
					}));
				},
				filterTarget:function(card,player,target){
					if(player.hasZhuSkill('olzhiba')&&!player.hasSkill('olzhiba3')&&target.group=='wu'&&player.canCompare(target)) return true;
					return player.group=='wu'&&target.hasZhuSkill('olzhiba',player)&&!target.hasSkill('olzhiba3')&&player.canCompare(target);
				},
				prepare:function(cards,player,targets){
					if(player.hasZhuSkill('olzhiba')) player.logSkill('olzhiba')
					if(targets[0].hasZhuSkill('olzhiba',player)) targets[0].logSkill('olzhiba');
				},
				direct:true,
				clearTime:true,
				contentBefore:function(){
					'step 0'
					var list=[];
					if(player.hasZhuSkill('olzhiba')&&targets[0].group=='wu'&&!player.hasSkill('olzhiba3')) list.push(player);
					if(player.group=='wu'&&targets[0].hasZhuSkill('olzhiba')&&!targets[0].hasSkill('olzhiba3')) list.push(targets[0]);
					if(list.length==1){
						event.target=list[0];
						event.goto(2);
					}
					else player.chooseTarget(true,'请选择获得所有拼点牌的角色',function(card,player,target){
						return _status.event.list.includes(target);
					}).set('list',list);
					'step 1'
					event.target=result.targets[0];
					'step 2'
					target.addTempSkill('olzhiba3','phaseUseEnd')
					if(target==targets[0]){
						target.chooseBool('是否接受来自'+get.translation(player)+'的拼点请求？').set('choice',(get.attitude(target,player)>0||target.countCards('h',function(card){
							var val=get.value(card);
							if(val<0) return true;
							if(val<=5){
								return get.number(card)>=12;
							}
							if(val<=6){
								return get.number(card)>=13;
							}
							return false;
						})>0)).set('ai',function(){return _status.event.choice});
					}
					else event._result={bool:true};
					'step 3'
					if(result.bool) event.getParent().zhiba_target=target;
					else{
						game.log(target,'拒绝了',player,'的拼点请求');
						target.chat('拒绝');
					}
				},
				content:function(){
					'step 0'
					event.source=event.getParent().zhiba_target;
					if(!event.source){
						event.finish();
					}
					'step 1'
					player.chooseToCompare(target).set('small',target==source&&get.attitude(player,target)>0).clear=false;
					'step 2'
					if(player==source&&result.bool||target==source&&!result.bool){
						event.cards=[result.player,result.target].filterInD('d');
						if(!event.cards.length) event.finish();
						else source.chooseControl('ok','cancel2').set('dialog',['是否获得拼点牌？',event.cards]).set('ai',function(){
							if(get.value(event.cards,source,'raw')<=0) return false;
							return true;
						});
					}
					else event.finish();
					'step 3'
					if(result.control!='cancel2') source.gain(event.cards,'gain2','log');
					else ui.clear();
				},
			},
			olzhiba3:{},
			rehuashen:{
				unique:true,
				audio:2,
				trigger:{
					global:'phaseBefore',
					player:['enterGame','phaseBegin','phaseEnd','rehuashen'],
				},
				filter:function(event,player,name){
					if(event.name!='phase') return true;
					if(name=='phaseBefore') return game.phaseNumber==0;
					return player.storage.rehuashen&&player.storage.rehuashen.character.length>0;
				},
				direct:true,
				content:function(){
					"step 0"
					var name=event.triggername;
					if(trigger.name!='phase'||(name=='phaseBefore'&&game.phaseNumber==0)){
						player.logSkill('rehuashen');
						lib.skill.rehuashen.addHuashens(player,3);
						event.logged=true;
					}
					_status.noclearcountdown=true;
					event.videoId=lib.status.videoId++;
					var cards=player.storage.rehuashen.character.slice(0);
					var skills=[];
					var sto=player.storage.rehuashen;
					for(var i in player.storage.rehuashen.map){
						skills.addArray(player.storage.rehuashen.map[i]);
					}
					var cond='out';
					if(event.triggername=='phaseBegin'){
						cond='in';
					}
					skills.randomSort();
					skills.sort(function(a,b){
						return get.skillRank(b,cond)-get.skillRank(a,cond);
					});
					event.aiChoice=skills[0];
					var choice='更换技能';
					if(event.aiChoice==player.storage.rehuashen.current2||get.skillRank(event.aiChoice,cond)<1) choice='弃置化身';
					if(player.isOnline2()){
						player.send(function(cards,id){
							var dialog=ui.create.dialog('是否发动【化身】？',[cards,(item,type,position,noclick,node)=>lib.skill.rehuashen.$createButton(item,type,position,noclick,node)]);
							dialog.videoId=id;
						},cards,event.videoId);
					}
					event.dialog=ui.create.dialog(get.prompt('rehuashen'),[cards,(item,type,position,noclick,node)=>lib.skill.rehuashen.$createButton(item,type,position,noclick,node)]);
					event.dialog.videoId=event.videoId;
					if(!event.isMine()){
						event.dialog.style.display='none';
					}
					if(event.logged) event._result={control:'更换技能'};
					else player.chooseControl('弃置化身','更换技能','cancel2').set('ai',function(){
						return _status.event.choice;
					}).set('choice',choice);
					"step 1"
					event.control=result.control;
					if(event.control=='cancel2'){
						if(player.isOnline2()){
							player.send('closeDialog',event.videoId);
						}
						delete _status.noclearcountdown;
						if(!_status.noclearcountdown){
							game.stopCountChoose();
						}
						event.dialog.close();
						event.finish();return;
					}
					if(!event.logged){player.logSkill('rehuashen');event.logged=true}
					var next=player.chooseButton(true).set('dialog',event.videoId);
					if(event.control=='弃置化身'){
						next.set('selectButton',[1,2]);
						next.set('filterButton',function(button){
							return button.link!=_status.event.current;
						});
						next.set('current',player.storage.rehuashen.current);
					}
					else{
						next.set('ai',function(button){
							return player.storage.rehuashen.map[button.link].includes(_status.event.choice)?2.5:1+Math.random();
						});
						next.set('choice',event.aiChoice);
					}
					var prompt=event.control=='弃置化身'?'选择制衡至多两张化身':'选择要切换的化身';
					var func=function(id,prompt){
						var dialog=get.idDialog(id);
						if(dialog){
							dialog.content.childNodes[0].innerHTML=prompt;
						}
					}
					if(player.isOnline2()){
						player.send(func,event.videoId,prompt);
					}
					else if(event.isMine()){
						func(event.videoId,prompt);
					}
					"step 2"
					if(result.bool&&event.control!='弃置化身'){
						event.card=result.links[0];
						var func=function(card,id){
							var dialog=get.idDialog(id);
							if(dialog){
								for(var i=0;i<dialog.buttons.length;i++){
									if(dialog.buttons[i].link==card){
										dialog.buttons[i].classList.add('selectedx');
									}
									else{
										dialog.buttons[i].classList.add('unselectable');
									}
								}
							}
						}
						if(player.isOnline2()){
							player.send(func,event.card,event.videoId);
						}
						else if(event.isMine()){
							func(event.card,event.videoId);
						}
						var list=player.storage.rehuashen.map[event.card].slice(0);
						list.push('返回');
						player.chooseControl(list).set('choice',event.aiChoice).set('ai',function(){
							return _status.event.choice;
						});
					}
					else{
						lib.skill.rehuashen.removeHuashen(player,result.links.slice(0));
						lib.skill.rehuashen.addHuashens(player,result.links.length);
					}
					"step 3"
					if(result.control=='返回'){
						var func=function(id){
							var dialog=get.idDialog(id);
							if(dialog){
								for(var i=0;i<dialog.buttons.length;i++){
									dialog.buttons[i].classList.remove('selectedx');
									dialog.buttons[i].classList.remove('unselectable');
								}
							}
						}
						if(player.isOnline2()){
							player.send(func,event.videoId);
						}
						else if(event.isMine()){
							func(event.videoId);
						}
						event._result={control:'更换技能'};
						event.goto(1);
						return;
					}
					if(player.isOnline2()){
						player.send('closeDialog',event.videoId);
					}
					event.dialog.close();
					delete _status.noclearcountdown;
					if(!_status.noclearcountdown){
						game.stopCountChoose();
					}
					if(event.control=='弃置化身') return;
					if(player.storage.rehuashen.current!=event.card){
						const old=player.storage.rehuashen.current;
						player.storage.rehuashen.current=event.card;
						game.broadcastAll(function(player,character,old){
							player.tempname.remove(old);
							player.tempname.add(character);
							player.sex=lib.character[event.card][0];
						},player,event.card,old);
						game.log(player,'将性别变为了','#y'+get.translation(lib.character[event.card][0])+'性');
						player.changeGroup(lib.character[event.card][1]);
					}
					var link=result.control;
					player.storage.rehuashen.current2=link;
					if(!player.additionalSkills.rehuashen||!player.additionalSkills.rehuashen.includes(link)){
						player.addAdditionalSkills('rehuashen',link);
						player.flashAvatar('rehuashen',event.card);
						player.syncStorage('rehuashen');
						player.updateMarks('rehuashen');
						// lib.skill.rehuashen.createAudio(event.card,link,'re_zuoci');
					}
				},
				init:function(player,skill){
					if(!player.storage[skill]) player.storage[skill]={
						character:[],
						map:{},
					}
					player.when('dieBegin').then(()=>{
						const name=player.name?player.name:player.name1;
						if(name){
							const sex=get.character(name,0);
							const group=get.character(name,1);
							if(player.sex!=sex){
								game.broadcastAll((player,sex)=>{
									player.sex=sex;
								},player,sex);
								game.log(player,'将性别变为了','#y'+get.translation(sex)+'性');
							}
							if(player.group!=group) player.changeGroup(group);
						}
					});
				},
				banned:['lisu','sp_xiahoudun','xushao','jsrg_xushao','zhoutai','old_zhoutai','shixie','xin_zhoutai','dc_shixie','old_shixie'],
				bannedType:['Charlotte','主公技','觉醒技','限定技','隐匿技','使命技'],
				addHuashen:function(player){
					if(!player.storage.rehuashen) return;
					if(!_status.characterlist){
						lib.skill.pingjian.initList();
					}
					_status.characterlist.randomSort();
					for(let i=0;i<_status.characterlist.length;i++){
						let name=_status.characterlist[i];
						if(name.indexOf('zuoci')!=-1||name.indexOf('key_')==0||name.indexOf('sp_key_')==0||get.is.double(name)||lib.skill.rehuashen.banned.includes(name)||player.storage.rehuashen.character.includes(name)) continue;
						let skills=lib.character[name][3].filter(skill=>{
							const categories=get.skillCategoriesOf(skill);
							return !categories.some(type=>lib.skill.rehuashen.bannedType.includes(type));
						})
						if(skills.length){
							player.storage.rehuashen.character.push(name);
							player.storage.rehuashen.map[name]=skills;
							_status.characterlist.remove(name);
							return name;
						}
					}
				},
				addHuashens:function(player,num){
					var list=[];
					for(var i=0;i<num;i++){
						var name=lib.skill.rehuashen.addHuashen(player);
						if(name) list.push(name);
					}
					if(list.length){
						player.syncStorage('rehuashen');
						player.updateMarks('rehuashen');
						game.log(player,'获得了',get.cnNumber(list.length)+'张','#g化身');
						lib.skill.rehuashen.drawCharacter(player,list);
					}
				},
				removeHuashen:function(player,links){
					player.storage.rehuashen.character.removeArray(links);
					_status.characterlist.addArray(links);
					game.log(player,'移去了',get.cnNumber(links.length)+'张','#g化身')
				},
				drawCharacter:function(player,list){
					game.broadcastAll(function(player,list){
						if(player.isUnderControl(true)){
							var cards=[];
							for(var i=0;i<list.length;i++){
								var cardname='huashen_card_'+list[i];
								lib.card[cardname]={
									fullimage:true,
									image:'character:'+list[i]
								}
								lib.translate[cardname]=get.rawName2(list[i]);
								cards.push(game.createCard(cardname,'',''));
							}
							player.$draw(cards,'nobroadcast');
						}
					},player,list);
				},
				$createButton:function(item,type,position,noclick,node){
					node=ui.create.buttonPresets.character(item,'character',position,noclick);
					const info=lib.character[item];
					const skills=info[3].filter(function(skill){
						const categories=get.skillCategoriesOf(skill);
						return !categories.some(type=>lib.skill.rehuashen.bannedType.includes(type));
					});
					if(skills.length){
						const skillstr=skills.map(i=>`[${get.translation(i)}]`).join('<br>');
						const skillnode=ui.create.caption(
							`<div class="text" data-nature=${get.groupnature(info[1],'raw')
								}m style="font-family: ${(lib.config.name_font||'xinwei')
								},xinwei">${skillstr}</div>`,node);
						skillnode.style.left='2px';
						skillnode.style.bottom='2px';
					}
					node._customintro=function(uiintro,evt){
						const character=node.link,characterInfo=get.character(node.link);
						let capt=get.translation(character);
						if(characterInfo){
							capt+=`&nbsp;&nbsp;${get.translation(characterInfo[0])}`;
							let charactergroup;
							const charactergroups=get.is.double(character,true);
							if(charactergroups) charactergroup=charactergroups.map(i=>get.translation(i)).join('/');
							else charactergroup=get.translation(characterInfo[1]);
							capt+=`&nbsp;&nbsp;${charactergroup}`;
						}
						uiintro.add(capt);

						if(lib.characterTitle[node.link]){
							uiintro.addText(get.colorspan(lib.characterTitle[node.link]));
						}
						for(let i=0;i<skills.length;i++){
							if(lib.translate[skills[i]+'_info']){
								let translation=lib.translate[skills[i]+'_ab']||get.translation(skills[i]).slice(0,2);
								if(lib.skill[skills[i]]&&lib.skill[skills[i]].nobracket){
									uiintro.add('<div><div class="skilln">'+get.translation(skills[i])+'</div><div>'+get.skillInfoTranslation(skills[i])+'</div></div>');
								}
								else{
									uiintro.add('<div><div class="skill">【'+translation+'】</div><div>'+get.skillInfoTranslation(skills[i])+'</div></div>');
								}
								if(lib.translate[skills[i]+'_append']){
									uiintro._place_text=uiintro.add('<div class="text">'+lib.translate[skills[i]+'_append']+'</div>')
								}
							}
						}
					}
					return node;
				},
				// createAudio:(character,skillx,name)=>{
				// 	var skills=game.expandSkills([skillx]);
				// 	skills=skills.filter(skill=>get.info(skill));
				// 	if(!skills.length) return;
				// 	var skillss=skills.filter(skill=>get.info(skill).derivation);
				// 	if(skillss.length){
				// 		skillss.forEach(skill=>{
				// 			var derivationSkill=get.info(skill).derivation;
				// 			skills[Array.isArray(derivationSkill)?'addArray':'add'](derivationSkill);
				// 		});
				// 	}
				// 	skills.forEach(skill=>{
				// 		var info=lib.skill[skill];
				// 		if(info){
				// 			if(!info.audioname2) info.audioname2={};
				// 			if(info.audioname&&info.audioname.includes(character)){
				// 				if(info.audio){
				// 					if(typeof info.audio=='string') skill=info.audio;
				// 					if(Array.isArray(info.audio)) skill=info.audio[0];
				// 				}
				// 				if(!lib.skill[skill+'_'+character]) lib.skill[skill+'_'+character]={audio:2};
				// 				info.audioname2[name]=(skill+'_'+character);
				// 			}
				// 			else if(info.audioname2[character]){
				// 				info.audioname2[name]=info.audioname2[character];
				// 			}
				// 			else{
				// 				if(info.audio){
				// 					if(typeof info.audio=='string') skill=info.audio;
				// 					if(Array.isArray(info.audio)) skill=info.audio[0];
				// 				}
				// 				info.audioname2[name]=skill;
				// 			}
				// 		}
				// 	});
				// },
				mark:true,
				intro:{
					onunmark:function(storage,player){
						_status.characterlist.addArray(storage.character);
						storage.character=[];
					},
					mark:function(dialog,storage,player){
						if(storage&&storage.current) dialog.addSmall([[storage.current],(item,type,position,noclick,node)=>lib.skill.rehuashen.$createButton(item,type,position,noclick,node)]);
						if(storage&&storage.current2) dialog.add('<div><div class="skill">【'+get.translation(lib.translate[storage.current2+'_ab']||get.translation(storage.current2).slice(0,2))+'】</div><div>'+get.skillInfoTranslation(storage.current2,player)+'</div></div>');
						if(storage&&storage.character.length){
							if(player.isUnderControl(true)){
								dialog.addSmall([storage.character,(item,type,position,noclick,node)=>lib.skill.rehuashen.$createButton(item,type,position,noclick,node)]);
							}
							else{
								dialog.addText('共有'+get.cnNumber(storage.character.length)+'张“化身”');
							}
						}
						else{
							return '没有化身';
						}
					},
					content:function(storage,player){
							return '共有'+get.cnNumber(storage.character.length)+'张“化身”'
					},
					markcount:function(storage,player){
						if(storage&&storage.character) return storage.character.length;
						return 0;
					},
				},
			},
			rexinsheng:{
				unique:true,
				audio:2,
				trigger:{player:'damageEnd'},
				frequent:true,
				content:function(){
					'step 0'
					event.num=trigger.num;
					'step 1'
					lib.skill.rehuashen.addHuashens(player,1);
					'step 2'
					if(--event.num>0&&player.hasSkill(event.name)&&!get.is.blocked(event.name,player)){
						player.chooseBool(get.prompt2('rexinsheng')).set('frequentSkill',event.name);
					}
					else event.finish();
					'step 3'
					if(result.bool&&player.hasSkill('rexinsheng')){
						player.logSkill('rexinsheng');
						event.goto(1);
					}
				},
			},
			reguhuo:{
				audio:2,
				derivation:'rechanyuan',
				enable:['chooseToUse','chooseToRespond'],
				hiddenCard:function(player,name){
					return lib.inpile.includes(name)&&player.countCards('h')>0&&!player.hasSkill('reguhuo_phase');
				},
				filter:function(event,player){
					if(!player.countCards('hs')||player.hasSkill('reguhuo_phase')) return false;
					for(var i of lib.inpile){
						var type=get.type(i);
						if((type=='basic'||type=='trick')&&event.filterCard(get.autoViewAs({name:i},'unsure'),player,event)) return true;
						if(i=='sha'){
							for(var j of lib.inpile_nature){
								if(event.filterCard(get.autoViewAs({name:i,nature:j},'unsure'),player,event)) return true;
							}
						}
					}
					return false;
				},
				chooseButton:{
					dialog:function(){
						var list=[];
						for(var i of lib.inpile){
							var type=get.type(i);
							if(type=='basic'||type=='trick') list.push([type,'',i]);
							if(i=='sha'){
								for(var j of lib.inpile_nature) list.push(['基本','','sha',j]);
							}
						}
						return ui.create.dialog('蛊惑',[list,'vcard']);
					},
					filter:function(button,player){
						var evt=_status.event.getParent();
						return evt.filterCard(get.autoViewAs({name:button.link[2],nature:button.link[3]},'unsure'),player,evt);
					},
					check:function(button){
						var player=_status.event.player;
						var rand=_status.event.getParent().getRand('reguhuo');
						var hasEnemy=game.hasPlayer(function(current){
							return current!=player&&!current.hasSkill('rechanyuan')&&(get.realAttitude||get.attitude)(current,player)<0;
						});
						var card={name:button.link[2],nature:button.link[3]};
						var val=_status.event.getParent().type=='phase'?player.getUseValue(card):1;
						if(val<=0) return 0;
						if(hasEnemy&&rand>0.3){
							if(!player.countCards('h',function(cardx){
								if(card.name==cardx.name){
									if(card.name!='sha') return true;
									return get.is.sameNature(card,cardx);
								}
								return false;
							})) return 0;
							return 3*val;
						}
						return val;
					},
					backup:function(links,player){
						return {
							viewAs:{
								name:links[0][2],
								nature:links[0][3],
								suit:'none',
								number:null,
							},
							filterCard:function(card,player,target){
								var result=true;
								var suit=card.suit,number=card.number;
								card.suit='none';card.number=null;
								var mod=game.checkMod(card,player,'unchanged','cardEnabled2',player);
								if(mod!='unchanged') result=mod;
								card.suit=suit;card.number=number;
								return result;
							},
							position:'hs',
							ignoreMod:true,
							ai1:function(card){
								var player=_status.event.player;
								var hasEnemy=game.hasPlayer(function(current){
									return current!=player&&!current.hasSkill('rechanyuan')&&(get.realAttitude||get.attitude)(current,player)<0;
								});
								var rand=_status.event.getRand('reguhuo');
								var cardx=lib.skill.reguhuo_backup.viewAs;
								if(hasEnemy&&rand>0.3){
									if(card.name==cardx.name&&(card.name!='sha'||get.is.sameNature(card,cardx))) return 10;
									return 0;
								}
								return 6-get.value(card);
							},
							precontent:function(){
								player.logSkill('reguhuo');
								player.addTempSkill('reguhuo_guess');
								var card=event.result.cards[0];
								event.result.card.suit=get.suit(card);
								event.result.card.number=get.number(card);
							},
						}
					},
					prompt:function(links){
						return '将一张手牌当做'+(get.translation(links[0][3])||'')+get.translation(links[0][2])+'使用';
					},
				},
				ai:{
					fireAttack:true,
					respondShan:true,
					respondSha:true,
					skillTagFilter:function(player){
						if(!player.countCards('hs')||player.hasSkill('reguhuo_phase')) return false;
					},
					order:10,
					result:{
						player:1,
					},
					threaten:1.3,
				},
			},
			reguhuo_guess:{
				trigger:{
					player:['useCardBefore','respondBefore'],
				},
				forced:true,
				silent:true,
				popup:false,
				charlotte:true,
				firstDo:true,
				filter:function(event,player){
					return event.skill&&event.skill.indexOf('reguhuo_')==0;
				},
				content:function(){
					'step 0'
					player.addTempSkill('reguhuo_phase');
					event.fake=false;
					var card=trigger.cards[0];
					if(card.name!=trigger.card.name||(card.name=='sha'&&!get.is.sameNature(trigger.card,card))) event.fake=true;
					//player.logSkill('reguhuo');
					player.line(trigger.targets,get.nature(trigger.card));
					event.cardTranslate=get.translation(trigger.card.name);
					trigger.card.number=get.number(card);
					trigger.card.suit=get.suit(card);
					//trigger.line=false;
					trigger.skill='reguhuo_backup';
					if(trigger.card.name=='sha'&&get.natureList(trigger.card).length) event.cardTranslate=get.translation(trigger.card.nature)+event.cardTranslate;
					player.popup(event.cardTranslate,trigger.name=='useCard'?'metal':'wood');
					event.prompt='是否质疑'+get.translation(player)+'声明的'+event.cardTranslate+'？';
					game.log(player,'声明了','#y'+event.cardTranslate);
					event.targets=game.filterPlayer(function(current){
						return current!=player&&!current.hasSkill('rechanyuan');
					}).sortBySeat();
					event.targets2=event.targets.slice(0);
					player.lose(card,ui.ordering).relatedEvent=trigger;
					if(!event.targets.length) event.goto(5);
					else if(_status.connectMode) event.goto(3);
					event.betrays=[];
					'step 1'
					event.target=targets.shift();
					event.target.chooseButton([event.prompt,[['reguhuo_ally','reguhuo_betray'],'vcard']],true,function(button){
						var player=_status.event.player;
						var evt=_status.event.getParent('reguhuo_guess');
						if(!evt) return Math.random();
						var ally=button.link[2]=='reguhuo_ally';
						if(ally&&(player.hp<=1||get.attitude(player,evt.player)>=0)) return 1.1;
						return Math.random();
					});
					'step 2'
					if(result.links[0][2]=='reguhuo_betray'){
						event.betrays.push(target);
						target.addExpose(0.2);
					}
					event.goto(targets.length?1:5);
					'step 3'
					var list=event.targets.map(function(target){
						return [target,[event.prompt,[['reguhuo_ally','reguhuo_betray'],'vcard']],true];
					});
					player.chooseButtonOL(list).set('switchToAuto',function(){
						_status.event.result='ai';
					}).set('processAI',function(){
						var choice=Math.random()>0.5?'reguhuo_ally':'reguhuo_betray';
						var player=_status.event.player;
						var evt=_status.event.getParent('reguhuo_guess');
						if(player.hp<=1||evt&&(get.realAttitude||get.attitude)(player,evt.player)>=0) choice='reguhuo_ally';
						return {
							bool:true,
							links:[['','',choice]],
						}
					});
					'step 4'
					for(var i in result){
						if(result[i].links[0][2]=='reguhuo_betray'){
							event.betrays.push(lib.playerOL[i]);
							lib.playerOL[i].addExpose(0.2);
						}
					}
					'step 5'
					for(var i of event.targets2){
						var b=event.betrays.includes(i);
						i.popup(b?'质疑':'不质疑',b?'fire':'wood');
						game.log(i,b?'#y质疑':'#g不质疑');
					}
					game.delay();
					'step 6'
					player.showCards(trigger.cards);
					if(event.betrays.length){
						event.betrays.sortBySeat();
						if(event.fake){
							game.asyncDraw(event.betrays);
							trigger.cancel();
							trigger.getParent().goto(0);
							game.log(player,'声明的','#y'+event.cardTranslate,'作废了')
						}
						else{
							var next=game.createEvent('reguhuo_final',false);
							event.next.remove(next);
							trigger.after.push(next);
							next.targets=event.betrays;
							next.setContent(lib.skill.reguhuo_guess.contentx);
							event.finish();
						}
					}
					else event.finish();
					'step 7'
					game.delayx();
				},
				contentx:function(){
					'step 0'
					event.target=targets.shift();
					event.target.chooseToDiscard('弃置一张牌或失去1点体力').set('ai',function(card){
						return 9-get.value(card);
					});
					'step 1'
					if(!result.bool) target.loseHp();
					'step 2'
					target.addSkills('rechanyuan');
					if(targets.length) event.goto(0);
				},
			},
			reguhuo_backup:{},
			reguhuo_phase:{},
			rechanyuan:{
				init:function(player,skill){
					if(player.hp<=1){
						player.logSkill(skill);
						player.addSkill('rechanyuan_log');
					}
					player.addSkillBlocker(skill);
				},
				onremove:function(player,skill){
					player.removeSkill('rechanyuan_log');
					player.removeSkillBlocker(skill);
				},
				skillBlocker:function(skill,player){
					return skill!='chanyuan'&&skill!='rechanyuan'&&!lib.skill[skill].charlotte&&player.hp<=1;
				},
				mark:true,
				intro:{
					content:function(storage,player,skill){
						var str='<li>锁定技，你不能于〖蛊惑〗的结算流程中进行质疑。当你的体力值不大于1时，你的其他技能失效。';
						var list=player.getSkills(null,false,false).filter(function(i){
							return lib.skill.rechanyuan.skillBlocker(i,player);
						});
						if(list.length) str+=('<br><li>失效技能：'+get.translation(list))
						return str;
					},
				},
				audio:2,
				trigger:{player:'changeHp'},
				filter:function(event,player){
					return (player.hp<=1)!=(player.hasSkill('rechanyuan_log'));
				},
				direct:true,
				locked:true,
				content:function(){
					if(player.hp<=1){
						player.logSkill('rechanyuan');
						player.addSkill('rechanyuan_log');
					}
					else player.removeSkill('rechanyuan_log');
				},
				subSkill:{
					log:{charlotte:true},
				},
			},
			botu:{
				audio:2,
				trigger:{player:'phaseAfter'},
				frequent:true,
				filter:function(event,player){
					var history=player.getHistory('useCard',function(evt){
						return evt.isPhaseUsing();
					});
					var suits=[];
					for(var i=0;i<history.length;i++){
						var suit=get.suit(history[i].card);
						if(suit) suits.add(suit);
					}
					return suits.length==4;
				},
				content:function(){
					player.insertPhase();
				},
			},
			xinleiji:{
				group:'xinleiji_misa',
				audio:2,
				derivation:'xinleiji_faq',
				audioname:['boss_qinglong'],
				trigger:{player:['useCard','respond']},
				filter:function(event,player){
					return event.card.name=='shan'||event.name=='useCard'&&event.card.name=='shandian';
				},
				judgeCheck:function(card,bool){
					var suit=get.suit(card);
					if(suit=='spade'){
						if(bool&&get.number(card)>1&&get.number(card)<10) return 5;
						return 4;
					}
					if(suit=='club') return 2;
					return 0;
				},
				content:function(){
					player.judge(lib.skill.xinleiji.judgeCheck).judge2=function(result){
						return result.bool?true:false;
					};
				},
				ai:{
					useShan:true,
					effect:{
						target:function(card,player,target,current){
							let name;
							if(typeof card=='object'){
								if(card.viewAs) name=card.viewAs;
								else name=get.name(card);
							}
							if(name=='shandian'||get.tag(card,'respondShan')&&!player.hasSkillTag('directHit_ai',true,{
								target: target,
								card: card
							},true)){
								let club=0,spade=0;
								if(game.hasPlayer(function(current){
									return get.attitude(target,current)<0&&get.damageEffect(current,target,target,'thunder')>0;
								})){
									club=2;
									spade=4;
								}
								if(!target.isHealthy()) club+=2;
								if(!club&&!spade) return 1;
								if(name==='sha'){
									if(!target.mayHaveShan(player,'use',target.getCards('h',i=>{
										return i.hasGaintag('sha_notshan');
									}))) return;
								}
								else if(!target.mayHaveShan(player)) return 1-0.1*Math.min(5,target.countCards('hs'));
								if(!target.hasSkillTag('rejudge')) return [1,(club+spade)/4];
								let pos=(player==target||player.hasSkillTag('viewHandcard',null,target,true))?'hes':'e',better=club>spade?'club':'spade',max=0;
								target.hasCard(function(cardx){
									if(get.suit(cardx)==better){
										max=2;
										return true;
									}
									if(spade&&get.color(cardx)=='black') max=1;
								},pos);
								if(max==2) return [1,Math.max(club,spade)];
								if(max==1) return [1,Math.min(club,spade)];
								if(pos=='e') return [1,Math.min(Math.max(1,target.countCards('hs'))*(club+spade)/4,Math.max(club,spade))];
								return [1,(club+spade)/4];
							}
							if(name=='lebu'||name=='bingliang') return [target.hasSkillTag('rejudge')?0.4:1,2,target.hasSkillTag('rejudge')?0.4:1,0];
						}
					}
				}
			},
			xinleiji_misa:{
				audio:'xinleiji',
				trigger:{player:'judgeEnd'},
				direct:true,
				disableReason:['暴虐','助祭','弘仪','孤影'],
				filter:function(event,player){
					return !lib.skill.xinleiji_misa.disableReason.includes(event.judgestr)&&['spade','club'].includes(event.result.suit);
				},
				content:function(){
					'step 0'
					event.num=1+['club','spade'].indexOf(trigger.result.suit);
					event.logged=false;
					if(event.num==1&&player.isDamaged()){
						event.logged=true;
						player.logSkill('xinleiji');
						player.recover();
					}
					player.chooseTarget('雷击：是否对一名角色造成'+event.num+'点雷电伤害？').ai=function(target){
						var player=_status.event.player;
						return get.damageEffect(target,player,player,'thunder');
					};
					'step 1'
					if(result.bool&&result.targets&&result.targets.length){
						if(!event.logged) player.logSkill('xinleiji',result.targets);
						else player.line(result.targets,'thunder');
						result.targets[0].damage(event.num,'thunder');
					}
				},
			},
			xinguidao:{
				audio:2,
				mod:{
					aiOrder:function(player,card,num){
						if(num>0&&get.itemtype(card)=='card'&&get.color(card)=='black'&&get.type(card)=='equip') num*1.35;
					},
					aiValue:function(player,card,num){
						if(num>0&&get.itemtype(card)=='card'&&get.color(card)=='black') return num*1.15;
					},
					aiUseful:function(player,card,num){
						if(num>0&&get.itemtype(card)=='card'&&get.color(card)=='black') return num*1.35;
					}
				},
				locked:false,
				trigger:{global:'judge'},
				filter:function(event,player){
					return player.countCards('hes',{color:'black'})>0;
				},
				direct:true,
				content:function(){
					"step 0"
					player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
					get.translation(trigger.player.judging[0])+'，'+get.prompt('xinguidao'),'hes',function(card){
						if(get.color(card)!='black') return false;
						var player=_status.event.player;
						var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
						if(mod2!='unchanged') return mod2;
						var mod=game.checkMod(card,player,'unchanged','cardRespondable',player);
						if(mod!='unchanged') return mod;
						return true;
					}).set('ai',function(card){
						var trigger=_status.event.getTrigger();
						var player=_status.event.player;
						var judging=_status.event.judging;
						var result=trigger.judge(card)-trigger.judge(judging);
						var attitude=get.attitude(player,trigger.player);
						if(attitude==0||result==0){
							if(trigger.player!=player) return 0;
							if(game.hasPlayer(function(current){
								return get.attitude(player,current)<0;
							})){
								var checkx=lib.skill.xinleiji.judgeCheck(card,true)-lib.skill.xinleiji.judgeCheck(judging);
								if(checkx>0) return checkx;
							}
							return 0;
						}
						if(attitude>0){
							return result;
						}
						else{
							return -result;
						}
					}).set('judging',trigger.player.judging[0]);
					"step 1"
					if(result.bool){
						player.respond(result.cards,'highlight','xinguidao','noOrdering');
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						player.$gain2(trigger.player.judging[0]);
						player.gain(trigger.player.judging[0]);
						var card=result.cards[0];
						if(get.suit(card)=='spade'&&get.number(card)>1&&get.number(card)<10) player.draw('nodelay');
						trigger.player.judging[0]=result.cards[0];
						trigger.orderingCards.addArray(result.cards);
						game.log(trigger.player,'的判定牌改为',result.cards[0]);
					}
					"step 3"
					game.delay(2);
				},
				ai:{
					rejudge:true,
					tag:{
						rejudge:1
					}
				}
			},
			reqingguo:{
				mod:{
					aiValue:function(player,card,num){
						if(get.name(card)!='shan'&&get.color(card)!='black') return;
						var cards=player.getCards('hs',function(card){
							return get.name(card)=='shan'||get.color(card)=='black';
						});
						cards.sort(function(a,b){
							return (get.name(b)=='shan'?1:2)-(get.name(a)=='shan'?1:2);
						});
						var geti=function(){
							if(cards.includes(card)){
								return cards.indexOf(card);
							}
							return cards.length;
						};
						if(get.name(card)=='shan') return Math.min(num,[6,4,3][Math.min(geti(),2)])*0.6;
						return Math.max(num,[6.5,4,3][Math.min(geti(),2)]);
					},
					aiUseful:function(){
						return lib.skill.reqingguo.mod.aiValue.apply(this,arguments);
					},
				},
				locked:false,
				audio:2,
				enable:['chooseToRespond','chooseToUse'],
				filterCard:function(card){
					return get.color(card)=='black';
				},
				position:'hes',
				viewAs:{name:'shan'},
				viewAsFilter:function(player){
					if(!player.countCards('hes',{color:'black'})) return false;
				},
				prompt:'将一张黑色牌当闪打出',
				check:function(){return 1},
				ai:{
					order:2,
					respondShan:true,
					skillTagFilter:function(player){
						if(!player.countCards('hes',{color:'black'})) return false;
					},
					effect:{
						target:function(card,player,target,current){
							if(get.tag(card,'respondShan')&&current<0) return 0.6
						}
					}
				}
			},
			reqiangxi:{
				subSkill:{
					off:{
						sub:true,
					},
				},
				audio:2,
				enable:"phaseUse",
				filterCard:function (card){
					return get.subtype(card)=='equip1';
				},
				selectCard:function (){
					return [0,1];
				},
				filterTarget:function (card,player,target){
					if(player==target) return false;
					if(target.hasSkill('reqiangxi_off')) return false;
					return player.inRange(target);
				},
				content:function (){
					"step 0"
					if(cards.length==0){
						player.loseHp();
					}
					"step 1"
					target.addTempSkill('reqiangxi_off');
					target.damage('nocard');
				},
				check:function (card){
					return 10-get.value(card);
				},
				position:"he",
				ai:{
					order:8.5,
					result:{
						target:function (player,target){
							if(!ui.selected.cards.length){
								if(player.hp<2) return 0;
								if(target.hp>=player.hp) return 0;
							}
							return get.damageEffect(target,player);
						},
					},
				},
				threaten:1.5,
			},
			rehuoji:{
				position:"hes",
				audio:2,
				audioname:['ol_sp_zhugeliang','ol_pangtong'],
				enable:"chooseToUse",
				filterCard:function (card){
					return get.color(card)=='red';
				},
				viewAs:{
					name:"huogong",
				},
				viewAsFilter:function (player){
					if(!player.countCards('hes',{color:'red'})) return false;
				},
				prompt:"将一张红色牌当火攻使用",
				check:function (card){
					var player=get.player();
					if(player.countCards('h')>player.hp){
						return 6-get.value(card);
					}
					return 4-get.value(card)
				},
				ai:{
					fireAttack:true,
				},
			},
			rekanpo:{
				mod:{
					aiValue:function(player,card,num){
						if(get.name(card)!='wuxie'&&get.color(card)!='black') return;
						var cards=player.getCards('hs',function(card){
							return get.name(card)=='wuxie'||get.color(card)=='black';
						});
						cards.sort(function(a,b){
							return (get.name(b)=='wuxie'?1:2)-(get.name(a)=='wuxie'?1:2);
						});
						var geti=function(){
							if(cards.includes(card)){
								return cards.indexOf(card);
							}
							return cards.length;
						};
						if(get.name(card)=='wuxie') return Math.min(num,[6,4,3][Math.min(geti(),2)])*0.6;
						return Math.max(num,[6,4,3][Math.min(geti(),2)]);
					},
					aiUseful:function(){
						return lib.skill.rekanpo.mod.aiValue.apply(this,arguments);
					},
				},
				locked:false,
				audio:2,
				audioname:['ol_sp_zhugeliang','ol_pangtong'],
				position:"hes",
				enable:"chooseToUse",
				filterCard:function (card){
					return get.color(card)=='black';
				},
				viewAsFilter:function (player){
					return player.countCards('hes',{color:'black'})>0;
				},
				viewAs:{
					name:"wuxie",
				},
				prompt:"将一张黑色牌当无懈可击使用",
				check:function (card){return 8-get.value(card)},
			},
			reshuangxiong:{
				audio:"shuangxiong",
				audioname:['re_yanwen'],
				group:['reshuangxiong1',"reshuangxiong2"],
			},
			reshuangxiong1:{
				audio:"shuangxiong1",
				audioname2:{
					re_yanwen:'shuangxiong_re_yanwen1',
				},
				trigger:{player:"phaseDrawBegin1"},
				check:function (event,player){
					if(player.countCards('h')>player.hp) return true;
					if(player.countCards('h')>3) return true;
					return false;
				},
				filter:function(event,player){
					return !event.numFixed;
				},
				prompt2:function(){
					return '放弃摸牌，然后展示牌堆顶的两张牌并选择获得其中的一张。本回合内可以将与此牌颜色不同的一张手牌当做【决斗】使用';
				},
				content:function(){
					"step 0"
					trigger.changeToZero();
					event.cards=get.cards(2);
					event.videoId=lib.status.videoId++;
					game.broadcastAll(function(player,id,cards){
						var str;
						if(player==game.me&&!_status.auto){
							str='【双雄】选择获得其中一张牌';
						}
						else{
							str='双雄';
						}
						var dialog=ui.create.dialog(str,cards);
						dialog.videoId=id;
					},player,event.videoId,event.cards);
					event.time=get.utc();
					game.addVideo('showCards',player,['双雄',get.cardsInfo(event.cards)]);
					game.addVideo('delay',null,2);
					"step 1"
					var next=player.chooseButton([1,1],true);
					next.set('dialog',event.videoId);
					next.set('ai',function(button){
						var player=_status.event.player;
						var color=get.color(button.link);
						var value=get.value(button.link,player);
						if(player.countCards('h',{color:color})>player.countCards('h',['red','black'].remove(color)[0])) value+=5;
						return value;
					});
					"step 2"
					if(result.bool&&result.links){
						var cards2=[];
						for(var i=0;i<result.links.length;i++){
							cards2.push(result.links[i]);
							cards.remove(result.links[i]);
						}
						game.cardsDiscard(cards);
						event.card2=cards2[0];
					}
					var time=1000-(get.utc()-event.time);
					if(time>0){
						game.delay(0,time);
					}
					"step 3"
					game.broadcastAll('closeDialog',event.videoId);
					var card2=event.card2;
					player.gain(card2,'gain2');
					player.addTempSkill('shuangxiong2');
					player.markAuto('shuangxiong2',[get.color(card2,false)]);
				},
			},
			reshuangxiong2:{
				trigger:{
					player:"damageEnd",
				},
				direct:true,
				filter:function (event,player){
					var evt=event.getParent();
					return (evt&&evt.name=='juedou'&&evt[player==evt.player?'targetCards':'playerCards'].length)>0;
				},
				content:function (){
					"step 0"
					var evt=trigger.getParent();
					var cards=evt[player==evt.player?'targetCards':'playerCards'].slice(0);
					for(var i=0;i<cards.length;i++){
						if(get.position(cards[i])!='d') cards.remove(cards[i--]);
					}
					if(!cards.length) event.finish();
					else{
						event.cards=cards;
						player.chooseBool('是否发动【双雄】，获得'+get.translation(event.cards)+'?').ai=function(){
							return true;
						};
					}
					"step 1"
					if(result.bool){
						player.logSkill('reshuangxiong');
						player.gain(cards,'gain2');
					}
				},
			},
			"new_yajiao":{
				audio:"reyajiao",
				trigger:{
					player:"loseEnd",
				},
				frequent:true,
				filter:function (event,player){
					return player!=_status.currentPhase&&event.hs&&event.hs.length>0&&['useCard','respond'].includes(event.getParent().name);
				},
				content:function (){
					"step 0"
					event.card=get.cards();
					player.showCards(event.card);
					event.same=false;
					if(get.type(event.card[0],'trick')==get.type(trigger.getParent().card,'trick')) event.same=true;
					player.chooseTarget('选择获得此牌的角色',true).set('ai',function(target){
						var att=get.attitude(_status.event.player,target);
						if(_status.event.du){
							if(target.hasSkillTag('nodu')) return 0;
							return -att;
						}
						if(!_status.event.same) att+=target==_status.event.player?1:0;
						if(att>0){
							return att+Math.max(0,5-target.countCards('h'));
						}
						return att;
					}).set('du',event.card.name=='du').set('same',event.same);
					"step 1"
					if(result.targets){
						player.line(result.targets,'green');
						result.targets[0].gain(event.card,'gain2');
						if(!event.same) player.chooseToDiscard(true,'he');
					}
				},
				ai:{
					effect:{
						target:function (card,player,target){
							if(get.tag(card,'respond')&&target.countCards('h')>1) return [1,0.2];
						},
					},
				},
			},
			"new_liyu":{
				audio:"liyu",
				trigger:{
					source:"damageSource",
				},
				filter:function (event,player){
					if(event._notrigger.includes(event.player)) return false;
					return event.card&&event.card.name=='sha'&&event.player!=player&&event.player.isIn()&&event.player.countGainableCards(player,'hej')>0;
				},
				direct:true,
				content:function (){
					'step 0'
					player.gainPlayerCard(get.prompt('new_liyu',trigger.player),trigger.player,'hej','visibleMove').set('ai',function(button){
						var player=_status.event.player,target=_status.event.target;
						if(get.attitude(player,target)>0&&get.position(button.link)==='j') return 4+get.value(button.link);
						if(get.type(button.link)==='equip') return _status.event.juedou;
						return 3;
					}).set('juedou',(()=>{
						if(get.attitude(player,trigger.player)>0&&game.hasPlayer(function(current){
							return (player.canUse({name:'juedou'},current)&&current!=trigger.player&&current!=player&&get.effect(current,{name:'juedou'},player,_status.event.player)>2);
						})) return 5;
						if(game.hasPlayer(function(current){
							return (player.canUse({name:'juedou'},current)&&current!=trigger.player&&current!=player&&get.effect(current,{name:'juedou'},player,_status.event.player)<0);
						})) return 1;
						return 4;
					})()).set('logSkill',['new_liyu',trigger.player]);
					'step 1'
					if(result.bool){
						if(get.type(result.cards[0])!='equip'){
							trigger.player.draw();
							event.finish();
						}
						else{
							if(!game.hasPlayer(function(current){
								return current!=player&&current!=trigger.player&&player.canUse('juedou',current);
							})){
								event.finish();
								return;
							}
							trigger.player.chooseTarget(true,function(card,player,target){
								var evt=_status.event.getParent();
								return evt.player.canUse({name:'juedou'},target)&&target!=_status.event.player;
							},'请选择一名角色，视为'+get.translation(player)+'对其使用【决斗】').set('ai',function(target){
								var evt=_status.event.getParent();
								return get.effect(target,{name:'juedou'},evt.player,_status.event.player)-2;
							});
						}
					}
					else event.finish();
					'step 2'
					if(result.targets){
						player.useCard({name:'juedou',isCard:true},result.targets[0],'noai');
					}
				},
				ai:{
					halfneg:true,
				},
			},
			new_retuxi:{
				audio:"retuxi",
				trigger:{
					player:"phaseDrawBegin2",
				},
				direct:true,
				preHidden:true,
				filter:function(event,player){
					return event.num>0&&!event.numFixed&&game.hasPlayer(function(target){
						return target.countCards('h')>0&&player!=target;
					});
				},
				content:function (){
					"step 0"
					var num=get.copy(trigger.num);
					if(get.mode()=='guozhan'&&num>2) num=2;
					player.chooseTarget(get.prompt('new_retuxi'),'获得至多'+get.translation(num)+'名角色的各一张手牌，然后少摸等量的牌',[1,num],function(card,player,target){
						return target.countCards('h')>0&&player!=target;
					},function(target){
						var att=get.attitude(_status.event.player,target);
						if(target.hasSkill('tuntian')) return att/10;
						return 1-att;
					}).setHiddenSkill('new_retuxi');
					"step 1"
					if(result.bool){
						result.targets.sortBySeat();
						player.logSkill('new_retuxi',result.targets);
						player.gainMultiple(result.targets);
						trigger.num-=result.targets.length;
					}
					else{
						event.finish();
					}
					"step 2"
					if(trigger.num<=0) game.delay();
				},
				ai:{
					threaten:1.6,
					expose:0.2,
				},
			},
			"new_reyiji":{
				audio:"reyiji",
				trigger:{
					player:"damageEnd",
				},
				frequent:true,
				filter:function (event){
					return (event.num>0)
				},
				content:function (){
					'step 0'
					event.count=trigger.num;
					'step 1'
					player.draw(2);
					event.count--;
					if(_status.connectMode) game.broadcastAll(function(){_status.noclearcountdown=true});
					event.given_map={};
					event.num=2;
					'step 2'
					player.chooseCardTarget({
						filterCard:function(card){
							return get.itemtype(card)=='card'&&!card.hasGaintag('reyiji_tag');
						},
						filterTarget:lib.filter.notMe,
						selectCard:[1,event.num],
						prompt:'请选择要分配的卡牌和目标',
						ai1:function(card){
							if(!ui.selected.cards.length) return 1;
							return 0;
						},
						ai2:function(target){
							var player=_status.event.player,card=ui.selected.cards[0];
							var val=target.getUseValue(card);
							if(val>0) return val*get.attitude(player,target)*2;
							return get.value(card,target)*get.attitude(player,target);
						},
					});
					'step 3'
					if(result.bool){
						var res=result.cards,target=result.targets[0].playerid;
						player.addGaintag(res,'reyiji_tag');
						event.num-=res.length
						if(!event.given_map[target]) event.given_map[target]=[];
						event.given_map[target].addArray(res);
						if(event.num>0) event.goto(2);
					}
					else if(event.num==2){
						if(_status.connectMode){
							game.broadcastAll(function(){delete _status.noclearcountdown;game.stopCountChoose()});
						}
						event.goto(5);
					}
					'step 4'
					if(_status.connectMode){
						game.broadcastAll(function(){delete _status.noclearcountdown;game.stopCountChoose()});
					}
					var map=[],cards=[];
					for(var i in event.given_map){
						var source=(_status.connectMode?lib.playerOL:game.playerMap)[i];
						player.line(source,'green');
						if(player!==source&&(get.mode()!=='identity'||player.identity!=='nei')) player.addExpose(0.18);
						map.push([source,event.given_map[i]]);
						cards.addArray(event.given_map[i]);
					}
					game.loseAsync({
						gain_list:map,
						player:player,
						cards:cards,
						giver:player,
						animate:'giveAuto',
					}).setContent('gaincardMultiple');
					'step 5'
					if(event.count>0&&player.hasSkill('new_reyiji')){
						player.chooseBool(get.prompt2('new_reyiji'));
					}
					else event.finish();
					'step 6'
					if(result.bool){
						player.logSkill('new_reyiji');
						event.goto(1);
					}
				},
				ai:{
					maixie:true,
					"maixie_hp":true,
					result:{
						effect:function (card,player,target){
							if(get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
								if(!target.hasFriend()) return;
								var num=1;
								if(get.attitude(player,target)>0){
									if(player.needsToDiscard()) num=0.7;
									else num=0.5;
								}
								if(player.hp>=4) return [1,num*2];
								if(target.hp==3) return [1,num*1.5];
								if(target.hp==2) return [1,num*0.5];
							}
						},
					},
					threaten:0.6,
				},
			},
			"new_rejianxiong":{
				audio:"rejianxiong",
				audioname:['shen_caopi'],
				trigger:{
					player:"damageEnd",
				},
				content:function (){
					"step 0"
					if(get.itemtype(trigger.cards)=='cards'&&get.position(trigger.cards[0],true)=='o'){
						player.gain(trigger.cards,"gain2");
					}
					player.draw('nodelay');
				},
				ai:{
					maixie:true,
					"maixie_hp":true,
					effect:{
						target:function (card,player,target){
							if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
							if(get.tag(card,'damage')&&player!=target){
								var cards=card.cards,evt=_status.event;
								if(evt.player==target&&card.name=='damage'&&evt.getParent().type=='card') cards=evt.getParent().cards.filterInD();
								if(target.hp<=1) return;
								if(get.itemtype(cards)!='cards') return;
								for(var i of cards){
									if(get.name(i,target)=='tao') return [1,5];
								}
								if(get.value(cards,target)>=(7+target.getDamagedHp())) return [1,3];
								return [1,0.6];
							}
						},
					},
				},
			},
			"new_reluoyi":{
				audio:"reluoyi",
				trigger:{
					player:"phaseDrawBegin1",
				},
				forced:true,
				locked:false,
				filter:function(event,player){
					return !event.numFixed;
				},
				content:function (){
					"step 0"
					var cards=get.cards(3);
					game.cardsGotoOrdering(cards);
					player.showCards(cards,'裸衣');
					var cardsx=[];
					for(var i=0;i<cards.length;i++){
						if(get.type(cards[i])=='basic'||cards[i].name=='juedou'||
							(get.type(cards[i])=='equip'&&get.subtype(cards[i])=='equip1')){
							cardsx.push(cards[i]);
						}
					}
					event.cards=cardsx;
					player.chooseBool("是否放弃摸牌"+(cardsx.length?("，改为获得"+get.translation(cardsx)):"")+"？").ai=function(){
						var num=3;
						return cardsx.length>=trigger.num;
					};
					"step 1"
					if(result.bool){
						if(cards.length) player.gain(cards,'gain2');
						//game.cardsDiscard(cards2);
						player.addTempSkill('reluoyi2',{player:'phaseBefore'});
						trigger.changeToZero();
					}
					//else game.cardsDiscard(cards);
				},
			},
			"new_rewusheng":{
				mod:{
					targetInRange:function (card){
						if(get.suit(card)=='diamond'&&card.name=='sha') return true;
					},
				},
				locked:false,
				audio:"wusheng",
				audioname:['re_guanyu','guanzhang','jsp_guanyu','guansuo','re_guanzhang','dc_jsp_guanyu'],
				audioname2:{
					dc_guansuo:'wusheng_guansuo',
				},
				enable:["chooseToRespond","chooseToUse"],
				filterCard:function(card,player){
					if(get.zhu(player,'shouyue')) return true;
					return get.color(card)=='red';
				},
				position:"hes",
				viewAs:{
					name:"sha",
				},
				viewAsFilter:function(player){
					if(get.zhu(player,'shouyue')){
						if(!player.countCards('hes')) return false;
					}
					else{
						if(!player.countCards('hes',{color:'red'})) return false;
					}
				},
				prompt:"将一张红色牌当杀使用或打出",
				check:function(card){
					var val=get.value(card);
					if(_status.event.name=='chooseToRespond') return 1/Math.max(0.1,val);
					return 5-val;
				},
				ai:{
					respondSha:true,
					skillTagFilter:function(player){
						if(get.zhu(player,'shouyue')){
							if(!player.countCards('hes')) return false;
						}
						else{
							if(!player.countCards('hes',{color:'red'})) return false;
						}
					},
				},
			},
			wusheng_guansuo:{audio:2},
			"new_yijue":{
				audio:"yijue",
				enable:"phaseUse",
				usable:1,
				position:"he",
				filterTarget:function (card,player,target){
					return player!=target&&target.countCards('h');
				},
				filterCard:true,
				check:function (card){
					return 8-get.value(card);
				},
				content:function (){
					"step 0"
					if(!target.countCards('h')){
						event.finish();
						return;
					}
					else target.chooseCard(true,'h').set('ai',function(card){
						var player=_status.event.player;
						if((player.hasShan()||player.hp<3)&&get.color(card)=='black') return 0.5;
						return Math.max(1,20-get.value(card));
					});
					"step 1"
					target.showCards(result.cards);
					event.card2=result.cards[0];
					if(get.color(event.card2)=='black'){
						if(!target.hasSkill('fengyin')){
							target.addTempSkill('fengyin');
						}
						target.addTempSkill('new_yijue2');
						event.finish();
					}
					else if(get.color(event.card2)=='red'){
						player.gain(event.card2,target,'give','bySelf');
						if(target.hp<target.maxHp){
							player.chooseBool('是否让目标回复1点体力？').ai=function(event,player){
								return get.recoverEffect(target,player,player)>0;
							};
						}
					}
					"step 2"
					if(result.bool){
						target.recover();
					}
				},
				ai:{
					result:{
						target:function(player,target){
							var hs=player.getCards('h');
							if(hs.length<3) return 0;
							if(target.countCards('h')>target.hp+1&&get.recoverEffect(target)>0){
								return 1;
							}
							if(player.canUse('sha',target)&&(player.countCards('h','sha')||player.countCards('he',{color:'red'}))){
								return -2;
							}
							return -0.5;
						},
					},
					order:9,
					directHit_ai:true,
					skillTagFilter:function(player,tag,arg){
						if(!arg.target.hasSkillTag('new_yijue2')) return false;
					},
				},
			},
			new_yijue2:{
				trigger:{
					player:"damageBegin1",
				},
				filter:function(event){
					return event.source&&event.source==_status.currentPhase&&event.card&&event.card.name=='sha'&&get.suit(event.card)=='heart'&&event.notLink();
				},
				popup:false,
				forced:true,
				charlotte:true,
				content:function(){
					trigger.num++;
				},
				mark:true,
				mod:{
					cardEnabled2:function(card){
						if(get.position(card)=='h') return false;
					},
				},
				intro:{
					content:"不能使用或打出手牌",
				},
			},
			paoxiao_re_zhangfei:{audio:2},
			"new_repaoxiao":{
				audio:"paoxiao",
				firstDo:true,
				audioname2:{
					old_guanzhang:'old_fuhun',
					xin_zhangfei:'paoxiao_re_zhangfei',
					dc_xiahouba:'paoxiao_xiahouba',
				},
				audioname:['re_zhangfei','guanzhang','xiahouba','re_guanzhang'],
				trigger:{player:'useCard1'},
				forced:true,
				filter:function(event,player){
					return event.card.name=='sha'&&(!event.audioed||!player.hasSkill('new_repaoxiao2'));
				},
				content:function(){
					trigger.audioed=true;
					player.addTempSkill('new_repaoxiao2');
				},
				mod:{
					cardUsable:function (card,player,num){
						if(card.name=='sha') return Infinity;
					},
				},
				ai:{
					unequip:true,
					skillTagFilter:function (player,tag,arg){
						if(!get.zhu(player,'shouyue')) return false;
						if(arg&&arg.name=='sha') return true;
						return false;
					},
				},
			},
			new_repaoxiao2:{
				charlotte:true,
				mod:{
					targetInRange:function (card,player){
						if(card.name=='sha') return true;
					},
				},
			},
			"new_tishen":{
				trigger:{
					player:"phaseUseEnd",
				},
				check:function (event,player){
					var num=0;
					var he=player.getCards('he');
					for(var i=0;i<he.length;i++){
						if(get.type(he[i],'trick')=='trick'){
							num++;
						}
						if(get.type(he[i])=='equip'){
							var subtype=get.subtype(he[i]);
							if(subtype=='equip3'||subtype=='equip4'||subtype=='equip6'){
								num++;
							}
						}
					}
					return num==0||num<=player.countCards('h')-player.getHandcardLimit();
				},
				content:function (){
					var list=[];
					var he=player.getCards('he');
					for(var i=0;i<he.length;i++){
						if(get.type(he[i],'trick')=='trick'){
							list.push(he[i]);
						}
						if(get.type(he[i])=='equip'){
							var subtype=get.subtype(he[i]);
							if(subtype=='equip3'||subtype=='equip4'||subtype=='equip6'){
								list.push(he[i]);
							}
						}
					}
					if(list.length) player.discard(list);
					player.addTempSkill('new_tishen2',{player:'phaseBefore'});
				},
				audio:"retishen",
			},
			"new_tishen2":{
				audio:'retishen',
				trigger:{
					global:'useCardAfter',
				},
				filter:function (event,player){
					return event.card.name=='sha'&&event.targets&&event.targets.includes(player)&&!player.hasHistory('damage',evt=>evt.card==event.card)&&event.cards.filterInD('od').length;
				},
				forced:true,
				charlotte:true,
				content:function (){
					player.gain(trigger.cards.filterInD('od'),'gain2');
				},
			},
			new_qingjian:{
				audio:"qingjian",
				trigger:{
					player:"gainAfter",
					global:'loseAsyncAfter',
				},
				direct:true,
				usable:1,
				filter:function(event,player){
					var evt=event.getParent('phaseDraw');
					if(evt&&evt.player==player) return false;
					return event.getg(player).length>0;
				},
				content:function(){
					"step 0"
					player.chooseCardTarget({
						position:'he',
						filterCard:true,
						selectCard:[1,Infinity],
						filterTarget:function(card,player,target){
							return player!=target;
						},
						ai1:function(card){
							if(card.name!='du'&&get.attitude(_status.event.player,_status.currentPhase)<0&&_status.currentPhase.needsToDiscard()) return -1;
							for(var i=0;i<ui.selected.cards.length;i++){
								if(get.type(ui.selected.cards[i])==get.type(card)||(ui.selected.cards[i].name=='du'&&card.name!='du')) return -1;
							}
							if(card.name=='du') return 20;
							return (_status.event.player.countCards('h')-_status.event.player.hp);
						},
						ai2:function(target){
							if(get.attitude(_status.event.player,_status.currentPhase)<0) return -1;
							var att=get.attitude(_status.event.player,target);
							if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
								if(target.hasSkillTag('nodu')) return 0;
								return 1-att;
							}
							if(target.countCards('h')>_status.event.player.countCards('h')) return 0;
							return att-4;
						},
						prompt:get.prompt2('new_qingjian'),
					});
					"step 1"
					if(result.bool){
						var target=result.targets[0];
						var cards=result.cards;
						var type=[];
						for(var i=0;i<cards.length;i++){
							type.add(get.type2(cards[i]));
						}
						player.logSkill('new_qingjian',target);
						player.give(cards,target);
						var current=_status.currentPhase;
						if(current){
							current.addTempSkill('qingjian_add');
							current.addMark('qingjian_add',type.length);
						}
					}
					else player.storage.counttrigger.new_qingjian--;
				},
				ai:{
					expose:0.3,
				},
			},
			qingjian_add:{
				mark:true,
				intro:{
					content:'手牌上限+#',
				},
				mod:{
					maxHandcard:function(player,num){
						return num+player.countMark('qingjian_add');
					},
				},
				onremove:true,
			},
			new_reqingnang:{
				subSkill:{
					off:{
						sub:true,
					},
					"off2":{
						sub:true,
					},
				},
				audio:2,
				enable:"phaseUse",
				filterCard:true,
				check:function (card){
					var player=_status.event.player;
					if(game.countPlayer(function(current){
						return (get.recoverEffect(current,player,player)>0&&get.attitude(player,current)>2);
					})>1&&get.color(card)=='black'&&player.countCards('h',{color:'red'})>0) return 3-get.value(card);
					return 9-get.value(card);
				},
				filter:function (event,player){
					return !player.hasSkill('new_reqingnang_off2');
				},
				filterTarget:function (card,player,target){
					if(target.hp>=target.maxHp||target.hasSkill('new_reqingnang_off')) return false;
					return true;
				},
				content:function (){
					target.addTempSkill('new_reqingnang_off');
					if(get.color(cards[0])=='black') player.addTempSkill('new_reqingnang_off2');
					target.recover();
				},
				ai:{
					order:9,
					result:{
						target:function (player,target){
							if(target.hp==1) return 5;
							if(player==target&&player.countCards('h')>player.hp) return 5;
							return 2;
						},
					},
					threaten:2,
				},
			},
			reyaowu:{
				trigger:{player:'damageBegin3'},
				audio:'new_reyaowu',
				forced:true,
				filter:function(event){
					return event.card&&(get.color(event.card)!='red'||event.source&&event.source.isIn());
				},
				content:function(){
					trigger[get.color(trigger.card)!='red'?'player':'source'].draw();
				},
				ai:{
					effect:{
						target:(card,player,target)=>{
							if(typeof card!=='object'||!get.tag(card,'damage')||target.hasSkill('gangzhi')) return;
							if(player.hasSkillTag('jueqing',null,true)) return;
							if(get.color(card)==='red') return [1,0,1,0.6];
							return [1,0.6];
						}
					}
				}
			},
			"new_reyaowu":{
				trigger:{
					player:"damageBegin3",
				},
				//priority:1,
				audio:2,
				audioname:['sb_huaxiong'],
				filter:function(event){
					return event.card&&event.card.name=='sha'&&(get.color(event.card)!='red'||event.source&&event.source.isIn());
				},
				forced:true,
				content:function(){
					if(get.color(trigger.card)!='red') player.draw();
					else trigger.source.chooseDrawRecover(true);
				},
				ai:{
					effect:{
						target:(card,player,target,current)=>{
							if(card.name=='sha'){
								if(get.color(card)=='red'){
									let num=player.isDamaged()?1.6:0.7;
									if(get.attitude(player,target)>0&&player.hp<3) return [1,0,1,num];
									return [1,0,1,num/2];
								}
								return [1,0.6];
							}
						},
					},
				},
			},
			reguanxing:{
				audio:'guanxing',
				audioname:['jiangwei','re_jiangwei','re_zhugeliang','gexuan','ol_jiangwei'],
				trigger:{player:['phaseZhunbeiBegin','phaseJieshuBegin']},
				frequent:true,
				filter:function(event,player,name){
					if(name=='phaseJieshuBegin'){
						return player.hasSkill('reguanxing_on');
					}
					return true;
				},
				content:function(){
					"step 0"
					var num=game.countPlayer()<4?3:5;
					var cards=get.cards(num);
					game.cardsGotoOrdering(cards);
					var next=player.chooseToMove();
					next.set('list',[
						['牌堆顶',cards],
						['牌堆底'],
					]);
					next.set('prompt','观星：点击将牌移动到牌堆顶或牌堆底');
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
					"step 1"
					var top=result.moved[0];
					var bottom=result.moved[1];
					top.reverse();
					game.cardsGotoPile(
						top.concat(bottom),
						['top_cards',top],
						function(event,card){
							if(event.top_cards.includes(card)) return ui.cardPile.firstChild;
							return null;
						}
					)
					if(event.triggername=='phaseZhunbeiBegin'&&top.length==0){
						player.addTempSkill('reguanxing_on');
					}
					player.popup(get.cnNumber(top.length)+'上'+get.cnNumber(bottom.length)+'下');
					game.log(player,'将'+get.cnNumber(top.length)+'张牌置于牌堆顶');
					"step 2"
					game.delayx();
				},
				subSkill:{
					on:{charlotte:true}
				}
			},
			reluoshen:{
				audio:2,
				locked:false,
				trigger:{player:'phaseZhunbeiBegin'},
				frequent:true,
				content:function(){
					"step 0"
					player.addTempSkill('reluoshen_add');
					event.cards=[];
					"step 1"
					var next=player.judge(function(card){
						if(get.color(card)=='black') return 1.5;
						return -1.5;
					});
					next.judge2=function(result){
						return result.bool;
					};
					if(get.mode()!='guozhan'&&!player.hasSkillTag('rejudge')) next.set('callback',function(){
						if(event.judgeResult.color=='black'&&get.position(card,true)=='o'){
							player.gain(card,'gain2').gaintag.add('reluoshen');
						}
					});
					else next.set('callback',function(){
						if(event.judgeResult.color=='black') event.getParent().orderingCards.remove(card);
					});
					"step 2"
					if(result.bool){
						event.cards.push(result.card);
						player.chooseBool('是否再次发动【洛神】？').set('frequentSkill','reluoshen');
					}
					else{
						for(var i=0;i<event.cards.length;i++){
							if(get.position(event.cards[i],true)!='o'){
								event.cards.splice(i,1);
								i--;
							}
						}
						if(event.cards.length){
							player.gain(event.cards,'gain2').gaintag.add('reluoshen');
						}
						event.finish();
					}
					"step 3"
					if(result.bool){
						event.goto(1);
					}
					else{
						for(var i=0;i<event.cards.length;i++){
							if(get.position(event.cards[i],true)!='o'){
								event.cards.splice(i,1);i--;
							}
						}
						if(event.cards.length){
							player.gain(event.cards,'gain2').gaintag.add('reluoshen');
						}
					}
				},
				subSkill:{
					add:{
						mod:{
							ignoredHandcard:function(card,player){
								if(card.hasGaintag('reluoshen')){
									return true;
								}
							},
							cardDiscardable:function(card,player,name){
								if(name=='phaseDiscard'&&card.hasGaintag('reluoshen')){
									return false;
								}
							},
						},
						onremove:function(player){
							player.removeGaintag('reluoshen');
						},
					}
				}
			},
			rejieyin:{
				audio:2,
				enable:'phaseUse',
				filterCard:true,
				usable:1,
				position:'he',
				filter:function(event,player){
					return player.countCards('he')>0;
				},
				check:function(card){
					var player=_status.event.player;
					if(get.position(card)=='e'){
						var subtype=get.subtype(card);
						if(!game.hasPlayer(function(current){
							return current!=player&&current.hp!=player.hp&&get.attitude(player,current)>0&&!current.countCards('e',{subtype:subtype});
						})){
							return 0;
						}
						if(player.countCards('h',{subtype:subtype})) return 20-get.value(card);
						return 10-get.value(card);
					}
					else{
						if(player.countCards('e')) return 0;
						if(player.countCards('h',{type:'equip'})) return 0;
						return 8-get.value(card);
					}
				},
				filterTarget:function(card,player,target){
					if(!target.hasSex('male')) return false;
					var card=ui.selected.cards[0];
					if(!card) return false;
					if(get.position(card)=='e'&&!target.canEquip(card)) return false;
					return true;
				},
				discard:false,
				delay:false,
				lose:false,
				content:function(){
					'step 0'
					if(get.position(cards[0])=='e') event._result={index:0};
					else if(get.type(cards[0])!='equip'||!target.canEquip(cards[0])) event._result={index:1};
					else player.chooseControl().set('choiceList',[
						'将'+get.translation(cards[0])+'置入'+get.translation(target)+'的装备区',
						'弃置'+get.translation(cards[0]),
					]).ai=function(){return 1};
					'step 1'
					if(result.index==0){
						player.$give(cards,target,false);
						target.equip(cards[0]);
					}
					else{
						player.discard(cards);
					}
					'step 2'
					if(player.hp>target.hp){
						player.draw();
						if(target.isDamaged()) target.recover();
					}
					else if(player.hp<target.hp){
						target.draw();
						if(player.isDamaged()) player.recover();
					}
				},
				ai:{
					order:function(){
						var player=_status.event.player;
						var es=player.getCards('e');
						for(var i=0;i<es.length;i++){
							if(player.countCards('h',{subtype:get.subtype(es[i])})) return 10;
						}
						return 2;
					},
					result:{
						target:function(player,target){
							var goon=function(){
								var es=player.getCards('e');
								for(var i=0;i<es.length;i++){
									if(player.countCards('h',{subtype:get.subtype(es[i])})) return true;
								}
								return false;
							}
							if(player.hp<target.hp){
								if(player.isHealthy()){
									if(!player.needsToDiscard(1)||goon()) return 0.1;
									return 0;
								}
								return 1.5;
							}
							if(player.hp>target.hp){
								if(target.isHealthy()){
									if(!player.needsToDiscard(1)||goon()) return 0.1;
									return 0;
								}
								return 1;
							}
							return 0;
						}
					}
				}
			},
			rejiuyuan:{
				audio:2,
				zhuSkill:true,
				trigger:{global:'recoverBefore'},
				direct:true,
				filter:function(event,player){
					return player!=event.player&&event.player.group=='wu'&&player.hp<=event.player.hp&&
						event.getParent().name!='rejiuyuan'&&player.hasZhuSkill('rejiuyuan',event.player)
				},
				content:function(){
					'step 0'
					trigger.player.chooseBool('是否对'+get.translation(player)+'发动【救援】？','改为令其回复1点体力，然后你摸一张牌').set('ai',function(){
						var evt=_status.event;
						return get.attitude(evt.player,evt.getParent().player)>0;
					});
					'step 1'
					if(result.bool){
						player.logSkill('rejiuyuan');
						trigger.player.line(player,'green');
						trigger.cancel();
						player.recover();
						trigger.player.draw();
					}
				},
			},
			rezhiheng:{
				audio:2,
				audioname:['shen_caopi'],
				mod:{
					aiOrder:function(player,card,num){
						if(num<=0||get.itemtype(card)!=='card'||get.type(card)!=='equip') return num;
						let eq=player.getEquip(get.subtype(card));
						if(eq&&get.equipValue(card)-get.equipValue(eq)<Math.max(1.2,6-player.hp)) return 0;
					}
				},
				locked:false,
				enable:'phaseUse',
				usable:1,
				position:'he',
				filterCard:lib.filter.cardDiscardable,
				discard:false,
				lose:false,
				delay:false,
				selectCard:[1,Infinity],
				check:function(card){
					var player=_status.event.player;
					if(get.position(card)=='h'&&!player.countCards('h','du')&&(player.hp>2||!player.countCards('h',function(card){
						return get.value(card)>=8;
					}))){
						return 1;
					}
					return 6-get.value(card)
				},
				content:function(){
					'step 0'
					player.discard(cards);
					event.num=1;
					var hs=player.getCards('h');
					if(!hs.length) event.num=0;
					for(var i=0;i<hs.length;i++){
						if(!cards.includes(hs[i])){
							event.num=0;break;
						}
					}
					'step 1'
					player.draw(event.num+cards.length);
				},
				//group:'rezhiheng_draw',
				subSkill:{
					draw:{
						trigger:{player:'loseEnd'},
						silent:true,
						filter:function(event,player){
							if(event.getParent(2).skill!='rezhiheng'&&event.getParent(2).skill!='jilue_zhiheng') return false;
							if(player.countCards('h')) return false;
							for(var i=0;i<event.cards.length;i++){
								if(event.cards[i].original=='h') return true;
							}
							return false;
						},
						content:function(){
							player.addTempSkill('rezhiheng_delay',trigger.getParent(2).skill+'After');
						}
					},
					delay:{}
				},
				ai:{
					order:function(item,player){
						if(player.hasCard((i)=>get.value(i)>Math.max(6,9-player.hp),'he')) return 1;
						return 10;
					},
					result:{
						player:1
					},
					nokeep:true,
					skillTagFilter:function(player,tag,arg){
						if(tag==='nokeep') return (!arg||arg&&arg.card&&get.name(arg.card)==='tao')&&player.isPhaseUsing()&&!player.getStat().skill.rezhiheng&&player.hasCard((card)=>get.name(card)!=='tao','h');
					},
					threaten:1.55
				},
			},
			reqicai:{
				mod:{
					targetInRange:function(card,player,target,now){
						var type=get.type(card);
						if(type=='trick'||type=='delay') return true;
					},
					canBeDiscarded:function(card){
						if(get.position(card)=='e'&&['equip2','equip5'].includes(get.subtype(card))) return false;
					},
				},
			},
			rejizhi:{
				audio:2,
				audioname:['lukang'],
				locked:false,
				trigger:{player:'useCard'},
				frequent:true,
				filter:function(event){
					return (get.type(event.card,'trick')=='trick'&&event.card.isCard);
				},
				init:function(player){
					player.storage.rejizhi=0;
				},
				content:function(){
					'step 0'
					player.draw();
					'step 1'
					event.card=result[0];
					if(get.type(event.card)=='basic'){
						player.chooseBool('是否弃置'+get.translation(event.card)+'并令本回合手牌上限+1？').set('ai',function(evt,player){
							return _status.currentPhase==player&&player.needsToDiscard(-3)&&_status.event.value<6;
						}).set('value',get.value(event.card,player));
					}
					'step 2'
					if(result.bool){
						player.discard(event.card);
						player.storage.rejizhi++;
						if(_status.currentPhase==player){
							player.markSkill('rejizhi');
						}
					}
				},
				ai:{
					threaten:1.4,
					noautowuxie:true,
				},
				mod:{
					maxHandcard:function(player,num){
						return num+player.storage.rejizhi;
					}
				},
				intro:{
					content:'本回合手牌上限+#'
				},
				group:'rejizhi_clear',
				subSkill:{
					clear:{
						trigger:{global:'phaseAfter'},
						silent:true,
						content:function(){
							player.storage.rejizhi=0;
							player.unmarkSkill('rejizhi');
						}
					}
				}
			},
			rebiyue:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				frequent:true,
				content:function(){
					var num=1;
					if(!player.countCards('h')){
						num=2;
					}
					player.draw(num);
				},
			},
			rerende:{
				audio:2,
				audioname:['gz_jun_liubei','shen_caopi'],
				enable:'phaseUse',
				filterCard:true,
				selectCard:[1,Infinity],
				discard:false,
				lose:false,
				delay:false,
				filterTarget:function(card,player,target){
					if(player.storage.rerende2&&player.storage.rerende2.includes(target)) return false;
					return player!=target;
				},
				onremove:['rerende','rerende2'],
				check:function(card){
					if(ui.selected.cards.length&&ui.selected.cards[0].name=='du') return 0;
					if(!ui.selected.cards.length&&card.name=='du') return 20;
					var player=get.owner(card);
					if(ui.selected.cards.length>=Math.max(2,player.countCards('h')-player.hp)) return 0;
					if(player.hp==player.maxHp||player.storage.rerende<0||player.countCards('h')<=1){
						var players=game.filterPlayer();
						for(var i=0;i<players.length;i++){
							if(players[i].hasSkill('haoshi')&&
								!players[i].isTurnedOver()&&
								!players[i].hasJudge('lebu')&&
								get.attitude(player,players[i])>=3&&
								get.attitude(players[i],player)>=3){
								return 11-get.value(card);
							}
						}
						if(player.countCards('h')>player.hp) return 10-get.value(card);
						if(player.countCards('h')>2) return 6-get.value(card);
						return -1;
					}
					return 10-get.value(card);
				},
				content:function(){
					'step 0'
					var evt=_status.event.getParent('phaseUse');
					if(evt&&evt.name=='phaseUse'&&!evt.rerende){
						var next=game.createEvent('rerende_clear');
						_status.event.next.remove(next);
						evt.after.push(next);
						evt.rerende=true;
						next.player=player;
						next.setContent(lib.skill.rerende1.content);
					}
					if(!Array.isArray(player.storage.rerende2)){
						player.storage.rerende2=[];
					}
					player.storage.rerende2.push(target);
					player.give(cards,target);
					'step 1'
					if(typeof player.storage.rerende!='number'){
						player.storage.rerende=0;
					}
					if(player.storage.rerende>=0){
						player.storage.rerende+=cards.length;
						if(player.storage.rerende>=2){
							var list=[];
							if(lib.filter.cardUsable({name:'sha'},player,event.getParent('chooseToUse'))&&game.hasPlayer(function(current){
								return player.canUse('sha',current);
							})){
								list.push(['基本','','sha']);
							}
							for(var i of lib.inpile_nature){
								if(lib.filter.cardUsable({name:'sha',nature:i},player,event.getParent('chooseToUse'))&&game.hasPlayer(function(current){
										return player.canUse({name:'sha',nature:i},current);
									})){
									list.push(['基本','','sha',i]);
								}
							}
							if(lib.filter.cardUsable({name:'tao'},player,event.getParent('chooseToUse'))&&game.hasPlayer(function(current){
								return player.canUse('tao',current);
							})){
								list.push(['基本','','tao']);
							}
							if(lib.filter.cardUsable({name:'jiu'},player,event.getParent('chooseToUse'))&&game.hasPlayer(function(current){
								return player.canUse('jiu',current);
							})){
								list.push(['基本','','jiu']);
							}
							if(list.length){
								player.chooseButton(['是否视为使用一张基本牌？',[list,'vcard']]).set('ai',function(button){
									var player=_status.event.player;
									var card={name:button.link[2],nature:button.link[3],isCard:true};
									if(card.name=='tao'){
										if(player.hp==1||(player.hp==2&&!player.hasShan())||player.needsToDiscard()){
											return 5;
										}
										return 1;
									}
									if(card.name=='sha'){
										if(game.hasPlayer(function(current){
											return player.canUse(card,current)&&get.effect(current,card,player,player)>0
										})){
											if(card.nature=='fire') return 2.95;
											if(card.nature=='thunder'||card.nature=='ice') return 2.92;
											return 2.9;
										}
										return 0;
									}
									if(card.name=='jiu'){
										return 0.5;
									}
									return 0;
								});
							}
							else{
								event.finish();
							}
							player.storage.rerende=-1;
						}
						else{
							event.finish();
						}
					}
					else{
						event.finish();
					}
					'step 2'
					if(result&&result.bool&&result.links[0]){
						var card={name:result.links[0][2],nature:result.links[0][3]};
						player.chooseUseTarget(card,true);
					}
				},
				ai:{
					fireAttack:true,
					order:function(skill,player){
						if(player.hp<player.maxHp&&player.storage.rerende<2&&player.countCards('h')>1){
							return 10;
						}
						return 4;
					},
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
					effect:{
						target:function(card,player,target){
							if(player==target&&get.type(card)=='equip'){
								if(player.countCards('e',{subtype:get.subtype(card)})){
									if(game.hasPlayer(function(current){
										return current!=player&&get.attitude(player,current)>0;
									})){
										return 0;
									}
								}
							}
						}
					},
					threaten:0.8
				}
			},
			rerende1:{
				trigger:{player:'phaseUseBegin'},
				silent:true,
				content:function(){
					player.storage.rerende=0;
					player.storage.rerende2=[];
				}
			},
			liyu:{
				audio:2,
				trigger:{source:'damageSource'},
				forced:true,
				filter:function(event,player){
					if(event._notrigger.includes(event.player)) return false;
					return event.card&&event.card.name=='sha'&&event.player.isIn()&&event.player.countGainableCards(player,'he')>0;
				},
				check:function(){
					return false;
				},
				content:function(){
					'step 0'
					trigger.player.chooseTarget(function(card,player,target){
						var evt=_status.event.getParent();
						return evt.player.canUse({name:'juedou'},target)&&target!=_status.event.player;
					},get.prompt('liyu')).set('ai',function(target){
						var evt=_status.event.getParent();
						return get.effect(target,{name:'juedou'},evt.player,_status.event.player)-2;
					});
					'step 1'
					if(result.bool){
						player.gainPlayerCard(trigger.player,'he',true);
						event.target=result.targets[0];
						trigger.player.line(player,'green');
					}
					else{
						event.finish();
					}
					'step 2'
					if(event.target){
						player.useCard({name:'juedou',isCard:true},event.target,'noai');
					}
				},
				ai:{
					halfneg:true
				}
			},
			/*reqicai:{
				trigger:{player:'equipEnd'},
				frequent:true,
				content:function(){
					player.draw();
				},
				mod:{
					targetInRange:function(card,player,target,now){
						var type=get.type(card);
						if(type=='trick'||type=='delay') return true;
					}
				},
			},*/
			retuxi:{
				audio:2,
				trigger:{player:'phaseDrawBegin2'},
				direct:true,
				filter:function(event){
					return event.num>0;
				},
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt('retuxi'),[1,trigger.num],function(card,player,target){
						return target.countCards('h')>0&&player!=target&&target.countCards('h')>=player.countCards('h');
					},function(target){
						var att=get.attitude(_status.event.player,target);
						if(target.hasSkill('tuntian')) return att/10;
						return 1-att;
					});
					"step 1"
					if(result.bool){
						player.logSkill('retuxi',result.targets);
						player.gainMultiple(result.targets);
						trigger.num-=result.targets.length;
					}
					else{
						event.finish();
					}
					"step 2"
					if(trigger.num<=0) game.delay();
				},
				ai:{
					threaten:1.6,
					expose:0.2
				}
			},
			reguicai:{
				audio:2,
				trigger:{global:'judge'},
				direct:true,
				filter:function(event,player){
					return player.countCards('hes')>0;
				},
				content:function(){
					"step 0"
					player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
					get.translation(trigger.player.judging[0])+'，'+get.prompt('reguicai'),'hes',function(card){
						var player=_status.event.player;
						var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
						if(mod2!='unchanged') return mod2;
						var mod=game.checkMod(card,player,'unchanged','cardRespondable',player);
						if(mod!='unchanged') return mod;
						return true;
					}).set('ai',function(card){
						var trigger=_status.event.getTrigger();
						var player=_status.event.player;
						var judging=_status.event.judging;
						var result=trigger.judge(card)-trigger.judge(judging);
						var attitude=get.attitude(player,trigger.player);
						if(attitude==0||result==0) return 0;
						if(attitude>0){
							return result-get.value(card)/2;
						}
						else{
							return -result-get.value(card)/2;
						}
					}).set('judging',trigger.player.judging[0]);
					"step 1"
					if(result.bool){
						player.respond(result.cards,'reguicai','highlight','noOrdering');
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						if(trigger.player.judging[0].clone){
							trigger.player.judging[0].clone.classList.remove('thrownhighlight');
							game.broadcast(function(card){
								if(card.clone){
									card.clone.classList.remove('thrownhighlight');
								}
							},trigger.player.judging[0]);
							game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
						}
						game.cardsDiscard(trigger.player.judging[0]);
						trigger.player.judging[0]=result.cards[0];
						trigger.orderingCards.addArray(result.cards);
						game.log(trigger.player,'的判定牌改为',result.cards[0]);
						game.delay(2);
					}
				},
				ai:{
					rejudge:true,
					tag:{
						rejudge:1,
					}
				}
			},
			refankui:{
				audio:2,
				trigger:{player:'damageEnd'},
				direct:true,
				filter:function(event,player){
					return (event.source&&event.source.countGainableCards(player,event.source!=player?'he':'e')&&event.num>0);
				},
				content:function(){
					"step 0"
					event.count=trigger.num;
					"step 1"
					event.count--;
					player.gainPlayerCard(get.prompt('refankui',trigger.source),trigger.source,get.buttonValue,trigger.source!=player?'he':'e').set('logSkill',[event.name,trigger.source]);
					"step 2"
					if(result.bool&&event.count>0&&trigger.source.countGainableCards(player,trigger.source!=player?'he':'e')>0&&player.hasSkill(event.name)) event.goto(1);
				},
				ai:{
					maixie_defend:true,
					effect:{
						target:function(card,player,target){
							if(player.countCards('he')>1&&get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-1.5];
								if(get.attitude(target,player)<0) return [1,1];
							}
						}
					}
				}
			},
			reluoyi:{
				audio:2,
				trigger:{player:'phaseDrawBegin1'},
				check:function(event,player){
					if(player.countCards('h','sha')) return true;
					return Math.random()<0.5;
				},
				content:function(){
					"step 0"
					player.addTempSkill('reluoyi2',{player:'phaseBefore'});
					trigger.cancel(null,null,'notrigger');
					"step 1"
					event.cards=get.cards(3);
					player.showCards(event.cards,'裸衣');
					"step 2"
					for(var i=0;i<cards.length;i++){
						if(get.type(cards[i])!='basic'&&cards[i].name!='juedou'&&
							(get.type(cards[i])!='equip'||get.subtype(cards[i])!='equip1')){
							cards[i].discard();
							cards.splice(i--,1);
						}
					}
					player.gain(cards,'gain2');
				}
			},
			reluoyi2:{
				trigger:{source:'damageBegin1'},
				filter:function(event){
					return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink();
				},
				forced:true,
				content:function(){
					trigger.num++;
				},
				ai:{
					damageBonus:true,
					skillTagFilter:function(player,tag,arg){
						if(tag==='damageBonus') return arg&&arg.card&&(arg.card.name==='sha'||arg.card.name==='juedou');
					}
				}
			},
			reganglie:{
				audio:2,
				trigger:{player:'damageEnd'},
				filter:function(event,player){
					return (event.source!=undefined&&event.num>0);
				},
				check:function(event,player){
					return (get.attitude(player,event.source)<=0);
				},
				logTarget:'source',
				preHidden:true,
				content:function(){
					"step 0"
					event.num=trigger.num;
					if(get.mode()=='guozhan') event.num=1;
					"step 1"
					player.judge(function(card){
						if(get.color(card)=='red') return 1;
						return 0;
					});
					"step 2"
					if(result.color=='black'){
						if(trigger.source.countCards('he')){
							player.discardPlayerCard(trigger.source,'he',true);
						}
					}
					else if(trigger.source.isIn()){
						trigger.source.damage();
					}
					event.num--;
					if(event.num>0&&player.hasSkill('reganglie')){
						player.chooseBool(get.prompt2('reganglie'));
					}
					else{
						event.finish();
					}
					"step 3"
					if(result.bool){
						player.logSkill('reganglie',trigger.source);
						event.goto(1);
					}
				},
				ai:{
					maixie_defend:true,
					expose:0.4
				}
			},
			qinxue:{
				skillAnimation:true,
				animationColor:'wood',
				audio:2,
				unique:true,
				juexingji:true,
				derivation:'gongxin',
				trigger:{player:['phaseZhunbeiBegin','phaseJieshuBegin']},
				forced:true,
				filter:function(event,player){
					if(player.countCards('h')>=player.hp+2) return true;
					return false;
				},
				content:function(){
					player.awakenSkill('qinxue');
					player.loseMaxHp();
					player.chooseDrawRecover(2,true);
					player.addSkills('gongxin');
				}
			},
			qingjian:{
				audio:2,
				unique:true,
				trigger:{player:'gainAfter'},
				direct:true,
				usable:4,
				filter:function(event,player){
					var evt=event.getParent('phaseDraw');
					if(evt&&evt.player==player) return false;
					return event.getg(player).length>0;
				},
				content:function(){
					"step 0"
					event.cards=trigger.getg(player);
					"step 1"
					player.chooseCardTarget({
						filterCard:function(card){
							return _status.event.getParent().cards.includes(card);
						},
						selectCard:[1,event.cards.length],
						filterTarget:function(card,player,target){
							return player!=target;
						},
						ai1:function(card){
							if(ui.selected.cards.length>0) return -1;
							if(card.name=='du') return 20;
							return (_status.event.player.countCards('h')-_status.event.player.hp);
						},
						ai2:function(target){
							var att=get.attitude(_status.event.player,target);
							if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
								if(target.hasSkillTag('nodu')) return 0;
								return 1-att;
							}
							if(target.countCards('h')>_status.event.player.countCards('h')) return 0;
							return att-4;
						},
						prompt:'请选择要送人的卡牌'
					});
					"step 2"
					if(result.bool){
						player.storage.qingjian++;
						player.logSkill('qingjian',result.targets);
						result.targets[0].gain(result.cards,player,'give');
						for(var i=0;i<result.cards.length;i++){
							event.cards.remove(result.cards[i]);
						}
						if(event.cards.length) event.goto(1);
					}
					else{
						player.storage.counttrigger.qingjian--;
					}
				},
				ai:{
					expose:0.3
				},
			},
			reyingzi:{
				audio:2,
				audioname:['heqi','sunce','gexuan','re_sunben','re_sunce','re_heqi'],
				audioname2:{re_sunyi:'reyingzi_re_sunyi'},
				trigger:{player:'phaseDrawBegin2'},
				forced:true,
				preHidden:true,
				filter:function(event,player){
					return !event.numFixed;
				},
				content:function(){
					trigger.num++;
				},
				ai:{
					threaten:1.5
				},
				mod:{
					maxHandcardBase:function(player,num){
						return player.maxHp;
					}
				}
			},
			refanjian:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				filterTarget:function(card,player,target){
					return player!=target;
				},
				filterCard:true,
				check:function(card){
					return 8-get.value(card);
				},
				discard:false,
				lose:false,
				delay:false,
				content:function(){
					"step 0"
					target.storage.refanjian=cards[0];
					player.give(cards[0],target);
					"step 1"
					var suit=get.suit(target.storage.refanjian);
					if(!target.countCards('h')) event._result={control:'refanjian_hp'};
					else target.chooseControl('refanjian_card','refanjian_hp').ai=function(event,player){
						var cards=player.getCards('he',{suit:get.suit(player.storage.refanjian)});
						if(cards.length==1) return 0;
						if(cards.length>=2){
							for(var i=0;i<cards.length;i++){
								if(get.tag(cards[i],'save')) return 1;
							}
						}
						if(player.hp==1) return 0;
						for(var i=0;i<cards.length;i++){
							if(get.value(cards[i])>=8) return 1;
						}
						if(cards.length>2&&player.hp>2) return 1;
						if(cards.length>3) return 1;
						return 0;
					}
					"step 2"
					if(result.control=='refanjian_card'){
						target.showHandcards();
					}
					else{
						target.loseHp();
						event.finish();
					}
					"step 3"
					var suit=get.suit(target.storage.refanjian);
					target.discard(target.getCards('he',function(i){
						return get.suit(i)==suit&&lib.filter.cardDiscardable(i,target,'refanjian');
					}));
					delete target.storage.refanjian;
				},
				ai:{
					order:9,
					result:{
						target:function(player,target){
							return -target.countCards('he')-(player.countCards('h','du')?1:0);
						}
					},
					threaten:2,
				}
			},
			reqianxun:{
				audio:2,
				trigger:{
					target:'useCardToBegin',
					player:'judgeBefore',
				},
				filter:function(event,player){
					if(player.countCards('h')==0) return false;
					if(event.getParent().name=='phaseJudge'){
						return true;
					}
					if(event.name=='judge') return false;
					if(event.targets&&event.targets.length>1) return false;
					if(event.card&&get.type(event.card)=='trick'&&event.player!=player) return true;
				},
				content:function(){
					var cards=player.getCards('h');
					player.addToExpansion(cards,'giveAuto',player).gaintag.add('reqianxun2');
					player.addSkill('reqianxun2');
				},
				ai:{
					effect:function(card,player,target){
						if(player==target||!target.hasFriend()) return;
						var type=get.type(card);
						var nh=Math.min(target.countCards(),game.countPlayer(i=>get.attitude(target,i)>0));
						if(type=='trick'){
							if(!get.tag(card,'multitarget')||get.info(card).singleCard){
								if(get.tag(card,'damage')) return [1.5,nh-1];
								return [1,nh];
							}
						}
						else if(type=='delay') return [0.5,0.5];
					},
				}
			},
			reqianxun2:{
				trigger:{global:'phaseEnd'},
				forced:true,
				audio:false,
				content:function(){
					var cards=player.getExpansions('reqianxun2');
					if(cards.length) player.gain(cards,'draw');
					player.removeSkill('reqianxun2');
				},
				intro:{
					mark:function(dialog,storage,player){
						var cards=player.getExpansions('reqianxun2');
						if(player.isUnderControl(true)) dialog.addAuto(cards);
						else return '共有'+get.cnNumber(cards.length)+'张牌';
					},
					markcount:'expansion',
				}
			},
			relianying:{
				audio:2,
				trigger:{
					player:'loseAfter',
					global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
				},
				direct:true,
				filter:function(event,player){
					if(player.countCards('h')) return false;
					var evt=event.getl(player);
					return evt&&evt.hs&&evt.hs.length;
				},
				content:function(){
					"step 0"
					var num=trigger.getl(player).hs.length;
					player.chooseTarget(get.prompt('relianying'),'令至多'+get.cnNumber(num)+'名角色各摸一张牌',[1,num]).ai=function(target){
						var player=_status.event.player;
						if(player==target) return get.attitude(player,target)+10;
						return get.attitude(player,target);
					}
					"step 1"
					if(result.bool){
						player.logSkill('relianying',result.targets);
						game.asyncDraw(result.targets);
					}
					else event.finish();
					"step 2"
					game.delay();
				},
				ai:{
					threaten:0.8,
					effect:{
						target:function(card){
							if(card.name=='guohe'||card.name=='liuxinghuoyu') return 0.5;
						}
					},
					noh:true,
				}
			},
			retishen:{
				audio:2,
				unique:true,
				mark:true,
				skillAnimation:true,
				animationColor:'soil',
				limited:true,
				trigger:{player:'phaseZhunbeiBegin'},
				init:function(player){
					player.storage.retishen=false;
				},
				filter:function(event,player){
					if(player.storage.retishen) return false;
					if(typeof player.storage.retishen2=='number'){
						return player.hp<player.storage.retishen2;
					}
					return false;
				},
				check:function(event,player){
					if(player.hp<=1) return true;
					return player.hp<player.storage.retishen2-1;
				},
				content:function(){
					player.awakenSkill('retishen');
					player.recover(player.storage.retishen2-player.hp);
					player.draw(player.storage.retishen2-player.hp);
					player.storage.retishen=true;
				},
				intro:{
					mark:function(dialog,content,player){
						if(player.storage.retishen) return;
						if(typeof player.storage.retishen2!='number'){
							return '上回合体力：无';
						}
						return '上回合体力：'+player.storage.retishen2;
					},
					content:'limited'
				},
				group:['retishen2']
			},
			retishen2:{
				trigger:{player:'phaseJieshuBegin'},
				priority:-10,
				silent:true,
				content:function(){
					player.storage.retishen2=player.hp;
					game.broadcast(function(player){
						player.storage.retishen2=player.hp;
					},player);
					game.addVideo('storage',player,['retishen2',player.storage.retishen2]);
				},
				intro:{
					content:function(storage,player){
						if(player.storage.retishen) return;
						return '上回合体力：'+storage;
					}
				}
			},
			reyajiao:{
				audio:2,
				trigger:{player:['respond','useCard']},
				frequent:true,
				filter:function(event,player){
					return player!=_status.currentPhase&&get.itemtype(event.cards)=='cards';
				},
				content:function(){
					"step 0"
					event.card=get.cards()[0];
					game.broadcast(function(card){
						ui.arena.classList.add('thrownhighlight');
						card.copy('thrown','center','thrownhighlight',ui.arena).addTempClass('start');
					},event.card);
					event.node=event.card.copy('thrown','center','thrownhighlight',ui.arena).addTempClass('start');
					ui.arena.classList.add('thrownhighlight');
					game.addVideo('thrownhighlight1');
					game.addVideo('centernode',null,get.cardInfo(event.card));
					if(get.type(event.card,'trick')==get.type(trigger.card,'trick')){
						player.chooseTarget('选择获得此牌的角色').set('ai',function(target){
							var att=get.attitude(_status.event.player,target);
							if(_status.event.du){
								if(target.hasSkillTag('nodu')) return 0;
								return -att;
							}
							if(att>0){
								return att+Math.max(0,5-target.countCards('h'));
							}
							return att;
						}).set('du',event.card.name=='du');
					}
					else{
						player.chooseBool('是否弃置'+get.translation(event.card)+'？');
						event.disbool=true;
					}
					game.delay(2);
					"step 1"
					if(event.disbool){
						if(!result.bool){
							game.log(player,'展示了',event.card);
							ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
						}
						else{
							game.log(player,'展示并弃掉了',event.card);
							event.card.discard();
						}
						game.addVideo('deletenode',player,[get.cardInfo(event.node)]);
						event.node.delete();
						game.broadcast(function(card){
							ui.arena.classList.remove('thrownhighlight');
							if(card.clone){
								card.clone.delete();
							}
						},event.card);
					}
					else if(result.targets){
						player.line(result.targets,'green');
						result.targets[0].gain(event.card,'log');
						event.node.moveDelete(result.targets[0]);
						game.addVideo('gain2',result.targets[0],[get.cardInfo(event.node)]);
						game.broadcast(function(card,target){
							ui.arena.classList.remove('thrownhighlight');
							if(card.clone){
								card.clone.moveDelete(target);
							}
						},event.card,result.targets[0]);
					}
					else{
						game.log(player,'展示并弃掉了',event.card);
						event.card.discard();
						game.addVideo('deletenode',player,[get.cardInfo(event.node)]);
						event.node.delete();
						game.broadcast(function(card){
							ui.arena.classList.remove('thrownhighlight');
							if(card.clone){
								card.clone.delete();
							}
						},event.card);
					}
					game.addVideo('thrownhighlight2');
					ui.arena.classList.remove('thrownhighlight');
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'respond')&&target.countCards('h')>1) return [1,0.2];
						}
					}
				}
			},
			rejianxiong:{
				audio:2,
				audioname:['shen_caopi'],
				trigger:{player:'damageEnd'},
				filter:function(event,player){
					return get.itemtype(event.cards)=='cards'&&get.position(event.cards[0],true)=='o';
				},
				content:function(){
					player.gain(trigger.cards);
					player.$gain2(trigger.cards);
					player.draw();
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					effect:{
						target:function(card,player,target){
							if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
							if(get.tag(card,'damage')) return [1,0.55];
						}
					}
				}
			},
			rejianxiong_old:{
				audio:2,
				trigger:{player:'damageEnd'},
				direct:true,
				content:function(){
					"step 0"
					if(get.itemtype(trigger.cards)=='cards'&&get.position(trigger.cards[0],true)=='o'){
						player.chooseControl('rejianxiong_mopai','rejianxiong_napai','cancel2').set('prompt',get.prompt('rejianxiong')).ai=function(){
							var trigger=_status.event.getTrigger();
							if(trigger.cards.length==1&&trigger.cards[0].name=='sha') return 0;
							return 1;
						};
					}
					else{
						player.chooseControl('rejianxiong_mopai','cancel2').set('prompt',get.prompt('rejianxiong'));
					}
					"step 1"
					if(result.control=='rejianxiong_napai'){
						player.logSkill('rejianxiong');
						player.gain(trigger.cards);
						player.$gain2(trigger.cards);
					}
					else if(result.control=='rejianxiong_mopai'){
						player.logSkill('rejianxiong');
						player.draw();
					}
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					effect:{
						target:function(card,player,target){
							if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
							if(get.tag(card,'damage')&&player!=target) return [1,0.6];
						}
					}
				}
			},
			reyiji:{
				audio:2,
				trigger:{player:'damageEnd'},
				frequent:true,
				filter:function(event){
					return (event.num>0)
				},
				content:function(){
					"step 0"
					event.num=1;
					event.count=1;
					"step 1"
					player.gain(get.cards(2));
					player.$draw(2);
					"step 2"
					player.chooseCardTarget({
						filterCard:true,
						selectCard:[1,2],
						filterTarget:function(card,player,target){
							return player!=target&&target!=event.temp;
						},
						ai1:function(card){
							if(ui.selected.cards.length>0) return -1;
							if(card.name=='du') return 20;
							return (_status.event.player.countCards('h')-_status.event.player.hp);
						},
						ai2:function(target){
							var att=get.attitude(_status.event.player,target);
							if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
								if(target.hasSkillTag('nodu')) return 0;
								return 1-att;
							}
							return att-4;
						},
						prompt:'请选择要送人的卡牌'
					});
					"step 3"
					if(result.bool){
						player.lose(result.cards,ui.special,'toStorage');
						if(result.targets[0].hasSkill('reyiji2')){
							result.targets[0].storage.reyiji2=result.targets[0].storage.reyiji2.concat(result.cards);
						}
						else{
							result.targets[0].addSkill('reyiji2');
							result.targets[0].storage.reyiji2=result.cards;
						}
						player.$give(result.cards.length,result.targets[0],false);
						player.line(result.targets,'green');
						game.addVideo('storage',result.targets[0],['reyiji2',get.cardsInfo(result.targets[0].storage.reyiji2),'cards']);
						if(num==1){
							event.temp=result.targets[0];
							event.num++;
							event.goto(2);
						}
						else if(event.count<trigger.num){
							delete event.temp;
							event.num=1;
							event.count++;
							event.goto(1);
						}
					}
					else if(event.count<trigger.num){
						delete event.temp;
						event.num=1;
						event.count++;
						event.goto(1);
					}
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					result:{
						effect:function(card,player,target){
							if(get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
								if(!target.hasFriend()) return;
								var num=1;
								if(get.attitude(player,target)>0){
									if(player.needsToDiscard()) num=0.7;
									else num=0.5;
								}
								if(player.hp>=4) return [1,num*2];
								if(target.hp==3) return [1,num*1.5];
								if(target.hp==2) return [1,num*0.5];
							}
						}
					},
					threaten:0.6
				}
			},
			reyiji2:{
				trigger:{player:'phaseDrawBegin'},
				forced:true,
				mark:true,
				popup:'遗计拿牌',
				audio:false,
				content:function(){
					player.$draw(player.storage.reyiji2.length);
					player.gain(player.storage.reyiji2,'fromStorage');
					delete player.storage.reyiji2;
					player.removeSkill('reyiji2');
					game.delay();
				},
				intro:{
					content:'cardCount'
				}
			},
			yijue:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return player!=target&&target.countCards('h');
				},
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				content:function(){
					"step 0"
					player.chooseToCompare(target).set('small',true);
					"step 1"
					if(result.bool){
						if(!target.hasSkill('fengyin')){
							target.addTempSkill('fengyin');
						}
						target.addTempSkill('yijue2');
						event.finish();
					}
					else if(target.hp<target.maxHp){
						player.chooseBool('是否让目标回复1点体力？').ai=function(event,player){
							return get.recoverEffect(target,player,player)>0;
						};
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						target.recover();
					}
				},
				ai:{
					result:{
						target:function(player,target){
							var hs=player.getCards('h');
							if(hs.length<3) return 0;
							var bool=false;
							for(var i=0;i<hs.length;i++){
								if(get.number(hs[i])>=9&&get.value(hs[i])<7){
									bool=true;
									break;
								}
							}
							if(!bool) return 0;
							if(target.countCards('h')>target.hp+1&&get.recoverEffect(target)>0){
								return 1;
							}
							if(player.canUse('sha',target)&&(player.countCards('h','sha')||player.countCards('he',{color:'red'}))){
								return -2;
							}
							return -0.5;
						}
					},
					order:9,
				}
			},
			yijue2:{
				mark:true,
				mod:{
					cardEnabled:function(){
						return false;
					},
					cardRespondable:function(){
						return false;
					},
					cardSavable:function(){
						return false;
					}
				},
				intro:{
					content:'不能使用或打出卡牌'
				}
			},
			retieji:{
				shaRelated:true,
				audio:2,
				audioname:['boss_lvbu3'],
				trigger:{player:'useCardToPlayered'},
				check:function(event,player){
					return get.attitude(player,event.target)<=0;
				},
				filter:function(event,player){
					return event.card.name=='sha';
				},
				logTarget:'target',
				content:function(){
					"step 0"
					player.judge(function(){return 0});
					if(!trigger.target.hasSkill('fengyin')){
						trigger.target.addTempSkill('fengyin');
					}
					"step 1"
					var suit=result.suit;
					var target=trigger.target;
					var num=target.countCards('h','shan');
					target.chooseToDiscard('请弃置一张'+get.translation(suit)+'牌，否则不能使用闪抵消此杀','he',function(card){
						return get.suit(card)==_status.event.suit;
					}).set('ai',function(card){
						var num=_status.event.num;
						if(num==0) return 0;
						if(card.name=='shan') return num>1?2:0;
						return 8-get.value(card);
					}).set('num',num).set('suit',suit);
					"step 2"
					if(!result.bool){
						trigger.getParent().directHit.add(trigger.target);
					}
				},
				ai:{
					ignoreSkill:true,
					skillTagFilter:function(player,tag,arg){
						if(tag=='directHit_ai'){
							return get.attitude(player,arg.target)<=0;
						}
						if(!arg||arg.isLink||!arg.card||arg.card.name!='sha') return false;
						if(!arg.target||get.attitude(player,arg.target)>=0) return false;
						if(!arg.skill||!lib.skill[arg.skill]||lib.skill[arg.skill].charlotte||get.is.locked(arg.skill)||!arg.target.getSkills(true,false).includes(arg.skill)) return false;
					},
					directHit_ai:true,
				}
			},
			reyicong:{
				trigger:{
					player:["changeHp"],
				},
				audio:2,
				audioname2:{gongsunzan:'yicong'},
				forced:true,
				filter:function(event,player){
					return get.sgn(player.hp-2.5)!=get.sgn(player.hp-2.5-event.num);
				},
				content:function (){},
				mod:{
					globalFrom:function(from,to,current){
						return current-1;
					},
					globalTo:function(from,to,current){
						if(to.hp<=2) return current+1;
					},
				},
				ai:{
					threaten:0.8
				}
			},
			reqiaomeng:{
				audio:'qiaomeng',
				trigger:{source:'damageSource'},
				direct:true,
				filter:function(event,player){
					if(event._notrigger.includes(event.player)) return false;
					return event.card&&event.card.name=='sha'&&event.player.countDiscardableCards(player,'hej');
				},
				content:function(){
					"step 0"
					player.discardPlayerCard(get.prompt('reqiaomeng',trigger.player),'hej',trigger.player).set('logSkill',['reqiaomeng',trigger.player]);
					"step 1"
					if(result.bool){
						var card=result.cards[0];
						if(get.position(card)=='d'){
							if(get.subtype(card)=='equip3'||get.subtype(card)=='equip4'||get.subtype(card)=='equip6'){
								player.gain(card,player,'gain2');
							}
						}
					}
				}
			},
			qiaomeng:{
				audio:2,
				trigger:{source:'damageSource'},
				direct:true,
				filter:function(event,player){
					if(event._notrigger.includes(event.player)) return false;
					return event.card&&event.card.name=='sha'&&event.cards&&
					get.color(event.cards)=='black'&&event.player.countDiscardableCards(player,'hej');
				},
				content:function(){
					"step 0"
					player.discardPlayerCard(get.prompt('qiaomeng',trigger.player),'e',trigger.player).set('logSkill',['qiaomeng',trigger.player]);
					"step 1"
					if(result.bool){
						var card=result.cards[0];
						if(get.position(card)=='d'){
							if(get.subtype(card)=='equip3'||get.subtype(card)=='equip4'||get.subtype(card)=='equip6'){
								player.gain(card,player,'gain2');
							}
						}
					}
				}
			},
			rekurou:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterCard:true,
				check:function(card){
					return 8-get.value(card);
				},
				position:'he',
				content:function(){
					player.loseHp();
				},
				ai:{
					order:8,
					result:{
						player:function(player){
							return get.effect(player,{name:'losehp'},player,player);
						}
					},
				}
			},
			zhaxiang:{
				audio:2,
				audioname:['ol_sb_jiangwei'],
				trigger:{player:'loseHpEnd'},
				forced:true,
				content:function(){
					'step 0'
					event.count=trigger.num;
					'step 1'
					event.count--;
					player.draw(3);
					if(player.isPhaseUsing()){
						player.addTempSkill('zhaxiang2');
						player.addMark('zhaxiang2',1,false);
					}
					'step 2'
					if(event.count>0&&player.hasSkill('zhaxiang')&&!get.is.blocked('zhaxiang',player)){
						player.logSkill('zhaxiang');
						event.goto(1);
					}
				},
				ai:{
					maihp:true,
					effect:function(card,player,target){
						if(get.tag(card,'damage')){
							if(player.hasSkillTag('jueqing',false,target)) return [1,1];
							return 1.2;
						}
						if(get.tag(card,'loseHp')){
							if(target.hp<=1) return;
							var using=target.isPhaseUsing();
							if(target.hp<=2) return [1,player.countCards('h')<=1&&using?3:0];
							if(using&&target.countCards('h',{name:'sha',color:'red'})) return [1,3];
							return [1,(target.countCards('h')<=target.hp||using&&game.hasPlayer(function(current){
								return current!=player&&get.attitude(player,current)<0&&player.inRange(current);
							}))?3:2]
						}
					}
				}
			},
			zhaxiang2:{
				mod:{
					targetInRange:function(card,player,target,now){
						if(card.name=='sha'&&get.color(card)=='red') return true;
					},
					cardUsable:function(card,player,num){
						if(card.name=='sha') return num+player.storage.zhaxiang2;
					}
				},
				charlotte:true,
				onremove:true,
				audio:'zhaxiang',
				audioname:['ol_sb_jiangwei'],
				trigger:{player:'useCard'},
				filter:function(event,player){
					return event.card&&event.card.name=='sha'&&get.color(event.card)=='red';
				},
				forced:true,
				content:function(){
					trigger.directHit.addArray(game.players);
				},
				intro:{content:'<li>使用【杀】的次数上限+#<br><li>使用红色【杀】无距离限制且不能被【闪】响应'},
				ai:{
					directHit_ai:true,
					skillTagFilter:function(player,tag,arg){
						return arg.card.name=='sha'&&get.color(arg.card)=='red';
					},
				},
			},
			zhuhai:{
				audio:2,
				audioname:['gz_re_xushu'],
				trigger:{global:'phaseJieshuBegin'},
				direct:true,
				filter:function(event,player){
					return event.player.isIn()&&event.player.getStat('damage')&&
					lib.filter.targetEnabled({name:'sha'},player,event.player)&&(player.hasSha()||_status.connectMode&&player.countCards('h')>0);
				},
				content:function(){
					player.chooseToUse(function(card,player,event){
						if(get.name(card)!='sha') return false;
						return lib.filter.filterCard.apply(this,arguments);
					},'诛害：是否对'+get.translation(trigger.player)+'使用一张杀？').set('logSkill','zhuhai').set('complexSelect',true).set('filterTarget',function(card,player,target){
						if(target!=_status.event.sourcex&&!ui.selected.targets.includes(_status.event.sourcex)) return false;
						return lib.filter.targetEnabled.apply(this,arguments);
					}).set('sourcex',trigger.player);
				}
			},
			qianxin:{
				skillAnimation:true,
				animationColor:'orange',
				audio:2,
				unique:true,
				juexingji:true,
				trigger:{source:'damageSource'},
				forced:true,
				derivation:'jianyan',
				filter:function(event,player){
					return player.hp<player.maxHp;
				},
				content:function(){
					player.awakenSkill('qianxin');
					player.addSkills('jianyan');
					player.loseMaxHp();
				}
			},
			jianyan:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				delay:false,
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current.hasSex('male');
					});
				},
				content:function(){
					"step 0"
					player.chooseControl(['red','black','basic','trick','equip']).set('ai',function(){
						var player=_status.event.player;
						if(!player.hasShan()) return 'basic';
						if(player.countCards('e')<=1) return 'equip';
						if(player.countCards('h')>2) return 'trick';
						return 'red';
					});
					"step 1"
					event.card=get.cardPile(function(card){
						if(get.color(card)==result.control) return true;
						if(get.type(card,'trick')==result.control) return true;
						return false;
					},'cardPile');
					if(!event.card){
						event.finish();
						return;
					}
					player.showCards([event.card]);
					"step 2"
					player.chooseTarget(true,'选择一名男性角色送出'+get.translation(event.card),function(card,player,target){
						return target.hasSex('male');
					}).set('ai',function(target){
						var att=get.attitude(_status.event.player,target);
						if(_status.event.neg) return -att;
						return att;
					}).set('neg',get.value(event.card,player,'raw')<0);
					"step 3"
					player.line(result.targets,'green');
					result.targets[0].gain(event.card,'gain2');
				},
				ai:{
					order:9,
					result:{
						player:function(player){
							if(game.hasPlayer(function(current){
								return current.hasSex('male')&&get.attitude(player,current)>0;
							})) return 2;
							return 0;
						},
					},
					threaten:1.2
				}
			},
			reguose:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				discard:false,
				lose:false,
				delay:false,
				filter:function(event,player){
					return player.countCards('hes',{suit:'diamond'})>0;
				},
				position:'hes',
				filterCard:{suit:'diamond'},
				filterTarget:function(card,player,target){
					if(get.position(ui.selected.cards[0])!='s'&&lib.filter.cardDiscardable(ui.selected.cards[0],player,'reguose')&&target.hasJudge('lebu')) return true;
					if(player==target) return false;
					if(!game.checkMod(ui.selected.cards[0],player,'unchanged','cardEnabled2',player)) return false;
					return player.canUse({name:'lebu',cards:ui.selected.cards},target);
				},
				check:function(card){
					return 7-get.value(card);
				},
				content:function(){
					if(target.hasJudge('lebu')){
						player.discard(cards);
						target.discard(target.getJudge('lebu'));
					}
					else{
						player.useCard({name:'lebu'},target,cards).audio=false;
					}
					player.draw();
				},
				ai:{
					result:{
						target:function(player,target){
							if(target.hasJudge('lebu')) return -get.effect(target,{name:'lebu'},player,target);
							return get.effect(target,{name:'lebu'},player,target);
						}
					},
					order:9,
				}
			},
			fenwei:{
				skillAnimation:true,
				animationColor:'wood',
				audio:2,
				audioname:['heqi'],
				unique:true,
				mark:true,
				limited:true,
				trigger:{global:'useCardToPlayered'},
				//priority:5,
				filter:function(event,player){
					if(event.getParent().triggeredTargets3.length>1) return false;
					if(get.type(event.card)!='trick') return false;
					if(get.info(event.card).multitarget) return false;
					if(event.targets.length<2) return false;
					if(player.storage.fenwei) return false;
					return true;
				},
				init:function(player){
					player.storage.fenwei=false;
				},
				direct:true,
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt('fenwei'),
						[1,trigger.targets.length],function(card,player,target){
						return _status.event.targets.includes(target);
					}).set('ai',function(target){
						var trigger=_status.event.getTrigger();
						if(game.phaseNumber>game.players.length*2&&trigger.targets.length>=game.players.length-1&&!trigger.excluded.includes(target)){
							return -get.effect(target,trigger.card,trigger.player,_status.event.player);
						}
						return -1;
					}).set('targets',trigger.targets);
					"step 1"
					if(result.bool){
						player.awakenSkill('fenwei');
						player.logSkill('fenwei',result.targets);
						player.storage.fenwei=true;
						trigger.getParent().excluded.addArray(result.targets);
						game.delay();
					}
				},
				intro:{
					content:'limited'
				}
			},
			chulao:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					if(player==target) return false;
					if(target.group=='unknown') return false;
					for(var i=0;i<ui.selected.targets.length;i++){
						if(ui.selected.targets[i].group==target.group) return false;
					}
					return target.countCards('he')>0;
				},
				filter:function(event,player){
					return player.countCards('he')>0;
				},
				filterCard:true,
				position:'he',
				selectTarget:[1,Infinity],
				check:function(card){
					if(get.suit(card)=='spade') return 8-get.value(card);
					return 5-get.value(card);
				},
				content:function(){
					"step 0"
					if(num==0&&get.suit(cards[0])=='spade') player.draw();
					player.choosePlayerCard(targets[num],'he',true);
					"step 1"
					if(result.bool){
						if(result.links.length) targets[num].discard(result.links[0]);
						if(get.suit(result.links[0])=='spade') targets[num].draw();
					}
				},
				ai:{
					result:{
						target:-1
					},
					threaten:1.2,
					order:3
				}
			},
			xunxun:{
				audio:2,
				trigger:{player:'phaseDrawBegin1'},
				preHidden:true,
				content:function(){
					"step 0"
					var cards=get.cards(4);
					game.cardsGotoOrdering(cards);
					var next=player.chooseToMove('恂恂：将两张牌置于牌堆顶',true);
					next.set('list',[
						['牌堆顶',cards],
						['牌堆底'],
					]);
					next.set('filterMove',function(from,to,moved){
						if(to==1&&moved[1].length>=2) return false;
						return true;
					});
					next.set('filterOk',function(moved){
						return moved[1].length==2;
					});
					next.set('processAI',function(list){
						var cards=list[0][1].slice(0).sort(function(a,b){
							return get.value(b)-get.value(a);
						});
						return [cards,cards.splice(2)];
					})
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
					game.updateRoundNumber();
					game.delayx();
				},
			},
			wangxi:{
				audio:2,
				trigger:{player:'damageEnd',source:'damageSource'},
				filter:function(event){
					if(event._notrigger.includes(event.player)) return false;
					return event.num&&event.source&&event.player&&
					event.player.isIn()&&event.source.isIn()&&event.source!=event.player;
				},
				check:function(event,player){
					if(player.isPhaseUsing()) return true;
					if(event.player==player) return get.attitude(player,event.source)>-3;
					return get.attitude(player,event.player)>-3;
				},
				logTarget:function(event,player){
					if(event.player==player) return event.source;
					return event.player;
				},
				preHidden:true,
				content:function(){
					"step 0"
					event.count=trigger.num;
					"step 1"
					game.asyncDraw([trigger.player,trigger.source]);
					event.count--;
					"step 2"
					game.delay();
					"step 3"
					if(event.count&&player.hasSkill('wangxi')){
						player.chooseBool(get.prompt2('wangxi',lib.skill.wangxi.logTarget(trigger,player)))
					}
					else event.finish();
					"step 4"
					if(result.bool){
						player.logSkill('wangxi',lib.skill.wangxi.logTarget(trigger,player));
						event.goto(1);
					}
				},
				ai:{
					maixie:true,
					maixie_hp:true
				}
			},
			refangquan:{
				audio:2,
				trigger:{player:'phaseUseBefore'},
				filter:function(event,player){
					return player.countCards('h')>0&&!player.hasSkill('fangquan3');
				},
				direct:true,
				content:function(){
					"step 0"
					var fang=player.countMark('fangquan2')==0&&player.hp>=2&&player.countCards('h')<=player.maxHp+1;
					player.chooseBool(get.prompt2('refangquan')).set('ai',function(){
						if(!_status.event.fang) return false;
						return game.hasPlayer(function(target){
							if(target.hasJudge('lebu')||target==player) return false;
							if(get.attitude(player,target)>4){
								return (get.threaten(target)/Math.sqrt(target.hp+1)/Math.sqrt(target.countCards('h')+1)>0);
							}
							return false;
						});
					}).set('fang',fang);
					"step 1"
					if(result.bool){
						player.logSkill('refangquan');
						trigger.cancel();
						player.addTempSkill('fangquan2','phaseAfter');
						player.addMark('fangquan2',1,false);
						player.addTempSkill('refangquan2');
						//player.storage.fangquan=result.targets[0];
					}
				}
			},
			refangquan2:{
				mod:{
					maxHandcardBase:function(player,num){
						return player.maxHp;
					},
				},
			},
			rehunzi:{
				inherit:'hunzi',
				filter:function(event,player){
					return player.hp<=2&&!player.storage.rehunzi;
				},
				ai:{
					threaten:function(player,target){
						if(target.hp<=2) return 2;
						return 0.5;
					},
					maixie:true,
					effect:{
						target:function(card,player,target){
							if(!target.hasFriend()) return;
							if(target.hp===3&&get.tag(card,'damage')==1&&!target.isTurnedOver()&&
							_status.currentPhase!=target&&get.distance(_status.currentPhase,target,'absolute')<=3) return [0.5,1];
							if(target.hp===1&&get.tag(card,'recover')&&!target.isTurnedOver()&&
							_status.currentPhase!==target&&get.distance(_status.currentPhase,target,'absolute')<=3) return [1,-3];
						}
					}
				}
			},
			rezhijian:{
				inherit:'zhijian',
				group:['rezhijian_use'],
				subfrequent:['use'],
				subSkill:{
					use:{
						audio:'rezhijian',
						trigger:{player:'useCard'},
						frequent:true,
						filter:function(event,player){
							return get.type(event.card)=='equip';
						},
						prompt:'是否发动【直谏】摸一张牌？',
						content:function(){
							player.draw('nodelay');
						},
					},
				},
			},
			retuntian:{
				audio:2,
				trigger:{
					player:'loseAfter',
					global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
				},
				frequent:true,
				filter:function(event,player){
					if(player==_status.currentPhase) return false;
					if(event.name=='gain'&&event.player==player) return false;
					var evt=event.getl(player);
					return evt&&evt.cards2&&evt.cards2.length>0;
				},
				content:function(){
					player.judge(function(card){
						return 1;
					}).callback=lib.skill.retuntian.callback;
				},
				callback:function(){
					'step 0'
					if(event.judgeResult.suit=='heart'){
						player.gain(card,'gain2');
						event.finish();
					}
					else if(get.mode()=='guozhan'){
						player.chooseBool('是否将'+get.translation(card)+'作为“田”置于武将牌上？').set('frequentSkill','retuntian').ai=function(){
							return true;
						};
					}
					else event.directbool=true;
					'step 1'
					if(!result.bool&&!event.directbool){
						//game.cardsDiscard(card);
						return;
					}
					player.addToExpansion(card,'gain2').gaintag.add('tuntian');
				},
				group:'tuntian_dist',
				locked:false,
				ai:{
					effect:{
						target:function(){
							return lib.skill.tuntian.ai.effect.target.apply(this,arguments);
						}
					},
					threaten:function(player,target){
						if(target.countCards('h')==0) return 2;
						return 0.5;
					},
					nodiscard:true,
					nolose:true
				}
			},
			rebeige:{
				audio:'beige',
				audioname:['re_caiwenji'],
				trigger:{global:'damageEnd'},
				filter:function(event,player){
					return (event.card&&event.card.name=='sha'&&event.source&&
						event.player.classList.contains('dead')==false&&player.countCards('he'));
				},
				direct:true,
				checkx:function(event,player){
					var att1=get.attitude(player,event.player);
					var att2=get.attitude(player,event.source);
					return att1>0&&att2<=0;
				},
				content:function(){
					"step 0"
					var next=player.chooseToDiscard('he',get.prompt2('rebeige',trigger.player));
					var check=lib.skill.beige.checkx(trigger,player);
					next.set('ai',function(card){
						if(_status.event.goon) return 8-get.value(card);
						return 0;
					});
					next.set('logSkill','rebeige');
					next.set('goon',check);
					"step 1"
					if(result.bool){
						trigger.player.judge();
					}
					else{
						event.finish();
					}
					"step 2"
					switch(result.suit){
						case 'heart':trigger.player.recover(trigger.num);break;
						case 'diamond':trigger.player.draw(3);break;
						case 'club':trigger.source.chooseToDiscard('he',2,true);break;
						case 'spade':trigger.source.turnOver();break;
					}
				},
				ai:{
					expose:0.3
				}
			},
			rexingshang:{
				audio:2,
				trigger:{global:'die'},
				filter:function(event,player){
					return player.isDamaged()||event.player.countCards('he')>0;
				},
				direct:true,
				content:function(){
					"step 0"
					var choice=[];
					if(player.isDamaged()) choice.push('回复体力');
					if(trigger.player.countCards('he')) choice.push('获得牌');
					choice.push('cancel2');
					player.chooseControl(choice).set('prompt',get.prompt2('rexingshang')).set('ai',function(){
						if(choice.length==2) return 0;
						if(get.value(trigger.player.getCards('he'))>8) return 1;
						return 0;
					});
					"step 1"
					if(result.control!='cancel2'){
						player.logSkill(event.name,trigger.player);
						if(result.control=='获得牌'){
							event.togain=trigger.player.getCards('he');
							player.gain(event.togain,trigger.player,'giveAuto','bySelf');
						}
						else player.recover();
					}
				},
			},
			refangzhu:{
				audio:2,
				trigger:{
					player:"damageEnd",
				},
				direct:true,
				content:function (){
					"step 0"
					player.chooseTarget(get.prompt2('refangzhu'),function(card,player,target){
						return player!=target
					}).ai=function(target){
						if(target.hasSkillTag('noturn')) return 0;
						var player=_status.event.player;
						if(get.attitude(_status.event.player,target)==0) return 0;
						if(get.attitude(_status.event.player,target)>0){
							if(target.classList.contains('turnedover')) return 1000-target.countCards('h');
							if(player.getDamagedHp()<3) return -1;
							return 100-target.countCards('h');
						}
						else{
							if(target.classList.contains('turnedover')) return -1;
							if(player.getDamagedHp()>=3) return -1;
							return 1+target.countCards('h');
						}
					}
					"step 1"
					if(result.bool){
						player.logSkill('refangzhu',result.targets);
						event.target=result.targets[0];
						if(player.isHealthy()) event._result={bool:false};
						else event.target.chooseToDiscard('he',player.getDamagedHp()).set('ai',function(card){
							var player=_status.event.player;
							if(player.isTurnedOver()||_status.event.getTrigger().player.getDamagedHp()>2) return -1;
							return (player.hp*player.hp)-get.value(card);
						}).set('prompt','弃置'+get.cnNumber(player.getDamagedHp())+'张牌并失去1点体力；或选择不弃置，将武将牌翻面并摸'+get.cnNumber(player.getDamagedHp())+'张牌。');
					}
					else event.finish();
					"step 2"
					if(result.bool){
						event.target.loseHp();
					}
					else{
						if(player.isDamaged()) event.target.draw(player.getDamagedHp());
						event.target.turnOver();
					}
				},
				ai:{
					maixie:true,
					"maixie_hp":true,
					effect:{
						target:function (card,player,target){
							if(get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-1.5];
								if(target.hp<=1) return;
								if(!target.hasFriend()) return;
								var hastarget=false;
								var turnfriend=false;
								var players=game.filterPlayer();
								for(var i=0;i<players.length;i++){
									if(get.attitude(target,players[i])<0&&!players[i].isTurnedOver()){
										hastarget=true;
									}
									if(get.attitude(target,players[i])>0&&players[i].isTurnedOver()){
										hastarget=true;
										turnfriend=true;
									}
								}
								if(get.attitude(player,target)>0&&!hastarget) return;
								if(turnfriend||target.hp==target.maxHp) return [0.5,1];
								if(target.hp>1) return [1,0.5];
							}
						},
					},
				},
			},
			repolu:{
				audio:1,
				trigger:{
					source:'dieAfter',
					player:'die',
				},
				forceDie:true,
				filter:function(event,player,name){
					return name=='die'||player.isIn();
				},
				direct:true,
				content:function(){
					'step 0'
					if(!player.storage.repolu) player.storage.repolu=0;
					event.num=player.storage.repolu+1;
					player.chooseTarget([1,Infinity],get.prompt('repolu'),'令任意名角色摸'+get.cnNumber(event.num)+'张牌').set('forceDie',true).ai=function(target){
						return get.attitude(_status.event.player,target);
					};
					'step 1'
					if(result.bool){
						player.storage.repolu++;
						result.targets.sortBySeat();
						player.logSkill('repolu',result.targets);
						game.asyncDraw(result.targets,num);
					}
					else event.finish();
					'step 2'
					game.delay();
				},
			},
			oljiuchi:{
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=='jiu') return Infinity;
					},
				},
				audio:2,
				enable:'chooseToUse',
				filterCard:function(card){
					return get.suit(card)=='spade';
				},
				viewAs:{name:'jiu'},
				position:'hs',
				viewAsFilter:function(player){
					return player.hasCard(card=>get.suit(card)=='spade','hs');
				},
				prompt:'将一张黑桃手牌当酒使用',
				check:function(cardx,player){
					if(player&&player==cardx.player) return true;
					if(_status.event.type=='dying') return 1;
					var player=_status.event.player;
					var shas=player.getCards('hs',function(card){
						return card!=cardx&&get.name(card,player)=='sha';
					});
					if(!shas.length) return -1;
					if(shas.length>1&&(player.getCardUsable('sha')>1||player.countCards('hs','zhuge'))){
						return 0;
					}
					shas.sort(function(a,b){
						return get.order(b)-get.order(a);
					});
					var card=false;
					if(shas.length){
						for(var i=0;i<shas.length;i++){
							if(shas[i]!=cardx&&lib.filter.filterCard(shas[i],player)){
								card=shas[i];break;
							}
						}
					}
					if(card){
						if(game.hasPlayer(function(current){
							return (get.attitude(player,current)<0&&
							!current.hasShan()
							&&current.hp+current.countCards('h',{name:['tao','jiu']})>1+(player.storage.jiu||0)
							&&player.canUse(card,current,true,true)&&
							!current.hasSkillTag('filterDamage',null,{
								player:player,
								card:card,
								jiu:true,
							})&&
							get.effect(current,card,player)>0);
						})){
							return 4-get.value(cardx);
						}
					}
					return -1;
				},
				ai:{
					threaten:1.5,
				},
				trigger:{source:'damageEnd'},
				locked:false,
				forced:true,
				filter:function(event,player){
					if(event.name=='chooseToUse') return player.hasCard(card=>get.suit(card)=='spade','hs');
					return event.card&&event.card.name=='sha'&&event.getParent(2).jiu==true&&!player.hasSkill('oljiuchi_air');
				},
				content:function(){
					player.logSkill('oljiuchi');
					player.addTempSkill('oljiuchi_air');
				},
				subSkill:{
					air:{},
				},
			},
			rezaiqi:{
				count:function(){
					var num=0;
					game.countPlayer2(function(current){
						current.getHistory('lose',function(evt){
							if(evt.position==ui.discardPile){
								for(var i=0;i<evt.cards.length;i++){
									if(get.color(evt.cards[i])=='red') num++;
								}
							}
						})
					});
					game.getGlobalHistory('cardMove',function(evt){
					if(evt.name=='cardsDiscard'){
							for(var i=0;i<evt.cards.length;i++){
								if(get.color(evt.cards[i])=='red') num++;
							}
						}
					})
					return num;
				},
				audio:2,
				direct:true,
				filter:function(event,player){
					return lib.skill.rezaiqi.count()>0;
				},
				trigger:{
					player:'phaseJieshuBegin'
				},
				content:function(){
					'step 0'
					player.chooseTarget([1,lib.skill.rezaiqi.count()],get.prompt2('rezaiqi')).ai=function(target){
						return get.attitude(_status.event.player,target);
					};
					'step 1'
					if(result.bool){
						var targets=result.targets;
						targets.sortBySeat();
						player.line(targets,'fire');
						player.logSkill('rezaiqi',targets);
						event.targets=targets;
					}
					else event.finish();
					'step 2'
					event.current=targets.shift();
					if(player.isHealthy()) event._result={index:0};
					else event.current.chooseControl().set('choiceList',[
						'摸一张牌',
						'令'+get.translation(player)+'回复1点体力',
					]).set('ai',function(){
						if(get.attitude(event.current,player)>0) return 1;
						return 0;
					});
					'step 3'
					if(result.index==1){
						event.current.line(player);
						player.recover();
					}
					else event.current.draw();
					game.delay();
					if(targets.length) event.goto(2);
				},
			},
		},
		dynamicTranslate:{
			rejiushi:function(player){
				if(player.storage.chengzhang) return '当你需要使用【酒】时，若你的武将牌正面向上，你可以翻面，视为使用一张【酒】。当你受到伤害后，若你的武将牌背面向上，你可以翻面。当你翻面时，你获得牌堆中的一张随机锦囊。';
				return '当你需要使用【酒】时，若你的武将牌正面向上，你可以翻面，视为使用一张【酒】。当你受到伤害后，若你的武将牌背面向上，你可以翻面并获得牌堆中的一张随机锦囊。';
			},
			rejiaozhao:function(player){
				return ['出牌阶段限一次。你可以展示一张手牌，并令一名距离你最近的角色选择一种基本牌或普通锦囊牌的牌名。你可将此牌当做其声明的牌使用直到此阶段结束（你不是此牌的合法目标）。','出牌阶段限一次。你可以将一张手牌当做一张基本牌或普通锦囊牌使用（你不是此牌的合法目标）。','出牌阶段每种类型各限一次。你可以将一张手牌当做一张基本牌或普通锦囊牌使用。'][player.countMark('redanxin')];
			},
		},
		translate:{
			re_zhangliao:'界张辽',
			re_zhangliao_prefix:'界',
			re_simayi:'界司马懿',
			re_simayi_prefix:'界',
			re_xuzhu:'界许褚',
			re_xuzhu_prefix:'界',
			re_xiahoudun:'界夏侯惇',
			re_xiahoudun_prefix:'界',
			re_lvmeng:'界吕蒙',
			re_lvmeng_prefix:'界',
			re_zhouyu:'界周瑜',
			re_zhouyu_prefix:'界',
			re_luxun:'界陆逊',
			re_luxun_prefix:'界',
			re_zhaoyun:'界赵云',
			re_zhaoyun_prefix:'界',
			re_guanyu:'界关羽',
			re_guanyu_prefix:'界',
			re_zhangfei:'界张飞',
			re_zhangfei_prefix:'界',
			re_machao:'界马超',
			re_machao_prefix:'界',
			re_caocao:'界曹操',
			re_caocao_prefix:'界',
			re_guojia:'界郭嘉',
			re_guojia_prefix:'界',
			re_lvbu:'界吕布',
			re_lvbu_prefix:'界',
			re_huanggai:'界黄盖',
			re_huanggai_prefix:'界',
			re_daqiao:'界大乔',
			re_daqiao_prefix:'界',
			re_ganning:'界甘宁',
			re_ganning_prefix:'界',
			re_huatuo:'界华佗',
			re_huatuo_prefix:'界',
			re_liubei:'界刘备',
			re_liubei_prefix:'界',

			re_diaochan:'界貂蝉',
			re_diaochan_prefix:'界',
			re_huangyueying:'界黄月英',
			re_huangyueying_prefix:'界',
			re_sunquan:'界孙权',
			re_sunquan_prefix:'界',
			re_sunshangxiang:'界孙尚香',
			re_sunshangxiang_prefix:'界',
			re_zhugeliang:'界诸葛亮',
			re_zhugeliang_prefix:'界',
			re_zhenji:'界甄宓',
			re_zhenji_prefix:'界',
			re_huaxiong:"界华雄",
			re_huaxiong_prefix:'界',

			ol_sp_zhugeliang:"界卧龙",
			ol_sp_zhugeliang_prefix:'界',
			re_zhangjiao:'界张角',
			re_zhangjiao_prefix:'界',
			re_sunce:'界孙策',
			re_sunce_prefix:'界',
			ol_yuanshao:'界袁绍',
			ol_yuanshao_prefix:'界',
			ol_liushan:'界刘禅',
			ol_liushan_prefix:'界',

			olfangquan:'放权',
			olfangquan_info:'出牌阶段开始前，你可以跳过此阶段。若如此做，弃牌阶段开始时，你可以弃置一张手牌，令一名其他角色进行一个额外回合。',
			olruoyu:'若愚',
			olruoyu_info:'主公技，觉醒技，准备阶段，若你的体力值为全场最少，则你加1点体力上限，将体力回复至3点，然后获得技能〖思蜀〗和〖激将〗。',
			sishu:'思蜀',
			sishu_info:'出牌阶段开始时，你可以选择一名角色。该角色本局游戏内【乐不思蜀】的判定效果反转。',
			olluanji:'乱击',
			olluanji_info:'你可以将两张花色相同的手牌当做【万箭齐发】使用。当你使用【万箭齐发】选择目标后，你可以为此牌减少一个目标。',
			olluanji_remove:'乱击',
			olxueyi:'血裔',
			olxueyi_info:'主公技，锁定技。①游戏开始时，你获得2X个“裔”标记（X为场上群势力角色的数目）。②出牌阶段开始时，你可以移去一个“裔”标记，然后摸一张牌。③你的手牌上限+Y（Y为“裔”标记数）。',
			olxueyi_draw:'血裔',
			olhunzi:'魂姿',
			olhunzi_info:'觉醒技，准备阶段，若你的体力值为1，你减1点体力上限并获得技能〖英姿〗和〖英魂〗；本回合的结束阶段，你摸两张牌或回复1点体力。',
			olzhiba:'制霸',
			olzhiba_info:'主公技，其他吴势力的角色的出牌阶段限一次，其可以与你拼点（你可拒绝此拼点）。若其没赢，你可以获得两张拼点牌。你的出牌阶段限一次，你可以和一名吴势力角色拼点，若你赢，你获得两张拼点牌。',
			olzhiba2:'制霸',
			xinleiji:'雷击',
			xinleiji_misa:'雷击',
			xinguidao:'鬼道',
			xinleiji_info:'①当你使用【闪】或【闪电】，或打出【闪】时，你可以进行判定。②当你的判定的判定牌生效后，若结果为：黑桃，你可对一名角色造成2点雷电伤害；梅花：你回复1点体力并可对一名角色造成1点雷电伤害。',
			xinleiji_append:'<span style="font-family:yuanli">不能触发〖雷击〗的判定：〖暴虐〗、〖助祭〗、<br>〖弘仪〗、〖孤影〗。</span>',
			xinleiji_faq:'不能触发〖雷击〗的判定',
			xinleiji_faq_info:'<br>董卓/界董卓〖暴虐〗<br>黄巾雷使〖助祭〗<br>羊徽瑜〖弘仪〗<br>鸣濑白羽〖孤影〗',
			xinguidao_info:'一名角色的判定牌生效前，你可以打出一张黑色牌作为判定牌并获得原判定牌。若你以此法打出的牌为黑桃2-9，则你摸一张牌。',
			xinhuangtian:'黄天',
			xinhuangtian2:'黄天',
			xinhuangtian_info:'主公技。其他群势力角色的出牌阶段限一次，该角色可以交给你一张【闪】或黑桃手牌。',
			reqiangxi:"强袭",
			"reqiangxi_info":"出牌阶段对每名其他角色限一次，你可以选择一项：1. 失去1点体力并对你攻击范围内的一名其他角色造成1点伤害；2. 弃置一张武器牌并对你攻击范围内的一名其他角色造成1点伤害。",
			rehuoji:"火计",
			rehuoji_info:"你可一张红色牌当作【火攻】使用。",
			rekanpo:"看破",
			rekanpo_info:"你可以将一张黑色牌当作【无懈可击】使用。",
			reshuangxiong:"双雄",
			reshuangxiong1:"双雄",
			reshuangxiong2:"双雄",
			reshuangxiong_info:"摸牌阶段，你可以放弃摸牌。若如此做，你展示牌堆顶的两张牌并选择获得其中的一张。然后，你本回合内可以将与此牌颜色不同的一张手牌当做【决斗】使用。当你受到【决斗】造成的伤害时，你可以获得对方于此决斗中打出的所有【杀】。",

			reguanxing:'观星',
			reguanxing_info:'准备阶段，你可以观看牌堆顶的五张牌（存活角色小于4时改为三张），并将其以任意顺序置于牌堆项或牌堆底，若你将〖观星〗的牌都放在了牌堆底，则你可以在结束阶段再次发动〖观星〗。',
			reluoshen:'洛神',
			reluoshen_info:'准备阶段，你可以进行判定，若结果为黑色则获得此判定牌，且可重复此流程直到出现红色的判定结果。你通过〖洛神〗得到的牌不计入当前回合的手牌上限。',
			reluoshen_info_guozhan:'准备阶段，你可以进行判定，若为黑色则可以继续判定，直到出现红色。然后你获得所有黑色的判定牌。你通过〖洛神〗得到的牌不计入当前回合的手牌上限（结果为黑色的判定牌于此过程中不会进入弃牌堆）。',
			rejieyin:'结姻',
			rejieyin_info:'出牌阶段限一次，你可以选择一名男性角色并弃置一张手牌或将装备区内的一张装备牌置于其装备区，你与其体力较高的角色摸一张牌，体力值较低的角色回复1点体力。',
			rebiyue:'闭月',
			rebiyue_info:'结束阶段，你可以摸一张牌，若你没有手牌，则改为摸两张牌。',
			rejizhi:'集智',
			rejizhi_info:'当你使用锦囊牌时，你可以摸一张牌。若此牌为基本牌，则你可以弃置之，然后令本回合手牌上限+1。',
			reqicai:'奇才',
			reqicai_info:'锁定技，你使用锦囊牌无距离限制，你装备区内的防具牌和宝物牌不能被其他角色弃置。',
			rezhiheng:'制衡',
			rezhiheng_info:'出牌阶段限一次，你可以弃置任意张牌并摸等量的牌，若你在发动〖制衡〗时弃置了所有手牌，则你多摸一张牌。',
			rejiuyuan:'救援',
			rejiuyuan_info:'主公技，其他吴势力角色对自己使用【桃】时，若其体力值大于你，则其可以选择令你回复1点体力，然后其摸一张牌。',

			"new_yajiao":"涯角",
			"new_yajiao_info":"每当你于回合外使用或打出牌时，你可以亮出牌堆顶的一张牌，并将其交给一名角色。若此牌与你此次使用或打出的牌类别不同，则你弃置一张牌。",
			"new_liyu":"利驭",
			"new_liyu_info":"当你使用【杀】对一名其他角色造成伤害后，你可以获得其区域内的一张牌。若此牌不为装备牌，则其摸一张牌。若此牌为装备牌，则视为你对其选择的另一名角色使用一张【决斗】。",
			"new_retuxi":"突袭",
			"new_retuxi_info":"摸牌阶段摸牌时，你可以少摸任意张牌，然后获得等量的角色的各一张手牌。",
			"new_retuxi_info_guozhan":"摸牌阶段摸牌时，你可以少摸至多两张牌，然后获得等量的角色的各一张手牌。",
			reyiji_tag:'已分配',
			"new_reyiji":"遗计",
			"new_reyiji_info":"当你受到1点伤害后，你可以摸两张牌，然后可以将至多两张手牌交给其他角色。",
			"new_rejianxiong":"奸雄",
			"new_rejianxiong_info":"当你受到伤害后，你可以获得对你造成伤害的牌并摸一张牌。",
			"new_reluoyi":"裸衣",
			"new_reluoyi_info":"摸牌阶段开始时，你展示牌堆顶的三张牌。然后，你可以放弃摸牌。若如此做，你获得其中的基本牌、武器牌和【决斗】，且直到你的下回合开始，你使用的【杀】或【决斗】造成伤害时，此伤害+1。否则，你将这些牌置入弃牌堆。",
			"new_rewusheng":"武圣",
			"new_rewusheng_info":"你可以将一张红色牌当做【杀】使用或打出。你使用的方片杀没有距离限制。",
			"new_yijue":"义绝",
			"new_yijue_info":"出牌阶段限一次，你可以弃置一张牌并令一名有手牌的其他角色展示一张手牌。若此牌为黑色，则该角色不能使用或打出牌，非锁定技失效且受到来自你的红桃【杀】的伤害+1直到回合结束。若此牌为红色，则你可以获得此牌，并可以令其回复1点体力。",
			"new_yijue2":"义绝",
			"new_yijue2_info":"",
			"new_repaoxiao":"咆哮",
			"new_repaoxiao_info":"锁定技，出牌阶段，你使用【杀】没有数量限制。若你于此出牌阶段内使用过【杀】，则你本回合内使用【杀】没有距离限制。",
			"new_tishen":"替身",
			"new_tishen_info":"出牌阶段结束时，你可以弃置你所有的锦囊牌与坐骑牌。若如此做，直到你的下个回合开始，当一张【杀】结算结束后，若你是此牌目标且你未受到此牌伤害，你获得此牌对应的所有实体牌。",
			"new_tishen2":"替身",
			"new_tishen2_info":"",
			"new_qingjian":"清俭",
			"new_qingjian_info":"当你于摸牌阶段外得到牌后，你可以展示任意张牌并交给一名其他角色。然后，当前回合角色本回合的手牌上限+X（X为你给出的牌中包含的类别数）。每回合限一次。",
			"qingjian_add":"清俭",
			"qingjian_add_info":"",
			"new_reqingnang":"青囊",
			"new_reqingnang_info":"出牌阶段，你可以弃置一张手牌，令一名本回合内未成为过〖青囊〗的目标的角色回复1点体力。若你弃置的是黑色牌，则你本回合内不能再发动〖青囊〗。",
			"new_reyaowu":"耀武",
			"new_reyaowu_info":"锁定技，当一名角色使用【杀】对你造成伤害时，若此杀为红色，该角色回复1点体力或摸一张牌。否则你摸一张牌。",
			reyaowu:'耀武',
			reyaowu_info:'锁定技，当你受到牌造成的伤害时，若此牌为红色，则伤害来源摸一张牌；否则你摸一张牌。',
			reqingguo:'倾国',
			reqingguo_info:'你可以将一张黑色牌当做【闪】使用或打出。',

			qinxue:'勤学',
			retuxi:'突袭',
			reluoyi:'裸衣',
			reluoyi2:'裸衣',
			reganglie:'刚烈',
			qingjian:'清俭',
			reyingzi:'英姿',
			refanjian:'反间',
			refanjian_card:'弃牌',
			refanjian_hp:'失去体力',
			reqianxun:'谦逊',
			reqianxun2:'谦逊',
			relianying:'连营',
			retishen:'替身',
			retishen2:'替身',
			reyajiao:'涯角',
			rejianxiong:'奸雄',
			rejianxiong_mopai:'摸牌',
			rejianxiong_napai:'拿牌',
			reyiji:'遗计',
			reyiji2:'遗计',
			yijue:'义绝',
			yijue2:'义绝',
			retieji:'铁骑',
			refankui:'反馈',
			reyicong:'义从',
			qiaomeng:'趫猛',
			rekurou:'苦肉',
			zhaxiang:'诈降',
			zhaxiang2:'诈降',
			zhuhai:'诛害',
			qianxin:'潜心',
			jianyan:'荐言',
			reguicai:'鬼才',
			xunxun:'恂恂',
			wangxi:'忘隙',
			reguose:'国色',
			fenwei:'奋威',
			chulao:'除疠',
			liyu:'利驭',
			rerende:'仁德',
			rerende_info:'出牌阶段，你可以将至少一张手牌交给其他角色，然后你于此阶段内不能再以此法交给该角色牌；若你于此阶段内给出的牌首次达到两张，你可以视为使用一张基本牌。',
			liyu_info:'当你使用【杀】对一名其他角色造成伤害后，该角色可令你获得其一张牌，若如此做，则视为你对其选择的另一名角色使用一张【决斗】。',
			xunxun_info:'摸牌阶段，你可以观看牌堆顶的四张牌，然后将其中的两张牌置于牌堆顶，并将其余的牌以任意顺序置于牌堆底。',
			wangxi_info:'每当你对其他角色造成1点伤害后，或受到其他角色造成的1点伤害后，你可与该角色各摸一张牌。',
			reguose_info:'出牌阶段限一次，你可以选择一项：将一张方片花色牌当做【乐不思蜀】使用；或弃置一张方片花色牌并弃置场上的一张【乐不思蜀】。选择完成后，你摸一张牌。',
			fenwei_info:'限定技，当一名角色使用的锦囊牌指定了至少两名角色为目标时，你可以令此牌对其中任意名角色无效。',
			chulao_info:'出牌阶段限一次，若你有牌，你可以选择任意名势力各不相同的其他角色，你弃置你和这些角色的各一张牌。然后以此法弃置黑桃牌的角色各摸一张牌。',
			reguicai_info:'在任意角色的判定牌生效前，你可以打出一张牌代替之。',
			zhuhai_info:'一名其他角色的结束阶段开始时，若该角色本回合造成过伤害，你可以对其使用一张【杀】。',
			qianxin_info:'觉醒技，当你造成一次伤害后，若你已受伤，你须减1点体力上限，并获得技能“荐言”。',
			jianyan_info:'出牌阶段限一次，你可以声明一种牌的类别或颜色，并亮出牌库中第一张符合你声明的牌，然后你令一名男性角色获得此牌。',
			rekurou_info:'出牌阶段限一次，你可以弃置一张牌，然后失去1点体力。',
			zhaxiang_info:'锁定技。当你失去1点体力后，你摸三张牌。然后若此时是你的出牌阶段，则你本回合获得此下效果：使用【杀】的次数上限+1，使用红色【杀】无距离限制且不能被【闪】响应。',
			qiaomeng_info:'当你使用黑色【杀】对一名角色造成伤害后，你可以弃置该角色装备区里的一张牌，若此牌是坐骑牌，你于此牌置入弃牌堆后获得之。',
			reyicong_info:'锁定技，你计算与其他角色的距离时-1。若你的体力值不大于2，则其他角色计算与你的距离时+1。',
			refankui_info:'每当你受到1点伤害后，你可以获得伤害来源的一张牌。',
			retieji_info:'当你使用【杀】指定一名角色为目标后，你可以进行一次判定并令该角色的非锁定技失效直到回合结束，除非该角色弃置一张与判定结果花色相同的牌，否则不能使用【闪】抵消此【杀】。',
			yijue_info:'出牌阶段限一次，你可以与一名其他角色拼点，若你赢，则直到回合结束，该角色不能使用或打出手牌且其非锁定技失效，若你没赢，你可令该角色回复1点体力。',
			reyiji_info:'每当你受到1点伤害后，你可以摸两张牌。然后你可以在至多两名角色的武将牌旁边分别扣置至多两张手牌，这些角色的下个摸牌阶段开始时，该角色获得其武将牌旁的这些牌。',
			rejianxiong_info:'每当你受到伤害后，你可以获得对你造成伤害的牌，然后摸一张牌。',
			reyajiao_info:'每当你于回合外使用或打出一张手牌时，你可以亮出牌堆顶的一张牌，若此牌与你此次使用或打出的牌类别相同，你可以将之交给任意一名角色；若不同则你可以将之置入弃牌堆。',
			retishen_info:'限定技，准备阶段开始时，你可以将体力回复至等同于你上回合结束时的体力值，然后你每以此法回复1点体力，便摸一张牌。',
			reqianxun_info:'每当一张延时类锦囊牌或其他角色使用的普通锦囊牌生效时，若你是此牌的唯一目标，你可以将所有手牌置于你的武将牌上，若如此做，此回合结束时，你获得你武将牌上的所有牌。',
			relianying_info:'当你失去最后的手牌时，你可以令至多X名角色各摸一张牌（X为你此次失去的手牌数）。',
			reyingzi_info:'锁定技，摸牌阶段摸牌时，你额外摸一张牌；你的手牌上限为你的体力上限。',
			refanjian_info:'出牌阶段限一次，你可以展示一张手牌并将此牌交给一名其他角色。然后该角色选择一项：展示其手牌并弃置所有与此牌花色相同的牌，或失去1点体力。',
			qingjian_info:'每当你于摸牌阶段外得到牌时，你可以将其中任意牌以任意顺序交给其他角色，每回合最多发动四次。',
			qinxue_info:'觉醒技。准备阶段或结束阶段开始时，若你的手牌数减体力值大于1，则你减1点体力上限，回复1点体力或摸两张牌，获得技能〖攻心〗。',
			retuxi_info:'摸牌阶段摸牌时，你可以少摸任意张牌，然后选择等量的手牌数大于或等于你的其他角色，获得这些角色的各一张手牌。',
			reluoyi_info:'你可以跳过摸牌阶段，然后展示牌堆顶的三张牌，获得其中的基本牌、武器牌和【决斗】，若如此做，直到你的下回合开始，你为伤害来源的【杀】或【决斗】造成的伤害+1。',
			reganglie_info:'当你受到1点伤害后，你可进行判定，若结果为：红色，你对伤害来源造成1点伤害，；黑色，你弃置伤害来源一张牌。',
			reganglie_info_guozhan:'当你受到伤害后，你可进行判定，若结果为：红色，你对伤害来源造成1点伤害，；黑色，你弃置伤害来源一张牌。',
			botu:'博图',
			botu_info:'回合结束时，若你本回合出牌阶段内使用的牌包含四种花色，则你可以进行一个额外回合。',
			rebotu:'博图',
			rebotu_info:'每轮限X次。回合结束时，若本回合内置入弃牌堆的牌中包含至少四种花色，则你可获得一个额外的回合。（X为存活角色数且至多为3）',

			xin_yuji:'界于吉',
			xin_yuji_prefix:'界',
			re_zuoci:'界左慈',
			re_zuoci_prefix:'界',
			reguhuo:"蛊惑",
			reguhuo_info:"每名角色的回合限一次，你可以扣置一张手牌当作一张基本牌或普通锦囊牌使用或打出。其他角色同时选择是否质疑。然后，你展示此牌。若有质疑的角色：若此牌为假，则此牌作废，且所有质疑者各摸一张牌；为真，则所有质疑角色于此牌结算完成后依次弃置一张牌或失去1点体力，并获得技能〖缠怨〗。",
			reguhuo_guess:"蛊惑",
			reguhuo_guess_info:"",
			rechanyuan:"缠怨",
			rechanyuan_info:"锁定技，你不能于〖蛊惑〗的结算流程中进行质疑。当你的体力值不大于1时，你的其他技能失效。",
			reguhuo_ally:'信任',
			reguhuo_betray:'质疑',
			reguhuo_ally_bg:'真',
			reguhuo_betray_bg:'假',
			rehuashen:'化身',
			rehuashen_info:'游戏开始时，你随机获得三张未加入游戏的武将牌，选一张置于你面前并声明该武将牌的一项技能，你拥有该技能且同时将性别和势力属性变成与该武将相同直到该化身被替换。回合开始时或回合结束时，你可以选择一项：①弃置至多两张未展示的化身牌并重新获得等量化身牌；②更换所展示的化身牌或技能。（你不可声明限定技、觉醒技、隐匿技、使命技、主公技等特殊技能）。',
			rexinsheng:'新生',
			rexinsheng_info:'当你受到1点伤害后，你可以获得一张新的化身牌。',
			re_menghuo:'界孟获',
			re_menghuo_prefix:'界',
			re_caopi:'界曹丕',
			re_caopi_prefix:'界',
			oljiuchi:'酒池',
			oljiuchi_info:'你可以将一张黑桃手牌当做【酒】使用。你使用【酒】无次数限制，且当你于回合内使用带有【酒】效果的【杀】造成伤害后，你令你的〖崩坏〗失效直到回合结束。',
			repolu:'破虏',
			repolu_info:'当你杀死一名角色/死亡时，你可以令任意名角色摸X+1张牌。（X为你此前发动过〖破虏〗的次数）',
			rexingshang:'行殇',
			rexingshang_info:'当其他角色死亡后，你可以选择一项：回复1点体力，或获得其所有牌。',
			refangzhu:'放逐',
			refangzhu_info:'当你受到伤害后，你可以令一名其他角色选择一项：摸X张牌并将武将牌翻面，或弃置X张牌并失去1点体力。（X为你已损失的体力值）',
			rezaiqi:'再起',
			rezaiqi_info:'结束阶段开始时，你可以令至多X名角色选择一项：1.摸一张牌，2.令你回复1点体力（X为本回合进入弃牌堆的红色牌数）。',
			ol_caiwenji:'界蔡琰',
			ol_caiwenji_prefix:'界',
			retuntian:'屯田',
			rebeige:'悲歌',
			retuntian_info:'①当你于回合外失去牌后，你可以判定。若判定结果为♥，你获得此判定牌。否则你将此牌置于你的武将牌上，称为“田”。②你计算与其他角色的距离时-X（X为你武将牌上“田”的数目）。',
			rebeige_info:'当有角色受到【杀】造成的伤害后，你可以弃一张牌，并令其进行一次判定，若判定结果为：♥该角色回复X点体力(X为伤害点数)；♦︎该角色摸三张牌；♣伤害来源弃两张牌；♠伤害来源将其武将牌翻面。',
			rehunzi:'魂姿',
			rehunzi_info:'觉醒技，准备阶段，若你的体力值不大于2，你减1点体力上限，并获得技能〖英姿〗和〖英魂〗。',
			rezhijian:'直谏',
			rezhijian_info:'出牌阶段，你可以将手牌中的一张装备牌置于一名其他角色装备区里（不得替换原装备），然后摸一张牌。当你使用装备牌时，你可以摸一张牌。',
			refangquan:'放权',
			refangquan_info:'你可跳过你的出牌阶段，若如此做，你本回合的手牌上限为你的体力上限，且回合结束时，你可以弃置一张手牌并令一名其他角色进行一个额外的回合。',
			xin_gaoshun:'界高顺',
			xin_gaoshun_prefix:'界',
			repojun:'破军',
			repojun2:'破军',
			repojun3:'破军',
			repojun_info:'当你使用【杀】指定目标后，你可以将其的至多X张牌置于其武将牌上（X为其体力值），然后其于当前回合结束时获得这些牌。当你使用【杀】对一名角色造成伤害时，若该角色的手牌数和装备区内的牌数均不大于你，则此伤害+1。',
			rexianzhen:'陷阵',
			rexianzhen_info:'出牌阶段限一次，你可以和一名其他角色拼点。若你赢，你本回合内对其使用牌没有次数和距离限制且无视其防具。若你没赢，你本回合内不能使用【杀】。若你以此法失去的拼点牌为【杀】，则你的【杀】不计入本回合的手牌上限。',
			rejinjiu:'禁酒',
			rejinjiu_info:'锁定技，你的【酒】均视为【杀】。其他角色不能于你的回合内使用【酒】。当你受到酒【杀】的伤害时，你令此伤害-X（X为影响过此【杀】的伤害值的【酒】的数量）。',
			rejinjiu2:'禁酒',
			rejinjiu3:'禁酒',
			ol_xiahouyuan:'界夏侯渊',
			ol_xiahouyuan_prefix:'界',
			shebian:'设变',
			shebian_info:'当你的武将牌翻面后，你可以移动场上的一张装备牌。',
			cangzhuo:'藏拙',
			cangzhuo_info:'弃牌阶段开始时，若你本回合内没有使用过锦囊牌，则你的锦囊牌不计入手牌上限。',
			re_zhangyi:'界张嶷',
			re_zhangyi_prefix:'界',
			rewurong:'怃戎',
			rewurong_info:'出牌阶段限一次，你可以令一名其他角色与你同时展示一张手牌：若你展示的是【杀】且该角色展示的不是【闪】，则你对其造成1点伤害；若你展示的不是【杀】且该角色展示的是【闪】，则你获得其一张牌。',
			ol_pangtong:'界庞统',
			ol_pangtong_prefix:'界',
			olniepan:'涅槃',
			olniepan_info:'限定技，当你处于濒死状态时，你可以弃置你区域内的所有牌并复原你的武将牌，然后摸三张牌并将体力回复至3点。然后你选择获得以下技能中的一个：〖八阵〗/〖火计〗/〖看破〗。',
			ol_weiyan:'界魏延',
			ol_weiyan_prefix:'界',
			reqimou:'奇谋',
			reqimou_info:'限定技，出牌阶段，你可以失去任意点体力并摸等量的牌，然后直到回合结束，你计算与其他角色的距离时-X，且你可以多使用X张【杀】（X为你失去的体力值）。',
			ol_xiaoqiao:'界小乔',
			ol_xiaoqiao_prefix:'界',
			rehongyan:'红颜',
			rehongyan_info:'锁定技，你区域内的黑桃牌和黑桃判定牌均视为红桃。当你于回合外正面朝上失去红桃牌后，若你的手牌数小于体力值，你摸一张牌。',
			reluoying:'落英',
			reluoying_discard:'落英',
			reluoying_judge:'落英',
			reluoying_info:'当其他角色的梅花牌因弃置或判定而进入弃牌堆后，你可以获得之。',
			rejiushi:'酒诗',
			rejiushi_info:'当你需要使用【酒】时，若你的武将牌正面向上，你可以翻面，视为使用一张【酒】。当你受到伤害后，若你的武将牌背面向上，你可以翻面并获得牌堆中的一张随机锦囊。',
			rejiushi1:'酒诗',
			rejiushi3:'酒诗',
			rejiushi_mark:'酒诗·改',
			rejiushi_mark_info:'当你需要使用【酒】时，若你的武将牌正面向上，你可以翻面，视为使用一张【酒】。当你受到伤害后，若你的武将牌背面向上，你可以翻面。当你翻面时，你获得牌堆中的一张随机锦囊。',
			chengzhang:'成章',
			chengzhang_info:'觉醒技，准备阶段开始时，若你造成伤害与受到伤害值之和累计7点或以上，则你回复1点体力并摸一张牌，然后改写〖酒诗〗。',
			re_wuyi:'界吴懿',
			re_wuyi_prefix:'界',
			re_zhuran:'界朱然',
			re_zhuran_prefix:'界',
			re_quancong:'界全琮',
			re_quancong_prefix:'界',
			re_liaohua:'界廖化',
			re_liaohua_prefix:'界',
			re_guohuai:'界郭淮',
			re_guohuai_prefix:'界',
			re_chengpu:'界程普',
			re_chengpu_prefix:'界',
			rechunlao:'醇醪',
			rechunlao2:'醇醪',
			rechunlao_info:'出牌阶段结束时，若你没有“醇”，你可以将至少一张【杀】置于你的武将牌上，称为“醇”。当一名角色处于濒死状态时，你可以移去一张“醇”，视为该角色使用一张【酒】，然后若此“醇”的属性为：火，你回复1点体力、雷，你摸两张牌。',
			re_caozhang:'界曹彰',
			re_caozhang_prefix:'界',
			yujin_yujin:'界于禁',
			yujin_yujin_prefix:'界',
			rexuanfeng:'旋风',
			rexuanfeng_info:'当你失去装备区内的牌时，或于弃牌阶段弃置了两张或更多的手牌后，你可以依次弃置一至两名其他角色的共计两张牌，或将一名其他角色装备区内的一张牌移动到另一名其他角色的装备区内。',
			olpaoxiao:'咆哮',
			olpaoxiao2:'咆哮',
			olpaoxiao_info:'①锁定技，你使用【杀】无次数限制。②锁定技，当你使用的【杀】被【闪】抵消时，你获得一枚“咆”（→）当你因【杀】造成伤害时，你弃置所有“咆”并令伤害值+X（X为“咆”数）。回合结束后，你弃置所有“咆”。',
			oltishen:'替身',
			oltishen_info:'限定技，准备阶段，你可以将体力回复至上限，然后摸X张牌（X为你回复的体力值）。',
			ollongdan:'龙胆',
			ollongdan_info:'你可以将一张【杀】当做【闪】、【闪】当做【杀】、【酒】当做【桃】、【桃】当做【酒】使用或打出。',
			olyajiao:'涯角',
			olyajiao_info:'当你于回合外因使用或打出而失去手牌后，你可以展示牌堆顶的一张牌。若这两张牌的类别相同，你可以将展示的牌交给一名角色；若类别不同，你可弃置攻击范围内包含你的角色区域里的一张牌。',
			regongji:'弓骑',
			regongji_info:'出牌阶段限一次，你可以弃置一张非基本牌，然后弃置一名其他角色的一张牌。锁定技，当你的装备区内有坐骑牌时，你的攻击范围无限。',
			ol_sunjian:'界孙坚',
			ol_sunjian_prefix:'界',
			wulie:'武烈',
			wulie2:'武烈',
			wulie_info:'限定技，结束阶段，你可以失去任意点体力并指定等量的其他角色。这些角色各获得一枚「烈」。有「烈」的角色受到伤害时，其移去一枚「烈」，然后防止此伤害。',
			re_sunluban:'界孙鲁班',
			re_sunluban_prefix:'界',
			re_masu:'界马谡',
			re_masu_prefix:'界',
			ol_pangde:'界庞德',
			ol_pangde_prefix:'界',
			rejianchu:'鞬出',
			rejianchu_info:'当你使用【杀】指定一名角色为目标后，你可以弃置其一张牌，若以此法弃置的牌不为基本牌，此【杀】不可被【闪】响应且你本回合使用【杀】的次数上限+1，为基本牌，该角色获得此【杀】。',
			re_taishici:'界太史慈',
			re_taishici_prefix:'界',
			hanzhan:'酣战',
			hanzhan_gain:'酣战',
			hanzhan_info:'①当你发起拼点时，或成为拼点的目标时，你可以令对方选择拼点牌的方式改为随机选择一张手牌。②当你拼点结束后，你可以获得本次拼点的拼点牌中点数最大的【杀】。',
			re_jianyong:'界简雍',
			re_jianyong_prefix:'界',
			xin_xusheng:'界徐盛',
			xin_xusheng_prefix:'界',
			decadepojun:'破军',
			decadepojun2:'破军',
			decadepojun_info:'当你使用【杀】指定目标后，你可以将其的至多X张牌置于其武将牌上（X为其体力值）。若这些牌中：有装备牌，你将这些装备牌中的一张置于弃牌堆；有锦囊牌，你摸一张牌。其于回合结束时获得其武将牌上的这些牌。',
			re_wangyi:'界王异',
			re_wangyi_prefix:'界',
			guanzhang:'关兴张苞',
			rezishou:'自守',
			rezishou2:'自守',
			rezishou_info:'摸牌阶段，你可以多摸X张牌（X为存活势力数）。若如此做，本回合你对其他角色造成伤害时，防止此伤害。',
			rezongshi:'宗室',
			rezongshi_info:'锁定技，你的手牌上限+X（X为存活势力数）。准备阶段，若你的手牌数大于体力值，则你本回合内使用【杀】无次数限制。',
			ol_dongzhuo:'界董卓',
			ol_dongzhuo_prefix:'界',
			olbaonue:'暴虐',
			olbaonue_info:'主公技，其他群雄角色造成1点伤害后，你可进行判定，若为♠，你回复1点体力并获得判定牌。',
			re_panzhangmazhong:'界潘璋马忠',
			re_panzhangmazhong_prefix:'界',
			re_hanhaoshihuan:'界韩浩史涣',
			re_hanhaoshihuan_prefix:'界',
			xinyicong:'义从',
			xinyicong_info:'锁定技，你计算与其他角色的距离时-X，其他角色计算与你的距离时+Y。（X为你的体力值-1，Y为你的已损失体力值-1）',
			oltianxiang:'天香',
			oltianxiang_info:'当你受到伤害时，你可以弃置一张红桃牌，防止此伤害并选择一名其他角色，然后你选择一项：1.令其受到伤害来源对其造成的1点伤害，然后摸X张牌（X为其已损失体力值且至多为5）；2.令其失去1点体力，然后获得你弃置的牌。',
			olhongyan:'红颜',
			olhongyan_info:'锁定技，你的黑桃牌的花色视为红桃。若你的装备区内有红桃牌，则你的手牌上限基数视为体力上限。',
			piaoling:'飘零',
			piaoling_info:'结束阶段，你可以进行判定。若判定结果为红桃，则你选择一项：1.将此牌交给一名角色。若你交给了自己，则你弃置一张牌。2.将此牌置于牌堆顶。',
			decadelihuo:'疠火',
			decadelihuo2:'疠火',
			decadelihuo3:'疠火',
			decadelihuo_info:'当你声明使用普【杀】后，你可以将此【杀】改为火【杀】。当你使用火【杀】选择目标时，可以选择一个额外目标。你使用的火【杀】结算完成后，若此【杀】的目标数大于1且你因此【杀】造成过伤害，则你失去1点体力。',
			decadechunlao:'醇醪',
			decadechunlao2:'醇醪',
			decadechunlao_info:'你可以对其他角色使用【酒（使用方法②）】。当你需要使用【酒】时，若你的武将牌未横置，则你可以将武将牌横置，然后视为使用【酒】。当你受到或造成伤害后，若伤害值大于1且你的武将牌横置，则你可以重置武将牌。',
			rejuece:'绝策',
			rejuece_info:'结束阶段，你可以对一名本回合内失去过牌的角色造成1点伤害。',
			remieji:'灭计',
			remieji_info:'出牌阶段限一次，你可以将一张黑色锦囊牌置于牌堆顶，然后令一名有牌的其他角色选择一项：交给你一张锦囊牌，或依次弃置两张非锦囊牌。',
			re_manchong:'界满宠',
			re_manchong_prefix:'界',
			rejunxing:'峻刑',
			rejunxing_info:'出牌阶段限一次，你可以弃置任意张手牌并选择一名其他角色。该角色选择一项：1.弃置X张牌并失去1点体力。2.翻面并摸X张牌。（X为你弃置的牌数）',
			re_gongsunzan:'界公孙瓒',
			re_gongsunzan_prefix:'界',
			reqiaomeng:'趫猛',
			reqiaomeng_info:'当你使用【杀】对一名角色造成伤害后，你可以弃置该角色区域内的一张牌。若此牌为坐骑牌，则你于此弃置事件结算结束后获得此牌。',
			ol_dengai:'界邓艾',
			ol_dengai_prefix:'界',
			oltuntian:'屯田',
			olzaoxian:'凿险',
			oltuntian_info:'①当你于回合外失去牌后，或于回合内因弃置而失去【杀】后，你可以判定。若判定结果不为♥，则你将此牌置于你的武将牌上，称为“田”。②你计算与其他角色的距离时-X（X为你武将牌上“田”的数目）。',
			olzaoxian_info:'觉醒技，准备阶段，若你武将牌上“田”的数量达到3张或更多，则你减1点体力上限，并获得技能〖急袭〗。你于当前回合结束后进行一个额外的回合。',
			re_sunxiu:'界孙休',
			re_sunxiu_prefix:'界',
			re_caoxiu:'界曹休',
			re_caoxiu_prefix:'界',
			xin_lingtong:'界凌统',
			xin_lingtong_prefix:'界',
			decadexuanfeng:'旋风',
			decadexuanfeng_info:'当你于弃牌阶段弃置过至少两张牌，或当你失去装备区里的牌后，若场上没有处于濒死状态的角色，则你可以弃置至多两名其他角色的共计两张牌。若此时处于你的回合内，你可以对其中一名目标角色造成1点伤害。',
			yongjin:'勇进',
			yongjin_info:'限定技，出牌阶段，你可以依次移动场上的至多三张不同的装备牌。',
			xin_liubiao:'界刘表',
			xin_liubiao_prefix:'界',
			decadezishou:'自守',
			decadezishou_zhiheng:'自守',
			decadezishou_info:'摸牌阶段，你可以多摸X张牌（X为存活势力数）；然后本回合你对其他角色造成伤害时，防止此伤害。结束阶段，若你本回合没有使用牌指定其他角色为目标，你可以弃置任意张花色不同的手牌，然后摸等量的牌。',
			decadezongshi:'宗室',
			decadezongshi_info:'锁定技，你的手牌上限+X（X为存活势力数）。你的回合外，若你的手牌数大于等于手牌上限，则当你成为延时类锦囊牌或无颜色的牌的目标后，你令此牌对你无效。',
			re_fazheng:'界法正',
			re_fazheng_prefix:'界',
			reenyuan:'恩怨',
			reenyuan1:'恩怨',
			reenyuan2:'恩怨',
			reenyuan_info:'当你获得一名其他角色的至少两张牌后，你可以令其摸一张牌。当你受到1点伤害后，你可令伤害来源选择一项：①失去1点体力。②交给你一张手牌。若此牌不为♥，则你摸一张牌。',
			rexuanhuo:'眩惑',
			rexuanhuo_info:'摸牌阶段结束时，你可以交给一名其他角色两张手牌，然后该角色选择一项：1. 视为对你选择的另一名角色使用任意一种【杀】或【决斗】，2. 交给你所有手牌。',
			re_fuhuanghou:'界伏寿',
			re_fuhuanghou_prefix:'界',
			reqiuyuan:'求援',
			reqiuyuan_info:'当你成为【杀】的目标时，你可选择另一名其他角色。除非该角色交给你一张除【杀】以外的基本牌，否则其也成为此【杀】的目标且该角色不能响应此【杀】。',
			rezhuikong:'惴恐',
			rezhuikong_info:'其他角色的回合开始时，若你已受伤，你可与其拼点：若你赢，本回合该角色只能对自己使用牌；若你没赢，你获得其拼点的牌，然后其视为对你使用一张【杀】。',
			re_gongsunyuan:'界公孙渊',
			re_gongsunyuan_prefix:'界',
			rehuaiyi:'怀异',
			rehuaiyi_info:'出牌阶段限一次，你可以展示所有手牌，若这些牌的颜色：全部相同，你摸一张牌，并将此技能于本阶段内改为“限两次”，然后终止此技能的结算流程；不全部相同，则你选择一种颜色并弃置该颜色的所有手牌，然后你可以获得至多X名角色的各一张牌（X为你以此法弃置的手牌数）。若你以此法得到的牌不少于两张，则你失去1点体力。',
			re_caozhen:'界曹真',
			re_caozhen_prefix:'界',
			residi:'司敌',
			residi_push:'司敌',
			residi2:'司敌',
			residi3:'司敌',
			residi_info:'结束阶段，你可以将一张非基本牌置于武将牌上，称为“司”。其他角色的出牌阶段开始时，你可以移去一张“司”。若如此做，其本阶段内不能使用或打出与“司”颜色相同的牌。此阶段结束时，若其于此阶段内未使用过：【杀】，你视为对其使用一张【杀】。锦囊牌，你摸两张牌。',
			gz_re_xushu:'徐庶',
			re_zhangchunhua:'界张春华',
			re_zhangchunhua_prefix:'界',
			xin_handang:'界韩当',
			xin_handang_prefix:'界',
			xingongji:'弓骑',
			xingongji2:'弓骑',
			xingongji_info:'出牌阶段限一次，你可以弃置一张牌，然后你的攻击范围视为无限且使用与此牌花色相同的【杀】无次数限制直到回合结束。若你以此法弃置的牌为装备牌，则你可以弃置一名其他角色的一张牌。',
			xinjiefan:'解烦',
			xinjiefan_info:'限定技，出牌阶段，你可以选择一名角色，令攻击范围内含有该角色的所有角色依次选择一项：1.弃置一张武器牌；2.令其摸一张牌。然后若游戏轮数为1，则你于此回合结束时恢复此技能。',
			gzquanji:'权计',
			gzquanji_info:'每回合每项各限一次。当你受到伤害后或造成伤害后，你可以摸一张牌，然后你将一张牌置于武将牌上，称为“权”；你的手牌上限+X（X为“权”的数量）。',
			gzpaiyi:'排异',
			gzpaiyi_backup:'排异',
			gzpaiyi_info:'出牌阶段限一次。你可以移去一张“权”并选择一名角色。令其摸X张牌（X为你的“权”数且至多为7）。然后若其手牌数大于你，则你对其造成1点伤害。',
			ol_zhurong:'界祝融',
			ol_zhurong_prefix:'界',
			changbiao:'长标',
			changbiao_info:'出牌阶段限一次，你可以将任意张手牌当做【杀】使用（无距离限制）。若你因此【杀】对目标角色造成过伤害，则你于出牌阶段结束时摸X张牌（X为此【杀】对应的实体牌数量）。',
			re_zhoucang:'界周仓',
			re_zhoucang_prefix:'界',
			rezhongyong:'忠勇',
			rezhongyong_info:'当你使用【杀】后，你可以将此【杀】以及目标角色使用的【闪】交给一名其他角色，若其获得的牌中有红色，则其可以对你攻击范围内的角色使用一张【杀】。若其获得的牌中有黑色，其摸一张牌。',
			ollihuo:'疠火',
			ollihuo2:'疠火',
			ollihuo3:'疠火',
			ollihuo4:'疠火',
			ollihuo_info:'你使用普通的【杀】可以改为火【杀】，若此【杀】造成过伤害，你失去1点体力；你使用火【杀】可以多选择一个目标。你每回合使用的第一张牌如果是【杀】，则此【杀】结算完毕后可置于你的武将牌上。',
			xinjiangchi:'将驰',
			xinjiangchi_info:'出牌阶段开始时，你可选择：①摸一张牌。②摸两张牌，然后本回合内不能使用或打出【杀】。③弃置一张牌，然后本回合内可以多使用一张【杀】，且使用【杀】无距离限制。',
			redingpin:'定品',
			redingpin_info:'出牌阶段，你可以弃置一张本回合未使用过/弃置过的类型的牌并选择一名角色。其进行判定，若结果为：黑色，其摸X张牌（X为其体力值且至多为3）且本回合内不能再成为〖定品〗的目标；红桃，你令此次弃置的牌不计入〖定品〗弃置牌合法性的检测；方片，你将武将牌翻面。',
			refaen:'法恩',
			refaen_info:'一名角色翻面或横置后，你可令其摸一张牌。',
			dcfaen:'法恩',
			dcfaen_info:'一名角色翻至正面或横置后，你可令其摸一张牌。',
			reshizhi:'矢志',
			reshizhi_info:'锁定技，若你的体力值为1，则你的【闪】视为【杀】，且当你使用对应的实体牌为一张【闪】的非转化普通杀造成伤害后，你回复1点体力。',
			re_guotufengji:'界郭图逢纪',
			re_guotufengji_prefix:'界',
			rejigong:'急攻',
			rejigong2:'急攻',
			rejigong_info:'出牌阶段开始时，你可以摸至多三张牌。若如此做，你本回合的手牌上限基数改为X，且弃牌阶段结束时，若X不小于Y，则你回复1点体力。（X为你本回合内造成的伤害值之和，Y为你本回合内因〖急攻〗摸牌而得到的牌的数量总和）',
			ol_jiangwei:'界姜维',
			ol_jiangwei_prefix:'界',
			oltiaoxin:'挑衅',
			oltiaoxin_info:'出牌阶段限一次，你可以选择一名攻击范围内包含你的角色。然后除非该角色对你使用一张【杀】且此【杀】对你造成伤害，否则你弃置其一张牌，然后将此技能于此出牌阶段内修改为出牌阶段限两次。',
			olzhiji:'志继',
			olzhiji_info:'觉醒技，准备阶段或结束阶段，若你没有手牌，你回复1点体力或摸两张牌，然后减1点体力上限，获得〖观星〗。',
			decadezhenjun:'镇军',
			decadezhenjun_info:'准备阶段或结束阶段，你可以弃置一名角色X张牌（X为其手牌数减体力值且至少为1），若其中没有装备牌，你选择一项：1.你弃一张牌；2.该角色摸等量的牌。',
			decadejingce:'精策',
			decadejingce_info:'结束阶段，若你本回合使用过的牌数不小于你的体力值，则你可执行一个摸牌阶段或出牌阶段；若这些牌包含的花色数也不小于你的体力值，则你将“或”改为“并”。',
			re_guanping:'界关平',
			re_guanping_prefix:'界',
			relongyin:'龙吟',
			relongyin_info:'当一名角色于其出牌阶段内使用【杀】时，你可弃置一张牌令此【杀】不计入出牌阶段使用次数。若此【杀】为红色，则你摸一张牌；若你以此法弃置的牌与此【杀】点数相同，则你重置“竭忠”。',
			jiezhong:'竭忠',
			jiezhong_info:'限定技，出牌阶段开始时，你可以将手牌补至体力上限（至多摸五张）。',
			re_caifuren:'界蔡夫人',
			re_caifuren_prefix:'界',
			reqieting:'窃听',
			reqieting_info:'其他角色的回合结束时，若其本回合内未造成过伤害，则你可将其装备区内的一张牌置于你的装备区内；若其本回合内未对其他角色使用过牌，则你可摸一张牌。',
			rexianzhou:'献州',
			rexianzhou_info:'限定技。出牌阶段，你可将装备区内的所有牌交给一名其他角色。你回复X点体力，然后对其攻击范围内的至多X名角色各造成1点伤害（X为你以此法给出的牌数）。',
			xin_zhonghui:'界钟会',
			xin_zhonghui_prefix:'界',
			xinquanji:'权计',
			xinquanji_info:'①当你受到1点伤害后，或其他角色不因你的赠予或交给而得到你的牌后，你可以摸一张牌，然后将一张手牌置于武将牌上，称为“权”。②你的手牌上限+X（X为“权”的数量）。',
			xinzili:'自立',
			xinzili_info:'觉醒技。准备阶段，若你的“权”数大于2，则你回复1点体力并摸两张牌，减1点体力上限并获得〖排异〗。',
			xinpaiyi:'排异',
			xinpaiyi_backup:'排异',
			xinpaiyi_info:'出牌阶段每项各限一次，你可移去一张“权”并选择一项：①令一名角色摸X张牌。②对至多X名角色各造成1点伤害。（X为“权”数）',
			re_guyong:'界顾雍',
			re_guyong_prefix:'界',
			reshenxing:'慎行',
			reshenxing_info:'出牌阶段，你可以弃置X张牌（X为你本阶段内发动过〖慎行〗的次数且至少为0，至多为2），然后摸一张牌。',
			rebingyi:'秉壹',
			rebingyi_info:'结束阶段，你可展示所有手牌。若这些牌：颜色均相同，则你可以令至多X名角色各摸一张牌（X为你的手牌数）；点数均相同，则你摸一张牌。',
			re_jiaxu:'界贾诩',
			re_jiaxu_prefix:'界',
			rewansha:'完杀',
			rewansha_info:'锁定技。①你的回合内，不处于濒死状态的其他角色不能使用【桃】。②当有角色于你的回合内进入濒死状态时，你令其以外的所有其他角色的非锁定技失效直到此濒死状态结算结束。',
			reluanwu:'乱武',
			reluanwu_info:'限定技，出牌阶段，你可令所有其他角色依次选择一项：①对距离最近（或之一）的角色使用一张【杀】；②失去1点体力。结算完成后，你可视为使用一张【杀】（无距离限制）。',
			reweimu:'帷幕',
			reweimu_info:'锁定技。①你不能成为黑色锦囊牌的目标。②当你于回合内受到伤害时，你防止此伤害并摸2X张牌（X为伤害值）。',
			ol_lusu:'界鲁肃',
			ol_lusu_prefix:'界',
			olhaoshi:'好施',
			olhaoshi_info:'摸牌阶段开始时，你可以多摸两张牌。然后摸牌阶段结束时，若你的手牌数大于5，则你将手牌数的一半（向下取整）交给一名手牌最少其他角色并获得如下效果直到你下回合开始：当你成为【杀】或普通锦囊牌的目标后，其可以交给你一张手牌。',
			oldimeng:'缔盟',
			oldimeng_info:'出牌阶段限一次，你可令两名满足X≤Y的其他角色交换手牌并获得如下效果：出牌阶段结束时，你弃置X张牌（X为这两名角色手牌数之差的绝对值；Y为你的牌数）。',

			rejijiang:'激将',
			rejijiang1:'激将',
			rejijiang2:'激将',
			rejijiang_info:'主公技。①当你需要使用或打出【杀】时，你可以令其他蜀势力角色依次选择是否打出一张【杀】。若有角色响应，则你视为使用或打出了此【杀】。②每回合限一次。当有蜀势力角色于回合外使用或打出【杀】时，其可以令你摸一张牌。',
			xin_yufan:'界虞翻',
			xin_yufan_prefix:'界',
			xinzongxuan:'纵玄',
			xinzongxuan_info:'当你的牌因弃置而进入弃牌堆后，你可将其中的任意张牌置于牌堆顶。若剩余的牌中有锦囊牌，则你可以令一名其他角色获得其中的一张。',
			xinzhiyan:'直言',
			xinzhiyan_info:'结束阶段开始时，你可令一名角色摸一张牌（正面朝上移动）。若此牌为基本牌，则你摸一张牌。若此牌为装备牌，则其回复1点体力并使用此装备牌。',
			re_xiahoushi:'界夏侯氏',
			re_xiahoushi_prefix:'界',
			reqiaoshi:'樵拾',
			reqiaoshi_info:'其他角色的结束阶段开始时，若你的手牌数与其相等，则你可以与其各摸一张牌。若这两张牌花色相同，则你可以重复此步骤。',
			reyanyu:'燕语',
			reyanyu2:'燕语',
			reyanyu_info:'①出牌阶段，你可以重铸【杀】。②出牌阶段结束时，你可以令一名其他男性角色摸X张牌（X为你本阶段内发动过〖燕语①〗的次数且至多为3）。',
			rehujia:'护驾',
			rehujia_info:'主公技。①当你需要使用或打出一张【闪】时，你可以令其他魏势力角色选择是否打出一张【闪】。若有角色响应，则你视为使用或打出了一张【闪】。②每回合限一次。当有魏势力角色于回合外使用或打出【闪】时，其可以令你摸一张牌。',
			ol_xuhuang:'界徐晃',
			ol_xuhuang_prefix:'界',
			olduanliang:'断粮',
			olduanliang_info:'你可以将一张黑色非锦囊牌当做【兵粮寸断】使用。若你于当前回合内未造成过伤害，则你使用【兵粮寸断】无距离限制。',
			oljiezi:'截辎',
			oljiezi_info:'①当有角色跳过摸牌阶段后，你可选择一名角色。若该角色：手牌数为全场最少且没有“辎”，则其获得一枚“辎”。否则其摸一张牌。②一名角色的摸牌阶段结束时，若其有“辎”，则你移去其“辎”，然后令其获得一个额外的摸牌阶段。',
			re_madai:'界马岱',
			re_madai_prefix:'界',
			reqianxi:'潜袭',
			reqianxi_info:'准备阶段开始时，你可摸一张牌，然后弃置一张牌并选择一名距离为1的其他角色。该角色于本回合内：{不能使用或打出与此牌颜色相同的牌，且其装备区内与此牌颜色相同的防具牌无效，且当其回复体力时，你摸两张牌。}',
			re_guohuanghou:'界郭皇后',
			re_guohuanghou_prefix:'界',
			rejiaozhao:'矫诏',
			rejiaozhao_info:'出牌阶段限一次。你可以展示一张手牌，并令一名距离你最近的角色选择一种基本牌或普通锦囊牌的牌名。你可将此牌当做其声明的牌使用直到此阶段结束（你不是此牌的合法目标）。',
			rejiaozhao_lv2:'矫诏·升级 Lv.1',
			rejiaozhao_lv2_info:'出牌阶段限一次。你可以将一张手牌当做一张基本牌或普通锦囊牌使用（你不是此牌的合法目标）。',
			rejiaozhao_lv3:'矫诏·升级 Lv.2',
			rejiaozhao_lv3_info:'出牌阶段每种类型各限一次。你可以将一张手牌当做一张基本牌或普通锦囊牌使用。',
			redanxin:'殚心',
			redanxin_info:'当你受到伤害后，你可以摸一张牌并升级〖矫诏〗。',
			xin_wuguotai:'界吴国太',
			xin_wuguotai_prefix:'界',
			xinganlu:'甘露',
			xinganlu_info:'出牌阶段限一次。你可以令两名角色交换装备区内的牌，然后若这两名角色装备区内牌数差的绝对值大于你已损失的体力值，则你弃置两张手牌。',
			xinbuyi:'补益',
			xinbuyi_info:'一名角色进入濒死状态时，你可展示其一张手牌。若此牌不为基本牌，则其弃置此牌并回复1点体力。若其以此法弃置的牌移动前为其的唯一一张手牌，则其摸一张牌。',
			decadexianzhen:'陷阵',
			decadexianzhen2:'陷阵',
			decadexianzhen_info:'每回合限一次。出牌阶段，你可以和一名其他角色拼点。若你赢：本回合你无视该角色的防具，且对其使用牌没有次数和距离限制，且本回合对其使用牌造成伤害时，此伤害+1（每种牌名每回合限一次）；若你没赢：你本回合内不能使用【杀】，且【杀】不计入手牌上限。',
			decadejinjiu:'禁酒',
			decadejinjiu_info:'锁定技。你的【酒】的牌名均视为【杀】且点数视为K；你的回合内，其他角色不能使用【酒】。',
			dc_xushu:'新杀徐庶',
			dc_xushu_prefix:'新杀',
			rezhuhai:'诛害',
			rezhuhai_info:'其他角色的回合结束时，若其本回合内造成过伤害，则你可以选择一项：⒈将一张手牌当做【杀】对其使用。⒉视为对其使用一张【过河拆桥】。',
			xsqianxin:'潜心',
			xsqianxin_info:'觉醒技。当你造成伤害后，若你已受伤，则你减1点体力上限并获得〖荐言〗。',
			rejianyan:'荐言',
			rejianyan_info:'出牌阶段每项各限一次。你可选择一种颜色或一种牌的类别，然后系统从牌堆中检索出一张满足该条件的牌并展示之。然后你将此牌交给一名男性角色或Key势力角色。',
			re_zhanghe:'界张郃',
			re_zhanghe_prefix:'界',
			reqiaobian:'巧变',
			reqiaobian_info:'①游戏开始时，你获得两枚“变”。②判定阶段开始时，你可弃置一张牌或一枚“变”并跳过此阶段。③摸牌阶段开始时，你可弃置一张牌或一枚“变”并跳过此阶段，然后可以获得至多两名其他角色的各一张手牌。④出牌阶段开始时，你可弃置一张牌或一枚“变”并跳过此阶段，然后你可以移动场上的一张牌。⑤弃牌阶段开始时，你可弃置一张牌或一枚“变”并跳过此阶段。⑥结束阶段，若你的〖巧变⑥〗记录中不包含你的手牌数，则你获得一枚“变”并记录你的手牌数。',
			olbeige:'悲歌',
			olbeige_info:'当有角色受到渠道为【杀】的伤害后，若你有牌，你可令其进行判定。然后你可弃置一张牌，根据判定结果执行以下的一个选项：♥，其回复1点体力；♦，其摸两张牌；♣，伤害来源弃置两张牌️；♠，伤害来源将武将牌翻面。若你弃置的牌与判定结果：点数相同，则你获得你弃置的牌；花色相同，则你获得判定牌。',
			dc_bulianshi:'界步练师',
			dc_bulianshi_prefix:'界',
			dcanxu:'安恤',
			dcanxu_info:'出牌阶段限一次，你可以选择两名手牌数不同的其他角色，令其中手牌少的角色获得手牌多的角色的一张手牌并展示之。然后若此牌不为黑桃，则你摸一张牌；若这两名角色手牌数相等，则你回复1点体力。',
			dczhuiyi:'追忆',
			dczhuiyi_info:'当你死亡时，你可以令一名不为击杀者的其他角色摸X张牌（X为存活角色数），然后其回复1点体力。',
			re_jushou:'界沮授',
			re_jushou_prefix:'界',
			dcshibei:'矢北',
			dcshibei_info:'锁定技，当你于一回合内第一次受到伤害后，你回复1点体力；当你于一回合内第二次受到伤害后，你失去1点体力。',
			dcjianying:'渐营',
			dcjianying_info:'当你使用与你使用的上一张牌点数或花色相同的牌时，你可以摸一张牌。',
			re_duji:'界杜畿',
			re_duji_prefix:'界',
			reandong:'安东',
			reandong_info:'当你受到其他角色造成的伤害时，你可以令伤害来源选择一项：⒈防止此伤害。然后其♥牌不计入本回合的手牌上限；⒉你观看其手牌并获得其中的所有♥牌，若其没有手牌，则你下次发动〖安东〗时改为自行选择。',
			reyingshi:'应势',
			reyingshi_info:'出牌阶段开始时，你可以展示一张手牌，选择一名角色A和一名其他角色B。A可以对B使用一张【杀】，然后获得你展示的牌。若A因此【杀】造成过伤害，则A获得牌堆中与展示牌花色点数相同的其他牌。',
			dcqiaomeng:'趫猛',
			dcqiaomeng_info:'当你使用黑色牌指定第一个目标后，你可以弃置目标角色中一名其他角色的一张牌。若你以此法弃置的牌为：装备牌，你获得此牌；锦囊牌，你令此牌不可被响应。',
			dc_gongsunzan:'新杀公孙瓒',
			dc_gongsunzan_prefix:'新杀',
			re_liuchen:'界刘谌',
			re_liuchen_prefix:'界',
			rezhanjue:'战绝',
			rezhanjue_effect:'战绝',
			rezhanjue_info:'出牌阶段，若你本阶段内因〖战绝〗得到过的牌数小于3，则你可以将所有不具有“勤王”标记的手牌当做【决斗】使用。此【决斗】使用结算结束后，你摸一张牌。然后所有因此【决斗】受到过伤害的角色也各摸一张牌。',
			reqinwang:'勤王',
			reqinwang_info:'主公技。出牌阶段限一次，你可以令所有其他蜀势力角色依次选择是否交给你一张【杀】，然后你可以令选择是的角色摸一张牌。',
			shizhan:'势斩',
			shizhan_info:'出牌阶段限两次，你可以选择一名其他角色。该角色视为对你使用一张【决斗】。',
			ol_xunyu:'界荀彧',
			ol_xunyu_prefix:'界',
			oljieming:'节命',
			oljieming_info:'当你受到1点伤害后或死亡时，你可令一名角色摸X张牌。然后若其手牌数大于X，则其将手牌弃置至X张（X为其体力上限且至多为5）。',
			re_liufeng:'界刘封',
			re_liufeng_prefix:'界',
			rexiansi:'陷嗣',
			rexiansi2:'陷嗣',
			rexiansi_info:'①准备阶段开始时，你可以将一至两名角色的各一张牌置于你的武将牌上，称为“逆”。②当一名角色需要对你使用【杀】时，其可以移去两张“逆”，然后视为对你使用一张【杀】。③若你的“逆”数大于体力值，则你可以移去一张“逆”并视为使用一张【杀】。',
			re_sp_taishici:'界SP太史慈',
			re_sp_taishici_prefix:'界SP',
			rejixu:"击虚",
			rejixu_info:"出牌阶段限一次。若你有手牌，则你可以选择至多X名角色，令这些角色猜测你的手牌区中是否有【杀】。若你：有【杀】，则你本阶段使用【杀】的次数上限+Y，且当你于本阶段内使用【杀】指定目标后，你可以令这Y名角色也成为此【杀】的目标；没有【杀】，则你弃置这Y名角色的各一张牌。然后你摸Y张牌（X为你的体力值，Y为这些角色中猜错的角色数）。",
			ol_dianwei:'界典韦',
			ol_dianwei_prefix:'界',
			olqiangxi:'强袭',
			olqiangxi_info:'出牌阶段限两次。你可以弃置一张武器牌或受到1点无来源伤害，然后对一名本回合内未成为过〖强袭〗目标的其他角色造成1点伤害。',
			olningwu:'狞恶',
			olningwu_info:'锁定技。当一名角色A于一回合内第二次受到伤害后，若A或伤害来源为你，则你摸一张牌，然后弃置其装备区或判定区内的一张牌。',
			re_zhuhuan:'界朱桓',
			re_zhuhuan_prefix:'界',
			refenli:'奋励',
			refenli_info:'若你的手牌数为全场最多，你可以跳过判定阶段和摸牌阶段；若你的体力值为全场最多，你可以跳过出牌阶段；若你的装备区里有牌且数量为全场最多，你可以跳过弃牌阶段。',
			//破界石不值钱了 就逮着免费突破硬削是吧
			repingkou:'平寇',
			repingkou_info:'回合结束时，你可以对至多X名其他角色各造成1点伤害（X为你本回合跳过的阶段数）。若你选择的角色数小于X，则你可以弃置其中一名角色装备区内的一张牌。',
			dc_liru:'界李儒',
			dc_liru_prefix:'界',
			dcmieji:'灭计',
			dcmieji_info:'出牌阶段限一次，你可以展示一张武器牌或黑色锦囊牌。你将此牌置于牌堆顶，然后令一名有手牌的其他角色选择一项：⒈弃置一张锦囊牌；⒉依次弃置两张非锦囊牌。',
			dcfencheng:'焚城',
			dcfencheng_info:'限定技。出牌阶段，你可以指定一名其他角色，令从其开始的其他角色依次选择一项：⒈弃置至少X张牌（X为上一名角色弃置的牌数+1）。⒉你对其造成2点伤害。',
			oljiang:'激昂',
			oljiang_info:'①当你使用【决斗】或红色【杀】指定第一个目标后，或成为【决斗】或红色【杀】的目标后，你可以摸一张牌。②当有【决斗】或红色【杀】于每回合内首次因弃置而进入弃牌堆后，你可以失去1点体力并获得这些牌。',
			re_xunyou:'界荀攸',
			re_xunyou_prefix:'界',
			reqice:'奇策',
			reqice_info:'出牌阶段限X次（X为你的“奇策”数+1），你可以将所有手牌当做任意一张普通锦囊牌使用。',
			rezhiyu:'智愚',
			rezhiyu_info:'当你受到伤害后，你可以摸一张牌，然后展示所有手牌，令伤害来源弃置一张手牌。若你展示的牌颜色均相同，你获得1枚“奇策”直到下回合结束且获得来源弃置的牌。',
			re_caiyong:'界蔡邕',
			re_caiyong_prefix:'界',
			rebizhuan:'辟撰',
			rebizhuan_bg:'书',
			rebizhuan_info:'①当你使用♠牌时，或成为其他角色使用♠牌的目标后，你可以将牌堆顶的一张牌置于武将牌上，称为“书”（你至多拥有四张“书”）。②你的手牌上限+X（X为“书”数）。',
			retongbo:'通博',
			retongbo_info:'摸牌阶段结束时，你可以用任意手牌交换等量“书”。然后若“书”数至少为4，你可以将四张“书”任意交给其他角色。若你交出的牌花色各不相同，你回复1点体力且“书”的上限+1（至多增加等同存活角色数的上限）。',
			re_chengong:'界陈宫',
			re_chengong_prefix:'界',
			remingce:'明策',
			remingce_info:'出牌阶段限一次。你可以将一张【杀】或装备牌交给一名其他角色，其选择一项：1.视为对你选择的另一名角色使用一张【杀】，且若此牌造成伤害，则执行选项2；2.你与其各摸一张牌。',
			re_sundeng:'界孙登',
			re_sundeng_prefix:'界',
			rekuangbi:'匡弼',
			rekuangbi_info:'出牌阶段开始时，你可以令一名其他角色将至多三张牌置于你的武将牌上直到此阶段结束。然后当你使用牌时，若你：有与此牌花色相同的“匡弼”牌，你移去其中一张并与其各摸一张牌；没有与此牌花色相同的“匡弼”牌，你随机移去一张“匡弼”牌并摸一张牌。',
			dc_chenqun:'界陈群',
			dc_chenqun_prefix:'界',
			repindi:'品第',
			repindi_info:'出牌阶段每名角色限一次。你可以弃置一张本阶段未以此法弃置过的类型的牌并选择一名角色，你选择一项：1.其摸X张牌；2.其弃置X张牌（X为你本回合发动〖品第〗的次数）。然后若其已受伤，你横置或重置。',
			re_mazhong:'界马忠',
			re_mazhong_prefix:'界',
			refuman:'抚蛮',
			refuman_info:'出牌阶段每名角色限一次。你可以弃置一张牌，令一名其他角色从弃牌堆中获得一张【杀】。然后其于其下个回合结束前使用或打出此牌时，你与其各摸一张牌。',
			re_guanzhang:'界关兴张苞',
			re_guanzhang_prefix:'界',
			retongxin:'同心',
			retongxin_info:'锁定技。你的攻击范围+2。',
			re_wenpin:'界文聘',
			re_wenpin_prefix:'界',
			rezhenwei:'镇卫',
			rezhenwei_info:'当一名其他角色成为【杀】或黑色锦囊牌的目标时，若该角色的体力值不大于你且此牌的目标角色数为1，你可以弃置一张牌并选择一项：1.摸一张牌，然后将此【杀】或黑色锦囊牌的目标转移给你；2.令此【杀】或黑色锦囊牌无效且将此【杀】或黑色锦囊牌置于使用者的武将牌上，然后当前回合结束后，使用者获得这些牌。',
			ol_huangzhong:'界黄忠',
			ol_huangzhong_prefix:'界',
			remoshi:'没矢',
			remoshi_info:'锁定技。①当你使用【杀】对目标角色造成伤害后，若其装备区里有防具牌或坐骑牌，你将此【杀】对应的实体牌置于其武将牌上。②当有“没矢”牌的角色失去防具牌或坐骑牌后，你获得其“没矢”牌。',
			dc_caozhi:'界曹植',
			dc_caozhi_prefix:'界',
			dcjiushi:'酒诗',
			dcjiushi_info:'①当你需要使用【酒】时，若你的武将牌正面向上，你可以翻面，视为使用一张【酒】。②当你受到伤害后，若你的武将牌于受到伤害时背面向上，你可以翻面。③当你使用【酒】后，你使用【杀】的次数上限+1直到你的下个回合结束。',
			olhuoji:'火计',
			olhuoji_info:'①你可以将一张红色牌当【火攻】使用。②你使用【火攻】的作用效果改为“目标角色随机展示一张手牌A，然后你可以弃置一张与A颜色相同的牌，对目标造成1点火属性伤害”。',
			olkanpo:'看破',
			olkanpo_info:'①你可以将一张黑色牌当【无懈可击】使用。②你使用的【无懈可击】不可被响应。',
			xinwangxi:'忘隙',
			xinwangxi_info:'当你对其他角色造成1点伤害后，或受到其他角色造成的1点伤害后，你可以摸两张牌，然后交给其一张牌。',
			ol_yanwen:'界颜良文丑',
			ol_yanwen_prefix:'界',
			olshuangxiong:'双雄',
			olshuangxiong_info:'①摸牌阶段结束时，你可以弃置一张牌。若如此做，你本回合内可以将一张与此牌颜色不同的牌当做【决斗】使用。②结束阶段，你从弃牌堆中获得本回合内对你造成伤害的所有牌。',
			re_zhuzhi:'界朱治',
			re_zhuzhi_prefix:'界',
			reanguo:'安国',
			reanguo_info:'出牌阶段限一次。你可以选择一名其他角色，若其：手牌数为全场最少，其摸一张牌；体力值为全场最低，其回复1点体力；装备区内牌数为全场最少，其随机使用一张装备牌。然后若该角色有未执行的效果且你满足条件，你执行之。若你与其执行了全部分支，你可以重铸任意张牌。',
			dcyicong:'义从',
			dcyicong_info:'锁定技。①你至其他角色的距离-1。②若你已损失的体力值不小于2，则其他角色至你的距离+1。',
			re_zhangsong:'界张松',
			re_zhangsong_prefix:'界',
			rexiantu:'献图',
			rexiantu_info:'其他角色的出牌阶段开始时，你可以摸两张牌，然后将两张牌交给该角色。然后此阶段结束时，若其于此阶段没有造成过伤害，你失去1点体力。',
			re_jsp_huangyueying:'界SP黄月英',
			re_jsp_huangyueying_prefix:'界SP',
			rejiqiao:'机巧',
			rejiqiao_info:'出牌阶段开始时，你可以弃置任意张牌，然后亮出牌堆顶X张牌（X为你以此法弃置的牌数与其中装备牌数之和），你获得其中所有非装备牌。',
			relinglong:'玲珑',
			relinglong_info:'锁定技。若你的装备区：有空置的防具栏，你视为拥有〖八卦阵〗；有空置的两种坐骑栏，你的手牌上限+2；有空置的宝物栏，你视为拥有〖奇才〗；以上均满足：你使用的【杀】或普通锦囊牌不可被响应。',
			ol_zhangzhang:'界张昭张纮',
			ol_zhangzhang_prefix:'界',
			olzhijian:'直谏',
			olzhijian_info:'出牌阶段，你可以将一张装备牌置于其他角色的装备区（可替换原装备），然后摸一张牌。',
			olguzheng:'固政',
			olguzheng_info:'每阶段限一次。当其他角色的至少两张牌因弃置而进入弃牌堆后，你可以令其获得其中一张牌，然后你可以获得剩余的牌。',
			re_caochong:'界曹冲',
			re_caochong_prefix:'界',
			rechengxiang:'称象',
			rechengxiang_info:'当你受到伤害后，你可以亮出牌堆顶的四张牌。然后获得其中任意数量点数之和不大于13的牌。若你得到的牌点数之和为13，你复原武将牌。',
			re_caorui:'界曹叡',
			re_caorui_prefix:'界',
			remingjian:'明鉴',
			remingjian_info:'出牌阶段限一次。你可以将所有手牌交给一名其他角色，然后该角色于其下个回合获得如下效果：1.手牌上限与使用【杀】的次数上限+1；2.当该角色首次造成伤害后，其可以令你发动一次〖恢拓〗。',
			rexingshuai:'兴衰',
			rexingshuai_info:'主公技，限定技。当你进入濒死状态时，你可令其他魏势力角色依次选择是否令你回复1点体力。然后这些角色依次受到1点伤害。有〖明鉴〗效果的角色于其回合内杀死角色后，你重置〖兴衰〗。',
			xin_zhangliang:'界张梁',
			xin_zhangliang_prefix:'界',
			rejijun:'集军',
			rejijun_info:'当你使用目标角色含有自己的牌结算完毕后，你可以进行一次判定并将判定牌置于武将牌上，称为“方”。',
			refangtong:'方统',
			refangtong_info:'结束阶段，你可以将一张手牌置于武将牌上，称为“方”。若如此做，你可以移去任意张“方”并对一名其他角色造成1点雷属性伤害（若你移去的“方”的点数和大于36，则改为造成3点雷属性伤害）。',
			re_simalang:'界司马朗',
			re_simalang_prefix:'界',
			requji:'去疾',
			requji_info:'出牌阶段限一次，你可以弃置至多X张牌并令等量名角色回复1点体力，然后仍处于受伤状态的目标角色摸一张牌，若你以此法弃置了黑色牌，你失去1点体力（X为你已损失的体力值）。',
			rejunbing:'郡兵',
			rejunbing_info:'一名角色的结束阶段，若其手牌数小于其体力值，其可以摸一张牌并将所有手牌交给你，然后你可以交给其等量的牌。',
			re_zhugedan:'界诸葛诞',
			re_zhugedan_prefix:'界',
			regongao:'功獒',
			regongao_info:'锁定技。一名其他角色首次进入濒死状态时，你增加1点体力上限，然后回复1点体力。',
			rejuyi:'举义',
			rejuyi_info:'觉醒技。准备阶段，若你已受伤，且你的体力上限大于场上的存活角色数，你将手牌数摸至体力上限，然后获得技能〖崩坏〗和〖威重〗。',
			reweizhong:'威重',
			reweizhong_info:'锁定技。当你的体力上限增加或减少时，你摸两张牌。',
			re_zhongyao:'界钟繇',
			re_zhongyao_prefix:'界',
			rehuomo:'活墨',
			rehuomo_info:'每种牌名每回合限一次。当你需要使用一张基本牌时，你可以将一张黑色非基本牌置于牌堆顶，视为使用此基本牌。',
			zhoutai:'界周泰',
			zhoutai_prefix:'界',
			caoren:'界曹仁',
			caoren_prefix:'界',
			ollianhuan:'连环',
			ollianhuan_info:'你可以将一张♣牌当【铁索连环】使用或重铸。你使用【铁索连环】选择目标后，可以给此牌增加一个目标。',
			re_lidian:'界李典',
			gz_re_lidian:'李典',
			re_lidian_prefix:'界',
			re_xushu:'界徐庶',
			re_xushu_prefix:'界',

			refresh_standard:'界限突破·标',
			refresh_feng:'界限突破·风',
			refresh_huo:'界限突破·火',
			refresh_lin:'界限突破·林',
			refresh_shan:'界限突破·山',
			refresh_yijiang1:'界限突破·将1',
			refresh_yijiang2:'界限突破·将2',
			refresh_yijiang3:'界限突破·将3',
			refresh_yijiang4:'界限突破·将4',
			refresh_yijiang5:'界限突破·将5',
			refresh_yijiang6:'界限突破·原6',
			refresh_xinghuo:'界限突破·星火',
		},
	};
});
