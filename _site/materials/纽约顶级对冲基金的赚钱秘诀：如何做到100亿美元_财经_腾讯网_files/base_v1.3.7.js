document.domain="qq.com";var T=92,statu1=0,t=0,tt=null,isArea=0,isRec=false,navVar=false,nav=qq.G("nav"),goTop=qq.G("goTop"),ie6=qq.B.ie6,temp,g_tcbd_cfr={},recommendTips=qq.G("recommendTips"),userLoginStatus=0,clickStu=false,accessPlayer;var timer_scroll=null;function windowScroll(c,a){var b=0;clearInterval(timer_scroll);timer_scroll=setInterval(function(){b=(c-qq.scrollY())/5;b=b>0?Math.ceil(b):Math.floor(b);if(qq.scrollY()==c){clearInterval(timer_scroll);a&&a()}else{qq.scrollTo(0,qq.scrollY()+b)}},10)}qq.EA(window,"scroll",function(){var a=qq.scrollY();qq.scrollY()>400?goTop.style.display="block":goTop.style.display="none";var c=qq.windowHeight(),b=qq.getY(recommendTips);if(a>(b-c+50)&&isRec){qq.showOpacity(recommendTips,400,50);isRec=false;tongji_2()}if(!ie6){if(a<T){T=a+1;if(navVar){return}else{qq.G("nav").style.position="fixed";navVar=true}}else{T=a;if(!navVar){return}else{qq.G("nav").style.position="static";navVar=false}}}});if(qq.G("goCmt")){qq.EA(qq.G("goCmt"),"click",function(){isArea=1})}qq.G("goAbout")&&qq.EA(qq.G("goAbout"),"click",function(){isArea=1});qq.G("goTop")&&qq.EA(qq.G("goTop"),"click",function(){windowScroll(0);return false});try{qq.EA(qq.G("shareBtn"),"mouseover",function(){qq.addClass(qq.G("shareBtn"),"hover")});qq.EA(qq.G("shareBtn"),"mouseout",function(){qq.removeClass(qq.G("shareBtn"),"hover")});qq.each(qq.GT(qq.G("shareBtn"),"li"),function(d,c){d.onmouseover=function(){this.className="hover"};d.onmouseout=function(){this.className=""}})}catch(e){}var matchName=window.ARTICLE_INFO.subName;matchNav(matchName);function matchNav(h){if(!qq.G("navList")){return}var b=[],d,g=qq.GT(qq.G("navList"),"a"),f=false;for(var c=0,a=g.length;c<a;c++){if(h.cname&&h.cname.indexOf(g[c].innerHTML)!=-1){g[c].className="cur";f=true;return}}if(!f){d=qq.DC("a");d.href=h.url;d.className="cur";qq.A(d,"target","_blank");d.innerHTML=h.cname;qq.append(d,qq.G("navList"))}}var loveReadUrl="http://i.match.qq.com/cfr/get?"+Math.random();function initLoveRead(a){var b=qq.G("loveReadList"),c="";qq.getScript(a,function(){if(g_tcbd_cfr.code==0){if(g_tcbd_cfr.total==0){recommendTips.style.display="none";return}var g=g_tcbd_cfr.data,d,f;d=g_tcbd_cfr.total>2?2:g_tcbd_cfr.total;for(f=0;f<d;f++){c+='<li><a target="_blank" href="'+g[f][0]+'">'+g[f][1]+"</a> <span>"+g[f][2]+"\u4eba\u770b\u8fc7</span></li>"}b.innerHTML=c;recommendTips.style.display="block";isRec=true}else{if(g_tcbd_cfr.code==1){recommendTips.style.display="none"}}},"utf-8")}initLoveRead(loveReadUrl);function hotRead(){if(!qq.G("hotReadList")){return}var b=qq.GC(qq.G("hotReadList"),".hot-voting"),a=48;for(var c=4;c>=0;c--){b[c].style.width=a*((9-c)/10)+5*Math.random()+"px"}}hotRead();if(!qq.G("listvideoN")){try{var t,videoPlayer,videoPlayer,_vIn,_vOut,showVideoPic;qq.EA(qq.G("relInfo"),"click",function(){showVideo(1);var b=qq.G("relVideo"),a=qq.G("relInfo");a.style.display="none";qq.showOpacity(b,200,20);qq.animate(b.style,"height",0,548,50)});function showVideo(a){qq.getScript("http://qzs.qq.com/tencentvideo_v1/js/tvp/tvp.player.js",function(){videoInfo=new tvp.VideoInfo();videoInfo.setVid(flash_vid);videoInfo.setTitle(flash_title);videoPlayer=new tvp.Player(640,518);videoPlayer.setCurVideo(videoInfo);videoPlayer.addParam("autoplay",a);videoPlayer.addParam("adplay",0);videoPlayer.addParam("pic",flash_pic);videoPlayer.addParam("wmode","transparent");videoPlayer.write("mod_player")},"utf-8",true);accessPlayer=1;if(qq.G("focusHub")){qq.G("focusHub").focus()}}qq.EA(qq.G("v_colse"),"click",function(){videoPlayer.pause();qq.G("relVideo").style.display="none";qq.G("relInfo").style.display="block";qq.G("relInfo").style.height="105px";qq.showOpacity(qq.G("relInfo"),200,50)});qq.EA(qq.G("relInfo"),"mouseover",function(){qq.addClass(qq.G("relInfo"),"relStatus")});qq.EA(qq.G("relInfo"),"mouseout",function(){qq.removeClass(qq.G("relInfo"),"relStatus")});if(qq.G("moreTvBtn")&&qq.G("moreTv")){var mbtn=qq.G("moreTvBtn"),mList=qq.G("moreTv");qq.EA(qq.G("relVideo"),"mousemove",function(){mbtn.style.visibility="visible"});qq.EA(qq.G("relVideo"),"mouseout",function(){mbtn.style.visibility="hidden"});qq.EA(mbtn,"mouseover",function(a){clearTimeout(_vOut);if(!_vIn){qq.animate(qq.G("moreTv").style,"right",-339,0,50);mbtn.style.visibility="hidden";_vIn=true,_vOut=null}});qq.EA(mList,"mouseover",function(a){clearTimeout(_vOut)});qq.EA(mList,"mouseout",function(a){clearTimeout(_vOut);_vOut=setTimeout(function(){qq.animate(mList.style,"right",0,-339,50);mbtn.style.visibility="hidden"},500);_vIn=false});qq.B.ie6&&qq.each(qq.GT(mList,"li"),function(d,c){d.onmouseover=function(){this.className="hover"};d.onmouseout=function(){this.className=""}})}qq.EA(window,"load",function(){var b=qq.G("relVideo"),a=qq.G("relInfo");if(showVideoPic){b.style.cssText="width:640px; height:548px; display:block";a.style.cssText="height:0";showVideo(0)}else{b.style.cssText="height:0; display:none";a.style.cssText="height:105px; display:block"}})}catch(e){}}_MUI.ready(function(){_MI.WebSCard.build("mbSourceCard","qqcom.dp.titleinfo");_MI.WebSCard.build("Cnt-Main-Article-QQ","qqcom.keyword",".a-tips-Article-QQ");_MI.ShareArticlePic.build("Cnt-Main-Article-QQ","qqcom.dp.sharepic")});var bossID=1604,purl=location.href,userQQ=qq.cookie("uin")?Number(qq.cookie("uin").substring(1)):"";function tongji_1(){var a="http://btrace.qq.com/collect?sIp=&iQQ="+userQQ+"&sBiz=jirihuati&sOp=expicNews&iSta=&iTy="+bossID+"&iFlow=&sUrl="+escape(location.href)+"&iBak=&sBak=&ran="+Math.random();gImage_1=new Image(1,1);gImage_1.src=a}function tongji_2(){var a="http://btrace.qq.com/collect?sIp=&iQQ="+userQQ+"&sBiz=tonghaoyuedu&sOp=exthRead&iSta=&iTy="+bossID+"&iFlow=&sUrl="+escape(location.href)+"&iBak=&sBak=&ran="+Math.random();gImage_2=new Image(1,1);gImage_2.src=a}qq.EA(document,"keydown",function(d){var c=false,b=false,a=false,d=qq.E(d);if(d.alt){c=true}if(d.key==50){b=true}if(d.key==51){a=true}if(c&&b){qq.G("nav").getElementsByTagName("div")[0].setAttribute("title","\u5bfc\u822a\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4e0a\u4e0b\u952e\u6765\u9009\u62e9\u5bfc\u822a");rwAccess_2()}if(c&&a){qq.G("Cnt-Main-Article-QQ").parentNode.setAttribute("title","\u6b63\u6587\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4e0a\u4e0b\u952e\u6765\u9605\u8bfb\u5185\u5bb9");rwAccess_3()}});if(qq.G("accessPlay")){qq.G("accessPlay").onfocus=function(){rwAccess_v()}}var accessPlayerState=1;qq.EA(qq.G(document),"keydown",function(a){var b=false,a=qq.E(a);if(a.key==32){b=true}if(b&&accessPlayer){if(accessPlayer&&accessPlayerState==1){videoPlayer.pause();accessPlayerState=0}else{if(accessPlayer&&accessPlayerState==0){videoPlayer.play();accessPlayerState=1}}}});qq.EA(qq.G(document),"keydown",function(b){var a=false,b=qq.E(b);if(b.key==27){a=true}if(a&&accessPlayer){videoPlayer.pause();qq.G("relVideo").style.display="none";qq.G("relInfo").style.display="block";qq.G("relInfo").style.height="105px";qq.showOpacity(qq.G("relInfo"),200,50);qq.G("goRead").focus()}});function rwAccess_v(){var a="http://btrace.qq.com/collect?sIp=&iQQ=&sBiz=&sOp=accesskeyV&iSta=&iTy=1617&iFlow=&iSite="+escape(location.hostname)+"&sUrl=&sRefer=&sLink=&iUseragent=&iScreen=&iRes1=&iRes2=&iRes3=&iRes4="+Math.random();rwImage_v=new Image(1,1);rwImage_v.src=a}function rwAccess_2(){var a="http://btrace.qq.com/collect?sIp=&iQQ=&sBiz=&sOp=accesskey2&iSta=&iTy=1617&iFlow=&iSite="+escape(location.hostname)+"&sUrl=&sRefer=&sLink=&iUseragent=&iScreen=&iRes1=&iRes2=&iRes3=&iRes4="+Math.random();rwImage_2=new Image(1,1);rwImage_2.src=a}function rwAccess_3(){var a="http://btrace.qq.com/collect?sIp=&iQQ=&sBiz=&sOp=accesskey3&iSta=&iTy=1617&iFlow=&iSite="+escape(location.hostname)+"&sUrl=&sRefer="+escape(document.referrer)+"&sLink=&iUseragent="+navigator.userAgent+"&iScreen="+screen.width+"*"+screen.height+"&iRes1=&iRes2=&iRes3=&iRes4="+Math.random();rwImage_3=new Image(1,1);rwImage_3.src=a}function ExposureBoss(c,a){var b="http://btrace.qq.com/collect?sIp=&iQQ="+userQQ+"&sBiz="+(arguments[2]?arguments[2]:"")+"&sOp="+a+"&iSta=&iTy="+c+"&iFlow=&sUrl="+escape(location.href)+"&iBak=&sBak=&ran="+Math.random();gImage=new Image(1,1);gImage.src=b}qq.EA(window,"load",function(){showTCBD()});function showTCBD(){qq.getScript("http://i.match.qq.com/tips?ran="+Math.random(),function(){if(typeof(TubdTipsCall)=="function"){TubdTipsCall()}},"utf-8")};
/*  |xGv00|e25ee8dd860f13963d4ffc75f6779953 */