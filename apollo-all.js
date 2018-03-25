! function(n) {
    function e(t) {
        if (o[t]) return o[t].exports;
        var r = o[t] = {
            exports: {},
            id: t,
            loaded: !1
        };
        return n[t].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
    }
    var t = window.webpackJsonp;
    window.webpackJsonp = function(o, i) {
        for (var a, s, E = 0, _ = []; E < o.length; E++) s = o[E], r[s] && _.push.apply(_, r[s]), r[s] = 0;
        for (a in i) {
            var l = i[a];
            switch (typeof l) {
                case "object":
                    n[a] = function(e) {
                        var t = e.slice(1),
                            o = e[0];
                        return function(e, r, i) {
                            n[o].apply(this, [e, r, i].concat(t))
                        }
                    }(l);
                    break;
                case "function":
                    n[a] = l;
                    break;
                default:
                    n[a] = n[l]
            }
        }
        for (t && t(o, i); _.length;) _.shift().call(null, e)
    };
    var o = {},
        r = {
            15: 0,
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 0,
            11: 0,
            12: 0,
            13: 0,
            14: 0
        };
    return e.e = function(n, t) {
        if (0 === r[n]) return t.call(null, e);
        if (void 0 !== r[n]) r[n].push(t);
        else {
            r[n] = [t];
            var o = document.getElementsByTagName("head")[0],
                i = document.createElement("script");
            i.type = "text/javascript", i.charset = "utf-8", i.async = !0, i.src = e.p + "" + n + "." + ({}[n] || n) + ".js", o.appendChild(i)
        }
    }, e.m = n, e.c = o, e.p = "https://cdn.leagueoflegends.com/apollo/widgets/2.1.40/", e(0)
}(function(n) {
    for (var e in n)
        if (Object.prototype.hasOwnProperty.call(n, e)) switch (typeof n[e]) {
            case "function":
                break;
            case "object":
                n[e] = function(e) {
                    var t = e.slice(1),
                        o = n[e[0]];
                    return function(n, e, r) {
                        o.apply(this, [n, e, r].concat(t))
                    }
                }(n[e]);
                break;
            default:
                n[e] = n[n[e]]
        }
    return n
}([function(n, e, t) {
    t(74), t(75), t(76), t(77), t(33), t(78), t(79), t(80), t(81), t(82), t(83), t(34), t(84), t(85), t(86), n.exports = t(17)
}, function(n, e, t) {
    var o, r;
    o = [t(4)], r = function(n) {
        "use strict";
        return window.jQuery ? window.jQuery : window.$ ? window.$ : (n.error("ApolloJS: jQuery is required"), !1)
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(48)], r = function(n) {
        "use strict";
        var e = n.noConflict();
        return window._ || (window._ = e), e
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    ! function(i, a) {
        o = [t(2), t(1), e], r = function(n, e, t) {
            i.Backbone = a(i, t, n, e)
        }.apply(e, o), !(void 0 !== r && (n.exports = r))
    }(this, function(n, e, t, o) {
        var r = n.Backbone,
            i = [],
            a = (i.push, i.slice);
        i.splice;
        e.VERSION = "1.1.2", e.$ = o, e.noConflict = function() {
            return n.Backbone = r, this
        }, e.emulateHTTP = !1, e.emulateJSON = !1;
        var s = e.Events = {
                on: function(n, e, t) {
                    if (!_(this, "on", n, [e, t]) || !e) return this;
                    this._events || (this._events = {});
                    var o = this._events[n] || (this._events[n] = []);
                    return o.push({
                        callback: e,
                        context: t,
                        ctx: t || this
                    }), this
                },
                once: function(n, e, o) {
                    if (!_(this, "once", n, [e, o]) || !e) return this;
                    var r = this,
                        i = t.once(function() {
                            r.off(n, i), e.apply(this, arguments)
                        });
                    return i._callback = e, this.on(n, i, o)
                },
                off: function(n, e, o) {
                    var r, i, a, s, E, l, O, u;
                    if (!this._events || !_(this, "off", n, [e, o])) return this;
                    if (!n && !e && !o) return this._events = void 0, this;
                    for (s = n ? [n] : t.keys(this._events), E = 0, l = s.length; l > E; E++)
                        if (n = s[E], a = this._events[n]) {
                            if (this._events[n] = r = [], e || o)
                                for (O = 0, u = a.length; u > O; O++) i = a[O], (e && e !== i.callback && e !== i.callback._callback || o && o !== i.context) && r.push(i);
                            r.length || delete this._events[n]
                        }
                    return this
                },
                trigger: function(n) {
                    if (!this._events) return this;
                    var e = a.call(arguments, 1);
                    if (!_(this, "trigger", n, e)) return this;
                    var t = this._events[n],
                        o = this._events.all;
                    return t && l(t, e), o && l(o, arguments), this
                },
                stopListening: function(n, e, o) {
                    var r = this._listeningTo;
                    if (!r) return this;
                    var i = !e && !o;
                    o || "object" != typeof e || (o = this), n && ((r = {})[n._listenId] = n);
                    for (var a in r) n = r[a], n.off(e, o, this), (i || t.isEmpty(n._events)) && delete this._listeningTo[a];
                    return this
                }
            },
            E = /\s+/,
            _ = function(n, e, t, o) {
                if (!t) return !0;
                if ("object" == typeof t) {
                    for (var r in t) n[e].apply(n, [r, t[r]].concat(o));
                    return !1
                }
                if (E.test(t)) {
                    for (var i = t.split(E), a = 0, s = i.length; s > a; a++) n[e].apply(n, [i[a]].concat(o));
                    return !1
                }
                return !0
            },
            l = function(n, e) {
                var t, o = -1,
                    r = n.length,
                    i = e[0],
                    a = e[1],
                    s = e[2];
                switch (e.length) {
                    case 0:
                        for (; ++o < r;)(t = n[o]).callback.call(t.ctx);
                        return;
                    case 1:
                        for (; ++o < r;)(t = n[o]).callback.call(t.ctx, i);
                        return;
                    case 2:
                        for (; ++o < r;)(t = n[o]).callback.call(t.ctx, i, a);
                        return;
                    case 3:
                        for (; ++o < r;)(t = n[o]).callback.call(t.ctx, i, a, s);
                        return;
                    default:
                        for (; ++o < r;)(t = n[o]).callback.apply(t.ctx, e);
                        return
                }
            },
            O = {
                listenTo: "on",
                listenToOnce: "once"
            };
        t.each(O, function(n, e) {
            s[e] = function(e, o, r) {
                var i = this._listeningTo || (this._listeningTo = {}),
                    a = e._listenId || (e._listenId = t.uniqueId("l"));
                return i[a] = e, r || "object" != typeof o || (r = this), e[n](o, r, this), this
            }
        }), s.bind = s.on, s.unbind = s.off, t.extend(e, s);
        var u = e.Model = function(n, e) {
            var o = n || {};
            e || (e = {}), this.cid = t.uniqueId("c"), this.attributes = {}, e.collection && (this.collection = e.collection), e.parse && (o = this.parse(o, e) || {}), o = t.defaults({}, o, t.result(this, "defaults")), this.set(o, e), this.changed = {}, this.initialize.apply(this, arguments)
        };
        t.extend(u.prototype, s, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            initialize: function() {},
            toJSON: function(n) {
                return t.clone(this.attributes)
            },
            sync: function() {
                return e.sync.apply(this, arguments)
            },
            get: function(n) {
                return this.attributes[n]
            },
            escape: function(n) {
                return t.escape(this.get(n))
            },
            has: function(n) {
                return null != this.get(n)
            },
            set: function(n, e, o) {
                var r, i, a, s, E, _, l, O;
                if (null == n) return this;
                if ("object" == typeof n ? (i = n, o = e) : (i = {})[n] = e, o || (o = {}), !this._validate(i, o)) return !1;
                a = o.unset, E = o.silent, s = [], _ = this._changing, this._changing = !0, _ || (this._previousAttributes = t.clone(this.attributes), this.changed = {}), O = this.attributes, l = this._previousAttributes, this.idAttribute in i && (this.id = i[this.idAttribute]);
                for (r in i) e = i[r], t.isEqual(O[r], e) || s.push(r), t.isEqual(l[r], e) ? delete this.changed[r] : this.changed[r] = e, a ? delete O[r] : O[r] = e;
                if (!E) {
                    s.length && (this._pending = o);
                    for (var u = 0, R = s.length; R > u; u++) this.trigger("change:" + s[u], this, O[s[u]], o)
                }
                if (_) return this;
                if (!E)
                    for (; this._pending;) o = this._pending, this._pending = !1, this.trigger("change", this, o);
                return this._pending = !1, this._changing = !1, this
            },
            unset: function(n, e) {
                return this.set(n, void 0, t.extend({}, e, {
                    unset: !0
                }))
            },
            clear: function(n) {
                var e = {};
                for (var o in this.attributes) e[o] = void 0;
                return this.set(e, t.extend({}, n, {
                    unset: !0
                }))
            },
            hasChanged: function(n) {
                return null == n ? !t.isEmpty(this.changed) : t.has(this.changed, n)
            },
            changedAttributes: function(n) {
                if (!n) return this.hasChanged() ? t.clone(this.changed) : !1;
                var e, o = !1,
                    r = this._changing ? this._previousAttributes : this.attributes;
                for (var i in n) t.isEqual(r[i], e = n[i]) || ((o || (o = {}))[i] = e);
                return o
            },
            previous: function(n) {
                return null != n && this._previousAttributes ? this._previousAttributes[n] : null
            },
            previousAttributes: function() {
                return t.clone(this._previousAttributes)
            },
            fetch: function(n) {
                n = n ? t.clone(n) : {}, void 0 === n.parse && (n.parse = !0);
                var e = this,
                    o = n.success;
                return n.success = function(t) {
                    return e.set(e.parse(t, n), n) ? (o && o(e, t, n), void e.trigger("sync", e, t, n)) : !1
                }, F(this, n), this.sync("read", this, n)
            },
            save: function(n, e, o) {
                var r, i, a, s = this.attributes;
                if (null == n || "object" == typeof n ? (r = n, o = e) : (r = {})[n] = e, o = t.extend({
                        validate: !0
                    }, o), r && !o.wait) {
                    if (!this.set(r, o)) return !1
                } else if (!this._validate(r, o)) return !1;
                r && o.wait && (this.attributes = t.extend({}, s, r)), void 0 === o.parse && (o.parse = !0);
                var E = this,
                    _ = o.success;
                return o.success = function(n) {
                    E.attributes = s;
                    var e = E.parse(n, o);
                    return o.wait && (e = t.extend(r || {}, e)), t.isObject(e) && !E.set(e, o) ? !1 : (_ && _(E, n, o), void E.trigger("sync", E, n, o))
                }, F(this, o), i = this.isNew() ? "create" : o.patch ? "patch" : "update", "patch" === i && (o.attrs = r), a = this.sync(i, this, o), r && o.wait && (this.attributes = s), a
            },
            destroy: function(n) {
                n = n ? t.clone(n) : {};
                var e = this,
                    o = n.success,
                    r = function() {
                        e.trigger("destroy", e, e.collection, n)
                    };
                if (n.success = function(t) {
                        (n.wait || e.isNew()) && r(), o && o(e, t, n), e.isNew() || e.trigger("sync", e, t, n)
                    }, this.isNew()) return n.success(), !1;
                F(this, n);
                var i = this.sync("delete", this, n);
                return n.wait || r(), i
            },
            url: function() {
                var n = t.result(this, "urlRoot") || t.result(this.collection, "url") || B();
                return this.isNew() ? n : n.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
            },
            parse: function(n, e) {
                return n
            },
            clone: function() {
                return new this.constructor(this.attributes)
            },
            isNew: function() {
                return !this.has(this.idAttribute)
            },
            isValid: function(n) {
                return this._validate({}, t.extend(n || {}, {
                    validate: !0
                }))
            },
            _validate: function(n, e) {
                if (!e.validate || !this.validate) return !0;
                n = t.extend({}, this.attributes, n);
                var o = this.validationError = this.validate(n, e) || null;
                return o ? (this.trigger("invalid", this, o, t.extend(e, {
                    validationError: o
                })), !1) : !0
            }
        });
        var R = ["keys", "values", "pairs", "invert", "pick", "omit"];
        t.each(R, function(n) {
            u.prototype[n] = function() {
                var e = a.call(arguments);
                return e.unshift(this.attributes), t[n].apply(t, e)
            }
        });
        var d = e.Collection = function(n, e) {
                e || (e = {}), e.model && (this.model = e.model), void 0 !== e.comparator && (this.comparator = e.comparator), this._reset(), this.initialize.apply(this, arguments), n && this.reset(n, t.extend({
                    silent: !0
                }, e))
            },
            N = {
                add: !0,
                remove: !0,
                merge: !0
            },
            T = {
                add: !0,
                remove: !1
            };
        t.extend(d.prototype, s, {
            model: u,
            initialize: function() {},
            toJSON: function(n) {
                return this.map(function(e) {
                    return e.toJSON(n)
                })
            },
            sync: function() {
                return e.sync.apply(this, arguments)
            },
            add: function(n, e) {
                return this.set(n, t.extend({
                    merge: !1
                }, e, T))
            },
            remove: function(n, e) {
                var o = !t.isArray(n);
                n = o ? [n] : t.clone(n), e || (e = {});
                var r, i, a, s;
                for (r = 0, i = n.length; i > r; r++) s = n[r] = this.get(n[r]), s && (delete this._byId[s.id], delete this._byId[s.cid], a = this.indexOf(s), this.models.splice(a, 1), this.length--, e.silent || (e.index = a, s.trigger("remove", s, this, e)), this._removeReference(s, e));
                return o ? n[0] : n
            },
            set: function(n, e) {
                e = t.defaults({}, e, N), e.parse && (n = this.parse(n, e));
                var o = !t.isArray(n);
                n = o ? n ? [n] : [] : t.clone(n);
                var r, i, a, s, E, _, l, O = e.at,
                    R = this.model,
                    d = this.comparator && null == O && e.sort !== !1,
                    T = t.isString(this.comparator) ? this.comparator : null,
                    c = [],
                    A = [],
                    S = {},
                    m = e.add,
                    p = e.merge,
                    I = e.remove,
                    h = !d && m && I ? [] : !1;
                for (r = 0, i = n.length; i > r; r++) {
                    if (E = n[r] || {}, a = E instanceof u ? s = E : E[R.prototype.idAttribute || "id"], _ = this.get(a)) I && (S[_.cid] = !0), p && (E = E === s ? s.attributes : E, e.parse && (E = _.parse(E, e)), _.set(E, e), d && !l && _.hasChanged(T) && (l = !0)), n[r] = _;
                    else if (m) {
                        if (s = n[r] = this._prepareModel(E, e), !s) continue;
                        c.push(s), this._addReference(s, e)
                    }
                    s = _ || s, !h || !s.isNew() && S[s.id] || h.push(s), S[s.id] = !0
                }
                if (I) {
                    for (r = 0, i = this.length; i > r; ++r) S[(s = this.models[r]).cid] || A.push(s);
                    A.length && this.remove(A, e)
                }
                if (c.length || h && h.length)
                    if (d && (l = !0), this.length += c.length, null != O)
                        for (r = 0, i = c.length; i > r; r++) this.models.splice(O + r, 0, c[r]);
                    else {
                        h && (this.models.length = 0);
                        var D = h || c;
                        for (r = 0, i = D.length; i > r; r++) this.models.push(D[r])
                    }
                if (l && this.sort({
                        silent: !0
                    }), !e.silent) {
                    for (r = 0, i = c.length; i > r; r++)(s = c[r]).trigger("add", s, this, e);
                    (l || h && h.length) && this.trigger("sort", this, e)
                }
                return o ? n[0] : n
            },
            reset: function(n, e) {
                e || (e = {});
                for (var o = 0, r = this.models.length; r > o; o++) this._removeReference(this.models[o], e);
                return e.previousModels = this.models, this._reset(), n = this.add(n, t.extend({
                    silent: !0
                }, e)), e.silent || this.trigger("reset", this, e), n
            },
            push: function(n, e) {
                return this.add(n, t.extend({
                    at: this.length
                }, e))
            },
            pop: function(n) {
                var e = this.at(this.length - 1);
                return this.remove(e, n), e
            },
            unshift: function(n, e) {
                return this.add(n, t.extend({
                    at: 0
                }, e))
            },
            shift: function(n) {
                var e = this.at(0);
                return this.remove(e, n), e
            },
            slice: function() {
                return a.apply(this.models, arguments)
            },
            get: function(n) {
                return null == n ? void 0 : this._byId[n] || this._byId[n.id] || this._byId[n.cid]
            },
            at: function(n) {
                return this.models[n]
            },
            where: function(n, e) {
                return t.isEmpty(n) ? e ? void 0 : [] : this[e ? "find" : "filter"](function(e) {
                    for (var t in n)
                        if (n[t] !== e.get(t)) return !1;
                    return !0
                })
            },
            findWhere: function(n) {
                return this.where(n, !0)
            },
            sort: function(n) {
                if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                return n || (n = {}), t.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(t.bind(this.comparator, this)), n.silent || this.trigger("sort", this, n), this
            },
            pluck: function(n) {
                return t.invoke(this.models, "get", n)
            },
            fetch: function(n) {
                n = n ? t.clone(n) : {}, void 0 === n.parse && (n.parse = !0);
                var e = n.success,
                    o = this;
                return n.success = function(t) {
                    var r = n.reset ? "reset" : "set";
                    o[r](t, n), e && e(o, t, n), o.trigger("sync", o, t, n)
                }, F(this, n), this.sync("read", this, n)
            },
            create: function(n, e) {
                if (e = e ? t.clone(e) : {}, !(n = this._prepareModel(n, e))) return !1;
                e.wait || this.add(n, e);
                var o = this,
                    r = e.success;
                return e.success = function(n, t) {
                    e.wait && o.add(n, e), r && r(n, t, e)
                }, n.save(null, e), n
            },
            parse: function(n, e) {
                return n
            },
            clone: function() {
                return new this.constructor(this.models)
            },
            _reset: function() {
                this.length = 0, this.models = [], this._byId = {}
            },
            _prepareModel: function(n, e) {
                if (n instanceof u) return n;
                e = e ? t.clone(e) : {}, e.collection = this;
                var o = new this.model(n, e);
                return o.validationError ? (this.trigger("invalid", this, o.validationError, e), !1) : o
            },
            _addReference: function(n, e) {
                this._byId[n.cid] = n, null != n.id && (this._byId[n.id] = n), n.collection || (n.collection = this), n.on("all", this._onModelEvent, this)
            },
            _removeReference: function(n, e) {
                this === n.collection && delete n.collection, n.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function(n, e, t, o) {
                ("add" !== n && "remove" !== n || t === this) && ("destroy" === n && this.remove(e, o), e && n === "change:" + e.idAttribute && (delete this._byId[e.previous(e.idAttribute)], null != e.id && (this._byId[e.id] = e)), this.trigger.apply(this, arguments))
            }
        });
        var c = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
        t.each(c, function(n) {
            d.prototype[n] = function() {
                var e = a.call(arguments);
                return e.unshift(this.models), t[n].apply(t, e)
            }
        });
        var A = ["groupBy", "countBy", "sortBy", "indexBy"];
        t.each(A, function(n) {
            d.prototype[n] = function(e, o) {
                var r = t.isFunction(e) ? e : function(n) {
                    return n.get(e)
                };
                return t[n](this.models, r, o)
            }
        });
        var S = e.View = function(n) {
                this.cid = t.uniqueId("view"), n || (n = {}), t.extend(this, t.pick(n, p)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
            },
            m = /^(\S+)\s*(.*)$/,
            p = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        t.extend(S.prototype, s, {
            tagName: "div",
            $: function(n) {
                return this.$el.find(n)
            },
            initialize: function() {},
            render: function() {
                return this
            },
            remove: function() {
                return this.$el.remove(), this.stopListening(), this
            },
            setElement: function(n, t) {
                return this.$el && this.undelegateEvents(), this.$el = n instanceof e.$ ? n : e.$(n), this.el = this.$el[0], t !== !1 && this.delegateEvents(), this
            },
            delegateEvents: function(n) {
                if (!n && !(n = t.result(this, "events"))) return this;
                this.undelegateEvents();
                for (var e in n) {
                    var o = n[e];
                    if (t.isFunction(o) || (o = this[n[e]]), o) {
                        var r = e.match(m),
                            i = r[1],
                            a = r[2];
                        o = t.bind(o, this), i += ".delegateEvents" + this.cid, "" === a ? this.$el.on(i, o) : this.$el.on(i, a, o)
                    }
                }
                return this
            },
            undelegateEvents: function() {
                return this.$el.off(".delegateEvents" + this.cid), this
            },
            _ensureElement: function() {
                if (this.el) this.setElement(t.result(this, "el"), !1);
                else {
                    var n = t.extend({}, t.result(this, "attributes"));
                    this.id && (n.id = t.result(this, "id")), this.className && (n["class"] = t.result(this, "className"));
                    var o = e.$("<" + t.result(this, "tagName") + ">").attr(n);
                    this.setElement(o, !1)
                }
            }
        }), e.sync = function(n, o, r) {
            var i = h[n];
            t.defaults(r || (r = {}), {
                emulateHTTP: e.emulateHTTP,
                emulateJSON: e.emulateJSON
            });
            var a = {
                type: i,
                dataType: "json"
            };
            if (r.url || (a.url = t.result(o, "url") || B()), null != r.data || !o || "create" !== n && "update" !== n && "patch" !== n || (a.contentType = "application/json", a.data = JSON.stringify(r.attrs || o.toJSON(r))), r.emulateJSON && (a.contentType = "application/x-www-form-urlencoded", a.data = a.data ? {
                    model: a.data
                } : {}), r.emulateHTTP && ("PUT" === i || "DELETE" === i || "PATCH" === i)) {
                a.type = "POST", r.emulateJSON && (a.data._method = i);
                var s = r.beforeSend;
                r.beforeSend = function(n) {
                    return n.setRequestHeader("X-HTTP-Method-Override", i), s ? s.apply(this, arguments) : void 0
                }
            }
            "GET" === a.type || r.emulateJSON || (a.processData = !1), "PATCH" === a.type && I && (a.xhr = function() {
                return new ActiveXObject("Microsoft.XMLHTTP")
            });
            var E = r.xhr = e.ajax(t.extend(a, r));
            return o.trigger("request", o, E, r), E
        };
        var I = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
            h = {
                create: "POST",
                update: "PUT",
                patch: "PATCH",
                "delete": "DELETE",
                read: "GET"
            };
        e.ajax = function() {
            return e.$.ajax.apply(e.$, arguments)
        };
        var D = e.Router = function(n) {
                n || (n = {}), n.routes && (this.routes = n.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            L = /\((.*?)\)/g,
            g = /(\(\?)?:\w+/g,
            M = /\*\w+/g,
            C = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        t.extend(D.prototype, s, {
            initialize: function() {},
            route: function(n, o, r) {
                t.isRegExp(n) || (n = this._routeToRegExp(n)), t.isFunction(o) && (r = o, o = ""), r || (r = this[o]);
                var i = this;
                return e.history.route(n, function(t) {
                    var a = i._extractParameters(n, t);
                    i.execute(r, a), i.trigger.apply(i, ["route:" + o].concat(a)), i.trigger("route", o, a), e.history.trigger("route", i, o, a)
                }), this
            },
            execute: function(n, e) {
                n && n.apply(this, e)
            },
            navigate: function(n, t) {
                return e.history.navigate(n, t), this
            },
            _bindRoutes: function() {
                if (this.routes) {
                    this.routes = t.result(this, "routes");
                    for (var n, e = t.keys(this.routes); null != (n = e.pop());) this.route(n, this.routes[n])
                }
            },
            _routeToRegExp: function(n) {
                return n = n.replace(C, "\\$&").replace(L, "(?:$1)?").replace(g, function(n, e) {
                    return e ? n : "([^/?]+)"
                }).replace(M, "([^?]*?)"), new RegExp("^" + n + "(?:\\?([\\s\\S]*))?$")
            },
            _extractParameters: function(n, e) {
                var o = n.exec(e).slice(1);
                return t.map(o, function(n, e) {
                    return e === o.length - 1 ? n || null : n ? decodeURIComponent(n) : null
                })
            }
        });
        var f = e.History = function() {
                this.handlers = [], t.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
            },
            U = /^[#\/]|\s+$/g,
            v = /^\/+|\/+$/g,
            b = /msie [\w.]+/,
            P = /\/$/,
            y = /#.*$/;
        f.started = !1, t.extend(f.prototype, s, {
            interval: 50,
            atRoot: function() {
                return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
            },
            getHash: function(n) {
                var e = (n || this).location.href.match(/#(.*)$/);
                return e ? e[1] : ""
            },
            getFragment: function(n, e) {
                if (null == n)
                    if (this._hasPushState || !this._wantsHashChange || e) {
                        n = decodeURI(this.location.pathname + this.location.search);
                        var t = this.root.replace(P, "");
                        n.indexOf(t) || (n = n.slice(t.length))
                    } else n = this.getHash();
                return n.replace(U, "")
            },
            start: function(n) {
                if (f.started) throw new Error("Backbone.history has already been started");
                f.started = !0, this.options = t.extend({
                    root: "/"
                }, this.options, n), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                var o = this.getFragment(),
                    r = document.documentMode,
                    i = b.exec(navigator.userAgent.toLowerCase()) && (!r || 7 >= r);
                if (this.root = ("/" + this.root + "/").replace(v, "/"), i && this._wantsHashChange) {
                    var a = e.$('<iframe src="javascript:0" tabindex="-1">');
                    this.iframe = a.hide().appendTo("body")[0].contentWindow, this.navigate(o)
                }
                this._hasPushState ? e.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !i ? e.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = o;
                var s = this.location;
                if (this._wantsHashChange && this._wantsPushState) {
                    if (!this._hasPushState && !this.atRoot()) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
                    this._hasPushState && this.atRoot() && s.hash && (this.fragment = this.getHash().replace(U, ""), this.history.replaceState({}, document.title, this.root + this.fragment))
                }
                return this.options.silent ? void 0 : this.loadUrl()
            },
            stop: function() {
                e.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), this._checkUrlInterval && clearInterval(this._checkUrlInterval), f.started = !1
            },
            route: function(n, e) {
                this.handlers.unshift({
                    route: n,
                    callback: e
                })
            },
            checkUrl: function(n) {
                var e = this.getFragment();
                return e === this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe))), e === this.fragment ? !1 : (this.iframe && this.navigate(e), void this.loadUrl())
            },
            loadUrl: function(n) {
                return n = this.fragment = this.getFragment(n), t.any(this.handlers, function(e) {
                    return e.route.test(n) ? (e.callback(n), !0) : void 0
                })
            },
            navigate: function(n, e) {
                if (!f.started) return !1;
                e && e !== !0 || (e = {
                    trigger: !!e
                });
                var t = this.root + (n = this.getFragment(n || ""));
                if (n = n.replace(y, ""), this.fragment !== n) {
                    if (this.fragment = n, "" === n && "/" !== t && (t = t.slice(0, -1)), this._hasPushState) this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, t);
                    else {
                        if (!this._wantsHashChange) return this.location.assign(t);
                        this._updateHash(this.location, n, e.replace), this.iframe && n !== this.getFragment(this.getHash(this.iframe)) && (e.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, n, e.replace))
                    }
                    return e.trigger ? this.loadUrl(n) : void 0
                }
            },
            _updateHash: function(n, e, t) {
                if (t) {
                    var o = n.href.replace(/(javascript:|#).*$/, "");
                    n.replace(o + "#" + e)
                } else n.hash = "#" + e
            }
        }), e.history = new f;
        var V = function(n, e) {
            var o, r = this;
            o = n && t.has(n, "constructor") ? n.constructor : function() {
                return r.apply(this, arguments)
            }, t.extend(o, r, e);
            var i = function() {
                this.constructor = o
            };
            return i.prototype = r.prototype, o.prototype = new i, n && t.extend(o.prototype, n), o.__super__ = r.prototype, o
        };
        u.extend = d.extend = D.extend = S.extend = f.extend = V;
        var B = function() {
                throw new Error('A "url" property or function must be specified')
            },
            F = function(n, e) {
                var t = e.error;
                e.error = function(o) {
                    t && t(n, o, e), n.trigger("error", n, o, e)
                }
            };
        return e
    })
}, function(n, e, t) {
    var o, r;
    o = [], r = function() {
        "use strict";

        function n(n) {
            return this.name = n, this._log = e, this._warn = e, this._error = e, this._enabled = !1, this
        }
        var e = function() {},
            t = window.console || {};
        n.prototype.isEnabled = function() {
            return this._enabled
        }, n.prototype.setName = function(n) {
            this.name = n
        }, n.prototype.enable = function() {
            this._log = t.log || e, this._warn = t.warn || this._log, this._error = t.error || this._log, this._enabled = !0;
            try {
                if (Function.prototype.bind && "object" == typeof t)
                    for (var n = ["log", "warn", "error"], o = 0; o < n.length; o++) t[n[o]] = Function.prototype.call.bind(t[n[o]], t)
            } catch (r) {}
            return this
        }, n.prototype.write = function(n, e) {
            var o = Array.prototype.slice.call(e);
            o.unshift(this.name + ":"), n.apply(t, o)
        }, n.prototype.log = function() {
            this.write(this._log, arguments)
        }, n.prototype.warn = function() {
            this.write(this._warn, arguments)
        }, n.prototype.error = function() {
            this.write(this._error, arguments)
        };
        var o = new n("Apollo");
        return o.enable(), o
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(2)], r = function(n) {
        "use strict";
        var e = {
                services: {
                    comment: {
                        uri: "https://apollo.leagueoflegends.com/apollo/"
                    },
                    commentProxy: {
                        uri: "https://boards.na.leagueoflegends.com/api/"
                    },
                    messaging: {
                        uri: "https://notifications.leagueoflegends.com/api/1.0/"
                    },
                    polls: {
                        uri: "https://polls.leagueoflegends.com/api/v1/polls",
                        choiceLimit: 10
                    },
                    dradis: {
                        identifier: "riot__apollo__js"
                    }
                },
                features: {
                    toolbarEnabled: !0,
                    unsafeLinkFilterEnabled: !0
                },
                callbacks: {
                    login: null,
                    pvpnetTokenDecorator: null
                },
                clientName: "riot__apollo__js"
            },
            t = window.apolloCfg || {},
            o = n.merge(e, t);
        return o
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(4), t(5)], r = function(n, e, t) {
        "use strict";
        return window.Riot && window.RiotKit && window.Riot.Sandworm && window.Riot.DDragon || (window.Riot = window.Riot || {}, window.Riot.getCookie = window.Riot.getCookie || function() {
            return !1
        }, window.Riot.create = window.Riot.create || function() {
            return {
                addListener: function() {}
            }
        }, window.Riot.DDragon = window.Riot.DDragon || {
            getImg: function() {}
        }, window.Riot.get = window.Riot.get || function() {}, window.Riot.Sandworm = window.Riot.Sandworm || {
            getLang: function() {
                return "en"
            },
            getRegion: function() {
                return "UNKNOWN"
            },
            formatLanguageCode: function() {
                return "en_US"
            },
            getSummonerName: function() {
                return !1
            },
            cookies: {
                token: null
            },
            pvpnetMenus: {
                show: function() {}
            }
        }, window.pvpnet_localizations = window.pvpnet_localizations || {
            login: "",
            logout: "",
            support: "",
            register: ""
        }, window.sw_cfg = window.sw_cfg || {
            regions: {
                na: {
                    languages: ["en_US"]
                }
            }
        }), t.callbacks.login && (window.Riot.Sandworm.pvpnetMenus.show = t.callbacks.login), window.Riot
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(6), t(106), t(107), t(108), t(109), t(110), t(111), t(112), t(113), t(115), t(114), t(116), t(117), t(118), t(119), t(120), t(121), t(122), t(124), t(123), t(87), t(88), t(89), t(90), t(91), t(92), t(93), t(95), t(94), t(96), t(97), t(98), t(99), t(100), t(101), t(102), t(104), t(103), t(105)], r = function(n, e, t, o, r, i, a, s, E, _, l, O, u, R, d, N, T, c, A, S, m, p, I, h, D, L, g, M, C, f, U, v, b, P, y, V, B, F, k, w, H) {
        "use strict";

        function z(e) {
            switch (e) {
                case "cs-CZ":
                    n.timeago.settings.strings = h, G.extend(JSON.parse(i));
                    break;
                case "de-DE":
                    n.timeago.settings.strings = D, G.extend(JSON.parse(a));
                    break;
                case "el-GR":
                    n.timeago.settings.strings = L, G.extend(JSON.parse(s));
                    break;
                case "en-AU":
                    n.timeago.settings.strings = g, G.extend(JSON.parse(E));
                    break;
                case "en-GB":
                    n.timeago.settings.strings = M, G.extend(JSON.parse(_));
                    break;
                case "en-PL":
                    n.timeago.settings.strings = C, G.extend(JSON.parse(l));
                    break;
                case "en-US":
                    n.timeago.settings.strings = f, G.extend(JSON.parse(O));
                    break;
                case "es-ES":
                    n.timeago.settings.strings = v, G.extend(JSON.parse(R));
                    break;
                case "es-MX":
                case "es-AR":
                    n.timeago.settings.strings = U, G.extend(JSON.parse(u));
                    break;
                case "fr-FR":
                    n.timeago.settings.strings = b, G.extend(JSON.parse(d));
                    break;
                case "hu-HU":
                    n.timeago.settings.strings = P, G.extend(JSON.parse(N));
                    break;
                case "it-IT":
                    n.timeago.settings.strings = y, G.extend(JSON.parse(T));
                    break;
                case "ja-JP":
                    n.timeago.settings.strings = V, G.extend(JSON.parse(c));
                    break;
                case "pl-PL":
                    n.timeago.settings.strings = B, G.extend(JSON.parse(A));
                    break;
                case "pt-BR":
                    n.timeago.settings.strings = F, G.extend(JSON.parse(S));
                    break;
                case "ro-RO":
                    n.timeago.settings.strings = k, G.extend(JSON.parse(m));
                    break;
                case "tr-TR":
                    n.timeago.settings.strings = w, G.extend(JSON.parse(p));
                    break;
                case "ru-RU":
                    n.timeago.settings.strings = H, G.extend(JSON.parse(I))
            }
            x = e, n.timeago.settings.localeTitle = !0
        }
        var G = new r,
            x = "en-EN";
        window._polyglot = G;
        var Y = function() {
                this.setCultureIdentifier = function(n) {
                    z(n)
                }, this.setCultureMessages = function(n) {
                    return x = this.getCultureIdentifier(), G.extend(n)
                }, this.getCultureIdentifier = function() {
                    return x
                }, this.getLanguageIdentifier = function() {
                    return x.split("-")[0]
                }, this.getCountryIdentifier = function() {
                    return x.split("-")[1]
                }, this.getCurrentCultureMessages = function() {
                    return G.phrases
                }, this.getString = function(n) {
                    return G.t(n)
                }, this.clearCurrentCultureMessages = function(n) {
                    return G.clear()
                }, this.setCultureIdentifierFromPVPNetLanguageIdentifier = function(n) {
                    var e = "en-US";
                    switch (n) {
                        case "cs":
                        case "cs_cz":
                            e = "cs-CZ";
                            break;
                        case "de":
                        case "de_de":
                            e = "de-DE";
                            break;
                        case "el":
                        case "el_gr":
                            e = "el-GR";
                            break;
                        case "es":
                        case "es_es":
                            e = "es-ES";
                            break;
                        case "es_mx":
                        case "es_ar":
                            e = "es-MX";
                            break;
                        case "fr":
                        case "fr_fr":
                            e = "fr-FR";
                            break;
                        case "hu":
                        case "hu_hu":
                            e = "hu-HU";
                            break;
                        case "it":
                        case "it_it":
                            e = "it-IT";
                            break;
                        case "ja":
                        case "ja_jp":
                            e = "ja-JP";
                            break;
                        case "pl":
                        case "pl_pl":
                            e = "pl-PL";
                            break;
                        case "pt_br":
                        case "pt":
                            e = "pt-BR";
                            break;
                        case "ro":
                        case "ro_ro":
                            e = "ro-RO";
                            break;
                        case "tr":
                        case "tr_tr":
                            e = "tr-TR";
                            break;
                        case "ru":
                        case "ru_ru":
                            e = "ru-RU"
                    }
                    this.setCultureIdentifier(e)
                }
            },
            W = new Y;
        return W.setCultureIdentifierFromPVPNetLanguageIdentifier(o.Sandworm.getLang().toLowerCase()), W
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(9), t(6)], r = function(n, e, t, o, r) {
        "use strict";
        var i = new o,
            a = r.Sandworm.getSummonerName() || "";
        a = a.replace(/\+/g, " "), a = decodeURIComponent(a), a = a.replace(/[<">]/g, "");
        var s = r.Sandworm.getRegion(),
            E = document.cookie.match("PVPNET_ID_" + s.toUpperCase() + "=(.*?)(;|$)"),
            _ = E ? E[1] : void 0;
        return a && "" !== a && s && _ && (i.set({
            id: _,
            name: a,
            realm: s
        }), i.authenticate()), i
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(6), t(5), t(15), t(16), t(10)], r = function(n, e, t, o, r, i, a, s) {
        "use strict";
        var E = new i.Store("apollo:profiles", 60),
            _ = t.Model.extend({
                defaults: {
                    id: null,
                    name: "Anonymous",
                    realm: "NA",
                    isModerator: !1,
                    isRioter: !1,
                    lolSummonerLevel: null,
                    lolProfileIcon: null,
                    isAuthenticated: !1,
                    applicationsCanModerate: [],
                    loaded: !1
                },
                initialize: function() {},
                isAuthenticated: function() {
                    return this.get("isAuthenticated")
                },
                authenticate: function() {
                    return this.set("isAuthenticated", !0)
                },
                isModerator: function() {
                    return this.get("isModerator") && this.isAuthenticated()
                },
                getAvatar: function() {
                    var n = ["https://avatar.leagueoflegends.com/", encodeURIComponent(this.get("realm")), "/", encodeURIComponent(this.get("name")), ".png"];
                    return n.join("")
                },
                canModerateApplication: function(n) {
                    return this.get("isModerator") ? !0 : e.isArray(this.get("applicationsCanModerate")) && -1 !== this.get("applicationsCanModerate").indexOf(n) ? !0 : !1
                },
                isApplicationOwner: function(n) {
                    var t = n.get("applicationUser");
                    return e.isObject(t) && t.hasOwnProperty("id") && t.hasOwnProperty("realm") && t.id == this.get("id") && t.realm == this.get("realm") ? !0 : !1
                },
                canEditApplication: function(n) {
                    return this.get("isModerator") ? !0 : this.isApplicationOwner(n) ? !0 : !1
                },
                reset: function() {
                    this.clear().set(this.defaults)
                },
                urlRoot: function() {
                    var n = "";
                    return n += "users/", n += this.get("realm").toUpperCase(), n += "/"
                },
                url: function() {
                    var n = e.result(this, "urlRoot");
                    return n.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.get("id"))
                },
                fetch: function(n) {
                    return n = n || {}, n.data = n.data || {
                        include_profile: "true"
                    }, t.Model.prototype.fetch.call(this, n)
                },
                parse: function(n) {
                    if (!n.hasOwnProperty("user")) return {};
                    var t = n.user;
                    return t.profile = t.profile || {}, t.profile.data = t.profile.data || {}, t.title = t.profile.data.title, t.team = t.profile.data.team, t.avatar = t.profile.data.avatar, t.badges = e.chain(t.profile.data).pick(function(n, e) {
                        return n && e.match(/^b_/)
                    }).keys().map(function(n) {
                        return a.dasherize(n)
                    }).sort().value(), delete t.profile, t.team = t.isRioter ? "rioters" : t.team, t
                },
                sync: function(n, e, t) {
                    if (!this.get("id") || !this.get("realm")) return !1;
                    var o = this.url(),
                        r = o;
                    if ("read" !== n) return void Logger.error("ApolloJS: " + n.toUpperCase() + " not yet been implemented");
                    var i = E.get(r);
                    if (i && "success" === i.status) return t.success && t.success(i.data);
                    var a = t.success || function() {};
                    t.success = function(n, e, t) {
                        E.set(r, {
                            status: "success",
                            data: n
                        }), a(n, e, t)
                    };
                    var s = t.error || function() {};
                    t.error = function(n, e, t) {
                        E.set(r, {
                            status: "error",
                            data: null
                        }), s(n, e, t)
                    }, this.httpGet(o, null, function(n) {
                        t.success(n)
                    })
                },
                purgeFromCache: function() {
                    var n = this.url();
                    E.remove(n)
                },
                getIdHash: function() {
                    return {
                        id: this.get("id"),
                        realm: this.get("realm")
                    }
                }
            });
        return e.extend(_.prototype, s), _
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(5), t(6), t(2), t(42)], r = function(n, e, t, o) {
        "use strict";
        var r, i, a = {
                easyXDM: o.noConflict("APOLLO")
            },
            s = {
                initEasyXDM: function() {
                    i = n.services.comment.uri, r = new a.easyXDM.Rpc({
                        local: "name.html",
                        remote: n.services.comment.uri + "cors/index.html",
                        swf: n.services.comment.uri + "easyXDM.swf",
                        remoteHelper: n.services.comment.uri + "name.html"
                    }, {
                        remote: {
                            request: {}
                        }
                    })
                },
                checkForConfigChanges: function() {
                    n.services.comment.uri !== i && (r.destroy(), this.initEasyXDM())
                },
                httpGet: function(n, e, o, r) {
                    t.reduce(e, function(e, t, o) {
                        n = n + (~n.indexOf("?") ? "&" : "?") + o + "=" + t
                    }, n), n += ~n.indexOf("?") ? "&" : "", this.httpSend(n, "GET", e, o, r)
                },
                httpPost: function(n, e, t, o) {
                    this.httpSend(n, "POST", e, t, o)
                },
                httpPut: function(n, e, t, o) {
                    this.httpSend(n, "PUT", e, t, o)
                },
                httpDelete: function(n, e, t, o) {
                    this.httpSend(n, "DELETE", e, t, o)
                },
                httpSend: function(e, o, i, a, s, E) {
                    var _ = this,
                        l = this.getAuthToken();
                    "undefined" != typeof E ? r = E : this.checkForConfigChanges(), a = a || function() {}, s = s || function() {};
                    var O = {
                        "Content-Type": "application/json",
                        "X-Client": n.clientName
                    };
                    if (l && t.extend(O, {
                            "X-PVPNET": l
                        }), navigator && "Microsoft Internet Explorer" === navigator.appName) {
                        var u = new Date;
                        e += (~e.indexOf("?") ? "&" : "?") + "t=" + u.getYear() + u.getMonth() + u.getDay() + u.getHours() + u.getMinutes() + u.getSeconds()
                    }
                    r.request({
                        url: n.services.comment.uri + e,
                        method: o,
                        data: i,
                        headers: O
                    }, function(n) {
                        n = JSON.parse(n.data), a(n)
                    }, function(n) {
                        var t = n.data.data || {};
                        t = JSON.parse(t) || {
                            errorMessage: t,
                            errorCode: ""
                        }, _.set("lastError", {
                            changedAt: (new Date).getTime(),
                            status: n.data.status + "",
                            message: n.message,
                            data: t,
                            method: o,
                            relativeUri: e
                        }), s(n)
                    })
                },
                getAuthToken: function() {
                    var t = e.Sandworm.getRegion().toUpperCase(),
                        o = document.cookie.match("PVPNET_TOKEN_" + t + "=(.*?)(;|$)"),
                        r = o ? o[1] : void 0;
                    return t && r ? (n.callbacks.pvpnetTokenDecorator && (r = n.callbacks.pvpnetTokenDecorator(r)), t + ":" + r) : void 0
                }
            };
        return s.initEasyXDM(), s
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t, t(1), t(2), t(3), t(6), t(5), t(146), t(9), t(20), t(10), t(31), t(38), t(37), t(21), t(7), t(35), t(30)], r = function(n, e, o, r, i, a, s, E, _, l, O, u, R, d, N, T, c) {
        "use strict";
        var A = new c,
            S = r.Model.extend({
                defaults: {
                    lastError: "",
                    minimized: !1,
                    deleted: !1,
                    replying: !1,
                    editing: !1,
                    lowQualityVisible: !1,
                    childCountVisible: !1,
                    moreCommentsVisible: !1,
                    moreCommentsRequested: !1,
                    isSticky: !1,
                    isAuthor: !1,
                    isRioter: !1,
                    isModerator: !1,
                    isA: "comment",
                    pageSize: 50
                },
                urlRoot: function() {
                    return "applications/" + this.get("applicationId") + "/discussions/";
                },
                initialize: function() {
                    var n = this;
                    o.bindAll(this, "updateChildCount", "updateMoreCommentsVisible", "updateMarkdownMessage"), this.on("change:message", this.updateMarkdownMessage);
                    var e = t(20);
                    if (this.comments = new e, this.has("replies")) {
                        var r = this.get("replies");
                        this.set({
                            moreCount: r.moreCount,
                            numLoaded: r.numLoaded,
                            lastCommentId: r.lastCommentId
                        });
                        var i = o.map(r.comments, function(e) {
                            return e.applicationId = n.get("applicationId"), e.discussionId = n.get("discussionId"), e.isSticky = n.get("isSticky"), e
                        });
                        this.comments.add(i)
                    }
                    this.updateVoteState(), this.updateLowQuality(), this.updateChildCount(), this.updateMoreCommentsVisible(), this.updateAuthor(), this.updateLevelsDeep(), this.comments.on("add reset newChild", this.updateChildCount, this), this.updateMarkdownMessage()
                },
                newReply: function(n, e) {
                    var t = this,
                        o = this.urlRoot() + this.get("discussionId") + "/comment/",
                        r = n,
                        a = N.getString("LEAVE_A_COMMENT");
                    r.message && r.message !== a && (r.message = r.message.replace(/<[\/]*script>/g, ""), r.language = i.Sandworm.formatLanguageCode(i.Sandworm.getLang()), this.httpPost(o, r, function(n) {
                        var o = new S(n);
                        o.set("discussionId", t.get("discussionId")), o.set("applicationId", t.get("applicationId")), t.comments.add(o, {
                            at: 0
                        }), e(o)
                    }))
                },
                edit: function(n, t) {
                    var o = (new Date).getTime() - e.timeago.parse(this.attributes.createdAt).getTime();
                    if (!this.getCurrentUserIsModerator() && o > 3e5) return !1;
                    var r = this,
                        a = this.urlRoot() + this.get("discussionId") + "/comment/" + this.get("id"),
                        s = n;
                    s.message && s.message !== this.get("message") && (s.message = s.message.replace(/<[\/]*script>/g, ""), s.language = i.Sandworm.formatLanguageCode(i.Sandworm.getLang()), this.httpPut(a, s, function(n) {
                        r.set("message", n.message), t()
                    }))
                },
                getModAppURIAndPopup: function() {
                    T.ensureProperty("services.modApp", o.bind(function(n) {
                        n && this.modPopup()
                    }, this))
                },
                modPopup: function() {
                    var n = this,
                        e = "confirmDelete";
                    window.postMessages.hook(e, {
                        origin: a.services.modApp.uri,
                        popup: {
                            url: a.services.modApp.uri + "/confirm_delete/" + n.get("applicationId") + "/" + n.get("discussionId") + "/" + n.get("id") + "/?origin=" + encodeURIComponent(location.href),
                            target: e,
                            params: "width=600,height=700"
                        },
                        initialize: function(n) {
                            window.postMessages.send(e, "setupForm")
                        },
                        deleteSuccess: function(t) {
                            n.set({
                                deleted: !0
                            }), window.postMessages.closeWindow(e)
                        },
                        deleteFail: function(n) {}
                    })
                },
                remove: function() {
                    var n = this;
                    if (this.get("username") === this.author.get("name")) {
                        if (this.confirmDelete()) {
                            var e = this.urlRoot() + this.get("discussionId") + "/comment/" + this.get("id"),
                                t = {};
                            this.httpDelete(e, t, function(e) {
                                n.set({
                                    deleted: e.deleted,
                                    deletedAt: e.deletedAt
                                })
                            })
                        }
                    } else a.services.modApp && a.services.modApp.uri ? n.modPopup() : n.getModAppURIAndPopup()
                },
                confirmDelete: function() {
                    return window.confirm(N.getString("DELETE_COMMENT_CONFIRM"))
                },
                updateLowQuality: function() {
                    var n = this.get("downVotes") > 20 && this.get("downVotes") / this.get("totalVotesCast") > .6;
                    this.set("lowQualityVisible", n)
                },
                updateLevelsDeep: function() {
                    this.get("levelsDeep") > 4 && this.set("hideReplyControl", !0), this.get("levelsDeep") < 4 && this.isAuthenticated() ? this.set("displayReplyLink", !0) : this.set("displayReplyLink", !1)
                },
                updateMarkdownMessage: function() {
                    this.get("isRioter") && A.setOptions({
                        riotRioterFlavoredMarkdown: !0
                    });
                    var n = A.parse(this.get("message"));
                    this.set("markdownMessage", n)
                },
                toggle: function(n, e) {
                    var t = {},
                        o = this.get(n);
                    t[n] = !o, this.set(t, {
                        silent: e
                    })
                },
                url: function() {
                    return this.urlRoot() + this.get("discussionId") + "/comment/" + this.get("id")
                }
            });
        return o.extend(S.prototype, l), o.extend(S.prototype, O), o.extend(S.prototype, u), o.extend(S.prototype, R), o.extend(S.prototype, d), S
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    __WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return this.JST = this.JST || {}, this.JST["app/apollo_widgets/toolbar/templates/dropdown.html"] = function(obj) {
            obj || (obj = {});
            var __p = "",
                __e = _.escape;
            with(obj) __p += '<div class="toolbar_dropdown" id="' + __e(divId) + '">\n	<input class="dragon_query" id="' + __e(divId) + '-query" placeholder="' + __e(placeholder) + '"/>\n	<div class="frame" id="' + __e(divId) + '-ObjBox"></div>\n</div>';
            return __p
        }, this.JST["app/apollo_widgets/toolbar/templates/sticker-dropdown.html"] = function(obj) {
            obj || (obj = {});
            var __p = "",
                __e = _.escape;
            with(obj) __p += '<div class="toolbar_dropdown" id="' + __e(divId) + '">\n  <div class="frame" id="' + __e(divId) + '-ObjBox"></div>\n</div>\n';
            return __p
        }, this.JST["app/apollo_widgets/toolbar/templates/toolbar.html"] = function(obj) {
            obj || (obj = {});
            var __p = "";
            _.escape;
            with(obj) __p += '<div class="buttons">\n</div>';
            return __p
        }, this.JST
    }.call(exports, __webpack_require__, exports, module), !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
}, function(n, e, t) {
    (function(n, o) {
        function r(n, e) {
            this._id = n, this._clearFn = e
        }
        var i = t(19).nextTick,
            a = Function.prototype.apply,
            s = Array.prototype.slice,
            E = {},
            _ = 0;
        e.setTimeout = function() {
            return new r(a.call(setTimeout, window, arguments), clearTimeout)
        }, e.setInterval = function() {
            return new r(a.call(setInterval, window, arguments), clearInterval)
        }, e.clearTimeout = e.clearInterval = function(n) {
            n.close()
        }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() {
            this._clearFn.call(window, this._id)
        }, e.enroll = function(n, e) {
            clearTimeout(n._idleTimeoutId), n._idleTimeout = e
        }, e.unenroll = function(n) {
            clearTimeout(n._idleTimeoutId), n._idleTimeout = -1
        }, e._unrefActive = e.active = function(n) {
            clearTimeout(n._idleTimeoutId);
            var e = n._idleTimeout;
            e >= 0 && (n._idleTimeoutId = setTimeout(function() {
                n._onTimeout && n._onTimeout()
            }, e))
        }, e.setImmediate = "function" == typeof n ? n : function(n) {
            var t = _++,
                o = arguments.length < 2 ? !1 : s.call(arguments, 1);
            return E[t] = !0, i(function() {
                E[t] && (o ? n.apply(null, o) : n.call(null), e.clearImmediate(t))
            }), t
        }, e.clearImmediate = "function" == typeof o ? o : function(n) {
            delete E[n]
        }
    }).call(e, t(13).setImmediate, t(13).clearImmediate)
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2)], r = function(n, e) {
        "use strict";
        var t = {
            getBackdrop: function() {
                return n("#apollojs-backdrop")
            },
            setupBackdrop: function(t) {
                var o = this.getBackdrop();
                0 === o.length && (o = n('<div id="apollojs-backdrop"></div>'), n(document.body).append(o), n(window).on("resize", e.bind(function() {
                    this.resizeBackdrop()
                }, this))), o.on("click", e.bind(function() {
                    this.hideModal(t)
                }, this)), this.resizeBackdrop(), o.show()
            },
            resizeBackdrop: function() {
                var n = this.getBackdrop(),
                    e = document.body.scrollHeight,
                    t = document.body.scrollWidth;
                n.css({
                    height: e + "px",
                    width: t + "px"
                })
            },
            makeModal: function(e) {
                e.addClass("apollojs-modal"), (0 == e.parent().length || e.parent()[0] !== document.body) && (e.detach(), n(document.body).append(e))
            },
            showModal: function(e, t) {
                if (e = n(e), this.makeModal(e), this.setupBackdrop(e), !t) {
                    var o = e.outerWidth(),
                        r = e.outerHeight(),
                        i = window.innerWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                        a = window.innerHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                        s = n(window).scrollLeft(),
                        E = n(window).scrollTop(),
                        _ = Math.floor(i / 2 - o / 2 + s),
                        l = Math.floor(.3 * a - r / 2 + E);
                    e.css({
                        top: l + "px",
                        left: _ + "px"
                    })
                }
                e.show(), e.trigger("modal:shown")
            },
            hideModal: function(n) {
                var e = this.getBackdrop();
                e.hide(), e.off("click"), n.hide(), n.trigger("modal:hidden")
            }
        };
        return t
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(46)], r = function(n) {
        "use strict";
        return n.isSupported() ? n : {
            Store: function() {
                return {
                    get: function() {},
                    set: function() {}
                }
            }
        }
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [], r = function() {
        "use strict";
        var n = function(n) {
                var t, o = {},
                    r = o.hasOwnProperty(n);
                return r ? o[n] : (t = e(n).replace(/[ _]/g, "-"), o[n] = t, t)
            },
            e = function(n) {
                return n.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase()
            },
            t = function(n) {
                var e = document.createElement("a");
                e.href = n;
                var t = {
                    protocol: e.protocol,
                    hostname: e.hostname,
                    port: e.port,
                    pathname: e.pathname,
                    search: e.search,
                    hash: e.hash,
                    host: e.host
                };
                return ("" === t.port || null === t.port || void 0 === t.port) && ("https:" === t.protocol ? t.port = 443 : "http:" === t.protocol && (t.port = 80)), t
            },
            o = function(n) {
                n = encodeURIComponent(n);
                var e = new RegExp(n + "=([^;]*)"),
                    t = e.exec(document.cookie);
                return t ? decodeURIComponent(t[1]) : !1
            };
        return {
            dasherize: n,
            decamelize: e,
            uriToParts: t,
            getCookie: o
        }
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t, t(1), t(2), t(4), t(6), t(5), t(43), t(18), t(67)], r = function(n, e, o, r, i, a, s, E) {
        "use strict";
        var _ = function() {
            var n = this;
            return n.widgets = [], n.start = function(e, t) {
                return t = t || function() {}, n.started ? (r.error("Apollo already started!"), !1) : (r.log("Starting Apollo"), n.started = !0, n.attach(), void t(n))
            }, n.init = n.start, n.stop = function() {
                n.started = !1, n.widgets.forEach(function(n) {
                    r.log("Unbinding", n), e(n.el).off(), e(n.el).unbind(), e(n.el).children().off(), e(n.el).children().unbind()
                })
            }, n.attach = function(a) {
                a = a || e("body");
                var s = e(a),
                    E = s.find("[data-apollo-widget]").get();
                s.attr("data-apollo-widget") && (E = E.concat(s.get())), o.each(E, function(a) {
                    var s = e(a),
                        E = o.find(n.widgets, function(n) {
                            return n.el === a
                        });
                    if (o.size(E) > 0) return void r.log("Existing widget found", E);
                    var _ = {};
                    _.el = a;
                    var l, O = s.data();
                    o.each(O, function(n, e) {
                        e = e.replace(new RegExp("^apollo"), ""), e = e.charAt(0).toLowerCase() + e.slice(1), "widget" !== e ? _[e] = n : l = n.replace(new RegExp("-"), "_")
                    });
                    var u = t(44)("./" + l + "/main");
                    u(function(e) {
                        var t = new e(_);
                        return t.$el = s, t.isValid() ? (n.widgets.push({
                            el: a,
                            name: l,
                            ref: t,
                            options: _
                        }), void(i.DDragon && i.DDragon.addApp ? i.DDragon.addApp(["champion", "summoner", "item", "profileicon"], function() {
                            t.render(function() {
                                t.$el.trigger("apollo:widget:started", _)
                            })
                        }) : t.render(function() {
                            t.$el.trigger("apollo:widget:started", _)
                        }))) : void r.error("Apollo: Invalid options for " + l, t.validationError)
                    })
                })
            }, n.updateConfig = function(n) {
                return a = o.merge(a, n)
            }, n.Analytics = E, n
        };
        return window.Riot = window.Riot || {}, window.Riot.Apollo = new _, window.Riot.Apollo
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(2), t(5), t(45), t(8), t(6), t(16)], r = function(n, e, t, o, r, i) {
        "use strict";
        if (e.services.dradis && e.services.dradis.uri) {
            var a = i.uriToParts(e.services.dradis.uri),
                s = function() {
                    return window.hasOwnProperty("Dradis") ? (window.Dradis.host = a.hostname, window.Dradis.protocol = a.protocol, window.Dradis.Request.prototype.port = a.port, void 0) : void setTimeout(s, 100)
                };
            s()
        }
        var E = e.clientName;
        if (e.services.dradis && e.services.dradis.identifier && (E = e.services.dradis.identifier), o.isAuthenticated()) {
            var _ = o.get("realm") + "_" + o.get("id");
            t.identify(_, {
                summonerId: o.get("id"),
                userIsRioter: o.get("isRioter") ? "1" : "0"
            })
        }
        t.initialize({});
        var l = function(n) {
                if (n.hasOwnProperty("pii") && window.hasOwnProperty("dradis"))
                    for (var e in n.pii) window.dradis.setPii(e, n.pii[e]);
                return n
            },
            O = {
                messageType: E,
                path: window.location.pathname,
                host: window.location.hostname,
                env: r.Sandworm.getRegion().toUpperCase(),
                lang: r.Sandworm.getLang().toUpperCase().replace("_", "-"),
                title: encodeURIComponent(document.title.replace("&", ""))
            };
        return {
            pageview: function(e) {
                return e = e || {}, n.extend(e, O), e.hasOwnProperty("pii") && (l(e), delete e.pii), t.pageview(e)
            }
        }
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e) {
    function t() {
        _ = !1, a.length ? E = a.concat(E) : l = -1, E.length && o()
    }

    function o() {
        if (!_) {
            var n = setTimeout(t);
            _ = !0;
            for (var e = E.length; e;) {
                for (a = E, E = []; ++l < e;) a[l].run();
                l = -1, e = E.length
            }
            a = null, _ = !1, clearTimeout(n)
        }
    }

    function r(n, e) {
        this.fun = n, this.array = e
    }

    function i() {}
    var a, s = n.exports = {},
        E = [],
        _ = !1,
        l = -1;
    s.nextTick = function(n) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
        E.push(new r(n, e)), 1 !== E.length || _ || setTimeout(o, 0)
    }, r.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = i, s.addListener = i, s.once = i, s.off = i, s.removeListener = i, s.removeAllListeners = i, s.emit = i, s.binding = function(n) {
        throw new Error("process.binding is not supported")
    }, s.cwd = function() {
        return "/"
    }, s.chdir = function(n) {
        throw new Error("process.chdir is not supported")
    }, s.umask = function() {
        return 0
    }
}, function(n, e, t) {
    var o, r;
    o = [t(3), t(11), t], r = function(n, e, o) {
        "use strict";
        var r = n.Collection.extend({
            initialize: function() {
                this.model = t(11)
            }
        });
        return r
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(8)], r = function(n) {
        "use strict";
        var e = {
            getCurrentUsername: function() {
                return n.get("name")
            },
            isAuthenticated: function() {
                return n.isAuthenticated()
            },
            getCurrentUserIsModerator: function() {
                return n.isModerator()
            },
            getCurrentUserLoLSummonerIconUrl: function() {
                return n.get("lolSummonerIconUrl")
            }
        };
        return e
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(7), t(17), t(29)], r = function(n, e, t, o, r) {
        "use strict";
        var i = o.getCurrentCultureMessages(),
            a = {
                respondToMoreComments: function(n) {
                    this.haltFutureEventProcessing(n);
                    var e = this.getSortOptionsValue();
                    this.model.getMoreComments(e)
                },
                serializeForm: function(n) {
                    var e, t = n.serializeArray(),
                        o = {};
                    for (e in t) o[t[e].name] = t[e].value;
                    return o
                },
                translate: function(n) {
                    var t = e.clone(n);
                    return t.i18n = {
                        strings: i
                    }, t
                },
                commentCollection: function() {
                    return this.$el.find("> .riot-collection").first()
                },
                postButton: function() {
                    return this.replyFormContainer().find("button.post").first()
                },
                replyFormContainer: function() {
                    return this.$el.find("> .riot-reply-form-container").first()
                },
                replyForm: function() {
                    return this.replyFormContainer().find("form").first()
                },
                replyFormTextarea: function() {
                    return this.replyForm().find("textarea").first()
                },
                editFormContainer: function() {
                    return this.$el.find("> .riot-edit-form-container").first()
                },
                editForm: function() {
                    return this.editFormContainer().find("form").first()
                },
                editFormTextarea: function() {
                    return this.editForm().find("textarea").first()
                },
                commentFooter: function() {
                    return this.$el.find("> .riot-body-container > .riot-footer")
                },
                commentFooterControls: function() {
                    return this.$el.find("> .riot-body-container > .riot-footer > ul").first()
                },
                commentBodyContainer: function() {
                    return this.$el.find("> .riot-body-container").first()
                },
                commentBody: function() {
                    return this.$el.find("> .riot-body-container > .riot-body .high-quality").first()
                },
                commentVoting: function() {
                    return this.$el.find("> .riot-voting").first()
                },
                commentLinks: function() {
                    return this.$el.find("> .riot-body-container > .riot-body .high-quality a")
                },
                commentMinimizeButton: function() {
                    return this.$el.find("> .riot-masthead > .toggle-comment").first()
                },
                commentAuthorAvatar: function() {
                    return this.$el.find("> .riot-body-container > .riot-footer > p > span.author-avatar img")
                },
                commentCurrentUserAvatar: function() {
                    return this.$el.find("> .riot-edit-form-container span.current-user-avatar, > .riot-reply-form-container span.current-user-avatar img")
                },
                totalVotes: function() {
                    return this.$el.find("> .riot-voting .total-votes").first()
                },
                displayedCount: function() {
                    return this.$el.find("> .riot-discussion-displayed-count").first()
                },
                discussionFooter: function() {
                    return this.$el.find("> .riot-discussion-footer")
                },
                totalCountLabel: function() {
                    return this.$el.find("> .riot-discussion-masthead > h2 > .total-comment-count").first()
                },
                getSortOptionsValue: function() {
                    return n(".riot-apollo #riot-apollo-sort-order").data("sort-type").toLowerCase()
                },
                childCountLabel: function() {
                    return this.commentFooter().find("> span.child-count-label").first()
                },
                sortOptionsValue: function(e) {
                    return n(e.currentTarget).val().toLowerCase()
                },
                haltFutureEventProcessing: function(n) {
                    this.lastClickTarget = n.currentTarget, n.preventDefault(), n.stopImmediatePropagation()
                },
                resetReplyForm: function() {
                    this.replyForm()[0].reset()
                },
                resetEditForm: function() {
                    this.editForm()[0].reset()
                },
                enableReplyTextAreaBehavior: function() {
                    var n = this.replyFormTextarea(),
                        e = o.getString("LEAVE_A_COMMENT");
                    n.val(e), n.focus(function() {
                        n.val() === e && n.val("")
                    }), n.blur(function() {
                        "" === n.val() && n.val(e)
                    }), n.expanding(), n.parent().addClass("expandingText")
                },
                enableEditTextAreaBehavior: function() {
                    var n = this.editFormTextarea();
                    return n.val(this.model.get("message")), n.expanding(), n.parent().addClass("expandingText"), n
                },
                clearCurrentElement: function() {
                    this.$el.empty()
                },
                setCurrentElementMarkup: function(n) {
                    this.$el.html(n)
                },
                appendToCurrentElementMarkup: function(n) {
                    this.$el.append(n)
                },
                setCommentBody: function(n) {
                    this.commentBody().html(n)
                },
                setTotalVotes: function(n) {
                    this.totalVotes().html(n)
                },
                setChildCountLabelCopy: function(n) {
                    this.childCountLabel().find("> span.copy").html(n)
                },
                setChildCountLabelValue: function(n) {
                    this.childCountLabel().find("> span.value").html(n)
                },
                setTotalCountLabelValue: function(n) {
                    this.totalCountLabel().find("> span.value").html(n)
                },
                setDiscussionMoreCountLabelValue: function(n) {
                    this.$el.find("> .riot-more span.value").html(n)
                },
                renderBooleanAttributeAsElementClass: function(n) {
                    var e = this.$el.hasClass(n),
                        t = !1,
                        o = !1;
                    this.model && this.model.has(n) && this.model.get(n) === !0 ? (this.$el.addClass(n), t = !0) : this.collection && this.collection.has(n) && this.collection.get(n) === !0 ? (this.$el.addClass(n), t = !0) : (this.$el.removeClass(n), o = !0), e === !1 && t && this.$el.trigger("class:added:" + n), e === !0 && o && this.$el.trigger("class:removed:" + n.toLowerCase())
                },
                renderSortDropdownLabelValue: function() {
                    var n = this.model.get("sortType").toUpperCase(),
                        e = i[n];
                    this.$el.find("#riot-apollo-sort-order span").html('<em class="icon icon-arrow-down"></em> ' + e)
                }
            };
        return a
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    __WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return this.JST = this.JST || {}, this.JST["app/apollo_widgets/comment_listing/templates/discussion.html"] = function(obj) {
            function print() {
                __p += __j.call(arguments, "")
            }
            obj || (obj = {});
            var __t, __p = "",
                __j = (_.escape, Array.prototype.join);
            with(obj) __p += "<!-- TODO: Put this in the right spot once we decide what this will look like -->\n<!-- renderPartial('discussion-view-metadata-template', {url: 'http://derp'}) -->\n\n<div class='riot-discussion-masthead'>\n  <h1>" + (null == (__t = i18n.strings.DISCUSS) ? "" : __t) + "\n    <span class='riot-discussion-login-link'>\n      &nbsp;(<a href='javascript:;'>" + (null == (__t = i18n.strings.LOGIN_TO_COMMENT) ? "" : __t) + "</a>)\n    </span>\n  </h1>\n  <h2>\n    <span class='total-comment-count'>\n      <span class='value'>" + (null == (__t = softComments) ? "" : __t) + "</span>\n      &nbsp;\n      <span class='copy'>" + (null == (__t = i18n.strings.COMMENTS) ? "" : __t) + "</span>\n      &nbsp;\n    </span>\n    <em>" + (null == (__t = i18n.strings.SORTED_BY) ? "" : __t) + "&nbsp;</em>\n\n    <span class=\"dropdown riot-component sort-order\" id='riot-apollo-sort-order' data-sort-type='" + (null == (__t = sortType) ? "" : __t) + '\'>\n      <select>\n        <option value="best" ', "best" === sortType && print("selected"), __p += " >" + (null == (__t = i18n.strings.BEST.toUpperCase()) ? "" : __t) + '</option>\n        <option value="recent" ', "recent" === sortType && print("selected"), __p += ">" + (null == (__t = i18n.strings.RECENT.toUpperCase()) ? "" : __t) + "</option>\n      </select>\n    </span>\n  </h2>\n</div>\n\n<div class='riot-reply-form-container'>\n  <form>\n    <textarea name='message'></textarea>\n  </form>\n\n  <p>\n    <span class=\"current-user-avatar\" alt='" + (null == (__t = i18n.strings.AVATAR) ? "" : __t) + "'><img/></span>\n    <em>" + (null == (__t = i18n.strings.POSTING_AS + " " + username) ? "" : __t) + "</em>\n  </p>\n\n  <ul class='controls'>\n    <li>\n      <button class='post'>" + (null == (__t = i18n.strings.POST) ? "" : __t) + "</button>\n    </li>\n  </ul>\n</div>\n\n<div class='riot-discussion-footer'></div>\n<div class='riot-collection'><!-- Gets replaced with child comments --></div>\n\n<div class='riot-more bar'>\n  <a class='more' href='#'>\n    <!--<span class='value'>" + (null == (__t = moreCount) ? "" : __t) + "</span>-->\n    " + (null == (__t = i18n.strings.MORE_COMMENTS_SHOW) ? "" : __t) + "\n  </a>\n</div>\n";
            return __p
        }, this.JST["app/apollo_widgets/comment_listing/templates/discussion_comments_item.html"] = function(obj) {
            obj || (obj = {});
            var __t, __p = "";
            _.escape, Array.prototype.join;
            with(obj) __p += "<div class='riot-masthead'>\n  <button class='toggle-minimized'></button>\n  <span></span>\n</div>\n\n<ul class='riot-voting'>\n    <li>\n      <button class='up-vote'></button>\n    </li>\n    <li class='total-votes'> " + (null == (__t = totalVotesHuman) ? "" : __t) + " </li>\n    <li>\n      <button class='down-vote'></button>\n    </li>\n</ul>\n\n<div class='riot-body-container'>\n    <p class='riot-body'>\n      <span class='low-quality'>\n        <em>\n          " + (null == (__t = i18n.strings.COMMENT_IS_BELOW_THRESHOLD) ? "" : __t) + " (<a class='toggle-low-quality-visible' href='#'>" + (null == (__t = i18n.strings.SHOW) ? "" : __t) + "</a>)\n        </em>\n      </span>\n      <span class='high-quality'></span>\n    </p>\n  <div class='riot-footer'>\n    <p>\n      <span class=\"author-avatar\" title='" + (null == (__t = i18n.strings.AVATAR) ? "" : __t) + "'><img/></span>\n      <span class='username'>" + (null == (__t = user.name) ? "" : __t) + "</span>\n      <em class='deleted'>&nbsp;-&nbsp;" + (null == (__t = i18n.strings.DELETED) ? "" : __t) + "</em>\n      <em class='timeago'>&nbsp;-&nbsp;<abbr title='" + (null == (__t = createdAt) ? "" : __t) + "'></abbr></em>\n    </p>\n\n    <ul>\n      ", displayEditLink && (__p += "\n        <li><a class='toggle-edit-form'>" + (null == (__t = i18n.strings.EDIT) ? "" : __t) + "</a></li>\n      "), __p += "\n\n      ", displayReplyLink && (__p += "\n        <li><a class='toggle-reply-form'>" + (null == (__t = i18n.strings.REPLY) ? "" : __t) + "</a></li>\n      "), __p += "\n\n      ", displayDeleteLink && (__p += "\n        <li><a class='delete'>" + (null == (__t = i18n.strings.REMOVE) ? "" : __t) + "</a></li>\n      "), __p += "\n    </ul>\n\n    <span class='child-count-label'>\n      <span class='value'>" + (null == (__t = childCount) ? "" : __t) + "</span>\n      &nbsp;\n      <span class='copy'>" + (null == (__t = childCountLabel) ? "" : __t) + "</span>\n    </span>\n  </div>\n</div>\n\n<div class='riot-edit-form-container'>\n  <form>\n    <!-- <input type='hidden' name='commentId' value='" + (null == (__t = id) ? "" : __t) + "' > -->\n    <textarea name='message'></textarea>\n  </form>\n  <p>\n    <span class=\"current-user-avatar\" alt='" + (null == (__t = i18n.strings.AVATAR) ? "" : __t) + "'><img/></span>\n    <em>" + (null == (__t = i18n.strings.EDITING_AS + " " + username) ? "" : __t) + "</em>\n  </p>\n  <ul class='controls'>\n    <li>\n      <a class='cancelEdit'>" + (null == (__t = i18n.strings.CANCEL) ? "" : __t) + "</a>\n    </li>\n    <li>\n      <button class='save'>" + (null == (__t = i18n.strings.SAVE) ? "" : __t) + "</button>\n    </li>\n  </ul>\n</div>\n\n<div class='riot-reply-form-container'>\n  <form>\n    <input type='hidden' name='parentCommentId' value='" + (null == (__t = id) ? "" : __t) + "' >\n    <textarea name='message'></textarea>\n  </form>\n  <p>\n    <span class=\"current-user-avatar\" alt='" + (null == (__t = i18n.strings.AVATAR) ? "" : __t) + "'><img/></span>\n    <em>" + (null == (__t = i18n.strings.POSTING_AS + " " + username) ? "" : __t) + "</em>\n  </p>\n  <ul class='controls'>\n    <li>\n      <a class='cancelReply'>" + (null == (__t = i18n.strings.CANCEL) ? "" : __t) + "</a>\n    </li>\n    <li>\n      <button class='post'>" + (null == (__t = i18n.strings.POST) ? "" : __t) + "</button>\n    </li>\n  </ul>\n</div>\n\n<div class='riot-collection'><!-- Gets replaced with child comments --></div>\n\n<div class='riot-more'>\n  <a class='more' href='#'>\n    " + (null == (__t = moreCommentsText) ? "" : __t) + "\n  </a>\n</div>\n";
            return __p
        }, this.JST
    }.call(exports, __webpack_require__, exports, module), !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
}, function(n, e, t) {
    var o, r;
    o = [t, t(1), t(2), t(3), t(41), t(22), t(23)], r = function(n, e, o, r, i, a, s) {
        "use strict";
        var E = r.View.extend({
            tagName: "div",
            className: "riot-collection",
            render: function() {
                var n = this;
                return this.$el.html(""), this.collection.each(function(e) {
                    i = t(41);
                    var o = new i({
                            model: e
                        }),
                        r = o.render().el;
                    n.$el.append(r)
                }), this
            }
        });
        return o.extend(E.prototype, a), E
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    window.hasOwnProperty("Riot") || (window.Riot = {}), window.Riot.hasOwnProperty("RFMToolbar") || (window.Riot.RFMToolbar = {
        Translator: {
            strings: {}
        }
    }), o = [t(150), t(151), t(152), t(153), t(154), t(155), t(156), t(157), t(158), t(159), t(160), t(161), t(162), t(163), t(164)], r = function() {
        "use strict";
        var n = function() {
                this.lang = !1, this.cultureIdentifier = !1, this.string = function(n) {
                    if (this.lang === !1 && (this.lang = window.Riot.Sandworm.getLang(), this.setCultureIdentifierFromPVPNetLanguageIdentifier(this.lang)), !window.Riot.RFMToolbar.Translator.strings[this.cultureIdentifier] || !window.Riot.RFMToolbar.Translator.strings[this.cultureIdentifier][n]) return "";
                    var e = window.Riot.RFMToolbar.Translator.strings[this.cultureIdentifier][n];
                    return e
                }, this.setCultureIdentifierFromPVPNetLanguageIdentifier = function(n) {
                    n = n.toLocaleLowerCase();
                    var e = "en-US";
                    switch (n) {
                        case "de":
                        case "de_de":
                            e = "de-DE";
                            break;
                        case "el":
                        case "el_gr":
                            e = "el-GR";
                            break;
                        case "es":
                        case "es_es":
                        case "es_mx":
                            e = "es-ES";
                            break;
                        case "fr":
                        case "fr_fr":
                            e = "fr-FR";
                            break;
                        case "it":
                        case "it_it":
                            e = "it-IT";
                            break;
                        case "ja":
                        case "ja_jp":
                            e = "ja-JP";
                            break;
                        case "pl":
                        case "pl_pl":
                            e = "pl-PL";
                            break;
                        case "pt_br":
                        case "pt":
                            e = "pt-BR";
                            break;
                        case "ro":
                        case "ro_ro":
                            e = "ro-RO";
                            break;
                        case "tr":
                        case "tr_tr":
                            e = "tr-TR";
                            break;
                        case "ru":
                        case "ru_ru":
                            e = "ru-RU";
                            break;
                        case "hu":
                        case "hu_hu":
                            e = "hu-HU";
                            break;
                        case "cs":
                        case "cs_cz":
                            e = "cs-cz"
                    }
                    this.cultureIdentifier = e
                }
            },
            e = new n;
        return e
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(4)], r = function(n, e, t, o) {
        "use strict";
        var r = t.Model.extend({
            defaults: {
                type: ""
            }
        });
        return r
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e) {
    n.exports = function(n) {
        return n.webpackPolyfill || (n.deprecate = function() {}, n.paths = [], n.children = [], n.webpackPolyfill = 1), n
    }
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    __WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return this.JST = this.JST || {}, this.JST["app/apollo_common/templates/alert_tooltip.html"] = function(obj) {
            obj || (obj = {});
            var __t, __p = "";
            _.escape;
            with(obj) __p += "<div class='riot-alert " + (null == (__t = klass) ? "" : __t) + "'>\n  <p>" + (null == (__t = message) ? "" : __t) + "</p>\n</div>\n";
            return __p
        }, this.JST["app/apollo_common/templates/oembed_link_modal.html"] = function(obj) {
            obj || (obj = {});
            var __t, __p = "";
            _.escape;
            with(obj) __p += '<div id="apollo-oembed-content-modal" class="apollojs-modal apollojs-warning">\n  <div class="modal-body">\n    <!-- <h2></h2> -->\n    <div class=\'content\'></div>\n    <p><strong>' + (null == (__t = i18n.strings.SOURCE) ? "" : __t) + ": <span class='provider-name'></span></strong></p>\n    <p>" + (null == (__t = i18n.strings.FACECHECKING) ? "" : __t) + "</p>\n    <p class='unsafe-link'>\n       " + (null == (__t = i18n.strings.GOING_TO) ? "" : __t) + " <strong><span class=\"unsafe-link-url\"></span></strong>\n    </p>\n  </div>\n  <div class=\"modal-footer\">\n    <a href='javascript:;' class='offsite-link-url'>\n      " + (null == (__t = i18n.strings.LEAVING_SITE_CONFIRM) ? "" : __t) + '</a>\n    <a class="hide-modal" href="javascript:;">\n      <span>' + (null == (__t = i18n.strings.CANCEL) ? "" : __t) + "</span>\n    </a>\n  </div>\n</div>\n";
            return __p
        }, this.JST["app/apollo_common/templates/unsafe_link_modal.html"] = function(obj) {
            obj || (obj = {});
            var __t, __p = "";
            _.escape;
            with(obj) __p += '<div id="apollo-unsafe-link-modal" class="apollojs-warning apollojs-modal">\n  <div class="modal-body">\n    <h2>' + (null == (__t = i18n.strings.LEAVING_SITE) ? "" : __t) + "</h2>\n    <div class='content'>\n      <p>" + (null == (__t = i18n.strings.FACECHECKING) ? "" : __t) + "</p>\n      <p class='unsafe-link'>\n        " + (null == (__t = i18n.strings.GOING_TO) ? "" : __t) + ' <strong><span class="unsafe-link-url"></span></strong>\n      </p>\n    </div>\n  </div>\n  <div class="modal-footer">\n    <p class="opt-out">\n      <label>' + (null == (__t = i18n.strings.NEVER_SHOW_AGAIN) ? "" : __t) + ": </label><input type=\"checkbox\" class=\"disable-unsafe\" />\n    </p>\n    <a href='javascript:;' class='offsite-link-url'>" + (null == (__t = i18n.strings.LEAVING_SITE_CONFIRM) ? "" : __t) + '</a>\n    <a class="hide-modal" href="javascript:;">\n      <span>' + (null == (__t = i18n.strings.CANCEL) ? "" : __t) + "</span>\n    </a>\n  </div>\n</div>\n";
            return __p
        }, this.JST
    }.call(exports, __webpack_require__, exports, module), !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
}, function(n, e, t) {
    var o, r, i;
    ! function(a) {
        r = [t(1)], o = a, i = "function" == typeof o ? o.apply(e, r) : o, !(void 0 !== i && (n.exports = i))
    }(function(n) {
        var e = function(t, o) {
            e._registry.push(this), this.$textarea = t, this.$textCopy = n("<span />"), this.$clone = n("<pre class='expanding-clone'><br /></pre>").prepend(this.$textCopy), this._resetStyles(), this._setCloneStyles(), this._setTextareaStyles(), t.wrap(n("<div class='expanding-wrapper' style='position:relative' />")).after(this.$clone), this.attach(), this.update(), o.update && t.bind("update.expanding", o.update)
        };
        e._registry = [], e.getExpandingInstance = function(t) {
            var o = n.map(e._registry, function(n) {
                    return n.$textarea[0]
                }),
                r = n.inArray(t, o);
            return r > -1 ? e._registry[r] : null
        };
        var t = function() {
                var n = -1;
                if ("Microsoft Internet Explorer" === navigator.appName) {
                    var e = navigator.userAgent,
                        t = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");
                    null !== t.exec(e) && (n = parseFloat(RegExp.$1))
                }
                return n
            }(),
            o = "oninput" in document.createElement("input") && 9 !== t;
        e.prototype = {
            attach: function() {
                var n = "input.expanding change.expanding",
                    e = this;
                o || (n += " keyup.expanding"), this.$textarea.bind(n, function() {
                    e.update()
                })
            },
            update: function() {
                this.$textCopy.text(this.$textarea.val().replace(/\r\n/g, "\n")), this.$textarea.triggerHandler("update.expanding")
            },
            destroy: function() {
                this.$clone.remove(), this.$textarea.unwrap().attr("style", this._oldTextareaStyles || ""), delete this._oldTextareaStyles;
                var t = n.inArray(this, e._registry);
                t > -1 && e._registry.splice(t, 1), this.$textarea.unbind("input.expanding change.expanding keyup.expanding update.expanding")
            },
            _resetStyles: function() {
                this._oldTextareaStyles = this.$textarea.attr("style"), this.$textarea.add(this.$clone).css({
                    margin: 0,
                    webkitBoxSizing: "border-box",
                    mozBoxSizing: "border-box",
                    boxSizing: "border-box",
                    width: "100%"
                })
            },
            _setCloneStyles: function() {
                var n = {
                    display: "block",
                    border: "0 solid",
                    visibility: "hidden",
                    minHeight: this.$textarea.outerHeight()
                };
                "off" === this.$textarea.attr("wrap") ? n.overflowX = "scroll" : n.whiteSpace = "pre-wrap", this.$clone.css(n), this._copyTextareaStylesToClone()
            },
            _copyTextareaStylesToClone: function() {
                var e = this,
                    t = ["lineHeight", "textDecoration", "letterSpacing", "fontSize", "fontFamily", "fontStyle", "fontWeight", "textTransform", "textAlign", "direction", "wordSpacing", "fontSizeAdjust", "wordWrap", "word-break", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom"];
                n.each(t, function(n, t) {
                    var o = e.$textarea.css(t);
                    e.$clone.css(t) !== o && e.$clone.css(t, o)
                })
            },
            _setTextareaStyles: function() {
                this.$textarea.css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    resize: "none",
                    overflow: "auto"
                })
            }
        }, n.expanding = n.extend({
            autoInitialize: !0,
            initialSelector: "textarea.expanding",
            opts: {
                update: function() {}
            }
        }, n.expanding || {}), n.fn.expanding = function(t) {
            if ("destroy" === t) return this.each(function() {
                var n = e.getExpandingInstance(this);
                n && n.destroy()
            }), this;
            if ("active" === t) return !!this.filter(function() {
                return !!e.getExpandingInstance(this)
            }).length;
            var o = n.extend({}, n.expanding.opts, t);
            return this.filter("textarea").each(function() {
                e.getExpandingInstance(this) || new e(n(this), o)
            }), this
        }, n(function() {
            n.expanding.autoInitialize && n(n.expanding.initialSelector).expanding()
        })
    })
}, function(n, e, t) {
    var o, r, a;
    ! function(t, i) {
        r = [], o = i, a = "function" == typeof o ? o.apply(e, r) : o, !(void 0 !== a && (n.exports = a))
    }(this, function() {
        var n = function() {
                return "undefined" != typeof Riot && "undefined" != typeof Riot.DDragon && Riot.DDragon.hasOwnProperty("useModel")
            },
            e = {
                userFlavoredMarkdown: !0,
                adminFlavoredMarkdown: !1,
                tables: !0,
                breaks: !0,
                pedantic: !1,
                sanitize: !0,
                smartLists: !1,
                silent: !1,
                highlight: null,
                langPrefix: "lang-"
            };
        n() && Riot.DDragon.addApp(["champion", "summoner", "item"], function() {});
        var t = function(n) {
                var e = "https://cdn.leagueoflegends.com/stickers/";
                switch (n) {
                    case "slayer-jinx-catface":
                    case "slayer-jinx-unamused":
                    case "slayer-jinx-wink":
                    case "slayer-pantheon-popcorn":
                    case "slayer-pantheon-rainbows":
                    case "slayer-pantheon-thumbs":
                    case "zombie-brand-clap":
                    case "zombie-brand-facepalm":
                    case "zombie-brand-mindblown":
                    case "zombie-nunu-bummed":
                    case "zombie-nunu-hearts":
                    case "zombie-nunu-tears":
                    case "cass-cry":
                    case "darius-angry":
                    case "draven-pose":
                    case "fiora-cool":
                    case "galio-happy":
                    case "garen-swing":
                    case "katarina-love":
                    case "leblanc-funny":
                    case "poppy-wink":
                    case "sona-playing":
                    case "vayne-pose":
                    case "vlad-salute":
                        var t = e + "slayer140/" + n + ".png";
                        return "background-image: url(" + t + ");";
                    case "sg-ahri-1":
                    case "sg-ahri-2":
                    case "sg-ahri-3":
                    case "sg-ezreal":
                    case "sg-janna":
                    case "sg-jinx":
                    case "sg-kiko":
                    case "sg-lulu":
                    case "sg-lux":
                    case "sg-lux-2":
                    case "sg-miss-fortune":
                    case "sg-poppy":
                    case "sg-shisa":
                    case "sg-soraka":
                    case "sg-syndra":
                    case "sg-zephyr":
                        var t = e + "starguardian140/" + n + ".png";
                        return "background-image: url(" + t + ");"
                }
                return null
            },
            o = function(n) {
                for (var e, t, o = 1; o < arguments.length; o++) {
                    e = arguments[o];
                    for (t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t])
                }
                return n
            },
            r = function() {
                function r(t, r) {
                    if (this.options = r || e, this.links = t, this.rules = u.normal, !this.links) throw new Error("Tokens array requires a `links` property.");
                    this.options.userFlavoredMarkdown && (this.rules = u.userFlavoredMarkdown), this.options.adminFlavoredMarkdown && (this.rules = u.adminFlavoredMarkdown), n() && (this.rules = o({}, this.rules, u.dataDragonMarkdown)), this.rules = o({}, this.rules, u.stickerMarkdown)
                }
                this.defaults = e, this.merge = o;
                var a = function(n, e) {
                        return n.replace(e ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
                    },
                    s = function(n) {
                        return n.replace(/</g, "").replace(/>/g, "").replace(/"/g, "").replace(/'/g, "").replace(/\//g, "").replace(/\\/g, "")
                    },
                    E = function(n, e) {
                        return n = n.source, e = e || "",
                            function t(o, r) {
                                return o ? (r = r.source || r, r = r.replace(/(^|[^\[])\^/g, "$1"), n = n.replace(o, r), t) : new RegExp(n, e)
                            }
                    },
                    _ = function() {};
                _.exec = _;
                var l = {
                    newline: /^\n+/,
                    code: /^( {4}[^\n]+\n*)+/,
                    fences: _,
                    hr: /^( *[-*_]){3,} *(?:\n+|$)/,
                    heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
                    blockquote: /^( *>[^\n]+(\n[^\n]+)*\n*)+/,
                    list: /^( *)(bull) [\s\S]+?(?:hr|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
                    table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/,
                    paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
                    text: /^[^\n]+/
                };
                l.bullet = /(?:[*+-]|\d+\.)/, l.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, l.item = E(l.item, "gm")(/bull/g, l.bullet)(), l.list = E(l.list)(/bull/g, l.bullet)("hr", /\n+(?=(?: *[-*_]){3,} *(?:\n+|$))/)(), l._tag = "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|@)\\b", l.paragraph = E(l.paragraph)("hr", l.hr)("heading", l.heading)("blockquote", l.blockquote)("tag", "<" + l._tag)(), l.normal = o({}, l), l.userFlavoredMarkdown = o({}, l.normal, {}), l.adminFlavoredMarkdown = o({}, l.userFlavoredMarkdown, {
                    fences: /^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,
                    nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/
                });
                l.userAvatar = E(l.paragraph)("");
                var O = function(n) {
                    this.tokens = [], this.tokens.links = {}, this.options = n || e, this.rules = l.normal, this.options.userFlavoredMarkdown && (this.rules = l.userFlavoredMarkdown), this.options.adminFlavoredMarkdown && (this.rules = l.adminFlavoredMarkdown)
                };
                O.lex = function(n, e) {
                    var t = new O(e);
                    return t.lex(n)
                }, O.rules = l, O.prototype.lex = function(n) {
                    return n ? (n = n.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(n, !0)) : this.tokens
                }, O.prototype.token = function(n, e) {
                    for (var t, o, r, i, a, s, E, _, O, n = n.replace(/^ +$/gm, ""); n;)
                        if ((r = this.rules.newline.exec(n)) && (n = n.substring(r[0].length), r[0].length > 1 && this.tokens.push({
                                type: "space"
                            })), r = this.rules.heading.exec(n)) n = n.substring(r[0].length), this.tokens.push({
                            type: "heading",
                            depth: r[1].length,
                            text: r[2]
                        });
                        else if (r = this.rules.hr.exec(n)) n = n.substring(r[0].length), this.tokens.push({
                        type: "hr"
                    });
                    else if (e && (r = this.rules.blockquote.exec(n))) n = n.substring(r[0].length), this.tokens.push({
                        type: "blockquote_start"
                    }), r = r[0].replace(/^ *> ?/gm, ""), this.token(r, !1), this.tokens.push({
                        type: "blockquote_end"
                    });
                    else if (r = this.rules.list.exec(n)) {
                        for (n = n.substring(r[0].length), i = r[2], this.tokens.push({
                                type: "list_start",
                                ordered: i.length > 1
                            }), r = r[0].match(this.rules.item), t = !1, O = r.length, _ = 0; O > _; _++) s = r[_], E = s.length, s = s.replace(/^ *([*+-]|\d+\.) +/, ""), ~s.indexOf("\n ") && (E -= s.length, s = this.options.pedantic ? s.replace(/^ {1,4}/gm, "") : s.replace(new RegExp("^ {1," + E + "}", "gm"), "")), this.options.smartLists && _ !== O - 1 && (a = l.bullet.exec(r[_ + 1])[0], i === a || i.length > 1 && a.length > 1 || (n = r.slice(_ + 1).join("\n") + n, _ = O - 1)), o = t || /\n\n(?!\s*$)/.test(s), _ !== O - 1 && (t = "\n" === s[s.length - 1], o || (o = t)), this.tokens.push({
                            type: o ? "loose_item_start" : "list_item_start"
                        }), this.token(s, !1), this.tokens.push({
                            type: "list_item_end"
                        });
                        this.tokens.push({
                            type: "list_end"
                        })
                    } else if (e && (r = this.rules.table.exec(n))) {
                        for (n = n.substring(r[0].length), s = {
                                type: "table",
                                header: r[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                                align: r[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                                cells: r[3].replace(/(?: *\| *)?\n$/, "").split("\n")
                            }, _ = 0; _ < s.align.length; _++) /^ *-+: *$/.test(s.align[_]) ? s.align[_] = "right" : /^ *:-+: *$/.test(s.align[_]) ? s.align[_] = "center" : /^ *:-+ *$/.test(s.align[_]) ? s.align[_] = "left" : s.align[_] = null;
                        for (_ = 0; _ < s.cells.length; _++) s.cells[_] = s.cells[_].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
                        this.tokens.push(s)
                    } else if (e && (r = this.rules.paragraph.exec(n))) n = n.substring(r[0].length), this.tokens.push({
                        type: "paragraph",
                        text: "\n" === r[1][r[1].length - 1] ? r[1].slice(0, -1) : r[1]
                    });
                    else if (r = this.rules.text.exec(n)) n = n.substring(r[0].length), this.tokens.push({
                        type: "text",
                        text: r[0]
                    });
                    else if (n) throw new Error("Infinite loop on byte: " + n.charCodeAt(0));
                    return this.tokens
                };
                var u = {
                    escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
                    strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
                    em: /^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
                    link: /^!?\[(inside)\]\(href\)/,
                    reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
                    nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
                    br: /^ {2,}\n(?!\s*$)/,
                    text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|\{\{|~~|$)/,
                    blockquote: /^( *(&gt;)[^\n]+(\n[^\n]+)*\n*)+/,
                    meta: /^!?\[{([\s\S]+)}\]\(([\s\S]+)\)/,
                    url: /^(https?:\/\/[^\s]+)/,
                    strike: /^~~(.+?)~~/
                };
                u._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/, u._href = /\s*^(https?:\/\/[^\s]+)\s*/, meta = {}, meta.whitelist = {
                    quoted: ["name", "realm", "application-id", "discussion-id", "comment-id", "timestamp"]
                }, u.link = E(u.link)("inside", u._inside)("href", u._href)(), u.reflink = E(u.reflink)("inside", u._inside)(), u.normal = o({}, u), u.pedantic = o({}, u.normal, {
                    strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                    em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
                }), u.breaks = o({}, {
                    br: E(u.br)("{2,}", "*")()
                }), u.userFlavoredMarkdown = o({}, u.normal, {
                    tag: _,
                    br: /^ *\n(?!\s*$)/,
                    text: /^[\s\S]+?(?=[\\<!\[_*`~]|https?:\/\/| *\n|\{\{|~~|$)/,
                    curly: _
                }), u.dataDragonMarkdown = o({}, u.userFlavoredMarkdown, {
                    curly: /^{{(.+?):(.+?)}}/
                }), u.adminFlavoredMarkdown = o({}, u.userFlavoredMarkdown, {}), r.prototype.output = function(e) {
                    for (var o, r, E, _, l, O, u, R = ""; e;)
                        if (_ = this.rules.escape.exec(e)) e = e.substring(_[0].length), R += _[1];
                        else if (_ = this.rules.meta.exec(e)) {
                        if (e = e.substring(_[0].length), !(_[1] in meta.whitelist)) {
                            R = s(_[0]);
                            continue
                        }
                        for (u = '<span class="markdown-meta markdown-meta-' + _[1] + '" style="display:none;"', l = s(_[2]).split(","), i = 0; i < l.length; i++) O = l[i].split("=", 2), meta.whitelist[_[1]].indexOf(O[0].trim()) >= 0 && O.length > 1 && (u += " data-" + s(O[0].trim()) + '="' + s(O[1]).trim() + '"');
                        u += "></span>", R = u
                    } else if (_ = this.rules.url.exec(e)) e = e.substring(_[0].length), r = a(_[1]), E = r, R += '<a href="' + E + '">' + r + "</a>\n";
                    else if (_ = this.rules.link.exec(e)) e = e.substring(_[0].length), R += this.outputLink(_, {
                        href: _[2],
                        title: _[3]
                    });
                    else if ((_ = this.rules.reflink.exec(e)) || (_ = this.rules.nolink.exec(e))) {
                        if (e = e.substring(_[0].length), o = (_[2] || _[1]).replace(/\s+/g, " "), o = this.links[o.toLowerCase()], !o || !o.href) {
                            R += _[0].charAt(0), e = _[0].substring(1) + e;
                            continue
                        }
                        R += this.outputLink(_, o)
                    } else if (_ = this.rules.strong.exec(e)) e = e.substring(_[0].length), R += "<strong>" + this.output(_[2] || _[1]) + "</strong>";
                    else if (_ = this.rules.em.exec(e)) e = e.substring(_[0].length), R += "<em>" + this.output(_[2] || _[1]) + "</em>";
                    else if (_ = this.rules.br.exec(e)) e = e.substring(_[0].length), R += "<br>";
                    else if (_ = this.rules.curly.exec(e)) {
                        e = e.substring(_[0].length);
                        var d = _[1].toLowerCase();
                        if (d = "champion" == d || "item" == d || "summoner" == d || "sticker" == d ? d : null) try {
                            var N = null,
                                T = null;
                            if ("sticker" == d) N = t(_[2]), T = "sticker slayer";
                            else if (n()) {
                                if (!_[2].match(/^[0-9]+$/)) continue;
                                N = Riot.DDragon.useModel(d).getImg(_[2], {
                                    size: "small",
                                    wrap: 1
                                }, "item" != d ? !0 : null), T = ""
                            }
                            N && (R += '<span class="' + T + '" style="display: inline-block; ' + N + '"></span>')
                        } catch (c) {}
                    } else if (_ = this.rules.strike.exec(e)) e = e.substring(_[0].length), R += "<del>" + a(_[1]) + "</del>";
                    else if (_ = this.rules.text.exec(e)) e = e.substring(_[0].length), R += a(_[0]);
                    else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
                    return R
                }, r.prototype.outputLink = function(n, e) {
                    return '<a href="' + a(e.href) + '"' + (e.title ? ' title="' + a(e.title) + '"' : "") + ">" + this.output(n[1]) + "</a>"
                }, r.prototype.smartypants = function(n) {
                    return this.options.smartypants ? n.replace(/--/g, "â€”").replace(/'([^']*)'/g, "â€˜$1â€™").replace(/"([^"]*)"/g, "â€œ$1â€").replace(/\.{3}/g, "â€¦") : n
                }, r.prototype.mangle = function(n) {
                    for (var e, t = "", o = n.length, r = 0; o > r; r++) e = n.charCodeAt(r), Math.random() > .5 && (e = "x" + e.toString(16)), t += "&#" + e + ";";
                    return t
                };
                var R = function(n) {
                    this.tokens = [], this.token = null, this.options = n || e
                };
                R.prototype.parse = function(n) {
                    this.inline = new r(n.links, this.options), this.tokens = n.reverse();
                    for (var e = ""; this.next();) e += this.tok();
                    return e
                }, R.prototype.next = function() {
                    return this.token = this.tokens.pop()
                }, R.prototype.peek = function() {
                    return this.tokens[this.tokens.length - 1] || 0
                }, R.prototype.parseText = function() {
                    for (var n = this.token.text;
                        "text" === this.peek().type;) n += "\n" + this.next().text;
                    return this.inline.output(n)
                }, R.prototype.tok = function() {
                    switch (this.token.type) {
                        case "space":
                            return "";
                        case "hr":
                            return "<hr>\n";
                        case "heading":
                            return "<h" + this.token.depth + ">" + this.inline.output(this.token.text) + "</h" + this.token.depth + ">\n";
                        case "table":
                            var n, e, t, o, r, i = "";
                            for (i += "<thead>\n<tr>\n", e = 0; e < this.token.header.length; e++) n = this.inline.output(this.token.header[e]), i += this.token.align[e] ? '<th align="' + this.token.align[e] + '">' + n + "</th>\n" : "<th>" + n + "</th>\n";
                            for (i += "</tr>\n</thead>\n", i += "<tbody>\n", e = 0; e < this.token.cells.length; e++) {
                                for (t = this.token.cells[e], i += "<tr>\n", r = 0; r < t.length; r++) o = this.inline.output(t[r]), i += this.token.align[r] ? '<td align="' + this.token.align[r] + '">' + o + "</td>\n" : "<td>" + o + "</td>\n";
                                i += "</tr>\n"
                            }
                            return i += "</tbody>\n", '<table class="table table-bordered">\n' + i + "</table>\n";
                        case "blockquote_start":
                            for (var i = "";
                                "blockquote_end" !== this.next().type;) i += this.tok();
                            return "<blockquote>\n" + i + "</blockquote>\n";
                        case "list_start":
                            for (var a = this.token.ordered ? "ol" : "ul", i = "";
                                "list_end" !== this.next().type;) i += this.tok();
                            return "<" + a + ">\n" + i + "</" + a + ">\n";
                        case "list_item_start":
                            for (var i = "";
                                "list_item_end" !== this.next().type;) i += "text" === this.token.type ? this.parseText() : this.tok();
                            return "<li>" + i + "</li>\n";
                        case "loose_item_start":
                            for (var i = "";
                                "list_item_end" !== this.next().type;) i += this.tok();
                            return "<li>" + i + "</li>\n";
                        case "html":
                            return this.token.pre || this.options.pedantic ? this.token.text : this.inline.output(this.token.text);
                        case "paragraph":
                            return "<p>" + this.inline.output(this.token.text) + "</p>\n";
                        case "text":
                            return "<p>" + this.parseText() + "</p>\n"
                    }
                }, this.Parser = new R, this.Lexer = new O
            };
        return r.prototype.parse = function(n, e, t) {
            if (t || "function" == typeof e) {
                t || (t = e, e = null), e && (e = this.merge({}, this.defaults, e));
                var r = this.Lexer.lex(r, e),
                    i = e.highlight,
                    a = 0,
                    s = r.length,
                    E = 0;
                if (!i || i.length < 3) return t(null, this.Parser.parse(r, e));
                for (var _ = function() {
                        delete e.highlight;
                        var n = this.Parser.parse(r, e);
                        return e.highlight = i, t(null, n)
                    }; s > E; E++) ! function(n) {
                    return "code" === n.type ? (a++, i(n.text, n.lang, function(e, t) {
                        return null == t || t === n.text ? --a || _() : (n.text = t, n.escaped = !0, void(--a || _()))
                    })) : void 0
                }(r[E])
            } else try {
                return e && (e = o({}, this.defaults, e)), this.Parser.parse(this.Lexer.lex(n, e), e)
            } catch (l) {
                if (l.message += "\n Sorry!", (e || this.defaults).silent) return "<p>An error occured:</p><pre>" + escape(l.message + "", !0) + "</pre>";
                throw l
            }
        }, r.prototype.setOptions = function(n) {
            return this.merge(this.defaults, n), this
        }, r
    })
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(145)], r = function(n, e, t) {
        "use strict";
        var o = function() {
                throw new Error('A "url" property or function must be specified')
            },
            r = {
                vote: function(n) {
                    var t = this,
                        r = e.result(this, "url") || o(),
                        i = r.replace(/([^\/])$/, "$1/") + "vote",
                        a = {
                            direction: n
                        };
                    this.httpPut(i, a, function(n) {
                        n.hasOwnProperty("newUpVoteCount") && n.hasOwnProperty("newDownVoteCount") && n.hasOwnProperty("upVote") ? (t.set({
                            upVotes: n.newUpVoteCount,
                            downVotes: n.newDownVoteCount,
                            userVote: n.voteAction
                        }), t.updateVoteState()) : console.log("Apollo Error: Invalid Discussion Vote Response")
                    })
                },
                updateVoteState: function() {
                    "up" === this.get("userVote") ? (this.set("upVoted", !0), this.set("downVoted", !1)) : "down" === this.get("userVote") ? (this.set("upVoted", !1), this.set("downVoted", !0)) : (this.set("upVoted", !1), this.set("downVoted", !1));
                    var n = this.get("upVotes"),
                        e = this.get("downVotes");
                    this.set({
                        totalVotesHuman: this.humanizeVote(n - e),
                        totalVotes: n - e,
                        totalVotesCast: n + e
                    })
                },
                humanizeVote: function(n) {
                    return t.shrink(n)
                }
            };
        return r
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(28), t(7)], r = function(n, e, t, o, r) {
        "use strict";
        var i = r.getCurrentCultureMessages(),
            a = function(n) {
                var t = n;
                t.hide(), t.fadeTo(500, 1), e.delay(function() {
                    window.APOLLO_TOOLTIPS_NOHIDE || t.fadeTo(500, 0, function() {
                        t.remove()
                    })
                }, 3e3)
            },
            s = function(n) {
                return e.isString(n.status) ? "error" + n.status : "error"
            },
            E = function(n) {
                var t = e.isString(n.status) ? "error" + n.status : "error";
                t = t.toUpperCase();
                var o = i[t] || i.ERROR,
                    r = n.data.errorCode || "",
                    a = r.trim().split(":");
                return o = "ERROR403" === t && "LOW_LEVEL_VOTE_DISCUSSION" === a[0].trim() ? o.replace("%level%", a[1]) : "TOO_MANY_REQUESTS" == a[0].trim() ? i.ERROR_RATELIMIT : i.ERROR403_OTHER
            },
            _ = {
                renderAlert: function() {
                    var e = this.model.toJSON();
                    e.klass = s(e.lastError), e.message = E(e.lastError);
                    var t = o["app/apollo_common/templates/alert_tooltip.html"](e);
                    n(this.lastClickTarget).after(t);
                    var r = n(this.lastClickTarget).siblings(".riot-alert");
                    return a(r), this
                }
            };
        return _
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(4), t(40), t(147), t(149), t(18), t(5)], r = function(n, e, t, o, r, i, a, s, E) {
        "use strict";
        var _ = t.Model.extend({
            defaults: {
                discussionId: null,
                applicationId: null,
                el: null
            },
            render: function(e) {
                var t = this,
                    o = this.get("discussionId"),
                    i = this.get("applicationId");
                this.$el.addClass("riot-apollo").addClass("comment-listing");
                var s = new r({
                        id: o,
                        applicationId: i
                    }),
                    _ = this.get("commentPageSize");
                _ && s.set("pageSize", _);
                var l = this.get("commentSortType");
                l && s.set("sortType", l), s.fetch({
                    success: function(o) {
                        var r = new a({
                            model: o
                        });
                        t.$el.html(r.render().el), E.features.unsafeLinkFilterEnabled && n("#apollo-unsafe-link-modal").addClass("comment-listing"), e()
                    }
                })
            }
        });
        return _
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(4), t(167), t(171), t(172)], r = function(n, e, t, o, r, i) {
        "use strict";
        var a = t.Model.extend({
            defaults: {},
            render: function(e) {
                var t = new r,
                    a = n(this.get("el"));
                if ("TEXTAREA" !== a.prop("tagName")) return void o.error("Was not attached to a <textarea>");
                t.set("textarea", a);
                var s = new i({
                    model: t
                });
                s.render(), this.toolbarView = s, "function" == typeof e && e()
            }
        });
        return a
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(2), t(5), t(10)], r = function(n, e, t) {
        "use strict";
        var o = function() {
            this.waiting = !1, this.loaded = !1, this.ensureProperty = function(t, o) {
                if (this.hasProperty(e, t)) return void o(!0);
                if (this.loaded) o(!1);
                else if (this.waiting) return void setTimeout(n.bind(function() {
                    this.ensureProperty(t, o)
                }, this), 10);
                this.waiting = !0, this.httpGet("util/config", {}, n.bind(function(r) {
                    this.loaded = !0, this.waiting = !1, n.merge(e, r);
                    var i = this.hasProperty(e, t);
                    o(i)
                }, this))
            }, this.hasProperty = function(n, e) {
                var t = e.split(".");
                if (!n.hasOwnProperty(t[0])) return !1;
                if (t.length > 1) {
                    var o = t.slice(1);
                    return o = o.join("."), this.hasProperty(n[t[0]], o)
                }
                return !0
            }
        };
        return n.extend(o.prototype, t), new o
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(4)], r = function(n) {
        "use strict";
        var e = "[Polls]: ",
            t = {
                log: function(t) {
                    n.log(e + t)
                },
                warn: function(t) {
                    n.warn(e + t)
                },
                error: function(t) {
                    n.error(e + t)
                }
            };
        return t
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(6), t(9)], r = function(n, e) {
        "use strict";
        var t = {
            getAuthorName: function() {
                return void 0 === this.author ? null : this.author.get("name")
            },
            updateAuthor: function() {
                if (void 0 === this.author && void 0 !== this.get("user") && (this.author = new e(this.get("user"))), void 0 !== this.author && this.author.get("realm") !== Riot.Sandworm.getRegion().toUpperCase()) {
                    var n = this.author.get("name") + " (" + this.author.get("realm") + ")";
                    this.author.set("name", n)
                }
                void 0 !== this.author && this.set("isRioter", this.author.get("isRioter") === !0)
            },
            toJSON: function() {
                var n = this.attributes;
                return n.user = this.author.toJSON(), n
            }
        };
        return t
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t, t(1), t(2), t(3), t(11), t(7)], r = function(n, e, o, r, i, a) {
        "use strict";
        var s = {
            updateMoreCommentsVisible: function() {
                this.get("moreCount") > 0 ? this.set("moreCommentsVisible", !0) : this.set("moreCommentsVisible", !1)
            },
            getMoreComments: function(n, e) {
                var t = this,
                    r = this.has("discussionId") ? this.get("discussionId") : this.get("id"),
                    i = o.result(this, "urlRoot") + r + "/comments",
                    a = {
                        num_loaded: this.get("numLoaded"),
                        sort_type: n
                    },
                    s = this.get("pageSize");
                s && (a.pageSize = s), this.isChildComment() && (a.parent_id = this.get("id"));
                var E = this.get("lastCommentId"),
                    _ = !o.isNull(E) && !o.isUndefined(E);
                _ && (a.last_comment_id = E), this.httpGet(i, a, function(n) {
                    t.set({
                        moreCommentsRequested: !0,
                        moreCount: n.moreCount,
                        numLoaded: n.numLoaded,
                        lastCommentId: n.lastCommentId
                    }), t.updateMoreCommentsVisible(), t.insertIncomingComments(n.comments), typeof e === Function && e()
                })
            },
            isChildComment: function() {
                return void 0 !== this.get("levelsDeep")
            },
            insertIncomingComments: function(n) {
                var e = this,
                    r = this.comments.pluck("id"),
                    a = o.pluck(n, "id"),
                    s = o.difference(a, r),
                    E = [];
                o.each(s, function(r) {
                    var a = o.find(n, function(n) {
                        return n.id === r
                    });
                    e.has("discussionId") ? a.discussionId = e.get("discussionId") : a.discussionId = e.get("id"), e.has("applicationId") && (a.applicationId = e.get("applicationId")), e.has("isSticky") && (a.isSticky = e.get("isSticky")), i = t(11);
                    var s = new i(a);
                    E.push(s)
                }), this.comments.add(E, {
                    silent: !0
                }), this.comments.trigger("add")
            },
            updateChildCount: function() {
                var n = this.recursiveCommentCount(this);
                this.set("childCount", n), n > 1 ? (this.set("childCountLabel", a.getString("CHILD_COMMENTS")), this.set("hasChildren", !0)) : 1 === n ? (this.set("childCountLabel", a.getString("CHILD_COMMENT")), this.set("hasChildren", !0)) : (this.set("childCountLabel", a.getString("CHILD_COMMENTS")), this.set("hasChildren", !1)), this.trigger("newChild")
            },
            recursiveCommentCount: function(n) {
                var e = this,
                    t = n.comments.length;
                return t += n.comments.reduce(function(n, t) {
                    return n + e.recursiveCommentCount(t)
                }, 0)
            }
        };
        return s
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [], r = function() {
        "use strict";
        var n = {
            getCommentWidgetIcon: function(n) {
                return n.get("isRioter") ? "https://s3.amazonaws.com/profile-icons/riot-fist.png" : n.getAvatar()
            }
        };
        return n
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(6), t(4), t(8), t(11), t(20), t(10), t(31), t(38), t(37), t(7)], r = function(n, e, t, o, r, i, a, s, E, _, l, O, u) {
        "use strict";
        var R = t.Model.extend({
            defaults: {
                id: "invalid",
                pageSize: 50,
                lastError: "",
                authenticated: !1,
                moreCommentsVisible: !1,
                moreCommentsRequested: !1,
                isA: "discussion",
                sortType: "best",
                totalComments: 0,
                childCount: 0,
                moreCount: 0,
                isSticky: !1,
                isRioter: !1,
                isRendered: !1
            },
            urlRoot: function() {
                return "applications/" + this.get("applicationId") + "/discussions/"
            },
            initialize: function() {
                e.bindAll(this, "updateChildCount", "updateMoreCommentsVisible", "updateCommentsCollection"), this.comments = new s, this.comments.on("add reset newChild", this.updateChildCount), this.comments.on("reset", this.updateMoreCommentsVisible), this.updateAuthor(), this.on("change:comments", this.updateAuthor), this.updateCommentsCollection(), this.on("change:comments", this.updateCommentsCollection), this.updateVoteState()
            },
            newReply: function(n, e) {
                var t = this,
                    r = this.getLeaveACommentMessage();
                n.message && n.message !== r && (n.message = n.message.replace(/<[\/]*script>/g, ""), n.language = o.Sandworm.formatLanguageCode(o.Sandworm.getLang()), this.httpPost(this.url() + "/comment/", n, function(n) {
                    var o = new a(n);
                    o.set("discussionId", t.get("id")), o.set("applicationId", t.get("applicationId")), t.comments.add(o, {
                        at: 0
                    }), e()
                }))
            },
            sync: function(n, e, t) {
                var o = this;
                switch (n) {
                    case "read":
                        this.httpGet(e.url(), {
                            sort_type: e.get("sortType"),
                            page_size: o.get("pageSize")
                        }, function(n) {
                            t.success(n)
                        });
                        break;
                    default:
                        r.error("ApolloJS: " + n.toUpperCase() + " not yet been implemented")
                }
            },
            parse: function(n, t) {
                var o;
                return o = e.isObject(n.discussion) ? n.discussion : n, n.user && i.set(n.user), i.isAuthenticated() && e.extend(o, {
                    authenticated: !0
                }), o
            },
            updateCommentsCollection: function() {
                var n = this;
                if (e.isObject(this.get("comments"))) {
                    var t = this.get("comments");
                    this.set({
                        moreCount: t.moreCount,
                        numLoaded: t.numLoaded,
                        lastCommentId: t.lastCommentId
                    });
                    var o = function r(t) {
                        return e.each(t, function(e) {
                            e.discussionId = n.get("id"), e.applicationId = n.get("applicationId"), e.isSticky = n.get("isSticky"), e.pageSize = n.get("pageSize"), e.isAuthor = n.author.get("id") && e.user && n.author.get("id") === e.user.id, e.hasOwnProperty("replies") && e.replies.comments.length > 0 && r(e.replies.comments)
                        }), t
                    }(t.comments);
                    this.comments.reset(o)
                }
                return this.comments
            },
            getLeaveACommentMessage: function() {
                return u.getString("LEAVE_A_COMMENT")
            },
            getDradisParams: function() {
                var n = this.get("applicationId") + "_" + this.get("id"),
                    e = this.author.get("realm") + "_" + this.author.get("id");
                return {
                    pii: {
                        "event.object_author": e
                    },
                    "event.object_type": "discussion",
                    "event.object_author_isRioter": this.author.get("isRioter") ? "1" : "0",
                    "event.object_id": n
                }
            }
        });
        return e.extend(R.prototype, E), e.extend(R.prototype, _), e.extend(R.prototype, l), e.extend(R.prototype, O), R
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t, t(1), t(2), t(3), t(6), t(5), t(8), t(24), t(22), t(32), t(21), t(39), t(23), t(71)], r = function(n, e, o, r, i, a, s, E, _, l, O, u, R, d) {
        "use strict";
        var N = r.View.extend({
            AlertTemplate: R["app/apollo_widgets/comment_listing/templates/_alert.html"],
            CommentTemplate: R["app/apollo_widgets/comment_listing/templates/discussion_comments_item.html"],
            tagName: "div",
            className: "riot-comment riot-list-item",
            events: {
                "click a.toggle-edit-form": "respondToToggleEditForm",
                "click a.toggle-reply-form": "respondToToggleReplyForm",
                "click a.delete": "respondToDelete",
                "click a.cancelEdit": "respondToCancelEdit",
                "click a.cancelReply": "respondToCancelReply",
                "click a.toggle-low-quality-visible": "respondToToggleLowQualityVisible",
                "click a.more": "respondToMoreComments",
                "click button.post": "respondToSubmit",
                "click button.save": "respondToSave",
                "click button.up-vote": "respondToUpVote",
                "click button.down-vote": "respondToDownVote",
                "click button.toggle-minimized": "respondToToggleMinimized"
            },
            initialize: function() {
                o.bindAll(this, "render", "renderAlert", "renderChildren", "renderModelState", "renderMessage", "renderReplyFormTextareaFocus", "renderBooleanAttributeAsElementClass", "respondToSubmit", "respondToUpVote", "respondToDownVote", "respondToToggleReplyForm", "respondToToggleLowQualityVisible", "respondToToggleMinimized", "respondToMoreComments"), this.model.comments.on("add", this.renderChildren), this.model.on("change:lastError", this.renderAlert), this.model.on("change:markdownMessage", this.renderMessage), this.model.on("change:userVote", this.renderModelState), this.model.on("change:deleted", this.renderModelState), this.model.on("change:editing", this.renderModelState), this.model.on("change:replying", this.renderModelState), this.model.on("change:minimized", this.renderModelState), this.model.on("change:lowQualityVisible", this.renderModelState), this.model.on("change:upVoted", this.renderModelState), this.model.on("change:downVoted", this.renderModelState), this.model.on("change:totalVotes", this.renderModelState), this.model.on("change:moreCommentsVisible", this.renderModelState), this.$el.on("class:added:replying", this.renderReplyFormTextareaFocus)
            },
            respondToDownVote: function(n) {
                this.haltFutureEventProcessing(n), s.isAuthenticated() ? this.model.vote("down") : i.Sandworm.pvpnetMenus.show("login")
            },
            respondToUpVote: function(n) {
                this.haltFutureEventProcessing(n), s.isAuthenticated() ? this.model.vote("up") : i.Sandworm.pvpnetMenus.show("login")
            },
            respondToToggleLowQualityVisible: function(n) {
                this.haltFutureEventProcessing(n), this.model.toggle("lowQualityVisible")
            },
            respondToToggleReplyForm: function(n) {
                this.haltFutureEventProcessing(n), this.model.set({
                    editing: !1
                }), this.model.toggle("replying")
            },
            respondToToggleEditForm: function(n) {
                this.haltFutureEventProcessing(n), this.model.set({
                    replying: !1
                }), this.model.toggle("editing")
            },
            respondToToggleMinimized: function(n) {
                this.haltFutureEventProcessing(n), this.model.toggle("minimized")
            },
            respondToCancelReply: function(n) {
                this.haltFutureEventProcessing(n), this.resetReplyForm(), this.model.set({
                    replying: !1
                })
            },
            respondToCancelEdit: function(n) {
                this.haltFutureEventProcessing(n), this.model.set({
                    editing: !1
                })
            },
            respondToSubmit: function(n) {
                this.haltFutureEventProcessing(n);
                var e = this,
                    t = this.serializeForm(this.replyForm());
                this.model.newReply(t, function() {
                    e.resetReplyForm(), e.model.toggle("replying")
                })
            },
            respondToDelete: function(n) {
                this.haltFutureEventProcessing(n), this.model.remove()
            },
            respondToSave: function(n) {
                this.haltFutureEventProcessing(n);
                var e = this,
                    t = this.serializeForm(this.editForm());
                this.model.edit(t, function() {
                    e.model.toggle("editing")
                })
            },
            render: function() {
                return this.renderBody(), this.renderMessage(), this.renderChildren(), this.renderModelState(), this.renderBehavior(), this
            },
            renderBody: function() {
                var n = this.getTemplateData(),
                    t = this.CommentTemplate(n),
                    o = e(t);
                return this.setCurrentElementMarkup(o), this
            },
            renderChildren: function() {
                var n = this;
                this.commentCollection().html(""), E = t(24);
                var e = new E({
                        collection: this.model.comments
                    }),
                    o = e.render().el;
                return n.commentCollection().replaceWith(o), this
            },
            renderMessage: function() {
                this.setCommentBody(this.model.get("markdownMessage"))
            },
            renderModelState: function() {
                this.renderBooleanAttributeAsElementClass("upVoted"), this.renderBooleanAttributeAsElementClass("downVoted"), this.renderBooleanAttributeAsElementClass("deleted"), this.renderBooleanAttributeAsElementClass("minimized"), this.renderBooleanAttributeAsElementClass("replying"), this.renderBooleanAttributeAsElementClass("editing"), this.renderBooleanAttributeAsElementClass("lowQualityVisible"), this.renderBooleanAttributeAsElementClass("hasChildren"), this.renderBooleanAttributeAsElementClass("isRioter"), this.renderBooleanAttributeAsElementClass("moreCommentsVisible"), this.renderBooleanAttributeAsElementClass("isSticky"), this.renderBooleanAttributeAsElementClass("isAuthor"), this.setTotalVotes(this.model.get("totalVotesHuman")), this.setChildCountLabelValue(this.model.get("childCount")), this.setChildCountLabelCopy(this.model.get("childCountLabel"));
                var n;
                return this.model && this.model.author && (n = this.getCommentWidgetIcon(this.model.author), this.commentAuthorAvatar().attr("src", n)), a.features.toolbarEnabled && (this.model.get("editing") && 0 === this.editForm().find("div.rfmtoolbar").length ? (this.editFormTextarea().attr("data-apollo-widget", "toolbar"), window.Riot.Apollo.attach(this.editFormTextarea())) : this.model.get("replying") && 0 === this.replyForm().find("div.rfmtoolbar").length && (this.replyFormTextarea().attr("data-apollo-widget", "toolbar"), window.Riot.Apollo.attach(this.replyFormTextarea()))), s.isAuthenticated() && (n = this.getCommentWidgetIcon(s), this.commentCurrentUserAvatar().attr("src", n), this.model.get("minimized") ? this.commentFooter().hide() : this.commentFooter().show()), a.features.unsafeLinkFilterEnabled && this.renderUnsafeLinksFilter(this.commentBody()), this
            },
            renderBehavior: function() {
                var n = this;
                o.defer(function() {
                    n.parseMetaBlockquotes(), n.enableReplyTextAreaBehavior(), n.enableEditTextAreaBehavior(), n.commentFooter().find("em.timeago abbr").timeago()
                })
            },
            renderReplyFormTextareaFocus: function(n) {
                this.haltFutureEventProcessing(n), this.replyFormTextarea().focus()
            },
            parseMetaBlockquotes: function() {
                var n = this.commentBody(),
                    t = n.find(".markdown-meta-quoted");
                t.each(function() {
                    var n = e(this),
                        t = [n.attr("data-name"), " (", n.attr("data-realm"), ') - <span class="timeago" title="', n.attr("data-timestamp"), '"></span>'];
                    n.html(t.join("")), n.find(".timeago").timeago(), n.css("display", "block")
                })
            },
            getTemplateData: function() {
                var n = this.model.toJSON();
                if (this.getCurrentUserIsModerator()) n.displayDeleteLink = !0, n.displayEditLink = !0;
                else if (this.model.author.get("name") === this.getCurrentUsername()) {
                    n.displayDeleteLink = !0;
                    var t = new Date,
                        o = e.timeago.parse(n.createdAt),
                        r = t.getTime() - o.getTime(),
                        i = 3e5;
                    i > r ? n.displayEditLink = !0 : n.displayEditLink = !1
                } else n.displayDeleteLink = !1, n.displayEditLink = !1;
                return n.username = this.getCurrentUsername(), n.currentUserLoLSummonerIconUrl = this.getCurrentUserLoLSummonerIconUrl(), n = this.translate(n), n.moreCommentsText = n.i18n.strings.MORE_COMMENTS_COUNT.replace("%d", n.moreCount), n
            }
        });
        return o.extend(N.prototype, _), o.extend(N.prototype, l), o.extend(N.prototype, O), o.extend(N.prototype, u), o.extend(N.prototype, d), N
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    "use strict";
    t(47);
    n.exports = window.easyXDM
}, function(n, e, t) {
    var o, r, i;
    ! function(a, s) {
        "use strict";
        r = [t(1)], o = s, i = "function" == typeof o ? o.apply(e, r) : o, !(void 0 !== i && (n.exports = i))
    }(this, function(n) {
        "use strict";
        return n.apolloTooltip ? !1 : (n.apolloTooltip = {
            config: {
                containerID: "riot-apollo-tooltip-container",
                targetClass: "riot-apollo-tooltip",
                log: !1
            },
            options: {},
            defaults: {
                mode: "cursor",
                parentPoint: "top",
                tooltipPoint: "bottom",
                smart: !0,
                distance: 15,
                offsetX: 0,
                offsetY: 0,
                useClass: !1
            },
            state: {
                sourceObj: null,
                clientSize: {
                    x: 0,
                    y: 0
                },
                cursorPosition: {
                    x: 0,
                    y: 0
                }
            },
            tooltip: null,
            initialize: function() {
                this.config.log && console.log("initializing apolloTooltip"), n("body").prepend('<div id="' + this.config.containerID + '" style="display:none;"></div>'), this.tooltip = n("#" + this.config.containerID), this.tooltip.css({
                    position: "absolute",
                    display: "none",
                    left: 0,
                    top: 0
                }), this.registerEvents(), this.updateClientSize()
            },
            registerEvents: function() {
                this.config.log && console.log("> registering events");
                var e = this;
                n(window).resize(function() {
                    e.updateClientSize()
                }), n(window).blur(function() {
                    e.unregisterSourceObj()
                }), n("body").on("mouseover mouseout", "." + this.config.targetClass, function(t) {
                    "mouseover" === t.type ? e.eventMouseOver(t, n(this)) : "mouseout" === t.type && e.eventMouseOut(t, n(this))
                })
            },
            loadConfigFromDFN: function() {
                this.options = {}, n.extend(this.options, this.defaults, this.state.sourceObj.find("dfn").first().data()), this.config.log && console.log("setting options: \n" + JSON.stringify(this.options))
            },
            eventMouseOver: function(e, t) {
                this.config.log && console.log("detected event: " + e.type), e.stopPropagation();
                var o = this;
                if (!n.trim(t.find("dfn").first().html())) return !1;
                switch (this.state.sourceObj = t, this.loadConfigFromDFN(), this.tooltip.html(t.find("dfn").html()), this.options.mode) {
                    case "cursor":
                        this.state.sourceObj.on("mousemove", function(n) {
                            o.state.cursorPosition.x = Math.round(n.pageX), o.state.cursorPosition.y = Math.round(n.pageY), o.repositionTooltip()
                        })
                }
                this.tooltip.removeClass(), this.tooltip.addClass("active"), this.options.useClass && this.tooltip.addClass(this.options.useClass), this.tooltip.show()
            },
            eventMouseOut: function(n, e) {
                this.config.log && console.log("detected event: " + n.type), n.stopPropagation(), this.unregisterSourceObj()
            },
            eventMouseMove: function() {},
            unregisterSourceObj: function() {
                this.state.sourceObj && (this.options = {}, this.state.sourceObj.off("mousemove"), this.tooltip.empty(), this.tooltip.removeClass("active"), this.tooltip.addClass("hidden"), this.state.sourceObj = null)
            },
            updateClientSize: function() {
                this.state.clientSize.x = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, this.state.clientSize.y = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, this.config.log && console.log("> window size: " + this.state.clientSize.x + "x" + this.state.clientSize.y)
            },
            repositionTooltip: function() {
                this.config.log && console.log("repositioning tooltip");
                var e = this.options.distance + this.state.cursorPosition.x + this.options.offsetX,
                    t = this.options.distance + this.state.cursorPosition.y + this.options.offsetY;
                switch (this.options.mode) {
                    case "cursor":
                        if (this.options.smart) {
                            var o = this.getScreenQuadrant();
                            e = 1 === o || 3 === o ? this.state.cursorPosition.x + this.options.offsetX + this.options.distance + 5 : this.state.cursorPosition.x + this.options.offsetX - this.tooltip.outerWidth() - this.options.distance,
                                t = 1 === o || 2 === o ? parseInt(this.state.cursorPosition.y - n(document).scrollTop() + this.options.distance) : parseInt(this.state.cursorPosition.y - n(document).scrollTop() - this.tooltip.outerHeight() - this.options.distance)
                        }
                }
                this.tooltip.css({
                    position: "fixed",
                    display: "block",
                    left: e,
                    top: t
                })
            },
            getClipDetails: function(n, e, t, o) {
                var r = {
                        left: 0,
                        top: 0,
                        right: this.state.clientSize.x,
                        bottom: this.state.clientSize.y
                    },
                    i = {
                        left: !1,
                        top: !1,
                        right: !1,
                        bottom: !1,
                        clipped: !0
                    };
                return n < r.left && (i.left = !0, i.clipped = !0), n + t > r.right && (i.right = !0, i.clipped = !0), e < r.top && (i.top = !0, i.clipped = !0), e + o > r.bottom && (i.bottom = !0, i.clipped = !0), i
            },
            getScreenQuadrant: function() {
                var e, t = this.state.cursorPosition.y - n(document).scrollTop(),
                    o = this.state.cursorPosition.x - n(document).scrollLeft();
                if (t <= this.state.clientSize.y / 2) switch (o <= this.state.clientSize.x / 2) {
                    case !0:
                        e = 1;
                        break;
                    case !1:
                        e = 2
                } else switch (o <= this.state.clientSize.x / 2) {
                    case !0:
                        e = 3;
                        break;
                    case !1:
                        e = 4
                }
                return this.config.log && console.log("> active screen quadrant: " + e), e
            },
            update: function() {
                this.state.sourceObj && (this.tooltip.html(this.state.sourceObj.html()), this.repositionTooltip())
            }
        }, void n.apolloTooltip.initialize())
    })
}, function(n, e, t) {
    function o(n) {
        return t(r(n))
    }

    function r(n) {
        return i[n] || function() {
            throw new Error("Cannot find module '" + n + "'.")
        }()
    }
    var i = {
        "./board_details/main": 49,
        "./board_moderators/main": 50,
        "./board_navigation/main": 51,
        "./board_pin/main": 52,
        "./comment_listing/main": 53,
        "./markdown_content/main": 54,
        "./modal/main": 55,
        "./pinned_boards/main": 56,
        "./player_messaging/main": 57,
        "./polls/main": 58,
        "./profile_hover/main": 59,
        "./toolbar/main": 60,
        "./truncate_html/main": 61,
        "./user_select/main": 62,
        "./voting/main": 63
    };
    o.keys = function() {
        return Object.keys(i)
    }, o.resolve = r, n.exports = o, o.id = 44
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
    (function(global, setImmediate, process) {
        ! function() {
            function require(n, e, t) {
                var o = require.resolve(n);
                if (null == o) {
                    t = t || n, e = e || "root";
                    var r = new Error('Failed to require "' + t + '" from "' + e + '"');
                    throw r.path = t, r.parent = e, r.require = !0, r
                }
                var i = require.modules[o];
                return i.exports || (i.exports = {}, i.client = i.component = !0, i.call(this, i.exports, require.relative(o), i)), i.exports
            }
            require.modules = {}, require.aliases = {}, require.resolve = function(n) {
                "/" === n.charAt(0) && (n = n.slice(1));
                for (var e = [n, n + ".js", n + ".json", n + "/index.js", n + "/index.json"], t = 0; t < e.length; t++) {
                    var n = e[t];
                    if (require.modules.hasOwnProperty(n)) return n;
                    if (require.aliases.hasOwnProperty(n)) return require.aliases[n]
                }
            }, require.normalize = function(n, e) {
                var t = [];
                if ("." != e.charAt(0)) return e;
                n = n.split("/"), e = e.split("/");
                for (var o = 0; o < e.length; ++o) ".." == e[o] ? n.pop() : "." != e[o] && "" != e[o] && t.push(e[o]);
                return n.concat(t).join("/")
            }, require.register = function(n, e) {
                require.modules[n] = e
            }, require.alias = function(n, e) {
                if (!require.modules.hasOwnProperty(n)) throw new Error('Failed to alias "' + n + '", it does not exist');
                require.aliases[e] = n
            }, require.relative = function(n) {
                function e(n, e) {
                    for (var t = n.length; t--;)
                        if (n[t] === e) return t;
                    return -1
                }

                function t(e) {
                    var o = t.resolve(e);
                    return require(o, n, e)
                }
                var o = require.normalize(n, "..");
                return t.resolve = function(t) {
                    var r = t.charAt(0);
                    if ("/" == r) return t.slice(1);
                    if ("." == r) return require.normalize(o, t);
                    var i = n.split("/"),
                        a = e(i, "deps") + 1;
                    return a || (a = 0), t = i.slice(0, a + 1).join("/") + "/deps/" + t
                }, t.exists = function(n) {
                    return require.modules.hasOwnProperty(t.resolve(n))
                }, t
            }, require.register("avetisk-defaults/index.js", function(n, e, t) {
                "use strict";
                var o = function(n, e, t) {
                    for (var r in e) t && n[r] instanceof Object && e[r] instanceof Object ? n[r] = o(n[r], e[r], !0) : r in n || (n[r] = e[r]);
                    return n
                };
                t.exports = o
            }), require.register("component-clone/index.js", function(n, e, t) {
                function o(n) {
                    switch (r(n)) {
                        case "object":
                            var e = {};
                            for (var t in n) n.hasOwnProperty(t) && (e[t] = o(n[t]));
                            return e;
                        case "array":
                            for (var e = new Array(n.length), i = 0, a = n.length; a > i; i++) e[i] = o(n[i]);
                            return e;
                        case "regexp":
                            var s = "";
                            return s += n.multiline ? "m" : "", s += n.global ? "g" : "", s += n.ignoreCase ? "i" : "", new RegExp(n.source, s);
                        case "date":
                            return new Date(n.getTime());
                        default:
                            return n
                    }
                }
                var r;
                try {
                    r = e("type")
                } catch (i) {
                    r = e("type-component")
                }
                t.exports = o
            }), require.register("component-cookie/index.js", function(n, e, t) {
                function o(n, e, t) {
                    t = t || {};
                    var o = s(n) + "=" + s(e);
                    null == e && (t.maxage = -1), t.maxage && (t.expires = new Date(+new Date + t.maxage)), t.path && (o += "; path=" + t.path), t.domain && (o += "; domain=" + t.domain), t.expires && (o += "; expires=" + t.expires.toGMTString()), t.secure && (o += "; secure"), document.cookie = o
                }

                function r() {
                    return a(document.cookie)
                }

                function i(n) {
                    return r()[n]
                }

                function a(n) {
                    var e, t = {},
                        o = n.split(/ *; */);
                    if ("" == o[0]) return t;
                    for (var r = 0; r < o.length; ++r) e = o[r].split("="), t[E(e[0])] = E(e[1]);
                    return t
                }
                var s = encodeURIComponent,
                    E = decodeURIComponent;
                t.exports = function(n, e, t) {
                    switch (arguments.length) {
                        case 3:
                        case 2:
                            return o(n, e, t);
                        case 1:
                            return i(n);
                        default:
                            return r()
                    }
                }
            }), require.register("component-each/index.js", function(n, e, t) {
                function o(n, e) {
                    for (var t = 0; t < n.length; ++t) e(n.charAt(t), t)
                }

                function r(n, e) {
                    for (var t in n) s.call(n, t) && e(t, n[t])
                }

                function i(n, e) {
                    for (var t = 0; t < n.length; ++t) e(n[t], t)
                }
                var a = e("type"),
                    s = Object.prototype.hasOwnProperty;
                t.exports = function(n, e) {
                    switch (a(n)) {
                        case "array":
                            return i(n, e);
                        case "object":
                            return "number" == typeof n.length ? i(n, e) : r(n, e);
                        case "string":
                            return o(n, e)
                    }
                }
            }), require.register("component-indexof/index.js", function(n, e, t) {
                t.exports = function(n, e) {
                    if (n.indexOf) return n.indexOf(e);
                    for (var t = 0; t < n.length; ++t)
                        if (n[t] === e) return t;
                    return -1
                }
            }), require.register("component-emitter/index.js", function(n, e, t) {
                function o(n) {
                    return n ? r(n) : void 0
                }

                function r(n) {
                    for (var e in o.prototype) n[e] = o.prototype[e];
                    return n
                }
                var i = e("indexof");
                t.exports = o, o.prototype.on = o.prototype.addEventListener = function(n, e) {
                    return this._callbacks = this._callbacks || {}, (this._callbacks[n] = this._callbacks[n] || []).push(e), this
                }, o.prototype.once = function(n, e) {
                    function t() {
                        o.off(n, t), e.apply(this, arguments)
                    }
                    var o = this;
                    return this._callbacks = this._callbacks || {}, e._off = t, this.on(n, t), this
                }, o.prototype.off = o.prototype.removeListener = o.prototype.removeAllListeners = o.prototype.removeEventListener = function(n, e) {
                    if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                    var t = this._callbacks[n];
                    if (!t) return this;
                    if (1 == arguments.length) return delete this._callbacks[n], this;
                    var o = i(t, e._off || e);
                    return ~o && t.splice(o, 1), this
                }, o.prototype.emit = function(n) {
                    this._callbacks = this._callbacks || {};
                    var e = [].slice.call(arguments, 1),
                        t = this._callbacks[n];
                    if (t) {
                        t = t.slice(0);
                        for (var o = 0, r = t.length; r > o; ++o) t[o].apply(this, e)
                    }
                    return this
                }, o.prototype.listeners = function(n) {
                    return this._callbacks = this._callbacks || {}, this._callbacks[n] || []
                }, o.prototype.hasListeners = function(n) {
                    return !!this.listeners(n).length
                }
            }), require.register("component-event/index.js", function(n, e, t) {
                n.bind = function(n, e, t, o) {
                    return n.addEventListener ? n.addEventListener(e, t, o || !1) : n.attachEvent("on" + e, t), t
                }, n.unbind = function(n, e, t, o) {
                    return n.removeEventListener ? n.removeEventListener(e, t, o || !1) : n.detachEvent("on" + e, t), t
                }
            }), require.register("component-inherit/index.js", function(n, e, t) {
                t.exports = function(n, e) {
                    var t = function() {};
                    t.prototype = e.prototype, n.prototype = new t, n.prototype.constructor = n
                }
            }), require.register("component-object/index.js", function(n, e, t) {
                var o = Object.prototype.hasOwnProperty;
                n.keys = Object.keys || function(n) {
                    var e = [];
                    for (var t in n) o.call(n, t) && e.push(t);
                    return e
                }, n.values = function(n) {
                    var e = [];
                    for (var t in n) o.call(n, t) && e.push(n[t]);
                    return e
                }, n.merge = function(n, e) {
                    for (var t in e) o.call(e, t) && (n[t] = e[t]);
                    return n
                }, n.length = function(e) {
                    return n.keys(e).length
                }, n.isEmpty = function(e) {
                    return 0 == n.length(e)
                }
            }), require.register("component-trim/index.js", function(n, e, t) {
                function o(n) {
                    return n.trim ? n.trim() : n.replace(/^\s*|\s*$/g, "")
                }
                n = t.exports = o, n.left = function(n) {
                    return n.trimLeft ? n.trimLeft() : n.replace(/^\s*/, "")
                }, n.right = function(n) {
                    return n.trimRight ? n.trimRight() : n.replace(/\s*$/, "")
                }
            }), require.register("component-querystring/index.js", function(n, e, t) {
                var o = e("trim");
                n.parse = function(n) {
                    if ("string" != typeof n) return {};
                    if (n = o(n), "" == n) return {};
                    for (var e = {}, t = n.split("&"), r = 0; r < t.length; r++) {
                        var i = t[r].split("=");
                        e[i[0]] = null == i[1] ? "" : decodeURIComponent(i[1])
                    }
                    return e
                }, n.stringify = function(n) {
                    if (!n) return "";
                    var e = [];
                    for (var t in n) e.push(encodeURIComponent(t) + "=" + encodeURIComponent(n[t]));
                    return e.join("&")
                }
            }), require.register("component-type/index.js", function(n, e, t) {
                var o = Object.prototype.toString;
                t.exports = function(n) {
                    switch (o.call(n)) {
                        case "[object Date]":
                            return "date";
                        case "[object RegExp]":
                            return "regexp";
                        case "[object Arguments]":
                            return "arguments";
                        case "[object Array]":
                            return "array";
                        case "[object Error]":
                            return "error"
                    }
                    return null === n ? "null" : void 0 === n ? "undefined" : n !== n ? "nan" : n && 1 === n.nodeType ? "element" : (n = n.valueOf ? n.valueOf() : Object.prototype.valueOf.apply(n), typeof n)
                }
            }), require.register("component-url/index.js", function(n, e, t) {
                n.parse = function(n) {
                    var e = document.createElement("a");
                    return e.href = n, {
                        href: e.href,
                        host: e.host,
                        port: e.port,
                        hash: e.hash,
                        hostname: e.hostname,
                        pathname: e.pathname,
                        protocol: e.protocol,
                        search: e.search,
                        query: e.search.slice(1)
                    }
                }, n.isAbsolute = function(n) {
                    return 0 == n.indexOf("//") ? !0 : ~n.indexOf("://") ? !0 : !1
                }, n.isRelative = function(e) {
                    return !n.isAbsolute(e)
                }, n.isCrossDomain = function(e) {
                    return e = n.parse(e), e.hostname != location.hostname || e.port != location.port || e.protocol != location.protocol
                }
            }), require.register("ianstormtaylor-callback/index.js", function(n, e, t) {
                function o(n) {
                    "function" == typeof n && n()
                }
                var r = e("next-tick");
                t.exports = o, o.async = function(n, e) {
                    return "function" == typeof n ? e ? void setTimeout(n, e) : r(n) : void 0
                }, o.sync = o
            }), require.register("component-bind/index.js", function(n, e, t) {
                var o = [].slice;
                t.exports = function(n, e) {
                    if ("string" == typeof e && (e = n[e]), "function" != typeof e) throw new Error("bind() requires a function");
                    var t = o.call(arguments, 2);
                    return function() {
                        return e.apply(n, t.concat(o.call(arguments)))
                    }
                }
            }), require.register("segmentio-bind-all/index.js", function(n, e, t) {
                try {
                    var o = e("bind"),
                        r = e("type")
                } catch (i) {
                    var o = e("bind-component"),
                        r = e("type-component")
                }
                t.exports = function(n) {
                    for (var e in n) {
                        var t = n[e];
                        "function" === r(t) && (n[e] = o(n, n[e]))
                    }
                    return n
                }
            }), require.register("ianstormtaylor-bind/index.js", function(n, e, t) {
                function o(n, e) {
                    e = [].slice.call(arguments, 1);
                    for (var t, o = 0; t = e[o]; o++) n[t] = r(n, n[t]);
                    return n
                }
                var r = e("bind"),
                    i = e("bind-all");
                t.exports = n = r, n.all = i, n.methods = o
            }), require.register("ianstormtaylor-is-empty/index.js", function(n, e, t) {
                function o(n) {
                    if (null == n) return !0;
                    if ("number" == typeof n) return 0 === n;
                    if (void 0 !== n.length) return 0 === n.length;
                    for (var e in n)
                        if (r.call(n, e)) return !1;
                    return !0
                }
                t.exports = o;
                var r = Object.prototype.hasOwnProperty
            }), require.register("ianstormtaylor-is/index.js", function(n, e, t) {
                function o(n) {
                    return function(e) {
                        return n === a(e)
                    }
                }
                for (var r, i = e("is-empty"), a = e("type"), s = ["arguments", "array", "boolean", "date", "element", "function", "null", "number", "object", "regexp", "string", "undefined"], E = 0; r = s[E]; E++) n[r] = o(r);
                n.fn = n["function"], n.empty = i, n.nan = function(e) {
                    return n.number(e) && e != e
                }
            }), require.register("jkroso-type/index.js", function(n, e, t) {
                var o = Object.prototype.toString;
                t.exports = function(n) {
                    return "object" == typeof n ? r[o.call(n)] : typeof n
                };
                var r = {
                    "[object Function]": "function",
                    "[object Date]": "date",
                    "[object RegExp]": "regexp",
                    "[object Arguments]": "arguments",
                    "[object Array]": "array",
                    "[object String]": "string",
                    "[object Null]": "null",
                    "[object Undefined]": "undefined",
                    "[object Number]": "number",
                    "[object Boolean]": "boolean",
                    "[object Object]": "object",
                    "[object Text]": "textnode",
                    "[object Uint8Array]": "8bit-array",
                    "[object Uint16Array]": "16bit-array",
                    "[object Uint32Array]": "32bit-array",
                    "[object Uint8ClampedArray]": "8bit-array",
                    "[object Error]": "error"
                };
                if ("undefined" != typeof window)
                    for (var i in window) /^HTML\w+Element$/.test(i) && (r["[object " + i + "]"] = "element");
                t.exports.types = r
            }), require.register("jkroso-equals/index.js", function(n, e, t) {
                function o(n, e, t) {
                    if (n === e) return !0;
                    var o = _[E(n)];
                    return o !== _[E(e)] ? !1 : o ? o(n, e, t) : !1
                }

                function r(n) {
                    return function(e, t, o) {
                        if (!o) return n(e, t, []);
                        for (var r, i = o.length; r = o[--i];)
                            if (r[0] === e && r[1] === t) return !0;
                        return n(e, t, o)
                    }
                }

                function i(n, e, t) {
                    var r = n.length;
                    if (r !== e.length) return !1;
                    for (t.push([n, e]); r--;)
                        if (!o(n[r], e[r], t)) return !1;
                    return !0
                }

                function a(n, e, t) {
                    var r = s(n),
                        i = s(e),
                        a = r.length;
                    if (a !== i.length) return !1;
                    for (r.sort(), i.sort(); a--;)
                        if (r[a] !== i[a]) return !1;
                    for (t.push([n, e]), a = r.length; a--;) {
                        var E = r[a];
                        if (!o(n[E], e[E], t)) return !1
                    }
                    return !0
                }

                function s(n) {
                    var e = [];
                    for (var t in n) "constructor" !== t && e.push(t);
                    return e
                }
                var E = e("type");
                t.exports = function() {
                    for (var n = arguments.length - 1; n > 0;)
                        if (!o(arguments[n], arguments[--n])) return !1;
                    return !0
                };
                var _ = {};
                _.number = function(n) {
                    return n !== n
                }, _["function"] = function(n, e, t) {
                    return n.toString() === e.toString() && _.object(n, e, t) && o(n.prototype, e.prototype)
                }, _.date = function(n, e) {
                    return +n === +e
                }, _.regexp = function(n, e) {
                    return n.toString() === e.toString()
                }, _.element = function(n, e) {
                    return n.outerHTML === e.outerHTML
                }, _.textnode = function(n, e) {
                    return n.textContent === e.textContent
                }, _.arguments = _.array = r(i), _.object = r(a), t.exports.compare = o
            }), require.register("segmentio-after/index.js", function(n, e, t) {
                t.exports = function(n, e) {
                    return 0 >= n ? e() : function() {
                        return --n < 1 ? e.apply(this, arguments) : void 0
                    }
                }
            }), require.register("segmentio-alias/index.js", function(n, e, t) {
                function o(n, e) {
                    switch (a(e)) {
                        case "object":
                            return r(n, e);
                        case "function":
                            return i(n, e)
                    }
                }

                function r(n, e) {
                    for (var t in e) void 0 !== n[t] && (n[e[t]] = n[t], delete n[t])
                }

                function i(n, e) {
                    for (var t in n) n[e(t)] = n[t], delete n[t]
                }
                var a = e("type");
                t.exports = o
            }), require.register("segmentio-canonical/index.js", function(n, e, t) {
                t.exports = function() {
                    for (var n, e = document.getElementsByTagName("link"), t = 0; n = e[t]; t++)
                        if ("canonical" == n.getAttribute("rel")) return n.getAttribute("href")
                }
            }), require.register("segmentio-convert-dates/index.js", function(n, e, t) {
                function o(n, e) {
                    n = i(n);
                    for (var t in n) {
                        var a = n[t];
                        r.date(a) && (n[t] = e(a)), r.object(a) && (n[t] = o(a, e))
                    }
                    return n
                }
                var r = e("is");
                try {
                    var i = e("clone")
                } catch (a) {
                    var i = e("clone-component")
                }
                t.exports = o
            }), require.register("segmentio-extend/index.js", function(n, e, t) {
                t.exports = function(n) {
                    for (var e, t = Array.prototype.slice.call(arguments, 1), o = 0; e = t[o]; o++)
                        if (e)
                            for (var r in e) n[r] = e[r];
                    return n
                }
            }), require.register("segmentio-is-email/index.js", function(n, e, t) {
                function o(n) {
                    return r.test(n)
                }
                t.exports = o;
                var r = /.+\@.+\..+/
            }), require.register("segmentio-is-meta/index.js", function(n, e, t) {
                t.exports = function(n) {
                    if (n.metaKey || n.altKey || n.ctrlKey || n.shiftKey) return !0;
                    var e = n.which,
                        t = n.button;
                    return e || void 0 === t ? 2 === e ? !0 : !1 : 1 & !t && 2 & !t && 4 & t
                }
            }), require.register("segmentio-isodate/index.js", function(n, e, t) {
                var o = /^(\d{4})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:([ T])(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
                n.parse = function(n) {
                    var e = [1, 5, 6, 7, 8, 11, 12],
                        t = o.exec(n),
                        r = 0;
                    if (!t) return new Date(n);
                    for (var i, a = 0; i = e[a]; a++) t[i] = parseInt(t[i], 10) || 0;
                    t[2] = parseInt(t[2], 10) || 1, t[3] = parseInt(t[3], 10) || 1, t[2]--, t[8] && (t[8] = (t[8] + "00").substring(0, 3)), " " == t[4] ? r = (new Date).getTimezoneOffset() : "Z" !== t[9] && t[10] && (r = 60 * t[11] + t[12], "+" == t[10] && (r = 0 - r));
                    var s = Date.UTC(t[1], t[2], t[3], t[5], t[6] + r, t[7], t[8]);
                    return new Date(s)
                }, n.is = function(n, e) {
                    return e && !1 === /^\d{4}-\d{2}-\d{2}/.test(n) ? !1 : o.test(n)
                }
            }), require.register("segmentio-isodate-traverse/index.js", function(n, e, t) {
                function o(n, e) {
                    return n = r(n), void 0 === e && (e = !0), i(n, function(t, r) {
                        s.is(r, e) ? n[t] = s.parse(r) : a.object(r) && (n[t] = o(r))
                    }), n
                }
                var r, i, a = e("is"),
                    s = e("isodate");
                try {
                    r = e("clone"), i = e("each")
                } catch (E) {
                    r = e("clone-component"), i = e("each-component")
                }
                t.exports = o
            }), require.register("component-json-fallback/index.js", function(exports, require, module) {
                ! function() {
                    "use strict";

                    function f(n) {
                        return 10 > n ? "0" + n : n
                    }

                    function quote(n) {
                        return escapable.lastIndex = 0, escapable.test(n) ? '"' + n.replace(escapable, function(n) {
                            var e = meta[n];
                            return "string" == typeof e ? e : "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4)
                        }) + '"' : '"' + n + '"'
                    }

                    function str(n, e) {
                        var t, o, r, i, a, s = gap,
                            E = e[n];
                        switch (E && "object" == typeof E && "function" == typeof E.toJSON && (E = E.toJSON(n)), "function" == typeof rep && (E = rep.call(e, n, E)), typeof E) {
                            case "string":
                                return quote(E);
                            case "number":
                                return isFinite(E) ? String(E) : "null";
                            case "boolean":
                            case "null":
                                return String(E);
                            case "object":
                                if (!E) return "null";
                                if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(E)) {
                                    for (i = E.length, t = 0; i > t; t += 1) a[t] = str(t, E) || "null";
                                    return r = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + s + "]" : "[" + a.join(",") + "]", gap = s, r
                                }
                                if (rep && "object" == typeof rep)
                                    for (i = rep.length, t = 0; i > t; t += 1) "string" == typeof rep[t] && (o = rep[t], r = str(o, E), r && a.push(quote(o) + (gap ? ": " : ":") + r));
                                else
                                    for (o in E) Object.prototype.hasOwnProperty.call(E, o) && (r = str(o, E), r && a.push(quote(o) + (gap ? ": " : ":") + r));
                                return r = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}" : "{" + a.join(",") + "}", gap = s, r
                        }
                    }
                    var JSON = module.exports = {};
                    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
                        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
                    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
                        return this.valueOf()
                    });
                    var cx, escapable, gap, indent, meta, rep;
                    "function" != typeof JSON.stringify && (escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, meta = {
                        "\b": "\\b",
                        "	": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "\\": "\\\\"
                    }, JSON.stringify = function(n, e, t) {
                        var o;
                        if (gap = "", indent = "", "number" == typeof t)
                            for (o = 0; t > o; o += 1) indent += " ";
                        else "string" == typeof t && (indent = t);
                        if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify");
                        return str("", {
                            "": n
                        })
                    }), "function" != typeof JSON.parse && (cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, JSON.parse = function(text, reviver) {
                        function walk(n, e) {
                            var t, o, r = n[e];
                            if (r && "object" == typeof r)
                                for (t in r) Object.prototype.hasOwnProperty.call(r, t) && (o = walk(r, t), void 0 !== o ? r[t] = o : delete r[t]);
                            return reviver.call(n, e, r)
                        }
                        var j;
                        if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(n) {
                                return "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4)
                            })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                            "": j
                        }, "") : j;
                        throw new SyntaxError("JSON.parse")
                    })
                }()
            }), require.register("segmentio-json/index.js", function(n, e, t) {
                t.exports = "undefined" == typeof JSON ? e("json-fallback") : JSON
            }), require.register("segmentio-load-date/index.js", function(n, e, t) {
                var o = new Date,
                    r = window.performance;
                r && r.timing && r.timing.responseEnd && (o = new Date(r.timing.responseEnd)), t.exports = o
            }), require.register("segmentio-load-script/index.js", function(n, e, t) {
                var o = e("type");
                t.exports = function(n, e) {
                    if (!n) throw new Error("Cant load nothing...");
                    "string" === o(n) && (n = {
                        src: n
                    });
                    var t = "https:" === document.location.protocol || "chrome-extension:" === document.location.protocol;
                    n.src && 0 === n.src.indexOf("//") && (n.src = t ? "https:" + n.src : "http:" + n.src), t && n.https ? n.src = n.https : !t && n.http && (n.src = n.http);
                    var r = document.createElement("script");
                    r.type = "text/javascript", r.async = !0, r.src = n.src;
                    var i = document.getElementsByTagName("script")[0];
                    return i.parentNode.insertBefore(r, i), e && "function" === o(e) && (r.addEventListener ? (r.addEventListener("load", function(n) {
                        e(null, n)
                    }, !1), r.addEventListener("error", function(n) {
                        e(new Error("Failed to load the script."), n)
                    }, !1)) : r.attachEvent && r.attachEvent("onreadystatechange", function(n) {
                        /complete|loaded/.test(r.readyState) && e(null, n)
                    })), r
                }
            }), require.register("segmentio-new-date/lib/index.js", function(n, e, t) {
                function o(n) {
                    return 315576e5 > n ? 1e3 * n : n
                }
                var r = e("is"),
                    i = e("isodate"),
                    a = e("./milliseconds"),
                    s = e("./seconds");
                t.exports = function(n) {
                    return r.date(n) ? n : r.number(n) ? new Date(o(n)) : i.is(n) ? i.parse(n) : a.is(n) ? a.parse(n) : s.is(n) ? s.parse(n) : new Date(n)
                }
            }), require.register("segmentio-new-date/lib/milliseconds.js", function(n, e, t) {
                var o = /\d{13}/;
                n.is = function(n) {
                    return o.test(n)
                }, n.parse = function(n) {
                    return n = parseInt(n, 10), new Date(n)
                }
            }), require.register("segmentio-new-date/lib/seconds.js", function(n, e, t) {
                var o = /\d{10}/;
                n.is = function(n) {
                    return o.test(n)
                }, n.parse = function(n) {
                    var e = 1e3 * parseInt(n, 10);
                    return new Date(e)
                }
            }), require.register("segmentio-on-body/index.js", function(n, e, t) {
                function o(n) {
                    n(document.body)
                }
                var r = e("each"),
                    i = !1,
                    a = [];
                t.exports = function(n) {
                    i ? o(n) : a.push(n)
                };
                var s = setInterval(function() {
                    document.body && (i = !0, r(a, o), clearInterval(s))
                }, 5)
            }), require.register("segmentio-on-error/index.js", function(n, e, t) {
                function o() {
                    for (var n, e = 0; n = i[e]; e++) n.apply(this, arguments)
                }

                function r(n) {
                    i.push(n), window.onerror != o && (i.push(window.onerror), window.onerror = o)
                }
                t.exports = r;
                var i = [];
                "function" == typeof window.onerror && i.push(window.onerror), window.onerror = o
            }), require.register("segmentio-store.js/store.js", function(n, e, t) {
                ! function(e) {
                    function o() {
                        try {
                            return _ in e && e[_]
                        } catch (n) {
                            return !1
                        }
                    }

                    function r(n) {
                        return function() {
                            var e = Array.prototype.slice.call(arguments, 0);
                            e.unshift(a), O.appendChild(a), a.addBehavior("#default#userData"), a.load(_);
                            var t = n.apply(s, e);
                            return O.removeChild(a), t
                        }
                    }

                    function i(n) {
                        return n.replace(d, "___")
                    }
                    var a, s = {},
                        E = e.document,
                        _ = "localStorage",
                        l = "__storejs__";
                    if (s.disabled = !1, s.set = function(n, e) {}, s.get = function(n) {}, s.remove = function(n) {}, s.clear = function() {}, s.transact = function(n, e, t) {
                            var o = s.get(n);
                            null == t && (t = e, e = null), "undefined" == typeof o && (o = e || {}), t(o), s.set(n, o)
                        }, s.getAll = function() {}, s.serialize = function(n) {
                            return JSON.stringify(n)
                        }, s.deserialize = function(n) {
                            if ("string" != typeof n) return void 0;
                            try {
                                return JSON.parse(n)
                            } catch (e) {
                                return n || void 0
                            }
                        }, o()) a = e[_], s.set = function(n, e) {
                        return void 0 === e ? s.remove(n) : (a.setItem(n, s.serialize(e)), e)
                    }, s.get = function(n) {
                        return s.deserialize(a.getItem(n))
                    }, s.remove = function(n) {
                        a.removeItem(n)
                    }, s.clear = function() {
                        a.clear()
                    }, s.getAll = function() {
                        for (var n = {}, e = 0; e < a.length; ++e) {
                            var t = a.key(e);
                            n[t] = s.get(t)
                        }
                        return n
                    };
                    else if (E.documentElement.addBehavior) {
                        var O, u;
                        try {
                            u = new ActiveXObject("htmlfile"), u.open(), u.write('<script>document.w=window</script><iframe src="/favicon.ico"></iframe>'), u.close(), O = u.w.frames[0].document, a = O.createElement("div")
                        } catch (R) {
                            a = E.createElement("div"), O = E.body
                        }
                        var d = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");
                        s.set = r(function(n, e, t) {
                            return e = i(e), void 0 === t ? s.remove(e) : (n.setAttribute(e, s.serialize(t)), n.save(_), t)
                        }), s.get = r(function(n, e) {
                            return e = i(e), s.deserialize(n.getAttribute(e))
                        }), s.remove = r(function(n, e) {
                            e = i(e), n.removeAttribute(e), n.save(_)
                        }), s.clear = r(function(n) {
                            var e = n.XMLDocument.documentElement.attributes;
                            n.load(_);
                            for (var t, o = 0; t = e[o]; o++) n.removeAttribute(t.name);
                            n.save(_)
                        }), s.getAll = r(function(n) {
                            for (var e, t = n.XMLDocument.documentElement.attributes, o = {}, r = 0; e = t[r]; ++r) {
                                var a = i(e.name);
                                o[e.name] = s.deserialize(n.getAttribute(a))
                            }
                            return o
                        })
                    }
                    try {
                        s.set(l, l), s.get(l) != l && (s.disabled = !0), s.remove(l)
                    } catch (R) {
                        s.disabled = !0
                    }
                    s.enabled = !s.disabled, "undefined" != typeof t && t.exports ? t.exports = s : (__WEBPACK_AMD_DEFINE_FACTORY__ = s, __WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.call(n, __webpack_require__, n, t) : __WEBPACK_AMD_DEFINE_FACTORY__, !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (t.exports = __WEBPACK_AMD_DEFINE_RESULT__)))
                }(this.window || global)
            }), require.register("segmentio-to-unix-timestamp/index.js", function(n, e, t) {
                function o(n) {
                    return Math.floor(n.getTime() / 1e3)
                }
                t.exports = o
            }), require.register("segmentio-top-domain/index.js", function(n, e, t) {
                var o = e("url");
                t.exports = function(n) {
                    var e = o.parse(n).hostname,
                        t = e.match(/[a-z0-9][a-z0-9\-]*[a-z0-9]\.[a-z\.]{2,6}$/i);
                    return t ? t[0] : e
                }
            }), require.register("timoxley-next-tick/index.js", function(n, e, t) {
                "use strict";
                if ("function" == typeof setImmediate) t.exports = function(n) {
                    setImmediate(n)
                };
                else if ("undefined" != typeof process && "function" == typeof process.nextTick) t.exports = process.nextTick;
                else if ("undefined" == typeof window || window.ActiveXObject || !window.postMessage) t.exports = function(n) {
                    setTimeout(n)
                };
                else {
                    var o = [];
                    window.addEventListener("message", function() {
                        for (var n = 0; n < o.length;) try {
                            o[n++]()
                        } catch (e) {
                            throw o = o.slice(n), window.postMessage("tic!", "*"), e
                        }
                        o.length = 0
                    }, !0), t.exports = function(n) {
                        o.length || window.postMessage("tic!", "*"), o.push(n)
                    }
                }
            }), require.register("yields-prevent/index.js", function(n, e, t) {
                t.exports = function(n) {
                    return n = n || window.event, n.preventDefault ? n.preventDefault() : n.returnValue = !1
                }
            }), require.register("yields-slug/index.js", function(n, e, t) {
                t.exports = function(n, e) {
                    return e || (e = {}), n.toLowerCase().replace(e.replace || /[^a-z0-9]/g, " ").replace(/^ +| +$/g, "").replace(/ +/g, e.separator || "-")
                }
            }), require.register("visionmedia-debug/index.js", function(n, e, t) {
                "undefined" == typeof window ? t.exports = e("./lib/debug") : t.exports = e("./debug")
            }), require.register("visionmedia-debug/debug.js", function(n, e, t) {
                function o(n) {
                    return o.enabled(n) ? function(e) {
                        e = r(e);
                        var t = new Date,
                            i = t - (o[n] || t);
                        o[n] = t, e = n + " " + e + " +" + o.humanize(i), window.console && console.log && Function.prototype.apply.call(console.log, console, arguments)
                    } : function() {}
                }

                function r(n) {
                    return n instanceof Error ? n.stack || n.message : n
                }
                t.exports = o, o.names = [], o.skips = [], o.enable = function(n) {
                    try {
                        localStorage.debug = n
                    } catch (e) {}
                    for (var t = (n || "").split(/[\s,]+/), r = t.length, i = 0; r > i; i++) n = t[i].replace("*", ".*?"), "-" === n[0] ? o.skips.push(new RegExp("^" + n.substr(1) + "$")) : o.names.push(new RegExp("^" + n + "$"))
                }, o.disable = function() {
                    o.enable("")
                }, o.humanize = function(n) {
                    var e = 1e3,
                        t = 6e4,
                        o = 60 * t;
                    return n >= o ? (n / o).toFixed(1) + "h" : n >= t ? (n / t).toFixed(1) + "m" : n >= e ? (n / e | 0) + "s" : n + "ms"
                }, o.enabled = function(n) {
                    for (var e = 0, t = o.skips.length; t > e; e++)
                        if (o.skips[e].test(n)) return !1;
                    for (var e = 0, t = o.names.length; t > e; e++)
                        if (o.names[e].test(n)) return !0;
                    return !1
                };
                try {
                    window.localStorage && o.enable(localStorage.debug)
                } catch (i) {}
            }), require.register("analytics/lib/index.js", function(n, e, t) {
                var o = e("./analytics"),
                    r = e("bind");
                t.exports = new o, r.methods(t.exports, "init", "initialize", "identify", "user", "group", "track", "trackClick", "trackLink", "trackSubmit", "trackForm", "pageview", "alias", "ready", "_options", "_callback", "_invoke", "_parseQuery")
            }), require.register("analytics/lib/analytics.js", function(n, e, t) {
                function o() {
                    this._callbacks = [], this._integrations = {}, this._readied = !1, this._timeout = 300, this._user = g
                }

                function r(n, e) {
                    var t = !0;
                    if (!e || !e.providers) return t;
                    var o = e.providers;
                    void 0 !== o.all && (t = o.all), void 0 !== o.All && (t = o.All);
                    var r = n.name;
                    return void 0 !== o[r] && (t = o[r]), t
                }

                function i(n, e) {
                    return !e.email && A(n) && (e.email = n), !e.name && e.firstName && e.lastName && (e.name = e.firstName + " " + e.lastName), e.created && (e.created = m(e.created)), e.company && e.company.created && (e.company.created = m(e.company.created)), e
                }
                var a = e("after"),
                    s = e("event").bind,
                    E = e("callback"),
                    _ = e("clone"),
                    l = e("./cookie"),
                    O = e("./integration"),
                    u = e("debug"),
                    R = e("each"),
                    d = e("emitter"),
                    N = e("./group"),
                    T = e("./integrations"),
                    c = e("is"),
                    A = e("is-email"),
                    S = e("is-meta"),
                    m = e("new-date"),
                    p = e("prevent"),
                    I = e("querystring"),
                    h = e("object").length,
                    D = e("./store"),
                    L = e("isodate-traverse"),
                    g = e("./user");
                t.exports = n = o, n.VERSION = o.prototype.VERSION = "0.18.4", n.Integrations = o.prototype.Integrations = T, n.createIntegration = o.prototype.createIntegration = O, n.addIntegration = o.prototype.addIntegration = function(n) {
                    var e = n.prototype.name;
                    return T[e] = n, this
                }, d(o.prototype), o.prototype.init = o.prototype.initialize = function(n, e) {
                    n || (n = {}), e || (e = {}), this._options(e), this._readied = !1, this._integrations = {}, g.load(), N.load();
                    var t = this;
                    R(n, function(e) {
                        var o = t.Integrations[e];
                        o || delete n[e]
                    });
                    var o = a(h(n), function() {
                        t._readied = !0;
                        for (var n; n = t._callbacks.shift();) n();
                        t.emit("ready")
                    });
                    return R(n, function(n, e) {
                        var r = t.Integrations[n],
                            i = new r(_(e), o, t);
                        t._integrations[n] = i
                    }), this._parseQuery(), this.initialized = !0, this.emit("initialize"), this
                }, o.prototype.identify = function(n, e, t, o) {
                    return c.fn(t) && (o = t, t = void 0), c.fn(e) && (o = e, e = void 0), c.object(n) && (t = e, e = n, n = g.id()), g.identify(n, e), n = g.id(), e = i(n, g.traits()), this._invoke("identify", n, e, t), this._callback(o), this
                }, o.prototype.user = function() {
                    return g
                }, o.prototype.group = function(n, e, t, o) {
                    return 0 === arguments.length ? N : (c.fn(t) && (o = t, t = void 0), c.fn(e) && (o = e, e = void 0), c.object(n) && (t = e, e = n, n = N.id()), N.identify(n, e), n = N.id(), e = N.properties(), e.created && (e.created = m(e.created)), this._invoke("group", n, e, t), this._callback(o), this)
                }, o.prototype.track = function(n, e, t, o) {
                    return c.fn(t) && (o = t, t = void 0), c.fn(e) && (o = e, e = void 0), e = L(_(e)) || {}, this._invoke("track", n, e, t), this._callback(o), this
                }, o.prototype.trackClick = o.prototype.trackLink = function(n, e, t) {
                    if (!n) return this;
                    c.element(n) && (n = [n]);
                    var o = this;
                    return R(n, function(n) {
                        s(n, "click", function(r) {
                            var i = c.fn(e) ? e(n) : e,
                                a = c.fn(t) ? t(n) : t;
                            o.track(i, a), n.href && "_blank" !== n.target && !S(r) && (p(r), o._callback(function() {
                                window.location.href = n.href
                            }))
                        })
                    }), this
                }, o.prototype.trackSubmit = o.prototype.trackForm = function(n, e, t) {
                    if (!n) return this;
                    c.element(n) && (n = [n]);
                    var o = this;
                    return R(n, function(n) {
                        function r(r) {
                            p(r);
                            var i = c.fn(e) ? e(n) : e,
                                a = c.fn(t) ? t(n) : t;
                            o.track(i, a), o._callback(function() {
                                n.submit()
                            })
                        }
                        var i = window.jQuery || window.Zepto;
                        i ? i(n).submit(r) : s(n, "submit", r)
                    }), this
                }, o.prototype.pageview = function(n, e) {
                    return this._invoke("pageview", n, e), this
                }, o.prototype.alias = function(n, e, t) {
                    return c.object(e) && (t = e, e = void 0), this._invoke("alias", n, e, t), this
                }, o.prototype.ready = function(n) {
                    return c.fn(n) ? (this._readied ? E.async(n) : this._callbacks.push(n), this) : this
                }, o.prototype.timeout = function(n) {
                    this._timeout = n
                }, o.prototype.debug = function(n) {
                    0 == arguments.length || n ? u.enable("analytics:" + (n || "*")) : u.disable()
                }, o.prototype._options = function(n) {
                    return n || (n = {}), l.options(n.cookie), D.options(n.localStorage), g.options(n.user), N.options(n.group), this
                }, o.prototype._callback = function(n) {
                    return E.async(n, this._timeout), this
                }, o.prototype._invoke = function(n, e) {
                    e = [].slice.call(arguments, 1), e.unshift(n);
                    var t = e[e.length - 1];
                    return R(this._integrations, function(n, o) {
                        if (r(o, t)) {
                            var i = _(e);
                            o.invoke.apply(o, i)
                        }
                    }), this.emit.apply(this, _(e)), this
                }, o.prototype._parseQuery = function() {
                    var n = I.parse(window.location.search);
                    return n.ajs_uid && this.identify(n.ajs_uid), n.ajs_event && this.track(n.ajs_event), this
                }
            }), require.register("analytics/lib/cookie.js", function(n, e, t) {
                function o(n) {
                    this.options(n)
                }
                var r = e("bind"),
                    i = e("cookie"),
                    a = e("clone"),
                    s = e("defaults"),
                    E = e("json"),
                    _ = e("top-domain");
                o.prototype.options = function(n) {
                    if (0 === arguments.length) return this._options;
                    n || (n = {});
                    var e = "." + _(window.location.href);
                    ".localhost" === e && (e = ""), s(n, {
                        maxage: 31536e6,
                        path: "/",
                        domain: e
                    }), this._options = n
                }, o.prototype.set = function(n, e) {
                    try {
                        return e = E.stringify(e), i(n, e, a(this._options)), !0
                    } catch (t) {
                        return !1
                    }
                }, o.prototype.get = function(n) {
                    try {
                        var e = i(n);
                        return e = e ? E.parse(e) : null
                    } catch (t) {
                        return null
                    }
                }, o.prototype.remove = function(n) {
                    try {
                        return i(n, null, a(this._options)), !0
                    } catch (e) {
                        return !1
                    }
                }, t.exports = r.all(new o), t.exports.Cookie = o
            }), require.register("analytics/lib/store.js", function(n, e, t) {
                function o(n) {
                    this.options(n)
                }
                var r = e("bind"),
                    i = e("defaults"),
                    a = e("store");
                o.prototype.options = function(n) {
                    return 0 === arguments.length ? this._options : (n || (n = {}), i(n, {
                        enabled: !0
                    }), this.enabled = n.enabled && a.enabled, void(this._options = n))
                }, o.prototype.set = function(n, e) {
                    return this.enabled ? a.set(n, e) : !1
                }, o.prototype.get = function(n) {
                    return this.enabled ? a.get(n) : null
                }, o.prototype.remove = function(n) {
                    return this.enabled ? a.remove(n) : !1
                }, t.exports = r.all(new o), t.exports.Store = o
            }), require.register("analytics/lib/integrations.js", function(n, e, t) {
                var o = e("each"),
                    r = ["chartbeat", "google-analytics", "uservoice", "dradis"];
                o(r, function(t) {
                    var o = e("./integrations/" + t);
                    n[o.prototype.name] = o
                })
            }), require.register("analytics/lib/user.js", function(n, e, t) {
                function o(n) {
                    this.options(n), this.id(null), this.traits({})
                }
                var r = e("debug")("analytics:user"),
                    i = e("bind"),
                    a = e("clone"),
                    s = e("./cookie"),
                    E = e("defaults"),
                    _ = e("extend"),
                    l = e("./store"),
                    O = e("isodate-traverse");
                o.prototype.options = function(n) {
                    return 0 === arguments.length ? this._options : (n || (n = {}),
                        E(n, {
                            persist: !0,
                            cookie: {
                                key: "ajs_user_id",
                                oldKey: "ajs_user"
                            },
                            localStorage: {
                                key: "ajs_user_traits"
                            }
                        }), void(this._options = n))
                }, o.prototype.id = function(n) {
                    switch (arguments.length) {
                        case 0:
                            return this._getId();
                        case 1:
                            return this._setId(n)
                    }
                }, o.prototype._getId = function() {
                    var n = this._options.persist ? s.get(this._options.cookie.key) : this._id;
                    return void 0 === n ? null : n
                }, o.prototype._setId = function(n) {
                    this._options.persist ? s.set(this._options.cookie.key, n) : this._id = n
                }, o.prototype.traits = function(n) {
                    switch (arguments.length) {
                        case 0:
                            return this._getTraits();
                        case 1:
                            return this._setTraits(n)
                    }
                }, o.prototype._getTraits = function() {
                    var n = this._options.persist ? l.get(this._options.localStorage.key) : this._traits;
                    return n ? O(a(n)) : {}
                }, o.prototype._setTraits = function(n) {
                    n || (n = {}), this._options.persist ? l.set(this._options.localStorage.key, n) : this._traits = n
                }, o.prototype.identify = function(n, e) {
                    e || (e = {});
                    var t = this.id();
                    (null === t || t === n) && (e = _(this.traits(), e)), n && this.id(n), r("identify %o, %o", n, e), this.traits(e), this.save()
                }, o.prototype.save = function() {
                    return this._options.persist ? (s.set(this._options.cookie.key, this.id()), l.set(this._options.localStorage.key, this.traits()), !0) : !1
                }, o.prototype.logout = function() {
                    this.id(null), this.traits({}), s.remove(this._options.cookie.key), l.remove(this._options.localStorage.key)
                }, o.prototype.reset = function() {
                    this.logout(), this.options({})
                }, o.prototype.load = function() {
                    this._loadOldCookie() || (this.id(s.get(this._options.cookie.key)), this.traits(l.get(this._options.localStorage.key)))
                }, o.prototype._loadOldCookie = function() {
                    var n = s.get(this._options.cookie.oldKey);
                    return n ? (this.id(n.id), this.traits(n.traits), s.remove(this._options.cookie.oldKey), !0) : !1
                }, t.exports = i.all(new o), t.exports.User = o
            }), require.register("analytics/lib/group.js", function(n, e, t) {
                function o(n) {
                    this.options(n), this.id(null), this.properties({})
                }
                var r = e("debug")("analytics:group"),
                    i = e("bind"),
                    a = e("clone"),
                    s = e("./cookie"),
                    E = e("defaults"),
                    _ = e("extend"),
                    l = e("./store"),
                    O = e("isodate-traverse");
                o.prototype.options = function(n) {
                    return 0 === arguments.length ? this._options : (n || (n = {}), E(n, {
                        persist: !0,
                        cookie: {
                            key: "ajs_group_id"
                        },
                        localStorage: {
                            key: "ajs_group_properties"
                        }
                    }), void(this._options = n))
                }, o.prototype.id = function(n) {
                    switch (arguments.length) {
                        case 0:
                            return this._getId();
                        case 1:
                            return this._setId(n)
                    }
                }, o.prototype._getId = function() {
                    var n = this._options.persist ? s.get(this._options.cookie.key) : this._id;
                    return void 0 === n ? null : n
                }, o.prototype._setId = function(n) {
                    this._options.persist ? s.set(this._options.cookie.key, n) : this._id = n
                }, o.prototype.properties = function(n) {
                    switch (arguments.length) {
                        case 0:
                            return this._getProperties();
                        case 1:
                            return this._setProperties(n)
                    }
                }, o.prototype._getProperties = function() {
                    var n = this._options.persist ? l.get(this._options.localStorage.key) : this._properties;
                    return n ? O(a(n)) : {}
                }, o.prototype._setProperties = function(n) {
                    n || (n = {}), this._options.persist ? l.set(this._options.localStorage.key, n) : this._properties = n
                }, o.prototype.identify = function(n, e) {
                    e || (e = {});
                    var t = this.id();
                    (null === t || t === n) && (e = _(this.properties(), e)), n && this.id(n), r("identify %o, %o", n, e), this.properties(e), this.save()
                }, o.prototype.save = function() {
                    return this._options.persist ? (s.set(this._options.cookie.key, this.id()), l.set(this._options.localStorage.key, this.properties()), !0) : !1
                }, o.prototype.logout = function() {
                    this.id(null), this.properties({}), s.remove(this._options.cookie.key), l.remove(this._options.localStorage.key)
                }, o.prototype.reset = function() {
                    this.logout(), this.options({})
                }, o.prototype.load = function() {
                    this.id(s.get(this._options.cookie.key)), this.properties(l.get(this._options.localStorage.key))
                }, t.exports = i.all(new o), t.exports.Group = o
            }), require.register("analytics/lib/integration/index.js", function(n, e, t) {
                function o(n) {
                    function e(e, t, o) {
                        function E() {
                            a(_.queue, function(n) {
                                _[n.method].apply(_, n.args)
                            }), _.ready = !0, _.queue = [], t()
                        }
                        e = r(e, this.key), this.options = s({}, this.defaults, e), this.analytics = o, this.queue = [], this.ready = !1;
                        var _ = this;
                        i("initialize %s with %o", n, this.options), this.initialize(this.options, E)
                    }
                    for (var t in l) e[t] = l[t];
                    e.prototype.name = n;
                    for (var t in _) e.prototype[t] = _[t];
                    return e
                }

                function r(n, e) {
                    if (E.object(n)) return n;
                    if (n === !0) return {};
                    if (e && E.string(n)) {
                        var t = n;
                        return n = {}, n[e] = t, n
                    }
                }
                var i = e("debug")("analytics:integration"),
                    a = e("each"),
                    s = e("extend"),
                    E = e("is"),
                    _ = e("./protos"),
                    l = e("./statics");
                t.exports = o
            }), require.register("analytics/lib/integration/protos.js", function(n, e, t) {
                var o = e("debug")("analytics:integration");
                n.initialize = function(n, e) {
                    e()
                }, n.invoke = function(n, e) {
                    this[n] && (e = [].slice.call(arguments, 1), this.ready ? (o("%s %s %o", this.name, n, e), this[n].apply(this, e)) : this.queue.push({
                        method: n,
                        args: e
                    }))
                }
            }), require.register("analytics/lib/integration/statics.js", function(n, e, t) {
                var o = e("extend");
                n.extend = function(n) {
                    var e = this,
                        t = function() {
                            return e.apply(this, arguments)
                        },
                        r = function() {
                            this.constructor = t
                        };
                    return r.prototype = e.prototype, t.prototype = new r, o(t.prototype, n), t
                }
            }), require.register("analytics/lib/integrations/chartbeat.js", function(n, e, t) {
                var o = e("../integration"),
                    r = e("on-body"),
                    i = e("load-script"),
                    a = t.exports = o("Chartbeat");
                a.prototype.defaults = {
                    domain: "",
                    uid: null
                }, a.prototype.initialize = function(n, e) {
                    window._sf_async_config = n, r(function() {
                        window._sf_endpt = (new Date).getTime(), i({
                            https: "https://a248.e.akamai.net/chartbeat.download.akamai.com/102508/js/chartbeat.js",
                            http: "http://static.chartbeat.com/js/chartbeat.js"
                        }, e)
                    })
                }, a.prototype.pageview = function(n) {
                    window.pSUPERFLY.virtualPage(n || window.location.pathname)
                }
            }), require.register("analytics/lib/integrations/google-analytics.js", function(n, e, t) {
                function o(n) {
                    n = [].slice.call(arguments), window._gaq.push.call(window._gaq, n)
                }

                function r(n) {
                    return !n || 0 > n ? 0 : Math.round(n)
                }
                var i = e("callback"),
                    a = e("canonical"),
                    s = e("each"),
                    E = e("../integration"),
                    _ = e("is"),
                    l = e("load-script"),
                    O = e("type"),
                    u = e("url"),
                    R = t.exports = E("Google Analytics");
                R.prototype.key = "trackingId", R.prototype.defaults = {
                    anonymizeIp: !1,
                    classic: !1,
                    domain: "none",
                    doubleClick: !1,
                    enhancedLinkAttribution: !1,
                    ignoreReferrer: null,
                    initialPageview: !0,
                    siteSpeedSampleRate: null,
                    trackingId: ""
                }, R.prototype.initialize = function(n, e) {
                    if (n.classic) return this.track = this.trackClassic, this.pageview = this.pageviewClassic, this.initializeClassic(n, e);
                    if (window.GoogleAnalyticsObject = "ga", window.ga || (window.ga = function() {
                            window.ga.q || (window.ga.q = []), window.ga.q.push(arguments)
                        }), window.ga.l = (new Date).getTime(), window.ga("create", n.trackingId, {
                            cookieDomain: n.domain || R.prototype.defaults.domain,
                            siteSpeedSampleRate: n.siteSpeedSampleRate,
                            allowLinker: !0
                        }), n.anonymizeIp && window.ga("set", "anonymizeIp", !0), n.initialPageview) {
                        var t, o = a();
                        o && (t = u.parse(o).pathname), this.pageview(t)
                    }
                    i.async(e), l("//www.google-analytics.com/analytics.js")
                }, R.prototype.track = function(n, e, t) {
                    t || (t = {}), window.ga("send", "event", {
                        eventAction: n,
                        eventCategory: e.category || "All",
                        eventLabel: e.label,
                        eventValue: r(e.value || e.revenue),
                        nonInteraction: e.noninteraction || t.noninteraction
                    })
                }, R.prototype.pageview = function(n) {
                    switch (O(n)) {
                        case "object":
                            window.ga("send", "pageview", n);
                            break;
                        case "string":
                            window.ga("send", "pageview", {
                                page: u
                            });
                            break;
                        case "undefined":
                            ga("send", "pageview")
                    }
                }, R.prototype.initializeClassic = function(n, e) {
                    window._gaq || (window._gaq = []), o("_setAccount", n.trackingId), o("_setAllowLinker", !0);
                    var t = n.anonymizeIp,
                        r = n.doubleClick,
                        i = n.domain,
                        E = n.enhancedLinkAttribution,
                        O = n.ignoreReferrer,
                        R = n.initialPageview,
                        d = n.siteSpeedSampleRate;
                    if (t && o("_gat._anonymizeIp"), i && o("_setDomainName", i), d && o("_setSiteSpeedSampleRate", d), E) {
                        var N = "https:" === document.location.protocol ? "https:" : "http:",
                            T = N + "//www.google-analytics.com/plugins/ga/inpage_linkid.js";
                        o("_require", "inpage_linkid", T)
                    }
                    if (O && (_.array(O) || (O = [O]), s(O, function(n) {
                            o("_addIgnoredRef", n)
                        })), R) {
                        var c, A = a();
                        A && (c = u.parse(A).pathname), this.pageview(c)
                    }
                    r ? l("//stats.g.doubleclick.net/dc.js", e) : l({
                        http: "http://www.google-analytics.com/ga.js",
                        https: "https://ssl.google-analytics.com/ga.js"
                    }, e)
                }, R.prototype.trackClassic = function(n, e, t) {
                    t || (t = {});
                    var i = e.category || "All",
                        a = e.label,
                        s = r(e.revenue || e.value),
                        E = e.noninteraction || t.noninteraction;
                    o("_trackEvent", i, n, a, s, E)
                }, R.prototype.pageviewClassic = function(n) {
                    o("_trackPageview", n)
                }
            }), require.register("analytics/lib/integrations/uservoice.js", function(n, e, t) {
                function o(n) {
                    n = [].slice.call(arguments), window.UserVoice.push(n)
                }

                function r(n) {
                    var e = _(n);
                    return s(e, {
                        forumId: "forum_id",
                        accentColor: "accent_color",
                        triggerColor: "trigger_color",
                        triggerBackgroundColor: "trigger_background_color",
                        triggerPosition: "trigger_position"
                    }), e
                }

                function i(n) {
                    var e = _(n);
                    return s(e, {
                        forumId: "forum_id",
                        classicMode: "mode",
                        primaryColor: "primary_color",
                        tabPosition: "tab_position",
                        tabColor: "tab_color",
                        linkColor: "link_color",
                        defaultMode: "default_mode",
                        tabLabel: "tab_label",
                        tabInverted: "tab_inverted"
                    }), e
                }

                function a(n, e) {
                    n || (n = "showLightbox"), o(n, "classic_widget", e)
                }
                var s = e("alias"),
                    E = e("callback"),
                    _ = e("clone"),
                    l = e("convert-dates"),
                    O = e("../integration"),
                    u = e("load-script"),
                    R = e("to-unix-timestamp"),
                    d = t.exports = O("UserVoice");
                d.prototype.key = "apiKey", d.prototype.defaults = {
                    apiKey: "",
                    classic: !1,
                    forumId: null,
                    showWidget: !0,
                    mode: "contact",
                    accentColor: "#448dd6",
                    trigger: null,
                    triggerPosition: "bottom-right",
                    triggerColor: "#ffffff",
                    triggerBackgroundColor: "rgba(46, 49, 51, 0.6)",
                    classicMode: "full",
                    primaryColor: "#cc6d00",
                    linkColor: "#007dbf",
                    defaultMode: "support",
                    tabLabel: "Feedback & Support",
                    tabColor: "#cc6d00",
                    tabPosition: "middle-right",
                    tabInverted: !1
                }, d.prototype.initialize = function(n, e) {
                    if (n.classic) return this.identify = this.identifyClassic, delete this.group, this.initializeClassic(n, e);
                    window.UserVoice || (window.UserVoice = []);
                    var t = r(n);
                    o("set", t), o("autoprompt", {}), n.showWidget && (n.trigger ? o("addTrigger", n.trigger, t) : o("addTrigger", t)), E.async(e), u("//widget.uservoice.com/" + n.apiKey + ".js")
                }, d.prototype.identify = function(n, e, t) {
                    n && (e.id = n), e = l(e, R), s(e, {
                        created: "created_at"
                    }), o("identify", e)
                }, d.prototype.group = function(n, e, t) {
                    n && (e.id = n), e = l(e, R), s(e, {
                        created: "created_at"
                    }), o("identify", {
                        account: e
                    })
                }, d.prototype.initializeClassic = function(n, e) {
                    window.UserVoice || (window.UserVoice = []), window.showClassicWidget = a, n.showWidget && a("showTab", i(n)), E.async(e), u("//widget.uservoice.com/" + n.apiKey + ".js")
                }, d.prototype.identifyClassic = function(n, e, t) {
                    n && (e.id = n), o("setCustomFields", e)
                }
            }), require.register("analytics/lib/integrations/dradis.js", function(n, e, t) {
                var o = (e("alias"), e("../integration")),
                    r = e("extend"),
                    i = e("type"),
                    a = e("each"),
                    s = e("load-script"),
                    E = t.exports = o("Dradis");
                E.prototype.defaults = {
                    key: "messageType",
                    messageType: "web_analytics",
                    pageview: !0,
                    initialPageview: !0
                }, E.prototype.initialize = function(n, e) {
                    var t = this;
                    s("//riot-dradis-assets-oregon.s3.amazonaws.com/dradis-0.5.0-prod.min.js", function() {
                        window.dradis = new Dradis.Analytics(n.messageType), n.initialPageview && t.pageview(), e()
                    })
                }, E.prototype.identify = function(n, e) {
                    e = r(e, {
                        userId: n
                    }), a(e, function(n, e) {
                        window.dradis.setPii(n, e)
                    })
                }, E.prototype.track = function(n, e) {
                    switch (i(e)) {
                        case "object":
                            e = r(e, {
                                event: n
                            }), window.dradis.trackEvent(e);
                            break;
                        case "array":
                            e.push(n), window.dradis.trackEvent(e);
                            break;
                        case "string":
                            window.dradis.trackEvent([n, e]);
                            break;
                        case "undefined":
                            window.dradis.trackEvent([n])
                    }
                }, E.prototype.pageview = function(n) {
                    if (this.options.pageview) switch (i(n)) {
                        case "object":
                            window.dradis.trackPageview(n);
                            break;
                        case "string":
                            window.dradis.trackPageview({
                                path: n
                            });
                            break;
                        case "undefined":
                            window.dradis.trackPageview()
                    }
                }
            }), require.alias("avetisk-defaults/index.js", "analytics/deps/defaults/index.js"), require.alias("avetisk-defaults/index.js", "defaults/index.js"), require.alias("component-clone/index.js", "analytics/deps/clone/index.js"), require.alias("component-clone/index.js", "clone/index.js"), require.alias("component-type/index.js", "component-clone/deps/type/index.js"), require.alias("component-cookie/index.js", "analytics/deps/cookie/index.js"), require.alias("component-cookie/index.js", "cookie/index.js"), require.alias("component-each/index.js", "analytics/deps/each/index.js"), require.alias("component-each/index.js", "each/index.js"), require.alias("component-type/index.js", "component-each/deps/type/index.js"), require.alias("component-emitter/index.js", "analytics/deps/emitter/index.js"), require.alias("component-emitter/index.js", "emitter/index.js"), require.alias("component-indexof/index.js", "component-emitter/deps/indexof/index.js"), require.alias("component-event/index.js", "analytics/deps/event/index.js"), require.alias("component-event/index.js", "event/index.js"), require.alias("component-inherit/index.js", "analytics/deps/inherit/index.js"), require.alias("component-inherit/index.js", "inherit/index.js"), require.alias("component-object/index.js", "analytics/deps/object/index.js"), require.alias("component-object/index.js", "object/index.js"), require.alias("component-querystring/index.js", "analytics/deps/querystring/index.js"), require.alias("component-querystring/index.js", "querystring/index.js"), require.alias("component-trim/index.js", "component-querystring/deps/trim/index.js"), require.alias("component-type/index.js", "analytics/deps/type/index.js"), require.alias("component-type/index.js", "type/index.js"), require.alias("component-url/index.js", "analytics/deps/url/index.js"), require.alias("component-url/index.js", "url/index.js"), require.alias("ianstormtaylor-callback/index.js", "analytics/deps/callback/index.js"), require.alias("ianstormtaylor-callback/index.js", "callback/index.js"), require.alias("timoxley-next-tick/index.js", "ianstormtaylor-callback/deps/next-tick/index.js"), require.alias("ianstormtaylor-bind/index.js", "analytics/deps/bind/index.js"), require.alias("ianstormtaylor-bind/index.js", "bind/index.js"), require.alias("component-bind/index.js", "ianstormtaylor-bind/deps/bind/index.js"), require.alias("segmentio-bind-all/index.js", "ianstormtaylor-bind/deps/bind-all/index.js"), require.alias("component-bind/index.js", "segmentio-bind-all/deps/bind/index.js"), require.alias("component-type/index.js", "segmentio-bind-all/deps/type/index.js"), require.alias("ianstormtaylor-is/index.js", "analytics/deps/is/index.js"), require.alias("ianstormtaylor-is/index.js", "is/index.js"), require.alias("component-type/index.js", "ianstormtaylor-is/deps/type/index.js"), require.alias("ianstormtaylor-is-empty/index.js", "ianstormtaylor-is/deps/is-empty/index.js"), require.alias("jkroso-equals/index.js", "analytics/deps/equals/index.js"), require.alias("jkroso-equals/index.js", "equals/index.js"), require.alias("jkroso-type/index.js", "jkroso-equals/deps/type/index.js"), require.alias("segmentio-after/index.js", "analytics/deps/after/index.js"), require.alias("segmentio-after/index.js", "after/index.js"), require.alias("segmentio-alias/index.js", "analytics/deps/alias/index.js"), require.alias("segmentio-alias/index.js", "alias/index.js"), require.alias("component-type/index.js", "segmentio-alias/deps/type/index.js"), require.alias("segmentio-canonical/index.js", "analytics/deps/canonical/index.js"), require.alias("segmentio-canonical/index.js", "canonical/index.js"), require.alias("segmentio-convert-dates/index.js", "analytics/deps/convert-dates/index.js"), require.alias("segmentio-convert-dates/index.js", "convert-dates/index.js"), require.alias("component-clone/index.js", "segmentio-convert-dates/deps/clone/index.js"), require.alias("component-type/index.js", "component-clone/deps/type/index.js"), require.alias("ianstormtaylor-is/index.js", "segmentio-convert-dates/deps/is/index.js"), require.alias("component-type/index.js", "ianstormtaylor-is/deps/type/index.js"), require.alias("ianstormtaylor-is-empty/index.js", "ianstormtaylor-is/deps/is-empty/index.js"), require.alias("segmentio-extend/index.js", "analytics/deps/extend/index.js"), require.alias("segmentio-extend/index.js", "extend/index.js"), require.alias("segmentio-is-email/index.js", "analytics/deps/is-email/index.js"), require.alias("segmentio-is-email/index.js", "is-email/index.js"), require.alias("segmentio-is-meta/index.js", "analytics/deps/is-meta/index.js"), require.alias("segmentio-is-meta/index.js", "is-meta/index.js"), require.alias("segmentio-isodate-traverse/index.js", "analytics/deps/isodate-traverse/index.js"), require.alias("segmentio-isodate-traverse/index.js", "isodate-traverse/index.js"), require.alias("component-clone/index.js", "segmentio-isodate-traverse/deps/clone/index.js"), require.alias("component-type/index.js", "component-clone/deps/type/index.js"), require.alias("component-each/index.js", "segmentio-isodate-traverse/deps/each/index.js"), require.alias("component-type/index.js", "component-each/deps/type/index.js"), require.alias("ianstormtaylor-is/index.js", "segmentio-isodate-traverse/deps/is/index.js"), require.alias("component-type/index.js", "ianstormtaylor-is/deps/type/index.js"), require.alias("ianstormtaylor-is-empty/index.js", "ianstormtaylor-is/deps/is-empty/index.js"), require.alias("segmentio-isodate/index.js", "segmentio-isodate-traverse/deps/isodate/index.js"), require.alias("segmentio-json/index.js", "analytics/deps/json/index.js"), require.alias("segmentio-json/index.js", "json/index.js"), require.alias("component-json-fallback/index.js", "segmentio-json/deps/json-fallback/index.js"), require.alias("segmentio-load-date/index.js", "analytics/deps/load-date/index.js"), require.alias("segmentio-load-date/index.js", "load-date/index.js"), require.alias("segmentio-load-script/index.js", "analytics/deps/load-script/index.js"), require.alias("segmentio-load-script/index.js", "load-script/index.js"), require.alias("component-type/index.js", "segmentio-load-script/deps/type/index.js"), require.alias("segmentio-new-date/lib/index.js", "analytics/deps/new-date/lib/index.js"), require.alias("segmentio-new-date/lib/milliseconds.js", "analytics/deps/new-date/lib/milliseconds.js"), require.alias("segmentio-new-date/lib/seconds.js", "analytics/deps/new-date/lib/seconds.js"), require.alias("segmentio-new-date/lib/index.js", "analytics/deps/new-date/index.js"), require.alias("segmentio-new-date/lib/index.js", "new-date/index.js"), require.alias("ianstormtaylor-is/index.js", "segmentio-new-date/deps/is/index.js"), require.alias("component-type/index.js", "ianstormtaylor-is/deps/type/index.js"), require.alias("ianstormtaylor-is-empty/index.js", "ianstormtaylor-is/deps/is-empty/index.js"), require.alias("segmentio-isodate/index.js", "segmentio-new-date/deps/isodate/index.js"), require.alias("segmentio-new-date/lib/index.js", "segmentio-new-date/index.js"), require.alias("segmentio-on-body/index.js", "analytics/deps/on-body/index.js"), require.alias("segmentio-on-body/index.js", "on-body/index.js"), require.alias("component-each/index.js", "segmentio-on-body/deps/each/index.js"), require.alias("component-type/index.js", "component-each/deps/type/index.js"), require.alias("segmentio-on-error/index.js", "analytics/deps/on-error/index.js"), require.alias("segmentio-on-error/index.js", "on-error/index.js"), require.alias("segmentio-store.js/store.js", "analytics/deps/store/store.js"), require.alias("segmentio-store.js/store.js", "analytics/deps/store/index.js"), require.alias("segmentio-store.js/store.js", "store/index.js"), require.alias("segmentio-store.js/store.js", "segmentio-store.js/index.js"), require.alias("segmentio-to-unix-timestamp/index.js", "analytics/deps/to-unix-timestamp/index.js"), require.alias("segmentio-to-unix-timestamp/index.js", "to-unix-timestamp/index.js"), require.alias("segmentio-top-domain/index.js", "analytics/deps/top-domain/index.js"), require.alias("segmentio-top-domain/index.js", "analytics/deps/top-domain/index.js"), require.alias("segmentio-top-domain/index.js", "top-domain/index.js"), require.alias("component-url/index.js", "segmentio-top-domain/deps/url/index.js"), require.alias("segmentio-top-domain/index.js", "segmentio-top-domain/index.js"), require.alias("timoxley-next-tick/index.js", "analytics/deps/next-tick/index.js"), require.alias("timoxley-next-tick/index.js", "next-tick/index.js"), require.alias("yields-prevent/index.js", "analytics/deps/prevent/index.js"), require.alias("yields-prevent/index.js", "prevent/index.js"), require.alias("yields-slug/index.js", "analytics/deps/slug/index.js"), require.alias("yields-slug/index.js", "slug/index.js"), require.alias("visionmedia-debug/index.js", "analytics/deps/debug/index.js"), require.alias("visionmedia-debug/debug.js", "analytics/deps/debug/debug.js"), require.alias("visionmedia-debug/index.js", "debug/index.js"), require.alias("analytics/lib/index.js", "analytics/index.js"), module.exports = require("analytics")
        }()
    }).call(exports, function() {
        return this
    }(), __webpack_require__(13).setImmediate, __webpack_require__(19))
}, function(n, e, t) {
    var o, r;
    ! function(t, i) {
        o = [], r = function() {
            return i()
        }.apply(e, o), !(void 0 !== r && (n.exports = r))
    }(this, function() {
        var n = {
            Store: function(e, t) {
                var o = n.stores();
                e && (this._CACHE_SUFFIX = this._CACHE_SUFFIX + e, this._EXPIRY_KEY = this._EXPIRY_KEY + e, -1 === o.indexOf(e) && o.push(e)), localStorage.setItem("_burry_stores_", JSON.stringify(o)), this.default_ttl = t
            },
            _EXPIRY_UNITS: 6e4,
            _mEpoch: function() {
                return Math.floor((new Date).getTime() / n._EXPIRY_UNITS)
            },
            stores: function() {
                var n = localStorage.getItem("_burry_stores_");
                return n = n ? JSON.parse(n) : [""]
            },
            isSupported: function() {
                if (n._isSupported) return n._isSupported;
                try {
                    localStorage.setItem("_burry_", "_burry_"), localStorage.removeItem("_burry_")
                } catch (e) {
                    return n._isSupported = !1
                }
                return JSON ? n._isSupported = !0 : n._isSupported = !1
            },
            flushExpired: function() {
                var e, t, o, r, i, a = [],
                    s = n._mEpoch(),
                    E = new RegExp("(.+)" + n.Store.prototype._EXPIRY_KEY + "(.*)");
                for (e = 0; e < localStorage.length; e++) o = localStorage.key(e), t = o.match(E), t && (r = localStorage.getItem(o), s > r && (o = t[1], i = t[2], a.push(o + n.Store.prototype._CACHE_SUFFIX + i), a.push(o + n.Store.prototype._EXPIRY_KEY + i)));
                for (e = 0; e < a.length; e++) localStorage.removeItem(a[e])
            }
        };
        return n.Store.prototype = {
            _CACHE_SUFFIX: "-_burry_",
            _EXPIRY_KEY: "-_burry_exp_",
            _internalKey: function(n) {
                return n + this._CACHE_SUFFIX
            },
            _expirationKey: function(n) {
                return n + this._EXPIRY_KEY
            },
            _isInternalKey: function(n) {
                return n.slice(-this._CACHE_SUFFIX.length) === this._CACHE_SUFFIX ? n.slice(0, -this._CACHE_SUFFIX.length) : !1
            },
            _isExpirationKey: function(n) {
                return n.slice(-this._EXPIRY_KEY.length) === this._EXPIRY_KEY ? n.slice(0, -this._EXPIRY_KEY.length) : !1
            },
            _expiresOn: function(n) {
                var e = localStorage.getItem(this._expirationKey(n));
                return e ? parseInt(e, 10) : void 0
            },
            _getCounter: function(n) {
                var e = localStorage.getItem(n);
                return null === e ? 0 : parseInt(e, 10)
            },
            get: function(n) {
                var e = localStorage.getItem(this._internalKey(n));
                if (null === e) return void 0;
                if (this.hasExpired(n)) return void this.remove(n);
                try {
                    e = JSON.parse(e)
                } catch (t) {
                    return void 0
                }
                return e
            },
            set: function(e, t, o) {
                var r = this,
                    i = function() {
                        localStorage.setItem(r._internalKey(e), t), o ? localStorage.setItem(r._expirationKey(e), n._mEpoch() + o) : localStorage.removeItem(r._expirationKey(e))
                    };
                if (o = o || r.default_ttl, o && (o = parseInt(o, 10)), void 0 === typeof e || void 0 === typeof t) return !1;
                t = JSON.stringify(t);
                try {
                    i()
                } catch (a) {
                    if (22 === a.code || "QUOTA_EXCEEDED_ERR" === a.name || "QuoteExceededError" === a.name || "NS_ERROR_DOM_QUOTA_REACHED" === a.name) {
                        n.flushExpired();
                        try {
                            i()
                        } catch (a) {
                            return !1
                        }
                    }
                }
                return !0
            },
            add: function(n, e, t) {
                return null === localStorage.getItem(this._internalKey(n)) || this.hasExpired(n) ? this.set(n, e, t) : !1
            },
            replace: function(n, e, t) {
                return null === localStorage.getItem(this._internalKey(n)) || this.hasExpired(n) ? !1 : this.set(n, e, t)
            },
            remove: function(n) {
                localStorage.removeItem(this._internalKey(n)), localStorage.removeItem(this._expirationKey(n))
            },
            incr: function(n) {
                var e = this._internalKey(n),
                    t = this._getCounter(e);
                t++, localStorage.setItem(e, t)
            },
            decr: function(n) {
                var e = this._internalKey(n),
                    t = this._getCounter(e);
                t--, localStorage.setItem(e, t)
            },
            hasExpired: function(e) {
                var t = this._expiresOn(e);
                return t && t < n._mEpoch() ? !0 : !1
            },
            keys: function() {
                var n, e, t, o = [];
                for (n = 0; n < localStorage.length; n++) e = localStorage.key(n), t = this._isInternalKey(e), t && o.push(t);
                return o
            },
            expirableKeys: function() {
                var n, e, t, o = {};
                for (n = 0; n < localStorage.length; n++) e = localStorage.key(n), t = this._isExpirationKey(e), t && (o[t] = parseInt(localStorage.getItem(e), 10));
                return o
            },
            flush: function() {
                var n, e, t = [];
                for (n = 0; n < localStorage.length; n++) e = localStorage.key(n), (this._isInternalKey(e) || this._isExpirationKey(e)) && t.push(e);
                for (n = 0; n < t.length; n++) localStorage.removeItem(t[n])
            },
            flushExpired: function() {
                var e, t, o = this.expirableKeys(),
                    r = n._mEpoch();
                for (e in o) t = o[e], r > t && this.remove(e)
            }
        }, n
    })
}, function(n, e) {
    ! function(n, e, t, o, r, i) {
        function a(n, e) {
            var t = typeof n[e];
            return "function" == t || !("object" != t || !n[e]) || "unknown" == t
        }

        function s(n, e) {
            return !("object" != typeof n[e] || !n[e])
        }

        function E(n) {
            return "[object Array]" === Object.prototype.toString.call(n)
        }

        function _() {
            var n = "Shockwave Flash",
                e = "application/x-shockwave-flash";
            if (!S(navigator.plugins) && "object" == typeof navigator.plugins[n]) {
                var t = navigator.plugins[n].description;
                t && !S(navigator.mimeTypes) && navigator.mimeTypes[e] && navigator.mimeTypes[e].enabledPlugin && (C = t.match(/\d+/g))
            }
            if (!C) {
                var o;
                try {
                    o = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), C = Array.prototype.slice.call(o.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/), 1), o = null
                } catch (r) {}
            }
            if (!C) return !1;
            var i = parseInt(C[0], 10),
                a = parseInt(C[1], 10);
            return f = i > 9 && a > 0, !0
        }

        function l() {
            if (!Y) {
                Y = !0;
                for (var n = 0; n < W.length; n++) W[n]();
                W.length = 0
            }
        }

        function O(n, e) {
            return Y ? void n.call(e) : void W.push(function() {
                n.call(e)
            })
        }

        function u() {
            var n = parent;
            if ("" !== k)
                for (var e = 0, t = k.split("."); e < t.length; e++) n = n[t[e]];
            return n.easyXDM
        }

        function R(e) {
            return n.easyXDM = H, k = e, k && (z = "easyXDM_" + k.replace(".", "_") + "_"), w
        }

        function d(n) {
            return n.match(V)[3]
        }

        function N(n) {
            return n.match(V)[4] || ""
        }

        function T(n) {
            var e = n.toLowerCase().match(V),
                t = e[2],
                o = e[3],
                r = e[4] || "";
            return ("http:" == t && ":80" == r || "https:" == t && ":443" == r) && (r = ""), t + "//" + o + r
        }

        function c(n) {
            if (n = n.replace(F, "$1/"), !n.match(/^(http||https):\/\//)) {
                var e = "/" === n.substring(0, 1) ? "" : t.pathname;
                "/" !== e.substring(e.length - 1) && (e = e.substring(0, e.lastIndexOf("/") + 1)), n = t.protocol + "//" + t.host + e + n
            }
            for (; B.test(n);) n = n.replace(B, "");
            return n
        }

        function A(n, e) {
            var t = "",
                o = n.indexOf("#"); - 1 !== o && (t = n.substring(o), n = n.substring(0, o));
            var r = [];
            for (var a in e) e.hasOwnProperty(a) && r.push(a + "=" + i(e[a]));
            return n + (G ? "#" : -1 == n.indexOf("?") ? "?" : "&") + r.join("&") + t
        }

        function S(n) {
            return "undefined" == typeof n
        }

        function m(n, e, t) {
            var o;
            for (var r in e) e.hasOwnProperty(r) && (r in n ? (o = e[r], "object" == typeof o ? m(n[r], o, t) : t || (n[r] = e[r])) : n[r] = e[r]);
            return n
        }

        function p() {
            var n = e.body.appendChild(e.createElement("form")),
                t = n.appendChild(e.createElement("input"));
            t.name = z + "TEST" + P, M = t !== n.elements[t.name], e.body.removeChild(n)
        }

        function I(n) {
            S(M) && p();
            var t;
            M ? t = e.createElement('<iframe name="' + n.props.name + '"/>') : (t = e.createElement("IFRAME"), t.name = n.props.name), t.id = t.name = n.props.name, delete n.props.name, "string" == typeof n.container && (n.container = e.getElementById(n.container)), n.container || (m(t.style, {
                position: "absolute",
                top: "-2000px",
                left: "0px"
            }), n.container = e.body);
            var o = n.props.src;
            if (n.props.src = "javascript:false", m(t, n.props), t.border = t.frameBorder = 0, t.allowTransparency = !0, n.container.appendChild(t), n.onLoad && U(t, "load", n.onLoad), n.usePost) {
                var r, i = n.container.appendChild(e.createElement("form"));
                if (i.target = t.name, i.action = o, i.method = "POST", "object" == typeof n.usePost)
                    for (var a in n.usePost) n.usePost.hasOwnProperty(a) && (M ? r = e.createElement('<input name="' + a + '"/>') : (r = e.createElement("INPUT"), r.name = a), r.value = n.usePost[a], i.appendChild(r));
                i.submit(), i.parentNode.removeChild(i)
            } else t.src = o;
            return n.props.src = o, t
        }

        function h(n, e) {
            "string" == typeof n && (n = [n]);
            for (var t, o = n.length; o--;)
                if (t = n[o], t = new RegExp("^" == t.substr(0, 1) ? t : "^" + t.replace(/(\*)/g, ".$1").replace(/\?/g, ".") + "$"), t.test(e)) return !0;
            return !1
        }

        function D(o) {
            var r, i = o.protocol;
            if (o.isHost = o.isHost || S(K.xdm_p), G = o.hash || !1, o.props || (o.props = {}), o.isHost) o.remote = c(o.remote), o.channel = o.channel || "default" + P++, o.secret = Math.random().toString(16).substring(2), S(i) && (i = T(t.href) == T(o.remote) ? "4" : a(n, "postMessage") || a(e, "postMessage") ? "1" : o.swf && a(n, "ActiveXObject") && _() ? "6" : "Gecko" === navigator.product && "frameElement" in n && -1 == navigator.userAgent.indexOf("WebKit") ? "5" : o.remoteHelper ? "2" : "0");
            else if (o.channel = K.xdm_c.replace(/["'<>\\]/g, ""), o.secret = K.xdm_s, o.remote = K.xdm_e.replace(/["'<>\\]/g, ""), i = K.xdm_p, o.acl && !h(o.acl, o.remote)) throw new Error("Access denied for " + o.remote);
            switch (o.protocol = i, i) {
                case "0":
                    if (m(o, {
                            interval: 100,
                            delay: 2e3,
                            useResize: !0,
                            useParent: !1,
                            usePolling: !1
                        }, !0), o.isHost) {
                        if (!o.local) {
                            for (var s, E = t.protocol + "//" + t.host, l = e.body.getElementsByTagName("img"), O = l.length; O--;)
                                if (s = l[O], s.src.substring(0, E.length) === E) {
                                    o.local = s.src;
                                    break
                                }
                            o.local || (o.local = n)
                        }
                        var u = {
                            xdm_c: o.channel,
                            xdm_p: 0
                        };
                        o.local === n ? (o.usePolling = !0, o.useParent = !0, o.local = t.protocol + "//" + t.host + t.pathname + t.search, u.xdm_e = o.local, u.xdm_pa = 1) : u.xdm_e = c(o.local), o.container && (o.useResize = !1, u.xdm_po = 1), o.remote = A(o.remote, u)
                    } else m(o, {
                        useParent: !S(K.xdm_pa),
                        usePolling: !S(K.xdm_po),
                        useResize: o.useParent ? !1 : o.useResize
                    });
                    r = [new w.stack.HashTransport(o), new w.stack.ReliableBehavior({}), new w.stack.QueueBehavior({
                        encode: !0,
                        maxLength: 4e3 - o.remote.length
                    }), new w.stack.VerifyBehavior({
                        initiate: o.isHost
                    })];
                    break;
                case "1":
                    r = [new w.stack.PostMessageTransport(o)];
                    break;
                case "2":
                    o.isHost && (o.remoteHelper = c(o.remoteHelper)), r = [new w.stack.NameTransport(o), new w.stack.QueueBehavior, new w.stack.VerifyBehavior({
                        initiate: o.isHost
                    })];
                    break;
                case "3":
                    r = [new w.stack.NixTransport(o)];
                    break;
                case "4":
                    r = [new w.stack.SameOriginTransport(o)];
                    break;
                case "5":
                    r = [new w.stack.FrameElementTransport(o)];
                    break;
                case "6":
                    C || _(), r = [new w.stack.FlashTransport(o)]
            }
            return r.push(new w.stack.QueueBehavior({
                lazy: o.lazy,
                remove: !0
            })), r
        }

        function L(n) {
            for (var e, t = {
                    incoming: function(n, e) {
                        this.up.incoming(n, e)
                    },
                    outgoing: function(n, e) {
                        this.down.outgoing(n, e)
                    },
                    callback: function(n) {
                        this.up.callback(n)
                    },
                    init: function() {
                        this.down.init()
                    },
                    destroy: function() {
                        this.down.destroy()
                    }
                }, o = 0, r = n.length; r > o; o++) e = n[o], m(e, t, !0), 0 !== o && (e.down = n[o - 1]), o !== r - 1 && (e.up = n[o + 1]);
            return e
        }

        function g(n) {
            n.up.down = n.down, n.down.up = n.up, n.up = n.down = null
        }
        var M, C, f, U, v, b = this,
            P = Math.floor(1e4 * Math.random()),
            y = Function.prototype,
            V = /^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/,
            B = /[\-\w]+\/\.\.\//,
            F = /([^:])\/\//g,
            k = "",
            w = {},
            H = n.easyXDM,
            z = "easyXDM_",
            G = !1;
        if (a(n, "addEventListener")) U = function(n, e, t) {
            n.addEventListener(e, t, !1)
        }, v = function(n, e, t) {
            n.removeEventListener(e, t, !1)
        };
        else {
            if (!a(n, "attachEvent")) throw new Error("Browser not supported");
            U = function(n, e, t) {
                n.attachEvent("on" + e, t)
            }, v = function(n, e, t) {
                n.detachEvent("on" + e, t)
            }
        }
        var x, Y = !1,
            W = [];
        if ("readyState" in e ? (x = e.readyState, Y = "complete" == x || ~navigator.userAgent.indexOf("AppleWebKit/") && ("loaded" == x || "interactive" == x)) : Y = !!e.body, !Y) {
            if (a(n, "addEventListener")) U(e, "DOMContentLoaded", l);
            else if (U(e, "readystatechange", function() {
                    "complete" == e.readyState && l()
                }), e.documentElement.doScroll && n === top) {
                var j = function() {
                    if (!Y) {
                        try {
                            e.documentElement.doScroll("left")
                        } catch (n) {
                            return void o(j, 1)
                        }
                        l()
                    }
                };
                j()
            }
            U(n, "load", l)
        }
        var K = function(n) {
                n = n.substring(1).split("&");
                for (var e, t = {}, o = n.length; o--;) e = n[o].split("="), t[e[0]] = r(e[1]);
                return t
            }(/xdm_e=/.test(t.search) ? t.search : t.hash),
            q = function() {
                var n = {},
                    e = {
                        a: [1, 2, 3]
                    },
                    t = '{"a":[1,2,3]}';
                return "undefined" != typeof JSON && "function" == typeof JSON.stringify && JSON.stringify(e).replace(/\s/g, "") === t ? JSON : (Object.toJSON && Object.toJSON(e).replace(/\s/g, "") === t && (n.stringify = Object.toJSON), "function" == typeof String.prototype.evalJSON && (e = t.evalJSON(), e.a && 3 === e.a.length && 3 === e.a[2] && (n.parse = function(n) {
                    return n.evalJSON()
                })), n.stringify && n.parse ? (q = function() {
                    return n
                }, n) : null)
            };
        m(w, {
                version: "2.4.20.7",
                query: K,
                stack: {},
                apply: m,
                getJSONObject: q,
                whenReady: O,
                noConflict: R
            }), w.DomHelper = {
                on: U,
                un: v,
                requiresJSON: function(t) {
                    s(n, "JSON") || e.write('<script type="text/javascript" src="' + t + '"></script>')
                }
            },
            function() {
                var n = {};
                w.Fn = {
                    set: function(e, t) {
                        n[e] = t
                    },
                    get: function(e, t) {
                        if (n.hasOwnProperty(e)) {
                            var o = n[e];
                            return t && delete n[e], o
                        }
                    }
                }
            }(), w.Socket = function(n) {
                var e = L(D(n).concat([{
                        incoming: function(e, t) {
                            n.onMessage(e, t)
                        },
                        callback: function(e) {
                            n.onReady && n.onReady(e)
                        }
                    }])),
                    t = T(n.remote);
                this.origin = T(n.remote), this.destroy = function() {
                    e.destroy()
                }, this.postMessage = function(n) {
                    e.outgoing(n, t)
                }, e.init()
            }, w.Rpc = function(n, e) {
                if (e.local)
                    for (var t in e.local)
                        if (e.local.hasOwnProperty(t)) {
                            var o = e.local[t];
                            "function" == typeof o && (e.local[t] = {
                                method: o
                            })
                        }
                var r = L(D(n).concat([new w.stack.RpcBehavior(this, e), {
                    callback: function(e) {
                        n.onReady && n.onReady(e)
                    }
                }]));
                this.origin = T(n.remote), this.destroy = function() {
                    r.destroy()
                }, r.init()
            }, w.stack.SameOriginTransport = function(n) {
                var e, r, i, a;
                return e = {
                    outgoing: function(n, e, t) {
                        i(n), t && t()
                    },
                    destroy: function() {
                        r && (r.parentNode.removeChild(r), r = null)
                    },
                    onDOMReady: function() {
                        a = T(n.remote), n.isHost ? (m(n.props, {
                            src: A(n.remote, {
                                xdm_e: t.protocol + "//" + t.host + t.pathname,
                                xdm_c: n.channel,
                                xdm_p: 4
                            }),
                            name: z + n.channel + "_provider"
                        }), r = I(n), w.Fn.set(n.channel, function(n) {
                            return i = n, o(function() {
                                    e.up.callback(!0)
                                }, 0),
                                function(n) {
                                    e.up.incoming(n, a)
                                }
                        })) : (i = u().Fn.get(n.channel, !0)(function(n) {
                            e.up.incoming(n, a)
                        }), o(function() {
                            e.up.callback(!0)
                        }, 0))
                    },
                    init: function() {
                        O(e.onDOMReady, e)
                    }
                }
            }, w.stack.FlashTransport = function(n) {
                function r(n, e) {
                    o(function() {
                        s.up.incoming(n, _)
                    }, 0)
                }

                function a(t) {
                    var o = n.swf + "?host=" + n.isHost,
                        r = "easyXDM_swf_" + Math.floor(1e4 * Math.random());
                    w.Fn.set("flash_loaded" + t.replace(/[\-.]/g, "_"), function() {
                        w.stack.FlashTransport[t].swf = l = u.firstChild;
                        for (var n = w.stack.FlashTransport[t].queue, e = 0; e < n.length; e++) n[e]();
                        n.length = 0
                    }), n.swfContainer ? u = "string" == typeof n.swfContainer ? e.getElementById(n.swfContainer) : n.swfContainer : (u = e.createElement("div"), m(u.style, f && n.swfNoThrottle ? {
                        height: "20px",
                        width: "20px",
                        position: "fixed",
                        right: 0,
                        top: 0
                    } : {
                        height: "1px",
                        width: "1px",
                        position: "absolute",
                        overflow: "hidden",
                        right: 0,
                        top: 0
                    }), e.body.appendChild(u));
                    var a = "callback=flash_loaded" + i(t.replace(/[\-.]/g, "_")) + "&proto=" + b.location.protocol + "&domain=" + i(d(b.location.href)) + "&port=" + i(N(b.location.href)) + "&ns=" + i(k);
                    u.innerHTML = "<object height='20' width='20' type='application/x-shockwave-flash' id='" + r + "' data='" + o + "'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='" + o + "'></param><param name='flashvars' value='" + a + "'></param><embed type='application/x-shockwave-flash' FlashVars='" + a + "' allowScriptAccess='always' wmode='transparent' src='" + o + "' height='1' width='1'></embed></object>"
                }
                var s, E, _, l, u;
                return s = {
                    outgoing: function(e, t, o) {
                        l.postMessage(n.channel, e.toString()), o && o()
                    },
                    destroy: function() {
                        try {
                            l.destroyChannel(n.channel)
                        } catch (e) {}
                        l = null, E && (E.parentNode.removeChild(E), E = null)
                    },
                    onDOMReady: function() {
                        _ = n.remote, w.Fn.set("flash_" + n.channel + "_init", function() {
                            o(function() {
                                s.up.callback(!0)
                            })
                        }), w.Fn.set("flash_" + n.channel + "_onMessage", r), n.swf = c(n.swf);
                        var e = d(n.swf),
                            i = function() {
                                w.stack.FlashTransport[e].init = !0, l = w.stack.FlashTransport[e].swf, l.createChannel(n.channel, n.secret, T(n.remote), n.isHost), n.isHost && (f && n.swfNoThrottle && m(n.props, {
                                    position: "fixed",
                                    right: 0,
                                    top: 0,
                                    height: "20px",
                                    width: "20px"
                                }), m(n.props, {
                                    src: A(n.remote, {
                                        xdm_e: T(t.href),
                                        xdm_c: n.channel,
                                        xdm_p: 6,
                                        xdm_s: n.secret
                                    }),
                                    name: z + n.channel + "_provider"
                                }), E = I(n))
                            };
                        w.stack.FlashTransport[e] && w.stack.FlashTransport[e].init ? i() : w.stack.FlashTransport[e] ? w.stack.FlashTransport[e].queue.push(i) : (w.stack.FlashTransport[e] = {
                            queue: [i]
                        }, a(e))
                    },
                    init: function() {
                        O(s.onDOMReady, s)
                    }
                }
            }, w.stack.PostMessageTransport = function(e) {
                function r(n) {
                    if (n.origin) return T(n.origin);
                    if (n.uri) return T(n.uri);
                    if (n.domain) return t.protocol + "//" + n.domain;
                    throw "Unable to retrieve the origin of the event"
                }

                function i(n) {
                    if ("string" == typeof n.data) {
                        var t = r(n);
                        t == l && n.data.substring(0, e.channel.length + 1) == e.channel + " " && s.up.incoming(n.data.substring(e.channel.length + 1), t)
                    }
                }

                function a(t) {
                    t.data == e.channel + "-ready" && (_ = "postMessage" in E.contentWindow ? E.contentWindow : E.contentWindow.document, v(n, "message", a), U(n, "message", i), o(function() {
                        s.up.callback(!0)
                    }, 0))
                }
                var s, E, _, l;
                return s = {
                    outgoing: function(n, t, o) {
                        _.postMessage(e.channel + " " + n, t || l), o && o()
                    },
                    destroy: function() {
                        v(n, "message", a), v(n, "message", i), E && (_ = null, E.parentNode.removeChild(E), E = null)
                    },
                    onDOMReady: function() {
                        l = T(e.remote), e.isHost ? (U(n, "message", a), m(e.props, {
                            src: A(e.remote, {
                                xdm_e: T(t.href),
                                xdm_c: e.channel,
                                xdm_p: 1
                            }),
                            name: z + e.channel + "_provider"
                        }), E = I(e)) : (U(n, "message", i), _ = "postMessage" in n.parent ? n.parent : n.parent.document, _.postMessage(e.channel + "-ready", l), o(function() {
                            s.up.callback(!0)
                        }, 0))
                    },
                    init: function() {
                        O(s.onDOMReady, s)
                    }
                }
            }, w.stack.FrameElementTransport = function(r) {
                var i, a, s, E;
                return i = {
                    outgoing: function(n, e, t) {
                        s.call(this, n), t && t()
                    },
                    destroy: function() {
                        a && (a.parentNode.removeChild(a), a = null)
                    },
                    onDOMReady: function() {
                        E = T(r.remote), r.isHost ? (m(r.props, {
                            src: A(r.remote, {
                                xdm_e: T(t.href),
                                xdm_c: r.channel,
                                xdm_p: 5
                            }),
                            name: z + r.channel + "_provider"
                        }), a = I(r), a.fn = function(n) {
                            return delete a.fn, s = n, o(function() {
                                    i.up.callback(!0)
                                }, 0),
                                function(n) {
                                    i.up.incoming(n, E)
                                }
                        }) : (e.referrer && T(e.referrer) != K.xdm_e && (n.top.location = K.xdm_e), s = n.frameElement.fn(function(n) {
                            i.up.incoming(n, E)
                        }), i.up.callback(!0))
                    },
                    init: function() {
                        O(i.onDOMReady, i)
                    }
                }
            }, w.stack.NameTransport = function(n) {
                function e(e) {
                    var t = n.remoteHelper + (s ? "#_3" : "#_2") + n.channel;
                    E.contentWindow.sendMessage(e, t)
                }

                function t() {
                    s ? 2 !== ++l && s || a.up.callback(!0) : (e("ready"), a.up.callback(!0))
                }

                function r(n) {
                    a.up.incoming(n, R)
                }

                function i() {
                    u && o(function() {
                        u(!0)
                    }, 0)
                }
                var a, s, E, _, l, u, R, d;
                return a = {
                    outgoing: function(n, t, o) {
                        u = o, e(n)
                    },
                    destroy: function() {
                        E.parentNode.removeChild(E), E = null, s && (_.parentNode.removeChild(_), _ = null)
                    },
                    onDOMReady: function() {
                        s = n.isHost, l = 0, R = T(n.remote), n.local = c(n.local), s ? (w.Fn.set(n.channel, function(e) {
                            s && "ready" === e && (w.Fn.set(n.channel, r), t())
                        }), d = A(n.remote, {
                            xdm_e: n.local,
                            xdm_c: n.channel,
                            xdm_p: 2
                        }), m(n.props, {
                            src: d + "#" + n.channel,
                            name: z + n.channel + "_provider"
                        }), _ = I(n)) : (n.remoteHelper = n.remote, w.Fn.set(n.channel, r));
                        var e = function() {
                            var r = E || this;
                            v(r, "load", e), w.Fn.set(n.channel + "_load", i),
                                function a() {
                                    "function" == typeof r.contentWindow.sendMessage ? t() : o(a, 50)
                                }()
                        };
                        E = I({
                            props: {
                                src: n.local + "#_4" + n.channel
                            },
                            onLoad: e
                        })
                    },
                    init: function() {
                        O(a.onDOMReady, a)
                    }
                }
            }, w.stack.HashTransport = function(e) {
                function t(n) {
                    if (N) {
                        var t = e.remote + "#" + R++ + "_" + n;
                        (E || !c ? N.contentWindow : N).location = t
                    }
                }

                function r(n) {
                    u = n, s.up.incoming(u.substring(u.indexOf("_") + 1), A)
                }

                function i() {
                    if (d) {
                        var n = d.location.href,
                            e = "",
                            t = n.indexOf("#"); - 1 != t && (e = n.substring(t)), e && e != u && r(e)
                    }
                }

                function a() {
                    _ = setInterval(i, l)
                }
                var s, E, _, l, u, R, d, N, c, A;
                return s = {
                    outgoing: function(n, e) {
                        t(n)
                    },
                    destroy: function() {
                        n.clearInterval(_), (E || !c) && N.parentNode.removeChild(N), N = null
                    },
                    onDOMReady: function() {
                        if (E = e.isHost, l = e.interval, u = "#" + e.channel, R = 0, c = e.useParent, A = T(e.remote), E) {
                            if (m(e.props, {
                                    src: e.remote,
                                    name: z + e.channel + "_provider"
                                }), c) e.onLoad = function() {
                                d = n, a(), s.up.callback(!0)
                            };
                            else {
                                var t = 0,
                                    r = e.delay / 50;
                                ! function i() {
                                    if (++t > r) throw new Error("Unable to reference listenerwindow");
                                    try {
                                        d = N.contentWindow.frames[z + e.channel + "_consumer"]
                                    } catch (n) {}
                                    d ? (a(), s.up.callback(!0)) : o(i, 50)
                                }()
                            }
                            N = I(e)
                        } else d = n, a(), c ? (N = parent, s.up.callback(!0)) : (m(e, {
                            props: {
                                src: e.remote + "#" + e.channel + new Date,
                                name: z + e.channel + "_consumer"
                            },
                            onLoad: function() {
                                s.up.callback(!0)
                            }
                        }), N = I(e))
                    },
                    init: function() {
                        O(s.onDOMReady, s)
                    }
                }
            }, w.stack.ReliableBehavior = function(n) {
                var e, t, o = 0,
                    r = 0,
                    i = "";
                return e = {
                    incoming: function(n, a) {
                        var s = n.indexOf("_"),
                            E = n.substring(0, s).split(",");
                        n = n.substring(s + 1), E[0] == o && (i = "", t && t(!0)), n.length > 0 && (e.down.outgoing(E[1] + "," + o + "_" + i, a), r != E[1] && (r = E[1], e.up.incoming(n, a)))
                    },
                    outgoing: function(n, a, s) {
                        i = n, t = s, e.down.outgoing(r + "," + ++o + "_" + n, a)
                    }
                }
            }, w.stack.QueueBehavior = function(n) {
                function e() {
                    if (n.remove && 0 === s.length) return void g(t);
                    if (!E && 0 !== s.length && !a) {
                        E = !0;
                        var r = s.shift();
                        t.down.outgoing(r.data, r.origin, function(n) {
                            E = !1, r.callback && o(function() {
                                r.callback(n)
                            }, 0), e()
                        })
                    }
                }
                var t, a, s = [],
                    E = !0,
                    _ = "",
                    l = 0,
                    O = !1,
                    u = !1;
                return t = {
                    init: function() {
                        S(n) && (n = {}), n.maxLength && (l = n.maxLength, u = !0), n.lazy ? O = !0 : t.down.init()
                    },
                    callback: function(n) {
                        E = !1;
                        var o = t.up;
                        e(), o.callback(n)
                    },
                    incoming: function(e, o) {
                        if (u) {
                            var i = e.indexOf("_"),
                                a = parseInt(e.substring(0, i), 10);
                            _ += e.substring(i + 1), 0 === a && (n.encode && (_ = r(_)), t.up.incoming(_, o), _ = "")
                        } else t.up.incoming(e, o)
                    },
                    outgoing: function(o, r, a) {
                        n.encode && (o = i(o));
                        var E, _ = [];
                        if (u) {
                            for (; 0 !== o.length;) E = o.substring(0, l), o = o.substring(E.length), _.push(E);
                            for (; E = _.shift();) s.push({
                                data: _.length + "_" + E,
                                origin: r,
                                callback: 0 === _.length ? a : null
                            })
                        } else s.push({
                            data: o,
                            origin: r,
                            callback: a
                        });
                        O ? t.down.init() : e()
                    },
                    destroy: function() {
                        a = !0, t.down.destroy()
                    }
                }
            }, w.stack.VerifyBehavior = function(n) {
                function e() {
                    o = Math.random().toString(16).substring(2), t.down.outgoing(o)
                }
                var t, o, r;
                return t = {
                    incoming: function(i, a) {
                        var s = i.indexOf("_"); - 1 === s ? i === o ? t.up.callback(!0) : r || (r = i, n.initiate || e(), t.down.outgoing(i)) : i.substring(0, s) === r && t.up.incoming(i.substring(s + 1), a)
                    },
                    outgoing: function(n, e, r) {
                        t.down.outgoing(o + "_" + n, e, r)
                    },
                    callback: function(t) {
                        n.initiate && e()
                    }
                }
            }, w.stack.RpcBehavior = function(n, e) {
                function t(n) {
                    n.jsonrpc = "2.0", i.down.outgoing(a.stringify(n))
                }

                function o(n, e) {
                    var o = Array.prototype.slice;
                    return function() {
                        var r, i = arguments.length,
                            a = {
                                method: e
                            };
                        i > 0 && "function" == typeof arguments[i - 1] ? (i > 1 && "function" == typeof arguments[i - 2] ? (r = {
                            success: arguments[i - 2],
                            error: arguments[i - 1]
                        }, a.params = o.call(arguments, 0, i - 2)) : (r = {
                            success: arguments[i - 1]
                        }, a.params = o.call(arguments, 0, i - 1)), _["" + ++s] = r, a.id = s) : a.params = o.call(arguments, 0), n.namedParams && 1 === a.params.length && (a.params = a.params[0]), t(a)
                    }
                }

                function r(n, e, o, r) {
                    if (!o) return void(e && t({
                        id: e,
                        error: {
                            code: -32601,
                            message: "Procedure not found."
                        }
                    }));
                    var i, a;
                    e ? (i = function(n) {
                        i = y, t({
                            id: e,
                            result: n
                        })
                    }, a = function(n, o) {
                        a = y;
                        var r = {
                            id: e,
                            error: {
                                code: -32099,
                                message: n
                            }
                        };
                        o && (r.error.data = o), t(r)
                    }) : i = a = y, E(r) || (r = [r]);
                    try {
                        var s = o.method.apply(o.scope, r.concat([i, a]));
                        S(s) || i(s)
                    } catch (_) {
                        a(_.message)
                    }
                }
                var i, a = e.serializer || q(),
                    s = 0,
                    _ = {};
                return i = {
                    incoming: function(n, o) {
                        var i = a.parse(n);
                        if (i.method) e.handle ? e.handle(i, t) : r(i.method, i.id, e.local[i.method], i.params);
                        else {
                            var s = _[i.id];
                            i.error ? s.error && s.error(i.error) : s.success && s.success(i.result), delete _[i.id]
                        }
                    },
                    init: function() {
                        if (e.remote)
                            for (var t in e.remote) e.remote.hasOwnProperty(t) && (n[t] = o(e.remote[t], t));
                        i.down.init()
                    },
                    destroy: function() {
                        for (var t in e.remote) e.remote.hasOwnProperty(t) && n.hasOwnProperty(t) && delete n[t];
                        i.down.destroy()
                    }
                }
            }, b.easyXDM = w
    }(window, document, location, window.setTimeout, decodeURIComponent, encodeURIComponent)
}, function(n, e, t) {
    var o;
    (function(n, r) {
        (function() {
            function i(n, e, t) {
                t = (t || 0) - 1;
                for (var o = n ? n.length : 0; ++t < o;)
                    if (n[t] === e) return t;
                return -1
            }

            function a(n, e) {
                var t = typeof e;
                if (n = n.l, "boolean" == t || null == e) return n[e] ? 0 : -1;
                "number" != t && "string" != t && (t = "object");
                var o = "number" == t ? e : I + e;
                return n = (n = n[t]) && n[o], "object" == t ? n && -1 < i(n, e) ? 0 : -1 : n ? 0 : -1
            }

            function s(n) {
                var e = this.l,
                    t = typeof n;
                if ("boolean" == t || null == n) e[n] = !0;
                else {
                    "number" != t && "string" != t && (t = "object");
                    var o = "number" == t ? n : I + n,
                        e = e[t] || (e[t] = {});
                    "object" == t ? (e[o] || (e[o] = [])).push(n) : e[o] = !0
                }
            }

            function E(n) {
                return n.charCodeAt(0)
            }

            function _(n, e) {
                for (var t = n.m, o = e.m, r = -1, i = t.length; ++r < i;) {
                    var a = t[r],
                        s = o[r];
                    if (a !== s) {
                        if (a > s || "undefined" == typeof a) return 1;
                        if (s > a || "undefined" == typeof s) return -1
                    }
                }
                return n.n - e.n
            }

            function l(n) {
                var e = -1,
                    t = n.length,
                    o = n[0],
                    r = n[t / 2 | 0],
                    i = n[t - 1];
                if (o && "object" == typeof o && r && "object" == typeof r && i && "object" == typeof i) return !1;
                for (o = R(), o["false"] = o["null"] = o["true"] = o.undefined = !1, r = R(), r.k = n, r.l = o, r.push = s; ++e < t;) r.push(n[e]);
                return r
            }

            function O(n) {
                return "\\" + Q[n]
            }

            function u() {
                return S.pop() || []
            }

            function R() {
                return m.pop() || {
                    k: null,
                    l: null,
                    m: null,
                    "false": !1,
                    n: 0,
                    "null": !1,
                    number: null,
                    object: null,
                    push: null,
                    string: null,
                    "true": !1,
                    undefined: !1,
                    o: null
                }
            }

            function d(n) {
                n.length = 0, S.length < D && S.push(n)
            }

            function N(n) {
                var e = n.l;
                e && N(e), n.k = n.l = n.m = n.object = n.number = n.string = n.o = null, m.length < D && m.push(n)
            }

            function T(n, e, t) {
                e || (e = 0), "undefined" == typeof t && (t = n ? n.length : 0);
                var o = -1;
                t = t - e || 0;
                for (var r = Array(0 > t ? 0 : t); ++o < t;) r[o] = n[e + o];
                return r
            }

            function c(n) {
                function e(n, e, t) {
                    if (!n || !Z[typeof n]) return n;
                    e = e && "undefined" == typeof t ? e : nn(e, t, 3);
                    for (var o = -1, r = Z[typeof n] && Fe(n), i = r ? r.length : 0; ++o < i && (t = r[o], !1 !== e(n[t], t, n)););
                    return n
                }

                function t(n, e, t) {
                    var o;
                    if (!n || !Z[typeof n]) return n;
                    e = e && "undefined" == typeof t ? e : nn(e, t, 3);
                    for (o in n)
                        if (!1 === e(n[o], o, n)) break;
                    return n
                }

                function o(n, e, t) {
                    var o, r = n,
                        i = r;
                    if (!r) return i;
                    for (var a = arguments, s = 0, E = "number" == typeof t ? 2 : a.length; ++s < E;)
                        if ((r = a[s]) && Z[typeof r])
                            for (var _ = -1, l = Z[typeof r] && Fe(r), O = l ? l.length : 0; ++_ < O;) o = l[_], "undefined" == typeof i[o] && (i[o] = r[o]);
                    return i
                }

                function r(n, e, t) {
                    var o, r = n,
                        i = r;
                    if (!r) return i;
                    var a = arguments,
                        s = 0,
                        E = "number" == typeof t ? 2 : a.length;
                    if (E > 3 && "function" == typeof a[E - 2]) var _ = nn(a[--E - 1], a[E--], 2);
                    else E > 2 && "function" == typeof a[E - 1] && (_ = a[--E]);
                    for (; ++s < E;)
                        if ((r = a[s]) && Z[typeof r])
                            for (var l = -1, O = Z[typeof r] && Fe(r), u = O ? O.length : 0; ++l < u;) o = O[l], i[o] = _ ? _(i[o], r[o]) : r[o];
                    return i
                }

                function s(n) {
                    var e, t = [];
                    if (!n || !Z[typeof n]) return t;
                    for (e in n) Ae.call(n, e) && t.push(e);
                    return t
                }

                function S(n) {
                    return n && "object" == typeof n && !Be(n) && Ae.call(n, "__wrapped__") ? n : new m(n)
                }

                function m(n, e) {
                    this.__chain__ = !!e, this.__wrapped__ = n
                }

                function D(n) {
                    function e() {
                        if (o) {
                            var n = T(o);
                            Se.apply(n, arguments)
                        }
                        if (this instanceof e) {
                            var i = X(t.prototype),
                                n = t.apply(i, n || arguments);
                            return In(n) ? n : i
                        }
                        return t.apply(r, n || arguments)
                    }
                    var t = n[0],
                        o = n[2],
                        r = n[4];
                    return Ve(e, n), e
                }

                function Q(n, t, o, i, a) {
                    if (o) {
                        var s = o(n);
                        if ("undefined" != typeof s) return s
                    }
                    if (!In(n)) return n;
                    var E = Oe.call(n);
                    if (!K[E]) return n;
                    var _ = Pe[E];
                    switch (E) {
                        case H:
                        case z:
                            return new _(+n);
                        case x:
                        case j:
                            return new _(n);
                        case W:
                            return s = _(n.source, U.exec(n)), s.lastIndex = n.lastIndex, s
                    }
                    if (E = Be(n), t) {
                        var l = !i;
                        i || (i = u()), a || (a = u());
                        for (var O = i.length; O--;)
                            if (i[O] == n) return a[O];
                        s = E ? _(n.length) : {}
                    } else s = E ? T(n) : r({}, n);
                    return E && (Ae.call(n, "index") && (s.index = n.index), Ae.call(n, "input") && (s.input = n.input)), t ? (i.push(n), a.push(s), (E ? Un : e)(n, function(n, e) {
                        s[e] = Q(n, t, o, i, a)
                    }), l && (d(i), d(a)), s) : s
                }

                function X(n) {
                    return In(n) ? De(n) : {}
                }

                function nn(n, e, t) {
                    if ("function" != typeof n) return Kn;
                    if ("undefined" == typeof e || !("prototype" in n)) return n;
                    var o = n.__bindData__;
                    if ("undefined" == typeof o && (ye.funcNames && (o = !n.name), o = o || !ye.funcDecomp, !o)) {
                        var r = Te.call(n);
                        ye.funcNames || (o = !v.test(r)), o || (o = V.test(r), Ve(n, o))
                    }
                    if (!1 === o || !0 !== o && 1 & o[1]) return n;
                    switch (t) {
                        case 1:
                            return function(t) {
                                return n.call(e, t)
                            };
                        case 2:
                            return function(t, o) {
                                return n.call(e, t, o)
                            };
                        case 3:
                            return function(t, o, r) {
                                return n.call(e, t, o, r)
                            };
                        case 4:
                            return function(t, o, r, i) {
                                return n.call(e, t, o, r, i)
                            }
                    }
                    return Wn(n, e)
                }

                function en(n) {
                    function e() {
                        var n = E ? a : this;
                        if (r) {
                            var R = T(r);
                            Se.apply(R, arguments)
                        }
                        return (i || l) && (R || (R = T(arguments)), i && Se.apply(R, i), l && R.length < s) ? (o |= 16, en([t, O ? o : -4 & o, R, null, a, s])) : (R || (R = arguments), _ && (t = n[u]), this instanceof e ? (n = X(t.prototype), R = t.apply(n, R), In(R) ? R : n) : t.apply(n, R))
                    }
                    var t = n[0],
                        o = n[1],
                        r = n[2],
                        i = n[3],
                        a = n[4],
                        s = n[5],
                        E = 1 & o,
                        _ = 2 & o,
                        l = 4 & o,
                        O = 8 & o,
                        u = t;
                    return Ve(e, n), e
                }

                function on(n, e) {
                    var t = -1,
                        o = Rn(),
                        r = n ? n.length : 0,
                        s = r >= h && o === i,
                        E = [];
                    if (s) {
                        var _ = l(e);
                        _ ? (o = a, e = _) : s = !1
                    }
                    for (; ++t < r;) _ = n[t], 0 > o(e, _) && E.push(_);
                    return s && N(e), E
                }

                function rn(n, e, t, o) {
                    o = (o || 0) - 1;
                    for (var r = n ? n.length : 0, i = []; ++o < r;) {
                        var a = n[o];
                        if (a && "object" == typeof a && "number" == typeof a.length && (Be(a) || cn(a))) {
                            e || (a = rn(a, e, t));
                            var s = -1,
                                E = a.length,
                                _ = i.length;
                            for (i.length += E; ++s < E;) i[_++] = a[s]
                        } else t || i.push(a)
                    }
                    return i
                }

                function an(n, e, o, r, i, a) {
                    if (o) {
                        var s = o(n, e);
                        if ("undefined" != typeof s) return !!s
                    }
                    if (n === e) return 0 !== n || 1 / n == 1 / e;
                    if (n === n && !(n && Z[typeof n] || e && Z[typeof e])) return !1;
                    if (null == n || null == e) return n === e;
                    var E = Oe.call(n),
                        _ = Oe.call(e);
                    if (E == k && (E = Y), _ == k && (_ = Y), E != _) return !1;
                    switch (E) {
                        case H:
                        case z:
                            return +n == +e;
                        case x:
                            return n != +n ? e != +e : 0 == n ? 1 / n == 1 / e : n == +e;
                        case W:
                        case j:
                            return n == ae(e)
                    }
                    if (_ = E == w, !_) {
                        var l = Ae.call(n, "__wrapped__"),
                            O = Ae.call(e, "__wrapped__");
                        if (l || O) return an(l ? n.__wrapped__ : n, O ? e.__wrapped__ : e, o, r, i, a);
                        if (E != Y) return !1;
                        if (E = n.constructor, l = e.constructor, E != l && !(pn(E) && E instanceof E && pn(l) && l instanceof l) && "constructor" in n && "constructor" in e) return !1
                    }
                    for (E = !i, i || (i = u()), a || (a = u()), l = i.length; l--;)
                        if (i[l] == n) return a[l] == e;
                    var R = 0,
                        s = !0;
                    if (i.push(n), a.push(e), _) {
                        if (l = n.length, R = e.length, (s = R == l) || r)
                            for (; R--;)
                                if (_ = l, O = e[R], r)
                                    for (; _-- && !(s = an(n[_], O, o, r, i, a)););
                                else if (!(s = an(n[R], O, o, r, i, a))) break
                    } else t(e, function(e, t, E) {
                        return Ae.call(E, t) ? (R++, s = Ae.call(n, t) && an(n[t], e, o, r, i, a)) : void 0
                    }), s && !r && t(n, function(n, e, t) {
                        return Ae.call(t, e) ? s = -1 < --R : void 0
                    });
                    return i.pop(), a.pop(), E && (d(i), d(a)), s
                }

                function sn(n, t, o, r, i) {
                    (Be(t) ? Un : e)(t, function(e, t) {
                        var a, s, E = e,
                            _ = n[t];
                        if (e && ((s = Be(e)) || Ge(e))) {
                            for (E = r.length; E--;)
                                if (a = r[E] == e) {
                                    _ = i[E];
                                    break
                                }
                            if (!a) {
                                var l;
                                o && (E = o(_, e), l = "undefined" != typeof E) && (_ = E), l || (_ = s ? Be(_) ? _ : [] : Ge(_) ? _ : {}), r.push(e), i.push(_), l || sn(_, e, o, r, i)
                            }
                        } else o && (E = o(_, e), "undefined" == typeof E && (E = e)), "undefined" != typeof E && (_ = E);
                        n[t] = _
                    })
                }

                function En(n, e) {
                    return n + Ne(be() * (e - n + 1))
                }

                function _n(n, e, t) {
                    var o = -1,
                        r = Rn(),
                        s = n ? n.length : 0,
                        E = [],
                        _ = !e && s >= h && r === i,
                        O = t || _ ? u() : E;
                    for (_ && (O = l(O), r = a); ++o < s;) {
                        var R = n[o],
                            T = t ? t(R, o, n) : R;
                        (e ? !o || O[O.length - 1] !== T : 0 > r(O, T)) && ((t || _) && O.push(T), E.push(R))
                    }
                    return _ ? (d(O.k), N(O)) : t && d(O), E
                }

                function ln(n) {
                    return function(t, o, r) {
                        var i = {};
                        o = S.createCallback(o, r, 3), r = -1;
                        var a = t ? t.length : 0;
                        if ("number" == typeof a)
                            for (; ++r < a;) {
                                var s = t[r];
                                n(i, s, o(s, r, t), t)
                            } else e(t, function(e, t, r) {
                                n(i, e, o(e, t, r), r)
                            });
                        return i
                    }
                }

                function On(n, e, t, o, r, i) {
                    var a = 1 & e,
                        s = 4 & e,
                        E = 16 & e,
                        _ = 32 & e;
                    if (!(2 & e || pn(n))) throw new se;
                    E && !t.length && (e &= -17, E = t = !1), _ && !o.length && (e &= -33, _ = o = !1);
                    var l = n && n.__bindData__;
                    return l && !0 !== l ? (l = T(l), l[2] && (l[2] = T(l[2])), l[3] && (l[3] = T(l[3])), !a || 1 & l[1] || (l[4] = r), !a && 1 & l[1] && (e |= 8), !s || 4 & l[1] || (l[5] = i), E && Se.apply(l[2] || (l[2] = []), t), _ && Ie.apply(l[3] || (l[3] = []), o), l[1] |= e, On.apply(null, l)) : (1 == e || 17 === e ? D : en)([n, e, t, o, r, i])
                }

                function un(n) {
                    return ke[n]
                }

                function Rn() {
                    var n = (n = S.indexOf) === wn ? i : n;
                    return n
                }

                function dn(n) {
                    return "function" == typeof n && ue.test(n)
                }

                function Nn(n) {
                    var e, o;
                    return n && Oe.call(n) == Y && (e = n.constructor, !pn(e) || e instanceof e) ? (t(n, function(n, e) {
                        o = e
                    }), "undefined" == typeof o || Ae.call(n, o)) : !1
                }

                function Tn(n) {
                    return we[n]
                }

                function cn(n) {
                    return n && "object" == typeof n && "number" == typeof n.length && Oe.call(n) == k || !1
                }

                function An(n, e, t) {
                    var o = Fe(n),
                        r = o.length;
                    for (e = nn(e, t, 3); r-- && (t = o[r], !1 !== e(n[t], t, n)););
                    return n
                }

                function Sn(n) {
                    var e = [];
                    return t(n, function(n, t) {
                        pn(n) && e.push(t)
                    }), e.sort()
                }

                function mn(n) {
                    for (var e = -1, t = Fe(n), o = t.length, r = {}; ++e < o;) {
                        var i = t[e];
                        r[n[i]] = i
                    }
                    return r
                }

                function pn(n) {
                    return "function" == typeof n
                }

                function In(n) {
                    return !(!n || !Z[typeof n])
                }

                function hn(n) {
                    return "number" == typeof n || n && "object" == typeof n && Oe.call(n) == x || !1
                }

                function Dn(n) {
                    return "string" == typeof n || n && "object" == typeof n && Oe.call(n) == j || !1
                }

                function Ln(n) {
                    for (var e = -1, t = Fe(n), o = t.length, r = $n(o); ++e < o;) r[e] = n[t[e]];
                    return r
                }

                function gn(n, t, o) {
                    var r = -1,
                        i = Rn(),
                        a = n ? n.length : 0,
                        s = !1;
                    return o = (0 > o ? fe(0, a + o) : o) || 0, Be(n) ? s = -1 < i(n, t, o) : "number" == typeof a ? s = -1 < (Dn(n) ? n.indexOf(t, o) : i(n, t, o)) : e(n, function(n) {
                        return ++r < o ? void 0 : !(s = n === t)
                    }), s
                }

                function Mn(n, t, o) {
                    var r = !0;
                    t = S.createCallback(t, o, 3), o = -1;
                    var i = n ? n.length : 0;
                    if ("number" == typeof i)
                        for (; ++o < i && (r = !!t(n[o], o, n)););
                    else e(n, function(n, e, o) {
                        return r = !!t(n, e, o)
                    });
                    return r
                }

                function Cn(n, t, o) {
                    var r = [];
                    t = S.createCallback(t, o, 3), o = -1;
                    var i = n ? n.length : 0;
                    if ("number" == typeof i)
                        for (; ++o < i;) {
                            var a = n[o];
                            t(a, o, n) && r.push(a)
                        } else e(n, function(n, e, o) {
                            t(n, e, o) && r.push(n)
                        });
                    return r
                }

                function fn(n, t, o) {
                    t = S.createCallback(t, o, 3), o = -1;
                    var r = n ? n.length : 0;
                    if ("number" != typeof r) {
                        var i;
                        return e(n, function(n, e, o) {
                            return t(n, e, o) ? (i = n, !1) : void 0
                        }), i
                    }
                    for (; ++o < r;) {
                        var a = n[o];
                        if (t(a, o, n)) return a
                    }
                }

                function Un(n, t, o) {
                    var r = -1,
                        i = n ? n.length : 0;
                    if (t = t && "undefined" == typeof o ? t : nn(t, o, 3), "number" == typeof i)
                        for (; ++r < i && !1 !== t(n[r], r, n););
                    else e(n, t);
                    return n
                }

                function vn(n, t, o) {
                    var r = n ? n.length : 0;
                    if (t = t && "undefined" == typeof o ? t : nn(t, o, 3), "number" == typeof r)
                        for (; r-- && !1 !== t(n[r], r, n););
                    else {
                        var i = Fe(n),
                            r = i.length;
                        e(n, function(n, e, o) {
                            return e = i ? i[--r] : --r, t(o[e], e, o)
                        })
                    }
                    return n
                }

                function bn(n, t, o) {
                    var r = -1,
                        i = n ? n.length : 0;
                    if (t = S.createCallback(t, o, 3), "number" == typeof i)
                        for (var a = $n(i); ++r < i;) a[r] = t(n[r], r, n);
                    else a = [], e(n, function(n, e, o) {
                        a[++r] = t(n, e, o)
                    });
                    return a
                }

                function Pn(n, e, t) {
                    var o = -1 / 0,
                        r = o;
                    if ("function" != typeof e && t && t[e] === n && (e = null), null == e && Be(n)) {
                        t = -1;
                        for (var i = n.length; ++t < i;) {
                            var a = n[t];
                            a > r && (r = a)
                        }
                    } else e = null == e && Dn(n) ? E : S.createCallback(e, t, 3), Un(n, function(n, t, i) {
                        t = e(n, t, i), t > o && (o = t, r = n)
                    });
                    return r
                }

                function yn(n, t, o, r) {
                    if (!n) return o;
                    var i = 3 > arguments.length;
                    t = S.createCallback(t, r, 4);
                    var a = -1,
                        s = n.length;
                    if ("number" == typeof s)
                        for (i && (o = n[++a]); ++a < s;) o = t(o, n[a], a, n);
                    else e(n, function(n, e, r) {
                        o = i ? (i = !1, n) : t(o, n, e, r)
                    });
                    return o
                }

                function Vn(n, e, t, o) {
                    var r = 3 > arguments.length;
                    return e = S.createCallback(e, o, 4), vn(n, function(n, o, i) {
                        t = r ? (r = !1, n) : e(t, n, o, i)
                    }), t
                }

                function Bn(n) {
                    var e = -1,
                        t = n ? n.length : 0,
                        o = $n("number" == typeof t ? t : 0);
                    return Un(n, function(n) {
                        var t = En(0, ++e);
                        o[e] = o[t], o[t] = n
                    }), o
                }

                function Fn(n, t, o) {
                    var r;
                    t = S.createCallback(t, o, 3), o = -1;
                    var i = n ? n.length : 0;
                    if ("number" == typeof i)
                        for (; ++o < i && !(r = t(n[o], o, n)););
                    else e(n, function(n, e, o) {
                        return !(r = t(n, e, o))
                    });
                    return !!r
                }

                function kn(n, e, t) {
                    var o = 0,
                        r = n ? n.length : 0;
                    if ("number" != typeof e && null != e) {
                        var i = -1;
                        for (e = S.createCallback(e, t, 3); ++i < r && e(n[i], i, n);) o++
                    } else if (o = e, null == o || t) return n ? n[0] : A;
                    return T(n, 0, Ue(fe(0, o), r))
                }

                function wn(n, e, t) {
                    if ("number" == typeof t) {
                        var o = n ? n.length : 0;
                        t = 0 > t ? fe(0, o + t) : t || 0
                    } else if (t) return t = zn(n, e), n[t] === e ? t : -1;
                    return i(n, e, t)
                }

                function Hn(n, e, t) {
                    if ("number" != typeof e && null != e) {
                        var o = 0,
                            r = -1,
                            i = n ? n.length : 0;
                        for (e = S.createCallback(e, t, 3); ++r < i && e(n[r], r, n);) o++
                    } else o = null == e || t ? 1 : fe(0, e);
                    return T(n, o)
                }

                function zn(n, e, t, o) {
                    var r = 0,
                        i = n ? n.length : r;
                    for (t = t ? S.createCallback(t, o, 1) : Kn, e = t(e); i > r;) o = r + i >>> 1, t(n[o]) < e ? r = o + 1 : i = o;
                    return r
                }

                function Gn(n, e, t, o) {
                    return "boolean" != typeof e && null != e && (o = t, t = "function" != typeof e && o && o[e] === n ? null : e, e = !1), null != t && (t = S.createCallback(t, o, 3)), _n(n, e, t)
                }

                function xn() {
                    for (var n = 1 < arguments.length ? arguments : arguments[0], e = -1, t = n ? Pn(je(n, "length")) : 0, o = $n(0 > t ? 0 : t); ++e < t;) o[e] = je(n, e);
                    return o
                }

                function Yn(n, e) {
                    var t = -1,
                        o = n ? n.length : 0,
                        r = {};
                    for (e || !o || Be(n[0]) || (e = []); ++t < o;) {
                        var i = n[t];
                        e ? r[i] = e[t] : i && (r[i[0]] = i[1])
                    }
                    return r
                }

                function Wn(n, e) {
                    return 2 < arguments.length ? On(n, 17, T(arguments, 2), null, e) : On(n, 1, null, null, e)
                }

                function jn(n, e, t) {
                    function o() {
                        l && de(l), a = l = O = A, (d || R !== e) && (u = Ke(), s = n.apply(_, i), l || a || (i = _ = null))
                    }

                    function r() {
                        var t = e - (Ke() - E);
                        t > 0 ? l = me(r, t) : (a && de(a), t = O, a = l = O = A, t && (u = Ke(), s = n.apply(_, i), l || a || (i = _ = null)))
                    }
                    var i, a, s, E, _, l, O, u = 0,
                        R = !1,
                        d = !0;
                    if (!pn(n)) throw new se;
                    if (e = fe(0, e) || 0, !0 === t) var N = !0,
                        d = !1;
                    else In(t) && (N = t.leading, R = "maxWait" in t && (fe(e, t.maxWait) || 0), d = "trailing" in t ? t.trailing : d);
                    return function() {
                        if (i = arguments, E = Ke(), _ = this, O = d && (l || !N), !1 === R) var t = N && !l;
                        else {
                            a || N || (u = E);
                            var T = R - (E - u),
                                c = 0 >= T;
                            c ? (a && (a = de(a)), u = E, s = n.apply(_, i)) : a || (a = me(o, T))
                        }
                        return c && l ? l = de(l) : l || e === R || (l = me(r, e)), t && (c = !0, s = n.apply(_, i)), !c || l || a || (i = _ = null), s
                    }
                }

                function Kn(n) {
                    return n
                }

                function qn(n, e, t) {
                    var o = !0,
                        r = e && Sn(e);
                    e && (t || r.length) || (null == t && (t = e), i = m, e = n, n = S, r = Sn(e)), !1 === t ? o = !1 : In(t) && "chain" in t && (o = t.chain);
                    var i = n,
                        a = pn(i);
                    Un(r, function(t) {
                        var r = n[t] = e[t];
                        a && (i.prototype[t] = function() {
                            var e = this.__chain__,
                                t = this.__wrapped__,
                                a = [t];
                            if (Se.apply(a, arguments), a = r.apply(n, a), o || e) {
                                if (t === a && In(a)) return this;
                                a = new i(a), a.__chain__ = e
                            }
                            return a
                        })
                    })
                }

                function Jn() {}

                function Zn(n) {
                    return function(e) {
                        return e[n]
                    }
                }

                function Qn() {
                    return this.__wrapped__
                }
                n = n ? tn.defaults($.Object(), n, tn.pick($, F)) : $;
                var $n = n.Array,
                    Xn = n.Boolean,
                    ne = n.Date,
                    ee = n.Function,
                    te = n.Math,
                    oe = n.Number,
                    re = n.Object,
                    ie = n.RegExp,
                    ae = n.String,
                    se = n.TypeError,
                    Ee = [],
                    _e = re.prototype,
                    le = n._,
                    Oe = _e.toString,
                    ue = ie("^" + ae(Oe).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
                    Re = te.ceil,
                    de = n.clearTimeout,
                    Ne = te.floor,
                    Te = ee.prototype.toString,
                    ce = dn(ce = re.getPrototypeOf) && ce,
                    Ae = _e.hasOwnProperty,
                    Se = Ee.push,
                    me = n.setTimeout,
                    pe = Ee.splice,
                    Ie = Ee.unshift,
                    he = function() {
                        try {
                            var n = {},
                                e = dn(e = re.defineProperty) && e,
                                t = e(n, n, n) && e
                        } catch (o) {}
                        return t
                    }(),
                    De = dn(De = re.create) && De,
                    Le = dn(Le = $n.isArray) && Le,
                    ge = n.isFinite,
                    Me = n.isNaN,
                    Ce = dn(Ce = re.keys) && Ce,
                    fe = te.max,
                    Ue = te.min,
                    ve = n.parseInt,
                    be = te.random,
                    Pe = {};
                Pe[w] = $n, Pe[H] = Xn, Pe[z] = ne, Pe[G] = ee, Pe[Y] = re, Pe[x] = oe, Pe[W] = ie, Pe[j] = ae, m.prototype = S.prototype;
                var ye = S.support = {};
                ye.funcDecomp = !dn(n.a) && V.test(c), ye.funcNames = "string" == typeof ee.name, S.templateSettings = {
                    escape: /<%-([\s\S]+?)%>/g,
                    evaluate: /<%([\s\S]+?)%>/g,
                    interpolate: b,
                    variable: "",
                    imports: {
                        _: S
                    }
                }, De || (X = function() {
                    function e() {}
                    return function(t) {
                        if (In(t)) {
                            e.prototype = t;
                            var o = new e;
                            e.prototype = null
                        }
                        return o || n.Object()
                    }
                }());
                var Ve = he ? function(n, e) {
                        J.value = e, he(n, "__bindData__", J)
                    } : Jn,
                    Be = Le || function(n) {
                        return n && "object" == typeof n && "number" == typeof n.length && Oe.call(n) == w || !1
                    },
                    Fe = Ce ? function(n) {
                        return In(n) ? Ce(n) : []
                    } : s,
                    ke = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;"
                    },
                    we = mn(ke),
                    He = ie("(" + Fe(we).join("|") + ")", "g"),
                    ze = ie("[" + Fe(ke).join("") + "]", "g"),
                    Ge = ce ? function(n) {
                        if (!n || Oe.call(n) != Y) return !1;
                        var e = n.valueOf,
                            t = dn(e) && (t = ce(e)) && ce(t);
                        return t ? n == t || ce(n) == t : Nn(n)
                    } : Nn,
                    xe = ln(function(n, e, t) {
                        Ae.call(n, t) ? n[t]++ : n[t] = 1
                    }),
                    Ye = ln(function(n, e, t) {
                        (Ae.call(n, t) ? n[t] : n[t] = []).push(e)
                    }),
                    We = ln(function(n, e, t) {
                        n[t] = e
                    }),
                    je = bn,
                    Ke = dn(Ke = ne.now) && Ke || function() {
                        return (new ne).getTime()
                    },
                    qe = 8 == ve(L + "08") ? ve : function(n, e) {
                        return ve(Dn(n) ? n.replace(P, "") : n, e || 0)
                    };
                return S.after = function(n, e) {
                    if (!pn(e)) throw new se;
                    return function() {
                        return 1 > --n ? e.apply(this, arguments) : void 0
                    }
                }, S.assign = r, S.at = function(n) {
                    for (var e = arguments, t = -1, o = rn(e, !0, !1, 1), e = e[2] && e[2][e[1]] === n ? 1 : o.length, r = $n(e); ++t < e;) r[t] = n[o[t]];
                    return r
                }, S.bind = Wn, S.bindAll = function(n) {
                    for (var e = 1 < arguments.length ? rn(arguments, !0, !1, 1) : Sn(n), t = -1, o = e.length; ++t < o;) {
                        var r = e[t];
                        n[r] = On(n[r], 1, null, null, n)
                    }
                    return n
                }, S.bindKey = function(n, e) {
                    return 2 < arguments.length ? On(e, 19, T(arguments, 2), null, n) : On(e, 3, null, null, n)
                }, S.chain = function(n) {
                    return n = new m(n), n.__chain__ = !0, n
                }, S.compact = function(n) {
                    for (var e = -1, t = n ? n.length : 0, o = []; ++e < t;) {
                        var r = n[e];
                        r && o.push(r)
                    }
                    return o
                }, S.compose = function() {
                    for (var n = arguments, e = n.length; e--;)
                        if (!pn(n[e])) throw new se;
                    return function() {
                        for (var e = arguments, t = n.length; t--;) e = [n[t].apply(this, e)];
                        return e[0]
                    }
                }, S.constant = function(n) {
                    return function() {
                        return n
                    }
                }, S.countBy = xe, S.create = function(n, e) {
                    var t = X(n);
                    return e ? r(t, e) : t
                }, S.createCallback = function(n, e, t) {
                    var o = typeof n;
                    if (null == n || "function" == o) return nn(n, e, t);
                    if ("object" != o) return Zn(n);
                    var r = Fe(n),
                        i = r[0],
                        a = n[i];
                    return 1 != r.length || a !== a || In(a) ? function(e) {
                        for (var t = r.length, o = !1; t-- && (o = an(e[r[t]], n[r[t]], null, !0)););
                        return o
                    } : function(n) {
                        return n = n[i], a === n && (0 !== a || 1 / a == 1 / n)
                    }
                }, S.curry = function(n, e) {
                    return e = "number" == typeof e ? e : +e || n.length, On(n, 4, null, null, null, e)
                }, S.debounce = jn, S.defaults = o, S.defer = function(n) {
                    if (!pn(n)) throw new se;
                    var e = T(arguments, 1);
                    return me(function() {
                        n.apply(A, e)
                    }, 1)
                }, S.delay = function(n, e) {
                    if (!pn(n)) throw new se;
                    var t = T(arguments, 2);
                    return me(function() {
                        n.apply(A, t)
                    }, e)
                }, S.difference = function(n) {
                    return on(n, rn(arguments, !0, !0, 1))
                }, S.filter = Cn, S.flatten = function(n, e, t, o) {
                    return "boolean" != typeof e && null != e && (o = t, t = "function" != typeof e && o && o[e] === n ? null : e, e = !1), null != t && (n = bn(n, t, o)), rn(n, e)
                }, S.forEach = Un, S.forEachRight = vn, S.forIn = t, S.forInRight = function(n, e, o) {
                    var r = [];
                    t(n, function(n, e) {
                        r.push(e, n)
                    });
                    var i = r.length;
                    for (e = nn(e, o, 3); i-- && !1 !== e(r[i--], r[i], n););
                    return n
                }, S.forOwn = e, S.forOwnRight = An, S.functions = Sn, S.groupBy = Ye, S.indexBy = We, S.initial = function(n, e, t) {
                    var o = 0,
                        r = n ? n.length : 0;
                    if ("number" != typeof e && null != e) {
                        var i = r;
                        for (e = S.createCallback(e, t, 3); i-- && e(n[i], i, n);) o++
                    } else o = null == e || t ? 1 : e || o;
                    return T(n, 0, Ue(fe(0, r - o), r))
                }, S.intersection = function() {
                    for (var n = [], e = -1, t = arguments.length, o = u(), r = Rn(), s = r === i, E = u(); ++e < t;) {
                        var _ = arguments[e];
                        (Be(_) || cn(_)) && (n.push(_), o.push(s && _.length >= h && l(e ? n[e] : E)))
                    }
                    var s = n[0],
                        O = -1,
                        R = s ? s.length : 0,
                        T = [];
                    n: for (; ++O < R;) {
                        var c = o[0],
                            _ = s[O];
                        if (0 > (c ? a(c, _) : r(E, _))) {
                            for (e = t, (c || E).push(_); --e;)
                                if (c = o[e], 0 > (c ? a(c, _) : r(n[e], _))) continue n;
                            T.push(_)
                        }
                    }
                    for (; t--;)(c = o[t]) && N(c);
                    return d(o), d(E), T
                }, S.invert = mn, S.invoke = function(n, e) {
                    var t = T(arguments, 2),
                        o = -1,
                        r = "function" == typeof e,
                        i = n ? n.length : 0,
                        a = $n("number" == typeof i ? i : 0);
                    return Un(n, function(n) {
                        a[++o] = (r ? e : n[e]).apply(n, t)
                    }), a
                }, S.keys = Fe, S.map = bn, S.mapValues = function(n, t, o) {
                    var r = {};
                    return t = S.createCallback(t, o, 3), e(n, function(n, e, o) {
                        r[e] = t(n, e, o)
                    }), r
                }, S.max = Pn, S.memoize = function(n, e) {
                    function t() {
                        var o = t.cache,
                            r = e ? e.apply(this, arguments) : I + arguments[0];
                        return Ae.call(o, r) ? o[r] : o[r] = n.apply(this, arguments)
                    }
                    if (!pn(n)) throw new se;
                    return t.cache = {}, t
                }, S.merge = function(n) {
                    var e = arguments,
                        t = 2;
                    if (!In(n)) return n;
                    if ("number" != typeof e[2] && (t = e.length), t > 3 && "function" == typeof e[t - 2]) var o = nn(e[--t - 1], e[t--], 2);
                    else t > 2 && "function" == typeof e[t - 1] && (o = e[--t]);
                    for (var e = T(arguments, 1, t), r = -1, i = u(), a = u(); ++r < t;) sn(n, e[r], o, i, a);
                    return d(i), d(a), n
                }, S.min = function(n, e, t) {
                    var o = 1 / 0,
                        r = o;
                    if ("function" != typeof e && t && t[e] === n && (e = null), null == e && Be(n)) {
                        t = -1;
                        for (var i = n.length; ++t < i;) {
                            var a = n[t];
                            r > a && (r = a)
                        }
                    } else e = null == e && Dn(n) ? E : S.createCallback(e, t, 3), Un(n, function(n, t, i) {
                        t = e(n, t, i), o > t && (o = t, r = n)
                    });
                    return r
                }, S.omit = function(n, e, o) {
                    var r = {};
                    if ("function" != typeof e) {
                        var i = [];
                        t(n, function(n, e) {
                            i.push(e)
                        });
                        for (var i = on(i, rn(arguments, !0, !1, 1)), a = -1, s = i.length; ++a < s;) {
                            var E = i[a];
                            r[E] = n[E]
                        }
                    } else e = S.createCallback(e, o, 3), t(n, function(n, t, o) {
                        e(n, t, o) || (r[t] = n)
                    });
                    return r
                }, S.once = function(n) {
                    var e, t;
                    if (!pn(n)) throw new se;
                    return function() {
                        return e ? t : (e = !0, t = n.apply(this, arguments), n = null, t)
                    }
                }, S.pairs = function(n) {
                    for (var e = -1, t = Fe(n), o = t.length, r = $n(o); ++e < o;) {
                        var i = t[e];
                        r[e] = [i, n[i]]
                    }
                    return r
                }, S.partial = function(n) {
                    return On(n, 16, T(arguments, 1))
                }, S.partialRight = function(n) {
                    return On(n, 32, null, T(arguments, 1))
                }, S.pick = function(n, e, o) {
                    var r = {};
                    if ("function" != typeof e)
                        for (var i = -1, a = rn(arguments, !0, !1, 1), s = In(n) ? a.length : 0; ++i < s;) {
                            var E = a[i];
                            E in n && (r[E] = n[E])
                        } else e = S.createCallback(e, o, 3), t(n, function(n, t, o) {
                            e(n, t, o) && (r[t] = n)
                        });
                    return r
                }, S.pluck = je, S.property = Zn, S.pull = function(n) {
                    for (var e = arguments, t = 0, o = e.length, r = n ? n.length : 0; ++t < o;)
                        for (var i = -1, a = e[t]; ++i < r;) n[i] === a && (pe.call(n, i--, 1), r--);
                    return n
                }, S.range = function(n, e, t) {
                    n = +n || 0, t = "number" == typeof t ? t : +t || 1, null == e && (e = n, n = 0);
                    var o = -1;
                    e = fe(0, Re((e - n) / (t || 1)));
                    for (var r = $n(e); ++o < e;) r[o] = n, n += t;
                    return r
                }, S.reject = function(n, e, t) {
                    return e = S.createCallback(e, t, 3), Cn(n, function(n, t, o) {
                        return !e(n, t, o)
                    })
                }, S.remove = function(n, e, t) {
                    var o = -1,
                        r = n ? n.length : 0,
                        i = [];
                    for (e = S.createCallback(e, t, 3); ++o < r;) t = n[o], e(t, o, n) && (i.push(t), pe.call(n, o--, 1), r--);
                    return i
                }, S.rest = Hn, S.shuffle = Bn, S.sortBy = function(n, e, t) {
                    var o = -1,
                        r = Be(e),
                        i = n ? n.length : 0,
                        a = $n("number" == typeof i ? i : 0);
                    for (r || (e = S.createCallback(e, t, 3)), Un(n, function(n, t, i) {
                            var s = a[++o] = R();
                            r ? s.m = bn(e, function(e) {
                                return n[e]
                            }) : (s.m = u())[0] = e(n, t, i), s.n = o, s.o = n
                        }), i = a.length, a.sort(_); i--;) n = a[i], a[i] = n.o, r || d(n.m), N(n);
                    return a
                }, S.tap = function(n, e) {
                    return e(n), n
                }, S.throttle = function(n, e, t) {
                    var o = !0,
                        r = !0;
                    if (!pn(n)) throw new se;
                    return !1 === t ? o = !1 : In(t) && (o = "leading" in t ? t.leading : o, r = "trailing" in t ? t.trailing : r), q.leading = o, q.maxWait = e, q.trailing = r, jn(n, e, q)
                }, S.times = function(n, e, t) {
                    n = -1 < (n = +n) ? n : 0;
                    var o = -1,
                        r = $n(n);
                    for (e = nn(e, t, 1); ++o < n;) r[o] = e(o);
                    return r
                }, S.toArray = function(n) {
                    return n && "number" == typeof n.length ? T(n) : Ln(n)
                }, S.transform = function(n, t, o, r) {
                    var i = Be(n);
                    if (null == o)
                        if (i) o = [];
                        else {
                            var a = n && n.constructor;
                            o = X(a && a.prototype)
                        }
                    return t && (t = S.createCallback(t, r, 4), (i ? Un : e)(n, function(n, e, r) {
                        return t(o, n, e, r)
                    })), o
                }, S.union = function() {
                    return _n(rn(arguments, !0, !0))
                }, S.uniq = Gn, S.values = Ln, S.where = Cn, S.without = function(n) {
                    return on(n, T(arguments, 1))
                }, S.wrap = function(n, e) {
                    return On(e, 16, [n])
                }, S.xor = function() {
                    for (var n = -1, e = arguments.length; ++n < e;) {
                        var t = arguments[n];
                        if (Be(t) || cn(t)) var o = o ? _n(on(o, t).concat(on(t, o))) : t
                    }
                    return o || []
                }, S.zip = xn, S.zipObject = Yn, S.collect = bn, S.drop = Hn, S.each = Un, S.eachRight = vn, S.extend = r, S.methods = Sn, S.object = Yn, S.select = Cn, S.tail = Hn, S.unique = Gn, S.unzip = xn, qn(S), S.clone = function(n, e, t, o) {
                    return "boolean" != typeof e && null != e && (o = t, t = e, e = !1), Q(n, e, "function" == typeof t && nn(t, o, 1))
                }, S.cloneDeep = function(n, e, t) {
                    return Q(n, !0, "function" == typeof e && nn(e, t, 1))
                }, S.contains = gn, S.escape = function(n) {
                    return null == n ? "" : ae(n).replace(ze, un)
                }, S.every = Mn, S.find = fn, S.findIndex = function(n, e, t) {
                    var o = -1,
                        r = n ? n.length : 0;
                    for (e = S.createCallback(e, t, 3); ++o < r;)
                        if (e(n[o], o, n)) return o;
                    return -1
                }, S.findKey = function(n, t, o) {
                    var r;
                    return t = S.createCallback(t, o, 3), e(n, function(n, e, o) {
                        return t(n, e, o) ? (r = e, !1) : void 0
                    }), r
                }, S.findLast = function(n, e, t) {
                    var o;
                    return e = S.createCallback(e, t, 3), vn(n, function(n, t, r) {
                        return e(n, t, r) ? (o = n, !1) : void 0
                    }), o
                }, S.findLastIndex = function(n, e, t) {
                    var o = n ? n.length : 0;
                    for (e = S.createCallback(e, t, 3); o--;)
                        if (e(n[o], o, n)) return o;
                    return -1
                }, S.findLastKey = function(n, e, t) {
                    var o;
                    return e = S.createCallback(e, t, 3), An(n, function(n, t, r) {
                        return e(n, t, r) ? (o = t, !1) : void 0
                    }), o
                }, S.has = function(n, e) {
                    return n ? Ae.call(n, e) : !1
                }, S.identity = Kn, S.indexOf = wn, S.isArguments = cn, S.isArray = Be, S.isBoolean = function(n) {
                    return !0 === n || !1 === n || n && "object" == typeof n && Oe.call(n) == H || !1
                }, S.isDate = function(n) {
                    return n && "object" == typeof n && Oe.call(n) == z || !1
                }, S.isElement = function(n) {
                    return n && 1 === n.nodeType || !1
                }, S.isEmpty = function(n) {
                    var t = !0;
                    if (!n) return t;
                    var o = Oe.call(n),
                        r = n.length;
                    return o == w || o == j || o == k || o == Y && "number" == typeof r && pn(n.splice) ? !r : (e(n, function() {
                        return t = !1
                    }), t)
                }, S.isEqual = function(n, e, t, o) {
                    return an(n, e, "function" == typeof t && nn(t, o, 2))
                }, S.isFinite = function(n) {
                    return ge(n) && !Me(parseFloat(n))
                }, S.isFunction = pn, S.isNaN = function(n) {
                    return hn(n) && n != +n
                }, S.isNull = function(n) {
                    return null === n
                }, S.isNumber = hn, S.isObject = In, S.isPlainObject = Ge, S.isRegExp = function(n) {
                    return n && "object" == typeof n && Oe.call(n) == W || !1
                }, S.isString = Dn, S.isUndefined = function(n) {
                    return "undefined" == typeof n
                }, S.lastIndexOf = function(n, e, t) {
                    var o = n ? n.length : 0;
                    for ("number" == typeof t && (o = (0 > t ? fe(0, o + t) : Ue(t, o - 1)) + 1); o--;)
                        if (n[o] === e) return o;
                    return -1
                }, S.mixin = qn, S.noConflict = function() {
                    return n._ = le, this
                }, S.noop = Jn, S.now = Ke, S.parseInt = qe, S.random = function(n, e, t) {
                    var o = null == n,
                        r = null == e;
                    return null == t && ("boolean" == typeof n && r ? (t = n, n = 1) : r || "boolean" != typeof e || (t = e, r = !0)), o && r && (e = 1), n = +n || 0, r ? (e = n, n = 0) : e = +e || 0, t || n % 1 || e % 1 ? (t = be(), Ue(n + t * (e - n + parseFloat("1e-" + ((t + "").length - 1))), e)) : En(n, e)
                }, S.reduce = yn, S.reduceRight = Vn, S.result = function(n, e) {
                    if (n) {
                        var t = n[e];
                        return pn(t) ? n[e]() : t
                    }
                }, S.runInContext = c, S.size = function(n) {
                    var e = n ? n.length : 0;
                    return "number" == typeof e ? e : Fe(n).length
                }, S.some = Fn, S.sortedIndex = zn, S.template = function(n, e, t) {
                    var r = S.templateSettings;
                    n = ae(n || ""), t = o({}, t, r);
                    var i, a = o({}, t.imports, r.imports),
                        r = Fe(a),
                        a = Ln(a),
                        s = 0,
                        E = t.interpolate || y,
                        _ = "__p+='",
                        E = ie((t.escape || y).source + "|" + E.source + "|" + (E === b ? f : y).source + "|" + (t.evaluate || y).source + "|$", "g");
                    n.replace(E, function(e, t, o, r, a, E) {
                        return o || (o = r), _ += n.slice(s, E).replace(B, O), t && (_ += "'+__e(" + t + ")+'"), a && (i = !0, _ += "';" + a + ";\n__p+='"), o && (_ += "'+((__t=(" + o + "))==null?'':__t)+'"), s = E + e.length, e
                    }), _ += "';", E = t = t.variable, E || (t = "obj", _ = "with(" + t + "){" + _ + "}"), _ = (i ? _.replace(g, "") : _).replace(M, "$1").replace(C, "$1;"), _ = "function(" + t + "){" + (E ? "" : t + "||(" + t + "={});") + "var __t,__p='',__e=_.escape" + (i ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + _ + "return __p}";
                    try {
                        var l = ee(r, "return " + _).apply(A, a)
                    } catch (u) {
                        throw u.source = _, u
                    }
                    return e ? l(e) : (l.source = _, l)
                }, S.unescape = function(n) {
                    return null == n ? "" : ae(n).replace(He, Tn)
                }, S.uniqueId = function(n) {
                    var e = ++p;
                    return ae(null == n ? "" : n) + e
                }, S.all = Mn, S.any = Fn, S.detect = fn, S.findWhere = fn, S.foldl = yn, S.foldr = Vn, S.include = gn, S.inject = yn, qn(function() {
                    var n = {};
                    return e(S, function(e, t) {
                        S.prototype[t] || (n[t] = e)
                    }), n
                }(), !1), S.first = kn, S.last = function(n, e, t) {
                    var o = 0,
                        r = n ? n.length : 0;
                    if ("number" != typeof e && null != e) {
                        var i = r;
                        for (e = S.createCallback(e, t, 3); i-- && e(n[i], i, n);) o++
                    } else if (o = e, null == o || t) return n ? n[r - 1] : A;
                    return T(n, fe(0, r - o))
                }, S.sample = function(n, e, t) {
                    return n && "number" != typeof n.length && (n = Ln(n)), null == e || t ? n ? n[En(0, n.length - 1)] : A : (n = Bn(n), n.length = Ue(fe(0, e), n.length), n)
                }, S.take = kn, S.head = kn, e(S, function(n, e) {
                    var t = "sample" !== e;
                    S.prototype[e] || (S.prototype[e] = function(e, o) {
                        var r = this.__chain__,
                            i = n(this.__wrapped__, e, o);
                        return r || null != e && (!o || t && "function" == typeof e) ? new m(i, r) : i
                    })
                }), S.VERSION = "2.4.1", S.prototype.chain = function() {
                    return this.__chain__ = !0, this
                }, S.prototype.toString = function() {
                    return ae(this.__wrapped__)
                }, S.prototype.value = Qn, S.prototype.valueOf = Qn, Un(["join", "pop", "shift"], function(n) {
                    var e = Ee[n];
                    S.prototype[n] = function() {
                        var n = this.__chain__,
                            t = e.apply(this.__wrapped__, arguments);
                        return n ? new m(t, n) : t
                    }
                }), Un(["push", "reverse", "sort", "unshift"], function(n) {
                    var e = Ee[n];
                    S.prototype[n] = function() {
                        return e.apply(this.__wrapped__, arguments), this
                    }
                }), Un(["concat", "slice", "splice"], function(n) {
                    var e = Ee[n];
                    S.prototype[n] = function() {
                        return new m(e.apply(this.__wrapped__, arguments), this.__chain__)
                    }
                }), S
            }
            var A, S = [],
                m = [],
                p = 0,
                I = +new Date + "",
                h = 75,
                D = 40,
                L = " 	\fÂ \ufeff\n\r\u2028\u2029áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€",
                g = /\b__p\+='';/g,
                M = /\b(__p\+=)''\+/g,
                C = /(__e\(.*?\)|\b__t\))\+'';/g,
                f = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                U = /\w*$/,
                v = /^\s*function[ \n\r\t]+\w/,
                b = /<%=([\s\S]+?)%>/g,
                P = RegExp("^[" + L + "]*0+(?=.$)"),
                y = /($^)/,
                V = /\bthis\b/,
                B = /['\n\r\t\u2028\u2029\\]/g,
                F = "Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout".split(" "),
                k = "[object Arguments]",
                w = "[object Array]",
                H = "[object Boolean]",
                z = "[object Date]",
                G = "[object Function]",
                x = "[object Number]",
                Y = "[object Object]",
                W = "[object RegExp]",
                j = "[object String]",
                K = {};
            K[G] = !1, K[k] = K[w] = K[H] = K[z] = K[x] = K[Y] = K[W] = K[j] = !0;
            var q = {
                    leading: !1,
                    maxWait: 0,
                    trailing: !1
                },
                J = {
                    configurable: !1,
                    enumerable: !1,
                    value: null,
                    writable: !1
                },
                Z = {
                    "boolean": !1,
                    "function": !0,
                    object: !0,
                    number: !1,
                    string: !1,
                    undefined: !1
                },
                Q = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "	": "t",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                $ = Z[typeof window] && window || this,
                X = Z[typeof e] && e && !e.nodeType && e,
                nn = Z[typeof n] && n && !n.nodeType && n,
                en = (nn && nn.exports === X && X, Z[typeof r] && r);
            !en || en.global !== en && en.window !== en || ($ = en);
            var tn = c();
            $._ = tn, o = function() {
                return tn
            }.call(e, t, e, n), !(void 0 !== o && (n.exports = o))
        }).call(this)
    }).call(e, t(27)(n), function() {
        return this
    }())
}, function(n, e, t) {
    var o, r = [];
    n.exports = function(n) {
        r ? r.push(n) : n(o)
    }, t.e(2, function(n) {
        o = t(74);
        var e = r;
        r = null;
        for (var i = 0, a = e.length; a > i; i++) e[i](o)
    })
}, function(n, e, t) {
    var o, r = [];
    n.exports = function(n) {
        r ? r.push(n) : n(o)
    }, t.e(3, function(n) {
        o = t(75);
        var e = r;
        r = null;
        for (var i = 0, a = e.length; a > i; i++) e[i](o)
    })
}, function(n, e, t) {
    var o, r = [];
    n.exports = function(n) {
        r ? r.push(n) : n(o)
    }, t.e(8, function(n) {
        o = t(76);
        var e = r;
        r = null;
        for (var i = 0, a = e.length; a > i; i++) e[i](o)
    })
}, function(n, e, t) {
    var o, r = [];
    n.exports = function(n) {
        r ? r.push(n) : n(o)
    }, t.e(10, function(n) {
        o = t(77);
        var e = r;
        r = null;
        for (var i = 0, a = e.length; a > i; i++) e[i](o)
    })
}, function(n, e, t) {
    var o, r = [];
    n.exports = function(n) {
        r ? r.push(n) : n(o)
    }, t.e(0, function(n) {
        o = t(33);
        var e = r;
        r = null;
        for (var i = 0, a = e.length; a > i; i++) e[i](o)
    })
}, function(n, e, t) {
    var o, r = [];
    n.exports = function(n) {
        r ? r.push(n) : n(o)
    }, t.e(4, function(n) {
        o = t(78);
        var e = r;
        r = null;
        for (var i = 0, a = e.length; a > i; i++) e[i](o)
    })
}, function(n, e, t) {
    var o, r = [];
    n.exports = function(n) {
        r ? r.push(n) : n(o)
    }, t.e(13, function(n) {
        o = t(79);
        var e = r;
        r = null;
        for (var i = 0, a = e.length; a > i; i++) e[i](o)
    })
}, function(n, e, t) {
    var o, r = [];
    n.exports = function(n) {
        r ? r.push(n) : n(o)
    }, t.e(9, function(n) {
        o = t(80);
        var e = r;
        r = null;
        for (var i = 0, a = e.length; a > i; i++) e[i](o)
    })
}, function(n, e, t) {
    var o, r = [];
    n.exports = function(n) {
        r ? r.push(n) : n(o)
    }, t.e(6, function(n) {
        o = t(81);
        var e = r;
        r = null;
        for (var i = 0, a = e.length; a > i; i++) e[i](o)
    })
}, function(n, e, t) {
    var o, r = [];
    n.exports = function(n) {
        r ? r.push(n) : n(o)
    }, t.e(5, function(n) {
        o = t(82);
        var e = r;
        r = null;
        for (var i = 0, a = e.length; a > i; i++) e[i](o)
    })
}, function(n, e, t) {
    var o, r = [];
    n.exports = function(n) {
        r ? r.push(n) : n(o)
    }, t.e(11, function(n) {
        o = t(83);
        var e = r;
        r = null;
        for (var i = 0, a = e.length; a > i; i++) e[i](o)
    })
}, function(n, e, t) {
    var o, r = [];
    n.exports = function(n) {
        r ? r.push(n) : n(o)
    }, t.e(12, function(n) {
        o = t(34);
        var e = r;
        r = null;
        for (var i = 0, a = e.length; a > i; i++) e[i](o)
    })
}, function(n, e, t) {
    var o, r = [];
    n.exports = function(n) {
        r ? r.push(n) : n(o)
    }, t.e(14, function(n) {
        o = t(84);
        var e = r;
        r = null;
        for (var i = 0, a = e.length; a > i; i++) e[i](o)
    })
}, function(n, e, t) {
    var o, r = [];
    n.exports = function(n) {
        r ? r.push(n) : n(o)
    }, t.e(7, function(n) {
        o = t(85);
        var e = r;
        r = null;
        for (var i = 0, a = e.length; a > i; i++) e[i](o)
    })
}, function(n, e, t) {
    var o, r = [];
    n.exports = function(n) {
        r ? r.push(n) : n(o)
    }, t.e(1, function(n) {
        o = t(86);
        var e = r;
        r = null;
        for (var i = 0, a = e.length; a > i; i++) e[i](o)
    })
}, function(n, e, t) {
    e = n.exports = t(65)(), e.push([n.id, '#apollojs-backdrop{width:100%;height:100%;position:absolute;z-index:100;background-color:rgba(0,0,0,.3);display:none;top:0;left:0;cursor:pointer}.apollojs-modal,.riot-apollo.apollojs-modal,body .toolbar_dropdown{display:none;position:absolute!important;z-index:200!important;background-color:#fff}.apollojs-modal.apollojs-warning,.riot-apollo.apollojs-modal.apollojs-warning,body .toolbar_dropdown.apollojs-warning{padding:10px;max-width:600px}.apollojs-modal.apollojs-warning .modal-footer,.riot-apollo.apollojs-modal.apollojs-warning .modal-footer,body .toolbar_dropdown.apollojs-warning .modal-footer{text-align:right;padding:9px 15px;background-color:#f5f5f5}#apollo-unsafe-link-modal{width:80%;max-width:700px;display:none}#apollo-unsafe-link-modal .modal-body .content{margin-left:0!important}#apollo-unsafe-link-modal h2{margin-top:0;margin-bottom:.6em}#apollo-unsafe-link-modal .modal-footer a{font-size:1.2em;margin-right:10px}#apollo-unsafe-link-modal .modal-footer .btn{margin-left:20px}#apollo-unsafe-link-modal .opt-out{float:left;margin:0}#apollo-oembed-content-modal .modal-body .content{text-align:center;min-height:200px}#apollo-oembed-content-modal .modal-body p{clear:left}#apollo-oembed-content-modal .modal-body p.unsafe-link{word-wrap:break-word;overflow:hidden}#apollo-oembed-content-modal .modal-footer .offsite-link-url{font-size:20px;margin-right:10px}div.board-details section{margin-bottom:20px}div.board-details section h2{font-size:1.7em;line-height:1.3em}div.board-details section textarea{width:100%;min-height:70px}div.board-details section.details .right-buttons{float:right}div.board-details section.details .right-buttons .btn{border:1px solid #000;padding:0 10px}nav.apollo-board-navigation p{text-align:center}nav.apollo-board-navigation ul{list-style-type:none;margin:0}.riot-moderators div.actions{cursor:pointer}.riot-moderators .riot-moderators-masthead{position:relative;height:40px;margin-bottom:10px}.riot-moderators .riot-moderators-masthead h1{float:left;margin-bottom:0}.riot-moderators .riot-moderators-masthead h2{float:right;margin-bottom:0}.riot-moderators div.moderator,.riot-moderators div.owner{display:inline-block;width:33%;padding:5px;vertical-align:middle;float:left}.riot-moderators div.moderator div.avatar,.riot-moderators div.owner div.avatar{display:inline-block;vertical-align:middle;margin-right:10px;float:left}.riot-moderators div.moderator div.avatar img,.riot-moderators div.owner div.avatar img{height:36px;width:36px;display:inline-block}.riot-moderators div.moderator div.username,.riot-moderators div.owner div.username{overflow:hidden;color:#cab5a2;font-size:15px}.riot-moderators div.moderator div.actions,.riot-moderators div.owner div.actions{font-size:13px}.riot-moderators .moderator-list{clear:both}.riot-moderators .adding,.riot-moderators .confirmRevoke,.riot-moderators .revoking{display:none}@media screen and (max-width:500px){.riot-moderators div.moderator,.riot-moderators div.owner,div.owner div.moderator,div.owner div.owner{width:50%}}button.pinToggle{background-color:#553621;border:1px solid #000;color:#cab5a2;cursor:pointer;font-family:Constantia,Palatino,Georgia,serif;font-size:15px;font-variant:small-caps;padding:5px 20px;outline:1px solid #553621;min-width:90px}.riot-apollo{display:block;padding:10px}.riot-apollo blockquote,.riot-apollo dd,.riot-apollo div,.riot-apollo dl,.riot-apollo dt,.riot-apollo fieldset,.riot-apollo form,.riot-apollo h1,.riot-apollo h2,.riot-apollo h3,.riot-apollo h4,.riot-apollo h5,.riot-apollo h6,.riot-apollo li,.riot-apollo ol,.riot-apollo p,.riot-apollo pre,.riot-apollo td,.riot-apollo textarea,.riot-apollo th,.riot-apollo ul{margin:0;padding:0;box-sizing:border-box}.riot-apollo:after,.riot-apollo:before{content:\'\';display:table}.riot-apollo:after{clear:both}.riot-apollo hr{margin:5px 0 10px;border:dotted;border-width:2px 0 0;clear:both;height:0}.riot-apollo ul,.riot-apollo ul li{list-style-position:inside}.riot-apollo ul li{display:list-item}.riot-apollo .author-avatar,.riot-apollo .avatar-rioter,.riot-apollo .current-user-avatar{width:24px;height:24px;vertical-align:middle;margin-right:5px;display:inline-block;opacity:.65}.riot-apollo .author-avatar img,.riot-apollo .avatar-rioter img,.riot-apollo .current-user-avatar img{width:24px;height:24px}.riot-apollo .avatar-rioter{display:none;background-image:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/riot-post.png")}.riot-apollo .riot-discussion .riot-pin{display:none;background-image:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/pin.png");background-repeat:no-repeat;background-position:center center;width:40px;height:60px;margin-left:6px;float:left}.riot-apollo .riot-discussion .riot-discussion-masthead{position:relative;height:40px;margin-bottom:10px}.riot-apollo .riot-discussion .riot-discussion-masthead h1{float:left;margin-bottom:0}.riot-apollo .riot-discussion .riot-discussion-masthead h2{float:right;margin-bottom:0}.riot-apollo .riot-discussion .riot-discussion-masthead h2 .total-comment-count{line-height:2em}.riot-apollo .riot-discussion .riot-discussion-masthead select{text-transform:uppercase}.riot-apollo .riot-discussion .riot-discussion-displayed-count{text-align:center;border-width:1px;border-style:solid;padding:5px 0;margin:10px 0}.riot-apollo .riot-discussion>.riot-collection{margin-left:10px;clear:both}.riot-apollo .riot-list-item{box-sizing:border-box;overflow:hidden;margin:10px 0 0;padding-bottom:10px}.riot-apollo .riot-list-item:after{content:"";display:table;clear:both}.riot-apollo .riot-list-item .riot-masthead span{display:block;width:100%;margin-left:8px;height:20px;background:transparent url("https://cdn.leagueoflegends.com/apollo/widgets/assets/hr.png") repeat-x}.riot-apollo .riot-list-item .riot-body-container{overflow:hidden;padding-left:10px;padding-right:10px}.riot-apollo .riot-list-item .riot-body-container:after{content:"";display:table;clear:both}.riot-apollo .riot-list-item .riot-body{margin-bottom:7px;line-height:1.2}.riot-apollo .riot-list-item .riot-body p{padding-bottom:1em}.riot-apollo .riot-list-item .riot-body p:last-child{padding-bottom:0}.riot-apollo .riot-list-item .riot-body .sticker{height:140px;width:140px}.riot-apollo .riot-list-item .riot-body span.low-quality{display:none}.riot-apollo .riot-list-item .riot-footer{overflow:hidden}.riot-apollo .riot-list-item .riot-footer:after{content:"";display:table;clear:both}.riot-apollo .riot-list-item .riot-footer p{margin:0 0 1em;float:left}.riot-apollo .riot-list-item .riot-footer p em.deleted{display:none}.riot-apollo .riot-list-item .riot-footer p img{vertical-align:middle;margin-right:2px}.riot-apollo .riot-list-item .riot-footer p.deleted{margin-left:10px;padding-top:5px}.riot-apollo .riot-list-item .riot-footer>ul{list-style-type:none;float:right;margin-top:7px!important}.riot-apollo .riot-list-item .riot-footer>ul li{margin:0;padding:0;display:inline}.riot-apollo .riot-list-item .riot-footer>ul li a,.riot-apollo .riot-list-item .riot-footer>ul li button{cursor:pointer;padding-left:10px}.riot-apollo .riot-list-item .riot-footer>span.child-count-label{border-radius:3px;padding:4px 8px;float:right;display:none}.riot-apollo .riot-comment .riot-collection{padding-bottom:0;padding-right:10px}.riot-apollo .riot-comment .riot-collection>.riot-comment{margin-left:26px}.riot-apollo .riot-comment .riot-edit-form-container,.riot-apollo .riot-comment .riot-reply-form-container{padding-left:40px;padding-top:10px;padding-right:10px;display:none;clear:both}.riot-apollo .riot-comment .riot-edit-form-container>ul.controls .riot-alert,.riot-apollo .riot-comment .riot-reply-form-container>ul.controls .riot-alert{margin-left:-35px;margin-top:-24px}.riot-apollo .riot-voting{float:left;list-style-type:none;margin-left:10px;margin-top:-3px;width:19px}.riot-apollo .riot-voting li{height:13px;min-width:1pc;white-space:nowrap;text-align:center;line-height:9px;padding-top:2px}.riot-apollo .riot-voting li.total-votes{height:auto;padding-top:4px;vertical-align:middle}.riot-apollo .riot-edit-form-container,.riot-apollo .riot-reply-form-container{box-sizing:border-box;overflow:hidden;width:100%;padding-bottom:10px;padding-top:5px;display:none}.riot-apollo .riot-edit-form-container:after,.riot-apollo .riot-reply-form-container:after{content:"";display:table;clear:both}.riot-apollo .riot-edit-form-container .expanding,.riot-apollo .riot-reply-form-container .expanding{min-height:60px}.riot-apollo .riot-edit-form-container form,.riot-apollo .riot-reply-form-container form{padding-bottom:.5em}.riot-apollo .riot-edit-form-container textarea,.riot-apollo .riot-reply-form-container textarea{display:block;padding:10px;width:100%;height:66px;margin-bottom:10px;resize:none;border-radius:0}.riot-apollo .riot-edit-form-container textarea:focus,.riot-apollo .riot-reply-form-container textarea:focus{outline:0}.riot-apollo .riot-edit-form-container p,.riot-apollo .riot-reply-form-container p{margin:0 0 .5em;float:left}.riot-apollo .riot-edit-form-container p img,.riot-apollo .riot-reply-form-container p img{vertical-align:middle;margin-right:2px}.riot-apollo .riot-edit-form-container>ul.controls,.riot-apollo .riot-reply-form-container>ul.controls{list-style-type:none;float:right;margin:0 0 .5em -22px}.riot-apollo .riot-edit-form-container>ul.controls li,.riot-apollo .riot-reply-form-container>ul.controls li{margin:0;padding:0;display:inline}.riot-apollo .riot-edit-form-container>ul.controls li .riot-alert,.riot-apollo .riot-reply-form-container>ul.controls li .riot-alert{margin-left:-91px;margin-top:0}.riot-apollo .riot-edit-form-container>ul.controls a,.riot-apollo .riot-reply-form-container>ul.controls a{cursor:pointer;padding-left:10px}.riot-apollo .riot-edit-form-container>ul.controls a.cancelEdit,.riot-apollo .riot-edit-form-container>ul.controls a.cancelReply,.riot-apollo .riot-reply-form-container>ul.controls a.cancelEdit,.riot-apollo .riot-reply-form-container>ul.controls a.cancelReply{padding-right:15px}.riot-apollo .riot-edit-form-container>ul.controls.label,.riot-apollo .riot-reply-form-container>ul.controls.label{padding:0 5px}.riot-apollo .riot-alert{border-radius:3px 3px 3px 3px;float:left;display:none;z-index:9999;position:absolute;width:265px;height:3pc;overflow:hidden;margin-left:8px;white-space:normal;text-align:left;background-image:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/error.jpg");background-color:#fff;background-repeat:no-repeat;background-position:left top}.riot-apollo .riot-alert p{padding:8px 8px 8px 56px;font-size:14px!important}.riot-apollo .riot-alert.error429{background-image:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/error.jpg");background-repeat:no-repeat;background-position:left top}.riot-apollo .riot-alert.error403{background-image:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/forbidden.png");background-repeat:no-repeat;background-position:left top}.riot-apollo .riot-more{display:none;padding-left:25px;padding-top:5px}.riot-apollo .riot-more.bar{border-style:solid;border-width:1px;margin-top:10px;padding:3px 0;text-align:center}.riot-apollo a.more,.riot-apollo a.total-comments-count{background:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/reply.png");background-position:left 5px;background-repeat:no-repeat;margin-left:6px;text-align:left;height:18px;border:none;padding-left:1pc;display:inline-block;text-decoration:none}textarea.expanding{margin:0;box-sizing:border-box;width:100%}.riot-apollo button{padding:0;cursor:pointer}.riot-apollo button.post,.riot-apollo button.save{display:inline-block;zoom:1;*display:inline;vertical-align:baseline;margin:0 2px;outline:0;cursor:pointer;text-align:center;padding:.5em 2em .55em;border:solid 1px}.riot-apollo button.post:active,.riot-apollo button.save:active{position:relative;top:1px}.riot-apollo button.toggle-minimized{height:22px;width:22px;float:left;cursor:pointer;padding:5px 0;margin-top:-10px;margin-left:-11px;position:absolute;background-position:center center;background-repeat:no-repeat;border:none}.riot-apollo .riot-collection>.riot-comment button.toggle-minimized,.riot-apollo .riot-collection>.riot-comment>.riot-collection>.riot-comment button.toggle-minimized{background:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/collapser_a_minus.png")}.riot-apollo .riot-collection>.riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment button.toggle-minimized{background:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/collapser_b_minus.png")}.riot-apollo .riot-collection>.riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment button.toggle-minimized{background:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/collapser_a_minus.png")}.riot-apollo .riot-collection>.riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment button.toggle-minimized{background:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/collapser_b_minus.png")}.riot-apollo button.reply{background:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/reply.png");background-repeat:no-repeat;border:none}.riot-apollo button.up-vote{opacity:.7;background:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/up.png");background-repeat:no-repeat;background-position:center center;width:17px;height:15px;cursor:pointer;border:none}.riot-apollo button.up-vote:hover{opacity:1}.riot-apollo button.down-vote{opacity:.7;background:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/down.png");background-repeat:no-repeat;background-position:center center;width:17px;height:15px;cursor:pointer;border:none}.riot-apollo button.down-vote:hover{opacity:1}.riot-apollo .riot-discussion.moreCommentsVisible>.riot-more{display:block}.riot-apollo .riot-discussion.authenticated .riot-discussion-login-link{display:none}.riot-apollo .riot-discussion .riot-comment.moreCommentsVisible>.riot-more,.riot-apollo .riot-discussion.authenticated>.riot-reply-form-container{display:block}.riot-apollo .riot-discussion .riot-comment.lowQualityVisible>.riot-body-container>.riot-footer,.riot-apollo .riot-discussion .riot-comment.lowQualityVisible>.riot-voting{display:none}.riot-apollo .riot-discussion .riot-comment.lowQualityVisible>.riot-body-container>.riot-body{padding-left:20px}.riot-apollo .riot-discussion .riot-comment.lowQualityVisible>.riot-body-container>.riot-body span.high-quality{display:none}.riot-apollo .riot-discussion .riot-comment.lowQualityVisible>.riot-body-container>.riot-body span.low-quality{display:inline}.riot-apollo .riot-discussion .riot-comment.deleted{display:none}.riot-apollo .riot-discussion .riot-comment.deleted.hasChildren{display:block}.riot-apollo .riot-discussion .riot-comment.deleted.hasChildren>.riot-body-container>.riot-body,.riot-apollo .riot-discussion .riot-comment.deleted.hasChildren>.riot-voting>li{display:none}.riot-apollo .riot-discussion .riot-comment.deleted.hasChildren>.riot-body-container>.riot-footer{margin-left:10px;padding-top:5px}.riot-apollo .riot-discussion .riot-comment.deleted.hasChildren>.riot-body-container>.riot-footer p em.deleted{display:inline}.riot-apollo .riot-discussion .riot-comment.deleted.hasChildren>.riot-body-container>.riot-footer p em.timeago,.riot-apollo .riot-discussion .riot-comment.deleted.hasChildren>.riot-body-container>.riot-footer p img,.riot-apollo .riot-discussion .riot-comment.deleted.hasChildren>.riot-body-container>.riot-footer ul{display:none}.riot-apollo .riot-discussion .riot-comment.editing>.riot-edit-form-container,.riot-apollo .riot-discussion .riot-comment.replying>.riot-reply-form-container{display:block}.riot-apollo .riot-discussion .riot-comment.minimized>.riot-masthead button.toggle-minimized,.riot-apollo .riot-discussion .riot-comment>.riot-collection>.riot-comment.minimized button.toggle-minimized{background:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/collapser_a_plus.png")}.riot-apollo .riot-discussion .riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment.minimized button.toggle-minimized{background:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/collapser_b_plus.png")}.riot-apollo .riot-discussion .riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment.minimized button.toggle-minimized{background:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/collapser_a_plus.png")}.riot-apollo .riot-discussion .riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment.minimized button.toggle-minimized{background:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/collapser_b_plus.png")}.riot-apollo .riot-discussion .riot-comment.minimized.hasChildren>.riot-body-container>.riot-footer span.child-count-label{display:inline}.riot-apollo .riot-discussion .riot-comment.minimized>.riot-body-container>.riot-footer{margin-left:10px;padding-top:5px}.riot-apollo .riot-discussion .riot-comment.minimized>.riot-body-container>.riot-body,.riot-apollo .riot-discussion .riot-comment.minimized>.riot-body-container>.riot-footer p img,.riot-apollo .riot-discussion .riot-comment.minimized>.riot-body-container>.riot-footer ul,.riot-apollo .riot-discussion .riot-comment.minimized>.riot-collection,.riot-apollo .riot-discussion .riot-comment.minimized>.riot-edit-form-container,.riot-apollo .riot-discussion .riot-comment.minimized>.riot-more,.riot-apollo .riot-discussion .riot-comment.minimized>.riot-reply-form-container,.riot-apollo .riot-discussion .riot-comment.minimized>.riot-voting{display:none}.riot-apollo .riot-collection.hasMore .riot-more{display:block}.riot-apollo .riot-collection .riot-discussion.isSticky .riot-voting{display:none}.riot-apollo .riot-collection .riot-discussion.isSticky .riot-pin{display:block}.riot-apollo .riot-list-item.upVoted>.riot-voting .total-votes{color:green}.riot-apollo .riot-list-item.upVoted>.riot-voting button.up-vote{opacity:1;background:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/up-active.png");background-repeat:no-repeat;background-position:center center}.riot-apollo .riot-list-item.downVoted>.riot-voting .total-votes{color:red}.riot-apollo .riot-list-item.downVoted>.riot-voting button.down-vote{opacity:1;background:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/down-active.png");background-repeat:no-repeat;background-position:center center}.riot-apollo .riot-discussion .dropdown a,.riot-apollo .riot-discussion .dropdown a:hover,.riot-apollo .riot-discussion .dropdown a:visited{color:#342812}.riot-apollo .riot-discussion{background-color:#dedede;color:#2b2b2b;font-size:14px;font-family:Gill Sans W04,Gill Sans,Gill Sans MT,GillSans,Calibri,Trebuchet MS,sans-serif;line-height:1.5;width:100%;max-width:600px;text-align:left}.riot-apollo .riot-discussion h1{font-family:Adobe Garamond Pro,Garamond,Baskerville,Baskerville Old Face,Hoefler Text,Times New Roman,serif;font-size:200%}.riot-apollo .riot-discussion h2{font-size:100%;font-weight:700}.riot-apollo .riot-discussion h2 em{font-weight:400}.riot-apollo .riot-discussion a{color:#076295}.riot-apollo .riot-discussion a:hover{color:#02a2ff}.riot-apollo .riot-discussion a:visited{color:#076295}.riot-apollo .riot-discussion ul{line-height:1.6}.riot-apollo .riot-discussion ul li{line-height:1.3}.riot-apollo .riot-discussion .riot-discussion-masthead h1 span.riot-discussion-login-link{font-size:10pt;text-transform:uppercase;letter-spacing:1px}.riot-apollo .riot-discussion .riot-discussion-masthead select{background:#fff;box-shadow:1px 1px 1px rgba(0,0,0,.3);border:1px solid #bbb;color:#222;font-weight:700;padding-left:10px;text-shadow:none}.riot-apollo .riot-discussion .riot-discussion-displayed-count{background:#f2f2f2;color:#257372;font-weight:700;font-family:Gill Sans,Gill Sans MT,GillSans,Calibri,Trebuchet MS,sans-serif;font-size:10px;border-color:none}.riot-apollo .riot-discussion .riot-more{background-color:#c8c8c8;border:none}.riot-apollo .riot-discussion .riot-more a{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#257372;font-family:Gill Sans,Gill Sans MT,GillSans,Calibri,Trebuchet MS,sans-serif;background:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/reply.png");background-repeat:no-repeat;padding-left:22px}.riot-apollo .riot-discussion .riot-more.bar{background-color:#c8c8c8;border:none}.riot-apollo .riot-discussion .riot-comment{background:#e9eaec}.riot-apollo .riot-discussion .riot-comment textarea{box-shadow:inset 0 0 0 5px #cbcbcb,0 6px 10px rgba(0,0,0,.1) inset,0 2px 8px 3px rgba(0,0,0,.5) inset,1px 1px 0 0 #f9f9fa,-1px -1px 0 0 #a7a7a7}.riot-apollo .riot-discussion .riot-comment .riot-masthead span{background-image:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/hr.png")}.riot-apollo .riot-discussion .riot-comment .riot-voting{font-size:10px}.riot-apollo .riot-discussion .riot-comment .riot-voting .total-votes{font-size:9pt;font-family:helvetica,arial,sans-serif}.riot-apollo .riot-discussion .riot-comment .riot-body span.low-quality,.riot-apollo .riot-discussion .riot-comment .riot-voting li{color:#717171}.riot-apollo .riot-discussion .riot-comment .riot-body span.low-quality a{text-decoration:none}.riot-apollo .riot-discussion .riot-comment .riot-body blockquote{background:#e4e4e4;border-left:10px solid #d8d8d8;margin:1.5em 10px;padding:.5em 10px;quotes:none}.riot-apollo .riot-discussion .riot-comment .riot-body blockquote span.markdown-meta{font-size:9pt}.riot-apollo .riot-discussion .riot-comment .riot-body blockquote span.markdown-meta .timeago{font-style:italic}.riot-apollo .riot-discussion .riot-comment .riot-footer p{font-weight:700;font-size:9pt;color:#717171}.riot-apollo .riot-discussion .riot-comment .riot-footer p em{font-size:9pt;font-weight:400;color:#717171}.riot-apollo .riot-discussion .riot-comment .riot-footer p em abbr{color:#717171}.riot-apollo .riot-discussion .riot-comment .riot-footer>ul{font-size:10px}.riot-apollo .riot-discussion .riot-comment .riot-footer>ul li a,.riot-apollo .riot-discussion .riot-comment .riot-footer>ul li button{color:#257372;font-family:Gill Sans,Gill Sans MT,GillSans,Calibri,Trebuchet MS,sans-serif;font-weight:700;text-transform:uppercase;letter-spacing:1px}.riot-apollo .riot-discussion .riot-comment .riot-footer>ul li a:hover,.riot-apollo .riot-discussion .riot-comment .riot-footer>ul li button:hover{color:#5cb2b1}.riot-apollo .riot-discussion .riot-comment .riot-footer>span.child-count-label{border-radius:3px;font-size:9pt;color:#fff;background-color:rgba(0,0,0,.15)}.riot-apollo .riot-discussion .riot-comment .riot-collection>.riot-comment{background-color:#dedede}.riot-apollo .riot-discussion .riot-comment .riot-collection>.riot-comment textarea{background-color:#f2f2f2}.riot-apollo .riot-discussion .riot-comment .riot-collection>.riot-comment>.riot-collection>.riot-comment{background-color:#e9eaec}.riot-apollo .riot-discussion .riot-comment .riot-collection>.riot-comment>.riot-collection>.riot-comment textarea{background-color:#f2f2f2}.riot-apollo .riot-discussion .riot-comment .riot-collection>.riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment{background-color:#dedede}.riot-apollo .riot-discussion .riot-comment .riot-collection>.riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment textarea{background-color:#f2f2f2}.riot-apollo .riot-discussion .riot-comment .riot-collection>.riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment{background-color:#e9eaec}.riot-apollo .riot-discussion .riot-comment .riot-collection>.riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment textarea{background-color:#f2f2f2}.riot-apollo .riot-edit-form-container textarea,.riot-apollo .riot-reply-form-container textarea{box-shadow:inset 0 0 0 5px #cbcbcb,0 6px 10px rgba(0,0,0,.1) inset,0 2px 8px 3px rgba(0,0,0,.5) inset,1px 1px 0 0 #f9f9fa,-1px -1px 0 0 #a7a7a7;border:none;background-color:#f2f2f2}.riot-apollo .riot-edit-form-container textarea::-webkit-input-placeholder,.riot-apollo .riot-reply-form-container textarea::-webkit-input-placeholder{color:#1a1818}.riot-apollo .riot-edit-form-container textarea:-moz-placeholder,.riot-apollo .riot-reply-form-container textarea:-moz-placeholder{color:#1a1818}.riot-apollo .riot-edit-form-container textarea:-ms-input-placeholder,.riot-apollo .riot-reply-form-container textarea:-ms-input-placeholder{color:#1a1818}.riot-apollo .riot-edit-form-container textarea:focus,.riot-apollo .riot-reply-form-container textarea:focus{box-shadow:inset 0 0 0 5px #bababa,0 6px 10px rgba(0,0,0,.1) inset,0 2px 8px 3px rgba(0,0,0,.5) inset,1px 1px 0 0 #f9f9fa,-1px -1px 0 0 #a7a7a7;border:none;background-color:#fff;-webkit-transition:background-color .2s ease-in 0,border-color .2s ease-in 0,box-shadow .2s ease-in 0;transition:background-color .2s ease-in 0,border-color .2s ease-in 0,box-shadow .2s ease-in 0}.riot-apollo .riot-edit-form-container p,.riot-apollo .riot-reply-form-container p{font-weight:700;font-size:10px}.riot-apollo .riot-edit-form-container p em,.riot-apollo .riot-reply-form-container p em{font-size:9pt;font-weight:400}.riot-apollo .riot-edit-form-container>ul.controls,.riot-apollo .riot-reply-form-container>ul.controls{font-size:9pt}.riot-apollo .riot-edit-form-container>ul.controls a,.riot-apollo .riot-reply-form-container>ul.controls a{color:#257372}.riot-apollo .riot-edit-form-container>ul.controls a:hover,.riot-apollo .riot-reply-form-container>ul.controls a:hover{color:#5cb2b1}.riot-apollo .riot-edit-form-container>ul.controls.label,.riot-apollo .riot-reply-form-container>ul.controls.label{color:#fff;background-color:#999;font-size:9pt}.riot-apollo .riot-discussion button{padding:0;cursor:pointer}.riot-apollo .riot-discussion button.post,.riot-apollo .riot-discussion button.save{box-sizing:border-box;border-style:solid;border-width:3px;border-radius:0;text-shadow:none;box-shadow:none;width:auto;font-family:Adobe Garamond Pro,Garamond,Baskerville,Baskerville Old Face,Hoefler Text,Times New Roman,serif;font-weight:700;text-transform:uppercase;text-decoration:none;padding:6px 20px 4px;display:inline-block;text-align:center;color:#222;border-color:#f6c653 #bd6a23 #b6631f #e8ab4a;background:#d79922 url("https://cdn.leagueoflegends.com/lolkit/1.0.24/resources/images/lol-textures.jpg") no-repeat 50% -854px}.riot-apollo .riot-discussion button.post:hover,.riot-apollo .riot-discussion button.save:hover{border-color:#fdeaba #bf712c #b66521 #edbd6e;background-position:50% -886px}.riot-apollo .riot-discussion .riot-collection>.riot-comment button.toggle-minimized{background:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/collapser_a_minus.png")}.riot-apollo .riot-discussion .riot-collection>.riot-comment>.riot-collection>.riot-comment button.toggle-minimized{background:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/collapser_b_minus.png")}.riot-apollo .riot-discussion .riot-collection>.riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment button.toggle-minimized{background:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/collapser_a_minus.png")}.riot-apollo .riot-discussion .riot-collection>.riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment button.toggle-minimized,.riot-apollo .riot-discussion .riot-collection>.riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment button.toggle-minimized{background:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/collapser_b_minus.png")}.riot-apollo .riot-discussion button.reply{background-position:center center}.riot-apollo .riot-discussion button.up-vote{background:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/up.png");background-repeat:no-repeat;background-position:center center}.riot-apollo .riot-discussion button.down-vote{background:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/down.png");background-repeat:no-repeat;background-position:center center}.riot-apollo .riot-discussion button.more,.riot-apollo .riot-discussion button.reply{background:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/reply.png");background-repeat:no-repeat}.riot-apollo .riot-discussion button.more{background-position:left 5px;color:#27508f;font-weight:700;font-size:10px}.riot-apollo .riot-comment.isRioter>.riot-masthead span,.riot-apollo .riot-discussion.isRioter>.riot-masthead span{background-image:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/hr-red.png")}.riot-apollo .riot-comment.isRioter.deleted>.riot-masthead span,.riot-apollo .riot-discussion.isRioter.deleted>.riot-masthead span{background-image:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/hr.png")}.riot-apollo .riot-comment.isRioter>.riot-body-container>.riot-footer span.username,.riot-apollo .riot-discussion.isRioter>.riot-body-container>.riot-footer span.username{color:#ae250f}.riot-apollo .riot-comment.isRioter.deleted>.riot-body-container>.riot-footer span.username,.riot-apollo .riot-discussion.isRioter.deleted>.riot-body-container>.riot-footer span.username{color:#717171}.riot-apollo .riot-comment.upVoted>.riot-voting button.up-vote,.riot-apollo .riot-discussion.upVoted>.riot-voting button.up-vote{background:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/up-active.png");background-repeat:no-repeat;background-position:center center}.riot-apollo .riot-comment.downVoted>.riot-voting button.down-vote,.riot-apollo .riot-discussion.downVoted>.riot-voting button.down-vote{background:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/down-active.png");background-repeat:no-repeat;background-position:center center}.riot-apollo .riot-comment.minimized>.riot-masthead button.toggle-minimized,.riot-apollo .riot-comment>.riot-collection>.riot-comment.minimized button.toggle-minimized,.riot-apollo .riot-discussion.minimized>.riot-masthead button.toggle-minimized,.riot-apollo .riot-discussion>.riot-collection>.riot-comment.minimized button.toggle-minimized{background:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/collapser_a_plus.png")}.riot-apollo .riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment.minimized button.toggle-minimized,.riot-apollo .riot-discussion>.riot-collection>.riot-comment>.riot-collection>.riot-comment.minimized button.toggle-minimized{background:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/collapser_b_plus.png")}.riot-apollo .riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment.minimized button.toggle-minimized,.riot-apollo .riot-discussion>.riot-collection>.riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment.minimized button.toggle-minimized{background:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/collapser_a_plus.png")}.riot-apollo .riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment.minimized button.toggle-minimized,.riot-apollo .riot-discussion>.riot-collection>.riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment>.riot-collection>.riot-comment.minimized button.toggle-minimized{background:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/collapser_b_plus.png")}#apollo-unsafe-link-modal.comment-listing{background-color:#dedede;color:#2b2b2b;font-family:Gill Sans W04,Gill Sans,Gill Sans MT,GillSans,Calibri,Trebuchet MS,sans-serif}#apollo-unsafe-link-modal.comment-listing .modal-body h2{font-family:Adobe Garamond Pro,Garamond,Baskerville,Baskerville Old Face,Hoefler Text,Times New Roman,serif}#apollo-unsafe-link-modal.comment-listing a{color:#257372}@media screen and (max-width:600px){.riot-apollo{padding:0}.riot-apollo .rfmtoolbar{display:none}.riot-apollo .riot-comment .riot-body-container .riot-body blockquote{margin:10px 5px}.riot-apollo .riot-comment .riot-body-container .riot-footer a.delete{display:none}.riot-apollo .riot-comment .riot-edit-form-container,.riot-apollo .riot-comment .riot-reply-form-container{padding-left:10px}.riot-apollo .riot-comment .riot-edit-form-container .controls,.riot-apollo .riot-comment .riot-reply-form-container .controls{clear:left}.riot-apollo .riot-comment .riot-edit-form-container .controls a,.riot-apollo .riot-comment .riot-reply-form-container .controls a{font-size:14px}.riot-apollo .riot-comment .riot-collection>.riot-comment{margin-left:10px}#unsafe-link-modal .modal-footer{text-align:center}#unsafe-link-modal .modal-footer a:first-child{margin-bottom:10px;display:inline-block}#unsafe-link-modal .modal-footer .btn{margin-left:0}}.player-messaging.modal{position:fixed;height:500px;top:20%;z-index:1200;display:none}.player-messaging.modal .modal-body{padding:0}body .player-messaging{position:relative;margin:auto;padding:0!important;background:#060f16!important;width:90%;border:1px solid #0c2830;border-radius:0}body .player-messaging .messaging-header{position:relative;height:40px;line-height:39px;border-bottom:1px solid #0c2830}body .player-messaging .messaging-header h1{position:relative;top:1px;color:#ddd9cd;font-size:13px;line-height:39px;padding:0 18px;text-transform:uppercase;max-width:70%;word-wrap:break-word}body .player-messaging .messaging-header h1 .back-arrow{display:none}body .player-messaging .messaging-header h1 .unread-label{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opacity:1;color:#fff;font-family:Spiegel,sans-serif;font-size:10px;padding:1px 8px;margin-left:4px;background:#974412;border-radius:8px;position:relative;top:-2px;transition:opacity .5s}body .player-messaging .messaging-header h1 .unread-label.hidden{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacity:0}body .player-messaging .messaging-header h1.multiline{padding:9pt 15px;top:3px;line-height:15px}body .player-messaging .messaging-header nav{position:absolute;top:0;right:7px;height:100%;font-size:9pt}body .player-messaging .messaging-header nav .close-button{margin-top:8px;width:23px;height:21px}body .player-messaging .viewport{height:458px;font-family:Spiegel,sans-serif}body .player-messaging .viewport span.fromLabel{font-weight:400;color:#1f6472}body .player-messaging .viewport span.username{display:block;letter-spacing:1px;font-size:9pt;line-height:9pt;font-weight:400;color:#1f6472}body .player-messaging .viewport span.subject{display:block;font-size:9pt;line-height:9pt;color:#d3c7a9}body .player-messaging .viewport span.timeago{display:block;font-size:10px;line-height:10px;color:#1f6472}body .player-messaging .viewport .riot span.username{color:#ae2f0f}body .player-messaging .viewport .message-list{height:458px;float:left;width:250px;border-right:1px solid #0c2830;overflow-x:hidden;overflow-y:auto}body .player-messaging .viewport .message-list .player-messaging-list-item-view{border-right:1px solid #0c2830}body .player-messaging .viewport .message-list.noscroll,body .player-messaging .viewport .message-list.noscroll .player-messaging-list-item-view{border-right:0}body .player-messaging .viewport .message-list .show-more-row{width:100%;padding:10px 20px;text-align:center}body .player-messaging .viewport .message-list .show-more-row a.button{color:#ddd9cd!important;padding:5px 0}body .player-messaging .viewport .message-list .show-more-row a.button span{font-size:15px}body .player-messaging .viewport .message-list ul{margin:0;padding:0;list-style-type:none}body .player-messaging .viewport .message-list ul li{margin:0;padding:0;border-bottom:1px solid #0c2830;max-height:70px;background-color:#060f16}body .player-messaging .viewport .message-list ul li div.entry{height:70px;padding-top:5px;cursor:pointer}body .player-messaging .viewport .message-list ul li div.entry div.avatar{float:left;padding:5px 9pt}body .player-messaging .viewport .message-list ul li div.entry div.avatar img{width:50px}body .player-messaging .viewport .message-list ul li div.entry div.details{padding:3px 10px 0 0;height:100%}body .player-messaging .viewport .message-list ul li div.entry div.details span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:2px 0 6px}body .player-messaging .viewport .message-list ul li div.entry div.details span.username{text-transform:uppercase;letter-spacing:1px}body .player-messaging .viewport .message-list ul li.unread{background-color:#3395b1;background-image:-webkit-linear-gradient(#0b1721,#133744);background-image:linear-gradient(#0b1721,#133744,)}body .player-messaging .viewport .message-list ul li:hover{background-color:#0d1b22;background-image:none}body .player-messaging .viewport .message-list ul li.active{background-color:#0d1b22}body .player-messaging .viewport .reading-pane{height:458px;background-color:#0d1b22;margin-left:250px;border-left:1px solid #0c2830;overflow:auto}body .player-messaging .viewport .reading-pane .messaging-header{height:auto}body .player-messaging .viewport .reading-pane .messaging-header h1{font-family:Spiegel,sans-serif;text-transform:none;font-variant:normal;font-size:15px;color:#d3c7a9}body .player-messaging .viewport .reading-pane .messaging-header .timeago{margin:14px 7px 10px 5px;float:right}body .player-messaging .viewport .reading-pane .messaging-body{padding:9pt 15px}body .player-messaging .viewport .reading-pane .messaging-body span.username .fromLabel{font-weight:400;color:#1f6472}body .player-messaging .viewport .reading-pane .messaging-body p{padding:0;font-family:Spiegel,sans-serif;font-size:14px;color:#ddd9cd;line-height:1.5em}body .player-messaging .viewport .reading-pane.empty{background-image:url("https://cdn.leagueoflegends.com/apollo/assets/empty-state-vision-ward.png");background-repeat:no-repeat;background-position:center center}#player-messaging-mask{width:100%;height:100%;z-index:900;background-color:rgba(0,0,0,.8);position:fixed;top:0;left:0;display:none;cursor:pointer}body.tr_TR .player-messaging .messaging-header h1,body.tr_TR .player-messaging .viewport span.timeago,body.tr_TR .player-messaging .viewport span.username{text-transform:none}@media screen and (max-width:500px){body .player-messaging.modal{max-width:500px;width:100%;top:0;left:0!important;height:250px;position:absolute;overflow:hidden}body .player-messaging.modal .viewport{height:210px}}@media screen and (max-width:500px) and (min-height:450px){body .player-messaging.modal{height:25pc}body .player-messaging.modal .viewport{height:358px!important}}@media screen and (max-width:500px) and (min-height:550px){body .player-messaging.modal{height:500px}body .player-messaging.modal .viewport{height:458px!important}}@media screen and (max-width:500px) and (min-height:650px){body .player-messaging.modal{height:600px}body .player-messaging.modal .viewport{height:558px!important}}@media screen and (max-width:500px){body .player-messaging.modal .messaging-header .unread-label{font-size:9pt}body .player-messaging.modal .messaging-header .unread-label .fn-player-messages-unread-label{display:none}body .player-messaging.modal.mobile-message-visible .messaging-header .back-arrow{display:inline}body .player-messaging.modal .viewport{position:absolute;width:100%}body .player-messaging.modal .viewport .message-list{width:100%;height:100%}body .player-messaging.modal .viewport .message-list,body .player-messaging.modal .viewport .message-list .player-messaging-list-item-view{border-right:0}body .player-messaging.modal .viewport .reading-pane{height:100%;max-width:500px;position:absolute;-webkit-transition:right .3s ease-in-out;transition:right .3s ease-in-out;right:-500px;width:100%}}@media screen and (min-width:500px) and (max-height:550px){body .player-messaging.modal{top:60px;height:300px}body .player-messaging.modal .viewport,body .player-messaging.modal .viewport .message-list,body .player-messaging.modal .viewport .reading-pane{height:260px}}@media screen and (min-width:500px) and (max-height:350px){body .player-messaging.modal{height:250px}body .player-messaging.modal .viewport,body .player-messaging.modal .viewport .message-list,body .player-messaging.modal .viewport .reading-pane{height:210px}}.riot_apollo[data-poll-widget=show] input[type=radio]{margin:3px;position:relative;overflow:hidden;clip:auto;width:auto;height:auto}.riot_apollo[data-poll-widget=show] hr,.riot_apollo[data-poll-widget=show] input[type=radio][disabled]{display:none}.riot_apollo[data-poll-widget=show] h1{font-size:1.4em}.riot_apollo[data-poll-widget=show] table.riot-athena-result-collection{margin-top:.2em;border-collapse:collapse;border-top-width:1px;border-top-style:inset;border-top-color:#002c2b;width:100%}.riot_apollo[data-poll-widget=show] table.riot-athena-result-collection tr.riot-athena-choice,.riot_apollo[data-poll-widget=show] table.riot-athena-result-collection tr.riot-athena-total{height:30px}.riot_apollo[data-poll-widget=show] table.riot-athena-result-collection tr.riot-athena-choice td.riot-athena-choice-selection-indicator,.riot_apollo[data-poll-widget=show] table.riot-athena-result-collection tr.riot-athena-total td.riot-athena-choice-selection-indicator{width:3%}.riot_apollo[data-poll-widget=show] table.riot-athena-result-collection tr.riot-athena-choice td.riot-athena-choice-label,.riot_apollo[data-poll-widget=show] table.riot-athena-result-collection tr.riot-athena-total td.riot-athena-choice-label{width:25%;webkit-box-shadow:5px 0 6px -5px #000;box-shadow:5px 0 6px -5px #000;padding-right:5px}.riot_apollo[data-poll-widget=show] table.riot-athena-result-collection tr.riot-athena-choice td.riot-athena-choice-bar-container,.riot_apollo[data-poll-widget=show] table.riot-athena-result-collection tr.riot-athena-total td.riot-athena-choice-bar-container{width:55%}.riot_apollo[data-poll-widget=show] table.riot-athena-result-collection tr.riot-athena-choice td.riot-athena-choice-bar-container .riot-athena-bar,.riot_apollo[data-poll-widget=show] table.riot-athena-result-collection tr.riot-athena-total td.riot-athena-choice-bar-container .riot-athena-bar{display:inline-block;height:10px;webkit-box-shadow:inset 1px 1px 1px 0 rgba(29,125,170,.7);box-shadow:inset 1px 1px 1px 0 rgba(29,125,170,.7);background:#3a87ad;background:-webkit-gradient(linear,50% 0,50% 100%,color-stop(0%, #3a87ad),color-stop(100%, #1d7daa));background:-webkit-linear-gradient(top,#3a87ad 0,#1d7daa 100%);background:-o-linear-gradient(top,#3a87ad 0,#1d7daa 100%);background:linear,top,#3a87ad 0,#1d7daa 100%}.riot_apollo[data-poll-widget=show] table.riot-athena-result-collection tr.riot-athena-choice td.riot-athena-choice-selection-count,.riot_apollo[data-poll-widget=show] table.riot-athena-result-collection tr.riot-athena-total td.riot-athena-choice-selection-count{width:7%;text-align:right}.riot_apollo[data-poll-widget=show] table.riot-athena-result-collection tr.riot-athena-choice td.riot-athena-choice-selection-count-label,.riot_apollo[data-poll-widget=show] table.riot-athena-result-collection tr.riot-athena-total td.riot-athena-choice-selection-count-label{padding-left:6px}.riot_apollo[data-poll-widget=show] table.riot-athena-result-collection tr.riot-athena-choice.selected,.riot_apollo[data-poll-widget=show] table.riot-athena-result-collection tr.riot-athena-total.selected{background:#04222a}.riot_apollo[data-poll-widget=show] table.riot-athena-result-collection tr.riot-athena-choice.selected td.riot-athena-choice-bar-container .riot-athena-bar,.riot_apollo[data-poll-widget=show] table.riot-athena-result-collection tr.riot-athena-total.selected td.riot-athena-choice-bar-container .riot-athena-bar{box-shadow:inset 1px 1px 1px 0 rgba(102,68,90,.7);background:-webkit-gradient(linear,50% 0,50% 100%,color-stop(0%, #bfc3c4),color-stop(100%, #919598));background:-webkit-linear-gradient(#bfc3c4,#919598);background:-o-linear-gradient(#bfc3c4,#919598);background:linear,false,#bfc3c4,#919598;background:-webkit-gradient(linear,50% 0,50% 100%,color-stop(0%, #815675),color-stop(100%, #66445a));background:-webkit-linear-gradient(top,#815675 0,#66445a 100%);background:-o-linear-gradient(top,#815675 0,#66445a 100%);background:linear,top,#815675 0,#66445a 100%}.riot_apollo[data-poll-widget=show] table.riot-athena-result-collection tr.riot-athena-total{border-top-width:1px;border-top-style:inset}.riot_apollo[data-poll-widget=create] .riot-athena-create-question textarea{width:100%;height:3em;min-height:3em;line-height:1.6em;padding:.5em}@font-face{font-family:Beaufort;src:url("https://s3-us-west-2.amazonaws.com/apollo-dev/new-caprica/fonts/BeaufortforLOL-Regular.otf")}@font-face{font-family:Spiegel Regular;src:url("https://s3-us-west-2.amazonaws.com/apollo-dev/fonts/4cfa7a3f-56df-4060-9f42-8354069818da.eot?#iefix");src:url("https://s3-us-west-2.amazonaws.com/apollo-dev/fonts/4cfa7a3f-56df-4060-9f42-8354069818da.eot?#iefix") format("eot"),url("https://s3-us-west-2.amazonaws.com/apollo-dev/fonts/685f4c9c-b390-418e-977e-919951e0329f.woff") format("woff"),url("https://s3-us-west-2.amazonaws.com/apollo-dev/fonts/d5544079-79e7-4178-ab45-7da208fd52ab.ttf") format("truetype"),url("https://s3-us-west-2.amazonaws.com/apollo-dev/fonts/5ab26ef2-fc30-4c5e-81a6-e08584bcd7d3.svg#5ab26ef2-fc30-4c5e-81a6-e08584bcd7d3") format("svg")}@font-face{font-family:Spiegel Bold;src:url("https://s3-us-west-2.amazonaws.com/apollo-dev/fonts/1a8a732f-431e-4414-aeef-ae219e6f4744.eot?#iefix");src:url("https://s3-us-west-2.amazonaws.com/apollo-dev/fonts/1a8a732f-431e-4414-aeef-ae219e6f4744.eot?#iefix") format("eot"),url("https://s3-us-west-2.amazonaws.com/apollo-dev/fonts/0d8719a4-62a3-4ecf-9244-d3ed8a701450.woff") format("woff"),url("https://s3-us-west-2.amazonaws.com/apollo-dev/fonts/f5ce69f5-053e-4c7b-b4ce-7b97a54802a4.ttf") format("truetype"),url("https://s3-us-west-2.amazonaws.com/apollo-dev/fonts/bce4b22c-896e-48d5-980f-c0a53b82cf78.svg#bce4b22c-896e-48d5-980f-c0a53b82cf78") format("svg")}.riot-apollo.profile-hover{position:absolute;border:none;border-radius:0;padding:0;color:#94724d;max-width:none;z-index:9000;text-transform:uppercase;font-family:Spiegel Regular,sans-serif;letter-spacing:1px;font-size:9pt;-webkit-font-smoothing:antialiased;-webkit-opacity:.99}.riot-apollo.profile-hover .inner-content{position:relative;top:-33px;margin-bottom:-2pc}.riot-apollo.profile-hover .title{text-overflow:ellipsis;overflow:hidden;color:#6dc0cd;line-height:14px}.riot-apollo.profile-hover .realm-and-level{text-overflow:ellipsis;line-height:1.4em}.riot-apollo.profile-hover .full-summoner-icon{text-align:center}.riot-apollo.profile-hover .full-summoner-icon img{width:8pc;height:8pc}.riot-apollo.profile-hover .information-container{text-align:center;margin-top:5px}.riot-apollo.profile-hover h5.summoner-name{margin-top:0;text-overflow:ellipsis;overflow:hidden;color:#cab5a2;font-size:14px;font-family:Constantia,Palatino,Georgia,"serif";font-variant:small-caps;letter-spacing:1px;letter-spacing:normal}.riot-apollo.profile-hover h5.summoner-name.hu-HU{font-family:Palatino Linotype,Book Antiqua,Palatino,"serif"}.riot-apollo.profile-hover p{margin-top:.2em;font-size:.8em}.riot-apollo.profile-hover.rioter h5{color:#ed3029}.riot-apollo.profile-hover .top{background-color:#000;padding:6px;width:140px}.riot-apollo.profile-hover.rioters{border-width:4px;border-top-style:solid;border-right:0;border-bottom:0;border-left:0;border-top-color:#ed3029}.riot-apollo.profile-hover.rioters .summoner-name{color:#ed3029}.riot-apollo.profile-hover .badges{text-align:center;min-height:33px}.riot-apollo.profile-hover .badges.shown{background-color:rgba(0,0,0,.75)}.riot-apollo.profile-hover .badge{display:inline-block;margin-top:2px;width:24px;height:24px;background-position:center center;background-repeat:no-repeat;background-size:24px 24px}.riot-apollo.profile-hover .badge.b-raf{background-image:url("https://cdn.leagueoflegends.com/apollo/badges/raf.png")}.riot-apollo.profile-hover .badge.b-s01gold{background-image:url("https://cdn.leagueoflegends.com/apollo/badges/s1gold.png")}.riot-apollo.profile-hover .badge.b-s01plat{background-image:url("https://cdn.leagueoflegends.com/apollo/badges/s1platinum.png")}.riot-apollo.profile-hover .badge.b-s02plat{background-image:url("https://cdn.leagueoflegends.com/apollo/badges/s2platinum.png")}.riot-apollo.profile-hover .badge.b-s02diam{background-image:url("https://cdn.leagueoflegends.com/apollo/badges/s2diamond.png")}.riot-apollo.profile-hover .badge.b-s03gold{background-image:url("https://cdn.leagueoflegends.com/apollo/badges/s3gold.png")}.riot-apollo.profile-hover .badge.b-s03plat{background-image:url("https://cdn.leagueoflegends.com/apollo/badges/s3platinum.png")}.riot-apollo.profile-hover .badge.b-s03diam{background-image:url("https://cdn.leagueoflegends.com/apollo/badges/s3diamond.png")}.riot-apollo.profile-hover .badge.b-s03chal{background-image:url("https://cdn.leagueoflegends.com/apollo/badges/s3challenger.png")}.riot-apollo.profile-hover .badge.b-s04gold{background-image:url("https://cdn.leagueoflegends.com/apollo/badges/s4gold.png")}.riot-apollo.profile-hover .badge.b-s04plat{background-image:url("https://cdn.leagueoflegends.com/apollo/badges/s4platinum.png")}.riot-apollo.profile-hover .badge.b-s04diam{background-image:url("https://cdn.leagueoflegends.com/apollo/badges/s4diamond.png")}.riot-apollo.profile-hover .badge.b-s04mast{background-image:url("https://cdn.leagueoflegends.com/apollo/badges/s4master.png")}.riot-apollo.profile-hover .badge.b-s04chal{background-image:url("https://cdn.leagueoflegends.com/apollo/badges/s4challenger.png")}.riot-apollo.profile-hover .arrow{background-image:url("https://cdn.leagueoflegends.com/apollo/assets/player-profile/arrow.png");width:140px;height:30px}.de_DE h5{text-transform:none}.rfmtoolbar{z-index:1;height:2pc;width:100%;border:1px solid #b4b4b4;border-bottom:none;background-color:#fff;background-image:-webkit-linear-gradient(#fff,#e0e0e0);background-image:linear-gradient(#fff,#e0e0e0,)}.rfmtoolbar,.rfmtoolbar *{box-sizing:border-box}.rfmtoolbar .button{padding:0 5px;width:2pc;height:30px;float:left;border-right:1px solid #b4b4b4;border-left:1px solid #eee;cursor:pointer;background-repeat:no-repeat;background-image:url("https://cdn.leagueoflegends.com/apollo/assets/icon_sprite_sticker.png")}.rfmtoolbar .button.gamedata.champion{background-position:-203px 0}.rfmtoolbar .button.gamedata.item{background-position:-293px 0}.rfmtoolbar .button.gamedata.summoner{background-position:-248px 0}.rfmtoolbar .button.formatting.bold{background-position:7px}.rfmtoolbar .button.formatting.italic{background-position:-20px}.rfmtoolbar .button.formatting.strikethrough{background-position:-44px}.rfmtoolbar .button.paragraph.blockquote{background-position:-105px}.rfmtoolbar .button.paragraph.unordered{background-position:-135px}.rfmtoolbar .button.paragraph.ordered{background-position:-166px}.rfmtoolbar .button.url{background-position:-74px}.rfmtoolbar .button.formatting-guide{background-position:-328px;float:right;border-left:1px solid #b4b4b4;border-right:none}.rfmtoolbar .button.sticker.slayer{background-position:-366px}.toolbar_dropdown{width:25pc;float:left;background-color:#fff;position:absolute;display:none;padding:10px 0;border:1px solid #b4b4b4;border-top:none;box-shadow:3px 3px 10px rgba(0,0,0,.4)}.toolbar_dropdown,.toolbar_dropdown *{box-sizing:border-box}.toolbar_dropdown .frame{height:300px;width:398px;padding-left:5px;overflow:auto}.toolbar_dropdown .frame .sticker{display:inline-block;width:140px;height:140px;background-repeat:no-repeat;margin-left:34px;margin-bottom:10px}.toolbar_dropdown .dragon_query{margin-bottom:10px;width:375px;padding:10px;border-radius:10px;margin-left:10px}.toolbar_dropdown .gameobj{display:inline-block;padding:3px}.oldie .toolbar_dropdown .dragon_query{width:350px}.oldie .toolbar_dropdown .frame{width:395px}.toolbar_dropdown_modal{width:100%;height:100%;position:absolute;top:0;left:0;z-index:2;display:none;cursor:pointer}.riot-apollo-tooltip dfn{position:relative;display:none}#riot-apollo-tooltip-container{max-width:200px;background:#fff;color:#000;padding:5px 10px;box-shadow:1px 1px 5px 0 rgba(0,0,0,.18);z-index:-9001}#riot-apollo-tooltip-container.active{z-index:10051}#riot-apollo-tooltip-container.hidden{position:absolute!important;display:none!important;z-index:-9001!important;left:-9001px!important}#riot-apollo-tooltip-container.caprica{color:#cab5a2;border-radius:3px;box-shadow:0 0 5px rgba(0,0,0,.9);text-shadow:1px 1px #000;border:1px solid #195657;background:#003a42;background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwM2E0MiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMjFiMjAiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);background:-webkit-gradient(linear,left top,left bottom,color-stop(0%, #003a42),color-stop(100%, #021b20));background:-webkit-linear-gradient(top,#003a42 0%,#021b20 100%);background:-ms-linear-gradient(top,#003a42 0%,#021b20 100%);background:linear,to bottom,#003a42 0,#021b20 100%;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#003a42\',endColorstr=\'#021b20\',GradientType=0)}#apollo-user-search-modal div.riot-user-select{background-color:#000;padding:5px;height:36px}#apollo-user-search-modal div.riot-user-select div.username,#apollo-user-search-modal div.riot-user-select img{display:inline-block;vertical-align:middle}#apollo-user-search-modal input.searchText{width:350px}#apollo-user-search-modal button,#apollo-user-search-modal select{background-color:#553621;border:1px solid #000;color:#cab5a2;cursor:pointer;font-family:Constantia,Palatino,Georgia,serif;font-size:15px;font-variant:small-caps;padding:5px 20px;outline:1px solid #553621;min-width:90px}#apollo-user-search-modal div.actions{margin-top:10px;float:right}#apollo-user-search-modal div.riot-user-select:before{content:\' \';display:inline-block;vertical-align:middle;height:100%}#apollo-user-search-modal .user-list{display:none;position:absolute;background-color:#000}@media screen and (max-width:500px){#apollo-user-search-modal input.searchText{width:225px}}.riot-apollo.voting ul button.up-vote{background:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/up.png");background-repeat:no-repeat;background-position:center center}.riot-apollo.voting ul button.down-vote{background:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/down.png");background-repeat:no-repeat;background-position:center center}.riot-apollo.voting ul.upVoted.authenticated .total-votes{color:green}.riot-apollo.voting ul.upVoted.authenticated button.up-vote{opacity:1;background:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/up-active.png");background-repeat:no-repeat;background-position:center center}.riot-apollo.voting ul.downVoted.authenticated .total-votes{color:red}.riot-apollo.voting ul.downVoted.authenticated button.down-vote{opacity:1;background:url("https://cdn.leagueoflegends.com/apollo/widgets/assets/down-active.png");background-repeat:no-repeat;background-position:center center}', ""]);
}, function(n, e) {
    n.exports = function() {
        var n = [];
        return n.toString = function() {
            for (var n = [], e = 0; e < this.length; e++) {
                var t = this[e];
                t[2] ? n.push("@media " + t[2] + "{" + t[1] + "}") : n.push(t[1])
            }
            return n.join("")
        }, n.i = function(e, t) {
            "string" == typeof e && (e = [
                [null, e, ""]
            ]);
            for (var o = {}, r = 0; r < this.length; r++) {
                var i = this[r][0];
                "number" == typeof i && (o[i] = !0)
            }
            for (r = 0; r < e.length; r++) {
                var a = e[r];
                "number" == typeof a[0] && o[a[0]] || (t && !a[2] ? a[2] = t : t && (a[2] = "(" + a[2] + ") and (" + t + ")"), n.push(a))
            }
        }, n
    }
}, function(n, e, t) {
    function o(n, e) {
        for (var t = 0; t < n.length; t++) {
            var o = n[t],
                r = O[o.id];
            if (r) {
                r.refs++;
                for (var i = 0; i < r.parts.length; i++) r.parts[i](o.parts[i]);
                for (; i < o.parts.length; i++) r.parts.push(s(o.parts[i], e))
            } else {
                for (var a = [], i = 0; i < o.parts.length; i++) a.push(s(o.parts[i], e));
                O[o.id] = {
                    id: o.id,
                    refs: 1,
                    parts: a
                }
            }
        }
    }

    function r(n) {
        for (var e = [], t = {}, o = 0; o < n.length; o++) {
            var r = n[o],
                i = r[0],
                a = r[1],
                s = r[2],
                E = r[3],
                _ = {
                    css: a,
                    media: s,
                    sourceMap: E
                };
            t[i] ? t[i].parts.push(_) : e.push(t[i] = {
                id: i,
                parts: [_]
            })
        }
        return e
    }

    function i() {
        var n = document.createElement("style"),
            e = d();
        return n.type = "text/css", e.appendChild(n), n
    }

    function a() {
        var n = document.createElement("link"),
            e = d();
        return n.rel = "stylesheet", e.appendChild(n), n
    }

    function s(n, e) {
        var t, o, r;
        if (e.singleton) {
            var s = T++;
            t = N || (N = i()), o = E.bind(null, t, s, !1), r = E.bind(null, t, s, !0)
        } else n.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (t = a(), o = l.bind(null, t), r = function() {
            t.parentNode.removeChild(t), t.href && URL.revokeObjectURL(t.href)
        }) : (t = i(), o = _.bind(null, t), r = function() {
            t.parentNode.removeChild(t)
        });
        return o(n),
            function(e) {
                if (e) {
                    if (e.css === n.css && e.media === n.media && e.sourceMap === n.sourceMap) return;
                    o(n = e)
                } else r()
            }
    }

    function E(n, e, t, o) {
        var r = t ? "" : o.css;
        if (n.styleSheet) n.styleSheet.cssText = c(e, r);
        else {
            var i = document.createTextNode(r),
                a = n.childNodes;
            a[e] && n.removeChild(a[e]), a.length ? n.insertBefore(i, a[e]) : n.appendChild(i)
        }
    }

    function _(n, e) {
        var t = e.css,
            o = e.media;
        e.sourceMap;
        if (o && n.setAttribute("media", o), n.styleSheet) n.styleSheet.cssText = t;
        else {
            for (; n.firstChild;) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(t))
        }
    }

    function l(n, e) {
        var t = e.css,
            o = (e.media, e.sourceMap);
        o && (t += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
        var r = new Blob([t], {
                type: "text/css"
            }),
            i = n.href;
        n.href = URL.createObjectURL(r), i && URL.revokeObjectURL(i)
    }
    var O = {},
        u = function(n) {
            var e;
            return function() {
                return "undefined" == typeof e && (e = n.apply(this, arguments)), e
            }
        },
        R = u(function() {
            return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
        }),
        d = u(function() {
            return document.head || document.getElementsByTagName("head")[0]
        }),
        N = null,
        T = 0;
    n.exports = function(n, e) {
        e = e || {}, "undefined" == typeof e.singleton && (e.singleton = R());
        var t = r(n);
        return o(t, e),
            function(n) {
                for (var i = [], a = 0; a < t.length; a++) {
                    var s = t[a],
                        E = O[s.id];
                    E.refs--, i.push(E)
                }
                if (n) {
                    var _ = r(n);
                    o(_, e)
                }
                for (var a = 0; a < i.length; a++) {
                    var E = i[a];
                    if (0 === E.refs) {
                        for (var l = 0; l < E.parts.length; l++) E.parts[l]();
                        delete O[E.id]
                    }
                }
            }
    };
    var c = function() {
        var n = [];
        return function(e, t) {
            return n[e] = t, n.filter(Boolean).join("\n")
        }
    }()
}, function(n, e, t) {
    var o = t(64);
    "string" == typeof o && (o = [
        [n.id, o, ""]
    ]);
    t(66)(o, {});
    o.locals && (n.exports = o.locals)
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(4), t(10)], r = function(n, e, t, o, r) {
        "use strict";
        var i = t.Model.extend({
            defaults: {
                id: null,
                shortName: null,
                realm: !1,
                description: !1,
                parentApplicationId: null,
                applicationUser: null,
                moderators: []
            },
            initialize: function() {},
            url: function() {
                return "applications/" + this.get("id")
            },
            sync: function(n, e, t) {
                switch (n) {
                    case "read":
                        this.httpGet(e.url(), t.data, function(n) {
                            t.success(n)
                        });
                        break;
                    case "patch":
                        this.httpPut(e.url(), t.attrs, function(n) {
                            t.success(n)
                        });
                        break;
                    default:
                        o.error("ApolloJS: " + n.toUpperCase() + " not yet been implemented")
                }
            },
            parse: function(n, t) {
                var o;
                return o = e.isObject(n.application) ? n.application : n
            },
            isOwner: function(n) {
                var t = this.get("applicationUser");
                return e.isEmpty(t) || n.get("id") !== t.id || n.get("realm").toUpperCase() != t.realm.toUpperCase() ? !1 : !0
            },
            boardsUri: function() {
                var n = [];
                return this.get("shortName") ? (n.push("/c/"), n.push(this.get("shortName"))) : (n.push("/f/"), n.push(this.get("id"))), n.join("")
            },
            reportCount: function(n) {
                var e = 0;
                n(e)
            },
            isBoardModerator: function(n) {
                var t = e.find(this.get("moderators"), function(e) {
                    return e.id === n.get("id") && e.realm.toUpperCase() === n.get("realm").toUpperCase()
                });
                return !e.isEmpty(t)
            }
        });
        return e.extend(i.prototype, r), i
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o;
    (function(n, r) {
        ! function(i) {
            function a(n) {
                throw RangeError(P[n])
            }

            function s(n, e) {
                for (var t = n.length; t--;) n[t] = e(n[t]);
                return n
            }

            function E(n, e) {
                return s(n.split(b), e).join(".")
            }

            function _(n) {
                for (var e, t, o = [], r = 0, i = n.length; i > r;) e = n.charCodeAt(r++), e >= 55296 && 56319 >= e && i > r ? (t = n.charCodeAt(r++), 56320 == (64512 & t) ? o.push(((1023 & e) << 10) + (1023 & t) + 65536) : (o.push(e), r--)) : o.push(e);
                return o
            }

            function l(n) {
                return s(n, function(n) {
                    var e = "";
                    return n > 65535 && (n -= 65536, e += B(n >>> 10 & 1023 | 55296), n = 56320 | 1023 & n), e += B(n)
                }).join("")
            }

            function O(n) {
                return 10 > n - 48 ? n - 22 : 26 > n - 65 ? n - 65 : 26 > n - 97 ? n - 97 : I
            }

            function u(n, e) {
                return n + 22 + 75 * (26 > n) - ((0 != e) << 5)
            }

            function R(n, e, t) {
                var o = 0;
                for (n = t ? V(n / g) : n >> 1, n += V(n / e); n > y * D >> 1; o += I) n = V(n / y);
                return V(o + (y + 1) * n / (n + L))
            }

            function d(n) {
                var e, t, o, r, i, s, E, _, u, d, N = [],
                    T = n.length,
                    c = 0,
                    A = C,
                    S = M;
                for (t = n.lastIndexOf(f), 0 > t && (t = 0), o = 0; t > o; ++o) n.charCodeAt(o) >= 128 && a("not-basic"), N.push(n.charCodeAt(o));
                for (r = t > 0 ? t + 1 : 0; T > r;) {
                    for (i = c, s = 1, E = I; r >= T && a("invalid-input"), _ = O(n.charCodeAt(r++)), (_ >= I || _ > V((p - c) / s)) && a("overflow"), c += _ * s, u = S >= E ? h : E >= S + D ? D : E - S, !(u > _); E += I) d = I - u, s > V(p / d) && a("overflow"), s *= d;
                    e = N.length + 1, S = R(c - i, e, 0 == i), V(c / e) > p - A && a("overflow"), A += V(c / e), c %= e, N.splice(c++, 0, A)
                }
                return l(N)
            }

            function N(n) {
                var e, t, o, r, i, s, E, l, O, d, N, T, c, A, S, m = [];
                for (n = _(n), T = n.length, e = C, t = 0, i = M, s = 0; T > s; ++s) N = n[s], 128 > N && m.push(B(N));
                for (o = r = m.length, r && m.push(f); T > o;) {
                    for (E = p, s = 0; T > s; ++s) N = n[s], N >= e && E > N && (E = N);
                    for (c = o + 1, E - e > V((p - t) / c) && a("overflow"), t += (E - e) * c, e = E, s = 0; T > s; ++s)
                        if (N = n[s], e > N && ++t > p && a("overflow"), N == e) {
                            for (l = t, O = I; d = i >= O ? h : O >= i + D ? D : O - i, !(d > l); O += I) S = l - d, A = I - d, m.push(B(u(d + S % A, 0))), l = V(S / A);
                            m.push(B(u(l, 0))), i = R(t, c, o == r), t = 0, ++o
                        }++t, ++e
                }
                return m.join("")
            }

            function T(n) {
                return E(n, function(n) {
                    return U.test(n) ? d(n.slice(4).toLowerCase()) : n
                })
            }

            function c(n) {
                return E(n, function(n) {
                    return v.test(n) ? "xn--" + N(n) : n
                })
            }
            var A = "object" == typeof e && e,
                S = ("object" == typeof n && n && n.exports == A && n, "object" == typeof r && r);
            (S.global === S || S.window === S) && (i = S);
            var m, p = 2147483647,
                I = 36,
                h = 1,
                D = 26,
                L = 38,
                g = 700,
                M = 72,
                C = 128,
                f = "-",
                U = /^xn--/,
                v = /[^ -~]/,
                b = /\x2E|\u3002|\uFF0E|\uFF61/g,
                P = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                },
                y = I - h,
                V = Math.floor,
                B = String.fromCharCode;
            m = {
                version: "1.2.3",
                ucs2: {
                    decode: _,
                    encode: l
                },
                decode: d,
                encode: N,
                toASCII: c,
                toUnicode: T
            }, o = function() {
                return m
            }.call(e, t, e, n), !(void 0 !== o && (n.exports = o))
        }(this)
    }).call(e, t(27)(n), function() {
        return this
    }())
}, function(n, e, t) {
    var o, r;
    o = [t(2), t(3), t(10)], r = function(n, e, t) {
        "use strict";
        var o = e.Model.extend({
            defaults: {
                applicationId: null,
                applicationName: null,
                applicationShortName: null
            },
            idAttribute: "applicationId",
            urlRoot: "/navigation/pins",
            url: function() {
                return this.urlRoot + "/" + this.get("applicationId")
            },
            initialize: function(n) {
                this.options = n, this.isPinned = !1
            },
            toggle: function() {
                this.isPinned ? this.sync("delete", this) : this.sync("create", this)
            },
            sync: function(n, t, o) {
                var r = this;
                switch (n) {
                    case "create":
                        r.isPinned = !0, e.trigger("board:pinned", t), this.httpPost(this.url(), {}, function(n) {});
                        break;
                    case "delete":
                        r.isPinned = !1, e.trigger("board:unpinned", t), this.httpDelete(this.url(), {}, function(n) {})
                }
            }
        });
        return n.extend(o.prototype, t), o
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(7), t(28), t(15), t(14), t(69)], r = function(n, e, t, o, r, i, a) {
        "use strict";
        var s = new r.Store("apollo:unsafeLinkFilter"),
            E = s.get("settings") || {},
            _ = n("body #apollo-unsafe-link-modal");
        if (0 === _.length) {
            var l = t.getCurrentCultureMessages(),
                O = o["app/apollo_common/templates/unsafe_link_modal.html"]({
                    i18n: {
                        strings: l
                    }
                });
            O = n(O), n("body").append(O), n("body #apollo-unsafe-link-modal input.disable-unsafe").on("change", function() {
                n(this).attr("disabled", !0), E.disabled = !0, s.set("settings", E), n("a.unsafe").each(function() {
                    var e = n(this);
                    e.attr("href", e.attr("data-href")), e.attr("data-toggle", ""), e.removeClass("unsafe")
                })
            }), O.find("a.hide-modal").on("click", function() {
                i.hideModal(O)
            })
        }
        var u = {
            renderUnsafeLinksFilter: function(t) {
                var o = t.find("a:not(.safe)");
                if (0 !== o.length && !E.disabled) return n.each(o, function(t, o) {
                    var r = n(o),
                        s = r.attr("data-href") || r.attr("href");
                    s = e.escape(s);
                    var E = ["leagueoflegends.com", "lolesports.com", "riotgames.com", "api.pvp.net"],
                        _ = a.toASCII(r.attr("href"));
                    _ && "xn" === _.substring(0, 2) && (r.attr("href", _), r.text(_));
                    for (var l = 0; l < E.length; l++) {
                        var O = new RegExp("^" + E[l] + "$"),
                            u = new RegExp("\\." + E[l] + "$");
                        if (O.test(o.hostname) || u.test(o.hostname)) return void r.addClass("safe")
                    }
                    r.addClass("unsafe"), r.attr("data-href", s), r.on("click", function(e) {
                        return e.preventDefault(), e.stopPropagation(), n("#apollo-unsafe-link-modal a.offsite-link-url").attr({
                            href: s
                        }), n("#apollo-unsafe-link-modal span.unsafe-link-url").text(s), i.showModal(n("#apollo-unsafe-link-modal")), !1
                    })
                }), this
            }
        };
        return u
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [], r = function() {
        "use strict";
        var n = function() {
                return window.Riot && window.Riot.Sandworm ? window.Riot.Sandworm.getRegion().toUpperCase() : !1
            },
            e = function(n) {
                n = n.toUpperCase();
                var e = document.cookie.match("PVPNET_TOKEN_" + n + "=(.*?)(;|$)"),
                    t = e ? e[1] : void 0;
                return n && t ? n + ":" + t : !1
            };
        return {
            getAuthToken: function() {
                var n = this.getRegion();
                return n === !1 ? !1 : e(n)
            },
            getRegion: n,
            authenticated: function() {
                return this.getAuthToken() === !1 ? !1 : !0
            }
        }
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    __WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return this.JST = this.JST || {}, this.JST["app/apollo_widgets/player_messaging/templates/inbox_view.html"] = function(obj) {
            obj || (obj = {});
            var __t, __p = "";
            _.escape, Array.prototype.join;
            with(obj) __p += '  <div class="messaging-header">\n    <h1><span class="back-arrow">&lt;</span>' + (null == (__t = i18n.strings.NOTIFICATIONS) ? "" : __t) + ' <span class="unread-label hidden"><span class="fn-player-messages-unread">' + (null == (__t = totalUnread) ? "" : __t) + '</span> <span class="fn-player-messages-unread-label">' + (null == (__t = i18n.strings.UNREAD) ? "" : __t) + "</span><span></span></h1>\n    ", isModal && (__p += '\n    <nav>\n      <a class="close-link" href="javascript:;"><img src="https://cdn.leagueoflegends.com/apollo/assets/player-notifications/close_x.png" class="close-button" /></a>\n    </nav>\n    '), __p += '\n  </div>\n  <div class="viewport clearfix">\n    <div class="message-list ', scrollVisible || (__p += "noscroll"), __p += '">\n      <!-- generated sub view -->\n    </div>\n    <div class="reading-pane empty">\n      <!-- generated sub view -->\n    </div>\n  </div>\n';
            return __p
        }, this.JST["app/apollo_widgets/player_messaging/templates/list_item.html"] = function(obj) {
            obj || (obj = {});
            var __t, __p = "";
            _.escape, Array.prototype.join;
            with(obj) __p += '<li data-id="' + (null == (__t = message.get("id")) ? "" : __t) + '" class="clearfix ' + (null == (__t = message.get("fromGroup")) ? "" : __t), message.get("isRead") || (__p += " unread "), __p += '">\n  <div class="entry clearfix">\n    <div class="avatar">\n      <img src="' + (null == (__t = message.get("fromAvatar")) ? "" : __t) + '">\n    </div>\n    <div class="details">\n      <span class="username">' + (null == (__t = message.get("fromName")) ? "" : __t) + "\n        ", message.get("fromRegion") && (__p += '<span class="region">(' + (null == (__t = message.get("fromRegion").toUpperCase()) ? "" : __t) + ")</span> "), __p += '</span>\n      <span class="subject">' + (null == (__t = message.get("subject")) ? "" : __t) + '</span>\n      <span class="timeago" datetime="' + (null == (__t = message.get("publishedAtStamp")) ? "" : __t) + '">' + (null == (__t = message.get("publishedAt")) ? "" : __t) + "</span>\n    </div>\n  </div>\n</li>\n";
            return __p
        }, this.JST["app/apollo_widgets/player_messaging/templates/list_view.html"] = function(obj) {
            obj || (obj = {});
            var __t, __p = "";
            _.escape, Array.prototype.join;
            with(obj) __p += '  <ul class="player-messaging-list-item-view">\n  ', initialTotal < 1 && (__p += '\n\n    <li style="padding:20px;">' + (null == (__t = i18n.strings.NO_UNREAD) ? "" : __t) + "</li>\n\n  "), __p += '\n    <div class="show-more-row">\n      <a class="button" href="#"><span>' + (null == (__t = i18n.strings.MORE) ? "" : __t) + "</span></a>\n    </div>\n  </ul>\n\n\n\n\n";
            return __p
        }, this.JST["app/apollo_widgets/player_messaging/templates/messagebox_modal.html"] = function(obj) {
            obj || (obj = {});
            var __p = "";
            _.escape;
            with(obj) __p += "<div id='riot-apollo-messaging-modal' class='modal player-messaging box main' style=\"max-width:850px;\">\n</div>\n";
            return __p
        }, this.JST["app/apollo_widgets/player_messaging/templates/reading_view.html"] = function(obj) {
            obj || (obj = {});
            var __t, __p = "";
            _.escape, Array.prototype.join;
            with(obj) __p += '      <div class="messaging-header">\n        <span class="timeago" datetime="' + (null == (__t = message.get("publishedAtStamp")) ? "" : __t) + '">' + (null == (__t = message.get("publishedAt")) ? "" : __t) + '</span>\n        <h1 class="multiline">' + (null == (__t = message.get("subject")) ? "" : __t) + '</h1>\n      </div>\n      <div class="messaging-body ' + (null == (__t = message.get("fromGroup")) ? "" : __t) + ' ">\n        <span class="username"><span class="fromLabel">' + (null == (__t = i18n.strings.FROM) ? "" : __t) + ": </span>" + (null == (__t = message.get("fromName")) ? "" : __t) + "\n         ", message.get("fromRegion") && (__p += '<span class="region">(' + (null == (__t = message.get("fromRegion")) ? "" : __t) + ")</span>"), __p += "</span>\n        <p>\n          " + (null == (__t = message.get("body")) ? "" : __t) + "\n        </p>\n      </div>\n";
            return __p
        }, this.JST
    }.call(exports, __webpack_require__, exports, module), !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(196), t(198), t(8), t(68), t(5), t(35), t(175), t(174)], r = function(n, e, t, o, r, i, a, s, E, _, l) {
        "use strict";
        var O = t.Model.extend({
            defaults: {
                boardId: !1,
                boardsUri: ""
            },
            render: function(n) {
                var t = this.get("boardId");
                t && E.ensureProperty("services.boards.uri", e.bind(function(t) {
                    t && this.set("boardsUri", s.services.boards.uri), this.loadUserInfo(e.bind(function() {
                        this.loadBoardInfo(e.bind(function() {
                            this.renderView(n)
                        }, this))
                    }, this))
                }, this))
            },
            renderView: function(n) {
                var e = this.get("board"),
                    t = new o({
                        canEdit: i.canEditApplication(e),
                        boardsUri: this.get("boardsUri")
                    }),
                    a = new r({
                        $el: this.$el,
                        model: t
                    });
                a.board = e, a.render(), this.$el.html(a.el), n()
            }
        });
        return e.extend(O.prototype, _), e.extend(O.prototype, l), O
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(4), t(128), t(68), t(9), t(200), t(18)], r = function(n, e, t, o, r, i, a, s, E) {
        "use strict";
        var _ = t.Model.extend({
            defaults: {
                id: null,
                el: null,
                boardJson: null,
                boardModerators: null
            },
            render: function(n) {
                var e, t, o = this.get("id");
                this.$el.addClass("riot-apollo").addClass("board-admin"), this.get("boardJson") && (e = this.get("boardJson").application, t = this.get("boardJson").moderators);
                new s({
                    el: this.$el,
                    id: o,
                    boardModeratorsJson: t,
                    boardJson: e
                })
            }
        });
        return _
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(203), t(205), t(5), t(35), t(8), t(175), t(174)], r = function(n, e, t, o, r, i, a, s, E, _) {
        "use strict";
        var l = t.Model.extend({
            render: function(n) {
                this.model = new o;
                var t = this.get("feedbackUrl");
                t && this.model.set("feedbackUrl", t), a.ensureProperty("services.boards.uri", e.bind(function(t) {
                    t && this.model.set("boardsUri", i.services.boards.uri), this.loadUserInfo(e.bind(function() {
                        this.loadBoardInfo(e.bind(function() {
                            this.getReportCount(n)
                        }, this))
                    }, this))
                }, this))
            },
            getReportCount: function(n) {
                var t = this.get("board"),
                    o = s.canModerateApplication(t.get("id"));
                this.model.set("canMod", o), o ? t.reportCount(e.bind(function(e) {
                    this.model.set("reportCount", e), this.renderView(n)
                }, this)) : this.renderView(n)
            },
            renderView: function(n) {
                this.$el.addClass("board-navigation");
                var e = (this.get("board"), new r({
                    el: this.el,
                    model: this.model
                }));
                e.board = this.get("board"), e.$el = this.$el, e.render(), n()
            }
        });
        return e.extend(l.prototype, E), e.extend(l.prototype, _), l
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(207)], r = function(n, e, t, o) {
        "use strict";
        var r = t.Model.extend({
            defaults: {
                boardId: null,
                el: null
            },
            render: function(n) {
                var e = this.get("boardPinJson");
                this.$el.addClass("riot-apollo").addClass("riot-board-pin");
                new o({
                    el: this.$el,
                    boardPinJSON: e
                });
                n()
            }
        });
        return r
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(4), t(176), t(30)], r = function(n, e, t, o, r, i) {
        "use strict";
        var a = t.Model.extend({
            defaults: {
                reveal: !1
            },
            render: function(n) {
                n = n || function() {}, this.$el.addClass("riot-apollo").addClass("markdown-content");
                var e = new r({
                    el: this.get("el"),
                    model: this
                });
                return e.render(), n(), this
            }
        });
        return a
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(3), t(208)], r = function(n, e, t) {
        "use strict";
        var o = e.Model.extend({
            defaults: {
                closeButton: !1
            },
            render: function() {
                var n = new t({
                    el: this.get("el"),
                    model: this
                });
                n.render()
            }
        });
        return o
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(210)], r = function(n, e, t, o) {
        "use strict";
        var r = t.Model.extend({
            defaults: {
                id: null,
                el: null
            },
            render: function(n) {
                this.$el.addClass("riot-apollo").addClass("board-navigation");
                var e = new o({
                    el: this.$el
                });
                e.render(), n()
            }
        });
        return r
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(4), t(1), t(2), t(3), t(179), t(211), t(180), t(212)], r = function(n, e, t, o, r, i, a, s) {
        "use strict";
        var E = o.Model.extend({
            defaults: {
                el: null,
                showUnreadCount: !1,
                modal: !1
            },
            render: function() {
                var n = this,
                    e = null,
                    t = new i;
                t.fetchUnreadCount(function() {
                    n.get("showUnreadCount") ? e = new s({
                        collection: t
                    }) : (n.$el.addClass("player-messaging box main"), e = new a({
                        collection: t,
                        isModal: n.get("modal")
                    })), e.setElement(n.$el), e.render()
                })
            }
        });
        return E
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(5), t(1), t(2), t(3), t(36), t(217), t(218), t(221), t(220), t(215)], r = function(n, e, t, o, r, i, a, s, E) {
        "use strict";
        var _ = o.Model.extend({
            defaults: {
                el: null,
                pollId: null,
                pollWidget: "create"
            },
            render: function() {
                "show" === this.get("pollWidget") ? this.selectionBuilder() : "create" === this.get("pollWidget") && this.creationBuilder()
            },
            selectionBuilder: function() {
                var e = this.get("pollId");
                if (t.isString(e)) {
                    var o = new a;
                    this.$el.data("poll-proxy", o);
                    var r = new i,
                        E = new s({
                            model: r
                        });
                    E.setElement(this.$el), E.model.isNew() && (E.model.set("id", e), E.model.urlRoot = n.services.polls.uri, E.model.fetch({
                        success: function(n) {
                            E.model.selection.fetch({
                                success: function(n) {
                                    E.model.applySelectionToChoices(), E.render(), E.startListening()
                                },
                                error: function() {
                                    E.startListening(), E.render()
                                }
                            })
                        }
                    }))
                }
            },
            creationBuilder: function() {
                var t = new a;
                this.$el.data("poll-proxy", t);
                var o = new i;
                o.urlRoot = n.services.polls.uri;
                var r = this.$el.data("poll-id-selector");
                r && (e(r).val(""), o.set("externalIdMemoSelector", r)), t.poll = o;
                var s = new E({
                    model: o
                });
                s.setElement(this.$el), s.render(), t.pollView = s
            }
        });
        return _
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(4), t(9), t(223)], r = function(n, e, t, o, r, i) {
        "use strict";
        var a = t.Model.extend({
            defaults: {
                id: null,
                realm: null,
                el: null
            },
            render: function(n) {
                var e = this.get("pvpnetId"),
                    t = this.get("pvpnetRealm"),
                    a = this.get("pvpnetRealmTrans"),
                    s = this.get("userGroupName"),
                    E = this.get("userGroupColor"),
                    _ = this.get("userGroupIcon");
                if (!t || !e) return void o.error("Profile Hover requires valid data-apollo-pvpnet-id and data-apollo-pvpnet-realm");
                a && "" !== a || (a = t), this.$el.addClass("profile-hover");
                var l = new r({
                    id: e,
                    realm: t,
                    realmTrans: a,
                    groupName: s,
                    groupColor: E,
                    groupIcon: _
                });
                new i({
                    el: this.get("el"),
                    model: l
                })
            }
        });
        return a
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(4), t(173)], r = function(n, e, t, o, r) {
        "use strict";
        var i = t.Model.extend({
            defaults: {
                reveal: !1
            },
            render: function(n) {
                n = n || function() {}, this.$el.addClass("riot-apollo").addClass("truncated-content");
                var e = this.$el.data("truncate") || 700,
                    t = this.$el.html();
                return this.$el.html(r(t, e)), n(), this
            }
        });
        return i
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(4), t(177), t(18)], r = function(n, e, t, o, r, i) {
        "use strict";
        var a = t.Model.extend({
            defaults: {
                id: null,
                el: null,
                userType: "User"
            },
            render: function(n) {
                this.get("id");
                this.$el.addClass("riot-apollo").addClass("user-select");
                var e = new r({
                    el: this.$el
                });
                e.render()
            }
        });
        return a
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(4), t(224), t(226)], r = function(n, e, t, o, r, i) {
        "use strict";
        var a = t.Model.extend({
            defaults: {
                discussionId: null,
                applicationId: null,
                commentId: null,
                el: null
            },
            render: function(n) {
                var t = this,
                    a = this.get("applicationId"),
                    s = this.get("discussionId"),
                    E = this.get("commentId"),
                    _ = this.get("upVotes"),
                    l = this.get("downVotes"),
                    O = this.get("userVote");
                if (e.isUndefined(a) || e.isUndefined(s) || e.isUndefined(_) || e.isUndefined(l)) return void o.error("Voting requires valid data-apollo-application-id and data-apollo-discussion-id");
                this.$el.addClass("riot-apollo").addClass("voting");
                var u = new r({
                        applicationId: a,
                        discussionId: s,
                        commentId: E,
                        upVotes: _,
                        downVotes: l,
                        userVote: O
                    }),
                    R = new i({
                        model: u
                    });
                t.$el.html(R.render().el)
            }
        });
        return a
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [], r = function() {
        "use strict";
        return {
            prefixAgo: "pÅ™ed",
            prefixFromNow: null,
            suffixAgo: null,
            suffixFromNow: null,
            seconds: "mÃ©nÄ› neÅ¾ minutou",
            minute: "minutou",
            minutes: "%d minutami",
            hour: "hodinou",
            hours: "%d hodinami",
            day: "1 dnem",
            days: "%d dny",
            month: "1 mÄ›sÃ­cem",
            months: "%d mÄ›sÃ­ci",
            year: "1 rokem",
            years: "%d roky"
        }
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [], r = function() {
        "use strict";
        return {
            prefixAgo: null,
            prefixFromNow: null,
            suffixAgo: "",
            suffixFromNow: "ab jetzt",
            seconds: "vor weniger als 1 Minute",
            minute: "vor etwa einer Minute",
            minutes: "vor %d Minuten",
            hour: "vor etwa einer Stunde",
            hours: "vor etwa %d Stunden",
            day: "vor einem Tag",
            days: "vor %d Tagen",
            month: "vor etwa einem Monat",
            months: "vor %d Monaten",
            year: "vor etwa einem Jahr",
            years: "vor %d Jahren"
        }
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [], r = function() {
        "use strict";
        return {
            prefixAgo: null,
            prefixFromNow: null,
            suffixAgo: "Ï€ÏÎ¹Î½",
            suffixFromNow: "Î±Ï€ÏŒ Ï„ÏŽÏÎ±",
            seconds: "Î»Î¹Î³ÏŒÏ„ÎµÏÎ¿ Î±Ï€ÏŒ Î­Î½Î± Î»ÎµÏ€Ï„ÏŒ",
            minute: "Ï€ÎµÏÎ¯Ï€Î¿Ï… Î­Î½Î± Î»ÎµÏ€Ï„ÏŒ",
            minutes: "%d Î»ÎµÏ€Ï„Î¬",
            hour: "Ï€ÎµÏÎ¯Ï€Î¿Ï… Î¼Î¯Î± ÏŽÏÎ±",
            hours: "Ï€ÎµÏÎ¯Ï€Î¿Ï… %d ÏŽÏÎµÏ‚",
            day: "Î¼Î¯Î± Î·Î¼Î­ÏÎ±",
            days: "%d Î·Î¼Î­ÏÎµÏ‚",
            month: "Ï€ÎµÏÎ¯Ï€Î¿Ï… Î­Î½Î± Î¼Î®Î½Î±",
            months: "%d Î¼Î®Î½ÎµÏ‚",
            year: "Ï€ÎµÏÎ¯Ï€Î¿Ï… Î­Î½Î± Ï‡ÏÏŒÎ½Î¿",
            years: "%d Ï‡ÏÏŒÎ½Î¹Î±"
        }
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [], r = function() {
        "use strict";
        return {
            prefixAgo: null,
            prefixFromNow: null,
            suffixAgo: "ago",
            suffixFromNow: "from now",
            seconds: "less than a minute",
            minute: "about a minute",
            minutes: "%d minutes",
            hour: "about an hour",
            hours: "about %d hours",
            day: "a day",
            days: "%d days",
            month: "about a month",
            months: "%d months",
            year: "about a year",
            years: "%d years",
            wordSeparator: " ",
            numbers: []
        }
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [], r = function() {
        "use strict";
        return {
            prefixAgo: null,
            prefixFromNow: null,
            suffixAgo: "ago",
            suffixFromNow: "from now",
            seconds: "less than a minute",
            minute: "about a minute",
            minutes: "%d minutes",
            hour: "about an hour",
            hours: "about %d hours",
            day: "a day",
            days: "%d days",
            month: "about a month",
            months: "%d months",
            year: "about a year",
            years: "%d years"
        }
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [], r = function() {
        "use strict";
        return {
            prefixAgo: null,
            prefixFromNow: null,
            suffixAgo: "ago",
            suffixFromNow: "from now",
            seconds: "less than a minute",
            minute: "about a minute",
            minutes: "%d minutes",
            hour: "about an hour",
            hours: "about %d hours",
            day: "a day",
            days: "%d days",
            month: "about a month",
            months: "%d months",
            year: "about a year",
            years: "%d years",
            wordSeparator: " ",
            numbers: []
        }
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, 91, function(n, e, t) {
    var o, r;
    o = [], r = function() {
        "use strict";
        return {
            prefixAgo: "hace",
            prefixFromNow: "dentro de",
            suffixAgo: "",
            suffixFromNow: "",
            seconds: "menos de un minuto",
            minute: "un minuto",
            minutes: "unos %d minutos",
            hour: "una hora",
            hours: "%d horas",
            day: "un dÃ­a",
            days: "%d dÃ­as",
            month: "un mes",
            months: "%d meses",
            year: "un aÃ±o",
            years: "%d aÃ±os"
        }
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [], r = function() {
        "use strict";
        return {
            prefixAgo: "hace",
            prefixFromNow: "desde ahora",
            suffixAgo: null,
            suffixFromNow: "desde ahora",
            seconds: "menos de un minuto",
            minute: "aprox. un minuto",
            minutes: "%d minutos",
            hour: "aprox. una hora",
            hours: "aprox %d horas",
            day: "un dÃ­a",
            days: "%d dÃ­as",
            month: "un mes",
            months: "%d meses",
            year: "aprox. un aÃ±o",
            years: "%d aÃ±os"
        }
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [], r = function() {
        "use strict";
        return {
            prefixAgo: "il y a",
            prefixFromNow: "d'ici",
            seconds: "moins d'une minute",
            minute: "environ une minute",
            minutes: "environ %d minutes",
            hour: "environ une heure",
            hours: "environ %d heures",
            day: "environ un jour",
            days: "environ %d jours",
            month: "environ un mois",
            months: "environ %d mois",
            year: "un an",
            years: "%d ans"
        }
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [], r = function() {
        "use strict";
        return {
            prefixAgo: null,
            prefixFromNow: null,
            suffixAgo: null,
            suffixFromNow: null,
            seconds: "kevesebb mint egy perce",
            minute: "kÃ¶rÃ¼lbelÃ¼l egy perce",
            minutes: "%d perce",
            hour: "kÃ¶rÃ¼lbelÃ¼l egy Ã³rÃ¡ja",
            hours: "kÃ¶rÃ¼lbelÃ¼l %d Ã³rÃ¡ja",
            day: "kÃ¶rÃ¼lbelÃ¼l egy napja",
            days: "%d napja",
            month: "kÃ¶rÃ¼lbelÃ¼l egy hÃ³napja",
            months: "%d hÃ³napja",
            year: "kÃ¶rÃ¼lbelÃ¼l egy Ã©ve",
            years: "%d Ã©ve"
        }
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [], r = function() {
        "use strict";
        return {
            suffixAgo: "fa",
            suffixFromNow: "da ora",
            seconds: "meno di un minuto",
            minute: "circa un minuto",
            minutes: "%d minuti",
            hour: "circa un'ora",
            hours: "circa %d ore",
            day: "un giorno",
            days: "%d giorni",
            month: "circa un mese",
            months: "%d mesi",
            year: "circa un anno",
            years: "%d anni"
        }
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [], r = function() {
        "use strict";
        return {
            prefixAgo: null,
            prefixFromNow: null,
            suffixAgo: "å‰",
            suffixFromNow: "ä»Šå¾Œ",
            seconds: "1åˆ†ä»¥å†…",
            minute: "1åˆ†",
            minutes: "%dåˆ†",
            hour: "1æ™‚é–“",
            hours: "%dæ™‚é–“",
            day: "1æ—¥",
            days: "%dæ—¥",
            month: "ï¼‘ãƒ¶æœˆ",
            months: "%dãƒ¶æœˆ",
            year: "1å¹´",
            years: "%då¹´"
        }
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [], r = function() {
        "use strict";

        function n(n, e, t) {
            var o = n % 10;
            return o > 1 && 5 > o && (n > 20 || 10 > n) ? e : t
        }
        return {
            prefixAgo: null,
            prefixFromNow: "za",
            suffixAgo: "temu",
            suffixFromNow: null,
            seconds: "mniej niÅ¼ minutÄ™",
            minute: "minutÄ™",
            minutes: function(e) {
                return n(e, "%d minuty", "%d minut")
            },
            hour: "godzinÄ™",
            hours: function(e) {
                return n(e, "%d godziny", "%d godzin")
            },
            day: "dzieÅ„",
            days: "%d dni",
            month: "miesiÄ…c",
            months: function(e) {
                return n(e, "%d miesiÄ…ce", "%d miesiÄ™cy")
            },
            year: "rok",
            years: function(e) {
                return n(e, "%d lata", "%d lat")
            }
        }
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [], r = function() {
        "use strict";
        return {
            suffixAgo: "atrÃ¡s",
            suffixFromNow: "a partir de agora",
            seconds: "menos de um minuto",
            minute: "cerca de um minuto",
            minutes: "%d minutos",
            hour: "cerca de uma hora",
            hours: "cerca de %d horas",
            day: "um dia",
            days: "%d dias",
            month: "cerca de um mÃªs",
            months: "%d meses",
            year: "cerca de um ano",
            years: "%d anos"
        }
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [], r = function() {
        "use strict";
        return {
            prefixAgo: "acum",
            prefixFromNow: "in timp de",
            suffixAgo: "",
            suffixFromNow: "",
            seconds: "mai putin de un minut",
            minute: "un minut",
            minutes: "%d minute",
            hour: "o ora",
            hours: "%d ore",
            day: "o zi",
            days: "%d zile",
            month: "o lunÄƒ",
            months: "%d luni",
            year: "un an",
            years: "%d ani"
        }
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [], r = function() {
        "use strict";

        function n(n, e, t, o) {
            var r = n % 10;
            return 1 == r && (1 == n || n > 20) ? e : r > 1 && 5 > r && (n > 20 || 10 > n) ? t : o
        }
        return {
            prefixAgo: null,
            prefixFromNow: "Ñ‡ÐµÑ€ÐµÐ·",
            suffixAgo: "Ð½Ð°Ð·Ð°Ð´",
            suffixFromNow: null,
            seconds: "Ð¼ÐµÐ½ÑŒÑˆÐµ Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹",
            minute: "Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ",
            minutes: function(e) {
                return n(e, "%d Ð¼Ð¸Ð½ÑƒÑ‚Ð°", "%d Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹", "%d Ð¼Ð¸Ð½ÑƒÑ‚")
            },
            hour: "Ñ‡Ð°Ñ",
            hours: function(e) {
                return n(e, "%d Ñ‡Ð°Ñ", "%d Ñ‡Ð°ÑÐ°", "%d Ñ‡Ð°ÑÐ¾Ð²")
            },
            day: "Ð´ÐµÐ½ÑŒ",
            days: function(e) {
                return n(e, "%d Ð´ÐµÐ½ÑŒ", "%d Ð´Ð½Ñ", "%d Ð´Ð½ÐµÐ¹")
            },
            month: "Ð¼ÐµÑÑÑ†",
            months: function(e) {
                return n(e, "%d Ð¼ÐµÑÑÑ†", "%d Ð¼ÐµÑÑÑ†Ð°", "%d Ð¼ÐµÑÑÑ†ÐµÐ²")
            },
            year: "Ð³Ð¾Ð´",
            years: function(e) {
                return n(e, "%d Ð³Ð¾Ð´", "%d Ð³Ð¾Ð´Ð°", "%d Ð»ÐµÑ‚")
            }
        }
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [], r = function() {
        "use strict";
        return {
            suffixAgo: "Ã¶nce",
            suffixFromNow: null,
            seconds: "1 dakikadan",
            minute: "1 dakika",
            minutes: "%d dakika",
            hour: "1 saat",
            hours: "%d saat",
            day: "1 gÃ¼n",
            days: "%d gÃ¼n",
            month: "1 ay",
            months: "%d ay",
            year: "1 yÄ±l",
            years: "%d yÄ±l"
        }
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r, i;
    /**
     * Timeago is a jQuery plugin that makes it easy to support automatically
     * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
     *
     * @name timeago
     * @version 1.4.0
     * @requires jQuery v1.2.3+
     * @author Ryan McGeary
     * @license MIT License - http://www.opensource.org/licenses/mit-license.php
     *
     * For usage and examples, visit:
     * http://timeago.yarp.com/
     *
     * Copyright (c) 2008-2013, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
     */
    ! function(a) {
        r = [t(1)], o = a, i = "function" == typeof o ? o.apply(e, r) : o, !(void 0 !== i && (n.exports = i))
    }(function(n) {
        function e() {
            var e = t(this),
                a = i.settings;
            return isNaN(e.datetime) || (0 == a.cutoff || r(e.datetime) < a.cutoff) && n(this).text(o(e.datetime)), this
        }

        function t(e) {
            if (e = n(e), !e.data("timeago")) {
                e.data("timeago", {
                    datetime: i.datetime(e)
                });
                var t = n.trim(e.text());
                i.settings.localeTitle ? e.attr("title", e.data("timeago").datetime.toLocaleString()) : !(t.length > 0) || i.isTime(e) && e.attr("title") || e.attr("title", t)
            }
            return e.data("timeago")
        }

        function o(n) {
            return i.inWords(r(n))
        }

        function r(n) {
            return (new Date).getTime() - n.getTime()
        }
        n.timeago = function(e) {
            return o(e instanceof Date ? e : "string" == typeof e ? n.timeago.parse(e) : "number" == typeof e ? new Date(e) : n.timeago.datetime(e))
        };
        var i = n.timeago;
        n.extend(n.timeago, {
            settings: {
                refreshMillis: 6e4,
                allowPast: !0,
                allowFuture: !1,
                localeTitle: !1,
                cutoff: 0,
                strings: {
                    prefixAgo: null,
                    prefixFromNow: null,
                    suffixAgo: "ago",
                    suffixFromNow: "from now",
                    inPast: "any moment now",
                    seconds: "less than a minute",
                    minute: "about a minute",
                    minutes: "%d minutes",
                    hour: "about an hour",
                    hours: "about %d hours",
                    day: "a day",
                    days: "%d days",
                    month: "about a month",
                    months: "%d months",
                    year: "about a year",
                    years: "%d years",
                    wordSeparator: " ",
                    numbers: []
                }
            },
            inWords: function(e) {
                function t(t, r) {
                    var i = n.isFunction(t) ? t(r, e) : t,
                        a = o.numbers && o.numbers[r] || r;
                    return i.replace(/%d/i, a)
                }
                if (!this.settings.allowPast && !this.settings.allowFuture) throw "timeago allowPast and allowFuture settings can not both be set to false.";
                var o = this.settings.strings,
                    r = o.prefixAgo,
                    i = o.suffixAgo;
                if (this.settings.allowFuture && 0 > e && (r = o.prefixFromNow, i = o.suffixFromNow), !this.settings.allowPast && e >= 0) return this.settings.strings.inPast;
                var a = Math.abs(e) / 1e3,
                    s = a / 60,
                    E = s / 60,
                    _ = E / 24,
                    l = _ / 365,
                    O = 45 > a && t(o.seconds, Math.round(a)) || 90 > a && t(o.minute, 1) || 45 > s && t(o.minutes, Math.round(s)) || 90 > s && t(o.hour, 1) || 24 > E && t(o.hours, Math.round(E)) || 42 > E && t(o.day, 1) || 30 > _ && t(o.days, Math.round(_)) || 45 > _ && t(o.month, 1) || 365 > _ && t(o.months, Math.round(_ / 30)) || 1.5 > l && t(o.year, 1) || t(o.years, Math.round(l)),
                    u = o.wordSeparator || "";
                return void 0 === o.wordSeparator && (u = " "), n.trim([r, O, i].join(u))
            },
            parse: function(e) {
                var t = n.trim(e);
                return t = t.replace(/\.\d+/, ""), t = t.replace(/-/, "/").replace(/-/, "/"), t = t.replace(/T/, " ").replace(/Z/, " UTC"), t = t.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"), t = t.replace(/([\+\-]\d\d)$/, " $100"), new Date(t)
            },
            datetime: function(e) {
                var t = i.isTime(e) ? n(e).attr("datetime") : n(e).attr("title");
                return i.parse(t)
            },
            isTime: function(e) {
                return "time" === n(e).get(0).tagName.toLowerCase()
            }
        });
        var a = {
            init: function() {
                var t = n.proxy(e, this);
                t();
                var o = i.settings;
                o.refreshMillis > 0 && (this._timeagoInterval = setInterval(t, o.refreshMillis))
            },
            update: function(t) {
                var o = i.parse(t);
                n(this).data("timeago", {
                    datetime: o
                }), i.settings.localeTitle && n(this).attr("title", o.toLocaleString()), e.apply(this)
            },
            updateFromDOM: function() {
                n(this).data("timeago", {
                    datetime: i.parse(i.isTime(this) ? n(this).attr("datetime") : n(this).attr("title"))
                }), e.apply(this)
            },
            dispose: function() {
                this._timeagoInterval && (window.clearInterval(this._timeagoInterval), this._timeagoInterval = null)
            }
        };
        n.fn.timeago = function(n, e) {
            var t = n ? a[n] : a.init;
            if (!t) throw new Error("Unknown function name '" + n + "' for timeago");
            return this.each(function() {
                t.call(this, e)
            }), this
        }, document.createElement("abbr"), document.createElement("time")
    })
}, function(n, e) {
    ! function(e) {
        "use strict";

        function t(n) {
            n = n || {}, this.phrases = {}, this.extend(n.phrases || {}), this.currentLocale = n.locale || "en", this.allowMissing = !!n.allowMissing, this.warn = n.warn || _
        }

        function o(n) {
            var e, t, o, r = {};
            for (e in n)
                if (n.hasOwnProperty(e)) {
                    t = n[e];
                    for (o in t) r[t[o]] = e
                }
            return r
        }

        function r(n) {
            var e = /^\s+|\s+$/g;
            return n.replace(e, "")
        }

        function i(n, e, t) {
            var o, i, a;
            return null != t && n ? (i = n.split(O), a = i[s(e, t)] || i[0], o = r(a)) : o = n, o
        }

        function a(n) {
            var e = o(R);
            return e[n] || e.en
        }

        function s(n, e) {
            return u[a(n)](e)
        }

        function E(n, e) {
            for (var t in e) "_" !== t && e.hasOwnProperty(t) && (n = n.replace(new RegExp("%\\{" + t + "\\}", "g"), e[t]));
            return n
        }

        function _(n) {
            e.console && e.console.warn && e.console.warn("WARNING: " + n)
        }

        function l(n) {
            var e = {};
            for (var t in n) e[t] = n[t];
            return e
        }
        t.VERSION = "0.4.1", t.prototype.locale = function(n) {
            return n && (this.currentLocale = n), this.currentLocale
        }, t.prototype.extend = function(n, e) {
            var t;
            for (var o in n) n.hasOwnProperty(o) && (t = n[o], e && (o = e + "." + o), "object" == typeof t ? this.extend(t, o) : this.phrases[o] = t)
        }, t.prototype.clear = function() {
            this.phrases = {}
        }, t.prototype.replace = function(n) {
            this.clear(), this.extend(n)
        }, t.prototype.t = function(n, e) {
            var t;
            e = null == e ? {} : e, "number" == typeof e && (e = {
                smart_count: e
            });
            var o = this.phrases[n] || e._ || (this.allowMissing ? n : "");
            return "" === o ? (this.warn('Missing translation for key: "' + n + '"'), t = n) : (e = l(e), t = i(o, this.currentLocale, e.smart_count), t = E(t, e)), t
        };
        var O = "||||",
            u = {
                chinese: function(n) {
                    return 0
                },
                german: function(n) {
                    return 1 !== n ? 1 : 0
                },
                french: function(n) {
                    return n > 1 ? 1 : 0
                },
                russian: function(n) {
                    return n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && 4 >= n % 10 && (10 > n % 100 || n % 100 >= 20) ? 1 : 2
                },
                czech: function(n) {
                    return 1 === n ? 0 : n >= 2 && 4 >= n ? 1 : 2
                },
                polish: function(n) {
                    return 1 === n ? 0 : n % 10 >= 2 && 4 >= n % 10 && (10 > n % 100 || n % 100 >= 20) ? 1 : 2
                },
                icelandic: function(n) {
                    return n % 10 !== 1 || n % 100 === 11 ? 1 : 0
                }
            },
            R = {
                chinese: ["fa", "id", "ja", "ko", "lo", "ms", "th", "tr", "zh"],
                german: ["da", "de", "en", "es", "fi", "el", "he", "hu", "it", "nl", "no", "pt", "sv"],
                french: ["fr", "tl", "pt-br"],
                russian: ["hr", "ru"],
                czech: ["cs"],
                polish: ["pl"],
                icelandic: ["is"]
            };
        "undefined" != typeof n && n.exports ? n.exports = t : e.Polyglot = t
    }(this)
}, function(n, e) {
    n.exports = '{\n    "ADD": "PÅ™idat",\n    "ADD_BUTTON": "PÅ™idat",\n    "ADD_CHOICE": "PÅ™idat moÅ¾nost",\n    "ADDING": "PÅ™idÃ¡vÃ¡nÃ­",\n    "TOO_MANY_CHOICES": "MÅ¯Å¾eÅ¡ pouÅ¾Ã­t maximÃ¡lnÄ›  %limit% moÅ¾nostÃ­",\n    "AVATAR": "avatar",\n    "BEST": "NEJLEPÅ Ã",\n    "CANCEL": "ZruÅ¡it",\n    "CANCEL_BUTTON": "ZruÅ¡it",\n    "CONFIRM_REVOKE": "ZruÅ¡it?",\n    "CLOSE": "ZavÅ™Ã­t",\n    "COMMENTS": "komentÃ¡Å™Å¯",\n    "DELETED": "smazÃ¡no",\n    "DISCUSS": "Diskuze",\n    "EDIT": "upravit",\n    "ERROR": "BohuÅ¾el doÅ¡lo k chybÄ›.",\n    "ERROR401": "To je smutnÃ©... je zapotÅ™ebÃ­ vyÅ¡Å¡Ã­ ÃºroveÅˆ.",\n    "ERROR403": "To je smutnÃ©... musÃ­Å¡ bÃ½t na %level%. Ãºrovni.",\n    "ERROR403_OTHER": "To je smutnÃ©... k tÃ©to akci nemÃ¡Å¡ povolenÃ­.",\n    "ERROR_RATELIMIT": "Zpomal! NeÅ¾ odeÅ¡leÅ¡ dalÅ¡Ã­ komentÃ¡Å™, musÃ­Å¡ chvÃ­li poÄkat.",\n    "ERROR429": "Zkus to prosÃ­m za chvÃ­li znovu.",\n    "FACECHECKING": "Nevstupuj do kÅ™ovÃ­ bezhlavÄ› a stejnÄ› tak buÄ opatrnÃ½ i na webu. Pamatuj, Å¾e ostatnÃ­ strÃ¡nky nemusejÃ­ bÃ½t tak dobÅ™e chrÃ¡nÄ›ny jako ty naÅ¡e, takÅ¾e si dobÅ™e rozmysli, neÅ¾ klikneÅ¡ na neznÃ¡mÃ½ odkaz.",\n    "FROM": "Od",\n    "MODERATOR": "ModerÃ¡tor",\n    "MODERATORS": "ModerÃ¡toÅ™i",\n    "MORE": "dalÅ¡Ã­",\n    "NO": "Ne",\n    "NOTIFICATIONS": "SdÄ›lenÃ­",\n    "NOT_FOUND": "Nenalezeno",\n    "OWNER": "VlastnÃ­k",\n    "PLAYER": "HrÃ¡Ä",\n    "POST": "ZveÅ™ejnit",\n    "READ": "PÅ™eÄÃ­st",\n    "RECENT": "NEJNOVÄšJÅ Ã",\n    "REMOVE": "smazat",\n    "REPLY": "odpovÄ›dÄ›t",\n    "REQUIRED": "(PovinnÃ©)",\n    "SAVE": "uloÅ¾it",\n    "SEND": "Odeslat",\n    "SHOW": "Zobrazit",\n    "SOURCE": "Zdroj",\n    "TOTAL": "Celkem",\n    "UNREAD": "NepÅ™eÄtenÃ¡ upozornÄ›nÃ­",\n    "User": "UÅ¾ivatel",\n    "CHILD_COMMENT": "reakce",\n    "LEAVE_A_COMMENT": "PÅ™idej komentÃ¡Å™",\n    "LOGIN_TO_COMMENT": "Pro komentovÃ¡nÃ­ se pÅ™ihlaÅ¡",\n    "CHILD_COMMENTS": "reakce",\n    "MORE_COMMENTS_SHOW": "Zobrazit dalÅ¡Ã­ komentÃ¡Å™e",\n    "MORE_COMMENTS_COUNT": "%d komentÃ¡Å™e(Å¯)",\n    "NEW_COMMENTS": "novÃ© komentÃ¡Å™e",\n    "CHOICES_PROMPT": "MoÅ¾nosti:",\n    "EXPIRATION_DATE_PROMPT": "Datum vyprÅ¡enÃ­ (NepovinnÃ©):",\n    "QUESTION_PROMPT": "OtÃ¡zka",\n    "COMMENT_IS_BELOW_THRESHOLD": "PÅ™Ã­spÄ›vek je pÅ™Ã­liÅ¡ krÃ¡tkÃ½",\n    "CREATE_BUTTON": "VytvoÅ™it",\n    "VOTE_BUTTON": "Hlasovat",\n    "DELETE_COMMENT_CONFIRM": "Opravdu chceÅ¡ tento pÅ™Ã­spÄ›vek smazat?",\n    "LEAVING_SITE_CONFIRM": "RozumÃ­m a chci tam",\n    "EDITING_AS": "UpravujeÅ¡ jako",\n    "POSTING_AS": "PÅ™ispÃ­vÃ¡Å¡ jako",\n    "GOING_TO": "MÃ­Å™Ã­Å¡ do:",\n    "LEAVING_SITE": "OpouÅ¡tÃ­Å¡ Riot Games",\n    "LEVEL_REGION": "ÃšroveÅˆ %level%<br/> %region%",\n    "NEVER_SHOW_AGAIN": "PÅ™Ã­Å¡tÄ› nezobrazovat",\n    "NO_UNREAD": "Å½Ã¡dnÃ¡ nepÅ™eÄtenÃ¡ upozornÄ›nÃ­!",\n    "REMOVE_ALL": "Smazat vÅ¡e",\n    "REVOKE": "ZruÅ¡it",\n    "REVOKING": "RuÅ¡enÃ­",\n    "SORTED_BY": "seÅ™azeno podle",\n    "VOTES_FIVE_OR_MORE": "hlasy",\n    "VOTES_FOUR": "hlasy",\n    "VOTES_THREE": "hlasy",\n    "VOTES_TWO": "hlasy",\n    "VOTES_ZERO": "hlasy",\n    "VOTE_SINGULAR": "hlas",\n    "VOTES_FIVE_OR_MORE_SUB": "%d hlasÅ¯",\n    "VOTES_FOUR_SUB": "%d hlasy",\n    "VOTES_THREE_SUB": "%d hlasy",\n    "VOTES_TWO_SUB": "%d hlasy",\n    "VOTES_ZERO_SUB": "%d hlasÅ¯",\n    "VOTE_SINGULAR_SUB": "%d hlas",\n    "SAVE_CHANGES": "UloÅ¾it zmÄ›ny",\n    "DETAILS": "Podrobnosti",\n    "CREATED_PREFIX": "VytvoÅ™eno: %s",\n    "URL_PREFIX": "URL: %s",\n    "DESCRIPTION": "Popis",\n    "GUIDELINES": "Rady",\n    "DESCRIPTION_PLACEHOLDER": "Pro tuto diskuzi dosud nebyl vytvoÅ™en Å¾Ã¡dnÃ½ popis.",\n    "GUIDELINES_PLACEHOLDER": "Pro tuto diskuzi dosud nebyla vytvoÅ™ena Å¾Ã¡dnÃ¡ pravidla.",\n    "NAVIGATION": "NAVIGACE",\n    "DISCUSSION": "Diskuze",\n    "ABOUT": "VÃ­ce informacÃ­",\n    "REPORTS_WITH_COUNT": "Reporty (%d)",\n    "ACTIVITY": "Aktivita",\n    "FEEDBACK": "ZpÄ›tnÃ¡ vazba",\n    "CLOSE_THIS_BOARD": "ZavÅ™Ã­t tuto diskuzi",\n    "YES": "Ano",\n    "DELETE_HEADER": "Smazat",\n    "AUTHOR_MESSAGE": "ZprÃ¡va pro autora",\n    "OFFENSE_LABEL": "PoruÅ¡enÃ­ pravidel",\n    "OFFENSE_PLACEHOLDER": "Vyber poruÅ¡enÃ­ pravidel...",\n    "MODERATION_COMMENT_LABEL": "KomentÃ¡Å™",\n    "BAN_LABEL": "Zablokovat tohoto hrÃ¡Äe?",\n    "BAN_DURATION_NONE": "Bez zablokovÃ¡nÃ­",\n    "BAN_DURATION_ONE_HOUR": "1 hodina",\n    "BAN_DURATION_TWENTY_FOUR_HOURS": "24 hodin",\n    "BAN_DURATION_ONE_WEEK": "1 tÃ½den",\n    "BAN_DURATION_PERMANENT": "PermanentnÄ›",\n    "GLOBAL_BAN_LABEL": "Zablokovat pÅ™Ã­stup na vÅ¡echny diskuze?",\n    "REPORT_HEADER": "NahlÃ¡sit",\n    "REPORT_OFFENSE_LABEL": "Vyber poruÅ¡enÃ­ pravidel:",\n    "REPORT_OFFENSE_PLACEHOLDER": "Vyber poruÅ¡enÃ­ pravidel...",\n    "REPORT_COMMENT_LABEL": "DodateÄnÃ© komentÃ¡Å™e:",\n    "REPORT": "NahlÃ¡sit",\n    "UNIVERSAL_RULE_JERK": "Nechovej se jako fracek",\n    "UNIVERSAL_RULE_MATURE": "Å½Ã¡dnÃ½ obsah jen pro dospÄ›lÃ©",\n    "UNIVERSAL_RULE_SPAM": "Å½Ã¡dnÃ½ spam",\n    "UNIVERSAL_RULE_GUIDELINES": "DodrÅ¾uj pravidla diskuze",\n    "UNIVERSAL_RULE_PROMOTION": "Propagace ÃºÄtu, produktu nebo sluÅ¾by",\n    "UNIVERSAL_RULE_REPORTING": "NahlaÅ¡ovÃ¡nÃ­ ostatnÃ­ch hrÃ¡ÄÅ¯",\n    "UNIVERSAL_RULE_DOWNLOADS": "NepovolenÃ© soubory ke staÅ¾enÃ­",\n    "UNIVERSAL_RULE_ILLEGAL": "NezÃ¡konnÃ© aktivity",\n    "UNIVERSAL_RULE_THREATS": "VyhroÅ¾ovÃ¡nÃ­",\n    "UNIVERSAL_RULE_PHISHING": "Phishing a podvody",\n    "NOTES_ONE": "poznÃ¡mka",\n    "NOTES_FEW": "poznÃ¡mky",\n    "NOTES_MANY": "poznÃ¡mek",\n    "DISCUSSION_BYLINE": "%author% %when% v sekci %board%",\n    "REPORTED_SUMMARY_ONE_NAME": "UÅ¾ivatel %name1% tento pÅ™Ã­spÄ›vek %when% nahlÃ¡sil (%reason%)",\n    "REPORTED_SUMMARY_TWO_NAMES": "UÅ¾ivatelÃ© %name1% a %name2% tento pÅ™Ã­spÄ›vek %when% nahlÃ¡sili (%reason%)",\n    "REPORTED_SUMMARY_MANY_NAMES": "UÅ¾ivatelÃ© %name1%, %name2% a %other% tento pÅ™Ã­spÄ›vek %when% nahlÃ¡sili (%reason%)",\n    "OTHER_ONE": "%d dalÅ¡Ã­",\n    "OTHER_FEW": "%d dalÅ¡Ã­",\n    "OTHER_MANY": "%d dalÅ¡Ã­ch",\n    "MODERATOR_ACTIONS_HEADER": "Akce moderÃ¡tora",\n    "THIRTY_DAYS": "30 dnÃ­",\n    "ACTION": "Akce",\n    "OFFENSE": "PoruÅ¡enÃ­ pravidel",\n    "MANAGE": "Spravovat",\n    "ACTION_EDITED_DISCUSSION": "UpravenÃ­ diskuze",\n    "ACTION_EDITED_COMMENT": "UpravenÃ­ komentÃ¡Å™e",\n    "ACTION_DELETED_DISCUSSION": "SmazÃ¡nÃ­ diskuze",\n    "ACTION_DELETED_COMMENT": "SmazÃ¡nÃ­ komentÃ¡Å™e",\n    "ACTION_BANNED_PLAYER": "ZablokovÃ¡nÃ­ hrÃ¡Äe",\n    "ACTION_DELETED_DISCUSSION_AND_BANNED": "SmazÃ¡nÃ­ diskuze a zablokovÃ¡nÃ­ hrÃ¡Äe",\n    "ACTION_DELETED_COMMENT_AND_BANNED": "SmazÃ¡nÃ­ komentÃ¡Å™e a zablokovÃ¡nÃ­ hrÃ¡Äe",\n    "ANY_TYPE": "LibovolnÃ½ typ",\n    "ANY_MODERATOR": "LibovolnÃ½ moderÃ¡tor",\n    "ANY_PLAYER": "LibovolnÃ½ hrÃ¡Ä",\n    "REPORT_TO_BOARD_OWNER": "NahlÃ¡sit majiteli diskuze",\n    "REPORT_TO_RIOT": "NahlÃ¡sit Riotu",\n    "DELETED_BY_INFO": "SmazÃ¡no uÅ¾ivatelem %name% %when% (%offense%)",\n    "EDITED_BY_INFO": "SmazÃ¡no uÅ¾ivatelem %name% %when%",\n    "BOARDS": "DiskuznÃ­ fÃ³rum",\n    "PIN": "PÅ™ipnout",\n    "UNPIN": "ZruÅ¡it pÅ™ipnutÃ­"\n}\n'
}, function(n, e) {
    n.exports = '{\n    "ADD": "HinzufÃ¼gen",\n    "ADD_BUTTON": "HinzufÃ¼gen",\n    "ADD_CHOICE": "Auswahl hinzufÃ¼gen",\n    "ADDING": "FÃ¼ge hinzu",\n    "TOO_MANY_CHOICES": "Du kannst nur %limit% wÃ¤hlen",\n    "AVATAR": "Avatar",\n    "BEST": "WERTUNG",\n    "CANCEL": "Abbrechen",\n    "CANCEL_BUTTON": "Abbrechen",\n    "CONFIRM_REVOKE": "ZurÃ¼cknehmen?",\n    "CLOSE": "SchlieÃŸen",\n    "COMMENTS": "Kommentare",\n    "DELETED": "gelÃ¶scht",\n    "DISCUSS": "Kommentare",\n    "EDIT": "Bearbeiten",\n    "ERROR": "Entschuldigung! Ein Fehler ist aufgetreten.",\n    "ERROR401": "Och, schade ... hierzu braucht es eine hÃ¶here Stufe.",\n    "ERROR403": "Och, schade ... hierzu musst du Stufe %level% erreicht haben.",\n    "ERROR403_OTHER": "Och, schade ... du bist nicht autorisiert!",\n    "ERROR_RATELIMIT": "Zu schnell! Bitte warte, bis du erneut kommentierst!",\n    "ERROR429": "Bitte warte und versuche es spÃ¤ter erneut.",\n    "FACECHECKING": "Blind ins hohe Gras zu stÃ¼rmen ist gefÃ¤hrlich. Das ist bei Abenteuern im Internet nicht anders. Andere Websites haben womÃ¶glich kein Auge auf ihre Sicherheit. Also pass auf, wenn du auf unbekannte Links klickst.",\n    "FROM": "Schenker",\n    "MODERATOR": "Moderator",\n    "MODERATORS": "Moderatoren",\n    "MORE": "mehr",\n    "NO": "Nein",\n    "NOTIFICATIONS": "Benachrichtigungen",\n    "NOT_FOUND": "Nicht gefunden",\n    "OWNER": "Besitzer",\n    "PLAYER": "Spieler",\n    "POST": "Senden",\n    "READ": "Lesen",\n    "RECENT": "AKTUELL",\n    "REMOVE": "LÃ¶schen",\n    "REPLY": "antworten",\n    "REQUIRED": "(Notwendig)",\n    "SAVE": "Speichern",\n    "SEND": "Senden",\n    "SHOW": "Zeige",\n    "SOURCE": "Ursprung",\n    "TOTAL": "Gesamt",\n    "UNREAD": "Ungelesene Benachrichtigungen",\n    "User": "Benutzer",\n    "CHILD_COMMENT": "Unterelement",\n    "LEAVE_A_COMMENT": "Kommentieren",\n    "LOGIN_TO_COMMENT": "Kommentieren",\n    "CHILD_COMMENTS": "Unterelemente",\n    "MORE_COMMENTS_SHOW": "Weitere Kommentare anzeigen",\n    "MORE_COMMENTS_COUNT": "%d weitere Kommentare",\n    "NEW_COMMENTS": "neue Kommentare",\n    "CHOICES_PROMPT": "Auswahl:",\n    "EXPIRATION_DATE_PROMPT": "Ablaufdatum (Optional):",\n    "QUESTION_PROMPT": "Frage",\n    "COMMENT_IS_BELOW_THRESHOLD": "Dieser Kommentar liegt unter dem Mindestniveau.",\n    "CREATE_BUTTON": "Erstellen",\n    "VOTE_BUTTON": "Stimme ab",\n    "DELETE_COMMENT_CONFIRM": "Bist du sicher, dass du diesen Kommentar lÃ¶schen mÃ¶chtest?",\n    "LEAVING_SITE_CONFIRM": "Ich verstehe und wage es.",\n    "EDITING_AS": "Editieren als",\n    "POSTING_AS": "Du schreibst als",\n    "GOING_TO": "Du gehst nach: ",\n    "LEAVING_SITE": "Du verlÃ¤sst Riot Games",\n    "LEVEL_REGION": "Stufe %level%<br/> %region%",\n    "NEVER_SHOW_AGAIN": "Nicht wieder anzeigen",\n    "NO_UNREAD": "Keine ungelesenen Benachrichtigungen!",\n    "REMOVE_ALL": "Alles lÃ¶schen",\n    "REVOKE": "ZurÃ¼cknehmen",\n    "REVOKING": "Nehme zurÃ¼ck",\n    "SORTED_BY": "Sortiert nach",\n    "VOTES_FIVE_OR_MORE": "Stimmen",\n    "VOTES_FOUR": "Stimmen",\n    "VOTES_THREE": "Stimmen",\n    "VOTES_TWO": "Stimmen",\n    "VOTES_ZERO": "Stimmen",\n    "VOTE_SINGULAR": "abstimmen",\n    "VOTES_FIVE_OR_MORE_SUB": "%d Stimmen",\n    "VOTES_FOUR_SUB": "%d Stimmen",\n    "VOTES_THREE_SUB": "%d Stimmen",\n    "VOTES_TWO_SUB": "%d Stimmen",\n    "VOTES_ZERO_SUB": "%d Stimmen",\n    "VOTE_SINGULAR_SUB": "%d Stimme",\n    "SAVE_CHANGES": "Ã„nderungen speichern",\n    "DETAILS": "Einzelheiten",\n    "CREATED_PREFIX": "Erstellt: %s",\n    "URL_PREFIX": "URL: %s",\n    "DESCRIPTION": "Beschreibung",\n    "GUIDELINES": "Richtlinien",\n    "DESCRIPTION_PLACEHOLDER": "Dieses Forum hat noch keine Beschreibung.",\n    "GUIDELINES_PLACEHOLDER": "Dieses Forum hat noch keine Richtlinien.",\n    "NAVIGATION": "NAVIGATION",\n    "DISCUSSION": "Diskussion",\n    "ABOUT": "Info",\n    "REPORTS_WITH_COUNT": "Meldungen (%d)",\n    "ACTIVITY": "AktivitÃ¤t",\n    "FEEDBACK": "Feedback",\n    "CLOSE_THIS_BOARD": "Dieses Forum schlieÃŸen",\n    "YES": "Ja",\n    "DELETE_HEADER": "LÃ¶schen",\n    "AUTHOR_MESSAGE": "Nachricht fÃ¼r den Verfasser",\n    "OFFENSE_LABEL": "Vergehen",\n    "OFFENSE_PLACEHOLDER": "Vergehen auswÃ¤hlen ...",\n    "MODERATION_COMMENT_LABEL": "Kommentieren",\n    "BAN_LABEL": "Diesen Spieler sperren?",\n    "BAN_DURATION_NONE": "Keine Sperre",\n    "BAN_DURATION_ONE_HOUR": "1 Stunde",\n    "BAN_DURATION_TWENTY_FOUR_HOURS": "24 Stunden",\n    "BAN_DURATION_ONE_WEEK": "1 Woche",\n    "BAN_DURATION_PERMANENT": "Permanent",\n    "GLOBAL_BAN_LABEL": "In allen Foren sperren?",\n    "REPORT_HEADER": "Melden",\n    "REPORT_OFFENSE_LABEL": "Vergehen auswÃ¤hlen:",\n    "REPORT_OFFENSE_PLACEHOLDER": "VerstoÃŸ wÃ¤hlen ...",\n    "REPORT_COMMENT_LABEL": "ZusÃ¤tzliche Kommentare:",\n    "REPORT": "Melden",\n    "UNIVERSAL_RULE_JERK": "Sei kein Vollpfosten",\n    "UNIVERSAL_RULE_MATURE": "Keine nicht-jugendfreien Inhalte",\n    "UNIVERSAL_RULE_SPAM": "Kein Spamming",\n    "UNIVERSAL_RULE_GUIDELINES": "Befolge die Forenrichtlinien",\n    "UNIVERSAL_RULE_PROMOTION": "Werbung fÃ¼r Konten, Produkte oder Dienste",\n    "UNIVERSAL_RULE_REPORTING": "Andere Spieler melden",\n    "UNIVERSAL_RULE_DOWNLOADS": "Illegale Downloads",\n    "UNIVERSAL_RULE_ILLEGAL": "Illegale AktivitÃ¤ten",\n    "UNIVERSAL_RULE_THREATS": "Bedrohungen",\n    "UNIVERSAL_RULE_PHISHING": "Phishing und Scamming",\n    "NOTES_ONE": "Hinweis",\n    "NOTES_FEW": "Hinweise",\n    "NOTES_MANY": "Hinweise",\n    "DISCUSSION_BYLINE": "Von %author% %when% unter %board%",\n    "REPORTED_SUMMARY_ONE_NAME": "Gemeldet durch %name1% %when% wegen %reason%",\n    "REPORTED_SUMMARY_TWO_NAMES": "Gemeldet durch %name1% und %name2% %when% wegen %reason%",\n    "REPORTED_SUMMARY_MANY_NAMES": "Gemeldet durch %name1%, %name2% und %other% %when% wegen %reason%",\n    "OTHER_ONE": "%d anderer",\n    "OTHER_FEW": "%d andere",\n    "OTHER_MANY": "%d andere",\n    "MODERATOR_ACTIONS_HEADER": "Moderatoraktionen",\n    "THIRTY_DAYS": "30 Tage",\n    "ACTION": "Aktion",\n    "OFFENSE": "Vergehen",\n    "MANAGE": "Verwalten",\n    "ACTION_EDITED_DISCUSSION": "Diskussion bearbeitet",\n    "ACTION_EDITED_COMMENT": "Kommentar bearbeitet",\n    "ACTION_DELETED_DISCUSSION": "Diskussion gelÃ¶scht",\n    "ACTION_DELETED_COMMENT": "Kommentar gelÃ¶scht",\n    "ACTION_BANNED_PLAYER": "Gesperrter Spieler",\n    "ACTION_DELETED_DISCUSSION_AND_BANNED": "Diskussion gelÃ¶scht und Spieler gesperrt",\n    "ACTION_DELETED_COMMENT_AND_BANNED": "Kommentar gelÃ¶scht und Spieler gesperrt",\n    "ANY_TYPE": "Jede Art",\n    "ANY_MODERATOR": "Jeder Moderator",\n    "ANY_PLAYER": "Jeder Spieler",\n    "REPORT_TO_BOARD_OWNER": "An Forenbesitzer melden",\n    "REPORT_TO_RIOT": "An Riot melden",\n    "DELETED_BY_INFO": "GelÃ¶scht von %name% %when% (%offense%)",\n    "EDITED_BY_INFO": "Von %name% %when% gelÃ¶scht",\n    "BOARDS": "Forum",\n    "PIN": "Anheften",\n    "UNPIN": "Abheften"\n}\n'
}, function(n, e) {
    n.exports = '{\n    "ADD": "Î ÏÎ¿ÏƒÎ¸Î®ÎºÎ·",\n    "ADD_BUTTON": "Î ÏÎ¿ÏƒÎ¸Î®ÎºÎ·",\n    "ADD_CHOICE": "Î ÏÎ¿ÏƒÎ¸Î®ÎºÎ· ÎµÏ€Î¹Î»Î¿Î³Î®Ï‚",\n    "ADDING": "Î ÏÎ¿ÏƒÎ¸Î®ÎºÎ· ÏƒÎµ ÎµÎ¾Î­Î»Î¹Î¾Î·",\n    "TOO_MANY_CHOICES": "ÎˆÏ‡ÎµÏ„Îµ Î¼Î­Ï‡ÏÎ¹ %limit% ÎµÏ€Î¹Î»Î¿Î³Î­Ï‚",\n    "AVATAR": "Î¬Î²Î±Ï„Î±Ï",\n    "BEST": "ÎšÎ‘Î›Î¥Î¤Î•Î¡Î‘",\n    "CANCEL": "Î†ÎºÏ…ÏÎ¿",\n    "CANCEL_BUTTON": "Î†ÎºÏ…ÏÎ¿",\n    "CONFIRM_REVOKE": "Î‘Î½Î¬ÎºÎ»Î·ÏƒÎ·;",\n    "CLOSE": "ÎšÎ»ÎµÎ¯ÏƒÎ¹Î¼Î¿",\n    "COMMENTS": "ÏƒÏ‡ÏŒÎ»Î¹Î±",\n    "DELETED": "Î´Î¹Î±Î³ÏÎ¬Ï†Î·ÎºÎµ",\n    "DISCUSS": "Î£Ï…Î¶Î®Ï„Î·ÏƒÎ·",\n    "EDIT": "ÎµÏ€ÎµÎ¾ÎµÏÎ³Î±ÏƒÎ¯Î±",\n    "ERROR": "Î›Ï…Ï€Î¿ÏÎ¼Î±ÏƒÏ„Îµ! Î ÏÎ¿Î­ÎºÏ…ÏˆÎµ Î­Î½Î± ÏƒÏ†Î¬Î»Î¼Î±.",\n    "ERROR401": "Î›Ï…Ï€Î¿ÏÎ¼Î±ÏƒÏ„Îµâ€¦ Ï€ÏÎ­Ï€ÎµÎ¹ Î½Î± ÎµÎ¯ÏƒÏ„Îµ Î¼ÎµÎ³Î±Î»ÏÏ„ÎµÏÎ¿Ï… ÎµÏ€Î¹Ï€Î­Î´Î¿Ï….",\n    "ERROR403": "Î›Ï…Ï€Î¿ÏÎ¼Î±ÏƒÏ„Îµâ€¦ Ï€ÏÎ­Ï€ÎµÎ¹ Î½Î± ÎµÎ¯ÏƒÏ„Îµ ÎµÏ€Î¹Ï€Î­Î´Î¿Ï… %level%.",\n    "ERROR403_OTHER": "Î”ÎµÎ½ ÎµÎ¯ÏƒÏ„Îµ ÎµÎ¾Î¿Ï…ÏƒÎ¹Î¿Î´Î¿Ï„Î·Î¼Î­Î½Î¿Î¹ Î³Î¹\' Î±Ï…Ï„ÏŒ.",\n    "ERROR_RATELIMIT": "Î Î±ÏÎ±ÎºÎ±Î»Î¿ÏÎ¼Îµ Ï€ÎµÏÎ¹Î¼Î­Î½ÎµÏ„Îµ Ï€ÏÎ¹Î½ ÏƒÏ‡Î¿Î»Î¹Î¬ÏƒÎµÏ„Îµ Î¾Î±Î½Î¬!",\n    "ERROR429": "Î Î±ÏÎ±ÎºÎ±Î»Î¿ÏÎ¼Îµ Ï€ÎµÏÎ¹Î¼Î­Î½ÎµÏ„Îµ ÎºÎ±Î¹ Î´Î¿ÎºÎ¹Î¼Î¬ÏƒÏ„Îµ Î¾Î±Î½Î¬.",\n    "FACECHECKING": "Î•Î¯Î½Î±Î¹ ÎµÏ€Î¹ÎºÎ¯Î½Î´Ï…Î½Î¿ Î½Î± Î¼Ï€Î±Î¯Î½ÎµÎ¹Ï‚ ÏƒÎµ Î¸Î¬Î¼Î½Î¿ Ï€Î¿Ï… Î´ÎµÎ½ Î­Ï‡ÎµÎ¹ Î¼Î¬Ï„Î¹. Î•Î¾Î¯ÏƒÎ¿Ï… ÎµÏ€Î¹ÎºÎ¯Î½Î´Ï…Î½Î¿ ÎµÎ¯Î½Î±Î¹ ÎºÎ±Î¹ Ï„Î¿ Î½Î± Î±Î½Î¿Î¯Î³ÎµÎ¹Ï‚ ÏƒÎµÎ»Î¯Î´ÎµÏ‚ Ï€Î¿Ï… Î´ÎµÎ½ Î³Î½Ï‰ÏÎ¯Î¶ÎµÎ¹Ï‚. Î†Î»Î»Î± site Î¼Ï€Î¿ÏÎµÎ¯ Î½Î± Î¼Î·Î½ ÎµÎ¯Î½Î±Î¹ Ï„ÏŒÏƒÎ¿ Ï€ÏÎ¿ÏƒÏ„Î±Ï„ÎµÏ…Î¼Î­Î½Î± ÏŒÏƒÎ¿ Ï„Î¿ Î´Î¹ÎºÏŒ Î¼Î±Ï‚, Î³Î¹\' Î±Ï…Ï„ÏŒ ÏƒÎºÎ­ÏˆÎ¿Ï… ÎºÎ±Î»Î¬ Ï€ÏÎ¹Î½ ÎºÎ¬Î½ÎµÎ¹Ï‚ ÎºÎ»Î¹Îº ÏƒÎµ link Ï€Î¿Ï… Î´ÎµÎ½ Î±Î½Î±Î³Î½Ï‰ÏÎ¯Î¶ÎµÎ¹Ï‚.",\n    "FROM": "Î‘Ï€ÏŒ",\n    "MODERATOR": "Î£Ï…Î½Ï„Î¿Î½Î¹ÏƒÏ„Î®Ï‚",\n    "MODERATORS": "Î£Ï…Î½Ï„Î¿Î½Î¹ÏƒÏ„Î­Ï‚",\n    "MORE": "Ï€ÎµÏÎ¹ÏƒÏƒÏŒÏ„ÎµÏÎ±",\n    "NO": "ÎŒÏ‡Î¹",\n    "NOTIFICATIONS": "Î•Î¹Î´Î¿Ï€Î¿Î¹Î®ÏƒÎµÎ¹Ï‚",\n    "NOT_FOUND": "Î”ÎµÎ½ Î²ÏÎ­Î¸Î·ÎºÎµ",\n    "OWNER": "ÎšÎ¬Ï„Î¿Ï‡Î¿Ï‚",\n    "PLAYER": "Î Î±Î¯ÎºÏ„Î·Ï‚",\n    "POST": "Î”Î·Î¼Î¿ÏƒÎ¯ÎµÏ…ÏƒÎ·",\n    "READ": "Î‘Î½Î¬Î³Î½Ï‰ÏƒÎ·",\n    "RECENT": "Î Î¡ÎŸÎ£Î¦Î‘Î¤Î‘",\n    "REMOVE": "Î´Î¹Î±Î³ÏÎ±Ï†Î®",\n    "REPLY": "Î±Ï€Î¬Î½Ï„Î·ÏƒÎ·",\n    "REQUIRED": "(Î‘Ï€Î±Î¹Ï„ÎµÎ¯Ï„Î±Î¹)",\n    "SAVE": "Î±Ï€Î¿Î¸Î®ÎºÎµÏ…ÏƒÎ·",\n    "SEND": "Î‘Ï€Î¿ÏƒÏ„Î¿Î»Î®",\n    "SHOW": "Î•Î¼Ï†Î¬Î½Î¹ÏƒÎ·",\n    "SOURCE": "Î Î·Î³Î®",\n    "TOTAL": "Î£ÏÎ½Î¿Î»Î¿",\n    "UNREAD": "Î‘Î´Î¹Î¬Î²Î±ÏƒÏ„ÎµÏ‚ ÎµÎ¹Î´Î¿Ï€Î¿Î¹Î®ÏƒÎµÎ¹Ï‚",\n    "User": "Î§ÏÎ®ÏƒÏ„Î·Ï‚",\n    "CHILD_COMMENT": "Î¸Ï…Î³Î±Ï„ÏÎ¹ÎºÏŒ",\n    "LEAVE_A_COMMENT": "Î£Ï‡Î¿Î»Î¹Î¬ÏƒÏ„Îµ",\n    "LOGIN_TO_COMMENT": "Î£Î¥ÎÎ”Î•Î˜Î•Î™Î¤Î•",\n    "CHILD_COMMENTS": "Î¸Ï…Î³Î±Ï„ÏÎ¹ÎºÎ¬",\n    "MORE_COMMENTS_SHOW": "Î”ÎµÎ¯Ï„Îµ Ï€ÎµÏÎ¹ÏƒÏƒÏŒÏ„ÎµÏÎ± ÏƒÏ‡ÏŒÎ»Î¹Î±",\n    "MORE_COMMENTS_COUNT": "%d ÏƒÏ‡ÏŒÎ»Î¹Î± Î±ÎºÏŒÎ¼Î±",\n    "NEW_COMMENTS": "Î½Î­Î± ÏƒÏ‡ÏŒÎ»Î¹Î±",\n    "CHOICES_PROMPT": "Î•Ï€Î¹Î»Î¿Î³Î­Ï‚:",\n    "EXPIRATION_DATE_PROMPT": "Î—Î¼ÎµÏÎ¿Î¼Î·Î½Î¯Î± Î»Î®Î¾Î·Ï‚ (Ï€ÏÎ¿Î±Î¹ÏÎµÏ„Î¹ÎºÏŒ):",\n    "QUESTION_PROMPT": "Î•ÏÏŽÏ„Î·ÏƒÎ·",\n    "COMMENT_IS_BELOW_THRESHOLD": "Î¤Î¿ Î¼Î®Î½Ï…Î¼Î± ÎµÎ¯Î½Î±Î¹ ÎºÎ¬Ï„Ï‰ Î±Ï€ÏŒ Ï„Î¿ ÏŒÏÎ¹Î¿",\n    "CREATE_BUTTON": "Î”Î·Î¼Î¹Î¿Ï…ÏÎ³Î¯Î±",\n    "VOTE_BUTTON": "Î¨Î·Ï†Î¯ÏƒÏ„Îµ",\n    "DELETE_COMMENT_CONFIRM": "Î•Î¯ÏƒÏ„Îµ Î²Î­Î²Î±Î¹Î¿Î¹ ÏŒÏ„Î¹ Î¸Î­Î»ÎµÏ„Îµ Î½Î± Î´Î¹Î±Î³ÏÎ¬ÏˆÎµÏ„Îµ Î±Ï…Ï„ÏŒ Ï„Î¿ ÏƒÏ‡ÏŒÎ»Î¹Î¿;",\n    "LEAVING_SITE_CONFIRM": "ÎšÎ±Ï„Î±Î»Î±Î²Î±Î¯Î½Ï‰ ÎºÎ±Î¹ Î¸Î­Î»Ï‰ Î½Î± ÏƒÏ…Î½ÎµÏ‡Î¯ÏƒÏ‰",\n    "EDITING_AS": "Î•Ï€ÎµÎ¾ÎµÏÎ³Î±ÏƒÎ¯Î± Ï‰Ï‚",\n    "POSTING_AS": "Î”Î·Î¼Î¿ÏƒÎ¯ÎµÏ…ÏƒÎ· Ï‰Ï‚",\n    "GOING_TO": "Î Î·Î³Î±Î¯Î½ÎµÏ„Îµ ÏƒÏ„Î¿:",\n    "LEAVING_SITE": "Î‘Ï†Î®Î½ÎµÏ„Îµ Ï„Î¿Î½ Î¹ÏƒÏ„ÏŒÏ„Î¿Ï€Î¿ Ï„Î·Ï‚ Riot Games",\n    "LEVEL_REGION": "Î•Î Î™Î Î•Î”ÎŸ %level%<br/> %region%",\n    "NEVER_SHOW_AGAIN": "ÎŸÏÎ¹ÏƒÏ„Î¹ÎºÎ® Î±Ï€ÏŒÎºÏÏ…ÏˆÎ·",\n    "NO_UNREAD": "Î”ÎµÎ½ Ï…Ï€Î¬ÏÏ‡Î¿Ï…Î½ Î±Î´Î¹Î¬Î²Î±ÏƒÏ„ÎµÏ‚ ÎµÎ¹Î´Î¿Ï€Î¿Î¹Î®ÏƒÎµÎ¹Ï‚!",\n    "REMOVE_ALL": "Î”Î¹Î±Î³ÏÎ±Ï†Î® ÏŒÎ»Ï‰Î½",\n    "REVOKE": "Î‘Î½Î¬ÎºÎ»Î·ÏƒÎ·",\n    "REVOKING": "Î‘Î½Î¬ÎºÎ»Î·ÏƒÎ· ÏƒÎµ ÎµÎ¾Î­Î»Î¹Î¾Î·",\n    "SORTED_BY": "Ï„Î±Î¾Î¹Î½ÏŒÎ¼Î·ÏƒÎ· ÎºÎ±Ï„Î¬",\n    "VOTES_FIVE_OR_MORE": "ÏˆÎ®Ï†Î¿Î¹",\n    "VOTES_FOUR": "ÏˆÎ®Ï†Î¿Î¹",\n    "VOTES_THREE": "ÏˆÎ®Ï†Î¿Î¹",\n    "VOTES_TWO": "ÏˆÎ®Ï†Î¿Î¹",\n    "VOTES_ZERO": "ÏˆÎ®Ï†Î¿Î¹",\n    "VOTE_SINGULAR": "ÏˆÎ®Ï†Î¿Ï‚",\n    "VOTES_FIVE_OR_MORE_SUB": "%d ÏˆÎ®Ï†Î¿Î¹",\n    "VOTES_FOUR_SUB": "%d ÏˆÎ®Ï†Î¿Î¹",\n    "VOTES_THREE_SUB": "%d ÏˆÎ®Ï†Î¿Î¹",\n    "VOTES_TWO_SUB": "%d ÏˆÎ®Ï†Î¿Î¹",\n    "VOTES_ZERO_SUB": "%d ÏˆÎ®Ï†Î¿Î¹",\n    "VOTE_SINGULAR_SUB": "%d ÏˆÎ®Ï†Î¿",\n    "SAVE_CHANGES": "Î‘Ï€Î¿Î¸Î®ÎºÎµÏ…ÏƒÎ· Î±Î»Î»Î±Î³ÏŽÎ½",\n    "DETAILS": "Î›ÎµÏ€Ï„Î¿Î¼Î­ÏÎµÎ¹ÎµÏ‚",\n    "CREATED_PREFIX": "Î”Î·Î¼Î¹Î¿Ï…ÏÎ³Î®Î¸Î·ÎºÎµ: %s",\n    "URL_PREFIX": "Î”Î¹ÎµÏÎ¸Ï…Î½ÏƒÎ· URL: %s",\n    "DESCRIPTION": "Î ÎµÏÎ¹Î³ÏÎ±Ï†Î®",\n    "GUIDELINES": "ÎŸÎ´Î·Î³Î¯ÎµÏ‚",\n    "DESCRIPTION_PLACEHOLDER": "Î”ÎµÎ½ Î­Ï‡ÎµÎ¹ Î´Î·Î¼Î¹Î¿Ï…ÏÎ³Î·Î¸ÎµÎ¯ Î±ÎºÏŒÎ¼Î± Ï€ÎµÏÎ¹Î³ÏÎ±Ï†Î® Î³Î¹Î± Î±Ï…Ï„ÏŒ Ï„Î¿ Ï†ÏŒÏÎ¿Ï…Î¼.",\n    "GUIDELINES_PLACEHOLDER": "Î”ÎµÎ½ Î­Ï‡Î¿Ï…Î½ Î´Î·Î¼Î¹Î¿Ï…ÏÎ³Î·Î¸ÎµÎ¯ Î±ÎºÏŒÎ¼Î± Î¿Î´Î·Î³Î¯ÎµÏ‚ Î³Î¹Î± Î±Ï…Ï„ÏŒ Ï„Î¿ Ï†ÏŒÏÎ¿Ï…Î¼.",\n    "NAVIGATION": "Î Î›ÎŸÎ—Î“Î—Î£Î—",\n    "DISCUSSION": "Î£Ï…Î¶Î®Ï„Î·ÏƒÎ·",\n    "ABOUT": "Î£Ï‡ÎµÏ„Î¹ÎºÎ¬",\n    "REPORTS_WITH_COUNT": "Î‘Î½Î±Ï†Î¿ÏÎ­Ï‚ (%d)",\n    "ACTIVITY": "Î”ÏÎ±ÏƒÏ„Î·ÏÎ¹ÏŒÏ„Î·Ï„Î±",\n    "FEEDBACK": "Î‘Ï€ÏŒÏˆÎµÎ¹Ï‚",\n    "CLOSE_THIS_BOARD": "ÎšÎ»ÎµÎ¯ÏƒÎ¹Î¼Î¿ Î±Ï…Ï„Î¿Ï Ï„Î¿Ï… Ï†ÏŒÏÎ¿Ï…Î¼",\n    "YES": "ÎÎ±Î¹",\n    "DELETE_HEADER": "Î”Î¹Î±Î³ÏÎ±Ï†Î®",\n    "AUTHOR_MESSAGE": "ÎœÎ®Î½Ï…Î¼Î± Î±Ï€ÏŒ Ï„Î¿Î½ ÏƒÏ…Î½Ï„Î¬ÎºÏ„Î·",\n    "OFFENSE_LABEL": "Î Î±ÏÎ¬Î²Î±ÏƒÎ·",\n    "OFFENSE_PLACEHOLDER": "Î•Ï€Î¹Î»Î­Î¾Ï„Îµ Î¼Î¹Î± Ï€Î±ÏÎ¬Î²Î±ÏƒÎ·...",\n    "MODERATION_COMMENT_LABEL": "Î£Ï‡ÏŒÎ»Î¹Î¿",\n    "BAN_LABEL": "ÎÎ± Î±Ï€Î¿ÎºÎ»ÎµÎ¹ÏƒÏ„ÎµÎ¯ Î±Ï…Ï„ÏŒÏ‚ Î¿ Ï€Î±Î¯ÎºÏ„Î·Ï‚;",\n    "BAN_DURATION_NONE": "ÎšÎ±Î½Î­Î½Î±Ï‚ Î±Ï€Î¿ÎºÎ»ÎµÎ¹ÏƒÎ¼ÏŒÏ‚",\n    "BAN_DURATION_ONE_HOUR": "1 ÏŽÏÎ±",\n    "BAN_DURATION_TWENTY_FOUR_HOURS": "24 ÏŽÏÎµÏ‚",\n    "BAN_DURATION_ONE_WEEK": "1 ÎµÎ²Î´Î¿Î¼Î¬Î´Î±",\n    "BAN_DURATION_PERMANENT": "ÎŸÏÎ¹ÏƒÏ„Î¹ÎºÏŒÏ‚",\n    "GLOBAL_BAN_LABEL": "ÎÎ± Î±Ï€Î¿ÎºÎ»ÎµÎ¹ÏƒÏ„ÎµÎ¯ Î±Ï€ÏŒ ÏŒÎ»Î± Ï„Î± Ï†ÏŒÏÎ¿Ï…Î¼;",\n    "REPORT_HEADER": "Î‘Î½Î±Ï†Î¿ÏÎ¬",\n    "REPORT_OFFENSE_LABEL": "Î•Ï€Î¹Î»Î­Î¾Ï„Îµ Ï€Î±ÏÎ¬Î²Î±ÏƒÎ·:",\n    "REPORT_OFFENSE_PLACEHOLDER": "Î•Ï€Î¹Î»Î­Î¾Ï„Îµ Î¼Î¹Î± Ï€Î±ÏÎ¬Î²Î±ÏƒÎ·...",\n    "REPORT_COMMENT_LABEL": "Î ÏÏŒÏƒÎ¸ÎµÏ„Î± ÏƒÏ‡ÏŒÎ»Î¹Î±:",\n    "REPORT": "Î‘Î½Î±Ï†Î¿ÏÎ¬",\n    "UNIVERSAL_RULE_JERK": "ÎœÎ· Ï†Î­ÏÎµÏƒÏ„Îµ Î±Î½ÏŒÎ·Ï„Î±",\n    "UNIVERSAL_RULE_MATURE": "ÎŒÏ‡Î¹ Ï€ÎµÏÎ¹ÎµÏ‡ÏŒÎ¼ÎµÎ½Î¿ Î³Î¹Î± ÎµÎ½Î®Î»Î¹ÎºÎµÏ‚",\n    "UNIVERSAL_RULE_SPAM": "ÎŒÏ‡Î¹ Î±Î½ÎµÏ€Î¹Î¸ÏÎ¼Î·Ï„Î± Î¼Î·Î½ÏÎ¼Î±Ï„Î±",\n    "UNIVERSAL_RULE_GUIDELINES": "Î£Ï…Î¼Î¼ÏŒÏÏ†Ï‰ÏƒÎ· Î¼Îµ Ï„Î¹Ï‚ Î¿Î´Î·Î³Î¯ÎµÏ‚ Ï„Î¿Ï… Ï†ÏŒÏÎ¿Ï…Î¼",\n    "UNIVERSAL_RULE_PROMOTION": "Î ÏÎ¿ÏŽÎ¸Î·ÏƒÎ· Î»Î¿Î³Î±ÏÎ¹Î±ÏƒÎ¼Î¿Ï, Ï€ÏÎ¿ÏŠÏŒÎ½Ï„Î¿Ï‚ Î® Î· Ï…Ï€Î·ÏÎµÏƒÎ¯Î±Ï‚",\n    "UNIVERSAL_RULE_REPORTING": "Î‘Î½Î±Ï†Î¿ÏÎ¬ Î¬Î»Î»Ï‰Î½ Ï€Î±Î¹ÎºÏ„ÏŽÎ½",\n    "UNIVERSAL_RULE_DOWNLOADS": "Î Î±ÏÎ¬Î½Î¿Î¼ÎµÏ‚ Î»Î®ÏˆÎµÎ¹Ï‚",\n    "UNIVERSAL_RULE_ILLEGAL": "Î Î±ÏÎ¬Î½Î¿Î¼Î· Î´ÏÎ±ÏƒÏ„Î·ÏÎ¹ÏŒÏ„Î·Ï„Î±",\n    "UNIVERSAL_RULE_THREATS": "Î‘Ï€ÎµÎ¹Î»Î­Ï‚",\n    "UNIVERSAL_RULE_PHISHING": "Î ÏƒÎ¬ÏÎµÎ¼Î± (Phishing) ÎºÎ±Î¹ Î±Ï€Î¬Ï„ÎµÏ‚",\n    "NOTES_ONE": "Î£Î·Î¼ÎµÎ¯Ï‰ÏƒÎ·",\n    "NOTES_FEW": "Î£Î·Î¼ÎµÎ¹ÏŽÏƒÎµÎ¹Ï‚",\n    "NOTES_MANY": "Î£Î·Î¼ÎµÎ¹ÏŽÏƒÎµÎ¹Ï‚",\n    "DISCUSSION_BYLINE": "Î‘Ï€ÏŒ Ï„Î¿ Ï‡ÏÎ®ÏƒÏ„Î· %author% %when% ÏƒÏ„Î¿ Ï†ÏŒÏÎ¿Ï…Î¼ %board%",\n    "REPORTED_SUMMARY_ONE_NAME": "Î‘Î½Î±Ï†Î¿ÏÎ¬ Î±Ï€Î¿ Ï„Î¿Î½ Ï‡ÏÎ®ÏƒÏ„Î· %name1% %when% Ï‰Ï‚ %reason%",\n    "REPORTED_SUMMARY_TWO_NAMES": "Î‘Î½Î±Ï†Î¿ÏÎ¬ Î±Ï€Î¿ Ï„Î¿Ï…Ï‚ Ï‡ÏÎ®ÏƒÏ„ÎµÏ‚ %name1% ÎºÎ±Î¹ %name2% %when% Ï‰Ï‚ %reason%",\n    "REPORTED_SUMMARY_MANY_NAMES": "Î‘Î½Î±Ï†Î¿ÏÎ¬ Î±Ï€Î¿ Ï„Î¿Ï…Ï‚ Ï‡ÏÎ®ÏƒÏ„ÎµÏ‚ %name1%, %name2% ÎºÎ±Î¹ %other% Î±ÎºÏŒÎ¼Î± Ï‡ÏÎ®ÏƒÏ„ÎµÏ‚ %when% Ï‰Ï‚ %reason%",\n    "OTHER_ONE": "%d Î±ÎºÏŒÎ¼Î±",\n    "OTHER_FEW": "%d Î±ÎºÏŒÎ¼Î±",\n    "OTHER_MANY": "%d Î±ÎºÏŒÎ¼Î±",\n    "MODERATOR_ACTIONS_HEADER": "Î•Î½Î­ÏÎ³ÎµÎ¹ÎµÏ‚ ÏƒÏ…Î½Ï„Î¿Î½Î¹ÏƒÏ„Î®",\n    "THIRTY_DAYS": "30 Î·Î¼Î­ÏÎµÏ‚",\n    "ACTION": "Î•Î½Î­ÏÎ³ÎµÎ¹Î±",\n    "OFFENSE": "Î Î±ÏÎ¬Î²Î±ÏƒÎ·",\n    "MANAGE": "Î”Î¹Î±Ï‡ÎµÎ¯ÏÎ¹ÏƒÎ·",\n    "ACTION_EDITED_DISCUSSION": "Î•Ï€ÎµÎ¾ÎµÏÎ³Î¬ÏƒÏ„Î·ÎºÎµ Î¼Î¹Î± ÏƒÏ…Î¶Î®Ï„Î·ÏƒÎ·",\n    "ACTION_EDITED_COMMENT": "Î•Ï€ÎµÎ¾ÎµÏÎ³Î¬ÏƒÏ„Î·ÎºÎµ Î­Î½Î± ÏƒÏ‡ÏŒÎ»Î¹Î¿",\n    "ACTION_DELETED_DISCUSSION": "Î”Î¹Î­Î³ÏÎ±ÏˆÎµ Î¼Î¹Î± ÏƒÏ…Î¶Î®Ï„Î·ÏƒÎ·",\n    "ACTION_DELETED_COMMENT": "Î”Î¹Î­Î³ÏÎ±ÏˆÎµ Î­Î½Î± ÏƒÏ‡ÏŒÎ»Î¹Î¿",\n    "ACTION_BANNED_PLAYER": "Î‘Ï€Î¿ÎºÎ»ÎµÎ¹ÏƒÎ¼Î­Î½Î¿Ï‚ Ï€Î±Î¯ÎºÏ„Î·Ï‚",\n    "ACTION_DELETED_DISCUSSION_AND_BANNED": "Î”Î¹Î­Î³ÏÎ±ÏˆÎµ Î¼Î¹Î± ÏƒÏ…Î¶Î®Ï„Î·ÏƒÎ· ÎºÎ±Î¹ Î±Ï€Î­ÎºÎ»ÎµÎ¹ÏƒÎµ Ï„Î¿Î½ Ï€Î±Î¯ÎºÏ„Î·",\n    "ACTION_DELETED_COMMENT_AND_BANNED": "Î”Î¹Î­Î³ÏÎ±ÏˆÎµ Î­Î½Î± ÏƒÏ‡ÏŒÎ»Î¹Î¿ ÎºÎ±Î¹ Î±Ï€Î­ÎºÎ»ÎµÎ¹ÏƒÎµ Ï„Î¿Î½ Ï€Î±Î¯ÎºÏ„Î·",\n    "ANY_TYPE": "ÎŒÎ»Î¿Î¹ Î¿Î¹ Ï„ÏÏ€Î¿Î¹",\n    "ANY_MODERATOR": "ÎŒÎ»Î¿Î¹ Î¿Î¹ Î´Î¹Î±Ï‡ÎµÎ¹ÏÎ¹ÏƒÏ„Î­Ï‚",\n    "ANY_PLAYER": "ÎŒÎ»Î¿Î¹ Î¿Î¹ Ï€Î±Î¯ÎºÏ„ÎµÏ‚",\n    "REPORT_TO_BOARD_OWNER": "Î‘Î½Î±Ï†Î¿ÏÎ¬ ÏƒÏ„Î¿Î½ ÎºÎ¬Ï„Î¿Ï‡Î¿ Ï„Î¿Ï… Ï†ÏŒÏÎ¿Ï…Î¼",\n    "REPORT_TO_RIOT": "Î‘Î½Î±Ï†Î¿ÏÎ¬ ÏƒÏ„Î·Î½ Riot",\n    "DELETED_BY_INFO": "Î”Î¹Î±Î³ÏÎ¬Ï†Î·ÎºÎµ Î±Ï€ÏŒ Ï„Î¿ Ï‡ÏÎ®ÏƒÏ„Î· %name% %when% (%offense%)",\n    "EDITED_BY_INFO": "Î”Î¹Î±Î³ÏÎ¬Ï†Î·ÎºÎµ Î±Ï€ÏŒ Ï„Î¿ Ï‡ÏÎ®ÏƒÏ„Î· %name% %when%",\n    "BOARDS": "Î¦ÏŒÏÎ¿Ï…Î¼",\n    "PIN": "ÎšÎ±ÏÏ†Î¯Ï„ÏƒÏ‰Î¼Î±",\n    "UNPIN": "ÎžÎµÎºÎ±ÏÏ†Î¯Ï„ÏƒÏ‰Î¼Î±"\n}\n'
}, function(n, e) {
    n.exports = '{\n    "ADD": "Add",\n    "ADD_BUTTON": "Add",\n    "ADD_CHOICE": "Add Choice",\n    "ADDING": "Adding",\n    "TOO_MANY_CHOICES": "You can only have %limit% choices",\n    "AVATAR": "avatar",\n    "BEST": "BEST",\n    "CANCEL": "Cancel",\n    "CANCEL_BUTTON": "Cancel",\n    "CONFIRM_REVOKE": "Revoke?",\n    "CLOSE": "Close",\n    "COMMENTS": "comments",\n    "DELETED": "deleted",\n    "DISCUSS": "Discuss",\n    "EDIT": "edit",\n    "ERROR": "Sorry! An error has occured.",\n    "ERROR401": "So sad... must be higher level.",\n    "ERROR403": "So sad... must be level %level%.",\n    "ERROR403_OTHER": "So sad... you are not authorized.",\n    "ERROR_RATELIMIT": "Too fast! Please wait before commenting again!",\n    "ERROR429": "Please wait and try again.",\n    "FACECHECKING": "Facechecking the brush is dangerous, and so is facechecking the web.  Other websites may not be as well-warded as ours, so please use your best judgement when clicking on unknown links.",\n    "FROM": "From",\n    "MODERATOR": "Moderator",\n    "MODERATORS": "Moderators",\n    "MORE": "more",\n    "NO": "No",\n    "NOTIFICATIONS": "Notifications",\n    "NOT_FOUND": "Not found",\n    "OWNER": "Owner",\n    "PLAYER": "Player",\n    "POST": "Post",\n    "READ": "Read",\n    "RECENT": "RECENT",\n    "REMOVE": "delete",\n    "REPLY": "reply",\n    "REQUIRED": "(Required)",\n    "SAVE": "save",\n    "SEND": "Send",\n    "SHOW": "Show",\n    "SOURCE": "Source",\n    "TOTAL": "Total",\n    "UNREAD": "Unread Notifications",\n    "User": "User",\n    "CHILD_COMMENT": "child",\n    "LEAVE_A_COMMENT": "Leave a comment",\n    "LOGIN_TO_COMMENT": "Login to comment",\n    "CHILD_COMMENTS": "children",\n    "MORE_COMMENTS_SHOW": "Show more comments",\n    "MORE_COMMENTS_COUNT": "%d More comments",\n    "NEW_COMMENTS": "new comments",\n    "CHOICES_PROMPT": "Choices:",\n    "EXPIRATION_DATE_PROMPT": "Expiration Date (Optional):",\n    "QUESTION_PROMPT": "Question",\n    "COMMENT_IS_BELOW_THRESHOLD": "Comment is below threshold",\n    "CREATE_BUTTON": "Create",\n    "VOTE_BUTTON": "Vote",\n    "DELETE_COMMENT_CONFIRM": "Are you sure you want to delete this comment?",\n    "LEAVING_SITE_CONFIRM": "I understand, and Iâ€™m going in",\n    "EDITING_AS": "Editing as",\n    "POSTING_AS": "Posting as",\n    "GOING_TO": "You are going to: ",\n    "LEAVING_SITE": "You are leaving Riot Games",\n    "LEVEL_REGION": "Level %level%<br/> %region%",\n    "NEVER_SHOW_AGAIN": "Never show again",\n    "NO_UNREAD": "No unread notifications!",\n    "REMOVE_ALL": "Delete All",\n    "REVOKE": "Revoke",\n    "REVOKING": "Revoking",\n    "SORTED_BY": "sorted by",\n    "VOTES_FIVE_OR_MORE": "votes",\n    "VOTES_FOUR": "votes",\n    "VOTES_THREE": "votes",\n    "VOTES_TWO": "votes",\n    "VOTES_ZERO": "votes",\n    "VOTE_SINGULAR": "vote",\n    "VOTES_FIVE_OR_MORE_SUB": "%d votes",\n    "VOTES_FOUR_SUB": "%d votes",\n    "VOTES_THREE_SUB": "%d votes",\n    "VOTES_TWO_SUB": "%d votes",\n    "VOTES_ZERO_SUB": "%d votes",\n    "VOTE_SINGULAR_SUB": "%d vote",\n    "SAVE_CHANGES": "Save Changes",\n    "DETAILS": "Details",\n    "CREATED_PREFIX": "Created: %s",\n    "URL_PREFIX": "URL: %s",\n    "DESCRIPTION": "Description",\n    "GUIDELINES": "Guidelines",\n    "DESCRIPTION_PLACEHOLDER": "A description has not been created for this board, yet.",\n    "GUIDELINES_PLACEHOLDER": "Guidelines have not been created for this board, yet.",\n    "NAVIGATION": "NAVIGATION",\n    "DISCUSSION": "Discussion",\n    "ABOUT": "About",\n    "REPORTS_WITH_COUNT": "Reports (%d)",\n    "ACTIVITY": "Activity",\n    "FEEDBACK": "Feedback",\n    "CLOSE_THIS_BOARD": "Close this board",\n    "YES": "Yes",\n    "DELETE_HEADER": "Delete",\n    "AUTHOR_MESSAGE": "Message for the author",\n    "OFFENSE_LABEL": "Offense",\n    "OFFENSE_PLACEHOLDER": "Select an offense...",\n    "MODERATION_COMMENT_LABEL": "Comment",\n    "BAN_LABEL": "Ban this player?",\n    "BAN_DURATION_NONE": "No Ban",\n    "BAN_DURATION_ONE_HOUR": "1 hour",\n    "BAN_DURATION_TWENTY_FOUR_HOURS": "24 hours",\n    "BAN_DURATION_ONE_WEEK": "1 week",\n    "BAN_DURATION_PERMANENT": "Permanent",\n    "GLOBAL_BAN_LABEL": "Ban from all boards?",\n    "REPORT_HEADER": "Report",\n    "REPORT_OFFENSE_LABEL": "Select offense:",\n    "REPORT_OFFENSE_PLACEHOLDER": "Selct an offense...",\n    "REPORT_COMMENT_LABEL": "Additional comments:",\n    "REPORT": "Report",\n    "UNIVERSAL_RULE_JERK": "Don\'t Be A Jerk",\n    "UNIVERSAL_RULE_MATURE": "No Mature Content",\n    "UNIVERSAL_RULE_SPAM": "No Spamming",\n    "UNIVERSAL_RULE_GUIDELINES": "Adhere to Board Guidelines",\n    "UNIVERSAL_RULE_PROMOTION": "Account, Product or Service Promotion",\n    "UNIVERSAL_RULE_REPORTING": "Reporting other players",\n    "UNIVERSAL_RULE_DOWNLOADS": "Illegal Downloads",\n    "UNIVERSAL_RULE_ILLEGAL": "Illegal Activity",\n    "UNIVERSAL_RULE_THREATS": "Threats",\n    "UNIVERSAL_RULE_PHISHING": "Phishing & Scamming",\n    "NOTES_ONE": "Note",\n    "NOTES_FEW": "Notes",\n    "NOTES_MANY": "Notes",\n    "DISCUSSION_BYLINE": "By %author% %when% in %board%",\n    "REPORTED_SUMMARY_ONE_NAME": "Reported by %name1% %when% as %reason%",\n    "REPORTED_SUMMARY_TWO_NAMES": "Reported by %name1% and %name2% %when% as %reason%",\n    "REPORTED_SUMMARY_MANY_NAMES": "Reported by %name1%, %name2% and %other% %when% as %reason%",\n    "OTHER_ONE": "%d other",\n    "OTHER_FEW": "%d others",\n    "OTHER_MANY": "%d others",\n    "MODERATOR_ACTIONS_HEADER": "Moderator Actions",\n    "THIRTY_DAYS": "30 Days",\n    "ACTION": "Action",\n    "OFFENSE": "Offense",\n    "MANAGE": "Manage",\n    "ACTION_EDITED_DISCUSSION": "Edited a discussion",\n    "ACTION_EDITED_COMMENT": "Edited a comment",\n    "ACTION_DELETED_DISCUSSION": "Deleted a discussion",\n    "ACTION_DELETED_COMMENT": "Deleted a comment",\n    "ACTION_BANNED_PLAYER": "Banned player",\n    "ACTION_DELETED_DISCUSSION_AND_BANNED": "Deleted a discussion and banned player",\n    "ACTION_DELETED_COMMENT_AND_BANNED": "Deleted a comment and banned player",\n    "ANY_TYPE": "Any type",\n    "ANY_MODERATOR": "Any moderator",\n    "ANY_PLAYER": "Any player",\n    "REPORT_TO_BOARD_OWNER": "Report to board owner",\n    "REPORT_TO_RIOT": "Report to Riot",\n    "DELETED_BY_INFO": "Deleted by %name% %when% (%offense%)",\n    "EDITED_BY_INFO": "Deleted by %name% %when%",\n    "BOARDS": "Boards",\n    "PIN": "Pin",\n    "UNPIN": "Unpin"\n}\n';
}, 110, 110, function(n, e) {
    n.exports = '{\n    "ADD": "Add",\n    "ADD_BUTTON": "Add",\n    "ADD_CHOICE": "Add Choice",\n    "ADDING": "Adding",\n    "TOO_MANY_CHOICES": "You can only have %limit% choices",\n    "AVATAR": "avatar",\n    "BEST": "BEST",\n    "CANCEL": "Cancel",\n    "CANCEL_BUTTON": "Cancel",\n    "CONFIRM_REVOKE": "Revoke?",\n    "CLOSE": "Close",\n    "COMMENTS": "comments",\n    "DELETED": "deleted",\n    "DISCUSS": "Discuss",\n    "EDIT": "edit",\n    "ERROR": "Sorry! An error has occured.",\n    "ERROR401": "So sad... must be higher level.",\n    "ERROR403": "So sad... must be level %level%.",\n    "ERROR403_OTHER": "So sad... you are not authorized.",\n    "ERROR_RATELIMIT": "Too fast! Please wait before commenting again!",\n    "ERROR429": "Please wait and try again.",\n    "FACECHECKING": "Facechecking the brush is dangerous, and so is facechecking the web.  Other websites may not be as well-warded as ours, so please use your best judgement when clicking on unknown links.",\n    "FROM": "From",\n    "MODERATOR": "Moderator",\n    "MODERATORS": "Moderators",\n    "MORE": "more",\n    "NO": "No",\n    "NOTIFICATIONS": "Notifications",\n    "NOT_FOUND": "Not found",\n    "OWNER": "Owner",\n    "PLAYER": "Player",\n    "POST": "Post",\n    "READ": "Read",\n    "RECENT": "RECENT",\n    "REMOVE": "delete",\n    "REPLY": "reply",\n    "REQUIRED": "(Required)",\n    "SAVE": "save",\n    "SEND": "Send",\n    "SHOW": "Show",\n    "SOURCE": "Source",\n    "TOTAL": "Total",\n    "UNREAD": "Unread Notifications",\n    "User": "User",\n    "CHILD_COMMENT": "child",\n    "LEAVE_A_COMMENT": "Leave a comment",\n    "LOGIN_TO_COMMENT": "Login to comment",\n    "CHILD_COMMENTS": "children",\n    "MORE_COMMENTS_SHOW": "Show more comments",\n    "MORE_COMMENTS_COUNT": "%d More comments",\n    "NEW_COMMENTS": "new comments",\n    "CHOICES_PROMPT": "Choices:",\n    "EXPIRATION_DATE_PROMPT": "Expiration Date (Optional):",\n    "QUESTION_PROMPT": "Question",\n    "COMMENT_IS_BELOW_THRESHOLD": "Comment is below threshold",\n    "CREATE_BUTTON": "Create",\n    "VOTE_BUTTON": "Vote",\n    "DELETE_COMMENT_CONFIRM": "Are you sure you want to delete this comment?",\n    "LEAVING_SITE_CONFIRM": "I understand, and Iâ€™m going in",\n    "EDITING_AS": "Editing as",\n    "POSTING_AS": "Posting as",\n    "GOING_TO": "You are going to: ",\n    "LEAVING_SITE": "You are leaving Riot Games",\n    "LEVEL_REGION": "Level %level%<br/> %region%",\n    "NEVER_SHOW_AGAIN": "Never show again",\n    "NO_UNREAD": "No unread notifications!",\n    "REMOVE_ALL": "Delete All",\n    "REVOKE": "Revoke",\n    "REVOKING": "Revoking",\n    "SORTED_BY": "sorted by",\n    "VOTES_FIVE_OR_MORE": "votes",\n    "VOTES_FOUR": "votes",\n    "VOTES_THREE": "votes",\n    "VOTES_TWO": "votes",\n    "VOTES_ZERO": "votes",\n    "VOTE_SINGULAR": "vote",\n    "VOTES_FIVE_OR_MORE_SUB": "%d votes",\n    "VOTES_FOUR_SUB": "%d votes",\n    "VOTES_THREE_SUB": "%d votes",\n    "VOTES_TWO_SUB": "%d votes",\n    "VOTES_ZERO_SUB": "%d votes",\n    "VOTE_SINGULAR_SUB": "%d vote",\n    "SAVE_CHANGES": "Save Changes",\n    "DETAILS": "Details",\n    "CREATED_PREFIX": "Created: %s",\n    "URL_PREFIX": "URL: %s",\n    "DESCRIPTION": "Description",\n    "GUIDELINES": "Guidelines",\n    "DESCRIPTION_PLACEHOLDER": "A description has not been created for this board, yet.",\n    "GUIDELINES_PLACEHOLDER": "Guidelines have not been created for this board, yet.",\n    "NAVIGATION": "NAVIGATION",\n    "DISCUSSION": "Discussion",\n    "ABOUT": "About",\n    "REPORTS_WITH_COUNT": "Reports (%d)",\n    "ACTIVITY": "Activity",\n    "FEEDBACK": "Feedback",\n    "CLOSE_THIS_BOARD": "Close this board",\n    "YES": "Yes",\n    "DELETE_HEADER": "Delete",\n    "AUTHOR_MESSAGE": "Message for the author",\n    "OFFENSE_LABEL": "Offense",\n    "OFFENSE_PLACEHOLDER": "Select an offense...",\n    "MODERATION_COMMENT_LABEL": "Comment",\n    "BAN_LABEL": "Ban this player?",\n    "BAN_DURATION_NONE": "No Ban",\n    "BAN_DURATION_ONE_HOUR": "1 hour",\n    "BAN_DURATION_TWENTY_FOUR_HOURS": "24 hours",\n    "BAN_DURATION_ONE_WEEK": "1 week",\n    "BAN_DURATION_PERMANENT": "Permanent",\n    "GLOBAL_BAN_LABEL": "Ban from all boards?",\n    "REPORT_HEADER": "Report",\n    "REPORT_OFFENSE_LABEL": "Select offense:",\n    "REPORT_OFFENSE_PLACEHOLDER": "Selct an offense...",\n    "REPORT_COMMENT_LABEL": "Additional comments:",\n    "REPORT": "Report",\n    "UNIVERSAL_RULE_JERK": "Don\'t Be A Jerk",\n    "UNIVERSAL_RULE_MATURE": "No Mature Content",\n    "UNIVERSAL_RULE_SPAM": "No Spamming",\n    "UNIVERSAL_RULE_GUIDELINES": "Adhere to Board Guidelines",\n    "UNIVERSAL_RULE_PROMOTION": "Account, Product or Service Promotion",\n    "UNIVERSAL_RULE_REPORTING": "Reporting other players",\n    "UNIVERSAL_RULE_DOWNLOADS": "Illegal Downloads",\n    "UNIVERSAL_RULE_ILLEGAL": "Illegal Activity",\n    "UNIVERSAL_RULE_THREATS": "Threats",\n    "UNIVERSAL_RULE_PHISHING": "Phishing & Scamming",\n    "NOTES_ONE": "Note",\n    "NOTES_FEW": "Notes",\n    "NOTES_MANY": "Notes",\n    "DISCUSSION_BYLINE": "By %author% %when% in %board%",\n    "REPORTED_SUMMARY_ONE_NAME": "Reported by %name1% %when% as %reason%",\n    "REPORTED_SUMMARY_TWO_NAMES": "Reported by %name1% and %name2% %when% as %reason%",\n    "REPORTED_SUMMARY_MANY_NAMES": "Reported by %name1%, %name2% and %other% %when% as %reason%",\n    "OTHER_ONE": "%d other",\n    "OTHER_FEW": "%d others",\n    "OTHER_MANY": "%d others",\n    "MODERATOR_ACTIONS_HEADER": "Moderator Actions",\n    "THIRTY_DAYS": "30 Days",\n    "ACTION": "Action",\n    "OFFENSE": "Offense",\n    "MANAGE": "Manage",\n    "ACTION_EDITED_DISCUSSION": "Edited a discussion",\n    "ACTION_EDITED_COMMENT": "Edited a comment",\n    "ACTION_DELETED_DISCUSSION": "Deleted a discussion",\n    "ACTION_DELETED_COMMENT": "Deleted a comment",\n    "ACTION_BANNED_PLAYER": "Banned player",\n    "ACTION_DELETED_DISCUSSION_AND_BANNED": "Deleted a discussion and banned player",\n    "ACTION_DELETED_COMMENT_AND_BANNED": "Deleted a comment and banned player",\n    "ANY_TYPE": "Any type",\n    "ANY_MODERATOR": "Any moderator",\n    "ANY_PLAYER": "Any player",\n    "REPORT_TO_BOARD_OWNER": "Report to board owner",\n    "REPORT_TO_RIOT": "Report to Riot",\n    "DELETED_BY_INFO": "Deleted by %name% %when% (%offense%)",\n    "EDITED_BY_INFO": "Deleted by %name% %when%",\n    "BOARDS": "Boards",\n    "PIN": "Pin",\n    "UNPIN": "Unpin"\n}'
}, function(n, e) {
    n.exports = '{\n    "ADD": "AÃ±adir",\n    "ADD_BUTTON": "AÃ±adir",\n    "ADD_CHOICE": "AÃ±adir elecciÃ³n",\n    "ADDING": "AÃ±adiendo",\n    "TOO_MANY_CHOICES": "Solo tienes %limit% elecciones",\n    "AVATAR": "avatar",\n    "BEST": "MEJOR",\n    "CANCEL": "Cancelar",\n    "CANCEL_BUTTON": "BotÃ³n de cancelar",\n    "CONFIRM_REVOKE": "Â¿Revocar?",\n    "CLOSE": "Cerrar",\n    "COMMENTS": "comentarios",\n    "DELETED": "borrado",\n    "DISCUSS": "Comentar",\n    "EDIT": "editar",\n    "ERROR": "Â¡Lo sentimos! Ha ocurrido un error.",\n    "ERROR401": "QuÃ© pena... necesitas ser de nivel superior.",\n    "ERROR403": "QuÃ© pena... necesitas ser nivel %level%.",\n    "ERROR403_OTHER": "QuÃ© pena... no estÃ¡s autorizado.",\n    "ERROR_RATELIMIT": "Â¡Demasiado rÃ¡pido! Espera un poco antes de volver a comentar.",\n    "ERROR429": "Por favor, espera e intÃ©ntalo de nuevo.",\n    "FACECHECKING": "Entrar sin cuidado en internet es tan peligroso como entrar sin cuidado en la maleza.  Puede que otras pÃ¡ginas web no cuenten con los guardianes que tiene la nuestra, asÃ­ que piÃ©nsatelo bien antes de hacer clic en enlaces desconocidos.",\n    "FROM": "De",\n    "MODERATOR": "Moderador",\n    "MODERATORS": "Moderadores",\n    "MORE": "mÃ¡s",\n    "NO": "No",\n    "NOTIFICATIONS": "Notificaciones",\n    "NOT_FOUND": "No encontrado",\n    "OWNER": "Propietario",\n    "PLAYER": "Jugador",\n    "POST": "Publicar",\n    "READ": "Leer",\n    "RECENT": "RECIENTE",\n    "REMOVE": "eliminar",\n    "REPLY": "contestar",\n    "REQUIRED": "(Obligatorio)",\n    "SAVE": "guardar",\n    "SEND": "Enviar",\n    "SHOW": "Mostrar",\n    "SOURCE": "Fuente",\n    "TOTAL": "Total",\n    "UNREAD": "Notificaciones sin leer",\n    "User": "Usuario",\n    "CHILD_COMMENT": "niÃ±o",\n    "LEAVE_A_COMMENT": "Deja un comentario",\n    "LOGIN_TO_COMMENT": "Inicia sesiÃ³n para comentar",\n    "CHILD_COMMENTS": "niÃ±os",\n    "MORE_COMMENTS_SHOW": "MÃ¡s comentarios",\n    "MORE_COMMENTS_COUNT": "%d comentarios mÃ¡s",\n    "NEW_COMMENTS": "nuevos comentarios",\n    "CHOICES_PROMPT": "Elecciones:",\n    "EXPIRATION_DATE_PROMPT": "Fecha de caducidad (opcional):",\n    "QUESTION_PROMPT": "Pregunta",\n    "COMMENT_IS_BELOW_THRESHOLD": "El comentario no tiene votos suficientes",\n    "CREATE_BUTTON": "Crear",\n    "VOTE_BUTTON": "Votar",\n    "DELETE_COMMENT_CONFIRM": "Â¿EstÃ¡s seguro de que quieres eliminar este comentario?",\n    "LEAVING_SITE_CONFIRM": "Lo entiendo y quiero entrar",\n    "EDITING_AS": "Editar como",\n    "POSTING_AS": "Publicar como",\n    "GOING_TO": "EstÃ¡s yendo a:",\n    "LEAVING_SITE": "EstÃ¡s dejando Riot Games",\n    "LEVEL_REGION": "Nivel %level%<br/> %region%",\n    "NEVER_SHOW_AGAIN": "No volver a mostrar",\n    "NO_UNREAD": "Â¡Has leÃ­do todas las notificaciones!",\n    "REMOVE_ALL": "Borrar todo",\n    "REVOKE": "Revocar",\n    "REVOKING": "Revocando",\n    "SORTED_BY": "ordenado por",\n    "VOTES_FIVE_OR_MORE": "votos",\n    "VOTES_FOUR": "votos",\n    "VOTES_THREE": "votos",\n    "VOTES_TWO": "votos",\n    "VOTES_ZERO": "votos",\n    "VOTE_SINGULAR": "voto",\n    "VOTES_FIVE_OR_MORE_SUB": "%d votos",\n    "VOTES_FOUR_SUB": "%d votos",\n    "VOTES_THREE_SUB": "%d votos",\n    "VOTES_TWO_SUB": "%d votos",\n    "VOTES_ZERO_SUB": "%d votos",\n    "VOTE_SINGULAR_SUB": "%d voto",\n    "SAVE_CHANGES": "Guardar cambios",\n    "DETAILS": "Detalles",\n    "CREATED_PREFIX": "CreaciÃ³n: %s",\n    "URL_PREFIX": "DirecciÃ³n web: %s",\n    "DESCRIPTION": "DescripciÃ³n",\n    "GUIDELINES": "Directrices",\n    "DESCRIPTION_PLACEHOLDER": "AÃºn no se ha creado una descripciÃ³n de este foro.",\n    "GUIDELINES_PLACEHOLDER": "AÃºn no se han creado pautas para este foro.",\n    "NAVIGATION": "NAVEGACIÃ“N",\n    "DISCUSSION": "DiscusiÃ³n",\n    "ABOUT": "Acerca de",\n    "REPORTS_WITH_COUNT": "Informes (%d)",\n    "ACTIVITY": "Actividad",\n    "FEEDBACK": "Comentarios",\n    "CLOSE_THIS_BOARD": "Cerrar este foro",\n    "YES": "SÃ­",\n    "DELETE_HEADER": "Borrar",\n    "AUTHOR_MESSAGE": "Mensaje para el autor",\n    "OFFENSE_LABEL": "InfracciÃ³n",\n    "OFFENSE_PLACEHOLDER": "Selecciona una infracciÃ³n...",\n    "MODERATION_COMMENT_LABEL": "Comentar",\n    "BAN_LABEL": "Â¿Bloquear a este jugador?",\n    "BAN_DURATION_NONE": "Sin bloqueo",\n    "BAN_DURATION_ONE_HOUR": "1 hora",\n    "BAN_DURATION_TWENTY_FOUR_HOURS": "24 horas",\n    "BAN_DURATION_ONE_WEEK": "1 semana",\n    "BAN_DURATION_PERMANENT": "Permanente",\n    "GLOBAL_BAN_LABEL": "Â¿Bloquear en todos los foros?",\n    "REPORT_HEADER": "Informar",\n    "REPORT_OFFENSE_LABEL": "Seleccionar infracciÃ³n:",\n    "REPORT_OFFENSE_PLACEHOLDER": "Selecciona una infracciÃ³n...",\n    "REPORT_COMMENT_LABEL": "Comentarios adicionales:",\n    "REPORT": "Informar",\n    "UNIVERSAL_RULE_JERK": "No te portes como un idiota",\n    "UNIVERSAL_RULE_MATURE": "Nada de contenido para adultos",\n    "UNIVERSAL_RULE_SPAM": "Nada de spam",\n    "UNIVERSAL_RULE_GUIDELINES": "Cumplimiento de las pautas del foro",\n    "UNIVERSAL_RULE_PROMOTION": "PromociÃ³n de cuentas, productos y servicios",\n    "UNIVERSAL_RULE_REPORTING": "Denunciar a otros jugadores",\n    "UNIVERSAL_RULE_DOWNLOADS": "Descargas ilegales",\n    "UNIVERSAL_RULE_ILLEGAL": "Actividades ilegales",\n    "UNIVERSAL_RULE_THREATS": "Amenazas",\n    "UNIVERSAL_RULE_PHISHING": "Estafas y suplantaciones de identidad",\n    "NOTES_ONE": "Nota",\n    "NOTES_FEW": "Notas",\n    "NOTES_MANY": "Notas",\n    "DISCUSSION_BYLINE": "Por %author% el %when% en %board%",\n    "REPORTED_SUMMARY_ONE_NAME": "Denunciado por %name1% el %when% por: %reason%",\n    "REPORTED_SUMMARY_TWO_NAMES": "Denunciado por %name1% y %name2% el %when% por: %reason%",\n    "REPORTED_SUMMARY_MANY_NAMES": "Denunciado por %name1%, %name2% y %other% el %when% por: %reason%",\n    "OTHER_ONE": "%d mÃ¡s",\n    "OTHER_FEW": "%d mÃ¡s",\n    "OTHER_MANY": "%d mÃ¡s",\n    "MODERATOR_ACTIONS_HEADER": "Acciones de moderador",\n    "THIRTY_DAYS": "30 dÃ­as",\n    "ACTION": "AcciÃ³n",\n    "OFFENSE": "InfracciÃ³n",\n    "MANAGE": "Administrar",\n    "ACTION_EDITED_DISCUSSION": "Ha editado una discusiÃ³n",\n    "ACTION_EDITED_COMMENT": "Ha editado un comentario",\n    "ACTION_DELETED_DISCUSSION": "Ha borrado una discusiÃ³n",\n    "ACTION_DELETED_COMMENT": "Ha borrado un comentario",\n    "ACTION_BANNED_PLAYER": "Jugador bloqueado",\n    "ACTION_DELETED_DISCUSSION_AND_BANNED": "Ha borrado una discusiÃ³n y ha bloqueado al jugador",\n    "ACTION_DELETED_COMMENT_AND_BANNED": "Ha borrado un comentario y ha bloqueado al jugador",\n    "ANY_TYPE": "Cualquier tipo",\n    "ANY_MODERATOR": "Cualquier moderador",\n    "ANY_PLAYER": "Cualquier jugador",\n    "REPORT_TO_BOARD_OWNER": "Informar al propietario del foro",\n    "REPORT_TO_RIOT": "Informar a Riot",\n    "DELETED_BY_INFO": "Borrado por %name% el %when% (%offense%)",\n    "EDITED_BY_INFO": "Borrado por %name% el %when%",\n    "BOARDS": "Foros",\n    "PIN": "Chincheta",\n    "UNPIN": "Quitar chincheta"\n}\n'
}, function(n, e) {
    n.exports = '{\n    "ADD": "Agregar",\n    "ADD_BUTTON": "Agregar",\n    "ADD_CHOICE": "AÃ±adir opciÃ³n",\n    "ADDING": "Agregando",\n    "TOO_MANY_CHOICES": "Solamente puedes elegir %limit% veces",\n    "AVATAR": "avatar",\n    "BEST": "MEJOR",\n    "CANCEL": "Cancelar",\n    "CANCEL_BUTTON": "Cancelar",\n    "CONFIRM_REVOKE": "Â¿Anular?",\n    "CLOSE": "Cerrar",\n    "COMMENTS": "comentarios",\n    "DELETED": "eliminado",\n    "DISCUSS": "Comentar",\n    "EDIT": "editar",\n    "ERROR": "Â¡Lo sentimos! OcurriÃ³ un error.",\n    "ERROR401": "Lo sentimos... necesitas tener un nivel mayor.",\n    "ERROR403": "Lo sentimos... necesitas tener el nivel %level%.",\n    "ERROR403_OTHER": "QuÃ© pena... no estÃ¡s autorizado.",\n    "ERROR_RATELIMIT": "Â¡QuÃ© rÃ¡pido! Espera antes de volver a comentar.",\n    "ERROR429": "Por favor espera un momento e intÃ©ntalo de nuevo.",\n    "FACECHECKING": "Explorar la web puede llegar a ser tan peligroso como asomar la cara en los arbustos. Es posible que otros sitios no tengan tantos centinelas como nosotros, asÃ­ que piÃ©nsalo bien antes de hacer clic en enlaces desconocidos.",\n    "FROM": "De",\n    "MODERATOR": "Moderador",\n    "MODERATORS": "Moderadores",\n    "MORE": "mÃ¡s",\n    "NO": "No",\n    "NOTIFICATIONS": "Notificaciones",\n    "NOT_FOUND": "No encontrado",\n    "OWNER": "Propietario",\n    "PLAYER": "Jugador",\n    "POST": "Publicar",\n    "READ": "LeÃ­do",\n    "RECENT": "RECIENTE",\n    "REMOVE": "eliminar",\n    "REPLY": "responder",\n    "REQUIRED": "(Obligatorio)",\n    "SAVE": "guardar",\n    "SEND": "Enviar",\n    "SHOW": "Mostrar",\n    "SOURCE": "Fuente",\n    "TOTAL": "Total",\n    "UNREAD": "Notificaciones no leÃ­das",\n    "User": "Usuario",\n    "CHILD_COMMENT": "vinculado",\n    "LEAVE_A_COMMENT": "Deja un comentario",\n    "LOGIN_TO_COMMENT": "Inicia sesiÃ³n para comentar",\n    "CHILD_COMMENTS": "vinculados",\n    "MORE_COMMENTS_SHOW": "Mostrar mÃ¡s comentarios",\n    "MORE_COMMENTS_COUNT": "%d comentarios mÃ¡s",\n    "NEW_COMMENTS": "comentarios nuevos",\n    "CHOICES_PROMPT": "Opciones:",\n    "EXPIRATION_DATE_PROMPT": "Fecha de expiraciÃ³n (opcional):",\n    "QUESTION_PROMPT": "Pregunta",\n    "COMMENT_IS_BELOW_THRESHOLD": "Los comentarios tienen restricciÃ³n de edad.",\n    "CREATE_BUTTON": "Crear",\n    "VOTE_BUTTON": "Votar",\n    "DELETE_COMMENT_CONFIRM": "Â¿Deseas borrar este comentario?",\n    "LEAVING_SITE_CONFIRM": "Lo entiendo y deseo continuar.",\n    "EDITING_AS": "Editar como",\n    "POSTING_AS": "Publicar como",\n    "GOING_TO": "EstÃ¡s yendo a:",\n    "LEAVING_SITE": "EstÃ¡s saliendo de Riot Games",\n    "LEVEL_REGION": "Nivel %level%<br/> %region%",\n    "NEVER_SHOW_AGAIN": "Nunca volver a mostrar",\n    "NO_UNREAD": "Â¡Todas las notificaciones han sido leÃ­das!",\n    "REMOVE_ALL": "Borrar todo",\n    "REVOKE": "Anular",\n    "REVOKING": "Anulando",\n    "SORTED_BY": "ordenado por",\n    "VOTES_FIVE_OR_MORE": "votos",\n    "VOTES_FOUR": "votos",\n    "VOTES_THREE": "votos",\n    "VOTES_TWO": "votos",\n    "VOTES_ZERO": "votos",\n    "VOTE_SINGULAR": "voto",\n    "VOTES_FIVE_OR_MORE_SUB": "%d votos",\n    "VOTES_FOUR_SUB": "%d votos",\n    "VOTES_THREE_SUB": "%d votos",\n    "VOTES_TWO_SUB": "%d votos",\n    "VOTES_ZERO_SUB": "%d votos",\n    "VOTE_SINGULAR_SUB": "%d voto",\n    "SAVE_CHANGES": "Guardar cambios",\n    "DETAILS": "Detalles",\n    "CREATED_PREFIX": "Creado: %s",\n    "URL_PREFIX": "URL: %s",\n    "DESCRIPTION": "DescripciÃ³n",\n    "GUIDELINES": "Normas generales",\n    "DESCRIPTION_PLACEHOLDER": "AÃºn no se ha creado una descripciÃ³n para este foro.",\n    "GUIDELINES_PLACEHOLDER": "AÃºn no se ha creado normas generales para este foro.",\n    "NAVIGATION": "NAVEGACIÃ“N",\n    "DISCUSSION": "DiscusiÃ³n",\n    "ABOUT": "Acerca de",\n    "REPORTS_WITH_COUNT": "Reportes (%d)",\n    "ACTIVITY": "Actividad",\n    "FEEDBACK": "RetroalimentaciÃ³n",\n    "CLOSE_THIS_BOARD": "Cerrar este tablÃ³n",\n    "YES": "SÃ",\n    "DELETE_HEADER": "Borrar",\n    "AUTHOR_MESSAGE": "Mensaje para el autor",\n    "OFFENSE_LABEL": "Falta",\n    "OFFENSE_PLACEHOLDER": "Selecciona una faltaâ€¦",\n    "MODERATION_COMMENT_LABEL": "Comentar",\n    "BAN_LABEL": "Â¿Suspender a este jugador?",\n    "BAN_DURATION_NONE": "Sin suspensiÃ³n",\n    "BAN_DURATION_ONE_HOUR": "1 hora",\n    "BAN_DURATION_TWENTY_FOUR_HOURS": "24 horas",\n    "BAN_DURATION_ONE_WEEK": "1 semana",\n    "BAN_DURATION_PERMANENT": "Permanente",\n    "GLOBAL_BAN_LABEL": "Â¿Suspender en todos los foros?",\n    "REPORT_HEADER": "Reportar",\n    "REPORT_OFFENSE_LABEL": "Seleccionar falta:",\n    "REPORT_OFFENSE_PLACEHOLDER": "Selecciona una faltaâ€¦",\n    "REPORT_COMMENT_LABEL": "Comentarios adicionales:",\n    "REPORT": "Reportar",\n    "UNIVERSAL_RULE_JERK": "No seas un patÃ¡n",\n    "UNIVERSAL_RULE_MATURE": "No publiques contenido para adultos",\n    "UNIVERSAL_RULE_SPAM": "No envÃ­es spam",\n    "UNIVERSAL_RULE_GUIDELINES": "ApÃ©gate a las normas generales del foro",\n    "UNIVERSAL_RULE_PROMOTION": "Publicidad de cuentas, productos o servicios",\n    "UNIVERSAL_RULE_REPORTING": "Reportar a otros jugadores",\n    "UNIVERSAL_RULE_DOWNLOADS": "Descargas ilegales",\n    "UNIVERSAL_RULE_ILLEGAL": "Actividad ilegal",\n    "UNIVERSAL_RULE_THREATS": "Amenazas",\n    "UNIVERSAL_RULE_PHISHING": "Fraude electrÃ³nico y Estafas",\n    "NOTES_ONE": "Nota",\n    "NOTES_FEW": "Notas",\n    "NOTES_MANY": "Notas",\n    "DISCUSSION_BYLINE": "Por %author% el %when% en %board%",\n    "REPORTED_SUMMARY_ONE_NAME": "Reportado por %name1% el %when% como %reason%",\n    "REPORTED_SUMMARY_TWO_NAMES": "Reportado por %name1% y %name2% el %when% como %reason%",\n    "REPORTED_SUMMARY_MANY_NAMES": "Reportado por %name1%, %name2% y %other% el %when% como %reason%",\n    "OTHER_ONE": "%d otro",\n    "OTHER_FEW": "%d otros",\n    "OTHER_MANY": "%d otros",\n    "MODERATOR_ACTIONS_HEADER": "Acciones de moderador",\n    "THIRTY_DAYS": "30 dÃ­as",\n    "ACTION": "AcciÃ³n",\n    "OFFENSE": "Falta",\n    "MANAGE": "Administrar",\n    "ACTION_EDITED_DISCUSSION": "Editar discusiÃ³n",\n    "ACTION_EDITED_COMMENT": "Editar comentario",\n    "ACTION_DELETED_DISCUSSION": "Borrar discusiÃ³n",\n    "ACTION_DELETED_COMMENT": "Borrar comentario",\n    "ACTION_BANNED_PLAYER": "Jugador suspendido",\n    "ACTION_DELETED_DISCUSSION_AND_BANNED": "Borrar discusiÃ³n y a jugador suspendido",\n    "ACTION_DELETED_COMMENT_AND_BANNED": "Borrar comentario y a jugador suspendido",\n    "ANY_TYPE": "Cualquier clase",\n    "ANY_MODERATOR": "Cualquier moderador",\n    "ANY_PLAYER": "Cualquier jugador",\n    "REPORT_TO_BOARD_OWNER": "Reportar al administrador del foro",\n    "REPORT_TO_RIOT": "Reportar a Riot",\n    "DELETED_BY_INFO": "Borrador por %name% el %when% (%offense%)",\n    "EDITED_BY_INFO": "Borrado por %name% el %when%",\n    "BOARDS": "Foros",\n    "PIN": "Marcar",\n    "UNPIN": "Desmarcar"\n}\n'
}, function(n, e) {
    n.exports = '{\n    "ADD": "Ajouter",\n    "ADD_BUTTON": "Ajouter",\n    "ADD_CHOICE": "Ajouter choix",\n    "ADDING": "Ajout en cours",\n    "TOO_MANY_CHOICES": "Vous n\'avez que %limit% choix",\n    "AVATAR": "avatar",\n    "BEST": "MEILLEUR",\n    "CANCEL": "Annuler",\n    "CANCEL_BUTTON": "Annuler",\n    "CONFIRM_REVOKE": "RÃ©voquer ?",\n    "CLOSE": "Fermer",\n    "COMMENTS": "commentaires",\n    "DELETED": "effacÃ©",\n    "DISCUSS": "Discuter",\n    "EDIT": "Ã©diter",\n    "ERROR": "NavrÃ© ! Une erreur est survenue.",\n    "ERROR401": "DÃ©solÃ©... Vous devez Ãªtre de niveau supÃ©rieur.",\n    "ERROR403": "DÃ©solÃ©... Vous devez Ãªtre de niveau %level%.",\n    "ERROR403_OTHER": "Oh zut... vous n\'Ãªtes pas autorisÃ©(e).",\n    "ERROR_RATELIMIT": "Trop rapide ! Veuillez patienter avant de commenter Ã  nouveau !",\n    "ERROR429": "Veuillez patienter et essayer de nouveau.",\n    "FACECHECKING": "S\'aventurer dans le brouillard de guerre est dangereux, tout comme s\'aventurer sur le web. Les autres sites Internet ne sont pas tous aussi bien balisÃ©s que le nÃ´tre, alors faites preuve de bon sens quand vous cliquez sur des liens inconnus.",\n    "FROM": "De",\n    "MODERATOR": "ModÃ©rateur",\n    "MODERATORS": "ModÃ©rateurs",\n    "MORE": "plus",\n    "NO": "Non",\n    "NOTIFICATIONS": "Notifications",\n    "NOT_FOUND": "Introuvable",\n    "OWNER": "PropriÃ©taire",\n    "PLAYER": "Joueur",\n    "POST": "Poster",\n    "READ": "Lire",\n    "RECENT": "RÃ‰CENT",\n    "REMOVE": "supprimer",\n    "REPLY": "rÃ©pondre",\n    "REQUIRED": "(Requis)",\n    "SAVE": "sauvegarder",\n    "SEND": "Envoyer",\n    "SHOW": "Afficher",\n    "SOURCE": "Source",\n    "TOTAL": "Total",\n    "UNREAD": "Notifications non-lues",\n    "User": "Utilisateur",\n    "CHILD_COMMENT": "sous-forum",\n    "LEAVE_A_COMMENT": "Laisser un commentaire",\n    "LOGIN_TO_COMMENT": "Se connecter pour commenter",\n    "CHILD_COMMENTS": "sous-forums",\n    "MORE_COMMENTS_SHOW": "Afficher plus de commentaires",\n    "MORE_COMMENTS_COUNT": "%d commentaires supplÃ©mentaires",\n    "NEW_COMMENTS": "nouveaux commentaires",\n    "CHOICES_PROMPT": "Choix :",\n    "EXPIRATION_DATE_PROMPT": "Date d\'expiration (facultatif) :",\n    "QUESTION_PROMPT": "Question",\n    "COMMENT_IS_BELOW_THRESHOLD": "Commentaire sous le seuil",\n    "CREATE_BUTTON": "CrÃ©er",\n    "VOTE_BUTTON": "Voter",\n    "DELETE_COMMENT_CONFIRM": "Voulez-vous vraiment supprimer ce commentaire ?",\n    "LEAVING_SITE_CONFIRM": "Compris, et je souhaite poursuivre",\n    "EDITING_AS": "Ã‰ditÃ© en tant que",\n    "POSTING_AS": "Poster en tant que",\n    "GOING_TO": "Vous allez : ",\n    "LEAVING_SITE": "Vous quittez Riot Games",\n    "LEVEL_REGION": "Niveau %level%<br/> %region%",\n    "NEVER_SHOW_AGAIN": "Ne plus afficher",\n    "NO_UNREAD": "Aucune notification non-lue !",\n    "REMOVE_ALL": "Tout effacer",\n    "REVOKE": "RÃ©voquer",\n    "REVOKING": "RÃ©vocation en cours",\n    "SORTED_BY": "tri par",\n    "VOTES_FIVE_OR_MORE": "vote",\n    "VOTES_FOUR": "vote",\n    "VOTES_THREE": "vote",\n    "VOTES_TWO": "vote",\n    "VOTES_ZERO": "vote",\n    "VOTE_SINGULAR": "vote",\n    "VOTES_FIVE_OR_MORE_SUB": "%d votes",\n    "VOTES_FOUR_SUB": "%d votes",\n    "VOTES_THREE_SUB": "%d votes",\n    "VOTES_TWO_SUB": "%d votes",\n    "VOTES_ZERO_SUB": "%d votes",\n    "VOTE_SINGULAR_SUB": "%d vote",\n    "SAVE_CHANGES": "Sauvegarder",\n    "DETAILS": "DÃ©tails",\n    "CREATED_PREFIX": "CrÃ©Ã© le : %s",\n    "URL_PREFIX": "URL : %s",\n    "DESCRIPTION": "Description",\n    "GUIDELINES": "RÃ¨gles de conduite",\n    "DESCRIPTION_PLACEHOLDER": "Ce forum n\'a pas encore de description.",\n    "GUIDELINES_PLACEHOLDER": "Ce forum n\'a pas encore de rÃ¨gles de conduite.",\n    "NAVIGATION": "NAVIGATION",\n    "DISCUSSION": "Discussion",\n    "ABOUT": "Ã€ propos",\n    "REPORTS_WITH_COUNT": "Rapports (%d)",\n    "ACTIVITY": "ActivitÃ©",\n    "FEEDBACK": "Avis",\n    "CLOSE_THIS_BOARD": "Fermer ce forum",\n    "YES": "Oui",\n    "DELETE_HEADER": "Supprimer",\n    "AUTHOR_MESSAGE": "Message pour l\'auteur",\n    "OFFENSE_LABEL": "Infraction",\n    "OFFENSE_PLACEHOLDER": "SÃ©lectionnez une infraction...",\n    "MODERATION_COMMENT_LABEL": "Commentaire",\n    "BAN_LABEL": "Bannir ce joueur ?",\n    "BAN_DURATION_NONE": "Pas de bannissement",\n    "BAN_DURATION_ONE_HOUR": "1 heure",\n    "BAN_DURATION_TWENTY_FOUR_HOURS": "24 heures",\n    "BAN_DURATION_ONE_WEEK": "1 semaine",\n    "BAN_DURATION_PERMANENT": "Permanent",\n    "GLOBAL_BAN_LABEL": "Bannir de tous les forums ?",\n    "REPORT_HEADER": "Signaler",\n    "REPORT_OFFENSE_LABEL": "SÃ©lectionnez une infraction :",\n    "REPORT_OFFENSE_PLACEHOLDER": "SÃ©lectionnez une infraction...",\n    "REPORT_COMMENT_LABEL": "Commentaires supplÃ©mentaires :",\n    "REPORT": "Signaler",\n    "UNIVERSAL_RULE_JERK": "Soyez polis et respectueux",\n    "UNIVERSAL_RULE_MATURE": "Pas de contenu pour adulte",\n    "UNIVERSAL_RULE_SPAM": "Pas de spam",\n    "UNIVERSAL_RULE_GUIDELINES": "Suivez les rÃ¨gles de conduite",\n    "UNIVERSAL_RULE_PROMOTION": "Services, comptes et produits",\n    "UNIVERSAL_RULE_REPORTING": "Signaler des joueurs",\n    "UNIVERSAL_RULE_DOWNLOADS": "TÃ©lÃ©chargements illÃ©gaux",\n    "UNIVERSAL_RULE_ILLEGAL": "ActivitÃ© illÃ©gale",\n    "UNIVERSAL_RULE_THREATS": "Menaces",\n    "UNIVERSAL_RULE_PHISHING": "Phishing et scamming",\n    "NOTES_ONE": "Note",\n    "NOTES_FEW": "Notes",\n    "NOTES_MANY": "Notes",\n    "DISCUSSION_BYLINE": "Par %author% dans %board% %when%",\n    "REPORTED_SUMMARY_ONE_NAME": "SignalÃ© par %name1% %when% (%reason%)",\n    "REPORTED_SUMMARY_TWO_NAMES": "SignalÃ© par %name1% et %name2% %when% (%reason%)",\n    "REPORTED_SUMMARY_MANY_NAMES": "SignalÃ© par %name1%, %name2% et %other% %when% (%reason%)",\n    "OTHER_ONE": "%d autres",\n    "OTHER_FEW": "%d autres",\n    "OTHER_MANY": "%d autres",\n    "MODERATOR_ACTIONS_HEADER": "Actions du modÃ©rateur",\n    "THIRTY_DAYS": "30 jours",\n    "ACTION": "Action",\n    "OFFENSE": "Infraction",\n    "MANAGE": "GÃ©rer",\n    "ACTION_EDITED_DISCUSSION": "A modifiÃ© une discussion",\n    "ACTION_EDITED_COMMENT": "A modifiÃ© un commentaire",\n    "ACTION_DELETED_DISCUSSION": "A supprimÃ© une discussion",\n    "ACTION_DELETED_COMMENT": "A supprimÃ© un commentaire",\n    "ACTION_BANNED_PLAYER": "A banni un joueur",\n    "ACTION_DELETED_DISCUSSION_AND_BANNED": "A supprimÃ© une discussion et banni un joueur",\n    "ACTION_DELETED_COMMENT_AND_BANNED": "A supprimÃ© un commentaire et banni un joueur",\n    "ANY_TYPE": "N\'importe quel type",\n    "ANY_MODERATOR": "N\'importe quel modÃ©rateur",\n    "ANY_PLAYER": "N\'importe quel joueur",\n    "REPORT_TO_BOARD_OWNER": "Signaler au propriÃ©taire du forum",\n    "REPORT_TO_RIOT": "Signaler Ã  Riot",\n    "DELETED_BY_INFO": "SupprimÃ© par %name% %when% (%offense%)",\n    "EDITED_BY_INFO": "SupprimÃ© par %name% %when%",\n    "BOARDS": "Forums",\n    "PIN": "Ã‰pingler",\n    "UNPIN": "DÃ©sÃ©pingler"\n}\n'
}, function(n, e) {
    n.exports = '{\n    "ADD": "HozzÃ¡adÃ¡s",\n    "ADD_BUTTON": "HozzÃ¡adÃ¡s",\n    "ADD_CHOICE": "VÃ¡lasztÃ¡si lehetÅ‘sÃ©g hozzÃ¡adÃ¡sa",\n    "ADDING": "HozzÃ¡adÃ¡s",\n    "TOO_MANY_CHOICES": "Legfeljebb %limit% vÃ¡lasztÃ¡si lehetÅ‘sÃ©g lehet",\n    "AVATAR": "avatÃ¡r",\n    "BEST": "LEGJOBB",\n    "CANCEL": "MÃ©gse",\n    "CANCEL_BUTTON": "MÃ©gse",\n    "CONFIRM_REVOKE": "Visszavonod?",\n    "CLOSE": "BezÃ¡rÃ¡s",\n    "COMMENTS": "hozzÃ¡szÃ³lÃ¡s",\n    "DELETED": "tÃ¶rÃ¶lve",\n    "DISCUSS": "HozzÃ¡szÃ³lÃ¡sok",\n    "EDIT": "szerkesztÃ©s",\n    "ERROR": "SajnÃ¡ljuk! Hiba tÃ¶rtÃ©nt.",\n    "ERROR401": "KÃ¡râ€¦ sajnos ehhez magasabb szintÅ±nek kell lenned.",\n    "ERROR403": "KÃ¡râ€¦ sajnos ehhez %level%. szintÅ±nek kell lenned.",\n    "ERROR403_OTHER": "Sajnos nincs hozzÃ¡fÃ©rÃ©sed... szomorÃº dolgok ezek.",\n    "ERROR_RATELIMIT": "HÃºha, tÃºl gyors vagy! KÃ©rjÃ¼k, vÃ¡rj, mielÅ‘tt ismÃ©t hozzÃ¡szÃ³lnÃ¡l.",\n    "ERROR429": "VÃ¡rj egy kicsit, Ã©s prÃ³bÃ¡lkozz Ãºjra.",\n    "FACECHECKING": "Årszem nÃ©lkÃ¼l, csak Ãºgy benÃ©zni egy bokorba igen veszÃ©lyes; ugyanÃ­gy veszÃ©lyes csak Ãºgy kÃ¼lÃ¶nfÃ©le linkekre kattintani. MÃ¡s honlapok nem biztos, hogy olyan biztonsÃ¡gosak, mint a miÃ©nk, ezÃ©rt kÃ©rjÃ¼k, gondold Ã¡t, mielÅ‘tt ismeretlen linkekre kattintasz.",\n    "FROM": "FeladÃ³:",\n    "MODERATOR": "ModerÃ¡tor",\n    "MODERATORS": "ModerÃ¡torok",\n    "MORE": "bÅ‘vebben",\n    "NO": "Nem",\n    "NOTIFICATIONS": "Ã‰rtesÃ­tÃ©sek",\n    "NOT_FOUND": "Nem talÃ¡lhatÃ³",\n    "OWNER": "Tulajdonos",\n    "PLAYER": "JÃ¡tÃ©kos",\n    "POST": "HozzÃ¡szÃ³lÃ¡s",\n    "READ": "OlvasÃ¡s",\n    "RECENT": "LEGUTÃ“BBI",\n    "REMOVE": "tÃ¶rlÃ©s",\n    "REPLY": "vÃ¡lasz",\n    "REQUIRED": "(kÃ¶telezÅ‘)",\n    "SAVE": "mentÃ©s",\n    "SEND": "KÃ¼ldÃ©s",\n    "SHOW": "MegjelenÃ­tÃ©s",\n    "SOURCE": "ForrÃ¡s",\n    "TOTAL": "Ã–sszes",\n    "UNREAD": "Olvasatlan Ã©rtesÃ­tÃ©sek",\n    "User": "FelhasznÃ¡lÃ³",\n    "CHILD_COMMENT": "vÃ¡lasz",\n    "LEAVE_A_COMMENT": "HozzÃ¡szÃ³lÃ¡s kÃ¼ldÃ©se",\n    "LOGIN_TO_COMMENT": "A hozzÃ¡szÃ³lÃ¡shoz be kell jelentkezned",\n    "CHILD_COMMENTS": "vÃ¡lasz",\n    "MORE_COMMENTS_SHOW": "TovÃ¡bbi hozzÃ¡szÃ³lÃ¡sok",\n    "MORE_COMMENTS_COUNT": "%d tovÃ¡bbi hozzÃ¡szÃ³lÃ¡s",\n    "NEW_COMMENTS": "Ãºj hozzÃ¡szÃ³lÃ¡s",\n    "CHOICES_PROMPT": "VÃ¡lasztÃ¡si lehetÅ‘sÃ©gek",\n    "EXPIRATION_DATE_PROMPT": "LejÃ¡rati dÃ¡tum (nem kÃ¶telezÅ‘):",\n    "QUESTION_PROMPT": "KÃ©rdÃ©s",\n    "COMMENT_IS_BELOW_THRESHOLD": "A hozzÃ¡szÃ³lÃ¡s a kÃ¼szÃ¶bÃ©rtÃ©k alÃ¡ esik",\n    "CREATE_BUTTON": "LÃ¡trehozÃ¡s",\n    "VOTE_BUTTON": "SzavazÃ¡s",\n    "DELETE_COMMENT_CONFIRM": "Biztos, hogy tÃ¶rÃ¶lni szeretnÃ©d ezt a hozzÃ¡szÃ³lÃ¡st?",\n    "LEAVING_SITE_CONFIRM": "Ã‰rtettem, hajrÃ¡",\n    "EDITING_AS": "SzerkesztÃ©s, mint",\n    "POSTING_AS": "HozzÃ¡szÃ³lÃ¡s mint:",\n    "GOING_TO": "Erre az oldalra kÃ©szÃ¼lsz:",\n    "LEAVING_SITE": "Elhagyod a Riot Games-t",\n    "LEVEL_REGION": "%level%. szint, %region%",\n    "NEVER_SHOW_AGAIN": "Ne mutasd tÃ¶bbÃ©",\n    "NO_UNREAD": "Nincs olvasatlan Ã©rtesÃ­tÃ©s!",\n    "REMOVE_ALL": "Ã–sszes tÃ¶rlÃ©se",\n    "REVOKE": "VisszavonÃ¡s",\n    "REVOKING": "VisszavonÃ¡s",\n    "SORTED_BY": "rendezÃ©si szempont:",\n    "VOTES_FIVE_OR_MORE": "szavazat",\n    "VOTES_FOUR": "szavazat",\n    "VOTES_THREE": "szavazat",\n    "VOTES_TWO": "szavazat",\n    "VOTES_ZERO": "szavazat",\n    "VOTE_SINGULAR": "szavazat",\n    "VOTES_FIVE_OR_MORE_SUB": "%d szavazat",\n    "VOTES_FOUR_SUB": "%d szavazat",\n    "VOTES_THREE_SUB": "%d szavazat",\n    "VOTES_TWO_SUB": "%d szavazat",\n    "VOTES_ZERO_SUB": "%d szavazat",\n    "VOTE_SINGULAR_SUB": "%d szavazat",\n    "SAVE_CHANGES": "VÃ¡ltoztatÃ¡sok mentÃ©se",\n    "DETAILS": "RÃ©szletek",\n    "CREATED_PREFIX": "LÃ©trehozva: %s",\n    "URL_PREFIX": "URL-cÃ­m: %s",\n    "DESCRIPTION": "LeÃ­rÃ¡s",\n    "GUIDELINES": "IrÃ¡nyelvek",\n    "DESCRIPTION_PLACEHOLDER": "A fÃ³rumhoz egyelÅ‘re nem kÃ©szÃ¼lt leÃ­rÃ¡s.",\n    "GUIDELINES_PLACEHOLDER": "Ehhez a fÃ³rumhoz mÃ©g nincsenek megadva irÃ¡nyelvek.",\n    "NAVIGATION": "NAVIGÃCIÃ“",\n    "DISCUSSION": "MegvitatÃ¡s",\n    "ABOUT": "TudnivalÃ³k",\n    "REPORTS_WITH_COUNT": "JelentÃ©sek (%d)",\n    "ACTIVITY": "TevÃ©kenysÃ©g",\n    "FEEDBACK": "VisszajelzÃ©s",\n    "CLOSE_THIS_BOARD": "Oldal bezÃ¡rÃ¡sa",\n    "YES": "Igen",\n    "DELETE_HEADER": "TÃ¶rlÃ©s",\n    "AUTHOR_MESSAGE": "Ãœzenet a szerzÅ‘nek",\n    "OFFENSE_LABEL": "SÃ©relem",\n    "OFFENSE_PLACEHOLDER": "VÃ¡laszd ki a sÃ©relem tÃ­pusÃ¡t...",\n    "MODERATION_COMMENT_LABEL": "MegjegyzÃ©s",\n    "BAN_LABEL": "Kitiltod a jÃ¡tÃ©kost?",\n    "BAN_DURATION_NONE": "Nincs kitiltÃ¡s",\n    "BAN_DURATION_ONE_HOUR": "1 Ã³ra",\n    "BAN_DURATION_TWENTY_FOUR_HOURS": "24 Ã³ra",\n    "BAN_DURATION_ONE_WEEK": "1 hÃ©t",\n    "BAN_DURATION_PERMANENT": "VÃ©gleges",\n    "GLOBAL_BAN_LABEL": "KitiltÃ¡s az Ã¶sszes fÃ³rumrÃ³l?",\n    "REPORT_HEADER": "JelentÃ©s",\n    "REPORT_OFFENSE_LABEL": "SÃ©relem tÃ­pusa:",\n    "REPORT_OFFENSE_PLACEHOLDER": "VÃ¡laszd ki a sÃ©relem tÃ­pusÃ¡t...",\n    "REPORT_COMMENT_LABEL": "TovÃ¡bbi megjegyzÃ©sek:",\n    "REPORT": "JelentÃ©s",\n    "UNIVERSAL_RULE_JERK": "Ne lÃ©gy bunkÃ³",\n    "UNIVERSAL_RULE_MATURE": "Semmi felnÅ‘tteknek szÃ³lÃ³ tartalom",\n    "UNIVERSAL_RULE_SPAM": "Semmi kÃ©retlen Ã¼zenet",\n    "UNIVERSAL_RULE_GUIDELINES": "Az adott fÃ³rum irÃ¡nyelveit be kell tartani",\n    "UNIVERSAL_RULE_PROMOTION": "FiÃ³kok, termÃ©kek Ã©s szolgÃ¡ltatÃ¡sok hirdetÃ©se",\n    "UNIVERSAL_RULE_REPORTING": "MÃ¡s jÃ¡tÃ©kosok jelentÃ©se",\n    "UNIVERSAL_RULE_DOWNLOADS": "IllegÃ¡lis letÃ¶ltÃ©sek",\n    "UNIVERSAL_RULE_ILLEGAL": "IllegÃ¡lis tevÃ©kenysÃ©g",\n    "UNIVERSAL_RULE_THREATS": "FenyegetÃ©sek",\n    "UNIVERSAL_RULE_PHISHING": "AdathalÃ¡szat Ã©s csalÃ¡s",\n    "NOTES_ONE": "MegjegyzÃ©s",\n    "NOTES_FEW": "MegjegyzÃ©sek",\n    "NOTES_MANY": "MegjegyzÃ©sek",\n    "DISCUSSION_BYLINE": "SzerzÅ‘: %author%, %when%, megjelenÃ©s helye: %board%",\n    "REPORTED_SUMMARY_ONE_NAME": "Jelentette: %name1%, %when%, jelentÃ©s oka: %reason%.",\n    "REPORTED_SUMMARY_TWO_NAMES": "Jelentette: %name1% Ã©s %name2%, jelentÃ©s oka: %reason%.",\n    "REPORTED_SUMMARY_MANY_NAMES": "Jelentette: %name1%, %name2% Ã©s %other%, %when%, jelentÃ©s oka: %reason%.",\n    "OTHER_ONE": "tovÃ¡bbi %d szemÃ©ly",\n    "OTHER_FEW": "tovÃ¡bbi %d szemÃ©ly",\n    "OTHER_MANY": "tovÃ¡bbi %d szemÃ©ly",\n    "MODERATOR_ACTIONS_HEADER": "ModerÃ¡tori mÅ±veletek",\n    "THIRTY_DAYS": "30 nap",\n    "ACTION": "MÅ±velet",\n    "OFFENSE": "SÃ©relem",\n    "MANAGE": "KezelÃ©s",\n    "ACTION_EDITED_DISCUSSION": "Szerkesztett egy tÃ©mÃ¡t",\n    "ACTION_EDITED_COMMENT": "Szerkesztett egy hozzÃ¡szÃ³lÃ¡st",\n    "ACTION_DELETED_DISCUSSION": "TÃ¶rÃ¶lt egy tÃ©mÃ¡t",\n    "ACTION_DELETED_COMMENT": "TÃ¶rÃ¶lt egy hozzÃ¡szÃ³lÃ¡st",\n    "ACTION_BANNED_PLAYER": "Kitiltott egy jÃ¡tÃ©kost",\n    "ACTION_DELETED_DISCUSSION_AND_BANNED": "TÃ¶rÃ¶lt egy tÃ©mÃ¡t Ã©s kitiltott egy jÃ¡tÃ©kost",\n    "ACTION_DELETED_COMMENT_AND_BANNED": "TÃ¶rÃ¶lt egy hozzÃ¡szÃ³lÃ¡st Ã©s kitiltott egy jÃ¡tÃ©kost",\n    "ANY_TYPE": "BÃ¡rmely tÃ­pus",\n    "ANY_MODERATOR": "BÃ¡rmely moderÃ¡tor",\n    "ANY_PLAYER": "BÃ¡rmely jÃ¡tÃ©kos",\n    "REPORT_TO_BOARD_OWNER": "JelentÃ©s kÃ¼ldÃ©se a fÃ³rum tulajdonosÃ¡nak",\n    "REPORT_TO_RIOT": "JelentÃ©s kÃ¼ldÃ©se a Riotnak",\n    "DELETED_BY_INFO": "TÃ¶rÃ¶lte: %name%, %when% (%offense%)",\n    "EDITED_BY_INFO": "TÃ¶rÃ¶lte: %name%, %when%",\n    "BOARDS": "FÃ³rumok",\n    "PIN": "RÃ¶gzÃ­tÃ©s",\n    "UNPIN": "RÃ¶gzÃ­tÃ©s feloldÃ¡sa"\n}\n';
}, function(n, e) {
    n.exports = '{\n    "ADD": "Aggiungi",\n    "ADD_BUTTON": "Aggiungi",\n    "ADD_CHOICE": "Aggiungi scelta",\n    "ADDING": "In aggiunta",\n    "TOO_MANY_CHOICES": "Puoi scegliere fino ad un massimo di %limit% ",\n    "AVATAR": "avatar",\n    "BEST": "MIGLIORE",\n    "CANCEL": "Cancella",\n    "CANCEL_BUTTON": "Tasto cancella",\n    "CONFIRM_REVOKE": "Revocare?",\n    "CLOSE": "Chiudi",\n    "COMMENTS": "commenti",\n    "DELETED": "cancellato",\n    "DISCUSS": "Discuti",\n    "EDIT": "modifica",\n    "ERROR": "Spiacenti! Si Ã¨ verificato un errore.",\n    "ERROR401": "Ci spiace... devi essere di livello piÃ¹ alto.",\n    "ERROR403": "Ci spiace... devi essere di livello %level%.",\n    "ERROR403_OTHER": "Non sei autorizzato.",\n    "ERROR_RATELIMIT": "Troppo veloce! Per favore aspetta prima di commentare un\'altra volta!",\n    "ERROR429": "Per favore attendi e riprova.",\n    "FACECHECKING": "Avventurarsi alla cieca nell\'erba alta Ã¨ rischioso, cosÃ¬ come lo Ã¨ nella Rete. Altri siti potrebbero non essere sicuri come il nostro, quindi fate attenzione quando cliccate su link sconosciuti.",\n    "FROM": "Da",\n    "MODERATOR": "Moderatore",\n    "MODERATORS": "Moderatori",\n    "MORE": "piÃ¹",\n    "NO": "No",\n    "NOTIFICATIONS": "Notifiche",\n    "NOT_FOUND": "Non trovato",\n    "OWNER": "Proprietario",\n    "PLAYER": "Giocatore",\n    "POST": "Posta",\n    "READ": "Leggi",\n    "RECENT": "RECENTE",\n    "REMOVE": "cancella",\n    "REPLY": "rispondi",\n    "REQUIRED": "(Richiesto)",\n    "SAVE": "salva",\n    "SEND": "Invia",\n    "SHOW": "Mostra",\n    "SOURCE": "Fonte",\n    "TOTAL": "Totale",\n    "UNREAD": "Notifiche non lette",\n    "User": "Utente",\n    "CHILD_COMMENT": "figlio",\n    "LEAVE_A_COMMENT": "Lascia un commento",\n    "LOGIN_TO_COMMENT": "Accedi per commentare",\n    "CHILD_COMMENTS": "commento/i",\n    "MORE_COMMENTS_SHOW": "mostra piÃ¹ commenti",\n    "MORE_COMMENTS_COUNT": "%d commenti in piÃ¹",\n    "NEW_COMMENTS": "nuovi commenti",\n    "CHOICES_PROMPT": "Scelte:",\n    "EXPIRATION_DATE_PROMPT": "Data di scadenza (opzionale):",\n    "QUESTION_PROMPT": "Domanda",\n    "COMMENT_IS_BELOW_THRESHOLD": "Il commento Ã¨ sotto la soglia",\n    "CREATE_BUTTON": "Crea",\n    "VOTE_BUTTON": "Vota",\n    "DELETE_COMMENT_CONFIRM": "Sei sicuro di voler cancellare questo commento?",\n    "LEAVING_SITE_CONFIRM": "Ho capito e intendo proseguire",\n    "EDITING_AS": "Modifica come",\n    "POSTING_AS": "Posta come",\n    "GOING_TO": "Ti stai dirigendo verso:",\n    "LEAVING_SITE": "Stai lasciando Riot Games",\n    "LEVEL_REGION": "Livello %level%<br/> %region%",\n    "NEVER_SHOW_AGAIN": "Non mostrare piÃ¹",\n    "NO_UNREAD": "Nessuna nuova notifica!",\n    "REMOVE_ALL": "Cancella tutto",\n    "REVOKE": "Revoca",\n    "REVOKING": "In revoca",\n    "SORTED_BY": "ordinati per",\n    "VOTES_FIVE_OR_MORE": "voti",\n    "VOTES_FOUR": "voti",\n    "VOTES_THREE": "voti",\n    "VOTES_TWO": "voti",\n    "VOTES_ZERO": "voti",\n    "VOTE_SINGULAR": "voto",\n    "VOTES_FIVE_OR_MORE_SUB": "%d voti",\n    "VOTES_FOUR_SUB": "%d voti",\n    "VOTES_THREE_SUB": "%d voti",\n    "VOTES_TWO_SUB": "%d voti",\n    "VOTES_ZERO_SUB": "%d voti",\n    "VOTE_SINGULAR_SUB": "%d voto",\n    "SAVE_CHANGES": "Salva modifiche",\n    "DETAILS": "Dettagli",\n    "CREATED_PREFIX": "Creato: %s",\n    "URL_PREFIX": "URL: %s",\n    "DESCRIPTION": "Descrizione",\n    "GUIDELINES": "Regole",\n    "DESCRIPTION_PLACEHOLDER": "Non Ã¨ ancora stata creata una descrizione per questo forum.",\n    "GUIDELINES_PLACEHOLDER": "Non sono ancora state create delle linee guida per questo forum.",\n    "NAVIGATION": "NAVIGAZIONE",\n    "DISCUSSION": "Discussione",\n    "ABOUT": "Informazioni",\n    "REPORTS_WITH_COUNT": "(%d) Segnalazioni",\n    "ACTIVITY": "AttivitÃ ",\n    "FEEDBACK": "Feedback",\n    "CLOSE_THIS_BOARD": "Chiudi questa board",\n    "YES": "SÃ¬",\n    "DELETE_HEADER": "Cancella",\n    "AUTHOR_MESSAGE": "Messaggio per l\'autore",\n    "OFFENSE_LABEL": "Infrazione",\n    "OFFENSE_PLACEHOLDER": "Seleziona un\'infrazione...",\n    "MODERATION_COMMENT_LABEL": "Commenta",\n    "BAN_LABEL": "Vuoi sospendere questo giocatore?",\n    "BAN_DURATION_NONE": "Nessuna sospensione",\n    "BAN_DURATION_ONE_HOUR": "1 ora",\n    "BAN_DURATION_TWENTY_FOUR_HOURS": "24 ore",\n    "BAN_DURATION_ONE_WEEK": "1 settimana",\n    "BAN_DURATION_PERMANENT": "Permanente",\n    "GLOBAL_BAN_LABEL": "Vuoi sospendere da tutte le Board?",\n    "REPORT_HEADER": "Segnala",\n    "REPORT_OFFENSE_LABEL": "Seleziona l\'infrazione:",\n    "REPORT_OFFENSE_PLACEHOLDER": "Seleziona un\'infrazione...",\n    "REPORT_COMMENT_LABEL": "Commenti aggiuntivi:",\n    "REPORT": "Segnala",\n    "UNIVERSAL_RULE_JERK": "Non essere maleducato",\n    "UNIVERSAL_RULE_MATURE": "Nessun contenuto maturo",\n    "UNIVERSAL_RULE_SPAM": "Niente spam",\n    "UNIVERSAL_RULE_GUIDELINES": "Rispetta le linee guida dei forum",\n    "UNIVERSAL_RULE_PROMOTION": "Promozione di servizi, account o prodotti ",\n    "UNIVERSAL_RULE_REPORTING": "Segnalare altri giocatori",\n    "UNIVERSAL_RULE_DOWNLOADS": "Download illegali",\n    "UNIVERSAL_RULE_ILLEGAL": "AttivitÃ  illegali",\n    "UNIVERSAL_RULE_THREATS": "Minacce",\n    "UNIVERSAL_RULE_PHISHING": "Phishing e truffe",\n    "NOTES_ONE": "Nota",\n    "NOTES_FEW": "Note",\n    "NOTES_MANY": "Note",\n    "DISCUSSION_BYLINE": "Di %author% in %board% %when%",\n    "REPORTED_SUMMARY_ONE_NAME": "Segnalato da %name1% %when% per %reason%",\n    "REPORTED_SUMMARY_TWO_NAMES": "Segnalato da %name1% e %name2% %when% per %reason%",\n    "REPORTED_SUMMARY_MANY_NAMES": "Segnalato da %name1%, %name2% e %other% %when% per %reason%",\n    "OTHER_ONE": "%d altro",\n    "OTHER_FEW": "%d altri",\n    "OTHER_MANY": "%d altri",\n    "MODERATOR_ACTIONS_HEADER": "Azioni del moderatore",\n    "THIRTY_DAYS": "30 giorni",\n    "ACTION": "Azione",\n    "OFFENSE": "Infrazione",\n    "MANAGE": "Gestisci",\n    "ACTION_EDITED_DISCUSSION": "Discussione modificata",\n    "ACTION_EDITED_COMMENT": "Commento modificato",\n    "ACTION_DELETED_DISCUSSION": "Discussione eliminata",\n    "ACTION_DELETED_COMMENT": "Commento eliminato",\n    "ACTION_BANNED_PLAYER": "Giocatore sospeso",\n    "ACTION_DELETED_DISCUSSION_AND_BANNED": "Discussione eliminata e giocatore sospeso",\n    "ACTION_DELETED_COMMENT_AND_BANNED": "Commento eliminato e giocatore sospeso",\n    "ANY_TYPE": "Qualunque tipo",\n    "ANY_MODERATOR": "Qualunque moderatore",\n    "ANY_PLAYER": "Qualunque giocatore",\n    "REPORT_TO_BOARD_OWNER": "Segnala al proprietario del forum",\n    "REPORT_TO_RIOT": "Segnala a Riot",\n    "DELETED_BY_INFO": "Cancellato da %name% %when% (%offense%)",\n    "EDITED_BY_INFO": "Cancellato da %name% %when%",\n    "BOARDS": "Forum",\n    "PIN": "Evidenzia",\n    "UNPIN": "Rimuovi dall\'evidenza"\n}\n'
}, function(n, e) {
    n.exports = '{\n    "ADD": "è¿½åŠ ",\n    "ADD_BUTTON": "è¿½åŠ ",\n    "ADD_CHOICE": "é¸æŠžè‚¢ã‚’è¿½åŠ ",\n    "ADDING": "è¿½åŠ ã™ã‚‹",\n    "TOO_MANY_CHOICES": "é¸æŠžè‚¢ã¯æœ€å¤§%limit%ã§ã™ã€‚",\n    "AVATAR": "ã‚¢ãƒã‚¿ãƒ¼",\n    "BEST": "ãƒ™ã‚¹ãƒˆ",\n    "CANCEL": "ã‚­ãƒ£ãƒ³ã‚»ãƒ«",\n    "CANCEL_BUTTON": "ã‚­ãƒ£ãƒ³ã‚»ãƒ«ãƒœã‚¿ãƒ³",\n    "CONFIRM_REVOKE": "å–ã‚Šæ¶ˆã—ã¾ã™ã‹ï¼Ÿ",\n    "CLOSE": "é–‰ã˜ã‚‹",\n    "COMMENTS": "ã‚³ãƒ¡ãƒ³ãƒˆ",\n    "DELETED": "å‰Šé™¤æ¸ˆã¿",\n    "DISCUSS": "ãƒ‡ã‚£ã‚¹ã‚«ãƒƒã‚·ãƒ§ãƒ³ã™ã‚‹",\n    "EDIT": "ç·¨é›†",\n    "ERROR": "ç”³ã—è¨³ã‚ã‚Šã¾ã›ã‚“ã€‚ã‚¨ãƒ©ãƒ¼ãŒç™ºç”Ÿã—ã¾ã—ãŸã€‚",\n    "ERROR401": "ç”³ã—è¨³ã‚ã‚Šã¾ã›ã‚“ã€‚ãƒ¬ãƒ™ãƒ«ãŒè¶³ã‚Šã¾ã›ã‚“ã€‚",\n    "ERROR403": "ç”³ã—è¨³ã‚ã‚Šã¾ã›ã‚“ã€‚ãƒ¬ãƒ™ãƒ«ãŒ%level%ã«é”ã—ã¦ã„ã‚‹å¿…è¦ãŒã‚ã‚Šã¾ã™ã€‚",\n    "ERROR403_OTHER": "ç”³ã—è¨³ã‚ã‚Šã¾ã›ã‚“ã€‚æ¨©é™ãŒã‚ã‚Šã¾ã›ã‚“ã€‚",\n    "ERROR_RATELIMIT": "ã‚³ãƒ¡ãƒ³ãƒˆã‚’å†æŠ•ç¨¿ã™ã‚‹å ´åˆã¯å°‘ã—æ™‚é–“ã‚’ãŠã„ã¦ãã ã•ã„ã€‚",\n    "ERROR429": "å°‘ã—å¾…ã£ã¦ã‹ã‚‰å†åº¦ãŠè©¦ã—ãã ã•ã„ã€‚",\n    "FACECHECKING": "é—‡é›²ã«çªã£ã“ã‚“ã§ã„ãã®ãŒå±é™ºãªã®ã¯ã€èŒ‚ã¿ã‚‚ã‚¦ã‚§ãƒ–ã‚µã‚¤ãƒˆã‚‚åŒã˜ã§ã™ã€‚ä»–ã®ã‚¦ã‚§ãƒ–ã‚µã‚¤ãƒˆãŒç§ãŸã¡ã®ã‚‚ã®ã¨åŒæ§˜ã«å®‰å…¨ã¨ã¯é™ã‚Šã¾ã›ã‚“ã€‚æœªçŸ¥ã®ãƒªãƒ³ã‚¯ã‚’ã‚¯ãƒªãƒƒã‚¯ã™ã‚‹ã¨ãã¯æ³¨æ„ã—ã¦ãã ã•ã„ã€‚",\n    "FROM": "ã‹ã‚‰",\n    "MODERATOR": "ç®¡ç†äºº",\n    "MODERATORS": "ç®¡ç†äºº",\n    "MORE": "ç¶šã",\n    "NO": "ã„ã„ãˆ",\n    "NOTIFICATIONS": "é€šçŸ¥",\n    "NOT_FOUND": "è¦‹ã¤ã‹ã‚Šã¾ã›ã‚“ã§ã—ãŸ",\n    "OWNER": "ã‚ªãƒ¼ãƒŠãƒ¼",\n    "PLAYER": "ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼",\n    "POST": "æŠ•ç¨¿",\n    "READ": "èª­ã‚€",\n    "RECENT": "æœ€æ–°",\n    "REMOVE": "å‰Šé™¤",\n    "REPLY": "è¿”ä¿¡",\n    "REQUIRED": "ï¼ˆå¿…é ˆï¼‰",\n    "SAVE": "ä¿å­˜",\n    "SEND": "é€ä¿¡",\n    "SHOW": "è¡¨ç¤º",\n    "SOURCE": "ã‚½ãƒ¼ã‚¹",\n    "TOTAL": "åˆè¨ˆ",\n    "UNREAD": "æœªèª­é€šçŸ¥",\n    "User": "ãƒ¦ãƒ¼ã‚¶ãƒ¼",\n    "CHILD_COMMENT": "å­",\n    "LEAVE_A_COMMENT": "ã‚³ãƒ¡ãƒ³ãƒˆã‚’æ®‹ã™",\n    "LOGIN_TO_COMMENT": "ãƒ­ã‚°ã‚¤ãƒ³ã—ã¦ã‚³ãƒ¡ãƒ³ãƒˆã™ã‚‹",\n    "CHILD_COMMENTS": "å­",\n    "MORE_COMMENTS_SHOW": "ã‚‚ã£ã¨ã‚³ãƒ¡ãƒ³ãƒˆã‚’è¦‹ã‚‹",\n    "MORE_COMMENTS_COUNT": "%d ã‚³ãƒ¡ãƒ³ãƒˆ",\n    "NEW_COMMENTS": "NEW",\n    "CHOICES_PROMPT": "é¸æŠžè‚¢:",\n    "EXPIRATION_DATE_PROMPT": "æœ‰åŠ¹æœŸé™ï¼ˆä»»æ„ï¼‰:",\n    "QUESTION_PROMPT": "è³ªå•",\n    "COMMENT_IS_BELOW_THRESHOLD": "ã‚³ãƒ¡ãƒ³ãƒˆã¯ä¸‹ã«éš ã‚Œã¦ã„ã¾ã™",\n    "CREATE_BUTTON": "ä½œæˆ",\n    "VOTE_BUTTON": "æŠ•ç¥¨",\n    "DELETE_COMMENT_CONFIRM": "ã“ã®ã‚³ãƒ¡ãƒ³ãƒˆã‚’å‰Šé™¤ã—ã¦ã‚‚ã‚ˆã‚ã—ã„ã§ã™ã‹ï¼Ÿ",\n    "LEAVING_SITE_CONFIRM": "äº†è§£ã—ã¦é€²ã‚€",\n    "EDITING_AS": "ç·¨é›†ä¸­:",\n    "POSTING_AS": "æ¬¡ã¨ã—ã¦æŠ•ç¨¿ä¸­:",\n    "GOING_TO": "ã“ã“ã«ç§»å‹•: ",\n    "LEAVING_SITE": "ãƒ©ã‚¤ã‚¢ãƒƒãƒˆã‚²ãƒ¼ãƒ ã‚ºã‚’å‡ºã‚ˆã†ã¨ã—ã¦ã„ã¾ã™",\n    "LEVEL_REGION": "ãƒ¬ãƒ™ãƒ«%level%<br/>%region%",\n    "NEVER_SHOW_AGAIN": "ä»Šå¾Œã¯è¡¨ç¤ºã—ãªã„",\n    "NO_UNREAD": "æœªèª­ã®é€šçŸ¥ã¯ã‚ã‚Šã¾ã›ã‚“ã€‚",\n    "REMOVE_ALL": "ã™ã¹ã¦å‰Šé™¤",\n    "REVOKE": "å–ã‚Šæ¶ˆã—",\n    "REVOKING": "å–ã‚Šæ¶ˆã™",\n    "SORTED_BY": "ã‚½ãƒ¼ãƒˆ:",\n    "VOTES_FIVE_OR_MORE": "ç¥¨",\n    "VOTES_FOUR": "ç¥¨",\n    "VOTES_THREE": "ç¥¨",\n    "VOTES_TWO": "ç¥¨",\n    "VOTES_ZERO": "ç¥¨",\n    "VOTE_SINGULAR": "ç¥¨",\n    "VOTES_FIVE_OR_MORE_SUB": "%dç¥¨",\n    "VOTES_FOUR_SUB": "%dç¥¨",\n    "VOTES_THREE_SUB": "%dç¥¨",\n    "VOTES_TWO_SUB": "%dç¥¨",\n    "VOTES_ZERO_SUB": "%dç¥¨",\n    "VOTE_SINGULAR_SUB": "%dç¥¨",\n    "SAVE_CHANGES": "å¤‰æ›´ã‚’ä¿å­˜",\n    "DETAILS": "è©³ç´°",\n    "CREATED_PREFIX": "ä½œæˆæ¸ˆã¿: %s",\n    "URL_PREFIX": "URL: %s",\n    "DESCRIPTION": "èª¬æ˜Ž",\n    "GUIDELINES": "ã‚¬ã‚¤ãƒ‰ãƒ©ã‚¤ãƒ³",\n    "DESCRIPTION_PLACEHOLDER": "èª¬æ˜Žæ–‡ã¯ã¾ã ä½œæˆã•ã‚Œã¦ã„ã¾ã›ã‚“ã€‚",\n    "GUIDELINES_PLACEHOLDER": "ã“ã®ãƒœãƒ¼ãƒ‰ã®ã‚¬ã‚¤ãƒ‰ãƒ©ã‚¤ãƒ³ã¯ã¾ã ä½œæˆã•ã‚Œã¦ã„ã¾ã›ã‚“ã€‚",\n    "NAVIGATION": "ãƒŠãƒ“ã‚²ãƒ¼ã‚·ãƒ§ãƒ³",\n    "DISCUSSION": "ãƒ‡ã‚£ã‚¹ã‚«ãƒƒã‚·ãƒ§ãƒ³",\n    "ABOUT": "ã‚¢ãƒã‚¦ãƒˆ",\n    "REPORTS_WITH_COUNT": "é€šå ±(%d)",\n    "ACTIVITY": "ã‚¢ã‚¯ãƒ†ã‚£ãƒ“ãƒ†ã‚£ãƒ¼",\n    "FEEDBACK": "ãƒ•ã‚£ãƒ¼ãƒ‰ãƒãƒƒã‚¯",\n    "CLOSE_THIS_BOARD": "ã“ã®ãƒœãƒ¼ãƒ‰ã‚’é–‰ã˜ã‚‹",\n    "YES": "ã¯ã„",\n    "DELETE_HEADER": "å‰Šé™¤",\n    "AUTHOR_MESSAGE": "æŠ•ç¨¿è€…ã«ãƒ¡ãƒƒã‚»ãƒ¼ã‚¸ã™ã‚‹",\n    "OFFENSE_LABEL": "ãƒ«ãƒ¼ãƒ«é•å",\n    "OFFENSE_PLACEHOLDER": "ãƒ«ãƒ¼ãƒ«é•åã‚’é¸æŠžã—ã¦ãã ã•ã„â€¦",\n    "MODERATION_COMMENT_LABEL": "ã‚³ãƒ¡ãƒ³ãƒˆ",\n    "BAN_LABEL": "ã“ã®ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ã‚’ãƒãƒ³ã—ã¾ã™ã‹?",\n    "BAN_DURATION_NONE": "0 ãƒãƒ³",\n    "BAN_DURATION_ONE_HOUR": "1æ™‚é–“",\n    "BAN_DURATION_TWENTY_FOUR_HOURS": "24æ™‚é–“",\n    "BAN_DURATION_ONE_WEEK": "1é€±é–“",\n    "BAN_DURATION_PERMANENT": "ç„¡æœŸé™",\n    "GLOBAL_BAN_LABEL": "å…¨ã¦ã®ãƒœãƒ¼ãƒ‰ã‹ã‚‰ãƒãƒ³ã—ã¾ã™ã‹?",\n    "REPORT_HEADER": "é€šå ±",\n    "REPORT_OFFENSE_LABEL": "é•åã®ç¨®é¡žã‚’é¸æŠž:",\n    "REPORT_OFFENSE_PLACEHOLDER": "é•åã®ç¨®é¡žã‚’é¸æŠžã—ã¦ãã ã•ã„â€¦",\n    "REPORT_COMMENT_LABEL": "è¿½åŠ ã‚³ãƒ¡ãƒ³ãƒˆ:",\n    "REPORT": "é€šå ±",\n    "UNIVERSAL_RULE_JERK": "ä»–ã®ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ã®æ°—åˆ†ã‚’å®³ã™ã‚‹ã“ã¨ã¯é¿ã‘ã¾ã—ã‚‡ã†",\n    "UNIVERSAL_RULE_MATURE": "ã‚¢ãƒ€ãƒ«ãƒˆã‚³ãƒ³ãƒ†ãƒ³ãƒ„ã¯ç¦æ­¢ã•ã‚Œã¦ã„ã¾ã™",\n    "UNIVERSAL_RULE_SPAM": "ã‚¹ãƒ‘ãƒ ",\n    "UNIVERSAL_RULE_GUIDELINES": "ãƒœãƒ¼ãƒ‰ã®ã‚¬ã‚¤ãƒ‰ãƒ©ã‚¤ãƒ³ã‚’å®ˆã‚‹",\n    "UNIVERSAL_RULE_PROMOTION": "ã‚¢ã‚«ã‚¦ãƒ³ãƒˆã€ãƒ—ãƒ­ãƒ€ã‚¯ãƒˆã¾ãŸã¯ãƒ—ãƒ­ãƒ¢ãƒ¼ã‚·ãƒ§ãƒ³ã‚µãƒ¼ãƒ“ã‚¹",\n    "UNIVERSAL_RULE_REPORTING": "ä»–ã®ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ã‚’é€šå ±ã™ã‚‹",\n    "UNIVERSAL_RULE_DOWNLOADS": "ä¸æ³•ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰",\n    "UNIVERSAL_RULE_ILLEGAL": "é•æ³•ãªè¡Œç‚º",\n    "UNIVERSAL_RULE_THREATS": "è„…è¿«",\n    "UNIVERSAL_RULE_PHISHING": "ãƒ•ã‚£ãƒƒã‚·ãƒ³ã‚°ã¨è©æ¬ºè¡Œç‚º",\n    "NOTES_ONE": "ãƒ¡ãƒ¢",\n    "NOTES_FEW": "ãƒ¡ãƒ¢",\n    "NOTES_MANY": "ãƒ¡ãƒ¢",\n    "DISCUSSION_BYLINE": "%author%ãŒ%when%ã«%board%ã§æŠ•ç¨¿",\n    "REPORTED_SUMMARY_ONE_NAME": "%name1%ã«%when%ã€%reason%ã«ã‚ˆã‚Šé€šå ±ã•ã‚Œã¾ã—ãŸ",\n    "REPORTED_SUMMARY_TWO_NAMES": "%name1%ã¨%name2%ã« %when%ã€%reason%ã«ã‚ˆã‚Šé€šå ±ã•ã‚Œã¾ã—ãŸ",\n    "REPORTED_SUMMARY_MANY_NAMES": " %name1%ã€%name2%ã€%other%ã«%when%ã€%reason%ã«ã‚ˆã‚Šé€šå ±ã•ã‚Œã¾ã—ãŸ",\n    "OTHER_ONE": "%d ãã®ä»–",\n    "OTHER_FEW": "%dãã®ä»–",\n    "OTHER_MANY": "%d ãã®ä»–",\n    "MODERATOR_ACTIONS_HEADER": "ç®¡ç†äººã®ã‚¢ã‚¯ã‚·ãƒ§ãƒ³",\n    "THIRTY_DAYS": "30æ—¥é–“",\n    "ACTION": "ã‚¢ã‚¯ã‚·ãƒ§ãƒ³",\n    "OFFENSE": "ãƒ«ãƒ¼ãƒ«é•å",\n    "MANAGE": "ç®¡ç†",\n    "ACTION_EDITED_DISCUSSION": "ãƒ‡ã‚£ã‚¹ã‚«ãƒƒã‚·ãƒ§ãƒ³ã‚’ç·¨é›†ã—ã¾ã—ãŸ",\n    "ACTION_EDITED_COMMENT": "ã‚³ãƒ¡ãƒ³ãƒˆã‚’ç·¨é›†ã—ã¾ã—ãŸ",\n    "ACTION_DELETED_DISCUSSION": "ãƒ‡ã‚£ã‚¹ã‚«ãƒƒã‚·ãƒ§ãƒ³ã‚’å‰Šé™¤ã—ã¾ã—ãŸ",\n    "ACTION_DELETED_COMMENT": "ã‚³ãƒ¡ãƒ³ãƒˆã‚’å‰Šé™¤ã—ã¾ã—ãŸ",\n    "ACTION_BANNED_PLAYER": "ãƒãƒ³ã•ã‚ŒãŸãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼",\n    "ACTION_DELETED_DISCUSSION_AND_BANNED": "ãƒ‡ã‚£ã‚¹ã‚«ãƒƒã‚·ãƒ§ãƒ³ã¨ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ã‚’å‰Šé™¤ã—ã¾ã—ãŸ",\n    "ACTION_DELETED_COMMENT_AND_BANNED": "ã‚³ãƒ¡ãƒ³ãƒˆã¨ç¦æ­¢ã•ã‚ŒãŸãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ã‚’å‰Šé™¤ã—ã¾ã—ãŸ",\n    "ANY_TYPE": "ã‚¿ã‚¤ãƒ—",\n    "ANY_MODERATOR": "ç®¡ç†è€…",\n    "ANY_PLAYER": "ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼",\n    "REPORT_TO_BOARD_OWNER": "ãƒœãƒ¼ãƒ‰ã®ç®¡ç†è€…ã«é€šå ±ã™ã‚‹",\n    "REPORT_TO_RIOT": "ãƒ©ã‚¤ã‚¢ãƒƒãƒˆã«é€šå ±ã™ã‚‹",\n    "DELETED_BY_INFO": "%when%ã€%name%ã«ã‚ˆã£ã¦å‰Šé™¤æ¸ˆã¿ (%offense%)",\n    "EDITED_BY_INFO": "%name%ãŒ%when%ã«å‰Šé™¤",\n    "BOARDS": "ãƒœãƒ¼ãƒ‰",\n    "PIN": "ãƒ”ãƒ³",\n    "UNPIN": "ãƒ”ãƒ³ã‚’å¤–ã™"\n}\n'
}, function(n, e) {
    n.exports = '{\n    "ADD": "Dodaj",\n    "ADD_BUTTON": "Dodaj",\n    "ADD_CHOICE": "Dodaj wybÃ³r",\n    "ADDING": "Dodawanie",\n    "TOO_MANY_CHOICES": "MoÅ¼esz mieÄ‡ maksymalnie %limit% odpowiedzi",\n    "AVATAR": "awatar",\n    "BEST": "NAJLEPSZY",\n    "CANCEL": "Anuluj",\n    "CANCEL_BUTTON": "Anuluj",\n    "CONFIRM_REVOKE": "AnulowaÄ‡?",\n    "CLOSE": "Zamknij",\n    "COMMENTS": "komentarze",\n    "DELETED": "usuniÄ™ty",\n    "DISCUSS": "Dyskutuj",\n    "EDIT": "edytuj",\n    "ERROR": "Przepraszamy! WystÄ…piÅ‚ bÅ‚Ä…d.",\n    "ERROR401": "Przykro nam... wymagany wyÅ¼szy poziom.",\n    "ERROR403": "Przykro nam... wymagany poziom: %level%.",\n    "ERROR403_OTHER": "Przykro nam... nie masz upowaÅ¼nienia.",\n    "ERROR_RATELIMIT": "Nie tak szybko! Poczekaj chwilÄ™, nim dodasz kolejny komentarz!",\n    "ERROR429": "Poczekaj i sprÃ³buj ponownie.",\n    "FACECHECKING": "PrzeglÄ…danie zaroÅ›li bez totemu jest niebezpieczne - podobnie jest z Internetem. Inne strony niekoniecznie muszÄ… byÄ‡ tak bezpieczne, jak nasza a zasiÄ™g naszych totemÃ³w tam nie siÄ™ga, wiÄ™c zastanÃ³w siÄ™ dwa razy, zanim klikniesz na nieznany link.",\n    "FROM": "Od",\n    "MODERATOR": "Moderator",\n    "MODERATORS": "Moderatorzy",\n    "MORE": "wiÄ™cej",\n    "NO": "Nie",\n    "NOTIFICATIONS": "Powiadomienia",\n    "NOT_FOUND": "Nie znaleziono",\n    "OWNER": "Gospodarz",\n    "PLAYER": "Gracz",\n    "POST": "ZamieÅ›Ä‡",\n    "READ": "Czytaj",\n    "RECENT": "NIEDAWNE",\n    "REMOVE": "usuÅ„",\n    "REPLY": "odpowiedz",\n    "REQUIRED": "(Wymagane)",\n    "SAVE": "zapisz",\n    "SEND": "WyÅ›lij",\n    "SHOW": "PokaÅ¼",\n    "SOURCE": "Å¹rÃ³dÅ‚o",\n    "TOTAL": "OgÃ³Å‚em",\n    "UNREAD": "Nieprzeczytane powiadomienie",\n    "User": "UÅ¼ytkownik",\n    "CHILD_COMMENT": "dziecko",\n    "LEAVE_A_COMMENT": "Skomentuj",\n    "LOGIN_TO_COMMENT": "Zaloguj siÄ™, by skomentowaÄ‡",\n    "CHILD_COMMENTS": "dzieci",\n    "MORE_COMMENTS_SHOW": "PokaÅ¼ wiÄ™cej komentarzy",\n    "MORE_COMMENTS_COUNT": "Dodatkowe komentarze: %d",\n    "NEW_COMMENTS": "nowe komentarze",\n    "CHOICES_PROMPT": "Odpowiedzi:",\n    "EXPIRATION_DATE_PROMPT": "Data WygaÅ›niÄ™cia (Opcjonalna):",\n    "QUESTION_PROMPT": "Pytanie",\n    "COMMENT_IS_BELOW_THRESHOLD": "Komentarz poniÅ¼ej poziomu",\n    "CREATE_BUTTON": "UtwÃ³rz",\n    "VOTE_BUTTON": "GÅ‚osuj",\n    "DELETE_COMMENT_CONFIRM": "Czy na pewno chcesz usunÄ…Ä‡ ten komentarz?",\n    "LEAVING_SITE_CONFIRM": "Rozumiem i chcÄ™ kontynuowaÄ‡",\n    "EDITING_AS": "Edytowane jako",\n    "POSTING_AS": "Zamieszczane jako",\n    "GOING_TO": "Przechodzisz do:",\n    "LEAVING_SITE": "Opuszczasz Riot Games",\n    "LEVEL_REGION": "Poziom %level%<br/> %region%",\n    "NEVER_SHOW_AGAIN": "WiÄ™cej nie pokazuj",\n    "NO_UNREAD": "Brak nieprzeczytanych powiadomieÅ„",\n    "REMOVE_ALL": "UsuÅ„ wszystko",\n    "REVOKE": "UsuÅ„",\n    "REVOKING": "Anulowanie",\n    "SORTED_BY": "sortowane wedÅ‚ug",\n    "VOTES_FIVE_OR_MORE": "gÅ‚osÃ³w",\n    "VOTES_FOUR": "gÅ‚osÃ³w",\n    "VOTES_THREE": "gÅ‚osÃ³w",\n    "VOTES_TWO": "gÅ‚osÃ³w",\n    "VOTES_ZERO": "gÅ‚osÃ³w",\n    "VOTE_SINGULAR": "gÅ‚os",\n    "VOTES_FIVE_OR_MORE_SUB": "%d gÅ‚osÃ³w",\n    "VOTES_FOUR_SUB": "%d gÅ‚osy",\n    "VOTES_THREE_SUB": "%d gÅ‚osy",\n    "VOTES_TWO_SUB": "%d gÅ‚osy",\n    "VOTES_ZERO_SUB": "%d gÅ‚osÃ³w",\n    "VOTE_SINGULAR_SUB": "%d gÅ‚os",\n    "SAVE_CHANGES": "Zapisz zmiany",\n    "DETAILS": "SzczegÃ³Å‚y",\n    "CREATED_PREFIX": "Stworzono: %s",\n    "URL_PREFIX": "Adres: %s",\n    "DESCRIPTION": "Opis",\n    "GUIDELINES": "Wytyczne",\n    "DESCRIPTION_PLACEHOLDER": "To forum nie posiada jeszcze opisu.",\n    "GUIDELINES_PLACEHOLDER": "To forum nie posiada jeszcze regulaminu.",\n    "NAVIGATION": "NAWIGACJA",\n    "DISCUSSION": "WÄ…tek",\n    "ABOUT": "Informacje",\n    "REPORTS_WITH_COUNT": "ZgÅ‚oszenia (%d)",\n    "ACTIVITY": "AktywnoÅ›Ä‡",\n    "FEEDBACK": "Opinie",\n    "CLOSE_THIS_BOARD": "Zamknij to forum",\n    "YES": "Tak",\n    "DELETE_HEADER": "UsuÅ„",\n    "AUTHOR_MESSAGE": "WiadomoÅ›Ä‡ dla autora",\n    "OFFENSE_LABEL": "Przewinienie",\n    "OFFENSE_PLACEHOLDER": "Wybierz przewinienie...",\n    "MODERATION_COMMENT_LABEL": "Skomentuj",\n    "BAN_LABEL": "ZbanowaÄ‡ tego gracza?",\n    "BAN_DURATION_NONE": "Bez bana",\n    "BAN_DURATION_ONE_HOUR": "1 godzina",\n    "BAN_DURATION_TWENTY_FOUR_HOURS": "24 godziny",\n    "BAN_DURATION_ONE_WEEK": "1 tydzieÅ„",\n    "BAN_DURATION_PERMANENT": "Na staÅ‚e",\n    "GLOBAL_BAN_LABEL": "ZbanowaÄ‡ ze wszystkich forÃ³w?",\n    "REPORT_HEADER": "ZgÅ‚oÅ›",\n    "REPORT_OFFENSE_LABEL": "Wybierz przewinienie:",\n    "REPORT_OFFENSE_PLACEHOLDER": "Wybierz przewinienie...",\n    "REPORT_COMMENT_LABEL": "Dodatkowe komentarze:",\n    "REPORT": "ZgÅ‚oÅ›",\n    "UNIVERSAL_RULE_JERK": "Nie bÄ…dÅº niemiÅ‚y",\n    "UNIVERSAL_RULE_MATURE": "Å»adnej treÅ›ci dla dorosÅ‚ych",\n    "UNIVERSAL_RULE_SPAM": "Å»adnego spamowania",\n    "UNIVERSAL_RULE_GUIDELINES": "Zastosuj siÄ™ do regulaminu forum",\n    "UNIVERSAL_RULE_PROMOTION": "Å»adnej promocji konta, produktu lub usÅ‚ugi",\n    "UNIVERSAL_RULE_REPORTING": "Å»adnego zgÅ‚aszania innych graczy",\n    "UNIVERSAL_RULE_DOWNLOADS": "Nielegalne pobrania",\n    "UNIVERSAL_RULE_ILLEGAL": "Nielegalna aktywnoÅ›Ä‡",\n    "UNIVERSAL_RULE_THREATS": "Å»adnych grÃ³Åºb",\n    "UNIVERSAL_RULE_PHISHING": "Å»adnego phishingu i oszustw",\n    "NOTES_ONE": "Notatka",\n    "NOTES_FEW": "Notatki",\n    "NOTES_MANY": "Notatki",\n    "DISCUSSION_BYLINE": "Dodane przez %author% %when% na %board%",\n    "REPORTED_SUMMARY_ONE_NAME": "ZgÅ‚oszone przez %name1% %when% jako %reason%",\n    "REPORTED_SUMMARY_TWO_NAMES": "ZgÅ‚oszone przez %name1% i %name2% %when% jako %reason%",\n    "REPORTED_SUMMARY_MANY_NAMES": "ZgÅ‚oszone przez %name1%, %name2% i %other% %when% jako %reason%",\n    "OTHER_ONE": "%d inny",\n    "OTHER_FEW": "%d innych",\n    "OTHER_MANY": "%d innych",\n    "MODERATOR_ACTIONS_HEADER": "Akcje moderatora",\n    "THIRTY_DAYS": "30 dni",\n    "ACTION": "Akcja",\n    "OFFENSE": "Przewinienie",\n    "MANAGE": "ZarzÄ…dzaj",\n    "ACTION_EDITED_DISCUSSION": "Wyedytowano wÄ…tek",\n    "ACTION_EDITED_COMMENT": "Wyedytowano komentarz",\n    "ACTION_DELETED_DISCUSSION": "UsuniÄ™to wÄ…tek",\n    "ACTION_DELETED_COMMENT": "UsuniÄ™to komentarz",\n    "ACTION_BANNED_PLAYER": "Zbanowano gracza",\n    "ACTION_DELETED_DISCUSSION_AND_BANNED": "UsuniÄ™to wÄ…tek i zbanowano gracza",\n    "ACTION_DELETED_COMMENT_AND_BANNED": "UsuniÄ™to komentarz i zbanowano gracza",\n    "ANY_TYPE": "Dowolny rodzaj",\n    "ANY_MODERATOR": "Dowolny moderator",\n    "ANY_PLAYER": "Dowolny gracz",\n    "REPORT_TO_BOARD_OWNER": "ZgÅ‚oÅ› wÅ‚aÅ›cicielowi forum",\n    "REPORT_TO_RIOT": "ZgÅ‚oÅ› Riot Games",\n    "DELETED_BY_INFO": "UsuniÄ™to przez %name% %when% (%offense%)",\n    "EDITED_BY_INFO": "UsuniÄ™to przez %name% %when%",\n    "BOARDS": "Fora",\n    "PIN": "Przypnij",\n    "UNPIN": "Odepnij"\n}\n'
}, function(n, e) {
    n.exports = '{\n    "ADD": "Adicionar",\n    "ADD_BUTTON": "Adicionar",\n    "ADD_CHOICE": "Adicionar opÃ§Ã£o",\n    "ADDING": "Adicionando",\n    "TOO_MANY_CHOICES": "VocÃª sÃ³ pode ter %limit% escolhas",\n    "AVATAR": "avatar",\n    "BEST": "MELHOR",\n    "CANCEL": "Cancelar",\n    "CANCEL_BUTTON": "Cancelar",\n    "CONFIRM_REVOKE": "Revogar?",\n    "CLOSE": "Fechar",\n    "COMMENTS": "comentÃ¡rios",\n    "DELETED": "excluido",\n    "DISCUSS": "Discutir",\n    "EDIT": "editar",\n    "ERROR": "Desculpe! Ocorreu um erro.",\n    "ERROR401": "Que pena... VocÃª precisa ter nÃ­vel mais alto.",\n    "ERROR403": "Que pena... VocÃª precisa estar no nÃ­vel %level%.",\n    "ERROR403_OTHER": "Que pena... VocÃª nÃ£o estÃ¡ autorizado(a).",\n    "ERROR_RATELIMIT": "RÃ¡pido demais! Por favor, espere um pouco antes de comentar novamente!",\n    "ERROR429": "Favor esperar e tentar novamente.",\n    "FACECHECKING": "Enfiar a cara em um arbusto Ã© perigoso. O mesmo vale para a internet. Outros sites podem nÃ£o ter tantas sentinelas quanto o nosso, entÃ£o tenha muita cautela ao clicar em links desconhecidos.",\n    "FROM": "De",\n    "MODERATOR": "Moderador",\n    "MODERATORS": "Moderadores",\n    "MORE": "mais",\n    "NO": "NÃ£o",\n    "NOTIFICATIONS": "NotificaÃ§Ãµes",\n    "NOT_FOUND": "NÃ£o encontrado",\n    "OWNER": "ProprietÃ¡rio",\n    "PLAYER": "Jogador",\n    "POST": "Publicar",\n    "READ": "Lido",\n    "RECENT": "RECENTE",\n    "REMOVE": "excluir",\n    "REPLY": "responder",\n    "REQUIRED": "(ObrigatÃ³rio)",\n    "SAVE": "salvar",\n    "SEND": "Enviar",\n    "SHOW": "Exibir",\n    "SOURCE": "Fonte",\n    "TOTAL": "Total",\n    "UNREAD": "NotificaÃ§Ãµes nÃ£o lidas",\n    "User": "UsuÃ¡rio",\n    "CHILD_COMMENT": "filho",\n    "LEAVE_A_COMMENT": "Deixe um comentÃ¡rio",\n    "LOGIN_TO_COMMENT": "Conecte-se para comentar",\n    "CHILD_COMMENTS": "filhos",\n    "MORE_COMMENTS_SHOW": "Exibir mais comentÃ¡rios",\n    "MORE_COMMENTS_COUNT": "%d novos comentÃ¡rios",\n    "NEW_COMMENTS": "novos comentÃ¡rios",\n    "CHOICES_PROMPT": "OpÃ§Ãµes:",\n    "EXPIRATION_DATE_PROMPT": "Data de validade (Opcional):",\n    "QUESTION_PROMPT": "Pergunta",\n    "COMMENT_IS_BELOW_THRESHOLD": "ComentÃ¡rio abaixo do limiar",\n    "CREATE_BUTTON": "Criar",\n    "VOTE_BUTTON": "Votar",\n    "DELETE_COMMENT_CONFIRM": "Tem certeza de que quer excluir este comentÃ¡rio?",\n    "LEAVING_SITE_CONFIRM": "Eu compreendo e vou entrar.",\n    "EDITING_AS": "Editando como",\n    "POSTING_AS": "Publicando como",\n    "GOING_TO": "VocÃª estÃ¡ indo para:",\n    "LEAVING_SITE": "VocÃª estÃ¡ saindo da Riot Games",\n    "LEVEL_REGION": "NÃ­vel %level%<br/> %region%",\n    "NEVER_SHOW_AGAIN": "Nunca exibir isto novamente",\n    "NO_UNREAD": "Nenhuma notificaÃ§Ã£o nÃ£o lida!",\n    "REMOVE_ALL": "Excluir tudo",\n    "REVOKE": "Revogar",\n    "REVOKING": "Revogando",\n    "SORTED_BY": "ordenado por",\n    "VOTES_FIVE_OR_MORE": "votos",\n    "VOTES_FOUR": "votos",\n    "VOTES_THREE": "votos",\n    "VOTES_TWO": "votos",\n    "VOTES_ZERO": "votos",\n    "VOTE_SINGULAR": "voto",\n    "VOTES_FIVE_OR_MORE_SUB": "%d votos",\n    "VOTES_FOUR_SUB": "%d votos",\n    "VOTES_THREE_SUB": "%d votos",\n    "VOTES_TWO_SUB": "%d votos",\n    "VOTES_ZERO_SUB": "%d votos",\n    "VOTE_SINGULAR_SUB": "%d voto",\n    "SAVE_CHANGES": "Salvar alteraÃ§Ãµes",\n    "DETAILS": "Detalhes",\n    "CREATED_PREFIX": "Criado em: %s",\n    "URL_PREFIX": "URL: %s",\n    "DESCRIPTION": "DescriÃ§Ã£o",\n    "GUIDELINES": "Diretrizes",\n    "DESCRIPTION_PLACEHOLDER": "Esse fÃ³rum ainda nÃ£o tem descriÃ§Ã£o.",\n    "GUIDELINES_PLACEHOLDER": "Esse fÃ³rum ainda nÃ£o tem diretrizes.",\n    "NAVIGATION": "NAVEGAÃ‡ÃƒO",\n    "DISCUSSION": "DiscussÃ£o",\n    "ABOUT": "Sobre",\n    "REPORTS_WITH_COUNT": "Relatos (%d)",\n    "ACTIVITY": "Atividade",\n    "FEEDBACK": "Feedback",\n    "CLOSE_THIS_BOARD": "Fechar esse fÃ³rum",\n    "YES": "Sim",\n    "DELETE_HEADER": "Excluir",\n    "AUTHOR_MESSAGE": "Mensagem para o autor",\n    "OFFENSE_LABEL": "Ofensa",\n    "OFFENSE_PLACEHOLDER": "Selecione uma ofensa...",\n    "MODERATION_COMMENT_LABEL": "ComentÃ¡rio",\n    "BAN_LABEL": "Suspender esse jogador?",\n    "BAN_DURATION_NONE": "Sem suspensÃ£o",\n    "BAN_DURATION_ONE_HOUR": "1 hora",\n    "BAN_DURATION_TWENTY_FOUR_HOURS": "24 horas",\n    "BAN_DURATION_ONE_WEEK": "1 semana",\n    "BAN_DURATION_PERMANENT": "Permanente",\n    "GLOBAL_BAN_LABEL": "Suspender de todos os fÃ³runs?",\n    "REPORT_HEADER": "Denunciar",\n    "REPORT_OFFENSE_LABEL": "Selecionar ofensa:",\n    "REPORT_OFFENSE_PLACEHOLDER": "Selecione uma ofensa...",\n    "REPORT_COMMENT_LABEL": "ObservaÃ§Ãµes adicionais:",\n    "REPORT": "Denunciar",\n    "UNIVERSAL_RULE_JERK": "NÃ£o seja babaca",\n    "UNIVERSAL_RULE_MATURE": "Sem conteÃºdo adulto",\n    "UNIVERSAL_RULE_SPAM": "Sem spam",\n    "UNIVERSAL_RULE_GUIDELINES": "Cumprimento com as diretrizes do fÃ³rum",\n    "UNIVERSAL_RULE_PROMOTION": "Promovendo Conta, Produtos ou ServiÃ§os",\n    "UNIVERSAL_RULE_REPORTING": "Denunciando outros jogadores",\n    "UNIVERSAL_RULE_DOWNLOADS": "Downloads ilegais",\n    "UNIVERSAL_RULE_ILLEGAL": "Atividade ilegal",\n    "UNIVERSAL_RULE_THREATS": "AmeaÃ§as",\n    "UNIVERSAL_RULE_PHISHING": "Phishing e Scam",\n    "NOTES_ONE": "AnotaÃ§Ã£o",\n    "NOTES_FEW": "AnotaÃ§Ãµes",\n    "NOTES_MANY": "AnotaÃ§Ãµes",\n    "DISCUSSION_BYLINE": "Por %author% %when%em %board%",\n    "REPORTED_SUMMARY_ONE_NAME": "Denunciado por %name1% %when% como %reason%",\n    "REPORTED_SUMMARY_TWO_NAMES": "Denunciado por %name1% e %name2% %when% como %reason%",\n    "REPORTED_SUMMARY_MANY_NAMES": "Denunciado por %name1%, %name2% e %other% %when% como %reason%",\n    "OTHER_ONE": "%d outro",\n    "OTHER_FEW": "%d outros",\n    "OTHER_MANY": "%d outros",\n    "MODERATOR_ACTIONS_HEADER": "AÃ§Ãµes do moderador",\n    "THIRTY_DAYS": "30 dias",\n    "ACTION": "AÃ§Ã£o",\n    "OFFENSE": "Ofensa",\n    "MANAGE": "Gerenciar",\n    "ACTION_EDITED_DISCUSSION": "DiscussÃ£o editada",\n    "ACTION_EDITED_COMMENT": "ComentÃ¡rio editado",\n    "ACTION_DELETED_DISCUSSION": "DiscussÃ£o excluÃ­da",\n    "ACTION_DELETED_COMMENT": "ComentÃ¡rio excluÃ­do",\n    "ACTION_BANNED_PLAYER": "Jogador banido",\n    "ACTION_DELETED_DISCUSSION_AND_BANNED": "DiscussÃ£o excluÃ­da e jogador banido",\n    "ACTION_DELETED_COMMENT_AND_BANNED": "ComentÃ¡rio excluÃ­do e jogador banido",\n    "ANY_TYPE": "Qualquer tipo",\n    "ANY_MODERATOR": "Qualquer moderador",\n    "ANY_PLAYER": "Qualquer jogador",\n    "REPORT_TO_BOARD_OWNER": "Denunciar ao dono do fÃ³rum",\n    "REPORT_TO_RIOT": "Denunciar Ã  Riot",\n    "DELETED_BY_INFO": "ExcluÃ­do por %name% %when% (%offense%)",\n    "EDITED_BY_INFO": "ExcluÃ­do por %name% %when%",\n    "BOARDS": "FÃ³runs",\n    "PIN": "Fixar",\n    "UNPIN": "Desafixar"\n}\n'
}, function(n, e) {
    n.exports = '{\n    "ADD": "AdaugÄƒ",\n    "ADD_BUTTON": "AdaugÄƒ",\n    "ADD_CHOICE": "AdaugÄƒ o alegere",\n    "ADDING": "Se adaugÄƒ",\n    "TOO_MANY_CHOICES": "PoÈ›i alege numai %limit%",\n    "AVATAR": "avatar",\n    "BEST": "CELE MAI BUNE",\n    "CANCEL": "AnuleazÄƒ",\n    "CANCEL_BUTTON": "AnuleazÄƒ",\n    "CONFIRM_REVOKE": "Vrei sÄƒ revoci?",\n    "CLOSE": "ÃŽnchide",\n    "COMMENTS": "comentarii",\n    "DELETED": "ÅŸters",\n    "DISCUSS": "DiscutÄƒ",\n    "EDIT": "editeazÄƒ",\n    "ERROR": "Ne cerem scuze! A intervenit o eroare.",\n    "ERROR401": "Ce pÄƒcat... trebuie un nivel mai mare.",\n    "ERROR403": "Ce pÄƒcat... trebuie nivelul %level%.",\n    "ERROR403_OTHER": "Ce pÄƒcat... nu eÅŸti autorizat.",\n    "ERROR_RATELIMIT": "EÅŸti prea rapid! Te rugÄƒm sÄƒ aÅŸtepÅ£i sÄƒ postezi un alt comentariu!",\n    "ERROR429": "Te rugÄƒm sÄƒ aÈ™tepÈ›i È™i sÄƒ Ã®ncerci din nou.",\n    "FACECHECKING": "E periculos sÄƒ verifici singur ce e-n tufiÈ™uri iar aceeaÈ™i regulÄƒ se aplicÄƒ È™i pe net. E posibil ca alte site-uri sÄƒ nu fie la fel de bine pÄƒzite ca al nostru, aÈ™a cÄƒ te rugÄƒm sÄƒ ai grijÄƒ cÃ¢nd dai clic pe linkuri necunoscute. ",\n    "FROM": "De la",\n    "MODERATOR": "Moderator",\n    "MODERATORS": "Moderatori",\n    "MORE": "mai mult",\n    "NO": "Nu",\n    "NOTIFICATIONS": "NotificÄƒri",\n    "NOT_FOUND": "Nu s-a gÄƒsit",\n    "OWNER": "Proprietar",\n    "PLAYER": "JucÄƒtor",\n    "POST": "PosteazÄƒ",\n    "READ": "CiteÈ™te",\n    "RECENT": "RECENTE",\n    "REMOVE": "ÅŸterge",\n    "REPLY": "rÄƒspunde",\n    "REQUIRED": "(Necesar)",\n    "SAVE": "salveazÄƒ",\n    "SEND": "Trimite",\n    "SHOW": "AfiÅŸeazÄƒ",\n    "SOURCE": "SursÄƒ",\n    "TOTAL": "Total",\n    "UNREAD": "NotificÄƒri necitite",\n    "User": "Utilizator",\n    "CHILD_COMMENT": "comentariu copil",\n    "LEAVE_A_COMMENT": "LasÄƒ un comentariu",\n    "LOGIN_TO_COMMENT": "ConecteazÄƒ-te pentru a comenta",\n    "CHILD_COMMENTS": "copii",\n    "MORE_COMMENTS_SHOW": "AfiÈ™eazÄƒ mai multe comentarii",\n    "MORE_COMMENTS_COUNT": "Mai multe comentarii",\n    "NEW_COMMENTS": "comentarii noi",\n    "CHOICES_PROMPT": "Alegeri: ",\n    "EXPIRATION_DATE_PROMPT": "Data expirÄƒrii (opÈ›ional):",\n    "QUESTION_PROMPT": "ÃŽntrebare",\n    "COMMENT_IS_BELOW_THRESHOLD": "Comentariul are prea multe voturi negative",\n    "CREATE_BUTTON": "CreeazÄƒ",\n    "VOTE_BUTTON": "VoteazÄƒ",\n    "DELETE_COMMENT_CONFIRM": "EÈ™ti sigur cÄƒ vrei sÄƒ È™tergi acest comentariu?",\n    "LEAVING_SITE_CONFIRM": "ÃŽnÈ›eleg È™i mÄƒ bag",\n    "EDITING_AS": "Editezi ca",\n    "POSTING_AS": "Postezi ca",\n    "GOING_TO": "Te Ã®ndrepÈ›i cÄƒtre:",\n    "LEAVING_SITE": "PÄƒrÄƒseÈ™ti Riot Games",\n    "LEVEL_REGION": "Nivel %level%<br/> %region%",\n    "NEVER_SHOW_AGAIN": "Nu mai arÄƒta niciodatÄƒ",\n    "NO_UNREAD": "Nicio notificare necititÄƒ",\n    "REMOVE_ALL": "È˜terge-le pe toate",\n    "REVOKE": "Revocare",\n    "REVOKING": "Se revocÄƒ",\n    "SORTED_BY": "rezultate ordonate dupÄƒ",\n    "VOTES_FIVE_OR_MORE": "voturi",\n    "VOTES_FOUR": "voturi",\n    "VOTES_THREE": "voturi",\n    "VOTES_TWO": "voturi",\n    "VOTES_ZERO": "voturi",\n    "VOTE_SINGULAR": "voteazÄƒ",\n    "VOTES_FIVE_OR_MORE_SUB": "%d voturi",\n    "VOTES_FOUR_SUB": "%d voturi",\n    "VOTES_THREE_SUB": "%d voturi",\n    "VOTES_TWO_SUB": "%d voturi",\n    "VOTES_ZERO_SUB": "%d voturi",\n    "VOTE_SINGULAR_SUB": "%d vot",\n    "SAVE_CHANGES": "SalveazÄƒ schimbÄƒrile",\n    "DETAILS": "Detalii",\n    "CREATED_PREFIX": "CreatÄƒ pe: %s",\n    "URL_PREFIX": "URL: %s",\n    "DESCRIPTION": "Descriere",\n    "GUIDELINES": "Reguli",\n    "DESCRIPTION_PLACEHOLDER": "Acest forum nu are Ã®ncÄƒ o descriere.",\n    "GUIDELINES_PLACEHOLDER": "Acest forum nu are Ã®ncÄƒ un set de reguli.",\n    "NAVIGATION": "NAVIGARE",\n    "DISCUSSION": "DiscuÈ›ie",\n    "ABOUT": "Despre",\n    "REPORTS_WITH_COUNT": "Rapoarte",\n    "ACTIVITY": "Activitate",\n    "FEEDBACK": "Feedback",\n    "CLOSE_THIS_BOARD": "ÃŽnchide forumul",\n    "YES": "Da",\n    "DELETE_HEADER": "Åžterge",\n    "AUTHOR_MESSAGE": "Mesaj cÄƒtre autor",\n    "OFFENSE_LABEL": "Abuz",\n    "OFFENSE_PLACEHOLDER": "Alege tipul abuzului...",\n    "MODERATION_COMMENT_LABEL": "ComenteazÄƒ",\n    "BAN_LABEL": "Vrei sÄƒ suspenzi acest jucÄƒtor?",\n    "BAN_DURATION_NONE": "FÄƒrÄƒ suspendare",\n    "BAN_DURATION_ONE_HOUR": "o orÄƒ",\n    "BAN_DURATION_TWENTY_FOUR_HOURS": "24 de ore",\n    "BAN_DURATION_ONE_WEEK": "o sÄƒptÄƒmÃ¢nÄƒ",\n    "BAN_DURATION_PERMANENT": "Permanent",\n    "GLOBAL_BAN_LABEL": "ActiveazÄƒ suspendarea pentru toate forumurile?",\n    "REPORT_HEADER": "RaporteazÄƒ",\n    "REPORT_OFFENSE_LABEL": "Alege abuzul:",\n    "REPORT_OFFENSE_PLACEHOLDER": "Alege tipul abuzului...",\n    "REPORT_COMMENT_LABEL": "Comentarii suplimentare:",\n    "REPORT": "RaporteazÄƒ",\n    "UNIVERSAL_RULE_JERK": "PoartÄƒ-te frumos",\n    "UNIVERSAL_RULE_MATURE": "FÄƒrÄƒ conÅ£inut doar pentru adulÅ£i",\n    "UNIVERSAL_RULE_SPAM": "FÄƒrÄƒ spam",\n    "UNIVERSAL_RULE_GUIDELINES": "RespectÄƒ regulile forumului",\n    "UNIVERSAL_RULE_PROMOTION": "Promovare cont, produs sau serviciu",\n    "UNIVERSAL_RULE_REPORTING": "Cum sÄƒ raportezi alÅ£i jucÄƒtori",\n    "UNIVERSAL_RULE_DOWNLOADS": "DescÄƒrcÄƒri neautorizate",\n    "UNIVERSAL_RULE_ILLEGAL": "Activitate neautorizatÄƒ",\n    "UNIVERSAL_RULE_THREATS": "AmeninÅ£Äƒri",\n    "UNIVERSAL_RULE_PHISHING": "Phishing ÅŸi scamming",\n    "NOTES_ONE": "NotÄƒ",\n    "NOTES_FEW": "Note",\n    "NOTES_MANY": "Note",\n    "DISCUSSION_BYLINE": "De %author% %when% Ã®n forumul %board%",\n    "REPORTED_SUMMARY_ONE_NAME": "Raportat de %name1% %when% ca %reason%",\n    "REPORTED_SUMMARY_TWO_NAMES": "Raportat de %name1% ÅŸi %name2% %when% ca %reason%",\n    "REPORTED_SUMMARY_MANY_NAMES": "Raportat de %name1%, %name2% ÅŸi %other% %when% ca %reason%",\n    "OTHER_ONE": "%d alta",\n    "OTHER_FEW": "%d altele",\n    "OTHER_MANY": "%d altele",\n    "MODERATOR_ACTIONS_HEADER": "AcÅ£iuni moderator",\n    "THIRTY_DAYS": "30 de zile",\n    "ACTION": "AcÈ›iune",\n    "OFFENSE": "Abuz",\n    "MANAGE": "GestioneazÄƒ",\n    "ACTION_EDITED_DISCUSSION": "O discuÅ£ie a fost moderatÄƒ",\n    "ACTION_EDITED_COMMENT": "Un comentariu a fost editat",\n    "ACTION_DELETED_DISCUSSION": "A fost ÅŸtearsÄƒ o discuÅ£ie",\n    "ACTION_DELETED_COMMENT": "Un comentariu a fost ÅŸters",\n    "ACTION_BANNED_PLAYER": "JucÄƒtor suspendat",\n    "ACTION_DELETED_DISCUSSION_AND_BANNED": "A fost ÅŸtearsÄƒ o discuÅ£ie ÅŸi un jucÄƒtor a fost suspendat",\n    "ACTION_DELETED_COMMENT_AND_BANNED": "A fost ÅŸters un comentariu ÅŸi un jucÄƒtor a fost suspendat",\n    "ANY_TYPE": "Orice tip",\n    "ANY_MODERATOR": "Orice moderator",\n    "ANY_PLAYER": "Orice jucÄƒtor",\n    "REPORT_TO_BOARD_OWNER": "RaporteazÄƒ cÄƒtre proprietarul forumului",\n    "REPORT_TO_RIOT": "RaporteazÄƒ cÄƒtre Riot",\n    "DELETED_BY_INFO": "Åžters de %name% %when% (%offense%)",\n    "EDITED_BY_INFO": "Åžters de %name% %when%",\n    "BOARDS": "Forumuri",\n    "PIN": "+promovare",\n    "UNPIN": "-promovare"\n}\n';
}, function(n, e) {
    n.exports = '{\n    "ADD": "Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ",\n    "ADD_BUTTON": "Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ",\n    "ADD_CHOICE": "Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ Ð²Ð°Ñ€Ð¸Ð°Ð½Ñ‚",\n    "ADDING": "Ð”Ð¾Ð±Ð°Ð²Ð»ÐµÐ½Ð¸Ðµ",\n    "TOO_MANY_CHOICES": "Ð›Ð¸Ð¼Ð¸Ñ‚ Ð²Ñ‹Ð±Ð¾Ñ€Ð° - %limit%",\n    "AVATAR": "Ð°Ð²Ð°Ñ‚Ð°Ñ€",\n    "BEST": "Ð›Ð£Ð§Ð¨Ð˜Ð•",\n    "CANCEL": "ÐžÑ‚Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ",\n    "CANCEL_BUTTON": "ÐžÑ‚Ð¼ÐµÐ½Ð°",\n    "CONFIRM_REVOKE": "ÐžÑ‚ÐºÐ°Ð·Ð°Ñ‚ÑŒ?",\n    "CLOSE": "Ð—Ð°ÐºÑ€Ñ‹Ñ‚ÑŒ",\n    "COMMENTS": "ÐºÐ¾Ð¼Ð¼ÐµÐ½Ñ‚Ð°Ñ€Ð¸ÐµÐ²",\n    "DELETED": "ÑƒÐ´Ð°Ð»ÐµÐ½Ð½Ñ‹Ð¹",\n    "DISCUSS": "ÐžÐ±ÑÑƒÐ¶Ð´ÐµÐ½Ð¸Ðµ",\n    "EDIT": "Ð¿Ñ€Ð°Ð²Ð¸Ñ‚ÑŒ",\n    "ERROR": "ÐŸÑ€Ð¾Ð¸Ð·Ð¾ÑˆÐ»Ð° Ð¾ÑˆÐ¸Ð±ÐºÐ°!",\n    "ERROR401": "Ðš ÑÐ¾Ð¶Ð°Ð»ÐµÐ½Ð¸ÑŽ, Ð²Ð°Ñˆ ÑƒÑ€Ð¾Ð²ÐµÐ½ÑŒ Ð´Ð¾Ð»Ð¶ÐµÐ½ Ð±Ñ‹Ñ‚ÑŒ Ð²Ñ‹ÑˆÐµ.",\n    "ERROR403": "Ðš ÑÐ¾Ð¶Ð°Ð»ÐµÐ½Ð¸ÑŽ, Ð²Ñ‹ Ð´Ð¾Ð»Ð¶Ð½Ñ‹ Ð±Ñ‹Ñ‚ÑŒ %level% ÑƒÑ€Ð¾Ð²Ð½Ñ.",\n    "ERROR403_OTHER": "ÐšÐ°Ðº Ð¶Ð°Ð»ÑŒ... Ð²Ñ‹ Ð½Ðµ Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·Ð¾Ð²Ð°Ð½Ñ‹.",\n    "ERROR_RATELIMIT": "Ð¡Ð»Ð¸ÑˆÐºÐ¾Ð¼ Ð±Ñ‹ÑÑ‚Ñ€Ð¾! ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð¿Ð¾Ð´Ð¾Ð¶Ð´Ð¸Ñ‚Ðµ Ð½ÐµÐ¼Ð½Ð¾Ð³Ð¾, Ð¿Ñ€ÐµÐ¶Ð´Ðµ Ñ‡ÐµÐ¼ ÑÐ½Ð¾Ð²Ð° Ð¾ÑÑ‚Ð°Ð²Ð»ÑÑ‚ÑŒ ÐºÐ¾Ð¼Ð¼ÐµÐ½Ñ‚Ð°Ñ€Ð¸Ð¹!",\n    "ERROR429": "ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð¿Ð¾Ð´Ð¾Ð¶Ð´Ð¸Ñ‚Ðµ Ð¸ Ð¿Ð¾Ð¿Ñ€Ð¾Ð±ÑƒÐ¹Ñ‚Ðµ ÐµÑ‰Ðµ Ñ€Ð°Ð·.",\n    "FACECHECKING": "ÐŸÑ€Ð¾Ð²ÐµÑ€ÑÑ‚ÑŒ ÐºÑƒÑÑ‚Ñ‹ Ð²ÑÐ»ÐµÐ¿ÑƒÑŽ Ð¾Ñ‡ÐµÐ½ÑŒ Ð¾Ð¿Ð°ÑÐ½Ð¾, Ñ‚Ð°Ðº Ð¶Ðµ ÐºÐ°Ðº Ð¸ Ð²ÑÐ»ÐµÐ¿ÑƒÑŽ Ñ€Ð°Ð·Ð³ÑƒÐ»Ð¸Ð²Ð°Ñ‚ÑŒ Ð¿Ð¾ Ð¸Ð½Ñ‚ÐµÑ€Ð½ÐµÑ‚Ñƒ. Ð”Ñ€ÑƒÐ³Ð¸Ðµ ÑÐ°Ð¹Ñ‚Ñ‹ Ð½Ðµ Ñ‚Ð°Ðº Ñ…Ð¾Ñ€Ð¾ÑˆÐ¾ Ð·Ð°Ñ‰Ð¸Ñ‰ÐµÐ½Ñ‹, ÐºÐ°Ðº Ð½Ð°Ñˆ, Ð¿Ð¾ÑÑ‚Ð¾Ð¼Ñƒ Ð¿Ñ€Ð¾ÑÐ²Ð»ÑÐ¹Ñ‚Ðµ Ð±Ð´Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾ÑÑ‚ÑŒ, ÐºÐ¾Ð³Ð´Ð° Ð¿ÐµÑ€ÐµÑ…Ð¾Ð´Ð¸Ñ‚Ðµ Ð¿Ð¾ Ð½ÐµÐ¸Ð·Ð²ÐµÑÑ‚Ð½Ñ‹Ð¼ ÑÑÑ‹Ð»ÐºÐ°Ð¼.",\n    "FROM": "ÐžÑ‚",\n    "MODERATOR": "ÐœÐ¾Ð´ÐµÑ€Ð°Ñ‚Ð¾Ñ€",\n    "MODERATORS": "ÐœÐ¾Ð´ÐµÑ€Ð°Ñ‚Ð¾Ñ€Ñ‹",\n    "MORE": "Ð±Ð¾Ð»ÑŒÑˆÐµ",\n    "NO": "ÐÐµÑ‚",\n    "NOTIFICATIONS": "Ð£Ð²ÐµÐ´Ð¾Ð¼Ð»ÐµÐ½Ð¸Ñ",\n    "NOT_FOUND": "ÐÐµ Ð½Ð°Ð¹Ð´ÐµÐ½",\n    "OWNER": "Ð’Ð»Ð°Ð´ÐµÐ»ÐµÑ†",\n    "PLAYER": "Ð˜Ð³Ñ€Ð¾Ðº",\n    "POST": "ÐžÑ‚Ð¿Ñ€Ð°Ð²Ð¸Ñ‚ÑŒ",\n    "READ": "Ð§Ð¸Ñ‚Ð°Ñ‚ÑŒ",\n    "RECENT": "ÐÐžÐ’Ð«Ð•",\n    "REMOVE": "ÑƒÐ´Ð°Ð»Ð¸Ñ‚ÑŒ",\n    "REPLY": "Ð¾Ñ‚Ð²ÐµÑ‚Ð¸Ñ‚ÑŒ",\n    "REQUIRED": "(Ð¾Ð±ÑÐ·Ð°Ñ‚ÐµÐ»ÑŒÐ½Ð¾)",\n    "SAVE": "ÑÐ¾Ñ…Ñ€Ð°Ð½Ð¸Ñ‚ÑŒ",\n    "SEND": "ÐžÑ‚Ð¿Ñ€Ð°Ð²Ð¸Ñ‚ÑŒ",\n    "SHOW": "ÐŸÐ¾ÐºÐ°Ð·Ð°Ñ‚ÑŒ",\n    "SOURCE": "Ð˜ÑÑ‚Ð¾Ñ‡Ð½Ð¸Ðº",\n    "TOTAL": "Ð’ÑÐµÐ³Ð¾",\n    "UNREAD": "ÐÐµÐ¿Ñ€Ð¾Ñ‡Ð¸Ñ‚Ð°Ð½Ð½Ñ‹Ðµ ÑƒÐ²ÐµÐ´Ð¾Ð¼Ð»ÐµÐ½Ð¸Ñ",\n    "User": "ÐŸÐ¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»ÑŒ",\n    "CHILD_COMMENT": "Ð²Ð»Ð¾Ð¶ÐµÐ½Ð½Ñ‹Ð¹",\n    "LEAVE_A_COMMENT": "ÐžÑÑ‚Ð°Ð²Ð¸Ñ‚ÑŒ ÐºÐ¾Ð¼Ð¼ÐµÐ½Ñ‚Ð°Ñ€Ð¸Ð¹",\n    "LOGIN_TO_COMMENT": "Ð’Ð¾Ð¹Ð´Ð¸Ñ‚Ðµ",\n    "CHILD_COMMENTS": "Ð²Ð»Ð¾Ð¶ÐµÐ½Ð½Ñ‹Ðµ",\n    "MORE_COMMENTS_SHOW": "ÐŸÐ¾ÐºÐ°Ð·Ð°Ñ‚ÑŒ Ð±Ð¾Ð»ÑŒÑˆÐµ ÐºÐ¾Ð¼Ð¼ÐµÐ½Ñ‚Ð°Ñ€Ð¸ÐµÐ²",\n    "MORE_COMMENTS_COUNT": "Ð•Ñ‰Ðµ %d ÐºÐ¾Ð¼Ð¼ÐµÐ½Ñ‚Ð°Ñ€Ð¸ÐµÐ²",\n    "NEW_COMMENTS": "Ð½Ð¾Ð²Ñ‹Ðµ ÐºÐ¾Ð¼Ð¼ÐµÐ½Ñ‚Ð°Ñ€Ð¸Ð¸",\n    "CHOICES_PROMPT": "Ð’Ð°Ñ€Ð¸Ð°Ð½Ñ‚Ñ‹:",\n    "EXPIRATION_DATE_PROMPT": "Ð”Ð°Ñ‚Ð° Ð¾ÐºÐ¾Ð½Ñ‡Ð°Ð½Ð¸Ñ (Ð½ÐµÐ¾Ð±ÑÐ·Ð°Ñ‚ÐµÐ»ÑŒÐ½Ð¾):",\n    "QUESTION_PROMPT": "Ð’Ð¾Ð¿Ñ€Ð¾Ñ",\n    "COMMENT_IS_BELOW_THRESHOLD": "ÐšÐ¾Ð¼Ð¼ÐµÐ½Ñ‚Ð°Ñ€Ð¸Ð¹ ÑÐºÑ€Ñ‹Ñ‚",\n    "CREATE_BUTTON": "Ð¡Ð¾Ð·Ð´Ð°Ñ‚ÑŒ",\n    "VOTE_BUTTON": "Ð“Ð¾Ð»Ð¾ÑÐ¾Ð²Ð°Ñ‚ÑŒ",\n    "DELETE_COMMENT_CONFIRM": "Ð’Ñ‹ ÑƒÐ²ÐµÑ€ÐµÐ½Ñ‹, Ñ‡Ñ‚Ð¾ Ñ…Ð¾Ñ‚Ð¸Ñ‚Ðµ ÑƒÐ´Ð°Ð»Ð¸Ñ‚ÑŒ ÑÑ‚Ð¾Ñ‚ ÐºÐ¾Ð¼Ð¼ÐµÐ½Ñ‚Ð°Ñ€Ð¸Ð¹?",\n    "LEAVING_SITE_CONFIRM": "Ð¯ Ð¿Ð¾Ð½Ð¸Ð¼Ð°ÑŽ Ð¸ Ñ…Ð¾Ñ‡Ñƒ Ð¿Ñ€Ð¾Ð´Ð¾Ð»Ð¶Ð¸Ñ‚ÑŒ",\n    "EDITING_AS": "ÐŸÑ€Ð°Ð²Ð¸Ñ‚ÑŒ ÐºÐ°Ðº",\n    "POSTING_AS": "ÐžÑ‚Ð¿Ñ€Ð°Ð²Ð¸Ñ‚ÑŒ ÐºÐ°Ðº",\n    "GOING_TO": "Ð’Ñ‹ Ð¿ÐµÑ€ÐµÑ…Ð¾Ð´Ð¸Ñ‚Ðµ Ð½Ð°: ",\n    "LEAVING_SITE": "Ð’Ñ‹ Ð¿Ð¾ÐºÐ¸Ð´Ð°ÐµÑ‚Ðµ ÑÐ°Ð¹Ñ‚ Riot Games",\n    "LEVEL_REGION": " %level%-Ð¹ ÑƒÑ€Ð¾Ð²ÐµÐ½ÑŒ<br/> %region%",\n    "NEVER_SHOW_AGAIN": "Ð‘Ð¾Ð»ÑŒÑˆÐµ Ð½Ðµ Ð¿Ð¾ÐºÐ°Ð·Ñ‹Ð²Ð°Ñ‚ÑŒ",\n    "NO_UNREAD": "ÐÐµÑ‚ Ð½ÐµÐ¿Ñ€Ð¾Ñ‡Ð¸Ñ‚Ð°Ð½Ð½Ñ‹Ñ… ÑƒÐ²ÐµÐ´Ð¾Ð¼Ð»ÐµÐ½Ð¸Ð¹!",\n    "REMOVE_ALL": "Ð£Ð´Ð°Ð»Ð¸Ñ‚ÑŒ Ð²ÑÐµ",\n    "REVOKE": "ÐžÑ‚ÐºÐ°Ð·Ð°Ñ‚ÑŒ",\n    "REVOKING": "ÐžÑ‚ÐºÐ°Ð·",\n    "SORTED_BY": "â€“ ÑÐ½Ð°Ñ‡Ð°Ð»Ð°",\n    "VOTES_FIVE_OR_MORE": "Ð³Ð¾Ð»Ð¾ÑÐ°",\n    "VOTES_FOUR": "Ð³Ð¾Ð»Ð¾ÑÐ°",\n    "VOTES_THREE": "Ð³Ð¾Ð»Ð¾ÑÐ°",\n    "VOTES_TWO": "Ð³Ð¾Ð»Ð¾ÑÐ°",\n    "VOTES_ZERO": "Ð³Ð¾Ð»Ð¾ÑÐ°",\n    "VOTE_SINGULAR": "Ð³Ð¾Ð»Ð¾Ñ",\n    "VOTES_FIVE_OR_MORE_SUB": "%d Ð³Ð¾Ð»Ð¾ÑÐ¾Ð²",\n    "VOTES_FOUR_SUB": "%d Ð³Ð¾Ð»Ð¾ÑÐ°",\n    "VOTES_THREE_SUB": "%d Ð³Ð¾Ð»Ð¾ÑÐ°",\n    "VOTES_TWO_SUB": "%d Ð³Ð¾Ð»Ð¾ÑÐ°",\n    "VOTES_ZERO_SUB": "%d Ð³Ð¾Ð»Ð¾ÑÐ¾Ð²",\n    "VOTE_SINGULAR_SUB": "%d Ð³Ð¾Ð»Ð¾Ñ",\n    "SAVE_CHANGES": "Ð¡Ð¾Ñ…Ñ€Ð°Ð½Ð¸Ñ‚ÑŒ Ð¸Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ",\n    "DETAILS": "ÐŸÐ¾Ð´Ñ€Ð¾Ð±Ð½Ð¾ÑÑ‚Ð¸",\n    "CREATED_PREFIX": "Ð¡Ð¾Ð·Ð´Ð°Ð½Ð¾: %s",\n    "URL_PREFIX": "Ð¡ÑÑ‹Ð»ÐºÐ°: %s",\n    "DESCRIPTION": "ÐžÐ¿Ð¸ÑÐ°Ð½Ð¸Ðµ",\n    "GUIDELINES": "ÐŸÑ€Ð°Ð²Ð¸Ð»Ð°",\n    "DESCRIPTION_PLACEHOLDER": "Ð£ ÑÑ‚Ð¾Ð³Ð¾ Ð¾Ð±ÑÑƒÐ¶Ð´ÐµÐ½Ð¸Ñ Ð¿Ð¾ÐºÐ° Ð½ÐµÑ‚ Ð¾Ð¿Ð¸ÑÐ°Ð½Ð¸Ñ.",\n    "GUIDELINES_PLACEHOLDER": "Ð£ ÑÑ‚Ð¾Ð³Ð¾ Ñ„Ð¾Ñ€ÑƒÐ¼Ð° Ð¿Ð¾ÐºÐ° Ð½ÐµÑ‚ Ð¿Ñ€Ð°Ð²Ð¸Ð».",\n    "NAVIGATION": "ÐŸÐ•Ð Ð•Ð™Ð¢Ð˜",\n    "DISCUSSION": "ÐžÐ±ÑÑƒÐ¶Ð´ÐµÐ½Ð¸Ðµ",\n    "ABOUT": "Ð˜Ð½Ñ„Ð¾",\n    "REPORTS_WITH_COUNT": "Ð–Ð°Ð»Ð¾Ð±Ñ‹ (%d)",\n    "ACTIVITY": "ÐÐºÑ‚Ð¸Ð²Ð½Ð¾ÑÑ‚ÑŒ",\n    "FEEDBACK": "ÐžÑ‚Ð·Ñ‹Ð²Ñ‹",\n    "CLOSE_THIS_BOARD": "Ð—Ð°ÐºÑ€Ñ‹Ñ‚ÑŒ Ð¾Ð±ÑÑƒÐ¶Ð´ÐµÐ½Ð¸Ðµ",\n    "YES": "Ð”Ð°",\n    "DELETE_HEADER": "Ð£Ð´Ð°Ð»ÐµÐ½Ð¸Ðµ",\n    "AUTHOR_MESSAGE": "Ð¡Ð¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ðµ Ð°Ð²Ñ‚Ð¾Ñ€Ñƒ",\n    "OFFENSE_LABEL": "ÐžÑÐºÐ¾Ñ€Ð±Ð»ÐµÐ½Ð¸Ðµ",\n    "OFFENSE_PLACEHOLDER": "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ð¾ÑÐºÐ¾Ñ€Ð±Ð»ÐµÐ½Ð¸Ðµ...",\n    "MODERATION_COMMENT_LABEL": "ÐšÐ¾Ð¼Ð¼ÐµÐ½Ñ‚Ð°Ñ€Ð¸Ð¹",\n    "BAN_LABEL": "Ð—Ð°Ð±Ð°Ð½Ð¸Ñ‚ÑŒ ÑÑ‚Ð¾Ð³Ð¾ Ð¸Ð³Ñ€Ð¾ÐºÐ°?",\n    "BAN_DURATION_NONE": "ÐÐµÑ‚ Ð±Ð°Ð½Ð°",\n    "BAN_DURATION_ONE_HOUR": "1 Ñ‡Ð°Ñ",\n    "BAN_DURATION_TWENTY_FOUR_HOURS": "24 Ñ‡Ð°ÑÐ°",\n    "BAN_DURATION_ONE_WEEK": "1 Ð½ÐµÐ´ÐµÐ»Ñ",\n    "BAN_DURATION_PERMANENT": "ÐŸÐ¾ÑÑ‚Ð¾ÑÐ½Ð½Ñ‹Ð¹",\n    "GLOBAL_BAN_LABEL": "Ð—Ð°Ð±Ð°Ð½Ð¸Ñ‚ÑŒ Ð½Ð° Ð²ÑÐµÑ… Ñ„Ð¾Ñ€ÑƒÐ¼Ð°Ñ…?",\n    "REPORT_HEADER": "ÐŸÐ¾Ð¶Ð°Ð»Ð¾Ð²Ð°Ñ‚ÑŒÑÑ",\n    "REPORT_OFFENSE_LABEL": "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ð¾ÑÐºÐ¾Ñ€Ð±Ð»ÐµÐ½Ð¸Ðµ:",\n    "REPORT_OFFENSE_PLACEHOLDER": "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ð¾ÑÐºÐ¾Ñ€Ð±Ð»ÐµÐ½Ð¸Ðµ...",\n    "REPORT_COMMENT_LABEL": "Ð”Ð¾Ð¿Ð¾Ð»Ð½Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ðµ ÐºÐ¾Ð¼Ð¼ÐµÐ½Ñ‚Ð°Ñ€Ð¸Ð¸:",\n    "REPORT": "ÐŸÐ¾Ð¶Ð°Ð»Ð¾Ð²Ð°Ñ‚ÑŒÑÑ",\n    "UNIVERSAL_RULE_JERK": "ÐÐµ Ð±ÑƒÐ´ÑŒÑ‚Ðµ Ñ€ÐµÐ´Ð¸ÑÐºÐ¾Ð¹",\n    "UNIVERSAL_RULE_MATURE": "ÐœÐ°Ñ‚ÐµÑ€Ð¸Ð°Ð»Ñ‹ Ð´Ð»Ñ Ð²Ð·Ñ€Ð¾ÑÐ»Ñ‹Ñ… Ð·Ð°Ð¿Ñ€ÐµÑ‰ÐµÐ½Ñ‹",\n    "UNIVERSAL_RULE_SPAM": "Ð¡Ð¿Ð°Ð¼ Ð·Ð°Ð¿Ñ€ÐµÑ‰ÐµÐ½",\n    "UNIVERSAL_RULE_GUIDELINES": "ÐŸÑ€Ð¸Ð´ÐµÑ€Ð¶Ð¸Ð²Ð°Ð¹Ñ‚ÐµÑÑŒ Ð¿Ñ€Ð°Ð²Ð¸Ð» Ñ„Ð¾Ñ€ÑƒÐ¼Ð°",\n    "UNIVERSAL_RULE_PROMOTION": "ÐŸÑ€Ð¾Ð´Ð²Ð¸Ð¶ÐµÐ½Ð¸Ðµ ÑƒÑ‡ÐµÑ‚Ð½Ð¾Ð¹ Ð·Ð°Ð¿Ð¸ÑÐ¸, Ð¿Ñ€Ð¾Ð´ÑƒÐºÑ‚Ð° Ð¸Ð»Ð¸ ÑÐµÑ€Ð²Ð¸ÑÐ°",\n    "UNIVERSAL_RULE_REPORTING": "Ð–Ð°Ð»Ð¾Ð±Ñ‹ Ð½Ð° Ð´Ñ€ÑƒÐ³Ð¸Ñ… Ð¸Ð³Ñ€Ð¾ÐºÐ¾Ð²",\n    "UNIVERSAL_RULE_DOWNLOADS": "Ð—Ð°Ð¿Ñ€ÐµÑ‰ÐµÐ½Ð½Ñ‹Ðµ Ð·Ð°Ð³Ñ€ÑƒÐ·ÐºÐ¸",\n    "UNIVERSAL_RULE_ILLEGAL": "Ð—Ð°Ð¿Ñ€ÐµÑ‰ÐµÐ½Ð½Ñ‹Ðµ Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ñ",\n    "UNIVERSAL_RULE_THREATS": "Ð£Ð³Ñ€Ð¾Ð·Ñ‹",\n    "UNIVERSAL_RULE_PHISHING": "Ð¤Ð¸ÑˆÐ¸Ð½Ð³ Ð¸ ÑÐºÐ°Ð¼Ð¸Ð½Ð³",\n    "NOTES_ONE": "Ð—Ð°Ð¼ÐµÑ‚ÐºÐ°",\n    "NOTES_FEW": "Ð—Ð°Ð¼ÐµÑ‚ÐºÐ¸",\n    "NOTES_MANY": "Ð—Ð°Ð¼ÐµÑ‚ÐºÐ¸",\n    "DISCUSSION_BYLINE": "ÐÐ²Ñ‚Ð¾Ñ€: %author% (%when% Ð² Ñ„Ð¾Ñ€ÑƒÐ¼Ðµ \'\'%board%\'\')",\n    "REPORTED_SUMMARY_ONE_NAME": "ÐÐ²Ñ‚Ð¾Ñ€ Ð¶Ð°Ð»Ð¾Ð±Ñ‹: %name1%, %when%, Ð¿Ñ€Ð¸Ñ‡Ð¸Ð½Ð°: %reason%",\n    "REPORTED_SUMMARY_TWO_NAMES": "ÐÐ²Ñ‚Ð¾Ñ€Ñ‹ Ð¶Ð°Ð»Ð¾Ð±Ñ‹: %name1% Ð¸ %name2%, %when%, Ð¿Ñ€Ð¸Ñ‡Ð¸Ð½Ð°: %reason%",\n    "REPORTED_SUMMARY_MANY_NAMES": "ÐÐ²Ñ‚Ð¾Ñ€Ñ‹ Ð¶Ð°Ð»Ð¾Ð±Ñ‹: %name1%, %name2% Ð¸ %other%, %when%, Ð¿Ñ€Ð¸Ñ‡Ð¸Ð½Ð°: %reason%",\n    "OTHER_ONE": "%d Ð´Ñ€ÑƒÐ³Ð¾Ð³Ð¾",\n    "OTHER_FEW": "%d Ð´Ñ€ÑƒÐ³Ð¸Ñ…",\n    "OTHER_MANY": "%d Ð´Ñ€ÑƒÐ³Ð¸Ñ…",\n    "MODERATOR_ACTIONS_HEADER": "Ð”ÐµÐ¹ÑÑ‚Ð²Ð¸Ñ Ð¼Ð¾Ð´ÐµÑ€Ð°Ñ‚Ð¾Ñ€Ð°",\n    "THIRTY_DAYS": "30 Ð´Ð½ÐµÐ¹",\n    "ACTION": "Ð”ÐµÐ¹ÑÑ‚Ð²Ð¸Ðµ",\n    "OFFENSE": "ÐžÑÐºÐ¾Ñ€Ð±Ð»ÐµÐ½Ð¸Ðµ",\n    "MANAGE": "Ð£Ð¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¸Ðµ",\n    "ACTION_EDITED_DISCUSSION": "Ð˜Ð·Ð¼ÐµÐ½Ð¸Ð» Ð¾Ð±ÑÑƒÐ¶Ð´ÐµÐ½Ð¸Ðµ",\n    "ACTION_EDITED_COMMENT": "Ð˜Ð·Ð¼ÐµÐ½Ð¸Ð» ÐºÐ¾Ð¼Ð¼ÐµÐ½Ñ‚Ð°Ñ€Ð¸Ð¹",\n    "ACTION_DELETED_DISCUSSION": "Ð£Ð´Ð°Ð»Ð¸Ð» Ð¾Ð±ÑÑƒÐ¶Ð´ÐµÐ½Ð¸Ðµ",\n    "ACTION_DELETED_COMMENT": "Ð£Ð´Ð°Ð»Ð¸Ð» ÐºÐ¾Ð¼Ð¼ÐµÐ½Ñ‚Ð°Ñ€Ð¸Ð¹",\n    "ACTION_BANNED_PLAYER": "Ð—Ð°Ð±Ð°Ð½Ð¸Ð» Ð¸Ð³Ñ€Ð¾ÐºÐ°",\n    "ACTION_DELETED_DISCUSSION_AND_BANNED": "Ð£Ð´Ð°Ð»Ð¸Ð» Ð¾Ð±ÑÑƒÐ¶Ð´ÐµÐ½Ð¸Ðµ Ð¸ Ð·Ð°Ð±Ð°Ð½Ð¸Ð» Ð¸Ð³Ñ€Ð¾ÐºÐ°",\n    "ACTION_DELETED_COMMENT_AND_BANNED": "Ð£Ð´Ð°Ð»Ð¸Ð» ÐºÐ¾Ð¼Ð¼ÐµÐ½Ñ‚Ð°Ñ€Ð¸Ð¹ Ð¸ Ð·Ð°Ð±Ð°Ð½Ð¸Ð» Ð¸Ð³Ñ€Ð¾ÐºÐ°",\n    "ANY_TYPE": "Ð›ÑŽÐ±Ð¾Ð¹ Ñ‚Ð¸Ð¿",\n    "ANY_MODERATOR": "Ð›ÑŽÐ±Ð¾Ð¹ Ð¼Ð¾Ð´ÐµÑ€Ð°Ñ‚Ð¾Ñ€",\n    "ANY_PLAYER": "Ð›ÑŽÐ±Ð¾Ð¹ Ð¸Ð³Ñ€Ð¾Ðº",\n    "REPORT_TO_BOARD_OWNER": "ÐžÑ‚Ð¿Ñ€Ð°Ð²Ð¸Ñ‚ÑŒ Ð¶Ð°Ð»Ð¾Ð±Ñƒ Ð²Ð»Ð°Ð´ÐµÐ»ÑŒÑ†Ñƒ Ñ„Ð¾Ñ€ÑƒÐ¼Ð°",\n    "REPORT_TO_RIOT": "ÐžÑ‚Ð¿Ñ€Ð°Ð²Ð¸Ñ‚ÑŒ Ð¶Ð°Ð»Ð¾Ð±Ñƒ Ð² Riot",\n    "DELETED_BY_INFO": "Ð£Ð´Ð°Ð»Ð¸Ð» %name% %when% (%offense%)",\n    "EDITED_BY_INFO": "Ð£Ð´Ð°Ð»Ð¸Ð» %name% %when%",\n    "BOARDS": "Ð¤Ð¾Ñ€ÑƒÐ¼",\n    "PIN": "Ð—Ð°ÐºÑ€ÐµÐ¿Ð¸Ñ‚ÑŒ",\n    "UNPIN": "ÐžÑ‚ÐºÑ€ÐµÐ¿Ð¸Ñ‚ÑŒ"\n}\n'
}, function(n, e) {
    n.exports = '{\n    "ADD": "Ekle",\n    "ADD_BUTTON": "Ekle",\n    "ADD_CHOICE": "SeÃ§enek Ekle",\n    "ADDING": "Ekleniyor",\n    "TOO_MANY_CHOICES": "En fazla %limit% seÃ§enek ekleyebilirsin",\n    "AVATAR": "avatar",\n    "BEST": "Ã–NE Ã‡IKANLAR",\n    "CANCEL": "Ä°ptal",\n    "CANCEL_BUTTON": "Ä°ptal",\n    "CONFIRM_REVOKE": "Geri alÄ±nsÄ±n mÄ±?",\n    "CLOSE": "Kapat",\n    "COMMENTS": "yorum",\n    "DELETED": "silindi",\n    "DISCUSS": "YORUMLAR",\n    "EDIT": "dÃ¼zenle",\n    "ERROR": "Bir hata oldu, Ã¶zÃ¼r dileriz.",\n    "ERROR401": "TÃ¼h be... kullanÄ±cÄ± seviyen yetmiyor.",\n    "ERROR403": "TÃ¼h be... %level%. seviye olman lazÄ±m.",\n    "ERROR403_OTHER": "AcÄ± ama gerÃ§ek... bu iÅŸlem iÃ§in yetkin yok.",\n    "ERROR_RATELIMIT": "Bu ne hÄ±z? Tekrar yorum yapmak iÃ§in biraz beklemelisin.",\n    "ERROR429": "LÃ¼tfen bir sÃ¼re bekleyip tekrar dene.",\n    "FACECHECKING": "Ã‡alÄ±ya kafa atmak da, internette \'\'GÃ¼venli miymiÅŸ?\'\' demeden web sitelerine dalmak da tehlikelidir. DiÄŸer sitelerin koridorlarÄ± bizimki kadar bol totemli olmayabilir. GÃ¶rdÃ¼ÄŸÃ¼n baÄŸlantÄ±lara tÄ±klarken lÃ¼tfen dikkatli ol!",\n    "FROM": "Kimden",\n    "MODERATOR": "ModeratÃ¶r",\n    "MODERATORS": "ModeratÃ¶rler",\n    "MORE": "devam",\n    "NO": "HayÄ±r",\n    "NOTIFICATIONS": "BÄ°LDÄ°RÄ°MLER",\n    "NOT_FOUND": "BulunamadÄ±",\n    "OWNER": "Sahip",\n    "PLAYER": "Oyuncu",\n    "POST": "GÃ–NDER",\n    "READ": "Oku",\n    "RECENT": "GÃœNCEL",\n    "REMOVE": "sil",\n    "REPLY": "yanÄ±tla",\n    "REQUIRED": "(Mecburi)",\n    "SAVE": "kaydet",\n    "SEND": "GÃ¶nder",\n    "SHOW": "GÃ¶ster",\n    "SOURCE": "Kaynak",\n    "TOTAL": "Toplam",\n    "UNREAD": "OkunmamÄ±ÅŸ Bildirimler",\n    "User": "KullanÄ±cÄ±",\n    "CHILD_COMMENT": "yanÄ±t",\n    "LEAVE_A_COMMENT": "Yorum yap",\n    "LOGIN_TO_COMMENT": "YAZMAK Ä°Ã‡Ä°N GÄ°RÄ°Åž YAP",\n    "CHILD_COMMENTS": "yanÄ±t",\n    "MORE_COMMENTS_SHOW": "Daha fazla yorum gÃ¶ster",\n    "MORE_COMMENTS_COUNT": "%d yorum daha var",\n    "NEW_COMMENTS": "yeni yorum",\n    "CHOICES_PROMPT": "SeÃ§enekler:",\n    "EXPIRATION_DATE_PROMPT": "BitiÅŸ Tarihi (Ä°steÄŸe BaÄŸlÄ±):",\n    "QUESTION_PROMPT": "Soru",\n    "COMMENT_IS_BELOW_THRESHOLD": "Yorum eÅŸiÄŸin altÄ±nda",\n    "CREATE_BUTTON": "OluÅŸtur",\n    "VOTE_BUTTON": "Oyla",\n    "DELETE_COMMENT_CONFIRM": "Bu yorumu silmek istediÄŸine emin misin?",\n    "LEAVING_SITE_CONFIRM": "AnlÄ±yorum ve devam etmek istiyorum",\n    "EDITING_AS": "DÃ¼zenleyen:",\n    "POSTING_AS": "Yazan:",\n    "GOING_TO": "GideceÄŸin yer: ",\n    "LEAVING_SITE": "Riot Games\'ten Ã§Ä±kÄ±yorsun",\n    "LEVEL_REGION": "%level%. SEVÄ°YE<br/> %region%",\n    "NEVER_SHOW_AGAIN": "Bunu bir daha gÃ¶sterme",\n    "NO_UNREAD": "OkunmamÄ±ÅŸ bildirim yok!",\n    "REMOVE_ALL": "Hepsini Sil",\n    "REVOKE": "Geri al",\n    "REVOKING": "Geri alÄ±nÄ±yor",\n    "SORTED_BY": "sÄ±ralama",\n    "VOTES_FIVE_OR_MORE": "oy",\n    "VOTES_FOUR": "oy",\n    "VOTES_THREE": "oy",\n    "VOTES_TWO": "oy",\n    "VOTES_ZERO": "oy",\n    "VOTE_SINGULAR": "oy",\n    "VOTES_FIVE_OR_MORE_SUB": "%d oy",\n    "VOTES_FOUR_SUB": "%d oy",\n    "VOTES_THREE_SUB": "%d oy",\n    "VOTES_TWO_SUB": "%d oy",\n    "VOTES_ZERO_SUB": "%d oy",\n    "VOTE_SINGULAR_SUB": "%d oy",\n    "SAVE_CHANGES": "DeÄŸiÅŸiklikleri Kaydet",\n    "DETAILS": "Detaylar",\n    "CREATED_PREFIX": "OluÅŸturulma Tarihi: %s",\n    "URL_PREFIX": "Adres: %s",\n    "DESCRIPTION": "AÃ§Ä±klama",\n    "GUIDELINES": "Kurallar",\n    "DESCRIPTION_PLACEHOLDER": "Bu pano iÃ§in henÃ¼z bir aÃ§Ä±klama oluÅŸturulmamÄ±ÅŸ.",\n    "GUIDELINES_PLACEHOLDER": "Bu pano iÃ§in henÃ¼z kural oluÅŸturulmamÄ±ÅŸ.",\n    "NAVIGATION": "GEZÄ°NTÄ°",\n    "DISCUSSION": "Konu",\n    "ABOUT": "HakkÄ±nda",\n    "REPORTS_WITH_COUNT": "Raporlar (%d)",\n    "ACTIVITY": "Olan Biten",\n    "FEEDBACK": "Geribildirim",\n    "CLOSE_THIS_BOARD": "Bu panoyu kapat",\n    "YES": "Evet",\n    "DELETE_HEADER": "Sil",\n    "AUTHOR_MESSAGE": "Yazana mesaj",\n    "OFFENSE_LABEL": "Ä°hlal",\n    "OFFENSE_PLACEHOLDER": "Ä°hlal seÃ§...",\n    "MODERATION_COMMENT_LABEL": "Yorum",\n    "BAN_LABEL": "Oyuncu uzaklaÅŸtÄ±rÄ±lsÄ±n mÄ±?",\n    "BAN_DURATION_NONE": "UzaklaÅŸtÄ±rma Yok",\n    "BAN_DURATION_ONE_HOUR": "1 saat",\n    "BAN_DURATION_TWENTY_FOUR_HOURS": "24 saat",\n    "BAN_DURATION_ONE_WEEK": "1 hafta",\n    "BAN_DURATION_PERMANENT": "KalÄ±cÄ±",\n    "GLOBAL_BAN_LABEL": "BÃ¼tÃ¼n panolardan uzaklaÅŸtÄ±rÄ±lsÄ±n mÄ±?",\n    "REPORT_HEADER": "Rapor et",\n    "REPORT_OFFENSE_LABEL": "Ä°hlal seÃ§:",\n    "REPORT_OFFENSE_PLACEHOLDER": "Ä°hlal seÃ§...",\n    "REPORT_COMMENT_LABEL": "Ek yorumlar:",\n    "REPORT": "Rapor Et",\n    "UNIVERSAL_RULE_JERK": "Ã‡amurluk Yapma",\n    "UNIVERSAL_RULE_MATURE": "YetiÅŸkin Ä°Ã§eriÄŸi Yok",\n    "UNIVERSAL_RULE_SPAM": "Spamlamak yok",\n    "UNIVERSAL_RULE_GUIDELINES": "Pano KurallarÄ±na UyalÄ±m",\n    "UNIVERSAL_RULE_PROMOTION": "Hesap, ÃœrÃ¼n veya Hizmet ReklamÄ±",\n    "UNIVERSAL_RULE_REPORTING": "DiÄŸer oyuncularÄ± rapor etme",\n    "UNIVERSAL_RULE_DOWNLOADS": "YasadÄ±ÅŸÄ± Ä°ndirmeler",\n    "UNIVERSAL_RULE_ILLEGAL": "YasadÄ±ÅŸÄ± Faaliyetler",\n    "UNIVERSAL_RULE_THREATS": "Tehdit",\n    "UNIVERSAL_RULE_PHISHING": "Kimlik AvÄ± Ve DolandÄ±rÄ±cÄ±lÄ±k",\n    "NOTES_ONE": "Not",\n    "NOTES_FEW": "Notlar",\n    "NOTES_MANY": "Notlar",\n    "DISCUSSION_BYLINE": "%author% tarafÄ±ndan %board% panosuna %when% gÃ¶nderildi",\n    "REPORTED_SUMMARY_ONE_NAME": "%name1% tarafÄ±ndan %reason% gerekÃ§esiyle %when% rapor edildi",\n    "REPORTED_SUMMARY_TWO_NAMES": "%name1% ve %name2% tarafÄ±ndan %reason% gerekÃ§esiyle %when% rapor edildi",\n    "REPORTED_SUMMARY_MANY_NAMES": " %name1%, %name2% ve %other% tarafÄ±ndan %reason% gerekÃ§esiyle %when% rapor edildi",\n    "OTHER_ONE": "%d kiÅŸi daha",\n    "OTHER_FEW": "%d kiÅŸi daha",\n    "OTHER_MANY": "%d kiÅŸi daha",\n    "MODERATOR_ACTIONS_HEADER": "ModeratÃ¶r Ä°ÅŸlemleri",\n    "THIRTY_DAYS": "30 GÃ¼n",\n    "ACTION": "Ä°ÅŸlem",\n    "OFFENSE": "Ä°hlal",\n    "MANAGE": "YÃ¶net",\n    "ACTION_EDITED_DISCUSSION": "Konu dÃ¼zenlendi",\n    "ACTION_EDITED_COMMENT": "Yorum dÃ¼zenlendi",\n    "ACTION_DELETED_DISCUSSION": "Konu silindi",\n    "ACTION_DELETED_COMMENT": "Yorum silindi",\n    "ACTION_BANNED_PLAYER": "UzaklaÅŸtÄ±rÄ±lmÄ±ÅŸ oyuncu",\n    "ACTION_DELETED_DISCUSSION_AND_BANNED": "Konu silindi ve oyuncu uzaklaÅŸtÄ±rÄ±ldÄ±",\n    "ACTION_DELETED_COMMENT_AND_BANNED": "Yorum silindi ve oyuncu uzaklaÅŸtÄ±rÄ±ldÄ±",\n    "ANY_TYPE": "Herhangi bir tip",\n    "ANY_MODERATOR": "Herhangi bir moderatÃ¶r",\n    "ANY_PLAYER": "Herhangi bir oyuncu",\n    "REPORT_TO_BOARD_OWNER": "Pano sahibine rapor et",\n    "REPORT_TO_RIOT": "Riot\'a Bildir",\n    "DELETED_BY_INFO": "%name% tarafÄ±ndan %when% silindi (%offense%)",\n    "EDITED_BY_INFO": "%name% tarafÄ±ndan %when% silindi",\n    "BOARDS": "Panolar",\n    "PIN": "Sabitle",\n    "UNPIN": "Sabitlemeyi KaldÄ±r"\n}\n'
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    __WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return this.JST = this.JST || {}, this.JST["app/apollo_widgets/user_select/templates/add_button.html"] = function(obj) {
            obj || (obj = {});
            var __t, __p = "";
            _.escape;
            with(obj) __p += "<button class='btn add-user' value='add'>" + (null == (__t = i18n.strings.ADD_BUTTON) ? "" : __t) + " " + (null == (__t = i18n.strings[userType]) ? "" : __t) + "</button>";
            return __p
        }, this.JST["app/apollo_widgets/user_select/templates/add_user_form.html"] = function(obj) {
            obj || (obj = {});
            var __t, __p = "";
            _.escape, Array.prototype.join;
            with(obj) __p += '<div id="apollo-user-search-modal" class="add-user-dialogue apollojs-warning apollojs-modal">\n  <div class="modal-body">\n    <h2>' + (null == (__t = i18n.strings.ADD) ? "" : __t) + " " + (null == (__t = i18n.strings[userType]) ? "" : __t) + "</h2>\n    <div class='content'>\n      <div>\n        <input class='searchText' name='searchText' id='searchText' type='text'/>\n        <select id='realm' class='realm'>\n          ", _.each(realms, function(n) {
                __p += "\n            <option value='" + (null == (__t = n) ? "" : __t) + "' ", n === defaultRealm && (__p += "selected"), __p += ">" + (null == (__t = n) ? "" : __t) + "</option>\n          "
            }), __p += "\n        </select>\n      </div>\n      <div class='actions'>\n        <button class='btn cancel' value='cancel' >" + (null == (__t = i18n.strings.CANCEL_BUTTON) ? "" : __t) + '</button>\n      </div>\n    </div>\n  </div>\n  <div class="user-list">\n  </div>\n</div>\n';
            return __p
        }, this.JST["app/apollo_widgets/user_select/templates/not_found.html"] = function(obj) {
            obj || (obj = {});
            var __t, __p = "";
            _.escape;
            with(obj) __p += '<div class="not-found">\n  ' + (null == (__t = i18n.strings.NOT_FOUND) ? "" : __t) + "\n</div>";
            return __p
        }, this.JST["app/apollo_widgets/user_select/templates/user.html"] = function(obj) {
            obj || (obj = {});
            var __t, __p = "";
            _.escape;
            with(obj) __p += '<div class="riot-user-select" data-apollo-id="' + (null == (__t = id) ? "" : __t) + '" data-apollo-realm="' + (null == (__t = realm) ? "" : __t) + "\">\n  <img class=\"avatar\" width='36' height='36' src=\"" + (null == (__t = avatarUrl) ? "" : __t) + '" />\n  <div class="username">' + (null == (__t = name) ? "" : __t) + " (" + (null == (__t = realm) ? "" : __t) + ")</div>\n</div>";
            return __p
        }, this.JST
    }.call(exports, __webpack_require__, exports, module), !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
}, function(n, e, t) {
    var o, r;
    o = [t(3), t(2), t(70), t(183), t(8), t(10)], r = function(n, e, t, o, r, i) {
        "use strict";
        var a = o.extend({
            model: t,
            initialize: function(e) {
                this.setupCache(e), this.models = [], this.listenTo(n, "board:pinned", this.add), this.listenTo(n, "board:unpinned", this.remove)
            },
            url: function() {
                return "navigation/pins/"
            },
            sync: function(n, o, r) {
                "read" === n && this.httpGet(o.url(), {}, function(n) {
                    var o = [];
                    e.each(n.pinnedBoards, function(n) {
                        var e = new t(n);
                        e.isPinned = !0, o.push(e)
                    }), r.success(o, r)
                })
            },
            isPinned: function(n) {
                return this.hasModel(n)
            },
            comparator: function(n) {
                return n.get("applicationName")
            },
            cacheKey: function() {
                var n = r.get("realm") + ":" + r.get("id");
                return "pinnedBoards:" + n
            }
        });
        return e.extend(a.prototype, i), new a
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(7)], r = function(n, e) {
        "use strict";
        var t = e.getCurrentCultureMessages(),
            o = {
                translate: function(n) {
                    var e = _.clone(n);
                    return e.i18n = {
                        strings: t
                    }, e
                }
            };
        return o
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(3), t(2), t(9), t(193), t(10)], r = function(n, e, t, o, r) {
        "use strict";
        var i = n.Collection.extend({
            defaults: {},
            initialize: function() {
                this.model = t
            },
            urlRoot: function() {
                return "applications/" + this.board.get("id")
            },
            url: function() {
                return this.urlRoot() + "/moderators"
            },
            sync: function(n, o, r) {
                switch (n) {
                    case "read":
                        this.httpGet(o.url(), {}, function(n) {
                            o.board.set(n.application);
                            var i = [];
                            e.each(n.moderators, function(n) {
                                i.push(new t(n))
                            }), r.success(i, r)
                        })
                }
            }
        });
        return e.extend(i.prototype, r), e.extend(i.prototype, {
            _attributes: {}
        }), e.extend(i.prototype._attributes, i.prototype.defaults), i
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(7), t(17), t(29)], r = function(n, e, t, o, r) {
        "use strict";
        var i = o.getCurrentCultureMessages(),
            a = {
                serializeForm: function(n) {
                    var e, t = n.serializeArray(),
                        o = {};
                    for (e in t) o[t[e].name] = t[e].value;
                    return o
                },
                translate: function(n) {
                    var t = e.clone(n);
                    return t.i18n = {
                        strings: i
                    }, t
                },
                setCurrentElementMarkup: function(n) {
                    this.$el.html(n)
                },
                haltFutureEventProcessing: function(n) {
                    this.lastClickTarget = n.currentTarget, n.preventDefault(), n.stopImmediatePropagation()
                }
            };
        return a
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    __WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return this.JST = this.JST || {}, this.JST["app/apollo_widgets/board_moderators/templates/board.html"] = function(obj) {
            obj || (obj = {});
            var __t, __p = "";
            _.escape;
            with(obj) __p += "<div class=\"riot-moderators authenticated\">\n  <div class='riot-moderators-masthead'>\n    <h1>" + (null == (__t = i18n.strings.MODERATORS) ? "" : __t) + '</h1>\n    <h2></h2>\n  </div>\n  <div class="moderator-list" style="width: 100%">\n  </div>\n</div>\n';
            return __p
        }, this.JST["app/apollo_widgets/board_moderators/templates/moderator.html"] = function(obj) {
            obj || (obj = {});
            var __t, __p = "";
            _.escape;
            with(obj) __p += "<div class='moderator'>\n  <div class='avatar'>\n    <img width='40px' height='40px' src='" + (null == (__t = avatarUrl) ? "" : __t) + "'>\n  </div>\n  <div>\n    <div class='username'>" + (null == (__t = name) ? "" : __t) + " (" + (null == (__t = realm) ? "" : __t) + ")</div>\n    <div class='actions'>\n      <span class='revoke'>" + (null == (__t = i18n.strings.REVOKE) ? "" : __t) + "</span>\n      <span class='confirmRevoke'>\n        " + (null == (__t = i18n.strings.CONFIRM_REVOKE) ? "" : __t) + "\n        <span class='yes'>" + (null == (__t = i18n.strings.YES) ? "" : __t) + "</span> |\n        <span class='no'>" + (null == (__t = i18n.strings.NO) ? "" : __t) + "</span>\n      </span>\n      <span class='revoking'>" + (null == (__t = i18n.strings.REVOKING) ? "" : __t) + "</span>\n      <span class='adding'>" + (null == (__t = i18n.strings.ADDING) ? "" : __t) + "</span>\n    </div>\n  </div>\n</div>";
            return __p
        }, this.JST["app/apollo_widgets/board_moderators/templates/owner.html"] = function(obj) {
            obj || (obj = {});
            var __t, __p = "";
            _.escape;
            with(obj) __p += "<div class='owner'>\n  <div class=\"avatar\"><img src='" + (null == (__t = avatarUrl) ? "" : __t) + "'></div>\n  <div>\n    <div class='username'>" + (null == (__t = name) ? "" : __t) + " (" + (null == (__t = realm) ? "" : __t) + ")</div>\n    <div class='actions'>(" + (null == (__t = i18n.strings.OWNER) ? "" : __t) + ")</div>\n  </div>\n</div>";
            return __p
        }, this.JST
    }.call(exports, __webpack_require__, exports, module), !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
}, function(n, e) {
    "use strict";
    n.exports = {
        delimiters: {
            thousands: " ",
            decimal: ","
        },
        abbreviations: {
            thousand: "tisÃ­c",
            million: "milionu",
            billion: "miliard",
            trillion: "bilionÅ¯"
        }
    }
}, function(n, e) {
    "use strict";
    n.exports = {
        delimiters: {
            thousands: " ",
            decimal: ","
        },
        abbreviations: {
            thousand: "K",
            million: "Mio",
            billion: "Mrd",
            trillion: "Bio"
        }
    }
}, function(n, e) {
    "use strict";
    n.exports = {
        delimiters: {
            thousands: ".",
            decimal: ","
        },
        abbreviations: {
            thousand: "Ï‡Î¹Î».",
            million: "ÎµÎº.",
            billion: "Î´Î¹Ïƒ.",
            trillion: "Ï„ÏÎ¹Ïƒ."
        }
    }
}, function(n, e) {
    "use strict";
    n.exports = {
        delimiters: {
            thousands: ",",
            decimal: "."
        },
        abbreviations: {
            thousand: "k",
            million: "m",
            billion: "b",
            trillion: "t"
        }
    }
}, function(n, e) {
    "use strict";
    n.exports = {
        delimiters: {
            thousands: ".",
            decimal: ","
        },
        abbreviations: {
            thousand: "K",
            million: "M",
            billion: "MRD",
            trillion: "B"
        }
    }
}, function(n, e) {
    "use strict";
    n.exports = {
        delimiters: {
            thousands: " ",
            decimal: ","
        },
        abbreviations: {
            thousand: "k",
            million: "M",
            billion: "Md",
            trillion: "Bn"
        }
    }
}, function(n, e) {
    "use strict";
    n.exports = {
        delimiters: {
            thousands: " ",
            decimal: ","
        },
        abbreviations: {
            thousand: "E",
            million: "M",
            billion: "Mrd",
            trillion: "B"
        }
    }
}, function(n, e) {
    "use strict";
    n.exports = {
        delimiters: {
            thousands: ".",
            decimal: ","
        },
        abbreviations: {
            thousand: "k",
            million: "m",
            billion: "b",
            trillion: "t"
        }
    }
}, function(n, e) {
    "use strict";
    n.exports = {
        delimiters: {
            thousands: ",",
            decimal: "."
        },
        abbreviations: {
            thousand: "åƒ",
            tenThousand: "ä¸‡",
            million: "ç™¾ä¸‡",
            hundredMillion: "å„„",
            billion: "",
            trillion: "å…†"
        }
    }
}, function(n, e) {
    "use strict";
    n.exports = {
        delimiters: {
            thousands: " ",
            decimal: ","
        },
        abbreviations: {
            thousand: "tys.",
            million: "mln",
            billion: "mld",
            trillion: "bln"
        }
    }
}, function(n, e) {
    "use strict";
    n.exports = {
        delimiters: {
            thousands: ".",
            decimal: ","
        },
        abbreviations: {
            thousand: null,
            tenThousand: " mil",
            million: " mi",
            billion: " bi",
            trillion: " tri"
        }
    }
}, function(n, e) {
    "use strict";
    n.exports = {
        delimiters: {
            thousands: ".",
            decimal: ","
        },
        abbreviations: {
            thousand: "K",
            million: "mil",
            billion: "mld",
            trillion: "tril"
        }
    }
}, function(n, e) {
    "use strict";
    n.exports = {
        delimiters: {
            thousands: ".",
            decimal: ","
        },
        abbreviations: {
            thousand: null,
            tenThousand: " Ñ‚Ñ‹Ñ.",
            million: " Ð¼Ð»Ð½.",
            billion: " Ð¼Ð»Ñ€Ð´.",
            trillion: " Ñ‚Ñ€Ð»Ð½."
        }
    }
}, function(n, e) {
    "use strict";
    n.exports = {
        delimiters: {
            thousands: ",",
            decimal: "."
        },
        abbreviations: {
            thousand: null,
            tenThousand: " Bin",
            million: " Mn",
            billion: " Mr",
            trillion: " Tn"
        }
    }
}, function(n, e, t) {
    "use strict";

    function o(n, e) {
        var t, o = Math.pow(10, e);
        return t = (Math.round(n * o) / o).toFixed(e)
    }
    var r = t(131),
        i = t(132),
        a = t(133),
        s = t(134),
        E = t(135),
        _ = t(136),
        l = t(137),
        O = t(138),
        u = t(139),
        R = t(140),
        d = t(141),
        N = t(142),
        T = t(144),
        c = t(143),
        A = {
            cs_CZ: r,
            de_DE: i,
            el_GR: a,
            en_AU: s,
            en_GB: s,
            en_PL: s,
            en_US: s,
            es_ES: E,
            es_MX: E,
            fr_FR: _,
            hu_HU: l,
            it_IT: O,
            ja_JP: u,
            pl_PL: R,
            pt_BR: d,
            ro_RO: N,
            tr_TR: T,
            ru_RU: c,
            zh_CN: s,
            zh_MY: s,
            zh_TW: s
        },
        S = "en_US";
    n.exports = {
        setCultureIdentifier: function(n) {
            return S = n
        },
        getCultureIdentifier: function() {
            return S
        },
        shrink: function(n, e) {
            A.hasOwnProperty(S) || (S = "en_US"), e = "string" == typeof e ? e : "0.0";
            var t, r, i = "",
                a = Math.abs(n),
                s = "",
                E = !1;
            return a >= Math.pow(10, 12) ? (i = A[S].abbreviations.trillion, n /= Math.pow(10, 12)) : a < Math.pow(10, 12) && a >= Math.pow(10, 9) ? (i = A[S].abbreviations.billion, n /= Math.pow(10, 9)) : a < Math.pow(10, 9) && a >= Math.pow(10, 8) ? (i = A[S].abbreviations.hundredMillion || A[S].abbreviations.million, n /= Math.pow(10, 6)) : a < Math.pow(10, 9) && a >= Math.pow(10, 6) ? (i = A[S].abbreviations.million, n /= Math.pow(10, 6)) : a < Math.pow(10, 6) && a >= Math.pow(10, 4) ? (i = A[S].abbreviations.tenThousand || A[S].abbreviations.thousand, n /= Math.pow(10, 3)) : a < Math.pow(10, 6) && a >= Math.pow(10, 3) && A[S].abbreviations.thousand && (i = A[S].abbreviations.thousand, n /= Math.pow(10, 3)), r = e.split(".")[1], s = o(n, r.length), t = s.split(".")[0], s = s.split(".")[1] && s.split(".")[1].length ? A[S].delimiters.decimal + s.split(".")[1] : "", 0 === Number(s.slice(1)) && (s = ""), t.indexOf("-") > -1 && (t = t.slice(1), E = !0), t = t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + A[S].delimiters.thousands), (E ? "-" : "") + t + s + (i ? i : "")
        }
    }
}, function(n, e, t) {
    var o, r;
    o = [t(1)], r = function(n) {
        "use strict";
        var e = {
            registry: {},
            start: function() {
                var e = this;
                this.stop(), n(window).on("message", function(n) {
                    n = n || {};
                    var t = n.originalEvent || {},
                        o = t.data && t.data.split(":");
                    return !o || o.length && o.length < 2 ? !1 : (t.channel = o[0], t.msg = o[1], t.channel && t.msg && e.registry[t.channel] ? (e.registry[t.channel].windowHandle && (t.windowHandle = e.registry[t.channel].windowHandle), void(e.registry[t.channel].popup && "readyVerified" === t.msg ? e.registry[t.channel].ready = !0 : e.registry[t.channel].popup || "readyCheck" !== t.msg ? e.registry[t.channel].ready && e.receive(t) : (e.registry[t.channel].ready = !0, e.registry[t.channel].windowHandle = t.source, t.source.postMessage(t.channel + ":readyVerified", e.registry[t.channel].origin)))) : !1)
                })
            },
            stop: function() {
                n(window).off("message")
            },
            send: function(n, e) {
                this.registry[n] && this.registry[n].windowHandle.postMessage(n + ":" + e, this.registry[n].origin)
            },
            receive: function(e) {
                this.registry[e.channel] && n.isFunction(this.registry[e.channel][e.msg]) && this.registry[e.channel][e.msg](e)
            },
            hook: function(e, t) {
                var o = this;
                if (this.unhook(e), this.registry[e] = t, this.registry[e].ready = !1, this.registry[e].popup) {
                    var r = window.open(this.registry[e].popup.url, this.registry[e].popup.target, this.registry[e].popup.params);
                    if ("undefined" != typeof r && r) {
                        this.registry[e].windowHandle = r, this.registry[e].windowHandle.focus();
                        var i = setInterval(function() {
                            o.registry[e].ready ? (clearInterval(i), n.isFunction(o.registry[e].initialize) && o.registry[e].initialize()) : o.registry[e].windowHandle.postMessage(e + ":readyCheck", o.registry[e].origin)
                        }, 1500)
                    } else this.unhook(e), window.alert("Your browser has blocked the popup. Please disable popup blockers")
                } else n.isFunction(o.registry[e].initialize) && o.registry[e].initialize()
            },
            unhook: function(n) {
                this.registry[n] && (this.closeWindow(n), delete this.registry[n])
            },
            closeWindow: function(n) {
                this.registry[n] && this.registry[n].windowHandle && this.registry[n].popup ? this.registry[n].windowHandle.close() : this.registry[n]
            }
        };
        return e.start(), window.postMessages = e, e
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(3), t(2), t(8), t(40), t(10)], r = function(n, e, t, o, r) {
        "use strict";
        var i = n.Collection.extend({
            urlRoot: function() {
                return "applications/" + this.get("applicationId")
            },
            url: "discussions/",
            model: o,
            defaults: {
                sortType: "best",
                hasMore: !1,
                authenticated: !1
            },
            initialize: function() {
                e.bindAll(this, "updateHasMore"), this.on("change", this.updateHasMore)
            },
            sync: function(n, e, t) {
                switch (n) {
                    case "read":
                        this.httpGet(e.url, {}, function(n) {
                            t.success(e, n, t)
                        })
                }
            },
            parse: function(n) {
                var o;
                return o = e.isObject(n.discussions) ? n.discussions : n, t.set(n.user), t.isAuthenticated() && e.extend(o, {
                    authenticated: !0
                }), e.extend(this._attributes, n), o
            },
            getMore: function() {
                var n = this;
                this.set("hasMore", !1);
                var e = {
                    num_loaded: this.length,
                    sort_type: this.get("sortType"),
                    snapshot_id: this.get("snapshotId")
                };
                this.httpGet(n.url, e, function(e) {
                    var t = n.parse(e);
                    n.update(t, {
                        remove: !1
                    }), n.set("totalDiscussionsSoft", e.totalDiscussionsSoft)
                })
            },
            updateHasMore: function() {
                this.get("totalDiscussionsSoft") > this.length ? this.set("hasMore", !0) : this.set("hasMore", !1)
            },
            set: function(n, e) {
                this._attributes[n] = e, this.trigger("change:" + n, e)
            },
            get: function(n) {
                return this._attributes[n]
            },
            has: function(n) {
                return e.isUndefined(this._attributes[n]) ? !1 : !0
            }
        });
        return e.extend(i.prototype, r), e.extend(i.prototype, {
            _attributes: {}
        }), e.extend(i.prototype._attributes, i.prototype.defaults), i
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2)], r = function(n, e) {
        "use strict";
        var t = {
            cachedPartials: {},
            renderPartial: function(e, t) {
                if (!this.cachedPartials.hasOwnProperty(e)) {
                    var o = n("#" + e).html();
                    if (!o) return "";
                    this.cachedPartials[e] = this.preparePartialTemplateFromMarkup(o)
                }
                return this.cachedPartials[e](t, {
                    variable: "data"
                })
            },
            linkToDiscussion: function(n, t, o) {
                return n = this.removeSpecialCharacters(n), o = e.isString(o) ? " " + o + " " : "", n
            },
            removeSpecialCharacters: function(n) {
                return e.escape(n)
            },
            preparePartialTemplateFromMarkup: function(n) {
                return e.template(n, null, {
                    variable: "data"
                })
            }
        };
        return t
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(6), t(5), t(8), t(22), t(32), t(21), t(148), t(39), t(24), t(23)], r = function(n, e, t, o, r, i, a, s, E, _, l, O, u) {
        "use strict";
        var R = t.View.extend({
            DiscussionTemplate: u["app/apollo_widgets/comment_listing/templates/discussion.html"],
            AlertTemplate: u["app/apollo_widgets/comment_listing/templates/_alert.html"],
            tagName: "div",
            className: "riot-discussion",
            events: {
                "change .sort-order select": "respondToSort",
                "click .riot-discussion-login-link a": "respondToLogin",
                "click a.more": "respondToMoreComments",
                "click a.cancel": "respondToCancelReply",
                "click button.post": "respondToSubmit"
            },
            initialize: function() {
                e.bindAll(this, "render", "renderAlert", "renderChildren", "renderModelState", "respondToSubmit", "respondToSort", "respondToCancelReply", "respondToMoreComments"), this.model.comments.on("add reset", this.renderChildren), this.model.on("change:lastError", this.renderAlert), this.model.on("change:childCount", this.renderModelState), this.model.on("change:moreCount", this.renderModelState), this.model.on("change:sortType", this.renderModelState), this.model.on("change:moreCommentsVisible", this.renderModelState), this.model.on("change:authenticated", this.renderModelState)
            },
            respondToSort: function(e) {
                var t = n(e.target).val();
                this.model.set("sortType", t), this.model.fetch()
            },
            respondToCancelReply: function(n) {
                this.haltFutureEventProcessing(n), this.resetReplyForm()
            },
            respondToSubmit: function(n) {
                this.haltFutureEventProcessing(n);
                var e = this,
                    t = this.serializeForm(this.replyForm());
                this.model.newReply(t, function() {
                    e.resetReplyForm()
                })
            },
            respondToLogin: function(n) {
                n.preventDefault(), n.stopImmediatePropagation(), o.Sandworm.pvpnetMenus.show("login")
            },
            render: function() {
                return this.renderBody(), this.renderChildren(), this.renderModelState(), this.renderBehavior(), this
            },
            renderBody: function() {
                var n = this.getTemplateData(),
                    e = this.DiscussionTemplate(n);
                return this.setCurrentElementMarkup(e), this
            },
            renderChildren: function() {
                var n = this;
                this.commentCollection().html("");
                var e = new O({
                        collection: this.model.comments
                    }),
                    t = e.render().el;
                return n.commentCollection().replaceWith(t), this
            },
            renderModelState: function() {
                return this.renderBooleanAttributeAsElementClass("authenticated"), this.renderBooleanAttributeAsElementClass("moreCommentsVisible"), this.renderSortDropdownLabelValue(), this.setDiscussionMoreCountLabelValue(this.model.get("moreCount")), this
            },
            renderBehavior: function() {
                var n = this;
                if (e.defer(function() {
                        n.enableReplyTextAreaBehavior(), r.features.toolbarEnabled && (n.replyFormTextarea().attr("data-apollo-widget", "toolbar"), window.Riot.Apollo.attach(n.replyFormTextarea()))
                    }), i.isAuthenticated()) {
                    var t = this.getCommentWidgetIcon(i);
                    this.commentCurrentUserAvatar().attr("src", t)
                }
            },
            getTemplateData: function() {
                var n = this.model.toJSON();
                return n.username = this.getCurrentUsername(), n.currentUserLoLSummonerIconUrl = this.getCurrentUserLoLSummonerIconUrl(), n = this.translate(n), e.extend(n, _), n
            }
        });
        return e.extend(R.prototype, a), e.extend(R.prototype, s), e.extend(R.prototype, E), e.extend(R.prototype, l), R
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e) {
    Riot.RFMToolbar.Translator.strings["cs-cz"] = {}, Riot.RFMToolbar.Translator.strings["cs-cz"].gamedata_button_tooltip_champion = "VloÅ¾ ikonu Å¡ampiona", Riot.RFMToolbar.Translator.strings["cs-cz"].gamedata_button_tooltip_item = "VloÅ¾ ikonu pÅ™edmÄ›tu", Riot.RFMToolbar.Translator.strings["cs-cz"].gamedata_button_tooltip_summoner = "VloÅ¾ ikonu vyvolÃ¡vaÄova kouzla", Riot.RFMToolbar.Translator.strings["cs-cz"].gamedata_dropdown_prompt_champion = "Zadej jmÃ©no Å¡ampiona pro zÃºÅ¾enÃ­ vÃ½bÄ›ru", Riot.RFMToolbar.Translator.strings["cs-cz"].gamedata_dropdown_prompt_item = "Zadej jmÃ©no pÅ™edmÄ›tu pro zÃºÅ¾enÃ­ vÃ½bÄ›ru", Riot.RFMToolbar.Translator.strings["cs-cz"].gamedata_dropdown_prompt_summoner = "Zadej jmÃ©no vyvolÃ¡vaÄova kouzla pro zÃºÅ¾enÃ­ vÃ½bÄ›ru", Riot.RFMToolbar.Translator.strings["cs-cz"].formatting_button_tooltip_bold = "TuÄnÃ©", Riot.RFMToolbar.Translator.strings["cs-cz"].formatting_button_tooltip_italic = "KurzÃ­va", Riot.RFMToolbar.Translator.strings["cs-cz"].formatting_button_tooltip_strikethrough = "PÅ™eÅ¡krtnutÃ©", Riot.RFMToolbar.Translator.strings["cs-cz"].url_button_tooltip = "VloÅ¾it odkaz", Riot.RFMToolbar.Translator.strings["cs-cz"].url_button_prompt = "VloÅ¾ adresu URL svÃ©ho odkazu:",
        Riot.RFMToolbar.Translator.strings["cs-cz"].paragraph_button_tooltip_unordered = "NeÄÃ­slovanÃ½ seznam", Riot.RFMToolbar.Translator.strings["cs-cz"].paragraph_button_tooltip_ordered = "ÄŒÃ­slovanÃ½ seznam", Riot.RFMToolbar.Translator.strings["cs-cz"].paragraph_button_tooltip_blockquote = "Citace", Riot.RFMToolbar.Translator.strings["cs-cz"].formatting_guide_tooltip = "Pokyny pro formÃ¡tovÃ¡nÃ­", Riot.RFMToolbar.Translator.strings["cs-cz"].close_button = "ZavÅ™Ã­t"
}, function(n, e) {
    Riot.RFMToolbar.Translator.strings["en-US"] = {}, Riot.RFMToolbar.Translator.strings["en-US"].gamedata_button_tooltip_champion = "Championsymbol einfÃ¼gen", Riot.RFMToolbar.Translator.strings["en-US"].gamedata_button_tooltip_item = "Gegenstandssymbol einfÃ¼gen", Riot.RFMToolbar.Translator.strings["en-US"].gamedata_button_tooltip_summoner = "BeschwÃ¶rerzaubersymbol einfÃ¼gen", Riot.RFMToolbar.Translator.strings["en-US"].gamedata_dropdown_prompt_champion = "Gib Championnamen ein, um die Liste zu filtern.", Riot.RFMToolbar.Translator.strings["en-US"].gamedata_dropdown_prompt_item = "Gib Gegenstandssnamen ein, um die Liste zu filtern.", Riot.RFMToolbar.Translator.strings["en-US"].gamedata_dropdown_prompt_summoner = "Gib BeschwÃ¶rerzaubernamen ein, um die Liste zu filtern.", Riot.RFMToolbar.Translator.strings["en-US"].formatting_button_tooltip_bold = "Fett", Riot.RFMToolbar.Translator.strings["en-US"].formatting_button_tooltip_italic = "Kursiv", Riot.RFMToolbar.Translator.strings["en-US"].formatting_button_tooltip_strikethrough = "Durchgestrichen", Riot.RFMToolbar.Translator.strings["en-US"].url_button_tooltip = "Gib einen Link ein.", Riot.RFMToolbar.Translator.strings["en-US"].url_button_prompt = "Bitte gib die URL deines Links an:", Riot.RFMToolbar.Translator.strings["en-US"].paragraph_button_tooltip_unordered = "Unsortierte Liste", Riot.RFMToolbar.Translator.strings["en-US"].paragraph_button_tooltip_ordered = "Sortierte Liste", Riot.RFMToolbar.Translator.strings["en-US"].paragraph_button_tooltip_blockquote = "Blockzitat", Riot.RFMToolbar.Translator.strings["en-US"].formatting_guide_tooltip = "Formatierungsanleitung", Riot.RFMToolbar.Translator.strings["en-US"].close_button = "SchlieÃŸen"
}, function(n, e) {
    Riot.RFMToolbar.Translator.strings["el-GR"] = {}, Riot.RFMToolbar.Translator.strings["el-GR"].gamedata_button_tooltip_champion = "Î•Î¹ÏƒÎ¬Î³ÎµÏ„Îµ ÎµÎ¹ÎºÎ¿Î½Î¯Î´Î¹Î¿ Î‰ÏÏ‰Î±", Riot.RFMToolbar.Translator.strings["el-GR"].gamedata_button_tooltip_item = "Î•Î¹ÏƒÎ¬Î³ÎµÏ„Îµ ÎµÎ¹ÎºÎ¿Î½Î¯Î´Î¹Î¿ Î‘Î½Ï„Î¹ÎºÎµÎ¹Î¼Î­Î½Î¿Ï…", Riot.RFMToolbar.Translator.strings["el-GR"].gamedata_button_tooltip_summoner = "Î•Î¹ÏƒÎ¬Î³ÎµÏ„Îµ ÎµÎ¹ÎºÎ¿Î½Î¯Î´Î¹Î¿ ÎžÎ¿ÏÎºÎ¹Î¿Ï Î•Ï€Î¹ÎºÎ±Î»ÎµÏƒÏ„Î®", Riot.RFMToolbar.Translator.strings["el-GR"].gamedata_dropdown_prompt_champion = "Î•Î¹ÏƒÎ¬Î³ÎµÏ„Îµ Î¿Î½ÏŒÎ¼Î±Ï„Î± Î·ÏÏŽÏ‰Î½ Î³Î¹Î± Ï†Î¹Î»Ï„ÏÎ¬ÏÎ¹ÏƒÎ¼Î± Ï„Î·Ï‚ Î»Î¯ÏƒÏ„Î±Ï‚", Riot.RFMToolbar.Translator.strings["el-GR"].gamedata_dropdown_prompt_item = "Î•Î¹ÏƒÎ¬Î³ÎµÏ„Îµ Î¿Î½ÏŒÎ¼Î±Ï„Î± Î±Î½Ï„Î¹ÎºÎµÎ¹Î¼Î­Î½Ï‰Î½ Î³Î¹Î± Ï†Î¹Î»Ï„ÏÎ¬ÏÎ¹ÏƒÎ¼Î± Î»Î¯ÏƒÏ„Î±Ï‚", Riot.RFMToolbar.Translator.strings["el-GR"].gamedata_dropdown_prompt_summoner = "Î•Î¹ÏƒÎ¬Î³ÎµÏ„Îµ Î¿Î½ÏŒÎ¼Î±Ï„Î± ÎžÎ¿ÏÎºÎ¹ÏŽÎ½ Î•Ï€Î¹ÎºÎ±Î»ÎµÏƒÏ„Î® Î³Î¹Î± Ï†Î¹Î»Ï„ÏÎ¬ÏÎ¹ÏƒÎ¼Î± Î»Î¯ÏƒÏ„Î±Ï‚", Riot.RFMToolbar.Translator.strings["el-GR"].formatting_button_tooltip_bold = "ÎˆÎ½Ï„Î¿Î½Î±", Riot.RFMToolbar.Translator.strings["el-GR"].formatting_button_tooltip_italic = "Î Î»Î¬Î³Î¹Î±", Riot.RFMToolbar.Translator.strings["el-GR"].formatting_button_tooltip_strikethrough = "Î”Î¹ÎµÎ³ÏÎ±Î¼Î¼Î­Î½Î¿", Riot.RFMToolbar.Translator.strings["el-GR"].url_button_tooltip = "Î•Î¹ÏƒÎ¬Î³ÎµÏ„Îµ Î­Î½Î± Î»Î¹Î½Îº", Riot.RFMToolbar.Translator.strings["el-GR"].url_button_prompt = "Î Î±ÏÎ±ÎºÎ±Î»Î¿ÏÎ¼Îµ ÎµÎ¹ÏƒÎ¬Î³ÎµÏ„Îµ Ï„Î¿ Î»Î¹Î½Îº ÏƒÎ±Ï‚:", Riot.RFMToolbar.Translator.strings["el-GR"].paragraph_button_tooltip_unordered = "Î‘Ï„Î±Î¾Î¹Î½ÏŒÎ¼Î·Ï„Î· Î»Î¯ÏƒÏ„Î±", Riot.RFMToolbar.Translator.strings["el-GR"].paragraph_button_tooltip_ordered = "Î¤Î±Î¾Î¹Î½Î¿Î¼Î·Î¼Î­Î½Î· Î»Î¯ÏƒÏ„Î±", Riot.RFMToolbar.Translator.strings["el-GR"].paragraph_button_tooltip_blockquote = "Î Î±ÏÎ¬Î¸ÎµÏƒÎ·", Riot.RFMToolbar.Translator.strings["el-GR"].formatting_guide_tooltip = "ÎŸÎ´Î·Î³ÏŒÏ‚ Î¼Î¿ÏÏ†Î¿Ï€Î¿Î¯Î·ÏƒÎ·Ï‚", Riot.RFMToolbar.Translator.strings["el-GR"].close_button = "ÎšÎ»ÎµÎ¯ÏƒÎ¹Î¼Î¿"
}, function(n, e) {
    Riot.RFMToolbar.Translator.strings["en-US"] = {}, Riot.RFMToolbar.Translator.strings["en-US"].gamedata_button_tooltip_champion = "Insert a Champion icon", Riot.RFMToolbar.Translator.strings["en-US"].gamedata_button_tooltip_item = "Insert an Item icon", Riot.RFMToolbar.Translator.strings["en-US"].gamedata_button_tooltip_summoner = "Insert a Summoner Spell icon", Riot.RFMToolbar.Translator.strings["en-US"].gamedata_button_tooltip_ability = "Insert a Champion ability icon", Riot.RFMToolbar.Translator.strings["en-US"].gamedata_dropdown_prompt_champion = "Type champion names to filter list", Riot.RFMToolbar.Translator.strings["en-US"].gamedata_dropdown_prompt_item = "Type item names to filter list", Riot.RFMToolbar.Translator.strings["en-US"].gamedata_dropdown_prompt_summoner = "Type summoner spell names to filter list", Riot.RFMToolbar.Translator.strings["en-US"].gamedata_dropdown_prompt_ability = "Please select a champion first.", Riot.RFMToolbar.Translator.strings["en-US"].formatting_button_tooltip_bold = "Bold", Riot.RFMToolbar.Translator.strings["en-US"].formatting_button_tooltip_italic = "Italic", Riot.RFMToolbar.Translator.strings["en-US"].formatting_button_tooltip_strikethrough = "Strikethrough", Riot.RFMToolbar.Translator.strings["en-US"].url_button_tooltip = "Insert a link", Riot.RFMToolbar.Translator.strings["en-US"].url_button_prompt = "Please enter the URL of your link:", Riot.RFMToolbar.Translator.strings["en-US"].paragraph_button_tooltip_unordered = "Unordered List", Riot.RFMToolbar.Translator.strings["en-US"].paragraph_button_tooltip_ordered = "Ordered List", Riot.RFMToolbar.Translator.strings["en-US"].paragraph_button_tooltip_blockquote = "Blockquote", Riot.RFMToolbar.Translator.strings["en-US"].formatting_guide_tooltip = "Formatting Guide", Riot.RFMToolbar.Translator.strings["en-US"].close_button = "Close"
}, function(n, e) {
    Riot.RFMToolbar.Translator.strings["es-ES"] = {}, Riot.RFMToolbar.Translator.strings["es-ES"].gamedata_button_tooltip_champion = "Introduce un icono de campeÃ³n", Riot.RFMToolbar.Translator.strings["es-ES"].gamedata_button_tooltip_item = "Introduce un icono de objeto", Riot.RFMToolbar.Translator.strings["es-ES"].gamedata_button_tooltip_summoner = "Introduce un icono de hechizo de invocador", Riot.RFMToolbar.Translator.strings["es-ES"].gamedata_dropdown_prompt_champion = "Introduce los nombres de los campeones para filtrar la lista", Riot.RFMToolbar.Translator.strings["es-ES"].gamedata_dropdown_prompt_item = "Introduce los nombres de los objetos para filtrar la lista", Riot.RFMToolbar.Translator.strings["es-ES"].gamedata_dropdown_prompt_summoner = "Introduce los hechizos de invocador para filtrar la lista", Riot.RFMToolbar.Translator.strings["es-ES"].formatting_button_tooltip_bold = "Negrita", Riot.RFMToolbar.Translator.strings["es-ES"].formatting_button_tooltip_italic = "Cursiva", Riot.RFMToolbar.Translator.strings["es-ES"].formatting_button_tooltip_strikethrough = "Tachado", Riot.RFMToolbar.Translator.strings["es-ES"].url_button_tooltip = "Introduce un enlace", Riot.RFMToolbar.Translator.strings["es-ES"].url_button_prompt = "Por favor introduce la URL de tu enlace:", Riot.RFMToolbar.Translator.strings["es-ES"].paragraph_button_tooltip_unordered = "Lista sin orden", Riot.RFMToolbar.Translator.strings["es-ES"].paragraph_button_tooltip_ordered = "Lista ordenada", Riot.RFMToolbar.Translator.strings["es-ES"].paragraph_button_tooltip_blockquote = "AÃ±adir cita", Riot.RFMToolbar.Translator.strings["es-ES"].formatting_guide_tooltip = "GuÃ­a de formato", Riot.RFMToolbar.Translator.strings["es-ES"].close_button = "Cerrar"
}, function(n, e) {
    Riot.RFMToolbar.Translator.strings["es-MX"] = {}, Riot.RFMToolbar.Translator.strings["es-MX"].gamedata_button_tooltip_champion = "Insertar un Ã­cono de CampeÃ³n", Riot.RFMToolbar.Translator.strings["es-MX"].gamedata_button_tooltip_item = "Insertar un Ã­cono de Objeto", Riot.RFMToolbar.Translator.strings["es-MX"].gamedata_button_tooltip_summoner = "Insertar un Ã­cono de Hechizo de Invocador", Riot.RFMToolbar.Translator.strings["es-MX"].gamedata_dropdown_prompt_champion = "Introducir campeones para filtrar la lista", Riot.RFMToolbar.Translator.strings["es-MX"].gamedata_dropdown_prompt_item = "Introducir objetos para filtrar la lista", Riot.RFMToolbar.Translator.strings["es-MX"].gamedata_dropdown_prompt_summoner = "Introducir hechizos de invocador para filtrar la lista", Riot.RFMToolbar.Translator.strings["es-MX"].formatting_button_tooltip_bold = "Negrita", Riot.RFMToolbar.Translator.strings["es-MX"].formatting_button_tooltip_italic = "Cursiva", Riot.RFMToolbar.Translator.strings["es-MX"].formatting_button_tooltip_strikethrough = "Tachar", Riot.RFMToolbar.Translator.strings["es-MX"].url_button_tooltip = "Insertar un enlace", Riot.RFMToolbar.Translator.strings["es-MX"].url_button_prompt = "Introduce por favor el URL de tu enlace:", Riot.RFMToolbar.Translator.strings["es-MX"].paragraph_button_tooltip_unordered = "Lista desordenada", Riot.RFMToolbar.Translator.strings["es-MX"].paragraph_button_tooltip_ordered = "Lista ordenada", Riot.RFMToolbar.Translator.strings["es-MX"].paragraph_button_tooltip_blockquote = "Cita indentada", Riot.RFMToolbar.Translator.strings["es-MX"].formatting_guide_tooltip = "GuÃ­a de Formato", Riot.RFMToolbar.Translator.strings["es-MX"].close_button = "Cerrar"
}, function(n, e) {
    Riot.RFMToolbar.Translator.strings["fr-FR"] = {}, Riot.RFMToolbar.Translator.strings["fr-FR"].gamedata_button_tooltip_champion = "InsÃ©rer un icone de champion", Riot.RFMToolbar.Translator.strings["fr-FR"].gamedata_button_tooltip_item = "InsÃ©rer un icone d&apos;objet", Riot.RFMToolbar.Translator.strings["fr-FR"].gamedata_button_tooltip_summoner = "InsÃ©rer un icone de sort d&apos;invocateur", Riot.RFMToolbar.Translator.strings["fr-FR"].gamedata_dropdown_prompt_champion = "Ã‰crire le nom d&apos;un champion pour filtrer la liste", Riot.RFMToolbar.Translator.strings["fr-FR"].gamedata_dropdown_prompt_item = "Ã‰crire le nom d&apos;un objet pour filtrer la liste ", Riot.RFMToolbar.Translator.strings["fr-FR"].gamedata_dropdown_prompt_summoner = "Ã‰crire le nom d&apos;un sort d&apos;invocateur pour filtrer la liste", Riot.RFMToolbar.Translator.strings["fr-FR"].formatting_button_tooltip_bold = "Gras", Riot.RFMToolbar.Translator.strings["fr-FR"].formatting_button_tooltip_italic = "Italique", Riot.RFMToolbar.Translator.strings["fr-FR"].formatting_button_tooltip_strikethrough = "BarrÃ©", Riot.RFMToolbar.Translator.strings["fr-FR"].url_button_tooltip = "InsÃ©rer un lien", Riot.RFMToolbar.Translator.strings["fr-FR"].url_button_prompt = "Veuillez insÃ©rer l&apos;URL de votre lien :", Riot.RFMToolbar.Translator.strings["fr-FR"].paragraph_button_tooltip_unordered = "Liste non ordonnÃ©e", Riot.RFMToolbar.Translator.strings["fr-FR"].paragraph_button_tooltip_ordered = "Liste ordonnÃ©e", Riot.RFMToolbar.Translator.strings["fr-FR"].paragraph_button_tooltip_blockquote = "Bloc de citation", Riot.RFMToolbar.Translator.strings["fr-FR"].formatting_guide_tooltip = "Guide de formatage", Riot.RFMToolbar.Translator.strings["fr-FR"].close_button = "Fermer"
}, function(n, e) {
    Riot.RFMToolbar.Translator.strings["hu-HU"] = {}, Riot.RFMToolbar.Translator.strings["hu-HU"].gamedata_button_tooltip_champion = "HÅ‘s ikonjÃ¡nak beszÃºrÃ¡sa", Riot.RFMToolbar.Translator.strings["hu-HU"].gamedata_button_tooltip_item = "TÃ¡rgy ikonjÃ¡nak beszÃºrÃ¡sa", Riot.RFMToolbar.Translator.strings["hu-HU"].gamedata_button_tooltip_summoner = "IdÃ©zÅ‘i varÃ¡zslat ikonjÃ¡nak beszÃºrÃ¡sa", Riot.RFMToolbar.Translator.strings["hu-HU"].gamedata_dropdown_prompt_champion = "Ãrd be a hÅ‘s nevÃ©t a lista szÅ±kÃ­tÃ©sÃ©hez", Riot.RFMToolbar.Translator.strings["hu-HU"].gamedata_dropdown_prompt_item = "Ãrd be a tÃ¡rgy nevÃ©t a lista szÅ±kÃ­tÃ©sÃ©hez", Riot.RFMToolbar.Translator.strings["hu-HU"].gamedata_dropdown_prompt_summoner = "Ãrd be az idÃ©zÅ‘i varÃ¡zslatok nevÃ©t a lista szÅ±kÃ­tÃ©sÃ©hez", Riot.RFMToolbar.Translator.strings["hu-HU"].formatting_button_tooltip_bold = "FÃ©lkÃ¶vÃ©r", Riot.RFMToolbar.Translator.strings["hu-HU"].formatting_button_tooltip_italic = "DÅ‘lt", Riot.RFMToolbar.Translator.strings["hu-HU"].formatting_button_tooltip_strikethrough = "ÃthÃºzott", Riot.RFMToolbar.Translator.strings["hu-HU"].url_button_tooltip = "Link beillesztÃ©se", Riot.RFMToolbar.Translator.strings["hu-HU"].url_button_prompt = "KÃ©rjÃ¼k, add meg a linket:", Riot.RFMToolbar.Translator.strings["hu-HU"].paragraph_button_tooltip_unordered = "Rendezetlen lista", Riot.RFMToolbar.Translator.strings["hu-HU"].paragraph_button_tooltip_ordered = "Rendezett lista", Riot.RFMToolbar.Translator.strings["hu-HU"].paragraph_button_tooltip_blockquote = "IdÃ©zet", Riot.RFMToolbar.Translator.strings["hu-HU"].formatting_guide_tooltip = "FormÃ¡zÃ¡si segÃ©dlet", Riot.RFMToolbar.Translator.strings["hu-HU"].close_button = "BezÃ¡rÃ¡s"
}, function(n, e) {
    Riot.RFMToolbar.Translator.strings["it-IT"] = {}, Riot.RFMToolbar.Translator.strings["it-IT"].gamedata_button_tooltip_champion = "Inserisci l'icona di un Campione", Riot.RFMToolbar.Translator.strings["it-IT"].gamedata_button_tooltip_item = "Inserisci l'icona di un oggetto", Riot.RFMToolbar.Translator.strings["it-IT"].gamedata_button_tooltip_summoner = "Inserisci l'icona di un incantesimo dell'evocatore", Riot.RFMToolbar.Translator.strings["it-IT"].gamedata_dropdown_prompt_champion = "Digita il nome di un Campione per filtrare l'elenco", Riot.RFMToolbar.Translator.strings["it-IT"].gamedata_dropdown_prompt_item = "Digita il nome di un oggetto per filtrare l'elenco", Riot.RFMToolbar.Translator.strings["it-IT"].gamedata_dropdown_prompt_summoner = "Digita il nome dell'incantesimo evocatore per filtrare l'elenco", Riot.RFMToolbar.Translator.strings["it-IT"].formatting_button_tooltip_bold = "Grassetto", Riot.RFMToolbar.Translator.strings["it-IT"].formatting_button_tooltip_italic = "Corsivo", Riot.RFMToolbar.Translator.strings["it-IT"].formatting_button_tooltip_strikethrough = "Carattere barrato", Riot.RFMToolbar.Translator.strings["it-IT"].url_button_tooltip = "Inserisci un link", Riot.RFMToolbar.Translator.strings["it-IT"].url_button_prompt = "Inserisci l'URL del tuo link:", Riot.RFMToolbar.Translator.strings["it-IT"].paragraph_button_tooltip_unordered = "Elenco non ordinato", Riot.RFMToolbar.Translator.strings["it-IT"].paragraph_button_tooltip_ordered = "Ordina elenco", Riot.RFMToolbar.Translator.strings["it-IT"].paragraph_button_tooltip_blockquote = "Citazione", Riot.RFMToolbar.Translator.strings["it-IT"].formatting_guide_tooltip = "Guida alla formattazione", Riot.RFMToolbar.Translator.strings["it-IT"].close_button = "Chiudi"
}, function(n, e) {
    Riot.RFMToolbar.Translator.strings["ja-JP"] = {}, Riot.RFMToolbar.Translator.strings["ja-JP"].gamedata_button_tooltip_champion = "ãƒãƒ£ãƒ³ãƒ”ã‚ªãƒ³ã®ã‚¢ã‚¤ã‚³ãƒ³ã‚’æŒ¿å…¥", Riot.RFMToolbar.Translator.strings["ja-JP"].gamedata_button_tooltip_item = "ã‚¢ã‚¤ãƒ†ãƒ ã®ã‚¢ã‚¤ã‚³ãƒ³ã‚’æŒ¿å…¥", Riot.RFMToolbar.Translator.strings["ja-JP"].gamedata_button_tooltip_summoner = "ã‚µãƒ¢ãƒŠãƒ¼ãƒ»ã‚¹ãƒšãƒ«ã®ã‚¢ã‚¤ã‚³ãƒ³ã‚’æŒ¿å…¥", Riot.RFMToolbar.Translator.strings["ja-JP"].gamedata_dropdown_prompt_champion = "ãƒãƒ£ãƒ³ãƒ”ã‚ªãƒ³ã®åå‰ã‚’å…¥åŠ›ã—ã¦ãƒªã‚¹ãƒˆã‚’çµžã‚Šè¾¼ã‚€", Riot.RFMToolbar.Translator.strings["ja-JP"].gamedata_dropdown_prompt_item = "ã‚¢ã‚¤ãƒ†ãƒ ã®åå‰ã‚’å…¥åŠ›ã—ã¦ãƒªã‚¹ãƒˆã‚’çµžã‚Šè¾¼ã‚€", Riot.RFMToolbar.Translator.strings["ja-JP"].gamedata_dropdown_prompt_summoner = "ã‚µãƒ¢ãƒŠãƒ¼ãƒ»ã‚¹ãƒšãƒ«ã®åå‰ã‚’å…¥åŠ›ã—ã¦ãƒªã‚¹ãƒˆã‚’çµžã‚Šè¾¼ã‚€", Riot.RFMToolbar.Translator.strings["ja-JP"].formatting_button_tooltip_bold = "å¤ªå­—", Riot.RFMToolbar.Translator.strings["ja-JP"].formatting_button_tooltip_italic = "ã‚¤ã‚¿ãƒªãƒƒã‚¯", Riot.RFMToolbar.Translator.strings["ja-JP"].formatting_button_tooltip_strikethrough = "å–ã‚Šæ¶ˆã—ç·š", Riot.RFMToolbar.Translator.strings["ja-JP"].url_button_tooltip = "ãƒªãƒ³ã‚¯ã‚’æŒ¿å…¥", Riot.RFMToolbar.Translator.strings["ja-JP"].url_button_prompt = "ãƒªãƒ³ã‚¯ã®URLã‚’å…¥åŠ›ã—ã¦ãã ã•ã„:", Riot.RFMToolbar.Translator.strings["ja-JP"].paragraph_button_tooltip_unordered = "ç•ªå·ãªã—ãƒªã‚¹ãƒˆ", Riot.RFMToolbar.Translator.strings["ja-JP"].paragraph_button_tooltip_ordered = "ç•ªå·ä»˜ããƒªã‚¹ãƒˆ", Riot.RFMToolbar.Translator.strings["ja-JP"].paragraph_button_tooltip_blockquote = "å¼•ç”¨ã‚¿ã‚°", Riot.RFMToolbar.Translator.strings["ja-JP"].formatting_guide_tooltip = "ãƒ•ã‚©ãƒ¼ãƒžãƒƒãƒˆã®ã‚¬ã‚¤ãƒ‰", Riot.RFMToolbar.Translator.strings["ja-JP"].close_button = "é–‰ã˜ã‚‹"
}, function(n, e) {
    Riot.RFMToolbar.Translator.strings["pl-PL"] = {}, Riot.RFMToolbar.Translator.strings["pl-PL"].gamedata_button_tooltip_champion = "Wstaw ikonÄ™ bohatera", Riot.RFMToolbar.Translator.strings["pl-PL"].gamedata_button_tooltip_item = "Wstaw ikonÄ™ przedmiotu", Riot.RFMToolbar.Translator.strings["pl-PL"].gamedata_button_tooltip_summoner = "Wstaw ikonÄ™ Czaru PrzywoÅ‚ywacza", Riot.RFMToolbar.Translator.strings["pl-PL"].gamedata_dropdown_prompt_champion = "Wpisz nazwy bohaterÃ³w, by uszczupliÄ‡ listÄ™. ", Riot.RFMToolbar.Translator.strings["pl-PL"].gamedata_dropdown_prompt_item = "Wpisz nazwy przedmiotÃ³w, by uszczupliÄ‡ listÄ™. ", Riot.RFMToolbar.Translator.strings["pl-PL"].gamedata_dropdown_prompt_summoner = "Wpisz nazwy czarÃ³w przywoÅ‚ywacza, by uszczupliÄ‡ listÄ™.", Riot.RFMToolbar.Translator.strings["pl-PL"].formatting_button_tooltip_bold = "Pogrubienie", Riot.RFMToolbar.Translator.strings["pl-PL"].formatting_button_tooltip_italic = "Kursywa", Riot.RFMToolbar.Translator.strings["pl-PL"].formatting_button_tooltip_strikethrough = "PrzekreÅ›lenie", Riot.RFMToolbar.Translator.strings["pl-PL"].url_button_tooltip = "WprowadÅº link", Riot.RFMToolbar.Translator.strings["pl-PL"].url_button_prompt = "Podaj URL swojego linku: ", Riot.RFMToolbar.Translator.strings["pl-PL"].paragraph_button_tooltip_unordered = "Lista nienumerowana", Riot.RFMToolbar.Translator.strings["pl-PL"].paragraph_button_tooltip_ordered = "Lista numerowana", Riot.RFMToolbar.Translator.strings["pl-PL"].paragraph_button_tooltip_blockquote = "Cytat", Riot.RFMToolbar.Translator.strings["pl-PL"].formatting_guide_tooltip = "Przewodnik Formatowania", Riot.RFMToolbar.Translator.strings["pl-PL"].close_button = "Zamknij"
}, function(n, e) {
    Riot.RFMToolbar.Translator.strings["pt-BR"] = {}, Riot.RFMToolbar.Translator.strings["pt-BR"].gamedata_button_tooltip_champion = "Inserir um Ã­cone de campeÃ£o", Riot.RFMToolbar.Translator.strings["pt-BR"].gamedata_button_tooltip_item = "Inserir um Ã­cone de item", Riot.RFMToolbar.Translator.strings["pt-BR"].gamedata_button_tooltip_summoner = "Inserir um Ã­cone de feitiÃ§o de invocador", Riot.RFMToolbar.Translator.strings["pt-BR"].gamedata_dropdown_prompt_champion = "Digite nomes de campeÃµes para filtrar a lista", Riot.RFMToolbar.Translator.strings["pt-BR"].gamedata_dropdown_prompt_item = "Digite nomes de itens para filtrar a lista", Riot.RFMToolbar.Translator.strings["pt-BR"].gamedata_dropdown_prompt_summoner = "Digite nomes de feitiÃ§os de invocador para filtrar a lista", Riot.RFMToolbar.Translator.strings["pt-BR"].formatting_button_tooltip_bold = "Negrito", Riot.RFMToolbar.Translator.strings["pt-BR"].formatting_button_tooltip_italic = "ItÃ¡lico", Riot.RFMToolbar.Translator.strings["pt-BR"].formatting_button_tooltip_strikethrough = "Tachado", Riot.RFMToolbar.Translator.strings["pt-BR"].url_button_tooltip = "Inserir um link", Riot.RFMToolbar.Translator.strings["pt-BR"].url_button_prompt = "Favor inserir a URL de seu link:", Riot.RFMToolbar.Translator.strings["pt-BR"].paragraph_button_tooltip_unordered = "Lista nÃ£o-ordenada", Riot.RFMToolbar.Translator.strings["pt-BR"].paragraph_button_tooltip_ordered = "Lista ordenada", Riot.RFMToolbar.Translator.strings["pt-BR"].paragraph_button_tooltip_blockquote = "Bloco de citaÃ§Ã£o", Riot.RFMToolbar.Translator.strings["pt-BR"].formatting_guide_tooltip = "Guia de formataÃ§Ã£o", Riot.RFMToolbar.Translator.strings["pt-BR"].close_button = "Fechar"
}, function(n, e) {
    Riot.RFMToolbar.Translator.strings["ro-RO"] = {}, Riot.RFMToolbar.Translator.strings["ro-RO"].gamedata_button_tooltip_champion = "InsereazÄƒ o iconiÈ›Äƒ de campion", Riot.RFMToolbar.Translator.strings["ro-RO"].gamedata_button_tooltip_item = "InsereazÄƒ o iconiÈ›Äƒ de obiect ", Riot.RFMToolbar.Translator.strings["ro-RO"].gamedata_button_tooltip_summoner = "InsereazÄƒ o iconiÈ›Äƒ a unei vrÄƒji de invocator ", Riot.RFMToolbar.Translator.strings["ro-RO"].gamedata_dropdown_prompt_champion = "TasteazÄƒ numele unui campion pentru a filtra lista", Riot.RFMToolbar.Translator.strings["ro-RO"].gamedata_dropdown_prompt_item = "TasteazÄƒ numele unui obiect pentru a filtra lista", Riot.RFMToolbar.Translator.strings["ro-RO"].gamedata_dropdown_prompt_summoner = "TasteazÄƒ numele unei vrÄƒji de invocator pentru a filtra lista", Riot.RFMToolbar.Translator.strings["ro-RO"].formatting_button_tooltip_bold = "Bold", Riot.RFMToolbar.Translator.strings["ro-RO"].formatting_button_tooltip_italic = "Italic", Riot.RFMToolbar.Translator.strings["ro-RO"].formatting_button_tooltip_strikethrough = "Taie", Riot.RFMToolbar.Translator.strings["ro-RO"].url_button_tooltip = "Introdu un link", Riot.RFMToolbar.Translator.strings["ro-RO"].url_button_prompt = "Te rugÄƒm sÄƒ introduci URL-ul:", Riot.RFMToolbar.Translator.strings["ro-RO"].paragraph_button_tooltip_unordered = "ListÄƒ neordonatÄƒ", Riot.RFMToolbar.Translator.strings["ro-RO"].paragraph_button_tooltip_ordered = "ListÄƒ ordonatÄƒ", Riot.RFMToolbar.Translator.strings["ro-RO"].paragraph_button_tooltip_blockquote = "CiteazÄƒ", Riot.RFMToolbar.Translator.strings["ro-RO"].formatting_guide_tooltip = "Ghid de formatare", Riot.RFMToolbar.Translator.strings["ro-RO"].close_button = "ÃŽnchide"
}, function(n, e) {
    Riot.RFMToolbar.Translator.strings["ru-RU"] = {}, Riot.RFMToolbar.Translator.strings["ru-RU"].gamedata_button_tooltip_champion = "Ð’ÑÑ‚Ð°Ð²Ð¸Ñ‚ÑŒ Ð¸ÐºÐ¾Ð½ÐºÑƒ Ñ‡ÐµÐ¼Ð¿Ð¸Ð¾Ð½Ð°", Riot.RFMToolbar.Translator.strings["ru-RU"].gamedata_button_tooltip_item = "Ð’ÑÑ‚Ð°Ð²Ð¸Ñ‚ÑŒ Ð¸ÐºÐ¾Ð½ÐºÑƒ Ð¿Ñ€ÐµÐ´Ð¼ÐµÑ‚Ð°", Riot.RFMToolbar.Translator.strings["ru-RU"].gamedata_button_tooltip_summoner = "Ð’ÑÑ‚Ð°Ð²Ð¸Ñ‚ÑŒ Ð¸ÐºÐ¾Ð½ÐºÑƒ Ð·Ð°ÐºÐ»Ð¸Ð½Ð°Ð½Ð¸Ñ Ð¿Ñ€Ð¸Ð·Ñ‹Ð²Ð°Ñ‚ÐµÐ»Ñ", Riot.RFMToolbar.Translator.strings["ru-RU"].gamedata_dropdown_prompt_champion = "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð¸Ð¼Ñ Ñ‡ÐµÐ¼Ð¿Ð¸Ð¾Ð½Ð°, Ð´Ð»Ñ Ñ„Ð¸Ð»ÑŒÑ‚Ñ€Ð° ÑÐ¿Ð¸ÑÐºÐ°", Riot.RFMToolbar.Translator.strings["ru-RU"].gamedata_dropdown_prompt_item = "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸Ðµ Ð¿Ñ€ÐµÐ´Ð¼ÐµÑ‚Ð°, Ð´Ð»Ñ Ñ„Ð¸Ð»ÑŒÑ‚Ñ€Ð° ÑÐ¿Ð¸ÑÐºÐ°", Riot.RFMToolbar.Translator.strings["ru-RU"].gamedata_dropdown_prompt_summoner = "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸Ðµ Ð·Ð°ÐºÐ»Ð¸Ð½Ð°Ð½Ð¸Ñ Ð¿Ñ€Ð¸Ð·Ñ‹Ð²Ð°Ñ‚ÐµÐ»Ñ, Ð´Ð»Ñ Ñ„Ð¸Ð»ÑŒÑ‚Ñ€Ð° ÑÐ¿Ð¸ÑÐºÐ°", Riot.RFMToolbar.Translator.strings["ru-RU"].formatting_button_tooltip_bold = "ÐŸÐ¾Ð»ÑƒÐ¶Ð¸Ñ€Ð½Ñ‹Ð¹", Riot.RFMToolbar.Translator.strings["ru-RU"].formatting_button_tooltip_italic = "ÐšÑƒÑ€ÑÐ¸Ð²", Riot.RFMToolbar.Translator.strings["ru-RU"].formatting_button_tooltip_strikethrough = "ÐŸÐµÑ€ÐµÑ‡ÐµÑ€ÐºÐ½ÑƒÑ‚Ñ‹Ð¹", Riot.RFMToolbar.Translator.strings["ru-RU"].url_button_tooltip = "Ð’ÑÑ‚Ð°Ð²Ð¸Ñ‚ÑŒ ÑÑÑ‹Ð»ÐºÑƒ", Riot.RFMToolbar.Translator.strings["ru-RU"].url_button_prompt = "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ URL ÑÐ²Ð¾ÐµÐ¹ ÑÑÑ‹Ð»ÐºÐ¸:", Riot.RFMToolbar.Translator.strings["ru-RU"].paragraph_button_tooltip_unordered = "ÐÐµÑƒÐ¿Ð¾Ñ€ÑÐ´Ð¾Ñ‡ÐµÐ½Ð½Ñ‹Ð¹ ÑÐ¿Ð¸ÑÐ¾Ðº", Riot.RFMToolbar.Translator.strings["ru-RU"].paragraph_button_tooltip_ordered = "Ð£Ð¿Ð¾Ñ€ÑÐ´Ð¾Ñ‡ÐµÐ½Ð½Ñ‹Ð¹ ÑÐ¿Ð¸ÑÐ¾Ðº", Riot.RFMToolbar.Translator.strings["ru-RU"].paragraph_button_tooltip_blockquote = "Ð¦Ð¸Ñ‚Ð°Ñ‚Ð°", Riot.RFMToolbar.Translator.strings["ru-RU"].formatting_guide_tooltip = "Ð¡Ð¿Ñ€Ð°Ð²Ð¾Ñ‡Ð½Ð¸Ðº Ð¿Ð¾ Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸ÑŽ", Riot.RFMToolbar.Translator.strings["ru-RU"].close_button = "Ð—Ð°ÐºÑ€Ñ‹Ñ‚ÑŒ"
}, function(n, e) {
    Riot.RFMToolbar.Translator.strings["tr-TR"] = {}, Riot.RFMToolbar.Translator.strings["tr-TR"].gamedata_button_tooltip_champion = "Åžampiyon Simgesi Ekle", Riot.RFMToolbar.Translator.strings["tr-TR"].gamedata_button_tooltip_item = "EÅŸya Simgesi Ekle", Riot.RFMToolbar.Translator.strings["tr-TR"].gamedata_button_tooltip_summoner = "Sihirdar BÃ¼yÃ¼sÃ¼ Simgesi Ekle", Riot.RFMToolbar.Translator.strings["tr-TR"].gamedata_dropdown_prompt_champion = "Listede bulmak iÃ§in ÅŸampiyon adÄ± yaz", Riot.RFMToolbar.Translator.strings["tr-TR"].gamedata_dropdown_prompt_item = "Listede bulmak iÃ§in eÅŸya adÄ± yaz", Riot.RFMToolbar.Translator.strings["tr-TR"].gamedata_dropdown_prompt_summoner = "Listede bulmak iÃ§in sihirdar bÃ¼yÃ¼sÃ¼ adÄ± yaz", Riot.RFMToolbar.Translator.strings["tr-TR"].formatting_button_tooltip_bold = "KalÄ±n", Riot.RFMToolbar.Translator.strings["tr-TR"].formatting_button_tooltip_italic = "Ä°talik", Riot.RFMToolbar.Translator.strings["tr-TR"].formatting_button_tooltip_strikethrough = "ÃœstÃ¼ Ã‡izili", Riot.RFMToolbar.Translator.strings["tr-TR"].url_button_tooltip = "BaÄŸlantÄ± Ekle", Riot.RFMToolbar.Translator.strings["tr-TR"].url_button_prompt = "VereceÄŸin baÄŸlantÄ±nÄ±n adresini gir:", Riot.RFMToolbar.Translator.strings["tr-TR"].paragraph_button_tooltip_unordered = "SÄ±rasÄ±z Liste", Riot.RFMToolbar.Translator.strings["tr-TR"].paragraph_button_tooltip_ordered = "SÄ±ralÄ± Liste", Riot.RFMToolbar.Translator.strings["tr-TR"].paragraph_button_tooltip_blockquote = "AlÄ±ntÄ±", Riot.RFMToolbar.Translator.strings["tr-TR"].formatting_guide_tooltip = "BiÃ§imlendirme Rehberi", Riot.RFMToolbar.Translator.strings["tr-TR"].close_button = "Kapat"
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(12)], r = function(n, e, t) {
        "use strict";
        var o = {
            events: {
                click: "clickHandler"
            },
            className: "",
            tooltip: "",
            render: function(e) {
                this.toolbar = e, this.textarea = n(this.toolbar.model.get("textarea")), this.$el.addClass("button " + this.className), this.$el.attr("title", this.tooltip), this.toolbar.addButtonEl(this.$el)
            }
        };
        return o
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(4)], r = function(n, e, t, o) {
        "use strict";
        var r = t.Model.extend({
            defaults: {
                toolbar: !1,
                markdown: "",
                type: ""
            }
        });
        return r
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(4)], r = function(n, e, t, o) {
        "use strict";
        var r = t.Model.extend({
            defaults: {
                textarea: !1,
                modal: !0,
                placement: !0,
                initButtons: !0,
                formattingGuide: !0,
                callback: null
            }
        });
        return r
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(4), t(12), t(165), t(25), t(26), t(169), t(170)], r = function(n, e, t, o, r, i, a, s, E, _) {
        "use strict";
        var l = t.View.extend({
            initialize: function() {
                var n = this.model.get("type");
                this.className = "formatting " + n, this.tooltip = a.string("formatting_button_tooltip_" + n)
            },
            clickHandler: function() {
                this.toolbar.restoreSelection();
                var n = this.textarea,
                    e = this.model.get("markdown"),
                    t = n.textrange(),
                    o = "";
                if (0 === t.length) o = e + e;
                else {
                    o = t.text;
                    var r = e.replace(/\*/g, "\\*"),
                        i = new RegExp(r + "(.+)" + r),
                        a = i.exec(o);
                    o = null === a ? e + o + e : a[1]
                }
                n.textrange("replace", o), 0 === t.length && n.textrange("setcursor", n.textrange().start + e.length), n.keyup()
            }
        });
        e.extend(l.prototype, i);
        var O = t.View.extend({
            initialize: function() {
                this.className = "url", this.tooltip = a.string("url_button_tooltip")
            },
            clickHandler: function() {
                var e = n("<div>" + a.string("url_button_prompt") + "</div>").text(),
                    t = window.prompt(e, "");
                if (this.toolbar.restoreSelection(), null !== t && "" !== t) {
                    var o = this.textarea,
                        r = o.textrange("get"),
                        i = "";
                    t.match(/^http[s]{0,1}:\/\//) || (t = "http://" + t), 0 === r.length ? (i = "[](" + t + ")", o.textrange("replace", i), o.textrange("setcursor", o.textrange().start + 1)) : (i = "[" + r.text + "](" + t + ")", o.textrange("replace", i), o.textrange("setcursor", o.textrange().end)), o.keyup()
                }
            }
        });
        e.extend(O.prototype, i);
        var u = t.View.extend({
            initialize: function() {
                var n = this.model.get("type");
                this.className = "paragraph " + n, this.tooltip = a.string("paragraph_button_tooltip_" + n)
            },
            clickHandler: function() {
                this.toolbar.restoreSelection();
                var n, e, t = this.textarea,
                    o = t.textrange(),
                    r = this.model.get("markdown"),
                    i = "",
                    a = r.replace(/\*/g, "\\*"),
                    s = new RegExp("^" + a);
                if (0 === o.length) {
                    var E = t[0].value;
                    e = E.split("\n");
                    var _ = 0,
                        l = !1;
                    for (n = 0; n < e.length; n++) {
                        var O = e[n];
                        if (o.start >= _ && o.start < _ + O.length + 1) {
                            l = n;
                            break
                        }
                        _ += O.length + 1
                    }
                    if (l === !1) return;
                    s.test(e[l]) ? e[l] = e[l].replace(s, "") : e[l] = r + e[l];
                    var u = e.join("\n");
                    t[0].value = u, t.textrange("setcursor", _ + e[l].length)
                } else {
                    i = o.text, e = i.split("\n");
                    var R = !0,
                        d = !1;
                    for (n = 0; n < e.length; n++) s.test(e[n]) || (R = !1, d = !0, e[n] = r + e[n]);
                    if (R)
                        for (n = 0; n < e.length; n++) e[n] = e[n].replace(s, "");
                    var N = e.join("\n"),
                        T = !1;
                    if (d && o.start > 0) {
                        var c = t[0].value[o.start - 1];
                        "\n" !== c && (N = "\n" + N, T = !0)
                    }
                    t.textrange("replace", N), T === !0 && (o = t.textrange(), t.textrange("set", o.start + 1, o.end))
                }
                t.keyup()
            }
        });
        e.extend(u.prototype, i);
        var R = t.View.extend({
            initialize: function() {
                var n = "ordered";
                this.className = "paragraph " + n, this.tooltip = a.string("paragraph_button_tooltip_" + n)
            },
            clickHandler: function() {
                this.toolbar.restoreSelection();
                var n, e = this.textarea,
                    t = e.textrange(),
                    o = "",
                    r = e[0].value,
                    i = r.split("\n"),
                    a = i.length,
                    s = 0,
                    E = !1;
                for (n = 0; a > n; n++) {
                    var _ = i[n];
                    if (t.start >= s && t.start < s + _.length + 1) {
                        E = n;
                        break
                    }
                    s += _.length + 1
                }
                if (E !== !1) {
                    var l = new RegExp("^([0-9]+)\\.\\s+");
                    if (0 === t.length) {
                        if (l.test(i[E])) i[E] = i[E].replace(l, "");
                        else {
                            var O = "";
                            if (0 === E) O = "1. ";
                            else {
                                var u = E - 1,
                                    R = l.exec(i[u]);
                                if (R) {
                                    var d = parseInt(R[1], 10) + 1;
                                    O = d + ". "
                                } else O = "1. "
                            }
                            i[E] = O + i[E]
                        }
                        var N = i.join("\n");
                        e[0].value = N, e.textrange("setcursor", s + i[E].length)
                    } else {
                        o = t.text, i = o.split("\n"), a = i.length;
                        var T, c = !0,
                            A = !0,
                            S = !1;
                        for (n = 0; a > n; n++) l.test(i[n]) ? A = !1 : c = !1;
                        if (c)
                            for (n = 0; a > n; n++) i[n] = i[n].replace(l, "");
                        else if (A) {
                            for (T = 1, n = 0; n < i.length; n++) i[n] = T + ". " + i[n], T++;
                            S = !0
                        } else {
                            for (T = 1, n = 0; n < i.length; n++) i[n] = i[n].replace(l, ""), i[n] = T + ". " + i[n], T++;
                            S = !0
                        }
                        var m = i.join("\n"),
                            p = !1;
                        if (S && t.start > 0) {
                            var I = e[0].value[t.start - 1];
                            "\n" !== I && (m = "\n" + m, p = !0)
                        }
                        e.textrange("replace", m), p === !0 && (t = e.textrange(), e.textrange("set", t.start + 1, t.end))
                    }
                    e.keyup()
                }
            }
        });
        e.extend(R.prototype, i);
        var d = t.View.extend({
            initialize: function() {
                var n = this.model.get("type");
                this.className = "gamedata " + n, this.tooltip = a.string("gamedata_button_tooltip_" + n), this.dropdown = E(n)
            },
            clickHandler: function() {
                this.dropdown.show(this)
            },
            insertTextAtCursor: function(n) {
                this.toolbar.restoreSelection();
                var e = this.textarea;
                e.textrange("replace", n), e.textrange("setcursor", e.textrange().end), e.keyup()
            }
        });
        e.extend(d.prototype, i);
        var N = t.View.extend({
            initialize: function() {
                var n = this.model.get("type");
                this.className = "sticker " + n, this.tooltip = a.string("gamedata_button_tooltip_" + n), this.dropdown = _(n)
            },
            clickHandler: function() {
                this.dropdown.show(this)
            },
            insertTextAtCursor: function(n) {
                this.toolbar.restoreSelection();
                var e = this.textarea;
                e.textrange("replace", n), e.textrange("setcursor", e.textrange().end), e.keyup()
            }
        });
        return e.extend(N.prototype, i), {
            FormattingButton: l,
            URLButton: O,
            ParagraphButton: u,
            OrderedListButton: R,
            GameDataButton: d,
            StickerButton: N
        }
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(4), t(12), t(25), t(26), t(14)], r = function(n, e, t, o, r, i, a, s) {
        "use strict";
        var E = t.View.extend({
                modal: !1,
                keyMap: {
                    champion: {
                        key: "key",
                        name: "name"
                    },
                    item: {
                        key: "id",
                        name: "name"
                    },
                    summoner: {
                        key: "key",
                        name: "name"
                    }
                },
                sortKey: {
                    key: "name"
                },
                visible: !1,
                events: {
                    "modal:hide": "hide"
                },
                initialize: function() {
                    e.bindAll(this, "render", "renderPart2", "show", "hide", "enterHandler", "objSelected", "queryUpdated", "redraw"), this.divId = "DropDown-" + this.model.get("type")
                },
                render: function() {
                    if (0 === n("#" + this.divId).length) {
                        var e = r["app/apollo_widgets/toolbar/templates/dropdown.html"]({
                            divId: this.divId,
                            placeholder: i.string("gamedata_dropdown_prompt_" + this.model.get("type"))
                        });
                        n(document.body).append(e)
                    }
                    this.$el = n("#" + this.divId), this.el = this.$el[0];
                    var t = this,
                        o = this.model.get("type"),
                        a = this.keyMap;
                    Riot.DDragon.addApp([o], function() {
                        Riot.DDragon.addDisplay({
                            type: o + "_game_object",
                            success: function(n) {
                                var e = Riot.DDragon.useModel(o).getImg(n.id, {
                                    wrap: 3
                                });
                                return '<div class="gameobj" data-obj-key="' + n[a[o].key] + '">' + e + "</div>"
                            }
                        }), Riot.DDragon.addDisplay({
                            type: o + "_dd_container",
                            success: function(n) {
                                var e = "";
                                return e += Riot.DDragon.displayList.call(this, o + "_game_object", n)
                            }
                        }), t.renderPart2()
                    })
                },
                renderPart2: function() {
                    var e = this.model.get("type");
                    this.outputArea = Riot.DDragon.buildController(e, e + "_dd_container", "container_#" + this.divId + "-ObjBox"), this.outputArea.show();
                    var t = this;
                    Riot.DDragon.fn.watch("#" + this.divId + "-query", "value", function(n, e, o) {
                        t.queryUpdated(n, e, o)
                    }), n("#" + this.divId + "-query").on("keyup", function(n) {
                        13 === n.keyCode && (n.stopPropagation(), t.enterHandler())
                    })
                },
                redraw: function(e) {
                    e ? this.outputArea.redraw("collect", e, this.sortKey) : this.outputArea.redraw("collect", this.sortKey);
                    var t = this;
                    n("#" + this.divId + " div.gameobj").on("click", function(n) {
                        n.stopPropagation(), t.objSelected(this.getAttribute("data-obj-key"))
                    })
                },
                queryUpdated: function(n, e, t) {
                    -1 === e.indexOf(t) && this.outputArea.model.deleteCollect(), this.redraw("searchKey:" + e)
                },
                enterHandler: function() {
                    var n = this.$el.find(".gameobj");
                    1 === n.length && this.objSelected(n[0].getAttribute("data-obj-key"))
                },
                objSelected: function(n) {
                    var e = "{{" + this.model.get("type") + ":" + n + "}} ";
                    this.button.insertTextAtCursor(e), s.hideModal(this.$el)
                },
                show: function(e) {
                    this.button = e, this.visible = !0, n("#" + this.divId + "-query").val(""), this.outputArea.model.deleteCollect(), this.redraw();
                    var t = this.button.$el.offset(),
                        o = n("body"),
                        r = o.css("margin-top");
                    t.top -= parseInt(r, 10);
                    var i = o.css("margin-left");
                    t.left -= parseInt(i, 10), t.top += this.button.$el.outerHeight(), t.left -= 1, this.$el.css(t), s.showModal(this.$el, !0), n("#" + this.divId + "-query").focus()
                },
                hide: function() {
                    this.visible = !1
                }
            }),
            _ = {};
        return function(n) {
            if (_.hasOwnProperty(n)) return _[n];
            var e = new a({
                    type: n
                }),
                t = new E({
                    model: e
                });
            return _[n] = t, t.render(), t
        }
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(4), t(12), t(25), t(26), t(14)], r = function(n, e, t, o, r, i, a, s) {
        "use strict";
        var E = t.View.extend({
                modal: !1,
                stickerUrls: {
                    slayer: ["slayer-jinx-catface", "slayer-jinx-unamused", "slayer-jinx-wink", "slayer-pantheon-popcorn", "slayer-pantheon-rainbows", "slayer-pantheon-thumbs", "zombie-brand-clap", "zombie-brand-facepalm", "zombie-brand-mindblown", "zombie-nunu-bummed", "zombie-nunu-hearts", "zombie-nunu-tears", "cass-cry", "darius-angry", "draven-pose", "fiora-cool", "galio-happy", "garen-swing", "katarina-love", "leblanc-funny", "poppy-wink", "sona-playing", "vayne-pose", "vlad-salute", "sg-ahri-1", "sg-ahri-2", "sg-ahri-3", "sg-ezreal", "sg-janna", "sg-jinx", "sg-kiko", "sg-lulu", "sg-lux", "sg-lux-2", "sg-miss-fortune", "sg-poppy", "sg-shisa", "sg-soraka", "sg-syndra", "sg-zephyr"]
                },
                visible: !1,
                events: {
                    "modal:hide": "hide"
                },
                initialize: function() {
                    e.bindAll(this, "render", "show", "hide"), this.divId = "DropDown-" + this.model.get("type")
                },
                render: function() {
                    if (0 === n("#" + this.divId).length) {
                        var e = r["app/apollo_widgets/toolbar/templates/sticker-dropdown.html"]({
                            divId: this.divId,
                            placeholder: i.string("gamedata_dropdown_prompt_" + this.model.get("type"))
                        });
                        n(document.body).append(e)
                    }
                    for (var t = n("#" + this.divId).find("div.frame"), o = "https://cdn.leagueoflegends.com/stickers/", a = this.stickerUrls[this.model.get("type")] ? this.stickerUrls[this.model.get("type")] : [], s = 0; s < a.length; s++) {
                        var E = n('<span class="sticker"></span>');
                        "sg" !== a[s].substring(0, 2) ? E.css("background-image", "url(" + o + "slayer140/" + a[s] + ".png)") : E.css("background-image", "url(" + o + "starguardian140/" + a[s] + ".png)"), E.attr("data-key", a[s]), t.append(E)
                    }
                    this.$el = n("#" + this.divId), this.el = this.$el[0];
                    var _ = this;
                    t.find("span.sticker").on("click", function() {
                        var e = n(this).attr("data-key");
                        _.objSelected(e)
                    })
                },
                objSelected: function(n) {
                    var e = "{{sticker:" + n + "}} ";
                    this.button.insertTextAtCursor(e), s.hideModal(this.$el)
                },
                show: function(e) {
                    this.button = e, this.visible = !0, n("#" + this.divId + "-query").val("");
                    var t = this.button.$el.offset(),
                        o = n("body"),
                        r = o.css("margin-top");
                    t.top -= parseInt(r, 10);
                    var i = o.css("margin-left");
                    t.left -= parseInt(i, 10), t.top += this.button.$el.outerHeight(), t.left -= 1, this.$el.css(t), s.showModal(this.$el, !0), n("#" + this.divId + "-query").focus()
                },
                hide: function() {
                    this.visible = !1
                }
            }),
            _ = {};
        return function(n) {
            if (_.hasOwnProperty(n)) return _[n];
            var e = new a({
                    type: n
                }),
                t = new E({
                    model: e
                });
            return _[n] = t, t.render(), t
        }
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(4), t(12), t(166), t(168)], r = function(n, e, t, o, r, i, a) {
        "use strict";
        var s = t.View.extend({
            template: r["app/apollo_widgets/toolbar/templates/toolbar.html"],
            textRange: !1,
            render: function() {
                var e = this,
                    t = n(this.model.get("textarea"));
                t.on("beforedeactivate", function(n) {
                    e.storeSelection()
                }), this.$el.html(this.template()), this.$el.addClass("rfmtoolbar"), this.buttonsEl = this.$el.find("div.buttons"), this.model.get("initButtons") && this.initButtons();
                var o = t.parent();
                o.hasClass("expandingText") ? o.before(this.$el) : t.before(this.$el), this.textarea = t
            },
            initButtons: function() {
                for (var n = null, e = null, t = [{
                        type: "bold",
                        markdown: "**"
                    }, {
                        type: "italic",
                        markdown: "_"
                    }, {
                        type: "strikethrough",
                        markdown: "~~"
                    }], o = 0; o < t.length; o++) n = new i(t[o]), e = new a.FormattingButton({
                    model: n
                }), e.render(this);
                n = new i, e = new a.URLButton({
                    model: n
                }), e.render(this);
                var r = [{
                    type: "blockquote",
                    markdown: "> "
                }, {
                    type: "unordered",
                    markdown: "* "
                }];
                for (o = 0; o < r.length; o++) n = new i(r[o]), e = new a.ParagraphButton({
                    model: n
                }), e.render(this);
                if (n = new i, e = new a.OrderedListButton({
                        model: n
                    }), e.render(this), window.Riot.hasOwnProperty("DDragon") && window.Riot.DDragon.hasOwnProperty("addApp")) {
                    var s = ["champion", "summoner", "item"];
                    for (o = 0; o < s.length; o++) n = new i({
                        type: s[o]
                    }), e = new a.GameDataButton({
                        model: n
                    }), e.render(this)
                }
                n = new i({
                    type: "slayer"
                }), e = new a.StickerButton({
                    model: n
                }), e.render(this)
            },
            addButtonEl: function(n) {
                this.buttonsEl.append(n)
            },
            storeSelection: function() {
                document.selection && (this.textRange = document.selection.createRange())
            },
            restoreSelection: function() {
                this.textRange !== !1 && this.textRange.select(), this.textRange = !1
            }
        });
        return s
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r, i;
    ! function(a) {
        r = [t(1)], o = a, i = "function" == typeof o ? o.apply(e, r) : o, !(void 0 !== i && (n.exports = i))
    }(function(n) {
        var e, t = {
                get: function(n) {
                    return o[e].get.apply(this, [n])
                },
                set: function(n, t) {
                    var r, i = parseInt(n),
                        a = parseInt(t);
                    return "undefined" == typeof n ? i = 0 : 0 > n && (i = this[0].value.length + i), "undefined" != typeof t && (r = t >= 0 ? i + a : this[0].value.length + a), o[e].set.apply(this, [i, r]), this
                },
                setcursor: function(n) {
                    return this.textrange("set", n, 0)
                },
                replace: function(n) {
                    return o[e].replace.apply(this, [String(n)]), this
                },
                insert: function(n) {
                    return this.textrange("replace", n)
                }
            },
            o = {
                xul: {
                    get: function(n) {
                        var e = {
                            position: this[0].selectionStart,
                            start: this[0].selectionStart,
                            end: this[0].selectionEnd,
                            length: this[0].selectionEnd - this[0].selectionStart,
                            text: this.val().substring(this[0].selectionStart, this[0].selectionEnd)
                        };
                        return "undefined" == typeof n ? e : e[n]
                    },
                    set: function(n, e) {
                        "undefined" == typeof e && (e = this[0].value.length), this[0].selectionStart = n, this[0].selectionEnd = e
                    },
                    replace: function(n) {
                        var e = this[0].selectionStart,
                            t = this[0].selectionEnd,
                            o = this.val();
                        this.val(o.substring(0, e) + n + o.substring(t, o.length)), this[0].selectionStart = e, this[0].selectionEnd = e + n.length
                    }
                },
                msie: {
                    get: function(n) {
                        var e = document.selection.createRange();
                        if ("undefined" == typeof e) {
                            var t = {
                                position: 0,
                                start: 0,
                                end: this.val().length,
                                length: this.val().length,
                                text: this.val()
                            };
                            return "undefined" == typeof n ? t : t[n]
                        }
                        var o = 0,
                            r = 0,
                            i = this[0].value.length,
                            a = this[0].value.replace(/\r\n/g, "\n"),
                            s = this[0].createTextRange(),
                            E = this[0].createTextRange();
                        s.moveToBookmark(e.getBookmark()), E.collapse(!1), -1 === s.compareEndPoints("StartToEnd", E) ? (o = -s.moveStart("character", -i), o += a.slice(0, o).split("\n").length - 1, -1 === s.compareEndPoints("EndToEnd", E) ? (r = -s.moveEnd("character", -i), r += a.slice(0, r).split("\n").length - 1) : r = i) : (o = i, r = i);
                        var t = {
                            position: o,
                            start: o,
                            end: r,
                            length: i,
                            text: e.text
                        };
                        return "undefined" == typeof n ? t : t[n]
                    },
                    set: function(n, e) {
                        var t = this[0].createTextRange();
                        if ("undefined" != typeof t) {
                            "undefined" == typeof e && (e = this[0].value.length);
                            var o = n - (this[0].value.slice(0, n).split("\r\n").length - 1),
                                r = e - (this[0].value.slice(0, e).split("\r\n").length - 1);
                            t.collapse(!0), t.moveEnd("character", r), t.moveStart("character", o), t.select()
                        }
                    },
                    replace: function(n) {
                        document.selection.createRange().text = n
                    }
                }
            };
        n.fn.textrange = function(o) {
            return "undefined" == typeof this[0] ? this : ("undefined" == typeof e && (e = "selectionStart" in this[0] ? "xul" : document.selection ? "msie" : "unknown"), "unknown" === e ? this : (document.activeElement !== this[0] && this[0].focus(), "undefined" == typeof o || "string" != typeof o ? t.get.apply(this) : "function" == typeof t[o] ? t[o].apply(this, Array.prototype.slice.call(arguments, 1)) : void n.error("Method " + o + " does not exist in jQuery.textrange")))
        }
    })
}, function(n, e, t) {
    var o, r;
    Array.prototype.forEach || (Array.prototype.forEach = function(n, e) {
        "use strict";
        var t, o;
        for (t = 0, o = this.length; o > t; ++t) t in this && n.call(e, this[t], t, this)
    }), o = [], r = function() {
        return function(n, e, t) {
            function o(n) {
                var e, t, o = I.exec(n);
                return o ? (e = o.index, t = o[0].length, n.substring(0, e) + n.substring(e + t)) : n
            }

            function r(n) {
                var e = "";
                return n.reverse().forEach(function(n, t) {
                    -1 === R.indexOf(n) && (e += "</" + n + ">")
                }), e
            }

            function i(n) {
                var e = n.indexOf(" ");
                if (-1 === e && (e = n.indexOf(">"), -1 === e)) throw new Error("HTML tag is not well-formed : " + n);
                return n.substring(1, e)
            }
            var a, s, E, _, l = {},
                O = "",
                u = "...",
                R = ["img"],
                d = [],
                N = 0,
                T = O,
                c = '(\\w+\\s*=\\s*"[^"]*"\\s*)*',
                A = "\\s*\\/?\\s*",
                S = "\\s*\\/\\s*",
                m = new RegExp("<\\/?\\w+\\s*" + c + S + ">"),
                p = new RegExp("<\\/?\\w+\\s*" + c + A + ">"),
                I = new RegExp("<img\\s*" + c + A + ">"),
                h = !0;
            for (t = t || l, t.ellipsis = t.ellipsis || u, t.truncateLastWord = void 0 === t.truncateLastWord ? !0 : t.truncateLastWord; h;) {
                if (h = p.exec(n), !h) {
                    e > N && (T += n.substring(0, e - N));
                    break
                }
                if (a = h[0], s = h.index, N + s > e) {
                    T += n.substring(0, e - N);
                    break
                }
                N += s, T += n.substring(0, s), "/" === a[1] ? d.pop() : (_ = m.exec(a), _ || (E = i(a), d.push(E))), T += _ ? _[0] : a, n = n.substring(s + a.length)
            }
            return n.length > e && t.ellipsis && (t.truncateLastWord ? T += t.ellipsis : T = T.replace(/ \w*$/, t.ellipsis)), T += r(d), t.keepImageTag || (T = o(T)), T
        }
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(68)], r = function(n) {
        "use strict";
        var e = {
            loadBoardInfo: function(e) {
                var t = null,
                    o = this.get("boardJson");
                o && o.application ? (t = new n(o.application), this.loadBoardDone(t, e)) : (t = new n({
                    id: this.get("boardId")
                }), t.fetch({
                    success: _.bind(function() {
                        this.loadBoardDone(t, e)
                    }, this)
                }))
            },
            loadBoardDone: function(n, e) {
                this.set("board", n), e.call()
            }
        };
        return e
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(8)], r = function(n) {
        "use strict";
        var e = {
            loadUserInfo: function(e) {
                n.isAuthenticated() ? n.fetch({
                    success: _.bind(function() {
                        e.call()
                    }, this)
                }) : e.call()
            }
        };
        return e
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(4), t(30), t(15), t(71), t(184), t(173)], r = function(n, e, t, o, r, i, a, s, E) {
        "use strict";
        var _ = (new i.Store("apollo:markdownContent"), new r),
            l = t.View.extend({
                render: function() {
                    var n = this;
                    this.renderMarkdown();
                    var e = this.model.get("oembed");
                    this.renderOembedLinksFilter(e, function() {
                        return n.renderUnsafeLinksFilter(n.$el), n.model.get("reveal") && n.$el.show(), this
                    })
                },
                renderMarkdown: function() {
                    this.model.get("isRioter") ? _.setOptions({
                        riotRioterFlavoredMarkdown: !0
                    }) : _.setOptions({
                        riotRioterFlavoredMarkdown: !1
                    });
                    var e = _.parse(this.$el.text());
                    if (this.model.get("strip")) {
                        var t = n("<div>");
                        t.html(e), e = t.text()
                    }
                    return this.model.get("truncate") && (e = E(e, this.model.get("truncate"))), this.$el.html(e), this
                },
                renderOembed: function() {
                    return this
                }
            });
        return e.extend(l.prototype, a), e.extend(l.prototype, s), l
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(5), t(7), t(9), t(188), t(187), t(185), t(14), t(125), t(186)], r = function(n, e, t, o, r, i, a, s, E, _, l, O) {
        "use strict";
        var u = t.View.extend({
            AddButtonTemplate: l["app/apollo_widgets/user_select/templates/add_button.html"],
            AddUserFormTemplate: l["app/apollo_widgets/user_select/templates/add_user_form.html"],
            NotFoundTemplate: l["app/apollo_widgets/user_select/templates/not_found.html"],
            defaults: {
                keyupWait: 300,
                userType: "PLAYER",
                closeOnSelect: !0,
                clearOnSelect: !1
            },
            tagName: "div",
            className: "riot-user-select",
            keyupTimeout: null,
            events: {
                "click button.add-user": "openAddUserDialogue"
            },
            initialize: function(n) {
                this.collection = new E, e.bindAll(this, "render"), this.collection.on("sync", this.render, this), this.listenTo(t, "users:selected", this.userSelected), this.options = e.extend(this.defaults, n), this.options = e.extend(this.options, o.services.userSelect)
            },
            userSelected: function(t) {
                this.options.closeOnSelect && !e.isEmpty(this.modal) && _.hideModal(this.modal), this.options.clearOnSelect && this.clearAll(), n("#userSelectDebugList").length > 0 && n("#userSelectDebugList").append("<li>" + t.get("name") + "</li>")
            },
            openAddUserDialogue: function(e) {
                var t = this;
                if (this.haltFutureEventProcessing(e), this.modal = n("body #apollo-user-search-modal"), 0 === this.modal.length) {
                    var o = {
                        userType: this.options.userType,
                        realms: this.options.realms,
                        defaultRealm: this.options.defaultRealm
                    };
                    o = this.translate(o);
                    var r = n(this.AddUserFormTemplate(o));
                    n("body").append(r), r.find("button.cancel").on("click", function() {
                        t.cancelPressed()
                    }), r.find(".searchText").on("keyup", function() {
                        t.searchTextKeyup()
                    }), r.find(".realm").on("change", function() {
                        t.searchTextKeyup()
                    }), this.modal = r
                }
                _.showModal(this.modal)
            },
            searchTextKeyup: function(n) {
                if (clearTimeout(this.keyupTimeout), this.searchTextInput().val().length < 3) return !1;
                var e = this;
                this.keyupTimeout = setTimeout(function() {
                    e.triggerUserSearch()
                }, this.options.keyupWait)
            },
            triggerUserSearch: function() {
                console.log("this.modal.find('#realm').val()", this.modal.find("#realm").val()), this.collection.set("realm", this.modal.find("#realm").val()), this.collection.fetch({
                    query: this.searchTextInput().val()
                })
            },
            cancelPressed: function() {
                this.clearAll(), _.hideModal(this.modal)
            },
            render: function() {
                return this.renderAddModalButton(), this.modal && this.renderUsers(), this
            },
            renderAddModalButton: function() {
                var n = this.translate({
                        userType: this.options.userType
                    }),
                    e = this.AddButtonTemplate(n);
                return this.setCurrentElementMarkup(e), this
            },
            renderSearchForm: function() {
                var n = this.translate({
                    userType: this.options.userType
                });
                this.AddButtonTemplate(n);
                return this
            },
            renderUsers: function() {
                this.userList().hide(), this.userList().empty();
                var n = this.modal.find(".searchText"),
                    t = n.position(),
                    o = n.outerHeight() + 5;
                return this.userList().css({
                    top: t.top + o + "px",
                    left: t.left + "px"
                }), this.collection.models.length > 0 ? e.each(this.collection.models, this.renderUser, this) : this.renderNotFound(), this.userList().show(), this
            },
            renderUser: function(n) {
                var e = new a({
                    model: n
                });
                return e.targetList = this.userList(), e.render(), this
            },
            renderNotFound: function() {
                return this.userList().append(this.NotFoundTemplate(this.translate({}))), this
            },
            userList: function() {
                return this.userListDiv = this.userListDiv || this.modal.find(".user-list"), this.userListDiv
            },
            searchTextInput: function() {
                return this.searchTextInputField = this.searchTextInputField || this.modal.find(".searchText"), this.searchTextInputField
            },
            clearAll: function() {
                this.searchTextInput().val(""), this.modal.find(".user-list").empty()
            }
        });
        return e.extend(u.prototype, O), u
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    __WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return this.JST = this.JST || {}, this.JST["app/apollo_widgets/pinned_boards/templates/board_pin.html"] = function(obj) {
            obj || (obj = {});
            var __t, __p = "";
            _.escape;
            with(obj) __p += '<li><a href="' + (null == (__t = url) ? "" : __t) + '" class="safe">' + (null == (__t = applicationName) ? "" : __t) + "</a></li>";
            return __p
        }, this.JST["app/apollo_widgets/pinned_boards/templates/pinned_boards.html"] = function(obj) {
            obj || (obj = {});
            var __t, __p = "";
            _.escape;
            with(obj) __p += '<nav class="apollo-board-navigation">\n  <p>' + (null == (__t = i18n.strings.BOARDS) ? "" : __t) + '</p>\n  <ul class="pinned-board-list" />\n</div>\n';
            return __p
        }, this.JST
    }.call(exports, __webpack_require__, exports, module), !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3)], r = function(n, e, t) {
        "use strict";
        var o = t.Model.extend({
            defaults: {
                id: "",
                locale: "",
                subject: "",
                body: "",
                createdAt: "",
                publishedAt: "",
                publishedAtStamp: "",
                expiresAt: "",
                isRead: !1,
                isActive: !1,
                isSelected: !1,
                fromName: "",
                fromRegion: "",
                fromAvatar: "",
                fromGroup: ""
            }
        });
        return o
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(213), t(214), t(73), t(7)], r = function(n, e, t, o, r, i, a) {
        "use strict";
        var s = t.View.extend({
            template: i["app/apollo_widgets/player_messaging/templates/inbox_view.html"],
            isModal: !1,
            modalMask: !1,
            modalEl: !1,
            isMobile: !1,
            bodyOverflowYVisible: !1,
            events: {
                "click a.close-link": "closeModal",
                "click .messaging-header h1": "respondToHeaderClick",
                "touchstart .viewport": "respondToTouch"
            },
            initialize: function(t) {
                e.bindAll(this, "closeModal", "resizeMask", "checkMobile", "handleResize"), this.checkMobile(), t && t.isModal && (this.isModal = t.isModal), this.inboxlistview = new o({
                    collection: this.collection
                }), this.readingview = new r({
                    collection: this.collection
                }), this.listenTo(this.collection, "inboxStatusUpdate", this.heardInboxStatusChanged), this.listenTo(this.collection, "change:isActive", this.heardActiveMessageChanged), n(window).on("resize", this.handleResize)
            },
            heardInboxStatusChanged: function() {
                var n = this.collection.status.unreadCount;
                this.$el.find(".fn-player-messages-unread").html(n), 0 === this.collection.status.unreadCount ? this.$el.find(".unread-label").addClass("hidden") : this.$el.find(".unread-label").removeClass("hidden"), window.hasOwnProperty("RiotBar") && window.RiotBar.hasOwnProperty("notifications") && window.RiotBar.notifications.updateUnreadCount(n)
            },
            heardActiveMessageChanged: function(n) {
                this.checkMobile(), this.isMobile && n.get("isActive") && this.mobileShowMessages()
            },
            respondToHeaderClick: function(n) {
                this.checkMobile(), this.isMobile && this.$el.hasClass("mobile-message-visible") && this.mobileShowInbox()
            },
            render: function() {
                var n = {
                        i18n: {
                            strings: a.getCurrentCultureMessages()
                        },
                        isModal: this.isModal
                    },
                    t = this;
                return this.collection.fetch({
                    headers: {
                        "Content-Type": "application/json",
                        "X-PVPNET": t.collection.authtoken
                    },
                    success: function(o, r) {
                        var i = t.collection.length > 6,
                            a = e.template(t.template(e.merge(n, {
                                totalUnread: t.collection.status.unreadCount,
                                scrollVisible: i
                            })));
                        t.$el.html(a), t.renderChildren(), !t.isMobile && "undefined" != typeof t.collection.models && "[object Array]" === Object.prototype.toString.call(t.collection.models) && t.collection.models.length > 0 && t.collection.models[0].set("isActive", !0), t.collection.trigger("inboxStatusUpdate")
                    },
                    error: function(n, e, t, o) {}
                }), this
            },
            renderChildren: function() {
                this.inboxlistview.setElement(this.$el.find(".message-list")), this.inboxlistview.render(), this.readingview.setElement(this.$el.find(".reading-pane")), this.readingview.render(), this.isModal && this.showModal()
            },
            handleResize: function() {
                this.modalEl && "block" === this.modalEl.css("display") && this.showModal()
            },
            showModal: function() {
                this.checkMobile(), this.modalEl === !1 && (this.$el.hasClass("modal") ? this.modalEl = this.$el : this.modalEl = this.$el.closest(".modal")), this.modalMask || (this.modalMask = n('<div id="player-messaging-mask"></div>'), n("body").append(this.modalMask), this.modalMask.click(this.closeModal), n(window).resize(this.resizeMask)), this.resizeMask(), this.modalMask.show(), this.modalEl.show();
                var e = n(window).width(),
                    t = this.modalEl.width(),
                    o = Math.floor(e / 2 - t / 2);
                o >= 0 && this.modalEl.css("left", o + "px"), this.isModal && ("visible" === n(document.body).css("overflow-y") && (this.bodyOverflowYVisible = !0), this.preventPageScrolling())
            },
            resizeMask: function() {
                this.modalMask.css("height", n(window).height() + "px"), this.modalMask.css("width", n(window).width() + "px")
            },
            respondToTouch: function(n) {
                this.preventPageScrolling()
            },
            preventPageScrolling: function(e) {
                var t = n(document.body);
                t.css("overflow-y", "hidden")
            },
            closeModal: function() {
                this.modalMask.hide(), this.modalEl.hide();
                var e = n(document.body);
                this.bodyOverflowYVisible && e.css("overflow-y", "visible")
            },
            checkMobile: function() {
                var n = window.innerWidth;
                500 > n ? this.isMobile = !0 : this.isMobile = !1
            },
            mobileShowMessages: function() {
                var n = this.$el.find(".reading-pane");
                n.css("right", "0px"), this.$el.addClass("mobile-message-visible")
            },
            mobileShowInbox: function() {
                var n = this.$el.find(".reading-pane");
                n.css("right", "-500px"), this.$el.removeClass("mobile-message-visible");
                var e = this.collection.findWhere({
                    isActive: !0
                });
                e && e.set("isActive", !1)
            }
        });
        return s
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(216)], r = function(n, e, t, o) {
        "use strict";
        var r = t.Collection.extend({
            model: o
        });
        return r
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    __WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return this.JST = this.JST || {}, this.JST["app/apollo_widgets/polls/templates/create.html"] = function(obj) {
            obj || (obj = {});
            var __p = "",
                __e = _.escape;
            Array.prototype.join;
            with(obj) __p += "<div>\n  <div class='riot-athena-create-question'>\n    <label>" + __e(i18n.QUESTION_PROMPT) + "<br/>\n      <textarea maxlength='250'></textarea>\n    </label>\n  </div>\n  <div class='riot-athena-create-choices'>\n    <label>" + __e(i18n.CHOICES_PROMPT) + '</label>\n    <ol>\n      <li><input maxlength="30" type="text"> ' + __e(i18n.REQUIRED) + '</li>\n      <li><input maxlength="30" type="text"> ' + __e(i18n.REQUIRED) + '</li>\n    </ol>\n    <a href="javascript:;" class="athena-choice-add">+ ' + __e(i18n.ADD_CHOICE) + "</a>\n  </div>\n  <!--\n  <div class='riot-athena-create-expiration'>\n    <label>" + __e(i18n.EXPIRATION_DATE_PROMPT) + '<br/>\n      <input type="text" class="datepicker">\n    </label>\n  </div>\n  -->\n  ', embedded || (__p += '\n    <button class="btn select athena-create-poll">\n      <span>' + __e(i18n.CREATE_BUTTON) + "</span>\n    </button>\n  "), __p += "\n</div>\n";
            return __p
        }, this.JST["app/apollo_widgets/polls/templates/selectionCreate.html"] = function(obj) {
            obj || (obj = {});
            var __p = "",
                __e = _.escape;
            Array.prototype.join;
            with(obj) multiselect = selectionLimit > 1, __p += "\n<header class='create'>\n  <h1>" + __e(subject) + "</h1>\n</header>\n<div class='riot-athena-body create'>\n  <hr/>\n  ", multiselect && (__p += "\n    <h4>Choose " + __e(selectionLimit) + "</h4>\n  "), __p += "\n  <ol class='riot-athena-choice-collection'>\n    ", _.chain(choices).sortBy(sortBy).each(function(n) {
                __p += "\n      <li\n        class='riot-athena-choice'\n        data-choice-id='" + __e(n.id) + "'\n      >\n        <input\n          type=\"" + __e(multiselect ? "checkbox" : "radio") + '"\n          ' + __e(n.selected ? "checked" : "") + "\n          " + __e(authenticated ? "" : "disabled") + '\n          value="' + __e(n.id) + '"\n          id="riot-athena-choice-' + __e(n.id) + '"\n        >\n        ' + __e(n.content) + "\n      </li>\n    "
            }), __p += '\n  </ol>\n  <hr/>\n  <button\n    class="btn select riot-athena-submit\n    ' + __e(authenticated ? "" : " disabled ") + '\n    "\n  >\n    <span>\n      ' + __e(i18n.VOTE_BUTTON) + "\n    </span>\n  </button>\n</div>\n";
            return __p
        }, this.JST["app/apollo_widgets/polls/templates/selectionResult.html"] = function(obj) {
            obj || (obj = {});
            var __p = "",
                __e = _.escape;
            Array.prototype.join;
            with(obj) multiselect = selectionLimit > 1, __p += "\n", totalCount = 0, __p += "\n<header class='result'>\n  <h1 class='riot-athena-subject'>" + __e(subject) + "</h1>\n</header>\n<div class='riot-athena-body result'>\n  <hr/>\n  <table class='riot-athena-result-collection'>\n    ", _.chain(choices).sortBy(sortBy).each(function(n) {
                __p += "\n      <tr\n        class='riot-athena-choice " + __e(1 == n.selected ? "selected" : "") + "'\n        data-choice-id='" + __e(n.id) + "'\n      >\n        <td class='riot-athena-choice-selection-indicator'>\n          <input\n            type=\"" + __e(multiselect ? "checkbox" : "radio") + '"\n            ' + __e(n.selected ? "checked" : "") + '\n            disabled\n            value="' + __e(n.id) + '"\n            id="riot-athena-choice-' + __e(n.id) + '"\n          />\n        </td>\n        <td class="riot-athena-choice-label">' + __e(n.content) + "</td>\n        <td class='full riot-athena-choice-bar-container'><span class='riot-athena-bar' style='width: " + __e(n.selectionCount / barGraphMax * 100) + "%'/></td>\n        <td class='full riot-athena-choice-selection-count'>\n          " + __e(n.selectionCount) + "\n          ", totalCount += n.selectionCount, __p += "\n        </td>\n        <td class='full riot-athena-choice-selection-count-label'>\n          " + __e(n.selectionCount <= 0 ? i18n.VOTES_ZERO : "") + "\n          " + __e(1 == n.selectionCount ? i18n.VOTE_SINGULAR : "") + "\n          " + __e(2 == n.selectionCount ? i18n.VOTES_TWO : "") + "\n          " + __e(3 == n.selectionCount ? i18n.VOTES_THREE : "") + "\n          " + __e(4 == n.selectionCount ? i18n.VOTES_FOUR : "") + "\n          " + __e(n.selectionCount >= 5 ? i18n.VOTES_FIVE_OR_MORE : "") + "\n        </td>\n      </tr>\n    "
            }), __p += "\n    <tr class='riot-athena-total'>\n      <td colspan='3'></td>\n      <td class='riot-athena-choice-selection-count'>\n        " + __e(totalCount) + "\n      </td>\n      <td class='riot-athena-choice-selection-count-label'>\n        " + __e(i18n.TOTAL) + "\n      </td>\n    </tr>\n  </table>\n  <hr/>\n</div>\n";
            return __p
        }, this.JST
    }.call(exports, __webpack_require__, exports, module), !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
}, function(n, e, t) {
    var o, r;
    o = [t(3), t(2), t(15)], r = function(n, e, t) {
        "use strict";
        var o = n.Collection.extend({
            model: n.View,
            startedFetchAt: 0,
            isFetching: !1,
            defaults: {
                cacheTimeout: 1,
                storeKey: "apollo",
                fetchTimeout: 1
            },
            initialize: function(n) {
                this.setupCache(n)
            },
            setupCache: function(n) {
                this._mergeOptions(n), this._setupBurry(), this._configureEvents()
            },
            fetch: function(t) {
                if (!this.isFetching || this._isFetchTimedOut()) {
                    var o = this.cache.get(this.cacheKey());
                    if (e.isUndefined(o)) return this.isFetching = !0, this.startedFetchAt = this._mEpoch(), n.Collection.prototype.fetch.call(this, t);
                    this._loadCollectionFromCache(), this.trigger("sync")
                }
            },
            cacheKey: function() {
                return this.options.cacheKey
            },
            hasModel: function(n) {
                var t = {};
                return t[n.idAttribute] = n.get(n.idAttribute), !e.isEmpty(this.findWhere(t))
            },
            _mergeOptions: function(n) {
                this.options = e.merge(this.defaults, n)
            },
            _setupBurry: function() {
                this.cache = new t.Store(this.options.storeKey + ":" + this.cacheKey(), this.options.cacheTimeout)
            },
            _configureEvents: function() {
                this.listenTo(this, "add create remove reset sync", this._cacheCollection), this.listenTo(this, "sync", this._fetchComplete)
            },
            _fetchComplete: function() {
                this.startedFetchAt = 0, this.isFetching = !1
            },
            _isFetchTimedOut: function() {
                return this._mEpoch() - this.startedFetchAt > this.options.fetchTimeout
            },
            _cacheCollection: function() {
                this.models.length > 0 ? this.cache.set(this.cacheKey(), this.toJSON()) : this.cache.remove(this.cacheKey())
            },
            _loadCollectionFromCache: function() {
                var n = this,
                    t = [],
                    o = this.cache.get(this.cacheKey());
                e.isEmpty(o) || (e.each(o, function(e) {
                    t.push(new n.model(e))
                }), this.reset(t))
            },
            _mEpoch: function() {
                return Math.floor((new Date).getTime() / 6e4)
            }
        });
        return o
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(189), t(2), t(5), t(192), t(6), t(7), t(28), t(14)], r = function(n, e, t, o, r, i, a, s, E) {
        "use strict";
        var _ = n("body #apollo-oembed-link-modal");
        if (0 === _.length) {
            var l = a.getCurrentCultureMessages(),
                O = s["app/apollo_common/templates/oembed_link_modal.html"]({
                    i18n: {
                        strings: l
                    }
                });
            _ = n(O), n("body").append(_), _.on("modal:hidden", function() {
                _.find(".content").html("")
            }), n("#apollo-oembed-content-modal a.hide-modal").on("click", function() {
                E.hideModal(_)
            })
        }
        var u = new r(o.services.commentProxy.uri),
            R = u.authority() + u.directory() + "/embedly",
            d = {
                renderOembedLinksFilter: function(e, t) {
                    return t = t || function() {}, "inline" !== e && "modal" !== e ? (t(), this) : (n.embedly.defaults = {
                        key: n("#embedly_key").val() ? n("#embedly_key").val() : "",
                        query: {
                            maxwidth: 425,
                            image_width: 425
                        },
                        oembedApiUrl: R,
                        imageApiUrl: "https://media.lolusercontent.com/api/embedly",
                        secure: !0
                    }, this.$el.embedly({
                        key: n("#embedly_key").val() ? n("#embedly_key").val() : "",
                        query: {
                            maxwidth: 425,
                            image_width: 425
                        },
                        oembedApiUrl: R,
                        imageApiUrl: "https://media.lolusercontent.com/api/embedly",
                        secure: !0,
                        display: function(t) {
                            if (!t.original_url || !t.provider_name || !t.type) return !0;
                            var o = null;
                            if ("photo" === t.type) {
                                var i = new r(t.url);
                                i.setQuery({
                                    height: "800",
                                    width: "425"
                                });
                                var a = n('<img class="oembed">');
                                a.addClass(t.provider_name.toLowerCase()), a.attr("src", i), o = a
                            } else if ("rich" === t.type || "video" === t.type) o = t.html;
                            else {
                                if ("link" !== t.type || "Imgur" !== t.provider_name) return;
                                var s = t.thumbnail_url ? t.thumbnail_url : t.url,
                                    i = new r(s);
                                i.setQuery({
                                    height: "425"
                                });
                                var a = n('<img class="oembed">');
                                a.addClass(t.provider_name.toLowerCase()), a.attr("src", i), o = a
                            }
                            if ("modal" === e) {
                                n(this).addClass("safe"), n(this).off("click"), n(this).on("click", function(e) {
                                    e.preventDefault();
                                    var r = n("#apollo-oembed-content-modal");
                                    n(r).find("h2").html(t.title), n(r).find(".content").append(o), n(r).find(".provider-name").html(t.provider_name), n(r).find("a.offsite-link-url").attr({
                                        href: t.original_url
                                    }), n(r).find("span.unsafe-link-url").html(t.original_url), E.showModal(r)
                                });
                                var _ = t.thumbnail_url ? t.thumbnail_url : t.url,
                                    _ = new r(_);
                                _.setQuery({
                                    width: "150"
                                });
                                var l = n('<img class="oembed">');
                                l.addClass(t.provider_name.toLowerCase()), l.attr("src", _), n(this).html(l)
                            }
                            "inline" === e && n(this).html(o)
                        },
                        done: function() {
                            t()
                        }
                    }), t(), this)
                }
            };
        return d
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(3), t(2), t(9), t(10)], r = function(n, e, t, o) {
        "use strict";
        var r = n.Collection.extend({
            defaults: {
                realm: "na",
                pageSize: 5
            },
            initialize: function(n) {
                if (n && n.searchResults) {
                    var o = this;
                    e.each(n.searchResults, function(n) {
                        o.models.push(new t(n.user))
                    })
                }
                this.model = t
            },
            urlRoot: function() {
                return "/users/" + this.get("realm")
            },
            url: function() {
                return this.urlRoot() + "/search"
            },
            sync: function(n, o, r) {
                switch (n) {
                    case "read":
                        var i = {
                            query: r.query,
                            page_size: 5
                        };
                        this.httpGet(o.url(), i, function(n) {
                            o.models = [], e.each(n.searchResults, function(n) {
                                o.models.push(new t(n.user))
                            }), r.success(o, n, r)
                        })
                }
            },
            parse: function(n) {
                var e;
                return e = n.users
            },
            set: function(n, e) {
                this._attributes[n] = e, this.trigger("change:" + n, e)
            },
            get: function(n) {
                return this._attributes[n]
            },
            has: function(n) {
                return e.isUndefined(this._attributes[n]) ? !1 : !0
            }
        });
        return e.extend(r.prototype, o), e.extend(r.prototype, {
            _attributes: {}
        }), e.extend(r.prototype._attributes, r.prototype.defaults), r
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, 129, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(7), t(125)], r = function(n, e, t, o, r) {
        "use strict";
        var i = t.View.extend({
            Template: r["app/apollo_widgets/user_select/templates/not_found.html"],
            render: function() {
                var e = n(this.Template(this.translate({})));
                return this.targetList.append(e), this
            }
        });
        return i
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(9), t(125)], r = function(n, e, t, o, r) {
        "use strict";
        var i = t.View.extend({
            UserTemplate: r["app/apollo_widgets/user_select/templates/user.html"],
            userSelect: function() {
                t.trigger("users:selected", this.model)
            },
            render: function() {
                var t = this.model.toJSON();
                e.extend(t, {
                    avatarUrl: this.model.getAvatar()
                });
                var o = n(this.UserTemplate(t)),
                    r = this;
                return o.on("click", function() {
                    r.userSelect()
                }), this.targetList.append(o), this
            }
        });
        return i
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e) {
    /*! Embedly jQuery - v3.1.1 - 2013-07-22
     * https://github.com/embedly/embedly-jquery
     * Copyright (c) 2013 Sean Creeley
     * Licensed BSD
     */
    ! function(n) {
        var e = {
                key: null,
                endpoint: "oembed",
                secure: !0,
                query: {},
                method: "replace",
                addImageStyles: !0,
                wrapElement: "div",
                className: "embed",
                batch: 20,
                urlRe: null,
                oembedApiUrl: "api.embed.ly",
                imageApiUrl: "i.embed.ly"
            },
            t = {},
            o = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
            r = function(n) {
                return null === n || void 0 === n
            },
            i = function(e, t) {
                var o = [],
                    r = [];
                return n.each(e, function(n, e) {
                    r.push(e), r.length === t && (o.push(r), r = [])
                }), 0 !== r.length && o.push(r), o
            },
            a = function(e) {
                return r(e) ? [] : n.isArray(e) ? e : [e]
            },
            s = function(e) {
                return n.map(e[0], function(t, o) {
                    return [n.map(e, function(n) {
                        return n[o]
                    })]
                })
            },
            E = function(n, e, t) {
                this.init(n, e, t)
            };
        E.prototype = {
            init: function(e) {
                this.urls = e, this.count = 0, this.results = {}, this._deferred = n.Deferred()
            },
            notify: function(e) {
                if (this.results[e.original_url] = e, this.count++, this._deferred.notify.apply(this._deferred, [e]), this.count === this.urls.length) {
                    var t = this,
                        o = n.map(this.urls, function(n) {
                            return t.results[n]
                        });
                    this._deferred.resolve(o)
                }
                return this
            },
            state: function() {
                return this._deferred.state.apply(this._deferred, arguments)
            }
        }, window.Keeper = E;
        var _ = function() {};
        _.prototype = {
            defaults: {},
            log: function(n, e) {
                r(window.console) || r(window.console[n]) || window.console[n].apply(window.console, [e])
            },
            build: function(t, o, i) {
                i = n.extend({}, e, n.embedly.defaults, "object" == typeof i && i);
                var a = i.secure;
                r(a) && (a = "https:" === window.location.protocol ? !0 : !1);
                var s = (a ? "https" : "http") + "://" + i.oembedApiUrl + "/" + ("objectify" === t ? "2/" : "1/") + t,
                    E = r(i.query) ? {} : i.query;
                return E.key = i.key, s += "?" + n.param(E), s += "&urls=" + n.map(o, encodeURIComponent).join(",")
            },
            ajax: function(_, l, O) {
                if (O = n.extend({}, e, n.embedly.defaults, "object" == typeof O && O), r(O.key)) return this.log("error", "Embedly jQuery requires an API Key. Please sign up for one at http://embed.ly"), null;
                l = a(l);
                var u, R = new E(l),
                    d = [],
                    N = [];
                n.each(l, function(n, e) {
                    u = !1, o.test(e) && (u = !0, null !== O.urlRe && O.urlRe.test && !O.urlRe.test(e) && (u = !1)), u === !0 ? d.push(e) : N.push({
                        url: e,
                        original_url: e,
                        error: !0,
                        invalid: !0,
                        type: "error",
                        error_message: 'Invalid URL "' + e + '"'
                    })
                });
                var T = i(d, O.batch),
                    c = this;
                return n.each(T, function(e, o) {
                    for (var r = o[0].replace(/[^a-z]+/gi, ""); t.hasOwnProperty(r);) r += "a";
                    t[r] = !0, n.ajax({
                        url: c.build(_, o, O),
                        dataType: "jsonp",
                        jsonpCallback: r,
                        cache: !0,
                        success: function(e) {
                            n.each(s([o, e]), function(n, e) {
                                var t = e[1];
                                t.original_url = e[0], t.invalid = !1, R.notify(t)
                            })
                        }
                    })
                }), N.length && setTimeout(function() {
                    n.each(N, function(n, e) {
                        R.notify(e)
                    })
                }, 1), R._deferred
            },
            oembed: function(n, e) {
                return this.ajax("oembed", n, e)
            },
            preview: function(n, e) {
                return this.ajax("preview", n, e)
            },
            objectify: function(n, e) {
                return this.ajax("objectify", n, e)
            },
            extract: function(n, e) {
                return this.ajax("extract", n, e)
            }
        };
        var l = function() {};
        l.prototype = {
            build: function(t, o, i) {
                i = n.extend({}, e, n.embedly.defaults, "object" == typeof i && i);
                var a = i.secure;
                r(a) && (a = "https:" === window.location.protocol ? !0 : !1);
                var s = (a ? "https" : "http") + "://" + i.imageApiUrl + "/" + ("display" === t ? "1/" : "1/display/") + t,
                    E = r(i.query) ? {} : i.query;
                return E.key = i.key, s += "?" + n.param(E), s += "&url=" + encodeURIComponent(o)
            },
            display: function(n, e) {
                return this.build("display", n, e)
            },
            resize: function(n, e) {
                return this.build("resize", n, e)
            },
            fill: function(n, e) {
                return this.build("fill", n, e)
            },
            crop: function(n, e) {
                return this.build("crop", n, e)
            }
        };
        var O = function(n, e, t) {
            this.init(n, e, t)
        };
        O.prototype = {
            init: function(e, t, o) {
                this.elem = e, this.$elem = n(e), this.original_url = t, this.options = o, this.loaded = n.Deferred();
                var r = this;
                this.loaded.done(function() {
                    r.$elem.trigger("loaded", [r])
                }), this.$elem.trigger("initialized", [this])
            },
            progress: function(e) {
                n.extend(this, e), this.options.display ? this.options.display.apply(this.elem, [this, this.elem]) : "oembed" === this.options.endpoint && this.display(), this.loaded.resolve(this)
            },
            imageStyle: function() {
                var n, e = [];
                return this.options.addImageStyles && (this.options.query.maxwidth && (n = isNaN(parseInt(this.options.query.maxwidth, 10)) ? "" : "px", e.push("max-width: " + this.options.query.maxwidth + n)), this.options.query.maxheight && (n = isNaN(parseInt(this.options.query.maxheight, 10)) ? "" : "px", e.push("max-height: " + this.options.query.maxheight + n))), e.join(";")
            },
            display: function() {
                if ("error" === this.type) return !1;
                this.style = this.imageStyle();
                var n;
                "photo" === this.type ? (n = "<a href='" + this.original_url + "' target='_blank'>", n += "<img style='" + this.style + "' src='" + this.url + "' alt='" + this.title + "' /></a>") : "video" === this.type || "rich" === this.type ? n = this.html : (this.title = this.title || this.url, n = this.thumbnail_url ? "<img src='" + this.thumbnail_url + "' class='thumb' style='" + this.style + "'/>" : "", n += "<a href='" + this.original_url + "'>" + this.title + "</a>", n += this.provider_name ? "<a href='" + this.provider_url + "' class='provider'>" + this.provider_name + "</a>" : "", n += this.description ? '<div class="description">' + this.description + "</div>" : ""), this.options.wrapElement && (n = "<" + this.options.wrapElement + ' class="' + this.options.className + '">' + n + "</" + this.options.wrapElement + ">"), this.code = n, "replace" === this.options.method ? this.$elem.replaceWith(this.code) : "after" === this.options.method ? this.$elem.after(this.code) : "afterParent" === this.options.method ? this.$elem.parent().after(this.code) : "replaceParent" === this.options.method && this.$elem.parent().replaceWith(this.code), this.$elem.trigger("displayed", [this])
            }
        }, n.embedly = new _, n.embedly.display = new l, n.fn.embedly = function(t) {
            if (void 0 === t || "object" == typeof t) {
                if (t = n.extend({}, e, n.embedly.defaults, "object" == typeof t && t), r(t.key)) return n.embedly.log("error", "Embedly jQuery requires an API Key. Please sign up for one at http://embed.ly"), this.each(n.noop);
                var o = {},
                    i = function(e) {
                        if (!n.data(n(e), "embedly")) {
                            var r = n(e).attr("href"),
                                i = new O(e, r, t);
                            n.data(e, "embedly", i), o.hasOwnProperty(r) ? o[r].push(i) : o[r] = [i]
                        }
                    },
                    a = this.each(function() {
                        r(n(this).attr("href")) ? n(this).find("a").each(function() {
                            !r(n(this).attr("href")) && n(this).text().match(/^http/) && i(this)
                        }) : i(this)
                    }),
                    s = n.embedly.ajax(t.endpoint, n.map(o, function(n, e) {
                        return e
                    }), t).progress(function(e) {
                        n.each(o[e.original_url], function(n, t) {
                            t.progress(e)
                        })
                    });
                return t.progress && s.progress(t.progress), t.done && s.done(t.done), a
            }
        }, n.expr[":"].embedly = function(e) {
            return !r(n(e).data("embedly"))
        }, n.fn.display = function(t, o) {
            if (r(t) && (t = "display"), void 0 === o || "object" == typeof o) {
                if (o = n.extend({}, e, n.embedly.defaults, "object" == typeof o && o), r(o.key)) return n.embedly.log("error", "Embedly jQuery requires an API Key. Please sign up for one at http://embed.ly/display"), this.each(n.noop);
                var i = function(e) {
                        var r = n(e);
                        if (!r.data("display")) {
                            var i = r.data("src") || r.attr("href"),
                                a = {
                                    original_url: i,
                                    url: n.embedly.display.build(t, i, o)
                                };
                            r.data("display", a), r.trigger("initialized", [e]);
                            var s = "<img src='" + a.url + "' />";
                            r.is("a") ? r.append(s) : r.replaceWith(s)
                        }
                    },
                    a = function(e) {
                        return r(n(e).data("src")) && r(n(e).attr("href")) ? !1 : !0
                    },
                    s = this.each(function() {
                        a(this) ? i(this) : n(this).find("img,a").each(function() {
                            a(this) && i(this)
                        })
                    });
                return s
            }
        }, n.expr[":"].display = function(e) {
            return !r(n(e).data("display"))
        }
    }(jQuery, window)
}, function(n, e, t) {
    /*!
     * URI.js - Mutating URLs
     * IPv6 Support
     *
     * Version: 1.13.2
     *
     * Author: Rodney Rehm
     * Web: http://medialize.github.io/URI.js/
     *
     * Licensed under
     *   MIT License http://www.opensource.org/licenses/mit-license
     *   GPL v3 http://opensource.org/licenses/GPL-3.0
     *
     */
    ! function(e, t) {
        "use strict";
        n.exports = t()
    }(this, function(n) {
        "use strict";

        function e(n) {
            var e = n.toLowerCase(),
                t = e.split(":"),
                o = t.length,
                r = 8;
            "" === t[0] && "" === t[1] && "" === t[2] ? (t.shift(), t.shift()) : "" === t[0] && "" === t[1] ? t.shift() : "" === t[o - 1] && "" === t[o - 2] && t.pop(), o = t.length, -1 !== t[o - 1].indexOf(".") && (r = 7);
            var i;
            for (i = 0; o > i && "" !== t[i]; i++);
            if (r > i) {
                for (t.splice(i, 1, "0000"); t.length < r;) t.splice(i, 0, "0000");
                o = t.length
            }
            for (var a, s = 0; r > s; s++) {
                a = t[s].split("");
                for (var E = 0; 3 > E && ("0" === a[0] && a.length > 1); E++) a.splice(0, 1);
                t[s] = a.join("")
            }
            var _ = -1,
                l = 0,
                O = 0,
                u = -1,
                R = !1;
            for (s = 0; r > s; s++) R ? "0" === t[s] ? O += 1 : (R = !1, O > l && (_ = u, l = O)) : "0" === t[s] && (R = !0, u = s, O = 1);
            O > l && (_ = u, l = O), l > 1 && t.splice(_, l, ""), o = t.length;
            var d = "";
            for ("" === t[0] && (d = ":"), s = 0; o > s && (d += t[s], s !== o - 1); s++) d += ":";
            return "" === t[o - 1] && (d += ":"), d
        }

        function t() {
            return n.IPv6 === this && (n.IPv6 = o), this
        }
        var o = n && n.IPv6;
        return {
            best: e,
            noConflict: t
        }
    })
}, function(n, e, t) {
    /*!
     * URI.js - Mutating URLs
     * Second Level Domain (SLD) Support
     *
     * Version: 1.13.2
     *
     * Author: Rodney Rehm
     * Web: http://medialize.github.io/URI.js/
     *
     * Licensed under
     *   MIT License http://www.opensource.org/licenses/mit-license
     *   GPL v3 http://opensource.org/licenses/GPL-3.0
     *
     */
    ! function(e, t) {
        "use strict";
        n.exports = t()
    }(this, function(n) {
        "use strict";
        var e = n && n.SecondLevelDomains,
            t = {
                list: {
                    ac: " com gov mil net org ",
                    ae: " ac co gov mil name net org pro sch ",
                    af: " com edu gov net org ",
                    al: " com edu gov mil net org ",
                    ao: " co ed gv it og pb ",
                    ar: " com edu gob gov int mil net org tur ",
                    at: " ac co gv or ",
                    au: " asn com csiro edu gov id net org ",
                    ba: " co com edu gov mil net org rs unbi unmo unsa untz unze ",
                    bb: " biz co com edu gov info net org store tv ",
                    bh: " biz cc com edu gov info net org ",
                    bn: " com edu gov net org ",
                    bo: " com edu gob gov int mil net org tv ",
                    br: " adm adv agr am arq art ato b bio blog bmd cim cng cnt com coop ecn edu eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus lel mat med mil mus net nom not ntr odo org ppg pro psc psi qsl rec slg srv tmp trd tur tv vet vlog wiki zlg ",
                    bs: " com edu gov net org ",
                    bz: " du et om ov rg ",
                    ca: " ab bc mb nb nf nl ns nt nu on pe qc sk yk ",
                    ck: " biz co edu gen gov info net org ",
                    cn: " ac ah bj com cq edu fj gd gov gs gx gz ha hb he hi hl hn jl js jx ln mil net nm nx org qh sc sd sh sn sx tj tw xj xz yn zj ",
                    co: " com edu gov mil net nom org ",
                    cr: " ac c co ed fi go or sa ",
                    cy: " ac biz com ekloges gov ltd name net org parliament press pro tm ",
                    "do": " art com edu gob gov mil net org sld web ",
                    dz: " art asso com edu gov net org pol ",
                    ec: " com edu fin gov info med mil net org pro ",
                    eg: " com edu eun gov mil name net org sci ",
                    er: " com edu gov ind mil net org rochest w ",
                    es: " com edu gob nom org ",
                    et: " biz com edu gov info name net org ",
                    fj: " ac biz com info mil name net org pro ",
                    fk: " ac co gov net nom org ",
                    fr: " asso com f gouv nom prd presse tm ",
                    gg: " co net org ",
                    gh: " com edu gov mil org ",
                    gn: " ac com gov net org ",
                    gr: " com edu gov mil net org ",
                    gt: " com edu gob ind mil net org ",
                    gu: " com edu gov net org ",
                    hk: " com edu gov idv net org ",
                    id: " ac co go mil net or sch web ",
                    il: " ac co gov idf k12 muni net org ",
                    "in": " ac co edu ernet firm gen gov i ind mil net nic org res ",
                    iq: " com edu gov i mil net org ",
                    ir: " ac co dnssec gov i id net org sch ",
                    it: " edu gov ",
                    je: " co net org ",
                    jo: " com edu gov mil name net org sch ",
                    jp: " ac ad co ed go gr lg ne or ",
                    ke: " ac co go info me mobi ne or sc ",
                    kh: " com edu gov mil net org per ",
                    ki: " biz com de edu gov info mob net org tel ",
                    km: " asso com coop edu gouv k medecin mil nom notaires pharmaciens presse tm veterinaire ",
                    kn: " edu gov net org ",
                    kr: " ac busan chungbuk chungnam co daegu daejeon es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam k kg mil ms ne or pe re sc seoul ulsan ",
                    kw: " com edu gov net org ",
                    ky: " com edu gov net org ",
                    kz: " com edu gov mil net org ",
                    lb: " com edu gov net org ",
                    lk: " assn com edu gov grp hotel int ltd net ngo org sch soc web ",
                    lr: " com edu gov net org ",
                    lv: " asn com conf edu gov id mil net org ",
                    ly: " com edu gov id med net org plc sch ",
                    ma: " ac co gov m net org press ",
                    mc: " asso tm ",
                    me: " ac co edu gov its net org priv ",
                    mg: " com edu gov mil nom org prd tm ",
                    mk: " com edu gov inf name net org pro ",
                    ml: " com edu gov net org presse ",
                    mn: " edu gov org ",
                    mo: " com edu gov net org ",
                    mt: " com edu gov net org ",
                    mv: " aero biz com coop edu gov info int mil museum name net org pro ",
                    mw: " ac co com coop edu gov int museum net org ",
                    mx: " com edu gob net org ",
                    my: " com edu gov mil name net org sch ",
                    nf: " arts com firm info net other per rec store web ",
                    ng: " biz com edu gov mil mobi name net org sch ",
                    ni: " ac co com edu gob mil net nom org ",
                    np: " com edu gov mil net org ",
                    nr: " biz com edu gov info net org ",
                    om: " ac biz co com edu gov med mil museum net org pro sch ",
                    pe: " com edu gob mil net nom org sld ",
                    ph: " com edu gov i mil net ngo org ",
                    pk: " biz com edu fam gob gok gon gop gos gov net org web ",
                    pl: " art bialystok biz com edu gda gdansk gorzow gov info katowice krakow lodz lublin mil net ngo olsztyn org poznan pwr radom slupsk szczecin torun warszawa waw wroc wroclaw zgora ",
                    pr: " ac biz com edu est gov info isla name net org pro prof ",
                    ps: " com edu gov net org plo sec ",
                    pw: " belau co ed go ne or ",
                    ro: " arts com firm info nom nt org rec store tm www ",
                    rs: " ac co edu gov in org ",
                    sb: " com edu gov net org ",
                    sc: " com edu gov net org ",
                    sh: " co com edu gov net nom org ",
                    sl: " com edu gov net org ",
                    st: " co com consulado edu embaixada gov mil net org principe saotome store ",
                    sv: " com edu gob org red ",
                    sz: " ac co org ",
                    tr: " av bbs bel biz com dr edu gen gov info k12 name net org pol tel tsk tv web ",
                    tt: " aero biz cat co com coop edu gov info int jobs mil mobi museum name net org pro tel travel ",
                    tw: " club com ebiz edu game gov idv mil net org ",
                    mu: " ac co com gov net or org ",
                    mz: " ac co edu gov org ",
                    na: " co com ",
                    nz: " ac co cri geek gen govt health iwi maori mil net org parliament school ",
                    pa: " abo ac com edu gob ing med net nom org sld ",
                    pt: " com edu gov int net nome org publ ",
                    py: " com edu gov mil net org ",
                    qa: " com edu gov mil net org ",
                    re: " asso com nom ",
                    ru: " ac adygeya altai amur arkhangelsk astrakhan bashkiria belgorod bir bryansk buryatia cbg chel chelyabinsk chita chukotka chuvashia com dagestan e-burg edu gov grozny int irkutsk ivanovo izhevsk jar joshkar-ola kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia khv kirov koenig komi kostroma kranoyarsk kuban kurgan kursk lipetsk magadan mari mari-el marine mil mordovia mosreg msk murmansk nalchik net nnov nov novosibirsk nsk omsk orenburg org oryol penza perm pp pskov ptz rnd ryazan sakhalin samara saratov simbirsk smolensk spb stavropol stv surgut tambov tatarstan tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vladikavkaz vladimir vladivostok volgograd vologda voronezh vrn vyatka yakutia yamal yekaterinburg yuzhno-sakhalinsk ",
                    rw: " ac co com edu gouv gov int mil net ",
                    sa: " com edu gov med net org pub sch ",
                    sd: " com edu gov info med net org tv ",
                    se: " a ac b bd c d e f g h i k l m n o org p parti pp press r s t tm u w x y z ",
                    sg: " com edu gov idn net org per ",
                    sn: " art com edu gouv org perso univ ",
                    sy: " com edu gov mil net news org ",
                    th: " ac co go in mi net or ",
                    tj: " ac biz co com edu go gov info int mil name net nic org test web ",
                    tn: " agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns rnu tourism ",
                    tz: " ac co go ne or ",
                    ua: " biz cherkassy chernigov chernovtsy ck cn co com crimea cv dn dnepropetrovsk donetsk dp edu gov if in ivano-frankivsk kh kharkov kherson khmelnitskiy kiev kirovograd km kr ks kv lg lugansk lutsk lviv me mk net nikolaev od odessa org pl poltava pp rovno rv sebastopol sumy te ternopil uzhgorod vinnica vn zaporizhzhe zhitomir zp zt ",
                    ug: " ac co go ne or org sc ",
                    uk: " ac bl british-library co cym gov govt icnet jet lea ltd me mil mod national-library-scotland nel net nhs nic nls org orgn parliament plc police sch scot soc ",
                    us: " dni fed isa kids nsn ",
                    uy: " com edu gub mil net org ",
                    ve: " co com edu gob info mil net org web ",
                    vi: " co com k12 net org ",
                    vn: " ac biz com edu gov health info int name net org pro ",
                    ye: " co com gov ltd me net org plc ",
                    yu: " ac co edu gov org ",
                    za: " ac agric alt bourse city co cybernet db edu gov grondar iaccess imt inca landesign law mil net ngo nis nom olivetti org pix school tm web ",
                    zm: " ac co com edu gov net org sch "
                },
                has: function(n) {
                    var e = n.lastIndexOf(".");
                    if (0 >= e || e >= n.length - 1) return !1;
                    var o = n.lastIndexOf(".", e - 1);
                    if (0 >= o || o >= e - 1) return !1;
                    var r = t.list[n.slice(e + 1)];
                    return r ? r.indexOf(" " + n.slice(o + 1, e) + " ") >= 0 : !1
                },
                is: function(n) {
                    var e = n.lastIndexOf(".");
                    if (0 >= e || e >= n.length - 1) return !1;
                    var o = n.lastIndexOf(".", e - 1);
                    if (o >= 0) return !1;
                    var r = t.list[n.slice(e + 1)];
                    return r ? r.indexOf(" " + n.slice(0, e) + " ") >= 0 : !1
                },
                get: function(n) {
                    var e = n.lastIndexOf(".");
                    if (0 >= e || e >= n.length - 1) return null;
                    var o = n.lastIndexOf(".", e - 1);
                    if (0 >= o || o >= e - 1) return null;
                    var r = t.list[n.slice(e + 1)];
                    return r ? r.indexOf(" " + n.slice(o + 1, e) + " ") < 0 ? null : n.slice(o + 1) : null
                },
                noConflict: function() {
                    return n.SecondLevelDomains === this && (n.SecondLevelDomains = e), this
                }
            };
        return t
    })
}, function(n, e, t) {
    /*!
     * URI.js - Mutating URLs
     *
     * Version: 1.13.2
     *
     * Author: Rodney Rehm
     * Web: http://medialize.github.io/URI.js/
     *
     * Licensed under
     *   MIT License http://www.opensource.org/licenses/mit-license
     *   GPL v3 http://opensource.org/licenses/GPL-3.0
     *
     */
    ! function(e, o) {
        "use strict";
        n.exports = o(t(69), t(190), t(191))
    }(this, function(n, e, t, o) {
        "use strict";

        function r(n, e) {
            return this instanceof r ? (void 0 === n && (n = "undefined" != typeof location ? location.href + "" : ""), this.href(n), void 0 !== e ? this.absoluteTo(e) : this) : new r(n, e)
        }

        function i(n) {
            return n.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
        }

        function a(n) {
            return void 0 === n ? "Undefined" : String(Object.prototype.toString.call(n)).slice(8, -1)
        }

        function s(n) {
            return "Array" === a(n)
        }

        function E(n, e) {
            var t, o, r = {};
            if (s(e))
                for (t = 0, o = e.length; o > t; t++) r[e[t]] = !0;
            else r[e] = !0;
            for (t = 0, o = n.length; o > t; t++) void 0 !== r[n[t]] && (n.splice(t, 1), o--, t--);
            return n
        }

        function _(n, e) {
            var t, o;
            if (s(e)) {
                for (t = 0, o = e.length; o > t; t++)
                    if (!_(n, e[t])) return !1;
                return !0
            }
            var r = a(e);
            for (t = 0, o = n.length; o > t; t++)
                if ("RegExp" === r) {
                    if ("string" == typeof n[t] && n[t].match(e)) return !0
                } else if (n[t] === e) return !0;
            return !1
        }

        function l(n, e) {
            if (!s(n) || !s(e)) return !1;
            if (n.length !== e.length) return !1;
            n.sort(), e.sort();
            for (var t = 0, o = n.length; o > t; t++)
                if (n[t] !== e[t]) return !1;
            return !0
        }

        function O(n) {
            return escape(n)
        }

        function u(n) {
            return encodeURIComponent(n).replace(/[!'()*]/g, O).replace(/\*/g, "%2A")
        }
        var R = o && o.URI;
        r.version = "1.13.2";
        var d = r.prototype,
            N = Object.prototype.hasOwnProperty;
        r._parts = function() {
            return {
                protocol: null,
                username: null,
                password: null,
                hostname: null,
                urn: null,
                port: null,
                path: null,
                query: null,
                fragment: null,
                duplicateQueryParameters: r.duplicateQueryParameters,
                escapeQuerySpace: r.escapeQuerySpace
            }
        }, r.duplicateQueryParameters = !1, r.escapeQuerySpace = !0, r.protocol_expression = /^[a-z][a-z0-9.+-]*$/i, r.idn_expression = /[^a-z0-9\.-]/i, r.punycode_expression = /(xn--)/i, r.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, r.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/, r.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?Â«Â»â€œâ€â€˜â€™]))/gi, r.findUri = {
            start: /\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,
            end: /[\s\r\n]|$/,
            trim: /[`!()\[\]{};:'".,<>?Â«Â»â€œâ€â€žâ€˜â€™]+$/
        }, r.defaultPorts = {
            http: "80",
            https: "443",
            ftp: "21",
            gopher: "70",
            ws: "80",
            wss: "443"
        }, r.invalid_hostname_characters = /[^a-zA-Z0-9\.-]/, r.domAttributes = {
            a: "href",
            blockquote: "cite",
            link: "href",
            base: "href",
            script: "src",
            form: "action",
            img: "src",
            area: "href",
            iframe: "src",
            embed: "src",
            source: "src",
            track: "src",
            input: "src"
        }, r.getDomAttribute = function(n) {
            if (!n || !n.nodeName) return void 0;
            var e = n.nodeName.toLowerCase();
            return "input" === e && "image" !== n.type ? void 0 : r.domAttributes[e]
        }, r.encode = u, r.decode = decodeURIComponent, r.iso8859 = function() {
            r.encode = escape, r.decode = unescape
        }, r.unicode = function() {
            r.encode = u, r.decode = decodeURIComponent
        }, r.characters = {
            pathname: {
                encode: {
                    expression: /%(24|26|2B|2C|3B|3D|3A|40)/gi,
                    map: {
                        "%24": "$",
                        "%26": "&",
                        "%2B": "+",
                        "%2C": ",",
                        "%3B": ";",
                        "%3D": "=",
                        "%3A": ":",
                        "%40": "@"
                    }
                },
                decode: {
                    expression: /[\/\?#]/g,
                    map: {
                        "/": "%2F",
                        "?": "%3F",
                        "#": "%23"
                    }
                }
            },
            reserved: {
                encode: {
                    expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/gi,
                    map: {
                        "%3A": ":",
                        "%2F": "/",
                        "%3F": "?",
                        "%23": "#",
                        "%5B": "[",
                        "%5D": "]",
                        "%40": "@",
                        "%21": "!",
                        "%24": "$",
                        "%26": "&",
                        "%27": "'",
                        "%28": "(",
                        "%29": ")",
                        "%2A": "*",
                        "%2B": "+",
                        "%2C": ",",
                        "%3B": ";",
                        "%3D": "="
                    }
                }
            }
        }, r.encodeQuery = function(n, e) {
            var t = r.encode(n + "");
            return void 0 === e && (e = r.escapeQuerySpace), e ? t.replace(/%20/g, "+") : t
        }, r.decodeQuery = function(n, e) {
            n += "", void 0 === e && (e = r.escapeQuerySpace);
            try {
                return r.decode(e ? n.replace(/\+/g, "%20") : n)
            } catch (t) {
                return n
            }
        }, r.recodePath = function(n) {
            for (var e = (n + "").split("/"), t = 0, o = e.length; o > t; t++) e[t] = r.encodePathSegment(r.decode(e[t]));
            return e.join("/")
        }, r.decodePath = function(n) {
            for (var e = (n + "").split("/"), t = 0, o = e.length; o > t; t++) e[t] = r.decodePathSegment(e[t]);
            return e.join("/")
        };
        var T, c = {
                encode: "encode",
                decode: "decode"
            },
            A = function(n, e) {
                return function(t) {
                    return r[e](t + "").replace(r.characters[n][e].expression, function(t) {
                        return r.characters[n][e].map[t]
                    })
                }
            };
        for (T in c) r[T + "PathSegment"] = A("pathname", c[T]);
        r.encodeReserved = A("reserved", "encode"), r.parse = function(n, e) {
            var t;
            return e || (e = {}), t = n.indexOf("#"), t > -1 && (e.fragment = n.substring(t + 1) || null, n = n.substring(0, t)), t = n.indexOf("?"), t > -1 && (e.query = n.substring(t + 1) || null, n = n.substring(0, t)), "//" === n.substring(0, 2) ? (e.protocol = null, n = n.substring(2), n = r.parseAuthority(n, e)) : (t = n.indexOf(":"), t > -1 && (e.protocol = n.substring(0, t) || null, e.protocol && !e.protocol.match(r.protocol_expression) ? e.protocol = void 0 : "file" === e.protocol ? n = n.substring(t + 3) : "//" === n.substring(t + 1, t + 3) ? (n = n.substring(t + 3), n = r.parseAuthority(n, e)) : (n = n.substring(t + 1), e.urn = !0))), e.path = n, e
        }, r.parseHost = function(n, e) {
            var t, o, r = n.indexOf("/");
            return -1 === r && (r = n.length), "[" === n.charAt(0) ? (t = n.indexOf("]"), e.hostname = n.substring(1, t) || null, e.port = n.substring(t + 2, r) || null, "/" === e.port && (e.port = null)) : n.indexOf(":") !== n.lastIndexOf(":") ? (e.hostname = n.substring(0, r) || null, e.port = null) : (o = n.substring(0, r).split(":"), e.hostname = o[0] || null, e.port = o[1] || null), e.hostname && "/" !== n.substring(r).charAt(0) && (r++, n = "/" + n), n.substring(r) || "/"
        }, r.parseAuthority = function(n, e) {
            return n = r.parseUserinfo(n, e), r.parseHost(n, e)
        }, r.parseUserinfo = function(n, e) {
            var t, o = n.indexOf("/"),
                i = o > -1 ? n.lastIndexOf("@", o) : n.indexOf("@");
            return i > -1 && (-1 === o || o > i) ? (t = n.substring(0, i).split(":"), e.username = t[0] ? r.decode(t[0]) : null, t.shift(), e.password = t[0] ? r.decode(t.join(":")) : null, n = n.substring(i + 1)) : (e.username = null, e.password = null), n
        }, r.parseQuery = function(n, e) {
            if (!n) return {};
            if (n = n.replace(/&+/g, "&").replace(/^\?*&*|&+$/g, ""), !n) return {};
            for (var t, o, i, a = {}, s = n.split("&"), E = s.length, _ = 0; E > _; _++) t = s[_].split("="), o = r.decodeQuery(t.shift(), e), i = t.length ? r.decodeQuery(t.join("="), e) : null, a[o] ? ("string" == typeof a[o] && (a[o] = [a[o]]), a[o].push(i)) : a[o] = i;
            return a
        }, r.build = function(n) {
            var e = "";
            return n.protocol && (e += n.protocol + ":"), n.urn || !e && !n.hostname || (e += "//"), e += r.buildAuthority(n) || "", "string" == typeof n.path && ("/" !== n.path.charAt(0) && "string" == typeof n.hostname && (e += "/"), e += n.path), "string" == typeof n.query && n.query && (e += "?" + n.query), "string" == typeof n.fragment && n.fragment && (e += "#" + n.fragment), e
        }, r.buildHost = function(n) {
            var e = "";
            return n.hostname ? (e += r.ip6_expression.test(n.hostname) ? "[" + n.hostname + "]" : n.hostname, n.port && (e += ":" + n.port), e) : ""
        }, r.buildAuthority = function(n) {
            return r.buildUserinfo(n) + r.buildHost(n)
        }, r.buildUserinfo = function(n) {
            var e = "";
            return n.username && (e += r.encode(n.username), n.password && (e += ":" + r.encode(n.password)), e += "@"), e
        }, r.buildQuery = function(n, e, t) {
            var o, i, a, E, _ = "";
            for (i in n)
                if (N.call(n, i) && i)
                    if (s(n[i]))
                        for (o = {}, a = 0, E = n[i].length; E > a; a++) void 0 !== n[i][a] && void 0 === o[n[i][a] + ""] && (_ += "&" + r.buildQueryParameter(i, n[i][a], t), e !== !0 && (o[n[i][a] + ""] = !0));
                    else void 0 !== n[i] && (_ += "&" + r.buildQueryParameter(i, n[i], t));
            return _.substring(1)
        }, r.buildQueryParameter = function(n, e, t) {
            return r.encodeQuery(n, t) + (null !== e ? "=" + r.encodeQuery(e, t) : "")
        }, r.addQuery = function(n, e, t) {
            if ("object" == typeof e)
                for (var o in e) N.call(e, o) && r.addQuery(n, o, e[o]);
            else {
                if ("string" != typeof e) throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
                if (void 0 === n[e]) return void(n[e] = t);
                "string" == typeof n[e] && (n[e] = [n[e]]), s(t) || (t = [t]), n[e] = n[e].concat(t)
            }
        }, r.removeQuery = function(n, e, t) {
            var o, i, a;
            if (s(e))
                for (o = 0, i = e.length; i > o; o++) n[e[o]] = void 0;
            else if ("object" == typeof e)
                for (a in e) N.call(e, a) && r.removeQuery(n, a, e[a]);
            else {
                if ("string" != typeof e) throw new TypeError("URI.addQuery() accepts an object, string as the first parameter");
                void 0 !== t ? n[e] === t ? n[e] = void 0 : s(n[e]) && (n[e] = E(n[e], t)) : n[e] = void 0
            }
        }, r.hasQuery = function(n, e, t, o) {
            if ("object" == typeof e) {
                for (var i in e)
                    if (N.call(e, i) && !r.hasQuery(n, i, e[i])) return !1;
                return !0
            }
            if ("string" != typeof e) throw new TypeError("URI.hasQuery() accepts an object, string as the name parameter");
            switch (a(t)) {
                case "Undefined":
                    return e in n;
                case "Boolean":
                    var E = Boolean(s(n[e]) ? n[e].length : n[e]);
                    return t === E;
                case "Function":
                    return !!t(n[e], e, n);
                case "Array":
                    if (!s(n[e])) return !1;
                    var O = o ? _ : l;
                    return O(n[e], t);
                case "RegExp":
                    return s(n[e]) ? o ? _(n[e], t) : !1 : Boolean(n[e] && n[e].match(t));
                case "Number":
                    t = String(t);
                case "String":
                    return s(n[e]) ? o ? _(n[e], t) : !1 : n[e] === t;
                default:
                    throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter")
            }
        }, r.commonPath = function(n, e) {
            var t, o = Math.min(n.length, e.length);
            for (t = 0; o > t; t++)
                if (n.charAt(t) !== e.charAt(t)) {
                    t--;
                    break
                }
            return 1 > t ? n.charAt(0) === e.charAt(0) && "/" === n.charAt(0) ? "/" : "" : (("/" !== n.charAt(t) || "/" !== e.charAt(t)) && (t = n.substring(0, t).lastIndexOf("/")), n.substring(0, t + 1))
        }, r.withinString = function(n, e, t) {
            t || (t = {});
            var o = t.start || r.findUri.start,
                i = t.end || r.findUri.end,
                a = t.trim || r.findUri.trim,
                s = /[a-z0-9-]=["']?$/i;
            for (o.lastIndex = 0;;) {
                var E = o.exec(n);
                if (!E) break;
                var _ = E.index;
                if (t.ignoreHtml) {
                    var l = n.slice(Math.max(_ - 3, 0), _);
                    if (l && s.test(l)) continue
                }
                var O = _ + n.slice(_).search(i),
                    u = n.slice(_, O).replace(a, "");
                if (!t.ignore || !t.ignore.test(u)) {
                    O = _ + u.length;
                    var R = e(u, _, O, n);
                    n = n.slice(0, _) + R + n.slice(O), o.lastIndex = _ + R.length
                }
            }
            return o.lastIndex = 0, n
        }, r.ensureValidHostname = function(e) {
            if (e.match(r.invalid_hostname_characters)) {
                if (!n) throw new TypeError('Hostname "' + e + '" contains characters other than [A-Z0-9.-] and Punycode.js is not available');
                if (n.toASCII(e).match(r.invalid_hostname_characters)) throw new TypeError('Hostname "' + e + '" contains characters other than [A-Z0-9.-]')
            }
        }, r.noConflict = function(n) {
            if (n) {
                var e = {
                    URI: this.noConflict()
                };
                return o.URITemplate && "function" == typeof o.URITemplate.noConflict && (e.URITemplate = o.URITemplate.noConflict()), o.IPv6 && "function" == typeof o.IPv6.noConflict && (e.IPv6 = o.IPv6.noConflict()), o.SecondLevelDomains && "function" == typeof o.SecondLevelDomains.noConflict && (e.SecondLevelDomains = o.SecondLevelDomains.noConflict()), e
            }
            return o.URI === this && (o.URI = R), this
        }, d.build = function(n) {
            return n === !0 ? this._deferred_build = !0 : (void 0 === n || this._deferred_build) && (this._string = r.build(this._parts), this._deferred_build = !1), this
        }, d.clone = function() {
            return new r(this)
        }, d.valueOf = d.toString = function() {
            return this.build(!1)._string
        }, c = {
            protocol: "protocol",
            username: "username",
            password: "password",
            hostname: "hostname",
            port: "port"
        }, A = function(n) {
            return function(e, t) {
                return void 0 === e ? this._parts[n] || "" : (this._parts[n] = e || null, this.build(!t), this)
            }
        };
        for (T in c) d[T] = A(c[T]);
        c = {
            query: "?",
            fragment: "#"
        }, A = function(n, e) {
            return function(t, o) {
                return void 0 === t ? this._parts[n] || "" : (null !== t && (t += "", t.charAt(0) === e && (t = t.substring(1))), this._parts[n] = t, this.build(!o), this)
            }
        };
        for (T in c) d[T] = A(T, c[T]);
        c = {
            search: ["?", "query"],
            hash: ["#", "fragment"]
        }, A = function(n, e) {
            return function(t, o) {
                var r = this[n](t, o);
                return "string" == typeof r && r.length ? e + r : r
            }
        };
        for (T in c) d[T] = A(c[T][1], c[T][0]);
        d.pathname = function(n, e) {
            if (void 0 === n || n === !0) {
                var t = this._parts.path || (this._parts.hostname ? "/" : "");
                return n ? r.decodePath(t) : t
            }
            return this._parts.path = n ? r.recodePath(n) : "/", this.build(!e), this
        }, d.path = d.pathname, d.href = function(n, e) {
            var t;
            if (void 0 === n) return this.toString();
            this._string = "", this._parts = r._parts();
            var o = n instanceof r,
                i = "object" == typeof n && (n.hostname || n.path || n.pathname);
            if (n.nodeName) {
                var a = r.getDomAttribute(n);
                n = n[a] || "", i = !1
            }
            if (!o && i && void 0 !== n.pathname && (n = n.toString()), "string" == typeof n) this._parts = r.parse(n, this._parts);
            else {
                if (!o && !i) throw new TypeError("invalid input");
                var s = o ? n._parts : n;
                for (t in s) N.call(this._parts, t) && (this._parts[t] = s[t])
            }
            return this.build(!e), this
        }, d.is = function(n) {
            var e = !1,
                o = !1,
                i = !1,
                a = !1,
                s = !1,
                E = !1,
                _ = !1,
                l = !this._parts.urn;
            switch (this._parts.hostname && (l = !1, o = r.ip4_expression.test(this._parts.hostname), i = r.ip6_expression.test(this._parts.hostname), e = o || i, a = !e, s = a && t && t.has(this._parts.hostname), E = a && r.idn_expression.test(this._parts.hostname), _ = a && r.punycode_expression.test(this._parts.hostname)), n.toLowerCase()) {
                case "relative":
                    return l;
                case "absolute":
                    return !l;
                case "domain":
                case "name":
                    return a;
                case "sld":
                    return s;
                case "ip":
                    return e;
                case "ip4":
                case "ipv4":
                case "inet4":
                    return o;
                case "ip6":
                case "ipv6":
                case "inet6":
                    return i;
                case "idn":
                    return E;
                case "url":
                    return !this._parts.urn;
                case "urn":
                    return !!this._parts.urn;
                case "punycode":
                    return _
            }
            return null
        };
        var S = d.protocol,
            m = d.port,
            p = d.hostname;
        d.protocol = function(n, e) {
            if (void 0 !== n && n && (n = n.replace(/:(\/\/)?$/, ""), !n.match(r.protocol_expression))) throw new TypeError('Protocol "' + n + "\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]");
            return S.call(this, n, e)
        }, d.scheme = d.protocol, d.port = function(n, e) {
            if (this._parts.urn) return void 0 === n ? "" : this;
            if (void 0 !== n && (0 === n && (n = null), n && (n += "", ":" === n.charAt(0) && (n = n.substring(1)), n.match(/[^0-9]/)))) throw new TypeError('Port "' + n + '" contains characters other than [0-9]');
            return m.call(this, n, e)
        }, d.hostname = function(n, e) {
            if (this._parts.urn) return void 0 === n ? "" : this;
            if (void 0 !== n) {
                var t = {};
                r.parseHost(n, t), n = t.hostname
            }
            return p.call(this, n, e)
        }, d.host = function(n, e) {
            return this._parts.urn ? void 0 === n ? "" : this : void 0 === n ? this._parts.hostname ? r.buildHost(this._parts) : "" : (r.parseHost(n, this._parts), this.build(!e), this)
        }, d.authority = function(n, e) {
            return this._parts.urn ? void 0 === n ? "" : this : void 0 === n ? this._parts.hostname ? r.buildAuthority(this._parts) : "" : (r.parseAuthority(n, this._parts), this.build(!e), this)
        }, d.userinfo = function(n, e) {
            if (this._parts.urn) return void 0 === n ? "" : this;
            if (void 0 === n) {
                if (!this._parts.username) return "";
                var t = r.buildUserinfo(this._parts);
                return t.substring(0, t.length - 1)
            }
            return "@" !== n[n.length - 1] && (n += "@"), r.parseUserinfo(n, this._parts), this.build(!e), this
        }, d.resource = function(n, e) {
            var t;
            return void 0 === n ? this.path() + this.search() + this.hash() : (t = r.parse(n), this._parts.path = t.path, this._parts.query = t.query, this._parts.fragment = t.fragment, this.build(!e), this)
        }, d.subdomain = function(n, e) {
            if (this._parts.urn) return void 0 === n ? "" : this;
            if (void 0 === n) {
                if (!this._parts.hostname || this.is("IP")) return "";
                var t = this._parts.hostname.length - this.domain().length - 1;
                return this._parts.hostname.substring(0, t) || ""
            }
            var o = this._parts.hostname.length - this.domain().length,
                a = this._parts.hostname.substring(0, o),
                s = new RegExp("^" + i(a));
            return n && "." !== n.charAt(n.length - 1) && (n += "."), n && r.ensureValidHostname(n), this._parts.hostname = this._parts.hostname.replace(s, n), this.build(!e), this
        }, d.domain = function(n, e) {
            if (this._parts.urn) return void 0 === n ? "" : this;
            if ("boolean" == typeof n && (e = n, n = void 0), void 0 === n) {
                if (!this._parts.hostname || this.is("IP")) return "";
                var t = this._parts.hostname.match(/\./g);
                if (t && t.length < 2) return this._parts.hostname;
                var o = this._parts.hostname.length - this.tld(e).length - 1;
                return o = this._parts.hostname.lastIndexOf(".", o - 1) + 1, this._parts.hostname.substring(o) || ""
            }
            if (!n) throw new TypeError("cannot set domain empty");
            if (r.ensureValidHostname(n), !this._parts.hostname || this.is("IP")) this._parts.hostname = n;
            else {
                var a = new RegExp(i(this.domain()) + "$");
                this._parts.hostname = this._parts.hostname.replace(a, n)
            }
            return this.build(!e), this
        }, d.tld = function(n, e) {
            if (this._parts.urn) return void 0 === n ? "" : this;
            if ("boolean" == typeof n && (e = n, n = void 0), void 0 === n) {
                if (!this._parts.hostname || this.is("IP")) return "";
                var o = this._parts.hostname.lastIndexOf("."),
                    r = this._parts.hostname.substring(o + 1);
                return e !== !0 && t && t.list[r.toLowerCase()] ? t.get(this._parts.hostname) || r : r
            }
            var a;
            if (!n) throw new TypeError("cannot set TLD empty");
            if (n.match(/[^a-zA-Z0-9-]/)) {
                if (!t || !t.is(n)) throw new TypeError('TLD "' + n + '" contains characters other than [A-Z0-9]');
                a = new RegExp(i(this.tld()) + "$"), this._parts.hostname = this._parts.hostname.replace(a, n)
            } else {
                if (!this._parts.hostname || this.is("IP")) throw new ReferenceError("cannot set TLD on non-domain host");
                a = new RegExp(i(this.tld()) + "$"), this._parts.hostname = this._parts.hostname.replace(a, n)
            }
            return this.build(!e), this
        }, d.directory = function(n, e) {
            if (this._parts.urn) return void 0 === n ? "" : this;
            if (void 0 === n || n === !0) {
                if (!this._parts.path && !this._parts.hostname) return "";
                if ("/" === this._parts.path) return "/";
                var t = this._parts.path.length - this.filename().length - 1,
                    o = this._parts.path.substring(0, t) || (this._parts.hostname ? "/" : "");
                return n ? r.decodePath(o) : o
            }
            var a = this._parts.path.length - this.filename().length,
                s = this._parts.path.substring(0, a),
                E = new RegExp("^" + i(s));
            return this.is("relative") || (n || (n = "/"), "/" !== n.charAt(0) && (n = "/" + n)), n && "/" !== n.charAt(n.length - 1) && (n += "/"), n = r.recodePath(n), this._parts.path = this._parts.path.replace(E, n), this.build(!e), this
        }, d.filename = function(n, e) {
            if (this._parts.urn) return void 0 === n ? "" : this;
            if (void 0 === n || n === !0) {
                if (!this._parts.path || "/" === this._parts.path) return "";
                var t = this._parts.path.lastIndexOf("/"),
                    o = this._parts.path.substring(t + 1);
                return n ? r.decodePathSegment(o) : o
            }
            var a = !1;
            "/" === n.charAt(0) && (n = n.substring(1)), n.match(/\.?\//) && (a = !0);
            var s = new RegExp(i(this.filename()) + "$");
            return n = r.recodePath(n), this._parts.path = this._parts.path.replace(s, n), a ? this.normalizePath(e) : this.build(!e), this
        }, d.suffix = function(n, e) {
            if (this._parts.urn) return void 0 === n ? "" : this;
            if (void 0 === n || n === !0) {
                if (!this._parts.path || "/" === this._parts.path) return "";
                var t, o, a = this.filename(),
                    s = a.lastIndexOf(".");
                return -1 === s ? "" : (t = a.substring(s + 1), o = /^[a-z0-9%]+$/i.test(t) ? t : "", n ? r.decodePathSegment(o) : o)
            }
            "." === n.charAt(0) && (n = n.substring(1));
            var E, _ = this.suffix();
            if (_) E = n ? new RegExp(i(_) + "$") : new RegExp(i("." + _) + "$");
            else {
                if (!n) return this;
                this._parts.path += "." + r.recodePath(n)
            }
            return E && (n = r.recodePath(n), this._parts.path = this._parts.path.replace(E, n)), this.build(!e), this
        }, d.segment = function(n, e, t) {
            var o = this._parts.urn ? ":" : "/",
                r = this.path(),
                i = "/" === r.substring(0, 1),
                a = r.split(o);
            if (void 0 !== n && "number" != typeof n && (t = e, e = n, n = void 0), void 0 !== n && "number" != typeof n) throw new Error('Bad segment "' + n + '", must be 0-based integer');
            if (i && a.shift(), 0 > n && (n = Math.max(a.length + n, 0)), void 0 === e) return void 0 === n ? a : a[n];
            if (null === n || void 0 === a[n])
                if (s(e)) {
                    a = [];
                    for (var E = 0, _ = e.length; _ > E; E++)(e[E].length || a.length && a[a.length - 1].length) && (a.length && !a[a.length - 1].length && a.pop(), a.push(e[E]))
                } else(e || "string" == typeof e) && ("" === a[a.length - 1] ? a[a.length - 1] = e : a.push(e));
            else e || "string" == typeof e && e.length ? a[n] = e : a.splice(n, 1);
            return i && a.unshift(""), this.path(a.join(o), t)
        }, d.segmentCoded = function(n, e, t) {
            var o, i, a;
            if ("number" != typeof n && (t = e, e = n, n = void 0), void 0 === e) {
                if (o = this.segment(n, e, t), s(o))
                    for (i = 0, a = o.length; a > i; i++) o[i] = r.decode(o[i]);
                else o = void 0 !== o ? r.decode(o) : void 0;
                return o
            }
            if (s(e))
                for (i = 0, a = e.length; a > i; i++) e[i] = r.decode(e[i]);
            else e = "string" == typeof e ? r.encode(e) : e;
            return this.segment(n, e, t)
        };
        var I = d.query;
        return d.query = function(n, e) {
            if (n === !0) return r.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
            if ("function" == typeof n) {
                var t = r.parseQuery(this._parts.query, this._parts.escapeQuerySpace),
                    o = n.call(this, t);
                return this._parts.query = r.buildQuery(o || t, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), this.build(!e), this
            }
            return void 0 !== n && "string" != typeof n ? (this._parts.query = r.buildQuery(n, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), this.build(!e), this) : I.call(this, n, e)
        }, d.setQuery = function(n, e, t) {
            var o = r.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
            if ("object" == typeof n)
                for (var i in n) N.call(n, i) && (o[i] = n[i]);
            else {
                if ("string" != typeof n) throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
                o[n] = void 0 !== e ? e : null
            }
            return this._parts.query = r.buildQuery(o, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), "string" != typeof n && (t = e), this.build(!t), this
        }, d.addQuery = function(n, e, t) {
            var o = r.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
            return r.addQuery(o, n, void 0 === e ? null : e), this._parts.query = r.buildQuery(o, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), "string" != typeof n && (t = e), this.build(!t), this
        }, d.removeQuery = function(n, e, t) {
            var o = r.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
            return r.removeQuery(o, n, e), this._parts.query = r.buildQuery(o, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), "string" != typeof n && (t = e), this.build(!t), this
        }, d.hasQuery = function(n, e, t) {
            var o = r.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
            return r.hasQuery(o, n, e, t)
        }, d.setSearch = d.setQuery, d.addSearch = d.addQuery, d.removeSearch = d.removeQuery, d.hasSearch = d.hasQuery, d.normalize = function() {
            return this._parts.urn ? this.normalizeProtocol(!1).normalizeQuery(!1).normalizeFragment(!1).build() : this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()
        }, d.normalizeProtocol = function(n) {
            return "string" == typeof this._parts.protocol && (this._parts.protocol = this._parts.protocol.toLowerCase(), this.build(!n)), this
        }, d.normalizeHostname = function(t) {
            return this._parts.hostname && (this.is("IDN") && n ? this._parts.hostname = n.toASCII(this._parts.hostname) : this.is("IPv6") && e && (this._parts.hostname = e.best(this._parts.hostname)), this._parts.hostname = this._parts.hostname.toLowerCase(), this.build(!t)), this
        }, d.normalizePort = function(n) {
            return "string" == typeof this._parts.protocol && this._parts.port === r.defaultPorts[this._parts.protocol] && (this._parts.port = null, this.build(!n)), this
        }, d.normalizePath = function(n) {
            if (this._parts.urn) return this;
            if (!this._parts.path || "/" === this._parts.path) return this;
            var e, t, o, i = this._parts.path,
                a = "";
            for ("/" !== i.charAt(0) && (e = !0, i = "/" + i), i = i.replace(/(\/(\.\/)+)|(\/\.$)/g, "/").replace(/\/{2,}/g, "/"), e && (a = i.substring(1).match(/^(\.\.\/)+/) || "", a && (a = a[0]));;) {
                if (t = i.indexOf("/.."), -1 === t) break;
                0 !== t ? (o = i.substring(0, t).lastIndexOf("/"), -1 === o && (o = t), i = i.substring(0, o) + i.substring(t + 3)) : i = i.substring(3)
            }
            return e && this.is("relative") && (i = a + i.substring(1)), i = r.recodePath(i), this._parts.path = i, this.build(!n), this
        }, d.normalizePathname = d.normalizePath, d.normalizeQuery = function(n) {
            return "string" == typeof this._parts.query && (this._parts.query.length ? this.query(r.parseQuery(this._parts.query, this._parts.escapeQuerySpace)) : this._parts.query = null, this.build(!n)), this
        }, d.normalizeFragment = function(n) {
            return this._parts.fragment || (this._parts.fragment = null, this.build(!n)), this
        }, d.normalizeSearch = d.normalizeQuery, d.normalizeHash = d.normalizeFragment, d.iso8859 = function() {
            var n = r.encode,
                e = r.decode;
            return r.encode = escape, r.decode = decodeURIComponent, this.normalize(), r.encode = n, r.decode = e, this
        }, d.unicode = function() {
            var n = r.encode,
                e = r.decode;
            return r.encode = u, r.decode = unescape, this.normalize(), r.encode = n, r.decode = e, this
        }, d.readable = function() {
            var e = this.clone();
            e.username("").password("").normalize();
            var t = "";
            if (e._parts.protocol && (t += e._parts.protocol + "://"), e._parts.hostname && (e.is("punycode") && n ? (t += n.toUnicode(e._parts.hostname), e._parts.port && (t += ":" + e._parts.port)) : t += e.host()), e._parts.hostname && e._parts.path && "/" !== e._parts.path.charAt(0) && (t += "/"), t += e.path(!0), e._parts.query) {
                for (var o = "", i = 0, a = e._parts.query.split("&"), s = a.length; s > i; i++) {
                    var E = (a[i] || "").split("=");
                    o += "&" + r.decodeQuery(E[0], this._parts.escapeQuerySpace).replace(/&/g, "%26"), void 0 !== E[1] && (o += "=" + r.decodeQuery(E[1], this._parts.escapeQuerySpace).replace(/&/g, "%26"))
                }
                t += "?" + o.substring(1)
            }
            return t += r.decodeQuery(e.hash(), !0)
        }, d.absoluteTo = function(n) {
            var e, t, o, i = this.clone(),
                a = ["protocol", "username", "password", "hostname", "port"];
            if (this._parts.urn) throw new Error("URNs do not have any generally defined hierarchical components");
            if (n instanceof r || (n = new r(n)), i._parts.protocol || (i._parts.protocol = n._parts.protocol), this._parts.hostname) return i;
            for (t = 0; o = a[t]; t++) i._parts[o] = n._parts[o];
            return i._parts.path ? ".." === i._parts.path.substring(-2) && (i._parts.path += "/") : (i._parts.path = n._parts.path, i._parts.query || (i._parts.query = n._parts.query)), "/" !== i.path().charAt(0) && (e = n.directory(), i._parts.path = (e ? e + "/" : "") + i._parts.path, i.normalizePath()), i.build(), i
        }, d.relativeTo = function(n) {
            var e, t, o, i, a, s = this.clone().normalize();
            if (s._parts.urn) throw new Error("URNs do not have any generally defined hierarchical components");
            if (n = new r(n).normalize(), e = s._parts, t = n._parts, i = s.path(), a = n.path(), "/" !== i.charAt(0)) throw new Error("URI is already relative");
            if ("/" !== a.charAt(0)) throw new Error("Cannot calculate a URI relative to another relative URI");
            if (e.protocol === t.protocol && (e.protocol = null), e.username !== t.username || e.password !== t.password) return s.build();
            if (null !== e.protocol || null !== e.username || null !== e.password) return s.build();
            if (e.hostname !== t.hostname || e.port !== t.port) return s.build();
            if (e.hostname = null, e.port = null, i === a) return e.path = "", s.build();
            if (o = r.commonPath(s.path(), n.path()), !o) return s.build();
            var E = t.path.substring(o.length).replace(/[^\/]*$/, "").replace(/.*?\//g, "../");
            return e.path = E + e.path.substring(o.length), s.build()
        }, d.equals = function(n) {
            var e, t, o, i = this.clone(),
                a = new r(n),
                E = {},
                _ = {},
                O = {};
            if (i.normalize(), a.normalize(), i.toString() === a.toString()) return !0;
            if (e = i.query(), t = a.query(), i.query(""), a.query(""), i.toString() !== a.toString()) return !1;
            if (e.length !== t.length) return !1;
            E = r.parseQuery(e, this._parts.escapeQuerySpace), _ = r.parseQuery(t, this._parts.escapeQuerySpace);
            for (o in E)
                if (N.call(E, o)) {
                    if (s(E[o])) {
                        if (!l(E[o], _[o])) return !1
                    } else if (E[o] !== _[o]) return !1;
                    O[o] = !0
                }
            for (o in _)
                if (N.call(_, o) && !O[o]) return !1;
            return !0
        }, d.duplicateQueryParameters = function(n) {
            return this._parts.duplicateQueryParameters = !!n, this
        }, d.escapeQuerySpace = function(n) {
            return this._parts.escapeQuerySpace = !!n, this
        }, r
    })
}, function(n, e, t) {
    var o, r;
    o = [t(3), t(9), t], r = function(n, e, t) {
        var o = n.Collection.extend({
            initialize: function() {
                this.model = e
            }
        });
        return o
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [], r = function() {
        "use strict";
        var n = {
            realmCodes: function() {
                return ["NA", "JP", "OCE", "PBE", "BR", "LAN", "LAS", "EUW", "EUNE", "RU", "TR"]
            }
        };
        return n
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1)], r = function(n) {
        "use strict";
        var e = {
            renderBooleanAttributeAsElementClass: function(n) {
                var e = this.$el.hasClass(n),
                    t = !1,
                    o = !1,
                    r = this.model || this.collection;
                return r && r.has(n) && r.get(n) === !0 ? (this.$el.addClass(n), t = !0) : (this.$el.removeClass(n), o = !0), e === !1 && t && this.$el.trigger("class:added:" + n), e === !0 && o && this.$el.trigger("class:removed:" + n.toLowerCase()), this
            }
        };
        return e
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(3)], r = function(n) {
        "use strict";
        var e = n.Model.extend({
            defaults: {
                isEditing: !1,
                canEdit: !1,
                boardsUri: ""
            }
        });
        return e
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    __WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return this.JST = this.JST || {}, this.JST["app/apollo_widgets/board_details/templates/widget.html"] = function(obj) {
            function print() {
                __p += __j.call(arguments, "")
            }
            obj || (obj = {});
            var __t, __p = "",
                __j = (_.escape, Array.prototype.join);
            with(obj) __p += '<section class="details">\n  <div class="right-buttons">\n    ', isEditing ? __p += '\n      <button id="board-details-cancel-button" class="btn">' + (null == (__t = i18n.strings.CANCEL) ? "" : __t) + '</button>\n      <button id="board-details-save-button" class="btn">' + (null == (__t = i18n.strings.SAVE_CHANGES) ? "" : __t) + "</button>\n    " : canEdit && (__p += '\n      <button id="board-details-edit-button" class="btn">' + (null == (__t = i18n.strings.EDIT) ? "" : __t) + "</button>\n    "), __p += "\n  </div>\n\n  <h2>" + (null == (__t = i18n.strings.DETAILS) ? "" : __t) + '</h2>\n  <div class="details">\n    <span>', print(i18n.strings.CREATED_PREFIX.replace("%s", createdDate)), __p += "</span><br/>\n    ", url = '<a href="' + url + '">' + url + "</a>", __p += "\n    <span>", print(i18n.strings.URL_PREFIX.replace("%s", url)), __p += '</a></span><br/>\n  </div>\n</section>\n\n<section class="description">\n  <h2>' + (null == (__t = i18n.strings.DESCRIPTION) ? "" : __t) + "</h2>\n  ", __p += isEditing ? "\n    <textarea>" + (null == (__t = board.description) ? "" : __t) + "</textarea>\n  " : '\n  <div class="description markdown-content">\n    ' + (null == (__t = board.description) ? "" : __t) + "\n  </div>\n  ", __p += '\n</section>\n\n<section class="guidelines">\n  <h2>' + (null == (__t = i18n.strings.GUIDELINES) ? "" : __t) + "</h2>\n  ", __p += isEditing ? "\n    <textarea>" + (null == (__t = board.guidelines) ? "" : __t) + "</textarea>\n  " : '\n  <div class="guidelines markdown-content">\n    ' + (null == (__t = board.guidelines) ? "" : __t) + "\n  </div>\n  ", __p += "\n</section>\n";
            return __p
        }, this.JST
    }.call(exports, __webpack_require__, exports, module), !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(5), t(197), t(176), t(7), t(29)], r = function(n, e, t, o, r, i, a) {
        "use strict";
        var s = new t.Model({
                oembed: "inline",
                reveal: !0
            }),
            E = new i({
                model: s
            }),
            _ = t.View.extend({
                tagName: "div",
                className: "board-details",
                board: null,
                WidgetTemplate: r["app/apollo_widgets/board_details/templates/widget.html"],
                events: {
                    "click #board-details-edit-button": "respondToEdit",
                    "click #board-details-cancel-button": "respondToCancel",
                    "click #board-details-save-button": "respondToSave"
                },
                initialize: function(n) {
                    this.board = n, e.bindAll(this, ["respondToEdit", "respondToCancel", "respondToSave", "renderWidget"]), this.model.on("change:isEditing", this.renderWidget)
                },
                respondToEdit: function() {
                    this.model.set("isEditing", !0)
                },
                respondToCancel: function() {
                    this.model.set("isEditing", !1)
                },
                respondToSave: function() {
                    var n = this.$el.find("section.description textarea").val(),
                        t = this.$el.find("section.guidelines textarea").val(),
                        o = {
                            description: n,
                            guidelines: t
                        };
                    this.board.save(o, {
                        patch: !0,
                        success: e.bind(function() {
                            this.model.set("isEditing", !1)
                        }, this)
                    })
                },
                renderWidget: function() {
                    var e = this.templateData(),
                        t = this.WidgetTemplate(e);
                    this.$el.html(t), this.model.get("isEditing") ? this.enableEditingFunctionality() : this.$el.find(".markdown-content").each(function() {
                        E.$el = n(this), E.render()
                    })
                },
                enableEditingFunctionality: function() {
                    var n = this.$el.find("textarea");
                    n.expanding(), o.features.toolbarEnabled && (n.parent().addClass("expandingText"), n.attr("data-apollo-widget", "toolbar"), window.Riot.Apollo.attach(this.$el))
                },
                templateData: function() {
                    var n = this.model.toJSON();
                    n.board = this.board.toJSON();
                    var e = parseInt(this.board.get("createdAt"), 10),
                        t = new Date(e);
                    return n.createdDate = t.toLocaleDateString(), n.url = this.assembleBoardsUrl(), n.i18n = {
                        strings: a.getCurrentCultureMessages()
                    }, n
                },
                assembleBoardsUrl: function() {
                    var n = [this.model.get("boardsUri")];
                    return n.push(this.board.boardsUri()), n.join("")
                },
                render: function() {
                    return this.renderWidget(), this
                }
            });
        return _
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(2), t(3), t(68), t(9), t(128)], r = function(n, e, t, o, r) {
        "use strict";
        var i = t.extend({
            initialize: function(t) {
                n.isEmpty(this.options) || (this.collection = t.collection), n.isEmpty(this.collection) && (this.collection = new r({}), this.collection.set("id", this.get("id"))), this.collection.board = this, this.listenTo(e, "users:selected", this.addModerator), this.listenTo(e, "users:removed", this.removeModerator), this.collection.on("sync", this.moderatorsChanged, this)
            },
            moderatorsChanged: function() {
                this.trigger("moderators:changed")
            },
            addModerator: function(n, e) {
                var t = this;
                e = e || {
                    error: function(n) {
                        t.addError(n)
                    }
                }, n.set("adding", !0), this.collection.add(n), this.httpPost(this.addModeratorUrl(), n.getIdHash(), function() {
                    t.moderatorWasAdded(n)
                }, e.error), this.moderatorsChanged()
            },
            moderatorWasAdded: function(n, e) {
                n.get("id"), n.get("realm");
                n.set("adding", !1), this.moderatorsChanged()
            },
            removeModerator: function(n, e) {
                var t = this;
                e = e || {
                    error: function(n) {
                        t.removeError(n)
                    }
                }, n.set("removing", !0), this.httpDelete(this.removeModeratorUrl(n), null, function() {
                    t.moderatorWasRemoved(n)
                }, e.error)
            },
            moderatorWasRemoved: function(n) {
                this.collection.remove(n), this.moderatorsChanged()
            },
            processModeratorsJson: function(e) {
                if (!n.isEmpty(e)) {
                    var t = [];
                    n.each(e, function(n) {
                        t.push(new o(n))
                    }), this.collection.reset(t)
                }
            },
            addModeratorUrl: function() {
                return this.url() + "/moderator"
            },
            removeModeratorUrl: function(n) {
                return this.addModeratorUrl() + "/" + n.get("realm") + "/" + n.get("id")
            },
            addError: function(n) {
                console.log(n)
            },
            removeError: function(n) {
                console.log(n)
            }
        });
        return i
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(6), t(177), t(202), t(201), t(4), t(5), t(199), t(9), t(128), t(8), t(130), t(129), t(194)], r = function(n, e, t, o, r, i, a, s, E, _, l, O, u, R, d, N) {
        "use strict";
        var T = t.View.extend({
            BoardTemplate: R["app/apollo_widgets/board_moderators/templates/board.html"],
            tagName: "div",
            className: "riot-board",
            initialize: function(n) {
                n = n || {}, e.bindAll(this, "render");
                var t = !1;
                e.isEmpty(n.boardModeratorsJson) || (t = !0), this.board = new _(n.boardJson), e.isEmpty(n.collection) || (this.board.collection = n.collection), e.isEmpty(n.id) || this.board.set("id", n.id), this.board.processModeratorsJson(n.boardModeratorsJson);
                var o = this;
                this.listenTo(this.board, "moderators:changed", function() {
                    o.syncComplete()
                }), t ? this.render() : this.board.collection.fetch()
            },
            syncComplete: function(n) {
                this.render()
            },
            userSelected: function(n) {
                this.board.addModerator(n)
            },
            userRemoved: function(n) {
                this.board.removeModerator(n)
            },
            render: function() {
                return e.isEmpty(this.board) || (this.renderBody(), this.renderAddModeratorButton(), this.renderModerators()), this
            },
            renderBody: function() {
                var n = this.translate(this.board.toJSON()),
                    e = this.BoardTemplate(n);
                return this.setCurrentElementMarkup(e), this
            },
            renderAddModeratorButton: function() {
                if (this.canEdit()) {
                    var n = this.$el.find("h2"),
                        e = new r({
                            el: n,
                            userType: "MODERATOR",
                            realms: this.realmCodes()
                        });
                    e.render()
                }
                return this
            },
            renderModerators: function() {
                e.each(this.board.collection.models, this.renderModerator, this)
            },
            renderModerator: function(n) {
                var e = this.$el.find(".moderator-list"),
                    t = {
                        model: n,
                        parent: e,
                        editable: this.canEdit()
                    };
                n = this.board.isOwner(n) ? new i(t) : new a(t), n.render()
            },
            canEdit: function() {
                return u.isAuthenticated() && (u.get("isModerator") || this.board.isOwner(u)) ? !0 : !1
            }
        });
        return e.extend(T.prototype, d), e.extend(T.prototype, N), T
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(9), t(130), t(129)], r = function(n, e, t, o, r, i) {
        "use strict";
        var a = t.View.extend({
            Template: r["app/apollo_widgets/board_moderators/templates/moderator.html"],
            initialize: function(n) {
                this.parent = n.parent, this.isEditable = n.editable || !1
            },
            userRevoke: function() {
                this.isEditable && (this.confirmEl().hide(), this.revokingEl().show(), t.trigger("users:removed", this.model))
            },
            confirmRevoke: function() {
                this.revokeEl().hide(), this.confirmEl().show()
            },
            revokeEl: function() {
                return this.$el.find(".revoke")
            },
            confirmEl: function() {
                return this.$el.find(".confirmRevoke")
            },
            addingEl: function() {
                return this.$el.find(".adding")
            },
            revokingEl: function() {
                return this.$el.find(".revoking")
            },
            hideConfirm: function() {
                this.confirmEl().hide(), this.revokeEl().show()
            },
            render: function() {
                this.data = this.translate(this.model.toJSON()), e.extend(this.data, {
                    avatarUrl: this.model.getAvatar()
                }), this.$el = n(this.Template(this.data));
                var t = this;
                return this.confirmEl().hide(), !this.model.get("adding") && this.isEditable ? (this.$el.find(".revoke").on("click", function() {
                    t.confirmRevoke()
                }), this.$el.find(".no").on("click", function() {
                    t.hideConfirm()
                }), this.$el.find(".yes").on("click", function() {
                    t.userRevoke()
                }), this.$el.find(".confirmRevoke").hide(), this.addingEl().hide(), this.revokingEl().hide()) : (this.revokeEl().hide(), this.revokingEl().hide(), this.model.get("adding") && this.addingEl().show()), this.parent.append(this.$el), this
            }
        });
        return e.extend(a.prototype, i), a
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(9), t(130), t(129)], r = function(n, e, t, o, r, i) {
        "use strict";
        var a = t.View.extend({
            Template: r["app/apollo_widgets/board_moderators/templates/owner.html"],
            initialize: function(n) {
                this.parent = n.parent
            },
            render: function() {
                var t = this.translate(this.model.toJSON());
                e.extend(t, {
                    avatarUrl: this.model.getAvatar()
                });
                var o = n(this.Template(t));
                return this.parent.append(o), this
            }
        });
        return e.extend(a.prototype, i), a
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(3)], r = function(n) {
        "use strict";
        var e = n.Model.extend({
            defaults: {
                canMod: !1,
                reportCount: 0,
                boardsUri: "",
                feedbackUrl: !1
            }
        });
        return e
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    __WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return this.JST = this.JST || {}, this.JST["app/apollo_widgets/board_navigation/templates/widget.html"] = function(obj) {
            function print() {
                __p += __j.call(arguments, "")
            }
            obj || (obj = {});
            var __t, __p = "",
                __j = (_.escape, Array.prototype.join);
            with(obj) __p += '<nav class="apollo-board-navigation">\n  <p>' + (null == (__t = i18n.strings.NAVIGATION) ? "" : __t) + '</p>\n  <ul>\n    <li><a href="' + (null == (__t = links.DISCUSSION) ? "" : __t) + '">' + (null == (__t = i18n.strings.DISCUSSION) ? "" : __t) + '</a></li>\n    <li><a href="' + (null == (__t = links.ABOUT) ? "" : __t) + '">' + (null == (__t = i18n.strings.ABOUT) ? "" : __t) + "</a></li>\n    ", canMod && (__p += '\n    <li><a href="' + (null == (__t = links.REPORTS) ? "" : __t) + '">', print(i18n.strings.REPORTS_WITH_COUNT.replace("%d", reportCount)), __p += '</a></li>\n    <li><a href="' + (null == (__t = links.ACTIVITY) ? "" : __t) + '">' + (null == (__t = i18n.strings.ACTIVITY) ? "" : __t) + "</a></li>\n    "), __p += "\n    ", feedbackUrl && (__p += '\n    <li><a href="' + (null == (__t = feedbackUrl) ? "" : __t) + '">' + (null == (__t = i18n.strings.FEEDBACK) ? "" : __t) + "</a></li>\n    "), __p += "\n  </ul>\n</nav>\n";
            return __p
        }, this.JST
    }.call(exports, __webpack_require__, exports, module), !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(204), t(7)], r = function(n, e, t, o, r) {
        "use strict";
        var i = t.View.extend({
            WidgetTemplate: o["app/apollo_widgets/board_navigation/templates/widget.html"],
            initialize: function() {},
            templateData: function() {
                var n = this.model.toJSON();
                return n.baseUri = n.boardsUri + this.board.boardsUri(), n.links = {
                    DISCUSSION: n.baseUri,
                    ABOUT: n.baseUri + "/about",
                    REPORTS: n.baseUri + "/reports",
                    ACTIVITY: n.baseUri + "/activity"
                }, n.i18n = {
                    strings: r.getCurrentCultureMessages()
                }, n
            },
            render: function() {
                var n = this.templateData(),
                    e = this.WidgetTemplate(n);
                return this.$el.html(e), this
            }
        });
        return i
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    __WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return this.JST = this.JST || {}, this.JST["app/apollo_widgets/board_pin/templates/board_pin.html"] = function(obj) {
            obj || (obj = {});
            var __t, __p = "";
            _.escape;
            with(obj) __p += "<button class='pinToggle' data-applicationId='" + (null == (__t = applicationId) ? "" : __t) + "'>" + (null == (__t = i18n.strings[status]) ? "" : __t) + "</button>";
            return __p
        }, this.JST
    }.call(exports, __webpack_require__, exports, module), !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(70), t(8), t(126), t(127), t(206)], r = function(n, e, t, o, r, i, a, s) {
        "use strict";
        var E = t.View.extend({
            PinTemplate: s["app/apollo_widgets/board_pin/templates/board_pin.html"],
            tagName: "div",
            className: "riot-board-pin",
            initialize: function(n) {
                n = n || {}, this.listenTo(i, "add create remove reset sync", this._updateBoardPin), this.listenTo(t, "board:pinned", this._updateBoardPin), this.listenTo(t, "board:unpinned", this._updateBoardPin), this.boardPin = new o(n.boardPinJSON), i.fetch()
            },
            events: {
                "click button.pinToggle": "pinToggle"
            },
            pinToggle: function() {
                this.boardPin.toggle(), this.render()
            },
            _updateBoardPin: function(n) {
                this.boardPin.isPinned = i.hasModel(this.boardPin), this.render()
            },
            render: function() {
                if (this.canPin()) {
                    var n = this.translate(e.merge(this.boardPin.toJSON(), {
                            status: this.status()
                        })),
                        t = this.PinTemplate(n);
                    this.$el.html(t)
                } else this.$el.html("");
                return this
            },
            canPin: function() {
                return r.isAuthenticated()
            },
            status: function() {
                return this.boardPin.isPinned ? "UNPIN" : "PIN"
            }
        });
        return e.extend(E.prototype, a), E
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(3), t(14)], r = function(n, e, t) {
        "use strict";
        var o = e.View.extend({
            events: {
                "modal:show": "show",
                "modal:hide": "hide"
            },
            render: function() {},
            show: function() {
                t.showModal(this.$el)
            },
            hide: function() {
                t.hideModal(this.$el)
            }
        });
        return o
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(70), t(126), t(127), t(178)], r = function(n, e, t, o, r, i, a) {
        "use strict";
        var s = t.View.extend({
            PinTemplate: a["app/apollo_widgets/pinned_boards/templates/board_pin.html"],
            initialize: function(n) {
                n = n || {}, this.boardPin = n.boardPin, this.$el = n.$el
            },
            render: function() {
                var n = {
                        url: "/en/c/" + this.boardPin.get("shortName")
                    },
                    t = this.PinTemplate(e.extend(this.boardPin.toJSON(), n));
                return this.$el.append(t), this
            }
        });
        return e.extend(s.prototype, i), s
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(209), t(70), t(8), t(126), t(127), t(178)], r = function(n, e, t, o, r, i, a, s, E) {
        "use strict";
        var _ = t.View.extend({
            PinnedBoardsTemplate: E["app/apollo_widgets/pinned_boards/templates/pinned_boards.html"],
            tagName: "div",
            className: "riot-pinned-boards",
            initialize: function(n) {
                n = n || {}, this.listenTo(a, "sync", this.render), this.listenTo(t, "board:pinned", this.render), this.listenTo(t, "board:unpinned", this.render), a.fetch()
            },
            render: function() {
                return this._canPin() && this._hasPins() ? (this.renderContainer(), this.renderPinnedBoards()) : this.$el.html(""), this
            },
            renderContainer: function() {
                var n = this.translate(a.toJSON()),
                    e = this.PinnedBoardsTemplate(n);
                return this.$el.html(e), this
            },
            renderPinnedBoards: function() {
                var n = this.$el.find("ul.pinned-board-list");
                n.html(""), a.each(function(e) {
                    var t = new o({
                        boardPin: e,
                        $el: n
                    });
                    t.render()
                })
            },
            _canPin: function() {
                return i.isAuthenticated()
            },
            _hasPins: function() {
                return a.models.length > 0
            }
        });
        return e.extend(_.prototype, s), _
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(5), t(1), t(2), t(3), t(6), t(179), t(16)], r = function(n, e, t, o, r, i, a) {
        "use strict";
        var s = o.Collection.extend({
            model: i,
            receiptsurl: n.services.messaging.uri + "receipts",
            unreadurl: n.services.messaging.uri + "messages?read_state=unread&count=true",
            authtoken: r.Sandworm.getRegion().toUpperCase() + ":" + a.getCookie("PVPNET_TOKEN_" + r.Sandworm.getRegion().toUpperCase()),
            limit: n.services.messaging.limit || 10,
            getReadState: n.services.messaging.getReadState || "all",
            status: {
                loaded: !1,
                nextOffset: 0,
                initialTotal: 0,
                remaining: 0,
                ignorecount: 0,
                unreadCount: 0
            },
            url: function() {
                return n.services.messaging.uri + "messages?read_state=" + this.getReadState + "&limit=" + this.limit + "&offset=" + this.status.nextOffset
            },
            parse: function(n) {
                this.status.serverTotal = n.total - this.status.ignorecount, this.status.loaded ? this.status.ignorecount = n.total - this.status.initialTotal : (this.status.initialTotal = n.total, this.status.loaded = !0);
                var t;
                if (n.messages)
                    for (t = 0; t < n.messages.length; ++t) "read" === n.messages[t].readState && (n.messages[t].isRead = !0), n.messages[t].fromRegion = n.messages[t].from.region, n.messages[t].fromName = n.messages[t].from.name, n.messages[t].publishedAtStamp = n.messages[t].publishedAt, n.messages[t].publishedAt = e.timeago(n.messages[t].publishedAtStamp), n.messages[t].fromAvatar = "https://avatar.leagueoflegends.com/" + n.messages[t].fromRegion + "/" + n.messages[t].fromName + ".png", n.messages[t].fromGroup = "riot", ("riot_mod_action" === n.messages[t].messageType || "riot_official" === n.messages[t].messageType) && (n.messages[t].fromName = "Riot Games", n.messages[t].fromRegion = "", n.messages[t].fromAvatar = "https://cdn.leagueoflegends.com/apollo/assets/riot-fist-transparent.png"), this.push(n.messages[t]);
                return this.status.remaining = this.status.initialTotal - this.models.length, this.status.nextOffset = this.models.length + this.status.ignorecount, this.models
            },
            fetchUnreadCount: function(n) {
                var t = this;
                e.ajax({
                    url: t.unreadurl,
                    type: "GET",
                    dataType: "json",
                    async: !0,
                    beforeSend: function(n) {
                        n.setRequestHeader("Content-Type", "application/json"), n.setRequestHeader("X-PVPNET", t.authtoken)
                    },
                    success: function(o) {
                        t.status.unreadCount = o.total, e.isFunction(n) && n(o.total)
                    }
                })
            },
            markRead: function(n) {
                if ("object" != typeof n || n.length < 1) return !1;
                var t, o = [],
                    r = this;
                for (t = 0; t < n.length; t++) o.push({
                    id: n[t]
                });
                if (o.length > 0) {
                    var i = this.receiptsurl;
                    e.ajax({
                        url: i,
                        type: "POST",
                        dataType: "json",
                        async: !0,
                        processData: !1,
                        data: JSON.stringify({
                            message_ids: o
                        }),
                        beforeSend: function(n) {
                            n.setRequestHeader("Content-Type", "application/json"), n.setRequestHeader("X-PVPNET", r.authtoken)
                        },
                        success: function(n) {
                            r.status.unreadCount = r.status.unreadCount - o.length, r.status.unreadCount < 0 && (r.status.unreadCount = 0), r.trigger("inboxStatusUpdate")
                        }
                    })
                }
            }
        });
        return s
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(73), t(7), t(180)], r = function(n, e, t, o, r, i) {
        "use strict";
        var a = t.View.extend({
            modalTemplate: o["app/apollo_widgets/player_messaging/templates/messagebox_modal.html"],
            template: e.template('<a href="javascript:;"><span class="fn-player-messages-unread"><%= total %></span></a>'),
            inboxView: null,
            events: {
                click: "respondToClick"
            },
            initialize: function() {
                this.listenTo(this.collection, "inboxStatusUpdate", this.heardInboxStatusChanged)
            },
            heardInboxStatusChanged: function() {
                this.$el.find(".fn-player-messages-unread").html(this.collection.status.unreadCount)
            },
            render: function() {
                var t = {
                    i18n: {
                        strings: r.getCurrentCultureMessages()
                    }
                };
                return this.$el.html(this.template(e.merge(t, {
                    total: this.collection.status.unreadCount
                }))), n("body").append(this.modalTemplate(t)), this
            },
            respondToClick: function() {
                null === this.inboxView ? (this.inboxView = new i({
                    collection: this.collection,
                    isModal: !0
                }), this.inboxView.setElement(n("#riot-apollo-messaging-modal")), this.inboxView.render()) : this.inboxView.showModal()
            }
        });
        return a
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(73), t(7)], r = function(n, e, t, o, r) {
        "use strict";
        var i = t.View.extend({
            template: o["app/apollo_widgets/player_messaging/templates/list_view.html"],
            itemtemplate: o["app/apollo_widgets/player_messaging/templates/list_item.html"],
            listcontainer: ".player-messaging-list-item-view",
            events: {
                "click div.entry": "respondToListClick",
                "click .button": "respondToShowMoreClick",
                "click .messaging-header h1": "respondToHeaderClick"
            },
            initialize: function() {
                this.listenTo(this.collection, "change:isActive", this.heardIsActiveChanged), this.listenTo(this.collection, "change:isRead", this.heardIsReadChanged)
            },
            render: function() {
                var n = {
                        i18n: {
                            strings: r.getCurrentCultureMessages()
                        },
                        isModal: this.isModal
                    },
                    t = e.template(this.template(e.merge(n, {
                        totalUnread: this.collection.status.unreadCount,
                        initialTotal: this.collection.status.initialTotal
                    })));
                return this.$el.html(t), this.renderChildren(), this
            },
            renderChildren: function() {
                var t, o = this,
                    r = document.createDocumentFragment(),
                    i = document.createElement("div");
                e.each(this.collection.models, function(a) {
                    var s = o.$el.find('li[data-id="' + a.id + '"]').length;
                    if (!s)
                        for (n(i).html(e.template(o.itemtemplate({
                                message: a
                            }))); t = i.firstChild;) r.appendChild(t)
                });
                var a = n(this.listcontainer, this.$el).find(".show-more-row");
                a.before(r), this.collection.status.remaining > 0 ? a.show() : a.hide()
            },
            respondToShowMoreClick: function(n) {
                n.preventDefault(), n.stopPropagation();
                var e = this;
                this.collection.fetch({
                    headers: {
                        "Content-Type": "application/json",
                        "X-PVPNET": this.collection.authtoken
                    },
                    success: function(n, t) {
                        e.renderChildren()
                    },
                    error: function() {}
                })
            },
            respondToListClick: function(e) {
                var t = this.getModel(n(e.currentTarget).closest("li")),
                    o = this.collection.findWhere({
                        isActive: !0
                    });
                o && o !== t && o.set("isActive", !1), t.set("isActive", !0)
            },
            heardIsActiveChanged: function(n) {
                n.get("isActive") ? this.getDomObj(n).addClass("active") : this.getDomObj(n).removeClass("active"), n.set("isRead", !0)
            },
            heardIsReadChanged: function(n) {
                var e = this.getDomObj(n);
                if (e.hasClass("unread")) {
                    this.getDomObj(n).removeClass("unread");
                    var t = [];
                    t.push(n.id), this.collection.markRead(t)
                }
            },
            getModel: function(e) {
                return this.collection.get(n(e).attr("data-id"))
            },
            getDomObj: function(e) {
                return n('li[data-id="' + e.get("id") + '"]', this.$el)
            }
        });
        return i
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(73), t(7), t(30)], r = function(n, e, t, o, r, i) {
        "use strict";
        var a = t.View.extend({
            template: o["app/apollo_widgets/player_messaging/templates/reading_view.html"],
            initialize: function() {
                this.listenTo(this.collection, "change:isActive", this.heardIsActiveChanged)
            },
            render: function() {
                var n = {
                        i18n: {
                            strings: r.getCurrentCultureMessages()
                        }
                    },
                    t = this.collection.findWhere({
                        isActive: !0
                    });
                if (t) {
                    this.$el.removeClass("empty");
                    var o = new i;
                    t.get("body") && !t.get("parsed") && (t.set("body", o.parse(t.get("body"))), t.set("parsed", !0));
                    var a = e.template(this.template(e.merge(n, {
                        message: t
                    })));
                    this.$el.html(a)
                }
                return this
            },
            heardIsActiveChanged: function(n) {
                n.get("isActive") && this.render()
            }
        });
        return a
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r, i;
    ! function(a, s) {
        "use strict";
        r = [t(1)], o = s, i = "function" == typeof o ? o.apply(e, r) : o, !(void 0 !== i && (n.exports = i))
    }(this, function(n) {
        "use strict";
        n.athenaInstances = function() {
            return n(".riot_apollo[data-apollo-widget='polls']")
        }, n.fn.athenaInstances = function() {
            return this.find(".riot_apollo[data-apollo-widget='polls']")
        }, n.fn.athenaObject = function() {
            return this.data("poll-proxy")
        }
    })
}, function(n, e, t) {
    var o, r;
    o = [t(3)], r = function(n) {
        "use strict";
        var e = n.Model.extend({
            initialize: function() {},
            parse: function() {}
        });
        return e
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(36), t(72), t(181), t(219)], r = function(n, e, t, o, r, i, a) {
        "use strict";
        var s = t.Model.extend({
            defaults: {
                sortBy: "selectionCount",
                parentFormField: null,
                selectionCompleted: !1,
                selectionLimit: 1
            },
            initialize: function() {
                this.createAssociations()
            },
            isEmpty: function() {
                return e.isEmpty(this.get("subject")) && 0 === this.choices.length ? !0 : !1
            },
            validate: function(n) {
                return e.isEmpty(n.subject) ? (o.log("Poll: Subject is invalid"), "subject") : this.choices.length < 2 ? (o.log("Poll: Requires two or more choices"), "choices") : void 0
            },
            parse: function(n) {
                var e;
                return n.poll ? (e = n.poll, this.createAssociations(), this.choices.reset(n.poll.choices)) : e = n.id ? {
                    id: n.id
                } : this.attributes, e
            },
            clear: function() {
                this.choices = new i, this.set("subject", "")
            },
            sync: function(n, e, o) {
                var i = r.getAuthToken();
                return i && (o.url = this.urlRoot + "/" + this.id, o.headers = {
                    "X-PVPNET": i
                }), t.sync(n, e, o)
            },
            createAssociations: function() {
                this.choices = this.choices || new i, this.selection = this.selection || new a({
                    poll: this
                })
            },
            applySelectionToChoices: function(n) {
                var e = this;
                this.get("selectionCompleted") === !1 && this.selection.choices.length > 0 && (this.choices.each(function(t) {
                    var o = e.selection.choices.find(function(n) {
                        return n.get("id") === t.get("id")
                    });
                    return o ? t.set("selected", !0) : t.set("selected", !1), o && n && t.set("selectionCount", t.get("selectionCount") + 1), t
                }), n && this.set("selectionCount", this.get("selectionCount") + 1), this.set("selectionCompleted", !0))
            },
            toJSON: function() {
                var n = e.clone(this.attributes);
                return n.choices = this.choices.toJSON(), n.selection = this.selection.toJSON(), n
            }
        });
        return s
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(4)], r = function(n) {
        "use strict";
        var e = function() {
            var n = function() {
                this.poll = void 0, this.view = void 0
            };
            return n.prototype = {
                initialize: function(n, e) {
                    this.poll = n, this.pollView = e
                },
                isValid: function() {
                    return this.poll.isValid()
                },
                isEmpty: function() {
                    return this.poll.isEmpty()
                },
                clear: function() {
                    this.poll.clear()
                },
                save: function(n) {
                    return n = n || {}, n.success || (n.success = function(n, e, t) {}), n.error || (n.error = function(n, e, t) {}), this.pollView.trigger("submit", null, n)
                }
            }, n
        }();
        return e
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(72), t(36), t(15), t(181)], r = function(n, e, t, o, r, i, a) {
        "use strict";
        var s = t.Model.extend({
            initialize: function(n) {
                n && n.poll && (this.poll = n.poll), this.createAssociations()
            },
            validate: function(n) {
                return this.choices.length < 1 || this.choices.length > this.poll.attributes.selectionLimit ? (r.log("Selection: Invalid number of choices selected"), "choices") : void 0
            },
            createAssociations: function() {
                this.choices = this.choices || new a
            },
            defaults: {
                choices: []
            },
            cache: new i.Store("Athena:Selection"),
            urlRoot: function() {
                var n = "";
                return this.poll && this.poll.url() && (n += this.poll.url()), n += "/selections"
            },
            setChoices: function(n) {
                for (var e = [], t = 0; t < n.length; t++) {
                    var o = parseInt(n[t], 10);
                    e.push({
                        id: o
                    })
                }
                return this.choices.reset(e), !0
            },
            parse: function(n, e) {
                if (e.parse === !1) return this.attributes;
                var t = n.selection;
                return this.createAssociations(), this.choices.reset(t.choices), t
            },
            sync: function(n, e, i) {
                var a = this,
                    s = o.getAuthToken();
                if (!s) return i.error && i.error();
                if (i.headers = {
                        "X-PVPNET": s
                    }, "read" !== n) return this.cache.flush(), t.sync(n, e, i);
                var E = e.poll.attributes,
                    _ = "Fetch:Response:" + E.id + ":" + s;
                if (E.hasOwnProperty("reselectInterval") && E.hasOwnProperty("reselectType") && E.hasOwnProperty("reselectStartTime")) {
                    var l = Date.now() - E.reselectStartTime,
                        O = Math.floor(l / E.reselectInterval);
                    _ = _ + ":round-" + O
                }
                var u = this.cache.get(_);
                if (u) return "success" === u.status ? (r.log("Got selection result from cache: " + _), i.success && i.success(u.data)) : i.error && i.error(u.status);
                var R = i.success || function() {};
                i.success = function(n, e, t) {
                    a.cache.set(_, {
                        status: e,
                        data: n
                    }), R(n, e, t)
                };
                var d = i.error || function() {};
                return i.error = function(n, e, t) {
                    console.log(t), a.cache.set(_, {
                        status: e,
                        data: null
                    }), d(n, e, t)
                }, t.sync(n, e, i)
            },
            toJSON: function() {
                var n = e.clone(this.attributes);
                return n.choices = this.choices.toJSON(), delete n.poll, n
            }
        });
        return s
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(5), t(1), t(2), t(3), t(36), t(72), t(182), t(7)], r = function(n, e, t, o, r, i, a, s) {
        "use strict";
        var E = s.getCurrentCultureMessages(),
            _ = o.View.extend({
                template: a["app/apollo_widgets/polls/templates/create.html"],
                events: {
                    "click a": "respondToAddChoice",
                    "click button": "respondToSubmit",
                    "change input": "respondToContentChanged",
                    "change textarea": "respondToContentChanged"
                },
                initialize: function() {
                    t.bindAll(this, "render", "respondToAddChoice", "respondToSubmit", "respondToInvalid", "updateExternalIdMemoSelector"), this.listenTo(this, "submit", this.respondToSubmit), this.listenTo(this.model, "invalid", this.respondToInvalid), this.listenTo(this.model, "sync", this.updateExternalIdMemoSelector)
                },
                render: function() {
                    return i.authenticated() ? (this.$el.html(this.template({
                        embedded: this.model.get("externalIdMemoSelector"),
                        i18n: E
                    })), this.$el.trigger("rendered"), this) : (r.log("Must be authenticated to create polls"), this)
                },
                respondToAddChoice: function(t) {
                    var o = this.$el.find("ol li").length;
                    if (o >= n.services.polls.choiceLimit) {
                        var r = E.TOO_MANY_CHOICES.replace("%limit%", n.services.polls.choiceLimit);
                        window.alert(r)
                    } else e("<li><input maxlength='30' type='text'></li>").appendTo(this.$el.find("ol"))
                },
                respondToContentChanged: function(n) {
                    var t = [];
                    this.$el.find("ol input").each(function(n, o) {
                        var r = e(o).val().replace(/^\s+|\s+$/g, "");
                        r && t.push({
                            id: n,
                            position: n,
                            content: r
                        })
                    }), this.model.choices.reset(t);
                    var o = this.$el.find("textarea").val() || "";
                    o = o.replace(/^\s+|\s+$/g, ""), this.model.set("subject", o);
                    var r = this.$el.find("input.datepicker").val() || "",
                        i = new Date(r.replace(/^\s+|\s+$/g, ""));
                    this.model.set("activeUntil", i.toUTCString())
                },
                respondToSubmit: function(n, e) {
                    n && n.preventDefault(), e = e || {}, this.$el.addClass("saving"), r.log("Saving Poll"), this.model.save(null, e)
                },
                respondToInvalid: function(n, e) {
                    this.$el.removeClass(function(n, e) {
                        var t = e.match(/\S*error\S*/g);
                        return t ? t.join(" ") : !1
                    }), this.$el.addClass("error-" + e)
                },
                updateExternalIdMemoSelector: function() {
                    var n = this,
                        t = this.model.get("externalIdMemoSelector");
                    return t ? (r.log("Poll: Updating external memo IDs"), void e(t).val(n.model.get("id"))) : (r.log("Poll: No external memo ID"), !1)
                }
            });
        return _
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(36), t(72), t(182), t(7)], r = function(n, e, t, o, r, i, a) {
        "use strict";
        var s = t.View.extend({
            createTemplate: i["app/apollo_widgets/polls/templates/selectionCreate.html"],
            resultTemplate: i["app/apollo_widgets/polls/templates/selectionResult.html"],
            events: {
                "click button": "respondToSubmit",
                "click input[type=radio]": "respondToSingleSelection",
                "click input[type=checkbox]": "respondToMultiSelection"
            },
            initialize: function() {
                e.bindAll(this, "render", "respondToSubmit", "respondToInvalid")
            },
            startListening: function() {
                this.listenTo(this.model, "change", this.render), this.listenTo(this.model.selection, "sync", this.render), this.listenTo(this.model, "invalid", this.respondToInvalid)
            },
            render: function() {
                o.log("Rendering Show Poll Form", this.model.toJSON());
                var n = this.model.toJSON();
                n.authenticated = r.authenticated(), n.barGraphMax = e.chain(n.choices).pluck("selectionCount").max().value(), n.i18n = a.getCurrentCultureMessages();
                var t;
                return n.selectionCompleted ? (t = this.resultTemplate, this.$el.trigger("renderedShowResult")) : (t = this.createTemplate, this.$el.trigger("renderedShowCreate")), this.$el.html(t(n)), this.$el.trigger("rendered"), this
            },
            respondToSubmit: function(n, e) {
                o.log("submitting poll");
                var t = this;
                return n && n.preventDefault(), r.authenticated() ? (this.$el.addClass("saving"), e = e || {}, e.parse = !1, e.success = function(n) {
                    t.model.applySelectionToChoices(!0), t.$el.trigger("selectionSaved"), t.$el.removeClass("saving")
                }, o.log("Saving Selection"), void this.model.selection.save(null, e)) : (window.Riot && window.Riot.Sandworm && window.Riot.Sandworm.pvpnetMenus.show("login"), !0)
            },
            respondToSingleSelection: function(e) {
                this.$el.find("input").not(e.currentTarget).prop("checked", !1).removeClass("selected");
                var t = n(e.currentTarget),
                    r = t.val();
                t.addClass("selected"), t.trigger("selection", r), o.log("Choice Selected: " + r), this.model.selection.setChoices([r])
            },
            respondToMultiSelection: function(e) {
                var t = this.model.toJSON(),
                    r = n(e.currentTarget),
                    i = n.map(this.$el.find("input:checked"), function(e) {
                        return n(e).val()
                    });
                r.toggleClass("selected"), o.log("Choice Clicked: " + r.val()), this.model.selection.setChoices(i), this.model.selection.choices.length >= t.selectionLimit ? this.$el.find("input").not(":checked").prop("disabled", !0).removeClass("selected") : this.$el.find("input").prop("disabled", !1)
            },
            respondToInvalid: function(n, e) {
                this.$el.removeClass(function(n, e) {
                    var t = e.match(/\S*error\S*/g);
                    return t ? t.join(" ") : !1
                }), this.$el.addClass("error-" + e)
            }
        });
        return s
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    __WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return this.JST = this.JST || {}, this.JST["app/apollo_widgets/profile_hover/templates/profile_hover.html"] = function(obj) {
            obj || (obj = {});
            var __t, __p = "";
            _.escape, Array.prototype.join;
            with(obj) __p += '<div class="top">\n  <div class="full-summoner-icon">\n    <img src=\'https://avatar.leagueoflegends.com/' + (null == (__t = realm) ? "" : __t) + "/" + (null == (__t = name) ? "" : __t) + '.png\'/>\n  </div>\n  <div class="inner-content">\n    <div class="badges', badges.length > 0 && (__p += " shown"), __p += '">\n    ', badges.length > 0 && (__p += "\n        ", _.each(badges, function(n) {
                __p += "\n          <span class='badge " + (null == (__t = n) ? "" : __t) + "'></span>\n        "
            }), __p += "\n    "), __p += '\n    </div>\n    <div class="information-container">\n      <div classs="information">\n        <h5 class="summoner-name ', isHuHu && (__p += "hu-HU "), __p += '">' + (null == (__t = name) ? "" : __t) + "</h5>\n        ", groupName ? (__p += '\n          <p class="title"', groupColor.length > 0 && (__p += ' style="color:' + (null == (__t = groupColor) ? "" : __t) + ';"'), __p += ">\n            " + (null == (__t = groupName) ? "" : __t) + "\n          </p>\n        ") : __p += '\n          <p class="title">\n            ' + (null == (__t = title) ? "" : __t) + "\n          </p>\n        ", __p += '\n        <p class="realm-and-level">\n          ' + (null == (__t = i18n.strings.LEVEL_REGION.replace("%level%", lolSummonerLevel).replace("%region%", realmTrans)) ? "" : __t) + '\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n<div class="arrow"></div>\n';
            return __p
        }, this.JST
    }.call(exports, __webpack_require__, exports, module), !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
}, function(n, e, t) {
    var o, r;
    o = [t, t(1), t(2), t(3), t(222), t(7), t(6)], r = function(n, e, t, o, r, i, a) {
        "use strict";
        var s = i.getCurrentCultureMessages(),
            E = o.View.extend({
                tagName: "div",
                className: function() {
                    return "profile-hover " + this.model.get("team")
                },
                events: {
                    mouseenter: "show",
                    mouseleave: "hide"
                },
                template: r["app/apollo_widgets/profile_hover/templates/profile_hover.html"],
                renderedTemplate: null,
                render: function() {
                    return this.model.get("loaded") ? (this.renderTooltip(), this.renderPosition(), this.renderVisibility(), this) : this
                },
                renderTooltip: function() {
                    if (this.$tooltipEl) return this;
                    var n = this.model.toJSON();
                    n.i18n = {
                        strings: s
                    }, n.isHuHu = "hu_HU" === a.Sandworm.getLang() ? !0 : !1;
                    var t = this.template(n);
                    return this.$tooltipEl = e("<div></div>").addClass("riot-apollo profile-hover").addClass(this.model.get("team")).html(t), e("body").append(this.$tooltipEl), this
                },
                renderPosition: function() {
                    var n = this.$el.offset(),
                        e = n.left + .5 * this.$el.innerWidth() - .5 * this.$tooltipEl.innerWidth(),
                        t = n.top - this.$el.innerHeight() - this.$tooltipEl.innerHeight();
                    return this.$tooltipEl.show().offset({
                        left: e,
                        top: t
                    }).hide(), this
                },
                renderVisibility: function() {
                    var n = this;
                    return this.model.get("visible") === !0 ? this.$tooltipEl.stop().fadeIn("100") : this.$tooltipEl.stop().fadeOut("100", function() {
                        n.model.set("visible", !1), n.$tooltipEl.remove(), delete n.$tooltipEl
                    }), this
                },
                show: function(n) {
                    var e = this;
                    this.model.set("visible", !0), this.model.get("loaded") ? this.render() : this.model.fetch({
                        success: function(n) {
                            n.set("loaded", !0), e.render()
                        }
                    })
                },
                hide: function(n) {
                    window.APOLLO_TOOLTIPS_NOHIDE || (this.model.set("visible", !1), this.$tooltipEl && this.renderVisibility())
                }
            });
        return E
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(n, e, t) {
    var o, r;
    o = [t(1), t(2), t(3), t(4), t(8), t(10), t(31), t(16), t(6)], r = function(n, e, t, o, r, i, a, s, E) {
        "use strict";
        var _ = t.Model.extend({
            defaults: {
                id: "",
                name: "",
                realm: "",
                isRioter: !1,
                authorUserId: "",
                authorIsRioter: !1,
                objectId: ""
            },
            initialize: function() {
                this.updateVoteState()
            },
            urlRoot: function() {
                return "applications/" + this.get("applicationId") + "/discussions/" + this.get("discussionId") + "/"
            },
            url: function() {
                var n = e.result(this, "urlRoot");
                return this.get("commentId") && (n = n + "comment/" + this.get("commentId") + "/"), n
            },
            fetch: function(n) {
                return n = n || {}, n.data = n.data || {
                    include_profile: "true"
                }, t.Model.prototype.fetch.call(this, n)
            },
            parse: function(n) {
                var e = {};
                e.isRioter = n.user.isRioter ? "1" : "0";
                var t = null;
                return this.get("commentId") ? (t = n.user, e.objectId = this.get("applicationId") + "_" + this.get("discussionId") + "_" + n.id) : (t = n.discussion.user, e.objectId = n.discussion.application.id + "_" + n.discussion.id), t && (e.authorUserId = t.realm + "_" + t.id, e.authorIsRioter = t.isRioter ? "1" : "0"), e
            },
            sync: function(n, e, t) {
                if ("read" !== n) return void o.error("ApolloJS: " + n.toUpperCase() + " not yet been implemented");
                this.httpGet(e.url(), t.data, function(n) {
                    t.success(n)
                })
            },
            getDradisParams: function() {
                var n, e;
                return this.get("commentId") ? (e = "comment", n = this.get("applicationId") + "_" + this.get("discussionId") + "_" + this.get("commentId")) : (e = "discussion", n = this.get("applicationId") + "_" + this.get("discussionId")), {
                    pii: {
                        "event.object_author": this.get("authorUserId")
                    },
                    "event.object_type": e,
                    "event.object_author_isRioter": this.get("authorIsRioter"),
                    "event.object_id": n
                }
            }
        });
        return e.extend(_.prototype, i), e.extend(_.prototype, a), _
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    __WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return this.JST = this.JST || {}, this.JST["app/apollo_widgets/voting/templates/votable_item.html"] = function(obj) {
            obj || (obj = {});
            var __t, __p = "";
            _.escape;
            with(obj) __p += "<li>\n  <button class='up-vote'></button>\n</li>\n<li class='total-votes'> " + (null == (__t = totalVotesHuman) ? "" : __t) + " </li>\n<li>\n  <button class='down-vote'></button>\n</li>\n";
            return __p
        }, this.JST
    }.call(exports, __webpack_require__, exports, module), !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
}, function(n, e, t) {
    var o, r;
    o = [t, t(1), t(2), t(3), t(225), t(7), t(8), t(195), t(32)], r = function(n, e, t, o, r, i, a, s, E) {
        "use strict";
        var _ = i.getCurrentCultureMessages(),
            l = o.View.extend({
                initialize: function() {
                    t.bindAll(this, "render", "renderAlert", "renderBody", "renderModelState", "respondToUpVote", "respondToDownVote"),
                        this.model.on("change:lastError", this.renderAlert), this.model.on("change:userVote", this.renderModelState), this.model.on("change:upVoted", this.renderModelState), this.model.on("change:downVoted", this.renderModelState), this.model.on("change:totalVotes", this.renderModelState)
                },
                tagName: "ul",
                className: function() {
                    var n = "riot-voting ";
                    return n += a.isAuthenticated() ? "authenticated" : ""
                },
                events: {
                    "click button.up-vote": "respondToUpVote",
                    "click button.down-vote": "respondToDownVote"
                },
                template: r["app/apollo_widgets/voting/templates/votable_item.html"],
                respondToDownVote: function(n) {
                    this.lastClickTarget = n.currentTarget;
                    var e = this;
                    a.isAuthenticated() ? this.model.fetch({
                        success: function() {
                            e.model.vote("down")
                        }
                    }) : Riot.Sandworm.pvpnetMenus.show("login")
                },
                respondToUpVote: function(n) {
                    var e = this;
                    this.lastClickTarget = n.currentTarget, a.isAuthenticated() ? this.model.fetch({
                        success: function() {
                            e.model.vote("up")
                        }
                    }) : Riot.Sandworm.pvpnetMenus.show("login")
                },
                render: function() {
                    return this.renderBody(), this.renderModelState(), this
                },
                renderBody: function() {
                    var n = this.model.toJSON();
                    n.i18n = {
                        strings: _
                    };
                    var e = this.template(n);
                    return this.$el.html(e), this
                },
                renderModelState: function() {
                    this.renderBooleanAttributeAsElementClass("upVoted"), this.renderBooleanAttributeAsElementClass("downVoted");
                    var n = this.model.get("totalVotesHuman");
                    return this.$el.find(".total-votes").html(n), this
                }
            });
        return t.extend(l.prototype, s), t.extend(l.prototype, E), l
    }.apply(e, o), !(void 0 !== r && (n.exports = r))
}]));