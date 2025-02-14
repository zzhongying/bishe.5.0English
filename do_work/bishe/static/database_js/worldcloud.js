!function (t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e(require("echarts")) : "function" == typeof define && define.amd ? define(["echarts"], e) : "object" == typeof exports ? exports["echarts-wordcloud"] = e(require("echarts")) : t["echarts-wordcloud"] = e(t.echarts)
}(this, function (t) {
	return function (t) {
		function e(n) {
			if (r[n]) return r[n].exports;
			var a = r[n] = {exports: {}, id: n, loaded: !1};
			return t[n].call(a.exports, a, a.exports, e), a.loaded = !0, a.exports
		}
		
		var r = {};
		return e.m = t, e.c = r, e.p = "", e(0)
	}([function (t, e, r) {
		t.exports = r(14)
	}, function (t, e, r) {
		function n(t) {
			if ("object" == typeof t && null !== t) {
				var e = t;
				if (t instanceof Array) {
					e = [];
					for (var r = 0, a = t.length; a > r; r ++) e[r] = n(t[r])
				} else if ( !I(t) && !T(t)) {
					e = {};
					for (var i in t) t.hasOwnProperty(i) && (e[i] = n(t[i]))
				}
				return e
			}
			return t
		}
		
		function a(t, e, r) {
			if ( !C(e) || !C(t)) return r ? n(e) : t;
			for (var i in e) if (e.hasOwnProperty(i)) {
				var o = t[i], u = e[i];
				!C(u) || !C(o) || M(u) || M(o) || T(u) || T(o) || I(u) || I(o) ? !r && i in t || (t[i] = n(e[i], !0)) : a(o, u, r)
			}
			return t
		}
		
		function i(t, e) {
			for (var r = t[0], n = 1, i = t.length; i > n; n ++) r = a(r, t[n], e);
			return r
		}
		
		function o(t, e) {
			for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
			return t
		}
		
		function u(t, e, r) {
			for (var n in e) e.hasOwnProperty(n) && (r ? null != e[n] : null == t[n]) && (t[n] = e[n]);
			return t
		}
		
		function c() {
			return document.createElement("canvas")
		}
		
		function l() {
			return A || (A = W.createCanvas().getContext("2d")), A
		}
		
		function s(t, e) {
			if (t) {
				if (t.indexOf) return t.indexOf(e);
				for (var r = 0, n = t.length; n > r; r ++) if (t[r] === e) return r
			}
			return - 1
		}
		
		function f(t, e) {
			function r() {
			}
			
			var n = t.prototype;
			r.prototype = e.prototype, t.prototype = new r;
			for (var a in n) t.prototype[a] = n[a];
			t.prototype.constructor = t, t.superClass = e
		}
		
		function h(t, e, r) {
			t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, u(t, e, r)
		}
		
		function d(t) {
			return t ? "string" == typeof t ? !1 : "number" == typeof t.length : void 0
		}
		
		function g(t, e, r) {
			if (t && e) if (t.forEach && t.forEach === z) t.forEach(e, r); else if (t.length === + t.length) for (var n = 0, a = t.length; a > n; n ++) e.call(r, t[n], n, t); else for (var i in t) t.hasOwnProperty(i) && e.call(r, t[i], i, t)
		}
		
		function m(t, e, r) {
			if (t && e) {
				if (t.map && t.map === q) return t.map(e, r);
				for (var n = [], a = 0, i = t.length; i > a; a ++) n.push(e.call(r, t[a], a, t));
				return n
			}
		}
		
		function p(t, e, r, n) {
			if (t && e) {
				if (t.reduce && t.reduce === j) return t.reduce(e, r, n);
				for (var a = 0, i = t.length; i > a; a ++) r = e.call(n, r, t[a], a, t);
				return r
			}
		}
		
		function v(t, e, r) {
			if (t && e) {
				if (t.filter && t.filter === L) return t.filter(e, r);
				for (var n = [], a = 0, i = t.length; i > a; a ++) e.call(r, t[a], a, t) && n.push(t[a]);
				return n
			}
		}
		
		function y(t, e, r) {
			if (t && e) for (var n = 0, a = t.length; a > n; n ++) if (e.call(r, t[n], n, t)) return t[n]
		}
		
		function w(t, e) {
			var r = D.call(arguments, 2);
			return function () {
				return t.apply(e, r.concat(D.call(arguments)))
			}
		}
		
		function x(t) {
			var e = D.call(arguments, 1);
			return function () {
				return t.apply(this, e.concat(D.call(arguments)))
			}
		}
		
		function M(t) {
			return "[object Array]" === R.call(t)
		}
		
		function b(t) {
			return "function" == typeof t
		}
		
		function S(t) {
			return "[object String]" === R.call(t)
		}
		
		function C(t) {
			var e = typeof t;
			return "function" === e || !!t && "object" == e
		}
		
		function I(t) {
			return !!P[R.call(t)] || t instanceof F
		}
		
		function T(t) {
			return t && 1 === t.nodeType && "string" == typeof t.nodeName
		}
		
		function N(t) {
			for (var e = 0, r = arguments.length; r > e; e ++) if (null != arguments[e]) return arguments[e]
		}
		
		function E() {
			return Function.call.apply(D, arguments)
		}
		
		function k(t, e) {
			if ( !t) throw new Error(e)
		}
		
		var A, F = r(10), P = {
				"[object Function]": 1,
				"[object RegExp]": 1,
				"[object Date]": 1,
				"[object Error]": 1,
				"[object CanvasGradient]": 1
			}, R = Object.prototype.toString, O = Array.prototype, z = O.forEach, L = O.filter, D = O.slice, q = O.map,
			j = O.reduce, W = {
				inherits: f,
				mixin: h,
				clone: n,
				merge: a,
				mergeAll: i,
				extend: o,
				defaults: u,
				getContext: l,
				createCanvas: c,
				indexOf: s,
				slice: E,
				find: y,
				isArrayLike: d,
				each: g,
				map: m,
				reduce: p,
				filter: v,
				bind: w,
				curry: x,
				isArray: M,
				isString: S,
				isObject: C,
				isFunction: b,
				isBuildInObject: I,
				isDom: T,
				retrieve: N,
				assert: k,
				noop: function () {
				}
			};
		t.exports = W
	}, function (e, r) {
		e.exports = t
	}, function (t, e) {
		function r(t) {
			return t.replace(/^\s+/, "").replace(/\s+$/, "")
		}
		
		var n = {}, a = 1e-4;
		n.linearMap = function (t, e, r, n) {
			var a = e[1] - e[0], i = r[1] - r[0];
			if (0 === a) return 0 === i ? r[0] : (r[0] + r[1]) / 2;
			if (n) if (a > 0) {
				if (t <= e[0]) return r[0];
				if (t >= e[1]) return r[1]
			} else {
				if (t >= e[0]) return r[0];
				if (t <= e[1]) return r[1]
			} else {
				if (t === e[0]) return r[0];
				if (t === e[1]) return r[1]
			}
			return (t - e[0]) / a * i + r[0]
		}, n.parsePercent = function (t, e) {
			switch (t) {
				case"center":
				case"middle":
					t = "50%";
					break;
				case"left":
				case"top":
					t = "0%";
					break;
				case"right":
				case"bottom":
					t = "100%"
			}
			return "string" == typeof t ? r(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? NaN : + t
		}, n.round = function (t) {
			return + (+ t).toFixed(10)
		}, n.asc = function (t) {
			return t.sort(function (t, e) {
				return t - e
			}), t
		}, n.getPrecision = function (t) {
			if (isNaN(t)) return 0;
			for (var e = 1, r = 0; Math.round(t * e) / e !== t;) e *= 10, r ++;
			return r
		}, n.getPixelPrecision = function (t, e) {
			var r = Math.log, n = Math.LN10, a = Math.floor(r(t[1] - t[0]) / n), i = Math.round(r(Math.abs(e[1] - e[0])) / n);
			return Math.max(- a + i, 0)
		}, n.MAX_SAFE_INTEGER = 9007199254740991, n.remRadian = function (t) {
			var e = 2 * Math.PI;
			return (t % e + e) % e
		}, n.isRadianAroundZero = function (t) {
			return t > - a && a > t
		}, n.parseDate = function (t) {
			return t instanceof Date ? t : new Date("string" == typeof t ? t.replace(/-/g, "/") : Math.round(t))
		}, n.quantity = function (t) {
			return Math.pow(10, Math.floor(Math.log(t) / Math.LN10))
		}, n.nice = function (t, e) {
			var r, a = n.quantity(t), i = t / a;
			return r = e ? 1.5 > i ? 1 : 2.5 > i ? 2 : 4 > i ? 3 : 7 > i ? 5 : 10 : 1 > i ? 1 : 2 > i ? 2 : 3 > i ? 3 : 5 > i ? 5 : 10, r * a
		}, t.exports = n
	}, function (t, e, r) {
		function n(t, e, r, n) {
			if ( !e) return t;
			var u = i(e[0]), c = o.isArray(u) && u.length || 1;
			r = r || [], n = n || "extra";
			for (var l = 0; c > l; l ++) if ( !t[l]) {
				var s = r[l] || n + (l - r.length);
				t[l] = a(e, l) ? {type: "ordinal", name: s} : s
			}
			return t
		}
		
		function a(t, e) {
			for (var r = 0, n = t.length; n > r; r ++) {
				var a = i(t[r]);
				if ( !o.isArray(a)) return !1;
				var a = a[e];
				if (null != a && isFinite(a)) return !1;
				if (o.isString(a) && "-" !== a) return !0
			}
			return !1
		}
		
		function i(t) {
			return o.isArray(t) ? t : o.isObject(t) ? t.value : t
		}
		
		var o = r(1);
		t.exports = n
	}, function (t, e, r) {
		function n(t) {
			return isNaN(t) ? "-" : (t = (t + "").split("."), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : ""))
		}
		
		function a(t) {
			return t.toLowerCase().replace(/-(.)/g, function (t, e) {
				return e.toUpperCase()
			})
		}
		
		function i(t) {
			var e = t.length;
			return "number" == typeof t ? [t, t, t, t] : 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
		}
		
		function o(t) {
			return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
		}
		
		function u(t, e) {
			return "{" + t + (null == e ? "" : e) + "}"
		}
		
		function c(t, e) {
			f.isArray(e) || (e = [e]);
			var r = e.length;
			if ( !r) return "";
			for (var n = e[0].$vars, a = 0; a < n.length; a ++) {
				var i = d[a];
				t = t.replace(u(i), u(i, 0))
			}
			for (var o = 0; r > o; o ++) for (var c = 0; c < n.length; c ++) t = t.replace(u(d[c], o), e[o][n[c]]);
			return t
		}
		
		function l(t, e) {
			("week" === t || "month" === t || "quarter" === t || "half-year" === t || "year" === t) && (t = "MM-dd\nyyyy");
			var r = h.parseDate(e), n = r.getFullYear(), a = r.getMonth() + 1, i = r.getDate(), o = r.getHours(),
				u = r.getMinutes(), c = r.getSeconds();
			return t = t.replace("MM", s(a)).toLowerCase().replace("yyyy", n).replace("yy", n % 100).replace("dd", s(i)).replace("d", i).replace("hh", s(o)).replace("h", o).replace("mm", s(u)).replace("m", u).replace("ss", s(c)).replace("s", c)
		}
		
		function s(t) {
			return 10 > t ? "0" + t : t
		}
		
		var f = r(1), h = r(3), d = ["a", "b", "c", "d", "e", "f", "g"];
		t.exports = {normalizeCssArray: i, addCommas: n, toCamelCase: a, encodeHTML: o, formatTpl: c, formatTime: l}
	}, function (t, e, r) {
		"use strict";
		
		function n(t, e, r, n, a) {
			var i = 0, o = 0;
			null == n && (n = 1 / 0), null == a && (a = 1 / 0);
			var u = 0;
			e.eachChild(function (c, l) {
				var s, f, h = c.position, d = c.getBoundingRect(), g = e.childAt(l + 1), m = g && g.getBoundingRect();
				if ("horizontal" === t) {
					var p = d.width + (m ? - m.x + d.x : 0);
					s = i + p, s > n || c.newline ? (i = 0, s = p, o += u + r, u = d.height) : u = Math.max(u, d.height)
				} else {
					var v = d.height + (m ? - m.y + d.y : 0);
					f = o + v, f > a || c.newline ? (i += u + r, o = 0, f = v, u = d.width) : u = Math.max(u, d.width)
				}
				c.newline || (h[0] = i, h[1] = o, "horizontal" === t ? i = s + r : o = f + r)
			})
		}
		
		var a = r(1), i = r(7), o = r(3), u = r(5), c = o.parsePercent, l = a.each, s = {},
			f = ["left", "right", "top", "bottom", "width", "height"];
		s.box = n, s.vbox = a.curry(n, "vertical"), s.hbox = a.curry(n, "horizontal"), s.getAvailableSize = function (t, e, r) {
			var n = e.width, a = e.height, i = c(t.x, n), o = c(t.y, a), l = c(t.x2, n), s = c(t.y2, a);
			return (isNaN(i) || isNaN(parseFloat(t.x))) && (i = 0), (isNaN(l) || isNaN(parseFloat(t.x2))) && (l = n), (isNaN(o) || isNaN(parseFloat(t.y))) && (o = 0), (isNaN(s) || isNaN(parseFloat(t.y2))) && (s = a), r = u.normalizeCssArray(r || 0), {
				width: Math.max(l - i - r[1] - r[3], 0),
				height: Math.max(s - o - r[0] - r[2], 0)
			}
		}, s.getLayoutRect = function (t, e, r) {
			r = u.normalizeCssArray(r || 0);
			var n = e.width, a = e.height, o = c(t.left, n), l = c(t.top, a), s = c(t.right, n), f = c(t.bottom, a),
				h = c(t.width, n), d = c(t.height, a), g = r[2] + r[0], m = r[1] + r[3], p = t.aspect;
			switch (isNaN(h) && (h = n - s - m - o), isNaN(d) && (d = a - f - g - l), isNaN(h) && isNaN(d) && (p > n / a ? h = .8 * n : d = .8 * a), null != p && (isNaN(h) && (h = p * d), isNaN(d) && (d = h / p)), isNaN(o) && (o = n - s - h - m), isNaN(l) && (l = a - f - d - g), t.left || t.right) {
				case"center":
					o = n / 2 - h / 2 - r[3];
					break;
				case"right":
					o = n - h - m
			}
			switch (t.top || t.bottom) {
				case"middle":
				case"center":
					l = a / 2 - d / 2 - r[0];
					break;
				case"bottom":
					l = a - d - g
			}
			o = o || 0, l = l || 0, isNaN(h) && (h = n - o - (s || 0)), isNaN(d) && (d = a - l - (f || 0));
			var v = new i(o + r[3], l + r[0], h, d);
			return v.margin = r, v
		}, s.positionGroup = function (t, e, r, n) {
			var i = t.getBoundingRect();
			e = a.extend(a.clone(e), {
				width: i.width,
				height: i.height
			}), e = s.getLayoutRect(e, r, n), t.position = [e.x - i.x, e.y - i.y]
		}, s.mergeLayoutParam = function (t, e, r) {
			function n(n) {
				var a = {}, u = 0, c = {}, s = 0, f = r.ignoreSize ? 1 : 2;
				if (l(n, function (e) {
					c[e] = t[e]
				}), l(n, function (t) {
					i(e, t) && (a[t] = c[t] = e[t]), o(a, t) && u ++, o(c, t) && s ++
				}), s !== f && u) {
					if (u >= f) return a;
					for (var h = 0; h < n.length; h ++) {
						var d = n[h];
						if ( !i(a, d) && i(t, d)) {
							a[d] = t[d];
							break
						}
					}
					return a
				}
				return c
			}
			
			function i(t, e) {
				return t.hasOwnProperty(e)
			}
			
			function o(t, e) {
				return null != t[e] && "auto" !== t[e]
			}
			
			function u(t, e, r) {
				l(t, function (t) {
					e[t] = r[t]
				})
			}
			
			!a.isObject(r) && (r = {});
			var c = ["width", "left", "right"], s = ["height", "top", "bottom"], f = n(c), h = n(s);
			u(c, t, f), u(s, t, h)
		}, s.getLayoutParams = function (t) {
			return s.copyLayoutParams({}, t)
		}, s.copyLayoutParams = function (t, e) {
			return e && t && l(f, function (r) {
				e.hasOwnProperty(r) && (t[r] = e[r])
			}), t
		}, t.exports = s
	}, function (t, e, r) {
		"use strict";
		
		function n(t, e, r, n) {
			this.x = t, this.y = e, this.width = r, this.height = n
		}
		
		var a = r(9), i = r(8), o = a.applyTransform, u = Math.min, c = Math.abs, l = Math.max;
		n.prototype = {
			constructor: n, union: function (t) {
				var e = u(t.x, this.x), r = u(t.y, this.y);
				this.width = l(t.x + t.width, this.x + this.width) - e, this.height = l(t.y + t.height, this.y + this.height) - r, this.x = e, this.y = r
			}, applyTransform: function () {
				var t = [], e = [];
				return function (r) {
					r && (t[0] = this.x, t[1] = this.y, e[0] = this.x + this.width, e[1] = this.y + this.height, o(t, t, r), o(e, e, r), this.x = u(t[0], e[0]), this.y = u(t[1], e[1]), this.width = c(e[0] - t[0]), this.height = c(e[1] - t[1]))
				}
			}(), calculateTransform: function (t) {
				var e = this, r = t.width / e.width, n = t.height / e.height, a = i.create();
				return i.translate(a, a, [- e.x, - e.y]), i.scale(a, a, [r, n]), i.translate(a, a, [t.x, t.y]), a
			}, intersect: function (t) {
				var e = this, r = e.x, n = e.x + e.width, a = e.y, i = e.y + e.height, o = t.x, u = t.x + t.width, c = t.y,
					l = t.y + t.height;
				return !(o > n || r > u || c > i || a > l)
			}, contain: function (t, e) {
				var r = this;
				return t >= r.x && t <= r.x + r.width && e >= r.y && e <= r.y + r.height
			}, clone: function () {
				return new n(this.x, this.y, this.width, this.height)
			}, copy: function (t) {
				this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
			}
		}, t.exports = n
	}, function (t, e) {
		var r = "undefined" == typeof Float32Array ? Array : Float32Array, n = {
			create: function () {
				var t = new r(6);
				return n.identity(t), t
			}, identity: function (t) {
				return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
			}, copy: function (t, e) {
				return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
			}, mul: function (t, e, r) {
				var n = e[0] * r[0] + e[2] * r[1], a = e[1] * r[0] + e[3] * r[1], i = e[0] * r[2] + e[2] * r[3],
					o = e[1] * r[2] + e[3] * r[3], u = e[0] * r[4] + e[2] * r[5] + e[4], c = e[1] * r[4] + e[3] * r[5] + e[5];
				return t[0] = n, t[1] = a, t[2] = i, t[3] = o, t[4] = u, t[5] = c, t
			}, translate: function (t, e, r) {
				return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + r[0], t[5] = e[5] + r[1], t
			}, rotate: function (t, e, r) {
				var n = e[0], a = e[2], i = e[4], o = e[1], u = e[3], c = e[5], l = Math.sin(r), s = Math.cos(r);
				return t[0] = n * s + o * l, t[1] = - n * l + o * s, t[2] = a * s + u * l, t[3] = - a * l + s * u, t[4] = s * i + l * c, t[5] = s * c - l * i, t
			}, scale: function (t, e, r) {
				var n = r[0], a = r[1];
				return t[0] = e[0] * n, t[1] = e[1] * a, t[2] = e[2] * n, t[3] = e[3] * a, t[4] = e[4] * n, t[5] = e[5] * a, t
			}, invert: function (t, e) {
				var r = e[0], n = e[2], a = e[4], i = e[1], o = e[3], u = e[5], c = r * o - i * n;
				return c ? (c = 1 / c, t[0] = o * c, t[1] = - i * c, t[2] = - n * c, t[3] = r * c, t[4] = (n * u - o * a) * c, t[5] = (i * a - r * u) * c, t) : null
			}
		};
		t.exports = n
	}, function (t, e) {
		var r = "undefined" == typeof Float32Array ? Array : Float32Array, n = {
			create: function (t, e) {
				var n = new r(2);
				return n[0] = t || 0, n[1] = e || 0, n
			}, copy: function (t, e) {
				return t[0] = e[0], t[1] = e[1], t
			}, clone: function (t) {
				var e = new r(2);
				return e[0] = t[0], e[1] = t[1], e
			}, set: function (t, e, r) {
				return t[0] = e, t[1] = r, t
			}, add: function (t, e, r) {
				return t[0] = e[0] + r[0], t[1] = e[1] + r[1], t
			}, scaleAndAdd: function (t, e, r, n) {
				return t[0] = e[0] + r[0] * n, t[1] = e[1] + r[1] * n, t
			}, sub: function (t, e, r) {
				return t[0] = e[0] - r[0], t[1] = e[1] - r[1], t
			}, len: function (t) {
				return Math.sqrt(this.lenSquare(t))
			}, lenSquare: function (t) {
				return t[0] * t[0] + t[1] * t[1]
			}, mul: function (t, e, r) {
				return t[0] = e[0] * r[0], t[1] = e[1] * r[1], t
			}, div: function (t, e, r) {
				return t[0] = e[0] / r[0], t[1] = e[1] / r[1], t
			}, dot: function (t, e) {
				return t[0] * e[0] + t[1] * e[1]
			}, scale: function (t, e, r) {
				return t[0] = e[0] * r, t[1] = e[1] * r, t
			}, normalize: function (t, e) {
				var r = n.len(e);
				return 0 === r ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / r, t[1] = e[1] / r), t
			}, distance: function (t, e) {
				return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
			}, distanceSquare: function (t, e) {
				return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
			}, negate: function (t, e) {
				return t[0] = - e[0], t[1] = - e[1], t
			}, lerp: function (t, e, r, n) {
				return t[0] = e[0] + n * (r[0] - e[0]), t[1] = e[1] + n * (r[1] - e[1]), t
			}, applyTransform: function (t, e, r) {
				var n = e[0], a = e[1];
				return t[0] = r[0] * n + r[2] * a + r[4], t[1] = r[1] * n + r[3] * a + r[5], t
			}, min: function (t, e, r) {
				return t[0] = Math.min(e[0], r[0]), t[1] = Math.min(e[1], r[1]), t
			}, max: function (t, e, r) {
				return t[0] = Math.max(e[0], r[0]), t[1] = Math.max(e[1], r[1]), t
			}
		};
		n.length = n.len, n.lengthSquare = n.lenSquare, n.dist = n.distance, n.distSquare = n.distanceSquare, t.exports = n
	}, function (t, e) {
		var r = function (t) {
			this.colorStops = t || []
		};
		r.prototype = {
			constructor: r, addColorStop: function (t, e) {
				this.colorStops.push({offset: t, color: e})
			}
		}, t.exports = r
	}, function (t, e, r) {
		var n = r(4), a = r(2);
		a.extendSeriesModel({
			type: "series.wordCloud",
			visualColorAccessPath: "textStyle.normal.color",
			optionUpdated: function () {
				var t = this.option;
				t.gridSize = Math.max(Math.floor(t.gridSize), 4)
			},
			getInitialData: function (t, e) {
				var r = n(["value"], t.data), i = new a.List(r, this);
				return i.initData(t.data), i
			},
			defaultOption: {
				maskImage: null,
				shape: "circle",
				left: "center",
				top: "center",
				width: "70%",
				height: "80%",
				sizeRange: [12, 60],
				rotationRange: [- 90, 90],
				rotationStep: 45,
				gridSize: 8,
				textStyle: {normal: {fontWeight: "normal"}}
			}
		})
	}, function (t, e, r) {
		function n(t, e) {
			return t && t.getShallow(e)
		}
		
		var a = r(2);
		a.extendChartView({
			type: "wordCloud", render: function (t, e, r) {
				var i = this.group;
				i.removeAll();
				var o = t.getData(), u = t.get("gridSize");
				t.layoutInstance.ondraw = function (t, e, r, c) {
					var l = o.getItemModel(r), s = l.getModel("textStyle.normal"), f = l.getModel("textStyle.emphasis"),
						h = function (t, r) {
							var a = t.ecModel, i = a && a.getModel("textStyle");
							return ["fontStyle", "fontWeight", "fontSize", "fontFamily"].map(function (a, o) {
								return 2 !== o ? t.getShallow(a) || r.getShallow(a) || n(i, a) : (t.getShallow(a, !0) || Math.round(t === s ? e : r.getShallow(a, !0) || e)) + "px"
							}).join(" ")
						}, t = new a.graphic.Text({
							style: {
								x: c.info.fillTextOffsetX,
								y: c.info.fillTextOffsetY + .5 * e,
								text: t,
								textBaseline: "middle",
								font: h(s, f)
							},
							scale: [1 / c.info.mu, 1 / c.info.mu],
							position: [(c.gx + c.info.gw / 2) * u, (c.gy + c.info.gh / 2) * u],
							rotation: c.rot
						});
					t.setStyle(s.getItemStyle()), t.setStyle({fill: o.getItemVisual(r, "color")}), i.add(t), o.setItemGraphicEl(r, t), a.graphic.setHoverStyle(t, a.util.extend(f.getItemStyle(), {font: h(f, s)}))
				}
			}
		})
	}, function (t, e, r) {
		var n, a;
		window.setImmediate || (window.setImmediate = function () {
			return window.msSetImmediate || window.webkitSetImmediate || window.mozSetImmediate || window.oSetImmediate || function () {
				if ( !window.postMessage || !window.addEventListener) return null;
				var t = [void 0], e = "zero-timeout-message", r = function (r) {
					var n = t.length;
					return t.push(r), window.postMessage(e + n.toString(36), "*"), n
				};
				return window.addEventListener("message", function (r) {
					if ("string" == typeof r.data && r.data.substr(0, e.length) === e) {
						r.stopImmediatePropagation();
						var n = parseInt(r.data.substr(e.length), 36);
						t[n] && (t[n](), t[n] = void 0)
					}
				}, !0), window.clearImmediate = function (e) {
					t[e] && (t[e] = void 0)
				}, r
			}() || function (t) {
				window.setTimeout(t, 0)
			}
		}()), window.clearImmediate || (window.clearImmediate = function () {
			return window.msClearImmediate || window.webkitClearImmediate || window.mozClearImmediate || window.oClearImmediate || function (t) {
				window.clearTimeout(t)
			}
		}()), function (r) {
			var i = function () {
				var t = document.createElement("canvas");
				if ( !t || !t.getContext) return !1;
				var e = t.getContext("2d");
				return e.getImageData && e.fillText && Array.prototype.some && Array.prototype.push ? !0 : !1
			}(), o = function () {
				if (i) {
					for (var t, e, r = document.createElement("canvas").getContext("2d"), n = 20; n;) {
						if (r.font = n.toString(10) + "px sans-serif", r.measureText("锛�").width === t && r.measureText("m").width === e) return n + 1;
						t = r.measureText("锛�").width, e = r.measureText("m").width, n --
					}
					return 0
				}
			}(), u = function (t) {
				for (var e, r, n = t.length; n; e = Math.floor(Math.random() * n), r = t[-- n], t[n] = t[e], t[e] = r) ;
				return t
			}, c = function (t, e) {
				function r(t, e) {
					return "hsl(" + (360 * Math.random()).toFixed() + "," + (30 * Math.random() + 70).toFixed() + "%," + (Math.random() * (e - t) + t).toFixed() + "%)"
				}
				
				if (i) {
					Array.isArray(t) || (t = [t]), t.forEach(function (e, r) {
						if ("string" == typeof e) {
							if (t[r] = document.getElementById(e), !t[r]) throw"The element id specified is not found."
						} else if ( !e.tagName && !e.appendChild) throw"You must pass valid HTML elements, or ID of the element."
					});
					var n = {
						list: [],
						fontFamily: '"Trebuchet MS", "Heiti TC", "寰粺姝ｉ粦楂�", "Arial Unicode MS", "Droid Fallback Sans", sans-serif',
						fontWeight: "normal",
						color: "random-dark",
						minSize: 0,
						weightFactor: 1,
						clearCanvas: !0,
						backgroundColor: "#fff",
						gridSize: 8,
						drawOutOfBound: !1,
						origin: null,
						drawMask: !1,
						maskColor: "rgba(255,0,0,0.3)",
						maskGapWidth: .3,
						wait: 0,
						abortThreshold: 0,
						abort: function () {
						},
						minRotation: - Math.PI / 2,
						maxRotation: Math.PI / 2,
						rotationStep: .1,
						shuffle: !0,
						rotateRatio: .1,
						shape: "circle",
						ellipticity: .65,
						classes: null,
						hover: null,
						click: null
					};
					if (e) for (var a in e) a in n && (n[a] = e[a]);
					if ("function" != typeof n.weightFactor) {
						var c = n.weightFactor;
						n.weightFactor = function (t) {
							return t * c
						}
					}
					if ("function" != typeof n.shape) switch (n.shape) {
						case"circle":
						default:
							n.shape = "circle";
							break;
						case"cardioid":
							n.shape = function (t) {
								return 1 - Math.sin(t)
							};
							break;
						case"diamond":
						case"square":
							n.shape = function (t) {
								var e = t % (2 * Math.PI / 4);
								return 1 / (Math.cos(e) + Math.sin(e))
							};
							break;
						case"triangle-forward":
							n.shape = function (t) {
								var e = t % (2 * Math.PI / 3);
								return 1 / (Math.cos(e) + Math.sqrt(3) * Math.sin(e))
							};
							break;
						case"triangle":
						case"triangle-upright":
							n.shape = function (t) {
								var e = (t + 3 * Math.PI / 2) % (2 * Math.PI / 3);
								return 1 / (Math.cos(e) + Math.sqrt(3) * Math.sin(e))
							};
							break;
						case"pentagon":
							n.shape = function (t) {
								var e = (t + .955) % (2 * Math.PI / 5);
								return 1 / (Math.cos(e) + .726543 * Math.sin(e))
							};
							break;
						case"star":
							n.shape = function (t) {
								var e = (t + .955) % (2 * Math.PI / 10);
								return (t + .955) % (2 * Math.PI / 5) - 2 * Math.PI / 10 >= 0 ? 1 / (Math.cos(2 * Math.PI / 10 - e) + 3.07768 * Math.sin(2 * Math.PI / 10 - e)) : 1 / (Math.cos(e) + 3.07768 * Math.sin(e))
							}
					}
					n.gridSize = Math.max(Math.floor(n.gridSize), 4);
					var l, s, f, h, d, g, m, p = n.gridSize, v = p - n.maskGapWidth, y = Math.abs(n.maxRotation - n.minRotation),
						w = Math.min(n.maxRotation, n.minRotation), x = n.rotationStep;
					switch (n.color) {
						case"random-dark":
							m = function () {
								return r(10, 50)
							};
							break;
						case"random-light":
							m = function () {
								return r(50, 90)
							};
							break;
						default:
							"function" == typeof n.color && (m = n.color)
					}
					var M = null;
					"function" == typeof n.classes && (M = n.classes);
					var b, S = !1, C = [], I = function (t) {
						var e, r, n = t.currentTarget, a = n.getBoundingClientRect();
						t.touches ? (e = t.touches[0].clientX, r = t.touches[0].clientY) : (e = t.clientX, r = t.clientY);
						var i = e - a.left, o = r - a.top, u = Math.floor(i * (n.width / a.width || 1) / p),
							c = Math.floor(o * (n.height / a.height || 1) / p);
						return C[u][c]
					}, T = function (t) {
						var e = I(t);
						if (b !== e) return b = e, e ? void n.hover(e.item, e.dimension, t) : void n.hover(void 0, void 0, t)
					}, N = function (t) {
						var e = I(t);
						e && (n.click(e.item, e.dimension, t), t.preventDefault())
					}, E = [], k = function (t) {
						if (E[t]) return E[t];
						var e = 8 * t, r = e, a = [];
						for (0 === t && a.push([h[0], h[1], 0]); r --;) {
							var i = 1;
							"circle" !== n.shape && (i = n.shape(r / e * 2 * Math.PI)), a.push([h[0] + t * i * Math.cos(- r / e * 2 * Math.PI), h[1] + t * i * Math.sin(- r / e * 2 * Math.PI) * n.ellipticity, r / e * 2 * Math.PI])
						}
						return E[t] = a, a
					}, A = function () {
						return n.abortThreshold > 0 && (new Date).getTime() - g > n.abortThreshold
					}, F = function () {
						return 0 === n.rotateRatio ? 0 : Math.random() > n.rotateRatio ? 0 : 0 === y ? w : w + Math.round(Math.random() * y / x) * x
					}, P = function (t, e, r) {
						var a = !1, i = n.weightFactor(e);
						if (i <= n.minSize) return !1;
						var u = 1;
						o > i && (u = function () {
							for (var t = 2; o > t * i;) t += 2;
							return t
						}());
						var c = document.createElement("canvas"), l = c.getContext("2d", {willReadFrequently: !0});
						l.font = n.fontWeight + " " + (i * u).toString(10) + "px " + n.fontFamily;
						var s = l.measureText(t).width / u,
							f = Math.max(i * u, l.measureText("m").width, l.measureText("锛�").width) / u, h = s + 2 * f, d = 3 * f,
							g = Math.ceil(h / p), m = Math.ceil(d / p);
						h = g * p, d = m * p;
						var v = - s / 2, y = .4 * - f, w = Math.ceil((h * Math.abs(Math.sin(r)) + d * Math.abs(Math.cos(r))) / p),
							x = Math.ceil((h * Math.abs(Math.cos(r)) + d * Math.abs(Math.sin(r))) / p), M = x * p, b = w * p;
						c.setAttribute("width", M), c.setAttribute("height", b), a && (document.body.appendChild(c), l.save()), l.scale(1 / u, 1 / u), l.translate(M * u / 2, b * u / 2), l.rotate(- r), l.font = n.fontWeight + " " + (i * u).toString(10) + "px " + n.fontFamily, l.fillStyle = "#000", l.textBaseline = "middle", l.fillText(t, v * u, (y + .5 * i) * u);
						var S = l.getImageData(0, 0, M, b).data;
						if (A()) return !1;
						a && (l.strokeRect(v * u, y, s * u, f * u), l.restore());
						for (var C, I, T, N = [], E = x, k = [w / 2, x / 2, w / 2, x / 2]; E --;) for (C = w; C --;) {
							T = p;
							t:{
								for (; T --;) for (I = p; I --;) if (S[4 * ((C * p + T) * M + (E * p + I)) + 3]) {
									N.push([E, C]), E < k[3] && (k[3] = E), E > k[1] && (k[1] = E), C < k[0] && (k[0] = C), C > k[2] && (k[2] = C), a && (l.fillStyle = "rgba(255, 0, 0, 0.5)", l.fillRect(E * p, C * p, p - .5, p - .5));
									break t
								}
								a && (l.fillStyle = "rgba(0, 0, 255, 0.5)", l.fillRect(E * p, C * p, p - .5, p - .5))
							}
						}
						return a && (l.fillStyle = "rgba(0, 255, 0, 0.5)", l.fillRect(k[3] * p, k[0] * p, (k[1] - k[3] + 1) * p, (k[2] - k[0] + 1) * p)), {
							mu: u,
							occupied: N,
							bounds: k,
							gw: x,
							gh: w,
							fillTextOffsetX: v,
							fillTextOffsetY: y,
							fillTextWidth: s,
							fillTextHeight: f,
							fontSize: i
						}
					}, R = function (t, e, r, a, i) {
						for (var o = i.length; o --;) {
							var u = t + i[o][0], c = e + i[o][1];
							if (u >= s || c >= f || 0 > u || 0 > c) {
								if ( !n.drawOutOfBound) return !1
							} else if ( !l[u][c]) return !1
						}
						return !0
					}, O = function (e, r, a, i, o, u, c, l, s) {
						var f, h = a.fontSize;
						f = m ? m(i, o, h, u, c) : n.color;
						var d;
						d = M ? M(i, o, h, u, c) : n.classes;
						var g, v = a.bounds;
						g = {
							x: (e + v[3]) * p,
							y: (r + v[0]) * p,
							w: (v[1] - v[3] + 1) * p,
							h: (v[2] - v[0] + 1) * p
						}, t.forEach(function (t) {
							if (t.getContext) {
								var o = t.getContext("2d"), u = a.mu;
								o.save(), o.scale(1 / u, 1 / u), o.font = n.fontWeight + " " + (h * u).toString(10) + "px " + n.fontFamily, o.fillStyle = f, o.translate((e + a.gw / 2) * p * u, (r + a.gh / 2) * p * u), 0 !== l && o.rotate(- l), o.textBaseline = "middle", o.fillText(i, a.fillTextOffsetX * u, (a.fillTextOffsetY + .5 * h) * u), o.restore()
							} else {
								var c = document.createElement("span"), g = "";
								g = "rotate(" + - l / Math.PI * 180 + "deg) ", 1 !== a.mu && (g += "translateX(-" + a.fillTextWidth / 4 + "px) scale(" + 1 / a.mu + ")");
								var m = {
									position: "absolute",
									display: "block",
									font: n.fontWeight + " " + h * a.mu + "px " + n.fontFamily,
									left: (e + a.gw / 2) * p + a.fillTextOffsetX + "px",
									top: (r + a.gh / 2) * p + a.fillTextOffsetY + "px",
									width: a.fillTextWidth + "px",
									height: a.fillTextHeight + "px",
									lineHeight: h + "px",
									whiteSpace: "nowrap",
									transform: g,
									webkitTransform: g,
									msTransform: g,
									transformOrigin: "50% 40%",
									webkitTransformOrigin: "50% 40%",
									msTransformOrigin: "50% 40%"
								};
								f && (m.color = f), c.textContent = i;
								for (var v in m) c.style[v] = m[v];
								if (s) for (var y in s) c.setAttribute(y, s[y]);
								d && (c.className += d), t.appendChild(c)
							}
						})
					}, z = function (e, r, n, a, i) {
						if ( !(e >= s || r >= f || 0 > e || 0 > r)) {
							if (l[e][r] = !1, n) {
								var o = t[0].getContext("2d");
								o.fillRect(e * p, r * p, v, v)
							}
							S && (C[e][r] = {item: i, dimension: a})
						}
					}, L = function (e, r, a, i, o, u) {
						var c, l = o.occupied, h = n.drawMask;
						h && (c = t[0].getContext("2d"), c.save(), c.fillStyle = n.maskColor);
						var d;
						if (S) {
							var g = o.bounds;
							d = {x: (e + g[3]) * p, y: (r + g[0]) * p, w: (g[1] - g[3] + 1) * p, h: (g[2] - g[0] + 1) * p}
						}
						for (var m = l.length; m --;) {
							var v = e + l[m][0], y = r + l[m][1];
							v >= s || y >= f || 0 > v || 0 > y || z(v, y, h, d, u)
						}
						h && c.restore()
					}, D = function (t) {
						var e, r, a;
						Array.isArray(t) ? (e = t[0], r = t[1]) : (e = t.word, r = t.weight, a = t.attributes);
						var i = F(), o = P(e, r, i);
						if ( !o) return !1;
						if (A()) return !1;
						if ( !n.drawOutOfBound) {
							var c = o.bounds;
							if (c[1] - c[3] + 1 > s || c[2] - c[0] + 1 > f) return !1
						}
						for (var l = d + 1, h = function (n) {
							var u = Math.floor(n[0] - o.gw / 2), c = Math.floor(n[1] - o.gh / 2), s = o.gw, f = o.gh;
							return R(u, c, s, f, o.occupied) ? (O(u, c, o, e, r, d - l, n[2], i, a), L(u, c, s, f, o, t), {
								gx: u,
								gy: c,
								rot: i,
								info: o
							}) : !1
						}; l --;) {
							var g = k(d - l);
							n.shuffle && (g = [].concat(g), u(g));
							for (var m = 0; m < g.length; m ++) {
								var p = h(g[m]);
								if (p) return p
							}
						}
						return null
					}, q = function (e, r, n) {
						return r ? !t.some(function (t) {
							var a = document.createEvent("CustomEvent");
							return a.initCustomEvent(e, !0, r, n || {}), !t.dispatchEvent(a)
						}, this) : void t.forEach(function (t) {
							var a = document.createEvent("CustomEvent");
							a.initCustomEvent(e, !0, r, n || {}), t.dispatchEvent(a)
						}, this)
					}, j = function () {
						var e = t[0];
						if (e.getContext) s = Math.ceil(e.width / p), f = Math.ceil(e.height / p); else {
							var r = e.getBoundingClientRect();
							s = Math.ceil(r.width / p), f = Math.ceil(r.height / p)
						}
						if (q("wordcloudstart", !0)) {
							h = n.origin ? [n.origin[0] / p, n.origin[1] / p] : [s / 2, f / 2], d = Math.floor(Math.sqrt(s * s + f * f)), l = [];
							var a, i, o;
							if ( !e.getContext || n.clearCanvas) for (t.forEach(function (t) {
								if (t.getContext) {
									var e = t.getContext("2d");
									e.fillStyle = n.backgroundColor, e.clearRect(0, 0, s * (p + 1), f * (p + 1)), e.fillRect(0, 0, s * (p + 1), f * (p + 1))
								} else t.textContent = "", t.style.backgroundColor = n.backgroundColor, t.style.position = "relative"
							}), a = s; a --;) for (l[a] = [], i = f; i --;) l[a][i] = !0; else {
								var u = document.createElement("canvas").getContext("2d");
								u.fillStyle = n.backgroundColor, u.fillRect(0, 0, 1, 1);
								var c = u.getImageData(0, 0, 1, 1).data, m = e.getContext("2d").getImageData(0, 0, s * p, f * p).data;
								a = s;
								for (var v, y; a --;) for (l[a] = [], i = f; i --;) {
									y = p;
									t:for (; y --;) for (v = p; v --;) for (o = 4; o --;) if (m[4 * ((i * p + y) * s * p + (a * p + v)) + o] !== c[o]) {
										l[a][i] = !1;
										break t
									}
									l[a][i] !== !1 && (l[a][i] = !0)
								}
								m = u = c = void 0
							}
							if (n.hover || n.click) {
								for (S = !0, a = s + 1; a --;) C[a] = [];
								n.hover && e.addEventListener("mousemove", T), n.click && (e.addEventListener("click", N), e.addEventListener("touchstart", N), e.addEventListener("touchend", function (t) {
									t.preventDefault()
								}), e.style.webkitTapHighlightColor = "rgba(0, 0, 0, 0)"), e.addEventListener("wordcloudstart", function F() {
									e.removeEventListener("wordcloudstart", F), e.removeEventListener("mousemove", T), e.removeEventListener("click", N), b = void 0
								})
							}
							o = 0;
							var w, x;
							0 !== n.wait ? (w = window.setTimeout, x = window.clearTimeout) : (w = window.setImmediate, x = window.clearImmediate);
							var M = function (e, r) {
								t.forEach(function (t) {
									t.addEventListener(e, r)
								}, this)
							}, I = function (e, r) {
								t.forEach(function (t) {
									t.removeEventListener(e, r)
								}, this)
							}, E = function P() {
								I("wordcloudstart", P), x(k)
							};
							M("wordcloudstart", E);
							var k = w(function R() {
								if (o >= n.list.length) return x(k), q("wordcloudstop", !1), void I("wordcloudstart", E);
								g = (new Date).getTime();
								var t = D(n.list[o]), e = !q("wordclouddrawn", !0, {item: n.list[o], drawn: t});
								return A() || e ? (x(k), n.abort(), q("wordcloudabort", !1), q("wordcloudstop", !1), void I("wordcloudstart", E)) : (o ++, void (k = w(R, n.wait)))
							}, n.wait)
						}
					};
					j()
				}
			};
			c.isSupported = i, c.minFontSize = o, n = [], a = function () {
				return c
			}.apply(e, n), !(void 0 !== a && (t.exports = a))
		}(this)
	}, function (t, e, r) {
		function n(t) {
			for (var e = t.getContext("2d"), r = e.getImageData(0, 0, t.width, t.height), n = e.createImageData(r), a = 0; a < r.data.length; a += 4) {
				var i = r.data[a] + r.data[a + 1] + r.data[a + 2], o = r.data[a + 3];
				128 > o || i > 384 ? (n.data[a] = 0, n.data[a + 1] = 0, n.data[a + 2] = 0, n.data[a + 3] = 0) : (n.data[a] = 255, n.data[a + 1] = 255, n.data[a + 2] = 255, n.data[a + 3] = 255)
			}
			e.putImageData(n, 0, 0)
		}
		
		var a = r(2), i = r(6);
		r(11), r(12);
		var o = r(13);
		if ( !o.isSupported) throw new Error("Sorry your browser not support wordCloud");
		a.registerLayout(function (t, e) {
			t.eachSeriesByType("wordCloud", function (r) {
				var u = i.getLayoutRect(r.getBoxLayoutParams(), {width: e.getWidth(), height: e.getHeight()}), c = r.getData(),
					l = document.createElement("canvas");
				l.width = u.width, l.height = u.height;
				var s = l.getContext("2d"), f = r.get("maskImage");
				if (f) try {
					s.drawImage(f, 0, 0, l.width, l.height), n(l)
				} catch (h) {
					console.error("Invalid mask image"), console.error(h.toString())
				}
				var d = r.get("sizeRange"), g = r.get("rotationRange"), m = c.getDataExtent("value"), p = Math.PI / 180,
					v = r.get("gridSize");
				o(l, {
					list: c.mapArray("value", function (t, e) {
						var r = c.getItemModel(e);
						return [c.getName(e), r.get("textStyle.normal.textSize", !0) || a.number.linearMap(t, m, d), e]
					}).sort(function (t, e) {
						return e[1] - t[1]
					}),
					fontFamily: r.get("textStyle.normal.fontFamily") || r.get("textStyle.emphasis.fontFamily") || t.get("textStyle.fontFamily"),
					fontWeight: r.get("textStyle.normal.fontWeight") || r.get("textStyle.emphasis.fontWeight") || t.get("textStyle.fontWeight"),
					gridSize: v,
					ellipticity: u.height / u.width,
					minRotation: g[0] * p,
					maxRotation: g[1] * p,
					clearCanvas: !f,
					rotateRatio: 1,
					rotationStep: r.get("rotationStep") * p,
					drawOutOfBound: !1,
					shuffle: !1,
					shape: r.get("shape")
				}), l.addEventListener("wordclouddrawn", function (t) {
					var e = t.detail.item;
					t.detail.drawn && r.layoutInstance.ondraw && (t.detail.drawn.gx += u.x / v, t.detail.drawn.gy += u.y / v, r.layoutInstance.ondraw(e[0], e[1], e[2], t.detail.drawn))
				}), r.layoutInstance = {ondraw: null}
			})
		})
	}])
});