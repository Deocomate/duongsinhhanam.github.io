function IndexJs() {
    $(".banner-list").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: !0,
        arrows: !1,
        dots: !1,
        autoplaySpeed: 2e3
    });
    $(".feedback-list").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: !0,
        arrows: !1,
        dots: !0,
        autoplaySpeed: 2e3
    })
}

"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0), function (n) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function (t) {
        return n(t, window)
    }) : "object" == typeof module && module.exports ? module.exports = n(require("jquery"), window) : n(jQuery, window)
}(function (n, t) {
    "use strict";

    function u(t) {
        return 0 <= function (n, t) {
            for (var r = /^(\d+)\.(\d+)\.(\d+)/, u = r.exec(n) || [], f = r.exec(t) || [], i = 1; i <= 3; i++) {
                if (+f[i] < +u[i]) return 1;
                if (+u[i] < +f[i]) return -1
            }
            return 0
        }(n.fn.jquery, t)
    }

    function i(i) {
        var r = t.console;
        n.migrateDeduplicateWarnings && e[i] || (e[i] = !0, n.migrateWarnings.push(i), r && r.warn && !n.migrateMute && (r.warn("JQMIGRATE: " + i), n.migrateTrace && r.trace && r.trace()))
    }

    function h(n, t, r, u) {
        Object.defineProperty(n, t, {
            configurable: !0, enumerable: !0, get: function () {
                return i(u), r
            }, set: function (n) {
                i(u);
                r = n
            }
        })
    }

    function r(n, t, r, u) {
        n[t] = function () {
            return i(u), r.apply(this, arguments)
        }
    }

    function l(n) {
        return n.replace(/-([a-z])/g, function (n, t) {
            return t.toUpperCase()
        })
    }

    function tt(n) {
        var i = t.document.implementation.createHTMLDocument("");
        return i.body.innerHTML = n, i.body && i.body.innerHTML
    }

    function it(n) {
        var t = n.replace(p, "<$1><\/$2>");
        t !== n && tt(n) !== tt(t) && i("HTML tags must be properly nested and closed: " + n)
    }

    var e, v, y, g, nt, f, p, rt, ut, ft, w, et, ot;
    n.migrateVersion = "3.3.2";
    t.console && t.console.log && (n && u("3.0.0") || t.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), n.migrateWarnings && t.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), t.console.log("JQMIGRATE: Migrate is installed" + (n.migrateMute ? "" : " with logging active") + ", version " + n.migrateVersion));
    e = {};
    n.migrateDeduplicateWarnings = !0;
    n.migrateWarnings = [];
    void 0 === n.migrateTrace && (n.migrateTrace = !0);
    n.migrateReset = function () {
        e = {};
        n.migrateWarnings.length = 0
    };
    "BackCompat" === t.document.compatMode && i("jQuery is not compatible with Quirks Mode");
    var o, b, c, k = {}, st = n.fn.init, s = n.find, ht = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
        ct = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g, lt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    for (o in n.fn.init = function (n) {
        var t = Array.prototype.slice.call(arguments);
        return "string" == typeof n && "#" === n && (i("jQuery( '#' ) is not a valid selector"), t[0] = []), st.apply(this, t)
    }, n.fn.init.prototype = n.fn, n.find = function (n) {
        var r = Array.prototype.slice.call(arguments);
        if ("string" == typeof n && ht.test(n)) try {
            t.document.querySelector(n)
        } catch (u) {
            n = n.replace(ct, function (n, t, i, r) {
                return "[" + t + i + '"' + r + '"]'
            });
            try {
                t.document.querySelector(n);
                i("Attribute selector with '#' must be quoted: " + r[0]);
                r[0] = n
            } catch (u) {
                i("Attribute selector with '#' was not fixed: " + r[0])
            }
        }
        return s.apply(this, r)
    }, s) Object.prototype.hasOwnProperty.call(s, o) && (n.find[o] = s[o]);
    r(n.fn, "size", function () {
        return this.length
    }, "jQuery.fn.size() is deprecated and removed; use the .length property");
    r(n, "parseJSON", function () {
        return JSON.parse.apply(null, arguments)
    }, "jQuery.parseJSON is deprecated; use JSON.parse");
    r(n, "holdReady", n.holdReady, "jQuery.holdReady is deprecated");
    r(n, "unique", n.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort");
    h(n.expr, "filters", n.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos");
    h(n.expr, ":", n.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos");
    u("3.1.1") && r(n, "trim", function (n) {
        return null == n ? "" : (n + "").replace(lt, "")
    }, "jQuery.trim is deprecated; use String.prototype.trim");
    u("3.2.0") && (r(n, "nodeName", function (n, t) {
        return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
    }, "jQuery.nodeName is deprecated"), r(n, "isArray", Array.isArray, "jQuery.isArray is deprecated; use Array.isArray"));
    u("3.3.0") && (r(n, "isNumeric", function (n) {
        var t = typeof n;
        return ("number" == t || "string" == t) && !isNaN(n - parseFloat(n))
    }, "jQuery.isNumeric() is deprecated"), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (n, t) {
        k["[object " + t + "]"] = t.toLowerCase()
    }), r(n, "type", function (n) {
        return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? k[Object.prototype.toString.call(n)] || "object" : typeof n
    }, "jQuery.type is deprecated"), r(n, "isFunction", function (n) {
        return "function" == typeof n
    }, "jQuery.isFunction() is deprecated"), r(n, "isWindow", function (n) {
        return null != n && n === n.window
    }, "jQuery.isWindow() is deprecated"));
    n.ajax && (b = n.ajax, c = /(=)\?(?=&|$)|\?\?/, n.ajax = function () {
        var n = b.apply(this, arguments);
        return n.promise && (r(n, "success", n.done, "jQXHR.success is deprecated and removed"), r(n, "error", n.fail, "jQXHR.error is deprecated and removed"), r(n, "complete", n.always, "jQXHR.complete is deprecated and removed")), n
    }, u("4.0.0") || n.ajaxPrefilter("+json", function (n) {
        !1 !== n.jsonp && (c.test(n.url) || "string" == typeof n.data && 0 === (n.contentType || "").indexOf("application/x-www-form-urlencoded") && c.test(n.data)) && i("JSON-to-JSONP auto-promotion is deprecated")
    }));
    var at = n.fn.removeAttr, vt = n.fn.toggleClass, yt = /\S+/g;
    n.fn.removeAttr = function (t) {
        var r = this;
        return n.each(t.match(yt), function (t, u) {
            n.expr.match.bool.test(u) && (i("jQuery.fn.removeAttr no longer sets boolean properties: " + u), r.prop(u, !1))
        }), at.apply(this, arguments)
    };
    var d, a = !(n.fn.toggleClass = function (t) {
            return void 0 !== t && "boolean" != typeof t ? vt.apply(this, arguments) : (i("jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function () {
                var i = this.getAttribute && this.getAttribute("class") || "";
                i && n.data(this, "__className__", i);
                this.setAttribute && this.setAttribute("class", !i && !1 !== t && n.data(this, "__className__") || "")
            }))
        }), pt = /^[a-z]/,
        wt = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    n.swap && n.each(["height", "width", "reliableMarginRight"], function (t, i) {
        var r = n.cssHooks[i] && n.cssHooks[i].get;
        r && (n.cssHooks[i].get = function () {
            var n;
            return a = !0, n = r.apply(this, arguments), a = !1, n
        })
    });
    n.swap = function (n, t, r, u) {
        var e, f, o = {};
        for (f in a || i("jQuery.swap() is undocumented and deprecated"), t) o[f] = n.style[f], n.style[f] = t[f];
        for (f in e = r.apply(n, u || []), t) n.style[f] = o[f];
        return e
    };
    u("3.4.0") && "undefined" != typeof Proxy && (n.cssProps = new Proxy(n.cssProps || {}, {
        set: function () {
            return i("JQMIGRATE: jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments)
        }
    }));
    n.cssNumber || (n.cssNumber = {});
    d = n.fn.css;
    n.fn.css = function (t, r) {
        var f, u, e = this;
        return t && "object" == typeof t && !Array.isArray(t) ? (n.each(t, function (t, i) {
            n.fn.css.call(e, t, i)
        }), this) : ("number" == typeof r && (f = l(t), u = f, pt.test(u) && wt.test(u[0].toUpperCase() + u.slice(1)) || n.cssNumber[f] || i('Number-typed values are deprecated for jQuery.fn.css( "' + t + '", value )')), d.apply(this, arguments))
    };
    f = n.data;
    n.data = function (t, r, u) {
        var o, s, e;
        if (r && "object" == typeof r && 2 === arguments.length) {
            for (e in o = n.hasData(t) && f.call(this, t), s = {}, r) e !== l(e) ? (i("jQuery.data() always sets/gets camelCased names: " + e), o[e] = r[e]) : s[e] = r[e];
            return f.call(this, t, s), r
        }
        return r && "string" == typeof r && r !== l(r) && (o = n.hasData(t) && f.call(this, t)) && r in o ? (i("jQuery.data() always sets/gets camelCased names: " + r), 2 < arguments.length && (o[r] = u), o[r]) : f.apply(this, arguments)
    };
    n.fx && (g = n.Tween.prototype.run, nt = function (n) {
        return n
    }, n.Tween.prototype.run = function () {
        1 < n.easing[this.easing].length && (i("'jQuery.easing." + this.easing.toString() + "' should use only one argument"), n.easing[this.easing] = nt);
        g.apply(this, arguments)
    }, v = n.fx.interval || 13, y = "jQuery.fx.interval is deprecated", t.requestAnimationFrame && Object.defineProperty(n.fx, "interval", {
        configurable: !0,
        enumerable: !0,
        get: function () {
            return t.document.hidden || i(y), v
        },
        set: function (n) {
            i(y);
            v = n
        }
    }));
    var bt = n.fn.load, kt = n.event.add, dt = n.event.fix;
    return n.event.props = [], n.event.fixHooks = {}, h(n.event.props, "concat", n.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"), n.event.fix = function (t) {
        var f, e = t.type, u = this.fixHooks[e], r = n.event.props;
        if (r.length) for (i("jQuery.event.props are deprecated and removed: " + r.join()); r.length;) n.event.addProp(r.pop());
        if (u && !u._migrated_ && (u._migrated_ = !0, i("jQuery.event.fixHooks are deprecated and removed: " + e), (r = u.props) && r.length)) while (r.length) n.event.addProp(r.pop());
        return f = dt.call(this, t), u && u.filter ? u.filter(f, t) : f
    }, n.event.add = function (n, r) {
        return n === t && "load" === r && "complete" === t.document.readyState && i("jQuery(window).on('load'...) called after load event occurred"), kt.apply(this, arguments)
    }, n.each(["load", "unload", "error"], function (t, r) {
        n.fn[r] = function () {
            var n = Array.prototype.slice.call(arguments, 0);
            return "load" === r && "string" == typeof n[0] ? bt.apply(this, n) : (i("jQuery.fn." + r + "() is deprecated"), n.splice(0, 0, r), arguments.length ? this.on.apply(this, n) : (this.triggerHandler.apply(this, n), this))
        }
    }), n.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, r) {
        n.fn[r] = function (n, t) {
            return i("jQuery.fn." + r + "() event shorthand is deprecated"), 0 < arguments.length ? this.on(r, null, n, t) : this.trigger(r)
        }
    }), n(function () {
        n(t.document).triggerHandler("ready")
    }), n.event.special.ready = {
        setup: function () {
            this === t.document && i("'ready' event is deprecated")
        }
    }, n.fn.extend({
        bind: function (n, t, r) {
            return i("jQuery.fn.bind() is deprecated"), this.on(n, null, t, r)
        }, unbind: function (n, t) {
            return i("jQuery.fn.unbind() is deprecated"), this.off(n, null, t)
        }, delegate: function (n, t, r, u) {
            return i("jQuery.fn.delegate() is deprecated"), this.on(t, n, r, u)
        }, undelegate: function (n, t, r) {
            return i("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", r)
        }, hover: function (n, t) {
            return i("jQuery.fn.hover() is deprecated"), this.on("mouseenter", n).on("mouseleave", t || n)
        }
    }), p = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, rt = n.htmlPrefilter, n.UNSAFE_restoreLegacyHtmlPrefilter = function () {
        n.htmlPrefilter = function (n) {
            return it(n), n.replace(p, "<$1><\/$2>")
        }
    }, n.htmlPrefilter = function (n) {
        return it(n), rt(n)
    }, ft = n.fn.offset, n.fn.offset = function () {
        var n = this[0];
        return !n || n.nodeType && n.getBoundingClientRect ? ft.apply(this, arguments) : (i("jQuery.fn.offset() requires a valid DOM element"), arguments.length ? this : void 0)
    }, n.ajax && (ut = n.param, n.param = function (t, r) {
        var u = n.ajaxSettings && n.ajaxSettings.traditional;
        return void 0 === r && u && (i("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), r = u), ut.call(this, t, r)
    }), ot = n.fn.andSelf || n.fn.addBack, n.fn.andSelf = function () {
        return i("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), ot.apply(this, arguments)
    }, n.Deferred && (w = n.Deferred, et = [["resolve", "done", n.Callbacks("once memory"), n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory"), n.Callbacks("memory")]], n.Deferred = function (t) {
        var r = w(), u = r.promise();
        return r.pipe = u.pipe = function () {
            var t = arguments;
            return i("deferred.pipe() is deprecated"), n.Deferred(function (i) {
                n.each(et, function (n, f) {
                    var e = "function" == typeof t[n] && t[n];
                    r[f[1]](function () {
                        var n = e && e.apply(this, arguments);
                        n && "function" == typeof n.promise ? n.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[f[0] + "With"](this === u ? i.promise() : this, e ? [n] : arguments)
                    })
                });
                t = null
            }).promise()
        }, t && t.call(r, r), r
    }, n.Deferred.exceptionHook = w.exceptionHook), n
});
!function (n, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t((n = "undefined" != typeof globalThis ? globalThis : n || self).bootstrap = {}, n.jQuery)
}(this, function (n, t) {
    "use strict";

    function yr(n) {
        return n && "object" == typeof n && "default" in n ? n : {"default": n}
    }

    function ci(n, t) {
        for (var i, r = 0; r < t.length; r++) i = t[r], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
    }

    function e(n, t, i) {
        return t && ci(n.prototype, t), i && ci(n, i), n
    }

    function u() {
        return (u = Object.assign || function (n) {
            for (var i, r, t = 1; t < arguments.length; t++) {
                i = arguments[t];
                for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r])
            }
            return n
        }).apply(this, arguments)
    }

    function pr(n) {
        var u = this, t = !1;
        return i.default(this).one(r.TRANSITION_END, function () {
            t = !0
        }), setTimeout(function () {
            t || r.triggerTransitionEnd(u)
        }, n), this
    }

    function vi(n) {
        return n && "[object Function]" === {}.toString.call(n)
    }

    function c(n, t) {
        if (1 !== n.nodeType) return [];
        var i = n.ownerDocument.defaultView.getComputedStyle(n, null);
        return t ? i[t] : i
    }

    function dt(n) {
        return "HTML" === n.nodeName ? n : n.parentNode || n.host
    }

    function st(n) {
        if (!n) return document.body;
        switch (n.nodeName) {
            case"HTML":
            case"BODY":
                return n.ownerDocument.body;
            case"#document":
                return n.body
        }
        var t = c(n), i = t.overflow, r = t.overflowX, u = t.overflowY;
        return /(auto|scroll|overlay)/.test(i + u + r) ? n : st(dt(n))
    }

    function yi(n) {
        return n && n.referenceNode ? n.referenceNode : n
    }

    function d(n) {
        return 11 === n ? gt : 10 === n ? ni : gt || ni
    }

    function g(n) {
        var r, t, i;
        if (!n) return document.documentElement;
        for (r = d(10) ? document.body : null, t = n.offsetParent || null; t === r && n.nextElementSibling;) t = (n = n.nextElementSibling).offsetParent;
        return i = t && t.nodeName, i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(t.nodeName) && "static" === c(t, "position") ? g(t) : t : n ? n.ownerDocument.documentElement : document.documentElement
    }

    function ti(n) {
        return null !== n.parentNode ? ti(n.parentNode) : n
    }

    function at(n, t) {
        var u, h, i, f;
        if (!(n && n.nodeType && t && t.nodeType)) return document.documentElement;
        var e = n.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, o = e ? n : t, s = e ? t : n,
            r = document.createRange();
        return (r.setStart(o, 0), r.setEnd(s, 0), i = r.commonAncestorContainer, n !== i && t !== i || o.contains(s)) ? "BODY" === (h = (u = i).nodeName) || "HTML" !== h && g(u.firstElementChild) !== u ? g(i) : i : (f = ti(n), f.host ? at(f.host, t) : at(n, ti(t).host))
    }

    function nt(n) {
        var f = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
            t = "top" === f ? "scrollTop" : "scrollLeft", i = n.nodeName, r, u;
        return "BODY" === i || "HTML" === i ? (r = n.ownerDocument.documentElement, u = n.ownerDocument.scrollingElement || r, u[t]) : n[t]
    }

    function ru(n, t) {
        var f = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = nt(t, "top"), u = nt(t, "left"),
            i = f ? -1 : 1;
        return n.top += r * i, n.bottom += r * i, n.left += u * i, n.right += u * i, n
    }

    function pi(n, t) {
        var i = "x" === t ? "Left" : "Top", r = "Left" === i ? "Right" : "Bottom";
        return parseFloat(n["border" + i + "Width"]) + parseFloat(n["border" + r + "Width"])
    }

    function wi(n, t, i, r) {
        return Math.max(t["offset" + n], t["scroll" + n], i["client" + n], i["offset" + n], i["scroll" + n], d(10) ? parseInt(i["offset" + n]) + parseInt(r["margin" + ("Height" === n ? "Top" : "Left")]) + parseInt(r["margin" + ("Height" === n ? "Bottom" : "Right")]) : 0)
    }

    function bi(n) {
        var i = n.body, t = n.documentElement, r = d(10) && getComputedStyle(t);
        return {height: wi("Height", i, t, r), width: wi("Width", i, t, r)}
    }

    function o(n) {
        return f({}, n, {right: n.left + n.width, bottom: n.top + n.height})
    }

    function ii(n) {
        var t = {}, r, u, s;
        try {
            d(10) ? (t = n.getBoundingClientRect(), r = nt(n, "top"), u = nt(n, "left"), t.top += r, t.left += u, t.bottom += r, t.right += u) : t = n.getBoundingClientRect()
        } catch (n) {
        }
        var i = {left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top},
            h = "HTML" === n.nodeName ? bi(n.ownerDocument) : {}, l = h.width || n.clientWidth || i.width,
            a = h.height || n.clientHeight || i.height, f = n.offsetWidth - l, e = n.offsetHeight - a;
        return (f || e) && (s = c(n), f -= pi(s, "x"), e -= pi(s, "y"), i.width -= f, i.height -= e), o(i)
    }

    function ri(n, t) {
        var v = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], y = d(10), p = "HTML" === t.nodeName,
            u = ii(n), r = ii(t), h = st(n), f = c(t), l = parseFloat(f.borderTopWidth),
            a = parseFloat(f.borderLeftWidth), i, e, s;
        return v && p && (r.top = Math.max(r.top, 0), r.left = Math.max(r.left, 0)), i = o({
            top: u.top - r.top - l,
            left: u.left - r.left - a,
            width: u.width,
            height: u.height
        }), (i.marginTop = 0, i.marginLeft = 0, !y && p) && (e = parseFloat(f.marginTop), s = parseFloat(f.marginLeft), i.top -= l - e, i.bottom -= l - e, i.left -= a - s, i.right -= a - s, i.marginTop = e, i.marginLeft = s), (y && !v ? t.contains(h) : t === h && "BODY" !== h.nodeName) && (i = ru(i, t)), i
    }

    function eu(n) {
        var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], t = n.ownerDocument.documentElement,
            i = ri(n, t), u = Math.max(t.clientWidth, window.innerWidth || 0),
            f = Math.max(t.clientHeight, window.innerHeight || 0), e = r ? 0 : nt(t), s = r ? 0 : nt(t, "left"),
            h = {top: e - i.top + i.marginTop, left: s - i.left + i.marginLeft, width: u, height: f};
        return o(h)
    }

    function ki(n) {
        var i = n.nodeName, t;
        return "BODY" === i || "HTML" === i ? !1 : "fixed" === c(n, "position") ? !0 : (t = dt(n), !!t && ki(t))
    }

    function di(n) {
        if (!n || !n.parentElement || d()) return document.documentElement;
        for (var t = n.parentElement; t && "none" === c(t, "transform");) t = t.parentElement;
        return t || document.documentElement
    }

    function ui(n, t, i, r) {
        var s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], u = {top: 0, left: 0},
            h = s ? di(n) : at(n, yi(t)), e, f, o;
        if ("viewport" === r) u = eu(h, s); else if (e = void 0, "scrollParent" === r ? "BODY" === (e = st(dt(t))).nodeName && (e = n.ownerDocument.documentElement) : e = "window" === r ? n.ownerDocument.documentElement : r, f = ri(e, h, s), "HTML" !== e.nodeName || ki(h)) u = f; else {
            var c = bi(n.ownerDocument), l = c.height, a = c.width;
            u.top += f.top - f.marginTop;
            u.bottom = l + f.top;
            u.left += f.left - f.marginLeft;
            u.right = a + f.left
        }
        return o = "number" == typeof (i = i || 0), u.left += o ? i : i.left || 0, u.top += o ? i : i.top || 0, u.right -= o ? i : i.right || 0, u.bottom -= o ? i : i.bottom || 0, u
    }

    function ou(n) {
        return n.width * n.height
    }

    function gi(n, t, i, r, u) {
        var l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === n.indexOf("auto")) return n;
        var e = ui(i, r, l, u), o = {
            top: {width: e.width, height: t.top - e.top},
            right: {width: e.right - t.right, height: e.height},
            bottom: {width: e.width, height: e.bottom - t.bottom},
            left: {width: t.left - e.left, height: e.height}
        }, s = Object.keys(o).map(function (n) {
            return f({key: n}, o[n], {area: ou(o[n])})
        }).sort(function (n, t) {
            return t.area - n.area
        }), h = s.filter(function (n) {
            var t = n.width, r = n.height;
            return t >= i.clientWidth && r >= i.clientHeight
        }), a = h.length > 0 ? h[0].key : s[0].key, c = n.split("-")[1];
        return a + (c ? "-" + c : "")
    }

    function nr(n, t, i) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, u = r ? di(t) : at(t, yi(i));
        return ri(i, u, r)
    }

    function tr(n) {
        var t = n.ownerDocument.defaultView.getComputedStyle(n),
            i = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
            r = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {width: n.offsetWidth + r, height: n.offsetHeight + i}
    }

    function vt(n) {
        var t = {left: "right", right: "left", bottom: "top", top: "bottom"};
        return n.replace(/left|right|bottom|top/g, function (n) {
            return t[n]
        })
    }

    function ir(n, t, i) {
        i = i.split("-")[0];
        var r = tr(n), e = {width: r.width, height: r.height}, u = -1 !== ["right", "left"].indexOf(i),
            o = u ? "top" : "left", f = u ? "left" : "top", s = u ? "height" : "width", h = u ? "width" : "height";
        return e[o] = t[o] + t[s] / 2 - r[s] / 2, e[f] = i === f ? t[f] - r[h] : t[vt(f)], e
    }

    function ht(n, t) {
        return Array.prototype.find ? n.find(t) : n.filter(t)[0]
    }

    function rr(n, t, i) {
        return (void 0 === i ? n : n.slice(0, function (n, t, i) {
            if (Array.prototype.findIndex) return n.findIndex(function (n) {
                return n[t] === i
            });
            var r = ht(n, function (n) {
                return n[t] === i
            });
            return n.indexOf(r)
        }(n, "name", i))).forEach(function (n) {
            n.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var i = n.function || n.fn;
            n.enabled && vi(i) && (t.offsets.popper = o(t.offsets.popper), t.offsets.reference = o(t.offsets.reference), t = i(t, n))
        }), t
    }

    function su() {
        if (!this.state.isDestroyed) {
            var n = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
            n.offsets.reference = nr(this.state, this.popper, this.reference, this.options.positionFixed);
            n.placement = gi(this.options.placement, n.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);
            n.originalPlacement = n.placement;
            n.positionFixed = this.options.positionFixed;
            n.offsets.popper = ir(this.popper, n.offsets.reference, n.placement);
            n.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute";
            n = rr(this.modifiers, n);
            this.state.isCreated ? this.options.onUpdate(n) : (this.state.isCreated = !0, this.options.onCreate(n))
        }
    }

    function ur(n, t) {
        return n.some(function (n) {
            var i = n.name;
            return n.enabled && i === t
        })
    }

    function fi(n) {
        for (var i, r, u = [!1, "ms", "Webkit", "Moz", "O"], f = n.charAt(0).toUpperCase() + n.slice(1), t = 0; t < u.length; t++) if (i = u[t], r = i ? "" + i + f : n, "undefined" != typeof document.body.style[r]) return r;
        return null
    }

    function hu() {
        return this.state.isDestroyed = !0, ur(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[fi("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function fr(n) {
        var t = n.ownerDocument;
        return t ? t.defaultView : window
    }

    function cu(n, t, i, r) {
        i.updateBound = r;
        fr(n).addEventListener("resize", i.updateBound, {passive: !0});
        var u = st(n);
        return function n(t, i, r, u) {
            var e = "BODY" === t.nodeName, f = e ? t.ownerDocument.defaultView : t;
            f.addEventListener(i, r, {passive: !0});
            e || n(st(f.parentNode), i, r, u);
            u.push(f)
        }(u, "scroll", i.updateBound, i.scrollParents), i.scrollElement = u, i.eventsEnabled = !0, i
    }

    function lu() {
        this.state.eventsEnabled || (this.state = cu(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function au() {
        var t, n;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, n = this.state, fr(t).removeEventListener("resize", n.updateBound), n.scrollParents.forEach(function (t) {
            t.removeEventListener("scroll", n.updateBound)
        }), n.updateBound = null, n.scrollParents = [], n.scrollElement = null, n.eventsEnabled = !1, n))
    }

    function ei(n) {
        return "" !== n && !isNaN(parseFloat(n)) && isFinite(n)
    }

    function oi(n, t) {
        Object.keys(t).forEach(function (i) {
            var r = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && ei(t[i]) && (r = "px");
            n.style[i] = t[i] + r
        })
    }

    function or(n, t, i) {
        var u = ht(n, function (n) {
            return n.name === t
        }), f = !!u && n.some(function (n) {
            return n.name === i && n.enabled && n.order < u.order
        }), r, e;
        return f || (r = "`" + t + "`", e = "`" + i + "`", console.warn(e + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")), f
    }

    function sr(n) {
        var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], t = yt.indexOf(n),
            i = yt.slice(t + 1).concat(yt.slice(0, t));
        return r ? i.reverse() : i
    }

    function wu(n, t, i, r) {
        var h = [0, 0], c = -1 !== ["right", "left"].indexOf(r), u = n.split(/(\+|\-)/).map(function (n) {
            return n.trim()
        }), f = u.indexOf(ht(u, function (n) {
            return -1 !== n.search(/,|\s/)
        })), e, s;
        return u[f] && -1 === u[f].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead."), e = /\s*,\s*|\s+/, s = -1 !== f ? [u.slice(0, f).concat([u[f].split(e)[0]]), [u[f].split(e)[1]].concat(u.slice(f + 1))] : [u], (s = s.map(function (n, r) {
            var f = (1 === r ? !c : c) ? "height" : "width", u = !1;
            return n.reduce(function (n, t) {
                return "" === n[n.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (n[n.length - 1] = t, u = !0, n) : u ? (n[n.length - 1] += t, u = !1, n) : n.concat(t)
            }, []).map(function (n) {
                return function (n, t, i, r) {
                    var s = n.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), f = +s[1], u = s[2], e;
                    if (!f) return n;
                    if (0 === u.indexOf("%")) {
                        e = void 0;
                        switch (u) {
                            case"%p":
                                e = i;
                                break;
                            case"%":
                            case"%r":
                            default:
                                e = r
                        }
                        return o(e)[t] / 100 * f
                    }
                    return "vh" === u || "vw" === u ? ("vh" === u ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * f : f
                }(n, f, t, i)
            })
        })).forEach(function (n, t) {
            n.forEach(function (i, r) {
                ei(i) && (h[t] += i * ("-" === n[r - 1] ? -1 : 1))
            })
        }), h
    }

    function cr(n, t, i) {
        if (0 === n.length) return n;
        if (i && "function" == typeof i) return i(n);
        for (var u = (new window.DOMParser).parseFromString(n, "text/html"), e = Object.keys(t), f = [].slice.call(u.body.querySelectorAll("*")), o = function (n) {
            var i = f[n], o = i.nodeName.toLowerCase(), r, u;
            if (-1 === e.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
            r = [].slice.call(i.attributes);
            u = [].concat(t["*"] || [], t[o] || []);
            r.forEach(function (n) {
                (function (n, t) {
                    var i = n.nodeName.toLowerCase();
                    if (-1 !== t.indexOf(i)) return -1 === rf.indexOf(i) || Boolean(n.nodeValue.match(uf) || n.nodeValue.match(ff));
                    for (var u = t.filter(function (n) {
                        return n instanceof RegExp
                    }), r = 0, f = u.length; r < f; r++) if (i.match(u[r])) return !0;
                    return !1
                })(n, u) || i.removeAttribute(n.nodeName)
            })
        }, r = 0, s = f.length; r < s; r++) o(r);
        return u.body.innerHTML
    }

    var i = yr(t), r = {
        TRANSITION_END: "bsTransitionEnd", getUID: function (n) {
            do n += ~~(1e6 * Math.random()); while (document.getElementById(n));
            return n
        }, getSelectorFromElement: function (n) {
            var t = n.getAttribute("data-target"), i;
            t && "#" !== t || (i = n.getAttribute("href"), t = i && "#" !== i ? i.trim() : "");
            try {
                return document.querySelector(t) ? t : null
            } catch (n) {
                return null
            }
        }, getTransitionDurationFromElement: function (n) {
            if (!n) return 0;
            var t = i.default(n).css("transition-duration"), r = i.default(n).css("transition-delay"),
                u = parseFloat(t), f = parseFloat(r);
            return u || f ? (t = t.split(",")[0], r = r.split(",")[0], 1e3 * (parseFloat(t) + parseFloat(r))) : 0
        }, reflow: function (n) {
            return n.offsetHeight
        }, triggerTransitionEnd: function (n) {
            i.default(n).trigger("transitionend")
        }, supportsTransitionEnd: function () {
            return Boolean("transitionend")
        }, isElement: function (n) {
            return (n[0] || n).nodeType
        }, typeCheckConfig: function (n, t, i) {
            var u, f;
            for (u in i) if (Object.prototype.hasOwnProperty.call(i, u)) {
                var o = i[u], e = t[u],
                    s = e && r.isElement(e) ? "element" : null === (f = e) || "undefined" == typeof f ? "" + f : {}.toString.call(f).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(o).test(s)) throw new Error(n.toUpperCase() + ': Option "' + u + '" provided type "' + s + '" but expected type "' + o + '".');
            }
        }, findShadowRoot: function (n) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof n.getRootNode) {
                var t = n.getRootNode();
                return t instanceof ShadowRoot ? t : null
            }
            return n instanceof ShadowRoot ? n : n.parentNode ? r.findShadowRoot(n.parentNode) : null
        }, jQueryDetection: function () {
            if ("undefined" == typeof i.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var n = i.default.fn.jquery.split(" ")[0].split(".");
            if (n[0] < 2 && n[1] < 9 || 1 === n[0] && 9 === n[1] && n[2] < 1 || n[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
        }
    }, li, p, gt, ni, er, si, yt, hr, s, ar, ut;
    r.jQueryDetection();
    i.default.fn.emulateTransitionEnd = pr;
    i.default.event.special[r.TRANSITION_END] = {
        bindType: "transitionend",
        delegateType: "transitionend",
        handle: function (n) {
            if (i.default(n.target).is(this)) return n.handleObj.handler.apply(this, arguments)
        }
    };
    var ft = "alert", wr = i.default.fn[ft], y = function () {
        function n(n) {
            this._element = n
        }

        var t = n.prototype;
        return t.close = function (n) {
            var t = this._element;
            n && (t = this._getRootElement(n));
            this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
        }, t.dispose = function () {
            i.default.removeData(this._element, "bs.alert");
            this._element = null
        }, t._getRootElement = function (n) {
            var u = r.getSelectorFromElement(n), t = !1;
            return u && (t = document.querySelector(u)), t || (t = i.default(n).closest(".alert")[0]), t
        }, t._triggerCloseEvent = function (n) {
            var t = i.default.Event("close.bs.alert");
            return i.default(n).trigger(t), t
        }, t._removeElement = function (n) {
            var u = this, t;
            (i.default(n).removeClass("show"), i.default(n).hasClass("fade")) ? (t = r.getTransitionDurationFromElement(n), i.default(n).one(r.TRANSITION_END, function (t) {
                return u._destroyElement(n, t)
            }).emulateTransitionEnd(t)) : this._destroyElement(n)
        }, t._destroyElement = function (n) {
            i.default(n).detach().trigger("closed.bs.alert").remove()
        }, n._jQueryInterface = function (t) {
            return this.each(function () {
                var u = i.default(this), r = u.data("bs.alert");
                r || (r = new n(this), u.data("bs.alert", r));
                "close" === t && r[t](this)
            })
        }, n._handleDismiss = function (n) {
            return function (t) {
                t && t.preventDefault();
                n.close(this)
            }
        }, e(n, null, [{
            key: "VERSION", get: function () {
                return "4.6.0"
            }
        }]), n
    }();
    i.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', y._handleDismiss(new y));
    i.default.fn[ft] = y._jQueryInterface;
    i.default.fn[ft].Constructor = y;
    i.default.fn[ft].noConflict = function () {
        return i.default.fn[ft] = wr, y._jQueryInterface
    };
    li = i.default.fn.button;
    p = function () {
        function n(n) {
            this._element = n;
            this.shouldAvoidTriggerChange = !1
        }

        var t = n.prototype;
        return t.toggle = function () {
            var t = !0, u = !0, f = i.default(this._element).closest('[data-toggle="buttons"]')[0], n, r;
            f && (n = this._element.querySelector('input:not([type="hidden"])'), n && ("radio" === n.type && (n.checked && this._element.classList.contains("active") ? t = !1 : (r = f.querySelector(".active"), r && i.default(r).removeClass("active"))), t && ("checkbox" !== n.type && "radio" !== n.type || (n.checked = !this._element.classList.contains("active")), this.shouldAvoidTriggerChange || i.default(n).trigger("change")), n.focus(), u = !1));
            this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (u && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), t && i.default(this._element).toggleClass("active"))
        }, t.dispose = function () {
            i.default.removeData(this._element, "bs.button");
            this._element = null
        }, n._jQueryInterface = function (t, r) {
            return this.each(function () {
                var f = i.default(this), u = f.data("bs.button");
                u || (u = new n(this), f.data("bs.button", u));
                u.shouldAvoidTriggerChange = r;
                "toggle" === t && u[t]()
            })
        }, e(n, null, [{
            key: "VERSION", get: function () {
                return "4.6.0"
            }
        }]), n
    }();
    i.default(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
        var t = n.target, u = t, r;
        if (i.default(t).hasClass("btn") || (t = i.default(t).closest(".btn")[0]), !t || t.hasAttribute("disabled") || t.classList.contains("disabled")) n.preventDefault(); else {
            if (r = t.querySelector('input:not([type="hidden"])'), r && (r.hasAttribute("disabled") || r.classList.contains("disabled"))) return void n.preventDefault();
            "INPUT" !== u.tagName && "LABEL" === t.tagName || p._jQueryInterface.call(i.default(t), "toggle", "INPUT" === u.tagName)
        }
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (n) {
        var t = i.default(n.target).closest(".btn")[0];
        i.default(t).toggleClass("focus", /^focus(in)?$/.test(n.type))
    });
    i.default(window).on("load.bs.button.data-api", function () {
        for (var t, f, i, e, r, n = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), u = 0, o = n.length; u < o; u++) t = n[u], f = t.querySelector('input:not([type="hidden"])'), f.checked || f.hasAttribute("checked") ? t.classList.add("active") : t.classList.remove("active");
        for (i = 0, e = (n = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; i < e; i++) r = n[i], "true" === r.getAttribute("aria-pressed") ? r.classList.add("active") : r.classList.remove("active")
    });
    i.default.fn.button = p._jQueryInterface;
    i.default.fn.button.Constructor = p;
    i.default.fn.button.noConflict = function () {
        return i.default.fn.button = li, p._jQueryInterface
    };
    var w = "carousel", br = ".bs.carousel", kr = i.default.fn[w],
        bt = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0}, dr = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        }, ai = {TOUCH: "touch", PEN: "pen"}, b = function () {
            function t(n, t) {
                this._items = null;
                this._interval = null;
                this._activeElement = null;
                this._isPaused = !1;
                this._isSliding = !1;
                this.touchTimeout = null;
                this.touchStartX = 0;
                this.touchDeltaX = 0;
                this._config = this._getConfig(t);
                this._element = n;
                this._indicatorsElement = this._element.querySelector(".carousel-indicators");
                this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
                this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);
                this._addEventListeners()
            }

            var n = t.prototype;
            return n.next = function () {
                this._isSliding || this._slide("next")
            }, n.nextWhenVisible = function () {
                var n = i.default(this._element);
                !document.hidden && n.is(":visible") && "hidden" !== n.css("visibility") && this.next()
            }, n.prev = function () {
                this._isSliding || this._slide("prev")
            }, n.pause = function (n) {
                n || (this._isPaused = !0);
                this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (r.triggerTransitionEnd(this._element), this.cycle(!0));
                clearInterval(this._interval);
                this._interval = null
            }, n.cycle = function (n) {
                n || (this._isPaused = !1);
                this._interval && (clearInterval(this._interval), this._interval = null);
                this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, n.to = function (n) {
                var u = this, t, r;
                if (this._activeElement = this._element.querySelector(".active.carousel-item"), t = this._getItemIndex(this._activeElement), !(n > this._items.length - 1 || n < 0)) if (this._isSliding) i.default(this._element).one("slid.bs.carousel", function () {
                    return u.to(n)
                }); else {
                    if (t === n) return this.pause(), void this.cycle();
                    r = n > t ? "next" : "prev";
                    this._slide(r, this._items[n])
                }
            }, n.dispose = function () {
                i.default(this._element).off(br);
                i.default.removeData(this._element, "bs.carousel");
                this._items = null;
                this._config = null;
                this._element = null;
                this._interval = null;
                this._isPaused = null;
                this._isSliding = null;
                this._activeElement = null;
                this._indicatorsElement = null
            }, n._getConfig = function (n) {
                return n = u({}, bt, n), r.typeCheckConfig(w, n, dr), n
            }, n._handleSwipe = function () {
                var t = Math.abs(this.touchDeltaX), n;
                t <= 40 || (n = t / this.touchDeltaX, this.touchDeltaX = 0, n > 0 && this.prev(), n < 0 && this.next())
            }, n._addEventListeners = function () {
                var n = this;
                this._config.keyboard && i.default(this._element).on("keydown.bs.carousel", function (t) {
                    return n._keydown(t)
                });
                "hover" === this._config.pause && i.default(this._element).on("mouseenter.bs.carousel", function (t) {
                    return n.pause(t)
                }).on("mouseleave.bs.carousel", function (t) {
                    return n.cycle(t)
                });
                this._config.touch && this._addTouchEventListeners()
            }, n._addTouchEventListeners = function () {
                var n = this, t, r;
                this._touchSupported && (t = function (t) {
                    n._pointerEvent && ai[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX)
                }, r = function (t) {
                    n._pointerEvent && ai[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX);
                    n._handleSwipe();
                    "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function (t) {
                        return n.cycle(t)
                    }, 500 + n._config.interval))
                }, i.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function (n) {
                    return n.preventDefault()
                }), this._pointerEvent ? (i.default(this._element).on("pointerdown.bs.carousel", function (n) {
                    return t(n)
                }), i.default(this._element).on("pointerup.bs.carousel", function (n) {
                    return r(n)
                }), this._element.classList.add("pointer-event")) : (i.default(this._element).on("touchstart.bs.carousel", function (n) {
                    return t(n)
                }), i.default(this._element).on("touchmove.bs.carousel", function (t) {
                    return function (t) {
                        n.touchDeltaX = t.originalEvent.touches && t.originalEvent.touches.length > 1 ? 0 : t.originalEvent.touches[0].clientX - n.touchStartX
                    }(t)
                }), i.default(this._element).on("touchend.bs.carousel", function (n) {
                    return r(n)
                })))
            }, n._keydown = function (n) {
                if (!/input|textarea/i.test(n.target.tagName)) switch (n.which) {
                    case 37:
                        n.preventDefault();
                        this.prev();
                        break;
                    case 39:
                        n.preventDefault();
                        this.next()
                }
            }, n._getItemIndex = function (n) {
                return this._items = n && n.parentNode ? [].slice.call(n.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(n)
            }, n._getItemByDirection = function (n, t) {
                var u = "next" === n, f = "prev" === n, i = this._getItemIndex(t), e = this._items.length - 1, r;
                return (f && 0 === i || u && i === e) && !this._config.wrap ? t : (r = (i + ("prev" === n ? -1 : 1)) % this._items.length, -1 === r ? this._items[this._items.length - 1] : this._items[r])
            }, n._triggerSlideEvent = function (n, t) {
                var u = this._getItemIndex(n), f = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
                    r = i.default.Event("slide.bs.carousel", {relatedTarget: n, direction: t, from: f, to: u});
                return i.default(this._element).trigger(r), r
            }, n._setActiveIndicatorElement = function (n) {
                var r, t;
                this._indicatorsElement && (r = [].slice.call(this._indicatorsElement.querySelectorAll(".active")), i.default(r).removeClass("active"), t = this._indicatorsElement.children[this._getItemIndex(n)], t && i.default(t).addClass("active"))
            }, n._updateInterval = function () {
                var t = this._activeElement || this._element.querySelector(".active.carousel-item"), n;
                t && (n = parseInt(t.getAttribute("data-interval"), 10), n ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = n) : this._config.interval = this._config.defaultInterval || this._config.interval)
            }, n._slide = function (n, t) {
                var e, o, s, c = this, f = this._element.querySelector(".active.carousel-item"), v = this._getItemIndex(f),
                    u = t || f && this._getItemByDirection(n, f), y = this._getItemIndex(u), l = Boolean(this._interval), h,
                    a;
                ("next" === n ? (e = "carousel-item-left", o = "carousel-item-next", s = "left") : (e = "carousel-item-right", o = "carousel-item-prev", s = "right"), u && i.default(u).hasClass("active")) ? this._isSliding = !1 : !this._triggerSlideEvent(u, s).isDefaultPrevented() && f && u && (this._isSliding = !0, l && this.pause(), this._setActiveIndicatorElement(u), this._activeElement = u, h = i.default.Event("slid.bs.carousel", {
                    relatedTarget: u,
                    direction: s,
                    from: v,
                    to: y
                }), i.default(this._element).hasClass("slide") ? (i.default(u).addClass(o), r.reflow(u), i.default(f).addClass(e), i.default(u).addClass(e), a = r.getTransitionDurationFromElement(f), i.default(f).one(r.TRANSITION_END, function () {
                    i.default(u).removeClass(e + " " + o).addClass("active");
                    i.default(f).removeClass("active " + o + " " + e);
                    c._isSliding = !1;
                    setTimeout(function () {
                        return i.default(c._element).trigger(h)
                    }, 0)
                }).emulateTransitionEnd(a)) : (i.default(f).removeClass("active"), i.default(u).addClass("active"), this._isSliding = !1, i.default(this._element).trigger(h)), l && this.cycle())
            }, t._jQueryInterface = function (n) {
                return this.each(function () {
                    var r = i.default(this).data("bs.carousel"), f = u({}, bt, i.default(this).data()), e;
                    if ("object" == typeof n && (f = u({}, f, n)), e = "string" == typeof n ? n : f.slide, r || (r = new t(this, f), i.default(this).data("bs.carousel", r)), "number" == typeof n) r.to(n); else if ("string" == typeof e) {
                        if ("undefined" == typeof r[e]) throw new TypeError('No method named "' + e + '"');
                        r[e]()
                    } else f.interval && f.ride && (r.pause(), r.cycle())
                })
            }, t._dataApiClickHandler = function (n) {
                var s = r.getSelectorFromElement(this), f, o, e;
                s && (f = i.default(s)[0], f && i.default(f).hasClass("carousel") && (o = u({}, i.default(f).data(), i.default(this).data()), e = this.getAttribute("data-slide-to"), e && (o.interval = !1), t._jQueryInterface.call(i.default(f), o), e && i.default(f).data("bs.carousel").to(e), n.preventDefault()))
            }, e(t, null, [{
                key: "VERSION", get: function () {
                    return "4.6.0"
                }
            }, {
                key: "Default", get: function () {
                    return bt
                }
            }]), t
        }();
    i.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", b._dataApiClickHandler);
    i.default(window).on("load.bs.carousel.data-api", function () {
        for (var t, r = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, u = r.length; n < u; n++) t = i.default(r[n]), b._jQueryInterface.call(t, t.data())
    });
    i.default.fn[w] = b._jQueryInterface;
    i.default.fn[w].Constructor = b;
    i.default.fn[w].noConflict = function () {
        return i.default.fn[w] = kr, b._jQueryInterface
    };
    var k = "collapse", gr = i.default.fn[k], kt = {toggle: !0, parent: ""},
        nu = {toggle: "boolean", parent: "(string|element)"}, et = function () {
            function t(n, t) {
                this._isTransitioning = !1;
                this._element = n;
                this._config = this._getConfig(t);
                this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + n.id + '"],[data-toggle="collapse"][data-target="#' + n.id + '"]'));
                for (var f = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), i = 0, o = f.length; i < o; i++) {
                    var e = f[i], u = r.getSelectorFromElement(e),
                        s = [].slice.call(document.querySelectorAll(u)).filter(function (t) {
                            return t === n
                        });
                    null !== u && s.length > 0 && (this._selector = u, this._triggerArray.push(e))
                }
                this._parent = this._config.parent ? this._getParent() : null;
                this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray);
                this._config.toggle && this.toggle()
            }

            var n = t.prototype;
            return n.toggle = function () {
                i.default(this._element).hasClass("show") ? this.hide() : this.show()
            }, n.show = function () {
                var n, e, u = this, o, f, s, h;
                this._isTransitioning || i.default(this._element).hasClass("show") || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function (n) {
                    return "string" == typeof u._config.parent ? n.getAttribute("data-parent") === u._config.parent : n.classList.contains("collapse")
                })).length && (n = null), n && (e = i.default(n).not(this._selector).data("bs.collapse")) && e._isTransitioning) || (o = i.default.Event("show.bs.collapse"), (i.default(this._element).trigger(o), o.isDefaultPrevented()) || (n && (t._jQueryInterface.call(i.default(n).not(this._selector), "hide"), e || i.default(n).data("bs.collapse", null)), f = this._getDimension(), i.default(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[f] = 0, this._triggerArray.length && i.default(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0), s = "scroll" + (f[0].toUpperCase() + f.slice(1)), h = r.getTransitionDurationFromElement(this._element), i.default(this._element).one(r.TRANSITION_END, function () {
                    i.default(u._element).removeClass("collapsing").addClass("collapse show");
                    u._element.style[f] = "";
                    u.setTransitioning(!1);
                    i.default(u._element).trigger("shown.bs.collapse")
                }).emulateTransitionEnd(h), this._element.style[f] = this._element[s] + "px"))
            }, n.hide = function () {
                var s = this, u, n, f, t, e, o, h;
                if (!this._isTransitioning && i.default(this._element).hasClass("show") && (u = i.default.Event("hide.bs.collapse"), i.default(this._element).trigger(u), !u.isDefaultPrevented())) {
                    if (n = this._getDimension(), this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", r.reflow(this._element), i.default(this._element).addClass("collapsing").removeClass("collapse show"), f = this._triggerArray.length, f > 0) for (t = 0; t < f; t++) e = this._triggerArray[t], o = r.getSelectorFromElement(e), null !== o && (i.default([].slice.call(document.querySelectorAll(o))).hasClass("show") || i.default(e).addClass("collapsed").attr("aria-expanded", !1));
                    this.setTransitioning(!0);
                    this._element.style[n] = "";
                    h = r.getTransitionDurationFromElement(this._element);
                    i.default(this._element).one(r.TRANSITION_END, function () {
                        s.setTransitioning(!1);
                        i.default(s._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    }).emulateTransitionEnd(h)
                }
            }, n.setTransitioning = function (n) {
                this._isTransitioning = n
            }, n.dispose = function () {
                i.default.removeData(this._element, "bs.collapse");
                this._config = null;
                this._parent = null;
                this._element = null;
                this._triggerArray = null;
                this._isTransitioning = null
            }, n._getConfig = function (n) {
                return (n = u({}, kt, n)).toggle = Boolean(n.toggle), r.typeCheckConfig(k, n, nu), n
            }, n._getDimension = function () {
                return i.default(this._element).hasClass("width") ? "width" : "height"
            }, n._getParent = function () {
                var n, e = this, u, f;
                return r.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent), u = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]', f = [].slice.call(n.querySelectorAll(u)), i.default(f).each(function (n, i) {
                    e._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i])
                }), n
            }, n._addAriaAndCollapsedClass = function (n, t) {
                var r = i.default(n).hasClass("show");
                t.length && i.default(t).toggleClass("collapsed", !r).attr("aria-expanded", r)
            }, t._getTargetFromElement = function (n) {
                var t = r.getSelectorFromElement(n);
                return t ? document.querySelector(t) : null
            }, t._jQueryInterface = function (n) {
                return this.each(function () {
                    var f = i.default(this), r = f.data("bs.collapse"),
                        e = u({}, kt, f.data(), "object" == typeof n && n ? n : {});
                    if (!r && e.toggle && "string" == typeof n && /show|hide/.test(n) && (e.toggle = !1), r || (r = new t(this, e), f.data("bs.collapse", r)), "string" == typeof n) {
                        if ("undefined" == typeof r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n]()
                    }
                })
            }, e(t, null, [{
                key: "VERSION", get: function () {
                    return "4.6.0"
                }
            }, {
                key: "Default", get: function () {
                    return kt
                }
            }]), t
        }();
    i.default(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (n) {
        "A" === n.currentTarget.tagName && n.preventDefault();
        var t = i.default(this), u = r.getSelectorFromElement(this), f = [].slice.call(document.querySelectorAll(u));
        i.default(f).each(function () {
            var n = i.default(this), r = n.data("bs.collapse") ? "toggle" : t.data();
            et._jQueryInterface.call(n, r)
        })
    });
    i.default.fn[k] = et._jQueryInterface;
    i.default.fn[k].Constructor = et;
    i.default.fn[k].noConflict = function () {
        return i.default.fn[k] = gr, et._jQueryInterface
    };
    var ot = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
        tu = function () {
            for (var t = ["Edge", "Trident", "Firefox"], n = 0; n < t.length; n += 1) if (ot && navigator.userAgent.indexOf(t[n]) >= 0) return 1;
            return 0
        }(), iu = ot && window.Promise ? function (n) {
            var t = !1;
            return function () {
                t || (t = !0, window.Promise.resolve().then(function () {
                    t = !1;
                    n()
                }))
            }
        } : function (n) {
            var t = !1;
            return function () {
                t || (t = !0, setTimeout(function () {
                    t = !1;
                    n()
                }, tu))
            }
        };
    gt = ot && !(!window.MSInputMethodContext || !document.documentMode);
    ni = ot && /MSIE 10/.test(navigator.userAgent);
    var uu = function (n, t) {
        if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
    }, fu = function () {
        function n(n, t) {
            for (var i, r = 0; r < t.length; r++) i = t[r], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
        }

        return function (t, i, r) {
            return i && n(t.prototype, i), r && n(t, r), t
        }
    }(), tt = function (n, t, i) {
        return t in n ? Object.defineProperty(n, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : n[t] = i, n
    }, f = Object.assign || function (n) {
        for (var i, r, t = 1; t < arguments.length; t++) {
            i = arguments[t];
            for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r])
        }
        return n
    };
    er = ot && /Firefox/i.test(navigator.userAgent);
    si = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"];
    yt = si.slice(3);
    var vu = "flip", yu = "clockwise", pu = "counterclockwise";
    hr = {
        placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {
        }, onUpdate: function () {
        }, modifiers: {
            shift: {
                order: 100, enabled: !0, fn: function (n) {
                    var r = n.placement, c = r.split("-")[0], u = r.split("-")[1];
                    if (u) {
                        var e = n.offsets, i = e.reference, o = e.popper, s = -1 !== ["bottom", "top"].indexOf(c),
                            t = s ? "left" : "top", h = s ? "width" : "height",
                            l = {start: tt({}, t, i[t]), end: tt({}, t, i[t] + i[h] - o[h])};
                        n.offsets.popper = f({}, o, l[u])
                    }
                    return n
                }
            }, offset: {
                order: 200, enabled: !0, fn: function (n, t) {
                    var f = t.offset, o = n.placement, e = n.offsets, i = e.popper, s = e.reference,
                        u = o.split("-")[0], r = void 0;
                    return r = ei(+f) ? [+f, 0] : wu(f, i, s, u), "left" === u ? (i.top += r[0], i.left -= r[1]) : "right" === u ? (i.top += r[0], i.left += r[1]) : "top" === u ? (i.left += r[0], i.top -= r[1]) : "bottom" === u && (i.left += r[0], i.top += r[1]), n.popper = i, n
                }, offset: 0
            }, preventOverflow: {
                order: 300, enabled: !0, fn: function (n, t) {
                    var e = t.boundariesElement || g(n.instance.popper), u;
                    n.instance.reference === e && (e = g(e));
                    var o = fi("transform"), r = n.instance.popper.style, s = r.top, h = r.left, c = r[o];
                    r.top = "";
                    r.left = "";
                    r[o] = "";
                    u = ui(n.instance.popper, n.instance.reference, t.padding, e, n.positionFixed);
                    r.top = s;
                    r.left = h;
                    r[o] = c;
                    t.boundaries = u;
                    var l = t.priority, i = n.offsets.popper, a = {
                        primary: function (n) {
                            var r = i[n];
                            return i[n] < u[n] && !t.escapeWithReference && (r = Math.max(i[n], u[n])), tt({}, n, r)
                        }, secondary: function (n) {
                            var r = "right" === n ? "left" : "top", f = i[r];
                            return i[n] > u[n] && !t.escapeWithReference && (f = Math.min(i[r], u[n] - ("right" === n ? i.width : i.height))), tt({}, r, f)
                        }
                    };
                    return l.forEach(function (n) {
                        var t = -1 !== ["left", "top"].indexOf(n) ? "primary" : "secondary";
                        i = f({}, i, a[t](n))
                    }), n.offsets.popper = i, n
                }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent"
            }, keepTogether: {
                order: 400, enabled: !0, fn: function (n) {
                    var o = n.offsets, u = o.popper, i = o.reference, s = n.placement.split("-")[0], r = Math.floor,
                        f = -1 !== ["top", "bottom"].indexOf(s), e = f ? "right" : "bottom", t = f ? "left" : "top",
                        h = f ? "width" : "height";
                    return u[e] < r(i[t]) && (n.offsets.popper[t] = r(i[t]) - u[h]), u[t] > r(i[e]) && (n.offsets.popper[t] = r(i[e])), n
                }
            }, arrow: {
                order: 500, enabled: !0, fn: function (n, t) {
                    var l, r;
                    if (!or(n.instance.modifiers, "arrow", "keepTogether")) return n;
                    if (r = t.element, "string" == typeof r) {
                        if (!(r = n.instance.popper.querySelector(r))) return n
                    } else if (!n.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), n;
                    var b = n.placement.split("-")[0], p = n.offsets, e = p.popper, u = p.reference,
                        s = -1 !== ["left", "right"].indexOf(b), a = s ? "height" : "width", v = s ? "Top" : "Left",
                        i = v.toLowerCase(), k = s ? "left" : "top", h = s ? "bottom" : "right", f = tr(r)[a];
                    u[h] - f < e[i] && (n.offsets.popper[i] -= e[i] - (u[h] - f));
                    u[i] + f > e[h] && (n.offsets.popper[i] += u[i] + f - e[h]);
                    n.offsets.popper = o(n.offsets.popper);
                    var d = u[i] + u[a] / 2 - f / 2, w = c(n.instance.popper), g = parseFloat(w["margin" + v]),
                        nt = parseFloat(w["border" + v + "Width"]), y = d - n.offsets.popper[i] - g - nt;
                    return y = Math.max(Math.min(e[a] - f, y), 0), n.arrowElement = r, n.offsets.arrow = (tt(l = {}, i, Math.round(y)), tt(l, k, ""), l), n
                }, element: "[x-arrow]"
            }, flip: {
                order: 600,
                enabled: !0,
                fn: function (n, t) {
                    if (ur(n.instance.modifiers, "inner") || n.flipped && n.placement === n.originalPlacement) return n;
                    var e = ui(n.instance.popper, n.instance.reference, t.padding, t.boundariesElement, n.positionFixed),
                        i = n.placement.split("-")[0], o = vt(i), r = n.placement.split("-")[1] || "", u = [];
                    switch (t.behavior) {
                        case vu:
                            u = [i, o];
                            break;
                        case yu:
                            u = sr(i);
                            break;
                        case pu:
                            u = sr(i, !0);
                            break;
                        default:
                            u = t.behavior
                    }
                    return u.forEach(function (s, h) {
                        if (i !== s || u.length === h + 1) return n;
                        i = n.placement.split("-")[0];
                        o = vt(i);
                        var l = n.offsets.popper, v = n.offsets.reference, c = Math.floor,
                            k = "left" === i && c(l.right) > c(v.left) || "right" === i && c(l.left) < c(v.right) || "top" === i && c(l.bottom) > c(v.top) || "bottom" === i && c(l.top) < c(v.bottom),
                            y = c(l.left) < c(e.left), p = c(l.right) > c(e.right), w = c(l.top) < c(e.top),
                            b = c(l.bottom) > c(e.bottom),
                            d = "left" === i && y || "right" === i && p || "top" === i && w || "bottom" === i && b,
                            a = -1 !== ["top", "bottom"].indexOf(i),
                            nt = !!t.flipVariations && (a && "start" === r && y || a && "end" === r && p || !a && "start" === r && w || !a && "end" === r && b),
                            tt = !!t.flipVariationsByContent && (a && "start" === r && p || a && "end" === r && y || !a && "start" === r && b || !a && "end" === r && w),
                            g = nt || tt;
                        (k || d || g) && (n.flipped = !0, (k || d) && (i = u[h + 1]), g && (r = function (n) {
                            return "end" === n ? "start" : "start" === n ? "end" : n
                        }(r)), n.placement = i + (r ? "-" + r : ""), n.offsets.popper = f({}, n.offsets.popper, ir(n.instance.popper, n.offsets.reference, n.placement)), n = rr(n.instance.modifiers, n, "flip"))
                    }), n
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport",
                flipVariations: !1,
                flipVariationsByContent: !1
            }, inner: {
                order: 700, enabled: !1, fn: function (n) {
                    var r = n.placement, t = r.split("-")[0], u = n.offsets, i = u.popper, e = u.reference,
                        f = -1 !== ["left", "right"].indexOf(t), s = -1 === ["top", "left"].indexOf(t);
                    return i[f ? "left" : "top"] = e[t] - (s ? i[f ? "width" : "height"] : 0), n.placement = vt(r), n.offsets.popper = o(i), n
                }
            }, hide: {
                order: 800, enabled: !0, fn: function (n) {
                    if (!or(n.instance.modifiers, "hide", "preventOverflow")) return n;
                    var t = n.offsets.reference, i = ht(n.instance.modifiers, function (n) {
                        return "preventOverflow" === n.name
                    }).boundaries;
                    if (t.bottom < i.top || t.left > i.right || t.top > i.bottom || t.right < i.left) {
                        if (!0 === n.hide) return n;
                        n.hide = !0;
                        n.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === n.hide) return n;
                        n.hide = !1;
                        n.attributes["x-out-of-boundaries"] = !1
                    }
                    return n
                }
            }, computeStyle: {
                order: 850, enabled: !0, fn: function (n, t) {
                    var w = t.x, b = t.y, k = n.offsets.popper, s = ht(n.instance.modifiers, function (n) {
                        return "applyStyle" === n.name
                    }).gpuAcceleration, v, y, p;
                    void 0 !== s && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var d = void 0 !== s ? s : t.gpuAcceleration, u = g(n.instance.popper), l = ii(u),
                        i = {position: k.position}, r = function (n, t) {
                            var u = n.offsets, i = u.popper, l = u.reference, r = Math.round, a = Math.floor,
                                f = function (n) {
                                    return n
                                }, e = r(l.width), o = r(i.width), v = -1 !== ["left", "right"].indexOf(n.placement),
                                s = -1 !== n.placement.indexOf("-"), h = t ? v || s || e % 2 == o % 2 ? r : a : f,
                                c = t ? r : f;
                            return {
                                left: h(e % 2 == 1 && o % 2 == 1 && !s && t ? i.left - 1 : i.left),
                                top: c(i.top),
                                bottom: c(i.bottom),
                                right: h(i.right)
                            }
                        }(n, window.devicePixelRatio < 2 || !er), e = "bottom" === w ? "top" : "bottom",
                        o = "right" === b ? "left" : "right", a = fi("transform"), h = void 0, c = void 0;
                    return (c = "bottom" === e ? "HTML" === u.nodeName ? -u.clientHeight + r.bottom : -l.height + r.bottom : r.top, h = "right" === o ? "HTML" === u.nodeName ? -u.clientWidth + r.right : -l.width + r.right : r.left, d && a) ? (i[a] = "translate3d(" + h + "px, " + c + "px, 0)", i[e] = 0, i[o] = 0, i.willChange = "transform") : (v = "bottom" === e ? -1 : 1, y = "right" === o ? -1 : 1, i[e] = c * v, i[o] = h * y, i.willChange = e + ", " + o), p = {"x-placement": n.placement}, n.attributes = f({}, p, n.attributes), n.styles = f({}, i, n.styles), n.arrowStyles = f({}, n.offsets.arrow, n.arrowStyles), n
                }, gpuAcceleration: !0, x: "bottom", y: "right"
            }, applyStyle: {
                order: 900, enabled: !0, fn: function (n) {
                    var i, t;
                    return oi(n.instance.popper, n.styles), i = n.instance.popper, t = n.attributes, Object.keys(t).forEach(function (n) {
                        !1 !== t[n] ? i.setAttribute(n, t[n]) : i.removeAttribute(n)
                    }), n.arrowElement && Object.keys(n.arrowStyles).length && oi(n.arrowElement, n.arrowStyles), n
                }, onLoad: function (n, t, i, r, u) {
                    var f = nr(u, t, n, i.positionFixed),
                        e = gi(i.placement, f, t, n, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
                    return t.setAttribute("x-placement", e), oi(t, {position: i.positionFixed ? "fixed" : "absolute"}), i
                }, gpuAcceleration: void 0
            }
        }
    };
    s = function () {
        function n(t, i) {
            var r = this, u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, e;
            uu(this, n);
            this.scheduleUpdate = function () {
                return requestAnimationFrame(r.update)
            };
            this.update = iu(this.update.bind(this));
            this.options = f({}, n.Defaults, u);
            this.state = {isDestroyed: !1, isCreated: !1, scrollParents: []};
            this.reference = t && t.jquery ? t[0] : t;
            this.popper = i && i.jquery ? i[0] : i;
            this.options.modifiers = {};
            Object.keys(f({}, n.Defaults.modifiers, u.modifiers)).forEach(function (t) {
                r.options.modifiers[t] = f({}, n.Defaults.modifiers[t] || {}, u.modifiers ? u.modifiers[t] : {})
            });
            this.modifiers = Object.keys(this.options.modifiers).map(function (n) {
                return f({name: n}, r.options.modifiers[n])
            }).sort(function (n, t) {
                return n.order - t.order
            });
            this.modifiers.forEach(function (n) {
                n.enabled && vi(n.onLoad) && n.onLoad(r.reference, r.popper, r.options, n, r.state)
            });
            this.update();
            e = this.options.eventsEnabled;
            e && this.enableEventListeners();
            this.state.eventsEnabled = e
        }

        return fu(n, [{
            key: "update", value: function () {
                return su.call(this)
            }
        }, {
            key: "destroy", value: function () {
                return hu.call(this)
            }
        }, {
            key: "enableEventListeners", value: function () {
                return lu.call(this)
            }
        }, {
            key: "disableEventListeners", value: function () {
                return au.call(this)
            }
        }]), n
    }();
    s.Utils = ("undefined" != typeof window ? window : global).PopperUtils;
    s.placements = si;
    s.Defaults = hr;
    var it = "dropdown", bu = i.default.fn[it], ku = new RegExp("38|40|27"), du = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
    }, gu = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)"
    }, h = function () {
        function n(n, t) {
            this._element = n;
            this._popper = null;
            this._config = this._getConfig(t);
            this._menu = this._getMenuElement();
            this._inNavbar = this._detectNavbar();
            this._addEventListeners()
        }

        var t = n.prototype;
        return t.toggle = function () {
            if (!this._element.disabled && !i.default(this._element).hasClass("disabled")) {
                var t = i.default(this._menu).hasClass("show");
                n._clearMenus();
                t || this.show(!0)
            }
        }, t.show = function (t) {
            var f;
            if (void 0 === t && (t = !1), !(this._element.disabled || i.default(this._element).hasClass("disabled") || i.default(this._menu).hasClass("show"))) {
                var e = {relatedTarget: this._element}, o = i.default.Event("show.bs.dropdown", e),
                    u = n._getParentFromElement(this._element);
                if (i.default(u).trigger(o), !o.isDefaultPrevented()) {
                    if (!this._inNavbar && t) {
                        if ("undefined" == typeof s) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                        f = this._element;
                        "parent" === this._config.reference ? f = u : r.isElement(this._config.reference) && (f = this._config.reference, "undefined" != typeof this._config.reference.jquery && (f = this._config.reference[0]));
                        "scrollParent" !== this._config.boundary && i.default(u).addClass("position-static");
                        this._popper = new s(f, this._menu, this._getPopperConfig())
                    }
                    "ontouchstart" in document.documentElement && 0 === i.default(u).closest(".navbar-nav").length && i.default(document.body).children().on("mouseover", null, i.default.noop);
                    this._element.focus();
                    this._element.setAttribute("aria-expanded", !0);
                    i.default(this._menu).toggleClass("show");
                    i.default(u).toggleClass("show").trigger(i.default.Event("shown.bs.dropdown", e))
                }
            }
        }, t.hide = function () {
            if (!this._element.disabled && !i.default(this._element).hasClass("disabled") && i.default(this._menu).hasClass("show")) {
                var t = {relatedTarget: this._element}, r = i.default.Event("hide.bs.dropdown", t),
                    u = n._getParentFromElement(this._element);
                i.default(u).trigger(r);
                r.isDefaultPrevented() || (this._popper && this._popper.destroy(), i.default(this._menu).toggleClass("show"), i.default(u).toggleClass("show").trigger(i.default.Event("hidden.bs.dropdown", t)))
            }
        }, t.dispose = function () {
            i.default.removeData(this._element, "bs.dropdown");
            i.default(this._element).off(".bs.dropdown");
            this._element = null;
            this._menu = null;
            null !== this._popper && (this._popper.destroy(), this._popper = null)
        }, t.update = function () {
            this._inNavbar = this._detectNavbar();
            null !== this._popper && this._popper.scheduleUpdate()
        }, t._addEventListeners = function () {
            var n = this;
            i.default(this._element).on("click.bs.dropdown", function (t) {
                t.preventDefault();
                t.stopPropagation();
                n.toggle()
            })
        }, t._getConfig = function (n) {
            return n = u({}, this.constructor.Default, i.default(this._element).data(), n), r.typeCheckConfig(it, n, this.constructor.DefaultType), n
        }, t._getMenuElement = function () {
            if (!this._menu) {
                var t = n._getParentFromElement(this._element);
                t && (this._menu = t.querySelector(".dropdown-menu"))
            }
            return this._menu
        }, t._getPlacement = function () {
            var t = i.default(this._element.parentNode), n = "bottom-start";
            return t.hasClass("dropup") ? n = i.default(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : t.hasClass("dropright") ? n = "right-start" : t.hasClass("dropleft") ? n = "left-start" : i.default(this._menu).hasClass("dropdown-menu-right") && (n = "bottom-end"), n
        }, t._detectNavbar = function () {
            return i.default(this._element).closest(".navbar").length > 0
        }, t._getOffset = function () {
            var t = this, n = {};
            return "function" == typeof this._config.offset ? n.fn = function (n) {
                return n.offsets = u({}, n.offsets, t._config.offset(n.offsets, t._element) || {}), n
            } : n.offset = this._config.offset, n
        }, t._getPopperConfig = function () {
            var n = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {enabled: this._config.flip},
                    preventOverflow: {boundariesElement: this._config.boundary}
                }
            };
            return "static" === this._config.display && (n.modifiers.applyStyle = {enabled: !1}), u({}, n, this._config.popperConfig)
        }, n._jQueryInterface = function (t) {
            return this.each(function () {
                var r = i.default(this).data("bs.dropdown");
                if (r || (r = new n(this, "object" == typeof t ? t : null), i.default(this).data("bs.dropdown", r)), "string" == typeof t) {
                    if ("undefined" == typeof r[t]) throw new TypeError('No method named "' + t + '"');
                    r[t]()
                }
            })
        }, n._clearMenus = function (t) {
            var h, s;
            if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var u = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), r = 0, c = u.length; r < c; r++) {
                var f = n._getParentFromElement(u[r]), e = i.default(u[r]).data("bs.dropdown"),
                    o = {relatedTarget: u[r]};
                (t && "click" === t.type && (o.clickEvent = t), e) && (h = e._menu, !i.default(f).hasClass("show") || t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && i.default.contains(f, t.target) || (s = i.default.Event("hide.bs.dropdown", o), i.default(f).trigger(s), s.isDefaultPrevented() || ("ontouchstart" in document.documentElement && i.default(document.body).children().off("mouseover", null, i.default.noop), u[r].setAttribute("aria-expanded", "false"), e._popper && e._popper.destroy(), i.default(h).removeClass("show"), i.default(f).removeClass("show").trigger(i.default.Event("hidden.bs.dropdown", o)))))
            }
        }, n._getParentFromElement = function (n) {
            var t, i = r.getSelectorFromElement(n);
            return i && (t = document.querySelector(i)), t || n.parentNode
        }, n._dataApiKeydownHandler = function (t) {
            var f, e, u, r;
            if (!(/input|textarea/i.test(t.target.tagName) ? 32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || i.default(t.target).closest(".dropdown-menu").length) : !ku.test(t.which)) && !this.disabled && !i.default(this).hasClass("disabled") && (f = n._getParentFromElement(this), e = i.default(f).hasClass("show"), e || 27 !== t.which)) {
                if (t.preventDefault(), t.stopPropagation(), !e || 27 === t.which || 32 === t.which) return 27 === t.which && i.default(f.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void i.default(this).trigger("click");
                u = [].slice.call(f.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function (n) {
                    return i.default(n).is(":visible")
                });
                0 !== u.length && (r = u.indexOf(t.target), 38 === t.which && r > 0 && r--, 40 === t.which && r < u.length - 1 && r++, r < 0 && (r = 0), u[r].focus())
            }
        }, e(n, null, [{
            key: "VERSION", get: function () {
                return "4.6.0"
            }
        }, {
            key: "Default", get: function () {
                return du
            }
        }, {
            key: "DefaultType", get: function () {
                return gu
            }
        }]), n
    }();
    i.default(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', h._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", h._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", h._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function (n) {
        n.preventDefault();
        n.stopPropagation();
        h._jQueryInterface.call(i.default(this), "toggle")
    }).on("click.bs.dropdown.data-api", ".dropdown form", function (n) {
        n.stopPropagation()
    });
    i.default.fn[it] = h._jQueryInterface;
    i.default.fn[it].Constructor = h;
    i.default.fn[it].noConflict = function () {
        return i.default.fn[it] = bu, h._jQueryInterface
    };
    var nf = i.default.fn.modal, hi = {backdrop: !0, keyboard: !0, focus: !0, show: !0},
        tf = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean"}, ct = function () {
            function t(n, t) {
                this._config = this._getConfig(t);
                this._element = n;
                this._dialog = n.querySelector(".modal-dialog");
                this._backdrop = null;
                this._isShown = !1;
                this._isBodyOverflowing = !1;
                this._ignoreBackdropClick = !1;
                this._isTransitioning = !1;
                this._scrollbarWidth = 0
            }

            var n = t.prototype;
            return n.toggle = function (n) {
                return this._isShown ? this.hide() : this.show(n)
            }, n.show = function (n) {
                var t = this, r;
                this._isShown || this._isTransitioning || (i.default(this._element).hasClass("fade") && (this._isTransitioning = !0), r = i.default.Event("show.bs.modal", {relatedTarget: n}), i.default(this._element).trigger(r), this._isShown || r.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), i.default(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', function (n) {
                    return t.hide(n)
                }), i.default(this._dialog).on("mousedown.dismiss.bs.modal", function () {
                    i.default(t._element).one("mouseup.dismiss.bs.modal", function (n) {
                        i.default(n.target).is(t._element) && (t._ignoreBackdropClick = !0)
                    })
                }), this._showBackdrop(function () {
                    return t._showElement(n)
                })))
            }, n.hide = function (n) {
                var e = this, t, u, f;
                (n && n.preventDefault(), this._isShown && !this._isTransitioning) && (t = i.default.Event("hide.bs.modal"), (i.default(this._element).trigger(t), this._isShown && !t.isDefaultPrevented()) && (this._isShown = !1, u = i.default(this._element).hasClass("fade"), (u && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), i.default(document).off("focusin.bs.modal"), i.default(this._element).removeClass("show"), i.default(this._element).off("click.dismiss.bs.modal"), i.default(this._dialog).off("mousedown.dismiss.bs.modal"), u) ? (f = r.getTransitionDurationFromElement(this._element), i.default(this._element).one(r.TRANSITION_END, function (n) {
                    return e._hideModal(n)
                }).emulateTransitionEnd(f)) : this._hideModal()))
            }, n.dispose = function () {
                [window, this._element, this._dialog].forEach(function (n) {
                    return i.default(n).off(".bs.modal")
                });
                i.default(document).off("focusin.bs.modal");
                i.default.removeData(this._element, "bs.modal");
                this._config = null;
                this._element = null;
                this._dialog = null;
                this._backdrop = null;
                this._isShown = null;
                this._isBodyOverflowing = null;
                this._ignoreBackdropClick = null;
                this._isTransitioning = null;
                this._scrollbarWidth = null
            }, n.handleUpdate = function () {
                this._adjustDialog()
            }, n._getConfig = function (n) {
                return n = u({}, hi, n), r.typeCheckConfig("modal", n, tf), n
            }, n._triggerBackdropTransition = function () {
                var n = this, f = i.default.Event("hidePrevented.bs.modal"), t, u;
                (i.default(this._element).trigger(f), f.isDefaultPrevented()) || (t = this._element.scrollHeight > document.documentElement.clientHeight, t || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static"), u = r.getTransitionDurationFromElement(this._dialog), i.default(this._element).off(r.TRANSITION_END), i.default(this._element).one(r.TRANSITION_END, function () {
                    n._element.classList.remove("modal-static");
                    t || i.default(n._element).one(r.TRANSITION_END, function () {
                        n._element.style.overflowY = ""
                    }).emulateTransitionEnd(n._element, u)
                }).emulateTransitionEnd(u), this._element.focus())
            }, n._showElement = function (n) {
                var t = this, f = i.default(this._element).hasClass("fade"),
                    e = this._dialog ? this._dialog.querySelector(".modal-body") : null, o, u, s;
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element);
                this._element.style.display = "block";
                this._element.removeAttribute("aria-hidden");
                this._element.setAttribute("aria-modal", !0);
                this._element.setAttribute("role", "dialog");
                i.default(this._dialog).hasClass("modal-dialog-scrollable") && e ? e.scrollTop = 0 : this._element.scrollTop = 0;
                f && r.reflow(this._element);
                i.default(this._element).addClass("show");
                this._config.focus && this._enforceFocus();
                o = i.default.Event("shown.bs.modal", {relatedTarget: n});
                u = function () {
                    t._config.focus && t._element.focus();
                    t._isTransitioning = !1;
                    i.default(t._element).trigger(o)
                };
                f ? (s = r.getTransitionDurationFromElement(this._dialog), i.default(this._dialog).one(r.TRANSITION_END, u).emulateTransitionEnd(s)) : u()
            }, n._enforceFocus = function () {
                var n = this;
                i.default(document).off("focusin.bs.modal").on("focusin.bs.modal", function (t) {
                    document !== t.target && n._element !== t.target && 0 === i.default(n._element).has(t.target).length && n._element.focus()
                })
            }, n._setEscapeEvent = function () {
                var n = this;
                this._isShown ? i.default(this._element).on("keydown.dismiss.bs.modal", function (t) {
                    n._config.keyboard && 27 === t.which ? (t.preventDefault(), n.hide()) : n._config.keyboard || 27 !== t.which || n._triggerBackdropTransition()
                }) : this._isShown || i.default(this._element).off("keydown.dismiss.bs.modal")
            }, n._setResizeEvent = function () {
                var n = this;
                this._isShown ? i.default(window).on("resize.bs.modal", function (t) {
                    return n.handleUpdate(t)
                }) : i.default(window).off("resize.bs.modal")
            }, n._hideModal = function () {
                var n = this;
                this._element.style.display = "none";
                this._element.setAttribute("aria-hidden", !0);
                this._element.removeAttribute("aria-modal");
                this._element.removeAttribute("role");
                this._isTransitioning = !1;
                this._showBackdrop(function () {
                    i.default(document.body).removeClass("modal-open");
                    n._resetAdjustments();
                    n._resetScrollbar();
                    i.default(n._element).trigger("hidden.bs.modal")
                })
            }, n._removeBackdrop = function () {
                this._backdrop && (i.default(this._backdrop).remove(), this._backdrop = null)
            }, n._showBackdrop = function (n) {
                var t = this, u = i.default(this._element).hasClass("fade") ? "fade" : "", e, f, o;
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", u && this._backdrop.classList.add(u), i.default(this._backdrop).appendTo(document.body), i.default(this._element).on("click.dismiss.bs.modal", function (n) {
                        t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : n.target === n.currentTarget && ("static" === t._config.backdrop ? t._triggerBackdropTransition() : t.hide())
                    }), u && r.reflow(this._backdrop), i.default(this._backdrop).addClass("show"), !n) return;
                    if (!u) return void n();
                    e = r.getTransitionDurationFromElement(this._backdrop);
                    i.default(this._backdrop).one(r.TRANSITION_END, n).emulateTransitionEnd(e)
                } else !this._isShown && this._backdrop ? (i.default(this._backdrop).removeClass("show"), f = function () {
                    t._removeBackdrop();
                    n && n()
                }, i.default(this._element).hasClass("fade") ? (o = r.getTransitionDurationFromElement(this._backdrop), i.default(this._backdrop).one(r.TRANSITION_END, f).emulateTransitionEnd(o)) : f()) : n && n()
            }, n._adjustDialog = function () {
                var n = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && n && (this._element.style.paddingLeft = this._scrollbarWidth + "px");
                this._isBodyOverflowing && !n && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, n._resetAdjustments = function () {
                this._element.style.paddingLeft = "";
                this._element.style.paddingRight = ""
            }, n._checkScrollbar = function () {
                var n = document.body.getBoundingClientRect();
                this._isBodyOverflowing = Math.round(n.left + n.right) < window.innerWidth;
                this._scrollbarWidth = this._getScrollbarWidth()
            }, n._setScrollbar = function () {
                var n = this, t, r, u, f;
                this._isBodyOverflowing && (t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")), r = [].slice.call(document.querySelectorAll(".sticky-top")), i.default(t).each(function (t, r) {
                    var u = r.style.paddingRight, f = i.default(r).css("padding-right");
                    i.default(r).data("padding-right", u).css("padding-right", parseFloat(f) + n._scrollbarWidth + "px")
                }), i.default(r).each(function (t, r) {
                    var u = r.style.marginRight, f = i.default(r).css("margin-right");
                    i.default(r).data("margin-right", u).css("margin-right", parseFloat(f) - n._scrollbarWidth + "px")
                }), u = document.body.style.paddingRight, f = i.default(document.body).css("padding-right"), i.default(document.body).data("padding-right", u).css("padding-right", parseFloat(f) + this._scrollbarWidth + "px"));
                i.default(document.body).addClass("modal-open")
            }, n._resetScrollbar = function () {
                var r = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")), n, t;
                i.default(r).each(function (n, t) {
                    var r = i.default(t).data("padding-right");
                    i.default(t).removeData("padding-right");
                    t.style.paddingRight = r || ""
                });
                n = [].slice.call(document.querySelectorAll(".sticky-top"));
                i.default(n).each(function (n, t) {
                    var r = i.default(t).data("margin-right");
                    "undefined" != typeof r && i.default(t).css("margin-right", r).removeData("margin-right")
                });
                t = i.default(document.body).data("padding-right");
                i.default(document.body).removeData("padding-right");
                document.body.style.paddingRight = t || ""
            }, n._getScrollbarWidth = function () {
                var n = document.createElement("div"), t;
                return n.className = "modal-scrollbar-measure", document.body.appendChild(n), t = n.getBoundingClientRect().width - n.clientWidth, document.body.removeChild(n), t
            }, t._jQueryInterface = function (n, r) {
                return this.each(function () {
                    var f = i.default(this).data("bs.modal"),
                        e = u({}, hi, i.default(this).data(), "object" == typeof n && n ? n : {});
                    if (f || (f = new t(this, e), i.default(this).data("bs.modal", f)), "string" == typeof n) {
                        if ("undefined" == typeof f[n]) throw new TypeError('No method named "' + n + '"');
                        f[n](r)
                    } else e.show && f.show(r)
                })
            }, e(t, null, [{
                key: "VERSION", get: function () {
                    return "4.6.0"
                }
            }, {
                key: "Default", get: function () {
                    return hi
                }
            }]), t
        }();
    i.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
        var t, f = this, e = r.getSelectorFromElement(this), o, s;
        e && (t = document.querySelector(e));
        o = i.default(t).data("bs.modal") ? "toggle" : u({}, i.default(t).data(), i.default(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || n.preventDefault();
        s = i.default(t).one("show.bs.modal", function (n) {
            n.isDefaultPrevented() || s.one("hidden.bs.modal", function () {
                i.default(f).is(":visible") && f.focus()
            })
        });
        ct._jQueryInterface.call(i.default(t), o, this)
    });
    i.default.fn.modal = ct._jQueryInterface;
    i.default.fn.modal.Constructor = ct;
    i.default.fn.modal.noConflict = function () {
        return i.default.fn.modal = nf, ct._jQueryInterface
    };
    var rf = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        uf = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        ff = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    var l = "tooltip", ef = i.default.fn[l], of = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        sf = ["sanitize", "whiteList", "sanitizeFn"], hf = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)"
        }, cf = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}, lf = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            popperConfig: null
        }, af = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        }, a = function () {
            function t(n, t) {
                if ("undefined" == typeof s) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                this._isEnabled = !0;
                this._timeout = 0;
                this._hoverState = "";
                this._activeTrigger = {};
                this._popper = null;
                this.element = n;
                this.config = this._getConfig(t);
                this.tip = null;
                this._setListeners()
            }

            var n = t.prototype;
            return n.enable = function () {
                this._isEnabled = !0
            }, n.disable = function () {
                this._isEnabled = !1
            }, n.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled
            }, n.toggle = function (n) {
                if (this._isEnabled) if (n) {
                    var r = this.constructor.DATA_KEY, t = i.default(n.currentTarget).data(r);
                    t || (t = new this.constructor(n.currentTarget, this._getDelegateConfig()), i.default(n.currentTarget).data(r, t));
                    t._activeTrigger.click = !t._activeTrigger.click;
                    t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t)
                } else {
                    if (i.default(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
                    this._enter(null, this)
                }
            }, n.dispose = function () {
                clearTimeout(this._timeout);
                i.default.removeData(this.element, this.constructor.DATA_KEY);
                i.default(this.element).off(this.constructor.EVENT_KEY);
                i.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler);
                this.tip && i.default(this.tip).remove();
                this._isEnabled = null;
                this._timeout = null;
                this._hoverState = null;
                this._activeTrigger = null;
                this._popper && this._popper.destroy();
                this._popper = null;
                this.element = null;
                this.config = null;
                this.tip = null
            }, n.show = function () {
                var t = this, u, f, c, n, e, l, o, a, h, v;
                if ("none" === i.default(this.element).css("display")) throw new Error("Please use show on visible elements");
                if (u = i.default.Event(this.constructor.Event.SHOW), this.isWithContent() && this._isEnabled) {
                    if (i.default(this.element).trigger(u), f = r.findShadowRoot(this.element), c = i.default.contains(null !== f ? f : this.element.ownerDocument.documentElement, this.element), u.isDefaultPrevented() || !c) return;
                    n = this.getTipElement();
                    e = r.getUID(this.constructor.NAME);
                    n.setAttribute("id", e);
                    this.element.setAttribute("aria-describedby", e);
                    this.setContent();
                    this.config.animation && i.default(n).addClass("fade");
                    l = "function" == typeof this.config.placement ? this.config.placement.call(this, n, this.element) : this.config.placement;
                    o = this._getAttachment(l);
                    this.addAttachmentClass(o);
                    a = this._getContainer();
                    i.default(n).data(this.constructor.DATA_KEY, this);
                    i.default.contains(this.element.ownerDocument.documentElement, this.tip) || i.default(n).appendTo(a);
                    i.default(this.element).trigger(this.constructor.Event.INSERTED);
                    this._popper = new s(this.element, n, this._getPopperConfig(o));
                    i.default(n).addClass("show");
                    i.default(n).addClass(this.config.customClass);
                    "ontouchstart" in document.documentElement && i.default(document.body).children().on("mouseover", null, i.default.noop);
                    h = function () {
                        t.config.animation && t._fixTransition();
                        var n = t._hoverState;
                        t._hoverState = null;
                        i.default(t.element).trigger(t.constructor.Event.SHOWN);
                        "out" === n && t._leave(null, t)
                    };
                    i.default(this.tip).hasClass("fade") ? (v = r.getTransitionDurationFromElement(this.tip), i.default(this.tip).one(r.TRANSITION_END, h).emulateTransitionEnd(v)) : h()
                }
            }, n.hide = function (n) {
                var t = this, u = this.getTipElement(), f = i.default.Event(this.constructor.Event.HIDE), e = function () {
                    "show" !== t._hoverState && u.parentNode && u.parentNode.removeChild(u);
                    t._cleanTipClass();
                    t.element.removeAttribute("aria-describedby");
                    i.default(t.element).trigger(t.constructor.Event.HIDDEN);
                    null !== t._popper && t._popper.destroy();
                    n && n()
                }, o;
                (i.default(this.element).trigger(f), f.isDefaultPrevented()) || ((i.default(u).removeClass("show"), "ontouchstart" in document.documentElement && i.default(document.body).children().off("mouseover", null, i.default.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, i.default(this.tip).hasClass("fade")) ? (o = r.getTransitionDurationFromElement(u), i.default(u).one(r.TRANSITION_END, e).emulateTransitionEnd(o)) : e(), this._hoverState = "")
            }, n.update = function () {
                null !== this._popper && this._popper.scheduleUpdate()
            }, n.isWithContent = function () {
                return Boolean(this.getTitle())
            }, n.addAttachmentClass = function (n) {
                i.default(this.getTipElement()).addClass("bs-tooltip-" + n)
            }, n.getTipElement = function () {
                return this.tip = this.tip || i.default(this.config.template)[0], this.tip
            }, n.setContent = function () {
                var n = this.getTipElement();
                this.setElementContent(i.default(n.querySelectorAll(".tooltip-inner")), this.getTitle());
                i.default(n).removeClass("fade show")
            }, n.setElementContent = function (n, t) {
                "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = cr(t, this.config.whiteList, this.config.sanitizeFn)), n.html(t)) : n.text(t) : this.config.html ? i.default(t).parent().is(n) || n.empty().append(t) : n.text(i.default(t).text())
            }, n.getTitle = function () {
                var n = this.element.getAttribute("data-original-title");
                return n || (n = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), n
            }, n._getPopperConfig = function (n) {
                var t = this;
                return u({}, {
                    placement: n,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {behavior: this.config.fallbackPlacement},
                        arrow: {element: ".arrow"},
                        preventOverflow: {boundariesElement: this.config.boundary}
                    },
                    onCreate: function (n) {
                        n.originalPlacement !== n.placement && t._handlePopperPlacementChange(n)
                    },
                    onUpdate: function (n) {
                        return t._handlePopperPlacementChange(n)
                    }
                }, this.config.popperConfig)
            }, n._getOffset = function () {
                var t = this, n = {};
                return "function" == typeof this.config.offset ? n.fn = function (n) {
                    return n.offsets = u({}, n.offsets, t.config.offset(n.offsets, t.element) || {}), n
                } : n.offset = this.config.offset, n
            }, n._getContainer = function () {
                return !1 === this.config.container ? document.body : r.isElement(this.config.container) ? i.default(this.config.container) : i.default(document).find(this.config.container)
            }, n._getAttachment = function (n) {
                return cf[n.toUpperCase()]
            }, n._setListeners = function () {
                var n = this;
                this.config.trigger.split(" ").forEach(function (t) {
                    if ("click" === t) i.default(n.element).on(n.constructor.Event.CLICK, n.config.selector, function (t) {
                        return n.toggle(t)
                    }); else if ("manual" !== t) {
                        var r = "hover" === t ? n.constructor.Event.MOUSEENTER : n.constructor.Event.FOCUSIN,
                            u = "hover" === t ? n.constructor.Event.MOUSELEAVE : n.constructor.Event.FOCUSOUT;
                        i.default(n.element).on(r, n.config.selector, function (t) {
                            return n._enter(t)
                        }).on(u, n.config.selector, function (t) {
                            return n._leave(t)
                        })
                    }
                });
                this._hideModalHandler = function () {
                    n.element && n.hide()
                };
                i.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler);
                this.config.selector ? this.config = u({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, n._fixTitle = function () {
                var n = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== n) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, n._enter = function (n, t) {
                var r = this.constructor.DATA_KEY;
                (t = t || i.default(n.currentTarget).data(r)) || (t = new this.constructor(n.currentTarget, this._getDelegateConfig()), i.default(n.currentTarget).data(r, t));
                n && (t._activeTrigger["focusin" === n.type ? "focus" : "hover"] = !0);
                i.default(t.getTipElement()).hasClass("show") || "show" === t._hoverState ? t._hoverState = "show" : (clearTimeout(t._timeout), t._hoverState = "show", t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function () {
                    "show" === t._hoverState && t.show()
                }, t.config.delay.show) : t.show())
            }, n._leave = function (n, t) {
                var r = this.constructor.DATA_KEY;
                (t = t || i.default(n.currentTarget).data(r)) || (t = new this.constructor(n.currentTarget, this._getDelegateConfig()), i.default(n.currentTarget).data(r, t));
                n && (t._activeTrigger["focusout" === n.type ? "focus" : "hover"] = !1);
                t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function () {
                    "out" === t._hoverState && t.hide()
                }, t.config.delay.hide) : t.hide())
            }, n._isWithActiveTrigger = function () {
                for (var n in this._activeTrigger) if (this._activeTrigger[n]) return !0;
                return !1
            }, n._getConfig = function (n) {
                var t = i.default(this.element).data();
                return Object.keys(t).forEach(function (n) {
                    -1 !== sf.indexOf(n) && delete t[n]
                }), "number" == typeof (n = u({}, this.constructor.Default, t, "object" == typeof n && n ? n : {})).delay && (n.delay = {
                    show: n.delay,
                    hide: n.delay
                }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), r.typeCheckConfig(l, n, this.constructor.DefaultType), n.sanitize && (n.template = cr(n.template, n.whiteList, n.sanitizeFn)), n
            }, n._getDelegateConfig = function () {
                var t = {}, n;
                if (this.config) for (n in this.config) this.constructor.Default[n] !== this.config[n] && (t[n] = this.config[n]);
                return t
            }, n._cleanTipClass = function () {
                var t = i.default(this.getTipElement()), n = t.attr("class").match(of);
                null !== n && n.length && t.removeClass(n.join(""))
            }, n._handlePopperPlacementChange = function (n) {
                this.tip = n.instance.popper;
                this._cleanTipClass();
                this.addAttachmentClass(this._getAttachment(n.placement))
            }, n._fixTransition = function () {
                var n = this.getTipElement(), t = this.config.animation;
                null === n.getAttribute("x-placement") && (i.default(n).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
            }, t._jQueryInterface = function (n) {
                return this.each(function () {
                    var u = i.default(this), r = u.data("bs.tooltip"), f = "object" == typeof n && n;
                    if ((r || !/dispose|hide/.test(n)) && (r || (r = new t(this, f), u.data("bs.tooltip", r)), "string" == typeof n)) {
                        if ("undefined" == typeof r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n]()
                    }
                })
            }, e(t, null, [{
                key: "VERSION", get: function () {
                    return "4.6.0"
                }
            }, {
                key: "Default", get: function () {
                    return lf
                }
            }, {
                key: "NAME", get: function () {
                    return l
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return "bs.tooltip"
                }
            }, {
                key: "Event", get: function () {
                    return af
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return ".bs.tooltip"
                }
            }, {
                key: "DefaultType", get: function () {
                    return hf
                }
            }]), t
        }();
    i.default.fn[l] = a._jQueryInterface;
    i.default.fn[l].Constructor = a;
    i.default.fn[l].noConflict = function () {
        return i.default.fn[l] = ef, a._jQueryInterface
    };
    var rt = "popover", vf = i.default.fn[rt], yf = new RegExp("(^|\\s)bs-popover\\S+", "g"), pf = u({}, a.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
    }), wf = u({}, a.DefaultType, {content: "(string|element|function)"}), bf = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
    }, pt = function (n) {
        function r() {
            return n.apply(this, arguments) || this
        }

        var u, f, t;
        return f = n, (u = r).prototype = Object.create(f.prototype), u.prototype.constructor = u, u.__proto__ = f, t = r.prototype, t.isWithContent = function () {
            return this.getTitle() || this._getContent()
        }, t.addAttachmentClass = function (n) {
            i.default(this.getTipElement()).addClass("bs-popover-" + n)
        }, t.getTipElement = function () {
            return this.tip = this.tip || i.default(this.config.template)[0], this.tip
        }, t.setContent = function () {
            var t = i.default(this.getTipElement()), n;
            this.setElementContent(t.find(".popover-header"), this.getTitle());
            n = this._getContent();
            "function" == typeof n && (n = n.call(this.element));
            this.setElementContent(t.find(".popover-body"), n);
            t.removeClass("fade show")
        }, t._getContent = function () {
            return this.element.getAttribute("data-content") || this.config.content
        }, t._cleanTipClass = function () {
            var t = i.default(this.getTipElement()), n = t.attr("class").match(yf);
            null !== n && n.length > 0 && t.removeClass(n.join(""))
        }, r._jQueryInterface = function (n) {
            return this.each(function () {
                var t = i.default(this).data("bs.popover"), u = "object" == typeof n ? n : null;
                if ((t || !/dispose|hide/.test(n)) && (t || (t = new r(this, u), i.default(this).data("bs.popover", t)), "string" == typeof n)) {
                    if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                    t[n]()
                }
            })
        }, e(r, null, [{
            key: "VERSION", get: function () {
                return "4.6.0"
            }
        }, {
            key: "Default", get: function () {
                return pf
            }
        }, {
            key: "NAME", get: function () {
                return rt
            }
        }, {
            key: "DATA_KEY", get: function () {
                return "bs.popover"
            }
        }, {
            key: "Event", get: function () {
                return bf
            }
        }, {
            key: "EVENT_KEY", get: function () {
                return ".bs.popover"
            }
        }, {
            key: "DefaultType", get: function () {
                return wf
            }
        }]), r
    }(a);
    i.default.fn[rt] = pt._jQueryInterface;
    i.default.fn[rt].Constructor = pt;
    i.default.fn[rt].noConflict = function () {
        return i.default.fn[rt] = vf, pt._jQueryInterface
    };
    var v = "scrollspy", kf = i.default.fn[v], lr = {offset: 10, method: "auto", target: ""},
        df = {offset: "number", method: "string", target: "(string|element)"}, lt = function () {
            function t(n, t) {
                var r = this;
                this._element = n;
                this._scrollElement = "BODY" === n.tagName ? window : n;
                this._config = this._getConfig(t);
                this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item";
                this._offsets = [];
                this._targets = [];
                this._activeTarget = null;
                this._scrollHeight = 0;
                i.default(this._scrollElement).on("scroll.bs.scrollspy", function (n) {
                    return r._process(n)
                });
                this.refresh();
                this._process()
            }

            var n = t.prototype;
            return n.refresh = function () {
                var n = this, u = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                    t = "auto" === this._config.method ? u : this._config.method,
                    f = "position" === t ? this._getScrollTop() : 0;
                this._offsets = [];
                this._targets = [];
                this._scrollHeight = this._getScrollHeight();
                [].slice.call(document.querySelectorAll(this._selector)).map(function (n) {
                    var u, e = r.getSelectorFromElement(n), o;
                    return (e && (u = document.querySelector(e)), u) && (o = u.getBoundingClientRect(), o.width || o.height) ? [i.default(u)[t]().top + f, e] : null
                }).filter(function (n) {
                    return n
                }).sort(function (n, t) {
                    return n[0] - t[0]
                }).forEach(function (t) {
                    n._offsets.push(t[0]);
                    n._targets.push(t[1])
                })
            }, n.dispose = function () {
                i.default.removeData(this._element, "bs.scrollspy");
                i.default(this._scrollElement).off(".bs.scrollspy");
                this._element = null;
                this._scrollElement = null;
                this._config = null;
                this._selector = null;
                this._offsets = null;
                this._targets = null;
                this._activeTarget = null;
                this._scrollHeight = null
            }, n._getConfig = function (n) {
                if ("string" != typeof (n = u({}, lr, "object" == typeof n && n ? n : {})).target && r.isElement(n.target)) {
                    var t = i.default(n.target).attr("id");
                    t || (t = r.getUID(v), i.default(n.target).attr("id", t));
                    n.target = "#" + t
                }
                return r.typeCheckConfig(v, n, df), n
            }, n._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, n._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, n._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, n._process = function () {
                var t = this._getScrollTop() + this._config.offset, r = this._getScrollHeight(),
                    u = this._config.offset + r - this._getOffsetHeight(), i, n;
                if (this._scrollHeight !== r && this.refresh(), t >= u) i = this._targets[this._targets.length - 1], this._activeTarget !== i && this._activate(i); else {
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (n = this._offsets.length; n--;) this._activeTarget !== this._targets[n] && t >= this._offsets[n] && ("undefined" == typeof this._offsets[n + 1] || t < this._offsets[n + 1]) && this._activate(this._targets[n])
                }
            }, n._activate = function (n) {
                this._activeTarget = n;
                this._clear();
                var r = this._selector.split(",").map(function (t) {
                    return t + '[data-target="' + n + '"],' + t + '[href="' + n + '"]'
                }), t = i.default([].slice.call(document.querySelectorAll(r.join(","))));
                t.hasClass("dropdown-item") ? (t.closest(".dropdown").find(".dropdown-toggle").addClass("active"), t.addClass("active")) : (t.addClass("active"), t.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), t.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active"));
                i.default(this._scrollElement).trigger("activate.bs.scrollspy", {relatedTarget: n})
            }, n._clear = function () {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function (n) {
                    return n.classList.contains("active")
                }).forEach(function (n) {
                    return n.classList.remove("active")
                })
            }, t._jQueryInterface = function (n) {
                return this.each(function () {
                    var r = i.default(this).data("bs.scrollspy");
                    if (r || (r = new t(this, "object" == typeof n && n), i.default(this).data("bs.scrollspy", r)), "string" == typeof n) {
                        if ("undefined" == typeof r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n]()
                    }
                })
            }, e(t, null, [{
                key: "VERSION", get: function () {
                    return "4.6.0"
                }
            }, {
                key: "Default", get: function () {
                    return lr
                }
            }]), t
        }();
    i.default(window).on("load.bs.scrollspy.data-api", function () {
        for (var r, n = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), t = n.length; t--;) r = i.default(n[t]), lt._jQueryInterface.call(r, r.data())
    });
    i.default.fn[v] = lt._jQueryInterface;
    i.default.fn[v].Constructor = lt;
    i.default.fn[v].noConflict = function () {
        return i.default.fn[v] = kf, lt._jQueryInterface
    };
    ar = i.default.fn.tab;
    ut = function () {
        function n(n) {
            this._element = n
        }

        var t = n.prototype;
        return t.show = function () {
            var h = this, u, n, t, f, c, e, o, s;
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && i.default(this._element).hasClass("active") || i.default(this._element).hasClass("disabled") || (t = i.default(this._element).closest(".nav, .list-group")[0], f = r.getSelectorFromElement(this._element), t && (c = "UL" === t.nodeName || "OL" === t.nodeName ? "> li > .active" : ".active", n = (n = i.default.makeArray(i.default(t).find(c)))[n.length - 1]), e = i.default.Event("hide.bs.tab", {relatedTarget: this._element}), o = i.default.Event("show.bs.tab", {relatedTarget: n}), (n && i.default(n).trigger(e), i.default(this._element).trigger(o), o.isDefaultPrevented() || e.isDefaultPrevented()) || (f && (u = document.querySelector(f)), this._activate(this._element, t), s = function () {
                var t = i.default.Event("hidden.bs.tab", {relatedTarget: h._element}),
                    r = i.default.Event("shown.bs.tab", {relatedTarget: n});
                i.default(n).trigger(t);
                i.default(h._element).trigger(r)
            }, u ? this._activate(u, u.parentNode, s) : s()))
        }, t.dispose = function () {
            i.default.removeData(this._element, "bs.tab");
            this._element = null
        }, t._activate = function (n, t, u) {
            var s = this,
                f = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? i.default(t).children(".active") : i.default(t).find("> li > .active"))[0],
                h = u && f && i.default(f).hasClass("fade"), e = function () {
                    return s._transitionComplete(n, f, u)
                }, o;
            f && h ? (o = r.getTransitionDurationFromElement(f), i.default(f).removeClass("show").one(r.TRANSITION_END, e).emulateTransitionEnd(o)) : e()
        }, t._transitionComplete = function (n, t, u) {
            var f, e, o;
            t && (i.default(t).removeClass("active"), f = i.default(t.parentNode).find("> .dropdown-menu .active")[0], f && i.default(f).removeClass("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1));
            (i.default(n).addClass("active"), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !0), r.reflow(n), n.classList.contains("fade") && n.classList.add("show"), n.parentNode && i.default(n.parentNode).hasClass("dropdown-menu")) && (e = i.default(n).closest(".dropdown")[0], e && (o = [].slice.call(e.querySelectorAll(".dropdown-toggle")), i.default(o).addClass("active")), n.setAttribute("aria-expanded", !0));
            u && u()
        }, n._jQueryInterface = function (t) {
            return this.each(function () {
                var u = i.default(this), r = u.data("bs.tab");
                if (r || (r = new n(this), u.data("bs.tab", r)), "string" == typeof t) {
                    if ("undefined" == typeof r[t]) throw new TypeError('No method named "' + t + '"');
                    r[t]()
                }
            })
        }, e(n, null, [{
            key: "VERSION", get: function () {
                return "4.6.0"
            }
        }]), n
    }();
    i.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (n) {
        n.preventDefault();
        ut._jQueryInterface.call(i.default(this), "show")
    });
    i.default.fn.tab = ut._jQueryInterface;
    i.default.fn.tab.Constructor = ut;
    i.default.fn.tab.noConflict = function () {
        return i.default.fn.tab = ar, ut._jQueryInterface
    };
    var gf = i.default.fn.toast, ne = {animation: "boolean", autohide: "boolean", delay: "number"},
        vr = {animation: !0, autohide: !0, delay: 500}, wt = function () {
            function t(n, t) {
                this._element = n;
                this._config = this._getConfig(t);
                this._timeout = null;
                this._setListeners()
            }

            var n = t.prototype;
            return n.show = function () {
                var n = this, u = i.default.Event("show.bs.toast"), t, f;
                (i.default(this._element).trigger(u), u.isDefaultPrevented()) || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), t = function () {
                    n._element.classList.remove("showing");
                    n._element.classList.add("show");
                    i.default(n._element).trigger("shown.bs.toast");
                    n._config.autohide && (n._timeout = setTimeout(function () {
                        n.hide()
                    }, n._config.delay))
                }, (this._element.classList.remove("hide"), r.reflow(this._element), this._element.classList.add("showing"), this._config.animation) ? (f = r.getTransitionDurationFromElement(this._element), i.default(this._element).one(r.TRANSITION_END, t).emulateTransitionEnd(f)) : t())
            }, n.hide = function () {
                if (this._element.classList.contains("show")) {
                    var n = i.default.Event("hide.bs.toast");
                    i.default(this._element).trigger(n);
                    n.isDefaultPrevented() || this._close()
                }
            }, n.dispose = function () {
                this._clearTimeout();
                this._element.classList.contains("show") && this._element.classList.remove("show");
                i.default(this._element).off("click.dismiss.bs.toast");
                i.default.removeData(this._element, "bs.toast");
                this._element = null;
                this._config = null
            }, n._getConfig = function (n) {
                return n = u({}, vr, i.default(this._element).data(), "object" == typeof n && n ? n : {}), r.typeCheckConfig("toast", n, this.constructor.DefaultType), n
            }, n._setListeners = function () {
                var n = this;
                i.default(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', function () {
                    return n.hide()
                })
            }, n._close = function () {
                var n = this, t = function () {
                    n._element.classList.add("hide");
                    i.default(n._element).trigger("hidden.bs.toast")
                }, u;
                (this._element.classList.remove("show"), this._config.animation) ? (u = r.getTransitionDurationFromElement(this._element), i.default(this._element).one(r.TRANSITION_END, t).emulateTransitionEnd(u)) : t()
            }, n._clearTimeout = function () {
                clearTimeout(this._timeout);
                this._timeout = null
            }, t._jQueryInterface = function (n) {
                return this.each(function () {
                    var u = i.default(this), r = u.data("bs.toast");
                    if (r || (r = new t(this, "object" == typeof n && n), u.data("bs.toast", r)), "string" == typeof n) {
                        if ("undefined" == typeof r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n](this)
                    }
                })
            }, e(t, null, [{
                key: "VERSION", get: function () {
                    return "4.6.0"
                }
            }, {
                key: "DefaultType", get: function () {
                    return ne
                }
            }, {
                key: "Default", get: function () {
                    return vr
                }
            }]), t
        }();
    i.default.fn.toast = wt._jQueryInterface;
    i.default.fn.toast.Constructor = wt;
    i.default.fn.toast.noConflict = function () {
        return i.default.fn.toast = gf, wt._jQueryInterface
    };
    n.Alert = y;
    n.Button = p;
    n.Carousel = b;
    n.Collapse = et;
    n.Dropdown = h;
    n.Modal = ct;
    n.Popover = pt;
    n.Scrollspy = lt;
    n.Tab = ut;
    n.Toast = wt;
    n.Tooltip = a;
    n.Util = r;
    Object.defineProperty(n, "__esModule", {value: !0})
}), function (n, t, i, r) {
    "use strict";

    function c(n, t) {
        var r = [], o = 0, u, s, f;
        n && n.isDefaultPrevented() || (n.preventDefault(), t = t || {}, n && n.data && (t = e(n.data.options, t)), u = t.$target || i(n.currentTarget).trigger("blur"), f = i.fancybox.getInstance(), f && f.$trigger && f.$trigger.is(u)) || (t.selector ? r = i(t.selector) : (s = u.attr("data-fancybox") || "", s ? (r = n.data ? n.data.items : [], r = r.length ? r.filter('[data-fancybox="' + s + '"]') : i('[data-fancybox="' + s + '"]')) : r = [u]), o = i(r).index(u), o < 0 && (o = 0), f = i.fancybox.open(r, t, o), f.$trigger = u)
    }

    if (n.console = n.console || {
        info: function () {
        }
    }, i) {
        if (i.fn.fancybox) {
            console.info("fancyBox already initialized");
            return
        }
        var a = {
            closeExisting: !1,
            loop: !1,
            gutter: 50,
            keyboard: !0,
            preventCaptionOverlap: !0,
            arrows: !0,
            infobar: !0,
            smallBtn: "auto",
            toolbar: "auto",
            buttons: ["zoom", "slideShow", "thumbs", "close"],
            idleTime: 3,
            protect: !1,
            modal: !1,
            image: {preload: !1},
            ajax: {settings: {data: {fancybox: !0}}},
            iframe: {
                tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""><\/iframe>',
                preload: !0,
                css: {},
                attr: {scrolling: "auto"}
            },
            video: {
                tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download<\/a> and watch with your favorite video player!<\/video>',
                format: "",
                autoStart: !0
            },
            defaultType: "image",
            animationEffect: "zoom",
            animationDuration: 366,
            zoomOpacity: "auto",
            transitionEffect: "fade",
            transitionDuration: 366,
            slideClass: "",
            baseClass: "",
            baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"><\/div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index><\/span>&nbsp;/&nbsp;<span data-fancybox-count><\/span><\/div><div class="fancybox-toolbar">{{buttons}}<\/div><div class="fancybox-navigation">{{arrows}}<\/div><div class="fancybox-stage"><\/div><div class="fancybox-caption"><div class="fancybox-caption__body"><\/div><\/div><\/div><\/div>',
            spinnerTpl: '<div class="fancybox-loading"><\/div>',
            errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<\/p><\/div>',
            btnTpl: {
                download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/><\/svg><\/a>',
                zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/><\/svg><\/button>',
                close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/><\/svg><\/button>',
                arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/><\/svg><\/div><\/button>',
                arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/><\/svg><\/div><\/button>',
                smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/><\/svg><\/button>'
            },
            parentEl: "body",
            hideScrollbar: !0,
            autoFocus: !0,
            backFocus: !0,
            trapFocus: !0,
            fullScreen: {autoStart: !1},
            touch: {vertical: !0, momentum: !0},
            hash: null,
            media: {},
            slideShow: {autoStart: !1, speed: 3e3},
            thumbs: {autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y"},
            wheel: "auto",
            onInit: i.noop,
            beforeLoad: i.noop,
            afterLoad: i.noop,
            beforeShow: i.noop,
            afterShow: i.noop,
            beforeClose: i.noop,
            afterClose: i.noop,
            onActivate: i.noop,
            onDeactivate: i.noop,
            clickContent: function (n) {
                return n.type === "image" ? "zoom" : !1
            },
            clickSlide: "close",
            clickOutside: "close",
            dblclickContent: !1,
            dblclickSlide: !1,
            dblclickOutside: !1,
            mobile: {
                preventCaptionOverlap: !1, idleTime: !1, clickContent: function (n) {
                    return n.type === "image" ? "toggleControls" : !1
                }, clickSlide: function (n) {
                    return n.type === "image" ? "toggleControls" : "close"
                }, dblclickContent: function (n) {
                    return n.type === "image" ? "zoom" : !1
                }, dblclickSlide: function (n) {
                    return n.type === "image" ? "zoom" : !1
                }
            },
            lang: "en",
            i18n: {
                en: {
                    CLOSE: "Close",
                    NEXT: "Next",
                    PREV: "Previous",
                    ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                    PLAY_START: "Start slideshow",
                    PLAY_STOP: "Pause slideshow",
                    FULL_SCREEN: "Full screen",
                    THUMBS: "Thumbnails",
                    DOWNLOAD: "Download",
                    SHARE: "Share",
                    ZOOM: "Zoom"
                },
                de: {
                    CLOSE: "Schlie&szlig;en",
                    NEXT: "Weiter",
                    PREV: "Zur&uuml;ck",
                    ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                    PLAY_START: "Diaschau starten",
                    PLAY_STOP: "Diaschau beenden",
                    FULL_SCREEN: "Vollbild",
                    THUMBS: "Vorschaubilder",
                    DOWNLOAD: "Herunterladen",
                    SHARE: "Teilen",
                    ZOOM: "Vergr&ouml;&szlig;ern"
                }
            }
        }, o = i(n), u = i(t), v = 0, y = function (n) {
            return n && n.hasOwnProperty && n instanceof i
        }, l = function () {
            return n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || n.oRequestAnimationFrame || function (t) {
                return n.setTimeout(t, 1e3 / 60)
            }
        }(), p = function () {
            return n.cancelAnimationFrame || n.webkitCancelAnimationFrame || n.mozCancelAnimationFrame || n.oCancelAnimationFrame || function (t) {
                n.clearTimeout(t)
            }
        }(), s = function () {
            var u = t.createElement("fakeelement"), n, i = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
            for (n in i) if (u.style[n] !== r) return i[n];
            return "transitionend"
        }(), f = function (n) {
            return n && n.length && n[0].offsetHeight
        }, e = function (n, t) {
            var r = i.extend(!0, {}, n, t);
            return i.each(t, function (n, t) {
                i.isArray(t) && (r[n] = t)
            }), r
        }, w = function (n) {
            var r, u;
            return !n || n.ownerDocument !== t ? !1 : (i(".fancybox-container").css("pointer-events", "none"), r = {
                x: n.getBoundingClientRect().left + n.offsetWidth / 2,
                y: n.getBoundingClientRect().top + n.offsetHeight / 2
            }, u = t.elementFromPoint(r.x, r.y) === n, i(".fancybox-container").css("pointer-events", ""), u)
        }, h = function (n, t, r) {
            var u = this;
            (u.opts = e({index: r}, i.fancybox.defaults), i.isPlainObject(t) && (u.opts = e(u.opts, t)), i.fancybox.isMobile && (u.opts = e(u.opts, u.opts.mobile)), u.id = u.opts.id || ++v, u.currIndex = parseInt(u.opts.index, 10) || 0, u.prevIndex = null, u.prevPos = null, u.currPos = 0, u.firstRun = !0, u.group = [], u.slides = {}, u.addContent(n), u.group.length) && u.init()
        };
        i.extend(h.prototype, {
            init: function () {
                var r = this, o = r.group[r.currIndex], u = o.opts, f, e;
                u.closeExisting && i.fancybox.close(!0);
                i("body").addClass("fancybox-active");
                !i.fancybox.getInstance() && u.hideScrollbar !== !1 && !i.fancybox.isMobile && t.body.scrollHeight > n.innerHeight && (i("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (n.innerWidth - t.documentElement.clientWidth) + "px;}<\/style>"), i("body").addClass("compensate-for-scrollbar"));
                e = "";
                i.each(u.buttons, function (n, t) {
                    e += u.btnTpl[t] || ""
                });
                f = i(r.translate(r, u.baseTpl.replace("{{buttons}}", e).replace("{{arrows}}", u.btnTpl.arrowLeft + u.btnTpl.arrowRight))).attr("id", "fancybox-container-" + r.id).addClass(u.baseClass).data("FancyBox", r).appendTo(u.parentEl);
                r.$refs = {container: f};
                ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (n) {
                    r.$refs[n] = f.find(".fancybox-" + n)
                });
                r.trigger("onInit");
                r.activate();
                r.jumpTo(r.currIndex)
            }, translate: function (n, t) {
                var i = n.opts.i18n[n.opts.lang] || n.opts.i18n.en;
                return t.replace(/\{\{(\w+)\}\}/g, function (n, t) {
                    return i[t] === r ? n : i[t]
                })
            }, addContent: function (n) {
                var t = this, f = i.makeArray(n), u;
                i.each(f, function (n, u) {
                    var f = {}, o = {}, c, s, a, h, l;
                    i.isPlainObject(u) ? (f = u, o = u.opts || u) : i.type(u) === "object" && i(u).length ? (c = i(u), o = c.data() || {}, o = i.extend(!0, {}, o, o.options), o.$orig = c, f.src = t.opts.src || o.src || c.attr("href"), f.type || f.src || (f.type = "inline", f.src = u)) : f = {
                        type: "html",
                        src: u + ""
                    };
                    f.opts = i.extend(!0, {}, t.opts, o);
                    i.isArray(o.buttons) && (f.opts.buttons = o.buttons);
                    i.fancybox.isMobile && f.opts.mobile && (f.opts = e(f.opts, f.opts.mobile));
                    s = f.type || f.opts.type;
                    h = f.src || "";
                    !s && h && ((a = h.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (s = "video", f.opts.video.format || (f.opts.video.format = "video/" + (a[1] === "ogv" ? "ogg" : a[1]))) : h.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : h.match(/\.(pdf)((\?|#).*)?$/i) ? (s = "iframe", f = i.extend(!0, f, {
                        contentType: "pdf",
                        opts: {iframe: {preload: !1}}
                    })) : h.charAt(0) === "#" && (s = "inline"));
                    s ? f.type = s : t.trigger("objectNeedsType", f);
                    f.contentType || (f.contentType = i.inArray(f.type, ["html", "inline", "ajax"]) > -1 ? "html" : f.type);
                    f.index = t.group.length;
                    f.opts.smallBtn == "auto" && (f.opts.smallBtn = i.inArray(f.type, ["html", "inline", "ajax"]) > -1);
                    f.opts.toolbar === "auto" && (f.opts.toolbar = !f.opts.smallBtn);
                    f.$thumb = f.opts.$thumb || null;
                    f.opts.$trigger && f.index === t.opts.index && (f.$thumb = f.opts.$trigger.find("img:first"), f.$thumb.length && (f.opts.$orig = f.opts.$trigger));
                    f.$thumb && f.$thumb.length || !f.opts.$orig || (f.$thumb = f.opts.$orig.find("img:first"));
                    f.$thumb && !f.$thumb.length && (f.$thumb = null);
                    f.thumb = f.opts.thumb || (f.$thumb ? f.$thumb[0].src : null);
                    i.type(f.opts.caption) === "function" && (f.opts.caption = f.opts.caption.apply(u, [t, f]));
                    i.type(t.opts.caption) === "function" && (f.opts.caption = t.opts.caption.apply(u, [t, f]));
                    f.opts.caption instanceof i || (f.opts.caption = f.opts.caption === r ? "" : f.opts.caption + "");
                    f.type === "ajax" && (l = h.split(/\s+/, 2), l.length > 1 && (f.src = l.shift(), f.opts.filter = l.shift()));
                    f.opts.modal && (f.opts = i.extend(!0, f.opts, {
                        trapFocus: !0,
                        infobar: 0,
                        toolbar: 0,
                        smallBtn: 0,
                        keyboard: 0,
                        slideShow: 0,
                        fullScreen: 0,
                        thumbs: 0,
                        touch: 0,
                        clickContent: !1,
                        clickSlide: !1,
                        clickOutside: !1,
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1
                    }));
                    t.group.push(f)
                });
                Object.keys(t.slides).length && (t.updateControls(), u = t.Thumbs, u && u.isActive && (u.create(), u.focus()))
            }, addEvents: function () {
                var t = this;
                t.removeEvents();
                t.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (n) {
                    n.stopPropagation();
                    n.preventDefault();
                    t.close(n)
                }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (n) {
                    n.stopPropagation();
                    n.preventDefault();
                    t.previous()
                }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (n) {
                    n.stopPropagation();
                    n.preventDefault();
                    t.next()
                }).on("click.fb", "[data-fancybox-zoom]", function () {
                    t[t.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                });
                o.on("orientationchange.fb resize.fb", function (n) {
                    n && n.originalEvent && n.originalEvent.type === "resize" ? (t.requestId && p(t.requestId), t.requestId = l(function () {
                        t.update(n)
                    })) : (t.current && t.current.type === "iframe" && t.$refs.stage.hide(), setTimeout(function () {
                        t.$refs.stage.show();
                        t.update(n)
                    }, i.fancybox.isMobile ? 600 : 250))
                });
                u.on("keydown.fb", function (n) {
                    var f = i.fancybox ? i.fancybox.getInstance() : null, u = f.current, r = n.keyCode || n.which;
                    if (r == 9) {
                        u.opts.trapFocus && t.focus(n);
                        return
                    }
                    if (u.opts.keyboard && !n.ctrlKey && !n.altKey && !n.shiftKey && !i(n.target).is("input,textarea,video,audio,select")) {
                        if (r === 8 || r === 27) {
                            n.preventDefault();
                            t.close(n);
                            return
                        }
                        if (r === 37 || r === 38) {
                            n.preventDefault();
                            t.previous();
                            return
                        }
                        if (r === 39 || r === 40) {
                            n.preventDefault();
                            t.next();
                            return
                        }
                        t.trigger("afterKeydown", n, r)
                    }
                });
                if (t.group[t.currIndex].opts.idleTime) {
                    t.idleSecondsCounter = 0;
                    u.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function () {
                        t.idleSecondsCounter = 0;
                        t.isIdle && t.showControls();
                        t.isIdle = !1
                    });
                    t.idleInterval = n.setInterval(function () {
                        t.idleSecondsCounter++;
                        t.idleSecondsCounter >= t.group[t.currIndex].opts.idleTime && !t.isDragging && (t.isIdle = !0, t.idleSecondsCounter = 0, t.hideControls())
                    }, 1e3)
                }
            }, removeEvents: function () {
                var t = this;
                o.off("orientationchange.fb resize.fb");
                u.off("keydown.fb .fb-idle");
                this.$refs.container.off(".fb-close .fb-prev .fb-next");
                t.idleInterval && (n.clearInterval(t.idleInterval), t.idleInterval = null)
            }, previous: function (n) {
                return this.jumpTo(this.currPos - 1, n)
            }, next: function (n) {
                return this.jumpTo(this.currPos + 1, n)
            }, jumpTo: function (n, t) {
                var u = this, l = u.group.length, h, v, c, e, o, s, y, a, p;
                if (!u.isDragging && !u.isClosing && (!u.isAnimating || !u.firstRun)) {
                    if (n = parseInt(n, 10), c = u.current ? u.current.opts.loop : u.opts.loop, !c && (n < 0 || n >= l)) return !1;
                    if (h = u.firstRun = !Object.keys(u.slides).length, o = u.current, u.prevIndex = u.currIndex, u.prevPos = u.currPos, e = u.createSlide(n), l > 1 && ((c || e.index < l - 1) && u.createSlide(n + 1), (c || e.index > 0) && u.createSlide(n - 1)), u.current = e, u.currIndex = e.index, u.currPos = e.pos, u.trigger("beforeShow", h), u.updateControls(), e.forcedDuration = r, i.isNumeric(t) ? e.forcedDuration = t : t = e.opts[h ? "animationDuration" : "transitionDuration"], t = parseInt(t, 10), v = u.isMoved(e), e.$slide.addClass("fancybox-slide--current"), h) {
                        e.opts.animationEffect && t && u.$refs.container.css("transition-duration", t + "ms");
                        u.$refs.container.addClass("fancybox-is-open").trigger("focus");
                        u.loadSlide(e);
                        u.preload("image");
                        return
                    }
                    s = i.fancybox.getTranslate(o.$slide);
                    y = i.fancybox.getTranslate(u.$refs.stage);
                    i.each(u.slides, function (n, t) {
                        i.fancybox.stop(t.$slide, !0)
                    });
                    o.pos !== e.pos && (o.isComplete = !1);
                    o.$slide.removeClass("fancybox-slide--complete fancybox-slide--current");
                    v ? (p = s.left - (o.pos * s.width + o.pos * o.opts.gutter), i.each(u.slides, function (n, r) {
                        r.$slide.removeClass("fancybox-animated").removeClass(function (n, t) {
                            return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                        });
                        var o = r.pos * s.width + r.pos * r.opts.gutter;
                        i.fancybox.setTranslate(r.$slide, {top: 0, left: o - y.left + p});
                        r.pos !== e.pos && r.$slide.addClass("fancybox-slide--" + (r.pos > e.pos ? "next" : "previous"));
                        f(r.$slide);
                        i.fancybox.animate(r.$slide, {
                            top: 0,
                            left: (r.pos - e.pos) * s.width + (r.pos - e.pos) * r.opts.gutter
                        }, t, function () {
                            r.$slide.css({
                                transform: "",
                                opacity: ""
                            }).removeClass("fancybox-slide--next fancybox-slide--previous");
                            r.pos === u.currPos && u.complete()
                        })
                    })) : t && e.opts.transitionEffect && (a = "fancybox-animated fancybox-fx-" + e.opts.transitionEffect, o.$slide.addClass("fancybox-slide--" + (o.pos > e.pos ? "next" : "previous")), i.fancybox.animate(o.$slide, a, t, function () {
                        o.$slide.removeClass(a).removeClass("fancybox-slide--next fancybox-slide--previous")
                    }, !1));
                    e.isLoaded ? u.revealContent(e) : u.loadSlide(e);
                    u.preload("image")
                }
            }, createSlide: function (n) {
                var t = this, u, r;
                return r = n % t.group.length, r = r < 0 ? t.group.length + r : r, !t.slides[n] && t.group[r] && (u = i('<div class="fancybox-slide"><\/div>').appendTo(t.$refs.stage), t.slides[n] = i.extend(!0, {}, t.group[r], {
                    pos: n,
                    $slide: u,
                    isLoaded: !1
                }), t.updateSlide(t.slides[n])), t.slides[n]
            }, scaleToActual: function (n, t, u) {
                var e = this, f = e.current, y = f.$content, a = i.fancybox.getTranslate(f.$slide).width,
                    v = i.fancybox.getTranslate(f.$slide).height, c = f.width, l = f.height, o, s, h, p, w;
                e.isAnimating || e.isMoved() || !y || f.type != "image" || !f.isLoaded || f.hasError || (e.isAnimating = !0, i.fancybox.stop(y), n = n === r ? a * .5 : n, t = t === r ? v * .5 : t, o = i.fancybox.getTranslate(y), o.top -= i.fancybox.getTranslate(f.$slide).top, o.left -= i.fancybox.getTranslate(f.$slide).left, p = c / o.width, w = l / o.height, s = a * .5 - c * .5, h = v * .5 - l * .5, c > a && (s = o.left * p - (n * p - n), s > 0 && (s = 0), s < a - c && (s = a - c)), l > v && (h = o.top * w - (t * w - t), h > 0 && (h = 0), h < v - l && (h = v - l)), e.updateCursor(c, l), i.fancybox.animate(y, {
                    top: h,
                    left: s,
                    scaleX: p,
                    scaleY: w
                }, u || 366, function () {
                    e.isAnimating = !1
                }), e.SlideShow && e.SlideShow.isActive && e.SlideShow.stop())
            }, scaleToFit: function (n) {
                var t = this, u = t.current, f = u.$content, r;
                t.isAnimating || t.isMoved() || !f || u.type != "image" || !u.isLoaded || u.hasError || (t.isAnimating = !0, i.fancybox.stop(f), r = t.getFitPos(u), t.updateCursor(r.width, r.height), i.fancybox.animate(f, {
                    top: r.top,
                    left: r.left,
                    scaleX: r.width / f.width(),
                    scaleY: r.height / f.height()
                }, n || 366, function () {
                    t.isAnimating = !1
                }))
            }, getFitPos: function (n) {
                var l = this, e = n.$content, o = n.$slide, t = n.width || n.opts.width, r = n.height || n.opts.height,
                    u, f, c, s, h = {};
                return !n.isLoaded || !e || !e.length ? !1 : (u = i.fancybox.getTranslate(l.$refs.stage).width, f = i.fancybox.getTranslate(l.$refs.stage).height, u -= parseFloat(o.css("paddingLeft")) + parseFloat(o.css("paddingRight")) + parseFloat(e.css("marginLeft")) + parseFloat(e.css("marginRight")), f -= parseFloat(o.css("paddingTop")) + parseFloat(o.css("paddingBottom")) + parseFloat(e.css("marginTop")) + parseFloat(e.css("marginBottom")), t && r || (t = u, r = f), c = Math.min(1, u / t, f / r), t = c * t, r = c * r, t > u - .5 && (t = u), r > f - .5 && (r = f), n.type === "image" ? (h.top = Math.floor((f - r) * .5) + parseFloat(o.css("paddingTop")), h.left = Math.floor((u - t) * .5) + parseFloat(o.css("paddingLeft"))) : n.contentType === "video" && (s = n.opts.width && n.opts.height ? t / r : n.opts.ratio || 16 / 9, r > t / s ? r = t / s : t > r * s && (t = r * s)), h.width = t, h.height = r, h)
            }, update: function (n) {
                var t = this;
                i.each(t.slides, function (i, r) {
                    t.updateSlide(r, n)
                })
            }, updateSlide: function (n, t) {
                var r = this, f = n && n.$content, e = n.width || n.opts.width, o = n.height || n.opts.height,
                    u = n.$slide;
                r.adjustCaption(n);
                f && (e || o || n.contentType === "video") && !n.hasError && (i.fancybox.stop(f), i.fancybox.setTranslate(f, r.getFitPos(n)), n.pos === r.currPos && (r.isAnimating = !1, r.updateCursor()));
                r.adjustLayout(n);
                u.length && (u.trigger("refresh"), n.pos === r.currPos && r.$refs.toolbar.add(r.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", u.get(0).scrollHeight > u.get(0).clientHeight));
                r.trigger("onUpdate", n, t)
            }, centerSlide: function (n) {
                var u = this, f = u.current, t = f.$slide;
                !u.isClosing && f && (t.siblings().css({
                    transform: "",
                    opacity: ""
                }), t.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), i.fancybox.animate(t, {
                    top: 0,
                    left: 0,
                    opacity: 1
                }, n === r ? 0 : n, function () {
                    t.css({transform: "", opacity: ""});
                    f.isComplete || u.complete()
                }, !1))
            }, isMoved: function (n) {
                var t = n || this.current, r, u;
                return t ? (u = i.fancybox.getTranslate(this.$refs.stage), r = i.fancybox.getTranslate(t.$slide), !t.$slide.hasClass("fancybox-animated") && (Math.abs(r.top - u.top) > .5 || Math.abs(r.left - u.left) > .5)) : !1
            }, updateCursor: function (n, t) {
                var u = this, r = u.current, f = u.$refs.container, o, e;
                r && !u.isClosing && u.Guestures && (f.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), o = u.canPan(n, t), e = o ? !0 : u.isZoomable(), f.toggleClass("fancybox-is-zoomable", e), i("[data-fancybox-zoom]").prop("disabled", !e), o ? f.addClass("fancybox-can-pan") : e && (r.opts.clickContent === "zoom" || i.isFunction(r.opts.clickContent) && r.opts.clickContent(r) == "zoom") ? f.addClass("fancybox-can-zoomIn") : r.opts.touch && (r.opts.touch.vertical || u.group.length > 1) && r.contentType !== "video" && f.addClass("fancybox-can-swipe"))
            }, isZoomable: function () {
                var i = this, n = i.current, t;
                return n && !i.isClosing && n.type === "image" && !n.hasError && (!n.isLoaded || (t = i.getFitPos(n), t && (n.width > t.width || n.height > t.height))) ? !0 : !1
            }, isScaledDown: function (n, t) {
                var o = this, u = !1, f = o.current, e = f.$content;
                return n !== r && t !== r ? u = n < f.width && t < f.height : e && (u = i.fancybox.getTranslate(e), u = u.width < f.width && u.height < f.height), u
            }, canPan: function (n, t) {
                var o = this, u = o.current, e = null, f = !1;
                return u.type === "image" && (u.isComplete || n && t) && !u.hasError && (f = o.getFitPos(u), n !== r && t !== r ? e = {
                    width: n,
                    height: t
                } : u.isComplete && (e = i.fancybox.getTranslate(u.$content)), e && f && (f = Math.abs(e.width - f.width) > 1.5 || Math.abs(e.height - f.height) > 1.5)), f
            }, loadSlide: function (n) {
                var t = this, u, r, f;
                if (!n.isLoading && !n.isLoaded) {
                    if (n.isLoading = !0, t.trigger("beforeLoad", n) === !1) return n.isLoading = !1, !1;
                    u = n.type;
                    r = n.$slide;
                    r.off("refresh").trigger("onReset").addClass(n.opts.slideClass);
                    switch (u) {
                        case"image":
                            t.setImage(n);
                            break;
                        case"iframe":
                            t.setIframe(n);
                            break;
                        case"html":
                            t.setContent(n, n.src || n.content);
                            break;
                        case"video":
                            t.setContent(n, n.opts.video.tpl.replace(/\{\{src\}\}/gi, n.src).replace("{{format}}", n.opts.videoFormat || n.opts.video.format || "").replace("{{poster}}", n.thumb || ""));
                            break;
                        case"inline":
                            i(n.src).length ? t.setContent(n, i(n.src)) : t.setError(n);
                            break;
                        case"ajax":
                            t.showLoading(n);
                            f = i.ajax(i.extend({}, n.opts.ajax.settings, {
                                url: n.src, success: function (i, r) {
                                    r === "success" && t.setContent(n, i)
                                }, error: function (i, r) {
                                    i && r !== "abort" && t.setError(n)
                                }
                            }));
                            r.one("onReset", function () {
                                f.abort()
                            });
                            break;
                        default:
                            t.setError(n)
                    }
                    return !0
                }
            }, setImage: function (n) {
                var r = this, u;
                setTimeout(function () {
                    var t = n.$image;
                    r.isClosing || !n.isLoading || t && t.length && t[0].complete || n.hasError || r.showLoading(n)
                }, 50);
                r.checkSrcset(n);
                n.$content = i('<div class="fancybox-content"><\/div>').addClass("fancybox-is-hidden").appendTo(n.$slide.addClass("fancybox-slide--image"));
                n.opts.preload !== !1 && n.opts.width && n.opts.height && n.thumb && (n.width = n.opts.width, n.height = n.opts.height, u = t.createElement("img"), u.onerror = function () {
                    i(this).remove();
                    n.$ghost = null
                }, u.onload = function () {
                    r.afterLoad(n)
                }, n.$ghost = i(u).addClass("fancybox-image").appendTo(n.$content).attr("src", n.thumb));
                r.setBigImage(n)
            }, checkSrcset: function (t) {
                var e = t.opts.srcset || t.opts.image.srcset, i, r, o, s, f, u;
                if (e) {
                    for (o = n.devicePixelRatio || 1, s = n.innerWidth * o, r = e.split(",").map(function (n) {
                        var t = {};
                        return n.trim().split(/\s+/).forEach(function (n, i) {
                            var r = parseInt(n.substring(0, n.length - 1), 10);
                            if (i === 0) return t.url = n;
                            r && (t.value = r, t.postfix = n[n.length - 1])
                        }), t
                    }), r.sort(function (n, t) {
                        return n.value - t.value
                    }), f = 0; f < r.length; f++) if (u = r[f], u.postfix === "w" && u.value >= s || u.postfix === "x" && u.value >= o) {
                        i = u;
                        break
                    }
                    !i && r.length && (i = r[r.length - 1]);
                    i && (t.src = i.url, t.width && t.height && i.postfix == "w" && (t.height = t.width / t.height * i.value, t.width = i.value), t.opts.srcset = e)
                }
            }, setBigImage: function (n) {
                var r = this, f = t.createElement("img"), u = i(f);
                n.$image = u.one("error", function () {
                    r.setError(n)
                }).one("load", function () {
                    var t;
                    (n.$ghost || (r.resolveImageSlideSize(n, this.naturalWidth, this.naturalHeight), r.afterLoad(n)), r.isClosing) || (n.opts.srcset && (t = n.opts.sizes, t && t !== "auto" || (t = (n.width / n.height > 1 && o.width() / o.height() > 1 ? "100" : Math.round(n.width / n.height * 100)) + "vw"), u.attr("sizes", t).attr("srcset", n.opts.srcset)), n.$ghost && setTimeout(function () {
                        n.$ghost && !r.isClosing && n.$ghost.hide()
                    }, Math.min(300, Math.max(1e3, n.height / 1600))), r.hideLoading(n))
                }).addClass("fancybox-image").attr("src", n.src).appendTo(n.$content);
                (f.complete || f.readyState == "complete") && u.naturalWidth && u.naturalHeight ? u.trigger("load") : f.error && u.trigger("error")
            }, resolveImageSlideSize: function (n, t, i) {
                var r = parseInt(n.opts.width, 10), u = parseInt(n.opts.height, 10);
                n.width = t;
                n.height = i;
                r > 0 && (n.width = r, n.height = Math.floor(r * i / t));
                u > 0 && (n.width = Math.floor(u * t / i), n.height = u)
            }, setIframe: function (n) {
                var e = this, t = n.opts.iframe, u = n.$slide, f;
                if (n.$content = i('<div class="fancybox-content' + (t.preload ? " fancybox-is-hidden" : "") + '"><\/div>').css(t.css).appendTo(u), u.addClass("fancybox-slide--" + n.contentType), n.$iframe = f = i(t.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(t.attr).appendTo(n.$content), t.preload) {
                    e.showLoading(n);
                    f.on("load.fb error.fb", function () {
                        this.isReady = 1;
                        n.$slide.trigger("refresh");
                        e.afterLoad(n)
                    });
                    u.on("refresh.fb", function () {
                        var e = n.$content, o = t.css.width, s = t.css.height, h, i;
                        if (f[0].isReady === 1) {
                            try {
                                h = f.contents();
                                i = h.find("body")
                            } catch (c) {
                            }
                            i && i.length && i.children().length && (u.css("overflow", "visible"), e.css({
                                width: "100%",
                                "max-width": "100%",
                                height: "9999px"
                            }), o === r && (o = Math.ceil(Math.max(i[0].clientWidth, i.outerWidth(!0)))), e.css("width", o ? o : "").css("max-width", ""), s === r && (s = Math.ceil(Math.max(i[0].clientHeight, i.outerHeight(!0)))), e.css("height", s ? s : ""), u.css("overflow", "auto"));
                            e.removeClass("fancybox-is-hidden")
                        }
                    })
                } else e.afterLoad(n);
                f.attr("src", n.src);
                u.one("onReset", function () {
                    try {
                        i(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                    } catch (t) {
                    }
                    i(this).off("refresh.fb").empty();
                    n.isLoaded = !1;
                    n.isRevealed = !1
                })
            }, setContent: function (n, t) {
                var r = this;
                if (!r.isClosing) {
                    r.hideLoading(n);
                    n.$content && i.fancybox.stop(n.$content);
                    n.$slide.empty();
                    y(t) && t.parent().length ? ((t.hasClass("fancybox-content") || t.parent().hasClass("fancybox-content")) && t.parents(".fancybox-slide").trigger("onReset"), n.$placeholder = i("<div>").hide().insertAfter(t), t.css("display", "inline-block")) : n.hasError || (i.type(t) === "string" && (t = i("<div>").append(i.trim(t)).contents()), n.opts.filter && (t = i("<div>").html(t).find(n.opts.filter)));
                    n.$slide.one("onReset", function () {
                        i(this).find("video,audio").trigger("pause");
                        n.$placeholder && (n.$placeholder.after(t.removeClass("fancybox-content").hide()).remove(), n.$placeholder = null);
                        n.$smallBtn && (n.$smallBtn.remove(), n.$smallBtn = null);
                        n.hasError || (i(this).empty(), n.isLoaded = !1, n.isRevealed = !1)
                    });
                    i(t).appendTo(n.$slide);
                    i(t).is("video,audio") && (i(t).addClass("fancybox-video"), i(t).wrap("<div><\/div>"), n.contentType = "video", n.opts.width = n.opts.width || i(t).attr("width"), n.opts.height = n.opts.height || i(t).attr("height"));
                    n.$content = n.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first();
                    n.$content.siblings().hide();
                    n.$content.length || (n.$content = n.$slide.wrapInner("<div><\/div>").children().first());
                    n.$content.addClass("fancybox-content");
                    n.$slide.addClass("fancybox-slide--" + n.contentType);
                    r.afterLoad(n)
                }
            }, setError: function (n) {
                n.hasError = !0;
                n.$slide.trigger("onReset").removeClass("fancybox-slide--" + n.contentType).addClass("fancybox-slide--error");
                n.contentType = "html";
                this.setContent(n, this.translate(n, n.opts.errorTpl));
                n.pos === this.currPos && (this.isAnimating = !1)
            }, showLoading: function (n) {
                var t = this;
                n = n || t.current;
                n && !n.$spinner && (n.$spinner = i(t.translate(t, t.opts.spinnerTpl)).appendTo(n.$slide).hide().fadeIn("fast"))
            }, hideLoading: function (n) {
                var t = this;
                n = n || t.current;
                n && n.$spinner && (n.$spinner.stop().remove(), delete n.$spinner)
            }, afterLoad: function (n) {
                var t = this;
                if (!t.isClosing) {
                    if (n.isLoading = !1, n.isLoaded = !0, t.trigger("afterLoad", n), t.hideLoading(n), !n.opts.smallBtn || n.$smallBtn && n.$smallBtn.length || (n.$smallBtn = i(t.translate(n, n.opts.btnTpl.smallBtn)).appendTo(n.$content)), n.opts.protect && n.$content && !n.hasError) {
                        n.$content.on("contextmenu.fb", function (n) {
                            return n.button == 2 && n.preventDefault(), !0
                        });
                        n.type === "image" && i('<div class="fancybox-spaceball"><\/div>').appendTo(n.$content)
                    }
                    t.adjustCaption(n);
                    t.adjustLayout(n);
                    n.pos === t.currPos && t.updateCursor();
                    t.revealContent(n)
                }
            }, adjustCaption: function (n) {
                var t = this, i = n || t.current, u = i.opts.caption, o = i.opts.preventCaptionOverlap,
                    f = t.$refs.caption, r, e = !1;
                f.toggleClass("fancybox-caption--separate", o);
                o && u && u.length && (i.pos !== t.currPos ? (r = f.clone().appendTo(f.parent()), r.children().eq(0).empty().html(u), e = r.outerHeight(!0), r.empty().remove()) : t.$caption && (e = t.$caption.outerHeight(!0)), i.$slide.css("padding-bottom", e || ""))
            }, adjustLayout: function (n) {
                var e = this, t = n || e.current, r, u, f, i;
                t.isLoaded && t.opts.disableLayoutFix !== !0 && (t.$content.css("margin-bottom", ""), t.$content.outerHeight() > t.$slide.height() + .5 && (f = t.$slide[0].style["padding-bottom"], i = t.$slide.css("padding-bottom"), parseFloat(i) > 0 && (r = t.$slide[0].scrollHeight, t.$slide.css("padding-bottom", 0), Math.abs(r - t.$slide[0].scrollHeight) < 1 && (u = i), t.$slide.css("padding-bottom", f))), t.$content.css("margin-bottom", u))
            }, revealContent: function (n) {
                var t = this, h = n.$slide, u = !1, e = !1, a = t.isMoved(n), v = n.isRevealed, o, l, s, c;
                if (n.isRevealed = !0, o = n.opts[t.firstRun ? "animationEffect" : "transitionEffect"], s = n.opts[t.firstRun ? "animationDuration" : "transitionDuration"], s = parseInt(n.forcedDuration === r ? s : n.forcedDuration, 10), (a || n.pos !== t.currPos || !s) && (o = !1), o === "zoom" && (n.pos === t.currPos && s && n.type === "image" && !n.hasError && (e = t.getThumbPos(n)) ? u = t.getFitPos(n) : o = "fade"), o === "zoom") {
                    t.isAnimating = !0;
                    u.scaleX = u.width / e.width;
                    u.scaleY = u.height / e.height;
                    c = n.opts.zoomOpacity;
                    c == "auto" && (c = Math.abs(n.width / n.height - e.width / e.height) > .1);
                    c && (e.opacity = .1, u.opacity = 1);
                    i.fancybox.setTranslate(n.$content.removeClass("fancybox-is-hidden"), e);
                    f(n.$content);
                    i.fancybox.animate(n.$content, u, s, function () {
                        t.isAnimating = !1;
                        t.complete()
                    });
                    return
                }
                if (t.updateSlide(n), !o) {
                    n.$content.removeClass("fancybox-is-hidden");
                    v || !a || n.type !== "image" || n.hasError || n.$content.hide().fadeIn("fast");
                    n.pos === t.currPos && t.complete();
                    return
                }
                i.fancybox.stop(h);
                l = "fancybox-slide--" + (n.pos >= t.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + o;
                h.addClass(l).removeClass("fancybox-slide--current");
                n.$content.removeClass("fancybox-is-hidden");
                f(h);
                n.type !== "image" && n.$content.hide().show(0);
                i.fancybox.animate(h, "fancybox-slide--current", s, function () {
                    h.removeClass(l).css({transform: "", opacity: ""});
                    n.pos === t.currPos && t.complete()
                }, !0)
            }, getThumbPos: function (n) {
                var e = !1, t = n.$thumb, r, u, o, s, f;
                return !t || !w(t[0]) ? !1 : (r = i.fancybox.getTranslate(t), u = parseFloat(t.css("border-top-width") || 0), o = parseFloat(t.css("border-right-width") || 0), s = parseFloat(t.css("border-bottom-width") || 0), f = parseFloat(t.css("border-left-width") || 0), e = {
                    top: r.top + u,
                    left: r.left + f,
                    width: r.width - o - f,
                    height: r.height - u - s,
                    scaleX: 1,
                    scaleY: 1
                }, r.width > 0 && r.height > 0 ? e : !1)
            }, complete: function () {
                var n = this, t = n.current, u = {}, r;
                if (!n.isMoved() && t.isLoaded) {
                    if (t.isComplete || (t.isComplete = !0, t.$slide.siblings().trigger("onReset"), n.preload("inline"), f(t.$slide), t.$slide.addClass("fancybox-slide--complete"), i.each(n.slides, function (t, r) {
                        r.pos >= n.currPos - 1 && r.pos <= n.currPos + 1 ? u[r.pos] = r : r && (i.fancybox.stop(r.$slide), r.$slide.off().remove())
                    }), n.slides = u), n.isAnimating = !1, n.updateCursor(), n.trigger("afterShow"), !!t.opts.video.autoStart) t.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function () {
                        Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen();
                        n.next()
                    });
                    t.opts.autoFocus && t.contentType === "html" && (r = t.$content.find("input[autofocus]:enabled:visible:first"), r.length ? r.trigger("focus") : n.focus(null, !0));
                    t.$slide.scrollTop(0).scrollLeft(0)
                }
            }, preload: function (n) {
                var t = this, i, r;
                t.group.length < 2 || (r = t.slides[t.currPos + 1], i = t.slides[t.currPos - 1], i && i.type === n && t.loadSlide(i), r && r.type === n && t.loadSlide(r))
            }, focus: function (n, r) {
                var f = this,
                    o = 'a[href],area[href],input:not([disabled]):not([type="hidden"]):not([aria-hidden]),select:not([disabled]):not([aria-hidden]),textarea:not([disabled]):not([aria-hidden]),button:not([disabled]):not([aria-hidden]),iframe,object,embed,video,audio,[contenteditable],[tabindex]:not([tabindex^="-"])',
                    u, e;
                f.isClosing || (u = !n && f.current && f.current.isComplete ? f.current.$slide.find("*:visible" + (r ? ":not(.fancybox-close-small)" : "")) : f.$refs.container.find("*:visible"), u = u.filter(o).filter(function () {
                    return i(this).css("visibility") !== "hidden" && !i(this).hasClass("disabled")
                }), u.length ? (e = u.index(t.activeElement), n && n.shiftKey ? (e < 0 || e == 0) && (n.preventDefault(), u.eq(u.length - 1).trigger("focus")) : (e < 0 || e == u.length - 1) && (n && n.preventDefault(), u.eq(0).trigger("focus"))) : f.$refs.container.trigger("focus"))
            }, activate: function () {
                var n = this;
                i(".fancybox-container").each(function () {
                    var t = i(this).data("FancyBox");
                    t && t.id !== n.id && !t.isClosing && (t.trigger("onDeactivate"), t.removeEvents(), t.isVisible = !1)
                });
                n.isVisible = !0;
                (n.current || n.isIdle) && (n.update(), n.updateControls());
                n.trigger("onActivate");
                n.addEvents()
            }, close: function (n, t) {
                var r = this, u = r.current, o, s, h, c, a, y, e, v = function () {
                    r.cleanUp(n)
                };
                return r.isClosing ? !1 : (r.isClosing = !0, r.trigger("beforeClose", n) === !1) ? (r.isClosing = !1, l(function () {
                    r.update()
                }), !1) : (r.removeEvents(), h = u.$content, o = u.opts.animationEffect, s = i.isNumeric(t) ? t : o ? u.opts.animationDuration : 0, u.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), n !== !0 ? i.fancybox.stop(u.$slide) : o = !1, u.$slide.siblings().trigger("onReset").remove(), s && r.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", s + "ms"), r.hideLoading(u), r.hideControls(!0), r.updateCursor(), o !== "zoom" || h && s && u.type === "image" && !r.isMoved() && !u.hasError && (e = r.getThumbPos(u)) || (o = "fade"), o === "zoom") ? (i.fancybox.stop(h), c = i.fancybox.getTranslate(h), y = {
                    top: c.top,
                    left: c.left,
                    scaleX: c.width / e.width,
                    scaleY: c.height / e.height,
                    width: e.width,
                    height: e.height
                }, a = u.opts.zoomOpacity, a == "auto" && (a = Math.abs(u.width / u.height - e.width / e.height) > .1), a && (e.opacity = 0), i.fancybox.setTranslate(h, y), f(h), i.fancybox.animate(h, e, s, v), !0) : (o && s ? i.fancybox.animate(u.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + o, s, v) : n === !0 ? setTimeout(v, s) : v(), !0)
            }, cleanUp: function (t) {
                var r = this, f, u = r.current.opts.$orig, e, o;
                r.current.$slide.trigger("onReset");
                r.$refs.container.empty().remove();
                r.trigger("afterClose", t);
                !r.current.opts.backFocus || (u && u.length && u.is(":visible") || (u = r.$trigger), u && u.length && (e = n.scrollX, o = n.scrollY, u.trigger("focus"), i("html, body").scrollTop(o).scrollLeft(e)));
                r.current = null;
                f = i.fancybox.getInstance();
                f ? f.activate() : (i("body").removeClass("fancybox-active compensate-for-scrollbar"), i("#fancybox-style-noscroll").remove())
            }, trigger: function (n, t) {
                var f = Array.prototype.slice.call(arguments, 1), e = this, r = t && t.opts ? t : e.current, o;
                if (r ? f.unshift(r) : r = e, f.unshift(e), i.isFunction(r.opts[n]) && (o = r.opts[n].apply(r, f)), o === !1) return o;
                n !== "afterClose" && e.$refs ? e.$refs.container.trigger(n + ".fb", f) : u.trigger(n + ".fb", f)
            }, updateControls: function () {
                var n = this, r = n.current, f = r.index, u = n.$refs.container, o = n.$refs.caption,
                    e = r.opts.caption;
                r.$slide.trigger("refresh");
                e && e.length ? (n.$caption = o, o.children().eq(0).html(e)) : n.$caption = null;
                n.hasHiddenControls || n.isIdle || n.showControls();
                u.find("[data-fancybox-count]").html(n.group.length);
                u.find("[data-fancybox-index]").html(f + 1);
                u.find("[data-fancybox-prev]").prop("disabled", !r.opts.loop && f <= 0);
                u.find("[data-fancybox-next]").prop("disabled", !r.opts.loop && f >= n.group.length - 1);
                r.type === "image" ? u.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", r.opts.image.src || r.src).show() : r.opts.toolbar && u.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
                i(t.activeElement).is(":hidden,[disabled]") && n.$refs.container.trigger("focus")
            }, hideControls: function (n) {
                var i = this, t = ["infobar", "toolbar", "nav"];
                (n || !i.current.opts.preventCaptionOverlap) && t.push("caption");
                this.$refs.container.removeClass(t.map(function (n) {
                    return "fancybox-show-" + n
                }).join(" "));
                this.hasHiddenControls = !0
            }, showControls: function () {
                var n = this, t = n.current ? n.current.opts : n.opts, i = n.$refs.container;
                n.hasHiddenControls = !1;
                n.idleSecondsCounter = 0;
                i.toggleClass("fancybox-show-toolbar", !!(t.toolbar && t.buttons)).toggleClass("fancybox-show-infobar", !!(t.infobar && n.group.length > 1)).toggleClass("fancybox-show-caption", !!n.$caption).toggleClass("fancybox-show-nav", !!(t.arrows && n.group.length > 1)).toggleClass("fancybox-is-modal", !!t.modal)
            }, toggleControls: function () {
                this.hasHiddenControls ? this.showControls() : this.hideControls()
            }
        });
        i.fancybox = {
            version: "3.5.7",
            defaults: a,
            getInstance: function (n) {
                var t = i('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                    r = Array.prototype.slice.call(arguments, 1);
                return t instanceof h ? (i.type(n) === "string" ? t[n].apply(t, r) : i.type(n) === "function" && n.apply(t, r), t) : !1
            },
            open: function (n, t, i) {
                return new h(n, t, i)
            },
            close: function (n) {
                var t = this.getInstance();
                t && (t.close(), n === !0 && this.close(n))
            },
            destroy: function () {
                this.close(!0);
                u.add("body").off("click.fb-start", "**")
            },
            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            use3d: function () {
                var i = t.createElement("div");
                return n.getComputedStyle && n.getComputedStyle(i) && n.getComputedStyle(i).getPropertyValue("transform") && !(t.documentMode && t.documentMode < 11)
            }(),
            getTranslate: function (n) {
                var t;
                return !n || !n.length ? !1 : (t = n[0].getBoundingClientRect(), {
                    top: t.top || 0,
                    left: t.left || 0,
                    width: t.width,
                    height: t.height,
                    opacity: parseFloat(n.css("opacity"))
                })
            },
            setTranslate: function (n, t) {
                var i = "", u = {};
                if (n && t) return (t.left !== r || t.top !== r) && (i = (t.left === r ? n.position().left : t.left) + "px, " + (t.top === r ? n.position().top : t.top) + "px", i = this.use3d ? "translate3d(" + i + ", 0px)" : "translate(" + i + ")"), t.scaleX !== r && t.scaleY !== r ? i += " scale(" + t.scaleX + ", " + t.scaleY + ")" : t.scaleX !== r && (i += " scaleX(" + t.scaleX + ")"), i.length && (u.transform = i), t.opacity !== r && (u.opacity = t.opacity), t.width !== r && (u.width = t.width), t.height !== r && (u.height = t.height), n.css(u)
            },
            animate: function (n, t, u, f, e) {
                var o = this, h;
                i.isFunction(u) && (f = u, u = null);
                o.stop(n);
                h = o.getTranslate(n);
                n.on(s, function (s) {
                    s && s.originalEvent && (!n.is(s.originalEvent.target) || s.originalEvent.propertyName == "z-index") || (o.stop(n), i.isNumeric(u) && n.css("transition-duration", ""), i.isPlainObject(t) ? t.scaleX !== r && t.scaleY !== r && o.setTranslate(n, {
                        top: t.top,
                        left: t.left,
                        width: h.width * t.scaleX,
                        height: h.height * t.scaleY,
                        scaleX: 1,
                        scaleY: 1
                    }) : e !== !0 && n.removeClass(t), i.isFunction(f) && f(s))
                });
                i.isNumeric(u) && n.css("transition-duration", u + "ms");
                i.isPlainObject(t) ? (t.scaleX !== r && t.scaleY !== r && (delete t.width, delete t.height, n.parent().hasClass("fancybox-slide--image") && n.parent().addClass("fancybox-is-scaling")), i.fancybox.setTranslate(n, t)) : n.addClass(t);
                n.data("timer", setTimeout(function () {
                    n.trigger(s)
                }, u + 33))
            },
            stop: function (n, t) {
                n && n.length && (clearTimeout(n.data("timer")), t && n.trigger(s), n.off(s).css("transition-duration", ""), n.parent().removeClass("fancybox-is-scaling"))
            }
        };
        i.fn.fancybox = function (n) {
            var t;
            if (n = n || {}, t = n.selector || !1, t) i("body").off("click.fb-start", t).on("click.fb-start", t, {options: n}, c); else this.off("click.fb-start").on("click.fb-start", {
                items: this,
                options: n
            }, c);
            return this
        };
        u.on("click.fb-start", "[data-fancybox]", c);
        u.on("click.fb-start", "[data-fancybox-trigger]", function () {
            i('[data-fancybox="' + i(this).attr("data-fancybox-trigger") + '"]').eq(i(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {$trigger: i(this)})
        });
        (function () {
            var n = ".fancybox-button", t = "fancybox-focus", r = null;
            u.on("mousedown mouseup focus blur", n, function (u) {
                switch (u.type) {
                    case"mousedown":
                        r = i(this);
                        break;
                    case"mouseup":
                        r = null;
                        break;
                    case"focusin":
                        i(n).removeClass(t);
                        i(this).is(r) || i(this).is("[disabled]") || i(this).addClass(t);
                        break;
                    case"focusout":
                        i(n).removeClass(t)
                }
            })
        })()
    }
}(window, document, jQuery), function (n) {
    "use strict";
    var r = {
        youtube: {
            matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
            params: {autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1},
            paramPlace: 8,
            type: "iframe",
            url: "https://www.youtube-nocookie.com/embed/$4",
            thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
        },
        vimeo: {
            matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
            params: {autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1},
            paramPlace: 3,
            type: "iframe",
            url: "//player.vimeo.com/video/$2"
        },
        instagram: {
            matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
            type: "image",
            url: "//$1/p/$2/media/?size=l"
        },
        gmap_place: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
            type: "iframe",
            url: function (n) {
                return "//maps.google." + n[2] + "/?ll=" + (n[9] ? n[9] + "&z=" + Math.floor(n[10]) + (n[12] ? n[12].replace(/^\//, "&") : "") : n[12] + "").replace(/\?/, "&") + "&output=" + (n[12] && n[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
            }
        },
        gmap_search: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
            type: "iframe",
            url: function (n) {
                return "//maps.google." + n[2] + "/maps?q=" + n[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
            }
        }
    }, t = function (t, i, r) {
        if (t) return r = r || "", n.type(r) === "object" && (r = n.param(r, !0)), n.each(i, function (n, i) {
            t = t.replace("$" + n, i || "")
        }), r.length && (t += (t.indexOf("?") > 0 ? "&" : "?") + r), t
    }, i;
    n(document).on("objectNeedsType.fb", function (i, u, f) {
        var e = f.src || "", h = !1, v, y, o, c, s, a, l;
        v = n.extend(!0, {}, r, f.opts.media);
        n.each(v, function (i, r) {
            var u, v;
            if (o = e.match(r.matcher), o) {
                if (h = r.type, l = i, a = {}, r.paramPlace && o[r.paramPlace]) for (s = o[r.paramPlace], s[0] == "?" && (s = s.substring(1)), s = s.split("&"), u = 0; u < s.length; ++u) v = s[u].split("=", 2), v.length == 2 && (a[v[0]] = decodeURIComponent(v[1].replace(/\+/g, " ")));
                return c = n.extend(!0, {}, r.params, f.opts[i], a), e = n.type(r.url) === "function" ? r.url.call(this, o, c, f) : t(r.url, o, c), y = n.type(r.thumb) === "function" ? r.thumb.call(this, o, c, f) : t(r.thumb, o), i === "youtube" ? e = e.replace(/&t=((\d+)m)?(\d+)s/, function (n, t, i, r) {
                    return "&start=" + ((i ? parseInt(i, 10) * 60 : 0) + parseInt(r, 10))
                }) : i === "vimeo" && (e = e.replace("&%23", "#")), !1
            }
        });
        h ? (f.opts.thumb || f.opts.$thumb && f.opts.$thumb.length || (f.opts.thumb = y), h === "iframe" && (f.opts = n.extend(!0, f.opts, {
            iframe: {
                preload: !1,
                attr: {scrolling: "no"}
            }
        })), n.extend(f, {
            type: h,
            src: e,
            origSrc: f.src,
            contentSource: l,
            contentType: h === "image" ? "image" : l == "gmap_place" || l == "gmap_search" ? "map" : "video"
        })) : e && (f.type = f.opts.defaultType)
    });
    i = {
        youtube: {src: "https://www.youtube.com/iframe_api", "class": "YT", loading: !1, loaded: !1},
        vimeo: {src: "https://player.vimeo.com/api/player.js", "class": "Vimeo", loading: !1, loaded: !1},
        load: function (n) {
            var t = this, i;
            if (this[n].loaded) {
                setTimeout(function () {
                    t.done(n)
                });
                return
            }
            this[n].loading || (this[n].loading = !0, i = document.createElement("script"), i.type = "text/javascript", i.src = this[n].src, n === "youtube" ? window.onYouTubeIframeAPIReady = function () {
                t[n].loaded = !0;
                t.done(n)
            } : i.onload = function () {
                t[n].loaded = !0;
                t.done(n)
            }, document.body.appendChild(i))
        },
        done: function (t) {
            var i, r, u;
            if (t === "youtube" && delete window.onYouTubeIframeAPIReady, i = n.fancybox.getInstance(), i) if (r = i.current.$content.find("iframe"), t === "youtube" && YT !== undefined && YT) u = new YT.Player(r.attr("id"), {
                events: {
                    onStateChange: function (n) {
                        n.data == 0 && i.next()
                    }
                }
            }); else if (t === "vimeo" && Vimeo !== undefined && Vimeo) {
                u = new Vimeo.Player(r);
                u.on("ended", function () {
                    i.next()
                })
            }
        }
    };
    n(document).on({
        "afterShow.fb": function (n, t, r) {
            t.group.length > 1 && (r.contentSource === "youtube" || r.contentSource === "vimeo") && i.load(r.contentSource)
        }
    })
}(jQuery), function (n, t, i) {
    "use strict";
    var o = function () {
        return n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || n.oRequestAnimationFrame || function (t) {
            return n.setTimeout(t, 1e3 / 60)
        }
    }(), f = function () {
        return n.cancelAnimationFrame || n.webkitCancelAnimationFrame || n.mozCancelAnimationFrame || n.oCancelAnimationFrame || function (t) {
            n.clearTimeout(t)
        }
    }(), e = function (t) {
        var r = [], i;
        t = t.originalEvent || t || n.e;
        t = t.touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [t];
        for (i in t) t[i].pageX ? r.push({x: t[i].pageX, y: t[i].pageY}) : t[i].clientX && r.push({
            x: t[i].clientX,
            y: t[i].clientY
        });
        return r
    }, u = function (n, t, i) {
        return !t || !n ? 0 : i === "x" ? n.x - t.x : i === "y" ? n.y - t.y : Math.sqrt(Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2))
    }, s = function (n) {
        if (n.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || i.isFunction(n.get(0).onclick) || n.data("selectable")) return !0;
        for (var t = 0, r = n[0].attributes, u = r.length; t < u; t++) if (r[t].nodeName.substr(0, 14) === "data-fancybox-") return !0;
        return !1
    }, c = function (t) {
        var i = n.getComputedStyle(t)["overflow-y"], r = n.getComputedStyle(t)["overflow-x"],
            u = (i === "scroll" || i === "auto") && t.scrollHeight > t.clientHeight,
            f = (r === "scroll" || r === "auto") && t.scrollWidth > t.clientWidth;
        return u || f
    }, h = function (n) {
        for (var t = !1; ;) {
            if (t = c(n.get(0)), t) break;
            if (n = n.parent(), !n.length || n.hasClass("fancybox-stage") || n.is("body")) break
        }
        return t
    }, r = function (n) {
        var t = this;
        t.instance = n;
        t.$bg = n.$refs.bg;
        t.$stage = n.$refs.stage;
        t.$container = n.$refs.container;
        t.destroy();
        t.$container.on("touchstart.fb.touch mousedown.fb.touch", i.proxy(t, "ontouchstart"))
    };
    r.prototype.destroy = function () {
        var n = this;
        n.$container.off(".fb.touch");
        i(t).off(".fb.touch");
        n.requestId && (f(n.requestId), n.requestId = null);
        n.tapped && (clearTimeout(n.tapped), n.tapped = null)
    };
    r.prototype.ontouchstart = function (r) {
        var f = this, o = i(r.target), l = f.instance, c = l.current, a = c.$slide, y = c.$content,
            v = r.type == "touchstart";
        if ((v && f.$container.off("mousedown.fb.touch"), !r.originalEvent || r.originalEvent.button != 2) && a.length && o.length && !s(o) && !s(o.parent()) && (o.is("img") || !(r.originalEvent.clientX > o[0].clientWidth + o.offset().left))) {
            if (!c || l.isAnimating || c.$slide.hasClass("fancybox-animated")) {
                r.stopPropagation();
                r.preventDefault();
                return
            }
            if (f.realPoints = f.startPoints = e(r), f.startPoints.length) {
                c.touch && r.stopPropagation();
                f.startEvent = r;
                f.canTap = !0;
                f.$target = o;
                f.$content = y;
                f.opts = c.opts.touch;
                f.isPanning = !1;
                f.isSwiping = !1;
                f.isZooming = !1;
                f.isScrolling = !1;
                f.canPan = l.canPan();
                f.startTime = (new Date).getTime();
                f.distanceX = f.distanceY = f.distance = 0;
                f.canvasWidth = Math.round(a[0].clientWidth);
                f.canvasHeight = Math.round(a[0].clientHeight);
                f.contentLastPos = null;
                f.contentStartPos = i.fancybox.getTranslate(f.$content) || {top: 0, left: 0};
                f.sliderStartPos = i.fancybox.getTranslate(a);
                f.stagePos = i.fancybox.getTranslate(l.$refs.stage);
                f.sliderStartPos.top -= f.stagePos.top;
                f.sliderStartPos.left -= f.stagePos.left;
                f.contentStartPos.top -= f.stagePos.top;
                f.contentStartPos.left -= f.stagePos.left;
                i(t).off(".fb.touch").on(v ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", i.proxy(f, "ontouchend")).on(v ? "touchmove.fb.touch" : "mousemove.fb.touch", i.proxy(f, "ontouchmove"));
                (i.fancybox.isMobile && t.addEventListener("scroll", f.onscroll, !0), (f.opts || f.canPan) && (o.is(f.$stage) || f.$stage.find(o).length) || (o.is(".fancybox-image") && r.preventDefault(), i.fancybox.isMobile && o.parents(".fancybox-caption").length)) && (f.isScrollable = h(o) || h(o.parent()), i.fancybox.isMobile && f.isScrollable || r.preventDefault(), (f.startPoints.length === 1 || c.hasError) && (f.canPan ? (i.fancybox.stop(f.$content), f.isPanning = !0) : f.isSwiping = !0, f.$container.addClass("fancybox-is-grabbing")), f.startPoints.length === 2 && c.type === "image" && (c.isLoaded || c.$ghost) && (f.canTap = !1, f.isSwiping = !1, f.isPanning = !1, f.isZooming = !0, i.fancybox.stop(f.$content), f.centerPointStartX = (f.startPoints[0].x + f.startPoints[1].x) * .5 - i(n).scrollLeft(), f.centerPointStartY = (f.startPoints[0].y + f.startPoints[1].y) * .5 - i(n).scrollTop(), f.percentageOfImageAtPinchPointX = (f.centerPointStartX - f.contentStartPos.left) / f.contentStartPos.width, f.percentageOfImageAtPinchPointY = (f.centerPointStartY - f.contentStartPos.top) / f.contentStartPos.height, f.startDistanceBetweenFingers = u(f.startPoints[0], f.startPoints[1])))
            }
        }
    };
    r.prototype.onscroll = function () {
        var n = this;
        n.isScrolling = !0;
        t.removeEventListener("scroll", n.onscroll, !0)
    };
    r.prototype.ontouchmove = function (n) {
        var t = this;
        if (n.originalEvent.buttons !== undefined && n.originalEvent.buttons === 0) {
            t.ontouchend(n);
            return
        }
        if (t.isScrolling) {
            t.canTap = !1;
            return
        }
        if ((t.newPoints = e(n), (t.opts || t.canPan) && t.newPoints.length && t.newPoints.length) && (t.isSwiping && t.isSwiping === !0 || n.preventDefault(), t.distanceX = u(t.newPoints[0], t.startPoints[0], "x"), t.distanceY = u(t.newPoints[0], t.startPoints[0], "y"), t.distance = u(t.newPoints[0], t.startPoints[0]), t.distance > 0)) if (t.isSwiping) t.onSwipe(n); else t.isPanning ? t.onPan() : t.isZooming && t.onZoom()
    };
    r.prototype.onSwipe = function () {
        var t = this, r = t.instance, e = t.isSwiping, u = t.sliderStartPos.left || 0, s;
        if (e === !0) {
            if (Math.abs(t.distance) > 10) {
                if (t.canTap = !1, r.group.length < 2 && t.opts.vertical ? t.isSwiping = "y" : r.isDragging || t.opts.vertical === !1 || t.opts.vertical === "auto" && i(n).width() > 800 ? t.isSwiping = "x" : (s = Math.abs(Math.atan2(t.distanceY, t.distanceX) * 180 / Math.PI), t.isSwiping = s > 45 && s < 135 ? "y" : "x"), t.isSwiping === "y" && i.fancybox.isMobile && t.isScrollable) {
                    t.isScrolling = !0;
                    return
                }
                r.isDragging = t.isSwiping;
                t.startPoints = t.newPoints;
                i.each(r.slides, function (n, u) {
                    var f, e;
                    i.fancybox.stop(u.$slide);
                    f = i.fancybox.getTranslate(u.$slide);
                    e = i.fancybox.getTranslate(r.$refs.stage);
                    u.$slide.css({
                        transform: "",
                        opacity: "",
                        "transition-duration": ""
                    }).removeClass("fancybox-animated").removeClass(function (n, t) {
                        return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                    });
                    u.pos === r.current.pos && (t.sliderStartPos.top = f.top - e.top, t.sliderStartPos.left = f.left - e.left);
                    i.fancybox.setTranslate(u.$slide, {top: f.top - e.top, left: f.left - e.left})
                });
                r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop()
            }
            return
        }
        e == "x" && (u = t.distanceX > 0 && (t.instance.group.length < 2 || t.instance.current.index === 0 && !t.instance.current.opts.loop) ? u + Math.pow(t.distanceX, .8) : t.distanceX < 0 && (t.instance.group.length < 2 || t.instance.current.index === t.instance.group.length - 1 && !t.instance.current.opts.loop) ? u - Math.pow(-t.distanceX, .8) : u + t.distanceX);
        t.sliderLastPos = {top: e == "x" ? 0 : t.sliderStartPos.top + t.distanceY, left: u};
        t.requestId && (f(t.requestId), t.requestId = null);
        t.requestId = o(function () {
            t.sliderLastPos && (i.each(t.instance.slides, function (n, r) {
                var u = r.pos - t.instance.currPos;
                i.fancybox.setTranslate(r.$slide, {
                    top: t.sliderLastPos.top,
                    left: t.sliderLastPos.left + u * t.canvasWidth + u * r.opts.gutter
                })
            }), t.$container.addClass("fancybox-is-sliding"))
        })
    };
    r.prototype.onPan = function () {
        var n = this;
        if (u(n.newPoints[0], n.realPoints[0]) < (i.fancybox.isMobile ? 10 : 5)) {
            n.startPoints = n.newPoints;
            return
        }
        n.canTap = !1;
        n.contentLastPos = n.limitMovement();
        n.requestId && f(n.requestId);
        n.requestId = o(function () {
            i.fancybox.setTranslate(n.$content, n.contentLastPos)
        })
    };
    r.prototype.limitMovement = function () {
        var i = this, f = i.canvasWidth, v = i.canvasHeight, r = i.distanceX, u = i.distanceY, e = i.contentStartPos,
            o = e.left, y = e.top, s = e.width, p = e.height, h, c, l, a, n, t;
        return n = s > f ? o + r : o, t = y + u, h = Math.max(0, f * .5 - s * .5), c = Math.max(0, v * .5 - p * .5), l = Math.min(f - s, f * .5 - s * .5), a = Math.min(v - p, v * .5 - p * .5), r > 0 && n > h && (n = h - 1 + Math.pow(-h + o + r, .8) || 0), r < 0 && n < l && (n = l + 1 - Math.pow(l - o - r, .8) || 0), u > 0 && t > c && (t = c - 1 + Math.pow(-c + y + u, .8) || 0), u < 0 && t < a && (t = a + 1 - Math.pow(a - y - u, .8) || 0), {
            top: t,
            left: n
        }
    };
    r.prototype.limitPosition = function (n, t, i, r) {
        var e = this, u = e.canvasWidth, f = e.canvasHeight;
        return i > u ? (n = n > 0 ? 0 : n, n = n < u - i ? u - i : n) : n = Math.max(0, u / 2 - i / 2), r > f ? (t = t > 0 ? 0 : t, t = t < f - r ? f - r : t) : t = Math.max(0, f / 2 - r / 2), {
            top: t,
            left: n
        }
    };
    r.prototype.onZoom = function () {
        var t = this, r = t.contentStartPos, s = r.width, h = r.height, a = r.left, v = r.top,
            y = u(t.newPoints[0], t.newPoints[1]), e = y / t.startDistanceBetweenFingers, c = Math.floor(s * e),
            l = Math.floor(h * e), p = (s - c) * t.percentageOfImageAtPinchPointX,
            w = (h - l) * t.percentageOfImageAtPinchPointY,
            b = (t.newPoints[0].x + t.newPoints[1].x) / 2 - i(n).scrollLeft(),
            k = (t.newPoints[0].y + t.newPoints[1].y) / 2 - i(n).scrollTop(), d = b - t.centerPointStartX,
            g = k - t.centerPointStartY, nt = a + (p + d), tt = v + (w + g),
            it = {top: tt, left: nt, scaleX: e, scaleY: e};
        t.canTap = !1;
        t.newWidth = c;
        t.newHeight = l;
        t.contentLastPos = it;
        t.requestId && f(t.requestId);
        t.requestId = o(function () {
            i.fancybox.setTranslate(t.$content, t.contentLastPos)
        })
    };
    r.prototype.ontouchend = function (n) {
        var r = this, u = r.isSwiping, o = r.isPanning, s = r.isZooming, h = r.isScrolling;
        if (r.endPoints = e(n), r.dMs = Math.max((new Date).getTime() - r.startTime, 1), r.$container.removeClass("fancybox-is-grabbing"), i(t).off(".fb.touch"), t.removeEventListener("scroll", r.onscroll, !0), r.requestId && (f(r.requestId), r.requestId = null), r.isSwiping = !1, r.isPanning = !1, r.isZooming = !1, r.isScrolling = !1, r.instance.isDragging = !1, r.canTap) return r.onTap(n);
        r.speed = 100;
        r.velocityX = r.distanceX / r.dMs * .5;
        r.velocityY = r.distanceY / r.dMs * .5;
        o ? r.endPanning() : s ? r.endZooming() : r.endSwiping(u, h);
        return
    };
    r.prototype.endSwiping = function (n, t) {
        var r = this, u = !1, s = r.instance.group.length, f = Math.abs(r.distanceX),
            e = n == "x" && s > 1 && (r.dMs > 130 && f > 10 || f > 50), o = 300;
        r.sliderLastPos = null;
        n == "y" && !t && Math.abs(r.distanceY) > 50 ? (i.fancybox.animate(r.instance.current.$slide, {
            top: r.sliderStartPos.top + r.distanceY + r.velocityY * 150,
            opacity: 0
        }, 200), u = r.instance.close(!0, 250)) : e && r.distanceX > 0 ? u = r.instance.previous(o) : e && r.distanceX < 0 && (u = r.instance.next(o));
        u === !1 && (n == "x" || n == "y") && r.instance.centerSlide(200);
        r.$container.removeClass("fancybox-is-sliding")
    };
    r.prototype.endPanning = function () {
        var n = this, r, u, t;
        n.contentLastPos && (n.opts.momentum === !1 || n.dMs > 350 ? (r = n.contentLastPos.left, u = n.contentLastPos.top) : (r = n.contentLastPos.left + n.velocityX * 500, u = n.contentLastPos.top + n.velocityY * 500), t = n.limitPosition(r, u, n.contentStartPos.width, n.contentStartPos.height), t.width = n.contentStartPos.width, t.height = n.contentStartPos.height, i.fancybox.animate(n.$content, t, 366))
    };
    r.prototype.endZooming = function () {
        var n = this, e = n.instance.current, u, f, o, s, t = n.newWidth, r = n.newHeight;
        n.contentLastPos && (u = n.contentLastPos.left, f = n.contentLastPos.top, s = {
            top: f,
            left: u,
            width: t,
            height: r,
            scaleX: 1,
            scaleY: 1
        }, i.fancybox.setTranslate(n.$content, s), t < n.canvasWidth && r < n.canvasHeight ? n.instance.scaleToFit(150) : t > e.width || r > e.height ? n.instance.scaleToActual(n.centerPointStartX, n.centerPointStartY, 150) : (o = n.limitPosition(u, f, t, r), i.fancybox.animate(n.$content, o, 150)))
    };
    r.prototype.onTap = function (t) {
        var u = this, s = i(t.target), r = u.instance, o = r.current, h = t && e(t) || u.startPoints,
            c = h[0] ? h[0].x - i(n).scrollLeft() - u.stagePos.left : 0,
            l = h[0] ? h[0].y - i(n).scrollTop() - u.stagePos.top : 0, f, a = function (n) {
                var f = o.opts[n];
                if (i.isFunction(f) && (f = f.apply(r, [o, t])), f) switch (f) {
                    case"close":
                        r.close(u.startEvent);
                        break;
                    case"toggleControls":
                        r.toggleControls();
                        break;
                    case"next":
                        r.next();
                        break;
                    case"nextOrClose":
                        r.group.length > 1 ? r.next() : r.close(u.startEvent);
                        break;
                    case"zoom":
                        o.type == "image" && (o.isLoaded || o.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(c, l) : r.group.length < 2 && r.close(u.startEvent))
                }
            };
        if ((!t.originalEvent || t.originalEvent.button != 2) && (s.is("img") || !(c > s[0].clientWidth + s.offset().left))) {
            if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) f = "Outside"; else if (s.is(".fancybox-slide")) f = "Slide"; else if (r.current.$content && r.current.$content.find(s).addBack().filter(s).length) f = "Content"; else return;
            if (u.tapped) {
                if (clearTimeout(u.tapped), u.tapped = null, Math.abs(c - u.tapX) > 50 || Math.abs(l - u.tapY) > 50) return this;
                a("dblclick" + f)
            } else u.tapX = c, u.tapY = l, o.opts["dblclick" + f] && o.opts["dblclick" + f] !== o.opts["click" + f] ? u.tapped = setTimeout(function () {
                u.tapped = null;
                r.isAnimating || a("click" + f)
            }, 500) : a("click" + f);
            return this
        }
    };
    i(t).on("onActivate.fb", function (n, t) {
        t && !t.Guestures && (t.Guestures = new r(t))
    }).on("beforeClose.fb", function (n, t) {
        t && t.Guestures && t.Guestures.destroy()
    })
}(window, document, jQuery), function (n, t) {
    "use strict";
    t.extend(!0, t.fancybox.defaults, {
        btnTpl: {slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/><\/svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/><\/svg><\/button>'},
        slideShow: {autoStart: !1, speed: 3e3, progress: !0}
    });
    var i = function (n) {
        this.instance = n;
        this.init()
    };
    t.extend(i.prototype, {
        timer: null, isActive: !1, $button: null, init: function () {
            var n = this, i = n.instance, r = i.group[i.currIndex].opts.slideShow;
            n.$button = i.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
                n.toggle()
            });
            i.group.length < 2 || !r ? n.$button.hide() : r.progress && (n.$progress = t('<div class="fancybox-progress"><\/div>').appendTo(i.$refs.inner))
        }, set: function (n) {
            var r = this, i = r.instance, u = i.current;
            u && (n === !0 || u.opts.loop || i.currIndex < i.group.length - 1) ? r.isActive && u.contentType !== "video" && (r.$progress && t.fancybox.animate(r.$progress.show(), {scaleX: 1}, u.opts.slideShow.speed), r.timer = setTimeout(function () {
                i.current.opts.loop || i.current.index != i.group.length - 1 ? i.next() : i.jumpTo(0)
            }, u.opts.slideShow.speed)) : (r.stop(), i.idleSecondsCounter = 0, i.showControls())
        }, clear: function () {
            var n = this;
            clearTimeout(n.timer);
            n.timer = null;
            n.$progress && n.$progress.removeAttr("style").hide()
        }, start: function () {
            var n = this, t = n.instance.current;
            t && (n.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), n.isActive = !0, t.isComplete && n.set(!0), n.instance.trigger("onSlideShowChange", !0))
        }, stop: function () {
            var n = this, t = n.instance.current;
            n.clear();
            n.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play");
            n.isActive = !1;
            n.instance.trigger("onSlideShowChange", !1);
            n.$progress && n.$progress.removeAttr("style").hide()
        }, toggle: function () {
            var n = this;
            n.isActive ? n.stop() : n.start()
        }
    });
    t(n).on({
        "onInit.fb": function (n, t) {
            t && !t.SlideShow && (t.SlideShow = new i(t))
        }, "beforeShow.fb": function (n, t, i, r) {
            var u = t && t.SlideShow;
            r ? u && i.opts.slideShow.autoStart && u.start() : u && u.isActive && u.clear()
        }, "afterShow.fb": function (n, t) {
            var i = t && t.SlideShow;
            i && i.isActive && i.set()
        }, "afterKeydown.fb": function (i, r, u, f, e) {
            var o = r && r.SlideShow;
            o && u.opts.slideShow && (e === 80 || e === 32) && !t(n.activeElement).is("button,a,input") && (f.preventDefault(), o.toggle())
        }, "beforeClose.fb onDeactivate.fb": function (n, t) {
            var i = t && t.SlideShow;
            i && i.stop()
        }
    });
    t(n).on("visibilitychange", function () {
        var r = t.fancybox.getInstance(), i = r && r.SlideShow;
        i && i.isActive && (n.hidden ? i.clear() : i.set())
    })
}(document, jQuery), function (n, t) {
    "use strict";
    var i = function () {
        for (var t, i, r = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], f = {}, u = 0; u < r.length; u++) if (t = r[u], t && t[1] in n) {
            for (i = 0; i < t.length; i++) f[r[0][i]] = t[i];
            return f
        }
        return !1
    }(), r;
    if (i) {
        r = {
            request: function (t) {
                t = t || n.documentElement;
                t[i.requestFullscreen](t.ALLOW_KEYBOARD_INPUT)
            }, exit: function () {
                n[i.exitFullscreen]()
            }, toggle: function (t) {
                t = t || n.documentElement;
                this.isFullscreen() ? this.exit() : this.request(t)
            }, isFullscreen: function () {
                return Boolean(n[i.fullscreenElement])
            }, enabled: function () {
                return Boolean(n[i.fullscreenEnabled])
            }
        };
        t.extend(!0, t.fancybox.defaults, {
            btnTpl: {fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/><\/svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/><\/svg><\/button>'},
            fullScreen: {autoStart: !1}
        });
        t(n).on(i.fullscreenchange, function () {
            var i = r.isFullscreen(), n = t.fancybox.getInstance();
            n && (n.current && n.current.type === "image" && n.isAnimating && (n.isAnimating = !1, n.update(!0, !0, 0), n.isComplete || n.complete()), n.trigger("onFullscreenChange", i), n.$refs.container.toggleClass("fancybox-is-fullscreen", i), n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !i).toggleClass("fancybox-button--fsexit", i))
        })
    }
    t(n).on({
        "onInit.fb": function (n, t) {
            var u;
            if (!i) {
                t.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
                return
            }
            if (t && t.group[t.currIndex].opts.fullScreen) {
                u = t.$refs.container;
                u.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (n) {
                    n.stopPropagation();
                    n.preventDefault();
                    r.toggle()
                });
                t.opts.fullScreen && t.opts.fullScreen.autoStart === !0 && r.request();
                t.FullScreen = r
            } else t && t.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
        }, "afterKeydown.fb": function (n, t, i, r, u) {
            t && t.FullScreen && u === 70 && (r.preventDefault(), t.FullScreen.toggle())
        }, "beforeClose.fb": function (n, t) {
            t && t.FullScreen && t.$refs.container.hasClass("fancybox-is-fullscreen") && r.exit()
        }
    })
}(document, jQuery), function (n, t) {
    "use strict";
    var i = "fancybox-thumbs", u = i + "-active", r;
    t.fancybox.defaults = t.extend(!0, {
        btnTpl: {thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/><\/svg><\/button>'},
        thumbs: {autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y"}
    }, t.fancybox.defaults);
    r = function (n) {
        this.init(n)
    };
    t.extend(r.prototype, {
        $button: null, $grid: null, $list: null, isVisible: !1, isActive: !1, init: function (n) {
            var t = this, r = n.group, u = 0, i, f;
            for (t.instance = n, t.opts = r[n.currIndex].opts.thumbs, n.Thumbs = t, t.$button = n.$refs.toolbar.find("[data-fancybox-thumbs]"), i = 0, f = r.length; i < f; i++) if (r[i].thumb && u++, u > 1) break;
            if (u > 1 && !!t.opts) {
                t.$button.removeAttr("style").on("click", function () {
                    t.toggle()
                });
                t.isActive = !0
            } else t.$button.hide()
        }, create: function () {
            var n = this, u = n.instance, f = n.opts.parentEl, e = [], r;
            if (!n.$grid) {
                n.$grid = t('<div class="' + i + " " + i + "-" + n.opts.axis + '"><\/div>').appendTo(u.$refs.container.find(f).addBack().filter(f));
                n.$grid.on("click", "a", function () {
                    u.jumpTo(t(this).attr("data-index"))
                })
            }
            n.$list || (n.$list = t('<div class="' + i + '__list">').appendTo(n.$grid));
            t.each(u.group, function (n, t) {
                r = t.thumb;
                r || t.type !== "image" || (r = t.src);
                e.push('<a href="javascript:;" tabindex="0" data-index="' + n + '"' + (r && r.length ? ' style="background-image:url(' + r + ')"' : 'class="fancybox-thumbs-missing"') + "><\/a>")
            });
            n.$list[0].innerHTML = e.join("");
            n.opts.axis === "x" && n.$list.width(parseInt(n.$grid.css("padding-right"), 10) + u.group.length * n.$list.children().eq(0).outerWidth(!0))
        }, focus: function (n) {
            var i = this, r = i.$list, e = i.$grid, f, t;
            i.instance.current && (f = r.children().removeClass(u).filter('[data-index="' + i.instance.current.index + '"]').addClass(u), t = f.position(), i.opts.axis === "y" && (t.top < 0 || t.top > r.height() - f.outerHeight()) ? r.stop().animate({scrollTop: r.scrollTop() + t.top}, n) : i.opts.axis === "x" && (t.left < e.scrollLeft() || t.left > e.scrollLeft() + (e.width() - f.outerWidth())) && r.parent().stop().animate({scrollLeft: t.left}, n))
        }, update: function () {
            var n = this;
            n.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible);
            n.isVisible ? (n.$grid || n.create(), n.instance.trigger("onThumbsShow"), n.focus(0)) : n.$grid && n.instance.trigger("onThumbsHide");
            n.instance.update()
        }, hide: function () {
            this.isVisible = !1;
            this.update()
        }, show: function () {
            this.isVisible = !0;
            this.update()
        }, toggle: function () {
            this.isVisible = !this.isVisible;
            this.update()
        }
    });
    t(n).on({
        "onInit.fb": function (n, t) {
            var i;
            t && !t.Thumbs && (i = new r(t), i.isActive && i.opts.autoStart === !0 && i.show())
        }, "beforeShow.fb": function (n, t, i, r) {
            var u = t && t.Thumbs;
            u && u.isVisible && u.focus(r ? 0 : 250)
        }, "afterKeydown.fb": function (n, t, i, r, u) {
            var f = t && t.Thumbs;
            f && f.isActive && u === 71 && (r.preventDefault(), f.toggle())
        }, "beforeClose.fb": function (n, t) {
            var i = t && t.Thumbs;
            i && i.isVisible && i.opts.hideOnClose !== !1 && i.$grid.hide()
        }
    })
}(document, jQuery), function (n, t) {
    "use strict";

    function i(n) {
        var t = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        };
        return String(n).replace(/[&<>"'`=\/]/g, function (n) {
            return t[n]
        })
    }

    t.extend(!0, t.fancybox.defaults, {
        btnTpl: {share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/><\/svg><\/button>'},
        share: {
            url: function (n, t) {
                return (!n.currentHash && !(t.type === "inline" || t.type === "html") ? t.origSrc || t.src : !1) || window.location
            },
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}<\/h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /><\/svg><span>Facebook<\/span><\/a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /><\/svg><span>Twitter<\/span><\/a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/><\/svg><span>Pinterest<\/span><\/a><\/p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /><\/p><\/div>'
        }
    });
    t(n).on("click", "[data-fancybox-share]", function () {
        var r = t.fancybox.getInstance(), n = r.current || null, u, f;
        n && (t.type(n.opts.share.url) === "function" && (u = n.opts.share.url.apply(n, [r, n])), f = n.opts.share.tpl.replace(/\{\{media\}\}/g, n.type === "image" ? encodeURIComponent(n.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(u)).replace(/\{\{url_raw\}\}/g, i(u)).replace(/\{\{descr\}\}/g, r.$caption ? encodeURIComponent(r.$caption.text()) : ""), t.fancybox.open({
            src: r.translate(r, f),
            type: "html",
            opts: {
                touch: !1, animationEffect: !1, afterLoad: function (n, t) {
                    r.$refs.container.one("beforeClose.fb", function () {
                        n.close(null, 0)
                    });
                    t.$content.find(".fancybox-share__button").click(function () {
                        return window.open(this.href, "Share", "width=550, height=450"), !1
                    })
                }, mobile: {autoFocus: !1}
            }
        }))
    })
}(document, jQuery), function (n, t, i) {
    "use strict";

    function r() {
        var i = n.location.hash.substr(1), t = i.split("-"),
            r = t.length > 1 && /^\+?\d+$/.test(t[t.length - 1]) ? parseInt(t.pop(-1), 10) || 1 : 1, u = t.join("-");
        return {hash: i, index: r < 1 ? 1 : r, gallery: u}
    }

    function u(n) {
        n.gallery !== "" && i("[data-fancybox='" + i.escapeSelector(n.gallery) + "']").eq(n.index - 1).focus().trigger("click.fb-start")
    }

    function f(n) {
        var t, i;
        return n ? (t = n.current ? n.current.opts : n.opts, i = t.hash || (t.$orig ? t.$orig.data("fancybox") || t.$orig.data("fancybox-trigger") : ""), i === "" ? !1 : i) : !1
    }

    i.escapeSelector || (i.escapeSelector = function (n) {
        var t = function (n, t) {
            return t ? n === "\0" ? "�" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n
        };
        return (n + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, t)
    });
    i(function () {
        if (i.fancybox.defaults.hash !== !1) {
            i(t).on({
                "onInit.fb": function (n, t) {
                    var i, u;
                    t.group[t.currIndex].opts.hash !== !1 && (i = r(), u = f(t), u && i.gallery && u == i.gallery && (t.currIndex = i.index - 1))
                }, "beforeShow.fb": function (i, r, u, e) {
                    var o;
                    u && u.opts.hash !== !1 && (o = f(r), o) && (r.currentHash = o + (r.group.length > 1 ? "-" + (u.index + 1) : ""), n.location.hash !== "#" + r.currentHash) && (e && !r.origHash && (r.origHash = n.location.hash), r.hashTimer && clearTimeout(r.hashTimer), r.hashTimer = setTimeout(function () {
                        "replaceState" in n.history ? (n.history[e ? "pushState" : "replaceState"]({}, t.title, n.location.pathname + n.location.search + "#" + r.currentHash), e && (r.hasCreatedHistory = !0)) : n.location.hash = r.currentHash;
                        r.hashTimer = null
                    }, 300))
                }, "beforeClose.fb": function (i, r, u) {
                    u && u.opts.hash !== !1 && (clearTimeout(r.hashTimer), r.currentHash && r.hasCreatedHistory ? n.history.back() : r.currentHash && ("replaceState" in n.history ? n.history.replaceState({}, t.title, n.location.pathname + n.location.search + (r.origHash || "")) : n.location.hash = r.origHash), r.currentHash = null)
                }
            });
            i(n).on("hashchange.fb", function () {
                var n = r(), t = null;
                i.each(i(".fancybox-container").get().reverse(), function (n, r) {
                    var u = i(r).data("FancyBox");
                    if (u && u.currentHash) return t = u, !1
                });
                t ? t.currentHash === n.gallery + "-" + n.index || n.index === 1 && t.currentHash == n.gallery || (t.currentHash = null, t.close()) : n.gallery !== "" && u(n)
            });
            setTimeout(function () {
                i.fancybox.getInstance() || u(r())
            }, 50)
        }
    })
}(window, document, jQuery), function (n, t) {
    "use strict";
    var i = (new Date).getTime();
    t(n).on({
        "onInit.fb": function (n, t) {
            t.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (n) {
                var r = t.current, u = (new Date).getTime();
                t.group.length < 2 || r.opts.wheel === !1 || r.opts.wheel === "auto" && r.type !== "image" || (n.preventDefault(), n.stopPropagation(), r.$slide.hasClass("fancybox-animated")) || (n = n.originalEvent || n, u - i < 250) || (i = u, t[(-n.deltaY || -n.deltaX || n.wheelDelta || -n.detail) < 0 ? "next" : "previous"]())
            })
        }
    })
}(document, jQuery);
!function (n, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : n.AOS = t()
}(this, function () {
    return function (n) {
        function t(r) {
            if (i[r]) return i[r].exports;
            var u = i[r] = {exports: {}, id: r, loaded: !1};
            return n[r].call(u.exports, u, u.exports, t), u.loaded = !0, u.exports
        }

        var i = {};
        return t.m = n, t.c = i, t.p = "dist/", t(0)
    }([function (n, t, i) {
        "use strict";

        function f(n) {
            return n && n.__esModule ? n : {"default": n}
        }

        var v = Object.assign || function (n) {
                for (var i, r, t = 1; t < arguments.length; t++) {
                    i = arguments[t];
                    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r])
                }
                return n
            }, y = i(1), p = (f(y), i(6)), w = f(p), b = i(7), s = f(b), k = i(8), d = f(k), g = i(9), o = f(g), nt = i(10),
            h = f(nt), tt = i(11), it = f(tt), rt = i(14), c = f(rt), u = [], l = !1, ut = document.all && !window.atob,
            r = {
                offset: 0,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1
            }, e = function () {
                var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (n && (l = !0), l) return u = it.default(u, r), h.default(u, r.once), u
            }, a = function () {
                u = c.default();
                e()
            }, ft = function () {
                u.forEach(function (n) {
                    n.node.removeAttribute("data-aos");
                    n.node.removeAttribute("data-aos-easing");
                    n.node.removeAttribute("data-aos-duration");
                    n.node.removeAttribute("data-aos-delay")
                })
            }, et = function (n) {
                return n === !0 || "mobile" === n && o.default.mobile() || "phone" === n && o.default.phone() || "tablet" === n && o.default.tablet() || "function" == typeof n && n() === !0
            }, ot = function (n) {
                return r = v(r, n), u = c.default(), et(r.disable) || ut ? ft() : (document.querySelector("body").setAttribute("data-aos-easing", r.easing), document.querySelector("body").setAttribute("data-aos-duration", r.duration), document.querySelector("body").setAttribute("data-aos-delay", r.delay), "DOMContentLoaded" === r.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? e(!0) : "load" === r.startEvent ? window.addEventListener(r.startEvent, function () {
                    e(!0)
                }) : document.addEventListener(r.startEvent, function () {
                    e(!0)
                }), window.addEventListener("resize", s.default(e, r.debounceDelay, !0)), window.addEventListener("orientationchange", s.default(e, r.debounceDelay, !0)), window.addEventListener("scroll", w.default(function () {
                    h.default(u, r.once)
                }, r.throttleDelay)), r.disableMutationObserver || d.default("[data-aos]", a), u)
            };
        n.exports = {init: ot, refresh: e, refreshHard: a}
    }, function () {
    }, , , , , function (n, t) {
        (function (t) {
            "use strict";

            function s(n, t, i) {
                function w(t) {
                    var i = h, r = c;
                    return h = c = void 0, a = t, l = n.apply(r, i)
                }

                function tt(n) {
                    return a = n, o = setTimeout(y, t), nt ? w(n) : l
                }

                function ut(n) {
                    var r = n - s, u = n - a, i = t - r;
                    return v ? rt(i, p - u) : i
                }

                function d(n) {
                    var i = n - s, r = n - a;
                    return void 0 === s || i >= t || i < 0 || v && r >= p
                }

                function y() {
                    var n = u();
                    return d(n) ? g(n) : void (o = setTimeout(y, ut(n)))
                }

                function g(n) {
                    return o = void 0, k && h ? w(n) : (h = c = void 0, l)
                }

                function ft() {
                    void 0 !== o && clearTimeout(o);
                    a = 0;
                    h = s = c = o = void 0
                }

                function et() {
                    return void 0 === o ? l : g(u())
                }

                function b() {
                    var n = u(), i = d(n);
                    if (h = arguments, c = this, s = n, i) {
                        if (void 0 === o) return tt(s);
                        if (v) return o = setTimeout(y, t), w(s)
                    }
                    return void 0 === o && (o = setTimeout(y, t)), l
                }

                var h, c, p, l, o, s, a = 0, nt = !1, v = !1, k = !0;
                if ("function" != typeof n) throw new TypeError(e);
                return t = f(t) || 0, r(i) && (nt = !!i.leading, v = "maxWait" in i, p = v ? it(f(i.maxWait) || 0, t) : p, k = "trailing" in i ? !!i.trailing : k), b.cancel = ft, b.flush = et, b
            }

            function h(n, t, i) {
                var u = !0, f = !0;
                if ("function" != typeof n) throw new TypeError(e);
                return r(i) && (u = "leading" in i ? !!i.leading : u, f = "trailing" in i ? !!i.trailing : f), s(n, t, {
                    leading: u,
                    maxWait: t,
                    trailing: f
                })
            }

            function r(n) {
                var t = "undefined" == typeof n ? "undefined" : i(n);
                return !!n && ("object" == t || "function" == t)
            }

            function c(n) {
                return !!n && "object" == ("undefined" == typeof n ? "undefined" : i(n))
            }

            function l(n) {
                return "symbol" == ("undefined" == typeof n ? "undefined" : i(n)) || c(n) && tt.call(n) == a
            }

            function f(n) {
                var t, i;
                return "number" == typeof n ? n : l(n) ? o : (r(n) && (t = "function" == typeof n.valueOf ? n.valueOf() : n, n = r(t) ? t + "" : t), "string" != typeof n) ? 0 === n ? n : +n : (n = n.replace(v, ""), i = p.test(n), i || w.test(n) ? b(n.slice(2), i ? 2 : 8) : y.test(n) ? o : +n)
            }

            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                    return typeof n
                } : function (n) {
                    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
                }, e = "Expected a function", o = NaN, a = "[object Symbol]", v = /^\s+|\s+$/g, y = /^[-+]0x[0-9a-f]+$/i,
                p = /^0b[01]+$/i, w = /^0o[0-7]+$/i, b = parseInt,
                k = "object" == ("undefined" == typeof t ? "undefined" : i(t)) && t && t.Object === Object && t,
                d = "object" == ("undefined" == typeof self ? "undefined" : i(self)) && self && self.Object === Object && self,
                g = k || d || Function("return this")(), nt = Object.prototype, tt = nt.toString, it = Math.max,
                rt = Math.min, u = function () {
                    return g.Date.now()
                };
            n.exports = h
        }).call(t, function () {
            return this
        }())
    }, function (n, t) {
        (function (t) {
            "use strict";

            function o(n, t, i) {
                function w(t) {
                    var i = s, r = h;
                    return s = h = void 0, a = t, l = n.apply(r, i)
                }

                function rt(n) {
                    return a = n, e = setTimeout(y, t), nt ? w(n) : l
                }

                function ut(n) {
                    var r = n - o, u = n - a, i = t - r;
                    return v ? it(i, p - u) : i
                }

                function d(n) {
                    var i = n - o, r = n - a;
                    return void 0 === o || i >= t || i < 0 || v && r >= p
                }

                function y() {
                    var n = u();
                    return d(n) ? g(n) : void (e = setTimeout(y, ut(n)))
                }

                function g(n) {
                    return e = void 0, k && s ? w(n) : (s = h = void 0, l)
                }

                function ft() {
                    void 0 !== e && clearTimeout(e);
                    a = 0;
                    s = o = h = e = void 0
                }

                function et() {
                    return void 0 === e ? l : g(u())
                }

                function b() {
                    var n = u(), i = d(n);
                    if (s = arguments, h = this, o = n, i) {
                        if (void 0 === e) return rt(o);
                        if (v) return e = setTimeout(y, t), w(o)
                    }
                    return void 0 === e && (e = setTimeout(y, t)), l
                }

                var s, h, p, l, e, o, a = 0, nt = !1, v = !1, k = !0;
                if ("function" != typeof n) throw new TypeError(c);
                return t = f(t) || 0, r(i) && (nt = !!i.leading, v = "maxWait" in i, p = v ? tt(f(i.maxWait) || 0, t) : p, k = "trailing" in i ? !!i.trailing : k), b.cancel = ft, b.flush = et, b
            }

            function r(n) {
                var t = "undefined" == typeof n ? "undefined" : i(n);
                return !!n && ("object" == t || "function" == t)
            }

            function s(n) {
                return !!n && "object" == ("undefined" == typeof n ? "undefined" : i(n))
            }

            function h(n) {
                return "symbol" == ("undefined" == typeof n ? "undefined" : i(n)) || s(n) && nt.call(n) == l
            }

            function f(n) {
                var t, i;
                return "number" == typeof n ? n : h(n) ? e : (r(n) && (t = "function" == typeof n.valueOf ? n.valueOf() : n, n = r(t) ? t + "" : t), "string" != typeof n) ? 0 === n ? n : +n : (n = n.replace(a, ""), i = y.test(n), i || p.test(n) ? w(n.slice(2), i ? 2 : 8) : v.test(n) ? e : +n)
            }

            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                    return typeof n
                } : function (n) {
                    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
                }, c = "Expected a function", e = NaN, l = "[object Symbol]", a = /^\s+|\s+$/g, v = /^[-+]0x[0-9a-f]+$/i,
                y = /^0b[01]+$/i, p = /^0o[0-7]+$/i, w = parseInt,
                b = "object" == ("undefined" == typeof t ? "undefined" : i(t)) && t && t.Object === Object && t,
                k = "object" == ("undefined" == typeof self ? "undefined" : i(self)) && self && self.Object === Object && self,
                d = b || k || Function("return this")(), g = Object.prototype, nt = g.toString, tt = Math.max,
                it = Math.min, u = function () {
                    return d.Date.now()
                };
            n.exports = o
        }).call(t, function () {
            return this
        }())
    }, function (n, t) {
        "use strict";

        function r(n, t) {
            var r = new e(u);
            i = t;
            r.observe(f.documentElement, {childList: !0, subtree: !0, removedNodes: !0})
        }

        function u(n) {
            n && n.forEach(function (n) {
                var t = Array.prototype.slice.call(n.addedNodes), r = Array.prototype.slice.call(n.removedNodes),
                    u = t.concat(r).filter(function (n) {
                        return n.hasAttribute && n.hasAttribute("data-aos")
                    }).length;
                u && i()
            })
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var f = window.document,
            e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
            i = function () {
            };
        t.default = r
    }, function (n, t) {
        "use strict";

        function r(n, t) {
            if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
        }

        function i() {
            return navigator.userAgent || navigator.vendor || window.opera || ""
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var u = function () {
                function n(n, t) {
                    for (var i, r = 0; r < t.length; r++) i = t[r], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
                }

                return function (t, i, r) {
                    return i && n(t.prototype, i), r && n(t, r), t
                }
            }(),
            f = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            e = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            o = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
            s = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            h = function () {
                function n() {
                    r(this, n)
                }

                return u(n, [{
                    key: "phone", value: function () {
                        var n = i();
                        return !(!f.test(n) && !e.test(n.substr(0, 4)))
                    }
                }, {
                    key: "mobile", value: function () {
                        var n = i();
                        return !(!o.test(n) && !s.test(n.substr(0, 4)))
                    }
                }, {
                    key: "tablet", value: function () {
                        return this.mobile() && !this.phone()
                    }
                }]), n
            }();
        t.default = new h
    }, function (n, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = function (n, t, i) {
            var r = n.node.getAttribute("data-aos-once");
            t > n.position ? n.node.classList.add("aos-animate") : "undefined" != typeof r && ("false" === r || !i && "true" !== r) && n.node.classList.remove("aos-animate")
        }, r = function (n, t) {
            var r = window.pageYOffset, u = window.innerHeight;
            n.forEach(function (n) {
                i(n, u + r, t)
            })
        };
        t.default = r
    }, function (n, t, i) {
        "use strict";

        function r(n) {
            return n && n.__esModule ? n : {"default": n}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var u = i(12), f = r(u), e = function (n, t) {
            return n.forEach(function (n) {
                n.node.classList.add("aos-init");
                n.position = f.default(n.node, t.offset)
            }), n
        };
        t.default = e
    }, function (n, t, i) {
        "use strict";

        function r(n) {
            return n && n.__esModule ? n : {"default": n}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var u = i(13), f = r(u), e = function (n, t) {
            var i = 0, e = 0, u = window.innerHeight, r = {
                offset: n.getAttribute("data-aos-offset"),
                anchor: n.getAttribute("data-aos-anchor"),
                anchorPlacement: n.getAttribute("data-aos-anchor-placement")
            };
            switch (r.offset && !isNaN(r.offset) && (e = parseInt(r.offset)), r.anchor && document.querySelectorAll(r.anchor) && (n = document.querySelectorAll(r.anchor)[0]), i = f.default(n).top, r.anchorPlacement) {
                case"center-bottom":
                    i += n.offsetHeight / 2;
                    break;
                case"bottom-bottom":
                    i += n.offsetHeight;
                    break;
                case"top-center":
                    i += u / 2;
                    break;
                case"bottom-center":
                    i += u / 2 + n.offsetHeight;
                    break;
                case"center-center":
                    i += u / 2 + n.offsetHeight / 2;
                    break;
                case"top-top":
                    i += u;
                    break;
                case"bottom-top":
                    i += n.offsetHeight + u;
                    break;
                case"center-top":
                    i += n.offsetHeight / 2 + u
            }
            return r.anchorPlacement || r.offset || isNaN(t) || (e = t), i + e
        };
        t.default = e
    }, function (n, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = function (n) {
            for (var t = 0, i = 0; n && !isNaN(n.offsetLeft) && !isNaN(n.offsetTop);) t += n.offsetLeft - ("BODY" != n.tagName ? n.scrollLeft : 0), i += n.offsetTop - ("BODY" != n.tagName ? n.scrollTop : 0), n = n.offsetParent;
            return {top: i, left: t}
        };
        t.default = i
    }, function (n, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = function (n) {
            return n = n || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(n, function (n) {
                return {node: n}
            })
        };
        t.default = i
    }])
});
typeof Object.create != "function" && (Object.create = function (n) {
    function t() {
    }

    return t.prototype = n, new t
}), function (n, t) {
    "use strict";
    var i = {
        _positionClasses: ["bottom-left", "bottom-right", "top-right", "top-left", "bottom-center", "top-center", "mid-center"],
        _defaultIcons: ["success", "error", "info", "warning"],
        init: function (t) {
            this.prepareOptions(t, n.toast.options);
            this.process()
        },
        prepareOptions: function (t, i) {
            var r = {};
            typeof t == "string" || t instanceof Array ? r.text = t : r = t;
            this.options = n.extend({}, i, r)
        },
        process: function () {
            this.setup();
            this.addToDom();
            this.position();
            this.bindToast();
            this.animate()
        },
        setup: function () {
            var t = "", i;
            if (this._toastEl = this._toastEl || n("<div><\/div>", {"class": "jq-toast-single"}), t += '<span class="jq-toast-loader"><\/span>', this.options.allowToastClose && (t += '<span class="close-jq-toast-single">&times;<\/span>'), this.options.text instanceof Array) {
                for (this.options.heading && (t += '<h2 class="jq-toast-heading">' + this.options.heading + "<\/h2>"), t += '<ul class="jq-toast-ul">', i = 0; i < this.options.text.length; i++) t += '<li class="jq-toast-li" id="jq-toast-item-' + i + '">' + this.options.text[i] + "<\/li>";
                t += "<\/ul>"
            } else this.options.heading && (t += '<h2 class="jq-toast-heading">' + this.options.heading + "<\/h2>"), t += this.options.text;
            this._toastEl.html(t);
            this.options.bgColor !== !1 && this._toastEl.css("background-color", this.options.bgColor);
            this.options.textColor !== !1 && this._toastEl.css("color", this.options.textColor);
            this.options.textAlign && this._toastEl.css("text-align", this.options.textAlign);
            this.options.icon !== !1 && (this._toastEl.addClass("jq-has-icon"), n.inArray(this.options.icon, this._defaultIcons) !== -1 && this._toastEl.addClass("jq-icon-" + this.options.icon));
            this.options.class !== !1 && this._toastEl.addClass(this.options.class)
        },
        position: function () {
            typeof this.options.position == "string" && n.inArray(this.options.position, this._positionClasses) !== -1 ? this.options.position === "bottom-center" ? this._container.css({
                left: n(t).outerWidth() / 2 - this._container.outerWidth() / 2,
                bottom: 20
            }) : this.options.position === "top-center" ? this._container.css({
                left: n(t).outerWidth() / 2 - this._container.outerWidth() / 2,
                top: 20
            }) : this.options.position === "mid-center" ? this._container.css({
                left: n(t).outerWidth() / 2 - this._container.outerWidth() / 2,
                top: n(t).outerHeight() / 2 - this._container.outerHeight() / 2
            }) : this._container.addClass(this.options.position) : typeof this.options.position == "object" ? this._container.css({
                top: this.options.position.top ? this.options.position.top : "auto",
                bottom: this.options.position.bottom ? this.options.position.bottom : "auto",
                left: this.options.position.left ? this.options.position.left : "auto",
                right: this.options.position.right ? this.options.position.right : "auto"
            }) : this._container.addClass("bottom-left")
        },
        bindToast: function () {
            var n = this;
            this._toastEl.on("afterShown", function () {
                n.processLoader()
            });
            this._toastEl.find(".close-jq-toast-single").on("click", function (t) {
                t.preventDefault();
                n.options.showHideTransition === "fade" ? (n._toastEl.trigger("beforeHide"), n._toastEl.fadeOut(function () {
                    n._toastEl.trigger("afterHidden")
                })) : n.options.showHideTransition === "slide" ? (n._toastEl.trigger("beforeHide"), n._toastEl.slideUp(function () {
                    n._toastEl.trigger("afterHidden")
                })) : (n._toastEl.trigger("beforeHide"), n._toastEl.hide(function () {
                    n._toastEl.trigger("afterHidden")
                }))
            });
            if (typeof this.options.beforeShow == "function") this._toastEl.on("beforeShow", function () {
                n.options.beforeShow()
            });
            if (typeof this.options.afterShown == "function") this._toastEl.on("afterShown", function () {
                n.options.afterShown()
            });
            if (typeof this.options.beforeHide == "function") this._toastEl.on("beforeHide", function () {
                n.options.beforeHide()
            });
            if (typeof this.options.afterHidden == "function") this._toastEl.on("afterHidden", function () {
                n.options.afterHidden()
            })
        },
        addToDom: function () {
            var t = n(".jq-toast-wrap"), r, i;
            t.length === 0 ? (t = n("<div><\/div>", {
                "class": "jq-toast-wrap",
                role: "alert",
                "aria-live": "polite"
            }), n("body").append(t)) : (!this.options.stack || isNaN(parseInt(this.options.stack, 10))) && t.empty();
            t.find(".jq-toast-single:hidden").remove();
            t.append(this._toastEl);
            this.options.stack && !isNaN(parseInt(this.options.stack), 10) && (r = t.find(".jq-toast-single").length, i = r - this.options.stack, i > 0 && n(".jq-toast-wrap").find(".jq-toast-single").slice(0, i).remove());
            this._container = t
        },
        canAutoHide: function () {
            return this.options.hideAfter !== !1 && !isNaN(parseInt(this.options.hideAfter, 10))
        },
        processLoader: function () {
            if (!this.canAutoHide() || this.options.loader === !1) return !1;
            var i = this._toastEl.find(".jq-toast-loader"), t = (this.options.hideAfter - 400) / 1e3 + "s",
                r = this.options.loaderBg, n = i.attr("style") || "";
            n = n.substring(0, n.indexOf("-webkit-transition"));
            n += "-webkit-transition: width " + t + " ease-in;                       -o-transition: width " + t + " ease-in;                       transition: width " + t + " ease-in;                       background-color: " + r + ";";
            i.attr("style", n).addClass("jq-toast-loaded")
        },
        animate: function () {
            var n = this;
            this._toastEl.hide();
            this._toastEl.trigger("beforeShow");
            this.options.showHideTransition.toLowerCase() === "fade" ? this._toastEl.fadeIn(function () {
                n._toastEl.trigger("afterShown")
            }) : this.options.showHideTransition.toLowerCase() === "slide" ? this._toastEl.slideDown(function () {
                n._toastEl.trigger("afterShown")
            }) : this._toastEl.show(function () {
                n._toastEl.trigger("afterShown")
            });
            this.canAutoHide() && (n = this, t.setTimeout(function () {
                n.options.showHideTransition.toLowerCase() === "fade" ? (n._toastEl.trigger("beforeHide"), n._toastEl.fadeOut(function () {
                    n._toastEl.trigger("afterHidden")
                })) : n.options.showHideTransition.toLowerCase() === "slide" ? (n._toastEl.trigger("beforeHide"), n._toastEl.slideUp(function () {
                    n._toastEl.trigger("afterHidden")
                })) : (n._toastEl.trigger("beforeHide"), n._toastEl.hide(function () {
                    n._toastEl.trigger("afterHidden")
                }))
            }, this.options.hideAfter))
        },
        reset: function (t) {
            t === "all" ? n(".jq-toast-wrap").remove() : this._toastEl.remove()
        },
        update: function (n) {
            this.prepareOptions(n, this.options);
            this.setup();
            this.bindToast()
        }
    };
    n.toast = function (n) {
        var t = Object.create(i);
        return t.init(n, this), {
            reset: function (n) {
                t.reset(n)
            }, update: function (n) {
                t.update(n)
            }
        }
    };
    n.toast.options = {
        text: "",
        heading: "",
        showHideTransition: "fade",
        allowToastClose: !0,
        hideAfter: 3e3,
        loader: !0,
        loaderBg: "#9EC600",
        stack: 5,
        position: "bottom-left",
        bgColor: !1,
        textColor: !1,
        textAlign: "left",
        icon: !1,
        beforeShow: function () {
        },
        afterShown: function () {
        },
        beforeHide: function () {
        },
        afterHidden: function () {
        }
    }
}(jQuery, window, document), function (n, t) {
    var i = t(n, n.document, Date);
    n.lazySizes = i;
    typeof module == "object" && module.exports && (module.exports = i)
}(typeof window != "undefined" ? window : {}, function (n, t, i) {
    "use strict";
    var e, r;
    if (function () {
        var t, i = {
            lazyClass: "lazyload",
            loadedClass: "lazyloaded",
            loadingClass: "lazyloading",
            preloadClass: "lazypreload",
            errorClass: "lazyerror",
            autosizesClass: "lazyautosizes",
            fastLoadedClass: "ls-is-cached",
            iframeLoadMode: 0,
            srcAttr: "data-src",
            srcsetAttr: "data-srcset",
            sizesAttr: "data-sizes",
            minSize: 40,
            customMedia: {},
            init: !0,
            expFactor: 1.5,
            hFac: .8,
            loadMode: 2,
            loadHidden: !0,
            ricTimeout: 0,
            throttleDelay: 125
        };
        r = n.lazySizesConfig || n.lazysizesConfig || {};
        for (t in i) t in r || (r[t] = i[t])
    }(), !t || !t.getElementsByClassName) return {
        init: function () {
        }, cfg: r, noSupport: !0
    };
    var s = t.documentElement, ot = n.HTMLPictureElement, h = "addEventListener", u = "getAttribute", o = n[h].bind(n),
        f = n.setTimeout, it = n.requestAnimationFrame || f, k = n.requestIdleCallback, rt = /^picture$/i,
        st = ["load", "error", "lazyincluded", "_lazyloaded"], p = {}, ht = Array.prototype.forEach,
        c = function (n, t) {
            return p[t] || (p[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), p[t].test(n[u]("class") || "") && p[t]
        }, l = function (n, t) {
            c(n, t) || n.setAttribute("class", (n[u]("class") || "").trim() + " " + t)
        }, d = function (n, t) {
            var i;
            (i = c(n, t)) && n.setAttribute("class", (n[u]("class") || "").replace(i, " "))
        }, g = function (n, t, i) {
            var r = i ? h : "removeEventListener";
            i && g(n, t);
            st.forEach(function (i) {
                n[r](i, t)
            })
        }, a = function (n, i, r, u, f) {
            var o = t.createEvent("Event");
            return r || (r = {}), r.instance = e, o.initEvent(i, !u, !f), o.detail = r, n.dispatchEvent(o), o
        }, nt = function (t, i) {
            var f;
            !ot && (f = n.picturefill || r.pf) ? (i && i.src && !t[u]("srcset") && t.setAttribute("srcset", i.src), f({
                reevaluate: !0,
                elements: [t]
            })) : i && i.src && (t.src = i.src)
        }, v = function (n, t) {
            return (getComputedStyle(n, null) || {})[t]
        }, ut = function (n, t, i) {
            for (i = i || n.offsetWidth; i < r.minSize && t && !n._lazysizesWidth;) i = t.offsetWidth, t = t.parentNode;
            return i
        }, y = function () {
            var n, i, r = [], s = [], u = r, e = function () {
                var t = u;
                for (u = r.length ? s : r, n = !0, i = !1; t.length;) t.shift()();
                n = !1
            }, o = function (r, o) {
                n && !o ? r.apply(this, arguments) : (u.push(r), i || (i = !0, (t.hidden ? f : it)(e)))
            };
            return o._lsFlush = e, o
        }(), w = function (n, t) {
            return t ? function () {
                y(n)
            } : function () {
                var t = this, i = arguments;
                y(function () {
                    n.apply(t, i)
                })
            }
        }, ct = function (n) {
            var u, e = 0, h = r.throttleDelay, t = r.ricTimeout, o = function () {
                u = !1;
                e = i.now();
                n()
            }, s = k && t > 49 ? function () {
                k(o, {timeout: t});
                t !== r.ricTimeout && (t = r.ricTimeout)
            } : w(function () {
                f(o)
            }, !0);
            return function (n) {
                var r;
                ((n = n === !0) && (t = 33), u) || (u = !0, r = h - (i.now() - e), r < 0 && (r = 0), n || r < 9 ? s() : f(s, r))
            }
        }, ft = function (n) {
            var t, u, r = 99, e = function () {
                t = null;
                n()
            }, o = function () {
                var n = i.now() - u;
                n < r ? f(o, r - n) : (k || e)(e)
            };
            return function () {
                u = i.now();
                t || (t = f(o, r))
            }
        }, et = function () {
            var pt, ut, kt, et, dt, gt, ni, ot, st, lt, at, wt, oi = /^img$/i, si = /^iframe$/i,
                hi = "onscroll" in n && !/(gle|ing)bot/.test(navigator.userAgent), ci = 0, vt = 0, b = 0, k = -1,
                ti = function (n) {
                    b--;
                    (!n || b < 0 || !n.target) && (b = 0)
                }, ii = function (n) {
                    return wt == null && (wt = v(t.body, "visibility") == "hidden"), wt || !(v(n.parentNode, "visibility") == "hidden" && v(n, "visibility") == "hidden")
                }, li = function (n, i) {
                    var u, r = n, f = ii(n);
                    for (ot -= i, at += i, st -= i, lt += i; f && (r = r.offsetParent) && r != t.body && r != s;) f = (v(r, "opacity") || 1) > 0, f && v(r, "overflow") != "visible" && (u = r.getBoundingClientRect(), f = lt > u.left && st < u.right && at > u.top - 1 && ot < u.bottom + 1);
                    return f
                }, ri = function () {
                    var w, n, o, c, a, f, v, l, d, h, y, p, i = e.elements;
                    if ((et = r.loadMode) && b < 8 && (w = i.length)) {
                        for (n = 0, k++; n < w; n++) if (i[n] && !i[n]._lazyRace) {
                            if (!hi || e.prematureUnveil && e.prematureUnveil(i[n])) {
                                yt(i[n]);
                                continue
                            }
                            if ((l = i[n][u]("data-expand")) && (f = l * 1) || (f = vt), h || (h = !r.expand || r.expand < 1 ? s.clientHeight > 500 && s.clientWidth > 500 ? 500 : 370 : r.expand, e._defEx = h, y = h * r.expFactor, p = r.hFac, wt = null, vt < y && b < 1 && k > 2 && et > 2 && !t.hidden ? (vt = y, k = 0) : vt = et > 1 && k > 1 && b < 6 ? h : ci), d !== f && (gt = innerWidth + f * p, ni = innerHeight + f, v = f * -1, d = f), o = i[n].getBoundingClientRect(), (at = o.bottom) >= v && (ot = o.top) <= ni && (lt = o.right) >= v * p && (st = o.left) <= gt && (at || lt || st || ot) && (r.loadHidden || ii(i[n])) && (ut && b < 3 && !l && (et < 3 || k < 4) || li(i[n], f))) {
                                if (yt(i[n]), a = !0, b > 9) break
                            } else !a && ut && !c && b < 4 && k < 4 && et > 2 && (pt[0] || r.preloadAfterLoad) && (pt[0] || !l && (at || lt || st || ot || i[n][u](r.sizesAttr) != "auto")) && (c = pt[0] || i[n])
                        }
                        c && !a && yt(c)
                    }
                }, p = ct(ri), ui = function (n) {
                    var t = n.target;
                    if (t._lazyCache) {
                        delete t._lazyCache;
                        return
                    }
                    ti(n);
                    l(t, r.loadedClass);
                    d(t, r.loadingClass);
                    g(t, fi);
                    a(t, "lazyloaded")
                }, ai = w(ui), fi = function (n) {
                    ai({target: n.target})
                }, vi = function (n, t) {
                    var i = n.getAttribute("data-load-mode") || r.iframeLoadMode;
                    i == 0 ? n.contentWindow.location.replace(t) : i == 1 && (n.src = t)
                }, yi = function (n) {
                    var t, i = n[u](r.srcsetAttr);
                    (t = r.customMedia[n[u]("data-media") || n[u]("media")]) && n.setAttribute("media", t);
                    i && n.setAttribute("srcset", i)
                }, pi = w(function (n, t, i, e, o) {
                    var s, h, v, c, p, w;
                    (p = a(n, "lazybeforeunveil", t)).defaultPrevented || (e && (i ? l(n, r.autosizesClass) : n.setAttribute("sizes", e)), h = n[u](r.srcsetAttr), s = n[u](r.srcAttr), o && (v = n.parentNode, c = v && rt.test(v.nodeName || "")), w = t.firesLoad || "src" in n && (h || s || c), p = {target: n}, l(n, r.loadingClass), w && (clearTimeout(kt), kt = f(ti, 2500), g(n, fi, !0)), c && ht.call(v.getElementsByTagName("source"), yi), h ? n.setAttribute("srcset", h) : s && !c && (si.test(n.nodeName) ? vi(n, s) : n.src = s), o && (h || c) && nt(n, {src: s}));
                    n._lazyRace && delete n._lazyRace;
                    d(n, r.lazyClass);
                    y(function () {
                        var t = n.complete && n.naturalWidth > 1;
                        (!w || t) && (t && l(n, r.fastLoadedClass), ui(p), n._lazyCache = !0, f(function () {
                            "_lazyCache" in n && delete n._lazyCache
                        }, 9));
                        n.loading == "lazy" && b--
                    }, !0)
                }), yt = function (n) {
                    if (!n._lazyRace) {
                        var f, t = oi.test(n.nodeName), e = t && (n[u](r.sizesAttr) || n[u]("sizes")), i = e == "auto";
                        (i || !ut) && t && (n[u]("src") || n.srcset) && !n.complete && !c(n, r.errorClass) && c(n, r.lazyClass) || (f = a(n, "lazyunveilread").detail, i && tt.updateElem(n, !0, n.offsetWidth), n._lazyRace = !0, b++, pi(n, f, i, e, t))
                    }
                }, wi = ft(function () {
                    r.loadMode = 3;
                    p()
                }), ei = function () {
                    r.loadMode == 3 && (r.loadMode = 2);
                    wi()
                }, bt = function () {
                    if (!ut) {
                        if (i.now() - dt < 999) {
                            f(bt, 999);
                            return
                        }
                        ut = !0;
                        r.loadMode = 3;
                        p();
                        o("scroll", ei, !0)
                    }
                };
            return {
                _: function () {
                    dt = i.now();
                    e.elements = t.getElementsByClassName(r.lazyClass);
                    pt = t.getElementsByClassName(r.lazyClass + " " + r.preloadClass);
                    o("scroll", p, !0);
                    o("resize", p, !0);
                    o("pageshow", function (n) {
                        if (n.persisted) {
                            var i = t.querySelectorAll("." + r.loadingClass);
                            i.length && i.forEach && it(function () {
                                i.forEach(function (n) {
                                    n.complete && yt(n)
                                })
                            })
                        }
                    });
                    n.MutationObserver ? new MutationObserver(p).observe(s, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0
                    }) : (s[h]("DOMNodeInserted", p, !0), s[h]("DOMAttrModified", p, !0), setInterval(p, 999));
                    o("hashchange", p, !0);
                    ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function (n) {
                        t[h](n, p, !0)
                    });
                    /d$|^c/.test(t.readyState) ? bt() : (o("load", bt), t[h]("DOMContentLoaded", p), f(bt, 2e4));
                    e.elements.length ? (ri(), y._lsFlush()) : p()
                }, checkElems: p, unveil: yt, _aLSL: ei
            }
        }(), tt = function () {
            var n, f = w(function (n, t, i, r) {
                var f, u, e;
                if (n._lazysizesWidth = r, r += "px", n.setAttribute("sizes", r), rt.test(t.nodeName || "")) for (f = t.getElementsByTagName("source"), u = 0, e = f.length; u < e; u++) f[u].setAttribute("sizes", r);
                i.detail.dataAttr || nt(n, i.detail)
            }), i = function (n, t, i) {
                var r, u = n.parentNode;
                u && (i = ut(n, u, i), r = a(n, "lazybeforesizes", {
                    width: i,
                    dataAttr: !!t
                }), r.defaultPrevented || (i = r.detail.width, i && i !== n._lazysizesWidth && f(n, u, r, i)))
            }, e = function () {
                var t, r = n.length;
                if (r) for (t = 0; t < r; t++) i(n[t])
            }, u = ft(e);
            return {
                _: function () {
                    n = t.getElementsByClassName(r.autosizesClass);
                    o("resize", u)
                }, checkElems: u, updateElem: i
            }
        }(), b = function () {
            !b.i && t.getElementsByClassName && (b.i = !0, tt._(), et._())
        };
    return f(function () {
        r.init && b()
    }), e = {cfg: r, autoSizer: tt, loader: et, init: b, uP: nt, aC: l, rC: d, hC: c, fire: a, gW: ut, rAF: y}
}), function (n) {
    "use strict";
    typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports != "undefined" ? module.exports = n(require("jquery")) : n(jQuery)
}(function (n) {
    "use strict";
    var t = window.Slick || {};
    t = function () {
        function i(i, r) {
            var u = this, f;
            u.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: n(i),
                appendDots: n(i),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous<\/button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next<\/button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (t, i) {
                    return n('<button type="button" />').text(i + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            };
            u.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            };
            n.extend(u, u.initials);
            u.activeBreakpoint = null;
            u.animType = null;
            u.animProp = null;
            u.breakpoints = [];
            u.breakpointSettings = [];
            u.cssTransitions = !1;
            u.focussed = !1;
            u.interrupted = !1;
            u.hidden = "hidden";
            u.paused = !0;
            u.positionProp = null;
            u.respondTo = null;
            u.rowCount = 1;
            u.shouldClick = !0;
            u.$slider = n(i);
            u.$slidesCache = null;
            u.transformType = null;
            u.transitionType = null;
            u.visibilityChange = "visibilitychange";
            u.windowWidth = 0;
            u.windowTimer = null;
            f = n(i).data("slick") || {};
            u.options = n.extend({}, u.defaults, r, f);
            u.currentSlide = u.options.initialSlide;
            u.originalSettings = u.options;
            typeof document.mozHidden != "undefined" ? (u.hidden = "mozHidden", u.visibilityChange = "mozvisibilitychange") : typeof document.webkitHidden != "undefined" && (u.hidden = "webkitHidden", u.visibilityChange = "webkitvisibilitychange");
            u.autoPlay = n.proxy(u.autoPlay, u);
            u.autoPlayClear = n.proxy(u.autoPlayClear, u);
            u.autoPlayIterator = n.proxy(u.autoPlayIterator, u);
            u.changeSlide = n.proxy(u.changeSlide, u);
            u.clickHandler = n.proxy(u.clickHandler, u);
            u.selectHandler = n.proxy(u.selectHandler, u);
            u.setPosition = n.proxy(u.setPosition, u);
            u.swipeHandler = n.proxy(u.swipeHandler, u);
            u.dragHandler = n.proxy(u.dragHandler, u);
            u.keyHandler = n.proxy(u.keyHandler, u);
            u.instanceUid = t++;
            u.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
            u.registerBreakpoints();
            u.init(!0)
        }

        var t = 0;
        return i
    }();
    t.prototype.activateADA = function () {
        var n = this;
        n.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
    };
    t.prototype.addSlide = t.prototype.slickAdd = function (t, i, r) {
        var u = this;
        if (typeof i == "boolean") r = i, i = null; else if (i < 0 || i >= u.slideCount) return !1;
        u.unload();
        typeof i == "number" ? i === 0 && u.$slides.length === 0 ? n(t).appendTo(u.$slideTrack) : r ? n(t).insertBefore(u.$slides.eq(i)) : n(t).insertAfter(u.$slides.eq(i)) : r === !0 ? n(t).prependTo(u.$slideTrack) : n(t).appendTo(u.$slideTrack);
        u.$slides = u.$slideTrack.children(this.options.slide);
        u.$slideTrack.children(this.options.slide).detach();
        u.$slideTrack.append(u.$slides);
        u.$slides.each(function (t, i) {
            n(i).attr("data-slick-index", t)
        });
        u.$slidesCache = u.$slides;
        u.reinit()
    };
    t.prototype.animateHeight = function () {
        var n = this, t;
        n.options.slidesToShow === 1 && n.options.adaptiveHeight === !0 && n.options.vertical === !1 && (t = n.$slides.eq(n.currentSlide).outerHeight(!0), n.$list.animate({height: t}, n.options.speed))
    };
    t.prototype.animateSlide = function (t, i) {
        var u = {}, r = this;
        r.animateHeight();
        r.options.rtl === !0 && r.options.vertical === !1 && (t = -t);
        r.transformsEnabled === !1 ? r.options.vertical === !1 ? r.$slideTrack.animate({left: t}, r.options.speed, r.options.easing, i) : r.$slideTrack.animate({top: t}, r.options.speed, r.options.easing, i) : r.cssTransitions === !1 ? (r.options.rtl === !0 && (r.currentLeft = -r.currentLeft), n({animStart: r.currentLeft}).animate({animStart: t}, {
            duration: r.options.speed,
            easing: r.options.easing,
            step: function (n) {
                n = Math.ceil(n);
                r.options.vertical === !1 ? (u[r.animType] = "translate(" + n + "px, 0px)", r.$slideTrack.css(u)) : (u[r.animType] = "translate(0px," + n + "px)", r.$slideTrack.css(u))
            },
            complete: function () {
                i && i.call()
            }
        })) : (r.applyTransition(), t = Math.ceil(t), u[r.animType] = r.options.vertical === !1 ? "translate3d(" + t + "px, 0px, 0px)" : "translate3d(0px," + t + "px, 0px)", r.$slideTrack.css(u), i && setTimeout(function () {
            r.disableTransition();
            i.call()
        }, r.options.speed))
    };
    t.prototype.getNavTarget = function () {
        var i = this, t = i.options.asNavFor;
        return t && t !== null && (t = n(t).not(i.$slider)), t
    };
    t.prototype.asNavFor = function (t) {
        var r = this, i = r.getNavTarget();
        i !== null && typeof i == "object" && i.each(function () {
            var i = n(this).slick("getSlick");
            i.unslicked || i.slideHandler(t, !0)
        })
    };
    t.prototype.applyTransition = function (n) {
        var t = this, i = {};
        i[t.transitionType] = t.options.fade === !1 ? t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : "opacity " + t.options.speed + "ms " + t.options.cssEase;
        t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(n).css(i)
    };
    t.prototype.autoPlay = function () {
        var n = this;
        n.autoPlayClear();
        n.slideCount > n.options.slidesToShow && (n.autoPlayTimer = setInterval(n.autoPlayIterator, n.options.autoplaySpeed))
    };
    t.prototype.autoPlayClear = function () {
        var n = this;
        n.autoPlayTimer && clearInterval(n.autoPlayTimer)
    };
    t.prototype.autoPlayIterator = function () {
        var n = this, t = n.currentSlide + n.options.slidesToScroll;
        n.paused || n.interrupted || n.focussed || (n.options.infinite === !1 && (n.direction === 1 && n.currentSlide + 1 === n.slideCount - 1 ? n.direction = 0 : n.direction === 0 && (t = n.currentSlide - n.options.slidesToScroll, n.currentSlide - 1 == 0 && (n.direction = 1))), n.slideHandler(t))
    };
    t.prototype.buildArrows = function () {
        var t = this;
        t.options.arrows === !0 && (t.$prevArrow = n(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = n(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    };
    t.prototype.buildDots = function () {
        var t = this, i, r;
        if (t.options.dots === !0 && t.slideCount > t.options.slidesToShow) {
            for (t.$slider.addClass("slick-dotted"), r = n("<ul />").addClass(t.options.dotsClass), i = 0; i <= t.getDotCount(); i += 1) r.append(n("<li />").append(t.options.customPaging.call(this, t, i)));
            t.$dots = r.appendTo(t.options.appendDots);
            t.$dots.find("li").first().addClass("slick-active")
        }
    };
    t.prototype.buildOut = function () {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide");
        t.slideCount = t.$slides.length;
        t.$slides.each(function (t, i) {
            n(i).attr("data-slick-index", t).data("originalStyling", n(i).attr("style") || "")
        });
        t.$slider.addClass("slick-slider");
        t.$slideTrack = t.slideCount === 0 ? n('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent();
        t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent();
        t.$slideTrack.css("opacity", 0);
        (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1);
        n("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading");
        t.setupInfinite();
        t.buildArrows();
        t.buildDots();
        t.updateDots();
        t.setSlideClasses(typeof t.currentSlide == "number" ? t.currentSlide : 0);
        t.options.draggable === !0 && t.$list.addClass("draggable")
    };
    t.prototype.buildRows = function () {
        var n = this, t, i, r, f, c, u, e, o, s, h;
        if (f = document.createDocumentFragment(), u = n.$slider.children(), n.options.rows > 0) {
            for (e = n.options.slidesPerRow * n.options.rows, c = Math.ceil(u.length / e), t = 0; t < c; t++) {
                for (o = document.createElement("div"), i = 0; i < n.options.rows; i++) {
                    for (s = document.createElement("div"), r = 0; r < n.options.slidesPerRow; r++) h = t * e + (i * n.options.slidesPerRow + r), u.get(h) && s.appendChild(u.get(h));
                    o.appendChild(s)
                }
                f.appendChild(o)
            }
            n.$slider.empty().append(f);
            n.$slider.children().children().children().css({
                width: 100 / n.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    };
    t.prototype.checkResponsive = function (t, i) {
        var r = this, f, u, e, o = !1, s = r.$slider.width(), h = window.innerWidth || n(window).width();
        if (r.respondTo === "window" ? e = h : r.respondTo === "slider" ? e = s : r.respondTo === "min" && (e = Math.min(h, s)), r.options.responsive && r.options.responsive.length && r.options.responsive !== null) {
            u = null;
            for (f in r.breakpoints) r.breakpoints.hasOwnProperty(f) && (r.originalSettings.mobileFirst === !1 ? e < r.breakpoints[f] && (u = r.breakpoints[f]) : e > r.breakpoints[f] && (u = r.breakpoints[f]));
            u !== null ? r.activeBreakpoint !== null ? (u !== r.activeBreakpoint || i) && (r.activeBreakpoint = u, r.breakpointSettings[u] === "unslick" ? r.unslick(u) : (r.options = n.extend({}, r.originalSettings, r.breakpointSettings[u]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t)), o = u) : (r.activeBreakpoint = u, r.breakpointSettings[u] === "unslick" ? r.unslick(u) : (r.options = n.extend({}, r.originalSettings, r.breakpointSettings[u]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t)), o = u) : r.activeBreakpoint !== null && (r.activeBreakpoint = null, r.options = r.originalSettings, t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t), o = u);
            t || o === !1 || r.$slider.trigger("breakpoint", [r, o])
        }
    };
    t.prototype.changeSlide = function (t, i) {
        var r = this, u = n(t.currentTarget), f, e, o, s;
        u.is("a") && t.preventDefault();
        u.is("li") || (u = u.closest("li"));
        o = r.slideCount % r.options.slidesToScroll != 0;
        f = o ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll;
        switch (t.data.message) {
            case"previous":
                e = f === 0 ? r.options.slidesToScroll : r.options.slidesToShow - f;
                r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - e, !1, i);
                break;
            case"next":
                e = f === 0 ? r.options.slidesToScroll : f;
                r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + e, !1, i);
                break;
            case"index":
                s = t.data.index === 0 ? 0 : t.data.index || u.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(s), !1, i);
                u.children().trigger("focus");
                break;
            default:
                return
        }
    };
    t.prototype.checkNavigable = function (n) {
        var u = this, t, i, r;
        if (t = u.getNavigableIndexes(), i = 0, n > t[t.length - 1]) n = t[t.length - 1]; else for (r in t) {
            if (n < t[r]) {
                n = i;
                break
            }
            i = t[r]
        }
        return n
    };
    t.prototype.cleanUpEvents = function () {
        var t = this;
        t.options.dots && t.$dots !== null && (n("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", n.proxy(t.interrupt, t, !0)).off("mouseleave.slick", n.proxy(t.interrupt, t, !1)), t.options.accessibility === !0 && t.$dots.off("keydown.slick", t.keyHandler));
        t.$slider.off("focus.slick blur.slick");
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), t.options.accessibility === !0 && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler)));
        t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler);
        t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler);
        t.$list.off("touchend.slick mouseup.slick", t.swipeHandler);
        t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler);
        t.$list.off("click.slick", t.clickHandler);
        n(document).off(t.visibilityChange, t.visibility);
        t.cleanUpSlideEvents();
        t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler);
        t.options.focusOnSelect === !0 && n(t.$slideTrack).children().off("click.slick", t.selectHandler);
        n(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange);
        n(window).off("resize.slick.slick-" + t.instanceUid, t.resize);
        n("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault);
        n(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
    };
    t.prototype.cleanUpSlideEvents = function () {
        var t = this;
        t.$list.off("mouseenter.slick", n.proxy(t.interrupt, t, !0));
        t.$list.off("mouseleave.slick", n.proxy(t.interrupt, t, !1))
    };
    t.prototype.cleanUpRows = function () {
        var n = this, t;
        n.options.rows > 0 && (t = n.$slides.children().children(), t.removeAttr("style"), n.$slider.empty().append(t))
    };
    t.prototype.clickHandler = function (n) {
        var t = this;
        t.shouldClick === !1 && (n.stopImmediatePropagation(), n.stopPropagation(), n.preventDefault())
    };
    t.prototype.destroy = function (t) {
        var i = this;
        i.autoPlayClear();
        i.touchObject = {};
        i.cleanUpEvents();
        n(".slick-cloned", i.$slider).detach();
        i.$dots && i.$dots.remove();
        i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove());
        i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove());
        i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            n(this).attr("style", n(this).data("originalStyling"))
        }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides));
        i.cleanUpRows();
        i.$slider.removeClass("slick-slider");
        i.$slider.removeClass("slick-initialized");
        i.$slider.removeClass("slick-dotted");
        i.unslicked = !0;
        t || i.$slider.trigger("destroy", [i])
    };
    t.prototype.disableTransition = function (n) {
        var t = this, i = {};
        i[t.transitionType] = "";
        t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(n).css(i)
    };
    t.prototype.fadeSlide = function (n, t) {
        var i = this;
        i.cssTransitions === !1 ? (i.$slides.eq(n).css({zIndex: i.options.zIndex}), i.$slides.eq(n).animate({opacity: 1}, i.options.speed, i.options.easing, t)) : (i.applyTransition(n), i.$slides.eq(n).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), t && setTimeout(function () {
            i.disableTransition(n);
            t.call()
        }, i.options.speed))
    };
    t.prototype.fadeSlideOut = function (n) {
        var t = this;
        t.cssTransitions === !1 ? t.$slides.eq(n).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(n), t.$slides.eq(n).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    };
    t.prototype.filterSlides = t.prototype.slickFilter = function (n) {
        var t = this;
        n !== null && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(n).appendTo(t.$slideTrack), t.reinit())
    };
    t.prototype.focusHandler = function () {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick", "*", function () {
            var i = n(this);
            setTimeout(function () {
                t.options.pauseOnFocus && i.is(":focus") && (t.focussed = !0, t.autoPlay())
            }, 0)
        }).on("blur.slick", "*", function () {
            var i = n(this);
            t.options.pauseOnFocus && (t.focussed = !1, t.autoPlay())
        })
    };
    t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
        var n = this;
        return n.currentSlide
    };
    t.prototype.getDotCount = function () {
        var n = this, i = 0, r = 0, t = 0;
        if (n.options.infinite === !0) if (n.slideCount <= n.options.slidesToShow) ++t; else while (i < n.slideCount) ++t, i = r + n.options.slidesToScroll, r += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow; else if (n.options.centerMode === !0) t = n.slideCount; else if (n.options.asNavFor) while (i < n.slideCount) ++t, i = r + n.options.slidesToScroll, r += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow; else t = 1 + Math.ceil((n.slideCount - n.options.slidesToShow) / n.options.slidesToScroll);
        return t - 1
    };
    t.prototype.getLeft = function (n) {
        var t = this, f, r, u = 0, i, e;
        return t.slideOffset = 0, r = t.$slides.first().outerHeight(!0), t.options.infinite === !0 ? (t.slideCount > t.options.slidesToShow && (t.slideOffset = t.slideWidth * t.options.slidesToShow * -1, e = -1, t.options.vertical === !0 && t.options.centerMode === !0 && (t.options.slidesToShow === 2 ? e = -1.5 : t.options.slidesToShow === 1 && (e = -2)), u = r * t.options.slidesToShow * e), t.slideCount % t.options.slidesToScroll != 0 && n + t.options.slidesToScroll > t.slideCount && t.slideCount > t.options.slidesToShow && (n > t.slideCount ? (t.slideOffset = (t.options.slidesToShow - (n - t.slideCount)) * t.slideWidth * -1, u = (t.options.slidesToShow - (n - t.slideCount)) * r * -1) : (t.slideOffset = t.slideCount % t.options.slidesToScroll * t.slideWidth * -1, u = t.slideCount % t.options.slidesToScroll * r * -1))) : n + t.options.slidesToShow > t.slideCount && (t.slideOffset = (n + t.options.slidesToShow - t.slideCount) * t.slideWidth, u = (n + t.options.slidesToShow - t.slideCount) * r), t.slideCount <= t.options.slidesToShow && (t.slideOffset = 0, u = 0), t.options.centerMode === !0 && t.slideCount <= t.options.slidesToShow ? t.slideOffset = t.slideWidth * Math.floor(t.options.slidesToShow) / 2 - t.slideWidth * t.slideCount / 2 : t.options.centerMode === !0 && t.options.infinite === !0 ? t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2) - t.slideWidth : t.options.centerMode === !0 && (t.slideOffset = 0, t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2)), f = t.options.vertical === !1 ? n * t.slideWidth * -1 + t.slideOffset : n * r * -1 + u, t.options.variableWidth === !0 && (i = t.slideCount <= t.options.slidesToShow || t.options.infinite === !1 ? t.$slideTrack.children(".slick-slide").eq(n) : t.$slideTrack.children(".slick-slide").eq(n + t.options.slidesToShow), f = t.options.rtl === !0 ? i[0] ? (t.$slideTrack.width() - i[0].offsetLeft - i.width()) * -1 : 0 : i[0] ? i[0].offsetLeft * -1 : 0, t.options.centerMode === !0 && (i = t.slideCount <= t.options.slidesToShow || t.options.infinite === !1 ? t.$slideTrack.children(".slick-slide").eq(n) : t.$slideTrack.children(".slick-slide").eq(n + t.options.slidesToShow + 1), f = (t.options.rtl === !0 ? i[0] ? (t.$slideTrack.width() - i[0].offsetLeft - i.width()) * -1 : 0 : i[0] ? i[0].offsetLeft * -1 : 0) + (t.$list.width() - i.outerWidth()) / 2)), f
    };
    t.prototype.getOption = t.prototype.slickGetOption = function (n) {
        var t = this;
        return t.options[n]
    };
    t.prototype.getNavigableIndexes = function () {
        var n = this, t = 0, i = 0, u = [], r;
        for (n.options.infinite === !1 ? r = n.slideCount : (t = n.options.slidesToScroll * -1, i = n.options.slidesToScroll * -1, r = n.slideCount * 2); t < r;) u.push(t), t = i + n.options.slidesToScroll, i += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow;
        return u
    };
    t.prototype.getSlick = function () {
        return this
    };
    t.prototype.getSlideCount = function () {
        var t = this, i, r, u;
        return u = t.options.centerMode === !0 ? Math.floor(t.$list.width() / 2) : 0, r = t.swipeLeft * -1 + u, t.options.swipeToSlide === !0 ? (t.$slideTrack.find(".slick-slide").each(function (u, f) {
            var e, o, s;
            return e = n(f).outerWidth(), o = f.offsetLeft, t.options.centerMode !== !0 && (o += e / 2), s = o + e, r < s ? (i = f, !1) : void 0
        }), Math.abs(n(i).attr("data-slick-index") - t.currentSlide) || 1) : t.options.slidesToScroll
    };
    t.prototype.goTo = t.prototype.slickGoTo = function (n, t) {
        var i = this;
        i.changeSlide({data: {message: "index", index: parseInt(n)}}, t)
    };
    t.prototype.init = function (t) {
        var i = this;
        n(i.$slider).hasClass("slick-initialized") || (n(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler());
        t && i.$slider.trigger("init", [i]);
        i.options.accessibility === !0 && i.initADA();
        i.options.autoplay && (i.paused = !1, i.autoPlay())
    };
    t.prototype.initADA = function () {
        var t = this, f = Math.ceil(t.slideCount / t.options.slidesToShow),
            r = t.getNavigableIndexes().filter(function (n) {
                return n >= 0 && n < t.slideCount
            }), i, u;
        for (t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({tabindex: "-1"}), t.$dots !== null && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (i) {
            var f = r.indexOf(i), u;
            n(this).attr({role: "tabpanel", id: "slick-slide" + t.instanceUid + i, tabindex: -1});
            f !== -1 && (u = "slick-slide-control" + t.instanceUid + f, n("#" + u).length && n(this).attr({"aria-describedby": u}))
        }), t.$dots.attr("role", "tablist").find("li").each(function (i) {
            var u = r[i];
            n(this).attr({role: "presentation"});
            n(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + t.instanceUid + i,
                "aria-controls": "slick-slide" + t.instanceUid + u,
                "aria-label": i + 1 + " of " + f,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(t.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end()), i = t.currentSlide, u = i + t.options.slidesToShow; i < u; i++) t.options.focusOnChange ? t.$slides.eq(i).attr({tabindex: "0"}) : t.$slides.eq(i).removeAttr("tabindex");
        t.activateADA()
    };
    t.prototype.initArrowEvents = function () {
        var n = this;
        if (n.options.arrows === !0 && n.slideCount > n.options.slidesToShow) {
            n.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, n.changeSlide);
            n.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, n.changeSlide);
            if (n.options.accessibility === !0) {
                n.$prevArrow.on("keydown.slick", n.keyHandler);
                n.$nextArrow.on("keydown.slick", n.keyHandler)
            }
        }
    };
    t.prototype.initDotEvents = function () {
        var t = this;
        if (t.options.dots === !0 && t.slideCount > t.options.slidesToShow) {
            n("li", t.$dots).on("click.slick", {message: "index"}, t.changeSlide);
            if (t.options.accessibility === !0) t.$dots.on("keydown.slick", t.keyHandler)
        }
        if (t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.slideCount > t.options.slidesToShow) n("li", t.$dots).on("mouseenter.slick", n.proxy(t.interrupt, t, !0)).on("mouseleave.slick", n.proxy(t.interrupt, t, !1))
    };
    t.prototype.initSlideEvents = function () {
        var t = this;
        if (t.options.pauseOnHover) {
            t.$list.on("mouseenter.slick", n.proxy(t.interrupt, t, !0));
            t.$list.on("mouseleave.slick", n.proxy(t.interrupt, t, !1))
        }
    };
    t.prototype.initializeEvents = function () {
        var t = this;
        t.initArrowEvents();
        t.initDotEvents();
        t.initSlideEvents();
        t.$list.on("touchstart.slick mousedown.slick", {action: "start"}, t.swipeHandler);
        t.$list.on("touchmove.slick mousemove.slick", {action: "move"}, t.swipeHandler);
        t.$list.on("touchend.slick mouseup.slick", {action: "end"}, t.swipeHandler);
        t.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, t.swipeHandler);
        t.$list.on("click.slick", t.clickHandler);
        n(document).on(t.visibilityChange, n.proxy(t.visibility, t));
        if (t.options.accessibility === !0) t.$list.on("keydown.slick", t.keyHandler);
        if (t.options.focusOnSelect === !0) n(t.$slideTrack).children().on("click.slick", t.selectHandler);
        n(window).on("orientationchange.slick.slick-" + t.instanceUid, n.proxy(t.orientationChange, t));
        n(window).on("resize.slick.slick-" + t.instanceUid, n.proxy(t.resize, t));
        n("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault);
        n(window).on("load.slick.slick-" + t.instanceUid, t.setPosition);
        n(t.setPosition)
    };
    t.prototype.initUI = function () {
        var n = this;
        n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.show(), n.$nextArrow.show());
        n.options.dots === !0 && n.slideCount > n.options.slidesToShow && n.$dots.show()
    };
    t.prototype.keyHandler = function (n) {
        var t = this;
        n.target.tagName.match("TEXTAREA|INPUT|SELECT") || (n.keyCode === 37 && t.options.accessibility === !0 ? t.changeSlide({data: {message: t.options.rtl === !0 ? "next" : "previous"}}) : n.keyCode === 39 && t.options.accessibility === !0 && t.changeSlide({data: {message: t.options.rtl === !0 ? "previous" : "next"}}))
    };
    t.prototype.lazyLoad = function () {
        function e(i) {
            n("img[data-lazy]", i).each(function () {
                var i = n(this), r = n(this).attr("data-lazy"), f = n(this).attr("data-srcset"),
                    e = n(this).attr("data-sizes") || t.$slider.attr("data-sizes"), u = document.createElement("img");
                u.onload = function () {
                    i.animate({opacity: 0}, 100, function () {
                        f && (i.attr("srcset", f), e && i.attr("sizes", e));
                        i.attr("src", r).animate({opacity: 1}, 200, function () {
                            i.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        });
                        t.$slider.trigger("lazyLoaded", [t, i, r])
                    })
                };
                u.onerror = function () {
                    i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
                    t.$slider.trigger("lazyLoadError", [t, i, r])
                };
                u.src = r
            })
        }

        var t = this, u, f, i, r, s;
        if (t.options.centerMode === !0 ? t.options.infinite === !0 ? (i = t.currentSlide + (t.options.slidesToShow / 2 + 1), r = i + t.options.slidesToShow + 2) : (i = Math.max(0, t.currentSlide - (t.options.slidesToShow / 2 + 1)), r = 2 + (t.options.slidesToShow / 2 + 1) + t.currentSlide) : (i = t.options.infinite ? t.options.slidesToShow + t.currentSlide : t.currentSlide, r = Math.ceil(i + t.options.slidesToShow), t.options.fade === !0 && (i > 0 && i--, r <= t.slideCount && r++)), u = t.$slider.find(".slick-slide").slice(i, r), t.options.lazyLoad === "anticipated") {
            var o = i - 1, h = r, c = t.$slider.find(".slick-slide");
            for (s = 0; s < t.options.slidesToScroll; s++) o < 0 && (o = t.slideCount - 1), u = u.add(c.eq(o)), u = u.add(c.eq(h)), o--, h++
        }
        e(u);
        t.slideCount <= t.options.slidesToShow ? (f = t.$slider.find(".slick-slide"), e(f)) : t.currentSlide >= t.slideCount - t.options.slidesToShow ? (f = t.$slider.find(".slick-cloned").slice(0, t.options.slidesToShow), e(f)) : t.currentSlide === 0 && (f = t.$slider.find(".slick-cloned").slice(t.options.slidesToShow * -1), e(f))
    };
    t.prototype.loadSlider = function () {
        var n = this;
        n.setPosition();
        n.$slideTrack.css({opacity: 1});
        n.$slider.removeClass("slick-loading");
        n.initUI();
        n.options.lazyLoad === "progressive" && n.progressiveLazyLoad()
    };
    t.prototype.next = t.prototype.slickNext = function () {
        var n = this;
        n.changeSlide({data: {message: "next"}})
    };
    t.prototype.orientationChange = function () {
        var n = this;
        n.checkResponsive();
        n.setPosition()
    };
    t.prototype.pause = t.prototype.slickPause = function () {
        var n = this;
        n.autoPlayClear();
        n.paused = !0
    };
    t.prototype.play = t.prototype.slickPlay = function () {
        var n = this;
        n.autoPlay();
        n.options.autoplay = !0;
        n.paused = !1;
        n.focussed = !1;
        n.interrupted = !1
    };
    t.prototype.postSlide = function (t) {
        var i = this, r;
        i.unslicked || (i.$slider.trigger("afterChange", [i, t]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), i.options.accessibility === !0 && (i.initADA(), i.options.focusOnChange && (r = n(i.$slides.get(i.currentSlide)), r.attr("tabindex", 0).focus())))
    };
    t.prototype.prev = t.prototype.slickPrev = function () {
        var n = this;
        n.changeSlide({data: {message: "previous"}})
    };
    t.prototype.preventDefault = function (n) {
        n.preventDefault()
    };
    t.prototype.progressiveLazyLoad = function (t) {
        t = t || 1;
        var i = this, s = n("img[data-lazy]", i.$slider), r, u, e, o, f;
        s.length ? (r = s.first(), u = r.attr("data-lazy"), e = r.attr("data-srcset"), o = r.attr("data-sizes") || i.$slider.attr("data-sizes"), f = document.createElement("img"), f.onload = function () {
            e && (r.attr("srcset", e), o && r.attr("sizes", o));
            r.attr("src", u).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
            i.options.adaptiveHeight === !0 && i.setPosition();
            i.$slider.trigger("lazyLoaded", [i, r, u]);
            i.progressiveLazyLoad()
        }, f.onerror = function () {
            t < 3 ? setTimeout(function () {
                i.progressiveLazyLoad(t + 1)
            }, 500) : (r.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), i.$slider.trigger("lazyLoadError", [i, r, u]), i.progressiveLazyLoad())
        }, f.src = u) : i.$slider.trigger("allImagesLoaded", [i])
    };
    t.prototype.refresh = function (t) {
        var i = this, r, u;
        u = i.slideCount - i.options.slidesToShow;
        !i.options.infinite && i.currentSlide > u && (i.currentSlide = u);
        i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0);
        r = i.currentSlide;
        i.destroy(!0);
        n.extend(i, i.initials, {currentSlide: r});
        i.init();
        t || i.changeSlide({data: {message: "index", index: r}}, !1)
    };
    t.prototype.registerBreakpoints = function () {
        var t = this, u, f, i, r = t.options.responsive || null;
        if (n.type(r) === "array" && r.length) {
            t.respondTo = t.options.respondTo || "window";
            for (u in r) if (i = t.breakpoints.length - 1, r.hasOwnProperty(u)) {
                for (f = r[u].breakpoint; i >= 0;) t.breakpoints[i] && t.breakpoints[i] === f && t.breakpoints.splice(i, 1), i--;
                t.breakpoints.push(f);
                t.breakpointSettings[f] = r[u].settings
            }
            t.breakpoints.sort(function (n, i) {
                return t.options.mobileFirst ? n - i : i - n
            })
        }
    };
    t.prototype.reinit = function () {
        var t = this;
        if (t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && t.currentSlide !== 0 && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), t.options.focusOnSelect === !0) n(t.$slideTrack).children().on("click.slick", t.selectHandler);
        t.setSlideClasses(typeof t.currentSlide == "number" ? t.currentSlide : 0);
        t.setPosition();
        t.focusHandler();
        t.paused = !t.options.autoplay;
        t.autoPlay();
        t.$slider.trigger("reInit", [t])
    };
    t.prototype.resize = function () {
        var t = this;
        n(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
            t.windowWidth = n(window).width();
            t.checkResponsive();
            t.unslicked || t.setPosition()
        }, 50))
    };
    t.prototype.removeSlide = t.prototype.slickRemove = function (n, t, i) {
        var r = this;
        if (typeof n == "boolean" ? (t = n, n = t === !0 ? 0 : r.slideCount - 1) : n = t === !0 ? --n : n, r.slideCount < 1 || n < 0 || n > r.slideCount - 1) return !1;
        r.unload();
        i === !0 ? r.$slideTrack.children().remove() : r.$slideTrack.children(this.options.slide).eq(n).remove();
        r.$slides = r.$slideTrack.children(this.options.slide);
        r.$slideTrack.children(this.options.slide).detach();
        r.$slideTrack.append(r.$slides);
        r.$slidesCache = r.$slides;
        r.reinit()
    };
    t.prototype.setCSS = function (n) {
        var t = this, i = {}, r, u;
        t.options.rtl === !0 && (n = -n);
        r = t.positionProp == "left" ? Math.ceil(n) + "px" : "0px";
        u = t.positionProp == "top" ? Math.ceil(n) + "px" : "0px";
        i[t.positionProp] = n;
        t.transformsEnabled === !1 ? t.$slideTrack.css(i) : (i = {}, t.cssTransitions === !1 ? (i[t.animType] = "translate(" + r + ", " + u + ")", t.$slideTrack.css(i)) : (i[t.animType] = "translate3d(" + r + ", " + u + ", 0px)", t.$slideTrack.css(i)))
    };
    t.prototype.setDimensions = function () {
        var n = this, t;
        n.options.vertical === !1 ? n.options.centerMode === !0 && n.$list.css({padding: "0px " + n.options.centerPadding}) : (n.$list.height(n.$slides.first().outerHeight(!0) * n.options.slidesToShow), n.options.centerMode === !0 && n.$list.css({padding: n.options.centerPadding + " 0px"}));
        n.listWidth = n.$list.width();
        n.listHeight = n.$list.height();
        n.options.vertical === !1 && n.options.variableWidth === !1 ? (n.slideWidth = Math.ceil(n.listWidth / n.options.slidesToShow), n.$slideTrack.width(Math.ceil(n.slideWidth * n.$slideTrack.children(".slick-slide").length))) : n.options.variableWidth === !0 ? n.$slideTrack.width(5e3 * n.slideCount) : (n.slideWidth = Math.ceil(n.listWidth), n.$slideTrack.height(Math.ceil(n.$slides.first().outerHeight(!0) * n.$slideTrack.children(".slick-slide").length)));
        t = n.$slides.first().outerWidth(!0) - n.$slides.first().width();
        n.options.variableWidth === !1 && n.$slideTrack.children(".slick-slide").width(n.slideWidth - t)
    };
    t.prototype.setFade = function () {
        var t = this, i;
        t.$slides.each(function (r, u) {
            i = t.slideWidth * r * -1;
            t.options.rtl === !0 ? n(u).css({
                position: "relative",
                right: i,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : n(u).css({position: "relative", left: i, top: 0, zIndex: t.options.zIndex - 2, opacity: 0})
        });
        t.$slides.eq(t.currentSlide).css({zIndex: t.options.zIndex - 1, opacity: 1})
    };
    t.prototype.setHeight = function () {
        var n = this, t;
        n.options.slidesToShow === 1 && n.options.adaptiveHeight === !0 && n.options.vertical === !1 && (t = n.$slides.eq(n.currentSlide).outerHeight(!0), n.$list.css("height", t))
    };
    t.prototype.setOption = t.prototype.slickSetOption = function () {
        var t = this, u, f, e, i, o = !1, r;
        if (n.type(arguments[0]) === "object" ? (e = arguments[0], o = arguments[1], r = "multiple") : n.type(arguments[0]) === "string" && (e = arguments[0], i = arguments[1], o = arguments[2], arguments[0] === "responsive" && n.type(arguments[1]) === "array" ? r = "responsive" : typeof arguments[1] != "undefined" && (r = "single")), r === "single") t.options[e] = i; else if (r === "multiple") n.each(e, function (n, i) {
            t.options[n] = i
        }); else if (r === "responsive") for (f in i) if (n.type(t.options.responsive) !== "array") t.options.responsive = [i[f]]; else {
            for (u = t.options.responsive.length - 1; u >= 0;) t.options.responsive[u].breakpoint === i[f].breakpoint && t.options.responsive.splice(u, 1), u--;
            t.options.responsive.push(i[f])
        }
        o && (t.unload(), t.reinit())
    };
    t.prototype.setPosition = function () {
        var n = this;
        n.setDimensions();
        n.setHeight();
        n.options.fade === !1 ? n.setCSS(n.getLeft(n.currentSlide)) : n.setFade();
        n.$slider.trigger("setPosition", [n])
    };
    t.prototype.setProps = function () {
        var n = this, t = document.body.style;
        n.positionProp = n.options.vertical === !0 ? "top" : "left";
        n.positionProp === "top" ? n.$slider.addClass("slick-vertical") : n.$slider.removeClass("slick-vertical");
        (t.WebkitTransition !== undefined || t.MozTransition !== undefined || t.msTransition !== undefined) && n.options.useCSS === !0 && (n.cssTransitions = !0);
        n.options.fade && (typeof n.options.zIndex == "number" ? n.options.zIndex < 3 && (n.options.zIndex = 3) : n.options.zIndex = n.defaults.zIndex);
        t.OTransform !== undefined && (n.animType = "OTransform", n.transformType = "-o-transform", n.transitionType = "OTransition", t.perspectiveProperty === undefined && t.webkitPerspective === undefined && (n.animType = !1));
        t.MozTransform !== undefined && (n.animType = "MozTransform", n.transformType = "-moz-transform", n.transitionType = "MozTransition", t.perspectiveProperty === undefined && t.MozPerspective === undefined && (n.animType = !1));
        t.webkitTransform !== undefined && (n.animType = "webkitTransform", n.transformType = "-webkit-transform", n.transitionType = "webkitTransition", t.perspectiveProperty === undefined && t.webkitPerspective === undefined && (n.animType = !1));
        t.msTransform !== undefined && (n.animType = "msTransform", n.transformType = "-ms-transform", n.transitionType = "msTransition", t.msTransform === undefined && (n.animType = !1));
        t.transform !== undefined && n.animType !== !1 && (n.animType = "transform", n.transformType = "transform", n.transitionType = "transition");
        n.transformsEnabled = n.options.useTransform && n.animType !== null && n.animType !== !1
    };
    t.prototype.setSlideClasses = function (n) {
        var t = this, u, i, r, f, e;
        i = t.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
        t.$slides.eq(n).addClass("slick-current");
        t.options.centerMode === !0 ? (e = t.options.slidesToShow % 2 == 0 ? 1 : 0, u = Math.floor(t.options.slidesToShow / 2), t.options.infinite === !0 && (n >= u && n <= t.slideCount - 1 - u ? t.$slides.slice(n - u + e, n + u + 1).addClass("slick-active").attr("aria-hidden", "false") : (r = t.options.slidesToShow + n, i.slice(r - u + 1 + e, r + u + 2).addClass("slick-active").attr("aria-hidden", "false")), n === 0 ? i.eq(t.options.slidesToShow + t.slideCount + 1).addClass("slick-center") : n === t.slideCount - 1 && i.eq(t.options.slidesToShow).addClass("slick-center")), t.$slides.eq(n).addClass("slick-center")) : n >= 0 && n <= t.slideCount - t.options.slidesToShow ? t.$slides.slice(n, n + t.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= t.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (f = t.slideCount % t.options.slidesToShow, r = t.options.infinite === !0 ? t.options.slidesToShow + n : n, t.options.slidesToShow == t.options.slidesToScroll && t.slideCount - n < t.options.slidesToShow ? i.slice(r - (t.options.slidesToShow - f), r + f).addClass("slick-active").attr("aria-hidden", "false") : i.slice(r, r + t.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        (t.options.lazyLoad === "ondemand" || t.options.lazyLoad === "anticipated") && t.lazyLoad()
    };
    t.prototype.setupInfinite = function () {
        var t = this, i, r, u;
        if (t.options.fade === !0 && (t.options.centerMode = !1), t.options.infinite === !0 && t.options.fade === !1 && (r = null, t.slideCount > t.options.slidesToShow)) {
            for (u = t.options.centerMode === !0 ? t.options.slidesToShow + 1 : t.options.slidesToShow, i = t.slideCount; i > t.slideCount - u; i -= 1) r = i - 1, n(t.$slides[r]).clone(!0).attr("id", "").attr("data-slick-index", r - t.slideCount).prependTo(t.$slideTrack).addClass("slick-cloned");
            for (i = 0; i < u + t.slideCount; i += 1) r = i, n(t.$slides[r]).clone(!0).attr("id", "").attr("data-slick-index", r + t.slideCount).appendTo(t.$slideTrack).addClass("slick-cloned");
            t.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                n(this).attr("id", "")
            })
        }
    };
    t.prototype.interrupt = function (n) {
        var t = this;
        n || t.autoPlay();
        t.interrupted = n
    };
    t.prototype.selectHandler = function (t) {
        var i = this, u = n(t.target).is(".slick-slide") ? n(t.target) : n(t.target).parents(".slick-slide"),
            r = parseInt(u.attr("data-slick-index"));
        if (r || (r = 0), i.slideCount <= i.options.slidesToShow) {
            i.slideHandler(r, !1, !0);
            return
        }
        i.slideHandler(r)
    };
    t.prototype.slideHandler = function (n, t, i) {
        var u, f, s, o, h = null, r = this, e;
        if ((t = t || !1, r.animating !== !0 || r.options.waitForAnimate !== !0) && (r.options.fade !== !0 || r.currentSlide !== n)) {
            if (t === !1 && r.asNavFor(n), u = n, h = r.getLeft(u), o = r.getLeft(r.currentSlide), r.currentLeft = r.swipeLeft === null ? o : r.swipeLeft, r.options.infinite === !1 && r.options.centerMode === !1 && (n < 0 || n > r.getDotCount() * r.options.slidesToScroll)) {
                r.options.fade === !1 && (u = r.currentSlide, i !== !0 && r.slideCount > r.options.slidesToShow ? r.animateSlide(o, function () {
                    r.postSlide(u)
                }) : r.postSlide(u));
                return
            }
            if (r.options.infinite === !1 && r.options.centerMode === !0 && (n < 0 || n > r.slideCount - r.options.slidesToScroll)) {
                r.options.fade === !1 && (u = r.currentSlide, i !== !0 && r.slideCount > r.options.slidesToShow ? r.animateSlide(o, function () {
                    r.postSlide(u)
                }) : r.postSlide(u));
                return
            }
            if (r.options.autoplay && clearInterval(r.autoPlayTimer), f = u < 0 ? r.slideCount % r.options.slidesToScroll != 0 ? r.slideCount - r.slideCount % r.options.slidesToScroll : r.slideCount + u : u >= r.slideCount ? r.slideCount % r.options.slidesToScroll != 0 ? 0 : u - r.slideCount : u, r.animating = !0, r.$slider.trigger("beforeChange", [r, r.currentSlide, f]), s = r.currentSlide, r.currentSlide = f, r.setSlideClasses(r.currentSlide), r.options.asNavFor && (e = r.getNavTarget(), e = e.slick("getSlick"), e.slideCount <= e.options.slidesToShow && e.setSlideClasses(r.currentSlide)), r.updateDots(), r.updateArrows(), r.options.fade === !0) {
                i !== !0 ? (r.fadeSlideOut(s), r.fadeSlide(f, function () {
                    r.postSlide(f)
                })) : r.postSlide(f);
                r.animateHeight();
                return
            }
            i !== !0 && r.slideCount > r.options.slidesToShow ? r.animateSlide(h, function () {
                r.postSlide(f)
            }) : r.postSlide(f)
        }
    };
    t.prototype.startLoad = function () {
        var n = this;
        n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.hide(), n.$nextArrow.hide());
        n.options.dots === !0 && n.slideCount > n.options.slidesToShow && n.$dots.hide();
        n.$slider.addClass("slick-loading")
    };
    t.prototype.swipeDirection = function () {
        var i, r, u, n, t = this;
        return (i = t.touchObject.startX - t.touchObject.curX, r = t.touchObject.startY - t.touchObject.curY, u = Math.atan2(r, i), n = Math.round(u * 180 / Math.PI), n < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0) ? t.options.rtl === !1 ? "left" : "right" : n <= 360 && n >= 315 ? t.options.rtl === !1 ? "left" : "right" : n >= 135 && n <= 225 ? t.options.rtl === !1 ? "right" : "left" : t.options.verticalSwiping === !0 ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
    };
    t.prototype.swipeEnd = function () {
        var n = this, i, t;
        if (n.dragging = !1, n.swiping = !1, n.scrolling) return n.scrolling = !1, !1;
        if (n.interrupted = !1, n.shouldClick = n.touchObject.swipeLength > 10 ? !1 : !0, n.touchObject.curX === undefined) return !1;
        if (n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
            t = n.swipeDirection();
            switch (t) {
                case"left":
                case"down":
                    i = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount();
                    n.currentDirection = 0;
                    break;
                case"right":
                case"up":
                    i = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount();
                    n.currentDirection = 1
            }
            t != "vertical" && (n.slideHandler(i), n.touchObject = {}, n.$slider.trigger("swipe", [n, t]))
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    };
    t.prototype.swipeHandler = function (n) {
        var t = this;
        if (t.options.swipe !== !1 && (!("ontouchend" in document) || t.options.swipe !== !1) && (t.options.draggable !== !1 || n.type.indexOf("mouse") === -1)) {
            t.touchObject.fingerCount = n.originalEvent && n.originalEvent.touches !== undefined ? n.originalEvent.touches.length : 1;
            t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold;
            t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold);
            switch (n.data.action) {
                case"start":
                    t.swipeStart(n);
                    break;
                case"move":
                    t.swipeMove(n);
                    break;
                case"end":
                    t.swipeEnd(n)
            }
        }
    };
    t.prototype.swipeMove = function (n) {
        var t = this, f, e, r, u, i, o;
        if (i = n.originalEvent !== undefined ? n.originalEvent.touches : null, !t.dragging || t.scrolling || i && i.length !== 1) return !1;
        if (f = t.getLeft(t.currentSlide), t.touchObject.curX = i !== undefined ? i[0].pageX : n.clientX, t.touchObject.curY = i !== undefined ? i[0].pageY : n.clientY, t.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(t.touchObject.curX - t.touchObject.startX, 2))), o = Math.round(Math.sqrt(Math.pow(t.touchObject.curY - t.touchObject.startY, 2))), !t.options.verticalSwiping && !t.swiping && o > 4) return t.scrolling = !0, !1;
        if (t.options.verticalSwiping === !0 && (t.touchObject.swipeLength = o), e = t.swipeDirection(), n.originalEvent !== undefined && t.touchObject.swipeLength > 4 && (t.swiping = !0, n.preventDefault()), u = (t.options.rtl === !1 ? 1 : -1) * (t.touchObject.curX > t.touchObject.startX ? 1 : -1), t.options.verticalSwiping === !0 && (u = t.touchObject.curY > t.touchObject.startY ? 1 : -1), r = t.touchObject.swipeLength, t.touchObject.edgeHit = !1, t.options.infinite === !1 && (t.currentSlide === 0 && e === "right" || t.currentSlide >= t.getDotCount() && e === "left") && (r = t.touchObject.swipeLength * t.options.edgeFriction, t.touchObject.edgeHit = !0), t.swipeLeft = t.options.vertical === !1 ? f + r * u : f + r * (t.$list.height() / t.listWidth) * u, t.options.verticalSwiping === !0 && (t.swipeLeft = f + r * u), t.options.fade === !0 || t.options.touchMove === !1) return !1;
        if (t.animating === !0) return t.swipeLeft = null, !1;
        t.setCSS(t.swipeLeft)
    };
    t.prototype.swipeStart = function (n) {
        var t = this, i;
        if (t.interrupted = !0, t.touchObject.fingerCount !== 1 || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
        n.originalEvent !== undefined && n.originalEvent.touches !== undefined && (i = n.originalEvent.touches[0]);
        t.touchObject.startX = t.touchObject.curX = i !== undefined ? i.pageX : n.clientX;
        t.touchObject.startY = t.touchObject.curY = i !== undefined ? i.pageY : n.clientY;
        t.dragging = !0
    };
    t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
        var n = this;
        n.$slidesCache !== null && (n.unload(), n.$slideTrack.children(this.options.slide).detach(), n.$slidesCache.appendTo(n.$slideTrack), n.reinit())
    };
    t.prototype.unload = function () {
        var t = this;
        n(".slick-cloned", t.$slider).remove();
        t.$dots && t.$dots.remove();
        t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove();
        t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove();
        t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    };
    t.prototype.unslick = function (n) {
        var t = this;
        t.$slider.trigger("unslick", [t, n]);
        t.destroy()
    };
    t.prototype.updateArrows = function () {
        var n = this, t;
        t = Math.floor(n.options.slidesToShow / 2);
        n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && !n.options.infinite && (n.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), n.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), n.currentSlide === 0 ? (n.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), n.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : n.currentSlide >= n.slideCount - n.options.slidesToShow && n.options.centerMode === !1 ? (n.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), n.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : n.currentSlide >= n.slideCount - 1 && n.options.centerMode === !0 && (n.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), n.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    };
    t.prototype.updateDots = function () {
        var n = this;
        n.$dots !== null && (n.$dots.find("li").removeClass("slick-active").end(), n.$dots.find("li").eq(Math.floor(n.currentSlide / n.options.slidesToScroll)).addClass("slick-active"))
    };
    t.prototype.visibility = function () {
        var n = this;
        n.options.autoplay && (n.interrupted = document[n.hidden] ? !0 : !1)
    };
    n.fn.slick = function () {
        for (var i = this, r = arguments[0], f = Array.prototype.slice.call(arguments, 1), e = i.length, u, n = 0; n < e; n++) if (typeof r == "object" || typeof r == "undefined" ? i[n].slick = new t(i[n], r) : u = i[n].slick[r].apply(i[n].slick, f), typeof u != "undefined") return u;
        return i
    }
});
$(document).ready(function () {
    $(".product-img-list").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: !0,
        arrows: !1,
        autoplay: !0,
        speed: 500,
        autoplaySpeed: 5e3,
        asNavFor: ".nav-product-img",
        prevArrow: '<div class="slick-prev"><i class="fas fa-chevron-left"><\/i><\/div>',
        nextArrow: '<div class="slick-next"><i class="fas fa-chevron-right"><\/i><\/div>'
    });
    $(".nav-product-img").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".product-img-list",
        infinite: !0,
        arrows: !1,
        speed: 500,
        focusOnSelect: !0,
        pauseOnHover: !0,
        vertical: !0,
        responsive: [{breakpoint: 768, settings: {vertical: !1, slidesToShow: 4}},]
    });
    $("#form-contact").on("submit", function (n) {
        n.preventDefault();
        $.post("/lien-he", $(this).serialize(), function (n) {
            n.status ? ($.toast({
                heading: "Liên hệ thành công",
                text: n.msg,
                icon: "success"
            }), $("#form-contact").trigger("reset")) : $.toast({
                heading: "Liên hệ không thành công",
                text: n.msg,
                icon: "error"
            })
        })
    });
    $(".contact-form-modal").on("submit", function (n) {
        n.preventDefault();
        $.post("/lien-he", $(this).serialize(), function (n) {
            n.status ? ($.toast({
                heading: "Liên hệ thành công",
                text: n.msg,
                icon: "success"
            }), $(".contact-form-modal").trigger("reset")) : $.toast({
                heading: "Liên hệ không thành công",
                text: n.msg,
                icon: "error"
            })
        })
    });
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
        $(".header-menu").toggleClass("active")
    });
    $("#subscribeForm").on("submit", function (n) {
        n.preventDefault();
        $.post("/Home/QuickContact", $(this).serialize(), function (n) {
            n.status ? ($.toast({
                heading: "Liên hệ thành công",
                text: n.msg,
                icon: "success"
            }), $("#subscribeForm").trigger("reset")) : $.toast({
                heading: "Liên hệ không thành công",
                text: n.msg,
                icon: "error"
            })
        })
    });
    AOS.init({once: !0})
})