!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var o="object"==typeof exports?t(require("react")):t(e.React);for(var r in o)("object"==typeof exports?exports:e)[r]=o[r]}}(this,function(e){return function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.i=function(e){return e},o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(t,o){t.exports=e},function(e,t,o){"use strict";var r,n=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])},function(e,t){function o(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),i=this&&this.__assign||Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};Object.defineProperty(t,"__esModule",{value:!0});var l=o(0),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.getScrollableParent=function(e){var o=e instanceof HTMLElement&&window.getComputedStyle(e).overflowY;return e?"visible"!==o&&"hidden"!==o&&e.scrollHeight>=e.clientHeight?e:t.getScrollableParent(e.parentNode)||document.body:null},t.Provider=((o=function(e){function o(){var o=null!==e&&e.apply(this,arguments)||this;return o._rowHeight=0,o.lastScrollTop=0,o.safeScroll=0,o.SHOW_ALL_ROWS={from:0,to:Number.MAX_VALUE},o.visibleRows=i({},o.SHOW_ALL_ROWS),o.onScroll=function(){var e=o.root.scrollTop,t=o.props.rebaseOnScrollRowCounts,r=o.visibleRowsWithoutDeviation,n=r.from,i=r.to-n;var l=o.rowHeight*(t||i);Math.abs(e-o.lastScrollTop)>l&&(o.lastScrollTop=e,o.forceUpdate())},o.getVisibleRowsIndexes=function(){if(o.rowHeight&&o.root){for(var e=o.props,r=e.wrappedSelectorId,n=e.itemSelector,l=document.querySelectorAll("#"+r+" "+n),s=null,c=null,u=0;u<l.length;u++){var p=l[u].getBoundingClientRect().top+o.rowHeight;if(p>=0&&p<=o.root.clientHeight?null===s&&(s=u):null!==s&&(c=u-1),2===[s,c].filter(function(e){return null!==e}).length)break}var a=t.Provider.DEFAULT_DEVIATION;return null===c&&(c=l.length),{from:s-a,to:c+a}}return i({},o.SHOW_ALL_ROWS)},o}return n(o,e),o.prototype.componentDidMount=function(){var e=this;setTimeout(function(){var o,r=e.props,n=r.wrappedSelectorId,i=(r.itemSelector,r.getScrollableParent),l=document.querySelector("#"+n);if(i)try{o=i(n)}catch(e){console.error("PerformantScrollableList.Provider: getScrollableParent prop throw exception.\n              Rollback to PerformantScrollableList.Provider built-in scrollable parent finder",e),o=t.getScrollableParent(l)}else o=t.getScrollableParent(l);o?(e.root=o,e.root.addEventListener("scroll",e.onScroll)):console.error("PerformantScrollableList.Provider: Can't find the scrollable parent"),e.visibleRows=e.getVisibleRowsIndexes()},0)},o.prototype.render=function(){var e=this;this.props.wrappedSelectorId;return this.props.render({isVisibleRow:function(t){return t>=e.visibleRows.from&&t<=e.visibleRows.to}})},o.prototype.componentWillUnmount=function(){this.root&&this.root.removeEventListener("scroll",this.onScroll)},o.prototype.componentDidUpdate=function(){i({},this.visibleRows);this.visibleRows=this.getVisibleRowsIndexes()},Object.defineProperty(o.prototype,"visibleRowsWithoutDeviation",{get:function(){return{from:this.visibleRows.from+t.Provider.DEFAULT_DEVIATION,to:this.visibleRows.to-t.Provider.DEFAULT_DEVIATION}},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"rowHeight",{get:function(){if(!this._rowHeight){var e=this.props,t=e.wrappedSelectorId,o=e.itemSelector,r=document.querySelector("#"+t+" "+o);r&&(this._rowHeight=r.clientHeight)}return this._rowHeight},enumerable:!0,configurable:!0}),o}(l.Component)).DEFAULT_DEVIATION=10,o),t.Consumer=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.shouldComponentUpdate=function(e){return e.isVisible},t.prototype.render=function(){return this.props.children},t}(l.Component),t;var o}(l.Component);t.PerformantScrollableList=s,t.default=s}])});