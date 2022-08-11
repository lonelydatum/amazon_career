(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _maskJs = require('./mask.js');

var banner = document.getElementById('banner');

var data = {
	t1: { id: "t1", read: 1.5 },
	t2: { id: "t2", read: 1.8 },
	t3: { id: "t3", read: 2.5 },
	t4: { id: "t4", read: 2.5 }
};

gsap.defaults({
	ease: "power2.out"
});

var size = {
	w: banner.offsetWidth,
	h: banner.offsetHeight,
	ww: banner.offsetWidth * 2,
	hh: banner.offsetHeight * 2
};

gsap.defaults({
	ease: "power2.out"
});

function text(data) {
	var id = data.id;
	var read = data.read;

	var tl = new TimelineMax();
	tl.set('#' + id + ' img', { display: "block" });
	tl.fromTo('#' + id, { duration: .5, opacity: 0 }, { opacity: 1 });

	tl.add(function () {
		(0, _maskJs.canvasMaker)(id, .38);
	}, '+=' + read);

	return tl;
}

function start() {
	var tl = new TimelineMax({});

	tl.set(".frame1", { opacity: 1 });

	tl.add(text(data.t1), 0);
	tl.add(text(data.t2), "+=.6");
	tl.add(text(data.t3), "+=.6");
	tl.add(text(data.t4), "+=.6");

	tl.from("#t5", { duration: .3, opacity: 0 }, "+=.6");
}

exports.start = start;

},{"./mask.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function canvasMaker() {
	var maskFX = arguments.length <= 0 || arguments[0] === undefined ? "maskFX" : arguments[0];
	var duration = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];

	var tl = new TimelineMax();

	var el = document.getElementById(maskFX);
	var canvas = el.querySelector("canvas");

	var img = el.querySelector("img");

	var context = canvas.getContext("2d");

	gsap.set(img, { display: "none" });

	context.drawImage(img, 0, 0, img.width, img.height, 0, 0, img.width, img.height);

	console.log(duration);

	context.globalCompositeOperation = "destination-out";
	var obj = { wow: 0 };
	tl.to(obj, { duration: duration, wow: 1, onUpdate: function onUpdate() {

			var gradient = context.createLinearGradient(0, 0, img.width, 0);
			gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
			gradient.addColorStop(obj.wow, "rgba(255, 255, 255, 0)");
			context.fillStyle = gradient;
			context.fillRect(0, 0, img.width, img.height);
		} });
	tl.set(el, { opacity: 0 });
}

// function svgMaker(){

// 	const tl = new TimelineMax()

// 		tl.set(".frame1", {opacity:1})
// 		gsap.set("#theSVG", {
// 			attr:{
// 				viewBox:`"0 0 ${size.ww} ${size.hh}"`,
// 				width: size.ww,
// 				height: size.hh
// 			}
// 		});

// 		gsap.set(["#theGradient", "#patternImage","#gradientBox", "#pattern"], { attr: { width: size.ww, height: size.hh } });

// 		gsap.set("#theGradient", { attr: {
// 			y1: size.w,
// 			y2: size.h,
// 			x1: size.ww,
// 			x2: size.ww*2 } });
// 	gsap.to("#theGradient", {
// 	  duration: 2,
// 	  attr: { x1: -size.ww, x2: 1 },
// 	  repeat: -1,
// 	  yoyo: true,
// 	  repeatDelay: 0.5,
// 	  ease: "power2.inOut"
// 	});

// }

exports.canvasMaker = canvasMaker;

},{}],3:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

(0, _commonJsCommonJs.start)();

},{"../../_common/js/common.js":1}]},{},[3])


//# sourceMappingURL=main.js.map
