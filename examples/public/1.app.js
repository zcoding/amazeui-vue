webpackJsonp([1],{

/***/ 108:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(109)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(110)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime&loose=all&nonStandard=false!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./article.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime&loose=all&nonStandard=false!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./article.vue","-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./article.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime&loose=all&nonStandard=false!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./article.vue")
	var newTemplate = require("-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./article.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },

/***/ 109:
/***/ function(module, exports) {

	'use strict';

	module.exports = {

	  props: {
	    title: {
	      type: String,
	      'default': '',
	      required: true
	    },
	    meta: {
	      type: String,
	      'default': ''
	    }
	  }

	};

/***/ },

/***/ 110:
/***/ function(module, exports) {

	module.exports = "<article class=\"am-article\">\r\n  <div class=\"am-article-hd\">\r\n    <h1 class=\"am-article-title\">{{ title }}</h1>\r\n    <p class=\"am-article-meta\">{{ meta }}</p>\r\n  </div>\r\n  <div class=\"am-article-bd\">\r\n    <slot></slot>\r\n  </div>\r\n</article>";

/***/ }

});