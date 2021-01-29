(this["webpackJsonprest-countries-app"]=this["webpackJsonprest-countries-app"]||[]).push([[0],{2:function(e,n,t){e.exports={Flag:"Countries_Flag__3er3F",bodyContainer:"Countries_bodyContainer__1XYIn",flagsContainer:"Countries_flagsContainer__3S9sl",flagContainer:"Countries_flagContainer__p-ZEQ",SingleFlag:"Countries_SingleFlag__3l5eV",SingleFlagImg:"Countries_SingleFlagImg__3eRlE",SingleFlagInfo:"Countries_SingleFlagInfo__167HM",SingleFlagContainer:"Countries_SingleFlagContainer__3_F5I",SingleFlagName:"Countries_SingleFlagName__3Tg_O",SingleMetaFlagInfo:"Countries_SingleMetaFlagInfo__1wovN",MetaInfoCountry:"Countries_MetaInfoCountry__2dE_m",LinkStyle:"Countries_LinkStyle__30pYI",SearchTextAreaContainer:"Countries_SearchTextAreaContainer__1NZsT",SearchContainer:"Countries_SearchContainer__pGkOr"}},53:function(e,n,t){},54:function(e,n,t){},77:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t(0),c=t.n(r),s=t(21),i=t.n(s),o=(t(53),t(47)),l=(t(54),t(12)),u=t(13),j=t(16),d=t(15),b=t(14),h=t(2),g=t.n(h),m=t(23),p=function(e){return e},O=function(e){return e.listCountries.countriesSearch},f=Object(m.a)(p,(function(e){return e.listCountries.countries.filter((function(n){return n.name.includes(e.listCountries.countriesSearch)}))})),x=Object(m.a)(p,(function(e){return e.listCountries.countries.filter((function(n){return n.name.includes(e.listCountries.countryPage)}))})),C=Object(m.a)(p,(function(e){return e.listCountries.countries.filter((function(n){return n.alpha3Code.includes(e.listCountries.countryPage)}))})),N=(t.p,function(e){var n=c.a.createRef();return Object(a.jsxs)("div",{className:g.a.SearchContainer,children:[Object(a.jsx)("textarea",{onChange:function(){var t=n.current.value;e.updateCountries(t)},ref:n,value:e.countriesSearch,placeholder:"Search here",className:g.a.SearchTextAreaContainer}),Object(a.jsx)("div",{children:e.countriesSearch})]})}),v=t(20),y=t(27),S=t.n(y),_=function(){return S.a.get("https://restcountries.eu/rest/v2/all").then((function(e){return e.data}))},F=function(e){return S.a.get("https://restcountries.eu/rest/v2/name/".concat(e)).then((function(e){return e.data}))},I="SET-COUNTRIES",M="SET_COUNTRY_NAME_PAGE",D="SET_COUNTRY_NAME",k="UPDATE_NEW_COUNTRIES",E={countries:[{name:"",topLevelDomain:[],alpha2Code:"",alpha3Code:"",callingCodes:[],capital:"",altSpellings:[],region:"",subregion:"",population:null,latlng:[],demonym:"",area:null,gini:null,timezones:[],borders:[],nativeName:"",numericCode:"",currencies:[],languages:[],translations:{},flag:"",regionalBlocs:[{}],cioc:""}],countryNamePage:[],countriesSearch:"",countryPage:null},T=function(e){return{type:D,name:e}},P=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(v.a)(Object(v.a)({},n),{},{countries:t.countries});case M:return(e=Object(v.a)({},n)).countryNamePage=t.countryNamePage,e;case k:return(e=Object(v.a)({},n)).countriesSearch=t.countriesSearch,e;case D:return(e=Object(v.a)({},n)).countryPage=t.name,e;default:return n}},A=function(e){Object(j.a)(t,e);var n=Object(d.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(N,{countriesSearch:this.props.countriesSearch,updateCountries:this.props.updateCountries})})}}]),t}(c.a.Component),L=Object(b.b)((function(e){return{countriesSearch:O(e)}}),(function(e){return{updateCountries:function(n){e(function(e){return{type:k,countriesSearch:e}}(n))}}}))(A),R=t(11),w=function(e){return Object(a.jsx)("div",{className:g.a.bodyContainer,children:Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsx)(L,{})}),e.countries.map((function(e){return Object(a.jsx)("div",{className:g.a.flagsContainer,children:Object(a.jsxs)("div",{className:g.a.flagContainer,children:[Object(a.jsx)("img",{className:g.a.Flag,src:e.flag,alt:"flag"}),Object(a.jsx)("div",{children:Object(a.jsx)(R.b,{to:"/name/"+e.name,className:g.a.LinkStyle,children:e.name})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:g.a.MetaInfoCountry,children:"Population:"}),e.population]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:g.a.MetaInfoCountry,children:"Region:"}),e.region]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:g.a.MetaInfoCountry,children:"Capital:"}),e.capital]})]})})}))]})})},U=function(e){Object(j.a)(t,e);var n=Object(d.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.getCountries()}},{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(w,{countries:this.props.countries})})}}]),t}(c.a.Component),B=Object(b.b)((function(e){return{countries:f(e)}}),{getCountries:function(){return function(e){_().then((function(n){e({type:I,countries:n})}))}}})(U),H=function(e){return Object(a.jsxs)("div",{className:g.a.SingleFlag,children:[Object(a.jsx)("div",{className:g.a.MetaInfoCountry,children:Object(a.jsx)(R.b,{to:"/",className:g.a.LinkStyle,children:"Home"})}),Object(a.jsxs)("div",{children:[" ",e.countries.map((function(e){return Object(a.jsxs)("div",{className:g.a.SingleFlagContainer,children:[Object(a.jsx)("img",{className:g.a.SingleFlagImg,src:e.flag,alt:"flag"}),Object(a.jsxs)("div",{className:g.a.SingleFlagInfo,children:[Object(a.jsx)("div",{className:g.a.SingleFlagName,children:e.name}),Object(a.jsxs)("div",{className:g.a.SingleMetaFlagInfo,children:[Object(a.jsx)("span",{className:g.a.MetaInfoCountry,children:"Population:"}),e.population]}),Object(a.jsxs)("div",{className:g.a.SingleMetaFlagInfo,children:[Object(a.jsx)("span",{className:g.a.MetaInfoCountry,children:" NativeName:"}),e.nativeName]}),Object(a.jsxs)("div",{className:g.a.SingleMetaFlagInfo,children:[Object(a.jsx)("span",{className:g.a.MetaInfoCountry,children:" Region:"}),e.region]}),Object(a.jsxs)("div",{className:g.a.SingleMetaFlagInfo,children:[Object(a.jsx)("span",{className:g.a.MetaInfoCountry,children:" Subregion:"}),e.subregion]}),Object(a.jsxs)("div",{className:g.a.SingleMetaFlagInfo,children:[Object(a.jsx)("span",{className:g.a.MetaInfoCountry,children:" TopLevelDomain:"}),e.topLevelDomain]}),Object(a.jsxs)("div",{className:g.a.SingleMetaFlagInfo,children:[Object(a.jsx)("span",{className:g.a.MetaInfoCountry,children:" languages;"}),e.languages.map((function(e){return e.name}))]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:g.a.MetaInfoCountry,children:" borders;"}),e.borders.map((function(e){return Object(a.jsx)(R.b,{className:g.a.MetaInfoCountry,to:"/border/"+e,children:e})}))]})]})]})}))]})]})},W=t(7),Y=t(4),G=function(e){Object(j.a)(t,e);var n=Object(d.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.country;this.props.setCountryNameDispatch(e)}},{key:"componentDidUpdate",value:function(e){var n=this.props.match.params.country;this.props.country!==e.country&&this.props.setCountryNameDispatch(n)}},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{children:this.props.country}),Object(a.jsx)(H,{countries:this.props.countries})]})}}]),t}(c.a.Component),V=Object(W.d)(Y.e,Object(b.b)((function(e){return{countries:x(e)}}),{getCountryName:function(e){return function(n){F(e).then((function(e){n({type:I,countryNamePage:e})}))}},setCountryNameDispatch:T}))(G),X=function(e){Object(j.a)(t,e);var n=Object(d.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:g.a.SingleFlag,children:[Object(a.jsx)("div",{className:g.a.MetaInfoCountry,children:Object(a.jsx)(R.b,{to:"/",className:g.a.LinkStyle,children:"Home"})}),Object(a.jsxs)("div",{children:[" ",this.props.countries.map((function(e){return Object(a.jsxs)("div",{className:g.a.SingleFlagContainer,children:[Object(a.jsx)("img",{className:g.a.SingleFlagImg,src:e.flag,alt:"flag"}),Object(a.jsxs)("div",{className:g.a.SingleFlagInfo,children:[Object(a.jsx)("div",{className:g.a.SingleFlagName,children:e.name}),Object(a.jsxs)("div",{className:g.a.SingleMetaFlagInfo,children:[Object(a.jsx)("span",{className:g.a.MetaInfoCountry,children:"Population:"}),e.population]}),Object(a.jsxs)("div",{className:g.a.SingleMetaFlagInfo,children:[Object(a.jsx)("span",{className:g.a.MetaInfoCountry,children:" NativeName:"}),e.nativeName]}),Object(a.jsxs)("div",{className:g.a.SingleMetaFlagInfo,children:[Object(a.jsx)("span",{className:g.a.MetaInfoCountry,children:" Region:"}),e.region]}),Object(a.jsxs)("div",{className:g.a.SingleMetaFlagInfo,children:[Object(a.jsx)("span",{className:g.a.MetaInfoCountry,children:" Subregion:"}),e.subregion]}),Object(a.jsxs)("div",{className:g.a.SingleMetaFlagInfo,children:[Object(a.jsx)("span",{className:g.a.MetaInfoCountry,children:" TopLevelDomain:"}),e.topLevelDomain]}),Object(a.jsxs)("div",{className:g.a.SingleMetaFlagInfo,children:[Object(a.jsx)("span",{className:g.a.MetaInfoCountry,children:" languages;"}),e.languages.map((function(e){return e.name}))]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:g.a.MetaInfoCountry,children:" borders;"}),e.borders.map((function(e){return Object(a.jsx)(R.b,{className:g.a.MetaInfoCountry,to:"/border/"+e,children:e})}))]})]})]})}))]})]})}}]),t}(c.a.Component),z=function(e){Object(j.a)(t,e);var n=Object(d.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.country;this.props.setCountryNameDispatch(e)}},{key:"componentDidUpdate",value:function(e,n,t){var a=this.props.match.params.country;a!==e.match.params.country&&this.props.setCountryNameDispatch(a)}},{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(X,{countries:this.props.countries,country:this.props.country})})}}]),t}(c.a.Component),J=Object(W.d)(Y.e,Object(b.b)((function(e){return{countries:C(e)}}),{setCountryNameDispatch:T}))(z),Z=t(22),Q={body:"#E2E2E2",text:"#363537",toggleBorder:"#FFF",gradient:"linear-gradient(#39598A, #79D7ED)"},q={body:"#363537",text:"#FAFAFA",toggleBorder:"#6B8096",gradient:"linear-gradient(#091236, #1E215D)"},K=t(42);function $(){var e=Object(K.a)(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n\n  body {\n    align-items: center;\n    background: ",";\n    color: ",";\n    transition: all 0.25s linear;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n\n    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\n    transition: all 0.25s linear;\n  }\n\n  \n  a {\n    color: ",";\n  }\n"]);return $=function(){return e},e}var ee=Object(Z.b)($(),(function(e){return e.theme.body}),(function(e){return e.theme.text}),(function(e){return e.theme.text})),ne=t.p+"static/media/moon-solid.a3325cc3.svg";var te=Object(W.d)(Y.e)((function(e){var n=Object(r.useState)("light"),t=Object(o.a)(n,2),c=t[0],s=t[1];return Object(a.jsx)(Z.a,{theme:"light"===c?Q:q,children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(ee,{}),Object(a.jsxs)("div",{className:"Header",children:[Object(a.jsx)("span",{className:"HeaderWhereWord",children:"Where in the world?"}),Object(a.jsxs)("button",{className:"ThemeButton",onClick:function(){s("light"===c?"dark":"light")},children:[Object(a.jsx)("img",{src:ne,alt:"DarkMode",className:"DarkThemeSVG"}),"Dark mode"]})]}),Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("header",{className:"App-header",children:Object(a.jsxs)("div",{children:[Object(a.jsx)(Y.a,{exact:!0,path:"/",render:function(){return Object(a.jsx)(B,{})}}),Object(a.jsx)(Y.a,{path:"/name/:country?",render:function(){return Object(a.jsx)(V,{})}}),Object(a.jsx)(Y.a,{path:"/border/:country?",render:function(){return Object(a.jsx)(J,{})}})]})})})]})})})),ae=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,78)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,s=n.getTTFB;t(e),a(e),r(e),c(e),s(e)}))},re=t(46),ce=Object(W.c)({listCountries:P}),se=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||W.d,ie=Object(W.e)(ce,se(Object(W.a)(re.a)));window.__store__=ie;var oe=ie;i.a.render(Object(a.jsx)(R.a,{children:Object(a.jsx)(b.a,{store:oe,children:Object(a.jsx)(te,{})})}),document.getElementById("root")),ae()}},[[77,1,2]]]);
//# sourceMappingURL=main.f9eb4205.chunk.js.map