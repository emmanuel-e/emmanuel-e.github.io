!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){function n(t){"@babel/helpers - typeof";return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t,n){"use strict";window.wsb=window.wsb||{},window.wsb.Parallax=window.wsb.Parallax||n(4)},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(5)),i=r(n(6)),a=r(n(1)),l=r(n(7)),s=r(n(9)),u=r(n(10)),c=r(n(11)),d=r(n(12)),f=n(13),p=r(n(14)),h=r(n(15));function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=(0,u.default)(e);if(t){var o=(0,u.default)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,s.default)(this,n)}}var m=function(e){(0,l.default)(n,e);var t=v(n);function n(e){var r;return(0,o.default)(this,n),(r=t.call(this,e)).handleScroll=r.handleScroll.bind((0,a.default)(r)),r.init=r.init.bind((0,a.default)(r)),r.reset=r.reset.bind((0,a.default)(r)),r.reInit=r.reInit.bind((0,a.default)(r)),r.handleMatchMedia=r.handleMatchMedia.bind((0,a.default)(r)),r._deviceSize=(0,h.default)(e.viewDevice),r}return(0,i.default)(n,[{key:"handleMatchMedia",value:function(e){this._deviceSize!==e.size&&(this._deviceSize=e.size,this.reInit())}},{key:"componentDidMount",value:function(){(0,p.default)(),window.requestAnimationFrame&&window.requestAnimationFrame(this.init)}},{key:"componentDidUpdate",value:function(e){e.renderMode!==this.props.renderMode&&this.reInit()}},{key:"componentWillUnmount",value:function(){this.reset()}},{key:"reInit",value:function(){var e=this;this.reset(),window.requestAnimationFrame&&window.requestAnimationFrame(function(){e.init()})}},{key:"init",value:function(){var e=this.props,t=e.hamburgerId,n=e.uniqueId,r=e.renderMode,o=e.excludedBreakpoints;if(("PUBLISH"===r||"PREVIEW"===r)&&-1===(void 0===o?[]:o).indexOf(this._deviceSize)){if(this.parallaxElement=document.getElementById(n),this.hamburgerDropdown=document.getElementById(t),this.viewport=this.getElementContainer(".widget-header",this.parallaxElement,document.body),this.scrollParent=this.getElementContainer(".viewport, #render-container, .scaler-content",this.parallaxElement,window),this.scrollParent.addEventListener("scroll",this.handleScroll,{passive:!0}),this.scrollParent.addEventListener("resize",this.reInit,{passive:!0}),this.calcScrollParent=this.scrollParent===window?document.body:this.scrollParent,this.parallaxElement&&this.scrollParent&&this.calcScrollParent){var i=this.scrollParent===window?window.innerHeight:this.calcScrollParent.getBoundingClientRect().bottom;this.isInitOversize=i<this.parallaxElement.getBoundingClientRect().bottom}this.handleScroll()}}},{key:"reset",value:function(){this&&this.scrollParent&&(this.scrollParent.removeEventListener("scroll",this.handleScroll,{passive:!0}),this.scrollParent.removeEventListener("resize",this.reInit,{passive:!0}))}},{key:"getElementContainer",value:function(e,t,n){return Array.from(document.querySelectorAll(e)).find(function(e){return e.contains(t)})||n}},{key:"handleScroll",value:function(){var e=this.parallaxElement,t=this.calcScrollParent,n=this.hamburgerDropdown,r=this.isInitOversize,o=this.props,i=o.speed,a=o.isBackground,l=o.oversizeSpeed,s=void 0===l?Math.abs(i):l,u=o.noTransform,c=o.renderMode;if(e&&!("PUBLISH"!==c&&"PREVIEW"!==c||n&&0!==n.offsetHeight)){var d=t.getBoundingClientRect(),f=d.top,p=d.height,h=this.viewport.getBoundingClientRect(),v=this.scrollParent===window?0:f,m=h.top-v,y=h.bottom-v,b=h.height,w=m>=0,x=y<0,g=w||x,P=this.oobTop||this.oobBottom;if(!g||!P){this.oobTop=w,this.oobBottom=x;var E=a||!r?i:s,M=1-1/Math.max(Math.abs(E),.1),S=(g?0:m)*M*(E<0?-1:1);if(u?(e.style.position="relative",e.style.top="".concat(S.toFixed(2),"px")):e.style.transform=S?"translate3d(0, ".concat(S.toFixed(2),"px, 0)"):"none",!a){var _=Math.min(p,b),I=g?1:Math.max(Math.min(y/_*2,1),0);e.style.opacity=I.toFixed(2)}}}}},{key:"render",value:function(){var e=this.props,t=e.excludedBreakpoints,n=void 0===t?[]:t,r=e.renderMode;return n.length&&r===f.constants.renderModes.PUBLISH?c.default.createElement(f.UX.MatchMedia,{onChange:this.handleMatchMedia}):null}}]),n}(c.default.Component);m.propTypes={uniqueId:d.default.string.isRequired,speed:d.default.number,oversizeSpeed:d.default.number,isBackground:d.default.bool,hamburgerId:d.default.string,noTransform:d.default.bool,renderMode:d.default.string,viewDevice:d.default.string,excludedBreakpoints:d.default.arrayOf(d.default.string)},m.defaultProps={speed:-1,isBackground:!0};var y=m;t.default=y,e.exports=t.default},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){var r=n(8);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t,n){var r=n(2),o=n(1);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t){e.exports=React},function(e,t){e.exports=PropTypes},function(e,t){e.exports=Core},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if("undefined"==typeof window||i)return;i=!0;var e=window.EventTarget||window.Node,t=!1;if(document.createElement("div").addEventListener("test",function(){},{get passive(){return t=!0,!1}}),!t){var n=e.prototype.addEventListener,r=e.prototype.removeEventListener;e.prototype.addEventListener=function(e,t,r){var i="object"===(0,o.default)(r)?r.capture:r;n.call(this,e,t,i)},e.prototype.removeEventListener=function(e,t,n){var i="object"===(0,o.default)(n)?n.capture:n;r.call(this,e,t,i)}}};var o=r(n(2)),i=!1;e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return/mobile/i.test(e)?"xs":/tablet/i.test(e)?"md":"lg"},e.exports=t.default}]);