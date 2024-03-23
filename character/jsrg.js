import { game } from '../noname.js';
game.import('character',function(lib,game,ui,get,ai,_status){
	return {
		name:'jsrg',
		connect:true,
		characterSort:{
			jsrg:{
				jiangshanrugu_qi:['jsrg_liuhong','jsrg_hejin','jsrg_sunjian','jsrg_huangfusong','jsrg_xushao','jsrg_dongbai','jsrg_qiaoxuan','jsrg_yangbiao','jsrg_kongrong','jsrg_zhujun','jsrg_liubei','jsrg_wangyun','jsrg_liuyan','jsrg_caocao','jsrg_nanhualaoxian'],
				jiangshanrugu_cheng:['jsrg_sunce','jsrg_xuyou','jsrg_lvbu','jsrg_zhanghe','jsrg_zoushi','jsrg_guanyu','jsrg_chendeng','jsrg_zhenji','jsrg_zhangliao','jsrg_xugong','jsrg_chunyuqiong'],
				jiangshanrugu_zhuan:['jsrg_guojia','jsrg_zhangfei','jsrg_machao','jsrg_lougui','jsrg_zhangren','jsrg_huangzhong','jsrg_xiahourong','jsrg_sunshangxiang','jsrg_pangtong','jsrg_hansui','jsrg_zhangchu','jsrg_xiahouen','jsrg_fanjiangzhangda'],
				jiangshanrugu_he:['jsrg_zhugeliang','jsrg_jiangwei','jsrg_luxun','jsrg_zhaoyun','jsrg_simayi','jsrg_guoxun','jsrg_sunlubansunluyu','jsrg_caofang','jsrg_sunjun','jsrg_liuyong','jsrg_weiwenzhugezhi','jsrg_zhangxuan','jsrg_gaoxiang','jsrg_guozhao'],
			},
		},
		character:{
			//起
			jsrg_liuhong:['male','qun',4,['jsrgchaozheng','jsrgshenchong','jsrgjulian'],['zhu']],
			jsrg_hejin:['male','qun',4,['jsrgzhaobing','jsrgzhuhuan','jsrgyanhuo']],
			jsrg_sunjian:['male','qun',4,['jsrgpingtao','jsrgjuelie']],
			jsrg_huangfusong:['male','qun',4,['jsrgguanhuo','jsrgjuxia']],
			jsrg_xushao:['male','qun',3,['sbyingmen','sbpingjian']],
			jsrg_dongbai:['female','qun',3,['jsrgshichong','jsrglianzhu']],
			jsrg_qiaoxuan:['male','qun',3,['jsrgjuezhi','jsrgjizhao']],
			jsrg_yangbiao:['male','qun','3/4',['jsrgzhaohan','jsrgrangjie','jsrgyizheng']],
			jsrg_kongrong:['male','qun',3,['jsrglirang','jsrgzhengyi']],
			jsrg_zhujun:['male','qun',4,['jsrgfendi','jsrgjuxiang']],
			jsrg_liubei:['male','qun',4,['jsrgjishan','jsrgzhenqiao']],
			jsrg_wangyun:['male','qun',3,['jsrgshelun','jsrgfayi'],['clan:太原王氏']],
			jsrg_liuyan:['male','qun',3,['xinfu_limu','jsrgtushe','jsrgtongjue'],['zhu']],
			jsrg_caocao:['male','qun',4,['jsrgzhenglve','jsrghuilie']],
			jsrg_nanhualaoxian:['male','qun',3,['jsrgshoushu','jsrgxundao','jsrglinghua']],
			//承
			jsrg_sunce:['male','wu',4,['jsrgduxing','jsrgzhiheng','jsrgzhasi','jsrgbashi'],['zhu']],
			jsrg_xuyou:['male','wei',3,['jsrglipan','jsrgqingxi','jsrgjinmie'],['doublegroup:wei:qun']],
			jsrg_lvbu:['male','qun',5,['jsrgwuchang','jsrgqingjiao','jsrgchengxu'],['doublegroup:shu:qun']],
			jsrg_zhanghe:['male','wei',4,['jsrgqiongtu','jsrgxianzhu'],['doublegroup:wei:qun']],
			jsrg_zoushi:['female','qun',3,['jsrgguyin','jsrgzhangdeng']],
			jsrg_guanyu:['male','shu',5,['jsrgguanjue','jsrgnianen'],['border:wei']],
			jsrg_chendeng:['male','qun',3,['jsrglunshi','jsrgguitu']],
			jsrg_zhenji:['female','qun',3,['jsrgjixiang','jsrgchengxian']],
			jsrg_zhangliao:['male','qun',4,['jsrgzhengbing','jsrgtuwei'],['doublegroup:wei:qun']],
			jsrg_xugong:['male','wu',3,['jsrgbiaozhao','jsrgyechou']],
			jsrg_chunyuqiong:['male','qun',4,['jsrgcangchu','jsrgshishou']],
			//转
			jsrg_guojia:['male','wei',3,['jsrgqingzi','jsrgdingce','jsrgzhenfeng']],
			jsrg_zhangfei:['male','shu',5,['jsrgbaohe','jsrgxushi']],
			jsrg_machao:['male','qun',4,['jsrgzhuiming','mashu']],
			jsrg_lougui:['male','wei',3,['jsrgshacheng','jsrgninghan']],
			jsrg_zhangren:['male','qun',4,['jsrgfuni','jsrgchuanxin']],
			jsrg_huangzhong:['male','shu',4,['jsrgcuifeng','jsrgdengnan']],
			jsrg_xiahourong:['male','wei',4,['jsrgfenjian']],
			jsrg_sunshangxiang:['female','wu',3,['jsrgguiji','jsrgjiaohao']],
			jsrg_pangtong:['male','qun',3,['jsrgmanjuan','jsrgyangming']],
			jsrg_hansui:['male','qun',4,['jsrgniluan','jsrghuchou','jsrgjiemeng'],['zhu']],
			jsrg_zhangchu:['female','qun',3,['jsrghuozhong','jsrgrihui']],
			jsrg_xiahouen:['male','wei',4,['jsrghujian','jsrgshili'],['die_audio:tw_xiahouen']],
			jsrg_fanjiangzhangda:['male','wu',5,['jsrgfushan']],
			//合
			jsrg_zhugeliang:['male','shu',3,['jsrgwentian','jsrgchushi','jsrgyinlve']],
			jsrg_jiangwei:['male','shu',4,['jsrgjinfa','jsrgfumou','jsrgxuanfeng'],['border:wei']],
			jsrg_luxun:['male','wu',3,['jsrgyoujin','jsrgdailao','jsrgzhubei']],
			jsrg_zhaoyun:['male','shu',4,['jsrglonglin','jsrgzhendan']],
			jsrg_simayi:['male','wei',4,['jsrgyingshi','jsrgtuigu']],
			jsrg_guoxun:['male','wei',4,['jsrgeqian','jsrgfusha']],
			jsrg_sunlubansunluyu:['female','wu',3,['jsrgdaimou','jsrgfangjie']],
			jsrg_caofang:['male','wei','3/4',['jsrgzhaotu','jsrgjingju','jsrgweizhui'],['zhu']],
			jsrg_sunjun:['male','wu',4,['jsrgyaoyan','jsrgbazheng']],
			jsrg_liuyong:['male','shu',3,['jsrgdanxin','jsrgfengxiang']],
			jsrg_weiwenzhugezhi:['male','wu',4,['jsrgfuhai']],
			jsrg_zhangxuan:['female','wu',4,['jsrgtongli','jsrgshezang']],
			jsrg_gaoxiang:['male','shu',4,['jsrgchiying']],
			jsrg_guozhao:['female','wei',3,['jsrgpianchong','jsrgzunwei']],
		},
		characterIntro:{
			qiaoxuan:'桥玄（110年－184年6月6日），一作乔玄，字公祖。梁国睢阳县（今河南省商丘市睢阳区）人。东汉时期名臣。桥玄年轻时曾任睢阳县功曹，因坚持追究陈国相羊昌的恶行而闻名。后被举为孝廉，历任洛阳左尉、齐相及上谷、汉阳太守、司徒长史、将作大匠。汉桓帝末年，出任度辽将军，击败鲜卑、南匈奴、高句丽侵扰，保境安民。汉灵帝初年，迁任河南尹、少府、大鸿胪。建宁三年（170年），迁司空。次年，拜司徒。光和元年（178年），升任太尉。桥玄有感于国势日衰，于是称病请辞，改任太中大夫。光和七年（184年），桥玄去世，年七十五。桥玄性格刚强，不阿权贵，待人谦俭，尽管屡历高官，但不因为自己处在高位而有所私请。他为官清廉，去世后连下葬的钱都没有，被时人称为名臣。',
			lougui:'娄圭，字子伯，荆州南阳郡（治今河南南阳）人。曹魏时期著名谋士、将军，娄圭年轻时与曹操有交情，曾经随曹操平定冀州，南征刘表，击破马超，立有功劳，连曹操都感叹他的计谋。 后来曹操和他的儿子们一起出去游玩，娄圭当时也一起随行。因言语不当，被南郡（治今湖北荆州）人习授举报，曹操认为有意诽谤，遭杀害。在小说《三国演义》里，娄圭被设定为京兆人（今陕西西安），隐居终南山，道号“梦梅居士”。于第59回登场。',
			xiahourong:'夏侯荣（207年—219年） ，字幼权，名将夏侯渊之子。建安二十四年（219年）汉中之战，父亲夏侯渊战死后，夏侯荣不愿逃跑，随后拔剑冲入敌阵，战死。',
			guoxun:'郭脩（？～253年），一作郭循，字孝先，凉州西平人，三国时期曹魏官员。原为曹魏中郎，被蜀汉将领姜维俘虏后降蜀汉，任左将军，后来刺杀了蜀汉大将军费祎。被曹魏追封为长乐乡侯，谥曰威侯。',
			caofang:'曹芳（232年－274年），字兰卿，沛国谯县（今安徽省亳州市）人。三国时期曹魏第三位皇帝（239年1月22日－254年10月17日在位），疑为魏武帝曹操曾孙，任城威王曹彰之孙，任城王曹楷之子。太和六年（232年），生于任城王府。青龙三年（235年），选为魏明帝曹叡养子，册封齐王。景初三年（239年），立为皇太子，同日魏明帝曹叡病死，曹芳正式即位，由大将军曹爽和太尉司马懿共同辅政。正始十年，经历高平陵之变，曹爽倒台，政权落入司马氏手中。嘉平六年（254年），中书令李丰和光禄大夫张缉图谋废掉司马师，改立夏侯玄为大将军。司马师平定叛乱后，将曹芳废为齐王，拥戴高贵乡公曹髦继位。西晋建立后，册封邵陵县公。泰始十年（274年），曹芳病逝，终年四十三岁，谥号为厉。',
			sunjun:'孙峻（219年-256年10月19日），字子远，扬州吴郡富春（今浙江省杭州市）人，昭义中郎将孙静曾孙，定武中郎将孙暠之孙，散骑侍郎孙恭之子。三国时期吴国宗室、权臣。孙峻从小弓马娴熟，胆量非凡。孙权晚年时，孙峻担任武卫都尉，掌握军权，然后又任侍中，开始涉足朝政。孙权临终前，孙峻接受遗诏同诸葛恪、滕胤共同辅佐朝政。此后，其身兼武卫将军，一直主持宫廷的值班、守卫等要害部门，并被封为都乡侯。孙峻生性喜好专断，容不下诸葛恪，于是与吴主孙亮密谋发动政变，在酒宴中设伏兵杀死诸葛恪。孙峻谋杀诸葛恪之后，升任丞相、大将军，督察内外一切军务，假节，晋封富春侯。此后，孙峻独揽朝政。孙峻在任职期间，滥施刑杀，淫乱宫女，和全公主孙鲁班私通。五凤元年（254年），吴侯孙英企图谋杀孙峻，后来事情被泄露，孙英自杀。时隔一年，吴国将军孙仪、张怡、林恂等人乘蜀国使节来访之机，共同谋划诛杀孙峻。后被孙峻发觉，孙仪自杀，林恂等被认为有罪诛死。太平元年（256年），孙峻梦见被诸葛恪所击，因惊悸恐惧发病而死，时年38岁。',
			sunlubansunluyu:'孙鲁班，孙权之女。孙鲁班与孙权二子孙和不睦。孙权长子孙登死后，孙和被立为太子。孙鲁班向孙权进谗言废孙和太子之位，孙和被废后忧愤而死。<br>孙鲁育，又名小虎，孙权与步练师之女。吴后期，孙鲁班诬陷孙鲁育参与谋反，于是孙峻杀害了孙鲁育。',
			jsrg_caocao:'初平元年二月，董卓徙天子都长安，焚洛阳宫室，众诸侯畏卓兵强，莫敢进。操怒斥众人:“为人臣而临此境，当举义兵以诛暴乱，大众已合，诸君何疑？此一战而天下定矣！”遂引兵汴水，遇卓将徐荣，大破之。操迎天子，攻吕布，伐袁术，安汉室，拜为征西将军。是时，袁绍兼四州之地，将攻许都。操欲扫清寰宇，兴复汉室，遂屯兵官渡。既克绍，操曰：“若天命在吾，吾为周文王矣。”',
			jsrg_sunce:'建安五年，操、绍相拒于官渡，孙策欲阴袭许昌，迎汉帝，遂密治兵，部署诸将。未发，会为许贡门客所刺，将计就计，尽托江东于权，诈死以待天时。八月，操、绍决战，孙策亲冒矢石，斩将刈旗，得扬、豫之地。曹操败走冀、青，刘备远遁荆、益。而后历时七年，孙策三分天下已有其二，帝于洛阳，建霸王未竟之功业。权表求吴王，封为仲帝，共治天下。',
			jsrg_guojia:'初平元年二月，郭嘉拜见袁绍，闻曹操怒斥众诸侯，乃对曰：“董卓于汴水或有埋伏，慎之！”曹操未从，果败于徐荣。三月，曹操与郭嘉论天下事：“使孤成大业者，必此人也。”郭嘉从破袁绍，讨谭、尚，连战数克，计定辽东。时年三十八，征乌桓归途郭嘉因劳染疾，命悬之际竟意外饮下柳皮醋水而愈。建安十三年，曹操屯兵赤壁，郭嘉识破连环之计，议上中下三策，可胜刘备。尚未献策，曹操便决意采纳上策，“奉孝之才，足胜孤百倍，卿言上策，如何不取？”由此，赤壁战后曹操尽得天下。',
			jsrg_zhugeliang:'建兴六年春，汉丞相诸葛亮使赵云、邓芝为先锋，马谡为副将拒箕谷，牵制曹真主力。自率三十万大军攻祁山，三郡叛魏应亮，关中响震。曹叡命张郃拒亮，亮使定军山降将姜维与郃战于街亭，张郃久攻不下。后曹真强攻赵云军，赵云死战，坚守箕谷，马谡、邓芝当场战死忠勇殉国。……既克张郃，曹真溃逃，曹叡弃守长安，迁都邺城。十月，司马懿击退孙权，回援曹真。而后三年，丞相所到之处，无不望风而降，皆箪食壶浆，以迎汉军。尽收豫、徐、兖、并之地，建兴十年春，司马懿父子三人死于诸葛武侯火计，同年，孙权上表称臣，至此四海清平，大汉一统。而后诸葛亮荐蒋琬为丞相，姜维为大将军，自回隆中归隐，后主挽留再三，皆不受。魏延亦辞官相随，侍奉左右。后主时有不决之事，便往隆中拜访相父，均未得面，童子答曰外出云游，遗数锦囊，拆而视之，皆治国之良策也。',
		},
		characterTitle:{
		},
		perfectPair:{},
		card:{
			xumou_jsrg:{
				type:'special_delay',
				allowDuplicate:true,
				blankCard:true,
				fullimage:true,
				wuxieable:false,
				effect:function(){
					'step 0'
					var card=get.autoViewAs(event.cards[0]);
					card.storage.xumou_jsrg=true;
					player.chooseUseTarget(card,event.cards,`蓄谋:是否使用${get.translation(card)}？`,`请选择要使用的目标。若不使用此牌，则判定区内的所有“蓄谋”牌都将被置入弃牌堆。`);
					'step 1'
					if(!result.bool){
						var cards=player.getCards('j',card=>{
							return (card.viewAs||card.name)=='xumou_jsrg';
						});
						if(cards.length>0) player.loseToDiscardpile(cards);
					}
					else{
						player.addTempSkill('xumou_jsrg_temp','phaseChange');
						player.markAuto('xumou_jsrg_temp',[event.cards[0].name])
					}
				},
			},
			ying:{
				audio:true,
				fullskin:true,
				type:'basic',
				enable:false,
				destroy:'discardPile',
				getYing:function(count){
					var cards=[];
					if(typeof count!='number') count=1;
					while(count--){
						let card=game.createCard('ying','spade',1);
						cards.push(card);
					}
					return cards;
				},
				ai:{
					basic:{
						useful:0,
						value:0,
					},
				},
			},
		},
		characterFilter:{
			jsrg_xushao:function(mode){
				return mode!='guozhan';
			},
		},
		skill:{
			//江山如故·合
			//蓄谋临时禁用
			xumou_jsrg_temp:{
				charlotte:true,
				onremove:true,
				mod:{
					cardEnabled(card,player){
						if(!card.storage||!card.storage.xumou_jsrg) return;
						if(player.getStorage('xumou_jsrg_temp').includes(get.name(card,false))) return false;
					},
				},
			},
			//404诸葛亮
			jsrgwentian:{
				audio:2,
				trigger:{
					player:['phaseZhunbeiBegin','phaseJudgeBegin','phaseDrawBegin','phaseUseBegin','phaseDiscardBegin','phaseJieshuBegin'],
				},
				usable:1,
				prompt2:'观看牌堆顶的五张牌，将其中一张交给其他角色，并将其余牌置于牌堆顶或牌堆底',
				group:'jsrgwentian_viewas',
				async content(event,trigger,player){
					const cards=get.cards(5);
					game.cardsGotoOrdering(cards);
					const {result}=await player.chooseButton([
						'问天：将一张牌交给一名其他角色',
						cards
					],true);
					if(result.bool){
						const {result:result2}=await player.chooseTarget(`将${get.translation(result.links)}交给一名其他角色`,lib.filter.notMe,true).set('ai',target=>{
							return get.attitude(get.player(),target);
						});
						if(result2.bool){
							cards.removeArray(result.links);
							const target=result2.targets[0];
							player.line(target,'green');
							await target.gain(result.links,'gain2').set('giver',player);
						}
					}
					const next=player.chooseToMove();
					next.set('list',[
						['牌堆顶',cards.filterInD()],
						['牌堆底'],
					]);
					next.set('prompt','问天：点击将牌移动到牌堆顶或牌堆底');
					next.processAI=list=>{
						const cards=list[0][1],player=_status.event.player;
						const top=[];
						const judges=player.getCards('j');
						let stopped=false;
						if(!player.hasWuxie()){
							for(let i=0;i<judges.length;i++){
								const judge=get.judge(judges[i]);
								cards.sort((a,b)=>judge(b)-judge(a));
								if(judge(cards[0])<0){
									stopped=true;break;
								}
								else{
									top.unshift(cards.shift());
								}
							}
						}
						let bottom;
						if(!stopped){
							cards.sort((a,b)=>get.value(b,player)-get.value(a,player));
							while(cards.length){
								if(get.value(cards[0],player)<=5) break;
								top.unshift(cards.shift());
							}
						}
						bottom=cards;
						return [top,bottom];
					}
					const {result:{moved}}=await next;
					const top=moved[0];
					const bottom=moved[1];
					top.reverse();
					game.cardsGotoPile(
						top.concat(bottom),
						['top_cards',top],
						(event,card)=>{
							if(event.top_cards.includes(card)) return ui.cardPile.firstChild;
							return null;
						}
					);
					player.popup(get.cnNumber(top.length)+'上'+get.cnNumber(bottom.length)+'下');
					game.log(player,'将'+get.cnNumber(top.length)+'张牌置于牌堆顶');
					game.asyncDelayx();
				},
				subSkill:{
					viewas:{
						audio:'jsrgwentian',
						enable:'chooseToUse',
						filter:function(event,player){
							for(const name of ['wuxie','huogong']){
								if(event.filterCard(get.autoViewAs({name},'unsure'),player,event)) return true;
							}
							return false;
						},
						hiddenCard:function(player,name){
							if(player.isTempBanned('jsrgwentian')) return false;
							return name=='wuxie';
						},
						viewAs:function(cards,player){
							const event=get.event(),filter=event._backup.filterCard;
							for(const name of ['wuxie','huogong']){
								if(filter(get.autoViewAs({name},'unsure'),player,event)) return {name};
							}
							return null;
						},
						filterCard:()=>false,
						selectCard:-1,
						prompt:function(){
							const player=get.player();
							const event=get.event(),filter=event._backup.filterCard;
							let str='将牌堆顶的牌当【';
							for(const name of ['wuxie','huogong']){
								if(filter({name},player,event)){
									str+=get.translation(name); break;
								}
							}
							str+='】使用';
							return str;
						},
						precontent(){
							player.logSkill('jsrgwentian');
							const cards=get.cards();
							event.result.cards=cards;
							delete event.result.skill;
							game.cardsGotoOrdering(cards);
							const color=event.result.card.name=='wuxie'?'black':'red';
							if(get.color(cards,false)!=color){
								player.tempBanSkill('jsrgwentian','roundStart');
							}
						}
					}
				}
			},
			jsrgchushi:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter(event,player){
					const zhu=get.zhu(player);
					if(!zhu||!zhu.isZhu2()||!zhu.countCards('h')) return false;
					return !player.isZhu2()&&player.countCards('h');
				},
				async content(event,trigger,player){
					player.chooseToDebate(game.filterPlayer(current=>{
						return (current==player||current.isZhu2())&&current.countCards('h');
					})).set('callback',async event=>{
						const result=event.debateResult;
						if(result.bool&&result.opinion){
							const {opinion,targets}=result;
							targets.sortBySeat();
							if(opinion=='red'){
								do{
									for(const current of targets){
										await current.draw();
									}
								}
								while(targets.map(current=>{
									return current.countCards('h');
								}).reduce((p,c)=>{
									return p+c;
								},0)<7);
							}
							else{
								player.addMark('jsrgchushi_add',1,false);
								player.addTempSkill('jsrgchushi_add','roundStart');
							}
						}
					})
				},
				subSkill:{
					add:{
						audio:'jsrgchushi',
						trigger:{source:'damageBegin1'},
						filter:function(event){
							return event.hasNature('linked');
						},
						forced:true,
						charlotte:true,
						onremove:true,
						async content(_,trigger,player){
							trigger.num+=player.countMark('jsrgchushi_add');
						},
						ai:{
							damageBonus:true,
							skillTagFilter:function(player,tag,arg){
								if(tag==='damageBonus') return arg&&arg.card&&game.hasNature(arg.card,'linked');
							}
						},
						intro:{
							content:'造成的属性伤害+#',
						}
					}
				}
			},
			jsrgyinlve:{
				audio:2,
				trigger:{
					global:'damageBegin4',
				},
				filter:function(event,player){
					return event.player.isIn()&&['fire','thunder'].some(n=>!player.hasSkill(`jsrgyinlve_${n}`)&&event.hasNature(n));
				},
				check:function(event,player){
					if(get.damageEffect(event.player,event.source,player,get.natureList(event.nature))<-5) return true;
					return false;
				},
				logTarget:'player',
				async content(event,trigger,player){
					trigger.cancel();
					const natures=['fire','thunder'];
					let index;
					if(natures.every(n=>!player.hasSkill(`jsrgyinlve_${n}`)&&trigger.hasNature(n))){
						const {result}=await player.chooseControl(['摸牌阶段','弃牌阶段']).set('prompt','请选择要新回合内仅有的阶段');
						index=result.index;
					}
					else index=[0,1].find(i=>!player.hasSkill(`jsrgyinlve_${natures[i]}`)&&trigger.hasNature(natures[i]));
					player.addTempSkill(`jsrgyinlve_${natures[index]}`,'roundStart');
					player.insertPhase().set('phaseList',[['phaseDraw','phaseDiscard'][index]]);
				},
				subSkill:{
					fire:{charlotte:true},
					thunder:{charlotte:true},
				}
			},
			//姜维
			jsrgjinfa:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterCard:true,
				position:'h',
				discard:false,
				lose:false,
				delay:false,
				check:function(){
					return 1+Math.random();
				},
				async content(event,trigger,player){
					await player.showCards(event.cards);
					player.chooseToDebate(game.filterPlayer(current=>{
						return current.maxHp<=player.maxHp;
					})).set('callback',async (event)=>{
						const result=event.debateResult;
						if(result.bool&&result.opinion){
							const {cards:fixedCards}=event.getParent('jsrgjinfa');
							const color=get.color(fixedCards);
							const {opinion,targets}=result;
							if(opinion==color){
								const {result}=await player.chooseTarget('是否令至多两名参与议事的角色将手牌摸至体力上限？',[1,2],(card,player,target)=>{
									return get.event('targets').includes(target);
								}).set('targets',targets).set('ai',target=>{
									const player=get.player();
									const att=get.attitude(player,target);
									if(att<=0) return -1;
									return att*Math.sqrt(Math.max(0.1,target.maxHp-target.countCards('h')));
								});
								if(result.bool){
									const targets=result.targets;
									targets.sortBySeat();
									player.line(targets,'green');
									for(const current of targets){
										if(current.countCards('h')<current.maxHp) await current.drawTo(current.maxHp);
									}
								}
							}
							else{
								await player.gain(lib.card.ying.getYing(2),'gain2');
							}
						}
						const {red,black}=result;
						if(red.length==1&&red[0][0]==player||black.length==1&&black[0][0]==player){
							const list=lib.group.slice();
							list.remove(player.group);
							list.push('cancel2');
							const {result:{control}}=await player.chooseControl(list).set('prompt','是否变更势力？').set('ai',()=>{
								if(!get.event('change')) return 'cancel2';
								const controls=get.event('controls');
								const groups=['wei','shu'].filter(g=>controls.includes(g));
								if(groups.length) return groups.randomGet();
								return controls.randomGet();
							}).set('change',['wei','shu'].includes(player.group)?(Math.random()<0.5):true);
							if(control!='cancel2'){
								player.popup(control+'2',get.groupnature(control,'raw'));
								player.changeGroup(control);
							}
						}
					});
				},
				ai:{
					order:function(item,player){
						if(player.countCards('h')==1) return 10;
						return 1;
					},
					result:{
						player:1,
					},
				}
			},
			jsrgfumou:{
				audio:2,
				trigger:{global:'chooseToDebateAfter'},
				groupSkill:true,
				forced:true,
				locked:false,
				filter:function(event,player){
					if(player.group!='wei') return false;
					if(!event.targets.includes(player)) return false;
					if(event.red.some(i=>i[0]==player)) return event.black.length;
					if(event.black.some(i=>i[0]==player)) return event.red.length;
					return false;
				},
				async content(event,trigger,player){
					const targets=[];
					if(trigger.red.some(i=>i[0]==player)) targets.addArray(trigger.black.map(i=>i[0]));
					if(trigger.black.some(i=>i[0]==player)) targets.addArray(trigger.red.map(i=>i[0]));
					player.line(targets,'thunder');
					targets.forEach(target=>{
						target.addTempSkill('jsrgfumou_forbid');
						target.markAuto('jsrgfumou_forbid',['red','black'].filter(color=>{
							return trigger[color].some(i=>i[0]==target);
						}))
					});
					game.broadcastAll(targets=>{
						lib.skill.jsrgfumou_backup.targets=targets;
					},targets);
					const next=player.chooseToUse();
					next.set('openskilldialog',`是否将一张【影】当【出其不意】对一名与你意见不同的角色使用？`);
					next.set('norestore',true);
					next.set('_backupevent','jsrgfumou_backup');
					next.set('custom',{
						add:{},
						replace:{window:function(){}}
					});
					next.backup('jsrgfumou_backup');
				},
				subSkill:{
					backup:{
						filterCard:function(card){
							return get.itemtype(card)=='card'&&get.name(card)=='ying';
						},
						viewAs:{
							name:'chuqibuyi',
						},
						selectCard:1,
						position:'hs',
						log:false,
						filterTarget:function(card,player,target){
							const targets=lib.skill.jsrgfumou_backup.targets;
							if(!targets.includes(target)||ui.selected.targets.containsSome(targets)) return false;
							return lib.filter.targetEnabled.apply(this,arguments);
						},
						ai1:function(card){
							return 6-get.value(card);
						},
						precontent:function(){
							delete event.result.skill;
						},
					},
					forbid:{
						charlotte:true,
						onremove:true,
						mod:{
							cardEnabled:function(card,player){
								const color = get.color(card);
								if (color != 'unsure' && player.getStorage('jsrgfumou_forbid').includes(color)) return false;
							},
							cardRespondable:function(card,player){
								const color = get.color(card);
								if (color != 'unsure' && player.getStorage('jsrgfumou_forbid').includes(color)) return false;
							},
							cardSavable:function(card,player){
								const color = get.color(card);
								if (color != 'unsure' && player.getStorage('jsrgfumou_forbid').includes(color)) return false;
							},
						},
						mark:true,
						intro:{
							content:'本回合不能使用或打出$牌',
						},
					}
				}
			},
			jsrgxuanfeng:{
				audio:2,
				enable:'chooseToUse',
				filterCard:{name:'ying'},
				position:'hs',
				groupSkill:true,
				locked:false,
				viewAs:{
					name:'sha',
					nature:'stab',
					storage:{jsrgxuanfeng:true},
				},
				viewAsFilter(player){
					if(player.group!='shu') return false;
					if(!player.countCards('hs','ying')) return false;
				},
				prompt:'将一张【影】当无距离和次数限制的刺【杀】使用',
				check(card){
					const val=get.value(card);
					return 5-val;
				},
				mod:{
					targetInRange:function(card,player,target){
						if(card.storage&&card.storage.jsrgxuanfeng) return true;
					},
					cardUsable:function(card){
						if(card.storage&&card.storage.jsrgxuanfeng) return Infinity;
					}
				},
				ai:{
					order:2,
				}
			},
			//陆逊
			jsrgyoujin:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				filter(event,player){
					return game.hasPlayer(current=>{
						return player.canCompare(current);
					});
				},
				direct:true,
				async content(event,trigger,player){
					const {result}=await player.chooseTarget(get.prompt2('jsrgyoujin'),(card,player,target)=>{
						return player.canCompare(target);
					}).set('ai',target=>{
						if(!get.event('goon')) return 0;
						return -get.attitude(get.player(),target);
					}).set('goon',player.countCards('hs',['shan','caochuan'])||player.getHp()>=3);
					if(!result.bool) return;
					const {targets}=result,target=targets[0];
					player.logSkill('jsrgyoujin',target);
					const {result:result2}=await player.chooseToCompare(target).set('small',true);
					player.addTempSkill('jsrgyoujin_forbid');
					player.markAuto('jsrgyoujin_forbid',[result2.num1]);
					target.addTempSkill('jsrgyoujin_forbid');
					target.markAuto('jsrgyoujin_forbid',[result2.num2]);
					if(!result2.tie){
						const targets=[target,player];
						if(result2.bool) targets.reverse();
						const sha=new lib.element.VCard({name:'sha'});
						if(targets[0].canUse(sha,targets[1],false)){
							targets[0].useCard(sha,targets[1],false);
						}
					}
				},
				subSkill:{
					forbid:{
						charlotte:true,
						onremove:true,
						mod:{
							cardEnabled2:function(card,player){
								if(get.itemtype(card)=='card'&&player.getStorage('jsrgyoujin_forbid').some(num=>num>get.number(card))) return false;
							},
						},
						mark:true,
						intro:{
							content:'本回合不能使用或打出点数小于$的手牌',
						},
					}
				}
			},
			jsrgdailao:{
				audio:2,
				enable:'phaseUse',
				filter(event,player){
					return !player.hasCard(card=>{
						return player.hasUseTarget(card,true,true);
					});
				},
				async content(event,trigger,player){
					await player.showHandcards();
					await player.draw(2);
					const evt=event.getParent('phase');
					if(evt){
						game.resetSkills();
						_status.event=evt;
						_status.event.finish();
						_status.event.untrigger(true);
					}
				},
				ai:{
					order:0.0001,
					result:{player:1},
				}
			},
			jsrgzhubei:{
				audio:2,
				trigger:{source:'damageBegin1'},
				forced:true,
				init(player){
					player.addSkill('jsrgzhubei_record');
				},
				filter(event,player){
					return event.player.hasHistory('damage',evt=>{
						return evt.source==player;
					});
				},
				logTarget:'player',
				async content(event,trigger,player){
					trigger.num++;
				},
				subSkill:{
					record:{
						trigger:{
							global:['loseAfter','equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
						},
						charlotte:true,
						silent:true,
						filter(event,player){
							return game.hasPlayer(current=>{
								if(current.countCards('h')) return false;
								const evt=event.getl(current);
								return evt&&evt.hs&&evt.hs.length;
							});
						},
						async content(event,trigger,player){
							game.countPlayer(current=>{
								if(current.countCards('h')) return false;
								const evt=trigger.getl(current);
								if(evt&&evt.hs&&evt.hs.length) current.addTempSkill('jsrgzhubei_lost');
							});
						},
					},
					lost:{charlotte:true},
				},
				mod:{
					cardUsableTarget(card,player,target){
						if(target.hasSkill('jsrgzhubei_lost')) return true;
					},
				},
			},
			//赵云
			jsrglonglin:{
				audio:2,
				trigger:{
					global:'useCardToPlayered',
				},
				usable:1,
				filter(event,player){
					if(event.player==player) return false;
					if(event.card.name!='sha') return false;
					return event.isFirstTarget&&event.player.isPhaseUsing();
				},
				direct:true,
				async content(event,trigger,player){
					const juedou=new lib.element.VCard({name:'juedou',storage:{jsrglonglin:true}});
					const {result}=await player.chooseToDiscard(get.prompt2('jsrglonglin'),'he').set('ai',card=>{
						if(get.event('goon')) return 5-get.value(card);
						return 0;
					}).set('goon',(trigger.player.canUse(juedou,player)?Math.max(0,get.effect(player,juedou,trigger.player,trigger.player)):0)+trigger.targets.map(target=>{
						return get.effect(target,trigger.card,trigger.player,player);
					}).reduce((p,c)=>{
						return p+c;
					},0)<-4).set('logSkill',['jsrglonglin',trigger.player]);
					if(result.bool){
						trigger.excluded.addArray(trigger.targets);
						game.asyncDelayx();
						if(trigger.player.canUse(juedou,player)){
							const {result}=await trigger.player.chooseBool(`是否视为对${get.translation(player)}使用一张【决斗】？`).set('choice',get.effect(player,juedou,trigger.player,trigger.player)>=0);
							if(result.bool){
								player.addTempSkill('jsrglonglin_source');
								trigger.player.useCard(juedou,player);
							}
						}
					}
				},
				subSkill:{
					source:{
						trigger:{source:'damageSource'},
						charlotte:true,
						forced:true,
						popup:false,
						filter(event,player){
							return event.card&&event.card.storage&&event.card.storage.jsrglonglin;
						},
						async content(event,trigger,player){
							player.line(trigger.player);
							trigger.player.addTempSkill('jsrglonglin_forbid');
						}
					},
					forbid:{
						mod:{
							cardEnabled:function(card,player){
								if(!card.cards) return;
								if(card.cards.some(cardx=>get.position(cardx)=='h')) return false;
							},
							cardSavable:function(card,player){
								if(!card.cards) return;
								if(card.cards.some(cardx=>get.position(cardx)=='h')) return false;
							},
						},
						charlotte:true,
						mark:true,
						intro:{
							content:'不能使用手牌',
						},
					},
				},
			},
			jsrgzhendan:{
				audio:2,
				trigger:{
					player:'damageEnd',
					global:'roundStart',
				},
				filter(event,player){
					let count=0;
					let roundCount=1+(event.name!='damage');
					const curLen=player.actionHistory.length;
					for(let i=curLen-1;i>=0;i--){
						if(roundCount==1&&game.hasPlayer(current=>{
							const history=current.actionHistory[i];
							if(!history.isMe||history.isSkipped) return false;
							return true;
						})){
							count++;
						}
						if(player.actionHistory[i].isRound) roundCount--;
						if(roundCount<=0) break;
					}
					if(!player.storage.jsrgzhendan_mark&&count>0) return true;
					return false;
				},
				forced:true,
				locked:false,
				group:'jsrgzhendan_viewas',
				async content(event,trigger,player){
					let count=0;
					let roundCount=1+(trigger.name!='damage');
					const curLen=player.actionHistory.length;
					for(let i=curLen-1;i>=0;i--){
						if(roundCount==1&&game.hasPlayer(current=>{
							const history=current.actionHistory[i];
							if(!history.isMe||history.isSkipped) return false;
							return true;
						})){
							count++;
						}
						if(player.actionHistory[i].isRound) roundCount--;
						if(roundCount<=0) break;
					}
					count=Math.min(5,count);
					await player.draw(count);
					if(trigger.name=='damage'){
						player.tempBanSkill('jsrgzhendan','roundStart');
						player.storage.jsrgzhendan_mark=true;
						player.when({global:'roundStart'}).assign({
							lastDo:true,
						}).then(()=>{
							delete player.storage.jsrgzhendan_mark;
						});
					}
				},
				subSkill:{
					viewas:{
						audio:'jsrgzhendan',
						enable:['chooseToUse','chooseToRespond'],
						filter(event,player){
							if(event.type=='wuxie') return false;
							if(!_status.connectMode&&!player.countCards('hs',card=>{
								return get.type2(card)!='basic';
							})) return false;
							return get.inpileVCardList(info=>{
								if(info[0]!='basic') return false;
								return event.filterCard(get.autoViewAs({name:info[2],nature:info[3]},'unsure'),player,event);
							}).length;
						},
						chooseButton:{
							dialog(event,player){
								const vcards=get.inpileVCardList(info=>{
									if(info[0]!='basic') return false;
									return event.filterCard(get.autoViewAs({name:info[2],nature:info[3]},'unsure'),player,event);
								});
								return ui.create.dialog('镇胆',[vcards,'vcard']);
							},
							check(button){
								if(get.event().getParent().type!='phase') return 1;
								return get.player().getUseValue({name:button.link[2],nature:button.link[3]});
							},
							backup(links,player){
								return {
									audio:'jsrgzhendan',
									popname:true,
									viewAs:{name:links[0][2],nature:links[0][3]},
									filterCard(card,player){
										return get.type2(card)!='basic';
									},
									selectCard:1,
									position:'hs',
								}
							},
							prompt(links,player){
								return '将一张非基本手牌当'+(get.translation(links[0][3])||'')+get.translation(links[0][2])+'使用或打出';
							}
						},
						hiddenCard(player,name){
							return get.type(name)=='basic'&&player.countCards('hs')>0;
						},
						ai:{
							respondSha:true,
							respondShan:true,
							skillTagFilter(player){
								return player.countCards('hs')>0;
							},
							order:0.5,
							result:{
								player(player){
									if(get.event().dying){
										return get.attitude(player,get.event().dying);
									}
									return 1;
								},
							},
						},
					},
					viewas_backup:{},
				}
			},
			//司马懿
			jsrgyingshi:{
				audio:2,
				trigger:{player:'turnOverAfter'},
				async content(event,trigger,player){
					const number=(game.dead.length>2)?5:3;
					const cards=get.bottomCards(number);
					game.cardsGotoOrdering(cards);
					const next=player.chooseToMove();
					next.set('list',[
						['牌堆顶'],
						['牌堆底',cards.reverse()],
					]);
					next.set('prompt','鹰眎：点击将牌移动到牌堆顶或牌堆底');
					next.processAI=list=>{
						const cards=list[1][1],player=_status.event.player;
						const top=[];
						const judges=player.getCards('j');
						let stopped=false;
						if(!player.hasWuxie()){
							for(let i=0;i<judges.length;i++){
								const judge=get.judge(judges[i]);
								cards.sort((a,b)=>judge(b)-judge(a));
								if(judge(cards[0])<0){
									stopped=true;break;
								}
								else{
									top.unshift(cards.shift());
								}
							}
						}
						let bottom;
						if(!stopped){
							cards.sort((a,b)=>get.value(b,player)-get.value(a,player));
							while(cards.length){
								if(get.value(cards[0],player)<=5) break;
								top.unshift(cards.shift());
							}
						}
						bottom=cards;
						return [top,bottom];
					}
					const {result:{moved}}=await next;
					const top=moved[0];
					const bottom=moved[1];
					top.reverse();
					game.cardsGotoPile(
						top.concat(bottom),
						['top_cards',top],
						(event,card)=>{
							if(event.top_cards.includes(card)) return ui.cardPile.firstChild;
							return null;
						}
					);
					player.popup(get.cnNumber(top.length)+'上'+get.cnNumber(bottom.length)+'下');
					game.log(player,'将'+get.cnNumber(top.length)+'张牌置于牌堆顶');
					game.asyncDelayx();
				},
			},
			jsrgtuigu:{
				audio:2,
				trigger:{player:'phaseBegin'},
				prompt2(event,player){
					const num=Math.floor(game.countPlayer()/2);
					return `你翻面，令你本回合的手牌上限+${num}，摸${get.cnNumber(num)}张牌，视为使用一张【解甲归田】（目标角色不能使用这些牌直到其下回合结束）。`;
				},
				group:['jsrgtuigu_insert','jsrgtuigu_recover'],
				async content(event,trigger,player){
					await player.turnOver();
					const num=Math.floor(game.countPlayer()/2);
					player.addTempSkill('jsrgtuigu_handcard');
					player.addMark('jsrgtuigu_handcard',num,false);
					await player.draw(num);
					const jiejia=new lib.element.VCard({name:'jiejia',storage:{jsrgtuigu:true}});
					if(player.hasUseTarget(jiejia)){
						player.addTempSkill('jsrgtuigu_block');
						player.chooseUseTarget(jiejia,true);
					}
				},
				subSkill:{
					insert:{
						audio:'jsrgtuigu',
						trigger:{global:'roundStart'},
						filter(event,player){
							const curLen=player.actionHistory.length;
							if(curLen<=2) return false;
							for(let i=curLen-2;i>=0;i--){
								const history=player.actionHistory[i];
								if(history.isMe&&!history.isSkipped&&!history._jsrgtuigu) return false;
								if(history.isRound) break;
							}
							return true;
						},
						forced:true,
						locked:false,
						async content(event,trigger,player){
							const evt=trigger,evtx=player.insertPhase();
							player.when('phaseBeforeStart')
							.filter(evtt=>evtt==evtx)
							.then(()=>{
								game.players.slice().concat(game.dead).forEach(current=>{
									current.getHistory()._jsrgtuigu=true;
									current.getStat()._jsrgtuigu=true;
								});
							});
							if(evt.player!=player&&!evt._finished){
								evt.finish();
								evt._triggered=5;
								const evtxx=evt.player.insertPhase();
								delete evtxx.skill;
							}
						},
					},
					recover:{
						audio:'jsrgtuigu',
						trigger:{
							player:'loseAfter',
							global:['gainAfter','equipAfter','addJudgeAfter','loseAsyncAfter','addToExpansionAfter'],
						},
						filter(event,player){
							if(player.isHealthy()) return false;
							const evt=event.getl(player);
							return evt&&evt.es&&evt.es.length>0;
						},
						forced:true,
						locked:false,
						async content(event,trigger,player){
							player.recover();
						}
					},
					handcard:{
						markimage:'image/card/handcard.png',
						intro:{
							content(storage,player){
								return '手牌上限+'+storage;
							}
						},
						onremove:true,
						charlotte:true,
						mod:{
							maxHandcard(player,num){
								return num+player.countMark('jsrgtuigu_handcard');
							}
						},
					},
					block:{
						trigger:{global:'gainAfter'},
						filter(event,player){
							if(event.getParent().name!='jiejia') return false;
							const card=event.getParent(2).card;
							if(card&&card.storage&&card.storage.jsrgtuigu) return true;
							return false;
						},
						charlotte:true,
						forced:true,
						silent:true,
						content(){
							trigger.player.addGaintag(trigger.cards,'jsrgtuigu');
							trigger.player.addTempSkill('jsrgtuigu_blocked',{player:'phaseAfter'});
						}
					},
					blocked:{
						mod:{
							cardEnabled2(card){
								if(get.itemtype(card)=='card'&&card.hasGaintag('jsrgtuigu')) return false;
							},
						},
						charlotte:true,
						forced:true,
						popup:false,
						onremove(player){
							player.removeGaintag('jsrgtuigu');
						},
					},
				}
			},
			//郭循
			jsrgeqian:{
				audio:2,
				trigger:{player:'useCardToPlayered'},
				filter(event,player){
					if(!event.isFirstTarget||event.targets.length!=1||event.target==player) return false;
					if(event.card.name=='sha') return true;
					return event.getParent(3).name=='xumou_jsrg';
				},
				prompt2(event,player){
					return `令${get.translation(event.card)}不计入次数限制，且你获得${get.translation(event.target)}一张牌，然后其可以令你本回合至其的距离+2`;
				},
				group:'jsrgeqian_prepare',
				logTarget:'target',
				async content(event,trigger,player){
					if(trigger.addCount!==false){
						trigger.addCount=false;
						var stat=player.getStat().card,name=trigger.card.name;
						if(typeof stat[name]=='number') stat[name]--;
					}
					await player.gainPlayerCard(trigger.target,'he',true);
					const {result:{bool}}=await trigger.target.chooseBool(`是否令${get.translation(player)}至你的距离于本回合内+2？`).set('ai',()=>true);
					if(bool){
						player.addTempSkill('jsrgeqian_distance');
						if(!player.storage.jsrgeqian_distance) player.storage.jsrgeqian_distance={};
						const id=trigger.target.playerid;
						if(typeof player.storage.jsrgeqian_distance[id]!='number') player.storage.jsrgeqian_distance[id]=0;
						player.storage.jsrgeqian_distance[id]+=2;
						player.markSkill('jsrgeqian_distance');
					}
				},
				subSkill:{
					prepare:{
						audio:'jsrgeqian',
						trigger:{player:'phaseJieshuBegin'},
						filter(event,player){
							return player.countCards('h');
						},
						direct:true,
						async content(event,trigger,player){
							while(player.countCards('h')>0){
								const {result:{bool,cards}}=await player.chooseCard(get.prompt('jsrgeqian'),'你可以蓄谋任意次').set('ai',card=>{
									const player=get.player();
									if(player.hasValueTarget(card)) return player.getUseValue(card);
									return 0;
								});
								if(!bool) break;
								await player.addJudge({name:'xumou_jsrg'},cards);
							}
						},
					},
					distance:{
						onremove:true,
						charlotte:true,
						mod:{
							globalFrom(player,target,distance){
								if(!player.storage.jsrgeqian_distance) return;
								const dis=player.storage.jsrgeqian_distance[target.playerid];
								if(typeof dis=='number') return distance+dis;
							},
						},
						intro:{
							content(storage,player){
								if(!storage) return;
								const map=(_status.connectMode?lib.playerOL:game.playerMap);
								let str=`你本回合：`;
								for(const id in storage){
									str+='<li>至'+get.translation(map[id])+'的距离+'+storage[id];
								}
								return str;
							}
						}
					},
				}
			},
			jsrgfusha:{
				audio:2,
				enable:'phaseUse',
				limited:true,
				skillAnimation:true,
				animationColor:'fire',
				filter(event,player){
					return game.countPlayer(current=>{
						return player.inRange(current);
					})==1;
				},
				filterTarget(card,player,target){
					return player.inRange(target);
				},
				selectTarget:-1,
				async content(event,trigger,player){
					player.awakenSkill('jsrgfusha');
					event.target.damage(Math.min(game.countPlayer(),player.getAttackRange()));
				},
				ai:{
					order:1,
					result:{
						target:-2,
					},
				},
			},
			//大小虎
			jsrgdaimou:{
				audio:2,
				trigger:{
					global:'useCardToPlayer',
				},
				filter(event,player){
					if(event.card.name!='sha') return false;
					if(event.target!=player) return !player.hasSkill('jsrgdaimou_other');
					return !player.hasSkill('jsrgdaimou_me')&&player.hasCard(card=>{
						return (card.viewAs||card.name)=='xumou_jsrg'&&lib.filter.cardDiscardable(card,player,'jsrgdaimou');
					},'j');
				},
				direct:true,
				async content(event,trigger,player){
					if(trigger.target==player){
						player.logSkill('jsrgdaimou');
						player.addTempSkill('jsrgdaimou_me');
						const {result:{bool,links}}=await player.chooseButton([
							'殆谋：请弃置区域里的一张蓄谋牌',
							player.getCards('j',card=>{
								return (card.viewAs||card.name)=='xumou_jsrg';
							})
						],true).set('filterButton',button=>{
							return lib.filter.cardDiscardable(button.link,get.player(),'jsrgdaimou');
						}).set('ai',button=>{
							const player=get.player();
							return 1/Math.max(0.01,player.getUseValue(button.link));
						});
						if(bool){
							player.discard(links);
						}
					}
					else{
						const {result:{bool}}=await player.chooseBool(get.prompt('jsrgdaimou'),'你可以用牌堆顶的牌蓄谋').set('ai',()=>true);
						if(bool){
							player.logSkill('jsrgdaimou');
							player.addTempSkill('jsrgdaimou_other');
							player.addJudge({name:'xumou_jsrg'},get.cards());
						}
					}
				},
				subSkill:{
					me:{charlotte:true},
					other:{charlotte:true},
				},
			},
			jsrgfangjie:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				direct:true,
				async content(event,trigger,player){
					if(!player.hasCard(card=>{
						return (card.viewAs||card.name)=='xumou_jsrg';
					},'j')){
						player.logSkill('jsrgfangjie');
						await player.recover();
						await player.draw();
					}
					else{
						const {result:{bool,links}}=await player.chooseButton([
							'是否弃置区域里的任意张蓄谋牌并失去〖芳洁〗？',
							player.getCards('j',card=>{
								return (card.viewAs||card.name)=='xumou_jsrg';
							})
						],[1,Infinity]).set('filterButton',button=>{
							return lib.filter.cardDiscardable(button.link,get.player(),'jsrgdaimou');
						}).set('ai',()=>0);
						if(bool){
							player.logSkill('jsrgfangjie');
							await player.discard(links);
							player.removeSkills('jsrgfangjie');
						}
					}
				},
			},
			//曹芳
			jsrgzhaotu:{
				audio:2,
				enable:'chooseToUse',
				viewAs:{name:'lebu'},
				position:'hes',
				round:1,
				viewAsFilter(player){
					return player.countCards('hes');
				},
				filterCard(card,player){
					return get.color(card)=='red'&&get.type2(card)!='trick';
				},
				onuse(result,player){
					player.tempBanSkill('jsrgzhaotu',null,false);
					result.targets[0].insertPhase();
					result.targets[0].addTempSkill('jsrgzhaotu_handcard',{player:'phaseAfter'});
					result.targets[0].addMark('jsrgzhaotu_handcard',2,false);
				},
				subSkill:{
					handcard:{
						intro:{
							content(storage,player){
								return '手牌上限-'+storage;
							}
						},
						charlotte:true,
						onremove:true,
						mod:{
							maxHandcard(player,num){
								return num-player.countMark('jsrgzhaotu_handcard');
							}
						},
					},
				},
				ai:{
					order:5,
					result:{
						target(player,target){
							let dis=0.5-0.75*target.needsToDiscard(2,null,true);
							if(dis>0) return dis;
							if(player.hasSkill('jsrgjingju')&&player.hasZhuSkill('jsrgweizhui')&&get.attitude(player,target)>0) return game.countPlayer(current=>{
								if(current===player||current===target||current.group!=='wei') return false;
								return player.hasZhuSkill('jsrgweizhui',current)&&get.attitude(player,current)>0;
							});
							return dis;
						},
					},
				},
			},
			jsrgjingju:{
				audio:2,
				enable:'chooseToUse',
				filter(event,player){
					if(event.type=='wuxie'||event.jsrgjingju) return false;
					if(!player.canMoveCard(null,false,game.filterPlayer(i=>i!=player),player,card=>{
						return get.position(card)=='j';
					})) return false;
					return get.inpileVCardList(info=>{
						if(info[0]!='basic') return false;
						return event.filterCard(get.autoViewAs({name:info[2],nature:info[3]},'unsure'),player,event);
					}).length;
				},
				chooseButton:{
					dialog:function(event,player){
						const vcards=get.inpileVCardList(info=>{
							if(info[0]!='basic') return false;
							return event.filterCard(get.autoViewAs({name:info[2],nature:info[3]},'unsure'),player,event);
						});
						return ui.create.dialog('惊惧',[vcards,'vcard'],'hidden');
					},
					check:function(button){
						let player=_status.event.player;
						if(get.event().getParent().type!='phase') return 1;
						return get.player().getUseValue({name:button.link[2],nature:button.link[3]})+game.countPlayer(current=>{
							if(current===player||current.group!=='wei') return false;
							return player.hasZhuSkill('jsrgweizhui',current)&&get.attitude(player,current)>0;
						});
					},
					backup:function(links,player){
						return {
							filterCard:()=>false,
							viewAs:{
								name:links[0][2],
								nature:links[0][3],
								isCard:true,
							},
							selectCard:-1,
							precontent(){
								'step 0'
								player.moveCard(`惊惧：将其他角色判定区里的牌移动至你的判定区`,game.filterPlayer(i=>i!=player),player,card=>{
									return get.position(card)=='j';
								}).set('logSkill','jsrgjingju');
								'step 1'
								if(result.bool){
									delete event.result.skill;
								}
								else{
									event.getParent().jsrgjingju=true;
									event.getParent().goto(0);
									delete event.getParent().openskilldialog;
									event.finish();
								}
								'step 2'
								game.delayx();
							},
						}
					},
					prompt:function(links,player){
						return '选择'+get.translation(links[0][3]||'')+'【'+get.translation(links[0][2])+'】的目标';
					}
				},
				ai:{
					order:function(){
						const player=get.player(),event=_status.event;
						if(player.canMoveCard(null,false,game.filterPlayer(),player,card=>{
							return get.position(card)=='j';
						})){
							if(event.type=='dying'){
								if(event.filterCard({name:'tao'},player,event)){
									return 0.5;
								}
							}
							else{
								if(event.filterCard({name:'tao'},player,event)||event.filterCard({name:'shan'},player,event)){
									return 4;
								}
								if(event.filterCard({name:'sha'},player,event)){
									return 2.9;
								}
							}
						}
						return 0;
					},
					save:true,
					respondSha:true,
					respondShan:true,
					skillTagFilter:function(player,tag,arg){
						return player.canMoveCard(null,false,game.filterPlayer(),player,card=>{
							return get.position(card)=='j';
						})
					},
					result:{
						player:function(player){
							if(get.event().type=='dying'){
								return get.attitude(player,get.event().dying);
							}
							return 1;
						}
					}
				}
			},
			jsrgweizhui:{
				audio:2,
				trigger:{global:'phaseJieshuBegin'},
				zhuSkill:true,
				direct:true,
				filter(event,player){
					return player!=event.player&&event.player.group=='wei'&&event.player.isIn()&&player.hasZhuSkill('jsrgweizhui',event.player);
				},
				async content(event,trigger,player){
					const {result:{bool,cards}}=await trigger.player.chooseCard(`是否响应${get.translation(player)}的主公技【危坠】？`,'将一张黑色手牌当【过河拆桥】对其使用',(card,player)=>{
						if(get.color(card)!='black') return false;
						return player.canUse(get.autoViewAs({name:'guohe'},[card]),get.event('target'));
					}).set('target',player).set('ai',card=>{
						if(get.effect(get.event('target'),get.autoViewAs({name:'guohe'},[card]),player)<=0) return 0;
						return 7-get.value(card);
					});
					if(bool){
						trigger.player.logSkill('jsrgweizhui',player);
						trigger.player.useCard(get.autoViewAs({name:'guohe'},cards),cards,player);
					}
				},
			},
			//孙峻
			jsrgyaoyan:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				prompt:'是否发动【邀宴】？',
				logTarget:()=>game.filterPlayer(),
				async content(event,trigger,player){
					const targets=game.filterPlayer();
					const toDebateList=[];
					while(targets.length){
						const current=targets.shift();
						const {result:{bool}}=await current.chooseBool(`是否响应${get.translation(player)}的【邀宴】，于回合结束参与议事？`).set('ai',()=>Math.random()<0.5);
						if(bool){
							toDebateList.add(current);
							current.popup('同意','wood');
							game.log(current,'#g同意','参加',player,'的议事');
						}
						else{
							current.popup('拒绝','fire');
							game.log(current,'#r拒绝','参加',player,'的议事');
						}
					}
					if(toDebateList.length){
						player.addTempSkill('jsrgyaoyan_hold');
						player.markAuto('jsrgyaoyan_hold',toDebateList);
					}
				},
				subSkill:{
					hold:{
						trigger:{player:'phaseEnd'},
						charlotte:true,
						forced:true,
						popup:false,
						onremove:true,
						filter(event,player){
							return player.getStorage('jsrgyaoyan_hold').some(i=>i.isIn());
						},
						async content(event,trigger,player){
							player.chooseToDebate(player.getStorage('jsrgyaoyan_hold').filter(i=>i.isIn())).set('callback',async event=>{
								const {bool,opinion,targets}=event.debateResult;
								if(bool&&opinion){
									if(opinion=='red'){
										const notDebated=game.filterPlayer().removeArray(targets);
										if(notDebated.length){
											const {result}=await player.chooseTarget('获得任意名未议事的角色的各一张手牌',[1,Infinity],true,(card,player,target)=>{
												return get.event('targets').includes(target)&&target.countGainableCards(player,'h');
											}).set('targets',notDebated).set('ai',target=>{
												const player=get.player();
												const att=get.attitude(player,target);
												return -att;
											});
											if(result.bool){
												const targets=result.targets;
												targets.sortBySeat();
												player.line(targets,'green');
												for(const current of targets){
													await player.gainPlayerCard(current,'h',true);
												}
											}
										}
									}
									else{
										const {result:{bool,targets:targets2}}=await player.chooseTarget('是否对一名议事的角色造成2点伤害？',(card,player,target)=>{
											return get.event('targets').includes(target);
										}).set('targets',targets).set('ai',target=>{
											const player=get.player();
											const eff=get.damageEffect(target,player,player);
											return eff;
										});
										if(bool){
											player.line(targets2[0]);
											targets2[0].damage(2);
										}
									}
								}
							});
						},
					}
				}
			},
			jsrgbazheng:{
				audio:2,
				trigger:{global:'debateShowOpinion'},
				filter(event,player){
					if(!event.targets.includes(player)) return false;
					const damagedPlayers=player.getHistory('sourceDamage').map(evt=>evt.player).toUniqued();
					let dissent;
					const colors=['red','black'];
					for(const color of colors){
						if(event[color].some(i=>i[0]==player)){
							dissent=colors.find(i=>i!=color);
							break;
						}
					}
					return event[dissent].some(i=>damagedPlayers.includes(i[0]));
				},
				forced:true,
				locked:false,
				direct:true,
				async content(event,trigger,player){
					let myOpinion,dissent;
					const colors=['red','black'];
					for(const color of colors){
						if(trigger[color].some(i=>i[0]==player)){
							myOpinion=color;
							dissent=colors.find(i=>i!=color);
							break;
						}
					}
					const damagedPlayers=player.getHistory('sourceDamage').map(evt=>evt.player).toUniqued();
					let dissident=[];
					for(let i=0;i<trigger[dissent].length;i++){
						const pair=trigger[dissent][i];
						if(damagedPlayers.includes(pair[0])){
							dissident.push(pair[0]);
							trigger[myOpinion].push(pair);
							trigger[dissent].splice(i--,1);
						}
					}
					player.logSkill('jsrgbazheng',dissident);
				},
			},
			//刘永
			jsrgdanxin:{
				audio:2,
				enable:'chooseToUse',
				viewAs:{
					name:'tuixinzhifu',
					storage:{jsrgdanxin:true},
				},
				filterCard:true,
				position:'hes',
				precontent(){
					player.addTempSkill('jsrgdanxin_effect');
				},
				subSkill:{
					effect:{
						audio:'jsrgdanxin',
						trigger:{
							global:'gainAfter',
						},
						filter(event,player){
							const level=event.player!=player?1:2;
							if(event.player!=player&&event.getParent(level).name!='tuixinzhifu') return false;
							if(event.player==player&&event.getParent(level).name!='tuixinzhifu') return false;
							const card=event.getParent(level+1).card;
							return card&&card.storage&&card.storage.jsrgdanxin;
						},
						forced:true,
						popup:false,
						charlotte:true,
						async content(event,trigger,player){
							const level=trigger.player!=player?1:2;
							const {targets}=trigger.getParent(level+1);
							await player.showCards(trigger.cards);
							if(trigger.cards.some(card=>get.suit(card)=='heart')){
								const owners=trigger.cards.filter((card=>get.suit(card)=='heart')).map(card=>get.owner(card)).toUniqued();
								for(const owner of owners){
									if(owner&&owner.isIn()) await owner.recover();
								}
							}
							if(trigger.player==player) return;
							player.addTempSkill('jsrgdanxin_distance');
							if(!player.storage.jsrgdanxin_distance) player.storage.jsrgdanxin_distance={};
							const id=targets[0].playerid;
							if(typeof player.storage.jsrgdanxin_distance[id]!='number') player.storage.jsrgdanxin_distance[id]=0;
							player.storage.jsrgdanxin_distance[id]++;
							player.markSkill('jsrgdanxin_distance');
						},
					},
					distance:{
						onremove:true,
						charlotte:true,
						mod:{
							globalFrom(player,target,distance){
								if(!player.storage.jsrgdanxin_distance) return;
								const dis=player.storage.jsrgdanxin_distance[target.playerid];
								if(typeof dis=='number') return distance+dis;
							},
						},
						intro:{
							content(storage,player){
								if(!storage) return;
								const map=(_status.connectMode?lib.playerOL:game.playerMap);
								let str=`你本回合：`;
								for(const id in storage){
									str+='<li>至'+get.translation(map[id])+'的距离+'+storage[id];
								}
								return str;
							}
						}
					},
				}
			},
			jsrgfengxiang:{
				audio:'fengxiang',
				trigger:{player:'damageEnd'},
				forced:true,
				direct:true,
				filter(event,player){
					return game.hasPlayer(current=>{
						return current.countCards('e');
					})
				},
				async content(event,trigger,player){
					const {result:{bool,targets}}=await player.chooseTarget('封乡：与一名其他角色交换装备区里的所有牌',(card,player,target)=>{
						return target.countCards('e')+player.countCards('e')>0&&player!=target;
					},true).set('ai',target=>{
						const player=get.player();
						const att=get.attitude(player,target);
						let delta=get.value(target.getCards('e'),player)-get.value(player.getCards('e'),player);
						if(att>0){
							if(delta<0) delta+=att/3;
						}
						else{
							if(delta<0) delta-=att/3;
						}
						return delta;
					});
					if(bool){
						player.logSkill('jsrgfengxiang',targets[0]);
						const num=player.countCards('e');
						await player.swapEquip(targets[0]);
						const delta=num-player.countCards('e');
						if(delta>0) player.draw(delta);
					}
				},
			},
			jsrgfuhai:{
				audio:'xinfu_fuhai',
				enable:'phaseUse',
				usable:1,
				filter(event,player){
					return game.hasPlayer(current=>{
						return current.countCards('h')&&current!=player;
					})
				},
				filterTarget(card,player,target){
					return target.countCards('h')&&target!=player;
				},
				selectTarget:-1,
				multitarget:true,
				multiline:true,
				async content(event,trigger,player){
					const targets=event.targets.sortBySeat();
					const next=player.chooseCardOL(targets,'请展示一张手牌',true).set('ai',card=>{
						return -get.value(card);
					}).set('aiCard',target=>{
						const hs=target.getCards('h');
						return {bool:true,cards:[hs.randomGet()]};
					});
					next._args.remove('glow_result');
					const {result}=await next;
					const cards=[];
					const videoId=lib.status.videoId++;
					for(let i=0;i<targets.length;i++){
						cards.push(result[i].cards[0]);
						game.log(targets[i],'展示了',result[i].cards[0]);
					}
					game.broadcastAll((targets,cards,id,player)=>{
						var dialog=ui.create.dialog(get.translation(player)+'发动了【浮海】',cards);
						dialog.videoId=id;
						const getName=(target)=>{
							if(target._tempTranslate) return target._tempTranslate;
							var name=target.name;
							if(lib.translate[name+'_ab']) return lib.translate[name+'_ab'];
							return get.translation(name);
						}
						for(let i=0;i<targets.length;i++){
							dialog.buttons[i].querySelector('.info').innerHTML=getName(targets[i])+'|'+get.strNumber(cards[i].number);
						}
					},targets,cards,videoId,player);
					await game.asyncDelay(4);
					game.broadcastAll('closeDialog',videoId);
					let clock=-1,anticlock=-1;
					for(let j=0;j<2;j++){
						let increase=-Infinity,decrease=Infinity,count=0;
						for(let i=0;i<targets.length;i++){
							const number=get.number(cards[i],false);
							let flag=false;
							if(number>increase){
								increase=number;
								flag=true;
							}
							else increase=Infinity;
							if(number<decrease){
								decrease=number;
								flag=true;
							}
							else decrease=-Infinity;
							if(flag) count++;
							else break;
						}
						targets.reverse();
						cards.reverse();
						if(j==0) anticlock=Math.max(1,count);
						else clock=Math.max(1,count);
					}
					const {result:{index}}=await player.chooseControl(`↖顺时针(${clock})`,`逆时针(${anticlock})↗`).set('prompt','请选择一个方向，摸对应数量的牌').set('ai',()=>get.event('choice')).set('choice',clock>anticlock?0:1)
					player.draw(index==0?clock:anticlock);
				},
				ai:{
					order:8,
					result:{player:1},
				}
			},
			//张嫙
			jsrgtongli:{
				audio:'tongli',
				trigger:{player:'useCardToPlayered'},
				filter(event,player){
					if(!event.isFirstTarget) return false;
					const type=get.type(event.card);
					if(type!='basic'&&type!='trick') return false;
					const hs=player.getCards('h');
					if(!hs.length) return false;
					const evt=event.getParent('phaseUse');
					if(!evt||evt.player!=player) return false;
					const num1=player.getHistory('useCard',evtx=>{
						return evtx.getParent('phaseUse')==evt;
					}).length;
					if(hs.length<num1) return false;
					const list=[];
					for(const i of hs) list.add(get.suit(i,player));
					return list.length==num1;
				},
				prompt2(event,player){
					let str='展示所有手牌，额外结算一次'
					if(event.card.name=='sha'&&game.hasNature(event.card)) str+=get.translation(event.card.nature);
					return (str+'【'+get.translation(event.card.name)+'】');
				},
				check(event,player){
					return !get.tag(event.card,'norepeat')
				},
				async content(event,trigger,player){
					await player.showHandcards();
					trigger.getParent().effectCount++;
				},
			},
			jsrgshezang:{
				audio:'shezang',
				round:1,
				trigger:{global:'dying'},
				frequent:true,
				filter(event,player){
					return event.player==player||player==_status.currentPhase;
				},
				async content(event,trigger,player){
					const cards=get.cards(4);
					game.cardsGotoOrdering(cards);
					const videoId=lib.status.videoId++;
					game.broadcastAll((player,id,cards)=>{
						let str='奢葬';
						if(player==game.me&&!_status.auto){
							str+='：获得任意张花色各不相同的牌';
						}
						const dialog=ui.create.dialog(str,cards);
						dialog.videoId=id;
					},player,videoId,cards);
					const time=get.utc();
					game.addVideo('showCards',player,['奢葬',get.cardsInfo(event.cards)]);
					game.addVideo('delay',null,2);
					const list=[];
					for(const i of cards) list.add(get.suit(i,false));
					const next=player.chooseButton([1,list.length]);
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
					const {result}=await next;
					if(result.bool&&result.links){
						const time2=1000-(get.utc()-time);
						if(time2>0){
							await game.asyncDelay(0,time2);
						}
						game.broadcastAll('closeDialog',videoId);
						player.gain(result.links,'gain2');
					}
				},
			},
			jsrgchiying:{
				audio:'dcchiying',
				enable:'phaseUse',
				usable:1,
				filterTarget:true,
				async content(event,trigger,player){
					const target=event.target;
					const targets=game.filterPlayer(current=>target.inRange(current)&&current!=player).sortBySeat(player);
					if(!targets.length) return;
					while(targets.length){
						const current=targets.shift();
						if(current.countCards('he')) await current.chooseToDiscard('驰应：请弃置一张牌','he',true);
					}
					let cards=[];
					game.getGlobalHistory('cardMove',evt=>{
						if(evt.getParent(3)==event){
							cards.addArray(evt.cards.filter(card=>get.type(card)=='basic'));
						}
					});
					if(cards.length<=target.getHp()){
						cards=cards.filterInD('d');
						if(cards.length) target.gain(cards,'gain2');
					}
				},
				ai:{
					order:6,
					result:{
						target(player,target){
							const targets=game.filterPlayer(current=>target.inRange(current)&&current!=player);
							let eff=0;
							for(const targetx of targets){
								let effx=get.effect(targetx,{name:'guohe_copy2'},player,target);
								if(get.attitude(player,targetx)<0) effx/=2;
								eff+=effx;
							}
							return eff*(get.attitude(player,target)<=0?0.75:1);
						}
					}
				}
			},
			//郭照
			jsrgpianchong:{
				audio:'pianchong',
				trigger:{global:'phaseJieshuBegin'},
				filter(event,player){
					return player.getHistory('lose').length;
				},
				frequent:true,
				async content(event,trigger,player){
					const {result} = await player.judge();
					let num = 0;
					game.getGlobalHistory('cardMove',evt=>{
						if(evt.name!='cardsDiscard'){
							if(evt.name!='lose'||evt.position!=ui.discardPile) return false;
						}
						num += (evt.cards.filter(i=>get.color(i,false) == result.color).length);
					});
					if (num > 0) player.draw(num);
				},
			},
			jsrgzunwei:{
				audio:'zunwei',
				enable:'phaseUse',
				usable:1,
				filter(event,player){
					const storage=player.getStorage('jsrgzunwei');
					return storage.length<3&&game.hasPlayer(current=>{
						return player.isDamaged()&&current.getHp()>player.getHp()&&!storage.includes(2)||
							current.countCards('h')>player.countCards('h')&&!storage.includes(0)||
							current.countCards('e')>player.countCards('e')&&!storage.includes(1);
					});
				},
				chooseButton:{
					dialog(event,player){
						const list=[
							'选择手牌数大于你的一名角色',
							'选择装备数大于你的一名角色',
							'选择体力值大于你的一名角色',
						];
						const choiceList=ui.create.dialog('尊位：请选择一项','forcebutton','hidden');
						choiceList.add([list.map((item,i)=>{
							if(player.getStorage('jsrgzunwei').includes(i)) item=`<span style="text-decoration: line-through;">${item}</span>`;
							return [i,item];
						}),'textbutton'])
						return choiceList;
					},
					filter(button){
						const player=get.player();
						if(player.getStorage('jsrgzunwei').includes(button.link)) return false;
						if(button.link==2){
							if(!player.isDamaged()) return false;
							return game.hasPlayer(current=>{
								return current.getHp()>player.getHp();
							});
						}
						if(button.link==0){
							return game.hasPlayer(current=>{
								return current.countCards('h')>player.countCards('h');
							});
						}
						if(button.link==1){
							return game.hasPlayer(current=>{
								return current.countCards('e')>player.countCards('e');
							});
						}
					},
					backup(links){
						const next=get.copy(lib.skill.jsrgzunwei.backups[links[0]]);
						next.audio='zunwei';
						next.filterCard=function(){return false};
						next.selectCard=-1;
						return next;
					},
					check(button){
						const player=get.player();
						switch(button.link){
							case 2:{
								const target=game.findPlayer(function(current){
									return current.isMaxHp();
								});
								return (Math.min(target.hp,player.maxHp)-player.hp)*2;
							}
							case 0:{
								const target=game.findPlayer(function(current){
									return current.isMaxHandcard();
								});
								return Math.min(5,target.countCards('h')-player.countCards('h'))*0.8;
							}
							case 1:{
								const target=game.findPlayer(function(current){
									return current.isMaxEquip();
								});
								return (target.countCards('e')-player.countCards('e'))*1.4;
							}
						}
					},
					prompt(links){
						return [
							'选择一名手牌数大于你的其他角色，将手牌数摸至与其相同（至多摸五张）',
							'选择一名装备区内牌数大于你的其他角色，将其装备区里的牌移至你的装备区，直到你装备数不小于其',
							'选择一名体力值大于你的其他角色，将体力值回复至与其相同',
						][links[0]];
					},
				},
				backups:[
				{
					filterTarget(card,player,target){
						return target.countCards('h')>player.countCards('h');
					},
					async content(event,trigger,player){
						player.draw(Math.min(5,event.target.countCards('h')-player.countCards('h')));
						if(!player.storage.jsrgzunwei) player.storage.jsrgzunwei=[];
						player.storage.jsrgzunwei.add(0);
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
					filterTarget(card,player,target){
						return target.countCards('e')>player.countCards('e');
					},
					async content(event,trigger,player){
						if(!player.storage.jsrgzunwei) player.storage.jsrgzunwei=[];
						player.storage.jsrgzunwei.add(1);
						const target=event.target;
						do{
							if(!target.countCards('e',card=>{
								return player.canEquip(card);
							})) break;
							const {result:{bool,links}}=await player.chooseButton([
								`尊位：将${get.translation(target)}的一张装备牌移至你的区域内`,
								target.getCards('e')
							],true).set('filterButton',button=>{
								return get.player().canEquip(button.link);
							}).set('ai',get.buttonValue);
							if(bool){
								target.$give(links[0],player,false);
								await player.equip(links[0]);
							}
						}
						while(player.countCards('e')<target.countCards('e'));
					},
					ai:{
						order:10,
						result:{
							player(player,target){
								return (target.countCards('e')-player.countCards('e'));
							},
						},
					},
				},
				{
					filterTarget(card,player,target){
						if(player.isHealthy()) return false;
						return target.hp>player.hp;
					},
					async content(event,trigger,player){
						player.recover(event.target.hp-player.hp);
						if(!player.storage.jsrgzunwei) player.storage.jsrgzunwei=[];
						player.storage.jsrgzunwei.add(2);
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
				],
				ai:{
					order:10,
					result:{
						player:1,
					},
				},
				subSkill:{
					backup:{},
				}
			},
			//江山如故·转
			//404郭嘉
			jsrgqingzi:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				filter:function(event,player){
					return game.hasPlayer(current=>{
						if(current==player) return false;
						return current.hasCard(card=>{
							return lib.filter.canBeDiscarded(card,player,current);
						},'e');
					})
				},
				derivation:'xinshensu',
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('jsrgqingzi'),'弃置任意名其他角色装备区里的一张牌，然后令这些角色获得〖神速〗直到你的下回合开始',[1,Infinity],(card,player,target)=>{
						return target!=player&&target.hasCard(card=>{
							return lib.filter.canBeDiscarded(card,player,target);
						},'e');
					}).set('ai',target=>{
						var player=_status.event.player;
						return target.hasCard(card=>{
							return lib.filter.canBeDiscarded(card,player,target)&&get.value(card,target)>3||target.hp==1&&get.value(card,target)>0;
						});
					});
					'step 1'
					if(result.bool){
						var targets=result.targets.slice();
						targets.sortBySeat();
						event.targets=targets;
						event.num=0;
						player.logSkill('jsrgqingzi',targets);
						player.addSkill('jsrgqingzi_clear');
					}
					else event.finish();
					'step 2'
					var target=targets[num];
					if(target.hasCard(card=>{
						return lib.filter.canBeDiscarded(card,player,target);
					},'e')){
						player.discardPlayerCard(target,'e',true);
						target.addAdditionalSkills('jsrgqingzi_'+player.playerid,'xinshensu');
						player.markAuto('jsrgqingzi_clear',[target]);
					}
					event.num++;
					if(event.num<targets.length) event.redo();
				},
				subSkill:{
					clear:{
						audio:'jsrgqingzi',
						charlotte:true,
						trigger:{
							global:'die',
							player:'phaseBegin',
						},
						forced:true,
						popup:false,
						forceDie:true,
						onremove:true,
						filter:function(event,player){
							if(event.name=='die'){
								return player==event.player||player.getStorage('jsrgqingzi_clear').includes(event.player);
							}
							return player.getStorage('jsrgqingzi_clear').length>0;
						},
						content:function(){
							'step 0'
							var targets=player.getStorage('jsrgqingzi_clear');
							if(trigger.name=='die'&&player==trigger.player){
								for(var target of targets){
									target.removeAdditionalSkill(`jsrgqingzi_${player.playerid}`);
								}
								player.removeSkill('jsrgqingzi_clear');
								event.finish();
								return;
							}
							if(trigger.name=='phase') event.targets=targets.slice(0).sortBySeat();
							else event.targets=[trigger.player];
							'step 1'
							var target=targets.shift();
							var storage=player.getStorage('jsrgqingzi_clear');
							if(storage.includes(target)){
								storage.remove(target);
								target.removeAdditionalSkill(`jsrgqingzi_${player.playerid}`);
							}
							if(targets.length>0){
								event.redo();
							}
							else if(!storage.length){
								player.removeSkill('jsrgqingzi_clear');
							}
						},
					},
				},
			},
			jsrgdingce:{
				audio:2,
				trigger:{player:'damageEnd'},
				filter:function(event,player){
					if(!event.source||!event.source.isIn()) return false;
					return player.hasCard(card=>{
						return lib.filter.cardDiscardable(card,player,'jsrgdingce');
					});
				},
				direct:true,
				content:function(){
					'step 0'
					var target=trigger.source;
					event.target=target;
					player.chooseToDiscard(get.prompt('jsrgdingce',target),'弃置你与其的各一张手牌。若这两张牌颜色相同，你视为使用一张【洞烛先机】。').set('ai',card=>{
						if(_status.event.goon) return 6-get.value(card);
						return 0;
					}).set('goon',get.attitude(player,target)<0||player.getCards('h').concat(target.getCards('h')).filter(card=>{
						return get.value(card)<5.5;
					}).length>=2).set('logSkill',['jsrgdingce',target]);
					'step 1'
					if(result.bool){
						event.card=result.cards[0];
						if(target.countDiscardableCards(player,'h')){
							var next=player.discardPlayerCard(target,'h',true);
							if(target==player) next.set('ai',button=>{
								var card=button.link;
								return (get.color(card,false)==_status.event.color?7.5:5)-get.value(card);
							}).set('color',get.color(event.card,false));
						}
						else event.finish();
					}
					else event.finish();
					'step 2'
					if(result.bool){
						var card=result.cards[0];
						if(get.color(event.card,false)==get.color(card,false)){
							game.delayex();
							player.chooseUseTarget('dongzhuxianji',true);
						}
					}
				},
			},
			jsrgzhenfeng:{
				audio:2,
				enable:'phaseUse',
				locked:false,
				filter:function(event,player){
					if(!event.jsrgzhenfeng) return false;
					return event.jsrgzhenfeng.some(info=>event.filterCard({
						name:info[2],
						nature:info[3],
						storage:{jsrgzhenfeng:true},
						isCard:true,
					},player,event));
				},
				onChooseToUse:function(event){
					if(!event.jsrgzhenfeng&&!game.online){
						var str='';
						game.countPlayer(current=>{
							current.getSkills(null,false,false).forEach(skill=>{
								var info=get.info(skill);
								if(!info||info.charlotte) return;
								var translation=get.skillInfoTranslation(skill,current);
								str+=translation;
							});
						});
						event.set('jsrgzhenfeng',lib.skill.jsrgzhenfeng.getInclusion(str,null,event.player));
					}
				},
				getInclusion:function(str,checkCard,player){
					let list=[];
					const names=Object.keys(lib.card);
					for(const name of names){
						let type=get.type(name);
						if(!['basic','trick'].includes(type)) continue;
						if(player&&player.getStorage('jsrgzhenfeng_effect').includes(type)) continue;
						const reg=`【${get.translation(name)}】`;
						if(name=='sha'){
							if(str.includes(reg)){
								if(checkCard&&checkCard.name==name) return true;
								list.push([type,'',name]);
							}
							for(let nature of lib.inpile_nature){
								const reg1=`【${get.translation(nature)+get.translation(name)}】`,reg2=`${get.translation(nature)}【${get.translation(name)}】`;
								if(str.includes(reg1)||str.includes(reg2)){
									if(checkCard&&checkCard.name==name&&checkCard.nature==nature) return true;
									list.push([type,'',name,nature]);
								}
							}
						}
						else{
							if(!str.includes(reg)) continue;
							if(checkCard&&checkCard.name==name) return true;
							list.push([type,'',name]);
						}
					}
					if(checkCard) return false;
					return list;
				},
				chooseButton:{
					dialog:function(event,player){
						var list=event.jsrgzhenfeng.filter(info=>{
							return event.filterCard({
								name:info[2],
								nature:info[3],
								storage:{jsrgzhenfeng:true},
								isCard:true,
							},player,event);
						});
						return ui.create.dialog('针锋',[list,'vcard']);
					},
					filter:function(button,player){
						return _status.event.getParent().filterCard({
							name:button.link[2],
							nature:button.link[3],
							storage:{jsrgzhenfeng:true},
							isCard:true,
						},player,_status.event.getParent());
					},
					check:function(button){
						var player=_status.event.player;
						var card={
							name:button.link[2],
							nature:button.link[3],
							storage:{jsrgzhenfeng:true},
							isCard:true,
						};
						var eff=player.getUseValue(card);
						if(['wugu','zhulu_card','yiyi','lulitongxin','lianjunshengyan','diaohulishan'].includes(button.link[2])) eff/=5;
						var info=get.info(card);
						if(info.toself){
							var str=player.getSkills(null,false,false).map(skill=>{
								var info=get.info(skill);
								if(!info||info.charlotte) return;
								return get.skillInfoTranslation(skill,player);
							}).join('\n');
							if(lib.skill.jsrgzhenfeng.getInclusion(str,card)) eff+=get.damageEffect(player,player,player);
						}
						return eff;
					},
					backup:function(links,player){
						return {
							audio:'jsrgzhenfeng',
							filterCard:()=>false,
							selectCard:-1,
							popname:true,
							viewAs:{
								name:links[0][2],
								nature:links[0][3],
								storage:{jsrgzhenfeng:true},
								isCard:true,
							},
							precontent:function(){
								delete event.result.skill;
								player.logSkill('jsrgzhenfeng');
								event.getParent().addCount=false;
								player.addTempSkill('jsrgzhenfeng_effect','phaseUseAfter');
								player.markAuto('jsrgzhenfeng_effect',[get.type(event.result.card)]);
							},
						}
					},
					prompt:function(links,player){
						return '视为使用一张'+(get.translation(links[0][3])||'')+get.translation(links[0][2]);
					}
				},
				mod:{
					cardUsable:function(card){
						if(card.storage&&card.storage.jsrgzhenfeng) return Infinity;
					},
					targetInRange:function(card){
						if(card.storage&&card.storage.jsrgzhenfeng) return true;
					},
				},
				ai:{
					order:1,
					result:{
						player:1,
					},
				},
				subSkill:{
					effect:{
						audio:'jsrgzhenfeng',
						trigger:{
							global:'useCardToBegin',
						},
						charlotte:true,
						forced:true,
						onremove:true,
						filter:function(event,player){
							if(!event.card.storage||!event.card.storage.jsrgzhenfeng) return false;
							// debugger
							var str=event.target.getSkills(null,false,false).map(skill=>{
								var info=get.info(skill);
								if(!info||info.charlotte) return;
								return get.skillInfoTranslation(skill,event.target);
							}).join('\n');
							return lib.skill.jsrgzhenfeng.getInclusion(str,event.card);
						},
						logTarget:'target',
						content:function(){
							trigger.target.damage();
						}
					},
				},
			},
			//张飞
			jsrgbaohe:{
				audio:2,
				trigger:{global:'phaseUseEnd'},
				filter:function(event,player){
					return player.countCards('he')>=2&&game.hasPlayer(current=>{
						return current.inRange(event.player)&&player.canUse('sha',current,false);
					});
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseToDiscard(get.prompt2('jsrgbaohe'),2,'he').set('ai',card=>{
						var val=_status.event.val;
						if(val>20) return 6-get.value(card);
						if(val>0) return 4-get.value(card);
						return 0;
					}).set('val',game.filterPlayer(current=>{
						return current.inRange(trigger.player)&&player.canUse('sha',current,false);
					}).map(i=>get.effect(i,{name:'sha'},player,player)).reduce((p,c)=>{
						return p+c;
					},0)).set('logSkill','jsrgbaohe');
					'step 1'
					if(result.bool){
						var targets=game.filterPlayer(current=>{
							return current.inRange(trigger.player)&&player.canUse('sha',current,false);
						});
						if(targets.length){
							game.delayex();
							player.useCard({name:'sha',isCard:true,storage:{jsrgbaohe:true}},targets,false);
							player.addTempSkill('jsrgbaohe_add');
						}
					}
				},
				subSkill:{
					add:{
						audio:'jsrgbaohe',
						trigger:{
							global:'useCard',
						},
						charlotte:true,
						forced:true,
						filter:function(event,player){
							let evt=event.getParent(3),respondTo=event.respondTo;
							if(evt.name!='useCard'||!Array.isArray(respondTo)||!respondTo[1].storage||!respondTo[1].storage.jsrgbaohe) return false;
							return evt.targets.length>evt.num+1;
						},
						logTarget:function(event){
							let evt=event.getParent(3);
							return evt.targets.slice(evt.num+1);
						},
						content:function(){
							'step 0'
							var evt=trigger.getParent(3);
							var targets=evt.targets.slice(evt.num+1);
							var map=evt.customArgs;
							for(var target of targets){
								var id=target.playerid;
								if(!map[id]) map[id]={};
								if(typeof map[id].extraDamage!='number'){
									map[id].extraDamage=0;
								}
								map[id].extraDamage++;
							}
							game.delayx();
						},
					}
				},
			},
			jsrgxushi:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterCard:true,
				filterTarget:lib.filter.notMe,
				selectCard:[1,Infinity],
				selectTarget:[1,Infinity],
				position:'he',
				filterOk:function(){
					return ui.selected.cards.length==ui.selected.targets.length;
				},
				check:function(card){
					var player=get.player();
					if(ui.selected.cards.length>=game.countPlayer(current=>{
						return current!=player&&get.attitude(player,current)>0;
					})) return 0;
					return 5-get.value(card);
				},
				prompt:'按顺序选择卡牌和角色，并将卡牌交给对应顺序的角色。然后你获得两倍数量的【影】。',
				complexSelect:true,
				multitarget:true,
				multiline:true,
				discard:false,
				lose:false,
				delay:false,
				contentBefore:function(){
					event.getParent()._jsrgxushi_targets=targets.slice();
				},
				content:function(){
					'step 0'
					var targets=event.getParent()._jsrgxushi_targets;
					var list=[];
					for(var i=0;i<targets.length;i++){
						var target=targets[i];
						var card=cards[i];
						list.push([target,card]);
						player.line(target);
					}
					game.loseAsync({
						gain_list:list,
						player:player,
						cards:cards,
						giver:player,
						animate:'giveAuto',
					}).setContent('gaincardMultiple');
					'step 1'
					player.gain(lib.card.ying.getYing(2*cards.length),'gain2');
				},
				ai:{
					order:2.5,
					result:{
						target:function(player,target){
							var card=ui.selected.cards[ui.selected.targets.length];
							if(!card) return 0;
							if(get.value(card)<0) return -1;
							if(get.value(card)<1.5&&player.hasSkill('jsrgbaohe')) return (get.sgnAttitude(player,target)+0.01)/5;
							return Math.sqrt(5-Math.min(4,target.countCards('h')));
						},
					}
				},
			},
			jsrgzhuiming:{
				audio:2,
				trigger:{
					player:'useCardToPlayered',
				},
				filter:function(event,player){
					if(event.card.name!='sha') return false;
					return event.isFirstTarget&&event.targets.length==1&&event.target.isIn();
				},
				direct:true,
				content:function*(event,map){
					var player=map.player,trigger=map.trigger,target=trigger.target;
					var colors=Object.keys(lib.color).remove('none');
					var result=yield player.chooseControl(colors,'cancel2').set('prompt',get.prompt('jsrgzhuiming')).set('prompt2',`声明一种颜色并令${get.translation(trigger.target)}弃置任意张牌`).set('ai',()=>{
						var player=get.player(),target=get.event('target'),att=get.attitude(player,target)>0?1:-1;
						var list=get.event('controls').map(i=>[i,target.getCards('he').map(get.value).reduce((p,c)=>p+c,0)]).sort((a,b)=>{
							return att*(a[1]-b[1]);
						});
						return list[0][0];
					}).set('target',target);
					var color=result.control;
					if(color=='cancel2'){
						event.finish();
						return;
					}
					player.logSkill('jsrgzhuiming',target);
					player.popup(color,color=='red'?'fire':'thunder');
					game.log(player,'声明了',color);
					var prompt=`追命：${get.translation(player)}声明了${get.translation(color)}`,prompt2=`请弃置任意张牌，然后其展示你一张牌，若此牌颜色为${get.translation(color)}，此【杀】不计入次数限制、不可被响应且伤害+1`
					yield target.chooseToDiscard(prompt,prompt2,[1,Infinity],'he',true).set('ai',card=>{
						var color=get.event('color'),player=get.player();
						if(get.position(card)=='e'&&get.color(card)==color) return 2;
						if(player.getHp()<=2&&get.color(card)==color) return Math.random()<0.5;
						return 0;
					}).set('color',color);
					if(target.countCards('he')) result=yield player.choosePlayerCard(target,'he',true).set('ai',button=>{
						var color=get.event('color'),att=get.event('att');
						if(get.position(button.link)=='e'&&get.color(button.link)==color){
							return 100*att;
						}
						return 1+Math.random();
					}).set('color',color).set('att',get.attitude(player,target)>0?1:-1);
					else{
						event.finish();
						return;
					}
					var card=result.cards[0];
					player.showCards(card,`${get.translation(target)}因【追命】被展示`);
					if(get.color(card)==color){
						trigger.directHit.addArray(game.players);
						var evt=trigger.getParent();
						if(evt.addCount!==false){
							evt.addCount=false;
							player.getStat().card.sha--;
						}
						var map=trigger.getParent().customArgs;
						var id=target.playerid;
						if(!map[id]) map[id]={};
						if(typeof map[id].extraDamage!='number'){
							map[id].extraDamage=0;
						}
						map[id].extraDamage++;
						game.log(trigger.card,'不计入次数限制、不可被响应、伤害+1');
					}
				}
			},
			//娄圭
			jsrgshacheng:{
				audio:2,
				trigger:{global:'useCardAfter'},
				filter:function(event,player){
					if(event.card.name!='sha') return false;
					return event.targets.some(i=>i.isIn()&&i.hasHistory('lose',evt=>evt.cards2.length))&&player.getExpansions('jsrgshacheng').length;
				},
				direct:true,
				group:'jsrgshacheng_build',
				content:function(){
					'step 0'
					if(_status.connectMode) game.broadcastAll(function(){_status.noclearcountdown=true});
					var targets=trigger.targets.filter(i=>i.isIn()&&i.hasHistory('lose',evt=>evt.cards2.length));
					player.chooseTarget(get.prompt('jsrgshacheng'),'令一名目标角色摸X张牌，然后移去一张“城”（X为对应角色本回合失去过的牌数且至多为5）',(card,player,target)=>{
						return get.event('targets').includes(target);
					}).set('targets',targets).set('ai',target=>{
						return target==get.event('targetx')?1:0;
					}).set('targetx',(()=>{
						let info=[];
						targets.filter(target=>{
							let att=get.attitude(player,target);
							if(att<=0) return false;
							if(Math.abs(att)>1) att=Math.sign(att)*Math.sqrt(Math.abs(att));
							info.push([target,att*target.getHistory('lose').map(evt=>evt.cards2.length).reduce((p,c)=>p+c,0)]);
							return false;
						});
						if(!info.length) return null;
						info=info.sort((a,b)=>{
							return b[1]-a[1];
						})[0];
						if(info[1]<=0) return null;
						return info[0];
					})());
					'step 1'
					if(result.bool){
						event.target=result.targets[0];
						var cards=player.getExpansions('jsrgshacheng');
						if(cards.length==1) event._result={bool:true,links:cards};
						else player.chooseButton([`沙城：移去一张“城”`,cards],true);
					}
					else{
						if(_status.connectMode){game.broadcastAll(function(){delete _status.noclearcountdown;game.stopCountChoose()});}
						event.finish();
					}
					'step 2'
					if(_status.connectMode){game.broadcastAll(function(){delete _status.noclearcountdown;game.stopCountChoose()});}
					if(result.bool){
						player.logSkill('jsrgshacheng',target);
						player.loseToDiscardpile(result.links);
						target.draw(Math.min(5,target.getHistory('lose').map(evt=>evt.cards2.length).reduce((p,c)=>p+c,0)));
					}
				},
				marktext:'城',
				intro:{
					content:'expansion',
					markcount:'expansion',
				},
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				subSkill:{
					build:{
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
							var cards=get.cards(2);
							player.addToExpansion(cards,'gain2').gaintag.add('jsrgshacheng');
						},
					}
				}
			},
			jsrgninghan:{
				audio:2,
				init:(player)=>{
					game.addGlobalSkill('jsrgninghan_frozen');
				},
				onremove:(player)=>{
					if(!game.hasPlayer(current=>current.hasSkill('jsrgninghan'),true)) game.removeGlobalSkill('jsrgninghan_frozen');
				},
				trigger:{global:'damageEnd'},
				filter:function(event,player){
					if(!event.hasNature('ice')) return false;
					return event.cards&&event.cards.filterInD().length;
				},
				forced:true,
				content:function(){
					var cards=trigger.cards.filterInD();
					player.addToExpansion(cards,'gain2').gaintag.add('jsrgshacheng');
				},
				subSkill:{
					frozen:{
						mod:{
							cardnature:function(card,player){
								if(card.name==='sha'&&get.suit(card)==='club') return 'ice';
							},
							aiOrder:(player,card,num)=>{
								if(num&&card.name==='sha'&&game.hasNature(card,'ice')){
									let lg=game.findPlayer(current=>current.hasSkill('jsrgninghan'));
									if(lg) return num+0.15*Math.sign(get.attitude(player,lg));
								}
							}
						},
						trigger:{player:'dieAfter'},
						filter:(event,player)=>{
							return !game.hasPlayer(current=>!current.hasSkill('jsrgninghan'),true);
						},
						silent:true,
						forceDie:true,
						content:()=>{
							game.removeGlobalSkill('jsrgninghan_frozen');
						}
					},
				},
				ai:{
					combo:'jsrgshacheng'
				}
			},
			//张任
			jsrgfuni:{
				audio:2,
				trigger:{global:'roundStart'},
				group:['jsrgfuni_unlimit','jsrgfuni_zero'],
				forced:true,
				direct:true,
				content:function*(event,map){
					var player=map.player,trigger=map.trigger;
					var count=Math.ceil(game.countPlayer()/2);
					var result=yield player.chooseTarget(`伏匿：请选择至多${get.cnNumber(count)}名角色`,`令这些角色获得共计${get.cnNumber(count)}张【影】`,true,[1,count]).set('ai',target=>{
						return get.attitude(get.player(),target)+get.event().getRand(target.playerid);
					});
					if(result.bool){
						var targets=result.targets.slice().sortBySeat(_status.currentPhase);
						player.logSkill('jsrgfuni',targets);
					}
					else event.finish();
					yield null;
					var num=count/targets.length;
					if(num==1||num==count){
						result={
							bool:true,
							links:targets.map(current=>{
								return `${num}|${current.playerid}`;
							}),
						};
					}
					else{
						var dialog=[
							'伏匿：选择每名角色要获得的【影】数',
						];
						var len=count-targets.length+1;
						for(var target of targets){
							dialog.addArray([
								`<div class="text center">${get.translation(target)}</div>`,
								[Array.from({length:len}).map((_,i)=>{
									return [`${i+1}|${target.playerid}`,get.cnNumber(i+1,true)];
								}),'tdnodes'],
							]);
						}
						result=yield player.chooseButton(dialog,true).set('filterButton',button=>{
							var total=0,info=button.link.split('|');
							var numFix=0;
							for(var buttonx of ui.selected.buttons){
								var infox=buttonx.link.split('|');
								var num=parseInt(infox[0]);
								total+=num;
								if(infox[1]==info[1]) numFix=num;
							}
							return total+parseInt(info[0])-numFix<=get.event('count');
						}).set('count',count).set('filterOk',()=>{
							var total=0;
							for(var buttonx of ui.selected.buttons){
								total+=parseInt(buttonx.link.split('|')[0]);
							}
							return total==get.event('count');
						}).set('selectButton',()=>{
							return [get.event('len'),Math.max(get.event('len'),ui.selected.buttons.length)+1];
						}).set('len',targets.length).set('custom',{
							add:{},
							replace:{
								button:function(button){
									if(!_status.event.isMine()) return;
									if(button.classList.contains('selectable')==false) return;
									if(button.classList.contains('selected')){
										ui.selected.buttons.remove(button);
										button.classList.remove('selected');
										if(_status.multitarget||_status.event.complexSelect){
											game.uncheck();
											game.check();
										}
									}
									else{
										var current=button.parentNode.querySelector('.selected');
										if(current){
											ui.selected.buttons.remove(current);
											current.classList.remove('selected');
										}
										button.classList.add('selected');
										ui.selected.buttons.add(button);
									}
									game.check();
								},
							}
						}).set('processAI',()=>{
							return get.event('aiResult');
						}).set('aiResult',(()=>{
							var result=targets.map(i=>{
								return [i==player?2:1,i.playerid];
							});
							var rest=count-targets.length-1;
							while(rest--) result[Math.floor(Math.random()*result.length)][0]++;
							return {
								bool:true,
								links:result.map(i=>`${i[0]}|${i[1]}`),
							};
						})());
					}
					if(result.bool){
						var links=result.links;
						var list=[];
						for(var link of links){
							var info=link.split('|');
							var id=info[1];
							var target=(_status.connectMode?lib.playerOL:game.playerMap)[id];
							player.line(target);
							var yings=lib.card.ying.getYing(parseInt(info[0]));
							list.push([target,yings]);
							game.log(target,'获得了',yings);
						}
						game.loseAsync({
							gain_list:list,
							animate:'gain2',
						}).setContent('gaincardMultiple');
					}
				},
				subSkill:{
					zero:{
						priority:Infinity,
						mod:{
							attackRange:()=>0,
						},
					},
					unlimit:{
						audio:'jsrgfuni',
						trigger:{
							global:['loseAfter','loseAsyncAfter','cardsDiscardAfter'],
						},
						filter:function(event,player){
							return event.getd().some(i=>get.name(i,false)=='ying');
						},
						forced:true,
						content:function(){
							player.addTempSkill('jsrgfuni_buff');
						},
					},
					buff:{
						charlotte:true,
						trigger:{player:'useCard1'},
						forced:true,
						popup:false,
						content:function(){
							trigger.directHit.addArray(game.players);
							game.log(trigger.card,'不可被响应');
						},
						mark:true,
						intro:{
							content:'使用牌无距离限制且不能被响应',
						},
						mod:{
							targetInRange:()=>true,
						},
					},
				},
				ai:{
					expose:0.15,
				},
			},
			jsrgchuanxin:{
				audio:2,
				trigger:{global:'phaseJieshuBegin'},
				filter:function(event,player){
					return player.countCards('hes')&&game.hasPlayer(current=>player.canUse({
						name:'sha',
						storage:{jsrgchuanxin:true},
					},current));
				},
				direct:true,
				content:function(){
					var next=player.chooseToUse();
					next.set('openskilldialog',`###${get.prompt('jsrgchuanxin')}###将一张牌当【杀】使用，且当一名角色受到此【杀】伤害时，此伤害+X（X为其本回合回复过的体力值）。`);
					next.set('norestore',true);
					next.set('_backupevent','jsrgchuanxin_backup');
					next.set('addCount',false);
					next.set('logSkill','jsrgchuanxin');
					next.set('custom',{
						add:{},
						replace:{window:function(){}}
					});
					next.backup('jsrgchuanxin_backup');
				},
				subSkill:{
					backup:{
						filterCard:function(card){
							return get.itemtype(card)=='card';
						},
						viewAs:{
							name:'sha',
							storage:{jsrgchuanxin:true},
						},
						selectCard:1,
						position:'hes',
						ai1:function(card){
							var player=get.player();
							var maxVal=5.5;
							if(get.name(card,false)=='ying'&&player.hasSkill('jsrgchuanxin')) maxVal-=3;
							return maxVal-get.value(card);
						},
						precontent:function(){
							delete event.result.skill;
							player.addTempSkill('jsrgchuanxin_add');
						},
					},
					add:{
						trigger:{global:'damageBegin3'},
						filter:function(event,player){
							if(!event.card||!event.card.storage||!event.card.storage.jsrgchuanxin) return false;
							if(event.getParent().type!='card') return false;
							return game.hasGlobalHistory('changeHp',evt=>{
								return evt.getParent().name=='recover'&&evt.player==event.player;
							});
						},
						forced:true,
						charlotte:true,
						content:function(){
							var num=game.getGlobalHistory('changeHp',evt=>{
								return evt.getParent().name=='recover'&&evt.player==trigger.player;
							}).map(evt=>evt.num).reduce((p,c)=>p+c,0);
							trigger.num+=num;
							game.log(trigger.card,'的伤害+'+num);
						},
					},
				},
			},
			//黄忠
			jsrgcuifeng:{
				audio:2,
				enable:'phaseUse',
				limited:true,
				skillAnimation:true,
				animationColor:'orange',
				locked:false,
				chooseButton:{
					dialog:function(event,player){
						var list=[];
						for(var name of lib.inpile){
							var info=lib.card[name];
							if(!info||info.notarget||(info.selectTarget&&info.selectTarget!=1)||!get.tag({name:name},'damage')) continue;
							if(name=='sha'){
								list.push(['基本','','sha']);
								for(var nature of lib.inpile_nature) list.push(['基本','',name,nature]);
							}
							else if(get.type(name)=='trick') list.push(['锦囊','',name]);
							else if(get.type(name)=='basic') list.push(['基本','',name]);
						}
						return ui.create.dialog('摧锋',[list,'vcard']);
					},
					filter:function(button,player){
						return _status.event.getParent().filterCard({name:button.link[2],nature:button.link[3],isCard:true,storage:{jsrgcuifeng:true},},player,_status.event.getParent());
					},
					check:function(button){
						var player=_status.event.player;
						var effect=player.getUseValue({name:button.link[2],nature:button.link[3],storage:{jsrgcuifeng:true}});
						if(effect>0) return effect;
						return 0;
					},
					backup:function(links,player){
						return {
							audio:'jsrgcuifeng',
							selectCard:-1,
							filterCard:()=>false,
							popname:true,
							viewAs:{
								name:links[0][2],
								nature:links[0][3],
								isCard:true,
								storage:{jsrgcuifeng:true},
							},
							precontent:function(){
								player.logSkill('jsrgcuifeng');
								player.awakenSkill('jsrgcuifeng');
								delete event.result.skill;
								if(!player.storage.jsrgcuifeng_check) player.when('phaseEnd').then(()=>{
									var num=0;
									player.checkHistory('sourceDamage',evt=>{
										if(evt.card.storage.jsrgcuifeng) num+=evt.num;
									});
									if(num==0||num>1){
										player.restoreSkill('jsrgcuifeng');
										game.log(player,'重置了','#g【摧锋】');
									}
									delete player.storage.jsrgcuifeng_check;
								}).translation('摧锋');
								player.setStorage('jsrgcuifeng_check',true);
							}
						}
					},
					prompt:function(links,player){
						return '请选择'+(get.translation(links[0][3])||'')+get.translation(links[0][2])+'的目标';
					}
				},
				mod:{
					targetInRange:card=>{
						if(card.storage&&card.storage.jsrgcuifeng) return true;
					},
				},
				ai:{
					order:1.9,
					result:{
						player:1,
					},
				},
			},
			jsrgdengnan:{
				audio:2,
				enable:'phaseUse',
				limited:true,
				skillAnimation:true,
				animationColor:'orange',
				chooseButton:{
					dialog:function(event,player){
						var list=[];
						for(var name of lib.inpile){
							var info=lib.card[name];
							if(!info||info.type!='trick'||info.notarget||get.tag({name:name},'damage')) continue;
							list.push(['锦囊','',name]);
						}
						return ui.create.dialog('登难',[list,'vcard']);
					},
					filter:function(button,player){
						return _status.event.getParent().filterCard({name:button.link[2],isCard:true},player,_status.event.getParent());
					},
					check:function(button){
						var player=_status.event.player;
						return player.getUseValue(button.link[2]);
					},
					backup:function(links,player){
						return {
							audio:'jsrgdengnan',
							selectCard:-1,
							filterCard:()=>false,
							popname:true,
							viewAs:{
								name:links[0][2],
								isCard:true,
								storage:{jsrgdengnan:true},
							},
							precontent:function(){
								player.logSkill('jsrgdengnan');
								player.awakenSkill('jsrgdengnan');
								delete event.result.skill;
								if(!player.storage.jsrgdengnan_check) player.when('phaseEnd').then(()=>{
									var targets=[];
									player.checkHistory('useCard',evt=>{
										if(evt.card.storage.jsrgdengnan) targets.addArray(evt.targets);
									});
									if(targets.every(current=>{
										return current.hasHistory('damage');
									})){
										player.restoreSkill('jsrgdengnan');
										game.log(player,'重置了','#g【登难】');
									}
									delete player.storage.jsrgdengnan_check;
								}).translation('登难');
								player.setStorage('jsrgdengnan_check',true);
							}
						}
					},
					prompt:function(links,player){
						return '请选择'+(get.translation(links[0][3])||'')+get.translation(links[0][2])+'的目标';
					}
				},
				ai:{
					order:2,
					result:{
						player:1,
					},
				},
			},
			//夏侯荣
			jsrgfenjian:{
				audio:2,
				enable:'chooseToUse',
				locked:false,
				filter:function(event,player){
					return ['juedou','tao'].some(name=>{
						return !player.getStorage('jsrgfenjian_used').includes(name)&&event.filterCard({
							name:name,
							isCard:true,
							storage:{jsrgfenjian:true},
						},player,event);
					});
				},
				hiddenCard:function(player,name){
					if(['juedou','tao'].some(i=>i==name&&!player.getStorage('jsrgfenjian_used').includes(name))) return true;
					return false;
				},
				chooseButton:{
					dialog:function(event,player){
						var dialog=ui.create.dialog('奋剑',[['juedou','tao'].filter(name=>!player.getStorage('jsrgfenjian_used').includes(name)),'vcard']);
						dialog.direct=true;
						return dialog;
					},
					filter:function(button,player){
						var evt=_status.event.getParent();
						return evt.filterCard({
							name:button.link[2],
							isCard:true,
							storage:{jsrgfenjian:true},
						},player,evt);
					},
					check:function(button){
						if(button.link[2]==='tao'){
							let dying=_status.event.getParent(2).dying;
							if(dying) return get.effect(dying,{
								name:'tao',
								isCard:true,
								storage:{jsrgfenjian:true},
							},_status.event.player);
						}
						return _status.event.player.getUseValue({
							name:button.link[2],
							isCard:true,
							storage:{jsrgfenjian:true},
						});
					},
					backup:function(links){
						return {
							audio:'jsrgfenjian',
							viewAs:{
								name:links[0][2],
								isCard:true,
								storage:{jsrgfenjian:true},
							},
							filterCard:()=>false,
							selectCard:-1,
							precontent:function(){
								player.logSkill('jsrgfenjian');
								delete event.result.skill;
								player.addTempSkill('jsrgfenjian_effect');
								player.addMark('jsrgfenjian_effect',1,false);
								if(!player.storage.jsrgfenjian_used) player.when({global:'phaseAfter'}).then(()=>{
									delete player.storage.jsrgfenjian_used;
								});
								player.markAuto('jsrgfenjian_used',[event.result.card.name]);
							},
						}
					},
					prompt:function(links){
						return '奋剑：令你本回合受到的伤害+1，视为使用'+get.translation(links[0][2]);
					},
				},
				mod:{
					targetEnabled:function(card,player,target){
						if(player==target&&card.storage&&card.storage.jsrgfenjian) return false;
					},
				},
				ai:{
					order:function(item,player){
						return Math.max(get.order({name:'juedou'}),get.order({name:'tao'}))+0.2;
					},
					result:{
						player:(player)=>{
							if(_status.event.dying) return 2*get.sgnAttitude(player,_status.event.dying);
							return 1;
						}
					}
				},
				subSkill:{
					effect:{
						audio:'jsrgfenjian',
						charlotte:true,
						trigger:{player:'damageBegin3'},
						forced:true,
						onremove:true,
						content:function(){
							trigger.num+=player.countMark('jsrgfenjian_effect');
						},
						intro:{content:'本回合受到的伤害+#'},
					},
				},
			},
			//孙尚香
			jsrgguiji:{
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					if(player.hasSkill('jsrgguiji_used')) return false;
					return game.hasPlayer(current=>lib.skill.jsrgguiji.filterTarget('keiki',player,current));
				},
				filterTarget:function(card,player,target){
					return target.countCards('h')<player.countCards('h')&&target.hasSex('male');
				},
				content:function(){
					'step 0'
					player.swapHandcards(target);
					player.addSkill('jsrgguiji_swapback');
					player.markAuto('jsrgguiji_swapback',target);
					player.addTempSkill('jsrgguiji_used');
				},
				ai:{
					order:6,
					result:{
						target:function(player,target){
							var val=player.getCards('h').map(i=>get.value(i)).reduce((p,c)=>p+c,0);
							var val2=target.getCards('h').map(i=>get.value(i)).reduce((p,c)=>p+c,0);
							return val-val2;
						}
					}
				},
				subSkill:{
					used:{charlotte:true},
					swapback:{
						audio:'jsrgguiji',
						trigger:{
							global:['phaseUseEnd','dieAfter'],
						},
						filter:function(event,player){
							return player.getStorage('jsrgguiji_swapback').includes(event.player);
						},
						charlotte:true,
						direct:true,
						check:function(event,player){
							return player.getCards('h').map(i=>get.value(i)).reduce((p,c)=>p+c,0)<event.player.getCards('h').map(i=>get.value(i)).reduce((p,c)=>p+c,0)+4*Math.random();
						},
						content:function(){
							'step 0'
							if(trigger.name=='phaseUse'){
								player.chooseBool(get.prompt('jsrgguiji_swapback',trigger.player),'与其交换手牌。').set('ai',()=>{
									return get.event('bool');
								}).set('bool',lib.skill.jsrgguiji_swapback.check(trigger,player)>0);
							}
							else{
								player.unmarkAuto('jsrgguiji_swapback',[trigger.player]);
								event.finish();
							}
							'step 1'
							if(result.bool){
								player.logSkill('jsrgguiji_swapback',trigger.player);
								player.swapHandcards(trigger.player);
							}
							player.unmarkAuto('jsrgguiji_swapback',[trigger.player]);
						},
						intro:{
							content:'$的下个出牌阶段结束时，你可以与其交换手牌'
						},
					},
				},
			},
			jsrgjiaohao:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				filter:function(event,player){
					return [1,2,3,4,5].some(i=>player.countEmptySlot(i));
				},
				forced:true,
				locked:false,
				global:'jsrgjiaohao_g',
				content:function(){
					'step 0'
					var count=Math.ceil([1,2,3,4,5].map(i=>player.countEmptySlot(i)).reduce((p,c)=>p+c,0)/2);
					player.gain(lib.card.ying.getYing(count),'gain2');
				},
				subSkill:{
					g:{
						audio:'jsrgjiaohao',
						enable:'phaseUse',
						usable:1,
						filter:function(event,player){
							return game.hasPlayer(current=>{
								if(current==player||!current.hasSkill('jsrgjiaohao')) return false;
								return player.hasCard(card=>{
									return get.type(card)=='equip'&&current.canEquip(card);
								});
							});
						},
						filterTarget:function(card,player,target){
							if(target.isMin()) return false;
							return target!=player&&target.hasSkill('jsrgjiaohao')&&target.canEquip(card);
						},
						selectTarget:function(){
							var num=game.countPlayer(current=>{
								return current.hasSkill('jsrgjiaohao');
							});
							return num>1?1:-1;
						},
						filterCard:function(card){
							return get.type(card)=='equip';
						},
						check:function(card){
							var player=get.player();
							if(player.countCards('he',{subtype:get.subtype(card)})>1){
								return 11-get.equipValue(card);
							}
							return 6-get.value(card);
						},
						prompt:function(){
							var list=game.filterPlayer(current=>{
								return current.hasSkill('jsrgjiaohao');
							});
							return `将一张装备牌置于${get.translation(list)}${list.length>1?'中的一人':''}的装备区`;
						},
						discard:false,
						lose:false,
						prepare:function(cards,player,targets){
							player.$give(cards,targets[0],false);
						},
						content:function(){
							target.equip(cards[0]);
						},
						ai:{
							order:10,
							result:{
								target:function(player,target){
									var card=ui.selected.cards[0];
									if(card) return get.effect(target,card,target,target);
									return 0;
								},
							},
						},
					},
				}
			},
			//庞统
			jsrgmanjuan:{
				audio:2,
				trigger:{
					player:'loseEnd',
					global:['equipEnd','addJudgeEnd','gainEnd','loseAsyncEnd','addToExpansionEnd'],
				},
				filter:function(event,player){
					return (player.countCards('h')==0)^player.hasSkill('jsrgmanjuan_in');
				},
				forced:true,
				locked:false,
				firstDo:true,
				silent:true,
				content:function(){
					'step 0'
					if(!player.countCards('h')){
						var cards=[];
						game.checkGlobalHistory('cardMove',evt=>{
							if(evt.name=='lose'&&evt.position==ui.discardPile||evt.name=='cardsDiscard'){
								cards.addArray(evt.cards.filterInD('d'));
							}
						});
						var cardsx=cards.map(card=>{
							var cardx=ui.create.card();
							cardx.init(get.cardInfo(card));
							cardx._cardid=card.cardid;
							return cardx;
						});
						player.directgains(cardsx,null,'jsrgmanjuan');
						player.addSkill('jsrgmanjuan_in');
					}
					else{
						player.removeSkill('jsrgmanjuan_in');
					}
				},
				subSkill:{
					in:{
						audio:'jsrgmanjuan',
						trigger:{
							global:['loseAfter','loseAsyncAfter','cardsDiscardAfter','equipAfter'],
						},
						forced:true,
						locked:false,
						silent:true,
						filter:function(event,player){
							var cards=event.getd();
							return cards.length;
						},
						onremove:function(player){
							var cards2=player.getCards('s',card=>{
								return card.hasGaintag('jsrgmanjuan');
							});
							if(player.isOnline2()){
								player.send(function(cards,player){
									cards.forEach(i=>i.delete());
									if(player==game.me) ui.updatehl();
								},cards2,player);
							}
							cards2.forEach(i=>i.delete());
							if(player==game.me) ui.updatehl();
						},
						group:['jsrgmanjuan_use','jsrgmanjuan_lose'],
						content:function(){
							var cards=[];
							var idList=player.getCards('s',card=>card.hasGaintag('jsrgmanjuan')).map(i=>i._cardid);
							game.checkGlobalHistory('cardMove',evt=>{
								if(evt.name=='lose'&&evt.position==ui.discardPile||evt.name=='cardsDiscard'){
									cards.addArray(evt.cards.filter(i=>get.position(i,true)=='d'&&!idList.includes(i.cardid)));
								}
							});
							var cards2=cards.map(card=>{
								var cardx=ui.create.card();
								cardx.init(get.cardInfo(card));
								cardx._cardid=card.cardid;
								return cardx;
							});
							player.directgains(cards2,null,'jsrgmanjuan');
						},
						mod:{
							cardEnabled2:function(card,player){
								if(get.itemtype(card)=='card'&&card.hasGaintag('jsrgmanjuan')&&player.getStorage('jsrgmanjuan_used').includes(get.number(card,false))) return false;
							},
						},
					},
					use:{
						trigger:{
							player:['useCardBefore','respondBefore'],
						},
						charlotte:true,
						forced:true,
						popup:false,
						firstDo:true,
						filter:function(event,player){
							var cards=player.getCards('s',card=>card.hasGaintag('jsrgmanjuan')&&card._cardid);
							return event.cards&&event.cards.some(card=>{
								return cards.includes(card);
							});
						},
						content:function(){
							var idList=player.getCards('s',card=>card.hasGaintag('jsrgmanjuan')).map(i=>i._cardid);
							var cards=[];
							game.checkGlobalHistory('cardMove',evt=>{
								if(evt.name=='lose'&&evt.position==ui.discardPile||evt.name=='cardsDiscard'){
									cards.addArray(evt.cards.filter(i=>idList.includes(i.cardid)));
								}
							});
							var cards2=[];
							for(var card of trigger.cards){
								var cardx=cards.find(cardx=>cardx.cardid==card._cardid);
								if(cardx) cards2.push(cardx);
							}
							var cards3=trigger.cards.slice();
							trigger.cards=cards2;
							trigger.card.cards=cards2;
							if(player.isOnline2()){
								player.send(function(cards,player){
									cards.forEach(i=>i.delete());
									if(player==game.me) ui.updatehl();
								},cards3,player);
							}
							cards3.forEach(i=>i.delete());
							if(player==game.me) ui.updatehl();
							if(!player.storage.jsrgmanjuan_used){
								player.when({global:'phaseAfter'})
									.then(()=>{
										delete player.storage.jsrgmanjuan_used;
									})
							}
							player.markAuto('jsrgmanjuan_used',cards3.map(card=>get.number(card,false)));
						},
					},
					lose:{
						trigger:{
							global:['loseEnd','equipEnd','addJudgeEnd','gainEnd','loseAsyncEnd','addToExpansionEnd','cardsGotoOrderingBegin','phaseAfter'],
						},
						charlotte:true,
						forced:true,
						popup:false,
						firstDo:true,
						filter:function(event,player){
							if(event.name=='phase') return true;
							var idList=player.getCards('s',card=>card.hasGaintag('jsrgmanjuan')).map(i=>i._cardid);
							return event.cards&&event.cards.some(card=>{
								return idList.includes(card.cardid);
							});
						},
						content:function(){
							var cards2;
							if(trigger.name=='phase'){
								cards2=player.getCards('s',card=>{
									return card.hasGaintag('jsrgmanjuan');
								})
							}
							else{
								var idList=[];
								game.checkGlobalHistory('cardMove',evt=>{
									if(evt.name=='lose'&&evt.position==ui.discardPile||evt.name=='cardsDiscard'){
										idList.addArray(evt.cards.filter(i=>get.position(i,true)=='d').map(i=>i.cardid));
									}
								});
								cards2=player.getCards('s',card=>{
									return card.hasGaintag('jsrgmanjuan')&&!idList.includes(card._cardid);
								});
							}
							if(player.isOnline2()){
								player.send(function(cards,player){
									cards.forEach(i=>i.delete());
									if(player==game.me) ui.updatehl();
								},cards2,player);
							}
							cards2.forEach(i=>i.delete());
							if(player==game.me) ui.updatehl();
						}
					},
				}
			},
			jsrgyangming:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return game.hasPlayer(current=>{
						return player.canCompare(current);
					});
				},
				filterTarget:function(card,player,current){
					return player.canCompare(current);
				},
				content:function(){
					'step 0'
					event.num=0;
					'step 1'
					player.chooseToCompare(target).set('small',get.attitude(player,target)>0&&(player.countCards('h',card=>{
						return get.value(card)<6;
					})<=1||target.countCards('h',card=>{
						return get.value(card)<6;
					})<=1));
					'step 2'
					if(result.winner!=target){
						if(!player.canCompare(target)) event._result={bool:false};
						else player.chooseBool('是否与其重复此拼点流程？').set('ai',()=>get.event('bool')).set('bool',get.effect(target,'jsrgyangming',player,player)>0);
						event.num++;
					}
					else{
						if(event.num) target.draw(event.num);
						player.recover();
						event.finish();
					}
					'step 3'
					if(result.bool){
						event.goto(1);
					}
				},
				ai:{
					order:1,
					expose:0.15,
					result:{
						target:function(player,target){
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
					}
				}
			},
			//韩遂
			jsrgniluan:{
				audio:'niluan',
				trigger:{player:'phaseZhunbeiBegin'},
				direct:true,
				content:function(){
					'step 0'
					var damaged=game.filterPlayer(current=>{
						return current.hasAllHistory('sourceDamage',evt=>evt.player==player);
					});
					var undamaged=game.filterPlayer().removeArray(damaged);
					player.chooseCardTarget({
						prompt:get.prompt('jsrgniluan'),
						prompt2:`${undamaged.length?'选择一张牌弃置并选择一名未对你造成过伤害的角色，你对其造成1点伤害':''}${undamaged.length&&damaged.length?'；<br>或':''}${damaged.length?'仅选择一名对你造成过伤害的角色，你令其摸两张牌':''}。`,
						damaged:damaged,
						aiTarget:(()=>{
							if(undamaged.includes(player)&&!undamaged.some(i=>{
								if(i===player) return false;
								let att=get.attitude(player,i);
								if(att>0) return true;
								return att<0&&i.getHp(true)+i.hujia<2;
							})&&(player.hp>2||get.damageEffect(player,player,player)>=0)) return player;
							var info=game.filterPlayer().map(current=>{
								let damage=undamaged.includes(current),card={name:damage?'damage':'draw'};
								return [current,get.effect(current,card,player,player)*(damage?0.7:2)];
							}).sort((a,b)=>b[1]-a[1])[0];
							if(info[1]>0) return info[0];
							return null;
						})(),
						filterCard:lib.filter.cardDiscardable,
						selectCard:function(){
							if(get.event('damaged').length==0) return 1;
							if(get.event('damaged').length==game.countPlayer()) return 0;
							return [0,1];
						},
						position:'he',
						filterTarget:function(card,player,target){
							var damaged=get.event('damaged');
							return damaged.includes(target)^(ui.selected.cards.length>0);
						},
						selectTarget:1,
						ai1:function(card){
							if(get.event('damaged').includes(get.event('aiTarget'))) return 0;
							return 6-get.value(card);
						},
						ai2:function(target){
							return target==get.event('aiTarget')?10:0;
						},
					});
					'step 1'
					if(result.bool){
						var cards=result.cards,target=result.targets[0];
						player.logSkill('jsrgniluan',target);
						if(cards&&cards.length){
							player.discard(cards);
							game.delayex();
							target.damage();
						}
						else{
							target.draw(2);
						}
					}
				},
			},
			jsrghuchou:{
				audio:2,
				trigger:{source:'damageBegin1'},
				filter:function(event,player){
					const history=_status.globalHistory;
					for(let i=history.length-1;i>=0;i--){
						let evts=history[i]['useCard'];
						for(let j=evts.length-1;j>=0;j--){
							var evt=evts[j];
							let card=evt.card,targets=evt.targets;
							if(!get.tag(card,'damage')||!targets.includes(player)) continue;
							return event.player==evt.player;
						}
					}
					return false;
				},
				forced:true,
				content:function(){
					trigger.num++;
				},
				ai:{
					damageBonus:true,
					skillTagFilter:(player,tag,arg)=>{
						if(tag==='damageBonus'&&arg&&arg.target){
							const history=_status.globalHistory;
							for(let i=history.length-1;i>=0;i--){
								let evts=history[i]['useCard'];
								for(let j=evts.length-1;j>=0;j--){
									var evt=evts[j];
									let card=evt.card,targets=evt.targets;
									if(!get.tag(card,'damage')||!targets.includes(player)) continue;
									return arg.target===evt.player;
								}
							}
							return false;
						}
					},
					effect:{
						player:(card,player,target)=>{
							if(get.tag(card,'damage')&&target&&lib.skill.jsrghuchou.ai.skillTagFilter(player,'damageBonus',{
								card:card,
								target:target
							})&&!target.hasSkillTag('filterDamage',null,{
								player:player,
								card:card
							})) return [1,0,2,0];
						}
					}
				}
			},
			jsrgjiemeng:{
				audio:2,
				zhuSkill:true,
				forced:true,
				init:()=>{
					game.addGlobalSkill('jsrgjiemeng_effect');
				},
				onremove:()=>{
					if(!game.hasPlayer(i=>i.hasSkill('jsrgjiemeng'),true)) game.removeGlobalSkill('jsrgjiemeng_effect');
				},
				subSkill:{
					effect:{
						mod:{
							globalFrom:function(from,to,distance){
								if(from.group!='qun') return;
								if(to.hasZhuSkill('jsrgjiemeng')) return;
								return distance-game.countPlayer(current=>current.group=='qun');
							},
						},
						trigger:{player:'dieAfter'},
						filter:()=>{
							return !game.hasPlayer(i=>i.hasSkill('jsrgjiemeng'),true);
						},
						silent:true,
						forceDie:true,
						content:()=>{
							game.removeGlobalSkill('jsrgjiemeng_effect');
						}
					},
				},
			},
			//张楚
			jsrghuozhong:{
				audio:'dcjizhong',
				global:'jsrghuozhong_g',
				subSkill:{
					g:{
						audio:'dcjizhong',
						enable:'phaseUse',
						usable:1,
						filter:function (event,player){
							if(player.hasJudge('bingliang')) return false;
							if(!game.hasPlayer(current=>current.hasSkill('jsrghuozhong'))) return false;
							return player.countCards('hes',card=>get.color(card)=='black'&&get.type2(card)!='trick')>0;
						},
						viewAs:{name:'bingliang'},
						position:'hes',
						discard:false,
						prompt:function(){
							var list=game.filterPlayer(target=>{
								return target.hasSkill('jsrghuozhong');
							});
							return `将一张黑色非锦囊牌当【兵粮寸断】置于自己的判定区，然后令${get.translation(list)}${list.length>1?'中的一人':''}摸两张牌。`;
						},
						filterCard:function(card,player,event){
							return get.color(card)=='black'&&get.type2(card)!='trick'&&player.canAddJudge({name:'bingliang',cards:[card]});
						},
						selectTarget:-1,
						filterTarget:function (card,player,target){
							return player==target;
						},
						check:function(card){
							return 6-get.value(card);
						},
						precontent:function*(event,map){
							var player=map.player;
							var targets=game.filterPlayer(current=>current.hasSkill('jsrghuozhong'));
							var result;
							if(targets.length) result={bool:true,targets:targets};
							else result=yield player.chooseTarget('请选择一名传教士，发动其的【惑众】',true,(card,player,target)=>{
								return get.event('targets').includes(target);
							}).set('targets',targets);
							if(result.bool){
								var target=result.targets[0];
								player.logSkill('jsrghuozhong',target);
								var next=game.createEvent('jsrghuozhong_draw',false);
								next.set('player',player);
								next.set('target',target);
								event.next.remove(next);
								event.getParent().after.push(next);
								next.setContent(function(){
									target.draw(2);
								});
							}
						},
						ai:{
							result:{
								player:function(player){
									if(game.hasPlayer(current=>get.attitude(player,current)>2&&current.hasSkill('jsrghuozhong'))) return 1;
									return 0;
								},
							},
							order:9,
						},
					},
				},
			},
			jsrgrihui:{
				audio:'dcrihui',
				locked:false,
				trigger:{source:'damageSource'},
				filter:function(event,player){
					return event.getParent().type=='card'&&event.card&&event.card.name=='sha'&&game.hasPlayer(current=>{
						return current!=player&&current.countCards('j');
					});
				},
				prompt:'是否发动【日彗】？',
				prompt2:function(event,player){
					var list=game.filterPlayer(current=>{
						return current!=player&&current.countCards('j');
					});
					return `令${get.translation(list)}${list.length>1?'各':''}摸一张牌。`;
				},
				logTarget:function(event,player){
					return game.filterPlayer(current=>{
						return current!=player&&current.countCards('j');
					});
				},
				group:'jsrgrihui_sha',
				content:function(){
					game.asyncDraw(lib.skill.jsrgrihui.logTarget(trigger,player));
				},
				mod:{
					cardUsableTarget:function(card,player,target){
						if(card.name=='sha'&&!player.getStorage('jsrgrihui_targeted').includes(target)) return true;
					},
				},
				subSkill:{
					sha:{
						trigger:{player:'useCardToPlayered'},
						forced:true,
						silent:true,
						firstDo:true,
						content:function(){
							player.addTempSkill('jsrgrihui_targeted');
							player.markAuto('jsrgrihui_targeted',trigger.target);
						}
					},
					targeted:{
						charlotte:true,
						onremove:true,
					},
				},
			},
			//夏侯恩
			jsrghujian:{
				audio:'twfujian',
				trigger:{
					global:'phaseEnd',
				},
				filter:function(event,player){
					if(!Array.from(ui.discardPile.childNodes).some(i=>i.name=='chixueqingfeng')) return false;
					return game.hasGlobalHistory('everything',evt=>['useCard','respond'].includes(evt.name)&&evt.player.isIn());
				},
				popup:false,
				forced:true,
				locked:false,
				group:'jsrghujian_begin',
				content:function(){
					'step 0'
					var cards=Array.from(ui.discardPile.childNodes).filter(i=>i.name=='chixueqingfeng');
					if(cards.length){
						event.cards=cards;
						var history=_status.globalHistory,target=null;
						for(var i=history.length-1;i>=0&&!target;i--){
							var evts=history[i]['everything'];
							for(var j=evts.length-1;j>=0;j--){
								var evt=evts[j];
								if(!['useCard','respond'].includes(evt.name)) continue;
								target=evt.player;
								break;
							}
						}
						if(target&&target.isIn()){
							event.target=target;
							target.chooseBool(`是否响应${get.translation(player)}的【护剑】？`,'获得弃牌堆里的【赤血青锋】。');
						}
						else event.finish();
					}
					else event.finish();
					'step 1'
					if(result.bool){
						player.logSkill('jsrghujian');
						player.line(target);
						target.gain(cards,'gain2');
					}
				},
				subSkill:{
					begin:{
						audio:'twfujian',
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
							player.gain(game.createCard2('chixueqingfeng','spade',6),'gain2');
						}
					},
				},
			},
			jsrgshili:{
				audio:'twjianwei',
				enable:'phaseUse',
				usable:1,
				viewAs:{
					name:'juedou',
				},
				filterCard:{type:'equip'},
				position:'hs',
				viewAsFilter:function(player){
					return player.hasCard({type:'equip'},'hs');
				},
				check:function(card){
					return (get.name(card,false)=='chixueqingfeng'?20:12)-_status.event.player.getUseValue(card);
				},
				ai:{
					order:0.001,
				},
			},
			//范疆张达
			jsrgfushan:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				forced:true,
				locked:false,
				filter:function(event,player){
					return game.hasPlayer(i=>i!=player);
				},
				content:function*(event,map){
					var player=map.player,trigger=map.trigger, targets=game.filterPlayer(i=>i!=player);
					var shas=player.mayHaveSha(target,'use',null,'count')-player.getCardUsable('sha',true);
					for(var target of targets){
						var att=get.attitude(target,player);
						var result=yield target.chooseCard('he',`负山：是否交给${get.translation(player)}一张牌？`,`若如此做，其此阶段使用【杀】的次数上限+1`).set('att',att).set('ai',card=>{
							if(!get.event('goon')) return -get.value(card);
							var isSha=get.name(card,get.event('target'))=='sha';
							if(get.event('att')<0) return (isSha?0:5)-get.value(card);
							return (isSha?10:0)-get.value(card);
						}).set('goon',att>0&&shas>=0||att<0&&target.hp>player.getCardUsable('sha',true)&&shas<-1/Math.max(1,player.hp)).set('target',player);
						if(result.bool){
							target.give(result.cards,player);
							target.line(player);
							player.addTempSkill('jsrgfushan_sha','phaseAfter');
							player.addMark('jsrgfushan_sha',1,false);
							player.markAuto('jsrgfushan_given',target);
						}
					}
					player.when('phaseUseAfter').filter((evt=>evt==trigger)).then(()=>{
						player.logSkill('jsrgfushan');
						if(player.getCardUsable('sha',true)>player.getHistory('useCard',evt=>{
							return evt.getParent('phaseUse')==trigger&&evt.card.name=='sha'&&evt.addCount!==false;
						}).length&&player.storage.jsrgfushan_given&&player.storage.jsrgfushan_given.every(i=>i.isIn())){
							player.loseHp(2);
						}
						else{
							player.drawTo(player.maxHp);
						}
						delete player.storage.jsrgfushan_given;
					});
				},
				subSkill:{
					sha:{
						charlotte:true,
						onremove:true,
						marktext:'负',
						intro:{content:'使用【杀】的次数上限+#'},
						mod:{
							cardUsable:function(card,player,num){
								if(card.name=='sha') return num+player.countMark('jsrgfushan_sha');
							},
						},
					},
				},
			},
			//江山如故·承
			//404孙策
			jsrgduxing:{
				audio:2,
				enable:'phaseUse',
				viewAs:{
					name:'juedou',
					storage:{jsrgduxing:true},
					isCard:true,
				},
				viewAsFilter:function(player){
					if(player.hasSkill('jsrgduxing_used')) return false;
				},
				filterCard:()=>false,
				selectCard:-1,
				selectTarget:[1,Infinity],
				precontent:function(){
					player.logSkill('jsrgduxing');
					delete event.result.skill;
					var targets=event.result.targets;
					for(var target of targets){
						target.addTempSkill('jsrgduxing_allsha');
					}
					player.addTempSkill('jsrgduxing_restore');
					player.addTempSkill('jsrgduxing_used','phaseUseAfter');
				},
				ai:{
					order:5,
					result:{
						player:function(player,target){
							var eff=Math.sign(get.effect(target,{name:'juedou'},player,player));
							if(player.hasSkillTag('directHit_ai',true,{
								target:target,
								card:{name:'juedou'},
							},true)||ui.selected.targets.concat(target).reduce((p,c)=>{
								return p+c.countCards('h');
							},0)<player.countCards('h','sha')){
								return 0;
							}
							return -114514;
						},
						target:-1.5,
					}
				},
				subSkill:{
					allsha:{
						charlotte:true,
						mod:{
							cardname:function(card,player,name){
								return 'sha';
							},
						}
					},
					used:{
						charlotte:true,
					},
					restore:{
						charlotte:true,
						trigger:{
							global:'useCardAfter',
						},
						forced:true,
						popup:false,
						forceDie:true,
						forceOut:true,
						filter:function(event,player){
							return event.card.name=='juedou'&&event.card.storage&&event.card.storage.jsrgduxing;
						},
						content:function(){
							game.countPlayer(current=>{
								current.removeSkill('jsrgduxing_allsha');
							},true);
						}
					},
				},
			},
			jsrgzhiheng:{
				audio:2,
				trigger:{
					source:'damageBegin1',
				},
				forced:true,
				filter:function(event,player){
					if(event.getParent().type!='card') return false;
					var respondEvts=[];
					respondEvts.addArray(event.player.getHistory('useCard')).addArray(event.player.getHistory('respond'));
					respondEvts=respondEvts.filter(i=>i.respondTo).map(evt=>evt.respondTo);
					return respondEvts.some(list=>{
						return list[0]==player;
					});
				},
				content:function(){
					trigger.num++;
				},
			},
			jsrgzhasi:{
				audio:2,
				trigger:{
					player:'damageBegin4',
				},
				limited:true,
				skillAnimation:true,
				animationColor:'wood',
				filter:function(event,player){
					return event.num>=player.getHp();
				},
				content:function(){
					player.awakenSkill('jsrgzhasi');
					trigger.cancel();
					player.changeSkills(['rezhiheng'],['jsrgzhiheng']);
					player.addSkill('jsrgzhasi_undist');
				},
				derivation:'rezhiheng',
				subSkill:{
					undist:{
						group:'undist',
						trigger:{
							player:['useCardAfter','damageEnd'],
						},
						filter:function(event,player){
							if(event.name=='useCard') return event.targets.some(target=>{
								return target!=player;
							});
							return true;
						},
						forced:true,
						popup:false,
						charlotte:true,
						content:function(){
							player.removeSkill('jsrgzhasi_undist');
						},
						mark:true,
						intro:{
							content:'诈死中，不计入距离和座次的计算',
						},
					},
				},
			},
			jsrgbashi:{
				audio:2,
				trigger:{player:'chooseToRespondBefore'},
				zhuSkill:true,
				filter:function(event,player){
					if(event.responded) return false;
					if(player.storage.jsrgbashiing) return false;
					if(!player.hasZhuSkill('jsrgbashi')) return false;
					if(!event.filterCard({name:'sha'},player,event)&&!event.filterCard({name:'shan'},player,event)) return false;
					return game.hasPlayer(function(current){
						return current!=player&&current.group=='wu';
					});
				},
				check:function(event,player){
					if(get.damageEffect(player,event.player,player)>=0) return false;
					return true;
				},
				content:function(){
					'step 0'
					event.targets=game.filterPlayer();
					'step 1'
					var target=event.targets.shift();
					event.target=target;
					if(!target) event.finish();
					else if(!target.isIn()||target==player) event.redo();
					else if(target.group=='wu'){
						if((target==game.me&&!_status.auto)||(
							get.attitude(target,player)>2)||
							target.isOnline()){
							player.storage.jsrgbashiing=true;
							var list=['sha','shan'].filter(name=>trigger.filterCard({name:name},player,trigger));
							var names=list.map(i=>'【'+get.translation(i)+'】').join('或');
							var next=target.chooseToRespond('是否替'+get.translation(player)+'打出一张'+names+'？',{name:list});
							next.set('ai',function(){
								var event=_status.event;
								return (get.attitude(event.player,event.source)-2);
							});
							next.set('skillwarn','替'+get.translation(player)+'打出一张'+names);
							next.autochoose=function(){
								if(!lib.filter.autoRespondSha.apply(this,arguments)) return false;
								return lib.filter.autoRespondShan.apply(this,arguments);
							};
							next.set('source',player);
						}
					}
					'step 2'
					delete player.storage.jsrgbashiing;
					if(result.bool){
						event.finish();
						var name=result.card.name;
						trigger.result={bool:true,card:{name:name,isCard:true}};
						trigger.responded=true;
						trigger.animate=false;
						if(typeof target.ai.shown=='number'&&target.ai.shown<0.95){
							target.ai.shown+=0.3;
							if(target.ai.shown>0.95) target.ai.shown=0.95;
						}
					}
					else{
						event.goto(1);
					}
				},
				ai:{
					respondSha:true,
					respondShan:true,
					skillTagFilter:function(player,tag,arg){
						if(arg=='use') return false;
						if(player.storage.jsrgbashiing) return false;
						if(!player.hasZhuSkill('jsrgbashi')) return false;
						return game.hasPlayer(function(current){
							return current!=player&&current.group=='wu';
						});
					},
				},
			},
			//许攸
			jsrglipan:{
				audio:2,
				trigger:{
					player:'phaseEnd',
				},
				direct:true,
				content:function(){
					'step 0'
					var list=lib.group.slice();
					list.remove(player.group);
					var getV=function(group){
						var val=1;
						if(group=='wei'||group=='qun') val++;
						game.countPlayer(current=>{
							if(current.group!=group) return false;
							var att=get.attitude(player,current);
							if(att>0) val++;
							else if(att==0) val+=0.5;
							else val--;
						});
						return val;
					};
					var maxGroup=list.slice().sort((a,b)=>{
						return getV(b)-getV(a);
					})[0];
					list.push('cancel2');
					player.chooseControl(list).set('prompt',get.prompt('jsrglipan')).set('prompt2','变更为另一个势力').set('ai',()=>{
						return _status.event.choice;
					}).set('choice',maxGroup);
					'step 1'
					var group=result.control;
					if(group=='cancel2') return;
					player.logSkill('jsrglipan');
					player.popup(group+'2',get.groupnature(group,'raw'));
					player.changeGroup(group);
					var num=game.countPlayer(current=>{
						return current.group==group&&current!=player;
					});
					if(num>0) player.draw(num);
					var next=player.phaseUse();
					next.jsrglipan=true;
					event.next.remove(next);
					trigger.next.push(next);
					player.addTempSkill('jsrglipan_backfire');
				},
				subSkill:{
					backfire:{
						trigger:{
							player:'phaseUseEnd',
						},
						charlotte:true,
						forced:true,
						popup:false,
						filter:function(event,player){
							return event.jsrglipan;
						},
						content:function(){
							'step 0'
							var targets=game.filterPlayer(current=>{
								return current.group==player.group;
							});
							targets.sortBySeat();
							event.targets=targets;
							'step 1'
							var target=targets.shift();
							event.target=target;
							if(target&&target.isIn()&&target.canUse({name:'juedou'},player)){
								target.chooseCardTarget({
									position:'hes',
									prompt:'是否将一张牌当【决斗】对'+get.translation(player)+'使用？',
									filterCard:function(card,player){
										return player.canUse(get.autoViewAs({name:'juedou'},[card]),_status.event.getParent().player);
									},
									filterTarget:function(card,player,target){
										var source=_status.event.getParent().player;
										if(target!=source&&!ui.selected.targets.includes(source)) return false;
										card=get.autoViewAs({name:'juedou'},[card]);
										return lib.filter.filterTarget.apply(this,arguments);
									},
									selectTarget:function(){
										var card=get.card(),player=get.player();
										if(!card) return;
										card=get.autoViewAs({name:'juedou'},[card]);
										var range=[1,1];
										game.checkMod(card,player,range,'selectTarget',player);
										return range;
									},
									ai1:function(card){
										var player=_status.event.player,target=_status.event.getParent().player;
										var eff=get.effect(target,get.autoViewAs({name:'juedou'},[card]),player,player);
										if(eff<=0) return 0;
										return (player.hp==1?10:6)-get.value(card);
									},
									ai2:function(target){
										if(target==_status.event.getParent().player) return 100;
										return get.effect(target,{name:'juedou'},_status.event.player);
									}
								});
							}
							'step 2'
							if(result.bool){
								var cards=result.cards;
								var cardx=get.autoViewAs({name:'juedou'},cards);
								var targets=result.targets.filter(targetx=>{
									return target.canUse(cardx,targetx);
								});
								if(targets.length) target.useCard(cardx,cards,targets);
							}
							if(targets.length) event.goto(1);
						}
					}
				},
			},
			jsrgqingxi:{
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					if(player.group!='qun') return false;
					return game.hasPlayer(current=>lib.skill.jsrgqingxi.filterTarget('',player,current));
				},
				groupSkill:true,
				filterTarget:function(card,player,target){
					if(target.countCards('h')>=player.countCards('h')) return false;
					return !player.getStorage('jsrgqingxi_used').includes(target);
				},
				content:function(){
					'step 0'
					player.addTempSkill('jsrgqingxi_used','phaseUseAfter');
					player.markAuto('jsrgqingxi_used',[target]);
					var num=player.countCards('h')-target.countCards('h');
					if(num>0) player.chooseToDiscard(num,true,'轻袭：弃置'+get.cnNumber(num)+'张手牌');
					'step 1'
					var card={
						name:'sha',
						nature:'stab',
						isCard:true,
					};
					if(player.canUse(card,target,false)) player.useCard(card,target,false);
				},
				ai:{
					order:8,
					result:{
						target:(player,target)=>{
							let num=player.countCards('h')-target.countCards('h'),
								eff=get.effect(target,{name:'sha',nature:'stab'},player,target),
								val=0,
								ph=_status.event.getTempCache('jsrgqingxi_result','ph');
							if(!ph){
								ph=player.getCards('h').sort((a,b)=>{
									return get.value(a)-get.value(b);
								});
								_status.event.putTempCache('jsrgqingxi_result','ph',ph);
							}
							ph.slice(0,num).forEach(i=>{
								val+=get.value(i,player);
							});
							eff=Math.sign(eff)*Math.sqrt(Math.abs(eff));
							if(val>2*Math.abs(eff)) return 0;
							return eff/num;
						}
					}
				},
				subSkill:{
					used:{
						onremove:true,
						charlotte:true,
					}
				},
			},
			jsrgjinmie:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					if(player.group!='wei') return false;
					return game.hasPlayer(current=>current.countCards('h')>player.countCards('h'));
				},
				groupSkill:true,
				filterTarget:function(card,player,target){
					return target.countCards('h')>player.countCards('h');
				},
				content:function(){
					'step 0'
					var card={
						name:'sha',
						nature:'fire',
						storage:{jsrgjinmie:target},
						isCard:true,
					};
					if(player.canUse(card,target,false)){
						player.useCard(card,target,false);
						player.addTempSkill('jsrgjinmie_effect');
					}
				},
				ai:{
					order:0.5,
					result:{
						target:function(player,target){
							var eff=get.effect(target,{name:'sha',nature:'fire'},player,target)/30;
							if(!target.mayHaveShan(player,'use',target.getCards('h',i=>{
								return i.hasGaintag('sha_notshan');
							}))) eff*=2;
							var del=target.countCards('h')-player.countCards('h')+1.5;
							eff*=Math.sqrt(del);
							return eff;
						}
					}
				},
				subSkill:{
					effect:{
						trigger:{
							source:'damageSource',
						},
						filter:function(event,player){
							return event.card&&event.card.storage&&event.card.storage.jsrgjinmie&&event.card.storage.jsrgjinmie.isIn();
						},
						forced:true,
						popup:false,
						charlotte:true,
						content:function(){
							'step 0'
							var target=trigger.card.storage.jsrgjinmie;
							var del=target.countCards('h')-player.countCards('h');
							if(del>0){
								player.line(target);
								player.discardPlayerCard(target,'h',true,del);
							}
							// else if(del<0){
							// 	player.line(target);
							// 	target.draw(-del);
							// }
						}
					}
				},
			},
			//吕布
			jsrgwuchang:{
				audio:2,
				trigger:{
					player:'gainAfter',
					global:'loseAsyncAfter',
				},
				forced:true,
				filter:function(event,player){
					var cards=event.getg(player);
					if(!cards.length) return false;
					return game.hasPlayer(current=>{
						if(current==player) return false;
						return event.getl(current).cards2.length;
					});
				},
				group:'jsrgwuchang_add',
				content:function(){
					'step 0'
					var targets=game.filterPlayer(current=>{
						if(current==player) return false;
						return trigger.getl(current).cards2.length;
					});
					var target=targets[0];
					player.changeGroup(target.group);
					player.popup(target.group+'2',get.groupnature(target.group,'raw'));
				},
				subSkill:{
					add:{
						trigger:{
							source:'damageBegin1',
						},
						filter:function(event,player){
							if(!event.card||!['sha','juedou'].includes(event.card.name)||event.getParent().type!='card') return false;
							return event.player.group==player.group;
						},
						forced:true,
						content:function(){
							'step 0'
							trigger.num++;
							var group='qun';
							player.changeGroup(group);
							player.popup(group+'2',get.groupnature(group,'raw'));
						},
					}
				},
			},
			jsrgqingjiao:{
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					if(player.group!='qun') return false;
					if(!player.countCards('hes')) return false;
					return !player.hasSkill('jsrgqingjiao_tuixinzhifu')&&game.hasPlayer(current=>{
						return current.countCards('h')>player.countCards('h');
					})||!player.hasSkill('jsrgqingjiao_chenghuodajie')&&game.hasPlayer(current=>{
						return current.countCards('h')<player.countCards('h');
					});
				},
				groupSkill:true,
				position:'hes',
				filterCard:true,
				selectCard:1,
				discard:false,
				lose:false,
				delay:false,
				filterTarget:function(card,player,target){
					var mod=game.checkMod(ui.selected.cards[0],player,'unchanged','cardEnabled2',player);
					if(!mod) return false;
					var del=target.countCards('h')-player.countCards('h');
					if(del==0) return false;
					var name=del>0?'tuixinzhifu':'chenghuodajie';
					if(player.hasSkill('jsrgqingjiao_'+name)) return false;
					return player.canUse({name:name,cards:ui.selected.cards},target);
				},
				content:function(){
					var del=target.countCards('h')-player.countCards('h');
					var name=del>0?'tuixinzhifu':'chenghuodajie';
					player.useCard({name:name},target,cards);
					player.addTempSkill('jsrgqingjiao_'+name,'phaseUseAfter');
				},
				ai:{
					order:7,
					result:{
						player:function(player,target){
							var name=(target.countCards('h')>player.countCards('h')?'tuixinzhifu':'chenghuodajie');
							var list=[];
							if(ui.selected.cards.length) list.addArray(ui.selected.cards);
							var card=get.autoViewAs({name:name},list);
							return get.effect(target,card,player,player);
						},
					},
				},
				subSkill:{
					tuixinzhifu:{
						charlotte:true,
					},
					chenghuodajie:{
						charlotte:true,
					},
				}
			},
			jsrgchengxu:{
				audio:2,
				trigger:{player:'useCard'},
				forced:true,
				locked:false,
				filter:function(event,player){
					if(player.group!='shu') return false;
					return game.hasPlayer(current=>{
						return current!=player&&current.group==player.group;
					});
				},
				groupSkill:true,
				content:function(){
					trigger.directHit.addArray(game.filterPlayer(current=>{
						return current!=player&&current.group==player.group;
					}));
				},
				ai:{
					directHit_ai:true,
					skillTagFilter:function(player,tag,arg){
						return player.group=='shu'&&player.group==arg.target.group;
					},
				},
			},
			//张郃
			jsrgqiongtu:{
				audio:2,
				enable:'chooseToUse',
				groupSkill:true,
				viewAs:{
					name:'wuxie',
					suit:'none',
					number:null,
					isCard:true,
				},
				filter:function(event,player){
					if(!player.countCards('he',card=>_status.connectMode||get.type(card)!='basic')) return false;
					return player.group=='qun'&&!player.hasSkill('jsrgqiongtu_check');
				},
				viewAsFilter:function(player){
					if(!player.countCards('he',card=>_status.connectMode||get.type(card)!='basic')) return false;
					return player.group=='qun'&&!player.hasSkill('jsrgqiongtu_check');
				},
				filterCard:function(card){
					return get.type(card)!='basic';
				},
				position:'he',
				popname:true,
				ignoreMod:true,
				precontent:function(){
					'step 0'
					player.logSkill('jsrgqiongtu');
					delete event.result.skill;
					var card=event.result.cards[0];
					event.card=card;
					event.result.card={
						name:event.result.card.name,
						storage:{jsrgqiongtu:true},
						isCard:true,
					};
					event.result.cards=[];
					player.addToExpansion(card,player,'give').gaintag.add('jsrgqiongtu');
					player.addTempSkill('jsrgqiongtu_check');
				},
				marktext:'途',
				intro:{
					content:'expansion',
					markcount:'expansion',
				},
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
					delete player.storage[skill];
				},
				subSkill:{
					check:{
						trigger:{
							global:'useCardAfter',
						},
						filter:function(event,player){
							return event.card.name=='wuxie'&&event.card.storage&&event.card.storage.jsrgqiongtu;
						},
						forced:true,
						popup:false,
						charlotte:true,
						content:function(){
							'step 0'
							game.delayx();
							var evt=trigger.getParent(4);
							if(evt.name=='phaseJudge'){
								state=evt.cancelled;
							}
							else{
								state=evt._neutralized;
							}
							if(state){
								player.draw();
							}
							else{
								player.changeGroup('wei');
								var cards=player.getExpansions('jsrgqiongtu');
								if(cards.length) player.gain(cards,'gain2');
							}
						}
					},
				},
			},
			jsrgxianzhu:{
				audio:2,
				enable:'chooseToUse',
				filter:function(event,player){
					return player.group=='wei'&&player.hasCard(card=>{
						return _status.connectMode||get.type(card)=='trick';
					},'hs');
				},
				groupSkill:true,
				locked:false,
				viewAs:{
					name:'sha',
					storage:{jsrgxianzhu:true},
				},
				position:'hs',
				filterCard:function(card){
					return get.type(card)=='trick';
				},
				check:function(card){
					var player=_status.event.player;
					var cardx={
						name:'sha',
						storage:{jsrgxianzhu:true},
						cards:[card],
					}
					if(game.hasPlayer(current=>{
						return player.canUse(cardx,current)&&get.effect(current,card,player,player)>0&&get.effect(current,cardx,player,player)>0;
					})) return 15-get.value(card);
					return 0;
				},
				onuse:function(links,player){
					player.addTempSkill('jsrgxianzhu_after');
				},
				mod:{
					cardUsable:function(card){
						if(card.storage&&card.storage.jsrgxianzhu) return Infinity;
					},
				},
				subSkill:{
					after:{
						trigger:{
							global:'damageSource',
						},
						filter:function(event,player){
							var targets=event.getParent(2).targets;
							if(!targets||targets.length!=1) return false;
							if(!event.card||!event.card.storage||!event.card.storage.jsrgxianzhu) return false;
							var target=event.player,card=event.cards[0];
							if(!target.isIn()) return false;
							if(get.type(card)!='trick') return false;
							if(!player.canUse(card,target,false)) return false;
							return true;
						},
						forced:true,
						charlotte:true,
						group:'jsrgxianzhu_inf',
						content:function(){
							var card={
								name:trigger.cards[0].name,
								isCard:true,
							}
							player.useCard(card,trigger.player,false);
							game.delayx();
						},
					},
					inf:{
						trigger:{player:'useCard1'},
						forced:true,
						popup:false,
						firstDo:true,
						filter:function(event,player){
							if(event.card.storage&&event.card.storage.jsrgxianzhu&&event.addCount!==false) return true;
							return false;
						},
						content:function(){
							trigger.addCount=false;
							var stat=player.getStat().card,name=trigger.card.name;
							if(typeof stat[name]=='number') stat[name]--;
						},
					},
				},
			},
			//邹氏
			jsrgguyin:{
				audio:2,
				trigger:{
					player:'phaseZhunbeiBegin',
				},
				check:function(event,player){
					return player.isTurnedOver()||game.countPlayer2(current=>current.hasSex('male'))>=2;
				},
				content:function(){
					'step 0'
					player.turnOver();
					'step 1'
					var targets=game.filterPlayer(current=>current!=player&&current.hasSex('male'));
					event.targets=targets;
					player.line(targets);
					game.delayx();
					'step 2'
					var target=targets.shift();
					event.target=target;
					target.chooseBool('是否响应'+get.translation(player)+'的【孤吟】？','你可以翻面。').set('ai',()=>{
						return _status.event.bool;
					}).set('bool',function(){
						return target.isTurnedOver()||get.attitude(target,player)>0&&(game.countPlayer2(current=>current.hasSex('male'))>=3||target.getHp()<=1&&player.hasSkill('jsrgzhangdeng'));
					}());
					'step 3'
					if(result.bool){
						target.turnOver();
					}
					if(targets.length) event.goto(2);
					'step 4'
					var targets=game.filterPlayer(current=>{
						return current==player||current.isTurnedOver();
					});
					event.targets=targets;
					event.num=0;
					event.index=0;
					'step 5'
					var target=targets[event.index];
					if(target.isIn()){
						target.draw();
						event.num++;
					}
					event.index++;
					if(event.index>=targets.length) event.index=0;
					'step 6'
					if(event.num>=game.countPlayer2(current=>current.hasSex('male'))) event.finish();
					else event.goto(5);
				},
			},
			jsrgzhangdeng:{
				audio:2,
				trigger:{
					global:'logSkill',
				},
				filter:function(event,player){
					return event.player.getHistory('useSkill',evt=>{
						return evt.skill=='jsrgzhangdeng_jiu';
					}).map(evt=>evt.event).indexOf(event.log_event)==1;
				},
				global:'jsrgzhangdeng_jiu',
				forced:true,
				locked:false,
				content:function(){
					player.turnOver(false);
				},
				subSkill:{
					jiu:{
						audio:'jsrgzhangdeng',
						enable:'chooseToUse',
						filter:function(event,player){
							return player.isTurnedOver()&&game.hasPlayer(current=>{
								return current.hasSkill('jsrgzhangdeng')&&current.isTurnedOver();
							});
						},
						viewAs:{name:'jiu',isCard:true},
						viewAsFilter:function(player){
							return player.isTurnedOver()&&game.hasPlayer(current=>{
								return current.hasSkill('jsrgzhangdeng')&&current.isTurnedOver();
							});
						},
						filterCard:()=>false,
						selectCard:-1,
						precontent:function(){
							player.logSkill('jsrgzhangdeng_jiu');
							var targets=game.filterPlayer(current=>{
								return current.hasSkill('jsrgzhangdeng')&&current.isTurnedOver();
							});
							player.line(targets[0]);
							delete event.result.skill;
						},
					},
				},
			},
			//关羽
			jsrgguanjue:{
				audio:2,
				trigger:{
					player:['useCard','respond'],
				},
				filter:function(event,player){
					return lib.suit.includes(get.suit(event.card));
				},
				forced:true,
				content:function(){
					'step 0'
					var targets=game.filterPlayer(current=>current!=player);
					var suit=get.suit(trigger.card);
					for(var target of targets){
						target.addTempSkill('jsrgguanjue_ban');
						target.markAuto('jsrgguanjue_ban',[suit]);
					}
				},
				subSkill:{
					ban:{
						onremove:true,
						charlotte:true,
						mod:{
							cardEnabled:function(card,player){
								if(player.getStorage('jsrgguanjue_ban').includes(get.suit(card))) return false;
							},
							cardRespondable:function(card,player){
								if(player.getStorage('jsrgguanjue_ban').includes(get.suit(card))) return false;
							},
							cardSavable:function(card,player){
								if(player.getStorage('jsrgguanjue_ban').includes(get.suit(card))) return false;
							},
						},
						mark:true,
						marktext:'绝',
						intro:{
							content:'本回合内不能使用或打出$的牌',
						},
					},
				},
			},
			jsrgnianen:{
				audio:2,
				enable:['chooseToUse','chooseToRespond'],
				filter:function(event,player){
					if(!player.countCards('hes')) return false;
					if(player.hasSkill('jsrgnianen_blocker')) return false;
					for(var name of lib.inpile){
						if(get.type2(name)!='basic') continue;
						var card={name:name};
						if(event.filterCard(get.autoViewAs(card,'unsure'),player,event)) return true;
						if(name=='sha'){
							for(var nature of lib.inpile_nature){
								card.nature=nature;
								if(event.filterCard(get.autoViewAs(card,'unsure'),player,event)) return true;
							}
						}
					}
					return false;
				},
				derivation:'mashu',
				chooseButton:{
					dialog:function(event,player){
						var list=[];
						for(var name of lib.inpile){
							if(name=='sha'){
								if(event.filterCard(get.autoViewAs({name},'unsure'),player,event)) list.push(['基本','','sha']);
								for(var nature of lib.inpile_nature){
									if(event.filterCard(get.autoViewAs({name,nature},'unsure'),player,event)) list.push(['基本','','sha',nature]);
								}
							}
							else if(get.type(name)=='basic'&&event.filterCard(get.autoViewAs({name},'unsure'),player,event)) list.push(['基本','',name]);
						}
						var dialog=ui.create.dialog('念恩',[list,'vcard']);
						dialog.direct=true;
						return dialog;
					},
					filter:function(button,player){
						return _status.event.getParent().filterCard(get.autoViewAs({name:button.link[2],nature:button.link[3]},'unsure'),player,_status.event.getParent());
					},
					check:function(button){
						if(_status.event.getParent().type!='phase') return 1;
						var player=_status.event.player;
						if(['wugu','zhulu_card','yiyi','lulitongxin','lianjunshengyan','diaohulishan'].includes(button.link[2])) return 0;
						return player.getUseValue({
							name:button.link[2],
							nature:button.link[3],
						});
					},
					backup:function(links,player){
						return {
							audio:'jsrgnianen',
							filterCard:true,
							popname:true,
							check:function(card){
								return 8-get.value(card);
							},
							position:'hes',
							viewAs:{name:links[0][2],nature:links[0][3]},
							precontent:function(){
								player.logSkill('jsrgnianen');
								delete event.result.skill;
								var card=event.result.card;
								if(get.color(card,player)!='red'||get.name(card)!='sha'||get.natureList(card).length){
									player.addTempSkill('jsrgnianen_blocker');
									player.addAdditionalSkill('jsrgnianen_blocker','mashu');
								}
							},
						}
					},
					prompt:function(links,player){
						return '将一张牌当做'+(get.translation(links[0][3])||'')+get.translation(links[0][2])+'使用';
					}
				},
				hiddenCard:function(player,name){
					if(!lib.inpile.includes(name)) return false;
					var type=get.type2(name);
					return type=='basic'&&player.countCards('hes')>0&&!player.hasSkill('jsrgnianen_blocker');
				},
				ai:{
					fireAttack:true,
					respondSha:true,
					respondShan:true,
					skillTagFilter:function(player){
						if(!player.countCards('hes')||player.hasSkill('jsrgnianen_blocker')) return false;
					},
					order:1,
					result:{
						player:function(player){
							if(_status.event.dying) return get.attitude(player,_status.event.dying);
							return 1;
						},
					},
				},
				subSkill:{
					blocker:{
						charlotte:true,
						mark:true,
						marktext:'恩',
						intro:{content:'视为拥有〖马术〗'},
					},
				},
			},
			//生鱼片
			jsrglunshi:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return game.hasPlayer(current=>{
						return current.inRangeOf(target);
					});
				},
				content:function(){
					'step 0'
					var num=game.countPlayer(current=>{
						return current.inRangeOf(target);
					});
					var len=target.countCards('h');
					num=Math.max(0,Math.min(len+num,5)-len);
					if(num>0) target.draw(num);
					'step 1'
					var num=game.countPlayer(current=>{
						return current.inRange(target);
					});
					if(num>0) target.chooseToDiscard(num,'he',true,get.translation(player)+'对你发动了【论势】','请弃置'+get.cnNumber(num)+'张牌');
				},
				ai:{
					order:6,
					result:{
						target:function(player,target){
							var num1=game.countPlayer(current=>{
								return current.inRangeOf(target);
							}),num2=game.countPlayer(current=>{
								return current.inRange(target);
							});
							var len=target.countCards('h');
							num1=Math.max(0,Math.min(len+num1,5)-len);
							return (num1-num2+1)/2;
						}
					}
				},
			},
			jsrgguitu:{
				audio:2,
				trigger:{
					player:'phaseZhunbeiBegin',
				},
				direct:true,
				filter:function(event,player){
					return game.countPlayer(current=>{
						return current.getEquips(1).length;
					})>=2;
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('jsrgguitu'),(card,player,target)=>{
						return target.getEquips(1).length;
					},[1,2]).set('filterOk',()=>{
						var num=0;
						for(var target of ui.selected.targets){
							num+=target.getEquips(1).length;
						}
						return num>=2;
					}).set('ai',target=>{
						var sign=-1;
						var val=0;
						if(ui.selected.targets.length){
							sign=1;
							var targetx=ui.selected.targets[0];
							var cards=targetx.getEquips(1);
							var list=cards.map(card=>{
								return [card,get.value(card,targetx)];
							});
							list.sort((a,b)=>{
								return b[1]-a[1];
							});
							val=get.attitude(_status.event.player,targetx)*list[0][1];
						}
						var cards=target.getEquips(1);
						var list=cards.map(card=>{
							return [card,get.value(card,target)];
						});
						list.sort((a,b)=>{
							return b[1]-a[1];
						});
						return get.attitude(_status.event.player,target)*list[0][1]*sign-val;
					});
					'step 1'
					if(result.bool){
						var targets=result.targets.slice();
						targets.sortBySeat();
						event.targets=targets;
						player.logSkill('jsrgguitu',targets);
						event.rangeList=targets.map(target=>{
							return target.getAttackRange();
						});
						var weapons=[];
						for(var target of targets){
							weapons.addArray(target.getEquips(1));
						}
						if(weapons.length>2){
							var list=['诡图：选择要交换的武器牌'];
							for(var target of targets){
								list.addArray([
									'<div class="text center">'+get.translation(target)+'的武器牌</div>',
									target.getEquips(1)
								])
							}
							player.chooseButton(list,true,2).set('filterButton',button=>{
								var count=_status.event.count;
								if(count==1) return true;
								for(var i=0;i<ui.selected.buttons.length;i++){
									if(get.owner(button.link)==get.owner(ui.selected.buttons[i].link)) return false;
								}
								return true;
							}).set('count',targets.length).set('ai',button=>{
								var player=_status.event.player;
								var card=button.link;
								var owner=get.owner(card);
								var att=get.attitude(player,owner);
								var val=-get.value(card)*att;
								return val;
							});
						}
						else event._result={bool:true,links:weapons};
					}
					else event.finish();
					'step 2'
					if(result.bool){
						var links=result.links;
						var list=[];
						for(var target of targets){
							var weapons=target.getEquips(1);
							weapons=weapons.filter(i=>links.includes(i));
							if(weapons.length){
								list.push([target,weapons]);
							}
						}
						if(list.length==2){
							event.players=list.map(i=>i[0]);
							event.cards=list.map(i=>i[1]);
						}
						else{
							event.players=[list[0][0],list[0][0]];
							event.cards=list[0][1];
						}
						game.loseAsync({
							player:event.players[0],
							target:event.players[1],
							cards1:event.cards[0],
							cards2:event.cards[1],
						}).setContent('swapHandcardsx');
					}
					else event.finish();
					'step 3'
					for(var i=0;i<event.cards[1].length;i++){
						if(get.position(event.cards[1][i],true)=='o') event.players[0].equip(event.cards[1][i]);
					}
					for(var i=0;i<event.cards[0].length;i++){
						if(get.position(event.cards[0][i],true)=='o') event.players[1].equip(event.cards[0][i]);
					}
					'step 4'
					var rangeList=targets.map(target=>{
						return target.getAttackRange();
					});
					for(var i=0;i<targets.length;i++){
						if(rangeList[i]<event.rangeList[i]){
							targets[i].recover();
						}
					}
				},
			},
			//甄宓
			jsrgjixiang:{
				audio:2,
				trigger:{
					global:['chooseToUseBegin','chooseToRespondBegin'],
				},
				filter:function(event,player){
					if(player!=_status.currentPhase) return false;
					if(player==event.player) return false;
					if(!player.countCards('he')) return false;
					for(var name of lib.inpile){
						if(get.type(name)!='basic') continue;
						if(player.getStorage('jsrgjixiang_used').includes(name)) continue;
						var card={name:name,isCard:true};
						if(event.filterCard(card,event.player,event)) return true;
						if(name=='sha'){
							for(var nature of lib.inpile_nature){
								card.nature=nature;
								if(event.filterCard(card,event.player,event)) return true;
							}
						}
					}
					return false;
				},
				direct:true,
				global:'jsrgjixiang_save',
				content:function(){
					'step 0'
					var list=[];
					for(var name of lib.inpile){
						if(get.type(name)!='basic') continue;
						var card={name:name};
						if(trigger.filterCard(card,trigger.player,trigger)) list.push(name);
					}
					var listx=[];
					for(var name of list){
						if(player.getStorage('jsrgjixiang_used').includes(name)) continue;
						listx.push([get.type2(name),'',name]);
						if(name=='sha'){
							for(var nature of lib.inpile_nature){
								if(trigger.filterCard({name:name,nature:nature},player,trigger)){
									listx.push([get.type2(name),'',name,nature]);
								}
							}
						}
					}
					var evt=trigger.getParent();
					var names='';
					for(var i=0;i<list.length;i++){
						names+='【'+get.translation(list[i])+'】';
						names+=i<list.length-2?'、':'或';
					}
					names=names.slice(0,names.length-1);
					var reason=(trigger.name=='chooseToUse'?'使用':'打出');
					var used=player.getStorage('jsrgjixiang_used').filter(name=>list.includes(name));
					var str=get.translation(trigger.player)+(evt.card?'因'+get.translation(evt.card):'')+'需要'+reason+'一张'+names+'，是否弃置一张牌视为其'+reason+'之'+
						(used.length?('（你不能以此法令其'+reason+get.translation(used)+'）'):'')+'？若如此做，你摸一张牌并令〖称贤〗此阶段可发动次数上限+1。';
					event.str=str;
					if(!listx.length) event.finish();
					else if(listx.length==1) event._result={bool:true,links:listx};
					else{
						event.asked=true;
						player.chooseButton([
							'###'+get.prompt('jsrgjixiang',trigger.player)+'###<div class="text center">'+str+'</div>',
							[listx,'vcard'],
						]).set('ai',()=>Math.random()+1);
					}
					event.list=list;
					'step 1'
					if(result.bool){
						var name=result.links[0][2],nature=result.links[0][3];
						var card={name:name,nature:nature,isCard:true};
						event.card=card;
						var evt=trigger.getParent();
						var reason=(trigger.name=='chooseToUse'?'使用':'打出');
						var prompt=event.asked?
							'济乡：是否弃置一张牌'+(trigger.filterTarget?'并选择目标角色':'')+'？':
							get.prompt('jsrgjixiang',trigger.player);
						var str=event.asked?'若如此做，视为'+get.translation(trigger.player)+reason+get.translation(card)+'，然后你摸一张牌并令〖称贤〗此阶段可发动次数上限+1。':event.str;
						var next=player.chooseCardTarget({
							prompt:prompt,
							prompt2:str,
							filterCard:lib.filter.cardDiscardable,
							position:'he',
							goon:get.attitude(player,trigger.player)>1&&(evt.card?get.effect(trigger.player,evt.card,evt.player,player)<0:get.effect(trigger.player,{name:event.list[0]},trigger.player,player)>0),
							ai1:function(card){
								if(_status.event.goon) return 6-get.value(card);
								return 0;
							},
							_get_card:card,
						});
						var keys=['filterTarget','selectTarget','ai2'];
						for(var key of keys) delete next[key];
						for(var i in trigger){
							if(!(i in next)) next[i]=trigger[i];
						}
						next.filterTargetx=trigger.filterTarget||(()=>false);
						next.filterTarget=function(card,player,target){
							var filter=this.filterTargetx;
							if(typeof filter!='function') filter=(()=>filter);
							card=_status.event._get_card;
							player=_status.event.getTrigger().player;
							return this.filterTargetx.apply(this,arguments);
						};
						if(typeof next.selectTarget!='number'&&typeof next.selectTarget!='function'&&get.itemtype(next.selectTarget)!='select') next.selectTarget=-1;
					}
					else event.finish();
					'step 2'
					if(result.bool){
						var cardx=result.cards[0];
						var targets=result.targets||[];
						event.targets=targets;
						player.logSkill('jsrgjixiang',trigger.player);
						player.addTempSkill('jsrgjixiang_used');
						player.markAuto('jsrgjixiang_used',[card.name]);
						player.discard(cardx);
						trigger.untrigger();
						trigger.set('responded',true);
						var result={
							bool:true,
							card:card
						};
						if(targets.length) result.targets=targets;
						trigger.result=result;
						player.draw();
						var phaseName;
						for(var name of lib.phaseName){
							var evt=trigger.getParent(name);
							if(!evt||evt.name!=name) continue;
							phaseName=name;
							break;
						}
						if(phaseName){
							player.addTempSkill('jsrgjixiang_add',phaseName+'After');
							player.addMark('jsrgjixiang_add',1,false);
						}
					}
				},
				subSkill:{
					used:{
						charlotte:true,
						onremove:true,
						mark:true,
						marktext:'乡',
						intro:{
							content:'已触发过牌名：$',
						},
					},
					add:{
						charlotte:true,
						onremove:true,
						mark:true,
						intro:{
							markcount:(storage,player)=>2+(storage||0),
							content:(storage,player)=>'〖称贤〗剩余可发动次数为'+(2+(storage||0)),
						},
					},
					save:{
						charlotte:true,
						ai:{
							save:true,
							skillTagFilter:function(player,arg,target){
								return _status.currentPhase&&_status.currentPhase!=player&&_status.currentPhase.hasSkill('jsrgjixiang')&&_status.currentPhase.countCards('he');
							},
						},
					},
				},
			},
			jsrgchengxian:{
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					if(!player.countCards('hs')) return false;
					if(2+player.countMark('jsrgjixiang_add')<=0) return false;
					for(var name of lib.inpile){
						if(get.type(name)!='trick') continue;
						if(player.getStorage('jsrgchengxian_used').includes(name)) continue;
						if(event.filterCard({name:name},player,event)) return true;
					}
					return false;
				},
				chooseButton:{
					dialog:function(event,player){
						var list=[];
						for(var name of lib.inpile){
							if(player.getStorage('jsrgchengxian_used').includes(name)) continue;
							var info=get.info({name:name});
							if(!info||info.type!='trick') continue;
							if(info.notarget) continue;
							if(!info.selectTarget) continue;
							if(get.type(name)=='trick'&&event.filterCard({name:name},player,event)) list.push(['锦囊','',name]);
						}
						var dialog=ui.create.dialog('称贤',[list,'vcard']);
						return dialog;
					},
					filter:function(button,player){
						return _status.event.getParent().filterCard({name:button.link[2],nature:button.link[3]},player,_status.event.getParent());
					},
					check:function(button){
						if(_status.event.getParent().type!='phase') return 1;
						var player=_status.event.player;
						if(['wugu','zhulu_card','yiyi','lulitongxin','lianjunshengyan','diaohulishan'].includes(button.link[2])) return 0;
						return player.getUseValue({
							name:button.link[2],
							nature:button.link[3],
						});
					},
					backup:function(links,player){
						return {
							audio:'jsrgchengxian',
							filterCard:function(card,player){
								var num=game.countPlayer(current=>{
									return player.canUse(card,current);
								});
								if(!num) return false;
								var cardx=get.copy(lib.skill.jsrgchengxian_backup.viewAs);
								cardx.cards=[card];
								var num2=game.countPlayer(current=>{
									return player.canUse(cardx,current);
								});
								return num==num2;
							},
							popname:true,
							check:function(card){
								return 8-get.value(card);
							},
							position:'hs',
							viewAs:{name:links[0][2]},
							precontent:function(){
								player.logSkill('jsrgchengxian');
								player.addTempSkill('jsrgjixiang_add');
								if(typeof player.storage.jsrgjixiang_add!='number') player.storage.jsrgjixiang_add=0;
								player.storage.jsrgjixiang_add--;
								player.addTempSkill('jsrgchengxian_used');
								player.markAuto('jsrgchengxian_used',[event.result.card.name]);
								delete event.result.skill;
							},
						}
					},
					prompt:function(links,player){
						return '将一张合法目标数与'+(get.translation(links[0][3])||'')+get.translation(links[0][2])+'相同的手牌当此牌使用';
					}
				},
				//理解错了，下面这个不用了
				getNumber:function(card,player){
					var rangex=null;
					var info=get.info(card);
					if(!info) return null;
					if(info.notarget) return null;
					if(info.selectTarget!=undefined){
						var select=get.select(info.selectTarget);
						if(select[0]<0){
							if(!info.toself){
								var count=game.countPlayer(current=>{
									return lib.filter.targetEnabled(card,player,current);
								});
							}
							else count=1;
							rangex=[count,count];
						}
						else rangex=select;
					}
					return rangex;
				},
				ai:{
					order:1,
					result:{
						player:function(player){
							if(_status.event.dying) return get.attitude(player,_status.event.dying);
							return 1;
						},
					},
				},
				subSkill:{
					used:{
						charlotte:true,
						onremove:true,
						mark:true,
						intro:{
							content:'已使用过$',
						},
					},
				},
			},
			//张辽
			jsrgzhengbing:{
				audio:2,
				enable:'phaseUse',
				usable:3,
				filter:function(event,player){
					return player.group=='qun';
				},
				filterCard:lib.filter.cardRecastable,
				check:function(card){
					var player=_status.event.player,val=5+['shan','tao'].includes(get.name(card))*1.5;
					if(player.needsToDiscard()>2&&get.name(card)=='sha'&&player.countCards('hs','sha')>1) val+=0.5;
					return val-get.value(card);
				},
				position:'he',
				groupSkill:true,
				lose:false,
				discard:false,
				delay:false,
				content:function(){
					'step 0'
					player.recast(cards);
					switch(get.name(cards[0])){
						case 'sha':
							player.addTempSkill('jsrgzhengbing_sha');
							player.addMark('jsrgzhengbing_sha',2,false);
							break;
						case 'shan':
							player.draw();
							break;
						case 'tao':
							player.changeGroup('wei');
					}
				},
				ai:{
					order:7,
					result:{player:1},
				},
				subSkill:{
					sha:{
						charlotte:true,
						onremove:true,
						mod:{
							maxHandcard:function(player,num){
								return num+player.countMark('jsrgzhengbing_sha');
							},
						},
						intro:{
							content:'手牌上限+#',
						},
					}
				},
			},
			jsrgtuwei:{
				audio:2,
				trigger:{
					player:'phaseUseBegin',
				},
				filter:function(event,player){
					return player.group=='wei'&&game.hasPlayer(current=>{
						return player.inRange(current)&&current.countGainableCards(player,'he')>0;
					});
				},
				groupSkill:true,
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('jsrgtuwei'),'获得攻击范围内任意名角色的各一张牌。然后回合结束时这些角色中未受过伤害的角色依次获得你的一张牌。',(card,player,target)=>{
						return player.inRange(target)&&target.countGainableCards(player,'he')>0;
					},[1,Infinity]).set('ai',target=>{
						var player=_status.event.player;
						return get.effect(target,{name:'shunshou_copy2'},player,player);
					});
					'step 1'
					if(result.bool){
						var targets=result.targets.slice();
						targets.sortBySeat();
						player.logSkill('jsrgtuwei',targets);
						player.gainMultiple(result.targets,'he');
						player.addTempSkill('jsrgtuwei_backfire');
						player.markAuto('jsrgtuwei_backfire',targets);
					}
				},
				subSkill:{
					backfire:{
						audio:'jsrgtuwei',
						trigger:{
							player:'phaseEnd',
						},
						charlotte:true,
						onremove:true,
						forced:true,
						filter:function(event,player){
							return player.getStorage('jsrgtuwei_backfire').some(target=>{
								return !target.getHistory('damage').length&&target.isIn();
							});
						},
						content:function(){
							'step 0'
							var targets=player.getStorage('jsrgtuwei_backfire').filter(target=>{
								return !target.getHistory('damage').length&&target.isIn();
							});
							event.targets=targets.sortBySeat();
							'step 1'
							var target=targets.shift();
							if(target.isIn()&&player.countGainableCards(target,'he')){
								target.line(player);
								target.gainPlayerCard(player,true,'he');
							}
							if(player.countCards('he')&&targets.length) event.redo();
						},
						ai:{
							effect:{
								player:function(card,player,target){
									if(player!=target&&get.tag(card,'damage')&&target&&player.getStorage('jsrgtuwei_backfire').includes(target)&&!target.getHistory('damage').length) return [1,1,1,0];
								},
							},
						},
					},
				},
			},
			//许贡
			jsrgbiaozhao:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				filter:function(event,player){
					return game.countPlayer(current=>current!=player)>=2;
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('jsrgbiaozhao'),lib.filter.notMe,2).set('ai',target=>{
						var player=_status.event.player;
						var att=get.attitude(player,target);
						if(!ui.selected.targets.length) return att*(Math.sqrt(target.countCards('hs'))+0.1);
						return -att/Math.sqrt(target.countCards('hs')+0.1);
					}).set('targetprompt',['用牌无限制','打你变疼']);
					'step 1'
					if(result.bool){
						var targets=result.targets;
						player.logSkill('jsrgbiaozhao',targets);
						player.addTempSkill('jsrgbiaozhao_syujin',{player:['phaseBegin','die']});
						if(!player.storage.jsrgbiaozhao_syujin) player.storage.jsrgbiaozhao_syujin=[];
						player.storage.jsrgbiaozhao_syujin.push(targets);
						targets[0].addSkill('jsrgbiaozhao_A');
						targets[0].markAuto('jsrgbiaozhao_A',[targets[1]]);
						targets[1].addSkill('jsrgbiaozhao_B');
						targets[1].addMark('jsrgbiaozhao_B'+player.playerid,1,false);
						targets[1].markAuto('jsrgbiaozhao_B',[player]);
					}
				},
				subSkill:{
					syujin:{
						charlotte:true,
						onremove:function(player,skill){
							var list=player.storage.jsrgbiaozhao_syujin;
							for(var targets of list){
								targets[0].unmarkAuto('jsrgbiaozhao_A',[targets[1]]);
								targets[1].unmarkAuto('jsrgbiaozhao_B',[player]);
								delete targets[1].storage['jsrgbiaozhao_B'+player.playerid];
								if(!targets[0].getStorage('jsrgbiaozhao_A')) targets[0].removeSkill('jsrgbiaozhao_A');
								if(!targets[1].getStorage('jsrgbiaozhao_B')) targets[1].removeSkill('jsrgbiaozhao_B');
							}
							delete player.storage.jsrgbiaozhao_syujin;
						},
					},
					A:{
						charlotte:true,
						onremove:true,
						mark:true,
						marktext:'表',
						intro:{
							content:'对$使用牌无次数和距离限制',
						},
						mod:{
							targetInRange:function(card,player,target){
								if(player.getStorage('jsrgbiaozhao_A').includes(target)) return true;
							},
							cardUsableTarget:function(card,player,target){
								if(player.getStorage('jsrgbiaozhao_A').includes(target)) return true;
							},
						},
					},
					B:{
						trigger:{
							source:'damageBegin1',
						},
						charlotte:true,
						forced:true,
						onremove:function(player,skill){
							for(var i in player.storage){
								if(i.indexOf('jsrgbiaozhao_B')==0) delete player.storage[i];
							}
						},
						filter:function(event,player){
							return event.card&&player.getStorage('jsrgbiaozhao_B').includes(event.player);
						},
						content:function(){
							trigger.num+=player.countMark('jsrgbiaozhao_B'+trigger.player.playerid)||1;
						},
						mark:true,
						marktext:'召',
						intro:{
							content:function(storage,player){
								var str='';
								for(var target of storage){
									str+='对'+get.translation(target)+'使用牌造成的伤害+'+player.countMark('jsrgbiaozhao_B'+target.playerid);
								}
								return str;
							}
						},
					},
				}
			},
			jsrgyechou:{
				audio:2,
				trigger:{player:'die'},
				forceDie:true,
				direct:true,
				skillAnimation:true,
				animationColor:'wood',
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('jsrgyechou'),lib.filter.notMe).set('ai',target=>{
						var player=_status.event.player;
						return -get.attitude(player,target);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('jsrgyechou',target);
						target.addSkill('jsrgyechou_effect');
						target.addMark('jsrgyechou_effect',1,false);
					}
				},
				subSkill:{
					effect:{
						trigger:{
							player:'damageBegin3',
						},
						filter:function(event,player){
							return event.num>=player.getHp();
						},
						forced:true,
						charlotte:true,
						onremove:true,
						content:function(){
							trigger.num*=2*player.countMark('jsrgyechou_effect');
						},
						mark:true,
						marktext:'仇',
						intro:{
							content:'当你受到伤害值不小于体力值的伤害时，此伤害翻&倍',
						},
						ai:{
							effect:{
								target:function(card,player,target){
									if(get.tag(card,'damage')){
										if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
										if(target.hp==1) return 2;
									}
								}
							}
						},
					},
				}
			},
			//淳于琼
			jsrgcangchu:{
				audio:'recangchu',
				trigger:{
					global:'phaseJieshuBegin',
				},
				filter:function(event,player){
					if(player.hasSkill('jsrgshishou_blocker')) return false;
					return player.getHistory('gain').length;
				},
				direct:true,
				content:function(){
					'step 0'
					var num=0;
					player.getHistory('gain',evt=>{
						num+=evt.cards.length;
					});
					event.num=num;
					player.chooseTarget(get.prompt('jsrgcangchu'),'令至多'+get.cnNumber(num)+'名角色各摸'+get.cnNumber(num>game.countPlayer()?2:1)+'张牌',[1,num]).set('ai',target=>{
						var player=_status.event.player;
						return get.attitude(player,target)/Math.sqrt(target.countCards('hs')+1);
					});
					'step 1'
					if(result.bool){
						var targets=result.targets.slice();
						targets.sortBySeat();
						player.logSkill('jsrgcangchu',targets);
						game.asyncDraw(targets,num>game.countPlayer()?2:1);
						game.delayex();
					}
				},
			},
			jsrgshishou:{
				audio:'reshishou',
				trigger:{
					player:'useCard',
				},
				forced:true,
				filter:function(event,player){
					return event.card.name=='jiu';
				},
				group:'jsrgshishou_burn',
				content:function(){
					'step 0'
					player.draw(3);
					player.addTempSkill('jsrgshishou_nouse');
				},
				mod:{
					aiOrder:function(player,card,num){
						if(card.name=='jiu') return 0.01;
					},
				},
				ai:{
					effect:{
						player_use:function(card,player,target){
							if(card.name=='jiu') return [1,1];
						},
					}
				},
				subSkill:{
					nouse:{
						charlotte:true,
						mod:{
							cardEnabled:function(card,player){
								return false;
							},
							cardUsable:function(card,player){
								return false;
							},
							cardSavable:function(card,player){
								return false;
							},
						},
						mark:true,
						marktext:'失',
						intro:{
							content:'喝醉了，不能再使用牌',
						}
					},
					burn:{
						audio:'reshishou',
						trigger:{
							player:'damageEnd',
						},
						forced:true,
						filter:function(event,player){
							return event.hasNature('fire');
						},
						content:function(){
							player.addTempSkill('jsrgshishou_blocker',{player:'phaseEnd'});
						}
					},
					blocker:{
						charlotte:true,
						mark:true,
						marktext:'守',
						intro:{
							content:'〖仓储〗失效直到下回合结束',
						}
					}
				},
			},
			//江山如故·起
			sbyingmen:{
				trigger:{
					global:'phaseBefore',
					player:'enterGame',
				},
				forced:true,
				filter:function(event,player){
					return event.name!='phase'||game.phaseNumber==0;
				},
				content:function(){
					if(!_status.characterlist) lib.skill.pingjian.initList();
					var characters=_status.characterlist.randomRemove(4);
					lib.skill.sbyingmen.addVisitors(characters,player);
					game.delayx();
				},
				group:'sbyingmen_reload',
				subSkill:{
					reload:{
						trigger:{player:'phaseBegin'},
						forced:true,
						locked:false,
						filter:function(event,player){
							return player.getStorage('sbyingmen').length<4;
						},
						content:function(){
							if(!_status.characterlist) lib.skill.pingjian.initList();
							var characters=_status.characterlist.randomRemove(4-player.getStorage('sbyingmen').length);
							lib.skill.sbyingmen.addVisitors(characters,player);
							game.delayx();
						},
					},
				},
				getSkills:function(characters,player){
					var skills=[];
					for(var name of characters){
						if(Array.isArray(lib.character[name])){
							for(var skill of lib.character[name][3]){
								var list=get.skillCategoriesOf(skill,player);
								list.remove('锁定技');
								if(list.length>0) continue;
								var info=get.info(skill);
								if(info&&(!info.unique||info.gainable)){
									// lib.skill.rehuashen.createAudio(name,skill,'jsrg_xushao');
									skills.add(skill);
								}
							}
						}
					}
					return skills;
				},
				addVisitors:function(characters,player){
					player.addSkillBlocker('sbyingmen');
					game.log(player,'将','#y'+get.translation(characters),'加入了','#g“访客”');
					game.broadcastAll(function(player,characters){
						player.tempname.addArray(characters);
						player.$draw(characters.map(function(name){
							var cardname='huashen_card_'+name;
							lib.card[cardname]={
								fullimage:true,
								image:'character:'+name
							};
							lib.translate[cardname]=get.rawName2(name);
							return game.createCard(cardname,' ',' ');
						}),'nobroadcast');
					},player,characters);
					player.markAuto('sbyingmen',characters)
					var storage=player.getStorage('sbyingmen');
					var skills=lib.skill.sbyingmen.getSkills(storage,player);
					player.addInvisibleSkill(skills);
				},
				removeVisitors:function(characters,player){
					var skills=lib.skill.sbyingmen.getSkills(characters,player);
					var characters2=player.getStorage('sbyingmen').slice(0);
					characters2.removeArray(characters);
					skills.removeArray(lib.skill.sbyingmen.getSkills(characters2,player));
					game.broadcastAll((player,characters)=>player.tempname.removeArray(characters),player,characters);
					player.unmarkAuto('sbyingmen',characters);
					_status.characterlist.addArray(characters);
					player.removeInvisibleSkill(skills);
				},
				onremove:function(player,skill){
					lib.skill.sbyingmen.removeVisitors(player.getSkills('sbyingmen'),player);
					player.removeSkillBlocker('sbyingmen');
				},
				skillBlocker:function(skill,player){
					if(!player.invisibleSkills.includes(skill)||skill=='sbpingjian'||skill=='sbpingjian') return false;
					return !player.hasSkill('sbpingjian');
				},
				marktext:'客',
				intro:{
					name:'访客',
					mark:function(dialog,storage,player){
						if(!storage||!storage.length) return '当前没有“访客”';
						dialog.addSmall([storage,'character']);
						var skills=lib.skill.sbyingmen.getSkills(storage,player);
						if(skills.length) dialog.addText('<li>当前可用技能：'+get.translation(skills),false);
					},
				},
			},
			sbpingjian:{
				trigger:{player:['useSkill','logSkillBegin']},
				forced:true,
				locked:false,
				filter:function(event,player){
					var skill=event.sourceSkill||event.skill;
					return player.invisibleSkills.includes(skill)&&lib.skill.sbyingmen.getSkills(player.getStorage('sbyingmen'),player).includes(skill);
				},
				content:function(){
					'step 0'
					var visitors=player.getStorage('sbyingmen').slice(0);
					var drawers=visitors.filter(function(name){
						return Array.isArray(lib.character[name])&&lib.character[name][3].includes(trigger.sourceSkill);
					});
					event.drawers=drawers;
					if(visitors.length==1) event._result={bool:true,links:visitors};
					else{
						var dialog=['评鉴：请选择移去一张“访客”'];
						if(drawers.length) dialog.push('<div class="text center">如果移去'+get.translation(drawers)+'，则你摸一张牌</div>');
						dialog.push([visitors,'character']);
						player.chooseButton(dialog,true);
					}
					'step 1'
					if(result.bool){
						lib.skill.sbyingmen.removeVisitors(result.links,player);
						game.log(player,'移去了','#y'+get.translation(result.links[0]));
						if(event.drawers.includes(result.links[0])){
							player.addTempSkill('sbpingjian_draw');
							player.storage.sbpingjian_draw.push(trigger.skill);
						}
					}
				},
				group:'sbpingjian_trigger',
				subSkill:{
					draw:{
						charlotte:true,
						init:function(player,skill){
							if(!player.storage[skill]) player.storage[skill]=[];
						},
						onremove:true,
						trigger:{player:['useSkillAfter','logSkill']},
						forced:true,
						popup:false,
						filter:function(event,player){
							return player.getStorage('sbpingjian_draw').includes(event.skill);
						},
						content:function(){
							player.storage.sbpingjian_draw.remove(trigger.skill);
							player.draw();
							if(!player.storage.sbpingjian_draw.length) player.removeSkill('sbpingjian_draw');
						},
					},
					trigger:{
						trigger:{player:'triggerInvisible'},
						forced:true,
						forceDie:true,
						popup:false,
						charlotte:true,
						priority:10,
						filter:function(event,player){
							if(event.revealed) return false;
							var info=get.info(event.skill);
							if(info.charlotte) return false;
							var skills=lib.skill.sbyingmen.getSkills(player.getStorage('sbyingmen'),player);
							game.expandSkills(skills);
							return skills.includes(event.skill);
						},
						content:function(){
							"step 0"
							if(get.info(trigger.skill).silent){
								event.finish();
							}
							else{
								var info=get.info(trigger.skill);
								var event=trigger,trigger=event._trigger;
								var str;
								var check=info.check;
								if(info.prompt) str=info.prompt;
								else{
									if(typeof info.logTarget=='string'){
										str=get.prompt(event.skill,trigger[info.logTarget],player);
									}
									else if(typeof info.logTarget=='function'){
										var logTarget=info.logTarget(trigger,player);
										if(get.itemtype(logTarget).indexOf('player')==0) str=get.prompt(event.skill,logTarget,player);
									}
									else{
										str=get.prompt(event.skill,null,player);
									}
								}
								if(typeof str=='function'){str=str(trigger,player)}
								var next=player.chooseBool('评鉴：'+str);
								next.set('yes',!info.check||info.check(trigger,player));
								next.set('hsskill',event.skill);
								next.set('forceDie',true);
								next.set('ai',function(){
									return _status.event.yes;
								});
								if(typeof info.prompt2=='function'){
									next.set('prompt2',info.prompt2(trigger,player));
								}
								else if(typeof info.prompt2=='string'){
									next.set('prompt2',info.prompt2);
								}
								else if(info.prompt2!=false){
									if(lib.dynamicTranslate[event.skill]) next.set('prompt2',lib.dynamicTranslate[event.skill](player,event.skill));
									else if(lib.translate[event.skill+'_info']) next.set('prompt2',lib.translate[event.skill+'_info']);
								}
								if(trigger.skillwarn){
									if(next.prompt2){
										next.set('prompt2','<span class="thundertext">'+trigger.skillwarn+'。</span>'+next.prompt2);
									}
									else{
										next.set('prompt2',trigger.skillwarn);
									}
								}
							}
							"step 1"
							if(result.bool){
								trigger.revealed=true;
							}
							else{
								trigger.untrigger();
								trigger.cancelled=true;
							}
						}
					},
				},
			},
			jsrgchaozheng:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				logTarget:function(event,player){
					return game.filterPlayer(i=>i!=player);
				},
				prompt:'是否发动【朝争】？',
				content:function(){
					player.chooseToDebate(game.filterPlayer(i=>i!=player)).set('callback',lib.skill.jsrgchaozheng.callback);
				},
				callback:function(){
					var result=event.debateResult;
					if(result.bool&&result.opinion){
						var opinion=result.opinion,targets=result.red.map(i=>i[0]);
						targets.sortBySeat();
						targets.forEach(i=>i[opinion=='red'?'recover':'loseHp']());
						if(targets.length==0||result.black.length==0) player.draw(result.targets.length);
					}
				}
			},
			jsrgshenchong:{
				audio:2,
				enable:'phaseUse',
				limited:true,
				filterTarget:lib.filter.notMe,
				skillAnimation:true,
				animationColor:'soil',
				content:function(){
					'step 0'
					player.awakenSkill('jsrgshenchong');
					target.addSkillLog('jsrgfeiyang');
					target.addSkillLog('jsrgbahu');
					'step 1'
					player.addSkill('jsrgshenchong_die');
					player.markAuto('jsrgshenchong_die',[target]);
				},
				ai:{
					order:1,
					result:{target:1}
				},
				subSkill:{
					die:{
						audio:'jsrgshenchong',
						trigger:{player:'die'},
						charlotte:true,
						forced:true,
						forceDie:true,
						filter:function(event,player){
							return player.getStorage('jsrgshenchong_die').length;
						},
						content:function(){
							var targets=player.getStorage('jsrgshenchong_die');
							player.line(targets);
							targets.sortBySeat().forEach(current=>{
								current.clearSkills(true);
								current.chooseToDiscard(current.countCards('h'),'h',true);
							});
						}
					}
				}
			},
			jsrgfeiyang:{
				trigger:{player:'phaseJudgeBegin'},
				direct:true,
				filter:function(event,player){
					return player.countCards('j')&&player.countCards('h')>1;
				},
				content:function(){
					'step 0'
					player.chooseToDiscard('h',2,get.prompt('jsrgfeiyang'),'弃置两张手牌并弃置判定区里的一张牌').set('logSkill','jsrgfeiyang').set('ai',function(card){
						if(_status.event.goon) return 6-get.value(card);
						return 0;
					}).set('goon',(()=>{
						if(player.hasSkillTag('rejudge')&&player.countCards('j')<2) return false;
						return player.hasCard(function(card){
							if(get.tag(card,'damage')&&get.damageEffect(player,player,_status.event.player,get.natureList(card))>=0) return false;
							return get.effect(player,{
								name:card.viewAs||card.name,
								cards:[card],
							},player,player)<0;
						},'j');
					})());
					'step 1'
					if(result.bool){
						player.discardPlayerCard(player,'j',true);
					}
				},
			},
			jsrgbahu:{
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				content:function(){
					player.draw();
				},
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=='sha') return num+1;
					},
				},
			},
			jsrgjulian:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				filter:function(event,player){
					return player.hasZhuSkill('jsrgjulian')&&lib.skill.jsrgjulian.logTarget(null,player).length;
				},
				prompt:'是否发动【聚敛】？',
				prompt2:'你可以获得其他所有群势力角色的各一张牌',
				logTarget:function(event,player){
					return game.filterPlayer(current=>{
						return current.group=='qun'&&current.countGainableCards(player,'he')>0&&current!=player;
					})
				},
				content:function(){
					game.filterPlayer(current=>{
						return current.group=='qun'&&current!=player;
					}).sortBySeat().forEach(i=>{
						player.gainPlayerCard(i,'he',true);
					});
				},
				group:'jsrgjulian_draw',
				zhuSkill:true,
				subSkill:{
					draw:{
						audio:'jsrgjulian',
						trigger:{global:'gainAfter'},
						filter:function(event,player){
							var source=event.player;
							if(source==player||source.group!='qun') return false;
							var evt=event.getParent('phaseDraw');
							return (!evt||evt.player!=source)&&event.getParent().name=='draw'&&event.getParent(2).name!='jsrgjulian_draw'&&player.hasZhuSkill('jsrgjulian',event.player);
						},
						direct:true,
						usable:2,
						content:function(){
							'step 0'
							var source=trigger.player;
							event.source=source;
							source.chooseBool('是否响应'+get.translation(player)+'的【聚敛】摸一张牌？');
							'step 1'
							if(result.bool){
								source.logSkill('jsrgjulian_draw',player);
								source.draw();
							}
							else player.storage.counttrigger.jsrgjulian_draw--;
						}
					},
					give:{
						charlotte:true,
						onremove:true
					}
				}
			},
			//何进
			jsrgzhaobing:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				filter:function(event,player){
					var hs=player.getCards('h');
					if(!hs.length) return false;
					for(var i of hs){
						if(!lib.filter.cardDiscardable(i,player,'jsrgzhaobing')) return false;
					}
					return true;
				},
				content:function(){
					'step 0'
					var cards=player.getCards('h');
					var num=cards.length;
					var prompt2='弃置所有手牌，令至多'+get.cnNumber(num)+'名其他角色依次选择一项：1.正面向上交给你一张【杀】；2.失去1点体力';
					player.chooseTarget(get.prompt('jsrgzhaobing'),prompt2,[1,num],lib.filter.notMe).set('ai',target=>{
						if(!_status.event.goon) return 0;
						return 2-get.attitude(_status.event.player,target);
					}).set('goon',num/2<game.countPlayer(current=>{
						return 2-get.attitude(player,current)>0;
					}));
					'step 1'
					if(result.bool){
						player.logSkill('jsrgzhaobing',result.targets);
						event.targets=result.targets;
						event.targets.sortBySeat();
						player.chooseToDiscard(true,'h',player.countCards('h'));
					}
					else event.finish();
					'step 2'
					var target=targets.shift();
					event.target=target;
					target.chooseCard('诏兵：交给'+get.translation(player)+'一张【杀】，或失去1点体力',(card)=>{
						return get.name(card)=='sha';
					}).set('ai',card=>{
						if(_status.event.goon) return 0;
						return 6-get.value(card);
					}).set('goon',get.effect(target,{name:'losehp'},target,target)>=0);
					'step 3'
					if(result.bool) target.give(result.cards,player,true);
					else target.loseHp();
					if(targets.length) event.goto(2);
				},
				ai:{
					expose:0.2
				}
			},
			jsrgzhuhuan:{
				audio:'mouzhu',
				trigger:{player:'phaseZhunbeiBegin'},
				filter:function(event,player){
					var hs=player.getCards('h','sha');
					if(!hs.length) return false;
					for(var i of hs){
						if(!lib.filter.cardDiscardable(i,player,'jsrgzhuhuan')) return false;
					}
					return true;
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('jsrgzhuhuan'),lib.filter.notMe).set('ai',target=>{
						var player=_status.event.player;
						return get.damageEffect(target,player,player);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('jsrgzhuhuan',target);
						var hs=player.getCards('h','sha');
						event.num=hs.length;
						player.discard(hs);
					}
					else event.finish();
					'step 2'
					target.chooseToDiscard(get.translation(player)+'对你发动了【诛宦】','弃置'+get.cnNumber(num)+'张牌并失去1点体力；或点击“取消”令其回复1点体力且其摸'+get.cnNumber(num)+'张牌').set('ai',card=>{
						if(_status.event.goon) return 0;
						return 5.5-get.value(card);
					}).set('goon',target.hp<=2||get.attitude(target,player)>=0||player.isHealthy());
					'step 3'
					if(result.bool){
						target.loseHp();
					}
					else{
						player.draw(num);
						player.recover();
					}
				},
				ai:{
					expose:0.2
				}
			},
			jsrgyanhuo:{
				inherit:'spyanhuo',
				forced:true,
			},
			//孙坚
			jsrgpingtao:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterTarget:lib.filter.notMe,
				content:function(){
					'step 0'
					var att=get.attitude(target,player);
					target.chooseCard(get.translation(player)+'对你发动了【平讨】','交给其一张牌并令其此回合使用【杀】的次数上限+1；或点击“取消”令其视为对你使用一张【杀】','he').set('ai',card=>{
						if(_status.event.give){
							if(card.name=='sha'||card.name=='tao'||card.name=='jiu') return 0;
							return 8-get.value(card);
						}
						if(_status.event.att<0&&card.name=='sha') return -1;
						return 4-get.value(card);
					}).set('give',(att>=0||target.hp==1&&target.countCards('hs','shan')<=1)&&get.effect(target,{name:'sha'},player,target)<0).set('att',att);
					'step 1'
					if(result.bool){
						target.give(result.cards,player);
						player.addTempSkill('jsrgpingtao_sha');
						player.addMark('jsrgpingtao_sha',1,false);
					}
					else if(player.canUse('sha',target,false)){
						player.useCard({name:'sha',isCard:true},target,false);
					}
				},
				ai:{
					expose:0.15,
					order:5,
					result:{target:-1}
				},
				subSkill:{
					sha:{
						charlotte:true,
						onremove:true,
						marktext:'讨',
						intro:{
							content:'本回合使用【杀】的次数上限+#',
						},
						mod:{
							cardUsable:function(card,player,num){
								if(card.name=='sha') return num+player.countMark('jsrgpingtao_sha');
							},
						}
					}
				}
			},
			jsrgjuelie:{
				audio:2,
				trigger:{player:'useCardToPlayered'},
				filter:function(event,player){
					return player.countCards('he')&&event.card.name=='sha';
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseToDiscard(get.prompt('jsrgjuelie',trigger.target),'当你使用【杀】指定一名角色为目标后，你可以弃置任意张牌，然后弃置其等量的牌',[1,Infinity],'he').set('ai',card=>{
						if(ui.selected.cards.length>=_status.event.max) return 0;
						if(_status.event.goon) return 4.5-get.value(card);
						return 0;
					}).set('max',trigger.target.countDiscardableCards(player,'he')).set('goon',get.attitude(player,trigger.target)<0).set('logSkill',['jsrgjuelie_discard',trigger.target]);
					'step 1'
					if(result.bool){
						var num=result.cards.length;
						if(trigger.target.countDiscardableCards(player,'he')) player.discardPlayerCard('平讨：弃置'+get.translation(trigger.target)+get.cnNumber(num)+'张牌',num,'he',trigger.target,true);
					}
					/*
					else event.finish();
					'step 2'
					if(player.isMinHandcard()||player.isMinHp()){
						var id=trigger.target.playerid;
						var map=trigger.getParent().customArgs;
						if(!map[id]) map[id]={};
						if(typeof map[id].extraDamage!='number'){
							map[id].extraDamage=0;
						}
						map[id].extraDamage++;
					}
					*/
				},
				shaRelated:true,
				ai:{
					unequip_ai:true,
					skillTagFilter:function(player,tag,arg){
						if(!arg||!arg.name||arg.name!='sha') return false;
						if(!arg.target) return false;
						var card=arg.target.getEquip(2);
						return card&&get.value(card)>0&&player.hasCard(cardx=>{
							return lib.filter.cardDiscardable(cardx,player,'jsrgjuelie_discard')&&get.value(cardx)<5;
						});
					},
				},
				group:'jsrgjuelie_pojun',
				subSkill:{
					pojun:{
						trigger:{source:'damageBegin1'},
						filter:function(event,player){
							if(!player.isMinHandcard()&&!player.isMinHp()) return false;
							return event.getParent().name=='sha';
						},
						forced:true,
						locked:false,
						logTarget:'player',
						content:function(){
							trigger.num++;
						},
					},
				},
			},
			//皇甫嵩
			jsrgguanhuo:{
				audio:2,
				trigger:{player:'useCardAfter'},
				filter:function(event,player){
					return event.card.storage&&event.card.storage.jsrgguanhuo&&!game.hasPlayer2(current=>{
						return current.hasHistory('damage',evt=>evt.card==event.card);
					});
				},
				forced:true,
				locked:false,
				group:'jsrgguanhuo_viewas',
				content:function(){
					'step 0'
					var count=player.getHistory('useSkill',evt=>evt.skill=='jsrgguanhuo_viewas').length;
					if(count==1){
						player.addTempSkill('jsrgguanhuo_ex','phaseUseAfter');
						player.addMark('jsrgguanhuo_ex',1,false);
						trigger.targets.forEach(i=>i.removeSkill('huogong2'));
					}
					else{
						player.removeSkills('jsrgguanhuo');
					}
				},
				ai:{
					effect:{
						player:function(card,player){
							if(_status.event.getParent().skill=='jsrgguanhuo_viewas'&&player.getHistory('useSkill',evt=>evt.skill=='jsrgguanhuo_viewas').length==1) return 'zeroplayertarget';
							if(_status.event.type=='phase'&&_status.event.skill=='jsrgguanhuo_viewas'&&player.getHistory('useSkill',evt=>evt.skill=='jsrgguanhuo_viewas').length>1&&player.countCards('h')<=3) return [0,0];
						}
					}
				},
				subSkill:{
					viewas:{
						audio:'jsrgguanhuo',
						enable:'phaseUse',
						viewAs:{
							name:'huogong',
							isCard:true,
							storage:{
								jsrgguanhuo:true
							}
						},
						filterCard:()=>false,
						selectCard:-1,
						prompt:'视为使用一张【火攻】',
						ai:{
							order:function(item,player){
								return get.order({name:'huogong'})+0.01;
							},
						}
					},
					ex:{
						trigger:{source:'damageBegin1'},
						filter:function(event,player){
							return event.card&&event.card.name=='huogong'&&event.getParent().type=='card';
						},
						forced:true,
						charlotte:true,
						onremove:true,
						intro:{content:'当你造成渠道为【火攻】的伤害时，此伤害+#'},
						content:function(){
							trigger.num+=player.countMark('jsrgguanhuo_ex');
						}
					}
				}
			},
			jsrgjuxia:{
				audio:2,
				trigger:{target:'useCardToTargeted'},
				usable:1,
				countSkill:function(player){
					return player.getSkills(null,false,false).filter(function(skill){
						var info=get.info(skill);
						if(!info||info.charlotte) return false;
						if(info.zhuSkill) return player.hasZhuSkill(skill);
						return true;
					}).length;
				},
				filter:function(event,player){
					return event.player!=player&&lib.skill.jsrgjuxia.countSkill(event.player)>lib.skill.jsrgjuxia.countSkill(player);
				},
				direct:true,
				content:function(){
					'step 0'
					var goon=get.effect(player,trigger.card,trigger.player,trigger.player)<1;
					if(goon&&!event.isMine()&&!event.isOnline()) game.delayx();
					trigger.player.chooseBool('是否对'+get.translation(player)+'发动【居下】？','令'+get.translation(trigger.card)+'对其无效，然后其摸两张牌').set('ai',()=>{
						return _status.event.goon;
					}).set('goon',goon);
					'step 1'
					if(result.bool){
						trigger.player.logSkill('jsrgjuxia',player);
						trigger.excluded.add(player);
						player.draw(2);
					}
					else player.storage.counttrigger.jsrgjuxia--;
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(lib.skill.jsrgjuxia.countSkill(target)>=lib.skill.jsrgjuxia.countSkill(player)) return;
							if(card&&(card.cards||card.isCard)&&get.attitude(target,player)>0&&(!target.storage.counttrigger||!target.storage.counttrigger.jsrgjuxia)) return [0,0.5,0,0.5];
						},
					},
				}
			},
			//许劭
			jsrgyingmen:{
				audio:2,
				trigger:{
					global:'phaseBefore',
					player:['enterGame','phaseBegin'],
				},
				forced:true,
				filter:function(event,player,name){
					if(player.getStorage('jsrgyingmen').length>=4) return false;
					if(name=='phaseBefore') return game.phaseNumber==0;
					return event.name!='phase'||event.player==player;
				},
				update:function(player){
					var id=player.playerid;
					var characters=player.getStorage('jsrgyingmen');
					var skillName='jsrgpingjian_'+id;
					var skillsx=[],skillsx2=[];
					var map={};
					var skillsy=lib.skill[skillName]?lib.skill[skillName].group:[];
					for(var name of characters){
						var skills=lib.character[name][3].slice();
						skills=skills.filter(skill=>{
							var list=get.skillCategoriesOf(skill,player);
							list.removeArray(['锁定技','Charlotte']);
							if(list.length) return false;
							var info=get.info(skill);
							return info&&(!info.unique||info.gainable);
						});
						game.expandSkills(skills);
						for(var i=0;i<skills.length;i++){
							var skill=skills[i];
							var info=get.info(skill);
							if(info.silent||info.charlotte) continue;
							if(!info.forced&&!info.frequent&&(!info.mod||info.charlotte&&info.mod)) continue;
							var infox=get.copy(info);
							var newname=skill+'_'+id;
							map[newname]=infox;
							if(info.audio) infox.audio=(typeof info.audio!='number')?info.audio:skill;
							// if(infox.group) delete infox.group;
							if(infox.frequent) delete infox.frequent;
							if(infox.forceDie) delete infox.forceDie;
							var popup=infox.popup;
							if(infox.forced&&infox.direct){
								delete infox.direct;
								infox.popup=false;
							}
							if(infox.forced&&!infox.prompt2){
								var skillx=skill;
								while(true){
									var prompt2=lib.translate[skillx+'_info'];
									if(prompt2&&prompt2.length){
										infox.prompt2=prompt2;
										break;
									}
									var ind=skillx.lastIndexOf('_');
									if(ind==-1) break;
									skillx=skillx.slice(0,ind);
								}
							}
							if(popup!=false&&!infox.silent) infox.forced=false;
							if(!infox.charlotte&&infox.mod) delete infox.mod;
							skillsx2.add(skill);
							skills[i]=newname;
						}
						if(skills.length){
							skillsx.addArray(skills);
						}
					}
					var skillsRemoving=skillsy.removeArray(skillsx);
					player.removeSkill(skillsRemoving);
					game.broadcastAll(function(name,skillsx,skillsx2,id,map){
						for(var i in map) lib.skill[i]=map[i];
						lib.skill[name]={
							unique:true,
							group:skillsx
						};
						lib.translate[name]='评鉴';
						for(var i of skillsx2){
							lib.translate[i+'_'+id]=lib.translate[i];
							lib.translate[i+'_'+id+'_info']=lib.translate[i+'_info'];
						}
					},skillName,skillsx,skillsx2,id,map);
					player.addSkill(skillName);
					player.addSkill('jsrgpingjian_blocker');
					player.addSkillTrigger(skillName);
				},
				bannedList:['zishu','weishu','xinfu_zhanji','kyouko_rongzhu'],
				content:function(){
					'step 0'
					if(!_status.characterlist) lib.skill.pingjian.initList();
					var num=player.getStorage('jsrgyingmen').length;
					var list=[];
					_status.characterlist.randomSort();
					for(var i=0;i<_status.characterlist.length;i++){
						var name=_status.characterlist[i];
						var skills=lib.character[name][3].slice();
						if(skills.some(skill=>{
							return lib.skill.jsrgyingmen.bannedList.includes(skill);
						})) continue;
						list.push(name);
						_status.characterlist.remove(name);
						if(list.length>=4-num) break;
					}
					if(list.length){
						player.markAuto('jsrgyingmen',list);
						if(player.hasSkill('jsrgpingjian',null,false,false)) lib.skill.jsrgyingmen.update(player);
						game.log(player,'将','#g'+get.translation(list),'置为','#y访客');
						game.broadcastAll(function(player,list){
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
						},player,list);
					}
				},
				ai:{
					combo:'jsrgpingjian'
				},
				marktext:'客',
				intro:{
					name:'访客(盈门/评鉴)',
					mark:function(dialog,storage,player){
						dialog.addText('剩余“访客”');
						if(storage) dialog.addSmall([storage,'character']);
						else dialog.addText('无');
					},
				}
			},
			jsrgpingjian:{
				audio:2,
				trigger:{player:['logSkill','useSkillAfter']},
				forced:true,
				locked:false,
				onremove:function(player){
					player.removeSkill('jsrgpingjian_'+player.playerid);
				},
				filter:function(event,player){
					var skill=event.skill,name=event.event?event.event.name:'';
					var visitors=player.getStorage('jsrgyingmen');
					for(var visitor of visitors){
						var skills=lib.character[visitor][3].slice();
						game.expandSkills(skills);
						var info=get.info(skill);
						if(info&&(info.charlotte||info.silent)) continue;
						if(skills.some(skillx=>{
							return skill.indexOf(skillx)==0||name.indexOf(skillx+'_'+player.playerid)==0;
						})) return true;
					}
					return false;
				},
				content:function(){
					'step 0'
					var current;
					var skill=trigger.skill,name=trigger.event?trigger.event.name:'';
					var visitors=player.getStorage('jsrgyingmen');
					for(var visitor of visitors){
						var skills=lib.character[visitor][3].slice();
						game.expandSkills(skills);
						var info=get.info(skill);
						if(info&&info.charlotte) continue;
						if(skills.some(skillx=>{
							return skill.indexOf(skillx)==0||name.indexOf(skillx+'_'+player.playerid)==0;
						})){
							current=visitor;
							break;
						}
					}
					event.current=current;
					player.chooseButton(['###评鉴：移去一名访客###<div class="text center">若移去的访客为'+get.translation(current)+'，则你摸一张牌</div>',[player.getStorage('jsrgyingmen'),'character']],true).set('ai',button=>{
						if(button.link==_status.event.toremove) return 1;
						return Math.random();
					}).set('toremove',function(){
						var list=player.getStorage('jsrgyingmen');
						var rand=Math.random();
						if(rand<0.33) return list[0];
						if(rand<0.66) return current;
						return list.randomGet();
					}());
					'step 1'
					if(result.bool){
						var visitor=result.links[0];
						game.log(player,'从','#y访客','中移去了','#g'+get.translation(visitor));
						player.popup(visitor);
						player.unmarkAuto('jsrgyingmen',[visitor]);
						_status.characterlist.add(visitor);
						if(visitor==event.current) player.draw();
						lib.skill.jsrgyingmen.update(player);
					}
				},
				subSkill:{
					blocker:{
						init:function(player,skill){
							player.addSkillBlocker(skill);
						},
						onremove:function(player,skill){
							player.removeSkillBlocker(skill);
						},
						charlotte:true,
						locked:true,
						skillBlocker:function(skill,player){
							if(skill!='jsrgpingjian_'+player.playerid) return false;
							if(player._jsrgpingjian_blockerChecking) return;
							player._jsrgpingjian_blockerChecking=true;
							var own=player.hasSkill('jsrgpingjian');
							delete player._jsrgpingjian_blockerChecking;
							return !own;
						}
					},
				}
			},
			//董白
			jsrgshichong:{
				audio:2,
				zhuanhuanji:true,
				trigger:{player:'useCardToPlayered'},
				direct:true,
				filter:function(event,player){
					return event.target!=player&&event.targets.length==1&&event.target.isIn()&&event.target.countCards('h');
				},
				mark:true,
				marktext:'☯',
				intro:{
					content:function(storage,player){
						var str='转换技。当你使用牌指定其他角色为唯一目标后，';
						if(storage) return str+'目标角色可以交给你一张手牌。';
						return str+'你可以获得目标角色一张手牌。';
					},
				},
				content:function(){
					'step 0'
					if(!player.storage.jsrgshichong){
						player.chooseBool(get.prompt('jsrgshichong',trigger.target),'你可以获得该角色的一张手牌').set('ai',()=>{
							return _status.event.bool;
						}).set('bool',get.attitude(player,trigger.target)<=0);
					}
					else{
						trigger.target.chooseCard('是否发动'+get.translation(player)+'的【恃宠】？','你可以选择一张手牌，并交给该角色').set('ai',card=>{
							if(_status.event.goon) return 5-get.value(card);
							return 0-get.value(card);
						}).set('goon',get.attitude(trigger.target,player)>2);
					}
					'step 1'
					if(result.bool){
						if(!player.storage.jsrgshichong){
							player.logSkill('jsrgshichong',trigger.target);
							player.gainPlayerCard(trigger.target,'h',true);
						}
						else{
							trigger.target.logSkill('jsrgshichong',player);
							trigger.target.give(result.cards,player);
						}
						player.changeZhuanhuanji('jsrgshichong');
					}
				}
			},
			jsrglianzhu:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterCard:{color:'black'},
				position:'h',
				filterTarget:lib.filter.notMe,
				lose:false,
				discard:false,
				delay:false,
				content:function(){
					'step 0'
					player.showCards(cards,get.translation(player)+'发动了【连诛】');
					'step 1'
					player.give(cards,target);
					'step 2'
					event.targets=game.filterPlayer(current=>{
						return current.group==target.group&&current!=player;
					}).sortBySeat();
					game.delayx();
					'step 3'
					var target=targets.shift();
					if(player.canUse('guohe',target)){
						player.useCard({name:'guohe',isCard:true},target);
					}
					if(targets.length) event.redo();
				},
				ai:{
					order:4,
					result:{
						target:function(player,target){
							var targets=game.filterPlayer(current=>{
								return current.group==target.group&&current!=player;
							});
							var eff=targets.reduce((p,c)=>{
								return p+get.effect(c,{name:'guohe'},player,player);
							},0)
							if(ui.selected.cards.length) eff+=get.value(ui.selected.cards[0],target);
							return eff;
						}
					}
				}
			},
			//桥玄
			jsrgjuezhi:{
				audio:2,
				trigger:{source:'damageBegin1'},
				filter:function(event,player){
					if(_status.currentPhase!=player||player.hasSkill('jsrgjuezhi_used',null,null,false)) return false;
					return event.card&&event.getParent().type=='card'&&lib.skill.jsrgjuezhi.getNum(event.player,player)>0;
				},
				forced:true,
				locked:false,
				getNum:function(target,player){
					return target.countCards('e',card=>{
						var subtype=get.subtypes(card);
						for(var i of subtype){
							if(player.hasDisabledSlot(i)) return true;
						}
						return false;
					});
				},
				group:'jsrgjuezhi_disable',
				content:function(){
					player.addTempSkill('jsrgjuezhi_used',['phaseZhunbeiAfter','phaseJudgeAfter','phaseDrawAfter','phaseUseAfter','phaseDiscardAfter','phaseJieshuAfter']);
					trigger.num+=lib.skill.jsrgjuezhi.getNum(trigger.player,player);
				},
				subSkill:{
					disable:{
						audio:'jsrgjuezhi',
						trigger:{
							player:'loseAfter',
							global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
						},
						direct:true,
						filter:function(event,player){
							var evt=event.getl(player);
							return evt&&evt.es&&evt.es.length>0;
						},
						content:function(){
							'step 0'
							event.cards=trigger.getl(player).es;
							'step 1'
							var card=cards.shift(),subtypes=get.subtypes(card).filter(slot=>player.hasEnabledSlot(slot));
							event.subtypes=subtypes;
							if(subtypes.length>0){
								player.chooseBool(get.prompt('jsrgjuezhi_disable'),'废除你的'+get.translation(subtypes)+'栏').set('ai',()=>1);
							}
							else event._result={bool:false};
							'step 2'
							if(result.bool){
								player.logSkill('jsrgjuezhi_disable');
								player.disableEquip(event.subtypes);
							}
							if(cards.length>0) event.goto(1);
						},
					},
					used:{charlotte:true}
				}
			},
			jsrgjizhao:{
				audio:2,
				trigger:{player:['phaseZhunbeiBegin','phaseJieshuBegin']},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('jsrgjizhao')).set('ai',target=>{
						var player=_status.event.player;
						if(player.countCards('j')) return player==target?10:0.1;
						return 6-get.attitude(player,target);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('jsrgjizhao',target);
						target.chooseToUse({
							filterCard:function(card,player,event){
								if(get.itemtype(card)!='card'||get.position(card)!='h'&&get.position(card)!='s') return false;
								return lib.filter.filterCard.apply(this,arguments);
							},
							prompt:'急召：使用一张手牌，否则'+get.translation(player)+'可以移动你区域里的一张牌',
							addCount:false,
							goon:target!=player||!player.countCards('j'),
							ai1:function(card){
								if(_status.event.goon) return get.order(card);
								return 0;
							}
						});
					}
					else{
						event.finish();
						return;
					}
					'step 2'
					if(result.bool){event.finish();return;}
					var targets=game.filterPlayer(current=>{
						if(current==target) return false;
						var hs=target.getCards('h');
						if(hs.length) return true;
						var js=target.getCards('j');
						for(var i=0;i<js.length;i++){
							if(current.canAddJudge(js[i])) return true;
						}
						if(current.isMin()) return false;
						var es=target.getCards('e');
						for(var i=0;i<es.length;i++){
							if(current.canEquip(es[i])) return true;
						}
						return false;
					});
					if(targets.length){
						var next=player.chooseTarget(function(card,player,target){
							return _status.event.targets.includes(target);
						});
						next.set('from',target);
						next.set('targets',targets);
						next.set('ai',function(target){
							var player=_status.event.player;
							var att=get.attitude(player,target);
							var sgnatt=get.sgn(att);
							var from=_status.event.from;
							var es=from.getCards('e');
							var i;
							var att2=get.sgn(get.attitude(player,from));
							for(i=0;i<es.length;i++){
								if(sgnatt!=0&&att2!=0&&sgnatt!=att2&&
									get.sgn(get.value(es[i],from))==-att2&&
									get.sgn(get.effect(target,es[i],player,target))==sgnatt&&
									target.canEquip(es[i])){
									return Math.abs(att);
								}
							}
							if(i==es.length&&(!from.countCards('j',function(card){
								return target.canAddJudge(card);
							})||att2<=0)){
								if(from.countCards('h')>0) return att;
								return 0;
							}
							return -att*att2;
						});
						next.set('targetprompt','移动目标');
						next.set('prompt','急召：是否移动'+get.translation(target)+'的一张牌？');
					}
					else event.finish();
					'step 3'
					if(result.bool){
						var target2=result.targets[0];
						event.targets=[target,target2];
						player.line2(event.targets,'green');
					}
					else{
						event.finish();
					}
					'step 4'
					game.delay();
					'step 5'
					if(targets.length==2){
						player.choosePlayerCard('hej',true,function(button){
							var player=_status.event.player;
							var targets0=_status.event.targets0;
							var targets1=_status.event.targets1;
							if(get.attitude(player,targets0)>0&&get.attitude(player,targets1)<0){
								if(get.position(button.link)=='j') return 12;
								if(get.value(button.link,targets0)<0&&get.effect(targets1,button.link,player,targets1)>0) return 10;
								return 0;
							}
							else{
								if(get.position(button.link)=='j') return -10;
								if(get.position(button.link)=='h') return 10;
								return get.value(button.link)*get.effect(targets1,button.link,player,targets1);
							}
						},targets[0]).set('targets0',targets[0]).set('targets1',targets[1]).set('filterButton',function(button){
							var targets1=_status.event.targets1;
							if(get.position(button.link)=='h'){
								return true;
							}
							else if(get.position(button.link)=='j'){
								return targets1.canAddJudge(button.link);
							}
							else{
								return targets1.canEquip(button.link);
							}
						});
					}
					else{
						event.finish();
					}
					'step 6'
					if(result.bool&&result.links.length){
						var link=result.links[0];
						if(get.position(link)=='h') event.targets[1].gain(link,event.targets[0],'giveAuto');
						else{
							event.targets[0].$give(link,event.targets[1],false);
							if(get.position(link)=='e') event.targets[1].equip(link);
							else if(link.viewAs) event.targets[1].addJudge({name:link.viewAs},[link]);
							else event.targets[1].addJudge(link);
						}
						game.log(event.targets[0],'的',get.position(link)=='h'?'一张手牌':link,'被移动给了',event.targets[1]);
						game.delay();
					}
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(get.type(card)=='delay'&&current<0){
								if(target.countCards('j')) return;
								return 'zerotarget';
							}
						},
					},
				}
			},
			//杨彪
			jsrgzhaohan:{
				audio:'zhaohan',
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				//locked:false,
				filter:function(event,player){
					if(game.shuffleNumber==0) return player.isDamaged();
					return true;
				},
				content:function(){
					player[game.shuffleNumber>0?'loseHp':'recover']();
				}
			},
			jsrgrangjie:{
				audio:'rangjie',
				trigger:{player:'damageEnd'},
				filter:function(event,player){
					return player.canMoveCard();
				},
				check:function(event,player){
					return player.canMoveCard(true);
				},
				content:function(){
					'step 0'
					event.num=trigger.num;
					'step 1'
					event.num--;
					if(player.canMoveCard()) player.moveCard(true);
					'step 2'
					if(result.bool){
						var card=result.card;
						var suit=get.suit(card,false);
						var cards=Array.from(ui.discardPile.childNodes);
						var gains=[];
						var history=game.getGlobalHistory('cardMove',evt=>{
							if(evt.name=='lose') return evt.position==ui.discardPile;
							return evt.name=='cardsDiscard';
						});
						for(var i=history.length-1;i>=0;i--){
							var evt=history[i];
							var cards2=evt.cards.filter(card=>{
								return cards.includes(card)&&get.suit(card,false)==suit;
							});
							if(cards2.length){
								gains.addArray(cards2);
								cards.removeArray(cards2);
							}
							if(!cards.length) break;
						}
						if(gains.length){
							player.chooseButton(['让节：是否获得一张'+get.translation(suit)+'牌？',gains]).set('ai',get.buttonValue);
						}
						else event._result={bool:false};
					}
					'step 3'
					if(result.bool){
						player.gain(result.links,'gain2');
					}
					'step 4'
					if(event.num>0&&player.hasSkill('jsrgrangjie')){
						player.chooseBool(get.prompt2('jsrgrangjie')).set('ai',()=>_status.event.bool).set('bool',lib.skill.jsrgrangjie.check(trigger,player));
					}
					else event.finish();
					'step 5'
					if(result.bool){
						player.logSkill('jsrgrangjie');
						event.goto(1);
					}
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
								if(target._jsrgrangjie_aiChecking) return;
								target._jsrgrangjie_aiChecking=true;
								var moveCard=target.canMoveCard(true);
								delete target._jsrgrangjie_aiChecking;
								if(!moveCard||!target.hasFriend()) return;
								var num=1;
								if(get.attitude(player,target)>0){
									if(player.needsToDiscard()) num=0.5;
									else num=0.3;
								}
								if(target.hp>=4) return [1,num*2];
								if(target.hp==3) return [1,num*1.5];
								if(target.hp==2) return [1,num*0.5];
							}
						},
					},
				},
			},
			jsrgyizheng:{
				audio:'yizheng',
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current.countCards('h')>player.countCards('h')&&player.canCompare(current);
					});
				},
				filterTarget:function(card,player,current){
					return current.countCards('h')>player.countCards('h')&&player.canCompare(current);
				},
				content:function(){
					'step 0'
					player.chooseToCompare(target);
					'step 1'
					if(result.bool){
						target.skip('phaseDraw');
						target.addTempSkill('yizheng2',{player:'phaseDrawSkipped'});
						event.finish();
					}
					else{
						target.chooseControl('1','2','cancel').set('prompt','是否对'+get.translation(player)+'造成至多2点伤害？').set('ai',()=>{
							return _status.event.choice;
						}).set('choice',get.damageEffect(player,target,target)>0?(get.attitude(target,player)>0?0:1):'cancel2');
					}
					'step 2'
					if(result.control!='cancel2'){
						var num=result.index+1;
						target.line(player);
						player.damage(target,num);
					}
				},
				ai:{
					order:1,
					result:{
						target:function(player,target){
							if(target.skipList.includes('phaseDraw')||target.hasSkill('pingkou')) return 0;
							var hs=player.getCards('h').sort(function(a,b){
								return b.number-a.number;
							});
							var ts=target.getCards('h').sort(function(a,b){
								return b.number-a.number;
							});
							if(!hs.length||!ts.length) return 0;
							if(hs[0].number>ts[0].number) return -1;
							return 0;
						},
					},
				},
			},
			//孔融
			jsrglirang:{
				audio:'splirang',
				trigger:{global:'phaseDrawBegin'},
				direct:true,
				filter:function(event,player){
					return event.player!=player&&!player.hasSkill('jsrglirang_used')&&player.countCards('he')>1;
				},
				content:function(){
					'step 0'
					player.chooseCard(get.prompt('jsrglirang',trigger.player),'你可以选择两张牌，将这些牌交给该角色。若如此做，你获得其本回合弃牌阶段弃置的所有牌。',2,'he').set('ai',card=>{
						if(!_status.event.give) return 0;
						var player=_status.event.player,target=_status.event.target;
						return target.getUseValue(card)-player.getUseValue(card)+0.5;
					}).set('give',get.attitude(player,trigger.player)>0).set('target',trigger.player);
					'step 1'
					if(result.bool){
						player.logSkill('jsrglirang',trigger.player);
						var cards=result.cards;
						player.give(cards,trigger.player);
						player.addTempSkill('jsrglirang_used','roundStart');
						player.addTempSkill('jsrglirang_given');
						player.markAuto('jsrglirang_used',[trigger.player]);
					}
				},
				subSkill:{
					used:{
						charlotte:true,
						onremove:true,
						intro:{content:'本轮〖礼让〗目标：$'},
					},
					given:{
						audio:'splirang',
						trigger:{global:'phaseDiscardEnd'},
						filter:function(event,player){
							return event.player.hasHistory('lose',evt=>{
								return evt.type=='discard'&&evt.getParent('phaseDiscard')==event&&evt.cards2.filterInD('d').length>0;
							});
						},
						charlotte:true,
						prompt2:function(event,player){
							var cards=[];
							event.player.getHistory('lose',evt=>{
								if(evt.type=='discard'&&evt.getParent('phaseDiscard')==event) cards.addArray(evt.cards2.filterInD('d'));
							});
							return '获得'+get.translation(cards);
						},
						content:function(){
							var cards=[];
							trigger.player.getHistory('lose',evt=>{
								if(evt.type=='discard'&&evt.getParent('phaseDiscard')==trigger) cards.addArray(evt.cards2.filterInD('d'));
							});
							player.gain(cards,'gain2');
						}
					}
				}
			},
			jsrgzhengyi:{
				audio:2,
				trigger:{player:'damageBegin4'},
				filter:function(event,player){
					var list=player.getStorage('jsrglirang_used');
					if(!list.length) return false;
					return !player.getHistory('damage').length&&list[0].isIn();
				},
				direct:true,
				content:function(){
					'step 0'
					var target=player.getStorage('jsrglirang_used')[0];
					event.target=target;
					target.chooseBool('是否对'+get.translation(player)+'发动【争义】？','将此'+(trigger.source?'来源为'+get.translation(trigger.source):'无来源')+'的'+trigger.num+'点伤害转移给你').set('ai',()=>{
						return _status.event.bool;
					}).set('bool',get.damageEffect(player,trigger.source,target)>get.damageEffect(target,trigger.source,target));
					'step 1'
					if(result.bool){
						target.logSkill('jsrgzhengyi',player);
						trigger.cancel();
						target.damage(trigger.source,trigger.nature,trigger.num).set('card',trigger.card).set('cards',trigger.cards);
					}
				}
			},
			//朱儁
			jsrgfendi:{
				audio:2,
				trigger:{player:'useCardToPlayered'},
				filter:function(event,player){
					return event.targets.length==1&&event.card.name=='sha'&&event.targets[0].countCards('h')>0;
				},
				usable:1,
				logTarget:'target',
				content:function(){
					'step 0'
					var target=trigger.target;
					event.target=target;
					player.choosePlayerCard(target,'h',true,[1,Infinity],'分敌：展示'+get.translation(target)+'的任意张手牌').set('ai',button=>{
						if(_status.event.all) return 1;
						if(ui.selected.buttons.length) return 0;
						return Math.random();
					}).set('all',!target.mayHaveShan(player,'use',target.getCards('h',i=>{
						return i.hasGaintag('sha_notshan');
					}))&&Math.random()<0.75).set('forceAuto',true);
					'step 1'
					if(result.bool){
						var cards=result.cards;
						target.showCards(cards,get.translation(player)+'对'+get.translation(target)+'发动了【分敌】');
						target.addGaintag(cards,'jsrgfendi_tag');
						target.addTempSkill('jsrgfendi_blocker');
						player.addTempSkill('jsrgfendi_gain');
						if(!trigger.card.storage) trigger.card.storage={};
						trigger.card.storage.jsrgfendi=cards.slice();
						player.storage.jsrgfendi_gain=target;
					}
					else player.storage.counttrigger.jsrgfendi--;
				},
				subSkill:{
					blocker:{
						trigger:{
							player:['damageBefore','damageCancelled','damageZero'],
							target:['shaMiss','useCardToExcluded','useCardToEnd'],
							global:['useCardEnd'],
						},
						forced:true,
						popup:false,
						charlotte:true,
						content:function(){
							player.removeSkill('jsrgfendi_blocker');
						},
						mod:{
							cardEnabled:function(card,player){
								if(card.cards){
									for(var i of card.cards){
										if(!i.hasGaintag('jsrgfendi_tag')) return false;
									}
								}
								else if(get.itemtype(card)=='card'){
									if(!card.hasGaintag('jsrgfendi_tag')) return false;
								}
							},
							cardRespondable:function(card,player){
								return lib.skill.jsrgfendi.cardEnabled.apply(this,arguments);
							},
							cardSavable:function(card,player){
								return lib.skill.jsrgfendi.cardEnabled.apply(this,arguments);
							},
						},
					},
					gain:{
						trigger:{global:'damageSource'},
						charlotte:true,
						forced:true,
						direct:true,
						onremove:true,
						filter:function(event,player){
							if(!event.card||!event.card.storage) return false;
							var cards=event.card.storage.jsrgfendi;
							var target=player.storage.jsrgfendi_gain;
							if(!cards||!target||!target.isIn()) return false;
							var cardsx=target.getCards('h');
							cardsx.addArray(Array.from(ui.discardPile));
							return cards.some(i=>cardsx.includes(i));
							//target.hasCard(card=>{
							//	return card.hasGaintag('jsrgfendi_tag');
							//},'h');
						},
						content:function(){
							var target=player.storage.jsrgfendi_gain;
							player.logSkill('jsrgfendi_gain',target);
							var cardsx=target.getCards('h');
							cardsx.addArray(Array.from(ui.discardPile));
							var cards=trigger.card.storage.jsrgfendi.filter(i=>cardsx.includes(i));
							player.gain(cards,'give');
						}
					}
				}
			},
			jsrgjuxiang:{
				audio:2,
				trigger:{
					player:'gainAfter',
					global:'loseAsyncAfter',
				},
				filter:function(event,player){
					var evt=event.getParent('phaseDraw');
					if(evt&&evt.name=='phaseDraw') return false;
					var hs=player.getCards('h');
					var cards=event.getg(player).filter(i=>hs.includes(i));
					if(!cards.length) return false;
					for(var card of cards){
						if(!lib.filter.cardDiscardable(card,player,'jsrgjuxiang')) return false;
					}
					return true;
				},
				check:function(event,player){
					var target=_status.currentPhase;
					if(!target||get.attitude(player,target)<=0) return false;
					var evt=event.getParent('phaseDiscard'),evt2=event.getParent('phaseJieshu');
					if(evt&&evt.name=='phaseDiscard'||evt2&&evt.name=='phaseJieshu') return false;
					if(target.getCardUsable({name:'sha'})>=target.countCards('hs','sha')) return false;
					if(!target.hasValueTarget({name:'sha'})) return false;
					var hs=player.getCards('h');
					var cards=event.getg(player).filter(i=>hs.includes(i));
					var val=0;
					for(var i of cards) val+=get.value(i);
					if(val<10) return true;
					return false;
				},
				prompt2:function(event,player){
					var hs=player.getCards('h');
					var cards=event.getg(player).filter(i=>hs.includes(i));
					var target=_status.currentPhase;
					var str='弃置'+get.translation(cards);
					if(target&&target.isIn()){
						var list=[];
						for(var card of cards){
							list.add(get.suit(card,player));
						}
						var num=list.length;
						str+='，然后令'+get.translation(target)+'于此回合额定的出牌阶段内使用【杀】的次数上限+'+num;
					}
					return str;
				},
				content:function(){
					'step 0'
					var hs=player.getCards('h');
					var cards=trigger.getg(player).filter(i=>hs.includes(i));
					var list=[];
					for(var card of cards){
						list.add(get.suit(card,player));
					}
					event.num=list.length;
					player.discard(cards);
					'step 1'
					var target=_status.currentPhase;
					if(target&&target.isIn()){
						target.addTempSkill('jsrgjuxiang_sha');
						target.addMark('jsrgjuxiang_sha',num,false);
						var evt=trigger.getParent('phaseUse');
						if(evt&&evt.name=='phaseUse'&&!evt.skill){
							evt.player.addTempSkill('jsrgjuxiang_buff','phaseUseAfter');
							evt.player.addMark('jsrgjuxiang_buff',num,false);
						}
					}
				},
				subSkill:{
					sha:{
						trigger:{global:'phaseUseBegin'},
						filter:function(event,player){
							return !event.skill;
						},
						silent:true,
						charlotte:true,
						forced:true,
						onremove:true,
						content:function(){
							trigger.player.addTempSkill('jsrgjuxiang_buff','phaseUseAfter');
							trigger.player.addMark('jsrgjuxiang_buff',player.countMark('jsrgjuxiang_sha'),false);
						}
					},
					buff:{
						charlotte:true,
						intro:{content:'使用【杀】的次数上限+#'},
						onremove:true,
						mod:{
							cardUsable:function(card,player,num){
								if(card.name=='sha') return num+player.countMark('jsrgjuxiang_buff');
							},
						}
					}
				}
			},
			//刘备
			jsrgjishan:{
				audio:2,
				trigger:{global:'damageBegin4'},
				usable:1,
				filter:function(event,player){
					return player.hp>0;
				},
				logTarget:'player',
				onremove:true,
				prompt2:'失去1点体力并防止此伤害，然后你与其各摸一张牌',
				check:function(event,player){
					return get.damageEffect(event.player,event.source,_status.event.player,event.nature)*event.num <
					get.effect(player,{name:'losehp'},player,_status.event.player)+get.effect(player,{name:'draw'},player,_status.event.player)+get.effect(event.player,{name:'draw'},player,_status.event.player)/2;
				},
				group:'jsrgjishan_recover',
				content:function(){
					'step 0'
					trigger.cancel();
					player.loseHp();
					player.markAuto('jsrgjishan',[trigger.player]);
					'step 1'
					if(player.isIn()&&trigger.player.isIn()){
						var targets=[player,trigger.player];
						targets.sortBySeat(_status.currentPhase);
						targets[0].draw('nodelay');
						targets[1].draw();
					}
				},
				intro:{content:'已帮助$抵挡过伤害'},
				ai:{expose:0.2},
				subSkill:{
					recover:{
						audio:'jsrgjishan',
						trigger:{source:'damageSource'},
						filter:function(event,player){
							return game.hasPlayer(current=>{
								return current.isMinHp()&&player.getStorage('jsrgjishan').includes(current);
							});
						},
						usable:1,
						direct:true,
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('jsrgjishan_recover'),'令一名体力值最小且你对其发动过〖积善①〗的角色回复1点体力',(card,player,target)=>{
								return target.isMinHp()&&player.getStorage('jsrgjishan').includes(target);
							}).set('ai',target=>{
								return get.recoverEffect(target,_status.event.player,_status.event.player);
							});
							'step 1'
							if(result.bool){
								var target=result.targets[0];
								player.logSkill('jsrgjishan_recover',target);
								target.recover();
							}
							else player.storage.counttrigger.jsrgjishan_recover--;
						}
					}
				}
			},
			jsrgzhenqiao:{
				audio:2,
				trigger:{player:'useCardToTargeted'},
				forced:true,
				shaRelated:true,
				filter:function(event,player){
					return event.isFirstTarget&&event.card.name=='sha'&&player.hasEmptySlot(1);
				},
				content:function(){
					// trigger.getParent().targets=trigger.getParent().targets.concat(trigger.targets);
					// trigger.getParent().triggeredTargets4=trigger.getParent().triggeredTargets4.concat(trigger.targets);
					trigger.getParent().effectCount++;
				},
				mod:{
					attackRange:function(player,num){
						return num+1;
					},
					aiOrder:(player,card,num)=>{
						if(num>0&&get.itemtype(card)==='card'&&get.subtype(card)==='equip1'&&!player.getEquip(1)){
							if(card.name!=='zhuge'||player.getCardUsable('sha')||!player.needsToDiscard()||player.countCards('hs',i=>{
								return get.name(i)==='sha'&&lib.filter.cardEnabled(i,player);
							})<2) return 0;
						}
					},
					aiValue:(player,card,num)=>{
						if(num>0&&get.itemtype(card)==='card'&&card.name!=='zhuge'&&get.subtype(card)==='equip1'&&!player.getEquip(1)) return 0.01*num;
					},
					aiUseful:()=>{
						return lib.skill.jsrgzhenqiao.mod.aiValue.apply(this,arguments);
					}
				}
			},
			//王允
			jsrgshelun:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return game.hasPlayer(current=>player.inRange(current));
				},
				filterTarget:function(card,player,target){
					return player.inRange(target);
				},
				content:function(){
					var num=player.countCards('h');
					var targets=game.filterPlayer(current=>{
						return current.countCards('h')<=num&&current!=target;
					});
					player.chooseToDebate(targets).set('callback',function(){
						var result=event.debateResult;
						if(result.bool&&result.opinion){
							var opinion=result.opinion;
							var target=event.getParent(2).target;
							if(opinion=='red') player.discardPlayerCard(target,'he',true);
							else target.damage();
						}
					}).set('ai',card=>{
						var player=_status.event.player;
						var color=(player==_status.event.source||get.damageEffect(_status.event.getParent(2).target,player,player)>0)?'black':'red';
						var val=5-get.value(card);
						if(get.color(card)==color) val+=10;
						return val;
					}).set('aiCard',target=>{
						var color=(target==_status.event.source||get.damageEffect(_status.event.getParent(2).target,target,target)>0)?'black':'red';
						var hs=target.getCards('h',{color:color});
						if(!hs.length) hs=target.getCards('h');
						return {bool:true,cards:[hs.randomGet()]};
					}).set('target',target);
				},
				ai:{
					order:8,
					expose:0.2,
					result:{target:-1},
				}
			},
			jsrgfayi:{
				audio:2,
				trigger:{global:'chooseToDebateAfter'},
				filter:function(event,player){
					if(!event.targets.includes(player)) return false;
					if(event.red.map(i=>i[0]).includes(player)) return event.black.length;
					if(event.black.map(i=>i[0]).includes(player)) return event.red.length;
					return false;
				},
				direct:true,
				content:function(){
					'step 0'
					var targets=[];
					if(trigger.red.map(i=>i[0]).includes(player)) targets=trigger.black;
					if(trigger.black.map(i=>i[0]).includes(player)) targets=trigger.red;
					player.chooseTarget(get.prompt('jsrgfayi'),'对一名与你意见不同的角色造成1点伤害',(card,player,target)=>{
						return _status.event.targets.includes(target);
					}).set('targets',targets.map(i=>i[0])).set('ai',target=>{
						var player=_status.event.player;
						return get.damageEffect(target,player,player);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('jsrgfayi',target);
						target.damage();
					}
				}
			},
			jsrgtushe:{
				audio:'xinfu_tushe',
				mod: {
					aiOrder(player, card, num) {
						if (get.tag(card, 'multitarget')) {
							if (player.countCards('h', { type: 'basic' })) return num / 10;
							return num * 10;
						}
						if (get.type(card) === 'basic') return num + 10;
					},
					aiValue(player, card, num) {
						if (card.name === 'zhangba') {
							let fact = (n) => {
								if (n > 1) return n * fact(n - 1);
								return 1;
							}, basic = 0;
							return fact(Math.min(player.countCards('hs', i => {
								if (get.tag(i, 'multitarget')) return 2;
								if (!['shan', 'tao', 'jiu'].includes(card.name)) return 1;
								basic++;
							}) / (1 + basic), player.getCardUsable('sha')));
						}
						if (['shan', 'tao', 'jiu'].includes(card.name)) {
							if (player.getEquip('zhangba') && player.countCards('hs') > 1) return 0.01;
							return num / 2;
						}
						if (get.tag(card, 'multitarget')) return num + game.players.length;
					},
					aiUseful(player, card, num) {
						if (get.name(card, player) === 'shan') {
							if (player.countCards('hs', i => {
								if (card === i || card.cards && card.cards.includes(i)) return false;
								return get.name(i, player) === 'shan';
							})) return -1;
							return num / Math.pow(Math.max(1, player.hp), 2);
						}
					}
				},
				trigger:{
					player:'useCardToPlayered',
				},
				filter:function (event,player){
					if(get.type(event.card)=='equip') return false;
					if(event.getParent().triggeredTargets3.length>1) return false;
					return event.targets.length>0;
				},
				check:function(event,player){
					return !player.countCards('h',{type:'basic'});
				},
				locked: false,
				content:function (){
					'step 0'
					player.showHandcards();
					'step 1'
					if(player.countCards('h',{type:'basic'})) event.finish();
					else player.chooseBool('图射：是否摸'+get.cnNumber(trigger.targets.length)+'张牌？').set('ai',()=>1);
					'step 2'
					if(result.bool){
						player.draw(trigger.targets.length);
					}
				},
				ai:{
					presha:true,
					pretao:true,
					threaten:1.8,
					effect: {
						player(card, player, target) {
							if (typeof card === 'object' && card.name !== 'shan' && get.type(card) !== 'equip' && !player.countCards('h', i => {
								if (card === i || card.cards && card.cards.includes(i)) return false;
								return get.type(i) === 'basic';
							})) {
								let targets = [], evt = _status.event.getParent('useCard');
								targets.addArray(ui.selected.targets);
								if (evt && evt.card == card) targets.addArray(evt.targets);
								if (targets.length) return [1, targets.length];
								if (get.tag(card, 'multitarget')) return [1, game.players.length - 1];
								return [1, 1];
							}
						}
					}
				}
			},
			jsrgtongjue:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				zhuSkill:true,
				filter:function(event,player){
					return player.hasZhuSkill('jsrgtongjue')&&game.hasPlayer(current=>current!=player&&current.group=='qun');
				},
				filterCard:true,
				selectCard:[1,Infinity],
				filterTarget:function(card,player,target){
					return target!=player&&target.group=='qun';
				},
				selectTarget:[1,Infinity],
				filterOk:function(){
					return ui.selected.cards.length==ui.selected.targets.length;
				},
				check:function(card){
					var player=_status.event.player;
					if(player.hasCard(card=>{
						return player.hasValueTarget(card);
					},'hs')){
						return 3-player.getUseValue(card);
					}
					return 3-get.value(card);
				},
				multiline:true,
				multitarget:true,
				delay:false,
				discard:false,
				lose:false,
				content:function(){
					'step 0'
					var list=[];
					for(var i=0;i<targets.length;i++){
						var target=targets[i];
						var card=cards[i];
						list.push([target,card]);
					}
					game.loseAsync({
						gain_list:list,
						player:player,
						cards:cards,
						giver:player,
						animate:'giveAuto',
					}).setContent('gaincardMultiple');
					'step 1'
					player.addTempSkill('jsrgtongjue_blocker');
					player.markAuto('jsrgtongjue_blocker',targets)
				},
				ai:{
					order:5,
					result:{
						target:1,
					}
				},
				subSkill:{
					blocker:{
						charlotte:true,
						onremove:true,
						mod:{
							playerEnabled:function(card,player,target){
								if(player.getStorage('jsrgtongjue_blocker').includes(target)) return false;
							},
						},
						mark:true,
						intro:{content:'$已经立牧自居，不可接近'},
					}
				}
			},
			//404曹操
			jsrgzhenglve:{
				audio:2,
				trigger:{global:'phaseEnd'},
				filter:function(event,player){
					var zhu=get.zhu(player)||game.findPlayer(current=>current.getSeatNum()==1);
					return event.player==zhu;
				},
				locked:false,
				group:'jsrgzhenglve_damage',
				prompt2:function(event,player){
					var num=Math.min(event.player.getHistory('sourceDamage').length>0?1:2,game.countPlayer(current=>{
						return !current.hasMark('jsrgzhenglve_mark');
					}));
					if(num==0) return '你可以摸一张牌';
					return '你可以摸一张牌并令'+get.cnNumber(num)+'名角色获得“猎”标记';
				},
				content:function(){
					'step 0'
					player.draw();
					'step 1'
					var damaged=trigger.player.getHistory('sourceDamage').length>0;
					var num=damaged?1:2;
					var targets=game.filterPlayer(current=>{
						return !current.hasMark('jsrgzhenglve_mark');
					});
					if(!targets.length) event.finish();
					else if(targets.length<=num) event._result={bool:true,targets:targets};
					else player.chooseTarget('令'+(num>1?'至多':'')+get.cnNumber(num)+'名角色获得“猎”标记',true,[1,num],(card,player,target)=>{
						return !target.hasMark('jsrgzhenglve_mark');
					}).set('ai',target=>{
						var att=get.attitude(_status.event.player,target);
						return 100-att;
					});
					'step 2'
					if(result.bool){
						var targets=result.targets;
						player.line(targets);
						targets.forEach(i=>i.addMark('jsrgzhenglve_mark',1));
					}
				},
				mod:{
					cardUsableTarget:function(card,player,target){
						if(target.hasMark('jsrgzhenglve_mark')) return true;
					},
					targetInRange:function(card,player,target){
						if(target.hasMark('jsrgzhenglve_mark')) return true;
					},
				},
				subSkill:{
					damage:{
						audio:'jsrgzhenglve',
						trigger:{source:'damageSource'},
						usable:1,
						filter:function(event,player){
							return event.player.hasMark('jsrgzhenglve_mark');
						},
						prompt2:function(event,player){
							var cards=event.cards||[];
							return '摸一张牌'+(cards.filterInD().length?'并获得'+get.translation(event.cards.filterInD()):'');
						},
						content:function(){
							'step 0'
							player.draw();
							var cards=trigger.cards;
							if(cards&&cards.filterInD().length){
								player.gain(cards.filterInD(),'gain2');
							}
						}
					},
					mark:{
						marktext:'猎',
						intro:{
							name:'猎(政略)',
							name2:'猎',
							markcount:()=>0,
							content:'已拥有“猎”标记',
						}
					}
				}
			},
			jsrghuilie:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				juexingji:true,
				forced:true,
				skillAnimation:true,
				animationColor:'thunder',
				derivation:['jsrgpingrong','feiying'],
				filter:function(event,player){
					return game.countPlayer(current=>current.hasMark('jsrgzhenglve_mark'))>2;
				},
				content:function(){
					'step 0'
					player.awakenSkill('jsrghuilie');
					player.loseMaxHp();
					'step 1'
					player.addSkills(['jsrgpingrong','feiying']);
				}
			},
			jsrgpingrong:{
				audio:2,
				trigger:{global:'phaseEnd'},
				filter:function(event,player){
					return !player.hasSkill('jsrgpingrong_used')&&game.hasPlayer(current=>current.hasMark('jsrgzhenglve_mark'));
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('jsrghuilie'),'移去一名角色的“猎”，然后你执行一个额外回合。若你在此额外回合内未造成伤害，则你失去1点体力。',(card,player,target)=>{
						return target.hasMark('jsrgzhenglve_mark');
					}).set('ai',target=>{
						return get.attitude(_status.event.player,target);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('jsrgpingrong',target);
						player.addTempSkill('jsrgpingrong_used','roundStart');
						target.removeMark('jsrgzhenglve_mark',target.countMark('jsrgzhenglve_mark'));
						player.insertPhase();
						player.addSkill('jsrgpingrong_check');
					}
				},
				subSkill:{
					used:{charlotte:true},
					check:{
						audio:'jsrgpingrong',
						trigger:{player:'phaseAfter'},
						charlotte:true,
						forced:true,
						filter:function(event,player){
							return event.skill=='jsrgpingrong'&&!player.getHistory('sourceDamage').length;
						},
						content:function(){
							player.loseHp();
						}
					}
				}
			},
			//南华老仙
			jsrgshoushu:{
				audio:2,
				forced:true,
				trigger:{
					//player:'enterGame',
					//global:'phaseBefore',
					global:'roundStart',
				},
				filter:function(event,player){
					if(game.hasPlayer(function(current){
						return current.countCards('hej','taipingyaoshu');
					})) return false;
					return true;
					//return event.name!='phase'||game.phaseNumber==0;
				},
				direct:true,
				group:'jsrgshoushu_destroy',
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('jsrgshoushu'),'将【太平要术】置入一名角色的装备区',(card,player,target)=>{
						var card={name:'taipingyaoshu'};
						return target.canEquip(card,true);
					}).set('ai',target=>{
						return target.getUseValue({name:'taipingyaoshu'})*get.attitude(_status.event.player,target);
					})
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('jsrgshoushu',target);
						if(!lib.inpile.includes('taipingyaoshu')){
							lib.inpile.push('taipingyaoshu');
						}
						event.card=game.createCard2('taipingyaoshu','heart',3);
					}
					else event.finish();
					'step 2'
					if(card) target.equip(card);
				},
				subSkill:{
					destroy:{
						audio:'jsrgshoushu',
						trigger:{
							global:['loseEnd','equipEnd','addJudgeEnd','gainEnd','loseAsyncEnd','addToExpansionEnd'],
						},
						forced:true,
						filter:function(event,player){
							return game.hasPlayer(current=>{
								var evt=event.getl(current);
								if(evt&&evt.es) return evt.es.some(i=>i.name=='taipingyaoshu');
								return false;
							});
						},
						content:function(){
							var cards=[];
							game.countPlayer(current=>{
								var evt=trigger.getl(current);
								if(evt&&evt.es) return cards.addArray(evt.es.filter(i=>i.name=='taipingyaoshu'));
							});
							game.cardsGotoSpecial(cards);
							game.log(cards,'被销毁了');
						}
					}
				}
			},
			jsrgxundao:{
				audio:2,
				trigger:{player:'judge'},
				filter:function(event,player){
					return game.hasPlayer(current=>current.countCards('he'));
				},
				direct:true,
				content:function(){
					'step 0'
					var prompt2=get.translation(player)+'（你）的'+(trigger.judgestr||'')+'判定为'+
						get.translation(player.judging[0])+'，'+'是否令至多两名角色依次弃置一张牌，然后选择其中一张作为新判定牌？';
					player.chooseTarget(get.prompt('jsrgxundao'),prompt2,[1,2],(card,player,target)=>{
						return target.countCards('he');
					}).set('ai',target=>{
						var player=_status.event.player;
						if(!_status.event.todiscard) return 0;
						if(_status.event.todiscard!='all'){
							if(target==_status.event.todiscard) return 100;
						}
						return get.effect(target,{name:'guohe_copy2'},player,player)/2;
					}).set('todiscard',function(){
						if(trigger.judgestr=='闪电'&&get.damageEffect(player,null,player,'thunder')>=0) return 'all';
						var friends=game.filterPlayer(i=>get.attitude(i,player)>0);
						for(var friend of friends){
							var cardsx=friend.getCards('he',card=>trigger.judge(card)>0);
							cardsx.sort((a,b)=>{
								return get.value(a)-get.value(b);
							});
							if(cardsx.length){
								var card=cardsx[0];
								if(trigger.judge(player.judging[0])>=0){
									if(get.value(card)>4) return false;
								}
								return get.owner(card);
							}
						}
						return 'all';
					}())
					'step 1'
					if(result.bool){
						var targets=result.targets;
						targets.sortBySeat(_status.currentPhase);
						event.targets=targets;
						player.logSkill('jsrgxundao',targets);
						event.cards=[];
					}
					else event.finish();
					'step 2'
					var target=targets.shift();
					target.chooseToDiscard('寻道：请弃置一张牌'+(target==player?'':'，可能被作为新判定牌'),'he',true).set('ai',card=>{
						var trigger=_status.event.getTrigger();
						var player=_status.event.player;
						var judging=_status.event.judging;
						var result=trigger.judge(card)-trigger.judge(judging);
						var attitude=get.attitude(player,trigger.player);
						if(attitude==0||result==0) return 0.1;
						if(attitude>0){
							return result+0.01;
						}
						else{
							return 0.01-result;
						}
					});
					'step 3'
					if(result.bool){
						event.cards.addArray(result.cards);
					}
					if(targets.length) event.goto(2);
					'step 4'
					var cards=event.cards.filterInD('d');
					if(cards.length){
						player.chooseButton(['寻道：选择一张作为新判定牌',cards],true).set('ai',button=>{
							return trigger.judge(button.link);
						});
					}
					else event.finish();
					'step 5'
					if(result.bool){
						var card=result.links[0];
						event.card=card;
						game.cardsGotoOrdering(card).relatedEvent=trigger;
					}
					else event.finish();
					'step 6'
					if(player.judging[0].clone){
						game.broadcastAll(function(card,card2,player){
							if(card.clone){
								card.clone.classList.remove('thrownhighlight');
							}
							var node=player.$throwordered(card2.copy(),true);
							node.classList.add('thrownhighlight');
							ui.arena.classList.add('thrownhighlight');
						},player.judging[0],card,player);
						game.addVideo('deletenode',player,get.cardsInfo([player.judging[0].clone]));
					}
					game.cardsDiscard(player.judging[0]);
					player.judging[0]=card;
					trigger.orderingCards.add(card);
					game.log(player,'的判定牌改为',card);
					game.delay(2);
				},
				ai:{
					rejudge:true,
					tag:{
						rejudge:1,
					}
				}
			},
			jsrglinghua:{
				audio:2,
				trigger:{
					player:['phaseZhunbeiBegin','phaseJieshuBegin'],
				},
				prompt2:function(event,player){
					var zhunbei=event.name=='phaseZhunbei';
					return '进行目标为你'+(zhunbei?'':'且效果反转')+'的【闪电】判定。若你未因此受到伤害，你可以'+(zhunbei?'令一名角色回复1点体力':'对一名角色造成1点雷电伤害');
				},
				check:function(event,player){
					var e2=player.getEquip(2);
					if(e2&&e2.name=='taipingyaoshu') return true;
					if(event.name=='phaseZhunbei'&&game.hasPlayer(current=>{
						return get.recoverEffect(current,player,player)>=0;
					})) return true;
					if(event.name=='phaseJieshu'&&game.hasPlayer(current=>{
						return get.damageEffect(current,player,player,'thunder')>=0;
					})&&player.hasSkillTag('rejudge')&&player.hasCard(card=>{
						return lib.card.shandian.judge(card)<0;
					},'he')) return true;
					return false;
				},
				content:function(){
					'step 0'
					var next=event.executeDelayCardEffect=player.executeDelayCardEffect('shandian');
					if(event.triggername!='phaseJieshuBegin') return;
					next.judge=card=>-lib.card.shandian.judge(card)-4;
					next.judge2=result=>!lib.card.shandian.judge2(result);
					'step 1'
					var executeDelayCardEffect=event.executeDelayCardEffect;
					if(!player.hasHistory('damage',evt=>evt.getParent(2)==executeDelayCardEffect)){
						if(trigger.name=='phaseZhunbei'){
							player.chooseTarget('灵化：是否令一名角色回复1点体力？').set('ai',target=>{
								var player=_status.event.player;
								return get.recoverEffect(target,player,player);
							});
						}
						else{
							player.chooseTarget('灵化：是否对一名角色造成1点雷电伤害？').set('ai',target=>{
								var player=_status.event.player;
								return get.damageEffect(target,player,player,'thunder');
							});
						}
					}
					else event.finish();
					'step 2'
					if(result.bool){
						var target=result.targets[0];
						player.line(target);
						if(trigger.name=='phaseZhunbei') target.recover();
						else target.damage('thunder');
					}
				},
				ai:{
					threaten:2.8
				}
			},
		},
		characterReplace:{},
		dynamicTranslate:{
			jsrgshichong:function(player){
				if(player.storage.jsrgshichong) return '转换技。当你使用牌指定其他角色为唯一目标后，阴：你可以获得目标角色一张手牌；<span class="bluetext">阳：目标角色可以交给你一张手牌</span>。';
				return '转换技。当你使用牌指定其他角色为唯一目标后，<span class="bluetext">阴：你可以获得目标角色一张手牌</span>；阳：目标角色可以交给你一张手牌。';
			},
		},
		translate:{
			//江山如故·起
			jsrg_liuhong:'起刘宏',
			jsrg_liuhong_prefix:'起',
			jsrgchaozheng:'朝争',
			jsrgchaozheng_info:'准备阶段，你可以令所有其他角色议事。若结果为：红色，意见为红色的角色各回复1点体力；黑色，意见为红色的角色各失去1点体力。然后若所有意见均相同，你摸X张牌（X为此次议事的角色数）。',
			jsrgshenchong:'甚宠',
			jsrgshenchong_info:'限定技。出牌阶段，你可以令一名其他角色获得〖飞扬〗、〖跋扈〗。若如此做，当你死亡时，其失去所有技能并弃置所有手牌。',
			jsrgjulian:'聚敛',
			jsrgjulian_info:'主公技。①其他群势力角色每回合限两次。当其不于摸牌阶段且不因〖聚敛〗摸牌后，其可以摸一张牌。②结束阶段，你可以获得所有其他群势力角色各一张牌。',
			jsrgfeiyang:'飞扬',
			jsrgfeiyang_info:'判定阶段开始时，若你的判定区里有牌，你可以弃置两张手牌并弃置你判定区里的一张牌。',
			jsrgbahu:'跋扈',
			jsrgbahu_info:'锁定技。①准备阶段，你摸一张牌。②你使用【杀】的次数上限+1。',
			jsrg_hejin:'起何进',
			jsrg_hejin_prefix:'起',
			jsrgzhaobing:'诏兵',
			jsrgzhaobing_info:'结束阶段，你可以弃置所有手牌，然后令至多X名其他角色依次选择一项：1.正面向上交给你一张【杀】；2.失去1点体力（X为你本次弃置的牌数）。',
			jsrgzhuhuan:'诛宦',
			jsrgzhuhuan_info:'准备阶段，你可以展示所有手牌并弃置所有【杀】，然后令一名其他角色选择一项：1.弃置等量的牌，然后受到1点伤害；2.令你摸等量的牌，然后你回复1点体力。',
			jsrgyanhuo:'延祸',
			jsrgyanhuo_info:'锁定技。当你死亡时，你增加如下全局技能：当有角色使用【杀】时，此【杀】的伤害值基数+1。',
			jsrg_sunjian:'起孙坚',
			jsrg_sunjian_prefix:'起',
			jsrgpingtao:'平讨',
			jsrgpingtao_info:'出牌阶段限一次。你可以令一名其他角色选择一项：1.交给你一张牌，然后你于此回合使用【杀】的次数上限+1；2.令你视为对其使用一张【杀】。',
			jsrgjuelie:'绝烈',
			jsrgjuelie_info:'①当你使用【杀】指定一名角色为目标后，你可以弃置任意张牌并弃置其等量的牌。②若你的手牌数或体力值为全场最小，则你使用【杀】造成的伤害+1。',
			jsrg_huangfusong:'起皇甫嵩',
			jsrg_huangfusong_prefix:'起',
			jsrgguanhuo:'观火',
			jsrgguanhuo_info:'①出牌阶段，你可以视为使用一张【火攻】。②当你因〖观火①〗使用的【火攻】结算结束后，若此牌未造成过伤害，且：若{你此阶段发动〖观火①〗的次数为1，则你于此阶段造成渠道为【火攻】的伤害时，此伤害+1}，否则你失去〖观火〗。',
			jsrgjuxia:'居下',
			jsrgjuxia_info:'每回合限一次。当其他角色使用牌指定你为目标后，若其技能数多于你，其可以令此牌对你无效，然后令你摸两张牌。',
			jsrg_xushao:'起许劭',
			jsrg_xushao_prefix:'起',
			jsrgyingmen:'盈门',
			jsrgyingmen_info:'锁定技。①游戏开始时，你将武将牌堆中随机四张武将牌置于你的武将牌上，称为“访客”。②回合开始时，若你的“访客”数小于4，你随机从武将牌堆中将“访客”补至四张。',
			jsrgpingjian:'评鉴',
			jsrgpingjian_info:'你可以于满足你“访客”上的一个无技能标签或仅有锁定技标签的技能条件的时机发动此技能，然后你选择移去一张“访客”。若移去的是本次发动技能的“访客”，你摸一张牌。',
			jsrg_dongbai:'起董白',
			jsrg_dongbai_prefix:'起',
			jsrgshichong:'恃宠',
			jsrgshichong_info:'转换技。当你使用牌指定其他角色为唯一目标后，阴：你可以获得目标角色一张手牌；阳：目标角色可以交给你一张手牌。',
			jsrglianzhu:'连诛',
			jsrglianzhu_info:'出牌阶段限一次。你可以展示一张黑色手牌并交给一名其他角色，然后视为你对所有与其势力相同的其他角色依次使用一张【过河拆桥】。',
			jsrg_qiaoxuan:'起桥玄',
			jsrg_qiaoxuan_prefix:'起',
			jsrgjuezhi:'绝质',
			jsrgjuezhi_info:'①当你失去一张装备区里的装备牌后，你可以废除对应的装备栏。②你的回合每阶段限一次。当你使用牌对目标角色造成伤害时，你令此伤害+X（X为其装备区里的牌与你已废除的装备栏中相同副类别的数量）。',
			jsrgjizhao:'急召',
			jsrgjizhao_info:'准备阶段或结束阶段，你可以令一名角色选择一项：1.使用一张手牌；2.令你可以移动其区域里的一张牌。',
			jsrg_yangbiao:'起杨彪',
			jsrg_yangbiao_prefix:'起',
			jsrgzhaohan:'昭汉',
			jsrgzhaohan_info:'锁定技。准备阶段，若本局游戏：未洗过牌，你回复1点体力；洗过牌，你失去1点体力。',
			jsrgrangjie:'让节',
			jsrgrangjie_info:'当你受到1点伤害后，你可以移动场上的一张牌，然后你可以于弃牌堆中选择获得一张本回合进入弃牌堆且与此牌花色相同的牌。',
			jsrgyizheng:'义争',
			jsrgyizheng_info:'出牌阶段限一次。你可以与一名手牌数大于你的角色拼点。若你：赢，其跳过下一个摸牌阶段；没赢，其可以对你造成至多2点伤害。',
			jsrg_kongrong:'起孔融',
			jsrg_kongrong_prefix:'起',
			jsrglirang:'礼让',
			jsrglirang_info:'每轮限一次。其他角色的摸牌阶段开始时，你可以交给其两张牌。然后此回合的弃牌阶段结束时，你可以获得所有其于此阶段因弃置进入弃牌堆的牌。',
			jsrgzhengyi:'争义',
			jsrgzhengyi_info:'当你每回合首次受到伤害时，本轮因〖礼让〗得到过牌的其他角色可以将此伤害转移给其。',
			jsrg_zhujun:'起朱儁',
			jsrg_zhujun_prefix:'起',
			jsrgfendi:'分敌',
			jsrgfendi_tag:'分敌',
			jsrgfendi_info:'每回合限一次。当你使用【杀】指定唯一目标后，你可以展示其任意张手牌，令其不能使用或打出对应实体牌不全为这些牌的牌直到此【杀】结算结束。然后当此【杀】对其造成伤害后，你于其手牌区或弃牌堆获得这些牌。',
			jsrgjuxiang:'拒降',
			jsrgjuxiang_info:'当你不于摸牌阶段得到牌后，你可以弃置之，令当前回合角色于此回合额定的出牌阶段内使用【杀】的次数上限+X（X为你以此法弃置的牌的花色数）。',
			jsrg_liubei:'起刘备',
			jsrg_liubei_prefix:'起',
			jsrgjishan:'积善',
			jsrgjishan_info:'①每回合限一次。当一名角色受到伤害时，你可以失去1点体力并防止此伤害，然后你与其各摸一张牌。②每回合限一次。当你造成伤害后，你可以令一名体力值最小且你对其发动过〖积善①〗的角色回复1点体力。',
			jsrgzhenqiao:'振鞘',
			jsrgzhenqiao_info:'锁定技。①你的攻击范围+1。②当你使用【杀】指定目标后，若你的武器栏为空且未废除，你令此【杀】的效果额外结算一次。',
			jsrg_wangyun:'起王允',
			jsrg_wangyun_prefix:'起',
			jsrgshelun:'赦论',
			jsrgshelun_info:'出牌阶段限一次。你可以选择一名你攻击范围内的角色，然后令除其外所有手牌数不大于你的角色议事。若结果为：红色，你弃置其一张牌；黑色，你对其造成1点伤害。',
			jsrgfayi:'伐异',
			jsrgfayi_info:'当你议事结算结束后，你可以对一名意见与你不同的角色造成1点伤害。',
			jsrg_liuyan:'起刘焉',
			jsrg_liuyan_prefix:'起',
			jsrgtushe:'图射',
			jsrgtushe_info:'当你使用非装备牌指定目标后，你可以展示所有手牌（无牌则不展示）。若你没有基本牌，你可以摸X张牌（X为此牌指定的目标数）。',
			jsrgtongjue:'通绝',
			jsrgtongjue_info:'主公技。出牌阶段限一次。你可以将任意张牌交给等量名其他群势力角色。然后你不能使用牌指定这些角色为目标直到回合结束。',
			jsrg_caocao:'梦曹操',
			jsrg_caocao_prefix:'梦',
			jsrgzhenglve:'政略',
			jsrgzhenglve_info:'①主公的回合结束时，你可以摸一张牌，然后令一名没有“猎”标记的角色获得“猎”（若主公本回合没有造成过伤害，则改为至多两名）。②你对有“猎”的角色使用牌无距离和次数限制。③每回合限一次。当你对有“猎”的角色造成伤害后，你可以摸一张牌并获得造成此伤害的牌。',
			jsrghuilie:'会猎',
			jsrghuilie_info:'觉醒技。准备阶段，若有“猎”的角色数大于2，你减1点体力上限，然后获得〖平戎〗和〖飞影〗。',
			jsrgpingrong:'平戎',
			jsrgpingrong_info:'每轮限一次。一名角色的回合结束时，你可以移去一名角色的“猎”，然后你于此回合后执行一个额外回合。该回合结束后，若你于此回合未造成过伤害，你失去1点体力。',
			jsrg_nanhualaoxian:'起南华老仙',
			jsrg_nanhualaoxian_prefix:'起',
			jsrgshoushu:'授术',
			jsrgshoushu_info:'锁定技。①一轮游戏开始时，若场上没有【太平要术】，你可以从游戏外将【太平要术】置于一名角色的装备区内。②当【太平要术】离开一名角色的装备区后，你令此牌销毁。',
			jsrgxundao:'寻道',
			jsrgxundao_info:'当你的判定牌生效前，你可以令至多两名角色依次弃置一张牌，然后你选择一张以此法弃置且位于弃牌堆中的牌代替此判定牌。',
			jsrglinghua:'灵化',
			jsrglinghua_info:'①准备阶段，你可以执行目标角色为你的【闪电】效果。若你未因此受到伤害，你可以令一名角色回复1点体力。②结束阶段，你可以执行目标角色为你且判定效果反转的【闪电】效果。若你未因此受到伤害，你可以对一名角色造成1点雷电伤害。',
			sbyingmen:'盈门',
			sbyingmen_info:'锁定技。①游戏开始时，你将武将牌堆中随机四张武将牌置于你的武将牌上，称为“访客”。②回合开始时，若你的“访客”数小于4，你随机从武将牌堆中将“访客”补至四张。',
			sbpingjian:'评鉴',
			sbpingjian_info:'你可以于满足你“访客”上的一个无技能标签或仅有锁定技标签的技能条件的时机发动此技能，然后你选择移去一张“访客”。若移去的是本次发动技能的“访客”，则你于此技能结算结束时摸一张牌。',
			//江山如故·承
			jsrg_sunce:'梦孙策',
			jsrg_sunce_prefix:'梦',
			jsrgduxing:'独行',
			jsrgduxing_info:'出牌阶段限一次。你可以视为使用一张可以指定任意名目标角色的【决斗】，且所有目标角色的手牌均视为【杀】直到此牌结算结束。',
			jsrgzhiheng:'猘横',
			jsrgzhiheng_info:'锁定技。当你因执行牌的效果对目标角色造成伤害时，若其于此回合响应过你使用过的牌，此伤害+1。',
			jsrgzhasi:'诈死',
			jsrgzhasi_info:'限定技。当你受到伤害值不小于你的体力值的伤害时，你可以防止此伤害，然后失去〖猘横〗并获得〖制衡〗。然后你不计入距离和座次计算直到你对其他角色使用牌后或当你受到伤害后。',
			jsrgbashi:'霸世',
			jsrgbashi_info:'主公技。当你需要打出【杀】或【闪】时，你可以令其他吴势力角色选择是否打出一张【杀】或【闪】。若有角色响应，则视为你打出了一张【杀】或【闪】。',
			jsrg_xuyou:'承许攸',
			jsrg_xuyou_prefix:'承',
			jsrglipan:'离叛',
			jsrglipan_info:'回合结束时，你可以变更势力，然后摸X张牌并执行一个额外的出牌阶段。此阶段结束时，所有与你势力相同的角色依次可以将一张牌当【决斗】对你使用（X为与你势力相同的其他角色数）。',
			jsrgqingxi:'轻袭',
			jsrgqingxi_info:'群势力技。出牌阶段每名角色限一次。你可以选择一名手牌数小于你的角色，你将手牌数弃置至与其相同，然后视为对其使用一张刺【杀】。',
			jsrgjinmie:'烬灭',
			jsrgjinmie_info:'魏势力技。出牌阶段限一次。你可以选择一名手牌数大于你的角色，你视为对其使用一张火【杀】。当此牌造成伤害后，你将其手牌数弃置至与你相同。',
			jsrg_lvbu:'承吕布',
			jsrg_lvbu_prefix:'承',
			jsrgwuchang:'无常',
			jsrgwuchang_info:'锁定技。①当你获得其他角色的牌后，你变更势力为与其相同。②当你使用【杀】或【决斗】对与你势力相同的目标角色造成伤害时，此伤害+1，然后变更势力为群。',
			jsrgqingjiao:'轻狡',
			jsrgqingjiao_info:'群势力技。出牌阶段各限一次。你可以将一张牌当【推心置腹】/【趁火打劫】对一名手牌数大于/小于你的角色使用。',
			jsrgchengxu:'乘虚',
			jsrgchengxu_info:'蜀势力技。与你势力相同的其他角色不能响应你使用的牌。',
			jsrg_zhanghe:'承张郃',
			jsrg_zhanghe_prefix:'承',
			jsrgqiongtu:'穷途',
			jsrgqiongtu_info:'群势力技。每回合限一次。你可以将一张非基本牌置于武将牌上视为使用一张【无懈可击】。若此牌生效，你摸一张牌，否则你变更势力为魏并获得所有“穷途”牌。',
			jsrgxianzhu:'先著',
			jsrgxianzhu_info:'魏势力技。你可以将一张普通锦囊牌当无次数限制的【杀】使用。当此牌对唯一目标造成伤害后，你视为对该角色使用一张此普通锦囊牌。',
			jsrg_zoushi:'承邹氏',
			jsrg_zoushi_prefix:'承',
			jsrgguyin:'孤吟',
			jsrgguyin_info:'准备阶段，你可以翻面，且令所有其他男性角色依次选择是否翻面。然后你和所有背面朝上的角色轮流各摸一张牌，直到你们累计以此法得到X张牌（X为场上存活角色与死亡角色中男性角色数）。',
			jsrgzhangdeng:'帐灯',
			jsrgzhangdeng_info:'①当一名武将牌背面朝上的角色需要使用【酒】时，若你的武将牌背面朝上，其可以视为使用之。②当一名角色于一回合第二次发动〖帐灯①〗时，你将武将牌翻面至正面朝上。',
			jsrg_guanyu:'承关羽',
			jsrg_guanyu_prefix:'承',
			jsrgguanjue:'冠绝',
			jsrgguanjue_info:'锁定技。当你使用或打出有花色的牌时，你令所有其他角色于此回合内不能使用或打出该花色的牌。',
			jsrgnianen:'念恩',
			jsrgnianen_info:'你可以将一张牌当任意基本牌使用或打出，然后若此牌不为红色或你以此法使用或打出的牌不为普通【杀】，则直到此回合结束，该技能失效且你视为拥有〖马术〗。',
			jsrg_chendeng:'承陈登',
			jsrg_chendeng_prefix:'承',
			jsrglunshi:'论势',
			jsrglunshi_info:'出牌阶段限一次。你可以令一名角色摸等同于其攻击范围内角色数的牌（至多摸至五张），然后其弃置等同于攻击范围内含有其的角色数的牌。',
			jsrgguitu:'诡图',
			jsrgguitu_info:'准备阶段，你可以交换场上的两张武器牌，然后攻击范围以此法减少的角色回复1点体力。',
			jsrg_zhenji:'承甄宓',
			jsrg_zhenji_prefix:'承',
			jsrgjixiang:'济乡',
			jsrgjixiang_info:'回合内每种牌名限一次。当一名其他角色需要使用或打出一张基本牌时，你可以弃置一张牌令其视为使用或打出之，然后你摸一张牌并令〖称贤〗于此阶段可发动次数上限+1。',
			jsrgchengxian:'称贤',
			jsrgchengxian_info:'出牌阶段限两次。你可以将一张手牌当一张本回合未以此法使用过的普通锦囊牌使用（此转化牌须与以此法转化的手牌的合法目标数相同）。',
			jsrg_zhangliao:'承张辽',
			jsrg_zhangliao_prefix:'承',
			jsrgzhengbing:'整兵',
			jsrgzhengbing_info:'群势力技。出牌阶段限三次。你可以重铸一张牌，若此牌为：【杀】，你本回合手牌上限+2；【闪】，你摸一张牌；【桃】，你变更势力为魏。',
			jsrgtuwei:'突围',
			jsrgtuwei_info:'魏势力技。出牌阶段开始时，你可以获得攻击范围内任意名角色各一张牌。然后此回合结束时，这些角色中未于本回合受到过伤害的角色依次获得你的一张牌。',
			jsrg_xugong:'承许贡',
			jsrg_xugong_prefix:'承',
			jsrgbiaozhao:'表召',
			jsrgbiaozhao_info:'准备阶段，你可以选择两名其他角色A和B。直到你的下回合开始时或你死亡后，A对B使用牌无次数和距离限制，且B对你使用的牌造成的伤害+1。',
			jsrgyechou:'业仇',
			jsrgyechou_info:'当你死亡时，你可以令一名其他角色获得如下效果：当其受到伤害值不小于其体力值的伤害时，其令此伤害翻倍。',
			jsrg_chunyuqiong:'承淳于琼',
			jsrg_chunyuqiong_prefix:'承',
			jsrgcangchu:'仓储',
			jsrgcangchu_info:'一名角色的结束阶段，你可以令至多X名角色各摸一张牌，若X大于存活角色数，则改为各摸两张牌（X为你于此回合得到的牌数）。',
			jsrgshishou:'失守',
			jsrgshishou_info:'锁定技。①当你使用【酒】时，你摸三张牌，然后你本回合不能再使用牌。②当你受到火焰伤害后，你令〖仓储〗失效直到你的下回合结束后。',
			//江山如故·转
			ying:'影',
			ying_info:'当此牌进入弃牌堆后，系统将此牌移出游戏。',
			jsrg_guojia:'梦郭嘉',
			jsrg_guojia_prefix:'梦',
			jsrgqingzi:'轻辎',
			jsrgqingzi_info:'准备阶段，你可以弃置任意名其他角色装备区里的各一张牌，然后令这些角色获得〖神速〗直到你的下回合开始。',
			jsrgdingce:'定策',
			jsrgdingce_info:'当你受到伤害后，你可以依次弃置你与伤害来源的各一张手牌。若这两张牌颜色相同，你视为使用一张【洞烛先机】。',
			jsrgzhenfeng:'针锋',
			jsrgzhenfeng_info:'出牌阶段每种类别各限一次。你可以视为使用一张存活角色的技能描述中包含的基本牌或普通锦囊牌（无距离和次数限制）。当此牌对技能描述中包含此牌的角色生效时，你对其造成1点伤害。',
			jsrg_zhangfei:'转张飞',
			jsrg_zhangfei_prefix:'转',
			jsrgbaohe:'暴喝',
			jsrgbaohe_info:'一名角色的出牌阶段结束时，你可以弃置两张牌，然后视为你对攻击范围内包含其的所有角色使用一张【杀】。当一名角色使用牌响应此【杀】后，此【杀】对后续目标角色造成的伤害+1。',
			jsrgxushi:'虚势',
			jsrgxushi_info:'出牌阶段限一次。你可以交给任意名角色各一张牌，然后你获得两倍数量的【影】。',
			jsrg_machao:'转马超',
			jsrg_machao_prefix:'转',
			jsrgzhuiming:'追命',
			jsrgzhuiming_info:'当你使用【杀】指定唯一目标后，你可以声明一种颜色并令目标角色弃置任意张牌，然后你展示目标角色一张牌。若此牌颜色与你声明的颜色相同，则此【杀】不计入次数限制、不可被响应且伤害+1。',
			jsrg_lougui:'转娄圭',
			jsrg_lougui_prefix:'转',
			jsrgshacheng:'沙城',
			jsrgshacheng_info:'①游戏开始时，你将牌堆顶的两张牌置于武将牌上，称为“城”。②当一名角色使用【杀】结算结束后，你可以移去一张“城”，令此牌的其中一名目标角色摸X张牌（X为该角色本回合失去过的牌数且至多为5）。',
			jsrgninghan:'凝寒',
			jsrgninghan_info:'锁定技。①所有角色手牌中的♣【杀】均视为冰【杀】。②当一名角色受到冰冻伤害后，你将造成此伤害的牌对应的实体牌置入“城”。',
			jsrg_zhangren:'转张任',
			jsrg_zhangren_prefix:'转',
			jsrgfuni:'伏匿',
			jsrgfuni_info:'锁定技。①你的攻击范围终值为0。②一轮游戏开始时，你令任意名角色获得共计X张【影】（X为存活角色数的一半，向上取整）。③当有牌进入弃牌堆后，若其中有【影】，你于本回合使用牌无距离限制且不能被响应。',
			jsrgchuanxin:'穿心',
			jsrgchuanxin_info:'一名角色的结束阶段，你可以将一张牌当【杀】使用。当一名角色受到渠道为此【杀】的伤害时，此伤害+Y（Y为其本回合回复过的体力值）。',
			jsrg_huangzhong:'转黄忠',
			jsrg_huangzhong_prefix:'转',
			jsrgcuifeng:'摧锋',
			jsrgcuifeng_info:'限定技。出牌阶段，你可以视为使用一张单目标的伤害类牌（无距离限制）。此回合结束时，若此牌未造成伤害或造成的伤害值大于1，你重置〖摧锋〗。',
			jsrgdengnan:'登难',
			jsrgdengnan_info:'限定技。出牌阶段，你可以视为使用一张非伤害类普通锦囊牌。此回合结束时，若此牌的目标均于此回合受到过伤害，你重置〖登难〗。',
			jsrg_xiahourong:'转夏侯荣',
			jsrg_xiahourong_prefix:'转',
			jsrgfenjian:'奋剑',
			jsrgfenjian_info:'每回合各限一次。当你需要对其他角色使用【决斗】或【桃】时，你可以令你本回合受到的伤害+1，视为使用之。',
			jsrg_sunshangxiang:'转孙尚香',
			jsrg_sunshangxiang_prefix:'转',
			jsrgguiji:'闺忌',
			jsrgguiji_info:'每回合限一次。出牌阶段，你可以与一名手牌数小于你的男性角色交换手牌。然后其下个出牌阶段结束时，你可以与其交换手牌。',
			jsrgjiaohao:'骄豪',
			jsrgjiaohao_info:'①其他角色的出牌阶段限一次。其可以将手牌中的一张装备牌置于你的装备区。②准备阶段，你获得X张【影】（X为你空置装备栏数的一半，向上取整）。',
			jsrg_pangtong:'转庞统',
			jsrg_pangtong_prefix:'转',
			jsrgmanjuan:'漫卷',
			jsrgmanjuan_info:'若你没有手牌，你可以如手牌般使用或打出于本回合进入弃牌堆的牌（每种点数每回合限一次）。',
			jsrgyangming:'养名',
			jsrgyangming_info:'出牌阶段限一次。你可以与一名角色拼点，若其：没赢，你可以与其重复此流程；赢，其摸X张牌，然后你回复1点体力（X为其此阶段没赢的次数）。',
			jsrg_hansui:'转韩遂',
			jsrg_hansui_prefix:'转',
			jsrgniluan:'逆乱',
			jsrgniluan_info:'准备阶段，你可以选择一项：1.弃置一张牌，对一名未对你造成过伤害的角色造成1点伤害；2.令一名对你造成过伤害的角色摸两张牌。',
			jsrghuchou:'互雠',
			jsrghuchou_info:'锁定技。当你对最后对你使用伤害类牌的角色造成伤害时，此伤害+1。',
			jsrgjiemeng:'皆盟',
			jsrgjiemeng_info:'主公技，锁定技。所有群势力角色至其他角色的距离-X（X为群势力角色数）。',
			jsrg_zhangchu:'转张楚',
			jsrg_zhangchu_prefix:'转',
			jsrghuozhong:'惑众',
			jsrghuozhong_info:'所有角色出牌阶段限一次。其可以将一张黑色非锦囊牌当【兵粮寸断】置于其判定区，然后令你摸两张牌。',
			jsrgrihui:'日彗',
			jsrgrihui_info:'①当你使用【杀】对目标角色造成伤害后，你可以令判定区有牌的其他角色各摸一张牌。②你于一回合内对判定区没有牌的角色使用的第一张【杀】无任何次数限制。',
			jsrg_xiahouen:'转夏侯恩',
			jsrg_xiahouen_prefix:'转',
			jsrghujian:'护剑',
			jsrghujian_info:'①游戏开始时，你从游戏外获得一张【赤血青锋】。②一名角色的回合结束时，此回合最后一名使用或打出牌的角色可以获得弃牌堆中的【赤血青锋】。',
			jsrgshili:'恃力',
			jsrgshili_info:'出牌阶段限一次。你可以将一张手牌中的装备牌当【决斗】使用。',
			jsrg_fanjiangzhangda:'转范强张达',
			jsrg_fanjiangzhangda_ab:'转范疆张达',
			jsrg_fanjiangzhangda_prefix:'转',
			jsrgfushan:'负山',
			jsrgfushan_info:'出牌阶段开始时，所有其他角色可以依次交给你一张牌并令你此阶段使用【杀】的次数上限+1。此阶段结束时，若你使用【杀】的次数未达到上限且此阶段以此法交给你牌的角色均存活，你失去2点体力，否则你将手牌摸至体力上限。',
			//江山如故·合
			jsrg_zhugeliang:'梦诸葛亮',
			jsrg_zhugeliang_prefix:'梦',
			jsrgwentian:'问天',
			jsrgwentian_info:'①你可以将牌堆顶的牌当【无懈可击】/【火攻】使用，若此牌不为黑色/红色，〖问天〗于本轮失效。②每回合限一次。你的一个阶段开始时，你可以观看牌堆顶的五张牌，然后将其中一张牌交给一名其他角色，将其余牌以任意顺序置于牌堆顶或牌堆底。',
			jsrgchushi:'出师',
			jsrgchushi_info:'出牌阶段限一次。若你不为主公，你可以与主公议事。若结果为：红色，你与其各摸一张牌，若你与其手牌数之和小于7，重复此流程；黑色，当你于本轮内造成属性伤害时，此伤害+1。',
			jsrgyinlve:'隐略',
			jsrgyinlve_info:'每轮各限一次。当一名角色受到火焰/雷电伤害时，你可以防止此伤害，然后于当前回合结束后执行一个只有摸牌/弃牌阶段的回合。',
			jsrg_jiangwei:'合姜维',
			jsrg_jiangwei_prefix:'合',
			jsrgjinfa:'矜伐',
			jsrgjinfa_info:'出牌阶段限一次。你可以展示一张手牌，然后令所有体力上限不大于你的角色议事。若结果与此牌颜色：相同，你令其中至多两名角色将手牌摸至体力上限；不同，你获得两张【影】。然后若没有其他角色与你意见相同，你可以变更势力。',
			jsrgfumou:'复谋',
			jsrgfumou_info:'魏势力技。当你议事结算结束后，与你意见不同的角色本回合不能使用或打出与其意见颜色相同的牌，你可以将一张【影】当【出其不意】对一名与你意见不同的角色使用。',
			jsrgxuanfeng:'选锋',
			jsrgxuanfeng_info:'蜀势力技。你可以将一张【影】当无距离和次数限制的刺【杀】使用。',
			jsrg_luxun:'合陆逊',
			jsrg_luxun_prefix:'合',
			jsrgyoujin:'诱进',
			jsrgyoujin_info:'出牌阶段开始时，你可以与一名角色拼点，你与其本回合不能使用或打出点数小于自己拼点牌的手牌，且赢的角色视为对没赢的角色使用一张【杀】。',
			jsrgdailao:'待劳',
			jsrgdailao_info:'出牌阶段，若你没有可以使用的手牌，你可以展示所有手牌并摸两张牌，然后结束此回合。',
			jsrgzhubei:'逐北',
			jsrgzhubei_info:'锁定技。①当你对本回合受到过伤害的角色造成伤害时，此伤害+1。②你对本回合失去过最后手牌的角色使用牌无次数限制。',
			jsrg_zhaoyun:'合赵云',
			jsrg_zhaoyun_prefix:'合',
			jsrglonglin:'龙临',
			jsrglonglin_info:'其他角色于其出牌阶段内首次使用【杀】指定第一个目标后，你可以弃置一张牌令此【杀】无效，然后其可以视为对你使用一张【决斗】，你以此法造成伤害后，其本阶段不能再使用手牌。',
			jsrgzhendan:'镇胆',
			jsrgzhendan_info:'①你可以将一张非基本手牌当任意基本牌使用或打出。②当你受到伤害后，你摸X张牌并令该技能本轮失效（X为本轮所有角色执行过的回合数且至多为5）。③一轮游戏开始时，若上一轮该技能未因〖镇胆②〗失效过，你摸Y张牌（Y为上一轮所有角色执行过的回合数且至多为5）。',
			jsrg_simayi:'合司马懿',
			jsrg_simayi_prefix:'合',
			jsrgyingshi:'鹰眎',
			jsrgyingshi_info:'当你翻面时，你可以观看牌堆底的三张牌（若死亡角色数大于2则改为五张），然后将其中任意数量的牌以任意顺序置于牌堆顶，其余以任意顺序置于牌堆底。',
			jsrgtuigu:'蜕骨',
			jsrgtuigu_info:'①回合开始时，你可以翻面并令你本回合的手牌上限+X，然后摸X张牌并视为使用一张【解甲归田】（X为存活角色数的一半，向下取整），目标角色不能使用以此法得到的牌直到其回合结束。②一轮游戏开始时，若你上一轮未执行过回合（因〖蜕骨②〗执行的回合除外），你获得一个额外的回合。③当你失去装备牌里的牌后，你回复1点体力。',
			jsrg_guoxun:'合郭循',
			jsrg_guoxun_prefix:'合',
			jsrgeqian:'遏前',
			jsrgeqian_info:'①结束阶段，你可以蓄谋任意次。②当你使用【杀】或蓄谋牌指定其他角色为唯一目标后，你可以令此牌不计入次数限制并获得目标一张牌，然后其可以令你本回合至其的距离+2。',
			jsrgfusha:'伏杀',
			jsrgfusha_info:'限定技。出牌阶段，若你的攻击范围内仅有一名角色，你可以对其造成X点伤害（X为你的攻击范围，至多为游戏人数）。',
			jsrg_sunlubansunluyu:'合大小虎',
			jsrg_sunlubansunluyu_prefix:'合',
			jsrgdaimou:'殆谋',
			jsrgdaimou_info:'每回合各限一次。当一名角色使用【杀】指定其他角色/你为目标时，你可以用牌堆顶的牌蓄谋/你须弃置你区域里的一张蓄谋牌。',
			jsrgfangjie:'芳洁',
			jsrgfangjie_info:'准备阶段，若你没有蓄谋牌，你回复1点体力并摸一张牌，否则你可以弃置你区域里的任意张蓄谋牌并失去〖芳洁〗。',
			jsrg_caofang:'合曹芳',
			jsrg_caofang_prefix:'合',
			jsrgzhaotu:'诏图',
			jsrgzhaotu_info:'每轮限一次。你可以将一张红色非锦囊牌当【乐不思蜀】使用，然后当前回合结束后，目标执行一个手牌上限-2的额外回合。',
			jsrgjingju:'惊惧',
			jsrgjingju_info:'当你需要使用任意一种基本牌时，你可以将其他角色判定区里的一张牌移动至你的判定区，视为你使用之。',
			jsrgweizhui:'危坠',
			jsrgweizhui_info:'主公技。其他魏势力角色的结束阶段，其可以将一张黑色手牌当【过河拆桥】对你使用。',
			jsrg_sunjun:'合孙峻',
			jsrg_sunjun_prefix:'合',
			jsrgyaoyan:'邀宴',
			jsrgyaoyan_info:'准备阶段，你可以令所有角色依次选择是否于回合结束时议事，若议事结果为：红色，你获得任意名未议事的角色各一张手牌；黑色，你可以对一名议事的角色造成2点伤害。',
			jsrgbazheng:'霸政',
			jsrgbazheng_info:'当你参与的议事展示意见时，本回合受到过你伤害的角色意见视为与你相同。',
			jsrg_liuyong:'合刘永',
			jsrg_liuyong_prefix:'合',
			jsrgdanxin:'丹心',
			jsrgdanxin_info:'你可以将一张牌当【推心置腹】使用，你展示以此法交出与得到的牌，以此法得到♥牌的角色回复1点体力，然后你至目标角色的距离+1直到回合结束。',
			jsrgfengxiang:'封乡',
			jsrgfengxiang_info:'锁定技。当你受到伤害后，你与一名其他角色交换装备区里的所有牌。若你装备区里的牌因此减少，你摸等同于减少牌数的牌。',
			jsrg_weiwenzhugezhi:'合卫温诸葛直',
			jsrg_weiwenzhugezhi_prefix:'合',
			jsrgfuhai:'浮海',
			jsrgfuhai_info:'出牌阶段限一次。你可以令所有有手牌的其他角色同时展示一张手牌，然后你选择一个方向并摸X张牌（X为该方向上的角色展示的点数连续严格递增或严格递减的牌数，至少为1）。',
			jsrg_zhangxuan:'合张嫙',
			jsrg_zhangxuan_prefix:'合',
			jsrgtongli:'同礼',
			jsrgtongli_info:'当你于出牌阶段内使用基本牌或普通锦囊牌指定第一个目标后，若你手牌中的花色数和你于本阶段内使用过的牌数相等，则你可以展示所有手牌，令此牌额外结算一次。',
			jsrgshezang:'奢葬',
			jsrgshezang_info:'每轮限一次。当你或你回合内的其他角色进入濒死状态时，你可以亮出牌堆顶的四张牌，获得其中任意张花色各不相同的牌。',
			jsrg_gaoxiang:'合高翔',
			jsrg_gaoxiang_prefix:'合',
			jsrgchiying:'驰应',
			jsrgchiying_info:'出牌阶段限一次。你可以选择一名角色，令其攻击范围内的其他角色依次弃置一张牌。若以此法弃置的基本牌数不大于其体力值，其获得这些基本牌。',
			jsrg_guozhao:'合郭照',
			jsrg_guozhao_prefix:'合',
			jsrgpianchong:'偏宠',
			jsrgpianchong_info:'一名角色的结束阶段，若你于此回合内失去过牌，你可以判定。若结果为红色/黑色，你摸此回合进入弃牌堆的红色/黑色牌数量的牌。',
			jsrgzunwei:'尊位',
			jsrgzunwei_info:'出牌阶段限一次。你可以选择一名其他角色并选择执行一项，然后移除该选项：1.将手牌数摸至与该角色相同（最多摸五张）；2.将其装备牌移至你的装备区，直到你装备区的牌数不少于其；3.将体力值回复至与该角色相同。',

			xumou_jsrg:'蓄谋',
			xumou_jsrg_info:'“蓄谋”牌可在判定区内重复存在。判定阶段开始时，你选择一项：⒈使用此牌对应的实体牌，然后本阶段不能再使用此牌名的牌；⒉将所有的“蓄谋”牌置入弃牌堆。',

			jiangshanrugu_qi:'江山如故·起',
			jiangshanrugu_cheng:'江山如故·承',
			jiangshanrugu_zhuan:'江山如故·转',
			jiangshanrugu_he:'江山如故·合',
		},
	};
});
