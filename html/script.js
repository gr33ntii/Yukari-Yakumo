/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
! function (t) {
    function e(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports
    }
    var n = {};
    e.m = t, e.c = n, e.d = function (t, n, i) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, e.n = function (t) {
        var n = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 4)
}([function (t, e, n) {
    function i(t) {
        u.env() && (v(t.design) && h.on("__wf_design", t.design), v(t.preview) && h.on("__wf_preview", t.preview)), v(t.destroy) && h.on("__wf_destroy", t.destroy), t.ready && v(t.ready) && function (t) {
            if (g) return void t.ready();
            if (m.contains(l, t.ready)) return;
            l.push(t.ready)
        }(t)
    }

    function r(t) {
        v(t.design) && h.off("__wf_design", t.design), v(t.preview) && h.off("__wf_preview", t.preview), v(t.destroy) && h.off("__wf_destroy", t.destroy), t.ready && v(t.ready) && function (t) {
            l = m.filter(l, function (e) {
                return e !== t.ready
            })
        }(t)
    }

    function o(t, e) {
        var n = [],
            i = {};
        return i.up = m.throttle(function (t) {
            m.each(n, function (e) {
                e(t)
            })
        }), t && e && t.on(e, i.up), i.on = function (t) {
            "function" == typeof t && (m.contains(n, t) || n.push(t))
        }, i.off = function (t) {
            n = arguments.length ? m.filter(n, function (e) {
                return e !== t
            }) : []
        }, i
    }

    function a(t) {
        v(t) && t()
    }

    function s() {
        E && (E.reject(), h.off("load", E.resolve)), E = new d.Deferred, h.on("load", E.resolve)
    }
    var u = {},
        c = {},
        l = [],
        f = window.Webflow || [],
        d = window.jQuery,
        h = d(window),
        p = d(document),
        v = d.isFunction,
        m = u._ = n(6),
        w = n(1) && d.tram,
        g = !1,
        b = !1;
    w.config.hideBackface = !1, w.config.keepInherited = !0, u.define = function (t, e, n) {
        c[t] && r(c[t]);
        var o = c[t] = e(d, m, n) || {};
        return i(o), o
    }, u.require = function (t) {
        return c[t]
    }, u.push = function (t) {
        g ? v(t) && t() : f.push(t)
    }, u.env = function (t) {
        var e = window.__wf_design,
            n = void 0 !== e;
        return t ? "design" === t ? n && e : "preview" === t ? n && !e : "slug" === t ? n && window.__wf_slug : "editor" === t ? window.WebflowEditor : "test" === t ? window.__wf_test : "frame" === t ? window !== window.top : void 0 : n
    };
    var y = navigator.userAgent.toLowerCase(),
        x = u.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
        k = u.env.chrome = /chrome/.test(y) && /Google/.test(navigator.vendor) && parseInt(y.match(/chrome\/(\d+)\./)[1], 10),
        _ = u.env.ios = /(ipod|iphone|ipad)/.test(y);
    u.env.safari = /safari/.test(y) && !k && !_;
    var T;
    x && p.on("touchstart mousedown", function (t) {
        T = t.target
    }), u.validClick = x ? function (t) {
        return t === T || d.contains(t, T)
    } : function () {
        return !0
    };
    var O = "resize.webflow orientationchange.webflow load.webflow";
    u.resize = o(h, O), u.scroll = o(h, "scroll.webflow resize.webflow orientationchange.webflow load.webflow"), u.redraw = o(), u.location = function (t) {
        window.location = t
    }, u.env() && (u.location = function () {}), u.ready = function () {
        g = !0, b ? (b = !1, m.each(c, i)) : m.each(l, a), m.each(f, a), u.resize.up()
    };
    var E;
    u.load = function (t) {
        E.then(t)
    }, u.destroy = function (t) {
        t = t || {}, b = !0, h.triggerHandler("__wf_destroy"), null != t.domready && (g = t.domready), m.each(c, r), u.resize.off(), u.scroll.off(), u.redraw.off(), l = [], f = [], "pending" === E.state() && s()
    }, d(u.ready), s(), t.exports = window.Webflow = u
}, function (t, e) {
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    window.tram = function (t) {
        function e(t, e) {
            return (new S.Bare).init(t, e)
        }

        function i(t) {
            return t.replace(/[A-Z]/g, function (t) {
                return "-" + t.toLowerCase()
            })
        }

        function r(t) {
            var e = parseInt(t.slice(1), 16);
            return [e >> 16 & 255, e >> 8 & 255, 255 & e]
        }

        function o(t, e, n) {
            return "#" + (1 << 24 | t << 16 | e << 8 | n).toString(16).slice(1)
        }

        function a() {}

        function s(t, e, n) {
            if (void 0 !== e && (n = e), void 0 === t) return n;
            var i = n;
            return Y.test(t) || !G.test(t) ? i = parseInt(t, 10) : G.test(t) && (i = 1e3 * parseFloat(t)), 0 > i && (i = 0), i == i ? i : n
        }

        function u(t) {
            F.debug && window && window.console.warn(t)
        }
        var c = function (t, e, i) {
                function r(t) {
                    return "object" == (void 0 === t ? "undefined" : n(t))
                }

                function o(t) {
                    return "function" == typeof t
                }

                function a() {}

                function s(n, u) {
                    function c() {
                        var t = new l;
                        return o(t.init) && t.init.apply(t, arguments), t
                    }

                    function l() {}
                    u === i && (u = n, n = Object), c.Bare = l;
                    var f, d = a[t] = n[t],
                        h = l[t] = c[t] = new a;
                    return h.constructor = c, c.mixin = function (e) {
                        return l[t] = c[t] = s(c, e)[t], c
                    }, c.open = function (t) {
                        if (f = {}, o(t) ? f = t.call(c, h, d, c, n) : r(t) && (f = t), r(f))
                            for (var i in f) e.call(f, i) && (h[i] = f[i]);
                        return o(h.init) || (h.init = n), c
                    }, c.open(u)
                }
                return s
            }("prototype", {}.hasOwnProperty),
            l = {
                ease: ["ease", function (t, e, n, i) {
                    var r = (t /= i) * t,
                        o = r * t;
                    return e + n * (-2.75 * o * r + 11 * r * r + -15.5 * o + 8 * r + .25 * t)
                }],
                "ease-in": ["ease-in", function (t, e, n, i) {
                    var r = (t /= i) * t,
                        o = r * t;
                    return e + n * (-1 * o * r + 3 * r * r + -3 * o + 2 * r)
                }],
                "ease-out": ["ease-out", function (t, e, n, i) {
                    var r = (t /= i) * t,
                        o = r * t;
                    return e + n * (.3 * o * r + -1.6 * r * r + 2.2 * o + -1.8 * r + 1.9 * t)
                }],
                "ease-in-out": ["ease-in-out", function (t, e, n, i) {
                    var r = (t /= i) * t,
                        o = r * t;
                    return e + n * (2 * o * r + -5 * r * r + 2 * o + 2 * r)
                }],
                linear: ["linear", function (t, e, n, i) {
                    return n * t / i + e
                }],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function (t, e, n, i) {
                    return n * (t /= i) * t + e
                }],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function (t, e, n, i) {
                    return -n * (t /= i) * (t - 2) + e
                }],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function (t, e, n, i) {
                    return (t /= i / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
                }],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function (t, e, n, i) {
                    return n * (t /= i) * t * t + e
                }],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function (t, e, n, i) {
                    return n * ((t = t / i - 1) * t * t + 1) + e
                }],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function (t, e, n, i) {
                    return (t /= i / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e
                }],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function (t, e, n, i) {
                    return n * (t /= i) * t * t * t + e
                }],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function (t, e, n, i) {
                    return -n * ((t = t / i - 1) * t * t * t - 1) + e
                }],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function (t, e, n, i) {
                    return (t /= i / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e
                }],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function (t, e, n, i) {
                    return n * (t /= i) * t * t * t * t + e
                }],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function (t, e, n, i) {
                    return n * ((t = t / i - 1) * t * t * t * t + 1) + e
                }],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function (t, e, n, i) {
                    return (t /= i / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e
                }],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function (t, e, n, i) {
                    return -n * Math.cos(t / i * (Math.PI / 2)) + n + e
                }],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function (t, e, n, i) {
                    return n * Math.sin(t / i * (Math.PI / 2)) + e
                }],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function (t, e, n, i) {
                    return -n / 2 * (Math.cos(Math.PI * t / i) - 1) + e
                }],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function (t, e, n, i) {
                    return 0 === t ? e : n * Math.pow(2, 10 * (t / i - 1)) + e
                }],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function (t, e, n, i) {
                    return t === i ? e + n : n * (1 - Math.pow(2, -10 * t / i)) + e
                }],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function (t, e, n, i) {
                    return 0 === t ? e : t === i ? e + n : (t /= i / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (2 - Math.pow(2, -10 * --t)) + e
                }],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function (t, e, n, i) {
                    return -n * (Math.sqrt(1 - (t /= i) * t) - 1) + e
                }],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function (t, e, n, i) {
                    return n * Math.sqrt(1 - (t = t / i - 1) * t) + e
                }],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function (t, e, n, i) {
                    return (t /= i / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
                }],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function (t, e, n, i, r) {
                    return void 0 === r && (r = 1.70158), n * (t /= i) * t * ((r + 1) * t - r) + e
                }],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function (t, e, n, i, r) {
                    return void 0 === r && (r = 1.70158), n * ((t = t / i - 1) * t * ((r + 1) * t + r) + 1) + e
                }],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function (t, e, n, i, r) {
                    return void 0 === r && (r = 1.70158), (t /= i / 2) < 1 ? n / 2 * t * t * ((1 + (r *= 1.525)) * t - r) + e : n / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + e
                }]
            },
            f = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            },
            d = document,
            h = window,
            p = "bkwld-tram",
            v = /[\-\.0-9]/g,
            m = /[A-Z]/,
            w = /^(rgb|#)/,
            g = /(em|cm|mm|in|pt|pc|px)$/,
            b = /(em|cm|mm|in|pt|pc|px|%)$/,
            y = /(deg|rad|turn)$/,
            x = /(all|none) 0s ease 0s/,
            k = /^(width|height)$/,
            _ = " ",
            T = d.createElement("a"),
            O = ["Webkit", "Moz", "O", "ms"],
            E = ["-webkit-", "-moz-", "-o-", "-ms-"],
            z = function (t) {
                if (t in T.style) return {
                    dom: t,
                    css: t
                };
                var e, n, i = "",
                    r = t.split("-");
                for (e = 0; e < r.length; e++) i += r[e].charAt(0).toUpperCase() + r[e].slice(1);
                for (e = 0; e < O.length; e++)
                    if ((n = O[e] + i) in T.style) return {
                        dom: n,
                        css: E[e] + t
                    }
            },
            j = e.support = {
                bind: Function.prototype.bind,
                transform: z("transform"),
                transition: z("transition"),
                backface: z("backface-visibility"),
                timing: z("transition-timing-function")
            };
        if (j.transition) {
            var M = j.timing.dom;
            if (T.style[M] = l["ease-in-back"][0], !T.style[M])
                for (var A in f) l[A][0] = f[A]
        }
        var L = e.frame = function () {
                var t = h.requestAnimationFrame || h.webkitRequestAnimationFrame || h.mozRequestAnimationFrame || h.oRequestAnimationFrame || h.msRequestAnimationFrame;
                return t && j.bind ? t.bind(h) : function (t) {
                    h.setTimeout(t, 16)
                }
            }(),
            C = e.now = function () {
                var t = h.performance,
                    e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
                return e && j.bind ? e.bind(t) : Date.now || function () {
                    return +new Date
                }
            }(),
            q = c(function (e) {
                function r(t, e) {
                    var n = function (t) {
                            for (var e = -1, n = t ? t.length : 0, i = []; ++e < n;) {
                                var r = t[e];
                                r && i.push(r)
                            }
                            return i
                        }(("" + t).split(_)),
                        i = n[0];
                    e = e || {};
                    var r = U[i];
                    if (!r) return u("Unsupported property: " + i);
                    if (!e.weak || !this.props[i]) {
                        var o = r[0],
                            a = this.props[i];
                        return a || (a = this.props[i] = new o.Bare), a.init(this.$el, n, r, e), a
                    }
                }

                function o(t, e, i) {
                    if (t) {
                        var o = void 0 === t ? "undefined" : n(t);
                        if (e || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == o && e) return this.timer = new P({
                            duration: t,
                            context: this,
                            complete: a
                        }), void(this.active = !0);
                        if ("string" == o && e) {
                            switch (t) {
                                case "hide":
                                    l.call(this);
                                    break;
                                case "stop":
                                    c.call(this);
                                    break;
                                case "redraw":
                                    f.call(this);
                                    break;
                                default:
                                    r.call(this, t, i && i[1])
                            }
                            return a.call(this)
                        }
                        if ("function" == o) return void t.call(this, this);
                        if ("object" == o) {
                            var u = 0;
                            h.call(this, t, function (t, e) {
                                t.span > u && (u = t.span), t.stop(), t.animate(e)
                            }, function (t) {
                                "wait" in t && (u = s(t.wait, 0))
                            }), d.call(this), u > 0 && (this.timer = new P({
                                duration: u,
                                context: this
                            }), this.active = !0, e && (this.timer.complete = a));
                            var p = this,
                                v = !1,
                                m = {};
                            L(function () {
                                h.call(p, t, function (t) {
                                    t.active && (v = !0, m[t.name] = t.nextStyle)
                                }), v && p.$el.css(m)
                            })
                        }
                    }
                }

                function a() {
                    if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                        var t = this.queue.shift();
                        o.call(this, t.options, !0, t.args)
                    }
                }

                function c(t) {
                    this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                    var e;
                    "string" == typeof t ? (e = {}, e[t] = 1) : e = "object" == (void 0 === t ? "undefined" : n(t)) && null != t ? t : this.props, h.call(this, e, v), d.call(this)
                }

                function l() {
                    c.call(this), this.el.style.display = "none"
                }

                function f() {
                    this.el.offsetHeight
                }

                function d() {
                    var t, e, n = [];
                    this.upstream && n.push(this.upstream);
                    for (t in this.props)(e = this.props[t]).active && n.push(e.string);
                    n = n.join(","), this.style !== n && (this.style = n, this.el.style[j.transition.dom] = n)
                }

                function h(t, e, n) {
                    var o, a, s, u, c = e !== v,
                        l = {};
                    for (o in t) s = t[o], o in Z ? (l.transform || (l.transform = {}), l.transform[o] = s) : (m.test(o) && (o = i(o)), o in U ? l[o] = s : (u || (u = {}), u[o] = s));
                    for (o in l) {
                        if (s = l[o], !(a = this.props[o])) {
                            if (!c) continue;
                            a = r.call(this, o)
                        }
                        e.call(this, a, s)
                    }
                    n && u && n.call(this, u)
                }

                function v(t) {
                    t.stop()
                }

                function w(t, e) {
                    t.set(e)
                }

                function g(t) {
                    this.$el.css(t)
                }

                function b(t, n) {
                    e[t] = function () {
                        return this.children ? function (t, e) {
                            var n, i = this.children.length;
                            for (n = 0; i > n; n++) t.apply(this.children[n], e);
                            return this
                        }.call(this, n, arguments) : (this.el && n.apply(this, arguments), this)
                    }
                }
                e.init = function (e) {
                    if (this.$el = t(e), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, F.keepInherited && !F.fallback) {
                        var n = X(this.el, "transition");
                        n && !x.test(n) && (this.upstream = n)
                    }
                    j.backface && F.hideBackface && H(this.el, j.backface.css, "hidden")
                }, b("add", r), b("start", o), b("wait", function (t) {
                    t = s(t, 0), this.active ? this.queue.push({
                        options: t
                    }) : (this.timer = new P({
                        duration: t,
                        context: this,
                        complete: a
                    }), this.active = !0)
                }), b("then", function (t) {
                    return this.active ? (this.queue.push({
                        options: t,
                        args: arguments
                    }), void(this.timer.complete = a)) : u("No active transition timer. Use start() or wait() before then().")
                }), b("next", a), b("stop", c), b("set", function (t) {
                    c.call(this, t), h.call(this, t, w, g)
                }), b("show", function (t) {
                    "string" != typeof t && (t = "block"), this.el.style.display = t
                }), b("hide", l), b("redraw", f), b("destroy", function () {
                    c.call(this), t.removeData(this.el, p), this.$el = this.el = null
                })
            }),
            S = c(q, function (e) {
                function n(e, n) {
                    var i = t.data(e, p) || t.data(e, p, new q.Bare);
                    return i.el || i.init(e), n ? i.start(n) : i
                }
                e.init = function (e, i) {
                    var r = t(e);
                    if (!r.length) return this;
                    if (1 === r.length) return n(r[0], i);
                    var o = [];
                    return r.each(function (t, e) {
                        o.push(n(e, i))
                    }), this.children = o, this
                }
            }),
            $ = c(function (t) {
                function e() {
                    var t = this.get();
                    this.update("auto");
                    var e = this.get();
                    return this.update(t), e
                }
                var i = 500,
                    r = "ease",
                    a = 0;
                t.init = function (t, e, n, o) {
                    this.$el = t, this.el = t[0];
                    var u = e[0];
                    n[2] && (u = n[2]), W[u] && (u = W[u]), this.name = u, this.type = n[1], this.duration = s(e[1], this.duration, i), this.ease = function (t, e, n) {
                        return void 0 !== e && (n = e), t in l ? t : n
                    }(e[2], this.ease, r), this.delay = s(e[3], this.delay, a), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = k.test(this.name), this.unit = o.unit || this.unit || F.defaultUnit, this.angle = o.angle || this.angle || F.defaultAngle, F.fallback || o.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + _ + this.duration + "ms" + ("ease" != this.ease ? _ + l[this.ease][0] : "") + (this.delay ? _ + this.delay + "ms" : ""))
                }, t.set = function (t) {
                    t = this.convert(t, this.type), this.update(t), this.redraw()
                }, t.transition = function (t) {
                    this.active = !0, t = this.convert(t, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))), this.nextStyle = t
                }, t.fallback = function (t) {
                    var n = this.el.style[this.name] || this.convert(this.get(), this.type);
                    t = this.convert(t, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))), this.tween = new B({
                        from: n,
                        to: t,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }, t.get = function () {
                    return X(this.el, this.name)
                }, t.update = function (t) {
                    H(this.el, this.name, t)
                }, t.stop = function () {
                    (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, H(this.el, this.name, this.get()));
                    var t = this.tween;
                    t && t.context && t.destroy()
                }, t.convert = function (t, e) {
                    if ("auto" == t && this.auto) return t;
                    var i, r = "number" == typeof t,
                        a = "string" == typeof t;
                    switch (e) {
                        case "number":
                            if (r) return t;
                            if (a && "" === t.replace(v, "")) return +t;
                            i = "number(unitless)";
                            break;
                        case w:
                            if (a) {
                                if ("" === t && this.original) return this.original;
                                if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : function (t) {
                                    var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
                                    return (e ? o(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                                }(t)
                            }
                            i = "hex or rgb string";
                            break;
                        case g:
                            if (r) return t + this.unit;
                            if (a && e.test(t)) return t;
                            i = "number(px) or string(unit)";
                            break;
                        case b:
                            if (r) return t + this.unit;
                            if (a && e.test(t)) return t;
                            i = "number(px) or string(unit or %)";
                            break;
                        case y:
                            if (r) return t + this.angle;
                            if (a && e.test(t)) return t;
                            i = "number(deg) or string(angle)";
                            break;
                        case "unitless":
                            if (r) return t;
                            if (a && b.test(t)) return t;
                            i = "number(unitless) or string(unit or %)"
                    }
                    return function (t, e) {
                        u("Type warning: Expected: [" + t + "] Got: [" + (void 0 === e ? "undefined" : n(e)) + "] " + e)
                    }(i, t), t
                }, t.redraw = function () {
                    this.el.offsetHeight
                }
            }),
            I = c($, function (t, e) {
                t.init = function () {
                    e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), w))
                }
            }),
            D = c($, function (t, e) {
                t.init = function () {
                    e.init.apply(this, arguments), this.animate = this.fallback
                }, t.get = function () {
                    return this.$el[this.name]()
                }, t.update = function (t) {
                    this.$el[this.name](t)
                }
            }),
            R = c($, function (t, e) {
                function n(t, e) {
                    var n, i, r, o, a;
                    for (n in t) r = (o = Z[n])[0], i = o[1] || n, a = this.convert(t[n], r), e.call(this, i, a, r)
                }
                t.init = function () {
                    e.init.apply(this, arguments), this.current || (this.current = {}, Z.perspective && F.perspective && (this.current.perspective = F.perspective, H(this.el, this.name, this.style(this.current)), this.redraw()))
                }, t.set = function (t) {
                    n.call(this, t, function (t, e) {
                        this.current[t] = e
                    }), H(this.el, this.name, this.style(this.current)), this.redraw()
                }, t.transition = function (t) {
                    var e = this.values(t);
                    this.tween = new N({
                        current: this.current,
                        values: e,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var n, i = {};
                    for (n in this.current) i[n] = n in e ? e[n] : this.current[n];
                    this.active = !0, this.nextStyle = this.style(i)
                }, t.fallback = function (t) {
                    var e = this.values(t);
                    this.tween = new N({
                        current: this.current,
                        values: e,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }, t.update = function () {
                    H(this.el, this.name, this.style(this.current))
                }, t.style = function (t) {
                    var e, n = "";
                    for (e in t) n += e + "(" + t[e] + ") ";
                    return n
                }, t.values = function (t) {
                    var e, i = {};
                    return n.call(this, t, function (t, n, r) {
                        i[t] = n, void 0 === this.current[t] && (e = 0, ~t.indexOf("scale") && (e = 1), this.current[t] = this.convert(e, r))
                    }), i
                }
            }),
            B = c(function (e) {
                function n() {
                    var t, e, i, r = s.length;
                    if (r)
                        for (L(n), e = C(), t = r; t--;)(i = s[t]) && i.render(e)
                }
                var i = {
                    ease: l.ease[1],
                    from: 0,
                    to: 1
                };
                e.init = function (t) {
                    this.duration = t.duration || 0, this.delay = t.delay || 0;
                    var e = t.ease || i.ease;
                    l[e] && (e = l[e][1]), "function" != typeof e && (e = i.ease), this.ease = e, this.update = t.update || a, this.complete = t.complete || a, this.context = t.context || this, this.name = t.name;
                    var n = t.from,
                        r = t.to;
                    void 0 === n && (n = i.from), void 0 === r && (r = i.to), this.unit = t.unit || "", "number" == typeof n && "number" == typeof r ? (this.begin = n, this.change = r - n) : this.format(r, n), this.value = this.begin + this.unit, this.start = C(), !1 !== t.autoplay && this.play()
                }, e.play = function () {
                    this.active || (this.start || (this.start = C()), this.active = !0, function (t) {
                        1 === s.push(t) && L(n)
                    }(this))
                }, e.stop = function () {
                    this.active && (this.active = !1, function (e) {
                        var n, i = t.inArray(e, s);
                        i >= 0 && (n = s.slice(i + 1), s.length = i, n.length && (s = s.concat(n)))
                    }(this))
                }, e.render = function (t) {
                    var e, n = t - this.start;
                    if (this.delay) {
                        if (n <= this.delay) return;
                        n -= this.delay
                    }
                    if (n < this.duration) {
                        var i = this.ease(n, 0, 1, this.duration);
                        return e = this.startRGB ? function (t, e, n) {
                            return o(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2]))
                        }(this.startRGB, this.endRGB, i) : function (t) {
                            return Math.round(t * c) / c
                        }(this.begin + i * this.change), this.value = e + this.unit, void this.update.call(this.context, this.value)
                    }
                    e = this.endHex || this.begin + this.change, this.value = e + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                }, e.format = function (t, e) {
                    if (e += "", "#" == (t += "").charAt(0)) return this.startRGB = r(e), this.endRGB = r(t), this.endHex = t, this.begin = 0, void(this.change = 1);
                    if (!this.unit) {
                        var n = e.replace(v, "");
                        n !== t.replace(v, "") && function (t, e, n) {
                            u("Units do not match [" + t + "]: " + e + ", " + n)
                        }("tween", e, t), this.unit = n
                    }
                    e = parseFloat(e), t = parseFloat(t), this.begin = this.value = e, this.change = t - e
                }, e.destroy = function () {
                    this.stop(), this.context = null, this.ease = this.update = this.complete = a
                };
                var s = [],
                    c = 1e3
            }),
            P = c(B, function (t) {
                t.init = function (t) {
                    this.duration = t.duration || 0, this.complete = t.complete || a, this.context = t.context, this.play()
                }, t.render = function (t) {
                    t - this.start < this.duration || (this.complete.call(this.context), this.destroy())
                }
            }),
            N = c(B, function (t, e) {
                t.init = function (t) {
                    this.context = t.context, this.update = t.update, this.tweens = [], this.current = t.current;
                    var e, n;
                    for (e in t.values) n = t.values[e], this.current[e] !== n && this.tweens.push(new B({
                        name: e,
                        from: this.current[e],
                        to: n,
                        duration: t.duration,
                        delay: t.delay,
                        ease: t.ease,
                        autoplay: !1
                    }));
                    this.play()
                }, t.render = function (t) {
                    var e, n, i = !1;
                    for (e = this.tweens.length; e--;)(n = this.tweens[e]).context && (n.render(t), this.current[n.name] = n.value, i = !0);
                    return i ? void(this.update && this.update.call(this.context)) : this.destroy()
                }, t.destroy = function () {
                    if (e.destroy.call(this), this.tweens) {
                        var t;
                        for (t = this.tweens.length; t--;) this.tweens[t].destroy();
                        this.tweens = null, this.current = null
                    }
                }
            }),
            F = e.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !j.transition,
                agentTests: []
            };
        e.fallback = function (t) {
            if (!j.transition) return F.fallback = !0;
            F.agentTests.push("(" + t + ")");
            var e = new RegExp(F.agentTests.join("|"), "i");
            F.fallback = e.test(navigator.userAgent)
        }, e.fallback("6.0.[2-5] Safari"), e.tween = function (t) {
            return new B(t)
        }, e.delay = function (t, e, n) {
            return new P({
                complete: e,
                duration: t,
                context: n
            })
        }, t.fn.tram = function (t) {
            return e.call(null, this, t)
        };
        var H = t.style,
            X = t.css,
            W = {
                transform: j.transform && j.transform.css
            },
            U = {
                color: [I, w],
                background: [I, w, "background-color"],
                "outline-color": [I, w],
                "border-color": [I, w],
                "border-top-color": [I, w],
                "border-right-color": [I, w],
                "border-bottom-color": [I, w],
                "border-left-color": [I, w],
                "border-width": [$, g],
                "border-top-width": [$, g],
                "border-right-width": [$, g],
                "border-bottom-width": [$, g],
                "border-left-width": [$, g],
                "border-spacing": [$, g],
                "letter-spacing": [$, g],
                margin: [$, g],
                "margin-top": [$, g],
                "margin-right": [$, g],
                "margin-bottom": [$, g],
                "margin-left": [$, g],
                padding: [$, g],
                "padding-top": [$, g],
                "padding-right": [$, g],
                "padding-bottom": [$, g],
                "padding-left": [$, g],
                "outline-width": [$, g],
                opacity: [$, "number"],
                top: [$, b],
                right: [$, b],
                bottom: [$, b],
                left: [$, b],
                "font-size": [$, b],
                "text-indent": [$, b],
                "word-spacing": [$, b],
                width: [$, b],
                "min-width": [$, b],
                "max-width": [$, b],
                height: [$, b],
                "min-height": [$, b],
                "max-height": [$, b],
                "line-height": [$, "unitless"],
                "scroll-top": [D, "number", "scrollTop"],
                "scroll-left": [D, "number", "scrollLeft"]
            },
            Z = {};
        j.transform && (U.transform = [R], Z = {
            x: [b, "translateX"],
            y: [b, "translateY"],
            rotate: [y],
            rotateX: [y],
            rotateY: [y],
            scale: ["number"],
            scaleX: ["number"],
            scaleY: ["number"],
            skew: [y],
            skewX: [y],
            skewY: [y]
        }), j.transform && j.backface && (Z.z = [b, "translateZ"], Z.rotateZ = [y], Z.scaleZ = ["number"], Z.perspective = [g]);
        var Y = /ms/,
            G = /s|\./;
        return t.tram = e
    }(window.jQuery)
}, function (t, e, n) {
    "use strict";
    var i = window.jQuery,
        r = {},
        o = [],
        a = {
            reset: function (t, e) {
                e.__wf_intro = null
            },
            intro: function (t, e) {
                e.__wf_intro || (e.__wf_intro = !0, i(e).triggerHandler(r.types.INTRO))
            },
            outro: function (t, e) {
                e.__wf_intro && (e.__wf_intro = null, i(e).triggerHandler(r.types.OUTRO))
            }
        };
    r.triggers = {}, r.types = {
        INTRO: "w-ix-intro.w-ix",
        OUTRO: "w-ix-outro.w-ix"
    }, r.init = function () {
        for (var t = o.length, e = 0; e < t; e++) {
            var n = o[e];
            n[0](0, n[1])
        }
        o = [], i.extend(r.triggers, a)
    }, r.async = function () {
        for (var t in a) {
            var e = a[t];
            a.hasOwnProperty(t) && (r.triggers[t] = function (t, n) {
                o.push([e, n])
            })
        }
    }, r.async(), t.exports = r
}, function (t, e, n) {
    "use strict";

    function i(t, e) {
        var n = document.createEvent("CustomEvent");
        n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n)
    }
    var r = n(2),
        o = window.jQuery,
        a = {},
        s = {
            reset: function (t, e) {
                r.triggers.reset(t, e)
            },
            intro: function (t, e) {
                r.triggers.intro(t, e), i(e, "COMPONENT_ACTIVE")
            },
            outro: function (t, e) {
                r.triggers.outro(t, e), i(e, "COMPONENT_INACTIVE")
            }
        };
    a.triggers = {}, a.types = {
        INTRO: "w-ix-intro.w-ix",
        OUTRO: "w-ix-outro.w-ix"
    }, o.extend(a.triggers, s), t.exports = a
}, function (t, e, n) {
    n(5), n(7), n(8), n(10), n(11), n(12), n(13), n(14), n(15), t.exports = n(16)
}, function (t, e, n) {
    var i = n(0);
    i.define("brand", t.exports = function (t) {
        function e() {
            var t = a.children(s),
                e = t.length && t.get(0) === n,
                r = i.env("editor");
            e ? r && t.remove() : (t.length && t.remove(), r || a.append(n))
        }
        var n, r = {},
            o = t("html"),
            a = t("body"),
            s = ".s",
            u = window.location,
            c = /PhantomJS/i.test(navigator.userAgent);
        return r.ready = function () {
            var i = o.attr("data-wf-status"),
                r = o.attr("data-wf-domain") || "";
            /\.webflow\.io$/i.test(r) && u.hostname !== r && (i = !0), i && !c && (n = n || function () {
                var e = t('<a class="sddge"></a>').attr("", "hasd"),
                    n = t("<img>"),
                    i = t("<img>");
                return e.append(n, i), e[0]
            }(), e(), setTimeout(e, 500))
        }, r
    })
}, function (t, e, n) {
    var i = window.$,
        r = n(1) && i.tram;
    /*!
     * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
     * _.each
     * _.map
     * _.find
     * _.filter
     * _.any
     * _.contains
     * _.delay
     * _.defer
     * _.throttle (webflow)
     * _.debounce
     * _.keys
     * _.has
     * _.now
     *
     * http://underscorejs.org
     * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     * Underscore may be freely distributed under the MIT license.
     * @license MIT
     */
    t.exports = function () {
        var t = {};
        t.VERSION = "1.6.0-Webflow";
        var e = {},
            n = Array.prototype,
            i = Object.prototype,
            o = Function.prototype,
            a = (n.push, n.slice),
            s = (n.concat, i.toString, i.hasOwnProperty),
            u = n.forEach,
            c = n.map,
            l = (n.reduce, n.reduceRight, n.filter),
            f = (n.every, n.some),
            d = n.indexOf,
            h = (n.lastIndexOf, Array.isArray, Object.keys),
            p = (o.bind, t.each = t.forEach = function (n, i, r) {
                if (null == n) return n;
                if (u && n.forEach === u) n.forEach(i, r);
                else if (n.length === +n.length) {
                    for (var o = 0, a = n.length; o < a; o++)
                        if (i.call(r, n[o], o, n) === e) return
                } else {
                    var s = t.keys(n);
                    for (o = 0, a = s.length; o < a; o++)
                        if (i.call(r, n[s[o]], s[o], n) === e) return
                }
                return n
            });
        t.map = t.collect = function (t, e, n) {
            var i = [];
            return null == t ? i : c && t.map === c ? t.map(e, n) : (p(t, function (t, r, o) {
                i.push(e.call(n, t, r, o))
            }), i)
        }, t.find = t.detect = function (t, e, n) {
            var i;
            return v(t, function (t, r, o) {
                if (e.call(n, t, r, o)) return i = t, !0
            }), i
        }, t.filter = t.select = function (t, e, n) {
            var i = [];
            return null == t ? i : l && t.filter === l ? t.filter(e, n) : (p(t, function (t, r, o) {
                e.call(n, t, r, o) && i.push(t)
            }), i)
        };
        var v = t.some = t.any = function (n, i, r) {
            i || (i = t.identity);
            var o = !1;
            return null == n ? o : f && n.some === f ? n.some(i, r) : (p(n, function (t, n, a) {
                if (o || (o = i.call(r, t, n, a))) return e
            }), !!o)
        };
        t.contains = t.include = function (t, e) {
            return null != t && (d && t.indexOf === d ? -1 != t.indexOf(e) : v(t, function (t) {
                return t === e
            }))
        }, t.delay = function (t, e) {
            var n = a.call(arguments, 2);
            return setTimeout(function () {
                return t.apply(null, n)
            }, e)
        }, t.defer = function (e) {
            return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)))
        }, t.throttle = function (t) {
            var e, n, i;
            return function () {
                e || (e = !0, n = arguments, i = this, r.frame(function () {
                    e = !1, t.apply(i, n)
                }))
            }
        }, t.debounce = function (e, n, i) {
            var r, o, a, s, u, c = function c() {
                var l = t.now() - s;
                l < n ? r = setTimeout(c, n - l) : (r = null, i || (u = e.apply(a, o), a = o = null))
            };
            return function () {
                a = this, o = arguments, s = t.now();
                var l = i && !r;
                return r || (r = setTimeout(c, n)), l && (u = e.apply(a, o), a = o = null), u
            }
        }, t.defaults = function (e) {
            if (!t.isObject(e)) return e;
            for (var n = 1, i = arguments.length; n < i; n++) {
                var r = arguments[n];
                for (var o in r) void 0 === e[o] && (e[o] = r[o])
            }
            return e
        }, t.keys = function (e) {
            if (!t.isObject(e)) return [];
            if (h) return h(e);
            var n = [];
            for (var i in e) t.has(e, i) && n.push(i);
            return n
        }, t.has = function (t, e) {
            return s.call(t, e)
        }, t.isObject = function (t) {
            return t === Object(t)
        }, t.now = Date.now || function () {
            return (new Date).getTime()
        }, t.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var m = /(.)^/,
            w = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            g = /\\|'|\r|\n|\u2028|\u2029/g,
            b = function (t) {
                return "\\" + w[t]
            };
        return t.template = function (e, n, i) {
            !n && i && (n = i), n = t.defaults({}, n, t.templateSettings);
            var r = RegExp([(n.escape || m).source, (n.interpolate || m).source, (n.evaluate || m).source].join("|") + "|$", "g"),
                o = 0,
                a = "__p+='";
            e.replace(r, function (t, n, i, r, s) {
                return a += e.slice(o, s).replace(g, b), o = s + t.length, n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? a += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : r && (a += "';\n" + r + "\n__p+='"), t
            }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
            try {
                var s = new Function(n.variable || "obj", "_", a)
            } catch (t) {
                throw t.source = a, t
            }
            var u = function (e) {
                    return s.call(this, e, t)
                },
                c = n.variable || "obj";
            return u.source = "function(" + c + "){\n" + a + "}", u
        }, t
    }()
}, function (t, e, n) {
    var i = n(0);
    i.define("edit", t.exports = function (t, e, n) {
        function r() {
            u || /\?edit/.test(f.hash) && h()
        }

        function o(e) {
            e ? function (e, n) {
                t.ajax({
                    type: "GET",
                    url: e,
                    dataType: "script",
                    cache: !0
                }).then(n, a)
            }(function (t) {
                return t.indexOf("//") >= 0 ? t : s("https://editor-api.webflow.com" + t)
            }(e.scriptPath), function () {
                window.WebflowEditor(e)
            }) : console.error("Could not load editor data")
        }

        function a(t, e, n) {
            throw console.error("Could not load editor script: " + e), n
        }

        function s(t) {
            return t.replace(/([^:])\/\//g, "$1/")
        }
        if (n = n || {}, (i.env("test") || i.env("frame")) && !n.fixture) return {
            exit: 1
        };
        var u, c = t(window),
            l = t(document.documentElement),
            f = document.location,
            d = "hashchange",
            h = n.load || function () {
                u = !0, window.WebflowEditor = !0, c.off(d, r), t.ajax({
                    url: s("https://editor-api.webflow.com/api/editor/view"),
                    data: {
                        siteId: l.attr("data-wf-site")
                    },
                    xhrFields: {
                        withCredentials: !0
                    },
                    dataType: "json",
                    crossDomain: !0,
                    success: o
                })
            },
            p = !1;
        try {
            p = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
        } catch (t) {}
        return p ? h() : f.search ? (/[?&](edit)(?:[=&?]|$)/.test(f.search) || /\?edit$/.test(f.href)) && h() : c.on(d, r).triggerHandler(d), {}
    })
}, function (t, e, n) {
    var i = n(0);
    i.define("forms", t.exports = function (t, e) {
        function r(e, n) {
            var i = t(n),
                r = t.data(n, b);
            r || (r = t.data(n, b, {
                form: i
            })), o(r);
            var a = i.closest("div.w-form");
            r.done = a.find("> .w-form-done"), r.fail = a.find("> .w-form-fail");
            var s = r.action = i.attr("action");
            r.handler = null, r.redirect = i.attr("data-redirect"), T.test(s) ? r.handler = c : s || (p ? r.handler = u : O())
        }

        function o(t) {
            var e = t.btn = t.form.find(':input[type="submit"]');
            t.wait = t.btn.attr("data-wait") || null, t.success = !1, e.prop("disabled", !1), t.label && e.val(t.label)
        }

        function a(t) {
            var e = t.btn,
                n = t.wait;
            e.prop("disabled", !0), n && (t.label = e.val(), e.val(n))
        }

        function s(e, n) {
            var i = null;
            return n = n || {}, e.find(':input:not([type="submit"])').each(function (r, o) {
                var a = t(o),
                    s = a.attr("type"),
                    u = a.attr("data-name") || a.attr("name") || "Field " + (r + 1),
                    c = a.val();
                if ("checkbox" === s && (c = a.is(":checked")), "radio" === s) {
                    if (null === n[u] || "string" == typeof n[u]) return;
                    c = e.find('input[name="' + a.attr("name") + '"]:checked').val() || null
                }
                "string" == typeof c && (c = t.trim(c)), n[u] = c, i = i || function (t, e, n, i) {
                    var r = null;
                    "password" === e ? r = "Passwords cannot be submitted." : t.attr("required") && (i ? (y.test(n) || y.test(t.attr("type"))) && (x.test(i) || (r = "Please enter a valid email address for: " + n)) : r = "Please fill out the required field: " + n);
                    return r
                }(a, s, u, c)
            }), i
        }

        function u(e) {
            o(e);
            var n = e.form,
                r = {
                    name: n.attr("data-name") || n.attr("name") || "Untitled Form",
                    source: w.href,
                    test: i.env(),
                    fields: {},
                    dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(n.html())
                };
            f(e);
            var u = s(n, r.fields);
            if (u) return k(u);
            if (a(e), p) {
                var c = "https://webflow.com/api/v1/form/" + p;
                g && c.indexOf("https://webflow.com") >= 0 && (c = c.replace("https://webflow.com", "http://formdata.webflow.com")), t.ajax({
                    url: c,
                    type: "POST",
                    data: r,
                    dataType: "json",
                    crossDomain: !0
                }).done(function () {
                    e.success = !0, l(e)
                }).fail(function () {
                    l(e)
                })
            } else l(e)
        }

        function c(n) {
            o(n);
            var i = n.form,
                r = {};
            if (!/^https/.test(w.href) || /^https/.test(n.action)) {
                f(n);
                var u = s(i, r);
                if (u) return k(u);
                a(n);
                var c;
                e.each(r, function (t, e) {
                    y.test(e) && (r.EMAIL = t), /^((full[ _-]?)?name)$/i.test(e) && (c = t), /^(first[ _-]?name)$/i.test(e) && (r.FNAME = t), /^(last[ _-]?name)$/i.test(e) && (r.LNAME = t)
                }), c && !r.FNAME && (c = c.split(" "), r.FNAME = c[0], r.LNAME = r.LNAME || c[1]);
                var d = n.action.replace("/post?", "/post-json?") + "&c=?",
                    h = d.indexOf("u=") + 2;
                h = d.substring(h, d.indexOf("&", h));
                var p = d.indexOf("id=") + 3;
                p = d.substring(p, d.indexOf("&", p)), r["b_" + h + "_" + p] = "", t.ajax({
                    url: d,
                    data: r,
                    dataType: "jsonp"
                }).done(function (t) {
                    n.success = "success" === t.result || /already/.test(t.msg), n.success || console.info("MailChimp error: " + t.msg), l(n)
                }).fail(function () {
                    l(n)
                })
            } else i.attr("method", "post")
        }

        function l(t) {
            var e = t.form,
                n = t.redirect,
                r = t.success;
            r && n ? i.location(n) : (t.done.toggle(r), t.fail.toggle(!r), e.toggle(!r), o(t))
        }

        function f(t) {
            t.evt && t.evt.preventDefault(), t.evt = null
        }
        var d = {};
        n(9);
        var h, p, v, m = t(document),
            w = window.location,
            g = window.XDomainRequest && !window.atob,
            b = ".w-form",
            y = /e(-)?mail/i,
            x = /^\S+@\S+$/,
            k = window.alert,
            _ = i.env(),
            T = /list-manage[1-9]?.com/i,
            O = e.debounce(function () {
                k("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);
        return d.ready = d.design = d.preview = function () {
            p = t("html").attr("data-wf-site"), (h = t(b + " form")).length && h.each(r), _ || v || (v = !0, m.on("submit", b + " form", function (e) {
                var n = t.data(this, b);
                n.handler && (n.evt = e, n.handler(n))
            }))
        }, d
    })
}, function (t, e) {
    /*!
     * jQuery-ajaxTransport-XDomainRequest - v1.0.3
     * 2014-12-16 WEBFLOW - Removed UMD wrapper
     * https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest
     * Copyright (c) 2014 Jason Moon (@JSONMOON)
     * @license MIT (/blob/master/LICENSE.txt)
     */
    t.exports = function (t) {
        if (!t.support.cors && t.ajaxTransport && window.XDomainRequest) {
            var e = /^https?:\/\//i,
                n = /^get|post$/i,
                i = new RegExp("^" + location.protocol, "i");
            t.ajaxTransport("* text html xml json", function (r, o, a) {
                if (r.crossDomain && r.async && n.test(r.type) && e.test(r.url) && i.test(r.url)) {
                    var s = null;
                    return {
                        send: function (e, n) {
                            var i = "",
                                a = (o.dataType || "").toLowerCase();
                            s = new XDomainRequest, /^\d+$/.test(o.timeout) && (s.timeout = o.timeout), s.ontimeout = function () {
                                n(500, "timeout")
                            }, s.onload = function () {
                                var e = "Content-Length: " + s.responseText.length + "\r\nContent-Type: " + s.contentType,
                                    i = {
                                        code: 200,
                                        message: "success"
                                    },
                                    r = {
                                        text: s.responseText
                                    };
                                try {
                                    if ("html" === a || /text\/html/i.test(s.contentType)) r.html = s.responseText;
                                    else if ("json" === a || "text" !== a && /\/json/i.test(s.contentType)) try {
                                        r.json = t.parseJSON(s.responseText)
                                    } catch (t) {
                                        i.code = 500, i.message = "parseerror"
                                    } else if ("xml" === a || "text" !== a && /\/xml/i.test(s.contentType)) {
                                        var o = new ActiveXObject("Microsoft.XMLDOM");
                                        o.async = !1;
                                        try {
                                            o.loadXML(s.responseText)
                                        } catch (t) {
                                            o = void 0
                                        }
                                        if (!o || !o.documentElement || o.getElementsByTagName("parsererror").length) throw i.code = 500, i.message = "parseerror", "Invalid XML: " + s.responseText;
                                        r.xml = o
                                    }
                                } catch (t) {
                                    throw t
                                } finally {
                                    n(i.code, i.message, r, e)
                                }
                            }, s.onprogress = function () {}, s.onerror = function () {
                                n(500, "error", {
                                    text: s.responseText
                                })
                            }, o.data && (i = "string" === t.type(o.data) ? o.data : t.param(o.data)), s.open(r.type, r.url), s.send(i)
                        },
                        abort: function () {
                            s && s.abort()
                        }
                    }
                }
            })
        }
    }(window.jQuery)
}, function (t, e, n) {
    var i = n(0),
        r = n(2);
    i.define("ix", t.exports = function (t, e) {
        function n(t) {
            t && (O = {}, e.each(t, function (t) {
                O[t.slug] = t.value
            }), o())
        }

        function o() {
            ! function () {
                var e = t("[data-ix]");
                if (!e.length) return;
                e.each(u), e.each(a), E.length && (i.scroll.on(c), setTimeout(c, 1));
                z.length && i.load(l);
                j.length && setTimeout(f, M)
            }(), r.init(), i.redraw.up()
        }

        function a(n, o) {
            var a = t(o),
                u = a.attr("data-ix"),
                c = O[u];
            if (c) {
                var l = c.triggers;
                l && (m.style(a, c.style), e.each(l, function (t) {
                    function e() {
                        d(t, a, {
                            group: "A"
                        })
                    }

                    function n() {
                        d(t, a, {
                            group: "B"
                        })
                    }
                    var o = {},
                        u = t.type,
                        c = t.stepsB && t.stepsB.length;
                    if ("load" !== u) {
                        if ("click" === u) return a.on("click" + g, function (e) {
                            i.validClick(e.currentTarget) && ("#" === a.attr("href") && e.preventDefault(), d(t, a, {
                                group: o.clicked ? "B" : "A"
                            }), c && (o.clicked = !o.clicked))
                        }), void(T = T.add(a));
                        if ("hover" === u) return a.on("mouseenter" + g, e), a.on("mouseleave" + g, n), void(T = T.add(a));
                        if ("scroll" !== u) {
                            var l = A[u];
                            if (l) {
                                var f = a.closest(l);
                                return f.on(r.types.INTRO, e).on(r.types.OUTRO, n), void(T = T.add(f))
                            }
                        } else E.push({
                            el: a,
                            trigger: t,
                            state: {
                                active: !1
                            },
                            offsetTop: s(t.offsetTop),
                            offsetBot: s(t.offsetBot)
                        })
                    } else t.preload && !x ? z.push(e) : j.push(e)
                }))
            }
        }

        function s(t) {
            if (!t) return 0;
            t = String(t);
            var e = parseInt(t, 10);
            return e != e ? 0 : (t.indexOf("%") > 0 && (e /= 100) >= 1 && (e = .999), e)
        }

        function u(e, n) {
            t(n).off(g)
        }

        function c() {
            for (var t = w.scrollTop(), e = w.height(), n = E.length, i = 0; i < n; i++) {
                var r = E[i],
                    o = r.el,
                    a = r.trigger,
                    s = a.stepsB && a.stepsB.length,
                    u = r.state,
                    c = o.offset().top,
                    l = o.outerHeight(),
                    f = r.offsetTop,
                    h = r.offsetBot;
                f < 1 && f > 0 && (f *= e), h < 1 && h > 0 && (h *= e);
                var p = c + l - f >= t && c + h <= t + e;
                p !== u.active && ((!1 !== p || s) && (u.active = p, d(a, o, {
                    group: p ? "A" : "B"
                })))
            }
        }

        function l() {
            for (var t = z.length, e = 0; e < t; e++) z[e]()
        }

        function f() {
            for (var t = j.length, e = 0; e < t; e++) j[e]()
        }

        function d(e, n, r, o) {
            function a() {
                if (l) return d(e, n, r, !0);
                "auto" === w.width && m.set({
                    width: "auto"
                }), "auto" === w.height && m.set({
                    height: "auto"
                }), s && s()
            }
            var s = (r = r || {}).done,
                u = e.preserve3d;
            if (!p || r.force) {
                var c = r.group || "A",
                    l = e["loop" + c],
                    f = e["steps" + c];
                if (f && f.length) {
                    if (f.length < 2 && (l = !1), !o) {
                        var v = e.selector;
                        v && (n = e.descend ? n.find(v) : e.siblings ? n.siblings(v) : t(v), x && n.attr("data-ix-affect", 1)), k && n.addClass("w-ix-emptyfix"), u && n.css("transform-style", "preserve-3d")
                    }
                    for (var m = b(n), w = {
                            omit3d: !u
                        }, g = 0; g < f.length; g++) ! function (t, e, n) {
                        var r = "add",
                            o = "start";
                        n.start && (r = o = "then");
                        var a = e.transition;
                        if (a) {
                            a = a.split(",");
                            for (var s = 0; s < a.length; s++) {
                                var u = a[s];
                                t[r](u)
                            }
                        }
                        var c = h(e, n) || {};
                        null != c.width && (n.width = c.width);
                        null != c.height && (n.height = c.height);
                        if (null == a) {
                            n.start ? t.then(function () {
                                var e = this.queue;
                                this.set(c), c.display && (t.redraw(), i.redraw.up()), this.queue = e, this.next()
                            }) : (t.set(c), c.display && (t.redraw(), i.redraw.up()));
                            var l = c.wait;
                            null != l && (t.wait(l), n.start = !0)
                        } else {
                            if (c.display) {
                                var f = c.display;
                                delete c.display, n.start ? t.then(function () {
                                    var t = this.queue;
                                    this.set({
                                        display: f
                                    }).redraw(), i.redraw.up(), this.queue = t, this.next()
                                }) : (t.set({
                                    display: f
                                }).redraw(), i.redraw.up())
                            }
                            t[o](c), n.start = !0
                        }
                    }(m, f[g], w);
                    w.start ? m.then(a) : a()
                }
            }
        }

        function h(t, e) {
            var n = e && e.omit3d,
                i = {},
                r = !1;
            for (var o in t) "transition" !== o && "keysort" !== o && (!n || "z" !== o && "rotateX" !== o && "rotateY" !== o && "scaleZ" !== o) && (i[o] = t[o], r = !0);
            return r ? i : null
        }
        var p, v, m = {},
            w = t(window),
            g = ".w-ix",
            b = t.tram,
            y = i.env,
            x = y(),
            k = y.chrome && y.chrome < 35,
            _ = "none 0s ease 0s",
            T = t(),
            O = {},
            E = [],
            z = [],
            j = [],
            M = 1,
            A = {
                tabs: ".w-tab-link, .w-tab-pane",
                dropdown: ".w-dropdown",
                slider: ".w-slide",
                navbar: ".w-nav"
            };
        return m.init = function (t) {
            setTimeout(function () {
                n(t)
            }, 1)
        }, m.preview = function () {
            p = !1, M = 100, setTimeout(function () {
                n(window.__wf_ix)
            }, 1)
        }, m.design = function () {
            p = !0, m.destroy()
        }, m.destroy = function () {
            v = !0, T.each(u), i.scroll.off(c), r.async(), E = [], z = [], j = []
        }, m.ready = function () {
            if (x) return y("design") ? m.design() : m.preview();
            O && v && (v = !1, o())
        }, m.run = d, m.style = x ? function (e, n) {
            var i = b(e);
            if (!t.isEmptyObject(n)) {
                e.css("transition", "");
                var r = e.css("transition");
                r === _ && (r = i.upstream = null), i.upstream = _, i.set(h(n)), i.upstream = r
            }
        } : function (t, e) {
            b(t).set(h(e))
        }, m
    })
}, function (t, e, n) {
    var i = n(0);
    i.define("links", t.exports = function (t, e) {
        function n() {
            var t = c.scrollTop(),
                n = c.height();
            e.each(a, function (e) {
                var i = e.link,
                    o = e.sec,
                    a = o.offset().top,
                    s = o.outerHeight(),
                    u = .5 * n,
                    c = o.is(":visible") && a + s - u >= t && a + u <= t + n;
                e.active !== c && (e.active = c, r(i, h, c))
            })
        }

        function r(t, e, n) {
            var i = t.hasClass(e);
            n && i || (n || i) && (n ? t.addClass(e) : t.removeClass(e))
        }
        var o, a, s, u = {},
            c = t(window),
            l = i.env(),
            f = window.location,
            d = document.createElement("a"),
            h = "w--current",
            p = /^#[\w:.-]+$/,
            v = /index\.(html|php)$/,
            m = /\/$/;
        return u.ready = u.design = u.preview = function () {
            o = l && i.env("design"), s = i.env("slug") || f.pathname || "", i.scroll.off(n), a = [];
            for (var e = document.links, u = 0; u < e.length; ++u) ! function (e) {
                var n = o && e.getAttribute("href-disabled") || e.getAttribute("href");
                if (d.href = n, !(n.indexOf(":") >= 0)) {
                    var i = t(e);
                    if (0 === n.indexOf("#") && p.test(n)) {
                        var u = t(n);
                        u.length && a.push({
                            link: i,
                            sec: u,
                            active: !1
                        })
                    } else if ("#" !== n) {
                        var c = d.href === f.href || n === s || v.test(n) && m.test(s);
                        r(i, h, c)
                    }
                }
            }(e[u]);
            a.length && (i.scroll.on(n), n())
        }, u
    })
}, function (t, e, n) {
    var i = n(0);
    i.define("maps", t.exports = function (t, e) {
        function n() {
            function e() {
                window._wf_maps_loaded = function () {}, d = window.google, c.each(o), r(), i.resize.on(a), i.redraw.on(a)
            }(c = f.find(h)).length && (null === d ? (t.getScript("https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=_wf_maps_loaded&key=" + p), window._wf_maps_loaded = e) : e())
        }

        function r() {
            i.resize.off(a), i.redraw.off(a)
        }

        function o(e, n) {
            u(n, t(n).data())
        }

        function a() {
            c.each(s)
        }

        function s(t, e) {
            var n = u(e);
            d.maps.event.trigger(n.map, "resize"), n.setMapPosition()
        }

        function u(e, n) {
            var r = t.data(e, v);
            if (r) return r;
            var o = t(e);
            r = t.data(e, v, {
                latLng: "51.511214,-0.119824",
                tooltip: "",
                style: "roadmap",
                zoom: 12,
                marker: new d.maps.Marker({
                    draggable: !1
                }),
                infowindow: new d.maps.InfoWindow({
                    disableAutoPan: !0
                })
            });
            var a = n.widgetLatlng || r.latLng;
            r.latLng = a;
            var s = a.split(","),
                u = new d.maps.LatLng(s[0], s[1]);
            r.latLngObj = u;
            var c = !(i.env.touch && n.disableTouch);
            r.map = new d.maps.Map(e, {
                center: r.latLngObj,
                zoom: r.zoom,
                maxZoom: 18,
                mapTypeControl: !1,
                panControl: !1,
                streetViewControl: !1,
                scrollwheel: !n.disableScroll,
                draggable: c,
                zoomControl: !0,
                zoomControlOptions: {
                    style: d.maps.ZoomControlStyle.SMALL
                },
                mapTypeId: r.style
            }), r.marker.setMap(r.map), r.setMapPosition = function () {
                r.map.setCenter(r.latLngObj);
                var t = 0,
                    e = 0,
                    n = o.css(["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]);
                t -= parseInt(n.paddingLeft, 10), t += parseInt(n.paddingRight, 10), e -= parseInt(n.paddingTop, 10), e += parseInt(n.paddingBottom, 10), (t || e) && r.map.panBy(t, e), o.css("position", "")
            }, d.maps.event.addListener(r.map, "tilesloaded", function () {
                d.maps.event.clearListeners(r.map, "tilesloaded"), r.setMapPosition()
            }), r.setMapPosition(), r.marker.setPosition(r.latLngObj), r.infowindow.setPosition(r.latLngObj);
            var l = n.widgetTooltip;
            l && (r.tooltip = l, r.infowindow.setContent(l), r.infowindowOpen || (r.infowindow.open(r.map, r.marker), r.infowindowOpen = !0));
            var f = n.widgetStyle;
            f && r.map.setMapTypeId(f);
            var h = n.widgetZoom;
            return null != h && (r.zoom = h, r.map.setZoom(Number(h))), d.maps.event.addListener(r.marker, "click", function () {
                window.open("https://maps.google.com/?z=" + r.zoom + "&daddr=" + r.latLng)
            }), r
        }
        var c, l = {},
            f = t(document),
            d = null,
            h = ".w-widget-map",
            p = "AIzaSyBQ4EYEg4aRz9-yiCnerTV7bk8GCWgZOhk";
        l.ready = function () {
            i.env() || n()
        }, l.destroy = r;
        var v = "w-widget-map";
        return l
    })
}, function (t, e, n) {
    var i = n(0),
        r = n(3);
    i.define("navbar", t.exports = function (t, e) {
        function n() {
            i.resize.off(o)
        }

        function o() {
            m.each(f)
        }

        function a(n, r) {
            var o = t(r),
                a = t.data(r, T);
            a || (a = t.data(r, T, {
                open: !1,
                el: o,
                config: {}
            })), a.menu = o.find(".w-nav-menu"), a.links = a.menu.find(".w-nav-link"), a.dropdowns = a.menu.find(".w-dropdown"), a.button = o.find(".w-nav-button"), a.container = o.find(".w-container"), a.outside = function (n) {
                n.outside && x.off("tap" + T, n.outside);
                return e.debounce(function (e) {
                    if (n.open) {
                        var i = t(e.target).closest(".w-nav-menu");
                        n.menu.is(i) || p(n)
                    }
                })
            }(a), a.el.off(T), a.button.off(T), a.menu.off(T), c(a), w ? (u(a), a.el.on("setting" + T, function (t) {
                return function (n, i) {
                    i = i || {};
                    var r = y.width();
                    c(t), !0 === i.open && d(t, !0), !1 === i.open && p(t, !0), t.open && e.defer(function () {
                        r !== y.width() && l(t)
                    })
                }
            }(a))) : (! function (e) {
                if (e.overlay) return;
                e.overlay = t(_).appendTo(e.el), e.parent = e.menu.parent(), p(e, !0)
            }(a), a.button.on("tap" + T, function (t) {
                return e.debounce(function () {
                    t.open ? p(t) : d(t)
                })
            }(a)), a.menu.on("click" + T, "a", function (e) {
                return function (n) {
                    var r = t(this),
                        o = r.attr("href");
                    i.validClick(n.currentTarget) ? o && 0 === o.indexOf("#") && e.open && p(e) : n.preventDefault()
                }
            }(a))), f(n, r)
        }

        function s(e, n) {
            var i = t.data(n, T);
            i && (u(i), t.removeData(n, T))
        }

        function u(t) {
            t.overlay && (p(t, !0), t.overlay.remove(), t.overlay = null)
        }

        function c(t) {
            var n = {},
                i = t.config || {},
                r = n.animation = t.el.attr("data-animation") || "default";
            n.animOver = /^over/.test(r), n.animDirect = /left$/.test(r) ? -1 : 1, i.animation !== r && t.open && e.defer(l, t), n.easing = t.el.attr("data-easing") || "ease", n.easing2 = t.el.attr("data-easing2") || "ease";
            var o = t.el.attr("data-duration");
            n.duration = null != o ? Number(o) : 400, n.docHeight = t.el.attr("data-doc-height"), t.config = n
        }

        function l(t) {
            t.open && (p(t, !0), d(t, !0))
        }

        function f(e, n) {
            var i = t.data(n, T),
                r = i.collapsed = "none" !== i.button.css("display");
            if (!i.open || r || w || p(i, !0), i.container.length) {
                var o = function (e) {
                    var n = e.container.css(A);
                    "none" === n && (n = "");
                    return function (e, i) {
                        (i = t(i)).css(A, ""), "none" === i.css(A) && i.css(A, n)
                    }
                }(i);
                i.links.each(o), i.dropdowns.each(o)
            }
            i.open && h(i)
        }

        function d(t, e) {
            if (!t.open) {
                t.open = !0, t.menu.addClass(E), t.links.addClass(z), t.button.addClass(O);
                var n = t.config;
                "none" !== n.animation && b.support.transform || (e = !0);
                var r = h(t),
                    o = t.menu.outerHeight(!0),
                    a = t.menu.outerWidth(!0),
                    s = t.el.height(),
                    u = t.el[0];
                if (f(0, u), j.intro(0, u), i.redraw.up(), w || x.on("tap" + T, t.outside), !e) {
                    var c = "transform " + n.duration + "ms " + n.easing;
                    if (t.overlay && (M = t.menu.prev(), t.overlay.show().append(t.menu)), n.animOver) return b(t.menu).add(c).set({
                        x: n.animDirect * a,
                        height: r
                    }).start({
                        x: 0
                    }), void(t.overlay && t.overlay.width(a));
                    var l = s + o;
                    b(t.menu).add(c).set({
                        y: -l
                    }).start({
                        y: 0
                    })
                }
            }
        }

        function h(t) {
            var e = t.config,
                n = e.docHeight ? x.height() : v.height();
            return e.animOver ? t.menu.height(n) : "fixed" !== t.el.css("position") && (n -= t.el.height()), t.overlay && t.overlay.height(n), n
        }

        function p(t, e) {
            function n() {
                t.menu.height(""), b(t.menu).set({
                    x: 0,
                    y: 0
                }), t.menu.removeClass(E), t.links.removeClass(z), t.overlay && t.overlay.children().length && (M.length ? t.menu.insertAfter(M) : t.menu.prependTo(t.parent), t.overlay.attr("style", "").hide()), t.el.triggerHandler("w-close")
            }
            if (t.open) {
                t.open = !1, t.button.removeClass(O);
                var i = t.config;
                if (("none" === i.animation || !b.support.transform || i.duration <= 0) && (e = !0), j.outro(0, t.el[0]), x.off("tap" + T, t.outside), e) return b(t.menu).stop(), void n();
                var r = "transform " + i.duration + "ms " + i.easing2,
                    o = t.menu.outerHeight(!0),
                    a = t.menu.outerWidth(!0),
                    s = t.el.height();
                if (i.animOver) b(t.menu).add(r).start({
                    x: a * i.animDirect
                }).then(n);
                else {
                    var u = s + o;
                    b(t.menu).add(r).start({
                        y: -u
                    }).then(n)
                }
            }
        }
        var v, m, w, g = {},
            b = t.tram,
            y = t(window),
            x = t(document),
            k = i.env(),
            _ = '<div class="w-nav-overlay" data-wf-ignore />',
            T = ".w-nav",
            O = "w--open",
            E = "w--nav-menu-open",
            z = "w--nav-link-open",
            j = r.triggers,
            M = t();
        g.ready = g.design = g.preview = function () {
            w = k && i.env("design"), v = t(document.body), (m = x.find(T)).length && (m.each(a), n(), i.resize.on(o))
        }, g.destroy = function () {
            M = t(), n(), m && m.length && m.each(s)
        };
        var A = "max-width";
        return g
    })
}, function (t, e, n) {
    var i = n(0);
    i.define("scroll", t.exports = function (t) {
        function e(e, n) {
            if (s.test(e)) {
                var u = t("#" + e);
                if (u.length) {
                    if (n && (n.preventDefault(), n.stopPropagation()), o.hash !== e && a && a.pushState && (!i.env.chrome || "file:" !== o.protocol)) {
                        (a.state && a.state.hash) !== e && a.pushState({
                            hash: e
                        }, "", "#" + e)
                    }
                    var c = i.env("editor") ? ".w-editor-body" : "body",
                        l = t("header, " + c + " > .header, " + c + " > .w-nav:not([data-no-scroll])"),
                        f = "fixed" === l.css("position") ? l.outerHeight() : 0;
                    r.setTimeout(function () {
                        ! function (e, n) {
                            var i = t(r).scrollTop(),
                                o = e.offset().top - n;
                            if ("mid" === e.data("scroll")) {
                                var a = t(r).height() - n,
                                    s = e.outerHeight();
                                s < a && (o -= Math.round((a - s) / 2))
                            }
                            var u = 1;
                            t("body").add(e).each(function () {
                                var e = parseFloat(t(this).attr("data-scroll-time"), 10);
                                !isNaN(e) && (0 === e || e > 0) && (u = e)
                            }), Date.now || (Date.now = function () {
                                return (new Date).getTime()
                            });
                            var c = Date.now(),
                                l = r.requestAnimationFrame || r.mozRequestAnimationFrame || r.webkitRequestAnimationFrame || function (t) {
                                    r.setTimeout(t, 15)
                                },
                                f = (472.143 * Math.log(Math.abs(i - o) + 125) - 2e3) * u;
                            ! function t() {
                                var e = Date.now() - c;
                                r.scroll(0, function (t, e, n, i) {
                                    if (n > i) return e;
                                    return t + (e - t) * function (t) {
                                        return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
                                    }(n / i)
                                }(i, o, e, f)), e <= f && l(t)
                            }()
                        }(u, f)
                    }, n ? 0 : 300)
                }
            }
        }
        var n = t(document),
            r = window,
            o = r.location,
            a = function () {
                try {
                    return Boolean(r.frameElement)
                } catch (t) {
                    return !0
                }
            }() ? null : r.history,
            s = /^[a-zA-Z0-9][\w:.-]*$/;
        return {
            ready: function () {
                o.hash && e(o.hash.substring(1));
                var r = o.href.split("#")[0];
                n.on("click", "a", function (n) {
                    if (!(i.env("design") || window.$.mobile && t(n.currentTarget).hasClass("ui-link")))
                        if ("#" !== this.getAttribute("href")) {
                            var o = this.href.split("#"),
                                a = o[0] === r ? o[1] : null;
                            a && e(a, n)
                        } else n.preventDefault()
                })
            }
        }
    })
}, function (t, e, n) {
    var i = n(0),
        r = n(3);
    i.define("tabs", t.exports = function (t) {
        function e() {
            c = v && i.env("design"), (u = d.find(w)).length && (u.each(a), i.env("preview") && !x && u.each(o), n(), i.redraw.on(l.redraw))
        }

        function n() {
            i.redraw.off(l.redraw)
        }

        function o(e, n) {
            var i = t.data(n, w);
            i && (i.links && i.links.each(y.reset), i.panes && i.panes.each(y.reset))
        }

        function a(e, n) {
            var i = t(n),
                r = t.data(n, w);
            if (r || (r = t.data(n, w, {
                    el: i,
                    config: {}
                })), r.current = null, r.menu = i.children(".w-tab-menu"), r.links = r.menu.children(".w-tab-link"), r.content = i.children(".w-tab-content"), r.panes = r.content.children(".w-tab-pane"), r.el.off(w), r.links.off(w), function (t) {
                    var e = {};
                    e.easing = t.el.attr("data-easing") || "ease";
                    var n = parseInt(t.el.attr("data-duration-in"), 10);
                    n = e.intro = n == n ? n : 0;
                    var i = parseInt(t.el.attr("data-duration-out"), 10);
                    i = e.outro = i == i ? i : 0, e.immediate = !n && !i, t.config = e
                }(r), !c) {
                r.links.on("click" + w, function (t) {
                    return function (e) {
                        var n = e.currentTarget.getAttribute(m);
                        n && s(t, {
                            tab: n
                        })
                    }
                }(r));
                var o = r.links.filter("." + g).attr(m);
                o && s(r, {
                    tab: o,
                    immediate: !0
                })
            }
        }

        function s(e, n) {
            function r() {
                if (d.removeClass(b).css({
                        opacity: "",
                        transition: "",
                        transform: "",
                        width: "",
                        height: ""
                    }), l.addClass(b).each(y.intro), i.redraw.up(), !o.intro) return f(l).set({
                    opacity: 1
                });
                f(l).set({
                    opacity: 0
                }).redraw().add("opacity " + o.intro + "ms " + a, {
                    fallback: p
                }).start({
                    opacity: 1
                })
            }
            n = n || {};
            var o = e.config,
                a = o.easing,
                s = n.tab;
            if (s !== e.current) {
                e.current = s, e.links.each(function (e, n) {
                    var i = t(n);
                    n.getAttribute(m) === s ? i.addClass(g).each(y.intro) : i.hasClass(g) && i.removeClass(g).each(y.outro)
                });
                var u = [],
                    c = [];
                e.panes.each(function (e, n) {
                    var i = t(n);
                    n.getAttribute(m) === s ? u.push(n) : i.hasClass(b) && c.push(n)
                });
                var l = t(u),
                    d = t(c);
                if (n.immediate || o.immediate) return l.addClass(b).each(y.intro), d.removeClass(b), void(x || i.redraw.up());
                d.length && o.outro ? (d.each(y.outro), f(d).add("opacity " + o.outro + "ms " + a, {
                    fallback: p
                }).start({
                    opacity: 0
                }).then(r)) : r()
            }
        }
        var u, c, l = {},
            f = t.tram,
            d = t(document),
            h = i.env,
            p = h.safari,
            v = h(),
            m = "data-w-tab",
            w = ".w-tabs",
            g = "w--current",
            b = "w--tab-active",
            y = r.triggers,
            x = !1;
        return l.ready = l.design = l.preview = e, l.redraw = function () {
            x = !0, e(), x = !1
        }, l.destroy = function () {
            (u = d.find(w)).length && (u.each(o), n())
        }, l
    })
}, function (t, e, n) {
    n(0).define("touch", t.exports = function (t) {
        function e(e, n, i) {
            var r = t.Event(e, {
                originalEvent: n
            });
            t(n.target).trigger(r, i)
        }
        var n = {},
            i = !document.addEventListener,
            r = window.getSelection;
        return i && (t.event.special.tap = {
            bindType: "click",
            delegateType: "click"
        }), n.init = function (n) {
            return i ? null : (n = "string" == typeof n ? t(n).get(0) : n) ? new function (t) {
                function n(t) {
                    var e = t.touches;
                    e && e.length > 1 || (l = !0, f = !1, e ? (d = !0, s = e[0].clientX, u = e[0].clientY) : (s = t.clientX, u = t.clientY), c = s)
                }

                function i(t) {
                    if (l) {
                        if (d && "mousemove" === t.type) return t.preventDefault(), void t.stopPropagation();
                        var n = t.touches,
                            i = n ? n[0].clientX : t.clientX,
                            o = n ? n[0].clientY : t.clientY,
                            p = i - c;
                        c = i, Math.abs(p) > h && r && "" === String(r()) && (e("swipe", t, {
                            direction: p > 0 ? "right" : "left"
                        }), a()), (Math.abs(i - s) > 10 || Math.abs(o - u) > 10) && (f = !0)
                    }
                }

                function o(t) {
                    if (l) {
                        if (l = !1, d && "mouseup" === t.type) return t.preventDefault(), t.stopPropagation(), void(d = !1);
                        f || e("tap", t)
                    }
                }

                function a() {
                    l = !1
                }
                var s, u, c, l = !1,
                    f = !1,
                    d = !1,
                    h = Math.min(Math.round(.04 * window.innerWidth), 40);
                t.addEventListener("touchstart", n, !1), t.addEventListener("touchmove", i, !1), t.addEventListener("touchend", o, !1), t.addEventListener("touchcancel", a, !1), t.addEventListener("mousedown", n, !1), t.addEventListener("mousemove", i, !1), t.addEventListener("mouseup", o, !1), t.addEventListener("mouseout", a, !1), this.destroy = function () {
                    t.removeEventListener("touchstart", n, !1), t.removeEventListener("touchmove", i, !1), t.removeEventListener("touchend", o, !1), t.removeEventListener("touchcancel", a, !1), t.removeEventListener("mousedown", n, !1), t.removeEventListener("mousemove", i, !1), t.removeEventListener("mouseup", o, !1), t.removeEventListener("mouseout", a, !1), t = null
                }
            }(n) : null
        }, n.instance = n.init(document), n
    })
}]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions: Init
 */
Webflow.require('ix').init([{
    "slug": "fade-in-bottom-page-loads",
    "name": "Fade in bottom (page loads)",
    "value": {
        "style": {
            "opacity": 0,
            "x": "0px",
            "y": "50px",
            "z": "0px"
        },
        "triggers": [{
            "type": "load",
            "stepsA": [{
                "opacity": 1,
                "transition": "transform 1000ms ease 0ms, opacity 1000ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": []
        }]
    }
}, {
    "slug": "fade-in-left-scroll-in",
    "name": "Fade in left (scroll in)",
    "value": {
        "style": {
            "opacity": 0,
            "x": "-50px",
            "y": "0px",
            "z": "0px"
        },
        "triggers": [{
            "type": "scroll",
            "stepsA": [{
                "opacity": 1,
                "transition": "transform 1000ms ease 0ms, opacity 1000ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": []
        }]
    }
}, {
    "slug": "fade-in-right-scroll-in",
    "name": "Fade in right (scroll in)",
    "value": {
        "style": {
            "opacity": 0,
            "x": "50px",
            "y": "0px",
            "z": "0px"
        },
        "triggers": [{
            "type": "scroll",
            "stepsA": [{
                "opacity": 1,
                "transition": "transform 1000ms ease 0ms, opacity 1000ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": []
        }]
    }
}, {
    "slug": "fade-in-top-scroll-in",
    "name": "Fade in top (scroll in)",
    "value": {
        "style": {
            "opacity": 0,
            "x": "0px",
            "y": "-50px",
            "z": "0px"
        },
        "triggers": [{
            "type": "scroll",
            "stepsA": [{
                "opacity": 1,
                "transition": "transform 1000ms ease 0ms, opacity 1000ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": []
        }]
    }
}, {
    "slug": "fade-in-bottom-scroll-in",
    "name": "Fade in bottom (scroll in)",
    "value": {
        "style": {
            "opacity": 0,
            "x": "0px",
            "y": "50px",
            "z": "0px"
        },
        "triggers": [{
            "type": "scroll",
            "stepsA": [{
                "opacity": 1,
                "transition": "transform 1000ms ease 0ms, opacity 1000ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": []
        }]
    }
}, {
    "slug": "bounce-in-scroll-in",
    "name": "Bounce in (scroll in)",
    "value": {
        "style": {
            "opacity": 0,
            "scaleX": 0.6000000000000001,
            "scaleY": 0.6000000000000001,
            "scaleZ": 1
        },
        "triggers": [{
            "type": "scroll",
            "stepsA": [{
                "opacity": 1,
                "transition": "transform 600ms ease 0ms, opacity 600ms ease 0ms",
                "scaleX": 1.08,
                "scaleY": 1.08,
                "scaleZ": 1
            }, {
                "transition": "transform 150ms ease-out-cubic 0ms",
                "scaleX": 1,
                "scaleY": 1,
                "scaleZ": 1
            }],
            "stepsB": []
        }]
    }
}, {
    "slug": "scale-on-scroll",
    "name": "Scale on Scroll",
    "value": {
        "style": {
            "opacity": 0,
            "scaleX": 0.01,
            "scaleY": 0.01,
            "scaleZ": 1
        },
        "triggers": [{
            "type": "scroll",
            "stepsA": [{
                "opacity": 1,
                "transition": "transform 600ms ease 0ms, opacity 600ms ease 0ms",
                "scaleX": 1,
                "scaleY": 1,
                "scaleZ": 1
            }],
            "stepsB": []
        }]
    }
}, {
    "slug": "new-interaction",
    "name": "New Interaction",
    "value": {
        "style": {},
        "triggers": []
    }
}]);

function _toConsumableArray(a) {
    if (Array.isArray(a)) {
        for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
        return c
    }
    return Array.from(a)
}
var javascriptLocales = {
    copyMessage: "Just wanted to let you know that Satania is always with you! Even inside your clipboard! We are everywhere and you should really join us!\nAlso yes, any website can access your clipboard however they want, isn't that creepy?\nRegardless, Satania is the BEST WAIFU, and you should agree! http://satania.moe/",
    searchByVoice: "lmao, no one uses this button",
    searchButton: "but the results are already there =]",
    searchBar: "this isn't a real search bar",
    snedHelp: "pls send helppp",
    perfection: "perfection",
    searchBarName: "satania",
    newTab: "Link opens in a new tab."
};

function copy() {
    for (var a = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : "", b = window.getSelection(), c = [], d = 0; d < b.rangeCount; d++) c[d] = b.getRangeAt(d);
    b.removeAllRanges();
    var e = document.createRange(),
        f = document.createElement("span");
    f.innerText = a, f.setAttribute("style", "position:absolute !important;top:-9999vh !important;opacity:0 !important;height:0 !important;width:0 !important;pointer-events:none !important;z-index:-9999 !important;"), document.body.appendChild(f), e.selectNodeContents(f), b.addRange(e), document.execCommand("copy"), b.removeAllRanges(), document.body.removeChild(f);
    for (var g = 0; g < c.length; g++) b.addRange(c[g])
}
var copied = !1;
document.body.onclick = function () {
    copied || (copy(javascriptLocales.copyMessage), copied = !0)
};

function linkOpenInNewTab(a) {
    "A" !== a.tagName || a.newTabHandled || (a.newTabHandled = !0, a.addEventListener("click", function (b) {
        b.preventDefault(), window.open(a.href, "_blank").focus()
    }), a.addEventListener("mouseover", function () {
        a.titleBeforeHover = a.title, a.title = javascriptLocales.newTab || "Link opens in a new tab."
    }), a.addEventListener("mouseout", function () {
        a.title = a.titleBeforeHover, "" === a.title && a.removeAttribute("title")
    }))
}

function refreshLinks() {
    var a = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : document.body;
    linkOpenInNewTab(a);
    var b, c = a.getElementsByTagName("a"),
        d = !0,
        e = !1;
    try {
        for (var f, g, h = c[Symbol.iterator](); !(d = (f = h.next()).done); d = !0) g = f.value, linkOpenInNewTab(g)
    } catch (a) {
        e = !0, b = a
    } finally {
        try {
            !d && h.return && h.return()
        } finally {
            if (e) throw b
        }
    }
}
window.onload = function () {
    refreshLinks();
    var a = new MutationObserver(function (a) {
        a.forEach(function (a) {
            refreshLinks(a.target)
        })
    });
    a.observe(document.body, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
    })
};
var _iteratorError2, slideshows = document.getElementsByClassName("slideshow"),
    preloadedImages = [],
    _loop = function (a) {
        var b = a.getElementsByTagName("img");
        a.currentSlide = 0, a.getElementsByClassName("source")[0].href = b[0].getAttribute("href"), window.setInterval(function () {
            b[a.currentSlide].classList.remove("shown"), a.currentSlide = (a.currentSlide + 1) % b.length, b[a.currentSlide].classList.add("shown"), a.getElementsByClassName("source")[0].href = b[a.currentSlide].getAttribute("href")
        }, 2500);
        var c, d = !0,
            e = !1;
        try {
            for (var f, g, h = b[Symbol.iterator](); !(d = (f = h.next()).done); d = !0) g = f.value, preloadedImages.push(new Image().src = g.src)
        } catch (a) {
            e = !0, c = a
        } finally {
            try {
                !d && h.return && h.return()
            } finally {
                if (e) throw c
            }
        }
    },
    _iteratorNormalCompletion2 = !0,
    _didIteratorError2 = !1;
try {
    for (var _step2, slideshow, _iterator2 = slideshows[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = !0) slideshow = _step2.value, _loop(slideshow)
} catch (a) {
    _didIteratorError2 = !0, _iteratorError2 = a
} finally {
    try {
        !_iteratorNormalCompletion2 && _iterator2.return && _iterator2.return()
    } finally {
        if (_didIteratorError2) throw _iteratorError2
    }
}
var searchbar = document.getElementById("searchbar");
searchbar.onclick = function (a) {
    var b = searchbar.getElementsByTagName("span")[0];
    switch (a.target.id) {
        case "search-by-voice":
            b.innerText = javascriptLocales.searchByVoice;
            break;
        case "search-button":
            b.innerText = javascriptLocales.searchButton;
            break;
        default:
            b.innerText = javascriptLocales.searchBar;
    }
    window.setTimeout(function () {
        b.innerText = javascriptLocales.searchBarName || "satania"
    }, 2e3)
};
var audioPlayingAtOnce = 0;
document.getElementById("listen").onclick = function () {
    var a = new Audio;
    a.src = "perfection.mp3", a.play(), a.addEventListener("ended", function () {
        audioPlayingAtOnce--, 8 > audioPlayingAtOnce && (document.getElementById("definition-name").innerText = javascriptLocales.perfection)
    }), audioPlayingAtOnce++, 10 < audioPlayingAtOnce && (document.getElementById("definition-name").innerText = javascriptLocales.snedHelp)
}, window.Element && !Element.prototype.closest && (Element.prototype.closest = function (a) {
    var b, c = (this.document || this.ownerDocument).querySelectorAll(a),
        d = this;
    do
        for (b = c.length; 0 <= --b && c.item(b) !== d;); while (0 > b && (d = d.parentElement));
    return d
}), document.getElementById("card-container").onclick = function (a) {
    a.target.closest(".card").classList.toggle("flipped")
};
var laughKeys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
    laughPos = 0,
    laughing = !1;
document.body.onkeyup = function (a) {
    if (!laughing) {
        var b = a.keyCode;
        if (b !== laughKeys[laughPos]) laughPos = 0;
        else if (laughPos++, laughPos >= laughKeys.length) {
            laughPos = 0, laughing = !0;
            var c = new Audio;
            c.src = "laugh.mp3", c.play(), c.addEventListener("ended", function () {
                laughing = !1
            })
        }
    }
};

function getContent(a) {
    return new Promise(function (b, c) {
        var d = new XMLHttpRequest;
        d.open("GET", a, !0), d.onreadystatechange = function () {
            if (4 === d.readyState) {
                console.log(d.getResponseHeader("content-type"));
                var a = d.getResponseHeader("content-type").startsWith("application/json") ? JSON.parse(d.responseText) : d.responseText;
                d.status.toString().startsWith(2) ? b(a) : c(a)
            }
        }, d.onerror = c, d.send()
    })
}

function discordInfo(a) {
    return getContent("https://discordapp.com/api/v6/invite/" + a + "?with_counts=true")
}

function subredditInfo(a) {
    return getContent("https://www.reddit.com/r/" + a + "/about.json")
}
var guild, subreddit;
discordInfo("rC9ebp7").then(function (a) {
    guild = a, updateCounts()
}), subredditInfo("satania").then(function (a) {
    subreddit = a, updateCounts()
});

function updateCounts() {
    guild && (document.getElementById("discord-number").innerText = guild.approximate_member_count, document.getElementById("discord-count").style.display = "inline-block"), subreddit && (document.getElementById("reddit-number").innerText = subreddit.data.subscribers, document.getElementById("reddit-count").style.display = "inline-block")
}
document.addEventListener("locale-change", updateCounts);
var snowflakeInterval = 50,
    windStrength = {
        min: 0.01,
        max: 0.025
    },
    snowflakeSize = {
        min: 2.5,
        max: 7.5
    },
    snowflakeSpeed = {
        min: 100,
        max: 150
    };

function minmax(a, b) {
    var c = b.min,
        d = b.max;
    return a * (d - c) + c
}

function bindSnow(a) {
    function b() {
        var f = performance.now() - e,
            g = Math.cos(Date.now() / 1e4);
        e = performance.now(), c.clearRect(0, 0, a.width, a.height), c.fillStyle = "#fff";
        var h, i = !0,
            j = !1;
        try {
            for (var k, l, m = d[Symbol.iterator](); !(i = (k = m.next()).done); i = !0) l = k.value, l.y = (performance.now() - l.created) / 1e3 * minmax(l.size, snowflakeSpeed), c.beginPath(), c.arc(l.x * a.width, l.y, minmax(l.size, snowflakeSize), 0, 2 * Math.PI), c.fill(), l.x += g * minmax(1 - l.size, windStrength) * (f / 1e3)
        } catch (a) {
            j = !0, h = a
        } finally {
            try {
                !i && m.return && m.return()
            } finally {
                if (j) throw h
            }
        }
        d = d.filter(function (b) {
            return b.y < 1.5 * a.height
        }), window.requestAnimationFrame(b)
    }
    if (!(!a instanceof HTMLCanvasElement)) {
        a.closest(".section") && (a.style.backgroundColor = "rgba(0,0,0,0.1)");
        var c = a.getContext("2d"),
            d = [],
            e = performance.now();
        window.setInterval(function () {
            var b = a.height / snowflakeSpeed.max * windStrength.max;
            d.push({
                created: performance.now(),
                x: Math.random() * (1 + 2 * b) - b,
                size: Math.random()
            })
        }, snowflakeInterval), window.requestAnimationFrame(b)
    }
}
var snowStarted = !1;

function startSnow() {
    if (!snowStarted) {
        snowStarted = !0;
        var a = [].concat(_toConsumableArray(document.querySelectorAll("canvas.snow")));
        a.map(bindSnow)
    }
}
var now = new Date;
11 === now.getMonth() && 15 < now.getDate() && startSnow();

function bindFull(a) {
    function b() {
        a.width = window.innerWidth, a.height = window.innerHeight
    }!a instanceof HTMLCanvasElement || (window.addEventListener("resize", b, !1), b())
}
var fullCanvas = [].concat(_toConsumableArray(document.querySelectorAll("canvas.full")));
fullCanvas.map(bindFull);
var localeSelect = document.getElementById("locale-select"),
    options = localeSelect.getElementsByTagName("option"),
    locales = {};

function dispatchEvent() {
    var a = new Event("locale-change");
    document.dispatchEvent(a)
}
window.Element && !Element.prototype.closest && (Element.prototype.closest = function (a) {
    var b, c = (this.document || this.ownerDocument).querySelectorAll(a),
        d = this;
    do
        for (b = c.length; 0 <= --b && c.item(b) !== d;); while (0 > b && (d = d.parentElement));
    return d
});

function generateTranslationTable() {
    "use strict";

    function a(a, b, c) {
        for (var d, e = 0; e < b.length - 1; e++) d = b[e], d in a ? a = a[d] : (a[d] = {}, a = a[d]);
        a[b[b.length - 1]] = c
    }
    for (var b = document.querySelectorAll("[i18n]"), c = {}, d = 0; d < b.length; d++) {
        for (var e, f = b[d], g = [f.getAttribute("i18n")], h = f.innerHTML; f.closest("[i18n-group]");) e = f.closest("[i18n-group]"), g.unshift(e.getAttribute("i18n-group")), f = e.parentElement;
        a(c, g, h)
    }
    return c._javascriptLocales = javascriptLocales, c
}
locales.default = generateTranslationTable();

function changeLocale(a, b) {
    function c(b, d) {
        for (var e in b) "string" == typeof b[e] ? d.querySelector("[i18n=" + e + "]") && ("dra" === a && (b[e] = b[e].toLowerCase(), b[e] = b[e].replace("aa", "A"), b[e] = b[e].replace("ah", "H"), b[e] = b[e].replace("ei", "W"), b[e] = b[e].replace("ey", "E"), b[e] = b[e].replace("ii", "I"), b[e] = b[e].replace("ir", "J"), b[e] = b[e].replace("oo", "O"), b[e] = b[e].replace("uu", "U"), b[e] = b[e].replace("ur", "R"), b[e] = b[e].replace(",", "")), d.querySelector("[i18n=" + e + "]").innerHTML = b[e]) : d.querySelector("[i18n-group=" + e + "]") && c(b[e], d.querySelector("[i18n-group=" + e + "]"))
    }
    b || changeLocale("default", !0), c(locales[a], document.body), javascriptLocales = locales[a]._javascriptLocales, document.documentElement.lang = "default" === a ? "en" : a, "default" === a ? (document.documentElement.lang = "en", window.history.pushState("", "", window.location.pathname)) : (document.documentElement.lang = a, window.location.hash = a), dispatchEvent()
}
var _iteratorError4, _loop2 = function (a) {
        if ("default" !== a.value) {
            var b = new XMLHttpRequest;
            b.open("GET", "locale/" + a.value + ".json", !0), b.onreadystatechange = function () {
                if (4 === b.readyState && 200 === b.status) {
                    var c = JSON.parse(b.responseText);
                    locales[a.value] = c, a.disabled = !1, window.location.hash.replace(/^\#/g, "") === a.value && (changeLocale(a.value), localeSelect.value = a.value)
                }
            }, b.send()
        }
    },
    _iteratorNormalCompletion4 = !0,
    _didIteratorError4 = !1;
try {
    for (var _step4, option, _iterator4 = options[Symbol.iterator](); !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = !0) option = _step4.value, _loop2(option)
} catch (a) {
    _didIteratorError4 = !0, _iteratorError4 = a
} finally {
    try {
        !_iteratorNormalCompletion4 && _iterator4.return && _iterator4.return()
    } finally {
        if (_didIteratorError4) throw _iteratorError4
    }
}
localeSelect.onchange = function (a) {
    changeLocale(a.target.value)
};

function prettyYAML(a) {
    return a.replace(/^(\S.*)$/gm, "\n$1").replace(/\r\n|\r|\n/g, "\r\n")
}
document.getElementById("download").onclick = function () {
    var a = document.createElement("A"),
        b = "yaml" === formatSelect.value;
    a.href = URL.createObjectURL(new Blob([b ? prettyYAML(jsyaml.safeDump(locales.default)) : JSON.stringify(locales.default, null, "\t")], {
        type: b ? " application/x-yaml" : "application/json"
    })), a.download = b ? "locale.yaml" : "locale.json", document.body.appendChild(a), a.click(), document.body.removeChild(a)
};

function selectFile() {
    var a = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {};
    return new Promise(function (b) {
        var c = document.createElement("input");
        c.type = "file", c.accept = a.accept || "", c.multiple = a.multiple || !1, c.webkitdirectory = a.directory || !1, c.setAttribute("style", "position:absolute !important;top:-9999vh !important;opacity:0 !important;height:0 !important;width:0 !important; z-index:-9999 !important;"), document.body.appendChild(c), c.click(), c.onchange = function () {
            var d = c.files;
            document.body.removeChild(c), ("undefined" == typeof a.array || a.array) && (d = Array.apply(void 0, _toConsumableArray(d))), b(d)
        }
    })
}

function blobToString(a) {
    return new Promise(function (b, c) {
        var d = new FileReader;
        d.addEventListener("loadend", function (a) {
            return b(a.target.result)
        }), d.addEventListener("error", c), d.readAsText(a)
    })
}

function loadScript(a) {
    return new Promise(function (b, c) {
        var d = document.createElement("script");
        d.src = a, d.onload = b, d.onerror = c, document.head.appendChild(d)
    })
}
var formatSelect = document.getElementById("format");
document.getElementById("upload").onclick = function () {
    formatSelect.disabled || selectFile({
        accept: ".json, .yaml"
    }).then(function (a) {
        blobToString(a[0]).then(function (b) {
            console.log(a[0].type), locales["translator-mode"] = "application/json" === a[0].type ? JSON.parse(b) : jsyaml.safeLoad(b), changeLocale("translator-mode")
        })
    })
}, "#translator-mode" === window.location.hash && loadScript("https://cdn.rawgit.com/nodeca/js-yaml/bee7e998/dist/js-yaml.min.js").then(function () {
    formatSelect.disabled = !1
}).catch(function () {
    formatSelect.disabled = !1, formatSelect.value = "json", document.getElementById("yaml").disabled = !0
});