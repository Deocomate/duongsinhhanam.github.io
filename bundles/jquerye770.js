!function (n, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function (n) {
        if (!n.document) throw new Error("jQuery requires a window with a document");
        return t(n)
    } : t(n)
}("undefined" != typeof window ? window : this, function (n, t) {
    "use strict";

    function nu(n, t, i) {
        var r, e, f = (i = i || u).createElement("script");
        if (f.text = n, t) for (r in le) (e = t[r] || t.getAttribute && t.getAttribute(r)) && f.setAttribute(r, e);
        i.head.appendChild(f).parentNode.removeChild(f)
    }

    function et(n) {
        return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? oi[dr.call(n)] || "object" : typeof n
    }

    function ki(n) {
        var t = !!n && "length" in n && n.length, i = et(n);
        return !e(n) && !ft(n) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in n)
    }

    function s(n, t) {
        return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
    }

    function we(n, t) {
        return t ? "\0" === n ? "�" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n
    }

    function di(n, t, r) {
        return e(t) ? i.grep(n, function (n, i) {
            return !!t.call(n, i, n) !== r
        }) : t.nodeType ? i.grep(n, function (n) {
            return n === t !== r
        }) : "string" != typeof t ? i.grep(n, function (n) {
            return -1 < d.call(t, n) !== r
        }) : i.filter(t, n, r)
    }

    function cu(n, t) {
        while ((n = n[t]) && 1 !== n.nodeType) ;
        return n
    }

    function st(n) {
        return n
    }

    function hi(n) {
        throw n;
    }

    function lu(n, t, i, r) {
        var u;
        try {
            n && e(u = n.promise) ? u.call(n).done(t).fail(i) : n && e(u = n.then) ? u.call(n, t, i) : t.apply(void 0, [n].slice(r))
        } catch (n) {
            i.apply(void 0, [n])
        }
    }

    function li() {
        u.removeEventListener("DOMContentLoaded", li);
        n.removeEventListener("load", li);
        i.ready()
    }

    function de(n, t) {
        return t.toUpperCase()
    }

    function k(n) {
        return n.replace(be, "ms-").replace(ke, de)
    }

    function ni() {
        this.expando = i.expando + ni.uid++
    }

    function vu(n, t, i) {
        var u, r;
        if (void 0 === i && 1 === n.nodeType) if (u = "data-" + t.replace(no, "-$&").toLowerCase(), "string" == typeof (i = n.getAttribute(u))) {
            try {
                i = "true" === (r = i) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : ge.test(r) ? JSON.parse(r) : r)
            } catch (n) {
            }
            c.set(n, t, i)
        } else i = void 0;
        return i
    }

    function pu(n, t, r, u) {
        var s, h, c = 20, l = u ? function () {
                return u.cur()
            } : function () {
                return i.css(n, t, "")
            }, o = l(), e = r && r[3] || (i.cssNumber[t] ? "" : "px"),
            f = n.nodeType && (i.cssNumber[t] || "px" !== e && +o) && ti.exec(i.css(n, t));
        if (f && f[3] !== e) {
            for (o /= 2, e = e || f[3], f = +o || 1; c--;) i.style(n, t, f + e), (1 - h) * (1 - (h = l() / o || .5)) <= 0 && (c = 0), f /= h;
            f *= 2;
            i.style(n, t, f + e);
            r = r || []
        }
        return r && (f = +f || +o || 0, s = r[1] ? f + (r[1] + 1) * r[2] : +r[2], u && (u.unit = e, u.start = f, u.end = s)), s
    }

    function lt(n, t) {
        for (var h, f, a, s, c, l, e, o = [], u = 0, v = n.length; u < v; u++) (f = n[u]).style && (h = f.style.display, t ? ("none" === h && (o[u] = r.get(f, "display") || null, o[u] || (f.style.display = "")), "" === f.style.display && ii(f) && (o[u] = (e = c = s = void 0, c = (a = f).ownerDocument, l = a.nodeName, (e = gi[l]) || (s = c.body.appendChild(c.createElement(l)), e = i.css(s, "display"), s.parentNode.removeChild(s), "none" === e && (e = "block"), gi[l] = e)))) : "none" !== h && (o[u] = "none", r.set(f, "display", h)));
        for (u = 0; u < v; u++) null != o[u] && (n[u].style.display = o[u]);
        return n
    }

    function l(n, t) {
        var r;
        return r = "undefined" != typeof n.getElementsByTagName ? n.getElementsByTagName(t || "*") : "undefined" != typeof n.querySelectorAll ? n.querySelectorAll(t || "*") : [], void 0 === t || t && s(n, t) ? i.merge([n], r) : r
    }

    function nr(n, t) {
        for (var i = 0, u = n.length; i < u; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
    }

    function du(n, t, r, u, f) {
        for (var e, o, p, c, w, a, s = t.createDocumentFragment(), y = [], h = 0, b = n.length; h < b; h++) if ((e = n[h]) || 0 === e) if ("object" === et(e)) i.merge(y, e.nodeType ? [e] : e); else if (ku.test(e)) {
            for (o = o || s.appendChild(t.createElement("div")), p = (wu.exec(e) || ["", ""])[1].toLowerCase(), c = v[p] || v._default, o.innerHTML = c[1] + i.htmlPrefilter(e) + c[2], a = c[0]; a--;) o = o.lastChild;
            i.merge(y, o.childNodes);
            (o = s.firstChild).textContent = ""
        } else y.push(t.createTextNode(e));
        for (s.textContent = "", h = 0; e = y[h++];) if (u && -1 < i.inArray(e, u)) f && f.push(e); else if (w = ct(e), o = l(s.appendChild(e), "script"), w && nr(o), r) for (a = 0; e = o[a++];) bu.test(e.type || "") && r.push(e);
        return s
    }

    function at() {
        return !0
    }

    function vt() {
        return !1
    }

    function ir(n, t, r, u, f, e) {
        var o, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof r && (u = u || r, r = void 0), t) ir(n, s, r, u, t[s], e);
            return n
        }
        if (null == u && null == f ? (f = r, u = r = void 0) : null == f && ("string" == typeof r ? (f = u, u = void 0) : (f = u, u = r, r = void 0)), !1 === f) f = vt; else if (!f) return n;
        return 1 === e && (o = f, (f = function (n) {
            return i().off(n), o.apply(this, arguments)
        }).guid = o.guid || (o.guid = i.guid++)), n.each(function () {
            i.event.add(this, t, f, u, r)
        })
    }

    function vi(n, t, u) {
        u ? (r.set(n, t, !1), i.event.add(n, t, {
            namespace: !1, handler: function (n) {
                var f, u = r.get(this, t);
                if (1 & n.isTrigger && this[t]) {
                    if (u) (i.event.special[t] || {}).delegateType && n.stopPropagation(); else if (u = a.call(arguments), r.set(this, t, u), this[t](), f = r.get(this, t), r.set(this, t, !1), u !== f) return n.stopImmediatePropagation(), n.preventDefault(), f
                } else u && (r.set(this, t, i.event.trigger(u[0], u.slice(1), this)), n.stopPropagation(), n.isImmediatePropagationStopped = at)
            }
        })) : void 0 === r.get(n, t) && i.event.add(n, t, at)
    }

    function gu(n, t) {
        return s(n, "table") && s(11 !== t.nodeType ? t : t.firstChild, "tr") && i(n).children("tbody")[0] || n
    }

    function fo(n) {
        return n.type = (null !== n.getAttribute("type")) + "/" + n.type, n
    }

    function eo(n) {
        return "true/" === (n.type || "").slice(0, 5) ? n.type = n.type.slice(5) : n.removeAttribute("type"), n
    }

    function nf(n, t) {
        var u, o, f, s, h, e;
        if (1 === t.nodeType) {
            if (r.hasData(n) && (e = r.get(n).events)) for (f in r.remove(t, "handle events"), e) for (u = 0, o = e[f].length; u < o; u++) i.event.add(t, f, e[f][u]);
            c.hasData(n) && (s = c.access(n), h = i.extend({}, s), c.set(t, h))
        }
    }

    function yt(n, t, u, o) {
        t = kr(t);
        var a, b, c, v, s, y, h = 0, p = n.length, d = p - 1, w = t[0], k = e(w);
        if (k || 1 < p && "string" == typeof w && !f.checkClone && ro.test(w)) return n.each(function (i) {
            var r = n.eq(i);
            k && (t[0] = w.call(this, i, r.html()));
            yt(r, t, u, o)
        });
        if (p && (b = (a = du(t, n[0].ownerDocument, !1, n, o)).firstChild, 1 === a.childNodes.length && (a = b), b || o)) {
            for (v = (c = i.map(l(a, "script"), fo)).length; h < p; h++) s = a, h !== d && (s = i.clone(s, !0, !0), v && i.merge(c, l(s, "script"))), u.call(n[h], s, h);
            if (v) for (y = c[c.length - 1].ownerDocument, i.map(c, eo), h = 0; h < v; h++) s = c[h], bu.test(s.type || "") && !r.access(s, "globalEval") && i.contains(y, s) && (s.src && "module" !== (s.type || "").toLowerCase() ? i._evalUrl && !s.noModule && i._evalUrl(s.src, {nonce: s.nonce || s.getAttribute("nonce")}, y) : nu(s.textContent.replace(uo, ""), s, y))
        }
        return n
    }

    function tf(n, t, r) {
        for (var u, e = t ? i.filter(t, n) : n, f = 0; null != (u = e[f]); f++) r || 1 !== u.nodeType || i.cleanData(l(u)), u.parentNode && (r && ct(u) && nr(l(u, "script")), u.parentNode.removeChild(u));
        return n
    }

    function ui(n, t, r) {
        var o, s, h, u, c = ur.test(t), e = n.style;
        return (r = r || yi(n)) && (u = r.getPropertyValue(t) || r[t], c && u && (u = u.replace(gt, "$1") || void 0), "" !== u || ct(n) || (u = i.style(n, t)), !f.pixelBoxStyles() && rr.test(u) && oo.test(t) && (o = e.width, s = e.minWidth, h = e.maxWidth, e.minWidth = e.maxWidth = e.width = u, u = r.width, e.width = o, e.minWidth = s, e.maxWidth = h)), void 0 !== u ? u + "" : u
    }

    function uf(n, t) {
        return {
            get: function () {
                if (!n()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    function fr(n) {
        var t = i.cssProps[n] || of[n];
        return t || (n in ef ? n : of[n] = function (n) {
            for (var i = n[0].toUpperCase() + n.slice(1), t = ff.length; t--;) if ((n = ff[t] + i) in ef) return n
        }(n) || n)
    }

    function hf(n, t, i) {
        var r = ti.exec(t);
        return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t
    }

    function er(n, t, r, u, f, e) {
        var o = "width" === t ? 1 : 0, h = 0, s = 0, c = 0;
        if (r === (u ? "border" : "content")) return 0;
        for (; o < 4; o += 2) "margin" === r && (c += i.css(n, r + nt[o], !0, f)), u ? ("content" === r && (s -= i.css(n, "padding" + nt[o], !0, f)), "margin" !== r && (s -= i.css(n, "border" + nt[o] + "Width", !0, f))) : (s += i.css(n, "padding" + nt[o], !0, f), "padding" !== r ? s += i.css(n, "border" + nt[o] + "Width", !0, f) : h += i.css(n, "border" + nt[o] + "Width", !0, f));
        return !u && 0 <= e && (s += Math.max(0, Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - e - s - h - .5)) || 0), s + c
    }

    function cf(n, t, r) {
        var e = yi(n), o = (!f.boxSizingReliable() || r) && "border-box" === i.css(n, "boxSizing", !1, e), h = o,
            u = ui(n, t, e), c = "offset" + t[0].toUpperCase() + t.slice(1);
        if (rr.test(u)) {
            if (!r) return u;
            u = "auto"
        }
        return (!f.boxSizingReliable() && o || !f.reliableTrDimensions() && s(n, "tr") || "auto" === u || !parseFloat(u) && "inline" === i.css(n, "display", !1, e)) && n.getClientRects().length && (o = "border-box" === i.css(n, "boxSizing", !1, e), (h = c in n) && (u = n[c])), (u = parseFloat(u) || 0) + er(n, t, r || (o ? "border" : "content"), h, e, u) + "px"
    }

    function p(n, t, i, r, u) {
        return new p.prototype.init(n, t, i, r, u)
    }

    function or() {
        pi && (!1 === u.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(or) : n.setTimeout(or, i.fx.interval), i.fx.tick())
    }

    function yf() {
        return n.setTimeout(function () {
            pt = void 0
        }), pt = Date.now()
    }

    function wi(n, t) {
        var u, r = 0, i = {height: n};
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (u = nt[r])] = i["padding" + u] = n;
        return t && (i.opacity = i.width = n), i
    }

    function pf(n, t, i) {
        for (var u, f = (w.tweeners[t] || []).concat(w.tweeners["*"]), r = 0, e = f.length; r < e; r++) if (u = f[r].call(i, t, n)) return u
    }

    function w(n, t, r) {
        var o, s, h = 0, a = w.prefilters.length, f = i.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (s) return !1;
            for (var o = pt || yf(), t = Math.max(0, u.startTime + u.duration - o), i = 1 - (t / u.duration || 0), r = 0, e = u.tweens.length; r < e; r++) u.tweens[r].run(i);
            return f.notifyWith(n, [u, i, t]), i < 1 && e ? t : (e || f.notifyWith(n, [u, 1, 0]), f.resolveWith(n, [u]), !1)
        }, u = f.promise({
            elem: n,
            props: i.extend({}, t),
            opts: i.extend(!0, {specialEasing: {}, easing: i.easing._default}, r),
            originalProperties: t,
            originalOptions: r,
            startTime: pt || yf(),
            duration: r.duration,
            tweens: [],
            createTween: function (t, r) {
                var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(f), f
            },
            stop: function (t) {
                var i = 0, r = t ? u.tweens.length : 0;
                if (s) return this;
                for (s = !0; i < r; i++) u.tweens[i].run(1);
                return t ? (f.notifyWith(n, [u, 1, 0]), f.resolveWith(n, [u, t])) : f.rejectWith(n, [u, t]), this
            }
        }), c = u.props;
        for (!function (n, t) {
            var r, f, e, u, o;
            for (r in n) if (e = t[f = k(r)], u = n[r], Array.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), (o = i.cssHooks[f]) && "expand" in o) for (r in u = o.expand(u), delete n[f], u) r in n || (n[r] = u[r], t[r] = e); else t[f] = e
        }(c, u.opts.specialEasing); h < a; h++) if (o = w.prefilters[h].call(u, n, c, u.opts)) return e(o.stop) && (i._queueHooks(u.elem, u.opts.queue).stop = o.stop.bind(o)), o;
        return i.map(c, pf, u), e(u.opts.start) && u.opts.start.call(n, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), i.fx.timer(i.extend(l, {
            elem: n,
            anim: u,
            queue: u.opts.queue
        })), u
    }

    function rt(n) {
        return (n.match(y) || []).join(" ")
    }

    function ut(n) {
        return n.getAttribute && n.getAttribute("class") || ""
    }

    function sr(n) {
        return Array.isArray(n) ? n : "string" == typeof n && n.match(y) || []
    }

    function ar(n, t, r, u) {
        var f;
        if (Array.isArray(t)) i.each(t, function (t, i) {
            r || co.test(n) ? u(n, i) : ar(n + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, r, u)
        }); else if (r || "object" !== et(t)) u(n, t); else for (f in t) ar(n + "[" + f + "]", t[f], r, u)
    }

    function re(n) {
        return function (t, i) {
            "string" != typeof t && (i = t, t = "*");
            var r, u = 0, f = t.toLowerCase().match(y) || [];
            if (e(i)) while (r = f[u++]) "+" === r[0] ? (r = r.slice(1) || "*", (n[r] = n[r] || []).unshift(i)) : (n[r] = n[r] || []).push(i)
        }
    }

    function ue(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0, i.each(n[s] || [], function (n, i) {
                var s = i(t, r, u);
                return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s), e(s), !1)
            }), h
        }

        var f = {}, o = n === vr;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }

    function pr(n, t) {
        var r, u, f = i.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
        return u && i.extend(!0, n, u), n
    }

    var h = [], br = Object.getPrototypeOf, a = h.slice, kr = h.flat ? function (n) {
            return h.flat.call(n)
        } : function (n) {
            return h.concat.apply([], n)
        }, ei = h.push, d = h.indexOf, oi = {}, dr = oi.toString, dt = oi.hasOwnProperty, gr = dt.toString,
        ce = gr.call(Object), f = {}, e = function (n) {
            return "function" == typeof n && "number" != typeof n.nodeType && "function" != typeof n.item
        }, ft = function (n) {
            return null != n && n === n.window
        }, u = n.document, le = {type: !0, src: !0, nonce: !0, noModule: !0}, tu = "3.7.1", ae = /HTML$/i,
        i = function (n, t) {
            return new i.fn.init(n, t)
        }, iu, b, si, eu, ou, su, hu, y, au, ci, ht, ii, gi, v, ku, tr, pt, pi, wt, lf, af, vf, wf, bt, bf, kf, df, cr,
        lr, fe, kt, ee, wr, bi, oe, se, he;
    i.fn = i.prototype = {
        jquery: tu, constructor: i, length: 0, toArray: function () {
            return a.call(this)
        }, get: function (n) {
            return null == n ? a.call(this) : n < 0 ? this[n + this.length] : this[n]
        }, pushStack: function (n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this, t
        }, each: function (n) {
            return i.each(this, n)
        }, map: function (n) {
            return this.pushStack(i.map(this, function (t, i) {
                return n.call(t, i, t)
            }))
        }, slice: function () {
            return this.pushStack(a.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, even: function () {
            return this.pushStack(i.grep(this, function (n, t) {
                return (t + 1) % 2
            }))
        }, odd: function () {
            return this.pushStack(i.grep(this, function (n, t) {
                return t % 2
            }))
        }, eq: function (n) {
            var i = this.length, t = +n + (n < 0 ? i : 0);
            return this.pushStack(0 <= t && t < i ? [this[t]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: ei, sort: h.sort, splice: h.splice
    };
    i.extend = i.fn.extend = function () {
        var s, u, f, t, o, c, n = arguments[0] || {}, r = 1, l = arguments.length, h = !1;
        for ("boolean" == typeof n && (h = n, n = arguments[r] || {}, r++), "object" == typeof n || e(n) || (n = {}), r === l && (n = this, r--); r < l; r++) if (null != (s = arguments[r])) for (u in s) t = s[u], "__proto__" !== u && n !== t && (h && t && (i.isPlainObject(t) || (o = Array.isArray(t))) ? (f = n[u], c = o && !Array.isArray(f) ? [] : o || i.isPlainObject(f) ? f : {}, o = !1, n[u] = i.extend(h, c, t)) : void 0 !== t && (n[u] = t));
        return n
    };
    i.extend({
        expando: "jQuery" + (tu + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (n) {
            throw new Error(n);
        }, noop: function () {
        }, isPlainObject: function (n) {
            var t, i;
            return !(!n || "[object Object]" !== dr.call(n)) && (!(t = br(n)) || "function" == typeof (i = dt.call(t, "constructor") && t.constructor) && gr.call(i) === ce)
        }, isEmptyObject: function (n) {
            for (var t in n) return !1;
            return !0
        }, globalEval: function (n, t, i) {
            nu(n, {nonce: t && t.nonce}, i)
        }, each: function (n, t) {
            var r, i = 0;
            if (ki(n)) {
                for (r = n.length; i < r; i++) if (!1 === t.call(n[i], i, n[i])) break
            } else for (i in n) if (!1 === t.call(n[i], i, n[i])) break;
            return n
        }, text: function (n) {
            var r, u = "", f = 0, t = n.nodeType;
            if (!t) while (r = n[f++]) u += i.text(r);
            return 1 === t || 11 === t ? n.textContent : 9 === t ? n.documentElement.textContent : 3 === t || 4 === t ? n.nodeValue : u
        }, makeArray: function (n, t) {
            var r = t || [];
            return null != n && (ki(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : ei.call(r, n)), r
        }, inArray: function (n, t, i) {
            return null == t ? -1 : d.call(t, n, i)
        }, isXMLDoc: function (n) {
            var i = n && n.namespaceURI, t = n && (n.ownerDocument || n).documentElement;
            return !ae.test(i || t && t.nodeName || "HTML")
        }, merge: function (n, t) {
            for (var u = +t.length, i = 0, r = n.length; i < u; i++) n[r++] = t[i];
            return n.length = r, n
        }, grep: function (n, t, i) {
            for (var u = [], r = 0, f = n.length, e = !i; r < f; r++) !t(n[r], r) !== e && u.push(n[r]);
            return u
        }, map: function (n, t, i) {
            var e, u, r = 0, f = [];
            if (ki(n)) for (e = n.length; r < e; r++) null != (u = t(n[r], r, i)) && f.push(u); else for (r in n) null != (u = t(n[r], r, i)) && f.push(u);
            return kr(f)
        }, guid: 1, support: f
    });
    "function" == typeof Symbol && (i.fn[Symbol.iterator] = h[Symbol.iterator]);
    i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (n, t) {
        oi["[object " + t + "]"] = t.toLowerCase()
    });
    var ve = h.pop, ye = h.sort, pe = h.splice, o = "[\\x20\\t\\r\\n\\f]",
        gt = new RegExp("^" + o + "+|((?:^|[^\\\\])(?:\\\\.)*)" + o + "+$", "g");
    i.contains = function (n, t) {
        var i = t && t.parentNode;
        return n === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
    };
    iu = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    i.escapeSelector = function (n) {
        return (n + "").replace(iu, we)
    };
    b = u;
    si = ei;
    !function () {
        function r(n, t, o, s) {
            var h, b, a, y, k, d, g, w = t && t.ownerDocument, p = t ? t.nodeType : 9;
            if (o = o || [], "string" != typeof n || !n || 1 !== p && 9 !== p && 11 !== p) return o;
            if (!s && (nt(t), t = t || u, l)) {
                if (11 !== p && (k = ir.exec(n))) if (h = k[1]) {
                    if (9 === p) {
                        if (!(a = t.getElementById(h))) return o;
                        if (a.id === h) return v.call(o, a), o
                    } else if (w && (a = w.getElementById(h)) && r.contains(t, a) && a.id === h) return v.call(o, a), o
                } else {
                    if (k[2]) return v.apply(o, t.getElementsByTagName(n)), o;
                    if ((h = k[3]) && t.getElementsByClassName) return v.apply(o, t.getElementsByClassName(h)), o
                }
                if (!(ht[n + " "] || c && c.test(n))) {
                    if (g = n, w = t, 1 === p && (ki.test(n) || li.test(n))) {
                        for ((w = bt.test(n) && kt(t.parentNode) || t) == t && f.scope || ((y = t.getAttribute("id")) ? y = i.escapeSelector(y) : t.setAttribute("id", y = e)), b = (d = et(n)).length; b--;) d[b] = (y ? "#" + y : ":scope") + " " + at(d[b]);
                        g = d.join(",")
                    }
                    try {
                        return v.apply(o, w.querySelectorAll(g)), o
                    } catch (t) {
                        ht(n, !0)
                    } finally {
                        y === e && t.removeAttribute("id")
                    }
                }
            }
            return yi(n.replace(gt, "$1"), t, o, s)
        }

        function lt() {
            var n = [];
            return function i(r, u) {
                return n.push(r + " ") > t.cacheLength && delete i[n.shift()], i[r + " "] = u
            }
        }

        function y(n) {
            return n[e] = !0, n
        }

        function ut(n) {
            var t = u.createElement("fieldset");
            try {
                return !!n(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }

        function fr(n) {
            return function (t) {
                return s(t, "input") && t.type === n
            }
        }

        function er(n) {
            return function (t) {
                return (s(t, "input") || s(t, "button")) && t.type === n
            }
        }

        function ai(n) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === n : t.disabled === n : t.isDisabled === n || t.isDisabled !== !n && ur(t) === n : t.disabled === n : "label" in t && t.disabled === n
            }
        }

        function it(n) {
            return y(function (t) {
                return t = +t, y(function (i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }

        function kt(n) {
            return n && "undefined" != typeof n.getElementsByTagName && n
        }

        function nt(n) {
            var s, h = n ? n.ownerDocument || n : b;
            return h != u && 9 === h.nodeType && h.documentElement && (p = (u = h).documentElement, l = !i.isXMLDoc(u), pt = p.matches || p.webkitMatchesSelector || p.msMatchesSelector, p.msMatchesSelector && b != u && (s = u.defaultView) && s.top !== s && s.addEventListener("unload", rr), f.getById = ut(function (n) {
                return p.appendChild(n).id = i.expando, !u.getElementsByName || !u.getElementsByName(i.expando).length
            }), f.disconnectedMatch = ut(function (n) {
                return pt.call(n, "*")
            }), f.scope = ut(function () {
                return u.querySelectorAll(":scope")
            }), f.cssHas = ut(function () {
                try {
                    return u.querySelector(":has(*,:jqfake)"), !1
                } catch (n) {
                    return !0
                }
            }), f.getById ? (t.filter.ID = function (n) {
                var t = n.replace(k, g);
                return function (n) {
                    return n.getAttribute("id") === t
                }
            }, t.find.ID = function (n, t) {
                if ("undefined" != typeof t.getElementById && l) {
                    var i = t.getElementById(n);
                    return i ? [i] : []
                }
            }) : (t.filter.ID = function (n) {
                var t = n.replace(k, g);
                return function (n) {
                    var i = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id");
                    return i && i.value === t
                }
            }, t.find.ID = function (n, t) {
                if ("undefined" != typeof t.getElementById && l) {
                    var r, u, f, i = t.getElementById(n);
                    if (i) {
                        if ((r = i.getAttributeNode("id")) && r.value === n) return [i];
                        for (f = t.getElementsByName(n), u = 0; i = f[u++];) if ((r = i.getAttributeNode("id")) && r.value === n) return [i]
                    }
                    return []
                }
            }), t.find.TAG = function (n, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(n) : t.querySelectorAll(n)
            }, t.find.CLASS = function (n, t) {
                if ("undefined" != typeof t.getElementsByClassName && l) return t.getElementsByClassName(n)
            }, c = [], ut(function (n) {
                var t;
                p.appendChild(n).innerHTML = "<a id='" + e + "' href='' disabled='disabled'><\/a><select id='" + e + "-\r\\' disabled='disabled'><option selected=''><\/option><\/select>";
                n.querySelectorAll("[selected]").length || c.push("\\[" + o + "*(?:value|" + oi + ")");
                n.querySelectorAll("[id~=" + e + "-]").length || c.push("~=");
                n.querySelectorAll("a#" + e + "+*").length || c.push(".#.+[+~]");
                n.querySelectorAll(":checked").length || c.push(":checked");
                (t = u.createElement("input")).setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                p.appendChild(n).disabled = !0;
                2 !== n.querySelectorAll(":disabled").length && c.push(":enabled", ":disabled");
                (t = u.createElement("input")).setAttribute("name", "");
                n.appendChild(t);
                n.querySelectorAll("[name='']").length || c.push("\\[" + o + "*name" + o + "*=" + o + "*(?:''|\"\")")
            }), f.cssHas || c.push(":has"), c = c.length && new RegExp(c.join("|")), wt = function (n, t) {
                if (n === t) return st = !0, 0;
                var i = !n.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (1 & (i = (n.ownerDocument || n) == (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(n) === i ? n === u || n.ownerDocument == b && r.contains(b, n) ? -1 : t === u || t.ownerDocument == b && r.contains(b, t) ? 1 : ft ? d.call(ft, n) - d.call(ft, t) : 0 : 4 & i ? -1 : 1)
            }), u
        }

        function vi() {
        }

        function et(n, i) {
            var e, f, s, o, u, h, c, l = fi[n + " "];
            if (l) return i ? 0 : l.slice(0);
            for (u = n, h = [], c = t.preFilter; u;) {
                for (o in e && !(f = bi.exec(u)) || (f && (u = u.slice(f[0].length) || u), h.push(s = [])), e = !1, (f = li.exec(u)) && (e = f.shift(), s.push({
                    value: e,
                    type: f[0].replace(gt, " ")
                }), u = u.slice(e.length)), t.filter) (f = ct[o].exec(u)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                    value: e,
                    type: o,
                    matches: f
                }), u = u.slice(e.length));
                if (!e) break
            }
            return i ? u.length : u ? r.error(n) : fi(n, h).slice(0)
        }

        function at(n) {
            for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value;
            return i
        }

        function vt(n, t, i) {
            var r = t.dir, u = t.next, f = u || r, o = i && "parentNode" === f, h = pi++;
            return t.first ? function (t, i, u) {
                while (t = t[r]) if (1 === t.nodeType || o) return n(t, i, u);
                return !1
            } : function (t, i, c) {
                var l, a, v = [w, h];
                if (c) {
                    while (t = t[r]) if ((1 === t.nodeType || o) && n(t, i, c)) return !0
                } else while (t = t[r]) if (1 === t.nodeType || o) if (a = t[e] || (t[e] = {}), u && s(t, u)) t = t[r] || t; else {
                    if ((l = a[f]) && l[0] === w && l[1] === h) return v[2] = l[2];
                    if ((a[f] = v)[2] = n(t, i, c)) return !0
                }
                return !1
            }
        }

        function ni(n) {
            return 1 < n.length ? function (t, i, r) {
                for (var u = n.length; u--;) if (!n[u](t, i, r)) return !1;
                return !0
            } : n[0]
        }

        function yt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = null != t; f < s; f++) (e = n[f]) && (i && !i(e, r, u) || (o.push(e), h && t.push(f)));
            return o
        }

        function ti(n, t, i, u, f, o) {
            return u && !u[e] && (u = ti(u)), f && !f[e] && (f = ti(f, o)), y(function (e, o, s, h) {
                var a, l, y, c, b = [], w = [], k = o.length, g = e || function (n, t, i) {
                    for (var u = 0, f = t.length; u < f; u++) r(n, t[u], i);
                    return i
                }(t || "*", s.nodeType ? [s] : s, []), p = !n || !e && t ? g : yt(g, b, n, s, h);
                if (i ? i(p, c = f || (e ? n : k || u) ? [] : o, s, h) : c = p, u) for (a = yt(c, w), u(a, [], s, h), l = a.length; l--;) (y = a[l]) && (c[w[l]] = !(p[w[l]] = y));
                if (e) {
                    if (f || n) {
                        if (f) {
                            for (a = [], l = c.length; l--;) (y = c[l]) && a.push(p[l] = y);
                            f(null, c = [], a, h)
                        }
                        for (l = c.length; l--;) (y = c[l]) && -1 < (a = f ? d.call(e, y) : b[l]) && (e[a] = !(o[a] = y))
                    }
                } else c = yt(c === o ? c.splice(k, c.length) : c), f ? f(null, o, c, h) : v.apply(o, c)
            })
        }

        function ii(n) {
            for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = vt(function (n) {
                return n === o
            }, c, !0), a = vt(function (n) {
                return -1 < d.call(o, n)
            }, c, !0), f = [function (n, t, i) {
                var r = !h && (i || t != ot) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                return o = null, r
            }]; i < s; i++) if (u = t.relative[n[i].type]) f = [vt(ni(f), u)]; else {
                if ((u = t.filter[n[i].type].apply(null, n[i].matches))[e]) {
                    for (r = ++i; r < s; r++) if (t.relative[n[r].type]) break;
                    return ti(1 < i && ni(f), 1 < i && at(n.slice(0, i - 1).concat({value: " " === n[i - 2].type ? "*" : ""})).replace(gt, "$1"), u, i < r && ii(n.slice(i, r)), r < s && ii(n = n.slice(r)), r < s && at(n))
                }
                f.push(u)
            }
            return ni(f)
        }

        function ri(n, r) {
            var s, h, c, o, a, p, b = [], k = [], f = ei[n + " "];
            if (!f) {
                for (r || (r = et(n)), s = r.length; s--;) (f = ii(r[s]))[e] ? b.push(f) : k.push(f);
                (f = ei(n, (h = k, o = 0 < (c = b).length, a = 0 < h.length, p = function (n, r, f, e, s) {
                    var y, g, k, d = 0, p = "0", tt = n && [], b = [], it = ot, rt = n || a && t.find.TAG("*", s),
                        ut = w += null == it ? 1 : Math.random() || .1, ft = rt.length;
                    for (s && (ot = r == u || r || s); p !== ft && null != (y = rt[p]); p++) {
                        if (a && y) {
                            for (g = 0, r || y.ownerDocument == u || (nt(y), f = !l); k = h[g++];) if (k(y, r || u, f)) {
                                v.call(e, y);
                                break
                            }
                            s && (w = ut)
                        }
                        o && ((y = !k && y) && d--, n && tt.push(y))
                    }
                    if (d += p, o && p !== d) {
                        for (g = 0; k = c[g++];) k(tt, b, r, f);
                        if (n) {
                            if (0 < d) while (p--) tt[p] || b[p] || (b[p] = ve.call(e));
                            b = yt(b)
                        }
                        v.apply(e, b);
                        s && !n && 0 < b.length && 1 < d + c.length && i.uniqueSort(e)
                    }
                    return s && (w = ut, ot = it), tt
                }, o ? y(p) : p))).selector = n
            }
            return f
        }

        function yi(n, i, r, u) {
            var o, f, e, c, a, h = "function" == typeof n && n, s = !u && et(n = h.selector || n);
            if (r = r || [], 1 === s.length) {
                if (2 < (f = s[0] = s[0].slice(0)).length && "ID" === (e = f[0]).type && 9 === i.nodeType && l && t.relative[f[1].type]) {
                    if (!(i = (t.find.ID(e.matches[0].replace(k, g), i) || [])[0])) return r;
                    h && (i = i.parentNode);
                    n = n.slice(f.shift().value.length)
                }
                for (o = ct.needsContext.test(n) ? 0 : f.length; o--;) {
                    if (e = f[o], t.relative[c = e.type]) break;
                    if ((a = t.find[c]) && (u = a(e.matches[0].replace(k, g), bt.test(f[0].type) && kt(i.parentNode) || i))) {
                        if (f.splice(o, 1), !(n = u.length && at(f))) return v.apply(r, u), r;
                        break
                    }
                }
            }
            return (h || ri(n, s))(u, i, !l, r, !i || bt.test(n) && kt(i.parentNode) || i), r
        }

        var rt, t, ot, ft, st, u, p, l, c, pt, v = si, e = i.expando, w = 0, pi = 0, ui = lt(), fi = lt(), ei = lt(),
            ht = lt(), wt = function (n, t) {
                return n === t && (st = !0), 0
            },
            oi = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            tt = "(?:\\\\[\\da-fA-F]{1,6}" + o + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            hi = "\\[" + o + "*(" + tt + ")(?:" + o + "*([*^$|!~]?=)" + o + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + o + "*\\]",
            ci = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + hi + ")*)|.*)\\)|)",
            wi = new RegExp(o + "+", "g"), bi = new RegExp("^" + o + "*," + o + "*"),
            li = new RegExp("^" + o + "*([>+~]|" + o + ")" + o + "*"), ki = new RegExp(o + "|>"), di = new RegExp(ci),
            gi = new RegExp("^" + tt + "$"), ct = {
                ID: new RegExp("^#(" + tt + ")"),
                CLASS: new RegExp("^\\.(" + tt + ")"),
                TAG: new RegExp("^(" + tt + "|[*])"),
                ATTR: new RegExp("^" + hi),
                PSEUDO: new RegExp("^" + ci),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + o + "*(even|odd|(([+-]|)(\\d*)n|)" + o + "*(?:([+-]|)" + o + "*(\\d+)|))" + o + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + oi + ")$", "i"),
                needsContext: new RegExp("^" + o + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + o + "*((?:-\\d)?\\d*)" + o + "*\\)|)(?=[^-]|$)", "i")
            }, nr = /^(?:input|select|textarea|button)$/i, tr = /^h\d$/i, ir = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            bt = /[+~]/, k = new RegExp("\\\\[\\da-fA-F]{1,6}" + o + "?|\\\\([^\\r\\n\\f])", "g"), g = function (n, t) {
                var i = "0x" + n.slice(1) - 65536;
                return t || (i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320))
            }, rr = function () {
                nt()
            }, ur = vt(function (n) {
                return !0 === n.disabled && s(n, "fieldset")
            }, {dir: "parentNode", next: "legend"});
        try {
            v.apply(h = a.call(b.childNodes), b.childNodes);
            h[b.childNodes.length].nodeType
        } catch (rt) {
            v = {
                apply: function (n, t) {
                    si.apply(n, a.call(t))
                }, call: function (n) {
                    si.apply(n, a.call(arguments, 1))
                }
            }
        }
        for (rt in r.matches = function (n, t) {
            return r(n, null, null, t)
        }, r.matchesSelector = function (n, t) {
            if (nt(n), l && !ht[t + " "] && (!c || !c.test(t))) try {
                var i = pt.call(n, t);
                if (i || f.disconnectedMatch || n.document && 11 !== n.document.nodeType) return i
            } catch (n) {
                ht(t, !0)
            }
            return 0 < r(t, u, null, [n]).length
        }, r.contains = function (n, t) {
            return (n.ownerDocument || n) != u && nt(n), i.contains(n, t)
        }, r.attr = function (n, i) {
            (n.ownerDocument || n) != u && nt(n);
            var r = t.attrHandle[i.toLowerCase()],
                f = r && dt.call(t.attrHandle, i.toLowerCase()) ? r(n, i, !l) : void 0;
            return void 0 !== f ? f : n.getAttribute(i)
        }, r.error = function (n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        }, i.uniqueSort = function (n) {
            var r, u = [], t = 0, i = 0;
            if (st = !f.sortStable, ft = !f.sortStable && a.call(n, 0), ye.call(n, wt), st) {
                while (r = n[i++]) r === n[i] && (t = u.push(i));
                while (t--) pe.call(n, u[t], 1)
            }
            return ft = null, n
        }, i.fn.uniqueSort = function () {
            return this.pushStack(i.uniqueSort(a.apply(this)))
        }, (t = i.expr = {
            cacheLength: 50,
            createPseudo: y,
            match: ct,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (n) {
                    return n[1] = n[1].replace(k, g), n[3] = (n[3] || n[4] || n[5] || "").replace(k, g), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                }, CHILD: function (n) {
                    return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || r.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && r.error(n[0]), n
                }, PSEUDO: function (n) {
                    var i, t = !n[6] && n[2];
                    return ct.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && di.test(t) && (i = et(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                }
            },
            filter: {
                TAG: function (n) {
                    var t = n.replace(k, g).toLowerCase();
                    return "*" === n ? function () {
                        return !0
                    } : function (n) {
                        return s(n, t)
                    }
                }, CLASS: function (n) {
                    var t = ui[n + " "];
                    return t || (t = new RegExp("(^|" + o + ")" + n + "(" + o + "|$)")) && ui(n, function (n) {
                        return t.test("string" == typeof n.className && n.className || "undefined" != typeof n.getAttribute && n.getAttribute("class") || "")
                    })
                }, ATTR: function (n, t, i) {
                    return function (u) {
                        var f = r.attr(u, n);
                        return null == f ? "!=" === t : !t || (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && -1 < f.indexOf(i) : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? -1 < (" " + f.replace(wi, " ") + " ").indexOf(i) : "|=" === t && (f === i || f.slice(0, i.length + 1) === i + "-"))
                    }
                }, CHILD: function (n, t, i, r, u) {
                    var h = "nth" !== n.slice(0, 3), o = "last" !== n.slice(-4), f = "of-type" === t;
                    return 1 === r && 0 === u ? function (n) {
                        return !!n.parentNode
                    } : function (t, i, c) {
                        var p, d, l, v, b, k = h !== o ? "nextSibling" : "previousSibling", y = t.parentNode,
                            nt = f && t.nodeName.toLowerCase(), g = !c && !f, a = !1;
                        if (y) {
                            if (h) {
                                while (k) {
                                    for (l = t; l = l[k];) if (f ? s(l, nt) : 1 === l.nodeType) return !1;
                                    b = k = "only" === n && !b && "nextSibling"
                                }
                                return !0
                            }
                            if (b = [o ? y.firstChild : y.lastChild], o && g) {
                                for (a = (v = (p = (d = y[e] || (y[e] = {}))[n] || [])[0] === w && p[1]) && p[2], l = v && y.childNodes[v]; l = ++v && l && l[k] || (a = v = 0) || b.pop();) if (1 === l.nodeType && ++a && l === t) {
                                    d[n] = [w, v, a];
                                    break
                                }
                            } else if (g && (a = v = (p = (d = t[e] || (t[e] = {}))[n] || [])[0] === w && p[1]), !1 === a) while (l = ++v && l && l[k] || (a = v = 0) || b.pop()) if ((f ? s(l, nt) : 1 === l.nodeType) && ++a && (g && ((d = l[e] || (l[e] = {}))[n] = [w, a]), l === t)) break;
                            return (a -= u) === r || a % r == 0 && 0 <= a / r
                        }
                    }
                }, PSEUDO: function (n, i) {
                    var f, u = t.pseudos[n] || t.setFilters[n.toLowerCase()] || r.error("unsupported pseudo: " + n);
                    return u[e] ? u(i) : 1 < u.length ? (f = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? y(function (n, t) {
                        for (var e, r = u(n, i), f = r.length; f--;) n[e = d.call(n, r[f])] = !(t[e] = r[f])
                    }) : function (n) {
                        return u(n, 0, f)
                    }) : u
                }
            },
            pseudos: {
                not: y(function (n) {
                    var t = [], r = [], i = ri(n.replace(gt, "$1"));
                    return i[e] ? y(function (n, t, r, u) {
                        for (var e, o = i(n, null, u, []), f = n.length; f--;) (e = o[f]) && (n[f] = !(t[f] = e))
                    }) : function (n, u, f) {
                        return t[0] = n, i(t, null, f, r), t[0] = null, !r.pop()
                    }
                }), has: y(function (n) {
                    return function (t) {
                        return 0 < r(n, t).length
                    }
                }), contains: y(function (n) {
                    return n = n.replace(k, g), function (t) {
                        return -1 < (t.textContent || i.text(t)).indexOf(n)
                    }
                }), lang: y(function (n) {
                    return gi.test(n || "") || r.error("unsupported lang: " + n), n = n.replace(k, g).toLowerCase(), function (t) {
                        var i;
                        do if (i = l ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === n || 0 === i.indexOf(n + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id
                }, root: function (n) {
                    return n === p
                }, focus: function (n) {
                    return n === function () {
                        try {
                            return u.activeElement
                        } catch (n) {
                        }
                    }() && u.hasFocus() && !!(n.type || n.href || ~n.tabIndex)
                }, enabled: ai(!1), disabled: ai(!0), checked: function (n) {
                    return s(n, "input") && !!n.checked || s(n, "option") && !!n.selected
                }, selected: function (n) {
                    return n.parentNode && n.parentNode.selectedIndex, !0 === n.selected
                }, empty: function (n) {
                    for (n = n.firstChild; n; n = n.nextSibling) if (n.nodeType < 6) return !1;
                    return !0
                }, parent: function (n) {
                    return !t.pseudos.empty(n)
                }, header: function (n) {
                    return tr.test(n.nodeName)
                }, input: function (n) {
                    return nr.test(n.nodeName)
                }, button: function (n) {
                    return s(n, "input") && "button" === n.type || s(n, "button")
                }, text: function (n) {
                    var t;
                    return s(n, "input") && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: it(function () {
                    return [0]
                }), last: it(function (n, t) {
                    return [t - 1]
                }), eq: it(function (n, t, i) {
                    return [i < 0 ? i + t : i]
                }), even: it(function (n, t) {
                    for (var i = 0; i < t; i += 2) n.push(i);
                    return n
                }), odd: it(function (n, t) {
                    for (var i = 1; i < t; i += 2) n.push(i);
                    return n
                }), lt: it(function (n, t, i) {
                    for (var r = i < 0 ? i + t : t < i ? t : i; 0 <= --r;) n.push(r);
                    return n
                }), gt: it(function (n, t, i) {
                    for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r);
                    return n
                })
            }
        }).pseudos.nth = t.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) t.pseudos[rt] = fr(rt);
        for (rt in {submit: !0, reset: !0}) t.pseudos[rt] = er(rt);
        vi.prototype = t.filters = t.pseudos;
        t.setFilters = new vi;
        f.sortStable = e.split("").sort(wt).join("") === e;
        nt();
        f.sortDetached = ut(function (n) {
            return 1 & n.compareDocumentPosition(u.createElement("fieldset"))
        });
        i.find = r;
        i.expr[":"] = i.expr.pseudos;
        i.unique = i.uniqueSort;
        r.compile = ri;
        r.select = yi;
        r.setDocument = nt;
        r.tokenize = et;
        r.escape = i.escapeSelector;
        r.getText = i.text;
        r.isXML = i.isXMLDoc;
        r.selectors = i.expr;
        r.support = i.support;
        r.uniqueSort = i.uniqueSort
    }();
    var ot = function (n, t, r) {
        for (var u = [], f = void 0 !== r; (n = n[t]) && 9 !== n.nodeType;) if (1 === n.nodeType) {
            if (f && i(n).is(r)) break;
            u.push(n)
        }
        return u
    }, ru = function (n, t) {
        for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n);
        return i
    }, uu = i.expr.match.needsContext, fu = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    i.filter = function (n, t, r) {
        var u = t[0];
        return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function (n) {
            return 1 === n.nodeType
        }))
    };
    i.fn.extend({
        find: function (n) {
            var t, r, u = this.length, f = this;
            if ("string" != typeof n) return this.pushStack(i(n).filter(function () {
                for (t = 0; t < u; t++) if (i.contains(f[t], this)) return !0
            }));
            for (r = this.pushStack([]), t = 0; t < u; t++) i.find(n, f[t], r);
            return 1 < u ? i.uniqueSort(r) : r
        }, filter: function (n) {
            return this.pushStack(di(this, n || [], !1))
        }, not: function (n) {
            return this.pushStack(di(this, n || [], !0))
        }, is: function (n) {
            return !!di(this, "string" == typeof n && uu.test(n) ? i(n) : n || [], !1).length
        }
    });
    ou = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (i.fn.init = function (n, t, r) {
        var f, o;
        if (!n) return this;
        if (r = r || eu, "string" == typeof n) {
            if (!(f = "<" === n[0] && ">" === n[n.length - 1] && 3 <= n.length ? [null, n, null] : ou.exec(n)) || !f[1] && t) return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n);
            if (f[1]) {
                if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(f[1], t && t.nodeType ? t.ownerDocument || t : u, !0)), fu.test(f[1]) && i.isPlainObject(t)) for (f in t) e(this[f]) ? this[f](t[f]) : this.attr(f, t[f]);
                return this
            }
            return (o = u.getElementById(f[2])) && (this[0] = o, this.length = 1), this
        }
        return n.nodeType ? (this[0] = n, this.length = 1, this) : e(n) ? void 0 !== r.ready ? r.ready(n) : n(i) : i.makeArray(n, this)
    }).prototype = i.fn;
    eu = i(u);
    su = /^(?:parents|prev(?:Until|All))/;
    hu = {children: !0, contents: !0, next: !0, prev: !0};
    i.fn.extend({
        has: function (n) {
            var t = i(n, this), r = t.length;
            return this.filter(function () {
                for (var n = 0; n < r; n++) if (i.contains(this, t[n])) return !0
            })
        }, closest: function (n, t) {
            var r, f = 0, o = this.length, u = [], e = "string" != typeof n && i(n);
            if (!uu.test(n)) for (; f < o; f++) for (r = this[f]; r && r !== t; r = r.parentNode) if (r.nodeType < 11 && (e ? -1 < e.index(r) : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                u.push(r);
                break
            }
            return this.pushStack(1 < u.length ? i.uniqueSort(u) : u)
        }, index: function (n) {
            return n ? "string" == typeof n ? d.call(i(n), this[0]) : d.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (n, t) {
            return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))))
        }, addBack: function (n) {
            return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function (n) {
            var t = n.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (n) {
            return ot(n, "parentNode")
        }, parentsUntil: function (n, t, i) {
            return ot(n, "parentNode", i)
        }, next: function (n) {
            return cu(n, "nextSibling")
        }, prev: function (n) {
            return cu(n, "previousSibling")
        }, nextAll: function (n) {
            return ot(n, "nextSibling")
        }, prevAll: function (n) {
            return ot(n, "previousSibling")
        }, nextUntil: function (n, t, i) {
            return ot(n, "nextSibling", i)
        }, prevUntil: function (n, t, i) {
            return ot(n, "previousSibling", i)
        }, siblings: function (n) {
            return ru((n.parentNode || {}).firstChild, n)
        }, children: function (n) {
            return ru(n.firstChild)
        }, contents: function (n) {
            return null != n.contentDocument && br(n.contentDocument) ? n.contentDocument : (s(n, "template") && (n = n.content || n), i.merge([], n.childNodes))
        }
    }, function (n, t) {
        i.fn[n] = function (r, u) {
            var f = i.map(this, t, r);
            return "Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), 1 < this.length && (hu[n] || i.uniqueSort(f), su.test(n) && f.reverse()), this.pushStack(f)
        }
    });
    y = /[^\x20\t\r\n\f]+/g;
    i.Callbacks = function (n) {
        var l, h;
        n = "string" == typeof n ? (l = n, h = {}, i.each(l.match(y) || [], function (n, t) {
            h[t] = !0
        }), h) : i.extend({}, n);
        var o, r, a, u, t = [], s = [], f = -1, v = function () {
            for (u = u || n.once, a = o = !0; s.length; f = -1) for (r = s.shift(); ++f < t.length;) !1 === t[f].apply(r[0], r[1]) && n.stopOnFalse && (f = t.length, r = !1);
            n.memory || (r = !1);
            o = !1;
            u && (t = r ? [] : "")
        }, c = {
            add: function () {
                return t && (r && !o && (f = t.length - 1, s.push(r)), function u(r) {
                    i.each(r, function (i, r) {
                        e(r) ? n.unique && c.has(r) || t.push(r) : r && r.length && "string" !== et(r) && u(r)
                    })
                }(arguments), r && !o && v()), this
            }, remove: function () {
                return i.each(arguments, function (n, r) {
                    for (var u; -1 < (u = i.inArray(r, t, u));) t.splice(u, 1), u <= f && f--
                }), this
            }, has: function (n) {
                return n ? -1 < i.inArray(n, t) : 0 < t.length
            }, empty: function () {
                return t && (t = []), this
            }, disable: function () {
                return u = s = [], t = r = "", this
            }, disabled: function () {
                return !t
            }, lock: function () {
                return u = s = [], r || o || (t = r = ""), this
            }, locked: function () {
                return !!u
            }, fireWith: function (n, t) {
                return u || (t = [n, (t = t || []).slice ? t.slice() : t], s.push(t), o || v()), this
            }, fire: function () {
                return c.fireWith(this, arguments), this
            }, fired: function () {
                return !!a
            }
        };
        return c
    };
    i.extend({
        Deferred: function (t) {
            var u = [["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2], ["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"]],
                o = "pending", f = {
                    state: function () {
                        return o
                    }, always: function () {
                        return r.done(arguments).fail(arguments), this
                    }, "catch": function (n) {
                        return f.then(null, n)
                    }, pipe: function () {
                        var n = arguments;
                        return i.Deferred(function (t) {
                            i.each(u, function (i, u) {
                                var f = e(n[u[4]]) && n[u[4]];
                                r[u[1]](function () {
                                    var n = f && f.apply(this, arguments);
                                    n && e(n.promise) ? n.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[u[0] + "With"](this, f ? [n] : arguments)
                                })
                            });
                            n = null
                        }).promise()
                    }, then: function (t, r, f) {
                        function s(t, r, u, f) {
                            return function () {
                                var h = this, c = arguments, a = function () {
                                    var n, i;
                                    if (!(t < o)) {
                                        if ((n = u.apply(h, c)) === r.promise()) throw new TypeError("Thenable self-resolution");
                                        i = n && ("object" == typeof n || "function" == typeof n) && n.then;
                                        e(i) ? f ? i.call(n, s(o, r, st, f), s(o, r, hi, f)) : (o++, i.call(n, s(o, r, st, f), s(o, r, hi, f), s(o, r, st, r.notifyWith))) : (u !== st && (h = void 0, c = [n]), (f || r.resolveWith)(h, c))
                                    }
                                }, l = f ? a : function () {
                                    try {
                                        a()
                                    } catch (a) {
                                        i.Deferred.exceptionHook && i.Deferred.exceptionHook(a, l.error);
                                        o <= t + 1 && (u !== hi && (h = void 0, c = [a]), r.rejectWith(h, c))
                                    }
                                };
                                t ? l() : (i.Deferred.getErrorHook ? l.error = i.Deferred.getErrorHook() : i.Deferred.getStackHook && (l.error = i.Deferred.getStackHook()), n.setTimeout(l))
                            }
                        }

                        var o = 0;
                        return i.Deferred(function (n) {
                            u[0][3].add(s(0, n, e(f) ? f : st, n.notifyWith));
                            u[1][3].add(s(0, n, e(t) ? t : st));
                            u[2][3].add(s(0, n, e(r) ? r : hi))
                        }).promise()
                    }, promise: function (n) {
                        return null != n ? i.extend(n, f) : f
                    }
                }, r = {};
            return i.each(u, function (n, t) {
                var i = t[2], e = t[5];
                f[t[1]] = i.add;
                e && i.add(function () {
                    o = e
                }, u[3 - n][2].disable, u[3 - n][3].disable, u[0][2].lock, u[0][3].lock);
                i.add(t[3].fire);
                r[t[0]] = function () {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                };
                r[t[0] + "With"] = i.fireWith
            }), f.promise(r), t && t.call(r, r), r
        }, when: function (n) {
            var f = arguments.length, t = f, o = Array(t), u = a.call(arguments), r = i.Deferred(), s = function (n) {
                return function (t) {
                    o[n] = this;
                    u[n] = 1 < arguments.length ? a.call(arguments) : t;
                    --f || r.resolveWith(o, u)
                }
            };
            if (f <= 1 && (lu(n, r.done(s(t)).resolve, r.reject, !f), "pending" === r.state() || e(u[t] && u[t].then))) return r.then();
            while (t--) lu(u[t], s(t), r.reject);
            return r.promise()
        }
    });
    au = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    i.Deferred.exceptionHook = function (t, i) {
        n.console && n.console.warn && t && au.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
    };
    i.readyException = function (t) {
        n.setTimeout(function () {
            throw t;
        })
    };
    ci = i.Deferred();
    i.fn.ready = function (n) {
        return ci.then(n)["catch"](function (n) {
            i.readyException(n)
        }), this
    };
    i.extend({
        isReady: !1, readyWait: 1, ready: function (n) {
            (!0 === n ? --i.readyWait : i.isReady) || (i.isReady = !0) !== n && 0 < --i.readyWait || ci.resolveWith(u, [i])
        }
    });
    i.ready.then = ci.then;
    "complete" === u.readyState || "loading" !== u.readyState && !u.documentElement.doScroll ? n.setTimeout(i.ready) : (u.addEventListener("DOMContentLoaded", li), n.addEventListener("load", li));
    var g = function (n, t, r, u, f, o, s) {
        var h = 0, l = n.length, c = null == r;
        if ("object" === et(r)) for (h in f = !0, r) g(n, t, h, r[h], !0, o, s); else if (void 0 !== u && (f = !0, e(u) || (s = !0), c && (s ? (t.call(n, u), t = null) : (c = t, t = function (n, t, r) {
            return c.call(i(n), r)
        })), t)) for (; h < l; h++) t(n[h], r, s ? u : u.call(n[h], h, t(n[h], r)));
        return f ? n : c ? t.call(n) : l ? t(n[0], r) : o
    }, be = /^-ms-/, ke = /-([a-z])/g;
    ht = function (n) {
        return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType
    };
    ni.uid = 1;
    ni.prototype = {
        cache: function (n) {
            var t = n[this.expando];
            return t || (t = {}, ht(n) && (n.nodeType ? n[this.expando] = t : Object.defineProperty(n, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (n, t, i) {
            var r, u = this.cache(n);
            if ("string" == typeof t) u[k(t)] = i; else for (r in t) u[k(r)] = t[r];
            return u
        }, get: function (n, t) {
            return void 0 === t ? this.cache(n) : n[this.expando] && n[this.expando][k(t)]
        }, access: function (n, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(n, t) : (this.set(n, t, i), void 0 !== i ? i : t)
        }, remove: function (n, t) {
            var u, r = n[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) for (u = (t = Array.isArray(t) ? t.map(k) : (t = k(t)) in r ? [t] : t.match(y) || []).length; u--;) delete r[t[u]];
                (void 0 === t || i.isEmptyObject(r)) && (n.nodeType ? n[this.expando] = void 0 : delete n[this.expando])
            }
        }, hasData: function (n) {
            var t = n[this.expando];
            return void 0 !== t && !i.isEmptyObject(t)
        }
    };
    var r = new ni, c = new ni, ge = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, no = /[A-Z]/g;
    i.extend({
        hasData: function (n) {
            return c.hasData(n) || r.hasData(n)
        }, data: function (n, t, i) {
            return c.access(n, t, i)
        }, removeData: function (n, t) {
            c.remove(n, t)
        }, _data: function (n, t, i) {
            return r.access(n, t, i)
        }, _removeData: function (n, t) {
            r.remove(n, t)
        }
    });
    i.fn.extend({
        data: function (n, t) {
            var f, u, e, i = this[0], o = i && i.attributes;
            if (void 0 === n) {
                if (this.length && (e = c.get(i), 1 === i.nodeType && !r.get(i, "hasDataAttrs"))) {
                    for (f = o.length; f--;) o[f] && 0 === (u = o[f].name).indexOf("data-") && (u = k(u.slice(5)), vu(i, u, e[u]));
                    r.set(i, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof n ? this.each(function () {
                c.set(this, n)
            }) : g(this, function (t) {
                var r;
                if (i && void 0 === t) return void 0 !== (r = c.get(i, n)) ? r : void 0 !== (r = vu(i, n)) ? r : void 0;
                this.each(function () {
                    c.set(this, n, t)
                })
            }, null, t, 1 < arguments.length, null, !0)
        }, removeData: function (n) {
            return this.each(function () {
                c.remove(this, n)
            })
        }
    });
    i.extend({
        queue: function (n, t, u) {
            var f;
            if (n) return t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || Array.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || []
        }, dequeue: function (n, t) {
            t = t || "fx";
            var r = i.queue(n, t), e = r.length, u = r.shift(), f = i._queueHooks(n, t);
            "inprogress" === u && (u = r.shift(), e--);
            u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, function () {
                i.dequeue(n, t)
            }, f));
            !e && f && f.empty.fire()
        }, _queueHooks: function (n, t) {
            var u = t + "queueHooks";
            return r.get(n, u) || r.access(n, u, {
                empty: i.Callbacks("once memory").add(function () {
                    r.remove(n, [t + "queue", u])
                })
            })
        }
    });
    i.fn.extend({
        queue: function (n, t) {
            var r = 2;
            return "string" != typeof n && (t = n, n = "fx", r--), arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function () {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
            })
        }, dequeue: function (n) {
            return this.each(function () {
                i.dequeue(this, n)
            })
        }, clearQueue: function (n) {
            return this.queue(n || "fx", [])
        }, promise: function (n, t) {
            var u, e = 1, o = i.Deferred(), f = this, s = this.length, h = function () {
                --e || o.resolveWith(f, [f])
            };
            for ("string" != typeof n && (t = n, n = void 0), n = n || "fx"; s--;) (u = r.get(f[s], n + "queueHooks")) && u.empty && (e++, u.empty.add(h));
            return h(), o.promise(t)
        }
    });
    var yu = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ti = new RegExp("^(?:([+-])=|)(" + yu + ")([a-z%]*)$", "i"),
        nt = ["Top", "Right", "Bottom", "Left"], tt = u.documentElement, ct = function (n) {
            return i.contains(n.ownerDocument, n)
        }, to = {composed: !0};
    tt.getRootNode && (ct = function (n) {
        return i.contains(n.ownerDocument, n) || n.getRootNode(to) === n.ownerDocument
    });
    ii = function (n, t) {
        return "none" === (n = t || n).style.display || "" === n.style.display && ct(n) && "none" === i.css(n, "display")
    };
    gi = {};
    i.fn.extend({
        show: function () {
            return lt(this, !0)
        }, hide: function () {
            return lt(this)
        }, toggle: function (n) {
            return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function () {
                ii(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    var it, ai, ri = /^(?:checkbox|radio)$/i, wu = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        bu = /^$|^module$|\/(?:java|ecma)script/i;
    it = u.createDocumentFragment().appendChild(u.createElement("div"));
    (ai = u.createElement("input")).setAttribute("type", "radio");
    ai.setAttribute("checked", "checked");
    ai.setAttribute("name", "t");
    it.appendChild(ai);
    f.checkClone = it.cloneNode(!0).cloneNode(!0).lastChild.checked;
    it.innerHTML = "<textarea>x<\/textarea>";
    f.noCloneChecked = !!it.cloneNode(!0).lastChild.defaultValue;
    it.innerHTML = "<option><\/option>";
    f.option = !!it.lastChild;
    v = {
        thead: [1, "<table>", "<\/table>"],
        col: [2, "<table><colgroup>", "<\/colgroup><\/table>"],
        tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
        td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
        _default: [0, "", ""]
    };
    v.tbody = v.tfoot = v.colgroup = v.caption = v.thead;
    v.th = v.td;
    f.option || (v.optgroup = v.option = [1, "<select multiple='multiple'>", "<\/select>"]);
    ku = /<|&#?\w+;/;
    tr = /^([^.]*)(?:\.(.+)|)/;
    i.event = {
        global: {}, add: function (n, t, u, f, e) {
            var p, l, k, a, w, h, s, c, o, b, d, v = r.get(n);
            if (ht(n)) for (u.handler && (u = (p = u).handler, e = p.selector), e && i.find.matchesSelector(tt, e), u.guid || (u.guid = i.guid++), (a = v.events) || (a = v.events = Object.create(null)), (l = v.handle) || (l = v.handle = function (t) {
                if ("undefined" != typeof i && i.event.triggered !== t.type) return i.event.dispatch.apply(n, arguments)
            }), w = (t = (t || "").match(y) || [""]).length; w--;) o = d = (k = tr.exec(t[w]) || [])[1], b = (k[2] || "").split(".").sort(), o && (s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, h = i.extend({
                type: o,
                origType: d,
                data: f,
                handler: u,
                guid: u.guid,
                selector: e,
                needsContext: e && i.expr.match.needsContext.test(e),
                namespace: b.join(".")
            }, p), (c = a[o]) || ((c = a[o] = []).delegateCount = 0, s.setup && !1 !== s.setup.call(n, f, b, l) || n.addEventListener && n.addEventListener(o, l)), s.add && (s.add.call(n, h), h.handler.guid || (h.handler.guid = u.guid)), e ? c.splice(c.delegateCount++, 0, h) : c.push(h), i.event.global[o] = !0)
        }, remove: function (n, t, u, f, e) {
            var v, k, c, a, p, s, h, l, o, b, d, w = r.hasData(n) && r.get(n);
            if (w && (a = w.events)) {
                for (p = (t = (t || "").match(y) || [""]).length; p--;) if (o = d = (c = tr.exec(t[p]) || [])[1], b = (c[2] || "").split(".").sort(), o) {
                    for (h = i.event.special[o] || {}, l = a[o = (f ? h.delegateType : h.bindType) || o] || [], c = c[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = v = l.length; v--;) s = l[v], !e && d !== s.origType || u && u.guid !== s.guid || c && !c.test(s.namespace) || f && f !== s.selector && ("**" !== f || !s.selector) || (l.splice(v, 1), s.selector && l.delegateCount--, h.remove && h.remove.call(n, s));
                    k && !l.length && (h.teardown && !1 !== h.teardown.call(n, b, w.handle) || i.removeEvent(n, o, w.handle), delete a[o])
                } else for (o in a) i.event.remove(n, o + t[p], u, f, !0);
                i.isEmptyObject(a) && r.remove(n, "handle events")
            }
        }, dispatch: function (n) {
            var u, h, c, e, f, l, s = new Array(arguments.length), t = i.event.fix(n),
                a = (r.get(this, "events") || Object.create(null))[t.type] || [], o = i.event.special[t.type] || {};
            for (s[0] = t, u = 1; u < arguments.length; u++) s[u] = arguments[u];
            if (t.delegateTarget = this, !o.preDispatch || !1 !== o.preDispatch.call(this, t)) {
                for (l = i.event.handlers.call(this, t, a), u = 0; (e = l[u++]) && !t.isPropagationStopped();) for (t.currentTarget = e.elem, h = 0; (f = e.handlers[h++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !1 !== f.namespace && !t.rnamespace.test(f.namespace) || (t.handleObj = f, t.data = f.data, void 0 !== (c = ((i.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, s)) && !1 === (t.result = c) && (t.preventDefault(), t.stopPropagation()));
                return o.postDispatch && o.postDispatch.call(this, t), t.result
            }
        }, handlers: function (n, t) {
            var f, h, u, e, o, c = [], s = t.delegateCount, r = n.target;
            if (s && r.nodeType && !("click" === n.type && 1 <= n.button)) for (; r !== this; r = r.parentNode || this) if (1 === r.nodeType && ("click" !== n.type || !0 !== r.disabled)) {
                for (e = [], o = {}, f = 0; f < s; f++) void 0 === o[u = (h = t[f]).selector + " "] && (o[u] = h.needsContext ? -1 < i(u, this).index(r) : i.find(u, this, null, [r]).length), o[u] && e.push(h);
                e.length && c.push({elem: r, handlers: e})
            }
            return r = this, s < t.length && c.push({elem: r, handlers: t.slice(s)}), c
        }, addProp: function (n, t) {
            Object.defineProperty(i.Event.prototype, n, {
                enumerable: !0, configurable: !0, get: e(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[n]
                }, set: function (t) {
                    Object.defineProperty(this, n, {enumerable: !0, configurable: !0, writable: !0, value: t})
                }
            })
        }, fix: function (n) {
            return n[i.expando] ? n : new i.Event(n)
        }, special: {
            load: {noBubble: !0}, click: {
                setup: function (n) {
                    var t = this || n;
                    return ri.test(t.type) && t.click && s(t, "input") && vi(t, "click", !0), !1
                }, trigger: function (n) {
                    var t = this || n;
                    return ri.test(t.type) && t.click && s(t, "input") && vi(t, "click"), !0
                }, _default: function (n) {
                    var t = n.target;
                    return ri.test(t.type) && t.click && s(t, "input") && r.get(t, "click") || s(t, "a")
                }
            }, beforeunload: {
                postDispatch: function (n) {
                    void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result)
                }
            }
        }
    };
    i.removeEvent = function (n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i)
    };
    i.Event = function (n, t) {
        if (!(this instanceof i.Event)) return new i.Event(n, t);
        n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && !1 === n.returnValue ? at : vt, this.target = n.target && 3 === n.target.nodeType ? n.target.parentNode : n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget) : this.type = n;
        t && i.extend(this, t);
        this.timeStamp = n && n.timeStamp || Date.now();
        this[i.expando] = !0
    };
    i.Event.prototype = {
        constructor: i.Event,
        isDefaultPrevented: vt,
        isPropagationStopped: vt,
        isImmediatePropagationStopped: vt,
        isSimulated: !1,
        preventDefault: function () {
            var n = this.originalEvent;
            this.isDefaultPrevented = at;
            n && !this.isSimulated && n.preventDefault()
        },
        stopPropagation: function () {
            var n = this.originalEvent;
            this.isPropagationStopped = at;
            n && !this.isSimulated && n.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var n = this.originalEvent;
            this.isImmediatePropagationStopped = at;
            n && !this.isSimulated && n.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    i.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, i.event.addProp);
    i.each({focus: "focusin", blur: "focusout"}, function (n, t) {
        function f(n) {
            if (u.documentMode) {
                var e = r.get(this, "handle"), f = i.event.fix(n);
                f.type = "focusin" === n.type ? "focus" : "blur";
                f.isSimulated = !0;
                e(n);
                f.target === f.currentTarget && e(f)
            } else i.event.simulate(t, n.target, i.event.fix(n))
        }

        i.event.special[n] = {
            setup: function () {
                var i;
                if (vi(this, n, !0), !u.documentMode) return !1;
                (i = r.get(this, t)) || this.addEventListener(t, f);
                r.set(this, t, (i || 0) + 1)
            }, trigger: function () {
                return vi(this, n), !0
            }, teardown: function () {
                var n;
                if (!u.documentMode) return !1;
                (n = r.get(this, t) - 1) ? r.set(this, t, n) : (this.removeEventListener(t, f), r.remove(this, t))
            }, _default: function (t) {
                return r.get(t.target, n)
            }, delegateType: t
        };
        i.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this.document || this, e = u.documentMode ? this : i, o = r.get(e, t);
                o || (u.documentMode ? this.addEventListener(t, f) : i.addEventListener(n, f, !0));
                r.set(e, t, (o || 0) + 1)
            }, teardown: function () {
                var e = this.ownerDocument || this.document || this, i = u.documentMode ? this : e, o = r.get(i, t) - 1;
                o ? r.set(i, t, o) : (u.documentMode ? this.removeEventListener(t, f) : e.removeEventListener(n, f, !0), r.remove(i, t))
            }
        }
    });
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (n, t) {
        i.event.special[n] = {
            delegateType: t, bindType: t, handle: function (n) {
                var u, r = n.relatedTarget, f = n.handleObj;
                return r && (r === this || i.contains(this, r)) || (n.type = f.origType, u = f.handler.apply(this, arguments), n.type = t), u
            }
        }
    });
    i.fn.extend({
        on: function (n, t, i, r) {
            return ir(this, n, t, i, r)
        }, one: function (n, t, i, r) {
            return ir(this, n, t, i, r, 1)
        }, off: function (n, t, r) {
            var u, f;
            if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
            if ("object" == typeof n) {
                for (f in n) this.off(f, t, n[f]);
                return this
            }
            return !1 !== t && "function" != typeof t || (r = t, t = void 0), !1 === r && (r = vt), this.each(function () {
                i.event.remove(this, n, r, t)
            })
        }
    });
    var io = /<script|<style|<link/i, ro = /checked\s*(?:[^=]|=\s*.checked.)/i, uo = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    i.extend({
        htmlPrefilter: function (n) {
            return n
        }, clone: function (n, t, r) {
            var u, h, o, e, c, a, v, s = n.cloneNode(!0), y = ct(n);
            if (!(f.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n))) for (e = l(s), u = 0, h = (o = l(n)).length; u < h; u++) c = o[u], a = e[u], void 0, "input" === (v = a.nodeName.toLowerCase()) && ri.test(c.type) ? a.checked = c.checked : "input" !== v && "textarea" !== v || (a.defaultValue = c.defaultValue);
            if (t) if (r) for (o = o || l(n), e = e || l(s), u = 0, h = o.length; u < h; u++) nf(o[u], e[u]); else nf(n, s);
            return 0 < (e = l(s, "script")).length && nr(e, !y && l(n, "script")), s
        }, cleanData: function (n) {
            for (var u, t, f, o = i.event.special, e = 0; void 0 !== (t = n[e]); e++) if (ht(t)) {
                if (u = t[r.expando]) {
                    if (u.events) for (f in u.events) o[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
                    t[r.expando] = void 0
                }
                t[c.expando] && (t[c.expando] = void 0)
            }
        }
    });
    i.fn.extend({
        detach: function (n) {
            return tf(this, n, !0)
        }, remove: function (n) {
            return tf(this, n)
        }, text: function (n) {
            return g(this, function (n) {
                return void 0 === n ? i.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = n)
                })
            }, null, n, arguments.length)
        }, append: function () {
            return yt(this, arguments, function (n) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || gu(this, n).appendChild(n)
            })
        }, prepend: function () {
            return yt(this, arguments, function (n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = gu(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        }, before: function () {
            return yt(this, arguments, function (n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        }, after: function () {
            return yt(this, arguments, function (n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        }, empty: function () {
            for (var n, t = 0; null != (n = this[t]); t++) 1 === n.nodeType && (i.cleanData(l(n, !1)), n.textContent = "");
            return this
        }, clone: function (n, t) {
            return n = null != n && n, t = null == t ? n : t, this.map(function () {
                return i.clone(this, n, t)
            })
        }, html: function (n) {
            return g(this, function (n) {
                var t = this[0] || {}, r = 0, u = this.length;
                if (void 0 === n && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof n && !io.test(n) && !v[(wu.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = i.htmlPrefilter(n);
                    try {
                        for (; r < u; r++) 1 === (t = this[r] || {}).nodeType && (i.cleanData(l(t, !1)), t.innerHTML = n);
                        t = 0
                    } catch (n) {
                    }
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        }, replaceWith: function () {
            var n = [];
            return yt(this, arguments, function (t) {
                var r = this.parentNode;
                i.inArray(this, n) < 0 && (i.cleanData(l(this)), r && r.replaceChild(t, this))
            }, n)
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (n, t) {
        i.fn[n] = function (n) {
            for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), ei.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    var rr = new RegExp("^(" + yu + ")(?!px)[a-z%]+$", "i"), ur = /^--/, yi = function (t) {
        var i = t.ownerDocument.defaultView;
        return i && i.opener || (i = n), i.getComputedStyle(t)
    }, rf = function (n, t, i) {
        var u, r, f = {};
        for (r in t) f[r] = n.style[r], n.style[r] = t[r];
        for (r in u = i.call(n), t) n.style[r] = f[r];
        return u
    }, oo = new RegExp(nt.join("|"), "i");
    !function () {
        function r() {
            if (t) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
                t.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
                tt.appendChild(s).appendChild(t);
                var i = n.getComputedStyle(t);
                h = "1%" !== i.top;
                v = 12 === e(i.marginLeft);
                t.style.right = "60%";
                a = 36 === e(i.right);
                c = 36 === e(i.width);
                t.style.position = "absolute";
                l = 12 === e(t.offsetWidth / 3);
                tt.removeChild(s);
                t = null
            }
        }

        function e(n) {
            return Math.round(parseFloat(n))
        }

        var h, c, l, a, o, v, s = u.createElement("div"), t = u.createElement("div");
        t.style && (t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === t.style.backgroundClip, i.extend(f, {
            boxSizingReliable: function () {
                return r(), c
            }, pixelBoxStyles: function () {
                return r(), a
            }, pixelPosition: function () {
                return r(), h
            }, reliableMarginLeft: function () {
                return r(), v
            }, scrollboxSize: function () {
                return r(), l
            }, reliableTrDimensions: function () {
                var i, t, r, f;
                return null == o && (i = u.createElement("table"), t = u.createElement("tr"), r = u.createElement("div"), i.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "box-sizing:content-box;border:1px solid", t.style.height = "1px", r.style.height = "9px", r.style.display = "block", tt.appendChild(i).appendChild(t).appendChild(r), f = n.getComputedStyle(t), o = parseInt(f.height, 10) + parseInt(f.borderTopWidth, 10) + parseInt(f.borderBottomWidth, 10) === t.offsetHeight, tt.removeChild(i)), o
            }
        }))
    }();
    var ff = ["Webkit", "Moz", "ms"], ef = u.createElement("div").style, of = {};
    var so = /^(none|table(?!-c[ea]).+)/, ho = {position: "absolute", visibility: "hidden", display: "block"},
        sf = {letterSpacing: "0", fontWeight: "400"};
    i.extend({
        cssHooks: {
            opacity: {
                get: function (n, t) {
                    if (t) {
                        var i = ui(n, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageSlice: !0,
            columnCount: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            scale: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0
        },
        cssProps: {},
        style: function (n, t, r, u) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                var e, h, o, c = k(t), l = ur.test(t), s = n.style;
                if (l || (t = fr(c)), o = i.cssHooks[t] || i.cssHooks[c], void 0 === r) return o && "get" in o && void 0 !== (e = o.get(n, !1, u)) ? e : s[t];
                "string" == (h = typeof r) && (e = ti.exec(r)) && e[1] && (r = pu(n, t, e), h = "number");
                null != r && r == r && ("number" !== h || l || (r += e && e[3] || (i.cssNumber[c] ? "" : "px")), f.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (s[t] = "inherit"), o && "set" in o && void 0 === (r = o.set(n, r, u)) || (l ? s.setProperty(t, r) : s[t] = r))
            }
        },
        css: function (n, t, r, u) {
            var f, e, o, s = k(t);
            return ur.test(t) || (t = fr(s)), (o = i.cssHooks[t] || i.cssHooks[s]) && "get" in o && (f = o.get(n, !0, r)), void 0 === f && (f = ui(n, t, u)), "normal" === f && t in sf && (f = sf[t]), "" === r || r ? (e = parseFloat(f), !0 === r || isFinite(e) ? e || 0 : f) : f
        }
    });
    i.each(["height", "width"], function (n, t) {
        i.cssHooks[t] = {
            get: function (n, r, u) {
                if (r) return !so.test(i.css(n, "display")) || n.getClientRects().length && n.getBoundingClientRect().width ? cf(n, t, u) : rf(n, ho, function () {
                    return cf(n, t, u)
                })
            }, set: function (n, r, u) {
                var s, e = yi(n), h = !f.scrollboxSize() && "absolute" === e.position,
                    c = (h || u) && "border-box" === i.css(n, "boxSizing", !1, e), o = u ? er(n, t, u, c, e) : 0;
                return c && h && (o -= Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(e[t]) - er(n, t, "border", !1, e) - .5)), o && (s = ti.exec(r)) && "px" !== (s[3] || "px") && (n.style[t] = r, r = i.css(n, t)), hf(0, r, o)
            }
        }
    });
    i.cssHooks.marginLeft = uf(f.reliableMarginLeft, function (n, t) {
        if (t) return (parseFloat(ui(n, "marginLeft")) || n.getBoundingClientRect().left - rf(n, {marginLeft: 0}, function () {
            return n.getBoundingClientRect().left
        })) + "px"
    });
    i.each({margin: "", padding: "", border: "Width"}, function (n, t) {
        i.cssHooks[n + t] = {
            expand: function (i) {
                for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; r < 4; r++) f[n + nt[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        "margin" !== n && (i.cssHooks[n + t].set = hf)
    });
    i.fn.extend({
        css: function (n, t) {
            return g(this, function (n, t, r) {
                var f, e, o = {}, u = 0;
                if (Array.isArray(t)) {
                    for (f = yi(n), e = t.length; u < e; u++) o[t[u]] = i.css(n, t[u], !1, f);
                    return o
                }
                return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
            }, n, t, 1 < arguments.length)
        }
    });
    ((i.Tween = p).prototype = {
        constructor: p, init: function (n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || i.easing._default;
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        }, cur: function () {
            var n = p.propHooks[this.prop];
            return n && n.get ? n.get(this) : p.propHooks._default.get(this)
        }, run: function (n) {
            var t, r = p.propHooks[this.prop];
            return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : p.propHooks._default.set(this), this
        }
    }).init.prototype = p.prototype;
    (p.propHooks = {
        _default: {
            get: function (n) {
                var t;
                return 1 !== n.elem.nodeType || null != n.elem[n.prop] && null == n.elem.style[n.prop] ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, "")) && "auto" !== t ? t : 0
            }, set: function (n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : 1 !== n.elem.nodeType || !i.cssHooks[n.prop] && null == n.elem.style[fr(n.prop)] ? n.elem[n.prop] = n.now : i.style(n.elem, n.prop, n.now + n.unit)
            }
        }
    }).scrollTop = p.propHooks.scrollLeft = {
        set: function (n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.easing = {
        linear: function (n) {
            return n
        }, swing: function (n) {
            return .5 - Math.cos(n * Math.PI) / 2
        }, _default: "swing"
    };
    i.fx = p.prototype.init;
    i.fx.step = {};
    af = /^(?:toggle|show|hide)$/;
    vf = /queueHooks$/;
    i.Animation = i.extend(w, {
        tweeners: {
            "*": [function (n, t) {
                var i = this.createTween(n, t);
                return pu(i.elem, n, ti.exec(t), i), i
            }]
        }, tweener: function (n, t) {
            e(n) ? (t = n, n = ["*"]) : n = n.match(y);
            for (var i, r = 0, u = n.length; r < u; r++) i = n[r], w.tweeners[i] = w.tweeners[i] || [], w.tweeners[i].unshift(t)
        }, prefilters: [function (n, t, u) {
            var f, y, w, c, b, h, o, l, k = "width" in t || "height" in t, v = this, p = {}, s = n.style,
                a = n.nodeType && ii(n), e = r.get(n, "fxshow");
            for (f in u.queue || (null == (c = i._queueHooks(n, "fx")).unqueued && (c.unqueued = 0, b = c.empty.fire, c.empty.fire = function () {
                c.unqueued || b()
            }), c.unqueued++, v.always(function () {
                v.always(function () {
                    c.unqueued--;
                    i.queue(n, "fx").length || c.empty.fire()
                })
            })), t) if (y = t[f], af.test(y)) {
                if (delete t[f], w = w || "toggle" === y, y === (a ? "hide" : "show")) {
                    if ("show" !== y || !e || void 0 === e[f]) continue;
                    a = !0
                }
                p[f] = e && e[f] || i.style(n, f)
            }
            if ((h = !i.isEmptyObject(t)) || !i.isEmptyObject(p)) for (f in k && 1 === n.nodeType && (u.overflow = [s.overflow, s.overflowX, s.overflowY], null == (o = e && e.display) && (o = r.get(n, "display")), "none" === (l = i.css(n, "display")) && (o ? l = o : (lt([n], !0), o = n.style.display || o, l = i.css(n, "display"), lt([n]))), ("inline" === l || "inline-block" === l && null != o) && "none" === i.css(n, "float") && (h || (v.done(function () {
                s.display = o
            }), null == o && (l = s.display, o = "none" === l ? "" : l)), s.display = "inline-block")), u.overflow && (s.overflow = "hidden", v.always(function () {
                s.overflow = u.overflow[0];
                s.overflowX = u.overflow[1];
                s.overflowY = u.overflow[2]
            })), h = !1, p) h || (e ? "hidden" in e && (a = e.hidden) : e = r.access(n, "fxshow", {display: o}), w && (e.hidden = !a), a && lt([n], !0), v.done(function () {
                for (f in a || lt([n]), r.remove(n, "fxshow"), p) i.style(n, f, p[f])
            })), h = pf(a ? e[f] : 0, f, v), f in e || (e[f] = h.start, a && (h.end = h.start, h.start = 0))
        }], prefilter: function (n, t) {
            t ? w.prefilters.unshift(n) : w.prefilters.push(n)
        }
    });
    i.speed = function (n, t, r) {
        var u = n && "object" == typeof n ? i.extend({}, n) : {
            complete: r || !r && t || e(n) && n,
            duration: n,
            easing: r && t || t && !e(t) && t
        };
        return i.fx.off ? u.duration = 0 : "number" != typeof u.duration && (u.duration = u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default), null != u.queue && !0 !== u.queue || (u.queue = "fx"), u.old = u.complete, u.complete = function () {
            e(u.old) && u.old.call(this);
            u.queue && i.dequeue(this, u.queue)
        }, u
    };
    i.fn.extend({
        fadeTo: function (n, t, i, r) {
            return this.filter(ii).css("opacity", 0).show().end().animate({opacity: t}, n, i, r)
        }, animate: function (n, t, u, f) {
            var s = i.isEmptyObject(n), o = i.speed(t, u, f), e = function () {
                var t = w(this, i.extend({}, n), o);
                (s || r.get(this, "finish")) && t.stop(!0)
            };
            return e.finish = e, s || !1 === o.queue ? this.each(e) : this.queue(o.queue, e)
        }, stop: function (n, t, u) {
            var f = function (n) {
                var t = n.stop;
                delete n.stop;
                t(u)
            };
            return "string" != typeof n && (u = t, t = n, n = void 0), t && this.queue(n || "fx", []), this.each(function () {
                var s = !0, t = null != n && n + "queueHooks", o = i.timers, e = r.get(this);
                if (t) e[t] && e[t].stop && f(e[t]); else for (t in e) e[t] && e[t].stop && vf.test(t) && f(e[t]);
                for (t = o.length; t--;) o[t].elem !== this || null != n && o[t].queue !== n || (o[t].anim.stop(u), s = !1, o.splice(t, 1));
                !s && u || i.dequeue(this, n)
            })
        }, finish: function (n) {
            return !1 !== n && (n = n || "fx"), this.each(function () {
                var t, e = r.get(this), u = e[n + "queue"], o = e[n + "queueHooks"], f = i.timers, s = u ? u.length : 0;
                for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--;) f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
                for (t = 0; t < s; t++) u[t] && u[t].finish && u[t].finish.call(this);
                delete e.finish
            })
        }
    });
    i.each(["toggle", "show", "hide"], function (n, t) {
        var r = i.fn[t];
        i.fn[t] = function (n, i, u) {
            return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(wi(t, !0), n, i, u)
        }
    });
    i.each({
        slideDown: wi("show"),
        slideUp: wi("hide"),
        slideToggle: wi("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (n, t) {
        i.fn[n] = function (n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.timers = [];
    i.fx.tick = function () {
        var r, n = 0, t = i.timers;
        for (pt = Date.now(); n < t.length; n++) (r = t[n])() || t[n] !== r || t.splice(n--, 1);
        t.length || i.fx.stop();
        pt = void 0
    };
    i.fx.timer = function (n) {
        i.timers.push(n);
        i.fx.start()
    };
    i.fx.interval = 13;
    i.fx.start = function () {
        pi || (pi = !0, or())
    };
    i.fx.stop = function () {
        pi = null
    };
    i.fx.speeds = {slow: 600, fast: 200, _default: 400};
    i.fn.delay = function (t, r) {
        return t = i.fx && i.fx.speeds[t] || t, r = r || "fx", this.queue(r, function (i, r) {
            var u = n.setTimeout(i, t);
            r.stop = function () {
                n.clearTimeout(u)
            }
        })
    };
    wt = u.createElement("input");
    lf = u.createElement("select").appendChild(u.createElement("option"));
    wt.type = "checkbox";
    f.checkOn = "" !== wt.value;
    f.optSelected = lf.selected;
    (wt = u.createElement("input")).value = "t";
    wt.type = "radio";
    f.radioValue = "t" === wt.value;
    bt = i.expr.attrHandle;
    i.fn.extend({
        attr: function (n, t) {
            return g(this, i.attr, n, t, 1 < arguments.length)
        }, removeAttr: function (n) {
            return this.each(function () {
                i.removeAttr(this, n)
            })
        }
    });
    i.extend({
        attr: function (n, t, r) {
            var f, u, e = n.nodeType;
            if (3 !== e && 8 !== e && 2 !== e) return "undefined" == typeof n.getAttribute ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (u = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? wf : void 0)), void 0 !== r ? null === r ? void i.removeAttr(n, t) : u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : (n.setAttribute(t, r + ""), r) : u && "get" in u && null !== (f = u.get(n, t)) ? f : null == (f = i.find.attr(n, t)) ? void 0 : f)
        }, attrHooks: {
            type: {
                set: function (n, t) {
                    if (!f.radioValue && "radio" === t && s(n, "input")) {
                        var i = n.value;
                        return n.setAttribute("type", t), i && (n.value = i), t
                    }
                }
            }
        }, removeAttr: function (n, t) {
            var i, u = 0, r = t && t.match(y);
            if (r && 1 === n.nodeType) while (i = r[u++]) n.removeAttribute(i)
        }
    });
    wf = {
        set: function (n, t, r) {
            return !1 === t ? i.removeAttr(n, r) : n.setAttribute(r, r), r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function (n, t) {
        var r = bt[t] || i.find.attr;
        bt[t] = function (n, t, i) {
            var f, e, u = t.toLowerCase();
            return i || (e = bt[u], bt[u] = f, f = null != r(n, t, i) ? u : null, bt[u] = e), f
        }
    });
    bf = /^(?:input|select|textarea|button)$/i;
    kf = /^(?:a|area)$/i;
    i.fn.extend({
        prop: function (n, t) {
            return g(this, i.prop, n, t, 1 < arguments.length)
        }, removeProp: function (n) {
            return this.each(function () {
                delete this[i.propFix[n] || n]
            })
        }
    });
    i.extend({
        prop: function (n, t, r) {
            var f, u, e = n.nodeType;
            if (3 !== e && 8 !== e && 2 !== e) return 1 === e && i.isXMLDoc(n) || (t = i.propFix[t] || t, u = i.propHooks[t]), void 0 !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get" in u && null !== (f = u.get(n, t)) ? f : n[t]
        }, propHooks: {
            tabIndex: {
                get: function (n) {
                    var t = i.find.attr(n, "tabindex");
                    return t ? parseInt(t, 10) : bf.test(n.nodeName) || kf.test(n.nodeName) && n.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    });
    f.optSelected || (i.propHooks.selected = {
        get: function (n) {
            var t = n.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (n) {
            var t = n.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        i.propFix[this.toLowerCase()] = this
    });
    i.fn.extend({
        addClass: function (n) {
            var u, t, f, o, r, s;
            return e(n) ? this.each(function (t) {
                i(this).addClass(n.call(this, t, ut(this)))
            }) : (u = sr(n)).length ? this.each(function () {
                if (f = ut(this), t = 1 === this.nodeType && " " + rt(f) + " ") {
                    for (r = 0; r < u.length; r++) o = u[r], t.indexOf(" " + o + " ") < 0 && (t += o + " ");
                    s = rt(t);
                    f !== s && this.setAttribute("class", s)
                }
            }) : this
        }, removeClass: function (n) {
            var u, t, f, o, r, s;
            return e(n) ? this.each(function (t) {
                i(this).removeClass(n.call(this, t, ut(this)))
            }) : arguments.length ? (u = sr(n)).length ? this.each(function () {
                if (f = ut(this), t = 1 === this.nodeType && " " + rt(f) + " ") {
                    for (r = 0; r < u.length; r++) for (o = u[r]; -1 < t.indexOf(" " + o + " ");) t = t.replace(" " + o + " ", " ");
                    s = rt(t);
                    f !== s && this.setAttribute("class", s)
                }
            }) : this : this.attr("class", "")
        }, toggleClass: function (n, t) {
            var s, u, f, o, h = typeof n, c = "string" === h || Array.isArray(n);
            return e(n) ? this.each(function (r) {
                i(this).toggleClass(n.call(this, r, ut(this), t), t)
            }) : "boolean" == typeof t && c ? t ? this.addClass(n) : this.removeClass(n) : (s = sr(n), this.each(function () {
                if (c) for (o = i(this), f = 0; f < s.length; f++) u = s[f], o.hasClass(u) ? o.removeClass(u) : o.addClass(u); else void 0 !== n && "boolean" !== h || ((u = ut(this)) && r.set(this, "__className__", u), this.setAttribute && this.setAttribute("class", u || !1 === n ? "" : r.get(this, "__className__") || ""))
            }))
        }, hasClass: function (n) {
            for (var t, r = 0, i = " " + n + " "; t = this[r++];) if (1 === t.nodeType && -1 < (" " + rt(ut(t)) + " ").indexOf(i)) return !0;
            return !1
        }
    });
    df = /\r/g;
    i.fn.extend({
        val: function (n) {
            var t, r, f, u = this[0];
            return arguments.length ? (f = e(n), this.each(function (r) {
                var u;
                1 === this.nodeType && (null == (u = f ? n.call(this, r, i(this).val()) : n) ? u = "" : "number" == typeof u ? u += "" : Array.isArray(u) && (u = i.map(u, function (n) {
                    return null == n ? "" : n + ""
                })), (t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, u, "value") || (this.value = u))
            })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()]) && "get" in t && void 0 !== (r = t.get(u, "value")) ? r : "string" == typeof (r = u.value) ? r.replace(df, "") : null == r ? "" : r : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function (n) {
                    var t = i.find.attr(n, "value");
                    return null != t ? t : rt(i.text(n))
                }
            }, select: {
                get: function (n) {
                    for (var e, t, o = n.options, u = n.selectedIndex, f = "select-one" === n.type, h = f ? null : [], c = f ? u + 1 : o.length, r = u < 0 ? c : f ? u : 0; r < c; r++) if (((t = o[r]).selected || r === u) && !t.disabled && (!t.parentNode.disabled || !s(t.parentNode, "optgroup"))) {
                        if (e = i(t).val(), f) return e;
                        h.push(e)
                    }
                    return h
                }, set: function (n, t) {
                    for (var r, u, f = n.options, e = i.makeArray(t), o = f.length; o--;) ((u = f[o]).selected = -1 < i.inArray(i.valHooks.option.get(u), e)) && (r = !0);
                    return r || (n.selectedIndex = -1), e
                }
            }
        }
    });
    i.each(["radio", "checkbox"], function () {
        i.valHooks[this] = {
            set: function (n, t) {
                if (Array.isArray(t)) return n.checked = -1 < i.inArray(i(n).val(), t)
            }
        };
        f.checkOn || (i.valHooks[this].get = function (n) {
            return null === n.getAttribute("value") ? "on" : n.value
        })
    });
    var fi = n.location, gf = {guid: Date.now()}, hr = /\?/;
    i.parseXML = function (t) {
        var r, u;
        if (!t || "string" != typeof t) return null;
        try {
            r = (new n.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
        }
        return u = r && r.getElementsByTagName("parsererror")[0], r && !u || i.error("Invalid XML: " + (u ? i.map(u.childNodes, function (n) {
            return n.textContent
        }).join("\n") : t)), r
    };
    cr = /^(?:focusinfocus|focusoutblur)$/;
    lr = function (n) {
        n.stopPropagation()
    };
    i.extend(i.event, {
        trigger: function (t, f, o, s) {
            var k, c, l, d, v, y, a, p, w = [o || u], h = dt.call(t, "type") ? t.type : t,
                b = dt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (c = p = l = o = o || u, 3 !== o.nodeType && 8 !== o.nodeType && !cr.test(h + i.event.triggered) && (-1 < h.indexOf(".") && (h = (b = h.split(".")).shift(), b.sort()), v = h.indexOf(":") < 0 && "on" + h, (t = t[i.expando] ? t : new i.Event(h, "object" == typeof t && t)).isTrigger = s ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), f = null == f ? [t] : i.makeArray(f, [t]), a = i.event.special[h] || {}, s || !a.trigger || !1 !== a.trigger.apply(o, f))) {
                if (!s && !a.noBubble && !ft(o)) {
                    for (d = a.delegateType || h, cr.test(d + h) || (c = c.parentNode); c; c = c.parentNode) w.push(c), l = c;
                    l === (o.ownerDocument || u) && w.push(l.defaultView || l.parentWindow || n)
                }
                for (k = 0; (c = w[k++]) && !t.isPropagationStopped();) p = c, t.type = 1 < k ? d : a.bindType || h, (y = (r.get(c, "events") || Object.create(null))[t.type] && r.get(c, "handle")) && y.apply(c, f), (y = v && c[v]) && y.apply && ht(c) && (t.result = y.apply(c, f), !1 === t.result && t.preventDefault());
                return t.type = h, s || t.isDefaultPrevented() || a._default && !1 !== a._default.apply(w.pop(), f) || !ht(o) || v && e(o[h]) && !ft(o) && ((l = o[v]) && (o[v] = null), i.event.triggered = h, t.isPropagationStopped() && p.addEventListener(h, lr), o[h](), t.isPropagationStopped() && p.removeEventListener(h, lr), i.event.triggered = void 0, l && (o[v] = l)), t.result
            }
        }, simulate: function (n, t, r) {
            var u = i.extend(new i.Event, r, {type: n, isSimulated: !0});
            i.event.trigger(u, null, t)
        }
    });
    i.fn.extend({
        trigger: function (n, t) {
            return this.each(function () {
                i.event.trigger(n, t, this)
            })
        }, triggerHandler: function (n, t) {
            var r = this[0];
            if (r) return i.event.trigger(n, t, r, !0)
        }
    });
    var co = /\[\]$/, ne = /\r?\n/g, lo = /^(?:submit|button|image|reset|file)$/i,
        ao = /^(?:input|select|textarea|keygen)/i;
    i.param = function (n, t) {
        var r, u = [], f = function (n, t) {
            var i = e(t) ? t() : t;
            u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(null == i ? "" : i)
        };
        if (null == n) return "";
        if (Array.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function () {
            f(this.name, this.value)
        }); else for (r in n) ar(r, n[r], t, f);
        return u.join("&")
    };
    i.fn.extend({
        serialize: function () {
            return i.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function () {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && ao.test(this.nodeName) && !lo.test(n) && (this.checked || !ri.test(n))
            }).map(function (n, t) {
                var r = i(this).val();
                return null == r ? null : Array.isArray(r) ? i.map(r, function (n) {
                    return {name: t.name, value: n.replace(ne, "\r\n")}
                }) : {name: t.name, value: r.replace(ne, "\r\n")}
            }).get()
        }
    });
    var vo = /%20/g, yo = /#.*$/, po = /([?&])_=[^&]*/, wo = /^(.*?):[ \t]*([^\r\n]*)$/gm, bo = /^(?:GET|HEAD)$/,
        ko = /^\/\//, te = {}, vr = {}, ie = "*/".concat("*"), yr = u.createElement("a");
    return yr.href = fi.href, i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: fi.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(fi.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ie,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": i.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (n, t) {
            return t ? pr(pr(n, i.ajaxSettings), t) : pr(i.ajaxSettings, n)
        },
        ajaxPrefilter: re(te),
        ajaxTransport: re(vr),
        ajax: function (t, r) {
            function b(t, r, u, c) {
                var y, rt, b, p, g, a = r;
                s || (s = !0, d && n.clearTimeout(d), l = void 0, k = c || "", e.readyState = 0 < t ? 4 : 0, y = 200 <= t && t < 300 || 304 === t, u && (p = function (n, t, i) {
                    for (var e, u, f, o, s = n.contents, r = n.dataTypes; "*" === r[0];) r.shift(), void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
                    if (e) for (u in s) if (s[u] && s[u].test(e)) {
                        r.unshift(u);
                        break
                    }
                    if (r[0] in i) f = r[0]; else {
                        for (u in i) {
                            if (!r[0] || n.converters[u + " " + r[0]]) {
                                f = u;
                                break
                            }
                            o || (o = u)
                        }
                        f = f || o
                    }
                    if (f) return f !== r[0] && r.unshift(f), i[f]
                }(f, e, u)), !y && -1 < i.inArray("script", f.dataTypes) && i.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function () {
                }), p = function (n, t, i, r) {
                    var h, u, f, s, e, o = {}, c = n.dataTypes.slice();
                    if (c[1]) for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
                    for (u = c.shift(); u;) if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift()) if ("*" === u) u = e; else if ("*" !== e && e !== u) {
                        if (!(f = o[e + " " + u] || o["* " + u])) for (h in o) if ((s = h.split(" "))[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                            !0 === f ? f = o[h] : !0 !== o[h] && (u = s[0], c.unshift(s[1]));
                            break
                        }
                        if (!0 !== f) if (f && n.throws) t = f(t); else try {
                            t = f(t)
                        } catch (n) {
                            return {state: "parsererror", error: f ? n : "No conversion from " + e + " to " + u}
                        }
                    }
                    return {state: "success", data: t}
                }(f, p, e, y), y ? (f.ifModified && ((g = e.getResponseHeader("Last-Modified")) && (i.lastModified[o] = g), (g = e.getResponseHeader("etag")) && (i.etag[o] = g)), 204 === t || "HEAD" === f.type ? a = "nocontent" : 304 === t ? a = "notmodified" : (a = p.state, rt = p.data, y = !(b = p.error))) : (b = a, !t && a || (a = "error", t < 0 && (t = 0))), e.status = t, e.statusText = (r || a) + "", y ? tt.resolveWith(h, [rt, a, e]) : tt.rejectWith(h, [e, a, b]), e.statusCode(w), w = void 0, v && nt.trigger(y ? "ajaxSuccess" : "ajaxError", [e, f, y ? rt : b]), it.fireWith(h, [e, a]), v && (nt.trigger("ajaxComplete", [e, f]), --i.active || i.event.trigger("ajaxStop")))
            }

            "object" == typeof t && (r = t, t = void 0);
            r = r || {};
            var l, o, k, a, d, c, s, v, g, p, f = i.ajaxSetup({}, r), h = f.context || f,
                nt = f.context && (h.nodeType || h.jquery) ? i(h) : i.event, tt = i.Deferred(),
                it = i.Callbacks("once memory"), w = f.statusCode || {}, rt = {}, ut = {}, ft = "canceled", e = {
                    readyState: 0, getResponseHeader: function (n) {
                        var t;
                        if (s) {
                            if (!a) for (a = {}; t = wo.exec(k);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = a[n.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    }, getAllResponseHeaders: function () {
                        return s ? k : null
                    }, setRequestHeader: function (n, t) {
                        return null == s && (n = ut[n.toLowerCase()] = ut[n.toLowerCase()] || n, rt[n] = t), this
                    }, overrideMimeType: function (n) {
                        return null == s && (f.mimeType = n), this
                    }, statusCode: function (n) {
                        var t;
                        if (n) if (s) e.always(n[e.status]); else for (t in n) w[t] = [w[t], n[t]];
                        return this
                    }, abort: function (n) {
                        var t = n || ft;
                        return l && l.abort(t), b(0, t), this
                    }
                };
            if (tt.promise(e), f.url = ((t || f.url || fi.href) + "").replace(ko, fi.protocol + "//"), f.type = r.method || r.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(y) || [""], null == f.crossDomain) {
                c = u.createElement("a");
                try {
                    c.href = f.url;
                    c.href = c.href;
                    f.crossDomain = yr.protocol + "//" + yr.host != c.protocol + "//" + c.host
                } catch (t) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = i.param(f.data, f.traditional)), ue(te, f, r, e), s) return e;
            for (g in (v = i.event && f.global) && 0 == i.active++ && i.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !bo.test(f.type), o = f.url.replace(yo, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(vo, "+")) : (p = f.url.slice(o.length), f.data && (f.processData || "string" == typeof f.data) && (o += (hr.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (o = o.replace(po, "$1"), p = (hr.test(o) ? "&" : "?") + "_=" + gf.guid++ + p), f.url = o + p), f.ifModified && (i.lastModified[o] && e.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || r.contentType) && e.setRequestHeader("Content-Type", f.contentType), e.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + ie + "; q=0.01" : "") : f.accepts["*"]), f.headers) e.setRequestHeader(g, f.headers[g]);
            if (f.beforeSend && (!1 === f.beforeSend.call(h, e, f) || s)) return e.abort();
            if (ft = "abort", it.add(f.complete), e.done(f.success), e.fail(f.error), l = ue(vr, f, r, e)) {
                if (e.readyState = 1, v && nt.trigger("ajaxSend", [e, f]), s) return e;
                f.async && 0 < f.timeout && (d = n.setTimeout(function () {
                    e.abort("timeout")
                }, f.timeout));
                try {
                    s = !1;
                    l.send(rt, b)
                } catch (t) {
                    if (s) throw t;
                    b(-1, t)
                }
            } else b(-1, "No Transport");
            return e
        },
        getJSON: function (n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function (n, t) {
            return i.get(n, void 0, t, "script")
        }
    }), i.each(["get", "post"], function (n, t) {
        i[t] = function (n, r, u, f) {
            return e(r) && (f = f || u, u = r, r = void 0), i.ajax(i.extend({
                url: n,
                type: t,
                dataType: f,
                data: r,
                success: u
            }, i.isPlainObject(n) && n))
        }
    }), i.ajaxPrefilter(function (n) {
        for (var t in n.headers) "content-type" === t.toLowerCase() && (n.contentType = n.headers[t] || "")
    }), i._evalUrl = function (n, t, r) {
        return i.ajax({
            url: n,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () {
                }
            },
            dataFilter: function (n) {
                i.globalEval(n, t, r)
            }
        })
    }, i.fn.extend({
        wrapAll: function (n) {
            var t;
            return this[0] && (e(n) && (n = n.call(this[0])), t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var n = this; n.firstElementChild;) n = n.firstElementChild;
                return n
            }).append(this)), this
        }, wrapInner: function (n) {
            return e(n) ? this.each(function (t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function () {
                var t = i(this), r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        }, wrap: function (n) {
            var t = e(n);
            return this.each(function (r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        }, unwrap: function (n) {
            return this.parent(n).not("body").each(function () {
                i(this).replaceWith(this.childNodes)
            }), this
        }
    }), i.expr.pseudos.hidden = function (n) {
        return !i.expr.pseudos.visible(n)
    }, i.expr.pseudos.visible = function (n) {
        return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length)
    }, i.ajaxSettings.xhr = function () {
        try {
            return new n.XMLHttpRequest
        } catch (t) {
        }
    }, fe = {
        0: 200,
        1223: 204
    }, kt = i.ajaxSettings.xhr(), f.cors = !!kt && "withCredentials" in kt, f.ajax = kt = !!kt, i.ajaxTransport(function (t) {
        var i, r;
        if (f.cors || kt && !t.crossDomain) return {
            send: function (u, f) {
                var o, e = t.xhr();
                if (e.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (o in t.xhrFields) e[o] = t.xhrFields[o];
                for (o in t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType), t.crossDomain || u["X-Requested-With"] || (u["X-Requested-With"] = "XMLHttpRequest"), u) e.setRequestHeader(o, u[o]);
                i = function (n) {
                    return function () {
                        i && (i = r = e.onload = e.onerror = e.onabort = e.ontimeout = e.onreadystatechange = null, "abort" === n ? e.abort() : "error" === n ? "number" != typeof e.status ? f(0, "error") : f(e.status, e.statusText) : f(fe[e.status] || e.status, e.statusText, "text" !== (e.responseType || "text") || "string" != typeof e.responseText ? {binary: e.response} : {text: e.responseText}, e.getAllResponseHeaders()))
                    }
                };
                e.onload = i();
                r = e.onerror = e.ontimeout = i("error");
                void 0 !== e.onabort ? e.onabort = r : e.onreadystatechange = function () {
                    4 === e.readyState && n.setTimeout(function () {
                        i && r()
                    })
                };
                i = i("abort");
                try {
                    e.send(t.hasContent && t.data || null)
                } catch (u) {
                    if (i) throw u;
                }
            }, abort: function () {
                i && i()
            }
        }
    }), i.ajaxPrefilter(function (n) {
        n.crossDomain && (n.contents.script = !1)
    }), i.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (n) {
                return i.globalEval(n), n
            }
        }
    }), i.ajaxPrefilter("script", function (n) {
        void 0 === n.cache && (n.cache = !1);
        n.crossDomain && (n.type = "GET")
    }), i.ajaxTransport("script", function (n) {
        var r, t;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function (f, e) {
                r = i("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", t = function (n) {
                    r.remove();
                    t = null;
                    n && e("error" === n.type ? 404 : 200, n.type)
                });
                u.head.appendChild(r[0])
            }, abort: function () {
                t && t()
            }
        }
    }), wr = [], bi = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var n = wr.pop() || i.expando + "_" + gf.guid++;
            return this[n] = !0, n
        }
    }), i.ajaxPrefilter("json jsonp", function (t, r, u) {
        var f, o, s,
            h = !1 !== t.jsonp && (bi.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && bi.test(t.data) && "data");
        if (h || "jsonp" === t.dataTypes[0]) return f = t.jsonpCallback = e(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, h ? t[h] = t[h].replace(bi, "$1" + f) : !1 !== t.jsonp && (t.url += (hr.test(t.url) ? "&" : "?") + t.jsonp + "=" + f), t.converters["script json"] = function () {
            return s || i.error(f + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = n[f], n[f] = function () {
            s = arguments
        }, u.always(function () {
            void 0 === o ? i(n).removeProp(f) : n[f] = o;
            t[f] && (t.jsonpCallback = r.jsonpCallback, wr.push(f));
            s && e(o) && o(s[0]);
            s = o = void 0
        }), "script"
    }), f.createHTMLDocument = ((ee = u.implementation.createHTMLDocument("").body).innerHTML = "<form><\/form><form><\/form>", 2 === ee.childNodes.length), i.parseHTML = function (n, t, r) {
        return "string" != typeof n ? [] : ("boolean" == typeof t && (r = t, t = !1), t || (f.createHTMLDocument ? ((s = (t = u.implementation.createHTMLDocument("")).createElement("base")).href = u.location.href, t.head.appendChild(s)) : t = u), e = !r && [], (o = fu.exec(n)) ? [t.createElement(o[1])] : (o = du([n], t, e), e && e.length && i(e).remove(), i.merge([], o.childNodes)));
        var s, o, e
    }, i.fn.load = function (n, t, r) {
        var u, s, h, f = this, o = n.indexOf(" ");
        return -1 < o && (u = rt(n.slice(o)), n = n.slice(0, o)), e(t) ? (r = t, t = void 0) : t && "object" == typeof t && (s = "POST"), 0 < f.length && i.ajax({
            url: n,
            type: s || "GET",
            dataType: "html",
            data: t
        }).done(function (n) {
            h = arguments;
            f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
        }).always(r && function (n, t) {
            f.each(function () {
                r.apply(this, h || [n.responseText, t, n])
            })
        }), this
    }, i.expr.pseudos.animated = function (n) {
        return i.grep(i.timers, function (t) {
            return n === t.elem
        }).length
    }, i.offset = {
        setOffset: function (n, t, r) {
            var v, o, s, h, u, c, l = i.css(n, "position"), a = i(n), f = {};
            "static" === l && (n.style.position = "relative");
            u = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            ("absolute" === l || "fixed" === l) && -1 < (s + c).indexOf("auto") ? (h = (v = a.position()).top, o = v.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
            e(t) && (t = t.call(n, r, i.extend({}, u)));
            null != t.top && (f.top = t.top - u.top + h);
            null != t.left && (f.left = t.left - u.left + o);
            "using" in t ? t.using.call(n, f) : a.css(f)
        }
    }, i.fn.extend({
        offset: function (n) {
            if (arguments.length) return void 0 === n ? this : this.each(function (t) {
                i.offset.setOffset(this, n, t)
            });
            var r, u, t = this[0];
            if (t) return t.getClientRects().length ? (r = t.getBoundingClientRect(), u = t.ownerDocument.defaultView, {
                top: r.top + u.pageYOffset,
                left: r.left + u.pageXOffset
            }) : {top: 0, left: 0}
        }, position: function () {
            if (this[0]) {
                var n, r, u, t = this[0], f = {top: 0, left: 0};
                if ("fixed" === i.css(t, "position")) r = t.getBoundingClientRect(); else {
                    for (r = this.offset(), u = t.ownerDocument, n = t.offsetParent || u.documentElement; n && (n === u.body || n === u.documentElement) && "static" === i.css(n, "position");) n = n.parentNode;
                    n && n !== t && 1 === n.nodeType && ((f = i(n).offset()).top += i.css(n, "borderTopWidth", !0), f.left += i.css(n, "borderLeftWidth", !0))
                }
                return {
                    top: r.top - f.top - i.css(t, "marginTop", !0),
                    left: r.left - f.left - i.css(t, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var n = this.offsetParent; n && "static" === i.css(n, "position");) n = n.offsetParent;
                return n || tt
            })
        }
    }), i.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (n, t) {
        var r = "pageYOffset" === t;
        i.fn[n] = function (i) {
            return g(this, function (n, i, u) {
                var f;
                if (ft(n) ? f = n : 9 === n.nodeType && (f = n.defaultView), void 0 === u) return f ? f[t] : n[i];
                f ? f.scrollTo(r ? f.pageXOffset : u, r ? u : f.pageYOffset) : n[i] = u
            }, n, i, arguments.length)
        }
    }), i.each(["top", "left"], function (n, t) {
        i.cssHooks[t] = uf(f.pixelPosition, function (n, r) {
            if (r) return r = ui(n, t), rr.test(r) ? i(n).position()[t] + "px" : r
        })
    }), i.each({Height: "height", Width: "width"}, function (n, t) {
        i.each({padding: "inner" + n, content: t, "": "outer" + n}, function (r, u) {
            i.fn[u] = function (f, e) {
                var o = arguments.length && (r || "boolean" != typeof f),
                    s = r || (!0 === f || !0 === e ? "margin" : "border");
                return g(this, function (t, r, f) {
                    var e;
                    return ft(t) ? 0 === u.indexOf("outer") ? t["inner" + n] : t.document.documentElement["client" + n] : 9 === t.nodeType ? (e = t.documentElement, Math.max(t.body["scroll" + n], e["scroll" + n], t.body["offset" + n], e["offset" + n], e["client" + n])) : void 0 === f ? i.css(t, r, s) : i.style(t, r, f, s)
                }, t, o ? f : void 0, o)
            }
        })
    }), i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (n, t) {
        i.fn[t] = function (n) {
            return this.on(t, n)
        }
    }), i.fn.extend({
        bind: function (n, t, i) {
            return this.on(n, null, t, i)
        }, unbind: function (n, t) {
            return this.off(n, null, t)
        }, delegate: function (n, t, i, r) {
            return this.on(t, n, i, r)
        }, undelegate: function (n, t, i) {
            return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
        }, hover: function (n, t) {
            return this.on("mouseenter", n).on("mouseleave", t || n)
        }
    }), i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (n, t) {
        i.fn[t] = function (n, i) {
            return 0 < arguments.length ? this.on(t, null, n, i) : this.trigger(t)
        }
    }), oe = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g, i.proxy = function (n, t) {
        var r, u, f;
        if ("string" == typeof t && (r = n[t], t = n, n = r), e(n)) return u = a.call(arguments, 2), (f = function () {
            return n.apply(t || this, u.concat(a.call(arguments)))
        }).guid = n.guid = n.guid || i.guid++, f
    }, i.holdReady = function (n) {
        n ? i.readyWait++ : i.ready(!0)
    }, i.isArray = Array.isArray, i.parseJSON = JSON.parse, i.nodeName = s, i.isFunction = e, i.isWindow = ft, i.camelCase = k, i.type = et, i.now = Date.now, i.isNumeric = function (n) {
        var t = i.type(n);
        return ("number" === t || "string" === t) && !isNaN(n - parseFloat(n))
    }, i.trim = function (n) {
        return null == n ? "" : (n + "").replace(oe, "$1")
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return i
    }), se = n.jQuery, he = n.$, i.noConflict = function (t) {
        return n.$ === i && (n.$ = he), t && n.jQuery === i && (n.jQuery = se), i
    }, "undefined" == typeof t && (n.jQuery = n.$ = i), i
})