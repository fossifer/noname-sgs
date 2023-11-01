'use strict';
game.import('character',function(lib,game,ui,get,ai,_status){
	return {
		name:'extra',
		connect:true,
		connectBanned:['shen_diaochan'],
		characterSort:{
			extra:{
				extra_feng:['shen_guanyu','shen_lvmeng'],
				extra_huo:['shen_zhugeliang','shen_zhouyu'],
				extra_lin:['shen_caocao','shen_lvbu'],
				extra_shan:['shen_zhaoyun','shen_simayi'],
				extra_yin:['shen_liubei','shen_luxun'],
				extra_lei:['shen_ganning','shen_zhangliao'],
				extra_key:['key_kagari','key_shiki','db_key_hina'],
				extra_decade:['shen_jiangwei','shen_machao','shen_zhangfei','shen_zhangjiao','shen_dengai'],
				extra_ol:['ol_zhangliao','shen_caopi','shen_zhenji','shen_sunquan'],
				extra_mobilezhi:['shen_guojia','shen_xunyu'],
				extra_mobilexin:['shen_taishici','shen_sunce'],
				extra_tw:['tw_shen_guanyu','tw_shen_lvmeng'],
				extra_offline:['shen_diaochan','boss_zhaoyun','shen_dianwei','le_shen_jiaxu'],
			},
		},
		character:{
			le_shen_jiaxu:['male','shen',4,['jxlianpo','jxzhaoluan'],['qun']],
			shen_dianwei:['male','shen',4,['juanjia','qiexie','cuijue'],['wei']],
			shen_dengai:['male','shen',4,['dctuoyu','dcxianjin','dcqijing'],['wei']],
			tw_shen_lvmeng:['male','shen',3,['twshelie','twgongxin'],['wu']],
			shen_zhangjiao:['male','shen',3,['yizhao','sijun','sanshou','tianjie'],['qun']],
			shen_zhangfei:['male','shen',4,['shencai','xunshi'],['shu']],
			tw_shen_guanyu:['male','shen',4,['twwushen','twwuhun'],['shu']],
			shen_machao:['male','shen',4,['shouli','hengwu'],['shu']],
			shen_sunquan:['male','shen',4,['junkyuheng','junkdili'],['wu']],
			shen_jiangwei:['male','shen',4,['jiufa','tianren','pingxiang'],['shu']],
			key_kagari:['female','shen',3,['kagari_zongsi'],['key']],
			key_shiki:['female','shen','3/5',['shiki_omusubi'],['key']],
			db_key_hina:['female','key',3,['hina_shenshi','hina_xingzhi'],['doublegroup:key:shen']],
			
			shen_sunce:['male','shen','1/6',['yingba','scfuhai','pinghe'],['wu']],
			shen_xunyu:['male','shen',3,['tianzuo','lingce','dinghan'],['wei','clan:颍川荀氏']],
			shen_taishici:['male','shen',4,['dulie','tspowei'],['wu']],
			shen_guojia:['male','shen',3,['reshuishi','stianyi','resghuishi'],['wei']],
			shen_diaochan:['female','shen',3,['meihun','huoxin'],['qun']],
			shen_guanyu:['male','shen',5,['new_wuhun','wushen'],['shu']],
			shen_zhaoyun:['male','shen',2,['xinjuejing','relonghun'],['shu']],
			shen_zhugeliang:['male','shen',3,['qixing','kuangfeng','dawu'],['shu']],
			shen_lvmeng:['male','shen',3,['shelie','gongxin'],['wu']],
			shen_zhouyu:['male','shen',4,['yeyan','qinyin'],['wu']],
			shen_simayi:['male','shen',4,['renjie','sbaiyin','lianpo'],['wei']],
			shen_caocao:['male','shen',3,['new_guixin','feiying'],['wei']],
			shen_lvbu:['male','shen',5,['baonu','wumou','ol_wuqian','ol_shenfen'],['qun']],
			
			shen_liubei:["male","shen",6,["nzry_longnu","nzry_jieying"],["shu"]],
			shen_luxun:["male","shen",4,["nzry_junlve","nzry_cuike","nzry_dinghuo"],["wu"]],
			shen_zhangliao:["male","shen",4,["drlt_duorui","drlt_zhiti"],["wei"]],
			shen_ganning:["male","shen","3/6",["drlt_poxi","drlt_jieying"],["wu"]],
			ol_zhangliao:['male','shen',4,['olduorui','olzhiti'],['wei']],
			shen_caopi:['male','shen',5,['chuyuan','dengji'],['wei']],
			shen_zhenji:['female','shen',3,['shenfu','qixian'],['wei']],
			boss_zhaoyun:['male','shen',1,['boss_juejing','xinlonghun','zhanjiang'],['shu']],
		},
		characterIntro:{
			shen_guanyu:'关羽，字云长。曾水淹七军、擒于禁、斩庞德、威震华夏，吓得曹操差点迁都躲避，但是东吴偷袭荆州，关羽兵败被害。后传说吕蒙因关羽之魂索命而死。',
			shen_lvmeng:'吕蒙，字子明，汝南富陂人，东吴名将，原有“吴下阿蒙”之贬称，后受孙权劝说，奋发读书，最终成就一代名将。',
			shen_zhouyu:'字公瑾，庐江舒县人。东汉末年名将。有姿貌、精音律，江东有“曲有误，周郎顾”之语。周瑜少与孙策交好，后孙策遇刺身亡，孙权继任。周瑜将兵赴丧，以中护军的身份与长史张昭共掌众事，建安十三年（208年），周瑜率东吴军与刘备军联合，在赤壁击败曹操。此战也奠定了三分天下的基础。',
			shen_zhugeliang:'字孔明、号卧龙，汉族，琅琊阳都人，三国时期蜀汉丞相、杰出的政治家、军事家、发明家、文学家。在世时被封为武乡侯，死后追谥忠武侯，后来东晋政权推崇诸葛亮军事才能，特追封他为武兴王。诸葛亮为匡扶蜀汉政权，呕心沥血、鞠躬尽瘁、死而后已。其代表作有《前出师表》、《后出师表》、《诫子书》等。曾发明木牛流马等，并改造连弩，可一弩十矢俱发。于234年在宝鸡五丈原逝世。',
		},
		characterReplace:{
			shen_zhangliao:['ol_zhangliao','shen_zhangliao'],
			shen_zhaoyun:['shen_zhaoyun','old_shen_zhaoyun','boss_zhaoyun'],
			shen_guanyu:['shen_guanyu','tw_shen_guanyu'],
			shen_sunquan:['shen_sunquan','junk_sunquan'],
			shen_lvmeng:['shen_lvmeng','tw_shen_lvmeng'],
			shen_machao:['shen_machao','ps_shen_machao'],
			shen_jiaxu:['le_shen_jiaxu','shen_jiaxu'],
		},
		characterFilter:{
			shen_diaochan:function(mode){
				return mode=='identity'||mode=='doudizhu'||mode=='single'||(mode=='versus'&&_status.mode!='standard'&&_status.mode!='three');
			},
			shen_dengai:function(mode){
				if(['boss','chess','tafang','stone'].contains(mode)) return false;
				if(mode=='versus') return _status.mode!='three';
				return true;
			},
			le_shen_jiaxu:function(mode){
				return mode=='identity'&&_status.mode!='purple';
			},
		},
		skill:{
			//神贾诩
			jxlianpo:{
				audio:2,
				trigger:{global:'dieAfter'},
				filter:function(event,player){
					if(lib.skill.jxlianpo.getMax().length<=1) return false;
					return event.source&&event.source.isIn();
				},
				forced:true,
				logTarget:'source',
				global:'jxlianpo_global',
				getMax:()=>{
					const map={
						zhu:game.countPlayer(current=>{
							const identity=current.identity;
							let num=0;
							if(identity=='zhu'||identity=='zhong'||identity=='mingzhong') num++;
							num+=current.countMark('jxlianpo_mark_zhong');
							return num;
						}),
						fan:game.countPlayer(current=>{
							let num=0;
							if(current.identity=='fan') num++;
							num+=current.countMark('jxlianpo_mark_fan');
							return num;
						}),
						nei:(game.hasPlayer(current=>current.identity=='nei')?0:1)+game.countPlayer(current=>{
							return current.countMark('jxlianpo_mark_nei');
						}),
					};
					let population=0,identities=[];
					for(let i in map){
						let curPopulation=map[i]
						if(curPopulation>=population){
							if(curPopulation>population) identities=[];
							identities.add(i);
							population=curPopulation;
						}
					};
					return identities;
				},
				group:'jxlianpo_show',
				content:function*(event,map){
					var source=map.trigger.source;
					source.draw(2);
					source.recover();
				},
				mark:true,
				intro:{
					content:()=>`场上最大阵营为${lib.skill.jxlianpo.getMax().map(i=>{
						if(i=='zhu') return '主忠';
						if(i=='fan') return '反贼';
						if(i=='nei') return '内奸';
						return '';
					}).join('、')}`,
				},
				$createButton:function(item,type,position,noclick,node){
					node=ui.create.identityCard(item,position,noclick);
					node.link=item;
					return node;
				},
				subSkill:{
					show:{
						audio:'jxlianpo',
						trigger:{global:'roundStart'},
						filter:function(event,player){
							var list=lib.config.mode_config.identity.identity.lastItem.slice();
							list.removeArray(game.filterPlayer().map(i=>{
								let identity=i.identity;
								if(identity=='mingzhong') identity='zhong';
								return identity;
							}));
							return list.length;
						},
						forced:true,
						content:function(){
							'step 0'
							var list=lib.config.mode_config.identity.identity.lastItem.slice();
							list.removeArray(game.filterPlayer().map(i=>{
								var identity=i.identity;
								return identity=='mingzhong'?'zhong':identity;
							})).unique();
							player.chooseButton([
								'###炼魄：请选择一个身份###<div class="text center">你选择的身份对应的阵营角色数于本轮内视为+1</div>',
								[list,function(item,type,position,noclick,node){
									return lib.skill.jxlianpo.$createButton(item,type,position,noclick,node);
								}],
							],true);
							'step 1'
							var choice=result.links[0],mark=`jxlianpo_mark_${choice}`;
							player.when({global:'roundStart'})
								.assign({
									firstDo:true,
								})
								.filter(evt=>evt!=trigger)
								.then(()=>{
									for(var i in player.storage){
										if(i.startsWith('jxlianpo_mark_')){
											player.clearMark(i);
										}
									}
								});
							player.addMark(mark,1,false);
							event.videoId=lib.status.videoId++;
							var createDialog=function(player,identity,id){
								var dialog=ui.create.dialog(`${get.translation(player)}展示了“${get.translation(identity+'2')}”的身份牌<br>`,'forcebutton');
								dialog.videoId=id;
								ui.create.spinningIdentityCard(identity,dialog);
							};
							game.broadcastAll(createDialog,player,choice,event.videoId);
							var color='';
							if(choice=='zhong') color='#y';
							else if(choice=='fan') color='#g';
							else if(choice=='nei') color='#b';
							game.log(player,'展示了',`${color}${get.translation(choice+'2')}`,'的身份牌');
							game.delay(3);
							'step 2'
							game.broadcastAll('closeDialog',event.videoId);
						}
					},
					global:{
						mod:{
							maxHandcard:function(player,num){
								if(!lib.skill.jxlianpo.getMax().includes('fan')) return;
								return num-game.countPlayer(current=>{
									return current!=player&&current.hasSkill('jxlianpo');
								});
							},
							cardUsable:function(card,player,num){
								if(card.name=='sha'){
									if(!lib.skill.jxlianpo.getMax().includes('fan')) return;
									return num+game.countPlayer(current=>{
										return current.hasSkill('jxlianpo');
									});
								}
							},
							attackRange:function(player,num){
								if(!lib.skill.jxlianpo.getMax().includes('fan')) return;
								return num+game.countPlayer(current=>{
									return current.hasSkill('jxlianpo');
								});
							},
							cardSavable:function(card,player,target){
								if(card.name=='tao'){
									if(!lib.skill.jxlianpo.getMax().includes('zhu')) return;
									if(player==target) return;
									return false;
								}
							},
							playerEnabled:function(card,player,target){
								if(card.name=='tao'){
									if(!lib.skill.jxlianpo.getMax().includes('zhu')) return;
									if(player==target) return;
									return false;
								}
							}
						},
					},
				},
			},
			jxzhaoluan:{
				audio:2,
				trigger:{global:'dieBegin'},
				filter:function(event,player){
					return event.getParent().name=='dying'&&event.player.isIn();
				},
				limited:true,
				skillAnimation:true,
				animationColor:'metal',
				logTarget:'player',
				check:function(event,player){
					if(event.source&&event.source.isIn()&&get.attitude(player,event.source)>0&&player.identity=='fan') return false;
					return get.attitude(player,event.player)>3.5;
				},
				content:function*(event,map){
					var player=map.player,trigger=map.trigger;
					var target=trigger.player;
					player.awakenSkill('jxzhaoluan');
					trigger.cancel();
					target.getSkills(null,false,false).forEach(skill=>{
						var info=get.info(skill);
						if(info&&!info.charlotte&&!get.is.locked(skill)){
							target.removeSkill(skill);
						}
					});
					yield target.gainMaxHp(3);
					var num=3-target.getHp(true);
					if(num>0) yield target.recover(num);
					target.draw(4);
					player.addSkill('jxzhaoluan_effect');
					player.markAuto('jxzhaoluan_effect',target);
				},
				ai:{
					expose:0.5,
					threaten:3,
				},
				subSkill:{
					effect:{
						audio:'jxzhaoluan',
						enable:'phaseUse',
						filter:function(event,player){
							return player.getStorage('jxzhaoluan_effect').some(i=>i.isIn());
						},
						filterTarget:function(card,player,target){
							return !player.getStorage('jxzhaoluan_hit').includes(target);
						},
						line:false,
						locked:true,
						charlotte:true,
						promptfunc:function(){
							var bodies=_status.event.player.getStorage('jxzhaoluan_effect').filter(i=>i.isIn());
							return `选择一名角色，你令${get.translation(bodies)}${bodies.length>1?'中的一人':''}减1点体力上限，然后你对选择的角色造成1点伤害。`;
						},
						delay:false,
						content:function(){
							'step 0'
							var bodies=player.getStorage('jxzhaoluan_effect').filter(i=>i.isIn());
							if(bodies.length==1) event._result={bool:true,targets:bodies};
							else{
								player.chooseTarget('兆乱：请选择被减上限的傀儡',true,(card,player,target)=>{
									return _status.event.targets.includes(target);
								}).set('targets',bodies).set('ai',target=>{
									return 8-get.attitude(_status.event.player,target);
								});
							}
							'step 1'
							if(result.bool){
								var target=result.targets[0];
								player.line(target);
								target.loseMaxHp();
								game.delayex();
							}
							else event.finish();
							'step 2'
							player.line(target);
							target.damage();
							if(!player.storage.jxzhaoluan_hit){
								player.when('phaseUseAfter')
									.then(()=>{
										delete player.storage.jxzhaoluan_hit;
									});
							}
							player.markAuto('jxzhaoluan_hit',target);
						},
						ai:{
							order:9,
							result:{
								player:function(player){
									var bodies=player.getStorage('jxzhaoluan_effect').filter(i=>i.isIn());
									var body;
									if(bodies.length==1) body=bodies[0];
									else body=bodies.sort((a,b)=>get.attitude(player,a)-get.attitude(player,b))[0];
									if(get.attitude(player,body)>4&&!body.isDamaged()&&body.getHp()<=2) return -10;
									return 0;
								},
								target:function(player,target){
									return Math.sign(get.damageEffect(target,player,target));
								}
							}
						}
					},
				},
			},
			//神典韦
			juanjia:{
				trigger:{
					global:'phaseBefore',
					player:'enterGame',
				},
				forced:true,
				filter:function(event,player){
					return (event.name!='phase'||game.phaseNumber==0)&&player.hasEnabledSlot(2);
				},
				content:function(){
					player.disableEquip(2);
					player.expandEquip(1);
				},
			},
			qiexie:{
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				filter:function(event,player){
					return player.countEmptySlot(1)>0;
				},
				content:function(){
					'step 0'
					if(!_status.characterlist){
						lib.skill.pingjian.initList();
					}
					_status.characterlist.randomSort();
					var list=[];
					for(var name of _status.characterlist){
						var info=lib.character[name];
						if(info[3].some(function(skill){
							var info=get.skillInfoTranslation(skill);
							if(!info.includes('【杀】')) return false;
							var list=get.skillCategoriesOf(skill);
							list.remove('锁定技');
							return list.length==0;
						})){
							list.push(name);
							if(list.length>=5) break;
						}
					}
					if(!list.length) event.finish();
					else{
						var num=player.countEmptySlot(1);
						player.chooseButton([
							'挈挟：选择'+(num>1?'至多':'')+get.cnNumber(num)+'张武将置入武器栏',
							[list,function(item,type,position,noclick,node){
								return lib.skill.qiexie.$createButton(item,type,position,noclick,node);
							}],
						],[1,num],true).set('ai',function(button){
							var name=button.link;
							var info=lib.character[name];
							var skills=info[3].filter(function(skill){
								var info=get.skillInfoTranslation(skill);
								if(!info.includes('【杀】')) return false;
								var list=get.skillCategoriesOf(skill);
								list.remove('锁定技');
								return list.length==0;
							});
							var eff=0.2;
							for(var i of skills){
								eff+=get.skillRank(i,'in');
							}
							return eff;
						})
					}
					'step 1'
					if(result.bool){
						var list=result.links;
						game.addVideo('skill',player,['qiexie',[list]])
						game.broadcastAll(function(list){
							for(var name of list) lib.skill.qiexie.createCard(name);
						},list);
						var cards=list.map(function(name){
							var card=game.createCard('qiexie_'+name,'none',get.infoMaxHp(lib.character[name][2]));
							return card;
						});
						player.$gain2(cards);
						game.delayx();
						for(var card of cards) player.equip(card);
					}
				},
				$createButton:function(item,type,position,noclick,node){
					node=ui.create.buttonPresets.character(item,'character',position,noclick);
					const info=lib.character[item];
					const skills=info[3].filter(function(skill){
						var info=get.skillInfoTranslation(skill);
						if(!info.includes('【杀】')) return false;
						var list=get.skillCategoriesOf(skill);
						list.remove('锁定技');
						return list.length==0;
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
							const infoHp=get.infoMaxHp(characterInfo[2]);
							capt+=`&nbsp;&nbsp;范围：${infoHp}`;
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
				video:function(player,info){
					for(var name of info[0]){
						lib.skill.qiexie.createCard(name);
					}
				},
				createCard:function(name){
					if(!_status.postReconnect.qiexie) _status.postReconnect.qiexie=[
						function(list){
							for(var name of list) lib.skill.qiexie.createCard(name);
						},[]
					];
					_status.postReconnect.qiexie[1].add(name)
					if(!lib.card['qiexie_'+name]){
						if(lib.translate[name+'_ab']) lib.translate['qiexie_'+name]=lib.translate[name+'_ab'];
						else lib.translate['qiexie_'+name]=lib.translate[name];
						var info=lib.character[name];
						var card={
							fullimage:true,
							image:'character:'+name,
							type:'equip',
							subtype:'equip1',
							enable:true,
							selectTarget:-1,
							filterCard:function(card,player,target){
								if(player!=target) return false;
								return target.canEquip(card,true);
							},
							modTarget:true,
							allowMultiple:false,
							content:lib.element.content.equipCard,
							toself:true,
							ai:{},
							skills:['qiexie_destroy'],
						}
						var maxHp=get.infoMaxHp(info[2]);
						if(maxHp!=1) card.distance={attackFrom:(1-maxHp)};
						var skills=info[3].filter(function(skill){
							var info=get.skillInfoTranslation(skill);
							if(!info.includes('【杀】')) return false;
							var list=get.skillCategoriesOf(skill);
							list.remove('锁定技');
							return list.length==0;
						});
						var str='锁定技。';
						if(skills.length){
							card.skills.addArray(skills);
							str+='你视为拥有技能';
							for(var skill of skills){
								str+='〖'+get.translation(skill)+'〗';
								str+='、';
							}
							str=str.slice(0,str.length-1);
							str+='；';
							card.ai.equipValue=function(card,player){
								let val=maxHp;
								if(player.hasSkill('qiexie')) val*=0.4;
								else val*=0.6;
								return val+=skills.length;
							};
						}
						str+='此牌离开你的装备区后，改为置入剩余武将牌牌堆。';
						lib.translate['qiexie_'+name+'_info']=str;
						var append='';
						if(skills.length){
							for(var skill of skills){
								if(lib.skill[skill].nobracket){
									append+='<div class="skilln">'+get.translation(skill)+'</div><div><span style="font-family: yuanli">'+get.skillInfoTranslation(skill)+'</span></div><br><br>';
								}
								else{
									var translation=lib.translate[skill+'_ab']||get.translation(skill).slice(0,2);
									append+='<div class="skill">【'+translation+'】</div><div><span style="font-family: yuanli">'+get.skillInfoTranslation(skill)+'</span></div><br><br>';
								}
							}
							str=str.slice(0,str.length-8);
						}
						lib.translate['qiexie_'+name+'_append']=append;
						lib.card['qiexie_'+name]=card;
					}
				},
				subSkill:{
					destroy:{
						trigger:{player:'loseBegin'},
						equipSkill:true,
						forceDie:true,
						charlotte:true,
						forced:true,
						popup:false,
						filter:function(event,player){
							return event.cards.some(card=>card.name.indexOf('qiexie_')==0)
						},
						content:function(){
							for(var card of trigger.cards){
								if(card.name.indexOf('qiexie_')==0){
									card._destroy=true;
									game.log(card,'被放回武将牌堆');
									var name=card.name.slice(7);
									if(lib.character[name]) _status.characterlist.add(name);
								}
							}
						},
					},
				},
			},
			cuijue:{
				enable:'phaseUse',
				filter:function(event,player){
					return player.countCards('he')>0;//&&game.hasPlayer(target=>lib.skill.cuijue.filterTarget('SB',player,target));
				},
				filterCard:true,
				filterTarget:function(card,player,target){
					if(player.getStorage('cuijue_used').contains(target)||!player.inRange(target)) return false;
					var distance=get.distance(player,target);
					return !game.hasPlayer(current=>(current!=target&&player.inRange(current)&&get.distance(player,current)>distance));
				},
				selectTarget:[0,1],
				filterOk:function(){
					var player=_status.event.player;
					if(game.hasPlayer(target=>lib.skill.cuijue.filterTarget('SB',player,target))) return ui.selected.targets.length>0;
					return true;
				},
				position:'he',
				complexTarget:true,
				check:card=>{
					var player=_status.event.player,goon=0;
					try{
						ui.selected.cards.add(card);
						if(game.hasPlayer(target=>{
							return lib.skill.cuijue.filterTarget('SB',player,target);
						})){
							goon=6;
						}
					}catch(e){}
					ui.selected.cards.remove(card);
					return goon-get.value(card);
				},
				content:function(){
					if(target){
						player.addTempSkill('cuijue_used','phaseUseAfter');
						player.markAuto('cuijue_used',[target]);
						target.damage('nocard');
					}
				},
				ai:{
					order:2,
					result:{
						target:-1.5
					},
					tag:{
						damage:1
					}
				},
				subSkill:{
					used:{
						onremove:true,
						charlotte:true,
					},
				},
			},
			//神邓艾
			dctuoyu:{
				audio:2,
				trigger:{player:['phaseUseBegin','phaseUseEnd']},
				forced:true,
				filter:function(event,player){
					return player.countCards('h')>0&&player.getStorage('dctuoyu').length>0;
				},
				content:function(){
					'step 0'
					var hs=player.getCards('h'),tags=['dctuoyu_fengtian','dctuoyu_qingqu','dctuoyu_junshan'];
					var storage=player.getStorage('dctuoyu');
					var list=[
						['未分配手牌（对话框较长，请下滑操作）',[]],
						['丰田（伤害/回复值+1）',[]],
						['清渠（无次数和距离限制）',[]],
						['峻山（不可被响应）',[]],
					];
					for(var card of hs){
						var added=false;
						for(var i=0;i<tags.length;i++){
							if(card.hasGaintag(tags[i]+'_tag')){
								added=true;
								list[i+1][1].push(card);
								break;
							}
						}
						if(!added) list[0][1].push(card);
					}
					for(var row of list){
						for(var i=0;i<tags.length;i++){
							if(!storage.contains(tags[i])){
								list[i+1][0]=get.translation(tags[i])+'（尚未激活）';
							}
						}
					}
					var next=player.chooseToMove('拓域：请分配你的手牌',true);
					next.set('list',list);
					next.set('filterMove',function(from,to,moved){
						var storage=_status.event.player.getStorage('dctuoyu'),tags=['dctuoyu_fengtian','dctuoyu_qingqu','dctuoyu_junshan'];
						if(typeof to=='number'){
							if(to==0) return true;
							return storage.contains(tags[to-1])&&moved[to].length<5;
						}
						return true;
					});
					next.set('processAI',function(){
						var player=_status.event.player;
						var storage=player.getStorage('dctuoyu'),tags=['dctuoyu_fengtian','dctuoyu_qingqu','dctuoyu_junshan'];
						var moved=[[],[],[],[]]
						var isEmpty=function(to){
							return storage.contains(tags[to-1])&&moved[to].length<5;
						}
						var hs=player.getCards('h');
						var hs2=hs.slice(0);
						var usable=player.getCardUsable('sha');
						var addTo=function(card,to){
							if(isEmpty(to)){
								hs2.remove(card);
								moved[to].push(card);
								if(get.name(card)=='sha'&&to!=2) usable--;
							}
						}
						var hasRuanshizi=game.hasPlayer(function(target){
							return target!=player&&player.canUse('sha',target,null,true)&&!target.mayHaveShan()&&get.attitude(player,target)<0&&get.effect(target,{name:'sha'},player,player)>0;
						})
						for(var card of hs){
							var name=get.name(card);
							if(name=='tao'||name=='jiu'){
								addTo(card,1);
							}
							else if(name=='sha'){
								if(hasRuanshizi&&isEmpty(1)&&usable>0) addTo(card,1);
								else if(isEmpty(3)&&usable>0) addTo(card,3);
								else addTo(card,2);
							}
							else if(get.type(name)=='trick'){
								if(isEmpty(1)&&get.tag(card,'damage')>0&&player.hasUseTarget(card)) addTo(card,1);
								else addTo(card,3);
							}
						}
						moved[0].addArray(hs2);
						return moved;
					})
					'step 1'
					if(result.bool){
						game.broadcastAll(function(moved,player){
							var tags=['dctuoyu_fengtian','dctuoyu_qingqu','dctuoyu_junshan'];
							var cards=[];
							for(var i=0;i<moved.length;i++){
								for(var card of moved[i]){
									cards.unshift(card);
									for(var j=0;j<tags.length;j++){
										if(i==j+1){
											if(!card.hasGaintag(tags[j]+'_tag')) card.addGaintag(tags[j]+'_tag');
										}
										else{
											if(card.hasGaintag(tags[j]+'_tag')) card.removeGaintag(tags[j]+'_tag');
										}
									}
								}
							}
							if(player==game.me){
								game.addVideo('lose',game.me,[get.cardsInfo(cards),[],[],[]]);
								for(var i=0;i<cards.length;i++){
									cards[i].goto(ui.special);
								}
								game.me.directgain(cards,false);
							}
						},result.moved,player);
					}
				},
				intro:{
					content:'已激活的副区域：$',
				},
				group:'dctuoyu_effect',
				subSkill:{
					effect:{
						mod:{
							targetInRange:function(card,player,target){
								if(!card.cards) return;
								for(var i of card.cards){
									if(i.hasGaintag('dctuoyu_qingqu_tag')) return true;
								}
							},
							cardUsable:function(card,player,num){
								if(!card.cards) return;
								for(var i of card.cards){
									if(i.hasGaintag('dctuoyu_qingqu_tag')) return Infinity;
								}
							},
						},
						trigger:{player:'useCard'},
						forced:true,
						filter:function(event,player){
							var tags=['dctuoyu_fengtian_tag','dctuoyu_qingqu_tag','dctuoyu_junshan_tag'],card=event.card;
							return player.hasHistory('lose',function(evt){
								if(evt.getParent()!=event) return false;
								for(var i in evt.gaintag_map){
									for(var tag of evt.gaintag_map[i]){
										if(tags.contains(tag)) return true;
									}
								}
								return false;
							});
						},
						content:function(){
							var tags=['dctuoyu_fengtian_tag','dctuoyu_qingqu_tag','dctuoyu_junshan_tag'],card=trigger.card;
							player.hasHistory('lose',function(evt){
								if(evt.getParent()!=trigger) return false;
								for(var i in evt.gaintag_map){
									tags.removeArray(evt.gaintag_map[i]);
								}
								return tags.length==0;
							});
							if(!tags.contains('dctuoyu_fengtian_tag')){
								if(get.tag(card,'damage')>0||get.tag(card,'recover')>0){
									trigger.baseDamage++;
									game.log(card,'的伤害值/回复值+1');
								}
							}
							if(!tags.contains('dctuoyu_qingqu_tag')){
								if(trigger.addCount!==false){
									trigger.addCount=false;
									var stat=player.getStat('card');
									if(stat[card.name]&&stat[card.name]>0) stat[card.name]--;
									game.log(card,'不计入次数限制');
								}
							}
							if(!tags.contains('dctuoyu_junshan_tag')){
								game.log(card,'不可被响应');
								trigger.directHit.addArray(game.filterPlayer());
							}
						},
					},
				},
			},
			dcxianjin:{
				audio:2,
				trigger:{
					player:'damageEnd',
					source:'damageSource',
				},
				forced:true,
				filter:function(event,player,name){
					var key=(name=='damageEnd'?'damage':'sourceDamage');
					return player.getAllHistory(key).indexOf(event)%2==1;
				},
				content:function(){
					'step 0'
					var tags=['dctuoyu_fengtian','dctuoyu_qingqu','dctuoyu_junshan'];
					tags.removeArray(player.getStorage('dctuoyu'));
					if(!tags.length){
						player.draw(player.isMaxHandcard()?1:3);
						event.finish();
					}
					else if(tags.length==1){
						event._result={control:tags[0]};
					}
					else player.chooseControl(tags).set('prompt','险峻：选择激活一个副区域标签');
					'step 1'
					var control=result.control;
					game.log(player,'激活了副区域','#y'+get.translation(control));
					player.markAuto('dctuoyu',[control]);
					player.popup(get.translation(control+'_tag'));
					if(player.isMaxHandcard()) player.draw();
					else player.draw(player.getStorage('dctuoyu').length)
				},
			},
			dcqijing:{
				audio:2,
				trigger:{global:'phaseEnd'},
				forced:true,
				juexingji:true,
				derivation:'dccuixin',
				skillAnimation:true,
				animationColor:'orange',
				filter:function(event,player){
					return player.getStorage('dctuoyu').length==3;
				},
				content:function(){
					'step 0'
					player.awakenSkill('dcqijing');
					player.loseMaxHp();
					'step 1'
					if(game.countPlayer()>2){
						if(player==trigger.player&&!trigger.skill){
							var evt=trigger.getParent();
							if(evt.name=='phaseLoop'&&evt._isStandardLoop) evt.player=player.next;
						}
						player.chooseTarget(true,'请选择一名要更换座次的角色，将自己移动到该角色的上家位置',function(card,player,target){
							return target!=player&&target!=player.next;
						}).set('ai',function(target){
							var player=_status.event.player;
							var current=_status.currentPhase.next;
							var max=20,att=0;
							while(max>0){
								max--;
								if(current==target) return att;
								att-=get.attitude(player,current);
								current=current.next;
							}
							return att;
						})
					}
					else event.goto(3);
					'step 2'
					if(result.bool){
						var target=result.targets[0];
						game.broadcastAll(function(target1,target2){
							game.swapSeat(target1,target2,null,true);
						},player,target);
					}
					'step 3'
					player.addSkill('dccuixin');
					player.insertPhase();
				},
			},
			dccuixin:{
				audio:2,
				trigger:{player:'useCardAfter'},
				filter:function(event,player){
					if(!event._dccuixin||get.type(event.card,false)=='delay'||get.type(event.card,false)=='equip') return false;
					var card={
						name:event.card.name,
						nature:event.card.nature,
						isCard:true,
					},list=event._dccuixin;
					for(var target of list){
						var targetx=player[target]();
						if(lib.filter.targetEnabled2(card,targetx,player)) return true;
					}
					return false;
				},
				direct:true,
				content:function(){
					'step 0'
					var card={
						name:trigger.card.name,
						nature:trigger.card.nature,
						isCard:true,
					};
					event.card=card;
					var list=[];
					trigger._dccuixin.forEach(target=>{
						var targetx=player[target]();
						if(lib.filter.targetEnabled2(card,targetx,player)) list.add(targetx);
					});
					if(list.length==1){
						event.target=list[0];
						player.chooseBool('摧心：是否视为对'+get.translation(list[0])+'使用'+get.translation(card)+'？').set('goon',get.effect(list[0],card,player,player)>0).set('ai',()=>_status.event.goon);
					}
					else{
						player.chooseTarget('摧心：是否视为对上家或下家使用'+get.translation(card)+'？','操作提示：从上家或下家中选择一名角色作为使用目标',function(card,player,target){
							return (target==player.getNext()||target==player.getPrevious())&&lib.filter.targetEnabled2(_status.event.getParent().card,target,player);
						}).set('ai',function(target){
							var player=_status.event.player;
							return get.effect(target,_status.event.getParent().card,player,player)
						})
					}
					'step 1'
					if(result.bool){
						var target=event.target||result.targets[0];
						player.useCard(card,target,false,'dccuixin');
					}
				},
				group:'dccuixin_silent',
				subSkill:{
					silent:{
						trigger:{player:'useCardToPlayered'},
						silent:true,
						forced:true,
						popup:false,
						firstDo:true,
						charlotte:true,
						filter:function(event,player){
							if(!event.isFirstTarget||event.getParent().skill=='dccuixin') return false;
							if(event.targets.length==0) return false;
							return event.targets.includes(player.getNext())||event.targets.includes(player.getPrevious());
						},
						content:function(){
							var list=[];
							if(trigger.targets.includes(player.getNext())) list.push('getPrevious');
							if(trigger.targets.includes(player.getPrevious())) list.push('getNext');
							trigger.getParent()._dccuixin=list;
						}
					},
				},
			},
			//海外神吕蒙
			twshelie:{
				audio:'shelie',
				inherit:'shelie',
				prompt2:()=>lib.translate.shelie_info,
				group:'twshelie_jingce',
				//什么精策技能啊喂！
				subSkill:{
					round:{charlotte:true},
					count:{
						charlotte:true,
						onremove:true,
						intro:{
							markcount:function(storage){
								return storage.length;
							},
							content:'本回合已使用$花色的牌',
						},
					},
					jingce:{
						audio:'shelie',
						trigger:{player:['phaseJieshuBegin','useCard1']},
						filter:function(event,player){
							if(player.hasSkill('twshelie_round')||player!=_status.currentPhase) return false;
							var list=[];
							player.getHistory('useCard',function(evt){
								if(lib.suit.contains(get.suit(evt.card))&&!list.contains(get.suit(evt.card))) list.push(get.suit(evt.card));
							});
							if(list.length){
								player.addTempSkill('twshelie_count');
								player.storage.twshelie_count=list.sort(function(a,b){
									return lib.suit.indexOf(b)-lib.suit.indexOf(a);
								});
								player.markSkill('twshelie_count');
								player.syncStorage('twshelie_count');
							}
							return event.name!='useCard'&&list.length>=player.hp;
						},
						forced:true,
						locked:false,
						content:function(){
							'step 0'
							player.addTempSkill('twshelie_round','roundStart');
							player.chooseControl('摸牌阶段','出牌阶段').set('prompt','涉猎：请选择要执行的额外阶段');
							'step 1'
							if(result.index==0){
								var next=player.phaseDraw();
								event.next.remove(next);
								trigger.getParent().next.push(next);
							}
							if(result.index==1){
								var next=player.phaseUse();
								event.next.remove(next);
								trigger.getParent().next.push(next);
							}
						},
					},
				},
			},
			twgongxin:{
				audio:'gongxin',
				enable:'phaseUse',
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current!=player&&current.countCards('h');
					});
				},
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('h');
				},
				usable:1,
				content:function(){
					'step 0'
					event.num=target.getCards('h').reduce(function(arr,card){
						return arr.add(get.suit(card,player)),arr;
					},[]).length;
					'step 1'
					var cards=target.getCards('h');
					player.chooseButton(2,[
						'攻心',
						cards,
						[['弃置此牌','置于牌堆顶'],'tdnodes'],
					]).set('filterButton',function(button){
						var type=typeof button.link;
						if(ui.selected.buttons.length&&type==typeof ui.selected.buttons[0].link) return false;
						return true;
					}).set('ai',function(button){
						var target=_status.event.target;
						var type=typeof button.link;
						if(type=='object') return get.value(button.link,target);
					});
					'step 2'
					if(result.bool){
						if(typeof result.links[0]!='string') result.links.reverse();
						var card=result.links[1],choice=result.links[0];
						if(choice=='弃置此牌') target.discard(card);
						else {
							player.showCards(card,get.translation(player)+'对'+get.translation(target)+'发动了【攻心】');
							target.lose(card,ui.cardPile,'visible','insert');
							game.log(card,'被置于了牌堆顶');
						}
					}
					'step 3'
					if(event.num==target.getCards('h').reduce(function(arr,card){
						return arr.add(get.suit(card,player)),arr;
					},[]).length) event.finish();
					'step 4'
					var num1=0;
					for(var card of target.getCards('h')){
						if(get.color(card)=='red') num1++;
					}
					var num2=target.countCards('h')-num1;
					player.chooseControl(['红色','黑色','cancel2']).set('prompt','是否令'+get.translation(target)+'本回合无法使用一种颜色的牌？').set('ai',function(){
						return num1>=num2?'红色':'黑色';
					});
					'step 5'
					if(result.control!='cancel2'){
						player.line(target);
						target.addTempSkill('twgongxin2');
						target.markAuto('twgongxin2',[result.control=='红色'?'red':'black']);
						game.log(target,'本回合无法使用'+result.control+'牌');
						if(!event.isMine()&&!event.isOnline()) game.delayx();
					}
				},
				ai:{
					order:10,
					expose:0.25,
					result:{
						target:function(player,target){
							return -target.countCards('h');
						},
					},
				},
			},
			twgongxin2:{
				mod:{
					cardEnabled2:function(card,player){
						if(player.getStorage('twgongxin2').contains(get.color(card))) return false;
					},
				},
				charlotte:true,
				onremove:true,
				intro:{content:'本回合内不能使用或打出$牌'},
			},
			//神张角
			yizhao:{
				audio:2,
				trigger:{
					player:['useCard','respond']
				},
				forced:true,
				filter:function(event,player){
					return typeof get.number(event.card)=='number';
				},
				marktext:'黄',
				intro:{
					name:'黄(异兆/肆军)',
					name2:'黄',
					content:'mark',
					markcount:function(storage,player){
						return (storage||0).toString().slice(-2);
					},
				},
				content:function(){
					'step 0'
					event.num=player.countMark('yizhao');
					player.addMark('yizhao',get.number(trigger.card));
					'step 1'
					var num=Math.floor(num/10)%10,num2=Math.floor(player.countMark('yizhao')/10)%10;
					if(num!=num2){
						var card=get.cardPile2(card=>{
							return get.number(card,false)==num2;
						});
						if(card) player.gain(card,'gain2');
					}
				},
				mod:{
					aiOrder:function(player,card,num){
						if(Math.floor((get.number(card)+player.countMark('yizhao')%10)/10)==1) return num+10;
					},
				},
				ai:{
					threaten:1.5,
					effect:{
						target:function(card,player,target,current){
							if(get.type(card)=='equip'&&!get.cardtag(card,'gifts')) return [1,0.1];
						}
					}
				}
			},
			sijun:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				filter:function(event,player){
					return player.countMark('yizhao')>ui.cardPile.childNodes.length;
				},
				check:()=>true,
				content:function(){
					'step 0'
					player.removeMark('yizhao',player.countMark('yizhao'));
					game.washCard();
					'step 1'
					var pile=Array.from(ui.cardPile.childNodes);
					if(pile.length<3) return;
					var bool=false,max=Math.pow(2,Math.min(100,pile.length)),index;
					for(var i=0;i<max;i++){
						var num=0;
						index=i.toString(2);
						while(index.length<pile.length){
							index=('0'+index);
						}
						for(var k=0;k<index.length;k++){
							if(index[k]=='1') num+=get.number(pile[k]);
							if(num>36) break;
						}
						if(num==36){
							bool=true;
							break;
						}
					}
					if(bool){
						var cards=[];
						for(var k=0;k<index.length;k++){
							if(index[k]=='1') cards.push(pile[k]);
						}
						player.gain(cards,'gain2');
					}
				},
				ai:{
					combo:'yizhao',
				}
			},
			sanshou:{
				audio:2,
				trigger:{player:'damageBegin4'},
				check:function(event,player){
					return get.damageEffect(player,event.source,player,event.nature)<=0;
				},
				content:function(){
					'step 0'
					var cards=game.cardsGotoOrdering(get.cards(3)).cards;
					event.cards=cards;
					player.showCards(cards,get.translation(player)+'发动了【三首】');
					'step 1'
					var types=[];
					types.addArray(game.getGlobalHistory('useCard').map(evt=>get.type2(evt.card)));
					if(cards.filter(card=>!types.contains(get.type2(card))).length){
						trigger.cancel();
					}
					game.delayx();
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(card.name=='shandian'||card.name=='fulei') return [0,0.1];
							if(!get.tag(card,'damage')) return;
							var types=[],bool=0;
							types.addArray(game.getGlobalHistory('useCard').map(evt=>get.type2(evt.card)));
							if(!types.contains(get.type2(card))) bool=1;
							if(types.length<2) return Math.min(1,0.4+(types.length+bool)*0.2);
						}
					}
				},
			},
			tianjie:{
				audio:2,
				trigger:{global:'phaseEnd'},
				direct:true,
				filter:function(event,player){
					return game.hasGlobalHistory('cardMove',evt=>evt.washCard)&&game.hasPlayer(current=>current!=player);
				},
				skillAnimation:true,
				animationColor:'metal',
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('tianjie'),'选择至多三名其他角色，依次对这些角色造成X点雷电伤害（X为其手牌中【闪】的数量，至少为1）',[1,3]).set('ai',target=>{
						var player=_status.event.player;
						return get.damageEffect(target,player,player,'thunder')*Math.sqrt(Math.max(1,target.countCards('h','shan')));
					});
					'step 1'
					if(result.bool){
						var targets=result.targets;
						targets.sortBySeat();
						player.logSkill('tianjie',targets);
						for(var target of targets){
							var num=Math.max(1,target.countCards('h','shan'));
							target.damage(num,'thunder');
						}
					}
				},
			},
			shencai:{
				audio:2,
				enable:'phaseUse',
				usable:5,
				filter:function(event,player){
					var count=player.getStat('skill').shencai;
					if(count&&count>player.countMark('shencai')) return false;
					return true;
				},
				filterTarget:lib.filter.notMe,
				onremove:true,
				prompt:'选择一名其他角色进行地狱审判',
				content:function(){
					var next=target.judge();
					next.callback=lib.skill.shencai.contentx;
				},
				ai:{
					order:8,
					result:{target:-1},
				},
				contentx:function(){
					var card=event.judgeResult.card;
					var player=event.getParent(2).player;
					var target=event.getParent(2).target;
					if(get.position(card,true)=='o') player.gain(card,'gain2');
					var list=[],str=lib.skill.shencai.getStr(card);
					for(var i in lib.skill.shencai.filterx){
						if(str.indexOf(lib.skill.shencai.filterx[i])!=-1) list.push('shencai_'+i);
					}
					if(list.length){
						for(var i in lib.skill.shencai.filterx){
							var num=target.countMark('shencai_'+i);
							if(num>0){
								target.removeMark('shencai_'+i,num);
								target.removeSkill('shencai_'+i);
							}
						}
						if(target.isIn()){
							for(var i of list){
								target.addSkill(i);
								target.addMark(i,1);
							}
						}
					}
					else if(target.isIn()){
						player.gainPlayerCard(target,true,'hej');
						target.addMark('shencai_death',1);
						target.addSkill('shencai_death');
					}
				},
				filterx:{
					losehp:'体力',
					weapon:'武器',
					respond:'打出',
					distance:'距离',
				},
				getStr:function(node){
					var str='',name=node.name;
					if(lib.translate[name+'_info']){
						if(lib.card[name].type&&lib.translate[lib.card[name].type]) str+=(''+get.translation(lib.card[name].type)+'牌|');
						if(get.subtype(name)){
							str+=(''+get.translation(get.subtype(name))+'|');
						}
						if(lib.card[name]&&lib.card[name].addinfomenu){
							str+=(''+lib.card[name].addinfomenu+'|');
						}
						if(get.subtype(name)=='equip1'){
							var added=false;
							if(lib.card[node.name]&&lib.card[node.name].distance){
								var dist=lib.card[node.name].distance;
								if(dist.attackFrom){
									added=true;
									str+=('攻击范围：'+(-dist.attackFrom+1)+'|');
								}
							}
							if(!added){
								str+=('攻击范围：1|');
							}
						}
					}
					if(lib.card[name].cardPrompt){
						str+=(''+lib.card[name].cardPrompt(node)+'|');
					}
					else if(lib.translate[name+'_info']){
						str+=(''+lib.translate[name+'_info']+'|');
					}
					if(get.is.yingbianConditional(node)){
						const yingbianEffects=get.yingbianEffects(node);
						if(!yingbianEffects.length){
							const defaultYingbianEffect=get.defaultYingbianEffect(node);
							if(lib.yingbian.prompt.has(defaultYingbianEffect)) yingbianEffects.push(defaultYingbianEffect);
						}
						if(yingbianEffects.length) str+=`应变：${yingbianEffects.map(value=>lib.yingbian.prompt.get(value)).join('；')}|`;
					}
					return str;
				},
				subSkill:{
					losehp:{
						charlotte:true,
						marktext:'笞',
						trigger:{player:'damageEnd'},
						forced:true,
						content:function(){
							player.loseHp(trigger.num);
						},
						ai:{
							effect:{
								target:function(card,player,target,current){
									if(get.tag(card,'damage')&&current<0) return 1.6;
								},
							},
						},
						intro:{
							name:'神裁 - 体力',
							name2:'笞',
							content:'锁定技。当你受到伤害后，你失去等量的体力。',
							onunmark:true,
						},
					},
					weapon:{
						charlotte:true,
						marktext:'杖',
						trigger:{target:'useCardToTargeted'},
						forced:true,
						filter:function(event,player){
							return event.card.name=='sha';
						},
						content:function(){
							trigger.directHit.add(player);
							game.log(player,'不可响应',trigger.card);
						},
						intro:{
							name:'神裁 - 武器',
							name2:'杖',
							content:'锁定技。当你成为【杀】的目标后，你不能使用牌响应此【杀】。',
							onunmark:true,
						},
						global:'shencai_weapon_ai',
					},
					ai:{
						ai:{
							directHit_ai:true,
							skillTagFilter:function(player,tag,arg){
								if(!arg||!arg.card||arg.card.name!='sha') return false;
								if(!arg.target||!arg.target.hasSkill('shencai_weapon')) return false;
								return true;
							},
						},
					},
					respond:{
						charlotte:true,
						marktext:'徒',
						trigger:{
							player:'loseAfter',
							global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
						},
						forced:true,
						filter:function(event,player){
							if(!player.hasCard(function(card){
								return lib.filter.cardDiscardable(card,player,'shencai_respond');
							},'h')) return false;
							var evt=event.getParent('shencai_respond');
							if(evt&&evt.player==player) return false;
							evt=event.getl(player);
							return evt&&evt.hs&&evt.hs.length>0;
						},
						content:function(){
							var cards=player.getCards('h',function(card){
								return lib.filter.cardDiscardable(card,player,'shencai_respond');
							});
							if(cards.length>0) player.discard(cards.randomGet());
						},
						intro:{
							name:'神裁 - 打出',
							name2:'徒',
							content:'锁定技。当你失去手牌后，你随机弃置一张手牌（不嵌套触发）。',
							onunmark:true,
						},
					},
					distance:{
						charlotte:true,
						marktext:'流',
						trigger:{player:'phaseJieshuBegin'},
						forced:true,
						content:function(){
							player.turnOver();
						},
						intro:{
							name:'神裁 - 距离',
							name2:'流',
							content:'锁定技。结束阶段开始时，你翻面。',
							onunmark:true,
						},
					},
					death:{
						charlotte:true,
						marktext:'死',
						mod:{
							maxHandcard:function(player,num){
								return num-player.countMark('shencai_death');
							},
						},
						trigger:{player:'phaseEnd'},
						forced:true,
						filter:function(event,player){
							return player.countMark('shencai_death')>game.countPlayer();
						},
						content:function(){
							player.die();
						},
						intro:{
							name:'神裁 - 死',
							name2:'死',
							content:'锁定技。你的角色手牌上限-#；回合结束时，若场上存活人数小于#，则你死亡。',
							onunmark:true,
						},
					},
				},
				intro:{
					content:'发动次数上限+#',
				},
			},
			xunshi:{
				audio:2,
				mod:{
					cardname:function(card){
						if(lib.skill.xunshi.isXunshi(card)) return 'sha';
					},
					cardnature:function(card){
						if(lib.skill.xunshi.isXunshi(card)) return false;
					},
					suit:function(card){
						if(lib.skill.xunshi.isXunshi(card)) return 'none';
					},
					targetInRange:function(card){
						if(get.color(card)=='none') return true;
					},
					cardUsable:function(card){
						if(get.color(card)=='none') return Infinity;
					},
				},
				isXunshi:function(card){
					var info=lib.card[card.name];
					if(!info||(info.type!='trick'&&info.type!='delay')) return false;
					if(info.notarget) return false;
					if(info.selectTarget!=undefined){
						if(Array.isArray(info.selectTarget)){
							if(info.selectTarget[0]<0) return !info.toself;
							return info.selectTarget[0]!=1||info.selectTarget[1]!=1;
						}
						else{
							if(info.selectTarget<0) return !info.toself;
							return info.selectTarget!=1;
						}
					}
					return false;
				},
				trigger:{player:'useCard2'},
				forced:true,
				filter:function(event,player){
					return get.color(event.card)=='none';
				},
				content:function(){
					'step 0'
					if(player.countMark('shencai')<4&&player.hasSkill('shencai',null,null,false)) player.addMark('shencai',1,false);
					if(trigger.addCount!==false){
						trigger.addCount=false;
						var stat=player.getStat().card,name=trigger.card.name;
						if(typeof stat[name]=='number') stat[name]--;
					}
					var info=get.info(trigger.card);
					if(info.allowMultiple==false) event.finish();
					else if(trigger.targets&&!info.multitarget){
						if(!game.hasPlayer(function(current){
							return !trigger.targets.contains(current)&&lib.filter.targetEnabled2(trigger.card,player,current);
						})) event.finish();
					}
					else event.finish();
					'step 1'
					var prompt2='为'+get.translation(trigger.card)+'增加任意个目标'
					player.chooseTarget(get.prompt('xunshi'),function(card,player,target){
						var player=_status.event.player;
						return !_status.event.targets.contains(target)&&lib.filter.targetEnabled2(_status.event.card,player,target);
					},[1,Infinity]).set('prompt2',prompt2).set('ai',function(target){
						var trigger=_status.event.getTrigger();
						var player=_status.event.player;
						return get.effect(target,trigger.card,player,player);
					}).set('card',trigger.card).set('targets',trigger.targets);
					'step 2'
					if(result.bool){
						if(!event.isMine()&&!event.isOnline()) game.delayx();
						event.targets=result.targets;
					}
					else{
						event.finish();
					}
					'step 3'
					if(event.targets){
						player.line(event.targets,'fire');
						trigger.targets.addArray(event.targets);
					}
				},
			},
			twwushen:{
				mod:{
					cardname:function(card,player,name){
						if(get.suit(card)=='heart') return 'sha';
					},
					cardnature:function(card,player){
						if(get.suit(card)=='heart') return false;
					},
					targetInRange:function(card){
						if(get.suit(card)=='heart') return true;
					},
					cardUsable:function(card){
						if(card.name=='sha'&&get.suit(card)=='heart') return Infinity;
					}
				},
				audio:'wushen',
				trigger:{player:'useCard2'},
				forced:true,
				filter:function(event,player){
					return event.card.name=='sha'&&(get.suit(event.card)=='heart'||!player.hasSkill('twwushen_phase',null,null,false));
				},
				logTarget:function(event,player){
					if(get.suit(event.card)=='heart'){
						var targets=game.filterPlayer(function(current){
							return !event.targets.contains(current)&&current.hasMark('twwuhun')&&lib.filter.targetEnabled(event.card,player,current);
						});
						if(targets.length){
							return targets.sortBySeat();
						}
					}
					return null;
				},
				content:function(){
					if(!player.hasSkill('twwushen_phase',null,null,false)){
						trigger.directHit.addArray(game.players);
						player.addTempSkill('twwushen_phase',['phaseZhunbeiAfter','phaseJudgeAfter','phaseDrawAfter','phaseUseAfter','phaseDiscardAfter','phaseJieshuAfter'])
					}
					if(get.suit(trigger.card)=='heart'){
						if(trigger.addCount!==false){
							trigger.addCount=false;
							if(player.stat[player.stat.length-1].card.sha>0){
								player.stat[player.stat.length-1].card.sha--;
							}
						}
						var targets=game.filterPlayer(function(current){
							return !trigger.targets.contains(current)&&current.hasMark('twwuhun')&&lib.filter.targetEnabled(trigger.card,player,current);
						});
						if(targets.length){
							trigger.targets.addArray(targets.sortBySeat());
							game.log(targets,'也成为了',trigger.card,'的目标');
						}
					}
				},
				ai:{
					directHit_ai:true,
					skillTagFilter:function(player,tag,arg){
						return arg.card.name=='sha'&&!player.hasSkill('twwushen_phase',null,null,false);
					},
				},
				subSkill:{phase:{charlotte:true}},
				shaRelated:true,
			},
			twwuhun:{
				audio:2,
				trigger:{player:'die'},
				forceDie:true,
				skillAnimation:true,
				animationColor:'soil',
				locked:true,
				check:function(event,player){
					return game.hasPlayer(function(current){
						return current!=player&&current.hasMark('twwuhun')&&get.attitude(player,current)<0;
					});
				},
				content:function(){
					'step 0'
					player.judge(function(card){
						var name=get.name(card,false);
						if(name=='tao'||name=='taoyuan') return -25;
						return 15;
					}).set('forceDie',true).judge2=function(result){
						return result.bool;
					};
					'step 1'
					var num=game.countPlayer(function(current){
						return current!=player&&current.hasMark('twwuhun');
					});
					if(result.bool&&num>0){
						player.chooseTarget('请选择【武魂】的目标','选择至少一名拥有“梦魇”标记的角色。令这些角色各自失去X点体力（X为其“梦魇”标记数）',true,[1,num],function(card,player,target){
							return target!=player&&target.hasMark('twwuhun');
						}).set('forceDie',true).set('ai',function(target){
							return -get.attitude(_status.event.player,target);
						});
					}
					else event.finish();
					'step 2'
					var targets=result.targets.sortBySeat();
					player.line(targets,'fire');
					event.targets=targets;
					'step 3'
					var target=targets.shift();
					var num=target.countMark('twwuhun');
					if(num>0) target.loseHp(num);
					if(targets.length>0) event.redo();
				},
				marktext:'魇',
				intro:{
					name:'梦魇',
					content:'mark',
					onunmark:true,
				},
				group:'twwuhun_gain',
				subSkill:{
					gain:{
						audio:'twwuhun',
						trigger:{
							player:'damageEnd',
							source:'damageSource',
						},
						forced:true,
						filter:function(event,player,name){
							if(event.player==event.source) return false;
							var target=lib.skill.twwuhun_gain.logTarget(event,player);
							if(!target||!target.isIn()) return false;
							return name=='damageEnd'||target.hasMark('twwuhun');
						},
						logTarget:function(event,player){
							if(player==event.player) return event.source;
							return event.player;
						},
						content:function(){
							var target=lib.skill.twwuhun_gain.logTarget(trigger,player);
							target.addMark('twwuhun',player==trigger.source?1:trigger.num);
							game.delayx();
						},
					},
				},
			},
			shouli:{
				audio:2,
				mod:{
					cardUsable:function(card){
						if(card.storage&&card.storage.shouli) return Infinity;
					},
				},
				enable:['chooseToUse','chooseToRespond'],
				hiddenCard:function(player,name){
					if(player!=_status.currentPhase&&(name=='sha'||name=='shan')) return true;
				},
				filter:function(event,player){
					if(event.responded||event.shouli||event.type=='wuxie') return false;
					if(game.hasPlayer(function(current){
						return current.getCards('e',card=>get.subtype(card)=='equip4').length>0;
					})&&event.filterCard({
						name:'sha',
						storage:{shouli:true},
					},player,event)) return true;
					if(game.hasPlayer(function(current){
						return current.getCards('e',card=>get.subtype(card)=='equip3').length>0;
					})&&event.filterCard({
						name:'shan',
						storage:{shouli:true},
					},player,event)) return true;
					return false;
				},
				delay:false,
				locked:false,
				filterTarget:function(card,player,target){
					var event=_status.event,evt=event;
					if(event._backup) evt=event._backup;
					var equip3=target.getCards('e',card=>get.subtype(card,false)=='equip3');
					var equip4=target.getCards('e',card=>get.subtype(card,false)=='equip4');
					if(equip3.length&&equip3.some(card=>evt.filterCard(get.autoViewAs({
						name:'shan',
						storage:{shouli:true},
					},[card]),player,event))) return true;
					return equip4.some(card=>{
						var sha=get.autoViewAs({
							name:'sha',
							storage:{shouli:true},
						},[card]);
						if(evt.filterCard(sha,player,event)){
							if(!evt.filterTarget) return true;
							return game.hasPlayer(function(current){
								return evt.filterTarget(sha,player,current);
							})
						};
					})
				},
				prompt:'将场上的一张坐骑牌当做【杀】或【闪】使用或打出',
				content:function(){
					'step 0'
					var evt=event.getParent(2);
					evt.set('shouli',true);
					var list=[];
					var equip3=target.getCards('e',card=>get.subtype(card,false)=='equip3');
					var equip4=target.getCards('e',card=>get.subtype(card,false)=='equip4');
					var backupx=_status.event;
					_status.event=evt;
					try{
						if(equip3.length&&equip3.some(card=>{
							var shan=get.autoViewAs({
								name:'shan',
								storage:{shouli:true},
							},[card]);
							if(evt.filterCard(shan,player,event)) return true;
							return false;
						})){
							list.push('shan');
						}
						if(equip4.length&&equip4.some(card=>{
							var sha=get.autoViewAs({
								name:'sha',
								storage:{shouli:true},
							},[card]);
							if(evt.filterCard(sha,player,evt)&&(!evt.filterTarget||game.hasPlayer(function(current){
								return evt.filterTarget(sha,player,current);
							}))) return true;
							return false;
						})){
							list.push('sha');
						};
					}catch(e){game.print(e)};
					_status.event=backupx;
					if(list.length==1){
						event.cardName=list[0];
						var cards=list[0]=='shan'?equip3:equip4;
						if(cards.length==1) event._result={
							bool:true,
							links:[cards[0]],
						}
						else player.choosePlayerCard(true,target,'e').set('filterButton',function(button){
							return _status.event.cards.contains(button.link);
						}).set('cards',cards)
					}
					else player.choosePlayerCard(true,target,'e').set('filterButton',function(button){
						var type=get.subtype(button.link);
						return type=='equip3'||type=='equip4';
					});
					'step 1'
					var evt=event.getParent(2);
					if(result.bool&&result.links&&result.links.length){
						var name=(event.cardName||(get.subtype(result.links[0])=='equip4'?'sha':'shan'));
						if(evt.name=='chooseToUse'){
							game.broadcastAll(function(result,name){
								lib.skill.shouli_backup.viewAs={
									name:name,
									cards:[result],
									storage:{shouli:true},
								};
								lib.skill.shouli_backup.prompt=('选择'+get.translation(name)+'（'+get.translation(result)+'）的目标');
							},result.links[0],name);
							evt.set('_backupevent','shouli_backup');
							evt.backup('shouli_backup');
							evt.set('openskilldialog','选择'+get.translation(name)+'（'+get.translation(result.links[0])+'）的目标');
							evt.set('norestore',true);
							evt.set('custom',{
								add:{},
								replace:{window:function(){}}
							});
						}
						else{
							delete evt.result.skill;
							delete evt.result.used;
							evt.result.card=get.autoViewAs({
								name:name,
								cards:[result.links[0]],
								storage:{shouli:true},
							},result.links);
							evt.result.cards=[result.links[0]];
							target.$give(result.links[0],player,false);
							if(player!=target) target.addTempSkill('fengyin');
							target.addTempSkill('shouli_thunder');
							player.addTempSkill('shouli_thunder');
							evt.redo();
							return;
						}
					}
					evt.goto(0);
				},
				ai:{
					respondSha:true,
					respondShan:true,
					skillTagFilter:function(player,tag){
						var subtype=(tag=='respondSha'?'equip4':'equip3');
						return game.hasPlayer(function(current){
							return current.hasCard(card=>get.subtype(card,false)==subtype,'e');
						});
					},
					order:2,
					result:{
						player:function(player,target){
							var att=Math.max(8,get.attitude(player,target));
							if(_status.event.type!='phase') return 9-att;
							if(!player.hasValueTarget({name:'sha'})) return 0;
							return 9-att;
						},
					},
				},
				group:'shouli_init',
				subSkill:{
					thunder:{
						charlotte:true,
						trigger:{player:'damageBegin1'},
						forced:true,
						mark:true,
						content:function(){
							trigger.num++;
							game.setNature(trigger,'thunder');
						},
						marktext:'⚡',
						intro:{
							content:'受到的伤害+1且改为雷属性',
						},
					},
					init:{
						audio:'shouli',
						trigger:{
							global:'phaseBefore',
							player:'enterGame',
						},
						forced:true,
						locked:false,
						filter:function(event,player){
							return event.name!='phase'||game.phaseNumber==0;
						},
						logTarget:()=>game.filterPlayer(),
						content:function(){
							'step 0'
							var targets=game.filterPlayer().sortBySeat(player.getNext());
							event.targets=targets;
							event.num=0;
							'step 1'
							var target=event.targets[num];
							if(target.isIn()){
								var card=get.cardPile2(function(card){
									if(get.cardtag(card,'gifts')) return false;
									var type=get.subtype(card);
									if(type!='equip3'&&type!='equip4'&&type!='equip6') return false;
									return target.canUse(card,target);
								});
								if(card) target.chooseUseTarget(card,'nopopup','noanimate',true);
							}
							event.num++;
							if(event.num<targets.length) event.redo();
						},
					},
				},
			},
			shouli_backup:{
				sourceSkill:'shouli',
				precontent:function(){
					'step 0'
					delete event.result.skill;
					var cards=event.result.card.cards;
					event.result.cards=cards;
					var owner=get.owner(cards[0]);
					event.target=owner;
					owner.$give(cards[0],player,false);
					player.popup(event.result.card.name,'metal');
					game.delayx();
					event.getParent().addCount=false;
					'step 1'
					if(player!=target) target.addTempSkill('fengyin');
					target.addTempSkill('shouli_thunder');
					player.addTempSkill('shouli_thunder');
				},
				filterCard:function(){return false},
				prompt:'请选择【杀】的目标',
				selectCard:-1,
			},
			hengwu:{
				audio:2,
				trigger:{player:['useCard','respond']},
				frequent:true,
				filter:function(event,player){
					var suit=get.suit(event.card);
					if(!lib.suit.contains(suit)||player.hasCard(function(card){
						return get.suit(card,player)==suit;
					},'h')) return false;
					return game.hasPlayer(function(current){
						return current.hasCard(function(card){
							return get.suit(card,current)==suit;
						},'e')
					})
				},
				content:function(){
					var suit=get.suit(trigger.card);
					player.draw(game.countPlayer(function(current){
						return current.countCards('e',function(card){
							return get.suit(card,current)==suit;
						});
					}));
				},
			},
			changandajian_equip5:{
				equipSkill:true,
				mod:{maxHandcard:(player,num)=>num+2},
			},
			changandajian_destroy:{
				trigger:{
					player:'loseAfter',
					global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
				},
				forced:true,
				charlotte:true,
				equipSkill:true,
				filter:function(event,player){
					var evt=event.getl(player);
					if(!evt||!evt.es||!evt.es.length) return false;
					for(var i of evt.es){
						if(i.name.indexOf('changandajian_equip')==0) return true;
					}
					return false;
				},
				getEffect:function(player,target){
					if(player==target) return 0;
					var getRaw=function(){
						var att=get.attitude(player,target);
						if(att>0){
							if(target.countCards('j',function(card){
								var cardj=card.viewAs?{name:card.viewAs}:card;
								return get.effect(target,cardj,target,player)<0;
							})>0) return 3;
							if(target.getEquip('baiyin')&&target.isDamaged()&&
								get.recoverEffect(target,player,player)>0){
								if(target.hp==1&&!target.hujia) return 1.6;
							}
							if(target.countCards('e',function(card){
								if(get.position(card)=='e') return get.value(card,target)<0;
							})>0) return 1;
						}
						var es=target.getCards('e');
						var noe=(es.length==0||target.hasSkillTag('noe'));
						var noe2=(es.filter(function(esx){
							return get.value(esx,target)>0;
						}).length==0);
						if(noe||noe2) return 0;
						if(att<=0&&!target.countCards('e')) return 1.5;
						return -1.5;
					}
					return getRaw()*get.attitude(player,target);
				},
				content:function(){
					'step 0'
					var num=0,recover=0;
					var evt=trigger.getl(player);
					for(var i of evt.es){
						if(i.name.indexOf('changandajian_equip')==0) num++;
						if(i.name=='changandajian_equip2') recover++;
					}
					if(recover>0) player.recover(recover);
					event.count=num;
					if(!game.hasPlayer(function(current){
						return current.countCards('ej')>0;
					})) event.finish();
					'step 1'
					event.count--;
					player.chooseTarget(true,'选择一名装备区或判定区有牌的角色',function(card,player,target){
						return target.countCards('ej')>0;
					}).set('ai',function(target){
						return lib.skill.changandajian_destroy.getEffect(_status.event.player,target);
					});
					'step 2'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.line(target,'green');
						player.choosePlayerCard(target,true,'ej');
					}
					else event.finish();
					'step 3'
					if(result.bool){
						var card=result.cards[0];
						var num=get.number(card);
						if([1,11,12,13].contains(num)){
							if(lib.filter.canBeGained(card,player,target)) player.gain(card,target,'give','bySelf');
						}
						else if(lib.filter.canBeDiscarded(card,player,target)) target.discard(card);
					}
					else event.finish();
					'step 4'
					if(event.count>0&&game.hasPlayer(function(current){
						return current.countCards('ej')>0;
					})) event.goto(1);
				},
			},
			dili:{
				audio:2,
				trigger:{
					global:'phaseBefore',
					player:'enterGame',
				},
				forced:true,
				filter:function(event,player){
					if(player.storage.dili) return false;
					if(event.name!='phase') return true;
					if(game.phaseNumber==0) return true;
					//让神山识能够获得东吴命运线
					return player.name=='key_shiki';
				},
				content:function(){
					player.storage.dili=true;
					var skill=['dili_shengzhi','dili_chigang','dili_qionglan','dili_quandao','dili_jiaohui','dili_yuanlv'].randomGet();
					player.addSkill(skill);
					game.log(player,'解锁了<span style="font-family: yuanli">东吴命运线</span>：','#g【'+get.translation(skill)+'】');
				},
				derivation:['dili_shengzhi','dili_chigang','dili_qionglan','dili_quandao','dili_jiaohui','dili_yuanlv','gzyinghun','hongde','rebingyi','xinfu_guanwei','bizheng','xinanguo','shelie','wengua','rebotu','rezhiheng','jiexun','reanxu','xiashu','rejieyin','oldimeng','xinfu_guanchao','drlt_jueyan','lanjiang'],
				subSkill:{
					shengzhi:{
						audio:2,
						trigger:{player:'useCard'},
						forced:true,
						filter:function(event,player){
							var num=get.number(event.card);
							if(typeof num!='number') return false;
							if(num<=1) return false;
							for(var i=2;i<=Math.sqrt(num);i++){
								if(num%i==0) return false;
							}
							if(!player.storage.yuheng) return false;
							var list=['gzyinghun','hongde','rebingyi'];
							for(var i of list){
								if(!player.storage.yuheng.contains(i)) return false;
							}
							return true;
						},
						content:function(){
							trigger.directHit.addArray(game.filterPlayer(function(current){
								return current!=player;
							}));
						},
						init:function(player,skill){
							player.markAuto('yuheng_current',['gzyinghun','hongde','rebingyi']);
						},
						mark:true,
						ai:{
							directHit_ai:true,
							skillTagFilter:function(player,tag,arg){
								if(arg&&arg.card){
									var num=get.number(arg.card);
									if(typeof num!='number') return false;
									if(num<=1) return false;
									for(var i=2;i<=Math.sqrt(num);i++){
										if(num%i==0) return false;
									}
									return true;
								}
								return false;
							},
						},
						intro:{
							name:'命运线：圣质',
							content:function(storage,player){
								var finished=[],unfinished=['gzyinghun','hongde','rebingyi'];
								if(player.storage.yuheng){
									for(var i=0;i<unfinished.length;i++){
										if(player.storage.yuheng.contains(unfinished[i])){
											finished.push(unfinished[i]);
											unfinished.splice(i--,1);
										}
									}
								}
								var str='';
								if(unfinished.length) str+=('<li>未获得：'+get.translation(unfinished)+'<br>');
								if(finished.length) str+=('<li>已获得过：'+get.translation(finished)+'<br>');
								str+='<li>锁定技。若你因〖驭衡〗获得过〖英魂〗〖弘德〗〖秉壹〗，则当你使用点数为质数的牌时，此牌不可被响应。';
								return str;
							},
						},
					},
					chigang:{
						audio:2,
						trigger:{player:'phaseJudgeBefore'},
						forced:true,
						filter:function(event,player){
							if(!player.storage.yuheng) return false;
							var list=['xinfu_guanwei','bizheng','xinanguo'];
							for(var i of list){
								if(!player.storage.yuheng.contains(i)) return false;
							}
							return true;
						},
						content:function(){
							trigger.cancel();
							var next=player.phaseDraw();
							event.next.remove(next);
							trigger.getParent().next.push(next);
						},
						init:function(player,skill){
							player.markAuto('yuheng_current',['xinfu_guanwei','bizheng','xinanguo']);
						},
						ai:{
							effect:{
								target:function(card){
									if(get.type(card)=='delay') return 'zerotarget';
								},
							},
						},
						mark:true,
						intro:{
							name:'命运线：持纲',
							content:function(storage,player){
								var finished=[],unfinished=['xinfu_guanwei','bizheng','xinanguo'];
								if(player.storage.yuheng){
									for(var i=0;i<unfinished.length;i++){
										if(player.storage.yuheng.contains(unfinished[i])){
											finished.push(unfinished[i]);
											unfinished.splice(i--,1);
										}
									}
								}
								var str='';
								if(unfinished.length) str+=('<li>未获得：'+get.translation(unfinished)+'<br>');
								if(finished.length) str+=('<li>已获得过：'+get.translation(finished)+'<br>');
								str+='<li>锁定技。若你因〖驭衡〗获得过〖观微〗〖弼政〗〖安国〗，则当你的判定阶段开始前，你跳过此阶段并获得一个额外的摸牌阶段。';
								return str;
							},
						},
					},
					qionglan:{
						audio:2,
						init:function(player,skill){
							player.markAuto('yuheng_current',['shelie','wengua','rebotu']);
						},
						trigger:{player:'useSkillAfter'},
						forced:true,
						limited:true,
						filter:function(event,player){
							if(!player.storage.yuheng||event.skill!='yuheng') return false;
							var list=['shelie','wengua','rebotu'];
							for(var i of list){
								if(!player.storage.yuheng.contains(i)) return false;
							}
							return true;
						},
						content:function(){
							player.awakenSkill('dili_qionglan');
							var list=['dili_shengzhi','dili_chigang','dili_quandao','dili_jiaohui','dili_yuanlv'];
							var list2=list.randomRemove(2);
							if(list2.contains('dili_quandao')&&list2.contains('dili_jiaohui')){
								list2.randomRemove(1);
								list2.push(list.randomGet());
							}
							for(var skill of list2){
								player.addSkill(skill);
								game.log(player,'解锁了<span style="font-family: yuanli">东吴命运线</span>：','#g【'+get.translation(skill)+'】');
							}
						},
						mark:true,
						intro:{
							name:'命运线：穹览',
							content:function(storage,player){
								var finished=[],unfinished=['shelie','wengua','rebotu'];
								if(player.storage.yuheng){
									for(var i=0;i<unfinished.length;i++){
										if(player.storage.yuheng.contains(unfinished[i])){
											finished.push(unfinished[i]);
											unfinished.splice(i--,1);
										}
									}
								}
								var str='';
								if(unfinished.length) str+=('<li>未获得：'+get.translation(unfinished)+'<br>');
								if(finished.length) str+=('<li>已获得过：'+get.translation(finished)+'<br>');
								str+='<li>锁定技，限定技。若你因〖驭衡〗获得过〖涉猎〗〖问卦〗〖博图〗，则当你发动的〖驭衡〗结算结束后，你随机获得两条其他<span style="font-family: yuanli">东吴命运线</span>。';
								return str;
							},
						},
					},
					quandao:{
						audio:2,
						mod:{
							cardname:function(card,player){
								if(player.storage.yuheng&&[1,11,12,13].contains(card.number)){
									var list=['rezhiheng','jiexun','reanxu'];
									for(var i of list){
										if(!player.storage.yuheng.contains(i)) return;
									}
									return 'tiaojiyanmei';
								}
							},
						},
						init:function(player,skill){
							player.markAuto('yuheng_current',['rezhiheng','jiexun','reanxu']);
						},
						mark:true,
						intro:{
							name:'命运线：权道',
							content:function(storage,player){
								var finished=[],unfinished=['rezhiheng','jiexun','reanxu'];
								if(player.storage.yuheng){
									for(var i=0;i<unfinished.length;i++){
										if(player.storage.yuheng.contains(unfinished[i])){
											finished.push(unfinished[i]);
											unfinished.splice(i--,1);
										}
									}
								}
								var str='';
								if(unfinished.length) str+=('<li>未获得：'+get.translation(unfinished)+'<br>');
								if(finished.length) str+=('<li>已获得过：'+get.translation(finished)+'<br>');
								str+='<li>锁定技。若你因〖驭衡〗获得过〖制衡〗〖诫训〗〖安恤〗，则你手牌区内点数为字母的牌的牌名视为【调剂盐梅】。';
								return str;
							},
						},
					},
					jiaohui:{
						audio:2,
						mod:{
							cardname:function(card,player){
								if(player.countCards('h')==1&&player.storage.yuheng){
									var list=['xiashu','rejieyin','oldimeng'];
									for(var i of list){
										if(!player.storage.yuheng.contains(i)) return;
									}
									return 'yuanjiao';
								}
							},
						},
						init:function(player,skill){
							player.markAuto('yuheng_current',['xiashu','rejieyin','oldimeng']);
						},
						mark:true,
						intro:{
							name:'命运线：交辉',
							content:function(storage,player){
								var finished=[],unfinished=['xiashu','rejieyin','oldimeng'];
								if(player.storage.yuheng){
									for(var i=0;i<unfinished.length;i++){
										if(player.storage.yuheng.contains(unfinished[i])){
											finished.push(unfinished[i]);
											unfinished.splice(i--,1);
										}
									}
								}
								var str='';
								if(unfinished.length) str+=('<li>未获得：'+get.translation(unfinished)+'<br>');
								if(finished.length) str+=('<li>已获得过：'+get.translation(finished)+'<br>');
								str+='<li>锁定技。若你因〖驭衡〗获得过〖下书〗〖结姻〗〖缔盟〗，且你的手牌数为1，则此牌的牌名视为【远交近攻】。';
								return str;
							},
						},
					},
					yuanlv:{
						audio:2,
						init:function(player,skill){
							player.markAuto('yuheng_current',['xinfu_guanchao','drlt_jueyan','lanjiang']);
						},
						trigger:{player:'useCardToTargeted'},
						forced:true,
						filter:function(event,player){
							if(get.type(event.card,false)!='equip'||player!=event.target||event.card.name.indexOf('changandajian_equip')==0) return false;
							if(!player.storage.yuheng) return false;
							var list=['xinfu_guanchao','drlt_jueyan','lanjiang'];
							for(var i of list){
								if(!player.storage.yuheng.contains(i)) return false;
							}
							var type=get.subtype(event.card);
							if(lib.card['changandajian_'+type]&&player.hasEquipableSlot(type)) return true;
							return false;
						},
						content:function(){
							var cards=trigger.cards.filterInD();
							if(cards.length>0) game.cardsDiscard(cards);
							var type=get.subtype(trigger.card);
							var card=game.createCard('changandajian_'+type,Math.random()<0.5?'spade':'heart',10);
							player.useCard(card,player);
						},
						mark:true,
						intro:{
							name:'命运线：渊虑',
							content:function(storage,player){
								var finished=[],unfinished=['xinfu_guanchao','drlt_jueyan','lanjiang'];
								if(player.storage.yuheng){
									for(var i=0;i<unfinished.length;i++){
										if(player.storage.yuheng.contains(unfinished[i])){
											finished.push(unfinished[i]);
											unfinished.splice(i--,1);
										}
									}
								}
								var str='';
								if(unfinished.length) str+=('<li>未获得：'+get.translation(unfinished)+'<br>');
								if(finished.length) str+=('<li>已获得过：'+get.translation(finished)+'<br>');
								str+='<li>锁定技。若你因〖驭衡〗获得过〖观潮〗〖决堰〗〖澜江〗，则当你成为自己使用的装备牌的目标后，你将此牌置于弃牌堆，然后使用一张与此装备牌副类别相同的【长安大舰】。';
								return str;
							},
						},
					},
				},
			},
			yuheng:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				content:function(){
					var skills=player.getSkills(null,false,false).filter(function(i){
						if(i=='yuheng') return false;
						var info=get.info(i);
						return info&&!info.charlotte&&!get.is.locked(i);
					});
					if(skills.length){
						for(var i of skills) player.removeSkill(i);
					}
					//初始化技能库
					var list1=['dili_shengzhi','dili_chigang','dili_qionglan','dili_quandao','dili_jiaohui','dili_yuanlv'];
					var list2=['gzyinghun','hongde','rebingyi','xinfu_guanwei','bizheng','xinanguo','shelie','wengua','rebotu','rezhiheng','jiexun','reanxu','xiashu','rejieyin','oldimeng','xinfu_guanchao','drlt_jueyan','lanjiang'];
					var list3=[];
					if(!player.storage.yuheng_full) player.storage.yuheng_full=list2.slice(0);
					if(player.getStorage('yuheng_current').length==0){
						for(var i=0;i<list1.length;i++){
							if(player.hasSkill(list1[i])){
								for(var j=0;j<3;j++){
									list3.add(list2[i*3+j]);
								}
							}
						}
						if(!player.storage.yuheng_current) player.storage.yuheng_current=list3.slice(0);
					}
					var fullskills,currentskills;
					//决定抽选技能范围
					if(player.storage.yuheng_full&&player.storage.yuheng_full.length) fullskills=player.storage.yuheng_full;
					else fullskills=list2.slice(0);
					if(player.storage.yuheng_current&&player.storage.yuheng_current.length) currentskills=player.storage.yuheng_current;
					else currentskills=list3.slice(0);
					var skills=[];
					//在没有发动过其他非锁定技时抽选技能
					var evtx=event.getParent('phaseUse');
					if(currentskills.length>0&&!player.hasHistory('useSkill',function(evt){
						if(evt.skill=='yuheng'||evt.type!='player'||!evt.sourceSkill) return false;
						var info1=get.info(evt.skill);
						if(info1.charlotte) return false;
						var info=get.info(evt.sourceSkill);
						if(info.charlotte||get.is.locked(evt.skill)) return false;
						return evt.event.getParent('phaseUse')==evtx;
					})){
						fullskills.randomSort();
						currentskills.randomSort();
						for(var i=0;i<fullskills.length;i++){
							for(var j=0;j<currentskills.length;j++){
								if(fullskills[i]!=currentskills[j]||(i==fullskills.length-1&&j==currentskills.length-1)){
									skills.add(fullskills.splice(i--,1)[0]);
									skills.add(currentskills.splice(j--,1)[0]);
									break;
								}
							}
							if(skills.length>0) break;
						}
					}
					//在已经发动过其他非锁定技时抽选技能
					else{
						skills.add(fullskills.randomRemove(1)[0]);
					}
					for(var i of skills){
						player.addSkillLog(i);
					}
					player.markAuto('yuheng',skills);
				},
				ai:{
					order:function(item,player){
						var evtx=_status.event.getParent('phaseUse');
						if(!player.hasHistory('useSkill',function(evt){
							if(evt.skill=='yuheng'||evt.type!='player'||!evt.sourceSkill) return false;
							var info1=get.info(evt.skill);
							if(info1.charlotte) return false;
							var info=get.info(evt.sourceSkill);
							if(info.charlotte||get.is.locked(evt.skill)) return false;
							return evt.event.getParent('phaseUse')==evtx;
						})) return 11;
						return 0.8;
					},
					result:{player:1},
				},
				group:'yuheng_losehp',
				subSkill:{
					losehp:{
						trigger:{player:'phaseUseEnd'},
						forced:true,
						locked:false,
						filter:function(event,player){
							return !player.hasHistory('useSkill',function(evt){
								if(evt.skill!='yuheng') return false;
								return evt.event.getParent('phaseUse')==event;
							});
						},
						content:function(){
							player.loseHp();
						},
					},
				},
			},
			jiufa:{
				audio:2,
				trigger:{player:['useCardAfter','respondAfter']},
				frequent:true,
				filter:function(event,player){
					return event.jiufa_counted&&player.getStorage('jiufa').length>=9;
				},
				content:function(){
					'step 0'
					player.unmarkSkill('jiufa');
					event.cards=get.cards(9);
					event.cards.sort(function(a,b){
						return get.number(b)-get.number(a);
					})
					game.cardsGotoOrdering(event.cards);
					event.videoId=lib.status.videoId++;
					game.broadcastAll(function(player,id,cards){
						var str;
						if(player==game.me&&!_status.auto){
							str='九伐：选择任意张点数满足条件的牌';
						}
						else{
							str='九伐';
						}
						var dialog=ui.create.dialog(str,cards);
						dialog.videoId=id;
					},player,event.videoId,event.cards);
					event.time=get.utc();
					game.addVideo('showCards',player,['涉猎',get.cardsInfo(event.cards)]);
					game.addVideo('delay',null,2);
					"step 1"
					var next=player.chooseButton([0,9],true);
					next.set('dialog',event.videoId);
					next.set('filterButton',function(button){
						var num=get.number(button.link),cards=_status.event.getParent().cards;
						for(var i of ui.selected.buttons){
							if(get.number(i.link)==num) return false;
						}
						for(var i of cards){
							if(i!=button.link&&get.number(i)==num) return true;
						}
						return false;
					});
					next.set('ai',function(button){
						return get.value(button.link,_status.event.player)
					});
					"step 2"
					if(result.bool&&result.links&&result.links.length){
						event.cards2=result.links;
					}
					var time=1000-(get.utc()-event.time);
					if(time>0){
						game.delay(0,time);
					}
					"step 3"
					game.broadcastAll('closeDialog',event.videoId);
					var cards2=event.cards2;
					if(cards2&&cards2.length) player.gain(cards2,'log','gain2');
				},
				marktext:'⑨',
				intro:{
					content:'已记录牌名：$',
					onunmark:true,
				},
				group:'jiufa_count',
				subSkill:{
					count:{
						trigger:{player:['useCard1','respond']},
						forced:true,
						charlotte:true,
						popup:false,
						firstDo:true,
						filter:function(event,player){
							return !player.getStorage('jiufa').contains(event.card.name);
						},
						content:function(){
							trigger.jiufa_counted=true;
							player.markAuto('jiufa',[trigger.card.name]);
						},
					},
				},
			},
			tianren:{
				audio:2,
				trigger:{global:['loseAfter','cardsDiscardAfter','loseAsyncAfter']},
				forced:true,
				filter:function(event,player){
					if(event.name.indexOf('lose')==0){
						if(event.getlx===false||event.position!=ui.discardPile) return false;
					}
					else{
						var evt=event.getParent();
						if(evt.relatedEvent&&evt.relatedEvent.name=='useCard') return false;
					}
					for(var i of event.cards){
						var owner=false;
						if(event.hs&&event.hs.contains(i)) owner=event.player;
						var type=get.type(i,null,owner);
						if(type=='basic'||type=='trick') return true;
					}
					return false;
				},
				content:function(){
					var num=0;
					for(var i of trigger.cards){
						var owner=false;
						if(trigger.hs&&trigger.hs.contains(i)) owner=trigger.player;
						var type=get.type(i,null,owner);
						if(type=='basic'||type=='trick') num++;
					}
					player.addMark('tianren',num);
				},
				group:'tianren_maxHp',
				intro:{content:'mark'},
				subSkill:{
					maxHp:{
						trigger:{player:['tianrenAfter','gainMaxHpAfter','loseMaxHpAfter']},
						forced:true,
						filter:function(event,player){
							return player.countMark('tianren')>=player.maxHp;
						},
						content:function(){
							player.removeMark('tianren',player.maxHp);
							player.gainMaxHp();
							player.draw(2);
						},
					},
				},
			},
			pingxiang:{
				audio:2,
				enable:'phaseUse',
				limited:true,
				skillAnimation:true,
				animationColor:'ice',
				filter:function(event,player){
					return player.maxHp>9;
				},
				content:function(){
					'step 0'
					player.awakenSkill('pingxiang');
					player.loseMaxHp(9);
					event.num=0;
					'step 1'
					event.num++;
					player.chooseUseTarget({
						name:'sha',
						nature:'fire',
						isCard:true,
					},'请选择火【杀】的目标（'+(event.num==9?'⑨':event.num)+'/9）',false);
					'step 2'
					if(result.bool&&event.num<9) event.goto(1);
					else{
						player.removeSkill('jiufa');
						player.addSkill('pingxiang_effect');
					}
				},
				ai:{
					order:function(){
						return get.order({
							name:'sha',
							nature:'fire',
							isCard:true,
						});
					},
					result:{
						player:function(player){
							if(player.hasValueTarget({
								name:'sha',
								nature:'fire',
								isCard:true,
							})) return 1;
							return 0;
						},
					},
				},
				subSkill:{
					effect:{
						marktext:'襄',
						intro:{content:'手牌上限基数改为体力上限'},
						mod:{
							maxHandcardBase:function(player){
								return player.maxHp;
							},
						},
					},
				},
			},
			hina_shenshi:{
				groupSkill:true,
				trigger:{player:['phaseUseBegin','phaseUseEnd']},
				frequent:true,
				filter:function(event,player){
					return player.group=='shen';
				},
				content:function(){
					'step 0'
					player.draw(2).gaintag=['hina_shenshi'];
					player.addSkill('hina_shenshi_yingbian');
					'step 1'
					var cards=player.getCards('h',function(card){
						return card.hasGaintag('hina_shenshi');
					});
					if(!cards.length) event.finish();
					else if(cards.length==1) event._result={bool:true,cards:cards};
					else player.chooseCard('h',true,'将一张“神视”牌置于牌堆顶',function(card){
						return card.hasGaintag('hina_shenshi');
					});
					'step 2'
					if(result.bool){
						game.log(player,'将一张牌置于了牌堆顶');
						player.lose(result.cards,ui.cardPile,'insert');
						player.$throw(1,1000);
					}
					else event.finish();
					'step 3'
					game.delayx();
				},
				onremove:function(player){
					player.removeGaintag('hina_shenshi');
				},
				group:'hina_shenshi_yingbian',
			},
			hina_shenshi_yingbian:{
				trigger:{player:'yingbian'},
				forced:true,
				filter:(event,player)=>event.card.isCard&&player.hasHistory('lose',evt=>evt.getParent()==event&&Object.values(evt.gaintag_map).some(value=>value.includes('hina_shenshi'))),
				content:()=>{
					if(!Array.isArray(trigger.temporaryYingbian)) trigger.temporaryYingbian=[];
					trigger.temporaryYingbian.add('force');
					trigger.temporaryYingbian.addArray(get.yingbianEffects());
				}
			},
			hina_xingzhi:{
				groupSkill:true,
				trigger:{player:'yingbian'},
				usable:1,
				filter:(event,player)=>player.group=='key'&&!event.card.yingbian&&lib.yingbian.condition.complex.has('zhuzhan'),
				content:()=>{
					'step 0'
					trigger.yingbianZhuzhanAI=(player,card,source,targets)=>cardx=>{
						if(get.attitude(player,source)<=0) return 0;
						var info=get.info(card),num=0;
						if(info&&info.ai&&info.ai.yingbian){
							var ai=info.ai.yingbian(card,source,targets,player);
							if(ai) num=ai;
						}
						return Math.max(num,6)-get.value(cardx);
					};
					trigger.afterYingbianZhuzhan=event=>event.zhuzhanresult.draw(2);
					lib.yingbian.condition.complex.get('zhuzhan')(trigger);
					'step 1'
					if(!result.bool) return;
					trigger.card.yingbian=true;
					lib.yingbian.effect.forEach(value=>game.yingbianEffect(trigger,value));
					player.addTempSkill('yingbian_changeTarget');
				}
			},
			yingba:{
				audio:2,
				mod:{
					aiOrder:function(player,card,num){
						if(num>0&&_status.event&&_status.event.type=='phase'&&get.tag(card,'recover')){
							if(player.needsToDiscard()) return num/3;
							return 0;
						}
					},
					targetInRange:function(card,player,target){
						if(target.hasMark('yingba_mark')) return true;
					}
				},
				enable:'phaseUse',
				usable:1,
				filter:(event,player)=>(game.hasPlayer((current)=>(current!=player&&current.maxHp>1))),
				filterTarget:(card,player,target)=>(target!=player&&target.maxHp>1),
				content:function(){
					'step 0'
					target.loseMaxHp();
					'step 1'
					if(target.isIn()) target.addMark('yingba_mark',1);
					player.loseMaxHp();
				},
				locked:false,
				//global:'yingba_mark',
				ai:{
					combo:'scfuhai',
					threaten:3,
					order:11,
					result:{
						player:function(player,target){
							if(player.maxHp==1) return -2.5;
							return -0.25;
						},
						target:function(player,target){
							if(target.isHealthy()) return -2;
							if(!target.hasMark('yingba_mark')) return -1;
							return -0.2;
						},
					},
				},
				subSkill:{
					mark:{
						marktext:'定',
						intro:{
							name:'平定',
							content:'mark',
							onunmark:true,
						},
						mod:{
							maxHandcard:function(player,numx){
								var num=player.countMark('yingba_mark');
								if(num) return numx+num*game.countPlayer(function(current){
									return current.hasSkill('yingba');
								});
							},
						},
					},
				},
			},
			scfuhai:{
				audio:2,
				trigger:{player:'useCardToPlayered'},
				forced:true,
				filter:function(event,player){
					return event.target&&event.target.hasMark('yingba_mark');
				},
				logTarget:'target',
				content:function(){
					trigger.directHit.add(trigger.target);
					if(player.getHistory('gain',function(evt){
						return evt.getParent(2).name=='scfuhai';
					}).length<2) player.draw();
				},
				group:['scfuhai_die'],
				ai:{
					directHit_ai:true,
					skillTagFilter:function(player,tag,arg){
						return arg&&arg.target&&arg.target.hasMark('yingba_mark')
					},
				},
				subSkill:{
					usea:{
						trigger:{player:'useCardAfter'},
						forced:true,
						filter:function(event,player){
							return lib.skill.scfuhai_usea.logTarget(event,player).length>0;
						},
						logTarget:function(event,player){
							return event.targets.filter(function(i){
								return i.hasMark('yingba_mark');
							});
						},
						content:function(){
							var num=0;
							for(var i of trigger.targets){
								var numx=i.countMark('yingba_mark');
								if(numx){
									num+=numx;
									i.removeMark('yingba_mark',numx);
								}
							}
							if(num) player.gainMaxHp(num);
						},
					},
					die:{
						trigger:{global:'die'},
						forced:true,
						filter:function(event,player){
							return event.player.countMark('yingba_mark')>0;
						},
						content:function(){
							player.gainMaxHp(trigger.player.countMark('yingba_mark'));
							player.draw(trigger.player.countMark('yingba_mark'));
						},
					},
				},
			},
			pinghe:{
				audio:2,
				mod:{
					maxHandcardBase:function(player){
						return player.getDamagedHp();
					},
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'recover')&&_status.event.type=='phase'&&!player.needsToDiscard()) return 0.2;
						}
					}
				},
				trigger:{player:'damageBegin2'},
				forced:true,
				filter:function(event,player){
					return event.source&&event.source!=player&&player.maxHp>1&&player.countCards('h')>0;
				},
				content:function(){
					'step 0'
					player.chooseCardTarget({
						prompt:'请选择【冯河】的牌和目标',
						prompt2:'将一张手牌交给一名其他角色并防止伤害'+(player.hasSkill('yingba')?'，然后令伤害来源获得一个“平定”标记':''),
						filterCard:true,
						forced:true,
						filterTarget:lib.filter.notMe,
						ai1:function(card){
							if(get.tag(card,'recover')&&!game.hasPlayer(function(current){
								return get.attitude(current,player)>0&&!current.hasSkillTag('nogain');
							})) return 0;
							return 1/Math.max(0.1,get.value(card));
						},
						ai2:function(target){
							var player=_status.event.player,att=get.attitude(player,target);
							if(target.hasSkillTag('nogain')) att/=9;
							return 4+att;
						},
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						//player.logSkill('pinghe',target);
						player.line(target,'green');
						player.give(result.cards,target);
						trigger.cancel();
						player.loseMaxHp();
						if(player.hasSkill('yingba')){
							trigger.source.addMark('yingba_mark',1);
						}
					}
				},
			},
			tianzuo:{
				audio:2,
				trigger:{
					global:'phaseBefore',
					player:'enterGame',
				},
				forced:true,
				filter:function(event,player){
					return (event.name!='phase'||game.phaseNumber==0)&&!lib.inpile.contains('qizhengxiangsheng');
				},
				content:function(){
					game.addGlobalSkill('tianzuo_global');
					var cards=[];
					for(var i=2;i<10;i++){
						cards.push(game.createCard2('qizhengxiangsheng',i%2?'club':'spade',i));
					}
					game.broadcastAll(function(){lib.inpile.add('qizhengxiangsheng')});
					game.cardsGotoPile(cards,()=>{
						return ui.cardPile.childNodes[get.rand(0,ui.cardPile.childNodes.length-1)];
					})
				},
				group:'tianzuo_remove',
				subSkill:{
					remove:{
						audio:2,
						trigger:{target:'useCardToBefore'},
						forced:true,
						priority:15,
						filter:function(event,player){
							return event.card&&event.card.name=='qizhengxiangsheng';
						},
						content:function(){
							trigger.cancel();
						},
						ai:{
							effect:{
								target:function(card,player,target){
									if(card&&card.name=='qizhengxiangsheng') return 'zerotarget';
								},
							}
						},
					},
					global:{
						trigger:{player:'useCardToPlayered'},
						forced:true,
						popup:false,
						filter:function(event,player){
							return event.card.name=='qizhengxiangsheng';
						},
						content:function(){
							'step 0'
							var target=trigger.target;
							event.target=target;
							player.chooseControl('奇兵','正兵').set('prompt','请选择'+get.translation(target)+'的标记').set('choice',function(){
								var e1=1.5*get.sgn(get.damageEffect(target,player,target));
								var e2=0;
								if(target.countGainableCards(player,'h')>0&&!target.hasSkillTag('noh')) e2=-1;
								var es=target.getGainableCards(player,'e');
								if(es.length) e2=Math.min(e2,function(){
									var max=0;
									for(var i of es) max=Math.max(max,get.value(i,target))
									return -max/4;
								}());
								if(Math.abs(e1-e2)<=0.3) return Math.random()<0.5?'奇兵':'正兵';
								if(e1<e2) return '奇兵';
								return '正兵';
							}()).set('ai',function(){
								return _status.event.choice;
							});
							'step 1'
							var map=trigger.getParent().customArgs,id=target.playerid;
							if(!map[id]) map[id]={};
							map[id].qizheng_name=result.control;
						},
					},
					rewrite:{
						audio:'tianzuo',
						trigger:{global:'useCardToTargeted'},
						filter:function(event,player){
							return event.card.name=='qizhengxiangsheng';
						},
						logTarget:'target',
						prompt2:'观看其手牌并修改“奇正相生”标记',
						content:function(){
							'step 0'
							var target=trigger.target;
							event.target=target;
							if(player!=target&&target.countCards('h')>0) player.viewHandcards(target);
							player.chooseControl('奇兵','正兵').set('prompt','请选择'+get.translation(target)+'的标记').set('choice',function(){
								var shas=target.getCards('h','sha'),shans=target.getCards('h','shan');
								var e1=1.5*get.sgn(get.damageEffect(target,player,target));
								var e2=0;
								if(target.countGainableCards(player,'h')>0&&!target.hasSkillTag('noh')) e2=-1;
								var es=target.getGainableCards(player,'e');
								if(es.length) e2=Math.min(e2,function(){
									var max=0;
									for(var i of es) max=Math.max(max,get.value(i,target))
									return -max/4;
								}());
								if(get.attitude(player,target)>0){
									if(shas.length>=Math.max(1,shans.length)) return '奇兵';
									if(shans.length>shas.length) return '正兵';
									return e1>e2?'奇兵':'正兵';
								}
								if(shas.length) e1=-0.5;
								if(shans.length) e2=-0.7;
								if(Math.abs(e1-e2)<=0.3) return Math.random()<0.5?'奇兵':'正兵';
								var rand=Math.random();
								if(e1<e2) return rand<0.1?'奇兵':'正兵';
								return rand<0.1?'正兵':'奇兵';
							}()).set('ai',()=>(_status.event.choice));
							'step 1'
							var map=trigger.getParent().customArgs,id=target.playerid;
							if(!map[id]) map[id]={};
							map[id].qizheng_name=result.control;
							map[id].qizheng_aibuff=get.attitude(player,target)>0;
						},
					},
				},
			},
			lingce:{
				audio:2,
				trigger:{global:'useCard'},
				forced:true,
				filter:function(event,player){
					return (event.card.name=='qizhengxiangsheng'||get.zhinangs().contains(event.card.name)||player.getStorage('dinghan').contains(event.card.name))&&event.card.isCard&&event.cards.length==1;
				},
				content:function(){player.draw()},
			},
			dinghan:{
				audio:2,
				trigger:{
					target:'useCardToTarget',
					player:'addJudgeBefore',
				},
				forced:true,
				locked:false,
				filter:function(event,player){
					if(event.name=='useCardToTarget'&&get.type(event.card,null,false)!='trick') return false;
					return !player.getStorage('dinghan').contains(event.card.name);
				},
				content:function(){
					player.markAuto('dinghan',[trigger.card.name]);if(trigger.name=='addJudge'){
						trigger.cancel();
						var owner=get.owner(trigger.card);
						if(owner&&owner.getCards('hej').contains(trigger.card)) owner.lose(trigger.card,ui.discardPile);
						else game.cardsDiscard(trigger.card);
						game.log(trigger.card,'进入了弃牌堆');
					}
					else{
						trigger.targets.remove(player);
						trigger.getParent().triggeredTargets2.remove(player);
						trigger.untrigger();
					}
				},
				onremove:true,
				intro:{content:'已记录牌名：$'},
				group:'dinghan_add',
				subSkill:{
					add:{
						trigger:{player:'phaseBegin'},
						direct:true,
						content:function(){
							'step 0'
							var dialog=[get.prompt('dinghan')];list1=player.getStorage('dinghan'),list2=lib.inpile.filter(function(i){
								return get.type2(i,false)=='trick'&&!list1.contains(i);
							});
							if(list1.length){
								dialog.push('<div class="text center">已记录</div>');
								dialog.push([list1,'vcard']);
							}
							if(list2.length){
								dialog.push('<div class="text center">未记录</div>');
								dialog.push([list2,'vcard']);
							}
							player.chooseButton(dialog).set('ai',function(button){
								var player=_status.event.player,name=button.link[2];
								if(player.getStorage('dinghan').contains(name)){
									return -get.effect(player,{name:name},player,player);
								}
								else{
									return get.effect(player,{name:name},player,player)*(1+player.countCards('hs',name));
								}
							});
							'step 1'
							if(result.bool){
								player.logSkill('dinghan');
								var name=result.links[0][2];
								if(player.getStorage('dinghan').contains(name)){
									player.unmarkAuto('dinghan',[name]);
									game.log(player,'从定汉记录中移除了','#y'+get.translation(name));
								}
								else{
									player.markAuto('dinghan',[name]);
									game.log(player,'向定汉记录中添加了','#y'+get.translation(name));
								}
								game.delayx();
							}
						},
					},
				},
			},
			dulie:{
				audio:2,
				trigger:{target:'useCardToTarget'},
				forced:true,
				logTarget:'player',
				filter:function(event,player){
					return event.card.name=='sha'&&event.player.hp>player.hp;
				},
				content:function(){
					'step 0'
					player.judge(function(result){
						if(get.suit(result)=='heart') return 2;
						return -1;
					}).judge2=function(result){
						return result.bool;
					};
					'step 1'
					if(result.bool){
						trigger.targets.remove(player);
						trigger.getParent().triggeredTargets2.remove(player);
						trigger.untrigger();
					}
				},
				ai:{
					effect:{
						target:function(card,player,target,current,isLink){
							if(card.name=='sha'&&!isLink&&player.hp>target.hp) return 0.5;
						},
					},
				},
				marktext:'围',
				intro:{
					name:'破围(围)',
					name2:'围',
					content:'mark',
				},
			},
			tspowei:{
				audio:3,
				dutySkill:true,
				derivation:'shenzhu',
				group:['tspowei_init','tspowei_move','tspowei_achieve','tspowei_fail','tspowei_use','tspowei_remove'],
				subSkill:{
					remove:{
						audio:'tspowei3',
						trigger:{global:'damageEnd'},
						filter:function(event,player){
							return event.player&&event.player.isIn()&&event.player.hasMark('dulie');
						},
						forced:true,
						logTarget:'player',
						content:function(){
							trigger.player.removeMark('dulie',trigger.player.countMark('dulie'));
						},
					},
					use:{
						audio:'tspowei3',
						trigger:{global:'phaseBegin'},
						direct:true,
						filter:function(event,player){
							return event.player!=player&&event.player.hasMark('dulie')&&
								(player.countCards('h')>0||player.hp>=event.player.hp&&event.player.countCards('h')>0);
						},
						content:function(){
							'step 0'
							var list=[],target=trigger.player,choiceList=[
								'弃置一张牌并对其造成1点伤害',
								'获得其一张手牌',
							];
							event.target=target;
							if(player.hasCard(function(card){
								return lib.filter.cardDiscardable(card,player,'tspowei_use');
							},'h')) list.push('选项一');
							else choiceList[0]='<span style="opacity:0.5">'+choiceList[0]+'</span>';
							if(player.hp>=target.hp&&target.countCards('h')>0) list.push('选项二');
							else choiceList[1]='<span style="opacity:0.5">'+choiceList[1]+'</span>';
							player.chooseControl(list,'cancel2').set('prompt',get.prompt('tspowei',target)).set('choiceList',choiceList).set('ai',function(){
								var evt=_status.event.getParent();
								if(evt.player.hasCard(function(card){
									return lib.filter.cardDiscardable(card,evt.player,'tspowei_use')&&get.value(card,evt.player)<7;
								},'h')&&get.damageEffect(evt.target,evt.player,evt.player)>0) return '选项一';
								if(evt.player.hp>=evt.target.hp&&evt.target.countCards('h')>0&&get.attitude(evt.player,evt.target)<=0&&!evt.target.hasSkillTag('noh')) return '选项二';
								return 'cancel2';
							});
							'step 1'
							if(result.control!='cancel2'){
								if(result.control=='选项二'){
									player.logSkill('tspowei_use',target);
									player.gainPlayerCard(target,'h',true);
									event.goto(3);
								}
							}
							else event.finish();
							'step 2'
							player.chooseToDiscard('h',true).logSkill=['tspowei_use',target];
							if(get.mode()!='identity'||player.identity!='nei') player.addExpose(0.2);
							target.damage();
							'step 3'
							player.addTempSkill('tspowei_inRange');
						},
						ai:{expose:0.2},
					},
					inRange:{
						charlotte:true,
						mod:{
							inRangeOf:function(from,to){
								if(from==_status.currentPhase) return true;
							},
						},
					},
					init:{
						audio:'tspowei3',
						trigger:{
							global:'phaseBefore',
							player:'enterGame',
						},
						forced:true,
						filter:function(event,player){
							return event.name!='phase'||game.phaseNumber==0;
						},
						logTarget:function(event,player){
							return game.filterPlayer((current)=>current!=player&&!current.hasMark('dulie'));
						},
						content:function(){
							var list=game.filterPlayer((current)=>current!=player&&!current.hasMark('dulie')).sortBySeat();
							for(var i of list) i.addMark('dulie',1,false);
						},
					},
					move:{
						audio:'tspowei3',
						trigger:{player:'phaseBegin'},
						forced:true,
						filter:function(event,player){
							return game.hasPlayer((current)=>current!=player&&current.hasMark('dulie'));
						},
						content:function(){
							var list=game.filterPlayer((current)=>current!=player&&current.hasMark('dulie')).sortBySeat();
							var map={};
							for(var i of list){
								var num=i.countMark('dulie');
								i.removeMark('dulie',num);
								map[i.playerid]=num;
							}
							for(var i of list){
								var next=i.next;
								if(next==player) next=next.next;
								next.addMark('dulie',map[i.playerid]);
							}
						},
					},
					achieve:{
						audio:'tspowei1',
						trigger:{player:'phaseBegin'},
						forced:true,
						skillAnimation:true,
						animationColor:'metal',
						filter:function(event,player){
							return !game.hasPlayer(function(current){
								return current.hasMark('dulie');
							});
						},
						content:function(){
							game.log(player,'成功完成使命');
							player.awakenSkill('tspowei');
							player.addSkillLog('shenzhu');
						},
					},
					fail:{
						audio:'tspowei2',
						trigger:{player:'dying'},
						forced:true,
						content:function(){
							'step 0'
							game.log(player,'使命失败');
							player.awakenSkill('tspowei');
							if(player.hp<1) player.recover(1-player.hp);
							'step 1'
							var num=player.countCards('e');
							if(num>0) player.chooseToDiscard('e',true,num);
						},
					},
				},
			},
			tspowei1:{audio:true},
			tspowei2:{audio:true},
			tspowei3:{audio:true},
			shenzhu:{
				audio:2,
				trigger:{player:'useCardAfter'},
				forced:true,
				filter:function(event,player){
					return event.card.name=='sha'&&event.card.isCard&&event.cards.length==1;
				},
				content:function(){
					'step 0'
					player.chooseControl().set('choiceList',[
						'摸一张牌，且本回合使用【杀】的次数上限+1',
						'摸三张牌，且本回合不能再使用【杀】',
					]).set('ai',()=>_status.event.player.hasSha()?0:1);
					'step 1'
					if(result.index==0){
						player.draw();
						player.addTempSkill('shenzhu_more');
						player.addMark('shenzhu_more',1,false);
					}
					else{
						player.draw(3);
						player.addTempSkill('shenzhu_less');
					}
				},
				subSkill:{
					more:{
						charlotte:true,
						onremove:true,
						mod:{
							cardUsable:function(card,player,num){
								if(card.name=='sha') return num+player.countMark('shenzhu_more');
							},
						},
					},
					less:{
						charlotte:true,
						mod:{
							cardEnabled:function(card){
								if(card.name=='sha') return false;
							}
						},
					},
				},
			},
			dangmo:{
				audio:2,
				trigger:{player:'useCard2'},
				direct:true,
				filter:function(event,player){
					if(event.card.name!='sha'||player.hp<=1) return false;
					var evt=event.getParent('phaseUse');
					return evt&&evt.player==player&&player.getHistory('useCard',function(evtx){
						return evtx.card.name=='sha'&&evtx.getParent('phaseUse')==evt;
					})[0]==event&&game.hasPlayer(function(current){
						return !event.targets.contains(current)&&lib.filter.filterTarget(event.card,player,current);
					});
				},
				content:function(){
					'step 0'
					var num=Math.min(player.hp-1,game.countPlayer(function(current){
						return !trigger.targets.contains(current)&&lib.filter.filterTarget(trigger.card,player,current);
					}));
					player.chooseTarget(get.prompt('dangmo'),'为'+get.translation(trigger.card)+'增加至多'+get.translation(num)+'个目标',[1,num],function(card,player,target){
						var evt=_status.event.getTrigger();
						return !evt.targets.contains(target)&&lib.filter.filterTarget(evt.card,player,target);
					}).set('ai',function(target){
						var evt=_status.event.getTrigger(),eff=get.effect(target,evt.card,evt.player,evt.player);
						if(player.hasSkill('tspowei')&&target.hasMark('dulie')) return 4*eff;
						return eff;
					});
					'step 1'
					if(result.bool){
						if(player!=game.me&&!player.isOnline()) game.delayx();
						event.targets=result.targets;
					}
					else event.finish();
					'step 2'
					player.logSkill('dangmo',targets);
					trigger.targets.addArray(targets);
				},
			},
			reshuishi:{
				audio:'shuishi',
				enable:'phaseUse',
				usable:1,
				frequent:true,
				filter:function(event,player){
					return player.maxHp<10;
				},
				content:function(){
					'step 0'
					event.cards=[];
					event.suits=[];
					'step 1'
					player.judge(function(result){
						var evt=_status.event.getParent('reshuishi');
						if(evt&&evt.suits&&evt.suits.contains(get.suit(result))) return 0;
						return 1;
					}).set('callback',lib.skill.reshuishi.callback).judge2=function(result){
						return result.bool?true:false;
					};
					'step 2'
					var cards=cards.filterInD();
					if(cards.length) player.chooseTarget('将'+get.translation(cards)+'交给一名角色',true).set('ai',function(target){
						var player=_status.event.player;
						var att=get.attitude(player,target)/Math.sqrt(1+target.countCards('h'));
						if(target.hasSkillTag('nogain')) att/=10;
						return att;
					});
					else event.finish();
					'step 3'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.line(target,'green');
						target.gain(cards,'gain2').giver=player;
					}
					else event.finish();
					'step 4'
					if(target.isMaxHandcard()) player.loseMaxHp();
				},
				callback:function(){
					'step 0'
					var evt=event.getParent(2);
					event.getParent().orderingCards.remove(event.judgeResult.card);
					evt.cards.push(event.judgeResult.card);
					if(event.getParent().result.bool&&player.maxHp<10){
						evt.suits.push(event.getParent().result.suit);
						player.gainMaxHp();
						player.chooseBool('是否继续发动【慧识】？').set('frequentSkill','reshuishi');
					}
					else event._result={bool:false};
					'step 1'
					if(result.bool) event.getParent(2).redo();
				},
				ai:{
					order:9,
					result:{
						player:1,
					},
				},
			},
			shuishi:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.maxHp<10;
				},
				filterTarget:true,
				content:function(){
					'step 0'
					target.draw();
					'step 1'
					if(!result||!Array.isArray(result)||result.length!=1||get.itemtype(result[0])!='card'){
						event.finish();
						return;
					}
					var suit=get.suit(result[0]),hs=target.getCards('h');
					for(var i of hs){
						if(i!=result[0]&&get.suit(i,target)==suit){
							player.loseMaxHp();
							target.showHandcards();
							event.finish();
							return;
						}
					}
					player.gainMaxHp();
					'step 2'
					if(player.maxHp<10){
						player.chooseBool('是否继续发动【慧识】？');
					}
					else event.finish();
					'step 3'
					if(result.bool) event.goto(0);
				},
				ai:{
					order:0.5,
					result:{
						target:0.2,
						player:function(player,target){
							var list=[],hs=target.getCards('h');
							for(var i of hs) list.add(get.suit(i,target));
							if(list.length==0) return 0;
							if(list.length==1) return player.maxHp>2?0:-2;
							if(list.length==2) return player.maxHp>3?0:-2;
							return -2;
						},
					},
				},
			},
			stianyi:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				juexingji:true,
				skillAnimation:true,
				animationColor:'gray',
				filter:function(event,player){
					return !game.hasPlayer(function(current){
						return current.getAllHistory('damage').length==0;
					});
				},
				content:function(){
					'step 0'
					player.awakenSkill('stianyi');
					player.gainMaxHp(2);
					player.recover();
					'step 1'
					player.chooseTarget(true,'令一名角色获得技能〖佐幸〗').set('ai',function(target){
						return get.attitude(_status.event.player,target);
					});
					'step 2'
					if(result.bool){
						var target=result.targets[0];
						player.line(target,'green');
						target.storage.zuoxing=player;
						target.addSkill('zuoxing');
					}
				},
				derivation:'zuoxing',
			},
			zuoxing:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					var target=player.storage.zuoxing;
					if(!target||!target.isIn()||target.maxHp<2) return false;
					for(var i of lib.inpile){
						if(get.type(i)=='trick'&&event.filterCard({name:i,isCard:true},player,event)) return true;
					}
					return false;
				},
				chooseButton:{
					dialog:function(event,player){
						var list=[];
						for(var i of lib.inpile){
							if(get.type(i)=='trick'&&event.filterCard({name:i,isCard:true},player,event)) list.push(['锦囊','',i]);
						}
						return ui.create.dialog('佐幸',[list,'vcard']);
					},
					check:function(button){
						return _status.event.player.getUseValue({name:button.link[2],isCard:true});
					},
					backup:function(links,player){
						return {
							viewAs:{
								name:links[0][2],
								isCard:true,
							},
							filterCard:()=>false,
							selectCard:-1,
							popname:true,
							precontent:function(){
								player.logSkill('zuoxing');
								var target=player.storage.zuoxing;
								target.loseMaxHp();
								//delete event.result.skill;
							},
						}
					},
					prompt:function(links,player){
						return '请选择'+get.translation(links[0][2])+'的目标';
					},
				},
				ai:{order:1,result:{player:1}},
			},
			resghuishi:{
				audio:'sghuishi',
				inherit:'sghuishi',
				filterTarget:true,
				prompt:function(){
					var player=_status.event.player;
					if(player.maxHp>=game.players.length) return '选择一名角色。若其拥有未发动过的觉醒技，则你解除其中一个觉醒技的发动限制；否则其摸四张牌。然后你减2点体力上限。';
					return '令一名角色摸四张牌，然后你减2点体力上限。';
				},
				content:function(){
					'step 0'
					player.awakenSkill('resghuishi');
					var list=target.getSkills(null,false,false).filter(function(skill){
						var info=lib.skill[skill];
						return info&&info.juexingji&&!target.awakenedSkills.contains(skill);
					});
					if(player.maxHp>=game.players.length&&list.length>0){
						if(list.length==1) event._result={control:list[0]};
						else player.chooseControl(list).set('prompt','选择一个觉醒技，令'+get.translation(target)+'可无视条件发动该技能');
					}
					else{
						target.draw(4);
						event.goto(2);
					}
					'step 1'
					target.storage.resghuishi_mark=result.control;
					target.markSkill('resghuishi_mark');
					var info=lib.skill[result.control];
					if(info.filter&&!info.charlotte&&!info.resghuishi_filter){
						info.resghuishi_filter=info.filter;
						info.filter=function(event,player){
							if(player.storage.resghuishi_mark) return true;
							return this.resghuishi_filter.apply(this,arguments);
						}
					}
					'step 2'
					player.loseMaxHp(2);
				},
				intro:{content:'未发动'},
				ai:{
					order:0.1,
					expose:0.2,
					result:{
						target:function(player,target){
							if(target!=player&&player.hasUnknown()||player.maxHp<(player.getDamagedHp()>1?5:6)) return 0;
							if(target==player&&player.hasSkill('resghuishi')&&game.hasPlayer(function(current){
								return current.getAllHistory('damage').length==0;
							})) return 4;
							var list=target.getSkills(null,false,false).filter(function(skill){
								var info=lib.skill[skill];
								return info&&info.juexingji&&!target.awakenedSkills.contains(skill);
							});
							if(list.length||target.hasJudge('lebu')||target.hasSkillTag('nogain')) return 0;
							return 4;
						},
					},
				},
				subSkill:{mark:{intro:{content:'发动【$】时无视条件'}}},
			},
			sghuishi:{
				audio:2,
				enable:'phaseUse',
				limited:true,
				skillAnimation:true,
				animationColor:'water',
				filterTarget:lib.filter.notMe,
				content:function(){
					'step 0'
					player.awakenSkill('sghuishi');
					var list=target.getSkills(null,false,false).filter(function(skill){
						var info=lib.skill[skill];
						return info&&info.juexingji;
					});
					if(list.length){
						target.addMark('sghuishi',1,false);
						for(var i of list){
							var info=lib.skill[i];
							if(info.filter&&!info.charlotte&&!info.sghuishi_filter){
								info.sghuishi_filter=info.filter;
								info.filter=function(event,player){
									if(player.hasMark('sghuishi')) return true;
									return this.sghuishi_filter.apply(this,arguments);
								}
							}
						}
					}
					else target.draw(4);
					player.loseMaxHp(2);
				},
				intro:{content:'发动非Charlotte觉醒技时无视条件'},
				ai:{
					order:0.1,
					expose:0.2,
					result:{
						target:function(player,target){
							if(player.hasUnknown()||player.maxHp<5) return 0;
							var list=target.getSkills(null,false,false).filter(function(skill){
								var info=lib.skill[skill];
								return info&&info.juexingji;
							});
							if(list.length||target.hasJudge('lebu')||target.hasSkillTag('nogain')) return 0;
							return 4;
						},
					},
				},
			},
			zhanjiang:{
				trigger:{player:'phaseZhunbeiBegin'},
				filter:function(event,player){
					var players=game.filterPlayer();
					for(var i=0;i<players.length;i++){
						if(players[i]!=player&&players[i].getEquips('qinggang').length>0){
							return true;
						}
					}
				},
				content:function(){
					var players=game.filterPlayer();
					for(var i=0;i<players.length;i++){
						if(players[i]!=player){
							var e=players[i].getEquips('qinggang');
							if(e.length>0){
								player.line(players[i],'green');
								player.gain(e,players[i],'give','bySelf');
							}
						}
					}
				}
			},
			boss_juejing:{
				audio:'juejing',
				trigger:{player:'phaseDrawBefore'},
				forced:true,
				content:function(){
					trigger.cancel();
				},
				ai:{
					noh:true,
					nogain:true,
				},
				group:'boss_juejing2'
			},
			boss_juejing2:{
				audio:'juejing',
				trigger:{
					player:'loseAfter',
					global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
				},
				forced:true,
				filter:function(event,player){
					if(event.name=='gain'&&event.player==player) return player.countCards('h')>4;
					var evt=event.getl(player);
					if(!evt||!evt.hs||evt.hs.length==0||player.countCards('h')>=4) return false;
					var evt=event;
					for(var i=0;i<4;i++){
						evt=evt.getParent('boss_juejing2');
						if(evt.name!='boss_juejing2') return true;
					}
					return false;
				},
				content:function(){
					var num=4-player.countCards('h');
					if(num>0) player.draw(num);
					else player.chooseToDiscard('h',true,-num);
				},
			},
			meihun:{
				audio:2,
				trigger:{
					player:'phaseJieshuBegin',
					target:'useCardToTargeted',
				},
				direct:true,
				filter:function(event,player){
					if(event.name!='phaseJieshu'&&event.card.name!='sha') return false;
					return game.hasPlayer(function(current){
						return current!=player&&current.countCards('h');
					});
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('meihun'),function(card,player,target){
						return target!=player&&target.countCards('h')>0;
					}).set('ai',function(target){
						var player=_status.event.player;
						var att=get.attitude(player,target);
						if(att>0) return 0;
						return 0.1-att/target.countCards('h');
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('meihun',target);
						event.target=target;
						player.chooseControl(lib.suit).set('prompt','请选择一种花色').set('ai',function(){
							return lib.suit.randomGet();
						})
					}
					else event.finish();
					'step 2'
					var suit=result.control;
					player.chat(get.translation(suit+2));
					game.log(player,'选择了','#y'+get.translation(suit+2))
					if(target.countCards('h',{suit:suit})){
						target.chooseCard('h','交给'+get.translation(player)+'一张'+get.translation(suit)+'花色的手牌',true,function(card,player){
							return get.suit(card,player)==_status.event.suit;
						}).set('suit',suit);
					}
					else{
						player.discardPlayerCard(target,true,'h','visible');
						event.finish();
					}
					'step 3'
					if(result.bool&&result.cards&&result.cards.length) target.give(result.cards,player,'give');
				},
			},
			//Connect Mode support after Angel Beats! -2nd beat-
			huoxin:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					if(game.countPlayer()<3) return false;
					for(var i of lib.suit){
						if(player.countCards('h',{suit:i})>1) return true;
					}
					return false;
				},
				complexCard:true,
				position:'h',
				filterCard:function(card,player){
					if(!ui.selected.cards.length){
						var suit=get.suit(card);
						return player.countCards('h',function(card2){
							return card!=card2&&get.suit(card2,player)==suit;
						})>0;
					}
					return get.suit(card,player)==get.suit(ui.selected.cards[0],player);
				},
				selectCard:2,
				selectTarget:2,
				filterTarget:lib.filter.notMe,
				multitarget:true,
				multiline:true,
				delay:false,
				discard:false,
				lose:false,
				check:function(card){
					return 6-get.value(card);
				},
				targetprompt:['拼点发起人','拼点目标'],
				content:function(){
					'step 0'
					var list=[];
					for(var i=0;i<targets.length;i++){
						list.push([targets[i],cards[i]]);
					}
					game.loseAsync({
						gain_list:list,
						player:player,
						cards:cards,
						giver:player,
						animate:'giveAuto',
					}).setContent('gaincardMultiple');
					'step 1'
					game.delayx();
					if(targets[0].canCompare(targets[1])){
						targets[0].chooseToCompare(targets[1]);
					}
					else event.finish();
					'step 2'
					if(result.winner!==targets[0]) targets[0].addMark('huoxin',1);
					if(result.winner!==targets[1]) targets[1].addMark('huoxin',1);
				},
				marktext:'魅',
				intro:{
					name:'魅惑',
					name2:'魅惑',
					content:'mark',
				},
				group:'huoxin_control',
				ai:{
					order:1,
					result:{
						target:function(player,target){
							if(target.hasMark('huoxin')) return -2;
							return -1;
						},
					},
				},
			},
			huoxin_control:{
				audio:'huoxin',
				forced:true,
				trigger:{global:'phaseBeginStart'},
				filter:function(event,player){
					return player!=event.player&&!event.player._trueMe&&event.player.countMark('huoxin')>1;
				},
				logTarget:'player',
				skillAnimation:true,
				animationColor:'key',
				content:function(){
					trigger.player.removeMark('huoxin',trigger.player.countMark('huoxin'));
					trigger.player._trueMe=player;
					game.addGlobalSkill('autoswap');
					if(trigger.player==game.me){
						game.notMe=true;
						if(!_status.auto) ui.click.auto();
					}
					trigger.player.addSkill('huoxin2');
				},
			},
			huoxin2:{
				trigger:{
					player:['phaseAfter','dieAfter'],
					global:'phaseBeforeStart',
				},
				lastDo:true,
				charlotte:true,
				forceDie:true,
				forced:true,
				silent:true,
				content:function(){
					player.removeSkill('huoxin2');
				},
				onremove:function(player){
					if(player==game.me){
						if(!game.notMe) game.swapPlayerAuto(player._trueMe)
						else delete game.notMe;
						if(_status.auto) ui.click.auto();
					}
					delete player._trueMe;
				},
			},
			shiki_omusubi:{
				audio:2,
				trigger:{global:'roundStart'},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('shiki_omusubi'),lib.filter.notMe).set('ai',function(target){
						var player=_status.event.player;
							if(player.isHealthy()) return 0;
							if(player.hp<3&&player.getDamagedHp()<2) return 0;
							var list=[];
							if(lib.character[target.name]) list.addArray(lib.character[target.name][3]);
							if(lib.character[target.name1]) list.addArray(lib.character[target.name1][3]);
							if(lib.character[target.name2]) list.addArray(lib.character[target.name2][3]);
							list=list.filter(function(i){
								return !player.hasSkill(i);
							});
							if(!list.length) return 0;
						return 1+Math.random();
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('shiki_omusubi',target);
						player.loseMaxHp();
						var list=[];
						if(lib.character[target.name]) list.addArray(lib.character[target.name][3]);
						if(lib.character[target.name1]) list.addArray(lib.character[target.name1][3]);
						if(lib.character[target.name2]) list.addArray(lib.character[target.name2][3]);
						player.addSkill(list);
						game.broadcastAll(function(list){
							lib.character.key_shiki[3].addArray(list);
							game.expandSkills(list);
							for(var i of list){
								var info=lib.skill[i];
								if(!info) continue;
								if(!info.audioname2) info.audioname2={};
								info.audioname2.key_shiki='shiki_omusubi';
							}
						},list);
					}
				},
			},
			kagari_zongsi:{
				enable:'phaseUse',
				usable:1,
				content:function(){
					'step 0'
					var controls=[];
					if(ui.cardPile.hasChildNodes()) controls.push('选择牌堆中的一张牌');
					if(ui.discardPile.hasChildNodes()) controls.push('选择弃牌堆中的一张牌');
					if(game.hasPlayer(function(current){
						return current.countCards('hej')>0;
					})) controls.push('选择一名角色区域内的一张牌');
					if(!controls.length){event.finish();return;}
					event.controls=controls;
					var next=player.chooseControl();
					next.set('choiceList',controls)
					next.set('prompt','请选择要移动的卡牌的来源');
					next.ai=function(){return 0};
					'step 1'
					result.control=event.controls[result.index];
					var list=['弃牌堆','牌堆','角色'];
					for(var i=0;i<list.length;i++){
						if(result.control.indexOf(list[i])!=-1){event.index=i;break;}
					}
					if(event.index==2){
						player.chooseTarget('请选择要移动的卡牌的来源',true,function(card,kagari,target){
							return target.countCards('hej')>0;
						});
					}
					else{
						var source=ui[event.index==0?'discardPile':'cardPile'].childNodes;
						var list=[];
						for(var i=0;i<source.length;i++) list.push(source[i]);
						player.chooseButton(['请选择要移动的卡牌',list],true).ai=get.buttonValue;
					}
					'step 2'
					if(event.index==2){
						player.line(result.targets[0]);
						event.target1=result.targets[0];
						player.choosePlayerCard(result.targets[0],true,'hej').set('visible',true);
					}
					else{
						event.card=result.links[0];
					}
					'step 3'
					if(event.index==2) event.card=result.cards[0];
					var controls=[
						'将这张牌移动到牌堆的顶部或者底部',
						'将这张牌移动到弃牌堆的顶部或者底部',
						'将这张牌移动到一名角色对应的区域里',
					];
					event.controls=controls;
					var next=player.chooseControl();
					next.set('prompt','要对'+get.translation(event.card)+'做什么呢？');
					next.set('choiceList',controls);
					next.ai=function(){return 2};
					'step 4'
					result.control=event.controls[result.index];
					var list=['弃牌堆','牌堆','角色'];
					for(var i=0;i<list.length;i++){
						if(result.control.indexOf(list[i])!=-1){event.index2=i;break;}
					}
					if(event.index2==2){
						player.chooseTarget('要将'+get.translation(card)+'移动到哪一名角色的对应区域呢',true).ai=function(target){
							return target==_status.event.player?1:0;
						};
					}
					else{
						player.chooseControl('顶部','底部').set('prompt','把'+get.translation(card)+'移动到'+(event.index2==0?'弃':'')+'牌堆的...');
					}
					'step 5'
					if(event.index2!=2){
						//if(event.target1) event.target1.lose(card,ui.special);
						//else card.goto(ui.special);
						event.way=result.control;
					}
					else{
						event.target2=result.targets[0];
						var list=['手牌区'];
						if(lib.card[card.name].type=='equip'&&event.target2.canEquip(card)) list.push('装备区');
						if(lib.card[card.name].type=='delay'&&!event.target2.isDisabledJudge()&&!event.target2.hasJudge(card.name)) list.push('判定区');
						if(list.length==1) event._result={control:list[0]};
						else{
							player.chooseControl(list).set('prompt','把'+get.translation(card)+'移动到'+get.translation(event.target2)+'的...').ai=function(){return 0};
						}
					}
					'step 6'
					if(event.index2!=2){
						var node=ui[event.index==0?'discardPile':'cardPile'];
						if(event.target1){
							var next=event.target1.lose(card,event.position);
							if(event.way=='顶部') next.insert_card=true;
						}
						else{
							if(event.way=='底部') node.appendChild(card);
							else node.insertBefore(card,node.firstChild);
						}
						game.updateRoundNumber();
						event.finish();
					}
					else{
						if(result.control=='手牌区'){
							var next=event.target2.gain(card);
							if(event.target1){
								next.source=event.target1;
								next.animate='giveAuto';
							}
							else next.animate='draw';
						}
						else if(result.control=='装备区'){
							if(event.target1) event.target1.$give(card,event.target2);
							event.target2.equip(card);
						}
						else{
							if(event.target1) event.target1.$give(card,event.target2);
							event.target2.addJudge(card);
						}
					}
					'step 7'
					game.updateRoundNumber();
				},
				ai:{
					order:10,
					result:{player:1},
				},
			},
			
			caopi_xingdong:{
				audio:'olfangquan',
				audioname:['shen_caopi'],
				subSkill:{
					mark:{
						mark:true,
						marktext:'令',
						intro:{
							content:'跳过下个回合的判定阶段和摸牌阶段',
						},
					},
				},
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('h',lib.skill.caopi_xingdong.filterCard);
				},
				filterCard:function(card){
					return card.name=='sha'||get.type(card)=='trick';
				},
				check:function(card){return 1},
				filterTarget:lib.filter.notMe,
				discard:false,
				lose:false,
				delay:0,
				content:function(){
					'step 0'
					player.give(cards,target);
					'step 1'
					if(!target.getCards('h').contains(cards[0])) event._result={bool:false};
					else target.chooseUseTarget(cards[0],game.filterPlayer(function(current){
						return current!=player;
					}),'请使用得到的牌，或者跳过下回合的判定阶段和摸牌阶段');
					'step 2'
					if(result.bool) game.asyncDraw([player,target]);
					else{
						target.addTempSkill('caopi_xingdong_mark','phaseJudgeSkipped');
						target.skip('phaseJudge');
						target.skip('phaseDraw');
						event.finish();
					}
					'step 3'
					game.delay();
				},
				ai:{
					order:12,
					result:{
						target:function(player,target){
							var card=ui.selected.cards[0];
							if(target.hasSkill('pingkou')) return 1;
							if(!card) return 0;
							var info=get.info(card);
							if(info.selectTarget==-1){
								var eff=0;
								game.countPlayer(function(current){
									if(current!=player&&target.canUse(card,current)) eff+=get.effect(current,card,target,target)>0
								});
								if(eff>0||get.value(card)<3) return eff;
								return 0;
							}
							else if(game.hasPlayer(function(current){
								return current!=player&&target.canUse(card,current)&&get.effect(current,card,target,target)>0
							})) return 1.5;
							else if(get.value(card)<3) return -1;
							return 0;
						},
					},
				},
			},
			shenfu:{
				audio:2,
				trigger:{player:'phaseEnd'},
				direct:true,
				content:function(){
					'step 0'
					event.logged=false;
					//event.targets=[];
					event.goto(player.countCards('h')%2==1?1:4);
					'step 1'
					player.chooseTarget(get.prompt('shenfu'),'对一名其他角色造成1点雷属性伤害',lib.filter.notMe).set('ai',function(target){
						var player=_status.event.player;
						return get.damageEffect(target,player,player,'thunder')*(target.hp==1?2:1);
					});
					'step 2'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						if(!event.logged){
							event.logged=true;
							player.logSkill('shenfu',target,'thunder');
						}
						else player.line(target,'thunder');
						target.damage('thunder');
					}
					else event.finish();
					'step 3'
					if(target.isDead()) event.goto(1);
					else event.finish();
					'step 4'
					player.chooseTarget(get.prompt('shenfu'),'令一名角色摸一张牌或弃置其一张手牌'/*,function(card,player,target){
						return !_status.event.getParent().targets.contains(target);
					}*/).set('ai',function(target){
						var att=get.attitude(_status.event.player,target);
						var delta=target.hp-target.countCards('h');
						if(Math.abs(delta)==1&&get.sgn(delta)==get.sgn(att)) return 3*Math.abs(att);
						if(att>0||target.countCards('h')>0) return Math.abs(att);
						return 0;
					});
					'step 5'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						if(!event.logged){
							event.logged=true;
							player.logSkill('shenfu',target);
						}
						else player.line(target,'green');
						//targets.push(target);
						if(target.countCards('h')==0) event._result={index:0};
						else player.chooseControl('摸一张牌','弃置一张手牌').set('prompt','选择一项令'+get.translation(target)+'执行…').set('goon',get.attitude(player,target)>0?0:1).set('ai',()=>_status.event.goon);
						//else player.discardPlayerCard(target,'h','弃置'+get.translation(target)+'一张手牌，或点【取消】令其摸一张牌。');
					}
					else event.finish();
					'step 6'
					if(result.index==0) target.draw();
					else target.chooseToDiscard('h',true);
					'step 7'
					if(target.hp==target.countCards('h')) event.goto(4);
				},
				ai:{expose:0.25},
			},
			qixian:{
				mod:{
					maxHandcardBase:function(player,num){
						return 7;
					},
				},
			},
			chuyuan:{
				audio:2,
				trigger:{global:'damageEnd'},
				filter:function(event,player){
					return event.player.isIn()&&player.getExpansions('chuyuan').length<player.maxHp;
				},
				logTarget:'player',
				locked:false,
				content:function(){
					'step 0'
					trigger.player.draw();
					'step 1'
					if(!trigger.player.countCards('h')) event.finish();
					else trigger.player.chooseCard('h',true,'选择一张牌置于'+get.translation(player)+'的武将牌上作为「储」');
					'step 2'
					player.addToExpansion(result.cards,trigger.player,'give').gaintag.add('chuyuan');
				},
				intro:{
					content:'expansion',
					markcount:'expansion',
				},
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				ai:{combo:'dengji'},
			},
			dengji:{
				audio:2,
				derivation:['tianxing','new_rejianxiong','rerende','rezhiheng','olluanji','caopi_xingdong'],
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				unique:true,
				juexingji:true,
				skillAnimation:true,
				animationColor:'water',
				filter:function(event,player){
					return player.getExpansions('chuyuan').length>=3;
				},
				content:function(){
					player.awakenSkill(event.name);
					player.addSkill('tianxing');
					player.addSkill('new_rejianxiong');
					player.loseMaxHp();
					player.gain(player.getExpansions('chuyuan'),'gain2','fromStorage');
				},
			},
			tianxing:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				unique:true,
				juexingji:true,
				skillAnimation:true,
				animationColor:'thunder',
				filter:function(event,player){
					return player.getExpansions('chuyuan').length>=3;
				},
				content:function(){
					'step 0'
					player.awakenSkill(event.name);
					player.loseMaxHp();
					player.gain(player.getExpansions('chuyuan'),'gain2','fromStorage');
					"step 1"
					player.removeSkill('chuyuan');
					player.chooseControl('rerende','rezhiheng','olluanji','caopi_xingdong').set('prompt','选择获得一个技能').set('ai',function(){
						var player=_status.event.player;
						if(!player.hasSkill('luanji')&&!player.hasSkill('olluanji')&&player.getUseValue({name:'wanjian'})>4) return 'olluanji';
						if(!player.hasSkill('rezhiheng')) return 'rezhiheng';
						if(!player.hasSkill('caopi_xingdong')) return 'caopi_xingdong';
						return 'rerende';
					});
					'step 2'
					player.addSkillLog(result.control);
				},
			},
			olzhiti:{
				audio:'drlt_zhiti',
				global:'olzhiti2',
				mod:{
					maxHandcard:function(player,num){
						if(game.hasPlayer(function(current){
							return current.isDamaged();
						})) return num+1;
					},
				},
				trigger:{player:['phaseDrawBegin2','phaseEnd']},
				forced:true,
				filter:function(event,player){
					var num=event.name=='phase'?5:3;
					if(num==3?event.numFixed:!game.hasPlayer(function(current){
						return current.hasEnabledSlot();
					})) return false;
					return game.countPlayer(function(current){
						return current.isDamaged();
					})>=num;
				},
				direct:true,
				content:function(){
					'step 0'
					if(trigger.name=='phaseDraw'){
						player.logSkill('olzhiti');
						trigger.num++;
						event.finish();
					}
					else{
						player.chooseTarget(get.prompt('olzhiti'),'废除一名角色的一个随机装备栏',function(card,player,target){
							return target.hasEnabledSlot();
						}).set('ai',function(target){
							return -get.attitude(_status.event.player,target)*(target.countCards('e')+1)
						});
					}
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('olzhiti',target);
						var list=[];
						for(var i=1;i<6;i++){
							if(target.hasEnabledSlot(i)) list.add((i==3||i==4)?6:i);
						}
						var num=list.randomGet();
						if(num!=6) target.disableEquip(num);
						else{
							target.disableEquip(3,4);
						}
					}
				},
			},
			olzhiti2:{
				mod:{
					maxHandcard:function(player,num){
						if(player.isDamaged()) return num-game.countPlayer(function(current){
							return current.hasSkill('olzhiti')&&current.inRange(player);
						})
					},
				},
			},
			olduorui:{
				audio:'drlt_duorui',
				trigger:{
					source:'damageSource'
				},
				filter:function(event,player){
					if(!player.isPhaseUsing()||event.player.isDead()) return false;
					for(var i in event.player.disabledSkills){
						if(event.player.disabledSkills[i].contains('olduorui2')) return false;
					}
					var list=[];
					var listm=[];
					var listv=[];
					if(event.player.name1!=undefined) listm=lib.character[event.player.name1][3];
					else listm=lib.character[event.player.name][3];
					if(event.player.name2!=undefined) listv=lib.character[event.player.name2][3];
					listm=listm.concat(listv);
					var func=function(skill){
						var info=get.info(skill);
						if(!info||info.charlotte) return false;
						return true;
					};
					for(var i=0;i<listm.length;i++){
						if(func(listm[i])) list.add(listm[i]);
					}
					return list.length>0;
				},
				check:function(event,player){
					if(get.attitude(player,event.player)>=0) return false;
					if(event.getParent('phaseUse').skipped) return true;
					var nd=player.needsToDiscard();
					return player.countCards('h',function(card){
						return player.getUseValue(card,null,true)>0&&(nd?true:get.tag(card,'damage')>0);
					})==0;
				},
				logTarget:'player',
				content:function(){
					'step 0'
					var list=[];
					var listm=[];
					var listv=[];
					if(trigger.player.name1!=undefined) listm=lib.character[trigger.player.name1][3];
					else listm=lib.character[trigger.player.name][3];
					if(trigger.player.name2!=undefined) listv=lib.character[trigger.player.name2][3];
					listm=listm.concat(listv);
					var func=function(skill){
						var info=get.info(skill);
						if(!info||info.charlotte) return false;
						return true;
					};
					for(var i=0;i<listm.length;i++){
						if(func(listm[i])) list.add(listm[i]);
					}
					event.skills=list;
					player.chooseControl(list).set('prompt','选择'+get.translation(trigger.player)+'武将牌上的一个技能并令其失效');
					'step 1'
					trigger.player.disableSkill('olduorui2',result.control);
					trigger.player.addTempSkill('olduorui2',{player:'phaseAfter'});
					game.log(player,'选择了',trigger.player,'的技能','#g【'+get.translation(result.control)+'】');
					event.getParent('phaseUse').skipped=true;
				},
			},
			olduorui2:{
				onremove:function(player,skill){
					player.enableSkill(skill);
				},
				locked:true,
				mark:true,
				charlotte:true,
				intro:{
					content:function(storage,player,skill){
						var list=[];
						for(var i in player.disabledSkills){
							if(player.disabledSkills[i].contains(skill)) list.push(i);
						};
						if(list.length){
							var str='失效技能：';
							for(var i=0;i<list.length;i++){
								if(lib.translate[list[i]+'_info']) str+=get.translation(list[i])+'、';
							};
							return str.slice(0,str.length-1);
						};
					},
				},
			},
			wuhun2:{audio:2},
			wuhun21:{
				audio:true,
				skillAnimation:true,
				animationColor:'soil',
			},
			wuhun22:{
				audio:true,
				skillAnimation:true,
				animationColor:'soil',
			},
			wuhun23:{
				audio:true,
				skillAnimation:true,
				animationColor:'soil',
			},
			"new_wuhun":{
				audio:"wuhun2",
				group:["new_wuhun_mark","new_wuhun_die","wuhun22","wuhun23"],
				trigger:{
					player:"damageEnd",
				},
				forced:true,
				filter:function (event,player){
					return event.source!=undefined;
				},
				content:function (){
				trigger.source.addMark('new_wuhun_mark',trigger.num);
				},
				subSkill:{
					die:{
						//audio:"wuhun2",
						skillAnimation:true,
						animationColor:'soil',
						trigger:{
							player:"die",
						},
						forced:true,
						forceDie:true,
						direct:true,
						filter:function (event,player){
							return game.hasPlayer(function(current){
								return current!=player&&current.hasMark('new_wuhun_mark');
							});
						},
						content:function (){
							"step 0"
							var num=0;
							for(var i=0;i<game.players.length;i++){
								var current=game.players[i];
								if(current!=player&&current.countMark('new_wuhun_mark')>num){
									num=current.countMark('new_wuhun_mark');
								}
							}
							player.chooseTarget(true,'请选择【武魂】的目标',function(card,player,target){
								return target!=player&&target.countMark('new_wuhun_mark')==_status.event.num;
							}).set('ai',function(target){
								return -get.attitude(_status.event.player,target);
							}).set('forceDie',true).set('num',num);
							"step 1"
							if(result.bool&&result.targets&&result.targets.length){
								var target=result.targets[0];
								event.target=target;
								player.logSkill(Math.random()<0.5?'wuhun21':'wuhun22',target);
								player.line(target,{color:[255, 255, 0]});
								game.delay(2);
							}
							"step 2"
							target.judge(function(card){
								if(['tao','taoyuan'].contains(card.name)) return 10;
								return -10;
							}).judge2=function(result){
								return result.bool==false?true:false;
							};
							"step 3"
							if(!result.bool){
								lib.element.Player.prototype.die.apply(target,[]);
							}
						},
						sub:true,
					},
					mark:{
						marktext:"魇",
						intro:{
							name:"梦魇",
							content:"mark",
						},
						sub:true,
					},
				},
				ai:{
					threaten:0.01,
					notemp:true,
				},
			},
			"new_guixin":{
				audio:"guixin",
				trigger:{
					player:"damageEnd",
				},
				check:function (event,player){
					if(player.isTurnedOver()||event.num>1) return true;
					var num=game.countPlayer(function(current){
						if(current.countCards('he')&&current!=player&&get.attitude(player,current)<=0){
							return true;
						}
						if(current.countCards('j')&&current!=player&&get.attitude(player,current)>0){
							return true;
						}
					});
					return num>=2;
				},
				content:function (){
					"step 0"
					var targets=game.filterPlayer();
					targets.remove(player);
					targets.sort(lib.sort.seat);
					event.targets=targets;
					event.count=trigger.num;
					"step 1"
					event.num=0;
					player.line(targets,'green');
					player.chooseControl('手牌区','装备区','判定区').set('ai',function(){
						if(game.hasPlayer(function(current){
							return current.countCards('j')&&current!=player&&get.attitude(player,current)>0;
						})) return 2;
						return Math.floor(Math.random()*3);
					}).set('prompt','请选择优先获得的区域');
					"step 2"
					event.range={
						手牌区:['h','e','j'],
						装备区:['e','h','j'],
						判定区:['j','h','e'],
					}[result.control||'手牌区'];
					"step 3"
					if(num<event.targets.length){
						var target=event.targets[num];
						var range=event.range;
						for(var i=0;i<range.length;i++){
							var cards=target.getCards(range[i]);
							if(cards.length){
								var card=cards.randomGet();
								player.gain(card,target,'giveAuto','bySelf');
								break;
							}
						}
						event.num++;
					}
					"step 4"
					if(num<event.targets.length) event.goto(3);
					"step 5"
					player.turnOver();
					"step 6"
					event.count--;
					if(event.count&&player.hasSkill('new_guixin')){
						player.chooseBool(get.prompt2('new_guixin')).ai=function(){
							return lib.skill.new_guixin.check({num:event.count},player);
						};
					}
					else{
						event.finish();
					}
					"step 7"
					if(event.count&&result.bool){
						player.logSkill('new_guixin');
						event.goto(1);
					}
				},
				ai:{
					maixie:true,
					"maixie_hp":true,
					threaten:function (player,target){
						if(target.hp==1) return 2.5;
						return 1;
					},
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')&&target.hp>(player.hasSkillTag('damageBonus',true,{
								card:card,
								target:target
							})?2:1)){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
								let gain=game.countPlayer(function(current){
									if(target==current) return 0;
									if(get.attitude(target,current)>0){
										if(current.hasCard((cardx)=>lib.filter.canBeGained(cardx,target,current,'new_guixin')&&get.effect(current,cardx,current,current)<0,'j')) return 1.3;
										return 0;
									}
									if(current.hasCard((cardx)=>lib.filter.canBeGained(cardx,target,current,'new_guixin')&&get.effect(current,cardx,current,current)>0,'e')) return 1.1;
									if(current.hasCard((cardx)=>lib.filter.canBeGained(cardx,target,current,'new_guixin'),'h')) return 0.9;
									return 0;
								});
								if(target.isTurnedOver()) gain+=2.3;
								else gain-=2.3;
								return [1,Math.max(0,gain)];
							}
						}
					}
				},
			},
			ol_shenfen:{
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					return player.countMark('baonu')>=6;
				},
				usable:1,
				skillAnimation:true,
				animationColor:'metal',
				content:function(){
					"step 0"
					event.delay=false;
					player.removeMark('baonu',6);
					event.targets=game.filterPlayer();
					event.targets.remove(player);
					event.targets.sort(lib.sort.seat);
					player.line(event.targets,'green');
					event.targets2=event.targets.slice(0);
					event.targets3=event.targets.slice(0);
					"step 1"
					if(event.targets2.length){
						event.targets2.shift().damage('nocard');
						event.redo();
					}
					"step 2"
					if(event.targets.length){
						event.current=event.targets.shift()
						if(event.current.countCards('e')) event.delay=true;
						event.current.discard(event.current.getCards('e')).delay=false;
					}
					"step 3"
					if(event.delay) game.delay(0.5);
					event.delay=false;
					if(event.targets.length) event.goto(2);
					"step 4"
					if(event.targets3.length){
						var target=event.targets3.shift();
						target.chooseToDiscard(4,'h',true).delay=false;
						if(target.countCards('h')) event.delay=true;
					}
					"step 5"
					if(event.delay) game.delay(0.5);
					event.delay=false;
					if(event.targets3.length) event.goto(4);
					"step 6"
					player.turnOver();
				},
				ai:{
					combo:'baonu',
					order:10,
					result:{
						player:function(player){
							return game.countPlayer(function(current){
								if(current!=player){
									return get.sgn(get.damageEffect(current,player,player));
								}
							});
						}
					}
				}
			},
			ol_wuqian:{
				audio:2,
				enable:'phaseUse',
				derivation:'wushuang',
				filter:function(event,player){
					return player.countMark('baonu')>=2;
				},
				filterTarget:function(card,player,target){
					return target!=player&&!target.hasSkill('ol_wuqian_targeted');
				},
				content:function(){
					player.removeMark('baonu',2);
					player.addTempSkill('wushuang');
					player.storage.ol_wuqian_target=target;
					player.addTempSkill('ol_wuqian_target');
					target.addTempSkill('ol_wuqian_targeted');
				},
				subSkill:{
					equip:{
						ai:{
							unequip:true,
							skillTagFilter:function(player,tag,arg){
								if(arg&&arg.target&&arg.target.hasSkill('ol_wuqian_targeted')) return true;
								return false;
							}
						}
					},
					targeted:{ai:{unequip2:true}},
					target:{
						mark:'character',
						onremove:true,
						intro:{
							content:'获得无双且$防具失效直到回合结束'
						},
					}
				}
			},
			wumou:{
				audio:2,
				trigger:{player:'useCard'},
				forced:true,
				filter:function(event){
					return get.type(event.card)=='trick';
				},
				content:function(){
					'step 0'
					if(player.hasMark('baonu')){
						player.chooseControlList([
							'移去一枚【暴怒】标记',
							'失去1点体力'
						],true).set('ai',function(event,player){
							if(get.effect(player,{name:'losehp'},player,player)>=0) return 1;
							if(player.storage.baonu>6) return 0;
							if(player.hp+player.num('h','tao')>3) return 1;
							return 0;
						});
					}
					else{
						player.loseHp();
						event.finish();
					}
					'step 1'
					if(result.index==0){
						player.removeMark('baonu',1);
					}
					else{
						player.loseHp();
					}
				},
				ai:{
					effect:{
						player_use:function(card,player){
							if (get.type(card)=='trick'&&get.value(card)<6){
								return [0,-2];
							}
						}
					}
				}
			},
			qinyin:{
				audio:2,
				trigger:{player:'phaseDiscardEnd'},
				direct:true,
				filter:function(event,player){
					var cards=[];
					player.getHistory('lose',function(evt){
						if(evt.type=='discard'&&evt.getParent('phaseDiscard')==event) cards.addArray(evt.cards2);
					});
					return cards.length>1;
				},
				content:function(){
					"step 0"
					event.forceDie=true;
					if(typeof event.count!='number'){
						// event.count=trigger.cards.length-1;
						event.count=1;
					}
					var recover=0,lose=0,players=game.filterPlayer();
					for(var i=0;i<players.length;i++){
						if(players[i].hp<players[i].maxHp){
							if(get.attitude(player,players[i])>0){
								if(players[i].hp<2){
									lose--;
									recover+=0.5;
								}
								lose--;
								recover++;
							}
							else if(get.attitude(player,players[i])<0){
								if(players[i].hp<2){
									lose++;
									recover-=0.5;
								}
								lose++;
								recover--;
							}
						}
						else{
							if(get.attitude(player,players[i])>0){
								lose--;
							}
							else if(get.attitude(player,players[i])<0){
								lose++;
							}
						}
					}
					var prompt=get.prompt('qinyin')+'（剩余'+get.cnNumber(event.count)+'次）';
					player.chooseControl('失去体力','回复体力','cancel2',
					ui.create.dialog(get.prompt('qinyin'),'hidden')).ai=function(){
						if(lose>recover&&lose>0) return 0;
						if(lose<recover&&recover>0) return 1;
						return 2;
					}
					"step 1"
					if(result.control=='cancel2'){
						event.finish();
					}
					else{
						player.logSkill('qinyin');
						event.bool=(result.control=='回复体力');
						event.num=0;
						event.players=game.filterPlayer();
					}
					"step 2"
					if(event.num<event.players.length){
						var target=event.players[event.num];
						if(event.bool){
							target.recover();
						}
						else{
							target.loseHp();
						}
						event.num++;
						event.redo();
					}
					"step 3"
					if(event.count>1){
						event.count--;
						event.goto(0);
					}
				},
				ai:{
					expose:0.1,
					threaten:2
				}
			},
			lianpo:{
				audio:2,
				trigger:{global:'phaseAfter'},
				frequent:true,
				filter:function(event,player){
					return player.getStat('kill')>0;
				},
				content:function(){
					player.insertPhase();
				}
			},
			baonu:{
				audio:2,
				marktext:'暴',
				unique:true,
				trigger:{
					source:'damageSource',
					player:['damageEnd','enterGame'],
					global:'phaseBefore',
				},
				forced:true,
				filter:function(event){
					return (event.name!='damage'&&(event.name!='phase'||game.phaseNumber==0))||event.num>0; 
				},
				content:function(){
					player.addMark('baonu',trigger.name=='damage'?trigger.num:2);
				},
				intro:{
					name:'暴怒',
					content:'mark'
				},
				ai:{
					combo:'ol_shenfen',
					maixie:true,
					maixie_hp:true
				}
			},
			shenfen:{
				audio:2,
				unique:true,
				enable:'phaseUse',
				filter:function(event,player){
					return player.storage.baonu>=6;
				},
				skillAnimation:true,
				animationColor:'metal',
				limited:true,
				content:function(){
					"step 0"
					player.awakenSkill('shenfen');
					player.storage.baonu-=6;
					player.markSkill('baonu');
					player.syncStorage('baonu');
					event.targets=game.filterPlayer();
					event.targets.remove(player);
					event.targets.sort(lib.sort.seat);
					event.targets2=event.targets.slice(0);
					player.line(event.targets,'green');
					"step 1"
					if(event.targets.length){
						event.targets.shift().damage();
						event.redo();
					}
					"step 2"
					if(event.targets2.length){
						var cur=event.targets2.shift();
						if(cur&&cur.countCards('he')){
							cur.chooseToDiscard('he',true,4);
						}
						event.redo();
					}
				},
				ai:{
					order:10,
					result:{
						player:function(player){
							return game.countPlayer(function(current){
								if(current!=player){
									return get.sgn(get.damageEffect(current,player,player));
								}
							});
						}
					}
				}
			},
			wuqian:{
				audio:2,
				enable:'phaseUse',
				derivation:'wushuang',
				filter:function(event,player){
					return player.storage.baonu>=2&&!player.hasSkill('wushuang');
				},
				content:function(){
					player.storage.baonu-=2;
					player.addTempSkill('wushuang');
				},
				ai:{
					order:5,
					result:{
						player:function(player){
							if(!player.storage.shenfen) return 0;
							var cards=player.getCards('h','sha');
							if(cards.length){
								if(game.hasPlayer(function(current){
									return (player.canUse('sha',current)&&
									get.effect(current,cards[0],player,player)>0&&current.hasShan());
								})){
									return 1;
								}
							}
							return 0;
						}
					}
				}
			},
			renjie:{
				audio:'renjie2',
				trigger:{player:'damageEnd'},
				forced:true,
				group:'renjie2',
				notemp:true,
				//mark:true,
				filter:function(event){
					return event.num>0;
				},
				content:function(){
					player.addMark('renjie',trigger.num);
				},
				intro:{
					name2:'忍',
					content:'mark'
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					combo:'sbaiyin',
					/*effect:{
						target:function(card,player,target){
							if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
							if(get.tag(card,'damage')){
								if(target.hp==target.maxHp){
									if(!target.hasSkill('jilue')){
										return [0,1];
									}
									return [0.7,1];
								}
								return 0.7;
							}
						},
						player:function(card,player){
							if(_status.currentPhase!=player) return;
							if(_status.event.name!='chooseToUse'||_status.event.player!=player) return;
							if(get.type(card)=='basic') return;
							if(get.tag(card,'gain')) return;
							if(get.value(card,player,'raw')>=7) return;
							if(player.hp<=2) return;
							if(!player.hasSkill('jilue')||player.storage.renjie==0){
								return 'zeroplayertarget';
							}
						}
					}*/
				}
			},
			renjie2:{
				audio:2,
				trigger:{
					player:'loseAfter',
					global:'loseAsyncAfter',
				},
				forced:true,
				filter:function(event,player){
					if(event.type!='discard'||event.getlx===false) return false;
					var evt=event.getParent('phaseDiscard'),evt2=event.getl(player);
					return evt&&evt2&&evt.name=='phaseDiscard'&&evt.player==player&&evt2.cards2&&evt2.cards2.length>0;
				},
				content:function(){
					player.addMark('renjie',trigger.getl(player).cards2.length);
				}
			},
			sbaiyin:{
				skillAnimation:'epic',
				animationColor:'thunder',
				juexingji:true,
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				unique:true,
				audio:2,
				filter:function(event,player){
					return player.countMark('renjie')>=4;
				},
				content:function(){
					player.loseMaxHp();
					player.addSkill('jilue');
					player.awakenSkill('sbaiyin');
				},
				derivation:'jilue',
			},
			jilue:{
				unique:true,
				group:['jilue_guicai','jilue_fangzhu','jilue_wansha','jilue_zhiheng','jilue_jizhi','jilue_jizhi_clear']
			},
			jilue_guicai:{
				audio:1,
				trigger:{global:'judge'},
				direct:true,
				filter:function(event,player){
					return player.countCards('hes')>0&&player.hasMark('renjie');
				},
				content:function(){
					"step 0"
					player.chooseCard('是否弃置一枚“忍”，并发动〖鬼才〗？','hes',function(card){
						var player=_status.event.player;
						var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
						if(mod2!='unchanged') return mod2;
						var mod=game.checkMod(card,player,'unchanged','cardRespondable',player);
						if(mod!='unchanged') return mod;
						return true;
					}).ai=function(card){
						var trigger=_status.event.parent._trigger;
						var player=_status.event.player;
						var result=trigger.judge(card)-trigger.judge(trigger.player.judging[0]);
						var attitude=get.attitude(player,trigger.player);
						if(attitude==0||result==0) return 0;
						if(attitude>0){
							return result-get.value(card)/2;
						}
						else{
							return -result-get.value(card)/2;
						}
					};
					"step 1"
					if(result.bool){
						player.respond(result.cards,'highlight','jilue_guicai','noOrdering');
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						player.removeMark('renjie',1);
						if(trigger.player.judging[0].clone){
							trigger.player.judging[0].clone.delete();
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
			jilue_fangzhu:{
				audio:1,
				trigger:{player:'damageEnd'},
				direct:true,
				//priority:-1,
				filter:function(event,player){
					return player.hasMark('renjie');
				},
				content:function(){
					"step 0"
					player.chooseTarget('是否弃置一枚“忍”，并发动【放逐】？',function(card,player,target){
						return player!=target
					}).set('ai',target=>{
						if(target.hasSkillTag('noturn')) return 0;
						var player=_status.event.player;
						var current=_status.currentPhase;
						var dis=current?get.distance(current,target,'absolute'):1;
						var draw=player.getDamagedHp();
						var att=get.attitude(player,target);
						if(att==0) return target.hasJudge('lebu')?Math.random()/3:Math.sqrt(get.threaten(target))/5+Math.random()/2;
						if(att>0){
							if(target.isTurnedOver()) return att+draw;
							if(draw<4) return -1;
							if(current&&target.getSeatNum()>current.getSeatNum()) return att+draw/3;
							return 10*Math.sqrt(Math.max(0.01,get.threaten(target)))/(3.5-draw)+dis/(2*game.countPlayer());
						}
						else{
							if(target.isTurnedOver()) return att-draw;
							if(draw>=5) return -1;
							if(current&&target.getSeatNum()<=current.getSeatNum()) return -att+draw/3;
							return (4.25-draw)*10*Math.sqrt(Math.max(0.01,get.threaten(target)))+2*game.countPlayer()/dis;
						}
					});
					"step 1"
					if(result.bool){
						player.removeMark('renjie',1);
						player.logSkill('jilue_fangzhu',result.targets);
						result.targets[0].draw(player.maxHp-player.hp);
						result.targets[0].turnOver();
					}
				},
			},
			jilue_wansha:{
				audio:'wansha',
				audioname:['shen_simayi'],
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.hasMark('renjie');
				},
				content:function(){
					player.removeMark('renjie',1);
					player.addTempSkill('rewansha');
				},
				ai:{
					order:()=>{
						let player=_status.event.player;
						if(game.hasPlayer(current=>{
							if(player===current||current.hp>1||get.attitude(player,current)>=0) return false;
							return player.inRange(current)&&player.countCards('hs','sha')&&player.getCardUsable('sha')||
								player.countCards('hs',card=>get.name(card)!=='sha'&&get.tag(card,'damage'))>1;
						})) return 9.2;
						return 0;
					},
					result:{
						player:1
					},
					effect:{
						player:(card,player,target)=>{
							if(player.hasSkill('rewansha')&&target.hp<=1&&get.tag(card,'damage')) return [1,0,1.5,-1.5];
						}
					}
				}
			},
			jilue_zhiheng:{
				audio:1,
				mod:{
					aiOrder:function(player,card,num){
						if(num<=0||get.itemtype(card)!='card'||get.type(card)!='equip') return num;
						let eq=player.getEquip(get.subtype(card));
						if(eq&&get.equipValue(card)-get.equipValue(eq)<Math.max(1.2,6-player.hp)) return 0;
					}
				},
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.hasMark('renjie');
				},
				position:'he',
				filterCard:lib.filter.cardDiscardable,
				discard:false,
				lose:false,
				delay:false,
				selectCard:[1,Infinity],
				prompt:'弃置一枚“忍”，然后弃置任意张牌并摸等量的牌。若弃置了所有的手牌，则可以多摸一张牌。',
				check:function(card){
					var player=_status.event.player;
					if(get.position(card)=='h'&&!player.countCards('h',function(card){
						return get.value(card)>=8;
					})){
						return 8-get.value(card);
					}
					return 6-get.value(card)
				},
				content:function(){
					'step 0'
					player.removeMark('renjie',1);
					player.discard(cards);
					event.num=1;
					var hs=player.getCards('h');
					if(!hs.length) event.num=0;
					for(var i=0;i<hs.length;i++){
						if(!cards.contains(hs[i])){
							event.num=0;break;
						}
					}
					'step 1'
					player.draw(event.num+cards.length);
				},
				ai:{
					order:function(item,player){
						if(player.hasCard((i)=>get.value(i)>Math.max(6,9-player.hp),'he')) return 1;
						return 10;
					},
					result:{
						player:function(player){
							var num=0;
							var cards=player.getCards('he');
							for(var i=0;i<cards.length;i++){
								if(get.value(cards[i])<6){
									num++;
								}
							}
							if(cards.length>2) return 1;
							if(cards.length==2&&player.storage.jilue>1);
							return 0;
						}
					},
					nokeep:true,
					skillTagFilter:function(player,tag,arg){
						if(tag==='nokeep') return player.isPhaseUsing()&&!player.getStat().skill.jilue_zhiheng&&player.hasCard((card)=>get.name(card)!=='tao','h');
					},
					threaten:1.5
				},
			},
			jilue_jizhi:{
				audio:1,
				trigger:{player:'useCard'},
				filter:function(event,player){
					return (get.type(event.card,'trick')=='trick'&&event.card.isCard&&player.hasMark('renjie'));
				},
				init:function(player){
					player.storage.jilue_jizhi=0;
				},
				content:function(){
					'step 0'
					player.removeMark('renjie',1);
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
						player.storage.jilue_jizhi++;
						if(_status.currentPhase==player){
							player.markSkill('jilue_jizhi');
						}
					}
				},
				ai:{
					threaten:1.4
				},
				mod:{
					maxHandcard:function(player,num){
						return num+player.storage.jilue_jizhi;
					}
				},
				intro:{
					content:'本回合手牌上限+#',
				},
				subSkill:{
					clear:{
						trigger:{global:'phaseAfter'},
						silent:true,
						content:function(){
							player.storage.jilue_jizhi=0;
							player.unmarkSkill('jilue_jizhi');
						}
					}
				}
			},
			wushen:{
				mod:{
					cardname:function(card,player,name){
						if(get.suit(card)=='heart') return 'sha';
					},
					cardnature:function(card,player){
						if(get.suit(card)=='heart') return false;
					},
					targetInRange:function(card){
						if(get.suit(card)=='heart') return true;
					},
					cardUsable:function(card){
						if(card.name=='sha'&&get.suit(card)=='heart') return Infinity;
					}
				},
				audio:2,
				trigger:{player:'useCard'},
				forced:true,
				filter:function(event,player){
					return event.card.name=='sha'&&get.suit(event.card)=='heart';
				},
				content:function(){
					trigger.directHit.addArray(game.players);
					if(trigger.addCount!==false){
						trigger.addCount=false;
						if(player.stat[player.stat.length-1].card.sha>0){
							player.stat[player.stat.length-1].card.sha--;
						}
					}
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(get.tag(card,'respondSha')&&current<0) return 0.6
						}
					},
					directHit_ai:true,
					skillTagFilter:function(player,tag,arg){
						return arg.card.name=='sha'&&get.suit(arg.card)=='heart';
					},
				}
			},
			wuhun:{
				trigger:{
					player:"damageEnd",
				},
				//alter:true,
				filter:function (event,player){
					if(event.source==undefined) return false;
					if(!get.is.altered('wuhun')) return false	
					return true;
				},
				forced:true,
				content:function (){
					if(!trigger.source.storage.wuhun_mark){
						trigger.source.storage.wuhun_mark=0;
					}				 
					trigger.source.storage.wuhun_mark+=trigger.num;
					trigger.source.syncStorage('wuhun_mark');
					trigger.source.markSkill('wuhun_mark');
				},
				global:["wuhun_mark"],
				subSkill:{
					mark:{
						marktext:"魇",
						intro:{
							content:"mark",
						},
						sub:true,
					},
				},
					group:["wuhun2","wuhun4","wuhun5"],
			},
			wuhun2:{
				trigger:{
				player:'dieBegin',
				},
				forced:true,
				popup:false,
				filter:function (event,player){
					for(var i=0;i<game.players.length;i++){
						if(game.players[i].storage.wuhun_mark) return true;
					}
					return false;
				},
				content:function (){
					"step 0"
					player.chooseTarget(true,get.prompt('wuhun2'),function(card,player,target){
						if(player==target) return false;
						if(!target.storage.wuhun_mark) return false;
							for(var i=0;i<game.players.length;i++){
								if(game.players[i].storage.wuhun_mark>target.storage.wuhun_mark){
								return false;
							}
						}
						return true;
					}).set('ai',function(target){
						return -ai.get.attitude(_status.event.player,target);
					});
					"step 1"
						player.line(result.targets[0],'fire');
						result.targets[0].addSkill('wuhun3')
				},
				ai:{
					threaten:0.5,
					effect:{
						target:function (card,player,target,current){
							if(get.tag(card,'damage')){
								if(player.hasSkill('jueqing')) return [1,-5];
								var hasfriend=false;
								for(var i=0;i<game.players.length;i++){
									if(game.players[i]!=target&&ai.get.attitude(game.players[i],target)>=0){
										hasfriend=true;break;
									}
								}
								if(!hasfriend) return;
								if(player.hp>2&&ai.get.attitude(player,target)<=0) return [0,2];
								return [1,0,0,-player.hp];
							}
						},
					},
				},
			},
			wuhun3:{
				audio:3,
				trigger:{
					global:'dieAfter',
				},
				forced:true,
				content:function (){
					"step 0"
					player.judge(function(card){
						if(card.name=='tao'||card.name=='taoyuan') return 2;
						return -2;
					})
					"step 1"
					if(result.judge==-2){
						player.die();
					}
					player.removeSkill('wuhun3');
				},
			},
			wuhun4:{
				trigger:{
					player:'dieAfter',
				},
				forced:true,
				popup:false,
				content:function (){
					for(var i=0;i<game.players.length;i++){
						if(game.players[i].storage.wuhun_mark){
							game.players[i].storage.wuhun_mark=0;
							game.players[i].unmarkSkill('wuhun_mark');
						}
					}
				},
			},
			wuhun5:{
				trigger:{player:'dieBegin'},
				forced:true,
				popup:false,
				filter:function(event){
					if(event.source!=player&&event.source!=undefined&&!get.is.altered('wuhun')) return true							 
					return false;
				},
				content:function(){
					trigger.source.addSkill('wuhun6');
				},
				ai:{
					threaten:function(player,target){
						if(target.hp==1) return 0.5;
					},
					effect:{
						target:function(card,player,target,current){
							if(target.hp<=1&&get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-5];
								if(!target.hasFriend()) return;
								if(player.hp>2&&get.attitude(player,target)<=0) return [0,2];
								return [1,0,0,-player.hp];
							}
						}
					}
				}
			},
			wuhun6:{
				audio:3,
				trigger:{global:'dieAfter'},
				forced:true,
				content:function(){
					if(player.hp<Infinity){
						player.loseHp(player.hp);
					}
					player.removeSkill('wuhun6');
				}
			}, 
			guixin:{
				audio:2,
				// alter:true,
				trigger:{player:'damageEnd'},
				check:function(event,player){
					if(player.isTurnedOver()||event.num>1) return true;
					var num=game.countPlayer(function(current){
						if(current.countCards('he')&&current!=player&&get.attitude(player,current)<=0){
							return true;
						}
						if(current.countCards('j')&&current!=player&&get.attitude(player,current)>0){
							return true;
						}
					});
					return num>=2;
				},
				content:function(){
					"step 0"
					var targets=game.filterPlayer();
					targets.remove(player);
					targets.sort(lib.sort.seat);
					event.targets=targets;
					event.count=trigger.num;
					"step 1"
					event.num=0;
					player.line(targets,'green');
					"step 2"
					if(num<event.targets.length){
						if(!get.is.altered('guixin')){
							if(event.targets[num].countGainableCards(player,'hej')){
								player.gainPlayerCard(event.targets[num],true,'hej');
							}
						}
						else{
							var hej=event.targets[num].getCards('hej')
							if(hej.length){
								var card=hej.randomGet();
								player.gain(card,event.targets[num]);
								if(get.position(card)=='h'){
									event.targets[num].$giveAuto(card,player);
								}
								else{
									event.targets[num].$give(card,player);
								}
							}
						}
						event.num++;
						event.redo();
					}
					"step 3"
					player.turnOver();
					"step 4"
					event.count--;
					if(event.count&&player.hasSkill('guixin')){
						player.chooseBool(get.prompt2('guixin'));
					}
					else{
						event.finish();
					}
					"step 5"
					if(event.count&&result.bool){
						event.goto(1);
					}
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					threaten:function(player,target){
						if(target.hp==1) return 2.5;
						return 1;
					},
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')&&target.hp>(player.hasSkillTag('damageBonus',true,{
								card:card,
								target:target
							})?2:1)){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
								let gain=game.countPlayer(function(current){
									if(target==current) return 0;
									if(get.attitude(target,current)>0){
										if(current.hasCard((cardx)=>lib.filter.canBeGained(cardx,target,current,'guixin')&&get.effect(current,cardx,current,current)<0,'ej')) return 1.3;
										return 0;
									}
									if(current.hasCard((cardx)=>lib.filter.canBeGained(cardx,target,current,'guixin')&&get.effect(current,cardx,current,current)>0,'ej')) return 1.1;
									if(current.hasCard((cardx)=>lib.filter.canBeGained(cardx,target,current,'guixin'),'h')) return 0.9;
									return 0;
								});
								if(target.isTurnedOver()) gain+=2.3;
								else gain-=2.3;
								return [1,Math.max(0,gain)];
							}
						}
					}
				}
			},
			qixing:{
				audio:2,
				unique:true,
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
					"step 0"
					player.addToExpansion(get.cards(7),'draw').gaintag.add('qixing');
					"step 1"
					var cards=player.getExpansions('qixing');
					if(!cards.length||!player.countCards('h')){
						event.finish();
						return;
					}
					var next=player.chooseToMove('七星：是否交换“星”和手牌？');
					next.set('list',[
						[get.translation(player)+'（你）的星',cards],
						['手牌区',player.getCards('h')],
					]);
					next.set('filterMove',function(from,to){
						return typeof to!='number';
					});
					next.set('processAI',function(list){
						var player=_status.event.player,cards=list[0][1].concat(list[1][1]).sort(function(a,b){
							return get.useful(a)-get.useful(b);
						}),cards2=cards.splice(0,player.getExpansions('qixing').length);
						return [cards2,cards];
					});
					"step 2"
					if(result.bool){
						var pushs=result.moved[0],gains=result.moved[1];
						pushs.removeArray(player.getExpansions('qixing'));
						gains.removeArray(player.getCards('h'));
						if(!pushs.length||pushs.length!=gains.length) return;
						player.addToExpansion(pushs,player,'giveAuto').gaintag.add('qixing');
						//game.log(player,'将',pushs,'作为“星”置于武将牌上');
						player.gain(gains,'draw');
					}
				},
				intro:{
					markcount:'expansion',
					mark:function(dialog,content,player){
						var content=player.getExpansions('qixing');
						if(content&&content.length){
							if(player==game.me||player.isUnderControl()){
								dialog.addAuto(content);
							}
							else{
								return '共有'+get.cnNumber(content.length)+'张星';
							}
						}
					},
					content:function(content,player){
						var content=player.getExpansions('qixing');
						if(content&&content.length){
							if(player==game.me||player.isUnderControl()){
								return get.translation(content);
							}
							return '共有'+get.cnNumber(content.length)+'张星';
						}
					}
				},
				group:['qixing2'],
				ai:{combo:'dawu'},
			},
			qixing2:{
				trigger:{player:'phaseDrawAfter'},
				direct:true,
				filter:function(event,player){
					return player.getExpansions('qixing').length>0&&player.countCards('h')>0;
				},
				content:function(){
					"step 0"
					var cards=player.getExpansions('qixing');
					if(!cards.length||!player.countCards('h')){
						event.finish();
						return;
					}
					var next=player.chooseToMove('七星：是否交换“星”和手牌？');
					next.set('list',[
						[get.translation(player)+'（你）的星',cards],
						['手牌区',player.getCards('h')],
					]);
					next.set('filterMove',function(from,to){
						return typeof to!='number';
					});
					next.set('processAI',function(list){
						var player=_status.event.player,cards=list[0][1].concat(list[1][1]).sort(function(a,b){
							return get.value(a)-get.value(b);
						}),cards2=cards.splice(0,player.getExpansions('qixing').length);
						return [cards2,cards];
					});
					"step 1"
					if(result.bool){
						var pushs=result.moved[0],gains=result.moved[1];
						pushs.removeArray(player.getExpansions('qixing'));
						gains.removeArray(player.getCards('h'));
						if(!pushs.length||pushs.length!=gains.length) return;
						player.logSkill('qixing2');
						player.addToExpansion(pushs,player,'giveAuto').gaintag.add('qixing');
						game.log(player,'将',pushs,'作为“星”置于武将牌上');
						player.gain(gains,'draw');
					}
				},
			},
			dawu:{
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				filter:function(event,player){
					return player.getExpansions('qixing').length;
				},
				audio:2,
				content:function(){
					"step 0"
					var num=Math.min(game.countPlayer(),player.getExpansions('qixing').length);
					player.chooseTarget(get.prompt('dawu'),'令至多'+get.cnNumber(num)+'名角色获得“大雾”标记',
					[1,num]).set('ai',function(target){
						if(target.isMin()) return 0;
						if(target.hasSkill('biantian2')||target.hasSkill('dawu2')) return 0;
						var att=get.attitude(player,target);
						if(att>=4){
							if(_status.event.allUse) return att;
							if(target.hp==1) return att;
							if(target.hp==2&&target.countCards('he')<=2) return att*0.7;
							return 0;
						}
						return -1;
					}).set('allUse',player.getExpansions('qixing').length>=game.countPlayer(function(current){
						return get.attitude(player,current)>4;
					})*2);
					"step 1"
					if(result.bool){
						var targets=result.targets.sortBySeat();
						player.logSkill('dawu',targets,'thunder');
						var length=targets.length;
						targets.forEach(target=>{
							target.addAdditionalSkill(`dawu_${player.playerid}`,'dawu2');
							target.markAuto('dawu2',[player]);
						});
						player.addTempSkill('dawu3',{player:'phaseBeginStart'})
						player.chooseCardButton('选择弃置'+get.cnNumber(length)+'张“星”',length,player.getExpansions('qixing'),true);
					}
					else{
						event.finish();
					}
					"step 2"
					player.loseToDiscardpile(result.links);
				},
				ai:{combo:'qixing'},
			},
			dawu2:{
				charlotte:true,
				ai:{
					nofire:true,
					nodamage:true,
					effect:{
						target:function(card,player,target,current){
							if(get.tag(card,'damage')&&!get.tag(card,'thunderDamage')) return 'zeroplayertarget';
						}
					},
				},
				intro:{
					content:function(storage){
						return `共有${storage.length}枚标记`;
					},
				}
			},
			dawu3:{
				trigger:{global:'damageBegin4'},
				filter:function(event,player){
					return !event.hasNature('thunder')&&event.player.getStorage('dawu2').includes(player);
				},
				forced:true,
				charlotte:true,
				logTarget:'player',
				content:function(){
					trigger.cancel();
				},
				onremove:function(player){
					game.countPlayer2(current=>{
						if(current.getStorage('dawu2').includes(player)){
							current.unmarkAuto('dawu2',player);
							current.removeAdditionalSkill(`dawu_${player.playerid}`);
						}
					},true);
				},
			},
			kuangfeng:{
				unique:true,
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				filter:function(event,player){
					return player.getExpansions('qixing').length;
				},
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt('kuangfeng'),'令一名角色获得“狂风”标记').ai=function(target){
						return -1;
					}
					"step 1"
					if(result.bool){
						var targets=result.targets.sortBySeat();
						player.logSkill('kuangfeng',targets,'fire');
						var length=targets.length;
						targets.forEach(target=>{
							target.addAdditionalSkill(`kuangfeng_${player.playerid}`,'kuangfeng2');
							target.markAuto('kuangfeng2',[player]);
						});
						player.addTempSkill('kuangfeng3',{player:'phaseBeginStart'})
						player.chooseCardButton('选择弃置'+get.cnNumber(length)+'张“星”',length,player.getExpansions('qixing'),true);
					}
					else{
						event.finish();
					}
					"step 2"
					player.loseToDiscardpile(result.links);
				},
				ai:{combo:'qixing'},
			},
			kuangfeng2:{
				charlotte:true,
				intro:{
					content:function(storage){
						return `共有${storage.length}枚标记`;
					},
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(get.tag(card,'fireDamage')&&current<0) return 1.5;
						}
					}
				}
			},
			kuangfeng3:{
				trigger:{global:'damageBegin3'},
				filter:function(event){
					return event.hasNature('fire')&&event.player.getStorage('kuangfeng2').includes(player);
				},
				charlotte:true,
				forced:true,
				logTarget:'player',
				content:function(){
					trigger.num++;
				},
				onremove:function(player){
					game.countPlayer2(current=>{
						if(current.getStorage('kuangfeng2').includes(player)){
							current.unmarkAuto('kuangfeng2',player);
							current.removeAdditionalSkill(`kuangfeng_${player.playerid}`);
						}
					},true);
				},
			},
			yeyan:{
				unique:true,
				forceDie:true,
				enable:'phaseUse',
				audio:3,
				animationColor:'metal',
				skillAnimation:'legend',
				filterTarget:function(card,player,target){
					var length=ui.selected.cards.length;
					return (length==0||length==4);
				},
				filterCard:function(card){
					var suit=get.suit(card);
					for(var i=0;i<ui.selected.cards.length;i++){
						if(get.suit(ui.selected.cards[i])==suit) return false;
					}
					return true;
				},
				complexCard:true,
				limited:true,
				selectCard:[0,4],
				line:'fire',
				check:function (){return -1},
				selectTarget:function(){
					if(ui.selected.cards.length==4) return [1,2];
					if(ui.selected.cards.length==0) return [1,3];
					game.uncheck('target');
					return [1,3];
				},
				multitarget:true,
				multiline:true,
				contentBefore:function(){
					player.awakenSkill('yeyan');
				},
				content:function(){
					"step 0"
					event.num=0;
					targets.sortBySeat();
					"step 1"
					if(cards.length==4) event.goto(2);
					else {
						if(event.num<targets.length){
						targets[event.num].damage('fire',1,'nocard');
						event.num++;
					}
					if(event.num==targets.length) event.finish();
					else event.redo();
					}
					"step 2"
					player.loseHp(3);
					if(targets.length==1) event.goto(4);
					else{
						player.chooseTarget('请选择受到2点伤害的角色',true,function(card,player,target){
							return _status.event.targets.contains(target)
						}).set('ai',function(target){
							return 1;
						}).set('forceDie',true).set('targets',targets);
					}
					"step 3"
					if(event.num<targets.length){
						var dnum=1;
						if(result.bool&&result.targets&&targets[event.num]==result.targets[0]) dnum=2;
						targets[event.num].damage('fire',dnum,'nocard');
						event.num++;
					}
					if(event.num==targets.length) event.finish();
					else event.redo();
					"step 4"
					player.chooseControl("2点","3点").set('prompt','请选择伤害点数').set('ai',function(){
						return "3点";
					}).set('forceDie',true);
					"step 5"
					targets[0].damage('fire',result.control=="2点"?2:3,'nocard'); 
				},
				ai:{
					order:1,
					fireAttack:true,
					result:{
						target:function(player,target){
							if(target.hasSkillTag('nofire')) return 0;
							if(lib.config.mode=='versus') return -1;
							if(player.hasUnknown()) return 0;
							return get.damageEffect(target,player);
						}
					}
				}
			},
			longhun:{
				audio:4,
				group:['longhun1','longhun2','longhun3','longhun4'],
				ai:{
					fireAttack:true,
					skillTagFilter:function(player,tag){
						switch(tag){
							case 'respondSha':{
								if(player.countCards('he',{suit:'diamond'})<Math.max(1,player.hp)) return false;
								break;
							}
							case 'respondShan':{
								if(player.countCards('he',{suit:'club'})<Math.max(1,player.hp)) return false;
								break;
							}
							case 'save':{
								if(player.countCards('he',{suit:'heart'})<Math.max(1,player.hp)) return false;
								break;
							}
							default:return true;break;
						}
					},
					maixie:true,
					respondSha:true,
					respondShan:true,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'recover')&&target.hp>=1) return [0,0];
							if(!target.hasFriend()) return;
							if((get.tag(card,'damage')==1||get.tag(card,'loseHp'))&&target.hp>1) return [0,1];
						}
					},
					threaten:function(player,target){
						if(target.hp==1) return 2;
						return 0.5;
					},
				}
			},
			longhun1:{
				audio:true,
				enable:['chooseToUse','chooseToRespond'],
				prompt:function(){
					return '将'+get.cnNumber(Math.max(1,_status.event.player.hp))+'张红桃牌当作桃使用';
				},
				position:'hes',
				check:function(card,event){
					if(_status.event.player.hp>1) return 0;
					return 10-get.value(card);
				},
				selectCard:function(){
					return Math.max(1,_status.event.player.hp);
				},
				viewAs:{name:'tao'},
				viewAsFilter:function(player){
					return player.countCards('hes',{suit:'heart'})>=player.hp;
				},
				filterCard:function(card){
					return get.suit(card)=='heart';
				}
			},
			longhun2:{
				audio:true,
				enable:['chooseToUse','chooseToRespond'],
				prompt:function(){
					return '将'+get.cnNumber(Math.max(1,_status.event.player.hp))+'张方片当作火杀使用或打出';
				},
				position:'hes',
				check:function(card,event){
					if(_status.event.player.hp>1) return 0;
					return 10-get.value(card);
				},
				selectCard:function(){
					return Math.max(1,_status.event.player.hp);
				},
				viewAs:{name:'sha',nature:'fire'},
				viewAsFilter:function(player){
					return player.countCards('hes',{suit:'diamond'})>=player.hp;
				},
				filterCard:function(card){
					return get.suit(card)=='diamond';
				}
			},
			longhun3:{
				audio:true,
				enable:['chooseToUse','chooseToRespond'],
				prompt:function(){
					return '将'+get.cnNumber(Math.max(1,_status.event.player.hp))+'张黑桃牌当作无懈可击使用';
				},
				position:'hes',
				check:function(card,event){
					if(_status.event.player.hp>1) return 0;
					return 7-get.value(card);
				},
				selectCard:function(){
					return Math.max(1,_status.event.player.hp);
				},
				viewAs:{name:'wuxie'},
				viewAsFilter:function(player){
					return player.countCards('hes',{suit:'spade'})>=player.hp;
				},
				filterCard:function(card){
					return get.suit(card)=='spade';
				}
			},
			longhun4:{
				audio:true,
				enable:['chooseToUse','chooseToRespond'],
				prompt:function(){
					return '将'+get.cnNumber(Math.max(1,_status.event.player.hp))+'张梅花牌当作闪使用或打出';
				},
				position:'hes',
				check:function(card,event){
					if(_status.event.player.hp>1) return 0;
					return 10-get.value(card);
				},
				selectCard:function(){
					return Math.max(1,_status.event.player.hp);
				},
				viewAsFilter:function(player){
					return player.countCards('hes',{suit:'club'})>=player.hp;
				},
				viewAs:{name:'shan'},
				filterCard:function(card){
					return get.suit(card)=='club';
				}
			},
			juejing:{
				mod:{
					maxHandcard:function(player,num){
						return 2+num;
					}
				},
				audio:true,
				trigger:{player:'phaseDrawBegin2'},
				//priority:-5,
				filter:function(event,player){
					return !event.numFixed&&player.hp<player.maxHp;
				},
				forced:true,
				content:function(){
					trigger.num+=(player.getDamagedHp());
				}
			},
			relonghun:{
				audio:2,
				//技能发动时机
				enable:['chooseToUse','chooseToRespond'],
				//发动时提示的技能描述
				prompt:'将♦牌当做杀，♥牌当做桃，♣牌当做闪，♠牌当做无懈可击使用或打出',
				//动态的viewAs
				viewAs:function(cards,player){
					var name=false;
					var nature=null;
					//根据选择的卡牌的花色 判断要转化出的卡牌是闪还是火杀还是无懈还是桃
					switch(get.suit(cards[0],player)){
						case 'club':name='shan';break;
						case 'diamond':name='sha';nature='fire';break;
						case 'spade':name='wuxie';break;
						case 'heart':name='tao';break;
					}
					//返回判断结果
					if(name) return {name:name,nature:nature};
					return null;
				},
				//AI选牌思路
				check:function(card){
					if(ui.selected.cards.length) return 0;
					var player=_status.event.player;
					if(_status.event.type=='phase'){
						var max=0;
						var name2;
						var list=['sha','tao'];
						var map={sha:'diamond',tao:'heart'}
						for(var i=0;i<list.length;i++){
							var name=list[i];
							if(player.countCards('hes',function(card){
								return (name!='sha'||get.value(card)<5)&&get.suit(card,player)==map[name];
							})>0&&player.getUseValue({name:name,nature:name=='sha'?'fire':null})>0){
								var temp=get.order({name:name,nature:name=='sha'?'fire':null});
								if(temp>max){
									max=temp;
									name2=map[name];
								}
							}
						}
						if(name2==get.suit(card,player)) return (name2=='diamond'?(5-get.value(card)):20-get.value(card));
						return 0;
					}
					return 1;
				},
				//选牌数量
				selectCard:[1,2],
				//确保选择第一张牌后 重新检测第二张牌的合法性 避免选择两张花色不同的牌
				complexCard:true,
				//选牌范围：手牌区和装备区和木马
				position:'hes',
				//选牌合法性判断
				filterCard:function(card,player,event){
					//如果已经选了一张牌 那么第二张牌和第一张花色相同即可
					if(ui.selected.cards.length) return get.suit(card,player)==get.suit(ui.selected.cards[0],player);
					event=event||_status.event;
					//获取当前时机的卡牌选择限制
					var filter=event._backup.filterCard;
					//获取卡牌花色
					var name=get.suit(card,player);
					//如果这张牌是梅花并且当前时机能够使用/打出闪 那么这张牌可以选择
					if(name=='club'&&filter({name:'shan',cards:[card]},player,event)) return true;
					//如果这张牌是方片并且当前时机能够使用/打出火杀 那么这张牌可以选择
					if(name=='diamond'&&filter({name:'sha',cards:[card],nature:'fire'},player,event)) return true;
					//如果这张牌是黑桃并且当前时机能够使用/打出无懈 那么这张牌可以选择
					if(name=='spade'&&filter({name:'wuxie',cards:[card]},player,event)) return true;
					//如果这张牌是红桃并且当前时机能够使用/打出桃 那么这张牌可以选择
					if(name=='heart'&&filter({name:'tao',cards:[card]},player,event)) return true;
					//上述条件都不满足 那么就不能选择这张牌
					return false;
				},
				//判断当前时机能否发动技能
				filter:function(event,player){
					//获取当前时机的卡牌选择限制
					var filter=event.filterCard;
					//如果当前时机能够使用/打出火杀并且角色有方片 那么可以发动技能
					if(filter({name:'sha',nature:'fire'},player,event)&&player.countCards('hes',{suit:'diamond'})) return true;
					//如果当前时机能够使用/打出闪并且角色有梅花 那么可以发动技能
					if(filter({name:'shan'},player,event)&&player.countCards('hes',{suit:'club'})) return true;
					//如果当前时机能够使用/打出桃并且角色有红桃 那么可以发动技能
					if(filter({name:'tao'},player,event)&&player.countCards('hes',{suit:'heart'})) return true;
					//如果当前时机能够使用/打出无懈可击并且角色有黑桃 那么可以发动技能
					if(filter({name:'wuxie'},player,event)&&player.countCards('hes',{suit:'spade'})) return true;
					return false;
				},
				ai:{
					respondSha:true,
					respondShan:true,
					//让系统知道角色“有杀”“有闪”
					skillTagFilter:function(player,tag){
						var name;
						switch(tag){
							case 'respondSha':name='diamond';break;
							case 'respondShan':name='club';break;
							case 'save':name='heart';break;
						}
						if(!player.countCards('hes',{suit:name})) return false;
					},
					//AI牌序
					order:function(item,player){
						if(player&&_status.event.type=='phase'){
							var max=0;
							var list=['sha','tao'];
							var map={sha:'diamond',tao:'heart'}
							for(var i=0;i<list.length;i++){
								var name=list[i];
								if(player.countCards('hes',function(card){
									return (name!='sha'||get.value(card)<5)&&get.suit(card,player)==map[name];
								})>0&&player.getUseValue({name:name,nature:name=='sha'?'fire':null})>0){
									var temp=get.order({name:name,nature:name=='sha'?'fire':null});
									if(temp>max) max=temp;
								}
							}
							max/=1.1;
							return max;
						}
						return 2;
					},
				},
				//让系统知道玩家“有无懈”“有桃”
				hiddenCard:function(player,name){
					if(name=='wuxie'&&_status.connectMode&&player.countCards('hs')>0) return true;
					if(name=='wuxie') return player.countCards('hes',{suit:'spade'})>0;
					if(name=='tao') return player.countCards('hes',{suit:'heart'})>0;
				},
				group:['relonghun_num','relonghun_discard'],
				subSkill:{
					num:{
						trigger:{player:'useCard'},
						forced:true,
						popup:false,
						filter:function(event){
							var evt=event;
							return ['sha','tao'].contains(evt.card.name)&&evt.skill=='relonghun'&&evt.cards&&evt.cards.length==2;
						},
						content:function(){
							trigger.baseDamage++;
						}
					},
					discard:{
						trigger:{player:['useCardAfter','respondAfter']},
						forced:true,
						popup:false,
						logTarget:function(){
							return _status.currentPhase;
						},
						autodelay:function(event){
							return event.name=='respond'?0.5:false;
						},
						filter:function(evt,player){
							return ['shan','wuxie'].contains(evt.card.name)&&evt.skill=='relonghun'&&
								evt.cards&&evt.cards.length==2&&_status.currentPhase&&_status.currentPhase!=player&&_status.currentPhase.countDiscardableCards(player,'he');
						},
						content:function(){
							//game.log(trigger.card)
							//game.log(trigger.cards)
							player.line(_status.currentPhase,'green');
							player.discardPlayerCard(_status.currentPhase,'he',true);
						}
					}
				}
			},
			xinlonghun:{
				audio:'longhun',
				enable:['chooseToUse','chooseToRespond'],
				prompt:'将♦牌当做杀，♥牌当做桃，♣牌当做闪，♠牌当做无懈可击使用或打出',
				viewAs:function(cards,player){
					var name=false;
					var nature=null;
					switch(get.suit(cards[0],player)){
						case 'club':name='shan';break;
						case 'diamond':name='sha';nature='fire';break;
						case 'spade':name='wuxie';break;
						case 'heart':name='tao';break;
					}
					if(name) return {name:name,nature:nature};
					return null;
				},
				check:function(card){
					var player=_status.event.player;
					if(_status.event.type=='phase'){
						var max=0;
						var name2;
						var list=['sha','tao'];
						var map={sha:'diamond',tao:'heart'}
						for(var i=0;i<list.length;i++){
							var name=list[i];
							if(player.countCards('hes',function(card){
								return (name!='sha'||get.value(card)<5)&&get.suit(card,player)==map[name];
							})>0&&player.getUseValue({name:name,nature:name=='sha'?'fire':null})>0){
								var temp=get.order({name:name,nature:name=='sha'?'fire':null});
								if(temp>max){
									max=temp;
									name2=map[name];
								}
							}
						}
						if(name2==get.suit(card,player)) return (name2=='diamond'?(5-get.value(card)):20-get.value(card));
						return 0;
					}
					return 1;
				},
				position:'hes',
				filterCard:function(card,player,event){
					event=event||_status.event;
					var filter=event._backup.filterCard;
					var name=get.suit(card,player);
					if(name=='club'&&filter({name:'shan',cards:[card]},player,event)) return true;
					if(name=='diamond'&&filter({name:'sha',cards:[card],nature:'fire'},player,event)) return true;
					if(name=='spade'&&filter({name:'wuxie',cards:[card]},player,event)) return true;
					if(name=='heart'&&filter({name:'tao',cards:[card]},player,event)) return true;
					return false;
				},
				filter:function(event,player){
					var filter=event.filterCard;
					if(filter({name:'sha',nature:'fire'},player,event)&&player.countCards('hes',{suit:'diamond'})) return true;
					if(filter({name:'shan'},player,event)&&player.countCards('hes',{suit:'club'})) return true;
					if(filter({name:'tao'},player,event)&&player.countCards('hes',{suit:'heart'})) return true;
					if(filter({name:'wuxie'},player,event)&&player.countCards('hes',{suit:'spade'})) return true;
					return false;
				},
				precontent:function(){
					delete event.result.skill;
					player.logSkill('longhun'+(4-lib.suit.indexOf(get.suit(event.result.cards[0],player))));
				},
				ai:{
					respondSha:true,
					respondShan:true,
					skillTagFilter:function(player,tag){
						var name;
						switch(tag){
							case 'respondSha':name='diamond';break;
							case 'respondShan':name='club';break;
							case 'save':name='heart';break;
						}
						if(!player.countCards('hes',{suit:name})) return false;
					},
					order:function(item,player){
						if(player&&_status.event.type=='phase'){
							var max=0;
							var list=['sha','tao'];
							var map={sha:'diamond',tao:'heart'}
							for(var i=0;i<list.length;i++){
								var name=list[i];
								if(player.countCards('hes',function(card){
									return (name!='sha'||get.value(card)<5)&&get.suit(card,player)==map[name];
								})>0&&player.getUseValue({name:name,nature:name=='sha'?'fire':null})>0){
									var temp=get.order({name:name,nature:name=='sha'?'fire':null});
									if(temp>max) max=temp;
								}
							}
							max/=1.1;
							return max;
						}
						return 2;
					},
				},
				hiddenCard:function(player,name){
					if(name=='wuxie'&&_status.connectMode&&player.countCards('hes')>0) return true;
					if(name=='wuxie') return player.countCards('hes',{suit:'spade'})>0;
					if(name=='tao') return player.countCards('hes',{suit:'heart'})>0;
				},
			},
			xinjuejing:{
				mod:{
					maxHandcard:function(player,num){
						return 2+num;
					}
				},
				audio:2,
				trigger:{player:['dying','dyingAfter']},
				forced:true,
				content:function(){
					player.draw();
				}
			},
			shelie:{
				audio:2,
				trigger:{player:'phaseDrawBegin1'},
				filter:function(event,player){
					return !event.numFixed;
				},
				content:function(){
					"step 0"
					trigger.changeToZero();
					event.cards=get.cards(5);
					game.cardsGotoOrdering(event.cards);
					event.videoId=lib.status.videoId++;
					game.broadcastAll(function(player,id,cards){
						var str;
						if(player==game.me&&!_status.auto){
							str='涉猎：获取花色各不相同的牌';
						}
						else{
							str='涉猎';
						}
						var dialog=ui.create.dialog(str,cards);
						dialog.videoId=id;
					},player,event.videoId,event.cards);
					event.time=get.utc();
					game.addVideo('showCards',player,['涉猎',get.cardsInfo(event.cards)]);
					game.addVideo('delay',null,2);
					"step 1"
					var list=[];
					for(var i of cards) list.add(get.suit(i,false));
					var next=player.chooseButton(list.length,true);
					next.set('dialog',event.videoId);
					next.set('filterButton',function(button){
						for(var i=0;i<ui.selected.buttons.length;i++){
							if(get.suit(ui.selected.buttons[i].link)==get.suit(button.link)) return false;
						}
						return true;
					});
					next.set('ai',function(button){
						return get.value(button.link,_status.event.player);
					});
					"step 2"
					if(result.bool&&result.links){
						event.cards2=result.links;
					}
					else{
						event.finish();
					}
					var time=1000-(get.utc()-event.time);
					if(time>0){
						game.delay(0,time);
					}
					"step 3"
					game.broadcastAll('closeDialog',event.videoId);
					var cards2=event.cards2;
					player.gain(cards2,'log','gain2');
				},
				ai:{
					threaten:1.2
				}
			},
			gongxin:{
				audio:2,
				audioname:['re_lvmeng','gexuan'],
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('h');
				},
				content:function(){
					'step 0'
					var cards=target.getCards('h');
					player.chooseButton(2,[
						'攻心',
						cards,
						[['弃置此牌','置于牌堆顶'],'tdnodes'],
					]).set('filterButton',function(button){
						var type=typeof button.link;
						if(ui.selected.buttons.length&&type==typeof ui.selected.buttons[0].link) return false;
						return type=='string'||get.suit(button.link)=='heart';
					});
					'step 1'
					if(result.bool){
						if(typeof result.links[0]!='string') result.links.reverse();
						var card=result.links[1],choice=result.links[0];
						if(choice=='弃置此牌') target.discard(card);
						else{
							player.showCards(card,get.translation(player)+'对'+get.translation(target)+'发动了【攻心】');
							target.lose(card,ui.cardPile,'visible','insert');
						}
					}
				},
				ai:{
					threaten:1.5,
					result:{
						target:function(player,target){
							return -target.countCards('h');
						}
					},
					order:10,
					expose:0.4,
				}
			},
			"nzry_longnu":{
				mark:true,
				locked:true,
				zhuanhuanji:true,
				marktext:'☯',
				intro:{
					content:function(storage,player,skill){
						if(player.storage.nzry_longnu==true) return '锁定技，出牌阶段开始时，你减1点体力上限并摸一张牌，然后本阶段内你的锦囊牌均视为雷杀且无使用次数限制';
						return '锁定技，出牌阶段开始时，你失去1点体力并摸一张牌，然后本阶段内你的红色手牌均视为火杀且无距离限制';
					},
				},
				audio:2,
				trigger:{
					player:'phaseUseBegin'
				},
				forced:true,
				content:function(){
					'step 0'
					player.changeZhuanhuanji('nzry_longnu');
					if(player.storage.nzry_longnu!=true){
						player.loseMaxHp();
					}
					else{
						player.loseHp();
					}
					player.draw();
					'step 1'
					if(player.storage.nzry_longnu!=true){
						player.addTempSkill('nzry_longnu_2','phaseUseAfter');
					}
					else{
						player.addTempSkill('nzry_longnu_1','phaseUseAfter');
					};
				},
				subSkill:{
					'1':{
						mod:{
							cardname:function(card,player){
								if(get.color(card)=='red') return 'sha';
							},
							cardnature:function(card,player){
								if(get.color(card)=='red') return 'fire';
							},
							targetInRange:function(card){
								if(get.color(card)=='red') return true;
							},
						},
						ai:{
							effect:{
								target:function(card,player,target,current){
									if(get.tag(card,'respondSha')&&current<0) return 0.6
								}
							},
							respondSha:true,
						},
					},
					'2':{
						mod:{
							cardname:function(card,player){
								if(['trick','delay'].contains(lib.card[card.name].type)) return 'sha';
							},
							cardnature:function(card,player){
								if(['trick','delay'].contains(lib.card[card.name].type)) return 'thunder';
							},
							cardUsable:function(card,player){
								if(card.name=='sha'&&game.hasNature(card,'thunder')) return Infinity;
							},
						},
						ai:{
							effect:{
								target:function(card,player,target,current){
									if(get.tag(card,'respondSha')&&current<0) return 0.6
								}
							},
							respondSha:true,
						},
					},
				},
				ai:{
					fireAttack:true,
					halfneg:true,
					threaten:1.05,
				},
			},
			"nzry_jieying":{
				audio:2,
				locked:true,
				global:"g_nzry_jieying",
				ai:{
					effect:{
						target:function(card){
							if(card.name=='tiesuo') return 'zeroplayertarget';
						},
					},
				},
				group:["nzry_jieying_1","nzry_jieying_2"],
				subSkill:{
					'1':{
						audio:2,
						trigger:{
							player:['linkBefore','enterGame'],
							global:'phaseBefore',
						},
						forced:true,
						filter:function(event,player){
							if(event.name=='link') return player.isLinked();
							return (event.name!='phase'||game.phaseNumber==0)&&!player.isLinked();
						},
						content:function(){
							if(trigger.name!='link') player.link(true);
							else trigger.cancel();
						},	
					},
					'2':{
						audio:2,
						trigger:{
							player:'phaseJieshuBegin',
						},
						direct:true,
						filter:function(event,player){
							return game.hasPlayer(function(current){
								return current!=player&&!current.isLinked();
							});
						},
						content:function(){
							"step 0"
							player.chooseTarget(true,'请选择【结营】的目标',function(card,player,target){
								return target!=player&&!target.isLinked();
							}).ai=function(target){
								return 1+Math.random();
							};
							"step 1"
							if(result.bool){
								player.line(result.targets);
								player.logSkill('nzry_jieying');
								result.targets[0].link(true);
							}else{
								event.finish();
							};
						},
					},
				},
			},
			"g_nzry_jieying":{
				mod:{
					maxHandcard:function (player,num){
						if(game.countPlayer(function(current){return current.hasSkill('nzry_jieying')})>0&&player.isLinked()) return num+2;
					},
				},
			},
			"nzry_junlve":{
				audio:2,
				//marktext:"军",
				intro:{
					content:'当前有#个标记',
				},
				//mark:true,
				trigger:{
					player:"damageAfter",
					source:"damageSource",
				},
				forced:true,
				content:function(){
					player.addMark('nzry_junlve',trigger.num);
				},
			},
			"nzry_cuike":{
				audio:2,
				trigger:{
					player:"phaseUseBegin",
				},
				direct:true,
				content:function(){
					'step 0'
					if(player.countMark('nzry_junlve')%2==1){
						player.chooseTarget('是否发动【摧克】，对一名角色造成1点伤害？').ai=function(target){
							return -get.attitude(player,target);
						};
					}
					else{
						player.chooseTarget('是否发动【摧克】，横置一名角色并弃置其区域内的一张牌？').ai=function(target){
							return -get.attitude(player,target);
						};
					}
					'step 1'
					if(result.bool){
						player.logSkill('nzry_cuike',result.targets);
						if(player.countMark('nzry_junlve')%2==1){
							result.targets[0].damage();
						}
						else{
							result.targets[0].link(true);
							player.discardPlayerCard(result.targets[0],1,'hej',true);
						};
					};
					'step 2'
					if(player.countMark('nzry_junlve')>7){
						player.chooseBool().set('ai',function(){
							return true;
						}).set('prompt','是否弃置所有“军略”标记并对所有其他角色造成1点伤害？');
					}else{
						event.finish();
					};
					'step 3'
					if(result.bool){
						var players=game.players.slice(0).sortBySeat();
						player.line(players);
						player.removeMark('nzry_junlve',player.countMark('nzry_junlve'));
						for(var i=0;i<players.length;i++){
							if(players[i]!=player) players[i].damage();
						};
					};
				},
			},
			"nzry_dinghuo":{
				audio:2,
				limited:true,
				init:function (player){
					player.storage.nzry_dinghuo=false;
				},
				intro:{
					content:"limited",
				},
				unique:true,
				mark:true,
				skillAnimation:true,
				animationColor:'metal',
				enable:'phaseUse',
				filter:function (event,player){
					return !player.storage.nzry_dinghuo&&player.countMark('nzry_junlve')>0;
				},
				check:function (event,player){
					var num=game.countPlayer(function(current){return get.attitude(player,current)<0&&current.isLinked()});
					return player.storage.nzry_junlve>=num&&num==game.countPlayer(function(current){return get.attitude(player,current)<0});
				},
				filterTarget:function(card,player,target){
					return target.isLinked();
				},
				selectTarget:function(){
					return [1,_status.event.player.countMark('nzry_junlve')];
				},
				multiline:true,
				multitarget:true,
				content:function (){
					'step 0'
					player.awakenSkill('nzry_dinghuo');
					player.storage.nzry_dinghuo=true;
					'step 1'
						player.removeMark('nzry_junlve',player.countMark('nzry_junlve'));
					for(var i=0;i<targets.length;i++){
						targets[i].discard(targets[i].getCards('e'));
					}
					player.chooseTarget(true,'对一名目标角色造成1点火焰伤害',function(card,player,target){
						return _status.event.targets.contains(target);
					}).set('targets',targets).ai=function(){return 1};
					'step 2'
					if(result.bool){
						result.targets[0].damage('fire','nocard');
					}
				},
				ai:{
					order:1,
					fireAttack:true,
					result:{
						target:function(player,target){
							if(target.hasSkillTag('nofire')) return 0;
							if(lib.config.mode=='versus') return -1;
							if(player.hasUnknown()) return 0;
							return get.damageEffect(target,player)-target.countCards('e');
						}
					}
				}
			},
			
			"drlt_duorui":{
				audio:2,
				init:function(player,skill){
					if(!player.storage.drlt_duorui) player.storage.drlt_duorui=[];
				},
				trigger:{
					source:'damageSource'
				},
				filter:function(event,player){
					if(player.storage.drlt_duorui.length) return false;
					return player!=event.player&&event.player.isIn()&&_status.currentPhase==player;
				},
				check:function(event,player){
					if(player.hasEnabledSlot()&&!player.hasEnabledSlot(5)) return false;
					return true;
				},
				bannedList:[
					'bifa','buqu','gzbuqu','songci','funan','xinfu_guhuo','reguhuo','huashen','rehuashen','old_guhuo','shouxi','xinpojun','taoluan','xintaoluan','yinbing','xinfu_yingshi','zhenwei','zhengnan','xinzhengnan','zhoufu',
				],
				logTarget:'player',
				content:function(){
					'step 0'
					var list=[];
					var listm=[];
					var listv=[];
					if(trigger.player.name1!=undefined) listm=lib.character[trigger.player.name1][3];
					else listm=lib.character[trigger.player.name][3];
					if(trigger.player.name2!=undefined) listv=lib.character[trigger.player.name2][3];
					listm=listm.concat(listv);
					var func=function(skill){
						var info=get.info(skill);
						if(!info||info.charlotte||info.hiddenSkill||info.zhuSkill||info.juexingji||info.limited||info.dutySkill||(info.unique&&!info.gainable)||lib.skill.drlt_duorui.bannedList.contains(skill)) return false;
						return true;
					};
					for(var i=0;i<listm.length;i++){
						if(func(listm[i])) list.add(listm[i]);
					}
					event.skills=list;
					if(player.hasEnabledSlot()){
						player.chooseToDisable().ai=function(event,player,list){
							if(list.contains('equip5')) return 'equip5';
							return list.randomGet();
						};
					}
					'step 1'
					if(event.skills.length>0){
						player.chooseControl(event.skills).set('prompt','请选择要获得的技能').set('ai',function(){return event.skills.randomGet()});
					}
					else event.finish();
					'step 2'
					player.addTempSkill(result.control,{player:'dieAfter'});
					player.popup(result.control,'thunder');
					player.storage.drlt_duorui=[result.control];
					player.storage.drlt_duorui_player=trigger.player;
					trigger.player.storage.drlt_duorui=[result.control];
					trigger.player.addTempSkill('drlt_duorui1',{player:'phaseAfter'});
					game.log(player,'获得了技能','#g【'+get.translation(result.control)+'】')
				},
				group:['duorui_clear'],
			},
			"duorui_clear":{
				trigger:{global:['phaseAfter','dieAfter'],},
				filter:function(event,player){
					if(!player.storage.drlt_duorui_player||!player.storage.drlt_duorui) return false;
					return player.storage.drlt_duorui_player==event.player&&player.storage.drlt_duorui.length;
				},
				silent:true,
				forced:true,
				popup:false,
				content:function(){
					player.removeSkill(player.storage.drlt_duorui[0]);
					delete player.storage.drlt_duorui_player;
					player.storage.drlt_duorui=[];
				},
			},
			"drlt_duorui1":{
				init:function(player,skill){
					player.disableSkill(skill,player.storage.drlt_duorui);
				},
				onremove:function(player,skill){
					player.enableSkill(skill);
				},
				locked:true,
				mark:true,
				charlotte:true,
				intro:{
					content:function(storage,player,skill){
						var list=[];
						for(var i in player.disabledSkills){
							if(player.disabledSkills[i].contains(skill)) list.push(i);
						};
						if(list.length){
							var str='失效技能：';
							for(var i=0;i<list.length;i++){
								if(lib.translate[list[i]+'_info']) str+=get.translation(list[i])+'、';
							};
							return str.slice(0,str.length-1);
						};
					},
				},
			},
			drlt_zhiti:{
				audio:2,
				locked:true,
				group:["drlt_zhiti_1","drlt_zhiti_2","drlt_zhiti_3","drlt_zhiti_4","drlt_zhiti_5"],
				global:'g_drlt_zhiti',
				subSkill:{
					'1':{
						audio:"drlt_zhiti",
						trigger:{
							global:'juedouAfter'
						},
						forced:true,
						filter:function(event,player){
							return event.targets&&event.targets.contains(player)&&event.turn!=player&&player.hasDisabledSlot();
						},
						content:function(){
							player.chooseToEnable();
						},
					},
					'2':{
						audio:"drlt_zhiti",
						trigger:{
							player:'juedouAfter',
						},
						forced:true,
						filter:function(event,player){
							return event.turn!=player&&player.hasDisabledSlot();
						},
						content:function(){
							player.chooseToEnable();
						},
					},
					'3':{
						audio:"drlt_zhiti",
						trigger:{
							player:'chooseToCompareAfter'
						},
						forced:true,
						filter:function(event,player){
							return event.result.bool==true&&player.hasDisabledSlot();
						},
						content:function(){
							'step 0'
							player.chooseToEnable();
						},
					},
					'4':{
						audio:"drlt_zhiti",
						trigger:{
							global:'chooseToCompareAfter'
						},
						forced:true,
						filter:function(event,player){
							return (event.targets!=undefined&&event.targets.contains(player)||event.target==player)&&event.result.bool==false&&player.hasDisabledSlot();
						},
						content:function(){
							player.chooseToEnable();
						},
					},
					'5':{
						audio:"drlt_zhiti",
						trigger:{
							player:['damageEnd']
						},
						forced:true,
						filter:function(event,player){
							return player.hasDisabledSlot();
						},
						content:function(){
							player.chooseToEnable();
						},
					},
				},
			},
			g_drlt_zhiti:{
				mod:{
					maxHandcard:function (player,num){
						if(player.maxHp>player.hp&&game.countPlayer(function(current){
							return current!=player&&current.hasSkill('drlt_zhiti')&&current.inRange(player);
						})) return num-1;
					},
				},
			},
			'drlt_poxi':{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('h')>0;
					//return target!=player;
				},
				content:function(){
					'step 0'
					event.list1=[];
					event.list2=[];
					if(player.countCards('h')>0){
						var chooseButton=player.chooseButton(4,['你的手牌',player.getCards('h'),get.translation(target.name)+'的手牌',target.getCards('h')]);
					}
					else{
						var chooseButton=player.chooseButton(4,[get.translation(target.name)+'的手牌',target.getCards('h')]);
					}
					chooseButton.set('target',target);
					chooseButton.set('ai',function(button){
						var player=_status.event.player;
						var target=_status.event.target;
						var ps=[];
						var ts=[];
						for(var i=0;i<ui.selected.buttons.length;i++){
							var card=ui.selected.buttons[i].link;
							if(target.getCards('h').contains(card)) ts.push(card);
							else ps.push(card);
						}
						var card=button.link;
						var owner=get.owner(card);
						var val=get.value(card)||1;
						if(owner==target){
							if(ts.length>1) return 0;
							if(ts.length==0||player.hp>3) return val;
							return 2*val;
						}
						return 7-val;
					});
					chooseButton.set('filterButton',function(button){
						for(var i=0;i<ui.selected.buttons.length;i++){
							if(get.suit(button.link)==get.suit(ui.selected.buttons[i].link)) return false;
						};
						return true;
					});
					'step 1'
					if(result.bool){
						var list=result.links;
						for(var i=0;i<list.length;i++){
							if(get.owner(list[i])==player){
								event.list1.push(list[i]);
							}else{
								event.list2.push(list[i]);
							};
						};
						if(event.list1.length&&event.list2.length){
							game.loseAsync({
								lose_list:[
									[player,event.list1],
									[target,event.list2]
								],
								discarder:player,
							}).setContent('discardMultiple');
						}
						else if(event.list2.length){
							target.discard(event.list2);
						}
						else player.discard(event.list1);
					};
					'step 2'
					if(event.list1.length+event.list2.length==4){
						if(event.list1.length==0) player.loseMaxHp();
						if(event.list1.length==1){
							var evt=_status.event;
							for(var i=0;i<10;i++){
								if(evt&&evt.getParent)evt=evt.getParent();
								if(evt.name=='phaseUse'){
								evt.skipped=true;
									break;
								};
							};
							player.addTempSkill('drlt_poxi1',{player:'phaseAfter'});
						};
						if(event.list1.length==3) player.recover();
						if(event.list1.length==4) player.draw(4);
					};
				},
				ai:{
					order:13,
					result:{
						target:function(target,player){
							return -1;
						},
					},
				},
			},
			'drlt_poxi1':{
				mod:{
					maxHandcard:function (player,num){
						return num-1;
					},
				},
			},
			drlt_jieying_mark:{
				marktext:"营",
				intro:{
					name:'营',
					content:'mark',
				},
				mod:{
					cardUsable:function (card,player,num){
						if(player.hasMark('drlt_jieying_mark')&&card.name=='sha') return num+game.countPlayer(function(current){
							return current.hasSkill('drlt_jieying');
						});
					},
					maxHandcard:function (player,num){
						if(player.hasMark('drlt_jieying_mark')) return num+game.countPlayer(function(current){
							return current.hasSkill('drlt_jieying');
						});
					},
				},
				audio:'drlt_jieying',
				trigger:{
					player:'phaseDrawBegin2'
				},
				forced:true,
				filter:function(event,player){
					return !event.numFixed&&player.hasMark('drlt_jieying_mark')&&game.hasPlayer(function(current){
						return current.hasSkill('drlt_jieying');
					});
				},
				content:function(){
					trigger.num+=game.countPlayer(function(current){
						return current.hasSkill('drlt_jieying');
					});
				},
				ai:{
					nokeep:true,
					skillTagFilter:function(player){
						if(!player.hasMark('drlt_jieying_mark')) return false;
					},
				},
			},
			'drlt_jieying':{
				audio:2,
				locked:false,
				global:'drlt_jieying_mark',
				group:["drlt_jieying_1","drlt_jieying_2","drlt_jieying_3"],
				subSkill:{
					'1':{
						audio:'drlt_jieying',
						trigger:{
							player:'phaseBegin'
						},
						forced:true,
						filter:function(event,player){
							return !game.hasPlayer(function(current){
								return current.hasMark('drlt_jieying_mark');
							});
						},
						content:function(){
							player.addMark('drlt_jieying_mark',1);
						},
					},
					'2':{
						audio:'drlt_jieying',
						trigger:{
							player:"phaseJieshuBegin",
						},
						direct:true,
						filter:function(event,player){
							return player.hasMark('drlt_jieying_mark');
						},
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('drlt_jieying'),"将“营”交给一名角色；其摸牌阶段多摸一张牌，出牌阶段使用【杀】的次数上限+1且手牌上限+1。该角色回合结束后，其移去“营”标记，然后你获得其所有手牌。",function(card,player,target){
								return target!=player;
							}).ai=function(target){
								if(get.attitude(player,target)>0)
								return 0.1;
								if(get.attitude(player,target)<1&&(target.isTurnedOver()||target.countCards('h')<1))
								return 0.2;
									if(get.attitude(player,target)<1&&target.countCards('h')>0&&target.countCards('j',{name:'lebu'})>0)
								return target.countCards('h')*0.8+target.getHandcardLimit()*0.7+2;
								if(get.attitude(player,target)<1&&target.countCards('h')>0)
								return target.countCards('h')*0.8+target.getHandcardLimit()*0.7;
								return 1;
							};
							'step 1'
							if(result.bool){
								var target=result.targets[0];
								player.line(target);
								player.logSkill('drlt_jieying',target);
								var mark=player.countMark('drlt_jieying_mark');
								player.removeMark('drlt_jieying_mark',mark);
								target.addMark('drlt_jieying_mark',mark);
							};
						},
					},
					'3':{
						audio:'drlt_jieying',
						trigger:{
							global:'phaseEnd',
						},
						forced:true,
						filter:function(event,player){
							return player!=event.player&&event.player.hasMark('drlt_jieying_mark')&&event.player.isIn();
						},
						logTarget:'player',
						content:function(){
							if(trigger.player.countCards('h')>0){
								trigger.player.give(trigger.player.getCards('h'),player);
							}
							trigger.player.removeMark('drlt_jieying_mark',trigger.player.countMark('drlt_jieying_mark'));
						},
					},
				},
			},
		},
		card:{
			changandajian_equip1:{
				fullskin:true,
				derivation:'shen_sunquan',
				type:'equip',
				subtype:'equip1',
				distance:{attackFrom:-5},
				onLose:function(){
					card.fix();
					card.remove();
					card.destroyed=true;
					game.log(card,'被销毁了');
					player.addTempSkill('changandajian_destroy');
				},
				ai:{
					value:function(card,player){
						if(game.hasPlayer(function(current){
							return lib.skill.changandajian_destroy.getEffect(player,current)>0;
						})) return 0;
						return 8;
					},
					equipValue:function(card,player){
						if(game.hasPlayer(function(current){
							return lib.skill.changandajian_destroy.getEffect(player,current)>0;
						})) return 0;
						return 8;
					},
					basic:{
						equipValue:2,
					}
				},
			},
			changandajian_equip2:{
				fullskin:true,
				cardimage:'changandajian_equip1',
				derivation:'shen_sunquan',
				type:'equip',
				subtype:'equip2',
				onLose:function(){
					card.fix();
					card.remove();
					card.destroyed=true;
					game.log(card,'被销毁了');
					player.addTempSkill('changandajian_destroy');
				},
				ai:{
					value:function(card,player){
						if(game.hasPlayer(function(current){
							return lib.skill.changandajian_destroy.getEffect(player,current)>0;
						})) return 0;
						return 8;
					},
					equipValue:function(card,player){
						if(game.hasPlayer(function(current){
							return lib.skill.changandajian_destroy.getEffect(player,current)>0;
						})) return 0;
						return 8;
					},
					basic:{
						equipValue:2,
					}
				},
			},
			changandajian_equip3:{
				fullskin:true,
				cardimage:'changandajian_equip1',
				derivation:'shen_sunquan',
				type:'equip',
				subtype:'equip3',
				distance:{globalTo:2},
				onLose:function(){
					card.fix();
					card.remove();
					card.destroyed=true;
					game.log(card,'被销毁了');
					player.addTempSkill('changandajian_destroy');
				},
				ai:{
					value:function(card,player){
						if(game.hasPlayer(function(current){
							return lib.skill.changandajian_destroy.getEffect(player,current)>0;
						})) return 0;
						return 8;
					},
					equipValue:function(card,player){
						if(game.hasPlayer(function(current){
							return lib.skill.changandajian_destroy.getEffect(player,current)>0;
						})) return 0;
						return 8;
					},
					basic:{
						equipValue:2,
					}
				},
			},
			changandajian_equip4:{
				fullskin:true,
				cardimage:'changandajian_equip1',
				derivation:'shen_sunquan',
				type:'equip',
				subtype:'equip4',
				distance:{globalFrom:-2},
				onLose:function(){
					card.fix();
					card.remove();
					card.destroyed=true;
					game.log(card,'被销毁了');
					player.addTempSkill('changandajian_destroy');
				},
				ai:{
					value:function(card,player){
						if(game.hasPlayer(function(current){
							return lib.skill.changandajian_destroy.getEffect(player,current)>0;
						})) return 0;
						return 8;
					},
					equipValue:function(card,player){
						if(game.hasPlayer(function(current){
							return lib.skill.changandajian_destroy.getEffect(player,current)>0;
						})) return 0;
						return 8;
					},
					basic:{
						equipValue:2,
					}
				},
			},
			changandajian_equip5:{
				fullskin:true,
				cardimage:'changandajian_equip1',
				derivation:'shen_sunquan',
				type:'equip',
				subtype:'equip5',
				skills:['changandajian_equip5'],
				onLose:function(){
					card.fix();
					card.remove();
					card.destroyed=true;
					game.log(card,'被销毁了');
					player.addTempSkill('changandajian_destroy');
				},
				ai:{
					value:function(card,player){
						if(game.hasPlayer(function(current){
							return lib.skill.changandajian_destroy.getEffect(player,current)>0;
						})) return 0;
						return 8;
					},
					equipValue:function(card,player){
						if(game.hasPlayer(function(current){
							return lib.skill.changandajian_destroy.getEffect(player,current)>0;
						})) return 0;
						return 8;
					},
					basic:{
						equipValue:2,
					}
				},
			},
			changandajian_equip6:{
				fullskin:true,
				cardimage:'changandajian_equip1',
				derivation:'shen_sunquan',
				type:'equip',
				subtype:'equip6',
				distance:{globalTo:2,globalFrom:-2},
				onLose:function(){
					card.fix();
					card.remove();
					card.destroyed=true;
					game.log(card,'被销毁了');
					player.addTempSkill('changandajian_destroy');
				},
				ai:{
					value:function(card,player){
						if(game.hasPlayer(function(current){
							return lib.skill.changandajian_destroy.getEffect(player,current)>0;
						})) return 0;
						return 8;
					},
					equipValue:function(card,player){
						if(game.hasPlayer(function(current){
							return lib.skill.changandajian_destroy.getEffect(player,current)>0;
						})) return 0;
						return 8;
					},
					basic:{
						equipValue:2,
					}
				},
			},
			qizhengxiangsheng:{
				enable:true,
				type:'trick',
				fullskin:true,
				derivation:'shen_xunyu',
				filterTarget:lib.filter.notMe,
				content:function(){
					'step 0'
					if(!event.qizheng_name){
						if(player.isIn()) player.chooseControl('奇兵','正兵').set('prompt','请选择'+get.translation(target)+'的标记').set('choice',function(){
							var e1=1.5*get.sgn(get.damageEffect(target,player,target));
							var e2=0;
							if(target.countGainableCards(player,'h')>0&&!target.hasSkillTag('noh')) e2=-1;
							var es=target.getGainableCards(player,'e');
							if(es.length) e2=Math.min(e2,function(){
								var max=0;
								for(var i of es) max=Math.max(max,get.value(i,target))
								return -max/4;
							}());
							if(Math.abs(e1-e2)<=0.3) return Math.random()<0.5?'奇兵':'正兵';
							if(e1<e2) return '奇兵';
							return '正兵';
						}()).set('ai',function(){
							return _status.event.choice;
						});
						else event.finish();
					}
					'step 1'
					if(!event.qizheng_name&&result&&result.control) event.qizheng_name=result.control;
					if(event.directHit) event._result={bool:false};
					else target.chooseToRespond('请打出一张杀或闪响应奇正相生',function(card,player){
						var name=get.name(card);
						return name=='sha'||name=='shan';
					}).set('ai',function(card){
						if(_status.event.choice=='all'){
							var rand=get.rand('qizhengxiangsheng');
							if(rand>0.5) return 0;
							return 1+Math.random();
						}
						if(get.name(card)==_status.event.choice) return get.order(card);
						return 0;
					}).set('choice',function(){
						if(target.hasSkillTag('useShan')) return 'shan';
						if(typeof event.qizheng_aibuff=='boolean'){
							var shas=target.getCards('h','sha'),shans=target.getCards('h','shan');
							if(event.qizheng_aibuff){
								if(shas.length>=Math.max(1,shans.length)) return 'shan';
								if(shans.length>shas.length) return 'sha';
								return false;
							}
							if(!shas.length||!shans.length) return false;
						}
						var e1=1.5*get.sgn(get.damageEffect(target,player,target));
						var e2=0;
						if(target.countGainableCards(player,'h')>0&&!target.hasSkillTag('noh')) e2=-1;
						var es=target.getGainableCards(player,'e');
						if(es.length) e2=Math.min(e2,function(){
							var max=0;
							for(var i of es) max=Math.max(max,get.value(i,target))
							return -max/4;
						}());
						if(e1-e2>=0.3) return 'shan';
						if(e2-e1>=0.3) return 'sha';
						return 'all';
					}());
					'step 2'
					var name=result.bool?result.card.name:null,require=event.qizheng_name;
					if(require=='奇兵'&&name!='sha') target.damage();
					else if(require=='正兵'&&name!='shan'&&target.countGainableCards(player,'he')>0) player.gainPlayerCard(target,true,'he');
				},
				ai:{
					order:5,
					tag:{
						damage:0.5,
						gain:0.5,
						loseCard:1,
						respondShan:1,
						respondSha:1,
					},
					result:{
						target:function(player,target){
							var e1=1.5*get.sgn(get.damageEffect(target,player,target));
							var e2=0;
							if(target.countGainableCards(player,'h')>0&&!target.hasSkillTag('noh')) e2=-1;
							var es=target.getGainableCards(player,'e');
							if(es.length) e2=Math.min(e2,function(){
								var max=0;
								for(var i of es) max=Math.max(max,get.value(i,target))
								return -max/4;
							}());
							if(game.hasPlayer(function(current){
								return current.hasSkill('tianzuo')&&get.attitude(current,player)<=0;
							})) return Math.max(e1,e2);
							return Math.min(e1,e2);
						},
					},
				},
			},
		},
		dynamicTranslate:{
			nzry_longnu:function(player){
				if(player.hasSkill('nzry_longnu_2')) return '转换技，锁定技，阴：出牌阶段开始时，你失去1点体力并摸一张牌，然后本阶段内你的红色手牌均视为火【杀】且无距离限制。<span class="legendtext">阳：出牌阶段开始时，你减1点体力上限并摸一张牌，然后本阶段内你的锦囊牌均视为雷【杀】且无使用次数限制。</span>';
				if(player.hasSkill('nzry_longnu_1')) return '转换技，锁定技，<span class="legendtext">阴：出牌阶段开始时，你失去1点体力并摸一张牌，然后本阶段内你的红色手牌均视为火【杀】且无距离限制。</span>阳：出牌阶段开始时，你减1点体力上限并摸一张牌，然后本阶段内你的锦囊牌均视为雷【杀】且无使用次数限制。';
				if(player.storage.nzry_longnu==true) return '转换技，锁定技，阴：出牌阶段开始时，你失去1点体力并摸一张牌，然后本阶段内你的红色手牌均视为火【杀】且无距离限制。<span class="bluetext">阳：出牌阶段开始时，你减1点体力上限并摸一张牌，然后本阶段内你的锦囊牌均视为雷【杀】且无使用次数限制。</span>';
				return '转换技，锁定技，<span class="bluetext">阴：出牌阶段开始时，你失去1点体力并摸一张牌，然后本阶段内你的红色手牌均视为火【杀】且无距离限制。</span>阳：出牌阶段开始时，你减1点体力上限并摸一张牌，然后本阶段内你的锦囊牌均视为雷【杀】且无使用次数限制。';
			},
		},
		translate:{
			"shen_luxun":"神陆逊",
			shen_luxun_prefix:'神',
			"nzry_junlve":"军略",
			"nzry_junlve_info":"锁定技，当你受到或造成伤害后，你获得X个“军略”标记(X为伤害点数)。",
			"nzry_cuike":"摧克",
			"nzry_cuike_info":"出牌阶段开始时，若“军略”标记的数量为奇数，你可以对一名角色造成1点伤害；若“军略”标记的数量为偶数，你可以横置一名角色并弃置其区域内的一张牌。然后，若“军略”标记的数量超过7个，你可以移去全部“军略”标记并对所有其他角色造成1点伤害。",
			"nzry_dinghuo":"绽火",
			"nzry_dinghuo_info":"限定技，出牌阶段，你可以移去全部“军略”标记，令至多等量的已横置角色弃置所有装备区内的牌。然后，你对其中一名角色造成1点火焰伤害。",
			"shen_liubei":"神刘备",
			shen_liubei_prefix:'神',
			"nzry_longnu":"龙怒",
			"nzry_longnu_info":"转换技，锁定技，阴：出牌阶段开始时，你失去1点体力并摸一张牌，然后本阶段内你的红色手牌均视为火【杀】且无距离限制。阳：出牌阶段开始时，你减1点体力上限并摸一张牌，然后本阶段内你的锦囊牌均视为雷【杀】且无使用次数限制。",
			"nzry_jieying":"结营",
			"nzry_jieying_info":"锁定技，游戏开始时或当你的武将牌重置时，你横置；所有已横置的角色手牌上限+2；结束阶段，你横置一名其他角色。",
			
			"shen_ganning":"神甘宁",
			shen_ganning_prefix:'神',
			"shen_zhangliao":"神张辽",
			shen_zhangliao_prefix:'神',
			
			"drlt_poxi":"魄袭",
			"drlt_poxi_info":"出牌阶段限一次，你可以观看一名其他角色的手牌，然后你可以弃置你与其手牌中的四张花色不同的牌。若如此做，根据此次弃置你的牌的数量执行以下效果：零张，扣减1点体力上限；一张，你结束出牌阶段且本回合手牌上限-1；三张，你回复1点体力；四张，你摸四张牌。",
			"drlt_jieying":"劫营",
			"drlt_jieying_info":"回合开始时，若场上没有拥有“营”标记的角色，你获得1个“营”标记；结束阶段，你可以将你的一个“营”标记交给一名角色；有“营”标记的角色摸牌阶段多摸一张牌，出牌阶段使用【杀】的次数上限+1，手牌上限+1。有“营”的其他角色回合结束时，其移去“营”标记，然后你获得其所有手牌。",
			drlt_jieying_mark:"劫营",
			"drlt_duorui1":"失效技能",
			"drlt_duorui1_bg":"锐",
			"drlt_duorui":"夺锐",
			"drlt_duorui_info":"当你于出牌阶段内对一名其他角色造成伤害后，你可以废除你装备区内的一个装备栏（若已全部废除则可以跳过此步骤），然后获得该角色的一个技能直到其的下回合结束或其死亡(觉醒技，限定技，主公技，隐匿技，使命技等特殊技能除外)。若如此做，该角色该技能失效且你不能再发动〖夺锐〗直到你失去以此法获得的技能。",
			"drlt_zhiti":"止啼",
			"drlt_zhiti_info":"锁定技，你攻击范围内已受伤的其他角色手牌上限-1；当你拼点或【决斗】胜利，或受到伤害后，你恢复一个装备栏。",
			
			shen_zhaoyun:'神赵云',
			shen_zhaoyun_prefix:'神',
			shen_guanyu:'神关羽',
			shen_guanyu_prefix:'神',
			shen_lvmeng:'神吕蒙',
			shen_lvmeng_prefix:'神',
			shen_simayi:'神司马懿',
			shen_simayi_prefix:'神',
			shen_caocao:'神曹操',
			shen_caocao_prefix:'神',
			shen_zhugeliang:'神诸葛亮',
			shen_zhugeliang_prefix:'神',
			shen_zhouyu:'神周瑜',
			shen_zhouyu_prefix:'神',
			shen_lvbu:'神吕布',
			shen_lvbu_prefix:'神',
			xinjuejing:'绝境',
			xinjuejing_info:'锁定技。①你的手牌上限+2。②当你进入或脱离濒死状态时，你摸一张牌。',
			relonghun:'龙魂',
			relonghun_info:'你可以将同花色的一至两张牌按下列规则使用或打出：红桃当【桃】，方块当火【杀】，梅花当【闪】，黑桃当普【无懈可击】。若你以此法使用了两张红色牌，则此牌回复值或伤害值+1。若你以此法使用了两张黑色牌，则你弃置当前回合角色一张牌。',
			xinlonghun:'龙魂',
			xinlonghun_info:'你可以将你的牌按下列规则使用或打出：红桃当【桃】，方块当火【杀】，梅花当【闪】，黑桃当普【无懈可击】。',
			longhun:'龙魂',
			longhun1:'龙魂♥︎',
			longhun2:'龙魂♦︎',
			longhun3:'龙魂♠︎',
			longhun4:'龙魂♣︎',
			juejing:'绝境',
			longhun_info:'你可以将同花色的X张牌按下列规则使用或打出：红桃当【桃】，方块当具火焰伤害的【杀】，梅花当【闪】，黑桃当【无懈可击】（X为你当前的体力值且至少为1）。',
			juejing_info:'锁定技。①摸牌阶段，你令额定摸牌数+X（X为你已损失的体力值）。②你的手牌上限+2。',
			wushen:'武神',
			wushen_info:'锁定技，你的红桃手牌均视为【杀】；锁定技，你使用红桃【杀】无距离和次数限制且不可被响应。',
			wuhun:'武魂',
			wuhun21:'武魂',
			wuhun22:'武魂',
			wuhun23:'武魂',
			wuhun2:'武魂',
			wuhun3:'武魂',
			wuhun_info_alter:'锁定技，当你受到1点伤害后，你令伤害来源获得1枚“梦魇”标记；当你死亡时，你令拥有最多“梦魇”标记的一名其他角色判定，若结果不为【桃】或【桃园结义】，则该角色死亡。',
			wuhun_info:'锁定技，杀死你的角色立即进入濒死状态。',
			shelie:'涉猎',
			gongxin:'攻心',
			gongxin_discard:'弃置',
			gongxin_top:'牌堆顶',
			renjie:'忍戒',
			renjie2:'忍戒',
			renjie_info:'锁定技，当你受到1点伤害后，你获得一枚“忍”标记；锁定技，当你于弃牌阶段内弃置牌后，你获得等同于失去的牌数量的“忍”标记。',
			sbaiyin:'拜印',
			sbaiyin_info:'觉醒技，准备阶段开始时，若你的“忍”标记数不小于4，你减1点体力上限，然后获得〖极略〗。',
			jilue:'极略',
			jilue_info:'当一名角色的判定牌生效前，你可以弃1枚“忍”标记并发动〖鬼才〗；每当你受到伤害后，你可以弃1枚“忍”标记并发动〖放逐〗；当你使用锦囊牌时，你可以弃1枚“忍”标记并发动〖集智〗；出牌阶段限一次，你可以弃1枚“忍”标记并发动〖制衡〗；出牌阶段，你可以弃1枚“忍”标记并获得〖完杀〗直到回合结束。',
			jilue_guicai:'鬼才',
			jilue_fangzhu:'放逐',
			jilue_wansha:'完杀',
			jilue_zhiheng:'制衡',
			jilue_jizhi:'集智',
			lianpo:'连破',
			lianpo_info:'一名角色的回合结束时，若你本回合内杀死过角色，则你可以进行一个额外的回合。',
			guixin:'归心',
			qinyin:'琴音',
			yeyan:'业炎',
			shelie_info:'摸牌阶段，你可以改为从牌堆顶亮出五张牌，然后选择获得不同花色的牌各一张。',
			gongxin_info:'出牌阶段限一次，你可以观看一名其他角色的手牌，并可以展示其中一张红桃牌，然后将其弃置或置于牌堆顶。',
			guixin_info:'当你受到1点伤害后，你可以获得每名其他角色区域里的一张牌，然后你翻面。',
			guixin_info_alter:'当你受到1点伤害后，你可以随机获得每名其他角色区域里的一张牌，然后你翻面。',
			qinyin_info:'弃牌阶段结束时，若你于此阶段内弃置过两张或更多的牌，则你可以选择一项：1. 令所有角色各回复1点体力；2. 令所有角色各失去1点体力。',
			// qinyin_info:'每当你于弃牌阶段内因你的弃置而失去第X张手牌时（X至少为2），你可以选择一项：1.令所有角色各回复1点体力；2.令所有角色各失去1点体力。每阶段限一次。',
			yeyan_info:'限定技，出牌阶段，你可以对一至三名角色造成至多共3点火焰伤害（你可以任意分配每名目标角色受到的伤害点数），若你将对一名角色分配2点或更多的火焰伤害，你须先弃置四张不同花色的手牌再失去3点体力。',
			qixing:'七星',
			qixing_bg:'星',
			qixing2:'七星',
			qixing3:'七星',
			qixing_info:'游戏开始时，你将牌堆顶的七张牌置于你的武将牌上，称之为“星”。然后/摸牌阶段结束后，你可用任意数量的手牌等量交换这些“星”。',
			dawu:'大雾',
			dawu2_bg:'雾',
			dawu2:'大雾',
			dawu3:'大雾',
			// dawu2_info:'已获得大雾标记',
			dawu_info:'结束阶段，你可以弃置X张“星”并指定等量的角色：直到你的下回合开始，当这些角色受到非雷电伤害时，防止此伤害。',
			kuangfeng:'狂风',
			kuangfeng2:'狂风',
			kuangfeng2_bg:'风',
			// kuangfeng2_info:'已获得狂风标记',
			kuangfeng3:'狂风',
			kuangfeng_info:'结束阶段，你可以弃置1张“星”并指定一名角色：直到你的下回合开始，该角色受到火焰伤害时，此伤害+1。',
			baonu:'狂暴',
			baonu_bg:'暴',
			baonu_info:'锁定技，游戏开始时，你获得两枚“暴怒”标记；锁定技，当你造成/受到1点伤害后，你获得1枚“暴怒”标记。',
			shenfen:'神愤',
			shenfen_info:'限定技，出牌阶段，你可以弃置6枚暴怒标记，对场上所有其他角色造成1点伤害，然后令其弃置四张牌。',
			wuqian:'无前',
			wuqian_info:'出牌阶段，你可以弃置两枚暴怒标记并获得技能〖无双〗直到回合结束。',
			wumou:'无谋',
			wumou_info:'锁定技，当你使用普通锦囊牌时，你选择一项：1.弃置1枚“暴怒”标记；2.失去1点体力。',
			ol_wuqian:'无前',
			ol_wuqian_info:'出牌阶段，你可以弃置2枚“暴怒”标记并选择一名本回合内未选择过的其他角色，你获得技能〖无双〗并令其防具无效直到回合结束。',
			ol_shenfen:'神愤',
			ol_shenfen_info:'出牌阶段限一次，你可以弃置6枚“暴怒”标记并选择所有其他角色，对这些角色各造成1点伤害。然后这些角色先各弃置其装备区里的牌，再各弃置四张手牌。最后你将你的武将牌翻面。',
			"new_wuhun":"武魂",
			"new_wuhun_info":"锁定技，当你受到伤害后，伤害来源获得X个“梦魇”标记（X为伤害点数）。锁定技，当你死亡时，你选择一名“梦魇”标记数量最多的其他角色。该角色进行判定：若判定结果不为【桃】或【桃园结义】，则该角色死亡。",
			"new_guixin":"归心",
			"new_guixin_info":"当你受到1点伤害后，你可以按照你选择的区域优先度随机获得每名其他角色区域里的一张牌，然后你翻面。",
			ol_zhangliao:'OL神张辽',
			ol_zhangliao_prefix:'OL神',
			olduorui:'夺锐',
			olduorui2:'夺锐',
			olduorui_info:'当你于出牌阶段内对一名角色造成伤害后，你可以选择该角色武将牌上的一个技能。若如此做，你结束出牌阶段，且你令此技能于其下个回合结束之前无效。',
			olzhiti:'止啼',
			olzhiti_info:'锁定技，你攻击范围内已受伤角色的手牌上限-1。若场上已受伤的角色数：不小于1，你的手牌上限+1；不小于3，你于摸牌阶段开始时令额定摸牌数+1；不小于5，回合结束时，你废除一名角色的一个随机装备栏。',
			shen_caopi:'神曹丕',
			shen_caopi_prefix:'神',
			chuyuan:'储元',
			chuyuan_info:'一名角色受到伤害后，若你武将牌上「储」的数量小于体力上限，你可以令其摸一张牌。然后其将一张手牌置于你的武将牌上，称为「储」。',
			//chuyuan_info:'一名角色受到伤害后，你可以令其摸一张牌。然后其将一张手牌置于你的武将牌上，称为「储」。你的手牌上限+X（X为你武将牌上的「储」数）。',
			dengji:'登极',
			dengji_info:'觉醒技，准备阶段，若你武将牌上的「储」数不小于3，则你减1点体力上限并获得所有「储」，然后获得技能〖天行〗和〖奸雄〗。',
			tianxing:'天行',
			tianxing_info:'觉醒技，准备阶段，若你武将牌上的「储」数不小于3，则你减1点体力上限并获得所有「储」，然后失去技能〖储元〗，选择获得以下技能中的一个：〖仁德〗/〖制衡〗/〖乱击〗/〖行动〗。',
			shen_zhenji:'神甄宓',
			shen_zhenji_prefix:'神',
			shenfu:'神赋',
			shenfu_info:'回合结束时，若你的手牌数为：奇数，你可对一名其他角色造成1点雷属性伤害。若其死亡，你可重复此流程。偶数，你可选择一名角色，你令其摸一张牌或弃置一张手牌。若其手牌数等于体力值，你可重复此流程。',
			qixian:'七弦',
			qixian_info:'锁定技，你的手牌上限视为7。',
			caopi_xingdong:'行动',
			caopi_xingdong_info:'出牌阶段限一次，你可以将一张【杀】或普通锦囊牌交给一名其他角色，然后该角色选择一项：对除你以外的角色使用此牌并在此牌结算完成后和你各摸一张牌；或跳过下回合的判定阶段和摸牌阶段。',
			shen_diaochan:'神貂蝉',
			shen_diaochan_prefix:'神',
			meihun:'魅魂',
			meihun_info:'结束阶段或当你成为【杀】的目标后，你可以令一名其他角色交给你一张你声明的花色的手牌，若其没有则你观看其手牌然后弃置其中一张。',
			huoxin_control:'惑心',
			huoxin:'惑心',
			huoxin_info:'出牌阶段限一次，你可以展示两张花色相同的手牌并分别交给两名其他角色，然后令这两名角色拼点，没赢的角色获得1个“魅惑”标记。拥有2个或更多“魅惑”的角色回合即将开始时，该角色移去其所有“魅惑”，此回合改为由你操控。',
			boss_zhaoyun:'高达一号',
			boss_zhaoyun_ab:'神赵云',
			boss_zhaoyun_prefix:'神',
			boss_juejing:'绝境',
			boss_juejing2:'绝境',
			boss_juejing_info:'锁定技，摸牌阶段开始前，你跳过此阶段。当你得到牌/失去手牌后，若你的手牌数大于4/小于4，则你将手牌摸至4张/弃置至4张。',
			zhanjiang:'斩将',
			zhanjiang_info:'准备阶段开始时，如果其他角色的装备区内有【青釭剑】，你可以获得之。',
			shen_guojia:'神郭嘉',
			shen_guojia_prefix:'神',
			shuishi:'慧识',
			shuishi_info:'出牌阶段限一次，若你的体力上限小于10，则你可选择一名角色。你令其摸一张牌，若其以此法得到的牌：与该角色的其他手牌花色均不相同，则你加1点体力上限，若你的体力上限小于10，则你可以重复此流程；否则你减1点体力上限，且其展示所有手牌。',
			stianyi:'天翊',
			stianyi_info:'觉醒技，准备阶段，若场上的所有存活角色均于本局游戏内受到过伤害，则你加2点体力上限并回复1点体力，然后令一名角色获得技能〖佐幸〗。',
			zuoxing:'佐幸',
			zuoxing2:'佐幸',
			zuoxing_info:'出牌阶段限一次，若令你获得〖佐幸〗的角色存活且体力上限大于1，则你可以令其减1点体力上限，并视为使用一张普通锦囊牌。',
			sghuishi:'辉逝',
			sghuishi_info:'限定技，出牌阶段，你可以选择一名其他角色：若其有未发动过的觉醒技，则你令其发动这些觉醒技时无视原有条件；否则其摸四张牌。然后你减2点体力上限。',
			shen_taishici:'神太史慈',
			shen_taishici_prefix:'神',
			dulie:'笃烈',
			dulie_info:'锁定技。当你成为【杀】的目标时，若使用者的体力值大于你，则你进行判定。若结果为红桃，则取消此目标。',
			tspowei:'破围',
			tspowei_info:'使命技。①游戏开始时，你令所有其他角色获得一个“围”。②一名角色受到伤害后，若其有“围”，则其移去“围”。③回合开始时，你选择所有有“围”的角色。这些角色失去“围”，然后这些角色的第一个不为你的下家获得等量的“围”。④一名其他角色的回合开始时，若其有“围”，则你可以选择一项：⒈弃置一张手牌并对其造成1点伤害。⒉若其体力值不大于你，则你获得其一张手牌。选择完成后，你视为在其攻击范围内直到回合结束。⑤使命：回合开始时，若场上没有“围”，则你获得技能〖神著〗。⑥失败：当你进入濒死状态时，你将体力值回复至1点，然后弃置装备区的所有牌。',
			shenzhu:'神著',
			shenzhu_info:'锁定技，当你使用有对应实体牌的非转化【杀】结算结束后，你选择一项：①摸一张牌，且本回合使用【杀】的次数上限+1。②摸三张牌，且本回合不能再使用【杀】。',
			dangmo:'荡魔',
			dangmo_info:'当你于出牌阶段内使用第一张【杀】选择目标后，你可以为此牌增加至多Y-1个目标（Y为你的体力值）。',
			reshuishi:'慧识',
			reshuishi_info:'出牌阶段限一次。若你的体力上限小于10，你可进行判定牌不置入弃牌堆的判定。若判定结果与本次发动技能时的其他判定结果的花色均不相同且你的体力上限小于10，则你加1点体力上限，且可以重复此流程。然后你将所有位于处理区的判定牌交给一名角色。若其手牌数为全场最多，则你减1点体力上限。',
			resghuishi:'辉逝',
			resghuishi_info:'限定技，出牌阶段，你可选择一名角色。若你的体力上限不小于存活人数且其有未发动的觉醒技，则你令其中一个技能无视发动条件；否则其摸四张牌。然后你减2点体力上限。',
			qizhengxiangsheng:'奇正相生',
			qizhengxiangsheng_info:'出牌阶段，对一名其他角色使用。你将目标角色标记为“奇兵”或“正兵”（对其他角色不可见）。然后目标角色可以打出一张【杀】或【闪】。若其是“奇兵”且未打出【杀】，则你对其造成1点伤害；若其是“正兵”且未打出【闪】，则你获得其一张牌。',
			shen_xunyu:'神荀彧',
			shen_xunyu_prefix:'神',
			tianzuo:'天佐',
			tianzuo_info:'锁定技。①游戏开始时，你将8张【奇正相生】加入牌堆。②【奇正相生】对你无效。',
			lingce:'灵策',
			lingce_info:'锁定技。当有【奇正相生】或智囊或〖定汉①〗记录过的锦囊牌被使用时，若此牌不为转化牌且对应实体牌数量为1，则你摸一张牌。',
			dinghan:'定汉',
			dinghan_info:'①当你成为未记录过的普通锦囊牌的目标时，或有未记录过的延时锦囊牌进入你的判定区时，你记录此牌名并取消之。②准备阶段，你可在〖定汉①〗的记录中添加或减少一种锦囊牌的牌名。',
			shen_sunce:'神孙策',
			shen_sunce_prefix:'神',
			yingba:'英霸',
			yingba_info:'①出牌阶段限一次，你可令一名体力上限大于1的其他角色减少1点体力上限并获得“平定”标记，然后你减少1点体力上限。②你对拥有“平定”标记的角色使用牌没有距离限制。',
			scfuhai:'覆海',
			scfuhai_info:'锁定技。①当你使用牌指定目标后，若目标角色有“平定”标记，则其不可响应此牌。若你本回合内以此法得到的牌数小于2，则你摸一张牌。②拥有“平定”标记的角色死亡时，你增加X点体力上限并摸X张牌。（X为其拥有的“平定”标记数）。',
			pinghe:'冯河',
			pinghe_info:'锁定技。①你的手牌上限基数等于你已损失的体力值。②当你受到其他角色造成的伤害时，若你有牌且你的体力上限大于1，则你防止此伤害，减1点体力上限并将一张手牌交给一名其他角色。然后若你拥有〖英霸〗，则伤害来源获得一个“平定”标记。',
			shen_jiangwei:'神姜维',
			shen_jiangwei_prefix:'神',
			jiufa:'九伐',
			jiufa_info:'①当你声明使用牌后或打出牌时，你记录此牌的牌名。②当你使用或打出的牌结算结束后，若你的〖九伐〗记录中包含至少⑨种不同的牌名，则你可以展示牌堆顶的⑨张牌，选择并获得其中任意张点数各不相同且{这九张牌中存在未被选择且和已选择的牌点数相同}的牌，清除所有的记录，将其余牌置入弃牌堆。',
			tianren:'天任',
			tianren_info:'锁定技。①当有一张基本牌或普通锦囊牌不因使用而进入弃牌堆后，你获得一枚“天任”标记。②当你获得“天任”标记或体力上限变化后，若你的“天任”数不小于X，则你移去X枚“天任”，加1点体力上限并摸两张牌（X为你的体力上限）。',
			pingxiang:'平襄',
			pingxiang_info:'限定技。出牌阶段，若你的体力上限大于⑨，则你可减⑨点体力上限，视为使用至多⑨张火【杀】，然后失去〖九伐〗，并将手牌上限基数改为体力上限直到游戏结束。',
			shen_sunquan:'神孙权',
			shen_sunquan_prefix:'神',
			dili:'帝力',
			dili_info:'锁定技。游戏开始时，你随机获得一条<span style="font-family: yuanli">东吴命运线</span>。',
			yuheng:'驭衡',
			yuheng_info:'①出牌阶段限一次。你可以失去所有不为〖驭衡〗的非锁定技，然后随机获得全部<span style="font-family: yuanli">东吴命运线</span>涉及的一个技能。若你本阶段内没有发动过其他非锁定技，则你随机获得当前<span style="font-family: yuanli">东吴命运线</span>涉及的一个内容。②出牌阶段结束时，若你未于本阶段内发动过〖驭衡①〗，则你失去1点体力。',
			yuheng_append:'<span style="font-family: yuanli">天下英雄谁敌手？曹刘。生子当如孙仲谋！</span>',
			dili_shengzhi:'圣质',
			dili_shengzhi_info:'锁定技。若你因〖驭衡〗获得过〖英魂〗〖弘德〗〖秉壹〗，则当你使用点数为质数的牌时，此牌不可被响应。',
			dili_chigang:'持纲',
			dili_chigang_info:'锁定技。若你因〖驭衡〗获得过〖观微〗〖弼政〗〖安国〗，则当你的判定阶段开始前，你跳过此阶段并获得一个额外的摸牌阶段。',
			dili_qionglan:'穹览',
			dili_qionglan_info:'锁定技，限定技。若你因〖驭衡〗获得过〖涉猎〗〖问卦〗〖博图〗，则当你发动的〖驭衡〗结算结束后，你随机获得两条其他<span style="font-family: yuanli">东吴命运线</span>。',
			dili_quandao:'权道',
			dili_quandao_info:'锁定技。若你因〖驭衡〗获得过〖制衡〗〖诫训〗〖安恤〗，则你手牌区内点数为字母的牌的牌名视为【调剂盐梅】。',
			dili_jiaohui:'交辉',
			dili_jiaohui_info:'锁定技。若你因〖驭衡〗获得过〖下书〗〖结姻〗〖缔盟〗，且你的手牌数为1，则此牌的牌名视为【远交近攻】。',
			dili_yuanlv:'渊虑',
			dili_yuanlv_info:'锁定技。若你因〖驭衡〗获得过〖观潮〗〖决堰〗〖澜江〗，则当你成为自己使用的不为【长安大舰】的装备牌的目标后，你将此牌置于弃牌堆，然后使用一张与此装备牌副类别相同的【长安大舰】。',
			changandajian_equip1:'长安大舰',
			changandajian_equip2:'长安大舰',
			changandajian_equip3:'长安大舰',
			changandajian_equip4:'长安大舰',
			changandajian_equip5:'长安大舰',
			changandajian_equip6:'长安大舰',
			changandajian_destroy:'长安大舰',
			changandajian_equip1_info:'锁定技。当你失去装备区内的【长安大舰】后，你销毁之。然后你选择场上的一张牌。若此牌点数为字母，则你获得之，否则弃置之。',
			changandajian_equip2_info:'锁定技。当你失去装备区内的【长安大舰】后，你销毁之并回复1点体力。然后你选择场上的一张牌。若此牌点数为字母，则你获得之，否则弃置之。',
			changandajian_equip3_info:'锁定技。其他角色至你的距离+2。当你失去装备区内的【长安大舰】后，你销毁之。然后你选择场上的一张牌。若此牌点数为字母，则你获得之，否则弃置之。',
			changandajian_equip4_info:'锁定技。你至其他角色的距离-2。当你失去装备区内的【长安大舰】后，你销毁之。然后你选择场上的一张牌。若此牌点数为字母，则你获得之，否则弃置之。',
			changandajian_equip5_info:'锁定技。你的手牌上限+2。当你失去装备区内的【长安大舰】后，你销毁之。然后你选择场上的一张牌。若此牌点数为字母，则你获得之，否则弃置之。',
			changandajian_equip6_info:'锁定技。你至其他角色的距离-2，其他角色至你的距离+2。当你失去装备区内的【长安大舰】后，你销毁之。然后你选择场上的一张牌。若此牌点数为字母，则你获得之，否则弃置之。',
			shen_machao:'神马超',
			shen_machao_prefix:'神',
			shouli:'狩骊',
			shouli_backup:'狩骊',
			shouli_info:'①锁定技，游戏开始时，你令场上所有角色从你的下家起，依次使用牌堆中的一张不为赠物的坐骑牌。②你可以将场上的一张进攻坐骑牌当做【杀】（无任何次数限制），防御坐骑牌当做【闪】使用或打出。若此坐骑牌的拥有者不为你，则其非锁定技于本回合内失效。且当你或其于本回合内受到伤害时，此伤害+1且改为雷属性。',
			hengwu:'横骛',
			hengwu_info:'当你使用或打出有花色的牌时，若你的手牌区内没有与此牌花色相同的牌，则你可以摸X张牌（X为场上装备区内花色与此牌相同的牌数）。',
			hengwu_append:'<span style="font-family: yuanli">棘手，怀念，摧毁！</span>',
			
			key_kagari:'篝',
			kagari_zongsi:'纵丝',
			kagari_zongsi_info:'出牌阶段限一次，你可以选择一张不在游戏外的牌，然后将其置于牌堆/弃牌堆的顶部/底部或一名角色的对应区域内。',
			key_shiki:'神山识',
			key_shiki_ab:'神山识',
			shiki_omusubi:'御结',
			shiki_omusubi_info:'一轮游戏开始时，你可以减1点体力上限，然后将一名其他角色武将牌上的技能加入到你的武将牌上。',
			shiki_omusubi_append:'<span style="font-family: yuanli">来吧，羽依里。用你的手，让我变成那只真正的鬼吧！</span>',
			db_key_hina:'佐藤雏',
			hina_shenshi:'神视',
			hina_shenshi_yingbian:'神视',
			hina_shenshi_info:'神势力技。出牌阶段开始时/结束时，你可摸两张牌，然后将其中一张牌置于牌堆顶。你以此法得到的牌视为拥有全部应变效果，且可以无条件发动。',
			hina_xingzhi:'幸凪',
			hina_xingzhi_info:'键势力技。每回合限一次，你可以通过“助战”触发一张牌的全部应变效果，且响应助战的角色摸两张牌。',
			tw_shen_guanyu:'TW神关羽',
			tw_shen_guanyu_prefix:'TW神',
			twwushen:'武神',
			twwushen_info:'锁定技。①你的♥手牌均视为普【杀】。②你于每阶段使用的第一张【杀】不可被响应。③你使用♥【杀】无距离和次数限制。④当你使用♥【杀】选择目标后，你令所有拥有“梦魇”标记的角色均成为此【杀】的目标。',
			twwuhun:'武魂',
			twwuhun_info:'锁定技。①当你受到其他角色造成的1点伤害后，你令伤害来源获得1枚“梦魇”标记。②当你对有“梦魇”标记的其他角色造成伤害后，你令其获得一枚“梦魇”标记。③当你死亡时，你可进行判定。若结果不为【桃】或【桃园结义】，则你选择至少一名拥有“梦魇”标记的角色。令这些角色各自失去X点体力（X为其“梦魇”标记数）。',
			shen_zhangfei:'神张飞',
			shen_zhangfei_prefix:'神',
			shencai:'神裁',
			shencai_info:'出牌阶段限一次，你可以令一名其他角色进行判定。你获得此判定牌，然后若此判定牌：包含以下要素中的任意一个，则其失去已有的下列效果，并获得对应的效果：{⒈体力：当其受到伤害后，其失去等量的体力、⒉武器：其不能使用牌响应【杀】、⒊打出：当其失去手牌后，其再随机弃置一张手牌（不嵌套触发）、⒋距离：其的结束阶段开始时，其翻面}；若均不包含，你获得其区域里的一张牌，其获得一枚“死”并获得如下效果：其的角色手牌上限-X、其的回合结束时，若X大于场上存活人数，则其死亡（X为其“死”标记数）。',
			xunshi:'巡使',
			xunshi_info:'锁定技。①你手牌区内所有的多目标锦囊牌均视为花色为none的普【杀】。②你使用颜色为none的牌无距离和次数限制。③当你使用无颜色的牌选择目标后，你令你的〖神裁〗的发动次数上限+1（至多为5），然后可以为此牌增加任意个目标。',
			shen_zhangjiao:'神张角',
			shen_zhangjiao_prefix:'神',
			yizhao:'异兆',
			yizhao_info:'锁定技。当你使用或打出牌时，你获得等同于此牌点数枚“黄”标记。然后若“黄”的十位数发生变化，你获得牌堆中一张点数为你“黄”的十位数的牌。',
			sijun:'肆军',
			sijun_info:'准备阶段，若“黄”数大于牌堆的牌数，你可以移去所有“黄”并洗牌，然后随机获得任意张点数之和为36的牌。',
			sanshou:'三首',
			sanshou_info:'当你受到伤害时，你可以亮出牌堆顶三张牌。若其中有本回合未被使用过的牌的类型，防止此伤害。',
			tianjie:'天劫',
			tianjie_info:'一名角色的回合结束时，若本回合牌堆洗过牌，你可以选择至多三名其他角色。你依次对每名目标角色造成X点雷电伤害（X为其手牌中【闪】的数量，至少为1）。',
			tw_shen_lvmeng:'TW神吕蒙',
			tw_shen_lvmeng_prefix:'TW神',
			twshelie:'涉猎',
			twshelie_info:'①摸牌阶段，你可放弃摸牌并亮出牌堆顶的五张牌，然后选择获得其中每种花色的牌各一张。②每轮限一次。结束阶段，若你本回合使用的花色数不小于你的体力值，你执行一个额外的摸牌阶段或出牌阶段。',
			twgongxin:'攻心',
			twgongxin2:'攻心',
			twgongxin_info:'出牌阶段限一次。你可以观看一名其他角色的手牌，然后你可以展示其中一张牌并选择一项：1.弃置此牌；2.将此牌置于牌堆顶。若该角色手牌中的花色数因此减少，你选择一种颜色，其于本回合不能使用或打出该颜色的牌。',
			shen_dengai:'神邓艾',
			shen_dengai_prefix:'神',
			dctuoyu:'拓域',
			dctuoyu_fengtian:'丰田',
			dctuoyu_qingqu:'清渠',
			dctuoyu_junshan:'峻山',
			dctuoyu_fengtian_tag:'<span data-nature="woodmm">丰田</span>',
			dctuoyu_qingqu_tag:'<span data-nature="watermm">清渠</span>',
			dctuoyu_junshan_tag:'<span data-nature="thundermm">峻山</span>',
			dctuoyu_info:'①锁定技。当你使用拥有对应副区域标签的牌时，你令此牌获得对应效果。<br>丰田：伤害值或回复值+1；清渠：无次数和距离限制；峻山：不可被响应。②出牌阶段开始时和结束时，你给你的手牌分配对应的已激活副区域标签（每个区域至多五张）。',
			dcxianjin:'险进',
			dcxianjin_info:'锁定技。当你造成或受到伤害后，若这是你本局游戏内第偶数次造成或受到伤害，则你激活一个副区域标签并摸X张牌（X为你已激活的副区域数，若你的手牌数为全场最多则改为摸一张牌）。',
			dcqijing:'奇径',
			dcqijing_info:'觉醒技。一名角色的回合结束后，若你的三个副区域标签均被激活，则你减1点体力上限，将座位移动至一名其他角色的上家之后，获得〖摧心〗和一个额外回合。',
			dccuixin:'摧心',
			dccuixin_info:'当你不因此技能使用的基本牌或普通锦囊牌结算结束后，若此牌的目标于你使用此牌指定第一个目标时包含你的上家或下家，则你可以视为对下家或上家再使用一张牌名和元素相同的牌。',
			shen_dianwei:'神典韦',
			shen_dianwei_prefix:'神',
			juanjia:'捐甲',
			juanjia_info:'锁定技。游戏开始时，你废除一个防具栏，然后获得一个额外的武器栏。',
			qiexie:'挈挟',
			qiexie_info:'锁定技。准备阶段，你在剩余武将牌堆中随机观看五张牌，选择其中的任意张，将其按照如下规则转化为武器牌置入你的武器栏：{⒈此牌不具有花色，且其攻击范围和点数等于此武将牌的体力上限。⒉此武器牌的技能为该武将牌上所有描述中包含“【杀】”且不具有锁定技以外的标签的技能。⒊此武器牌离开你的装备区时，改为放回武将牌堆。}',
			cuijue:'摧决',
			cuijue_info:'每回合每名角色限一次。出牌阶段，你可以弃置一张牌，然后对攻击范围内距离最远的一名其他角色造成1点伤害（没有则不选）。',
			le_shen_jiaxu:'神贾诩',
			le_shen_jiaxu_prefix:'神',
			jxlianpo:'炼魄',
			jxlianpo_info:'锁定技。①若场上最大阵营为：反贼，其他角色的手牌上限-1，所有角色使用【杀】的次数上限和攻击范围+1；主忠，其他角色不能对其以外的角色使用【桃】。其他角色死亡后，若有多个最大阵营，来源摸两张牌并回复1点体力。②一轮游戏开始时，你展示一张未加入游戏或已死亡角色的身份牌，本轮视为该身份对应阵营的角色数+1。',
			jxzhaoluan:'兆乱',
			jxzhaoluan_info:'限定技。一名角色死亡前，若其此次进入过濒死状态，你可以取消之，令其加3点体力上限并失去所有非锁定技，回复体力至3点，摸四张牌。然后你获得如下效果：出牌阶段，你可以令一名成为过你〖兆乱〗目标的角色减1点体力上限，然后对一名此阶段未以此法选择过的角色造成1点伤害。',
			
			extra_feng:'神话再临·风',
			extra_huo:'神话再临·火',
			extra_lin:'神话再临·林',
			extra_shan:'神话再临·山',
			extra_yin:'神话再临·阴',
			extra_lei:'神话再临·雷',
			extra_key:'论外',
			extra_ol:'神话再临OL',
			extra_mobilezhi:'始计篇·智',
			extra_mobilexin:'始计篇·信',
			extra_offline:'神话再临·线下',
			extra_decade:'神·武',
			extra_tw:'海外服神将',
		},
	};
});
