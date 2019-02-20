!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.echarts = e() : t.echarts = e()
}(this, function () {
    return function (t) {
        function e(n) {
            if (i[n])return i[n].exports;
            var r = i[n] = {exports: {}, id: n, loaded: !1};
            return t[n].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
        }

        var i = {};
        return e.m = t, e.c = i, e.p = "", e(0)
    }([function (t, e, i) {
        t.exports = i(2), i(94), i(88), i(99), i(174), i(299), i(288), i(309), i(263), i(259), i(255), i(295), i(304), i(241), i(246), i(252), i(284), i(276), i(36), i(187), i(210), i(332), i(329), i(228), i(336), i(322), i(201), i(177), i(347), i(194), i(193), i(192), i(337), i(202), i(218)
    }, function (t, e) {
        function i(t) {
            if ("object" == typeof t && null !== t) {
                var e = t;
                if (t instanceof Array) {
                    e = [];
                    for (var n = 0, r = t.length; r > n; n++)e[n] = i(t[n])
                } else if (!M(t) && !A(t)) {
                    e = {};
                    for (var o in t)t.hasOwnProperty(o) && (e[o] = i(t[o]))
                }
                return e
            }
            return t
        }

        function n(t, e, r) {
            if (!S(e) || !S(t))return r ? i(e) : t;
            for (var o in e)if (e.hasOwnProperty(o)) {
                var a = t[o], s = e[o];
                !S(s) || !S(a) || _(s) || _(a) || A(s) || A(a) || M(s) || M(a) ? !r && o in t || (t[o] = i(e[o], !0)) : n(a, s, r)
            }
            return t
        }

        function r(t, e) {
            for (var i = t[0], r = 1, o = t.length; o > r; r++)i = n(i, t[r], e);
            return i
        }

        function o(t, e) {
            for (var i in e)e.hasOwnProperty(i) && (t[i] = e[i]);
            return t
        }

        function a(t, e, i) {
            for (var n in e)e.hasOwnProperty(n) && (i ? null != e[n] : null == t[n]) && (t[n] = e[n]);
            return t
        }

        function s() {
            return document.createElement("canvas")
        }

        function l() {
            return C || (C = N.createCanvas().getContext("2d")), C
        }

        function u(t, e) {
            if (t) {
                if (t.indexOf)return t.indexOf(e);
                for (var i = 0, n = t.length; n > i; i++)if (t[i] === e)return i
            }
            return -1
        }

        function h(t, e) {
            function i() {
            }

            var n = t.prototype;
            i.prototype = e.prototype, t.prototype = new i;
            for (var r in n)t.prototype[r] = n[r];
            t.prototype.constructor = t, t.superClass = e
        }

        function c(t, e, i) {
            t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, a(t, e, i)
        }

        function d(t) {
            return t ? "string" == typeof t ? !1 : "number" == typeof t.length : void 0
        }

        function f(t, e, i) {
            if (t && e)if (t.forEach && t.forEach === z)t.forEach(e, i); else if (t.length === +t.length)for (var n = 0, r = t.length; r > n; n++)e.call(i, t[n], n, t); else for (var o in t)t.hasOwnProperty(o) && e.call(i, t[o], o, t)
        }

        function p(t, e, i) {
            if (t && e) {
                if (t.map && t.map === R)return t.map(e, i);
                for (var n = [], r = 0, o = t.length; o > r; r++)n.push(e.call(i, t[r], r, t));
                return n
            }
        }

        function g(t, e, i, n) {
            if (t && e) {
                if (t.reduce && t.reduce === V)return t.reduce(e, i, n);
                for (var r = 0, o = t.length; o > r; r++)i = e.call(n, i, t[r], r, t);
                return i
            }
        }

        function v(t, e, i) {
            if (t && e) {
                if (t.filter && t.filter === O)return t.filter(e, i);
                for (var n = [], r = 0, o = t.length; o > r; r++)e.call(i, t[r], r, t) && n.push(t[r]);
                return n
            }
        }

        function m(t, e, i) {
            if (t && e)for (var n = 0, r = t.length; r > n; n++)if (e.call(i, t[n], n, t))return t[n]
        }

        function y(t, e) {
            var i = E.call(arguments, 2);
            return function () {
                return t.apply(e, i.concat(E.call(arguments)))
            }
        }

        function x(t) {
            var e = E.call(arguments, 1);
            return function () {
                return t.apply(this, e.concat(E.call(arguments)))
            }
        }

        function _(t) {
            return "[object Array]" === P.call(t)
        }

        function b(t) {
            return "function" == typeof t
        }

        function w(t) {
            return "[object String]" === P.call(t)
        }

        function S(t) {
            var e = typeof t;
            return "function" === e || !!t && "object" == e
        }

        function M(t) {
            return !!D[P.call(t)]
        }

        function A(t) {
            return t && 1 === t.nodeType && "string" == typeof t.nodeName
        }

        function I(t) {
            for (var e = 0, i = arguments.length; i > e; e++)if (null != arguments[e])return arguments[e]
        }

        function T() {
            return Function.call.apply(E, arguments)
        }

        function L(t, e) {
            if (!t)throw new Error(e)
        }

        var C, D = {
            "[object Function]": 1,
            "[object RegExp]": 1,
            "[object Date]": 1,
            "[object Error]": 1,
            "[object CanvasGradient]": 1,
            "[object CanvasPattern]": 1,
            "[object Image]": 1
        }, P = Object.prototype.toString, k = Array.prototype, z = k.forEach, O = k.filter, E = k.slice, R = k.map, V = k.reduce, N = {
            inherits: h,
            mixin: c,
            clone: i,
            merge: n,
            mergeAll: r,
            extend: o,
            defaults: a,
            getContext: l,
            createCanvas: s,
            indexOf: u,
            slice: T,
            find: m,
            isArrayLike: d,
            each: f,
            map: p,
            reduce: g,
            filter: v,
            bind: y,
            curry: x,
            isArray: _,
            isString: w,
            isObject: S,
            isFunction: b,
            isBuildInObject: M,
            isDom: A,
            retrieve: I,
            assert: L,
            noop: function () {
            }
        };
        t.exports = N
    }, function (t, e, i) {
        function n(t) {
            return function (e, i, n) {
                e = e && e.toLowerCase(), P.prototype[t].call(this, e, i, n)
            }
        }

        function r() {
            P.call(this)
        }

        function o(t, e, i) {
            function n(t, e) {
                return t.prio - e.prio
            }

            i = i || {}, "string" == typeof e && (e = K[e]), this.id, this.group, this._dom = t, this._zr = L.init(t, {
                renderer: i.renderer || "canvas",
                devicePixelRatio: i.devicePixelRatio
            }), this._theme = C.clone(e), this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._api = new _(this), this._coordSysMgr = new b, P.call(this), this._messageCenter = new r, this._initEvents(), this.resize = C.bind(this.resize, this), this._pendingActions = [], k(Q, n), k(Y, n)
        }

        function a(t, e) {
            var i = this._model;
            i && i.eachComponent({mainType: "series", query: e}, function (n, r) {
                var o = this._chartsMap[n.__viewId];
                o && o.__alive && o[t](n, i, this._api, e)
            }, this)
        }

        function s(t, e, i) {
            var n = this._api;
            z(this._componentsViews, function (r) {
                var o = r.__model;
                r[t](o, e, n, i), v(o, r)
            }, this), e.eachSeries(function (r, o) {
                var a = this._chartsMap[r.__viewId];
                a[t](r, e, n, i), v(r, a), g(r, a)
            }, this), p(this._zr, e)
        }

        function l(t, e) {
            for (var i = "component" === t, n = i ? this._componentsViews : this._chartsViews, r = i ? this._componentsMap : this._chartsMap, o = this._zr, a = 0; a < n.length; a++)n[a].__alive = !1;
            e[i ? "eachComponent" : "eachSeries"](function (t, a) {
                if (i) {
                    if ("series" === t)return
                } else a = t;
                var s = a.id + "_" + a.type, l = r[s];
                if (!l) {
                    var u = S.parseClassType(a.type), h = i ? A.getClass(u.main, u.sub) : I.getClass(u.sub);
                    if (!h)return;
                    l = new h, l.init(e, this._api), r[s] = l, n.push(l), o.add(l.group)
                }
                a.__viewId = s, l.__alive = !0, l.__id = s, l.__model = a
            }, this);
            for (var a = 0; a < n.length;) {
                var s = n[a];
                s.__alive ? a++ : (o.remove(s.group), s.dispose(e, this._api), n.splice(a, 1), delete r[s.__id])
            }
        }

        function u(t, e) {
            z(Y, function (i) {
                i.func(t, e)
            })
        }

        function h(t) {
            var e = {};
            t.eachSeries(function (t) {
                var i = t.get("stack"), n = t.getData();
                if (i && "list" === n.type) {
                    var r = e[i];
                    r && (n.stackedOn = r), e[i] = n
                }
            })
        }

        function c(t, e) {
            var i = this._api;
            z(Q, function (n) {
                n.isLayout && n.func(t, i, e)
            })
        }

        function d(t, e) {
            var i = this._api;
            t.clearColorPalette(), t.eachSeries(function (t) {
                t.clearColorPalette()
            }), z(Q, function (n) {
                n.func(t, i, e)
            })
        }

        function f(t, e) {
            var i = this._api;
            z(this._componentsViews, function (n) {
                var r = n.__model;
                n.render(r, t, i, e), v(r, n)
            }, this), z(this._chartsViews, function (t) {
                t.__alive = !1
            }, this), t.eachSeries(function (n, r) {
                var o = this._chartsMap[n.__viewId];
                o.__alive = !0, o.render(n, t, i, e), o.group.silent = !!n.get("silent"), v(n, o), g(n, o)
            }, this), p(this._zr, t), z(this._chartsViews, function (e) {
                e.__alive || e.remove(t, i)
            }, this)
        }

        function p(t, e) {
            var i = t.storage, n = 0;
            i.traverse(function (t) {
                t.isGroup || n++
            }), n > e.get("hoverLayerThreshold") && !y.node && i.traverse(function (t) {
                t.isGroup || (t.useHoverLayer = !0)
            })
        }

        function g(t, e) {
            var i = 0;
            e.group.traverse(function (t) {
                "group" === t.type || t.ignore || i++
            });
            var n = +t.get("progressive"), r = i > t.get("progressiveThreshold") && n && !y.node;
            r && e.group.traverse(function (t) {
                t.isGroup || (t.progressive = r ? Math.floor(i++ / n) : -1, r && t.stopAnimation(!0))
            });
            var o = t.get("blendMode") || null;
            e.group.traverse(function (t) {
                t.isGroup || t.setStyle("blend", o)
            })
        }

        function v(t, e) {
            var i = t.get("z"), n = t.get("zlevel");
            e.group.traverse(function (t) {
                "group" !== t.type && (null != i && (t.z = i), null != n && (t.zlevel = n))
            })
        }

        function m(t) {
            function e(t, e) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n[o] = e
                }
            }

            var i = 0, n = 1, r = 2, o = "__connectUpdateStatus";
            C.each(X, function (a, s) {
                t._messageCenter.on(s, function (a) {
                    if (tt[t.group] && t[o] !== i) {
                        var s = t.makeActionFromEvent(a), l = [];
                        for (var u in J) {
                            var h = J[u];
                            h !== t && h.group === t.group && l.push(h)
                        }
                        e(l, i), z(l, function (t) {
                            t[o] !== n && t.dispatchAction(s)
                        }), e(l, r)
                    }
                })
            })
        }

        /*!
         * ECharts, a javascript interactive chart library.
         *
         * Copyright (c) 2015, Baidu Inc.
         * All rights reserved.
         *
         * LICENSE
         * https://github.com/ecomfe/echarts/blob/master/LICENSE.txt
         */
        var y = i(12), x = i(121), _ = i(87), b = i(23), w = i(122), S = i(11), M = i(15), A = i(57), I = i(27), T = i(3), L = i(76), C = i(1), D = i(18), P = i(20), k = i(44), z = C.each, O = 1e3, E = 5e3, R = 1e3, V = 2e3, N = 3e3, B = 4e3, G = 5e3, F = "__flag_in_main_process", H = "_hasGradientOrPatternBg";
        r.prototype.on = n("on"), r.prototype.off = n("off"), r.prototype.one = n("one"), C.mixin(r, P);
        var W = o.prototype;
        W.getDom = function () {
            return this._dom
        }, W.getZr = function () {
            return this._zr
        }, W.setOption = function (t, e, i) {
            if (this[F] = !0, !this._model || e) {
                var n = new w(this._api), r = this._theme, o = this._model = new x(null, null, r, n);
                o.init(null, null, r, n)
            }
            this._model.setOption(t, $), Z.prepareAndUpdate.call(this), this[F] = !1, this._flushPendingActions(), !i && this._zr.refreshImmediately()
        }, W.setTheme = function () {
            console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
        }, W.getModel = function () {
            return this._model
        }, W.getOption = function () {
            return this._model.getOption()
        }, W.getWidth = function () {
            return this._zr.getWidth()
        }, W.getHeight = function () {
            return this._zr.getHeight()
        }, W.getRenderedCanvas = function (t) {
            if (y.canvasSupported) {
                t = t || {}, t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");
                var e = this._zr, i = e.storage.getDisplayList();
                return C.each(i, function (t) {
                    t.stopAnimation(!0)
                }), e.painter.getRenderedCanvas(t)
            }
        }, W.getDataURL = function (t) {
            t = t || {};
            var e = t.excludeComponents, i = this._model, n = [], r = this;
            z(e, function (t) {
                i.eachComponent({mainType: t}, function (t) {
                    var e = r._componentsMap[t.__viewId];
                    e.group.ignore || (n.push(e), e.group.ignore = !0)
                })
            });
            var o = this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
            return z(n, function (t) {
                t.group.ignore = !1
            }), o
        }, W.getConnectedDataURL = function (t) {
            if (y.canvasSupported) {
                var e = this.group, i = Math.min, n = Math.max, r = 1 / 0;
                if (tt[e]) {
                    var o = r, a = r, s = -r, l = -r, u = [], h = t && t.pixelRatio || 1;
                    for (var c in J) {
                        var d = J[c];
                        if (d.group === e) {
                            var f = d.getRenderedCanvas(C.clone(t)), p = d.getDom().getBoundingClientRect();
                            o = i(p.left, o), a = i(p.top, a), s = n(p.right, s), l = n(p.bottom, l), u.push({
                                dom: f,
                                left: p.left,
                                top: p.top
                            })
                        }
                    }
                    o *= h, a *= h, s *= h, l *= h;
                    var g = s - o, v = l - a, m = C.createCanvas();
                    m.width = g, m.height = v;
                    var x = L.init(m);
                    return z(u, function (t) {
                        var e = new T.Image({style: {x: t.left * h - o, y: t.top * h - a, image: t.dom}});
                        x.add(e)
                    }), x.refreshImmediately(), m.toDataURL("image/" + (t && t.type || "png"))
                }
                return this.getDataURL(t)
            }
        };
        var Z = {
            update: function (t) {
                var e = this._model, i = this._api, n = this._coordSysMgr, r = this._zr;
                if (e) {
                    e.restoreData(), n.create(this._model, this._api), u.call(this, e, i), h.call(this, e), n.update(e, i), d.call(this, e, t), f.call(this, e, t);
                    var o = e.get("backgroundColor") || "transparent", a = r.painter;
                    if (a.isSingleCanvas && a.isSingleCanvas())r.configLayer(0, {clearColor: o}); else {
                        if (!y.canvasSupported) {
                            var s = D.parse(o);
                            o = D.stringify(s, "rgb"), 0 === s[3] && (o = "transparent")
                        }
                        o.colorStops || o.image ? (r.configLayer(0, {clearColor: o}), this[H] = !0, this._dom.style.background = "transparent") : (this[H] && r.configLayer(0, {clearColor: null}), this[H] = !1, this._dom.style.background = o)
                    }
                }
            }, updateView: function (t) {
                var e = this._model;
                e && (e.eachSeries(function (t) {
                    t.getData().clearAllVisual()
                }), d.call(this, e, t), s.call(this, "updateView", e, t))
            }, updateVisual: function (t) {
                var e = this._model;
                e && (e.eachSeries(function (t) {
                    t.getData().clearAllVisual()
                }), d.call(this, e, t), s.call(this, "updateVisual", e, t))
            }, updateLayout: function (t) {
                var e = this._model;
                e && (c.call(this, e, t), s.call(this, "updateLayout", e, t))
            }, highlight: function (t) {
                a.call(this, "highlight", t)
            }, downplay: function (t) {
                a.call(this, "downplay", t)
            }, prepareAndUpdate: function (t) {
                var e = this._model;
                l.call(this, "component", e), l.call(this, "chart", e), Z.update.call(this, t)
            }
        };
        W.resize = function () {
            this[F] = !0, this._zr.resize();
            var t = this._model && this._model.resetOption("media");
            Z[t ? "prepareAndUpdate" : "update"].call(this), this._loadingFX && this._loadingFX.resize(), this[F] = !1, this._flushPendingActions()
        };
        var q = i(120);
        W.showLoading = function (t, e) {
            C.isObject(t) && (e = t, t = "default"), this.hideLoading();
            var i = q(this._api, e), n = this._zr;
            this._loadingFX = i, n.add(i)
        }, W.hideLoading = function () {
            this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null
        }, W.makeActionFromEvent = function (t) {
            var e = C.extend({}, t);
            return e.type = X[t.type], e
        }, W.dispatchAction = function (t, e) {
            var i = U[t.type];
            if (i) {
                var n = i.actionInfo, r = n.update || "update";
                if (this[F])return void this._pendingActions.push(t);
                this[F] = !0;
                var o = [t], a = !1;
                t.batch && (a = !0, o = C.map(t.batch, function (e) {
                    return e = C.defaults(C.extend({}, e), t), e.batch = null, e
                }));
                for (var s, l = [], u = "highlight" === t.type || "downplay" === t.type, h = 0; h < o.length; h++) {
                    var c = o[h];
                    s = i.action(c, this._model), s = s || C.extend({}, c), s.type = n.event || s.type, l.push(s), u && Z[r].call(this, c)
                }
                "none" !== r && !u && Z[r].call(this, t), s = a ? {
                    type: n.event || t.type,
                    batch: l
                } : l[0], this[F] = !1, !e && this._messageCenter.trigger(s.type, s), this._flushPendingActions()
            }
        }, W._flushPendingActions = function () {
            for (var t = this._pendingActions; t.length;) {
                var e = t.shift();
                this.dispatchAction(e)
            }
        }, W.on = n("on"), W.off = n("off"), W.one = n("one");
        var j = ["click", "dblclick", "mouseover", "mouseout", "mousedown", "mouseup", "globalout"];
        W._initEvents = function () {
            z(j, function (t) {
                this._zr.on(t, function (e) {
                    var i = this.getModel(), n = e.target;
                    if (n && null != n.dataIndex) {
                        var r = n.dataModel || i.getSeriesByIndex(n.seriesIndex), o = r && r.getDataParams(n.dataIndex, n.dataType) || {};
                        o.event = e, o.type = t, this.trigger(t, o)
                    } else n && n.eventData && this.trigger(t, n.eventData)
                }, this)
            }, this), z(X, function (t, e) {
                this._messageCenter.on(e, function (t) {
                    this.trigger(e, t)
                }, this)
            }, this)
        }, W.isDisposed = function () {
            return this._disposed
        }, W.clear = function () {
            this.setOption({}, !0)
        }, W.dispose = function () {
            if (!this._disposed) {
                this._disposed = !0;
                var t = this._api, e = this._model;
                z(this._componentsViews, function (i) {
                    i.dispose(e, t)
                }), z(this._chartsViews, function (i) {
                    i.dispose(e, t)
                }), this._zr.dispose(), delete J[this.id]
            }
        }, C.mixin(o, P);
        var U = [], X = {}, Y = [], $ = [], Q = [], K = {}, J = {}, tt = {}, et = new Date - 0, it = new Date - 0, nt = "_echarts_instance_", rt = {
            version: "3.2.2",
            dependencies: {zrender: "3.1.2"}
        };
        rt.init = function (t, e, i) {
            var n = new o(t, e, i);
            return n.id = "ec_" + et++, J[n.id] = n, t.setAttribute && t.setAttribute(nt, n.id), m(n), n
        }, rt.connect = function (t) {
            if (C.isArray(t)) {
                var e = t;
                t = null, C.each(e, function (e) {
                    null != e.group && (t = e.group)
                }), t = t || "g_" + it++, C.each(e, function (e) {
                    e.group = t
                })
            }
            return tt[t] = !0, t
        }, rt.disConnect = function (t) {
            tt[t] = !1
        }, rt.dispose = function (t) {
            C.isDom(t) ? t = rt.getInstanceByDom(t) : "string" == typeof t && (t = J[t]), t instanceof o && !t.isDisposed() && t.dispose()
        }, rt.getInstanceByDom = function (t) {
            var e = t.getAttribute(nt);
            return J[e]
        }, rt.getInstanceById = function (t) {
            return J[t]
        }, rt.registerTheme = function (t, e) {
            K[t] = e
        }, rt.registerPreprocessor = function (t) {
            $.push(t)
        }, rt.registerProcessor = function (t, e) {
            "function" == typeof t && (e = t, t = O), Y.push({prio: t, func: e})
        }, rt.registerAction = function (t, e, i) {
            "function" == typeof e && (i = e, e = "");
            var n = C.isObject(t) ? t.type : [t, t = {event: e}][0];
            t.event = (t.event || n).toLowerCase(), e = t.event, U[n] || (U[n] = {action: i, actionInfo: t}), X[e] = n
        }, rt.registerCoordinateSystem = function (t, e) {
            b.register(t, e)
        }, rt.registerLayout = function (t, e) {
            "function" == typeof t && (e = t, t = R), Q.push({prio: t, func: e, isLayout: !0})
        }, rt.registerVisual = function (t, e) {
            "function" == typeof t && (e = t, t = N), Q.push({prio: t, func: e})
        };
        var ot = S.parseClassType;
        rt.extendComponentModel = function (t, e) {
            var i = S;
            if (e) {
                var n = ot(e);
                i = S.getClass(n.main, n.sub, !0)
            }
            return i.extend(t)
        }, rt.extendComponentView = function (t, e) {
            var i = A;
            if (e) {
                var n = ot(e);
                i = A.getClass(n.main, n.sub, !0)
            }
            return i.extend(t)
        }, rt.extendSeriesModel = function (t, e) {
            var i = M;
            if (e) {
                e = "series." + e.replace("series.", "");
                var n = ot(e);
                i = M.getClass(n.main, n.sub, !0)
            }
            return i.extend(t)
        }, rt.extendChartView = function (t, e) {
            var i = I;
            if (e) {
                e.replace("series.", "");
                var n = ot(e);
                i = I.getClass(n.main, !0)
            }
            return I.extend(t)
        }, rt.setCanvasCreator = function (t) {
            C.createCanvas = t
        }, rt.registerVisual(V, i(135)), rt.registerPreprocessor(i(129)), rt.registerAction({
            type: "highlight",
            event: "highlight",
            update: "highlight"
        }, C.noop), rt.registerAction({
            type: "downplay",
            event: "downplay",
            update: "downplay"
        }, C.noop), rt.List = i(14), rt.Model = i(8), rt.graphic = i(3), rt.number = i(4), rt.format = i(9), rt.matrix = i(19), rt.vector = i(5), rt.color = i(18), rt.util = {}, z(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend", "defaults"], function (t) {
            rt.util[t] = C[t]
        }), rt.PRIORITY = {
            PROCESSOR: {FILTER: O, STATISTIC: E},
            VISUAL: {LAYOUT: R, GLOBAL: V, CHART: N, COMPONENT: B, BRUSH: G}
        }, t.exports = rt
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            return null != t && "none" != t
        }

        function r(t) {
            return "string" == typeof t ? _.lift(t, -.1) : t
        }

        function o(t) {
            if (t.__hoverStlDirty) {
                var e = t.style.stroke, i = t.style.fill, o = t.__hoverStl;
                o.fill = o.fill || (n(i) ? r(i) : null), o.stroke = o.stroke || (n(e) ? r(e) : null);
                var a = {};
                for (var s in o)o.hasOwnProperty(s) && (a[s] = t.style[s]);
                t.__normalStl = a, t.__hoverStlDirty = !1
            }
        }

        function a(t) {
            t.__isHover || (o(t), t.useHoverLayer ? t.__zr && t.__zr.addHover(t, t.__hoverStl) : (t.setStyle(t.__hoverStl), t.z2 += 1), t.__isHover = !0)
        }

        function s(t) {
            if (t.__isHover) {
                var e = t.__normalStl;
                t.useHoverLayer ? t.__zr && t.__zr.removeHover(t) : (e && t.setStyle(e), t.z2 -= 1), t.__isHover = !1
            }
        }

        function l(t) {
            "group" === t.type ? t.traverse(function (t) {
                "group" !== t.type && a(t)
            }) : a(t)
        }

        function u(t) {
            "group" === t.type ? t.traverse(function (t) {
                "group" !== t.type && s(t)
            }) : s(t)
        }

        function h(t, e) {
            t.__hoverStl = t.hoverStyle || e || {}, t.__hoverStlDirty = !0, t.__isHover && o(t)
        }

        function c() {
            !this.__isEmphasis && l(this)
        }

        function d() {
            !this.__isEmphasis && u(this)
        }

        function f() {
            this.__isEmphasis = !0, l(this)
        }

        function p() {
            this.__isEmphasis = !1, u(this)
        }

        function g(t, e, i, n, r, o) {
            "function" == typeof r && (o = r, r = null);
            var a = n && (n.ifEnableAnimation ? n.ifEnableAnimation() : n.getShallow("animation"));
            if (a) {
                var s = t ? "Update" : "", l = n && n.getShallow("animationDuration" + s), u = n && n.getShallow("animationEasing" + s), h = n && n.getShallow("animationDelay" + s);
                "function" == typeof h && (h = h(r)), l > 0 ? e.animateTo(i, l, h || 0, u, o) : (e.attr(i), o && o())
            } else e.attr(i), o && o()
        }

        var v = i(1), m = i(165), y = Math.round, x = i(6), _ = i(18), b = i(19), w = i(5), S = (i(29), {});
        S.Group = i(34), S.Image = i(48), S.Text = i(74), S.Circle = i(156), S.Sector = i(162), S.Ring = i(161), S.Polygon = i(158), S.Polyline = i(159), S.Rect = i(160), S.Line = i(157), S.BezierCurve = i(155), S.Arc = i(154), S.CompoundPath = i(149), S.LinearGradient = i(85), S.RadialGradient = i(150), S.BoundingRect = i(7), S.extendShape = function (t) {
            return x.extend(t)
        }, S.extendPath = function (t, e) {
            return m.extendFromString(t, e)
        }, S.makePath = function (t, e, i, n) {
            var r = m.createFromString(t, e), o = r.getBoundingRect();
            if (i) {
                var a = o.width / o.height;
                if ("center" === n) {
                    var s, l = i.height * a;
                    l <= i.width ? s = i.height : (l = i.width, s = l / a);
                    var u = i.x + i.width / 2, h = i.y + i.height / 2;
                    i.x = u - l / 2, i.y = h - s / 2, i.width = l, i.height = s
                }
                this.resizePath(r, i)
            }
            return r
        }, S.mergePath = m.mergePath, S.resizePath = function (t, e) {
            if (t.applyTransform) {
                var i = t.getBoundingRect(), n = i.calculateTransform(e);
                t.applyTransform(n)
            }
        }, S.subPixelOptimizeLine = function (t) {
            var e = S.subPixelOptimize, i = t.shape, n = t.style.lineWidth;
            return y(2 * i.x1) === y(2 * i.x2) && (i.x1 = i.x2 = e(i.x1, n, !0)), y(2 * i.y1) === y(2 * i.y2) && (i.y1 = i.y2 = e(i.y1, n, !0)), t
        }, S.subPixelOptimizeRect = function (t) {
            var e = S.subPixelOptimize, i = t.shape, n = t.style.lineWidth, r = i.x, o = i.y, a = i.width, s = i.height;
            return i.x = e(i.x, n, !0), i.y = e(i.y, n, !0), i.width = Math.max(e(r + a, n, !1) - i.x, 0 === a ? 0 : 1), i.height = Math.max(e(o + s, n, !1) - i.y, 0 === s ? 0 : 1), t
        }, S.subPixelOptimize = function (t, e, i) {
            var n = y(2 * t);
            return (n + y(e)) % 2 === 0 ? n / 2 : (n + (i ? 1 : -1)) / 2
        }, S.setHoverStyle = function (t, e) {
            "group" === t.type ? t.traverse(function (t) {
                "group" !== t.type && h(t, e)
            }) : h(t, e), t.on("mouseover", c).on("mouseout", d), t.on("emphasis", f).on("normal", p)
        }, S.setText = function (t, e, i) {
            var n = e.getShallow("position") || "inside", r = n.indexOf("inside") >= 0 ? "white" : i, o = e.getModel("textStyle");
            v.extend(t, {
                textDistance: e.getShallow("distance") || 5,
                textFont: o.getFont(),
                textPosition: n,
                textFill: o.getTextColor() || r
            })
        }, S.updateProps = function (t, e, i, n, r) {
            g(!0, t, e, i, n, r)
        }, S.initProps = function (t, e, i, n, r) {
            g(!1, t, e, i, n, r)
        }, S.getTransform = function (t, e) {
            for (var i = b.identity([]); t && t !== e;)b.mul(i, t.getLocalTransform(), i), t = t.parent;
            return i
        }, S.applyTransform = function (t, e, i) {
            return i && (e = b.invert([], e)), w.applyTransform([], t, e)
        }, S.transformDirection = function (t, e, i) {
            var n = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]), r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]), o = ["left" === t ? -n : "right" === t ? n : 0, "top" === t ? -r : "bottom" === t ? r : 0];
            return o = S.applyTransform(o, e, i), Math.abs(o[0]) > Math.abs(o[1]) ? o[0] > 0 ? "right" : "left" : o[1] > 0 ? "bottom" : "top"
        }, S.groupTransition = function (t, e, i, n) {
            function r(t) {
                var e = {};
                return t.traverse(function (t) {
                    !t.isGroup && t.anid && (e[t.anid] = t)
                }), e
            }

            function o(t) {
                var e = {position: w.clone(t.position), rotation: t.rotation};
                return t.shape && (e.shape = v.extend({}, t.shape)), e
            }

            if (t && e) {
                var a = r(t);
                e.traverse(function (t) {
                    if (!t.isGroup && t.anid) {
                        var e = a[t.anid];
                        if (e) {
                            var n = o(t);
                            t.attr(o(e)), S.updateProps(t, n, i, t.dataIndex)
                        }
                    }
                })
            }
        }, t.exports = S
    }, function (t, e) {
        function i(t) {
            return t.replace(/^\s+/, "").replace(/\s+$/, "")
        }

        var n = {}, r = 1e-4;
        n.linearMap = function (t, e, i, n) {
            var r = e[1] - e[0], o = i[1] - i[0];
            if (0 === r)return 0 === o ? i[0] : (i[0] + i[1]) / 2;
            if (n)if (r > 0) {
                if (t <= e[0])return i[0];
                if (t >= e[1])return i[1]
            } else {
                if (t >= e[0])return i[0];
                if (t <= e[1])return i[1]
            } else {
                if (t === e[0])return i[0];
                if (t === e[1])return i[1]
            }
            return (t - e[0]) / r * o + i[0]
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
            return "string" == typeof t ? i(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? NaN : +t
        }, n.round = function (t) {
            return +(+t).toFixed(10)
        }, n.asc = function (t) {
            return t.sort(function (t, e) {
                return t - e
            }), t
        }, n.getPrecision = function (t) {
            if (t = +t, isNaN(t))return 0;
            for (var e = 1, i = 0; Math.round(t * e) / e !== t;)e *= 10, i++;
            return i
        }, n.getPixelPrecision = function (t, e) {
            var i = Math.log, n = Math.LN10, r = Math.floor(i(t[1] - t[0]) / n), o = Math.round(i(Math.abs(e[1] - e[0])) / n);
            return Math.max(-r + o, 0)
        }, n.MAX_SAFE_INTEGER = 9007199254740991, n.remRadian = function (t) {
            var e = 2 * Math.PI;
            return (t % e + e) % e
        }, n.isRadianAroundZero = function (t) {
            return t > -r && r > t
        }, n.parseDate = function (t) {
            return t instanceof Date ? t : new Date("string" == typeof t ? new Date(t.replace(/-/g, "/")) - new Date("1970/01/01") : Math.round(t))
        }, n.quantity = function (t) {
            return Math.pow(10, Math.floor(Math.log(t) / Math.LN10))
        }, n.nice = function (t, e) {
            var i, r = n.quantity(t), o = t / r;
            return i = e ? 1.5 > o ? 1 : 2.5 > o ? 2 : 4 > o ? 3 : 7 > o ? 5 : 10 : 1 > o ? 1 : 2 > o ? 2 : 3 > o ? 3 : 5 > o ? 5 : 10, i * r
        }, t.exports = n
    }, function (t, e) {
        var i = "undefined" == typeof Float32Array ? Array : Float32Array, n = {
            create: function (t, e) {
                var n = new i(2);
                return null == t && (t = 0), null == e && (e = 0), n[0] = t, n[1] = e, n
            }, copy: function (t, e) {
                return t[0] = e[0], t[1] = e[1], t
            }, clone: function (t) {
                var e = new i(2);
                return e[0] = t[0], e[1] = t[1], e
            }, set: function (t, e, i) {
                return t[0] = e, t[1] = i, t
            }, add: function (t, e, i) {
                return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t
            }, scaleAndAdd: function (t, e, i, n) {
                return t[0] = e[0] + i[0] * n, t[1] = e[1] + i[1] * n, t
            }, sub: function (t, e, i) {
                return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t
            }, len: function (t) {
                return Math.sqrt(this.lenSquare(t))
            }, lenSquare: function (t) {
                return t[0] * t[0] + t[1] * t[1]
            }, mul: function (t, e, i) {
                return t[0] = e[0] * i[0], t[1] = e[1] * i[1], t
            }, div: function (t, e, i) {
                return t[0] = e[0] / i[0], t[1] = e[1] / i[1], t
            }, dot: function (t, e) {
                return t[0] * e[0] + t[1] * e[1]
            }, scale: function (t, e, i) {
                return t[0] = e[0] * i, t[1] = e[1] * i, t
            }, normalize: function (t, e) {
                var i = n.len(e);
                return 0 === i ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / i, t[1] = e[1] / i), t
            }, distance: function (t, e) {
                return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
            }, distanceSquare: function (t, e) {
                return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
            }, negate: function (t, e) {
                return t[0] = -e[0], t[1] = -e[1], t
            }, lerp: function (t, e, i, n) {
                return t[0] = e[0] + n * (i[0] - e[0]), t[1] = e[1] + n * (i[1] - e[1]), t
            }, applyTransform: function (t, e, i) {
                var n = e[0], r = e[1];
                return t[0] = i[0] * n + i[2] * r + i[4], t[1] = i[1] * n + i[3] * r + i[5], t
            }, min: function (t, e, i) {
                return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t
            }, max: function (t, e, i) {
                return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t
            }
        };
        n.length = n.len, n.lengthSquare = n.lenSquare, n.dist = n.distance, n.distSquare = n.distanceSquare, t.exports = n
    }, function (t, e, i) {
        function n(t) {
            r.call(this, t), this.path = new a
        }

        var r = i(37), o = i(1), a = i(28), s = i(145), l = i(63), u = l.prototype.getCanvasPattern, h = Math.abs;
        n.prototype = {
            constructor: n,
            type: "path",
            __dirtyPath: !0,
            strokeContainThreshold: 5,
            brush: function (t, e) {
                var i = this.style, n = this.path, r = i.hasStroke(), o = i.hasFill(), a = i.fill, s = i.stroke, l = o && !!a.colorStops, h = r && !!s.colorStops, c = o && !!a.image, d = r && !!s.image;
                if (i.bind(t, this, e), this.setTransform(t), this.__dirty) {
                    var f = this.getBoundingRect();
                    l && (this._fillGradient = i.getGradient(t, a, f)), h && (this._strokeGradient = i.getGradient(t, s, f))
                }
                l ? t.fillStyle = this._fillGradient : c && (t.fillStyle = u.call(a, t)), h ? t.strokeStyle = this._strokeGradient : d && (t.strokeStyle = u.call(s, t));
                var p = i.lineDash, g = i.lineDashOffset, v = !!t.setLineDash, m = this.getGlobalScale();
                n.setScale(m[0], m[1]), this.__dirtyPath || p && !v && r ? (n = this.path.beginPath(t), p && !v && (n.setLineDash(p), n.setLineDashOffset(g)), this.buildPath(n, this.shape, !1), this.__dirtyPath = !1) : (t.beginPath(), this.path.rebuildPath(t)), o && n.fill(t), p && v && (t.setLineDash(p), t.lineDashOffset = g), r && n.stroke(t), p && v && t.setLineDash([]), this.restoreTransform(t), (i.text || 0 === i.text) && this.drawRectText(t, this.getBoundingRect())
            },
            buildPath: function (t, e, i) {
            },
            getBoundingRect: function () {
                var t = this._rect, e = this.style, i = !t;
                if (i) {
                    var n = this.path;
                    this.__dirtyPath && (n.beginPath(), this.buildPath(n, this.shape, !1)), t = n.getBoundingRect()
                }
                if (this._rect = t, e.hasStroke()) {
                    var r = this._rectWithStroke || (this._rectWithStroke = t.clone());
                    if (this.__dirty || i) {
                        r.copy(t);
                        var o = e.lineWidth, a = e.strokeNoScale ? this.getLineScale() : 1;
                        e.hasFill() || (o = Math.max(o, this.strokeContainThreshold || 4)), a > 1e-10 && (r.width += o / a, r.height += o / a, r.x -= o / a / 2, r.y -= o / a / 2)
                    }
                    return r
                }
                return t
            },
            contain: function (t, e) {
                var i = this.transformCoordToLocal(t, e), n = this.getBoundingRect(), r = this.style;
                if (t = i[0], e = i[1], n.contain(t, e)) {
                    var o = this.path.data;
                    if (r.hasStroke()) {
                        var a = r.lineWidth, l = r.strokeNoScale ? this.getLineScale() : 1;
                        if (l > 1e-10 && (r.hasFill() || (a = Math.max(a, this.strokeContainThreshold)), s.containStroke(o, a / l, t, e)))return !0
                    }
                    if (r.hasFill())return s.contain(o, t, e)
                }
                return !1
            },
            dirty: function (t) {
                null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty()
            },
            animateShape: function (t) {
                return this.animate("shape", t)
            },
            attrKV: function (t, e) {
                "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : r.prototype.attrKV.call(this, t, e)
            },
            setShape: function (t, e) {
                var i = this.shape;
                if (i) {
                    if (o.isObject(t))for (var n in t)i[n] = t[n]; else i[t] = e;
                    this.dirty(!0)
                }
                return this
            },
            getLineScale: function () {
                var t = this.transform;
                return t && h(t[0] - 1) > 1e-10 && h(t[3] - 1) > 1e-10 ? Math.sqrt(h(t[0] * t[3] - t[2] * t[1])) : 1
            }
        }, n.extend = function (t) {
            var e = function (e) {
                n.call(this, e), t.style && this.style.extendFrom(t.style, !1);
                var i = t.shape;
                if (i) {
                    this.shape = this.shape || {};
                    var r = this.shape;
                    for (var o in i)!r.hasOwnProperty(o) && i.hasOwnProperty(o) && (r[o] = i[o])
                }
                t.init && t.init.call(this, e)
            };
            o.inherits(e, n);
            for (var i in t)"style" !== i && "shape" !== i && (e.prototype[i] = t[i]);
            return e
        }, o.inherits(n, r), t.exports = n
    }, function (t, e, i) {
        "use strict";
        function n(t, e, i, n) {
            this.x = t, this.y = e, this.width = i, this.height = n
        }

        var r = i(5), o = i(19), a = r.applyTransform, s = Math.min, l = Math.abs, u = Math.max;
        n.prototype = {
            constructor: n, union: function (t) {
                var e = s(t.x, this.x), i = s(t.y, this.y);
                this.width = u(t.x + t.width, this.x + this.width) - e, this.height = u(t.y + t.height, this.y + this.height) - i, this.x = e, this.y = i
            }, applyTransform: function () {
                var t = [], e = [];
                return function (i) {
                    i && (t[0] = this.x, t[1] = this.y, e[0] = this.x + this.width, e[1] = this.y + this.height, a(t, t, i), a(e, e, i), this.x = s(t[0], e[0]), this.y = s(t[1], e[1]), this.width = l(e[0] - t[0]), this.height = l(e[1] - t[1]))
                }
            }(), calculateTransform: function (t) {
                var e = this, i = t.width / e.width, n = t.height / e.height, r = o.create();
                return o.translate(r, r, [-e.x, -e.y]), o.scale(r, r, [i, n]), o.translate(r, r, [t.x, t.y]), r
            }, intersect: function (t) {
                var e = this, i = e.x, n = e.x + e.width, r = e.y, o = e.y + e.height, a = t.x, s = t.x + t.width, l = t.y, u = t.y + t.height;
                return !(a > n || i > s || l > o || r > u)
            }, contain: function (t, e) {
                var i = this;
                return t >= i.x && t <= i.x + i.width && e >= i.y && e <= i.y + i.height
            }, clone: function () {
                return new n(this.x, this.y, this.width, this.height)
            }, copy: function (t) {
                this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
            }
        }, t.exports = n
    }, function (t, e, i) {
        function n(t, e, i) {
            this.parentModel = e, this.ecModel = i, this.option = t
        }

        var r = i(1), o = i(21);
        n.prototype = {
            constructor: n, init: null, mergeOption: function (t) {
                r.merge(this.option, t, !0)
            }, get: function (t, e) {
                if (!t)return this.option;
                "string" == typeof t && (t = t.split("."));
                for (var i = this.option, n = this.parentModel, r = 0; r < t.length && (!t[r] || (i = i && "object" == typeof i ? i[t[r]] : null, null != i)); r++);
                return null == i && n && !e && (i = n.get(t)), i
            }, getShallow: function (t, e) {
                var i = this.option, n = i && i[t], r = this.parentModel;
                return null == n && r && !e && (n = r.getShallow(t)), n
            }, getModel: function (t, e) {
                var i = this.get(t, !0), r = this.parentModel, o = new n(i, e || r && r.getModel(t), this.ecModel);
                return o
            }, isEmpty: function () {
                return null == this.option
            }, restoreData: function () {
            }, clone: function () {
                var t = this.constructor;
                return new t(r.clone(this.option))
            }, setReadOnly: function (t) {
                o.setReadOnly(this, t)
            }
        }, o.enableClassExtend(n);
        var a = r.mixin;
        a(n, i(127)), a(n, i(124)), a(n, i(128)), a(n, i(126)), t.exports = n
    }, function (t, e, i) {
        function n(t) {
            return isNaN(t) ? "-" : (t = (t + "").split("."), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : ""))
        }

        function r(t) {
            return t.toLowerCase().replace(/-(.)/g, function (t, e) {
                return e.toUpperCase()
            })
        }

        function o(t) {
            var e = t.length;
            return "number" == typeof t ? [t, t, t, t] : 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
        }

        function a(t) {
            return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
        }

        function s(t, e) {
            return "{" + t + (null == e ? "" : e) + "}"
        }

        function l(t, e) {
            c.isArray(e) || (e = [e]);
            var i = e.length;
            if (!i)return "";
            for (var n = e[0].$vars || [], r = 0; r < n.length; r++) {
                var o = p[r];
                t = t.replace(s(o), s(o, 0))
            }
            for (var a = 0; i > a; a++)for (var l = 0; l < n.length; l++)t = t.replace(s(p[l], a), e[a][n[l]]);
            return t
        }

        function u(t, e) {
            "week" !== t && "month" !== t && "quarter" !== t && "half-year" !== t && "year" !== t || (t = "MM-dd\nyyyy");
            var i = d.parseDate(e), n = i.getFullYear(), r = i.getMonth() + 1, o = i.getDate(), a = i.getHours(), s = i.getMinutes(), l = i.getSeconds();
            return t = t.replace("MM", h(r)).toLowerCase().replace("yyyy", n).replace("yy", n % 100).replace("dd", h(o)).replace("d", o).replace("hh", h(a)).replace("h", a).replace("mm", h(s)).replace("m", s).replace("ss", h(l)).replace("s", l)
        }

        function h(t) {
            return 10 > t ? "0" + t : t
        }

        var c = i(1), d = i(4), f = i(16), p = ["a", "b", "c", "d", "e", "f", "g"];
        t.exports = {
            normalizeCssArray: o,
            addCommas: n,
            toCamelCase: r,
            encodeHTML: a,
            formatTpl: l,
            formatTime: u,
            truncateText: f.truncateText
        }
    }, function (t, e, i) {
        var n = i(9), r = i(4), o = i(8), a = i(1), s = ["x", "y", "z", "radius", "angle"], l = {};
        l.createNameEach = function (t, e) {
            t = t.slice();
            var i = a.map(t, l.capitalFirst);
            e = (e || []).slice();
            var n = a.map(e, l.capitalFirst);
            return function (r, o) {
                a.each(t, function (t, a) {
                    for (var s = {name: t, capital: i[a]}, l = 0; l < e.length; l++)s[e[l]] = t + n[l];
                    r.call(o, s)
                })
            }
        }, l.capitalFirst = function (t) {
            return t ? t.charAt(0).toUpperCase() + t.substr(1) : t
        }, l.eachAxisDim = l.createNameEach(s, ["axisIndex", "axis", "index"]), l.normalizeToArray = function (t) {
            return t instanceof Array ? t : null == t ? [] : [t]
        }, l.createLinkedNodesFinder = function (t, e, i) {
            function n(t, e) {
                return a.indexOf(e.nodes, t) >= 0
            }

            function r(t, n) {
                var r = !1;
                return e(function (e) {
                    a.each(i(t, e) || [], function (t) {
                        n.records[e.name][t] && (r = !0)
                    })
                }), r
            }

            function o(t, n) {
                n.nodes.push(t), e(function (e) {
                    a.each(i(t, e) || [], function (t) {
                        n.records[e.name][t] = !0
                    })
                })
            }

            return function (i) {
                function a(t) {
                    !n(t, s) && r(t, s) && (o(t, s), l = !0)
                }

                var s = {nodes: [], records: {}};
                if (e(function (t) {
                        s.records[t.name] = {}
                    }), !i)return s;
                o(i, s);
                var l;
                do l = !1, t(a); while (l);
                return s
            }
        }, l.defaultEmphasis = function (t, e) {
            if (t) {
                var i = t.emphasis = t.emphasis || {}, n = t.normal = t.normal || {};
                a.each(e, function (t) {
                    var e = a.retrieve(i[t], n[t]);
                    null != e && (i[t] = e)
                })
            }
        }, l.LABEL_OPTIONS = ["position", "show", "textStyle", "distance", "formatter"], l.getDataItemValue = function (t) {
            return t && (null == t.value ? t : t.value)
        }, l.isDataItemOption = function (t) {
            return a.isObject(t) && !(t instanceof Array)
        }, l.converDataValue = function (t, e) {
            var i = e && e.type;
            return "ordinal" === i ? t : ("time" !== i || isFinite(t) || null == t || "-" === t || (t = +r.parseDate(t)), null == t || "" === t ? NaN : +t)
        }, l.createDataFormatModel = function (t, e) {
            var i = new o;
            return a.mixin(i, l.dataFormatMixin), i.seriesIndex = e.seriesIndex, i.name = e.name || "", i.mainType = e.mainType, i.subType = e.subType, i.getData = function () {
                return t
            }, i
        }, l.dataFormatMixin = {
            getDataParams: function (t, e) {
                var i = this.getData(e), n = this.seriesIndex, r = this.name, o = this.getRawValue(t, e), a = i.getRawIndex(t), s = i.getName(t, !0), l = i.getRawDataItem(t);
                return {
                    componentType: this.mainType,
                    componentSubType: this.subType,
                    seriesType: "series" === this.mainType ? this.subType : null,
                    seriesIndex: n,
                    seriesName: r,
                    name: s,
                    dataIndex: a,
                    data: l,
                    dataType: e,
                    value: o,
                    color: i.getItemVisual(t, "color"),
                    $vars: ["seriesName", "name", "value"]
                }
            }, getFormattedLabel: function (t, e, i, r) {
                e = e || "normal";
                var o = this.getData(i), a = o.getItemModel(t), s = this.getDataParams(t, i);
                null != r && s.value instanceof Array && (s.value = s.value[r]);
                var l = a.get(["label", e, "formatter"]);
                return "function" == typeof l ? (s.status = e, l(s)) : "string" == typeof l ? n.formatTpl(l, s) : void 0
            }, getRawValue: function (t, e) {
                var i = this.getData(e), n = i.getRawDataItem(t);
                return null != n ? !a.isObject(n) || n instanceof Array ? n : n.value : void 0
            }, formatTooltip: a.noop
        }, l.mappingToExists = function (t, e) {
            e = (e || []).slice();
            var i = a.map(t || [], function (t, e) {
                return {exist: t}
            });
            return a.each(e, function (t, n) {
                if (a.isObject(t))for (var r = 0; r < i.length; r++) {
                    var o = i[r].exist;
                    if (!i[r].option && (null != t.id && o.id === t.id + "" || null != t.name && !l.isIdInner(t) && !l.isIdInner(o) && o.name === t.name + "")) {
                        i[r].option = t, e[n] = null;
                        break
                    }
                }
            }), a.each(e, function (t, e) {
                if (a.isObject(t)) {
                    for (var n = 0; n < i.length; n++) {
                        var r = i[n].exist;
                        if (!i[n].option && !l.isIdInner(r) && null == t.id) {
                            i[n].option = t;
                            break
                        }
                    }
                    n >= i.length && i.push({option: t})
                }
            }), i
        }, l.isIdInner = function (t) {
            return a.isObject(t) && t.id && 0 === (t.id + "").indexOf("\x00_ec_\x00")
        }, l.compressBatches = function (t, e) {
            function i(t, e, i) {
                for (var n = 0, r = t.length; r > n; n++)for (var o = t[n].seriesId, a = l.normalizeToArray(t[n].dataIndex), s = i && i[o], u = 0, h = a.length; h > u; u++) {
                    var c = a[u];
                    s && s[c] ? s[c] = null : (e[o] || (e[o] = {}))[c] = 1
                }
            }

            function n(t, e) {
                var i = [];
                for (var r in t)if (t.hasOwnProperty(r) && null != t[r])if (e)i.push(+r); else {
                    var o = n(t[r], !0);
                    o.length && i.push({seriesId: r, dataIndex: o})
                }
                return i
            }

            var r = {}, o = {};
            return i(t || [], r), i(e || [], o, r), [n(r), n(o)]
        }, t.exports = l
    }, function (t, e, i) {
        function n(t) {
            var e = [];
            return o.each(h.getClassesByMainType(t), function (t) {
                a.apply(e, t.prototype.dependencies || [])
            }), o.map(e, function (t) {
                return l.parseClassType(t).main
            })
        }

        var r = i(8), o = i(1), a = Array.prototype.push, s = i(43), l = i(21), u = i(13), h = r.extend({
            type: "component",
            id: "",
            name: "",
            mainType: "",
            subType: "",
            componentIndex: 0,
            defaultOption: null,
            ecModel: null,
            dependentModels: [],
            uid: null,
            layoutMode: null,
            $constructor: function (t, e, i, n) {
                r.call(this, t, e, i, n), o.extend(this, n), this.uid = s.getUID("componentModel")
            },
            init: function (t, e, i, n) {
                this.mergeDefaultAndTheme(t, i)
            },
            mergeDefaultAndTheme: function (t, e) {
                var i = this.layoutMode, n = i ? u.getLayoutParams(t) : {}, r = e.getTheme();
                o.merge(t, r.get(this.mainType)), o.merge(t, this.getDefaultOption()), i && u.mergeLayoutParam(t, n, i)
            },
            mergeOption: function (t) {
                o.merge(this.option, t, !0);
                var e = this.layoutMode;
                e && u.mergeLayoutParam(this.option, t, e)
            },
            optionUpdated: function (t, e) {
            },
            getDefaultOption: function () {
                if (!this.hasOwnProperty("__defaultOption")) {
                    for (var t = [], e = this.constructor; e;) {
                        var i = e.prototype.defaultOption;
                        i && t.push(i), e = e.superClass
                    }
                    for (var n = {}, r = t.length - 1; r >= 0; r--)n = o.merge(n, t[r], !0);
                    this.__defaultOption = n
                }
                return this.__defaultOption
            }
        });
        l.enableClassManagement(h, {registerWhenExtend: !0}), s.enableSubTypeDefaulter(h), s.enableTopologicalTravel(h, n), o.mixin(h, i(125)), t.exports = h
    }, function (t, e) {
        function i(t) {
            var e = {}, i = {}, n = t.match(/Firefox\/([\d.]+)/), r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/), o = t.match(/Edge\/([\d.]+)/);
            return n && (i.firefox = !0, i.version = n[1]), r && (i.ie = !0, i.version = r[1]), r && (i.ie = !0, i.version = r[1]), o && (i.edge = !0, i.version = o[1]), {
                browser: i,
                os: e,
                node: !1,
                canvasSupported: !!document.createElement("canvas").getContext,
                touchEventsSupported: "ontouchstart" in window && !i.ie && !i.edge,
                pointerEventsSupported: "onpointerdown" in window && (i.edge || i.ie && i.version >= 10)
            }
        }

        var n = {};
        n = "undefined" == typeof navigator ? {
            browser: {},
            os: {},
            node: !0,
            canvasSupported: !0
        } : i(navigator.userAgent), t.exports = n
    }, function (t, e, i) {
        "use strict";
        function n(t, e, i, n, r) {
            var o = 0, a = 0;
            null == n && (n = 1 / 0), null == r && (r = 1 / 0);
            var s = 0;
            e.eachChild(function (l, u) {
                var h, c, d = l.position, f = l.getBoundingRect(), p = e.childAt(u + 1), g = p && p.getBoundingRect();
                if ("horizontal" === t) {
                    var v = f.width + (g ? -g.x + f.x : 0);
                    h = o + v, h > n || l.newline ? (o = 0, h = v, a += s + i, s = f.height) : s = Math.max(s, f.height)
                } else {
                    var m = f.height + (g ? -g.y + f.y : 0);
                    c = a + m, c > r || l.newline ? (o += s + i, a = 0, c = m, s = f.width) : s = Math.max(s, f.width)
                }
                l.newline || (d[0] = o, d[1] = a, "horizontal" === t ? o = h + i : a = c + i)
            })
        }

        var r = i(1), o = i(7), a = i(4), s = i(9), l = a.parsePercent, u = r.each, h = {}, c = ["left", "right", "top", "bottom", "width", "height"];
        h.box = n, h.vbox = r.curry(n, "vertical"), h.hbox = r.curry(n, "horizontal"), h.getAvailableSize = function (t, e, i) {
            var n = e.width, r = e.height, o = l(t.x, n), a = l(t.y, r), u = l(t.x2, n), h = l(t.y2, r);
            return (isNaN(o) || isNaN(parseFloat(t.x))) && (o = 0), (isNaN(u) || isNaN(parseFloat(t.x2))) && (u = n), (isNaN(a) || isNaN(parseFloat(t.y))) && (a = 0), (isNaN(h) || isNaN(parseFloat(t.y2))) && (h = r), i = s.normalizeCssArray(i || 0), {
                width: Math.max(u - o - i[1] - i[3], 0),
                height: Math.max(h - a - i[0] - i[2], 0)
            }
        }, h.getLayoutRect = function (t, e, i) {
            i = s.normalizeCssArray(i || 0);
            var n = e.width, r = e.height, a = l(t.left, n), u = l(t.top, r), h = l(t.right, n), c = l(t.bottom, r), d = l(t.width, n), f = l(t.height, r), p = i[2] + i[0], g = i[1] + i[3], v = t.aspect;
            switch (isNaN(d) && (d = n - h - g - a), isNaN(f) && (f = r - c - p - u), isNaN(d) && isNaN(f) && (v > n / r ? d = .8 * n : f = .8 * r), null != v && (isNaN(d) && (d = v * f), isNaN(f) && (f = d / v)), isNaN(a) && (a = n - h - d - g), isNaN(u) && (u = r - c - f - p), t.left || t.right) {
                case"center":
                    a = n / 2 - d / 2 - i[3];
                    break;
                case"right":
                    a = n - d - g
            }
            switch (t.top || t.bottom) {
                case"middle":
                case"center":
                    u = r / 2 - f / 2 - i[0];
                    break;
                case"bottom":
                    u = r - f - p
            }
            a = a || 0, u = u || 0, isNaN(d) && (d = n - a - (h || 0)), isNaN(f) && (f = r - u - (c || 0));
            var m = new o(a + i[3], u + i[0], d, f);
            return m.margin = i, m
        }, h.positionGroup = function (t, e, i, n) {
            var o = t.getBoundingRect();
            e = r.extend(r.clone(e), {
                width: o.width,
                height: o.height
            }), e = h.getLayoutRect(e, i, n), t.attr("position", [e.x - o.x, e.y - o.y])
        }, h.mergeLayoutParam = function (t, e, i) {
            function n(n) {
                var r = {}, s = 0, l = {}, h = 0, c = i.ignoreSize ? 1 : 2;
                if (u(n, function (e) {
                        l[e] = t[e]
                    }), u(n, function (t) {
                        o(e, t) && (r[t] = l[t] = e[t]), a(r, t) && s++, a(l, t) && h++
                    }), h !== c && s) {
                    if (s >= c)return r;
                    for (var d = 0; d < n.length; d++) {
                        var f = n[d];
                        if (!o(r, f) && o(t, f)) {
                            r[f] = t[f];
                            break
                        }
                    }
                    return r
                }
                return l
            }

            function o(t, e) {
                return t.hasOwnProperty(e)
            }

            function a(t, e) {
                return null != t[e] && "auto" !== t[e]
            }

            function s(t, e, i) {
                u(t, function (t) {
                    e[t] = i[t]
                })
            }

            !r.isObject(i) && (i = {});
            var l = ["width", "left", "right"], h = ["height", "top", "bottom"], c = n(l), d = n(h);
            s(l, t, c), s(h, t, d)
        }, h.getLayoutParams = function (t) {
            return h.copyLayoutParams({}, t)
        }, h.copyLayoutParams = function (t, e) {
            return e && t && u(c, function (i) {
                e.hasOwnProperty(i) && (t[i] = e[i])
            }), t
        }, t.exports = h
    }, function (t, e, i) {
        (function (e) {
            function n(t) {
                return d.isArray(t) || (t = [t]), t
            }

            function r(t, e) {
                var i = t.dimensions, n = new m(d.map(i, t.getDimensionInfo, t), t.hostModel);
                v(n, t);
                for (var r = n._storage = {}, o = t._storage, a = 0; a < i.length; a++) {
                    var s = i[a], l = o[s];
                    d.indexOf(e, s) >= 0 ? r[s] = new l.constructor(o[s].length) : r[s] = o[s]
                }
                return n
            }

            var o = "undefined", a = "undefined" == typeof window ? e : window, s = typeof a.Float64Array === o ? Array : a.Float64Array, l = typeof a.Int32Array === o ? Array : a.Int32Array, u = {
                "float": s,
                "int": l,
                ordinal: Array,
                number: Array,
                time: Array
            }, h = i(8), c = i(45), d = i(1), f = i(10), p = d.isObject, g = ["stackedOn", "hasItemOption", "_nameList", "_idList", "_rawData"], v = function (t, e) {
                d.each(g.concat(e.__wrappedMethods || []), function (i) {
                    e.hasOwnProperty(i) && (t[i] = e[i])
                }), t.__wrappedMethods = e.__wrappedMethods
            }, m = function (t, e) {
                t = t || ["x", "y"];
                for (var i = {}, n = [], r = 0; r < t.length; r++) {
                    var o, a = {};
                    "string" == typeof t[r] ? (o = t[r], a = {
                        name: o,
                        stackable: !1,
                        type: "number"
                    }) : (a = t[r], o = a.name, a.type = a.type || "number"), n.push(o), i[o] = a
                }
                this.dimensions = n, this._dimensionInfos = i, this.hostModel = e, this.dataType, this.indices = [], this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this.stackedOn = null, this._visual = {}, this._layout = {}, this._itemVisuals = [],
                    this._itemLayouts = [], this._graphicEls = [], this._rawData, this._extent
            }, y = m.prototype;
            y.type = "list", y.hasItemOption = !0, y.getDimension = function (t) {
                return isNaN(t) || (t = this.dimensions[t] || t), t
            }, y.getDimensionInfo = function (t) {
                return d.clone(this._dimensionInfos[this.getDimension(t)])
            }, y.initData = function (t, e, i) {
                t = t || [], this._rawData = t;
                var n = this._storage = {}, r = this.indices = [], o = this.dimensions, a = t.length, s = this._dimensionInfos, l = [], h = {};
                e = e || [];
                for (var c = 0; c < o.length; c++) {
                    var d = s[o[c]], p = u[d.type];
                    n[o[c]] = new p(a)
                }
                var g = this;
                i || (g.hasItemOption = !1), i = i || function (t, e, i, n) {
                        var r = f.getDataItemValue(t);
                        return f.isDataItemOption(t) && (g.hasItemOption = !0), f.converDataValue(r instanceof Array ? r[n] : r, s[e])
                    };
                for (var v = 0; v < t.length; v++) {
                    for (var m = t[v], y = 0; y < o.length; y++) {
                        var x = o[y], _ = n[x];
                        _[v] = i(m, x, v, y)
                    }
                    r.push(v)
                }
                for (var c = 0; c < t.length; c++) {
                    e[c] || t[c] && null != t[c].name && (e[c] = t[c].name);
                    var b = e[c] || "", w = t[c] && t[c].id;
                    !w && b && (h[b] = h[b] || 0, w = b, h[b] > 0 && (w += "__ec__" + h[b]), h[b]++), w && (l[c] = w)
                }
                this._nameList = e, this._idList = l
            }, y.count = function () {
                return this.indices.length
            }, y.get = function (t, e, i) {
                var n = this._storage, r = this.indices[e];
                if (null == r)return NaN;
                var o = n[t] && n[t][r];
                if (i) {
                    var a = this._dimensionInfos[t];
                    if (a && a.stackable)for (var s = this.stackedOn; s;) {
                        var l = s.get(t, e);
                        (o >= 0 && l > 0 || 0 >= o && 0 > l) && (o += l), s = s.stackedOn
                    }
                }
                return o
            }, y.getValues = function (t, e, i) {
                var n = [];
                d.isArray(t) || (i = e, e = t, t = this.dimensions);
                for (var r = 0, o = t.length; o > r; r++)n.push(this.get(t[r], e, i));
                return n
            }, y.hasValue = function (t) {
                for (var e = this.dimensions, i = this._dimensionInfos, n = 0, r = e.length; r > n; n++)if ("ordinal" !== i[e[n]].type && isNaN(this.get(e[n], t)))return !1;
                return !0
            }, y.getDataExtent = function (t, e) {
                t = this.getDimension(t);
                var i = this._storage[t], n = this.getDimensionInfo(t);
                e = n && n.stackable && e;
                var r, o = (this._extent || (this._extent = {}))[t + !!e];
                if (o)return o;
                if (i) {
                    for (var a = 1 / 0, s = -(1 / 0), l = 0, u = this.count(); u > l; l++)r = this.get(t, l, e), a > r && (a = r), r > s && (s = r);
                    return this._extent[t + !!e] = [a, s]
                }
                return [1 / 0, -(1 / 0)]
            }, y.getSum = function (t, e) {
                var i = this._storage[t], n = 0;
                if (i)for (var r = 0, o = this.count(); o > r; r++) {
                    var a = this.get(t, r, e);
                    isNaN(a) || (n += a)
                }
                return n
            }, y.indexOf = function (t, e) {
                var i = this._storage, n = i[t], r = this.indices;
                if (n)for (var o = 0, a = r.length; a > o; o++) {
                    var s = r[o];
                    if (n[s] === e)return o
                }
                return -1
            }, y.indexOfName = function (t) {
                for (var e = this.indices, i = this._nameList, n = 0, r = e.length; r > n; n++) {
                    var o = e[n];
                    if (i[o] === t)return n
                }
                return -1
            }, y.indexOfRawIndex = function (t) {
                for (var e = this.indices, i = 0, n = e.length - 1; n >= i;) {
                    var r = (i + n) / 2 | 0;
                    if (e[r] < t)i = r + 1; else {
                        if (!(e[r] > t))return r;
                        n = r - 1
                    }
                }
                return -1
            }, y.indexOfNearest = function (t, e, i, n) {
                var r = this._storage, o = r[t];
                null == n && (n = 1 / 0);
                var a = -1;
                if (o)for (var s = Number.MAX_VALUE, l = 0, u = this.count(); u > l; l++) {
                    var h = e - this.get(t, l, i), c = Math.abs(h);
                    n >= h && (s > c || c === s && h > 0) && (s = c, a = l)
                }
                return a
            }, y.getRawIndex = function (t) {
                var e = this.indices[t];
                return null == e ? -1 : e
            }, y.getRawDataItem = function (t) {
                return this._rawData[this.getRawIndex(t)]
            }, y.getName = function (t) {
                return this._nameList[this.indices[t]] || ""
            }, y.getId = function (t) {
                return this._idList[this.indices[t]] || this.getRawIndex(t) + ""
            }, y.each = function (t, e, i, r) {
                "function" == typeof t && (r = i, i = e, e = t, t = []), t = d.map(n(t), this.getDimension, this);
                var o = [], a = t.length, s = this.indices;
                r = r || this;
                for (var l = 0; l < s.length; l++)switch (a) {
                    case 0:
                        e.call(r, l);
                        break;
                    case 1:
                        e.call(r, this.get(t[0], l, i), l);
                        break;
                    case 2:
                        e.call(r, this.get(t[0], l, i), this.get(t[1], l, i), l);
                        break;
                    default:
                        for (var u = 0; a > u; u++)o[u] = this.get(t[u], l, i);
                        o[u] = l, e.apply(r, o)
                }
            }, y.filterSelf = function (t, e, i, r) {
                "function" == typeof t && (r = i, i = e, e = t, t = []), t = d.map(n(t), this.getDimension, this);
                var o = [], a = [], s = t.length, l = this.indices;
                r = r || this;
                for (var u = 0; u < l.length; u++) {
                    var h;
                    if (1 === s)h = e.call(r, this.get(t[0], u, i), u); else {
                        for (var c = 0; s > c; c++)a[c] = this.get(t[c], u, i);
                        a[c] = u, h = e.apply(r, a)
                    }
                    h && o.push(l[u])
                }
                return this.indices = o, this._extent = {}, this
            }, y.mapArray = function (t, e, i, n) {
                "function" == typeof t && (n = i, i = e, e = t, t = []);
                var r = [];
                return this.each(t, function () {
                    r.push(e && e.apply(this, arguments))
                }, i, n), r
            }, y.map = function (t, e, i, o) {
                t = d.map(n(t), this.getDimension, this);
                var a = r(this, t), s = a.indices = this.indices, l = a._storage, u = [];
                return this.each(t, function () {
                    var i = arguments[arguments.length - 1], n = e && e.apply(this, arguments);
                    if (null != n) {
                        "number" == typeof n && (u[0] = n, n = u);
                        for (var r = 0; r < n.length; r++) {
                            var o = t[r], a = l[o], h = s[i];
                            a && (a[h] = n[r])
                        }
                    }
                }, i, o), a
            }, y.downSample = function (t, e, i, n) {
                for (var o = r(this, [t]), a = this._storage, s = o._storage, l = this.indices, u = o.indices = [], h = [], c = [], d = Math.floor(1 / e), f = s[t], p = this.count(), g = 0; g < a[t].length; g++)s[t][g] = a[t][g];
                for (var g = 0; p > g; g += d) {
                    d > p - g && (d = p - g, h.length = d);
                    for (var v = 0; d > v; v++) {
                        var m = l[g + v];
                        h[v] = f[m], c[v] = m
                    }
                    var y = i(h), m = c[n(h, y) || 0];
                    f[m] = y, u.push(m)
                }
                return o
            }, y.getItemModel = function (t) {
                var e = this.hostModel;
                return t = this.indices[t], new h(this._rawData[t], e, e && e.ecModel)
            }, y.diff = function (t) {
                var e = this._idList, i = t && t._idList;
                return new c(t ? t.indices : [], this.indices, function (t) {
                    return i[t] || t + ""
                }, function (t) {
                    return e[t] || t + ""
                })
            }, y.getVisual = function (t) {
                var e = this._visual;
                return e && e[t]
            }, y.setVisual = function (t, e) {
                if (p(t))for (var i in t)t.hasOwnProperty(i) && this.setVisual(i, t[i]); else this._visual = this._visual || {}, this._visual[t] = e
            }, y.setLayout = function (t, e) {
                if (p(t))for (var i in t)t.hasOwnProperty(i) && this.setLayout(i, t[i]); else this._layout[t] = e
            }, y.getLayout = function (t) {
                return this._layout[t]
            }, y.getItemLayout = function (t) {
                return this._itemLayouts[t]
            }, y.setItemLayout = function (t, e, i) {
                this._itemLayouts[t] = i ? d.extend(this._itemLayouts[t] || {}, e) : e
            }, y.clearItemLayouts = function () {
                this._itemLayouts.length = 0
            }, y.getItemVisual = function (t, e, i) {
                var n = this._itemVisuals[t], r = n && n[e];
                return null != r || i ? r : this.getVisual(e)
            }, y.setItemVisual = function (t, e, i) {
                var n = this._itemVisuals[t] || {};
                if (this._itemVisuals[t] = n, p(e))for (var r in e)e.hasOwnProperty(r) && (n[r] = e[r]); else n[e] = i
            }, y.clearAllVisual = function () {
                this._visual = {}, this._itemVisuals = []
            };
            var x = function (t) {
                t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType
            };
            y.setItemGraphicEl = function (t, e) {
                var i = this.hostModel;
                e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = i && i.seriesIndex, "group" === e.type && e.traverse(x, e)), this._graphicEls[t] = e
            }, y.getItemGraphicEl = function (t) {
                return this._graphicEls[t]
            }, y.eachItemGraphicEl = function (t, e) {
                d.each(this._graphicEls, function (i, n) {
                    i && t && t.call(e, i, n)
                })
            }, y.cloneShallow = function () {
                var t = d.map(this.dimensions, this.getDimensionInfo, this), e = new m(t, this.hostModel);
                return e._storage = this._storage, v(e, this), e.indices = this.indices.slice(), this._extent && (e._extent = d.extend({}, this._extent)), e
            }, y.wrapMethod = function (t, e) {
                var i = this[t];
                "function" == typeof i && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function () {
                    var t = i.apply(this, arguments);
                    return e.apply(this, [t].concat(d.slice(arguments)))
                })
            }, y.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], y.CHANGABLE_METHODS = ["filterSelf"], t.exports = m
        }).call(e, function () {
            return this
        }())
    }, function (t, e, i) {
        "use strict";
        var n = i(1), r = i(9), o = i(10), a = i(11), s = i(56), l = i(12), u = r.encodeHTML, h = r.addCommas, c = a.extend({
            type: "series.__base__",
            seriesIndex: 0,
            coordinateSystem: null,
            defaultOption: null,
            legendDataProvider: null,
            visualColorAccessPath: "itemStyle.normal.color",
            init: function (t, e, i, n) {
                this.seriesIndex = this.componentIndex, this.mergeDefaultAndTheme(t, i), this._dataBeforeProcessed = this.getInitialData(t, i), this._data = this._dataBeforeProcessed.cloneShallow()
            },
            mergeDefaultAndTheme: function (t, e) {
                n.merge(t, e.getTheme().get(this.subType)), n.merge(t, this.getDefaultOption()), o.defaultEmphasis(t.label, o.LABEL_OPTIONS), this.fillDataTextStyle(t.data)
            },
            mergeOption: function (t, e) {
                t = n.merge(this.option, t, !0), this.fillDataTextStyle(t.data);
                var i = this.getInitialData(t, e);
                i && (this._data = i, this._dataBeforeProcessed = i.cloneShallow())
            },
            fillDataTextStyle: function (t) {
                if (t)for (var e = 0; e < t.length; e++)t[e] && t[e].label && o.defaultEmphasis(t[e].label, o.LABEL_OPTIONS)
            },
            getInitialData: function () {
            },
            getData: function (t) {
                return null == t ? this._data : this._data.getLinkedData(t)
            },
            setData: function (t) {
                this._data = t
            },
            getRawData: function () {
                return this._dataBeforeProcessed
            },
            coordDimToDataDim: function (t) {
                return [t]
            },
            dataDimToCoordDim: function (t) {
                return t
            },
            getBaseAxis: function () {
                var t = this.coordinateSystem;
                return t && t.getBaseAxis && t.getBaseAxis()
            },
            formatTooltip: function (t, e, i) {
                function o(t) {
                    return n.map(t, function (t, i) {
                        var n = a.getDimensionInfo(i), o = n && n.type;
                        return "ordinal" === o ? t : "time" === o ? e ? "" : r.formatTime("yyyy/mm/dd hh:mm:ss", t) : h(t)
                    }).filter(function (t) {
                        return !!t
                    }).join(", ")
                }

                var a = this._data, s = this.getRawValue(t), l = n.isArray(s) ? o(s) : h(s), c = a.getName(t), d = a.getItemVisual(t, "color"), f = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + d + '"></span>', p = this.name;
                return "\x00-" === p && (p = ""), e ? f + u(this.name) + " : " + l : (p && u(p) + "<br />") + f + (c ? u(c) + " : " + l : l)
            },
            ifEnableAnimation: function () {
                if (l.node)return !1;
                var t = this.getShallow("animation");
                return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), t
            },
            restoreData: function () {
                this._data = this._dataBeforeProcessed.cloneShallow()
            },
            getColorFromPalette: function (t, e) {
                var i = this.ecModel, n = s.getColorFromPalette.call(this, t, e);
                return n || (n = i.getColorFromPalette(t, e)), n
            },
            getAxisTooltipDataIndex: null
        });
        n.mixin(c, o.dataFormatMixin), n.mixin(c, s), t.exports = c
    }, function (t, e, i) {
        function n(t, e) {
            var i = t + ":" + e;
            if (l[i])return l[i];
            for (var n = (t + "").split("\n"), r = 0, o = 0, a = n.length; a > o; o++)r = Math.max(p.measureText(n[o], e).width, r);
            return u > h && (u = 0, l = {}), u++, l[i] = r, r
        }

        function r(t, e, i, r) {
            var o = ((t || "") + "").split("\n").length, a = n(t, e), s = n("国", e), l = o * s, u = new d(0, 0, a, l);
            switch (u.lineHeight = s, r) {
                case"bottom":
                case"alphabetic":
                    u.y -= s;
                    break;
                case"middle":
                    u.y -= s / 2
            }
            switch (i) {
                case"end":
                case"right":
                    u.x -= u.width;
                    break;
                case"center":
                    u.x -= u.width / 2
            }
            return u
        }

        function o(t, e, i, n) {
            var r = e.x, o = e.y, a = e.height, s = e.width, l = i.height, u = a / 2 - l / 2, h = "left";
            switch (t) {
                case"left":
                    r -= n, o += u, h = "right";
                    break;
                case"right":
                    r += n + s, o += u, h = "left";
                    break;
                case"top":
                    r += s / 2, o -= n + l, h = "center";
                    break;
                case"bottom":
                    r += s / 2, o += a + n, h = "center";
                    break;
                case"inside":
                    r += s / 2, o += u, h = "center";
                    break;
                case"insideLeft":
                    r += n, o += u, h = "left";
                    break;
                case"insideRight":
                    r += s - n, o += u, h = "right";
                    break;
                case"insideTop":
                    r += s / 2, o += n, h = "center";
                    break;
                case"insideBottom":
                    r += s / 2, o += a - l - n, h = "center";
                    break;
                case"insideTopLeft":
                    r += n, o += n, h = "left";
                    break;
                case"insideTopRight":
                    r += s - n, o += n, h = "right";
                    break;
                case"insideBottomLeft":
                    r += n, o += a - l - n;
                    break;
                case"insideBottomRight":
                    r += s - n, o += a - l - n, h = "right"
            }
            return {x: r, y: o, textAlign: h, textBaseline: "top"}
        }

        function a(t, e, i, r, o) {
            if (!e)return "";
            o = o || {}, r = f(r, "...");
            for (var a = f(o.maxIterations, 2), l = f(o.minChar, 0), u = n("国", i), h = n("a", i), c = f(o.placeholder, ""), d = e = Math.max(0, e - 1), p = 0; l > p && d >= h; p++)d -= h;
            var g = n(r);
            g > d && (r = "", g = 0), d = e - g;
            for (var v = (t + "").split("\n"), p = 0, m = v.length; m > p; p++) {
                var y = v[p], x = n(y, i);
                if (!(e >= x)) {
                    for (var _ = 0; ; _++) {
                        if (d >= x || _ >= a) {
                            y += r;
                            break
                        }
                        var b = 0 === _ ? s(y, d, h, u) : x > 0 ? Math.floor(y.length * d / x) : 0;
                        y = y.substr(0, b), x = n(y, i)
                    }
                    "" === y && (y = c), v[p] = y
                }
            }
            return v.join("\n")
        }

        function s(t, e, i, n) {
            for (var r = 0, o = 0, a = t.length; a > o && e > r; o++) {
                var s = t.charCodeAt(o);
                r += s >= 0 && 127 >= s ? i : n
            }
            return o
        }

        var l = {}, u = 0, h = 5e3, c = i(1), d = i(7), f = c.retrieve, p = {
            getWidth: n,
            getBoundingRect: r,
            adjustTextPositionOnRect: o,
            truncateText: a,
            measureText: function (t, e) {
                var i = c.getContext();
                return i.font = e || "12px sans-serif", i.measureText(t)
            }
        };
        t.exports = p
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            return t > -w && w > t
        }

        function r(t) {
            return t > w || -w > t
        }

        function o(t, e, i, n, r) {
            var o = 1 - r;
            return o * o * (o * t + 3 * r * e) + r * r * (r * n + 3 * o * i)
        }

        function a(t, e, i, n, r) {
            var o = 1 - r;
            return 3 * (((e - t) * o + 2 * (i - e) * r) * o + (n - i) * r * r)
        }

        function s(t, e, i, r, o, a) {
            var s = r + 3 * (e - i) - t, l = 3 * (i - 2 * e + t), u = 3 * (e - t), h = t - o, c = l * l - 3 * s * u, d = l * u - 9 * s * h, f = u * u - 3 * l * h, p = 0;
            if (n(c) && n(d))if (n(l))a[0] = 0; else {
                var g = -u / l;
                g >= 0 && 1 >= g && (a[p++] = g)
            } else {
                var v = d * d - 4 * c * f;
                if (n(v)) {
                    var m = d / c, g = -l / s + m, y = -m / 2;
                    g >= 0 && 1 >= g && (a[p++] = g), y >= 0 && 1 >= y && (a[p++] = y)
                } else if (v > 0) {
                    var x = b(v), w = c * l + 1.5 * s * (-d + x), S = c * l + 1.5 * s * (-d - x);
                    w = 0 > w ? -_(-w, A) : _(w, A), S = 0 > S ? -_(-S, A) : _(S, A);
                    var g = (-l - (w + S)) / (3 * s);
                    g >= 0 && 1 >= g && (a[p++] = g)
                } else {
                    var I = (2 * c * l - 3 * s * d) / (2 * b(c * c * c)), T = Math.acos(I) / 3, L = b(c), C = Math.cos(T), g = (-l - 2 * L * C) / (3 * s), y = (-l + L * (C + M * Math.sin(T))) / (3 * s), D = (-l + L * (C - M * Math.sin(T))) / (3 * s);
                    g >= 0 && 1 >= g && (a[p++] = g), y >= 0 && 1 >= y && (a[p++] = y), D >= 0 && 1 >= D && (a[p++] = D)
                }
            }
            return p
        }

        function l(t, e, i, o, a) {
            var s = 6 * i - 12 * e + 6 * t, l = 9 * e + 3 * o - 3 * t - 9 * i, u = 3 * e - 3 * t, h = 0;
            if (n(l)) {
                if (r(s)) {
                    var c = -u / s;
                    c >= 0 && 1 >= c && (a[h++] = c)
                }
            } else {
                var d = s * s - 4 * l * u;
                if (n(d))a[0] = -s / (2 * l); else if (d > 0) {
                    var f = b(d), c = (-s + f) / (2 * l), p = (-s - f) / (2 * l);
                    c >= 0 && 1 >= c && (a[h++] = c), p >= 0 && 1 >= p && (a[h++] = p)
                }
            }
            return h
        }

        function u(t, e, i, n, r, o) {
            var a = (e - t) * r + t, s = (i - e) * r + e, l = (n - i) * r + i, u = (s - a) * r + a, h = (l - s) * r + s, c = (h - u) * r + u;
            o[0] = t, o[1] = a, o[2] = u, o[3] = c, o[4] = c, o[5] = h, o[6] = l, o[7] = n
        }

        function h(t, e, i, n, r, a, s, l, u, h, c) {
            var d, f, p, g, v, m = .005, y = 1 / 0;
            I[0] = u, I[1] = h;
            for (var _ = 0; 1 > _; _ += .05)T[0] = o(t, i, r, s, _), T[1] = o(e, n, a, l, _), g = x(I, T), y > g && (d = _, y = g);
            y = 1 / 0;
            for (var w = 0; 32 > w && !(S > m); w++)f = d - m, p = d + m, T[0] = o(t, i, r, s, f), T[1] = o(e, n, a, l, f), g = x(T, I), f >= 0 && y > g ? (d = f, y = g) : (L[0] = o(t, i, r, s, p), L[1] = o(e, n, a, l, p), v = x(L, I), 1 >= p && y > v ? (d = p, y = v) : m *= .5);
            return c && (c[0] = o(t, i, r, s, d), c[1] = o(e, n, a, l, d)), b(y)
        }

        function c(t, e, i, n) {
            var r = 1 - n;
            return r * (r * t + 2 * n * e) + n * n * i
        }

        function d(t, e, i, n) {
            return 2 * ((1 - n) * (e - t) + n * (i - e))
        }

        function f(t, e, i, o, a) {
            var s = t - 2 * e + i, l = 2 * (e - t), u = t - o, h = 0;
            if (n(s)) {
                if (r(l)) {
                    var c = -u / l;
                    c >= 0 && 1 >= c && (a[h++] = c)
                }
            } else {
                var d = l * l - 4 * s * u;
                if (n(d)) {
                    var c = -l / (2 * s);
                    c >= 0 && 1 >= c && (a[h++] = c)
                } else if (d > 0) {
                    var f = b(d), c = (-l + f) / (2 * s), p = (-l - f) / (2 * s);
                    c >= 0 && 1 >= c && (a[h++] = c), p >= 0 && 1 >= p && (a[h++] = p)
                }
            }
            return h
        }

        function p(t, e, i) {
            var n = t + i - 2 * e;
            return 0 === n ? .5 : (t - e) / n
        }

        function g(t, e, i, n, r) {
            var o = (e - t) * n + t, a = (i - e) * n + e, s = (a - o) * n + o;
            r[0] = t, r[1] = o, r[2] = s, r[3] = s, r[4] = a, r[5] = i
        }

        function v(t, e, i, n, r, o, a, s, l) {
            var u, h = .005, d = 1 / 0;
            I[0] = a, I[1] = s;
            for (var f = 0; 1 > f; f += .05) {
                T[0] = c(t, i, r, f), T[1] = c(e, n, o, f);
                var p = x(I, T);
                d > p && (u = f, d = p)
            }
            d = 1 / 0;
            for (var g = 0; 32 > g && !(S > h); g++) {
                var v = u - h, m = u + h;
                T[0] = c(t, i, r, v), T[1] = c(e, n, o, v);
                var p = x(T, I);
                if (v >= 0 && d > p)u = v, d = p; else {
                    L[0] = c(t, i, r, m), L[1] = c(e, n, o, m);
                    var y = x(L, I);
                    1 >= m && d > y ? (u = m, d = y) : h *= .5
                }
            }
            return l && (l[0] = c(t, i, r, u), l[1] = c(e, n, o, u)), b(d)
        }

        var m = i(5), y = m.create, x = m.distSquare, _ = Math.pow, b = Math.sqrt, w = 1e-8, S = 1e-4, M = b(3), A = 1 / 3, I = y(), T = y(), L = y();
        t.exports = {
            cubicAt: o,
            cubicDerivativeAt: a,
            cubicRootAt: s,
            cubicExtrema: l,
            cubicSubdivide: u,
            cubicProjectPoint: h,
            quadraticAt: c,
            quadraticDerivativeAt: d,
            quadraticRootAt: f,
            quadraticExtremum: p,
            quadraticSubdivide: g,
            quadraticProjectPoint: v
        }
    }, function (t, e) {
        function i(t) {
            return t = Math.round(t), 0 > t ? 0 : t > 255 ? 255 : t
        }

        function n(t) {
            return t = Math.round(t), 0 > t ? 0 : t > 360 ? 360 : t
        }

        function r(t) {
            return 0 > t ? 0 : t > 1 ? 1 : t
        }

        function o(t) {
            return i(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10))
        }

        function a(t) {
            return r(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t))
        }

        function s(t, e, i) {
            return 0 > i ? i += 1 : i > 1 && (i -= 1), 1 > 6 * i ? t + (e - t) * i * 6 : 1 > 2 * i ? e : 2 > 3 * i ? t + (e - t) * (2 / 3 - i) * 6 : t
        }

        function l(t, e, i) {
            return t + (e - t) * i
        }

        function u(t) {
            if (t) {
                t += "";
                var e = t.replace(/ /g, "").toLowerCase();
                if (e in x)return x[e].slice();
                if ("#" !== e.charAt(0)) {
                    var i = e.indexOf("("), n = e.indexOf(")");
                    if (-1 !== i && n + 1 === e.length) {
                        var r = e.substr(0, i), s = e.substr(i + 1, n - (i + 1)).split(","), l = 1;
                        switch (r) {
                            case"rgba":
                                if (4 !== s.length)return;
                                l = a(s.pop());
                            case"rgb":
                                if (3 !== s.length)return;
                                return [o(s[0]), o(s[1]), o(s[2]), l];
                            case"hsla":
                                if (4 !== s.length)return;
                                return s[3] = a(s[3]), h(s);
                            case"hsl":
                                if (3 !== s.length)return;
                                return h(s);
                            default:
                                return
                        }
                    }
                } else {
                    if (4 === e.length) {
                        var u = parseInt(e.substr(1), 16);
                        if (!(u >= 0 && 4095 >= u))return;
                        return [(3840 & u) >> 4 | (3840 & u) >> 8, 240 & u | (240 & u) >> 4, 15 & u | (15 & u) << 4, 1]
                    }
                    if (7 === e.length) {
                        var u = parseInt(e.substr(1), 16);
                        if (!(u >= 0 && 16777215 >= u))return;
                        return [(16711680 & u) >> 16, (65280 & u) >> 8, 255 & u, 1]
                    }
                }
            }
        }

        function h(t) {
            var e = (parseFloat(t[0]) % 360 + 360) % 360 / 360, n = a(t[1]), r = a(t[2]), o = .5 >= r ? r * (n + 1) : r + n - r * n, l = 2 * r - o, u = [i(255 * s(l, o, e + 1 / 3)), i(255 * s(l, o, e)), i(255 * s(l, o, e - 1 / 3))];
            return 4 === t.length && (u[3] = t[3]), u
        }

        function c(t) {
            if (t) {
                var e, i, n = t[0] / 255, r = t[1] / 255, o = t[2] / 255, a = Math.min(n, r, o), s = Math.max(n, r, o), l = s - a, u = (s + a) / 2;
                if (0 === l)e = 0, i = 0; else {
                    i = .5 > u ? l / (s + a) : l / (2 - s - a);
                    var h = ((s - n) / 6 + l / 2) / l, c = ((s - r) / 6 + l / 2) / l, d = ((s - o) / 6 + l / 2) / l;
                    n === s ? e = d - c : r === s ? e = 1 / 3 + h - d : o === s && (e = 2 / 3 + c - h), 0 > e && (e += 1), e > 1 && (e -= 1)
                }
                var f = [360 * e, i, u];
                return null != t[3] && f.push(t[3]), f
            }
        }

        function d(t, e) {
            var i = u(t);
            if (i) {
                for (var n = 0; 3 > n; n++)0 > e ? i[n] = i[n] * (1 - e) | 0 : i[n] = (255 - i[n]) * e + i[n] | 0;
                return y(i, 4 === i.length ? "rgba" : "rgb")
            }
        }

        function f(t, e) {
            var i = u(t);
            return i ? ((1 << 24) + (i[0] << 16) + (i[1] << 8) + +i[2]).toString(16).slice(1) : void 0
        }

        function p(t, e, n) {
            if (e && e.length && t >= 0 && 1 >= t) {
                n = n || [0, 0, 0, 0];
                var r = t * (e.length - 1), o = Math.floor(r), a = Math.ceil(r), s = e[o], u = e[a], h = r - o;
                return n[0] = i(l(s[0], u[0], h)), n[1] = i(l(s[1], u[1], h)), n[2] = i(l(s[2], u[2], h)), n[3] = i(l(s[3], u[3], h)), n
            }
        }

        function g(t, e, n) {
            if (e && e.length && t >= 0 && 1 >= t) {
                var o = t * (e.length - 1), a = Math.floor(o), s = Math.ceil(o), h = u(e[a]), c = u(e[s]), d = o - a, f = y([i(l(h[0], c[0], d)), i(l(h[1], c[1], d)), i(l(h[2], c[2], d)), r(l(h[3], c[3], d))], "rgba");
                return n ? {color: f, leftIndex: a, rightIndex: s, value: o} : f
            }
        }

        function v(t, e, i, r) {
            return t = u(t), t ? (t = c(t), null != e && (t[0] = n(e)), null != i && (t[1] = a(i)), null != r && (t[2] = a(r)), y(h(t), "rgba")) : void 0
        }

        function m(t, e) {
            return t = u(t), t && null != e ? (t[3] = r(e), y(t, "rgba")) : void 0
        }

        function y(t, e) {
            var i = t[0] + "," + t[1] + "," + t[2];
            return "rgba" !== e && "hsva" !== e && "hsla" !== e || (i += "," + t[3]), e + "(" + i + ")"
        }

        var x = {
            transparent: [0, 0, 0, 0],
            aliceblue: [240, 248, 255, 1],
            antiquewhite: [250, 235, 215, 1],
            aqua: [0, 255, 255, 1],
            aquamarine: [127, 255, 212, 1],
            azure: [240, 255, 255, 1],
            beige: [245, 245, 220, 1],
            bisque: [255, 228, 196, 1],
            black: [0, 0, 0, 1],
            blanchedalmond: [255, 235, 205, 1],
            blue: [0, 0, 255, 1],
            blueviolet: [138, 43, 226, 1],
            brown: [165, 42, 42, 1],
            burlywood: [222, 184, 135, 1],
            cadetblue: [95, 158, 160, 1],
            chartreuse: [127, 255, 0, 1],
            chocolate: [210, 105, 30, 1],
            coral: [255, 127, 80, 1],
            cornflowerblue: [100, 149, 237, 1],
            cornsilk: [255, 248, 220, 1],
            crimson: [220, 20, 60, 1],
            cyan: [0, 255, 255, 1],
            darkblue: [0, 0, 139, 1],
            darkcyan: [0, 139, 139, 1],
            darkgoldenrod: [184, 134, 11, 1],
            darkgray: [169, 169, 169, 1],
            darkgreen: [0, 100, 0, 1],
            darkgrey: [169, 169, 169, 1],
            darkkhaki: [189, 183, 107, 1],
            darkmagenta: [139, 0, 139, 1],
            darkolivegreen: [85, 107, 47, 1],
            darkorange: [255, 140, 0, 1],
            darkorchid: [153, 50, 204, 1],
            darkred: [139, 0, 0, 1],
            darksalmon: [233, 150, 122, 1],
            darkseagreen: [143, 188, 143, 1],
            darkslateblue: [72, 61, 139, 1],
            darkslategray: [47, 79, 79, 1],
            darkslategrey: [47, 79, 79, 1],
            darkturquoise: [0, 206, 209, 1],
            darkviolet: [148, 0, 211, 1],
            deeppink: [255, 20, 147, 1],
            deepskyblue: [0, 191, 255, 1],
            dimgray: [105, 105, 105, 1],
            dimgrey: [105, 105, 105, 1],
            dodgerblue: [30, 144, 255, 1],
            firebrick: [178, 34, 34, 1],
            floralwhite: [255, 250, 240, 1],
            forestgreen: [34, 139, 34, 1],
            fuchsia: [255, 0, 255, 1],
            gainsboro: [220, 220, 220, 1],
            ghostwhite: [248, 248, 255, 1],
            gold: [255, 215, 0, 1],
            goldenrod: [218, 165, 32, 1],
            gray: [128, 128, 128, 1],
            green: [0, 128, 0, 1],
            greenyellow: [173, 255, 47, 1],
            grey: [128, 128, 128, 1],
            honeydew: [240, 255, 240, 1],
            hotpink: [255, 105, 180, 1],
            indianred: [205, 92, 92, 1],
            indigo: [75, 0, 130, 1],
            ivory: [255, 255, 240, 1],
            khaki: [240, 230, 140, 1],
            lavender: [230, 230, 250, 1],
            lavenderblush: [255, 240, 245, 1],
            lawngreen: [124, 252, 0, 1],
            lemonchiffon: [255, 250, 205, 1],
            lightblue: [173, 216, 230, 1],
            lightcoral: [240, 128, 128, 1],
            lightcyan: [224, 255, 255, 1],
            lightgoldenrodyellow: [250, 250, 210, 1],
            lightgray: [211, 211, 211, 1],
            lightgreen: [144, 238, 144, 1],
            lightgrey: [211, 211, 211, 1],
            lightpink: [255, 182, 193, 1],
            lightsalmon: [255, 160, 122, 1],
            lightseagreen: [32, 178, 170, 1],
            lightskyblue: [135, 206, 250, 1],
            lightslategray: [119, 136, 153, 1],
            lightslategrey: [119, 136, 153, 1],
            lightsteelblue: [176, 196, 222, 1],
            lightyellow: [255, 255, 224, 1],
            lime: [0, 255, 0, 1],
            limegreen: [50, 205, 50, 1],
            linen: [250, 240, 230, 1],
            magenta: [255, 0, 255, 1],
            maroon: [128, 0, 0, 1],
            mediumaquamarine: [102, 205, 170, 1],
            mediumblue: [0, 0, 205, 1],
            mediumorchid: [186, 85, 211, 1],
            mediumpurple: [147, 112, 219, 1],
            mediumseagreen: [60, 179, 113, 1],
            mediumslateblue: [123, 104, 238, 1],
            mediumspringgreen: [0, 250, 154, 1],
            mediumturquoise: [72, 209, 204, 1],
            mediumvioletred: [199, 21, 133, 1],
            midnightblue: [25, 25, 112, 1],
            mintcream: [245, 255, 250, 1],
            mistyrose: [255, 228, 225, 1],
            moccasin: [255, 228, 181, 1],
            navajowhite: [255, 222, 173, 1],
            navy: [0, 0, 128, 1],
            oldlace: [253, 245, 230, 1],
            olive: [128, 128, 0, 1],
            olivedrab: [107, 142, 35, 1],
            orange: [255, 165, 0, 1],
            orangered: [255, 69, 0, 1],
            orchid: [218, 112, 214, 1],
            palegoldenrod: [238, 232, 170, 1],
            palegreen: [152, 251, 152, 1],
            paleturquoise: [175, 238, 238, 1],
            palevioletred: [219, 112, 147, 1],
            papayawhip: [255, 239, 213, 1],
            peachpuff: [255, 218, 185, 1],
            peru: [205, 133, 63, 1],
            pink: [255, 192, 203, 1],
            plum: [221, 160, 221, 1],
            powderblue: [176, 224, 230, 1],
            purple: [128, 0, 128, 1],
            red: [255, 0, 0, 1],
            rosybrown: [188, 143, 143, 1],
            royalblue: [65, 105, 225, 1],
            saddlebrown: [139, 69, 19, 1],
            salmon: [250, 128, 114, 1],
            sandybrown: [244, 164, 96, 1],
            seagreen: [46, 139, 87, 1],
            seashell: [255, 245, 238, 1],
            sienna: [160, 82, 45, 1],
            silver: [192, 192, 192, 1],
            skyblue: [135, 206, 235, 1],
            slateblue: [106, 90, 205, 1],
            slategray: [112, 128, 144, 1],
            slategrey: [112, 128, 144, 1],
            snow: [255, 250, 250, 1],
            springgreen: [0, 255, 127, 1],
            steelblue: [70, 130, 180, 1],
            tan: [210, 180, 140, 1],
            teal: [0, 128, 128, 1],
            thistle: [216, 191, 216, 1],
            tomato: [255, 99, 71, 1],
            turquoise: [64, 224, 208, 1],
            violet: [238, 130, 238, 1],
            wheat: [245, 222, 179, 1],
            white: [255, 255, 255, 1],
            whitesmoke: [245, 245, 245, 1],
            yellow: [255, 255, 0, 1],
            yellowgreen: [154, 205, 50, 1]
        };
        t.exports = {
            parse: u,
            lift: d,
            toHex: f,
            fastMapToColor: p,
            mapToColor: g,
            modifyHSL: v,
            modifyAlpha: m,
            stringify: y
        }
    }, function (t, e) {
        var i = "undefined" == typeof Float32Array ? Array : Float32Array, n = {
            create: function () {
                var t = new i(6);
                return n.identity(t), t
            }, identity: function (t) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
            }, copy: function (t, e) {
                return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
            }, mul: function (t, e, i) {
                var n = e[0] * i[0] + e[2] * i[1], r = e[1] * i[0] + e[3] * i[1], o = e[0] * i[2] + e[2] * i[3], a = e[1] * i[2] + e[3] * i[3], s = e[0] * i[4] + e[2] * i[5] + e[4], l = e[1] * i[4] + e[3] * i[5] + e[5];
                return t[0] = n, t[1] = r, t[2] = o, t[3] = a, t[4] = s, t[5] = l, t
            }, translate: function (t, e, i) {
                return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + i[0], t[5] = e[5] + i[1], t
            }, rotate: function (t, e, i) {
                var n = e[0], r = e[2], o = e[4], a = e[1], s = e[3], l = e[5], u = Math.sin(i), h = Math.cos(i);
                return t[0] = n * h + a * u, t[1] = -n * u + a * h, t[2] = r * h + s * u, t[3] = -r * u + h * s, t[4] = h * o + u * l, t[5] = h * l - u * o, t
            }, scale: function (t, e, i) {
                var n = i[0], r = i[1];
                return t[0] = e[0] * n, t[1] = e[1] * r, t[2] = e[2] * n, t[3] = e[3] * r, t[4] = e[4] * n, t[5] = e[5] * r, t
            }, invert: function (t, e) {
                var i = e[0], n = e[2], r = e[4], o = e[1], a = e[3], s = e[5], l = i * a - o * n;
                return l ? (l = 1 / l, t[0] = a * l, t[1] = -o * l, t[2] = -n * l, t[3] = i * l, t[4] = (n * s - a * r) * l, t[5] = (o * r - i * s) * l, t) : null
            }
        };
        t.exports = n
    }, function (t, e) {
        var i = Array.prototype.slice, n = function () {
            this._$handlers = {}
        };
        n.prototype = {
            constructor: n, one: function (t, e, i) {
                var n = this._$handlers;
                if (!e || !t)return this;
                n[t] || (n[t] = []);
                for (var r = 0; r < n[t].length; r++)if (n[t][r].h === e)return this;
                return n[t].push({h: e, one: !0, ctx: i || this}), this
            }, on: function (t, e, i) {
                var n = this._$handlers;
                if (!e || !t)return this;
                n[t] || (n[t] = []);
                for (var r = 0; r < n[t].length; r++)if (n[t][r].h === e)return this;
                return n[t].push({h: e, one: !1, ctx: i || this}), this
            }, isSilent: function (t) {
                var e = this._$handlers;
                return e[t] && e[t].length
            }, off: function (t, e) {
                var i = this._$handlers;
                if (!t)return this._$handlers = {}, this;
                if (e) {
                    if (i[t]) {
                        for (var n = [], r = 0, o = i[t].length; o > r; r++)i[t][r].h != e && n.push(i[t][r]);
                        i[t] = n
                    }
                    i[t] && 0 === i[t].length && delete i[t]
                } else delete i[t];
                return this
            }, trigger: function (t) {
                if (this._$handlers[t]) {
                    var e = arguments, n = e.length;
                    n > 3 && (e = i.call(e, 1));
                    for (var r = this._$handlers[t], o = r.length, a = 0; o > a;) {
                        switch (n) {
                            case 1:
                                r[a].h.call(r[a].ctx);
                                break;
                            case 2:
                                r[a].h.call(r[a].ctx, e[1]);
                                break;
                            case 3:
                                r[a].h.call(r[a].ctx, e[1], e[2]);
                                break;
                            default:
                                r[a].h.apply(r[a].ctx, e)
                        }
                        r[a].one ? (r.splice(a, 1), o--) : a++
                    }
                }
                return this
            }, triggerWithContext: function (t) {
                if (this._$handlers[t]) {
                    var e = arguments, n = e.length;
                    n > 4 && (e = i.call(e, 1, e.length - 1));
                    for (var r = e[e.length - 1], o = this._$handlers[t], a = o.length, s = 0; a > s;) {
                        switch (n) {
                            case 1:
                                o[s].h.call(r);
                                break;
                            case 2:
                                o[s].h.call(r, e[1]);
                                break;
                            case 3:
                                o[s].h.call(r, e[1], e[2]);
                                break;
                            default:
                                o[s].h.apply(r, e)
                        }
                        o[s].one ? (o.splice(s, 1), a--) : s++
                    }
                }
                return this
            }
        }, t.exports = n
    }, function (t, e, i) {
        function n(t, e) {
            var i = o.slice(arguments, 2);
            return this.superClass.prototype[e].apply(t, i)
        }

        function r(t, e, i) {
            return this.superClass.prototype[e].apply(t, i)
        }

        var o = i(1), a = {}, s = ".", l = "___EC__COMPONENT__CONTAINER___", u = a.parseClassType = function (t) {
            var e = {main: "", sub: ""};
            return t && (t = t.split(s), e.main = t[0] || "", e.sub = t[1] || ""), e
        };
        a.enableClassExtend = function (t) {
            t.$constructor = t, t.extend = function (t) {
                var e = this, i = function () {
                    t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments)
                };
                return o.extend(i.prototype, t), i.extend = this.extend, i.superCall = n, i.superApply = r, o.inherits(i, this), i.superClass = e, i
            }
        }, a.enableClassManagement = function (t, e) {
            function i(t) {
                var e = n[t.main];
                return e && e[l] || (e = n[t.main] = {}, e[l] = !0), e
            }

            e = e || {};
            var n = {};
            if (t.registerClass = function (t, e) {
                    if (e)if (e = u(e), e.sub) {
                        if (e.sub !== l) {
                            var r = i(e);
                            r[e.sub] = t
                        }
                    } else n[e.main] = t;
                    return t
                }, t.getClass = function (t, e, i) {
                    var r = n[t];
                    if (r && r[l] && (r = e ? r[e] : null), i && !r)throw new Error("Component " + t + "." + (e || "") + " not exists. Load it first.");
                    return r
                }, t.getClassesByMainType = function (t) {
                    t = u(t);
                    var e = [], i = n[t.main];
                    return i && i[l] ? o.each(i, function (t, i) {
                        i !== l && e.push(t)
                    }) : e.push(i), e
                }, t.hasClass = function (t) {
                    return t = u(t), !!n[t.main]
                }, t.getAllClassMainTypes = function () {
                    var t = [];
                    return o.each(n, function (e, i) {
                        t.push(i)
                    }), t
                }, t.hasSubTypes = function (t) {
                    t = u(t);
                    var e = n[t.main];
                    return e && e[l]
                }, t.parseClassType = u, e.registerWhenExtend) {
                var r = t.extend;
                r && (t.extend = function (e) {
                    var i = r.call(this, e);
                    return t.registerClass(i, e.type)
                })
            }
            return t
        }, a.setReadOnly = function (t, e) {
        }, t.exports = a
    }, function (t, e, i) {
        var n = i(133), r = i(38);
        i(134), i(132);
        var o = i(32), a = i(4), s = i(1), l = i(16), u = {};
        u.getScaleExtent = function (t, e) {
            var i = t.scale, n = i.getExtent(), r = n[1] - n[0];
            if ("ordinal" === i.type)return isFinite(r) ? n : [0, 0];
            var o = e.getMin ? e.getMin() : e.get("min"), l = e.getMax ? e.getMax() : e.get("max"), u = e.getNeedCrossZero ? e.getNeedCrossZero() : !e.get("scale"), h = e.get("boundaryGap");
            s.isArray(h) || (h = [h || 0, h || 0]), h[0] = a.parsePercent(h[0], 1), h[1] = a.parsePercent(h[1], 1);
            var c = !0, d = !0;
            return null == o && (o = n[0] - h[0] * r, c = !1), null == l && (l = n[1] + h[1] * r, d = !1), "dataMin" === o && (o = n[0]), "dataMax" === l && (l = n[1]), u && (o > 0 && l > 0 && !c && (o = 0), 0 > o && 0 > l && !d && (l = 0)), [o, l]
        }, u.niceScaleExtent = function (t, e) {
            var i = t.scale, n = u.getScaleExtent(t, e), r = null != (e.getMin ? e.getMin() : e.get("min")), o = null != (e.getMax ? e.getMax() : e.get("max")), a = e.get("splitNumber");
            i.setExtent(n[0], n[1]), i.niceExtent(a, r, o);
            var s = e.get("minInterval");
            if (isFinite(s) && !r && !o && "interval" === i.type) {
                var l = i.getInterval(), h = Math.max(Math.abs(l), s) / l;
                n = i.getExtent(), i.setExtent(h * n[0], n[1] * h), i.niceExtent(a)
            }
            var l = e.get("interval");
            null != l && i.setInterval && i.setInterval(l)
        }, u.createScaleByModel = function (t, e) {
            if (e = e || t.get("type"))switch (e) {
                case"category":
                    return new n(t.getCategories(), [1 / 0, -(1 / 0)]);
                case"value":
                    return new r;
                default:
                    return (o.getClass(e) || r).create(t)
            }
        }, u.ifAxisCrossZero = function (t) {
            var e = t.scale.getExtent(), i = e[0], n = e[1];
            return !(i > 0 && n > 0 || 0 > i && 0 > n)
        }, u.getAxisLabelInterval = function (t, e, i, n) {
            var r, o = 0, a = 0, s = 1;
            e.length > 40 && (s = Math.floor(e.length / 40));
            for (var u = 0; u < t.length; u += s) {
                var h = t[u], c = l.getBoundingRect(e[u], i, "center", "top");
                c[n ? "x" : "y"] += h, c[n ? "width" : "height"] *= 1.3, r ? r.intersect(c) ? (a++, o = Math.max(o, a)) : (r.union(c), a = 0) : r = c.clone()
            }
            return 0 === o && s > 1 ? s : (o + 1) * s - 1
        }, u.getFormattedLabels = function (t, e) {
            var i = t.scale, n = i.getTicksLabels(), r = i.getTicks();
            return "string" == typeof e ? (e = function (t) {
                return function (e) {
                    return t.replace("{value}", e)
                }
            }(e), s.map(n, e)) : "function" == typeof e ? s.map(r, function (n, r) {
                return e("category" === t.type ? i.getLabel(n) : n, r)
            }, this) : n
        }, t.exports = u
    }, function (t, e) {
        "use strict";
        function i() {
            this._coordinateSystems = []
        }

        var n = {};
        i.prototype = {
            constructor: i, create: function (t, e) {
                var i = [];
                for (var r in n) {
                    var o = n[r].create(t, e);
                    o && (i = i.concat(o))
                }
                this._coordinateSystems = i
            }, update: function (t, e) {
                for (var i = this._coordinateSystems, n = 0; n < i.length; n++)i[n].update && i[n].update(t, e)
            }
        }, i.register = function (t, e) {
            n[t] = e
        }, i.get = function (t) {
            return n[t]
        }, t.exports = i
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            return t.getBoundingClientRect ? t.getBoundingClientRect() : {left: 0, top: 0}
        }

        function r(t, e, i) {
            var r = n(t);
            return i = i || {}, i.zrX = e.clientX - r.left, i.zrY = e.clientY - r.top, i
        }

        function o(t, e) {
            if (e = e || window.event, null != e.zrX)return e;
            var i = e.type, n = i && i.indexOf("touch") >= 0;
            if (n) {
                var o = "touchend" != i ? e.targetTouches[0] : e.changedTouches[0];
                o && r(t, o, e)
            } else r(t, e, e), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
            return e
        }

        function a(t, e, i) {
            u ? t.addEventListener(e, i) : t.attachEvent("on" + e, i)
        }

        function s(t, e, i) {
            u ? t.removeEventListener(e, i) : t.detachEvent("on" + e, i)
        }

        var l = i(20), u = "undefined" != typeof window && !!window.addEventListener, h = u ? function (t) {
            t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0
        } : function (t) {
            t.returnValue = !1, t.cancelBubble = !0
        };
        t.exports = {
            clientToLocal: r,
            normalizeEvent: o,
            addEventListener: a,
            removeEventListener: s,
            stop: h,
            Dispatcher: l
        }
    }, function (t, e) {
        "use strict";
        var i = {};
        t.exports = {
            register: function (t, e) {
                i[t] = e
            }, get: function (t) {
                return i[t]
            }
        }
    }, function (t, e, i) {
        "use strict";
        var n = i(3), r = i(7), o = n.extendShape({
            type: "triangle",
            shape: {cx: 0, cy: 0, width: 0, height: 0},
            buildPath: function (t, e) {
                var i = e.cx, n = e.cy, r = e.width / 2, o = e.height / 2;
                t.moveTo(i, n - o), t.lineTo(i + r, n + o), t.lineTo(i - r, n + o), t.closePath()
            }
        }), a = n.extendShape({
            type: "diamond", shape: {cx: 0, cy: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var i = e.cx, n = e.cy, r = e.width / 2, o = e.height / 2;
                t.moveTo(i, n - o), t.lineTo(i + r, n), t.lineTo(i, n + o), t.lineTo(i - r, n), t.closePath()
            }
        }), s = n.extendShape({
            type: "pin", shape: {x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var i = e.x, n = e.y, r = e.width / 5 * 3, o = Math.max(r, e.height), a = r / 2, s = a * a / (o - a), l = n - o + a + s, u = Math.asin(s / a), h = Math.cos(u) * a, c = Math.sin(u), d = Math.cos(u);
                t.arc(i, l, a, Math.PI - u, 2 * Math.PI + u);
                var f = .6 * a, p = .7 * a;
                t.bezierCurveTo(i + h - c * f, l + s + d * f, i, n - p, i, n), t.bezierCurveTo(i, n - p, i - h + c * f, l + s + d * f, i - h, l + s), t.closePath()
            }
        }), l = n.extendShape({
            type: "arrow", shape: {x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var i = e.height, n = e.width, r = e.x, o = e.y, a = n / 3 * 2;
                t.moveTo(r, o), t.lineTo(r + a, o + i), t.lineTo(r, o + i / 4 * 3), t.lineTo(r - a, o + i), t.lineTo(r, o), t.closePath()
            }
        }), u = {
            line: n.Line,
            rect: n.Rect,
            roundRect: n.Rect,
            square: n.Rect,
            circle: n.Circle,
            diamond: a,
            pin: s,
            arrow: l,
            triangle: o
        }, h = {
            line: function (t, e, i, n, r) {
                r.x1 = t, r.y1 = e + n / 2, r.x2 = t + i, r.y2 = e + n / 2
            }, rect: function (t, e, i, n, r) {
                r.x = t, r.y = e, r.width = i, r.height = n
            }, roundRect: function (t, e, i, n, r) {
                r.x = t, r.y = e, r.width = i, r.height = n, r.r = Math.min(i, n) / 4
            }, square: function (t, e, i, n, r) {
                var o = Math.min(i, n);
                r.x = t, r.y = e, r.width = o, r.height = o
            }, circle: function (t, e, i, n, r) {
                r.cx = t + i / 2, r.cy = e + n / 2, r.r = Math.min(i, n) / 2
            }, diamond: function (t, e, i, n, r) {
                r.cx = t + i / 2, r.cy = e + n / 2, r.width = i, r.height = n
            }, pin: function (t, e, i, n, r) {
                r.x = t + i / 2, r.y = e + n / 2, r.width = i, r.height = n
            }, arrow: function (t, e, i, n, r) {
                r.x = t + i / 2, r.y = e + n / 2, r.width = i, r.height = n
            }, triangle: function (t, e, i, n, r) {
                r.cx = t + i / 2, r.cy = e + n / 2, r.width = i, r.height = n
            }
        }, c = {};
        for (var d in u)c[d] = new u[d];
        var f = n.extendShape({
            type: "symbol",
            shape: {symbolType: "", x: 0, y: 0, width: 0, height: 0},
            beforeBrush: function () {
                var t = this.style, e = this.shape;
                "pin" === e.symbolType && "inside" === t.textPosition && (t.textPosition = ["50%", "40%"], t.textAlign = "center", t.textVerticalAlign = "middle")
            },
            buildPath: function (t, e, i) {
                var n = e.symbolType, r = c[n];
                "none" !== e.symbolType && (r || (n = "rect", r = c[n]), h[n](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, i))
            }
        }), p = function (t) {
            if ("image" !== this.type) {
                var e = this.style, i = this.shape;
                i && "line" === i.symbolType ? e.stroke = t : this.__isEmptyBrush ? (e.stroke = t, e.fill = "#fff") : (e.fill && (e.fill = t), e.stroke && (e.stroke = t)), this.dirty(!1)
            }
        }, g = {
            createSymbol: function (t, e, i, o, a, s) {
                var l = 0 === t.indexOf("empty");
                l && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
                var u;
                return u = 0 === t.indexOf("image://") ? new n.Image({
                    style: {
                        image: t.slice(8),
                        x: e,
                        y: i,
                        width: o,
                        height: a
                    }
                }) : 0 === t.indexOf("path://") ? n.makePath(t.slice(7), {}, new r(e, i, o, a)) : new f({
                    shape: {
                        symbolType: t,
                        x: e,
                        y: i,
                        width: o,
                        height: a
                    }
                }), u.__isEmptyBrush = l, u.setColor = p, u.setColor(s), u
            }
        };
        t.exports = g
    }, function (t, e, i) {
        function n() {
            this.group = new a, this.uid = s.getUID("viewChart")
        }

        function r(t, e) {
            if (t && (t.trigger(e), "group" === t.type))for (var i = 0; i < t.childCount(); i++)r(t.childAt(i), e)
        }

        function o(t, e, i) {
            var n = e && e.dataIndex, o = e && e.name;
            if (null != n)for (var a = n instanceof Array ? n : [n], s = 0, l = a.length; l > s; s++)r(t.getItemGraphicEl(a[s]), i); else if (o)for (var u = o instanceof Array ? o : [o], s = 0, l = u.length; l > s; s++) {
                var n = t.indexOfName(u[s]);
                r(t.getItemGraphicEl(n), i)
            } else t.eachItemGraphicEl(function (t) {
                r(t, i)
            })
        }

        var a = i(34), s = i(43), l = i(21);
        n.prototype = {
            type: "chart", init: function (t, e) {
            }, render: function (t, e, i, n) {
            }, highlight: function (t, e, i, n) {
                o(t.getData(), n, "emphasis")
            }, downplay: function (t, e, i, n) {
                o(t.getData(), n, "normal")
            }, remove: function (t, e) {
                this.group.removeAll()
            }, dispose: function () {
            }
        };
        var u = n.prototype;
        u.updateView = u.updateLayout = u.updateVisual = function (t, e, i, n) {
            this.render(t, e, i, n)
        }, l.enableClassExtend(n), l.enableClassManagement(n, {registerWhenExtend: !0}), t.exports = n
    }, function (t, e, i) {
        "use strict";
        var n = i(17), r = i(5), o = i(73), a = i(7), s = i(33).devicePixelRatio, l = {
            M: 1,
            L: 2,
            C: 3,
            Q: 4,
            A: 5,
            Z: 6,
            R: 7
        }, u = [], h = [], c = [], d = [], f = Math.min, p = Math.max, g = Math.cos, v = Math.sin, m = Math.sqrt, y = Math.abs, x = "undefined" != typeof Float32Array, _ = function () {
            this.data = [], this._len = 0, this._ctx = null, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._ux = 0, this._uy = 0
        };
        _.prototype = {
            constructor: _,
            _lineDash: null,
            _dashOffset: 0,
            _dashIdx: 0,
            _dashSum: 0,
            setScale: function (t, e) {
                this._ux = y(1 / s / t) || 0, this._uy = y(1 / s / e) || 0
            },
            getContext: function () {
                return this._ctx
            },
            beginPath: function (t) {
                return this._ctx = t, t && t.beginPath(), this._len = 0, this._lineDash && (this._lineDash = null, this._dashOffset = 0), this
            },
            moveTo: function (t, e) {
                return this.addData(l.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this
            },
            lineTo: function (t, e) {
                var i = y(t - this._xi) > this._ux || y(e - this._yi) > this._uy || this._len < 5;
                return this.addData(l.L, t, e), this._ctx && i && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), i && (this._xi = t, this._yi = e), this
            },
            bezierCurveTo: function (t, e, i, n, r, o) {
                return this.addData(l.C, t, e, i, n, r, o), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, i, n, r, o) : this._ctx.bezierCurveTo(t, e, i, n, r, o)), this._xi = r, this._yi = o, this
            },
            quadraticCurveTo: function (t, e, i, n) {
                return this.addData(l.Q, t, e, i, n), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, i, n) : this._ctx.quadraticCurveTo(t, e, i, n)), this._xi = i, this._yi = n, this
            },
            arc: function (t, e, i, n, r, o) {
                return this.addData(l.A, t, e, i, i, n, r - n, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, e, i, n, r, o), this._xi = g(r) * i + t, this._xi = v(r) * i + t, this
            },
            arcTo: function (t, e, i, n, r) {
                return this._ctx && this._ctx.arcTo(t, e, i, n, r), this
            },
            rect: function (t, e, i, n) {
                return this._ctx && this._ctx.rect(t, e, i, n), this.addData(l.R, t, e, i, n), this
            },
            closePath: function () {
                this.addData(l.Z);
                var t = this._ctx, e = this._x0, i = this._y0;
                return t && (this._needsDash() && this._dashedLineTo(e, i), t.closePath()), this._xi = e, this._yi = i, this
            },
            fill: function (t) {
                t && t.fill(), this.toStatic()
            },
            stroke: function (t) {
                t && t.stroke(), this.toStatic()
            },
            setLineDash: function (t) {
                if (t instanceof Array) {
                    this._lineDash = t, this._dashIdx = 0;
                    for (var e = 0, i = 0; i < t.length; i++)e += t[i];
                    this._dashSum = e
                }
                return this
            },
            setLineDashOffset: function (t) {
                return this._dashOffset = t, this
            },
            len: function () {
                return this._len
            },
            setData: function (t) {
                var e = t.length;
                this.data && this.data.length == e || !x || (this.data = new Float32Array(e));
                for (var i = 0; e > i; i++)this.data[i] = t[i];
                this._len = e
            },
            appendPath: function (t) {
                t instanceof Array || (t = [t]);
                for (var e = t.length, i = 0, n = this._len, r = 0; e > r; r++)i += t[r].len();
                x && this.data instanceof Float32Array && (this.data = new Float32Array(n + i));
                for (var r = 0; e > r; r++)for (var o = t[r].data, a = 0; a < o.length; a++)this.data[n++] = o[a];
                this._len = n
            },
            addData: function (t) {
                var e = this.data;
                this._len + arguments.length > e.length && (this._expandData(), e = this.data);
                for (var i = 0; i < arguments.length; i++)e[this._len++] = arguments[i];
                this._prevCmd = t
            },
            _expandData: function () {
                if (!(this.data instanceof Array)) {
                    for (var t = [], e = 0; e < this._len; e++)t[e] = this.data[e];
                    this.data = t
                }
            },
            _needsDash: function () {
                return this._lineDash
            },
            _dashedLineTo: function (t, e) {
                var i, n, r = this._dashSum, o = this._dashOffset, a = this._lineDash, s = this._ctx, l = this._xi, u = this._yi, h = t - l, c = e - u, d = m(h * h + c * c), g = l, v = u, y = a.length;
                for (h /= d, c /= d, 0 > o && (o = r + o), o %= r, g -= o * h, v -= o * c; h > 0 && t >= g || 0 > h && g >= t || 0 == h && (c > 0 && e >= v || 0 > c && v >= e);)n = this._dashIdx, i = a[n], g += h * i, v += c * i, this._dashIdx = (n + 1) % y, h > 0 && l > g || 0 > h && g > l || c > 0 && u > v || 0 > c && v > u || s[n % 2 ? "moveTo" : "lineTo"](h >= 0 ? f(g, t) : p(g, t), c >= 0 ? f(v, e) : p(v, e));
                h = g - t, c = v - e, this._dashOffset = -m(h * h + c * c)
            },
            _dashedBezierTo: function (t, e, i, r, o, a) {
                var s, l, u, h, c, d = this._dashSum, f = this._dashOffset, p = this._lineDash, g = this._ctx, v = this._xi, y = this._yi, x = n.cubicAt, _ = 0, b = this._dashIdx, w = p.length, S = 0;
                for (0 > f && (f = d + f), f %= d, s = 0; 1 > s; s += .1)l = x(v, t, i, o, s + .1) - x(v, t, i, o, s), u = x(y, e, r, a, s + .1) - x(y, e, r, a, s), _ += m(l * l + u * u);
                for (; w > b && (S += p[b], !(S > f)); b++);
                for (s = (S - f) / _; 1 >= s;)h = x(v, t, i, o, s), c = x(y, e, r, a, s), b % 2 ? g.moveTo(h, c) : g.lineTo(h, c), s += p[b] / _, b = (b + 1) % w;
                b % 2 !== 0 && g.lineTo(o, a), l = o - h, u = a - c, this._dashOffset = -m(l * l + u * u)
            },
            _dashedQuadraticTo: function (t, e, i, n) {
                var r = i, o = n;
                i = (i + 2 * t) / 3, n = (n + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, i, n, r, o)
            },
            toStatic: function () {
                var t = this.data;
                t instanceof Array && (t.length = this._len, x && (this.data = new Float32Array(t)))
            },
            getBoundingRect: function () {
                u[0] = u[1] = c[0] = c[1] = Number.MAX_VALUE, h[0] = h[1] = d[0] = d[1] = -Number.MAX_VALUE;
                for (var t = this.data, e = 0, i = 0, n = 0, s = 0, f = 0; f < t.length;) {
                    var p = t[f++];
                    switch (1 == f && (e = t[f], i = t[f + 1], n = e, s = i), p) {
                        case l.M:
                            n = t[f++], s = t[f++], e = n, i = s, c[0] = n, c[1] = s, d[0] = n, d[1] = s;
                            break;
                        case l.L:
                            o.fromLine(e, i, t[f], t[f + 1], c, d), e = t[f++], i = t[f++];
                            break;
                        case l.C:
                            o.fromCubic(e, i, t[f++], t[f++], t[f++], t[f++], t[f], t[f + 1], c, d), e = t[f++], i = t[f++];
                            break;
                        case l.Q:
                            o.fromQuadratic(e, i, t[f++], t[f++], t[f], t[f + 1], c, d), e = t[f++], i = t[f++];
                            break;
                        case l.A:
                            var m = t[f++], y = t[f++], x = t[f++], _ = t[f++], b = t[f++], w = t[f++] + b, S = (t[f++], 1 - t[f++]);
                            1 == f && (n = g(b) * x + m, s = v(b) * _ + y), o.fromArc(m, y, x, _, b, w, S, c, d), e = g(w) * x + m, i = v(w) * _ + y;
                            break;
                        case l.R:
                            n = e = t[f++], s = i = t[f++];
                            var M = t[f++], A = t[f++];
                            o.fromLine(n, s, n + M, s + A, c, d);
                            break;
                        case l.Z:
                            e = n, i = s
                    }
                    r.min(u, u, c), r.max(h, h, d)
                }
                return 0 === f && (u[0] = u[1] = h[0] = h[1] = 0), new a(u[0], u[1], h[0] - u[0], h[1] - u[1])
            },
            rebuildPath: function (t) {
                for (var e, i, n, r, o, a, s = this.data, u = this._ux, h = this._uy, c = this._len, d = 0; c > d;) {
                    var f = s[d++];
                    switch (1 == d && (n = s[d], r = s[d + 1], e = n, i = r), f) {
                        case l.M:
                            e = n = s[d++], i = r = s[d++], t.moveTo(n, r);
                            break;
                        case l.L:
                            o = s[d++], a = s[d++], (y(o - n) > u || y(a - r) > h || d === c - 1) && (t.lineTo(o, a), n = o, r = a);
                            break;
                        case l.C:
                            t.bezierCurveTo(s[d++], s[d++], s[d++], s[d++], s[d++], s[d++]), n = s[d - 2], r = s[d - 1];
                            break;
                        case l.Q:
                            t.quadraticCurveTo(s[d++], s[d++], s[d++], s[d++]), n = s[d - 2], r = s[d - 1];
                            break;
                        case l.A:
                            var p = s[d++], m = s[d++], x = s[d++], _ = s[d++], b = s[d++], w = s[d++], S = s[d++], M = s[d++], A = x > _ ? x : _, I = x > _ ? 1 : x / _, T = x > _ ? _ / x : 1, L = Math.abs(x - _) > .001, C = b + w;
                            L ? (t.translate(p, m), t.rotate(S), t.scale(I, T), t.arc(0, 0, A, b, C, 1 - M), t.scale(1 / I, 1 / T), t.rotate(-S), t.translate(-p, -m)) : t.arc(p, m, A, b, C, 1 - M), 1 == d && (e = g(b) * x + p, i = v(b) * _ + m), n = g(C) * x + p, r = v(C) * _ + m;
                            break;
                        case l.R:
                            e = n = s[d], i = r = s[d + 1], t.rect(s[d++], s[d++], s[d++], s[d++]);
                            break;
                        case l.Z:
                            t.closePath(), n = e, r = i
                    }
                }
            }
        }, _.CMD = l, t.exports = _
    }, function (t, e) {
        var i = function (t) {
            this.colorStops = t || []
        };
        i.prototype = {
            constructor: i, addColorStop: function (t, e) {
                this.colorStops.push({offset: t, color: e})
            }
        }, t.exports = i
    }, function (t, e, i) {
        function n(t, e, i, n) {
            if (!e)return t;
            var s = r(e[0]), l = o.isArray(s) && s.length || 1;
            i = i || [], n = n || "extra";
            for (var u = 0; l > u; u++)if (!t[u]) {
                var h = i[u] || n + (u - i.length);
                t[u] = a(e, u) ? {type: "ordinal", name: h} : h
            }
            return t
        }

        function r(t) {
            return o.isArray(t) ? t : o.isObject(t) ? t.value : t
        }

        var o = i(1), a = n.guessOrdinal = function (t, e) {
            for (var i = 0, n = t.length; n > i; i++) {
                var a = r(t[i]);
                if (!o.isArray(a))return !1;
                var a = a[e];
                if (null != a && isFinite(a))return !1;
                if (o.isString(a) && "-" !== a)return !0
            }
            return !1
        };
        t.exports = n
    }, function (t, e, i) {
        var n = i(1);
        t.exports = function (t) {
            for (var e = 0; e < t.length; e++)t[e][1] || (t[e][1] = t[e][0]);
            return function (e) {
                for (var i = {}, r = 0; r < t.length; r++) {
                    var o = t[r][1];
                    if (!(e && n.indexOf(e, o) >= 0)) {
                        var a = this.getShallow(o);
                        null != a && (i[t[r][0]] = a)
                    }
                }
                return i
            }
        }
    }, function (t, e, i) {
        function n() {
            this._extent = [1 / 0, -(1 / 0)], this._interval = 0, this.init && this.init.apply(this, arguments)
        }

        var r = i(21), o = n.prototype;
        o.parse = function (t) {
            return t
        }, o.contain = function (t) {
            var e = this._extent;
            return t >= e[0] && t <= e[1]
        }, o.normalize = function (t) {
            var e = this._extent;
            return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0])
        }, o.scale = function (t) {
            var e = this._extent;
            return t * (e[1] - e[0]) + e[0]
        }, o.unionExtent = function (t) {
            var e = this._extent;
            t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])
        }, o.getExtent = function () {
            return this._extent.slice()
        }, o.setExtent = function (t, e) {
            var i = this._extent;
            isNaN(t) || (i[0] = t), isNaN(e) || (i[1] = e)
        }, o.getTicksLabels = function () {
            for (var t = [], e = this.getTicks(), i = 0; i < e.length; i++)t.push(this.getLabel(e[i]));
            return t
        }, r.enableClassExtend(n), r.enableClassManagement(n, {registerWhenExtend: !0}), t.exports = n
    }, function (t, e) {
        var i = 1;
        "undefined" != typeof window && (i = Math.max(window.devicePixelRatio || 1, 1));
        var n = {debugMode: 0, devicePixelRatio: i};
        t.exports = n
    }, function (t, e, i) {
        var n = i(1), r = i(58), o = i(7), a = function (t) {
            t = t || {}, r.call(this, t);
            for (var e in t)this[e] = t[e];
            this._children = [], this.__storage = null, this.__dirty = !0
        };
        a.prototype = {
            constructor: a, isGroup: !0, type: "group", silent: !1, children: function () {
                return this._children.slice()
            }, childAt: function (t) {
                return this._children[t]
            }, childOfName: function (t) {
                for (var e = this._children, i = 0; i < e.length; i++)if (e[i].name === t)return e[i]
            }, childCount: function () {
                return this._children.length
            }, add: function (t) {
                return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this
            }, addBefore: function (t, e) {
                if (t && t !== this && t.parent !== this && e && e.parent === this) {
                    var i = this._children, n = i.indexOf(e);
                    n >= 0 && (i.splice(n, 0, t), this._doAdd(t))
                }
                return this
            }, _doAdd: function (t) {
                t.parent && t.parent.remove(t), t.parent = this;
                var e = this.__storage, i = this.__zr;
                e && e !== t.__storage && (e.addToMap(t), t instanceof a && t.addChildrenToStorage(e)), i && i.refresh()
            }, remove: function (t) {
                var e = this.__zr, i = this.__storage, r = this._children, o = n.indexOf(r, t);
                return 0 > o ? this : (r.splice(o, 1), t.parent = null, i && (i.delFromMap(t.id), t instanceof a && t.delChildrenFromStorage(i)), e && e.refresh(), this)
            }, removeAll: function () {
                var t, e, i = this._children, n = this.__storage;
                for (e = 0; e < i.length; e++)t = i[e], n && (n.delFromMap(t.id), t instanceof a && t.delChildrenFromStorage(n)), t.parent = null;
                return i.length = 0, this
            }, eachChild: function (t, e) {
                for (var i = this._children, n = 0; n < i.length; n++) {
                    var r = i[n];
                    t.call(e, r, n)
                }
                return this
            }, traverse: function (t, e) {
                for (var i = 0; i < this._children.length; i++) {
                    var n = this._children[i];
                    t.call(e, n), "group" === n.type && n.traverse(t, e)
                }
                return this
            }, addChildrenToStorage: function (t) {
                for (var e = 0; e < this._children.length; e++) {
                    var i = this._children[e];
                    t.addToMap(i), i instanceof a && i.addChildrenToStorage(t)
                }
            }, delChildrenFromStorage: function (t) {
                for (var e = 0; e < this._children.length; e++) {
                    var i = this._children[e];
                    t.delFromMap(i.id), i instanceof a && i.delChildrenFromStorage(t)
                }
            }, dirty: function () {
                return this.__dirty = !0, this.__zr && this.__zr.refresh(), this
            }, getBoundingRect: function (t) {
                for (var e = null, i = new o(0, 0, 0, 0), n = t || this._children, r = [], a = 0; a < n.length; a++) {
                    var s = n[a];
                    if (!s.ignore && !s.invisible) {
                        var l = s.getBoundingRect(), u = s.getLocalTransform(r);
                        u ? (i.copy(l), i.applyTransform(u), e = e || i.clone(), e.union(i)) : (e = e || l.clone(), e.union(l))
                    }
                }
                return e || i
            }
        }, n.inherits(a, r), t.exports = a
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            for (var e = 0; e < t.length && null == t[e];)e++;
            return t[e]
        }

        function r(t) {
            var e = n(t);
            return null != e && !c.isArray(p(e))
        }

        function o(t, e, i) {
            t = t || [];
            var n = e.get("coordinateSystem"), o = v[n], a = f.get(n), s = o && o(t, e, i), m = s && s.dimensions;
            m || (m = a && a.dimensions || ["x", "y"], m = h(m, t, m.concat(["value"])));
            var y = s ? s.categoryIndex : -1, x = new u(m, e), _ = l(s, t), b = {}, w = y >= 0 && r(t) ? function (t, e, i, n) {
                return d.isDataItemOption(t) && (x.hasItemOption = !0), n === y ? i : g(p(t), m[n])
            } : function (t, e, i, n) {
                var r = p(t), o = g(r && r[n], m[n]);
                d.isDataItemOption(t) && (x.hasItemOption = !0);
                var a = s && s.categoryAxesModels;
                return a && a[e] && "string" == typeof o && (b[e] = b[e] || a[e].getCategories(), o = c.indexOf(b[e], o), 0 > o && !isNaN(o) && (o = +o)), o
            };
            return x.hasItemOption = !1, x.initData(t, _, w), x
        }

        function a(t) {
            return "category" !== t && "time" !== t
        }

        function s(t) {
            return "category" === t ? "ordinal" : "time" === t ? "time" : "float"
        }

        function l(t, e) {
            var i, n = [], r = t && t.dimensions[t.categoryIndex];
            if (r && (i = t.categoryAxesModels[r.name]), i) {
                var o = i.getCategories();
                if (o) {
                    var a = e.length;
                    if (c.isArray(e[0]) && e[0].length > 1) {
                        n = [];
                        for (var s = 0; a > s; s++)n[s] = o[e[s][t.categoryIndex || 0]]
                    } else n = o.slice(0)
                }
            }
            return n
        }

        var u = i(14), h = i(30), c = i(1), d = i(10), f = i(23), p = d.getDataItemValue, g = d.converDataValue, v = {
            cartesian2d: function (t, e, i) {
                var n = i.getComponent("xAxis", e.get("xAxisIndex")), r = i.getComponent("yAxis", e.get("yAxisIndex")), o = n.get("type"), l = r.get("type"), u = [{
                    name: "x",
                    type: s(o),
                    stackable: a(o)
                }, {name: "y", type: s(l), stackable: a(l)}], c = "category" === o, d = "category" === l;
                h(u, t, ["x", "y", "z"]);
                var f = {};
                return c && (f.x = n), d && (f.y = r), {
                    dimensions: u,
                    categoryIndex: c ? 0 : d ? 1 : -1,
                    categoryAxesModels: f
                }
            }, polar: function (t, e, i) {
                var n = e.get("polarIndex") || 0, r = function (t) {
                    return t.get("polarIndex") === n
                }, o = i.findComponents({
                    mainType: "angleAxis",
                    filter: r
                })[0], l = i.findComponents({
                    mainType: "radiusAxis",
                    filter: r
                })[0], u = l.get("type"), c = o.get("type"), d = [{
                    name: "radius",
                    type: s(u),
                    stackable: a(u)
                }, {name: "angle", type: s(c), stackable: a(c)}], f = "category" === c, p = "category" === u;
                h(d, t, ["radius", "angle", "value"]);
                var g = {};
                return p && (g.radius = l), f && (g.angle = o), {
                    dimensions: d,
                    categoryIndex: f ? 1 : p ? 0 : -1,
                    categoryAxesModels: g
                }
            }, geo: function (t, e, i) {
                return {dimensions: h([{name: "lng"}, {name: "lat"}], t, ["lng", "lat", "value"])}
            }
        };
        t.exports = o
    }, function (t, e, i) {
        "use strict";
        var n = i(3), r = i(1);
        i(54), i(104), i(2).extendComponentView({
            type: "grid", render: function (t, e) {
                this.group.removeAll(), t.get("show") && this.group.add(new n.Rect({
                    shape: t.coordinateSystem.getRect(),
                    style: r.defaults({fill: t.get("backgroundColor")}, t.getItemStyle()),
                    silent: !0
                }))
            }
        })
    }, function (t, e, i) {
        function n(t) {
            t = t || {}, a.call(this, t);
            for (var e in t)t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
            this.style = new o(t.style), this._rect = null, this.__clipPaths = []
        }

        var r = i(1), o = i(64), a = i(58), s = i(75);
        n.prototype = {
            constructor: n,
            type: "displayable",
            __dirty: !0,
            invisible: !1,
            z: 0,
            z2: 0,
            zlevel: 0,
            draggable: !1,
            dragging: !1,
            silent: !1,
            culling: !1,
            cursor: "pointer",
            rectHover: !1,
            progressive: -1,
            beforeBrush: function (t) {
            },
            afterBrush: function (t) {
            },
            brush: function (t, e) {
            },
            getBoundingRect: function () {
            },
            contain: function (t, e) {
                return this.rectContain(t, e)
            },
            traverse: function (t, e) {
                t.call(e, this)
            },
            rectContain: function (t, e) {
                var i = this.transformCoordToLocal(t, e), n = this.getBoundingRect();
                return n.contain(i[0], i[1])
            },
            dirty: function () {
                this.__dirty = !0, this._rect = null, this.__zr && this.__zr.refresh()
            },
            animateStyle: function (t) {
                return this.animate("style", t)
            },
            attrKV: function (t, e) {
                "style" !== t ? a.prototype.attrKV.call(this, t, e) : this.style.set(e)
            },
            setStyle: function (t, e) {
                return this.style.set(t, e), this.dirty(!1), this
            },
            useStyle: function (t) {
                return this.style = new o(t), this.dirty(!1), this
            }
        }, r.inherits(n, a), r.mixin(n, s), t.exports = n
    }, function (t, e, i) {
        var n = i(4), r = i(9), o = i(32), a = Math.floor, s = Math.ceil, l = o.extend({
            type: "interval",
            _interval: 0,
            setExtent: function (t, e) {
                var i = this._extent;
                isNaN(t) || (i[0] = parseFloat(t)), isNaN(e) || (i[1] = parseFloat(e))
            },
            unionExtent: function (t) {
                var e = this._extent;
                t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), l.prototype.setExtent.call(this, e[0], e[1])
            },
            getInterval: function () {
                return this._interval || this.niceTicks(), this._interval
            },
            setInterval: function (t) {
                this._interval = t, this._niceExtent = this._extent.slice()
            },
            getTicks: function () {
                this._interval || this.niceTicks();
                var t = this._interval, e = this._extent, i = [], r = 1e4;
                if (t) {
                    var o = this._niceExtent;
                    e[0] < o[0] && i.push(e[0]);
                    for (var a = o[0]; a <= o[1];)if (i.push(a), a = n.round(a + t), i.length > r)return [];
                    e[1] > o[1] && i.push(e[1])
                }
                return i
            },
            getTicksLabels: function () {
                for (var t = [], e = this.getTicks(), i = 0; i < e.length; i++)t.push(this.getLabel(e[i]));
                return t
            },
            getLabel: function (t) {
                return r.addCommas(t)
            },
            niceTicks: function (t) {
                t = t || 5;
                var e = this._extent, i = e[1] - e[0];
                if (isFinite(i)) {
                    0 > i && (i = -i, e.reverse());
                    var r = n.nice(i / t, !0), o = [n.round(s(e[0] / r) * r), n.round(a(e[1] / r) * r)];
                    this._interval = r, this._niceExtent = o
                }
            },
            niceExtent: function (t, e, i) {
                var r = this._extent;
                if (r[0] === r[1])if (0 !== r[0]) {
                    var o = r[0];
                    i ? r[0] -= o / 2 : (r[1] += o / 2, r[0] -= o / 2)
                } else r[1] = 1;
                var l = r[1] - r[0];
                isFinite(l) || (r[0] = 0, r[1] = 1), this.niceTicks(t);
                var u = this._interval;
                e || (r[0] = n.round(a(r[0] / u) * u)), i || (r[1] = n.round(s(r[1] / u) * u))
            }
        });
        l.create = function () {
            return new l
        }, t.exports = l
    }, function (t, e, i) {
        function n(t) {
            this.group = new o.Group, this._symbolCtor = t || a
        }

        function r(t, e, i) {
            var n = t.getItemLayout(e);
            return n && !isNaN(n[0]) && !isNaN(n[1]) && !(i && i(e)) && "none" !== t.getItemVisual(e, "symbol")
        }

        var o = i(3), a = i(49), s = n.prototype;
        s.updateData = function (t, e) {
            var i = this.group, n = t.hostModel, a = this._data, s = this._symbolCtor, l = {
                itemStyle: n.getModel("itemStyle.normal").getItemStyle(["color"]),
                hoverItemStyle: n.getModel("itemStyle.emphasis").getItemStyle(),
                symbolRotate: n.get("symbolRotate"),
                symbolOffset: n.get("symbolOffset"),
                hoverAnimation: n.get("hoverAnimation"),
                labelModel: n.getModel("label.normal"),
                hoverLabelModel: n.getModel("label.emphasis")
            };
            t.diff(a).add(function (n) {
                var o = t.getItemLayout(n);
                if (r(t, n, e)) {
                    var a = new s(t, n, l);
                    a.attr("position", o), t.setItemGraphicEl(n, a), i.add(a)
                }
            }).update(function (u, h) {
                var c = a.getItemGraphicEl(h), d = t.getItemLayout(u);
                return r(t, u, e) ? (c ? (c.updateData(t, u, l), o.updateProps(c, {position: d}, n)) : (c = new s(t, u), c.attr("position", d)), i.add(c), void t.setItemGraphicEl(u, c)) : void i.remove(c)
            }).remove(function (t) {
                var e = a.getItemGraphicEl(t);
                e && e.fadeOut(function () {
                    i.remove(e)
                })
            }).execute(), this._data = t
        }, s.updateLayout = function () {
            var t = this._data;
            t && t.eachItemGraphicEl(function (e, i) {
                var n = t.getItemLayout(i);
                e.attr("position", n)
            })
        }, s.remove = function (t) {
            var e = this.group, i = this._data;
            i && (t ? i.eachItemGraphicEl(function (t) {
                t.fadeOut(function () {
                    e.remove(t)
                })
            }) : e.removeAll())
        }, t.exports = n
    }, function (t, e, i) {
        function n(t) {
            var e = {};
            return h(["start", "end", "startValue", "endValue", "throttle"], function (i) {
                t.hasOwnProperty(i) && (e[i] = t[i])
            }), e
        }

        function r(t, e, i, n) {
            null != i[e] && null == i[t] && (n[t] = null)
        }

        var o = i(1), a = i(12), s = i(2), l = i(10), u = i(178), h = o.each, c = l.eachAxisDim, d = s.extendComponentModel({
            type: "dataZoom",
            dependencies: ["xAxis", "yAxis", "zAxis", "radiusAxis", "angleAxis", "series"],
            defaultOption: {
                zlevel: 0,
                z: 4,
                orient: null,
                xAxisIndex: null,
                yAxisIndex: null,
                angleAxisIndex: null,
                radiusAxisIndex: null,
                filterMode: "filter",
                throttle: null,
                start: 0,
                end: 100,
                startValue: null,
                endValue: null
            },
            init: function (t, e, i) {
                this._dataIntervalByAxis = {}, this._dataInfo = {}, this._axisProxies = {}, this.textStyleModel, this._autoThrottle = !0;
                var r = n(t);
                this.mergeDefaultAndTheme(t, i), this.doInit(r)
            },
            mergeOption: function (t) {
                var e = n(t);
                o.merge(this.option, t, !0), this.doInit(e)
            },
            doInit: function (t) {
                var e = this.option;
                a.canvasSupported || (e.realtime = !1), this._setDefaultThrottle(t), r("start", "startValue", t, e), r("end", "endValue", t, e), this.textStyleModel = this.getModel("textStyle"), this._resetTarget(), this._giveAxisProxies()
            },
            _giveAxisProxies: function () {
                var t = this._axisProxies;
                this.eachTargetAxis(function (e, i, n, r) {
                    var o = this.dependentModels[e.axis][i], a = o.__dzAxisProxy || (o.__dzAxisProxy = new u(e.name, i, this, r));
                    t[e.name + "_" + i] = a
                }, this)
            },
            _resetTarget: function () {
                var t = this.option, e = this._judgeAutoMode();
                c(function (e) {
                    var i = e.axisIndex;
                    t[i] = l.normalizeToArray(t[i])
                }, this), "axisIndex" === e ? this._autoSetAxisIndex() : "orient" === e && this._autoSetOrient()
            },
            _judgeAutoMode: function () {
                var t = this.option, e = !1;
                c(function (i) {
                    null != t[i.axisIndex] && (e = !0)
                }, this);
                var i = t.orient;
                return null == i && e ? "orient" : e ? void 0 : (null == i && (t.orient = "horizontal"), "axisIndex")
            },
            _autoSetAxisIndex: function () {
                var t = !0, e = this.get("orient", !0), i = this.option;
                if (t) {
                    var n = "vertical" === e ? {dim: "y", axisIndex: "yAxisIndex", axis: "yAxis"} : {
                        dim: "x",
                        axisIndex: "xAxisIndex",
                        axis: "xAxis"
                    };
                    this.dependentModels[n.axis].length && (i[n.axisIndex] = [0], t = !1)
                }
                t && c(function (e) {
                    if (t) {
                        var n = [], r = this.dependentModels[e.axis];
                        if (r.length && !n.length)for (var o = 0, a = r.length; a > o; o++)"category" === r[o].get("type") && n.push(o);
                        i[e.axisIndex] = n, n.length && (t = !1)
                    }
                }, this), t && this.ecModel.eachSeries(function (t) {
                    this._isSeriesHasAllAxesTypeOf(t, "value") && c(function (e) {
                        var n = i[e.axisIndex], r = t.get(e.axisIndex);
                        o.indexOf(n, r) < 0 && n.push(r)
                    })
                }, this)
            },
            _autoSetOrient: function () {
                var t;
                this.eachTargetAxis(function (e) {
                    !t && (t = e.name)
                }, this), this.option.orient = "y" === t ? "vertical" : "horizontal"
            },
            _isSeriesHasAllAxesTypeOf: function (t, e) {
                var i = !0;
                return c(function (n) {
                    var r = t.get(n.axisIndex), o = this.dependentModels[n.axis][r];
                    o && o.get("type") === e || (i = !1)
                }, this), i
            },
            _setDefaultThrottle: function (t) {
                if (t.hasOwnProperty("throttle") && (this._autoThrottle = !1), this._autoThrottle) {
                    var e = this.ecModel.option;
                    this.option.throttle = e.animation && e.animationDurationUpdate > 0 ? 100 : 20
                }
            },
            getFirstTargetAxisModel: function () {
                var t;
                return c(function (e) {
                    if (null == t) {
                        var i = this.get(e.axisIndex);
                        i.length && (t = this.dependentModels[e.axis][i[0]])
                    }
                }, this), t
            },
            eachTargetAxis: function (t, e) {
                var i = this.ecModel;
                c(function (n) {
                    h(this.get(n.axisIndex), function (r) {
                        t.call(e, n, r, this, i)
                    }, this)
                }, this)
            },
            getAxisProxy: function (t, e) {
                return this._axisProxies[t + "_" + e]
            },
            setRawRange: function (t) {
                h(["start", "end", "startValue", "endValue"], function (e) {
                    this.option[e] = t[e]
                }, this)
            },
            getPercentRange: function () {
                var t = this.findRepresentativeAxisProxy();
                return t ? t.getDataPercentWindow() : void 0
            },
            getValueRange: function (t, e) {
                if (null != t || null != e)return this.getAxisProxy(t, e).getDataValueWindow();
                var i = this.findRepresentativeAxisProxy();
                return i ? i.getDataValueWindow() : void 0
            },
            findRepresentativeAxisProxy: function () {
                var t = this._axisProxies;
                for (var e in t)if (t.hasOwnProperty(e) && t[e].hostedBy(this))return t[e];
                for (var e in t)if (t.hasOwnProperty(e) && !t[e].hostedBy(this))return t[e]
            }
        });
        t.exports = d
    }, function (t, e, i) {
        var n = i(57);
        t.exports = n.extend({
            type: "dataZoom", render: function (t, e, i, n) {
                this.dataZoomModel = t, this.ecModel = e, this.api = i
            }, getTargetInfo: function () {
                function t(t, e, i, n) {
                    for (var r, o = 0; o < i.length; o++)if (i[o].model === t) {
                        r = i[o];
                        break
                    }
                    r || i.push(r = {model: t, axisModels: [], coordIndex: n}), r.axisModels.push(e)
                }

                var e = this.dataZoomModel, i = this.ecModel, n = [], r = [], o = [];
                return e.eachTargetAxis(function (e, a) {
                    var s = i.getComponent(e.axis, a);
                    if (s) {
                        o.push(s);
                        var l = s.get("gridIndex"), u = s.get("polarIndex");
                        if (null != l) {
                            var h = i.getComponent("grid", l);
                            t(h, s, n, l)
                        } else if (null != u) {
                            var h = i.getComponent("polar", u);
                            t(h, s, r, u)
                        }
                    }
                }, this), {cartesians: n, polars: r, axisModels: o}
            }
        })
    }, function (t, e, i) {
        function n(t, e) {
            var i = t[1] - t[0], n = e, r = i / n / 2;
            t[0] += r, t[1] -= r
        }

        var r = i(4), o = r.linearMap, a = i(1), s = [0, 1], l = function (t, e, i) {
            this.dim = t, this.scale = e, this._extent = i || [0, 0], this.inverse = !1, this.onBand = !1
        };
        l.prototype = {
            constructor: l, contain: function (t) {
                var e = this._extent, i = Math.min(e[0], e[1]), n = Math.max(e[0], e[1]);
                return t >= i && n >= t
            }, containData: function (t) {
                return this.contain(this.dataToCoord(t))
            }, getExtent: function () {
                var t = this._extent.slice();
                return t
            }, getPixelPrecision: function (t) {
                return r.getPixelPrecision(t || this.scale.getExtent(), this._extent)
            }, setExtent: function (t, e) {
                var i = this._extent;
                i[0] = t, i[1] = e
            }, dataToCoord: function (t, e) {
                var i = this._extent, r = this.scale;
                return t = r.normalize(t), this.onBand && "ordinal" === r.type && (i = i.slice(), n(i, r.count())), o(t, s, i, e)
            }, coordToData: function (t, e) {
                var i = this._extent, r = this.scale;
                this.onBand && "ordinal" === r.type && (i = i.slice(), n(i, r.count()));
                var a = o(t, i, s, e);
                return this.scale.scale(a)
            }, getTicksCoords: function (t) {
                if (this.onBand && !t) {
                    for (var e = this.getBands(), i = [], n = 0; n < e.length; n++)i.push(e[n][0]);
                    return e[n - 1] && i.push(e[n - 1][1]), i
                }
                return a.map(this.scale.getTicks(), this.dataToCoord, this)
            }, getLabelsCoords: function () {
                return a.map(this.scale.getTicks(), this.dataToCoord, this)
            }, getBands: function () {
                for (var t = this.getExtent(), e = [], i = this.scale.count(), n = t[0], r = t[1], o = r - n, a = 0; i > a; a++)e.push([o * a / i + n, o * (a + 1) / i + n]);
                return e
            }, getBandWidth: function () {
                var t = this._extent, e = this.scale.getExtent(), i = e[1] - e[0] + (this.onBand ? 1 : 0);
                0 === i && (i = 1);
                var n = Math.abs(t[1] - t[0]);
                return Math.abs(n) / i
            }
        }, t.exports = l
    }, function (t, e, i) {
        var n = i(1), r = i(21), o = r.parseClassType, a = 0, s = {}, l = "_";
        s.getUID = function (t) {
            return [t || "", a++, Math.random()].join(l)
        }, s.enableSubTypeDefaulter = function (t) {
            var e = {};
            return t.registerSubTypeDefaulter = function (t, i) {
                t = o(t), e[t.main] = i
            }, t.determineSubType = function (i, n) {
                var r = n.type;
                if (!r) {
                    var a = o(i).main;
                    t.hasSubTypes(i) && e[a] && (r = e[a](n))
                }
                return r
            }, t
        }, s.enableTopologicalTravel = function (t, e) {
            function i(t) {
                var i = {}, a = [];
                return n.each(t, function (s) {
                    var l = r(i, s), u = l.originalDeps = e(s), h = o(u, t);
                    l.entryCount = h.length, 0 === l.entryCount && a.push(s), n.each(h, function (t) {
                        n.indexOf(l.predecessor, t) < 0 && l.predecessor.push(t);
                        var e = r(i, t);
                        n.indexOf(e.successor, t) < 0 && e.successor.push(s)
                    })
                }), {graph: i, noEntryList: a}
            }

            function r(t, e) {
                return t[e] || (t[e] = {predecessor: [], successor: []}), t[e]
            }

            function o(t, e) {
                var i = [];
                return n.each(t, function (t) {
                    n.indexOf(e, t) >= 0 && i.push(t)
                }), i
            }

            t.topologicalTravel = function (t, e, r, o) {
                function a(t) {
                    u[t].entryCount--, 0 === u[t].entryCount && h.push(t)
                }

                function s(t) {
                    c[t] = !0, a(t)
                }

                if (t.length) {
                    var l = i(e), u = l.graph, h = l.noEntryList, c = {};
                    for (n.each(t, function (t) {
                        c[t] = !0
                    }); h.length;) {
                        var d = h.pop(), f = u[d], p = !!c[d];
                        p && (r.call(o, d, f.originalDeps.slice()), delete c[d]), n.each(f.successor, p ? s : a)
                    }
                    n.each(c, function () {
                        throw new Error("Circle dependency may exists")
                    })
                }
            }
        }, t.exports = s
    }, function (t, e) {
        function i(t) {
            for (var e = 0; t >= h;)e |= 1 & t, t >>= 1;
            return t + e
        }

        function n(t, e, i, n) {
            var o = e + 1;
            if (o === i)return 1;
            if (n(t[o++], t[e]) < 0) {
                for (; i > o && n(t[o], t[o - 1]) < 0;)o++;
                r(t, e, o)
            } else for (; i > o && n(t[o], t[o - 1]) >= 0;)o++;
            return o - e
        }

        function r(t, e, i) {
            for (i--; i > e;) {
                var n = t[e];
                t[e++] = t[i], t[i--] = n
            }
        }

        function o(t, e, i, n, r) {
            for (n === e && n++; i > n; n++) {
                for (var o, a = t[n], s = e, l = n; l > s;)o = s + l >>> 1, r(a, t[o]) < 0 ? l = o : s = o + 1;
                var u = n - s;
                switch (u) {
                    case 3:
                        t[s + 3] = t[s + 2];
                    case 2:
                        t[s + 2] = t[s + 1];
                    case 1:
                        t[s + 1] = t[s];
                        break;
                    default:
                        for (; u > 0;)t[s + u] = t[s + u - 1], u--
                }
                t[s] = a
            }
        }

        function a(t, e, i, n, r, o) {
            var a = 0, s = 0, l = 1;
            if (o(t, e[i + r]) > 0) {
                for (s = n - r; s > l && o(t, e[i + r + l]) > 0;)a = l, l = (l << 1) + 1, 0 >= l && (l = s);
                l > s && (l = s), a += r, l += r
            } else {
                for (s = r + 1; s > l && o(t, e[i + r - l]) <= 0;)a = l, l = (l << 1) + 1, 0 >= l && (l = s);
                l > s && (l = s);
                var u = a;
                a = r - l, l = r - u
            }
            for (a++; l > a;) {
                var h = a + (l - a >>> 1);
                o(t, e[i + h]) > 0 ? a = h + 1 : l = h
            }
            return l
        }

        function s(t, e, i, n, r, o) {
            var a = 0, s = 0, l = 1;
            if (o(t, e[i + r]) < 0) {
                for (s = r + 1; s > l && o(t, e[i + r - l]) < 0;)a = l, l = (l << 1) + 1, 0 >= l && (l = s);
                l > s && (l = s);
                var u = a;
                a = r - l, l = r - u
            } else {
                for (s = n - r; s > l && o(t, e[i + r + l]) >= 0;)a = l, l = (l << 1) + 1, 0 >= l && (l = s);
                l > s && (l = s), a += r, l += r
            }
            for (a++; l > a;) {
                var h = a + (l - a >>> 1);
                o(t, e[i + h]) < 0 ? l = h : a = h + 1
            }
            return l
        }

        function l(t, e) {
            function i(t, e) {
                h[y] = t, f[y] = e, y += 1
            }

            function n() {
                for (; y > 1;) {
                    var t = y - 2;
                    if (t >= 1 && f[t - 1] <= f[t] + f[t + 1] || t >= 2 && f[t - 2] <= f[t] + f[t - 1])f[t - 1] < f[t + 1] && t--; else if (f[t] > f[t + 1])break;
                    o(t)
                }
            }

            function r() {
                for (; y > 1;) {
                    var t = y - 2;
                    t > 0 && f[t - 1] < f[t + 1] && t--, o(t)
                }
            }

            function o(i) {
                var n = h[i], r = f[i], o = h[i + 1], c = f[i + 1];
                f[i] = r + c, i === y - 3 && (h[i + 1] = h[i + 2], f[i + 1] = f[i + 2]), y--;
                var d = s(t[o], t, n, r, 0, e);
                n += d, r -= d, 0 !== r && (c = a(t[n + r - 1], t, o, c, c - 1, e), 0 !== c && (c >= r ? l(n, r, o, c) : u(n, r, o, c)))
            }

            function l(i, n, r, o) {
                var l = 0;
                for (l = 0; n > l; l++)x[l] = t[i + l];
                var u = 0, h = r, d = i;
                if (t[d++] = t[h++], 0 !== --o) {
                    if (1 === n) {
                        for (l = 0; o > l; l++)t[d + l] = t[h + l];
                        return void(t[d + o] = x[u])
                    }
                    for (var f, g, v, m = p; ;) {
                        f = 0, g = 0, v = !1;
                        do if (e(t[h], x[u]) < 0) {
                            if (t[d++] = t[h++], g++, f = 0, 0 === --o) {
                                v = !0;
                                break
                            }
                        } else if (t[d++] = x[u++], f++, g = 0, 1 === --n) {
                            v = !0;
                            break
                        } while (m > (f | g));
                        if (v)break;
                        do {
                            if (f = s(t[h], x, u, n, 0, e), 0 !== f) {
                                for (l = 0; f > l; l++)t[d + l] = x[u + l];
                                if (d += f, u += f, n -= f, 1 >= n) {
                                    v = !0;
                                    break
                                }
                            }
                            if (t[d++] = t[h++], 0 === --o) {
                                v = !0;
                                break
                            }
                            if (g = a(x[u], t, h, o, 0, e), 0 !== g) {
                                for (l = 0; g > l; l++)t[d + l] = t[h + l];
                                if (d += g, h += g, o -= g, 0 === o) {
                                    v = !0;
                                    break
                                }
                            }
                            if (t[d++] = x[u++], 1 === --n) {
                                v = !0;
                                break
                            }
                            m--
                        } while (f >= c || g >= c);
                        if (v)break;
                        0 > m && (m = 0), m += 2
                    }
                    if (p = m, 1 > p && (p = 1), 1 === n) {
                        for (l = 0; o > l; l++)t[d + l] = t[h + l];
                        t[d + o] = x[u]
                    } else {
                        if (0 === n)throw new Error;
                        for (l = 0; n > l; l++)t[d + l] = x[u + l]
                    }
                } else for (l = 0; n > l; l++)t[d + l] = x[u + l]
            }

            function u(i, n, r, o) {
                var l = 0;
                for (l = 0; o > l; l++)x[l] = t[r + l];
                var u = i + n - 1, h = o - 1, d = r + o - 1, f = 0, g = 0;
                if (t[d--] = t[u--], 0 !== --n) {
                    if (1 === o) {
                        for (d -= n, u -= n, g = d + 1, f = u + 1, l = n - 1; l >= 0; l--)t[g + l] = t[f + l];
                        return void(t[d] = x[h])
                    }
                    for (var v = p; ;) {
                        var m = 0, y = 0, _ = !1;
                        do if (e(x[h], t[u]) < 0) {
                            if (t[d--] = t[u--], m++, y = 0, 0 === --n) {
                                _ = !0;
                                break
                            }
                        } else if (t[d--] = x[h--], y++, m = 0, 1 === --o) {
                            _ = !0;
                            break
                        } while (v > (m | y));
                        if (_)break;
                        do {
                            if (m = n - s(x[h], t, i, n, n - 1, e), 0 !== m) {
                                for (d -= m, u -= m, n -= m, g = d + 1, f = u + 1, l = m - 1; l >= 0; l--)t[g + l] = t[f + l];
                                if (0 === n) {
                                    _ = !0;
                                    break
                                }
                            }
                            if (t[d--] = x[h--], 1 === --o) {
                                _ = !0;
                                break
                            }
                            if (y = o - a(t[u], x, 0, o, o - 1, e), 0 !== y) {
                                for (d -= y, h -= y, o -= y, g = d + 1, f = h + 1, l = 0; y > l; l++)t[g + l] = x[f + l];
                                if (1 >= o) {
                                    _ = !0;
                                    break
                                }
                            }
                            if (t[d--] = t[u--], 0 === --n) {
                                _ = !0;
                                break
                            }
                            v--
                        } while (m >= c || y >= c);
                        if (_)break;
                        0 > v && (v = 0), v += 2
                    }
                    if (p = v, 1 > p && (p = 1), 1 === o) {
                        for (d -= n, u -= n, g = d + 1, f = u + 1, l = n - 1; l >= 0; l--)t[g + l] = t[f + l];
                        t[d] = x[h]
                    } else {
                        if (0 === o)throw new Error;
                        for (f = d - (o - 1), l = 0; o > l; l++)t[f + l] = x[l]
                    }
                } else for (f = d - (o - 1), l = 0; o > l; l++)t[f + l] = x[l]
            }

            var h, f, p = c, g = 0, v = d, m = 0, y = 0;
            g = t.length, 2 * d > g && (v = g >>> 1);
            var x = [];
            m = 120 > g ? 5 : 1542 > g ? 10 : 119151 > g ? 19 : 40, h = [], f = [], this.mergeRuns = n, this.forceMergeRuns = r, this.pushRun = i
        }

        function u(t, e, r, a) {
            r || (r = 0), a || (a = t.length);
            var s = a - r;
            if (!(2 > s)) {
                var u = 0;
                if (h > s)return u = n(t, r, a, e), void o(t, r, a, r + u, e);
                var c = new l(t, e), d = i(s);
                do {
                    if (u = n(t, r, a, e), d > u) {
                        var f = s;
                        f > d && (f = d), o(t, r, r + f, r + u, e), u = f
                    }
                    c.pushRun(r, u), c.mergeRuns(), s -= u, r += u
                } while (0 !== s);
                c.forceMergeRuns()
            }
        }

        var h = 32, c = 7, d = 256;
        t.exports = u
    }, function (t, e) {
        "use strict";
        function i(t) {
            return t
        }

        function n(t, e, n, r) {
            this._old = t, this._new = e, this._oldKeyGetter = n || i, this._newKeyGetter = r || i
        }

        function r(t, e, i, n) {
            for (var r = 0; r < t.length; r++) {
                var o = n(t[r], r), a = e[o];
                null == a ? (i.push(o), e[o] = r) : (a.length || (e[o] = a = [a]), a.push(r))
            }
        }

        n.prototype = {
            constructor: n, add: function (t) {
                return this._add = t, this
            }, update: function (t) {
                return this._update = t, this
            }, remove: function (t) {
                return this._remove = t, this
            }, execute: function () {
                var t, e = this._old, i = this._new, n = this._oldKeyGetter, o = this._newKeyGetter, a = {}, s = {}, l = [], u = [];
                for (r(e, a, l, n), r(i, s, u, o), t = 0; t < e.length; t++) {
                    var h = l[t], c = s[h];
                    if (null != c) {
                        var d = c.length;
                        d ? (1 === d && (s[h] = null), c = c.unshift()) : s[h] = null, this._update && this._update(c, t)
                    } else this._remove && this._remove(t)
                }
                for (var t = 0; t < u.length; t++) {
                    var h = u[t];
                    if (s.hasOwnProperty(h)) {
                        var c = s[h];
                        if (null == c)continue;
                        if (c.length)for (var f = 0, d = c.length; d > f; f++)this._add && this._add(c[f]); else this._add && this._add(c)
                    }
                }
            }
        }, t.exports = n
    }, function (t, e) {
        t.exports = function (t, e, i, n, r) {
            n.eachRawSeriesByType(t, function (t) {
                var r = t.getData(), o = t.get("symbol") || e, a = t.get("symbolSize");
                r.setVisual({
                    legendSymbol: i || o,
                    symbol: o,
                    symbolSize: a
                }), n.isSeriesFiltered(t) || ("function" == typeof a && r.each(function (e) {
                    var i = t.getRawValue(e), n = t.getDataParams(e);
                    r.setItemVisual(e, "symbolSize", a(i, n))
                }), r.each(function (t) {
                    var e = r.getItemModel(t), i = e.getShallow("symbol", !0), n = e.getShallow("symbolSize", !0);
                    null != i && r.setItemVisual(t, "symbol", i), null != n && r.setItemVisual(t, "symbolSize", n)
                }))
            })
        }
    }, function (t, e, i) {
        var n = i(33);
        t.exports = function () {
            if (0 !== n.debugMode)if (1 == n.debugMode)for (var t in arguments)throw new Error(arguments[t]); else if (n.debugMode > 1)for (var t in arguments)console.log(arguments[t])
        }
    }, function (t, e, i) {
        function n(t) {
            r.call(this, t)
        }

        var r = i(37), o = i(7), a = i(1), s = i(147), l = new s(50);
        n.prototype = {
            constructor: n, type: "image", brush: function (t, e) {
                var i, n = this.style, r = n.image;
                if (n.bind(t, this, e), i = "string" == typeof r ? this._image : r, !i && r) {
                    var o = l.get(r);
                    if (!o)return i = new Image, i.onload = function () {
                        i.onload = null;
                        for (var t = 0; t < o.pending.length; t++)o.pending[t].dirty()
                    }, o = {image: i, pending: [this]}, i.src = r, l.put(r, o), void(this._image = i);
                    if (i = o.image, this._image = i, !i.width || !i.height)return void o.pending.push(this)
                }
                if (i) {
                    var a = n.width || i.width, s = n.height || i.height, u = n.x || 0, h = n.y || 0;
                    if (!i.width || !i.height)return;
                    if (this.setTransform(t), n.sWidth && n.sHeight) {
                        var c = n.sx || 0, d = n.sy || 0;
                        t.drawImage(i, c, d, n.sWidth, n.sHeight, u, h, a, s)
                    } else if (n.sx && n.sy) {
                        var c = n.sx, d = n.sy, f = a - c, p = s - d;
                        t.drawImage(i, c, d, f, p, u, h, a, s)
                    } else {
                        try {
                            t.drawImage(i, u, h, a, s)
                        }catch (err){
                            console.log(err.message)
                        }


                    ;
                    null == n.width && (n.width = a), null == n.height && (n.height = s), this.restoreTransform(t), null != n.text && this.drawRectText(t, this.getBoundingRect())
                    }
                }
            }, getBoundingRect: function () {
                var t = this.style;
                return this._rect || (this._rect = new o(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect
            }
        }, a.inherits(n, r), t.exports = n
    }, function (t, e, i) {
        function n(t) {
            return t instanceof Array || (t = [+t, +t]), t
        }

        function r(t, e, i) {
            l.Group.call(this), this.updateData(t, e, i)
        }

        function o(t, e) {
            this.parent.drift(t, e)
        }

        var a = i(1), s = i(26), l = i(3), u = i(4), h = r.prototype;
        h._createSymbol = function (t, e, i) {
            this.removeAll();
            var r = e.hostModel, a = e.getItemVisual(i, "color"), u = s.createSymbol(t, -.5, -.5, 1, 1, a);
            u.attr({z2: 100, culling: !0, scale: [0, 0]}), u.drift = o;
            var h = n(e.getItemVisual(i, "symbolSize"));
            l.initProps(u, {scale: h}, r, i), this._symbolType = t, this.add(u)
        }, h.stopSymbolAnimation = function (t) {
            this.childAt(0).stopAnimation(t)
        }, h.getScale = function () {
            return this.childAt(0).scale
        }, h.highlight = function () {
            this.childAt(0).trigger("emphasis");
        }, h.downplay = function () {
            this.childAt(0).trigger("normal")
        }, h.setZ = function (t, e) {
            var i = this.childAt(0);
            i.zlevel = t, i.z = e
        }, h.setDraggable = function (t) {
            var e = this.childAt(0);
            e.draggable = t, e.cursor = t ? "move" : "pointer"
        }, h.updateData = function (t, e, i) {
            this.silent = !1;
            var r = t.getItemVisual(e, "symbol") || "circle", o = t.hostModel, a = n(t.getItemVisual(e, "symbolSize"));
            if (r !== this._symbolType)this._createSymbol(r, t, e); else {
                var s = this.childAt(0);
                l.updateProps(s, {scale: a}, o, e)
            }
            this._updateCommon(t, e, a, i), this._seriesModel = o
        };
        var c = ["itemStyle", "normal"], d = ["itemStyle", "emphasis"], f = ["label", "normal"], p = ["label", "emphasis"];
        h._updateCommon = function (t, e, i, r) {
            var o = this.childAt(0), s = t.hostModel, h = t.getItemVisual(e, "color");
            "image" !== o.type && o.useStyle({strokeNoScale: !0}), r = r || null;
            var g = r && r.itemStyle, v = r && r.hoverItemStyle, m = r && r.symbolRotate, y = r && r.symbolOffset, x = r && r.labelModel, _ = r && r.hoverLabelModel, b = r && r.hoverAnimation;
            if (!r || t.hasItemOption) {
                var w = t.getItemModel(e);
                g = w.getModel(c).getItemStyle(["color"]), v = w.getModel(d).getItemStyle(), m = w.getShallow("symbolRotate"), y = w.getShallow("symbolOffset"), x = w.getModel(f), _ = w.getModel(p), b = w.getShallow("hoverAnimation")
            } else v = a.extend({}, v);
            var S = o.style;
            o.rotation = (m || 0) * Math.PI / 180 || 0, y && o.attr("position", [u.parsePercent(y[0], i[0]), u.parsePercent(y[1], i[1])]), o.setColor(h), o.setStyle(g);
            var M = t.getItemVisual(e, "opacity");
            null != M && (S.opacity = M);
            for (var A, I, T = t.dimensions.slice(); T.length && (A = T.pop(), I = t.getDimensionInfo(A).type, "ordinal" === I || "time" === I););
            null != A && x.getShallow("show") ? (l.setText(S, x, h), S.text = a.retrieve(s.getFormattedLabel(e, "normal"), t.get(A, e))) : S.text = "", null != A && _.getShallow("show") ? (l.setText(v, _, h), v.text = a.retrieve(s.getFormattedLabel(e, "emphasis"), t.get(A, e))) : v.text = "";
            var L = n(t.getItemVisual(e, "symbolSize"));
            if (o.off("mouseover").off("mouseout").off("emphasis").off("normal"), l.setHoverStyle(o, v), b && s.ifEnableAnimation()) {
                var C = function () {
                    var t = L[1] / L[0];
                    this.animateTo({scale: [Math.max(1.1 * L[0], L[0] + 3), Math.max(1.1 * L[1], L[1] + 3 * t)]}, 400, "elasticOut")
                }, D = function () {
                    this.animateTo({scale: L}, 400, "elasticOut")
                };
                o.on("mouseover", C).on("mouseout", D).on("emphasis", C).on("normal", D)
            }
        }, h.fadeOut = function (t) {
            var e = this.childAt(0);
            this.silent = !0, e.style.text = "", l.updateProps(e, {scale: [0, 0]}, this._seriesModel, this.dataIndex, t)
        }, a.inherits(r, l.Group), t.exports = r
    }, function (t, e, i) {
        function n(t) {
            var e = {componentType: t.mainType};
            return e[t.mainType + "Index"] = t.componentIndex, e
        }

        function r(t, e, i) {
            var n, r, o = d(e - t.rotation);
            return f(o) ? (r = i > 0 ? "top" : "bottom", n = "center") : f(o - m) ? (r = i > 0 ? "bottom" : "top", n = "center") : (r = "middle", n = o > 0 && m > o ? i > 0 ? "right" : "left" : i > 0 ? "left" : "right"), {
                rotation: o,
                textAlign: n,
                verticalAlign: r
            }
        }

        function o(t, e, i, n) {
            var r, o, a = d(i - t.rotation), s = n[0] > n[1], l = "start" === e && !s || "start" !== e && s;
            return f(a - m / 2) ? (o = l ? "bottom" : "top", r = "center") : f(a - 1.5 * m) ? (o = l ? "top" : "bottom", r = "center") : (o = "middle", r = 1.5 * m > a && a > m / 2 ? l ? "left" : "right" : l ? "right" : "left"), {
                rotation: a,
                textAlign: r,
                verticalAlign: o
            }
        }

        function a(t) {
            var e = t.get("tooltip");
            return t.get("silent") || !(t.get("triggerEvent") || e && e.show)
        }

        var s = i(1), l = i(9), u = i(3), h = i(8), c = i(4), d = c.remRadian, f = c.isRadianAroundZero, p = i(5), g = p.applyTransform, v = s.retrieve, m = Math.PI, y = function (t, e) {
            this.opt = e, this.axisModel = t, s.defaults(e, {
                labelOffset: 0,
                nameDirection: 1,
                tickDirection: 1,
                labelDirection: 1,
                silent: !0
            }), this.group = new u.Group;
            var i = new u.Group({position: e.position.slice(), rotation: e.rotation});
            i.updateTransform(), this._transform = i.transform, this._dumbGroup = i
        };
        y.prototype = {
            constructor: y, hasBuilder: function (t) {
                return !!x[t]
            }, add: function (t) {
                x[t].call(this)
            }, getGroup: function () {
                return this.group
            }
        };
        var x = {
            axisLine: function () {
                var t = this.opt, e = this.axisModel;
                if (e.get("axisLine.show")) {
                    var i = this.axisModel.axis.getExtent(), n = this._transform, r = [i[0], 0], o = [i[1], 0];
                    n && (g(r, r, n), g(o, o, n)), this.group.add(new u.Line(u.subPixelOptimizeLine({
                        anid: "line",
                        shape: {x1: r[0], y1: r[1], x2: o[0], y2: o[1]},
                        style: s.extend({lineCap: "round"}, e.getModel("axisLine.lineStyle").getLineStyle()),
                        strokeContainThreshold: t.strokeContainThreshold || 5,
                        silent: !0,
                        z2: 1
                    })))
                }
            }, axisTick: function () {
                var t = this.axisModel;
                if (t.get("axisTick.show"))for (var e = t.axis, i = t.getModel("axisTick"), n = this.opt, r = i.getModel("lineStyle"), o = i.get("length"), a = b(i, n.labelInterval), l = e.getTicksCoords(i.get("alignWithLabel")), h = e.scale.getTicks(), c = [], d = [], f = this._transform, p = 0; p < l.length; p++)if (!_(e, p, a)) {
                    var v = l[p];
                    c[0] = v, c[1] = 0, d[0] = v, d[1] = n.tickDirection * o, f && (g(c, c, f), g(d, d, f)), this.group.add(new u.Line(u.subPixelOptimizeLine({
                        anid: "tick_" + h[p],
                        shape: {x1: c[0], y1: c[1], x2: d[0], y2: d[1]},
                        style: s.defaults(r.getLineStyle(), {stroke: t.get("axisLine.lineStyle.color")}),
                        z2: 2,
                        silent: !0
                    })))
                }
            }, axisLabel: function () {
                function t(t, e) {
                    var i = t && t.getBoundingRect().clone(), n = e && e.getBoundingRect().clone();
                    return i && n ? (i.applyTransform(t.getLocalTransform()), n.applyTransform(e.getLocalTransform()), i.intersect(n)) : void 0
                }

                var e = this.opt, i = this.axisModel, o = v(e.axisLabelShow, i.get("axisLabel.show"));
                if (o) {
                    var s = i.axis, l = i.getModel("axisLabel"), c = l.getModel("textStyle"), d = l.get("margin"), f = s.scale.getTicks(), p = i.getFormattedLabels(), g = v(e.labelRotation, l.get("rotate")) || 0;
                    g = g * m / 180;
                    for (var y = r(e, g, e.labelDirection), x = i.get("data"), b = [], w = a(i), S = i.get("triggerEvent"), M = 0; M < f.length; M++)if (!_(s, M, e.labelInterval)) {
                        var A = c;
                        x && x[M] && x[M].textStyle && (A = new h(x[M].textStyle, c, i.ecModel));
                        var I = A.getTextColor() || i.get("axisLine.lineStyle.color"), T = s.dataToCoord(f[M]), L = [T, e.labelOffset + e.labelDirection * d], C = s.scale.getLabel(f[M]), D = new u.Text({
                            anid: "label_" + f[M],
                            style: {
                                text: p[M],
                                textAlign: A.get("align", !0) || y.textAlign,
                                textVerticalAlign: A.get("baseline", !0) || y.verticalAlign,
                                textFont: A.getFont(),
                                fill: "function" == typeof I ? I(C) : I
                            },
                            position: L,
                            rotation: y.rotation,
                            silent: w,
                            z2: 10
                        });
                        S && (D.eventData = n(i), D.eventData.targetType = "axisLabel", D.eventData.value = C), this._dumbGroup.add(D), D.updateTransform(), b.push(D), this.group.add(D), D.decomposeTransform()
                    }
                    if ("category" !== s.type) {
                        if (i.getMin ? i.getMin() : i.get("min")) {
                            var P = b[0], k = b[1];
                            t(P, k) && (P.ignore = !0)
                        }
                        if (i.getMax ? i.getMax() : i.get("max")) {
                            var z = b[b.length - 1], O = b[b.length - 2];
                            t(O, z) && (z.ignore = !0)
                        }
                    }
                }
            }, axisName: function () {
                var t = this.opt, e = this.axisModel, i = v(t.axisName, e.get("name"));
                if (i) {
                    var h, c = e.get("nameLocation"), d = t.nameDirection, f = e.getModel("nameTextStyle"), p = e.get("nameGap") || 0, g = this.axisModel.axis.getExtent(), y = g[0] > g[1] ? -1 : 1, x = ["start" === c ? g[0] - y * p : "end" === c ? g[1] + y * p : (g[0] + g[1]) / 2, "middle" === c ? t.labelOffset + d * p : 0], _ = e.get("nameRotate");
                    null != _ && (_ = _ * m / 180);
                    var b;
                    "middle" === c ? h = r(t, null != _ ? _ : t.rotation, d) : (h = o(t, c, _ || 0, g), b = t.axisNameAvailableWidth, null != b && (b = Math.abs(b / Math.sin(h.rotation)), !isFinite(b) && (b = null)));
                    var w = f.getFont(), S = e.get("nameTruncate", !0) || {}, M = S.ellipsis, A = v(S.maxWidth, b), I = null != M && null != A ? l.truncateText(i, A, w, M, {
                        minChar: 2,
                        placeholder: S.placeholder
                    }) : i, T = e.get("tooltip", !0), L = e.mainType, C = {componentType: L, name: i, $vars: ["name"]};
                    C[L + "Index"] = e.componentIndex;
                    var D = new u.Text({
                        anid: "name",
                        __fullText: i,
                        __truncatedText: I,
                        style: {
                            text: I,
                            textFont: w,
                            fill: f.getTextColor() || e.get("axisLine.lineStyle.color"),
                            textAlign: h.textAlign,
                            textVerticalAlign: h.verticalAlign
                        },
                        position: x,
                        rotation: h.rotation,
                        silent: a(e),
                        z2: 1,
                        tooltip: T && T.show ? s.extend({
                            content: i, formatter: function () {
                                return i
                            }, formatterParams: C
                        }, T) : null
                    });
                    e.get("triggerEvent") && (D.eventData = n(e), D.eventData.targetType = "axisName", D.eventData.name = i), this._dumbGroup.add(D), D.updateTransform(), this.group.add(D), D.decomposeTransform()
                }
            }
        }, _ = y.ifIgnoreOnTick = function (t, e, i) {
            var n, r = t.scale;
            return "ordinal" === r.type && ("function" == typeof i ? (n = r.getTicks()[e], !i(n, r.getLabel(n))) : e % (i + 1))
        }, b = y.getInterval = function (t, e) {
            var i = t.get("interval");
            return null != i && "auto" != i || (i = e), i
        };
        t.exports = y
    }, function (t, e, i) {
        function n(t) {
            return a.isObject(t) && null != t.value ? t.value : t
        }

        function r() {
            return "category" === this.get("type") && a.map(this.get("data"), n)
        }

        function o() {
            return s.getFormattedLabels(this.axis, this.get("axisLabel.formatter"))
        }

        var a = i(1), s = i(22);
        t.exports = {getFormattedLabels: o, getCategories: r}
    }, function (t, e, i) {
        var n = i(80), r = i(1), o = i(11), a = i(13), s = ["value", "category", "time", "log"];
        t.exports = function (t, e, i, l) {
            r.each(s, function (o) {
                e.extend({
                    type: t + "Axis." + o, mergeDefaultAndTheme: function (e, n) {
                        var s = this.layoutMode, l = s ? a.getLayoutParams(e) : {}, u = n.getTheme();
                        r.merge(e, u.get(o + "Axis")), r.merge(e, this.getDefaultOption()), e.type = i(t, e), s && a.mergeLayoutParam(e, l, s)
                    }, defaultOption: r.mergeAll([{}, n[o + "Axis"], l], !0)
                })
            }), o.registerSubTypeDefaulter(t + "Axis", r.curry(i, t))
        }
    }, function (t, e, i) {
        "use strict";
        function n(t, e) {
            return e.type || (e.data ? "category" : "value")
        }

        var r = i(11), o = i(1), a = i(52), s = r.extend({
            type: "cartesian2dAxis", axis: null, init: function () {
                s.superApply(this, "init", arguments), this._resetRange()
            }, mergeOption: function () {
                s.superApply(this, "mergeOption", arguments), this._resetRange()
            }, restoreData: function () {
                s.superApply(this, "restoreData", arguments), this._resetRange()
            }, setRange: function (t, e) {
                this.option.rangeStart = t, this.option.rangeEnd = e
            }, getMin: function () {
                var t = this.option;
                return null != t.rangeStart ? t.rangeStart : t.min
            }, getMax: function () {
                var t = this.option;
                return null != t.rangeEnd ? t.rangeEnd : t.max
            }, getNeedCrossZero: function () {
                var t = this.option;
                return null != t.rangeStart || null != t.rangeEnd ? !1 : !t.scale
            }, _resetRange: function () {
                this.option.rangeStart = this.option.rangeEnd = null
            }
        });
        o.merge(s.prototype, i(51));
        var l = {gridIndex: 0, offset: 0};
        a("x", s, n, l), a("y", s, n, l), t.exports = s
    }, function (t, e, i) {
        function n(t, e, i) {
            return i.getComponent("grid", t.get("gridIndex")) === e
        }

        function r(t) {
            var e, i = t.model, n = i.getFormattedLabels(), r = 1, o = n.length;
            o > 40 && (r = Math.ceil(o / 40));
            for (var a = 0; o > a; a += r)if (!t.isLabelIgnored(a)) {
                var s = i.getTextRect(n[a]);
                e ? e.union(s) : e = s
            }
            return e
        }

        function o(t, e, i) {
            this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this._initCartesian(t, e, i), this._model = t
        }

        function a(t, e) {
            var i = t.getExtent(), n = i[0] + i[1];
            t.toGlobalCoord = "x" === t.dim ? function (t) {
                return t + e
            } : function (t) {
                return n - t + e
            }, t.toLocalCoord = "x" === t.dim ? function (t) {
                return t - e
            } : function (t) {
                return n - t + e
            }
        }

        var s = i(13), l = i(22), u = i(1), h = i(116), c = i(114), d = u.each, f = l.ifAxisCrossZero, p = l.niceScaleExtent;
        i(117);
        var g = o.prototype;
        g.type = "grid", g.getRect = function () {
            return this._rect
        }, g.update = function (t, e) {
            function i(t) {
                var e = n[t];
                for (var i in e) {
                    var r = e[i];
                    if (r && ("category" === r.type || !f(r)))return !0
                }
                return !1
            }

            var n = this._axesMap;
            this._updateScale(t, this._model), d(n.x, function (t) {
                p(t, t.model)
            }), d(n.y, function (t) {
                p(t, t.model)
            }), d(n.x, function (t) {
                i("y") && (t.onZero = !1)
            }), d(n.y, function (t) {
                i("x") && (t.onZero = !1)
            }), this.resize(this._model, e)
        }, g.resize = function (t, e) {
            function i() {
                d(o, function (t) {
                    var e = t.isHorizontal(), i = e ? [0, n.width] : [0, n.height], r = t.inverse ? 1 : 0;
                    t.setExtent(i[r], i[1 - r]), a(t, e ? n.x : n.y)
                })
            }

            var n = s.getLayoutRect(t.getBoxLayoutParams(), {width: e.getWidth(), height: e.getHeight()});
            this._rect = n;
            var o = this._axesList;
            i(), t.get("containLabel") && (d(o, function (t) {
                if (!t.model.get("axisLabel.inside")) {
                    var e = r(t);
                    if (e) {
                        var i = t.isHorizontal() ? "height" : "width", o = t.model.get("axisLabel.margin");
                        n[i] -= e[i] + o, "top" === t.position ? n.y += e.height + o : "left" === t.position && (n.x += e.width + o)
                    }
                }
            }), i())
        }, g.getAxis = function (t, e) {
            var i = this._axesMap[t];
            if (null != i) {
                if (null == e)for (var n in i)return i[n];
                return i[e]
            }
        }, g.getCartesian = function (t, e) {
            if (null != t && null != e) {
                var i = "x" + t + "y" + e;
                return this._coordsMap[i]
            }
            for (var n = 0, r = this._coordsList; n < r.length; n++)if (r[n].getAxis("x").index === t || r[n].getAxis("y").index === e)return r[n]
        }, g._initCartesian = function (t, e, i) {
            function r(i) {
                return function (r, u) {
                    if (n(r, t, e)) {
                        var h = r.get("position");
                        "x" === i ? "top" !== h && "bottom" !== h && (h = "bottom", o[h] && (h = "top" === h ? "bottom" : "top")) : "left" !== h && "right" !== h && (h = "left", o[h] && (h = "left" === h ? "right" : "left")), o[h] = !0;
                        var d = new c(i, l.createScaleByModel(r), [0, 0], r.get("type"), h), f = "category" === d.type;
                        d.onBand = f && r.get("boundaryGap"), d.inverse = r.get("inverse"), d.onZero = r.get("axisLine.onZero"), r.axis = d, d.model = r, d.grid = this, d.index = u, this._axesList.push(d), a[i][u] = d, s[i]++
                    }
                }
            }

            var o = {left: !1, right: !1, top: !1, bottom: !1}, a = {x: {}, y: {}}, s = {x: 0, y: 0};
            return e.eachComponent("xAxis", r("x"), this), e.eachComponent("yAxis", r("y"), this), s.x && s.y ? (this._axesMap = a, void d(a.x, function (t, e) {
                d(a.y, function (i, n) {
                    var r = "x" + e + "y" + n, o = new h(r);
                    o.grid = this, this._coordsMap[r] = o, this._coordsList.push(o), o.addAxis(t), o.addAxis(i)
                }, this)
            }, this)) : (this._axesMap = {}, void(this._axesList = []))
        }, g._updateScale = function (t, e) {
            function i(t, e, i) {
                d(i.coordDimToDataDim(e.dim), function (i) {
                    e.scale.unionExtent(t.getDataExtent(i, "ordinal" !== e.scale.type))
                })
            }

            u.each(this._axesList, function (t) {
                t.scale.setExtent(1 / 0, -(1 / 0))
            }), t.eachSeries(function (r) {
                if ("cartesian2d" === r.get("coordinateSystem")) {
                    var o = r.get("xAxisIndex"), a = r.get("yAxisIndex"), s = t.getComponent("xAxis", o), l = t.getComponent("yAxis", a);
                    if (!n(s, e, t) || !n(l, e, t))return;
                    var u = this.getCartesian(o, a), h = r.getData(), c = u.getAxis("x"), d = u.getAxis("y");
                    "list" === h.type && (i(h, c, r), i(h, d, r))
                }
            }, this)
        }, o.create = function (t, e) {
            var i = [];
            return t.eachComponent("grid", function (n, r) {
                var a = new o(n, t, e);
                a.name = "grid_" + r, a.resize(n, e), n.coordinateSystem = a, i.push(a)
            }), t.eachSeries(function (e) {
                if ("cartesian2d" === e.get("coordinateSystem")) {
                    var n = e.get("xAxisIndex"), r = e.get("yAxisIndex"), o = t.getComponent("xAxis", n), a = i[o.get("gridIndex")];
                    e.coordinateSystem = a.getCartesian(n, r)
                }
            }), i
        }, o.dimensions = h.prototype.dimensions, i(23).register("cartesian2d", o), t.exports = o
    }, function (t, e) {
        t.exports = function (t, e) {
            e.eachSeriesByType(t, function (t) {
                var e = t.getData(), i = t.coordinateSystem;
                if (i) {
                    var n = i.dimensions;
                    "singleAxis" === i.type ? e.each(n[0], function (t, n) {
                        e.setItemLayout(n, isNaN(t) ? [NaN, NaN] : i.dataToPoint(t))
                    }) : e.each(n, function (t, n, r) {
                        e.setItemLayout(r, isNaN(t) || isNaN(n) ? [NaN, NaN] : i.dataToPoint([t, n]))
                    }, !0)
                }
            })
        }
    }, function (t, e) {
        t.exports = {
            clearColorPalette: function () {
                this._colorIdx = 0, this._colorNameMap = {}
            }, getColorFromPalette: function (t, e) {
                e = e || this;
                var i = e._colorIdx || 0, n = e._colorNameMap || (e._colorNameMap = {});
                if (n[t])return n[t];
                var r = this.get("color", !0) || [];
                if (r.length) {
                    var o = r[i];
                    return t && (n[t] = o), e._colorIdx = (i + 1) % r.length, o
                }
            }
        }
    }, function (t, e, i) {
        var n = i(34), r = i(43), o = i(21), a = function () {
            this.group = new n, this.uid = r.getUID("viewComponent")
        };
        a.prototype = {
            constructor: a, init: function (t, e) {
            }, render: function (t, e, i, n) {
            }, dispose: function () {
            }
        };
        var s = a.prototype;
        s.updateView = s.updateLayout = s.updateVisual = function (t, e, i, n) {
        }, o.enableClassExtend(a), o.enableClassManagement(a, {registerWhenExtend: !0}), t.exports = a
    }, function (t, e, i) {
        "use strict";
        var n = i(62), r = i(20), o = i(86), a = i(163), s = i(1), l = function (t) {
            o.call(this, t), r.call(this, t), a.call(this, t), this.id = t.id || n()
        };
        l.prototype = {
            type: "element", name: "", __zr: null, ignore: !1, clipPath: null, drift: function (t, e) {
                switch (this.draggable) {
                    case"horizontal":
                        e = 0;
                        break;
                    case"vertical":
                        t = 0
                }
                var i = this.transform;
                i || (i = this.transform = [1, 0, 0, 1, 0, 0]), i[4] += t, i[5] += e, this.decomposeTransform(), this.dirty(!1)
            }, beforeUpdate: function () {
            }, afterUpdate: function () {
            }, update: function () {
                this.updateTransform()
            }, traverse: function (t, e) {
            }, attrKV: function (t, e) {
                if ("position" === t || "scale" === t || "origin" === t) {
                    if (e) {
                        var i = this[t];
                        i || (i = this[t] = []), i[0] = e[0], i[1] = e[1]
                    }
                } else this[t] = e
            }, hide: function () {
                this.ignore = !0, this.__zr && this.__zr.refresh()
            }, show: function () {
                this.ignore = !1, this.__zr && this.__zr.refresh()
            }, attr: function (t, e) {
                if ("string" == typeof t)this.attrKV(t, e); else if (s.isObject(t))for (var i in t)t.hasOwnProperty(i) && this.attrKV(i, t[i]);
                return this.dirty(!1), this
            }, setClipPath: function (t) {
                var e = this.__zr;
                e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1)
            }, removeClipPath: function () {
                var t = this.clipPath;
                t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1))
            }, addSelfToZr: function (t) {
                this.__zr = t;
                var e = this.animators;
                if (e)for (var i = 0; i < e.length; i++)t.animation.addAnimator(e[i]);
                this.clipPath && this.clipPath.addSelfToZr(t)
            }, removeSelfFromZr: function (t) {
                this.__zr = null;
                var e = this.animators;
                if (e)for (var i = 0; i < e.length; i++)t.animation.removeAnimator(e[i]);
                this.clipPath && this.clipPath.removeSelfFromZr(t)
            }
        }, s.mixin(l, a), s.mixin(l, o), s.mixin(l, r), t.exports = l
    }, function (t, e, i) {
        function n(t, e) {
            return t[e]
        }

        function r(t, e, i) {
            t[e] = i
        }

        function o(t, e, i) {
            return (e - t) * i + t
        }

        function a(t, e, i) {
            return i > .5 ? e : t
        }

        function s(t, e, i, n, r) {
            var a = t.length;
            if (1 == r)for (var s = 0; a > s; s++)n[s] = o(t[s], e[s], i); else for (var l = t[0].length, s = 0; a > s; s++)for (var u = 0; l > u; u++)n[s][u] = o(t[s][u], e[s][u], i)
        }

        function l(t, e, i) {
            var n = t.length, r = e.length;
            if (n !== r) {
                var o = n > r;
                if (o)t.length = r; else for (var a = n; r > a; a++)t.push(1 === i ? e[a] : x.call(e[a]))
            }
            for (var s = t[0] && t[0].length, a = 0; a < t.length; a++)if (1 === i)isNaN(t[a]) && (t[a] = e[a]); else for (var l = 0; s > l; l++)isNaN(t[a][l]) && (t[a][l] = e[a][l])
        }

        function u(t, e, i) {
            if (t === e)return !0;
            var n = t.length;
            if (n !== e.length)return !1;
            if (1 === i) {
                for (var r = 0; n > r; r++)if (t[r] !== e[r])return !1
            } else for (var o = t[0].length, r = 0; n > r; r++)for (var a = 0; o > a; a++)if (t[r][a] !== e[r][a])return !1;
            return !0
        }

        function h(t, e, i, n, r, o, a, s, l) {
            var u = t.length;
            if (1 == l)for (var h = 0; u > h; h++)s[h] = c(t[h], e[h], i[h], n[h], r, o, a); else for (var d = t[0].length, h = 0; u > h; h++)for (var f = 0; d > f; f++)s[h][f] = c(t[h][f], e[h][f], i[h][f], n[h][f], r, o, a)
        }

        function c(t, e, i, n, r, o, a) {
            var s = .5 * (i - t), l = .5 * (n - e);
            return (2 * (e - i) + s + l) * a + (-3 * (e - i) - 2 * s - l) * o + s * r + e
        }

        function d(t) {
            if (y(t)) {
                var e = t.length;
                if (y(t[0])) {
                    for (var i = [], n = 0; e > n; n++)i.push(x.call(t[n]));
                    return i
                }
                return x.call(t)
            }
            return t
        }

        function f(t) {
            return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")"
        }

        function p(t, e, i, n, r) {
            var d = t._getter, p = t._setter, m = "spline" === e, x = n.length;
            if (x) {
                var _, b = n[0].value, w = y(b), S = !1, M = !1, A = w && y(b[0]) ? 2 : 1;
                n.sort(function (t, e) {
                    return t.time - e.time
                }), _ = n[x - 1].time;
                for (var I = [], T = [], L = n[0].value, C = !0, D = 0; x > D; D++) {
                    I.push(n[D].time / _);
                    var P = n[D].value;
                    if (w && u(P, L, A) || !w && P === L || (C = !1), L = P, "string" == typeof P) {
                        var k = v.parse(P);
                        k ? (P = k, S = !0) : M = !0
                    }
                    T.push(P)
                }
                if (!C) {
                    for (var z = T[x - 1], D = 0; x - 1 > D; D++)w ? l(T[D], z, A) : !isNaN(T[D]) || isNaN(z) || M || S || (T[D] = z);
                    w && l(d(t._target, r), z, A);
                    var O, E, R, V, N, B, G = 0, F = 0;
                    if (S)var H = [0, 0, 0, 0];
                    var W = function (t, e) {
                        var i;
                        if (F > e) {
                            for (O = Math.min(G + 1, x - 1), i = O; i >= 0 && !(I[i] <= e); i--);
                            i = Math.min(i, x - 2)
                        } else {
                            for (i = G; x > i && !(I[i] > e); i++);
                            i = Math.min(i - 1, x - 2)
                        }
                        G = i, F = e;
                        var n = I[i + 1] - I[i];
                        if (0 !== n)if (E = (e - I[i]) / n, m)if (V = T[i], R = T[0 === i ? i : i - 1], N = T[i > x - 2 ? x - 1 : i + 1], B = T[i > x - 3 ? x - 1 : i + 2], w)h(R, V, N, B, E, E * E, E * E * E, d(t, r), A); else {
                            var l;
                            if (S)l = h(R, V, N, B, E, E * E, E * E * E, H, 1), l = f(H); else {
                                if (M)return a(V, N, E);
                                l = c(R, V, N, B, E, E * E, E * E * E)
                            }
                            p(t, r, l)
                        } else if (w)s(T[i], T[i + 1], E, d(t, r), A); else {
                            var l;
                            if (S)s(T[i], T[i + 1], E, H, 1), l = f(H); else {
                                if (M)return a(T[i], T[i + 1], E);
                                l = o(T[i], T[i + 1], E)
                            }
                            p(t, r, l)
                        }
                    }, Z = new g({
                        target: t._target,
                        life: _,
                        loop: t._loop,
                        delay: t._delay,
                        onframe: W,
                        ondestroy: i
                    });
                    return e && "spline" !== e && (Z.easing = e), Z
                }
            }
        }

        var g = i(141), v = i(18), m = i(1), y = m.isArrayLike, x = Array.prototype.slice, _ = function (t, e, i, o) {
            this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = i || n, this._setter = o || r, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
        };
        _.prototype = {
            when: function (t, e) {
                var i = this._tracks;
                for (var n in e) {
                    if (!i[n]) {
                        i[n] = [];
                        var r = this._getter(this._target, n);
                        if (null == r)continue;
                        0 !== t && i[n].push({time: 0, value: d(r)})
                    }
                    i[n].push({time: t, value: e[n]})
                }
                return this
            }, during: function (t) {
                return this._onframeList.push(t), this
            }, _doneCallback: function () {
                this._tracks = {}, this._clipList.length = 0;
                for (var t = this._doneList, e = t.length, i = 0; e > i; i++)t[i].call(this)
            }, start: function (t) {
                var e, i = this, n = 0, r = function () {
                    n--, n || i._doneCallback()
                };
                for (var o in this._tracks) {
                    var a = p(this, t, r, this._tracks[o], o);
                    a && (this._clipList.push(a), n++, this.animation && this.animation.addClip(a), e = a)
                }
                if (e) {
                    var s = e.onframe;
                    e.onframe = function (t, e) {
                        s(t, e);
                        for (var n = 0; n < i._onframeList.length; n++)i._onframeList[n](t, e)
                    }
                }
                return n || this._doneCallback(), this
            }, stop: function (t) {
                for (var e = this._clipList, i = this.animation, n = 0; n < e.length; n++) {
                    var r = e[n];
                    t && r.onframe(this._target, 1), i && i.removeClip(r)
                }
                e.length = 0
            }, delay: function (t) {
                return this._delay = t, this
            }, done: function (t) {
                return t && this._doneList.push(t), this
            }, getClips: function () {
                return this._clipList
            }
        }, t.exports = _
    }, function (t, e) {
        t.exports = "undefined" != typeof window && (window.requestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (t) {
                setTimeout(t, 16)
            }
    }, function (t, e) {
        var i = 2 * Math.PI;
        t.exports = {
            normalizeRadian: function (t) {
                return t %= i, 0 > t && (t += i), t
            }
        }
    }, function (t, e) {
        var i = 2311;
        t.exports = function () {
            return i++
        }
    }, function (t, e) {
        var i = function (t, e) {
            this.image = t, this.repeat = e, this.type = "pattern"
        };
        i.prototype.getCanvasPattern = function (t) {
            return this._canvasPattern || (this._canvasPattern = t.createPattern(this.image, this.repeat))
        }, t.exports = i
    }, function (t, e) {
        function i(t, e, i) {
            var n = e.x, r = e.x2, o = e.y, a = e.y2;
            e.global || (n = n * i.width + i.x, r = r * i.width + i.x, o = o * i.height + i.y, a = a * i.height + i.y);
            var s = t.createLinearGradient(n, o, r, a);
            return s
        }

        function n(t, e, i) {
            var n = i.width, r = i.height, o = Math.min(n, r), a = e.x, s = e.y, l = e.r;
            e.global || (a = a * n + i.x, s = s * r + i.y, l *= o);
            var u = t.createRadialGradient(a, s, 0, a, s, l);
            return u
        }

        var r = [["shadowBlur", 0], ["shadowOffsetX", 0], ["shadowOffsetY", 0], ["shadowColor", "#000"], ["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]], o = function (t) {
            this.extendFrom(t)
        };
        o.prototype = {
            constructor: o,
            fill: "#000000",
            stroke: null,
            opacity: 1,
            lineDash: null,
            lineDashOffset: 0,
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            lineWidth: 1,
            strokeNoScale: !1,
            text: null,
            textFill: "#000",
            textStroke: null,
            textPosition: "inside",
            textBaseline: null,
            textAlign: null,
            textVerticalAlign: null,
            textDistance: 5,
            textShadowBlur: 0,
            textShadowOffsetX: 0,
            textShadowOffsetY: 0,
            blend: null,
            bind: function (t, e, i) {
                for (var n = this, o = i && i.style, a = !o, s = 0; s < r.length; s++) {
                    var l = r[s], u = l[0];
                    (a || n[u] !== o[u]) && (t[u] = n[u] || l[1])
                }
                if ((a || n.fill !== o.fill) && (t.fillStyle = n.fill), (a || n.stroke !== o.stroke) && (t.strokeStyle = n.stroke), (a || n.opacity !== o.opacity) && (t.globalAlpha = null == n.opacity ? 1 : n.opacity), (a || n.blend !== o.blend) && (t.globalCompositeOperation = n.blend || "source-over"), this.hasStroke()) {
                    var h = n.lineWidth;
                    t.lineWidth = h / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)
                }
            },
            hasFill: function () {
                var t = this.fill;
                return null != t && "none" !== t
            },
            hasStroke: function () {
                var t = this.stroke;
                return null != t && "none" !== t && this.lineWidth > 0
            },
            extendFrom: function (t, e) {
                if (t) {
                    var i = this;
                    for (var n in t)!t.hasOwnProperty(n) || !e && i.hasOwnProperty(n) || (i[n] = t[n])
                }
            },
            set: function (t, e) {
                "string" == typeof t ? this[t] = e : this.extendFrom(t, !0)
            },
            clone: function () {
                var t = new this.constructor;
                return t.extendFrom(this, !0), t
            },
            getGradient: function (t, e, r) {
                for (var o = "radial" === e.type ? n : i, a = o(t, e, r), s = e.colorStops, l = 0; l < s.length; l++)a.addColorStop(s[l].offset, s[l].color);
                return a
            }
        };
        for (var a = o.prototype, s = 0; s < r.length; s++) {
            var l = r[s];
            l[0] in a || (a[l[0]] = l[1])
        }
        o.getGradient = a.getGradient, t.exports = o
    }, function (t, e, i) {
        var n = i(153), r = i(152);
        t.exports = {
            buildPath: function (t, e, i) {
                var o = e.points, a = e.smooth;
                if (o && o.length >= 2) {
                    if (a && "spline" !== a) {
                        var s = r(o, a, i, e.smoothConstraint);
                        t.moveTo(o[0][0], o[0][1]);
                        for (var l = o.length, u = 0; (i ? l : l - 1) > u; u++) {
                            var h = s[2 * u], c = s[2 * u + 1], d = o[(u + 1) % l];
                            t.bezierCurveTo(h[0], h[1], c[0], c[1], d[0], d[1])
                        }
                    } else {
                        "spline" === a && (o = n(o, i)), t.moveTo(o[0][0], o[0][1]);
                        for (var u = 1, f = o.length; f > u; u++)t.lineTo(o[u][0], o[u][1])
                    }
                    i && t.closePath()
                }
            }
        }
    }, function (t, e, i) {
        var n = i(1);
        t.exports = {
            updateSelectedMap: function (t) {
                this._selectTargetMap = n.reduce(t || [], function (t, e) {
                    return t[e.name] = e, t
                }, {})
            }, select: function (t) {
                var e = this._selectTargetMap, i = e[t], r = this.get("selectedMode");
                "single" === r && n.each(e, function (t) {
                    t.selected = !1
                }), i && (i.selected = !0)
            }, unSelect: function (t) {
                var e = this._selectTargetMap[t];
                e && (e.selected = !1)
            }, toggleSelected: function (t) {
                var e = this._selectTargetMap[t];
                return null != e ? (this[e.selected ? "unSelect" : "select"](t), e.selected) : void 0
            }, isSelected: function (t) {
                var e = this._selectTargetMap[t];
                return e && e.selected
            }
        }
    }, function (t, e, i) {
        function n(t) {
            r.defaultEmphasis(t.label, r.LABEL_OPTIONS)
        }

        var r = i(10), o = i(1), a = i(12), s = i(9), l = s.addCommas, u = s.encodeHTML, h = i(2).extendComponentModel({
            type: "marker",
            dependencies: ["series", "grid", "polar", "geo"],
            init: function (t, e, i, n) {
                this.mergeDefaultAndTheme(t, i), this.mergeOption(t, i, n.createdBySelf, !0)
            },
            ifEnableAnimation: function () {
                if (a.node)return !1;
                var t = this.__hostSeries;
                return this.getShallow("animation") && t && t.ifEnableAnimation()
            },
            mergeOption: function (t, e, i, r) {
                var a = this.constructor, s = this.mainType + "Model";
                i || e.eachSeries(function (t) {
                    var i = t.get(this.mainType), l = t[s];
                    if (!i || !i.data)return void(t[s] = null);
                    if (l)l.mergeOption(i, e, !0); else {
                        r && n(i), o.each(i.data, function (t) {
                            t instanceof Array ? (n(t[0]), n(t[1])) : n(t)
                        });
                        var u = {mainType: this.mainType, seriesIndex: t.seriesIndex, name: t.name, createdBySelf: !0};
                        l = new a(i, this, e, u), l.__hostSeries = t
                    }
                    t[s] = l
                }, this)
            },
            formatTooltip: function (t) {
                var e = this.getData(), i = this.getRawValue(t), n = o.isArray(i) ? o.map(i, l).join(", ") : l(i), r = e.getName(t), a = this.name;
                return (null != i || r) && (a += "<br />"), r && (a += u(r), null != i && (a += " : ")), null != i && (a += n), a
            },
            getData: function () {
                return this._data
            },
            setData: function (t) {
                this._data = t
            }
        });
        o.mixin(h, r.dataFormatMixin), t.exports = h
    }, function (t, e, i) {
        t.exports = i(2).extendComponentView({
            type: "marker", init: function () {
                this.markerGroupMap = {}
            }, render: function (t, e, i) {
                var n = this.markerGroupMap;
                for (var r in n)n[r].__keep = !1;
                var o = this.type + "Model";
                e.eachSeries(function (t) {
                    var n = t[o];
                    n && this.renderSeries(t, n, e, i)
                }, this);
                for (var r in n)n[r].__keep || this.group.remove(n[r].group)
            }, renderSeries: function () {
            }
        })
    }, function (t, e, i) {
        function n(t) {
            return !(isNaN(parseFloat(t.x)) && isNaN(parseFloat(t.y)))
        }

        function r(t) {
            return !isNaN(parseFloat(t.x)) && !isNaN(parseFloat(t.y))
        }

        function o(t, e, i) {
            var n = -1;
            do n = Math.max(l.getPrecision(t.get(e, i)), n), t = t.stackedOn; while (t);
            return n
        }

        function a(t, e, i, n, r, a) {
            var s = [], l = v(e, n, t), u = e.indexOfNearest(n, l, !0);
            s[r] = e.get(i, u, !0), s[a] = e.get(n, u, !0);
            var h = o(e, n, u);
            return h >= 0 && (s[a] = +s[a].toFixed(h)), s
        }

        var s = i(1), l = i(4), u = s.indexOf, h = s.curry, c = {
            min: h(a, "min"),
            max: h(a, "max"),
            average: h(a, "average")
        }, d = function (t, e) {
            var i = t.getData(), n = t.coordinateSystem;
            if (e && !r(e) && !s.isArray(e.coord) && n) {
                var o = n.dimensions, a = f(e, i, n, t);
                if (e = s.clone(e), e.type && c[e.type] && a.baseAxis && a.valueAxis) {
                    var l = u(o, a.baseAxis.dim), h = u(o, a.valueAxis.dim);
                    e.coord = c[e.type](i, a.baseDataDim, a.valueDataDim, l, h), e.value = e.coord[h]
                } else {
                    for (var d = [null != e.xAxis ? e.xAxis : e.radiusAxis, null != e.yAxis ? e.yAxis : e.angleAxis], p = 0; 2 > p; p++)if (c[d[p]]) {
                        var g = t.coordDimToDataDim(o[p])[0];
                        d[p] = v(i, g, d[p])
                    }
                    e.coord = d
                }
            }
            return e
        }, f = function (t, e, i, n) {
            var r = {};
            return null != t.valueIndex || null != t.valueDim ? (r.valueDataDim = null != t.valueIndex ? e.getDimension(t.valueIndex) : t.valueDim, r.valueAxis = i.getAxis(n.dataDimToCoordDim(r.valueDataDim)), r.baseAxis = i.getOtherAxis(r.valueAxis), r.baseDataDim = n.coordDimToDataDim(r.baseAxis.dim)[0]) : (r.baseAxis = n.getBaseAxis(), r.valueAxis = i.getOtherAxis(r.baseAxis), r.baseDataDim = n.coordDimToDataDim(r.baseAxis.dim)[0], r.valueDataDim = n.coordDimToDataDim(r.valueAxis.dim)[0]), r
        }, p = function (t, e) {
            return t && t.containData && e.coord && !n(e) ? t.containData(e.coord) : !0
        }, g = function (t, e, i, n) {
            return 2 > n ? t.coord && t.coord[n] : t.value
        }, v = function (t, e, i) {
            if ("average" === i) {
                var n = 0, r = 0;
                return t.each(e, function (t, e) {
                    isNaN(t) || (n += t, r++)
                }, !0), n / r
            }
            return t.getDataExtent(e, !0)["max" === i ? 1 : 0]
        };
        t.exports = {dataTransform: d, dataFilter: p, dimValueGetter: g, getAxisInfo: f, numCalculate: v}
    }, function (t, e) {
        t.exports = function (t, e) {
            var i = e.findComponents({mainType: "legend"});
            i && i.length && e.eachSeriesByType(t, function (t) {
                var e = t.getData();
                e.filterSelf(function (t) {
                    for (var n = e.getName(t), r = 0; r < i.length; r++)if (!i[r].isSelected(n))return !1;
                    return !0
                }, this)
            }, this)
        }
    }, function (t, e, i) {
        function n(t) {
            var e = t.pieceList;
            t.hasSpecialVisual = !1, p.each(e, function (e, i) {
                e.originIndex = i, null != e.visual && (t.hasSpecialVisual = !0)
            })
        }

        function r(t) {
            var e = t.categories, i = t.visual, n = t.categoryMap = {};
            if (m(e, function (t, e) {
                    n[t] = e
                }), !p.isArray(i)) {
                var r = [];
                p.isObject(i) ? m(i, function (t, e) {
                    var i = n[e];
                    r[null != i ? i : x] = t
                }) : r[x] = i, i = t.visual = r
            }
            for (var o = e.length - 1; o >= 0; o--)null == i[o] && (delete n[e[o]], e.pop())
        }

        function o(t, e) {
            var i = t.visual, n = [];
            p.isObject(i) ? m(i, function (t) {
                n.push(t)
            }) : null != i && n.push(i);
            var r = {color: 1, symbol: 1};
            e || 1 !== n.length || t.type in r || (n[1] = n[0]), t.visual = n
        }

        function a(t) {
            return {
                applyVisual: function (e, i, n) {
                    e = this.mapValueToVisual(e), n("color", t(i("color"), e))
                }, _doMap: c([0, 1])
            }
        }

        function s(t, e) {
            var i = this.option.visual;
            return i[Math.round(v(e, [0, 1], [0, i.length - 1], !0))] || {}
        }

        function l(t) {
            return function (e, i, n) {
                n(t, this.mapValueToVisual(e))
            }
        }

        function u(t) {
            var e = this.option.visual;
            return e[this.option.loop && t !== x ? t % e.length : t]
        }

        function h() {
            return this.option.visual[0]
        }

        function c(t) {
            return {
                linear: function (e) {
                    return v(e, t, this.option.visual, !0)
                }, category: u, piecewise: function (e, i) {
                    var n = d.call(this, i);
                    return null == n && (n = v(e, t, this.option.visual, !0)), n
                }, fixed: h
            }
        }

        function d(t) {
            var e = this.option, i = e.pieceList;
            if (e.hasSpecialVisual) {
                var n = _.findPieceIndex(t, i), r = i[n];
                if (r && r.visual)return r.visual[this.type]
            }
        }

        function f(t, e, i) {
            return t ? i >= e : i > e
        }

        var p = i(1), g = i(18), v = i(4).linearMap, m = p.each, y = p.isObject, x = -1, _ = function (t) {
            var e = t.mappingMethod, i = t.type, a = this.option = p.clone(t);
            this.type = i, this.mappingMethod = e, this._normalizeData = w[e];
            var s = b[i];
            this.applyVisual = s.applyVisual, this.getColorMapper = s.getColorMapper, this._doMap = s._doMap[e], "piecewise" === e ? (o(a), n(a)) : "category" === e ? a.categories ? r(a) : o(a, !0) : (p.assert("linear" !== e || a.dataExtent), o(a))
        };
        _.prototype = {
            constructor: _, mapValueToVisual: function (t) {
                var e = this._normalizeData(t);
                return this._doMap(e, t)
            }, getNormalizer: function () {
                return p.bind(this._normalizeData, this)
            }
        };
        var b = _.visualHandlers = {
            color: {
                applyVisual: l("color"), getColorMapper: function () {
                    var t = this.option, e = p.map(t.visual, g.parse);
                    return p.bind("category" === t.mappingMethod ? function (t, e) {
                        return !e && (t = this._normalizeData(t)), u(this, t)
                    } : function (t, i, n) {
                        var r = !!n;
                        return !i && (t = this._normalizeData(t)), n = g.fastMapToColor(t, e, n), r ? n : p.stringify(n, "rgba")
                    }, this)
                }, _doMap: {
                    linear: function (t) {
                        return g.mapToColor(t, this.option.visual)
                    }, category: u, piecewise: function (t, e) {
                        var i = d.call(this, e);
                        return null == i && (i = g.mapToColor(t, this.option.visual)), i
                    }, fixed: h
                }
            }, colorHue: a(function (t, e) {
                return g.modifyHSL(t, e)
            }), colorSaturation: a(function (t, e) {
                return g.modifyHSL(t, null, e)
            }), colorLightness: a(function (t, e) {
                return g.modifyHSL(t, null, null, e)
            }), colorAlpha: a(function (t, e) {
                return g.modifyAlpha(t, e)
            }), opacity: {applyVisual: l("opacity"), _doMap: c([0, 1])}, symbol: {
                applyVisual: function (t, e, i) {
                    var n = this.mapValueToVisual(t);
                    if (p.isString(n))i("symbol", n); else if (y(n))for (var r in n)n.hasOwnProperty(r) && i(r, n[r])
                }, _doMap: {
                    linear: s, category: u, piecewise: function (t, e) {
                        var i = d.call(this, e);
                        return null == i && (i = s.call(this, t)), i
                    }, fixed: h
                }
            }, symbolSize: {applyVisual: l("symbolSize"), _doMap: c([0, 1])}
        }, w = {
            linear: function (t) {
                return v(t, this.option.dataExtent, [0, 1], !0)
            }, piecewise: function (t) {
                var e = this.option.pieceList, i = _.findPieceIndex(t, e, !0);
                return null != i ? v(i, [0, e.length - 1], [0, 1], !0) : void 0
            }, category: function (t) {
                var e = this.option.categories ? this.option.categoryMap[t] : t;
                return null == e ? x : e
            }, fixed: p.noop
        };
        _.addVisualHandler = function (t, e) {
            b[t] = e
        }, _.isValidType = function (t) {
            return b.hasOwnProperty(t)
        }, _.eachVisual = function (t, e, i) {
            p.isObject(t) ? p.each(t, e, i) : e.call(i, t)
        }, _.mapVisual = function (t, e, i) {
            var n, r = p.isArray(t) ? [] : p.isObject(t) ? {} : (n = !0, null);
            return _.eachVisual(t, function (t, o) {
                var a = e.call(i, t, o);
                n ? r = a : r[o] = a
            }), r
        }, _.retrieveVisuals = function (t) {
            var e, i = {};
            return t && m(b, function (n, r) {
                t.hasOwnProperty(r) && (i[r] = t[r], e = !0)
            }), e ? i : null
        }, _.prepareVisualTypes = function (t) {
            if (y(t)) {
                var e = [];
                m(t, function (t, i) {
                    e.push(i)
                }), t = e
            } else {
                if (!p.isArray(t))return [];
                t = t.slice()
            }
            return t.sort(function (t, e) {
                return "color" === e && "color" !== t && 0 === t.indexOf("color") ? 1 : -1
            }), t
        }, _.dependsOn = function (t, e) {
            return "color" === e ? !(!t || 0 !== t.indexOf(e)) : t === e
        }, _.findPieceIndex = function (t, e, i) {
            function n(e, i) {
                var n = Math.abs(e - t);
                o > n && (o = n, r = i)
            }

            for (var r, o = 1 / 0, a = 0, s = e.length; s > a; a++) {
                var l = e[a].value;
                if (null != l) {
                    if (l === t)return a;
                    i && n(l, a)
                }
            }
            for (var a = 0, s = e.length; s > a; a++) {
                var u = e[a], h = u.interval, c = u.close;
                if (h) {
                    if (h[0] === -(1 / 0)) {
                        if (f(c[1], t, h[1]))return a
                    } else if (h[1] === 1 / 0) {
                        if (f(c[0], h[0], t))return a;
                    } else if (f(c[0], h[0], t) && f(c[1], t, h[1]))return a;
                    i && n(h[0], a), i && n(h[1], a)
                }
            }
            return i ? t === 1 / 0 ? e.length - 1 : t === -(1 / 0) ? 0 : r : void 0
        }, t.exports = _
    }, function (t, e) {
        t.exports = function (t, e) {
            var i = {};
            e.eachRawSeriesByType(t, function (t) {
                var n = t.getRawData(), r = {};
                if (!e.isSeriesFiltered(t)) {
                    var o = t.getData();
                    o.each(function (t) {
                        var e = o.getRawIndex(t);
                        r[e] = t
                    }), n.each(function (e) {
                        var a = n.getItemModel(e), s = r[e], l = o.getItemVisual(s, "color", !0);
                        if (l)n.setItemVisual(e, "color", l); else {
                            var u = a.get("itemStyle.normal.color") || t.getColorFromPalette(n.getName(e), i);
                            n.setItemVisual(e, "color", u), o.setItemVisual(s, "color", u)
                        }
                    })
                }
            })
        }
    }, function (t, e, i) {
        var n = i(5), r = i(17), o = {}, a = Math.min, s = Math.max, l = Math.sin, u = Math.cos, h = n.create(), c = n.create(), d = n.create(), f = 2 * Math.PI;
        o.fromPoints = function (t, e, i) {
            if (0 !== t.length) {
                var n, r = t[0], o = r[0], l = r[0], u = r[1], h = r[1];
                for (n = 1; n < t.length; n++)r = t[n], o = a(o, r[0]), l = s(l, r[0]), u = a(u, r[1]), h = s(h, r[1]);
                e[0] = o, e[1] = u, i[0] = l, i[1] = h
            }
        }, o.fromLine = function (t, e, i, n, r, o) {
            r[0] = a(t, i), r[1] = a(e, n), o[0] = s(t, i), o[1] = s(e, n)
        };
        var p = [], g = [];
        o.fromCubic = function (t, e, i, n, o, l, u, h, c, d) {
            var f, v = r.cubicExtrema, m = r.cubicAt, y = v(t, i, o, u, p);
            for (c[0] = 1 / 0, c[1] = 1 / 0, d[0] = -(1 / 0), d[1] = -(1 / 0), f = 0; y > f; f++) {
                var x = m(t, i, o, u, p[f]);
                c[0] = a(x, c[0]), d[0] = s(x, d[0])
            }
            for (y = v(e, n, l, h, g), f = 0; y > f; f++) {
                var _ = m(e, n, l, h, g[f]);
                c[1] = a(_, c[1]), d[1] = s(_, d[1])
            }
            c[0] = a(t, c[0]), d[0] = s(t, d[0]), c[0] = a(u, c[0]), d[0] = s(u, d[0]), c[1] = a(e, c[1]), d[1] = s(e, d[1]), c[1] = a(h, c[1]), d[1] = s(h, d[1])
        }, o.fromQuadratic = function (t, e, i, n, o, l, u, h) {
            var c = r.quadraticExtremum, d = r.quadraticAt, f = s(a(c(t, i, o), 1), 0), p = s(a(c(e, n, l), 1), 0), g = d(t, i, o, f), v = d(e, n, l, p);
            u[0] = a(t, o, g), u[1] = a(e, l, v), h[0] = s(t, o, g), h[1] = s(e, l, v)
        }, o.fromArc = function (t, e, i, r, o, a, s, p, g) {
            var v = n.min, m = n.max, y = Math.abs(o - a);
            if (1e-4 > y % f && y > 1e-4)return p[0] = t - i, p[1] = e - r, g[0] = t + i, void(g[1] = e + r);
            if (h[0] = u(o) * i + t, h[1] = l(o) * r + e, c[0] = u(a) * i + t, c[1] = l(a) * r + e, v(p, h, c), m(g, h, c), o %= f, 0 > o && (o += f), a %= f, 0 > a && (a += f), o > a && !s ? a += f : a > o && s && (o += f), s) {
                var x = a;
                a = o, o = x
            }
            for (var _ = 0; a > _; _ += Math.PI / 2)_ > o && (d[0] = u(_) * i + t, d[1] = l(_) * r + e, v(p, d, p), m(g, d, g))
        }, t.exports = o
    }, function (t, e, i) {
        var n = i(37), r = i(1), o = i(16), a = function (t) {
            n.call(this, t)
        };
        a.prototype = {
            constructor: a, type: "text", brush: function (t, e) {
                var i = this.style, n = i.x || 0, r = i.y || 0, a = i.text;
                if (null != a && (a += ""), i.bind(t, this, e), a) {
                    this.setTransform(t);
                    var s, l = i.textAlign, u = i.textFont || i.font;
                    if (i.textVerticalAlign) {
                        var h = o.getBoundingRect(a, u, i.textAlign, "top");
                        switch (s = "middle", i.textVerticalAlign) {
                            case"middle":
                                r -= h.height / 2 - h.lineHeight / 2;
                                break;
                            case"bottom":
                                r -= h.height - h.lineHeight / 2;
                                break;
                            default:
                                r += h.lineHeight / 2
                        }
                    } else s = i.textBaseline;
                    t.font = u, t.textAlign = l || "left", t.textAlign !== l && (t.textAlign = "left"), t.textBaseline = s || "alphabetic", t.textBaseline !== s && (t.textBaseline = "alphabetic");
                    for (var c = o.measureText("国", t.font).width, d = a.split("\n"), f = 0; f < d.length; f++)i.hasFill() && t.fillText(d[f], n, r), i.hasStroke() && t.strokeText(d[f], n, r), r += c;
                    this.restoreTransform(t)
                }
            }, getBoundingRect: function () {
                if (!this._rect) {
                    var t = this.style, e = t.textVerticalAlign, i = o.getBoundingRect(t.text + "", t.textFont || t.font, t.textAlign, e ? "top" : t.textBaseline);
                    switch (e) {
                        case"middle":
                            i.y -= i.height / 2;
                            break;
                        case"bottom":
                            i.y -= i.height
                    }
                    i.x += t.x || 0, i.y += t.y || 0, this._rect = i
                }
                return this._rect
            }
        }, r.inherits(a, n), t.exports = a
    }, function (t, e, i) {
        function n(t, e) {
            return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
        }

        var r = i(16), o = i(7), a = new o, s = function () {
        };
        s.prototype = {
            constructor: s, drawRectText: function (t, e, i) {
                var o = this.style, s = o.text;
                if (null != s && (s += ""), s) {
                    t.save();
                    var l, u, h = o.textPosition, c = o.textDistance, d = o.textAlign, f = o.textFont || o.font, p = o.textBaseline, g = o.textVerticalAlign;
                    i = i || r.getBoundingRect(s, f, d, p);
                    var v = this.transform;
                    if (v && (a.copy(e), a.applyTransform(v), e = a), h instanceof Array) {
                        if (l = e.x + n(h[0], e.width), u = e.y + n(h[1], e.height), d = d || "left", p = p || "top", g) {
                            switch (g) {
                                case"middle":
                                    u -= i.height / 2 - i.lineHeight / 2;
                                    break;
                                case"bottom":
                                    u -= i.height - i.lineHeight / 2;
                                    break;
                                default:
                                    u += i.lineHeight / 2
                            }
                            p = "middle"
                        }
                    } else {
                        var m = r.adjustTextPositionOnRect(h, e, i, c);
                        l = m.x, u = m.y, d = d || m.textAlign, p = p || m.textBaseline
                    }
                    t.textAlign = d || "left", t.textBaseline = p || "alphabetic";
                    var y = o.textFill, x = o.textStroke;
                    y && (t.fillStyle = y), x && (t.strokeStyle = x), t.font = f, t.shadowBlur = o.textShadowBlur, t.shadowColor = o.textShadowColor || "transparent", t.shadowOffsetX = o.textShadowOffsetX, t.shadowOffsetY = o.textShadowOffsetY;
                    for (var _ = s.split("\n"), b = 0; b < _.length; b++)y && t.fillText(_[b], l, u), x && t.strokeText(_[b], l, u), u += i.lineHeight;
                    t.restore()
                }
            }
        }, t.exports = s
    }, function (t, e, i) {
        function n(t) {
            delete d[t]
        }

        /*!
         * ZRender, a high performance 2d drawing library.
         *
         * Copyright (c) 2013, Baidu Inc.
         * All rights reserved.
         *
         * LICENSE
         * https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
         */
        var r = i(62), o = i(12), a = i(136), s = i(139), l = i(140), u = i(148), h = !o.canvasSupported, c = {canvas: i(138)}, d = {}, f = {};
        f.version = "3.1.2", f.init = function (t, e) {
            var i = new p(r(), t, e);
            return d[i.id] = i, i
        }, f.dispose = function (t) {
            if (t)t.dispose(); else {
                for (var e in d)d[e].dispose();
                d = {}
            }
            return f
        }, f.getInstance = function (t) {
            return d[t]
        }, f.registerPainter = function (t, e) {
            c[t] = e
        };
        var p = function (t, e, i) {
            i = i || {}, this.dom = e, this.id = t;
            var n = this, r = new s, d = i.renderer;
            if (h) {
                if (!c.vml)throw new Error("You need to require 'zrender/vml/vml' to support IE8");
                d = "vml"
            } else d && c[d] || (d = "canvas");
            var f = new c[d](e, r, i);
            this.storage = r, this.painter = f;
            var p = o.node ? null : new u(f.getViewportRoot());
            this.handler = new a(r, f, p), this.animation = new l({
                stage: {
                    update: function () {
                        n._needsRefresh && n.refreshImmediately(), n._needsRefreshHover && n.refreshHoverImmediately()
                    }
                }
            }), this.animation.start(), this._needsRefresh;
            var g = r.delFromMap, v = r.addToMap;
            r.delFromMap = function (t) {
                var e = r.get(t);
                g.call(r, t), e && e.removeSelfFromZr(n)
            }, r.addToMap = function (t) {
                v.call(r, t), t.addSelfToZr(n)
            }
        };
        p.prototype = {
            constructor: p, getId: function () {
                return this.id
            }, add: function (t) {
                this.storage.addRoot(t), this._needsRefresh = !0
            }, remove: function (t) {
                this.storage.delRoot(t), this._needsRefresh = !0
            }, configLayer: function (t, e) {
                this.painter.configLayer(t, e), this._needsRefresh = !0
            }, refreshImmediately: function () {
                this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1
            }, refresh: function () {
                this._needsRefresh = !0
            }, addHover: function (t, e) {
                this.painter.addHover && (this.painter.addHover(t, e), this.refreshHover())
            }, removeHover: function (t) {
                this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover())
            }, clearHover: function () {
                this.painter.clearHover && (this.painter.clearHover(), this.refreshHover())
            }, refreshHover: function () {
                this._needsRefreshHover = !0
            }, refreshHoverImmediately: function () {
                this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover()
            }, resize: function () {
                this.painter.resize(), this.handler.resize()
            }, clearAnimation: function () {
                this.animation.clear()
            }, getWidth: function () {
                return this.painter.getWidth()
            }, getHeight: function () {
                return this.painter.getHeight()
            }, pathToImage: function (t, e, i) {
                var n = r();
                return this.painter.pathToImage(n, t, e, i)
            }, setCursorStyle: function (t) {
                this.handler.setCursorStyle(t)
            }, on: function (t, e, i) {
                this.handler.on(t, e, i)
            }, off: function (t, e) {
                this.handler.off(t, e)
            }, trigger: function (t, e) {
                this.handler.trigger(t, e)
            }, clear: function () {
                this.storage.delRoot(), this.painter.clear()
            }, dispose: function () {
                this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, n(this.id)
            }
        }, t.exports = f
    }, function (t, e, i) {
        var n = i(2), r = i(1);
        t.exports = function (t, e) {
            r.each(e, function (e) {
                e.update = "updateView", n.registerAction(e, function (i, n) {
                    var r = {};
                    return n.eachComponent({mainType: "series", subType: t, query: i}, function (t) {
                        t[e.method] && t[e.method](i.name);
                        var n = t.getData();
                        n.each(function (e) {
                            var i = n.getName(e);
                            r[i] = t.isSelected(i) || !1
                        })
                    }), {name: i.name, selected: r}
                })
            })
        }
    }, function (t, e, i) {
        function n(t) {
            if (!t.target || !t.target.draggable) {
                var e = t.offsetX, i = t.offsetY, n = this.rectProvider && this.rectProvider();
                n && n.contain(e, i) && (this._x = e, this._y = i, this._dragging = !0)
            }
        }

        function r(t) {
            if (this._dragging && (d.stop(t.event), "pinch" !== t.gestureEvent)) {
                if (f.isTaken(this._zr, "globalPan"))return;
                var e = t.offsetX, i = t.offsetY, n = e - this._x, r = i - this._y;
                this._x = e, this._y = i;
                var o = this.target;
                if (o) {
                    var a = o.position;
                    a[0] += n, a[1] += r, o.dirty()
                }
                d.stop(t.event), this.trigger("pan", n, r)
            }
        }

        function o(t) {
            this._dragging = !1
        }

        function a(t) {
            var e = t.wheelDelta > 0 ? 1.1 : 1 / 1.1;
            l.call(this, t, e, t.offsetX, t.offsetY)
        }

        function s(t) {
            if (!f.isTaken(this._zr, "globalPan")) {
                var e = t.pinchScale > 1 ? 1.1 : 1 / 1.1;
                l.call(this, t, e, t.pinchX, t.pinchY)
            }
        }

        function l(t, e, i, n) {
            var r = this.rectProvider && this.rectProvider();
            if (r && r.contain(i, n)) {
                d.stop(t.event);
                var o = this.target, a = this.zoomLimit;
                if (o) {
                    var s = o.position, l = o.scale, u = this.zoom = this.zoom || 1;
                    if (u *= e, a) {
                        var h = a.min || 0, c = a.max || 1 / 0;
                        u = Math.max(Math.min(c, u), h)
                    }
                    var f = u / this.zoom;
                    this.zoom = u, s[0] -= (i - s[0]) * (f - 1), s[1] -= (n - s[1]) * (f - 1), l[0] *= f, l[1] *= f, o.dirty()
                }
                this.trigger("zoom", e, i, n)
            }
        }

        function u(t, e, i) {
            this.target = e, this.rectProvider = i, this.zoomLimit, this.zoom, this._zr = t;
            var l = c.bind, u = l(n, this), d = l(r, this), f = l(o, this), p = l(a, this), g = l(s, this);
            h.call(this), this.enable = function (e) {
                this.disable(), null == e && (e = !0), e !== !0 && "move" !== e && "pan" !== e || (t.on("mousedown", u), t.on("mousemove", d), t.on("mouseup", f)), e !== !0 && "scale" !== e && "zoom" !== e || (t.on("mousewheel", p), t.on("pinch", g))
            }, this.disable = function () {
                t.off("mousedown", u), t.off("mousemove", d), t.off("mouseup", f), t.off("mousewheel", p), t.off("pinch", g)
            }, this.dispose = this.disable, this.isDragging = function () {
                return this._dragging
            }, this.isPinching = function () {
                return this._pinching
            }
        }

        var h = i(20), c = i(1), d = i(24), f = i(112);
        c.mixin(u, h), t.exports = u
    }, function (t, e) {
        t.exports = function (t, e, i, n, r) {
            function o(t, e, i) {
                var n = e.length ? e.slice() : [e, e];
                return e[0] > e[1] && n.reverse(), 0 > t && n[0] + t < i[0] && (t = i[0] - n[0]), t > 0 && n[1] + t > i[1] && (t = i[1] - n[1]), t
            }

            return t ? ("rigid" === n ? (t = o(t, e, i), e[0] += t, e[1] += t) : (t = o(t, e[r], i), e[r] += t, "push" === n && e[0] > e[1] && (e[1 - r] = e[r])), e) : e
        }
    }, function (t, e, i) {
        var n = i(1), r = {
            show: !0,
            zlevel: 0,
            z: 0,
            inverse: !1,
            name: "",
            nameLocation: "end",
            nameRotate: null,
            nameTruncate: {maxWidth: null, ellipsis: "...", placeholder: "."},
            nameTextStyle: {},
            nameGap: 15,
            silent: !1,
            triggerEvent: !1,
            tooltip: {show: !1},
            axisLine: {show: !0, onZero: !0, lineStyle: {color: "#333", width: 1, type: "solid"}},
            axisTick: {show: !0, inside: !1, length: 5, lineStyle: {width: 1}},
            axisLabel: {show: !0, inside: !1, rotate: 0, margin: 8, textStyle: {fontSize: 12}},
            splitLine: {show: !0, lineStyle: {color: ["#ccc"], width: 1, type: "solid"}},
            splitArea: {show: !1, areaStyle: {color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]}}
        }, o = n.merge({
            boundaryGap: !0,
            splitLine: {show: !1},
            axisTick: {alignWithLabel: !1, interval: "auto"},
            axisLabel: {interval: "auto"}
        }, r), a = n.merge({boundaryGap: [0, 0], splitNumber: 5}, r), s = n.defaults({
            scale: !0,
            min: "dataMin",
            max: "dataMax"
        }, a), l = n.defaults({}, a);
        l.scale = !0, t.exports = {categoryAxis: o, valueAxis: a, timeAxis: s, logAxis: l}
    }, function (t, e) {
        var i = {}, n = "\x00__throttleOriginMethod", r = "\x00__throttleRate", o = "\x00__throttleType";
        i.throttle = function (t, e, i) {
            function n() {
                u = (new Date).getTime(), h = null, t.apply(a, s || [])
            }

            var r, o, a, s, l = 0, u = 0, h = null;
            e = e || 0;
            var c = function () {
                r = (new Date).getTime(), a = this, s = arguments, o = r - (i ? l : u) - e, clearTimeout(h), i ? h = setTimeout(n, e) : o >= 0 ? n() : h = setTimeout(n, -o), l = r
            };
            return c.clear = function () {
                h && (clearTimeout(h), h = null)
            }, c
        }, i.createOrUpdate = function (t, e, a, s) {
            var l = t[e];
            if (l) {
                var u = l[n] || l, h = l[o], c = l[r];
                if (c !== a || h !== s) {
                    if (null == a || !s)return t[e] = u;
                    l = t[e] = i.throttle(u, a, "debounce" === s), l[n] = u, l[o] = s, l[r] = a
                }
                return l
            }
        }, i.clear = function (t, e) {
            var i = t[e];
            i && i[n] && (t[e] = i[n])
        }, t.exports = i
    }, function (t, e) {
        t.exports = {
            containStroke: function (t, e, i, n, r, o, a) {
                if (0 === r)return !1;
                var s = r, l = 0, u = t;
                if (a > e + s && a > n + s || e - s > a && n - s > a || o > t + s && o > i + s || t - s > o && i - s > o)return !1;
                if (t === i)return Math.abs(o - t) <= s / 2;
                l = (e - n) / (t - i), u = (t * n - i * e) / (t - i);
                var h = l * o - a + u, c = h * h / (l * l + 1);
                return s / 2 * s / 2 >= c
            }
        }
    }, function (t, e, i) {
        var n = i(17);
        t.exports = {
            containStroke: function (t, e, i, r, o, a, s, l, u) {
                if (0 === s)return !1;
                var h = s;
                if (u > e + h && u > r + h && u > a + h || e - h > u && r - h > u && a - h > u || l > t + h && l > i + h && l > o + h || t - h > l && i - h > l && o - h > l)return !1;
                var c = n.quadraticProjectPoint(t, e, i, r, o, a, l, u, null);
                return h / 2 >= c
            }
        }
    }, function (t, e) {
        t.exports = function (t, e, i, n, r, o) {
            if (o > e && o > n || e > o && n > o)return 0;
            if (n === e)return 0;
            var a = e > n ? 1 : -1, s = (o - e) / (n - e);
            1 !== s && 0 !== s || (a = e > n ? .5 : -.5);
            var l = s * (i - t) + t;
            return l > r ? a : 0
        }
    }, function (t, e, i) {
        "use strict";
        var n = i(1), r = i(29), o = function (t, e, i, n, o, a) {
            this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == i ? 1 : i, this.y2 = null == n ? 0 : n, this.type = "linear", this.global = a || !1, r.call(this, o)
        };
        o.prototype = {constructor: o}, n.inherits(o, r), t.exports = o
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            return t > s || -s > t
        }

        var r = i(19), o = i(5), a = r.identity, s = 5e-5, l = function (t) {
            t = t || {}, t.position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null
        }, u = l.prototype;
        u.transform = null, u.needLocalTransform = function () {
            return n(this.rotation) || n(this.position[0]) || n(this.position[1]) || n(this.scale[0] - 1) || n(this.scale[1] - 1)
        }, u.updateTransform = function () {
            var t = this.parent, e = t && t.transform, i = this.needLocalTransform(), n = this.transform;
            return i || e ? (n = n || r.create(), i ? this.getLocalTransform(n) : a(n), e && (i ? r.mul(n, t.transform, n) : r.copy(n, t.transform)), this.transform = n, this.invTransform = this.invTransform || r.create(), void r.invert(this.invTransform, n)) : void(n && a(n))
        }, u.getLocalTransform = function (t) {
            t = t || [], a(t);
            var e = this.origin, i = this.scale, n = this.rotation, o = this.position;
            return e && (t[4] -= e[0], t[5] -= e[1]), r.scale(t, t, i), n && r.rotate(t, t, n), e && (t[4] += e[0], t[5] += e[1]), t[4] += o[0], t[5] += o[1], t
        }, u.setTransform = function (t) {
            var e = this.transform;
            e && t.transform(e[0], e[1], e[2], e[3], e[4], e[5])
        }, u.restoreTransform = function (t) {
            var e = this.invTransform;
            e && t.transform(e[0], e[1], e[2], e[3], e[4], e[5])
        };
        var h = [];
        u.decomposeTransform = function () {
            if (this.transform) {
                var t = this.parent, e = this.transform;
                t && t.transform && (r.mul(h, t.invTransform, e), e = h);
                var i = e[0] * e[0] + e[1] * e[1], o = e[2] * e[2] + e[3] * e[3], a = this.position, s = this.scale;
                n(i - 1) && (i = Math.sqrt(i)), n(o - 1) && (o = Math.sqrt(o)), e[0] < 0 && (i = -i), e[3] < 0 && (o = -o), a[0] = e[4], a[1] = e[5], s[0] = i, s[1] = o, this.rotation = Math.atan2(-e[1] / o, e[0] / i)
            }
        }, u.getGlobalScale = function () {
            var t = this.transform;
            if (!t)return [1, 1];
            var e = Math.sqrt(t[0] * t[0] + t[1] * t[1]), i = Math.sqrt(t[2] * t[2] + t[3] * t[3]);
            return t[0] < 0 && (e = -e), t[3] < 0 && (i = -i), [e, i]
        }, u.transformCoordToLocal = function (t, e) {
            var i = [t, e], n = this.invTransform;
            return n && o.applyTransform(i, i, n), i
        }, u.transformCoordToGlobal = function (t, e) {
            var i = [t, e], n = this.transform;
            return n && o.applyTransform(i, i, n), i
        }, t.exports = l
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            r.each(o, function (e) {
                this[e] = r.bind(t[e], t)
            }, this)
        }

        var r = i(1), o = ["getDom", "getZr", "getWidth", "getHeight", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption"];
        t.exports = n
    }, function (t, e, i) {
        var n = i(1);
        i(54), i(89), i(90);
        var r = i(119), o = i(2);
        o.registerLayout(n.curry(r, "bar")), o.registerVisual(function (t) {
            t.eachSeriesByType("bar", function (t) {
                var e = t.getData();
                e.setVisual("legendSymbol", "roundRect")
            })
        }), i(36)
    }, function (t, e, i) {
        "use strict";
        var n = i(15), r = i(35);
        t.exports = n.extend({
            type: "series.bar",
            dependencies: ["grid", "polar"],
            getInitialData: function (t, e) {
                return r(t.data, this, e)
            },
            getMarkerPosition: function (t) {
                var e = this.coordinateSystem;
                if (e) {
                    var i = e.dataToPoint(t, !0), n = this.getData(), r = n.getLayout("offset"), o = n.getLayout("size"), a = e.getBaseAxis().isHorizontal() ? 0 : 1;
                    return i[a] += r + o / 2, i
                }
                return [NaN, NaN]
            },
            brushSelector: "rect",
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "cartesian2d",
                legendHoverLink: !0,
                xAxisIndex: 0,
                yAxisIndex: 0,
                barMinHeight: 0,
                itemStyle: {normal: {}, emphasis: {}}
            }
        })
    }, function (t, e, i) {
        "use strict";
        function n(t, e) {
            var i = t.width > 0 ? 1 : -1, n = t.height > 0 ? 1 : -1;
            e = Math.min(e, Math.abs(t.width), Math.abs(t.height)), t.x += i * e / 2, t.y += n * e / 2, t.width -= i * e, t.height -= n * e
        }

        var r = i(1), o = i(3);
        r.extend(i(8).prototype, i(91)), t.exports = i(2).extendChartView({
            type: "bar", render: function (t, e, i) {
                var n = t.get("coordinateSystem");
                return "cartesian2d" === n && this._renderOnCartesian(t, e, i), this.group
            }, _renderOnCartesian: function (t, e, i) {
                function a(e, i) {
                    var a = l.getItemLayout(e), s = l.getItemModel(e).get(p) || 0;
                    n(a, s);
                    var u = new o.Rect({shape: r.extend({}, a)});
                    if (f) {
                        var h = u.shape, c = d ? "height" : "width", g = {};
                        h[c] = 0, g[c] = a[c], o[i ? "updateProps" : "initProps"](u, {shape: g}, t, e)
                    }
                    return u
                }

                var s = this.group, l = t.getData(), u = this._data, h = t.coordinateSystem, c = h.getBaseAxis(), d = c.isHorizontal(), f = t.get("animation"), p = ["itemStyle", "normal", "barBorderWidth"];
                l.diff(u).add(function (t) {
                    if (l.hasValue(t)) {
                        var e = a(t);
                        l.setItemGraphicEl(t, e), s.add(e)
                    }
                }).update(function (e, i) {
                    var r = u.getItemGraphicEl(i);
                    if (!l.hasValue(e))return void s.remove(r);
                    r || (r = a(e, !0));
                    var h = l.getItemLayout(e), c = l.getItemModel(e).get(p) || 0;
                    n(h, c), o.updateProps(r, {shape: h}, t, e), l.setItemGraphicEl(e, r), s.add(r)
                }).remove(function (e) {
                    var i = u.getItemGraphicEl(e);
                    i && (i.style.text = "", o.updateProps(i, {shape: {width: 0}}, t, e, function () {
                        s.remove(i)
                    }))
                }).execute(), this._updateStyle(t, l, d), this._data = l
            }, _updateStyle: function (t, e, i) {
                function n(t, e, i, n, r) {
                    o.setText(t, e, i), t.text = n, "outside" === t.textPosition && (t.textPosition = r)
                }

                e.eachItemGraphicEl(function (a, s) {
                    var l = e.getItemModel(s), u = e.getItemVisual(s, "color"), h = e.getItemVisual(s, "opacity"), c = e.getItemLayout(s), d = l.getModel("itemStyle.normal"), f = l.getModel("itemStyle.emphasis").getBarItemStyle();
                    a.setShape("r", d.get("barBorderRadius") || 0), a.useStyle(r.defaults({
                        fill: u,
                        opacity: h
                    }, d.getBarItemStyle()));
                    var p = i ? c.height > 0 ? "bottom" : "top" : c.width > 0 ? "left" : "right", g = l.getModel("label.normal"), v = l.getModel("label.emphasis"), m = a.style;
                    g.get("show") ? n(m, g, u, r.retrieve(t.getFormattedLabel(s, "normal"), t.getRawValue(s)), p) : m.text = "", v.get("show") ? n(f, v, u, r.retrieve(t.getFormattedLabel(s, "emphasis"), t.getRawValue(s)), p) : f.text = "", o.setHoverStyle(a, f)
                })
            }, remove: function (t, e) {
                var i = this.group;
                t.get("animation") ? this._data && this._data.eachItemGraphicEl(function (e) {
                    e.style.text = "", o.updateProps(e, {shape: {width: 0}}, t, e.dataIndex, function () {
                        i.remove(e)
                    })
                }) : i.removeAll()
            }
        })
    }, function (t, e, i) {
        var n = i(31)([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["stroke", "barBorderColor"], ["lineWidth", "barBorderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]);
        t.exports = {
            getBarItemStyle: function (t) {
                var e = n.call(this, t);
                if (this.getBorderLineDash) {
                    var i = this.getBorderLineDash();
                    i && (e.lineDash = i)
                }
                return e
            }
        }
    }, function (t, e, i) {
        function n(t) {
            return "_" + t + "Type"
        }

        function r(t, e, i) {
            var n = e.getItemVisual(i, "color"), r = e.getItemVisual(i, t), o = e.getItemVisual(i, t + "Size");
            if (r && "none" !== r) {
                f.isArray(o) || (o = [o, o]);
                var a = u.createSymbol(r, -o[0] / 2, -o[1] / 2, o[0], o[1], n);
                return a.name = t, a
            }
        }

        function o(t) {
            var e = new c({name: "line"});
            return a(e.shape, t), e
        }

        function a(t, e) {
            var i = e[0], n = e[1], r = e[2];
            t.x1 = i[0], t.y1 = i[1], t.x2 = n[0], t.y2 = n[1], t.percent = 1, r && (t.cpx1 = r[0], t.cpy1 = r[1])
        }

        function s() {
            var t = this, e = t.childOfName("fromSymbol"), i = t.childOfName("toSymbol"), n = t.childOfName("label");
            if (e || i || !n.ignore) {
                for (var r = 1, o = this.parent; o;)o.scale && (r /= o.scale[0]), o = o.parent;
                var a = t.childOfName("line");
                if (this.__dirty || a.__dirty) {
                    var s = a.shape.percent, l = a.pointAt(0), u = a.pointAt(s), c = h.sub([], u, l);
                    if (h.normalize(c, c), e) {
                        e.attr("position", l);
                        var d = a.tangentAt(0);
                        e.attr("rotation", Math.PI / 2 - Math.atan2(d[1], d[0])), e.attr("scale", [r * s, r * s])
                    }
                    if (i) {
                        i.attr("position", u);
                        var d = a.tangentAt(1);
                        i.attr("rotation", -Math.PI / 2 - Math.atan2(d[1], d[0])), i.attr("scale", [r * s, r * s])
                    }
                    if (!n.ignore) {
                        n.attr("position", u);
                        var f, p, g, v = 5 * r;
                        if ("end" === n.__position)f = [c[0] * v + u[0], c[1] * v + u[1]], p = c[0] > .8 ? "left" : c[0] < -.8 ? "right" : "center", g = c[1] > .8 ? "top" : c[1] < -.8 ? "bottom" : "middle"; else if ("middle" === n.__position) {
                            var m = s / 2, d = a.tangentAt(m), y = [d[1], -d[0]], x = a.pointAt(m);
                            y[1] > 0 && (y[0] = -y[0], y[1] = -y[1]), f = [x[0] + y[0] * v, x[1] + y[1] * v], p = "center", g = "bottom";
                            var _ = -Math.atan2(d[1], d[0]);
                            u[0] < l[0] && (_ = Math.PI + _), n.attr("rotation", _)
                        } else f = [-c[0] * v + l[0], -c[1] * v + l[1]], p = c[0] > .8 ? "right" : c[0] < -.8 ? "left" : "center", g = c[1] > .8 ? "bottom" : c[1] < -.8 ? "top" : "middle";
                        n.attr({
                            style: {textVerticalAlign: n.__verticalAlign || g, textAlign: n.__textAlign || p},
                            position: f,
                            scale: [r, r]
                        })
                    }
                }
            }
        }

        function l(t, e, i) {
            d.Group.call(this), this._createLine(t, e, i)
        }

        var u = i(26), h = i(5), c = i(173), d = i(3), f = i(1), p = i(4), g = ["fromSymbol", "toSymbol"], v = l.prototype;
        v.beforeUpdate = s, v._createLine = function (t, e, i) {
            var a = t.hostModel, s = t.getItemLayout(e), l = o(s);
            l.shape.percent = 0, d.initProps(l, {shape: {percent: 1}}, a, e), this.add(l);
            var u = new d.Text({name: "label"});
            this.add(u), f.each(g, function (i) {
                var o = r(i, t, e);
                this.add(o), this[n(i)] = t.getItemVisual(e, i)
            }, this), this._updateCommonStl(t, e, i)
        }, v.updateData = function (t, e, i) {
            var o = t.hostModel, s = this.childOfName("line"), l = t.getItemLayout(e), u = {shape: {}};
            a(u.shape, l), d.updateProps(s, u, o, e), f.each(g, function (i) {
                var o = t.getItemVisual(e, i), a = n(i);
                if (this[a] !== o) {
                    this.remove(this.childOfName(i));
                    var s = r(i, t, e);
                    this.add(s)
                }
                this[a] = o
            }, this), this._updateCommonStl(t, e, i)
        }, v._updateCommonStl = function (t, e, i) {
            var n = t.hostModel, r = this.childOfName("line"), o = i && i.lineStyle, a = i && i.hoverLineStyle, s = i && i.labelModel, l = i && i.hoverLabelModel;
            if (!i || t.hasItemOption) {
                var u = t.getItemModel(e);
                o = u.getModel("lineStyle.normal").getLineStyle(), a = u.getModel("lineStyle.emphasis").getLineStyle(), s = u.getModel("label.normal"), l = u.getModel("label.emphasis")
            }
            var h = t.getItemVisual(e, "color");
            isNaN(c) && (c = t.getName(e)), r.useStyle(f.defaults({
                strokeNoScale: !0,
                fill: "none",
                stroke: h
            }, o)), r.hoverStyle = a;
            var c, g, v = s.getShallow("show"), m = l.getShallow("show"), y = this.childOfName("label");
            if ((v || m) && (c = p.round(n.getRawValue(e)), g = h || "#000"), v) {
                var x = s.getModel("textStyle");
                y.setStyle({
                    text: f.retrieve(n.getFormattedLabel(e, "normal", t.dataType), c),
                    textFont: x.getFont(),
                    fill: x.getTextColor() || g
                }), y.__textAlign = x.get("align"), y.__verticalAlign = x.get("baseline"), y.__position = s.get("position")
            } else y.setStyle("text", "");
            if (m) {
                var _ = l.getModel("textStyle");
                y.hoverStyle = {
                    text: f.retrieve(n.getFormattedLabel(e, "emphasis", t.dataType), c),
                    textFont: _.getFont(),
                    fill: _.getTextColor() || g
                }
            } else y.hoverStyle = {text: ""};
            y.ignore = !v && !m, d.setHoverStyle(this)
        }, v.updateLayout = function (t, e) {
            this.setLinePoints(t.getItemLayout(e))
        }, v.setLinePoints = function (t) {
            var e = this.childOfName("line");
            a(e.shape, t), e.dirty()
        }, f.inherits(l, d.Group), t.exports = l
    }, function (t, e, i) {
        function n(t) {
            return isNaN(t[0]) || isNaN(t[1])
        }

        function r(t) {
            return !n(t[0]) && !n(t[1])
        }

        function o(t) {
            this._ctor = t || s, this.group = new a.Group
        }

        var a = i(3), s = i(92), l = o.prototype;
        l.updateData = function (t) {
            var e = this._lineData, i = this.group, n = this._ctor, o = t.hostModel, a = {
                lineStyle: o.getModel("lineStyle.normal").getLineStyle(),
                hoverLineStyle: o.getModel("lineStyle.emphasis").getLineStyle(),
                labelModel: o.getModel("label.normal"),
                hoverLabelModel: o.getModel("label.emphasis")
            };
            t.diff(e).add(function (e) {
                if (r(t.getItemLayout(e))) {
                    var o = new n(t, e, a);
                    t.setItemGraphicEl(e, o), i.add(o)
                }
            }).update(function (o, s) {
                var l = e.getItemGraphicEl(s);
                return r(t.getItemLayout(o)) ? (l ? l.updateData(t, o, a) : l = new n(t, o, a), t.setItemGraphicEl(o, l), void i.add(l)) : void i.remove(l)
            }).remove(function (t) {
                i.remove(e.getItemGraphicEl(t))
            }).execute(), this._lineData = t
        }, l.updateLayout = function () {
            var t = this._lineData;
            t.eachItemGraphicEl(function (e, i) {
                e.updateLayout(t, i)
            }, this)
        }, l.remove = function () {
            this.group.removeAll()
        }, t.exports = o
    }, function (t, e, i) {
        var n = i(1), r = i(2), o = r.PRIORITY;
        i(95), i(96), r.registerVisual(n.curry(i(46), "line", "circle", "line")), r.registerLayout(n.curry(i(55), "line")), r.registerProcessor(o.PROCESSOR.STATISTIC, n.curry(i(131), "line")), i(36)
    }, function (t, e, i) {
        "use strict";
        var n = i(35), r = i(15);
        t.exports = r.extend({
            type: "series.line",
            dependencies: ["grid", "polar"],
            getInitialData: function (t, e) {
                return n(t.data, this, e)
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "cartesian2d",
                legendHoverLink: !0,
                hoverAnimation: !0,
                xAxisIndex: 0,
                yAxisIndex: 0,
                polarIndex: 0,
                clipOverflow: !0,
                label: {normal: {position: "top"}},
                lineStyle: {normal: {width: 2, type: "solid"}},
                step: !1,
                smooth: !1,
                smoothMonotone: null,
                symbol: "emptyCircle",
                symbolSize: 4,
                symbolRotate: null,
                showSymbol: !0,
                showAllSymbol: !1,
                connectNulls: !1,
                sampling: "none",
                animationEasing: "linear",
                progressive: 0,
                hoverLayerThreshold: 1 / 0
            }
        })
    }, function (t, e, i) {
        "use strict";
        function n(t, e) {
            if (t.length === e.length) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i], r = e[i];
                    if (n[0] !== r[0] || n[1] !== r[1])return
                }
                return !0
            }
        }

        function r(t) {
            return "number" == typeof t ? t : t ? .3 : 0
        }

        function o(t) {
            var e = t.getGlobalExtent();
            if (t.onBand) {
                var i = t.getBandWidth() / 2 - 1, n = e[1] > e[0] ? 1 : -1;
                e[0] += n * i, e[1] -= n * i
            }
            return e
        }

        function a(t) {
            return t >= 0 ? 1 : -1
        }

        function s(t, e) {
            var i = t.getBaseAxis(), n = t.getOtherAxis(i), r = i.onZero ? 0 : n.scale.getExtent()[0], o = n.dim, s = "x" === o || "radius" === o ? 1 : 0;
            return e.mapArray([o], function (n, l) {
                for (var u, h = e.stackedOn; h && a(h.get(o, l)) === a(n);) {
                    u = h;
                    break
                }
                var c = [];
                return c[s] = e.get(i.dim, l), c[1 - s] = u ? u.get(o, l, !0) : r, t.dataToPoint(c)
            }, !0)
        }

        function l(t, e) {
            return null != e.dataIndex ? e.dataIndex : null != e.name ? t.indexOfName(e.name) : void 0
        }

        function u(t, e, i) {
            var n = o(t.getAxis("x")), r = o(t.getAxis("y")), a = t.getBaseAxis().isHorizontal(), s = Math.min(n[0], n[1]), l = Math.min(r[0], r[1]), u = Math.max(n[0], n[1]) - s, h = Math.max(r[0], r[1]) - l, c = i.get("lineStyle.normal.width") || 2, d = i.get("clipOverflow") ? c / 2 : Math.max(u, h);
            a ? (l -= d, h += 2 * d) : (s -= d, u += 2 * d);
            var f = new x.Rect({shape: {x: s, y: l, width: u, height: h}});
            return e && (f.shape[a ? "width" : "height"] = 0, x.initProps(f, {shape: {width: u, height: h}}, i)), f
        }

        function h(t, e, i) {
            var n = t.getAngleAxis(), r = t.getRadiusAxis(), o = r.getExtent(), a = n.getExtent(), s = Math.PI / 180, l = new x.Sector({
                shape: {
                    cx: t.cx,
                    cy: t.cy,
                    r0: o[0],
                    r: o[1],
                    startAngle: -a[0] * s,
                    endAngle: -a[1] * s,
                    clockwise: n.inverse
                }
            });
            return e && (l.shape.endAngle = -a[0] * s, x.initProps(l, {shape: {endAngle: -a[1] * s}}, i)), l
        }

        function c(t, e, i) {
            return "polar" === t.type ? h(t, e, i) : u(t, e, i)
        }

        function d(t, e, i) {
            for (var n = e.getBaseAxis(), r = "x" === n.dim || "radius" === n.dim ? 0 : 1, o = [], a = 0; a < t.length - 1; a++) {
                var s = t[a + 1], l = t[a];
                o.push(l);
                var u = [];
                switch (i) {
                    case"end":
                        u[r] = s[r], u[1 - r] = l[1 - r], o.push(u);
                        break;
                    case"middle":
                        var h = (l[r] + s[r]) / 2, c = [];
                        u[r] = c[r] = h, u[1 - r] = l[1 - r], c[1 - r] = s[1 - r], o.push(u), o.push(c);
                        break;
                    default:
                        u[r] = l[r], u[1 - r] = s[1 - r], o.push(u)
                }
            }
            return t[a] && o.push(t[a]), o
        }

        function f(t, e) {
            return Math.max(Math.min(t, e[1]), e[0])
        }

        function p(t, e) {
            var i = t.getVisual("visualMeta");
            if (i && i.length) {
                for (var n, r = i.length - 1; r >= 0; r--)if (i[r].dimension < 2) {
                    n = i[r];
                    break
                }
                if (n && "cartesian2d" === e.type) {
                    var o = n.dimension, a = t.dimensions[o], s = t.getDataExtent(a), l = n.stops, u = [];
                    l[0].interval && l.sort(function (t, e) {
                        return t.interval[0] - e.interval[0]
                    });
                    var h = l[0], c = l[l.length - 1], d = h.interval ? f(h.interval[0], s) : h.value, p = c.interval ? f(c.interval[1], s) : c.value, g = p - d;
                    if (0 === g)return t.getItemVisual(0, "color");
                    for (var r = 0; r < l.length; r++)if (l[r].interval) {
                        if (l[r].interval[1] === l[r].interval[0])continue;
                        u.push({
                            offset: (f(l[r].interval[0], s) - d) / g,
                            color: l[r].color
                        }, {offset: (f(l[r].interval[1], s) - d) / g, color: l[r].color})
                    } else u.push({offset: (l[r].value - d) / g, color: l[r].color});
                    var v = new x.LinearGradient(0, 0, 0, 0, u, !0), m = e.getAxis(a), y = Math.round(m.toGlobalCoord(m.dataToCoord(d))), _ = Math.round(m.toGlobalCoord(m.dataToCoord(p)));
                    return v[a] = y, v[a + "2"] = _, v
                }
            }
        }

        var g = i(1), v = i(39), m = i(49), y = i(97), x = i(3), _ = i(98), b = i(27);
        t.exports = b.extend({
            type: "line", init: function () {
                var t = new x.Group, e = new v;
                this.group.add(e.group), this._symbolDraw = e, this._lineGroup = t
            }, render: function (t, e, i) {
                var o = t.coordinateSystem, a = this.group, l = t.getData(), u = t.getModel("lineStyle.normal"), h = t.getModel("areaStyle.normal"), f = l.mapArray(l.getItemLayout, !0), v = "polar" === o.type, m = this._coordSys, y = this._symbolDraw, x = this._polyline, _ = this._polygon, b = this._lineGroup, w = t.get("animation"), S = !h.isEmpty(), M = s(o, l), A = t.get("showSymbol"), I = A && !v && !t.get("showAllSymbol") && this._getSymbolIgnoreFunc(l, o), T = this._data;
                T && T.eachItemGraphicEl(function (t, e) {
                    t.__temp && (a.remove(t), T.setItemGraphicEl(e, null))
                }), A || y.remove(), a.add(b);
                var L = !v && t.get("step");
                x && m.type === o.type && L === this._step ? (S && !_ ? _ = this._newPolygon(f, M, o, w) : _ && !S && (b.remove(_), _ = this._polygon = null), b.setClipPath(c(o, !1, t)), A && y.updateData(l, I), l.eachItemGraphicEl(function (t) {
                    t.stopAnimation(!0)
                }), n(this._stackedOnPoints, M) && n(this._points, f) || (w ? this._updateAnimation(l, M, o, i, L) : (x.setShape({points: f}), _ && _.setShape({
                    points: f,
                    stackedOnPoints: M
                })))) : (A && y.updateData(l, I), L && (f = d(f, o, L), M = d(M, o, L)), x = this._newPolyline(f, o, w), S && (_ = this._newPolygon(f, M, o, w)), b.setClipPath(c(o, !0, t)));
                var C = p(l, o) || l.getVisual("color");
                x.useStyle(g.defaults(u.getLineStyle(), {fill: "none", stroke: C, lineJoin: "bevel"}));
                var D = t.get("smooth");
                if (D = r(t.get("smooth")), x.setShape({
                        smooth: D,
                        smoothMonotone: t.get("smoothMonotone"),
                        connectNulls: t.get("connectNulls")
                    }), _) {
                    var P = l.stackedOn, k = 0;
                    if (_.useStyle(g.defaults(h.getAreaStyle(), {fill: C, opacity: .7, lineJoin: "bevel"})), P) {
                        var z = P.hostModel;
                        k = r(z.get("smooth"))
                    }
                    _.setShape({
                        smooth: D,
                        stackedOnSmooth: k,
                        smoothMonotone: t.get("smoothMonotone"),
                        connectNulls: t.get("connectNulls")
                    })
                }
                this._data = l, this._coordSys = o, this._stackedOnPoints = M, this._points = f, this._step = L
            }, highlight: function (t, e, i, n) {
                var r = t.getData(), o = l(r, n);
                if (!(o instanceof Array) && null != o && o >= 0) {
                    var a = r.getItemGraphicEl(o);
                    if (!a) {
                        var s = r.getItemLayout(o);
                        a = new m(r, o), a.position = s, a.setZ(t.get("zlevel"), t.get("z")), a.ignore = isNaN(s[0]) || isNaN(s[1]), a.__temp = !0, r.setItemGraphicEl(o, a), a.stopSymbolAnimation(!0), this.group.add(a)
                    }
                    a.highlight()
                } else b.prototype.highlight.call(this, t, e, i, n)
            }, downplay: function (t, e, i, n) {
                var r = t.getData(), o = l(r, n);
                if (null != o && o >= 0) {
                    var a = r.getItemGraphicEl(o);
                    a && (a.__temp ? (r.setItemGraphicEl(o, null), this.group.remove(a)) : a.downplay())
                } else b.prototype.downplay.call(this, t, e, i, n)
            }, _newPolyline: function (t) {
                var e = this._polyline;
                return e && this._lineGroup.remove(e), e = new _.Polyline({
                    shape: {points: t},
                    silent: !0,
                    z2: 10
                }), this._lineGroup.add(e), this._polyline = e, e
            }, _newPolygon: function (t, e) {
                var i = this._polygon;
                return i && this._lineGroup.remove(i), i = new _.Polygon({
                    shape: {points: t, stackedOnPoints: e},
                    silent: !0
                }), this._lineGroup.add(i), this._polygon = i, i
            }, _getSymbolIgnoreFunc: function (t, e) {
                var i = e.getAxesByScale("ordinal")[0];
                return i && i.isLabelIgnored ? g.bind(i.isLabelIgnored, i) : void 0
            }, _updateAnimation: function (t, e, i, n, r) {
                var o = this._polyline, a = this._polygon, s = t.hostModel, l = y(this._data, t, this._stackedOnPoints, e, this._coordSys, i), u = l.current, h = l.stackedOnCurrent, c = l.next, f = l.stackedOnNext;
                r && (u = d(l.current, i, r), h = d(l.stackedOnCurrent, i, r), c = d(l.next, i, r), f = d(l.stackedOnNext, i, r)), o.shape.__points = l.current, o.shape.points = u, x.updateProps(o, {shape: {points: c}}, s), a && (a.setShape({
                    points: u,
                    stackedOnPoints: h
                }), x.updateProps(a, {shape: {points: c, stackedOnPoints: f, __points: l.next}}, s));
                for (var p = [], g = l.status, v = 0; v < g.length; v++) {
                    var m = g[v].cmd;
                    if ("=" === m) {
                        var _ = t.getItemGraphicEl(g[v].idx1);
                        _ && p.push({el: _, ptIdx: v})
                    }
                }
                o.animators && o.animators.length && o.animators[0].during(function () {
                    for (var t = 0; t < p.length; t++) {
                        var e = p[t].el;
                        e.attr("position", o.shape.__points[p[t].ptIdx])
                    }
                })
            }, remove: function (t) {
                var e = this.group, i = this._data;
                this._lineGroup.removeAll(), this._symbolDraw.remove(!0), i && i.eachItemGraphicEl(function (t, n) {
                    t.__temp && (e.remove(t), i.setItemGraphicEl(n, null))
                }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null
            }
        })
    }, function (t, e) {
        function i(t) {
            return t >= 0 ? 1 : -1
        }

        function n(t, e, n) {
            for (var r, o = t.getBaseAxis(), a = t.getOtherAxis(o), s = o.onZero ? 0 : a.scale.getExtent()[0], l = a.dim, u = "x" === l || "radius" === l ? 1 : 0, h = e.stackedOn, c = e.get(l, n); h && i(h.get(l, n)) === i(c);) {
                r = h;
                break
            }
            var d = [];
            return d[u] = e.get(o.dim, n), d[1 - u] = r ? r.get(l, n, !0) : s, t.dataToPoint(d)
        }

        function r(t, e) {
            var i = [];
            return e.diff(t).add(function (t) {
                i.push({cmd: "+", idx: t})
            }).update(function (t, e) {
                i.push({cmd: "=", idx: e, idx1: t})
            }).remove(function (t) {
                i.push({cmd: "-", idx: t})
            }).execute(), i
        }

        t.exports = function (t, e, i, o, a, s) {
            for (var l = r(t, e), u = [], h = [], c = [], d = [], f = [], p = [], g = [], v = s.dimensions, m = 0; m < l.length; m++) {
                var y = l[m], x = !0;
                switch (y.cmd) {
                    case"=":
                        var _ = t.getItemLayout(y.idx), b = e.getItemLayout(y.idx1);
                        (isNaN(_[0]) || isNaN(_[1])) && (_ = b.slice()), u.push(_), h.push(b), c.push(i[y.idx]), d.push(o[y.idx1]), g.push(e.getRawIndex(y.idx1));
                        break;
                    case"+":
                        var w = y.idx;
                        u.push(a.dataToPoint([e.get(v[0], w, !0), e.get(v[1], w, !0)])), h.push(e.getItemLayout(w).slice()), c.push(n(a, e, w)), d.push(o[w]), g.push(e.getRawIndex(w));
                        break;
                    case"-":
                        var w = y.idx, S = t.getRawIndex(w);
                        S !== w ? (u.push(t.getItemLayout(w)), h.push(s.dataToPoint([t.get(v[0], w, !0), t.get(v[1], w, !0)])), c.push(i[w]), d.push(n(s, t, w)), g.push(S)) : x = !1
                }
                x && (f.push(y), p.push(p.length))
            }
            p.sort(function (t, e) {
                return g[t] - g[e]
            });
            for (var M = [], A = [], I = [], T = [], L = [], m = 0; m < p.length; m++) {
                var w = p[m];
                M[m] = u[w], A[m] = h[w], I[m] = c[w], T[m] = d[w], L[m] = f[w]
            }
            return {current: M, next: A, stackedOnCurrent: I, stackedOnNext: T, status: L}
        }
    }, function (t, e, i) {
        function n(t) {
            return isNaN(t[0]) || isNaN(t[1])
        }

        function r(t, e, i, r, o, a, g, v, m, y, x) {
            for (var _ = 0, b = i, w = 0; r > w; w++) {
                var S = e[b];
                if (b >= o || 0 > b)break;
                if (n(S)) {
                    if (x) {
                        b += a;
                        continue
                    }
                    break
                }
                if (b === i)t[a > 0 ? "moveTo" : "lineTo"](S[0], S[1]), c(f, S); else if (m > 0) {
                    var M = b + a, A = e[M];
                    if (x)for (; A && n(e[M]);)M += a, A = e[M];
                    var I = .5, T = e[_], A = e[M];
                    if (!A || n(A))c(p, S); else {
                        n(A) && !x && (A = S), s.sub(d, A, T);
                        var L, C;
                        if ("x" === y || "y" === y) {
                            var D = "x" === y ? 0 : 1;
                            L = Math.abs(S[D] - T[D]), C = Math.abs(S[D] - A[D])
                        } else L = s.dist(S, T), C = s.dist(S, A);
                        I = C / (C + L), h(p, S, d, -m * (1 - I))
                    }
                    l(f, f, v), u(f, f, g), l(p, p, v), u(p, p, g), t.bezierCurveTo(f[0], f[1], p[0], p[1], S[0], S[1]), h(f, S, d, m * I)
                } else t.lineTo(S[0], S[1]);
                _ = b, b += a
            }
            return w
        }

        function o(t, e) {
            var i = [1 / 0, 1 / 0], n = [-(1 / 0), -(1 / 0)];
            if (e)for (var r = 0; r < t.length; r++) {
                var o = t[r];
                o[0] < i[0] && (i[0] = o[0]), o[1] < i[1] && (i[1] = o[1]), o[0] > n[0] && (n[0] = o[0]), o[1] > n[1] && (n[1] = o[1])
            }
            return {min: e ? i : n, max: e ? n : i}
        }

        var a = i(6), s = i(5), l = s.min, u = s.max, h = s.scaleAndAdd, c = s.copy, d = [], f = [], p = [];
        t.exports = {
            Polyline: a.extend({
                type: "ec-polyline",
                shape: {points: [], smooth: 0, smoothConstraint: !0, smoothMonotone: null, connectNulls: !1},
                style: {fill: null, stroke: "#000"},
                buildPath: function (t, e) {
                    var i = e.points, a = 0, s = i.length, l = o(i, e.smoothConstraint);
                    if (e.connectNulls) {
                        for (; s > 0 && n(i[s - 1]); s--);
                        for (; s > a && n(i[a]); a++);
                    }
                    for (; s > a;)a += r(t, i, a, s, s, 1, l.min, l.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1
                }
            }),
            Polygon: a.extend({
                type: "ec-polygon",
                shape: {
                    points: [],
                    stackedOnPoints: [],
                    smooth: 0,
                    stackedOnSmooth: 0,
                    smoothConstraint: !0,
                    smoothMonotone: null,
                    connectNulls: !1
                },
                buildPath: function (t, e) {
                    var i = e.points, a = e.stackedOnPoints, s = 0, l = i.length, u = e.smoothMonotone, h = o(i, e.smoothConstraint), c = o(a, e.smoothConstraint);
                    if (e.connectNulls) {
                        for (; l > 0 && n(i[l - 1]); l--);
                        for (; l > s && n(i[s]); s++);
                    }
                    for (; l > s;) {
                        var d = r(t, i, s, l, l, 1, h.min, h.max, e.smooth, u, e.connectNulls);
                        r(t, a, s + d - 1, d, l, -1, c.min, c.max, e.stackedOnSmooth, u, e.connectNulls), s += d + 1, t.closePath()
                    }
                }
            })
        }
    }, function (t, e, i) {
        var n = i(1), r = i(2);
        i(100), i(101), i(77)("pie", [{
            type: "pieToggleSelect",
            event: "pieselectchanged",
            method: "toggleSelected"
        }, {type: "pieSelect", event: "pieselected", method: "select"}, {
            type: "pieUnSelect",
            event: "pieunselected",
            method: "unSelect"
        }]), r.registerVisual(n.curry(i(72), "pie")), r.registerLayout(n.curry(i(103), "pie")), r.registerProcessor(n.curry(i(70), "pie"))
    }, function (t, e, i) {
        "use strict";
        var n = i(14), r = i(1), o = i(10), a = i(30), s = i(66), l = i(2).extendSeriesModel({
            type: "series.pie",
            init: function (t) {
                l.superApply(this, "init", arguments), this.legendDataProvider = function () {
                    return this._dataBeforeProcessed
                }, this.updateSelectedMap(t.data), this._defaultLabelLine(t)
            },
            mergeOption: function (t) {
                l.superCall(this, "mergeOption", t), this.updateSelectedMap(this.option.data)
            },
            getInitialData: function (t, e) {
                var i = a(["value"], t.data), r = new n(i, this);
                return r.initData(t.data), r
            },
            getDataParams: function (t) {
                var e = this._data, i = l.superCall(this, "getDataParams", t), n = e.getSum("value");
                return i.percent = n ? +(e.get("value", t) / n * 100).toFixed(2) : 0, i.$vars.push("percent"), i
            },
            _defaultLabelLine: function (t) {
                o.defaultEmphasis(t.labelLine, ["show"]);
                var e = t.labelLine.normal, i = t.labelLine.emphasis;
                e.show = e.show && t.label.normal.show, i.show = i.show && t.label.emphasis.show
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                legendHoverLink: !0,
                hoverAnimation: !0,
                center: ["50%", "50%"],
                radius: [0, "75%"],
                clockwise: !0,
                startAngle: 90,
                minAngle: 0,
                selectedOffset: 10,
                avoidLabelOverlap: !0,
                label: {normal: {rotate: !1, show: !0, position: "outer"}, emphasis: {}},
                labelLine: {
                    normal: {
                        show: !0,
                        length: 15,
                        length2: 15,
                        smooth: !1,
                        lineStyle: {width: 1, type: "solid"}
                    }
                },
                itemStyle: {normal: {borderWidth: 1}, emphasis: {}},
                animationEasing: "cubicOut",
                data: []
            }
        });
        r.mixin(l, s), t.exports = l
    }, function (t, e, i) {
        function n(t, e, i, n) {
            var o = e.getData(), a = this.dataIndex, s = o.getName(a), l = e.get("selectedOffset");
            n.dispatchAction({type: "pieToggleSelect", from: t, name: s, seriesId: e.id}), o.each(function (t) {
                r(o.getItemGraphicEl(t), o.getItemLayout(t), e.isSelected(o.getName(t)), l, i)
            })
        }

        function r(t, e, i, n, r) {
            var o = (e.startAngle + e.endAngle) / 2, a = Math.cos(o), s = Math.sin(o), l = i ? n : 0, u = [a * l, s * l];
            r ? t.animate().when(200, {position: u}).start("bounceOut") : t.attr("position", u)
        }

        function o(t, e) {
            function i() {
                o.ignore = o.hoverIgnore, a.ignore = a.hoverIgnore
            }

            function n() {
                o.ignore = o.normalIgnore, a.ignore = a.normalIgnore
            }

            s.Group.call(this);
            var r = new s.Sector({z2: 2}), o = new s.Polyline, a = new s.Text;
            this.add(r), this.add(o), this.add(a), this.updateData(t, e, !0),
                this.on("emphasis", i).on("normal", n).on("mouseover", i).on("mouseout", n)
        }

        function a(t, e, i, n, r) {
            var o = n.getModel("textStyle"), a = "inside" === r || "inner" === r;
            return {
                fill: o.getTextColor() || (a ? "#fff" : t.getItemVisual(e, "color")),
                opacity: t.getItemVisual(e, "opacity"),
                textFont: o.getFont(),
                text: l.retrieve(t.hostModel.getFormattedLabel(e, i), t.getName(e))
            }
        }

        var s = i(3), l = i(1), u = o.prototype;
        u.updateData = function (t, e, i) {
            function n() {
                a.stopAnimation(!0), a.animateTo({shape: {r: c.r + 10}}, 300, "elasticOut")
            }

            function o() {
                a.stopAnimation(!0), a.animateTo({shape: {r: c.r}}, 300, "elasticOut")
            }

            var a = this.childAt(0), u = t.hostModel, h = t.getItemModel(e), c = t.getItemLayout(e), d = l.extend({}, c);
            d.label = null, i ? (a.setShape(d), a.shape.endAngle = c.startAngle, s.updateProps(a, {shape: {endAngle: c.endAngle}}, u, e)) : s.updateProps(a, {shape: d}, u, e);
            var f = h.getModel("itemStyle"), p = t.getItemVisual(e, "color");
            a.useStyle(l.defaults({
                lineJoin: "bevel",
                fill: p
            }, f.getModel("normal").getItemStyle())), a.hoverStyle = f.getModel("emphasis").getItemStyle(), r(this, t.getItemLayout(e), h.get("selected"), u.get("selectedOffset"), u.get("animation")), a.off("mouseover").off("mouseout").off("emphasis").off("normal"), h.get("hoverAnimation") && u.ifEnableAnimation() && a.on("mouseover", n).on("mouseout", o).on("emphasis", n).on("normal", o), this._updateLabel(t, e), s.setHoverStyle(this)
        }, u._updateLabel = function (t, e) {
            var i = this.childAt(1), n = this.childAt(2), r = t.hostModel, o = t.getItemModel(e), l = t.getItemLayout(e), u = l.label, h = t.getItemVisual(e, "color");
            s.updateProps(i, {shape: {points: u.linePoints || [[u.x, u.y], [u.x, u.y], [u.x, u.y]]}}, r, e), s.updateProps(n, {
                style: {
                    x: u.x,
                    y: u.y
                }
            }, r, e), n.attr({
                style: {textVerticalAlign: u.verticalAlign, textAlign: u.textAlign, textFont: u.font},
                rotation: u.rotation,
                origin: [u.x, u.y],
                z2: 10
            });
            var c = o.getModel("label.normal"), d = o.getModel("label.emphasis"), f = o.getModel("labelLine.normal"), p = o.getModel("labelLine.emphasis"), g = c.get("position") || d.get("position");
            n.setStyle(a(t, e, "normal", c, g)), n.ignore = n.normalIgnore = !c.get("show"), n.hoverIgnore = !d.get("show"), i.ignore = i.normalIgnore = !f.get("show"), i.hoverIgnore = !p.get("show"), i.setStyle({
                stroke: h,
                opacity: t.getItemVisual(e, "opacity")
            }), i.setStyle(f.getModel("lineStyle").getLineStyle()), n.hoverStyle = a(t, e, "emphasis", d, g), i.hoverStyle = p.getModel("lineStyle").getLineStyle();
            var v = f.get("smooth");
            v && v === !0 && (v = .4), i.setShape({smooth: v})
        }, l.inherits(o, s.Group);
        var h = i(27).extend({
            type: "pie", init: function () {
                var t = new s.Group;
                this._sectorGroup = t
            }, render: function (t, e, i, r) {
                if (!r || r.from !== this.uid) {
                    var a = t.getData(), s = this._data, u = this.group, h = e.get("animation"), c = !s, d = l.curry(n, this.uid, t, h, i), f = t.get("selectedMode");
                    if (a.diff(s).add(function (t) {
                            var e = new o(a, t);
                            c && e.eachChild(function (t) {
                                t.stopAnimation(!0)
                            }), f && e.on("click", d), a.setItemGraphicEl(t, e), u.add(e)
                        }).update(function (t, e) {
                            var i = s.getItemGraphicEl(e);
                            i.updateData(a, t), i.off("click"), f && i.on("click", d), u.add(i), a.setItemGraphicEl(t, i)
                        }).remove(function (t) {
                            var e = s.getItemGraphicEl(t);
                            u.remove(e)
                        }).execute(), h && c && a.count() > 0) {
                        var p = a.getItemLayout(0), g = Math.max(i.getWidth(), i.getHeight()) / 2, v = l.bind(u.removeClipPath, u);
                        u.setClipPath(this._createClipPath(p.cx, p.cy, g, p.startAngle, p.clockwise, v, t))
                    }
                    this._data = a
                }
            }, _createClipPath: function (t, e, i, n, r, o, a) {
                var l = new s.Sector({shape: {cx: t, cy: e, r0: 0, r: i, startAngle: n, endAngle: n, clockwise: r}});
                return s.initProps(l, {shape: {endAngle: n + (r ? 1 : -1) * Math.PI * 2}}, a, o), l
            }
        });
        t.exports = h
    }, function (t, e, i) {
        "use strict";
        function n(t, e, i, n, r, o, a) {
            function s(e, i, n, r) {
                for (var o = e; i > o; o++)if (t[o].y += n, o > e && i > o + 1 && t[o + 1].y > t[o].y + t[o].height)return void l(o, n / 2);
                l(i - 1, n / 2)
            }

            function l(e, i) {
                for (var n = e; n >= 0 && (t[n].y -= i, !(n > 0 && t[n].y > t[n - 1].y + t[n - 1].height)); n--);
            }

            function u(t, e, i, n, r, o) {
                for (var a = o > 0 ? e ? Number.MAX_VALUE : 0 : e ? Number.MAX_VALUE : 0, s = 0, l = t.length; l > s; s++)if ("center" !== t[s].position) {
                    var u = Math.abs(t[s].y - n), h = t[s].len, c = t[s].len2, d = r + h > u ? Math.sqrt((r + h + c) * (r + h + c) - u * u) : Math.abs(t[s].x - i);
                    e && d >= a && (d = a - 10), !e && a >= d && (d = a + 10), t[s].x = i + d * o, a = d
                }
            }

            t.sort(function (t, e) {
                return t.y - e.y
            });
            for (var h, c = 0, d = t.length, f = [], p = [], g = 0; d > g; g++)h = t[g].y - c, 0 > h && s(g, d, -h, r), c = t[g].y + t[g].height;
            0 > a - c && l(d - 1, c - a);
            for (var g = 0; d > g; g++)t[g].y >= i ? p.push(t[g]) : f.push(t[g]);
            u(f, !1, e, i, n, r), u(p, !0, e, i, n, r)
        }

        function r(t, e, i, r, o, a) {
            for (var s = [], l = [], u = 0; u < t.length; u++)t[u].x < e ? s.push(t[u]) : l.push(t[u]);
            n(l, e, i, r, 1, o, a), n(s, e, i, r, -1, o, a);
            for (var u = 0; u < t.length; u++) {
                var h = t[u].linePoints;
                if (h) {
                    var c = h[1][0] - h[2][0];
                    t[u].x < e ? h[2][0] = t[u].x + 3 : h[2][0] = t[u].x - 3, h[1][1] = h[2][1] = t[u].y, h[1][0] = h[2][0] + c
                }
            }
        }

        var o = i(16);
        t.exports = function (t, e, i, n) {
            var a, s, l = t.getData(), u = [], h = !1;
            l.each(function (i) {
                var n, r, c, d, f = l.getItemLayout(i), p = l.getItemModel(i), g = p.getModel("label.normal"), v = g.get("position") || p.get("label.emphasis.position"), m = p.getModel("labelLine.normal"), y = m.get("length"), x = m.get("length2"), _ = (f.startAngle + f.endAngle) / 2, b = Math.cos(_), w = Math.sin(_);
                a = f.cx, s = f.cy;
                var S = "inside" === v || "inner" === v;
                if ("center" === v)n = f.cx, r = f.cy, d = "center"; else {
                    var M = (S ? (f.r + f.r0) / 2 * b : f.r * b) + a, A = (S ? (f.r + f.r0) / 2 * w : f.r * w) + s;
                    if (n = M + 3 * b, r = A + 3 * w, !S) {
                        var I = M + b * (y + e - f.r), T = A + w * (y + e - f.r), L = I + (0 > b ? -1 : 1) * x, C = T;
                        n = L + (0 > b ? -5 : 5), r = C, c = [[M, A], [I, T], [L, C]]
                    }
                    d = S ? "center" : b > 0 ? "left" : "right"
                }
                var D = g.getModel("textStyle").getFont(), P = g.get("rotate") ? 0 > b ? -_ + Math.PI : -_ : 0, k = t.getFormattedLabel(i, "normal") || l.getName(i), z = o.getBoundingRect(k, D, d, "top");
                h = !!P, f.label = {
                    x: n,
                    y: r,
                    position: v,
                    height: z.height,
                    len: y,
                    len2: x,
                    linePoints: c,
                    textAlign: d,
                    verticalAlign: "middle",
                    font: D,
                    rotation: P
                }, S || u.push(f.label)
            }), !h && t.get("avoidLabelOverlap") && r(u, a, s, e, i, n)
        }
    }, function (t, e, i) {
        var n = i(4), r = n.parsePercent, o = i(102), a = i(1), s = 2 * Math.PI, l = Math.PI / 180;
        t.exports = function (t, e, i, u) {
            e.eachSeriesByType(t, function (t) {
                var e = t.get("center"), u = t.get("radius");
                a.isArray(u) || (u = [0, u]), a.isArray(e) || (e = [e, e]);
                var h = i.getWidth(), c = i.getHeight(), d = Math.min(h, c), f = r(e[0], h), p = r(e[1], c), g = r(u[0], d / 2), v = r(u[1], d / 2), m = t.getData(), y = -t.get("startAngle") * l, x = t.get("minAngle") * l, _ = m.getSum("value"), b = Math.PI / (_ || m.count()) * 2, w = t.get("clockwise"), S = t.get("roseType"), M = m.getDataExtent("value");
                M[0] = 0;
                var A = s, I = 0, T = y, L = w ? 1 : -1;
                if (m.each("value", function (t, e) {
                        var i;
                        i = "area" !== S ? 0 === _ ? b : t * b : s / (m.count() || 1), x > i ? (i = x, A -= x) : I += t;
                        var r = T + L * i;
                        m.setItemLayout(e, {
                            angle: i,
                            startAngle: T,
                            endAngle: r,
                            clockwise: w,
                            cx: f,
                            cy: p,
                            r0: g,
                            r: S ? n.linearMap(t, M, [g, v]) : v
                        }), T = r
                    }, !0), s > A)if (.001 >= A) {
                    var C = s / m.count();
                    m.each(function (t) {
                        var e = m.getItemLayout(t);
                        e.startAngle = y + L * t * C, e.endAngle = y + L * (t + 1) * C
                    })
                } else b = A / I, T = y, m.each("value", function (t, e) {
                    var i = m.getItemLayout(e), n = i.angle === x ? x : t * b;
                    i.startAngle = T, i.endAngle = T + L * n, T += n
                });
                o(t, v, h, c)
            })
        }
    }, function (t, e, i) {
        "use strict";
        i(53), i(105)
    }, function (t, e, i) {
        function n(t, e) {
            function i(t, e) {
                var i = n.getAxis(t);
                return i.toGlobalCoord(i.dataToCoord(0))
            }

            var n = t.coordinateSystem, r = e.axis, o = {}, a = r.position, s = r.onZero ? "onZero" : a, l = r.dim, u = n.getRect(), h = [u.x, u.x + u.width, u.y, u.y + u.height], c = e.get("offset") || 0, d = {
                x: {
                    top: h[2] - c,
                    bottom: h[3] + c
                }, y: {left: h[0] - c, right: h[1] + c}
            };
            d.x.onZero = Math.max(Math.min(i("y"), d.x.bottom), d.x.top), d.y.onZero = Math.max(Math.min(i("x"), d.y.right), d.y.left), o.position = ["y" === l ? d.y[s] : h[0], "x" === l ? d.x[s] : h[3]], o.rotation = Math.PI / 2 * ("x" === l ? 0 : 1);
            var f = {top: -1, bottom: 1, left: -1, right: 1};
            o.labelDirection = o.tickDirection = o.nameDirection = f[a], r.onZero && (o.labelOffset = d[l][a] - d[l].onZero), e.getModel("axisTick").get("inside") && (o.tickDirection = -o.tickDirection), e.getModel("axisLabel").get("inside") && (o.labelDirection = -o.labelDirection);
            var p = e.getModel("axisLabel").get("rotate");
            return o.labelRotation = "top" === s ? -p : p, o.labelInterval = r.getLabelInterval(), o.z2 = 1, o
        }

        var r = i(1), o = i(3), a = i(50), s = a.ifIgnoreOnTick, l = a.getInterval, u = ["axisLine", "axisLabel", "axisTick", "axisName"], h = ["splitArea", "splitLine"], c = i(2).extendComponentView({
            type: "axis",
            render: function (t, e) {
                this.group.removeAll();
                var i = this._axisGroup;
                if (this._axisGroup = new o.Group, this.group.add(this._axisGroup), t.get("show")) {
                    var s = e.getComponent("grid", t.get("gridIndex")), l = n(s, t), c = new a(t, l);
                    r.each(u, c.add, c), this._axisGroup.add(c.getGroup()), r.each(h, function (e) {
                        t.get(e + ".show") && this["_" + e](t, s, l.labelInterval)
                    }, this), o.groupTransition(i, this._axisGroup, t)
                }
            },
            _splitLine: function (t, e, i) {
                var n = t.axis, a = t.getModel("splitLine"), u = a.getModel("lineStyle"), h = u.get("color"), c = l(a, i);
                h = r.isArray(h) ? h : [h];
                for (var d = e.coordinateSystem.getRect(), f = n.isHorizontal(), p = 0, g = n.getTicksCoords(), v = n.scale.getTicks(), m = [], y = [], x = u.getLineStyle(), _ = 0; _ < g.length; _++)if (!s(n, _, c)) {
                    var b = n.toGlobalCoord(g[_]);
                    f ? (m[0] = b, m[1] = d.y, y[0] = b, y[1] = d.y + d.height) : (m[0] = d.x, m[1] = b, y[0] = d.x + d.width, y[1] = b);
                    var w = p++ % h.length;
                    this._axisGroup.add(new o.Line(o.subPixelOptimizeLine({
                        anid: "line_" + v[_],
                        shape: {x1: m[0], y1: m[1], x2: y[0], y2: y[1]},
                        style: r.defaults({stroke: h[w]}, x),
                        silent: !0
                    })))
                }
            },
            _splitArea: function (t, e, i) {
                var n = t.axis, a = t.getModel("splitArea"), u = a.getModel("areaStyle"), h = u.get("color"), c = e.coordinateSystem.getRect(), d = n.getTicksCoords(), f = n.scale.getTicks(), p = n.toGlobalCoord(d[0]), g = n.toGlobalCoord(d[0]), v = 0, m = l(a, i), y = u.getAreaStyle();
                h = r.isArray(h) ? h : [h];
                for (var x = 1; x < d.length; x++)if (!s(n, x, m)) {
                    var _, b, w, S, M = n.toGlobalCoord(d[x]);
                    n.isHorizontal() ? (_ = p, b = c.y, w = M - _, S = c.height) : (_ = c.x, b = g, w = c.width, S = M - b);
                    var A = v++ % h.length;
                    this._axisGroup.add(new o.Rect({
                        anid: "area_" + f[x],
                        shape: {x: _, y: b, width: w, height: S},
                        style: r.defaults({fill: h[A]}, y),
                        silent: !0
                    })), p = _ + w, g = b + S
                }
            }
        });
        c.extend({type: "xAxis"}), c.extend({type: "yAxis"})
    }, function (t, e, i) {
        var n = i(1), r = i(10), o = i(2);
        o.registerAction("dataZoom", function (t, e) {
            var i = r.createLinkedNodesFinder(n.bind(e.eachComponent, e, "dataZoom"), r.eachAxisDim, function (t, e) {
                return t.get(e.axisIndex)
            }), o = [];
            e.eachComponent({mainType: "dataZoom", query: t}, function (t, e) {
                o.push.apply(o, i(t).nodes)
            }), n.each(o, function (e, i) {
                e.setRawRange({start: t.start, end: t.end, startValue: t.startValue, endValue: t.endValue})
            })
        })
    }, function (t, e, i) {
        function n(t, e, i) {
            i.getAxisProxy(t.name, e).reset(i)
        }

        function r(t, e, i) {
            i.getAxisProxy(t.name, e).filterData(i)
        }

        var o = i(2);
        o.registerProcessor(function (t, e) {
            t.eachComponent("dataZoom", function (t) {
                t.eachTargetAxis(n), t.eachTargetAxis(r)
            }), t.eachComponent("dataZoom", function (t) {
                var e = t.findRepresentativeAxisProxy(), i = e.getDataPercentWindow(), n = e.getDataValueWindow();
                t.setRawRange({start: i[0], end: i[1], startValue: n[0], endValue: n[1]})
            })
        })
    }, function (t, e, i) {
        function n(t) {
            var e = t[a];
            return e || (e = t[a] = [{}]), e
        }

        var r = i(1), o = r.each, a = "\x00_ec_hist_store", s = {
            push: function (t, e) {
                var i = n(t);
                o(e, function (e, n) {
                    for (var r = i.length - 1; r >= 0; r--) {
                        var o = i[r];
                        if (o[n])break
                    }
                    if (0 > r) {
                        var a = t.queryComponents({mainType: "dataZoom", subType: "select", id: n})[0];
                        if (a) {
                            var s = a.getPercentRange();
                            i[0][n] = {dataZoomId: n, start: s[0], end: s[1]}
                        }
                    }
                }), i.push(e)
            }, pop: function (t) {
                var e = n(t), i = e[e.length - 1];
                e.length > 1 && e.pop();
                var r = {};
                return o(i, function (t, i) {
                    for (var n = e.length - 1; n >= 0; n--) {
                        var t = e[n][i];
                        if (t) {
                            r[i] = t;
                            break
                        }
                    }
                }), r
            }, clear: function (t) {
                t[a] = null
            }, count: function (t) {
                return n(t).length
            }
        };
        t.exports = s
    }, function (t, e, i) {
        i(11).registerSubTypeDefaulter("dataZoom", function (t) {
            return "slider"
        })
    }, function (t, e, i) {
        function n(t) {
            V.call(this), this._zr = t, this.group = new B.Group, this._brushType, this._brushOption, this._panels, this._track = [], this._dragging, this._covers = [], this._creatingCover, this._creatingPanel, this._enableGlobalPan, this._uid = "brushController_" + et++, this._handlers = {}, W(it, function (t, e) {
                this._handlers[e] = N.bind(t, this)
            }, this)
        }

        function r(t, e) {
            var i = t._zr;
            t._enableGlobalPan || G.take(i, Q, t._uid), W(t._handlers, function (t, e) {
                i.on(e, t)
            }), t._brushType = e.brushType, t._brushOption = N.merge(N.clone(tt), e, !0)
        }

        function o(t) {
            var e = t._zr;
            G.release(e, Q, t._uid), W(t._handlers, function (t, i) {
                e.off(i, t)
            }), t._brushType = t._brushOption = null
        }

        function a(t, e) {
            var i = nt[e.brushType].createCover(t, e);
            return u(i), i.__brushOption = e, t.group.add(i), i
        }

        function s(t, e) {
            var i = c(e);
            return i.endCreating && (i.endCreating(t, e), u(e)), e
        }

        function l(t, e) {
            var i = e.__brushOption;
            c(e).updateCoverShape(t, e, i.range, i)
        }

        function u(t) {
            t.traverse(function (t) {
                t.z = X, t.z2 = X
            })
        }

        function h(t, e) {
            c(e).updateCommon(t, e), l(t, e)
        }

        function c(t) {
            return nt[t.__brushOption.brushType]
        }

        function d(t, e, i) {
            var n = t._panels;
            if (!n)return !0;
            var r;
            return W(n, function (t) {
                t.contain(e, i) && (r = t)
            }), r
        }

        function f(t, e) {
            var i = t._panels;
            if (!i)return !0;
            var n = e.__brushOption.panelId;
            return null != n ? i[n] : !0
        }

        function p(t) {
            var e = t._covers, i = e.length;
            return W(e, function (e) {
                t.group.remove(e)
            }, t), e.length = 0, !!i
        }

        function g(t, e) {
            var i = Z(t._covers, function (t) {
                var e = t.__brushOption, i = N.clone(e.range);
                return {brushType: e.brushType, panelId: e.panelId, range: i}
            });
            t.trigger("brush", i, {isEnd: !!e.isEnd, removeOnClick: !!e.removeOnClick})
        }

        function v(t) {
            var e = t._track;
            if (!e.length)return !1;
            var i = e[e.length - 1], n = e[0], r = i[0] - n[0], o = i[1] - n[1], a = U(r * r + o * o, .5);
            return a > Y
        }

        function m(t) {
            var e = t.length - 1;
            return 0 > e && (e = 0), [t[0], t[e]]
        }

        function y(t, e, i, n) {
            var r = new B.Group;
            return r.add(new B.Rect({
                name: "main",
                style: w(i),
                silent: !0,
                draggable: !0,
                cursor: "move",
                drift: H(t, e, r, "nswe"),
                ondragend: H(g, e, {isEnd: !0})
            })), W(n, function (i) {
                r.add(new B.Rect({
                    name: i,
                    style: {opacity: 0},
                    draggable: !0,
                    silent: !0,
                    invisible: !0,
                    drift: H(t, e, r, i),
                    ondragend: H(g, e, {isEnd: !0})
                }))
            }), r
        }

        function x(t, e, i, n) {
            var r = n.brushStyle.lineWidth || 0, o = j(r, $), a = i[0][0], s = i[1][0], l = a - r / 2, u = s - r / 2, h = i[0][1], c = i[1][1], d = h - o + r / 2, f = c - o + r / 2, p = h - a, g = c - s, v = p + r, m = g + r;
            b(t, e, "main", a, s, p, g), n.transformable && (b(t, e, "w", l, u, o, m), b(t, e, "e", d, u, o, m), b(t, e, "n", l, u, v, o), b(t, e, "s", l, f, v, o), b(t, e, "nw", l, u, o, o), b(t, e, "ne", d, u, o, o), b(t, e, "sw", l, f, o, o), b(t, e, "se", d, f, o, o))
        }

        function _(t, e) {
            var i = e.__brushOption, n = i.transformable, r = e.childAt(0);
            r.useStyle(w(i)), r.attr({
                silent: !n,
                cursor: n ? "move" : "default"
            }), W(["w", "e", "n", "s", "se", "sw", "ne", "nw"], function (i) {
                var r = e.childOfName(i), o = A(t, i);
                r && r.attr({silent: !n, invisible: !n, cursor: n ? J[o] + "-resize" : null})
            })
        }

        function b(t, e, i, n, r, o, a) {
            var s = e.childOfName(i);
            s && s.setShape(D(C(t, e, [[n, r], [n + o, r + a]])))
        }

        function w(t) {
            return N.defaults({strokeNoScale: !0}, t.brushStyle)
        }

        function S(t, e, i, n) {
            var r = [q(t, i), q(e, n)], o = [j(t, i), j(e, n)];
            return [[r[0], o[0]], [r[1], o[1]]]
        }

        function M(t) {
            return B.getTransform(t.group)
        }

        function A(t, e) {
            if (e.length > 1) {
                e = e.split("");
                var i = [A(t, e[0]), A(t, e[1])];
                return ("e" === i[0] || "w" === i[0]) && i.reverse(), i.join("")
            }
            var n = {w: "left", e: "right", n: "top", s: "bottom"}, r = {
                left: "w",
                right: "e",
                top: "n",
                bottom: "s"
            }, i = B.transformDirection(n[e], M(t));
            return r[i]
        }

        function I(t, e, i, n, r, o, a, s) {
            var l = n.__brushOption, u = t(l.range), c = L(i, o, a);
            W(r.split(""), function (t) {
                var e = K[t];
                u[e[0]][e[1]] += c[e[0]]
            }), l.range = e(S(u[0][0], u[1][0], u[0][1], u[1][1])), h(i, n), g(i, {isEnd: !1})
        }

        function T(t, e, i, n, r) {
            var o = e.__brushOption.range, a = L(t, i, n);
            W(o, function (t) {
                t[0] += a[0], t[1] += a[1]
            }), h(t, e), g(t, {isEnd: !1})
        }

        function L(t, e, i) {
            var n = t.group, r = n.transformCoordToLocal(e, i), o = n.transformCoordToLocal(0, 0);
            return [r[0] - o[0], r[1] - o[1]]
        }

        function C(t, e, i) {
            var n = f(t, e);
            if (n === !0)return N.clone(i);
            var r = n.getBoundingRect();
            return N.map(i, function (t) {
                var e = t[0];
                e = j(e, r.x), e = q(e, r.x + r.width);
                var i = t[1];
                return i = j(i, r.y), i = q(i, r.y + r.height), [e, i]
            })
        }

        function D(t) {
            var e = q(t[0][0], t[1][0]), i = q(t[0][1], t[1][1]), n = j(t[0][0], t[1][0]), r = j(t[0][1], t[1][1]);
            return {x: e, y: i, width: n - e, height: r - i}
        }

        function P(t, e) {
            var i = e.offsetX, n = e.offsetY, r = t._zr;
            if (t._brushType) {
                for (var o, a = t._panels, s = t._covers, l = 0; l < s.length; l++)if (nt[s[l].__brushOption.brushType].contain(s[l], i, n)) {
                    o = !0;
                    break
                }
                o || (a ? W(a, function (t) {
                    t.contain(i, n) && r.setCursorStyle("crosshair")
                }) : r.setCursorStyle("crosshair"))
            }
        }

        function k(t) {
            var e = t.event;
            e.preventDefault && e.preventDefault()
        }

        function z(t, e, i) {
            return t.childOfName("main").contain(e, i)
        }

        function O(t, e, i) {
            var n, r = e.offsetX, o = e.offsetY, u = t._creatingCover, h = t._creatingPanel, c = t._brushOption;
            if (t._track.push(t.group.transformCoordToLocal(r, o)), v(t) || u) {
                if (h && !u) {
                    "single" === c.brushMode && p(t);
                    var f = N.clone(c);
                    f.panelId = h === !0 ? null : h.__brushPanelId, u = t._creatingCover = a(t, f), t._covers.push(u)
                }
                if (u) {
                    var g = nt[t._brushType], m = u.__brushOption;
                    m.range = g.getCreatingRange(C(t, u, t._track)), i && (s(t, u), g.updateCommon(t, u)), l(t, u), n = {isEnd: i}
                }
            } else i && "single" === c.brushMode && c.removeOnClick && d(t, r, o) && p(t) && (n = {
                isEnd: i,
                removeOnClick: !0
            });
            return n
        }

        function E(t) {
            if (this._dragging) {
                k(t);
                var e = O(this, t, !0);
                this._dragging = !1, this._track = [], this._creatingCover = null, e && g(this, e)
            }
        }

        function R(t) {
            return {
                createCover: function (e, i) {
                    return y(H(I, function (e) {
                        var i = [e, [0, 100]];
                        return t && i.reverse(), i
                    }, function (e) {
                        return e[t]
                    }), e, i, [["w", "e"], ["n", "s"]][t])
                }, getCreatingRange: function (e) {
                    var i = m(e), n = q(i[0][t], i[1][t]), r = j(i[0][t], i[1][t]);
                    return [n, r]
                }, updateCoverShape: function (e, i, n, r) {
                    var o, a = r.brushStyle.width;
                    if (null == a) {
                        var s = f(e, i), l = 0;
                        if (s !== !0) {
                            var u = s.getBoundingRect();
                            a = t ? u.width : u.height, l = t ? u.x : u.y
                        }
                        o = [l, l + (a || 0)]
                    } else o = [-a / 2, a / 2];
                    var h = [n, o];
                    t && h.reverse(), x(e, i, h, r)
                }, updateCommon: _, contain: z
            }
        }

        var V = i(20), N = i(1), B = i(3), G = i(112), F = i(45), H = N.curry, W = N.each, Z = N.map, q = Math.min, j = Math.max, U = Math.pow, X = 1e4, Y = 6, $ = 6, Q = "globalPan", K = {
            w: [0, 0],
            e: [0, 1],
            n: [1, 0],
            s: [1, 1]
        }, J = {
            w: "ew",
            e: "ew",
            n: "ns",
            s: "ns",
            ne: "nesw",
            sw: "nesw",
            nw: "nwse",
            se: "nwse"
        }, tt = {
            brushStyle: {lineWidth: 2, stroke: "rgba(0,0,0,0.3)", fill: "rgba(0,0,0,0.1)"},
            transformable: !0,
            brushMode: "single",
            removeOnClick: !1
        }, et = 0;
        n.prototype = {
            constructor: n, enableBrush: function (t) {
                return this._brushType && o(this), t.brushType && r(this, t), this
            }, setPanels: function (t) {
                var e = this._panels || {}, i = this._panels = t && t.length && {}, n = this.group;
                return i && W(t, function (t) {
                    var r = t.panelId, o = e[r];
                    o || (o = new B.Rect({
                        silent: !0,
                        invisible: !0
                    }), n.add(o)), o.attr("shape", t.rect), o.__brushPanelId = r, i[r] = o, e[r] = null
                }), W(e, function (t) {
                    t && n.remove(t)
                }), this
            }, mount: function (t) {
                t = t || {}, this._enableGlobalPan = t.enableGlobalPan;
                var e = this.group;
                return this._zr.add(e), e.attr({
                    position: t.position || [0, 0],
                    rotation: t.rotation || 0,
                    scale: t.scale || [1, 1]
                }), this
            }, eachCover: function (t, e) {
                W(this._covers, t, e)
            }, updateCovers: function (t) {
                function e(t, e) {
                    return (null != t.id ? t.id : o + e) + "-" + t.brushType
                }

                function i(t, i) {
                    return e(t.__brushOption, i)
                }

                function n(e, i) {
                    var n = t[e];
                    if (null != i && l[i] === d)u[e] = l[i]; else {
                        var r = u[e] = null != i ? (l[i].__brushOption = n, l[i]) : s(c, a(c, n));
                        h(c, r)
                    }
                }

                function r(t) {
                    l[t] !== d && c.group.remove(l[t])
                }

                t = N.map(t, function (t) {
                    return N.merge(N.clone(tt), t, !0)
                });
                var o = "\x00-brush-index-", l = this._covers, u = this._covers = [], c = this, d = this._creatingCover;
                return new F(l, t, i, e).add(n).update(n).remove(r).execute(), this
            }, unmount: function () {
                return this.enableBrush(!1), p(this), this._zr.remove(this.group), this
            }, dispose: function () {
                this.unmount(), this.off()
            }
        }, N.mixin(n, V);
        var it = {
            mousedown: function (t) {
                if (this._dragging)E.call(this, t); else if (!t.target || !t.target.draggable) {
                    k(t);
                    var e = t.offsetX, i = t.offsetY;
                    this._creatingCover = null;
                    var n = this._creatingPanel = d(this, e, i);
                    n && (this._dragging = !0, this._track = [this.group.transformCoordToLocal(e, i)])
                }
            }, mousemove: function (t) {
                if (P(this, t), this._dragging) {
                    k(t);
                    var e = O(this, t, !1);
                    e && g(this, e)
                }
            }, mouseup: E
        }, nt = {
            lineX: R(0), lineY: R(1), rect: {
                createCover: function (t, e) {
                    return y(H(I, function (t) {
                        return t
                    }, function (t) {
                        return t
                    }), t, e, ["w", "e", "n", "s", "se", "sw", "ne", "nw"])
                }, getCreatingRange: function (t) {
                    var e = m(t);
                    return S(e[1][0], e[1][1], e[0][0], e[0][1])
                }, updateCoverShape: function (t, e, i, n) {
                    x(t, e, i, n)
                }, updateCommon: _, contain: z
            }, polygon: {
                createCover: function (t, e) {
                    var i = new B.Group;
                    return i.add(new B.Polyline({name: "main", style: w(e), silent: !0})), i
                }, getCreatingRange: function (t) {
                    return t
                }, endCreating: function (t, e) {
                    e.remove(e.childAt(0)), e.add(new B.Polygon({
                        name: "main",
                        draggable: !0,
                        drift: H(T, t, e),
                        ondragend: H(g, t, {isEnd: !0})
                    }))
                }, updateCoverShape: function (t, e, i, n) {
                    e.childAt(0).setShape({points: C(t, e, i)})
                }, updateCommon: _, contain: z
            }
        };
        t.exports = n
    }, function (t, e, i) {
        function n(t) {
            return t[0] > t[1] && t.reverse(), t
        }

        function r(t, e) {
            for (var i = !0, n = 0; n < h.length; n++) {
                var r = h[n] + "Index";
                if (t[r] >= 0) {
                    i = !1;
                    for (var o = 0; o < e.length; o++)if (e[o][r] === t[r])return e[o]
                }
            }
            return i
        }

        function o(t, e, i, r) {
            var o = i.coordSys.getAxis(t);
            return n(a.map([0, 1], function (t) {
                return e ? o.coordToData(o.toLocalCoord(r[t])) : o.toGlobalCoord(o.dataToCoord(r[t]))
            }))
        }

        var a = i(1), s = i(3), l = a.each, u = {}, h = ["geo", "xAxis", "yAxis"], c = "--", d = ["dataToPoint", "pointToData"];
        u.parseOutputRanges = function (t, e, i, n) {
            l(t, function (t, i) {
                var o = t.panelId;
                if (o) {
                    o = o.split(c), t[o[0] + "Index"] = +o[1];
                    var a = r(t, e);
                    t.coordRange = f[t.brushType](1, a, t.range), n && (n[i] = a)
                }
            })
        }, u.parseInputRanges = function (t, e) {
            l(t.areas, function (e) {
                var i = r(e, t.coordInfoList);
                e.range = e.range || [], i && i !== !0 && (e.range = f[e.brushType](0, i, e.coordRange), e.panelId = i.panelId)
            })
        }, u.makePanelOpts = function (t) {
            var e = [];
            return l(t, function (t) {
                var i, n = t.coordSys;
                t.geoIndex >= 0 ? (i = n.getBoundingRect().clone(), i.applyTransform(s.getTransform(n))) : i = n.grid.getRect().clone(), e.push({
                    panelId: t.panelId,
                    rect: i
                })
            }), e
        }, u.makeCoordInfoList = function (t, e) {
            var i = [];
            return l(h, function (n) {
                var r = t[n + "Index"];
                null != r && "none" !== r && ("all" === r || a.isArray(r) || (r = [r]), e.eachComponent({mainType: n}, function (t, e) {
                    if (!("all" !== r && a.indexOf(r, e) < 0)) {
                        var o, s;
                        "xAxis" === n || "yAxis" === n ? o = t.axis.grid : s = t.coordinateSystem;
                        for (var l, u = 0, h = i.length; h > u; u++) {
                            var d = i[u];
                            if ("yAxis" === n && !d.yAxis && d.xAxis) {
                                var f = o.getCartesian(d.xAxisIndex, e);
                                if (f) {
                                    s = f, l = d;
                                    break
                                }
                            }
                        }
                        !l && i.push(l = {}), l[n] = t, l[n + "Index"] = e, l.panelId = n + c + e, l.coordSys = s || o.getCartesian(l.xAxisIndex, l.yAxisIndex), l.coordSys ? i[n + "Has"] = !0 : i.pop()
                    }
                }))
            }), i
        }, u.controlSeries = function (t, e, i) {
            var n = r(t, e.coordInfoList);
            return n === !0 || n && n.coordSys === i.coordinateSystem
        };
        var f = {
            lineX: a.curry(o, "x"), lineY: a.curry(o, "y"), rect: function (t, e, i) {
                var r = e.coordSys, o = r[d[t]]([i[0][0], i[1][0]]), a = r[d[t]]([i[0][1], i[1][1]]);
                return [n([o[0], a[0]]), n([o[1], a[1]])]
            }, polygon: function (t, e, i) {
                var n = e.coordSys;
                return a.map(i, n[d[t]], n)
            }
        };
        t.exports = u
    }, function (t, e, i) {
        function n(t) {
            return t[r] || (t[r] = {})
        }

        var r = "\x00_ec_interaction_mutex", o = {
            take: function (t, e, i) {
                var r = n(t);
                r[e] = i
            }, release: function (t, e, i) {
                var r = n(t), o = r[e];
                o === i && (r[e] = null)
            }, isTaken: function (t, e) {
                return !!n(t)[e]
            }
        };
        i(2).registerAction({type: "takeGlobalCursor", event: "globalCursorTaken", update: "update"}, function () {
        }), t.exports = o
    }, function (t, e, i) {
        function n(t, e, i) {
            r.positionGroup(t, e.getBoxLayoutParams(), {width: i.getWidth(), height: i.getHeight()}, e.get("padding"))
        }

        var r = i(13), o = i(9), a = i(3);
        t.exports = {
            layout: function (t, e, i) {
                var o = r.getLayoutRect(e.getBoxLayoutParams(), {
                    width: i.getWidth(),
                    height: i.getHeight()
                }, e.get("padding"));
                r.box(e.get("orient"), t, e.get("itemGap"), o.width, o.height), n(t, e, i)
            }, addBackground: function (t, e) {
                var i = o.normalizeCssArray(e.get("padding")), n = t.getBoundingRect(), r = e.getItemStyle(["color", "opacity"]);
                r.fill = e.get("backgroundColor");
                var s = new a.Rect({
                    shape: {
                        x: n.x - i[3],
                        y: n.y - i[0],
                        width: n.width + i[1] + i[3],
                        height: n.height + i[0] + i[2]
                    }, style: r, silent: !0, z2: -1
                });
                a.subPixelOptimizeRect(s), t.add(s)
            }
        }
    }, function (t, e, i) {
        var n = i(1), r = i(42), o = i(118), a = function (t, e, i, n, o) {
            r.call(this, t, e, i), this.type = n || "value", this.position = o || "bottom"
        };
        a.prototype = {
            constructor: a, index: 0, onZero: !1, model: null, isHorizontal: function () {
                var t = this.position;
                return "top" === t || "bottom" === t
            }, getGlobalExtent: function () {
                var t = this.getExtent();
                return t[0] = this.toGlobalCoord(t[0]), t[1] = this.toGlobalCoord(t[1]), t
            }, getLabelInterval: function () {
                var t = this._labelInterval;
                return t || (t = this._labelInterval = o(this)), t
            }, isLabelIgnored: function (t) {
                if ("category" === this.type) {
                    var e = this.getLabelInterval();
                    return "function" == typeof e && !e(t, this.scale.getLabel(t)) || t % (e + 1)
                }
            }, toLocalCoord: null, toGlobalCoord: null
        }, n.inherits(a, r), t.exports = a
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            return this._axes[t]
        }

        var r = i(1), o = function (t) {
            this._axes = {}, this._dimList = [], this.name = t || ""
        };
        o.prototype = {
            constructor: o, type: "cartesian", getAxis: function (t) {
                return this._axes[t]
            }, getAxes: function () {
                return r.map(this._dimList, n, this)
            }, getAxesByScale: function (t) {
                return t = t.toLowerCase(), r.filter(this.getAxes(), function (e) {
                    return e.scale.type === t
                })
            }, addAxis: function (t) {
                var e = t.dim;
                this._axes[e] = t, this._dimList.push(e)
            }, dataToCoord: function (t) {
                return this._dataCoordConvert(t, "dataToCoord")
            }, coordToData: function (t) {
                return this._dataCoordConvert(t, "coordToData")
            }, _dataCoordConvert: function (t, e) {
                for (var i = this._dimList, n = t instanceof Array ? [] : {}, r = 0; r < i.length; r++) {
                    var o = i[r], a = this._axes[o];
                    n[o] = a[e](t[o])
                }
                return n
            }
        }, t.exports = o
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            o.call(this, t)
        }

        var r = i(1), o = i(115);
        n.prototype = {
            constructor: n, type: "cartesian2d", dimensions: ["x", "y"], getBaseAxis: function () {
                return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x")
            }, containPoint: function (t) {
                var e = this.getAxis("x"), i = this.getAxis("y");
                return e.contain(e.toLocalCoord(t[0])) && i.contain(i.toLocalCoord(t[1]))
            }, containData: function (t) {
                return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1])
            }, dataToPoints: function (t, e) {
                return t.mapArray(["x", "y"], function (t, e) {
                    return this.dataToPoint([t, e])
                }, e, this)
            }, dataToPoint: function (t, e) {
                var i = this.getAxis("x"), n = this.getAxis("y");
                return [i.toGlobalCoord(i.dataToCoord(t[0], e)), n.toGlobalCoord(n.dataToCoord(t[1], e))]
            }, pointToData: function (t, e) {
                var i = this.getAxis("x"), n = this.getAxis("y");
                return [i.coordToData(i.toLocalCoord(t[0]), e), n.coordToData(n.toLocalCoord(t[1]), e)]
            }, getOtherAxis: function (t) {
                return this.getAxis("x" === t.dim ? "y" : "x")
            }
        }, r.inherits(n, o), t.exports = n
    }, function (t, e, i) {
        "use strict";
        i(53);
        var n = i(11);
        t.exports = n.extend({
            type: "grid",
            dependencies: ["xAxis", "yAxis"],
            layoutMode: "box",
            coordinateSystem: null,
            defaultOption: {
                show: !1,
                zlevel: 0,
                z: 0,
                left: "10%",
                top: 60,
                right: "10%",
                bottom: 60,
                containLabel: !1,
                backgroundColor: "rgba(0,0,0,0)",
                borderWidth: 1,
                borderColor: "#ccc"
            }
        })
    }, function (t, e, i) {
        "use strict";
        var n = i(1), r = i(22);
        t.exports = function (t) {
            var e = t.model, i = e.getModel("axisLabel"), o = i.get("interval");
            return "category" !== t.type || "auto" !== o ? "auto" === o ? 0 : o : r.getAxisLabelInterval(n.map(t.scale.getTicks(), t.dataToCoord, t), e.getFormattedLabels(), i.getModel("textStyle").getFont(), t.isHorizontal())
        }
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            return t.get("stack") || "__ec_stack_" + t.seriesIndex
        }

        function r(t) {
            return t.dim + t.index
        }

        function o(t, e) {
            var i = {};
            s.each(t, function (t, e) {
                var o = t.getData(), a = t.coordinateSystem, s = a.getBaseAxis(), l = s.getExtent(), h = "category" === s.type ? s.getBandWidth() : Math.abs(l[1] - l[0]) / o.count(), c = i[r(s)] || {
                        bandWidth: h,
                        remainedWidth: h,
                        autoWidthCount: 0,
                        categoryGap: "20%",
                        gap: "30%",
                        stacks: {}
                    }, d = c.stacks;
                i[r(s)] = c;
                var f = n(t);
                d[f] || c.autoWidthCount++, d[f] = d[f] || {width: 0, maxWidth: 0};
                var p = u(t.get("barWidth"), h), g = u(t.get("barMaxWidth"), h), v = t.get("barGap"), m = t.get("barCategoryGap");
                p && !d[f].width && (p = Math.min(c.remainedWidth, p), d[f].width = p, c.remainedWidth -= p), g && (d[f].maxWidth = g), null != v && (c.gap = v), null != m && (c.categoryGap = m)
            });
            var o = {};
            return s.each(i, function (t, e) {
                o[e] = {};
                var i = t.stacks, n = t.bandWidth, r = u(t.categoryGap, n), a = u(t.gap, 1), l = t.remainedWidth, h = t.autoWidthCount, c = (l - r) / (h + (h - 1) * a);
                c = Math.max(c, 0), s.each(i, function (t, e) {
                    var i = t.maxWidth;
                    !t.width && i && c > i && (i = Math.min(i, l), l -= i, t.width = i, h--)
                }), c = (l - r) / (h + (h - 1) * a), c = Math.max(c, 0);
                var d, f = 0;
                s.each(i, function (t, e) {
                    t.width || (t.width = c), d = t, f += t.width * (1 + a)
                }), d && (f -= d.width * a);
                var p = -f / 2;
                s.each(i, function (t, i) {
                    o[e][i] = o[e][i] || {offset: p, width: t.width}, p += t.width * (1 + a)
                })
            }), o
        }

        function a(t, e, i) {
            var a = o(s.filter(e.getSeriesByType(t), function (t) {
                return !e.isSeriesFiltered(t) && t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type
            })), l = {};
            e.eachSeriesByType(t, function (t) {
                var e = t.getData(), i = t.coordinateSystem, o = i.getBaseAxis(), s = n(t), u = a[r(o)][s], h = u.offset, c = u.width, d = i.getOtherAxis(o), f = t.get("barMinHeight") || 0, p = o.onZero ? d.toGlobalCoord(d.dataToCoord(0)) : d.getGlobalExtent()[0], g = i.dataToPoints(e, !0);
                l[s] = l[s] || [], e.setLayout({offset: h, size: c}), e.each(d.dim, function (t, i) {
                    if (!isNaN(t)) {
                        l[s][i] || (l[s][i] = {p: p, n: p});
                        var n, r, o, a, u = t >= 0 ? "p" : "n", v = g[i], m = l[s][i][u];
                        d.isHorizontal() ? (n = m, r = v[1] + h, o = v[0] - m, a = c, Math.abs(o) < f && (o = (0 > o ? -1 : 1) * f), l[s][i][u] += o) : (n = v[0] + h, r = m, o = c, a = v[1] - m, Math.abs(a) < f && (a = (0 >= a ? -1 : 1) * f), l[s][i][u] += a), e.setItemLayout(i, {
                            x: n,
                            y: r,
                            width: o,
                            height: a
                        })
                    }
                }, !0)
            }, this)
        }

        var s = i(1), l = i(4), u = l.parsePercent;
        t.exports = a
    }, function (t, e, i) {
        var n = i(3), r = i(1), o = Math.PI;
        t.exports = function (t, e) {
            e = e || {}, r.defaults(e, {
                text: "loading",
                color: "#c23531",
                textColor: "#000",
                maskColor: "rgba(255, 255, 255, 0.8)",
                zlevel: 0
            });
            var i = new n.Rect({
                style: {fill: e.maskColor},
                zlevel: e.zlevel,
                z: 1e4
            }), a = new n.Arc({
                shape: {startAngle: -o / 2, endAngle: -o / 2 + .1, r: 10},
                style: {stroke: e.color, lineCap: "round", lineWidth: 5},
                zlevel: e.zlevel,
                z: 10001
            }), s = new n.Rect({
                style: {
                    fill: "none",
                    text: e.text,
                    textPosition: "right",
                    textDistance: 10,
                    textFill: e.textColor
                }, zlevel: e.zlevel, z: 10001
            });
            a.animateShape(!0).when(1e3, {endAngle: 3 * o / 2}).start("circularInOut"), a.animateShape(!0).when(1e3, {startAngle: 3 * o / 2}).delay(300).start("circularInOut");
            var l = new n.Group;
            return l.add(a), l.add(s), l.add(i), l.resize = function () {
                var e = t.getWidth() / 2, n = t.getHeight() / 2;
                a.setShape({cx: e, cy: n});
                var r = a.shape.r;
                s.setShape({x: e - r, y: n - r, width: 2 * r, height: 2 * r}), i.setShape({
                    x: 0,
                    y: 0,
                    width: t.getWidth(),
                    height: t.getHeight()
                })
            }, l.resize(), l
        }
    }, function (t, e, i) {
        function n(t, e) {
            for (var i in e)_.hasClass(i) || ("object" == typeof e[i] ? t[i] = t[i] ? c.merge(t[i], e[i], !1) : c.clone(e[i]) : null == t[i] && (t[i] = e[i]))
        }

        function r(t) {
            t = t, this.option = {}, this.option[w] = 1, this._componentsMap = {}, this._seriesIndices = null, n(t, this._theme.option), c.merge(t, b, !1), this.mergeOption(t)
        }

        function o(t, e) {
            c.isArray(e) || (e = e ? [e] : []);
            var i = {};
            return p(e, function (e) {
                i[e] = (t[e] || []).slice()
            }), i
        }

        function a(t, e) {
            var i = {};
            p(e, function (t, e) {
                var n = t.exist;
                n && (i[n.id] = t)
            }), p(e, function (e, n) {
                var r = e.option;
                if (c.assert(!r || null == r.id || !i[r.id] || i[r.id] === e, "id duplicates: " + (r && r.id)), r && null != r.id && (i[r.id] = e), x(r)) {
                    var o = s(t, r, e.exist);
                    e.keyInfo = {mainType: t, subType: o}
                }
            }), p(e, function (t, e) {
                var n = t.exist, r = t.option, o = t.keyInfo;
                if (x(r)) {
                    if (o.name = null != r.name ? r.name + "" : n ? n.name : "\x00-", n)o.id = n.id; else if (null != r.id)o.id = r.id + ""; else {
                        var a = 0;
                        do o.id = "\x00" + o.name + "\x00" + a++; while (i[o.id])
                    }
                    i[o.id] = t
                }
            })
        }

        function s(t, e, i) {
            var n = e.type ? e.type : i ? i.subType : _.determineSubType(t, e);
            return n
        }

        function l(t) {
            return v(t, function (t) {
                    return t.componentIndex
                }) || []
        }

        function u(t, e) {
            return e.hasOwnProperty("subType") ? g(t, function (t) {
                return t.subType === e.subType
            }) : t
        }

        function h(t) {
        }

        var c = i(1), d = i(10), f = i(8), p = c.each, g = c.filter, v = c.map, m = c.isArray, y = c.indexOf, x = c.isObject, _ = i(11), b = i(123), w = "\x00_ec_inner", S = f.extend({
            constructor: S, init: function (t, e, i, n) {
                i = i || {}, this.option = null, this._theme = new f(i), this._optionManager = n
            }, setOption: function (t, e) {
                c.assert(!(w in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption()
            }, resetOption: function (t) {
                var e = !1, i = this._optionManager;
                if (!t || "recreate" === t) {
                    var n = i.mountOption("recreate" === t);
                    this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(n)) : r.call(this, n), e = !0
                }
                if ("timeline" !== t && "media" !== t || this.restoreData(), !t || "recreate" === t || "timeline" === t) {
                    var o = i.getTimelineOption(this);
                    o && (this.mergeOption(o), e = !0)
                }
                if (!t || "recreate" === t || "media" === t) {
                    var a = i.getMediaOption(this, this._api);
                    a.length && p(a, function (t) {
                        this.mergeOption(t, e = !0)
                    }, this)
                }
                return e
            }, mergeOption: function (t) {
                function e(e, r) {
                    var s = d.normalizeToArray(t[e]), u = d.mappingToExists(n[e], s);
                    a(e, u);
                    var h = o(n, r);
                    i[e] = [], n[e] = [], p(u, function (t, r) {
                        var o = t.exist, a = t.option;
                        if (c.assert(x(a) || o, "Empty component definition"), a) {
                            var s = _.getClass(e, t.keyInfo.subType, !0);
                            if (o && o instanceof s)o.mergeOption(a, this), o.optionUpdated(a, !1); else {
                                var l = c.extend({dependentModels: h, componentIndex: r}, t.keyInfo);
                                o = new s(a, this, this, l), o.init(a, this, this, l), o.optionUpdated(null, !0)
                            }
                        } else o.mergeOption({}, this), o.optionUpdated({}, !1);
                        n[e][r] = o, i[e][r] = o.option
                    }, this), "series" === e && (this._seriesIndices = l(n.series))
                }

                var i = this.option, n = this._componentsMap, r = [];
                p(t, function (t, e) {
                    null != t && (_.hasClass(e) ? r.push(e) : i[e] = null == i[e] ? c.clone(t) : c.merge(i[e], t, !0))
                }), _.topologicalTravel(r, _.getAllClassMainTypes(), e, this)
            }, getOption: function () {
                var t = c.clone(this.option);
                return p(t, function (e, i) {
                    if (_.hasClass(i)) {
                        for (var e = d.normalizeToArray(e), n = e.length - 1; n >= 0; n--)d.isIdInner(e[n]) && e.splice(n, 1);
                        t[i] = e
                    }
                }), delete t[w], t
            }, getTheme: function () {
                return this._theme
            }, getComponent: function (t, e) {
                var i = this._componentsMap[t];
                return i ? i[e || 0] : void 0
            }, queryComponents: function (t) {
                var e = t.mainType;
                if (!e)return [];
                var i = t.index, n = t.id, r = t.name, o = this._componentsMap[e];
                if (!o || !o.length)return [];
                var a;
                if (null != i)m(i) || (i = [i]), a = g(v(i, function (t) {
                    return o[t]
                }), function (t) {
                    return !!t
                }); else if (null != n) {
                    var s = m(n);
                    a = g(o, function (t) {
                        return s && y(n, t.id) >= 0 || !s && t.id === n
                    })
                } else if (null != r) {
                    var l = m(r);
                    a = g(o, function (t) {
                        return l && y(r, t.name) >= 0 || !l && t.name === r
                    })
                }
                return u(a, t)
            }, findComponents: function (t) {
                function e(t) {
                    var e = r + "Index", i = r + "Id", n = r + "Name";
                    return t && (t.hasOwnProperty(e) || t.hasOwnProperty(i) || t.hasOwnProperty(n)) ? {
                        mainType: r,
                        index: t[e],
                        id: t[i],
                        name: t[n]
                    } : null
                }

                function i(e) {
                    return t.filter ? g(e, t.filter) : e
                }

                var n = t.query, r = t.mainType, o = e(n), a = o ? this.queryComponents(o) : this._componentsMap[r];
                return i(u(a, t))
            }, eachComponent: function (t, e, i) {
                var n = this._componentsMap;
                if ("function" == typeof t)i = e, e = t, p(n, function (t, n) {
                    p(t, function (t, r) {
                        e.call(i, n, t, r)
                    })
                }); else if (c.isString(t))p(n[t], e, i); else if (x(t)) {
                    var r = this.findComponents(t);
                    p(r, e, i)
                }
            }, getSeriesByName: function (t) {
                var e = this._componentsMap.series;
                return g(e, function (e) {
                    return e.name === t
                })
            }, getSeriesByIndex: function (t) {
                return this._componentsMap.series[t]
            }, getSeriesByType: function (t) {
                var e = this._componentsMap.series;
                return g(e, function (e) {
                    return e.subType === t
                })
            }, getSeries: function () {
                return this._componentsMap.series.slice()
            }, eachSeries: function (t, e) {
                h(this), p(this._seriesIndices, function (i) {
                    var n = this._componentsMap.series[i];
                    t.call(e, n, i)
                }, this)
            }, eachRawSeries: function (t, e) {
                p(this._componentsMap.series, t, e)
            }, eachSeriesByType: function (t, e, i) {
                h(this), p(this._seriesIndices, function (n) {
                    var r = this._componentsMap.series[n];
                    r.subType === t && e.call(i, r, n)
                }, this)
            }, eachRawSeriesByType: function (t, e, i) {
                return p(this.getSeriesByType(t), e, i)
            }, isSeriesFiltered: function (t) {
                return h(this), c.indexOf(this._seriesIndices, t.componentIndex) < 0
            }, filterSeries: function (t, e) {
                h(this);
                var i = g(this._componentsMap.series, t, e);
                this._seriesIndices = l(i)
            }, restoreData: function () {
                var t = this._componentsMap;
                this._seriesIndices = l(t.series);
                var e = [];
                p(t, function (t, i) {
                    e.push(i)
                }), _.topologicalTravel(e, _.getAllClassMainTypes(), function (e, i) {
                    p(t[e], function (t) {
                        t.restoreData()
                    })
                })
            }
        });
        c.mixin(S, i(56)), t.exports = S
    }, function (t, e, i) {
        function n(t) {
            this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption
        }

        function r(t, e, i) {
            var n, r, o = [], a = [], s = t.timeline;
            if (t.baseOption && (r = t.baseOption), (s || t.options) && (r = r || {}, o = (t.options || []).slice()), t.media) {
                r = r || {};
                var l = t.media;
                d(l, function (t) {
                    t && t.option && (t.query ? a.push(t) : n || (n = t))
                })
            }
            return r || (r = t), r.timeline || (r.timeline = s), d([r].concat(o).concat(u.map(a, function (t) {
                return t.option
            })), function (t) {
                d(e, function (e) {
                    e(t, i)
                })
            }), {baseOption: r, timelineOptions: o, mediaDefault: n, mediaList: a}
        }

        function o(t, e, i) {
            var n = {width: e, height: i, aspectratio: e / i}, r = !0;
            return u.each(t, function (t, e) {
                var i = e.match(v);
                if (i && i[1] && i[2]) {
                    var o = i[1], s = i[2].toLowerCase();
                    a(n[s], t, o) || (r = !1)
                }
            }), r
        }

        function a(t, e, i) {
            return "min" === i ? t >= e : "max" === i ? e >= t : t === e
        }

        function s(t, e) {
            return t.join(",") === e.join(",")
        }

        function l(t, e) {
            e = e || {}, d(e, function (e, i) {
                if (null != e) {
                    var n = t[i];
                    if (c.hasClass(i)) {
                        e = h.normalizeToArray(e), n = h.normalizeToArray(n);
                        var r = h.mappingToExists(n, e);
                        t[i] = p(r, function (t) {
                            return t.option && t.exist ? g(t.exist, t.option, !0) : t.exist || t.option
                        })
                    } else t[i] = g(n, e, !0)
                }
            })
        }

        var u = i(1), h = i(10), c = i(11), d = u.each, f = u.clone, p = u.map, g = u.merge, v = /^(min|max)?(.+)$/;
        n.prototype = {
            constructor: n, setOption: function (t, e) {
                t = f(t, !0);
                var i = this._optionBackup, n = r.call(this, t, e, !i);
                this._newBaseOption = n.baseOption, i ? (l(i.baseOption, n.baseOption), n.timelineOptions.length && (i.timelineOptions = n.timelineOptions), n.mediaList.length && (i.mediaList = n.mediaList), n.mediaDefault && (i.mediaDefault = n.mediaDefault)) : this._optionBackup = n
            }, mountOption: function (t) {
                var e = this._optionBackup;
                return this._timelineOptions = p(e.timelineOptions, f), this._mediaList = p(e.mediaList, f), this._mediaDefault = f(e.mediaDefault), this._currentMediaIndices = [], f(t ? e.baseOption : this._newBaseOption)
            }, getTimelineOption: function (t) {
                var e, i = this._timelineOptions;
                if (i.length) {
                    var n = t.getComponent("timeline");
                    n && (e = f(i[n.getCurrentIndex()], !0))
                }
                return e
            }, getMediaOption: function (t) {
                var e = this._api.getWidth(), i = this._api.getHeight(), n = this._mediaList, r = this._mediaDefault, a = [], l = [];
                if (!n.length && !r)return l;
                for (var u = 0, h = n.length; h > u; u++)o(n[u].query, e, i) && a.push(u);
                return !a.length && r && (a = [-1]), a.length && !s(a, this._currentMediaIndices) && (l = p(a, function (t) {
                    return f(-1 === t ? r.option : n[t].option)
                })), this._currentMediaIndices = a, l
            }
        }, t.exports = n
    }, function (t, e) {
        var i = "";
        "undefined" != typeof navigator && (i = navigator.platform || ""), t.exports = {
            color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
            grid: {},
            textStyle: {
                fontFamily: i.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
                fontSize: 12,
                fontStyle: "normal",
                fontWeight: "normal"
            },
            blendMode: null,
            animation: !0,
            animationDuration: 1e3,
            animationDurationUpdate: 300,
            animationEasing: "exponentialOut",
            animationEasingUpdate: "cubicOut",
            animationThreshold: 2e3,
            progressiveThreshold: 3e3,
            progressive: 400,
            hoverLayerThreshold: 3e3
        }
    }, function (t, e, i) {
        t.exports = {getAreaStyle: i(31)([["fill", "color"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["opacity"], ["shadowColor"]])}
    }, function (t, e) {
        t.exports = {
            getBoxLayoutParams: function () {
                return {
                    left: this.get("left"),
                    top: this.get("top"),
                    right: this.get("right"),
                    bottom: this.get("bottom"),
                    width: this.get("width"),
                    height: this.get("height")
                }
            }
        }
    }, function (t, e, i) {
        var n = i(31)([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]);
        t.exports = {
            getItemStyle: function (t) {
                var e = n.call(this, t), i = this.getBorderLineDash();
                return i && (e.lineDash = i), e
            }, getBorderLineDash: function () {
                var t = this.get("borderType");
                return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1]
            }
        }
    }, function (t, e, i) {
        var n = i(31)([["lineWidth", "width"], ["stroke", "color"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]);
        t.exports = {
            getLineStyle: function (t) {
                var e = n.call(this, t), i = this.getLineDash();
                return i && (e.lineDash = i), e
            }, getLineDash: function () {
                var t = this.get("type");
                return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1]
            }
        }
    }, function (t, e, i) {
        function n(t, e) {
            return t && t.getShallow(e)
        }

        var r = i(16);
        t.exports = {
            getTextColor: function () {
                var t = this.ecModel;
                return this.getShallow("color") || t && t.get("textStyle.color")
            }, getFont: function () {
                var t = this.ecModel, e = t && t.getModel("textStyle");
                return [this.getShallow("fontStyle") || n(e, "fontStyle"), this.getShallow("fontWeight") || n(e, "fontWeight"), (this.getShallow("fontSize") || n(e, "fontSize") || 12) + "px", this.getShallow("fontFamily") || n(e, "fontFamily") || "sans-serif"].join(" ")
            }, getTextRect: function (t) {
                var e = this.get("textStyle") || {};
                return r.getBoundingRect(t, this.getFont(), e.align, e.baseline)
            }, truncateText: function (t, e, i, n) {
                return r.truncateText(t, e, this.getFont(), i, n)
            }
        }
    }, function (t, e, i) {
        function n(t, e) {
            e = e.split(",");
            for (var i = t, n = 0; n < e.length && (i = i && i[e[n]], null != i); n++);
            return i
        }

        function r(t, e, i, n) {
            e = e.split(",");
            for (var r, o = t, a = 0; a < e.length - 1; a++)r = e[a], null == o[r] && (o[r] = {}), o = o[r];
            (n || null == o[e[a]]) && (o[e[a]] = i)
        }

        function o(t) {
            c(l, function (e) {
                e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]])
            })
        }

        var a = i(1), s = i(130), l = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]], u = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"], h = ["bar", "boxplot", "candlestick", "chord", "effectScatter", "funnel", "gauge", "lines", "graph", "heatmap", "line", "map", "parallel", "pie", "radar", "sankey", "scatter", "treemap"], c = a.each;
        t.exports = function (t) {
            c(t.series, function (t) {
                if (a.isObject(t)) {
                    var e = t.type;
                    if (s(t), "pie" !== e && "gauge" !== e || null != t.clockWise && (t.clockwise = t.clockWise), "gauge" === e) {
                        var i = n(t, "pointer.color");
                        null != i && r(t, "itemStyle.normal.color", i)
                    }
                    for (var l = 0; l < h.length; l++)if (h[l] === t.type) {
                        o(t);
                        break
                    }
                }
            }), t.dataRange && (t.visualMap = t.dataRange), c(u, function (e) {
                var i = t[e];
                i && (a.isArray(i) || (i = [i]), c(i, function (t) {
                    o(t)
                }))
            })
        }
    }, function (t, e, i) {
        function n(t) {
            var e = t && t.itemStyle;
            e && r.each(o, function (i) {
                var n = e.normal, o = e.emphasis;
                n && n[i] && (t[i] = t[i] || {}, t[i].normal ? r.merge(t[i].normal, n[i]) : t[i].normal = n[i], n[i] = null), o && o[i] && (t[i] = t[i] || {}, t[i].emphasis ? r.merge(t[i].emphasis, o[i]) : t[i].emphasis = o[i], o[i] = null)
            })
        }

        var r = i(1), o = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
        t.exports = function (t) {
            if (t) {
                n(t), n(t.markPoint), n(t.markLine);
                var e = t.data;
                if (e) {
                    for (var i = 0; i < e.length; i++)n(e[i]);
                    var o = t.markPoint;
                    if (o && o.data)for (var a = o.data, i = 0; i < a.length; i++)n(a[i]);
                    var s = t.markLine;
                    if (s && s.data)for (var l = s.data, i = 0; i < l.length; i++)r.isArray(l[i]) ? (n(l[i][0]), n(l[i][1])) : n(l[i])
                }
            }
        }
    }, function (t, e) {
        var i = {
            average: function (t) {
                for (var e = 0, i = 0, n = 0; n < t.length; n++)isNaN(t[n]) || (e += t[n], i++);
                return 0 === i ? NaN : e / i
            }, sum: function (t) {
                for (var e = 0, i = 0; i < t.length; i++)e += t[i] || 0;
                return e
            }, max: function (t) {
                for (var e = -(1 / 0), i = 0; i < t.length; i++)t[i] > e && (e = t[i]);
                return e
            }, min: function (t) {
                for (var e = 1 / 0, i = 0; i < t.length; i++)t[i] < e && (e = t[i]);
                return e
            }, nearest: function (t) {
                return t[0]
            }
        }, n = function (t, e) {
            return Math.round(t.length / 2)
        };
        t.exports = function (t, e, r) {
            e.eachSeriesByType(t, function (t) {
                var e = t.getData(), r = t.get("sampling"), o = t.coordinateSystem;
                if ("cartesian2d" === o.type && r) {
                    var a = o.getBaseAxis(), s = o.getOtherAxis(a), l = a.getExtent(), u = l[1] - l[0], h = Math.round(e.count() / u);
                    if (h > 1) {
                        var c;
                        "string" == typeof r ? c = i[r] : "function" == typeof r && (c = r), c && (e = e.downSample(s.dim, 1 / h, c, n), t.setData(e))
                    }
                }
            }, this)
        }
    }, function (t, e, i) {
        var n = i(1), r = i(32), o = i(4), a = i(38), s = r.prototype, l = a.prototype, u = Math.floor, h = Math.ceil, c = Math.pow, d = 10, f = Math.log, p = r.extend({
            type: "log",
            getTicks: function () {
                return n.map(l.getTicks.call(this), function (t) {
                    return o.round(c(d, t))
                })
            },
            getLabel: l.getLabel,
            scale: function (t) {
                return t = s.scale.call(this, t), c(d, t)
            },
            setExtent: function (t, e) {
                t = f(t) / f(d), e = f(e) / f(d), l.setExtent.call(this, t, e)
            },
            getExtent: function () {
                var t = s.getExtent.call(this);
                return t[0] = c(d, t[0]), t[1] = c(d, t[1]), t
            },
            unionExtent: function (t) {
                t[0] = f(t[0]) / f(d), t[1] = f(t[1]) / f(d), s.unionExtent.call(this, t)
            },
            niceTicks: function (t) {
                t = t || 10;
                var e = this._extent, i = e[1] - e[0];
                if (!(i === 1 / 0 || 0 >= i)) {
                    var n = c(10, u(f(i / t) / Math.LN10)), r = t / i * n;
                    .5 >= r && (n *= 10);
                    var a = [o.round(h(e[0] / n) * n), o.round(u(e[1] / n) * n)];
                    this._interval = n, this._niceExtent = a
                }
            },
            niceExtent: l.niceExtent
        });
        n.each(["contain", "normalize"], function (t) {
            p.prototype[t] = function (e) {
                return e = f(e) / f(d), s[t].call(this, e)
            }
        }), p.create = function () {
            return new p
        }, t.exports = p
    }, function (t, e, i) {
        var n = i(1), r = i(32), o = r.prototype, a = r.extend({
            type: "ordinal", init: function (t, e) {
                this._data = t, this._extent = e || [0, t.length - 1]
            }, parse: function (t) {
                return "string" == typeof t ? n.indexOf(this._data, t) : Math.round(t)
            }, contain: function (t) {
                return t = this.parse(t), o.contain.call(this, t) && null != this._data[t]
            }, normalize: function (t) {
                return o.normalize.call(this, this.parse(t))
            }, scale: function (t) {
                return Math.round(o.scale.call(this, t))
            }, getTicks: function () {
                for (var t = [], e = this._extent, i = e[0]; i <= e[1];)t.push(i), i++;
                return t
            }, getLabel: function (t) {
                return this._data[t]
            }, count: function () {
                return this._extent[1] - this._extent[0] + 1
            }, niceTicks: n.noop, niceExtent: n.noop
        });
        a.create = function () {
            return new a
        }, t.exports = a
    }, function (t, e, i) {
        var n = i(1), r = i(4), o = i(9), a = i(38), s = a.prototype, l = Math.ceil, u = Math.floor, h = 1e3, c = 60 * h, d = 60 * c, f = 24 * d, p = function (t, e, i, n) {
            for (; n > i;) {
                var r = i + n >>> 1;
                t[r][2] < e ? i = r + 1 : n = r
            }
            return i
        }, g = a.extend({
            type: "time", getLabel: function (t) {
                var e = this._stepLvl, i = new Date(t);
                return o.formatTime(e[0], i)
            }, niceExtent: function (t, e, i) {
                var n = this._extent;
                if (n[0] === n[1] && (n[0] -= f, n[1] += f), n[1] === -(1 / 0) && n[0] === 1 / 0) {
                    var o = new Date;
                    n[1] = new Date(o.getFullYear(), o.getMonth(), o.getDate()), n[0] = n[1] - f
                }
                this.niceTicks(t);
                var a = this._interval;
                e || (n[0] = r.round(u(n[0] / a) * a)), i || (n[1] = r.round(l(n[1] / a) * a))
            }, niceTicks: function (t) {
                t = t || 10;
                var e = this._extent, i = e[1] - e[0], n = i / t, o = v.length, a = p(v, n, 0, o), s = v[Math.min(a, o - 1)], h = s[2];
                if ("year" === s[0]) {
                    var c = i / h, d = r.nice(c / t, !0);
                    h *= d
                }
                var f = [l(e[0] / h) * h, u(e[1] / h) * h];
                this._stepLvl = s, this._interval = h, this._niceExtent = f
            }, parse: function (t) {
                return +r.parseDate(t)
            }
        });
        n.each(["contain", "normalize"], function (t) {
            g.prototype[t] = function (e) {
                return s[t].call(this, this.parse(e))
            }
        });
        var v = [["hh:mm:ss", 1, h], ["hh:mm:ss", 5, 5 * h], ["hh:mm:ss", 10, 10 * h], ["hh:mm:ss", 15, 15 * h], ["hh:mm:ss", 30, 30 * h], ["hh:mm\nMM-dd", 1, c], ["hh:mm\nMM-dd", 5, 5 * c], ["hh:mm\nMM-dd", 10, 10 * c], ["hh:mm\nMM-dd", 15, 15 * c], ["hh:mm\nMM-dd", 30, 30 * c], ["hh:mm\nMM-dd", 1, d], ["hh:mm\nMM-dd", 2, 2 * d], ["hh:mm\nMM-dd", 6, 6 * d], ["hh:mm\nMM-dd", 12, 12 * d], ["MM-dd\nyyyy", 1, f], ["week", 7, 7 * f], ["month", 1, 31 * f], ["quarter", 3, 380 * f / 4], ["half-year", 6, 380 * f / 2], ["year", 1, 380 * f]];
        g.create = function () {
            return new g
        }, t.exports = g
    }, function (t, e, i) {
        var n = i(29);
        t.exports = function (t) {
            function e(e) {
                var i = (e.visualColorAccessPath || "itemStyle.normal.color").split("."), r = e.getData(), o = e.get(i) || e.getColorFromPalette(e.get("name"));
                r.setVisual("color", o), t.isSeriesFiltered(e) || ("function" != typeof o || o instanceof n || r.each(function (t) {
                    r.setItemVisual(t, "color", o(e.getDataParams(t)))
                }), r.each(function (t) {
                    var e = r.getItemModel(t), n = e.get(i, !0);
                    null != n && r.setItemVisual(t, "color", n)
                }))
            }

            t.eachRawSeries(e)
        }
    }, function (t, e, i) {
        "use strict";
        function n(t, e, i) {
            return {
                type: t,
                event: i,
                target: e,
                cancelBubble: !1,
                offsetX: i.zrX,
                offsetY: i.zrY,
                gestureEvent: i.gestureEvent,
                pinchX: i.pinchX,
                pinchY: i.pinchY,
                pinchScale: i.pinchScale,
                wheelDelta: i.zrDelta
            }
        }

        function r() {
        }

        function o(t, e, i) {
            if (t[t.rectHover ? "rectContain" : "contain"](e, i)) {
                for (var n = t; n;) {
                    if (n.silent || n.clipPath && !n.clipPath.contain(e, i))return !1;
                    n = n.parent
                }
                return !0
            }
            return !1
        }

        var a = i(1), s = i(164), l = i(20);
        r.prototype.dispose = function () {
        };
        var u = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove"], h = function (t, e, i) {
            l.call(this), this.storage = t, this.painter = e, i = i || new r, this.proxy = i, i.handler = this, this._hovered, this._lastTouchMoment, this._lastX, this._lastY, s.call(this), a.each(u, function (t) {
                i.on && i.on(t, this[t], this)
            }, this)
        };
        h.prototype = {
            constructor: h, mousemove: function (t) {
                var e = t.zrX, i = t.zrY, n = this.findHover(e, i, null), r = this._hovered, o = this.proxy;
                this._hovered = n, o.setCursor && o.setCursor(n ? n.cursor : "default"), r && n !== r && r.__zr && this.dispatchToElement(r, "mouseout", t), this.dispatchToElement(n, "mousemove", t), n && n !== r && this.dispatchToElement(n, "mouseover", t)
            }, mouseout: function (t) {
                this.dispatchToElement(this._hovered, "mouseout", t), this.trigger("globalout", {event: t})
            }, resize: function (t) {
                this._hovered = null
            }, dispatch: function (t, e) {
                var i = this[t];
                i && i.call(this, e)
            }, dispose: function () {
                this.proxy.dispose(), this.storage = this.proxy = this.painter = null
            }, setCursorStyle: function (t) {
                var e = this.proxy;
                e.setCursor && e.setCursor(t)
            }, dispatchToElement: function (t, e, i) {
                for (var r = "on" + e, o = n(e, t, i), a = t; a && (a[r] && (o.cancelBubble = a[r].call(a, o)), a.trigger(e, o), a = a.parent, !o.cancelBubble););
                o.cancelBubble || (this.trigger(e, o), this.painter && this.painter.eachOtherLayer(function (t) {
                    "function" == typeof t[r] && t[r].call(t, o), t.trigger && t.trigger(e, o)
                }))
            }, findHover: function (t, e, i) {
                for (var n = this.storage.getDisplayList(), r = n.length - 1; r >= 0; r--)if (!n[r].silent && n[r] !== i && !n[r].ignore && o(n[r], t, e))return n[r]
            }
        }, a.each(["click", "mousedown", "mouseup", "mousewheel", "dblclick"], function (t) {
            h.prototype[t] = function (e) {
                var i = this.findHover(e.zrX, e.zrY, null);
                if ("mousedown" === t)this._downel = i, this._upel = i; else if ("mosueup" === t)this._upel = i; else if ("click" === t && this._downel !== this._upel)return;
                this.dispatchToElement(i, t, e)
            }
        }), a.mixin(h, l), a.mixin(h, s), t.exports = h
    }, function (t, e, i) {
        function n() {
            return !1
        }

        function r(t, e, i, n) {
            var r = document.createElement(e), o = i.getWidth(), a = i.getHeight(), s = r.style;
            return s.position = "absolute", s.left = 0, s.top = 0, s.width = o + "px", s.height = a + "px", r.width = o * n, r.height = a * n, r.setAttribute("data-zr-dom-id", t), r
        }

        var o = i(1), a = i(33), s = i(64), l = i(63), u = function (t, e, i) {
            var s;
            i = i || a.devicePixelRatio, "string" == typeof t ? s = r(t, "canvas", e, i) : o.isObject(t) && (s = t, t = s.id), this.id = t, this.dom = s;
            var l = s.style;
            l && (s.onselectstart = n, l["-webkit-user-select"] = "none", l["user-select"] = "none", l["-webkit-touch-callout"] = "none", l["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)"), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = i
        };
        u.prototype = {
            constructor: u, elCount: 0, __dirty: !0, initContext: function () {
                this.ctx = this.dom.getContext("2d");
                var t = this.dpr;
                1 != t && this.ctx.scale(t, t)
            }, createBackBuffer: function () {
                var t = this.dpr;
                this.domBack = r("back-" + this.id, "canvas", this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 != t && this.ctxBack.scale(t, t)
            }, resize: function (t, e) {
                var i = this.dpr, n = this.dom, r = n.style, o = this.domBack;
                r.width = t + "px", r.height = e + "px", n.width = t * i, n.height = e * i, 1 != i && this.ctx.scale(i, i), o && (o.width = t * i, o.height = e * i, 1 != i && this.ctxBack.scale(i, i))
            }, clear: function (t) {
                var e = this.dom, i = this.ctx, n = e.width, r = e.height, o = this.clearColor, a = this.motionBlur && !t, u = this.lastFrameAlpha, h = this.dpr;
                if (a && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(e, 0, 0, n / h, r / h)), i.clearRect(0, 0, n / h, r / h), o) {
                    var c;
                    o.colorStops ? (c = o.__canvasGradient || s.getGradient(i, o, {
                            x: 0,
                            y: 0,
                            width: n / h,
                            height: r / h
                        }), o.__canvasGradient = c) : o.image && (c = l.prototype.getCanvasPattern.call(o, i)), i.save(), i.fillStyle = c || o, i.fillRect(0, 0, n / h, r / h), i.restore()
                }
                if (a) {
                    var d = this.domBack;
                    i.save(), i.globalAlpha = u, i.drawImage(d, 0, 0, n / h, r / h), i.restore()
                }
            }
        }, t.exports = u
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            return parseInt(t, 10)
        }

        function r(t) {
            return t ? t.isBuildin ? !0 : "function" == typeof t.resize && "function" == typeof t.refresh : !1
        }

        function o(t) {
            t.__unusedCount++
        }

        function a(t) {
            1 == t.__unusedCount && t.clear()
        }

        function s(t, e, i) {
            return x.copy(t.getBoundingRect()), t.transform && x.applyTransform(t.transform), _.width = e, _.height = i, !x.intersect(_)
        }

        function l(t, e) {
            if (t == e)return !1;
            if (!t || !e || t.length !== e.length)return !0;
            for (var i = 0; i < t.length; i++)if (t[i] !== e[i])return !0
        }

        function u(t, e) {
            for (var i = 0; i < t.length; i++) {
                var n, r = t[i];
                r.transform && (n = r.transform, e.transform(n[0], n[1], n[2], n[3], n[4], n[5]));
                var o = r.path;
                o.beginPath(e), r.buildPath(o, r.shape), e.clip(), r.transform && (n = r.invTransform, e.transform(n[0], n[1], n[2], n[3], n[4], n[5]))
            }
        }

        function h(t, e) {
            var i = document.createElement("div"), n = i.style;
            return n.position = "relative", n.overflow = "hidden", n.width = t + "px", n.height = e + "px", i
        }

        var c = i(33), d = i(1), f = i(47), p = i(7), g = i(44), v = i(137), m = i(60), y = 5, x = new p(0, 0, 0, 0), _ = new p(0, 0, 0, 0), b = function (t, e, i) {
            var n = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
            i = i || {}, this.dpr = i.devicePixelRatio || c.devicePixelRatio, this._singleCanvas = n, this.root = t;
            var r = t.style;
            r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;
            var o = this._zlevelList = [], a = this._layers = {};
            if (this._layerConfig = {}, n) {
                var s = t.width, l = t.height;
                this._width = s, this._height = l;
                var u = new v(t, this, 1);
                u.initContext(), a[0] = u, o.push(0)
            } else {
                this._width = this._getWidth(), this._height = this._getHeight();
                var d = this._domRoot = h(this._width, this._height);
                t.appendChild(d)
            }
            this.pathToImage = this._createPathToImage(), this._progressiveLayers = [], this._hoverlayer, this._hoverElements = []
        };
        b.prototype = {
            constructor: b, isSingleCanvas: function () {
                return this._singleCanvas
            }, getViewportRoot: function () {
                return this._singleCanvas ? this._layers[0].dom : this._domRoot
            }, refresh: function (t) {
                var e = this.storage.getDisplayList(!0), i = this._zlevelList;
                this._paintList(e, t);
                for (var n = 0; n < i.length; n++) {
                    var r = i[n], o = this._layers[r];
                    !o.isBuildin && o.refresh && o.refresh()
                }
                return this.refreshHover(), this._progressiveLayers.length && this._startProgessive(), this
            }, addHover: function (t, e) {
                if (!t.__hoverMir) {
                    var i = new t.constructor({style: t.style, shape: t.shape});
                    i.__from = t, t.__hoverMir = i, i.setStyle(e), this._hoverElements.push(i)
                }
            }, removeHover: function (t) {
                var e = t.__hoverMir, i = this._hoverElements, n = d.indexOf(i, e);
                n >= 0 && i.splice(n, 1), t.__hoverMir = null
            }, clearHover: function (t) {
                for (var e = this._hoverElements, i = 0; i < e.length; i++) {
                    var n = e[i].__from;
                    n && (n.__hoverMir = null)
                }
                e.length = 0
            }, refreshHover: function () {
                var t = this._hoverElements, e = t.length, i = this._hoverlayer;
                if (i && i.clear(), e) {
                    g(t, this.storage.displayableSortFunc), i || (i = this._hoverlayer = this.getLayer(1e5));
                    var n = {};
                    i.ctx.save();
                    for (var r = 0; e > r;) {
                        var o = t[r], a = o.__from;
                        a && a.__zr ? (r++, a.invisible || (o.transform = a.transform, o.invTransform = a.invTransform, o.__clipPaths = a.__clipPaths, this._doPaintEl(o, i, !0, n))) : (t.splice(r, 1), a.__hoverMir = null, e--)
                    }
                    i.ctx.restore()
                }
            }, _startProgessive: function () {
                function t() {
                    i === e._progressiveToken && e.storage && (e._doPaintList(e.storage.getDisplayList()), e._furtherProgressive ? (e._progress++, m(t)) : e._progressiveToken = -1)
                }

                var e = this;
                if (e._furtherProgressive) {
                    var i = e._progressiveToken = +new Date;
                    e._progress++, m(t)
                }
            }, _clearProgressive: function () {
                this._progressiveToken = -1, this._progress = 0, d.each(this._progressiveLayers, function (t) {
                    t.__dirty && t.clear()
                })
            }, _paintList: function (t, e) {
                null == e && (e = !1), this._updateLayerStatus(t), this._clearProgressive(), this.eachBuildinLayer(o), this._doPaintList(t, e), this.eachBuildinLayer(a)
            }, _doPaintList: function (t, e) {
                function i(t) {
                    o.save(), o.globalAlpha = 1, o.shadowBlur = 0, n.__dirty = !0, o.drawImage(t.dom, 0, 0, h, c), o.restore(), n.ctx.restore()
                }

                for (var n, r, o, a, s, l, u = 0, h = this._width, c = this._height, p = this._progress, g = 0, v = t.length; v > g; g++) {
                    var m = t[g], x = this._singleCanvas ? 0 : m.zlevel, _ = m.__frame;
                    if (0 > _ && s && (i(s), s = null), r !== x && (o && o.restore(), a = {}, r = x, n = this.getLayer(r), n.isBuildin || f("ZLevel " + r + " has been used by unkown layer " + n.id), o = n.ctx, o.save(), n.__unusedCount = 0, (n.__dirty || e) && n.clear()), n.__dirty || e) {
                        if (_ >= 0) {
                            if (!s) {
                                if (s = this._progressiveLayers[Math.min(u++, y - 1)], s.ctx.save(), s.renderScope = {}, s && s.__progress > s.__maxProgress) {
                                    g = s.__nextIdxNotProg - 1;
                                    continue
                                }
                                l = s.__progress, s.__dirty || (p = l), s.__progress = p + 1
                            }
                            _ === p && this._doPaintEl(m, s, !0, s.renderScope)
                        } else this._doPaintEl(m, n, e, a);
                        m.__dirty = !1
                    }
                }
                s && i(s), o && o.restore(), this._furtherProgressive = !1, d.each(this._progressiveLayers, function (t) {
                    t.__maxProgress >= t.__progress && (this._furtherProgressive = !0)
                }, this)
            }, _doPaintEl: function (t, e, i, n) {
                var r = e.ctx;
                if ((e.__dirty || i) && !t.invisible && 0 !== t.style.opacity && t.scale[0] && t.scale[1] && (!t.culling || !s(t, this._width, this._height))) {
                    var o = t.__clipPaths;
                    (n.prevClipLayer !== e || l(o, n.prevElClipPaths)) && (n.prevElClipPaths && (n.prevClipLayer.ctx.restore(), n.prevClipLayer = n.prevElClipPaths = null, n.prevEl = null), o && (r.save(), u(o, r), n.prevClipLayer = e, n.prevElClipPaths = o)), t.beforeBrush && t.beforeBrush(r), t.brush(r, n.prevEl || null), n.prevEl = t, t.afterBrush && t.afterBrush(r)
                }
            }, getLayer: function (t) {
                if (this._singleCanvas)return this._layers[0];
                var e = this._layers[t];
                return e || (e = new v("zr_" + t, this, this.dpr), e.isBuildin = !0, this._layerConfig[t] && d.merge(e, this._layerConfig[t], !0), this.insertLayer(t, e), e.initContext()), e
            }, insertLayer: function (t, e) {
                var i = this._layers, n = this._zlevelList, o = n.length, a = null, s = -1, l = this._domRoot;
                if (i[t])return void f("ZLevel " + t + " has been used already");
                if (!r(e))return void f("Layer of zlevel " + t + " is not valid");
                if (o > 0 && t > n[0]) {
                    for (s = 0; o - 1 > s && !(n[s] < t && n[s + 1] > t); s++);
                    a = i[n[s]]
                }
                if (n.splice(s + 1, 0, t), a) {
                    var u = a.dom;
                    u.nextSibling ? l.insertBefore(e.dom, u.nextSibling) : l.appendChild(e.dom)
                } else l.firstChild ? l.insertBefore(e.dom, l.firstChild) : l.appendChild(e.dom);
                i[t] = e
            }, eachLayer: function (t, e) {
                var i, n, r = this._zlevelList;
                for (n = 0; n < r.length; n++)i = r[n], t.call(e, this._layers[i], i)
            }, eachBuildinLayer: function (t, e) {
                var i, n, r, o = this._zlevelList;
                for (r = 0; r < o.length; r++)n = o[r], i = this._layers[n], i.isBuildin && t.call(e, i, n)
            }, eachOtherLayer: function (t, e) {
                var i, n, r, o = this._zlevelList;
                for (r = 0; r < o.length; r++)n = o[r], i = this._layers[n], i.isBuildin || t.call(e, i, n)
            }, getLayers: function () {
                return this._layers
            }, _updateLayerStatus: function (t) {
                var e = this._layers, i = this._progressiveLayers, n = {}, r = {};
                this.eachBuildinLayer(function (t, e) {
                    n[e] = t.elCount, t.elCount = 0, t.__dirty = !1
                }), d.each(i, function (t, e) {
                    r[e] = t.elCount, t.elCount = 0, t.__dirty = !1
                });
                for (var o, a, s = 0, l = 0, u = 0, h = t.length; h > u; u++) {
                    var c = t[u], f = this._singleCanvas ? 0 : c.zlevel, p = e[f], g = c.progressive;
                    if (p && (p.elCount++, p.__dirty = p.__dirty || c.__dirty), g >= 0) {
                        a !== g && (a = g, l++);
                        var m = c.__frame = l - 1;
                        if (!o) {
                            var x = Math.min(s, y - 1);
                            o = i[x], o || (o = i[x] = new v("progressive", this, this.dpr), o.initContext()), o.__maxProgress = 0
                        }
                        o.__dirty = o.__dirty || c.__dirty, o.elCount++, o.__maxProgress = Math.max(o.__maxProgress, m), o.__maxProgress >= o.__progress && (p.__dirty = !0)
                    } else c.__frame = -1, o && (o.__nextIdxNotProg = u, s++, o = null)
                }
                o && (s++, o.__nextIdxNotProg = u), this.eachBuildinLayer(function (t, e) {
                    n[e] !== t.elCount && (t.__dirty = !0)
                }), i.length = Math.min(s, y), d.each(i, function (t, e) {
                    r[e] !== t.elCount && (c.__dirty = !0), t.__dirty && (t.__progress = 0)
                })
            }, clear: function () {
                return this.eachBuildinLayer(this._clearLayer), this
            }, _clearLayer: function (t) {
                t.clear()
            }, configLayer: function (t, e) {
                if (e) {
                    var i = this._layerConfig;
                    i[t] ? d.merge(i[t], e, !0) : i[t] = e;
                    var n = this._layers[t];
                    n && d.merge(n, i[t], !0)
                }
            }, delLayer: function (t) {
                var e = this._layers, i = this._zlevelList, n = e[t];
                n && (n.dom.parentNode.removeChild(n.dom), delete e[t], i.splice(d.indexOf(i, t), 1))
            }, resize: function (t, e) {
                var i = this._domRoot;
                if (i.style.display = "none", t = t || this._getWidth(), e = e || this._getHeight(), i.style.display = "", this._width != t || e != this._height) {
                    i.style.width = t + "px", i.style.height = e + "px";
                    for (var n in this._layers)this._layers[n].resize(t, e);
                    this.refresh(!0)
                }
                return this._width = t, this._height = e, this
            }, clearLayer: function (t) {
                var e = this._layers[t];
                e && e.clear()
            }, dispose: function () {
                this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null
            }, getRenderedCanvas: function (t) {
                if (t = t || {}, this._singleCanvas)return this._layers[0].dom;
                var e = new v("image", this, t.pixelRatio || this.dpr);
                e.initContext(), e.clearColor = t.backgroundColor, e.clear();
                for (var i = this.storage.getDisplayList(!0), n = {}, r = 0; r < i.length; r++) {
                    var o = i[r];
                    this._doPaintEl(o, e, !0, n)
                }
                return e.dom
            }, getWidth: function () {
                return this._width
            }, getHeight: function () {
                return this._height
            }, _getWidth: function () {
                var t = this.root, e = document.defaultView.getComputedStyle(t);
                return (t.clientWidth || n(e.width) || n(t.style.width)) - (n(e.paddingLeft) || 0) - (n(e.paddingRight) || 0) | 0
            }, _getHeight: function () {
                var t = this.root, e = document.defaultView.getComputedStyle(t);
                return (t.clientHeight || n(e.height) || n(t.style.height)) - (n(e.paddingTop) || 0) - (n(e.paddingBottom) || 0) | 0
            }, _pathToImage: function (t, e, n, r, o) {
                var a = document.createElement("canvas"), s = a.getContext("2d");
                a.width = n * o, a.height = r * o, s.clearRect(0, 0, n * o, r * o);
                var l = {position: e.position, rotation: e.rotation, scale: e.scale};
                e.position = [0, 0, 0], e.rotation = 0, e.scale = [1, 1], e && e.brush(s);
                var u = i(48), h = new u({id: t, style: {x: 0, y: 0, image: a}});
                return null != l.position && (h.position = e.position = l.position), null != l.rotation && (h.rotation = e.rotation = l.rotation), null != l.scale && (h.scale = e.scale = l.scale), h
            }, _createPathToImage: function () {
                var t = this;
                return function (e, i, n, r) {
                    return t._pathToImage(e, i, n, r, t.dpr)
                }
            }
        }, t.exports = b
    }, function (t, e, i) {
        "use strict";
        function n(t, e) {
            return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel
        }

        var r = i(1), o = i(12), a = i(34), s = i(44), l = function () {
            this._elements = {}, this._roots = [], this._displayList = [], this._displayListLen = 0
        };
        l.prototype = {
            constructor: l, traverse: function (t, e) {
                for (var i = 0; i < this._roots.length; i++)this._roots[i].traverse(t, e)
            }, getDisplayList: function (t, e) {
                return e = e || !1, t && this.updateDisplayList(e), this._displayList
            }, updateDisplayList: function (t) {
                this._displayListLen = 0;
                for (var e = this._roots, i = this._displayList, r = 0, a = e.length; a > r; r++)this._updateAndAddDisplayable(e[r], null, t);
                i.length = this._displayListLen, o.canvasSupported && s(i, n)
            }, _updateAndAddDisplayable: function (t, e, i) {
                if (!t.ignore || i) {
                    t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();
                    var n = t.clipPath;
                    if (n && (n.parent = t, n.updateTransform(), e ? (e = e.slice(), e.push(n)) : e = [n]), t.isGroup) {
                        for (var r = t._children, o = 0; o < r.length; o++) {
                            var a = r[o];
                            t.__dirty && (a.__dirty = !0), this._updateAndAddDisplayable(a, e, i)
                        }
                        t.__dirty = !1
                    } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t
                }
            }, addRoot: function (t) {
                this._elements[t.id] || (t instanceof a && t.addChildrenToStorage(this), this.addToMap(t), this._roots.push(t))
            }, delRoot: function (t) {
                if (null == t) {
                    for (var e = 0; e < this._roots.length; e++) {
                        var i = this._roots[e];
                        i instanceof a && i.delChildrenFromStorage(this)
                    }
                    return this._elements = {}, this._roots = [], this._displayList = [], void(this._displayListLen = 0)
                }
                if (t instanceof Array)for (var e = 0, n = t.length; n > e; e++)this.delRoot(t[e]); else {
                    var o;
                    o = "string" == typeof t ? this._elements[t] : t;
                    var s = r.indexOf(this._roots, o);
                    s >= 0 && (this.delFromMap(o.id), this._roots.splice(s, 1), o instanceof a && o.delChildrenFromStorage(this))
                }
            }, addToMap: function (t) {
                return t instanceof a && (t.__storage = this), t.dirty(), this._elements[t.id] = t, this
            }, get: function (t) {
                return this._elements[t]
            }, delFromMap: function (t) {
                var e = this._elements, i = e[t];
                return i && (delete e[t], i instanceof a && (i.__storage = null)), this
            }, dispose: function () {
                this._elements = this._renderList = this._roots = null
            }, displayableSortFunc: n
        }, t.exports = l
    }, function (t, e, i) {
        "use strict";
        var n = i(1), r = i(24).Dispatcher, o = i(60), a = i(59), s = function (t) {
            t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function () {
                }, this._clips = [], this._running = !1, this._time = 0, r.call(this)
        };
        s.prototype = {
            constructor: s, addClip: function (t) {
                this._clips.push(t)
            }, addAnimator: function (t) {
                t.animation = this;
                for (var e = t.getClips(), i = 0; i < e.length; i++)this.addClip(e[i])
            }, removeClip: function (t) {
                var e = n.indexOf(this._clips, t);
                e >= 0 && this._clips.splice(e, 1)
            }, removeAnimator: function (t) {
                for (var e = t.getClips(), i = 0; i < e.length; i++)this.removeClip(e[i]);
                t.animation = null
            }, _update: function () {
                for (var t = (new Date).getTime(), e = t - this._time, i = this._clips, n = i.length, r = [], o = [], a = 0; n > a; a++) {
                    var s = i[a], l = s.step(t);
                    l && (r.push(l), o.push(s))
                }
                for (var a = 0; n > a;)i[a]._needsRemove ? (i[a] = i[n - 1], i.pop(), n--) : a++;
                n = r.length;
                for (var a = 0; n > a; a++)o[a].fire(r[a]);
                this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update()
            }, start: function () {
                function t() {
                    e._running && (o(t), e._update())
                }

                var e = this;
                this._running = !0, this._time = (new Date).getTime(), o(t)
            }, stop: function () {
                this._running = !1
            }, clear: function () {
                this._clips = []
            }, animate: function (t, e) {
                e = e || {};
                var i = new a(t, e.loop, e.getter, e.setter);
                return i
            }
        }, n.mixin(s, r), t.exports = s
    }, function (t, e, i) {
        function n(t) {
            this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null == t.loop ? !1 : t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart
        }

        var r = i(142);
        n.prototype = {
            constructor: n, step: function (t) {
                this._initialized || (this._startTime = (new Date).getTime() + this._delay, this._initialized = !0);
                var e = (t - this._startTime) / this._life;
                if (!(0 > e)) {
                    e = Math.min(e, 1);
                    var i = this.easing, n = "string" == typeof i ? r[i] : i, o = "function" == typeof n ? n(e) : e;
                    return this.fire("frame", o), 1 == e ? this.loop ? (this.restart(), "restart") : (this._needsRemove = !0, "destroy") : null
                }
            }, restart: function () {
                var t = (new Date).getTime(), e = (t - this._startTime) % this._life;
                this._startTime = (new Date).getTime() - e + this.gap, this._needsRemove = !1
            }, fire: function (t, e) {
                t = "on" + t, this[t] && this[t](this._target, e)
            }
        }, t.exports = n
    }, function (t, e) {
        var i = {
            linear: function (t) {
                return t
            }, quadraticIn: function (t) {
                return t * t
            }, quadraticOut: function (t) {
                return t * (2 - t)
            }, quadraticInOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            }, cubicIn: function (t) {
                return t * t * t
            }, cubicOut: function (t) {
                return --t * t * t + 1
            }, cubicInOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            }, quarticIn: function (t) {
                return t * t * t * t
            }, quarticOut: function (t) {
                return 1 - --t * t * t * t
            }, quarticInOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
            }, quinticIn: function (t) {
                return t * t * t * t * t
            }, quinticOut: function (t) {
                return --t * t * t * t * t + 1
            }, quinticInOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            }, sinusoidalIn: function (t) {
                return 1 - Math.cos(t * Math.PI / 2)
            }, sinusoidalOut: function (t) {
                return Math.sin(t * Math.PI / 2)
            }, sinusoidalInOut: function (t) {
                return .5 * (1 - Math.cos(Math.PI * t))
            }, exponentialIn: function (t) {
                return 0 === t ? 0 : Math.pow(1024, t - 1)
            }, exponentialOut: function (t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            }, exponentialInOut: function (t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)
            }, circularIn: function (t) {
                return 1 - Math.sqrt(1 - t * t)
            }, circularOut: function (t) {
                return Math.sqrt(1 - --t * t)
            }, circularInOut: function (t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            }, elasticIn: function (t) {
                var e, i = .1, n = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)))
            }, elasticOut: function (t) {
                var e, i = .1, n = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
            }, elasticInOut: function (t) {
                var e, i = .1, n = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
            }, backIn: function (t) {
                var e = 1.70158;
                return t * t * ((e + 1) * t - e)
            }, backOut: function (t) {
                var e = 1.70158;
                return --t * t * ((e + 1) * t + e) + 1
            }, backInOut: function (t) {
                var e = 2.5949095;
                return (t *= 2) < 1 ? .5 * (t * t * ((e + 1) * t - e)) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
            }, bounceIn: function (t) {
                return 1 - i.bounceOut(1 - t)
            }, bounceOut: function (t) {
                return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }, bounceInOut: function (t) {
                return .5 > t ? .5 * i.bounceIn(2 * t) : .5 * i.bounceOut(2 * t - 1) + .5
            }
        };
        t.exports = i
    }, function (t, e, i) {
        var n = i(61).normalizeRadian, r = 2 * Math.PI;
        t.exports = {
            containStroke: function (t, e, i, o, a, s, l, u, h) {
                if (0 === l)return !1;
                var c = l;
                u -= t, h -= e;
                var d = Math.sqrt(u * u + h * h);
                if (d - c > i || i > d + c)return !1;
                if (Math.abs(o - a) % r < 1e-4)return !0;
                if (s) {
                    var f = o;
                    o = n(a), a = n(f)
                } else o = n(o), a = n(a);
                o > a && (a += r);
                var p = Math.atan2(h, u);
                return 0 > p && (p += r), p >= o && a >= p || p + r >= o && a >= p + r
            }
        }
    }, function (t, e, i) {
        var n = i(17);
        t.exports = {
            containStroke: function (t, e, i, r, o, a, s, l, u, h, c) {
                if (0 === u)return !1;
                var d = u;
                if (c > e + d && c > r + d && c > a + d && c > l + d || e - d > c && r - d > c && a - d > c && l - d > c || h > t + d && h > i + d && h > o + d && h > s + d || t - d > h && i - d > h && o - d > h && s - d > h)return !1;
                var f = n.cubicProjectPoint(t, e, i, r, o, a, s, l, h, c, null);
                return d / 2 >= f
            }
        }
    }, function (t, e, i) {
        "use strict";
        function n(t, e) {
            return Math.abs(t - e) < x
        }

        function r() {
            var t = b[0];
            b[0] = b[1], b[1] = t
        }

        function o(t, e, i, n, o, a, s, l, u, h) {
            if (h > e && h > n && h > a && h > l || e > h && n > h && a > h && l > h)return 0;
            var c = g.cubicRootAt(e, n, a, l, h, _);
            if (0 === c)return 0;
            for (var d, f, p = 0, v = -1, m = 0; c > m; m++) {
                var y = _[m], x = 0 === y || 1 === y ? .5 : 1, w = g.cubicAt(t, i, o, s, y);
                u > w || (0 > v && (v = g.cubicExtrema(e, n, a, l, b), b[1] < b[0] && v > 1 && r(), d = g.cubicAt(e, n, a, l, b[0]), v > 1 && (f = g.cubicAt(e, n, a, l, b[1]))), p += 2 == v ? y < b[0] ? e > d ? x : -x : y < b[1] ? d > f ? x : -x : f > l ? x : -x : y < b[0] ? e > d ? x : -x : d > l ? x : -x)
            }
            return p
        }

        function a(t, e, i, n, r, o, a, s) {
            if (s > e && s > n && s > o || e > s && n > s && o > s)return 0;
            var l = g.quadraticRootAt(e, n, o, s, _);
            if (0 === l)return 0;
            var u = g.quadraticExtremum(e, n, o);
            if (u >= 0 && 1 >= u) {
                for (var h = 0, c = g.quadraticAt(e, n, o, u), d = 0; l > d; d++) {
                    var f = 0 === _[d] || 1 === _[d] ? .5 : 1, p = g.quadraticAt(t, i, r, _[d]);
                    a > p || (h += _[d] < u ? e > c ? f : -f : c > o ? f : -f)
                }
                return h
            }
            var f = 0 === _[0] || 1 === _[0] ? .5 : 1, p = g.quadraticAt(t, i, r, _[0]);
            return a > p ? 0 : e > o ? f : -f
        }

        function s(t, e, i, n, r, o, a, s) {
            if (s -= e, s > i || -i > s)return 0;
            var l = Math.sqrt(i * i - s * s);
            _[0] = -l, _[1] = l;
            var u = Math.abs(n - r);
            if (1e-4 > u)return 0;
            if (1e-4 > u % y) {
                n = 0, r = y;
                var h = o ? 1 : -1;
                return a >= _[0] + t && a <= _[1] + t ? h : 0
            }
            if (o) {
                var l = n;
                n = p(r), r = p(l)
            } else n = p(n), r = p(r);
            n > r && (r += y);
            for (var c = 0, d = 0; 2 > d; d++) {
                var f = _[d];
                if (f + t > a) {
                    var g = Math.atan2(s, f), h = o ? 1 : -1;
                    0 > g && (g = y + g), (g >= n && r >= g || g + y >= n && r >= g + y) && (g > Math.PI / 2 && g < 1.5 * Math.PI && (h = -h), c += h)
                }
            }
            return c
        }

        function l(t, e, i, r, l) {
            for (var h = 0, p = 0, g = 0, y = 0, x = 0, _ = 0; _ < t.length;) {
                var b = t[_++];
                switch (b === u.M && _ > 1 && (i || (h += v(p, g, y, x, r, l))), 1 == _ && (p = t[_], g = t[_ + 1], y = p, x = g), b) {
                    case u.M:
                        y = t[_++], x = t[_++], p = y, g = x;
                        break;
                    case u.L:
                        if (i) {
                            if (m(p, g, t[_], t[_ + 1], e, r, l))return !0
                        } else h += v(p, g, t[_], t[_ + 1], r, l) || 0;
                        p = t[_++], g = t[_++];
                        break;
                    case u.C:
                        if (i) {
                            if (c.containStroke(p, g, t[_++], t[_++], t[_++], t[_++], t[_], t[_ + 1], e, r, l))return !0
                        } else h += o(p, g, t[_++], t[_++], t[_++], t[_++], t[_], t[_ + 1], r, l) || 0;
                        p = t[_++], g = t[_++];
                        break;
                    case u.Q:
                        if (i) {
                            if (d.containStroke(p, g, t[_++], t[_++], t[_], t[_ + 1], e, r, l))return !0
                        } else h += a(p, g, t[_++], t[_++], t[_], t[_ + 1], r, l) || 0;
                        p = t[_++], g = t[_++];
                        break;
                    case u.A:
                        var w = t[_++], S = t[_++], M = t[_++], A = t[_++], I = t[_++], T = t[_++], L = (t[_++], 1 - t[_++]), C = Math.cos(I) * M + w, D = Math.sin(I) * A + S;
                        _ > 1 ? h += v(p, g, C, D, r, l) : (y = C, x = D);
                        var P = (r - w) * A / M + w;
                        if (i) {
                            if (f.containStroke(w, S, A, I, I + T, L, e, P, l))return !0
                        } else h += s(w, S, A, I, I + T, L, P, l);
                        p = Math.cos(I + T) * M + w, g = Math.sin(I + T) * A + S;
                        break;
                    case u.R:
                        y = p = t[_++], x = g = t[_++];
                        var k = t[_++], z = t[_++], C = y + k, D = x + z;
                        if (i) {
                            if (m(y, x, C, x, e, r, l) || m(C, x, C, D, e, r, l) || m(C, D, y, D, e, r, l) || m(y, D, y, x, e, r, l))return !0
                        } else h += v(C, x, C, D, r, l), h += v(y, D, y, x, r, l);
                        break;
                    case u.Z:
                        if (i) {
                            if (m(p, g, y, x, e, r, l))return !0
                        } else h += v(p, g, y, x, r, l);
                        p = y, g = x
                }
            }
            return i || n(g, x) || (h += v(p, g, y, x, r, l) || 0), 0 !== h
        }

        var u = i(28).CMD, h = i(82), c = i(144), d = i(83), f = i(143), p = i(61).normalizeRadian, g = i(17), v = i(84), m = h.containStroke, y = 2 * Math.PI, x = 1e-4, _ = [-1, -1, -1], b = [-1, -1];
        t.exports = {
            contain: function (t, e, i) {
                return l(t, 0, !1, e, i)
            }, containStroke: function (t, e, i, n) {
                return l(t, e, !0, i, n)
            }
        }
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            var e = t[1][0] - t[0][0], i = t[1][1] - t[0][1];
            return Math.sqrt(e * e + i * i)
        }

        function r(t) {
            return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
        }

        var o = i(24), a = function () {
            this._track = []
        };
        a.prototype = {
            constructor: a, recognize: function (t, e, i) {
                return this._doTrack(t, e, i), this._recognize(t)
            }, clear: function () {
                return this._track.length = 0, this
            }, _doTrack: function (t, e, i) {
                var n = t.touches;
                if (n) {
                    for (var r = {points: [], touches: [], target: e, event: t}, a = 0, s = n.length; s > a; a++) {
                        var l = n[a], u = o.clientToLocal(i, l);
                        r.points.push([u.zrX, u.zrY]), r.touches.push(l)
                    }
                    this._track.push(r)
                }
            }, _recognize: function (t) {
                for (var e in s)if (s.hasOwnProperty(e)) {
                    var i = s[e](this._track, t);
                    if (i)return i
                }
            }
        };
        var s = {
            pinch: function (t, e) {
                var i = t.length;
                if (i) {
                    var o = (t[i - 1] || {}).points, a = (t[i - 2] || {}).points || o;
                    if (a && a.length > 1 && o && o.length > 1) {
                        var s = n(o) / n(a);
                        !isFinite(s) && (s = 1), e.pinchScale = s;
                        var l = r(o);
                        return e.pinchX = l[0], e.pinchY = l[1], {type: "pinch", target: t[0].target, event: e}
                    }
                }
            }
        };
        t.exports = a
    }, function (t, e) {
        var i = function () {
            this.head = null, this.tail = null, this._len = 0
        }, n = i.prototype;
        n.insert = function (t) {
            var e = new r(t);
            return this.insertEntry(e), e
        }, n.insertEntry = function (t) {
            this.head ? (this.tail.next = t, t.prev = this.tail, this.tail = t) : this.head = this.tail = t, this._len++
        }, n.remove = function (t) {
            var e = t.prev, i = t.next;
            e ? e.next = i : this.head = i, i ? i.prev = e : this.tail = e, t.next = t.prev = null, this._len--
        }, n.len = function () {
            return this._len
        };
        var r = function (t) {
            this.value = t, this.next, this.prev
        }, o = function (t) {
            this._list = new i, this._map = {}, this._maxSize = t || 10
        }, a = o.prototype;
        a.put = function (t, e) {
            var i = this._list, n = this._map;
            if (null == n[t]) {
                var r = i.len();
                if (r >= this._maxSize && r > 0) {
                    var o = i.head;
                    i.remove(o), delete n[o.key]
                }
                var a = i.insert(e);
                a.key = t, n[t] = a
            }
        }, a.get = function (t) {
            var e = this._map[t], i = this._list;
            return null != e ? (e !== i.tail && (i.remove(e), i.insertEntry(e)), e.value) : void 0
        }, a.clear = function () {
            this._list.clear(), this._map = {}
        }, t.exports = o
    }, function (t, e, i) {
        function n(t) {
            return "mousewheel" === t && d.browser.firefox ? "DOMMouseScroll" : t
        }

        function r(t, e, i) {
            var n = t._gestureMgr;
            "start" === i && n.clear();
            var r = n.recognize(e, t.handler.findHover(e.zrX, e.zrY, null), t.dom);
            if ("end" === i && n.clear(), r) {
                var o = r.type;
                e.gestureEvent = o, t.handler.dispatchToElement(r.target, o, r.event)
            }
        }

        function o(t) {
            t._touching = !0, clearTimeout(t._touchTimer), t._touchTimer = setTimeout(function () {
                t._touching = !1
            }, 700)
        }

        function a() {
            return d.touchEventsSupported
        }

        function s(t) {
            function e(t, e) {
                return function () {
                    return e._touching ? void 0 : t.apply(e, arguments)
                }
            }

            for (var i = 0; i < x.length; i++) {
                var n = x[i];
                t._handlers[n] = h.bind(_[n], t)
            }
            for (var i = 0; i < y.length; i++) {
                var n = y[i];
                t._handlers[n] = e(_[n], t)
            }
        }

        function l(t) {
            function e(e, i) {
                h.each(e, function (e) {
                    p(t, n(e), i._handlers[e])
                }, i)
            }

            c.call(this), this.dom = t, this._touching = !1, this._touchTimer, this._gestureMgr = new f, this._handlers = {}, s(this), a() && e(x, this), e(y, this)
        }

        var u = i(24), h = i(1), c = i(20), d = i(12), f = i(146), p = u.addEventListener, g = u.removeEventListener, v = u.normalizeEvent, m = 300, y = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove"], x = ["touchstart", "touchend", "touchmove"], _ = {
            mousemove: function (t) {
                t = v(this.dom, t), this.trigger("mousemove", t)
            }, mouseout: function (t) {
                t = v(this.dom, t);
                var e = t.toElement || t.relatedTarget;
                if (e != this.dom)for (; e && 9 != e.nodeType;) {
                    if (e === this.dom)return;
                    e = e.parentNode
                }
                this.trigger("mouseout", t)
            }, touchstart: function (t) {
                t = v(this.dom, t), this._lastTouchMoment = new Date, r(this, t, "start"), _.mousemove.call(this, t), _.mousedown.call(this, t), o(this)
            }, touchmove: function (t) {
                t = v(this.dom, t), r(this, t, "change"), _.mousemove.call(this, t), o(this)
            }, touchend: function (t) {
                t = v(this.dom, t), r(this, t, "end"), _.mouseup.call(this, t), +new Date - this._lastTouchMoment < m && _.click.call(this, t), o(this)
            }
        };
        h.each(["click", "mousedown", "mouseup", "mousewheel", "dblclick"], function (t) {
            _[t] = function (e) {
                e = v(this.dom, e), this.trigger(t, e)
            }
        });
        var b = l.prototype;
        b.dispose = function () {
            for (var t = y.concat(x), e = 0; e < t.length; e++) {
                var i = t[e];
                g(this.dom, n(i), this._handlers[i])
            }
        }, b.setCursor = function (t) {
            this.dom.style.cursor = t || "default"
        }, h.mixin(l, c), t.exports = l
    }, function (t, e, i) {
        var n = i(6);
        t.exports = n.extend({
            type: "compound", shape: {paths: null}, _updatePathDirty: function () {
                for (var t = this.__dirtyPath, e = this.shape.paths, i = 0; i < e.length; i++)t = t || e[i].__dirtyPath;
                this.__dirtyPath = t, this.__dirty = this.__dirty || t
            }, beforeBrush: function () {
                this._updatePathDirty();
                for (var t = this.shape.paths || [], e = this.getGlobalScale(), i = 0; i < t.length; i++)t[i].path.setScale(e[0], e[1])
            }, buildPath: function (t, e) {
                for (var i = e.paths || [], n = 0; n < i.length; n++)i[n].buildPath(t, i[n].shape, !0)
            }, afterBrush: function () {
                for (var t = this.shape.paths, e = 0; e < t.length; e++)t[e].__dirtyPath = !1
            }, getBoundingRect: function () {
                return this._updatePathDirty(), n.prototype.getBoundingRect.call(this)
            }
        })
    }, function (t, e, i) {
        "use strict";
        var n = i(1), r = i(29), o = function (t, e, i, n, o) {
            this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == i ? .5 : i, this.type = "radial", this.global = o || !1, r.call(this, n)
        };
        o.prototype = {constructor: o}, n.inherits(o, r), t.exports = o
    }, function (t, e) {
        t.exports = {
            buildPath: function (t, e) {
                var i, n, r, o, a = e.x, s = e.y, l = e.width, u = e.height, h = e.r;
                0 > l && (a += l, l = -l), 0 > u && (s += u, u = -u), "number" == typeof h ? i = n = r = o = h : h instanceof Array ? 1 === h.length ? i = n = r = o = h[0] : 2 === h.length ? (i = r = h[0], n = o = h[1]) : 3 === h.length ? (i = h[0], n = o = h[1], r = h[2]) : (i = h[0], n = h[1], r = h[2], o = h[3]) : i = n = r = o = 0;
                var c;
                i + n > l && (c = i + n, i *= l / c, n *= l / c), r + o > l && (c = r + o, r *= l / c, o *= l / c), n + r > u && (c = n + r, n *= u / c, r *= u / c), i + o > u && (c = i + o, i *= u / c, o *= u / c), t.moveTo(a + i, s), t.lineTo(a + l - n, s), 0 !== n && t.quadraticCurveTo(a + l, s, a + l, s + n), t.lineTo(a + l, s + u - r), 0 !== r && t.quadraticCurveTo(a + l, s + u, a + l - r, s + u), t.lineTo(a + o, s + u), 0 !== o && t.quadraticCurveTo(a, s + u, a, s + u - o), t.lineTo(a, s + i), 0 !== i && t.quadraticCurveTo(a, s, a + i, s)
            }
        }
    }, function (t, e, i) {
        var n = i(5), r = n.min, o = n.max, a = n.scale, s = n.distance, l = n.add;
        t.exports = function (t, e, i, u) {
            var h, c, d, f, p = [], g = [], v = [], m = [];
            if (u) {
                d = [1 / 0, 1 / 0], f = [-(1 / 0), -(1 / 0)];
                for (var y = 0, x = t.length; x > y; y++)r(d, d, t[y]), o(f, f, t[y]);
                r(d, d, u[0]), o(f, f, u[1])
            }
            for (var y = 0, x = t.length; x > y; y++) {
                var _ = t[y];
                if (i)h = t[y ? y - 1 : x - 1], c = t[(y + 1) % x]; else {
                    if (0 === y || y === x - 1) {
                        p.push(n.clone(t[y]));
                        continue
                    }
                    h = t[y - 1], c = t[y + 1]
                }
                n.sub(g, c, h), a(g, g, e);
                var b = s(_, h), w = s(_, c), S = b + w;
                0 !== S && (b /= S, w /= S), a(v, g, -b), a(m, g, w);
                var M = l([], _, v), A = l([], _, m);
                u && (o(M, M, d), r(M, M, f), o(A, A, d), r(A, A, f)), p.push(M), p.push(A)
            }
            return i && p.push(p.shift()), p
        }
    }, function (t, e, i) {
        function n(t, e, i, n, r, o, a) {
            var s = .5 * (i - t), l = .5 * (n - e);
            return (2 * (e - i) + s + l) * a + (-3 * (e - i) - 2 * s - l) * o + s * r + e
        }

        var r = i(5);
        t.exports = function (t, e) {
            for (var i = t.length, o = [], a = 0, s = 1; i > s; s++)a += r.distance(t[s - 1], t[s]);
            var l = a / 2;
            l = i > l ? i : l;
            for (var s = 0; l > s; s++) {
                var u, h, c, d = s / (l - 1) * (e ? i : i - 1), f = Math.floor(d), p = d - f, g = t[f % i];
                e ? (u = t[(f - 1 + i) % i], h = t[(f + 1) % i], c = t[(f + 2) % i]) : (u = t[0 === f ? f : f - 1], h = t[f > i - 2 ? i - 1 : f + 1], c = t[f > i - 3 ? i - 1 : f + 2]);
                var v = p * p, m = p * v;
                o.push([n(u[0], g[0], h[0], c[0], p, v, m), n(u[1], g[1], h[1], c[1], p, v, m)])
            }
            return o
        }
    }, function (t, e, i) {
        t.exports = i(6).extend({
            type: "arc",
            shape: {cx: 0, cy: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                var i = e.cx, n = e.cy, r = Math.max(e.r, 0), o = e.startAngle, a = e.endAngle, s = e.clockwise, l = Math.cos(o), u = Math.sin(o);
                t.moveTo(l * r + i, u * r + n), t.arc(i, n, r, o, a, !s)
            }
        })
    }, function (t, e, i) {
        "use strict";
        function n(t, e, i) {
            var n = t.cpx2, r = t.cpy2;
            return null === n || null === r ? [(i ? c : u)(t.x1, t.cpx1, t.cpx2, t.x2, e), (i ? c : u)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(i ? h : l)(t.x1, t.cpx1, t.x2, e), (i ? h : l)(t.y1, t.cpy1, t.y2, e)]
        }

        var r = i(17), o = i(5), a = r.quadraticSubdivide, s = r.cubicSubdivide, l = r.quadraticAt, u = r.cubicAt, h = r.quadraticDerivativeAt, c = r.cubicDerivativeAt, d = [];
        t.exports = i(6).extend({
            type: "bezier-curve",
            shape: {x1: 0, y1: 0, x2: 0, y2: 0, cpx1: 0, cpy1: 0, percent: 1},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                var i = e.x1, n = e.y1, r = e.x2, o = e.y2, l = e.cpx1, u = e.cpy1, h = e.cpx2, c = e.cpy2, f = e.percent;
                0 !== f && (t.moveTo(i, n), null == h || null == c ? (1 > f && (a(i, l, r, f, d), l = d[1], r = d[2], a(n, u, o, f, d), u = d[1], o = d[2]), t.quadraticCurveTo(l, u, r, o)) : (1 > f && (s(i, l, h, r, f, d), l = d[1], h = d[2], r = d[3], s(n, u, c, o, f, d), u = d[1], c = d[2], o = d[3]), t.bezierCurveTo(l, u, h, c, r, o)))
            },
            pointAt: function (t) {
                return n(this.shape, t, !1)
            },
            tangentAt: function (t) {
                var e = n(this.shape, t, !0);
                return o.normalize(e, e)
            }
        })
    }, function (t, e, i) {
        "use strict";
        t.exports = i(6).extend({
            type: "circle", shape: {cx: 0, cy: 0, r: 0}, buildPath: function (t, e, i) {
                i && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)
            }
        })
    }, function (t, e, i) {
        t.exports = i(6).extend({
            type: "line",
            shape: {x1: 0, y1: 0, x2: 0, y2: 0, percent: 1},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                var i = e.x1, n = e.y1, r = e.x2, o = e.y2, a = e.percent;
                0 !== a && (t.moveTo(i, n), 1 > a && (r = i * (1 - a) + r * a, o = n * (1 - a) + o * a), t.lineTo(r, o))
            },
            pointAt: function (t) {
                var e = this.shape;
                return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
            }
        })
    }, function (t, e, i) {
        var n = i(65);
        t.exports = i(6).extend({
            type: "polygon",
            shape: {points: null, smooth: !1, smoothConstraint: null},
            buildPath: function (t, e) {
                n.buildPath(t, e, !0)
            }
        })
    }, function (t, e, i) {
        var n = i(65);
        t.exports = i(6).extend({
            type: "polyline",
            shape: {points: null, smooth: !1, smoothConstraint: null},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                n.buildPath(t, e, !1)
            }
        })
    }, function (t, e, i) {
        var n = i(151);
        t.exports = i(6).extend({
            type: "rect",
            shape: {r: 0, x: 0, y: 0, width: 0, height: 0},
            buildPath: function (t, e) {
                var i = e.x, r = e.y, o = e.width, a = e.height;
                e.r ? n.buildPath(t, e) : t.rect(i, r, o, a), t.closePath()
            }
        })
    }, function (t, e, i) {
        t.exports = i(6).extend({
            type: "ring", shape: {cx: 0, cy: 0, r: 0, r0: 0}, buildPath: function (t, e) {
                var i = e.cx, n = e.cy, r = 2 * Math.PI;
                t.moveTo(i + e.r, n), t.arc(i, n, e.r, 0, r, !1), t.moveTo(i + e.r0, n), t.arc(i, n, e.r0, 0, r, !0)
            }
        })
    }, function (t, e, i) {
        t.exports = i(6).extend({
            type: "sector",
            shape: {cx: 0, cy: 0, r0: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0},
            buildPath: function (t, e) {
                var i = e.cx, n = e.cy, r = Math.max(e.r0 || 0, 0), o = Math.max(e.r, 0), a = e.startAngle, s = e.endAngle, l = e.clockwise, u = Math.cos(a), h = Math.sin(a);
                t.moveTo(u * r + i, h * r + n), t.lineTo(u * o + i, h * o + n), t.arc(i, n, o, a, s, !l), t.lineTo(Math.cos(s) * r + i, Math.sin(s) * r + n), 0 !== r && t.arc(i, n, r, s, a, l), t.closePath()
            }
        })
    }, function (t, e, i) {
        "use strict";
        var n = i(59), r = i(1), o = r.isString, a = r.isFunction, s = r.isObject, l = i(47), u = function () {
            this.animators = []
        };
        u.prototype = {
            constructor: u, animate: function (t, e) {
                var i, o = !1, a = this, s = this.__zr;
                if (t) {
                    var u = t.split("."), h = a;
                    o = "shape" === u[0];
                    for (var c = 0, d = u.length; d > c; c++)h && (h = h[u[c]]);
                    h && (i = h)
                } else i = a;
                if (!i)return void l('Property "' + t + '" is not existed in element ' + a.id);
                var f = a.animators, p = new n(i, e);
                return p.during(function (t) {
                    a.dirty(o)
                }).done(function () {
                    f.splice(r.indexOf(f, p), 1)
                }), f.push(p), s && s.animation.addAnimator(p), p
            }, stopAnimation: function (t) {
                for (var e = this.animators, i = e.length, n = 0; i > n; n++)e[n].stop(t);
                return e.length = 0, this
            }, animateTo: function (t, e, i, n, r) {
                function s() {
                    u--, u || r && r()
                }

                o(i) ? (r = n, n = i, i = 0) : a(n) ? (r = n, n = "linear", i = 0) : a(i) ? (r = i, i = 0) : a(e) ? (r = e, e = 500) : e || (e = 500), this.stopAnimation(), this._animateToShallow("", this, t, e, i, n, r);
                var l = this.animators.slice(), u = l.length;
                u || r && r();
                for (var h = 0; h < l.length; h++)l[h].done(s).start(n)
            }, _animateToShallow: function (t, e, i, n, o) {
                var a = {}, l = 0;
                for (var u in i)if (null != e[u])s(i[u]) && !r.isArrayLike(i[u]) ? this._animateToShallow(t ? t + "." + u : u, e[u], i[u], n, o) : (a[u] = i[u], l++); else if (null != i[u])if (t) {
                    var h = {};
                    h[t] = {}, h[t][u] = i[u], this.attr(h)
                } else this.attr(u, i[u]);
                return l > 0 && this.animate(t, !1).when(null == n ? 500 : n, a).delay(o || 0), this
            }
        }, t.exports = u
    }, function (t, e) {
        function i() {
            this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this)
        }

        i.prototype = {
            constructor: i, _dragStart: function (t) {
                var e = t.target;
                e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(e, "dragstart", t.event))
            }, _drag: function (t) {
                var e = this._draggingTarget;
                if (e) {
                    var i = t.offsetX, n = t.offsetY, r = i - this._x, o = n - this._y;
                    this._x = i, this._y = n, e.drift(r, o, t), this.dispatchToElement(e, "drag", t.event);
                    var a = this.findHover(i, n, e), s = this._dropTarget;
                    this._dropTarget = a, e !== a && (s && a !== s && this.dispatchToElement(s, "dragleave", t.event), a && a !== s && this.dispatchToElement(a, "dragenter", t.event))
                }
            }, _dragEnd: function (t) {
                var e = this._draggingTarget;
                e && (e.dragging = !1), this.dispatchToElement(e, "dragend", t.event), this._dropTarget && this.dispatchToElement(this._dropTarget, "drop", t.event), this._draggingTarget = null, this._dropTarget = null
            }
        }, t.exports = i
    }, function (t, e, i) {
        function n(t, e, i, n, r, o, a, s, l, u, h) {
            var g = l * (p / 180), y = f(g) * (t - i) / 2 + d(g) * (e - n) / 2, x = -1 * d(g) * (t - i) / 2 + f(g) * (e - n) / 2, _ = y * y / (a * a) + x * x / (s * s);
            _ > 1 && (a *= c(_), s *= c(_));
            var b = (r === o ? -1 : 1) * c((a * a * (s * s) - a * a * (x * x) - s * s * (y * y)) / (a * a * (x * x) + s * s * (y * y))) || 0, w = b * a * x / s, S = b * -s * y / a, M = (t + i) / 2 + f(g) * w - d(g) * S, A = (e + n) / 2 + d(g) * w + f(g) * S, I = m([1, 0], [(y - w) / a, (x - S) / s]), T = [(y - w) / a, (x - S) / s], L = [(-1 * y - w) / a, (-1 * x - S) / s], C = m(T, L);
            v(T, L) <= -1 && (C = p), v(T, L) >= 1 && (C = 0), 0 === o && C > 0 && (C -= 2 * p), 1 === o && 0 > C && (C += 2 * p), h.addData(u, M, A, a, s, I, C, g, o)
        }

        function r(t) {
            if (!t)return [];
            var e, i = t.replace(/-/g, " -").replace(/  /g, " ").replace(/ /g, ",").replace(/,,/g, ",");
            for (e = 0; e < h.length; e++)i = i.replace(new RegExp(h[e], "g"), "|" + h[e]);
            var r, o = i.split("|"), a = 0, l = 0, u = new s, c = s.CMD;
            for (e = 1; e < o.length; e++) {
                var d, f = o[e], p = f.charAt(0), g = 0, v = f.slice(1).replace(/e,-/g, "e-").split(",");
                v.length > 0 && "" === v[0] && v.shift();
                for (var m = 0; m < v.length; m++)v[m] = parseFloat(v[m]);
                for (; g < v.length && !isNaN(v[g]) && !isNaN(v[0]);) {
                    var y, x, _, b, w, S, M, A = a, I = l;
                    switch (p) {
                        case"l":
                            a += v[g++], l += v[g++], d = c.L, u.addData(d, a, l);
                            break;
                        case"L":
                            a = v[g++], l = v[g++], d = c.L, u.addData(d, a, l);
                            break;
                        case"m":
                            a += v[g++], l += v[g++], d = c.M, u.addData(d, a, l), p = "l";
                            break;
                        case"M":
                            a = v[g++], l = v[g++], d = c.M, u.addData(d, a, l), p = "L";
                            break;
                        case"h":
                            a += v[g++], d = c.L, u.addData(d, a, l);
                            break;
                        case"H":
                            a = v[g++], d = c.L, u.addData(d, a, l);
                            break;
                        case"v":
                            l += v[g++], d = c.L, u.addData(d, a, l);
                            break;
                        case"V":
                            l = v[g++], d = c.L, u.addData(d, a, l);
                            break;
                        case"C":
                            d = c.C, u.addData(d, v[g++], v[g++], v[g++], v[g++], v[g++], v[g++]), a = v[g - 2], l = v[g - 1];
                            break;
                        case"c":
                            d = c.C, u.addData(d, v[g++] + a, v[g++] + l, v[g++] + a, v[g++] + l, v[g++] + a, v[g++] + l), a += v[g - 2], l += v[g - 1];
                            break;
                        case"S":
                            y = a, x = l;
                            var T = u.len(), L = u.data;
                            r === c.C && (y += a - L[T - 4], x += l - L[T - 3]), d = c.C, A = v[g++], I = v[g++], a = v[g++], l = v[g++], u.addData(d, y, x, A, I, a, l);
                            break;
                        case"s":
                            y = a, x = l;
                            var T = u.len(), L = u.data;
                            r === c.C && (y += a - L[T - 4], x += l - L[T - 3]), d = c.C, A = a + v[g++], I = l + v[g++], a += v[g++], l += v[g++], u.addData(d, y, x, A, I, a, l);
                            break;
                        case"Q":
                            A = v[g++], I = v[g++], a = v[g++], l = v[g++], d = c.Q, u.addData(d, A, I, a, l);
                            break;
                        case"q":
                            A = v[g++] + a, I = v[g++] + l, a += v[g++], l += v[g++], d = c.Q, u.addData(d, A, I, a, l);
                            break;
                        case"T":
                            y = a, x = l;
                            var T = u.len(), L = u.data;
                            r === c.Q && (y += a - L[T - 4], x += l - L[T - 3]), a = v[g++], l = v[g++], d = c.Q, u.addData(d, y, x, a, l);
                            break;
                        case"t":
                            y = a, x = l;
                            var T = u.len(), L = u.data;
                            r === c.Q && (y += a - L[T - 4], x += l - L[T - 3]), a += v[g++], l += v[g++], d = c.Q, u.addData(d, y, x, a, l);
                            break;
                        case"A":
                            _ = v[g++], b = v[g++], w = v[g++], S = v[g++], M = v[g++], A = a, I = l, a = v[g++], l = v[g++], d = c.A, n(A, I, a, l, S, M, _, b, w, d, u);
                            break;
                        case"a":
                            _ = v[g++], b = v[g++], w = v[g++], S = v[g++], M = v[g++], A = a, I = l, a += v[g++], l += v[g++], d = c.A, n(A, I, a, l, S, M, _, b, w, d, u)
                    }
                }
                "z" !== p && "Z" !== p || (d = c.Z, u.addData(d)), r = d
            }
            return u.toStatic(), u
        }

        function o(t, e) {
            var i, n = r(t);
            return e = e || {}, e.buildPath = function (t) {
                t.setData(n.data), i && l(t, i);
                var e = t.getContext();
                e && t.rebuildPath(e)
            }, e.applyTransform = function (t) {
                i || (i = u.create()), u.mul(i, t, i)
            }, e
        }

        var a = i(6), s = i(28), l = i(166), u = i(19), h = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"], c = Math.sqrt, d = Math.sin, f = Math.cos, p = Math.PI, g = function (t) {
            return Math.sqrt(t[0] * t[0] + t[1] * t[1])
        }, v = function (t, e) {
            return (t[0] * e[0] + t[1] * e[1]) / (g(t) * g(e))
        }, m = function (t, e) {
            return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(v(t, e))
        };
        t.exports = {
            createFromString: function (t, e) {
                return new a(o(t, e))
            }, extendFromString: function (t, e) {
                return a.extend(o(t, e))
            }, mergePath: function (t, e) {
                for (var i = [], n = t.length, r = 0; n > r; r++) {
                    var o = t[r];
                    o.__dirty && o.buildPath(o.path, o.shape, !0), i.push(o.path)
                }
                var s = new a(e);
                return s.buildPath = function (t) {
                    t.appendPath(i);
                    var e = t.getContext();
                    e && t.rebuildPath(e)
                }, s
            }
        }
    }, function (t, e, i) {
        function n(t, e) {
            var i, n, o, h, c, d, f = t.data, p = r.M, g = r.C, v = r.L, m = r.R, y = r.A, x = r.Q;
            for (o = 0, h = 0; o < f.length;) {
                switch (i = f[o++], h = o, n = 0, i) {
                    case p:
                        n = 1;
                        break;
                    case v:
                        n = 1;
                        break;
                    case g:
                        n = 3;
                        break;
                    case x:
                        n = 2;
                        break;
                    case y:
                        var _ = e[4], b = e[5], w = l(e[0] * e[0] + e[1] * e[1]), S = l(e[2] * e[2] + e[3] * e[3]), M = u(-e[1] / S, e[0] / w);
                        f[o++] += _, f[o++] += b, f[o++] *= w, f[o++] *= S, f[o++] += M, f[o++] += M, o += 2, h = o;
                        break;
                    case m:
                        d[0] = f[o++], d[1] = f[o++], a(d, d, e), f[h++] = d[0], f[h++] = d[1], d[0] += f[o++], d[1] += f[o++], a(d, d, e), f[h++] = d[0], f[h++] = d[1]
                }
                for (c = 0; n > c; c++) {
                    var d = s[c];
                    d[0] = f[o++], d[1] = f[o++], a(d, d, e), f[h++] = d[0], f[h++] = d[1]
                }
            }
        }

        var r = i(28).CMD, o = i(5), a = o.applyTransform, s = [[], [], []], l = Math.sqrt, u = Math.atan2;
        t.exports = n
    }, function (t, e, i) {
        if (!i(12).canvasSupported) {
            var n, r = "urn:schemas-microsoft-com:vml", o = window, a = o.document, s = !1;
            try {
                !a.namespaces.zrvml && a.namespaces.add("zrvml", r), n = function (t) {
                    return a.createElement("<zrvml:" + t + ' class="zrvml">')
                }
            } catch (l) {
                n = function (t) {
                    return a.createElement("<" + t + ' xmlns="' + r + '" class="zrvml">')
                }
            }
            var u = function () {
                if (!s) {
                    s = !0;
                    var t = a.styleSheets;
                    t.length < 31 ? a.createStyleSheet().addRule(".zrvml", "behavior:url(#default#VML)") : t[0].addRule(".zrvml", "behavior:url(#default#VML)")
                }
            };
            t.exports = {doc: a, initVML: u, createNode: n}
        }
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            return null == t.value ? t : t.value
        }

        var r = i(14), o = i(30), a = i(283), s = i(1), l = {
            _baseAxisDim: null, getInitialData: function (t, e) {
                var i, a, s = e.getComponent("xAxis", this.get("xAxisIndex")), l = e.getComponent("yAxis", this.get("yAxisIndex")), u = s.get("type"), h = l.get("type");
                "category" === u ? (t.layout = "horizontal", i = s.getCategories(), a = !0) : "category" === h ? (t.layout = "vertical", i = l.getCategories(), a = !0) : t.layout = t.layout || "horizontal", this._baseAxisDim = "horizontal" === t.layout ? "x" : "y";
                var c = t.data, d = this.dimensions = ["base"].concat(this.valueDimensions);
                o(d, c);
                var f = new r(d, this);
                return f.initData(c, i ? i.slice() : null, function (t, e, i, r) {
                    var o = n(t);
                    return a ? "base" === e ? i : o[r - 1] : o[r]
                }), f
            }, coordDimToDataDim: function (t) {
                var e = this.valueDimensions.slice(), i = ["base"], n = {
                    horizontal: {x: i, y: e},
                    vertical: {x: e, y: i}
                };
                return n[this.get("layout")][t]
            }, dataDimToCoordDim: function (t) {
                var e;
                return s.each(["x", "y"], function (i, n) {
                    var r = this.coordDimToDataDim(i);
                    s.indexOf(r, t) >= 0 && (e = i)
                }, this), e
            }, getBaseAxis: function () {
                var t = this._baseAxisDim;
                return this.ecModel.getComponent(t + "Axis", this.get(t + "AxisIndex")).axis
            }
        }, u = {
            init: function () {
                var t = this._whiskerBoxDraw = new a(this.getStyleUpdater());
                this.group.add(t.group)
            }, render: function (t, e, i) {
                this._whiskerBoxDraw.updateData(t.getData())
            }, remove: function (t) {
                this._whiskerBoxDraw.remove()
            }
        };
        t.exports = {seriesModelMixin: l, viewMixin: u}
    }, function (t, e, i) {
        var n = i(1), r = {
            retrieveTargetInfo: function (t, e) {
                if (t && ("treemapZoomToNode" === t.type || "treemapRootToNode" === t.type)) {
                    var i = e.getData().tree.root, n = t.targetNode;
                    if (n && i.contains(n))return {node: n};
                    var r = t.targetNodeId;
                    if (null != r && (n = i.getNodeById(r)))return {node: n}
                }
            }, getPathToRoot: function (t) {
                for (var e = []; t;)t = t.parentNode, t && e.push(t);
                return e.reverse()
            }, aboveViewRoot: function (t, e) {
                var i = r.getPathToRoot(t);
                return n.indexOf(i, e) >= 0
            }
        };
        t.exports = r
    }, function (t, e, i) {
        function n(t, e) {
            var i, n = this.getBoundingRect(), r = t.get("layoutCenter"), o = t.get("layoutSize"), s = e.getWidth(), u = e.getHeight(), h = t.get("aspectScale") || .75, c = n.width / n.height * h, d = !1;
            r && o && (r = [l.parsePercent(r[0], s), l.parsePercent(r[1], u)], o = l.parsePercent(o, Math.min(s, u)), isNaN(r[0]) || isNaN(r[1]) || isNaN(o) || (d = !0));
            var f;
            if (d) {
                var f = {};
                c > 1 ? (f.width = o, f.height = o / c) : (f.height = o, f.width = o * c), f.y = r[1] - f.height / 2, f.x = r[0] - f.width / 2
            } else i = t.getBoxLayoutParams(), i.aspect = c, f = a.getLayoutRect(i, {width: s, height: u});
            this.setViewRect(f.x, f.y, f.width, f.height), this.setCenter(t.get("center")), this.setZoom(t.get("zoom"))
        }

        function r(t, e) {
            s.each(e.get("geoCoord"), function (e, i) {
                t.addGeoCoord(i, e)
            })
        }

        var o = i(354), a = i(13), s = i(1), l = i(4), u = {}, h = {
            dimensions: o.prototype.dimensions,
            create: function (t, e) {
                var i = [];
                t.eachComponent("geo", function (t, a) {
                    var s = t.get("map"), l = u[s], h = new o(s + a, s, l && l.geoJson, l && l.specialAreas, t.get("nameMap"));
                    h.zoomLimit = t.get("scaleLimit"), i.push(h), r(h, t), t.coordinateSystem = h, h.model = t, h.resize = n, h.resize(t, e)
                }), t.eachSeries(function (t) {
                    var e = t.get("coordinateSystem");
                    if ("geo" === e) {
                        var n = t.get("geoIndex") || 0;
                        t.coordinateSystem = i[n]
                    }
                });
                var a = {};
                return t.eachSeriesByType("map", function (t) {
                    var e = t.get("map");
                    a[e] = a[e] || [], a[e].push(t)
                }), s.each(a, function (t, a) {
                    var l = u[a], h = s.map(t, function (t) {
                        return t.get("nameMap")
                    }), c = new o(a, a, l && l.geoJson, l && l.specialAreas, s.mergeAll(h));
                    c.zoomLimit = s.retrieve.apply(null, s.map(t, function (t) {
                        return t.get("scaleLimit")
                    })), i.push(c), c.resize = n, c.resize(t[0], e), s.each(t, function (t) {
                        t.coordinateSystem = c, r(c, t)
                    })
                }), i
            },
            registerMap: function (t, e, i) {
                e.geoJson && !e.features && (i = e.specialAreas, e = e.geoJson), "string" == typeof e && (e = "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")()), u[t] = {
                    geoJson: e,
                    specialAreas: i
                }
            },
            getMap: function (t) {
                return u[t]
            },
            getFilledRegions: function (t, e) {
                var i = (t || []).slice(), n = h.getMap(e), r = n && n.geoJson;
                if (!r)return t;
                for (var o = {}, a = r.features, s = 0; s < i.length; s++)o[i[s].name] = i[s];
                for (var s = 0; s < a.length; s++) {
                    var l = a[s].properties.name;
                    o[l] || i.push({name: l})
                }
                return i
            }
        }, c = i(2);
        c.registerMap = h.registerMap, c.getMap = h.getMap, c.loadMap = function () {
        }, c.registerCoordinateSystem("geo", h), t.exports = h
    }, function (t, e, i) {
        function n(t) {
            if (t)for (var e in t)if (t.hasOwnProperty(e))return !0
        }

        var r = i(1), o = i(71), a = r.each, s = {
            createVisualMappings: function (t, e, i) {
                function n() {
                    var t = function () {
                    };
                    t.prototype.__hidden = t.prototype;
                    var e = new t;
                    return e
                }

                var s = {};
                return a(e, function (e) {
                    var l = s[e] = n();
                    a(t[e], function (t, n) {
                        if (o.isValidType(n)) {
                            var a = {type: n, visual: t};
                            i && i(a, e), l[n] = new o(a), "opacity" === n && (a = r.clone(a), a.type = "colorAlpha", l.__hidden.__alphaForOpacity = new o(a))
                        }
                    })
                }), s
            }, replaceVisualOption: function (t, e, i) {
                var o;
                r.each(i, function (t) {
                    e.hasOwnProperty(t) && n(e[t]) && (o = !0)
                }), o && r.each(i, function (i) {
                    e.hasOwnProperty(i) && n(e[i]) ? t[i] = r.clone(e[i]) : delete t[i]
                })
            }, applyVisual: function (t, e, i, n, a, s) {
                function l(t) {
                    return i.getItemVisual(d, t)
                }

                function u(t, e) {
                    i.setItemVisual(d, t, e)
                }

                function h(t, i) {
                    d = null == s ? t : i;
                    for (var r = n.call(a, t), o = e[r], h = c[r], f = 0, p = h.length; p > f; f++) {
                        var g = h[f];
                        o[g] && o[g].applyVisual(t, l, u)
                    }
                }

                var c = {};
                r.each(t, function (t) {
                    var i = o.prepareVisualTypes(e[t]);
                    c[t] = i
                });
                var d;
                null == s ? i.each(h, !0) : i.each([s], h, !0)
            }
        };
        t.exports = s
    }, function (t, e, i) {
        function n() {
            this.group = new r.Group, this._symbolEl = new a({})
        }

        var r = i(3), o = i(26), a = r.extendShape({
            shape: {points: null, sizes: null},
            symbolProxy: null,
            buildPath: function (t, e) {
                for (var i = e.points, n = e.sizes, r = this.symbolProxy, o = r.shape, a = 0; a < i.length; a++) {
                    var s = i[a], l = n[a];
                    l[0] < 4 ? t.rect(s[0] - l[0] / 2, s[1] - l[1] / 2, l[0], l[1]) : (o.x = s[0] - l[0] / 2, o.y = s[1] - l[1] / 2, o.width = l[0], o.height = l[1], r.buildPath(t, o, !0))
                }
            },
            findDataIndex: function (t, e) {
                for (var i = this.shape, n = i.points, r = i.sizes, o = n.length - 1; o >= 0; o--) {
                    var a = n[o], s = r[o], l = a[0] - s[0] / 2, u = a[1] - s[1] / 2;
                    if (t >= l && e >= u && t <= l + s[0] && e <= u + s[1])return o
                }
                return -1
            }
        }), s = n.prototype;
        s.updateData = function (t) {
            this.group.removeAll();
            var e = this._symbolEl, i = t.hostModel;
            e.setShape({
                points: t.mapArray(t.getItemLayout), sizes: t.mapArray(function (e) {
                    var i = t.getItemVisual(e, "symbolSize");
                    return i instanceof Array || (i = [i, i]), i
                })
            }), e.symbolProxy = o.createSymbol(t.getVisual("symbol"), 0, 0, 0, 0), e.setColor = e.symbolProxy.setColor, e.useStyle(i.getModel("itemStyle.normal").getItemStyle(["color"]));
            var n = t.getVisual("color");
            n && e.setColor(n), e.seriesIndex = i.seriesIndex, e.on("mousemove", function (t) {
                e.dataIndex = null;
                var i = e.findDataIndex(t.offsetX, t.offsetY);
                i > 0 && (e.dataIndex = i)
            }), this.group.add(e)
        }, s.updateLayout = function (t) {
            var e = t.getData();
            this._symbolEl.setShape({points: e.mapArray(e.getItemLayout)})
        }, s.remove = function () {
            this.group.removeAll()
        }, t.exports = n
    }, function (t, e, i) {
        function n(t) {
            return null == t.cpx1 || null == t.cpy1
        }

        var r = i(3), o = i(5), a = r.Line.prototype, s = r.BezierCurve.prototype;
        t.exports = r.extendShape({
            type: "ec-line",
            style: {stroke: "#000", fill: null},
            shape: {x1: 0, y1: 0, x2: 0, y2: 0, percent: 1, cpx1: null, cpy1: null},
            buildPath: function (t, e) {
                (n(e) ? a : s).buildPath(t, e)
            },
            pointAt: function (t) {
                return n(this.shape) ? a.pointAt.call(this, t) : s.pointAt.call(this, t)
            },
            tangentAt: function (t) {
                var e = this.shape, i = n(e) ? [e.x2 - e.x1, e.y2 - e.y1] : s.tangentAt.call(this, t);
                return o.normalize(i, i)
            }
        })
    }, function (t, e, i) {
        var n = i(1), r = i(2);
        i(175), i(176), r.registerVisual(n.curry(i(46), "scatter", "circle", null)), r.registerLayout(n.curry(i(55), "scatter")), i(36)
    }, function (t, e, i) {
        "use strict";
        var n = i(35), r = i(15);
        t.exports = r.extend({
            type: "series.scatter",
            dependencies: ["grid", "polar"],
            getInitialData: function (t, e) {
                var i = n(t.data, this, e);
                return i
            },
            brushSelector: "point",
            defaultOption: {
                coordinateSystem: "cartesian2d",
                zlevel: 0,
                z: 2,
                legendHoverLink: !0,
                hoverAnimation: !0,
                xAxisIndex: 0,
                yAxisIndex: 0,
                polarIndex: 0,
                geoIndex: 0,
                symbolSize: 10,
                large: !1,
                largeThreshold: 2e3,
                itemStyle: {normal: {opacity: .8}}
            }
        })
    }, function (t, e, i) {
        var n = i(39), r = i(172);
        i(2).extendChartView({
            type: "scatter", init: function () {
                this._normalSymbolDraw = new n, this._largeSymbolDraw = new r
            }, render: function (t, e, i) {
                var n = t.getData(), r = this._largeSymbolDraw, o = this._normalSymbolDraw, a = this.group, s = t.get("large") && n.count() > t.get("largeThreshold") ? r : o;
                this._symbolDraw = s, s.updateData(n), a.add(s.group), a.remove(s === r ? o.group : r.group)
            }, updateLayout: function (t) {
                this._symbolDraw.updateLayout(t)
            }, remove: function (t, e) {
                this._symbolDraw && this._symbolDraw.remove(e, !0)
            }
        })
    }, function (t, e, i) {
        i(109), i(40), i(41), i(183), i(184), i(179), i(180), i(107), i(106)
    }, function (t, e, i) {
        function n(t, e) {
            var i = [1 / 0, -(1 / 0)];
            return u(e, function (e) {
                var n = e.getData();
                n && u(e.coordDimToDataDim(t), function (t) {
                    var e = n.getDataExtent(t);
                    e[0] < i[0] && (i[0] = e[0]), e[1] > i[1] && (i[1] = e[1])
                })
            }, this), i
        }

        function r(t, e, i) {
            var n = i.getAxisModel(), r = n.axis.scale, a = [0, 100], s = [t.start, t.end], c = [];
            return e = e.slice(), o(e, n, r), u(["startValue", "endValue"], function (e) {
                c.push(null != t[e] ? r.parse(t[e]) : null)
            }), u([0, 1], function (t) {
                var i = c[t], n = s[t];
                null != n || null == i ? (null == n && (n = a[t]), i = r.parse(l.linearMap(n, a, e, !0))) : n = l.linearMap(i, e, a, !0), c[t] = i, s[t] = n
            }), {valueWindow: h(c), percentWindow: h(s)}
        }

        function o(t, e, i) {
            return u(["min", "max"], function (n, r) {
                var o = e.get(n, !0);
                null != o && (o + "").toLowerCase() !== "data" + n && (t[r] = i.parse(o))
            }), e.get("scale", !0) || (t[0] > 0 && (t[0] = 0), t[1] < 0 && (t[1] = 0)), t
        }

        function a(t, e) {
            var i = t.getAxisModel(), n = t._percentWindow, r = t._valueWindow;
            if (n) {
                var o = e || 0 === n[0] && 100 === n[1], a = !e && l.getPixelPrecision(r, [0, 500]), s = !(e || 20 > a && a >= 0), u = e || o || s;
                i.setRange && i.setRange(u ? null : +r[0].toFixed(a), u ? null : +r[1].toFixed(a))
            }
        }

        var s = i(1), l = i(4), u = s.each, h = l.asc, c = function (t, e, i, n) {
            this._dimName = t, this._axisIndex = e, this._valueWindow, this._percentWindow, this._dataExtent, this.ecModel = n, this._dataZoomModel = i
        };
        c.prototype = {
            constructor: c, hostedBy: function (t) {
                return this._dataZoomModel === t
            }, getDataExtent: function () {
                return this._dataExtent.slice()
            }, getDataValueWindow: function () {
                return this._valueWindow.slice()
            }, getDataPercentWindow: function () {
                return this._percentWindow.slice()
            }, getTargetSeriesModels: function () {
                var t = [];
                return this.ecModel.eachSeries(function (e) {
                    this._axisIndex === +e.get(this._dimName + "AxisIndex") && t.push(e)
                }, this), t
            }, getAxisModel: function () {
                return this.ecModel.getComponent(this._dimName + "Axis", this._axisIndex)
            }, getOtherAxisModel: function () {
                var t, e, i = this._dimName, n = this.ecModel, r = this.getAxisModel(), o = "x" === i || "y" === i;
                o ? (e = "gridIndex", t = "x" === i ? "y" : "x") : (e = "polarIndex", t = "angle" === i ? "radius" : "angle");
                var a;
                return n.eachComponent(t + "Axis", function (t) {
                    (t.get(e) || 0) === (r.get(e) || 0) && (a = t)
                }), a
            }, reset: function (t) {
                if (t === this._dataZoomModel) {
                    var e = this._dataExtent = n(this._dimName, this.getTargetSeriesModels()), i = r(t.option, e, this);
                    this._valueWindow = i.valueWindow, this._percentWindow = i.percentWindow, a(this)
                }
            }, restore: function (t) {
                t === this._dataZoomModel && (this._valueWindow = this._percentWindow = null, a(this, !0))
            }, filterData: function (t) {
                function e(t) {
                    return t >= o[0] && t <= o[1]
                }

                if (t === this._dataZoomModel) {
                    var i = this._dimName, n = this.getTargetSeriesModels(), r = t.get("filterMode"), o = this._valueWindow, a = this.getOtherAxisModel();
                    t.get("$fromToolbox") && a && "category" === a.get("type") && (r = "empty"), u(n, function (t) {
                        var n = t.getData();
                        n && u(t.coordDimToDataDim(i), function (i) {
                            "empty" === r ? t.setData(n.map(i, function (t) {
                                return e(t) ? t : NaN
                            })) : n.filterSelf(i, e)
                        })
                    })
                }
            }
        }, t.exports = c
    }, function (t, e, i) {
        t.exports = i(40).extend({type: "dataZoom.inside", defaultOption: {zoomLock: !1}})
    }, function (t, e, i) {
        function n(t, e, i, n) {
            e = e.slice();
            var r = n.axisModels[0];
            if (r) {
                var a = o(t, r, i), s = a.signal * (e[1] - e[0]) * a.pixel / a.pixelLength;
                return u(s, e, [0, 100], "rigid"), e
            }
        }

        function r(t, e, i, n, r, s) {
            i = i.slice();
            var l = r.axisModels[0];
            if (l) {
                var u = o(e, l, n), h = u.pixel - u.pixelStart, c = h / u.pixelLength * (i[1] - i[0]) + i[0];
                return t = Math.max(t, 0), i[0] = (i[0] - c) * t + c, i[1] = (i[1] - c) * t + c, a(i)
            }
        }

        function o(t, e, i) {
            var n = e.axis, r = i.rectProvider(), o = {};
            return "x" === n.dim ? (o.pixel = t[0], o.pixelLength = r.width, o.pixelStart = r.x, o.signal = n.inverse ? 1 : -1) : (o.pixel = t[1], o.pixelLength = r.height, o.pixelStart = r.y, o.signal = n.inverse ? -1 : 1), o
        }

        function a(t) {
            var e = [0, 100];
            return !(t[0] <= e[1]) && (t[0] = e[1]), !(t[1] <= e[1]) && (t[1] = e[1]), !(t[0] >= e[0]) && (t[0] = e[0]), !(t[1] >= e[0]) && (t[1] = e[0]), t
        }

        var s = i(41), l = i(1), u = i(79), h = i(185), c = l.bind, d = s.extend({
            type: "dataZoom.inside",
            init: function (t, e) {
                this._range
            },
            render: function (t, e, i, n) {
                d.superApply(this, "render", arguments), h.shouldRecordRange(n, t.id) && (this._range = t.getPercentRange());
                var r = this.getTargetInfo().cartesians, o = l.map(r, function (t) {
                    return h.generateCoordId(t.model)
                });
                l.each(r, function (e) {
                    var n = e.model;
                    h.register(i, {
                        coordId: h.generateCoordId(n),
                        allCoordIds: o,
                        coordinateSystem: n.coordinateSystem,
                        dataZoomId: t.id,
                        throttleRate: t.get("throttle", !0),
                        panGetRange: c(this._onPan, this, e),
                        zoomGetRange: c(this._onZoom, this, e)
                    })
                }, this)
            },
            dispose: function () {
                h.unregister(this.api, this.dataZoomModel.id), d.superApply(this, "dispose", arguments), this._range = null
            },
            _onPan: function (t, e, i, r) {
                return this._range = n([i, r], this._range, e, t)
            },
            _onZoom: function (t, e, i, n, o) {
                var a = this.dataZoomModel;
                return a.option.zoomLock ? this._range : this._range = r(1 / i, [n, o], this._range, e, t, a)
            }
        });
        t.exports = d
    }, function (t, e, i) {
        var n = i(40);
        t.exports = n.extend({type: "dataZoom.select"})
    }, function (t, e, i) {
        t.exports = i(41).extend({type: "dataZoom.select"})
    }, function (t, e, i) {
        var n = i(40), r = n.extend({
            type: "dataZoom.slider",
            layoutMode: "box",
            defaultOption: {
                show: !0,
                right: "ph",
                top: "ph",
                width: "ph",
                height: "ph",
                left: null,
                bottom: null,
                backgroundColor: "rgba(47,69,84,0)",
                dataBackground: {
                    lineStyle: {color: "#2f4554", width: .5, opacity: .3},
                    areaStyle: {color: "rgba(47,69,84,0.3)", opacity: .3}
                },
                borderColor: "#ddd",
                fillerColor: "rgba(167,183,204,0.4)",
                handleIcon: "M8.2,13.6V3.9H6.3v9.7H3.1v14.9h3.3v9.7h1.8v-9.7h3.3V13.6H8.2z M9.7,24.4H4.8v-1.4h4.9V24.4z M9.7,19.1H4.8v-1.4h4.9V19.1z",
                handleSize: "100%",
                handleStyle: {color: "#a7b7cc"},
                labelPrecision: null,
                labelFormatter: null,
                showDetail: !0,
                showDataShadow: "auto",
                realtime: !0,
                zoomLock: !1,
                textStyle: {color: "#333"}
            }
        });
        t.exports = r
    }, function (t, e, i) {
        function n(t) {
            return "x" === t ? "y" : "x"
        }

        var r = i(1), o = i(3), a = i(81), s = i(41), l = o.Rect, u = i(4), h = u.linearMap, c = i(13), d = i(79), f = u.asc, p = r.bind, g = r.each, v = 7, m = 1, y = 30, x = "horizontal", _ = "vertical", b = 5, w = ["line", "bar", "candlestick", "scatter"], S = s.extend({
            type: "dataZoom.slider",
            init: function (t, e) {
                this._displayables = {}, this._orient, this._range, this._handleEnds, this._size, this._handleWidth, this._handleHeight, this._location, this._dragging, this._dataShadowInfo, this.api = e
            },
            render: function (t, e, i, n) {
                return S.superApply(this, "render", arguments), a.createOrUpdate(this, "_dispatchZoomAction", this.dataZoomModel.get("throttle"), "fixRate"), this._orient = t.get("orient"), this.dataZoomModel.get("show") === !1 ? void this.group.removeAll() : (n && "dataZoom" === n.type && n.from === this.uid || this._buildView(), void this._updateView())
            },
            remove: function () {
                S.superApply(this, "remove", arguments), a.clear(this, "_dispatchZoomAction")
            },
            dispose: function () {
                S.superApply(this, "dispose", arguments), a.clear(this, "_dispatchZoomAction")
            },
            _buildView: function () {
                var t = this.group;
                t.removeAll(), this._resetLocation(), this._resetInterval();
                var e = this._displayables.barGroup = new o.Group;
                this._renderBackground(), this._renderHandle(), this._renderDataShadow(), t.add(e), this._positionGroup()
            },
            _resetLocation: function () {
                var t = this.dataZoomModel, e = this.api, i = this._findCoordRect(), n = {
                    width: e.getWidth(),
                    height: e.getHeight()
                }, o = this._orient === x ? {
                    right: n.width - i.x - i.width,
                    top: n.height - y - v,
                    width: i.width,
                    height: y
                } : {right: v, top: i.y, width: y, height: i.height}, a = c.getLayoutParams(t.option);
                r.each(["right", "top", "width", "height"], function (t) {
                    "ph" === a[t] && (a[t] = o[t])
                });
                var s = c.getLayoutRect(a, n, t.padding);
                this._location = {
                    x: s.x,
                    y: s.y
                }, this._size = [s.width, s.height], this._orient === _ && this._size.reverse()
            },
            _positionGroup: function () {
                var t = this.group, e = this._location, i = this._orient, n = this.dataZoomModel.getFirstTargetAxisModel(), r = n && n.get("inverse"), o = this._displayables.barGroup, a = (this._dataShadowInfo || {}).otherAxisInverse;
                o.attr(i !== x || r ? i === x && r ? {scale: a ? [-1, 1] : [-1, -1]} : i !== _ || r ? {
                    scale: a ? [-1, -1] : [-1, 1],
                    rotation: Math.PI / 2
                } : {scale: a ? [1, -1] : [1, 1], rotation: Math.PI / 2} : {scale: a ? [1, 1] : [1, -1]});
                var s = t.getBoundingRect([o]);
                t.attr("position", [e.x - s.x, e.y - s.y])
            },
            _getViewExtent: function () {
                return [0, this._size[0]]
            },
            _renderBackground: function () {
                var t = this.dataZoomModel, e = this._size;
                this._displayables.barGroup.add(new l({
                    silent: !0,
                    shape: {x: 0, y: 0, width: e[0], height: e[1]},
                    style: {fill: t.get("backgroundColor")},
                    z2: -40
                }))
            },
            _renderDataShadow: function () {
                var t = this._dataShadowInfo = this._prepareDataShadowInfo();
                if (t) {
                    var e = this._size, i = t.series, n = i.getRawData(), a = i.getShadowDim ? i.getShadowDim() : t.otherDim, s = n.getDataExtent(a), l = .3 * (s[1] - s[0]);
                    s = [s[0] - l, s[1] + l];
                    var u = [0, e[1]], c = [0, e[0]], d = [[e[0], 0], [0, 0]], f = [], p = c[1] / (n.count() - 1), g = 0, v = Math.round(n.count() / e[0]);
                    n.each([a], function (t, e) {
                        if (v > 0 && e % v)return void(g += p);
                        var i = null == t || isNaN(t) || "" === t ? null : h(t, s, u, !0);
                        null != i && (d.push([g, i]), f.push([g, i])), g += p
                    });
                    var m = this.dataZoomModel;
                    this._displayables.barGroup.add(new o.Polygon({
                        shape: {points: d},
                        style: r.defaults({fill: m.get("dataBackgroundColor")}, m.getModel("dataBackground.areaStyle").getAreaStyle()),
                        silent: !0,
                        z2: -20
                    })), this._displayables.barGroup.add(new o.Polyline({
                        shape: {points: f},
                        style: m.getModel("dataBackground.lineStyle").getLineStyle(),
                        silent: !0,
                        z2: -19
                    }))
                }
            },
            _prepareDataShadowInfo: function () {
                var t = this.dataZoomModel, e = t.get("showDataShadow");
                if (e !== !1) {
                    var i, o = this.ecModel;
                    return t.eachTargetAxis(function (a, s) {
                        var l = t.getAxisProxy(a.name, s).getTargetSeriesModels();
                        r.each(l, function (t) {
                            if (!(i || e !== !0 && r.indexOf(w, t.get("type")) < 0)) {
                                var l = n(a.name), u = o.getComponent(a.axis, s).axis;
                                i = {
                                    thisAxis: u,
                                    series: t,
                                    thisDim: a.name,
                                    otherDim: l,
                                    otherAxisInverse: t.coordinateSystem.getOtherAxis(u).inverse
                                }
                            }
                        }, this)
                    }, this), i
                }
            },
            _renderHandle: function () {
                var t = this._displayables, e = t.handles = [], i = t.handleLabels = [], n = this._displayables.barGroup, r = this._size, a = this.dataZoomModel;
                n.add(t.filler = new l({
                    draggable: !0,
                    cursor: "move",
                    drift: p(this._onDragMove, this, "all"),
                    ondragstart: p(this._showDataInfo, this, !0),
                    ondragend: p(this._onDragEnd, this),
                    onmouseover: p(this._showDataInfo, this, !0),
                    onmouseout: p(this._showDataInfo, this, !1),
                    style: {fill: a.get("fillerColor"), textPosition: "inside"}
                })), n.add(new l(o.subPixelOptimizeRect({
                    silent: !0,
                    shape: {x: 0, y: 0, width: r[0], height: r[1]},
                    style: {
                        stroke: a.get("dataBackgroundColor") || a.get("borderColor"),
                        lineWidth: m,
                        fill: "rgba(0,0,0,0)"
                    }
                })));
                var s = a.get("handleIcon");
                g([0, 1], function (t) {
                    var r = o.makePath(s, {
                        style: {strokeNoScale: !0},
                        rectHover: !0,
                        cursor: "vertical" === this._orient ? "ns-resize" : "ew-resize",
                        draggable: !0,
                        drift: p(this._onDragMove, this, t),
                        ondragend: p(this._onDragEnd, this),
                        onmouseover: p(this._showDataInfo, this, !0),
                        onmouseout: p(this._showDataInfo, this, !1)
                    }, {x: -.5, y: 0, width: 1, height: 1}, "center"), l = r.getBoundingRect();
                    this._handleHeight = u.parsePercent(a.get("handleSize"), this._size[1]), this._handleWidth = l.width / l.height * this._handleHeight, r.setStyle(a.getModel("handleStyle").getItemStyle());
                    var h = a.get("handleColor");
                    null != h && (r.style.fill = h), n.add(e[t] = r);
                    var c = a.textStyleModel;
                    this.group.add(i[t] = new o.Text({
                        silent: !0,
                        invisible: !0,
                        style: {
                            x: 0,
                            y: 0,
                            text: "",
                            textVerticalAlign: "middle",
                            textAlign: "center",
                            fill: c.getTextColor(),
                            textFont: c.getFont()
                        },
                        z2: 10
                    }))
                }, this)
            },
            _resetInterval: function () {
                var t = this._range = this.dataZoomModel.getPercentRange(), e = this._getViewExtent();
                this._handleEnds = [h(t[0], [0, 100], e, !0), h(t[1], [0, 100], e, !0)]
            },
            _updateInterval: function (t, e) {
                var i = this._handleEnds, n = this._getViewExtent();
                d(e, i, n, "all" === t || this.dataZoomModel.get("zoomLock") ? "rigid" : "cross", t), this._range = f([h(i[0], n, [0, 100], !0), h(i[1], n, [0, 100], !0)])
            },
            _updateView: function () {
                var t = this._displayables, e = this._handleEnds, i = f(e.slice()), n = this._size;
                g([0, 1], function (i) {
                    var r = t.handles[i], o = this._handleHeight;
                    r.attr({scale: [o, o], position: [e[i], n[1] / 2 - o / 2]})
                }, this), t.filler.setShape({x: i[0], y: 0, width: i[1] - i[0], height: n[1]}), this._updateDataInfo()
            },
            _updateDataInfo: function () {
                function t(t) {
                    var e = o.getTransform(i.handles[t].parent, this.group), s = o.transformDirection(0 === t ? "right" : "left", e), l = this._handleWidth / 2 + b, h = o.applyTransform([u[t] + (0 === t ? -l : l), this._size[1] / 2], e);
                    n[t].setStyle({
                        x: h[0],
                        y: h[1],
                        textVerticalAlign: r === x ? "middle" : s,
                        textAlign: r === x ? s : "center",
                        text: a[t]
                    })
                }

                var e = this.dataZoomModel, i = this._displayables, n = i.handleLabels, r = this._orient, a = ["", ""];
                if (e.get("showDetail")) {
                    var s, l;
                    e.eachTargetAxis(function (t, i) {
                        s || (s = e.getAxisProxy(t.name, i).getDataValueWindow(), l = this.ecModel.getComponent(t.axis, i).axis)
                    }, this), s && (a = [this._formatLabel(s[0], l), this._formatLabel(s[1], l)])
                }
                var u = f(this._handleEnds.slice());
                t.call(this, 0), t.call(this, 1)
            },
            _formatLabel: function (t, e) {
                var i = this.dataZoomModel, n = i.get("labelFormatter");
                if (r.isFunction(n))return n(t);
                var o = i.get("labelPrecision");
                return null != o && "auto" !== o || (o = e.getPixelPrecision()), t = null == t && isNaN(t) ? "" : "category" === e.type || "time" === e.type ? e.scale.getLabel(Math.round(t)) : t.toFixed(Math.min(o, 20)), r.isString(n) && (t = n.replace("{value}", t)), t
            },
            _showDataInfo: function (t) {
                t = this._dragging || t;
                var e = this._displayables.handleLabels;
                e[0].attr("invisible", !t), e[1].attr("invisible", !t)
            },
            _onDragMove: function (t, e, i) {
                this._dragging = !0;
                var n = this._applyBarTransform([e, i], !0);
                this._updateInterval(t, n[0]), this._updateView(), this.dataZoomModel.get("realtime") && this._dispatchZoomAction()
            },
            _onDragEnd: function () {
                this._dragging = !1, this._showDataInfo(!1), this._dispatchZoomAction()
            },
            _dispatchZoomAction: function () {
                var t = this._range;
                this.api.dispatchAction({
                    type: "dataZoom",
                    from: this.uid,
                    dataZoomId: this.dataZoomModel.id,
                    start: t[0],
                    end: t[1]
                })
            },
            _applyBarTransform: function (t, e) {
                var i = this._displayables.barGroup.getLocalTransform();
                return o.applyTransform(t, i, e)
            },
            _findCoordRect: function () {
                var t, e = this.getTargetInfo();
                if (e.cartesians.length)t = e.cartesians[0].model.coordinateSystem.getRect(); else {
                    var i = this.api.getWidth(), n = this.api.getHeight();
                    t = {x: .2 * i, y: .2 * n, width: .6 * i, height: .6 * n}
                }
                return t
            }
        });
        t.exports = S
    }, function (t, e, i) {
        function n(t) {
            var e = t.getZr();
            return e[p] || (e[p] = {})
        }

        function r(t, e, i) {
            var n = new c(t.getZr());
            return n.enable(), n.on("pan", f(a, i)), n.on("zoom", f(s, i)), n
        }

        function o(t) {
            h.each(t, function (e, i) {
                e.count || (e.controller.off("pan").off("zoom"), delete t[i])
            })
        }

        function a(t, e, i) {
            l(t, function (n) {
                return n.panGetRange(t.controller, e, i)
            })
        }

        function s(t, e, i, n) {
            l(t, function (r) {
                return r.zoomGetRange(t.controller, e, i, n)
            })
        }

        function l(t, e) {
            var i = [];
            h.each(t.dataZoomInfos, function (t) {
                var n = e(t);
                n && i.push({dataZoomId: t.dataZoomId, start: n[0], end: n[1]})
            }), t.dispatchAction(i)
        }

        function u(t, e) {
            t.dispatchAction({type: "dataZoom", batch: e})
        }

        var h = i(1), c = i(78), d = i(81), f = h.curry, p = "\x00_ec_dataZoom_roams", g = {
            register: function (t, e) {
                var i = n(t), a = e.dataZoomId, s = e.coordId;
                h.each(i, function (t, i) {
                    var n = t.dataZoomInfos;
                    n[a] && h.indexOf(e.allCoordIds, s) < 0 && (delete n[a], t.count--)
                }), o(i);
                var l = i[s];
                l || (l = i[s] = {
                    coordId: s,
                    dataZoomInfos: {},
                    count: 0
                }, l.controller = r(t, e, l), l.dispatchAction = h.curry(u, t));
                var c = e.coordinateSystem.getRect().clone();
                l.controller.rectProvider = function () {
                    return c
                }, d.createOrUpdate(l, "dispatchAction", e.throttleRate, "fixRate"), !l.dataZoomInfos[a] && l.count++, l.dataZoomInfos[a] = e
            }, unregister: function (t, e) {
                var i = n(t);
                h.each(i, function (t) {
                    var i = t.dataZoomInfos;
                    i[e] && (delete i[e], t.count--)
                }), o(i)
            }, shouldRecordRange: function (t, e) {
                if (t && "dataZoom" === t.type && t.batch)for (var i = 0, n = t.batch.length; n > i; i++)if (t.batch[i].dataZoomId === e)return !1;
                return !0
            }, generateCoordId: function (t) {
                return t.type + "\x00_" + t.id
            }
        };
        t.exports = g
    }, function (t, e, i) {
        i(109), i(40), i(41), i(181), i(182), i(107), i(106)
    }, function (t, e, i) {
        i(188), i(190), i(189);
        var n = i(2);
        n.registerProcessor(i(191))
    }, function (t, e, i) {
        "use strict";
        var n = i(1), r = i(8), o = i(2).extendComponentModel({
            type: "legend",
            dependencies: ["series"],
            layoutMode: {type: "box", ignoreSize: !0},
            init: function (t, e, i) {
                this.mergeDefaultAndTheme(t, i), t.selected = t.selected || {}
            },
            mergeOption: function (t) {
                o.superCall(this, "mergeOption", t)
            },
            optionUpdated: function () {
                this._updateData(this.ecModel);
                var t = this._data;
                if (t[0] && "single" === this.get("selectedMode")) {
                    for (var e = !1, i = 0; i < t.length; i++) {
                        var n = t[i].get("name");
                        if (this.isSelected(n)) {
                            this.select(n), e = !0;
                            break
                        }
                    }
                    !e && this.select(t[0].get("name"))
                }
            },
            _updateData: function (t) {
                var e = n.map(this.get("data") || [], function (t) {
                    return "string" != typeof t && "number" != typeof t || (t = {name: t}), new r(t, this, this.ecModel)
                }, this);
                this._data = e;
                var i = n.map(t.getSeries(), function (t) {
                    return t.name
                });
                t.eachSeries(function (t) {
                    if (t.legendDataProvider) {
                        var e = t.legendDataProvider();
                        i = i.concat(e.mapArray(e.getName))
                    }
                }), this._availableNames = i
            },
            getData: function () {
                return this._data
            },
            select: function (t) {
                var e = this.option.selected, i = this.get("selectedMode");
                if ("single" === i) {
                    var r = this._data;
                    n.each(r, function (t) {
                        e[t.get("name")] = !1
                    })
                }
                e[t] = !0
            },
            unSelect: function (t) {
                "single" !== this.get("selectedMode") && (this.option.selected[t] = !1)
            },
            toggleSelected: function (t) {
                var e = this.option.selected;
                t in e || (e[t] = !0), this[e[t] ? "unSelect" : "select"](t)
            },
            isSelected: function (t) {
                var e = this.option.selected;
                return !(t in e && !e[t]) && n.indexOf(this._availableNames, t) >= 0
            },
            defaultOption: {
                zlevel: 0,
                z: 4,
                show: !0,
                orient: "horizontal",
                left: "center",
                top: "top",
                align: "auto",
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "#ccc",
                borderWidth: 0,
                padding: 5,
                itemGap: 10,
                itemWidth: 25,
                itemHeight: 14,
                inactiveColor: "#ccc",
                textStyle: {color: "#333"},
                selectedMode: !0,
                tooltip: {show: !1}
            }
        });
        t.exports = o
    }, function (t, e, i) {
        function n(t, e) {
            e.dispatchAction({type: "legendToggleSelect", name: t})
        }

        function r(t, e, i) {
            var n = i.getZr().storage.getDisplayList()[0];
            n && n.useHoverLayer || t.get("legendHoverLink") && i.dispatchAction({
                type: "highlight",
                seriesName: t.name,
                name: e
            })
        }

        function o(t, e, i) {
            var n = i.getZr().storage.getDisplayList()[0];
            n && n.useHoverLayer || t.get("legendHoverLink") && i.dispatchAction({
                type: "downplay",
                seriesName: t.name,
                name: e
            })
        }

        var a = i(1), s = i(26), l = i(3), u = i(113), h = a.curry;
        t.exports = i(2).extendComponentView({
            type: "legend", init: function () {
                this._symbolTypeStore = {}
            }, render: function (t, e, i) {
                var s = this.group;
                if (s.removeAll(), t.get("show")) {
                    var c = t.get("selectedMode"), d = t.get("align");
                    "auto" === d && (d = "right" === t.get("left") && "vertical" === t.get("orient") ? "right" : "left");
                    var f = {};
                    a.each(t.getData(), function (a) {
                        var u = a.get("name");
                        if ("" === u || "\n" === u)return void s.add(new l.Group({newline: !0}));
                        var p = e.getSeriesByName(u)[0];
                        if (!f[u])if (p) {
                            var g = p.getData(), v = g.getVisual("color");
                            "function" == typeof v && (v = v(p.getDataParams(0)));
                            var m = g.getVisual("legendSymbol") || "roundRect", y = g.getVisual("symbol"), x = this._createItem(u, a, t, m, y, d, v, c);
                            x.on("click", h(n, u, i)).on("mouseover", h(r, p, "", i)).on("mouseout", h(o, p, "", i)), f[u] = !0
                        } else e.eachRawSeries(function (e) {
                            if (!f[u] && e.legendDataProvider) {
                                var s = e.legendDataProvider(), l = s.indexOfName(u);
                                if (0 > l)return;
                                var p = s.getItemVisual(l, "color"), g = "roundRect", v = this._createItem(u, a, t, g, null, d, p, c);
                                v.on("click", h(n, u, i)).on("mouseover", h(r, e, u, i)).on("mouseout", h(o, e, u, i)), f[u] = !0
                            }
                        }, this)
                    }, this), u.layout(s, t, i), u.addBackground(s, t)
                }
            }, _createItem: function (t, e, i, n, r, o, u, h) {
                var c = i.get("itemWidth"), d = i.get("itemHeight"), f = i.get("inactiveColor"), p = i.isSelected(t), g = new l.Group, v = e.getModel("textStyle"), m = e.get("icon"), y = e.getModel("tooltip");
                if (n = m || n, g.add(s.createSymbol(n, 0, 0, c, d, p ? u : f)), !m && r && (r !== n || "none" == r)) {
                    var x = .8 * d;
                    "none" === r && (r = "circle"), g.add(s.createSymbol(r, (c - x) / 2, (d - x) / 2, x, x, p ? u : f))
                }
                var _ = "left" === o ? c + 5 : -5, b = o, w = i.get("formatter"), S = t;
                "string" == typeof w && w ? S = w.replace("{name}", t) : "function" == typeof w && (S = w(t));
                var M = new l.Text({
                    style: {
                        text: S,
                        x: _,
                        y: d / 2,
                        fill: p ? v.getTextColor() : f,
                        textFont: v.getFont(),
                        textAlign: b,
                        textVerticalAlign: "middle"
                    }
                });
                g.add(M);
                var A = new l.Rect({
                    shape: g.getBoundingRect(),
                    invisible: !0,
                    tooltip: y.get("show") ? a.extend({
                        content: t,
                        formatter: function () {
                            return t
                        },
                        formatterParams: {
                            componentType: "legend",
                            legendIndex: i.componentIndex,
                            name: t,
                            $vars: ["name"]
                        }
                    }, y.option) : null
                });
                return g.add(A), g.eachChild(function (t) {
                    t.silent = !0
                }), A.silent = !h, this.group.add(g), l.setHoverStyle(g), g
            }
        })
    }, function (t, e, i) {
        function n(t, e, i) {
            var n, r = {}, a = "toggleSelected" === t;
            return i.eachComponent("legend", function (i) {
                a && null != n ? i[n ? "select" : "unSelect"](e.name) : (i[t](e.name), n = i.isSelected(e.name));
                var s = i.getData();
                o.each(s, function (t) {
                    var e = t.get("name");
                    if ("\n" !== e && "" !== e) {
                        var n = i.isSelected(e);
                        e in r ? r[e] = r[e] && n : r[e] = n
                    }
                })
            }), {name: e.name, selected: r}
        }

        var r = i(2), o = i(1);
        r.registerAction("legendToggleSelect", "legendselectchanged", o.curry(n, "toggleSelected")), r.registerAction("legendSelect", "legendselected", o.curry(n, "select")), r.registerAction("legendUnSelect", "legendunselected", o.curry(n, "unSelect"))
    }, function (t, e) {
        t.exports = function (t) {
            var e = t.findComponents({mainType: "legend"});
            e && e.length && t.filterSeries(function (t) {
                for (var i = 0; i < e.length; i++)if (!e[i].isSelected(t.name))return !1;
                return !0
            })
        }
    }, function (t, e, i) {
        i(195), i(196), i(2).registerPreprocessor(function (t) {
            t.markArea = t.markArea || {}
        })
    }, function (t, e, i) {
        i(197), i(198), i(2).registerPreprocessor(function (t) {
            t.markLine = t.markLine || {}
        })
    }, function (t, e, i) {
        i(199), i(200), i(2).registerPreprocessor(function (t) {
            t.markPoint = t.markPoint || {}
        })
    }, function (t, e, i) {
        t.exports = i(67).extend({
            type: "markArea",
            defaultOption: {
                zlevel: 0,
                z: 1,
                tooltip: {trigger: "item"},
                animation: !1,
                label: {normal: {show: !0, position: "top"}, emphasis: {show: !0, position: "top"}},
                itemStyle: {normal: {borderWidth: 0}}
            }
        })
    }, function (t, e, i) {
        function n(t) {
            return !isNaN(t) && !isFinite(t)
        }

        function r(t, e, i, r) {
            var o = 1 - t;
            return n(e[o]) && n(i[o])
        }

        function o(t, e) {
            var i = e.coord[0], n = e.coord[1];
            return "cartesian2d" === t.type && i && n && (r(1, i, n, t) || r(0, i, n, t)) ? !0 : f.dataFilter(t, {
                coord: i,
                x: e.x0,
                y: e.y0
            }) || f.dataFilter(t, {coord: n, x: e.x1, y: e.y1})
        }

        function a(t, e, i, r, o) {
            var a, s = r.coordinateSystem, l = t.getItemModel(e), u = h.parsePercent(l.get(i[0]), o.getWidth()), c = h.parsePercent(l.get(i[1]), o.getHeight());
            if (isNaN(u) || isNaN(c)) {
                if (r.getMarkerPosition)a = r.getMarkerPosition(t.getValues(i, e)); else {
                    var d = t.get(i[0], e), f = t.get(i[1], e);
                    a = s.dataToPoint([d, f], !0)
                }
                if ("cartesian2d" === s.type) {
                    var p = s.getAxis("x"), g = s.getAxis("y"), d = t.get(i[0], e), f = t.get(i[1], e);
                    n(d) ? a[0] = p.toGlobalCoord(p.getExtent()["x0" === i[0] ? 0 : 1]) : n(f) && (a[1] = g.toGlobalCoord(g.getExtent()["y0" === i[1] ? 0 : 1]))
                }
                isNaN(u) || (a[0] = u), isNaN(c) || (a[1] = c)
            } else a = [u, c];
            return a
        }

        function s(t, e, i) {
            var n, r, a = ["x0", "y0", "x1", "y1"];
            t ? (n = l.map(t && t.dimensions, function (t) {
                var i = e.getData().getDimensionInfo(e.coordDimToDataDim(t)[0]) || {};
                return i.name = t, i
            }), r = new u(l.map(a, function (t, e) {
                return {name: t, type: n[e % 2].type}
            }), i)) : (n = [{name: "value", type: "float"}], r = new u(n, i));
            var s = l.map(i.get("data"), l.curry(p, e, t, i));
            t && (s = l.filter(s, l.curry(o, t)));
            var h = t ? function (t, e, i, n) {
                return t.coord[Math.floor(n / 2)][n % 2]
            } : function (t) {
                return t.value
            };
            return r.initData(s, null, h), r.hasItemOption = !0, r
        }

        var l = i(1), u = i(14), h = i(4), c = i(3), d = i(18), f = i(69), p = function (t, e, i, n) {
            var r = f.dataTransform(t, n[0]), o = f.dataTransform(t, n[1]), a = l.retrieve, s = r.coord, u = o.coord;
            s[0] = a(s[0], -(1 / 0)), s[1] = a(s[1], -(1 / 0)), u[0] = a(u[0], 1 / 0), u[1] = a(u[1], 1 / 0);
            var h = l.mergeAll([{}, r, o]);
            return h.coord = [r.coord, o.coord], h.x0 = r.x, h.y0 = r.y, h.x1 = o.x, h.y1 = o.y, h
        }, g = [["x0", "y0"], ["x1", "y0"], ["x1", "y1"], ["x0", "y1"]];
        i(68).extend({
            type: "markArea", updateLayout: function (t, e, i) {
                e.eachSeries(function (t) {
                    var e = t.markAreaModel;
                    if (e) {
                        var n = e.getData();
                        n.each(function (e) {
                            var r = l.map(g, function (r) {
                                return a(n, e, r, t, i)
                            });
                            n.setItemLayout(e, r);
                            var o = n.getItemGraphicEl(e);
                            o.setShape("points", r)
                        })
                    }
                }, this)
            }, renderSeries: function (t, e, i, n) {
                var r = t.coordinateSystem, o = t.name, u = t.getData(), h = this.markerGroupMap, f = h[o];
                f || (f = h[o] = {group: new c.Group}), this.group.add(f.group), f.__keep = !0;
                var p = s(r, t, e);
                e.setData(p), p.each(function (e) {
                    p.setItemLayout(e, l.map(g, function (i) {
                        return a(p, e, i, t, n)
                    })), p.setItemVisual(e, {color: u.getVisual("color")})
                }), p.diff(f.__data).add(function (t) {
                    var e = new c.Polygon({shape: {points: p.getItemLayout(t)}});
                    p.setItemGraphicEl(t, e), f.group.add(e)
                }).update(function (t, i) {
                    var n = f.__data.getItemGraphicEl(i);
                    c.updateProps(n, {shape: {points: p.getItemLayout(t)}}, e, t), f.group.add(n), p.setItemGraphicEl(t, n)
                }).remove(function (t) {
                    var e = f.__data.getItemGraphicEl(t);
                    f.group.remove(e)
                }).execute(), p.eachItemGraphicEl(function (t, i) {
                    var n = p.getItemModel(i), r = n.getModel("label.normal"), o = n.getModel("label.emphasis"), a = p.getItemVisual(i, "color");
                    t.useStyle(l.defaults(n.getModel("itemStyle.normal").getItemStyle(), {
                        fill: d.modifyAlpha(a, .4),
                        stroke: a
                    })), t.hoverStyle = n.getModel("itemStyle.normal").getItemStyle();
                    var s = p.getName(i) || "", u = a || t.style.fill;
                    c.setText(t.style, r, u), t.style.text = l.retrieve(e.getFormattedLabel(i, "normal"), s), c.setText(t.hoverStyle, o, u), t.hoverStyle.text = l.retrieve(e.getFormattedLabel(i, "emphasis"), s), c.setHoverStyle(t, {}), t.dataModel = e
                }), f.__data = p, f.group.silent = e.get("silent") || t.get("silent")
            }
        })
    }, function (t, e, i) {
        t.exports = i(67).extend({
            type: "markLine",
            defaultOption: {
                zlevel: 0,
                z: 5,
                symbol: ["circle", "arrow"],
                symbolSize: [8, 16],
                precision: 2,
                tooltip: {trigger: "item"},
                label: {normal: {show: !0, position: "end"}, emphasis: {show: !0}},
                lineStyle: {normal: {type: "dashed"}, emphasis: {width: 3}},
                animationEasing: "linear"
            }
        })
    }, function (t, e, i) {
        function n(t) {
            return !isNaN(t) && !isFinite(t)
        }

        function r(t, e, i, r) {
            var o = 1 - t, a = r.dimensions[t];
            return n(e[o]) && n(i[o]) && e[t] === i[t] && r.getAxis(a).containData(e[t])
        }

        function o(t, e) {
            if ("cartesian2d" === t.type) {
                var i = e[0].coord, n = e[1].coord;
                if (i && n && (r(1, i, n, t) || r(0, i, n, t)))return !0
            }
            return c.dataFilter(t, e[0]) && c.dataFilter(t, e[1])
        }

        function a(t, e, i, r, o) {
            var a, s = r.coordinateSystem, l = t.getItemModel(e), u = h.parsePercent(l.get("x"), o.getWidth()), c = h.parsePercent(l.get("y"), o.getHeight());
            if (isNaN(u) || isNaN(c)) {
                if (r.getMarkerPosition)a = r.getMarkerPosition(t.getValues(t.dimensions, e)); else {
                    var d = s.dimensions, f = t.get(d[0], e), p = t.get(d[1], e);
                    a = s.dataToPoint([f, p])
                }
                if ("cartesian2d" === s.type) {
                    var g = s.getAxis("x"), v = s.getAxis("y"), d = s.dimensions;
                    n(t.get(d[0], e)) ? a[0] = g.toGlobalCoord(g.getExtent()[i ? 0 : 1]) : n(t.get(d[1], e)) && (a[1] = v.toGlobalCoord(v.getExtent()[i ? 0 : 1]))
                }
                isNaN(u) || (a[0] = u), isNaN(c) || (a[1] = c)
            } else a = [u, c];
            t.setItemLayout(e, a)
        }

        function s(t, e, i) {
            var n;
            n = t ? l.map(t && t.dimensions, function (t) {
                var i = e.getData().getDimensionInfo(e.coordDimToDataDim(t)[0]) || {};
                return i.name = t, i
            }) : [{name: "value", type: "float"}];
            var r = new u(n, i), a = new u(n, i), s = new u([], i), h = l.map(i.get("data"), l.curry(f, e, t, i));
            t && (h = l.filter(h, l.curry(o, t)));
            var d = t ? c.dimValueGetter : function (t) {
                return t.value
            };
            return r.initData(l.map(h, function (t) {
                return t[0]
            }), null, d), a.initData(l.map(h, function (t) {
                return t[1]
            }), null, d), s.initData(l.map(h, function (t) {
                return t[2]
            })), s.hasItemOption = !0, {from: r, to: a, line: s}
        }

        var l = i(1), u = i(14), h = i(4), c = i(69), d = i(93), f = function (t, e, i, n) {
            var r = t.getData(), o = n.type;
            if (!l.isArray(n) && ("min" === o || "max" === o || "average" === o || null != n.xAxis || null != n.yAxis)) {
                var a, s, u;
                if (null != n.yAxis || null != n.xAxis)s = null != n.yAxis ? "y" : "x", a = e.getAxis(s), u = l.retrieve(n.yAxis, n.xAxis); else {
                    var h = c.getAxisInfo(n, r, e, t);
                    s = h.valueDataDim, a = h.valueAxis, u = c.numCalculate(r, s, o)
                }
                var d = "x" === s ? 0 : 1, f = 1 - d, p = l.clone(n), g = {};
                p.type = null, p.coord = [], g.coord = [], p.coord[f] = -(1 / 0), g.coord[f] = 1 / 0;
                var v = i.get("precision");
                v >= 0 && (u = +u.toFixed(v)), p.coord[d] = g.coord[d] = u, n = [p, g, {
                    type: o,
                    valueIndex: n.valueIndex,
                    value: u
                }]
            }
            return n = [c.dataTransform(t, n[0]), c.dataTransform(t, n[1]), l.extend({}, n[2])], n[2].type = n[2].type || "", l.merge(n[2], n[0]), l.merge(n[2], n[1]), n
        };
        i(68).extend({
            type: "markLine", updateLayout: function (t, e, i) {
                e.eachSeries(function (t) {
                    var e = t.markLineModel;
                    if (e) {
                        var n = e.getData(), r = e.__from, o = e.__to;
                        r.each(function (e) {
                            a(r, e, !0, t, i), a(o, e, !1, t, i)
                        }), n.each(function (t) {
                            n.setItemLayout(t, [r.getItemLayout(t), o.getItemLayout(t)])
                        }), this.markerGroupMap[t.name].updateLayout()
                    }
                }, this)
            }, renderSeries: function (t, e, i, n) {
                function r(e, i, r) {
                    var o = e.getItemModel(i);
                    a(e, i, r, t, n), e.setItemVisual(i, {
                        symbolSize: o.get("symbolSize") || x[r ? 0 : 1],
                        symbol: o.get("symbol", !0) || y[r ? 0 : 1],
                        color: o.get("itemStyle.normal.color") || h.getVisual("color")
                    })
                }

                var o = t.coordinateSystem, u = t.name, h = t.getData(), c = this.markerGroupMap, f = c[u];
                f || (f = c[u] = new d), this.group.add(f.group);
                var p = s(o, t, e), g = p.from, v = p.to, m = p.line;
                e.__from = g, e.__to = v, e.setData(m);
                var y = e.get("symbol"), x = e.get("symbolSize");
                l.isArray(y) || (y = [y, y]), "number" == typeof x && (x = [x, x]), p.from.each(function (t) {
                    r(g, t, !0), r(v, t, !1)
                }), m.each(function (t) {
                    var e = m.getItemModel(t).get("lineStyle.normal.color");
                    m.setItemVisual(t, {color: e || g.getItemVisual(t, "color")}), m.setItemLayout(t, [g.getItemLayout(t), v.getItemLayout(t)]), m.setItemVisual(t, {
                        fromSymbolSize: g.getItemVisual(t, "symbolSize"),
                        fromSymbol: g.getItemVisual(t, "symbol"),
                        toSymbolSize: v.getItemVisual(t, "symbolSize"),
                        toSymbol: v.getItemVisual(t, "symbol")
                    })
                }), f.updateData(m), p.line.eachItemGraphicEl(function (t, i) {
                    t.traverse(function (t) {
                        t.dataModel = e
                    })
                }), f.__keep = !0, f.group.silent = e.get("silent") || t.get("silent")
            }
        })
    }, function (t, e, i) {
        t.exports = i(67).extend({
            type: "markPoint",
            defaultOption: {
                zlevel: 0,
                z: 5,
                symbol: "pin",
                symbolSize: 50,
                tooltip: {trigger: "item"},
                label: {normal: {show: !0, position: "inside"}, emphasis: {show: !0}},
                itemStyle: {normal: {borderWidth: 2}}
            }
        })
    }, function (t, e, i) {
        function n(t, e, i) {
            var n = e.coordinateSystem;
            t.each(function (r) {
                var o, a = t.getItemModel(r), l = s.parsePercent(a.get("x"), i.getWidth()), u = s.parsePercent(a.get("y"), i.getHeight());
                if (isNaN(l) || isNaN(u)) {
                    if (e.getMarkerPosition)o = e.getMarkerPosition(t.getValues(t.dimensions, r)); else if (n) {
                        var h = t.get(n.dimensions[0], r), c = t.get(n.dimensions[1], r);
                        o = n.dataToPoint([h, c])
                    }
                } else o = [l, u];
                isNaN(l) || (o[0] = l), isNaN(u) || (o[1] = u), t.setItemLayout(r, o)
            })
        }

        function r(t, e, i) {
            var n;
            n = t ? a.map(t && t.dimensions, function (t) {
                var i = e.getData().getDimensionInfo(e.coordDimToDataDim(t)[0]) || {};
                return i.name = t, i
            }) : [{name: "value", type: "float"}];
            var r = new l(n, i), o = a.map(i.get("data"), a.curry(u.dataTransform, e));
            return t && (o = a.filter(o, a.curry(u.dataFilter, t))), r.initData(o, null, t ? u.dimValueGetter : function (t) {
                return t.value
            }), r
        }

        var o = i(39), a = i(1), s = i(4), l = i(14), u = i(69);
        i(68).extend({
            type: "markPoint", updateLayout: function (t, e, i) {
                e.eachSeries(function (t) {
                    var e = t.markPointModel;
                    e && (n(e.getData(), t, i), this.markerGroupMap[t.name].updateLayout(e))
                }, this)
            }, renderSeries: function (t, e, i, a) {
                var s = t.coordinateSystem, l = t.name, u = t.getData(), h = this.markerGroupMap, c = h[l];
                c || (c = h[l] = new o);
                var d = r(s, t, e);
                e.setData(d), n(e.getData(), t, a), d.each(function (t) {
                    var i = d.getItemModel(t), n = i.getShallow("symbolSize");
                    "function" == typeof n && (n = n(e.getRawValue(t), e.getDataParams(t))), d.setItemVisual(t, {
                        symbolSize: n,
                        color: i.get("itemStyle.normal.color") || u.getVisual("color"),
                        symbol: i.getShallow("symbol")
                    })
                }), c.updateData(d), this.group.add(c.group), d.eachItemGraphicEl(function (t) {
                    t.traverse(function (t) {
                        t.dataModel = e
                    })
                }), c.__keep = !0, c.group.silent = e.get("silent") || t.get("silent")
            }
        })
    }, function (t, e, i) {
        "use strict";
        var n = i(2), r = i(3), o = i(13);
        n.extendComponentModel({
            type: "title",
            layoutMode: {type: "box", ignoreSize: !0},
            defaultOption: {
                zlevel: 0,
                z: 6,
                show: !0,
                text: "",
                target: "blank",
                subtext: "",
                subtarget: "blank",
                left: 0,
                top: 0,
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "#ccc",
                borderWidth: 0,
                padding: 5,
                itemGap: 10,
                textStyle: {fontSize: 18, fontWeight: "bolder", color: "#333"},
                subtextStyle: {color: "#aaa"}
            }
        }), n.extendComponentView({
            type: "title", render: function (t, e, i) {
                if (this.group.removeAll(), t.get("show")) {
                    var n = this.group, a = t.getModel("textStyle"), s = t.getModel("subtextStyle"), l = t.get("textAlign"), u = t.get("textBaseline"), h = new r.Text({
                        style: {
                            text: t.get("text"),
                            textFont: a.getFont(),
                            fill: a.getTextColor()
                        }, z2: 10
                    }), c = h.getBoundingRect(), d = t.get("subtext"), f = new r.Text({
                        style: {
                            text: d,
                            textFont: s.getFont(),
                            fill: s.getTextColor(),
                            y: c.height + t.get("itemGap"),
                            textBaseline: "top"
                        }, z2: 10
                    }), p = t.get("link"), g = t.get("sublink");
                    h.silent = !p, f.silent = !g, p && h.on("click", function () {
                        window.open(p, "_" + t.get("target"))
                    }), g && f.on("click", function () {
                        window.open(g, "_" + t.get("subtarget"))
                    }), n.add(h), d && n.add(f);
                    var v = n.getBoundingRect(), m = t.getBoxLayoutParams();
                    m.width = v.width, m.height = v.height;
                    var y = o.getLayoutRect(m, {width: i.getWidth(), height: i.getHeight()}, t.get("padding"));
                    l || (l = t.get("left") || t.get("right"), "middle" === l && (l = "center"), "right" === l ? y.x += y.width : "center" === l && (y.x += y.width / 2)), u || (u = t.get("top") || t.get("bottom"), "center" === u && (u = "middle"), "bottom" === u ? y.y += y.height : "middle" === u && (y.y += y.height / 2), u = u || "top"), n.attr("position", [y.x, y.y]);
                    var x = {textAlign: l, textVerticalAlign: u};
                    h.setStyle(x), f.setStyle(x), v = n.getBoundingRect();
                    var _ = y.margin, b = t.getItemStyle(["color", "opacity"]);
                    b.fill = t.get("backgroundColor");
                    var w = new r.Rect({
                        shape: {
                            x: v.x - _[3],
                            y: v.y - _[0],
                            width: v.width + _[1] + _[3],
                            height: v.height + _[0] + _[2]
                        }, style: b, silent: !0
                    });
                    r.subPixelOptimizeRect(w), n.add(w)
                }
            }
        })
    }, function (t, e, i) {
        i(203), i(204), i(209), i(207), i(205), i(206), i(208)
    }, function (t, e, i) {
        var n = i(25), r = i(1), o = i(2).extendComponentModel({
            type: "toolbox",
            layoutMode: {type: "box", ignoreSize: !0},
            mergeDefaultAndTheme: function (t) {
                o.superApply(this, "mergeDefaultAndTheme", arguments), r.each(this.option.feature, function (t, e) {
                    var i = n.get(e);
                    i && r.merge(t, i.defaultOption)
                })
            },
            defaultOption: {
                show: !0,
                z: 6,
                zlevel: 0,
                orient: "horizontal",
                left: "right",
                top: "top",
                backgroundColor: "transparent",
                borderColor: "#ccc",
                borderWidth: 0,
                padding: 5,
                itemSize: 15,
                itemGap: 8,
                showTitle: !0,
                iconStyle: {normal: {borderColor: "#666", color: "none"}, emphasis: {borderColor: "#3E98C5"}}
            }
        });
        t.exports = o
    }, function (t, e, i) {
        (function (e) {
            function n(t) {
                return 0 === t.indexOf("my")
            }

            var r = i(25), o = i(1), a = i(3), s = i(8), l = i(45), u = i(113), h = i(16);
            t.exports = i(2).extendComponentView({
                type: "toolbox", render: function (t, e, i, c) {
                    function d(o, a) {
                        var l, u = y[o], h = y[a], d = v[u], p = new s(d, t, t.ecModel);
                        if (u && !h) {
                            if (n(u))l = {model: p, onclick: p.option.onclick, featureName: u}; else {
                                var g = r.get(u);
                                if (!g)return;
                                l = new g(p, e, i)
                            }
                            m[u] = l
                        } else {
                            if (l = m[h], !l)return;
                            l.model = p, l.ecModel = e, l.api = i
                        }
                        return !u && h ? void(l.dispose && l.dispose(e, i)) : !p.get("show") || l.unusable ? void(l.remove && l.remove(e, i)) : (f(p, l, u), p.setIconStatus = function (t, e) {
                            var i = this.option, n = this.iconPaths;
                            i.iconStatus = i.iconStatus || {}, i.iconStatus[t] = e, n[t] && n[t].trigger(e)
                        }, void(l.render && l.render(p, e, i, c)))
                    }

                    function f(n, r, s) {
                        var l = n.getModel("iconStyle"), u = r.getIcons ? r.getIcons() : n.get("icon"), h = n.get("title") || {};
                        if ("string" == typeof u) {
                            var c = u, d = h;
                            u = {}, h = {}, u[s] = c, h[s] = d
                        }
                        var f = n.iconPaths = {};
                        o.each(u, function (s, u) {
                            var c = l.getModel("normal").getItemStyle(), d = l.getModel("emphasis").getItemStyle(), v = {
                                x: -g / 2,
                                y: -g / 2,
                                width: g,
                                height: g
                            }, m = 0 === s.indexOf("image://") ? (v.image = s.slice(8), new a.Image({style: v})) : a.makePath(s.replace("path://", ""), {
                                style: c,
                                hoverStyle: d,
                                rectHover: !0
                            }, v, "center");
                            a.setHoverStyle(m), t.get("showTitle") && (m.__title = h[u], m.on("mouseover", function () {
                                m.setStyle({
                                    text: h[u],
                                    textPosition: d.textPosition || "bottom",
                                    textFill: d.fill || d.stroke || "#000",
                                    textAlign: d.textAlign || "center"
                                })
                            }).on("mouseout", function () {
                                m.setStyle({textFill: null})
                            })), m.trigger(n.get("iconStatus." + u) || "normal"), p.add(m), m.on("click", o.bind(r.onclick, r, e, i, u)), f[u] = m
                        })
                    }

                    var p = this.group;
                    if (p.removeAll(), t.get("show")) {
                        var g = +t.get("itemSize"), v = t.get("feature") || {}, m = this._features || (this._features = {}), y = [];
                        o.each(v, function (t, e) {
                            y.push(e)
                        }), new l(this._featureNames || [], y).add(d).update(d).remove(o.curry(d, null)).execute(), this._featureNames = y, u.layout(p, t, i), u.addBackground(p, t), p.eachChild(function (t) {
                            var e = t.__title, n = t.hoverStyle;
                            if (n && e) {
                                var r = h.getBoundingRect(e, n.font), o = t.position[0] + p.position[0], a = t.position[1] + p.position[1] + g, s = !1;
                                a + r.height > i.getHeight() && (n.textPosition = "top", s = !0);
                                var l = s ? -5 - r.height : g + 8;
                                o + r.width / 2 > i.getWidth() ? (n.textPosition = ["100%", l], n.textAlign = "right") : o - r.width / 2 < 0 && (n.textPosition = [0, l], n.textAlign = "left")
                            }
                        })
                    }
                }, updateView: function (t, e, i, n) {
                    o.each(this._features, function (t) {
                        t.updateView && t.updateView(t.model, e, i, n)
                    })
                }, updateLayout: function (t, e, i, n) {
                    o.each(this._features, function (t) {
                        t.updateLayout && t.updateLayout(t.model, e, i, n)
                    })
                }, remove: function (t, e) {
                    o.each(this._features, function (i) {
                        i.remove && i.remove(t, e)
                    }), this.group.removeAll()
                }, dispose: function (t, e) {
                    o.each(this._features, function (i) {
                        i.dispose && i.dispose(t, e)
                    })
                }
            })
        }).call(e, i(215))
    }, function (t, e, i) {
        function n(t) {
            var e = {}, i = [], n = [];
            return t.eachRawSeries(function (t) {
                var r = t.coordinateSystem;
                if (!r || "cartesian2d" !== r.type && "polar" !== r.type)i.push(t); else {
                    var o = r.getBaseAxis();
                    if ("category" === o.type) {
                        var a = o.dim + "_" + o.index;
                        e[a] || (e[a] = {
                            categoryAxis: o,
                            valueAxis: r.getOtherAxis(o),
                            series: []
                        }, n.push({axisDim: o.dim, axisIndex: o.index})), e[a].series.push(t)
                    } else i.push(t)
                }
            }), {seriesGroupByCategoryAxis: e, other: i, meta: n}
        }

        function r(t) {
            var e = [];
            return p.each(t, function (t, i) {
                var n = t.categoryAxis, r = t.valueAxis, o = r.dim, a = [" "].concat(p.map(t.series, function (t) {
                    return t.name
                })), s = [n.model.getCategories()];
                p.each(t.series, function (t) {
                    s.push(t.getRawData().mapArray(o, function (t) {
                        return t
                    }))
                });
                for (var l = [a.join(m)], u = 0; u < s[0].length; u++) {
                    for (var h = [], c = 0; c < s.length; c++)h.push(s[c][u]);
                    l.push(h.join(m))
                }
                e.push(l.join("\n"))
            }), e.join("\n\n" + v + "\n\n")
        }

        function o(t) {
            return p.map(t, function (t) {
                var e = t.getRawData(), i = [t.name], n = [];
                return e.each(e.dimensions, function () {
                    for (var t = arguments.length, r = arguments[t - 1], o = e.getName(r), a = 0; t - 1 > a; a++)n[a] = arguments[a];
                    i.push((o ? o + m : "") + n.join(m))
                }), i.join("\n")
            }).join("\n\n" + v + "\n\n")
        }

        function a(t) {
            var e = n(t);
            return {
                value: p.filter([r(e.seriesGroupByCategoryAxis), o(e.other)], function (t) {
                    return t.replace(/[\n\t\s]/g, "")
                }).join("\n\n" + v + "\n\n"), meta: e.meta
            }
        }

        function s(t) {
            return t.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
        }

        function l(t) {
            var e = t.slice(0, t.indexOf("\n"));
            return e.indexOf(m) >= 0 ? !0 : void 0
        }

        function u(t) {
            for (var e = t.split(/\n+/g), i = s(e.shift()).split(y), n = [], r = p.map(i, function (t) {
                return {name: t, data: []}
            }), o = 0; o < e.length; o++) {
                var a = s(e[o]).split(y);
                n.push(a.shift());
                for (var l = 0; l < a.length; l++)r[l] && (r[l].data[o] = a[l])
            }
            return {series: r, categories: n}
        }

        function h(t) {
            for (var e = t.split(/\n+/g), i = s(e.shift()), n = [], r = 0; r < e.length; r++) {
                var o, a = s(e[r]).split(y), l = "", u = !1;
                isNaN(a[0]) ? (u = !0, l = a[0], a = a.slice(1), n[r] = {
                    name: l,
                    value: []
                }, o = n[r].value) : o = n[r] = [];
                for (var h = 0; h < a.length; h++)o.push(+a[h]);
                1 === o.length && (u ? n[r].value = o[0] : n[r] = o[0])
            }
            return {name: i, data: n}
        }

        function c(t, e) {
            var i = t.split(new RegExp("\n*" + v + "\n*", "g")), n = {series: []};
            return p.each(i, function (t, i) {
                if (l(t)) {
                    var r = u(t), o = e[i], a = o.axisDim + "Axis";
                    o && (n[a] = n[a] || [], n[a][o.axisIndex] = {data: r.categories}, n.series = n.series.concat(r.series))
                } else {
                    var r = h(t);
                    n.series.push(r)
                }
            }), n
        }

        function d(t) {
            this._dom = null, this.model = t
        }

        function f(t, e) {
            return p.map(t, function (t, i) {
                var n = e && e[i];
                return p.isObject(n) && !p.isArray(n) ? (p.isObject(t) && !p.isArray(t) && (t = t.value), p.defaults({value: t}, n)) : t
            })
        }

        var p = i(1), g = i(24), v = new Array(60).join("-"), m = "	", y = new RegExp("[" + m + "]+", "g");
        d.defaultOption = {
            show: !0,
            readOnly: !1,
            optionToContent: null,
            contentToOption: null,
            icon: "M17.5,17.3H33 M17.5,17.3H33 M45.4,29.5h-28 M11.5,2v56H51V14.8L38.4,2H11.5z M38.4,2.2v12.7H51 M45.4,41.7h-28",
            title: "数据视图",
            lang: ["数据视图", "关闭", "刷新"],
            backgroundColor: "#fff",
            textColor: "#000",
            textareaColor: "#fff",
            textareaBorderColor: "#333",
            buttonColor: "#c23531",
            buttonTextColor: "#fff"
        }, d.prototype.onclick = function (t, e) {
            function i() {
                n.removeChild(o), M._dom = null
            }

            var n = e.getDom(), r = this.model;
            this._dom && n.removeChild(this._dom);
            var o = document.createElement("div");
            o.style.cssText = "position:absolute;left:5px;top:5px;bottom:5px;right:5px;", o.style.backgroundColor = r.get("backgroundColor") || "#fff";
            var s = document.createElement("h4"), l = r.get("lang") || [];
            s.innerHTML = l[0] || r.get("title"), s.style.cssText = "margin: 10px 20px;", s.style.color = r.get("textColor");
            var u = document.createElement("div"), h = document.createElement("textarea");
            u.style.cssText = "display:block;width:100%;overflow:hidden;";
            var d = r.get("optionToContent"), f = r.get("contentToOption"), v = a(t);
            if ("function" == typeof d) {
                var y = d(e.getOption());
                "string" == typeof y ? u.innerHTML = y : p.isDom(y) && u.appendChild(y)
            } else u.appendChild(h), h.readOnly = r.get("readOnly"), h.style.cssText = "width:100%;height:100%;font-family:monospace;font-size:14px;line-height:1.6rem;", h.style.color = r.get("textColor"), h.style.borderColor = r.get("textareaBorderColor"), h.style.backgroundColor = r.get("textareaColor"), h.value = v.value;
            var x = v.meta, _ = document.createElement("div");
            _.style.cssText = "position:absolute;bottom:0;left:0;right:0;";
            var b = "float:right;margin-right:20px;border:none;cursor:pointer;padding:2px 5px;font-size:12px;border-radius:3px", w = document.createElement("div"), S = document.createElement("div");
            b += ";background-color:" + r.get("buttonColor"), b += ";color:" + r.get("buttonTextColor");
            var M = this;
            g.addEventListener(w, "click", i), g.addEventListener(S, "click", function () {
                var t;
                try {
                    t = "function" == typeof f ? f(u, e.getOption()) : c(h.value, x)
                } catch (n) {
                    throw i(), new Error("Data view format error " + n)
                }
                t && e.dispatchAction({type: "changeDataView", newOption: t}), i()
            }), w.innerHTML = l[1], S.innerHTML = l[2], S.style.cssText = b, w.style.cssText = b, !r.get("readOnly") && _.appendChild(S), _.appendChild(w), g.addEventListener(h, "keydown", function (t) {
                if (9 === (t.keyCode || t.which)) {
                    var e = this.value, i = this.selectionStart, n = this.selectionEnd;
                    this.value = e.substring(0, i) + m + e.substring(n), this.selectionStart = this.selectionEnd = i + 1, g.stop(t)
                }
            }), o.appendChild(s), o.appendChild(u), o.appendChild(_), u.style.height = n.clientHeight - 80 + "px", n.appendChild(o), this._dom = o
        }, d.prototype.remove = function (t, e) {
            this._dom && e.getDom().removeChild(this._dom)
        }, d.prototype.dispose = function (t, e) {
            this.remove(t, e)
        }, i(25).register("dataView", d), i(2).registerAction({
            type: "changeDataView",
            event: "dataViewChanged",
            update: "prepareAndUpdate"
        }, function (t, e) {
            var i = [];
            p.each(t.newOption.series, function (t) {
                var n = e.getSeriesByName(t.name)[0];
                if (n) {
                    var r = n.get("data");
                    i.push({name: t.name, data: f(t.data, r)})
                } else i.push(p.extend({type: "scatter"}, t))
            }), e.mergeOption(p.defaults({series: i}, t.newOption))
        }), t.exports = d
    }, function (t, e, i) {
        "use strict";
        function n(t, e, i) {
            (this._brushController = new l(i.getZr())).on("brush", s.bind(this._onBrush, this)).mount(), this._isZoomActive
        }

        function r(t) {
            var e = {};
            return s.each(["xAxisIndex", "yAxisIndex"], function (i) {
                e[i] = t[i], null == e[i] && (e[i] = "all"), (e[i] === !1 || "none" === e[i]) && (e[i] = [])
            }), e
        }

        function o(t, e) {
            t.setIconStatus("back", h.count(e) > 1 ? "emphasis" : "normal")
        }

        function a(t, e, i, n) {
            var o = i._isZoomActive;
            n && "takeGlobalCursor" === n.type && (o = "dataZoomSelect" === n.key ? n.dataZoomSelectActive : !1), i._isZoomActive = o, t.setIconStatus("zoom", o ? "emphasis" : "normal");
            var a = u.makeCoordInfoList(r(t.option), e), s = a.xAxisHas && !a.yAxisHas ? "lineX" : !a.xAxisHas && a.yAxisHas ? "lineY" : "rect";
            i._brushController.setPanels(u.makePanelOpts(a)).enableBrush(o ? {
                brushType: s,
                brushStyle: {lineWidth: 0, fill: "rgba(0,0,0,0.2)"}
            } : !1)
        }

        var s = i(1), l = i(110), u = i(111), h = i(108), c = s.each;
        i(186);
        var d = "\x00_ec_\x00toolbox-dataZoom_";
        n.defaultOption = {
            show: !0,
            icon: {
                zoom: "M0,13.5h26.9 M13.5,26.9V0 M32.1,13.5H58V58H13.5 V32.1",
                back: "M22,1.4L9.9,13.5l12.3,12.3 M10.3,13.5H54.9v44.6 H10.3v-26"
            },
            title: {zoom: "区域缩放", back: "区域缩放还原"}
        };
        var f = n.prototype;
        f.render = function (t, e, i, n) {
            this.model = t, this.ecModel = e, this.api = i, a(t, e, this, n), o(t, e)
        }, f.onclick = function (t, e, i) {
            p[i].call(this)
        }, f.remove = function (t, e) {
            this._brushController.unmount()
        }, f.dispose = function (t, e) {
            this._brushController.dispose()
        };
        var p = {
            zoom: function () {
                var t = !this._isZoomActive;
                this.api.dispatchAction({type: "takeGlobalCursor", key: "dataZoomSelect", dataZoomSelectActive: t})
            }, back: function () {
                this._dispatchZoomAction(h.pop(this.ecModel))
            }
        };
        f._onBrush = function (t, e) {
            function i(t, e, i) {
                var r = n(t, i[t], a);
                r && (o[r.id] = {dataZoomId: r.id, startValue: e[0], endValue: e[1]})
            }

            function n(t, e, i) {
                var n;
                return i.eachComponent({mainType: "dataZoom", subType: "select"}, function (r, o) {
                    var a = r.get(t + "Index");
                    null != a && i.getComponent(t, a) === e && (n = r)
                }), n
            }

            if (e.isEnd && t.length) {
                var o = {}, a = this.ecModel;
                this._brushController.updateCovers([]);
                var s = u.makeCoordInfoList(r(this.model.option), a), l = [];
                u.parseOutputRanges(t, s, a, l);
                var c = t[0], d = l[0], f = c.coordRange, p = c.brushType;
                if (d && f)if ("rect" === p)i("xAxis", f[0], d), i("yAxis", f[1], d); else {
                    var g = {lineX: "xAxis", lineY: "yAxis"};
                    i(g[p], f, d)
                }
                h.push(a, o), this._dispatchZoomAction(o)
            }
        }, f._dispatchZoomAction = function (t) {
            var e = [];
            c(t, function (t, i) {
                e.push(s.clone(t))
            }), e.length && this.api.dispatchAction({type: "dataZoom", from: this.uid, batch: e})
        }, i(25).register("dataZoom", n), i(2).registerPreprocessor(function (t) {
            function e(t, e) {
                if (e) {
                    var r = t + "Index", o = e[r];
                    null == o || "all" == o || s.isArray(o) || (o = o === !1 || "none" === o ? [] : [o]), i(t, function (e, i) {
                        if (null == o || "all" == o || -1 !== s.indexOf(o, i)) {
                            var a = {type: "select", $fromToolbox: !0, id: d + t + i};
                            a[r] = i, n.push(a)
                        }
                    })
                }
            }

            function i(e, i) {
                var n = t[e];
                s.isArray(n) || (n = n ? [n] : []), c(n, i)
            }

            if (t) {
                var n = t.dataZoom || (t.dataZoom = []);
                s.isArray(n) || (t.dataZoom = n = [n]);
                var r = t.toolbox;
                if (r && (s.isArray(r) && (r = r[0]), r && r.feature)) {
                    var o = r.feature.dataZoom;
                    e("xAxis", o), e("yAxis", o)
                }
            }
        }), t.exports = n
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            this.model = t
        }

        var r = i(1);
        n.defaultOption = {
            show: !0,
            type: [],
            icon: {
                line: "M4.1,28.9h7.1l9.3-22l7.4,38l9.7-19.7l3,12.8h14.9M4.1,58h51.4",
                bar: "M6.7,22.9h10V48h-10V22.9zM24.9,13h10v35h-10V13zM43.2,2h10v46h-10V2zM3.1,58h53.7",
                stack: "M8.2,38.4l-8.4,4.1l30.6,15.3L60,42.5l-8.1-4.1l-21.5,11L8.2,38.4z M51.9,30l-8.1,4.2l-13.4,6.9l-13.9-6.9L8.2,30l-8.4,4.2l8.4,4.2l22.2,11l21.5-11l8.1-4.2L51.9,30z M51.9,21.7l-8.1,4.2L35.7,30l-5.3,2.8L24.9,30l-8.4-4.1l-8.3-4.2l-8.4,4.2L8.2,30l8.3,4.2l13.9,6.9l13.4-6.9l8.1-4.2l8.1-4.1L51.9,21.7zM30.4,2.2L-0.2,17.5l8.4,4.1l8.3,4.2l8.4,4.2l5.5,2.7l5.3-2.7l8.1-4.2l8.1-4.2l8.1-4.1L30.4,2.2z",
                tiled: "M2.3,2.2h22.8V25H2.3V2.2z M35,2.2h22.8V25H35V2.2zM2.3,35h22.8v22.8H2.3V35z M35,35h22.8v22.8H35V35z"
            },
            title: {line: "切换为折线图", bar: "切换为柱状图", stack: "切换为堆叠", tiled: "切换为平铺"},
            option: {},
            seriesIndex: {}
        };
        var o = n.prototype;
        o.getIcons = function () {
            var t = this.model, e = t.get("icon"), i = {};
            return r.each(t.get("type"), function (t) {
                e[t] && (i[t] = e[t])
            }), i
        };
        var a = {
            line: function (t, e, i, n) {
                return "bar" === t ? r.merge({
                    id: e,
                    type: "line",
                    data: i.get("data"),
                    stack: i.get("stack"),
                    markPoint: i.get("markPoint"),
                    markLine: i.get("markLine")
                }, n.get("option.line") || {}, !0) : void 0
            }, bar: function (t, e, i, n) {
                return "line" === t ? r.merge({
                    id: e,
                    type: "bar",
                    data: i.get("data"),
                    stack: i.get("stack"),
                    markPoint: i.get("markPoint"),
                    markLine: i.get("markLine")
                }, n.get("option.bar") || {}, !0) : void 0
            }, stack: function (t, e, i, n) {
                return "line" === t || "bar" === t ? r.merge({
                    id: e,
                    stack: "__ec_magicType_stack__"
                }, n.get("option.stack") || {}, !0) : void 0
            }, tiled: function (t, e, i, n) {
                return "line" === t || "bar" === t ? r.merge({
                    id: e,
                    stack: ""
                }, n.get("option.tiled") || {}, !0) : void 0
            }
        }, s = [["line", "bar"], ["stack", "tiled"]];
        o.onclick = function (t, e, i) {
            var n = this.model, o = n.get("seriesIndex." + i);
            if (a[i]) {
                var l = {series: []}, u = function (t) {
                    var e = t.subType, o = t.id, s = a[i](e, o, t, n);
                    s && (r.defaults(s, t.option), l.series.push(s));
                    var u = t.coordinateSystem;
                    if (u && "cartesian2d" === u.type && ("line" === i || "bar" === i)) {
                        var h = u.getAxesByScale("ordinal")[0];
                        if (h) {
                            var c = h.dim, d = t.get(c + "AxisIndex"), f = c + "Axis";
                            l[f] = l[f] || [];
                            for (var p = 0; d >= p; p++)l[f][d] = l[f][d] || {};
                            l[f][d].boundaryGap = "bar" === i
                        }
                    }
                };
                r.each(s, function (t) {
                    r.indexOf(t, i) >= 0 && r.each(t, function (t) {
                        n.setIconStatus(t, "normal")
                    })
                }), n.setIconStatus(i, "emphasis"), t.eachComponent({
                    mainType: "series",
                    query: null == o ? null : {seriesIndex: o}
                }, u), e.dispatchAction({type: "changeMagicType", currentType: i, newOption: l})
            }
        };
        var l = i(2);
        l.registerAction({
            type: "changeMagicType",
            event: "magicTypeChanged",
            update: "prepareAndUpdate"
        }, function (t, e) {
            e.mergeOption(t.newOption)
        }), i(25).register("magicType", n), t.exports = n
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            this.model = t
        }

        var r = i(108);
        n.defaultOption = {
            show: !0,
            icon: "M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5",
            title: "还原"
        };
        var o = n.prototype;
        o.onclick = function (t, e, i) {
            r.clear(t), e.dispatchAction({type: "restore", from: this.uid})
        }, i(25).register("restore", n), i(2).registerAction({
            type: "restore",
            event: "restore",
            update: "prepareAndUpdate"
        }, function (t, e) {
            e.resetOption("recreate")
        }), t.exports = n
    }, function (t, e, i) {
        function n(t) {
            this.model = t
        }

        var r = i(12);
        n.defaultOption = {
            show: !0,
            icon: "M4.7,22.9L29.3,45.5L54.7,23.4M4.6,43.6L4.6,58L53.8,58L53.8,43.6M29.2,45.1L29.2,0",
            title: "保存为图片",
            type: "png",
            name: "",
            excludeComponents: ["toolbox"],
            pixelRatio: 1,
            lang: ["右键另存为图片"]
        }, n.prototype.unusable = !r.canvasSupported;
        var o = n.prototype;
        o.onclick = function (t, e) {
            var i = this.model, n = i.get("name") || t.get("title.0.text") || "echarts", r = document.createElement("a"), o = i.get("type", !0) || "png";
            r.download = n + "." + o, r.target = "_blank";
            var a = e.getConnectedDataURL({
                type: o,
                backgroundColor: i.get("backgroundColor", !0) || t.get("backgroundColor") || "#fff",
                excludeComponents: i.get("excludeComponents"),
                pixelRatio: i.get("pixelRatio")
            });
            if (r.href = a, "function" == typeof MouseEvent) {
                var s = new MouseEvent("click", {view: window, bubbles: !0, cancelable: !1});
                r.dispatchEvent(s)
            } else {
                var l = i.get("lang"), u = '<body style="margin:0;"><img src="' + a + '" style="max-width:100%;" title="' + (l && l[0] || "") + '" /></body>', h = window.open();
                h.document.write(u)
            }
        }, i(25).register("saveAsImage", n), t.exports = n
    }, function (t, e, i) {
        i(212), i(213), i(2).registerAction({type: "showTip", event: "showTip", update: "none"}, function () {
        }), i(2).registerAction({type: "hideTip", event: "hideTip", update: "none"}, function () {
        })
    }, function (t, e, i) {
        function n(t) {
            var e = "cubic-bezier(0.23, 1, 0.32, 1)", i = "left " + t + "s " + e + ",top " + t + "s " + e;
            return l.map(g, function (t) {
                return t + "transition:" + i
            }).join(";")
        }

        function r(t) {
            var e = [], i = t.get("fontSize"), n = t.getTextColor();
            return n && e.push("color:" + n), e.push("font:" + t.getFont()), i && e.push("line-height:" + Math.round(3 * i / 2) + "px"), d(["decoration", "align"], function (i) {
                var n = t.get(i);
                n && e.push("text-" + i + ":" + n)
            }), e.join(";")
        }

        function o(t) {
            t = t;
            var e = [], i = t.get("transitionDuration"), o = t.get("backgroundColor"), a = t.getModel("textStyle"), s = t.get("padding");
            return i && e.push(n(i)), o && (p.canvasSupported ? e.push("background-Color:" + o) : (e.push("background-Color:#" + u.toHex(o)), e.push("filter:alpha(opacity=70)"))), d(["width", "color", "radius"], function (i) {
                var n = "border-" + i, r = f(n), o = t.get(r);
                null != o && e.push(n + ":" + o + ("color" === i ? "" : "px"))
            }), e.push(r(a)), null != s && e.push("padding:" + c.normalizeCssArray(s).join("px ") + "px"), e.join(";") + ";"
        }

        function a(t, e) {
            var i = document.createElement("div"), n = e.getZr();
            this.el = i, this._x = e.getWidth() / 2, this._y = e.getHeight() / 2, t.appendChild(i), this._container = t, this._show = !1, this._hideTimeout;
            var r = this;
            i.onmouseenter = function () {
                r.enterable && (clearTimeout(r._hideTimeout), r._show = !0), r._inContent = !0
            }, i.onmousemove = function (e) {
                if (!r.enterable) {
                    var i = n.handler;
                    h.normalizeEvent(t, e), i.dispatch("mousemove", e)
                }
            }, i.onmouseleave = function () {
                r.enterable && r._show && r.hideLater(r._hideDelay), r._inContent = !1
            }, s(i, t)
        }

        function s(t, e) {
            function i(t) {
                n(t.target) && t.preventDefault()
            }

            function n(i) {
                for (; i && i !== e;) {
                    if (i === t)return !0;
                    i = i.parentNode
                }
            }

            h.addEventListener(e, "touchstart", i), h.addEventListener(e, "touchmove", i), h.addEventListener(e, "touchend", i)
        }

        var l = i(1), u = i(18), h = i(24), c = i(9), d = l.each, f = c.toCamelCase, p = i(12), g = ["", "-webkit-", "-moz-", "-o-"], v = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;";
        a.prototype = {
            constructor: a, enterable: !0, update: function () {
                var t = this._container, e = t.currentStyle || document.defaultView.getComputedStyle(t), i = t.style;
                "absolute" !== i.position && "absolute" !== e.position && (i.position = "relative")
            }, show: function (t) {
                clearTimeout(this._hideTimeout);
                var e = this.el;
                e.style.cssText = v + o(t) + ";left:" + this._x + "px;top:" + this._y + "px;" + (t.get("extraCssText") || ""), e.style.display = e.innerHTML ? "block" : "none", this._show = !0
            }, setContent: function (t) {
                var e = this.el;
                e.innerHTML = t, e.style.display = t ? "block" : "none"
            }, moveTo: function (t, e) {
                var i = this.el.style;
                i.left = t + "px", i.top = e + "px", this._x = t, this._y = e
            }, hide: function () {
                this.el.style.display = "none", this._show = !1
            }, hideLater: function (t) {
                !this._show || this._inContent && this.enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(l.bind(this.hide, this), t)) : this.hide())
            }, isShow: function () {
                return this._show
            }
        }, t.exports = a
    }, function (t, e, i) {
        i(2).extendComponentModel({
            type: "tooltip",
            defaultOption: {
                zlevel: 0,
                z: 8,
                show: !0,
                showContent: !0,
                trigger: "item",
                triggerOn: "mousemove",
                alwaysShowContent: !1,
                showDelay: 0,
                hideDelay: 100,
                transitionDuration: .4,
                enterable: !1,
                backgroundColor: "rgba(50,50,50,0.7)",
                borderColor: "#333",
                borderRadius: 4,
                borderWidth: 0,
                padding: 5,
                extraCssText: "",
                axisPointer: {
                    type: "line",
                    axis: "auto",
                    animation: !0,
                    animationDurationUpdate: 200,
                    animationEasingUpdate: "exponentialOut",
                    lineStyle: {color: "#555", width: 1, type: "solid"},
                    crossStyle: {color: "#555", width: 1, type: "dashed", textStyle: {}},
                    shadowStyle: {color: "rgba(150,150,150,0.3)"}
                },
                textStyle: {color: "#fff", fontSize: 14}
            }
        })
    }, function (t, e, i) {
        function n(t, e) {
            if (!t || !e)return !1;
            var i = g.round;
            return i(t[0]) === i(e[0]) && i(t[1]) === i(e[1])
        }

        function r(t, e, i, n) {
            return {x1: t, y1: e, x2: i, y2: n}
        }

        function o(t, e, i, n) {
            return {x: t, y: e, width: i, height: n}
        }

        function a(t, e, i, n, r, o) {
            return {cx: t, cy: e, r0: i, r: n, startAngle: r, endAngle: o, clockwise: !0}
        }

        function s(t, e, i, n, r) {
            var o = i.clientWidth, a = i.clientHeight, s = 20;
            return t + o + s > n ? t -= o + s : t += s, e + a + s > r ? e -= a + s : e += s, [t, e]
        }

        function l(t, e, i) {
            var n = i.clientWidth, r = i.clientHeight, o = 5, a = 0, s = 0, l = e.width, u = e.height;
            switch (t) {
                case"inside":
                    a = e.x + l / 2 - n / 2, s = e.y + u / 2 - r / 2;
                    break;
                case"top":
                    a = e.x + l / 2 - n / 2, s = e.y - r - o;
                    break;
                case"bottom":
                    a = e.x + l / 2 - n / 2, s = e.y + u + o;
                    break;
                case"left":
                    a = e.x - n - o, s = e.y + u / 2 - r / 2;
                    break;
                case"right":
                    a = e.x + l + o, s = e.y + u / 2 - r / 2
            }
            return [a, s]
        }

        function u(t, e, i, n, r, o, a) {
            var u = a.getWidth(), h = a.getHeight(), c = o && o.getBoundingRect().clone();
            if (o && c.applyTransform(o.transform), "function" == typeof t && (t = t([e, i], r, n.el, c)), f.isArray(t))e = v(t[0], u), i = v(t[1], h); else if ("string" == typeof t && o) {
                var d = l(t, c, n.el);
                e = d[0], i = d[1]
            } else {
                var d = s(e, i, n.el, u, h);
                e = d[0], i = d[1]
            }
            n.moveTo(e, i)
        }

        function h(t) {
            var e = t.coordinateSystem, i = t.get("tooltip.trigger", !0);
            return !(!e || "cartesian2d" !== e.type && "polar" !== e.type && "singleAxis" !== e.type || "item" === i)
        }

        var c = i(211), d = i(3), f = i(1), p = i(9), g = i(4), v = g.parsePercent, m = i(12), y = i(8);
        i(2).extendComponentView({
            type: "tooltip", _axisPointers: {}, init: function (t, e) {
                if (!m.node) {
                    var i = new c(e.getDom(), e);
                    this._tooltipContent = i, e.on("showTip", this._manuallyShowTip, this), e.on("hideTip", this._manuallyHideTip, this)
                }
            }, render: function (t, e, i) {
                if (!m.node) {
                    this.group.removeAll(), this._axisPointers = {}, this._tooltipModel = t, this._ecModel = e, this._api = i, this._lastHover = {};
                    var n = this._tooltipContent;
                    n.update(), n.enterable = t.get("enterable"), this._alwaysShowContent = t.get("alwaysShowContent"), this._seriesGroupByAxis = this._prepareAxisTriggerData(t, e);
                    var r = this._crossText;
                    if (r && this.group.add(r), null != this._lastX && null != this._lastY) {
                        var o = this;
                        clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function () {
                            o._manuallyShowTip({x: o._lastX, y: o._lastY})
                        })
                    }
                    var a = this._api.getZr();
                    a.off("click", this._tryShow), a.off("mousemove", this._mousemove), a.off("mouseout", this._hide), a.off("globalout", this._hide), "click" === t.get("triggerOn") ? a.on("click", this._tryShow, this) : (a.on("mousemove", this._mousemove, this), a.on("mouseout", this._hide, this), a.on("globalout", this._hide, this))
                }
            }, _mousemove: function (t) {
                var e = this._tooltipModel.get("showDelay"), i = this;
                clearTimeout(this._showTimeout), e > 0 ? this._showTimeout = setTimeout(function () {
                    i._tryShow(t)
                }, e) : this._tryShow(t)
            }, _manuallyShowTip: function (t) {
                if (t.from !== this.uid) {
                    var e = this._ecModel, i = t.seriesIndex, n = t.dataIndex, r = e.getSeriesByIndex(i), o = this._api;
                    if (null == t.x || null == t.y) {
                        if (r || e.eachSeries(function (t) {
                                h(t) && !r && (r = t)
                            }), r) {
                            var a = r.getData();
                            null == n && (n = a.indexOfName(t.name));
                            var s, l, u = a.getItemGraphicEl(n), c = r.coordinateSystem;
                            if (c && c.dataToPoint) {
                                var d = c.dataToPoint(a.getValues(f.map(c.dimensions, function (t) {
                                    return r.coordDimToDataDim(t)[0]
                                }), n, !0));
                                s = d && d[0], l = d && d[1]
                            } else if (u) {
                                var p = u.getBoundingRect().clone();
                                p.applyTransform(u.transform), s = p.x + p.width / 2, l = p.y + p.height / 2
                            }
                            null != s && null != l && this._tryShow({offsetX: s, offsetY: l, target: u, event: {}})
                        }
                    } else {
                        var u = o.getZr().handler.findHover(t.x, t.y);
                        this._tryShow({offsetX: t.x, offsetY: t.y, target: u, event: {}})
                    }
                }
            }, _manuallyHideTip: function (t) {
                t.from !== this.uid && this._hide()
            }, _prepareAxisTriggerData: function (t, e) {
                var i = {};
                return e.eachSeries(function (t) {
                    if (h(t)) {
                        var e, n, r = t.coordinateSystem;
                        "cartesian2d" === r.type ? (e = r.getBaseAxis(), n = e.dim + e.index) : "singleAxis" === r.type ? (e = r.getAxis(), n = e.dim + e.type) : (e = r.getBaseAxis(), n = e.dim + r.name), i[n] = i[n] || {
                                coordSys: [],
                                series: []
                            }, i[n].coordSys.push(r), i[n].series.push(t)
                    }
                }, this), i
            }, _tryShow: function (t) {
                var e = t.target, i = this._tooltipModel, n = i.get("trigger"), r = this._ecModel, o = this._api;
                if (i)if (this._lastX = t.offsetX, this._lastY = t.offsetY, e && null != e.dataIndex) {
                    var a = e.dataModel || r.getSeriesByIndex(e.seriesIndex), s = e.dataIndex, l = a.getData().getItemModel(s);
                    "axis" === (l.get("tooltip.trigger") || n) ? this._showAxisTooltip(i, r, t) : (this._ticket = "", this._hideAxisPointer(), this._resetLastHover(), this._showItemTooltipContent(a, s, e.dataType, t)), o.dispatchAction({
                        type: "showTip",
                        from: this.uid,
                        dataIndex: e.dataIndex,
                        seriesIndex: e.seriesIndex
                    })
                } else if (e && e.tooltip) {
                    var u = e.tooltip;
                    if ("string" == typeof u) {
                        var h = u;
                        u = {content: h, formatter: h}
                    }
                    var c = new y(u, i), d = c.get("content"), f = Math.random();
                    this._showTooltipContent(c, d, c.get("formatterParams") || {}, f, t.offsetX, t.offsetY, e, o)
                } else"item" === n ? this._hide() : this._showAxisTooltip(i, r, t), "cross" === i.get("axisPointer.type") && o.dispatchAction({
                    type: "showTip",
                    from: this.uid,
                    x: t.offsetX,
                    y: t.offsetY
                })
            }, _showAxisTooltip: function (t, e, i) {
                var r = t.getModel("axisPointer"), o = r.get("type");
                if ("cross" === o) {
                    var a = i.target;
                    if (a && null != a.dataIndex) {
                        var s = e.getSeriesByIndex(a.seriesIndex), l = a.dataIndex;
                        this._showItemTooltipContent(s, l, a.dataType, i)
                    }
                }
                this._showAxisPointer();
                var u = !0;
                f.each(this._seriesGroupByAxis, function (t) {
                    var e = t.coordSys, a = e[0], s = [i.offsetX, i.offsetY];
                    if (!a.containPoint(s))return void this._hideAxisPointer(a.name);
                    u = !1;
                    var l = a.dimensions, h = a.pointToData(s, !0);
                    s = a.dataToPoint(h);
                    var c = a.getBaseAxis(), d = r.get("axis");
                    "auto" === d && (d = c.dim);
                    var p = !1, g = this._lastHover;
                    if ("cross" === o)n(g.data, h) && (p = !0), g.data = h; else {
                        var v = f.indexOf(l, d);
                        g.data === h[v] && (p = !0), g.data = h[v]
                    }
                    "cartesian2d" !== a.type || p ? "polar" !== a.type || p ? "singleAxis" !== a.type || p || this._showSinglePointer(r, a, d, s) : this._showPolarPointer(r, a, d, s) : this._showCartesianPointer(r, a, d, s), "cross" !== o && this._dispatchAndShowSeriesTooltipContent(a, t.series, s, h, p)
                }, this), this._tooltipModel.get("show") || this._hideAxisPointer(), u && this._hide()
            }, _showCartesianPointer: function (t, e, i, n) {
                function a(i, n, o) {
                    var a = "x" === i ? r(n[0], o[0], n[0], o[1]) : r(o[0], n[1], o[1], n[1]), s = l._getPointerElement(e, t, i, a);
                    d.subPixelOptimizeLine({
                        shape: a,
                        style: s.style
                    }), c ? d.updateProps(s, {shape: a}, t) : s.attr({shape: a})
                }

                function s(i, n, r) {
                    var a = e.getAxis(i), s = a.getBandWidth(), u = r[1] - r[0], h = "x" === i ? o(n[0] - s / 2, r[0], s, u) : o(r[0], n[1] - s / 2, u, s), f = l._getPointerElement(e, t, i, h);
                    c ? d.updateProps(f, {shape: h}, t) : f.attr({shape: h})
                }

                var l = this, u = t.get("type"), h = e.getBaseAxis(), c = "cross" !== u && "category" === h.type && h.getBandWidth() > 20;
                if ("cross" === u)a("x", n, e.getAxis("y").getGlobalExtent()), a("y", n, e.getAxis("x").getGlobalExtent()), this._updateCrossText(e, n, t); else {
                    var f = e.getAxis("x" === i ? "y" : "x"), p = f.getGlobalExtent();
                    "cartesian2d" === e.type && ("line" === u ? a : s)(i, n, p)
                }
            }, _showSinglePointer: function (t, e, i, n) {
                function o(i, n, o) {
                    var s = e.getAxis(), u = s.orient, h = "horizontal" === u ? r(n[0], o[0], n[0], o[1]) : r(o[0], n[1], o[1], n[1]), c = a._getPointerElement(e, t, i, h);
                    l ? d.updateProps(c, {shape: h}, t) : c.attr({shape: h})
                }

                var a = this, s = t.get("type"), l = "cross" !== s && "category" === e.getBaseAxis().type, u = e.getRect(), h = [u.y, u.y + u.height];
                o(i, n, h)
            }, _showPolarPointer: function (t, e, i, n) {
                function o(i, n, o) {
                    var a, s = e.pointToCoord(n);
                    if ("angle" === i) {
                        var u = e.coordToPoint([o[0], s[1]]), h = e.coordToPoint([o[1], s[1]]);
                        a = r(u[0], u[1], h[0], h[1])
                    } else a = {cx: e.cx, cy: e.cy, r: s[0]};
                    var c = l._getPointerElement(e, t, i, a);
                    f ? d.updateProps(c, {shape: a}, t) : c.attr({shape: a})
                }

                function s(i, n, r) {
                    var o, s = e.getAxis(i), u = s.getBandWidth(), h = e.pointToCoord(n), c = Math.PI / 180;
                    o = "angle" === i ? a(e.cx, e.cy, r[0], r[1], (-h[1] - u / 2) * c, (-h[1] + u / 2) * c) : a(e.cx, e.cy, h[0] - u / 2, h[0] + u / 2, 0, 2 * Math.PI);
                    var p = l._getPointerElement(e, t, i, o);
                    f ? d.updateProps(p, {shape: o}, t) : p.attr({shape: o})
                }

                var l = this, u = t.get("type"), h = e.getAngleAxis(), c = e.getRadiusAxis(), f = "cross" !== u && "category" === e.getBaseAxis().type;
                if ("cross" === u)o("angle", n, c.getExtent()), o("radius", n, h.getExtent()), this._updateCrossText(e, n, t); else {
                    var p = e.getAxis("radius" === i ? "angle" : "radius"), g = p.getExtent();
                    ("line" === u ? o : s)(i, n, g)
                }
            }, _updateCrossText: function (t, e, i) {
                var n = i.getModel("crossStyle"), r = n.getModel("textStyle"), o = this._tooltipModel, a = this._crossText;
                a || (a = this._crossText = new d.Text({
                    style: {
                        textAlign: "left",
                        textVerticalAlign: "bottom"
                    }
                }), this.group.add(a));
                var s = t.pointToData(e), l = t.dimensions;
                s = f.map(s, function (e, i) {
                    var n = t.getAxis(l[i]);
                    return e = "category" === n.type || "time" === n.type ? n.scale.getLabel(e) : p.addCommas(e.toFixed(n.getPixelPrecision()))
                }), a.setStyle({
                    fill: r.getTextColor() || n.get("color"),
                    textFont: r.getFont(),
                    text: s.join(", "),
                    x: e[0] + 5,
                    y: e[1] - 5
                }), a.z = o.get("z"), a.zlevel = o.get("zlevel")
            }, _getPointerElement: function (t, e, i, n) {
                var r = this._tooltipModel, o = r.get("z"), a = r.get("zlevel"), s = this._axisPointers, l = t.name;
                if (s[l] = s[l] || {}, s[l][i])return s[l][i];
                var u = e.get("type"), h = e.getModel(u + "Style"), c = "shadow" === u, f = h[c ? "getAreaStyle" : "getLineStyle"](), p = "polar" === t.type ? c ? "Sector" : "radius" === i ? "Circle" : "Line" : c ? "Rect" : "Line";
                c ? f.stroke = null : f.fill = null;
                var g = s[l][i] = new d[p]({style: f, z: o, zlevel: a, silent: !0, shape: n});
                return this.group.add(g), g
            }, _dispatchAndShowSeriesTooltipContent: function (t, e, i, n, r) {
                var o = this._tooltipModel, a = t.getBaseAxis(), s = "x" === a.dim || "radius" === a.dim ? 0 : 1, l = f.map(e, function (t) {
                    return {
                        seriesIndex: t.seriesIndex,
                        dataIndex: t.getAxisTooltipDataIndex ? t.getAxisTooltipDataIndex(t.coordDimToDataDim(a.dim), n, a) : t.getData().indexOfNearest(t.coordDimToDataDim(a.dim)[0], n[s], !1, "category" === a.type ? .5 : null)
                    }
                }), h = this._lastHover, c = this._api;
                if (h.payloadBatch && !r && c.dispatchAction({
                        type: "downplay",
                        batch: h.payloadBatch
                    }), r || (c.dispatchAction({
                        type: "highlight",
                        batch: l
                    }), h.payloadBatch = l), c.dispatchAction({
                        type: "showTip",
                        dataIndex: l[0].dataIndex,
                        seriesIndex: l[0].seriesIndex,
                        from: this.uid
                    }), a && o.get("showContent") && o.get("show")) {
                    var d = f.map(e, function (t, e) {
                        return t.getDataParams(l[e].dataIndex)
                    });
                    if (r)u(o.get("position"), i[0], i[1], this._tooltipContent, d, null, c); else {
                        var p = l[0].dataIndex, g = "time" === a.type ? a.scale.getLabel(n[s]) : e[0].getData().getName(p), v = (g ? g + "<br />" : "") + f.map(e, function (t, e) {
                                return t.formatTooltip(l[e].dataIndex, !0)
                            }).join("<br />"), m = "axis_" + t.name + "_" + p;
                        this._showTooltipContent(o, v, d, m, i[0], i[1], null, c)
                    }
                }
            }, _showItemTooltipContent: function (t, e, i, n) {
                var r = this._api, o = t.getData(i), a = o.getItemModel(e), s = a.get("tooltip", !0);
                if ("string" == typeof s) {
                    var l = s;
                    s = {formatter: l}
                }
                var u = this._tooltipModel, h = t.getModel("tooltip", u), c = new y(s, h, h.ecModel), d = t.getDataParams(e, i), f = t.formatTooltip(e, !1, i), p = "item_" + t.name + "_" + e;
                this._showTooltipContent(c, f, d, p, n.offsetX, n.offsetY, n.target, r)
            }, _showTooltipContent: function (t, e, i, n, r, o, a, s) {
                if (this._ticket = "", t.get("showContent") && t.get("show")) {
                    var l = this._tooltipContent, h = t.get("formatter"), c = t.get("position"), d = e;
                    if (h)if ("string" == typeof h)d = p.formatTpl(h, i); else if ("function" == typeof h) {
                        var f = this, g = n, v = function (t, e) {
                            t === f._ticket && (l.setContent(e), u(c, r, o, l, i, a, s))
                        };
                        f._ticket = g, d = h(i, g, v)
                    }
                    l.show(t), l.setContent(d), u(c, r, o, l, i, a, s)
                }
            }, _showAxisPointer: function (t) {
                if (t) {
                    var e = this._axisPointers[t];
                    e && f.each(e, function (t) {
                        t.show()
                    })
                } else this.group.eachChild(function (t) {
                    t.show()
                }), this.group.show()
            }, _resetLastHover: function () {
                var t = this._lastHover;
                t.payloadBatch && this._api.dispatchAction({
                    type: "downplay",
                    batch: t.payloadBatch
                }), this._lastHover = {}
            }, _hideAxisPointer: function (t) {
                if (t) {
                    var e = this._axisPointers[t];
                    e && f.each(e, function (t) {
                        t.hide()
                    })
                } else this.group.children().length && this.group.hide()
            }, _hide: function () {
                clearTimeout(this._showTimeout), this._hideAxisPointer(), this._resetLastHover(), this._alwaysShowContent || this._tooltipContent.hideLater(this._tooltipModel.get("hideDelay")), this._api.dispatchAction({
                    type: "hideTip",
                    from: this.uid
                }), this._lastX = this._lastY = null
            }, dispose: function (t, e) {
                if (!m.node) {
                    var i = e.getZr();
                    this._tooltipContent.hide(), i.off("click", this._tryShow), i.off("mousemove", this._mousemove), i.off("mouseout", this._hide), i.off("globalout", this._hide), e.off("showTip", this._manuallyShowTip), e.off("hideTip", this._manuallyHideTip)
                }
            }
        })
    }, function (t, e, i) {
        function n(t, e) {
            var i = t.get("center"), n = t.get("radius"), r = e.getWidth(), o = e.getHeight(), a = s.parsePercent;
            this.cx = a(i[0], r), this.cy = a(i[1], o);
            var l = this.getRadiusAxis(), u = Math.min(r, o) / 2;
            l.setExtent(0, a(n, u))
        }

        function r(t, e) {
            var i = this, n = i.getAngleAxis(), r = i.getRadiusAxis();
            if (n.scale.setExtent(1 / 0, -(1 / 0)), r.scale.setExtent(1 / 0, -(1 / 0)), t.eachSeries(function (t) {
                    if (t.coordinateSystem === i) {
                        var e = t.getData();
                        r.scale.unionExtent(e.getDataExtent("radius", "category" !== r.type)), n.scale.unionExtent(e.getDataExtent("angle", "category" !== n.type))
                    }
                }), u(n, n.model), u(r, r.model), "category" === n.type && !n.onBand) {
                var o = n.getExtent(), a = 360 / n.scale.count();
                n.inverse ? o[1] += a : o[1] -= a, n.setExtent(o[0], o[1])
            }
        }

        function o(t, e) {
            if (t.type = e.get("type"), t.scale = l.createScaleByModel(e), t.onBand = e.get("boundaryGap") && "category" === t.type, "angleAxis" === e.mainType) {
                var i = e.get("startAngle");
                t.inverse = e.get("inverse") ^ e.get("clockwise"), t.setExtent(i, i + (t.inverse ? -360 : 360))
            }
            e.axis = t, t.model = e
        }

        var a = i(367), s = i(4), l = i(22), u = l.niceScaleExtent;
        i(368);
        var h = {
            dimensions: a.prototype.dimensions, create: function (t, e) {
                var i = [];
                return t.eachComponent("polar", function (t, s) {
                    var l = new a(s);
                    l.resize = n, l.update = r;
                    var u = l.getRadiusAxis(), h = l.getAngleAxis(), c = t.findAxisModel("radiusAxis"), d = t.findAxisModel("angleAxis");
                    o(u, c), o(h, d), l.resize(t, e), i.push(l), t.coordinateSystem = l
                }), t.eachSeries(function (t) {
                    "polar" === t.get("coordinateSystem") && (t.coordinateSystem = i[t.get("polarIndex")])
                }), i
            }
        };
        i(23).register("polar", h)
    }, function (t, e) {
        function i() {
            c && u && (c = !1, u.length ? h = u.concat(h) : d = -1, h.length && n())
        }

        function n() {
            if (!c) {
                var t = a(i);
                c = !0;
                for (var e = h.length; e;) {
                    for (u = h, h = []; ++d < e;)u && u[d].run();
                    d = -1, e = h.length
                }
                u = null, c = !1, s(t)
            }
        }

        function r(t, e) {
            this.fun = t, this.array = e
        }

        function o() {
        }

        var a, s, l = t.exports = {};
        !function () {
            try {
                a = setTimeout
            } catch (t) {
                a = function () {
                    throw new Error("setTimeout is not defined")
                }
            }
            try {
                s = clearTimeout
            } catch (t) {
                s = function () {
                    throw new Error("clearTimeout is not defined")
                }
            }
        }();
        var u, h = [], c = !1, d = -1;
        l.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)for (var i = 1; i < arguments.length; i++)e[i - 1] = arguments[i];
            h.push(new r(t, e)), 1 !== h.length || c || a(n, 0)
        }, r.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, l.title = "browser", l.browser = !0, l.env = {}, l.argv = [], l.version = "", l.versions = {}, l.on = o, l.addListener = o, l.once = o, l.off = o, l.removeListener = o, l.removeAllListeners = o, l.emit = o, l.binding = function (t) {
            throw new Error("process.binding is not supported")
        }, l.cwd = function () {
            return "/"
        }, l.chdir = function (t) {
            throw new Error("process.chdir is not supported")
        }, l.umask = function () {
            return 0
        }
    }, function (t, e, i) {
        function n(t) {
            return parseInt(t, 10)
        }

        function r(t, e) {
            s.initVML(), this.root = t, this.storage = e;
            var i = document.createElement("div"), n = document.createElement("div");
            i.style.cssText = "display:inline-block;overflow:hidden;position:relative;width:300px;height:150px;", n.style.cssText = "position:absolute;left:0;top:0;",
                t.appendChild(i), this._vmlRoot = n, this._vmlViewport = i, this.resize();
            var r = e.delFromMap, o = e.addToMap;
            e.delFromMap = function (t) {
                var i = e.get(t);
                r.call(e, t), i && i.onRemove && i.onRemove(n)
            }, e.addToMap = function (t) {
                t.onAdd && t.onAdd(n), o.call(e, t)
            }, this._firstPaint = !0
        }

        function o(t) {
            return function () {
                a('In IE8.0 VML mode painter not support method "' + t + '"')
            }
        }

        var a = i(47), s = i(167);
        r.prototype = {
            constructor: r, getViewportRoot: function () {
                return this._vmlViewport
            }, refresh: function () {
                var t = this.storage.getDisplayList(!0, !0);
                this._paintList(t)
            }, _paintList: function (t) {
                for (var e = this._vmlRoot, i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.invisible || n.ignore ? (n.__alreadyNotVisible || n.onRemove(e), n.__alreadyNotVisible = !0) : (n.__alreadyNotVisible && n.onAdd(e), n.__alreadyNotVisible = !1, n.__dirty && (n.beforeBrush && n.beforeBrush(), (n.brushVML || n.brush).call(n, e), n.afterBrush && n.afterBrush())), n.__dirty = !1
                }
                this._firstPaint && (this._vmlViewport.appendChild(e), this._firstPaint = !1)
            }, resize: function () {
                var t = this._getWidth(), e = this._getHeight();
                if (this._width != t && this._height != e) {
                    this._width = t, this._height = e;
                    var i = this._vmlViewport.style;
                    i.width = t + "px", i.height = e + "px"
                }
            }, dispose: function () {
                this.root.innerHTML = "", this._vmlRoot = this._vmlViewport = this.storage = null
            }, getWidth: function () {
                return this._width
            }, getHeight: function () {
                return this._height
            }, clear: function () {
                this.root.removeChild(this.vmlViewport)
            }, _getWidth: function () {
                var t = this.root, e = t.currentStyle;
                return (t.clientWidth || n(e.width)) - n(e.paddingLeft) - n(e.paddingRight) | 0
            }, _getHeight: function () {
                var t = this.root, e = t.currentStyle;
                return (t.clientHeight || n(e.height)) - n(e.paddingTop) - n(e.paddingBottom) | 0
            }
        };
        for (var l = ["getLayer", "insertLayer", "eachLayer", "eachBuildinLayer", "eachOtherLayer", "getLayers", "modLayer", "delLayer", "clearLayer", "toDataURL", "pathToImage"], u = 0; u < l.length; u++) {
            var h = l[u];
            r.prototype[h] = o(h)
        }
        t.exports = r
    }, function (t, e, i) {
        if (!i(12).canvasSupported) {
            var n = i(5), r = i(7), o = i(28).CMD, a = i(18), s = i(16), l = i(75), u = i(37), h = i(48), c = i(74), d = i(6), f = i(29), p = i(167), g = Math.round, v = Math.sqrt, m = Math.abs, y = Math.cos, x = Math.sin, _ = Math.max, b = n.applyTransform, w = ",", S = "progid:DXImageTransform.Microsoft", M = 21600, A = M / 2, I = 1e5, T = 1e3, L = function (t) {
                t.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;", t.coordsize = M + "," + M, t.coordorigin = "0,0"
            }, C = function (t) {
                return String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
            }, D = function (t, e, i) {
                return "rgb(" + [t, e, i].join(",") + ")"
            }, P = function (t, e) {
                e && t && e.parentNode !== t && t.appendChild(e)
            }, k = function (t, e) {
                e && t && e.parentNode === t && t.removeChild(e)
            }, z = function (t, e, i) {
                return (parseFloat(t) || 0) * I + (parseFloat(e) || 0) * T + i
            }, O = function (t, e) {
                return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
            }, E = function (t, e, i) {
                var n = a.parse(e);
                i = +i, isNaN(i) && (i = 1), n && (t.color = D(n[0], n[1], n[2]), t.opacity = i * n[3])
            }, R = function (t) {
                var e = a.parse(t);
                return [D(e[0], e[1], e[2]), e[3]]
            }, V = function (t, e, i) {
                var n = e.fill;
                if (null != n)if (n instanceof f) {
                    var r, o = 0, a = [0, 0], s = 0, l = 1, u = i.getBoundingRect(), h = u.width, c = u.height;
                    if ("linear" === n.type) {
                        r = "gradient";
                        var d = i.transform, p = [n.x * h, n.y * c], g = [n.x2 * h, n.y2 * c];
                        d && (b(p, p, d), b(g, g, d));
                        var v = g[0] - p[0], m = g[1] - p[1];
                        o = 180 * Math.atan2(v, m) / Math.PI, 0 > o && (o += 360), 1e-6 > o && (o = 0)
                    } else {
                        r = "gradientradial";
                        var p = [n.x * h, n.y * c], d = i.transform, y = i.scale, x = h, w = c;
                        a = [(p[0] - u.x) / x, (p[1] - u.y) / w], d && b(p, p, d), x /= y[0] * M, w /= y[1] * M;
                        var S = _(x, w);
                        s = 0 / S, l = 2 * n.r / S - s
                    }
                    var A = n.colorStops.slice();
                    A.sort(function (t, e) {
                        return t.offset - e.offset
                    });
                    for (var I = A.length, T = [], L = [], C = 0; I > C; C++) {
                        var D = A[C], P = R(D.color);
                        L.push(D.offset * l + s + " " + P[0]), 0 !== C && C !== I - 1 || T.push(P)
                    }
                    if (I >= 2) {
                        var k = T[0][0], z = T[1][0], O = T[0][1] * e.opacity, V = T[1][1] * e.opacity;
                        t.type = r, t.method = "none", t.focus = "100%", t.angle = o, t.color = k, t.color2 = z, t.colors = L.join(","), t.opacity = V, t.opacity2 = O
                    }
                    "radial" === r && (t.focusposition = a.join(","))
                } else E(t, n, e.opacity)
            }, N = function (t, e) {
                null != e.lineDash && (t.dashstyle = e.lineDash.join(" ")), null == e.stroke || e.stroke instanceof f || E(t, e.stroke, e.opacity)
            }, B = function (t, e, i, n) {
                var r = "fill" == e, o = t.getElementsByTagName(e)[0];
                null != i[e] && "none" !== i[e] && (r || !r && i.lineWidth) ? (t[r ? "filled" : "stroked"] = "true", i[e] instanceof f && k(t, o), o || (o = p.createNode(e)), r ? V(o, i, n) : N(o, i), P(t, o)) : (t[r ? "filled" : "stroked"] = "false", k(t, o))
            }, G = [[], [], []], F = function (t, e) {
                var i, n, r, a, s, l, u = o.M, h = o.C, c = o.L, d = o.A, f = o.Q, p = [];
                for (a = 0; a < t.length;) {
                    switch (r = t[a++], n = "", i = 0, r) {
                        case u:
                            n = " m ", i = 1, s = t[a++], l = t[a++], G[0][0] = s, G[0][1] = l;
                            break;
                        case c:
                            n = " l ", i = 1, s = t[a++], l = t[a++], G[0][0] = s, G[0][1] = l;
                            break;
                        case f:
                        case h:
                            n = " c ", i = 3;
                            var m, _, S = t[a++], I = t[a++], T = t[a++], L = t[a++];
                            r === f ? (m = T, _ = L, T = (T + 2 * S) / 3, L = (L + 2 * I) / 3, S = (s + 2 * S) / 3, I = (l + 2 * I) / 3) : (m = t[a++], _ = t[a++]), G[0][0] = S, G[0][1] = I, G[1][0] = T, G[1][1] = L, G[2][0] = m, G[2][1] = _, s = m, l = _;
                            break;
                        case d:
                            var C = 0, D = 0, P = 1, k = 1, z = 0;
                            e && (C = e[4], D = e[5], P = v(e[0] * e[0] + e[1] * e[1]), k = v(e[2] * e[2] + e[3] * e[3]), z = Math.atan2(-e[1] / k, e[0] / P));
                            var O = t[a++], E = t[a++], R = t[a++], V = t[a++], N = t[a++] + z, B = t[a++] + N + z;
                            a++;
                            var F = t[a++], H = O + y(N) * R, W = E + x(N) * V, S = O + y(B) * R, I = E + x(B) * V, Z = F ? " wa " : " at ";
                            Math.abs(H - S) < 1e-10 && (Math.abs(B - N) > .01 ? F && (H += 270 / M) : Math.abs(W - E) < 1e-10 ? F && O > H || !F && H > O ? I -= 270 / M : I += 270 / M : F && E > W || !F && W > E ? S += 270 / M : S -= 270 / M), p.push(Z, g(((O - R) * P + C) * M - A), w, g(((E - V) * k + D) * M - A), w, g(((O + R) * P + C) * M - A), w, g(((E + V) * k + D) * M - A), w, g((H * P + C) * M - A), w, g((W * k + D) * M - A), w, g((S * P + C) * M - A), w, g((I * k + D) * M - A)), s = S, l = I;
                            break;
                        case o.R:
                            var q = G[0], j = G[1];
                            q[0] = t[a++], q[1] = t[a++], j[0] = q[0] + t[a++], j[1] = q[1] + t[a++], e && (b(q, q, e), b(j, j, e)), q[0] = g(q[0] * M - A), j[0] = g(j[0] * M - A), q[1] = g(q[1] * M - A), j[1] = g(j[1] * M - A), p.push(" m ", q[0], w, q[1], " l ", j[0], w, q[1], " l ", j[0], w, j[1], " l ", q[0], w, j[1]);
                            break;
                        case o.Z:
                            p.push(" x ")
                    }
                    if (i > 0) {
                        p.push(n);
                        for (var U = 0; i > U; U++) {
                            var X = G[U];
                            e && b(X, X, e), p.push(g(X[0] * M - A), w, g(X[1] * M - A), i - 1 > U ? w : "")
                        }
                    }
                }
                return p.join("")
            };
            d.prototype.brushVML = function (t) {
                var e = this.style, i = this._vmlEl;
                i || (i = p.createNode("shape"), L(i), this._vmlEl = i), B(i, "fill", e, this), B(i, "stroke", e, this);
                var n = this.transform, r = null != n, o = i.getElementsByTagName("stroke")[0];
                if (o) {
                    var a = e.lineWidth;
                    if (r && !e.strokeNoScale) {
                        var s = n[0] * n[3] - n[1] * n[2];
                        a *= v(m(s))
                    }
                    o.weight = a + "px"
                }
                var l = this.path;
                this.__dirtyPath && (l.beginPath(), this.buildPath(l, this.shape), l.toStatic(), this.__dirtyPath = !1), i.path = F(l.data, this.transform), i.style.zIndex = z(this.zlevel, this.z, this.z2), P(t, i), e.text ? this.drawRectText(t, this.getBoundingRect()) : this.removeRectText(t)
            }, d.prototype.onRemove = function (t) {
                k(t, this._vmlEl), this.removeRectText(t)
            }, d.prototype.onAdd = function (t) {
                P(t, this._vmlEl), this.appendRectText(t)
            };
            var H = function (t) {
                return "object" == typeof t && t.tagName && "IMG" === t.tagName.toUpperCase()
            };
            h.prototype.brushVML = function (t) {
                var e, i, n = this.style, r = n.image;
                if (H(r)) {
                    var o = r.src;
                    if (o === this._imageSrc)e = this._imageWidth, i = this._imageHeight; else {
                        var a = r.runtimeStyle, s = a.width, l = a.height;
                        a.width = "auto", a.height = "auto", e = r.width, i = r.height, a.width = s, a.height = l, this._imageSrc = o, this._imageWidth = e, this._imageHeight = i
                    }
                    r = o
                } else r === this._imageSrc && (e = this._imageWidth, i = this._imageHeight);
                if (r) {
                    var u = n.x || 0, h = n.y || 0, c = n.width, d = n.height, f = n.sWidth, m = n.sHeight, y = n.sx || 0, x = n.sy || 0, M = f && m, A = this._vmlEl;
                    A || (A = p.doc.createElement("div"), L(A), this._vmlEl = A);
                    var I, T = A.style, C = !1, D = 1, k = 1;
                    if (this.transform && (I = this.transform, D = v(I[0] * I[0] + I[1] * I[1]), k = v(I[2] * I[2] + I[3] * I[3]), C = I[1] || I[2]), C) {
                        var O = [u, h], E = [u + c, h], R = [u, h + d], V = [u + c, h + d];
                        b(O, O, I), b(E, E, I), b(R, R, I), b(V, V, I);
                        var N = _(O[0], E[0], R[0], V[0]), B = _(O[1], E[1], R[1], V[1]), G = [];
                        G.push("M11=", I[0] / D, w, "M12=", I[2] / k, w, "M21=", I[1] / D, w, "M22=", I[3] / k, w, "Dx=", g(u * D + I[4]), w, "Dy=", g(h * k + I[5])), T.padding = "0 " + g(N) + "px " + g(B) + "px 0", T.filter = S + ".Matrix(" + G.join("") + ", SizingMethod=clip)"
                    } else I && (u = u * D + I[4], h = h * k + I[5]), T.filter = "", T.left = g(u) + "px", T.top = g(h) + "px";
                    var F = this._imageEl, W = this._cropEl;
                    F || (F = p.doc.createElement("div"), this._imageEl = F);
                    var Z = F.style;
                    if (M) {
                        if (e && i)Z.width = g(D * e * c / f) + "px", Z.height = g(k * i * d / m) + "px"; else {
                            var q = new Image, j = this;
                            q.onload = function () {
                                q.onload = null, e = q.width, i = q.height, Z.width = g(D * e * c / f) + "px", Z.height = g(k * i * d / m) + "px", j._imageWidth = e, j._imageHeight = i, j._imageSrc = r
                            }, q.src = r
                        }
                        W || (W = p.doc.createElement("div"), W.style.overflow = "hidden", this._cropEl = W);
                        var U = W.style;
                        U.width = g((c + y * c / f) * D), U.height = g((d + x * d / m) * k), U.filter = S + ".Matrix(Dx=" + -y * c / f * D + ",Dy=" + -x * d / m * k + ")", W.parentNode || A.appendChild(W), F.parentNode != W && W.appendChild(F)
                    } else Z.width = g(D * c) + "px", Z.height = g(k * d) + "px", A.appendChild(F), W && W.parentNode && (A.removeChild(W), this._cropEl = null);
                    var X = "", Y = n.opacity;
                    1 > Y && (X += ".Alpha(opacity=" + g(100 * Y) + ") "), X += S + ".AlphaImageLoader(src=" + r + ", SizingMethod=scale)", Z.filter = X, A.style.zIndex = z(this.zlevel, this.z, this.z2), P(t, A), n.text && this.drawRectText(t, this.getBoundingRect())
                }
            }, h.prototype.onRemove = function (t) {
                k(t, this._vmlEl), this._vmlEl = null, this._cropEl = null, this._imageEl = null, this.removeRectText(t)
            }, h.prototype.onAdd = function (t) {
                P(t, this._vmlEl), this.appendRectText(t)
            };
            var W, Z = "normal", q = {}, j = 0, U = 100, X = document.createElement("div"), Y = function (t) {
                var e = q[t];
                if (!e) {
                    j > U && (j = 0, q = {});
                    var i, n = X.style;
                    try {
                        n.font = t, i = n.fontFamily.split(",")[0]
                    } catch (r) {
                    }
                    e = {
                        style: n.fontStyle || Z,
                        variant: n.fontVariant || Z,
                        weight: n.fontWeight || Z,
                        size: 0 | parseFloat(n.fontSize || 12),
                        family: i || "Microsoft YaHei"
                    }, q[t] = e, j++
                }
                return e
            };
            s.measureText = function (t, e) {
                var i = p.doc;
                W || (W = i.createElement("div"), W.style.cssText = "position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;", p.doc.body.appendChild(W));
                try {
                    W.style.font = e
                } catch (n) {
                }
                return W.innerHTML = "", W.appendChild(i.createTextNode(t)), {width: W.offsetWidth}
            };
            for (var $ = new r, Q = function (t, e, i, n) {
                var r = this.style, o = r.text;
                if (o) {
                    var a, l, u = r.textAlign, h = Y(r.textFont), c = h.style + " " + h.variant + " " + h.weight + " " + h.size + 'px "' + h.family + '"', d = r.textBaseline, f = r.textVerticalAlign;
                    i = i || s.getBoundingRect(o, c, u, d);
                    var v = this.transform;
                    if (v && !n && ($.copy(e), $.applyTransform(v), e = $), n)a = e.x, l = e.y; else {
                        var m = r.textPosition, y = r.textDistance;
                        if (m instanceof Array)a = e.x + O(m[0], e.width), l = e.y + O(m[1], e.height), u = u || "left", d = d || "top"; else {
                            var x = s.adjustTextPositionOnRect(m, e, i, y);
                            a = x.x, l = x.y, u = u || x.textAlign, d = d || x.textBaseline
                        }
                    }
                    if (f) {
                        switch (f) {
                            case"middle":
                                l -= i.height / 2;
                                break;
                            case"bottom":
                                l -= i.height
                        }
                        d = "top"
                    }
                    var _ = h.size;
                    switch (d) {
                        case"hanging":
                        case"top":
                            l += _ / 1.75;
                            break;
                        case"middle":
                            break;
                        default:
                            l -= _ / 2.25
                    }
                    switch (u) {
                        case"left":
                            break;
                        case"center":
                            a -= i.width / 2;
                            break;
                        case"right":
                            a -= i.width
                    }
                    var S, M, A, I = p.createNode, T = this._textVmlEl;
                    T ? (A = T.firstChild, S = A.nextSibling, M = S.nextSibling) : (T = I("line"), S = I("path"), M = I("textpath"), A = I("skew"), M.style["v-text-align"] = "left", L(T), S.textpathok = !0, M.on = !0, T.from = "0 0", T.to = "1000 0.05", P(T, A), P(T, S), P(T, M), this._textVmlEl = T);
                    var D = [a, l], k = T.style;
                    v && n ? (b(D, D, v), A.on = !0, A.matrix = v[0].toFixed(3) + w + v[2].toFixed(3) + w + v[1].toFixed(3) + w + v[3].toFixed(3) + ",0,0", A.offset = (g(D[0]) || 0) + "," + (g(D[1]) || 0), A.origin = "0 0", k.left = "0px", k.top = "0px") : (A.on = !1, k.left = g(a) + "px", k.top = g(l) + "px"), M.string = C(o);
                    try {
                        M.style.font = c
                    } catch (E) {
                    }
                    B(T, "fill", {
                        fill: n ? r.fill : r.textFill,
                        opacity: r.opacity
                    }, this), B(T, "stroke", {
                        stroke: n ? r.stroke : r.textStroke,
                        opacity: r.opacity,
                        lineDash: r.lineDash
                    }, this), T.style.zIndex = z(this.zlevel, this.z, this.z2), P(t, T)
                }
            }, K = function (t) {
                k(t, this._textVmlEl), this._textVmlEl = null
            }, J = function (t) {
                P(t, this._textVmlEl)
            }, tt = [l, u, h, d, c], et = 0; et < tt.length; et++) {
                var it = tt[et].prototype;
                it.drawRectText = Q, it.removeRectText = K, it.appendRectText = J
            }
            c.prototype.brushVML = function (t) {
                var e = this.style;
                e.text ? this.drawRectText(t, {
                    x: e.x || 0,
                    y: e.y || 0,
                    width: 0,
                    height: 0
                }, this.getBoundingRect(), !0) : this.removeRectText(t)
            }, c.prototype.onRemove = function (t) {
                this.removeRectText(t)
            }, c.prototype.onAdd = function (t) {
                this.appendRectText(t)
            }
        }
    }, function (t, e, i) {
        i(217), i(76).registerPainter("vml", i(216))
    }, function (t, e, i) {
        var n = i(1), r = i(220), o = i(2);
        o.registerAction({type: "geoRoam", event: "geoRoam", update: "updateLayout"}, function (t, e) {
            var i = t.componentType || "series";
            e.eachComponent({mainType: i, query: t}, function (e) {
                var o = e.coordinateSystem;
                if ("geo" === o.type) {
                    var a = r.updateCenterAndZoom(o, t, e.get("scaleLimit"));
                    e.setCenter && e.setCenter(a.center), e.setZoom && e.setZoom(a.zoom), "series" === i && n.each(e.seriesGroup, function (t) {
                        t.setCenter(a.center), t.setZoom(a.zoom)
                    })
                }
            })
        })
    }, function (t, e) {
        var i = {};
        i.updateCenterAndZoom = function (t, e, i) {
            var n = t.getZoom(), r = t.getCenter(), o = e.zoom, a = t.dataToPoint(r);
            if (null != e.dx && null != e.dy) {
                a[0] -= e.dx, a[1] -= e.dy;
                var r = t.pointToData(a);
                t.setCenter(r)
            }
            if (null != o) {
                if (i) {
                    var s = i.min || 0, l = i.max || 1 / 0;
                    o = Math.max(Math.min(n * o, l), s) / n
                }
                t.scale[0] *= o, t.scale[1] *= o;
                var u = t.position, h = (e.originX - u[0]) * (o - 1), c = (e.originY - u[1]) * (o - 1);
                u[0] -= h, u[1] -= c, t.updateTransform();
                var r = t.pointToData(a);
                t.setCenter(r), t.setZoom(o * n)
            }
            return {center: t.getCenter(), zoom: t.getZoom()}
        }, t.exports = i
    }, function (t, e, i) {
        var n = i(5);
        t.exports = function (t) {
            var e = t.coordinateSystem;
            if (!e || "view" === e.type) {
                var i = e.getBoundingRect(), r = t.getData(), o = r.graph, a = 0, s = r.getSum("value"), l = 2 * Math.PI / (s || r.count()), u = i.width / 2 + i.x, h = i.height / 2 + i.y, c = Math.min(i.width, i.height) / 2;
                o.eachNode(function (t) {
                    var e = t.getValue("value");
                    a += l * (s ? e : 2) / 2, t.setLayout([c * Math.cos(a) + u, c * Math.sin(a) + h]), a += l * (s ? e : 2) / 2
                }), o.eachEdge(function (t) {
                    var e, i = t.getModel().get("lineStyle.normal.curveness") || 0, r = n.clone(t.node1.getLayout()), o = n.clone(t.node2.getLayout()), a = (r[0] + o[0]) / 2, s = (r[1] + o[1]) / 2;
                    i > 0 && (i *= 3, e = [u * i + a * (1 - i), h * i + s * (1 - i)]), t.setLayout([r, o, e])
                })
            }
        }
    }, function (t, e, i) {
        var n = i(5);
        t.exports = function (t) {
            t.eachEdge(function (t) {
                var e = t.getModel().get("lineStyle.normal.curveness") || 0, i = n.clone(t.node1.getLayout()), r = n.clone(t.node2.getLayout()), o = [i, r];
                e > 0 && o.push([(i[0] + r[0]) / 2 - (i[1] - r[1]) * e, (i[1] + r[1]) / 2 - (r[0] - i[0]) * e]), t.setLayout(o)
            })
        }
    }, function (t, e, i) {
        var n = i(222);
        t.exports = function (t) {
            var e = t.coordinateSystem;
            if (!e || "view" === e.type) {
                var i = t.getGraph();
                i.eachNode(function (t) {
                    var e = t.getModel();
                    t.setLayout([+e.get("x"), +e.get("y")])
                }), n(i)
            }
        }
    }, function (t, e, i) {
        function n(t, e, i) {
            r.Group.call(this), this.add(this.createLine(t, e, i)), this._updateEffectSymbol(t, e)
        }

        var r = i(3), o = i(92), a = i(1), s = i(26), l = i(5), u = i(17), h = n.prototype;
        h.createLine = function (t, e, i) {
            return new o(t, e, i)
        }, h._updateEffectSymbol = function (t, e) {
            var i = t.getItemModel(e), n = i.getModel("effect"), r = n.get("symbolSize"), o = n.get("symbol");
            a.isArray(r) || (r = [r, r]);
            var l = n.get("color") || t.getItemVisual(e, "color"), u = this.childAt(1);
            this._symbolType !== o && (this.remove(u), u = s.createSymbol(o, -.5, -.5, 1, 1, l), u.z2 = 100, u.culling = !0, this.add(u)), u && (u.setStyle("shadowColor", l), u.setStyle(n.getItemStyle(["color"])), u.attr("scale", r), u.setColor(l), u.attr("scale", r), this._symbolType = o, this._updateEffectAnimation(t, n, e))
        }, h._updateEffectAnimation = function (t, e, i) {
            var n = this.childAt(1);
            if (n) {
                var r = this, o = t.getItemLayout(i), a = 1e3 * e.get("period"), s = e.get("loop"), l = e.get("constantSpeed"), u = e.get("delay") || function (e) {
                        return e / t.count() * a / 3
                    }, h = "function" == typeof u;
                if (n.ignore = !0, this.updateAnimationPoints(n, o), l > 0 && (a = this.getLineLength(n) / l * 1e3), a !== this._period || s !== this._loop) {
                    n.stopAnimation();
                    var c = u;
                    h && (c = u(i)), n.__t > 0 && (c = -a * n.__t), n.__t = 0;
                    var d = n.animate("", s).when(a, {__t: 1}).delay(c).during(function () {
                        r.updateSymbolPosition(n)
                    });
                    s || d.done(function () {
                        r.remove(n)
                    }), d.start()
                }
                this._period = a, this._loop = s
            }
        }, h.getLineLength = function (t) {
            return l.dist(t.__p1, t.__cp1) + l.dist(t.__cp1, t.__p2)
        }, h.updateAnimationPoints = function (t, e) {
            t.__p1 = e[0], t.__p2 = e[1], t.__cp1 = e[2] || [(e[0][0] + e[1][0]) / 2, (e[0][1] + e[1][1]) / 2]
        }, h.updateData = function (t, e, i) {
            this.childAt(0).updateData(t, e, i), this._updateEffectSymbol(t, e)
        }, h.updateSymbolPosition = function (t) {
            var e = t.__p1, i = t.__p2, n = t.__cp1, r = t.__t, o = t.position, a = u.quadraticAt, s = u.quadraticDerivativeAt;
            o[0] = a(e[0], n[0], i[0], r), o[1] = a(e[1], n[1], i[1], r);
            var l = s(e[0], n[0], i[0], r), h = s(e[1], n[1], i[1], r);
            t.rotation = -Math.atan2(h, l) - Math.PI / 2, t.ignore = !1
        }, h.updateLayout = function (t, e) {
            this.childAt(0).updateLayout(t, e);
            var i = t.getItemModel(e).getModel("effect");
            this._updateEffectAnimation(t, i, e)
        }, a.inherits(n, r.Group), t.exports = n
    }, function (t, e, i) {
        function n(t, e, i) {
            r.Group.call(this), this._createPolyline(t, e, i)
        }

        var r = i(3), o = i(1), a = n.prototype;
        a._createPolyline = function (t, e, i) {
            var n = t.getItemLayout(e), o = new r.Polyline({shape: {points: n}});
            this.add(o), this._updateCommonStl(t, e, i)
        }, a.updateData = function (t, e, i) {
            var n = t.hostModel, o = this.childAt(0), a = {shape: {points: t.getItemLayout(e)}};
            r.updateProps(o, a, n, e), this._updateCommonStl(t, e, i)
        }, a._updateCommonStl = function (t, e, i) {
            var n = this.childAt(0), a = t.getItemModel(e), s = t.getItemVisual(e, "color"), l = i && i.lineStyle, u = i && i.hoverLineStyle;
            i && !t.hasItemOption || (l = a.getModel("lineStyle.normal").getLineStyle(), u = a.getModel("lineStyle.emphasis").getLineStyle()), n.useStyle(o.defaults({
                strokeNoScale: !0,
                fill: "none",
                stroke: s
            }, l)), n.hoverStyle = u, r.setHoverStyle(this)
        }, a.updateLayout = function (t, e) {
            var i = this.childAt(0);
            i.setShape("points", t.getItemLayout(e))
        }, o.inherits(n, r.Group), t.exports = n
    }, function (t, e, i) {
        var n = i(14), r = i(377), o = i(239), a = i(30), s = i(23), l = i(1), u = i(35);
        t.exports = function (t, e, i, h, c) {
            for (var d = new r(h), f = 0; f < t.length; f++)d.addNode(l.retrieve(t[f].id, t[f].name, f), f);
            for (var p = [], g = [], f = 0; f < e.length; f++) {
                var v = e[f], m = v.source, y = v.target;
                d.addEdge(m, y, f) && (g.push(v), p.push(l.retrieve(v.id, m + " > " + y)))
            }
            var x, _ = i.get("coordinateSystem");
            if ("cartesian2d" === _ || "polar" === _)x = u(t, i, i.ecModel); else {
                var b = s.get(_), w = a((b && "view" !== b.type ? b.dimensions || [] : []).concat(["value"]), t);
                x = new n(w, i), x.initData(t)
            }
            var S = new n(["value"], i);
            return S.initData(g, p), c && c(x, S), o({
                mainData: x,
                struct: d,
                structAttr: "graph",
                datas: {node: x, edge: S},
                datasAttr: {node: "data", edge: "edgeData"}
            }), d.update(), d
        }
    }, function (t, e, i) {
        function n(t, e) {
            var i = t.getItemStyle(), n = t.get("areaColor");
            return n && (i.fill = n), i
        }

        function r(t, e, i, n) {
            e.off("click"), t.get("selectedMode") && e.on("click", function (r) {
                for (var a = r.target; !a.__region;)a = a.parent;
                if (a) {
                    var s = a.__region, l = {
                        type: ("geo" === t.mainType ? "geo" : "map") + "ToggleSelect",
                        name: s.name,
                        from: n.uid
                    };
                    l[t.mainType + "Id"] = t.id, i.dispatchAction(l), o(t, e)
                }
            })
        }

        function o(t, e) {
            e.eachChild(function (e) {
                e.__region && e.trigger(t.isSelected(e.__region.name) ? "emphasis" : "normal")
            })
        }

        function a(t, e) {
            var i = new l.Group;
            this._controller = new s(t.getZr(), e ? i : null, null), this.group = i, this._updateGroup = e
        }

        var s = i(78), l = i(3), u = i(1);
        a.prototype = {
            constructor: a, draw: function (t, e, i, a, s) {
                var h = t.getData && t.getData(), c = t.coordinateSystem, d = this.group, f = c.scale, p = {
                    position: c.position,
                    scale: f
                };
                !d.childAt(0) || s ? d.attr(p) : l.updateProps(d, p, t), d.removeAll();
                var g = ["itemStyle", "normal"], v = ["itemStyle", "emphasis"], m = ["label", "normal"], y = ["label", "emphasis"];
                u.each(c.regions, function (e) {
                    var i = new l.Group, r = new l.CompoundPath({shape: {paths: []}});
                    i.add(r);
                    var o, a = t.getRegionModel(e.name) || t, s = a.getModel(g), c = a.getModel(v), p = n(s, f), x = n(c, f), _ = a.getModel(m), b = a.getModel(y);
                    if (h) {
                        o = h.indexOfName(e.name);
                        var w = h.getItemVisual(o, "color", !0);
                        w && (p.fill = w)
                    }
                    var S = _.getModel("textStyle"), M = b.getModel("textStyle");
                    u.each(e.contours, function (t) {
                        var e = new l.Polygon({shape: {points: t}});
                        r.shape.paths.push(e)
                    }), r.setStyle(p), r.style.strokeNoScale = !0, r.culling = !0;
                    var A = _.get("show"), I = b.get("show"), T = h && isNaN(h.get("value", o)), L = h && h.getItemLayout(o);
                    if (!h || T && (A || I) || L && L.showLabel) {
                        var C = h ? o : e.name, D = t.getFormattedLabel(C, "normal"), P = t.getFormattedLabel(C, "emphasis"), k = new l.Text({
                            style: {
                                text: A ? D || e.name : "",
                                fill: S.getTextColor(),
                                textFont: S.getFont(),
                                textAlign: "center",
                                textVerticalAlign: "middle"
                            },
                            hoverStyle: {text: I ? P || e.name : "", fill: M.getTextColor(), textFont: M.getFont()},
                            position: e.center.slice(),
                            scale: [1 / f[0], 1 / f[1]],
                            z2: 10,
                            silent: !0
                        });
                        i.add(k)
                    }
                    if (h)h.setItemGraphicEl(o, i); else {
                        var a = t.getRegionModel(e.name);
                        r.eventData = {
                            componentType: "geo",
                            geoIndex: t.componentIndex,
                            name: e.name,
                            region: a && a.option || {}
                        }
                    }
                    i.__region = e, l.setHoverStyle(i, x), d.add(i)
                }), this._updateController(t, e, i), r(t, d, i, a), o(t, d)
            }, remove: function () {
                this.group.removeAll(), this._controller.dispose()
            }, _updateController: function (t, e, i) {
                function n() {
                    var e = {type: "geoRoam", componentType: a};
                    return e[a + "Id"] = t.id, e
                }

                var r = t.coordinateSystem, o = this._controller;
                o.zoomLimit = t.get("scaleLimit"), o.zoom = r.getZoom(), o.enable(t.get("roam") || !1);
                var a = t.mainType;
                o.off("pan").on("pan", function (t, e) {
                    i.dispatchAction(u.extend(n(), {dx: t, dy: e}))
                }), o.off("zoom").on("zoom", function (t, e, r) {
                    if (i.dispatchAction(u.extend(n(), {zoom: t, originX: e, originY: r})), this._updateGroup) {
                        var o = this.group, a = o.scale;
                        o.traverse(function (t) {
                            "text" === t.type && t.attr("scale", [1 / a[0], 1 / a[1]])
                        })
                    }
                }, this), o.rectProvider = function () {
                    return r.getViewRectAfterRoam()
                }
            }
        }, t.exports = a
    }, function (t, e, i) {
        i(238), i(363), i(331);
        var n = i(2), r = i(1), o = 5;
        n.extendComponentView({
            type: "parallel", render: function (t, e, i) {
                var n = i.getZr();
                if (!this.__onMouseDown) {
                    var a;
                    n.on("mousedown", this.__onMouseDown = function (t) {
                        a = [t.offsetX, t.offsetY]
                    }), n.on("mouseup", this.__onMouseUp = function (e) {
                        var n = [e.offsetX, e.offsetY], s = Math.pow(a[0] - n[0], 2) + Math.pow(a[1] - n[1], 2);
                        if (t.get("axisExpandable") && !(s > o)) {
                            var l = t.coordinateSystem, u = l.findClosestAxisDim(n);
                            if (u) {
                                var h = r.indexOf(l.dimensions, u);
                                i.dispatchAction({type: "parallelAxisExpand", axisExpandCenter: h})
                            }
                        }
                    })
                }
            }, dispose: function (t, e) {
                e.getZr().off(this.__onMouseDown), e.getZr().off(this.__onMouseUp)
            }
        }), n.registerPreprocessor(i(364))
    }, function (t, e, i) {
        var n = i(2), r = i(1), o = i(12), a = i(381), s = i(71), l = i(171), u = s.mapVisual, h = i(10), c = s.eachVisual, d = i(4), f = r.isArray, p = r.each, g = d.asc, v = d.linearMap, m = r.noop, y = ["#f6efa6", "#d88273", "#bf444c"], x = n.extendComponentModel({
            type: "visualMap",
            dependencies: ["series"],
            stateList: ["inRange", "outOfRange"],
            replacableOptionKeys: ["inRange", "outOfRange", "target", "controller", "color"],
            dataBound: [-(1 / 0), 1 / 0],
            layoutMode: {type: "box", ignoreSize: !0},
            defaultOption: {
                show: !0,
                zlevel: 0,
                z: 4,
                seriesIndex: null,
                min: 0,
                max: 200,
                dimension: null,
                inRange: null,
                outOfRange: null,
                left: 0,
                right: null,
                top: null,
                bottom: 0,
                itemWidth: null,
                itemHeight: null,
                inverse: !1,
                orient: "vertical",
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "#ccc",
                contentColor: "#5793f3",
                inactiveColor: "#aaa",
                borderWidth: 0,
                padding: 5,
                textGap: 10,
                precision: 0,
                color: null,
                formatter: null,
                text: null,
                textStyle: {color: "#333"}
            },
            init: function (t, e, i) {
                this._dataExtent, this.targetVisuals = {}, this.controllerVisuals = {}, this.textStyleModel, this.itemSize, this.mergeDefaultAndTheme(t, i)
            },
            optionUpdated: function (t, e) {
                var i = this.option;
                o.canvasSupported || (i.realtime = !1), !e && l.replaceVisualOption(i, t, this.replacableOptionKeys), this.textStyleModel = this.getModel("textStyle"), this.resetItemSize(), this.completeVisualOption()
            },
            resetVisual: function (t) {
                var e = this.stateList;
                t = r.bind(t, this), this.controllerVisuals = l.createVisualMappings(this.option.controller, e, t), this.targetVisuals = l.createVisualMappings(this.option.target, e, t)
            },
            resetTargetSeries: function () {
                var t = this.option, e = null == t.seriesIndex;
                t.seriesIndex = e ? [] : h.normalizeToArray(t.seriesIndex), e && this.ecModel.eachSeries(function (e, i) {
                    t.seriesIndex.push(i)
                })
            },
            eachTargetSeries: function (t, e) {
                r.each(this.option.seriesIndex, function (i) {
                    t.call(e, this.ecModel.getSeriesByIndex(i))
                }, this)
            },
            isTargetSeries: function (t) {
                var e = !1;
                return this.eachTargetSeries(function (i) {
                    i === t && (e = !0)
                }), e
            },
            formatValueText: function (t, e, i) {
                function n(t) {
                    return t === u[0] ? "min" : t === u[1] ? "max" : (+t).toFixed(l)
                }

                var o, a, s = this.option, l = s.precision, u = this.dataBound, h = s.formatter;
                return i = i || ["<", ">"], r.isArray(t) && (t = t.slice(), o = !0), a = e ? t : o ? [n(t[0]), n(t[1])] : n(t), r.isString(h) ? h.replace("{value}", o ? a[0] : a).replace("{value2}", o ? a[1] : a) : r.isFunction(h) ? o ? h(t[0], t[1]) : h(t) : o ? t[0] === u[0] ? i[0] + " " + a[1] : t[1] === u[1] ? i[1] + " " + a[0] : a[0] + " - " + a[1] : a
            },
            resetExtent: function () {
                var t = this.option, e = g([t.min, t.max]);
                this._dataExtent = e
            },
            getDataDimension: function (t) {
                var e = this.option.dimension;
                return null != e ? e : t.dimensions.length - 1
            },
            getExtent: function () {
                return this._dataExtent.slice()
            },
            completeVisualOption: function () {
                function t(t) {
                    f(n.color) && !t.inRange && (t.inRange = {color: n.color.slice().reverse()}), t.inRange = t.inRange || {color: y}, p(this.stateList, function (e) {
                        var i = t[e];
                        if (r.isString(i)) {
                            var n = a.get(i, "active", d);
                            n ? (t[e] = {}, t[e][i] = n) : delete t[e]
                        }
                    }, this)
                }

                function e(t, e, i) {
                    var n = t[e], r = t[i];
                    n && !r && (r = t[i] = {}, p(n, function (t, e) {
                        if (s.isValidType(e)) {
                            var i = a.get(e, "inactive", d);
                            null != i && (r[e] = i, "color" !== e || r.hasOwnProperty("opacity") || r.hasOwnProperty("colorAlpha") || (r.opacity = [0, 0]))
                        }
                    }))
                }

                function i(t) {
                    var e = (t.inRange || {}).symbol || (t.outOfRange || {}).symbol, i = (t.inRange || {}).symbolSize || (t.outOfRange || {}).symbolSize, n = this.get("inactiveColor");
                    p(this.stateList, function (o) {
                        var a = this.itemSize, s = t[o];
                        s || (s = t[o] = {color: d ? n : [n]}), null == s.symbol && (s.symbol = e && r.clone(e) || (d ? "roundRect" : ["roundRect"])), null == s.symbolSize && (s.symbolSize = i && r.clone(i) || (d ? a[0] : [a[0], a[0]])), s.symbol = u(s.symbol, function (t) {
                            return "none" === t || "square" === t ? "roundRect" : t
                        });
                        var l = s.symbolSize;
                        if (null != l) {
                            var h = -(1 / 0);
                            c(l, function (t) {
                                t > h && (h = t)
                            }), s.symbolSize = u(l, function (t) {
                                return v(t, [0, h], [0, a[0]], !0)
                            })
                        }
                    }, this)
                }

                var n = this.option, o = {
                    inRange: n.inRange,
                    outOfRange: n.outOfRange
                }, l = n.target || (n.target = {}), h = n.controller || (n.controller = {});
                r.merge(l, o), r.merge(h, o);
                var d = this.isCategory();
                t.call(this, l), t.call(this, h), e.call(this, l, "inRange", "outOfRange"), i.call(this, h)
            },
            resetItemSize: function () {
                this.itemSize = [parseFloat(this.get("itemWidth")), parseFloat(this.get("itemHeight"))]
            },
            isCategory: function () {
                return !!this.option.categories
            },
            setSelected: m,
            getValueState: m
        });
        t.exports = x
    }, function (t, e, i) {
        var n = i(1), r = i(3), o = i(9), a = i(13), s = i(2), l = i(71);
        t.exports = s.extendComponentView({
            type: "visualMap",
            autoPositionValues: {left: 1, right: 1, top: 1, bottom: 1},
            init: function (t, e) {
                this.ecModel = t, this.api = e, this.visualMapModel
            },
            render: function (t, e, i, n) {
                return this.visualMapModel = t, t.get("show") === !1 ? void this.group.removeAll() : void this.doRender.apply(this, arguments)
            },
            renderBackground: function (t) {
                var e = this.visualMapModel, i = o.normalizeCssArray(e.get("padding") || 0), n = t.getBoundingRect();
                t.add(new r.Rect({
                    z2: -1,
                    silent: !0,
                    shape: {x: n.x - i[3], y: n.y - i[0], width: n.width + i[3] + i[1], height: n.height + i[0] + i[2]},
                    style: {
                        fill: e.get("backgroundColor"),
                        stroke: e.get("borderColor"),
                        lineWidth: e.get("borderWidth")
                    }
                }))
            },
            getControllerVisual: function (t, e, i) {
                function r(t) {
                    return u[t]
                }

                function o(t, e) {
                    u[t] = e
                }

                i = i || {};
                var a = i.forceState, s = this.visualMapModel, u = {};
                if ("symbol" === e && (u.symbol = s.get("itemSymbol")), "color" === e) {
                    var h = s.get("contentColor");
                    u.color = h
                }
                var c = s.controllerVisuals[a || s.getValueState(t)], d = l.prepareVisualTypes(c);
                return n.each(d, function (n) {
                    var a = c[n];
                    i.convertOpacityToAlpha && "opacity" === n && (n = "colorAlpha", a = c.__alphaForOpacity), l.dependsOn(n, e) && a && a.applyVisual(t, r, o)
                }), u[e]
            },
            positionGroup: function (t) {
                var e = this.visualMapModel, i = this.api;
                a.positionGroup(t, e.getBoxLayoutParams(), {width: i.getWidth(), height: i.getHeight()})
            },
            doRender: n.noop
        })
    }, function (t, e, i) {
        var n = i(13), r = {
            getItemAlign: function (t, e, i) {
                var r = t.option, o = r.align;
                if (null != o && "auto" !== o)return o;
                for (var a = {
                    width: e.getWidth(),
                    height: e.getHeight()
                }, s = "horizontal" === r.orient ? 1 : 0, l = [["left", "right", "width"], ["top", "bottom", "height"]], u = l[s], h = [0, null, 10], c = {}, d = 0; 3 > d; d++)c[l[1 - s][d]] = h[d], c[u[d]] = 2 === d ? i[0] : r[u[d]];
                var f = [["x", "width", 3], ["y", "height", 0]][s], p = n.getLayoutRect(c, a, r.padding);
                return u[(p.margin[f[2]] || 0) + p[f[0]] + .5 * p[f[1]] < .5 * a[f[1]] ? 0 : 1]
            }
        };
        t.exports = r
    }, function (t, e, i) {
        function n(t, e) {
            return t && t.hasOwnProperty && t.hasOwnProperty(e)
        }

        var r = i(1), o = r.each;
        t.exports = function (t) {
            var e = t && t.visualMap;
            r.isArray(e) || (e = e ? [e] : []), o(e, function (t) {
                if (t) {
                    n(t, "splitList") && !n(t, "pieces") && (t.pieces = t.splitList, delete t.splitList);
                    var e = t.pieces;
                    e && r.isArray(e) && o(e, function (t) {
                        r.isObject(t) && (n(t, "start") && !n(t, "min") && (t.min = t.start), n(t, "end") && !n(t, "max") && (t.max = t.end))
                    })
                }
            })
        }
    }, function (t, e, i) {
        i(11).registerSubTypeDefaulter("visualMap", function (t) {
            return t.categories || (t.pieces ? t.pieces.length > 0 : t.splitNumber > 0) && !t.calculable ? "piecewise" : "continuous"
        })
    }, function (t, e, i) {
        function n(t, e) {
            t.eachTargetSeries(function (e) {
                var i = e.getData();
                s.applyVisual(t.stateList, t.targetVisuals, i, t.getValueState, t, t.getDataDimension(i))
            })
        }

        function r(t) {
            t.eachSeries(function (e) {
                var i = e.getData(), n = [];
                t.eachComponent("visualMap", function (t) {
                    if (t.isTargetSeries(e)) {
                        var r = {};
                        n.push(r), r.stops = t.getStops(e, o), r.dimension = t.getDataDimension(i)
                    }
                }), e.getData().setVisual("visualMeta", n)
            })
        }

        function o(t, e, i) {
            function n(t) {
                return s[t]
            }

            function r(t, e) {
                s[t] = e
            }

            for (var o = t.targetVisuals[i], a = l.prepareVisualTypes(o), s = {}, u = 0, h = a.length; h > u; u++) {
                var c = a[u], d = o["colorAlpha" === c ? "__alphaForOpacity" : c];
                d && d.applyVisual(e, n, r)
            }
            return s.color
        }

        var a = i(2), s = i(171), l = i(71);
        a.registerVisual(a.PRIORITY.VISUAL.COMPONENT, function (t) {
            t.eachComponent("visualMap", function (e) {
                n(e, t)
            }), r(t)
        })
    }, function (t, e, i) {
        var n = i(2), r = {type: "selectDataRange", event: "dataRangeSelected", update: "update"};
        n.registerAction(r, function (t, e) {
            e.eachComponent({mainType: "visualMap", query: t}, function (e) {
                e.setSelected(t.selected)
            })
        })
    }, function (t, e, i) {
        function n() {
            s.call(this)
        }

        function r(t) {
            this.name = t, this.zoomLimit, s.call(this), this._roamTransform = new n, this._viewTransform = new n, this._center, this._zoom
        }

        var o = i(5), a = i(19), s = i(86), l = i(1), u = i(7), h = o.applyTransform;
        l.mixin(n, s), r.prototype = {
            constructor: r,
            type: "view",
            dimensions: ["x", "y"],
            setBoundingRect: function (t, e, i, n) {
                return this._rect = new u(t, e, i, n), this._rect
            },
            getBoundingRect: function () {
                return this._rect
            },
            setViewRect: function (t, e, i, n) {
                i = i, n = n, this.transformTo(t, e, i, n), this._viewRect = new u(t, e, i, n)
            },
            transformTo: function (t, e, i, n) {
                var r = this.getBoundingRect(), o = this._viewTransform;
                o.transform = r.calculateTransform(new u(t, e, i, n)), o.decomposeTransform(), this._updateTransform()
            },
            setCenter: function (t) {
                t && (this._center = t, this._updateCenterAndZoom())
            },
            setZoom: function (t) {
                t = t || 1;
                var e = this.zoomLimit;
                e && (null != e.max && (t = Math.min(e.max, t)), null != e.min && (t = Math.max(e.min, t))), this._zoom = t, this._updateCenterAndZoom()
            },
            getDefaultCenter: function () {
                var t = this.getBoundingRect(), e = t.x + t.width / 2, i = t.y + t.height / 2;
                return [e, i]
            },
            getCenter: function () {
                return this._center || this.getDefaultCenter()
            },
            getZoom: function () {
                return this._zoom || 1
            },
            getRoamTransform: function () {
                return this._roamTransform
            },
            _updateCenterAndZoom: function () {
                var t = this._viewTransform.getLocalTransform(), e = this._roamTransform, i = this.getDefaultCenter(), n = this.getCenter(), r = this.getZoom();
                n = o.applyTransform([], n, t), i = o.applyTransform([], i, t), e.origin = n, e.position = [i[0] - n[0], i[1] - n[1]], e.scale = [r, r], this._updateTransform()
            },
            _updateTransform: function () {
                var t = this._roamTransform, e = this._viewTransform;
                e.parent = t, t.updateTransform(), e.updateTransform(), e.transform && a.copy(this.transform || (this.transform = []), e.transform), this.transform ? (this.invTransform = this.invTransform || [], a.invert(this.invTransform, this.transform)) : this.invTransform = null, this.decomposeTransform()
            },
            getViewRect: function () {
                return this._viewRect
            },
            getViewRectAfterRoam: function () {
                var t = this.getBoundingRect().clone();
                return t.applyTransform(this.transform), t
            },
            dataToPoint: function (t) {
                var e = this.transform;
                return e ? h([], t, e) : [t[0], t[1]]
            },
            pointToData: function (t) {
                var e = this.invTransform;
                return e ? h([], t, e) : [t[0], t[1]]
            }
        }, l.mixin(r, s), t.exports = r
    }, function (t, e, i) {
        function n(t, e, i) {
            if (this.name = t, this.contours = e, i)i = [i[0], i[1]]; else {
                var n = this.getBoundingRect();
                i = [n.x + n.width / 2, n.y + n.height / 2]
            }
            this.center = i
        }

        var r = i(240), o = i(7), a = i(73), s = i(5);
        n.prototype = {
            constructor: n, getBoundingRect: function () {
                var t = this._rect;
                if (t)return t;
                for (var e = Number.MAX_VALUE, i = [e, e], n = [-e, -e], r = [], l = [], u = this.contours, h = 0; h < u.length; h++)a.fromPoints(u[h], r, l), s.min(i, i, r), s.max(n, n, l);
                return 0 === h && (i[0] = i[1] = n[0] = n[1] = 0), this._rect = new o(i[0], i[1], n[0] - i[0], n[1] - i[1])
            }, contain: function (t) {
                var e = this.getBoundingRect(), i = this.contours;
                if (e.contain(t[0], t[1]))for (var n = 0, o = i.length; o > n; n++)if (r.contain(i[n], t[0], t[1]))return !0;
                return !1
            }, transformTo: function (t, e, i, n) {
                var r = this.getBoundingRect(), a = r.width / r.height;
                i ? n || (n = i / a) : i = a * n;
                for (var l = new o(t, e, i, n), u = r.calculateTransform(l), h = this.contours, c = 0; c < h.length; c++)for (var d = 0; d < h[c].length; d++)s.applyTransform(h[c][d], h[c][d], u);
                r = this._rect, r.copy(l), this.center = [r.x + r.width / 2, r.y + r.height / 2]
            }
        }, t.exports = n
    }, function (t, e, i) {
        function n(t, e) {
            var i = [];
            return t.eachComponent("parallel", function (n, o) {
                var a = new r(n, t, e);
                a.name = "parallel_" + o, a.resize(n, e), n.coordinateSystem = a, a.model = n, i.push(a)
            }), t.eachSeries(function (t) {
                if ("parallel" === t.get("coordinateSystem")) {
                    var e = t.get("parallelIndex");
                    t.coordinateSystem = i[e]
                }
            }), i
        }

        var r = i(361);
        i(23).register("parallel", {create: n})
    }, function (t, e, i) {
        function n(t) {
            var e = t.mainData, i = t.datas;
            i || (i = {main: e}, t.datasAttr = {main: "data"}), t.datas = t.mainData = null, u(e, i, t), d(i, function (i) {
                d(e.TRANSFERABLE_METHODS, function (e) {
                    i.wrapMethod(e, c.curry(r, t))
                })
            }), e.wrapMethod("cloneShallow", c.curry(a, t)), d(e.CHANGABLE_METHODS, function (i) {
                e.wrapMethod(i, c.curry(o, t))
            }), c.assert(i[e.dataType] === e)
        }

        function r(t, e) {
            if (l(this)) {
                var i = c.extend({}, this[f]);
                i[this.dataType] = e, u(e, i, t)
            } else h(e, this.dataType, this[p], t);
            return e
        }

        function o(t, e) {
            return t.struct && t.struct.update(this), e
        }

        function a(t, e) {
            return d(e[f], function (i, n) {
                i !== e && h(i.cloneShallow(), n, e, t)
            }), e
        }

        function s(t) {
            var e = this[p];
            return null == t || null == e ? e : e[f][t]
        }

        function l(t) {
            return t[p] === t
        }

        function u(t, e, i) {
            t[f] = {}, d(e, function (e, n) {
                h(e, n, t, i)
            })
        }

        function h(t, e, i, n) {
            i[f][e] = t, t[p] = i, t.dataType = e, n.struct && (t[n.structAttr] = n.struct, n.struct[n.datasAttr[e]] = t), t.getLinkedData = s
        }

        var c = i(1), d = c.each, f = "\x00__link_datas", p = "\x00__link_mainData";
        t.exports = n
    }, function (t, e, i) {
        function n(t, e) {
            return Math.abs(t - e) < a
        }

        function r(t, e, i) {
            var r = 0, a = t[0];
            if (!a)return !1;
            for (var s = 1; s < t.length; s++) {
                var l = t[s];
                r += o(a[0], a[1], l[0], l[1], e, i), a = l
            }
            var u = t[0];
            return n(a[0], u[0]) && n(a[1], u[1]) || (r += o(a[0], a[1], u[0], u[1], e, i)), 0 !== r
        }

        var o = i(84), a = 1e-8;
        t.exports = {contain: r}
    }, function (t, e, i) {
        var n = i(2);
        i(242), i(243), n.registerVisual(i(245)), n.registerLayout(i(244))
    }, function (t, e, i) {
        "use strict";
        var n = i(1), r = i(15), o = i(168), a = r.extend({
            type: "series.boxplot",
            dependencies: ["xAxis", "yAxis", "grid"],
            valueDimensions: ["min", "Q1", "median", "Q3", "max"],
            dimensions: null,
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "cartesian2d",
                legendHoverLink: !0,
                hoverAnimation: !0,
                xAxisIndex: 0,
                yAxisIndex: 0,
                layout: null,
                boxWidth: [7, 50],
                itemStyle: {
                    normal: {color: "#fff", borderWidth: 1},
                    emphasis: {
                        borderWidth: 2,
                        shadowBlur: 5,
                        shadowOffsetX: 2,
                        shadowOffsetY: 2,
                        shadowColor: "rgba(0,0,0,0.4)"
                    }
                },
                animationEasing: "elasticOut",
                animationDuration: 800
            }
        });
        n.mixin(a, o.seriesModelMixin, !0), t.exports = a
    }, function (t, e, i) {
        "use strict";
        function n(t, e, i) {
            var n = e.getItemModel(i), r = n.getModel(u), o = e.getItemVisual(i, "color"), s = r.getItemStyle(["borderColor"]), l = t.childAt(t.whiskerIndex);
            l.style.set(s), l.style.stroke = o, l.dirty();
            var c = t.childAt(t.bodyIndex);
            c.style.set(s), c.style.stroke = o, c.dirty();
            var d = n.getModel(h).getItemStyle();
            a.setHoverStyle(t, d)
        }

        var r = i(1), o = i(27), a = i(3), s = i(168), l = o.extend({
            type: "boxplot", getStyleUpdater: function () {
                return n
            }
        });
        r.mixin(l, s.viewMixin, !0);
        var u = ["itemStyle", "normal"], h = ["itemStyle", "emphasis"];
        t.exports = l
    }, function (t, e, i) {
        function n(t) {
            var e = [], i = [];
            return t.eachSeriesByType("boxplot", function (t) {
                var n = t.getBaseAxis(), r = a.indexOf(i, n);
                0 > r && (r = i.length, i[r] = n, e[r] = {axis: n, seriesModels: []}), e[r].seriesModels.push(t)
            }), e
        }

        function r(t) {
            var e, i, n = t.axis, r = t.seriesModels, o = r.length, s = t.boxWidthList = [], h = t.boxOffsetList = [], c = [];
            if ("category" === n.type)i = n.getBandWidth(); else {
                var d = 0;
                u(r, function (t) {
                    d = Math.max(d, t.getData().count())
                }), e = n.getExtent(), Math.abs(e[1] - e[0]) / d
            }
            u(r, function (t) {
                var e = t.get("boxWidth");
                a.isArray(e) || (e = [e, e]), c.push([l(e[0], i) || 0, l(e[1], i) || 0])
            });
            var f = .8 * i - 2, p = f / o * .3, g = (f - p * (o - 1)) / o, v = g / 2 - f / 2;
            u(r, function (t, e) {
                h.push(v), v += p + g, s.push(Math.min(Math.max(g, c[e][0]), c[e][1]))
            })
        }

        function o(t, e, i) {
            var n = t.coordinateSystem, r = t.getData(), o = t.dimensions, a = t.get("layout"), s = i / 2;
            r.each(o, function () {
                function t(t) {
                    var i = [];
                    i[f] = c, i[p] = t;
                    var r;
                    return isNaN(c) || isNaN(t) ? r = [NaN, NaN] : (r = n.dataToPoint(i), r[f] += e), r
                }

                function i(t, e) {
                    var i = t.slice(), n = t.slice();
                    i[f] += s, n[f] -= s, e ? x.push(i, n) : x.push(n, i)
                }

                function l(t) {
                    var e = [t.slice(), t.slice()];
                    e[0][f] -= s, e[1][f] += s, y.push(e)
                }

                var u = arguments, h = o.length, c = u[0], d = u[h], f = "horizontal" === a ? 0 : 1, p = 1 - f, g = t(u[3]), v = t(u[1]), m = t(u[5]), y = [[v, t(u[2])], [m, t(u[4])]];
                l(v), l(m), l(g);
                var x = [];
                i(y[0][1], 0), i(y[1][1], 1), r.setItemLayout(d, {
                    chartLayout: a,
                    initBaseline: g[p],
                    median: g,
                    bodyEnds: x,
                    whiskerEnds: y
                })
            })
        }

        var a = i(1), s = i(4), l = s.parsePercent, u = a.each;
        t.exports = function (t) {
            var e = n(t);
            u(e, function (t) {
                var e = t.seriesModels;
                e.length && (r(t), u(e, function (e, i) {
                    o(e, t.boxOffsetList[i], t.boxWidthList[i])
                }))
            })
        }
    }, function (t, e) {
        var i = ["itemStyle", "normal", "borderColor"];
        t.exports = function (t, e) {
            var n = t.get("color");
            t.eachRawSeriesByType("boxplot", function (e) {
                var r = n[e.seriesIndex % n.length], o = e.getData();
                o.setVisual({
                    legendSymbol: "roundRect",
                    color: e.get(i) || r
                }), t.isSeriesFiltered(e) || o.each(function (t) {
                    var e = o.getItemModel(t);
                    o.setItemVisual(t, {color: e.get(i, !0)})
                })
            })
        }
    }, function (t, e, i) {
        var n = i(2);
        i(247), i(248), n.registerPreprocessor(i(251)), n.registerVisual(i(250)), n.registerLayout(i(249))
    }, function (t, e, i) {
        "use strict";
        var n = i(1), r = i(15), o = i(168), a = i(9), s = a.encodeHTML, l = a.addCommas, u = r.extend({
            type: "series.candlestick",
            dependencies: ["xAxis", "yAxis", "grid"],
            valueDimensions: ["open", "close", "lowest", "highest"],
            dimensions: null,
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "cartesian2d",
                legendHoverLink: !0,
                hoverAnimation: !0,
                xAxisIndex: 0,
                yAxisIndex: 0,
                layout: null,
                itemStyle: {
                    normal: {
                        color: "#c23531",
                        color0: "#314656",
                        borderWidth: 1,
                        borderColor: "#c23531",
                        borderColor0: "#314656"
                    }, emphasis: {borderWidth: 2}
                },
                animationUpdate: !1,
                animationEasing: "linear",
                animationDuration: 300
            },
            getShadowDim: function () {
                return "open"
            },
            formatTooltip: function (t, e) {
                var i = n.map(this.valueDimensions, function (e) {
                    return e + ": " + l(this._data.get(e, t))
                }, this);
                return s(this.name) + "<br />" + i.join("<br />")
            },
            brushSelector: function (t, e) {
                return e.rect(t.brushRect)
            }
        });
        n.mixin(u, o.seriesModelMixin, !0), t.exports = u
    }, function (t, e, i) {
        "use strict";
        function n(t, e, i) {
            var n = e.getItemModel(i), r = n.getModel(u), o = e.getItemVisual(i, "color"), s = e.getItemVisual(i, "borderColor") || o, l = r.getItemStyle(["color", "color0", "borderColor", "borderColor0"]), c = t.childAt(t.whiskerIndex);
            c.useStyle(l), c.style.stroke = s;
            var d = t.childAt(t.bodyIndex);
            d.useStyle(l), d.style.fill = o, d.style.stroke = s;
            var f = n.getModel(h).getItemStyle();
            a.setHoverStyle(t, f)
        }

        var r = i(1), o = i(27), a = i(3), s = i(168), l = o.extend({
            type: "candlestick", getStyleUpdater: function () {
                return n
            }
        });
        r.mixin(l, s.viewMixin, !0);
        var u = ["itemStyle", "normal"], h = ["itemStyle", "emphasis"];
        t.exports = l
    }, function (t, e) {
        function i(t, e) {
            var i, a = t.getBaseAxis(), s = "category" === a.type ? a.getBandWidth() : (i = a.getExtent(), Math.abs(i[1] - i[0]) / e.count());
            return s / 2 - 2 > r ? s / 2 - 2 : s - r > o ? r : Math.max(s - o, n)
        }

        var n = 2, r = 5, o = 4;
        t.exports = function (t) {
            t.eachSeriesByType("candlestick", function (t) {
                var e = t.coordinateSystem, n = t.getData(), r = t.dimensions, o = t.get("layout"), a = i(t, n);
                n.each(r, function () {
                    function t(t) {
                        var i = [];
                        return i[d] = h, i[f] = t, isNaN(h) || isNaN(t) ? [NaN, NaN] : e.dataToPoint(i)
                    }

                    function i(t, e) {
                        var i = t.slice(), n = t.slice();
                        i[d] += a / 2, n[d] -= a / 2, e ? A.push(i, n) : A.push(n, i)
                    }

                    function s() {
                        var e = t(Math.min(p, g, v, m)), i = t(Math.max(p, g, v, m));
                        return e[d] -= a / 2, i[d] -= a / 2, {
                            x: e[0],
                            y: e[1],
                            width: f ? a : i[0] - e[0],
                            height: f ? i[1] - e[1] : a
                        }
                    }

                    var l = arguments, u = r.length, h = l[0], c = l[u], d = "horizontal" === o ? 0 : 1, f = 1 - d, p = l[1], g = l[2], v = l[3], m = l[4], y = Math.min(p, g), x = Math.max(p, g), _ = t(y), b = t(x), w = t(v), S = t(m), M = [[S, b], [w, _]], A = [];
                    i(b, 0), i(_, 1), n.setItemLayout(c, {
                        chartLayout: o,
                        sign: p > g ? -1 : g > p ? 1 : 0,
                        initBaseline: p > g ? b[f] : _[f],
                        bodyEnds: A,
                        whiskerEnds: M,
                        brushRect: s()
                    })
                }, !0)
            })
        }
    }, function (t, e) {
        var i = ["itemStyle", "normal", "borderColor"], n = ["itemStyle", "normal", "borderColor0"], r = ["itemStyle", "normal", "color"], o = ["itemStyle", "normal", "color0"];
        t.exports = function (t, e) {
            t.eachRawSeriesByType("candlestick", function (e) {
                var a = e.getData();
                a.setVisual({legendSymbol: "roundRect"}), t.isSeriesFiltered(e) || a.each(function (t) {
                    var e = a.getItemModel(t), s = a.getItemLayout(t).sign;
                    a.setItemVisual(t, {color: e.get(s > 0 ? r : o), borderColor: e.get(s > 0 ? i : n)})
                })
            })
        }
    }, function (t, e, i) {
        var n = i(1);
        t.exports = function (t) {
            t && n.isArray(t.series) && n.each(t.series, function (t) {
                n.isObject(t) && "k" === t.type && (t.type = "candlestick")
            })
        }
    }, function (t, e, i) {
        var n = i(1), r = i(2);
        i(253), i(254), r.registerVisual(n.curry(i(46), "effectScatter", "circle", null)), r.registerLayout(n.curry(i(55), "effectScatter"))
    }, function (t, e, i) {
        "use strict";
        var n = i(35), r = i(15);
        t.exports = r.extend({
            type: "series.effectScatter",
            dependencies: ["grid", "polar"],
            getInitialData: function (t, e) {
                var i = n(t.data, this, e);
                return i
            },
            brushSelector: "point",
            defaultOption: {
                coordinateSystem: "cartesian2d",
                zlevel: 0,
                z: 2,
                legendHoverLink: !0,
                effectType: "ripple",
                showEffectOn: "render",
                rippleEffect: {period: 4, scale: 2.5, brushType: "fill"},
                xAxisIndex: 0,
                yAxisIndex: 0,
                polarIndex: 0,
                geoIndex: 0,
                symbolSize: 10
            }
        })
    }, function (t, e, i) {
        var n = i(39), r = i(281);
        i(2).extendChartView({
            type: "effectScatter", init: function () {
                this._symbolDraw = new n(r)
            }, render: function (t, e, i) {
                var n = t.getData(), r = this._symbolDraw;
                r.updateData(n), this.group.add(r.group)
            }, updateLayout: function () {
                this._symbolDraw.updateLayout()
            }, remove: function (t, e) {
                this._symbolDraw && this._symbolDraw.remove(e)
            }
        })
    }, function (t, e, i) {
        var n = i(1), r = i(2);
        i(256), i(257), r.registerVisual(n.curry(i(72), "funnel")), r.registerLayout(i(258)), r.registerProcessor(n.curry(i(70), "funnel"))
    }, function (t, e, i) {
        "use strict";
        var n = i(14), r = i(10), o = i(30), a = i(2).extendSeriesModel({
            type: "series.funnel",
            init: function (t) {
                a.superApply(this, "init", arguments), this.legendDataProvider = function () {
                    return this._dataBeforeProcessed
                }, this._defaultLabelLine(t)
            },
            getInitialData: function (t, e) {
                var i = o(["value"], t.data), r = new n(i, this);
                return r.initData(t.data), r
            },
            _defaultLabelLine: function (t) {
                r.defaultEmphasis(t.labelLine, ["show"]);
                var e = t.labelLine.normal, i = t.labelLine.emphasis;
                e.show = e.show && t.label.normal.show, i.show = i.show && t.label.emphasis.show
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                legendHoverLink: !0,
                left: 80,
                top: 60,
                right: 80,
                bottom: 60,
                minSize: "0%",
                maxSize: "100%",
                sort: "descending",
                gap: 0,
                funnelAlign: "center",
                label: {normal: {show: !0, position: "outer"}, emphasis: {show: !0}},
                labelLine: {normal: {show: !0, length: 20, lineStyle: {width: 1, type: "solid"}}, emphasis: {}},
                itemStyle: {normal: {borderColor: "#fff", borderWidth: 1}, emphasis: {}}
            }
        });
        t.exports = a
    }, function (t, e, i) {
        function n(t, e) {
            function i() {
                a.ignore = a.hoverIgnore, s.ignore = s.hoverIgnore
            }

            function n() {
                a.ignore = a.normalIgnore, s.ignore = s.normalIgnore
            }

            o.Group.call(this);
            var r = new o.Polygon, a = new o.Polyline, s = new o.Text;
            this.add(r), this.add(a), this.add(s), this.updateData(t, e, !0), this.on("emphasis", i).on("normal", n).on("mouseover", i).on("mouseout", n)
        }

        function r(t, e, i, n) {
            var r = n.getModel("textStyle"), o = n.get("position"), s = "inside" === o || "inner" === o || "center" === o;
            return {
                fill: r.getTextColor() || (s ? "#fff" : t.getItemVisual(e, "color")),
                textFont: r.getFont(),
                text: a.retrieve(t.hostModel.getFormattedLabel(e, i), t.getName(e))
            }
        }

        var o = i(3), a = i(1), s = n.prototype, l = ["itemStyle", "normal", "opacity"];
        s.updateData = function (t, e, i) {
            var n = this.childAt(0), r = t.hostModel, s = t.getItemModel(e), u = t.getItemLayout(e), h = t.getItemModel(e).get(l);
            h = null == h ? 1 : h, n.useStyle({}), i ? (n.setShape({points: u.points}), n.setStyle({opacity: 0}), o.initProps(n, {style: {opacity: h}}, r, e)) : o.updateProps(n, {
                style: {opacity: h},
                shape: {points: u.points}
            }, r, e);
            var c = s.getModel("itemStyle"), d = t.getItemVisual(e, "color");
            n.setStyle(a.defaults({
                lineJoin: "round",
                fill: d
            }, c.getModel("normal").getItemStyle(["opacity"]))), n.hoverStyle = c.getModel("emphasis").getItemStyle(), this._updateLabel(t, e), o.setHoverStyle(this)
        }, s._updateLabel = function (t, e) {
            var i = this.childAt(1), n = this.childAt(2), a = t.hostModel, s = t.getItemModel(e), l = t.getItemLayout(e), u = l.label, h = t.getItemVisual(e, "color");
            o.updateProps(i, {shape: {points: u.linePoints || u.linePoints}}, a, e), o.updateProps(n, {
                style: {
                    x: u.x,
                    y: u.y
                }
            }, a, e), n.attr({
                style: {textAlign: u.textAlign, textVerticalAlign: u.verticalAlign, textFont: u.font},
                rotation: u.rotation,
                origin: [u.x, u.y],
                z2: 10
            });
            var c = s.getModel("label.normal"), d = s.getModel("label.emphasis"), f = s.getModel("labelLine.normal"), p = s.getModel("labelLine.emphasis");
            n.setStyle(r(t, e, "normal", c)), n.ignore = n.normalIgnore = !c.get("show"), n.hoverIgnore = !d.get("show"), i.ignore = i.normalIgnore = !f.get("show"), i.hoverIgnore = !p.get("show"), i.setStyle({stroke: h}), i.setStyle(f.getModel("lineStyle").getLineStyle()), n.hoverStyle = r(t, e, "emphasis", d), i.hoverStyle = p.getModel("lineStyle").getLineStyle()
        }, a.inherits(n, o.Group);
        var u = i(27).extend({
            type: "funnel", render: function (t, e, i) {
                var r = t.getData(), o = this._data, a = this.group;
                r.diff(o).add(function (t) {
                    var e = new n(r, t);
                    r.setItemGraphicEl(t, e), a.add(e)
                }).update(function (t, e) {
                    var i = o.getItemGraphicEl(e);
                    i.updateData(r, t), a.add(i), r.setItemGraphicEl(t, i)
                }).remove(function (t) {
                    var e = o.getItemGraphicEl(t);
                    a.remove(e)
                }).execute(), this._data = r
            }, remove: function () {
                this.group.removeAll(), this._data = null
            }
        });
        t.exports = u
    }, function (t, e, i) {
        function n(t, e) {
            return a.getLayoutRect(t.getBoxLayoutParams(), {width: e.getWidth(), height: e.getHeight()})
        }

        function r(t, e) {
            for (var i = t.mapArray("value", function (t) {
                return t
            }), n = [], r = "ascending" === e, o = 0, a = t.count(); a > o; o++)n[o] = o;
            return n.sort(function (t, e) {
                return r ? i[t] - i[e] : i[e] - i[t]
            }), n
        }

        function o(t) {
            t.each(function (e) {
                var i, n, r, o, a = t.getItemModel(e), s = a.getModel("label.normal"), l = s.get("position"), u = a.getModel("labelLine.normal"), h = t.getItemLayout(e), c = h.points, d = "inner" === l || "inside" === l || "center" === l;
                if (d)n = (c[0][0] + c[1][0] + c[2][0] + c[3][0]) / 4, r = (c[0][1] + c[1][1] + c[2][1] + c[3][1]) / 4, i = "center", o = [[n, r], [n, r]]; else {
                    var f, p, g, v = u.get("length");
                    "left" === l ? (f = (c[3][0] + c[0][0]) / 2, p = (c[3][1] + c[0][1]) / 2, g = f - v, n = g - 5, i = "right") : (f = (c[1][0] + c[2][0]) / 2, p = (c[1][1] + c[2][1]) / 2, g = f + v, n = g + 5, i = "left");
                    var m = p;
                    o = [[f, p], [g, m]], r = m
                }
                h.label = {linePoints: o, x: n, y: r, verticalAlign: "middle", textAlign: i, inside: d}
            })
        }

        var a = i(13), s = i(4), l = s.parsePercent;
        t.exports = function (t, e, i) {
            t.eachSeriesByType("funnel", function (t) {
                var i = t.getData(), a = t.get("sort"), u = n(t, e), h = r(i, a), c = [l(t.get("minSize"), u.width), l(t.get("maxSize"), u.width)], d = i.getDataExtent("value"), f = t.get("min"), p = t.get("max");
                null == f && (f = Math.min(d[0], 0)), null == p && (p = d[1]);
                var g = t.get("funnelAlign"), v = t.get("gap"), m = (u.height - v * (i.count() - 1)) / i.count(), y = u.y, x = function (t, e) {
                    var n, r = i.get("value", t) || 0, o = s.linearMap(r, [f, p], c, !0);
                    switch (g) {
                        case"left":
                            n = u.x;
                            break;
                        case"center":
                            n = u.x + (u.width - o) / 2;
                            break;
                        case"right":
                            n = u.x + u.width - o
                    }
                    return [[n, e], [n + o, e]]
                };
                "ascending" === a && (m = -m, v = -v, y += u.height, h = h.reverse());
                for (var _ = 0; _ < h.length; _++) {
                    var b = h[_], w = h[_ + 1], S = x(b, y), M = x(w, y + m);
                    y += m + v, i.setItemLayout(b, {points: S.concat(M.slice().reverse())})
                }
                o(i)
            })
        }
    }, function (t, e, i) {
        i(260), i(261)
    }, function (t, e, i) {
        var n = i(14), r = i(15), o = i(1), a = r.extend({
            type: "series.gauge",
            getInitialData: function (t, e) {
                var i = new n(["value"], this), r = t.data || [];
                return o.isArray(r) || (r = [r]), i.initData(r), i
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                center: ["50%", "50%"],
                legendHoverLink: !0,
                radius: "75%",
                startAngle: 225,
                endAngle: -45,
                clockwise: !0,
                min: 0,
                max: 100,
                splitNumber: 10,
                axisLine: {show: !0, lineStyle: {color: [[.2, "#91c7ae"], [.8, "#63869e"], [1, "#c23531"]], width: 30}},
                splitLine: {show: !0, length: 30, lineStyle: {color: "#eee", width: 2, type: "solid"}},
                axisTick: {show: !0, splitNumber: 5, length: 8, lineStyle: {color: "#eee", width: 1, type: "solid"}},
                axisLabel: {show: !0, distance: 5, textStyle: {color: "auto"}},
                pointer: {show: !0, length: "80%", width: 8},
                itemStyle: {normal: {color: "auto"}},
                title: {show: !0, offsetCenter: [0, "-40%"], textStyle: {color: "#333", fontSize: 15}},
                detail: {
                    show: !0,
                    backgroundColor: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    borderColor: "#ccc",
                    width: 100,
                    height: 40,
                    offsetCenter: [0, "40%"],
                    textStyle: {color: "auto", fontSize: 30}
                }
            }
        });
        t.exports = a
    }, function (t, e, i) {
        function n(t, e) {
            var i = t.get("center"), n = e.getWidth(), r = e.getHeight(), o = Math.min(n, r), a = l(i[0], e.getWidth()), s = l(i[1], e.getHeight()), u = l(t.get("radius"), o / 2);
            return {cx: a, cy: s, r: u}
        }

        function r(t, e) {
            return e && ("string" == typeof e ? t = e.replace("{value}", t) : "function" == typeof e && (t = e(t))), t
        }

        var o = i(262), a = i(3), s = i(4), l = s.parsePercent, u = 2 * Math.PI, h = i(27).extend({
            type: "gauge",
            render: function (t, e, i) {
                this.group.removeAll();
                var r = t.get("axisLine.lineStyle.color"), o = n(t, i);
                this._renderMain(t, e, i, r, o)
            },
            _renderMain: function (t, e, i, n, r) {
                for (var o = this.group, s = t.getModel("axisLine"), l = s.getModel("lineStyle"), h = t.get("clockwise"), c = -t.get("startAngle") / 180 * Math.PI, d = -t.get("endAngle") / 180 * Math.PI, f = (d - c) % u, p = c, g = l.get("width"), v = 0; v < n.length; v++) {
                    var m = Math.min(Math.max(n[v][0], 0), 1), d = c + f * m, y = new a.Sector({
                        shape: {
                            startAngle: p,
                            endAngle: d,
                            cx: r.cx,
                            cy: r.cy,
                            clockwise: h,
                            r0: r.r - g,
                            r: r.r
                        }, silent: !0
                    });
                    y.setStyle({fill: n[v][1]}), y.setStyle(l.getLineStyle(["color", "borderWidth", "borderColor"])), o.add(y), p = d
                }
                var x = function (t) {
                    if (0 >= t)return n[0][1];
                    for (var e = 0; e < n.length; e++)if (n[e][0] >= t && (0 === e ? 0 : n[e - 1][0]) < t)return n[e][1];
                    return n[e - 1][1]
                };
                if (!h) {
                    var _ = c;
                    c = d, d = _
                }
                this._renderTicks(t, e, i, x, r, c, d, h), this._renderPointer(t, e, i, x, r, c, d, h), this._renderTitle(t, e, i, x, r), this._renderDetail(t, e, i, x, r)
            },
            _renderTicks: function (t, e, i, n, o, u, h, c) {
                for (var d = this.group, f = o.cx, p = o.cy, g = o.r, v = t.get("min"), m = t.get("max"), y = t.getModel("splitLine"), x = t.getModel("axisTick"), _ = t.getModel("axisLabel"), b = t.get("splitNumber"), w = x.get("splitNumber"), S = l(y.get("length"), g), M = l(x.get("length"), g), A = u, I = (h - u) / b, T = I / w, L = y.getModel("lineStyle").getLineStyle(), C = x.getModel("lineStyle").getLineStyle(), D = _.getModel("textStyle"), P = 0; b >= P; P++) {
                    var k = Math.cos(A), z = Math.sin(A);
                    if (y.get("show")) {
                        var O = new a.Line({
                            shape: {
                                x1: k * g + f,
                                y1: z * g + p,
                                x2: k * (g - S) + f,
                                y2: z * (g - S) + p
                            }, style: L, silent: !0
                        });
                        "auto" === L.stroke && O.setStyle({stroke: n(P / b)}), d.add(O)
                    }
                    if (_.get("show")) {
                        var E = r(s.round(P / b * (m - v) + v), _.get("formatter")), R = _.get("distance"), V = new a.Text({
                            style: {
                                text: E,
                                x: k * (g - S - R) + f,
                                y: z * (g - S - R) + p,
                                fill: D.getTextColor(),
                                textFont: D.getFont(),
                                textVerticalAlign: -.4 > z ? "top" : z > .4 ? "bottom" : "middle",
                                textAlign: -.4 > k ? "left" : k > .4 ? "right" : "center"
                            }, silent: !0
                        });
                        "auto" === V.style.fill && V.setStyle({fill: n(P / b)}), d.add(V)
                    }
                    if (x.get("show") && P !== b) {
                        for (var N = 0; w >= N; N++) {
                            var k = Math.cos(A), z = Math.sin(A), B = new a.Line({
                                shape: {
                                    x1: k * g + f,
                                    y1: z * g + p,
                                    x2: k * (g - M) + f,
                                    y2: z * (g - M) + p
                                }, silent: !0, style: C
                            });
                            "auto" === C.stroke && B.setStyle({stroke: n((P + N / w) / b)}), d.add(B), A += T
                        }
                        A -= T
                    } else A += I
                }
            },
            _renderPointer: function (t, e, i, n, r, u, h, c) {
                var d = [+t.get("min"), +t.get("max")], f = [u, h];
                c || (f = f.reverse());
                var p = t.getData(), g = this._data, v = this.group;
                p.diff(g).add(function (e) {
                    var i = new o({shape: {angle: u}});
                    a.updateProps(i, {shape: {angle: s.linearMap(p.get("value", e), d, f, !0)}}, t), v.add(i), p.setItemGraphicEl(e, i)
                }).update(function (e, i) {
                    var n = g.getItemGraphicEl(i);
                    a.updateProps(n, {shape: {angle: s.linearMap(p.get("value", e), d, f, !0)}}, t), v.add(n), p.setItemGraphicEl(e, n)
                }).remove(function (t) {
                    var e = g.getItemGraphicEl(t);
                    v.remove(e)
                }).execute(), p.eachItemGraphicEl(function (t, e) {
                    var i = p.getItemModel(e), o = i.getModel("pointer");
                    t.setShape({
                        x: r.cx,
                        y: r.cy,
                        width: l(o.get("width"), r.r),
                        r: l(o.get("length"), r.r)
                    }), t.useStyle(i.getModel("itemStyle.normal").getItemStyle()), "auto" === t.style.fill && t.setStyle("fill", n((p.get("value", e) - d[0]) / (d[1] - d[0]))), a.setHoverStyle(t, i.getModel("itemStyle.emphasis").getItemStyle())
                }), this._data = p
            },
            _renderTitle: function (t, e, i, n, r) {
                var o = t.getModel("title");
                if (o.get("show")) {
                    var s = o.getModel("textStyle"), u = o.get("offsetCenter"), h = r.cx + l(u[0], r.r), c = r.cy + l(u[1], r.r), d = new a.Text({
                        style: {
                            x: h,
                            y: c,
                            text: t.getData().getName(0),
                            fill: s.getTextColor(),
                            textFont: s.getFont(),
                            textAlign: "center",
                            textVerticalAlign: "middle"
                        }
                    });
                    this.group.add(d)
                }
            },
            _renderDetail: function (t, e, i, n, o) {
                var u = t.getModel("detail"), h = t.get("min"), c = t.get("max");
                if (u.get("show")) {
                    var d = u.getModel("textStyle"), f = u.get("offsetCenter"), p = o.cx + l(f[0], o.r), g = o.cy + l(f[1], o.r), v = l(u.get("width"), o.r), m = l(u.get("height"), o.r), y = t.getData().get("value", 0), x = new a.Rect({
                        shape: {
                            x: p - v / 2,
                            y: g - m / 2,
                            width: v,
                            height: m
                        },
                        style: {
                            text: r(y, u.get("formatter")),
                            fill: u.get("backgroundColor"),
                            textFill: d.getTextColor(),
                            textFont: d.getFont()
                        }
                    });
                    "auto" === x.style.textFill && x.setStyle("textFill", n(s.linearMap(y, [h, c], [0, 1], !0))), x.setStyle(u.getItemStyle(["color"])), this.group.add(x)
                }
            }
        });
        t.exports = h
    }, function (t, e, i) {
        t.exports = i(6).extend({
            type: "echartsGaugePointer",
            shape: {angle: 0, width: 10, r: 10, x: 0, y: 0},
            buildPath: function (t, e) {
                var i = Math.cos, n = Math.sin, r = e.r, o = e.width, a = e.angle, s = e.x - i(a) * o * (o >= r / 3 ? 1 : 2), l = e.y - n(a) * o * (o >= r / 3 ? 1 : 2);
                a = e.angle - Math.PI / 2, t.moveTo(s, l), t.lineTo(e.x + i(a) * o, e.y + n(a) * o), t.lineTo(e.x + i(e.angle) * r, e.y + n(e.angle) * r), t.lineTo(e.x - i(a) * o, e.y - n(a) * o), t.lineTo(s, l)
            }
        })
    }, function (t, e, i) {
        var n = i(2), r = i(1);
        i(264), i(265), i(274), n.registerProcessor(i(267)), n.registerVisual(r.curry(i(46), "graph", "circle", null)), n.registerVisual(i(268)), n.registerVisual(i(271)), n.registerLayout(i(275)), n.registerLayout(i(269)), n.registerLayout(i(273)), n.registerCoordinateSystem("graphView", {create: i(270)})
    }, function (t, e, i) {
        "use strict";
        var n = i(14), r = i(1), o = i(10), a = i(8), s = i(226), l = i(2).extendSeriesModel({
            type: "series.graph",
            init: function (t) {
                l.superApply(this, "init", arguments), this.legendDataProvider = function () {
                    return this._categoriesData
                }, this.fillDataTextStyle(t.edges || t.links), this._updateCategoriesData()
            },
            mergeOption: function (t) {
                l.superApply(this, "mergeOption", arguments), this.fillDataTextStyle(t.edges || t.links), this._updateCategoriesData()
            },
            mergeDefaultAndTheme: function (t) {
                l.superApply(this, "mergeDefaultAndTheme", arguments), o.defaultEmphasis(t.edgeLabel, o.LABEL_OPTIONS)
            },
            getInitialData: function (t, e) {
                function i(t, e) {
                    t.wrapMethod("getItemModel", function (t) {
                        var e = o._categoriesModels, i = t.getShallow("category"), n = e[i];
                        return n && (n.parentModel = t.parentModel, t.parentModel = n), t
                    });
                    var i = o.getModel("edgeLabel"), n = function (t, e) {
                        var r = (t || "").split(".");
                        "label" === r[0] && (e = e || i.getModel(r.slice(1)));
                        var o = a.prototype.getModel.call(this, r, e);
                        return o.getModel = n, o
                    };
                    e.wrapMethod("getItemModel", function (t) {
                        return t.getModel = n, t
                    })
                }

                var n = t.edges || t.links || [], r = t.data || t.nodes || [], o = this;
                return r && n ? s(r, n, this, !0, i).data : void 0
            },
            getGraph: function () {
                return this.getData().graph
            },
            getEdgeData: function () {
                return this.getGraph().edgeData
            },
            getCategoriesData: function () {
                return this._categoriesData
            },
            formatTooltip: function (t, e, i) {
                if ("edge" === i) {
                    var n = this.getData(), r = this.getDataParams(t, i), o = n.graph.getEdgeByIndex(t), a = n.getName(o.node1.dataIndex), s = n.getName(o.node2.dataIndex), u = a + " > " + s;
                    return r.value && (u += " : " + r.value), u
                }
                return l.superApply(this, "formatTooltip", arguments)
            },
            _updateCategoriesData: function () {
                var t = r.map(this.option.categories || [], function (t) {
                    return null != t.value ? t : r.extend({value: 0}, t)
                }), e = new n(["value"], this);
                e.initData(t), this._categoriesData = e, this._categoriesModels = e.mapArray(function (t) {
                    return e.getItemModel(t, !0)
                })
            },
            setZoom: function (t) {
                this.option.zoom = t
            },
            setCenter: function (t) {
                this.option.center = t
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "view",
                xAxisIndex: 0,
                yAxisIndex: 0,
                polarIndex: 0,
                geoIndex: 0,
                legendHoverLink: !0,
                hoverAnimation: !0,
                layout: null,
                focusNodeAdjacency: !1,
                force: {initLayout: null, repulsion: 50, gravity: .1, edgeLength: 30, layoutAnimation: !0},
                left: "center",
                top: "center",
                symbol: "circle",
                symbolSize: 10,
                edgeSymbol: ["none", "none"],
                edgeSymbolSize: 10,
                edgeLabel: {normal: {position: "middle"}, emphasis: {}},
                draggable: !1,
                roam: !1,
                center: null,
                zoom: 1,
                nodeScaleRatio: .6,
                label: {normal: {show: !1, formatter: "{b}"}, emphasis: {show: !0}},
                itemStyle: {normal: {}, emphasis: {}},
                lineStyle: {normal: {color: "#aaa", width: 1, curveness: 0, opacity: .5}, emphasis: {}}
            }
        });
        t.exports = l
    }, function (t, e, i) {
        function n(t, e) {
            return t.getVisual("opacity") || t.getModel().get(e)
        }

        var r = i(39), o = i(93), a = i(78), s = i(3), l = i(266), u = i(1), h = ["itemStyle", "normal", "opacity"], c = ["lineStyle", "normal", "opacity"];
        i(2).extendChartView({
            type: "graph", init: function (t, e) {
                var i = new r, n = new o, s = this.group, l = new a(e.getZr(), s);
                s.add(i.group), s.add(n.group), this._symbolDraw = i, this._lineDraw = n, this._controller = l, this._firstRender = !0
            }, render: function (t, e, i) {
                var n = t.coordinateSystem;
                this._model = t, this._nodeScaleRatio = t.get("nodeScaleRatio");
                var r = this._symbolDraw, o = this._lineDraw, a = this.group;
                if ("view" === n.type) {
                    var u = {position: n.position, scale: n.scale};
                    this._firstRender ? a.attr(u) : s.updateProps(a, u, t)
                }
                l(t.getGraph(), this._getNodeGlobalScale(t));
                var h = t.getData();
                r.updateData(h);
                var c = t.getEdgeData();
                o.updateData(c), this._updateNodeAndLinkScale(), this._updateController(t, i), clearTimeout(this._layoutTimeout);
                var d = t.forceLayout, f = t.get("force.layoutAnimation");
                d && this._startForceLayoutIteration(d, f), h.eachItemGraphicEl(function (t, e) {
                    var i = h.getItemModel(e);
                    t.off("drag").off("dragend");
                    var n = h.getItemModel(e).get("draggable");
                    n && t.on("drag", function () {
                        d && (d.warmUp(), !this._layouting && this._startForceLayoutIteration(d, f), d.setFixed(e), h.setItemLayout(e, t.position))
                    }, this).on("dragend", function () {
                        d && d.setUnfixed(e)
                    }, this), t.setDraggable(n && d), t.off("mouseover", this._focusNodeAdjacency), t.off("mouseout", this._unfocusAll), i.get("focusNodeAdjacency") && (t.on("mouseover", this._focusNodeAdjacency, this), t.on("mouseout", this._unfocusAll, this))
                }, this), this._firstRender = !1
            }, _focusNodeAdjacency: function (t) {
                function e(t, e) {
                    var i = n(t, e), r = t.getGraphicEl();
                    null == i && (i = 1), r.traverse(function (t) {
                        t.trigger("normal"), "group" !== t.type && t.setStyle("opacity", .1 * i)
                    })
                }

                function i(t, e) {
                    var i = n(t, e), r = t.getGraphicEl();
                    r.traverse(function (t) {
                        t.trigger("emphasis"), "group" !== t.type && t.setStyle("opacity", i)
                    })
                }

                var r = this._model.getData(), o = r.graph, a = t.target, s = a.dataIndex, l = a.dataType;
                if (null !== s && "edge" !== l) {
                    o.eachNode(function (t) {
                        e(t, h)
                    }), o.eachEdge(function (t) {
                        e(t, c)
                    });
                    var d = o.getNodeByIndex(s);
                    i(d, h), u.each(d.edges, function (t) {
                        t.dataIndex < 0 || (i(t, c), i(t.node1, h), i(t.node2, h))
                    })
                }
            }, _unfocusAll: function () {
                var t = this._model.getData(), e = t.graph;
                e.eachNode(function (t) {
                    var e = n(t, h);
                    t.getGraphicEl().traverse(function (t) {
                        t.trigger("normal"), "group" !== t.type && t.setStyle("opacity", e)
                    })
                }), e.eachEdge(function (t) {
                    var e = n(t, c);
                    t.getGraphicEl().traverse(function (t) {
                        t.trigger("normal"), "group" !== t.type && t.setStyle("opacity", e)
                    })
                })
            }, _startForceLayoutIteration: function (t, e) {
                var i = this;
                !function n() {
                    t.step(function (t) {
                        i.updateLayout(i._model), (i._layouting = !t) && (e ? i._layoutTimeout = setTimeout(n, 16) : n())
                    })
                }()
            }, _updateController: function (t, e) {
                var i = this._controller, n = this.group;
                return i.rectProvider = function () {
                    var t = n.getBoundingRect();
                    return t.applyTransform(n.transform), t
                }, "view" !== t.coordinateSystem.type ? void i.disable() : (i.enable(t.get("roam")), i.zoomLimit = t.get("scaleLimit"), i.zoom = t.coordinateSystem.getZoom(), void i.off("pan").off("zoom").on("pan", function (i, n) {
                    e.dispatchAction({seriesId: t.id, type: "graphRoam", dx: i, dy: n})
                }).on("zoom", function (i, n, r) {
                    e.dispatchAction({
                        seriesId: t.id,
                        type: "graphRoam",
                        zoom: i,
                        originX: n,
                        originY: r
                    }), this._updateNodeAndLinkScale(), l(t.getGraph(), this._getNodeGlobalScale(t)), this._lineDraw.updateLayout()
                }, this))
            }, _updateNodeAndLinkScale: function () {
                var t = this._model, e = t.getData(), i = this._getNodeGlobalScale(t), n = [i, i];
                e.eachItemGraphicEl(function (t, e) {
                    t.attr("scale", n)
                })
            }, _getNodeGlobalScale: function (t) {
                var e = t.coordinateSystem;
                if ("view" !== e.type)return 1;
                var i = this._nodeScaleRatio, n = e.scale, r = n && n[0] || 1, o = e.getZoom(), a = (o - 1) * i + 1;
                return a / r
            }, updateLayout: function (t) {
                l(t.getGraph(), this._getNodeGlobalScale(t)), this._symbolDraw.updateLayout(), this._lineDraw.updateLayout()
            }, remove: function (t, e) {
                this._symbolDraw && this._symbolDraw.remove(), this._lineDraw && this._lineDraw.remove()
            }
        })
    }, function (t, e, i) {
        function n(t, e, i) {
            for (var n, r = t[0], o = t[1], d = t[2], f = 1 / 0, p = i * i, g = .1, v = .1; .9 >= v; v += .1) {
                a[0] = u(r[0], o[0], d[0], v), a[1] = u(r[1], o[1], d[1], v);
                var m = c(h(a, e) - p);
                f > m && (f = m, n = v)
            }
            for (var y = 0; 32 > y; y++) {
                var x = n + g;
                s[0] = u(r[0], o[0], d[0], n), s[1] = u(r[1], o[1], d[1], n), l[0] = u(r[0], o[0], d[0], x), l[1] = u(r[1], o[1], d[1], x);
                var m = h(s, e) - p;
                if (c(m) < .01)break;
                var _ = h(l, e) - p;
                g /= 2, 0 > m ? _ >= 0 ? n += g : n -= g : _ >= 0 ? n -= g : n += g
            }
            return n
        }

        var r = i(17), o = i(5), a = [], s = [], l = [], u = r.quadraticAt, h = o.distSquare, c = Math.abs;
        t.exports = function (t, e) {
            var i = [], a = r.quadraticSubdivide, s = [[], [], []], l = [[], []], u = [];
            e /= 2, t.eachEdge(function (t, r) {
                var h = t.getLayout(), c = t.getVisual("fromSymbol"), d = t.getVisual("toSymbol");
                h.__original || (h.__original = [o.clone(h[0]), o.clone(h[1])], h[2] && h.__original.push(o.clone(h[2])));
                var f = h.__original;
                if (null != h[2]) {
                    if (o.copy(s[0], f[0]), o.copy(s[1], f[2]), o.copy(s[2], f[1]), c && "none" != c) {
                        var p = t.node1.getVisual("symbolSize");
                        p instanceof Array && (p = (p[0] + p[1]) / 2);
                        var g = n(s, f[0], p * e);
                        a(s[0][0], s[1][0], s[2][0], g, i), s[0][0] = i[3], s[1][0] = i[4], a(s[0][1], s[1][1], s[2][1], g, i), s[0][1] = i[3], s[1][1] = i[4]
                    }
                    if (d && "none" != d) {
                        var p = t.node1.getVisual("symbolSize");
                        p instanceof Array && (p = (p[0] + p[1]) / 2);
                        var g = n(s, f[1], p * e);
                        a(s[0][0], s[1][0], s[2][0], g, i), s[1][0] = i[1], s[2][0] = i[2], a(s[0][1], s[1][1], s[2][1], g, i), s[1][1] = i[1], s[2][1] = i[2]
                    }
                    o.copy(h[0], s[0]), o.copy(h[1], s[2]), o.copy(h[2], s[1])
                } else o.copy(l[0], f[0]), o.copy(l[1], f[1]), o.sub(u, l[1], l[0]), o.normalize(u, u), c && "none" != c && o.scaleAndAdd(l[0], l[0], u, t.node1.getVisual("symbolSize") * e), d && "none" != d && o.scaleAndAdd(l[1], l[1], u, -t.node2.getVisual("symbolSize") * e), o.copy(h[0], l[0]), o.copy(h[1], l[1])
            })
        }
    }, function (t, e) {
        t.exports = function (t) {
            var e = t.findComponents({mainType: "legend"});
            e && e.length && t.eachSeriesByType("graph", function (t) {
                var i = t.getCategoriesData(), n = t.getGraph(), r = n.data, o = i.mapArray(i.getName);
                r.filterSelf(function (t) {
                    var i = r.getItemModel(t), n = i.getShallow("category");
                    if (null != n) {
                        "number" == typeof n && (n = o[n]);
                        for (var a = 0; a < e.length; a++)if (!e[a].isSelected(n))return !1
                    }
                    return !0
                })
            }, this)
        }
    }, function (t, e) {
        t.exports = function (t) {
            t.eachSeriesByType("graph", function (t) {
                var e = t.getCategoriesData(), i = t.getData(), n = {};
                e.each(function (i) {
                    var r = e.getName(i);
                    n[r] = i;
                    var o = e.getItemModel(i), a = o.get("itemStyle.normal.color") || t.getColorFromPalette(r);
                    e.setItemVisual(i, "color", a)
                }), e.count() && i.each(function (t) {
                    var r = i.getItemModel(t), o = r.getShallow("category");
                    null != o && ("string" == typeof o && (o = n[o]), i.getItemVisual(t, "color", !0) || i.setItemVisual(t, "color", e.getItemVisual(o, "color")))
                })
            })
        }
    }, function (t, e, i) {
        var n = i(221);
        t.exports = function (t) {
            t.eachSeriesByType("graph", function (t) {
                "circular" === t.get("layout") && n(t)
            })
        }
    }, function (t, e, i) {
        function n(t, e, i) {
            var n = t.getBoxLayoutParams();
            return n.aspect = i, o.getLayoutRect(n, {width: e.getWidth(), height: e.getHeight()})
        }

        var r = i(236), o = i(13), a = i(73);
        t.exports = function (t, e) {
            var i = [];
            return t.eachSeriesByType("graph", function (t) {
                var o = t.get("coordinateSystem");
                if (!o || "view" === o) {
                    var s = new r;
                    i.push(s);
                    var l = t.getData(), u = l.mapArray(function (t) {
                        var e = l.getItemModel(t);
                        return [+e.get("x"), +e.get("y")]
                    }), h = [], c = [];
                    a.fromPoints(u, h, c), c[0] - h[0] === 0 && (c[0] += 1, h[0] -= 1), c[1] - h[1] === 0 && (c[1] += 1, h[1] -= 1);
                    var d = (c[0] - h[0]) / (c[1] - h[1]), f = n(t, e, d);
                    isNaN(d) && (h = [f.x, f.y], c = [f.x + f.width, f.y + f.height]);
                    var p = c[0] - h[0], g = c[1] - h[1], v = f.width, m = f.height;
                    s = t.coordinateSystem = new r, s.zoomLimit = t.get("scaleLimit"), s.setBoundingRect(h[0], h[1], p, g), s.setViewRect(f.x, f.y, v, m), s.setCenter(t.get("center")), s.setZoom(t.get("zoom"))
                }
            }), i
        }
    }, function (t, e) {
        function i(t) {
            return t instanceof Array || (t = [t, t]), t
        }

        t.exports = function (t) {
            t.eachSeriesByType("graph", function (t) {
                var e = t.getGraph(), n = t.getEdgeData(), r = i(t.get("edgeSymbol")), o = i(t.get("edgeSymbolSize"));
                n.setVisual("fromSymbol", r && r[0]), n.setVisual("toSymbol", r && r[1]), n.setVisual("fromSymbolSize", o && o[0]), n.setVisual("toSymbolSize", o && o[1]), n.setVisual("color", t.get("lineStyle.normal.color")), n.each(function (t) {
                    var r = n.getItemModel(t), o = e.getEdgeByIndex(t), a = i(r.getShallow("symbol", !0)), s = i(r.getShallow("symbolSize", !0)), l = r.get("lineStyle.normal.color");
                    switch (l) {
                        case"source":
                            l = o.node1.getVisual("color");
                            break;
                        case"target":
                            l = o.node2.getVisual("color")
                    }
                    a[0] && o.setVisual("fromSymbol", a[0]), a[1] && o.setVisual("toSymbol", a[1]), s[0] && o.setVisual("fromSymbolSize", s[0]), s[1] && o.setVisual("toSymbolSize", s[1]), o.setVisual("color", l)
                })
            })
        }
    }, function (t, e, i) {
        var n = i(5), r = n.scaleAndAdd;
        t.exports = function (t, e, i) {
            for (var o = i.rect, a = o.width, s = o.height, l = [o.x + a / 2, o.y + s / 2], u = null == i.gravity ? .1 : i.gravity, h = 0; h < t.length; h++) {
                var c = t[h];
                c.p || (c.p = n.create(a * (Math.random() - .5) + l[0], s * (Math.random() - .5) + l[1])), c.pp = n.clone(c.p), c.edges = null
            }
            var d = .6;
            return {
                warmUp: function () {
                    d = .5
                }, setFixed: function (e) {
                    t[e].fixed = !0
                }, setUnfixed: function (e) {
                    t[e].fixed = !1
                }, step: function (i) {
                    for (var o = [], a = t.length, s = 0; s < e.length; s++) {
                        var h = e[s], c = h.n1, f = h.n2;
                        n.sub(o, f.p, c.p);
                        var p = n.len(o) - h.d, g = f.w / (c.w + f.w);
                        n.normalize(o, o), !c.fixed && r(c.p, c.p, o, g * p * d), !f.fixed && r(f.p, f.p, o, -(1 - g) * p * d)
                    }
                    for (var s = 0; a > s; s++) {
                        var v = t[s];
                        v.fixed || (n.sub(o, l, v.p), n.scaleAndAdd(v.p, v.p, o, u * d))
                    }
                    for (var s = 0; a > s; s++)for (var c = t[s], m = s + 1; a > m; m++) {
                        var f = t[m];
                        n.sub(o, f.p, c.p);
                        var p = n.len(o);
                        0 === p && (n.set(o, Math.random() - .5, Math.random() - .5), p = 1);
                        var y = (c.rep + f.rep) / p / p;
                        !c.fixed && r(c.pp, c.pp, o, y), !f.fixed && r(f.pp, f.pp, o, -y);
                    }
                    for (var x = [], s = 0; a > s; s++) {
                        var v = t[s];
                        v.fixed || (n.sub(x, v.p, v.pp), n.scaleAndAdd(v.p, v.p, x, d), n.copy(v.pp, v.p))
                    }
                    d = .992 * d, i && i(t, e, .01 > d)
                }
            }
        }
    }, function (t, e, i) {
        var n = i(272), r = i(4), o = i(223), a = i(221), s = i(5);
        t.exports = function (t) {
            t.eachSeriesByType("graph", function (t) {
                var e = t.coordinateSystem;
                if (!e || "view" === e.type)if ("force" === t.get("layout")) {
                    var i = t.preservedPoints || {}, l = t.getGraph(), u = l.data, h = l.edgeData, c = t.getModel("force"), d = c.get("initLayout");
                    t.preservedPoints ? u.each(function (t) {
                        var e = u.getId(t);
                        u.setItemLayout(t, i[e] || [NaN, NaN])
                    }) : d && "none" !== d ? "circular" === d && a(t) : o(t);
                    var f = u.getDataExtent("value"), p = c.get("repulsion"), g = c.get("edgeLength"), v = u.mapArray("value", function (t, e) {
                        var i = u.getItemLayout(e), n = r.linearMap(t, f, [0, p]) || p / 2;
                        return {w: n, rep: n, p: !i || isNaN(i[0]) || isNaN(i[1]) ? null : i}
                    }), m = h.mapArray("value", function (t, e) {
                        var i = l.getEdgeByIndex(e);
                        return {
                            n1: v[i.node1.dataIndex],
                            n2: v[i.node2.dataIndex],
                            d: g,
                            curveness: i.getModel().get("lineStyle.normal.curveness") || 0
                        }
                    }), e = t.coordinateSystem, y = e.getBoundingRect(), x = n(v, m, {
                        rect: y,
                        gravity: c.get("gravity")
                    }), _ = x.step;
                    x.step = function (t) {
                        for (var e = 0, n = v.length; n > e; e++)v[e].fixed && s.copy(v[e].p, l.getNodeByIndex(e).getLayout());
                        _(function (e, n, r) {
                            for (var o = 0, a = e.length; a > o; o++)e[o].fixed || l.getNodeByIndex(o).setLayout(e[o].p), i[u.getId(o)] = e[o].p;
                            for (var o = 0, a = n.length; a > o; o++) {
                                var h = n[o], c = l.getEdgeByIndex(o), d = h.n1.p, f = h.n2.p, p = c.getLayout();
                                p = p ? p.slice() : [], p[0] = p[0] || [], p[1] = p[1] || [], s.copy(p[0], d), s.copy(p[1], f), h.curveness > 0 && (p[2] = [(d[0] + f[0]) / 2 - (d[1] - f[1]) * h.curveness, (d[1] + f[1]) / 2 - (f[0] - d[0]) * h.curveness]), c.setLayout(p)
                            }
                            t && t(r)
                        })
                    }, t.forceLayout = x, t.preservedPoints = i, x.step()
                } else t.forceLayout = null
            })
        }
    }, function (t, e, i) {
        var n = i(2), r = i(220), o = {type: "graphRoam", event: "graphRoam", update: "none"};
        n.registerAction(o, function (t, e) {
            e.eachComponent({mainType: "series", query: t}, function (e) {
                var i = e.coordinateSystem, n = r.updateCenterAndZoom(i, t);
                e.setCenter && e.setCenter(n.center), e.setZoom && e.setZoom(n.zoom)
            })
        })
    }, function (t, e, i) {
        var n = i(223), r = i(222);
        t.exports = function (t, e) {
            t.eachSeriesByType("graph", function (t) {
                var e = t.get("layout"), i = t.coordinateSystem;
                if (i && "view" !== i.type) {
                    var o = t.getData();
                    o.each(i.dimensions, function (t, e, n) {
                        isNaN(t) || isNaN(e) ? o.setItemLayout(n, [NaN, NaN]) : o.setItemLayout(n, i.dataToPoint([t, e]))
                    }), r(o.graph)
                } else e && "none" !== e || n(t)
            })
        }
    }, function (t, e, i) {
        i(278), i(279)
    }, function (t, e, i) {
        function n() {
            var t = o.createCanvas();
            this.canvas = t, this.blurSize = 30, this.pointSize = 20, this.maxOpacity = 1, this.minOpacity = 0, this._gradientPixels = {}
        }

        var r = 256, o = i(1);
        n.prototype = {
            update: function (t, e, i, n, o, a) {
                var s = this._getBrush(), l = this._getGradient(t, o, "inRange"), u = this._getGradient(t, o, "outOfRange"), h = this.pointSize + this.blurSize, c = this.canvas, d = c.getContext("2d"), f = t.length;
                c.width = e, c.height = i;
                for (var p = 0; f > p; ++p) {
                    var g = t[p], v = g[0], m = g[1], y = g[2], x = n(y);
                    d.globalAlpha = x, d.drawImage(s, v - h, m - h)
                }
                for (var _ = d.getImageData(0, 0, c.width, c.height), b = _.data, w = 0, S = b.length, M = this.minOpacity, A = this.maxOpacity, I = A - M; S > w;) {
                    var x = b[w + 3] / 256, T = 4 * Math.floor(x * (r - 1));
                    if (x > 0) {
                        var L = a(x) ? l : u;
                        x > 0 && (x = x * I + M), b[w++] = L[T], b[w++] = L[T + 1], b[w++] = L[T + 2], b[w++] = L[T + 3] * x * 256
                    } else w += 4
                }
                return d.putImageData(_, 0, 0), c
            }, _getBrush: function () {
                var t = this._brushCanvas || (this._brushCanvas = o.createCanvas()), e = this.pointSize + this.blurSize, i = 2 * e;
                t.width = i, t.height = i;
                var n = t.getContext("2d");
                return n.clearRect(0, 0, i, i), n.shadowOffsetX = i, n.shadowBlur = this.blurSize, n.shadowColor = "#000", n.beginPath(), n.arc(-e, e, this.pointSize, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), t
            }, _getGradient: function (t, e, i) {
                for (var n = this._gradientPixels, r = n[i] || (n[i] = new Uint8ClampedArray(1024)), o = [], a = 0, s = 0; 256 > s; s++)e[i](s / 255, !0, o), r[a++] = o[0], r[a++] = o[1], r[a++] = o[2], r[a++] = o[3];
                return r
            }
        }, t.exports = n
    }, function (t, e, i) {
        var n = i(15), r = i(35);
        t.exports = n.extend({
            type: "series.heatmap",
            getInitialData: function (t, e) {
                return r(t.data, this, e)
            },
            defaultOption: {
                coordinateSystem: "cartesian2d",
                zlevel: 0,
                z: 2,
                xAxisIndex: 0,
                yAxisIndex: 0,
                geoIndex: 0,
                blurSize: 30,
                pointSize: 20,
                maxOpacity: 1,
                minOpacity: 0
            }
        })
    }, function (t, e, i) {
        function n(t, e, i) {
            var n = t[1] - t[0];
            e = l.map(e, function (e) {
                return {interval: [(e.interval[0] - t[0]) / n, (e.interval[1] - t[0]) / n]}
            });
            var r = e.length, o = 0;
            return function (t) {
                for (var n = o; r > n; n++) {
                    var a = e[n].interval;
                    if (a[0] <= t && t <= a[1]) {
                        o = n;
                        break
                    }
                }
                if (n === r)for (var n = o - 1; n >= 0; n--) {
                    var a = e[n].interval;
                    if (a[0] <= t && t <= a[1]) {
                        o = n;
                        break
                    }
                }
                return n >= 0 && r > n && i[n]
            }
        }

        function r(t, e) {
            var i = t[1] - t[0];
            return e = [(e[0] - t[0]) / i, (e[1] - t[0]) / i], function (t) {
                return t >= e[0] && t <= e[1]
            }
        }

        function o(t) {
            var e = t.dimensions;
            return "lng" === e[0] && "lat" === e[1]
        }

        var a = i(3), s = i(277), l = i(1);
        t.exports = i(2).extendChartView({
            type: "heatmap", render: function (t, e, i) {
                var n;
                e.eachComponent("visualMap", function (e) {
                    e.eachTargetSeries(function (i) {
                        i === t && (n = e)
                    })
                }), this.group.removeAll();
                var r = t.coordinateSystem;
                "cartesian2d" === r.type ? this._renderOnCartesian(r, t, i) : o(r) && this._renderOnGeo(r, t, n, i)
            }, _renderOnCartesian: function (t, e, i) {
                var n = t.getAxis("x"), r = t.getAxis("y"), o = this.group, s = n.getBandWidth(), u = r.getBandWidth(), h = e.getData(), c = "itemStyle.normal", d = "itemStyle.emphasis", f = "label.normal", p = "label.emphasis", g = e.getModel(c).getItemStyle(["color"]), v = e.getModel(d).getItemStyle(), m = e.getModel("label.normal"), y = e.getModel("label.emphasis");
                h.each(["x", "y", "z"], function (i, n, r, x) {
                    var _ = h.getItemModel(x), b = t.dataToPoint([i, n]);
                    if (!isNaN(r)) {
                        var w = new a.Rect({
                            shape: {x: b[0] - s / 2, y: b[1] - u / 2, width: s, height: u},
                            style: {fill: h.getItemVisual(x, "color"), opacity: h.getItemVisual(x, "opacity")}
                        });
                        h.hasItemOption && (g = _.getModel(c).getItemStyle(["color"]), v = _.getModel(d).getItemStyle(), m = _.getModel(f), y = _.getModel(p));
                        var S = e.getRawValue(x), M = "-";
                        S && null != S[2] && (M = S[2]), m.getShallow("show") && (a.setText(g, m), g.text = e.getFormattedLabel(x, "normal") || M), y.getShallow("show") && (a.setText(v, y), v.text = e.getFormattedLabel(x, "emphasis") || M), w.setStyle(g), a.setHoverStyle(w, h.hasItemOption ? v : l.extend({}, v)), o.add(w), h.setItemGraphicEl(x, w)
                    }
                })
            }, _renderOnGeo: function (t, e, i, o) {
                var l = i.targetVisuals.inRange, u = i.targetVisuals.outOfRange, h = e.getData(), c = this._hmLayer || this._hmLayer || new s;
                c.blurSize = e.get("blurSize"), c.pointSize = e.get("pointSize"), c.minOpacity = e.get("minOpacity"), c.maxOpacity = e.get("maxOpacity");
                var d = t.getViewRect().clone(), f = t.getRoamTransform().transform;
                d.applyTransform(f);
                var p = Math.max(d.x, 0), g = Math.max(d.y, 0), v = Math.min(d.width + d.x, o.getWidth()), m = Math.min(d.height + d.y, o.getHeight()), y = v - p, x = m - g, _ = h.mapArray(["lng", "lat", "value"], function (e, i, n) {
                    var r = t.dataToPoint([e, i]);
                    return r[0] -= p, r[1] -= g, r.push(n), r
                }), b = i.getExtent(), w = "visualMap.continuous" === i.type ? r(b, i.option.range) : n(b, i.getPieceList(), i.option.selected);
                c.update(_, y, x, l.color.getNormalizer(), {
                    inRange: l.color.getColorMapper(),
                    outOfRange: u.color.getColorMapper()
                }, w);
                var S = new a.Image({style: {width: y, height: x, x: p, y: g, image: c.canvas}, silent: !0});
                this.group.add(S)
            }
        })
    }, function (t, e, i) {
        function n(t, e, i) {
            a.call(this, t, e, i), this._lastFrame = 0, this._lastFramePercent = 0
        }

        var r = i(225), o = i(1), a = i(224), s = i(5), l = n.prototype;
        l.createLine = function (t, e, i) {
            return new r(t, e, i)
        }, l.updateAnimationPoints = function (t, e) {
            this._points = e;
            for (var i = [0], n = 0, r = 1; r < e.length; r++) {
                var o = e[r - 1], a = e[r];
                n += s.dist(o, a), i.push(n)
            }
            if (0 !== n) {
                for (var r = 0; r < i.length; r++)i[r] /= n;
                this._offsets = i, this._length = n
            }
        }, l.getLineLength = function (t) {
            return this._length
        }, l.updateSymbolPosition = function (t) {
            var e = t.__t, i = this._points, n = this._offsets, r = i.length;
            if (n) {
                var o, a = this._lastFrame;
                if (e < this._lastFramePercent) {
                    var l = Math.min(a + 1, r - 1);
                    for (o = l; o >= 0 && !(n[o] <= e); o--);
                    o = Math.min(o, r - 2)
                } else {
                    for (var o = a; r > o && !(n[o] > e); o++);
                    o = Math.min(o - 1, r - 2)
                }
                s.lerp(t.position, i[o], i[o + 1], (e - n[o]) / (n[o + 1] - n[o])), this._lastFrame = o, this._lastFramePercent = e, t.ignore = !1
            }
        }, o.inherits(n, a), t.exports = n
    }, function (t, e, i) {
        function n(t) {
            return a.isArray(t) || (t = [+t, +t]), t
        }

        function r(t, e) {
            t.eachChild(function (t) {
                t.attr({
                    z: e.z,
                    zlevel: e.zlevel,
                    style: {
                        stroke: "stroke" === e.brushType ? e.color : null,
                        fill: "fill" === e.brushType ? e.color : null
                    }
                })
            })
        }

        function o(t, e) {
            c.call(this);
            var i = new h(t, e), n = new c;
            this.add(i), this.add(n), n.beforeUpdate = function () {
                this.attr(i.getScale())
            }, this.updateData(t, e)
        }

        var a = i(1), s = i(26), l = i(3), u = i(4), h = i(49), c = l.Group, d = 3, f = o.prototype;
        f.stopEffectAnimation = function () {
            this.childAt(1).removeAll()
        }, f.startEffectAnimation = function (t) {
            for (var e = t.symbolType, i = t.color, n = this.childAt(1), o = 0; d > o; o++) {
                var a = s.createSymbol(e, -.5, -.5, 1, 1, i);
                a.attr({style: {strokeNoScale: !0}, z2: 99, silent: !0, scale: [1, 1]});
                var l = -o / d * t.period + t.effectOffset;
                a.animate("", !0).when(t.period, {scale: [t.rippleScale, t.rippleScale]}).delay(l).start(), a.animateStyle(!0).when(t.period, {opacity: 0}).delay(l).start(), n.add(a)
            }
            r(n, t)
        }, f.updateEffectAnimation = function (t) {
            for (var e = this._effectCfg, i = this.childAt(1), n = ["symbolType", "period", "rippleScale"], o = 0; n > o; o++) {
                var a = n[o];
                if (e[a] !== t[a])return this.stopEffectAnimation(), void this.startEffectAnimation(t)
            }
            r(i, t)
        }, f.highlight = function () {
            this.trigger("emphasis")
        }, f.downplay = function () {
            this.trigger("normal")
        }, f.updateData = function (t, e) {
            var i = t.hostModel;
            this.childAt(0).updateData(t, e);
            var r = this.childAt(1), o = t.getItemModel(e), a = t.getItemVisual(e, "symbol"), s = n(t.getItemVisual(e, "symbolSize")), l = t.getItemVisual(e, "color");
            r.attr("scale", s), r.traverse(function (t) {
                t.attr({fill: l})
            });
            var h = o.getShallow("symbolOffset");
            if (h) {
                var c = r.position;
                c[0] = u.parsePercent(h[0], s[0]), c[1] = u.parsePercent(h[1], s[1])
            }
            r.rotation = (o.getShallow("symbolRotate") || 0) * Math.PI / 180 || 0;
            var d = {};
            if (d.showEffectOn = i.get("showEffectOn"), d.rippleScale = o.get("rippleEffect.scale"), d.brushType = o.get("rippleEffect.brushType"), d.period = 1e3 * o.get("rippleEffect.period"), d.effectOffset = e / t.count(), d.z = o.getShallow("z") || 0, d.zlevel = o.getShallow("zlevel") || 0, d.symbolType = a, d.color = l, this.off("mouseover").off("mouseout").off("emphasis").off("normal"), "render" === d.showEffectOn)this._effectCfg ? this.updateEffectAnimation(d) : this.startEffectAnimation(d), this._effectCfg = d; else {
                this._effectCfg = null, this.stopEffectAnimation();
                var f = this.childAt(0), p = function () {
                    f.trigger("emphasis"), "render" !== d.showEffectOn && this.startEffectAnimation(d)
                }, g = function () {
                    f.trigger("normal"), "render" !== d.showEffectOn && this.stopEffectAnimation()
                };
                this.on("mouseover", p, this).on("mouseout", g, this).on("emphasis", p, this).on("normal", g, this)
            }
            this._effectCfg = d
        }, f.fadeOut = function (t) {
            this.off("mouseover").off("mouseout").off("emphasis").off("normal"), t && t()
        }, a.inherits(o, c), t.exports = o
    }, function (t, e, i) {
        function n() {
            this.group = new r.Group, this._lineEl = new s
        }

        var r = i(3), o = i(83), a = i(82), s = r.extendShape({
            shape: {polyline: !1, segs: []},
            buildPath: function (t, e) {
                for (var i = e.segs, n = e.polyline, r = 0; r < i.length; r++) {
                    var o = i[r];
                    if (n) {
                        t.moveTo(o[0][0], o[0][1]);
                        for (var a = 1; a < o.length; a++)t.lineTo(o[a][0], o[a][1])
                    } else t.moveTo(o[0][0], o[0][1]), o.length > 2 ? t.quadraticCurveTo(o[2][0], o[2][1], o[1][0], o[1][1]) : t.lineTo(o[1][0], o[1][1])
                }
            },
            findDataIndex: function (t, e) {
                for (var i = this.shape, n = i.segs, r = i.polyline, s = Math.max(this.style.lineWidth, 1), l = 0; l < n.length; l++) {
                    var u = n[l];
                    if (r) {
                        for (var h = 1; h < u.length; h++)if (a.containStroke(u[h - 1][0], u[h - 1][1], u[h][0], u[h][1], s, t, e))return l
                    } else if (u.length > 2) {
                        if (o.containStroke(u[0][0], u[0][1], u[2][0], u[2][1], u[1][0], u[1][1], s, t, e))return l
                    } else if (a.containStroke(u[0][0], u[0][1], u[1][0], u[1][1], s, t, e))return l
                }
                return -1
            }
        }), l = n.prototype;
        l.updateData = function (t) {
            this.group.removeAll();
            var e = this._lineEl, i = t.hostModel;
            e.setShape({
                segs: t.mapArray(t.getItemLayout),
                polyline: i.get("polyline")
            }), e.useStyle(i.getModel("lineStyle.normal").getLineStyle());
            var n = t.getVisual("color");
            n && e.setStyle("stroke", n), e.setStyle("fill"), e.seriesIndex = i.seriesIndex, e.on("mousemove", function (t) {
                e.dataIndex = null;
                var i = e.findDataIndex(t.offsetX, t.offsetY);
                i > 0 && (e.dataIndex = i)
            }), this.group.add(e)
        }, l.updateLayout = function (t) {
            var e = t.getData();
            this._lineEl.setShape({segs: e.mapArray(e.getItemLayout)})
        }, l.remove = function () {
            this.group.removeAll()
        }, t.exports = n
    }, function (t, e, i) {
        function n(t, e, i, n) {
            l.Group.call(this), this.bodyIndex, this.whiskerIndex, this.styleUpdater = i, this._createContent(t, e, n), this.updateData(t, e, n), this._seriesModel
        }

        function r(t, e, i) {
            return s.map(t, function (t) {
                return t = t.slice(), t[e] = i.initBaseline, t
            })
        }

        function o(t) {
            var e = {};
            return s.each(t, function (t, i) {
                e["ends" + i] = t
            }), e
        }

        function a(t) {
            this.group = new l.Group, this.styleUpdater = t
        }

        var s = i(1), l = i(3), u = i(6), h = u.extend({
            type: "whiskerInBox", shape: {}, buildPath: function (t, e) {
                for (var i in e)if (0 === i.indexOf("ends")) {
                    var n = e[i];
                    t.moveTo(n[0][0], n[0][1]), t.lineTo(n[1][0], n[1][1])
                }
            }
        }), c = n.prototype;
        c._createContent = function (t, e, i) {
            var n = t.getItemLayout(e), a = "horizontal" === n.chartLayout ? 1 : 0, u = 0;
            this.add(new l.Polygon({
                shape: {points: i ? r(n.bodyEnds, a, n) : n.bodyEnds},
                style: {strokeNoScale: !0},
                z2: 100
            })), this.bodyIndex = u++;
            var c = s.map(n.whiskerEnds, function (t) {
                return i ? r(t, a, n) : t
            });
            this.add(new h({shape: o(c), style: {strokeNoScale: !0}, z2: 100})), this.whiskerIndex = u++
        }, c.updateData = function (t, e, i) {
            var n = this._seriesModel = t.hostModel, r = t.getItemLayout(e), a = l[i ? "initProps" : "updateProps"];
            a(this.childAt(this.bodyIndex), {shape: {points: r.bodyEnds}}, n, e), a(this.childAt(this.whiskerIndex), {shape: o(r.whiskerEnds)}, n, e), this.styleUpdater.call(null, this, t, e)
        }, s.inherits(n, l.Group);
        var d = a.prototype;
        d.updateData = function (t) {
            var e = this.group, i = this._data, r = this.styleUpdater;
            t.diff(i).add(function (i) {
                if (t.hasValue(i)) {
                    var o = new n(t, i, r, !0);
                    t.setItemGraphicEl(i, o), e.add(o)
                }
            }).update(function (o, a) {
                var s = i.getItemGraphicEl(a);
                return t.hasValue(o) ? (s ? s.updateData(t, o) : s = new n(t, o, r), e.add(s), void t.setItemGraphicEl(o, s)) : void e.remove(s)
            }).remove(function (t) {
                var n = i.getItemGraphicEl(t);
                n && e.remove(n)
            }).execute(), this._data = t
        }, d.remove = function () {
            var t = this.group, e = this._data;
            this._data = null, e && e.eachItemGraphicEl(function (e) {
                e && t.remove(e)
            })
        }, t.exports = a
    }, function (t, e, i) {
        i(285), i(286);
        var n = i(2);
        n.registerLayout(i(287))
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            var e = t.data;
            e && e[0] && e[0][0] && e[0][0].coord && (t.data = a.map(e, function (t) {
                var e = [t[0].coord, t[1].coord], i = {coords: e};
                return t[0].name && (i.fromName = t[0].name), t[1].name && (i.toName = t[1].name), a.mergeAll([i, t[0], t[1]])
            }))
        }

        var r = i(15), o = i(14), a = i(1), s = (i(23), r.extend({
            type: "series.lines",
            dependencies: ["grid", "polar"],
            visualColorAccessPath: "lineStyle.normal.color",
            init: function (t) {
                n(t), s.superApply(this, "init", arguments)
            },
            mergeOption: function (t) {
                n(t), s.superApply(this, "mergeOption", arguments)
            },
            getInitialData: function (t, e) {
                var i = new o(["value"], this);
                return i.hasItemOption = !1, i.initData(t.data, [], function (t, e, n, r) {
                    if (t instanceof Array)return NaN;
                    i.hasItemOption = !0;
                    var o = t.value;
                    return o ? o instanceof Array ? o[r] : o : void 0
                }), i
            },
            formatTooltip: function (t) {
                var e = this.getData(), i = e.getItemModel(t), n = i.get("name");
                if (n)return n;
                var r = i.get("fromName"), o = i.get("toName");
                return r + " > " + o
            },
            defaultOption: {
                coordinateSystem: "geo",
                zlevel: 0,
                z: 2,
                legendHoverLink: !0,
                hoverAnimation: !0,
                xAxisIndex: 0,
                yAxisIndex: 0,
                geoIndex: 0,
                effect: {
                    show: !1,
                    period: 4,
                    constantSpeed: 0,
                    symbol: "circle",
                    symbolSize: 3,
                    loop: !0,
                    trailLength: .2
                },
                large: !1,
                largeThreshold: 2e3,
                polyline: !1,
                label: {normal: {show: !1, position: "end"}},
                lineStyle: {normal: {opacity: .5}}
            }
        }))
    }, function (t, e, i) {
        var n = i(93), r = i(224), o = i(92), a = i(225), s = i(280), l = i(282);
        i(2).extendChartView({
            type: "lines", init: function () {
            }, render: function (t, e, i) {
                var u = t.getData(), h = this._lineDraw, c = t.get("effect.show"), d = t.get("polyline"), f = t.get("large") && u.count() >= t.get("largeThreshold");
                c === this._hasEffet && d === this._isPolyline && f === this._isLarge || (h && h.remove(), h = this._lineDraw = f ? new l : new n(d ? c ? s : a : c ? r : o), this._hasEffet = c, this._isPolyline = d, this._isLarge = f);
                var p = t.get("zlevel"), g = t.get("effect.trailLength"), v = i.getZr();
                if (v.painter.getLayer(p).clear(!0), null != this._lastZlevel && v.configLayer(this._lastZlevel, {motionBlur: !1}), c && g) {
                    v.configLayer(p, {motionBlur: !0, lastFrameAlpha: Math.max(Math.min(g / 10 + .9, 1), 0)})
                }
                this.group.add(h.group), h.updateData(u), this._lastZlevel = p
            }, updateLayout: function (t, e, i) {
                this._lineDraw.updateLayout(t);
                var n = i.getZr();
                n.painter.getLayer(this._lastZlevel).clear(!0)
            }, remove: function (t, e) {
                this._lineDraw && this._lineDraw.remove(e, !0)
            }
        })
    }, function (t, e, i) {
        t.exports = function (t) {
            t.eachSeriesByType("lines", function (t) {
                var e = t.coordinateSystem, i = t.getData();
                i.each(function (n) {
                    var r = i.getItemModel(n), o = r.option instanceof Array ? r.option : r.get("coords"), a = [];
                    if (t.get("polyline"))for (var s = 0; s < o.length; s++)a.push(e.dataToPoint(o[s])); else {
                        a[0] = e.dataToPoint(o[0]), a[1] = e.dataToPoint(o[1]);
                        var l = r.get("lineStyle.normal.curveness");
                        l > 0 && (a[2] = [(a[0][0] + a[1][0]) / 2 - (a[0][1] - a[1][1]) * l, (a[0][1] + a[1][1]) / 2 - (a[1][0] - a[0][0]) * l])
                    }
                    i.setItemLayout(n, a)
                })
            })
        }
    }, function (t, e, i) {
        var n = i(2), r = n.PRIORITY;
        i(289), i(290), i(219), i(170), n.registerLayout(i(293)), n.registerVisual(i(294)), n.registerProcessor(r.PROCESSOR.STATISTIC, i(292)), n.registerPreprocessor(i(291)), i(77)("map", [{
            type: "mapToggleSelect",
            event: "mapselectchanged",
            method: "toggleSelected"
        }, {type: "mapSelect", event: "mapselected", method: "select"}, {
            type: "mapUnSelect",
            event: "mapunselected",
            method: "unSelect"
        }])
    }, function (t, e, i) {
        var n = i(14), r = i(15), o = i(1), a = i(30), s = i(9), l = s.encodeHTML, u = s.addCommas, h = i(66), c = i(170), d = r.extend({
            type: "series.map",
            layoutMode: "box",
            needsDrawMap: !1,
            seriesGroup: [],
            init: function (t) {
                t = this._fillOption(t, t.map), this.option = t, d.superApply(this, "init", arguments), this.updateSelectedMap(t.data)
            },
            getInitialData: function (t) {
                var e = a(["value"], t.data || []), i = new n(e, this);
                return i.initData(t.data), i
            },
            mergeOption: function (t) {
                t.data && (t = this._fillOption(t, this.option.map)), d.superCall(this, "mergeOption", t), this.updateSelectedMap(this.option.data)
            },
            _fillOption: function (t, e) {
                return t = o.extend({}, t), t.data = c.getFilledRegions(t.data, e), t
            },
            getRawValue: function (t) {
                return this._data.get("value", t)
            },
            getRegionModel: function (t) {
                var e = this.getData();
                return e.getItemModel(e.indexOfName(t))
            },
            formatTooltip: function (t) {
                for (var e = this.getData(), i = u(this.getRawValue(t)), n = e.getName(t), r = this.seriesGroup, o = [], a = 0; a < r.length; a++) {
                    var s = r[a].originalData.indexOfName(n);
                    isNaN(r[a].originalData.get("value", s)) || o.push(l(r[a].name))
                }
                return o.join(", ") + "<br />" + n + " : " + i
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "geo",
                map: "china",
                left: "center",
                top: "center",
                aspectScale: .75,
                showLegendSymbol: !0,
                dataRangeHoverLink: !0,
                center: null,
                zoom: 1,
                scaleLimit: null,
                label: {
                    normal: {show: !1, textStyle: {color: "#000"}},
                    emphasis: {show: !0, textStyle: {color: "rgb(100,0,0)"}}
                },
                itemStyle: {
                    normal: {borderWidth: .5, borderColor: "#444", areaColor: "#eee"},
                    emphasis: {areaColor: "rgba(255,215,0,0.8)"}
                }
            },
            setZoom: function (t) {
                this.option.zoom = t
            },
            setCenter: function (t) {
                this.option.center = t
            }
        });
        o.mixin(d, h), t.exports = d
    }, function (t, e, i) {
        var n = i(3), r = i(227);
        i(2).extendChartView({
            type: "map", render: function (t, e, i, n) {
                if (!n || "mapToggleSelect" !== n.type || n.from !== this.uid) {
                    var o = this.group;
                    if (o.removeAll(), n && "geoRoam" === n.type && "series" === n.component && n.name === t.name) {
                        var a = this._mapDraw;
                        a && o.add(a.group)
                    } else if (t.needsDrawMap) {
                        var a = this._mapDraw || new r(i, !0);
                        o.add(a.group), a.draw(t, e, i, this, n), this._mapDraw = a
                    } else this._mapDraw && this._mapDraw.remove(), this._mapDraw = null;
                    t.get("showLegendSymbol") && e.getComponent("legend") && this._renderSymbols(t, e, i)
                }
            }, remove: function () {
                this._mapDraw && this._mapDraw.remove(), this._mapDraw = null, this.group.removeAll()
            }, _renderSymbols: function (t, e, i) {
                var r = t.originalData, o = this.group;
                r.each("value", function (e, i) {
                    if (!isNaN(e)) {
                        var a = r.getItemLayout(i);
                        if (a && a.point) {
                            var s = a.point, l = a.offset, u = new n.Circle({
                                style: {fill: t.getData().getVisual("color")},
                                shape: {cx: s[0] + 9 * l, cy: s[1], r: 3},
                                silent: !0,
                                z2: 10
                            });
                            if (!l) {
                                var h = t.mainSeries.getData(), c = r.getName(i), d = c, f = h.indexOfName(c), p = r.getItemModel(i), g = p.getModel("label.normal"), v = p.getModel("label.emphasis"), m = g.getModel("textStyle"), y = v.getModel("textStyle"), x = h.getItemGraphicEl(f);
                                u.setStyle({textPosition: "bottom"});
                                var _ = function () {
                                    u.setStyle({
                                        text: v.get("show") ? d : "",
                                        textFill: y.getTextColor(),
                                        textFont: y.getFont()
                                    })
                                }, b = function () {
                                    u.setStyle({
                                        text: g.get("show") ? d : "",
                                        textFill: m.getTextColor(),
                                        textFont: m.getFont()
                                    })
                                };
                                x.on("mouseover", _).on("mouseout", b).on("emphasis", _).on("normal", b), b()
                            }
                            o.add(u)
                        }
                    }
                })
            }
        })
    }, function (t, e, i) {
        var n = i(1);
        t.exports = function (t) {
            var e = [];
            n.each(t.series, function (t) {
                "map" === t.type && e.push(t)
            }), n.each(e, function (t) {
                t.map = t.map || t.mapType, n.defaults(t, t.mapLocation)
            })
        }
    }, function (t, e, i) {
        function n(t, e) {
            for (var i = {}, n = ["value"], r = 0; r < t.length; r++)t[r].each(n, function (e, n) {
                var o = t[r].getName(n);
                i[o] = i[o] || [], isNaN(e) || i[o].push(e)
            });
            return t[0].map(n, function (n, r) {
                for (var o = t[0].getName(r), a = 0, s = 1 / 0, l = -(1 / 0), u = i[o].length, h = 0; u > h; h++)s = Math.min(s, i[o][h]), l = Math.max(l, i[o][h]), a += i[o][h];
                var c;
                return c = "min" === e ? s : "max" === e ? l : "average" === e ? a / u : a, 0 === u ? NaN : c
            })
        }

        var r = i(1);
        t.exports = function (t) {
            var e = {};
            t.eachSeriesByType("map", function (t) {
                var i = t.get("map");
                e[i] = e[i] || [], e[i].push(t)
            }), r.each(e, function (t, e) {
                for (var i = n(r.map(t, function (t) {
                    return t.getData()
                }), t[0].get("mapValueCalculation")), o = 0; o < t.length; o++)t[o].originalData = t[o].getData();
                for (var o = 0; o < t.length; o++)t[o].seriesGroup = t, t[o].needsDrawMap = 0 === o, t[o].setData(i.cloneShallow()), t[o].mainSeries = t[0]
            })
        }
    }, function (t, e, i) {
        var n = i(1);
        t.exports = function (t) {
            var e = {};
            t.eachSeriesByType("map", function (i) {
                var r = i.get("map");
                if (!e[r]) {
                    var o = {};
                    n.each(i.seriesGroup, function (e) {
                        var i = e.coordinateSystem, n = e.originalData;
                        e.get("showLegendSymbol") && t.getComponent("legend") && n.each("value", function (t, e) {
                            var r = n.getName(e), a = i.getRegion(r);
                            if (a && !isNaN(t)) {
                                var s = o[r] || 0, l = i.dataToPoint(a.center);
                                o[r] = s + 1, n.setItemLayout(e, {point: l, offset: s})
                            }
                        })
                    });
                    var a = i.getData();
                    a.each(function (t) {
                        var e = a.getName(t), i = a.getItemLayout(t) || {};
                        i.showLabel = !o[e], a.setItemLayout(t, i)
                    }), e[r] = !0
                }
            })
        }
    }, function (t, e) {
        t.exports = function (t) {
            t.eachSeriesByType("map", function (t) {
                var e = t.get("color"), i = t.getModel("itemStyle.normal"), n = i.get("areaColor"), r = i.get("color") || e[t.seriesIndex % e.length];
                t.getData().setVisual({areaColor: n, color: r})
            })
        }
    }, function (t, e, i) {
        var n = i(2);
        i(228), i(296), i(297), n.registerVisual(i(298))
    }, function (t, e, i) {
        function n(t, e, i) {
            var n = t.get("data"), o = r(e);
            n && n.length && s.each(i, function (t) {
                if (t) {
                    var e = s.indexOf(n, t[o]);
                    t[o] = e >= 0 ? e : NaN
                }
            })
        }

        function r(t) {
            return +t.replace("dim", "")
        }

        function o(t, e) {
            var i = 0;
            s.each(t, function (t) {
                var e = r(t);
                e > i && (i = e)
            });
            var n = e[0];
            n && n.length - 1 > i && (i = n.length - 1);
            for (var o = [], a = 0; i >= a; a++)o.push("dim" + a);
            return o
        }

        var a = i(14), s = i(1), l = i(15), u = i(30);
        t.exports = l.extend({
            type: "series.parallel",
            dependencies: ["parallel"],
            getInitialData: function (t, e) {
                var i = e.getComponent("parallel", this.get("parallelIndex")), r = i.parallelAxisIndex, l = t.data, h = i.dimensions, c = o(h, l), d = s.map(c, function (t, i) {
                    var o = s.indexOf(h, t), a = o >= 0 && e.getComponent("parallelAxis", r[o]);
                    return a && "category" === a.get("type") ? (n(a, t, l), {
                        name: t,
                        type: "ordinal"
                    }) : 0 > o && u.guessOrdinal(l, i) ? {name: t, type: "ordinal"} : t
                }), f = new a(d, this);
                return f.initData(l), this.option.progressive && (this.option.animation = !1), f
            },
            getRawIndicesByActiveState: function (t) {
                var e = this.coordinateSystem, i = this.getData(), n = [];
                return e.eachActiveState(i, function (e, r) {
                    t === e && n.push(i.getRawIndex(r))
                }), n
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "parallel",
                parallelIndex: 0,
                label: {normal: {show: !1}, emphasis: {show: !1}},
                inactiveOpacity: .05,
                activeOpacity: 1,
                lineStyle: {normal: {width: 1, opacity: .45, type: "solid"}},
                progressive: !1,
                smooth: !1,
                animationEasing: "linear"
            }
        })
    }, function (t, e, i) {
        function n(t, e, i) {
            var n = t.model, r = t.getRect(), o = new l.Rect({
                shape: {
                    x: r.x,
                    y: r.y,
                    width: r.width,
                    height: r.height
                }
            }), a = "horizontal" === n.get("layout") ? "width" : "height";
            return o.setShape(a, 0), l.initProps(o, {shape: {width: r.width, height: r.height}}, e, i), o
        }

        function r(t, e, i, n) {
            for (var r = [], o = 0; o < i.length; o++) {
                var a = i[o], l = t.get(a, e);
                s(l, n.getAxis(a).type) || r.push(n.dataToPoint(l, a))
            }
            return r
        }

        function o(t, e, i, n, o) {
            var a = r(t, i, n, o), s = new l.Polyline({shape: {points: a}, silent: !0, z2: 10});
            e.add(s), t.setItemGraphicEl(i, s)
        }

        function a(t, e) {
            var i = t.hostModel.getModel("lineStyle.normal"), n = i.getLineStyle();
            t.eachItemGraphicEl(function (r, o) {
                if (t.hasItemOption) {
                    var a = t.getItemModel(o), s = a.getModel("lineStyle.normal", i);
                    n = s.getLineStyle()
                }
                r.useStyle(u.extend(n, {
                    fill: null,
                    stroke: t.getItemVisual(o, "color"),
                    opacity: t.getItemVisual(o, "opacity")
                })), r.shape.smooth = e
            })
        }

        function s(t, e) {
            return "category" === e ? null == t : null == t || isNaN(t)
        }

        var l = i(3), u = i(1), h = .3, c = i(27).extend({
            type: "parallel", init: function () {
                this._dataGroup = new l.Group, this.group.add(this._dataGroup), this._data
            }, render: function (t, e, i, n) {
                this._renderForNormal(t)
            }, _renderForNormal: function (t) {
                function e(t) {
                    o(c, u, t, p, f, null, v)
                }

                function i(e, i) {
                    var n = d.getItemGraphicEl(i), o = r(c, e, p, f);
                    c.setItemGraphicEl(e, n), l.updateProps(n, {shape: {points: o}}, t, e)
                }

                function s(t) {
                    var e = d.getItemGraphicEl(t);
                    u.remove(e)
                }

                var u = this._dataGroup, c = t.getData(), d = this._data, f = t.coordinateSystem, p = f.dimensions, g = t.option, v = g.smooth ? h : null;
                if (c.diff(d).add(e).update(i).remove(s).execute(), a(c, v), !this._data) {
                    var m = n(f, t, function () {
                        setTimeout(function () {
                            u.removeClipPath()
                        })
                    });
                    u.setClipPath(m)
                }
                this._data = c
            }, remove: function () {
                this._dataGroup && this._dataGroup.removeAll(), this._data = null
            }
        });
        t.exports = c
    }, function (t, e) {
        t.exports = function (t) {
            t.eachSeriesByType("parallel", function (e) {
                var i = e.getModel("itemStyle.normal"), n = e.getModel("lineStyle.normal"), r = t.get("color"), o = n.get("color") || i.get("color") || r[e.seriesIndex % r.length], a = e.get("inactiveOpacity"), s = e.get("activeOpacity"), l = e.getModel("lineStyle.normal").getLineStyle(), u = e.coordinateSystem, h = e.getData(), c = {
                    normal: l.opacity,
                    active: s,
                    inactive: a
                };
                u.eachActiveState(h, function (t, e) {
                    h.setItemVisual(e, "opacity", c[t])
                }), h.setVisual("color", o)
            })
        }
    }, function (t, e, i) {
        var n = i(1), r = i(2);
        i(333), i(300), i(301), r.registerVisual(n.curry(i(72), "radar")), r.registerVisual(n.curry(i(46), "radar", "circle", null)), r.registerLayout(i(303)), r.registerProcessor(n.curry(i(70), "radar")), r.registerPreprocessor(i(302))
    }, function (t, e, i) {
        "use strict";
        var n = i(15), r = i(14), o = i(30), a = i(1), s = n.extend({
            type: "series.radar",
            dependencies: ["radar"],
            init: function (t) {
                s.superApply(this, "init", arguments), this.legendDataProvider = function () {
                    return this._dataBeforeProcessed
                }
            },
            getInitialData: function (t, e) {
                var i = t.data || [], n = o([], i, [], "indicator_"), a = new r(n, this);
                return a.initData(i), a
            },
            formatTooltip: function (t) {
                var e = this.getRawValue(t), i = this.coordinateSystem, n = i.getIndicatorAxes();
                return ("" == this._data.getName(t) ? this.name : this._data.getName(t)) + "<br/>" + a.map(n, function (t, i) {
                        return t.name + " : " + e[i]
                    }).join("<br />")
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "radar",
                legendHoverLink: !0,
                radarIndex: 0,
                lineStyle: {normal: {width: 2, type: "solid"}},
                label: {normal: {position: "top"}},
                symbol: "emptyCircle",
                symbolSize: 4
            }
        });
        t.exports = s
    }, function (t, e, i) {
        function n(t) {
            return o.isArray(t) || (t = [+t, +t]), t
        }

        var r = i(3), o = i(1), a = i(26);
        t.exports = i(2).extendChartView({
            type: "radar", render: function (t, e, i) {
                function s(t, e) {
                    var i = t.getItemVisual(e, "symbol") || "circle", r = t.getItemVisual(e, "color");
                    if ("none" !== i) {
                        var o = a.createSymbol(i, -.5, -.5, 1, 1, r);
                        return o.attr({
                            style: {strokeNoScale: !0},
                            z2: 100,
                            scale: n(t.getItemVisual(e, "symbolSize"))
                        }), o
                    }
                }

                function l(e, i, n, o, a, l) {
                    n.removeAll();
                    for (var u = 0; u < i.length - 1; u++) {
                        var h = s(o, a);
                        h && (h.__dimIdx = u, e[u] ? (h.attr("position", e[u]), r[l ? "initProps" : "updateProps"](h, {position: i[u]}, t, a)) : h.attr("position", i[u]), n.add(h))
                    }
                }

                function u(t) {
                    return o.map(t, function (t) {
                        return [h.cx, h.cy]
                    })
                }

                var h = t.coordinateSystem, c = this.group, d = t.getData(), f = this._data;
                d.diff(f).add(function (e) {
                    var i = d.getItemLayout(e);
                    if (i) {
                        var n = new r.Polygon, o = new r.Polyline, a = {shape: {points: i}};
                        n.shape.points = u(i), o.shape.points = u(i), r.initProps(n, a, t, e), r.initProps(o, a, t, e);
                        var s = new r.Group, h = new r.Group;
                        s.add(o), s.add(n), s.add(h), l(o.shape.points, i, h, d, e, !0), d.setItemGraphicEl(e, s)
                    }
                }).update(function (e, i) {
                    var n = f.getItemGraphicEl(i), o = n.childAt(0), a = n.childAt(1), s = n.childAt(2), u = {shape: {points: d.getItemLayout(e)}};
                    u.shape.points && (l(o.shape.points, u.shape.points, s, d, e, !1), r.updateProps(o, u, t), r.updateProps(a, u, t), d.setItemGraphicEl(e, n))
                }).remove(function (t) {
                    c.remove(f.getItemGraphicEl(t))
                }).execute(), d.eachItemGraphicEl(function (e, i) {
                    function n() {
                        u.attr("ignore", m)
                    }

                    function a() {
                        u.attr("ignore", v)
                    }

                    var s = d.getItemModel(i), l = e.childAt(0), u = e.childAt(1), h = e.childAt(2), f = d.getItemVisual(i, "color");
                    c.add(e), l.useStyle(o.defaults(s.getModel("lineStyle.normal").getLineStyle(), {
                        fill: "none",
                        stroke: f
                    })), l.hoverStyle = s.getModel("lineStyle.emphasis").getLineStyle();
                    var p = s.getModel("areaStyle.normal"), g = s.getModel("areaStyle.emphasis"), v = p.isEmpty() && p.parentModel.isEmpty(), m = g.isEmpty() && g.parentModel.isEmpty();
                    m = m && v, u.ignore = v, u.useStyle(o.defaults(p.getAreaStyle(), {
                        fill: f,
                        opacity: .7
                    })), u.hoverStyle = g.getAreaStyle();
                    var y = s.getModel("itemStyle.normal").getItemStyle(["color"]), x = s.getModel("itemStyle.emphasis").getItemStyle(), _ = s.getModel("label.normal"), b = s.getModel("label.emphasis");
                    h.eachChild(function (e) {
                        e.setStyle(y), e.hoverStyle = o.clone(x);
                        var n = d.get(d.dimensions[e.__dimIdx], i);
                        r.setText(e.style, _, f), e.setStyle({text: _.get("show") ? o.retrieve(t.getFormattedLabel(i, "normal", null, e.__dimIdx), n) : ""}), r.setText(e.hoverStyle, b, f), e.hoverStyle.text = b.get("show") ? o.retrieve(t.getFormattedLabel(i, "emphasis", null, e.__dimIdx), n) : ""
                    }), e.off("mouseover").off("mouseout").off("normal").off("emphasis"), e.on("emphasis", n).on("mouseover", n).on("normal", a).on("mouseout", a), r.setHoverStyle(e)
                }), this._data = d
            }, remove: function () {
                this.group.removeAll(), this._data = null
            }
        })
    }, function (t, e, i) {
        var n = i(1);
        t.exports = function (t) {
            var e = t.polar;
            if (e) {
                n.isArray(e) || (e = [e]);
                var i = [];
                n.each(e, function (e, r) {
                    e.indicator ? (e.type && !e.shape && (e.shape = e.type), t.radar = t.radar || [], n.isArray(t.radar) || (t.radar = [t.radar]), t.radar.push(e)) : i.push(e)
                }), t.polar = i
            }
            n.each(t.series, function (t) {
                "radar" === t.type && t.polarIndex && (t.radarIndex = t.polarIndex)
            })
        }
    }, function (t, e) {
        t.exports = function (t) {
            t.eachSeriesByType("radar", function (t) {
                function e(t, e) {
                    n[e] = n[e] || [], n[e][o] = r.dataToPoint(t, o)
                }

                var i = t.getData(), n = [], r = t.coordinateSystem;
                if (r) {
                    for (var o = 0; o < r.getIndicatorAxes().length; o++) {
                        var a = i.dimensions[o];
                        i.each(a, e)
                    }
                    i.each(function (t) {
                        n[t][0] && n[t].push(n[t][0].slice()), i.setItemLayout(t, n[t])
                    })
                }
            })
        }
    }, function (t, e, i) {
        var n = i(2);
        i(305), i(306), n.registerLayout(i(307)), n.registerVisual(i(308))
    }, function (t, e, i) {
        "use strict";
        var n = i(15), r = i(226), o = n.extend({
            type: "series.sankey",
            layoutInfo: null,
            getInitialData: function (t, e) {
                var i = t.edges || t.links, n = t.data || t.nodes;
                if (n && i) {
                    var o = r(n, i, this, !0);
                    return o.data
                }
            },
            getGraph: function () {
                return this.getData().graph
            },
            getEdgeData: function () {
                return this.getGraph().edgeData
            },
            formatTooltip: function (t, e, i) {
                if ("edge" === i) {
                    var n = this.getDataParams(t, i), r = n.data, a = r.source + " -- " + r.target;
                    return n.value && (a += " : " + n.value), a
                }
                return o.superCall(this, "formatTooltip", t, e)
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "view",
                layout: null,
                left: "5%",
                top: "5%",
                right: "20%",
                bottom: "5%",
                nodeWidth: 20,
                nodeGap: 8,
                layoutIterations: 32,
                label: {
                    normal: {show: !0, position: "right", textStyle: {color: "#000", fontSize: 12}},
                    emphasis: {show: !0}
                },
                itemStyle: {normal: {borderWidth: 1, borderColor: "#333"}},
                lineStyle: {normal: {color: "#314656", opacity: .2, curveness: .5}, emphasis: {opacity: .6}},
                animationEasing: "linear",
                animationDuration: 1e3
            }
        });
        t.exports = o
    }, function (t, e, i) {
        function n(t, e, i) {
            var n = new r.Rect({shape: {x: t.x - 10, y: t.y - 10, width: 0, height: t.height + 20}});
            return r.initProps(n, {shape: {width: t.width + 20, height: t.height + 20}}, e, i), n
        }

        var r = i(3), o = i(1), a = r.extendShape({
            shape: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                cpx1: 0,
                cpy1: 0,
                cpx2: 0,
                cpy2: 0,
                extent: 0
            }, buildPath: function (t, e) {
                var i = e.extent / 2;
                t.moveTo(e.x1, e.y1 - i), t.bezierCurveTo(e.cpx1, e.cpy1 - i, e.cpx2, e.cpy2 - i, e.x2, e.y2 - i), t.lineTo(e.x2, e.y2 + i), t.bezierCurveTo(e.cpx2, e.cpy2 + i, e.cpx1, e.cpy1 + i, e.x1, e.y1 + i), t.closePath()
            }
        });
        t.exports = i(2).extendChartView({
            type: "sankey", _model: null, render: function (t, e, i) {
                var s = t.getGraph(), l = this.group, u = t.layoutInfo, h = t.getData(), c = t.getData("edge");
                this._model = t, l.removeAll(), l.position = [u.x, u.y], s.eachNode(function (e) {
                    var i = e.getLayout(), n = e.getModel(), a = n.getModel("label.normal"), s = a.getModel("textStyle"), u = n.getModel("label.emphasis"), c = u.getModel("textStyle"), d = new r.Rect({
                        shape: {x: i.x, y: i.y, width: e.getLayout().dx, height: e.getLayout().dy}, style: {
                            text: a.get("show") ? t.getFormattedLabel(e.dataIndex, "normal") || e.id : "",
                            textFont: s.getFont(), textFill: s.getTextColor(), textPosition: a.get("position")
                        }
                    });
                    d.setStyle(o.defaults({fill: e.getVisual("color")}, n.getModel("itemStyle.normal").getItemStyle())), r.setHoverStyle(d, o.extend(e.getModel("itemStyle.emphasis"), {
                        text: u.get("show") ? t.getFormattedLabel(e.dataIndex, "emphasis") || e.id : "",
                        textFont: c.getFont(),
                        textFill: c.getTextColor(),
                        textPosition: u.get("position")
                    })), l.add(d), h.setItemGraphicEl(e.dataIndex, d), d.dataType = "node"
                }), s.eachEdge(function (e) {
                    var i = new a;
                    i.dataIndex = e.dataIndex, i.seriesIndex = t.seriesIndex, i.dataType = "edge";
                    var n = e.getModel("lineStyle.normal"), o = n.get("curveness"), s = e.node1.getLayout(), u = e.node2.getLayout(), h = e.getLayout();
                    i.shape.extent = Math.max(1, h.dy);
                    var d = s.x + s.dx, f = s.y + h.sy + h.dy / 2, p = u.x, g = u.y + h.ty + h.dy / 2, v = d * (1 - o) + p * o, m = f, y = d * o + p * (1 - o), x = g;
                    switch (i.setShape({
                        x1: d,
                        y1: f,
                        x2: p,
                        y2: g,
                        cpx1: v,
                        cpy1: m,
                        cpx2: y,
                        cpy2: x
                    }), i.setStyle(n.getItemStyle()), i.style.fill) {
                        case"source":
                            i.style.fill = e.node1.getVisual("color");
                            break;
                        case"target":
                            i.style.fill = e.node2.getVisual("color")
                    }
                    r.setHoverStyle(i, e.getModel("lineStyle.emphasis").getItemStyle()), l.add(i), c.setItemGraphicEl(e.dataIndex, i)
                }), !this._data && t.get("animation") && l.setClipPath(n(l.getBoundingRect(), t, function () {
                    l.removeClipPath()
                })), this._data = t.getData()
            }
        })
    }, function (t, e, i) {
        function n(t, e) {
            return M.getLayoutRect(t.getBoxLayoutParams(), {width: e.getWidth(), height: e.getHeight()})
        }

        function r(t, e, i, n, r, o, s) {
            a(t, i, r), u(t, e, o, n, s), v(t)
        }

        function o(t) {
            I.each(t, function (t) {
                var e = x(t.outEdges, S), i = x(t.inEdges, S), n = Math.max(e, i);
                t.setLayout({value: n}, !0)
            })
        }

        function a(t, e, i) {
            for (var n = t, r = null, o = 0, a = 0; n.length;) {
                r = [];
                for (var u = 0, h = n.length; h > u; u++) {
                    var c = n[u];
                    c.setLayout({x: o}, !0), c.setLayout({dx: e}, !0);
                    for (var d = 0, f = c.outEdges.length; f > d; d++)r.push(c.outEdges[d].node2)
                }
                n = r, ++o
            }
            s(t, o), a = (i - e) / (o - 1), l(t, a)
        }

        function s(t, e) {
            I.each(t, function (t) {
                t.outEdges.length || t.setLayout({x: e - 1}, !0)
            })
        }

        function l(t, e) {
            I.each(t, function (t) {
                var i = t.getLayout().x * e;
                t.setLayout({x: i}, !0)
            })
        }

        function u(t, e, i, n, r) {
            var o = A().key(function (t) {
                return t.getLayout().x
            }).sortKeys(w).entries(t).map(function (t) {
                return t.values
            });
            h(t, o, e, i, n), c(o, n, i);
            for (var a = 1; r > 0; r--)a *= .99, d(o, a), c(o, n, i), p(o, a), c(o, n, i)
        }

        function h(t, e, i, n, r) {
            var o = [];
            I.each(e, function (t) {
                var e = t.length, i = 0;
                I.each(t, function (t) {
                    i += t.getLayout().value
                });
                var a = (n - (e - 1) * r) / i;
                o.push(a)
            }), o.sort(function (t, e) {
                return t - e
            });
            var a = o[0];
            I.each(e, function (t) {
                I.each(t, function (t, e) {
                    t.setLayout({y: e}, !0);
                    var i = t.getLayout().value * a;
                    t.setLayout({dy: i}, !0)
                })
            }), I.each(i, function (t) {
                var e = +t.getValue() * a;
                t.setLayout({dy: e}, !0)
            })
        }

        function c(t, e, i) {
            I.each(t, function (t) {
                var n, r, o, a = 0, s = t.length;
                for (t.sort(b), o = 0; s > o; o++) {
                    if (n = t[o], r = a - n.getLayout().y, r > 0) {
                        var l = n.getLayout().y + r;
                        n.setLayout({y: l}, !0)
                    }
                    a = n.getLayout().y + n.getLayout().dy + e
                }
                if (r = a - e - i, r > 0) {
                    var l = n.getLayout().y - r;
                    for (n.setLayout({y: l}, !0), a = n.getLayout().y, o = s - 2; o >= 0; --o)n = t[o], r = n.getLayout().y + n.getLayout().dy + e - a, r > 0 && (l = n.getLayout().y - r, n.setLayout({y: l}, !0)), a = n.getLayout().y
                }
            })
        }

        function d(t, e) {
            I.each(t.slice().reverse(), function (t) {
                I.each(t, function (t) {
                    if (t.outEdges.length) {
                        var i = x(t.outEdges, f) / x(t.outEdges, S), n = t.getLayout().y + (i - _(t)) * e;
                        t.setLayout({y: n}, !0)
                    }
                })
            })
        }

        function f(t) {
            return _(t.node2) * t.getValue()
        }

        function p(t, e) {
            I.each(t, function (t) {
                I.each(t, function (t) {
                    if (t.inEdges.length) {
                        var i = x(t.inEdges, g) / x(t.inEdges, S), n = t.getLayout().y + (i - _(t)) * e;
                        t.setLayout({y: n}, !0)
                    }
                })
            })
        }

        function g(t) {
            return _(t.node1) * t.getValue()
        }

        function v(t) {
            I.each(t, function (t) {
                t.outEdges.sort(m), t.inEdges.sort(y)
            }), I.each(t, function (t) {
                var e = 0, i = 0;
                I.each(t.outEdges, function (t) {
                    t.setLayout({sy: e}, !0), e += t.getLayout().dy
                }), I.each(t.inEdges, function (t) {
                    t.setLayout({ty: i}, !0), i += t.getLayout().dy
                })
            })
        }

        function m(t, e) {
            return t.node2.getLayout().y - e.node2.getLayout().y
        }

        function y(t, e) {
            return t.node1.getLayout().y - e.node1.getLayout().y
        }

        function x(t, e) {
            var i, n = 0, r = t.length, o = -1;
            if (1 === arguments.length)for (; ++o < r;)i = +t[o], isNaN(i) || (n += i); else for (; ++o < r;)i = +e.call(t, t[o], o), isNaN(i) || (n += i);
            return n
        }

        function _(t) {
            return t.getLayout().y + t.getLayout().dy / 2
        }

        function b(t, e) {
            return t.getLayout().y - e.getLayout().y
        }

        function w(t, e) {
            return e > t ? -1 : t > e ? 1 : t == e ? 0 : NaN
        }

        function S(t) {
            return t.getValue()
        }

        var M = i(13), A = i(380), I = i(1);
        t.exports = function (t, e, i) {
            t.eachSeriesByType("sankey", function (t) {
                var i = t.get("nodeWidth"), a = t.get("nodeGap"), s = n(t, e);
                t.layoutInfo = s;
                var l = s.width, u = s.height, h = t.getGraph(), c = h.nodes, d = h.edges;
                o(c);
                var f = c.filter(function (t) {
                    return 0 === t.getLayout().value
                }), p = 0 !== f.length ? 0 : t.get("layoutIterations");
                r(c, d, i, a, l, u, p)
            })
        }
    }, function (t, e, i) {
        var n = i(71);
        t.exports = function (t, e) {
            t.eachSeriesByType("sankey", function (t) {
                var e = t.getGraph(), i = e.nodes;
                i.sort(function (t, e) {
                    return t.getLayout().value - e.getLayout().value
                });
                var r = i[0].getLayout().value, o = i[i.length - 1].getLayout().value;
                i.forEach(function (e) {
                    var i = new n({
                        type: "color",
                        mappingMethod: "linear",
                        dataExtent: [r, o],
                        visual: t.get("color")
                    }), a = i.mapValueToVisual(e.getLayout().value);
                    e.setVisual("color", a);
                    var s = e.getModel(), l = s.get("itemStyle.normal.color");
                    null != l && e.setVisual("color", l)
                })
            })
        }
    }, function (t, e, i) {
        var n = i(2);
        i(311), i(312), i(313), n.registerVisual(i(315)), n.registerLayout(i(314))
    }, function (t, e, i) {
        function n(t, e) {
            this.group = new o.Group, t.add(this.group), this._onSelect = e || s.noop
        }

        function r(t, e, i, n, r, o) {
            var a = [[r ? t : t - h, e], [t + i, e], [t + i, e + n], [r ? t : t - h, e + n]];
            return !o && a.splice(2, 0, [t + i + h, e + n / 2]), !r && a.push([t, e + n / 2]), a
        }

        var o = i(3), a = i(13), s = i(1), l = 8, u = 8, h = 5;
        n.prototype = {
            constructor: n, render: function (t, e, i) {
                var n = t.getModel("breadcrumb"), r = this.group;
                if (r.removeAll(), n.get("show") && i) {
                    var o = n.getModel("itemStyle.normal"), s = o.getModel("textStyle"), l = {
                        pos: {
                            left: n.get("left"),
                            right: n.get("right"),
                            top: n.get("top"),
                            bottom: n.get("bottom")
                        },
                        box: {width: e.getWidth(), height: e.getHeight()},
                        emptyItemWidth: n.get("emptyItemWidth"),
                        totalWidth: 0,
                        renderList: []
                    };
                    this._prepare(n, i, l, s), this._renderContent(n, i, l, o, s), a.positionGroup(r, l.pos, l.box)
                }
            }, _prepare: function (t, e, i, n) {
                for (var r = e; r; r = r.parentNode) {
                    var o = r.getModel().get("name"), a = n.getTextRect(o), s = Math.max(a.width + 2 * l, i.emptyItemWidth);
                    i.totalWidth += s + u, i.renderList.push({node: r, text: o, width: s})
                }
            }, _renderContent: function (t, e, i, n, l) {
                for (var h = 0, c = i.emptyItemWidth, d = t.get("height"), f = a.getAvailableSize(i.pos, i.box), p = i.totalWidth, g = i.renderList, v = g.length - 1; v >= 0; v--) {
                    var m = g[v], y = m.width, x = m.text;
                    p > f.width && (p -= y - c, y = c, x = ""), this.group.add(new o.Polygon({
                        shape: {points: r(h, 0, y, d, v === g.length - 1, 0 === v)},
                        style: s.defaults(n.getItemStyle(), {
                            lineJoin: "bevel",
                            text: x,
                            textFill: l.getTextColor(),
                            textFont: l.getFont()
                        }),
                        z: 10,
                        onclick: s.bind(this._onSelect, this, m.node)
                    })), h += y + u
                }
            }, remove: function () {
                this.group.removeAll()
            }
        }, t.exports = n
    }, function (t, e, i) {
        function n(t, e) {
            var i = 0;
            s.each(t.children, function (t) {
                n(t, e);
                var r = t.value;
                s.isArray(r) && (r = r[0]), i += r
            });
            var r = t.value;
            e >= 0 && (s.isArray(r) ? r = r[0] : t.value = new Array(e)), (null == r || isNaN(r)) && (r = i), 0 > r && (r = 0), e >= 0 ? t.value[0] = r : t.value = r
        }

        function r(t, e) {
            var i = e.get("color");
            if (i) {
                t = t || [];
                var n;
                if (s.each(t, function (t) {
                        var e = new l(t), i = e.get("color");
                        (e.get("itemStyle.normal.color") || i && "none" !== i) && (n = !0)
                    }), !n) {
                    var r = t[0] || (t[0] = {});
                    r.color = i.slice()
                }
                return t
            }
        }

        var o = i(15), a = i(378), s = i(1), l = i(8), u = i(9), h = u.encodeHTML, c = u.addCommas;
        t.exports = o.extend({
            type: "series.treemap",
            dependencies: ["grid", "polar"],
            _viewRoot: null,
            defaultOption: {
                progressive: 0,
                hoverLayerThreshold: 1 / 0,
                left: "center",
                top: "middle",
                right: null,
                bottom: null,
                width: "80%",
                height: "80%",
                sort: !0,
                clipWindow: "origin",
                squareRatio: .5 * (1 + Math.sqrt(5)),
                leafDepth: null,
                drillDownIcon: "▶",
                visualDimension: 0,
                zoomToNodeRatio: .1024,
                roam: !0,
                nodeClick: "zoomToNode",
                animation: !0,
                animationDurationUpdate: 900,
                animationEasing: "quinticInOut",
                breadcrumb: {
                    show: !0,
                    height: 22,
                    left: "center",
                    top: "bottom",
                    emptyItemWidth: 25,
                    itemStyle: {
                        normal: {
                            color: "rgba(0,0,0,0.7)",
                            borderColor: "rgba(255,255,255,0.7)",
                            borderWidth: 1,
                            shadowColor: "rgba(150,150,150,1)",
                            shadowBlur: 3,
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            textStyle: {color: "#fff"}
                        }, emphasis: {textStyle: {}}
                    }
                },
                label: {normal: {show: !0, position: "inside", textStyle: {color: "#fff", ellipsis: !0}}},
                itemStyle: {
                    normal: {
                        color: null,
                        colorAlpha: null,
                        colorSaturation: null,
                        borderWidth: 0,
                        gapWidth: 0,
                        borderColor: "#fff",
                        borderColorSaturation: null
                    }, emphasis: {}
                },
                color: [],
                colorAlpha: null,
                colorSaturation: null,
                colorMappingBy: "index",
                visibleMin: 10,
                childrenVisibleMin: null,
                levels: []
            },
            getInitialData: function (t, e) {
                var i = t.data || [], o = t.name;
                null == o && (o = t.name);
                var l = {name: o, children: t.data}, u = (i[0] || {}).value;
                n(l, s.isArray(u) ? u.length : -1);
                var h = t.levels || [];
                return h = t.levels = r(h, e), a.createTree(l, this, h).data
            },
            optionUpdated: function () {
                this.resetViewRoot()
            },
            formatTooltip: function (t) {
                var e = this.getData(), i = this.getRawValue(t), n = c(s.isArray(i) ? i[0] : i), r = e.getName(t);
                return h(r) + ": " + n
            },
            getDataParams: function (t) {
                for (var e = o.prototype.getDataParams.apply(this, arguments), i = this.getData(), n = i.tree.getNodeByDataIndex(t), r = e.treePathInfo = []; n;) {
                    var a = n.dataIndex;
                    r.push({name: n.name, dataIndex: a, value: this.getRawValue(a)}), n = n.parentNode
                }
                return r.reverse(), e
            },
            setLayoutInfo: function (t) {
                this.layoutInfo = this.layoutInfo || {}, s.extend(this.layoutInfo, t)
            },
            mapIdToIndex: function (t) {
                var e = this._idIndexMap;
                e || (e = this._idIndexMap = {}, this._idIndexMapCount = 0);
                var i = e[t];
                return null == i && (e[t] = i = this._idIndexMapCount++), i
            },
            getViewRoot: function () {
                return this._viewRoot
            },
            resetViewRoot: function (t) {
                t ? this._viewRoot = t : t = this._viewRoot;
                var e = this.getData().tree.root;
                t && (t === e || e.contains(t)) || (this._viewRoot = e)
            }
        })
    }, function (t, e, i) {
        function n() {
            return {nodeGroup: [], background: [], content: []}
        }

        function r(t, e, i, n, r, l, u, h, c, d) {
            function f(e) {
                E.dataIndex = u.dataIndex, E.seriesIndex = t.seriesIndex;
                var i = I.borderWidth, n = Math.max(T - 2 * i, 0), r = Math.max(L - 2 * i, 0);
                E.culling = !0, E.setShape({x: i, y: i, width: n, height: r});
                var o = u.getVisual("color", !0);
                p(E, function () {
                    var t = {fill: o}, e = u.getModel("itemStyle.emphasis").getItemStyle();
                    g(t, e, o, n, r), E.setStyle(t), s.setHoverStyle(E, e)
                }), e.add(E)
            }

            function p(t, e) {
                C ? !t.invisible && l.push(t) : (e(), t.__tmWillVisible || (t.invisible = !1))
            }

            function g(e, i, n, r, o) {
                var a = u.getModel(), s = a.get("name");
                if (I.isLeafRoot) {
                    var l = t.get("drillDownIcon", !0);
                    s = l ? l + " " + s : test
                }
                y(s, e, a, _, n, r, o), y(s, i, a, b, n, r, o)
            }

            function y(t, e, i, n, r, o, a) {
                var l = i.getModel(n), u = l.getModel("textStyle");
                s.setText(e, l, r), e.textAlign = u.get("align"), e.textVerticalAlign = u.get("baseline");
                var h = u.getTextRect(t);
                !l.getShallow("show") || h.height > a ? e.text = "" : h.width > o ? e.text = u.get("ellipsis") ? u.truncateText(t, o, null, {minChar: 2}) : "" : e.text = t
            }

            function x(t, n, a, s) {
                var l = null != P && i[t][P], u = r[t];
                return l ? (i[t][P] = null, w(u, l, t)) : C || (l = new n({z: o(a, s)}), l.__tmDepth = a, l.__tmStorageName = t, A(u, l, t)), e[t][D] = l
            }

            function w(t, e, i) {
                var n = t[D] = {};
                n.old = "nodeGroup" === i ? e.position.slice() : a.extend({}, e.shape)
            }

            function A(t, e, i) {
                var o = t[D] = {}, a = u.parentNode;
                if (a && (!n || "drillDown" === n.direction)) {
                    var s = 0, l = 0, h = r.background[a.getRawIndex()];
                    !n && h && h.old && (s = h.old.width, l = h.old.height), o.old = "nodeGroup" === i ? [0, l] : {
                        x: s,
                        y: l,
                        width: 0,
                        height: 0
                    }
                }
                o.fadein = "nodeGroup" !== i
            }

            if (u) {
                var I = u.getLayout();
                if (I && I.isInView) {
                    var T = I.width, L = I.height, C = I.invisible, D = u.getRawIndex(), P = h && h.getRawIndex(), k = x("nodeGroup", v);
                    if (k) {
                        if (c.add(k), k.attr("position", [I.x || 0, I.y || 0]), k.__tmNodeWidth = T, k.__tmNodeHeight = L, I.isAboveViewRoot)return k;
                        var z = x("background", m, d, S);
                        z && (z.setShape({x: 0, y: 0, width: T, height: L}), p(z, function () {
                            z.setStyle("fill", u.getVisual("borderColor", !0))
                        }), k.add(z));
                        var O = u.viewChildren;
                        if (!O || !O.length) {
                            var E = x("content", m, d, M);
                            E && f(k)
                        }
                        return k
                    }
                }
            }
        }

        function o(t, e) {
            var i = t * w + e;
            return (i - 1) / i
        }

        var a = i(1), s = i(3), l = i(45), u = i(169), h = i(310), c = i(78), d = i(7), f = i(19), p = i(379), g = a.bind, v = s.Group, m = s.Rect, y = a.each, x = 3, _ = ["label", "normal"], b = ["label", "emphasis"], w = 10, S = 1, M = 2;
        t.exports = i(2).extendChartView({
            type: "treemap", init: function (t, e) {
                this._containerGroup, this._storage = n(), this._oldTree, this._breadcrumb, this._controller, this._state = "ready", this._mayClick
            }, render: function (t, e, i, n) {
                var r = e.findComponents({mainType: "series", subType: "treemap", query: n});
                if (!(a.indexOf(r, t) < 0)) {
                    this.seriesModel = t, this.api = i, this.ecModel = e;
                    var o = u.retrieveTargetInfo(n, t), s = n && n.type, l = t.layoutInfo, h = !this._oldTree, c = this._storage, d = "treemapRootToNode" === s && o && c ? {
                        rootNodeGroup: c.nodeGroup[o.node.getRawIndex()],
                        direction: n.direction
                    } : null, f = this._giveContainerGroup(l), p = this._doRender(f, t, d);
                    h || s && "treemapZoomToNode" !== s && "treemapRootToNode" !== s ? p.renderFinally() : this._doAnimation(f, p, t, d), this._resetController(i), this._renderBreadcrumb(t, i, o)
                }
            }, _giveContainerGroup: function (t) {
                var e = this._containerGroup;
                return e || (e = this._containerGroup = new v, this._initEvents(e), this.group.add(e)), e.attr("position", [t.x, t.y]), e
            }, _doRender: function (t, e, i) {
                function o(t, e, i, n, r) {
                    function s(t) {
                        return t.getId()
                    }

                    function u(a, s) {
                        var l = null != a ? t[a] : null, u = null != s ? e[s] : null, h = v(l, u, i, r);
                        h && o(l && l.viewChildren || [], u && u.viewChildren || [], h, n, r + 1)
                    }

                    n ? (e = t, y(t, function (t, e) {
                        !t.isRemoved() && u(e, e)
                    })) : new l(e, t, s, s).add(u).update(u).remove(a.curry(u, null)).execute()
                }

                function s(t) {
                    var e = n();
                    return t && y(t, function (t, i) {
                        var n = e[i];
                        y(t, function (t) {
                            t && (n.push(t), t.__tmWillDelete = 1)
                        })
                    }), e
                }

                function u() {
                    y(m, function (t) {
                        y(t, function (t) {
                            t.parent && t.parent.remove(t)
                        })
                    }), y(g, function (t) {
                        t.invisible = !0, t.dirty()
                    })
                }

                var h = e.getData().tree, c = this._oldTree, d = n(), f = n(), p = this._storage, g = [], v = a.curry(r, e, f, p, i, d, g);
                o(h.root ? [h.root] : [], c && c.root ? [c.root] : [], t, h === c || !c, 0);
                var m = s(p);
                return this._oldTree = h, this._storage = f, {lastsForAnimation: d, willDeleteEls: m, renderFinally: u}
            }, _doAnimation: function (t, e, i, n) {
                if (i.get("animation")) {
                    var r = i.get("animationDurationUpdate"), o = i.get("animationEasing"), s = p.createWrap();
                    y(e.willDeleteEls, function (t, e) {
                        y(t, function (t, i) {
                            if (!t.invisible) {
                                var a, l = t.parent;
                                if (n && "drillDown" === n.direction)a = l === n.rootNodeGroup ? {
                                    shape: {
                                        x: 0,
                                        y: 0,
                                        width: l.__tmNodeWidth,
                                        height: l.__tmNodeHeight
                                    }, style: {opacity: 0}
                                } : {style: {opacity: 0}}; else {
                                    var u = 0, h = 0;
                                    l.__tmWillDelete || (u = l.__tmNodeWidth / 2, h = l.__tmNodeHeight / 2), a = "nodeGroup" === e ? {
                                        position: [u, h],
                                        style: {opacity: 0}
                                    } : {shape: {x: u, y: h, width: 0, height: 0}, style: {opacity: 0}}
                                }
                                a && s.add(t, a, r, o)
                            }
                        })
                    }), y(this._storage, function (t, i) {
                        y(t, function (t, n) {
                            var l = e.lastsForAnimation[i][n], u = {};
                            l && ("nodeGroup" === i ? l.old && (u.position = t.position.slice(), t.attr("position", l.old)) : (l.old && (u.shape = a.extend({}, t.shape), t.setShape(l.old)), l.fadein ? (t.setStyle("opacity", 0), u.style = {opacity: 1}) : 1 !== t.style.opacity && (u.style = {opacity: 1})), s.add(t, u, r, o))
                        })
                    }, this), this._state = "animating", s.done(g(function () {
                        this._state = "ready", e.renderFinally()
                    }, this)).start()
                }
            }, _resetController: function (t) {
                var e = this._controller;
                e || (e = this._controller = new c(t.getZr()), e.enable(this.seriesModel.get("roam")), e.on("pan", g(this._onPan, this)), e.on("zoom", g(this._onZoom, this)));
                var i = new d(0, 0, t.getWidth(), t.getHeight());
                e.rectProvider = function () {
                    return i
                }
            }, _clearController: function () {
                var t = this._controller;
                t && (t.off("pan").off("zoom"), t = null)
            }, _onPan: function (t, e) {
                if (this._mayClick = !1, "animating" !== this._state && (Math.abs(t) > x || Math.abs(e) > x)) {
                    var i = this.seriesModel.getData().tree.root;
                    if (!i)return;
                    var n = i.getLayout();
                    if (!n)return;
                    this.api.dispatchAction({
                        type: "treemapMove",
                        from: this.uid,
                        seriesId: this.seriesModel.id,
                        rootRect: {x: n.x + t, y: n.y + e, width: n.width, height: n.height}
                    })
                }
            }, _onZoom: function (t, e, i) {
                if (this._mayClick = !1, "animating" !== this._state) {
                    var n = this.seriesModel.getData().tree.root;
                    if (!n)return;
                    var r = n.getLayout();
                    if (!r)return;
                    var o = new d(r.x, r.y, r.width, r.height), a = this.seriesModel.layoutInfo;
                    e -= a.x, i -= a.y;
                    var s = f.create();
                    f.translate(s, s, [-e, -i]), f.scale(s, s, [t, t]), f.translate(s, s, [e, i]), o.applyTransform(s), this.api.dispatchAction({
                        type: "treemapRender",
                        from: this.uid,
                        seriesId: this.seriesModel.id,
                        rootRect: {x: o.x, y: o.y, width: o.width, height: o.height}
                    })
                }
            }, _initEvents: function (t) {
                function e(t) {
                    var e = this.seriesModel.get("nodeClick", !0);
                    if (e) {
                        var i = this.findTarget(t.offsetX, t.offsetY);
                        if (i) {
                            var n = i.node;
                            if (n.getLayout().isLeafRoot)this._rootToNode(i); else if ("zoomToNode" === e)this._zoomToNode(i); else if ("link" === e) {
                                var r = n.hostTree.data.getItemModel(n.dataIndex), o = r.get("link", !0), a = r.get("target", !0) || "blank";
                                o && window.open(o, a)
                            }
                        }
                    }
                }

                t.on("mousedown", function (t) {
                    "ready" === this._state && (this._mayClick = !0)
                }, this), t.on("mouseup", function (t) {
                    this._mayClick && (this._mayClick = !1, "ready" === this._state && e.call(this, t))
                }, this)
            }, _renderBreadcrumb: function (t, e, i) {
                function n(e) {
                    "animating" !== this._state && (u.aboveViewRoot(t.getViewRoot(), e) ? this._rootToNode({node: e}) : this._zoomToNode({node: e}))
                }

                i || (i = this.findTarget(e.getWidth() / 2, e.getHeight() / 2), i || (i = {node: t.getData().tree.root})), (this._breadcrumb || (this._breadcrumb = new h(this.group, g(n, this)))).render(t, e, i.node)
            }, remove: function () {
                this._clearController(), this._containerGroup && this._containerGroup.removeAll(), this._storage = n(), this._state = "ready", this._breadcrumb && this._breadcrumb.remove()
            }, dispose: function () {
                this._clearController()
            }, _zoomToNode: function (t) {
                this.api.dispatchAction({
                    type: "treemapZoomToNode",
                    from: this.uid,
                    seriesId: this.seriesModel.id,
                    targetNode: t.node
                })
            }, _rootToNode: function (t) {
                this.api.dispatchAction({
                    type: "treemapRootToNode",
                    from: this.uid,
                    seriesId: this.seriesModel.id,
                    targetNode: t.node
                })
            }, findTarget: function (t, e) {
                var i, n = this.seriesModel.getViewRoot();
                return n.eachNode({attr: "viewChildren", order: "preorder"}, function (n) {
                    var r = this._storage.background[n.getRawIndex()];
                    if (r) {
                        var o = r.transformCoordToLocal(t, e), a = r.shape;
                        if (!(a.x <= o[0] && o[0] <= a.x + a.width && a.y <= o[1] && o[1] <= a.y + a.height))return !1;
                        i = {node: n, offsetX: o[0], offsetY: o[1]}
                    }
                }, this), i
            }
        })
    }, function (t, e, i) {
        for (var n = i(2), r = i(169), o = function () {
        }, a = ["treemapZoomToNode", "treemapRender", "treemapMove"], s = 0; s < a.length; s++)n.registerAction({
            type: a[s],
            update: "updateView"
        }, o);
        n.registerAction({type: "treemapRootToNode", update: "updateView"}, function (t, e) {
            function i(e, i) {
                var n = r.retrieveTargetInfo(t, e);
                if (n) {
                    var o = e.getViewRoot();
                    o && (t.direction = r.aboveViewRoot(o, n.node) ? "rollUp" : "drillDown"), e.resetViewRoot(n.node)
                }
            }

            e.eachComponent({mainType: "series", subType: "treemap", query: t}, i)
        })
    }, function (t, e, i) {
        function n(t, e, i) {
            var n = {mainType: "series", subType: "treemap", query: i};
            t.eachComponent(n, function (t) {
                var n = e.getWidth(), o = e.getHeight(), a = t.option, s = a.size || [], l = b(w(a.width, s[0]), n), u = b(w(a.height, s[1]), o), h = v.getLayoutRect(t.getBoxLayoutParams(), {
                    width: e.getWidth(),
                    height: e.getHeight()
                }), g = i && i.type, x = m.retrieveTargetInfo(i, t), _ = "treemapRender" === g || "treemapMove" === g ? i.rootRect : null, M = t.getViewRoot(), A = m.getPathToRoot(M);
                if ("treemapMove" !== g) {
                    var I = "treemapZoomToNode" === g ? c(t, x, M, l, u) : _ ? [_.width, _.height] : [l, u], T = a.sort;
                    T && "asc" !== T && "desc" !== T && (T = "desc");
                    var L = {squareRatio: a.squareRatio, sort: T, leafDepth: a.leafDepth};
                    M.hostTree.clearLayouts();
                    var C = {x: 0, y: 0, width: I[0], height: I[1], area: I[0] * I[1]};
                    M.setLayout(C), r(M, L, !1, 0);
                    var C = M.getLayout();
                    S(A, function (t, e) {
                        var i = (A[e + 1] || M).getValue();
                        t.setLayout(p.extend({dataExtent: [i, i], borderWidth: 0}, C))
                    })
                }
                var D = t.getData().tree.root;
                D.setLayout(d(h, _, x), !0), t.setLayoutInfo(h), f(D, new y(-h.x, -h.y, n, o), A, M, 0)
            })
        }

        function r(t, e, i, n) {
            var a, s;
            if (!t.isRemoved()) {
                var l = t.getLayout();
                a = l.width, s = l.height;
                var c = t.getModel("itemStyle.normal"), d = c.get("borderWidth"), f = c.get("gapWidth") / 2, p = d - f, g = t.getModel();
                t.setLayout({borderWidth: d}, !0), a = x(a - 2 * p, 0), s = x(s - 2 * p, 0);
                var v = a * s, m = o(t, g, v, e, i, n);
                if (m.length) {
                    var y = {x: p, y: p, width: a, height: s}, b = _(a, s), w = 1 / 0, S = [];
                    S.area = 0;
                    for (var M = 0, A = m.length; A > M;) {
                        var I = m[M];
                        S.push(I), S.area += I.getLayout().area;
                        var T = u(S, b, e.squareRatio);
                        w >= T ? (M++, w = T) : (S.area -= S.pop().getLayout().area, h(S, b, y, f, !1), b = _(y.width, y.height), S.length = S.area = 0, w = 1 / 0)
                    }
                    if (S.length && h(S, b, y, f, !0), !i) {
                        var L = g.get("childrenVisibleMin");
                        null != L && L > v && (i = !0)
                    }
                    for (var M = 0, A = m.length; A > M; M++)r(m[M], e, i, n + 1)
                }
            }
        }

        function o(t, e, i, n, r, o) {
            var u = t.children || [], h = n.sort;
            "asc" !== h && "desc" !== h && (h = null);
            var c = null != n.leafDepth && n.leafDepth <= o;
            if (r && !c)return t.viewChildren = [];
            u = p.filter(u, function (t) {
                return !t.isRemoved()
            }), s(u, h);
            var d = l(e, u, h);
            if (0 === d.sum)return t.viewChildren = [];
            if (d.sum = a(e, i, d.sum, h, u), 0 === d.sum)return t.viewChildren = [];
            for (var f = 0, g = u.length; g > f; f++) {
                var v = u[f].getValue() / d.sum * i;
                u[f].setLayout({area: v})
            }
            return c && (u.length && t.setLayout({isLeafRoot: !0}, !0), u.length = 0), t.viewChildren = u, t.setLayout({dataExtent: d.dataExtent}, !0), u
        }

        function a(t, e, i, n, r) {
            if (!n)return i;
            for (var o = t.get("visibleMin"), a = r.length, s = a, l = a - 1; l >= 0; l--) {
                var u = r["asc" === n ? a - l - 1 : l].getValue();
                o > u / i * e && (s = l, i -= u)
            }
            return "asc" === n ? r.splice(0, a - s) : r.splice(s, a - s), i
        }

        function s(t, e) {
            return e && t.sort(function (t, i) {
                return "asc" === e ? t.getValue() - i.getValue() : i.getValue() - t.getValue()
            }), t
        }

        function l(t, e, i) {
            for (var n = 0, r = 0, o = e.length; o > r; r++)n += e[r].getValue();
            var a, s = t.get("visualDimension");
            if (e && e.length)if ("value" === s && i)a = [e[e.length - 1].getValue(), e[0].getValue()], "asc" === i && a.reverse(); else {
                var a = [1 / 0, -(1 / 0)];
                S(e, function (t) {
                    var e = t.getValue(s);
                    e < a[0] && (a[0] = e), e > a[1] && (a[1] = e)
                })
            } else a = [NaN, NaN];
            return {sum: n, dataExtent: a}
        }

        function u(t, e, i) {
            for (var n, r = 0, o = 1 / 0, a = 0, s = t.length; s > a; a++)n = t[a].getLayout().area, n && (o > n && (o = n), n > r && (r = n));
            var l = t.area * t.area, u = e * e * i;
            return l ? x(u * r / l, l / (u * o)) : 1 / 0
        }

        function h(t, e, i, n, r) {
            var o = e === i.width ? 0 : 1, a = 1 - o, s = ["x", "y"], l = ["width", "height"], u = i[s[o]], h = e ? t.area / e : 0;
            (r || h > i[l[a]]) && (h = i[l[a]]);
            for (var c = 0, d = t.length; d > c; c++) {
                var f = t[c], p = {}, g = h ? f.getLayout().area / h : 0, v = p[l[a]] = x(h - 2 * n, 0), m = i[s[o]] + i[l[o]] - u, y = c === d - 1 || g > m ? m : g, b = p[l[o]] = x(y - 2 * n, 0);
                p[s[a]] = i[s[a]] + _(n, v / 2), p[s[o]] = u + _(n, b / 2), u += y, f.setLayout(p, !0)
            }
            i[s[a]] += h, i[l[a]] -= h
        }

        function c(t, e, i, n, r) {
            var o = (e || {}).node, a = [n, r];
            if (!o || o === i)return a;
            for (var s, l = n * r, u = l * t.option.zoomToNodeRatio; s = o.parentNode;) {
                for (var h = 0, c = s.children, d = 0, f = c.length; f > d; d++)h += c[d].getValue();
                var p = o.getValue();
                if (0 === p)return a;
                u *= h / p;
                var v = s.getModel("itemStyle.normal").get("borderWidth");
                isFinite(v) && (u += 4 * v * v + 4 * v * Math.pow(u, .5)), u > g.MAX_SAFE_INTEGER && (u = g.MAX_SAFE_INTEGER), o = s
            }
            l > u && (u = l);
            var m = Math.pow(u / l, .5);
            return [n * m, r * m]
        }

        function d(t, e, i) {
            if (e)return {x: e.x, y: e.y};
            var n = {x: 0, y: 0};
            if (!i)return n;
            var r = i.node, o = r.getLayout();
            if (!o)return n;
            for (var a = [o.width / 2, o.height / 2], s = r; s;) {
                var l = s.getLayout();
                a[0] += l.x, a[1] += l.y, s = s.parentNode
            }
            return {x: t.width / 2 - a[0], y: t.height / 2 - a[1]}
        }

        function f(t, e, i, n, r) {
            var o = t.getLayout(), a = i[r], s = a && a === t;
            if (!(a && !s || r === i.length && t !== n)) {
                t.setLayout({isInView: !0, invisible: !s && !e.intersect(o), isAboveViewRoot: s}, !0);
                var l = new y(e.x - o.x, e.y - o.y, e.width, e.height);
                S(t.viewChildren || [], function (t) {
                    f(t, l, i, n, r + 1)
                })
            }
        }

        var p = i(1), g = i(4), v = i(13), m = i(169), y = i(7), m = i(169), x = Math.max, _ = Math.min, b = g.parsePercent, w = p.retrieve, S = p.each;
        t.exports = n
    }, function (t, e, i) {
        function n(t, e, i, s, u, c) {
            var d = t.getModel(), p = t.getLayout();
            if (p && !p.invisible && p.isInView) {
                var v, m = t.getModel(g), y = i[t.depth], x = r(m, e, y, s), _ = m.get("borderColor"), b = m.get("borderColorSaturation");
                null != b && (v = o(x, t), _ = a(b, v)), t.setVisual("borderColor", _);
                var w = t.viewChildren;
                if (w && w.length) {
                    var S = l(t, d, p, m, x, w);
                    f.each(w, function (t, e) {
                        if (t.depth >= u.length || t === u[t.depth]) {
                            var r = h(d, x, t, e, S, c);
                            n(t, r, i, s, u, c)
                        }
                    })
                } else v = o(x, t), t.setVisual("color", v)
            }
        }

        function r(t, e, i, n) {
            var r = f.extend({}, e);
            return f.each(["color", "colorAlpha", "colorSaturation"], function (o) {
                var a = t.get(o, !0);
                null == a && i && (a = i[o]), null == a && (a = e[o]), null == a && (a = n.get(o)), null != a && (r[o] = a)
            }), r
        }

        function o(t) {
            var e = s(t, "color");
            if (e) {
                var i = s(t, "colorAlpha"), n = s(t, "colorSaturation");
                return n && (e = d.modifyHSL(e, null, null, n)), i && (e = d.modifyAlpha(e, i)), e
            }
        }

        function a(t, e) {
            return null != e ? d.modifyHSL(e, null, null, t) : null
        }

        function s(t, e) {
            var i = t[e];
            return null != i && "none" !== i ? i : void 0
        }

        function l(t, e, i, n, r, o) {
            if (o && o.length) {
                var a = u(e, "color") || null != r.color && "none" !== r.color && (u(e, "colorAlpha") || u(e, "colorSaturation"));
                if (a) {
                    var s = e.get("colorMappingBy"), l = {type: a.name, dataExtent: i.dataExtent, visual: a.range};
                    "color" !== l.type || "index" !== s && "id" !== s ? l.mappingMethod = "linear" : (l.mappingMethod = "category", l.loop = !0);
                    var h = new c(l);
                    return h.__drColorMappingBy = s, h
                }
            }
        }

        function u(t, e) {
            var i = t.get(e);
            return p(i) && i.length ? {name: e, range: i} : null
        }

        function h(t, e, i, n, r, o) {
            var a = f.extend({}, e);
            if (r) {
                var s = r.type, l = "color" === s && r.__drColorMappingBy, u = "index" === l ? n : "id" === l ? o.mapIdToIndex(i.getId()) : i.getValue(t.get("visualDimension"));
                a[s] = r.mapValueToVisual(u)
            }
            return a
        }

        var c = i(71), d = i(18), f = i(1), p = f.isArray, g = "itemStyle.normal";
        t.exports = function (t, e, i) {
            var r = {mainType: "series", subType: "treemap", query: i};
            t.eachComponent(r, function (t) {
                var e = t.getData().tree, i = e.root, r = t.getModel(g);
                if (!i.isRemoved()) {
                    var o = f.map(e.levelModels, function (t) {
                        return t ? t.get(g) : null
                    });
                    n(i, {}, o, r, t.getViewRoot().getAncestors(), t)
                }
            })
        }
    }, function (t, e, i) {
        "use strict";
        i(214), i(317)
    }, function (t, e, i) {
        "use strict";
        function n(t, e, i, n) {
            var r = t.coordToPoint([e, n]), o = t.coordToPoint([i, n]);
            return {x1: r[0], y1: r[1], x2: o[0], y2: o[1]}
        }

        var r = i(1), o = i(3), a = i(8), s = ["axisLine", "axisLabel", "axisTick", "splitLine", "splitArea"];
        i(2).extendComponentView({
            type: "angleAxis", render: function (t, e) {
                if (this.group.removeAll(), t.get("show")) {
                    var i = e.getComponent("polar", t.get("polarIndex")), n = t.axis, o = i.coordinateSystem, a = o.getRadiusAxis().getExtent(), l = n.getTicksCoords();
                    "category" !== n.type && l.pop(), r.each(s, function (e) {
                        t.get(e + ".show") && this["_" + e](t, o, l, a)
                    }, this)
                }
            }, _axisLine: function (t, e, i, n) {
                var r = t.getModel("axisLine.lineStyle"), a = new o.Circle({
                    shape: {cx: e.cx, cy: e.cy, r: n[1]},
                    style: r.getLineStyle(),
                    z2: 1,
                    silent: !0
                });
                a.style.fill = null, this.group.add(a)
            }, _axisTick: function (t, e, i, a) {
                var s = t.getModel("axisTick"), l = (s.get("inside") ? -1 : 1) * s.get("length"), u = r.map(i, function (t) {
                    return new o.Line({shape: n(e, a[1], a[1] + l, t)})
                });
                this.group.add(o.mergePath(u, {style: r.defaults(s.getModel("lineStyle").getLineStyle(), {stroke: t.get("axisLine.lineStyle.color")})}))
            }, _axisLabel: function (t, e, i, n) {
                for (var r = t.axis, s = t.get("data"), l = t.getModel("axisLabel"), u = l.getModel("textStyle"), h = t.getFormattedLabels(), c = l.get("margin"), d = r.getLabelsCoords(), f = 0; f < i.length; f++) {
                    var p = n[1], g = e.coordToPoint([p + c, d[f]]), v = e.cx, m = e.cy, y = Math.abs(g[0] - v) / p < .3 ? "center" : g[0] > v ? "left" : "right", x = Math.abs(g[1] - m) / p < .3 ? "middle" : g[1] > m ? "top" : "bottom", _ = u;
                    s && s[f] && s[f].textStyle && (_ = new a(s[f].textStyle, u)), this.group.add(new o.Text({
                        style: {
                            x: g[0],
                            y: g[1],
                            fill: _.getTextColor() || t.get("axisLine.lineStyle.color"),
                            text: h[f],
                            textAlign: y,
                            textVerticalAlign: x,
                            textFont: _.getFont()
                        }, silent: !0
                    }))
                }
            }, _splitLine: function (t, e, i, a) {
                var s = t.getModel("splitLine"), l = s.getModel("lineStyle"), u = l.get("color"), h = 0;
                u = u instanceof Array ? u : [u];
                for (var c = [], d = 0; d < i.length; d++) {
                    var f = h++ % u.length;
                    c[f] = c[f] || [], c[f].push(new o.Line({shape: n(e, a[0], a[1], i[d])}))
                }
                for (var d = 0; d < c.length; d++)this.group.add(o.mergePath(c[d], {
                    style: r.defaults({stroke: u[d % u.length]}, l.getLineStyle()),
                    silent: !0,
                    z: t.get("z")
                }))
            }, _splitArea: function (t, e, i, n) {
                var a = t.getModel("splitArea"), s = a.getModel("areaStyle"), l = s.get("color"), u = 0;
                l = l instanceof Array ? l : [l];
                for (var h = [], c = Math.PI / 180, d = -i[0] * c, f = Math.min(n[0], n[1]), p = Math.max(n[0], n[1]), g = t.get("clockwise"), v = 1; v < i.length; v++) {
                    var m = u++ % l.length;
                    h[m] = h[m] || [], h[m].push(new o.Sector({
                        shape: {
                            cx: e.cx,
                            cy: e.cy,
                            r0: f,
                            r: p,
                            startAngle: d,
                            endAngle: -i[v] * c,
                            clockwise: g
                        }, silent: !0
                    })), d = -i[v] * c
                }
                for (var v = 0; v < h.length; v++)this.group.add(o.mergePath(h[v], {
                    style: r.defaults({fill: l[v % l.length]}, s.getAreaStyle()),
                    silent: !0
                }))
            }
        })
    }, function (t, e, i) {
        function n(t, e, i) {
            return i && "axisAreaSelect" === i.type && e.findComponents({mainType: "parallelAxis", query: i})[0] === t
        }

        var r = i(1), o = i(50), a = i(110), s = i(3), l = ["axisLine", "axisLabel", "axisTick", "axisName"], u = i(2).extendComponentView({
            type: "parallelAxis",
            init: function (t, e) {
                u.superApply(this, "init", arguments), (this._brushController = new a(e.getZr())).on("brush", r.bind(this._onBrush, this))
            },
            render: function (t, e, i, a) {
                if (!n(t, e, a)) {
                    this.axisModel = t, this.api = i, this.group.removeAll();
                    var u = this._axisGroup;
                    if (this._axisGroup = new s.Group, this.group.add(this._axisGroup), t.get("show")) {
                        var h, c = e.getComponent("parallel", t.get("parallelIndex")).coordinateSystem, d = t.getAreaSelectStyle(), f = d.width, p = t.axis.dim, g = c.getAxisLayout(p), v = r.indexOf(c.dimensions, p), m = g.axisExpandWindow;
                        m && (v <= m[0] || v >= m[1]) && (h = !1);
                        var y = r.extend({axisLabelShow: h, strokeContainThreshold: f}, g), x = new o(t, y);
                        r.each(l, x.add, x), this._axisGroup.add(x.getGroup()), this._refreshBrushController(y, d, t, f), s.groupTransition(u, this._axisGroup, t)
                    }
                }
            },
            _refreshBrushController: function (t, e, i, n) {
                var o = i.axis, a = r.map(i.activeIntervals, function (t) {
                    return {
                        brushType: "lineX",
                        panelId: "pl",
                        range: [o.dataToCoord(t[0], !0), o.dataToCoord(t[1], !0)]
                    }
                }), s = o.getExtent(), l = 30, u = {x: s[0] - l, y: -n / 2, width: s[1] - s[0] + 2 * l, height: n};
                this._brushController.mount({
                    enableGlobalPan: !0,
                    rotation: t.rotation,
                    position: t.position
                }).setPanels([{panelId: "pl", rect: u}]).enableBrush({
                    brushType: "lineX",
                    brushStyle: e,
                    removeOnClick: !0
                }).updateCovers(a)
            },
            _onBrush: function (t, e) {
                var i = this.axisModel, n = i.axis, o = r.map(t, function (t) {
                    return [n.coordToData(t.range[0], !0), n.coordToData(t.range[1], !0)]
                });
                (!i.option.realtime === e.isEnd || e.removeOnClick) && this.api.dispatchAction({
                    type: "axisAreaSelect",
                    parallelAxisId: i.id,
                    intervals: o
                })
            },
            dispose: function () {
                this._brushController.dispose()
            }
        });
        t.exports = u
    }, function (t, e, i) {
        "use strict";
        function n(t, e, i) {
            return {
                position: [t.cx, t.cy],
                rotation: i / 180 * Math.PI,
                labelDirection: -1,
                tickDirection: -1,
                nameDirection: 1,
                labelRotation: e.getModel("axisLabel").get("rotate"),
                z2: 1
            }
        }

        var r = i(1), o = i(3), a = i(50), s = ["axisLine", "axisLabel", "axisTick", "axisName"], l = ["splitLine", "splitArea"];
        i(2).extendComponentView({
            type: "radiusAxis", render: function (t, e) {
                if (this.group.removeAll(), t.get("show")) {
                    var i = e.getComponent("polar", t.get("polarIndex")), o = i.coordinateSystem.getAngleAxis(), u = t.axis, h = i.coordinateSystem, c = u.getTicksCoords(), d = o.getExtent()[0], f = u.getExtent(), p = n(h, t, d), g = new a(t, p);
                    r.each(s, g.add, g), this.group.add(g.getGroup()), r.each(l, function (e) {
                        t.get(e + ".show") && this["_" + e](t, h, d, f, c)
                    }, this)
                }
            }, _splitLine: function (t, e, i, n, a) {
                var s = t.getModel("splitLine"), l = s.getModel("lineStyle"), u = l.get("color"), h = 0;
                u = u instanceof Array ? u : [u];
                for (var c = [], d = 0; d < a.length; d++) {
                    var f = h++ % u.length;
                    c[f] = c[f] || [], c[f].push(new o.Circle({shape: {cx: e.cx, cy: e.cy, r: a[d]}, silent: !0}))
                }
                for (var d = 0; d < c.length; d++)this.group.add(o.mergePath(c[d], {
                    style: r.defaults({
                        stroke: u[d % u.length],
                        fill: null
                    }, l.getLineStyle()), silent: !0
                }))
            }, _splitArea: function (t, e, i, n, a) {
                var s = t.getModel("splitArea"), l = s.getModel("areaStyle"), u = l.get("color"), h = 0;
                u = u instanceof Array ? u : [u];
                for (var c = [], d = a[0], f = 1; f < a.length; f++) {
                    var p = h++ % u.length;
                    c[p] = c[p] || [], c[p].push(new o.Sector({
                        shape: {
                            cx: e.cx,
                            cy: e.cy,
                            r0: d,
                            r: a[f],
                            startAngle: 0,
                            endAngle: 2 * Math.PI
                        }, silent: !0
                    })), d = a[f]
                }
                for (var f = 0; f < c.length; f++)this.group.add(o.mergePath(c[f], {
                    style: r.defaults({fill: u[f % u.length]}, l.getAreaStyle()),
                    silent: !0
                }))
            }
        })
    }, function (t, e, i) {
        function n(t) {
            var e = t.coordinateSystem, i = t.axis, n = {}, r = i.position, o = i.orient, a = e.getRect(), s = [a.x, a.x + a.width, a.y, a.y + a.height], l = {
                horizontal: {
                    top: s[2],
                    bottom: s[3]
                }, vertical: {left: s[0], right: s[1]}
            };
            n.position = ["vertical" === o ? l.vertical[r] : s[0], "horizontal" === o ? l.horizontal[r] : s[3]];
            var u = {horizontal: 0, vertical: 1};
            n.rotation = Math.PI / 2 * u[o];
            var h = {top: -1, bottom: 1, right: 1, left: -1};
            n.labelDirection = n.tickDirection = n.nameDirection = h[r], t.getModel("axisTick").get("inside") && (n.tickDirection = -n.tickDirection), t.getModel("axisLabel").get("inside") && (n.labelDirection = -n.labelDirection);
            var c = t.getModel("axisLabel").get("rotate");
            return n.labelRotation = "top" === r ? -c : c, n.labelInterval = i.getLabelInterval(), n.z2 = 1, n
        }

        var r = i(50), o = i(1), a = i(3), s = r.getInterval, l = r.ifIgnoreOnTick, u = ["axisLine", "axisLabel", "axisTick", "axisName"], h = "splitLine", c = i(2).extendComponentView({
            type: "singleAxis", render: function (t, e) {
                var i = this.group;
                i.removeAll();
                var a = n(t), s = new r(t, a);
                o.each(u, s.add, s), i.add(s.getGroup()), t.get(h + ".show") && this["_" + h](t, a.labelInterval)
            }, _splitLine: function (t, e) {
                var i = t.axis, n = t.getModel("splitLine"), r = n.getModel("lineStyle"), o = r.get("width"), u = r.get("color"), h = s(n, e);
                u = u instanceof Array ? u : [u];
                for (var c = t.coordinateSystem.getRect(), d = i.isHorizontal(), f = [], p = 0, g = i.getTicksCoords(), v = [], m = [], y = 0; y < g.length; ++y)if (!l(i, y, h)) {
                    var x = i.toGlobalCoord(g[y]);
                    d ? (v[0] = x, v[1] = c.y, m[0] = x, m[1] = c.y + c.height) : (v[0] = c.x, v[1] = x, m[0] = c.x + c.width, m[1] = x);
                    var _ = p++ % u.length;
                    f[_] = f[_] || [], f[_].push(new a.Line(a.subPixelOptimizeLine({
                        shape: {x1: v[0], y1: v[1], x2: m[0], y2: m[1]}, style: {lineWidth: o}, silent: !0
                    })))
                }
                for (var y = 0; y < f.length; ++y)this.group.add(a.mergePath(f[y], {
                    style: {
                        stroke: u[y % u.length],
                        lineDash: r.getLineDash(),
                        lineWidth: o
                    }, silent: !0
                }))
            }
        });
        t.exports = c
    }, function (t, e, i) {
        var n = i(2), r = {type: "axisAreaSelect", event: "axisAreaSelected", update: "updateVisual"};
        n.registerAction(r, function (t, e) {
            e.eachComponent({mainType: "parallelAxis", query: t}, function (e) {
                e.axis.model.setActiveIntervals(t.intervals)
            })
        }), n.registerAction("parallelAxisExpand", function (t, e) {
            e.eachComponent({mainType: "parallel", query: t}, function (e) {
                e.setAxisExpand(t)
            })
        })
    }, function (t, e, i) {
        i(2).registerPreprocessor(i(326)), i(328), i(323), i(324), i(325), i(346)
    }, function (t, e, i) {
        var n = i(2), r = i(1), o = i(171), a = i(8), s = ["#ddd"], l = n.extendComponentModel({
            type: "brush",
            dependencies: ["geo", "grid", "xAxis", "yAxis", "parallel", "series"],
            defaultOption: {
                toolbox: null,
                brushLink: null,
                seriesIndex: "all",
                geoIndex: null,
                xAxisIndex: null,
                yAxisIndex: null,
                brushType: "rect",
                brushMode: "single",
                transformable: !0,
                brushStyle: {
                    borderWidth: 1,
                    color: "rgba(120,140,180,0.3)",
                    borderColor: "rgba(120,140,180,0.8)",
                    width: null
                },
                throttleType: "fixRate",
                throttleDelay: 0,
                removeOnClick: !0
            },
            areas: [],
            brushType: null,
            brushOption: {},
            coordInfoList: [],
            optionUpdated: function (t, e) {
                var i = this.option;
                !e && o.replaceVisualOption(i, t, ["inBrush", "outOfBrush"]), i.inBrush = i.inBrush || {}, i.outOfBrush = i.outOfBrush || {color: s}
            },
            setAreas: function (t) {
                t && (this.areas = r.map(t, function (t) {
                    return this._mergeBrushOption(t)
                }, this))
            },
            setBrushOption: function (t) {
                this.brushOption = this._mergeBrushOption(t), this.brushType = this.brushOption.brushType
            },
            _mergeBrushOption: function (t) {
                var e = this.option;
                return r.merge({
                    brushType: e.brushType,
                    brushMode: e.brushMode,
                    transformable: e.transformable,
                    brushStyle: new a(e.brushStyle).getItemStyle(),
                    removeOnClick: e.removeOnClick
                }, t, !0)
            }
        });
        t.exports = l
    }, function (t, e, i) {
        function n(t, e, i, n) {
            (!n || n.$from !== t.id) && this._brushController.setPanels(s.makePanelOpts(t.coordInfoList)).enableBrush(t.brushOption).updateCovers(t.areas.slice())
        }

        var r = i(1), o = i(110), a = i(2), s = i(111);
        t.exports = a.extendComponentView({
            type: "brush", init: function (t, e) {
                this.ecModel = t, this.api = e, this.model, (this._brushController = new o(e.getZr())).on("brush", r.bind(this._onBrush, this)).mount()
            }, render: function (t) {
                return this.model = t, n.apply(this, arguments)
            }, updateView: n, updateLayout: n, updateVisual: n, dispose: function () {
                this._brushController.dispose()
            }, _onBrush: function (t, e) {
                var i = this.model.id;
                s.parseOutputRanges(t, this.model.coordInfoList, this.ecModel), (!e.isEnd || e.removeOnClick) && this.api.dispatchAction({
                    type: "brush",
                    brushId: i,
                    areas: r.clone(t),
                    $from: i
                })
            }
        })
    }, function (t, e, i) {
        var n = i(2);
        n.registerAction({type: "brush", event: "brush", update: "updateView"}, function (t, e) {
            e.eachComponent({mainType: "brush", query: t}, function (e) {
                e.setAreas(t.areas)
            })
        }), n.registerAction({type: "brushSelect", event: "brushSelected", update: "none"}, function () {
        })
    }, function (t, e, i) {
        function n(t) {
            var e = {};
            r.each(t, function (t) {
                e[t] = 1
            }), t.length = 0, r.each(e, function (e, i) {
                t.push(i)
            })
        }

        var r = i(1), o = ["rect", "polygon", "keep", "clear"];
        t.exports = function (t, e) {
            var i = t && t.brush;
            if (r.isArray(i) || (i = i ? [i] : []), i.length) {
                var a = [];
                r.each(i, function (t) {
                    var e = t.hasOwnProperty("toolbox") ? t.toolbox : [];
                    e instanceof Array && (a = a.concat(e))
                });
                var s = t && t.toolbox;
                r.isArray(s) && (s = s[0]), s || (s = {feature: {}}, t.toolbox = [s]);
                var l = s.feature || (s.feature = {}), u = l.brush || (l.brush = {}), h = u.type || (u.type = []);
                h.push.apply(h, a), n(h), e && !h.length && h.push.apply(h, o)
            }
        }
    }, function (t, e, i) {
        function n(t) {
            var e = ["x", "y"], i = ["width", "height"];
            return {
                point: function (e, i, n) {
                    var o = n.range, a = e[t];
                    return r(a, o)
                }, rect: function (n, o, a) {
                    var s = a.range;
                    return r(n[e[t]], s) || r(n[e[t]] + n[i[t]], s)
                }
            }
        }

        function r(t, e) {
            return e[0] <= t && t <= e[1]
        }

        function o(t, e, i, n, r) {
            for (var o = 0, s = r[r.length - 1]; o < r.length; o++) {
                var l = r[o];
                if (a(t, e, i, n, l[0], l[1], s[0], s[1]))return !0;
                s = l
            }
        }

        function a(t, e, i, n, r, o, a, u) {
            var h = l(i - t, r - a, n - e, o - u);
            if (s(h))return !1;
            var c = l(r - t, r - a, o - e, o - u) / h;
            if (0 > c || c > 1)return !1;
            var d = l(i - t, r - t, n - e, o - e) / h;
            return !(0 > d || d > 1)
        }

        function s(t) {
            return 1e-6 >= t && t >= -1e-6
        }

        function l(t, e, i, n) {
            return t * n - e * i
        }

        function u(t) {
            var e = t.x, i = t.y, n = t.width, r = t.height;
            return 0 > n && (e += n, n = -n), 0 > r && (i += r, r = -r), new c(e, i, n, r)
        }

        var h = i(240).contain, c = i(7), d = {
            lineX: n(0), lineY: n(1), rect: {
                point: function (t, e, i) {
                    return i.boundingRect.contain(t[0], t[1])
                }, rect: function (t, e, i) {
                    return i.boundingRect.intersect(u(t))
                }
            }, polygon: {
                point: function (t, e, i) {
                    return i.boundingRect.contain(t[0], t[1]) && h(i.range, t[0], t[1])
                }, rect: function (t, e, i) {
                    var n = i.range;
                    if (n.length <= 1)return !1;
                    var r = t.x, a = t.y, s = t.width, l = t.height, c = n[0];
                    return h(n, r, a) || h(n, r + s, a) || h(n, r, a + l) || h(n, r + s, a + l) || u(t).contain(c[0], c[1]) || o(r, a, r + s, a, n) || o(r, a, r, a + l, n) || o(r + s, a, r + s, a + l, n) || o(r, a + l, r + s, a + l, n) ? !0 : void 0
                }
            }
        };
        t.exports = d
    }, function (t, e, i) {
        function n(t, e, i, n, o) {
            if (o) {
                var a = t.getZr();
                if (!a[x]) {
                    a[y] || (a[y] = r);
                    var s = g.createOrUpdate(a, y, i, e);
                    s(t, n)
                }
            }
        }

        function r(t, e) {
            if (!t.isDisposed()) {
                var i = t.getZr();
                i[x] = !0, t.dispatchAction({type: "brushSelect", batch: e}), i[x] = !1
            }
        }

        function o(t, e, i, n) {
            for (var r = i.getItemLayout(n), o = 0, a = e.length; a > o; o++) {
                var s = e[o];
                if (t[s.brushType](r, s.selectors, s))return !0
            }
        }

        function a(t) {
            var e = t.brushSelector;
            if (d.isString(e)) {
                var i = [];
                return d.each(p, function (t, n) {
                    i[n] = t[e]
                }), i
            }
            if (d.isFunction(e)) {
                var n = {};
                return d.each(p, function (t, i) {
                    n[i] = e
                }), n
            }
            return e
        }

        function s(t, e) {
            var i = t.option.seriesIndex;
            return null != i && "all" !== i && (d.isArray(i) ? d.indexOf(i, e) < 0 : e !== i)
        }

        function l(t) {
            var e = t.selectors = {};
            return d.each(p[t.brushType], function (i, n) {
                e[n] = function (n) {
                    return i(n, e, t)
                }
            }), t
        }

        function u(t) {
            return new f(t[0][0], t[1][0], t[0][1] - t[0][0], t[1][1] - t[1][0])
        }

        var h = i(2), c = i(171), d = i(1), f = i(7), p = i(327), g = i(81), v = i(111), m = ["inBrush", "outOfBrush"], y = "__ecBrushSelect", x = "__ecInBrushSelectEvent", _ = h.PRIORITY.VISUAL.BRUSH;
        h.registerLayout(_, function (t, e, i) {
            t.eachComponent({mainType: "brush"}, function (e) {
                i && "takeGlobalCursor" === i.type && e.setBrushOption("brush" === i.key ? i.brushOption : {brushType: !1}), e.coordInfoList = v.makeCoordInfoList(e.option, t), v.parseInputRanges(e, t)
            })
        }), h.registerVisual(_, function (t, e, i) {
            var r, u, h = [];
            t.eachComponent({mainType: "brush"}, function (e, i) {
                function n(t) {
                    return "all" === _ || w[t]
                }

                function f(t) {
                    return !!t.length
                }

                function p(t, e) {
                    var i = t.coordinateSystem;
                    A |= i.hasAxisbrushed(), n(e) && i.eachActiveState(t.getData(), function (t, e) {
                        "active" === t && (S[e] = 1)
                    })
                }

                function g(t, i, r) {
                    var l = a(t);
                    if (l && !s(e, i) && (d.each(I, function (i) {
                            l[i.brushType] && v.controlSeries(i, e, t) && r.push(i), A |= f(r)
                        }), n(i) && f(r))) {
                        var u = t.getData();
                        u.each(function (t) {
                            o(l, r, u, t) && (S[t] = 1)
                        })
                    }
                }

                var y = {brushId: e.id, brushIndex: i, brushName: e.name, areas: d.clone(e.areas), selected: []};
                h.push(y);
                var x = e.option, _ = x.brushLink, w = [], S = [], M = [], A = 0;
                i || (r = x.throttleType, u = x.throttleDelay);
                var I = d.map(e.areas, function (t) {
                    return l(d.defaults({boundingRect: b[t.brushType](t)}, t))
                }), T = c.createVisualMappings(e.option, m, function (t) {
                    t.mappingMethod = "fixed"
                });
                d.isArray(_) && d.each(_, function (t) {
                    w[t] = 1
                }), t.eachSeries(function (t, e) {
                    var i = M[e] = [];
                    "parallel" === t.subType ? p(t, e, i) : g(t, e, i)
                }), t.eachSeries(function (t, e) {
                    var i = {seriesId: t.id, seriesIndex: e, seriesName: t.name, dataIndex: []};
                    y.selected.push(i);
                    var r = a(t), s = M[e], l = t.getData(), u = n(e) ? function (t) {
                        return S[t] ? (i.dataIndex.push(l.getRawIndex(t)), "inBrush") : "outOfBrush"
                    } : function (t) {
                        return o(r, s, l, t) ? (i.dataIndex.push(l.getRawIndex(t)), "inBrush") : "outOfBrush"
                    };
                    (n(e) ? A : f(s)) && c.applyVisual(m, T, l, u)
                })
            }), n(e, r, u, h, i)
        });
        var b = {
            lineX: d.noop, lineY: d.noop, rect: function (t) {
                return u(t.range)
            }, polygon: function (t) {
                for (var e, i = t.range, n = 0, r = i.length; r > n; n++) {
                    e = e || [[1 / 0, -(1 / 0)], [1 / 0, -(1 / 0)]];
                    var o = i[n];
                    o[0] < e[0][0] && (e[0][0] = o[0]), o[0] > e[0][1] && (e[0][1] = o[0]), o[1] < e[1][0] && (e[1][0] = o[1]), o[1] > e[1][1] && (e[1][1] = o[1])
                }
                return e && u(e)
            }
        }
    }, function (t, e, i) {
        function n(t, e) {
            e.update = "updateView", r.registerAction(e, function (e, i) {
                var n = {};
                return i.eachComponent({mainType: "geo", query: e}, function (i) {
                    i[t](e.name);
                    var r = i.coordinateSystem;
                    o.each(r.regions, function (t) {
                        n[t.name] = i.isSelected(t.name) || !1
                    })
                }), {selected: n, name: e.name}
            })
        }

        i(355), i(170), i(330), i(219);
        var r = i(2), o = i(1);
        n("toggleSelected", {type: "geoToggleSelect", event: "geoselectchanged"}), n("select", {
            type: "geoSelect",
            event: "geoselected"
        }), n("unSelect", {type: "geoUnSelect", event: "geounselected"})
    }, function (t, e, i) {
        "use strict";
        var n = i(227);
        t.exports = i(2).extendComponentView({
            type: "geo", init: function (t, e) {
                var i = new n(e, !0);
                this._mapDraw = i, this.group.add(i.group)
            }, render: function (t, e, i, n) {
                if (!n || "geoToggleSelect" !== n.type || n.from !== this.uid) {
                    var r = this._mapDraw;
                    t.get("show") ? r.draw(t, e, i, this, n) : this._mapDraw.group.removeAll(), this.group.silent = t.get("silent")
                }
            }
        })
    }, function (t, e, i) {
        i(238), i(321), i(318)
    }, function (t, e, i) {
        "use strict";
        i(214), i(316), i(335), i(2).extendComponentView({type: "polar"})
    }, function (t, e, i) {
        i(371), i(372), i(334)
    }, function (t, e, i) {
        var n = i(50), r = i(1), o = i(3), a = ["axisLine", "axisLabel", "axisTick", "axisName"];
        t.exports = i(2).extendComponentView({
            type: "radar", render: function (t, e, i) {
                var n = this.group;
                n.removeAll(), this._buildAxes(t), this._buildSplitLineAndArea(t)
            }, _buildAxes: function (t) {
                var e = t.coordinateSystem, i = e.getIndicatorAxes(), o = r.map(i, function (t) {
                    var i = new n(t.model, {
                        position: [e.cx, e.cy],
                        rotation: t.angle,
                        labelDirection: -1,
                        tickDirection: -1,
                        nameDirection: 1
                    });
                    return i
                });
                r.each(o, function (t) {
                    r.each(a, t.add, t), this.group.add(t.getGroup())
                }, this)
            }, _buildSplitLineAndArea: function (t) {
                function e(t, e, i) {
                    var n = i % e.length;
                    return t[n] = t[n] || [], n
                }

                var i = t.coordinateSystem, n = t.get("splitNumber"), a = i.getIndicatorAxes();
                if (a.length) {
                    var s = t.get("shape"), l = t.getModel("splitLine"), u = t.getModel("splitArea"), h = l.getModel("lineStyle"), c = u.getModel("areaStyle"), d = l.get("show"), f = u.get("show"), p = h.get("color"), g = c.get("color");
                    p = r.isArray(p) ? p : [p], g = r.isArray(g) ? g : [g];
                    var v = [], m = [];
                    if ("circle" === s)for (var y = a[0].getTicksCoords(), x = i.cx, _ = i.cy, b = 0; b < y.length; b++) {
                        if (d) {
                            var w = e(v, p, b);
                            v[w].push(new o.Circle({shape: {cx: x, cy: _, r: y[b]}}))
                        }
                        if (f && b < y.length - 1) {
                            var w = e(m, g, b);
                            m[w].push(new o.Ring({shape: {cx: x, cy: _, r0: y[b], r: y[b + 1]}}))
                        }
                    } else for (var S = r.map(a, function (t, e) {
                        var n = t.getTicksCoords();
                        return r.map(n, function (t) {
                            return i.coordToPoint(t, e)
                        })
                    }), M = [], b = 0; n >= b; b++) {
                        for (var A = [], I = 0; I < a.length; I++)A.push(S[I][b]);
                        if (A.push(A[0].slice()), d) {
                            var w = e(v, p, b);
                            v[w].push(new o.Polyline({shape: {points: A}}))
                        }
                        if (f && M) {
                            var w = e(m, g, b - 1);
                            m[w].push(new o.Polygon({shape: {points: A.concat(M)}}))
                        }
                        M = A.slice().reverse()
                    }
                    var T = h.getLineStyle(), L = c.getAreaStyle();
                    r.each(m, function (t, e) {
                        this.group.add(o.mergePath(t, {
                            style: r.defaults({stroke: "none", fill: g[e % g.length]}, L),
                            silent: !0
                        }))
                    }, this), r.each(v, function (t, e) {
                        this.group.add(o.mergePath(t, {
                            style: r.defaults({fill: "none", stroke: p[e % p.length]}, T),
                            silent: !0
                        }))
                    }, this)
                }
            }
        })
    }, function (t, e, i) {
        i(214), i(319)
    }, function (t, e, i) {
        i(376), i(320), i(373);
        var n = i(2);
        n.extendComponentView({type: "single"})
    }, function (t, e, i) {
        var n = i(2);
        n.registerPreprocessor(i(343)), i(345), i(344), i(338), i(339)
    }, function (t, e, i) {
        var n = i(341), r = i(1), o = i(10), a = n.extend({
            type: "timeline.slider",
            defaultOption: {
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "#ccc",
                borderWidth: 0,
                orient: "horizontal",
                inverse: !1,
                tooltip: {trigger: "item"},
                symbol: "emptyCircle",
                symbolSize: 10,
                lineStyle: {show: !0, width: 2, color: "#304654"},
                label: {
                    position: "auto",
                    normal: {show: !0, interval: "auto", rotate: 0, textStyle: {color: "#304654"}},
                    emphasis: {show: !0, textStyle: {color: "#c23531"}}
                },
                itemStyle: {normal: {color: "#304654", borderWidth: 1}, emphasis: {color: "#c23531"}},
                checkpointStyle: {
                    symbol: "circle",
                    symbolSize: 13,
                    color: "#c23531",
                    borderWidth: 5,
                    borderColor: "rgba(194,53,49, 0.5)",
                    animation: !0,
                    animationDuration: 300,
                    animationEasing: "quinticInOut"
                },
                controlStyle: {
                    show: !0,
                    showPlayBtn: !0,
                    showPrevBtn: !0,
                    showNextBtn: !0,
                    itemSize: 22,
                    itemGap: 12,
                    position: "left",
                    playIcon: "path://M31.6,53C17.5,53,6,41.5,6,27.4S17.5,1.8,31.6,1.8C45.7,1.8,57.2,13.3,57.2,27.4S45.7,53,31.6,53z M31.6,3.3 C18.4,3.3,7.5,14.1,7.5,27.4c0,13.3,10.8,24.1,24.1,24.1C44.9,51.5,55.7,40.7,55.7,27.4C55.7,14.1,44.9,3.3,31.6,3.3z M24.9,21.3 c0-2.2,1.6-3.1,3.5-2l10.5,6.1c1.899,1.1,1.899,2.9,0,4l-10.5,6.1c-1.9,1.1-3.5,0.2-3.5-2V21.3z",
                    stopIcon: "path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z",
                    nextIcon: "path://M18.6,50.8l22.5-22.5c0.2-0.2,0.3-0.4,0.3-0.7c0-0.3-0.1-0.5-0.3-0.7L18.7,4.4c-0.1-0.1-0.2-0.3-0.2-0.5 c0-0.4,0.3-0.8,0.8-0.8c0.2,0,0.5,0.1,0.6,0.3l23.5,23.5l0,0c0.2,0.2,0.3,0.4,0.3,0.7c0,0.3-0.1,0.5-0.3,0.7l-0.1,0.1L19.7,52 c-0.1,0.1-0.3,0.2-0.5,0.2c-0.4,0-0.8-0.3-0.8-0.8C18.4,51.2,18.5,51,18.6,50.8z",
                    prevIcon: "path://M43,52.8L20.4,30.3c-0.2-0.2-0.3-0.4-0.3-0.7c0-0.3,0.1-0.5,0.3-0.7L42.9,6.4c0.1-0.1,0.2-0.3,0.2-0.5 c0-0.4-0.3-0.8-0.8-0.8c-0.2,0-0.5,0.1-0.6,0.3L18.3,28.8l0,0c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.3,0.1,0.5,0.3,0.7l0.1,0.1L41.9,54 c0.1,0.1,0.3,0.2,0.5,0.2c0.4,0,0.8-0.3,0.8-0.8C43.2,53.2,43.1,53,43,52.8z",
                    normal: {color: "#304654", borderColor: "#304654", borderWidth: 1},
                    emphasis: {color: "#c23531", borderColor: "#c23531", borderWidth: 2}
                },
                data: []
            }
        });
        r.mixin(a, o.dataFormatMixin), t.exports = a
    }, function (t, e, i) {
        function n(t, e) {
            return u.getLayoutRect(t.getBoxLayoutParams(), {
                width: e.getWidth(),
                height: e.getHeight()
            }, t.get("padding"))
        }

        function r(t, e, i, n) {
            var r = l.makePath(t.get(e).replace(/^path:\/\//, ""), s.clone(n || {}), new p(i[0], i[1], i[2], i[3]), "center");
            return r
        }

        function o(t, e, i, n, r, o) {
            var a = t.get("symbol"), l = e.get("color"), u = t.get("symbolSize"), h = u / 2, c = e.getItemStyle(["color", "symbol", "symbolSize"]);
            return r ? (r.setStyle(c), r.setColor(l), i.add(r), o && o.onUpdate(r)) : (r = d.createSymbol(a, -h, -h, u, u, l), i.add(r), o && o.onCreate(r)), n = s.merge({
                rectHover: !0,
                style: c,
                z2: 100
            }, n, !0), r.attr(n), r
        }

        function a(t, e, i, n, r) {
            if (!t.dragging) {
                var o = n.getModel("checkpointStyle"), a = i.dataToCoord(n.getData().get(["value"], e));
                r || !o.get("animation", !0) ? t.attr({position: [a, 0]}) : (t.stopAnimation(!0), t.animateTo({position: [a, 0]}, o.get("animationDuration", !0), o.get("animationEasing", !0)))
            }
        }

        var s = i(1), l = i(3), u = i(13), h = i(342), c = i(340), d = i(26), f = i(22), p = i(7), g = i(19), v = i(4), m = i(9), y = m.encodeHTML, x = s.bind, _ = s.each, b = Math.PI;
        t.exports = h.extend({
            type: "timeline.slider", init: function (t, e) {
                this.api = e, this._axis, this._viewRect, this._timer, this._currentPointer, this._mainGroup, this._labelGroup
            }, render: function (t, e, i, n) {
                if (this.model = t, this.api = i, this.ecModel = e, this.group.removeAll(), t.get("show", !0)) {
                    var r = this._layout(t, i), o = this._createGroup("mainGroup"), a = this._createGroup("labelGroup"), s = this._axis = this._createAxis(r, t);
                    t.formatTooltip = function (t) {
                        return y(s.scale.getLabel(t))
                    }, _(["AxisLine", "AxisTick", "Control", "CurrentPointer"], function (e) {
                        this["_render" + e](r, o, s, t)
                    }, this), this._renderAxisLabel(r, a, s, t), this._position(r, t)
                }
                this._doPlayStop()
            }, remove: function () {
                this._clearTimer(), this.group.removeAll()
            }, dispose: function () {
                this._clearTimer()
            }, _layout: function (t, e) {
                var i = t.get("label.normal.position"), r = t.get("orient"), o = n(t, e);
                null == i || "auto" === i ? i = "horizontal" === r ? o.y + o.height / 2 < e.getHeight() / 2 ? "-" : "+" : o.x + o.width / 2 < e.getWidth() / 2 ? "+" : "-" : isNaN(i) && (i = {
                    horizontal: {
                        top: "-",
                        bottom: "+"
                    }, vertical: {left: "-", right: "+"}
                }[r][i]);
                var a = {
                    horizontal: "center",
                    vertical: i >= 0 || "+" === i ? "left" : "right"
                }, s = {horizontal: i >= 0 || "+" === i ? "top" : "bottom", vertical: "middle"}, l = {
                    horizontal: 0,
                    vertical: b / 2
                }, u = "vertical" === r ? o.height : o.width, h = t.getModel("controlStyle"), c = h.get("show"), d = c ? h.get("itemSize") : 0, f = c ? h.get("itemGap") : 0, p = d + f, g = t.get("label.normal.rotate") || 0;
                g = g * b / 180;
                var v, m, y, x, _ = h.get("position", !0), c = h.get("show", !0), w = c && h.get("showPlayBtn", !0), S = c && h.get("showPrevBtn", !0), M = c && h.get("showNextBtn", !0), A = 0, I = u;
                return "left" === _ || "bottom" === _ ? (w && (v = [0, 0], A += p), S && (m = [A, 0], A += p), M && (y = [I - d, 0], I -= p)) : (w && (v = [I - d, 0], I -= p), S && (m = [0, 0], A += p), M && (y = [I - d, 0], I -= p)), x = [A, I], t.get("inverse") && x.reverse(), {
                    viewRect: o,
                    mainLength: u,
                    orient: r,
                    rotation: l[r],
                    labelRotation: g,
                    labelPosOpt: i,
                    labelAlign: a[r],
                    labelBaseline: s[r],
                    playPosition: v,
                    prevBtnPosition: m,
                    nextBtnPosition: y,
                    axisExtent: x,
                    controlSize: d,
                    controlGap: f
                }
            }, _position: function (t, e) {
                function i(t) {
                    var e = t.position;
                    t.origin = [c[0][0] - e[0], c[1][0] - e[1]]
                }

                function n(t) {
                    return [[t.x, t.x + t.width], [t.y, t.y + t.height]]
                }

                function r(t, e, i, n, r) {
                    t[n] += i[n][r] - e[n][r]
                }

                var o = this._mainGroup, a = this._labelGroup, s = t.viewRect;
                if ("vertical" === t.orient) {
                    var l = g.create(), u = s.x, h = s.y + s.height;
                    g.translate(l, l, [-u, -h]), g.rotate(l, l, -b / 2), g.translate(l, l, [u, h]), s = s.clone(), s.applyTransform(l)
                }
                var c = n(s), d = n(o.getBoundingRect()), f = n(a.getBoundingRect()), p = o.position, v = a.position;
                v[0] = p[0] = c[0][0];
                var m = t.labelPosOpt;
                if (isNaN(m)) {
                    var y = "+" === m ? 0 : 1;
                    r(p, d, c, 1, y), r(v, f, c, 1, 1 - y)
                } else {
                    var y = m >= 0 ? 0 : 1;
                    r(p, d, c, 1, y), v[1] = p[1] + m
                }
                o.attr("position", p), a.attr("position", v), o.rotation = a.rotation = t.rotation, i(o), i(a)
            }, _createAxis: function (t, e) {
                var i = e.getData(), n = e.get("axisType"), r = f.createScaleByModel(e, n), o = i.getDataExtent("value");
                r.setExtent(o[0], o[1]), this._customizeScale(r, i), r.niceTicks();
                var a = new c("value", r, t.axisExtent, n);
                return a.model = e, a
            }, _customizeScale: function (t, e) {
                t.getTicks = function () {
                    return e.mapArray(["value"], function (t) {
                        return t
                    })
                }, t.getTicksLabels = function () {
                    return s.map(this.getTicks(), t.getLabel, t)
                }
            }, _createGroup: function (t) {
                var e = this["_" + t] = new l.Group;
                return this.group.add(e), e
            }, _renderAxisLine: function (t, e, i, n) {
                var r = i.getExtent();
                n.get("lineStyle.show") && e.add(new l.Line({
                    shape: {x1: r[0], y1: 0, x2: r[1], y2: 0},
                    style: s.extend({lineCap: "round"}, n.getModel("lineStyle").getLineStyle()),
                    silent: !0,
                    z2: 1
                }))
            }, _renderAxisTick: function (t, e, i, n) {
                var r = n.getData(), a = i.scale.getTicks();
                _(a, function (t, a) {
                    var s = i.dataToCoord(t), u = r.getItemModel(a), h = u.getModel("itemStyle.normal"), c = u.getModel("itemStyle.emphasis"), d = {
                        position: [s, 0],
                        onclick: x(this._changeTimeline, this, a)
                    }, f = o(u, h, e, d);
                    l.setHoverStyle(f, c.getItemStyle()), u.get("tooltip") ? (f.dataIndex = a, f.dataModel = n) : f.dataIndex = f.dataModel = null
                }, this)
            }, _renderAxisLabel: function (t, e, i, n) {
                var r = n.getModel("label.normal");
                if (r.get("show")) {
                    var o = n.getData(), a = i.scale.getTicks(), s = f.getFormattedLabels(i, r.get("formatter")), u = i.getLabelInterval();
                    _(a, function (n, r) {
                        if (!i.isLabelIgnored(r, u)) {
                            var a = o.getItemModel(r), h = a.getModel("label.normal.textStyle"), c = a.getModel("label.emphasis.textStyle"), d = i.dataToCoord(n), f = new l.Text({
                                style: {
                                    text: s[r],
                                    textAlign: t.labelAlign,
                                    textVerticalAlign: t.labelBaseline,
                                    textFont: h.getFont(),
                                    fill: h.getTextColor()
                                },
                                position: [d, 0],
                                rotation: t.labelRotation - t.rotation,
                                onclick: x(this._changeTimeline, this, r),
                                silent: !1
                            });
                            e.add(f), l.setHoverStyle(f, c.getItemStyle())
                        }
                    }, this)
                }
            }, _renderControl: function (t, e, i, n) {
                function o(t, i, o, d) {
                    if (t) {
                        var f = {
                            position: t,
                            origin: [a / 2, 0],
                            rotation: d ? -s : 0,
                            rectHover: !0,
                            style: u,
                            onclick: o
                        }, p = r(n, i, c, f);
                        e.add(p), l.setHoverStyle(p, h)
                    }
                }

                var a = t.controlSize, s = t.rotation, u = n.getModel("controlStyle.normal").getItemStyle(), h = n.getModel("controlStyle.emphasis").getItemStyle(), c = [0, -a / 2, a, a], d = n.getPlayState(), f = n.get("inverse", !0);
                o(t.nextBtnPosition, "controlStyle.nextIcon", x(this._changeTimeline, this, f ? "-" : "+")), o(t.prevBtnPosition, "controlStyle.prevIcon", x(this._changeTimeline, this, f ? "+" : "-")), o(t.playPosition, "controlStyle." + (d ? "stopIcon" : "playIcon"), x(this._handlePlayClick, this, !d), !0)
            }, _renderCurrentPointer: function (t, e, i, n) {
                var r = n.getData(), s = n.getCurrentIndex(), l = r.getItemModel(s).getModel("checkpointStyle"), u = this, h = {
                    onCreate: function (t) {
                        t.draggable = !0, t.drift = x(u._handlePointerDrag, u), t.ondragend = x(u._handlePointerDragend, u), a(t, s, i, n, !0)
                    }, onUpdate: function (t) {
                        a(t, s, i, n)
                    }
                };
                this._currentPointer = o(l, l, this._mainGroup, {}, this._currentPointer, h)
            }, _handlePlayClick: function (t) {
                this._clearTimer(), this.api.dispatchAction({type: "timelinePlayChange", playState: t, from: this.uid})
            }, _handlePointerDrag: function (t, e, i) {
                this._clearTimer(), this._pointerChangeTimeline([i.offsetX, i.offsetY])
            }, _handlePointerDragend: function (t) {
                this._pointerChangeTimeline([t.offsetX, t.offsetY], !0)
            }, _pointerChangeTimeline: function (t, e) {
                var i = this._toAxisCoord(t)[0], n = this._axis, r = v.asc(n.getExtent().slice());
                i > r[1] && (i = r[1]), i < r[0] && (i = r[0]), this._currentPointer.position[0] = i, this._currentPointer.dirty();
                var o = this._findNearestTick(i), a = this.model;
                (e || o !== a.getCurrentIndex() && a.get("realtime")) && this._changeTimeline(o)
            }, _doPlayStop: function () {
                function t() {
                    var t = this.model;
                    this._changeTimeline(t.getCurrentIndex() + (t.get("rewind", !0) ? -1 : 1))
                }

                this._clearTimer(), this.model.getPlayState() && (this._timer = setTimeout(x(t, this), this.model.get("playInterval")))
            }, _toAxisCoord: function (t) {
                var e = this._mainGroup.getLocalTransform();
                return l.applyTransform(t, e, !0)
            }, _findNearestTick: function (t) {
                var e, i = this.model.getData(), n = 1 / 0, r = this._axis;
                return i.each(["value"], function (i, o) {
                    var a = r.dataToCoord(i), s = Math.abs(a - t);
                    n > s && (n = s, e = o)
                }), e
            }, _clearTimer: function () {
                this._timer && (clearTimeout(this._timer), this._timer = null)
            }, _changeTimeline: function (t) {
                var e = this.model.getCurrentIndex();
                "+" === t ? t = e + 1 : "-" === t && (t = e - 1), this.api.dispatchAction({
                    type: "timelineChange",
                    currentIndex: t,
                    from: this.uid
                })
            }
        })
    }, function (t, e, i) {
        var n = i(1), r = i(42), o = i(22), a = function (t, e, i, n) {
            r.call(this, t, e, i), this.type = n || "value", this._autoLabelInterval, this.model = null
        };
        a.prototype = {
            constructor: a, getLabelInterval: function () {
                var t = this.model, e = t.getModel("label.normal"), i = e.get("interval");
                if (null != i && "auto" != i)return i;
                var i = this._autoLabelInterval;
                return i || (i = this._autoLabelInterval = o.getAxisLabelInterval(n.map(this.scale.getTicks(), this.dataToCoord, this), o.getFormattedLabels(this, e.get("formatter")), e.getModel("textStyle").getFont(), "horizontal" === t.get("orient"))), i
            }, isLabelIgnored: function (t) {
                if ("category" === this.type) {
                    var e = this.getLabelInterval();
                    return "function" == typeof e && !e(t, this.scale.getLabel(t)) || t % (e + 1)
                }
            }
        }, n.inherits(a, r), t.exports = a
    }, function (t, e, i) {
        var n = i(11), r = i(14), o = i(1), a = i(10), s = n.extend({
            type: "timeline",
            layoutMode: "box",
            defaultOption: {
                zlevel: 0,
                z: 4,
                show: !0,
                axisType: "time",
                realtime: !0,
                left: "20%",
                top: null,
                right: "20%",
                bottom: 0,
                width: null,
                height: 40,
                padding: 5,
                controlPosition: "left",
                autoPlay: !1,
                rewind: !1,
                loop: !0,
                playInterval: 2e3,
                currentIndex: 0,
                itemStyle: {normal: {}, emphasis: {}},
                label: {normal: {textStyle: {color: "#000"}}, emphasis: {}},
                data: []
            },
            init: function (t, e, i) {
                this._data, this._names, this.mergeDefaultAndTheme(t, i), this._initData()
            },
            mergeOption: function (t) {
                s.superApply(this, "mergeOption", arguments), this._initData()
            },
            setCurrentIndex: function (t) {
                null == t && (t = this.option.currentIndex);
                var e = this._data.count();
                this.option.loop ? t = (t % e + e) % e : (t >= e && (t = e - 1), 0 > t && (t = 0)), this.option.currentIndex = t
            },
            getCurrentIndex: function () {
                return this.option.currentIndex
            },
            isIndexMax: function () {
                return this.getCurrentIndex() >= this._data.count() - 1
            },
            setPlayState: function (t) {
                this.option.autoPlay = !!t
            },
            getPlayState: function () {
                return !!this.option.autoPlay
            },
            _initData: function () {
                var t = this.option, e = t.data || [], i = t.axisType, n = this._names = [];
                if ("category" === i) {
                    var s = [];
                    o.each(e, function (t, e) {
                        var i, r = a.getDataItemValue(t);
                        o.isObject(t) ? (i = o.clone(t), i.value = e) : i = e, s.push(i), o.isString(r) || null != r && !isNaN(r) || (r = ""), n.push(r + "")
                    }), e = s
                }
                var l = {category: "ordinal", time: "time"}[i] || "number", u = this._data = new r([{
                    name: "value",
                    type: l
                }], this);
                u.initData(e, n)
            },
            getData: function () {
                return this._data
            },
            getCategories: function () {
                return "category" === this.get("axisType") ? this._names.slice() : void 0
            }
        });
        t.exports = s
    }, function (t, e, i) {
        var n = i(57);
        t.exports = n.extend({type: "timeline"})
    }, function (t, e, i) {
        function n(t) {
            var e = t.type, i = {number: "value", time: "time"};
            if (i[e] && (t.axisType = i[e], delete t.type), r(t), o(t, "controlPosition")) {
                var n = t.controlStyle || (t.controlStyle = {});
                o(n, "position") || (n.position = t.controlPosition), "none" !== n.position || o(n, "show") || (n.show = !1, delete n.position), delete t.controlPosition
            }
            a.each(t.data || [], function (t) {
                a.isObject(t) && !a.isArray(t) && (!o(t, "value") && o(t, "name") && (t.value = t.name), r(t))
            })
        }

        function r(t) {
            var e = t.itemStyle || (t.itemStyle = {}), i = e.emphasis || (e.emphasis = {}), n = t.label || t.label || {}, r = n.normal || (n.normal = {}), s = {
                normal: 1,
                emphasis: 1
            };
            a.each(n, function (t, e) {
                s[e] || o(r, e) || (r[e] = t)
            }), i.label && !o(n, "emphasis") && (n.emphasis = i.label, delete i.label)
        }

        function o(t, e) {
            return t.hasOwnProperty(e)
        }

        var a = i(1);
        t.exports = function (t) {
            var e = t && t.timeline;
            a.isArray(e) || (e = e ? [e] : []), a.each(e, function (t) {
                t && n(t)
            })
        }
    }, function (t, e, i) {
        var n = i(2);
        n.registerAction({
            type: "timelineChange",
            event: "timelineChanged",
            update: "prepareAndUpdate"
        }, function (t, e) {
            var i = e.getComponent("timeline");
            i && null != t.currentIndex && (i.setCurrentIndex(t.currentIndex), !i.get("loop", !0) && i.isIndexMax() && i.setPlayState(!1)), e.resetOption("timeline")
        }), n.registerAction({
            type: "timelinePlayChange",
            event: "timelinePlayChanged",
            update: "update"
        }, function (t, e) {
            var i = e.getComponent("timeline");
            i && null != t.playState && i.setPlayState(t.playState)
        })
    }, function (t, e, i) {
        i(11).registerSubTypeDefaulter("timeline", function () {
            return "slider"
        })
    }, function (t, e, i) {
        "use strict";
        function n(t, e, i) {
            this.model = t, this.ecModel = e, this.api = i, this._brushType, this._brushMode
        }

        var r = i(25), o = i(1);
        n.defaultOption = {
            show: !0,
            type: ["rect", "polygon", "lineX", "lineY", "keep", "clear"],
            icon: {
                rect: "M7.3,34.7 M0.4,10V-0.2h9.8 M89.6,10V-0.2h-9.8 M0.4,60v10.2h9.8 M89.6,60v10.2h-9.8 M12.3,22.4V10.5h13.1 M33.6,10.5h7.8 M49.1,10.5h7.8 M77.5,22.4V10.5h-13 M12.3,31.1v8.2 M77.7,31.1v8.2 M12.3,47.6v11.9h13.1 M33.6,59.5h7.6 M49.1,59.5 h7.7 M77.5,47.6v11.9h-13",
                polygon: "M55.2,34.9c1.7,0,3.1,1.4,3.1,3.1s-1.4,3.1-3.1,3.1 s-3.1-1.4-3.1-3.1S53.5,34.9,55.2,34.9z M50.4,51c1.7,0,3.1,1.4,3.1,3.1c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1 C47.3,52.4,48.7,51,50.4,51z M55.6,37.1l1.5-7.8 M60.1,13.5l1.6-8.7l-7.8,4 M59,19l-1,5.3 M24,16.1l6.4,4.9l6.4-3.3 M48.5,11.6 l-5.9,3.1 M19.1,12.8L9.7,5.1l1.1,7.7 M13.4,29.8l1,7.3l6.6,1.6 M11.6,18.4l1,6.1 M32.8,41.9 M26.6,40.4 M27.3,40.2l6.1,1.6 M49.9,52.1l-5.6-7.6l-4.9-1.2",
                lineX: "M15.2,30 M19.7,15.6V1.9H29 M34.8,1.9H40.4 M55.3,15.6V1.9H45.9 M19.7,44.4V58.1H29 M34.8,58.1H40.4 M55.3,44.4 V58.1H45.9 M12.5,20.3l-9.4,9.6l9.6,9.8 M3.1,29.9h16.5 M62.5,20.3l9.4,9.6L62.3,39.7 M71.9,29.9H55.4",
                lineY: "M38.8,7.7 M52.7,12h13.2v9 M65.9,26.6V32 M52.7,46.3h13.2v-9 M24.9,12H11.8v9 M11.8,26.6V32 M24.9,46.3H11.8v-9 M48.2,5.1l-9.3-9l-9.4,9.2 M38.9-3.9V12 M48.2,53.3l-9.3,9l-9.4-9.2 M38.9,62.3V46.4",
                keep: "M4,10.5V1h10.3 M20.7,1h6.1 M33,1h6.1 M55.4,10.5V1H45.2 M4,17.3v6.6 M55.6,17.3v6.6 M4,30.5V40h10.3 M20.7,40 h6.1 M33,40h6.1 M55.4,30.5V40H45.2 M21,18.9h62.9v48.6H21V18.9z",
                clear: "M22,14.7l30.9,31 M52.9,14.7L22,45.7 M4.7,16.8V4.2h13.1 M26,4.2h7.8 M41.6,4.2h7.8 M70.3,16.8V4.2H57.2 M4.7,25.9v8.6 M70.3,25.9v8.6 M4.7,43.2v12.6h13.1 M26,55.8h7.8 M41.6,55.8h7.8 M70.3,43.2v12.6H57.2"
            },
            title: {rect: "矩形选择", polygon: "圈选", lineX: "横向选择", lineY: "纵向选择", keep: "保持选择", clear: "清除选择"}
        };
        var a = n.prototype;
        a.render = a.updateView = a.updateLayout = function (t, e, i) {
            var n, r, a;
            e.eachComponent({mainType: "brush"}, function (t) {
                n = t.brushType, r = t.brushOption.brushMode || "single", a |= t.areas.length
            }), this._brushType = n, this._brushMode = r, o.each(t.get("type", !0), function (e) {
                t.setIconStatus(e, ("keep" === e ? "multiple" === r : "clear" === e ? a : e === n) ? "emphasis" : "normal")
            })
        }, a.getIcons = function () {
            var t = this.model, e = t.get("icon", !0), i = {};
            return o.each(t.get("type", !0), function (t) {
                e[t] && (i[t] = e[t])
            }), i
        }, a.onclick = function (t, e, i) {
            var e = this.api, n = this._brushType, r = this._brushMode;
            "clear" === i ? e.dispatchAction({type: "brush", areas: []}) : e.dispatchAction({
                type: "takeGlobalCursor",
                key: "brush",
                brushOption: {
                    brushType: "keep" === i ? n : n === i ? !1 : i,
                    brushMode: "keep" === i ? "multiple" === r ? "single" : "multiple" : r
                }
            })
        }, r.register("brush", n), t.exports = n
    }, function (t, e, i) {
        i(352), i(353)
    }, function (t, e, i) {
        function n(t, e, i) {
            var n = t.targetVisuals[e].color;
            if (!n)return i.slice();
            var r = n.option.visual.length;
            if (1 >= r || i[0] === i[1])return i.slice();
            for (var o = (i[1] - i[0]) / (r - 1), a = i[0], s = [], l = 0; r > l && a < i[1]; l++)s.push(a), a += o;
            return s.push(i[1]), s
        }

        function r(t, e, i, r) {
            var o = n(t, e, i);
            a.each(o, function (t) {
                for (var i = {value: t, valueState: e}, n = 0, o = 0; o < r.length; o++) {
                    if (n |= "inRange" === r[o].valueState, t < r[o].value)return void r.splice(o, 0, i);
                    n && (r[o].valueState = "inRange")
                }
                r.push(i)
            })
        }

        var o = i(229), a = i(1), s = i(4), l = [20, 140], u = o.extend({
            type: "visualMap.continuous",
            defaultOption: {
                align: "auto",
                calculable: !1,
                range: null,
                realtime: !0,
                itemHeight: null,
                itemWidth: null,
                hoverLink: !0,
                hoverLinkDataSize: null,
                hoverLinkOnHandle: !0
            },
            optionUpdated: function (t, e) {
                u.superApply(this, "optionUpdated", arguments), this.resetTargetSeries(), this.resetExtent(), this.resetVisual(function (t) {
                    t.mappingMethod = "linear", t.dataExtent = this.getExtent()
                }), this._resetRange()
            },
            resetItemSize: function () {
                u.superApply(this, "resetItemSize", arguments);
                var t = this.itemSize;
                "horizontal" === this._orient && t.reverse(), (null == t[0] || isNaN(t[0])) && (t[0] = l[0]), (null == t[1] || isNaN(t[1])) && (t[1] = l[1])
            },
            _resetRange: function () {
                var t = this.getExtent(), e = this.option.range;
                !e || e.auto ? (t.auto = 1, this.option.range = t) : a.isArray(e) && (e[0] > e[1] && e.reverse(), e[0] = Math.max(e[0], t[0]), e[1] = Math.min(e[1], t[1]))
            },
            completeVisualOption: function () {
                o.prototype.completeVisualOption.apply(this, arguments), a.each(this.stateList, function (t) {
                    var e = this.option.controller[t].symbolSize;
                    e && e[0] !== e[1] && (e[0] = 0)
                }, this)
            },
            setSelected: function (t) {
                this.option.range = t.slice(), this._resetRange()
            },
            getSelected: function () {
                var t = this.getExtent(), e = s.asc((this.get("range") || []).slice());
                return e[0] > t[1] && (e[0] = t[1]), e[1] > t[1] && (e[1] = t[1]), e[0] < t[0] && (e[0] = t[0]), e[1] < t[0] && (e[1] = t[0]), e
            },
            getValueState: function (t) {
                var e = this.option.range, i = this.getExtent();
                return (e[0] <= i[0] || e[0] <= t) && (e[1] >= i[1] || t <= e[1]) ? "inRange" : "outOfRange"
            },
            findTargetDataIndices: function (t) {
                var e = [];
                return this.eachTargetSeries(function (i) {
                    var n = [], r = i.getData();
                    r.each(this.getDataDimension(r), function (e, i) {
                        t[0] <= e && e <= t[1] && n.push(i)
                    }, !0, this), e.push({seriesId: i.id, dataIndex: n})
                }, this), e
            },
            getStops: function (t, e) {
                var i = [];
                return r(this, "outOfRange", this.getExtent(), i), r(this, "inRange", this.option.range.slice(), i), a.each(i, function (t) {
                    t.color = e(this, t.value, t.valueState)
                }, this), i
            }
        });
        t.exports = u
    }, function (t, e, i) {
        function n(t, e, i, n) {
            return new u.Polygon({shape: {points: t}, draggable: !!i, cursor: e, drift: i, ondragend: n})
        }

        function r(t, e) {
            return 0 === t ? [[0, 0], [e, 0], [e, -e]] : [[0, 0], [e, 0], [e, e]]
        }

        function o(t, e, i, n) {
            return t ? [[0, -y(e, x(i, 0))], [b, 0], [0, y(e, x(n - i, 0))]] : [[0, 0], [5, -5], [5, 5]]
        }

        function a(t, e, i) {
            var n = _ / 2, r = t.get("hoverLinkDataSize");
            return r && (n = v(r, e, i, !0) / 2), n
        }

        function s(t) {
            return !t.get("realtime") && t.get("hoverLinkOnHandle")
        }

        var l = i(230), u = i(3), h = i(1), c = i(4), d = i(79), f = i(85), p = i(231), g = i(10), v = c.linearMap, m = h.each, y = Math.min, x = Math.max, _ = 12, b = 6, w = l.extend({
            type: "visualMap.continuous", init: function () {
                w.superApply(this, "init", arguments), this._shapes = {}, this._dataInterval = [], this._handleEnds = [], this._orient, this._useHandle, this._hoverLinkDataIndices = [], this._dragging, this._hovering
            }, doRender: function (t, e, i, n) {
                n && "selectDataRange" === n.type && n.from === this.uid || this._buildView()
            }, _buildView: function () {
                this.group.removeAll();
                var t = this.visualMapModel, e = this.group;
                this._orient = t.get("orient"), this._useHandle = t.get("calculable"), this._resetInterval(), this._renderBar(e);
                var i = t.get("text");
                this._renderEndsText(e, i, 0), this._renderEndsText(e, i, 1), this._updateView(!0), this.renderBackground(e), this._updateView(), this._enableHoverLinkToSeries(), this._enableHoverLinkFromSeries(), this.positionGroup(e)
            }, _renderEndsText: function (t, e, i) {
                if (e) {
                    var n = e[1 - i];
                    n = null != n ? n + "" : "";
                    var r = this.visualMapModel, o = r.get("textGap"), a = r.itemSize, s = this._shapes.barGroup, l = this._applyTransform([a[0] / 2, 0 === i ? -o : a[1] + o], s), h = this._applyTransform(0 === i ? "bottom" : "top", s), c = this._orient, d = this.visualMapModel.textStyleModel;
                    this.group.add(new u.Text({
                        style: {
                            x: l[0],
                            y: l[1],
                            textVerticalAlign: "horizontal" === c ? "middle" : h,
                            textAlign: "horizontal" === c ? h : "center",
                            text: n,
                            textFont: d.getFont(),
                            fill: d.getTextColor()
                        }
                    }))
                }
            }, _renderBar: function (t) {
                var e = this.visualMapModel, i = this._shapes, r = e.itemSize, o = this._orient, a = this._useHandle, s = p.getItemAlign(e, this.api, r), l = i.barGroup = this._createBarGroup(s);
                l.add(i.outOfRange = n()), l.add(i.inRange = n(null, a ? "move" : null, h.bind(this._dragHandle, this, "all", !1), h.bind(this._dragHandle, this, "all", !0)));
                var u = e.textStyleModel.getTextRect("国"), c = x(u.width, u.height);
                a && (i.handleThumbs = [], i.handleLabels = [], i.handleLabelPoints = [], this._createHandle(l, 0, r, c, o, s), this._createHandle(l, 1, r, c, o, s)), this._createIndicator(l, r, c, o), t.add(l)
            }, _createHandle: function (t, e, i, o, a) {
                var s = h.bind(this._dragHandle, this, e, !1), l = h.bind(this._dragHandle, this, e, !0), c = n(r(e, o), "move", s, l);
                c.position[0] = i[0], t.add(c);
                var d = this.visualMapModel.textStyleModel, f = new u.Text({
                    draggable: !0,
                    drift: s,
                    ondragend: l,
                    style: {x: 0, y: 0, text: "", textFont: d.getFont(), fill: d.getTextColor()}
                });
                this.group.add(f);
                var p = ["horizontal" === a ? o / 2 : 1.5 * o, "horizontal" === a ? 0 === e ? -(1.5 * o) : 1.5 * o : 0 === e ? -o / 2 : o / 2], g = this._shapes;
                g.handleThumbs[e] = c, g.handleLabelPoints[e] = p, g.handleLabels[e] = f
            }, _createIndicator: function (t, e, i, r) {
                var o = n([[0, 0]], "move");
                o.position[0] = e[0], o.attr({invisible: !0, silent: !0}), t.add(o);
                var a = this.visualMapModel.textStyleModel, s = new u.Text({
                    silent: !0,
                    invisible: !0,
                    style: {x: 0, y: 0, text: "", textFont: a.getFont(), fill: a.getTextColor()}
                });
                this.group.add(s);
                var l = ["horizontal" === r ? i / 2 : b + 3, 0], h = this._shapes;
                h.indicator = o, h.indicatorLabel = s, h.indicatorLabelPoint = l
            }, _dragHandle: function (t, e, i, n) {
                if (this._useHandle) {
                    if (this._dragging = !e, !e) {
                        var r = this._applyTransform([i, n], this._shapes.barGroup, !0);
                        this._updateInterval(t, r[1]), this._updateView()
                    }
                    e === !this.visualMapModel.get("realtime") && this.api.dispatchAction({
                        type: "selectDataRange",
                        from: this.uid,
                        visualMapId: this.visualMapModel.id,
                        selected: this._dataInterval.slice()
                    }), e ? !this._hovering && this._clearHoverLinkToSeries() : s(this.visualMapModel) && this._doHoverLinkToSeries(this._handleEnds[t], !1)
                }
            }, _resetInterval: function () {
                var t = this.visualMapModel, e = this._dataInterval = t.getSelected(), i = t.getExtent(), n = [0, t.itemSize[1]];
                this._handleEnds = [v(e[0], i, n, !0), v(e[1], i, n, !0)]
            }, _updateInterval: function (t, e) {
                e = e || 0;
                var i = this.visualMapModel, n = this._handleEnds;
                d(e, n, [0, i.itemSize[1]], "all" === t ? "rigid" : "push", t);
                var r = i.getExtent(), o = [0, i.itemSize[1]];
                this._dataInterval = [v(n[0], o, r, !0), v(n[1], o, r, !0)]
            }, _updateView: function (t) {
                var e = this.visualMapModel, i = e.getExtent(), n = this._shapes, r = [0, e.itemSize[1]], o = t ? r : this._handleEnds, a = this._createBarVisual(this._dataInterval, i, o, "inRange"), s = this._createBarVisual(i, i, r, "outOfRange");
                n.inRange.setStyle({
                    fill: a.barColor,
                    opacity: a.opacity
                }).setShape("points", a.barPoints), n.outOfRange.setStyle({
                    fill: s.barColor,
                    opacity: s.opacity
                }).setShape("points", s.barPoints), this._updateHandle(o, a)
            }, _createBarVisual: function (t, e, i, n) {
                var r = {
                    forceState: n,
                    convertOpacityToAlpha: !0
                }, o = this._makeColorGradient(t, r), a = [this.getControllerVisual(t[0], "symbolSize", r), this.getControllerVisual(t[1], "symbolSize", r)], s = this._createBarPoints(i, a);
                return {barColor: new f(0, 0, 1, 1, o), barPoints: s, handlesColor: [o[0].color, o[o.length - 1].color]}
            }, _makeColorGradient: function (t, e) {
                var i = 100, n = [], r = (t[1] - t[0]) / i;
                n.push({color: this.getControllerVisual(t[0], "color", e), offset: 0});
                for (var o = 1; i > o; o++) {
                    var a = t[0] + r * o;
                    if (a > t[1])break;
                    n.push({color: this.getControllerVisual(a, "color", e), offset: o / i})
                }
                return n.push({color: this.getControllerVisual(t[1], "color", e), offset: 1}), n
            }, _createBarPoints: function (t, e) {
                var i = this.visualMapModel.itemSize;
                return [[i[0] - e[0], t[0]], [i[0], t[0]], [i[0], t[1]], [i[0] - e[1], t[1]]]
            }, _createBarGroup: function (t) {
                var e = this._orient, i = this.visualMapModel.get("inverse");
                return new u.Group("horizontal" !== e || i ? "horizontal" === e && i ? {
                    scale: "bottom" === t ? [-1, 1] : [1, 1],
                    rotation: -Math.PI / 2
                } : "vertical" !== e || i ? {scale: "left" === t ? [1, 1] : [-1, 1]} : {scale: "left" === t ? [1, -1] : [-1, -1]} : {
                    scale: "bottom" === t ? [1, 1] : [-1, 1],
                    rotation: Math.PI / 2
                })
            }, _updateHandle: function (t, e) {
                if (this._useHandle) {
                    var i = this._shapes, n = this.visualMapModel, r = i.handleThumbs, o = i.handleLabels;
                    m([0, 1], function (a) {
                        var s = r[a];
                        s.setStyle("fill", e.handlesColor[a]), s.position[1] = t[a];
                        var l = u.applyTransform(i.handleLabelPoints[a], u.getTransform(s, this.group));
                        o[a].setStyle({
                            x: l[0],
                            y: l[1],
                            text: n.formatValueText(this._dataInterval[a]),
                            textVerticalAlign: "middle",
                            textAlign: this._applyTransform("horizontal" === this._orient ? 0 === a ? "bottom" : "top" : "left", i.barGroup)
                        })
                    }, this)
                }
            }, _showIndicator: function (t, e, i, n) {
                var r = this.visualMapModel, a = r.getExtent(), s = r.itemSize, l = [0, s[1]], h = v(t, a, l, !0), c = this._shapes, d = c.indicator;
                if (d) {
                    d.position[1] = h, d.attr("invisible", !1), d.setShape("points", o(!!i, n, h, s[1]));
                    var f = {convertOpacityToAlpha: !0}, p = this.getControllerVisual(t, "color", f);
                    d.setStyle("fill", p);
                    var g = u.applyTransform(c.indicatorLabelPoint, u.getTransform(d, this.group)), m = c.indicatorLabel;
                    m.attr("invisible", !1);
                    var y = this._applyTransform("left", c.barGroup), x = this._orient;
                    m.setStyle({
                        text: (i ? i : "") + r.formatValueText(e),
                        textVerticalAlign: "horizontal" === x ? y : "middle",
                        textAlign: "horizontal" === x ? "center" : y,
                        x: g[0],
                        y: g[1]
                    })
                }
            }, _enableHoverLinkToSeries: function () {
                var t = this;
                this._shapes.barGroup.on("mousemove", function (e) {
                    if (t._hovering = !0, !t._dragging) {
                        var i = t.visualMapModel.itemSize, n = t._applyTransform([e.offsetX, e.offsetY], t._shapes.barGroup, !0, !0);
                        n[1] = y(x(0, n[1]), i[1]), t._doHoverLinkToSeries(n[1], 0 <= n[0] && n[0] <= i[0])
                    }
                }).on("mouseout", function () {
                    t._hovering = !1, !t._dragging && t._clearHoverLinkToSeries()
                })
            }, _enableHoverLinkFromSeries: function () {
                var t = this.api.getZr();
                this.visualMapModel.option.hoverLink ? (t.on("mouseover", this._hoverLinkFromSeriesMouseOver, this), t.on("mouseout", this._hideIndicator, this)) : this._clearHoverLinkFromSeries()
            }, _doHoverLinkToSeries: function (t, e) {
                var i = this.visualMapModel, n = i.itemSize;
                if (i.option.hoverLink) {
                    var r = [0, n[1]], o = i.getExtent();
                    t = y(x(r[0], t), r[1]);
                    var l = a(i, o, r), u = [t - l, t + l], h = v(t, r, o, !0), c = [v(u[0], r, o, !0), v(u[1], r, o, !0)];
                    u[0] < r[0] && (c[0] = -(1 / 0)), u[1] > r[1] && (c[1] = 1 / 0), e && (c[0] === -(1 / 0) ? this._showIndicator(h, c[1], "< ", l) : c[1] === 1 / 0 ? this._showIndicator(h, c[0], "> ", l) : this._showIndicator(h, h, "≈ ", l));
                    var d = this._hoverLinkDataIndices, f = [];
                    (e || s(i)) && (f = this._hoverLinkDataIndices = i.findTargetDataIndices(c));
                    var p = g.compressBatches(d, f);
                    this._dispatchHighDown("downplay", p[0]), this._dispatchHighDown("highlight", p[1])
                }
            }, _hoverLinkFromSeriesMouseOver: function (t) {
                var e = t.target;
                if (e && null != e.dataIndex) {
                    var i = e.dataModel || this.ecModel.getSeriesByIndex(e.seriesIndex), n = i.getData(e.dataType), r = n.getDimension(this.visualMapModel.getDataDimension(n)), o = n.get(r, e.dataIndex, !0);
                    isNaN(o) || this._showIndicator(o, o)
                }
            }, _hideIndicator: function () {
                var t = this._shapes;
                t.indicator && t.indicator.attr("invisible", !0), t.indicatorLabel && t.indicatorLabel.attr("invisible", !0)
            }, _clearHoverLinkToSeries: function () {
                this._hideIndicator();
                var t = this._hoverLinkDataIndices;
                this._dispatchHighDown("downplay", t), t.length = 0
            }, _clearHoverLinkFromSeries: function () {
                this._hideIndicator();
                var t = this.api.getZr();
                t.off("mouseover", this._hoverLinkFromSeriesMouseOver), t.off("mouseout", this._hideIndicator)
            }, _applyTransform: function (t, e, i, n) {
                var r = u.getTransform(e, n ? null : this.group);
                return u[h.isArray(t) ? "applyTransform" : "transformDirection"](t, r, i)
            }, _dispatchHighDown: function (t, e) {
                e && e.length && this.api.dispatchAction({type: t, batch: e})
            }, dispose: function () {
                this._clearHoverLinkFromSeries(), this._clearHoverLinkToSeries()
            }, remove: function () {
                this._clearHoverLinkFromSeries(), this._clearHoverLinkToSeries()
            }
        });
        t.exports = w
    }, function (t, e, i) {
        function n(t, e) {
            var i = t.inverse;
            ("vertical" === t.orient ? !i : i) && e.reverse()
        }

        function r(t) {
            function e(t, i, n) {
                return n = n || 0, t.interval[n] < i.interval[n] || t.interval[n] === i.interval[n] && (+t.close[n] > i.close[n] || e(t, i, 1))
            }

            t.sort(function (t, i) {
                return e(t, i) ? -1 : 1
            });
            for (var i = -(1 / 0), n = 0; n < t.length; n++)for (var r = t[n].interval, o = t[n].close, a = 0; 2 > a; a++)r[a] < i && (r[a] = i, o[a] = 1 - a), i = r[a]
        }

        var o = i(229), a = i(1), s = i(71), l = o.extend({
            type: "visualMap.piecewise",
            defaultOption: {
                selected: null,
                align: "auto",
                itemWidth: 20,
                itemHeight: 14,
                itemSymbol: "roundRect",
                pieceList: null,
                categories: null,
                splitNumber: 5,
                selectedMode: "multiple",
                itemGap: 10,
                hoverLink: !0
            },
            optionUpdated: function (t, e) {
                l.superApply(this, "optionUpdated", arguments), this._pieceList = [], this.resetTargetSeries(), this.resetExtent();
                var i = this._mode = this._determineMode();
                u[this._mode].call(this), this._resetSelected(t, e);
                var n = this.option.categories;
                this.resetVisual(function (t, e) {
                    "categories" === i ? (t.mappingMethod = "category", t.categories = a.clone(n)) : (t.dataExtent = this.getExtent(), t.mappingMethod = "piecewise", t.pieceList = a.map(this._pieceList, function (t) {
                        var t = a.clone(t);
                        return "inRange" !== e && (t.visual = null), t
                    }))
                })
            },
            _resetSelected: function (t, e) {
                var i = this.option, n = this._pieceList, r = (e ? i : t).selected || {};
                if (i.selected = r, a.each(n, function (t, e) {
                        var i = this.getSelectedMapKey(t);
                        i in r || (r[i] = !0)
                    }, this), "single" === i.selectedMode) {
                    var o = !1;
                    a.each(n, function (t, e) {
                        var i = this.getSelectedMapKey(t);
                        r[i] && (o ? r[i] = !1 : o = !0)
                    }, this)
                }
            },
            getSelectedMapKey: function (t) {
                return "categories" === this._mode ? t.value + "" : t.index + ""
            },
            getPieceList: function () {
                return this._pieceList
            },
            _determineMode: function () {
                var t = this.option;
                return t.pieces && t.pieces.length > 0 ? "pieces" : this.option.categories ? "categories" : "splitNumber"
            },
            setSelected: function (t) {
                this.option.selected = a.clone(t)
            },
            getValueState: function (t) {
                var e = s.findPieceIndex(t, this._pieceList);
                return null != e && this.option.selected[this.getSelectedMapKey(this._pieceList[e])] ? "inRange" : "outOfRange"
            },
            findTargetDataIndices: function (t) {
                var e = [];
                return this.eachTargetSeries(function (i) {
                    var n = [], r = i.getData();
                    r.each(this.getDataDimension(r), function (e, i) {
                        var r = s.findPieceIndex(e, this._pieceList);
                        r === t && n.push(i)
                    }, !0, this), e.push({seriesId: i.id, dataIndex: n})
                }, this), e
            },
            getRepresentValue: function (t) {
                var e;
                if (this.isCategory())e = t.value; else if (null != t.value)e = t.value; else {
                    var i = t.interval || [];
                    e = (i[0] + i[1]) / 2
                }
                return e
            },
            getStops: function (t, e) {
                function i(t) {
                    n.push(t), t.color = e(r, r.getRepresentValue(t), t.valueState)
                }

                var n = [], r = this, o = -(1 / 0);
                return a.each(this._pieceList, function (t) {
                    var e = t.interval;
                    e && (e[0] > o && i({interval: [o, e[0]], valueState: "outOfRange"}), i({
                        interval: e.slice(),
                        valueState: this.getValueState((e[0] + e[1]) / 2)
                    }), o = e[1])
                }, this), n
            }
        }), u = {
            splitNumber: function () {
                var t = this.option, e = this._pieceList, i = t.precision, n = this.getExtent(), o = t.splitNumber;
                o = Math.max(parseInt(o, 10), 1), t.splitNumber = o;
                for (var s = (n[1] - n[0]) / o; +s.toFixed(i) !== s && 5 > i;)i++;
                t.precision = i, s = +s.toFixed(i);
                for (var l = 0, u = n[0]; o > l; l++, u += s) {
                    var h = l === o - 1 ? n[1] : u + s;
                    e.push({index: l, interval: [u, h], close: [1, 1]})
                }
                r(e), a.each(e, function (t) {
                    t.text = this.formatValueText(t.interval)
                }, this)
            }, categories: function () {
                var t = this.option;
                a.each(t.categories, function (t) {
                    this._pieceList.push({text: this.formatValueText(t, !0), value: t})
                }, this), n(t, this._pieceList)
            }, pieces: function () {
                var t = this.option, e = this._pieceList;
                a.each(t.pieces, function (t, i) {
                    a.isObject(t) || (t = {value: t});
                    var n = {text: "", index: i};
                    if (null != t.label && (n.text = t.label), t.hasOwnProperty("value")) {
                        var r = n.value = t.value;
                        n.interval = [r, r], n.close = [1, 1]
                    } else {
                        for (var o = n.interval = [], l = n.close = [0, 0], u = [1, 0, 1], h = [-(1 / 0), 1 / 0], c = [], d = 0; 2 > d; d++) {
                            for (var f = [["gte", "gt", "min"], ["lte", "lt", "max"]][d], p = 0; 3 > p && null == o[d]; p++)o[d] = t[f[p]], l[d] = u[p], c[d] = 2 === p;
                            null == o[d] && (o[d] = h[d])
                        }
                        c[0] && o[1] === 1 / 0 && (l[0] = 0), c[1] && o[0] === -(1 / 0) && (l[1] = 0), o[0] === o[1] && l[0] && l[1] && (n.value = o[0])
                    }
                    n.visual = s.retrieveVisuals(t), e.push(n)
                }, this), n(t, e), r(e), a.each(e, function (t) {
                    var e = t.close, i = [["<", "≤"][e[1]], [">", "≥"][e[0]]];
                    t.text = t.text || this.formatValueText(null != t.value ? t.value : t.interval, !1, i)
                }, this)
            }
        };
        t.exports = l
    }, function (t, e, i) {
        var n = i(230), r = i(1), o = i(3), a = i(26), s = i(13), l = i(231), u = n.extend({
            type: "visualMap.piecewise",
            doRender: function () {
                function t(t) {
                    var a = t.piece, s = new o.Group;
                    s.onclick = r.bind(this._onItemClick, this, a), this._enableHoverLink(s, t.indexInModelPieceList);
                    var d = i.getRepresentValue(a);
                    if (this._createItemSymbol(s, d, [0, 0, c[0], c[1]]), f) {
                        var p = this.visualMapModel.getValueState(d);
                        s.add(new o.Text({
                            style: {
                                x: "right" === h ? -n : c[0] + n,
                                y: c[1] / 2,
                                text: a.text,
                                textVerticalAlign: "middle",
                                textAlign: h,
                                textFont: l,
                                fill: u,
                                opacity: "outOfRange" === p ? .5 : 1
                            }
                        }))
                    }
                    e.add(s)
                }

                var e = this.group;
                e.removeAll();
                var i = this.visualMapModel, n = i.get("textGap"), a = i.textStyleModel, l = a.getFont(), u = a.getTextColor(), h = this._getItemAlign(), c = i.itemSize, d = this._getViewData(), f = !d.endsText, p = !f;
                p && this._renderEndsText(e, d.endsText[0], c), r.each(d.viewPieceList, t, this), p && this._renderEndsText(e, d.endsText[1], c), s.box(i.get("orient"), e, i.get("itemGap")), this.renderBackground(e), this.positionGroup(e)
            },
            _enableHoverLink: function (t, e) {
                function i(t) {
                    var i = this.visualMapModel;
                    i.option.hoverLink && this.api.dispatchAction({type: t, batch: i.findTargetDataIndices(e)})
                }

                t.on("mouseover", r.bind(i, this, "highlight")).on("mouseout", r.bind(i, this, "downplay"))
            },
            _getItemAlign: function () {
                var t = this.visualMapModel, e = t.option;
                if ("vertical" === e.orient)return l.getItemAlign(t, this.api, t.itemSize);
                var i = e.align;
                return i && "auto" !== i || (i = "left"), i
            },
            _renderEndsText: function (t, e, i) {
                if (e) {
                    var n = new o.Group, r = this.visualMapModel.textStyleModel;
                    n.add(new o.Text({
                        style: {
                            x: i[0] / 2,
                            y: i[1] / 2,
                            textVerticalAlign: "middle",
                            textAlign: "center",
                            text: e,
                            textFont: r.getFont(),
                            fill: r.getTextColor()
                        }
                    })), t.add(n)
                }
            },
            _getViewData: function () {
                var t = this.visualMapModel, e = r.map(t.getPieceList(), function (t, e) {
                    return {piece: t, indexInModelPieceList: e}
                }), i = t.get("text"), n = t.get("orient"), o = t.get("inverse");
                return ("horizontal" === n ? o : !o) ? e.reverse() : i && (i = i.slice().reverse()), {
                    viewPieceList: e,
                    endsText: i
                }
            },
            _createItemSymbol: function (t, e, i) {
                t.add(a.createSymbol(this.getControllerVisual(e, "symbol"), i[0], i[1], i[2], i[3], this.getControllerVisual(e, "color")))
            },
            _onItemClick: function (t) {
                var e = this.visualMapModel, i = e.option, n = r.clone(i.selected), o = e.getSelectedMapKey(t);
                "single" === i.selectedMode ? (n[o] = !0, r.each(n, function (t, e) {
                    n[e] = e === o
                })) : n[o] = !n[o], this.api.dispatchAction({
                    type: "selectDataRange",
                    from: this.uid,
                    visualMapId: this.visualMapModel.id,
                    selected: n
                })
            }
        });
        t.exports = u
    }, function (t, e, i) {
        i(2).registerPreprocessor(i(232)), i(233), i(234), i(348), i(349), i(235)
    }, function (t, e, i) {
        i(2).registerPreprocessor(i(232)), i(233), i(234), i(350), i(351), i(235)
    }, function (t, e, i) {
        function n(t, e, i, n, r) {
            s.call(this, t), this.map = e, this._nameCoordMap = {}, this.loadGeoJson(i, n, r)
        }

        var r = i(359), o = i(1), a = i(7), s = i(236), l = [i(357), i(358), i(356)];
        n.prototype = {
            constructor: n, type: "geo", dimensions: ["lng", "lat"], containCoord: function (t) {
                for (var e = this.regions, i = 0; i < e.length; i++)if (e[i].contain(t))return !0;
                return !1
            }, loadGeoJson: function (t, e, i) {
                try {
                    this.regions = t ? r(t) : []
                } catch (n) {
                    throw"Invalid geoJson format\n" + n
                }
                e = e || {}, i = i || {};
                for (var a = this.regions, s = {}, u = 0; u < a.length; u++) {
                    var h = a[u].name;
                    h = i[h] || h, a[u].name = h, s[h] = a[u], this.addGeoCoord(h, a[u].center);
                    var c = e[h];
                    c && a[u].transformTo(c.left, c.top, c.width, c.height)
                }
                this._regionsMap = s, this._rect = null, o.each(l, function (t) {
                    t(this)
                }, this)
            }, transformTo: function (t, e, i, n) {
                var r = this.getBoundingRect();
                r = r.clone(), r.y = -r.y - r.height;
                var o = this._viewTransform;
                o.transform = r.calculateTransform(new a(t, e, i, n)), o.decomposeTransform();
                var s = o.scale;
                s[1] = -s[1], o.updateTransform(), this._updateTransform()
            }, getRegion: function (t) {
                return this._regionsMap[t]
            }, getRegionByCoord: function (t) {
                for (var e = this.regions, i = 0; i < e.length; i++)if (e[i].contain(t))return e[i]
            }, addGeoCoord: function (t, e) {
                this._nameCoordMap[t] = e
            }, getGeoCoord: function (t) {
                return this._nameCoordMap[t]
            }, getBoundingRect: function () {
                if (this._rect)return this._rect;
                for (var t, e = this.regions, i = 0; i < e.length; i++) {
                    var n = e[i].getBoundingRect();
                    t = t || n.clone(), t.union(n)
                }
                return this._rect = t || new a(0, 0, 0, 0)
            }, dataToPoints: function (t) {
                var e = [];
                return t.mapArray(["lng", "lat"], function (t, i) {
                    return e[0] = t, e[1] = i, this.dataToPoint(e)
                }, this)
            }, dataToPoint: function (t) {
                return "string" == typeof t && (t = this.getGeoCoord(t)), t ? s.prototype.dataToPoint.call(this, t) : void 0
            }
        }, o.mixin(n, s), t.exports = n
    }, function (t, e, i) {
        "use strict";
        var n = i(10), r = i(11), o = i(8), a = i(1), s = i(66), l = i(170), u = r.extend({
            type: "geo",
            coordinateSystem: null,
            layoutMode: "box",
            init: function (t) {
                r.prototype.init.apply(this, arguments), n.defaultEmphasis(t.label, ["position", "show", "textStyle", "distance", "formatter"])
            },
            optionUpdated: function () {
                var t = this.option, e = this;
                t.regions = l.getFilledRegions(t.regions, t.map), this._optionModelMap = a.reduce(t.regions || [], function (t, i) {
                    return i.name && (t[i.name] = new o(i, e)), t
                }, {}), this.updateSelectedMap(t.regions)
            },
            defaultOption: {
                zlevel: 0,
                z: 0,
                show: !0,
                left: "center",
                top: "center",
                aspectScale: .75,
                silent: !1,
                map: "",
                center: null,
                zoom: 1,
                scaleLimit: null,
                label: {
                    normal: {show: !1, textStyle: {color: "#000"}},
                    emphasis: {show: !0, textStyle: {color: "rgb(100,0,0)"}}
                },
                itemStyle: {
                    normal: {borderWidth: .5, borderColor: "#444", color: "#eee"},
                    emphasis: {color: "rgba(255,215,0,0.8)"}
                },
                regions: []
            },
            getRegionModel: function (t) {
                return this._optionModelMap[t]
            },
            getFormattedLabel: function (t, e) {
                var i = this.get("label." + e + ".formatter"), n = {name: t};
                return "function" == typeof i ? (n.status = e, i(n)) : "string" == typeof i ? i.replace("{a}", n.seriesName) : void 0
            },
            setZoom: function (t) {
                this.option.zoom = t
            },
            setCenter: function (t) {
                this.option.center = t
            }
        });
        a.mixin(u, s), t.exports = u
    }, function (t, e, i) {
        var n = i(1), r = {Russia: [100, 60], "United States of America": [-99, 38]};
        t.exports = function (t) {
            n.each(t.regions, function (t) {
                var e = r[t.name];
                if (e) {
                    var i = t.center;
                    i[0] = e[0], i[1] = e[1]
                }
            })
        }
    }, function (t, e, i) {
        for (var n = i(237), r = [126, 25], o = [[[0, 3.5], [7, 11.2], [15, 11.9], [30, 7], [42, .7], [52, .7], [56, 7.7], [59, .7], [64, .7], [64, 0], [5, 0], [0, 3.5]], [[13, 16.1], [19, 14.7], [16, 21.7], [11, 23.1], [13, 16.1]], [[12, 32.2], [14, 38.5], [15, 38.5], [13, 32.2], [12, 32.2]], [[16, 47.6], [12, 53.2], [13, 53.2], [18, 47.6], [16, 47.6]], [[6, 64.4], [8, 70], [9, 70], [8, 64.4], [6, 64.4]], [[23, 82.6], [29, 79.8], [30, 79.8], [25, 82.6], [23, 82.6]], [[37, 70.7], [43, 62.3], [44, 62.3], [39, 70.7], [37, 70.7]], [[48, 51.1], [51, 45.5], [53, 45.5], [50, 51.1], [48, 51.1]], [[51, 35], [51, 28.7], [53, 28.7], [53, 35], [51, 35]], [[52, 22.4], [55, 17.5], [56, 17.5], [53, 22.4], [52, 22.4]], [[58, 12.6], [62, 7], [63, 7], [60, 12.6], [58, 12.6]], [[0, 3.5], [0, 93.1], [64, 93.1], [64, 0], [63, 0], [63, 92.4], [1, 92.4], [1, 3.5], [0, 3.5]]], a = 0; a < o.length; a++)for (var s = 0; s < o[a].length; s++)o[a][s][0] /= 10.5, o[a][s][1] /= -14, o[a][s][0] += r[0], o[a][s][1] += r[1];
        t.exports = function (t) {
            "china" === t.map && t.regions.push(new n("南海诸岛", o, r))
        }
    }, function (t, e, i) {
        var n = i(1), r = {"南海诸岛": [32, 80], "广东": [0, -10], "香港": [10, 5], "澳门": [-10, 10], "天津": [5, 5]};
        t.exports = function (t) {
            n.each(t.regions, function (t) {
                var e = r[t.name];
                if (e) {
                    var i = t.center;
                    i[0] += e[0] / 10.5, i[1] += -e[1] / 14
                }
            })
        }
    }, function (t, e, i) {
        function n(t) {
            if (!t.UTF8Encoding)return t;
            for (var e = t.features, i = 0; i < e.length; i++)for (var n = e[i], o = n.geometry, a = o.coordinates, s = o.encodeOffsets, l = 0; l < a.length; l++) {
                var u = a[l];
                if ("Polygon" === o.type)a[l] = r(u, s[l]); else if ("MultiPolygon" === o.type)for (var h = 0; h < u.length; h++) {
                    var c = u[h];
                    u[h] = r(c, s[l][h])
                }
            }
            return t.UTF8Encoding = !1, t
        }

        function r(t, e) {
            for (var i = [], n = e[0], r = e[1], o = 0; o < t.length; o += 2) {
                var a = t.charCodeAt(o) - 64, s = t.charCodeAt(o + 1) - 64;
                a = a >> 1 ^ -(1 & a), s = s >> 1 ^ -(1 & s), a += n, s += r, n = a, r = s, i.push([a / 1024, s / 1024])
            }
            return i
        }

        function o(t) {
            for (var e = [], i = 0; i < t.length; i++)for (var n = 0; n < t[i].length; n++)e.push(t[i][n]);
            return e
        }

        var a = i(1), s = i(237);
        t.exports = function (t) {
            return n(t), a.map(a.filter(t.features, function (t) {
                return t.geometry && t.properties
            }), function (t) {
                var e = t.properties, i = t.geometry, n = i.coordinates;
                return "MultiPolygon" === i.type && (n = o(n)), new s(e.name, n, e.cp)
            })
        }
    }, function (t, e, i) {
        function n(t, e) {
            return e.type || (e.data ? "category" : "value")
        }

        var r = i(11), o = i(1), a = i(31), s = i(52), l = i(4), u = r.extend({
            type: "baseParallelAxis",
            axis: null,
            activeIntervals: [],
            getAreaSelectStyle: function () {
                return a([["fill", "color"], ["lineWidth", "borderWidth"], ["stroke", "borderColor"], ["width", "width"], ["opacity", "opacity"]]).call(this.getModel("areaSelectStyle"))
            },
            setActiveIntervals: function (t) {
                var e = this.activeIntervals = o.clone(t);
                if (e)for (var i = e.length - 1; i >= 0; i--)l.asc(e[i])
            },
            getActiveState: function (t) {
                var e = this.activeIntervals;
                if (!e.length)return "normal";
                if (null == t)return "inactive";
                for (var i = 0, n = e.length; n > i; i++)if (e[i][0] <= t && t <= e[i][1])return "active";
                return "inactive"
            }
        }), h = {
            type: "value",
            dim: null,
            parallelIndex: null,
            areaSelectStyle: {
                width: 20,
                borderWidth: 1,
                borderColor: "rgba(160,197,232)",
                color: "rgba(160,197,232)",
                opacity: .3
            },
            realtime: !0,
            z: 10
        };
        o.merge(u.prototype, i(51)), s("parallel", u, n, h), t.exports = u
    }, function (t, e, i) {
        function n(t, e, i) {
            this._axesMap = {}, this._axesLayout = {}, this.dimensions = t.dimensions, this._rect, this._model = t, this._init(t, e, i)
        }

        var r = i(13), o = i(22), a = i(1), s = i(362), l = i(3), u = i(19), h = a.each, c = Math.PI;
        n.prototype = {
            type: "parallel", constructor: n, _init: function (t, e, i) {
                var n = t.dimensions, r = t.parallelAxisIndex;
                h(n, function (t, i) {
                    var n = r[i], a = e.getComponent("parallelAxis", n), l = this._axesMap[t] = new s(t, o.createScaleByModel(a), [0, 0], a.get("type"), n), u = "category" === l.type;
                    l.onBand = u && a.get("boundaryGap"), l.inverse = a.get("inverse"), a.axis = l, l.model = a
                }, this)
            }, update: function (t, e) {
                this._updateAxesFromSeries(this._model, t)
            }, _updateAxesFromSeries: function (t, e) {
                e.eachSeries(function (i) {
                    if (t.contains(i, e)) {
                        var n = i.getData();
                        h(this.dimensions, function (t) {
                            var e = this._axesMap[t];
                            e.scale.unionExtent(n.getDataExtent(t)), o.niceScaleExtent(e, e.model)
                        }, this)
                    }
                }, this)
            }, resize: function (t, e) {
                this._rect = r.getLayoutRect(t.getBoxLayoutParams(), {
                    width: e.getWidth(),
                    height: e.getHeight()
                }), this._layoutAxes(t)
            }, getRect: function () {
                return this._rect
            }, _layoutAxes: function (t) {
                var e = this._rect, i = t.get("layout"), n = this._axesMap, r = this.dimensions, o = [e.width, e.height], a = "horizontal" === i ? 0 : 1, s = o[a], l = o[1 - a], d = [0, l];
                h(n, function (t) {
                    var e = t.inverse ? 1 : 0;
                    t.setExtent(d[e], d[1 - e])
                });
                var f, p = t.get("axisExpandable"), g = t.get("axisExpandWidth"), v = t.get("axisExpandCenter"), m = t.get("axisExpandCount") || 0;
                if (null != v) {
                    var y = Math.max(0, Math.floor(v - (m - 1) / 2)), x = y + m - 1;
                    x >= r.length && (x = r.length - 1, y = Math.max(0, Math.floor(x - m + 1))), f = [y, x]
                }
                var _ = p && f && g ? function (t, e, i) {
                    var n, r = f[1] - f[0], o = (e - g * r) / (i - 1 - r);
                    return n = t < f[0] ? (t - 1) * o : t <= f[1] ? f[0] * o + (t - f[0]) * g : t === i - 1 ? e : f[0] * o + r * g + (t - f[1]) * o, {
                        position: n,
                        axisNameAvailableWidth: f[0] < t && t < f[1] ? g : o
                    }
                } : function (t, e, i) {
                    var n = e / (i - 1);
                    return {position: n * t, axisNameAvailableWidth: n}
                };
                h(r, function (t, n) {
                    var o = _(n, s, r.length), a = {
                        horizontal: {x: o.position, y: l},
                        vertical: {x: 0, y: o.position}
                    }, h = {horizontal: c / 2, vertical: 0}, d = [a[i].x + e.x, a[i].y + e.y], p = h[i], g = u.create();
                    u.rotate(g, g, p), u.translate(g, g, d), this._axesLayout[t] = {
                        position: d,
                        rotation: p,
                        transform: g,
                        axisNameAvailableWidth: o.axisNameAvailableWidth,
                        tickDirection: 1,
                        labelDirection: 1,
                        axisExpandWindow: f
                    }
                }, this)
            }, getAxis: function (t) {
                return this._axesMap[t]
            }, dataToPoint: function (t, e) {
                return this.axisCoordToPoint(this._axesMap[e].dataToCoord(t), e)
            }, eachActiveState: function (t, e, i) {
                for (var n = this.dimensions, r = this._axesMap, o = this.hasAxisbrushed(), a = 0, s = t.count(); s > a; a++) {
                    var l, u = t.getValues(n, a);
                    if (o) {
                        l = "active";
                        for (var h = 0, c = n.length; c > h; h++) {
                            var d = n[h], f = r[d].model.getActiveState(u[h], h);
                            if ("inactive" === f) {
                                l = "inactive";
                                break
                            }
                        }
                    } else l = "normal";
                    e.call(i, l, a)
                }
            }, hasAxisbrushed: function () {
                for (var t = this.dimensions, e = this._axesMap, i = !1, n = 0, r = t.length; r > n; n++)"normal" !== e[t[n]].model.getActiveState() && (i = !0);
                return i
            }, axisCoordToPoint: function (t, e) {
                var i = this._axesLayout[e];
                return l.applyTransform([t, 0], i.transform)
            }, getAxisLayout: function (t) {
                return a.clone(this._axesLayout[t])
            }, findClosestAxisDim: function (t) {
                var e, i = 1 / 0;
                return a.each(this._axesLayout, function (n, r) {
                    var o = l.applyTransform(t, n.transform, !0), a = this._axesMap[r].getExtent();
                    if (!(o[0] < a[0] || o[0] > a[1])) {
                        var s = Math.abs(o[1]);
                        i > s && (i = s, e = r)
                    }
                }, this), e
            }
        }, t.exports = n
    }, function (t, e, i) {
        var n = i(1), r = i(42), o = function (t, e, i, n, o) {
            r.call(this, t, e, i), this.type = n || "value", this.axisIndex = o
        };
        o.prototype = {constructor: o, model: null}, n.inherits(o, r), t.exports = o
    }, function (t, e, i) {
        var n = i(1), r = i(11);
        i(360), r.extend({
            type: "parallel",
            dependencies: ["parallelAxis"],
            coordinateSystem: null,
            dimensions: null,
            parallelAxisIndex: null,
            layoutMode: "box",
            defaultOption: {
                zlevel: 0,
                z: 0,
                left: 80,
                top: 60,
                right: 80,
                bottom: 60,
                layout: "horizontal",
                axisExpandable: !1,
                axisExpandCenter: null,
                axisExpandCount: 0,
                axisExpandWidth: 50,
                parallelAxisDefault: null
            },
            init: function () {
                r.prototype.init.apply(this, arguments), this.mergeOption({})
            },
            mergeOption: function (t) {
                var e = this.option;
                t && n.merge(e, t, !0), this._initDimensions()
            },
            contains: function (t, e) {
                var i = t.get("parallelIndex");
                return null != i && e.getComponent("parallel", i) === this
            },
            setAxisExpand: function (t) {
                n.each(["axisExpandable", "axisExpandCenter", "axisExpandCount", "axisExpandWidth"], function (e) {
                    t.hasOwnProperty(e) && (this.option[e] = t[e])
                }, this)
            },
            _initDimensions: function () {
                var t = this.dimensions = [], e = this.parallelAxisIndex = [], i = n.filter(this.dependentModels.parallelAxis, function (t) {
                    return t.get("parallelIndex") === this.componentIndex
                });
                n.each(i, function (i) {
                    t.push("dim" + i.get("dim")), e.push(i.componentIndex)
                })
            }
        })
    }, function (t, e, i) {
        function n(t) {
            if (!t.parallel) {
                var e = !1;
                o.each(t.series, function (t) {
                    t && "parallel" === t.type && (e = !0)
                }), e && (t.parallel = [{}])
            }
        }

        function r(t) {
            var e = a.normalizeToArray(t.parallelAxis);
            o.each(e, function (e) {
                if (o.isObject(e)) {
                    var i = e.parallelIndex || 0, n = a.normalizeToArray(t.parallel)[i];
                    n && n.parallelAxisDefault && o.merge(e, n.parallelAxisDefault, !1)
                }
            })
        }

        var o = i(1), a = i(10);
        t.exports = function (t) {
            n(t), r(t)
        }
    }, function (t, e, i) {
        "use strict";
        function n(t, e) {
            e = e || [0, 360], o.call(this, "angle", t, e), this.type = "category"
        }

        var r = i(1), o = i(42);
        n.prototype = {
            constructor: n,
            dataToAngle: o.prototype.dataToCoord,
            angleToData: o.prototype.coordToData
        }, r.inherits(n, o), t.exports = n
    }, function (t, e, i) {
        "use strict";
        function n(t, e) {
            return e.type || (e.data ? "category" : "value")
        }

        var r = i(1), o = i(11), a = i(52), s = o.extend({type: "polarAxis", axis: null});
        r.merge(s.prototype, i(51));
        var l = {
            angle: {polarIndex: 0, startAngle: 90, clockwise: !0, splitNumber: 12, axisLabel: {rotate: !1}},
            radius: {polarIndex: 0, splitNumber: 5}
        };
        a("angle", s, n, l.angle), a("radius", s, n, l.radius)
    }, function (t, e, i) {
        "use strict";
        var n = i(369), r = i(365), o = function (t) {
            this.name = t || "", this.cx = 0, this.cy = 0, this._radiusAxis = new n, this._angleAxis = new r
        };
        o.prototype = {
            constructor: o, type: "polar", dimensions: ["radius", "angle"], containPoint: function (t) {
                var e = this.pointToCoord(t);
                return this._radiusAxis.contain(e[0]) && this._angleAxis.contain(e[1])
            }, containData: function (t) {
                return this._radiusAxis.containData(t[0]) && this._angleAxis.containData(t[1])
            }, getAxis: function (t) {
                return this["_" + t + "Axis"]
            }, getAxesByScale: function (t) {
                var e = [], i = this._angleAxis, n = this._radiusAxis;
                return i.scale.type === t && e.push(i), n.scale.type === t && e.push(n), e
            }, getAngleAxis: function () {
                return this._angleAxis
            }, getRadiusAxis: function () {
                return this._radiusAxis
            }, getOtherAxis: function (t) {
                var e = this._angleAxis;
                return t === e ? this._radiusAxis : e
            }, getBaseAxis: function () {
                return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAngleAxis()
            }, dataToPoints: function (t) {
                return t.mapArray(this.dimensions, function (t, e) {
                    return this.dataToPoint([t, e])
                }, this)
            }, dataToPoint: function (t, e) {
                return this.coordToPoint([this._radiusAxis.dataToRadius(t[0], e), this._angleAxis.dataToAngle(t[1], e)])
            }, pointToData: function (t, e) {
                var i = this.pointToCoord(t);
                return [this._radiusAxis.radiusToData(i[0], e), this._angleAxis.angleToData(i[1], e)]
            }, pointToCoord: function (t) {
                var e = t[0] - this.cx, i = t[1] - this.cy, n = this.getAngleAxis(), r = n.getExtent(), o = Math.min(r[0], r[1]), a = Math.max(r[0], r[1]);
                n.inverse ? o = a - 360 : a = o + 360;
                var s = Math.sqrt(e * e + i * i);
                e /= s, i /= s;
                for (var l = Math.atan2(-i, e) / Math.PI * 180, u = o > l ? 1 : -1; o > l || l > a;)l += 360 * u;
                return [s, l]
            }, coordToPoint: function (t) {
                var e = t[0], i = t[1] / 180 * Math.PI, n = Math.cos(i) * e + this.cx, r = -Math.sin(i) * e + this.cy;
                return [n, r]
            }
        }, t.exports = o
    }, function (t, e, i) {
        "use strict";
        i(366), i(2).extendComponentModel({
            type: "polar",
            dependencies: ["polarAxis", "angleAxis"],
            coordinateSystem: null,
            findAxisModel: function (t) {
                var e, i = this.ecModel;
                return i.eachComponent(t, function (t) {
                    i.getComponent("polar", t.getShallow("polarIndex")) === this && (e = t)
                }, this), e
            },
            defaultOption: {zlevel: 0, z: 0, center: ["50%", "50%"], radius: "80%"}
        })
    }, function (t, e, i) {
        "use strict";
        function n(t, e) {
            o.call(this, "radius", t, e), this.type = "category"
        }

        var r = i(1), o = i(42);
        n.prototype = {
            constructor: n,
            dataToRadius: o.prototype.dataToCoord,
            radiusToData: o.prototype.coordToData
        }, r.inherits(n, o), t.exports = n
    }, function (t, e, i) {
        function n(t, e, i) {
            o.call(this, t, e, i), this.type = "value", this.angle = 0, this.name = "", this.model
        }

        var r = i(1), o = i(42);
        r.inherits(n, o), t.exports = n
    }, function (t, e, i) {
        function n(t, e, i) {
            this._model = t, this.dimensions = [], this._indicatorAxes = r.map(t.getIndicatorModels(), function (t, e) {
                var i = "indicator_" + e, n = new o(i, new a);
                return n.name = t.get("name"), n.model = t, t.axis = n, this.dimensions.push(i), n
            }, this), this.resize(t, i), this.cx, this.cy, this.r, this.startAngle
        }

        var r = i(1), o = i(370), a = i(38), s = i(4), l = i(22);
        n.prototype.getIndicatorAxes = function () {
            return this._indicatorAxes
        }, n.prototype.dataToPoint = function (t, e) {
            var i = this._indicatorAxes[e];
            return this.coordToPoint(i.dataToCoord(t), e)
        }, n.prototype.coordToPoint = function (t, e) {
            var i = this._indicatorAxes[e], n = i.angle, r = this.cx + t * Math.cos(n), o = this.cy - t * Math.sin(n);
            return [r, o]
        }, n.prototype.pointToData = function (t) {
            var e = t[0] - this.cx, i = t[1] - this.cy, n = Math.sqrt(e * e + i * i);
            e /= n, i /= n;
            for (var r, o = Math.atan2(-i, e), a = 1 / 0, s = -1, l = 0; l < this._indicatorAxes.length; l++) {
                var u = this._indicatorAxes[l], h = Math.abs(o - u.angle);
                a > h && (r = u, s = l, a = h)
            }
            return [s, +(r && r.coodToData(n))]
        }, n.prototype.resize = function (t, e) {
            var i = t.get("center"), n = e.getWidth(), o = e.getHeight(), a = Math.min(n, o) / 2;
            this.cx = s.parsePercent(i[0], n), this.cy = s.parsePercent(i[1], o), this.startAngle = t.get("startAngle") * Math.PI / 180, this.r = s.parsePercent(t.get("radius"), a), r.each(this._indicatorAxes, function (t, e) {
                t.setExtent(0, this.r);
                var i = this.startAngle + e * Math.PI * 2 / this._indicatorAxes.length;
                i = Math.atan2(Math.sin(i), Math.cos(i)), t.angle = i
            }, this)
        }, n.prototype.update = function (t, e) {
            function i(t) {
                var e = Math.pow(10, Math.floor(Math.log(t) / Math.LN10)), i = t / e;
                return 2 === i ? i = 5 : i *= 2, i * e
            }

            var n = this._indicatorAxes, o = this._model;
            r.each(n, function (t) {
                t.scale.setExtent(1 / 0, -(1 / 0))
            }), t.eachSeriesByType("radar", function (e, i) {
                if ("radar" === e.get("coordinateSystem") && t.getComponent("radar", e.get("radarIndex")) === o) {
                    var a = e.getData();
                    r.each(n, function (t) {
                        t.scale.unionExtent(a.getDataExtent(t.dim))
                    })
                }
            }, this);
            var a = o.get("splitNumber");
            r.each(n, function (t, e) {
                var n = l.getScaleExtent(t, t.model);
                l.niceScaleExtent(t, t.model);
                var r = t.model, o = t.scale, u = r.get("min"), h = r.get("max"), c = o.getInterval();
                if (null != u && null != h)o.setInterval((h - u) / a); else if (null != u) {
                    var d;
                    do d = u + c * a, o.setExtent(+u, d), o.setInterval(c), c = i(c); while (d < n[1] && isFinite(d) && isFinite(n[1]))
                } else if (null != h) {
                    var f;
                    do f = h - c * a, o.setExtent(f, +h), o.setInterval(c), c = i(c); while (f > n[0] && isFinite(f) && isFinite(n[0]))
                } else {
                    var p = o.getTicks().length - 1;
                    p > a && (c = i(c));
                    var g = Math.round((n[0] + n[1]) / 2 / c) * c, v = Math.round(a / 2);
                    o.setExtent(s.round(g - v * c), s.round(g + (a - v) * c)), o.setInterval(c)
                }
            })
        }, n.dimensions = [], n.create = function (t, e) {
            var i = [];
            return t.eachComponent("radar", function (r) {
                var o = new n(r, t, e);
                i.push(o), r.coordinateSystem = o
            }), t.eachSeriesByType("radar", function (t) {
                "radar" === t.get("coordinateSystem") && (t.coordinateSystem = i[t.get("radarIndex") || 0])
            }), i
        }, i(23).register("radar", n), t.exports = n
    }, function (t, e, i) {
        function n(t, e) {
            return s.defaults({show: e}, t)
        }

        var r = i(80), o = r.valueAxis, a = i(8), s = i(1), l = i(51), u = i(2).extendComponentModel({
            type: "radar",
            optionUpdated: function () {
                var t = this.get("boundaryGap"), e = this.get("splitNumber"), i = this.get("scale"), n = this.get("axisLine"), r = this.get("axisTick"), o = this.get("axisLabel"), u = this.get("name.textStyle"), h = this.get("name.show"), c = this.get("name.formatter"), d = this.get("nameGap"), f = s.map(this.get("indicator") || [], function (f) {
                    return null != f.max && f.max > 0 ? f.min = 0 : null != f.min && f.min < 0 && (f.max = 0), f = s.merge(s.clone(f), {
                        boundaryGap: t,
                        splitNumber: e,
                        scale: i,
                        axisLine: n,
                        axisTick: r,
                        axisLabel: o,
                        name: f.text,
                        nameLocation: "end",
                        nameGap: d,
                        nameTextStyle: u
                    }, !1), h || (f.name = ""), "string" == typeof c ? f.name = c.replace("{value}", f.name) : "function" == typeof c && (f.name = c(f.name, f)), s.extend(new a(f, null, this.ecModel), l)
                }, this);
                this.getIndicatorModels = function () {
                    return f
                }
            },
            defaultOption: {
                zlevel: 0,
                z: 0,
                center: ["50%", "50%"],
                radius: "75%",
                startAngle: 90,
                name: {show: !0},
                boundaryGap: [0, 0],
                splitNumber: 5,
                nameGap: 15,
                scale: !1,
                shape: "polygon",
                axisLine: s.merge({lineStyle: {color: "#bbb"}}, o.axisLine),
                axisLabel: n(o.axisLabel, !1),
                axisTick: n(o.axisTick, !1),
                splitLine: n(o.splitLine, !0),
                splitArea: n(o.splitArea, !0),
                indicator: []
            }
        });
        t.exports = u
    }, function (t, e, i) {
        function n(t, e) {
            return e.type || (e.data ? "category" : "value")
        }

        var r = i(11), o = i(52), a = i(1), s = r.extend({
            type: "singleAxis",
            layoutMode: "box",
            axis: null,
            coordinateSystem: null
        }), l = {
            left: "5%",
            top: "5%",
            right: "5%",
            bottom: "5%",
            type: "value",
            position: "bottom",
            orient: "horizontal",
            axisLine: {show: !0, lineStyle: {width: 2, type: "solid"}},
            axisTick: {show: !0, length: 6, lineStyle: {width: 2}},
            axisLabel: {show: !0, interval: "auto"},
            splitLine: {show: !0, lineStyle: {type: "dashed", opacity: .2}}
        };
        a.merge(s.prototype, i(51)), o("single", s, n, l), t.exports = s
    }, function (t, e, i) {
        function n(t, e, i) {
            this.dimension = "x", this.dimensions = ["x"], this._axis = null, this._rect, this._init(t, e, i), this._model = t
        }

        var r = i(375), o = i(22), a = i(13);
        n.prototype = {
            type: "singleAxis", constructor: n, _init: function (t, e, i) {
                var n = this.dimension, a = new r(n, o.createScaleByModel(t), [0, 0], t.get("type"), t.get("position")), s = "category" === a.type;
                a.onBand = s && t.get("boundaryGap"), a.inverse = t.get("inverse"), a.orient = t.get("orient"), t.axis = a, a.model = t, this._axis = a
            }, update: function (t, e) {
                this._updateAxisFromSeries(t)
            }, _updateAxisFromSeries: function (t) {
                t.eachSeries(function (t) {
                    var e = t.getData(), i = this.dimension;
                    this._axis.scale.unionExtent(e.getDataExtent(t.coordDimToDataDim(i))), o.niceScaleExtent(this._axis, this._axis.model)
                }, this)
            }, resize: function (t, e) {
                this._rect = a.getLayoutRect({
                    left: t.get("left"),
                    top: t.get("top"),
                    right: t.get("right"),
                    bottom: t.get("bottom"),
                    width: t.get("width"),
                    height: t.get("height")
                }, {width: e.getWidth(), height: e.getHeight()}), this._adjustAxis()
            }, getRect: function () {
                return this._rect
            }, _adjustAxis: function () {
                var t = this._rect, e = this._axis, i = e.isHorizontal(), n = i ? [0, t.width] : [0, t.height], r = e.reverse ? 1 : 0;
                e.setExtent(n[r], n[1 - r]), this._updateAxisTransform(e, i ? t.x : t.y)
            }, _updateAxisTransform: function (t, e) {
                var i = t.getExtent(), n = i[0] + i[1], r = t.isHorizontal();
                t.toGlobalCoord = r ? function (t) {
                    return t + e
                } : function (t) {
                    return n - t + e
                }, t.toLocalCoord = r ? function (t) {
                    return t - e
                } : function (t) {
                    return n - t + e
                }
            }, getAxis: function () {
                return this._axis
            }, getBaseAxis: function () {
                return this._axis
            }, containPoint: function (t) {
                var e = this.getRect(), i = this.getAxis(), n = i.orient;
                return "horizontal" === n ? i.contain(i.toLocalCoord(t[0])) && t[1] >= e.y && t[1] <= e.y + e.height : i.contain(i.toLocalCoord(t[1])) && t[0] >= e.y && t[0] <= e.y + e.height
            }, pointToData: function (t) {
                var e = this.getAxis();
                return [e.coordToData(e.toLocalCoord(t["horizontal" === e.orient ? 0 : 1]))]
            }, dataToPoint: function (t) {
                var e = this.getAxis(), i = this.getRect(), n = [], r = "horizontal" === e.orient ? 0 : 1;
                return n[r] = e.toGlobalCoord(e.dataToCoord(+t)), n[1 - r] = 0 === r ? i.y + i.height / 2 : i.x + i.width / 2, n
            }
        }, t.exports = n
    }, function (t, e, i) {
        var n = i(1), r = i(42), o = i(22), a = function (t, e, i, n, o) {
            r.call(this, t, e, i), this.type = n || "value", this.position = o || "bottom", this.orient = null, this._labelInterval = null
        };
        a.prototype = {
            constructor: a, model: null, isHorizontal: function () {
                var t = this.position;
                return "top" === t || "bottom" === t
            }, getLabelInterval: function () {
                var t = this._labelInterval;
                if (!t) {
                    var e = this.model, i = e.getModel("axisLabel"), r = i.get("interval");
                    if ("category" !== this.type || "auto" !== r)return t = this._labelInterval = "auto" === r ? 0 : r;
                    t = this._labelInterval = o.getAxisLabelInterval(n.map(this.scale.getTicks(), this.dataToCoord, this), e.getFormattedLabels(), i.getModel("textStyle").getFont(), this.isHorizontal())
                }
                return t
            }, toGlobalCoord: null, toLocalCoord: null
        }, n.inherits(a, r), t.exports = a
    }, function (t, e, i) {
        function n(t, e) {
            var i = [];
            return t.eachComponent("singleAxis", function (n, o) {
                var a = new r(n, t, e);
                a.name = "single_" + o, a.resize(n, e), n.coordinateSystem = a, i.push(a)
            }), t.eachSeries(function (e) {
                if ("singleAxis" === e.get("coordinateSystem")) {
                    var i = e.get("singleAxisIndex") || 0, n = t.getComponent("singleAxis", i);
                    e.coordinateSystem = n.coordinateSystem
                }
            }), i
        }

        var r = i(374);
        i(23).register("single", {create: n, dimensions: r.prototype.dimensions})
    }, function (t, e, i) {
        "use strict";
        function n(t, e) {
            this.id = null == t ? "" : t, this.inEdges = [], this.outEdges = [], this.edges = [], this.hostGraph, this.dataIndex = null == e ? -1 : e
        }

        function r(t, e, i) {
            this.node1 = t, this.node2 = e, this.dataIndex = null == i ? -1 : i
        }

        var o = i(1), a = function (t) {
            this._directed = t || !1, this.nodes = [], this.edges = [], this._nodesMap = {}, this._edgesMap = {}, this.data, this.edgeData
        }, s = a.prototype;
        s.type = "graph", s.isDirected = function () {
            return this._directed
        }, s.addNode = function (t, e) {
            t = t || "" + e;
            var i = this._nodesMap;
            if (!i[t]) {
                var r = new n(t, e);
                return r.hostGraph = this, this.nodes.push(r), i[t] = r, r
            }
        }, s.getNodeByIndex = function (t) {
            var e = this.data.getRawIndex(t);
            return this.nodes[e]
        }, s.getNodeById = function (t) {
            return this._nodesMap[t]
        }, s.addEdge = function (t, e, i) {
            var o = this._nodesMap, a = this._edgesMap;
            if ("number" == typeof t && (t = this.nodes[t]), "number" == typeof e && (e = this.nodes[e]), t instanceof n || (t = o[t]), e instanceof n || (e = o[e]), t && e) {
                var s = t.id + "-" + e.id;
                if (!a[s]) {
                    var l = new r(t, e, i);
                    return l.hostGraph = this, this._directed && (t.outEdges.push(l), e.inEdges.push(l)), t.edges.push(l), t !== e && e.edges.push(l), this.edges.push(l), a[s] = l, l
                }
            }
        }, s.getEdgeByIndex = function (t) {
            var e = this.edgeData.getRawIndex(t);
            return this.edges[e]
        }, s.getEdge = function (t, e) {
            t instanceof n && (t = t.id), e instanceof n && (e = e.id);
            var i = this._edgesMap;
            return this._directed ? i[t + "-" + e] : i[t + "-" + e] || i[e + "-" + t]
        }, s.eachNode = function (t, e) {
            for (var i = this.nodes, n = i.length, r = 0; n > r; r++)i[r].dataIndex >= 0 && t.call(e, i[r], r)
        }, s.eachEdge = function (t, e) {
            for (var i = this.edges, n = i.length, r = 0; n > r; r++)i[r].dataIndex >= 0 && i[r].node1.dataIndex >= 0 && i[r].node2.dataIndex >= 0 && t.call(e, i[r], r)
        }, s.breadthFirstTraverse = function (t, e, i, r) {
            if (e instanceof n || (e = this._nodesMap[e]), e) {
                for (var o = "out" === i ? "outEdges" : "in" === i ? "inEdges" : "edges", a = 0; a < this.nodes.length; a++)this.nodes[a].__visited = !1;
                if (!t.call(r, e, null))for (var s = [e]; s.length;)for (var l = s.shift(), u = l[o], a = 0; a < u.length; a++) {
                    var h = u[a], c = h.node1 === l ? h.node2 : h.node1;
                    if (!c.__visited) {
                        if (t.call(c, c, l))return;
                        s.push(c), c.__visited = !0
                    }
                }
            }
        }, s.update = function () {
            for (var t = this.data, e = this.edgeData, i = this.nodes, n = this.edges, r = 0, o = i.length; o > r; r++)i[r].dataIndex = -1;
            for (var r = 0, o = t.count(); o > r; r++)i[t.getRawIndex(r)].dataIndex = r;
            e.filterSelf(function (t) {
                var i = n[e.getRawIndex(t)];
                return i.node1.dataIndex >= 0 && i.node2.dataIndex >= 0
            });
            for (var r = 0, o = n.length; o > r; r++)n[r].dataIndex = -1;
            for (var r = 0, o = e.count(); o > r; r++)n[e.getRawIndex(r)].dataIndex = r
        }, s.clone = function () {
            for (var t = new a(this._directed), e = this.nodes, i = this.edges, n = 0; n < e.length; n++)t.addNode(e[n].id, e[n].dataIndex);
            for (var n = 0; n < i.length; n++) {
                var r = i[n];
                t.addEdge(r.node1.id, r.node2.id, r.dataIndex)
            }
            return t
        }, n.prototype = {
            constructor: n, degree: function () {
                return this.edges.length
            }, inDegree: function () {
                return this.inEdges.length
            }, outDegree: function () {
                return this.outEdges.length
            }, getModel: function (t) {
                if (!(this.dataIndex < 0)) {
                    var e = this.hostGraph, i = e.data.getItemModel(this.dataIndex);
                    return i.getModel(t)
                }
            }
        }, r.prototype.getModel = function (t) {
            if (!(this.dataIndex < 0)) {
                var e = this.hostGraph, i = e.edgeData.getItemModel(this.dataIndex);
                return i.getModel(t)
            }
        };
        var l = function (t, e) {
            return {
                getValue: function (i) {
                    var n = this[t][e];
                    return n.get(n.getDimension(i || "value"), this.dataIndex)
                }, setVisual: function (i, n) {
                    this.dataIndex >= 0 && this[t][e].setItemVisual(this.dataIndex, i, n)
                }, getVisual: function (i, n) {
                    return this[t][e].getItemVisual(this.dataIndex, i, n)
                }, setLayout: function (i, n) {
                    this.dataIndex >= 0 && this[t][e].setItemLayout(this.dataIndex, i, n)
                }, getLayout: function () {
                    return this[t][e].getItemLayout(this.dataIndex)
                }, getGraphicEl: function () {
                    return this[t][e].getItemGraphicEl(this.dataIndex)
                }, getRawIndex: function () {
                    return this[t][e].getRawIndex(this.dataIndex)
                }
            }
        };
        o.mixin(n, l("hostGraph", "data")), o.mixin(r, l("hostGraph", "edgeData")), a.Node = n, a.Edge = r, t.exports = a
    }, function (t, e, i) {
        function n(t, e) {
            this.root, this.data, this._nodes = [], this.hostModel = t, this.levelModels = o.map(e || [], function (e) {
                return new a(e, t, t.ecModel)
            })
        }

        function r(t, e) {
            var i = e.children;
            t.parentNode !== e && (i.push(t), t.parentNode = e)
        }

        var o = i(1), a = i(8), s = i(14), l = i(239), u = i(30), h = function (t, e) {
            this.name = t || "", this.depth = 0, this.height = 0, this.parentNode = null, this.dataIndex = -1, this.children = [], this.viewChildren = [], this.hostTree = e
        };
        h.prototype = {
            constructor: h, isRemoved: function () {
                return this.dataIndex < 0
            }, eachNode: function (t, e, i) {
                "function" == typeof t && (i = e, e = t, t = null), t = t || {}, o.isString(t) && (t = {order: t});
                var n, r = t.order || "preorder", a = this[t.attr || "children"];
                "preorder" === r && (n = e.call(i, this));
                for (var s = 0; !n && s < a.length; s++)a[s].eachNode(t, e, i);
                "postorder" === r && e.call(i, this)
            }, updateDepthAndHeight: function (t) {
                var e = 0;
                this.depth = t;
                for (var i = 0; i < this.children.length; i++) {
                    var n = this.children[i];
                    n.updateDepthAndHeight(t + 1), n.height > e && (e = n.height)
                }
                this.height = e + 1
            }, getNodeById: function (t) {
                if (this.getId() === t)return this;
                for (var e = 0, i = this.children, n = i.length; n > e; e++) {
                    var r = i[e].getNodeById(t);
                    if (r)return r
                }
            }, contains: function (t) {
                if (t === this)return !0;
                for (var e = 0, i = this.children, n = i.length; n > e; e++) {
                    var r = i[e].contains(t);
                    if (r)return r
                }
            }, getAncestors: function (t) {
                for (var e = [], i = t ? this : this.parentNode; i;)e.push(i), i = i.parentNode;
                return e.reverse(), e
            }, getValue: function (t) {
                var e = this.hostTree.data;
                return e.get(e.getDimension(t || "value"), this.dataIndex)
            }, setLayout: function (t, e) {
                this.dataIndex >= 0 && this.hostTree.data.setItemLayout(this.dataIndex, t, e)
            }, getLayout: function () {
                return this.hostTree.data.getItemLayout(this.dataIndex)
            }, getModel: function (t) {
                if (!(this.dataIndex < 0)) {
                    var e = this.hostTree, i = e.data.getItemModel(this.dataIndex), n = this.getLevelModel();
                    return i.getModel(t, (n || e.hostModel).getModel(t))
                }
            }, getLevelModel: function () {
                return (this.hostTree.levelModels || [])[this.depth]
            }, setVisual: function (t, e) {
                this.dataIndex >= 0 && this.hostTree.data.setItemVisual(this.dataIndex, t, e)
            }, getVisual: function (t, e) {
                return this.hostTree.data.getItemVisual(this.dataIndex, t, e)
            }, getRawIndex: function () {
                return this.hostTree.data.getRawIndex(this.dataIndex)
            }, getId: function () {
                return this.hostTree.data.getId(this.dataIndex)
            }
        }, n.prototype = {
            constructor: n, type: "tree", eachNode: function (t, e, i) {
                this.root.eachNode(t, e, i)
            }, getNodeByDataIndex: function (t) {
                var e = this.data.getRawIndex(t);
                return this._nodes[e]
            }, getNodeByName: function (t) {
                return this.root.getNodeByName(t)
            }, update: function () {
                for (var t = this.data, e = this._nodes, i = 0, n = e.length; n > i; i++)e[i].dataIndex = -1;
                for (var i = 0, n = t.count(); n > i; i++)e[t.getRawIndex(i)].dataIndex = i
            }, clearLayouts: function () {
                this.data.clearItemLayouts()
            }
        }, n.createTree = function (t, e, i) {
            function o(t, e) {
                c.push(t);
                var i = new h(t.name, a);
                e ? r(i, e) : a.root = i, a._nodes.push(i);
                var n = t.children;
                if (n)for (var s = 0; s < n.length; s++)o(n[s], i)
            }

            var a = new n(e, i), c = [];
            o(t), a.root.updateDepthAndHeight(0);
            var d = u([{name: "value"}], c), f = new s(d, e);
            return f.initData(c), l({mainData: f, struct: a, structAttr: "tree"}), a.update(), a
        }, t.exports = n
    }, function (t, e, i) {
        function n() {
            var t, e = [], i = {};
            return {
                add: function (t, n, o, a, s) {
                    return r.isString(a) && (s = a, a = 0), i[t.id] ? !1 : (i[t.id] = 1, e.push({
                        el: t,
                        target: n,
                        time: o,
                        delay: a,
                        easing: s
                    }), !0)
                }, done: function (e) {
                    return t = e, this
                }, start: function () {
                    function n() {
                        r--, r || (e.length = 0, i = {}, t && t())
                    }

                    for (var r = e.length, o = 0, a = e.length; a > o; o++) {
                        var s = e[o];
                        s.el.animateTo(s.target, s.time, s.delay, s.easing, n)
                    }
                    return this
                }
            }
        }

        var r = i(1);
        t.exports = {createWrap: n}
    }, function (t, e, i) {
        function n() {
            function t(e, n) {
                if (n >= i.length)return e;
                for (var o = -1, a = e.length, s = i[n++], l = {}, u = {}; ++o < a;) {
                    var h = s(e[o]), c = u[h];
                    c ? c.push(e[o]) : u[h] = [e[o]]
                }
                return r.each(u, function (e, i) {
                    l[i] = t(e, n)
                }), l
            }

            function e(t, o) {
                if (o >= i.length)return t;
                var a = [], s = n[o++];
                return r.each(t, function (t, i) {
                    a.push({key: i, values: e(t, o)})
                }), s ? a.sort(function (t, e) {
                    return s(t.key, e.key)
                }) : a
            }

            var i = [], n = [];
            return {
                key: function (t) {
                    return i.push(t), this
                }, sortKeys: function (t) {
                    return n[i.length - 1] = t, this
                }, entries: function (i) {
                    return e(t(i, 0), 0)
                }
            }
        }

        var r = i(1);
        t.exports = n
    }, function (t, e, i) {
        var n = i(1), r = {
            get: function (t, e, i) {
                var r = n.clone((o[t] || {})[e]);
                return i && n.isArray(r) ? r[r.length - 1] : r
            }
        }, o = {
            color: {active: ["#006edd", "#e0ffff"], inactive: ["rgba(0,0,0,0)"]},
            colorHue: {active: [0, 360], inactive: [0, 0]},
            colorSaturation: {active: [.3, 1], inactive: [0, 0]},
            colorLightness: {active: [.9, .5], inactive: [0, 0]},
            colorAlpha: {active: [.3, 1], inactive: [0, 0]},
            opacity: {active: [.3, 1], inactive: [0, 0]},
            symbol: {active: ["circle", "roundRect", "diamond"], inactive: ["none"]},
            symbolSize: {active: [10, 50], inactive: [0, 0]}
        };
        t.exports = r
    }])
});