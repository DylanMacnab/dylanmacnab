"use strict";var _typeof13="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof12="function"==typeof Symbol&&"symbol"==_typeof13(Symbol.iterator)?function(t){return void 0===t?"undefined":_typeof13(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":_typeof13(t)},_typeof11="function"==typeof Symbol&&"symbol"==_typeof12(Symbol.iterator)?function(t){return void 0===t?"undefined":_typeof12(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":_typeof12(t)},_typeof10="function"==typeof Symbol&&"symbol"==_typeof11(Symbol.iterator)?function(t){return void 0===t?"undefined":_typeof11(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":_typeof11(t)},_typeof9="function"==typeof Symbol&&"symbol"==_typeof10(Symbol.iterator)?function(t){return void 0===t?"undefined":_typeof10(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":_typeof10(t)},_typeof8="function"==typeof Symbol&&"symbol"==_typeof9(Symbol.iterator)?function(t){return void 0===t?"undefined":_typeof9(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":_typeof9(t)},_typeof7="function"==typeof Symbol&&"symbol"==_typeof8(Symbol.iterator)?function(t){return void 0===t?"undefined":_typeof8(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":_typeof8(t)},_typeof6="function"==typeof Symbol&&"symbol"==_typeof7(Symbol.iterator)?function(t){return void 0===t?"undefined":_typeof7(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":_typeof7(t)},_typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(t){return void 0===t?"undefined":_typeof6(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":_typeof6(t)},_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return void 0===t?"undefined":_typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":_typeof5(t)},_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return void 0===t?"undefined":_typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":_typeof4(t)},_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return void 0===t?"undefined":_typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":_typeof3(t)},_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return void 0===t?"undefined":_typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":_typeof2(t)};!function(t,o,e,i){function n(o,e){this.element=o,this.options=t.extend({},r,e),this._defaults=r,this._name=s,this.init()}var s="stellar",r={scrollProperty:"scroll",positionProperty:"position",horizontalScrolling:!0,verticalScrolling:!0,horizontalOffset:0,verticalOffset:0,responsive:!1,parallaxBackgrounds:!0,parallaxElements:!0,hideDistantElements:!0,hideElement:function(t){t.hide()},showElement:function(t){t.show()}},l={scroll:{getLeft:function(t){return t.scrollLeft()},setLeft:function(t,o){t.scrollLeft(o)},getTop:function(t){return t.scrollTop()},setTop:function(t,o){t.scrollTop(o)}},position:{getLeft:function(t){return-1*parseInt(t.css("left"),10)},getTop:function(t){return-1*parseInt(t.css("top"),10)}},margin:{getLeft:function(t){return-1*parseInt(t.css("margin-left"),10)},getTop:function(t){return-1*parseInt(t.css("margin-top"),10)}},transform:{getLeft:function(t){var o=getComputedStyle(t[0])[f];return"none"!==o?-1*parseInt(o.match(/(-?[0-9]+)/g)[4],10):0},getTop:function(t){var o=getComputedStyle(t[0])[f];return"none"!==o?-1*parseInt(o.match(/(-?[0-9]+)/g)[5],10):0}}},a={position:{setLeft:function(t,o){t.css("left",o)},setTop:function(t,o){t.css("top",o)}},transform:{setPosition:function(t,o,e,i,n){t[0].style[f]="translate3d("+(o-e)+"px, "+(i-n)+"px, 0)"}}},f=function(){var o,e=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,i=t("script")[0].style,n="";for(o in i)if(e.test(o)){n=o.match(e)[0];break}return"WebkitOpacity"in i&&(n="Webkit"),"KhtmlOpacity"in i&&(n="Khtml"),function(t){return n+(n.length>0?t.charAt(0).toUpperCase()+t.slice(1):t)}}()("transform"),c=void 0!==t("<div />",{style:"background:#fff"}).css("background-position-x"),p=c?function(t,o,e){t.css({"background-position-x":o,"background-position-y":e})}:function(t,o,e){t.css("background-position",o+" "+e)},u=c?function(t){return[t.css("background-position-x"),t.css("background-position-y")]}:function(t){return t.css("background-position").split(" ")},d=o.requestAnimationFrame||o.webkitRequestAnimationFrame||o.mozRequestAnimationFrame||o.oRequestAnimationFrame||o.msRequestAnimationFrame||function(t){setTimeout(t,1e3/60)};n.prototype={init:function(){this.options.name=s+"_"+Math.floor(1e9*Math.random()),this._defineElements(),this._defineGetters(),this._defineSetters(),this._handleWindowLoadAndResize(),this._detectViewport(),this.refresh({firstLoad:!0}),"scroll"===this.options.scrollProperty?this._handleScrollEvent():this._startAnimationLoop()},_defineElements:function(){this.element===e.body&&(this.element=o),this.$scrollElement=t(this.element),this.$element=this.element===o?t("body"):this.$scrollElement,this.$viewportElement=void 0!==this.options.viewportElement?t(this.options.viewportElement):this.$scrollElement[0]===o||"scroll"===this.options.scrollProperty?this.$scrollElement:this.$scrollElement.parent()},_defineGetters:function(){var t=this,o=l[t.options.scrollProperty];this._getScrollLeft=function(){return o.getLeft(t.$scrollElement)},this._getScrollTop=function(){return o.getTop(t.$scrollElement)}},_defineSetters:function(){var o=this,e=l[o.options.scrollProperty],i=a[o.options.positionProperty],n=e.setLeft,s=e.setTop;this._setScrollLeft="function"==typeof n?function(t){n(o.$scrollElement,t)}:t.noop,this._setScrollTop="function"==typeof s?function(t){s(o.$scrollElement,t)}:t.noop,this._setPosition=i.setPosition||function(t,e,n,s,r){o.options.horizontalScrolling&&i.setLeft(t,e,n),o.options.verticalScrolling&&i.setTop(t,s,r)}},_handleWindowLoadAndResize:function(){var e=this,i=t(o);e.options.responsive&&i.bind("load."+this.name,function(){e.refresh()}),i.bind("resize."+this.name,function(){e._detectViewport(),e.options.responsive&&e.refresh()})},refresh:function(e){var i=this,n=i._getScrollLeft(),s=i._getScrollTop();e&&e.firstLoad||this._reset(),this._setScrollLeft(0),this._setScrollTop(0),this._setOffsets(),this._findParticles(),this._findBackgrounds(),e&&e.firstLoad&&/WebKit/.test(navigator.userAgent)&&t(o).load(function(){var t=i._getScrollLeft(),o=i._getScrollTop();i._setScrollLeft(t+1),i._setScrollTop(o+1),i._setScrollLeft(t),i._setScrollTop(o)}),this._setScrollLeft(n),this._setScrollTop(s)},_detectViewport:function(){var t=this.$viewportElement.offset(),o=null!==t&&void 0!==t;this.viewportWidth=this.$viewportElement.width(),this.viewportHeight=this.$viewportElement.height(),this.viewportOffsetTop=o?t.top:0,this.viewportOffsetLeft=o?t.left:0},_findParticles:function(){var o=this;if(this._getScrollLeft(),this._getScrollTop(),void 0!==this.particles)for(var e=this.particles.length-1;e>=0;e--)this.particles[e].$element.data("stellar-elementIsActive",void 0);this.particles=[],this.options.parallaxElements&&this.$element.find("[data-stellar-ratio]").each(function(e){var i,n,s,r,l,a,f,c,p,u=t(this),d=0,h=0,y=0,m=0;if(u.data("stellar-elementIsActive")){if(u.data("stellar-elementIsActive")!==this)return}else u.data("stellar-elementIsActive",this);o.options.showElement(u),u.data("stellar-startingLeft")?(u.css("left",u.data("stellar-startingLeft")),u.css("top",u.data("stellar-startingTop"))):(u.data("stellar-startingLeft",u.css("left")),u.data("stellar-startingTop",u.css("top"))),s=u.position().left,r=u.position().top,l="auto"===u.css("margin-left")?0:parseInt(u.css("margin-left"),10),a="auto"===u.css("margin-top")?0:parseInt(u.css("margin-top"),10),c=u.offset().left-l,p=u.offset().top-a,u.parents().each(function(){var o=t(this);if(!0===o.data("stellar-offset-parent"))return d=y,h=m,f=o,!1;y+=o.position().left,m+=o.position().top}),i=void 0!==u.data("stellar-horizontal-offset")?u.data("stellar-horizontal-offset"):void 0!==f&&void 0!==f.data("stellar-horizontal-offset")?f.data("stellar-horizontal-offset"):o.horizontalOffset,n=void 0!==u.data("stellar-vertical-offset")?u.data("stellar-vertical-offset"):void 0!==f&&void 0!==f.data("stellar-vertical-offset")?f.data("stellar-vertical-offset"):o.verticalOffset,o.particles.push({$element:u,$offsetParent:f,isFixed:"fixed"===u.css("position"),horizontalOffset:i,verticalOffset:n,startingPositionLeft:s,startingPositionTop:r,startingOffsetLeft:c,startingOffsetTop:p,parentOffsetLeft:d,parentOffsetTop:h,stellarRatio:void 0!==u.data("stellar-ratio")?u.data("stellar-ratio"):1,width:u.outerWidth(!0),height:u.outerHeight(!0),isHidden:!1})})},_findBackgrounds:function(){var o,e=this,i=this._getScrollLeft(),n=this._getScrollTop();this.backgrounds=[],this.options.parallaxBackgrounds&&(o=this.$element.find("[data-stellar-background-ratio]"),this.$element.data("stellar-background-ratio")&&(o=o.add(this.$element)),o.each(function(){var o,s,r,l,a,f,c,d=t(this),h=u(d),y=0,m=0,g=0,b=0;if(d.data("stellar-backgroundIsActive")){if(d.data("stellar-backgroundIsActive")!==this)return}else d.data("stellar-backgroundIsActive",this);d.data("stellar-backgroundStartingLeft")?p(d,d.data("stellar-backgroundStartingLeft"),d.data("stellar-backgroundStartingTop")):(d.data("stellar-backgroundStartingLeft",h[0]),d.data("stellar-backgroundStartingTop",h[1])),r="auto"===d.css("margin-left")?0:parseInt(d.css("margin-left"),10),l="auto"===d.css("margin-top")?0:parseInt(d.css("margin-top"),10),a=d.offset().left-r-i,f=d.offset().top-l-n,d.parents().each(function(){var o=t(this);if(!0===o.data("stellar-offset-parent"))return y=g,m=b,c=o,!1;g+=o.position().left,b+=o.position().top}),o=void 0!==d.data("stellar-horizontal-offset")?d.data("stellar-horizontal-offset"):void 0!==c&&void 0!==c.data("stellar-horizontal-offset")?c.data("stellar-horizontal-offset"):e.horizontalOffset,s=void 0!==d.data("stellar-vertical-offset")?d.data("stellar-vertical-offset"):void 0!==c&&void 0!==c.data("stellar-vertical-offset")?c.data("stellar-vertical-offset"):e.verticalOffset,e.backgrounds.push({$element:d,$offsetParent:c,isFixed:"fixed"===d.css("background-attachment"),horizontalOffset:o,verticalOffset:s,startingValueLeft:h[0],startingValueTop:h[1],startingBackgroundPositionLeft:isNaN(parseInt(h[0],10))?0:parseInt(h[0],10),startingBackgroundPositionTop:isNaN(parseInt(h[1],10))?0:parseInt(h[1],10),startingPositionLeft:d.position().left,startingPositionTop:d.position().top,startingOffsetLeft:a,startingOffsetTop:f,parentOffsetLeft:y,parentOffsetTop:m,stellarRatio:void 0===d.data("stellar-background-ratio")?1:d.data("stellar-background-ratio")})}))},_reset:function(){var t,o,e,i,n;for(n=this.particles.length-1;n>=0;n--)o=(t=this.particles[n]).$element.data("stellar-startingLeft"),e=t.$element.data("stellar-startingTop"),this._setPosition(t.$element,o,o,e,e),this.options.showElement(t.$element),t.$element.data("stellar-startingLeft",null).data("stellar-elementIsActive",null).data("stellar-backgroundIsActive",null);for(n=this.backgrounds.length-1;n>=0;n--)(i=this.backgrounds[n]).$element.data("stellar-backgroundStartingLeft",null).data("stellar-backgroundStartingTop",null),p(i.$element,i.startingValueLeft,i.startingValueTop)},destroy:function(){this._reset(),this.$scrollElement.unbind("resize."+this.name).unbind("scroll."+this.name),this._animationLoop=t.noop,t(o).unbind("load."+this.name).unbind("resize."+this.name)},_setOffsets:function(){var e=this,i=t(o);i.unbind("resize.horizontal-"+this.name).unbind("resize.vertical-"+this.name),"function"==typeof this.options.horizontalOffset?(this.horizontalOffset=this.options.horizontalOffset(),i.bind("resize.horizontal-"+this.name,function(){e.horizontalOffset=e.options.horizontalOffset()})):this.horizontalOffset=this.options.horizontalOffset,"function"==typeof this.options.verticalOffset?(this.verticalOffset=this.options.verticalOffset(),i.bind("resize.vertical-"+this.name,function(){e.verticalOffset=e.options.verticalOffset()})):this.verticalOffset=this.options.verticalOffset},_repositionElements:function(){var t,o,e,i,n,s,r,l,a,f,c=this._getScrollLeft(),u=this._getScrollTop(),d=!0,h=!0;if(this.currentScrollLeft!==c||this.currentScrollTop!==u||this.currentWidth!==this.viewportWidth||this.currentHeight!==this.viewportHeight){for(this.currentScrollLeft=c,this.currentScrollTop=u,this.currentWidth=this.viewportWidth,this.currentHeight=this.viewportHeight,f=this.particles.length-1;f>=0;f--)o=(t=this.particles[f]).isFixed?1:0,this.options.horizontalScrolling?l=(s=(c+t.horizontalOffset+this.viewportOffsetLeft+t.startingPositionLeft-t.startingOffsetLeft+t.parentOffsetLeft)*-(t.stellarRatio+o-1)+t.startingPositionLeft)-t.startingPositionLeft+t.startingOffsetLeft:(s=t.startingPositionLeft,l=t.startingOffsetLeft),this.options.verticalScrolling?a=(r=(u+t.verticalOffset+this.viewportOffsetTop+t.startingPositionTop-t.startingOffsetTop+t.parentOffsetTop)*-(t.stellarRatio+o-1)+t.startingPositionTop)-t.startingPositionTop+t.startingOffsetTop:(r=t.startingPositionTop,a=t.startingOffsetTop),this.options.hideDistantElements&&(h=!this.options.horizontalScrolling||l+t.width>(t.isFixed?0:c)&&l<(t.isFixed?0:c)+this.viewportWidth+this.viewportOffsetLeft,d=!this.options.verticalScrolling||a+t.height>(t.isFixed?0:u)&&a<(t.isFixed?0:u)+this.viewportHeight+this.viewportOffsetTop),h&&d?(t.isHidden&&(this.options.showElement(t.$element),t.isHidden=!1),this._setPosition(t.$element,s,t.startingPositionLeft,r,t.startingPositionTop)):t.isHidden||(this.options.hideElement(t.$element),t.isHidden=!0);for(f=this.backgrounds.length-1;f>=0;f--)o=(e=this.backgrounds[f]).isFixed?0:1,i=this.options.horizontalScrolling?(c+e.horizontalOffset-this.viewportOffsetLeft-e.startingOffsetLeft+e.parentOffsetLeft-e.startingBackgroundPositionLeft)*(o-e.stellarRatio)+"px":e.startingValueLeft,n=this.options.verticalScrolling?(u+e.verticalOffset-this.viewportOffsetTop-e.startingOffsetTop+e.parentOffsetTop-e.startingBackgroundPositionTop)*(o-e.stellarRatio)+"px":e.startingValueTop,p(e.$element,i,n)}},_handleScrollEvent:function(){var t=this,o=!1,e=function(){t._repositionElements(),o=!1},i=function(){o||(d(e),o=!0)};this.$scrollElement.bind("scroll."+this.name,i),i()},_startAnimationLoop:function(){var t=this;this._animationLoop=function(){d(t._animationLoop),t._repositionElements()},this._animationLoop()}},t.fn[s]=function(o){var e=arguments;return void 0===o||"object"===(void 0===o?"undefined":_typeof(o))?this.each(function(){t.data(this,"plugin_"+s)||t.data(this,"plugin_"+s,new n(this,o))}):"string"==typeof o&&"_"!==o[0]&&"init"!==o?this.each(function(){var i=t.data(this,"plugin_"+s);i instanceof n&&"function"==typeof i[o]&&i[o].apply(i,Array.prototype.slice.call(e,1)),"destroy"===o&&t.data(this,"plugin_"+s,null)}):void 0},t[s]=function(e){var i=t(o);return i.stellar.apply(i,Array.prototype.slice.call(arguments,0))},t[s].scrollProperty=l,t[s].positionProperty=a,o.Stellar=n}(jQuery,void 0,document);