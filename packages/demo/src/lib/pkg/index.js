var e=require("react"),t=require("lodash.omitby"),n=require("lodash.isnil"),r=require("react-autosuggest"),a=require("autosuggest-highlight/match"),u=require("autosuggest-highlight/parse"),o=require("@material-ui/core"),l=require("@material-ui/icons/Search"),i=require("@material-ui/icons/Cancel"),s=require("clsx"),c=require("react-debounce-render"),f=require("color-alpha");function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var g=d(e),p=d(t),m=d(n),h=d(r),v=d(a),b=d(u),C=d(l),k=d(i),y=d(s),E=d(c),S=d(f);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)t.indexOf(n=u[r])>=0||(a[n]=e[n]);return a}var q=E.default(function(e){var t=e.show;return g.default.createElement(o.Fade,{in:void 0!==t&&t},g.default.createElement(o.LinearProgress,{style:{position:"absolute",width:"100%"}}))},100),P=o.makeStyles(function(e){return o.createStyles({container:{flexGrow:1,position:"relative"},suggestionsContainerOpen:{position:"absolute",zIndex:1,marginTop:e.spacing(1),left:0,right:0},suggestion:{display:"block",marginBottom:0},suggestionsList:{margin:0,padding:0,listStyleType:"none"},inputContainer:{paddingTop:e.spacing(1),paddingBottom:e.spacing(1),paddingRight:e.spacing(1),paddingLeft:e.spacing(2),backgroundColor:S.default(e.palette.background.paper,.9),overflow:"hidden","&:hover,&:active,&.inputContainerFocused":{backgroundColor:e.palette.background.paper},minHeight:"64px",display:"flex",flexDirection:"column",justifyContent:"center"},grow:{flexGrow:1},shrink:{flexShrink:1},noGrow:{flexGrow:0},noShrink:{flexShrink:0}})});module.exports=function(t){var n=t.endpoint,r=void 0===n?"https://api.mapbox.com":n,a=t.inputPlaceholder,u=void 0===a?"Search":a,l=t.showLoader,i=void 0===l||l,s=t.source,c=void 0===s?"mapbox.places":s,f=t.onSuggest,d=void 0===f?function(){}:f,E=t.focusOnMount,S=void 0!==E&&E,I=t.showInputContainer,O=void 0===I||I,j=t.inputValue,F=void 0===j?"":j,T=t.proximity,G=t.country,R=t.bbox,L=t.types,N=t.limit,B=t.autocomplete,U=t.language,W=t.suggestionsPaperProps,D=t.onSelect,V=t.accessToken,A=t.onInputFocus,H=t.onInputBlur,M=t.inputClasses,_=t.inputTextFieldProps,z=t.disableUnderline,J=t.inputPaperProps,K=e.useState([]),Q=K[0],X=K[1],Y=e.useState(!1),Z=Y[0],$=Y[1],ee=e.useState(new Date),te=ee[0],ne=ee[1],re=e.useState(F),ae=re[0],ue=re[1],oe=e.useState(!1),le=oe[0],ie=oe[1],se=P(),ce=e.useRef(null),fe=function(t){var n=e.useRef();return e.useEffect(function(){n.current=t},[t]),n.current}(ae),de=e.useCallback(function(){var e=(ce.current||{}).input,t=void 0===e?null:e;t&&t.focus()},[]);e.useEffect(function(){ue(F)},[F]),e.useEffect(function(){S&&de()},[S,de]),e.useEffect(function(){d&&d(Q)},[Q,d]);var ge=e.useCallback(function(){ue(""),de()},[de]),pe=e.useCallback(function(e){var t=e.ref,n=e.inputClasses,r=w(e,["ref","inputClasses"]),a=null!=J?J:{},u=a.className,l=w(a,["className"]),s=g.default.createElement(o.TextField,x({fullWidth:!0,InputProps:x({disableUnderline:z,inputRef:t,startAdornment:g.default.createElement(o.InputAdornment,{position:"start"},g.default.createElement(C.default,{color:"action"})),classes:n},r)},_));return O?g.default.createElement(g.default.Fragment,null,g.default.createElement(q,{show:Z&&i}),g.default.createElement(o.Paper,x({square:!1,elevation:1,className:y.default([se.inputContainer,{inputContainerFocused:le},u])},l),g.default.createElement(o.Grid,{container:!0,alignItems:"center",spacing:8,wrap:"nowrap"},g.default.createElement(o.Grid,{item:!0,xs:!0,className:y.default(se.grow,se.noShrink)},s),g.default.createElement(o.Fade,{in:ae.length>0,unmountOnExit:!0,mountOnEnter:!0},g.default.createElement(o.Grid,{item:!0,xs:!0,className:y.default(se.shrink,se.noGrow)},g.default.createElement(o.IconButton,{"aria-label":"Clear Search Input",onClick:ge},g.default.createElement(k.default,null))))))):g.default.createElement(g.default.Fragment,null,s)},[z,_,O,Z,i,se,le,J,ae.length,ge]),me=e.useCallback(function(e){ie(!0),A&&A(e)},[A]),he=e.useCallback(function(e){ie(!1),H&&H(e)},[H]),ve=e.useCallback(function(e){var t=e.children;return g.default.createElement(o.Paper,x({},e.containerProps,{square:!1,elevation:4},W),t)},[W]),be=e.useCallback(function(e,t,n){!e&&t&&t.features&&te<=n&&(ne(n),X(t.features.map(function(e){return{feature:e,label:e.place_name}}).filter(function(e){return e.label})),$(!1))},[te]),Ce=e.useCallback(function(e){var t=e.value;$(!0),fe===t?$(!1):""===t?(X([]),$(!1)):function(e,t,n,r,a,u,o,l,i,s,c,f){try{var d,g,h,v,b=new Date;Promise.resolve(function(C,k){try{var y=(d=e+"/geocoding/v5/"+t+"/"+r+".json",g=p.default({access_token:n,proximity:u&&2===Object.keys(u).length?u.longitude+","+u.latitude:null,bbox:l&&l.length>0?l.join(","):null,types:i,country:o,limit:s,autocomplete:c,language:f},m.default),h=d+"?"+(E=g,Object.keys(E).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(E[e])}).join("&")),Promise.resolve(fetch(h)).then(function(e){return v=e,Promise.resolve(v.json()).then(function(e){return a(null,e,b),{err:null,res:v,searchTime:b}})}))}catch(e){return k(e)}var E;return y&&y.then?y.then(void 0,k):y}(0,function(e){return a(e,null,b),{err:e,res:null,searchTime:b}}))}catch(e){return Promise.reject(e)}}(r,c,V,t,be,T,G,R,L,N,B,U)},[R,G,r,N,U,B,c,T,fe,be,L,V]),ke=e.useCallback(function(e,t){return D&&D(t.suggestion.feature),!1},[D]),ye=e.useCallback(function(){X([])},[]),Ee=e.useCallback(function(e,t){ue(t.newValue)},[]),Se=e.useCallback(function(e,t){var n=t.isHighlighted,r=v.default(e.label,t.query),a=b.default(e.label,r);return g.default.createElement(o.MenuItem,{selected:n,component:"div"},g.default.createElement(o.Typography,{noWrap:!0,variant:"subtitle1"},a.map(function(e,t){return e.highlight?g.default.createElement("span",{key:String(t),style:{fontWeight:500}},e.text):g.default.createElement("strong",{key:String(t),style:{fontWeight:300}},e.text)})))},[]),xe=e.useCallback(function(e){return e.label},[]);return V?g.default.createElement(h.default,{ref:ce,theme:{container:se.container,suggestionsContainerOpen:se.suggestionsContainerOpen,suggestionsList:se.suggestionsList,suggestion:se.suggestion},renderInputComponent:pe,suggestions:Q,onSuggestionsFetchRequested:Ce,onSuggestionsClearRequested:ye,onSuggestionSelected:ke,renderSuggestionsContainer:ve,getSuggestionValue:xe,renderSuggestion:Se,inputProps:{placeholder:u,value:ae,onChange:Ee,onFocus:me,onBlur:he,className:M}}):null};
//# sourceMappingURL=index.js.map