/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
function boxScale() {
    var t = document.documentElement.clientWidth,
        e = boxHeight - t / boxWidth * boxHeight,
        i = t / boxWidth;
    $photoBox.css(boxWidth > t ? { "-webkit-transform": "scale(" + i + ")", "-ms-transform": "scale(" + i + ")", transform: "scale(" + i + ")", "-webkit-transform-origin": "0 0", "-ms-transform-origin": "0 0", transformOrigin: "0 0", marginBottom: -e + "px" } : { "-webkit-transform": "scale(1)", "-ms-transform": "scale(1)", transform: "scale(1)", marginBottom: "0px" }) }
if (! function(t, e) { "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t) } : e(t) }("undefined" != typeof window ? window : this, function(t, e) {
        function i(t) {
            var e = t.length,
                i = J.type(t);
            return "function" === i || J.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t }

        function n(t, e, i) {
            if (J.isFunction(e)) return J.grep(t, function(t, n) {
                return !!e.call(t, n, t) !== i });
            if (e.nodeType) return J.grep(t, function(t) {
                return t === e !== i });
            if ("string" == typeof e) {
                if (oe.test(e)) return J.filter(e, t, i);
                e = J.filter(e, t) }
            return J.grep(t, function(t) {
                return U.call(e, t) >= 0 !== i }) }

        function s(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t }

        function r(t) {
            var e = pe[t] = {};
            return J.each(t.match(fe) || [], function(t, i) { e[i] = !0 }), e }

        function a() { K.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1), J.ready() }

        function o() { Object.defineProperty(this.cache = {}, 0, { get: function() {
                    return {} } }), this.expando = J.expando + Math.random() }

        function l(t, e, i) {
            var n;
            if (void 0 === i && 1 === t.nodeType)
                if (n = "data-" + e.replace(be, "-$1").toLowerCase(), i = t.getAttribute(n), "string" == typeof i) {
                    try { i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : ye.test(i) ? J.parseJSON(i) : i } catch (s) {}
                    _e.set(t, e, i) } else i = void 0;
            return i }

        function u() {
            return !0 }

        function c() {
            return !1 }

        function h() {
            try {
                return K.activeElement } catch (t) {} }

        function d(t, e) {
            return J.nodeName(t, "table") && J.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t }

        function f(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t }

        function p(t) {
            var e = Pe.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t }

        function g(t, e) {
            for (var i = 0, n = t.length; n > i; i++) ve.set(t[i], "globalEval", !e || ve.get(e[i], "globalEval")) }

        function m(t, e) {
            var i, n, s, r, a, o, l, u;
            if (1 === e.nodeType) {
                if (ve.hasData(t) && (r = ve.access(t), a = ve.set(e, r), u = r.events)) { delete a.handle, a.events = {};
                    for (s in u)
                        for (i = 0, n = u[s].length; n > i; i++) J.event.add(e, s, u[s][i]) }
                _e.hasData(t) && (o = _e.access(t), l = J.extend({}, o), _e.set(e, l)) } }

        function v(t, e) {
            var i = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && J.nodeName(t, e) ? J.merge([t], i) : i }

        function _(t, e) {
            var i = e.nodeName.toLowerCase(); "input" === i && Ce.test(t.type) ? e.checked = t.checked : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue) }

        function y(e, i) {
            var n, s = J(i.createElement(e)).appendTo(i.body),
                r = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(s[0])) ? n.display : J.css(s[0], "display");
            return s.detach(), r }

        function b(t) {
            var e = K,
                i = Fe[t];
            return i || (i = y(t, e), "none" !== i && i || (qe = (qe || J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = qe[0].contentDocument, e.write(), e.close(), i = y(t, e), qe.detach()), Fe[t] = i), i }

        function x(t, e, i) {
            var n, s, r, a, o = t.style;
            return i = i || We(t), i && (a = i.getPropertyValue(e) || i[e]), i && ("" !== a || J.contains(t.ownerDocument, t) || (a = J.style(t, e)), Re.test(a) && ze.test(e) && (n = o.width, s = o.minWidth, r = o.maxWidth, o.minWidth = o.maxWidth = o.width = a, a = i.width, o.width = n, o.minWidth = s, o.maxWidth = r)), void 0 !== a ? a + "" : a }

        function k(t, e) {
            return { get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments) } } }

        function w(t, e) {
            if (e in t) return e;
            for (var i = e[0].toUpperCase() + e.slice(1), n = e, s = Ye.length; s--;)
                if (e = Ye[s] + i, e in t) return e;
            return n }

        function C(t, e, i) {
            var n = Qe.exec(e);
            return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e }

        function T(t, e, i, n, s) {
            for (var r = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > r; r += 2) "margin" === i && (a += J.css(t, i + ke[r], !0, s)), n ? ("content" === i && (a -= J.css(t, "padding" + ke[r], !0, s)), "margin" !== i && (a -= J.css(t, "border" + ke[r] + "Width", !0, s))) : (a += J.css(t, "padding" + ke[r], !0, s), "padding" !== i && (a += J.css(t, "border" + ke[r] + "Width", !0, s)));
            return a }

        function S(t, e, i) {
            var n = !0,
                s = "width" === e ? t.offsetWidth : t.offsetHeight,
                r = We(t),
                a = "border-box" === J.css(t, "boxSizing", !1, r);
            if (0 >= s || null == s) {
                if (s = x(t, e, r), (0 > s || null == s) && (s = t.style[e]), Re.test(s)) return s;
                n = a && (G.boxSizingReliable() || s === t.style[e]), s = parseFloat(s) || 0 }
            return s + T(t, e, i || (a ? "border" : "content"), n, r) + "px" }

        function B(t, e) {
            for (var i, n, s, r = [], a = 0, o = t.length; o > a; a++) n = t[a], n.style && (r[a] = ve.get(n, "olddisplay"), i = n.style.display, e ? (r[a] || "none" !== i || (n.style.display = ""), "" === n.style.display && we(n) && (r[a] = ve.access(n, "olddisplay", b(n.nodeName)))) : (s = we(n), "none" === i && s || ve.set(n, "olddisplay", s ? i : J.css(n, "display"))));
            for (a = 0; o > a; a++) n = t[a], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? r[a] || "" : "none"));
            return t }

        function I(t, e, i, n, s) {
            return new I.prototype.init(t, e, i, n, s) }

        function O() {
            return setTimeout(function() { Ge = void 0 }), Ge = J.now() }

        function E(t, e) {
            var i, n = 0,
                s = { height: t };
            for (e = e ? 1 : 0; 4 > n; n += 2 - e) i = ke[n], s["margin" + i] = s["padding" + i] = t;
            return e && (s.opacity = s.width = t), s }

        function A(t, e, i) {
            for (var n, s = (ii[e] || []).concat(ii["*"]), r = 0, a = s.length; a > r; r++)
                if (n = s[r].call(i, e, t)) return n }

        function M(t, e, i) {
            var n, s, r, a, o, l, u, c, h = this,
                d = {},
                f = t.style,
                p = t.nodeType && we(t),
                g = ve.get(t, "fxshow");
            i.queue || (o = J._queueHooks(t, "fx"), null == o.unqueued && (o.unqueued = 0, l = o.empty.fire, o.empty.fire = function() { o.unqueued || l() }), o.unqueued++, h.always(function() { h.always(function() { o.unqueued--, J.queue(t, "fx").length || o.empty.fire() }) })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [f.overflow, f.overflowX, f.overflowY], u = J.css(t, "display"), c = "none" === u ? ve.get(t, "olddisplay") || b(t.nodeName) : u, "inline" === c && "none" === J.css(t, "float") && (f.display = "inline-block")), i.overflow && (f.overflow = "hidden", h.always(function() { f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2] }));
            for (n in e)
                if (s = e[n], Ze.exec(s)) {
                    if (delete e[n], r = r || "toggle" === s, s === (p ? "hide" : "show")) {
                        if ("show" !== s || !g || void 0 === g[n]) continue;
                        p = !0 }
                    d[n] = g && g[n] || J.style(t, n) } else u = void 0;
            if (J.isEmptyObject(d)) "inline" === ("none" === u ? b(t.nodeName) : u) && (f.display = u);
            else { g ? "hidden" in g && (p = g.hidden) : g = ve.access(t, "fxshow", {}), r && (g.hidden = !p), p ? J(t).show() : h.done(function() { J(t).hide() }), h.done(function() {
                    var e;
                    ve.remove(t, "fxshow");
                    for (e in d) J.style(t, e, d[e]) });
                for (n in d) a = A(p ? g[n] : 0, n, h), n in g || (g[n] = a.start, p && (a.end = a.start, a.start = "width" === n || "height" === n ? 1 : 0)) } }

        function N(t, e) {
            var i, n, s, r, a;
            for (i in t)
                if (n = J.camelCase(i), s = e[n], r = t[i], J.isArray(r) && (s = r[1], r = t[i] = r[0]), i !== n && (t[n] = r, delete t[i]), a = J.cssHooks[n], a && "expand" in a) { r = a.expand(r), delete t[n];
                    for (i in r) i in t || (t[i] = r[i], e[i] = s) } else e[n] = s }

        function j(t, e, i) {
            var n, s, r = 0,
                a = ei.length,
                o = J.Deferred().always(function() { delete l.elem }),
                l = function() {
                    if (s) return !1;
                    for (var e = Ge || O(), i = Math.max(0, u.startTime + u.duration - e), n = i / u.duration || 0, r = 1 - n, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(r);
                    return o.notifyWith(t, [u, r, i]), 1 > r && l ? i : (o.resolveWith(t, [u]), !1) },
                u = o.promise({ elem: t, props: J.extend({}, e), opts: J.extend(!0, { specialEasing: {} }, i), originalProperties: e, originalOptions: i, startTime: Ge || O(), duration: i.duration, tweens: [], createTween: function(e, i) {
                        var n = J.Tween(t, u.opts, e, i, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(n), n }, stop: function(e) {
                        var i = 0,
                            n = e ? u.tweens.length : 0;
                        if (s) return this;
                        for (s = !0; n > i; i++) u.tweens[i].run(1);
                        return e ? o.resolveWith(t, [u, e]) : o.rejectWith(t, [u, e]), this } }),
                c = u.props;
            for (N(c, u.opts.specialEasing); a > r; r++)
                if (n = ei[r].call(u, t, c, u.opts)) return n;
            return J.map(c, A, u), J.isFunction(u.opts.start) && u.opts.start.call(t, u), J.fx.timer(J.extend(l, { elem: t, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always) }

        function L(t) {
            return function(e, i) { "string" != typeof e && (i = e, e = "*");
                var n, s = 0,
                    r = e.toLowerCase().match(fe) || [];
                if (J.isFunction(i))
                    for (; n = r[s++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i) } }

        function P(t, e, i, n) {
            function s(o) {
                var l;
                return r[o] = !0, J.each(t[o] || [], function(t, o) {
                    var u = o(e, i, n);
                    return "string" != typeof u || a || r[u] ? a ? !(l = u) : void 0 : (e.dataTypes.unshift(u), s(u), !1) }), l }
            var r = {},
                a = t === xi;
            return s(e.dataTypes[0]) || !r["*"] && s("*") }

        function D(t, e) {
            var i, n, s = J.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
            return n && J.extend(!0, t, n), t }

        function H(t, e, i) {
            for (var n, s, r, a, o = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
            if (n)
                for (s in o)
                    if (o[s] && o[s].test(n)) { l.unshift(s);
                        break }
            if (l[0] in i) r = l[0];
            else {
                for (s in i) {
                    if (!l[0] || t.converters[s + " " + l[0]]) { r = s;
                        break }
                    a || (a = s) }
                r = r || a }
            return r ? (r !== l[0] && l.unshift(r), i[r]) : void 0 }

        function q(t, e, i, n) {
            var s, r, a, o, l, u = {},
                c = t.dataTypes.slice();
            if (c[1])
                for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
            for (r = c.shift(); r;)
                if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift())
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                if (a = u[l + " " + r] || u["* " + r], !a)
                    for (s in u)
                        if (o = s.split(" "), o[1] === r && (a = u[l + " " + o[0]] || u["* " + o[0]])) { a === !0 ? a = u[s] : u[s] !== !0 && (r = o[0], c.unshift(o[1]));
                            break }
                if (a !== !0)
                    if (a && t["throws"]) e = a(e);
                    else try { e = a(e) } catch (h) {
                        return { state: "parsererror", error: a ? h : "No conversion from " + l + " to " + r } } }
            return { state: "success", data: e } }

        function F(t, e, i, n) {
            var s;
            if (J.isArray(e)) J.each(e, function(e, s) { i || Ti.test(t) ? n(t, s) : F(t + "[" + ("object" == typeof s ? e : "") + "]", s, i, n) });
            else if (i || "object" !== J.type(e)) n(t, e);
            else
                for (s in e) F(t + "[" + s + "]", e[s], i, n) }

        function z(t) {
            return J.isWindow(t) ? t : 9 === t.nodeType && t.defaultView }
        var R = [],
            W = R.slice,
            $ = R.concat,
            Q = R.push,
            U = R.indexOf,
            X = {},
            V = X.toString,
            Y = X.hasOwnProperty,
            G = {},
            K = t.document,
            Z = "2.1.1",
            J = function(t, e) {
                return new J.fn.init(t, e) },
            te = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ee = /^-ms-/,
            ie = /-([\da-z])/gi,
            ne = function(t, e) {
                return e.toUpperCase() };
        J.fn = J.prototype = { jquery: Z, constructor: J, selector: "", length: 0, toArray: function() {
                return W.call(this) }, get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : W.call(this) }, pushStack: function(t) {
                var e = J.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e }, each: function(t, e) {
                return J.each(this, t, e) }, map: function(t) {
                return this.pushStack(J.map(this, function(e, i) {
                    return t.call(e, i, e) })) }, slice: function() {
                return this.pushStack(W.apply(this, arguments)) }, first: function() {
                return this.eq(0) }, last: function() {
                return this.eq(-1) }, eq: function(t) {
                var e = this.length,
                    i = +t + (0 > t ? e : 0);
                return this.pushStack(i >= 0 && e > i ? [this[i]] : []) }, end: function() {
                return this.prevObject || this.constructor(null) }, push: Q, sort: R.sort, splice: R.splice }, J.extend = J.fn.extend = function() {
            var t, e, i, n, s, r, a = arguments[0] || {},
                o = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof a && (u = a, a = arguments[o] || {}, o++), "object" == typeof a || J.isFunction(a) || (a = {}), o === l && (a = this, o--); l > o; o++)
                if (null != (t = arguments[o]))
                    for (e in t) i = a[e], n = t[e], a !== n && (u && n && (J.isPlainObject(n) || (s = J.isArray(n))) ? (s ? (s = !1, r = i && J.isArray(i) ? i : []) : r = i && J.isPlainObject(i) ? i : {}, a[e] = J.extend(u, r, n)) : void 0 !== n && (a[e] = n));
            return a }, J.extend({ expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(t) {
                throw new Error(t) }, noop: function() {}, isFunction: function(t) {
                return "function" === J.type(t) }, isArray: Array.isArray, isWindow: function(t) {
                return null != t && t === t.window }, isNumeric: function(t) {
                return !J.isArray(t) && t - parseFloat(t) >= 0 }, isPlainObject: function(t) {
                return "object" !== J.type(t) || t.nodeType || J.isWindow(t) ? !1 : t.constructor && !Y.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0 }, isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0 }, type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? X[V.call(t)] || "object" : typeof t }, globalEval: function(t) {
                var e, i = eval;
                t = J.trim(t), t && (1 === t.indexOf("use strict") ? (e = K.createElement("script"), e.text = t, K.head.appendChild(e).parentNode.removeChild(e)) : i(t)) }, camelCase: function(t) {
                return t.replace(ee, "ms-").replace(ie, ne) }, nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase() }, each: function(t, e, n) {
                var s, r = 0,
                    a = t.length,
                    o = i(t);
                if (n) {
                    if (o)
                        for (; a > r && (s = e.apply(t[r], n), s !== !1); r++);
                    else
                        for (r in t)
                            if (s = e.apply(t[r], n), s === !1) break } else if (o)
                    for (; a > r && (s = e.call(t[r], r, t[r]), s !== !1); r++);
                else
                    for (r in t)
                        if (s = e.call(t[r], r, t[r]), s === !1) break; return t }, trim: function(t) {
                return null == t ? "" : (t + "").replace(te, "") }, makeArray: function(t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? J.merge(n, "string" == typeof t ? [t] : t) : Q.call(n, t)), n }, inArray: function(t, e, i) {
                return null == e ? -1 : U.call(e, t, i) }, merge: function(t, e) {
                for (var i = +e.length, n = 0, s = t.length; i > n; n++) t[s++] = e[n];
                return t.length = s, t }, grep: function(t, e, i) {
                for (var n, s = [], r = 0, a = t.length, o = !i; a > r; r++) n = !e(t[r], r), n !== o && s.push(t[r]);
                return s }, map: function(t, e, n) {
                var s, r = 0,
                    a = t.length,
                    o = i(t),
                    l = [];
                if (o)
                    for (; a > r; r++) s = e(t[r], r, n), null != s && l.push(s);
                else
                    for (r in t) s = e(t[r], r, n), null != s && l.push(s);
                return $.apply([], l) }, guid: 1, proxy: function(t, e) {
                var i, n, s;
                return "string" == typeof e && (i = t[e], e = t, t = i), J.isFunction(t) ? (n = W.call(arguments, 2), s = function() {
                    return t.apply(e || this, n.concat(W.call(arguments))) }, s.guid = t.guid = t.guid || J.guid++, s) : void 0 }, now: Date.now, support: G }), J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) { X["[object " + e + "]"] = e.toLowerCase() });
        var se = function(t) {
            function e(t, e, i, n) {
                var s, r, a, o, l, u, h, f, p, g;
                if ((e ? e.ownerDocument || e : F) !== M && A(e), e = e || M, i = i || [], !t || "string" != typeof t) return i;
                if (1 !== (o = e.nodeType) && 9 !== o) return [];
                if (j && !n) {
                    if (s = _e.exec(t))
                        if (a = s[1]) {
                            if (9 === o) {
                                if (r = e.getElementById(a), !r || !r.parentNode) return i;
                                if (r.id === a) return i.push(r), i } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(a)) && H(e, r) && r.id === a) return i.push(r), i } else {
                            if (s[2]) return J.apply(i, e.getElementsByTagName(t)), i;
                            if ((a = s[3]) && x.getElementsByClassName && e.getElementsByClassName) return J.apply(i, e.getElementsByClassName(a)), i }
                    if (x.qsa && (!L || !L.test(t))) {
                        if (f = h = q, p = e, g = 9 === o && t, 1 === o && "object" !== e.nodeName.toLowerCase()) {
                            for (u = T(t), (h = e.getAttribute("id")) ? f = h.replace(be, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;) u[l] = f + d(u[l]);
                            p = ye.test(t) && c(e.parentNode) || e, g = u.join(",") }
                        if (g) try {
                            return J.apply(i, p.querySelectorAll(g)), i } catch (m) {} finally { h || e.removeAttribute("id") } } }
                return B(t.replace(le, "$1"), e, i, n) }

            function i() {
                function t(i, n) {
                    return e.push(i + " ") > k.cacheLength && delete t[e.shift()], t[i + " "] = n }
                var e = [];
                return t }

            function n(t) {
                return t[q] = !0, t }

            function s(t) {
                var e = M.createElement("div");
                try {
                    return !!t(e) } catch (i) {
                    return !1 } finally { e.parentNode && e.parentNode.removeChild(e), e = null } }

            function r(t, e) {
                for (var i = t.split("|"), n = t.length; n--;) k.attrHandle[i[n]] = e }

            function a(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1 }

            function o(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return "input" === i && e.type === t } }

            function l(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t } }

            function u(t) {
                return n(function(e) {
                    return e = +e, n(function(i, n) {
                        for (var s, r = t([], i.length, e), a = r.length; a--;) i[s = r[a]] && (i[s] = !(n[s] = i[s])) }) }) }

            function c(t) {
                return t && typeof t.getElementsByTagName !== X && t }

            function h() {}

            function d(t) {
                for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
                return n }

            function f(t, e, i) {
                var n = e.dir,
                    s = i && "parentNode" === n,
                    r = R++;
                return e.first ? function(e, i, r) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || s) return t(e, i, r) } : function(e, i, a) {
                    var o, l, u = [z, r];
                    if (a) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || s) && t(e, i, a)) return !0 } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || s) {
                                if (l = e[q] || (e[q] = {}), (o = l[n]) && o[0] === z && o[1] === r) return u[2] = o[2];
                                if (l[n] = u, u[2] = t(e, i, a)) return !0 } } }

            function p(t) {
                return t.length > 1 ? function(e, i, n) {
                    for (var s = t.length; s--;)
                        if (!t[s](e, i, n)) return !1;
                    return !0 } : t[0] }

            function g(t, i, n) {
                for (var s = 0, r = i.length; r > s; s++) e(t, i[s], n);
                return n }

            function m(t, e, i, n, s) {
                for (var r, a = [], o = 0, l = t.length, u = null != e; l > o; o++)(r = t[o]) && (!i || i(r, n, s)) && (a.push(r), u && e.push(o));
                return a }

            function v(t, e, i, s, r, a) {
                return s && !s[q] && (s = v(s)), r && !r[q] && (r = v(r, a)), n(function(n, a, o, l) {
                    var u, c, h, d = [],
                        f = [],
                        p = a.length,
                        v = n || g(e || "*", o.nodeType ? [o] : o, []),
                        _ = !t || !n && e ? v : m(v, d, t, o, l),
                        y = i ? r || (n ? t : p || s) ? [] : a : _;
                    if (i && i(_, y, o, l), s)
                        for (u = m(y, f), s(u, [], o, l), c = u.length; c--;)(h = u[c]) && (y[f[c]] = !(_[f[c]] = h));
                    if (n) {
                        if (r || t) {
                            if (r) {
                                for (u = [], c = y.length; c--;)(h = y[c]) && u.push(_[c] = h);
                                r(null, y = [], u, l) }
                            for (c = y.length; c--;)(h = y[c]) && (u = r ? ee.call(n, h) : d[c]) > -1 && (n[u] = !(a[u] = h)) } } else y = m(y === a ? y.splice(p, y.length) : y), r ? r(null, a, y, l) : J.apply(a, y) }) }

            function _(t) {
                for (var e, i, n, s = t.length, r = k.relative[t[0].type], a = r || k.relative[" "], o = r ? 1 : 0, l = f(function(t) {
                        return t === e }, a, !0), u = f(function(t) {
                        return ee.call(e, t) > -1 }, a, !0), c = [function(t, i, n) {
                        return !r && (n || i !== I) || ((e = i).nodeType ? l(t, i, n) : u(t, i, n)) }]; s > o; o++)
                    if (i = k.relative[t[o].type]) c = [f(p(c), i)];
                    else {
                        if (i = k.filter[t[o].type].apply(null, t[o].matches), i[q]) {
                            for (n = ++o; s > n && !k.relative[t[n].type]; n++);
                            return v(o > 1 && p(c), o > 1 && d(t.slice(0, o - 1).concat({ value: " " === t[o - 2].type ? "*" : "" })).replace(le, "$1"), i, n > o && _(t.slice(o, n)), s > n && _(t = t.slice(n)), s > n && d(t)) }
                        c.push(i) }
                return p(c) }

            function y(t, i) {
                var s = i.length > 0,
                    r = t.length > 0,
                    a = function(n, a, o, l, u) {
                        var c, h, d, f = 0,
                            p = "0",
                            g = n && [],
                            v = [],
                            _ = I,
                            y = n || r && k.find.TAG("*", u),
                            b = z += null == _ ? 1 : Math.random() || .1,
                            x = y.length;
                        for (u && (I = a !== M && a); p !== x && null != (c = y[p]); p++) {
                            if (r && c) {
                                for (h = 0; d = t[h++];)
                                    if (d(c, a, o)) { l.push(c);
                                        break }
                                u && (z = b) }
                            s && ((c = !d && c) && f--, n && g.push(c)) }
                        if (f += p, s && p !== f) {
                            for (h = 0; d = i[h++];) d(g, v, a, o);
                            if (n) {
                                if (f > 0)
                                    for (; p--;) g[p] || v[p] || (v[p] = K.call(l));
                                v = m(v) }
                            J.apply(l, v), u && !n && v.length > 0 && f + i.length > 1 && e.uniqueSort(l) }
                        return u && (z = b, I = _), g };
                return s ? n(a) : a }
            var b, x, k, w, C, T, S, B, I, O, E, A, M, N, j, L, P, D, H, q = "sizzle" + -new Date,
                F = t.document,
                z = 0,
                R = 0,
                W = i(),
                $ = i(),
                Q = i(),
                U = function(t, e) {
                    return t === e && (E = !0), 0 },
                X = "undefined",
                V = 1 << 31,
                Y = {}.hasOwnProperty,
                G = [],
                K = G.pop,
                Z = G.push,
                J = G.push,
                te = G.slice,
                ee = G.indexOf || function(t) {
                    for (var e = 0, i = this.length; i > e; e++)
                        if (this[e] === t) return e;
                    return -1 },
                ie = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                se = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                re = se.replace("w", "w#"),
                ae = "\\[" + ne + "*(" + se + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
                oe = ":(" + se + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)",
                le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                ue = new RegExp("^" + ne + "*," + ne + "*"),
                ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                he = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                de = new RegExp(oe),
                fe = new RegExp("^" + re + "$"),
                pe = { ID: new RegExp("^#(" + se + ")"), CLASS: new RegExp("^\\.(" + se + ")"), TAG: new RegExp("^(" + se.replace("w", "w*") + ")"), ATTR: new RegExp("^" + ae), PSEUDO: new RegExp("^" + oe), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"), bool: new RegExp("^(?:" + ie + ")$", "i"), needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i") },
                ge = /^(?:input|select|textarea|button)$/i,
                me = /^h\d$/i,
                ve = /^[^{]+\{\s*\[native \w/,
                _e = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ye = /[+~]/,
                be = /'|\\/g,
                xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                ke = function(t, e, i) {
                    var n = "0x" + e - 65536;
                    return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320) };
            try { J.apply(G = te.call(F.childNodes), F.childNodes), G[F.childNodes.length].nodeType } catch (we) { J = { apply: G.length ? function(t, e) { Z.apply(t, te.call(e)) } : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1 } } }
            x = e.support = {}, C = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1 }, A = e.setDocument = function(t) {
                var e, i = t ? t.ownerDocument || t : F,
                    n = i.defaultView;
                return i !== M && 9 === i.nodeType && i.documentElement ? (M = i, N = i.documentElement, j = !C(i), n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", function() { A() }, !1) : n.attachEvent && n.attachEvent("onunload", function() { A() })), x.attributes = s(function(t) {
                    return t.className = "i", !t.getAttribute("className") }), x.getElementsByTagName = s(function(t) {
                    return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length }), x.getElementsByClassName = ve.test(i.getElementsByClassName) && s(function(t) {
                    return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length }), x.getById = s(function(t) {
                    return N.appendChild(t).id = q, !i.getElementsByName || !i.getElementsByName(q).length }), x.getById ? (k.find.ID = function(t, e) {
                    if (typeof e.getElementById !== X && j) {
                        var i = e.getElementById(t);
                        return i && i.parentNode ? [i] : [] } }, k.filter.ID = function(t) {
                    var e = t.replace(xe, ke);
                    return function(t) {
                        return t.getAttribute("id") === e } }) : (delete k.find.ID, k.filter.ID = function(t) {
                    var e = t.replace(xe, ke);
                    return function(t) {
                        var i = typeof t.getAttributeNode !== X && t.getAttributeNode("id");
                        return i && i.value === e } }), k.find.TAG = x.getElementsByTagName ? function(t, e) {
                    return typeof e.getElementsByTagName !== X ? e.getElementsByTagName(t) : void 0 } : function(t, e) {
                    var i, n = [],
                        s = 0,
                        r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = r[s++];) 1 === i.nodeType && n.push(i);
                        return n }
                    return r }, k.find.CLASS = x.getElementsByClassName && function(t, e) {
                    return typeof e.getElementsByClassName !== X && j ? e.getElementsByClassName(t) : void 0 }, P = [], L = [], (x.qsa = ve.test(i.querySelectorAll)) && (s(function(t) { t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && L.push("[*^$]=" + ne + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || L.push("\\[" + ne + "*(?:value|" + ie + ")"), t.querySelectorAll(":checked").length || L.push(":checked") }), s(function(t) {
                    var e = i.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && L.push("name" + ne + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), L.push(",.*:") })), (x.matchesSelector = ve.test(D = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && s(function(t) { x.disconnectedMatch = D.call(t, "div"), D.call(t, "[s!='']:x"), P.push("!=", oe) }), L = L.length && new RegExp(L.join("|")), P = P.length && new RegExp(P.join("|")), e = ve.test(N.compareDocumentPosition), H = e || ve.test(N.contains) ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n))) } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1 }, U = e ? function(t, e) {
                    if (t === e) return E = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === F && H(F, t) ? -1 : e === i || e.ownerDocument === F && H(F, e) ? 1 : O ? ee.call(O, t) - ee.call(O, e) : 0 : 4 & n ? -1 : 1) } : function(t, e) {
                    if (t === e) return E = !0, 0;
                    var n, s = 0,
                        r = t.parentNode,
                        o = e.parentNode,
                        l = [t],
                        u = [e];
                    if (!r || !o) return t === i ? -1 : e === i ? 1 : r ? -1 : o ? 1 : O ? ee.call(O, t) - ee.call(O, e) : 0;
                    if (r === o) return a(t, e);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (n = e; n = n.parentNode;) u.unshift(n);
                    for (; l[s] === u[s];) s++;
                    return s ? a(l[s], u[s]) : l[s] === F ? -1 : u[s] === F ? 1 : 0 }, i) : M }, e.matches = function(t, i) {
                return e(t, null, null, i) }, e.matchesSelector = function(t, i) {
                if ((t.ownerDocument || t) !== M && A(t), i = i.replace(he, "='$1']"), !(!x.matchesSelector || !j || P && P.test(i) || L && L.test(i))) try {
                    var n = D.call(t, i);
                    if (n || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n } catch (s) {}
                return e(i, M, null, [t]).length > 0 }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== M && A(t), H(t, e) }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== M && A(t);
                var i = k.attrHandle[e.toLowerCase()],
                    n = i && Y.call(k.attrHandle, e.toLowerCase()) ? i(t, e, !j) : void 0;
                return void 0 !== n ? n : x.attributes || !j ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t) }, e.uniqueSort = function(t) {
                var e, i = [],
                    n = 0,
                    s = 0;
                if (E = !x.detectDuplicates, O = !x.sortStable && t.slice(0), t.sort(U), E) {
                    for (; e = t[s++];) e === t[s] && (n = i.push(s));
                    for (; n--;) t.splice(i[n], 1) }
                return O = null, t }, w = e.getText = function(t) {
                var e, i = "",
                    n = 0,
                    s = t.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += w(t) } else if (3 === s || 4 === s) return t.nodeValue } else
                    for (; e = t[n++];) i += w(e);
                return i }, k = e.selectors = { cacheLength: 50, createPseudo: n, match: pe, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(t) {
                        return t[1] = t[1].replace(xe, ke), t[3] = (t[3] || t[4] || t[5] || "").replace(xe, ke), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4) }, CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t }, PSEUDO: function(t) {
                        var e, i = !t[6] && t[2];
                        return pe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && de.test(i) && (e = T(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3)) } }, filter: { TAG: function(t) {
                        var e = t.replace(xe, ke).toLowerCase();
                        return "*" === t ? function() {
                            return !0 } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e } }, CLASS: function(t) {
                        var e = W[t + " "];
                        return e || (e = new RegExp("(^|" + ne + ")" + t + "(" + ne + "|$)")) && W(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== X && t.getAttribute("class") || "") }) }, ATTR: function(t, i, n) {
                        return function(s) {
                            var r = e.attr(s, t);
                            return null == r ? "!=" === i : i ? (r += "", "=" === i ? r === n : "!=" === i ? r !== n : "^=" === i ? n && 0 === r.indexOf(n) : "*=" === i ? n && r.indexOf(n) > -1 : "$=" === i ? n && r.slice(-n.length) === n : "~=" === i ? (" " + r + " ").indexOf(n) > -1 : "|=" === i ? r === n || r.slice(0, n.length + 1) === n + "-" : !1) : !0 } }, CHILD: function(t, e, i, n, s) {
                        var r = "nth" !== t.slice(0, 3),
                            a = "last" !== t.slice(-4),
                            o = "of-type" === e;
                        return 1 === n && 0 === s ? function(t) {
                            return !!t.parentNode } : function(e, i, l) {
                            var u, c, h, d, f, p, g = r !== a ? "nextSibling" : "previousSibling",
                                m = e.parentNode,
                                v = o && e.nodeName.toLowerCase(),
                                _ = !l && !o;
                            if (m) {
                                if (r) {
                                    for (; g;) {
                                        for (h = e; h = h[g];)
                                            if (o ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                        p = g = "only" === t && !p && "nextSibling" }
                                    return !0 }
                                if (p = [a ? m.firstChild : m.lastChild], a && _) {
                                    for (c = m[q] || (m[q] = {}), u = c[t] || [], f = u[0] === z && u[1], d = u[0] === z && u[2], h = f && m.childNodes[f]; h = ++f && h && h[g] || (d = f = 0) || p.pop();)
                                        if (1 === h.nodeType && ++d && h === e) { c[t] = [z, f, d];
                                            break } } else if (_ && (u = (e[q] || (e[q] = {}))[t]) && u[0] === z) d = u[1];
                                else
                                    for (;
                                        (h = ++f && h && h[g] || (d = f = 0) || p.pop()) && ((o ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++d || (_ && ((h[q] || (h[q] = {}))[t] = [z, d]), h !== e)););
                                return d -= s, d === n || d % n === 0 && d / n >= 0 } } }, PSEUDO: function(t, i) {
                        var s, r = k.pseudos[t] || k.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return r[q] ? r(i) : r.length > 1 ? (s = [t, t, "", i], k.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                            for (var n, s = r(t, i), a = s.length; a--;) n = ee.call(t, s[a]), t[n] = !(e[n] = s[a]) }) : function(t) {
                            return r(t, 0, s) }) : r } }, pseudos: { not: n(function(t) {
                        var e = [],
                            i = [],
                            s = S(t.replace(le, "$1"));
                        return s[q] ? n(function(t, e, i, n) {
                            for (var r, a = s(t, null, n, []), o = t.length; o--;)(r = a[o]) && (t[o] = !(e[o] = r)) }) : function(t, n, r) {
                            return e[0] = t, s(e, null, r, i), !i.pop() } }), has: n(function(t) {
                        return function(i) {
                            return e(t, i).length > 0 } }), contains: n(function(t) {
                        return function(e) {
                            return (e.textContent || e.innerText || w(e)).indexOf(t) > -1 } }), lang: n(function(t) {
                        return fe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xe, ke).toLowerCase(),
                            function(e) {
                                var i;
                                do
                                    if (i = j ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1 } }), target: function(e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id }, root: function(t) {
                        return t === N }, focus: function(t) {
                        return t === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(t.type || t.href || ~t.tabIndex) }, enabled: function(t) {
                        return t.disabled === !1 }, disabled: function(t) {
                        return t.disabled === !0 }, checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected }, selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0 }, empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0 }, parent: function(t) {
                        return !k.pseudos.empty(t) }, header: function(t) {
                        return me.test(t.nodeName) }, input: function(t) {
                        return ge.test(t.nodeName) }, button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e }, text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase()) }, first: u(function() {
                        return [0] }), last: u(function(t, e) {
                        return [e - 1] }), eq: u(function(t, e, i) {
                        return [0 > i ? i + e : i] }), even: u(function(t, e) {
                        for (var i = 0; e > i; i += 2) t.push(i);
                        return t }), odd: u(function(t, e) {
                        for (var i = 1; e > i; i += 2) t.push(i);
                        return t }), lt: u(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                        return t }), gt: u(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                        return t }) } }, k.pseudos.nth = k.pseudos.eq;
            for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) k.pseudos[b] = o(b);
            for (b in { submit: !0, reset: !0 }) k.pseudos[b] = l(b);
            return h.prototype = k.filters = k.pseudos, k.setFilters = new h, T = e.tokenize = function(t, i) {
                var n, s, r, a, o, l, u, c = $[t + " "];
                if (c) return i ? 0 : c.slice(0);
                for (o = t, l = [], u = k.preFilter; o;) {
                    (!n || (s = ue.exec(o))) && (s && (o = o.slice(s[0].length) || o), l.push(r = [])), n = !1, (s = ce.exec(o)) && (n = s.shift(), r.push({ value: n, type: s[0].replace(le, " ") }), o = o.slice(n.length));
                    for (a in k.filter) !(s = pe[a].exec(o)) || u[a] && !(s = u[a](s)) || (n = s.shift(), r.push({ value: n, type: a, matches: s }), o = o.slice(n.length));
                    if (!n) break }
                return i ? o.length : o ? e.error(t) : $(t, l).slice(0) }, S = e.compile = function(t, e) {
                var i, n = [],
                    s = [],
                    r = Q[t + " "];
                if (!r) {
                    for (e || (e = T(t)), i = e.length; i--;) r = _(e[i]), r[q] ? n.push(r) : s.push(r);
                    r = Q(t, y(s, n)), r.selector = t }
                return r }, B = e.select = function(t, e, i, n) {
                var s, r, a, o, l, u = "function" == typeof t && t,
                    h = !n && T(t = u.selector || t);
                if (i = i || [], 1 === h.length) {
                    if (r = h[0] = h[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && x.getById && 9 === e.nodeType && j && k.relative[r[1].type]) {
                        if (e = (k.find.ID(a.matches[0].replace(xe, ke), e) || [])[0], !e) return i;
                        u && (e = e.parentNode), t = t.slice(r.shift().value.length) }
                    for (s = pe.needsContext.test(t) ? 0 : r.length; s-- && (a = r[s], !k.relative[o = a.type]);)
                        if ((l = k.find[o]) && (n = l(a.matches[0].replace(xe, ke), ye.test(r[0].type) && c(e.parentNode) || e))) {
                            if (r.splice(s, 1), t = n.length && d(r), !t) return J.apply(i, n), i;
                            break } }
                return (u || S(t, h))(n, e, !j, i, ye.test(t) && c(e.parentNode) || e), i }, x.sortStable = q.split("").sort(U).join("") === q, x.detectDuplicates = !!E, A(), x.sortDetached = s(function(t) {
                return 1 & t.compareDocumentPosition(M.createElement("div")) }), s(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href") }) || r("type|href|height|width", function(t, e, i) {
                return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2) }), x.attributes && s(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value") }) || r("value", function(t, e, i) {
                return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue }), s(function(t) {
                return null == t.getAttribute("disabled") }) || r(ie, function(t, e, i) {
                var n;
                return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null }), e }(t);
        J.find = se, J.expr = se.selectors, J.expr[":"] = J.expr.pseudos, J.unique = se.uniqueSort, J.text = se.getText, J.isXMLDoc = se.isXML, J.contains = se.contains;
        var re = J.expr.match.needsContext,
            ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            oe = /^.[^:#\[\.,]*$/;
        J.filter = function(t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? J.find.matchesSelector(n, t) ? [n] : [] : J.find.matches(t, J.grep(e, function(t) {
                return 1 === t.nodeType })) }, J.fn.extend({ find: function(t) {
                var e, i = this.length,
                    n = [],
                    s = this;
                if ("string" != typeof t) return this.pushStack(J(t).filter(function() {
                    for (e = 0; i > e; e++)
                        if (J.contains(s[e], this)) return !0 }));
                for (e = 0; i > e; e++) J.find(t, s[e], n);
                return n = this.pushStack(i > 1 ? J.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n }, filter: function(t) {
                return this.pushStack(n(this, t || [], !1)) }, not: function(t) {
                return this.pushStack(n(this, t || [], !0)) }, is: function(t) {
                return !!n(this, "string" == typeof t && re.test(t) ? J(t) : t || [], !1).length } });
        var le, ue = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ce = J.fn.init = function(t, e) {
                var i, n;
                if (!t) return this;
                if ("string" == typeof t) {
                    if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ue.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || le).find(t) : this.constructor(e).find(t);
                    if (i[1]) {
                        if (e = e instanceof J ? e[0] : e, J.merge(this, J.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : K, !0)), ae.test(i[1]) && J.isPlainObject(e))
                            for (i in e) J.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this }
                    return n = K.getElementById(i[2]), n && n.parentNode && (this.length = 1, this[0] = n), this.context = K, this.selector = t, this }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : J.isFunction(t) ? "undefined" != typeof le.ready ? le.ready(t) : t(J) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), J.makeArray(t, this)) };
        ce.prototype = J.fn, le = J(K);
        var he = /^(?:parents|prev(?:Until|All))/,
            de = { children: !0, contents: !0, next: !0, prev: !0 };
        J.extend({ dir: function(t, e, i) {
                for (var n = [], s = void 0 !== i;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (s && J(t).is(i)) break;
                        n.push(t) }
                return n }, sibling: function(t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i } }), J.fn.extend({ has: function(t) {
                var e = J(t, this),
                    i = e.length;
                return this.filter(function() {
                    for (var t = 0; i > t; t++)
                        if (J.contains(this, e[t])) return !0 }) }, closest: function(t, e) {
                for (var i, n = 0, s = this.length, r = [], a = re.test(t) || "string" != typeof t ? J(t, e || this.context) : 0; s > n; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && J.find.matchesSelector(i, t))) { r.push(i);
                            break }
                return this.pushStack(r.length > 1 ? J.unique(r) : r) }, index: function(t) {
                return t ? "string" == typeof t ? U.call(J(t), this[0]) : U.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(t, e) {
                return this.pushStack(J.unique(J.merge(this.get(), J(t, e)))) }, addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) } }), J.each({ parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null }, parents: function(t) {
                return J.dir(t, "parentNode") }, parentsUntil: function(t, e, i) {
                return J.dir(t, "parentNode", i) }, next: function(t) {
                return s(t, "nextSibling") }, prev: function(t) {
                return s(t, "previousSibling") }, nextAll: function(t) {
                return J.dir(t, "nextSibling") }, prevAll: function(t) {
                return J.dir(t, "previousSibling") }, nextUntil: function(t, e, i) {
                return J.dir(t, "nextSibling", i) }, prevUntil: function(t, e, i) {
                return J.dir(t, "previousSibling", i) }, siblings: function(t) {
                return J.sibling((t.parentNode || {}).firstChild, t) }, children: function(t) {
                return J.sibling(t.firstChild) }, contents: function(t) {
                return t.contentDocument || J.merge([], t.childNodes) } }, function(t, e) { J.fn[t] = function(i, n) {
                var s = J.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = J.filter(n, s)), this.length > 1 && (de[t] || J.unique(s), he.test(t) && s.reverse()), this.pushStack(s) } });
        var fe = /\S+/g,
            pe = {};
        J.Callbacks = function(t) { t = "string" == typeof t ? pe[t] || r(t) : J.extend({}, t);
            var e, i, n, s, a, o, l = [],
                u = !t.once && [],
                c = function(r) {
                    for (e = t.memory && r, i = !0, o = s || 0, s = 0, a = l.length, n = !0; l && a > o; o++)
                        if (l[o].apply(r[0], r[1]) === !1 && t.stopOnFalse) { e = !1;
                            break }
                    n = !1, l && (u ? u.length && c(u.shift()) : e ? l = [] : h.disable()) },
                h = { add: function() {
                        if (l) {
                            var i = l.length;! function r(e) { J.each(e, function(e, i) {
                                    var n = J.type(i); "function" === n ? t.unique && h.has(i) || l.push(i) : i && i.length && "string" !== n && r(i) }) }(arguments), n ? a = l.length : e && (s = i, c(e)) }
                        return this }, remove: function() {
                        return l && J.each(arguments, function(t, e) {
                            for (var i;
                                (i = J.inArray(e, l, i)) > -1;) l.splice(i, 1), n && (a >= i && a--, o >= i && o--) }), this }, has: function(t) {
                        return t ? J.inArray(t, l) > -1 : !(!l || !l.length) }, empty: function() {
                        return l = [], a = 0, this }, disable: function() {
                        return l = u = e = void 0, this }, disabled: function() {
                        return !l }, lock: function() {
                        return u = void 0, e || h.disable(), this }, locked: function() {
                        return !u }, fireWith: function(t, e) {
                        return !l || i && !u || (e = e || [], e = [t, e.slice ? e.slice() : e], n ? u.push(e) : c(e)), this }, fire: function() {
                        return h.fireWith(this, arguments), this }, fired: function() {
                        return !!i } };
            return h }, J.extend({ Deferred: function(t) {
                var e = [
                        ["resolve", "done", J.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", J.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", J.Callbacks("memory")]
                    ],
                    i = "pending",
                    n = { state: function() {
                            return i }, always: function() {
                            return s.done(arguments).fail(arguments), this }, then: function() {
                            var t = arguments;
                            return J.Deferred(function(i) { J.each(e, function(e, r) {
                                    var a = J.isFunction(t[e]) && t[e];
                                    s[r[1]](function() {
                                        var t = a && a.apply(this, arguments);
                                        t && J.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[r[0] + "With"](this === n ? i.promise() : this, a ? [t] : arguments) }) }), t = null }).promise() }, promise: function(t) {
                            return null != t ? J.extend(t, n) : n } },
                    s = {};
                return n.pipe = n.then, J.each(e, function(t, r) {
                    var a = r[2],
                        o = r[3];
                    n[r[1]] = a.add, o && a.add(function() { i = o }, e[1 ^ t][2].disable, e[2][2].lock), s[r[0]] = function() {
                        return s[r[0] + "With"](this === s ? n : this, arguments), this }, s[r[0] + "With"] = a.fireWith }), n.promise(s), t && t.call(s, s), s }, when: function(t) {
                var e, i, n, s = 0,
                    r = W.call(arguments),
                    a = r.length,
                    o = 1 !== a || t && J.isFunction(t.promise) ? a : 0,
                    l = 1 === o ? t : J.Deferred(),
                    u = function(t, i, n) {
                        return function(s) { i[t] = this, n[t] = arguments.length > 1 ? W.call(arguments) : s, n === e ? l.notifyWith(i, n) : --o || l.resolveWith(i, n) } };
                if (a > 1)
                    for (e = new Array(a), i = new Array(a), n = new Array(a); a > s; s++) r[s] && J.isFunction(r[s].promise) ? r[s].promise().done(u(s, n, r)).fail(l.reject).progress(u(s, i, e)) : --o;
                return o || l.resolveWith(n, r), l.promise() } });
        var ge;
        J.fn.ready = function(t) {
            return J.ready.promise().done(t), this }, J.extend({ isReady: !1, readyWait: 1, holdReady: function(t) { t ? J.readyWait++ : J.ready(!0) }, ready: function(t) {
                (t === !0 ? --J.readyWait : J.isReady) || (J.isReady = !0, t !== !0 && --J.readyWait > 0 || (ge.resolveWith(K, [J]), J.fn.triggerHandler && (J(K).triggerHandler("ready"), J(K).off("ready")))) } }), J.ready.promise = function(e) {
            return ge || (ge = J.Deferred(), "complete" === K.readyState ? setTimeout(J.ready) : (K.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1))), ge.promise(e) }, J.ready.promise();
        var me = J.access = function(t, e, i, n, s, r, a) {
            var o = 0,
                l = t.length,
                u = null == i;
            if ("object" === J.type(i)) { s = !0;
                for (o in i) J.access(t, e, o, i[o], !0, r, a) } else if (void 0 !== n && (s = !0, J.isFunction(n) || (a = !0), u && (a ? (e.call(t, n), e = null) : (u = e, e = function(t, e, i) {
                    return u.call(J(t), i) })), e))
                for (; l > o; o++) e(t[o], i, a ? n : n.call(t[o], o, e(t[o], i)));
            return s ? t : u ? e.call(t) : l ? e(t[0], i) : r };
        J.acceptData = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType }, o.uid = 1, o.accepts = J.acceptData, o.prototype = { key: function(t) {
                if (!o.accepts(t)) return 0;
                var e = {},
                    i = t[this.expando];
                if (!i) { i = o.uid++;
                    try { e[this.expando] = { value: i }, Object.defineProperties(t, e) } catch (n) { e[this.expando] = i, J.extend(t, e) } }
                return this.cache[i] || (this.cache[i] = {}), i }, set: function(t, e, i) {
                var n, s = this.key(t),
                    r = this.cache[s];
                if ("string" == typeof e) r[e] = i;
                else if (J.isEmptyObject(r)) J.extend(this.cache[s], e);
                else
                    for (n in e) r[n] = e[n];
                return r }, get: function(t, e) {
                var i = this.cache[this.key(t)];
                return void 0 === e ? i : i[e] }, access: function(t, e, i) {
                var n;
                return void 0 === e || e && "string" == typeof e && void 0 === i ? (n = this.get(t, e), void 0 !== n ? n : this.get(t, J.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e) }, remove: function(t, e) {
                var i, n, s, r = this.key(t),
                    a = this.cache[r];
                if (void 0 === e) this.cache[r] = {};
                else { J.isArray(e) ? n = e.concat(e.map(J.camelCase)) : (s = J.camelCase(e), e in a ? n = [e, s] : (n = s, n = n in a ? [n] : n.match(fe) || [])), i = n.length;
                    for (; i--;) delete a[n[i]] } }, hasData: function(t) {
                return !J.isEmptyObject(this.cache[t[this.expando]] || {}) }, discard: function(t) { t[this.expando] && delete this.cache[t[this.expando]] } };
        var ve = new o,
            _e = new o,
            ye = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            be = /([A-Z])/g;
        J.extend({ hasData: function(t) {
                return _e.hasData(t) || ve.hasData(t) }, data: function(t, e, i) {
                return _e.access(t, e, i) }, removeData: function(t, e) { _e.remove(t, e) }, _data: function(t, e, i) {
                return ve.access(t, e, i) }, _removeData: function(t, e) { ve.remove(t, e) } }), J.fn.extend({ data: function(t, e) {
                var i, n, s, r = this[0],
                    a = r && r.attributes;
                if (void 0 === t) {
                    if (this.length && (s = _e.get(r), 1 === r.nodeType && !ve.get(r, "hasDataAttrs"))) {
                        for (i = a.length; i--;) a[i] && (n = a[i].name, 0 === n.indexOf("data-") && (n = J.camelCase(n.slice(5)), l(r, n, s[n])));
                        ve.set(r, "hasDataAttrs", !0) }
                    return s }
                return "object" == typeof t ? this.each(function() { _e.set(this, t) }) : me(this, function(e) {
                    var i, n = J.camelCase(t);
                    if (r && void 0 === e) {
                        if (i = _e.get(r, t), void 0 !== i) return i;
                        if (i = _e.get(r, n), void 0 !== i) return i;
                        if (i = l(r, n, void 0), void 0 !== i) return i } else this.each(function() {
                        var i = _e.get(this, n);
                        _e.set(this, n, e), -1 !== t.indexOf("-") && void 0 !== i && _e.set(this, t, e) }) }, null, e, arguments.length > 1, null, !0) }, removeData: function(t) {
                return this.each(function() { _e.remove(this, t) }) } }), J.extend({ queue: function(t, e, i) {
                var n;
                return t ? (e = (e || "fx") + "queue", n = ve.get(t, e), i && (!n || J.isArray(i) ? n = ve.access(t, e, J.makeArray(i)) : n.push(i)), n || []) : void 0 }, dequeue: function(t, e) { e = e || "fx";
                var i = J.queue(t, e),
                    n = i.length,
                    s = i.shift(),
                    r = J._queueHooks(t, e),
                    a = function() { J.dequeue(t, e) }; "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete r.stop, s.call(t, a, r)), !n && r && r.empty.fire() }, _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return ve.get(t, i) || ve.access(t, i, { empty: J.Callbacks("once memory").add(function() { ve.remove(t, [e + "queue", i]) }) }) } }), J.fn.extend({ queue: function(t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? J.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var i = J.queue(this, t, e);
                    J._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && J.dequeue(this, t) }) }, dequeue: function(t) {
                return this.each(function() { J.dequeue(this, t) }) }, clearQueue: function(t) {
                return this.queue(t || "fx", []) }, promise: function(t, e) {
                var i, n = 1,
                    s = J.Deferred(),
                    r = this,
                    a = this.length,
                    o = function() {--n || s.resolveWith(r, [r]) };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) i = ve.get(r[a], t + "queueHooks"), i && i.empty && (n++, i.empty.add(o));
                return o(), s.promise(e) } });
        var xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ke = ["Top", "Right", "Bottom", "Left"],
            we = function(t, e) {
                return t = e || t, "none" === J.css(t, "display") || !J.contains(t.ownerDocument, t) },
            Ce = /^(?:checkbox|radio)$/i;
        ! function() {
            var t = K.createDocumentFragment(),
                e = t.appendChild(K.createElement("div")),
                i = K.createElement("input");
            i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), G.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", G.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue }();
        var Te = "undefined";
        G.focusinBubbles = "onfocusin" in t;
        var Se = /^key/,
            Be = /^(?:mouse|pointer|contextmenu)|click/,
            Ie = /^(?:focusinfocus|focusoutblur)$/,
            Oe = /^([^.]*)(?:\.(.+)|)$/;
        J.event = { global: {}, add: function(t, e, i, n, s) {
                var r, a, o, l, u, c, h, d, f, p, g, m = ve.get(t);
                if (m)
                    for (i.handler && (r = i, i = r.handler, s = r.selector), i.guid || (i.guid = J.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function(e) {
                            return typeof J !== Te && J.event.triggered !== e.type ? J.event.dispatch.apply(t, arguments) : void 0 }), e = (e || "").match(fe) || [""], u = e.length; u--;) o = Oe.exec(e[u]) || [], f = g = o[1], p = (o[2] || "").split(".").sort(), f && (h = J.event.special[f] || {}, f = (s ? h.delegateType : h.bindType) || f, h = J.event.special[f] || {}, c = J.extend({ type: f, origType: g, data: n, handler: i, guid: i.guid, selector: s, needsContext: s && J.expr.match.needsContext.test(s), namespace: p.join(".") }, r), (d = l[f]) || (d = l[f] = [], d.delegateCount = 0, h.setup && h.setup.call(t, n, p, a) !== !1 || t.addEventListener && t.addEventListener(f, a, !1)), h.add && (h.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, c) : d.push(c), J.event.global[f] = !0) }, remove: function(t, e, i, n, s) {
                var r, a, o, l, u, c, h, d, f, p, g, m = ve.hasData(t) && ve.get(t);
                if (m && (l = m.events)) {
                    for (e = (e || "").match(fe) || [""], u = e.length; u--;)
                        if (o = Oe.exec(e[u]) || [], f = g = o[1], p = (o[2] || "").split(".").sort(), f) {
                            for (h = J.event.special[f] || {}, f = (n ? h.delegateType : h.bindType) || f, d = l[f] || [], o = o[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = d.length; r--;) c = d[r], !s && g !== c.origType || i && i.guid !== c.guid || o && !o.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (d.splice(r, 1), c.selector && d.delegateCount--, h.remove && h.remove.call(t, c));
                            a && !d.length && (h.teardown && h.teardown.call(t, p, m.handle) !== !1 || J.removeEvent(t, f, m.handle), delete l[f]) } else
                            for (f in l) J.event.remove(t, f + e[u], i, n, !0);
                    J.isEmptyObject(l) && (delete m.handle, ve.remove(t, "events")) } }, trigger: function(e, i, n, s) {
                var r, a, o, l, u, c, h, d = [n || K],
                    f = Y.call(e, "type") ? e.type : e,
                    p = Y.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = o = n = n || K, 3 !== n.nodeType && 8 !== n.nodeType && !Ie.test(f + J.event.triggered) && (f.indexOf(".") >= 0 && (p = f.split("."), f = p.shift(), p.sort()), u = f.indexOf(":") < 0 && "on" + f, e = e[J.expando] ? e : new J.Event(f, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : J.makeArray(i, [e]), h = J.event.special[f] || {}, s || !h.trigger || h.trigger.apply(n, i) !== !1)) {
                    if (!s && !h.noBubble && !J.isWindow(n)) {
                        for (l = h.delegateType || f, Ie.test(l + f) || (a = a.parentNode); a; a = a.parentNode) d.push(a), o = a;
                        o === (n.ownerDocument || K) && d.push(o.defaultView || o.parentWindow || t) }
                    for (r = 0;
                        (a = d[r++]) && !e.isPropagationStopped();) e.type = r > 1 ? l : h.bindType || f, c = (ve.get(a, "events") || {})[e.type] && ve.get(a, "handle"), c && c.apply(a, i), c = u && a[u], c && c.apply && J.acceptData(a) && (e.result = c.apply(a, i), e.result === !1 && e.preventDefault());
                    return e.type = f, s || e.isDefaultPrevented() || h._default && h._default.apply(d.pop(), i) !== !1 || !J.acceptData(n) || u && J.isFunction(n[f]) && !J.isWindow(n) && (o = n[u], o && (n[u] = null), J.event.triggered = f, n[f](), J.event.triggered = void 0, o && (n[u] = o)), e.result } }, dispatch: function(t) { t = J.event.fix(t);
                var e, i, n, s, r, a = [],
                    o = W.call(arguments),
                    l = (ve.get(this, "events") || {})[t.type] || [],
                    u = J.event.special[t.type] || {};
                if (o[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                    for (a = J.event.handlers.call(this, t, l), e = 0;
                        (s = a[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = s.elem, i = 0;
                            (r = s.handlers[i++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(r.namespace)) && (t.handleObj = r, t.data = r.data, n = ((J.event.special[r.origType] || {}).handle || r.handler).apply(s.elem, o), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, t), t.result } }, handlers: function(t, e) {
                var i, n, s, r, a = [],
                    o = e.delegateCount,
                    l = t.target;
                if (o && l.nodeType && (!t.button || "click" !== t.type))
                    for (; l !== this; l = l.parentNode || this)
                        if (l.disabled !== !0 || "click" !== t.type) {
                            for (n = [], i = 0; o > i; i++) r = e[i], s = r.selector + " ", void 0 === n[s] && (n[s] = r.needsContext ? J(s, this).index(l) >= 0 : J.find(s, this, null, [l]).length), n[s] && n.push(r);
                            n.length && a.push({ elem: l, handlers: n }) }
                return o < e.length && a.push({ elem: this, handlers: e.slice(o) }), a }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(t, e) {
                    var i, n, s, r = e.button;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || K, n = i.documentElement, s = i.body, t.pageX = e.clientX + (n && n.scrollLeft || s && s.scrollLeft || 0) - (n && n.clientLeft || s && s.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || s && s.scrollTop || 0) - (n && n.clientTop || s && s.clientTop || 0)), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t } }, fix: function(t) {
                if (t[J.expando]) return t;
                var e, i, n, s = t.type,
                    r = t,
                    a = this.fixHooks[s];
                for (a || (this.fixHooks[s] = a = Be.test(s) ? this.mouseHooks : Se.test(s) ? this.keyHooks : {}), n = a.props ? this.props.concat(a.props) : this.props, t = new J.Event(r), e = n.length; e--;) i = n[e], t[i] = r[i];
                return t.target || (t.target = K), 3 === t.target.nodeType && (t.target = t.target.parentNode), a.filter ? a.filter(t, r) : t }, special: { load: { noBubble: !0 }, focus: { trigger: function() {
                        return this !== h() && this.focus ? (this.focus(), !1) : void 0 }, delegateType: "focusin" }, blur: { trigger: function() {
                        return this === h() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() {
                        return "checkbox" === this.type && this.click && J.nodeName(this, "input") ? (this.click(), !1) : void 0 }, _default: function(t) {
                        return J.nodeName(t.target, "a") } }, beforeunload: { postDispatch: function(t) { void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result) } } }, simulate: function(t, e, i, n) {
                var s = J.extend(new J.Event, i, { type: t, isSimulated: !0, originalEvent: {} });
                n ? J.event.trigger(s, null, e) : J.event.dispatch.call(e, s), s.isDefaultPrevented() && i.preventDefault() } }, J.removeEvent = function(t, e, i) { t.removeEventListener && t.removeEventListener(e, i, !1) }, J.Event = function(t, e) {
            return this instanceof J.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? u : c) : this.type = t, e && J.extend(this, e), this.timeStamp = t && t.timeStamp || J.now(), void(this[J.expando] = !0)) : new J.Event(t, e) }, J.Event.prototype = { isDefaultPrevented: c, isPropagationStopped: c, isImmediatePropagationStopped: c, preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = u, t && t.preventDefault && t.preventDefault() }, stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = u, t && t.stopPropagation && t.stopPropagation() }, stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = u, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation() } }, J.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(t, e) { J.event.special[t] = { delegateType: e, bindType: e, handle: function(t) {
                    var i, n = this,
                        s = t.relatedTarget,
                        r = t.handleObj;
                    return (!s || s !== n && !J.contains(n, s)) && (t.type = r.origType, i = r.handler.apply(this, arguments), t.type = e), i } } }), G.focusinBubbles || J.each({ focus: "focusin", blur: "focusout" }, function(t, e) {
            var i = function(t) { J.event.simulate(e, t.target, J.event.fix(t), !0) };
            J.event.special[e] = { setup: function() {
                    var n = this.ownerDocument || this,
                        s = ve.access(n, e);
                    s || n.addEventListener(t, i, !0), ve.access(n, e, (s || 0) + 1) }, teardown: function() {
                    var n = this.ownerDocument || this,
                        s = ve.access(n, e) - 1;
                    s ? ve.access(n, e, s) : (n.removeEventListener(t, i, !0), ve.remove(n, e)) } } }), J.fn.extend({ on: function(t, e, i, n, s) {
                var r, a;
                if ("object" == typeof t) { "string" != typeof e && (i = i || e, e = void 0);
                    for (a in t) this.on(a, e, i, t[a], s);
                    return this }
                if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = c;
                else if (!n) return this;
                return 1 === s && (r = n, n = function(t) {
                    return J().off(t), r.apply(this, arguments) }, n.guid = r.guid || (r.guid = J.guid++)), this.each(function() { J.event.add(this, t, n, i, e) }) }, one: function(t, e, i, n) {
                return this.on(t, e, i, n, 1) }, off: function(t, e, i) {
                var n, s;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, J(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (s in t) this.off(s, e, t[s]);
                    return this }
                return (e === !1 || "function" == typeof e) && (i = e, e = void 0), i === !1 && (i = c), this.each(function() { J.event.remove(this, t, i, e) }) }, trigger: function(t, e) {
                return this.each(function() { J.event.trigger(t, e, this) }) }, triggerHandler: function(t, e) {
                var i = this[0];
                return i ? J.event.trigger(t, e, i, !0) : void 0 } });
        var Ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Ae = /<([\w:]+)/,
            Me = /<|&#?\w+;/,
            Ne = /<(?:script|style|link)/i,
            je = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Le = /^$|\/(?:java|ecma)script/i,
            Pe = /^true\/(.*)/,
            De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            He = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
        He.optgroup = He.option, He.tbody = He.tfoot = He.colgroup = He.caption = He.thead, He.th = He.td, J.extend({ clone: function(t, e, i) {
                var n, s, r, a, o = t.cloneNode(!0),
                    l = J.contains(t.ownerDocument, t);
                if (!(G.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || J.isXMLDoc(t)))
                    for (a = v(o), r = v(t), n = 0, s = r.length; s > n; n++) _(r[n], a[n]);
                if (e)
                    if (i)
                        for (r = r || v(t), a = a || v(o), n = 0, s = r.length; s > n; n++) m(r[n], a[n]);
                    else m(t, o);
                return a = v(o, "script"), a.length > 0 && g(a, !l && v(t, "script")), o }, buildFragment: function(t, e, i, n) {
                for (var s, r, a, o, l, u, c = e.createDocumentFragment(), h = [], d = 0, f = t.length; f > d; d++)
                    if (s = t[d], s || 0 === s)
                        if ("object" === J.type(s)) J.merge(h, s.nodeType ? [s] : s);
                        else if (Me.test(s)) {
                    for (r = r || c.appendChild(e.createElement("div")), a = (Ae.exec(s) || ["", ""])[1].toLowerCase(), o = He[a] || He._default, r.innerHTML = o[1] + s.replace(Ee, "<$1></$2>") + o[2], u = o[0]; u--;) r = r.lastChild;
                    J.merge(h, r.childNodes), r = c.firstChild, r.textContent = "" } else h.push(e.createTextNode(s));
                for (c.textContent = "", d = 0; s = h[d++];)
                    if ((!n || -1 === J.inArray(s, n)) && (l = J.contains(s.ownerDocument, s), r = v(c.appendChild(s), "script"), l && g(r), i))
                        for (u = 0; s = r[u++];) Le.test(s.type || "") && i.push(s);
                return c }, cleanData: function(t) {
                for (var e, i, n, s, r = J.event.special, a = 0; void 0 !== (i = t[a]); a++) {
                    if (J.acceptData(i) && (s = i[ve.expando], s && (e = ve.cache[s]))) {
                        if (e.events)
                            for (n in e.events) r[n] ? J.event.remove(i, n) : J.removeEvent(i, n, e.handle);
                        ve.cache[s] && delete ve.cache[s] }
                    delete _e.cache[i[_e.expando]] } } }), J.fn.extend({ text: function(t) {
                return me(this, function(t) {
                    return void 0 === t ? J.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t) }) }, null, t, arguments.length) }, append: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = d(this, t);
                        e.appendChild(t) } }) }, prepend: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = d(this, t);
                        e.insertBefore(t, e.firstChild) } }) }, before: function() {
                return this.domManip(arguments, function(t) { this.parentNode && this.parentNode.insertBefore(t, this) }) }, after: function() {
                return this.domManip(arguments, function(t) { this.parentNode && this.parentNode.insertBefore(t, this.nextSibling) }) }, remove: function(t, e) {
                for (var i, n = t ? J.filter(t, this) : this, s = 0; null != (i = n[s]); s++) e || 1 !== i.nodeType || J.cleanData(v(i)), i.parentNode && (e && J.contains(i.ownerDocument, i) && g(v(i, "script")), i.parentNode.removeChild(i));
                return this }, empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (J.cleanData(v(t, !1)), t.textContent = "");
                return this }, clone: function(t, e) {
                return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                    return J.clone(this, t, e) }) }, html: function(t) {
                return me(this, function(t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !Ne.test(t) && !He[(Ae.exec(t) || ["", ""])[1].toLowerCase()]) { t = t.replace(Ee, "<$1></$2>");
                        try {
                            for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (J.cleanData(v(e, !1)), e.innerHTML = t);
                            e = 0 } catch (s) {} }
                    e && this.empty().append(t) }, null, t, arguments.length) }, replaceWith: function() {
                var t = arguments[0];
                return this.domManip(arguments, function(e) { t = this.parentNode, J.cleanData(v(this)), t && t.replaceChild(e, this) }), t && (t.length || t.nodeType) ? this : this.remove() }, detach: function(t) {
                return this.remove(t, !0) }, domManip: function(t, e) { t = $.apply([], t);
                var i, n, s, r, a, o, l = 0,
                    u = this.length,
                    c = this,
                    h = u - 1,
                    d = t[0],
                    g = J.isFunction(d);
                if (g || u > 1 && "string" == typeof d && !G.checkClone && je.test(d)) return this.each(function(i) {
                    var n = c.eq(i);
                    g && (t[0] = d.call(this, i, n.html())), n.domManip(t, e) });
                if (u && (i = J.buildFragment(t, this[0].ownerDocument, !1, this), n = i.firstChild, 1 === i.childNodes.length && (i = n), n)) {
                    for (s = J.map(v(i, "script"), f), r = s.length; u > l; l++) a = i, l !== h && (a = J.clone(a, !0, !0), r && J.merge(s, v(a, "script"))), e.call(this[l], a, l);
                    if (r)
                        for (o = s[s.length - 1].ownerDocument, J.map(s, p), l = 0; r > l; l++) a = s[l], Le.test(a.type || "") && !ve.access(a, "globalEval") && J.contains(o, a) && (a.src ? J._evalUrl && J._evalUrl(a.src) : J.globalEval(a.textContent.replace(De, ""))) }
                return this } }), J.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(t, e) { J.fn[t] = function(t) {
                for (var i, n = [], s = J(t), r = s.length - 1, a = 0; r >= a; a++) i = a === r ? this : this.clone(!0), J(s[a])[e](i), Q.apply(n, i.get());
                return this.pushStack(n) } });
        var qe, Fe = {},
            ze = /^margin/,
            Re = new RegExp("^(" + xe + ")(?!px)[a-z%]+$", "i"),
            We = function(t) {
                return t.ownerDocument.defaultView.getComputedStyle(t, null) };
        ! function() {
            function e() { a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", s.appendChild(r);
                var e = t.getComputedStyle(a, null);
                i = "1%" !== e.top, n = "4px" === e.width, s.removeChild(r) }
            var i, n, s = K.documentElement,
                r = K.createElement("div"),
                a = K.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === a.style.backgroundClip, r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", r.appendChild(a), t.getComputedStyle && J.extend(G, { pixelPosition: function() {
                    return e(), i }, boxSizingReliable: function() {
                    return null == n && e(), n }, reliableMarginRight: function() {
                    var e, i = a.appendChild(K.createElement("div"));
                    return i.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", a.style.width = "1px", s.appendChild(r), e = !parseFloat(t.getComputedStyle(i, null).marginRight), s.removeChild(r), e } })) }(), J.swap = function(t, e, i, n) {
            var s, r, a = {};
            for (r in e) a[r] = t.style[r], t.style[r] = e[r];
            s = i.apply(t, n || []);
            for (r in e) t.style[r] = a[r];
            return s };
        var $e = /^(none|table(?!-c[ea]).+)/,
            Qe = new RegExp("^(" + xe + ")(.*)$", "i"),
            Ue = new RegExp("^([+-])=(" + xe + ")", "i"),
            Xe = { position: "absolute", visibility: "hidden", display: "block" },
            Ve = { letterSpacing: "0", fontWeight: "400" },
            Ye = ["Webkit", "O", "Moz", "ms"];
        J.extend({ cssHooks: { opacity: { get: function(t, e) {
                        if (e) {
                            var i = x(t, "opacity");
                            return "" === i ? "1" : i } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function(t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var s, r, a, o = J.camelCase(e),
                        l = t.style;
                    return e = J.cssProps[o] || (J.cssProps[o] = w(l, o)), a = J.cssHooks[e] || J.cssHooks[o], void 0 === i ? a && "get" in a && void 0 !== (s = a.get(t, !1, n)) ? s : l[e] : (r = typeof i, "string" === r && (s = Ue.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(J.css(t, e)), r = "number"), void(null != i && i === i && ("number" !== r || J.cssNumber[o] || (i += "px"), G.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), a && "set" in a && void 0 === (i = a.set(t, i, n)) || (l[e] = i)))) } }, css: function(t, e, i, n) {
                var s, r, a, o = J.camelCase(e);
                return e = J.cssProps[o] || (J.cssProps[o] = w(t.style, o)), a = J.cssHooks[e] || J.cssHooks[o], a && "get" in a && (s = a.get(t, !0, i)), void 0 === s && (s = x(t, e, n)), "normal" === s && e in Ve && (s = Ve[e]), "" === i || i ? (r = parseFloat(s), i === !0 || J.isNumeric(r) ? r || 0 : s) : s } }), J.each(["height", "width"], function(t, e) { J.cssHooks[e] = { get: function(t, i, n) {
                    return i ? $e.test(J.css(t, "display")) && 0 === t.offsetWidth ? J.swap(t, Xe, function() {
                        return S(t, e, n) }) : S(t, e, n) : void 0 }, set: function(t, i, n) {
                    var s = n && We(t);
                    return C(t, i, n ? T(t, e, n, "border-box" === J.css(t, "boxSizing", !1, s), s) : 0) } } }), J.cssHooks.marginRight = k(G.reliableMarginRight, function(t, e) {
            return e ? J.swap(t, { display: "inline-block" }, x, [t, "marginRight"]) : void 0 }), J.each({ margin: "", padding: "", border: "Width" }, function(t, e) { J.cssHooks[t + e] = { expand: function(i) {
                    for (var n = 0, s = {}, r = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) s[t + ke[n] + e] = r[n] || r[n - 2] || r[0];
                    return s } }, ze.test(t) || (J.cssHooks[t + e].set = C) }), J.fn.extend({ css: function(t, e) {
                return me(this, function(t, e, i) {
                    var n, s, r = {},
                        a = 0;
                    if (J.isArray(e)) {
                        for (n = We(t), s = e.length; s > a; a++) r[e[a]] = J.css(t, e[a], !1, n);
                        return r }
                    return void 0 !== i ? J.style(t, e, i) : J.css(t, e) }, t, e, arguments.length > 1) }, show: function() {
                return B(this, !0) }, hide: function() {
                return B(this) }, toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() { we(this) ? J(this).show() : J(this).hide() }) } }), J.Tween = I, I.prototype = { constructor: I, init: function(t, e, i, n, s, r) { this.elem = t, this.prop = i, this.easing = s || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = r || (J.cssNumber[i] ? "" : "px") }, cur: function() {
                var t = I.propHooks[this.prop];
                return t && t.get ? t.get(this) : I.propHooks._default.get(this) }, run: function(t) {
                var e, i = I.propHooks[this.prop];
                return this.pos = e = this.options.duration ? J.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : I.propHooks._default.set(this), this } }, I.prototype.init.prototype = I.prototype, I.propHooks = { _default: { get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = J.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop] }, set: function(t) { J.fx.step[t.prop] ? J.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[J.cssProps[t.prop]] || J.cssHooks[t.prop]) ? J.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now } } }, I.propHooks.scrollTop = I.propHooks.scrollLeft = { set: function(t) { t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now) } }, J.easing = { linear: function(t) {
                return t }, swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2 } }, J.fx = I.prototype.init, J.fx.step = {};
        var Ge, Ke, Ze = /^(?:toggle|show|hide)$/,
            Je = new RegExp("^(?:([+-])=|)(" + xe + ")([a-z%]*)$", "i"),
            ti = /queueHooks$/,
            ei = [M],
            ii = { "*": [function(t, e) {
                    var i = this.createTween(t, e),
                        n = i.cur(),
                        s = Je.exec(e),
                        r = s && s[3] || (J.cssNumber[t] ? "" : "px"),
                        a = (J.cssNumber[t] || "px" !== r && +n) && Je.exec(J.css(i.elem, t)),
                        o = 1,
                        l = 20;
                    if (a && a[3] !== r) { r = r || a[3], s = s || [], a = +n || 1;
                        do o = o || ".5", a /= o, J.style(i.elem, t, a + r); while (o !== (o = i.cur() / n) && 1 !== o && --l) }
                    return s && (a = i.start = +a || +n || 0, i.unit = r, i.end = s[1] ? a + (s[1] + 1) * s[2] : +s[2]), i }] };
        J.Animation = J.extend(j, { tweener: function(t, e) { J.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                    for (var i, n = 0, s = t.length; s > n; n++) i = t[n], ii[i] = ii[i] || [], ii[i].unshift(e) }, prefilter: function(t, e) { e ? ei.unshift(t) : ei.push(t) } }), J.speed = function(t, e, i) {
                var n = t && "object" == typeof t ? J.extend({}, t) : { complete: i || !i && e || J.isFunction(t) && t, duration: t, easing: i && e || e && !J.isFunction(e) && e };
                return n.duration = J.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in J.fx.speeds ? J.fx.speeds[n.duration] : J.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() { J.isFunction(n.old) && n.old.call(this), n.queue && J.dequeue(this, n.queue) }, n }, J.fn.extend({
                fadeTo: function(t, e, i, n) {
                    return this.filter(we).css("opacity", 0).show().end().animate({ opacity: e }, t, i, n) },
                animate: function(t, e, i, n) {
                    var s = J.isEmptyObject(t),
                        r = J.speed(e, i, n),
                        a = function() {
                            var e = j(this, J.extend({}, t), r);
                            (s || ve.get(this, "finish")) && e.stop(!0) };
                    return a.finish = a, s || r.queue === !1 ? this.each(a) : this.queue(r.queue, a) },
                stop: function(t, e, i) {
                    var n = function(t) {
                        var e = t.stop;
                        delete t.stop, e(i) };
                    return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            s = null != t && t + "queueHooks",
                            r = J.timers,
                            a = ve.get(this);
                        if (s) a[s] && a[s].stop && n(a[s]);
                        else
                            for (s in a) a[s] && a[s].stop && ti.test(s) && n(a[s]);
                        for (s = r.length; s--;) r[s].elem !== this || null != t && r[s].queue !== t || (r[s].anim.stop(i), e = !1, r.splice(s, 1));
                        (e || !i) && J.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return t !== !1 && (t = t || "fx"), this.each(function() {
                        var e, i = ve.get(this),
                            n = i[t + "queue"],
                            s = i[t + "queueHooks"],
                            r = J.timers,
                            a = n ? n.length : 0;
                        for (i.finish = !0, J.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                        for (e = 0; a > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete i.finish }) }
            }), J.each(["toggle", "show", "hide"], function(t, e) {
                var i = J.fn[e];
                J.fn[e] = function(t, n, s) {
                    return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(E(e, !0), t, n, s) } }), J.each({ slideDown: E("show"), slideUp: E("hide"), slideToggle: E("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(t, e) { J.fn[t] = function(t, i, n) {
                    return this.animate(e, t, i, n) } }), J.timers = [], J.fx.tick = function() {
                var t, e = 0,
                    i = J.timers;
                for (Ge = J.now(); e < i.length; e++) t = i[e], t() || i[e] !== t || i.splice(e--, 1);
                i.length || J.fx.stop(), Ge = void 0 }, J.fx.timer = function(t) { J.timers.push(t), t() ? J.fx.start() : J.timers.pop() }, J.fx.interval = 13, J.fx.start = function() { Ke || (Ke = setInterval(J.fx.tick, J.fx.interval)) }, J.fx.stop = function() { clearInterval(Ke), Ke = null }, J.fx.speeds = { slow: 600, fast: 200, _default: 400 }, J.fn.delay = function(t, e) {
                return t = J.fx ? J.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                    var n = setTimeout(e, t);
                    i.stop = function() { clearTimeout(n) } }) },
            function() {
                var t = K.createElement("input"),
                    e = K.createElement("select"),
                    i = e.appendChild(K.createElement("option"));
                t.type = "checkbox", G.checkOn = "" !== t.value, G.optSelected = i.selected, e.disabled = !0, G.optDisabled = !i.disabled, t = K.createElement("input"), t.value = "t", t.type = "radio", G.radioValue = "t" === t.value }();
        var ni, si, ri = J.expr.attrHandle;
        J.fn.extend({ attr: function(t, e) {
                return me(this, J.attr, t, e, arguments.length > 1) }, removeAttr: function(t) {
                return this.each(function() { J.removeAttr(this, t) }) } }), J.extend({ attr: function(t, e, i) {
                var n, s, r = t.nodeType;
                return t && 3 !== r && 8 !== r && 2 !== r ? typeof t.getAttribute === Te ? J.prop(t, e, i) : (1 === r && J.isXMLDoc(t) || (e = e.toLowerCase(), n = J.attrHooks[e] || (J.expr.match.bool.test(e) ? si : ni)), void 0 === i ? n && "get" in n && null !== (s = n.get(t, e)) ? s : (s = J.find.attr(t, e), null == s ? void 0 : s) : null !== i ? n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s : (t.setAttribute(e, i + ""), i) : void J.removeAttr(t, e)) : void 0 }, removeAttr: function(t, e) {
                var i, n, s = 0,
                    r = e && e.match(fe);
                if (r && 1 === t.nodeType)
                    for (; i = r[s++];) n = J.propFix[i] || i, J.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i) }, attrHooks: { type: { set: function(t, e) {
                        if (!G.radioValue && "radio" === e && J.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e } } } } }), si = { set: function(t, e, i) {
                return e === !1 ? J.removeAttr(t, i) : t.setAttribute(i, i), i } }, J.each(J.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var i = ri[e] || J.find.attr;
            ri[e] = function(t, e, n) {
                var s, r;
                return n || (r = ri[e], ri[e] = s, s = null != i(t, e, n) ? e.toLowerCase() : null, ri[e] = r), s } });
        var ai = /^(?:input|select|textarea|button)$/i;
        J.fn.extend({ prop: function(t, e) {
                return me(this, J.prop, t, e, arguments.length > 1) }, removeProp: function(t) {
                return this.each(function() { delete this[J.propFix[t] || t] }) } }), J.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function(t, e, i) {
                var n, s, r, a = t.nodeType;
                return t && 3 !== a && 8 !== a && 2 !== a ? (r = 1 !== a || !J.isXMLDoc(t), r && (e = J.propFix[e] || e, s = J.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]) : void 0 }, propHooks: { tabIndex: { get: function(t) {
                        return t.hasAttribute("tabindex") || ai.test(t.nodeName) || t.href ? t.tabIndex : -1 } } } }), G.optSelected || (J.propHooks.selected = { get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null } }), J.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { J.propFix[this.toLowerCase()] = this });
        var oi = /[\t\r\n\f]/g;
        J.fn.extend({ addClass: function(t) {
                var e, i, n, s, r, a, o = "string" == typeof t && t,
                    l = 0,
                    u = this.length;
                if (J.isFunction(t)) return this.each(function(e) { J(this).addClass(t.call(this, e, this.className)) });
                if (o)
                    for (e = (t || "").match(fe) || []; u > l; l++)
                        if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(oi, " ") : " ")) {
                            for (r = 0; s = e[r++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                            a = J.trim(n), i.className !== a && (i.className = a) }
                return this }, removeClass: function(t) {
                var e, i, n, s, r, a, o = 0 === arguments.length || "string" == typeof t && t,
                    l = 0,
                    u = this.length;
                if (J.isFunction(t)) return this.each(function(e) { J(this).removeClass(t.call(this, e, this.className)) });
                if (o)
                    for (e = (t || "").match(fe) || []; u > l; l++)
                        if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(oi, " ") : "")) {
                            for (r = 0; s = e[r++];)
                                for (; n.indexOf(" " + s + " ") >= 0;) n = n.replace(" " + s + " ", " ");
                            a = t ? J.trim(n) : "", i.className !== a && (i.className = a) }
                return this }, toggleClass: function(t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(J.isFunction(t) ? function(i) { J(this).toggleClass(t.call(this, i, this.className, e), e) } : function() {
                    if ("string" === i)
                        for (var e, n = 0, s = J(this), r = t.match(fe) || []; e = r[n++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                    else(i === Te || "boolean" === i) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ve.get(this, "__className__") || "") }) }, hasClass: function(t) {
                for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                    if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(oi, " ").indexOf(e) >= 0) return !0;
                return !1 } });
        var li = /\r/g;
        J.fn.extend({ val: function(t) {
                var e, i, n, s = this[0];
                return arguments.length ? (n = J.isFunction(t), this.each(function(i) {
                    var s;
                    1 === this.nodeType && (s = n ? t.call(this, i, J(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : J.isArray(s) && (s = J.map(s, function(t) {
                        return null == t ? "" : t + "" })), e = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s)) })) : s ? (e = J.valHooks[s.type] || J.valHooks[s.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : (i = s.value, "string" == typeof i ? i.replace(li, "") : null == i ? "" : i)) : void 0 } }), J.extend({ valHooks: { option: { get: function(t) {
                        var e = J.find.attr(t, "value");
                        return null != e ? e : J.trim(J.text(t)) } }, select: { get: function(t) {
                        for (var e, i, n = t.options, s = t.selectedIndex, r = "select-one" === t.type || 0 > s, a = r ? null : [], o = r ? s + 1 : n.length, l = 0 > s ? o : r ? s : 0; o > l; l++)
                            if (i = n[l], !(!i.selected && l !== s || (G.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && J.nodeName(i.parentNode, "optgroup"))) {
                                if (e = J(i).val(), r) return e;
                                a.push(e) }
                        return a }, set: function(t, e) {
                        for (var i, n, s = t.options, r = J.makeArray(e), a = s.length; a--;) n = s[a], (n.selected = J.inArray(n.value, r) >= 0) && (i = !0);
                        return i || (t.selectedIndex = -1), r } } } }), J.each(["radio", "checkbox"], function() { J.valHooks[this] = { set: function(t, e) {
                    return J.isArray(e) ? t.checked = J.inArray(J(t).val(), e) >= 0 : void 0 } }, G.checkOn || (J.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value }) }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) { J.fn[e] = function(t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e) } }), J.fn.extend({ hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t) }, bind: function(t, e, i) {
                return this.on(t, null, e, i) }, unbind: function(t, e) {
                return this.off(t, null, e) }, delegate: function(t, e, i, n) {
                return this.on(e, t, i, n) }, undelegate: function(t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i) } });
        var ui = J.now(),
            ci = /\?/;
        J.parseJSON = function(t) {
            return JSON.parse(t + "") }, J.parseXML = function(t) {
            var e, i;
            if (!t || "string" != typeof t) return null;
            try { i = new DOMParser, e = i.parseFromString(t, "text/xml") } catch (n) { e = void 0 }
            return (!e || e.getElementsByTagName("parsererror").length) && J.error("Invalid XML: " + t), e };
        var hi, di, fi = /#.*$/,
            pi = /([?&])_=[^&]*/,
            gi = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            mi = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            vi = /^(?:GET|HEAD)$/,
            _i = /^\/\//,
            yi = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            bi = {},
            xi = {},
            ki = "*/".concat("*");
        try { di = location.href } catch (wi) { di = K.createElement("a"), di.href = "", di = di.href }
        hi = yi.exec(di.toLowerCase()) || [], J.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: di, type: "GET", isLocal: mi.test(hi[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": ki, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": J.parseJSON, "text xml": J.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(t, e) {
                return e ? D(D(t, J.ajaxSettings), e) : D(J.ajaxSettings, t) }, ajaxPrefilter: L(bi), ajaxTransport: L(xi), ajax: function(t, e) {
                function i(t, e, i, a) {
                    var l, c, v, _, b, k = e;
                    2 !== y && (y = 2, o && clearTimeout(o), n = void 0, r = a || "", x.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, i && (_ = H(h, x, i)), _ = q(h, _, x, l), l ? (h.ifModified && (b = x.getResponseHeader("Last-Modified"), b && (J.lastModified[s] = b), b = x.getResponseHeader("etag"), b && (J.etag[s] = b)), 204 === t || "HEAD" === h.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = _.state, c = _.data, v = _.error, l = !v)) : (v = k, (t || !k) && (k = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || k) + "", l ? p.resolveWith(d, [c, k, x]) : p.rejectWith(d, [x, k, v]), x.statusCode(m), m = void 0, u && f.trigger(l ? "ajaxSuccess" : "ajaxError", [x, h, l ? c : v]), g.fireWith(d, [x, k]), u && (f.trigger("ajaxComplete", [x, h]), --J.active || J.event.trigger("ajaxStop"))) } "object" == typeof t && (e = t, t = void 0), e = e || {};
                var n, s, r, a, o, l, u, c, h = J.ajaxSetup({}, e),
                    d = h.context || h,
                    f = h.context && (d.nodeType || d.jquery) ? J(d) : J.event,
                    p = J.Deferred(),
                    g = J.Callbacks("once memory"),
                    m = h.statusCode || {},
                    v = {},
                    _ = {},
                    y = 0,
                    b = "canceled",
                    x = { readyState: 0, getResponseHeader: function(t) {
                            var e;
                            if (2 === y) {
                                if (!a)
                                    for (a = {}; e = gi.exec(r);) a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()] }
                            return null == e ? null : e }, getAllResponseHeaders: function() {
                            return 2 === y ? r : null }, setRequestHeader: function(t, e) {
                            var i = t.toLowerCase();
                            return y || (t = _[i] = _[i] || t, v[t] = e), this }, overrideMimeType: function(t) {
                            return y || (h.mimeType = t), this }, statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > y)
                                    for (e in t) m[e] = [m[e], t[e]];
                                else x.always(t[x.status]);
                            return this }, abort: function(t) {
                            var e = t || b;
                            return n && n.abort(e), i(0, e), this } };
                if (p.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, h.url = ((t || h.url || di) + "").replace(fi, "").replace(_i, hi[1] + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = J.trim(h.dataType || "*").toLowerCase().match(fe) || [""], null == h.crossDomain && (l = yi.exec(h.url.toLowerCase()), h.crossDomain = !(!l || l[1] === hi[1] && l[2] === hi[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (hi[3] || ("http:" === hi[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = J.param(h.data, h.traditional)), P(bi, h, e, x), 2 === y) return x;
                u = h.global, u && 0 === J.active++ && J.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !vi.test(h.type), s = h.url, h.hasContent || (h.data && (s = h.url += (ci.test(s) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = pi.test(s) ? s.replace(pi, "$1_=" + ui++) : s + (ci.test(s) ? "&" : "?") + "_=" + ui++)), h.ifModified && (J.lastModified[s] && x.setRequestHeader("If-Modified-Since", J.lastModified[s]), J.etag[s] && x.setRequestHeader("If-None-Match", J.etag[s])), (h.data && h.hasContent && h.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", h.contentType), x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + ki + "; q=0.01" : "") : h.accepts["*"]);
                for (c in h.headers) x.setRequestHeader(c, h.headers[c]);
                if (h.beforeSend && (h.beforeSend.call(d, x, h) === !1 || 2 === y)) return x.abort();
                b = "abort";
                for (c in { success: 1, error: 1, complete: 1 }) x[c](h[c]);
                if (n = P(xi, h, e, x)) { x.readyState = 1, u && f.trigger("ajaxSend", [x, h]), h.async && h.timeout > 0 && (o = setTimeout(function() { x.abort("timeout") }, h.timeout));
                    try { y = 1, n.send(v, i) } catch (k) {
                        if (!(2 > y)) throw k;
                        i(-1, k) } } else i(-1, "No Transport");
                return x }, getJSON: function(t, e, i) {
                return J.get(t, e, i, "json") }, getScript: function(t, e) {
                return J.get(t, void 0, e, "script") } }), J.each(["get", "post"], function(t, e) { J[e] = function(t, i, n, s) {
                return J.isFunction(i) && (s = s || n, n = i, i = void 0), J.ajax({ url: t, type: e, dataType: s, data: i, success: n }) } }), J.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) { J.fn[e] = function(t) {
                return this.on(e, t) } }), J._evalUrl = function(t) {
            return J.ajax({ url: t, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }, J.fn.extend({ wrapAll: function(t) {
                var e;
                return J.isFunction(t) ? this.each(function(e) { J(this).wrapAll(t.call(this, e)) }) : (this[0] && (e = J(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t }).append(this)), this) }, wrapInner: function(t) {
                return this.each(J.isFunction(t) ? function(e) { J(this).wrapInner(t.call(this, e)) } : function() {
                    var e = J(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t) }) }, wrap: function(t) {
                var e = J.isFunction(t);
                return this.each(function(i) { J(this).wrapAll(e ? t.call(this, i) : t) }) }, unwrap: function() {
                return this.parent().each(function() { J.nodeName(this, "body") || J(this).replaceWith(this.childNodes) }).end() } }), J.expr.filters.hidden = function(t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0 }, J.expr.filters.visible = function(t) {
            return !J.expr.filters.hidden(t) };
        var Ci = /%20/g,
            Ti = /\[\]$/,
            Si = /\r?\n/g,
            Bi = /^(?:submit|button|image|reset|file)$/i,
            Ii = /^(?:input|select|textarea|keygen)/i;
        J.param = function(t, e) {
            var i, n = [],
                s = function(t, e) { e = J.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e) };
            if (void 0 === e && (e = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(t) || t.jquery && !J.isPlainObject(t)) J.each(t, function() { s(this.name, this.value) });
            else
                for (i in t) F(i, t[i], e, s);
            return n.join("&").replace(Ci, "+") }, J.fn.extend({ serialize: function() {
                return J.param(this.serializeArray()) }, serializeArray: function() {
                return this.map(function() {
                    var t = J.prop(this, "elements");
                    return t ? J.makeArray(t) : this }).filter(function() {
                    var t = this.type;
                    return this.name && !J(this).is(":disabled") && Ii.test(this.nodeName) && !Bi.test(t) && (this.checked || !Ce.test(t)) }).map(function(t, e) {
                    var i = J(this).val();
                    return null == i ? null : J.isArray(i) ? J.map(i, function(t) {
                        return { name: e.name, value: t.replace(Si, "\r\n") } }) : { name: e.name, value: i.replace(Si, "\r\n") } }).get() } }), J.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest } catch (t) {} };
        var Oi = 0,
            Ei = {},
            Ai = { 0: 200, 1223: 204 },
            Mi = J.ajaxSettings.xhr();
        t.ActiveXObject && J(t).on("unload", function() {
            for (var t in Ei) Ei[t]() }), G.cors = !!Mi && "withCredentials" in Mi, G.ajax = Mi = !!Mi, J.ajaxTransport(function(t) {
            var e;
            return G.cors || Mi && !t.crossDomain ? { send: function(i, n) {
                    var s, r = t.xhr(),
                        a = ++Oi;
                    if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (s in t.xhrFields) r[s] = t.xhrFields[s];
                    t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (s in i) r.setRequestHeader(s, i[s]);
                    e = function(t) {
                        return function() { e && (delete Ei[a], e = r.onload = r.onerror = null, "abort" === t ? r.abort() : "error" === t ? n(r.status, r.statusText) : n(Ai[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? { text: r.responseText } : void 0, r.getAllResponseHeaders())) } }, r.onload = e(), r.onerror = e("error"), e = Ei[a] = e("abort");
                    try { r.send(t.hasContent && t.data || null) } catch (o) {
                        if (e) throw o } }, abort: function() { e && e() } } : void 0 }), J.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(t) {
                    return J.globalEval(t), t } } }), J.ajaxPrefilter("script", function(t) { void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET") }), J.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, i;
                return { send: function(n, s) { e = J("<script>").prop({ async: !0, charset: t.scriptCharset, src: t.url }).on("load error", i = function(t) { e.remove(), i = null, t && s("error" === t.type ? 404 : 200, t.type) }), K.head.appendChild(e[0]) }, abort: function() { i && i() } } } });
        var Ni = [],
            ji = /(=)\?(?=&|$)|\?\?/;
        J.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
                var t = Ni.pop() || J.expando + "_" + ui++;
                return this[t] = !0, t } }), J.ajaxPrefilter("json jsonp", function(e, i, n) {
            var s, r, a, o = e.jsonp !== !1 && (ji.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ji.test(e.data) && "data");
            return o || "jsonp" === e.dataTypes[0] ? (s = e.jsonpCallback = J.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(ji, "$1" + s) : e.jsonp !== !1 && (e.url += (ci.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function() {
                return a || J.error(s + " was not called"), a[0] }, e.dataTypes[0] = "json", r = t[s], t[s] = function() { a = arguments }, n.always(function() { t[s] = r, e[s] && (e.jsonpCallback = i.jsonpCallback, Ni.push(s)), a && J.isFunction(r) && r(a[0]), a = r = void 0 }), "script") : void 0 }), J.parseHTML = function(t, e, i) {
            if (!t || "string" != typeof t) return null; "boolean" == typeof e && (i = e, e = !1), e = e || K;
            var n = ae.exec(t),
                s = !i && [];
            return n ? [e.createElement(n[1])] : (n = J.buildFragment([t], e, s), s && s.length && J(s).remove(), J.merge([], n.childNodes)) };
        var Li = J.fn.load;
        J.fn.load = function(t, e, i) {
            if ("string" != typeof t && Li) return Li.apply(this, arguments);
            var n, s, r, a = this,
                o = t.indexOf(" ");
            return o >= 0 && (n = J.trim(t.slice(o)), t = t.slice(0, o)), J.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"), a.length > 0 && J.ajax({ url: t, type: s, dataType: "html", data: e }).done(function(t) { r = arguments, a.html(n ? J("<div>").append(J.parseHTML(t)).find(n) : t) }).complete(i && function(t, e) { a.each(i, r || [t.responseText, e, t]) }), this }, J.expr.filters.animated = function(t) {
            return J.grep(J.timers, function(e) {
                return t === e.elem }).length };
        var Pi = t.document.documentElement;
        J.offset = { setOffset: function(t, e, i) {
                var n, s, r, a, o, l, u, c = J.css(t, "position"),
                    h = J(t),
                    d = {}; "static" === c && (t.style.position = "relative"), o = h.offset(), r = J.css(t, "top"), l = J.css(t, "left"), u = ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1, u ? (n = h.position(), a = n.top, s = n.left) : (a = parseFloat(r) || 0, s = parseFloat(l) || 0), J.isFunction(e) && (e = e.call(t, i, o)), null != e.top && (d.top = e.top - o.top + a), null != e.left && (d.left = e.left - o.left + s), "using" in e ? e.using.call(t, d) : h.css(d) } }, J.fn.extend({ offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) { J.offset.setOffset(this, t, e) });
                var e, i, n = this[0],
                    s = { top: 0, left: 0 },
                    r = n && n.ownerDocument;
                return r ? (e = r.documentElement, J.contains(e, n) ? (typeof n.getBoundingClientRect !== Te && (s = n.getBoundingClientRect()), i = z(r), { top: s.top + i.pageYOffset - e.clientTop, left: s.left + i.pageXOffset - e.clientLeft }) : s) : void 0 }, position: function() {
                if (this[0]) {
                    var t, e, i = this[0],
                        n = { top: 0, left: 0 };
                    return "fixed" === J.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), J.nodeName(t[0], "html") || (n = t.offset()), n.top += J.css(t[0], "borderTopWidth", !0), n.left += J.css(t[0], "borderLeftWidth", !0)), { top: e.top - n.top - J.css(i, "marginTop", !0), left: e.left - n.left - J.css(i, "marginLeft", !0) } } }, offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || Pi; t && !J.nodeName(t, "html") && "static" === J.css(t, "position");) t = t.offsetParent;
                    return t || Pi }) } }), J.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, i) {
            var n = "pageYOffset" === i;
            J.fn[e] = function(s) {
                return me(this, function(e, s, r) {
                    var a = z(e);
                    return void 0 === r ? a ? a[i] : e[s] : void(a ? a.scrollTo(n ? t.pageXOffset : r, n ? r : t.pageYOffset) : e[s] = r) }, e, s, arguments.length, null) } }), J.each(["top", "left"], function(t, e) { J.cssHooks[e] = k(G.pixelPosition, function(t, i) {
                return i ? (i = x(t, e), Re.test(i) ? J(t).position()[e] + "px" : i) : void 0 }) }), J.each({ Height: "height", Width: "width" }, function(t, e) { J.each({ padding: "inner" + t, content: e, "": "outer" + t }, function(i, n) { J.fn[n] = function(n, s) {
                    var r = arguments.length && (i || "boolean" != typeof n),
                        a = i || (n === !0 || s === !0 ? "margin" : "border");
                    return me(this, function(e, i, n) {
                        var s;
                        return J.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? J.css(e, i, a) : J.style(e, i, n, a) }, e, r ? n : void 0, r, null) } }) }), J.fn.size = function() {
            return this.length }, J.fn.andSelf = J.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return J });
        var Di = t.jQuery,
            Hi = t.$;
        return J.noConflict = function(e) {
            return t.$ === J && (t.$ = Hi), e && t.jQuery === J && (t.jQuery = Di), J }, typeof e === Te && (t.jQuery = t.$ = J), J
    }),
    /*! Magnific Popup - v1.0.0 - 2015-01-03
     * http://dimsemenov.com/plugins/magnific-popup/
     * Copyright (c) 2015 Dmitry Semenov; */
    ! function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto) }(function(t) {
        var e, i, n, s, r, a, o = "Close",
            l = "BeforeClose",
            u = "AfterClose",
            c = "BeforeAppend",
            h = "MarkupParse",
            d = "Open",
            f = "Change",
            p = "mfp",
            g = "." + p,
            m = "mfp-ready",
            v = "mfp-removing",
            _ = "mfp-prevent-close",
            y = function() {},
            b = !!window.jQuery,
            x = t(window),
            k = function(t, i) { e.ev.on(p + t + g, i) },
            w = function(e, i, n, s) {
                var r = document.createElement("div");
                return r.className = "mfp-" + e, n && (r.innerHTML = n), s ? i && i.appendChild(r) : (r = t(r), i && r.appendTo(i)), r },
            C = function(i, n) { e.ev.triggerHandler(p + i, n), e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(n) ? n : [n])) },
            T = function(i) {
                return i === a && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), a = i), e.currTemplate.closeBtn },
            S = function() { t.magnificPopup.instance || (e = new y, e.init(), t.magnificPopup.instance = e) },
            B = function() {
                var t = document.createElement("p").style,
                    e = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== t.transition) return !0;
                for (; e.length;)
                    if (e.pop() + "Transition" in t) return !0;
                return !1 };
        y.prototype = { constructor: y, init: function() {
                var i = navigator.appVersion;
                e.isIE7 = -1 !== i.indexOf("MSIE 7."), e.isIE8 = -1 !== i.indexOf("MSIE 8."), e.isLowIE = e.isIE7 || e.isIE8, e.isAndroid = /android/gi.test(i), e.isIOS = /iphone|ipad|ipod/gi.test(i), e.supportsTransition = B(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = t(document), e.popupsCache = {} }, open: function(i) {
                var s;
                if (i.isObj === !1) { e.items = i.items.toArray(), e.index = 0;
                    var a, o = i.items;
                    for (s = 0; s < o.length; s++)
                        if (a = o[s], a.parsed && (a = a.el[0]), a === i.el[0]) { e.index = s;
                            break } } else e.items = t.isArray(i.items) ? i.items : [i.items], e.index = i.index || 0;
                if (e.isOpen) return void e.updateItemHTML();
                e.types = [], r = "", e.ev = i.mainEl && i.mainEl.length ? i.mainEl.eq(0) : n, i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, i), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = w("bg").on("click" + g, function() { e.close() }), e.wrap = w("wrap").attr("tabindex", -1).on("click" + g, function(t) { e._checkIfClose(t.target) && e.close() }), e.container = w("container", e.wrap)), e.contentContainer = w("content"), e.st.preloader && (e.preloader = w("preloader", e.container, e.st.tLoading));
                var l = t.magnificPopup.modules;
                for (s = 0; s < l.length; s++) {
                    var u = l[s];
                    u = u.charAt(0).toUpperCase() + u.slice(1), e["init" + u].call(e) }
                C("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (k(h, function(t, e, i, n) { i.close_replaceWith = T(n.type) }), r += " mfp-close-btn-in") : e.wrap.append(T())), e.st.alignTop && (r += " mfp-align-top"), e.wrap.css(e.fixedContentPos ? { overflow: e.st.overflowY, overflowX: "hidden", overflowY: e.st.overflowY } : { top: x.scrollTop(), position: "absolute" }), (e.st.fixedBgPos === !1 || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({ height: n.height(), position: "absolute" }), e.st.enableEscapeKey && n.on("keyup" + g, function(t) { 27 === t.keyCode && e.close() }), x.on("resize" + g, function() { e.updateSize() }), e.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && e.wrap.addClass(r);
                var c = e.wH = x.height(),
                    f = {};
                if (e.fixedContentPos && e._hasScrollBar(c)) {
                    var p = e._getScrollbarSize();
                    p && (f.marginRight = p) }
                e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : f.overflow = "hidden");
                var v = e.st.mainClass;
                return e.isIE7 && (v += " mfp-ie7"), v && e._addClassToMFP(v), e.updateItemHTML(), C("BuildControls"), t("html").css(f), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout(function() { e.content ? (e._addClassToMFP(m), e._setFocus()) : e.bgOverlay.addClass(m), n.on("focusin" + g, e._onFocusIn) }, 16), e.isOpen = !0, e.updateSize(c), C(d), i }, close: function() { e.isOpen && (C(l), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(v), setTimeout(function() { e._close() }, e.st.removalDelay)) : e._close()) }, _close: function() { C(o);
                var i = v + " " + m + " ";
                if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), e._removeClassFromMFP(i), e.fixedContentPos) {
                    var s = { marginRight: "" };
                    e.isIE7 ? t("body, html").css("overflow", "") : s.overflow = "", t("html").css(s) }
                n.off("keyup" + g + " focusin" + g), e.ev.off(g), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && e.currTemplate[e.currItem.type] !== !0 || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, C(u) }, updateSize: function(t) {
                if (e.isIOS) {
                    var i = document.documentElement.clientWidth / window.innerWidth,
                        n = window.innerHeight * i;
                    e.wrap.css("height", n), e.wH = n } else e.wH = t || x.height();
                e.fixedContentPos || e.wrap.css("height", e.wH), C("Resize") }, updateItemHTML: function() {
                var i = e.items[e.index];
                e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index));
                var n = i.type;
                if (C("BeforeChange", [e.currItem ? e.currItem.type : "", n]), e.currItem = i, !e.currTemplate[n]) {
                    var r = e.st[n] ? e.st[n].markup : !1;
                    C("FirstMarkupParse", r), e.currTemplate[n] = r ? t(r) : !0 }
                s && s !== i.type && e.container.removeClass("mfp-" + s + "-holder");
                var a = e["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, e.currTemplate[n]);
                e.appendContent(a, n), i.preloaded = !0, C(f, i), s = i.type, e.container.prepend(e.contentContainer), C("AfterChange") }, appendContent: function(t, i) { e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && e.currTemplate[i] === !0 ? e.content.find(".mfp-close").length || e.content.append(T()) : e.content = t : e.content = "", C(c), e.container.addClass("mfp-" + i + "-holder"), e.contentContainer.append(e.content) }, parseEl: function(i) {
                var n, s = e.items[i];
                if (s.tagName ? s = { el: t(s) } : (n = s.type, s = { data: s, src: s.src }), s.el) {
                    for (var r = e.types, a = 0; a < r.length; a++)
                        if (s.el.hasClass("mfp-" + r[a])) { n = r[a];
                            break }
                    s.src = s.el.attr("data-mfp-src"), s.src || (s.src = s.el.attr("href")) }
                return s.type = n || e.st.type || "inline", s.index = i, s.parsed = !0, e.items[i] = s, C("ElementParse", s), e.items[i] }, addGroup: function(t, i) {
                var n = function(n) { n.mfpEl = this, e._openClick(n, t, i) };
                i || (i = {});
                var s = "click.magnificPopup";
                i.mainEl = t, i.items ? (i.isObj = !0, t.off(s).on(s, n)) : (i.isObj = !1, i.delegate ? t.off(s).on(s, i.delegate, n) : (i.items = t, t.off(s).on(s, n))) }, _openClick: function(i, n, s) {
                var r = void 0 !== s.midClick ? s.midClick : t.magnificPopup.defaults.midClick;
                if (r || 2 !== i.which && !i.ctrlKey && !i.metaKey) {
                    var a = void 0 !== s.disableOn ? s.disableOn : t.magnificPopup.defaults.disableOn;
                    if (a)
                        if (t.isFunction(a)) {
                            if (!a.call(e)) return !0 } else if (x.width() < a) return !0;
                    i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()), s.el = t(i.mfpEl), s.delegate && (s.items = n.find(s.delegate)), e.open(s) } }, updateStatus: function(t, n) {
                if (e.preloader) { i !== t && e.container.removeClass("mfp-s-" + i), n || "loading" !== t || (n = e.st.tLoading);
                    var s = { status: t, text: n };
                    C("UpdateStatus", s), t = s.status, n = s.text, e.preloader.html(n), e.preloader.find("a").on("click", function(t) { t.stopImmediatePropagation() }), e.container.addClass("mfp-s-" + t), i = t } }, _checkIfClose: function(i) {
                if (!t(i).hasClass(_)) {
                    var n = e.st.closeOnContentClick,
                        s = e.st.closeOnBgClick;
                    if (n && s) return !0;
                    if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0]) return !0;
                    if (i === e.content[0] || t.contains(e.content[0], i)) {
                        if (n) return !0 } else if (s && t.contains(document, i)) return !0;
                    return !1 } }, _addClassToMFP: function(t) { e.bgOverlay.addClass(t), e.wrap.addClass(t) }, _removeClassFromMFP: function(t) { this.bgOverlay.removeClass(t), e.wrap.removeClass(t) }, _hasScrollBar: function(t) {
                return (e.isIE7 ? n.height() : document.body.scrollHeight) > (t || x.height()) }, _setFocus: function() {
                (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus() }, _onFocusIn: function(i) {
                return i.target === e.wrap[0] || t.contains(e.wrap[0], i.target) ? void 0 : (e._setFocus(), !1) }, _parseMarkup: function(e, i, n) {
                var s;
                n.data && (i = t.extend(n.data, i)), C(h, [e, i, n]), t.each(i, function(t, i) {
                    if (void 0 === i || i === !1) return !0;
                    if (s = t.split("_"), s.length > 1) {
                        var n = e.find(g + "-" + s[0]);
                        if (n.length > 0) {
                            var r = s[1]; "replaceWith" === r ? n[0] !== i[0] && n.replaceWith(i) : "img" === r ? n.is("img") ? n.attr("src", i) : n.replaceWith('<img src="' + i + '" class="' + n.attr("class") + '" />') : n.attr(s[1], i) } } else e.find(g + "-" + t).html(i) }) }, _getScrollbarSize: function() {
                if (void 0 === e.scrollbarSize) {
                    var t = document.createElement("div");
                    t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t) }
                return e.scrollbarSize } }, t.magnificPopup = { instance: null, proto: y.prototype, modules: [], open: function(e, i) {
                return S(), e = e ? t.extend(!0, {}, e) : {}, e.isObj = !0, e.index = i || 0, this.instance.open(e) }, close: function() {
                return t.magnificPopup.instance && t.magnificPopup.instance.close() }, registerModule: function(e, i) { i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>', tClose: "Close (Esc)", tLoading: "Loading..." } }, t.fn.magnificPopup = function(i) { S();
            var n = t(this);
            if ("string" == typeof i)
                if ("open" === i) {
                    var s, r = b ? n.data("magnificPopup") : n[0].magnificPopup,
                        a = parseInt(arguments[1], 10) || 0;
                    r.items ? s = r.items[a] : (s = n, r.delegate && (s = s.find(r.delegate)), s = s.eq(a)), e._openClick({ mfpEl: s }, n, r) } else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
            else i = t.extend(!0, {}, i), b ? n.data("magnificPopup", i) : n[0].magnificPopup = i, e.addGroup(n, i);
            return n };
        var I, O, E, A = "inline",
            M = function() { E && (O.after(E.addClass(I)).detach(), E = null) };
        t.magnificPopup.registerModule(A, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function() { e.types.push(A), k(o + "." + A, function() { M() }) }, getInline: function(i, n) {
                    if (M(), i.src) {
                        var s = e.st.inline,
                            r = t(i.src);
                        if (r.length) {
                            var a = r[0].parentNode;
                            a && a.tagName && (O || (I = s.hiddenClass, O = w(I), I = "mfp-" + I), E = r.after(O).detach().removeClass(I)), e.updateStatus("ready") } else e.updateStatus("error", s.tNotFound), r = t("<div>");
                        return i.inlineElement = r, r }
                    return e.updateStatus("ready"), e._parseMarkup(n, {}, i), n } } });
        var N, j = "ajax",
            L = function() { N && t(document.body).removeClass(N) },
            P = function() { L(), e.req && e.req.abort() };
        t.magnificPopup.registerModule(j, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function() { e.types.push(j), N = e.st.ajax.cursor, k(o + "." + j, P), k("BeforeChange." + j, P) }, getAjax: function(i) { N && t(document.body).addClass(N), e.updateStatus("loading");
                    var n = t.extend({ url: i.src, success: function(n, s, r) {
                            var a = { data: n, xhr: r };
                            C("ParseAjax", a), e.appendContent(t(a.data), j), i.finished = !0, L(), e._setFocus(), setTimeout(function() { e.wrap.addClass(m) }, 16), e.updateStatus("ready"), C("AjaxContentAdded") }, error: function() { L(), i.finished = i.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src)) } }, e.st.ajax.settings);
                    return e.req = t.ajax(n), "" } } });
        var D, H = function(i) {
            if (i.data && void 0 !== i.data.title) return i.data.title;
            var n = e.st.image.titleSrc;
            if (n) {
                if (t.isFunction(n)) return n.call(e, i);
                if (i.el) return i.el.attr(n) || "" }
            return "" };
        t.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function() {
                    var i = e.st.image,
                        n = ".image";
                    e.types.push("image"), k(d + n, function() { "image" === e.currItem.type && i.cursor && t(document.body).addClass(i.cursor) }), k(o + n, function() { i.cursor && t(document.body).removeClass(i.cursor), x.off("resize" + g) }), k("Resize" + n, e.resizeImage), e.isLowIE && k("AfterChange", e.resizeImage) }, resizeImage: function() {
                    var t = e.currItem;
                    if (t && t.img && e.st.image.verticalFit) {
                        var i = 0;
                        e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - i) } }, _onImageHasSize: function(t) { t.img && (t.hasSize = !0, D && clearInterval(D), t.isCheckingImgSize = !1, C("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1)) }, findImageSize: function(t) {
                    var i = 0,
                        n = t.img[0],
                        s = function(r) { D && clearInterval(D), D = setInterval(function() {
                                return n.naturalWidth > 0 ? void e._onImageHasSize(t) : (i > 200 && clearInterval(D), i++, void(3 === i ? s(10) : 40 === i ? s(50) : 100 === i && s(500))) }, r) };
                    s(1) }, getImage: function(i, n) {
                    var s = 0,
                        r = function() { i && (i.img[0].complete ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, C("ImageLoadComplete")) : (s++, 200 > s ? setTimeout(r, 100) : a())) },
                        a = function() { i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("error", o.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0) },
                        o = e.st.image,
                        l = n.find(".mfp-img");
                    if (l.length) {
                        var u = document.createElement("img");
                        u.className = "mfp-img", i.el && i.el.find("img").length && (u.alt = i.el.find("img").attr("alt")), i.img = t(u).on("load.mfploader", r).on("error.mfploader", a), u.src = i.src, l.is("img") && (i.img = i.img.clone()), u = i.img[0], u.naturalWidth > 0 ? i.hasSize = !0 : u.width || (i.hasSize = !1) }
                    return e._parseMarkup(n, { title: H(i), img_replaceWith: i.img }, i), e.resizeImage(), i.hasSize ? (D && clearInterval(D), i.loadError ? (n.addClass("mfp-loading"), e.updateStatus("error", o.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), e.updateStatus("ready")), n) : (e.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), e.findImageSize(i)), n) } } });
        var q, F = function() {
            return void 0 === q && (q = void 0 !== document.createElement("p").style.MozTransform), q };
        t.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function(t) {
                    return t.is("img") ? t : t.find("img") } }, proto: { initZoom: function() {
                    var t, i = e.st.zoom,
                        n = ".zoom";
                    if (i.enabled && e.supportsTransition) {
                        var s, r, a = i.duration,
                            u = function(t) {
                                var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    n = "all " + i.duration / 1e3 + "s " + i.easing,
                                    s = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                                    r = "transition";
                                return s["-webkit-" + r] = s["-moz-" + r] = s["-o-" + r] = s[r] = n, e.css(s), e },
                            c = function() { e.content.css("visibility", "visible") };
                        k("BuildControls" + n, function() {
                            if (e._allowZoom()) {
                                if (clearTimeout(s), e.content.css("visibility", "hidden"), t = e._getItemToZoom(), !t) return void c();
                                r = u(t), r.css(e._getOffset()), e.wrap.append(r), s = setTimeout(function() { r.css(e._getOffset(!0)), s = setTimeout(function() { c(), setTimeout(function() { r.remove(), t = r = null, C("ZoomAnimationEnded") }, 16) }, a) }, 16) } }), k(l + n, function() {
                            if (e._allowZoom()) {
                                if (clearTimeout(s), e.st.removalDelay = a, !t) {
                                    if (t = e._getItemToZoom(), !t) return;
                                    r = u(t) }
                                r.css(e._getOffset(!0)), e.wrap.append(r), e.content.css("visibility", "hidden"), setTimeout(function() { r.css(e._getOffset()) }, 16) } }), k(o + n, function() { e._allowZoom() && (c(), r && r.remove(), t = null) }) } }, _allowZoom: function() {
                    return "image" === e.currItem.type }, _getItemToZoom: function() {
                    return e.currItem.hasSize ? e.currItem.img : !1 }, _getOffset: function(i) {
                    var n;
                    n = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem);
                    var s = n.offset(),
                        r = parseInt(n.css("padding-top"), 10),
                        a = parseInt(n.css("padding-bottom"), 10);
                    s.top -= t(window).scrollTop() - r;
                    var o = { width: n.width(), height: (b ? n.innerHeight() : n[0].offsetHeight) - a - r };
                    return F() ? o["-moz-transform"] = o.transform = "translate(" + s.left + "px," + s.top + "px)" : (o.left = s.left, o.top = s.top), o } } });
        var z = "iframe",
            R = "//about:blank",
            W = function(t) {
                if (e.currTemplate[z]) {
                    var i = e.currTemplate[z].find("iframe");
                    i.length && (t || (i[0].src = R), e.isIE8 && i.css("display", t ? "block" : "none")) } };
        t.magnificPopup.registerModule(z, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function() { e.types.push(z), k("BeforeChange", function(t, e, i) { e !== i && (e === z ? W() : i === z && W(!0)) }), k(o + "." + z, function() { W() }) }, getIframe: function(i, n) {
                    var s = i.src,
                        r = e.st.iframe;
                    t.each(r.patterns, function() {
                        return s.indexOf(this.index) > -1 ? (this.id && (s = "string" == typeof this.id ? s.substr(s.lastIndexOf(this.id) + this.id.length, s.length) : this.id.call(this, s)), s = this.src.replace("%id%", s), !1) : void 0 });
                    var a = {};
                    return r.srcAction && (a[r.srcAction] = s), e._parseMarkup(n, a, i), e.updateStatus("ready"), n } } });
        var $ = function(t) {
                var i = e.items.length;
                return t > i - 1 ? t - i : 0 > t ? i + t : t },
            Q = function(t, e, i) {
                return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i) };
        t.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function() {
                    var i = e.st.gallery,
                        s = ".mfp-gallery",
                        a = Boolean(t.fn.mfpFastClick);
                    return e.direction = !0, i && i.enabled ? (r += " mfp-gallery", k(d + s, function() { i.navigateByImgClick && e.wrap.on("click" + s, ".mfp-img", function() {
                            return e.items.length > 1 ? (e.next(), !1) : void 0 }), n.on("keydown" + s, function(t) { 37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next() }) }), k("UpdateStatus" + s, function(t, i) { i.text && (i.text = Q(i.text, e.currItem.index, e.items.length)) }), k(h + s, function(t, n, s, r) {
                        var a = e.items.length;
                        s.counter = a > 1 ? Q(i.tCounter, r.index, a) : "" }), k("BuildControls" + s, function() {
                        if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                            var n = i.arrowMarkup,
                                s = e.arrowLeft = t(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(_),
                                r = e.arrowRight = t(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(_),
                                o = a ? "mfpFastClick" : "click";
                            s[o](function() { e.prev() }), r[o](function() { e.next() }), e.isIE7 && (w("b", s[0], !1, !0), w("a", s[0], !1, !0), w("b", r[0], !1, !0), w("a", r[0], !1, !0)), e.container.append(s.add(r)) } }), k(f + s, function() { e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function() { e.preloadNearbyImages(), e._preloadTimeout = null }, 16) }), void k(o + s, function() { n.off(s), e.wrap.off("click" + s), e.arrowLeft && a && e.arrowLeft.add(e.arrowRight).destroyMfpFastClick(), e.arrowRight = e.arrowLeft = null })) : !1 }, next: function() { e.direction = !0, e.index = $(e.index + 1), e.updateItemHTML() }, prev: function() { e.direction = !1, e.index = $(e.index - 1), e.updateItemHTML() }, goTo: function(t) { e.direction = t >= e.index, e.index = t, e.updateItemHTML() }, preloadNearbyImages: function() {
                    var t, i = e.st.gallery.preload,
                        n = Math.min(i[0], e.items.length),
                        s = Math.min(i[1], e.items.length);
                    for (t = 1; t <= (e.direction ? s : n); t++) e._preloadItem(e.index + t);
                    for (t = 1; t <= (e.direction ? n : s); t++) e._preloadItem(e.index - t) }, _preloadItem: function(i) {
                    if (i = $(i), !e.items[i].preloaded) {
                        var n = e.items[i];
                        n.parsed || (n = e.parseEl(i)), C("LazyLoad", n), "image" === n.type && (n.img = t('<img class="mfp-img" />').on("load.mfploader", function() { n.hasSize = !0 }).on("error.mfploader", function() { n.hasSize = !0, n.loadError = !0, C("LazyLoadError", n) }).attr("src", n.src)), n.preloaded = !0 } } } });
        var U = "retina";
        t.magnificPopup.registerModule(U, { options: { replaceSrc: function(t) {
                        return t.src.replace(/\.\w+$/, function(t) {
                            return "@2x" + t }) }, ratio: 1 }, proto: { initRetina: function() {
                        if (window.devicePixelRatio > 1) {
                            var t = e.st.retina,
                                i = t.ratio;
                            i = isNaN(i) ? i() : i, i > 1 && (k("ImageHasSize." + U, function(t, e) { e.img.css({ "max-width": e.img[0].naturalWidth / i, width: "100%" }) }), k("ElementParse." + U, function(e, n) { n.src = t.replaceSrc(n, i) })) } } } }),
            function() {
                var e = 1e3,
                    i = "ontouchstart" in window,
                    n = function() { x.off("touchmove" + r + " touchend" + r) },
                    s = "mfpFastClick",
                    r = "." + s;
                t.fn.mfpFastClick = function(s) {
                    return t(this).each(function() {
                        var a, o = t(this);
                        if (i) {
                            var l, u, c, h, d, f;
                            o.on("touchstart" + r, function(t) { h = !1, f = 1, d = t.originalEvent ? t.originalEvent.touches[0] : t.touches[0], u = d.clientX, c = d.clientY, x.on("touchmove" + r, function(t) { d = t.originalEvent ? t.originalEvent.touches : t.touches, f = d.length, d = d[0], (Math.abs(d.clientX - u) > 10 || Math.abs(d.clientY - c) > 10) && (h = !0, n()) }).on("touchend" + r, function(t) { n(), h || f > 1 || (a = !0, t.preventDefault(), clearTimeout(l), l = setTimeout(function() { a = !1 }, e), s()) }) }) }
                        o.on("click" + r, function() { a || s() }) }) }, t.fn.destroyMfpFastClick = function() { t(this).off("touchstart" + r + " click" + r), i && x.off("touchmove" + r + " touchend" + r) } }(), S() }), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function(t, e, i, n, s) {
            return jQuery.easing[jQuery.easing.def](t, e, i, n, s) }, easeInQuad: function(t, e, i, n, s) {
            return n * (e /= s) * e + i }, easeOutQuad: function(t, e, i, n, s) {
            return -n * (e /= s) * (e - 2) + i }, easeInOutQuad: function(t, e, i, n, s) {
            return (e /= s / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i }, easeInCubic: function(t, e, i, n, s) {
            return n * (e /= s) * e * e + i }, easeOutCubic: function(t, e, i, n, s) {
            return n * ((e = e / s - 1) * e * e + 1) + i }, easeInOutCubic: function(t, e, i, n, s) {
            return (e /= s / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i }, easeInQuart: function(t, e, i, n, s) {
            return n * (e /= s) * e * e * e + i }, easeOutQuart: function(t, e, i, n, s) {
            return -n * ((e = e / s - 1) * e * e * e - 1) + i }, easeInOutQuart: function(t, e, i, n, s) {
            return (e /= s / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i }, easeInQuint: function(t, e, i, n, s) {
            return n * (e /= s) * e * e * e * e + i }, easeOutQuint: function(t, e, i, n, s) {
            return n * ((e = e / s - 1) * e * e * e * e + 1) + i }, easeInOutQuint: function(t, e, i, n, s) {
            return (e /= s / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i }, easeInSine: function(t, e, i, n, s) {
            return -n * Math.cos(e / s * (Math.PI / 2)) + n + i }, easeOutSine: function(t, e, i, n, s) {
            return n * Math.sin(e / s * (Math.PI / 2)) + i }, easeInOutSine: function(t, e, i, n, s) {
            return -n / 2 * (Math.cos(Math.PI * e / s) - 1) + i }, easeInExpo: function(t, e, i, n, s) {
            return 0 == e ? i : n * Math.pow(2, 10 * (e / s - 1)) + i }, easeOutExpo: function(t, e, i, n, s) {
            return e == s ? i + n : n * (-Math.pow(2, -10 * e / s) + 1) + i }, easeInOutExpo: function(t, e, i, n, s) {
            return 0 == e ? i : e == s ? i + n : (e /= s / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (-Math.pow(2, -10 * --e) + 2) + i }, easeInCirc: function(t, e, i, n, s) {
            return -n * (Math.sqrt(1 - (e /= s) * e) - 1) + i }, easeOutCirc: function(t, e, i, n, s) {
            return n * Math.sqrt(1 - (e = e / s - 1) * e) + i }, easeInOutCirc: function(t, e, i, n, s) {
            return (e /= s / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i }, easeInElastic: function(t, e, i, n, s) {
            var r = 1.70158,
                a = 0,
                o = n;
            if (0 == e) return i;
            if (1 == (e /= s)) return i + n;
            if (a || (a = .3 * s), o < Math.abs(n)) { o = n;
                var r = a / 4 } else var r = a / (2 * Math.PI) * Math.asin(n / o);
            return -(o * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * s - r) * Math.PI / a)) + i }, easeOutElastic: function(t, e, i, n, s) {
            var r = 1.70158,
                a = 0,
                o = n;
            if (0 == e) return i;
            if (1 == (e /= s)) return i + n;
            if (a || (a = .3 * s), o < Math.abs(n)) { o = n;
                var r = a / 4 } else var r = a / (2 * Math.PI) * Math.asin(n / o);
            return o * Math.pow(2, -10 * e) * Math.sin(2 * (e * s - r) * Math.PI / a) + n + i }, easeInOutElastic: function(t, e, i, n, s) {
            var r = 1.70158,
                a = 0,
                o = n;
            if (0 == e) return i;
            if (2 == (e /= s / 2)) return i + n;
            if (a || (a = .3 * s * 1.5), o < Math.abs(n)) { o = n;
                var r = a / 4 } else var r = a / (2 * Math.PI) * Math.asin(n / o);
            return 1 > e ? -.5 * o * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * s - r) * Math.PI / a) + i : o * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * s - r) * Math.PI / a) * .5 + n + i }, easeInBack: function(t, e, i, n, s, r) {
            return void 0 == r && (r = 1.70158), n * (e /= s) * e * ((r + 1) * e - r) + i }, easeOutBack: function(t, e, i, n, s, r) {
            return void 0 == r && (r = 1.70158), n * ((e = e / s - 1) * e * ((r + 1) * e + r) + 1) + i }, easeInOutBack: function(t, e, i, n, s, r) {
            return void 0 == r && (r = 1.70158), (e /= s / 2) < 1 ? n / 2 * e * e * (((r *= 1.525) + 1) * e - r) + i : n / 2 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + i }, easeInBounce: function(t, e, i, n, s) {
            return n - jQuery.easing.easeOutBounce(t, s - e, 0, n, s) + i }, easeOutBounce: function(t, e, i, n, s) {
            return (e /= s) < 1 / 2.75 ? 7.5625 * n * e * e + i : 2 / 2.75 > e ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : 2.5 / 2.75 > e ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i }, easeInOutBounce: function(t, e, i, n, s) {
            return s / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, s) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - s, 0, n, s) + .5 * n + i } }),
    function(t) {
        function e(t) {
            for (var e, i = ["transform", "WebkitTransform", "msTransform", "MozTransform", "OTransform"]; e = i.shift();)
                if ("undefined" != typeof t.style[e]) return e;
            return "transform" }
        var n = 0,
            s = [];
        t.fn.skitter = function(e) {
            return this.each(function() { void 0 == t(this).data("skitter_number") && (t(this).data("skitter_number", n), s.push(new a(this, e, n)), ++n) }) };
        var r = { velocity: 1, interval: 2500, animation: "", numbers: !0, navigation: !0, label: !0, easing_default: "", box_skitter: null, time_interval: null, images_links: null, image_atual: null, link_atual: null, label_atual: null, target_atual: "_self", width_skitter: null, height_skitter: null, image_i: 1, is_animating: !1, is_hover_box_skitter: !1, random_ia: null, show_randomly: !1, thumbs: !1, animateNumberOut: !1, animateNumberOver: !1, animateNumberActive: !1, hideTools: !1, fullscreen: !1, xml: !1, dots: !1, width_label: null, opacity_elements: .75, interval_in_elements: 200, interval_out_elements: 300, onLoad: null, imageSwitched: null, max_number_height: 20, numbers_align: "left", preview: !1, focus: !1, foucs_active: !1, focus_position: "center", controls: !1, controls_position: "center", progressbar: !1, progressbar_css: {}, is_paused: !1, is_blur: !1, is_paused_time: !1, timeStart: 0, elapsedTime: 0, stop_over: !0, enable_navigation_keys: !1, with_animations: [], mouseOverButton: null, mouseOutButton: null, auto_play: !0, labelAnimation: "slideUp", theme: null, structure: '<a href="#" class="prev_button">prev</a><a href="#" class="next_button">next</a><span class="info_slide"></span><div class="container_skitter"><div class="image"><a href=""><img class="image_main" /></a><div class="label_skitter"></div></div></div>' };
        t.skitter = function(e, i, n) { this.box_skitter = t(e), this.timer = null, this.settings = t.extend({}, r, i || {}), this.number_skitter = n, this.setup() };
        var a = t.skitter;
        a.fn = a.prototype = {}, a.fn.extend = t.extend, a.fn.extend({
            setup: function() {
                var e = this;
                if (this.settings.fullscreen) {
                    var i = t(window).width(),
                        n = t(window).height();
                    this.box_skitter.width(i).height(n), this.box_skitter.css({ position: "absolute", top: 0, left: 0, "z-index": 1e3 }), this.settings.stop_over = !1, t("body").css({ overflown: "hidden" }) }
                if (this.settings.width_skitter = parseFloat(this.box_skitter.css("width")), this.settings.height_skitter = parseFloat(this.box_skitter.css("height")), !this.settings.width_skitter || !this.settings.height_skitter) return console.warn("Width or height size is null! - Skitter Slideshow"), !1;
                this.settings.theme && this.box_skitter.addClass("skitter-" + this.settings.theme), this.box_skitter.append(this.settings.structure), this.settings.easing_default = this.getEasing(this.settings.easing), this.settings.velocity >= 2 && (this.settings.velocity = 1.3), this.settings.velocity <= 0 && (this.settings.velocity = 1), this.box_skitter.find(".info_slide").hide(), this.box_skitter.find(".label_skitter").hide(), this.box_skitter.find(".prev_button").hide(), this.box_skitter.find(".next_button").hide(), this.box_skitter.find(".container_skitter").width(this.settings.width_skitter), this.box_skitter.find(".container_skitter").height(this.settings.height_skitter);
                var s = this.settings.width_label ? this.settings.width_label : this.settings.width_skitter;
                this.box_skitter.find(".label_skitter").width(s);
                var r = " image_number_select",
                    a = 0;
                this.settings.images_links = new Array;
                var o = function(t, i, n, s, o) {
                    if (e.settings.images_links.push([i, t, n, s, o]), e.settings.thumbs) {
                        var l = "";
                        l = e.settings.width_skitter > e.settings.height_skitter ? 'height="100"' : 'width="100"', e.box_skitter.find(".info_slide").append('<span class="image_number' + r + '" rel="' + (a - 1) + '" id="image_n_' + a + "_" + e.number_skitter + '"><img src="' + i + '" ' + l + " /></span> ") } else e.box_skitter.find(".info_slide").append('<span class="image_number' + r + '" rel="' + (a - 1) + '" id="image_n_' + a + "_" + e.number_skitter + '">' + a + "</span> ");
                    r = "" };
                if (this.settings.xml ? t.ajax({ type: "GET", url: this.settings.xml, async: !1, dataType: "xml", success: function(e) { t("<ul></ul>");
                            t(e).find("skitter slide").each(function() {++a;
                                var e = t(this).find("link").text() ? t(this).find("link").text() : "#",
                                    i = t(this).find("image").text(),
                                    n = t(this).find("image").attr("type"),
                                    s = t(this).find("label").text(),
                                    r = t(this).find("target").text() ? t(this).find("target").text() : "_self";
                                o(e, i, n, s, r) }) } }) : this.settings.json || this.box_skitter.find("ul li").each(function() {++a;
                        var e = t(this).find("a").length ? t(this).find("a").attr("href") : "#",
                            i = t(this).find("img").attr("src"),
                            n = t(this).find("img").attr("class"),
                            s = t(this).find(".label_text").html(),
                            r = t(this).find("a").length && t(this).find("a").attr("target") ? t(this).find("a").attr("target") : "_self";
                        o(e, i, n, s, r) }), e.settings.thumbs && !e.settings.fullscreen) { e.settings.animateNumberOut = { opacity: .3 }, e.settings.animateNumberOver = { opacity: .5 }, e.settings.animateNumberActive = { opacity: 1 }, e.box_skitter.find(".info_slide").addClass("info_slide_thumb");
                    var l = (a + 1) * e.box_skitter.find(".info_slide_thumb .image_number").width();
                    e.box_skitter.find(".info_slide_thumb").width(l), e.box_skitter.css({ height: e.box_skitter.height() + e.box_skitter.find(".info_slide").height() }), e.box_skitter.append('<div class="container_thumbs"></div>');
                    var u = e.box_skitter.find(".info_slide").clone();
                    e.box_skitter.find(".info_slide").remove(), e.box_skitter.find(".container_thumbs").width(e.settings.width_skitter).append(u);
                    var c = 0,
                        h = this.settings.width_skitter,
                        d = this.settings.height_skitter,
                        f = 0,
                        p = e.box_skitter.find(".info_slide_thumb"),
                        g = 0,
                        m = e.box_skitter.offset().top;
                    if (p.find(".image_number").each(function() { c += t(this).outerWidth() }), p.width(c + "px"), f = p.width(), width_value = this.settings.width_skitter, width_value = h - 100, l > e.settings.width_skitter && e.box_skitter.mousemove(function(t) { g = e.box_skitter.offset().left + 90;
                            var i = t.pageX,
                                n = t.pageY,
                                s = 0;
                            i -= g, n -= m, novo_width = f - width_value, s = -(novo_width * i / width_value), s > 0 && (s = 0), -(f - h) > s && (s = -(f - h)), n > d && p.css({ left: s }) }), e.box_skitter.find(".scroll_thumbs").css({ left: 10 }), l < e.settings.width_skitter) { e.box_skitter.find(".info_slide").width("auto"), e.box_skitter.find(".box_scroll_thumbs").hide();
                        var v = ".info_slide";
                        switch (e.settings.numbers_align) {
                            case "center":
                                var _ = (e.settings.width_skitter - e.box_skitter.find(v).width()) / 2;
                                e.box_skitter.find(v).css({ left: _ });
                                break;
                            case "right":
                                e.box_skitter.find(v).css({ left: "auto", right: "-5px" });
                                break;
                            case "left":
                                e.box_skitter.find(v).css({ left: "0px" }) } } } else {
                    var v = ".info_slide";
                    switch (e.settings.dots && (e.box_skitter.find(".info_slide").addClass("info_slide_dots").removeClass("info_slide"), v = ".info_slide_dots"), e.settings.numbers_align) {
                        case "center":
                            var _ = (e.settings.width_skitter - e.box_skitter.find(v).width()) / 2;
                            e.box_skitter.find(v).css({ left: _ });
                            break;
                        case "right":
                            e.box_skitter.find(v).css({ left: "auto", right: "15px" });
                            break;
                        case "left":
                            e.box_skitter.find(v).css({ left: "15px" }) }
                    e.settings.dots || e.box_skitter.find(".info_slide").height() > 20 && e.box_skitter.find(".info_slide").hide() }
                if (this.box_skitter.find("ul").hide(), this.settings.show_randomly && this.settings.images_links.sort(function() {
                        return Math.random() - .5 }), this.settings.image_atual = this.settings.images_links[0][0], this.settings.link_atual = this.settings.images_links[0][1], this.settings.label_atual = this.settings.images_links[0][3], this.settings.target_atual = this.settings.images_links[0][4], this.settings.images_links.length > 1 && (this.box_skitter.find(".prev_button").click(function() {
                        return 0 == e.settings.is_animating && (e.settings.image_i -= 2, -2 == e.settings.image_i ? e.settings.image_i = e.settings.images_links.length - 2 : -1 == e.settings.image_i && (e.settings.image_i = e.settings.images_links.length - 1), e.jumpToImage(e.settings.image_i)), !1 }), this.box_skitter.find(".next_button").click(function() {
                        return e.jumpToImage(e.settings.image_i), !1 }), e.box_skitter.find(".next_button, .prev_button").bind("mouseover", e.settings.mouseOverButton), e.box_skitter.find(".next_button, .prev_button").bind("mouseleave", e.settings.mouseOutButton), this.box_skitter.find(".image_number").hover(function() {
                        "image_number image_number_select" != t(this).attr("class") && e.settings.animateNumberOver && t(this).stop().animate(e.settings.animateNumberOver, 300)
                    }, function() { "image_number image_number_select" != t(this).attr("class") && e.settings.animateNumberOut && t(this).stop().animate(e.settings.animateNumberOut, 500) }), this.box_skitter.find(".image_number").click(function() {
                        if ("image_number image_number_select" != t(this).attr("class")) {
                            var i = parseInt(t(this).attr("rel"));
                            e.jumpToImage(i) }
                        return !1 }), e.settings.animateNumberOut && this.box_skitter.find(".image_number").css(e.settings.animateNumberOut), e.settings.animateNumberActive && this.box_skitter.find(".image_number:eq(0)").css(e.settings.animateNumberActive), e.settings.preview && e.settings.dots)) {
                    for (var y = t('<div class="preview_slide"><ul></ul></div>'), b = 0; b < this.settings.images_links.length; b++) {
                        var x = t("<li></li>"),
                            k = t("<img />");
                        k.attr("src", this.settings.images_links[b][0]), x.append(k), y.find("ul").append(x) }
                    var w = parseInt(100 * this.settings.images_links.length);
                    y.find("ul").width(w), t(v).append(y), e.box_skitter.find(v).find(".image_number").mouseenter(function() {
                        var i = parseFloat(e.box_skitter.find(v).offset().left),
                            n = parseFloat(t(this).offset().left),
                            s = n - i - 43,
                            r = parseInt(t(this).attr("rel")),
                            a = (e.box_skitter.find(".preview_slide_current img").attr("src"), -(100 * r));
                        e.box_skitter.find(".preview_slide").find("ul").animate({ left: a }, { duration: 200, queue: !1, easing: "easeOutSine" }), e.box_skitter.find(".preview_slide").fadeTo(1, 1).animate({ left: s }, { duration: 200, queue: !1 }) }), e.box_skitter.find(v).mouseleave(function() { t(".preview_slide").animate({ opacity: "hide" }, { duration: 200, queue: !1 }) }) }
                e.settings.focus && e.focusSkitter(), e.settings.controls && e.setControls(), e.settings.progressbar && e.settings.auto_play && e.addProgressBar(), e.settings.hideTools && e.hideTools(), e.settings.enable_navigation_keys && e.enableNavigationKeys(), this.loadImages()
            },
            loadImages: function() {
                var e = this,
                    i = t('<div class="loading">Loading</div>');
                this.box_skitter.append(i);
                var n = this.settings.images_links.length,
                    s = 0;
                t.each(this.settings.images_links, function() {
                    var i = this,
                        r = t('<span class="image_loading"></span>');
                    r.css({ position: "absolute", top: "-9999em" }), e.box_skitter.append(r);
                    var a = new Image;
                    t(a).load(function() {++s, s == n && (e.box_skitter.find(".loading").remove(), e.box_skitter.find(".image_loading").remove(), e.start()) }).error(function() { e.box_skitter.find(".loading, .image_loading, .image_number, .next_button, .prev_button").remove(), e.box_skitter.html('<p style="color:white;background:black;">Error loading images. One or more images were not found.</p>') }).attr("src", i[0]) }) },
            start: function() {
                var e = this,
                    i = !1;
                (this.settings.numbers || this.settings.thumbs) && this.box_skitter.find(".info_slide").fadeIn(500), this.settings.dots && this.box_skitter.find(".info_slide_dots").fadeIn(500), this.settings.label && this.box_skitter.find(".label_skitter").show(), this.settings.navigation && (this.box_skitter.find(".prev_button").fadeIn(500), this.box_skitter.find(".next_button").fadeIn(500)), e.settings.auto_play && e.startTime(), e.windowFocusOut(), e.setLinkAtual(), e.box_skitter.find(".image a img").attr({ src: e.settings.image_atual }), img_link = e.box_skitter.find(".image a"), img_link = e.resizeImage(img_link), img_link.find("img").fadeIn(1500), e.setValueBoxText(), e.showBoxText(), e.settings.auto_play && e.stopOnMouseOver();
                var n = function() { e.settings.stop_over && (i = !0, e.settings.is_hover_box_skitter = !0, e.clearTimer(!0), e.pauseProgressBar()) };
                e.box_skitter.mouseover(n), e.box_skitter.find(".next_button").mouseover(n), e.settings.images_links.length > 1 && !i ? e.settings.auto_play && (e.timer = setTimeout(function() { e.nextImage() }, e.settings.interval)) : e.box_skitter.find(".loading, .image_loading, .image_number, .next_button, .prev_button").remove(), t.isFunction(e.settings.onLoad) && e.settings.onLoad(e) },
            jumpToImage: function(t) { 0 == this.settings.is_animating && (this.settings.elapsedTime = 0, this.box_skitter.find(".box_clone").stop(), this.clearTimer(!0), this.settings.image_i = Math.floor(t), this.box_skitter.find(".image a").attr({ href: this.settings.link_atual }), this.box_skitter.find(".image_main").attr({ src: this.settings.image_atual }), this.box_skitter.find(".box_clone").remove(), this.nextImage()) },
            nextImage: function() {
                var t = this;
                if (animations_functions = ["cube", "cubeRandom", "block", "cubeStop", "cubeStopRandom", "cubeHide", "cubeSize", "horizontal", "showBars", "showBarsRandom", "tube", "fade", "fadeFour", "paralell", "blind", "blindHeight", "blindWidth", "directionTop", "directionBottom", "directionRight", "directionLeft", "cubeSpread", "glassCube", "glassBlock", "circles", "circlesInside", "circlesRotate", "cubeShow", "upBars", "downBars", "hideBars", "swapBars", "swapBarsBack", "swapBlocks", "cut"], t.settings.progressbar && t.hideProgressBar(), animation_type = "" == this.settings.animation && this.settings.images_links[this.settings.image_i][2] ? this.settings.images_links[this.settings.image_i][2] : "" == this.settings.animation ? "default" : this.settings.animation, "randomSmart" == animation_type) this.settings.random_ia || (animations_functions.sort(function() {
                    return .5 - Math.random() }), this.settings.random_ia = animations_functions), animation_type = this.settings.random_ia[this.settings.image_i];
                else if ("random" == animation_type) {
                    var e = parseInt(Math.random() * animations_functions.length);
                    animation_type = animations_functions[e] } else if (t.settings.with_animations.length > 0) {
                    var i = t.settings.with_animations.length;
                    void 0 == this.settings._i_animation && (this.settings._i_animation = 0), animation_type = t.settings.with_animations[this.settings._i_animation], ++this.settings._i_animation, this.settings._i_animation >= i && (this.settings._i_animation = 0) }
                switch (animation_type) {
                    case "cube":
                        this.animationCube();
                        break;
                    case "cubeRandom":
                        this.animationCube({ random: !0 });
                        break;
                    case "block":
                        this.animationBlock();
                        break;
                    case "cubeStop":
                        this.animationCubeStop();
                        break;
                    case "cubeStopRandom":
                        this.animationCubeStop({ random: !0 });
                        break;
                    case "cubeHide":
                        this.animationCubeHide();
                        break;
                    case "cubeSize":
                        this.animationCubeSize();
                        break;
                    case "horizontal":
                        this.animationHorizontal();
                        break;
                    case "showBars":
                        this.animationShowBars();
                        break;
                    case "showBarsRandom":
                        this.animationShowBars({ random: !0 });
                        break;
                    case "tube":
                        this.animationTube();
                        break;
                    case "fade":
                        this.animationFade();
                        break;
                    case "fadeFour":
                        this.animationFadeFour();
                        break;
                    case "paralell":
                        this.animationParalell();
                        break;
                    case "blind":
                        this.animationBlind();
                        break;
                    case "blindHeight":
                        this.animationBlindDimension({ height: !0 });
                        break;
                    case "blindWidth":
                        this.animationBlindDimension({ height: !1, time_animate: 400, delay: 50 });
                        break;
                    case "directionTop":
                        this.animationDirection({ direction: "top" });
                        break;
                    case "directionBottom":
                        this.animationDirection({ direction: "bottom" });
                        break;
                    case "directionRight":
                        this.animationDirection({ direction: "right", total: 5 });
                        break;
                    case "directionLeft":
                        this.animationDirection({ direction: "left", total: 5 });
                        break;
                    case "cubeSpread":
                        this.animationCubeSpread();
                        break;
                    case "cubeJelly":
                        this.animationCubeJelly();
                        break;
                    case "glassCube":
                        this.animationGlassCube();
                        break;
                    case "glassBlock":
                        this.animationGlassBlock();
                        break;
                    case "circles":
                        this.animationCircles();
                        break;
                    case "circlesInside":
                        this.animationCirclesInside();
                        break;
                    case "circlesRotate":
                        this.animationCirclesRotate();
                        break;
                    case "cubeShow":
                        this.animationCubeShow();
                        break;
                    case "upBars":
                        this.animationDirectionBars({ direction: "top" });
                        break;
                    case "downBars":
                        this.animationDirectionBars({ direction: "bottom" });
                        break;
                    case "hideBars":
                        this.animationHideBars();
                        break;
                    case "swapBars":
                        this.animationSwapBars();
                        break;
                    case "swapBarsBack":
                        this.animationSwapBars({ easing: "easeOutBack" });
                        break;
                    case "swapBlocks":
                        this.animationSwapBlocks();
                        break;
                    case "cut":
                        this.animationCut();
                        break;
                    default:
                        this.animationTube() } },
            animationCube: function(e) {
                var n = this,
                    e = t.extend({}, { random: !1 }, e || {});
                this.settings.is_animating = !0;
                var s = "" == this.settings.easing_default ? "easeOutExpo" : this.settings.easing_default,
                    r = 700 / this.settings.velocity;
                this.setActualLevel();
                var a = Math.ceil(this.settings.width_skitter / (this.settings.width_skitter / 8)),
                    o = Math.ceil(this.settings.height_skitter / (this.settings.height_skitter / 3)),
                    l = a * o,
                    u = Math.ceil(this.settings.width_skitter / a),
                    c = Math.ceil(this.settings.height_skitter / o),
                    h = this.settings.height_skitter + 200,
                    d = this.settings.height_skitter + 200,
                    f = 0,
                    p = 0;
                for (i = 0; i < l; i++) { h = i % 2 == 0 ? h : -h, d = i % 2 == 0 ? d : -d;
                    var g = h + c * f + 150 * f,
                        m = -n.settings.width_skitter,
                        v = -(c * f),
                        _ = -(u * p),
                        y = c * f,
                        b = u * p,
                        x = this.getBoxClone();
                    x.hide();
                    var k = 50 * i;
                    e.random ? (k = 40 * p, x.css({ left: m + "px", top: g + "px", width: u, height: c })) : (r = 500, x.css({ left: this.settings.width_skitter + u * i, top: this.settings.height_skitter + c * i, width: u, height: c })), this.addBoxClone(x);
                    var w = i == l - 1 ? function() { n.finishAnimation() } : "";
                    x.show().delay(k).animate({ top: y + "px", left: b + "px" }, r, s, w), e.random ? (x.find("img").css({ left: _ + 100, top: v + 50 }), x.find("img").delay(k + r / 2).animate({ left: _, top: v }, 1e3, "easeOutBack")) : (x.find("img").css({ left: _, top: v }), x.find("img").delay(k + r / 2).fadeTo(100, .5).fadeTo(300, 1)), f++, f == o && (f = 0, p++) } },
            animationBlock: function() {
                var t = this;
                this.settings.is_animating = !0;
                var e = "" == this.settings.easing_default ? "easeOutQuad" : this.settings.easing_default,
                    n = 500 / this.settings.velocity;
                this.setActualLevel();
                var s = Math.ceil(this.settings.width_skitter / (this.settings.width_skitter / 15)),
                    r = Math.ceil(this.settings.width_skitter / s),
                    a = this.settings.height_skitter;
                for (i = 0; i < s; i++) {
                    var o = r * i,
                        l = 0,
                        u = this.getBoxClone();
                    u.css({ left: this.settings.width_skitter + 100, top: 0, width: r, height: a }), u.find("img").css({ left: -(r * i) }), this.addBoxClone(u);
                    var c = 80 * i,
                        h = i == s - 1 ? function() { t.finishAnimation() } : "";
                    u.show().delay(c).animate({ top: l, left: o }, n, e), u.find("img").hide().delay(c + 100).animate({ opacity: "show" }, n + 300, e, h) } },
            animationCubeStop: function(e) {
                var n = this,
                    e = t.extend({}, { random: !1 }, e || {});
                this.settings.is_animating = !0;
                var s = "" == this.settings.easing_default ? "easeInQuad" : this.settings.easing_default,
                    r = 300 / this.settings.velocity,
                    a = this.box_skitter.find(".image_main").attr("src");
                this.setActualLevel(), this.setLinkAtual(), this.box_skitter.find(".image_main").attr({ src: this.settings.image_atual });
                var o = Math.ceil(this.settings.width_skitter / (this.settings.width_skitter / 8)),
                    l = Math.ceil(this.settings.height_skitter / (this.settings.width_skitter / 8)),
                    u = o * l,
                    c = Math.ceil(this.settings.width_skitter / o),
                    h = Math.ceil(this.settings.height_skitter / l),
                    d = 0,
                    f = 0,
                    p = 0,
                    g = 0,
                    m = this.settings.width_skitter / 16;
                for (i = 0; i < u; i++) { d = i % 2 == 0 ? d : -d, f = i % 2 == 0 ? f : -f;
                    var v = d + h * p,
                        _ = f + c * g,
                        y = -(h * p),
                        b = -(c * g),
                        x = v - m,
                        k = _ - m,
                        w = this.getBoxCloneImgOld(a);
                    w.css({ left: _ + "px", top: v + "px", width: c, height: h }), w.find("img").css({ left: b, top: y }), this.addBoxClone(w), w.show();
                    var C = 50 * i;
                    e.random && (r = 400 * (n.getRandom(2) + 1) / this.settings.velocity, x = v, k = _, C = Math.ceil(30 * n.getRandom(30))), e.random && i == u - 1 && (r = 1200, C = 900);
                    var T = i == u - 1 ? function() { n.finishAnimation() } : "";
                    w.delay(C).animate({ opacity: "hide", top: x + "px", left: k + "px" }, r, s, T), p++, p == l && (p = 0, g++) } },
            animationCubeHide: function() {
                var t = this;
                this.settings.is_animating = !0;
                var e = "" == this.settings.easing_default ? "easeOutQuad" : this.settings.easing_default,
                    n = 500 / this.settings.velocity,
                    s = this.box_skitter.find(".image_main").attr("src");
                this.setActualLevel(), this.setLinkAtual(), this.box_skitter.find(".image_main").attr({ src: this.settings.image_atual });
                var r = Math.ceil(this.settings.width_skitter / (this.settings.width_skitter / 8)),
                    a = Math.ceil(this.settings.height_skitter / (this.settings.height_skitter / 3)),
                    o = r * a,
                    l = Math.ceil(this.settings.width_skitter / r),
                    u = Math.ceil(this.settings.height_skitter / a),
                    c = 0,
                    h = 0,
                    d = 0,
                    f = 0;
                for (i = 0; i < o; i++) { c = i % 2 == 0 ? c : -c, h = i % 2 == 0 ? h : -h;
                    var p = c + u * d,
                        g = h + l * f,
                        m = -(u * d),
                        v = -(l * f),
                        _ = this.getBoxCloneImgOld(s);
                    _.css({ left: g + "px", top: p + "px", width: l, height: u }), _.find("img").css({ left: v, top: m }), this.addBoxClone(_), _.show();
                    var y = 50 * i;
                    y = i == o - 1 ? 50 * o : y;
                    var b = i == o - 1 ? function() { t.finishAnimation() } : "";
                    _.delay(y).animate({ opacity: "hide" }, n, e, b), d++, d == a && (d = 0, f++) } },
            animationCubeJelly: function() {
                var t = this;
                this.settings.is_animating = !0;
                var e = "" == this.settings.easing_default ? "easeInBack" : this.settings.easing_default,
                    n = 300 / this.settings.velocity,
                    s = this.box_skitter.find(".image_main").attr("src");
                this.setActualLevel(), this.setLinkAtual(), this.box_skitter.find(".image_main").attr({ src: this.settings.image_atual });
                var r = Math.ceil(this.settings.width_skitter / (this.settings.width_skitter / 8)),
                    a = Math.ceil(this.settings.height_skitter / (this.settings.height_skitter / 3)),
                    o = r * a,
                    l = Math.ceil(this.settings.width_skitter / r),
                    u = Math.ceil(this.settings.height_skitter / a),
                    c = 0,
                    h = 0,
                    d = 0,
                    f = 0,
                    p = -1;
                for (i = 0; i < o; i++) { f % 2 != 0 ? (0 == d && (p = p + a + 1), p--) : (f > 0 && 0 == d && (p += 2), p++), c = i % 2 == 0 ? c : -c, h = i % 2 == 0 ? h : -h;
                    var g = c + u * d,
                        m = h + l * f,
                        v = -(u * d),
                        _ = -(l * f),
                        y = this.getBoxCloneImgOld(s);
                    y.css({ left: m + "px", top: g + "px", width: l, height: u }), y.find("img").css({ left: _, top: v }), this.addBoxClone(y), y.show();
                    var b = 50 * i,
                        x = i == o - 1 ? function() { t.finishAnimation() } : "";
                    y.delay(b).animate({ width: "+=100px", height: "+=100px", top: "-=20px", left: "-=20px", opacity: "hide" }, n, e, x), d++, d == a && (d = 0, f++) } },
            animationCubeSize: function() {
                var t = this;
                this.settings.is_animating = !0;
                var e = "" == this.settings.easing_default ? "easeInOutQuad" : this.settings.easing_default,
                    n = 600 / this.settings.velocity,
                    s = this.box_skitter.find(".image_main").attr("src");
                this.setActualLevel(), this.setLinkAtual(), this.box_skitter.find(".image_main").attr({ src: this.settings.image_atual }); {
                    var r = Math.ceil(this.settings.width_skitter / (this.settings.width_skitter / 8)),
                        a = Math.ceil(this.settings.height_skitter / (this.settings.height_skitter / 3)),
                        o = r * a,
                        l = Math.ceil(this.settings.width_skitter / r),
                        u = Math.ceil(this.settings.height_skitter / a),
                        c = 0,
                        h = 0,
                        d = 0,
                        f = 0;
                    Math.ceil(this.settings.width_skitter / 6) }
                for (i = 0; i < o; i++) { c = i % 2 == 0 ? c : -c, h = i % 2 == 0 ? h : -h;
                    var p = c + u * d,
                        g = h + l * f,
                        m = -(u * d),
                        v = -(l * f),
                        _ = this.getBoxCloneImgOld(s);
                    _.css({ left: g, top: p, width: l, height: u }), _.find("img").css({ left: v, top: m }), this.addBoxClone(_), _.show();
                    var y = 50 * i,
                        b = i == o - 1 ? function() { t.finishAnimation() } : "";
                    _.delay(y).animate({ opacity: "hide", width: "hide", height: "hide", top: p + 1.5 * l, left: g + 1.5 * u }, n, e, b), d++, d == a && (d = 0, f++) } },
            animationHorizontal: function() {
                var t = this;
                this.settings.is_animating = !0;
                var e = "" == this.settings.easing_default ? "easeOutExpo" : this.settings.easing_default,
                    n = 700 / this.settings.velocity;
                this.setActualLevel();
                var s = Math.ceil(this.settings.width_skitter / (this.settings.width_skitter / 7)),
                    r = this.settings.width_skitter,
                    a = Math.ceil(this.settings.height_skitter / s);
                for (i = 0; i < s; i++) {
                    var o = (i % 2 == 0, "" + r),
                        l = i * a,
                        u = this.getBoxClone();
                    u.css({ left: o + "px", top: l + "px", width: r, height: a }), u.find("img").css({ left: 0, top: -l }), this.addBoxClone(u);
                    var c = 90 * i,
                        h = i == s - 1 ? function() { t.finishAnimation() } : "";
                    u.delay(c).animate({ opacity: "show", top: l, left: 0 }, n, e, h) } },
            animationShowBars: function(e) {
                var n = this,
                    e = t.extend({}, { random: !1 }, e || {});
                this.settings.is_animating = !0;
                var s = "" == this.settings.easing_default ? "easeOutQuad" : this.settings.easing_default,
                    r = 400 / this.settings.velocity;
                this.setActualLevel();
                var a = Math.ceil(this.settings.width_skitter / (this.settings.width_skitter / 10)),
                    o = Math.ceil(this.settings.width_skitter / a),
                    l = this.settings.height_skitter;
                for (i = 0; i < a; i++) {
                    var u = o * i,
                        c = 0,
                        h = this.getBoxClone();
                    if (h.css({ left: u, top: c - 50, width: o, height: l }), h.find("img").css({ left: -(o * i), top: 0 }), this.addBoxClone(h), e.random) {
                        var d = this.getRandom(a),
                            f = 50 * d;
                        f = i == a - 1 ? 50 * a : f } else {
                        var f = 70 * i;
                        r -= 2 * i }
                    var p = i == a - 1 ? function() { n.finishAnimation() } : "";
                    h.delay(f).animate({ opacity: "show", top: c + "px", left: u + "px" }, r, s, p) } },
            animationTube: function() {
                var t = this;
                this.settings.is_animating = !0;
                var e = "" == this.settings.easing_default ? "easeOutElastic" : this.settings.easing_default,
                    n = 600 / this.settings.velocity;
                this.setActualLevel();
                var s = Math.ceil(this.settings.width_skitter / (this.settings.width_skitter / 10)),
                    r = Math.ceil(this.settings.width_skitter / s),
                    a = this.settings.height_skitter;
                for (i = 0; i < s; i++) {
                    var o = 0,
                        l = a,
                        u = r * i,
                        c = this.getBoxClone();
                    c.css({ left: u, top: l, height: a, width: r }), c.find("img").css({ left: -u }), this.addBoxClone(c);
                    var h = this.getRandom(s),
                        d = 30 * h,
                        f = i == s - 1 ? function() { t.finishAnimation() } : "";
                    c.show().delay(d).animate({ top: o }, n, e, f) } },
            animationFade: function() {
                var t = this;
                this.settings.is_animating = !0;
                var e = "" == this.settings.easing_default ? "easeOutQuad" : this.settings.easing_default,
                    n = 800 / this.settings.velocity;
                this.setActualLevel();
                var s = this.settings.width_skitter,
                    r = this.settings.height_skitter,
                    a = 2;
                for (i = 0; i < a; i++) {
                    var o = 0,
                        l = 0,
                        u = this.getBoxClone();
                    u.css({ left: l, top: o, width: s, height: r }), this.addBoxClone(u);
                    var c = i == a - 1 ? function() { t.finishAnimation() } : "";
                    u.animate({ opacity: "show", left: 0, top: 0 }, n, e, c) } },
            animationFadeFour: function() {
                var t = this;
                this.settings.is_animating = !0;
                var e = "" == this.settings.easing_default ? "easeOutQuad" : this.settings.easing_default,
                    n = 500 / this.settings.velocity;
                this.setActualLevel();
                var s = this.settings.width_skitter,
                    r = this.settings.height_skitter,
                    a = 4;
                for (i = 0; i < a; i++) {
                    if (0 == i) var o = "-100px",
                        l = "-100px";
                    else if (1 == i) var o = "-100px",
                        l = "100px";
                    else if (2 == i) var o = "100px",
                        l = "-100px";
                    else if (3 == i) var o = "100px",
                        l = "100px";
                    var u = this.getBoxClone();
                    u.css({ left: l, top: o, width: s, height: r }), this.addBoxClone(u);
                    var c = i == a - 1 ? function() { t.finishAnimation() } : "";
                    u.animate({ opacity: "show", left: 0, top: 0 }, n, e, c) } },
            animationParalell: function() {
                var t = this;
                this.settings.is_animating = !0;
                var e = "" == this.settings.easing_default ? "easeOutQuad" : this.settings.easing_default,
                    n = 400 / this.settings.velocity;
                this.setActualLevel();
                var s = Math.ceil(this.settings.width_skitter / (this.settings.width_skitter / 16)),
                    r = Math.ceil(this.settings.width_skitter / s),
                    a = this.settings.height_skitter;
                for (i = 0; i < s; i++) {
                    var o = r * i,
                        l = 0,
                        u = this.getBoxClone();
                    u.css({ left: o, top: l - this.settings.height_skitter, width: r, height: a }), u.find("img").css({ left: -(r * i), top: 0 }), this.addBoxClone(u);
                    var c;
                    i <= s / 2 - 1 ? c = 1400 - 200 * i : i > s / 2 - 1 && (c = 200 * (i - s / 2)), c /= 2.5;
                    var h = i == s - 1 ? function() { t.finishAnimation() } : "";
                    u.delay(c).animate({ top: l + "px", left: o + "px", opacity: "show" }, n, e, h) } },
            animationBlind: function(e) {
                var n = this,
                    e = t.extend({}, { height: !1 }, e || {});
                this.settings.is_animating = !0;
                var s = "" == this.settings.easing_default ? "easeOutQuad" : this.settings.easing_default,
                    r = 400 / this.settings.velocity;
                this.setActualLevel();
                var a = Math.ceil(this.settings.width_skitter / (this.settings.width_skitter / 16)),
                    o = Math.ceil(this.settings.width_skitter / a),
                    l = this.settings.height_skitter;
                for (i = 0; i < a; i++) {
                    var u = o * i,
                        c = 0,
                        h = this.getBoxClone();
                    h.css({ left: u, top: c, width: o, height: l }), h.find("img").css({ left: -(o * i), top: 0 }), this.addBoxClone(h);
                    var d;
                    if (e.height) { i <= a / 2 - 1 ? d = 200 + 200 * i : i > a / 2 - 1 && (d = 200 * (a / 2 - i) + 100 * a);
                        var f = i == a / 2 ? function() { n.finishAnimation() } : "" } else { i <= a / 2 - 1 ? d = 1400 - 200 * i : i > a / 2 - 1 && (d = 200 * (i - a / 2));
                        var f = i == a - 1 ? function() { n.finishAnimation() } : "" }
                    if (d /= 2.5, e.height) { r += 2 * i;
                        var s = "easeOutQuad";
                        h.delay(d).animate({ opacity: "show", top: c + "px", left: u + "px", height: "show" }, r, s, f) } else h.delay(d).animate({ opacity: "show", top: c + "px", left: u + "px", width: "show" }, r, s, f) } },
            animationBlindDimension: function(e) {
                var n = this,
                    e = t.extend({}, { height: !0, time_animate: 500, delay: 100 }, e || {});
                this.settings.is_animating = !0;
                var s = "" == this.settings.easing_default ? "easeOutQuad" : this.settings.easing_default,
                    r = e.time_animate / this.settings.velocity;
                this.setActualLevel();
                var a = Math.ceil(this.settings.width_skitter / (this.settings.width_skitter / 16)),
                    o = Math.ceil(this.settings.width_skitter / a),
                    l = this.settings.height_skitter;
                for (i = 0; i < a; i++) {
                    var u = o * i,
                        c = 0,
                        h = this.getBoxClone();
                    h.css({ left: u, top: c, width: o, height: l }), h.find("img").css({ left: -(o * i), top: 0 }), this.addBoxClone(h);
                    var d = e.delay * i,
                        f = i == a - 1 ? function() { n.finishAnimation() } : "";
                    if (e.height) {
                        var s = "easeOutQuad";
                        h.delay(d).animate({ opacity: "show", top: c + "px", left: u + "px", height: "show" }, r, s, f) } else h.delay(d).animate({ opacity: "show", top: c + "px", left: u + "px", width: "show" }, r, s, f) } },
            animationDirection: function(e) {
                var n = this,
                    e = t.extend({}, { direction: "top", delay_type: "sequence", total: 7 }, e || {});
                this.settings.is_animating = !0;
                var s = "" == this.settings.easing_default ? "easeInOutExpo" : this.settings.easing_default,
                    r = 1200 / this.settings.velocity,
                    a = this.box_skitter.find(".image_main").attr("src");
                this.setActualLevel(), this.setLinkAtual(), this.box_skitter.find(".image_main").attr({ src: this.settings.image_atual }), this.box_skitter.find(".image_main").hide();
                var o = e.total;
                for (i = 0; i < o; i++) {
                    switch (e.direction) { default:
                            case "top":
                            var l = Math.ceil(this.settings.width_skitter / o),
                            u = this.settings.height_skitter,
                            c = 0,
                            h = l * i,
                            d = -u,
                            f = h,
                            p = u,
                            g = h,
                            m = 0,
                            v = h,
                            _ = 0,
                            y = -h;
                        break;
                        case "bottom":
                                var l = Math.ceil(this.settings.width_skitter / o),
                                u = this.settings.height_skitter,
                                c = 0,
                                h = l * i,
                                d = u,
                                f = h,
                                p = -u,
                                g = h,
                                m = 0,
                                v = h,
                                _ = 0,
                                y = -h;
                            break;
                        case "right":
                                var l = this.settings.width_skitter,
                                u = Math.ceil(this.settings.height_skitter / o),
                                c = u * i,
                                h = 0,
                                d = c,
                                f = l,
                                p = c,
                                g = -f,
                                m = c,
                                v = 0,
                                _ = -c,
                                y = 0;
                            break;
                        case "left":
                                var l = this.settings.width_skitter,
                                u = Math.ceil(this.settings.height_skitter / o),
                                c = u * i,
                                h = 0,
                                d = c,
                                f = -l,
                                p = c,
                                g = -f,
                                m = c,
                                v = 0,
                                _ = -c,
                                y = 0 }
                    switch (e.delay_type) {
                        case "zebra":
                        default:
                            var b = i % 2 == 0 ? 0 : 150;
                            break;
                        case "random":
                            var b = 900 * Math.random();
                            break;
                        case "sequence":
                            var b = 100 * i }
                    var x = this.getBoxCloneImgOld(a);
                    x.find("img").css({ left: y, top: _ }), x.css({ top: c, left: h, width: l, height: u }), this.addBoxClone(x), x.show(), x.delay(b).animate({ top: d, left: f }, r, s);
                    var k = this.getBoxClone();
                    k.find("img").css({ left: y, top: _ }), k.css({ top: p, left: g, width: l, height: u }), this.addBoxClone(k), k.show();
                    var w = i == o - 1 ? function() { n.finishAnimation() } : "";
                    k.delay(b).animate({ top: m, left: v }, r, s, w) } },
            animationCubeSpread: function() {
                var t = this;
                this.settings.is_animating = !0;
                var e = "" == this.settings.easing_default ? "easeOutQuad" : this.settings.easing_default,
                    n = 700 / this.settings.velocity;
                this.setActualLevel();
                var s = Math.ceil(this.settings.width_skitter / (this.settings.width_skitter / 8)),
                    r = Math.ceil(this.settings.height_skitter / (this.settings.width_skitter / 8)),
                    a = s * r,
                    o = Math.ceil(this.settings.width_skitter / s),
                    l = Math.ceil(this.settings.height_skitter / r),
                    u = 0,
                    c = 0,
                    h = 0,
                    d = 0,
                    f = new Array,
                    p = new Array;
                for (i = 0; i < a; i++) { u = i % 2 == 0 ? u : -u, c = i % 2 == 0 ? c : -c;
                    var g = u + l * h,
                        m = c + o * d;
                    f[i] = [g, m], h++, h == r && (h = 0, d++) }
                for (h = 0, d = 0, i = 0; i < a; i++) p[i] = i;
                var p = t.shuffleArray(p);
                for (i = 0; i < a; i++) { u = i % 2 == 0 ? u : -u, c = i % 2 == 0 ? c : -c;
                    var g = u + l * h,
                        m = c + o * d,
                        v = -(l * h),
                        _ = -(o * d),
                        y = g,
                        b = m;
                    g = f[p[i]][0], m = f[p[i]][1];
                    var x = this.getBoxClone();
                    x.css({ left: m + "px", top: g + "px", width: o, height: l }), x.find("img").css({ left: _, top: v }), this.addBoxClone(x);
                    var k = 900 * Math.random();
                    i == a - 1 && (k = 900);
                    var w = i == a - 1 ? function() { t.finishAnimation() } : "";
                    x.delay(k).animate({ opacity: "show", top: y + "px", left: b + "px" }, n, e, w), h++, h == r && (h = 0, d++) } },
            animationGlassCube: function() {
                var t = this;
                this.settings.is_animating = !0;
                var e = "" == this.settings.easing_default ? "easeOutExpo" : this.settings.easing_default,
                    n = 500 / this.settings.velocity;
                this.setActualLevel();
                var s = 2 * Math.ceil(this.settings.width_skitter / (this.settings.width_skitter / 10)),
                    r = 2 * Math.ceil(this.settings.width_skitter / s),
                    a = this.settings.height_skitter / 2,
                    o = 0;
                for (i = 0; i < s; i++) { mod = i % 2 == 0 ? !0 : !1;
                    var l = r * o,
                        u = mod ? -t.settings.height_skitter : t.settings.height_skitter,
                        c = r * o,
                        h = mod ? 0 : a,
                        d = -(r * o),
                        f = mod ? 0 : -a,
                        p = 120 * o,
                        g = this.getBoxClone();
                    g.css({ left: l, top: u, width: r, height: a }), g.find("img").css({ left: d + r / 1.5, top: f }).delay(p).animate({ left: d, top: f }, 1.9 * n, "easeOutQuad"), this.addBoxClone(g);
                    var m = i == s - 1 ? function() { t.finishAnimation() } : "";
                    g.show().delay(p).animate({ top: h, left: c }, n, e, m), i % 2 != 0 && o++ } },
            animationGlassBlock: function() {
                var t = this;
                this.settings.is_animating = !0;
                var e = "" == this.settings.easing_default ? "easeOutExpo" : this.settings.easing_default,
                    n = 700 / this.settings.velocity;
                this.setActualLevel();
                var s = Math.ceil(this.settings.width_skitter / (this.settings.width_skitter / 10)),
                    r = Math.ceil(this.settings.width_skitter / s),
                    a = this.settings.height_skitter;
                for (i = 0; i < s; i++) {
                    var o = r * i,
                        l = 0,
                        u = r * i,
                        c = 0,
                        h = -(r * i),
                        d = 0,
                        f = 100 * i,
                        p = this.getBoxClone();
                    p.css({ left: o, top: l, width: r, height: a }), p.find("img").css({ left: h + r / 1.5, top: d }).delay(f).animate({ left: h, top: d }, 1.1 * n, "easeInOutQuad"), this.addBoxClone(p);
                    var g = i == s - 1 ? function() { t.finishAnimation() } : "";
                    p.delay(f).animate({ top: c, left: u, opacity: "show" }, n, e, g) } },
            animationCircles: function() {
                var t = this;
                this.settings.is_animating = !0;
                var e = "" == this.settings.easing_default ? "easeInQuad" : this.settings.easing_default,
                    n = 500 / this.settings.velocity;
                this.setActualLevel();
                var s = Math.ceil(this.settings.width_skitter / (this.settings.width_skitter / 10)),
                    r = 100,
                    a = Math.sqrt(Math.pow(this.settings.width_skitter, 2) + Math.pow(this.settings.height_skitter, 2)),
                    a = Math.ceil(a);
                for (i = 0; i < s; i++) {
                    var o = t.settings.width_skitter / 2 - r / 2,
                        l = t.settings.height_skitter / 2 - r / 2,
                        u = o,
                        c = l,
                        h = null;
                    h = this.getBoxCloneBackground({ image: t.settings.image_atual, left: o, top: l, width: r, height: r, position: { top: -l, left: -o } }).css3({ "border-radius": a + "px" }), r += 100, this.addBoxClone(h);
                    var d = 70 * i,
                        f = i == s - 1 ? function() { t.finishAnimation() } : "";
                    h.delay(d).animate({ top: c, left: u, opacity: "show" }, n, e, f) } },
            animationCirclesInside: function() {
                var t = this;
                this.settings.is_animating = !0;
                var e = "" == this.settings.easing_default ? "easeInQuad" : this.settings.easing_default,
                    n = 500 / this.settings.velocity,
                    s = this.box_skitter.find(".image_main").attr("src");
                this.setActualLevel(), this.setLinkAtual(), this.box_skitter.find(".image_main").attr({ src: this.settings.image_atual });
                var r = Math.ceil(this.settings.width_skitter / (this.settings.width_skitter / 10)),
                    a = Math.sqrt(Math.pow(this.settings.width_skitter, 2) + Math.pow(this.settings.height_skitter, 2)),
                    a = Math.ceil(a),
                    o = a;
                for (i = 0; i < r; i++) {
                    var l = t.settings.width_skitter / 2 - o / 2,
                        u = t.settings.height_skitter / 2 - o / 2,
                        c = l,
                        h = u,
                        d = null;
                    d = this.getBoxCloneBackground({ image: s, left: l, top: u, width: o, height: o, position: { top: -u, left: -l } }).css3({ "border-radius": a + "px" }), o -= 100, this.addBoxClone(d), d.show();
                    var f = 70 * i,
                        p = i == r - 1 ? function() { t.finishAnimation() } : "";
                    d.delay(f).animate({ top: h, left: c, opacity: "hide" }, n, e, p) } },
            animationCirclesRotate: function() {
                var t = this;
                this.settings.is_animating = !0;
                var e = "" == this.settings.easing_default ? "easeOutQuad" : this.settings.easing_default,
                    n = 500 / this.settings.velocity,
                    s = this.box_skitter.find(".image_main").attr("src");
                this.setActualLevel(), this.setLinkAtual(), this.box_skitter.find(".image_main").attr({ src: this.settings.image_atual });
                var r = Math.ceil(this.settings.width_skitter / (this.settings.width_skitter / 10)),
                    a = Math.sqrt(Math.pow(this.settings.width_skitter, 2) + Math.pow(this.settings.height_skitter, 2)),
                    a = Math.ceil(a),
                    o = a;
                for (i = 0; i < r; i++) {
                    var l = t.settings.width_skitter / 2 - o / 2,
                        u = t.settings.height_skitter / 2 - o / 2,
                        c = l,
                        h = u,
                        d = null;
                    d = this.getBoxCloneImgOld(s), d.css({ left: l, top: u, width: o, height: o }).css3({ "border-radius": a + "px" }), d.find("img").css({ left: -l, top: -u }), o -= 100, this.addBoxClone(d), d.show();
                    var f = 100 * i,
                        p = i == r - 1 ? function() { t.finishAnimation() } : "",
                        g = i % 2 == 0 ? "20deg" : "-20deg";
                    d.delay(f).animate({ top: h, left: c, opacity: "hide", rotate: g }, n, e, p) } },
            animationCubeShow: function() {
                var t = this;
                this.settings.is_animating = !0;
                var e = "" == this.settings.easing_default ? "easeOutQuad" : this.settings.easing_default,
                    n = 400 / this.settings.velocity;
                this.setActualLevel();
                var s = Math.ceil(this.settings.width_skitter / (this.settings.width_skitter / 8)),
                    r = Math.ceil(this.settings.height_skitter / (this.settings.height_skitter / 4)),
                    a = s * r,
                    o = Math.ceil(this.settings.width_skitter / s),
                    l = Math.ceil(this.settings.height_skitter / r),
                    u = 0,
                    c = 0,
                    h = 0,
                    d = 0;
                for (i = 0; i < a; i++) { u = l * h, c = o * d;
                    var f = 30 * i,
                        p = this.getBoxClone();
                    p.css({ left: c, top: u, width: o, height: l }).hide(), p.find("img").css({ left: -c, top: -u }), this.addBoxClone(p);
                    var g = i == a - 1 ? function() { t.finishAnimation() } : "";
                    p.delay(f).animate({ width: "show", height: "show" }, n, e, g), h++, h == r && (h = 0, d++) } },
            animationDirectionBars: function(e) {
                var n = this,
                    e = t.extend({}, { direction: "top" }, e || {});
                this.settings.is_animating = !0;
                var s = "" == this.settings.easing_default ? "easeInOutQuad" : this.settings.easing_default,
                    r = 400 / this.settings.velocity,
                    a = this.box_skitter.find(".image_main").attr("src");
                this.setActualLevel(), this.setLinkAtual(), this.box_skitter.find(".image_main").attr({ src: this.settings.image_atual });
                var o = 12,
                    l = Math.ceil(this.settings.width_skitter / o),
                    u = this.settings.height_skitter,
                    c = "top" == e.direction ? -u : u;
                for (i = 0; i < o; i++) {
                    var h = 0,
                        d = l * i,
                        f = 0,
                        p = -(l * i),
                        g = this.getBoxCloneImgOld(a);
                    g.css({ left: d + "px", top: h + "px", width: l, height: u }), g.find("img").css({ left: p, top: f }), this.addBoxClone(g), g.show();
                    var m = 70 * i,
                        v = i == o - 1 ? function() { n.finishAnimation() } : "";
                    g.delay(m).animate({ top: c }, r, s, v) } },
            animationHideBars: function(e) {
                var n = this,
                    e = t.extend({}, { random: !1 }, e || {});
                this.settings.is_animating = !0;
                var s = "" == this.settings.easing_default ? "easeOutCirc" : this.settings.easing_default,
                    r = 700 / this.settings.velocity,
                    a = this.box_skitter.find(".image_main").attr("src");
                this.setActualLevel(), this.setLinkAtual(), this.box_skitter.find(".image_main").attr({ src: this.settings.image_atual });
                var o = Math.ceil(this.settings.width_skitter / (this.settings.width_skitter / 10)),
                    l = o,
                    u = Math.ceil(this.settings.width_skitter / o),
                    c = this.settings.height_skitter;
                for (i = 0; i < l; i++) {
                    var h = 0,
                        d = u * i,
                        f = 0,
                        p = -(u * i),
                        g = "+=" + u,
                        m = this.getBoxCloneImgOld(a);
                    m.css({ left: 0, top: 0, width: u, height: c }), m.find("img").css({ left: p, top: f });
                    var v = this.getBoxCloneImgOld(a);
                    v.css({ left: d + "px", top: h + "px", width: u, height: c }), v.html(m), this.addBoxClone(v), m.show(), v.show();
                    var _ = 50 * i,
                        y = i == l - 1 ? function() { n.finishAnimation() } : "";
                    m.delay(_).animate({ left: g }, r, s, y) } },
            animationSwapBars: function(e) {
                var n = this,
                    e = t.extend({}, { direction: "top", delay_type: "sequence", total: 7, easing: "easeOutCirc" }, e || {});
                this.settings.is_animating = !0;
                var s = "" == this.settings.easing_default ? e.easing : this.settings.easing_default,
                    r = 500 / this.settings.velocity,
                    a = this.box_skitter.find(".image_main").attr("src");
                this.setActualLevel(), this.setLinkAtual(), this.box_skitter.find(".image_main").attr({ src: this.settings.image_atual }), this.box_skitter.find(".image_main").hide();
                var o = e.total;
                for (i = 0; i < o; i++) {
                    var l = Math.ceil(this.settings.width_skitter / o),
                        u = this.settings.height_skitter,
                        c = l * i,
                        h = -c;
                    switch (e.delay_type) {
                        case "zebra":
                        default:
                            var d = i % 2 == 0 ? 0 : 150;
                            break;
                        case "random":
                            var d = 900 * Math.random();
                            break;
                        case "sequence":
                            var d = 100 * i }
                    var f = this.getBoxCloneImgOld(a);
                    f.find("img").css({ left: h, top: 0 }), f.css({ top: 0, left: 0, width: l, height: u });
                    var p = this.getBoxClone();
                    p.find("img").css({ left: h, top: 0 }), p.css({ top: 0, left: -l, width: l, height: u });
                    var g = this.getBoxClone();
                    g.html("").append(f).append(p), g.css({ top: 0, left: c, width: l, height: u }), this.addBoxClone(g), g.show(), f.show(), p.show();
                    var m = i == o - 1 ? function() { n.finishAnimation() } : "";
                    f.delay(d).animate({ left: l }, r, s), p.delay(d).animate({ left: 0 }, r, s, m) } },
            animationSwapBlocks: function(e) {
                var i = this,
                    e = t.extend({}, { easing_old: "easeInOutQuad", easing_new: "easeOutQuad" }, e || {});
                this.settings.is_animating = !0;
                var n = "" == this.settings.easing_default ? e.easing_old : this.settings.easing_default,
                    s = "" == this.settings.easing_default ? e.easing_new : this.settings.easing_default,
                    r = 800 / this.settings.velocity,
                    a = this.box_skitter.find(".image_main").attr("src");
                this.setActualLevel(), this.setLinkAtual(), this.box_skitter.find(".image_main").attr({ src: this.settings.image_atual }), this.box_skitter.find(".image_main").hide();
                var o = 2,
                    l = this.settings.width_skitter,
                    u = Math.ceil(this.settings.height_skitter / o),
                    c = this.getBoxCloneImgOld(a),
                    h = this.getBoxCloneImgOld(a);
                c.find("img").css({ left: 0, top: 0 }), c.css({ top: 0, left: 0, width: l, height: u }), h.find("img").css({ left: 0, top: -u }), h.css({ top: u, left: 0, width: l, height: u });
                var d = this.getBoxClone(),
                    f = this.getBoxClone();
                d.find("img").css({ left: 0, top: u }), d.css({ top: 0, left: 0, width: l, height: u }), f.find("img").css({ left: 0, top: -(u * o) }), f.css({ top: u, left: 0, width: l, height: u }), this.addBoxClone(d), this.addBoxClone(f), this.addBoxClone(c), this.addBoxClone(h), c.show(), h.show(), d.show(), f.show();
                var p = function() { i.finishAnimation() };
                c.find("img").animate({ top: u }, r, n, function() { c.remove() }), h.find("img").animate({ top: -(u * o) }, r, n, function() { h.remove() }), d.find("img").animate({ top: 0 }, r, s), f.find("img").animate({ top: -u }, r, s, p) },
            animationCut: function(e) {
                var i = this,
                    e = t.extend({}, { easing_old: "easeInOutExpo", easing_new: "easeInOutExpo" }, e || {});
                this.settings.is_animating = !0;
                var n = "" == this.settings.easing_default ? e.easing_old : this.settings.easing_default,
                    s = "" == this.settings.easing_default ? e.easing_new : this.settings.easing_default,
                    r = 900 / this.settings.velocity,
                    a = this.box_skitter.find(".image_main").attr("src");
                this.setActualLevel(), this.setLinkAtual(), this.box_skitter.find(".image_main").attr({ src: this.settings.image_atual }), this.box_skitter.find(".image_main").hide();
                var o = 2,
                    l = this.settings.width_skitter,
                    u = Math.ceil(this.settings.height_skitter / o),
                    c = this.getBoxCloneImgOld(a),
                    h = this.getBoxCloneImgOld(a);
                c.find("img").css({ left: 0, top: 0 }), c.css({ top: 0, left: 0, width: l, height: u }), h.find("img").css({ left: 0, top: -u }), h.css({ top: u, left: 0, width: l, height: u });
                var d = this.getBoxClone(),
                    f = this.getBoxClone();
                d.find("img").css({ left: 0, top: 0 }), d.css({ top: 0, left: l, width: l, height: u }), f.find("img").css({ left: 0, top: -u }), f.css({ top: u, left: -l, width: l, height: u }), this.addBoxClone(d), this.addBoxClone(f), this.addBoxClone(c), this.addBoxClone(h), c.show(), h.show(), d.show(), f.show();
                var p = function() { i.finishAnimation() };
                c.animate({ left: -l }, r, n, function() { c.remove() }), h.animate({ left: l }, r, n, function() { h.remove() }), d.animate({ left: 0 }, r, s), f.animate({ left: 0 }, r, s, p)
            },
            finishAnimation: function() {
                var t = this;
                this.box_skitter.find(".image_main").show(), this.showBoxText(), this.settings.is_animating = !1, this.box_skitter.find(".image_main").attr({ src: this.settings.image_atual }), this.box_skitter.find(".image a").attr({ href: this.settings.link_atual }), this.settings.is_hover_box_skitter || this.settings.is_paused || this.settings.is_blur || (this.timer = setTimeout(function() { t.completeMove() }, this.settings.interval)), t.startTime() },
            completeMove: function() { this.clearTimer(!0), this.box_skitter.find(".box_clone").remove(), this.settings.is_paused || this.settings.is_blur || this.nextImage() },
            setActualLevel: function() { t.isFunction(this.settings.imageSwitched) && this.settings.imageSwitched(this.settings.image_i, this), this.setImageLink(), this.addClassNumber(), this.hideBoxText(), this.increasingImage() },
            setImageLink: function() {
                var t = this.settings.images_links[this.settings.image_i][0],
                    e = this.settings.images_links[this.settings.image_i][1],
                    i = this.settings.images_links[this.settings.image_i][3],
                    n = this.settings.images_links[this.settings.image_i][4];
                this.settings.image_atual = t, this.settings.link_atual = e, this.settings.label_atual = i, this.settings.target_atual = n },
            addClassNumber: function() {
                var e = this;
                this.box_skitter.find(".image_number_select").removeClass("image_number_select"), t("#image_n_" + (this.settings.image_i + 1) + "_" + e.number_skitter).addClass("image_number_select") },
            increasingImage: function() { this.settings.image_i++, this.settings.image_i == this.settings.images_links.length && (this.settings.image_i = 0) },
            getBoxClone: function() {
                if ("#" != this.settings.link_atual) {
                    var e = t('<a href="' + this.settings.link_atual + '"><img src="' + this.settings.image_atual + '" /></a>');
                    e.attr({ target: this.settings.target_atual }) } else var e = t('<img src="' + this.settings.image_atual + '" />');
                e = this.resizeImage(e);
                var i = t('<div class="box_clone"></div>');
                return i.append(e), i },
            getBoxCloneImgOld: function(e) {
                if ("#" != this.settings.link_atual) {
                    var i = t('<a href="' + this.settings.link_atual + '"><img src="' + e + '" /></a>');
                    i.attr({ target: this.settings.target_atual }) } else var i = t('<img src="' + e + '" />');
                i = this.resizeImage(i);
                var n = t('<div class="box_clone"></div>');
                return n.append(i), n },
            resizeImage: function(t) {
                return this.settings.fullscreen && t.find("img").height(this.settings.height_skitter), t },
            addBoxClone: function(t) { this.box_skitter.find(".container_skitter").append(t) },
            getEasing: function(t) {
                var e = ["easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInSine", "easeOutSine", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeInElastic", "easeOutElastic", "easeInOutElastic", "easeInBack", "easeOutBack", "easeInOutBack", "easeInBounce", "easeOutBounce", "easeInOutBounce"];
                return jQuery.inArray(t, e) > 0 ? t : "" },
            getRandom: function(t) {
                return Math.floor(Math.random() * t) },
            setValueBoxText: function() { this.box_skitter.find(".label_skitter").html(this.settings.label_atual) },
            showBoxText: function() {
                var t = this;
                if (void 0 != this.settings.label_atual && "" != this.settings.label_atual && t.settings.label) switch (t.settings.labelAnimation) {
                    case "slideUp":
                    default:
                        t.box_skitter.find(".label_skitter").slideDown(400);
                        break;
                    case "left":
                    case "right":
                        t.box_skitter.find(".label_skitter").animate({ left: 0 }, 400, "easeInOutQuad");
                        break;
                    case "fixed":
                } },
            hideBoxText: function() {
                var t = this;
                switch (t.settings.labelAnimation) {
                    case "slideUp":
                    default:
                        this.box_skitter.find(".label_skitter").slideUp(200, function() { t.setValueBoxText() });
                        break;
                    case "left":
                    case "right":
                        var e = "left" == t.settings.labelAnimation ? -t.box_skitter.find(".label_skitter").width() : t.box_skitter.find(".label_skitter").width();
                        t.box_skitter.find(".label_skitter").animate({ left: e }, 400, "easeInOutQuad", function() { t.setValueBoxText() });
                        break;
                    case "fixed":
                        t.setValueBoxText() } },
            stopOnMouseOver: function() {
                var t = this;
                t.settings.stop_over ? t.box_skitter.hover(function() { t.settings.stop_over && (t.settings.is_hover_box_skitter = !0), t.settings.is_paused_time || t.pauseTime(), t.setHideTools("hover"), t.clearTimer(!0) }, function() { t.settings.stop_over && (t.settings.is_hover_box_skitter = !1), 0 != t.settings.elapsedTime || t.settings.is_animating || t.settings.is_paused ? t.settings.is_paused || t.resumeTime() : t.startTime(), t.setHideTools("out"), t.clearTimer(!0), !t.settings.is_animating && t.settings.images_links.length > 1 && (t.timer = setTimeout(function() { t.completeMove() }, t.settings.interval - t.settings.elapsedTime), t.box_skitter.find(".image_main").attr({ src: t.settings.image_atual }), t.box_skitter.find(".image a").attr({ href: t.settings.link_atual })) }) : t.box_skitter.hover(function() { t.setHideTools("hover") }, function() { t.setHideTools("out") }) },
            setHideTools: function(t) {
                var e = this,
                    i = e.settings.opacity_elements,
                    n = e.settings.interval_in_elements,
                    s = e.settings.interval_out_elements; "hover" == t ? (e.settings.hideTools && (e.settings.numbers && e.box_skitter.find(".info_slide").show().css({ opacity: 0 }).animate({ opacity: i }, n), e.settings.navigation && e.box_skitter.find(".prev_button, .next_button").show().css({ opacity: 0 }).animate({ opacity: i }, n), e.settings.focus && !e.settings.foucs_active && e.box_skitter.find(".focus_button").stop().show().css({ opacity: 0 }).animate({ opacity: i }, n), e.settings.controls && e.box_skitter.find(".play_pause_button").stop().show().css({ opacity: 0 }).animate({ opacity: i }, n)), !e.settings.focus || e.settings.foucs_active || e.settings.hideTools || e.box_skitter.find(".focus_button").stop().animate({ opacity: 1 }, n), e.settings.controls && !e.settings.hideTools && e.box_skitter.find(".play_pause_button").stop().animate({ opacity: 1 }, n)) : (e.settings.hideTools && (e.settings.numbers && e.box_skitter.find(".info_slide").queue("fx", []).show().css({ opacity: i }).animate({ opacity: 0 }, s), e.settings.navigation && e.box_skitter.find(".prev_button, .next_button").queue("fx", []).show().css({ opacity: i }).animate({ opacity: 0 }, s), e.settings.focus && !e.settings.foucs_active && e.box_skitter.find(".focus_button").stop().css({ opacity: i }).animate({ opacity: 0 }, s), e.settings.controls && e.box_skitter.find(".play_pause_button").stop().css({ opacity: i }).animate({ opacity: 0 }, s)), !e.settings.focus || e.settings.foucs_active || e.settings.hideTools || e.box_skitter.find(".focus_button").stop().animate({ opacity: .3 }, s), e.settings.controls && !e.settings.hideTools && e.box_skitter.find(".play_pause_button").stop().animate({ opacity: .3 }, s)) },
            clearTimer: function() {
                var t = this;
                clearInterval(t.timer) },
            setLinkAtual: function() { "#" != this.settings.link_atual && "" != this.settings.link_atual ? this.box_skitter.find(".image a").attr({ href: this.settings.link_atual, target: this.settings.target_atual }) : this.box_skitter.find(".image a").removeAttr("href") },
            hideTools: function() { this.box_skitter.find(".info_slide").fadeTo(0, 0), this.box_skitter.find(".prev_button").fadeTo(0, 0), this.box_skitter.find(".next_button").fadeTo(0, 0), this.box_skitter.find(".focus_button").fadeTo(0, 0), this.box_skitter.find(".play_pause_button").fadeTo(0, 0) },
            focusSkitter: function() {
                var e = this,
                    i = t('<a href="#" class="focus_button">focus</a>');
                e.box_skitter.append(i);
                var n = (e.settings.width_skitter - i.width()) / 2,
                    s = 0;
                e.settings.controls && (n -= 25), e.settings.controls_position == e.settings.focus_position && (s = i.width() + 5);
                var r = { left: n };
                switch (e.settings.focus_position) {
                    case "leftTop":
                        r = { left: 5 + s, top: 30 };
                        break;
                    case "rightTop":
                        r = { right: 5 + s, top: 30 };
                        break;
                    case "leftBottom":
                        r = { left: 5 + s, bottom: 5, top: "auto" };
                        break;
                    case "rightBottom":
                        r = { right: 5 + s, bottom: 5, top: "auto" } }
                i.css(r).animate({ opacity: .3 }, e.settings.interval_in_elements), t(document).keypress(function(e) {
                    var i = e.keyCode ? e.keyCode : e.which;
                    27 == i && t("#overlay_skitter").trigger("click") });
                var a = t(".box_skitter").offset().top,
                    n = t(".box_skitter").offset().left;
                e.box_skitter.find(".focus_button").click(function() {
                    if (e.settings.foucs_active) return !1;
                    e.settings.foucs_active = !0, t(this).stop().animate({ opacity: 0 }, e.settings.interval_out_elements);
                    var i = t('<div id="overlay_skitter"></div>').height(t(document).height()).hide().fadeTo(e.settings.interval_in_elements, .98),
                        s = (t(window).height() - t(".box_skitter").height()) / 2 + t(document).scrollTop(),
                        r = (t(window).width() - t(".box_skitter").width()) / 2;
                    return e.box_skitter.before('<div id="mark_position"></div>'), t("body").prepend(i), t("body").prepend(e.box_skitter), e.box_skitter.css({ top: a, left: n, position: "absolute", "z-index": 9999 }).animate({ top: s, left: r }, 2e3, "easeOutExpo"), t("#mark_position").width(t(".box_skitter").width()).height(t(".box_skitter").height()).css({ background: "none" }).fadeTo(300, .3), !1 }), t(document).on("click", "#overlay_skitter", function() {
                    return t(this).hasClass("finish_overlay_skitter") ? !1 : (e.settings.foucs_active = !1, t(this).addClass("finish_overlay_skitter"), e.settings.hideTools || e.box_skitter.find(".focus_button").animate({ opacity: .3 }, 200), e.box_skitter.stop().animate({ top: a, left: n }, 200, "easeOutExpo", function() { t("#mark_position").before(e.box_skitter), t(this).css({ position: "relative", top: 0, left: 0 }), t("#mark_position").remove() }), t("#overlay_skitter").fadeTo(e.settings.interval_out_elements, 0, function() { t(this).remove() }), !1) }) },
            setControls: function() {
                var e = this,
                    i = t('<a href="#" class="play_pause_button">pause</a>');
                e.box_skitter.append(i);
                var n = (e.settings.width_skitter - i.width()) / 2;
                e.settings.focus && (n += 25);
                var s = { left: n };
                switch (e.settings.controls_position) {
                    case "leftTop":
                        s = { left: 5, top: 30 };
                        break;
                    case "rightTop":
                        s = { right: 5, top: 30 };
                        break;
                    case "leftBottom":
                        s = { left: 5, bottom: 5, top: "auto" };
                        break;
                    case "rightBottom":
                        s = { right: 5, bottom: 5, top: "auto" } }
                i.css(s).animate({ opacity: .3 }, e.settings.interval_in_elements), i.click(function() {
                    return e.settings.is_paused ? (e.settings.is_animating || e.box_skitter.find(".progressbar").is(":visible") ? e.resumeTime() : e.settings.elapsedTime = 0, e.settings.progressbar || e.resumeTime(), e.settings.is_paused = !1, t(this).html("pause"), t(this).fadeTo(100, .5).fadeTo(100, 1), t(this).removeClass("play_button"), e.settings.stop_over || (e.clearTimer(!0), !e.settings.is_animating && e.settings.images_links.length > 1 && (e.timer = setTimeout(function() { e.completeMove() }, e.settings.interval - e.settings.elapsedTime), e.box_skitter.find(".image_main").attr({ src: e.settings.image_atual }), e.box_skitter.find(".image a").attr({ href: e.settings.link_atual })))) : (t(this).html("play"), t(this).fadeTo(100, .5).fadeTo(100, 1), t(this).addClass("play_button"), e.pauseTime(), e.settings.is_paused = !0, e.clearTimer(!0)), !1 }) },
            objectSize: function(t) {
                var e, i = 0;
                for (e in t) t.hasOwnProperty(e) && i++;
                return i },
            addProgressBar: function() {
                var e = this,
                    i = t('<div class="progressbar"></div>');
                e.box_skitter.append(i), 0 == e.objectSize(e.settings.progressbar_css) && (parseInt(i.css("width")) > 0 ? e.settings.progressbar_css.width = parseInt(i.css("width")) : e.settings.progressbar_css = { width: e.settings.width_skitter, height: 5 }), e.objectSize(e.settings.progressbar_css) > 0 && void 0 == e.settings.progressbar_css.width && (e.settings.progressbar_css.width = e.settings.width_skitter), i.css(e.settings.progressbar_css).hide() },
            startProgressBar: function() {
                var t = this;
                return t.settings.is_hover_box_skitter || t.settings.is_paused || t.settings.is_blur || !t.settings.progressbar ? !1 : void t.box_skitter.find(".progressbar").hide().dequeue().width(t.settings.progressbar_css.width).animate({ width: "show" }, t.settings.interval, "linear") },
            pauseProgressBar: function() {
                var t = this;
                t.settings.is_animating || t.box_skitter.find(".progressbar").stop() },
            resumeProgressBar: function() {
                var t = this;
                return t.settings.is_hover_box_skitter || t.settings.is_paused || !t.settings.progressbar ? !1 : void t.box_skitter.find(".progressbar").dequeue().animate({ width: t.settings.progressbar_css.width }, t.settings.interval - t.settings.elapsedTime, "linear") },
            hideProgressBar: function() {
                var e = this;
                return e.settings.progressbar ? void e.box_skitter.find(".progressbar").stop().fadeOut(300, function() { t(this).width(e.settings.progressbar_css.width) }) : !1 },
            startTime: function() {
                var t = this;
                t.settings.is_paused_time = !1;
                var e = new Date;
                t.settings.elapsedTime = 0, t.settings.timeStart = e.getTime(), t.startProgressBar() },
            pauseTime: function() {
                var t = this;
                if (t.settings.is_paused_time) return !1;
                t.settings.is_paused_time = !0;
                var e = new Date;
                t.settings.elapsedTime += e.getTime() - t.settings.timeStart, t.pauseProgressBar() },
            resumeTime: function() {
                var t = this;
                t.settings.is_paused_time = !1;
                var e = new Date;
                t.settings.timeStart = e.getTime(), t.resumeProgressBar() },
            enableNavigationKeys: function() {
                var e = this;
                t(window).keydown(function(t) { 39 == t.keyCode || 40 == t.keyCode ? e.box_skitter.find(".next_button").trigger("click") : (37 == t.keyCode || 38 == t.keyCode) && e.box_skitter.find(".prev_button").trigger("click") }) },
            getBoxCloneBackground: function(e) {
                var i = t('<div class="box_clone"></div>');
                return i.css({ left: e.left, top: e.top, width: e.width, height: e.height, "background-image": "url(" + e.image + ")", "background-position": e.position.left + "px " + e.position.top + "px" }), i },
            shuffleArray: function(t) {
                for (var e, i = this, n = new Array; t.length > 0;) e = i.randomUnique(0, t.length - 1), n[n.length] = t[e], t.splice(e, 1);
                return n },
            randomUnique: function(t, e) {
                var i;
                do i = Math.random(); while (1 == i);
                return i * (e - t + 1) + t | 0 },
            windowFocusOut: function() {
                var e = this;
                t(window).bind("blur", function() { e.settings.is_blur = !0, e.pauseTime(), e.clearTimer(!0) }), t(window).bind("focus", function() { e.settings.images_links.length > 1 && (e.settings.is_blur = !1, 0 == e.settings.elapsedTime ? e.startTime() : e.resumeTime(), e.settings.elapsedTime <= e.settings.interval && (e.clearTimer(!0), e.timer = setTimeout(function() { e.completeMove() }, e.settings.interval - e.settings.elapsedTime), e.box_skitter.find(".image_main").attr({ src: e.settings.image_atual }), e.box_skitter.find(".image a").attr({ href: e.settings.link_atual }))) }) }
        }), t.fn.css3 = function(t) {
            var e = {},
                i = ["moz", "ms", "o", "webkit"];
            for (var n in t) {
                for (var s = 0; s < i.length; s++) e["-" + i[s] + "-" + n] = t[n];
                e[n] = t[n] }
            return this.css(e), this };
        var o = "deg";
        t.fn.rotate = function(e) {
            var i = t(this).css("transform") || "none";
            if ("undefined" == typeof e) {
                if (i) {
                    var n = i.match(/rotate\(([^)]+)\)/);
                    if (n && n[1]) return n[1] }
                return 0 }
            var n = e.toString().match(/^(-?\d+(\.\d+)?)(.+)?$/);
            return n && (n[3] && (o = n[3]), t(this).css("transform", i.replace(/none|rotate\([^)]*\)/, "") + "rotate(" + n[1] + o + ")")), this }, t.fn.scale = function(e) {
            var i = t(this).css("transform");
            if ("undefined" == typeof e) {
                if (i) {
                    var n = i.match(/scale\(([^)]+)\)/);
                    if (n && n[1]) return n[1] }
                return 1 }
            return t(this).css("transform", i.replace(/none|scale\([^)]*\)/, "") + "scale(" + e + ")"), this };
        var l = t.fx.prototype.cur;
        t.fx.prototype.cur = function() {
            return "rotate" == this.prop ? parseFloat(t(this.elem).rotate()) : "scale" == this.prop ? parseFloat(t(this.elem).scale()) : l.apply(this, arguments) }, t.fx.step.rotate = function(e) { t(e.elem).rotate(e.now + o) }, t.fx.step.scale = function(e) { t(e.elem).scale(e.now) };
        var u = t.fn.animate;
        t.fn.animate = function(t) {
            if ("undefined" != typeof t.rotate) {
                var e = t.rotate.toString().match(/^(([+-]=)?(-?\d+(\.\d+)?))(.+)?$/);
                e && e[5] && (o = e[5]), t.rotate = e[1] }
            return u.apply(this, arguments) };
        var c = null,
            h = t.fn.css;
        t.fn.css = function(i, n) {
            if (null === c && (c = "undefined" != typeof t.cssProps ? t.cssProps : "undefined" != typeof t.props ? t.props : {}), "undefined" == typeof c.transform && ("transform" == i || "object" == typeof i && "undefined" != typeof i.transform) && (c.transform = e(this.get(0))), "transform" != c.transform)
                if ("transform" == i) {
                    if (i = c.transform, "undefined" == typeof n && jQuery.style) return jQuery.style(this.get(0), i) } else "object" == typeof i && "undefined" != typeof i.transform && (i[c.transform] = i.transform, delete i.transform);
            return h.apply(this, arguments) }
    }(jQuery),
    function(t) { t(function() { t.yuga.selflink({ postfix: "_on", selfLinkAreaSelector: ".selflink, .menu, .side-menu" }), t.yuga.rollover({ hoverSelector: ".btn, .allBtn img, .menu img" }), t.yuga.externalLink({ windowOpen: !1 }) }), t.yuga = { Uri: function(e) {
                var i = this;
                this.originalPath = e, this.absolutePath = function() {
                    var t = document.createElement("a");
                    return t.href = e, t.href }();
                var n = { schema: 2, username: 5, password: 6, host: 7, path: 9, query: 10, fragment: 11 },
                    s = /^((\w+):)?(\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/.exec(this.absolutePath);
                for (var r in n) this[r] = s[n[r]];
                this.querys = {}, this.query && t.each(i.query.split("&"), function() {
                    var t = this.split("=");
                    2 == t.length && (i.querys[t[0]] = t[1]) }) }, selflink: function(e) {
                var n = t.extend({ selfLinkAreaSelector: "body", selfLinkClass: "current", parentsLinkClass: "parentsLink", postfix: "_cr", changeImgSelf: !0, changeImgParents: !0 }, e);
                for (ar = n.selfLinkAreaSelector.split(","), i = 0; i < ar.length; i++) {
                    var s = ar[i];
                    t(s + (s ? " " : "") + "a[href]").each(function() {
                        var e = new t.yuga.Uri(this.getAttribute("href")),
                            i = !1;
                        e.absolutePath != location.href && e.absolutePath != location.href + "index.html" && e.absolutePath != location.href + "index.php" && e.absolutePath + "index.html" != location.href && e.absolutePath + "index.php" != location.href || e.fragment ? 0 <= location.href.search(e.absolutePath) && (t(this).parent().addClass(n.parentsLinkClass), i = n.changeImgParents) : (t(this).parent().addClass(n.selfLinkClass), i = n.changeImgSelf), i && t(this).find("img").each(function() { this.originalSrc = t(this).attr("src"), this.currentSrc = this.originalSrc.replace(new RegExp("(" + n.postfix + ")?(.gif|.jpg|.png)$"), n.postfix + "$2"), t(this).attr("src", this.currentSrc) }) }) } }, rollover: function(e) {
                function i() {
                    return Boolean(!this.currentSrc) }

                function n() {
                    return Boolean(this.rolloverSrc) }
                var s = t.extend({ hoverSelector: ".btn, .allbtn img", groupSelector: ".btngroup", postfix: "_on" }, e),
                    r = t(s.hoverSelector).filter(i);
                r.each(function() { this.originalSrc = t(this).attr("src"), this.rolloverSrc = this.originalSrc.replace(new RegExp("(" + s.postfix + ")?(.gif|.jpg|.png)$"), s.postfix + "$2"), this.rolloverImg = new Image, this.rolloverImg.src = this.rolloverSrc });
                var a = t(s.groupSelector).find("img").filter(n);
                r.not(a).hover(function() { t(this).attr("src", this.rolloverSrc) }, function() { t(this).attr("src", this.originalSrc) }), t(s.groupSelector).hover(function() { t(this).find("img").filter(n).each(function() { t(this).attr("src", this.rolloverSrc) }) }, function() { t(this).find("img").filter(n).each(function() { t(this).attr("src", this.originalSrc) }) }) }, externalLink: function(e) {
                var i = t.extend({ windowOpen: !0, externalClass: "externalLink", addIconSrc: "" }, e),
                    n = new t.yuga.Uri(location.href),
                    s = t('a[href^="http://"]').not('a[href^="' + n.schema + "://" + n.host + '/"]');
                i.windowOpen ? s.click(function() {
                    return window.open(this.href, "_blank"), !1 }) : s.attr("target", "_blank"), i.addIconSrc && s.not(":has(img)").after(t('<img src="' + i.addIconSrc + '" class="externalIcon" />')), s.addClass(i.externalClass) } } }(jQuery), $(function() {
        var t = function() { $(".menu-controller-label").on("touchstart touchend", e) },
            e = function(t) { "touchstart" === t.type ? $(this).addClass("tap") : $(this).removeClass("tap") };
        $(t) }), ! function(t, e, i) {
        var n, s = t.getElementsByTagName(e)[0];
        t.getElementById(i) || (n = t.createElement(e), n.id = i, n.src = "//platform.twitter.com/widgets.js", s.parentNode.insertBefore(n, s)) }(document, "script", "twitter-wjs"),
    function(t, e, i) {
        var n, s = t.getElementsByTagName(e)[0];
        t.getElementById(i) || (n = t.createElement(e), n.id = i, n.async = !0, n.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4&appId=533339036690476", s.parentNode.insertBefore(n, s)) }(document, "script", "facebook-jssdk"), window.___gcfg = { lang: "ja" },
    function() {
        var t = document.createElement("script");
        t.type = "text/javascript", t.async = !0, t.src = "https://apis.google.com/js/platform.js";
        var e = document.getElementsByTagName("script")[0];
        e.parentNode.insertBefore(t, e) }(),
    function(t, e, i, n, s, r, a) { t.GoogleAnalyticsObject = s, t[s] = t[s] || function() {
            (t[s].q = t[s].q || []).push(arguments) }, t[s].l = 1 * new Date, r = e.createElement(i), a = e.getElementsByTagName(i)[0], r.async = 1, r.src = n, a.parentNode.insertBefore(r, a) }(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-16318421-3", "auto"), ga("send", "pageview"), $("body.top")[0]) { $(function() { $(".box_skitter").skitter({ animation: "random", theme: "square", numbers_align: "center", dots: !0, preview: !1, focus: !1, focus_position: "leftTop", controls: !1, controls_position: "leftTop", progressbar: !1, enable_navigation_keys: !1 }), boxScale() });
    var $photoBox = $(".box_skitter"),
        adjust = 0,
        boxWidth = 1008 + adjust,
        boxHeight = 480;
    $(window).on("resize", boxScale) }
$("body.games")[0] && $(".ss-list")[0] && $(function() { $(".ss-list").magnificPopup({ delegate: "a", type: "image", closeOnContentClick: !1, closeBtnInside: !1, mainClass: "mfp-with-zoom mfp-img-mobile", image: { verticalFit: !0 }, gallery: { enabled: !0 }, zoom: { enabled: !0, duration: 300, opener: function(t) {
                return t.find("img") } } }) });
