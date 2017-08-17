"use strict";var _typeof4="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return void 0===t?"undefined":_typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":_typeof4(t)},_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return void 0===t?"undefined":_typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":_typeof3(t)},_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return void 0===t?"undefined":_typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":_typeof2(t)};!function(t,e,i,o){function s(e,i){this.element=e,this.options=t.extend({},r,i),this._defaults=r,this._name=n,this.init()}var n="stellar",r={scrollProperty:"scroll",positionProperty:"position",horizontalScrolling:!0,verticalScrolling:!0,horizontalOffset:0,verticalOffset:0,responsive:!1,parallaxBackgrounds:!0,parallaxElements:!0,hideDistantElements:!0,hideElement:function(t){t.hide()},showElement:function(t){t.show()}},a={scroll:{getLeft:function(t){return t.scrollLeft()},setLeft:function(t,e){t.scrollLeft(e)},getTop:function(t){return t.scrollTop()},setTop:function(t,e){t.scrollTop(e)}},position:{getLeft:function(t){return-1*parseInt(t.css("left"),10)},getTop:function(t){return-1*parseInt(t.css("top"),10)}},margin:{getLeft:function(t){return-1*parseInt(t.css("margin-left"),10)},getTop:function(t){return-1*parseInt(t.css("margin-top"),10)}},transform:{getLeft:function(t){var e=getComputedStyle(t[0])[f];return"none"!==e?-1*parseInt(e.match(/(-?[0-9]+)/g)[4],10):0},getTop:function(t){var e=getComputedStyle(t[0])[f];return"none"!==e?-1*parseInt(e.match(/(-?[0-9]+)/g)[5],10):0}}},l={position:{setLeft:function(t,e){t.css("left",e)},setTop:function(t,e){t.css("top",e)}},transform:{setPosition:function(t,e,i,o,s){t[0].style[f]="translate3d("+(e-i)+"px, "+(o-s)+"px, 0)"}}},f=function(){var e,i=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,o=t("script")[0].style,s="";for(e in o)if(i.test(e)){s=e.match(i)[0];break}return"WebkitOpacity"in o&&(s="Webkit"),"KhtmlOpacity"in o&&(s="Khtml"),function(t){return s+(s.length>0?t.charAt(0).toUpperCase()+t.slice(1):t)}}()("transform"),c=void 0!==t("<div />",{style:"background:#fff"}).css("background-position-x"),p=c?function(t,e,i){t.css({"background-position-x":e,"background-position-y":i})}:function(t,e,i){t.css("background-position",e+" "+i)},h=c?function(t){return[t.css("background-position-x"),t.css("background-position-y")]}:function(t){return t.css("background-position").split(" ")},d=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t){setTimeout(t,1e3/60)};s.prototype={init:function(){this.options.name=n+"_"+Math.floor(1e9*Math.random()),this._defineElements(),this._defineGetters(),this._defineSetters(),this._handleWindowLoadAndResize(),this._detectViewport(),this.refresh({firstLoad:!0}),"scroll"===this.options.scrollProperty?this._handleScrollEvent():this._startAnimationLoop()},_defineElements:function(){this.element===i.body&&(this.element=e),this.$scrollElement=t(this.element),this.$element=this.element===e?t("body"):this.$scrollElement,this.$viewportElement=void 0!==this.options.viewportElement?t(this.options.viewportElement):this.$scrollElement[0]===e||"scroll"===this.options.scrollProperty?this.$scrollElement:this.$scrollElement.parent()},_defineGetters:function(){var t=this,e=a[t.options.scrollProperty];this._getScrollLeft=function(){return e.getLeft(t.$scrollElement)},this._getScrollTop=function(){return e.getTop(t.$scrollElement)}},_defineSetters:function(){var e=this,i=a[e.options.scrollProperty],o=l[e.options.positionProperty],s=i.setLeft,n=i.setTop;this._setScrollLeft="function"==typeof s?function(t){s(e.$scrollElement,t)}:t.noop,this._setScrollTop="function"==typeof n?function(t){n(e.$scrollElement,t)}:t.noop,this._setPosition=o.setPosition||function(t,i,s,n,r){e.options.horizontalScrolling&&o.setLeft(t,i,s),e.options.verticalScrolling&&o.setTop(t,n,r)}},_handleWindowLoadAndResize:function(){var i=this,o=t(e);i.options.responsive&&o.bind("load."+this.name,function(){i.refresh()}),o.bind("resize."+this.name,function(){i._detectViewport(),i.options.responsive&&i.refresh()})},refresh:function(i){var o=this,s=o._getScrollLeft(),n=o._getScrollTop();i&&i.firstLoad||this._reset(),this._setScrollLeft(0),this._setScrollTop(0),this._setOffsets(),this._findParticles(),this._findBackgrounds(),i&&i.firstLoad&&/WebKit/.test(navigator.userAgent)&&t(e).load(function(){var t=o._getScrollLeft(),e=o._getScrollTop();o._setScrollLeft(t+1),o._setScrollTop(e+1),o._setScrollLeft(t),o._setScrollTop(e)}),this._setScrollLeft(s),this._setScrollTop(n)},_detectViewport:function(){var t=this.$viewportElement.offset(),e=null!==t&&void 0!==t;this.viewportWidth=this.$viewportElement.width(),this.viewportHeight=this.$viewportElement.height(),this.viewportOffsetTop=e?t.top:0,this.viewportOffsetLeft=e?t.left:0},_findParticles:function(){var e=this;if(this._getScrollLeft(),this._getScrollTop(),void 0!==this.particles)for(var i=this.particles.length-1;i>=0;i--)this.particles[i].$element.data("stellar-elementIsActive",void 0);this.particles=[],this.options.parallaxElements&&this.$element.find("[data-stellar-ratio]").each(function(i){var o,s,n,r,a,l,f,c,p,h=t(this),d=0,u=0,g=0,m=0;if(h.data("stellar-elementIsActive")){if(h.data("stellar-elementIsActive")!==this)return}else h.data("stellar-elementIsActive",this);e.options.showElement(h),h.data("stellar-startingLeft")?(h.css("left",h.data("stellar-startingLeft")),h.css("top",h.data("stellar-startingTop"))):(h.data("stellar-startingLeft",h.css("left")),h.data("stellar-startingTop",h.css("top"))),n=h.position().left,r=h.position().top,a="auto"===h.css("margin-left")?0:parseInt(h.css("margin-left"),10),l="auto"===h.css("margin-top")?0:parseInt(h.css("margin-top"),10),c=h.offset().left-a,p=h.offset().top-l,h.parents().each(function(){var e=t(this);if(!0===e.data("stellar-offset-parent"))return d=g,u=m,f=e,!1;g+=e.position().left,m+=e.position().top}),o=void 0!==h.data("stellar-horizontal-offset")?h.data("stellar-horizontal-offset"):void 0!==f&&void 0!==f.data("stellar-horizontal-offset")?f.data("stellar-horizontal-offset"):e.horizontalOffset,s=void 0!==h.data("stellar-vertical-offset")?h.data("stellar-vertical-offset"):void 0!==f&&void 0!==f.data("stellar-vertical-offset")?f.data("stellar-vertical-offset"):e.verticalOffset,e.particles.push({$element:h,$offsetParent:f,isFixed:"fixed"===h.css("position"),horizontalOffset:o,verticalOffset:s,startingPositionLeft:n,startingPositionTop:r,startingOffsetLeft:c,startingOffsetTop:p,parentOffsetLeft:d,parentOffsetTop:u,stellarRatio:void 0!==h.data("stellar-ratio")?h.data("stellar-ratio"):1,width:h.outerWidth(!0),height:h.outerHeight(!0),isHidden:!1})})},_findBackgrounds:function(){var e,i=this,o=this._getScrollLeft(),s=this._getScrollTop();this.backgrounds=[],this.options.parallaxBackgrounds&&(e=this.$element.find("[data-stellar-background-ratio]"),this.$element.data("stellar-background-ratio")&&(e=e.add(this.$element)),e.each(function(){var e,n,r,a,l,f,c,d=t(this),u=h(d),g=0,m=0,v=0,y=0;if(d.data("stellar-backgroundIsActive")){if(d.data("stellar-backgroundIsActive")!==this)return}else d.data("stellar-backgroundIsActive",this);d.data("stellar-backgroundStartingLeft")?p(d,d.data("stellar-backgroundStartingLeft"),d.data("stellar-backgroundStartingTop")):(d.data("stellar-backgroundStartingLeft",u[0]),d.data("stellar-backgroundStartingTop",u[1])),r="auto"===d.css("margin-left")?0:parseInt(d.css("margin-left"),10),a="auto"===d.css("margin-top")?0:parseInt(d.css("margin-top"),10),l=d.offset().left-r-o,f=d.offset().top-a-s,d.parents().each(function(){var e=t(this);if(!0===e.data("stellar-offset-parent"))return g=v,m=y,c=e,!1;v+=e.position().left,y+=e.position().top}),e=void 0!==d.data("stellar-horizontal-offset")?d.data("stellar-horizontal-offset"):void 0!==c&&void 0!==c.data("stellar-horizontal-offset")?c.data("stellar-horizontal-offset"):i.horizontalOffset,n=void 0!==d.data("stellar-vertical-offset")?d.data("stellar-vertical-offset"):void 0!==c&&void 0!==c.data("stellar-vertical-offset")?c.data("stellar-vertical-offset"):i.verticalOffset,i.backgrounds.push({$element:d,$offsetParent:c,isFixed:"fixed"===d.css("background-attachment"),horizontalOffset:e,verticalOffset:n,startingValueLeft:u[0],startingValueTop:u[1],startingBackgroundPositionLeft:isNaN(parseInt(u[0],10))?0:parseInt(u[0],10),startingBackgroundPositionTop:isNaN(parseInt(u[1],10))?0:parseInt(u[1],10),startingPositionLeft:d.position().left,startingPositionTop:d.position().top,startingOffsetLeft:l,startingOffsetTop:f,parentOffsetLeft:g,parentOffsetTop:m,stellarRatio:void 0===d.data("stellar-background-ratio")?1:d.data("stellar-background-ratio")})}))},_reset:function(){var t,e,i,o,s;for(s=this.particles.length-1;s>=0;s--)e=(t=this.particles[s]).$element.data("stellar-startingLeft"),i=t.$element.data("stellar-startingTop"),this._setPosition(t.$element,e,e,i,i),this.options.showElement(t.$element),t.$element.data("stellar-startingLeft",null).data("stellar-elementIsActive",null).data("stellar-backgroundIsActive",null);for(s=this.backgrounds.length-1;s>=0;s--)(o=this.backgrounds[s]).$element.data("stellar-backgroundStartingLeft",null).data("stellar-backgroundStartingTop",null),p(o.$element,o.startingValueLeft,o.startingValueTop)},destroy:function(){this._reset(),this.$scrollElement.unbind("resize."+this.name).unbind("scroll."+this.name),this._animationLoop=t.noop,t(e).unbind("load."+this.name).unbind("resize."+this.name)},_setOffsets:function(){var i=this,o=t(e);o.unbind("resize.horizontal-"+this.name).unbind("resize.vertical-"+this.name),"function"==typeof this.options.horizontalOffset?(this.horizontalOffset=this.options.horizontalOffset(),o.bind("resize.horizontal-"+this.name,function(){i.horizontalOffset=i.options.horizontalOffset()})):this.horizontalOffset=this.options.horizontalOffset,"function"==typeof this.options.verticalOffset?(this.verticalOffset=this.options.verticalOffset(),o.bind("resize.vertical-"+this.name,function(){i.verticalOffset=i.options.verticalOffset()})):this.verticalOffset=this.options.verticalOffset},_repositionElements:function(){var t,e,i,o,s,n,r,a,l,f,c=this._getScrollLeft(),h=this._getScrollTop(),d=!0,u=!0;if(this.currentScrollLeft!==c||this.currentScrollTop!==h||this.currentWidth!==this.viewportWidth||this.currentHeight!==this.viewportHeight){for(this.currentScrollLeft=c,this.currentScrollTop=h,this.currentWidth=this.viewportWidth,this.currentHeight=this.viewportHeight,f=this.particles.length-1;f>=0;f--)e=(t=this.particles[f]).isFixed?1:0,this.options.horizontalScrolling?a=(n=(c+t.horizontalOffset+this.viewportOffsetLeft+t.startingPositionLeft-t.startingOffsetLeft+t.parentOffsetLeft)*-(t.stellarRatio+e-1)+t.startingPositionLeft)-t.startingPositionLeft+t.startingOffsetLeft:(n=t.startingPositionLeft,a=t.startingOffsetLeft),this.options.verticalScrolling?l=(r=(h+t.verticalOffset+this.viewportOffsetTop+t.startingPositionTop-t.startingOffsetTop+t.parentOffsetTop)*-(t.stellarRatio+e-1)+t.startingPositionTop)-t.startingPositionTop+t.startingOffsetTop:(r=t.startingPositionTop,l=t.startingOffsetTop),this.options.hideDistantElements&&(u=!this.options.horizontalScrolling||a+t.width>(t.isFixed?0:c)&&a<(t.isFixed?0:c)+this.viewportWidth+this.viewportOffsetLeft,d=!this.options.verticalScrolling||l+t.height>(t.isFixed?0:h)&&l<(t.isFixed?0:h)+this.viewportHeight+this.viewportOffsetTop),u&&d?(t.isHidden&&(this.options.showElement(t.$element),t.isHidden=!1),this._setPosition(t.$element,n,t.startingPositionLeft,r,t.startingPositionTop)):t.isHidden||(this.options.hideElement(t.$element),t.isHidden=!0);for(f=this.backgrounds.length-1;f>=0;f--)e=(i=this.backgrounds[f]).isFixed?0:1,o=this.options.horizontalScrolling?(c+i.horizontalOffset-this.viewportOffsetLeft-i.startingOffsetLeft+i.parentOffsetLeft-i.startingBackgroundPositionLeft)*(e-i.stellarRatio)+"px":i.startingValueLeft,s=this.options.verticalScrolling?(h+i.verticalOffset-this.viewportOffsetTop-i.startingOffsetTop+i.parentOffsetTop-i.startingBackgroundPositionTop)*(e-i.stellarRatio)+"px":i.startingValueTop,p(i.$element,o,s)}},_handleScrollEvent:function(){var t=this,e=!1,i=function(){t._repositionElements(),e=!1},o=function(){e||(d(i),e=!0)};this.$scrollElement.bind("scroll."+this.name,o),o()},_startAnimationLoop:function(){var t=this;this._animationLoop=function(){d(t._animationLoop),t._repositionElements()},this._animationLoop()}},t.fn[n]=function(e){var i=arguments;return void 0===e||"object"===(void 0===e?"undefined":_typeof(e))?this.each(function(){t.data(this,"plugin_"+n)||t.data(this,"plugin_"+n,new s(this,e))}):"string"==typeof e&&"_"!==e[0]&&"init"!==e?this.each(function(){var o=t.data(this,"plugin_"+n);o instanceof s&&"function"==typeof o[e]&&o[e].apply(o,Array.prototype.slice.call(i,1)),"destroy"===e&&t.data(this,"plugin_"+n,null)}):void 0},t[n]=function(i){var o=t(e);return o.stellar.apply(o,Array.prototype.slice.call(arguments,0))},t[n].scrollProperty=a,t[n].positionProperty=l,e.Stellar=s}(jQuery,void 0,document);