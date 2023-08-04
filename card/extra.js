'use strict';
game.import('card',function(lib,game,ui,get,ai,_status){
	return {
		name:'extra',
		connect:true,
		card:{
			muniu:{
				fullskin:true,
				type:'equip',
				subtype:'equip5',
				nomod:true,
				onEquip:function(){
					if(card&&card.cards&&card.cards.length){
						player.directgains(card.cards,null,'muniu');
					}
					player.markSkill('muniu_skill');
				},
				forceDie:true,
				onLose:function(){
					delete player.getStat('skill').muniu_skill;
					player.unmarkSkill('muniu_skill');
					if(!card||!card.cards||!card.cards.length) return;
					if((!event.getParent(2)||event.getParent(2).name!='swapEquip')&&(event.getParent().type!='equip'||event.getParent().swapEquip)){
						player.lose(card.cards,ui.discardPile);
						player.$throw(card.cards,1000);
						player.popup('muniu');
						game.log(card,'掉落了',card.cards);
						card.cards.length=0;
					}
					else{
						player.lose(card.cards,ui.special);
					}
				},
				clearLose:true,
				equipDelay:false,
				loseDelay:false,
				skills:['muniu_skill','muniu_skill7'],
				ai:{
					equipValue:function(card){
						if(card.card) return 7+card.card.length;
						return 7;
					},
					basic:{
						equipValue:7
					}
				}
			},
			jiu:{
				audio:true,
				fullskin:true,
				type:"basic",
				toself:true,
				enable:function(event,player){
					//return !player.hasSkill('jiu');
					return true;
				},
				lianheng:true,
				logv:false,
				savable:function(card,player,dying){
					return dying==player||player.hasSkillTag('jiuOther',null,dying,true);
				},
				usable:1,
				selectTarget:-1,
				modTarget:true,
				filterTarget:function(card,player,target){
					return target==player;
				},
				content:function(){
					if(typeof event.baseDamage!='number') event.baseDamage=1;
					if(target.isDying()||event.getParent(2).type=='dying'){
						target.recover(event.baseDamage);
						if(_status.currentPhase==target){
							target.getStat().card.jiu--;
						}
					}
					else{
						game.addVideo('jiuNode',target,true);
						if(cards&&cards.length){
							card=cards[0];
						}
						if(!target.storage.jiu) target.storage.jiu=0;
						target.storage.jiu+=event.baseDamage;
						game.broadcastAll(function(target,card,gain2){
							target.addSkill('jiu');
							if(!target.node.jiu&&lib.config.jiu_effect){
								target.node.jiu=ui.create.div('.playerjiu',target.node.avatar);
								target.node.jiu2=ui.create.div('.playerjiu',target.node.avatar2);
							}
							if(gain2&&card.clone&&(card.clone.parentNode==target.parentNode||card.clone.parentNode==ui.arena)){
								card.clone.moveDelete(target);
							}
						},target,card,target==targets[0]&&cards.length==1);
						if(target==targets[0]&&cards.length==1){
							if(card.clone&&(card.clone.parentNode==target.parentNode||card.clone.parentNode==ui.arena)){
								game.addVideo('gain2',target,get.cardsInfo([card]));
							}
						}
					}
				},
				ai:{
					basic:{
						useful:function(card,i){
							if(_status.event.player.hp>1){
								if(i==0) return 4;
								return 1;
							}
							if(i==0) return 7.3;
							return 3;
						},
						value:function(card,player,i){
							if(player.hp>1){
								if(i==0) return 5;
								return 1;
							}
							if(i==0) return 7.3;
							return 3;
						},
					},
					order:function(){
						return get.order({name:'sha'})+0.2;
					},
					result:{
						target:function(player,target){
							if(target&&target.isDying()) return 2;
							if(target&&!target.isPhaseUsing()) return 0;
							if(lib.config.mode=='stone'&&!player.isMin()){
								if(player.getActCount()+1>=player.actcount) return 0;
							}
							var shas=player.getCards('h','sha');
							if(shas.length>1&&(player.getCardUsable('sha')>1||player.countCards('h','zhuge'))){
								return 0;
							}
							shas.sort(function(a,b){
								return get.order(b)-get.order(a);
							})
							var card;
							if(shas.length){
								for(var i=0;i<shas.length;i++){
									if(lib.filter.filterCard(shas[i],target)){
										card=shas[i];break;
									}
								}
							}
							else if(player.hasSha()&&player.needsToDiscard()){
								if(player.countCards('h','hufu')!=1){
									card={name:'sha'};
								}
							}
							if(card){
								if(game.hasPlayer(function(current){
									return (get.attitude(target,current)<0&&
										target.canUse(card,current,null,true)&&
										!current.hasSkillTag('filterDamage',null,{
											player:player,
											card:card,
											jiu:true,
										})&&
										get.effect(current,card,target)>0);
								})){
									return 1;
								}
							}
							return 0;
						},
					},
					tag:{
						save:1,
						recover:0.1,
					}
				}
			},
			huogong:{
				audio:true,
				fullskin:true,
				type:'trick',
				enable:true,
				//cardnature:'fire',
				filterTarget:function(card,player,target){
					//if(player!=game.me&&player.countCards('h')<2) return false;
					return target.countCards('h')>0;
				},
				content:function(){
					"step 0"
					if(target.countCards('h')==0){
						event.finish();
						return;
					}
					else if(target.countCards('h')==1) event._result={cards:target.getCards('h')};
					else target.chooseCard(true).ai=function(card){
						if(_status.event.getRand()<0.5) return Math.random();
						return get.value(card);
					};
					"step 1"
					target.showCards(result.cards).setContent(function(){});
					event.dialog=ui.create.dialog(get.translation(target)+'展示的手牌',result.cards);
					event.videoId=lib.status.videoId++;

					game.broadcast('createDialog',event.videoId,get.translation(target)+'展示的手牌',result.cards);
					game.addVideo('cardDialog',null,[get.translation(target)+'展示的手牌',get.cardsInfo(result.cards),event.videoId]);
					event.card2=result.cards[0];
					game.log(target,'展示了',event.card2);
					event._result={};
					player.chooseToDiscard({suit:get.suit(event.card2)},function(card){
						var evt=_status.event.getParent();
						if(get.damageEffect(evt.target,evt.player,evt.player,'fire')>0){
							return 7-get.value(card,evt.player);
						}
						return -1;
					}).set('prompt',false);
					game.delay(2);
					"step 2"
					if(result.bool){
						target.damage('fire',event.baseDamage||1);
					}
					else{
						target.addTempSkill('huogong2');
					}
					event.dialog.close();
					game.addVideo('cardDialog',null,event.videoId);
					game.broadcast('closeDialog',event.videoId);
				},
				ai:{
					basic:{
						order:4,
						value:[3,1],
						useful:1,
					},
					wuxie:function(target,card,player,current,state){
						if(get.attitude(current,player)>=0&&state>0) return false;
					},
					result:{
						player:function(player){
							var nh=player.countCards('h');
							if(nh<=player.hp&&nh<=4&&_status.event.name=='chooseToUse'){
								if(typeof _status.event.filterCard=='function'&&
									_status.event.filterCard({name:'huogong'},player,_status.event)){
									return -10;
								}
								if(_status.event.skill){
									var viewAs=get.info(_status.event.skill).viewAs;
									if(viewAs=='huogong') return -10;
									if(viewAs&&viewAs.name=='huogong') return -10;
								}
							}
							return 0;
						},
						target:function(player,target){
							if(target.hasSkill('huogong2')||target.countCards('h')==0) return 0;
							if(player.countCards('h')<=1) return 0;
							if(target==player){
								if(typeof _status.event.filterCard=='function'&&
									_status.event.filterCard({name:'huogong'},player,_status.event)){
									return -1.15;
								}
								if(_status.event.skill){
									var viewAs=get.info(_status.event.skill).viewAs;
									if(viewAs=='huogong') return -1.15;
									if(viewAs&&viewAs.name=='huogong') return -1.15;
								}
								return 0;
							}
							return -1.15;
						}
					},
					tag:{
						damage:1,
						fireDamage:1,
						natureDamage:1,
						norepeat:1
					}
				}
			},
			tiesuo:{
				audio:true,
				fullskin:true,
				type:'trick',
				enable:true,
				filterTarget:true,
				selectTarget:[1,2],
				complexTarget:true,
				content:function(){
					target.link();
				},
				chongzhu:true,
				ai:{
					wuxie:function(target,card,player,viewer){
						if(_status.event.getRand()<0.5) return 0;
						if(player==game.me&&get.attitude(viewer,player)>0){
							return 0;
						}
					},
					basic:{
						useful:4,
						value:4,
						order:7
					},
					result:{
						target:function(player,target){
							if(target.isLinked()){
								if(target.hasSkillTag('link')) return 0;
								var f=target.hasSkillTag('nofire');
								var t=target.hasSkillTag('nothunder');
								if(f&&t) return 0;
								if(f||t) return 0.5;
								return 2;
							}
							if(get.attitude(player,target)>=0) return -0.9;
							if(ui.selected.targets.length) return -0.9;
							if(game.hasPlayer(function(current){
								return get.attitude(player,current)<=-1&&current!=target&&!current.isLinked();
							})){
								return -0.9;
							}
							return 0;
						}
					},
					tag:{
						multitarget:1,
						multineg:1,
						norepeat:1
					}
				}
			},
			bingliang:{
				audio:true,
				fullskin:true,
				type:'delay',
				range:{global:1},
				filterTarget:function(card,player,target){
					return (lib.filter.judge(card,player,target)&&player!=target);
				},
				judge:function(card){
					if(get.suit(card)=='club') return 1;
					return -2;
				},
				judge2:function(result){
					if(result.bool==false) return true;
					return false;
				},
				effect:function(){
					if(result.bool==false){
						if(get.is.changban()) player.addTempSkill('bingliang_changban');
						else player.skip('phaseDraw');
					}
				},
				ai:{
					basic:{
						order:1,
						useful:1,
						value:4,
					},
					result:{
						target:function(player,target){
							if(target.hasJudge('caomu')) return 0;
							return -1.5/Math.sqrt(target.countCards('h')+1);
						}
					},
					tag:{
						skip:'phaseDraw'
					}
				}
			},
			hualiu:{
				fullskin:true,
				type:'equip',
				subtype:'equip3',
				distance:{globalTo:1},
			},
			zhuque:{
				fullskin:true,
				type:'equip',
				subtype:'equip1',
				//cardnature:'fire',
				distance:{attackFrom:-3},
				ai:{
					basic:{
						equipValue:2
					}
				},
				skills:['zhuque_skill']
			},
			guding:{
				fullskin:true,
				type:'equip',
				subtype:'equip1',
				distance:{attackFrom:-1},
				ai:{
					basic:{
						equipValue:2
					}
				},
				skills:['guding_skill']
			},
			tengjia:{
				fullskin:true,
				type:'equip',
				subtype:'equip2',
				//cardnature:'fire',
				ai:{
					value:function(card,player,index,method){
						if(player.isDisabled(2)) return 0.01;
						if(card==player.getEquip(2)){
							if(player.hasSkillTag('noDirectDamage')) return 10;
							if(game.hasPlayer(function(current){
								return current!=player&&get.attitude(current,player)<0&&current.hasSkillTag('fireAttack',null,null,true);
							})) return 0;
							return 6;
						}
						var value=0;
						var info=get.info(card);
						var current=player.getEquip(info.subtype);
						if(current&&card!=current){
							value=get.value(current,player);
						}
						var equipValue=info.ai.equipValue;
						if(equipValue==undefined){
							equipValue=info.ai.basic.equipValue;
						}
						if(typeof equipValue=='function'){
							if(method=='raw') return equipValue(card,player);
							if(method=='raw2') return equipValue(card,player)-value;
							return Math.max(0.1,equipValue(card,player)-value);
						}
						if(typeof equipValue!='number') equipValue=0;
						if(method=='raw') return equipValue;
						if(method=='raw2') return equipValue-value;
						return Math.max(0.1,equipValue-value);
					},
					equipValue:function(card,player){
						if(player.hasSkillTag('maixie')&&player.hp>1) return 0;
						if(player.hasSkillTag('noDirectDamage')) return 10;
						if(get.damageEffect(player,player,player,'fire')>=0) return 10;
						var num=4-game.countPlayer(function(current){
							if(get.attitude(current,player)<0){
								if(current.hasSkillTag('fireAttack',null,null,true)) return 3;
								return 1;
							}
							return false;
						});
						if(player.hp==1) num+=3;
						if(player.hp==2) num+=1;
						return num;
					},
					basic:{
						equipValue:3
					},
				},
				skills:['tengjia1','tengjia2','tengjia3']
			},
			baiyin:{
				fullskin:true,
				type:'equip',
				subtype:'equip2',
				loseDelay:false,
				onLose:function(){
					var next=game.createEvent('baiyin_recover');
					event.next.remove(next);
					var evt=event.getParent();
					if(evt.getlx===false) evt=evt.getParent();
					evt.after.push(next);
					next.player=player;
					next.setContent(function(){
						if(player.isDamaged()) player.logSkill('baiyin_skill');
						player.recover();
					});
				},
				filterLose:function(card,player){
					if(player.hasSkillTag('unequip2')) return false;
					return true;
				},
				skills:['baiyin_skill'],
				tag:{
					recover:1,
				},
				ai:{
					order:9.5,
					equipValue:function(card,player){
						if(player.hp==player.maxHp) return 5;
						if(player.countCards('h','baiyin')) return 6;
						return 0;
					},
					basic:{
						equipValue:5
					}
				}
			},
		},
		skill:{
			bingliang_changban:{
				cardSkill:true,
				unique:true,
				trigger:{player:'phaseDrawBegin'},
				silent:true,
				content:function(){
					trigger.num--;
				},
				group:'bingliang_changban2'
			},
			bingliang_changban2:{
				cardSkill:true,
				trigger:{player:'phaseDrawAfter'},
				silent:true,
				content:function(){
					if(player.enemy) player.enemy.draw();
				}
			},
			muniu_skill:{
				equipSkill:true,
				enable:'phaseUse',
				usable:1,
				filterCard:true,
				check:function(card){
					if(card.name=='du') return 20;
					var player=_status.event.player;
					var nh=player.countCards('h');
					if(!player.needsToDiscard()){
						if(nh<3) return 0;
						if(nh==3) return 5-get.value(card);
						return 7-get.value(card);
					}
					return 10-get.useful(card);
				},
				discard:false,
				lose:false,
				delay:false,
				sync:function(muniu){
					if(game.online){
						return;
					}
					if(!muniu.cards){
						muniu.cards=[];
					}
					for(var i=0;i<muniu.cards.length;i++){
						if(get.position(muniu.cards[i])!='s'){
							muniu.cards.splice(i--,1);
						}
					}
					game.broadcast(function(muniu,cards){
						muniu.cards=cards;
					},muniu,muniu.cards);
				},
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				prepare:function(cards,player){
					player.$give(1,player,false);
				},
				content:function(){
					"step 0"
					player.loseToSpecial(cards,'muniu');
					"step 1"
					for(var i=0;i<cards.length;i++){
						if(cards[i].destroyed||!cards[i].hasGaintag('muniu')||get.position(cards[i])!='s'){
							cards[i].remove();
							cards.splice(i--,1);
						}
					}
					var muniu=player.getEquip(5);
					if(!muniu||!cards.length){
						for(var i=0;i<cards.length;i++){
							cards[i].discard();
						}
						event.finish();
						return;
					}
					if(muniu.cards==undefined) muniu.cards=[];
					muniu.cards.push(cards[0]);
					game.broadcast(function(muniu,cards){
						muniu.cards=cards;
					},muniu,muniu.cards);
					game.delayx();
					"step 2"
					var players=game.filterPlayer(function(current){
						if(!current.getEquip(5)&&current!=player&&!current.isTurnedOver()&&
							get.attitude(player,current)>=3&&get.attitude(current,player)>=3){
							return true;
						}
					});
					players.sort(lib.sort.seat);
					var choice=players[0];
					var next=player.chooseTarget('是否移动木牛流马？',function(card,player,target){
						return !target.isMin()&&player!=target&&target.isEmpty(5);
					});
					next.set('ai',function(target){
						return target==_status.event.choice?1:-1;
					});
					next.set('choice',choice);
					"step 3"
					if(result.bool){
						var card=player.getEquip(5);
						result.targets[0].equip(card);
						player.$give(card,result.targets[0]);
						player.line(result.targets,'green');
						game.delay();
					}
					else{
						player.updateMarks();
					}
				},
				ai:{
					order:1,
					expose:0.1,
					result:{
						player:1
					}
				},
				mod:{
					cardEnabled2:function(card,player){
						if(!ui.selected.cards.length) return;
						var muniu=player.getEquip('muniu');
						if(!muniu||!muniu.cards||!muniu.cards.length) return;
						for(var i of ui.selected.cards){
							if(i==muniu&&muniu.cards.contains(card)) return false;
							if(muniu.cards.contains(i)&&card==muniu) return false;
						}
					},
				},
				mark:true,
				intro:{
					content:function(storage,player){
						var muniu=player.getEquip(5);
						if(!muniu||!muniu.cards||!muniu.cards.length) return '共有〇张牌';
						if(player.isUnderControl(true)){
							return get.translation(muniu.cards);
						}
						else{
							return '共有'+get.cnNumber(muniu.cards.length)+'张牌';
						}
					},
					mark:function(dialog,storage,player){
						var muniu=player.getEquip(5);
						if(!muniu||!muniu.cards||!muniu.cards.length) return '共有〇张牌';
						if(player.isUnderControl(true)){
							dialog.addAuto(muniu.cards);
						}
						else{
							return '共有'+get.cnNumber(muniu.cards.length)+'张牌';
						}
					},
					markcount:function(storage,player){
						var muniu=player.getEquip(5);
						if(muniu&&muniu.cards) return muniu.cards.length;
						return 0;
					}
				}
			},
			muniu_skill7:{
				trigger:{player:'loseEnd'},
				firstDo:true,
				forced:true,
				//silent:true,
				filter:function(event,player){
					if(!event.ss||!event.ss.length||event.parent.name=='lose_muniu') return false;
					var muniu=player.getEquip('muniu');
					if(!muniu||!muniu.cards) return false;
					return event.ss.filter(function(card){
						return muniu.cards.contains(card);
					}).length>0;
				},
				content:function(){
					var muniu=player.getEquip(5);
					if(muniu&&muniu.cards){
						muniu.cards.removeArray(trigger.ss);
						lib.skill.muniu_skill.sync(muniu);
					}
					player.updateMarks();
				},
			},
			huogong2:{charlotte:true},
			jiu:{
				trigger:{player:'useCard1'},
				filter:function(event){
					return event.card&&event.card.name=='sha';
				},
				forced:true,
				charlotte:true,
				firstDo:true,
				content:function(){
					if(!trigger.baseDamage) trigger.baseDamage=1;
					trigger.baseDamage+=player.storage.jiu;
					trigger.jiu=true;
					trigger.jiu_add=player.storage.jiu;
					game.addVideo('jiuNode',player,false);
					game.broadcastAll(function(player){
						player.removeSkill('jiu');
					},player);
				},
				temp:true,
				vanish:true,
				silent:true,
				popup:false,
				nopop:true,
				onremove:function(player){
					if(player.node.jiu){
						player.node.jiu.delete();
						player.node.jiu2.delete();
						delete player.node.jiu;
						delete player.node.jiu2;
					}
					delete player.storage.jiu;
				},
				ai:{
					damageBonus:true
				},
				group:'jiu2'
			},
			jiu2:{
				trigger:{player:'useCardAfter',global:'phaseAfter'},
				priority:2,
				firstDo:true,
				charlotte:true,
				filter:function(event,player){
					if(player.hasSkillTag('jiuSustain',null,event.name)) return false;
					if(event.name=='useCard') return (event.card&&(event.card.name=='sha'));
					return true;
				},
				forced:true,
				popup:false,
				audio:false,
				content:function(){
					game.broadcastAll(function(player){
						player.removeSkill('jiu');
					},player);
					game.addVideo('jiuNode',player,false);
				},
			},
			guding_skill:{
				equipSkill:true,
				audio:true,
				trigger:{source:'damageBegin1'},
				filter:function(event){
					if(event.parent.name=='_lianhuan'||event.parent.name=='_lianhuan2') return false;
					if(event.card&&event.card.name=='sha'){
						if(event.player.countCards('h')==0) return true;
					}
					return false;
				},
				forced:true,
				content:function(){
					trigger.num++;
				},
				ai:{
					effect:{
						player:function(card,player,target,current,isLink){
							if(card.name=='sha'&&!isLink&&target.countCards('h')==0&&!target.hasSkillTag('filterDamage',null,{
								player:player,
								card:card,
							})) return [1,0,1,-3];
						}
					}
				}
			},
			tengjia1:{
				equipSkill:true,
				trigger:{target:['useCardToBefore']},
				forced:true,
				priority:6,
				audio:true,
				filter:function(event,player){
					if(player.hasSkillTag('unequip2')) return false;
					if(event.player.hasSkillTag('unequip',false,{
						name:event.card?event.card.name:null,
						target:player,
						card:event.card
					})) return false;
					if(event.card.name=='nanman') return true;
					if(event.card.name=='wanjian') return true;
					//if(event.card.name=='chuqibuyi') return true;
					return false;
				},
				content:function(){
					trigger.cancel();
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(target.hasSkillTag('unequip2')) return;
							if(player.hasSkillTag('unequip',false,{
								name:card?card.name:null,
								target:target,
								card:card
							})||player.hasSkillTag('unequip_ai',false,{
								name:card?card.name:null,
								target:target,
								card:card
							})) return;
							//if(card.name=='nanman'||card.name=='wanjian'||card.name=='chuqibuyi') return 'zerotarget';
							if(card.name=='nanman'||card.name=='wanjian') return 'zerotarget';
							if(card.name=='sha'){
								var equip1=player.getEquip(1);
								if(equip1&&equip1.name=='zhuque') return 1.9;
								if(!card.nature) return 'zerotarget';
							}
						}
					}
				}
			},
			tengjia2:{
				equipSkill:true,
				trigger:{player:'damageBegin3'},
				filter:function(event,player){
					if(event.nature!='fire') return false;
					if(player.hasSkillTag('unequip2')) return false;
					if(event.source&&event.source.hasSkillTag('unequip',false,{
						name:event.card?event.card.name:null,
						target:player,
						card:event.card
					})) return false;
					return true;
				},
				audio:true,
				forced:true,
				content:function(){
					trigger.num++;
				},
				ai:{
					fireAttack:true,
					effect:{
						target:function(card,player,target,current){
							if(card.name=='sha'){
								if(card.nature=='fire') return 2;
								if(player.hasSkill('zhuque_skill')) return 1.9;
							}
							if(get.tag(card,'fireDamage')&&current<0) return 2;
						}
					}
				}
			},
			tengjia3:{
				equipSkill:true,
				audio:'tengjia1',
				trigger:{target:'shaBefore'},
				forced:true,
				filter:function(event,player){
					if(player.hasSkillTag('unequip2')) return false;
					if(event.player.hasSkillTag('unequip',false,{
						name:event.card?event.card.name:null,
						target:player,
						card:event.card
					})) return false;
					if(event.card.name=='sha'&&!event.card.nature) return true;
					return false;
				},
				content:function(){
					trigger.cancel();
				},
			},
			baiyin_skill:{
				equipSkill:true,
				trigger:{player:'damageBegin4'},
				forced:true,
				audio:true,
				filter:function(event,player){
					if(event.num<=1) return false;
					if(player.hasSkillTag('unequip2')) return false;
					if(event.source&&event.source.hasSkillTag('unequip',false,{
						name:event.card?event.card.name:null,
						target:player,
						card:event.card
					})) return false;
					return true;
				},
				//priority:-10,
				content:function(){
					trigger.num=1;
				},
				ai:{
					filterDamage:true,
					skillTagFilter:function(player,tag,arg){
						if(player.hasSkillTag('unequip2')) return false;
						if(arg&&arg.player){
							if(arg.player.hasSkillTag('unequip',false,{
								name:arg.card?arg.card.name:null,
								target:player,
								card:arg.card,
							})) return false;
							if(arg.player.hasSkillTag('unequip_ai',false,{
								name:arg.card?arg.card.name:null,
								target:player,
								card:arg.card,
							})) return false;
							if(arg.player.hasSkillTag('jueqing',false,player)) return false;
						}
					},
				},
			},
			zhuque_skill:{
				equipSkill:true,
				trigger:{player:'useCard1'},
				//priority:7,
				filter:function(event,player){
					if(event.card.name=='sha'&&!event.card.nature) return true;
				},
				audio:true,
				check:function(event,player){
					var eff=0;
					for(var i=0;i<event.targets.length;i++){
						var target=event.targets[i];
						var eff1=get.damageEffect(target,player,player);
						var eff2=get.damageEffect(target,player,player,'fire');
						eff+=eff2;
						eff-=eff1;
					}
					return eff>=0;
				},
				prompt2:function(event,player){
					return '将'+get.translation(event.card)+'改为火属性';
				},
				content:function(){
					trigger.card.nature='fire';
					if(get.itemtype(trigger.card)=='card'){
						var next=game.createEvent('zhuque_clear');
						next.card=trigger.card;
						event.next.remove(next);
						trigger.after.push(next);
						next.setContent(function(){
							delete card.nature;
						});
					}
				}
			},
			zhuque_skill2:{
				trigger:{player:'useCardAfter'},
				forced:true,
				popup:false,
				content:function(){
					delete player.storage.zhuque_skill.nature;
				}
			},
			huogon2:{},
		},
		translate:{
			jiu:'酒',
			jiu_info:'①每回合限一次。出牌阶段，对你自己使用。目标角色使用的下一张【杀】的伤害值基数+1。②当你处于濒死状态时，对你自己使用。目标角色回复1点体力。',
			huogong:'火攻',
			tiesuo:'铁索连环',
			tiesuo_info:'此牌可被重铸。出牌阶段，对至多两名角色使用。目标角色横置。',
			huogong_bg:'攻',
			huogong_info:'出牌阶段，对一名有手牌的角色使用。目标角色展示一张手牌A，然后你可以弃置一张与A花色相同的手牌，对目标造成1点火属性伤害。',
			tiesuo_bg:'索',
			bingliang:'兵粮寸断',
			hualiu:'骅骝',
			zhuque:'朱雀羽扇',
			bingliang_bg:'粮',
			bingliang_info:'出牌阶段，对一名距离为1的其他角色使用。目标角色于其判定阶段进行判定：若判定结果不为梅花，则其跳过下一个摸牌阶段。',
			hualiu_bg:'+马',
			hualiu_info:'你的防御距离+1',
			zhuque_bg:'扇',
			zhuque_skill:'朱雀羽扇',
			zhuque_info:'当你声明使用普【杀】后，你可以为此【杀】赋予火属性。',
			guding:'古锭刀',
			guding_info:'锁定技，当你因执行【杀】的效果而对目标角色造成伤害时，若其没有手牌，则此伤害+1。',
			guding_skill:'古锭刀',
			tengjia:'藤甲',
			//tengjia_info:'锁定技，【南蛮入侵】、【万箭齐发】、【出其不意】和普通【杀】对你无效。当你受到火焰伤害时，该伤害+1。',
			tengjia_info:'锁定技。①【南蛮入侵】、【万箭齐发】和普【杀】对你无效。②当你受到火属性伤害时，此伤害+1。',
			tengjia1:'藤甲',
			tengjia2:'藤甲',
			tengjia3:'藤甲',
			baiyin:'白银狮子',
			baiyin_info:'锁定技。①当你受到伤害时，若此伤害大于1，则你将伤害值扣减至1点。②当你失去装备区内的【白银狮子】后，你回复1点体力。',
			baiyin_skill:'白银狮子',
			
			muniu:'木牛流马',
			muniu_bg:'牛',
			muniu_skill:'木牛',
			muniu_skill7:'木牛流马',
			muniu_skill_bg:'辎',
			muniu_info:'①出牌阶段限一次，你可以将一张手牌扣置于你装备区里的【木牛流马】下，然后你可以将【木牛流马】移动到一名其他角色的装备区里。②你可以将【木牛流马】下的牌如手牌般使用或打出。③当你失去装备区的【木牛流马】后，你刷新〖木牛流马①〗的使用次数限制。若此牌不是因置入其他角色的装备区而失去的，则你将【木牛流马】下的所有牌置入弃牌堆。',
			muniu_skill_info:'将一张手牌扣置于你装备区里的【木牛流马】下，然后可以将此装备移动到一名其他角色的装备区里。',
		},
		list:[
			["heart",4,"sha","fire"],
			["heart",7,"sha","fire"],
			["heart",10,"sha","fire"],
			["diamond",4,"sha","fire"],
			["diamond",5,"sha","fire"],
			["spade",4,"sha","thunder"],
			["spade",5,"sha","thunder"],
			["spade",6,"sha","thunder"],
			["spade",7,"sha","thunder"],
			["spade",8,"sha","thunder"],
			["club",5,"sha","thunder"],
			["club",6,"sha","thunder"],
			["club",7,"sha","thunder"],
			["club",8,"sha","thunder"],
			["heart",8,"shan"],
			["heart",9,"shan"],
			["heart",11,"shan"],
			["heart",12,"shan"],
			["diamond",6,"shan"],
			["diamond",7,"shan"],
			["diamond",8,"shan"],
			["diamond",10,"shan"],
			["diamond",11,"shan"],
			["heart",5,"tao"],
			["heart",6,"tao"],
			["diamond",2,"tao"],
			["diamond",3,"tao"],
			["diamond",9,"jiu"],
			["spade",3,"jiu"],
			["spade",9,"jiu"],
			["club",3,"jiu"],
			["club",9,"jiu"],

			["diamond",13,"hualiu"],
			["club",1,"baiyin"],
			["spade",2,"tengjia"],
			["club",2,"tengjia"],
			["spade",1,"guding"],
			["diamond",1,"zhuque"],

			["heart",2,"huogong"],
			["heart",3,"huogong"],
			["diamond",12,"huogong"],
			["spade",11,"tiesuo"],
			["spade",12,"tiesuo"],
			["club",10,"tiesuo"],
			["club",11,"tiesuo"],
			["club",12,"tiesuo"],
			["club",13,"tiesuo"],
			["heart",1,"wuxie"],
			["heart",13,"wuxie"],
			["spade",13,"wuxie"],
			["spade",10,"bingliang"],
			["club",4,"bingliang"],
			
			['diamond',5,'muniu'],
		],
	}
});
