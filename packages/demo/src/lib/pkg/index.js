var e=require("react"),t=require("react-autosuggest"),n=require("autosuggest-highlight/match"),a=require("autosuggest-highlight/parse"),u=require("@mui/material"),r=require("@mui/icons-material/Search"),o=require("@mui/icons-material/Cancel"),l=require("use-debounce");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=/*#__PURE__*/i(e),c=/*#__PURE__*/i(t),f=/*#__PURE__*/i(n),d=/*#__PURE__*/i(a),p=/*#__PURE__*/i(r),g=/*#__PURE__*/i(o);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function h(e){return null!=e}var v=function(t){var n=t.show,a=void 0!==n&&n,r=e.useState(a),o=r[0],i=r[1],c=l.useDebouncedCallback(function(){return i(!0)},250);return e.useEffect(function(){a?c():(c.flush(),i(!1))},[c,a]),/*#__PURE__*/s.default.createElement(u.Fade,{in:o},/*#__PURE__*/s.default.createElement(u.LinearProgress,{style:{position:"absolute",width:"100%"}}))},b=["ref","inputClasses"],x=function(e){var t=m({},e);/*#__PURE__*/return s.default.createElement(u.InputBase,m({type:"search",fullWidth:!0,startAdornment:/*#__PURE__*/s.default.createElement(u.InputAdornment,{position:"start"},/*#__PURE__*/s.default.createElement(p.default,{color:"action"}))},t))};module.exports=function(t){var n=t.endpoint,a=void 0===n?"https://api.mapbox.com":n,r=t.inputPlaceholder,o=void 0===r?"Search":r,l=t.showLoader,i=void 0===l||l,p=t.source,C=void 0===p?"mapbox.places":p,k=t.onSuggest,y=void 0===k?function(){}:k,E=t.focusOnMount,S=void 0!==E&&E,P=t.showInputContainer,w=void 0===P||P,q=t.inputValue,I=void 0===q?"":q,j=t.proximity,B=t.country,O=t.bbox,_=t.types,T=t.limit,R=t.autocomplete,F=t.language,D=t.suggestionsPaperProps,G=t.onSelect,L=t.accessToken,V=t.onInputFocus,W=t.onInputBlur,z=t.inputClasses,A=t.inputProps,H=t.inputPaperProps,M=e.useState([]),U=M[0],N=M[1],J=e.useState(!1),K=J[0],Q=J[1],X=e.useState(new Date),Y=X[0],Z=X[1],$=e.useState(I),ee=$[0],te=$[1],ne=e.useState(!1),ae=ne[0],ue=ne[1],re=e.useRef(null),oe=function(t){var n=e.useRef();return e.useEffect(function(){n.current=t},[t]),n.current}(ee),le=e.useCallback(function(){var e=(re.current||{}).input,t=void 0===e?null:e;t&&t.focus()},[]);e.useEffect(function(){te(I)},[I]),e.useEffect(function(){S&&le()},[S,le]),e.useEffect(function(){y&&y(U)},[U,y]);var ie=e.useCallback(function(){te(""),le()},[le]),se=u.useTheme(),ce=e.useCallback(function(e){var t=e.ref,n=e.inputClasses,a=function(e,t){if(null==e)return{};var n,a,u={},r=Object.keys(e);for(a=0;a<r.length;a++)t.indexOf(n=r[a])>=0||(u[n]=e[n]);return u}(e,b),r=m({},null!=H?H:{}),o=/*#__PURE__*/s.default.createElement(x,m({classes:n,inputRef:t},a,A));return w?/*#__PURE__*/s.default.createElement(s.default.Fragment,null,/*#__PURE__*/s.default.createElement(v,{show:K&&i}),/*#__PURE__*/s.default.createElement(u.Paper,m({square:!1,elevation:1,sx:{paddingTop:1,paddingBottom:1,paddingRight:1,paddingLeft:2,backgroundColor:ae?se.palette.background.paper:u.alpha(se.palette.background.paper,.9),overflow:"hidden","&:hover,&:active":{backgroundColor:se.palette.background.paper},minHeight:"64px",display:"flex",flexDirection:"column",justifyContent:"center"}},r),/*#__PURE__*/s.default.createElement(u.Box,{display:"flex",flexDirection:"row",alignItems:"center"},/*#__PURE__*/s.default.createElement(u.Box,{flex:"auto",sx:{flexShrink:0,flexGrow:1}},o),/*#__PURE__*/s.default.createElement(u.Fade,{in:ee.length>0,unmountOnExit:!0,mountOnEnter:!0},/*#__PURE__*/s.default.createElement(u.Box,{flex:"auto",sx:{flexGrow:0,flexShrink:1}},/*#__PURE__*/s.default.createElement(u.IconButton,{"aria-label":"Clear Search Input",onClick:ie,size:"large"},/*#__PURE__*/s.default.createElement(g.default,null))))))):o},[A,w,K,i,ae,H,ee.length,ie,se]),fe=e.useCallback(function(e){ue(!0),V&&V(e)},[V]),de=e.useCallback(function(e){ue(!1),W&&W(e)},[W]),pe=e.useCallback(function(e){var t=e.children;/*#__PURE__*/return s.default.createElement(u.Paper,m({},e.containerProps,{square:!1,elevation:4},D),t)},[D]),ge=e.useCallback(function(e,t,n){!e&&t&&t.features&&Y<=n&&(Z(n),N(t.features.map(function(e){return{feature:e,label:e.place_name}}).filter(function(e){return e.label})),Q(!1))},[Y]),me=e.useCallback(function(e){var t=e.value;Q(!0),oe===t?Q(!1):""===t?(N([]),Q(!1)):function(e,t,n,a,u,r,o,l,i,s,c,f){try{var d,p,g,v,b=new Date;Promise.resolve(function(x,C){try{var k=(d=e+"/geocoding/v5/"+t+"/"+a+".json",p=m({},h(n)&&{access_token:n},h(r)&&{proximity:r&&2===Object.keys(r).length?r.longitude+","+r.latitude:null},h(l)&&{bbox:l&&l.length>0?l.join(","):null},h(i)&&{types:i},h(o)&&{country:o},h(s)&&{limit:s},h(c)&&{autocomplete:c},h(f)&&{language:f}),g=d+"?"+(y=p,Object.keys(y).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(y[e])}).join("&")),Promise.resolve(fetch(g)).then(function(e){return v=e,Promise.resolve(v.json()).then(function(e){return u(null,e,b),{err:null,res:v,searchTime:b}})}))}catch(e){return C(e)}var y;return k&&k.then?k.then(void 0,C):k}(0,function(e){return u(e,null,b),{err:e,res:null,searchTime:b}}))}catch(e){return Promise.reject(e)}}(a,C,L,t,ge,j,B,O,_,T,R,F)},[O,B,a,T,F,R,C,j,oe,ge,_,L]),he=e.useCallback(function(e,t){return G&&G(t.suggestion.feature),!1},[G]),ve=e.useCallback(function(){N([])},[]),be=e.useCallback(function(e,t){te(t.newValue)},[]),xe=e.useCallback(function(e,t){var n=t.isHighlighted,a=f.default(e.label,t.query),r=d.default(e.label,a);/*#__PURE__*/return s.default.createElement(u.MenuItem,{selected:n,component:"div"},/*#__PURE__*/s.default.createElement(u.Typography,{noWrap:!0,variant:"subtitle1"},r.map(function(e,t){/*#__PURE__*/return s.default.createElement(u.Typography,{key:t,component:"span",variant:"inherit",sx:{fontWeight:e.highlight?500:300}},e.text)})))},[]),Ce=e.useCallback(function(e){return e.label},[]);return L?/*#__PURE__*/s.default.createElement(u.Box,{sx:{"& .react-autosuggest__container":{flexGrow:1,position:"relative"},"& .react-autosuggest__suggestions-container--open":{position:"absolute",zIndex:1,marginTop:1,left:0,right:0},"& .react-autosuggest__suggestions-list":{margin:0,padding:0,listStyleType:"none"},"& .react-autosuggest__suggestion":{display:"block",marginBottom:0}}},/*#__PURE__*/s.default.createElement(c.default,{ref:re,renderInputComponent:ce,suggestions:U,onSuggestionsFetchRequested:me,onSuggestionsClearRequested:ve,onSuggestionSelected:he,renderSuggestionsContainer:pe,getSuggestionValue:Ce,renderSuggestion:xe,inputProps:{placeholder:o,value:ee,onChange:be,onFocus:fe,onBlur:de,className:z}})):null};
//# sourceMappingURL=index.js.map
