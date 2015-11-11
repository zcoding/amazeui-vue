webpackJsonp([2],{

/***/ 111:
/***/ function(module, exports, __webpack_require__) {

	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(112)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./lead.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./lead.vue"], function () {
	var newOptions = null
	var newTemplate = require("-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./lead.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },

/***/ 112:
/***/ function(module, exports) {

	module.exports = "<p class=\"am-article-lead\"><slot></slot></p>";

/***/ }

});