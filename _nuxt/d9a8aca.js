(window.webpackJsonp=window.webpackJsonp||[]).push([[54,2,3,4,5,6,8,19,20,21,22,27,28,29,31,32,33,34,35,36],{359:function(t,e,n){var content=n(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("0573e392",content,!0,{sourceMap:!1})},360:function(t,e,n){"use strict";n(359)},361:function(t,e,n){var o=n(19)((function(i){return i[1]}));o.push([t.i,"h1[data-v-fb2b20a4]{margin-top:2rem;margin-bottom:2rem;width:100%;text-align:center;font-size:1.875rem;line-height:2.25rem}h2[data-v-fb2b20a4]{margin-top:5rem;margin-bottom:1.5rem;width:100%;font-size:1.5rem;line-height:2rem}h3[data-v-fb2b20a4]{margin-top:2.5rem;margin-bottom:1rem;width:100%;font-size:1.25rem;line-height:1.75rem}.paragraph[data-v-fb2b20a4], p[data-v-fb2b20a4]{margin-top:0.25rem;margin-bottom:1rem;width:100%;text-align:justify}span.text-2s[data-v-fb2b20a4]{font-size:.625rem}ul[data-v-fb2b20a4]{margin-bottom:1.5rem}ul.list-disc[data-v-fb2b20a4]{padding-left:3rem}li[data-v-fb2b20a4]{margin-top:0.25rem;margin-bottom:0.25rem}",""]),o.locals={},t.exports=o},362:function(t,e,n){"use strict";n.r(e);var o={name:"I18nPageWrapper",props:{customX:{type:Boolean,default:!1},customY:{type:Boolean,default:!1}},computed:{classObject:function(){return{"w-full":!0,"px-8":!this.customX,"py-24":!this.customY,"sm:px-20":!this.customX,"md:px-32":!this.customX,"lg:px-32":!this.customX}}}},r=(n(360),n(5)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.classObject},[t._t("default")],2)}),[],!1,null,"fb2b20a4",null);e.default=component.exports},363:function(t,e,n){var content=n(367);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("25a57eac",content,!0,{sourceMap:!1})},365:function(t,e,n){"use strict";n.r(e);var o=n(28),r={name:"CoreTextButton",components:{ExtLink:o.ExtLink,LocaleLink:o.LocaleLink},props:{primary:{type:Boolean,default:!0},secondary:{type:Boolean,default:!1},rounded:{type:Boolean,default:!0},block:{type:Boolean,default:!1},href:{type:String,default:void 0},to:{type:String,default:void 0}},computed:{coreButtonClasses:function(){return{"core-button":!0,"--primary":this.primary,"--secondary":this.secondary,"--rounded":this.rounded,"--block":this.block,"--is-link":this.isLink}},isLink:function(){return this.href||this.to}}},l=(n(366),n(5)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:t.coreButtonClasses},[t.href?n("ext-link",{attrs:{href:t.href}},[t._t("default")],2):t.to?n("locale-link",{attrs:{to:t.to,customized:""}},[t._t("default")],2):t._t("default")],2)}),[],!1,null,"70f10e0f",null);e.default=component.exports},366:function(t,e,n){"use strict";n(363)},367:function(t,e,n){var o=n(19)((function(i){return i[1]}));o.push([t.i,".core-button[data-v-70f10e0f]{outline:none;background-color:transparent}.core-button.--is-link>a[data-v-70f10e0f],.core-button[data-v-70f10e0f]:not(.--is-link){display:inline-flex;align-items:center;justify-content:center;min-width:88px;height:2.25rem;padding:24px 40px;line-height:1.25rem;border-radius:5px;text-transform:uppercase;outline:none;font-weight:700;font-size:1rem}.core-button.--rounded.--is-link>a[data-v-70f10e0f],.core-button.--rounded[data-v-70f10e0f]:not(.--is-link){border-radius:9999px}.core-button.--primary.--is-link>a[data-v-70f10e0f],.core-button.--primary[data-v-70f10e0f]:not(.--is-link){color:#c2a53a;border:.25rem solid #c2a53a}.core-button.--secondary.--is-link>a[data-v-70f10e0f],.core-button.--secondary[data-v-70f10e0f]:not(.--is-link){color:#c7c7c7;border:.25rem solid #c7c7c7;font-size:.8rem}.core-button.--is-link>a[data-v-70f10e0f]:hover,.core-button[data-v-70f10e0f]:not(.--is-link):hover{color:#7568f6;border-color:#7568f6}",""]),o.locals={},t.exports=o},371:function(t,e,n){var content=n(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("430df4d4",content,!0,{sourceMap:!1})},372:function(t,e,n){var content=n(391);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("11a1a7d1",content,!0,{sourceMap:!1})},373:function(t,e,n){"use strict";n.r(e);n(385);var o={name:"SponsorCard",props:{logoUrl:{type:String,default:""},tag:{type:String,default:""},small:{type:Boolean,default:!1}},computed:{classObject:function(){return{sponsorCard:!0,"-small":this.small}}}},r=(n(388),n(5)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:!!t.logoUrl,expression:"!!logoUrl"}],class:t.classObject},[n("img",{attrs:{src:t.logoUrl,alt:""}}),t._v(" "),t.tag?n("div",{staticClass:"sponsorCard__tag"},[t._v("\n        "+t._s(t.tag)+"\n    ")]):t._e()])}),[],!1,null,"21cb91d0",null);e.default=component.exports},374:function(t,e,n){"use strict";n.r(e);var o={name:"BulletinCard",components:{TextButton:n(365).default},props:{title:{type:String,default:""},description:{type:String,default:""},linkTitle:{type:String,default:""},linkHref:{type:String,default:""}},computed:{classObject:function(){return{bulletinCard:!0}}}},r=(n(390),n(5)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:!!t.title,expression:"!!title"}],class:t.classObject},[n("h2",[t._v("\n        "+t._s(t.title)+"\n    ")]),t._v(" "),n("p",[t._v(t._s(t.description))]),t._v(" "),n("div",{staticClass:"mt-6 mb-2"},[n("text-button",{attrs:{href:t.linkHref,secondary:""}},[t._v(t._s(t.linkTitle))])],1)])}),[],!1,null,"2091b534",null);e.default=component.exports},375:function(t,e,n){var content=n(406);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("e3e209d2",content,!0,{sourceMap:!1})},376:function(t,e,n){var content=n(408);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("fe65c0d8",content,!0,{sourceMap:!1})},377:function(t,e,n){var content=n(410);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("003b1064",content,!0,{sourceMap:!1})},378:function(t,e,n){var content=n(413);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("9fecdf12",content,!0,{sourceMap:!1})},379:function(t,e,n){var content=n(415);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("ddd73712",content,!0,{sourceMap:!1})},380:function(t,e,n){var content=n(417);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("6f0de03a",content,!0,{sourceMap:!1})},381:function(t,e,n){var content=n(419);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("2f24953c",content,!0,{sourceMap:!1})},385:function(t,e,n){"use strict";var o=n(3),r=n(386);o({target:"String",proto:!0,forced:n(387)("small")},{small:function(){return r(this,"small","","")}})},386:function(t,e,n){var o=n(36),r=/"/g;t.exports=function(t,e,n,l){var c=String(o(t)),d="<"+e;return""!==n&&(d+=" "+n+'="'+String(l).replace(r,"&quot;")+'"'),d+">"+c+"</"+e+">"}},387:function(t,e,n){var o=n(6);t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},388:function(t,e,n){"use strict";n(371)},389:function(t,e,n){var o=n(19)((function(i){return i[1]}));o.push([t.i,".sponsorCard[data-v-21cb91d0]{position:relative;display:flex;height:10rem;width:10rem;flex-direction:column;align-items:center;justify-content:center;border-radius:1rem;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.sponsorCard>img[data-v-21cb91d0]{width:100%;-o-object-fit:contain;object-fit:contain;border-radius:inherit}.sponsorCard.-small[data-v-21cb91d0]{height:5rem;width:5rem;min-width:100px}.sponsorCard__tag[data-v-21cb91d0]{position:absolute;display:flex;height:1.5rem;width:100%;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgba(67, 56, 202, var(--tw-bg-opacity));font-size:0.75rem;line-height:1rem;bottom:20px}",""]),o.locals={},t.exports=o},390:function(t,e,n){"use strict";n(372)},391:function(t,e,n){var o=n(19)((function(i){return i[1]}));o.push([t.i,".bulletinCard[data-v-2091b534]{position:relative;display:flex;height:16rem;flex-direction:column;align-items:center;border-radius:1.5rem;border-width:4px;width:11rem;border-color:#4b4b4b;color:#4b4b4b}.bulletinCard>h2[data-v-2091b534]{margin-top:1rem;margin-bottom:1.5rem;font-size:1.25rem;line-height:1.75rem;color:grey}.bulletinCard:hover>h2[data-v-2091b534]{color:#7568f6}.bulletinCard>p[data-v-2091b534]{margin-left:0.5rem;margin-right:0.5rem;font-size:.8rem;color:#c7c7c7}",""]),o.locals={},t.exports=o},392:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex items-center"},[o("pre",{staticClass:"text-xs mr-4"},[o("code",[t._v("with")]),t._v(" Pythonistas() "),o("code",[t._v("as")]),t._v(" us:"),o("br"),t._v("  Python.TW.reunion()\n    ")]),t._v(" "),o("div",{staticClass:"w-10 md:w-16 lg:w-20"},[o("img",{staticClass:"object-contain",attrs:{src:n(411),alt:""}})])])}],r={name:"LandingFocusSlogan"},l=(n(412),n(5)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),o,!1,null,"2c74679f",null);e.default=component.exports},393:function(t,e,n){"use strict";n.r(e);var o={name:"LandingFocusInfo"},r=(n(414),n(5)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"landingFocusInfo flex flex-col items-center font-serif"},[n("div",{staticClass:"landingFocusInfo__temporal"},[t._v("10/2")]),t._v(" "),n("div",{staticClass:"landingFocusInfo__till"}),t._v(" "),n("div",{staticClass:"landingFocusInfo__temporal"},[t._v("10/3")])])}],!1,null,"72b3e9fb",null);e.default=component.exports},397:function(t,e,n){"use strict";n.r(e);var o=n(63);e.default=Object(o.a)({"en-us":{diamond:"Diamond",platinum:"Platinum",gold:"Gold",silver:"Silver",bronze:"Bronze",special:"Special Sponsorship","co-organizer":"Co-organizer",organizer:"Organizer"},"zh-hant":{diamond:"鑽石級贊助",platinum:"白金級贊助",gold:"金級贊助",silver:"銀級贊助",bronze:"銅級贊助",special:"特別贊助","co-organizer":"協辦單位",organizer:"主辦單位"}})},398:function(t,e,n){"use strict";n.r(e);var o=n(63);e.default=Object(o.a)({"en-us":{website:"Website",about:"About"},"zh-hant":{website:"官方網站",about:"關於"}})},399:function(t,e,n){"use strict";n.r(e);var o=n(63);e.default=Object(o.a)({"en-us":{bulletins:[{title:"Volunteer",description:"Welcome friends who are interested in Python, support PyCon with action, and make this place better!",linkTitle:"Sign up",linkHref:"https://forms.gle/wuG2w42cbhamyGdv9"},{title:"PyCast",description:"There are podcasts for PyCon, and it's trendy! Teenagers are listening to PyCast now! Every episode is interesting!",linkTitle:"Go Listen",linkHref:"https://podcasts.apple.com/podcast/id1559843325"},{title:"Financial",description:"You can apply for financial aid as long as you need it. We will help you to participate in the conference.",linkTitle:"Apply Now",linkHref:"/registration/financial-aid"},{title:"Blog",description:"Want to receive the latest news? Must not miss the blog, we post the latest information to the blog!",linkTitle:"Go and See",linkHref:"https://pycontw.blogspot.com/"},{title:"YouTube",description:"PyCon has a YouTube channel! Welcome to subscribe to us! We will update it so you can watch it together.",linkTitle:"Go and See",linkHref:"https://www.youtube.com/c/pycontaiwan"}]},"zh-hant":{bulletins:[{title:"志工招募",description:"我們歡迎所有對 Python 有興趣的朋友一同加入，用行動支持 PyCon，讓這裡變得更好！",linkTitle:"線上報名",linkHref:"https://forms.gle/wuG2w42cbhamyGdv9"},{title:"PyCast",description:"哇！拍抗居然有 Podcast 也太潮了拔！現在年輕人都在聽 Podcast！每集都高潮迭起！",linkTitle:"線上收聽",linkHref:"https://podcasts.apple.com/podcast/id1559843325"},{title:"財務補助申請",description:"只要你有需要都可以申請門票、交通費等補助，我們盡力協助讓更多人能藉由補助參與會議。",linkTitle:"線上申請",linkHref:"/registration/financial-aid"},{title:"Blog",description:"想馬上接收到最新資訊嗎？那一定不能錯過部落格，我們會把最新的資訊推播到部落格上！",linkTitle:"前往看看",linkHref:"https://pycontw.blogspot.com/"},{title:"YouTube",description:"PyCon 也有 YouTube 頻道了！歡迎訂閱我們～每年都會固定整理議程的錄影讓大家能一同觀看。",linkTitle:"線上訂閱",linkHref:"https://www.youtube.com/c/pycontaiwan"}]}})},400:function(t,e,n){"use strict";n.r(e);var o={i18n:n(397).default,name:"SponsorCardCollection",props:{levelName:{type:String,default:""}}},r=(n(405),n(5)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col w-full"},[n("h3",{staticClass:"mt-12 mb-8 mx-1 text-xl"},[t._v(t._s(t.$t(t.levelName)))]),t._v(" "),n("div",{staticClass:"sponsorCardCollection__cardContainer justify-center md:justify-start"},[t._t("default")],2)])}),[],!1,null,"9172f448",null);e.default=component.exports},401:function(t,e,n){"use strict";n.r(e);n(35);var o=n(398),r=n(373),l=n(365),c={i18n:o.default,name:"SponsorModal",components:{SponsorCard:r.default,TextButton:l.default},props:{value:{type:Boolean,default:!1},context:{type:Object,default:function(){return{}}}},data:function(){return{shouldShowModal:this.value}},watch:{value:function(t){this.shouldShowModal=t}},methods:{close:function(){this.shouldShowModal=!1,this.$emit("input",!1)},getAttributeByLocale:function(t){var e="".concat(t,"_").concat({"en-us":"en_us","zh-hant":"zh_hant"}[this.$i18n.locale]);return this.context[e]}}},d=(n(407),n(5)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.shouldShowModal,expression:"shouldShowModal"}],staticClass:"sponsorModal"},[n("div",{staticClass:"lightBox"},[n("div",{staticClass:"lightBox__closeButton",on:{click:t.close}},[t._v("✕")]),t._v(" "),n("div",{staticClass:"lightBox__title"},[n("sponsor-card",{attrs:{"logo-url":t.context.logo_url,small:""}}),t._v(" "),n("h1",{staticClass:"text-xl mx-8 border-b-8 border-solid"},[t._v("\n                "+t._s(t.context.name)+"\n            ")])],1),t._v(" "),n("h2",{staticClass:"text-xl text-yellow-500 mt-4"},[t._v(t._s(t.$t("about")))]),t._v(" "),n("div",{staticClass:"lightBox__intro"},[n("p",{staticClass:"text-sm"},[t._v(t._s(t.getAttributeByLocale("intro")))])]),t._v(" "),n("div",{staticClass:"lightBox__buttons"},[n("text-button",{attrs:{href:t.context.website_url}},[t._v(t._s(t.$t("website")))])],1)])])}),[],!1,null,"53d91cd3",null);e.default=component.exports},402:function(t,e,n){"use strict";n.r(e);var o=n(374),r={i18n:n(399).default,name:"BulletinCardCollection",components:{BulletinCard:o.default}},l=(n(409),n(5)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col w-full"},[n("div",{staticClass:"bulletinCardCollection__cardContainer justify-center md:justify-start"},t._l(t.$t("bulletins"),(function(t,i){return n("bulletin-card",{key:"index_bulletin_"+i,attrs:{title:t.title,description:t.description,"link-title":t.linkTitle,"link-href":t.linkHref}})})),1)])}),[],!1,null,"2383ec8e",null);e.default=component.exports},403:function(t,e,n){"use strict";n.r(e);var o={name:"IntroMilestone",props:{achievement:{type:String,default:""},achievementNumber:{type:String,default:""},achievementUnit:{type:String,default:""}}},r=(n(416),n(5)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"milestone"},[n("p",{staticClass:"milestone__achievement"},[t._v(t._s(t.achievement))]),t._v(" "),n("p",{staticClass:"milestone__number"},[t._v(t._s(t.achievementNumber))]),t._v(" "),n("p",{staticClass:"milestone__unit"},[t._v(t._s(t.achievementUnit))])])}),[],!1,null,"266961a1",null);e.default=component.exports},404:function(t,e,n){"use strict";n.r(e);var o={name:"IntroDescription",props:{description:{type:String,default:""}}},r=(n(418),n(5)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"description"},[t._v(t._s(t.description))])}),[],!1,null,"7e47ae62",null);e.default=component.exports},405:function(t,e,n){"use strict";n(375)},406:function(t,e,n){var o=n(19)((function(i){return i[1]}));o.push([t.i,".sponsorCardCollection__cardContainer[data-v-9172f448]{display:flex;flex-wrap:wrap}.sponsorCardCollection__cardContainer>.sponsorCard[data-v-9172f448]{margin:0 0 60px;padding:5px}@media (min-width:415px){.sponsorCardCollection__cardContainer>.sponsorCard[data-v-9172f448]{margin-left:5px;margin-bottom:65px;margin-right:15px;margin-top:5px}}.sponsorCardCollection__cardContainer>.sponsorCard[data-v-9172f448]:hover{box-sizing:content-box;cursor:pointer;margin:0 10px 60px 0}",""]),o.locals={},t.exports=o},407:function(t,e,n){"use strict";n(376)},408:function(t,e,n){var o=n(19)((function(i){return i[1]}));o.push([t.i,".sponsorModal[data-v-53d91cd3]{position:fixed;top:0px;left:0px;display:flex;height:100vh;width:100%;align-items:center;justify-content:center;background-color:rgba(18,16,35,.6);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);z-index:10000}.lightBox[data-v-53d91cd3]{display:flex;flex-direction:column;border-radius:1rem;border-width:4px;--tw-border-opacity:1;border-color:rgba(245, 158, 11, var(--tw-border-opacity));padding-left:2rem;padding-right:2rem;padding-top:1rem;padding-bottom:1rem;width:95%;padding:32px 28px 28px 32px}@media (min-width:415px){.lightBox[data-v-53d91cd3]{width:66%;padding-left:60px;padding-bottom:48px;padding-right:48px;padding-top:60px}}.lightBox[data-v-53d91cd3]{height:80%;background-color:#121023}.lightBox__closeButton[data-v-53d91cd3]{position:relative;display:flex;cursor:pointer;justify-content:flex-end;--tw-text-opacity:1;color:rgba(245, 158, 11, var(--tw-text-opacity));top:-24px;right:-12px}@media (min-width:415px){.lightBox__closeButton[data-v-53d91cd3]{top:-40px;right:-20px}}.lightBox__title[data-v-53d91cd3]{display:flex;align-items:center}.lightBox__intro[data-v-53d91cd3]{margin-bottom:1rem;display:flex;overflow-y:scroll;white-space:pre-line}.lightBox__buttons[data-v-53d91cd3]{display:flex}",""]),o.locals={},t.exports=o},409:function(t,e,n){"use strict";n(377)},410:function(t,e,n){var o=n(19)((function(i){return i[1]}));o.push([t.i,".bulletinCardCollection__cardContainer[data-v-2383ec8e]{margin:1.25rem;display:flex;flex-wrap:wrap;justify-content:center}@media (min-width:415px){.bulletinCardCollection__cardContainer>.bulletinCard[data-v-2383ec8e]{margin-left:21px;margin-bottom:22px;margin-right:20px;margin-top:30px;padding-left:5px;padding-bottom:5px;padding-right:5px;padding-top:5px}}.bulletinCardCollection__cardContainer>.bulletinCard[data-v-2383ec8e]:hover{cursor:pointer;border-color:#413f5a}",""]),o.locals={},t.exports=o},411:function(t,e,n){t.exports=n.p+"img/page-home-slogan.8179819.png"},412:function(t,e,n){"use strict";n(378)},413:function(t,e,n){var o=n(19)((function(i){return i[1]}));o.push([t.i,"code[data-v-2c74679f]{color:#7568f6}",""]),o.locals={},t.exports=o},414:function(t,e,n){"use strict";n(379)},415:function(t,e,n){var o=n(19)((function(i){return i[1]}));o.push([t.i,".landingFocusInfo__till[data-v-72b3e9fb]{margin-top:0.5rem;margin-bottom:0.5rem;height:1.25rem;border-left:2px solid #c2a53a}.landingFocusInfo__temporal[data-v-72b3e9fb]{display:inline-flex;height:3rem;width:3rem;align-items:center;justify-content:center;border-radius:9999px;border-width:1px;padding:0.5rem;border:4px solid #c2a53a}",""]),o.locals={},t.exports=o},416:function(t,e,n){"use strict";n(380)},417:function(t,e,n){var o=n(19)((function(i){return i[1]}));o.push([t.i,'.milestone[data-v-266961a1]{text-align:center;font-weight:700;font-family:"Noto Serif TC"}.milestone__achievement[data-v-266961a1], .milestone__unit[data-v-266961a1]{font-size:1.5rem;line-height:2rem}@media (max-width:767px){.milestone__achievement[data-v-266961a1],.milestone__unit[data-v-266961a1]{position:relative;bottom:-30px;font-size:1.2rem}}.milestone__number[data-v-266961a1]{color:#c2a53a;font-size:5.4rem;filter:drop-shadow(4px 6px 0 #4f4f4f)}@media (max-width:767px){.milestone__number[data-v-266961a1]{font-size:4.8rem}}.milestone__unit[data-v-266961a1]{margin-bottom:0.5rem}@media (max-width:767px){.milestone__unit[data-v-266961a1]{top:-8px}}',""]),o.locals={},t.exports=o},418:function(t,e,n){"use strict";n(381)},419:function(t,e,n){var o=n(19)((function(i){return i[1]}));o.push([t.i,".description[data-v-7e47ae62]{padding-top:3rem}",""]),o.locals={},t.exports=o},420:function(t,e,n){var content=n(439);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("9fb5172a",content,!0,{sourceMap:!1})},432:function(t,e,n){"use strict";n.r(e);var o=n(63);e.default=Object(o.a)({"en-us":{milestone:[{achievement:"Hold",achievementNumber:"9",achievementUnit:"years"},{achievement:"Every Year",achievementNumber:"30",achievementUnit:"Speeches"},{achievement:"Audience",achievementNumber:"800",achievementUnit:"People"}],description:["PyCon, also known as the Python Annual Conference, is the annual event of the global Python community. PyCon is spontaneously organized by fellow locals, and now Taiwan has its own Python annual meeting. This event aims to gather organizations and individuals who use Python in various fields in Taiwan to exchange their experiences, share the latest technological developments.","2021 is the tenth anniversary of PyCon Taiwan. This year, PyCon Taiwan has not only passed on the community communication experience of the past ten years, we also made some new attempts, such as Podcasts. It is hoped that the tenth anniversary of PyCon Taiwan can promote exchanges between different ethnic groups and spark different sparks."]},"zh-hant":{milestone:[{achievement:"持續舉辦",achievementNumber:"9",achievementUnit:"年"},{achievement:"每年議程",achievementNumber:"30",achievementUnit:"場以上"},{achievement:"參與會眾",achievementNumber:"800",achievementUnit:"人以上"}],description:["PyCon，亦即 Python 年會，是全球 Python 社群的年度盛會。PyCon 由各地同好自發籌辦，而現在台灣也有自己的 Python 年會了。這個活動旨在聚集台灣各領域應用 Python 的組織與個人，交流彼此的經驗心得，分享最新的技術發展，並親身體驗社群獨有的熱情。","2021 年是 PyCon Taiwan 的十周年，今年 PyCon Taiwan 除了傳承十年來的社群交流經驗，我們更做了一些新嘗試，像是 Podcast 等。以期 PyCon Taiwan 十周年能促進不同族群間的交流，激盪出不一樣的火花。"]}})},435:function(t,e,n){t.exports=n.p+"img/page-home-intro-bigcircle.6f9fb0a.svg"},436:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAwIiBoZWlnaHQ9IjgwOCIgdmlld0JveD0iMCAwIDQxNCAzNzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIG9wYWNpdHk9IjAuMjI3NzQ4IiBkPSJNLTEgMy43NzMyNUMzLjQ4MDk0IC0yNi42MzE5IDQwLjc1OCAyMDIuODIgMjI0LjAwMiAyMTEuNDM0QzM4NC4zNzggMjA1LjMwNCA0MjYuNzQ1IDM0NS41NDYgNDEwLjkwMyAzNzEiIHN0cm9rZT0iI0ZDRjE4NyIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo="},437:function(t,e,n){t.exports=n.p+"img/page-home-intro-smallcircle.e4326b3.svg"},438:function(t,e,n){"use strict";n(420)},439:function(t,e,n){var o=n(19)((function(i){return i[1]}));o.push([t.i,".intro[data-v-d37ece8a]{position:relative}.intro-milestones[data-v-d37ece8a]{display:grid;grid-template-columns:repeat(3, minmax(0, 1fr))}@media (max-width:767px){.intro-milestones[data-v-d37ece8a]{display:flex}.intro-milestones[data-v-d37ece8a]{flex-direction:column}}.intro-descriptions[data-v-d37ece8a]{margin-left:10rem;margin-right:10rem}@media (max-width:1279px){.intro-descriptions[data-v-d37ece8a]{margin-left:3rem;margin-right:3rem}}img.big-circle[data-v-d37ece8a]{position:absolute;right:3rem;top:-8.5rem}@media (max-width:767px){img.big-circle[data-v-d37ece8a]{zoom:90%;right:1rem;top:-2.5rem}}img.small-circle[data-v-d37ece8a]{position:absolute;left:1.2rem;top:11rem}@media (max-width:767px){img.small-circle[data-v-d37ece8a]{zoom:90%;left:1rem;top:32.6rem}}img.curve[data-v-d37ece8a]{display:none}@media (max-width:767px){img.curve[data-v-d37ece8a]{position:absolute;display:block;left:0;top:12.5rem}}",""]),o.locals={},t.exports=o},450:function(t,e,n){"use strict";n.r(e);var o=n(432),r=n(403),l=n(404),c={i18n:o.default,name:"Intro",components:{IntroMilestone:r.default,IntroDescription:l.default}},d=(n(438),n(5)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"intro"},[o("img",{staticClass:"big-circle",attrs:{src:n(435),alt:"big-circle"}}),t._v(" "),o("img",{staticClass:"curve",attrs:{src:n(436),alt:"curve"}}),t._v(" "),o("div",{staticClass:"intro-milestones"},t._l(t.$t("milestone"),(function(t,e){return o("intro-milestone",{key:"milestone_"+e,attrs:{achievement:t.achievement,"achievement-number":t.achievementNumber,"achievement-unit":t.achievementUnit}})})),1),t._v(" "),o("div",{staticClass:"intro-descriptions"},t._l(t.$t("description"),(function(t,e){return o("intro-description",{key:"description_"+e,attrs:{description:t}})})),1),t._v(" "),o("img",{staticClass:"small-circle",attrs:{src:n(437),alt:"small-circle"}})])}),[],!1,null,"d37ece8a",null);e.default=component.exports;installComponents(component,{IntroMilestone:n(403).default,IntroDescription:n(404).default})},453:function(t,e,n){"use strict";n.r(e);var o=n(373);n.d(e,"SponsorCard",(function(){return o.default}));var r=n(400);n.d(e,"SponsorCardCollection",(function(){return r.default}));var l=n(401);n.d(e,"SponsorModal",(function(){return l.default}))},454:function(t,e,n){"use strict";n.r(e);var o=n(374);n.d(e,"BulletinCard",(function(){return o.default}));var r=n(402);n.d(e,"BulletinCardCollection",(function(){return r.default}))},455:function(t,e,n){"use strict";n.r(e);var o=n(392);n.d(e,"LandingFocusSlogan",(function(){return o.default}));var r=n(393);n.d(e,"LandingFocusInfo",(function(){return r.default}))},456:function(t,e,n){var content=n(479);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("bad8e090",content,!0,{sourceMap:!1})},478:function(t,e,n){"use strict";n(456)},479:function(t,e,n){var o=n(19),r=n(480),l=n(481),c=o((function(i){return i[1]})),d=r(l);c.push([t.i,'.page-home .page-homeLandingFocus,.page-home .page-homeLandingFocus:after{position:relative;top:48px;width:100vw;height:calc(100vh - 48px)}.page-home .page-homeLandingFocus:after{position:absolute;top:0;z-index:-10;content:"";background-image:url('+d+');background-position:50%;background-size:cover}.container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.text-golden{color:#c2a53a}.bg-golden-primary{background:#c2a53a}.bg-dark-primary{background:#212121}.bg-dark-secondary{background-color:#2b2b2b}.bg-blue-primary{background-color:#121023}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}.intro-section h2.intro-title{margin-top:2rem;margin-bottom:4rem;text-align:center;font-size:1.875rem;line-height:2.25rem;font-weight:700;color:#e6ba17;font-family:"Noto Serif TC"}@media (max-width:767px){.intro-section h2.intro-title{margin-top:0.5rem}.intro-section h2.intro-title{margin-bottom:2rem}.intro-section h2.intro-title{font-size:1.5rem;line-height:2rem}}.intro-section{padding-top:2rem;padding-bottom:5rem;background-color:#16132a}',""]),c.locals={},t.exports=c},480:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},481:function(t,e,n){t.exports=n.p+"img/page-home-background.13c6818.png"},498:function(t,e,n){"use strict";n.r(e);n(38),n(37),n(44),n(56),n(27),n(57);var o=n(16),r=(n(35),n(96)),l=n(63),c=Object(l.a)({"en-us":{pyconWelcome:"Welcome to PyCon TW 2021",pyconIntro:"PyCon Taiwan",sponsor:"Sponsor Us",sponsorList:"Sponsors",sponsorUs:"Be a Sponsor",bulletinList:"Latest Announcement"},"zh-hant":{pyconWelcome:"歡迎來到 PyCon TW 2021",pyconIntro:"PyCon Taiwan",sponsor:"贊助我們",sponsorList:"贊助夥伴",sponsorUs:"成為贊助夥伴",bulletinList:"最新公告"}}),d=n(362),f=n(365),m=n(453),h=n(454),v=n(455),x=n(450);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var y={i18n:c,name:"PageIndex",components:{TextButton:f.default,I18nPageWrapper:d.default,LandingFocusSlogan:v.LandingFocusSlogan,LandingFocusInfo:v.LandingFocusInfo,SponsorCard:m.SponsorCard,SponsorCardCollection:m.SponsorCardCollection,SponsorModal:m.SponsorModal,Intro:x.default,BulletinCardCollection:h.BulletinCardCollection},data:function(){return{isOpened:!1,selectedSponsor:{}}},fetchOnServer:!1,computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)(["sponsorsData"])),created:function(){this.$store.dispatch("$getSponsorsData")},methods:{showModal:function(t){this.isOpened=!0,this.selectedSponsor=t},getAttributeByLocale:function(data,t){return data["".concat(t,"_").concat({"en-us":"en_us","zh-hant":"zh_hant"}[this.$i18n.locale])]}}},w=(n(478),n(5)),component=Object(w.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-home"},[n("div",{staticClass:"page-homeLandingFocus flex py-8 md:py-12"},[n("div",{staticClass:"w-full flex flex-col items-start text-golden mx-4 sm:mx-8 md:mx-16"},[t._m(0),t._v(" "),n("landing-focus-info",{staticClass:"my-12 md:my-8"}),t._v(" "),n("div",{staticClass:"w-full flex flex-col justify-between items-center md:flex-row"},[n("text-button",{staticClass:"mb-8 ml-12 self-start md:mb-0 md:self-center",attrs:{to:"/sponsor"}},[t._v("\n                    "+t._s(t.$t("sponsor"))+"\n                ")]),t._v(" "),n("landing-focus-slogan")],1)],1)]),t._v(" "),n("div",{staticClass:"intro-section"},[n("h2",{staticClass:"intro-title"},[t._v(t._s(t.$t("pyconIntro")))]),t._v(" "),n("intro")],1),t._v(" "),n("i18n-page-wrapper",{staticClass:"py-12 bg-blue-primary",attrs:{"custom-y":""}},[n("h1",{staticClass:"text-yellow-500"},[t._v(t._s(t.$t("bulletinList")))]),t._v(" "),n("bulletin-card-collection")],1),t._v(" "),n("i18n-page-wrapper",{staticClass:"pt-12"},[n("h1",{staticClass:"text-yellow-500"},[t._v(t._s(t.$t("sponsorList")))]),t._v(" "),t._l(t.sponsorsData,(function(e,i){return n("sponsor-card-collection",{key:"index_sponsor_level_"+i,attrs:{"level-name":e.level_name}},t._l(e.sponsors,(function(e,o){return n("sponsor-card",{key:"index_sponsor_level_"+i+"_sponsor_"+o,attrs:{"logo-url":e.logo_url,tag:t.getAttributeByLocale(e,"subtitle")},nativeOn:{click:function(n){return t.showModal(e)}}})})),1)})),t._v(" "),n("div",{staticClass:"text-center"},[n("text-button",{attrs:{to:"/sponsor"}},[t._v(t._s(t.$t("sponsorUs")))])],1)],2),t._v(" "),n("sponsor-modal",{attrs:{context:t.selectedSponsor},model:{value:t.isOpened,callback:function(e){t.isOpened=e},expression:"isOpened"}})],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"font-serif text-3xl lg:text-5xl"},[t._v("\n                PyCon Taiwan "),n("br"),t._v("\n                10th Anniversary\n            ")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{LandingFocusInfo:n(393).default,LandingFocusSlogan:n(392).default,Intro:n(450).default})}}]);