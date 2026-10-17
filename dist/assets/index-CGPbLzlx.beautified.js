(function () {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload")) return;
    for (const u of document.querySelectorAll('link[rel="modulepreload"]')) s(u);
    new MutationObserver(u => {
        for (const f of u)
            if (f.type === "childList")
                for (const d of f.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && s(d)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function l(u) {
        const f = {};
        return u.integrity && (f.integrity = u.integrity), u.referrerPolicy && (f.referrerPolicy = u.referrerPolicy), u.crossOrigin === "use-credentials" ? f.credentials = "include" : u.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin", f
    }

    function s(u) {
        if (u.ep) return;
        u.ep = !0;
        const f = l(u);
        fetch(u.href, f)
    }
})();
var lo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function S3(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
var of = {
    exports: {}
}, dl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Up;

function w3() {
    if (Up) return dl;
    Up = 1;
    var n = Symbol.for("react.transitional.element"),
        i = Symbol.for("react.fragment");

    function l(s, u, f) {
        var d = null;
        if (f !== void 0 && (d = "" + f), u.key !== void 0 && (d = "" + u.key), "key" in u) {
            f = {};
            for (var p in u) p !== "key" && (f[p] = u[p])
        } else f = u;
        return u = f.ref, {
            $$typeof: n,
            type: s,
            key: d,
            ref: u !== void 0 ? u : null,
            props: f
        }
    }
    return dl.Fragment = i, dl.jsx = l, dl.jsxs = l, dl
}
var Bp;

function ag() {
    return Bp || (Bp = 1, of.exports = w3()), of.exports
}
var w = ag(),
    uf = {
        exports: {}
    },
    Ce = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pp;

function T3() {
    if (Pp) return Ce;
    Pp = 1;
    var n = Symbol.for("react.transitional.element"),
        i = Symbol.for("react.portal"),
        l = Symbol.for("react.fragment"),
        s = Symbol.for("react.strict_mode"),
        u = Symbol.for("react.profiler"),
        f = Symbol.for("react.consumer"),
        d = Symbol.for("react.context"),
        p = Symbol.for("react.forward_ref"),
        h = Symbol.for("react.suspense"),
        m = Symbol.for("react.memo"),
        y = Symbol.for("react.lazy"),
        v = Symbol.iterator;

    function b(A) {
        return A === null || typeof A != "object" ? null : (A = v && A[v] || A["@@iterator"], typeof A == "function" ? A : null)
    }
    var x = {
        isMounted: function () {
            return !1
        },
        enqueueForceUpdate: function () { },
        enqueueReplaceState: function () { },
        enqueueSetState: function () { }
    },
        T = Object.assign,
        D = {};

    function O(A, F, ue) {
        this.props = A, this.context = F, this.refs = D, this.updater = ue || x
    }
    O.prototype.isReactComponent = {}, O.prototype.setState = function (A, F) {
        if (typeof A != "object" && typeof A != "function" && A != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, A, F, "setState")
    }, O.prototype.forceUpdate = function (A) {
        this.updater.enqueueForceUpdate(this, A, "forceUpdate")
    };

    function E() { }
    E.prototype = O.prototype;

    function V(A, F, ue) {
        this.props = A, this.context = F, this.refs = D, this.updater = ue || x
    }
    var j = V.prototype = new E;
    j.constructor = V, T(j, O.prototype), j.isPureReactComponent = !0;
    var Q = Array.isArray,
        U = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        },
        M = Object.prototype.hasOwnProperty;

    function G(A, F, ue, re, ce, Oe) {
        return ue = Oe.ref, {
            $$typeof: n,
            type: A,
            key: F,
            ref: ue !== void 0 ? ue : null,
            props: Oe
        }
    }

    function Z(A, F) {
        return G(A.type, F, void 0, void 0, void 0, A.props)
    }

    function ee(A) {
        return typeof A == "object" && A !== null && A.$$typeof === n
    }

    function ie(A) {
        var F = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + A.replace(/[=:]/g, function (ue) {
            return F[ue]
        })
    }
    var ne = /\/+/g;

    function K(A, F) {
        return typeof A == "object" && A !== null && A.key != null ? ie("" + A.key) : F.toString(36)
    }

    function se() { }

    function ae(A) {
        switch (A.status) {
            case "fulfilled":
                return A.value;
            case "rejected":
                throw A.reason;
            default:
                switch (typeof A.status == "string" ? A.then(se, se) : (A.status = "pending", A.then(function (F) {
                    A.status === "pending" && (A.status = "fulfilled", A.value = F)
                }, function (F) {
                    A.status === "pending" && (A.status = "rejected", A.reason = F)
                })), A.status) {
                    case "fulfilled":
                        return A.value;
                    case "rejected":
                        throw A.reason
                }
        }
        throw A
    }

    function be(A, F, ue, re, ce) {
        var Oe = typeof A;
        (Oe === "undefined" || Oe === "boolean") && (A = null);
        var Se = !1;
        if (A === null) Se = !0;
        else switch (Oe) {
            case "bigint":
            case "string":
            case "number":
                Se = !0;
                break;
            case "object":
                switch (A.$$typeof) {
                    case n:
                    case i:
                        Se = !0;
                        break;
                    case y:
                        return Se = A._init, be(Se(A._payload), F, ue, re, ce)
                }
        }
        if (Se) return ce = ce(A), Se = re === "" ? "." + K(A, 0) : re, Q(ce) ? (ue = "", Se != null && (ue = Se.replace(ne, "$&/") + "/"), be(ce, F, ue, "", function (lt) {
            return lt
        })) : ce != null && (ee(ce) && (ce = Z(ce, ue + (ce.key == null || A && A.key === ce.key ? "" : ("" + ce.key).replace(ne, "$&/") + "/") + Se)), F.push(ce)), 1;
        Se = 0;
        var Je = re === "" ? "." : re + ":";
        if (Q(A))
            for (var Me = 0; Me < A.length; Me++) re = A[Me], Oe = Je + K(re, Me), Se += be(re, F, ue, Oe, ce);
        else if (Me = b(A), typeof Me == "function")
            for (A = Me.call(A), Me = 0; !(re = A.next()).done;) re = re.value, Oe = Je + K(re, Me++), Se += be(re, F, ue, Oe, ce);
        else if (Oe === "object") {
            if (typeof A.then == "function") return be(ae(A), F, ue, re, ce);
            throw F = String(A), Error("Objects are not valid as a React child (found: " + (F === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : F) + "). If you meant to render a collection of children, use an array instead.")
        }
        return Se
    }

    function H(A, F, ue) {
        if (A == null) return A;
        var re = [],
            ce = 0;
        return be(A, re, "", "", function (Oe) {
            return F.call(ue, Oe, ce++)
        }), re
    }

    function $(A) {
        if (A._status === -1) {
            var F = A._result;
            F = F(), F.then(function (ue) {
                (A._status === 0 || A._status === -1) && (A._status = 1, A._result = ue)
            }, function (ue) {
                (A._status === 0 || A._status === -1) && (A._status = 2, A._result = ue)
            }), A._status === -1 && (A._status = 0, A._result = F)
        }
        if (A._status === 1) return A._result.default;
        throw A._result
    }
    var oe = typeof reportError == "function" ? reportError : function (A) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var F = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof A == "object" && A !== null && typeof A.message == "string" ? String(A.message) : String(A),
                error: A
            });
            if (!window.dispatchEvent(F)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", A);
            return
        }
        console.error(A)
    };

    function ye() { }
    return Ce.Children = {
        map: H,
        forEach: function (A, F, ue) {
            H(A, function () {
                F.apply(this, arguments)
            }, ue)
        },
        count: function (A) {
            var F = 0;
            return H(A, function () {
                F++
            }), F
        },
        toArray: function (A) {
            return H(A, function (F) {
                return F
            }) || []
        },
        only: function (A) {
            if (!ee(A)) throw Error("React.Children.only expected to receive a single React element child.");
            return A
        }
    }, Ce.Component = O, Ce.Fragment = l, Ce.Profiler = u, Ce.PureComponent = V, Ce.StrictMode = s, Ce.Suspense = h, Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = U, Ce.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (A) {
            return U.H.useMemoCache(A)
        }
    }, Ce.cache = function (A) {
        return function () {
            return A.apply(null, arguments)
        }
    }, Ce.cloneElement = function (A, F, ue) {
        if (A == null) throw Error("The argument must be a React element, but you passed " + A + ".");
        var re = T({}, A.props),
            ce = A.key,
            Oe = void 0;
        if (F != null)
            for (Se in F.ref !== void 0 && (Oe = void 0), F.key !== void 0 && (ce = "" + F.key), F) !M.call(F, Se) || Se === "key" || Se === "__self" || Se === "__source" || Se === "ref" && F.ref === void 0 || (re[Se] = F[Se]);
        var Se = arguments.length - 2;
        if (Se === 1) re.children = ue;
        else if (1 < Se) {
            for (var Je = Array(Se), Me = 0; Me < Se; Me++) Je[Me] = arguments[Me + 2];
            re.children = Je
        }
        return G(A.type, ce, void 0, void 0, Oe, re)
    }, Ce.createContext = function (A) {
        return A = {
            $$typeof: d,
            _currentValue: A,
            _currentValue2: A,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, A.Provider = A, A.Consumer = {
            $$typeof: f,
            _context: A
        }, A
    }, Ce.createElement = function (A, F, ue) {
        var re, ce = {},
            Oe = null;
        if (F != null)
            for (re in F.key !== void 0 && (Oe = "" + F.key), F) M.call(F, re) && re !== "key" && re !== "__self" && re !== "__source" && (ce[re] = F[re]);
        var Se = arguments.length - 2;
        if (Se === 1) ce.children = ue;
        else if (1 < Se) {
            for (var Je = Array(Se), Me = 0; Me < Se; Me++) Je[Me] = arguments[Me + 2];
            ce.children = Je
        }
        if (A && A.defaultProps)
            for (re in Se = A.defaultProps, Se) ce[re] === void 0 && (ce[re] = Se[re]);
        return G(A, Oe, void 0, void 0, null, ce)
    }, Ce.createRef = function () {
        return {
            current: null
        }
    }, Ce.forwardRef = function (A) {
        return {
            $$typeof: p,
            render: A
        }
    }, Ce.isValidElement = ee, Ce.lazy = function (A) {
        return {
            $$typeof: y,
            _payload: {
                _status: -1,
                _result: A
            },
            _init: $
        }
    }, Ce.memo = function (A, F) {
        return {
            $$typeof: m,
            type: A,
            compare: F === void 0 ? null : F
        }
    }, Ce.startTransition = function (A) {
        var F = U.T,
            ue = {};
        U.T = ue;
        try {
            var re = A(),
                ce = U.S;
            ce !== null && ce(ue, re), typeof re == "object" && re !== null && typeof re.then == "function" && re.then(ye, oe)
        } catch (Oe) {
            oe(Oe)
        } finally {
            U.T = F
        }
    }, Ce.unstable_useCacheRefresh = function () {
        return U.H.useCacheRefresh()
    }, Ce.use = function (A) {
        return U.H.use(A)
    }, Ce.useActionState = function (A, F, ue) {
        return U.H.useActionState(A, F, ue)
    }, Ce.useCallback = function (A, F) {
        return U.H.useCallback(A, F)
    }, Ce.useContext = function (A) {
        return U.H.useContext(A)
    }, Ce.useDebugValue = function () { }, Ce.useDeferredValue = function (A, F) {
        return U.H.useDeferredValue(A, F)
    }, Ce.useEffect = function (A, F, ue) {
        var re = U.H;
        if (typeof ue == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return re.useEffect(A, F)
    }, Ce.useId = function () {
        return U.H.useId()
    }, Ce.useImperativeHandle = function (A, F, ue) {
        return U.H.useImperativeHandle(A, F, ue)
    }, Ce.useInsertionEffect = function (A, F) {
        return U.H.useInsertionEffect(A, F)
    }, Ce.useLayoutEffect = function (A, F) {
        return U.H.useLayoutEffect(A, F)
    }, Ce.useMemo = function (A, F) {
        return U.H.useMemo(A, F)
    }, Ce.useOptimistic = function (A, F) {
        return U.H.useOptimistic(A, F)
    }, Ce.useReducer = function (A, F, ue) {
        return U.H.useReducer(A, F, ue)
    }, Ce.useRef = function (A) {
        return U.H.useRef(A)
    }, Ce.useState = function (A) {
        return U.H.useState(A)
    }, Ce.useSyncExternalStore = function (A, F, ue) {
        return U.H.useSyncExternalStore(A, F, ue)
    }, Ce.useTransition = function () {
        return U.H.useTransition()
    }, Ce.version = "19.1.1", Ce
}
var kp;

function zn() {
    return kp || (kp = 1, uf.exports = T3()), uf.exports
}
var C = zn();
const pi = S3(C);
var cf = {
    exports: {}
},
    hl = {},
    ff = {
        exports: {}
    },
    df = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qp;

function E3() {
    return qp || (qp = 1, function (n) {
        function i(H, $) {
            var oe = H.length;
            H.push($);
            e: for (; 0 < oe;) {
                var ye = oe - 1 >>> 1,
                    A = H[ye];
                if (0 < u(A, $)) H[ye] = $, H[oe] = A, oe = ye;
                else break e
            }
        }

        function l(H) {
            return H.length === 0 ? null : H[0]
        }

        function s(H) {
            if (H.length === 0) return null;
            var $ = H[0],
                oe = H.pop();
            if (oe !== $) {
                H[0] = oe;
                e: for (var ye = 0, A = H.length, F = A >>> 1; ye < F;) {
                    var ue = 2 * (ye + 1) - 1,
                        re = H[ue],
                        ce = ue + 1,
                        Oe = H[ce];
                    if (0 > u(re, oe)) ce < A && 0 > u(Oe, re) ? (H[ye] = Oe, H[ce] = oe, ye = ce) : (H[ye] = re, H[ue] = oe, ye = ue);
                    else if (ce < A && 0 > u(Oe, oe)) H[ye] = Oe, H[ce] = oe, ye = ce;
                    else break e
                }
            }
            return $
        }

        function u(H, $) {
            var oe = H.sortIndex - $.sortIndex;
            return oe !== 0 ? oe : H.id - $.id
        }
        if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var f = performance;
            n.unstable_now = function () {
                return f.now()
            }
        } else {
            var d = Date,
                p = d.now();
            n.unstable_now = function () {
                return d.now() - p
            }
        }
        var h = [],
            m = [],
            y = 1,
            v = null,
            b = 3,
            x = !1,
            T = !1,
            D = !1,
            O = !1,
            E = typeof setTimeout == "function" ? setTimeout : null,
            V = typeof clearTimeout == "function" ? clearTimeout : null,
            j = typeof setImmediate < "u" ? setImmediate : null;

        function Q(H) {
            for (var $ = l(m); $ !== null;) {
                if ($.callback === null) s(m);
                else if ($.startTime <= H) s(m), $.sortIndex = $.expirationTime, i(h, $);
                else break;
                $ = l(m)
            }
        }

        function U(H) {
            if (D = !1, Q(H), !T)
                if (l(h) !== null) T = !0, M || (M = !0, K());
                else {
                    var $ = l(m);
                    $ !== null && be(U, $.startTime - H)
                }
        }
        var M = !1,
            G = -1,
            Z = 5,
            ee = -1;

        function ie() {
            return O ? !0 : !(n.unstable_now() - ee < Z)
        }

        function ne() {
            if (O = !1, M) {
                var H = n.unstable_now();
                ee = H;
                var $ = !0;
                try {
                    e: {
                        T = !1,
                            D && (D = !1, V(G), G = -1),
                            x = !0;
                        var oe = b;
                        try {
                            t: {
                                for (Q(H), v = l(h); v !== null && !(v.expirationTime > H && ie());) {
                                    var ye = v.callback;
                                    if (typeof ye == "function") {
                                        v.callback = null, b = v.priorityLevel;
                                        var A = ye(v.expirationTime <= H);
                                        if (H = n.unstable_now(), typeof A == "function") {
                                            v.callback = A, Q(H), $ = !0;
                                            break t
                                        }
                                        v === l(h) && s(h), Q(H)
                                    } else s(h);
                                    v = l(h)
                                }
                                if (v !== null) $ = !0;
                                else {
                                    var F = l(m);
                                    F !== null && be(U, F.startTime - H), $ = !1
                                }
                            }
                            break e
                        }
                        finally {
                            v = null, b = oe, x = !1
                        }
                        $ = void 0
                    }
                }
                finally {
                    $ ? K() : M = !1
                }
            }
        }
        var K;
        if (typeof j == "function") K = function () {
            j(ne)
        };
        else if (typeof MessageChannel < "u") {
            var se = new MessageChannel,
                ae = se.port2;
            se.port1.onmessage = ne, K = function () {
                ae.postMessage(null)
            }
        } else K = function () {
            E(ne, 0)
        };

        function be(H, $) {
            G = E(function () {
                H(n.unstable_now())
            }, $)
        }
        n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function (H) {
            H.callback = null
        }, n.unstable_forceFrameRate = function (H) {
            0 > H || 125 < H ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Z = 0 < H ? Math.floor(1e3 / H) : 5
        }, n.unstable_getCurrentPriorityLevel = function () {
            return b
        }, n.unstable_next = function (H) {
            switch (b) {
                case 1:
                case 2:
                case 3:
                    var $ = 3;
                    break;
                default:
                    $ = b
            }
            var oe = b;
            b = $;
            try {
                return H()
            } finally {
                b = oe
            }
        }, n.unstable_requestPaint = function () {
            O = !0
        }, n.unstable_runWithPriority = function (H, $) {
            switch (H) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    H = 3
            }
            var oe = b;
            b = H;
            try {
                return $()
            } finally {
                b = oe
            }
        }, n.unstable_scheduleCallback = function (H, $, oe) {
            var ye = n.unstable_now();
            switch (typeof oe == "object" && oe !== null ? (oe = oe.delay, oe = typeof oe == "number" && 0 < oe ? ye + oe : ye) : oe = ye, H) {
                case 1:
                    var A = -1;
                    break;
                case 2:
                    A = 250;
                    break;
                case 5:
                    A = 1073741823;
                    break;
                case 4:
                    A = 1e4;
                    break;
                default:
                    A = 5e3
            }
            return A = oe + A, H = {
                id: y++,
                callback: $,
                priorityLevel: H,
                startTime: oe,
                expirationTime: A,
                sortIndex: -1
            }, oe > ye ? (H.sortIndex = oe, i(m, H), l(h) === null && H === l(m) && (D ? (V(G), G = -1) : D = !0, be(U, oe - ye))) : (H.sortIndex = A, i(h, H), T || x || (T = !0, M || (M = !0, K()))), H
        }, n.unstable_shouldYield = ie, n.unstable_wrapCallback = function (H) {
            var $ = b;
            return function () {
                var oe = b;
                b = $;
                try {
                    return H.apply(this, arguments)
                } finally {
                    b = oe
                }
            }
        }
    }(df)), df
}
var Yp;

function M3() {
    return Yp || (Yp = 1, ff.exports = E3()), ff.exports
}
var hf = {
    exports: {}
},
    jt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gp;

function R3() {
    if (Gp) return jt;
    Gp = 1;
    var n = zn();

    function i(h) {
        var m = "https://react.dev/errors/" + h;
        if (1 < arguments.length) {
            m += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var y = 2; y < arguments.length; y++) m += "&args[]=" + encodeURIComponent(arguments[y])
        }
        return "Minified React error #" + h + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function l() { }
    var s = {
        d: {
            f: l,
            r: function () {
                throw Error(i(522))
            },
            D: l,
            C: l,
            L: l,
            m: l,
            X: l,
            S: l,
            M: l
        },
        p: 0,
        findDOMNode: null
    },
        u = Symbol.for("react.portal");

    function f(h, m, y) {
        var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: u,
            key: v == null ? null : "" + v,
            children: h,
            containerInfo: m,
            implementation: y
        }
    }
    var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function p(h, m) {
        if (h === "font") return "";
        if (typeof m == "string") return m === "use-credentials" ? m : ""
    }
    return jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, jt.createPortal = function (h, m) {
        var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11) throw Error(i(299));
        return f(h, m, null, y)
    }, jt.flushSync = function (h) {
        var m = d.T,
            y = s.p;
        try {
            if (d.T = null, s.p = 2, h) return h()
        } finally {
            d.T = m, s.p = y, s.d.f()
        }
    }, jt.preconnect = function (h, m) {
        typeof h == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, s.d.C(h, m))
    }, jt.prefetchDNS = function (h) {
        typeof h == "string" && s.d.D(h)
    }, jt.preinit = function (h, m) {
        if (typeof h == "string" && m && typeof m.as == "string") {
            var y = m.as,
                v = p(y, m.crossOrigin),
                b = typeof m.integrity == "string" ? m.integrity : void 0,
                x = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
            y === "style" ? s.d.S(h, typeof m.precedence == "string" ? m.precedence : void 0, {
                crossOrigin: v,
                integrity: b,
                fetchPriority: x
            }) : y === "script" && s.d.X(h, {
                crossOrigin: v,
                integrity: b,
                fetchPriority: x,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0
            })
        }
    }, jt.preinitModule = function (h, m) {
        if (typeof h == "string")
            if (typeof m == "object" && m !== null) {
                if (m.as == null || m.as === "script") {
                    var y = p(m.as, m.crossOrigin);
                    s.d.M(h, {
                        crossOrigin: y,
                        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                        nonce: typeof m.nonce == "string" ? m.nonce : void 0
                    })
                }
            } else m == null && s.d.M(h)
    }, jt.preload = function (h, m) {
        if (typeof h == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
            var y = m.as,
                v = p(y, m.crossOrigin);
            s.d.L(h, y, {
                crossOrigin: v,
                integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0,
                type: typeof m.type == "string" ? m.type : void 0,
                fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
                referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
                imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
                imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
                media: typeof m.media == "string" ? m.media : void 0
            })
        }
    }, jt.preloadModule = function (h, m) {
        if (typeof h == "string")
            if (m) {
                var y = p(m.as, m.crossOrigin);
                s.d.m(h, {
                    as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
                    crossOrigin: y,
                    integrity: typeof m.integrity == "string" ? m.integrity : void 0
                })
            } else s.d.m(h)
    }, jt.requestFormReset = function (h) {
        s.d.r(h)
    }, jt.unstable_batchedUpdates = function (h, m) {
        return h(m)
    }, jt.useFormState = function (h, m, y) {
        return d.H.useFormState(h, m, y)
    }, jt.useFormStatus = function () {
        return d.H.useHostTransitionStatus()
    }, jt.version = "19.1.1", jt
}
var Xp;

function fd() {
    if (Xp) return hf.exports;
    Xp = 1;

    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
        } catch (i) {
            console.error(i)
        }
    }
    return n(), hf.exports = R3(), hf.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kp;

function A3() {
    if (Kp) return hl;
    Kp = 1;
    var n = M3(),
        i = zn(),
        l = fd();

    function s(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var a = 2; a < arguments.length; a++) t += "&args[]=" + encodeURIComponent(arguments[a])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function u(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }

    function f(e) {
        var t = e,
            a = e;
        if (e.alternate)
            for (; t.return;) t = t.return;
        else {
            e = t;
            do t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return; while (e)
        }
        return t.tag === 3 ? a : null
    }

    function d(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
        }
        return null
    }

    function p(e) {
        if (f(e) !== e) throw Error(s(188))
    }

    function h(e) {
        var t = e.alternate;
        if (!t) {
            if (t = f(e), t === null) throw Error(s(188));
            return t !== e ? null : e
        }
        for (var a = e, r = t; ;) {
            var o = a.return;
            if (o === null) break;
            var c = o.alternate;
            if (c === null) {
                if (r = o.return, r !== null) {
                    a = r;
                    continue
                }
                break
            }
            if (o.child === c.child) {
                for (c = o.child; c;) {
                    if (c === a) return p(o), e;
                    if (c === r) return p(o), t;
                    c = c.sibling
                }
                throw Error(s(188))
            }
            if (a.return !== r.return) a = o, r = c;
            else {
                for (var g = !1, S = o.child; S;) {
                    if (S === a) {
                        g = !0, a = o, r = c;
                        break
                    }
                    if (S === r) {
                        g = !0, r = o, a = c;
                        break
                    }
                    S = S.sibling
                }
                if (!g) {
                    for (S = c.child; S;) {
                        if (S === a) {
                            g = !0, a = c, r = o;
                            break
                        }
                        if (S === r) {
                            g = !0, r = c, a = o;
                            break
                        }
                        S = S.sibling
                    }
                    if (!g) throw Error(s(189))
                }
            }
            if (a.alternate !== r) throw Error(s(190))
        }
        if (a.tag !== 3) throw Error(s(188));
        return a.stateNode.current === a ? e : t
    }

    function m(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e;
        for (e = e.child; e !== null;) {
            if (t = m(e), t !== null) return t;
            e = e.sibling
        }
        return null
    }
    var y = Object.assign,
        v = Symbol.for("react.element"),
        b = Symbol.for("react.transitional.element"),
        x = Symbol.for("react.portal"),
        T = Symbol.for("react.fragment"),
        D = Symbol.for("react.strict_mode"),
        O = Symbol.for("react.profiler"),
        E = Symbol.for("react.provider"),
        V = Symbol.for("react.consumer"),
        j = Symbol.for("react.context"),
        Q = Symbol.for("react.forward_ref"),
        U = Symbol.for("react.suspense"),
        M = Symbol.for("react.suspense_list"),
        G = Symbol.for("react.memo"),
        Z = Symbol.for("react.lazy"),
        ee = Symbol.for("react.activity"),
        ie = Symbol.for("react.memo_cache_sentinel"),
        ne = Symbol.iterator;

    function K(e) {
        return e === null || typeof e != "object" ? null : (e = ne && e[ne] || e["@@iterator"], typeof e == "function" ? e : null)
    }
    var se = Symbol.for("react.client.reference");

    function ae(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.$$typeof === se ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case T:
                return "Fragment";
            case O:
                return "Profiler";
            case D:
                return "StrictMode";
            case U:
                return "Suspense";
            case M:
                return "SuspenseList";
            case ee:
                return "Activity"
        }
        if (typeof e == "object") switch (e.$$typeof) {
            case x:
                return "Portal";
            case j:
                return (e.displayName || "Context") + ".Provider";
            case V:
                return (e._context.displayName || "Context") + ".Consumer";
            case Q:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case G:
                return t = e.displayName || null, t !== null ? t : ae(e.type) || "Memo";
            case Z:
                t = e._payload, e = e._init;
                try {
                    return ae(e(t))
                } catch { }
        }
        return null
    }
    var be = Array.isArray,
        H = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        $ = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        oe = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        ye = [],
        A = -1;

    function F(e) {
        return {
            current: e
        }
    }

    function ue(e) {
        0 > A || (e.current = ye[A], ye[A] = null, A--)
    }

    function re(e, t) {
        A++, ye[A] = e.current, e.current = t
    }
    var ce = F(null),
        Oe = F(null),
        Se = F(null),
        Je = F(null);

    function Me(e, t) {
        switch (re(Se, t), re(Oe, e), re(ce, null), t.nodeType) {
            case 9:
            case 11:
                e = (e = t.documentElement) && (e = e.namespaceURI) ? dp(e) : 0;
                break;
            default:
                if (e = t.tagName, t = t.namespaceURI) t = dp(t), e = hp(t, e);
                else switch (e) {
                    case "svg":
                        e = 1;
                        break;
                    case "math":
                        e = 2;
                        break;
                    default:
                        e = 0
                }
        }
        ue(ce), re(ce, e)
    }

    function lt() {
        ue(ce), ue(Oe), ue(Se)
    }

    function Ge(e) {
        e.memoizedState !== null && re(Je, e);
        var t = ce.current,
            a = hp(t, e.type);
        t !== a && (re(Oe, e), re(ce, a))
    }

    function Mt(e) {
        Oe.current === e && (ue(ce), ue(Oe)), Je.current === e && (ue(Je), sl._currentValue = oe)
    }
    var ra = Object.prototype.hasOwnProperty,
        yr = n.unstable_scheduleCallback,
        gn = n.unstable_cancelCallback,
        eu = n.unstable_shouldYield,
        tu = n.unstable_requestPaint,
        Gt = n.unstable_now,
        nu = n.unstable_getCurrentPriorityLevel,
        Yl = n.unstable_ImmediatePriority,
        Gl = n.unstable_UserBlockingPriority,
        bi = n.unstable_NormalPriority,
        Un = n.unstable_LowPriority,
        la = n.unstable_IdlePriority,
        Xl = n.log,
        gr = n.unstable_setDisableYieldValue,
        Ht = null,
        nt = null;

    function vn(e) {
        if (typeof Xl == "function" && gr(e), nt && typeof nt.setStrictMode == "function") try {
            nt.setStrictMode(Ht, e)
        } catch { }
    }
    var Rt = Math.clz32 ? Math.clz32 : Kl,
        au = Math.log,
        Tn = Math.LN2;

    function Kl(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (au(e) / Tn | 0) | 0
    }
    var ka = 256,
        qa = 4194304;

    function Bn(e) {
        var t = e & 42;
        if (t !== 0) return t;
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 4194048;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return e & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return e
        }
    }

    function Ya(e, t, a) {
        var r = e.pendingLanes;
        if (r === 0) return 0;
        var o = 0,
            c = e.suspendedLanes,
            g = e.pingedLanes;
        e = e.warmLanes;
        var S = r & 134217727;
        return S !== 0 ? (r = S & ~c, r !== 0 ? o = Bn(r) : (g &= S, g !== 0 ? o = Bn(g) : a || (a = S & ~e, a !== 0 && (o = Bn(a))))) : (S = r & ~c, S !== 0 ? o = Bn(S) : g !== 0 ? o = Bn(g) : a || (a = r & ~e, a !== 0 && (o = Bn(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & c) === 0 && (c = o & -o, a = t & -t, c >= a || c === 32 && (a & 4194048) !== 0) ? t : o
    }

    function En(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }

    function Ql(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return t + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function xi() {
        var e = ka;
        return ka <<= 1, (ka & 4194048) === 0 && (ka = 256), e
    }

    function Zl() {
        var e = qa;
        return qa <<= 1, (qa & 62914560) === 0 && (qa = 4194304), e
    }

    function Si(e) {
        for (var t = [], a = 0; 31 > a; a++) t.push(e);
        return t
    }

    function Ga(e, t) {
        e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
    }

    function Fl(e, t, a, r, o, c) {
        var g = e.pendingLanes;
        e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
        var S = e.entanglements,
            R = e.expirationTimes,
            k = e.hiddenUpdates;
        for (a = g & ~a; 0 < a;) {
            var I = 31 - Rt(a),
                W = 1 << I;
            S[I] = 0, R[I] = -1;
            var q = k[I];
            if (q !== null)
                for (k[I] = null, I = 0; I < q.length; I++) {
                    var Y = q[I];
                    Y !== null && (Y.lane &= -536870913)
                }
            a &= ~W
        }
        r !== 0 && Xa(e, r, 0), c !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(g & ~t))
    }

    function Xa(e, t, a) {
        e.pendingLanes |= t, e.suspendedLanes &= ~t;
        var r = 31 - Rt(t);
        e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | a & 4194090
    }

    function Ka(e, t) {
        var a = e.entangledLanes |= t;
        for (e = e.entanglements; a;) {
            var r = 31 - Rt(a),
                o = 1 << r;
            o & t | e[r] & t && (e[r] |= t), a &= ~o
        }
    }

    function vr(e) {
        switch (e) {
            case 2:
                e = 1;
                break;
            case 8:
                e = 4;
                break;
            case 32:
                e = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                e = 128;
                break;
            case 268435456:
                e = 134217728;
                break;
            default:
                e = 0
        }
        return e
    }

    function br(e) {
        return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }

    function _() {
        var e = $.p;
        return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : jp(e.type))
    }

    function B(e, t) {
        var a = $.p;
        try {
            return $.p = e, t()
        } finally {
            $.p = a
        }
    }
    var X = Math.random().toString(36).slice(2),
        te = "__reactFiber$" + X,
        le = "__reactProps$" + X,
        de = "__reactContainer$" + X,
        pe = "__reactEvents$" + X,
        he = "__reactListeners$" + X,
        xe = "__reactHandles$" + X,
        we = "__reactResources$" + X,
        me = "__reactMarker$" + X;

    function ge(e) {
        delete e[te], delete e[le], delete e[pe], delete e[he], delete e[xe]
    }

    function _e(e) {
        var t = e[te];
        if (t) return t;
        for (var a = e.parentNode; a;) {
            if (t = a[de] || a[te]) {
                if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
                    for (e = gp(e); e !== null;) {
                        if (a = e[te]) return a;
                        e = gp(e)
                    }
                return t
            }
            e = a, a = e.parentNode
        }
        return null
    }

    function ke(e) {
        if (e = e[te] || e[de]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e
        }
        return null
    }

    function st(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
        throw Error(s(33))
    }

    function ot(e) {
        var t = e[we];
        return t || (t = e[we] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), t
    }

    function De(e) {
        e[me] = !0
    }
    var Xe = new Set,
        Mn = {};

    function Xt(e, t) {
        Lt(e, t), Lt(e + "Capture", t)
    }

    function Lt(e, t) {
        for (Mn[e] = t, e = 0; e < t.length; e++) Xe.add(t[e])
    }
    var en = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        wi = {},
        sa = {};

    function Pn(e) {
        return ra.call(sa, e) ? !0 : ra.call(wi, e) ? !1 : en.test(e) ? sa[e] = !0 : (wi[e] = !0, !1)
    }

    function kn(e, t, a) {
        if (Pn(t))
            if (a === null) e.removeAttribute(t);
            else {
                switch (typeof a) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        e.removeAttribute(t);
                        return;
                    case "boolean":
                        var r = t.toLowerCase().slice(0, 5);
                        if (r !== "data-" && r !== "aria-") {
                            e.removeAttribute(t);
                            return
                        }
                }
                e.setAttribute(t, "" + a)
            }
    }

    function qn(e, t, a) {
        if (a === null) e.removeAttribute(t);
        else {
            switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(t);
                    return
            }
            e.setAttribute(t, "" + a)
        }
    }

    function je(e, t, a, r) {
        if (r === null) e.removeAttribute(a);
        else {
            switch (typeof r) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(a);
                    return
            }
            e.setAttributeNS(t, a, "" + r)
        }
    }
    var pt, Qa;

    function tn(e) {
        if (pt === void 0) try {
            throw Error()
        } catch (a) {
            var t = a.stack.trim().match(/\n( *(at )?)/);
            pt = t && t[1] || "", Qa = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return `
` + pt + e + Qa
    }
    var at = !1;

    function oa(e, t) {
        if (!e || at) return "";
        at = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var r = {
                DetermineComponentFrameRoot: function () {
                    try {
                        if (t) {
                            var W = function () {
                                throw Error()
                            };
                            if (Object.defineProperty(W.prototype, "props", {
                                set: function () {
                                    throw Error()
                                }
                            }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(W, [])
                                } catch (Y) {
                                    var q = Y
                                }
                                Reflect.construct(e, [], W)
                            } else {
                                try {
                                    W.call()
                                } catch (Y) {
                                    q = Y
                                }
                                e.call(W.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (Y) {
                                q = Y
                            } (W = e()) && typeof W.catch == "function" && W.catch(function () { })
                        }
                    } catch (Y) {
                        if (Y && q && typeof Y.stack == "string") return [Y.stack, q.stack]
                    }
                    return [null, null]
                }
            };
            r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var o = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
            o && o.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var c = r.DetermineComponentFrameRoot(),
                g = c[0],
                S = c[1];
            if (g && S) {
                var R = g.split(`
`),
                    k = S.split(`
`);
                for (o = r = 0; r < R.length && !R[r].includes("DetermineComponentFrameRoot");) r++;
                for (; o < k.length && !k[o].includes("DetermineComponentFrameRoot");) o++;
                if (r === R.length || o === k.length)
                    for (r = R.length - 1, o = k.length - 1; 1 <= r && 0 <= o && R[r] !== k[o];) o--;
                for (; 1 <= r && 0 <= o; r--, o--)
                    if (R[r] !== k[o]) {
                        if (r !== 1 || o !== 1)
                            do
                                if (r--, o--, 0 > o || R[r] !== k[o]) {
                                    var I = `
` + R[r].replace(" at new ", " at ");
                                    return e.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", e.displayName)), I
                                } while (1 <= r && 0 <= o);
                        break
                    }
            }
        } finally {
            at = !1, Error.prepareStackTrace = a
        }
        return (a = e ? e.displayName || e.name : "") ? tn(a) : ""
    }

    function Il(e) {
        switch (e.tag) {
            case 26:
            case 27:
            case 5:
                return tn(e.type);
            case 16:
                return tn("Lazy");
            case 13:
                return tn("Suspense");
            case 19:
                return tn("SuspenseList");
            case 0:
            case 15:
                return oa(e.type, !1);
            case 11:
                return oa(e.type.render, !1);
            case 1:
                return oa(e.type, !0);
            case 31:
                return tn("Activity");
            default:
                return ""
        }
    }

    function $l(e) {
        try {
            var t = "";
            do t += Il(e), e = e.return; while (e);
            return t
        } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack
        }
    }

    function nn(e) {
        switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return ""
        }
    }

    function sh(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }

    function y2(e) {
        var t = sh(e) ? "checked" : "value",
            a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var o = a.get,
                c = a.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return o.call(this)
                },
                set: function (g) {
                    r = "" + g, c.call(this, g)
                }
            }), Object.defineProperty(e, t, {
                enumerable: a.enumerable
            }), {
                getValue: function () {
                    return r
                },
                setValue: function (g) {
                    r = "" + g
                },
                stopTracking: function () {
                    e._valueTracker = null, delete e[t]
                }
            }
        }
    }

    function Jl(e) {
        e._valueTracker || (e._valueTracker = y2(e))
    }

    function oh(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var a = t.getValue(),
            r = "";
        return e && (r = sh(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== a ? (t.setValue(e), !0) : !1
    }

    function Wl(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var g2 = /[\n"\\]/g;

    function an(e) {
        return e.replace(g2, function (t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }

    function iu(e, t, a, r, o, c, g, S) {
        e.name = "", g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? e.type = g : e.removeAttribute("type"), t != null ? g === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + nn(t)) : e.value !== "" + nn(t) && (e.value = "" + nn(t)) : g !== "submit" && g !== "reset" || e.removeAttribute("value"), t != null ? ru(e, g, nn(t)) : a != null ? ru(e, g, nn(a)) : r != null && e.removeAttribute("value"), o == null && c != null && (e.defaultChecked = !!c), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), S != null && typeof S != "function" && typeof S != "symbol" && typeof S != "boolean" ? e.name = "" + nn(S) : e.removeAttribute("name")
    }

    function uh(e, t, a, r, o, c, g, S) {
        if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c), t != null || a != null) {
            if (!(c !== "submit" && c !== "reset" || t != null)) return;
            a = a != null ? "" + nn(a) : "", t = t != null ? "" + nn(t) : a, S || t === e.value || (e.value = t), e.defaultValue = t
        }
        r = r ?? o, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = S ? e.checked : !!r, e.defaultChecked = !!r, g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" && (e.name = g)
    }

    function ru(e, t, a) {
        t === "number" && Wl(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a)
    }

    function Ti(e, t, a, r) {
        if (e = e.options, t) {
            t = {};
            for (var o = 0; o < a.length; o++) t["$" + a[o]] = !0;
            for (a = 0; a < e.length; a++) o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && r && (e[a].defaultSelected = !0)
        } else {
            for (a = "" + nn(a), t = null, o = 0; o < e.length; o++) {
                if (e[o].value === a) {
                    e[o].selected = !0, r && (e[o].defaultSelected = !0);
                    return
                }
                t !== null || e[o].disabled || (t = e[o])
            }
            t !== null && (t.selected = !0)
        }
    }

    function ch(e, t, a) {
        if (t != null && (t = "" + nn(t), t !== e.value && (e.value = t), a == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = a != null ? "" + nn(a) : ""
    }

    function fh(e, t, a, r) {
        if (t == null) {
            if (r != null) {
                if (a != null) throw Error(s(92));
                if (be(r)) {
                    if (1 < r.length) throw Error(s(93));
                    r = r[0]
                }
                a = r
            }
            a == null && (a = ""), t = a
        }
        a = nn(t), e.defaultValue = a, r = e.textContent, r === a && r !== "" && r !== null && (e.value = r)
    }

    function Ei(e, t) {
        if (t) {
            var a = e.firstChild;
            if (a && a === e.lastChild && a.nodeType === 3) {
                a.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var v2 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function dh(e, t, a) {
        var r = t.indexOf("--") === 0;
        a == null || typeof a == "boolean" || a === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, a) : typeof a != "number" || a === 0 || v2.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px"
    }

    function hh(e, t, a) {
        if (t != null && typeof t != "object") throw Error(s(62));
        if (e = e.style, a != null) {
            for (var r in a) !a.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "");
            for (var o in t) r = t[o], t.hasOwnProperty(o) && a[o] !== r && dh(e, o, r)
        } else
            for (var c in t) t.hasOwnProperty(c) && dh(e, c, t[c])
    }

    function lu(e) {
        if (e.indexOf("-") === -1) return !1;
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var b2 = new Map([
        ["acceptCharset", "accept-charset"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
        ["crossOrigin", "crossorigin"],
        ["accentHeight", "accent-height"],
        ["alignmentBaseline", "alignment-baseline"],
        ["arabicForm", "arabic-form"],
        ["baselineShift", "baseline-shift"],
        ["capHeight", "cap-height"],
        ["clipPath", "clip-path"],
        ["clipRule", "clip-rule"],
        ["colorInterpolation", "color-interpolation"],
        ["colorInterpolationFilters", "color-interpolation-filters"],
        ["colorProfile", "color-profile"],
        ["colorRendering", "color-rendering"],
        ["dominantBaseline", "dominant-baseline"],
        ["enableBackground", "enable-background"],
        ["fillOpacity", "fill-opacity"],
        ["fillRule", "fill-rule"],
        ["floodColor", "flood-color"],
        ["floodOpacity", "flood-opacity"],
        ["fontFamily", "font-family"],
        ["fontSize", "font-size"],
        ["fontSizeAdjust", "font-size-adjust"],
        ["fontStretch", "font-stretch"],
        ["fontStyle", "font-style"],
        ["fontVariant", "font-variant"],
        ["fontWeight", "font-weight"],
        ["glyphName", "glyph-name"],
        ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
        ["glyphOrientationVertical", "glyph-orientation-vertical"],
        ["horizAdvX", "horiz-adv-x"],
        ["horizOriginX", "horiz-origin-x"],
        ["imageRendering", "image-rendering"],
        ["letterSpacing", "letter-spacing"],
        ["lightingColor", "lighting-color"],
        ["markerEnd", "marker-end"],
        ["markerMid", "marker-mid"],
        ["markerStart", "marker-start"],
        ["overlinePosition", "overline-position"],
        ["overlineThickness", "overline-thickness"],
        ["paintOrder", "paint-order"],
        ["panose-1", "panose-1"],
        ["pointerEvents", "pointer-events"],
        ["renderingIntent", "rendering-intent"],
        ["shapeRendering", "shape-rendering"],
        ["stopColor", "stop-color"],
        ["stopOpacity", "stop-opacity"],
        ["strikethroughPosition", "strikethrough-position"],
        ["strikethroughThickness", "strikethrough-thickness"],
        ["strokeDasharray", "stroke-dasharray"],
        ["strokeDashoffset", "stroke-dashoffset"],
        ["strokeLinecap", "stroke-linecap"],
        ["strokeLinejoin", "stroke-linejoin"],
        ["strokeMiterlimit", "stroke-miterlimit"],
        ["strokeOpacity", "stroke-opacity"],
        ["strokeWidth", "stroke-width"],
        ["textAnchor", "text-anchor"],
        ["textDecoration", "text-decoration"],
        ["textRendering", "text-rendering"],
        ["transformOrigin", "transform-origin"],
        ["underlinePosition", "underline-position"],
        ["underlineThickness", "underline-thickness"],
        ["unicodeBidi", "unicode-bidi"],
        ["unicodeRange", "unicode-range"],
        ["unitsPerEm", "units-per-em"],
        ["vAlphabetic", "v-alphabetic"],
        ["vHanging", "v-hanging"],
        ["vIdeographic", "v-ideographic"],
        ["vMathematical", "v-mathematical"],
        ["vectorEffect", "vector-effect"],
        ["vertAdvY", "vert-adv-y"],
        ["vertOriginX", "vert-origin-x"],
        ["vertOriginY", "vert-origin-y"],
        ["wordSpacing", "word-spacing"],
        ["writingMode", "writing-mode"],
        ["xmlnsXlink", "xmlns:xlink"],
        ["xHeight", "x-height"]
    ]),
        x2 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function es(e) {
        return x2.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    var su = null;

    function ou(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
    }
    var Mi = null,
        Ri = null;

    function mh(e) {
        var t = ke(e);
        if (t && (e = t.stateNode)) {
            var a = e[le] || null;
            e: switch (e = t.stateNode, t.type) {
                case "input":
                    if (iu(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), t = a.name, a.type === "radio" && t != null) {
                        for (a = e; a.parentNode;) a = a.parentNode;
                        for (a = a.querySelectorAll('input[name="' + an("" + t) + '"][type="radio"]'), t = 0; t < a.length; t++) {
                            var r = a[t];
                            if (r !== e && r.form === e.form) {
                                var o = r[le] || null;
                                if (!o) throw Error(s(90));
                                iu(r, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name)
                            }
                        }
                        for (t = 0; t < a.length; t++) r = a[t], r.form === e.form && oh(r)
                    }
                    break e;
                case "textarea":
                    ch(e, a.value, a.defaultValue);
                    break e;
                case "select":
                    t = a.value, t != null && Ti(e, !!a.multiple, t, !1)
            }
        }
    }
    var uu = !1;

    function ph(e, t, a) {
        if (uu) return e(t, a);
        uu = !0;
        try {
            var r = e(t);
            return r
        } finally {
            if (uu = !1, (Mi !== null || Ri !== null) && (Bs(), Mi && (t = Mi, e = Ri, Ri = Mi = null, mh(t), e)))
                for (t = 0; t < e.length; t++) mh(e[t])
        }
    }

    function xr(e, t) {
        var a = e.stateNode;
        if (a === null) return null;
        var r = a[le] || null;
        if (r === null) return null;
        a = r[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (a && typeof a != "function") throw Error(s(231, t, typeof a));
        return a
    }
    var Yn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        cu = !1;
    if (Yn) try {
        var Sr = {};
        Object.defineProperty(Sr, "passive", {
            get: function () {
                cu = !0
            }
        }), window.addEventListener("test", Sr, Sr), window.removeEventListener("test", Sr, Sr)
    } catch {
        cu = !1
    }
    var ua = null,
        fu = null,
        ts = null;

    function yh() {
        if (ts) return ts;
        var e, t = fu,
            a = t.length,
            r, o = "value" in ua ? ua.value : ua.textContent,
            c = o.length;
        for (e = 0; e < a && t[e] === o[e]; e++);
        var g = a - e;
        for (r = 1; r <= g && t[a - r] === o[c - r]; r++);
        return ts = o.slice(e, 1 < r ? 1 - r : void 0)
    }

    function ns(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
    }

    function as() {
        return !0
    }

    function gh() {
        return !1
    }

    function Ut(e) {
        function t(a, r, o, c, g) {
            this._reactName = a, this._targetInst = o, this.type = r, this.nativeEvent = c, this.target = g, this.currentTarget = null;
            for (var S in e) e.hasOwnProperty(S) && (a = e[S], this[S] = a ? a(c) : c[S]);
            return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? as : gh, this.isPropagationStopped = gh, this
        }
        return y(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = as)
            },
            stopPropagation: function () {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = as)
            },
            persist: function () { },
            isPersistent: as
        }), t
    }
    var Za = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
        is = Ut(Za),
        wr = y({}, Za, {
            view: 0,
            detail: 0
        }),
        S2 = Ut(wr),
        du, hu, Tr, rs = y({}, wr, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: pu,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function (e) {
                return "movementX" in e ? e.movementX : (e !== Tr && (Tr && e.type === "mousemove" ? (du = e.screenX - Tr.screenX, hu = e.screenY - Tr.screenY) : hu = du = 0, Tr = e), du)
            },
            movementY: function (e) {
                return "movementY" in e ? e.movementY : hu
            }
        }),
        vh = Ut(rs),
        w2 = y({}, rs, {
            dataTransfer: 0
        }),
        T2 = Ut(w2),
        E2 = y({}, wr, {
            relatedTarget: 0
        }),
        mu = Ut(E2),
        M2 = y({}, Za, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        R2 = Ut(M2),
        A2 = y({}, Za, {
            clipboardData: function (e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }),
        D2 = Ut(A2),
        O2 = y({}, Za, {
            data: 0
        }),
        bh = Ut(O2),
        C2 = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        _2 = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        j2 = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function N2(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = j2[e]) ? !!t[e] : !1
    }

    function pu() {
        return N2
    }
    var L2 = y({}, wr, {
        key: function (e) {
            if (e.key) {
                var t = C2[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = ns(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? _2[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: pu,
        charCode: function (e) {
            return e.type === "keypress" ? ns(e) : 0
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function (e) {
            return e.type === "keypress" ? ns(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
        z2 = Ut(L2),
        V2 = y({}, rs, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        xh = Ut(V2),
        H2 = y({}, wr, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: pu
        }),
        U2 = Ut(H2),
        B2 = y({}, Za, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        P2 = Ut(B2),
        k2 = y({}, rs, {
            deltaX: function (e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function (e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        q2 = Ut(k2),
        Y2 = y({}, Za, {
            newState: 0,
            oldState: 0
        }),
        G2 = Ut(Y2),
        X2 = [9, 13, 27, 32],
        yu = Yn && "CompositionEvent" in window,
        Er = null;
    Yn && "documentMode" in document && (Er = document.documentMode);
    var K2 = Yn && "TextEvent" in window && !Er,
        Sh = Yn && (!yu || Er && 8 < Er && 11 >= Er),
        wh = " ",
        Th = !1;

    function Eh(e, t) {
        switch (e) {
            case "keyup":
                return X2.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function Mh(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
    }
    var Ai = !1;

    function Q2(e, t) {
        switch (e) {
            case "compositionend":
                return Mh(t);
            case "keypress":
                return t.which !== 32 ? null : (Th = !0, wh);
            case "textInput":
                return e = t.data, e === wh && Th ? null : e;
            default:
                return null
        }
    }

    function Z2(e, t) {
        if (Ai) return e === "compositionend" || !yu && Eh(e, t) ? (e = yh(), ts = fu = ua = null, Ai = !1, e) : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which)
                }
                return null;
            case "compositionend":
                return Sh && t.locale !== "ko" ? null : t.data;
            default:
                return null
        }
    }
    var F2 = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function Rh(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!F2[e.type] : t === "textarea"
    }

    function Ah(e, t, a, r) {
        Mi ? Ri ? Ri.push(r) : Ri = [r] : Mi = r, t = Xs(t, "onChange"), 0 < t.length && (a = new is("onChange", "change", null, a, r), e.push({
            event: a,
            listeners: t
        }))
    }
    var Mr = null,
        Rr = null;

    function I2(e) {
        sp(e, 0)
    }

    function ls(e) {
        var t = st(e);
        if (oh(t)) return e
    }

    function Dh(e, t) {
        if (e === "change") return t
    }
    var Oh = !1;
    if (Yn) {
        var gu;
        if (Yn) {
            var vu = "oninput" in document;
            if (!vu) {
                var Ch = document.createElement("div");
                Ch.setAttribute("oninput", "return;"), vu = typeof Ch.oninput == "function"
            }
            gu = vu
        } else gu = !1;
        Oh = gu && (!document.documentMode || 9 < document.documentMode)
    }

    function _h() {
        Mr && (Mr.detachEvent("onpropertychange", jh), Rr = Mr = null)
    }

    function jh(e) {
        if (e.propertyName === "value" && ls(Rr)) {
            var t = [];
            Ah(t, Rr, e, ou(e)), ph(I2, t)
        }
    }

    function $2(e, t, a) {
        e === "focusin" ? (_h(), Mr = t, Rr = a, Mr.attachEvent("onpropertychange", jh)) : e === "focusout" && _h()
    }

    function J2(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return ls(Rr)
    }

    function W2(e, t) {
        if (e === "click") return ls(t)
    }

    function eb(e, t) {
        if (e === "input" || e === "change") return ls(t)
    }

    function tb(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var Kt = typeof Object.is == "function" ? Object.is : tb;

    function Ar(e, t) {
        if (Kt(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var a = Object.keys(e),
            r = Object.keys(t);
        if (a.length !== r.length) return !1;
        for (r = 0; r < a.length; r++) {
            var o = a[r];
            if (!ra.call(t, o) || !Kt(e[o], t[o])) return !1
        }
        return !0
    }

    function Nh(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function Lh(e, t) {
        var a = Nh(e);
        e = 0;
        for (var r; a;) {
            if (a.nodeType === 3) {
                if (r = e + a.textContent.length, e <= t && r >= t) return {
                    node: a,
                    offset: t - e
                };
                e = r
            }
            e: {
                for (; a;) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break e
                    }
                    a = a.parentNode
                }
                a = void 0
            }
            a = Nh(a)
        }
    }

    function zh(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? zh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }

    function Vh(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = Wl(e.document); t instanceof e.HTMLIFrameElement;) {
            try {
                var a = typeof t.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a) e = t.contentWindow;
            else break;
            t = Wl(e.document)
        }
        return t
    }

    function bu(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var nb = Yn && "documentMode" in document && 11 >= document.documentMode,
        Di = null,
        xu = null,
        Dr = null,
        Su = !1;

    function Hh(e, t, a) {
        var r = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        Su || Di == null || Di !== Wl(r) || (r = Di, "selectionStart" in r && bu(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), Dr && Ar(Dr, r) || (Dr = r, r = Xs(xu, "onSelect"), 0 < r.length && (t = new is("onSelect", "select", null, t, a), e.push({
            event: t,
            listeners: r
        }), t.target = Di)))
    }

    function Fa(e, t) {
        var a = {};
        return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a
    }
    var Oi = {
        animationend: Fa("Animation", "AnimationEnd"),
        animationiteration: Fa("Animation", "AnimationIteration"),
        animationstart: Fa("Animation", "AnimationStart"),
        transitionrun: Fa("Transition", "TransitionRun"),
        transitionstart: Fa("Transition", "TransitionStart"),
        transitioncancel: Fa("Transition", "TransitionCancel"),
        transitionend: Fa("Transition", "TransitionEnd")
    },
        wu = {},
        Uh = {};
    Yn && (Uh = document.createElement("div").style, "AnimationEvent" in window || (delete Oi.animationend.animation, delete Oi.animationiteration.animation, delete Oi.animationstart.animation), "TransitionEvent" in window || delete Oi.transitionend.transition);

    function Ia(e) {
        if (wu[e]) return wu[e];
        if (!Oi[e]) return e;
        var t = Oi[e],
            a;
        for (a in t)
            if (t.hasOwnProperty(a) && a in Uh) return wu[e] = t[a];
        return e
    }
    var Bh = Ia("animationend"),
        Ph = Ia("animationiteration"),
        kh = Ia("animationstart"),
        ab = Ia("transitionrun"),
        ib = Ia("transitionstart"),
        rb = Ia("transitioncancel"),
        qh = Ia("transitionend"),
        Yh = new Map,
        Tu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Tu.push("scrollEnd");

    function bn(e, t) {
        Yh.set(e, t), Xt(t, [e])
    }
    var Gh = new WeakMap;

    function rn(e, t) {
        if (typeof e == "object" && e !== null) {
            var a = Gh.get(e);
            return a !== void 0 ? a : (t = {
                value: e,
                source: t,
                stack: $l(t)
            }, Gh.set(e, t), t)
        }
        return {
            value: e,
            source: t,
            stack: $l(t)
        }
    }
    var ln = [],
        Ci = 0,
        Eu = 0;

    function ss() {
        for (var e = Ci, t = Eu = Ci = 0; t < e;) {
            var a = ln[t];
            ln[t++] = null;
            var r = ln[t];
            ln[t++] = null;
            var o = ln[t];
            ln[t++] = null;
            var c = ln[t];
            if (ln[t++] = null, r !== null && o !== null) {
                var g = r.pending;
                g === null ? o.next = o : (o.next = g.next, g.next = o), r.pending = o
            }
            c !== 0 && Xh(a, o, c)
        }
    }

    function os(e, t, a, r) {
        ln[Ci++] = e, ln[Ci++] = t, ln[Ci++] = a, ln[Ci++] = r, Eu |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r)
    }

    function Mu(e, t, a, r) {
        return os(e, t, a, r), us(e)
    }

    function _i(e, t) {
        return os(e, null, null, t), us(e)
    }

    function Xh(e, t, a) {
        e.lanes |= a;
        var r = e.alternate;
        r !== null && (r.lanes |= a);
        for (var o = !1, c = e.return; c !== null;) c.childLanes |= a, r = c.alternate, r !== null && (r.childLanes |= a), c.tag === 22 && (e = c.stateNode, e === null || e._visibility & 1 || (o = !0)), e = c, c = c.return;
        return e.tag === 3 ? (c = e.stateNode, o && t !== null && (o = 31 - Rt(a), e = c.hiddenUpdates, r = e[o], r === null ? e[o] = [t] : r.push(t), t.lane = a | 536870912), c) : null
    }

    function us(e) {
        if (50 < Wr) throw Wr = 0, _c = null, Error(s(185));
        for (var t = e.return; t !== null;) e = t, t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var ji = {};

    function lb(e, t, a, r) {
        this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function Qt(e, t, a, r) {
        return new lb(e, t, a, r)
    }

    function Ru(e) {
        return e = e.prototype, !(!e || !e.isReactComponent)
    }

    function Gn(e, t) {
        var a = e.alternate;
        return a === null ? (a = Qt(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a
    }

    function Kh(e, t) {
        e.flags &= 65011714;
        var a = e.alternate;
        return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }), e
    }

    function cs(e, t, a, r, o, c) {
        var g = 0;
        if (r = e, typeof e == "function") Ru(e) && (g = 1);
        else if (typeof e == "string") g = o3(e, a, ce.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else e: switch (e) {
            case ee:
                return e = Qt(31, a, t, o), e.elementType = ee, e.lanes = c, e;
            case T:
                return $a(a.children, o, c, t);
            case D:
                g = 8, o |= 24;
                break;
            case O:
                return e = Qt(12, a, t, o | 2), e.elementType = O, e.lanes = c, e;
            case U:
                return e = Qt(13, a, t, o), e.elementType = U, e.lanes = c, e;
            case M:
                return e = Qt(19, a, t, o), e.elementType = M, e.lanes = c, e;
            default:
                if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                    case E:
                    case j:
                        g = 10;
                        break e;
                    case V:
                        g = 9;
                        break e;
                    case Q:
                        g = 11;
                        break e;
                    case G:
                        g = 14;
                        break e;
                    case Z:
                        g = 16, r = null;
                        break e
                }
                g = 29, a = Error(s(130, e === null ? "null" : typeof e, "")), r = null
        }
        return t = Qt(g, a, t, o), t.elementType = e, t.type = r, t.lanes = c, t
    }

    function $a(e, t, a, r) {
        return e = Qt(7, e, r, t), e.lanes = a, e
    }

    function Au(e, t, a) {
        return e = Qt(6, e, null, t), e.lanes = a, e
    }

    function Du(e, t, a) {
        return t = Qt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = a, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }
    var Ni = [],
        Li = 0,
        fs = null,
        ds = 0,
        sn = [],
        on = 0,
        Ja = null,
        Xn = 1,
        Kn = "";

    function Wa(e, t) {
        Ni[Li++] = ds, Ni[Li++] = fs, fs = e, ds = t
    }

    function Qh(e, t, a) {
        sn[on++] = Xn, sn[on++] = Kn, sn[on++] = Ja, Ja = e;
        var r = Xn;
        e = Kn;
        var o = 32 - Rt(r) - 1;
        r &= ~(1 << o), a += 1;
        var c = 32 - Rt(t) + o;
        if (30 < c) {
            var g = o - o % 5;
            c = (r & (1 << g) - 1).toString(32), r >>= g, o -= g, Xn = 1 << 32 - Rt(t) + o | a << o | r, Kn = c + e
        } else Xn = 1 << c | a << o | r, Kn = e
    }

    function Ou(e) {
        e.return !== null && (Wa(e, 1), Qh(e, 1, 0))
    }

    function Cu(e) {
        for (; e === fs;) fs = Ni[--Li], Ni[Li] = null, ds = Ni[--Li], Ni[Li] = null;
        for (; e === Ja;) Ja = sn[--on], sn[on] = null, Kn = sn[--on], sn[on] = null, Xn = sn[--on], sn[on] = null
    }
    var zt = null,
        ut = null,
        Pe = !1,
        ei = null,
        Rn = !1,
        _u = Error(s(519));

    function ti(e) {
        var t = Error(s(418, ""));
        throw _r(rn(t, e)), _u
    }

    function Zh(e) {
        var t = e.stateNode,
            a = e.type,
            r = e.memoizedProps;
        switch (t[te] = e, t[le] = r, a) {
            case "dialog":
                Ve("cancel", t), Ve("close", t);
                break;
            case "iframe":
            case "object":
            case "embed":
                Ve("load", t);
                break;
            case "video":
            case "audio":
                for (a = 0; a < tl.length; a++) Ve(tl[a], t);
                break;
            case "source":
                Ve("error", t);
                break;
            case "img":
            case "image":
            case "link":
                Ve("error", t), Ve("load", t);
                break;
            case "details":
                Ve("toggle", t);
                break;
            case "input":
                Ve("invalid", t), uh(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0), Jl(t);
                break;
            case "select":
                Ve("invalid", t);
                break;
            case "textarea":
                Ve("invalid", t), fh(t, r.value, r.defaultValue, r.children), Jl(t)
        }
        a = r.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || r.suppressHydrationWarning === !0 || fp(t.textContent, a) ? (r.popover != null && (Ve("beforetoggle", t), Ve("toggle", t)), r.onScroll != null && Ve("scroll", t), r.onScrollEnd != null && Ve("scrollend", t), r.onClick != null && (t.onclick = Ks), t = !0) : t = !1, t || ti(e)
    }

    function Fh(e) {
        for (zt = e.return; zt;) switch (zt.tag) {
            case 5:
            case 13:
                Rn = !1;
                return;
            case 27:
            case 3:
                Rn = !0;
                return;
            default:
                zt = zt.return
        }
    }

    function Or(e) {
        if (e !== zt) return !1;
        if (!Pe) return Fh(e), Pe = !0, !1;
        var t = e.tag,
            a;
        if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Qc(e.type, e.memoizedProps)), a = !a), a && ut && ti(e), Fh(e), t === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (e.nodeType === 8)
                        if (a = e.data, a === "/$") {
                            if (t === 0) {
                                ut = Sn(e.nextSibling);
                                break e
                            }
                            t--
                        } else a !== "$" && a !== "$!" && a !== "$?" || t++;
                    e = e.nextSibling
                }
                ut = null
            }
        } else t === 27 ? (t = ut, Ma(e.type) ? (e = $c, $c = null, ut = e) : ut = t) : ut = zt ? Sn(e.stateNode.nextSibling) : null;
        return !0
    }

    function Cr() {
        ut = zt = null, Pe = !1
    }

    function Ih() {
        var e = ei;
        return e !== null && (kt === null ? kt = e : kt.push.apply(kt, e), ei = null), e
    }

    function _r(e) {
        ei === null ? ei = [e] : ei.push(e)
    }
    var ju = F(null),
        ni = null,
        Qn = null;

    function ca(e, t, a) {
        re(ju, t._currentValue), t._currentValue = a
    }

    function Zn(e) {
        e._currentValue = ju.current, ue(ju)
    }

    function Nu(e, t, a) {
        for (; e !== null;) {
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === a) break;
            e = e.return
        }
    }

    function Lu(e, t, a, r) {
        var o = e.child;
        for (o !== null && (o.return = e); o !== null;) {
            var c = o.dependencies;
            if (c !== null) {
                var g = o.child;
                c = c.firstContext;
                e: for (; c !== null;) {
                    var S = c;
                    c = o;
                    for (var R = 0; R < t.length; R++)
                        if (S.context === t[R]) {
                            c.lanes |= a, S = c.alternate, S !== null && (S.lanes |= a), Nu(c.return, a, e), r || (g = null);
                            break e
                        } c = S.next
                }
            } else if (o.tag === 18) {
                if (g = o.return, g === null) throw Error(s(341));
                g.lanes |= a, c = g.alternate, c !== null && (c.lanes |= a), Nu(g, a, e), g = null
            } else g = o.child;
            if (g !== null) g.return = o;
            else
                for (g = o; g !== null;) {
                    if (g === e) {
                        g = null;
                        break
                    }
                    if (o = g.sibling, o !== null) {
                        o.return = g.return, g = o;
                        break
                    }
                    g = g.return
                }
            o = g
        }
    }

    function jr(e, t, a, r) {
        e = null;
        for (var o = t, c = !1; o !== null;) {
            if (!c) {
                if ((o.flags & 524288) !== 0) c = !0;
                else if ((o.flags & 262144) !== 0) break
            }
            if (o.tag === 10) {
                var g = o.alternate;
                if (g === null) throw Error(s(387));
                if (g = g.memoizedProps, g !== null) {
                    var S = o.type;
                    Kt(o.pendingProps.value, g.value) || (e !== null ? e.push(S) : e = [S])
                }
            } else if (o === Je.current) {
                if (g = o.alternate, g === null) throw Error(s(387));
                g.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(sl) : e = [sl])
            }
            o = o.return
        }
        e !== null && Lu(t, e, a, r), t.flags |= 262144
    }

    function hs(e) {
        for (e = e.firstContext; e !== null;) {
            if (!Kt(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next
        }
        return !1
    }

    function ai(e) {
        ni = e, Qn = null, e = e.dependencies, e !== null && (e.firstContext = null)
    }

    function _t(e) {
        return $h(ni, e)
    }

    function ms(e, t) {
        return ni === null && ai(e), $h(e, t)
    }

    function $h(e, t) {
        var a = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: a,
            next: null
        }, Qn === null) {
            if (e === null) throw Error(s(308));
            Qn = t, e.dependencies = {
                lanes: 0,
                firstContext: t
            }, e.flags |= 524288
        } else Qn = Qn.next = t;
        return a
    }
    var sb = typeof AbortController < "u" ? AbortController : function () {
        var e = [],
            t = this.signal = {
                aborted: !1,
                addEventListener: function (a, r) {
                    e.push(r)
                }
            };
        this.abort = function () {
            t.aborted = !0, e.forEach(function (a) {
                return a()
            })
        }
    },
        ob = n.unstable_scheduleCallback,
        ub = n.unstable_NormalPriority,
        xt = {
            $$typeof: j,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };

    function zu() {
        return {
            controller: new sb,
            data: new Map,
            refCount: 0
        }
    }

    function Nr(e) {
        e.refCount--, e.refCount === 0 && ob(ub, function () {
            e.controller.abort()
        })
    }
    var Lr = null,
        Vu = 0,
        zi = 0,
        Vi = null;

    function cb(e, t) {
        if (Lr === null) {
            var a = Lr = [];
            Vu = 0, zi = Uc(), Vi = {
                status: "pending",
                value: void 0,
                then: function (r) {
                    a.push(r)
                }
            }
        }
        return Vu++, t.then(Jh, Jh), t
    }

    function Jh() {
        if (--Vu === 0 && Lr !== null) {
            Vi !== null && (Vi.status = "fulfilled");
            var e = Lr;
            Lr = null, zi = 0, Vi = null;
            for (var t = 0; t < e.length; t++)(0, e[t])()
        }
    }

    function fb(e, t) {
        var a = [],
            r = {
                status: "pending",
                value: null,
                reason: null,
                then: function (o) {
                    a.push(o)
                }
            };
        return e.then(function () {
            r.status = "fulfilled", r.value = t;
            for (var o = 0; o < a.length; o++)(0, a[o])(t)
        }, function (o) {
            for (r.status = "rejected", r.reason = o, o = 0; o < a.length; o++)(0, a[o])(void 0)
        }), r
    }
    var Wh = H.S;
    H.S = function (e, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && cb(e, t), Wh !== null && Wh(e, t)
    };
    var ii = F(null);

    function Hu() {
        var e = ii.current;
        return e !== null ? e : $e.pooledCache
    }

    function ps(e, t) {
        t === null ? re(ii, ii.current) : re(ii, t.pool)
    }

    function e0() {
        var e = Hu();
        return e === null ? null : {
            parent: xt._currentValue,
            pool: e
        }
    }
    var zr = Error(s(460)),
        t0 = Error(s(474)),
        ys = Error(s(542)),
        Uu = {
            then: function () { }
        };

    function n0(e) {
        return e = e.status, e === "fulfilled" || e === "rejected"
    }

    function gs() { }

    function a0(e, t, a) {
        switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(gs, gs), t = a), t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason, r0(e), e;
            default:
                if (typeof t.status == "string") t.then(gs, gs);
                else {
                    if (e = $e, e !== null && 100 < e.shellSuspendCounter) throw Error(s(482));
                    e = t, e.status = "pending", e.then(function (r) {
                        if (t.status === "pending") {
                            var o = t;
                            o.status = "fulfilled", o.value = r
                        }
                    }, function (r) {
                        if (t.status === "pending") {
                            var o = t;
                            o.status = "rejected", o.reason = r
                        }
                    })
                }
                switch (t.status) {
                    case "fulfilled":
                        return t.value;
                    case "rejected":
                        throw e = t.reason, r0(e), e
                }
                throw Vr = t, zr
        }
    }
    var Vr = null;

    function i0() {
        if (Vr === null) throw Error(s(459));
        var e = Vr;
        return Vr = null, e
    }

    function r0(e) {
        if (e === zr || e === ys) throw Error(s(483))
    }
    var fa = !1;

    function Bu(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }

    function Pu(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }

    function da(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function ha(e, t, a) {
        var r = e.updateQueue;
        if (r === null) return null;
        if (r = r.shared, (qe & 2) !== 0) {
            var o = r.pending;
            return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, t = us(e), Xh(e, null, a), t
        }
        return os(e, r, t, a), us(e)
    }

    function Hr(e, t, a) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes, a |= r, t.lanes = a, Ka(e, a)
        }
    }

    function ku(e, t) {
        var a = e.updateQueue,
            r = e.alternate;
        if (r !== null && (r = r.updateQueue, a === r)) {
            var o = null,
                c = null;
            if (a = a.firstBaseUpdate, a !== null) {
                do {
                    var g = {
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: null,
                        next: null
                    };
                    c === null ? o = c = g : c = c.next = g, a = a.next
                } while (a !== null);
                c === null ? o = c = t : c = c.next = t
            } else o = c = t;
            a = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: c,
                shared: r.shared,
                callbacks: r.callbacks
            }, e.updateQueue = a;
            return
        }
        e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t
    }
    var qu = !1;

    function Ur() {
        if (qu) {
            var e = Vi;
            if (e !== null) throw e
        }
    }

    function Br(e, t, a, r) {
        qu = !1;
        var o = e.updateQueue;
        fa = !1;
        var c = o.firstBaseUpdate,
            g = o.lastBaseUpdate,
            S = o.shared.pending;
        if (S !== null) {
            o.shared.pending = null;
            var R = S,
                k = R.next;
            R.next = null, g === null ? c = k : g.next = k, g = R;
            var I = e.alternate;
            I !== null && (I = I.updateQueue, S = I.lastBaseUpdate, S !== g && (S === null ? I.firstBaseUpdate = k : S.next = k, I.lastBaseUpdate = R))
        }
        if (c !== null) {
            var W = o.baseState;
            g = 0, I = k = R = null, S = c;
            do {
                var q = S.lane & -536870913,
                    Y = q !== S.lane;
                if (Y ? (Ue & q) === q : (r & q) === q) {
                    q !== 0 && q === zi && (qu = !0), I !== null && (I = I.next = {
                        lane: 0,
                        tag: S.tag,
                        payload: S.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var Re = e,
                            Te = S; q = t;
                        var Ze = a;
                        switch (Te.tag) {
                            case 1:
                                if (Re = Te.payload, typeof Re == "function") {
                                    W = Re.call(Ze, W, q);
                                    break e
                                }
                                W = Re;
                                break e;
                            case 3:
                                Re.flags = Re.flags & -65537 | 128;
                            case 0:
                                if (Re = Te.payload, q = typeof Re == "function" ? Re.call(Ze, W, q) : Re, q == null) break e;
                                W = y({}, W, q);
                                break e;
                            case 2:
                                fa = !0
                        }
                    }
                    q = S.callback, q !== null && (e.flags |= 64, Y && (e.flags |= 8192), Y = o.callbacks, Y === null ? o.callbacks = [q] : Y.push(q))
                } else Y = {
                    lane: q,
                    tag: S.tag,
                    payload: S.payload,
                    callback: S.callback,
                    next: null
                }, I === null ? (k = I = Y, R = W) : I = I.next = Y, g |= q;
                if (S = S.next, S === null) {
                    if (S = o.shared.pending, S === null) break;
                    Y = S, S = Y.next, Y.next = null, o.lastBaseUpdate = Y, o.shared.pending = null
                }
            } while (!0);
            I === null && (R = W), o.baseState = R, o.firstBaseUpdate = k, o.lastBaseUpdate = I, c === null && (o.shared.lanes = 0), Sa |= g, e.lanes = g, e.memoizedState = W
        }
    }

    function l0(e, t) {
        if (typeof e != "function") throw Error(s(191, e));
        e.call(t)
    }

    function s0(e, t) {
        var a = e.callbacks;
        if (a !== null)
            for (e.callbacks = null, e = 0; e < a.length; e++) l0(a[e], t)
    }
    var Hi = F(null),
        vs = F(0);

    function o0(e, t) {
        e = ta, re(vs, e), re(Hi, t), ta = e | t.baseLanes
    }

    function Yu() {
        re(vs, ta), re(Hi, Hi.current)
    }

    function Gu() {
        ta = vs.current, ue(Hi), ue(vs)
    }
    var ma = 0,
        Ne = null,
        Ke = null,
        yt = null,
        bs = !1,
        Ui = !1,
        ri = !1,
        xs = 0,
        Pr = 0,
        Bi = null,
        db = 0;

    function dt() {
        throw Error(s(321))
    }

    function Xu(e, t) {
        if (t === null) return !1;
        for (var a = 0; a < t.length && a < e.length; a++)
            if (!Kt(e[a], t[a])) return !1;
        return !0
    }

    function Ku(e, t, a, r, o, c) {
        return ma = c, Ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, H.H = e === null || e.memoizedState === null ? X0 : K0, ri = !1, c = a(r, o), ri = !1, Ui && (c = c0(t, a, r, o)), u0(e), c
    }

    function u0(e) {
        H.H = Rs;
        var t = Ke !== null && Ke.next !== null;
        if (ma = 0, yt = Ke = Ne = null, bs = !1, Pr = 0, Bi = null, t) throw Error(s(300));
        e === null || wt || (e = e.dependencies, e !== null && hs(e) && (wt = !0))
    }

    function c0(e, t, a, r) {
        Ne = e;
        var o = 0;
        do {
            if (Ui && (Bi = null), Pr = 0, Ui = !1, 25 <= o) throw Error(s(301));
            if (o += 1, yt = Ke = null, e.updateQueue != null) {
                var c = e.updateQueue;
                c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0)
            }
            H.H = bb, c = t(a, r)
        } while (Ui);
        return c
    }

    function hb() {
        var e = H.H,
            t = e.useState()[0];
        return t = typeof t.then == "function" ? kr(t) : t, e = e.useState()[0], (Ke !== null ? Ke.memoizedState : null) !== e && (Ne.flags |= 1024), t
    }

    function Qu() {
        var e = xs !== 0;
        return xs = 0, e
    }

    function Zu(e, t, a) {
        t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a
    }

    function Fu(e) {
        if (bs) {
            for (e = e.memoizedState; e !== null;) {
                var t = e.queue;
                t !== null && (t.pending = null), e = e.next
            }
            bs = !1
        }
        ma = 0, yt = Ke = Ne = null, Ui = !1, Pr = xs = 0, Bi = null
    }

    function Bt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return yt === null ? Ne.memoizedState = yt = e : yt = yt.next = e, yt
    }

    function gt() {
        if (Ke === null) {
            var e = Ne.alternate;
            e = e !== null ? e.memoizedState : null
        } else e = Ke.next;
        var t = yt === null ? Ne.memoizedState : yt.next;
        if (t !== null) yt = t, Ke = e;
        else {
            if (e === null) throw Ne.alternate === null ? Error(s(467)) : Error(s(310));
            Ke = e, e = {
                memoizedState: Ke.memoizedState,
                baseState: Ke.baseState,
                baseQueue: Ke.baseQueue,
                queue: Ke.queue,
                next: null
            }, yt === null ? Ne.memoizedState = yt = e : yt = yt.next = e
        }
        return yt
    }

    function Iu() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }

    function kr(e) {
        var t = Pr;
        return Pr += 1, Bi === null && (Bi = []), e = a0(Bi, e, t), t = Ne, (yt === null ? t.memoizedState : yt.next) === null && (t = t.alternate, H.H = t === null || t.memoizedState === null ? X0 : K0), e
    }

    function Ss(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function") return kr(e);
            if (e.$$typeof === j) return _t(e)
        }
        throw Error(s(438, String(e)))
    }

    function $u(e) {
        var t = null,
            a = Ne.updateQueue;
        if (a !== null && (t = a.memoCache), t == null) {
            var r = Ne.alternate;
            r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
                data: r.data.map(function (o) {
                    return o.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }), a === null && (a = Iu(), Ne.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
            for (a = t.data[t.index] = Array(e), r = 0; r < e; r++) a[r] = ie;
        return t.index++, a
    }

    function Fn(e, t) {
        return typeof t == "function" ? t(e) : t
    }

    function ws(e) {
        var t = gt();
        return Ju(t, Ke, e)
    }

    function Ju(e, t, a) {
        var r = e.queue;
        if (r === null) throw Error(s(311));
        r.lastRenderedReducer = a;
        var o = e.baseQueue,
            c = r.pending;
        if (c !== null) {
            if (o !== null) {
                var g = o.next;
                o.next = c.next, c.next = g
            }
            t.baseQueue = o = c, r.pending = null
        }
        if (c = e.baseState, o === null) e.memoizedState = c;
        else {
            t = o.next;
            var S = g = null,
                R = null,
                k = t,
                I = !1;
            do {
                var W = k.lane & -536870913;
                if (W !== k.lane ? (Ue & W) === W : (ma & W) === W) {
                    var q = k.revertLane;
                    if (q === 0) R !== null && (R = R.next = {
                        lane: 0,
                        revertLane: 0,
                        action: k.action,
                        hasEagerState: k.hasEagerState,
                        eagerState: k.eagerState,
                        next: null
                    }), W === zi && (I = !0);
                    else if ((ma & q) === q) {
                        k = k.next, q === zi && (I = !0);
                        continue
                    } else W = {
                        lane: 0,
                        revertLane: k.revertLane,
                        action: k.action,
                        hasEagerState: k.hasEagerState,
                        eagerState: k.eagerState,
                        next: null
                    }, R === null ? (S = R = W, g = c) : R = R.next = W, Ne.lanes |= q, Sa |= q;
                    W = k.action, ri && a(c, W), c = k.hasEagerState ? k.eagerState : a(c, W)
                } else q = {
                    lane: W,
                    revertLane: k.revertLane,
                    action: k.action,
                    hasEagerState: k.hasEagerState,
                    eagerState: k.eagerState,
                    next: null
                }, R === null ? (S = R = q, g = c) : R = R.next = q, Ne.lanes |= W, Sa |= W;
                k = k.next
            } while (k !== null && k !== t);
            if (R === null ? g = c : R.next = S, !Kt(c, e.memoizedState) && (wt = !0, I && (a = Vi, a !== null))) throw a;
            e.memoizedState = c, e.baseState = g, e.baseQueue = R, r.lastRenderedState = c
        }
        return o === null && (r.lanes = 0), [e.memoizedState, r.dispatch]
    }

    function Wu(e) {
        var t = gt(),
            a = t.queue;
        if (a === null) throw Error(s(311));
        a.lastRenderedReducer = e;
        var r = a.dispatch,
            o = a.pending,
            c = t.memoizedState;
        if (o !== null) {
            a.pending = null;
            var g = o = o.next;
            do c = e(c, g.action), g = g.next; while (g !== o);
            Kt(c, t.memoizedState) || (wt = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), a.lastRenderedState = c
        }
        return [c, r]
    }

    function f0(e, t, a) {
        var r = Ne,
            o = gt(),
            c = Pe;
        if (c) {
            if (a === void 0) throw Error(s(407));
            a = a()
        } else a = t();
        var g = !Kt((Ke || o).memoizedState, a);
        g && (o.memoizedState = a, wt = !0), o = o.queue;
        var S = m0.bind(null, r, o, e);
        if (qr(2048, 8, S, [e]), o.getSnapshot !== t || g || yt !== null && yt.memoizedState.tag & 1) {
            if (r.flags |= 2048, Pi(9, Ts(), h0.bind(null, r, o, a, t), null), $e === null) throw Error(s(349));
            c || (ma & 124) !== 0 || d0(r, t, a)
        }
        return a
    }

    function d0(e, t, a) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: a
        }, t = Ne.updateQueue, t === null ? (t = Iu(), Ne.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e))
    }

    function h0(e, t, a, r) {
        t.value = a, t.getSnapshot = r, p0(t) && y0(e)
    }

    function m0(e, t, a) {
        return a(function () {
            p0(t) && y0(e)
        })
    }

    function p0(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var a = t();
            return !Kt(e, a)
        } catch {
            return !0
        }
    }

    function y0(e) {
        var t = _i(e, 2);
        t !== null && Jt(t, e, 2)
    }

    function ec(e) {
        var t = Bt();
        if (typeof e == "function") {
            var a = e;
            if (e = a(), ri) {
                vn(!0);
                try {
                    a()
                } finally {
                    vn(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e, t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Fn,
            lastRenderedState: e
        }, t
    }

    function g0(e, t, a, r) {
        return e.baseState = a, Ju(e, Ke, typeof r == "function" ? r : Fn)
    }

    function mb(e, t, a, r, o) {
        if (Ms(e)) throw Error(s(485));
        if (e = t.action, e !== null) {
            var c = {
                payload: o,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function (g) {
                    c.listeners.push(g)
                }
            };
            H.T !== null ? a(!0) : c.isTransition = !1, r(c), a = t.pending, a === null ? (c.next = t.pending = c, v0(t, c)) : (c.next = a.next, t.pending = a.next = c)
        }
    }

    function v0(e, t) {
        var a = t.action,
            r = t.payload,
            o = e.state;
        if (t.isTransition) {
            var c = H.T,
                g = {};
            H.T = g;
            try {
                var S = a(o, r),
                    R = H.S;
                R !== null && R(g, S), b0(e, t, S)
            } catch (k) {
                tc(e, t, k)
            } finally {
                H.T = c
            }
        } else try {
            c = a(o, r), b0(e, t, c)
        } catch (k) {
            tc(e, t, k)
        }
    }

    function b0(e, t, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function (r) {
            x0(e, t, r)
        }, function (r) {
            return tc(e, t, r)
        }) : x0(e, t, a)
    }

    function x0(e, t, a) {
        t.status = "fulfilled", t.value = a, S0(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, v0(e, a)))
    }

    function tc(e, t, a) {
        var r = e.pending;
        if (e.pending = null, r !== null) {
            r = r.next;
            do t.status = "rejected", t.reason = a, S0(t), t = t.next; while (t !== r)
        }
        e.action = null
    }

    function S0(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)(0, e[t])()
    }

    function w0(e, t) {
        return t
    }

    function T0(e, t) {
        if (Pe) {
            var a = $e.formState;
            if (a !== null) {
                e: {
                    var r = Ne;
                    if (Pe) {
                        if (ut) {
                            t: {
                                for (var o = ut, c = Rn; o.nodeType !== 8;) {
                                    if (!c) {
                                        o = null;
                                        break t
                                    }
                                    if (o = Sn(o.nextSibling), o === null) {
                                        o = null;
                                        break t
                                    }
                                }
                                c = o.data,
                                    o = c === "F!" || c === "F" ? o : null
                            }
                            if (o) {
                                ut = Sn(o.nextSibling), r = o.data === "F!";
                                break e
                            }
                        }
                        ti(r)
                    }
                    r = !1
                }
                r && (t = a[0])
            }
        }
        return a = Bt(), a.memoizedState = a.baseState = t, r = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: w0,
            lastRenderedState: t
        }, a.queue = r, a = q0.bind(null, Ne, r), r.dispatch = a, r = ec(!1), c = lc.bind(null, Ne, !1, r.queue), r = Bt(), o = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        }, r.queue = o, a = mb.bind(null, Ne, o, c, a), o.dispatch = a, r.memoizedState = e, [t, a, !1]
    }

    function E0(e) {
        var t = gt();
        return M0(t, Ke, e)
    }

    function M0(e, t, a) {
        if (t = Ju(e, t, w0)[0], e = ws(Fn)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
            var r = kr(t)
        } catch (g) {
            throw g === zr ? ys : g
        } else r = t;
        t = gt();
        var o = t.queue,
            c = o.dispatch;
        return a !== t.memoizedState && (Ne.flags |= 2048, Pi(9, Ts(), pb.bind(null, o, a), null)), [r, c, e]
    }

    function pb(e, t) {
        e.action = t
    }

    function R0(e) {
        var t = gt(),
            a = Ke;
        if (a !== null) return M0(t, a, e);
        gt(), t = t.memoizedState, a = gt();
        var r = a.queue.dispatch;
        return a.memoizedState = e, [t, r, !1]
    }

    function Pi(e, t, a, r) {
        return e = {
            tag: e,
            create: a,
            deps: r,
            inst: t,
            next: null
        }, t = Ne.updateQueue, t === null && (t = Iu(), Ne.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (r = a.next, a.next = e, e.next = r, t.lastEffect = e), e
    }

    function Ts() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }

    function A0() {
        return gt().memoizedState
    }

    function Es(e, t, a, r) {
        var o = Bt();
        r = r === void 0 ? null : r, Ne.flags |= e, o.memoizedState = Pi(1 | t, Ts(), a, r)
    }

    function qr(e, t, a, r) {
        var o = gt();
        r = r === void 0 ? null : r;
        var c = o.memoizedState.inst;
        Ke !== null && r !== null && Xu(r, Ke.memoizedState.deps) ? o.memoizedState = Pi(t, c, a, r) : (Ne.flags |= e, o.memoizedState = Pi(1 | t, c, a, r))
    }

    function D0(e, t) {
        Es(8390656, 8, e, t)
    }

    function O0(e, t) {
        qr(2048, 8, e, t)
    }

    function C0(e, t) {
        return qr(4, 2, e, t)
    }

    function _0(e, t) {
        return qr(4, 4, e, t)
    }

    function j0(e, t) {
        if (typeof t == "function") {
            e = e();
            var a = t(e);
            return function () {
                typeof a == "function" ? a() : t(null)
            }
        }
        if (t != null) return e = e(), t.current = e,
            function () {
                t.current = null
            }
    }

    function N0(e, t, a) {
        a = a != null ? a.concat([e]) : null, qr(4, 4, j0.bind(null, t, e), a)
    }

    function nc() { }

    function L0(e, t) {
        var a = gt();
        t = t === void 0 ? null : t;
        var r = a.memoizedState;
        return t !== null && Xu(t, r[1]) ? r[0] : (a.memoizedState = [e, t], e)
    }

    function z0(e, t) {
        var a = gt();
        t = t === void 0 ? null : t;
        var r = a.memoizedState;
        if (t !== null && Xu(t, r[1])) return r[0];
        if (r = e(), ri) {
            vn(!0);
            try {
                e()
            } finally {
                vn(!1)
            }
        }
        return a.memoizedState = [r, t], r
    }

    function ac(e, t, a) {
        return a === void 0 || (ma & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = Um(), Ne.lanes |= e, Sa |= e, a)
    }

    function V0(e, t, a, r) {
        return Kt(a, t) ? a : Hi.current !== null ? (e = ac(e, a, r), Kt(e, t) || (wt = !0), e) : (ma & 42) === 0 ? (wt = !0, e.memoizedState = a) : (e = Um(), Ne.lanes |= e, Sa |= e, t)
    }

    function H0(e, t, a, r, o) {
        var c = $.p;
        $.p = c !== 0 && 8 > c ? c : 8;
        var g = H.T,
            S = {};
        H.T = S, lc(e, !1, t, a);
        try {
            var R = o(),
                k = H.S;
            if (k !== null && k(S, R), R !== null && typeof R == "object" && typeof R.then == "function") {
                var I = fb(R, r);
                Yr(e, t, I, $t(e))
            } else Yr(e, t, r, $t(e))
        } catch (W) {
            Yr(e, t, {
                then: function () { },
                status: "rejected",
                reason: W
            }, $t())
        } finally {
            $.p = c, H.T = g
        }
    }

    function yb() { }

    function ic(e, t, a, r) {
        if (e.tag !== 5) throw Error(s(476));
        var o = U0(e).queue;
        H0(e, o, t, oe, a === null ? yb : function () {
            return B0(e), a(r)
        })
    }

    function U0(e) {
        var t = e.memoizedState;
        if (t !== null) return t;
        t = {
            memoizedState: oe,
            baseState: oe,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Fn,
                lastRenderedState: oe
            },
            next: null
        };
        var a = {};
        return t.next = {
            memoizedState: a,
            baseState: a,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Fn,
                lastRenderedState: a
            },
            next: null
        }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t
    }

    function B0(e) {
        var t = U0(e).next.queue;
        Yr(e, t, {}, $t())
    }

    function rc() {
        return _t(sl)
    }

    function P0() {
        return gt().memoizedState
    }

    function k0() {
        return gt().memoizedState
    }

    function gb(e) {
        for (var t = e.return; t !== null;) {
            switch (t.tag) {
                case 24:
                case 3:
                    var a = $t();
                    e = da(a);
                    var r = ha(t, e, a);
                    r !== null && (Jt(r, t, a), Hr(r, t, a)), t = {
                        cache: zu()
                    }, e.payload = t;
                    return
            }
            t = t.return
        }
    }

    function vb(e, t, a) {
        var r = $t();
        a = {
            lane: r,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Ms(e) ? Y0(t, a) : (a = Mu(e, t, a, r), a !== null && (Jt(a, e, r), G0(a, t, r)))
    }

    function q0(e, t, a) {
        var r = $t();
        Yr(e, t, a, r)
    }

    function Yr(e, t, a, r) {
        var o = {
            lane: r,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Ms(e)) Y0(t, o);
        else {
            var c = e.alternate;
            if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null)) try {
                var g = t.lastRenderedState,
                    S = c(g, a);
                if (o.hasEagerState = !0, o.eagerState = S, Kt(S, g)) return os(e, t, o, 0), $e === null && ss(), !1
            } catch { } finally { }
            if (a = Mu(e, t, o, r), a !== null) return Jt(a, e, r), G0(a, t, r), !0
        }
        return !1
    }

    function lc(e, t, a, r) {
        if (r = {
            lane: 2,
            revertLane: Uc(),
            action: r,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Ms(e)) {
            if (t) throw Error(s(479))
        } else t = Mu(e, a, r, 2), t !== null && Jt(t, e, 2)
    }

    function Ms(e) {
        var t = e.alternate;
        return e === Ne || t !== null && t === Ne
    }

    function Y0(e, t) {
        Ui = bs = !0;
        var a = e.pending;
        a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t
    }

    function G0(e, t, a) {
        if ((a & 4194048) !== 0) {
            var r = t.lanes;
            r &= e.pendingLanes, a |= r, t.lanes = a, Ka(e, a)
        }
    }
    var Rs = {
        readContext: _t,
        use: Ss,
        useCallback: dt,
        useContext: dt,
        useEffect: dt,
        useImperativeHandle: dt,
        useLayoutEffect: dt,
        useInsertionEffect: dt,
        useMemo: dt,
        useReducer: dt,
        useRef: dt,
        useState: dt,
        useDebugValue: dt,
        useDeferredValue: dt,
        useTransition: dt,
        useSyncExternalStore: dt,
        useId: dt,
        useHostTransitionStatus: dt,
        useFormState: dt,
        useActionState: dt,
        useOptimistic: dt,
        useMemoCache: dt,
        useCacheRefresh: dt
    },
        X0 = {
            readContext: _t,
            use: Ss,
            useCallback: function (e, t) {
                return Bt().memoizedState = [e, t === void 0 ? null : t], e
            },
            useContext: _t,
            useEffect: D0,
            useImperativeHandle: function (e, t, a) {
                a = a != null ? a.concat([e]) : null, Es(4194308, 4, j0.bind(null, t, e), a)
            },
            useLayoutEffect: function (e, t) {
                return Es(4194308, 4, e, t)
            },
            useInsertionEffect: function (e, t) {
                Es(4, 2, e, t)
            },
            useMemo: function (e, t) {
                var a = Bt();
                t = t === void 0 ? null : t;
                var r = e();
                if (ri) {
                    vn(!0);
                    try {
                        e()
                    } finally {
                        vn(!1)
                    }
                }
                return a.memoizedState = [r, t], r
            },
            useReducer: function (e, t, a) {
                var r = Bt();
                if (a !== void 0) {
                    var o = a(t);
                    if (ri) {
                        vn(!0);
                        try {
                            a(t)
                        } finally {
                            vn(!1)
                        }
                    }
                } else o = t;
                return r.memoizedState = r.baseState = o, e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: o
                }, r.queue = e, e = e.dispatch = vb.bind(null, Ne, e), [r.memoizedState, e]
            },
            useRef: function (e) {
                var t = Bt();
                return e = {
                    current: e
                }, t.memoizedState = e
            },
            useState: function (e) {
                e = ec(e);
                var t = e.queue,
                    a = q0.bind(null, Ne, t);
                return t.dispatch = a, [e.memoizedState, a]
            },
            useDebugValue: nc,
            useDeferredValue: function (e, t) {
                var a = Bt();
                return ac(a, e, t)
            },
            useTransition: function () {
                var e = ec(!1);
                return e = H0.bind(null, Ne, e.queue, !0, !1), Bt().memoizedState = e, [!1, e]
            },
            useSyncExternalStore: function (e, t, a) {
                var r = Ne,
                    o = Bt();
                if (Pe) {
                    if (a === void 0) throw Error(s(407));
                    a = a()
                } else {
                    if (a = t(), $e === null) throw Error(s(349));
                    (Ue & 124) !== 0 || d0(r, t, a)
                }
                o.memoizedState = a;
                var c = {
                    value: a,
                    getSnapshot: t
                };
                return o.queue = c, D0(m0.bind(null, r, c, e), [e]), r.flags |= 2048, Pi(9, Ts(), h0.bind(null, r, c, a, t), null), a
            },
            useId: function () {
                var e = Bt(),
                    t = $e.identifierPrefix;
                if (Pe) {
                    var a = Kn,
                        r = Xn;
                    a = (r & ~(1 << 32 - Rt(r) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = xs++, 0 < a && (t += "H" + a.toString(32)), t += "»"
                } else a = db++, t = "«" + t + "r" + a.toString(32) + "»";
                return e.memoizedState = t
            },
            useHostTransitionStatus: rc,
            useFormState: T0,
            useActionState: T0,
            useOptimistic: function (e) {
                var t = Bt();
                t.memoizedState = t.baseState = e;
                var a = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return t.queue = a, t = lc.bind(null, Ne, !0, a), a.dispatch = t, [e, t]
            },
            useMemoCache: $u,
            useCacheRefresh: function () {
                return Bt().memoizedState = gb.bind(null, Ne)
            }
        },
        K0 = {
            readContext: _t,
            use: Ss,
            useCallback: L0,
            useContext: _t,
            useEffect: O0,
            useImperativeHandle: N0,
            useInsertionEffect: C0,
            useLayoutEffect: _0,
            useMemo: z0,
            useReducer: ws,
            useRef: A0,
            useState: function () {
                return ws(Fn)
            },
            useDebugValue: nc,
            useDeferredValue: function (e, t) {
                var a = gt();
                return V0(a, Ke.memoizedState, e, t)
            },
            useTransition: function () {
                var e = ws(Fn)[0],
                    t = gt().memoizedState;
                return [typeof e == "boolean" ? e : kr(e), t]
            },
            useSyncExternalStore: f0,
            useId: P0,
            useHostTransitionStatus: rc,
            useFormState: E0,
            useActionState: E0,
            useOptimistic: function (e, t) {
                var a = gt();
                return g0(a, Ke, e, t)
            },
            useMemoCache: $u,
            useCacheRefresh: k0
        },
        bb = {
            readContext: _t,
            use: Ss,
            useCallback: L0,
            useContext: _t,
            useEffect: O0,
            useImperativeHandle: N0,
            useInsertionEffect: C0,
            useLayoutEffect: _0,
            useMemo: z0,
            useReducer: Wu,
            useRef: A0,
            useState: function () {
                return Wu(Fn)
            },
            useDebugValue: nc,
            useDeferredValue: function (e, t) {
                var a = gt();
                return Ke === null ? ac(a, e, t) : V0(a, Ke.memoizedState, e, t)
            },
            useTransition: function () {
                var e = Wu(Fn)[0],
                    t = gt().memoizedState;
                return [typeof e == "boolean" ? e : kr(e), t]
            },
            useSyncExternalStore: f0,
            useId: P0,
            useHostTransitionStatus: rc,
            useFormState: R0,
            useActionState: R0,
            useOptimistic: function (e, t) {
                var a = gt();
                return Ke !== null ? g0(a, Ke, e, t) : (a.baseState = e, [e, a.queue.dispatch])
            },
            useMemoCache: $u,
            useCacheRefresh: k0
        },
        ki = null,
        Gr = 0;

    function As(e) {
        var t = Gr;
        return Gr += 1, ki === null && (ki = []), a0(ki, e, t)
    }

    function Xr(e, t) {
        t = t.props.ref, e.ref = t !== void 0 ? t : null
    }

    function Ds(e, t) {
        throw t.$$typeof === v ? Error(s(525)) : (e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }

    function Q0(e) {
        var t = e._init;
        return t(e._payload)
    }

    function Z0(e) {
        function t(z, N) {
            if (e) {
                var P = z.deletions;
                P === null ? (z.deletions = [N], z.flags |= 16) : P.push(N)
            }
        }

        function a(z, N) {
            if (!e) return null;
            for (; N !== null;) t(z, N), N = N.sibling;
            return null
        }

        function r(z) {
            for (var N = new Map; z !== null;) z.key !== null ? N.set(z.key, z) : N.set(z.index, z), z = z.sibling;
            return N
        }

        function o(z, N) {
            return z = Gn(z, N), z.index = 0, z.sibling = null, z
        }

        function c(z, N, P) {
            return z.index = P, e ? (P = z.alternate, P !== null ? (P = P.index, P < N ? (z.flags |= 67108866, N) : P) : (z.flags |= 67108866, N)) : (z.flags |= 1048576, N)
        }

        function g(z) {
            return e && z.alternate === null && (z.flags |= 67108866), z
        }

        function S(z, N, P, J) {
            return N === null || N.tag !== 6 ? (N = Au(P, z.mode, J), N.return = z, N) : (N = o(N, P), N.return = z, N)
        }

        function R(z, N, P, J) {
            var fe = P.type;
            return fe === T ? I(z, N, P.props.children, J, P.key) : N !== null && (N.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === Z && Q0(fe) === N.type) ? (N = o(N, P.props), Xr(N, P), N.return = z, N) : (N = cs(P.type, P.key, P.props, null, z.mode, J), Xr(N, P), N.return = z, N)
        }

        function k(z, N, P, J) {
            return N === null || N.tag !== 4 || N.stateNode.containerInfo !== P.containerInfo || N.stateNode.implementation !== P.implementation ? (N = Du(P, z.mode, J), N.return = z, N) : (N = o(N, P.children || []), N.return = z, N)
        }

        function I(z, N, P, J, fe) {
            return N === null || N.tag !== 7 ? (N = $a(P, z.mode, J, fe), N.return = z, N) : (N = o(N, P), N.return = z, N)
        }

        function W(z, N, P) {
            if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint") return N = Au("" + N, z.mode, P), N.return = z, N;
            if (typeof N == "object" && N !== null) {
                switch (N.$$typeof) {
                    case b:
                        return P = cs(N.type, N.key, N.props, null, z.mode, P), Xr(P, N), P.return = z, P;
                    case x:
                        return N = Du(N, z.mode, P), N.return = z, N;
                    case Z:
                        var J = N._init;
                        return N = J(N._payload), W(z, N, P)
                }
                if (be(N) || K(N)) return N = $a(N, z.mode, P, null), N.return = z, N;
                if (typeof N.then == "function") return W(z, As(N), P);
                if (N.$$typeof === j) return W(z, ms(z, N), P);
                Ds(z, N)
            }
            return null
        }

        function q(z, N, P, J) {
            var fe = N !== null ? N.key : null;
            if (typeof P == "string" && P !== "" || typeof P == "number" || typeof P == "bigint") return fe !== null ? null : S(z, N, "" + P, J);
            if (typeof P == "object" && P !== null) {
                switch (P.$$typeof) {
                    case b:
                        return P.key === fe ? R(z, N, P, J) : null;
                    case x:
                        return P.key === fe ? k(z, N, P, J) : null;
                    case Z:
                        return fe = P._init, P = fe(P._payload), q(z, N, P, J)
                }
                if (be(P) || K(P)) return fe !== null ? null : I(z, N, P, J, null);
                if (typeof P.then == "function") return q(z, N, As(P), J);
                if (P.$$typeof === j) return q(z, N, ms(z, P), J);
                Ds(z, P)
            }
            return null
        }

        function Y(z, N, P, J, fe) {
            if (typeof J == "string" && J !== "" || typeof J == "number" || typeof J == "bigint") return z = z.get(P) || null, S(N, z, "" + J, fe);
            if (typeof J == "object" && J !== null) {
                switch (J.$$typeof) {
                    case b:
                        return z = z.get(J.key === null ? P : J.key) || null, R(N, z, J, fe);
                    case x:
                        return z = z.get(J.key === null ? P : J.key) || null, k(N, z, J, fe);
                    case Z:
                        var Le = J._init;
                        return J = Le(J._payload), Y(z, N, P, J, fe)
                }
                if (be(J) || K(J)) return z = z.get(P) || null, I(N, z, J, fe, null);
                if (typeof J.then == "function") return Y(z, N, P, As(J), fe);
                if (J.$$typeof === j) return Y(z, N, P, ms(N, J), fe);
                Ds(N, J)
            }
            return null
        }

        function Re(z, N, P, J) {
            for (var fe = null, Le = null, ve = N, Ee = N = 0, Et = null; ve !== null && Ee < P.length; Ee++) {
                ve.index > Ee ? (Et = ve, ve = null) : Et = ve.sibling;
                var Be = q(z, ve, P[Ee], J);
                if (Be === null) {
                    ve === null && (ve = Et);
                    break
                }
                e && ve && Be.alternate === null && t(z, ve), N = c(Be, N, Ee), Le === null ? fe = Be : Le.sibling = Be, Le = Be, ve = Et
            }
            if (Ee === P.length) return a(z, ve), Pe && Wa(z, Ee), fe;
            if (ve === null) {
                for (; Ee < P.length; Ee++) ve = W(z, P[Ee], J), ve !== null && (N = c(ve, N, Ee), Le === null ? fe = ve : Le.sibling = ve, Le = ve);
                return Pe && Wa(z, Ee), fe
            }
            for (ve = r(ve); Ee < P.length; Ee++) Et = Y(ve, z, Ee, P[Ee], J), Et !== null && (e && Et.alternate !== null && ve.delete(Et.key === null ? Ee : Et.key), N = c(Et, N, Ee), Le === null ? fe = Et : Le.sibling = Et, Le = Et);
            return e && ve.forEach(function (Ca) {
                return t(z, Ca)
            }), Pe && Wa(z, Ee), fe
        }

        function Te(z, N, P, J) {
            if (P == null) throw Error(s(151));
            for (var fe = null, Le = null, ve = N, Ee = N = 0, Et = null, Be = P.next(); ve !== null && !Be.done; Ee++, Be = P.next()) {
                ve.index > Ee ? (Et = ve, ve = null) : Et = ve.sibling;
                var Ca = q(z, ve, Be.value, J);
                if (Ca === null) {
                    ve === null && (ve = Et);
                    break
                }
                e && ve && Ca.alternate === null && t(z, ve), N = c(Ca, N, Ee), Le === null ? fe = Ca : Le.sibling = Ca, Le = Ca, ve = Et
            }
            if (Be.done) return a(z, ve), Pe && Wa(z, Ee), fe;
            if (ve === null) {
                for (; !Be.done; Ee++, Be = P.next()) Be = W(z, Be.value, J), Be !== null && (N = c(Be, N, Ee), Le === null ? fe = Be : Le.sibling = Be, Le = Be);
                return Pe && Wa(z, Ee), fe
            }
            for (ve = r(ve); !Be.done; Ee++, Be = P.next()) Be = Y(ve, z, Ee, Be.value, J), Be !== null && (e && Be.alternate !== null && ve.delete(Be.key === null ? Ee : Be.key), N = c(Be, N, Ee), Le === null ? fe = Be : Le.sibling = Be, Le = Be);
            return e && ve.forEach(function (x3) {
                return t(z, x3)
            }), Pe && Wa(z, Ee), fe
        }

        function Ze(z, N, P, J) {
            if (typeof P == "object" && P !== null && P.type === T && P.key === null && (P = P.props.children), typeof P == "object" && P !== null) {
                switch (P.$$typeof) {
                    case b:
                        e: {
                            for (var fe = P.key; N !== null;) {
                                if (N.key === fe) {
                                    if (fe = P.type, fe === T) {
                                        if (N.tag === 7) {
                                            a(z, N.sibling), J = o(N, P.props.children), J.return = z, z = J;
                                            break e
                                        }
                                    } else if (N.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === Z && Q0(fe) === N.type) {
                                        a(z, N.sibling), J = o(N, P.props), Xr(J, P), J.return = z, z = J;
                                        break e
                                    }
                                    a(z, N);
                                    break
                                } else t(z, N);
                                N = N.sibling
                            }
                            P.type === T ? (J = $a(P.props.children, z.mode, J, P.key), J.return = z, z = J) : (J = cs(P.type, P.key, P.props, null, z.mode, J), Xr(J, P), J.return = z, z = J)
                        }
                        return g(z);
                    case x:
                        e: {
                            for (fe = P.key; N !== null;) {
                                if (N.key === fe)
                                    if (N.tag === 4 && N.stateNode.containerInfo === P.containerInfo && N.stateNode.implementation === P.implementation) {
                                        a(z, N.sibling), J = o(N, P.children || []), J.return = z, z = J;
                                        break e
                                    } else {
                                        a(z, N);
                                        break
                                    }
                                else t(z, N);
                                N = N.sibling
                            }
                            J = Du(P, z.mode, J),
                                J.return = z,
                                z = J
                        }
                        return g(z);
                    case Z:
                        return fe = P._init, P = fe(P._payload), Ze(z, N, P, J)
                }
                if (be(P)) return Re(z, N, P, J);
                if (K(P)) {
                    if (fe = K(P), typeof fe != "function") throw Error(s(150));
                    return P = fe.call(P), Te(z, N, P, J)
                }
                if (typeof P.then == "function") return Ze(z, N, As(P), J);
                if (P.$$typeof === j) return Ze(z, N, ms(z, P), J);
                Ds(z, P)
            }
            return typeof P == "string" && P !== "" || typeof P == "number" || typeof P == "bigint" ? (P = "" + P, N !== null && N.tag === 6 ? (a(z, N.sibling), J = o(N, P), J.return = z, z = J) : (a(z, N), J = Au(P, z.mode, J), J.return = z, z = J), g(z)) : a(z, N)
        }
        return function (z, N, P, J) {
            try {
                Gr = 0;
                var fe = Ze(z, N, P, J);
                return ki = null, fe
            } catch (ve) {
                if (ve === zr || ve === ys) throw ve;
                var Le = Qt(29, ve, null, z.mode);
                return Le.lanes = J, Le.return = z, Le
            } finally { }
        }
    }
    var qi = Z0(!0),
        F0 = Z0(!1),
        un = F(null),
        An = null;

    function pa(e) {
        var t = e.alternate;
        re(St, St.current & 1), re(un, e), An === null && (t === null || Hi.current !== null || t.memoizedState !== null) && (An = e)
    }

    function I0(e) {
        if (e.tag === 22) {
            if (re(St, St.current), re(un, e), An === null) {
                var t = e.alternate;
                t !== null && t.memoizedState !== null && (An = e)
            }
        } else ya()
    }

    function ya() {
        re(St, St.current), re(un, un.current)
    }

    function In(e) {
        ue(un), An === e && (An = null), ue(St)
    }
    var St = F(0);

    function Os(e) {
        for (var t = e; t !== null;) {
            if (t.tag === 13) {
                var a = t.memoizedState;
                if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || Ic(a))) return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0) return t
            } else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }

    function sc(e, t, a, r) {
        t = e.memoizedState, a = a(r, t), a = a == null ? t : y({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a)
    }
    var oc = {
        enqueueSetState: function (e, t, a) {
            e = e._reactInternals;
            var r = $t(),
                o = da(r);
            o.payload = t, a != null && (o.callback = a), t = ha(e, o, r), t !== null && (Jt(t, e, r), Hr(t, e, r))
        },
        enqueueReplaceState: function (e, t, a) {
            e = e._reactInternals;
            var r = $t(),
                o = da(r);
            o.tag = 1, o.payload = t, a != null && (o.callback = a), t = ha(e, o, r), t !== null && (Jt(t, e, r), Hr(t, e, r))
        },
        enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var a = $t(),
                r = da(a);
            r.tag = 2, t != null && (r.callback = t), t = ha(e, r, a), t !== null && (Jt(t, e, a), Hr(t, e, a))
        }
    };

    function $0(e, t, a, r, o, c, g) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, c, g) : t.prototype && t.prototype.isPureReactComponent ? !Ar(a, r) || !Ar(o, c) : !0
    }

    function J0(e, t, a, r) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, r), t.state !== e && oc.enqueueReplaceState(t, t.state, null)
    }

    function li(e, t) {
        var a = t;
        if ("ref" in t) {
            a = {};
            for (var r in t) r !== "ref" && (a[r] = t[r])
        }
        if (e = e.defaultProps) {
            a === t && (a = y({}, a));
            for (var o in e) a[o] === void 0 && (a[o] = e[o])
        }
        return a
    }
    var Cs = typeof reportError == "function" ? reportError : function (e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    };

    function W0(e) {
        Cs(e)
    }

    function em(e) {
        console.error(e)
    }

    function tm(e) {
        Cs(e)
    }

    function _s(e, t) {
        try {
            var a = e.onUncaughtError;
            a(t.value, {
                componentStack: t.stack
            })
        } catch (r) {
            setTimeout(function () {
                throw r
            })
        }
    }

    function nm(e, t, a) {
        try {
            var r = e.onCaughtError;
            r(a.value, {
                componentStack: a.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (o) {
            setTimeout(function () {
                throw o
            })
        }
    }

    function uc(e, t, a) {
        return a = da(a), a.tag = 3, a.payload = {
            element: null
        }, a.callback = function () {
            _s(e, t)
        }, a
    }

    function am(e) {
        return e = da(e), e.tag = 3, e
    }

    function im(e, t, a, r) {
        var o = a.type.getDerivedStateFromError;
        if (typeof o == "function") {
            var c = r.value;
            e.payload = function () {
                return o(c)
            }, e.callback = function () {
                nm(t, a, r)
            }
        }
        var g = a.stateNode;
        g !== null && typeof g.componentDidCatch == "function" && (e.callback = function () {
            nm(t, a, r), typeof o != "function" && (wa === null ? wa = new Set([this]) : wa.add(this));
            var S = r.stack;
            this.componentDidCatch(r.value, {
                componentStack: S !== null ? S : ""
            })
        })
    }

    function xb(e, t, a, r, o) {
        if (a.flags |= 32768, r !== null && typeof r == "object" && typeof r.then == "function") {
            if (t = a.alternate, t !== null && jr(t, a, o, !0), a = un.current, a !== null) {
                switch (a.tag) {
                    case 13:
                        return An === null ? Nc() : a.alternate === null && ct === 0 && (ct = 3), a.flags &= -257, a.flags |= 65536, a.lanes = o, r === Uu ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = new Set([r]) : t.add(r), zc(e, r, o)), !1;
                    case 22:
                        return a.flags |= 65536, r === Uu ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([r])
                        }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = new Set([r]) : a.add(r)), zc(e, r, o)), !1
                }
                throw Error(s(435, a.tag))
            }
            return zc(e, r, o), Nc(), !1
        }
        if (Pe) return t = un.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, r !== _u && (e = Error(s(422), {
            cause: r
        }), _r(rn(e, a)))) : (r !== _u && (t = Error(s(423), {
            cause: r
        }), _r(rn(t, a))), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, r = rn(r, a), o = uc(e.stateNode, r, o), ku(e, o), ct !== 4 && (ct = 2)), !1;
        var c = Error(s(520), {
            cause: r
        });
        if (c = rn(c, a), Jr === null ? Jr = [c] : Jr.push(c), ct !== 4 && (ct = 2), t === null) return !0;
        r = rn(r, a), a = t;
        do {
            switch (a.tag) {
                case 3:
                    return a.flags |= 65536, e = o & -o, a.lanes |= e, e = uc(a.stateNode, r, e), ku(a, e), !1;
                case 1:
                    if (t = a.type, c = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (wa === null || !wa.has(c)))) return a.flags |= 65536, o &= -o, a.lanes |= o, o = am(o), im(o, e, a, r), ku(a, o), !1
            }
            a = a.return
        } while (a !== null);
        return !1
    }
    var rm = Error(s(461)),
        wt = !1;

    function At(e, t, a, r) {
        t.child = e === null ? F0(t, null, a, r) : qi(t, e.child, a, r)
    }

    function lm(e, t, a, r, o) {
        a = a.render;
        var c = t.ref;
        if ("ref" in r) {
            var g = {};
            for (var S in r) S !== "ref" && (g[S] = r[S])
        } else g = r;
        return ai(t), r = Ku(e, t, a, g, c, o), S = Qu(), e !== null && !wt ? (Zu(e, t, o), $n(e, t, o)) : (Pe && S && Ou(t), t.flags |= 1, At(e, t, r, o), t.child)
    }

    function sm(e, t, a, r, o) {
        if (e === null) {
            var c = a.type;
            return typeof c == "function" && !Ru(c) && c.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = c, om(e, t, c, r, o)) : (e = cs(a.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
        }
        if (c = e.child, !gc(e, o)) {
            var g = c.memoizedProps;
            if (a = a.compare, a = a !== null ? a : Ar, a(g, r) && e.ref === t.ref) return $n(e, t, o)
        }
        return t.flags |= 1, e = Gn(c, r), e.ref = t.ref, e.return = t, t.child = e
    }

    function om(e, t, a, r, o) {
        if (e !== null) {
            var c = e.memoizedProps;
            if (Ar(c, r) && e.ref === t.ref)
                if (wt = !1, t.pendingProps = r = c, gc(e, o)) (e.flags & 131072) !== 0 && (wt = !0);
                else return t.lanes = e.lanes, $n(e, t, o)
        }
        return cc(e, t, a, r, o)
    }

    function um(e, t, a) {
        var r = t.pendingProps,
            o = r.children,
            c = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (r = c !== null ? c.baseLanes | a : a, e !== null) {
                    for (o = t.child = e.child, c = 0; o !== null;) c = c | o.lanes | o.childLanes, o = o.sibling;
                    t.childLanes = c & ~r
                } else t.childLanes = 0, t.child = null;
                return cm(e, t, r, a)
            }
            if ((a & 536870912) !== 0) t.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, e !== null && ps(t, c !== null ? c.cachePool : null), c !== null ? o0(t, c) : Yu(), I0(t);
            else return t.lanes = t.childLanes = 536870912, cm(e, t, c !== null ? c.baseLanes | a : a, a)
        } else c !== null ? (ps(t, c.cachePool), o0(t, c), ya(), t.memoizedState = null) : (e !== null && ps(t, null), Yu(), ya());
        return At(e, t, o, a), t.child
    }

    function cm(e, t, a, r) {
        var o = Hu();
        return o = o === null ? null : {
            parent: xt._currentValue,
            pool: o
        }, t.memoizedState = {
            baseLanes: a,
            cachePool: o
        }, e !== null && ps(t, null), Yu(), I0(t), e !== null && jr(e, t, r, !0), null
    }

    function js(e, t) {
        var a = t.ref;
        if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof a != "function" && typeof a != "object") throw Error(s(284));
            (e === null || e.ref !== a) && (t.flags |= 4194816)
        }
    }

    function cc(e, t, a, r, o) {
        return ai(t), a = Ku(e, t, a, r, void 0, o), r = Qu(), e !== null && !wt ? (Zu(e, t, o), $n(e, t, o)) : (Pe && r && Ou(t), t.flags |= 1, At(e, t, a, o), t.child)
    }

    function fm(e, t, a, r, o, c) {
        return ai(t), t.updateQueue = null, a = c0(t, r, a, o), u0(e), r = Qu(), e !== null && !wt ? (Zu(e, t, c), $n(e, t, c)) : (Pe && r && Ou(t), t.flags |= 1, At(e, t, a, c), t.child)
    }

    function dm(e, t, a, r, o) {
        if (ai(t), t.stateNode === null) {
            var c = ji,
                g = a.contextType;
            typeof g == "object" && g !== null && (c = _t(g)), c = new a(r, c), t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = oc, t.stateNode = c, c._reactInternals = t, c = t.stateNode, c.props = r, c.state = t.memoizedState, c.refs = {}, Bu(t), g = a.contextType, c.context = typeof g == "object" && g !== null ? _t(g) : ji, c.state = t.memoizedState, g = a.getDerivedStateFromProps, typeof g == "function" && (sc(t, a, g, r), c.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (g = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), g !== c.state && oc.enqueueReplaceState(c, c.state, null), Br(t, r, c, o), Ur(), c.state = t.memoizedState), typeof c.componentDidMount == "function" && (t.flags |= 4194308), r = !0
        } else if (e === null) {
            c = t.stateNode;
            var S = t.memoizedProps,
                R = li(a, S);
            c.props = R;
            var k = c.context,
                I = a.contextType;
            g = ji, typeof I == "object" && I !== null && (g = _t(I));
            var W = a.getDerivedStateFromProps;
            I = typeof W == "function" || typeof c.getSnapshotBeforeUpdate == "function", S = t.pendingProps !== S, I || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (S || k !== g) && J0(t, c, r, g), fa = !1;
            var q = t.memoizedState;
            c.state = q, Br(t, r, c, o), Ur(), k = t.memoizedState, S || q !== k || fa ? (typeof W == "function" && (sc(t, a, W, r), k = t.memoizedState), (R = fa || $0(t, a, R, r, q, k, g)) ? (I || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = k), c.props = r, c.state = k, c.context = g, r = R) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
        } else {
            c = t.stateNode, Pu(e, t), g = t.memoizedProps, I = li(a, g), c.props = I, W = t.pendingProps, q = c.context, k = a.contextType, R = ji, typeof k == "object" && k !== null && (R = _t(k)), S = a.getDerivedStateFromProps, (k = typeof S == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (g !== W || q !== R) && J0(t, c, r, R), fa = !1, q = t.memoizedState, c.state = q, Br(t, r, c, o), Ur();
            var Y = t.memoizedState;
            g !== W || q !== Y || fa || e !== null && e.dependencies !== null && hs(e.dependencies) ? (typeof S == "function" && (sc(t, a, S, r), Y = t.memoizedState), (I = fa || $0(t, a, I, r, q, Y, R) || e !== null && e.dependencies !== null && hs(e.dependencies)) ? (k || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(r, Y, R), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(r, Y, R)), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || g === e.memoizedProps && q === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && q === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = Y), c.props = r, c.state = Y, c.context = R, r = I) : (typeof c.componentDidUpdate != "function" || g === e.memoizedProps && q === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && q === e.memoizedState || (t.flags |= 1024), r = !1)
        }
        return c = r, js(e, t), r = (t.flags & 128) !== 0, c || r ? (c = t.stateNode, a = r && typeof a.getDerivedStateFromError != "function" ? null : c.render(), t.flags |= 1, e !== null && r ? (t.child = qi(t, e.child, null, o), t.child = qi(t, null, a, o)) : At(e, t, a, o), t.memoizedState = c.state, e = t.child) : e = $n(e, t, o), e
    }

    function hm(e, t, a, r) {
        return Cr(), t.flags |= 256, At(e, t, a, r), t.child
    }
    var fc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };

    function dc(e) {
        return {
            baseLanes: e,
            cachePool: e0()
        }
    }

    function hc(e, t, a) {
        return e = e !== null ? e.childLanes & ~a : 0, t && (e |= cn), e
    }

    function mm(e, t, a) {
        var r = t.pendingProps,
            o = !1,
            c = (t.flags & 128) !== 0,
            g;
        if ((g = c) || (g = e !== null && e.memoizedState === null ? !1 : (St.current & 2) !== 0), g && (o = !0, t.flags &= -129), g = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
            if (Pe) {
                if (o ? pa(t) : ya(), Pe) {
                    var S = ut,
                        R;
                    if (R = S) {
                        e: {
                            for (R = S, S = Rn; R.nodeType !== 8;) {
                                if (!S) {
                                    S = null;
                                    break e
                                }
                                if (R = Sn(R.nextSibling), R === null) {
                                    S = null;
                                    break e
                                }
                            }
                            S = R
                        }
                        S !== null ? (t.memoizedState = {
                            dehydrated: S,
                            treeContext: Ja !== null ? {
                                id: Xn,
                                overflow: Kn
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        }, R = Qt(18, null, null, 0), R.stateNode = S, R.return = t, t.child = R, zt = t, ut = null, R = !0) : R = !1
                    }
                    R || ti(t)
                }
                if (S = t.memoizedState, S !== null && (S = S.dehydrated, S !== null)) return Ic(S) ? t.lanes = 32 : t.lanes = 536870912, null;
                In(t)
            }
            return S = r.children, r = r.fallback, o ? (ya(), o = t.mode, S = Ns({
                mode: "hidden",
                children: S
            }, o), r = $a(r, o, a, null), S.return = t, r.return = t, S.sibling = r, t.child = S, o = t.child, o.memoizedState = dc(a), o.childLanes = hc(e, g, a), t.memoizedState = fc, r) : (pa(t), mc(t, S))
        }
        if (R = e.memoizedState, R !== null && (S = R.dehydrated, S !== null)) {
            if (c) t.flags & 256 ? (pa(t), t.flags &= -257, t = pc(e, t, a)) : t.memoizedState !== null ? (ya(), t.child = e.child, t.flags |= 128, t = null) : (ya(), o = r.fallback, S = t.mode, r = Ns({
                mode: "visible",
                children: r.children
            }, S), o = $a(o, S, a, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, qi(t, e.child, null, a), r = t.child, r.memoizedState = dc(a), r.childLanes = hc(e, g, a), t.memoizedState = fc, t = o);
            else if (pa(t), Ic(S)) {
                if (g = S.nextSibling && S.nextSibling.dataset, g) var k = g.dgst;
                g = k, r = Error(s(419)), r.stack = "", r.digest = g, _r({
                    value: r,
                    source: null,
                    stack: null
                }), t = pc(e, t, a)
            } else if (wt || jr(e, t, a, !1), g = (a & e.childLanes) !== 0, wt || g) {
                if (g = $e, g !== null && (r = a & -a, r = (r & 42) !== 0 ? 1 : vr(r), r = (r & (g.suspendedLanes | a)) !== 0 ? 0 : r, r !== 0 && r !== R.retryLane)) throw R.retryLane = r, _i(e, r), Jt(g, e, r), rm;
                S.data === "$?" || Nc(), t = pc(e, t, a)
            } else S.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = R.treeContext, ut = Sn(S.nextSibling), zt = t, Pe = !0, ei = null, Rn = !1, e !== null && (sn[on++] = Xn, sn[on++] = Kn, sn[on++] = Ja, Xn = e.id, Kn = e.overflow, Ja = t), t = mc(t, r.children), t.flags |= 4096);
            return t
        }
        return o ? (ya(), o = r.fallback, S = t.mode, R = e.child, k = R.sibling, r = Gn(R, {
            mode: "hidden",
            children: r.children
        }), r.subtreeFlags = R.subtreeFlags & 65011712, k !== null ? o = Gn(k, o) : (o = $a(o, S, a, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, S = e.child.memoizedState, S === null ? S = dc(a) : (R = S.cachePool, R !== null ? (k = xt._currentValue, R = R.parent !== k ? {
            parent: k,
            pool: k
        } : R) : R = e0(), S = {
            baseLanes: S.baseLanes | a,
            cachePool: R
        }), o.memoizedState = S, o.childLanes = hc(e, g, a), t.memoizedState = fc, r) : (pa(t), a = e.child, e = a.sibling, a = Gn(a, {
            mode: "visible",
            children: r.children
        }), a.return = t, a.sibling = null, e !== null && (g = t.deletions, g === null ? (t.deletions = [e], t.flags |= 16) : g.push(e)), t.child = a, t.memoizedState = null, a)
    }

    function mc(e, t) {
        return t = Ns({
            mode: "visible",
            children: t
        }, e.mode), t.return = e, e.child = t
    }

    function Ns(e, t) {
        return e = Qt(22, e, null, t), e.lanes = 0, e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }, e
    }

    function pc(e, t, a) {
        return qi(t, e.child, null, a), e = mc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
    }

    function pm(e, t, a) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), Nu(e.return, t, a)
    }

    function yc(e, t, a, r, o) {
        var c = e.memoizedState;
        c === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: a,
            tailMode: o
        } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = r, c.tail = a, c.tailMode = o)
    }

    function ym(e, t, a) {
        var r = t.pendingProps,
            o = r.revealOrder,
            c = r.tail;
        if (At(e, t, r.children, a), r = St.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null;) {
                if (e.tag === 13) e.memoizedState !== null && pm(e, a, t);
                else if (e.tag === 19) pm(e, a, t);
                else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === t) break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            r &= 1
        }
        switch (re(St, r), o) {
            case "forwards":
                for (a = t.child, o = null; a !== null;) e = a.alternate, e !== null && Os(e) === null && (o = a), a = a.sibling;
                a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), yc(t, !1, o, a, c);
                break;
            case "backwards":
                for (a = null, o = t.child, t.child = null; o !== null;) {
                    if (e = o.alternate, e !== null && Os(e) === null) {
                        t.child = o;
                        break
                    }
                    e = o.sibling, o.sibling = a, a = o, o = e
                }
                yc(t, !0, a, null, c);
                break;
            case "together":
                yc(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function $n(e, t, a) {
        if (e !== null && (t.dependencies = e.dependencies), Sa |= t.lanes, (a & t.childLanes) === 0)
            if (e !== null) {
                if (jr(e, t, a, !1), (a & t.childLanes) === 0) return null
            } else return null;
        if (e !== null && t.child !== e.child) throw Error(s(153));
        if (t.child !== null) {
            for (e = t.child, a = Gn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null;) e = e.sibling, a = a.sibling = Gn(e, e.pendingProps), a.return = t;
            a.sibling = null
        }
        return t.child
    }

    function gc(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && hs(e)))
    }

    function Sb(e, t, a) {
        switch (t.tag) {
            case 3:
                Me(t, t.stateNode.containerInfo), ca(t, xt, e.memoizedState.cache), Cr();
                break;
            case 27:
            case 5:
                Ge(t);
                break;
            case 4:
                Me(t, t.stateNode.containerInfo);
                break;
            case 10:
                ca(t, t.type, t.memoizedProps.value);
                break;
            case 13:
                var r = t.memoizedState;
                if (r !== null) return r.dehydrated !== null ? (pa(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? mm(e, t, a) : (pa(t), e = $n(e, t, a), e !== null ? e.sibling : null);
                pa(t);
                break;
            case 19:
                var o = (e.flags & 128) !== 0;
                if (r = (a & t.childLanes) !== 0, r || (jr(e, t, a, !1), r = (a & t.childLanes) !== 0), o) {
                    if (r) return ym(e, t, a);
                    t.flags |= 128
                }
                if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), re(St, St.current), r) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, um(e, t, a);
            case 24:
                ca(t, xt, e.memoizedState.cache)
        }
        return $n(e, t, a)
    }

    function gm(e, t, a) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps) wt = !0;
            else {
                if (!gc(e, a) && (t.flags & 128) === 0) return wt = !1, Sb(e, t, a);
                wt = (e.flags & 131072) !== 0
            }
        else wt = !1, Pe && (t.flags & 1048576) !== 0 && Qh(t, ds, t.index);
        switch (t.lanes = 0, t.tag) {
            case 16:
                e: {
                    e = t.pendingProps;
                    var r = t.elementType,
                        o = r._init;
                    if (r = o(r._payload), t.type = r, typeof r == "function") Ru(r) ? (e = li(r, e), t.tag = 1, t = dm(null, t, r, e, a)) : (t.tag = 0, t = cc(null, t, r, e, a));
                    else {
                        if (r != null) {
                            if (o = r.$$typeof, o === Q) {
                                t.tag = 11, t = lm(null, t, r, e, a);
                                break e
                            } else if (o === G) {
                                t.tag = 14, t = sm(null, t, r, e, a);
                                break e
                            }
                        }
                        throw t = ae(r) || r, Error(s(306, t, ""))
                    }
                }
                return t;
            case 0:
                return cc(e, t, t.type, t.pendingProps, a);
            case 1:
                return r = t.type, o = li(r, t.pendingProps), dm(e, t, r, o, a);
            case 3:
                e: {
                    if (Me(t, t.stateNode.containerInfo), e === null) throw Error(s(387)); r = t.pendingProps;
                    var c = t.memoizedState; o = c.element,
                        Pu(e, t),
                        Br(t, r, null, a);
                    var g = t.memoizedState;
                    if (r = g.cache, ca(t, xt, r), r !== c.cache && Lu(t, [xt], a, !0), Ur(), r = g.element, c.isDehydrated)
                        if (c = {
                            element: r,
                            isDehydrated: !1,
                            cache: g.cache
                        }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
                            t = hm(e, t, r, a);
                            break e
                        } else if (r !== o) {
                            o = rn(Error(s(424)), t), _r(o), t = hm(e, t, r, a);
                            break e
                        } else {
                            switch (e = t.stateNode.containerInfo, e.nodeType) {
                                case 9:
                                    e = e.body;
                                    break;
                                default:
                                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e
                            }
                            for (ut = Sn(e.firstChild), zt = t, Pe = !0, ei = null, Rn = !0, a = F0(t, null, r, a), t.child = a; a;) a.flags = a.flags & -3 | 4096, a = a.sibling
                        } else {
                        if (Cr(), r === o) {
                            t = $n(e, t, a);
                            break e
                        }
                        At(e, t, r, a)
                    }
                    t = t.child
                }
                return t;
            case 26:
                return js(e, t), e === null ? (a = Sp(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : Pe || (a = t.type, e = t.pendingProps, r = Qs(Se.current).createElement(a), r[te] = t, r[le] = e, Ot(r, a, e), De(r), t.stateNode = r) : t.memoizedState = Sp(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
            case 27:
                return Ge(t), e === null && Pe && (r = t.stateNode = vp(t.type, t.pendingProps, Se.current), zt = t, Rn = !0, o = ut, Ma(t.type) ? ($c = o, ut = Sn(r.firstChild)) : ut = o), At(e, t, t.pendingProps.children, a), js(e, t), e === null && (t.flags |= 4194304), t.child;
            case 5:
                return e === null && Pe && ((o = r = ut) && (r = Fb(r, t.type, t.pendingProps, Rn), r !== null ? (t.stateNode = r, zt = t, ut = Sn(r.firstChild), Rn = !1, o = !0) : o = !1), o || ti(t)), Ge(t), o = t.type, c = t.pendingProps, g = e !== null ? e.memoizedProps : null, r = c.children, Qc(o, c) ? r = null : g !== null && Qc(o, g) && (t.flags |= 32), t.memoizedState !== null && (o = Ku(e, t, hb, null, null, a), sl._currentValue = o), js(e, t), At(e, t, r, a), t.child;
            case 6:
                return e === null && Pe && ((e = a = ut) && (a = Ib(a, t.pendingProps, Rn), a !== null ? (t.stateNode = a, zt = t, ut = null, e = !0) : e = !1), e || ti(t)), null;
            case 13:
                return mm(e, t, a);
            case 4:
                return Me(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = qi(t, null, r, a) : At(e, t, r, a), t.child;
            case 11:
                return lm(e, t, t.type, t.pendingProps, a);
            case 7:
                return At(e, t, t.pendingProps, a), t.child;
            case 8:
                return At(e, t, t.pendingProps.children, a), t.child;
            case 12:
                return At(e, t, t.pendingProps.children, a), t.child;
            case 10:
                return r = t.pendingProps, ca(t, t.type, r.value), At(e, t, r.children, a), t.child;
            case 9:
                return o = t.type._context, r = t.pendingProps.children, ai(t), o = _t(o), r = r(o), t.flags |= 1, At(e, t, r, a), t.child;
            case 14:
                return sm(e, t, t.type, t.pendingProps, a);
            case 15:
                return om(e, t, t.type, t.pendingProps, a);
            case 19:
                return ym(e, t, a);
            case 31:
                return r = t.pendingProps, a = t.mode, r = {
                    mode: r.mode,
                    children: r.children
                }, e === null ? (a = Ns(r, a), a.ref = t.ref, t.child = a, a.return = t, t = a) : (a = Gn(e.child, r), a.ref = t.ref, t.child = a, a.return = t, t = a), t;
            case 22:
                return um(e, t, a);
            case 24:
                return ai(t), r = _t(xt), e === null ? (o = Hu(), o === null && (o = $e, c = zu(), o.pooledCache = c, c.refCount++, c !== null && (o.pooledCacheLanes |= a), o = c), t.memoizedState = {
                    parent: r,
                    cache: o
                }, Bu(t), ca(t, xt, o)) : ((e.lanes & a) !== 0 && (Pu(e, t), Br(t, null, null, a), Ur()), o = e.memoizedState, c = t.memoizedState, o.parent !== r ? (o = {
                    parent: r,
                    cache: r
                }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), ca(t, xt, r)) : (r = c.cache, ca(t, xt, r), r !== o.cache && Lu(t, [xt], a, !0))), At(e, t, t.pendingProps.children, a), t.child;
            case 29:
                throw t.pendingProps
        }
        throw Error(s(156, t.tag))
    }

    function Jn(e) {
        e.flags |= 4
    }

    function vm(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
        else if (e.flags |= 16777216, !Rp(t)) {
            if (t = un.current, t !== null && ((Ue & 4194048) === Ue ? An !== null : (Ue & 62914560) !== Ue && (Ue & 536870912) === 0 || t !== An)) throw Vr = Uu, t0;
            e.flags |= 8192
        }
    }

    function Ls(e, t) {
        t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Zl() : 536870912, e.lanes |= t, Ki |= t)
    }

    function Kr(e, t) {
        if (!Pe) switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var a = null; t !== null;) t.alternate !== null && (a = t), t = t.sibling;
                a === null ? e.tail = null : a.sibling = null;
                break;
            case "collapsed":
                a = e.tail;
                for (var r = null; a !== null;) a.alternate !== null && (r = a), a = a.sibling;
                r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
    }

    function it(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            a = 0,
            r = 0;
        if (t)
            for (var o = e.child; o !== null;) a |= o.lanes | o.childLanes, r |= o.subtreeFlags & 65011712, r |= o.flags & 65011712, o.return = e, o = o.sibling;
        else
            for (o = e.child; o !== null;) a |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
        return e.subtreeFlags |= r, e.childLanes = a, t
    }

    function wb(e, t, a) {
        var r = t.pendingProps;
        switch (Cu(t), t.tag) {
            case 31:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return it(t), null;
            case 1:
                return it(t), null;
            case 3:
                return a = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), Zn(xt), lt(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Or(t) ? Jn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ih())), it(t), null;
            case 26:
                return a = t.memoizedState, e === null ? (Jn(t), a !== null ? (it(t), vm(t, a)) : (it(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (Jn(t), it(t), vm(t, a)) : (it(t), t.flags &= -16777217) : (e.memoizedProps !== r && Jn(t), it(t), t.flags &= -16777217), null;
            case 27:
                Mt(t), a = Se.current;
                var o = t.type;
                if (e !== null && t.stateNode != null) e.memoizedProps !== r && Jn(t);
                else {
                    if (!r) {
                        if (t.stateNode === null) throw Error(s(166));
                        return it(t), null
                    }
                    e = ce.current, Or(t) ? Zh(t) : (e = vp(o, r, a), t.stateNode = e, Jn(t))
                }
                return it(t), null;
            case 5:
                if (Mt(t), a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && Jn(t);
                else {
                    if (!r) {
                        if (t.stateNode === null) throw Error(s(166));
                        return it(t), null
                    }
                    if (e = ce.current, Or(t)) Zh(t);
                    else {
                        switch (o = Qs(Se.current), e) {
                            case 1:
                                e = o.createElementNS("http://www.w3.org/2000/svg", a);
                                break;
                            case 2:
                                e = o.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                                break;
                            default:
                                switch (a) {
                                    case "svg":
                                        e = o.createElementNS("http://www.w3.org/2000/svg", a);
                                        break;
                                    case "math":
                                        e = o.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                                        break;
                                    case "script":
                                        e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                                        break;
                                    case "select":
                                        e = typeof r.is == "string" ? o.createElement("select", {
                                            is: r.is
                                        }) : o.createElement("select"), r.multiple ? e.multiple = !0 : r.size && (e.size = r.size);
                                        break;
                                    default:
                                        e = typeof r.is == "string" ? o.createElement(a, {
                                            is: r.is
                                        }) : o.createElement(a)
                                }
                        }
                        e[te] = t, e[le] = r;
                        e: for (o = t.child; o !== null;) {
                            if (o.tag === 5 || o.tag === 6) e.appendChild(o.stateNode);
                            else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                                o.child.return = o, o = o.child;
                                continue
                            }
                            if (o === t) break e;
                            for (; o.sibling === null;) {
                                if (o.return === null || o.return === t) break e;
                                o = o.return
                            }
                            o.sibling.return = o.return, o = o.sibling
                        }
                        t.stateNode = e;
                        e: switch (Ot(e, a, r), a) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                e = !!r.autoFocus;
                                break e;
                            case "img":
                                e = !0;
                                break e;
                            default:
                                e = !1
                        }
                        e && Jn(t)
                    }
                }
                return it(t), t.flags &= -16777217, null;
            case 6:
                if (e && t.stateNode != null) e.memoizedProps !== r && Jn(t);
                else {
                    if (typeof r != "string" && t.stateNode === null) throw Error(s(166));
                    if (e = Se.current, Or(t)) {
                        if (e = t.stateNode, a = t.memoizedProps, r = null, o = zt, o !== null) switch (o.tag) {
                            case 27:
                            case 5:
                                r = o.memoizedProps
                        }
                        e[te] = t, e = !!(e.nodeValue === a || r !== null && r.suppressHydrationWarning === !0 || fp(e.nodeValue, a)), e || ti(t)
                    } else e = Qs(e).createTextNode(r), e[te] = t, t.stateNode = e
                }
                return it(t), null;
            case 13:
                if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (o = Or(t), r !== null && r.dehydrated !== null) {
                        if (e === null) {
                            if (!o) throw Error(s(318));
                            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(s(317));
                            o[te] = t
                        } else Cr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                        it(t), o = !1
                    } else o = Ih(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
                    if (!o) return t.flags & 256 ? (In(t), t) : (In(t), null)
                }
                if (In(t), (t.flags & 128) !== 0) return t.lanes = a, t;
                if (a = r !== null, e = e !== null && e.memoizedState !== null, a) {
                    r = t.child, o = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (o = r.alternate.memoizedState.cachePool.pool);
                    var c = null;
                    r.memoizedState !== null && r.memoizedState.cachePool !== null && (c = r.memoizedState.cachePool.pool), c !== o && (r.flags |= 2048)
                }
                return a !== e && a && (t.child.flags |= 8192), Ls(t, t.updateQueue), it(t), null;
            case 4:
                return lt(), e === null && qc(t.stateNode.containerInfo), it(t), null;
            case 10:
                return Zn(t.type), it(t), null;
            case 19:
                if (ue(St), o = t.memoizedState, o === null) return it(t), null;
                if (r = (t.flags & 128) !== 0, c = o.rendering, c === null)
                    if (r) Kr(o, !1);
                    else {
                        if (ct !== 0 || e !== null && (e.flags & 128) !== 0)
                            for (e = t.child; e !== null;) {
                                if (c = Os(e), c !== null) {
                                    for (t.flags |= 128, Kr(o, !1), e = c.updateQueue, t.updateQueue = e, Ls(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null;) Kh(a, e), a = a.sibling;
                                    return re(St, St.current & 1 | 2), t.child
                                }
                                e = e.sibling
                            }
                        o.tail !== null && Gt() > Hs && (t.flags |= 128, r = !0, Kr(o, !1), t.lanes = 4194304)
                    }
                else {
                    if (!r)
                        if (e = Os(c), e !== null) {
                            if (t.flags |= 128, r = !0, e = e.updateQueue, t.updateQueue = e, Ls(t, e), Kr(o, !0), o.tail === null && o.tailMode === "hidden" && !c.alternate && !Pe) return it(t), null
                        } else 2 * Gt() - o.renderingStartTime > Hs && a !== 536870912 && (t.flags |= 128, r = !0, Kr(o, !1), t.lanes = 4194304);
                    o.isBackwards ? (c.sibling = t.child, t.child = c) : (e = o.last, e !== null ? e.sibling = c : t.child = c, o.last = c)
                }
                return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Gt(), t.sibling = null, e = St.current, re(St, r ? e & 1 | 2 : e & 1), t) : (it(t), null);
            case 22:
            case 23:
                return In(t), Gu(), r = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== r && (t.flags |= 8192) : r && (t.flags |= 8192), r ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (it(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : it(t), a = t.updateQueue, a !== null && Ls(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== a && (t.flags |= 2048), e !== null && ue(ii), null;
            case 24:
                return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Zn(xt), it(t), null;
            case 25:
                return null;
            case 30:
                return null
        }
        throw Error(s(156, t.tag))
    }

    function Tb(e, t) {
        switch (Cu(t), t.tag) {
            case 1:
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return Zn(xt), lt(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
            case 26:
            case 27:
            case 5:
                return Mt(t), null;
            case 13:
                if (In(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(s(340));
                    Cr()
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return ue(St), null;
            case 4:
                return lt(), null;
            case 10:
                return Zn(t.type), null;
            case 22:
            case 23:
                return In(t), Gu(), e !== null && ue(ii), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 24:
                return Zn(xt), null;
            case 25:
                return null;
            default:
                return null
        }
    }

    function bm(e, t) {
        switch (Cu(t), t.tag) {
            case 3:
                Zn(xt), lt();
                break;
            case 26:
            case 27:
            case 5:
                Mt(t);
                break;
            case 4:
                lt();
                break;
            case 13:
                In(t);
                break;
            case 19:
                ue(St);
                break;
            case 10:
                Zn(t.type);
                break;
            case 22:
            case 23:
                In(t), Gu(), e !== null && ue(ii);
                break;
            case 24:
                Zn(xt)
        }
    }

    function Qr(e, t) {
        try {
            var a = t.updateQueue,
                r = a !== null ? a.lastEffect : null;
            if (r !== null) {
                var o = r.next;
                a = o;
                do {
                    if ((a.tag & e) === e) {
                        r = void 0;
                        var c = a.create,
                            g = a.inst;
                        r = c(), g.destroy = r
                    }
                    a = a.next
                } while (a !== o)
            }
        } catch (S) {
            Ie(t, t.return, S)
        }
    }

    function ga(e, t, a) {
        try {
            var r = t.updateQueue,
                o = r !== null ? r.lastEffect : null;
            if (o !== null) {
                var c = o.next;
                r = c;
                do {
                    if ((r.tag & e) === e) {
                        var g = r.inst,
                            S = g.destroy;
                        if (S !== void 0) {
                            g.destroy = void 0, o = t;
                            var R = a,
                                k = S;
                            try {
                                k()
                            } catch (I) {
                                Ie(o, R, I)
                            }
                        }
                    }
                    r = r.next
                } while (r !== c)
            }
        } catch (I) {
            Ie(t, t.return, I)
        }
    }

    function xm(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var a = e.stateNode;
            try {
                s0(t, a)
            } catch (r) {
                Ie(e, e.return, r)
            }
        }
    }

    function Sm(e, t, a) {
        a.props = li(e.type, e.memoizedProps), a.state = e.memoizedState;
        try {
            a.componentWillUnmount()
        } catch (r) {
            Ie(e, t, r)
        }
    }

    function Zr(e, t) {
        try {
            var a = e.ref;
            if (a !== null) {
                switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var r = e.stateNode;
                        break;
                    case 30:
                        r = e.stateNode;
                        break;
                    default:
                        r = e.stateNode
                }
                typeof a == "function" ? e.refCleanup = a(r) : a.current = r
            }
        } catch (o) {
            Ie(e, t, o)
        }
    }

    function Dn(e, t) {
        var a = e.ref,
            r = e.refCleanup;
        if (a !== null)
            if (typeof r == "function") try {
                r()
            } catch (o) {
                Ie(e, t, o)
            } finally {
                e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null)
            } else if (typeof a == "function") try {
                a(null)
            } catch (o) {
                Ie(e, t, o)
            } else a.current = null
    }

    function wm(e) {
        var t = e.type,
            a = e.memoizedProps,
            r = e.stateNode;
        try {
            e: switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    a.autoFocus && r.focus();
                    break e;
                case "img":
                    a.src ? r.src = a.src : a.srcSet && (r.srcset = a.srcSet)
            }
        }
        catch (o) {
            Ie(e, e.return, o)
        }
    }

    function vc(e, t, a) {
        try {
            var r = e.stateNode;
            Gb(r, e.type, a, t), r[le] = t
        } catch (o) {
            Ie(e, e.return, o)
        }
    }

    function Tm(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ma(e.type) || e.tag === 4
    }

    function bc(e) {
        e: for (; ;) {
            for (; e.sibling === null;) {
                if (e.return === null || Tm(e.return)) return null;
                e = e.return
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                if (e.tag === 27 && Ma(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child
            }
            if (!(e.flags & 2)) return e.stateNode
        }
    }

    function xc(e, t, a) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Ks));
        else if (r !== 4 && (r === 27 && Ma(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
            for (xc(e, t, a), e = e.sibling; e !== null;) xc(e, t, a), e = e.sibling
    }

    function zs(e, t, a) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
        else if (r !== 4 && (r === 27 && Ma(e.type) && (a = e.stateNode), e = e.child, e !== null))
            for (zs(e, t, a), e = e.sibling; e !== null;) zs(e, t, a), e = e.sibling
    }

    function Em(e) {
        var t = e.stateNode,
            a = e.memoizedProps;
        try {
            for (var r = e.type, o = t.attributes; o.length;) t.removeAttributeNode(o[0]);
            Ot(t, r, a), t[te] = e, t[le] = a
        } catch (c) {
            Ie(e, e.return, c)
        }
    }
    var Wn = !1,
        ht = !1,
        Sc = !1,
        Mm = typeof WeakSet == "function" ? WeakSet : Set,
        Tt = null;

    function Eb(e, t) {
        if (e = e.containerInfo, Xc = Ws, e = Vh(e), bu(e)) {
            if ("selectionStart" in e) var a = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
            else e: {
                a = (a = e.ownerDocument) && a.defaultView || window;
                var r = a.getSelection && a.getSelection();
                if (r && r.rangeCount !== 0) {
                    a = r.anchorNode;
                    var o = r.anchorOffset,
                        c = r.focusNode;
                    r = r.focusOffset;
                    try {
                        a.nodeType, c.nodeType
                    } catch {
                        a = null;
                        break e
                    }
                    var g = 0,
                        S = -1,
                        R = -1,
                        k = 0,
                        I = 0,
                        W = e,
                        q = null;
                    t: for (; ;) {
                        for (var Y; W !== a || o !== 0 && W.nodeType !== 3 || (S = g + o), W !== c || r !== 0 && W.nodeType !== 3 || (R = g + r), W.nodeType === 3 && (g += W.nodeValue.length), (Y = W.firstChild) !== null;) q = W, W = Y;
                        for (; ;) {
                            if (W === e) break t;
                            if (q === a && ++k === o && (S = g), q === c && ++I === r && (R = g), (Y = W.nextSibling) !== null) break;
                            W = q, q = W.parentNode
                        }
                        W = Y
                    }
                    a = S === -1 || R === -1 ? null : {
                        start: S,
                        end: R
                    }
                } else a = null
            }
            a = a || {
                start: 0,
                end: 0
            }
        } else a = null;
        for (Kc = {
            focusedElem: e,
            selectionRange: a
        }, Ws = !1, Tt = t; Tt !== null;)
            if (t = Tt, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null) e.return = t, Tt = e;
            else
                for (; Tt !== null;) {
                    switch (t = Tt, c = t.alternate, e = t.flags, t.tag) {
                        case 0:
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((e & 1024) !== 0 && c !== null) {
                                e = void 0, a = t, o = c.memoizedProps, c = c.memoizedState, r = a.stateNode;
                                try {
                                    var Re = li(a.type, o, a.elementType === a.type);
                                    e = r.getSnapshotBeforeUpdate(Re, c), r.__reactInternalSnapshotBeforeUpdate = e
                                } catch (Te) {
                                    Ie(a, a.return, Te)
                                }
                            }
                            break;
                        case 3:
                            if ((e & 1024) !== 0) {
                                if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9) Fc(e);
                                else if (a === 1) switch (e.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        Fc(e);
                                        break;
                                    default:
                                        e.textContent = ""
                                }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((e & 1024) !== 0) throw Error(s(163))
                    }
                    if (e = t.sibling, e !== null) {
                        e.return = t.return, Tt = e;
                        break
                    }
                    Tt = t.return
                }
    }

    function Rm(e, t, a) {
        var r = a.flags;
        switch (a.tag) {
            case 0:
            case 11:
            case 15:
                va(e, a), r & 4 && Qr(5, a);
                break;
            case 1:
                if (va(e, a), r & 4)
                    if (e = a.stateNode, t === null) try {
                        e.componentDidMount()
                    } catch (g) {
                        Ie(a, a.return, g)
                    } else {
                        var o = li(a.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(o, t, e.__reactInternalSnapshotBeforeUpdate)
                        } catch (g) {
                            Ie(a, a.return, g)
                        }
                    }
                r & 64 && xm(a), r & 512 && Zr(a, a.return);
                break;
            case 3:
                if (va(e, a), r & 64 && (e = a.updateQueue, e !== null)) {
                    if (t = null, a.child !== null) switch (a.child.tag) {
                        case 27:
                        case 5:
                            t = a.child.stateNode;
                            break;
                        case 1:
                            t = a.child.stateNode
                    }
                    try {
                        s0(e, t)
                    } catch (g) {
                        Ie(a, a.return, g)
                    }
                }
                break;
            case 27:
                t === null && r & 4 && Em(a);
            case 26:
            case 5:
                va(e, a), t === null && r & 4 && wm(a), r & 512 && Zr(a, a.return);
                break;
            case 12:
                va(e, a);
                break;
            case 13:
                va(e, a), r & 4 && Om(e, a), r & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = Nb.bind(null, a), $b(e, a))));
                break;
            case 22:
                if (r = a.memoizedState !== null || Wn, !r) {
                    t = t !== null && t.memoizedState !== null || ht, o = Wn;
                    var c = ht;
                    Wn = r, (ht = t) && !c ? ba(e, a, (a.subtreeFlags & 8772) !== 0) : va(e, a), Wn = o, ht = c
                }
                break;
            case 30:
                break;
            default:
                va(e, a)
        }
    }

    function Am(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, Am(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && ge(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
    }
    var We = null,
        Pt = !1;

    function ea(e, t, a) {
        for (a = a.child; a !== null;) Dm(e, t, a), a = a.sibling
    }

    function Dm(e, t, a) {
        if (nt && typeof nt.onCommitFiberUnmount == "function") try {
            nt.onCommitFiberUnmount(Ht, a)
        } catch { }
        switch (a.tag) {
            case 26:
                ht || Dn(a, t), ea(e, t, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
                break;
            case 27:
                ht || Dn(a, t);
                var r = We,
                    o = Pt;
                Ma(a.type) && (We = a.stateNode, Pt = !1), ea(e, t, a), al(a.stateNode), We = r, Pt = o;
                break;
            case 5:
                ht || Dn(a, t);
            case 6:
                if (r = We, o = Pt, We = null, ea(e, t, a), We = r, Pt = o, We !== null)
                    if (Pt) try {
                        (We.nodeType === 9 ? We.body : We.nodeName === "HTML" ? We.ownerDocument.body : We).removeChild(a.stateNode)
                    } catch (c) {
                        Ie(a, t, c)
                    } else try {
                        We.removeChild(a.stateNode)
                    } catch (c) {
                        Ie(a, t, c)
                    }
                break;
            case 18:
                We !== null && (Pt ? (e = We, yp(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, a.stateNode), fl(e)) : yp(We, a.stateNode));
                break;
            case 4:
                r = We, o = Pt, We = a.stateNode.containerInfo, Pt = !0, ea(e, t, a), We = r, Pt = o;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                ht || ga(2, a, t), ht || ga(4, a, t), ea(e, t, a);
                break;
            case 1:
                ht || (Dn(a, t), r = a.stateNode, typeof r.componentWillUnmount == "function" && Sm(a, t, r)), ea(e, t, a);
                break;
            case 21:
                ea(e, t, a);
                break;
            case 22:
                ht = (r = ht) || a.memoizedState !== null, ea(e, t, a), ht = r;
                break;
            default:
                ea(e, t, a)
        }
    }

    function Om(e, t) {
        if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
            fl(e)
        } catch (a) {
            Ie(t, t.return, a)
        }
    }

    function Mb(e) {
        switch (e.tag) {
            case 13:
            case 19:
                var t = e.stateNode;
                return t === null && (t = e.stateNode = new Mm), t;
            case 22:
                return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Mm), t;
            default:
                throw Error(s(435, e.tag))
        }
    }

    function wc(e, t) {
        var a = Mb(e);
        t.forEach(function (r) {
            var o = Lb.bind(null, e, r);
            a.has(r) || (a.add(r), r.then(o, o))
        })
    }

    function Zt(e, t) {
        var a = t.deletions;
        if (a !== null)
            for (var r = 0; r < a.length; r++) {
                var o = a[r],
                    c = e,
                    g = t,
                    S = g;
                e: for (; S !== null;) {
                    switch (S.tag) {
                        case 27:
                            if (Ma(S.type)) {
                                We = S.stateNode, Pt = !1;
                                break e
                            }
                            break;
                        case 5:
                            We = S.stateNode, Pt = !1;
                            break e;
                        case 3:
                        case 4:
                            We = S.stateNode.containerInfo, Pt = !0;
                            break e
                    }
                    S = S.return
                }
                if (We === null) throw Error(s(160));
                Dm(c, g, o), We = null, Pt = !1, c = o.alternate, c !== null && (c.return = null), o.return = null
            }
        if (t.subtreeFlags & 13878)
            for (t = t.child; t !== null;) Cm(t, e), t = t.sibling
    }
    var xn = null;

    function Cm(e, t) {
        var a = e.alternate,
            r = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Zt(t, e), Ft(e), r & 4 && (ga(3, e, e.return), Qr(3, e), ga(5, e, e.return));
                break;
            case 1:
                Zt(t, e), Ft(e), r & 512 && (ht || a === null || Dn(a, a.return)), r & 64 && Wn && (e = e.updateQueue, e !== null && (r = e.callbacks, r !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? r : a.concat(r))));
                break;
            case 26:
                var o = xn;
                if (Zt(t, e), Ft(e), r & 512 && (ht || a === null || Dn(a, a.return)), r & 4) {
                    var c = a !== null ? a.memoizedState : null;
                    if (r = e.memoizedState, a === null)
                        if (r === null)
                            if (e.stateNode === null) {
                                e: {
                                    r = e.type,
                                        a = e.memoizedProps,
                                        o = o.ownerDocument || o; t: switch (r) {
                                            case "title":
                                                c = o.getElementsByTagName("title")[0], (!c || c[me] || c[te] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = o.createElement(r), o.head.insertBefore(c, o.querySelector("head > title"))), Ot(c, r, a), c[te] = e, De(c), r = c;
                                                break e;
                                            case "link":
                                                var g = Ep("link", "href", o).get(r + (a.href || ""));
                                                if (g) {
                                                    for (var S = 0; S < g.length; S++)
                                                        if (c = g[S], c.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && c.getAttribute("rel") === (a.rel == null ? null : a.rel) && c.getAttribute("title") === (a.title == null ? null : a.title) && c.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                            g.splice(S, 1);
                                                            break t
                                                        }
                                                }
                                                c = o.createElement(r), Ot(c, r, a), o.head.appendChild(c);
                                                break;
                                            case "meta":
                                                if (g = Ep("meta", "content", o).get(r + (a.content || ""))) {
                                                    for (S = 0; S < g.length; S++)
                                                        if (c = g[S], c.getAttribute("content") === (a.content == null ? null : "" + a.content) && c.getAttribute("name") === (a.name == null ? null : a.name) && c.getAttribute("property") === (a.property == null ? null : a.property) && c.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && c.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                            g.splice(S, 1);
                                                            break t
                                                        }
                                                }
                                                c = o.createElement(r), Ot(c, r, a), o.head.appendChild(c);
                                                break;
                                            default:
                                                throw Error(s(468, r))
                                        }
                                    c[te] = e,
                                        De(c),
                                        r = c
                                }
                                e.stateNode = r
                            }
                            else Mp(o, e.type, e.stateNode);
                        else e.stateNode = Tp(o, r, e.memoizedProps);
                    else c !== r ? (c === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : c.count--, r === null ? Mp(o, e.type, e.stateNode) : Tp(o, r, e.memoizedProps)) : r === null && e.stateNode !== null && vc(e, e.memoizedProps, a.memoizedProps)
                }
                break;
            case 27:
                Zt(t, e), Ft(e), r & 512 && (ht || a === null || Dn(a, a.return)), a !== null && r & 4 && vc(e, e.memoizedProps, a.memoizedProps);
                break;
            case 5:
                if (Zt(t, e), Ft(e), r & 512 && (ht || a === null || Dn(a, a.return)), e.flags & 32) {
                    o = e.stateNode;
                    try {
                        Ei(o, "")
                    } catch (Y) {
                        Ie(e, e.return, Y)
                    }
                }
                r & 4 && e.stateNode != null && (o = e.memoizedProps, vc(e, o, a !== null ? a.memoizedProps : o)), r & 1024 && (Sc = !0);
                break;
            case 6:
                if (Zt(t, e), Ft(e), r & 4) {
                    if (e.stateNode === null) throw Error(s(162));
                    r = e.memoizedProps, a = e.stateNode;
                    try {
                        a.nodeValue = r
                    } catch (Y) {
                        Ie(e, e.return, Y)
                    }
                }
                break;
            case 3:
                if (Is = null, o = xn, xn = Zs(t.containerInfo), Zt(t, e), xn = o, Ft(e), r & 4 && a !== null && a.memoizedState.isDehydrated) try {
                    fl(t.containerInfo)
                } catch (Y) {
                    Ie(e, e.return, Y)
                }
                Sc && (Sc = !1, _m(e));
                break;
            case 4:
                r = xn, xn = Zs(e.stateNode.containerInfo), Zt(t, e), Ft(e), xn = r;
                break;
            case 12:
                Zt(t, e), Ft(e);
                break;
            case 13:
                Zt(t, e), Ft(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Dc = Gt()), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, wc(e, r)));
                break;
            case 22:
                o = e.memoizedState !== null;
                var R = a !== null && a.memoizedState !== null,
                    k = Wn,
                    I = ht;
                if (Wn = k || o, ht = I || R, Zt(t, e), ht = I, Wn = k, Ft(e), r & 8192) e: for (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, o && (a === null || R || Wn || ht || si(e)), a = null, t = e; ;) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (a === null) {
                            R = a = t;
                            try {
                                if (c = R.stateNode, o) g = c.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none";
                                else {
                                    S = R.stateNode;
                                    var W = R.memoizedProps.style,
                                        q = W != null && W.hasOwnProperty("display") ? W.display : null;
                                    S.style.display = q == null || typeof q == "boolean" ? "" : ("" + q).trim()
                                }
                            } catch (Y) {
                                Ie(R, R.return, Y)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (a === null) {
                            R = t;
                            try {
                                R.stateNode.nodeValue = o ? "" : R.memoizedProps
                            } catch (Y) {
                                Ie(R, R.return, Y)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t, t = t.child;
                        continue
                    }
                    if (t === e) break e;
                    for (; t.sibling === null;) {
                        if (t.return === null || t.return === e) break e;
                        a === t && (a = null), t = t.return
                    }
                    a === t && (a = null), t.sibling.return = t.return, t = t.sibling
                }
                r & 4 && (r = e.updateQueue, r !== null && (a = r.retryQueue, a !== null && (r.retryQueue = null, wc(e, a))));
                break;
            case 19:
                Zt(t, e), Ft(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, wc(e, r)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                Zt(t, e), Ft(e)
        }
    }

    function Ft(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var a, r = e.return; r !== null;) {
                    if (Tm(r)) {
                        a = r;
                        break
                    }
                    r = r.return
                }
                if (a == null) throw Error(s(160));
                switch (a.tag) {
                    case 27:
                        var o = a.stateNode,
                            c = bc(e);
                        zs(e, c, o);
                        break;
                    case 5:
                        var g = a.stateNode;
                        a.flags & 32 && (Ei(g, ""), a.flags &= -33);
                        var S = bc(e);
                        zs(e, S, g);
                        break;
                    case 3:
                    case 4:
                        var R = a.stateNode.containerInfo,
                            k = bc(e);
                        xc(e, k, R);
                        break;
                    default:
                        throw Error(s(161))
                }
            } catch (I) {
                Ie(e, e.return, I)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }

    function _m(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null;) {
                var t = e;
                _m(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling
            }
    }

    function va(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null;) Rm(e, t.alternate, t), t = t.sibling
    }

    function si(e) {
        for (e = e.child; e !== null;) {
            var t = e;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    ga(4, t, t.return), si(t);
                    break;
                case 1:
                    Dn(t, t.return);
                    var a = t.stateNode;
                    typeof a.componentWillUnmount == "function" && Sm(t, t.return, a), si(t);
                    break;
                case 27:
                    al(t.stateNode);
                case 26:
                case 5:
                    Dn(t, t.return), si(t);
                    break;
                case 22:
                    t.memoizedState === null && si(t);
                    break;
                case 30:
                    si(t);
                    break;
                default:
                    si(t)
            }
            e = e.sibling
        }
    }

    function ba(e, t, a) {
        for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
            var r = t.alternate,
                o = e,
                c = t,
                g = c.flags;
            switch (c.tag) {
                case 0:
                case 11:
                case 15:
                    ba(o, c, a), Qr(4, c);
                    break;
                case 1:
                    if (ba(o, c, a), r = c, o = r.stateNode, typeof o.componentDidMount == "function") try {
                        o.componentDidMount()
                    } catch (k) {
                        Ie(r, r.return, k)
                    }
                    if (r = c, o = r.updateQueue, o !== null) {
                        var S = r.stateNode;
                        try {
                            var R = o.shared.hiddenCallbacks;
                            if (R !== null)
                                for (o.shared.hiddenCallbacks = null, o = 0; o < R.length; o++) l0(R[o], S)
                        } catch (k) {
                            Ie(r, r.return, k)
                        }
                    }
                    a && g & 64 && xm(c), Zr(c, c.return);
                    break;
                case 27:
                    Em(c);
                case 26:
                case 5:
                    ba(o, c, a), a && r === null && g & 4 && wm(c), Zr(c, c.return);
                    break;
                case 12:
                    ba(o, c, a);
                    break;
                case 13:
                    ba(o, c, a), a && g & 4 && Om(o, c);
                    break;
                case 22:
                    c.memoizedState === null && ba(o, c, a), Zr(c, c.return);
                    break;
                case 30:
                    break;
                default:
                    ba(o, c, a)
            }
            t = t.sibling
        }
    }

    function Tc(e, t) {
        var a = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Nr(a))
    }

    function Ec(e, t) {
        e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Nr(e))
    }

    function On(e, t, a, r) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) jm(e, t, a, r), t = t.sibling
    }

    function jm(e, t, a, r) {
        var o = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                On(e, t, a, r), o & 2048 && Qr(9, t);
                break;
            case 1:
                On(e, t, a, r);
                break;
            case 3:
                On(e, t, a, r), o & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Nr(e)));
                break;
            case 12:
                if (o & 2048) {
                    On(e, t, a, r), e = t.stateNode;
                    try {
                        var c = t.memoizedProps,
                            g = c.id,
                            S = c.onPostCommit;
                        typeof S == "function" && S(g, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                    } catch (R) {
                        Ie(t, t.return, R)
                    }
                } else On(e, t, a, r);
                break;
            case 13:
                On(e, t, a, r);
                break;
            case 23:
                break;
            case 22:
                c = t.stateNode, g = t.alternate, t.memoizedState !== null ? c._visibility & 2 ? On(e, t, a, r) : Fr(e, t) : c._visibility & 2 ? On(e, t, a, r) : (c._visibility |= 2, Yi(e, t, a, r, (t.subtreeFlags & 10256) !== 0)), o & 2048 && Tc(g, t);
                break;
            case 24:
                On(e, t, a, r), o & 2048 && Ec(t.alternate, t);
                break;
            default:
                On(e, t, a, r)
        }
    }

    function Yi(e, t, a, r, o) {
        for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null;) {
            var c = e,
                g = t,
                S = a,
                R = r,
                k = g.flags;
            switch (g.tag) {
                case 0:
                case 11:
                case 15:
                    Yi(c, g, S, R, o), Qr(8, g);
                    break;
                case 23:
                    break;
                case 22:
                    var I = g.stateNode;
                    g.memoizedState !== null ? I._visibility & 2 ? Yi(c, g, S, R, o) : Fr(c, g) : (I._visibility |= 2, Yi(c, g, S, R, o)), o && k & 2048 && Tc(g.alternate, g);
                    break;
                case 24:
                    Yi(c, g, S, R, o), o && k & 2048 && Ec(g.alternate, g);
                    break;
                default:
                    Yi(c, g, S, R, o)
            }
            t = t.sibling
        }
    }

    function Fr(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) {
                var a = e,
                    r = t,
                    o = r.flags;
                switch (r.tag) {
                    case 22:
                        Fr(a, r), o & 2048 && Tc(r.alternate, r);
                        break;
                    case 24:
                        Fr(a, r), o & 2048 && Ec(r.alternate, r);
                        break;
                    default:
                        Fr(a, r)
                }
                t = t.sibling
            }
    }
    var Ir = 8192;

    function Gi(e) {
        if (e.subtreeFlags & Ir)
            for (e = e.child; e !== null;) Nm(e), e = e.sibling
    }

    function Nm(e) {
        switch (e.tag) {
            case 26:
                Gi(e), e.flags & Ir && e.memoizedState !== null && c3(xn, e.memoizedState, e.memoizedProps);
                break;
            case 5:
                Gi(e);
                break;
            case 3:
            case 4:
                var t = xn;
                xn = Zs(e.stateNode.containerInfo), Gi(e), xn = t;
                break;
            case 22:
                e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Ir, Ir = 16777216, Gi(e), Ir = t) : Gi(e));
                break;
            default:
                Gi(e)
        }
    }

    function Lm(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child, e !== null)) {
            t.child = null;
            do t = e.sibling, e.sibling = null, e = t; while (e !== null)
        }
    }

    function $r(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var r = t[a];
                    Tt = r, Vm(r, e)
                }
            Lm(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null;) zm(e), e = e.sibling
    }

    function zm(e) {
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                $r(e), e.flags & 2048 && ga(9, e, e.return);
                break;
            case 3:
                $r(e);
                break;
            case 12:
                $r(e);
                break;
            case 22:
                var t = e.stateNode;
                e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Vs(e)) : $r(e);
                break;
            default:
                $r(e)
        }
    }

    function Vs(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var r = t[a];
                    Tt = r, Vm(r, e)
                }
            Lm(e)
        }
        for (e = e.child; e !== null;) {
            switch (t = e, t.tag) {
                case 0:
                case 11:
                case 15:
                    ga(8, t, t.return), Vs(t);
                    break;
                case 22:
                    a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, Vs(t));
                    break;
                default:
                    Vs(t)
            }
            e = e.sibling
        }
    }

    function Vm(e, t) {
        for (; Tt !== null;) {
            var a = Tt;
            switch (a.tag) {
                case 0:
                case 11:
                case 15:
                    ga(8, a, t);
                    break;
                case 23:
                case 22:
                    if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                        var r = a.memoizedState.cachePool.pool;
                        r != null && r.refCount++
                    }
                    break;
                case 24:
                    Nr(a.memoizedState.cache)
            }
            if (r = a.child, r !== null) r.return = a, Tt = r;
            else e: for (a = e; Tt !== null;) {
                r = Tt;
                var o = r.sibling,
                    c = r.return;
                if (Am(r), r === a) {
                    Tt = null;
                    break e
                }
                if (o !== null) {
                    o.return = c, Tt = o;
                    break e
                }
                Tt = c
            }
        }
    }
    var Rb = {
        getCacheForType: function (e) {
            var t = _t(xt),
                a = t.data.get(e);
            return a === void 0 && (a = e(), t.data.set(e, a)), a
        }
    },
        Ab = typeof WeakMap == "function" ? WeakMap : Map,
        qe = 0,
        $e = null,
        ze = null,
        Ue = 0,
        Ye = 0,
        It = null,
        xa = !1,
        Xi = !1,
        Mc = !1,
        ta = 0,
        ct = 0,
        Sa = 0,
        oi = 0,
        Rc = 0,
        cn = 0,
        Ki = 0,
        Jr = null,
        kt = null,
        Ac = !1,
        Dc = 0,
        Hs = 1 / 0,
        Us = null,
        wa = null,
        Dt = 0,
        Ta = null,
        Qi = null,
        Zi = 0,
        Oc = 0,
        Cc = null,
        Hm = null,
        Wr = 0,
        _c = null;

    function $t() {
        if ((qe & 2) !== 0 && Ue !== 0) return Ue & -Ue;
        if (H.T !== null) {
            var e = zi;
            return e !== 0 ? e : Uc()
        }
        return _()
    }

    function Um() {
        cn === 0 && (cn = (Ue & 536870912) === 0 || Pe ? xi() : 536870912);
        var e = un.current;
        return e !== null && (e.flags |= 32), cn
    }

    function Jt(e, t, a) {
        (e === $e && (Ye === 2 || Ye === 9) || e.cancelPendingCommit !== null) && (Fi(e, 0), Ea(e, Ue, cn, !1)), Ga(e, a), ((qe & 2) === 0 || e !== $e) && (e === $e && ((qe & 2) === 0 && (oi |= a), ct === 4 && Ea(e, Ue, cn, !1)), Cn(e))
    }

    function Bm(e, t, a) {
        if ((qe & 6) !== 0) throw Error(s(327));
        var r = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || En(e, t),
            o = r ? Cb(e, t) : Lc(e, t, !0),
            c = r;
        do {
            if (o === 0) {
                Xi && !r && Ea(e, t, 0, !1);
                break
            } else {
                if (a = e.current.alternate, c && !Db(a)) {
                    o = Lc(e, t, !1), c = !1;
                    continue
                }
                if (o === 2) {
                    if (c = t, e.errorRecoveryDisabledLanes & c) var g = 0;
                    else g = e.pendingLanes & -536870913, g = g !== 0 ? g : g & 536870912 ? 536870912 : 0;
                    if (g !== 0) {
                        t = g;
                        e: {
                            var S = e; o = Jr;
                            var R = S.current.memoizedState.isDehydrated;
                            if (R && (Fi(S, g).flags |= 256), g = Lc(S, g, !1), g !== 2) {
                                if (Mc && !R) {
                                    S.errorRecoveryDisabledLanes |= c, oi |= c, o = 4;
                                    break e
                                }
                                c = kt, kt = o, c !== null && (kt === null ? kt = c : kt.push.apply(kt, c))
                            }
                            o = g
                        }
                        if (c = !1, o !== 2) continue
                    }
                }
                if (o === 1) {
                    Fi(e, 0), Ea(e, t, 0, !0);
                    break
                }
                e: {
                    switch (r = e, c = o, c) {
                        case 0:
                        case 1:
                            throw Error(s(345));
                        case 4:
                            if ((t & 4194048) !== t) break;
                        case 6:
                            Ea(r, t, cn, !xa);
                            break e;
                        case 2:
                            kt = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(s(329))
                    }
                    if ((t & 62914560) === t && (o = Dc + 300 - Gt(), 10 < o)) {
                        if (Ea(r, t, cn, !xa), Ya(r, 0, !0) !== 0) break e;
                        r.timeoutHandle = mp(Pm.bind(null, r, a, kt, Us, Ac, t, cn, oi, Ki, xa, c, 2, -0, 0), o);
                        break e
                    }
                    Pm(r, a, kt, Us, Ac, t, cn, oi, Ki, xa, c, 0, -0, 0)
                }
            }
            break
        } while (!0);
        Cn(e)
    }

    function Pm(e, t, a, r, o, c, g, S, R, k, I, W, q, Y) {
        if (e.timeoutHandle = -1, W = t.subtreeFlags, (W & 8192 || (W & 16785408) === 16785408) && (ll = {
            stylesheets: null,
            count: 0,
            unsuspend: u3
        }, Nm(t), W = f3(), W !== null)) {
            e.cancelPendingCommit = W(Qm.bind(null, e, t, c, a, r, o, g, S, R, I, 1, q, Y)), Ea(e, c, g, !k);
            return
        }
        Qm(e, t, c, a, r, o, g, S, R)
    }

    function Db(e) {
        for (var t = e; ;) {
            var a = t.tag;
            if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
                for (var r = 0; r < a.length; r++) {
                    var o = a[r],
                        c = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Kt(c(), o)) return !1
                    } catch {
                        return !1
                    }
                }
            if (a = t.child, t.subtreeFlags & 16384 && a !== null) a.return = t, t = a;
            else {
                if (t === e) break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e) return !0;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return !0
    }

    function Ea(e, t, a, r) {
        t &= ~Rc, t &= ~oi, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
        for (var o = t; 0 < o;) {
            var c = 31 - Rt(o),
                g = 1 << c;
            r[c] = -1, o &= ~g
        }
        a !== 0 && Xa(e, a, t)
    }

    function Bs() {
        return (qe & 6) === 0 ? (el(0), !1) : !0
    }

    function jc() {
        if (ze !== null) {
            if (Ye === 0) var e = ze.return;
            else e = ze, Qn = ni = null, Fu(e), ki = null, Gr = 0, e = ze;
            for (; e !== null;) bm(e.alternate, e), e = e.return;
            ze = null
        }
    }

    function Fi(e, t) {
        var a = e.timeoutHandle;
        a !== -1 && (e.timeoutHandle = -1, Kb(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), jc(), $e = e, ze = a = Gn(e.current, null), Ue = t, Ye = 0, It = null, xa = !1, Xi = En(e, t), Mc = !1, Ki = cn = Rc = oi = Sa = ct = 0, kt = Jr = null, Ac = !1, (t & 8) !== 0 && (t |= t & 32);
        var r = e.entangledLanes;
        if (r !== 0)
            for (e = e.entanglements, r &= t; 0 < r;) {
                var o = 31 - Rt(r),
                    c = 1 << o;
                t |= e[o], r &= ~c
            }
        return ta = t, ss(), a
    }

    function km(e, t) {
        Ne = null, H.H = Rs, t === zr || t === ys ? (t = i0(), Ye = 3) : t === t0 ? (t = i0(), Ye = 4) : Ye = t === rm ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, It = t, ze === null && (ct = 1, _s(e, rn(t, e.current)))
    }

    function qm() {
        var e = H.H;
        return H.H = Rs, e === null ? Rs : e
    }

    function Ym() {
        var e = H.A;
        return H.A = Rb, e
    }

    function Nc() {
        ct = 4, xa || (Ue & 4194048) !== Ue && un.current !== null || (Xi = !0), (Sa & 134217727) === 0 && (oi & 134217727) === 0 || $e === null || Ea($e, Ue, cn, !1)
    }

    function Lc(e, t, a) {
        var r = qe;
        qe |= 2;
        var o = qm(),
            c = Ym();
        ($e !== e || Ue !== t) && (Us = null, Fi(e, t)), t = !1;
        var g = ct;
        e: do try {
            if (Ye !== 0 && ze !== null) {
                var S = ze,
                    R = It;
                switch (Ye) {
                    case 8:
                        jc(), g = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        un.current === null && (t = !0);
                        var k = Ye;
                        if (Ye = 0, It = null, Ii(e, S, R, k), a && Xi) {
                            g = 0;
                            break e
                        }
                        break;
                    default:
                        k = Ye, Ye = 0, It = null, Ii(e, S, R, k)
                }
            }
            Ob(), g = ct;
            break
        } catch (I) {
            km(e, I)
        }
        while (!0);
        return t && e.shellSuspendCounter++, Qn = ni = null, qe = r, H.H = o, H.A = c, ze === null && ($e = null, Ue = 0, ss()), g
    }

    function Ob() {
        for (; ze !== null;) Gm(ze)
    }

    function Cb(e, t) {
        var a = qe;
        qe |= 2;
        var r = qm(),
            o = Ym();
        $e !== e || Ue !== t ? (Us = null, Hs = Gt() + 500, Fi(e, t)) : Xi = En(e, t);
        e: do try {
            if (Ye !== 0 && ze !== null) {
                t = ze;
                var c = It;
                t: switch (Ye) {
                    case 1:
                        Ye = 0, It = null, Ii(e, t, c, 1);
                        break;
                    case 2:
                    case 9:
                        if (n0(c)) {
                            Ye = 0, It = null, Xm(t);
                            break
                        }
                        t = function () {
                            Ye !== 2 && Ye !== 9 || $e !== e || (Ye = 7), Cn(e)
                        }, c.then(t, t);
                        break e;
                    case 3:
                        Ye = 7;
                        break e;
                    case 4:
                        Ye = 5;
                        break e;
                    case 7:
                        n0(c) ? (Ye = 0, It = null, Xm(t)) : (Ye = 0, It = null, Ii(e, t, c, 7));
                        break;
                    case 5:
                        var g = null;
                        switch (ze.tag) {
                            case 26:
                                g = ze.memoizedState;
                            case 5:
                            case 27:
                                var S = ze;
                                if (!g || Rp(g)) {
                                    Ye = 0, It = null;
                                    var R = S.sibling;
                                    if (R !== null) ze = R;
                                    else {
                                        var k = S.return;
                                        k !== null ? (ze = k, Ps(k)) : ze = null
                                    }
                                    break t
                                }
                        }
                        Ye = 0, It = null, Ii(e, t, c, 5);
                        break;
                    case 6:
                        Ye = 0, It = null, Ii(e, t, c, 6);
                        break;
                    case 8:
                        jc(), ct = 6;
                        break e;
                    default:
                        throw Error(s(462))
                }
            }
            _b();
            break
        } catch (I) {
            km(e, I)
        }
        while (!0);
        return Qn = ni = null, H.H = r, H.A = o, qe = a, ze !== null ? 0 : ($e = null, Ue = 0, ss(), ct)
    }

    function _b() {
        for (; ze !== null && !eu();) Gm(ze)
    }

    function Gm(e) {
        var t = gm(e.alternate, e, ta);
        e.memoizedProps = e.pendingProps, t === null ? Ps(e) : ze = t
    }

    function Xm(e) {
        var t = e,
            a = t.alternate;
        switch (t.tag) {
            case 15:
            case 0:
                t = fm(a, t, t.pendingProps, t.type, void 0, Ue);
                break;
            case 11:
                t = fm(a, t, t.pendingProps, t.type.render, t.ref, Ue);
                break;
            case 5:
                Fu(t);
            default:
                bm(a, t), t = ze = Kh(t, ta), t = gm(a, t, ta)
        }
        e.memoizedProps = e.pendingProps, t === null ? Ps(e) : ze = t
    }

    function Ii(e, t, a, r) {
        Qn = ni = null, Fu(t), ki = null, Gr = 0;
        var o = t.return;
        try {
            if (xb(e, o, t, a, Ue)) {
                ct = 1, _s(e, rn(a, e.current)), ze = null;
                return
            }
        } catch (c) {
            if (o !== null) throw ze = o, c;
            ct = 1, _s(e, rn(a, e.current)), ze = null;
            return
        }
        t.flags & 32768 ? (Pe || r === 1 ? e = !0 : Xi || (Ue & 536870912) !== 0 ? e = !1 : (xa = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = un.current, r !== null && r.tag === 13 && (r.flags |= 16384))), Km(t, e)) : Ps(t)
    }

    function Ps(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                Km(t, xa);
                return
            }
            e = t.return;
            var a = wb(t.alternate, t, ta);
            if (a !== null) {
                ze = a;
                return
            }
            if (t = t.sibling, t !== null) {
                ze = t;
                return
            }
            ze = t = e
        } while (t !== null);
        ct === 0 && (ct = 5)
    }

    function Km(e, t) {
        do {
            var a = Tb(e.alternate, e);
            if (a !== null) {
                a.flags &= 32767, ze = a;
                return
            }
            if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
                ze = e;
                return
            }
            ze = e = a
        } while (e !== null);
        ct = 6, ze = null
    }

    function Qm(e, t, a, r, o, c, g, S, R) {
        e.cancelPendingCommit = null;
        do ks(); while (Dt !== 0);
        if ((qe & 6) !== 0) throw Error(s(327));
        if (t !== null) {
            if (t === e.current) throw Error(s(177));
            if (c = t.lanes | t.childLanes, c |= Eu, Fl(e, a, c, g, S, R), e === $e && (ze = $e = null, Ue = 0), Qi = t, Ta = e, Zi = a, Oc = c, Cc = o, Hm = r, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, zb(bi, function () {
                return Jm(), null
            })) : (e.callbackNode = null, e.callbackPriority = 0), r = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || r) {
                r = H.T, H.T = null, o = $.p, $.p = 2, g = qe, qe |= 4;
                try {
                    Eb(e, t, a)
                } finally {
                    qe = g, $.p = o, H.T = r
                }
            }
            Dt = 1, Zm(), Fm(), Im()
        }
    }

    function Zm() {
        if (Dt === 1) {
            Dt = 0;
            var e = Ta,
                t = Qi,
                a = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || a) {
                a = H.T, H.T = null;
                var r = $.p;
                $.p = 2;
                var o = qe;
                qe |= 4;
                try {
                    Cm(t, e);
                    var c = Kc,
                        g = Vh(e.containerInfo),
                        S = c.focusedElem,
                        R = c.selectionRange;
                    if (g !== S && S && S.ownerDocument && zh(S.ownerDocument.documentElement, S)) {
                        if (R !== null && bu(S)) {
                            var k = R.start,
                                I = R.end;
                            if (I === void 0 && (I = k), "selectionStart" in S) S.selectionStart = k, S.selectionEnd = Math.min(I, S.value.length);
                            else {
                                var W = S.ownerDocument || document,
                                    q = W && W.defaultView || window;
                                if (q.getSelection) {
                                    var Y = q.getSelection(),
                                        Re = S.textContent.length,
                                        Te = Math.min(R.start, Re),
                                        Ze = R.end === void 0 ? Te : Math.min(R.end, Re);
                                    !Y.extend && Te > Ze && (g = Ze, Ze = Te, Te = g);
                                    var z = Lh(S, Te),
                                        N = Lh(S, Ze);
                                    if (z && N && (Y.rangeCount !== 1 || Y.anchorNode !== z.node || Y.anchorOffset !== z.offset || Y.focusNode !== N.node || Y.focusOffset !== N.offset)) {
                                        var P = W.createRange();
                                        P.setStart(z.node, z.offset), Y.removeAllRanges(), Te > Ze ? (Y.addRange(P), Y.extend(N.node, N.offset)) : (P.setEnd(N.node, N.offset), Y.addRange(P))
                                    }
                                }
                            }
                        }
                        for (W = [], Y = S; Y = Y.parentNode;) Y.nodeType === 1 && W.push({
                            element: Y,
                            left: Y.scrollLeft,
                            top: Y.scrollTop
                        });
                        for (typeof S.focus == "function" && S.focus(), S = 0; S < W.length; S++) {
                            var J = W[S];
                            J.element.scrollLeft = J.left, J.element.scrollTop = J.top
                        }
                    }
                    Ws = !!Xc, Kc = Xc = null
                } finally {
                    qe = o, $.p = r, H.T = a
                }
            }
            e.current = t, Dt = 2
        }
    }

    function Fm() {
        if (Dt === 2) {
            Dt = 0;
            var e = Ta,
                t = Qi,
                a = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || a) {
                a = H.T, H.T = null;
                var r = $.p;
                $.p = 2;
                var o = qe;
                qe |= 4;
                try {
                    Rm(e, t.alternate, t)
                } finally {
                    qe = o, $.p = r, H.T = a
                }
            }
            Dt = 3
        }
    }

    function Im() {
        if (Dt === 4 || Dt === 3) {
            Dt = 0, tu();
            var e = Ta,
                t = Qi,
                a = Zi,
                r = Hm;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Dt = 5 : (Dt = 0, Qi = Ta = null, $m(e, e.pendingLanes));
            var o = e.pendingLanes;
            if (o === 0 && (wa = null), br(a), t = t.stateNode, nt && typeof nt.onCommitFiberRoot == "function") try {
                nt.onCommitFiberRoot(Ht, t, void 0, (t.current.flags & 128) === 128)
            } catch { }
            if (r !== null) {
                t = H.T, o = $.p, $.p = 2, H.T = null;
                try {
                    for (var c = e.onRecoverableError, g = 0; g < r.length; g++) {
                        var S = r[g];
                        c(S.value, {
                            componentStack: S.stack
                        })
                    }
                } finally {
                    H.T = t, $.p = o
                }
            } (Zi & 3) !== 0 && ks(), Cn(e), o = e.pendingLanes, (a & 4194090) !== 0 && (o & 42) !== 0 ? e === _c ? Wr++ : (Wr = 0, _c = e) : Wr = 0, el(0)
        }
    }

    function $m(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Nr(t)))
    }

    function ks(e) {
        return Zm(), Fm(), Im(), Jm()
    }

    function Jm() {
        if (Dt !== 5) return !1;
        var e = Ta,
            t = Oc;
        Oc = 0;
        var a = br(Zi),
            r = H.T,
            o = $.p;
        try {
            $.p = 32 > a ? 32 : a, H.T = null, a = Cc, Cc = null;
            var c = Ta,
                g = Zi;
            if (Dt = 0, Qi = Ta = null, Zi = 0, (qe & 6) !== 0) throw Error(s(331));
            var S = qe;
            if (qe |= 4, zm(c.current), jm(c, c.current, g, a), qe = S, el(0, !1), nt && typeof nt.onPostCommitFiberRoot == "function") try {
                nt.onPostCommitFiberRoot(Ht, c)
            } catch { }
            return !0
        } finally {
            $.p = o, H.T = r, $m(e, t)
        }
    }

    function Wm(e, t, a) {
        t = rn(a, t), t = uc(e.stateNode, t, 2), e = ha(e, t, 2), e !== null && (Ga(e, 2), Cn(e))
    }

    function Ie(e, t, a) {
        if (e.tag === 3) Wm(e, e, a);
        else
            for (; t !== null;) {
                if (t.tag === 3) {
                    Wm(t, e, a);
                    break
                } else if (t.tag === 1) {
                    var r = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (wa === null || !wa.has(r))) {
                        e = rn(a, e), a = am(2), r = ha(t, a, 2), r !== null && (im(a, r, t, e), Ga(r, 2), Cn(r));
                        break
                    }
                }
                t = t.return
            }
    }

    function zc(e, t, a) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new Ab;
            var o = new Set;
            r.set(t, o)
        } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
        o.has(a) || (Mc = !0, o.add(a), e = jb.bind(null, e, t, a), t.then(e, e))
    }

    function jb(e, t, a) {
        var r = e.pingCache;
        r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, $e === e && (Ue & a) === a && (ct === 4 || ct === 3 && (Ue & 62914560) === Ue && 300 > Gt() - Dc ? (qe & 2) === 0 && Fi(e, 0) : Rc |= a, Ki === Ue && (Ki = 0)), Cn(e)
    }

    function ep(e, t) {
        t === 0 && (t = Zl()), e = _i(e, t), e !== null && (Ga(e, t), Cn(e))
    }

    function Nb(e) {
        var t = e.memoizedState,
            a = 0;
        t !== null && (a = t.retryLane), ep(e, a)
    }

    function Lb(e, t) {
        var a = 0;
        switch (e.tag) {
            case 13:
                var r = e.stateNode,
                    o = e.memoizedState;
                o !== null && (a = o.retryLane);
                break;
            case 19:
                r = e.stateNode;
                break;
            case 22:
                r = e.stateNode._retryCache;
                break;
            default:
                throw Error(s(314))
        }
        r !== null && r.delete(t), ep(e, a)
    }

    function zb(e, t) {
        return yr(e, t)
    }
    var qs = null,
        $i = null,
        Vc = !1,
        Ys = !1,
        Hc = !1,
        ui = 0;

    function Cn(e) {
        e !== $i && e.next === null && ($i === null ? qs = $i = e : $i = $i.next = e), Ys = !0, Vc || (Vc = !0, Hb())
    }

    function el(e, t) {
        if (!Hc && Ys) {
            Hc = !0;
            do
                for (var a = !1, r = qs; r !== null;) {
                    if (e !== 0) {
                        var o = r.pendingLanes;
                        if (o === 0) var c = 0;
                        else {
                            var g = r.suspendedLanes,
                                S = r.pingedLanes;
                            c = (1 << 31 - Rt(42 | e) + 1) - 1, c &= o & ~(g & ~S), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0
                        }
                        c !== 0 && (a = !0, ip(r, c))
                    } else c = Ue, c = Ya(r, r === $e ? c : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), (c & 3) === 0 || En(r, c) || (a = !0, ip(r, c));
                    r = r.next
                }
            while (a);
            Hc = !1
        }
    }

    function Vb() {
        tp()
    }

    function tp() {
        Ys = Vc = !1;
        var e = 0;
        ui !== 0 && (Xb() && (e = ui), ui = 0);
        for (var t = Gt(), a = null, r = qs; r !== null;) {
            var o = r.next,
                c = np(r, t);
            c === 0 ? (r.next = null, a === null ? qs = o : a.next = o, o === null && ($i = a)) : (a = r, (e !== 0 || (c & 3) !== 0) && (Ys = !0)), r = o
        }
        el(e)
    }

    function np(e, t) {
        for (var a = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c;) {
            var g = 31 - Rt(c),
                S = 1 << g,
                R = o[g];
            R === -1 ? ((S & a) === 0 || (S & r) !== 0) && (o[g] = Ql(S, t)) : R <= t && (e.expiredLanes |= S), c &= ~S
        }
        if (t = $e, a = Ue, a = Ya(e, e === t ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, a === 0 || e === t && (Ye === 2 || Ye === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && gn(r), e.callbackNode = null, e.callbackPriority = 0;
        if ((a & 3) === 0 || En(e, a)) {
            if (t = a & -a, t === e.callbackPriority) return t;
            switch (r !== null && gn(r), br(a)) {
                case 2:
                case 8:
                    a = Gl;
                    break;
                case 32:
                    a = bi;
                    break;
                case 268435456:
                    a = la;
                    break;
                default:
                    a = bi
            }
            return r = ap.bind(null, e), a = yr(a, r), e.callbackPriority = t, e.callbackNode = a, t
        }
        return r !== null && r !== null && gn(r), e.callbackPriority = 2, e.callbackNode = null, 2
    }

    function ap(e, t) {
        if (Dt !== 0 && Dt !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
        var a = e.callbackNode;
        if (ks() && e.callbackNode !== a) return null;
        var r = Ue;
        return r = Ya(e, e === $e ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (Bm(e, r, t), np(e, Gt()), e.callbackNode != null && e.callbackNode === a ? ap.bind(null, e) : null)
    }

    function ip(e, t) {
        if (ks()) return null;
        Bm(e, t, !0)
    }

    function Hb() {
        Qb(function () {
            (qe & 6) !== 0 ? yr(Yl, Vb) : tp()
        })
    }

    function Uc() {
        return ui === 0 && (ui = xi()), ui
    }

    function rp(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : es("" + e)
    }

    function lp(e, t) {
        var a = t.ownerDocument.createElement("input");
        return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e
    }

    function Ub(e, t, a, r, o) {
        if (t === "submit" && a && a.stateNode === o) {
            var c = rp((o[le] || null).action),
                g = r.submitter;
            g && (t = (t = g[le] || null) ? rp(t.formAction) : g.getAttribute("formAction"), t !== null && (c = t, g = null));
            var S = new is("action", "action", null, r, o);
            e.push({
                event: S,
                listeners: [{
                    instance: null,
                    listener: function () {
                        if (r.defaultPrevented) {
                            if (ui !== 0) {
                                var R = g ? lp(o, g) : new FormData(o);
                                ic(a, {
                                    pending: !0,
                                    data: R,
                                    method: o.method,
                                    action: c
                                }, null, R)
                            }
                        } else typeof c == "function" && (S.preventDefault(), R = g ? lp(o, g) : new FormData(o), ic(a, {
                            pending: !0,
                            data: R,
                            method: o.method,
                            action: c
                        }, c, R))
                    },
                    currentTarget: o
                }]
            })
        }
    }
    for (var Bc = 0; Bc < Tu.length; Bc++) {
        var Pc = Tu[Bc],
            Bb = Pc.toLowerCase(),
            Pb = Pc[0].toUpperCase() + Pc.slice(1);
        bn(Bb, "on" + Pb)
    }
    bn(Bh, "onAnimationEnd"), bn(Ph, "onAnimationIteration"), bn(kh, "onAnimationStart"), bn("dblclick", "onDoubleClick"), bn("focusin", "onFocus"), bn("focusout", "onBlur"), bn(ab, "onTransitionRun"), bn(ib, "onTransitionStart"), bn(rb, "onTransitionCancel"), bn(qh, "onTransitionEnd"), Lt("onMouseEnter", ["mouseout", "mouseover"]), Lt("onMouseLeave", ["mouseout", "mouseover"]), Lt("onPointerEnter", ["pointerout", "pointerover"]), Lt("onPointerLeave", ["pointerout", "pointerover"]), Xt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Xt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Xt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Xt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Xt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Xt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var tl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        kb = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tl));

    function sp(e, t) {
        t = (t & 4) !== 0;
        for (var a = 0; a < e.length; a++) {
            var r = e[a],
                o = r.event;
            r = r.listeners;
            e: {
                var c = void 0;
                if (t)
                    for (var g = r.length - 1; 0 <= g; g--) {
                        var S = r[g],
                            R = S.instance,
                            k = S.currentTarget;
                        if (S = S.listener, R !== c && o.isPropagationStopped()) break e;
                        c = S, o.currentTarget = k;
                        try {
                            c(o)
                        } catch (I) {
                            Cs(I)
                        }
                        o.currentTarget = null, c = R
                    } else
                    for (g = 0; g < r.length; g++) {
                        if (S = r[g], R = S.instance, k = S.currentTarget, S = S.listener, R !== c && o.isPropagationStopped()) break e;
                        c = S, o.currentTarget = k;
                        try {
                            c(o)
                        } catch (I) {
                            Cs(I)
                        }
                        o.currentTarget = null, c = R
                    }
            }
        }
    }

    function Ve(e, t) {
        var a = t[pe];
        a === void 0 && (a = t[pe] = new Set);
        var r = e + "__bubble";
        a.has(r) || (op(t, e, 2, !1), a.add(r))
    }

    function kc(e, t, a) {
        var r = 0;
        t && (r |= 4), op(a, e, r, t)
    }
    var Gs = "_reactListening" + Math.random().toString(36).slice(2);

    function qc(e) {
        if (!e[Gs]) {
            e[Gs] = !0, Xe.forEach(function (a) {
                a !== "selectionchange" && (kb.has(a) || kc(a, !1, e), kc(a, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Gs] || (t[Gs] = !0, kc("selectionchange", !1, t))
        }
    }

    function op(e, t, a, r) {
        switch (jp(t)) {
            case 2:
                var o = m3;
                break;
            case 8:
                o = p3;
                break;
            default:
                o = nf
        }
        a = o.bind(null, t, a, e), o = void 0, !cu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, a, {
            capture: !0,
            passive: o
        }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
            passive: o
        }) : e.addEventListener(t, a, !1)
    }

    function Yc(e, t, a, r, o) {
        var c = r;
        if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ;) {
            if (r === null) return;
            var g = r.tag;
            if (g === 3 || g === 4) {
                var S = r.stateNode.containerInfo;
                if (S === o) break;
                if (g === 4)
                    for (g = r.return; g !== null;) {
                        var R = g.tag;
                        if ((R === 3 || R === 4) && g.stateNode.containerInfo === o) return;
                        g = g.return
                    }
                for (; S !== null;) {
                    if (g = _e(S), g === null) return;
                    if (R = g.tag, R === 5 || R === 6 || R === 26 || R === 27) {
                        r = c = g;
                        continue e
                    }
                    S = S.parentNode
                }
            }
            r = r.return
        }
        ph(function () {
            var k = c,
                I = ou(a),
                W = [];
            e: {
                var q = Yh.get(e);
                if (q !== void 0) {
                    var Y = is,
                        Re = e;
                    switch (e) {
                        case "keypress":
                            if (ns(a) === 0) break e;
                        case "keydown":
                        case "keyup":
                            Y = z2;
                            break;
                        case "focusin":
                            Re = "focus", Y = mu;
                            break;
                        case "focusout":
                            Re = "blur", Y = mu;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            Y = mu;
                            break;
                        case "click":
                            if (a.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            Y = vh;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            Y = T2;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            Y = U2;
                            break;
                        case Bh:
                        case Ph:
                        case kh:
                            Y = R2;
                            break;
                        case qh:
                            Y = P2;
                            break;
                        case "scroll":
                        case "scrollend":
                            Y = S2;
                            break;
                        case "wheel":
                            Y = q2;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            Y = D2;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            Y = xh;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            Y = G2
                    }
                    var Te = (t & 4) !== 0,
                        Ze = !Te && (e === "scroll" || e === "scrollend"),
                        z = Te ? q !== null ? q + "Capture" : null : q;
                    Te = [];
                    for (var N = k, P; N !== null;) {
                        var J = N;
                        if (P = J.stateNode, J = J.tag, J !== 5 && J !== 26 && J !== 27 || P === null || z === null || (J = xr(N, z), J != null && Te.push(nl(N, J, P))), Ze) break;
                        N = N.return
                    }
                    0 < Te.length && (q = new Y(q, Re, null, a, I), W.push({
                        event: q,
                        listeners: Te
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (q = e === "mouseover" || e === "pointerover", Y = e === "mouseout" || e === "pointerout", q && a !== su && (Re = a.relatedTarget || a.fromElement) && (_e(Re) || Re[de])) break e;
                    if ((Y || q) && (q = I.window === I ? I : (q = I.ownerDocument) ? q.defaultView || q.parentWindow : window, Y ? (Re = a.relatedTarget || a.toElement, Y = k, Re = Re ? _e(Re) : null, Re !== null && (Ze = f(Re), Te = Re.tag, Re !== Ze || Te !== 5 && Te !== 27 && Te !== 6) && (Re = null)) : (Y = null, Re = k), Y !== Re)) {
                        if (Te = vh, J = "onMouseLeave", z = "onMouseEnter", N = "mouse", (e === "pointerout" || e === "pointerover") && (Te = xh, J = "onPointerLeave", z = "onPointerEnter", N = "pointer"), Ze = Y == null ? q : st(Y), P = Re == null ? q : st(Re), q = new Te(J, N + "leave", Y, a, I), q.target = Ze, q.relatedTarget = P, J = null, _e(I) === k && (Te = new Te(z, N + "enter", Re, a, I), Te.target = P, Te.relatedTarget = Ze, J = Te), Ze = J, Y && Re) t: {
                            for (Te = Y, z = Re, N = 0, P = Te; P; P = Ji(P)) N++;
                            for (P = 0, J = z; J; J = Ji(J)) P++;
                            for (; 0 < N - P;) Te = Ji(Te),
                                N--;
                            for (; 0 < P - N;) z = Ji(z),
                                P--;
                            for (; N--;) {
                                if (Te === z || z !== null && Te === z.alternate) break t;
                                Te = Ji(Te), z = Ji(z)
                            }
                            Te = null
                        }
                        else Te = null;
                        Y !== null && up(W, q, Y, Te, !1), Re !== null && Ze !== null && up(W, Ze, Re, Te, !0)
                    }
                }
                e: {
                    if (q = k ? st(k) : window, Y = q.nodeName && q.nodeName.toLowerCase(), Y === "select" || Y === "input" && q.type === "file") var fe = Dh;
                    else if (Rh(q))
                        if (Oh) fe = eb;
                        else {
                            fe = J2;
                            var Le = $2
                        }
                    else Y = q.nodeName,
                        !Y || Y.toLowerCase() !== "input" || q.type !== "checkbox" && q.type !== "radio" ? k && lu(k.elementType) && (fe = Dh) : fe = W2;
                    if (fe && (fe = fe(e, k))) {
                        Ah(W, fe, a, I);
                        break e
                    }
                    Le && Le(e, q, k),
                        e === "focusout" && k && q.type === "number" && k.memoizedProps.value != null && ru(q, "number", q.value)
                }
                switch (Le = k ? st(k) : window, e) {
                    case "focusin":
                        (Rh(Le) || Le.contentEditable === "true") && (Di = Le, xu = k, Dr = null);
                        break;
                    case "focusout":
                        Dr = xu = Di = null;
                        break;
                    case "mousedown":
                        Su = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Su = !1, Hh(W, a, I);
                        break;
                    case "selectionchange":
                        if (nb) break;
                    case "keydown":
                    case "keyup":
                        Hh(W, a, I)
                }
                var ve;
                if (yu) e: {
                    switch (e) {
                        case "compositionstart":
                            var Ee = "onCompositionStart";
                            break e;
                        case "compositionend":
                            Ee = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            Ee = "onCompositionUpdate";
                            break e
                    }
                    Ee = void 0
                }
                else Ai ? Eh(e, a) && (Ee = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (Ee = "onCompositionStart"); Ee && (Sh && a.locale !== "ko" && (Ai || Ee !== "onCompositionStart" ? Ee === "onCompositionEnd" && Ai && (ve = yh()) : (ua = I, fu = "value" in ua ? ua.value : ua.textContent, Ai = !0)), Le = Xs(k, Ee), 0 < Le.length && (Ee = new bh(Ee, e, null, a, I), W.push({
                    event: Ee,
                    listeners: Le
                }), ve ? Ee.data = ve : (ve = Mh(a), ve !== null && (Ee.data = ve)))),
                    (ve = K2 ? Q2(e, a) : Z2(e, a)) && (Ee = Xs(k, "onBeforeInput"), 0 < Ee.length && (Le = new bh("onBeforeInput", "beforeinput", null, a, I), W.push({
                        event: Le,
                        listeners: Ee
                    }), Le.data = ve)),
                    Ub(W, e, k, a, I)
            }
            sp(W, t)
        })
    }

    function nl(e, t, a) {
        return {
            instance: e,
            listener: t,
            currentTarget: a
        }
    }

    function Xs(e, t) {
        for (var a = t + "Capture", r = []; e !== null;) {
            var o = e,
                c = o.stateNode;
            if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || c === null || (o = xr(e, a), o != null && r.unshift(nl(e, o, c)), o = xr(e, t), o != null && r.push(nl(e, o, c))), e.tag === 3) return r;
            e = e.return
        }
        return []
    }

    function Ji(e) {
        if (e === null) return null;
        do e = e.return; while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }

    function up(e, t, a, r, o) {
        for (var c = t._reactName, g = []; a !== null && a !== r;) {
            var S = a,
                R = S.alternate,
                k = S.stateNode;
            if (S = S.tag, R !== null && R === r) break;
            S !== 5 && S !== 26 && S !== 27 || k === null || (R = k, o ? (k = xr(a, c), k != null && g.unshift(nl(a, k, R))) : o || (k = xr(a, c), k != null && g.push(nl(a, k, R)))), a = a.return
        }
        g.length !== 0 && e.push({
            event: t,
            listeners: g
        })
    }
    var qb = /\r\n?/g,
        Yb = /\u0000|\uFFFD/g;

    function cp(e) {
        return (typeof e == "string" ? e : "" + e).replace(qb, `
`).replace(Yb, "")
    }

    function fp(e, t) {
        return t = cp(t), cp(e) === t
    }

    function Ks() { }

    function Qe(e, t, a, r, o, c) {
        switch (a) {
            case "children":
                typeof r == "string" ? t === "body" || t === "textarea" && r === "" || Ei(e, r) : (typeof r == "number" || typeof r == "bigint") && t !== "body" && Ei(e, "" + r);
                break;
            case "className":
                qn(e, "class", r);
                break;
            case "tabIndex":
                qn(e, "tabindex", r);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                qn(e, a, r);
                break;
            case "style":
                hh(e, r, c);
                break;
            case "data":
                if (t !== "object") {
                    qn(e, "data", r);
                    break
                }
            case "src":
            case "href":
                if (r === "" && (t !== "a" || a !== "href")) {
                    e.removeAttribute(a);
                    break
                }
                if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
                    e.removeAttribute(a);
                    break
                }
                r = es("" + r), e.setAttribute(a, r);
                break;
            case "action":
            case "formAction":
                if (typeof r == "function") {
                    e.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else typeof c == "function" && (a === "formAction" ? (t !== "input" && Qe(e, t, "name", o.name, o, null), Qe(e, t, "formEncType", o.formEncType, o, null), Qe(e, t, "formMethod", o.formMethod, o, null), Qe(e, t, "formTarget", o.formTarget, o, null)) : (Qe(e, t, "encType", o.encType, o, null), Qe(e, t, "method", o.method, o, null), Qe(e, t, "target", o.target, o, null)));
                if (r == null || typeof r == "symbol" || typeof r == "boolean") {
                    e.removeAttribute(a);
                    break
                }
                r = es("" + r), e.setAttribute(a, r);
                break;
            case "onClick":
                r != null && (e.onclick = Ks);
                break;
            case "onScroll":
                r != null && Ve("scroll", e);
                break;
            case "onScrollEnd":
                r != null && Ve("scrollend", e);
                break;
            case "dangerouslySetInnerHTML":
                if (r != null) {
                    if (typeof r != "object" || !("__html" in r)) throw Error(s(61));
                    if (a = r.__html, a != null) {
                        if (o.children != null) throw Error(s(60));
                        e.innerHTML = a
                    }
                }
                break;
            case "multiple":
                e.multiple = r && typeof r != "function" && typeof r != "symbol";
                break;
            case "muted":
                e.muted = r && typeof r != "function" && typeof r != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
                    e.removeAttribute("xlink:href");
                    break
                }
                a = es("" + r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(a, "" + r) : e.removeAttribute(a);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
                break;
            case "capture":
            case "download":
                r === !0 ? e.setAttribute(a, "") : r !== !1 && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(a, r) : e.removeAttribute(a);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(a, r) : e.removeAttribute(a);
                break;
            case "rowSpan":
            case "start":
                r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(a) : e.setAttribute(a, r);
                break;
            case "popover":
                Ve("beforetoggle", e), Ve("toggle", e), kn(e, "popover", r);
                break;
            case "xlinkActuate":
                je(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
                break;
            case "xlinkArcrole":
                je(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
                break;
            case "xlinkRole":
                je(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
                break;
            case "xlinkShow":
                je(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
                break;
            case "xlinkTitle":
                je(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
                break;
            case "xlinkType":
                je(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
                break;
            case "xmlBase":
                je(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
                break;
            case "xmlLang":
                je(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
                break;
            case "xmlSpace":
                je(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
                break;
            case "is":
                kn(e, "is", r);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = b2.get(a) || a, kn(e, a, r))
        }
    }

    function Gc(e, t, a, r, o, c) {
        switch (a) {
            case "style":
                hh(e, r, c);
                break;
            case "dangerouslySetInnerHTML":
                if (r != null) {
                    if (typeof r != "object" || !("__html" in r)) throw Error(s(61));
                    if (a = r.__html, a != null) {
                        if (o.children != null) throw Error(s(60));
                        e.innerHTML = a
                    }
                }
                break;
            case "children":
                typeof r == "string" ? Ei(e, r) : (typeof r == "number" || typeof r == "bigint") && Ei(e, "" + r);
                break;
            case "onScroll":
                r != null && Ve("scroll", e);
                break;
            case "onScrollEnd":
                r != null && Ve("scrollend", e);
                break;
            case "onClick":
                r != null && (e.onclick = Ks);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!Mn.hasOwnProperty(a)) e: {
                    if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), c = e[le] || null, c = c != null ? c[a] : null, typeof c == "function" && e.removeEventListener(t, c, o), typeof r == "function")) {
                        typeof c != "function" && c !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, r, o);
                        break e
                    }
                    a in e ? e[a] = r : r === !0 ? e.setAttribute(a, "") : kn(e, a, r)
                }
        }
    }

    function Ot(e, t, a) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                Ve("error", e), Ve("load", e);
                var r = !1,
                    o = !1,
                    c;
                for (c in a)
                    if (a.hasOwnProperty(c)) {
                        var g = a[c];
                        if (g != null) switch (c) {
                            case "src":
                                r = !0;
                                break;
                            case "srcSet":
                                o = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(s(137, t));
                            default:
                                Qe(e, t, c, g, a, null)
                        }
                    } o && Qe(e, t, "srcSet", a.srcSet, a, null), r && Qe(e, t, "src", a.src, a, null);
                return;
            case "input":
                Ve("invalid", e);
                var S = c = g = o = null,
                    R = null,
                    k = null;
                for (r in a)
                    if (a.hasOwnProperty(r)) {
                        var I = a[r];
                        if (I != null) switch (r) {
                            case "name":
                                o = I;
                                break;
                            case "type":
                                g = I;
                                break;
                            case "checked":
                                R = I;
                                break;
                            case "defaultChecked":
                                k = I;
                                break;
                            case "value":
                                c = I;
                                break;
                            case "defaultValue":
                                S = I;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (I != null) throw Error(s(137, t));
                                break;
                            default:
                                Qe(e, t, r, I, a, null)
                        }
                    } uh(e, c, S, R, k, g, o, !1), Jl(e);
                return;
            case "select":
                Ve("invalid", e), r = g = c = null;
                for (o in a)
                    if (a.hasOwnProperty(o) && (S = a[o], S != null)) switch (o) {
                        case "value":
                            c = S;
                            break;
                        case "defaultValue":
                            g = S;
                            break;
                        case "multiple":
                            r = S;
                        default:
                            Qe(e, t, o, S, a, null)
                    }
                t = c, a = g, e.multiple = !!r, t != null ? Ti(e, !!r, t, !1) : a != null && Ti(e, !!r, a, !0);
                return;
            case "textarea":
                Ve("invalid", e), c = o = r = null;
                for (g in a)
                    if (a.hasOwnProperty(g) && (S = a[g], S != null)) switch (g) {
                        case "value":
                            r = S;
                            break;
                        case "defaultValue":
                            o = S;
                            break;
                        case "children":
                            c = S;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (S != null) throw Error(s(91));
                            break;
                        default:
                            Qe(e, t, g, S, a, null)
                    }
                fh(e, r, o, c), Jl(e);
                return;
            case "option":
                for (R in a)
                    if (a.hasOwnProperty(R) && (r = a[R], r != null)) switch (R) {
                        case "selected":
                            e.selected = r && typeof r != "function" && typeof r != "symbol";
                            break;
                        default:
                            Qe(e, t, R, r, a, null)
                    }
                return;
            case "dialog":
                Ve("beforetoggle", e), Ve("toggle", e), Ve("cancel", e), Ve("close", e);
                break;
            case "iframe":
            case "object":
                Ve("load", e);
                break;
            case "video":
            case "audio":
                for (r = 0; r < tl.length; r++) Ve(tl[r], e);
                break;
            case "image":
                Ve("error", e), Ve("load", e);
                break;
            case "details":
                Ve("toggle", e);
                break;
            case "embed":
            case "source":
            case "link":
                Ve("error", e), Ve("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (k in a)
                    if (a.hasOwnProperty(k) && (r = a[k], r != null)) switch (k) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(s(137, t));
                        default:
                            Qe(e, t, k, r, a, null)
                    }
                return;
            default:
                if (lu(t)) {
                    for (I in a) a.hasOwnProperty(I) && (r = a[I], r !== void 0 && Gc(e, t, I, r, a, void 0));
                    return
                }
        }
        for (S in a) a.hasOwnProperty(S) && (r = a[S], r != null && Qe(e, t, S, r, a, null))
    }

    function Gb(e, t, a, r) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var o = null,
                    c = null,
                    g = null,
                    S = null,
                    R = null,
                    k = null,
                    I = null;
                for (Y in a) {
                    var W = a[Y];
                    if (a.hasOwnProperty(Y) && W != null) switch (Y) {
                        case "checked":
                            break;
                        case "value":
                            break;
                        case "defaultValue":
                            R = W;
                        default:
                            r.hasOwnProperty(Y) || Qe(e, t, Y, null, r, W)
                    }
                }
                for (var q in r) {
                    var Y = r[q];
                    if (W = a[q], r.hasOwnProperty(q) && (Y != null || W != null)) switch (q) {
                        case "type":
                            c = Y;
                            break;
                        case "name":
                            o = Y;
                            break;
                        case "checked":
                            k = Y;
                            break;
                        case "defaultChecked":
                            I = Y;
                            break;
                        case "value":
                            g = Y;
                            break;
                        case "defaultValue":
                            S = Y;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (Y != null) throw Error(s(137, t));
                            break;
                        default:
                            Y !== W && Qe(e, t, q, Y, r, W)
                    }
                }
                iu(e, g, S, R, k, I, c, o);
                return;
            case "select":
                Y = g = S = q = null;
                for (c in a)
                    if (R = a[c], a.hasOwnProperty(c) && R != null) switch (c) {
                        case "value":
                            break;
                        case "multiple":
                            Y = R;
                        default:
                            r.hasOwnProperty(c) || Qe(e, t, c, null, r, R)
                    }
                for (o in r)
                    if (c = r[o], R = a[o], r.hasOwnProperty(o) && (c != null || R != null)) switch (o) {
                        case "value":
                            q = c;
                            break;
                        case "defaultValue":
                            S = c;
                            break;
                        case "multiple":
                            g = c;
                        default:
                            c !== R && Qe(e, t, o, c, r, R)
                    }
                t = S, a = g, r = Y, q != null ? Ti(e, !!a, q, !1) : !!r != !!a && (t != null ? Ti(e, !!a, t, !0) : Ti(e, !!a, a ? [] : "", !1));
                return;
            case "textarea":
                Y = q = null;
                for (S in a)
                    if (o = a[S], a.hasOwnProperty(S) && o != null && !r.hasOwnProperty(S)) switch (S) {
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            Qe(e, t, S, null, r, o)
                    }
                for (g in r)
                    if (o = r[g], c = a[g], r.hasOwnProperty(g) && (o != null || c != null)) switch (g) {
                        case "value":
                            q = o;
                            break;
                        case "defaultValue":
                            Y = o;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (o != null) throw Error(s(91));
                            break;
                        default:
                            o !== c && Qe(e, t, g, o, r, c)
                    }
                ch(e, q, Y);
                return;
            case "option":
                for (var Re in a)
                    if (q = a[Re], a.hasOwnProperty(Re) && q != null && !r.hasOwnProperty(Re)) switch (Re) {
                        case "selected":
                            e.selected = !1;
                            break;
                        default:
                            Qe(e, t, Re, null, r, q)
                    }
                for (R in r)
                    if (q = r[R], Y = a[R], r.hasOwnProperty(R) && q !== Y && (q != null || Y != null)) switch (R) {
                        case "selected":
                            e.selected = q && typeof q != "function" && typeof q != "symbol";
                            break;
                        default:
                            Qe(e, t, R, q, r, Y)
                    }
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var Te in a) q = a[Te], a.hasOwnProperty(Te) && q != null && !r.hasOwnProperty(Te) && Qe(e, t, Te, null, r, q);
                for (k in r)
                    if (q = r[k], Y = a[k], r.hasOwnProperty(k) && q !== Y && (q != null || Y != null)) switch (k) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (q != null) throw Error(s(137, t));
                            break;
                        default:
                            Qe(e, t, k, q, r, Y)
                    }
                return;
            default:
                if (lu(t)) {
                    for (var Ze in a) q = a[Ze], a.hasOwnProperty(Ze) && q !== void 0 && !r.hasOwnProperty(Ze) && Gc(e, t, Ze, void 0, r, q);
                    for (I in r) q = r[I], Y = a[I], !r.hasOwnProperty(I) || q === Y || q === void 0 && Y === void 0 || Gc(e, t, I, q, r, Y);
                    return
                }
        }
        for (var z in a) q = a[z], a.hasOwnProperty(z) && q != null && !r.hasOwnProperty(z) && Qe(e, t, z, null, r, q);
        for (W in r) q = r[W], Y = a[W], !r.hasOwnProperty(W) || q === Y || q == null && Y == null || Qe(e, t, W, q, r, Y)
    }
    var Xc = null,
        Kc = null;

    function Qs(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }

    function dp(e) {
        switch (e) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function hp(e, t) {
        if (e === 0) switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
        }
        return e === 1 && t === "foreignObject" ? 0 : e
    }

    function Qc(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Zc = null;

    function Xb() {
        var e = window.event;
        return e && e.type === "popstate" ? e === Zc ? !1 : (Zc = e, !0) : (Zc = null, !1)
    }
    var mp = typeof setTimeout == "function" ? setTimeout : void 0,
        Kb = typeof clearTimeout == "function" ? clearTimeout : void 0,
        pp = typeof Promise == "function" ? Promise : void 0,
        Qb = typeof queueMicrotask == "function" ? queueMicrotask : typeof pp < "u" ? function (e) {
            return pp.resolve(null).then(e).catch(Zb)
        } : mp;

    function Zb(e) {
        setTimeout(function () {
            throw e
        })
    }

    function Ma(e) {
        return e === "head"
    }

    function yp(e, t) {
        var a = t,
            r = 0,
            o = 0;
        do {
            var c = a.nextSibling;
            if (e.removeChild(a), c && c.nodeType === 8)
                if (a = c.data, a === "/$") {
                    if (0 < r && 8 > r) {
                        a = r;
                        var g = e.ownerDocument;
                        if (a & 1 && al(g.documentElement), a & 2 && al(g.body), a & 4)
                            for (a = g.head, al(a), g = a.firstChild; g;) {
                                var S = g.nextSibling,
                                    R = g.nodeName;
                                g[me] || R === "SCRIPT" || R === "STYLE" || R === "LINK" && g.rel.toLowerCase() === "stylesheet" || a.removeChild(g), g = S
                            }
                    }
                    if (o === 0) {
                        e.removeChild(c), fl(t);
                        return
                    }
                    o--
                } else a === "$" || a === "$?" || a === "$!" ? o++ : r = a.charCodeAt(0) - 48;
            else r = 0;
            a = c
        } while (a);
        fl(t)
    }

    function Fc(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
            var a = t;
            switch (t = t.nextSibling, a.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    Fc(a), ge(a);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (a.rel.toLowerCase() === "stylesheet") continue
            }
            e.removeChild(a)
        }
    }

    function Fb(e, t, a, r) {
        for (; e.nodeType === 1;) {
            var o = a;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break
            } else if (r) {
                if (!e[me]) switch (t) {
                    case "meta":
                        if (!e.hasAttribute("itemprop")) break;
                        return e;
                    case "link":
                        if (c = e.getAttribute("rel"), c === "stylesheet" && e.hasAttribute("data-precedence")) break;
                        if (c !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title)) break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence")) break;
                        return e;
                    case "script":
                        if (c = e.getAttribute("src"), (c !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && c && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                        return e;
                    default:
                        return e
                }
            } else if (t === "input" && e.type === "hidden") {
                var c = o.name == null ? null : "" + o.name;
                if (o.type === "hidden" && e.getAttribute("name") === c) return e
            } else return e;
            if (e = Sn(e.nextSibling), e === null) break
        }
        return null
    }

    function Ib(e, t, a) {
        if (t === "") return null;
        for (; e.nodeType !== 3;)
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Sn(e.nextSibling), e === null)) return null;
        return e
    }

    function Ic(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete"
    }

    function $b(e, t) {
        var a = e.ownerDocument;
        if (e.data !== "$?" || a.readyState === "complete") t();
        else {
            var r = function () {
                t(), a.removeEventListener("DOMContentLoaded", r)
            };
            a.addEventListener("DOMContentLoaded", r), e._reactRetry = r
        }
    }

    function Sn(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F") break;
                if (t === "/$") return null
            }
        }
        return e
    }
    var $c = null;

    function gp(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (e.nodeType === 8) {
                var a = e.data;
                if (a === "$" || a === "$!" || a === "$?") {
                    if (t === 0) return e;
                    t--
                } else a === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }

    function vp(e, t, a) {
        switch (t = Qs(a), e) {
            case "html":
                if (e = t.documentElement, !e) throw Error(s(452));
                return e;
            case "head":
                if (e = t.head, !e) throw Error(s(453));
                return e;
            case "body":
                if (e = t.body, !e) throw Error(s(454));
                return e;
            default:
                throw Error(s(451))
        }
    }

    function al(e) {
        for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
        ge(e)
    }
    var fn = new Map,
        bp = new Set;

    function Zs(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var na = $.d;
    $.d = {
        f: Jb,
        r: Wb,
        D: e3,
        C: t3,
        L: n3,
        m: a3,
        X: r3,
        S: i3,
        M: l3
    };

    function Jb() {
        var e = na.f(),
            t = Bs();
        return e || t
    }

    function Wb(e) {
        var t = ke(e);
        t !== null && t.tag === 5 && t.type === "form" ? B0(t) : na.r(e)
    }
    var Wi = typeof document > "u" ? null : document;

    function xp(e, t, a) {
        var r = Wi;
        if (r && typeof t == "string" && t) {
            var o = an(t);
            o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), bp.has(o) || (bp.add(o), e = {
                rel: e,
                crossOrigin: a,
                href: t
            }, r.querySelector(o) === null && (t = r.createElement("link"), Ot(t, "link", e), De(t), r.head.appendChild(t)))
        }
    }

    function e3(e) {
        na.D(e), xp("dns-prefetch", e, null)
    }

    function t3(e, t) {
        na.C(e, t), xp("preconnect", e, t)
    }

    function n3(e, t, a) {
        na.L(e, t, a);
        var r = Wi;
        if (r && e && t) {
            var o = 'link[rel="preload"][as="' + an(t) + '"]';
            t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + an(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + an(a.imageSizes) + '"]')) : o += '[href="' + an(e) + '"]';
            var c = o;
            switch (t) {
                case "style":
                    c = er(e);
                    break;
                case "script":
                    c = tr(e)
            }
            fn.has(c) || (e = y({
                rel: "preload",
                href: t === "image" && a && a.imageSrcSet ? void 0 : e,
                as: t
            }, a), fn.set(c, e), r.querySelector(o) !== null || t === "style" && r.querySelector(il(c)) || t === "script" && r.querySelector(rl(c)) || (t = r.createElement("link"), Ot(t, "link", e), De(t), r.head.appendChild(t)))
        }
    }

    function a3(e, t) {
        na.m(e, t);
        var a = Wi;
        if (a && e) {
            var r = t && typeof t.as == "string" ? t.as : "script",
                o = 'link[rel="modulepreload"][as="' + an(r) + '"][href="' + an(e) + '"]',
                c = o;
            switch (r) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    c = tr(e)
            }
            if (!fn.has(c) && (e = y({
                rel: "modulepreload",
                href: e
            }, t), fn.set(c, e), a.querySelector(o) === null)) {
                switch (r) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (a.querySelector(rl(c))) return
                }
                r = a.createElement("link"), Ot(r, "link", e), De(r), a.head.appendChild(r)
            }
        }
    }

    function i3(e, t, a) {
        na.S(e, t, a);
        var r = Wi;
        if (r && e) {
            var o = ot(r).hoistableStyles,
                c = er(e);
            t = t || "default";
            var g = o.get(c);
            if (!g) {
                var S = {
                    loading: 0,
                    preload: null
                };
                if (g = r.querySelector(il(c))) S.loading = 5;
                else {
                    e = y({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, a), (a = fn.get(c)) && Jc(e, a);
                    var R = g = r.createElement("link");
                    De(R), Ot(R, "link", e), R._p = new Promise(function (k, I) {
                        R.onload = k, R.onerror = I
                    }), R.addEventListener("load", function () {
                        S.loading |= 1
                    }), R.addEventListener("error", function () {
                        S.loading |= 2
                    }), S.loading |= 4, Fs(g, t, r)
                }
                g = {
                    type: "stylesheet",
                    instance: g,
                    count: 1,
                    state: S
                }, o.set(c, g)
            }
        }
    }

    function r3(e, t) {
        na.X(e, t);
        var a = Wi;
        if (a && e) {
            var r = ot(a).hoistableScripts,
                o = tr(e),
                c = r.get(o);
            c || (c = a.querySelector(rl(o)), c || (e = y({
                src: e,
                async: !0
            }, t), (t = fn.get(o)) && Wc(e, t), c = a.createElement("script"), De(c), Ot(c, "link", e), a.head.appendChild(c)), c = {
                type: "script",
                instance: c,
                count: 1,
                state: null
            }, r.set(o, c))
        }
    }

    function l3(e, t) {
        na.M(e, t);
        var a = Wi;
        if (a && e) {
            var r = ot(a).hoistableScripts,
                o = tr(e),
                c = r.get(o);
            c || (c = a.querySelector(rl(o)), c || (e = y({
                src: e,
                async: !0,
                type: "module"
            }, t), (t = fn.get(o)) && Wc(e, t), c = a.createElement("script"), De(c), Ot(c, "link", e), a.head.appendChild(c)), c = {
                type: "script",
                instance: c,
                count: 1,
                state: null
            }, r.set(o, c))
        }
    }

    function Sp(e, t, a, r) {
        var o = (o = Se.current) ? Zs(o) : null;
        if (!o) throw Error(s(446));
        switch (e) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof a.precedence == "string" && typeof a.href == "string" ? (t = er(a.href), a = ot(o).hoistableStyles, r = a.get(t), r || (r = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                }, a.set(t, r)), r) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                    e = er(a.href);
                    var c = ot(o).hoistableStyles,
                        g = c.get(e);
                    if (g || (o = o.ownerDocument || o, g = {
                        type: "stylesheet",
                        instance: null,
                        count: 0,
                        state: {
                            loading: 0,
                            preload: null
                        }
                    }, c.set(e, g), (c = o.querySelector(il(e))) && !c._p && (g.instance = c, g.state.loading = 5), fn.has(e) || (a = {
                        rel: "preload",
                        as: "style",
                        href: a.href,
                        crossOrigin: a.crossOrigin,
                        integrity: a.integrity,
                        media: a.media,
                        hrefLang: a.hrefLang,
                        referrerPolicy: a.referrerPolicy
                    }, fn.set(e, a), c || s3(o, e, a, g.state))), t && r === null) throw Error(s(528, ""));
                    return g
                }
                if (t && r !== null) throw Error(s(529, ""));
                return null;
            case "script":
                return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = tr(a), a = ot(o).hoistableScripts, r = a.get(t), r || (r = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                }, a.set(t, r)), r) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            default:
                throw Error(s(444, e))
        }
    }

    function er(e) {
        return 'href="' + an(e) + '"'
    }

    function il(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }

    function wp(e) {
        return y({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }

    function s3(e, t, a, r) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? r.loading = 1 : (t = e.createElement("link"), r.preload = t, t.addEventListener("load", function () {
            return r.loading |= 1
        }), t.addEventListener("error", function () {
            return r.loading |= 2
        }), Ot(t, "link", a), De(t), e.head.appendChild(t))
    }

    function tr(e) {
        return '[src="' + an(e) + '"]'
    }

    function rl(e) {
        return "script[async]" + e
    }

    function Tp(e, t, a) {
        if (t.count++, t.instance === null) switch (t.type) {
            case "style":
                var r = e.querySelector('style[data-href~="' + an(a.href) + '"]');
                if (r) return t.instance = r, De(r), r;
                var o = y({}, a, {
                    "data-href": a.href,
                    "data-precedence": a.precedence,
                    href: null,
                    precedence: null
                });
                return r = (e.ownerDocument || e).createElement("style"), De(r), Ot(r, "style", o), Fs(r, a.precedence, e), t.instance = r;
            case "stylesheet":
                o = er(a.href);
                var c = e.querySelector(il(o));
                if (c) return t.state.loading |= 4, t.instance = c, De(c), c;
                r = wp(a), (o = fn.get(o)) && Jc(r, o), c = (e.ownerDocument || e).createElement("link"), De(c);
                var g = c;
                return g._p = new Promise(function (S, R) {
                    g.onload = S, g.onerror = R
                }), Ot(c, "link", r), t.state.loading |= 4, Fs(c, a.precedence, e), t.instance = c;
            case "script":
                return c = tr(a.src), (o = e.querySelector(rl(c))) ? (t.instance = o, De(o), o) : (r = a, (o = fn.get(c)) && (r = y({}, a), Wc(r, o)), e = e.ownerDocument || e, o = e.createElement("script"), De(o), Ot(o, "link", r), e.head.appendChild(o), t.instance = o);
            case "void":
                return null;
            default:
                throw Error(s(443, t.type))
        } else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (r = t.instance, t.state.loading |= 4, Fs(r, a.precedence, e));
        return t.instance
    }

    function Fs(e, t, a) {
        for (var r = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), o = r.length ? r[r.length - 1] : null, c = o, g = 0; g < r.length; g++) {
            var S = r[g];
            if (S.dataset.precedence === t) c = S;
            else if (c !== o) break
        }
        c ? c.parentNode.insertBefore(e, c.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild))
    }

    function Jc(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title)
    }

    function Wc(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity)
    }
    var Is = null;

    function Ep(e, t, a) {
        if (Is === null) {
            var r = new Map,
                o = Is = new Map;
            o.set(a, r)
        } else o = Is, r = o.get(a), r || (r = new Map, o.set(a, r));
        if (r.has(e)) return r;
        for (r.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
            var c = a[o];
            if (!(c[me] || c[te] || e === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
                var g = c.getAttribute(t) || "";
                g = e + g;
                var S = r.get(g);
                S ? S.push(c) : r.set(g, [c])
            }
        }
        return r
    }

    function Mp(e, t, a) {
        e = e.ownerDocument || e, e.head.insertBefore(a, t === "title" ? e.querySelector("head > title") : null)
    }

    function o3(e, t, a) {
        if (a === 1 || t.itemProp != null) return !1;
        switch (e) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
                return !0;
            case "link":
                if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
                switch (t.rel) {
                    case "stylesheet":
                        return e = t.disabled, typeof t.precedence == "string" && e == null;
                    default:
                        return !0
                }
            case "script":
                if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0
        }
        return !1
    }

    function Rp(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    var ll = null;

    function u3() { }

    function c3(e, t, a) {
        if (ll === null) throw Error(s(475));
        var r = ll;
        if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
            if (t.instance === null) {
                var o = er(a.href),
                    c = e.querySelector(il(o));
                if (c) {
                    e = c._p, e !== null && typeof e == "object" && typeof e.then == "function" && (r.count++, r = $s.bind(r), e.then(r, r)), t.state.loading |= 4, t.instance = c, De(c);
                    return
                }
                c = e.ownerDocument || e, a = wp(a), (o = fn.get(o)) && Jc(a, o), c = c.createElement("link"), De(c);
                var g = c;
                g._p = new Promise(function (S, R) {
                    g.onload = S, g.onerror = R
                }), Ot(c, "link", a), t.instance = c
            }
            r.stylesheets === null && (r.stylesheets = new Map), r.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (r.count++, t = $s.bind(r), e.addEventListener("load", t), e.addEventListener("error", t))
        }
    }

    function f3() {
        if (ll === null) throw Error(s(475));
        var e = ll;
        return e.stylesheets && e.count === 0 && ef(e, e.stylesheets), 0 < e.count ? function (t) {
            var a = setTimeout(function () {
                if (e.stylesheets && ef(e, e.stylesheets), e.unsuspend) {
                    var r = e.unsuspend;
                    e.unsuspend = null, r()
                }
            }, 6e4);
            return e.unsuspend = t,
                function () {
                    e.unsuspend = null, clearTimeout(a)
                }
        } : null
    }

    function $s() {
        if (this.count--, this.count === 0) {
            if (this.stylesheets) ef(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null, e()
            }
        }
    }
    var Js = null;

    function ef(e, t) {
        e.stylesheets = null, e.unsuspend !== null && (e.count++, Js = new Map, t.forEach(d3, e), Js = null, $s.call(e))
    }

    function d3(e, t) {
        if (!(t.state.loading & 4)) {
            var a = Js.get(e);
            if (a) var r = a.get(null);
            else {
                a = new Map, Js.set(e, a);
                for (var o = e.querySelectorAll("link[data-precedence],style[data-precedence]"), c = 0; c < o.length; c++) {
                    var g = o[c];
                    (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") && (a.set(g.dataset.precedence, g), r = g)
                }
                r && a.set(null, r)
            }
            o = t.instance, g = o.getAttribute("data-precedence"), c = a.get(g) || r, c === r && a.set(null, o), a.set(g, o), this.count++, r = $s.bind(this), o.addEventListener("load", r), o.addEventListener("error", r), c ? c.parentNode.insertBefore(o, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= 4
        }
    }
    var sl = {
        $$typeof: j,
        Provider: null,
        Consumer: null,
        _currentValue: oe,
        _currentValue2: oe,
        _threadCount: 0
    };

    function h3(e, t, a, r, o, c, g, S) {
        this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Si(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Si(0), this.hiddenUpdates = Si(null), this.identifierPrefix = r, this.onUncaughtError = o, this.onCaughtError = c, this.onRecoverableError = g, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = S, this.incompleteTransitions = new Map
    }

    function Ap(e, t, a, r, o, c, g, S, R, k, I, W) {
        return e = new h3(e, t, a, g, S, R, k, W), t = 1, c === !0 && (t |= 24), c = Qt(3, null, null, t), e.current = c, c.stateNode = e, t = zu(), t.refCount++, e.pooledCache = t, t.refCount++, c.memoizedState = {
            element: r,
            isDehydrated: a,
            cache: t
        }, Bu(c), e
    }

    function Dp(e) {
        return e ? (e = ji, e) : ji
    }

    function Op(e, t, a, r, o, c) {
        o = Dp(o), r.context === null ? r.context = o : r.pendingContext = o, r = da(t), r.payload = {
            element: a
        }, c = c === void 0 ? null : c, c !== null && (r.callback = c), a = ha(e, r, t), a !== null && (Jt(a, e, t), Hr(a, e, t))
    }

    function Cp(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var a = e.retryLane;
            e.retryLane = a !== 0 && a < t ? a : t
        }
    }

    function tf(e, t) {
        Cp(e, t), (e = e.alternate) && Cp(e, t)
    }

    function _p(e) {
        if (e.tag === 13) {
            var t = _i(e, 67108864);
            t !== null && Jt(t, e, 67108864), tf(e, 67108864)
        }
    }
    var Ws = !0;

    function m3(e, t, a, r) {
        var o = H.T;
        H.T = null;
        var c = $.p;
        try {
            $.p = 2, nf(e, t, a, r)
        } finally {
            $.p = c, H.T = o
        }
    }

    function p3(e, t, a, r) {
        var o = H.T;
        H.T = null;
        var c = $.p;
        try {
            $.p = 8, nf(e, t, a, r)
        } finally {
            $.p = c, H.T = o
        }
    }

    function nf(e, t, a, r) {
        if (Ws) {
            var o = af(r);
            if (o === null) Yc(e, t, r, eo, a), Np(e, r);
            else if (g3(o, e, t, a, r)) r.stopPropagation();
            else if (Np(e, r), t & 4 && -1 < y3.indexOf(e)) {
                for (; o !== null;) {
                    var c = ke(o);
                    if (c !== null) switch (c.tag) {
                        case 3:
                            if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                                var g = Bn(c.pendingLanes);
                                if (g !== 0) {
                                    var S = c;
                                    for (S.pendingLanes |= 2, S.entangledLanes |= 2; g;) {
                                        var R = 1 << 31 - Rt(g);
                                        S.entanglements[1] |= R, g &= ~R
                                    }
                                    Cn(c), (qe & 6) === 0 && (Hs = Gt() + 500, el(0))
                                }
                            }
                            break;
                        case 13:
                            S = _i(c, 2), S !== null && Jt(S, c, 2), Bs(), tf(c, 2)
                    }
                    if (c = af(r), c === null && Yc(e, t, r, eo, a), c === o) break;
                    o = c
                }
                o !== null && r.stopPropagation()
            } else Yc(e, t, r, null, a)
        }
    }

    function af(e) {
        return e = ou(e), rf(e)
    }
    var eo = null;

    function rf(e) {
        if (eo = null, e = _e(e), e !== null) {
            var t = f(e);
            if (t === null) e = null;
            else {
                var a = t.tag;
                if (a === 13) {
                    if (e = d(t), e !== null) return e;
                    e = null
                } else if (a === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else t !== e && (e = null)
            }
        }
        return eo = e, null
    }

    function jp(e) {
        switch (e) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (nu()) {
                    case Yl:
                        return 2;
                    case Gl:
                        return 8;
                    case bi:
                    case Un:
                        return 32;
                    case la:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var lf = !1,
        Ra = null,
        Aa = null,
        Da = null,
        ol = new Map,
        ul = new Map,
        Oa = [],
        y3 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function Np(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                Ra = null;
                break;
            case "dragenter":
            case "dragleave":
                Aa = null;
                break;
            case "mouseover":
            case "mouseout":
                Da = null;
                break;
            case "pointerover":
            case "pointerout":
                ol.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                ul.delete(t.pointerId)
        }
    }

    function cl(e, t, a, r, o, c) {
        return e === null || e.nativeEvent !== c ? (e = {
            blockedOn: t,
            domEventName: a,
            eventSystemFlags: r,
            nativeEvent: c,
            targetContainers: [o]
        }, t !== null && (t = ke(t), t !== null && _p(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
    }

    function g3(e, t, a, r, o) {
        switch (t) {
            case "focusin":
                return Ra = cl(Ra, e, t, a, r, o), !0;
            case "dragenter":
                return Aa = cl(Aa, e, t, a, r, o), !0;
            case "mouseover":
                return Da = cl(Da, e, t, a, r, o), !0;
            case "pointerover":
                var c = o.pointerId;
                return ol.set(c, cl(ol.get(c) || null, e, t, a, r, o)), !0;
            case "gotpointercapture":
                return c = o.pointerId, ul.set(c, cl(ul.get(c) || null, e, t, a, r, o)), !0
        }
        return !1
    }

    function Lp(e) {
        var t = _e(e.target);
        if (t !== null) {
            var a = f(t);
            if (a !== null) {
                if (t = a.tag, t === 13) {
                    if (t = d(a), t !== null) {
                        e.blockedOn = t, B(e.priority, function () {
                            if (a.tag === 13) {
                                var r = $t();
                                r = vr(r);
                                var o = _i(a, r);
                                o !== null && Jt(o, a, r), tf(a, r)
                            }
                        });
                        return
                    }
                } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }

    function to(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
            var a = af(e.nativeEvent);
            if (a === null) {
                a = e.nativeEvent;
                var r = new a.constructor(a.type, a);
                su = r, a.target.dispatchEvent(r), su = null
            } else return t = ke(a), t !== null && _p(t), e.blockedOn = a, !1;
            t.shift()
        }
        return !0
    }

    function zp(e, t, a) {
        to(e) && a.delete(t)
    }

    function v3() {
        lf = !1, Ra !== null && to(Ra) && (Ra = null), Aa !== null && to(Aa) && (Aa = null), Da !== null && to(Da) && (Da = null), ol.forEach(zp), ul.forEach(zp)
    }

    function no(e, t) {
        e.blockedOn === t && (e.blockedOn = null, lf || (lf = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, v3)))
    }
    var ao = null;

    function Vp(e) {
        ao !== e && (ao = e, n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
            ao === e && (ao = null);
            for (var t = 0; t < e.length; t += 3) {
                var a = e[t],
                    r = e[t + 1],
                    o = e[t + 2];
                if (typeof r != "function") {
                    if (rf(r || a) === null) continue;
                    break
                }
                var c = ke(a);
                c !== null && (e.splice(t, 3), t -= 3, ic(c, {
                    pending: !0,
                    data: o,
                    method: a.method,
                    action: r
                }, r, o))
            }
        }))
    }

    function fl(e) {
        function t(R) {
            return no(R, e)
        }
        Ra !== null && no(Ra, e), Aa !== null && no(Aa, e), Da !== null && no(Da, e), ol.forEach(t), ul.forEach(t);
        for (var a = 0; a < Oa.length; a++) {
            var r = Oa[a];
            r.blockedOn === e && (r.blockedOn = null)
        }
        for (; 0 < Oa.length && (a = Oa[0], a.blockedOn === null);) Lp(a), a.blockedOn === null && Oa.shift();
        if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
            for (r = 0; r < a.length; r += 3) {
                var o = a[r],
                    c = a[r + 1],
                    g = o[le] || null;
                if (typeof c == "function") g || Vp(a);
                else if (g) {
                    var S = null;
                    if (c && c.hasAttribute("formAction")) {
                        if (o = c, g = c[le] || null) S = g.formAction;
                        else if (rf(o) !== null) continue
                    } else S = g.action;
                    typeof S == "function" ? a[r + 1] = S : (a.splice(r, 3), r -= 3), Vp(a)
                }
            }
    }

    function sf(e) {
        this._internalRoot = e
    }
    io.prototype.render = sf.prototype.render = function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(s(409));
        var a = t.current,
            r = $t();
        Op(a, r, e, t, null, null)
    }, io.prototype.unmount = sf.prototype.unmount = function () {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Op(e.current, 2, null, e, null, null), Bs(), t[de] = null
        }
    };

    function io(e) {
        this._internalRoot = e
    }
    io.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = _();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var a = 0; a < Oa.length && t !== 0 && t < Oa[a].priority; a++);
            Oa.splice(a, 0, e), a === 0 && Lp(e)
        }
    };
    var Hp = i.version;
    if (Hp !== "19.1.1") throw Error(s(527, Hp, "19.1.1"));
    $.findDOMNode = function (e) {
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
        return e = h(t), e = e !== null ? m(e) : null, e = e === null ? null : e.stateNode, e
    };
    var b3 = {
        bundleType: 0,
        version: "19.1.1",
        rendererPackageName: "react-dom",
        currentDispatcherRef: H,
        reconcilerVersion: "19.1.1"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var ro = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!ro.isDisabled && ro.supportsFiber) try {
            Ht = ro.inject(b3), nt = ro
        } catch { }
    }
    return hl.createRoot = function (e, t) {
        if (!u(e)) throw Error(s(299));
        var a = !1,
            r = "",
            o = W0,
            c = em,
            g = tm,
            S = null;
        return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (g = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (S = t.unstable_transitionCallbacks)), t = Ap(e, 1, !1, null, null, a, r, o, c, g, S, null), e[de] = t.current, qc(e), new sf(t)
    }, hl.hydrateRoot = function (e, t, a) {
        if (!u(e)) throw Error(s(299));
        var r = !1,
            o = "",
            c = W0,
            g = em,
            S = tm,
            R = null,
            k = null;
        return a != null && (a.unstable_strictMode === !0 && (r = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (c = a.onUncaughtError), a.onCaughtError !== void 0 && (g = a.onCaughtError), a.onRecoverableError !== void 0 && (S = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (R = a.unstable_transitionCallbacks), a.formState !== void 0 && (k = a.formState)), t = Ap(e, 1, !0, t, a ?? null, r, o, c, g, S, R, k), t.context = Dp(null), a = t.current, r = $t(), r = vr(r), o = da(r), o.callback = null, ha(a, o, r), a = r, t.current.lanes = a, Ga(t, a), Cn(t), e[de] = t.current, qc(e), new io(t)
    }, hl.version = "19.1.1", hl
}
var Qp;

function D3() {
    if (Qp) return cf.exports;
    Qp = 1;

    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
        } catch (i) {
            console.error(i)
        }
    }
    return n(), cf.exports = A3(), cf.exports
}
var O3 = D3();
/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var ig = n => {
    throw TypeError(n)
},
    C3 = (n, i, l) => i.has(n) || ig("Cannot " + l),
    mf = (n, i, l) => (C3(n, i, "read from private field"), l ? l.call(n) : i.get(n)),
    _3 = (n, i, l) => i.has(n) ? ig("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(n) : i.set(n, l),
    Zp = "popstate";

function j3(n = {}) {
    function i(s, u) {
        let {
            pathname: f,
            search: d,
            hash: p
        } = s.location;
        return Rl("", {
            pathname: f,
            search: d,
            hash: p
        }, u.state && u.state.usr || null, u.state && u.state.key || "default")
    }

    function l(s, u) {
        return typeof u == "string" ? u : za(u)
    }
    return L3(i, l, null, n)
}

function He(n, i) {
    if (n === !1 || n === null || typeof n > "u") throw new Error(i)
}

function bt(n, i) {
    if (!n) {
        typeof console < "u" && console.warn(i);
        try {
            throw new Error(i)
        } catch { }
    }
}

function N3() {
    return Math.random().toString(36).substring(2, 10)
}

function Fp(n, i) {
    return {
        usr: n.state,
        key: n.key,
        idx: i
    }
}

function Rl(n, i, l = null, s) {
    return {
        pathname: typeof n == "string" ? n : n.pathname,
        search: "",
        hash: "",
        ...typeof i == "string" ? Ua(i) : i,
        state: l,
        key: i && i.key || s || N3()
    }
}

function za({
    pathname: n = "/",
    search: i = "",
    hash: l = ""
}) {
    return i && i !== "?" && (n += i.charAt(0) === "?" ? i : "?" + i), l && l !== "#" && (n += l.charAt(0) === "#" ? l : "#" + l), n
}

function Ua(n) {
    let i = {};
    if (n) {
        let l = n.indexOf("#");
        l >= 0 && (i.hash = n.substring(l), n = n.substring(0, l));
        let s = n.indexOf("?");
        s >= 0 && (i.search = n.substring(s), n = n.substring(0, s)), n && (i.pathname = n)
    }
    return i
}

function L3(n, i, l, s = {}) {
    let {
        window: u = document.defaultView,
        v5Compat: f = !1
    } = s, d = u.history, p = "POP", h = null, m = y();
    m == null && (m = 0, d.replaceState({
        ...d.state,
        idx: m
    }, ""));

    function y() {
        return (d.state || {
            idx: null
        }).idx
    }

    function v() {
        p = "POP";
        let O = y(),
            E = O == null ? null : O - m;
        m = O, h && h({
            action: p,
            location: D.location,
            delta: E
        })
    }

    function b(O, E) {
        p = "PUSH";
        let V = Rl(D.location, O, E);
        m = y() + 1;
        let j = Fp(V, m),
            Q = D.createHref(V);
        try {
            d.pushState(j, "", Q)
        } catch (U) {
            if (U instanceof DOMException && U.name === "DataCloneError") throw U;
            u.location.assign(Q)
        }
        f && h && h({
            action: p,
            location: D.location,
            delta: 1
        })
    }

    function x(O, E) {
        p = "REPLACE";
        let V = Rl(D.location, O, E);
        m = y();
        let j = Fp(V, m),
            Q = D.createHref(V);
        d.replaceState(j, "", Q), f && h && h({
            action: p,
            location: D.location,
            delta: 0
        })
    }

    function T(O) {
        return rg(O)
    }
    let D = {
        get action() {
            return p
        },
        get location() {
            return n(u, d)
        },
        listen(O) {
            if (h) throw new Error("A history only accepts one active listener");
            return u.addEventListener(Zp, v), h = O, () => {
                u.removeEventListener(Zp, v), h = null
            }
        },
        createHref(O) {
            return i(u, O)
        },
        createURL: T,
        encodeLocation(O) {
            let E = T(O);
            return {
                pathname: E.pathname,
                search: E.search,
                hash: E.hash
            }
        },
        push: b,
        replace: x,
        go(O) {
            return d.go(O)
        }
    };
    return D
}

function rg(n, i = !1) {
    let l = "http://localhost";
    typeof window < "u" && (l = window.location.origin !== "null" ? window.location.origin : window.location.href), He(l, "No window.location.(origin|href) available to create URL");
    let s = typeof n == "string" ? n : za(n);
    return s = s.replace(/ $/, "%20"), !i && s.startsWith("//") && (s = l + s), new URL(s, l)
}
var bl, Ip = class {
    constructor(n) {
        if (_3(this, bl, new Map), n)
            for (let [i, l] of n) this.set(i, l)
    }
    get(n) {
        if (mf(this, bl).has(n)) return mf(this, bl).get(n);
        if (n.defaultValue !== void 0) return n.defaultValue;
        throw new Error("No value found for context")
    }
    set(n, i) {
        mf(this, bl).set(n, i)
    }
};
bl = new WeakMap;
var z3 = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

function V3(n) {
    return z3.has(n)
}
var H3 = new Set(["lazy", "caseSensitive", "path", "id", "index", "unstable_middleware", "children"]);

function U3(n) {
    return H3.has(n)
}

function B3(n) {
    return n.index === !0
}

function Al(n, i, l = [], s = {}, u = !1) {
    return n.map((f, d) => {
        let p = [...l, String(d)],
            h = typeof f.id == "string" ? f.id : p.join("-");
        if (He(f.index !== !0 || !f.children, "Cannot specify children on an index route"), He(u || !s[h], `Found a route id collision on id "${h}".  Route id's must be globally unique within Data Router usages`), B3(f)) {
            let m = {
                ...f,
                ...i(f),
                id: h
            };
            return s[h] = m, m
        } else {
            let m = {
                ...f,
                ...i(f),
                id: h,
                children: void 0
            };
            return s[h] = m, f.children && (m.children = Al(f.children, i, p, s, u)), m
        }
    })
}

function Na(n, i, l = "/") {
    return Ao(n, i, l, !1)
}

function Ao(n, i, l, s) {
    let u = typeof i == "string" ? Ua(i) : i,
        f = yn(u.pathname || "/", l);
    if (f == null) return null;
    let d = lg(n);
    k3(d);
    let p = null;
    for (let h = 0; p == null && h < d.length; ++h) {
        let m = J3(f);
        p = I3(d[h], m, s)
    }
    return p
}

function P3(n, i) {
    let {
        route: l,
        pathname: s,
        params: u
    } = n;
    return {
        id: l.id,
        pathname: s,
        params: u,
        data: i[l.id],
        loaderData: i[l.id],
        handle: l.handle
    }
}

function lg(n, i = [], l = [], s = "") {
    let u = (f, d, p) => {
        let h = {
            relativePath: p === void 0 ? f.path || "" : p,
            caseSensitive: f.caseSensitive === !0,
            childrenIndex: d,
            route: f
        };
        h.relativePath.startsWith("/") && (He(h.relativePath.startsWith(s), `Absolute route path "${h.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), h.relativePath = h.relativePath.slice(s.length));
        let m = _n([s, h.relativePath]),
            y = l.concat(h);
        f.children && f.children.length > 0 && (He(f.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${m}".`), lg(f.children, i, y, m)), !(f.path == null && !f.index) && i.push({
            path: m,
            score: Z3(m, f.index),
            routesMeta: y
        })
    };
    return n.forEach((f, d) => {
        if (f.path === "" || !f.path?.includes("?")) u(f, d);
        else
            for (let p of sg(f.path)) u(f, d, p)
    }), i
}

function sg(n) {
    let i = n.split("/");
    if (i.length === 0) return [];
    let [l, ...s] = i, u = l.endsWith("?"), f = l.replace(/\?$/, "");
    if (s.length === 0) return u ? [f, ""] : [f];
    let d = sg(s.join("/")),
        p = [];
    return p.push(...d.map(h => h === "" ? f : [f, h].join("/"))), u && p.push(...d), p.map(h => n.startsWith("/") && h === "" ? "/" : h)
}

function k3(n) {
    n.sort((i, l) => i.score !== l.score ? l.score - i.score : F3(i.routesMeta.map(s => s.childrenIndex), l.routesMeta.map(s => s.childrenIndex)))
}
var q3 = /^:[\w-]+$/,
    Y3 = 3,
    G3 = 2,
    X3 = 1,
    K3 = 10,
    Q3 = -2,
    $p = n => n === "*";

function Z3(n, i) {
    let l = n.split("/"),
        s = l.length;
    return l.some($p) && (s += Q3), i && (s += G3), l.filter(u => !$p(u)).reduce((u, f) => u + (q3.test(f) ? Y3 : f === "" ? X3 : K3), s)
}

function F3(n, i) {
    return n.length === i.length && n.slice(0, -1).every((s, u) => s === i[u]) ? n[n.length - 1] - i[i.length - 1] : 0
}

function I3(n, i, l = !1) {
    let {
        routesMeta: s
    } = n, u = {}, f = "/", d = [];
    for (let p = 0; p < s.length; ++p) {
        let h = s[p],
            m = p === s.length - 1,
            y = f === "/" ? i : i.slice(f.length) || "/",
            v = zo({
                path: h.relativePath,
                caseSensitive: h.caseSensitive,
                end: m
            }, y),
            b = h.route;
        if (!v && m && l && !s[s.length - 1].route.index && (v = zo({
            path: h.relativePath,
            caseSensitive: h.caseSensitive,
            end: !1
        }, y)), !v) return null;
        Object.assign(u, v.params), d.push({
            params: u,
            pathname: _n([f, v.pathname]),
            pathnameBase: n4(_n([f, v.pathnameBase])),
            route: b
        }), v.pathnameBase !== "/" && (f = _n([f, v.pathnameBase]))
    }
    return d
}

function zo(n, i) {
    typeof n == "string" && (n = {
        path: n,
        caseSensitive: !1,
        end: !0
    });
    let [l, s] = $3(n.path, n.caseSensitive, n.end), u = i.match(l);
    if (!u) return null;
    let f = u[0],
        d = f.replace(/(.)\/+$/, "$1"),
        p = u.slice(1);
    return {
        params: s.reduce((m, {
            paramName: y,
            isOptional: v
        }, b) => {
            if (y === "*") {
                let T = p[b] || "";
                d = f.slice(0, f.length - T.length).replace(/(.)\/+$/, "$1")
            }
            const x = p[b];
            return v && !x ? m[y] = void 0 : m[y] = (x || "").replace(/%2F/g, "/"), m
        }, {}),
        pathname: f,
        pathnameBase: d,
        pattern: n
    }
}

function $3(n, i = !1, l = !0) {
    bt(n === "*" || !n.endsWith("*") || n.endsWith("/*"), `Route path "${n}" will be treated as if it were "${n.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/, "/*")}".`);
    let s = [],
        u = "^" + n.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (d, p, h) => (s.push({
            paramName: p,
            isOptional: h != null
        }), h ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return n.endsWith("*") ? (s.push({
        paramName: "*"
    }), u += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : l ? u += "\\/*$" : n !== "" && n !== "/" && (u += "(?:(?=\\/|$))"), [new RegExp(u, i ? void 0 : "i"), s]
}

function J3(n) {
    try {
        return n.split("/").map(i => decodeURIComponent(i).replace(/\//g, "%2F")).join("/")
    } catch (i) {
        return bt(!1, `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`), n
    }
}

function yn(n, i) {
    if (i === "/") return n;
    if (!n.toLowerCase().startsWith(i.toLowerCase())) return null;
    let l = i.endsWith("/") ? i.length - 1 : i.length,
        s = n.charAt(l);
    return s && s !== "/" ? null : n.slice(l) || "/"
}

function W3({
    basename: n,
    pathname: i
}) {
    return i === "/" ? n : _n([n, i])
}

function e4(n, i = "/") {
    let {
        pathname: l,
        search: s = "",
        hash: u = ""
    } = typeof n == "string" ? Ua(n) : n;
    return {
        pathname: l ? l.startsWith("/") ? l : t4(l, i) : i,
        search: a4(s),
        hash: i4(u)
    }
}

function t4(n, i) {
    let l = i.replace(/\/+$/, "").split("/");
    return n.split("/").forEach(u => {
        u === ".." ? l.length > 1 && l.pop() : u !== "." && l.push(u)
    }), l.length > 1 ? l.join("/") : "/"
}

function pf(n, i, l, s) {
    return `Cannot include a '${n}' character in a manually specified \`to.${i}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}

function og(n) {
    return n.filter((i, l) => l === 0 || i.route.path && i.route.path.length > 0)
}

function dd(n) {
    let i = og(n);
    return i.map((l, s) => s === i.length - 1 ? l.pathname : l.pathnameBase)
}

function hd(n, i, l, s = !1) {
    let u;
    typeof n == "string" ? u = Ua(n) : (u = {
        ...n
    }, He(!u.pathname || !u.pathname.includes("?"), pf("?", "pathname", "search", u)), He(!u.pathname || !u.pathname.includes("#"), pf("#", "pathname", "hash", u)), He(!u.search || !u.search.includes("#"), pf("#", "search", "hash", u)));
    let f = n === "" || u.pathname === "",
        d = f ? "/" : u.pathname,
        p;
    if (d == null) p = l;
    else {
        let v = i.length - 1;
        if (!s && d.startsWith("..")) {
            let b = d.split("/");
            for (; b[0] === "..";) b.shift(), v -= 1;
            u.pathname = b.join("/")
        }
        p = v >= 0 ? i[v] : "/"
    }
    let h = e4(u, p),
        m = d && d !== "/" && d.endsWith("/"),
        y = (f || d === ".") && l.endsWith("/");
    return !h.pathname.endsWith("/") && (m || y) && (h.pathname += "/"), h
}
var _n = n => n.join("/").replace(/\/\/+/g, "/"),
    n4 = n => n.replace(/\/+$/, "").replace(/^\/*/, "/"),
    a4 = n => !n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n,
    i4 = n => !n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n,
    Vo = class {
        constructor(n, i, l, s = !1) {
            this.status = n, this.statusText = i || "", this.internal = s, l instanceof Error ? (this.data = l.toString(), this.error = l) : this.data = l
        }
    };

function Dl(n) {
    return n != null && typeof n.status == "number" && typeof n.statusText == "string" && typeof n.internal == "boolean" && "data" in n
}
var ug = ["POST", "PUT", "PATCH", "DELETE"],
    r4 = new Set(ug),
    l4 = ["GET", ...ug],
    s4 = new Set(l4),
    o4 = new Set([301, 302, 303, 307, 308]),
    u4 = new Set([307, 308]),
    yf = {
        state: "idle",
        location: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    },
    c4 = {
        state: "idle",
        data: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    },
    ml = {
        state: "unblocked",
        proceed: void 0,
        reset: void 0,
        location: void 0
    },
    f4 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    md = n => f4.test(n),
    d4 = n => ({
        hasErrorBoundary: !!n.hasErrorBoundary
    }),
    cg = "remix-router-transitions",
    fg = Symbol("ResetLoaderData");

function h4(n) {
    const i = n.window ? n.window : typeof window < "u" ? window : void 0,
        l = typeof i < "u" && typeof i.document < "u" && typeof i.document.createElement < "u";
    He(n.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let s = n.hydrationRouteProperties || [],
        u = n.mapRouteProperties || d4,
        f = {},
        d = Al(n.routes, u, void 0, f),
        p, h = n.basename || "/",
        m = n.dataStrategy || v4,
        y = {
            unstable_middleware: !1,
            ...n.future
        },
        v = null,
        b = new Set,
        x = null,
        T = null,
        D = null,
        O = n.hydrationData != null,
        E = Na(d, n.history.location, h),
        V = !1,
        j = null,
        Q;
    if (E == null && !n.patchRoutesOnNavigation) {
        let _ = mn(404, {
            pathname: n.history.location.pathname
        }),
            {
                matches: B,
                route: X
            } = u1(d);
        Q = !0, E = B, j = {
            [X.id]: _
        }
    } else if (E && !n.hydrationData && Xa(E, d, n.history.location.pathname).active && (E = null), E)
        if (E.some(_ => _.route.lazy)) Q = !1;
        else if (!E.some(_ => _.route.loader)) Q = !0;
        else {
            let _ = n.hydrationData ? n.hydrationData.loaderData : null,
                B = n.hydrationData ? n.hydrationData.errors : null;
            if (B) {
                let X = E.findIndex(te => B[te.route.id] !== void 0);
                Q = E.slice(0, X + 1).every(te => !Pf(te.route, _, B))
            } else Q = E.every(X => !Pf(X.route, _, B))
        } else {
        Q = !1, E = [];
        let _ = Xa(null, d, n.history.location.pathname);
        _.active && _.matches && (V = !0, E = _.matches)
    }
    let U, M = {
        historyAction: n.history.action,
        location: n.history.location,
        matches: E,
        initialized: Q,
        navigation: yf,
        restoreScrollPosition: n.hydrationData != null ? !1 : null,
        preventScrollReset: !1,
        revalidation: "idle",
        loaderData: n.hydrationData && n.hydrationData.loaderData || {},
        actionData: n.hydrationData && n.hydrationData.actionData || null,
        errors: n.hydrationData && n.hydrationData.errors || j,
        fetchers: new Map,
        blockers: new Map
    },
        G = "POP",
        Z = !1,
        ee, ie = !1,
        ne = new Map,
        K = null,
        se = !1,
        ae = !1,
        be = new Set,
        H = new Map,
        $ = 0,
        oe = -1,
        ye = new Map,
        A = new Set,
        F = new Map,
        ue = new Map,
        re = new Set,
        ce = new Map,
        Oe, Se = null;

    function Je() {
        if (v = n.history.listen(({
            action: _,
            location: B,
            delta: X
        }) => {
            if (Oe) {
                Oe(), Oe = void 0;
                return
            }
            bt(ce.size === 0 || X != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
            let te = Ql({
                currentLocation: M.location,
                nextLocation: B,
                historyAction: _
            });
            if (te && X != null) {
                let le = new Promise(de => {
                    Oe = de
                });
                n.history.go(X * -1), En(te, {
                    state: "blocked",
                    location: B,
                    proceed() {
                        En(te, {
                            state: "proceeding",
                            proceed: void 0,
                            reset: void 0,
                            location: B
                        }), le.then(() => n.history.go(X))
                    },
                    reset() {
                        let de = new Map(M.blockers);
                        de.set(te, ml), Ge({
                            blockers: de
                        })
                    }
                });
                return
            }
            return gn(_, B)
        }), l) {
            O4(i, ne);
            let _ = () => C4(i, ne);
            i.addEventListener("pagehide", _), K = () => i.removeEventListener("pagehide", _)
        }
        return M.initialized || gn("POP", M.location, {
            initialHydration: !0
        }), U
    }

    function Me() {
        v && v(), K && K(), b.clear(), ee && ee.abort(), M.fetchers.forEach((_, B) => Rt(B)), M.blockers.forEach((_, B) => Ya(B))
    }

    function lt(_) {
        return b.add(_), () => b.delete(_)
    }

    function Ge(_, B = {}) {
        _.matches && (_.matches = _.matches.map(le => {
            let de = f[le.route.id],
                pe = le.route;
            return pe.element !== de.element || pe.errorElement !== de.errorElement || pe.hydrateFallbackElement !== de.hydrateFallbackElement ? {
                ...le,
                route: de
            } : le
        })), M = {
            ...M,
            ..._
        };
        let X = [],
            te = [];
        M.fetchers.forEach((le, de) => {
            le.state === "idle" && (re.has(de) ? X.push(de) : te.push(de))
        }), re.forEach(le => {
            !M.fetchers.has(le) && !H.has(le) && X.push(le)
        }), [...b].forEach(le => le(M, {
            deletedFetchers: X,
            viewTransitionOpts: B.viewTransitionOpts,
            flushSync: B.flushSync === !0
        })), X.forEach(le => Rt(le)), te.forEach(le => M.fetchers.delete(le))
    }

    function Mt(_, B, {
        flushSync: X
    } = {}) {
        let te = M.actionData != null && M.navigation.formMethod != null && qt(M.navigation.formMethod) && M.navigation.state === "loading" && _.state?._isRedirect !== !0,
            le;
        B.actionData ? Object.keys(B.actionData).length > 0 ? le = B.actionData : le = null : te ? le = M.actionData : le = null;
        let de = B.loaderData ? s1(M.loaderData, B.loaderData, B.matches || [], B.errors) : M.loaderData,
            pe = M.blockers;
        pe.size > 0 && (pe = new Map(pe), pe.forEach((me, ge) => pe.set(ge, ml)));
        let he = se ? !1 : Fl(_, B.matches || M.matches),
            xe = Z === !0 || M.navigation.formMethod != null && qt(M.navigation.formMethod) && _.state?._isRedirect !== !0;
        p && (d = p, p = void 0), se || G === "POP" || (G === "PUSH" ? n.history.push(_, _.state) : G === "REPLACE" && n.history.replace(_, _.state));
        let we;
        if (G === "POP") {
            let me = ne.get(M.location.pathname);
            me && me.has(_.pathname) ? we = {
                currentLocation: M.location,
                nextLocation: _
            } : ne.has(_.pathname) && (we = {
                currentLocation: _,
                nextLocation: M.location
            })
        } else if (ie) {
            let me = ne.get(M.location.pathname);
            me ? me.add(_.pathname) : (me = new Set([_.pathname]), ne.set(M.location.pathname, me)), we = {
                currentLocation: M.location,
                nextLocation: _
            }
        }
        Ge({
            ...B,
            actionData: le,
            loaderData: de,
            historyAction: G,
            location: _,
            initialized: !0,
            navigation: yf,
            revalidation: "idle",
            restoreScrollPosition: he,
            preventScrollReset: xe,
            blockers: pe
        }, {
            viewTransitionOpts: we,
            flushSync: X === !0
        }), G = "POP", Z = !1, ie = !1, se = !1, ae = !1, Se?.resolve(), Se = null
    }
    async function ra(_, B) {
        if (typeof _ == "number") {
            n.history.go(_);
            return
        }
        let X = Bf(M.location, M.matches, h, _, B?.fromRouteId, B?.relative),
            {
                path: te,
                submission: le,
                error: de
            } = Jp(!1, X, B),
            pe = M.location,
            he = Rl(M.location, te, B && B.state);
        he = {
            ...he,
            ...n.history.encodeLocation(he)
        };
        let xe = B && B.replace != null ? B.replace : void 0,
            we = "PUSH";
        xe === !0 ? we = "REPLACE" : xe === !1 || le != null && qt(le.formMethod) && le.formAction === M.location.pathname + M.location.search && (we = "REPLACE");
        let me = B && "preventScrollReset" in B ? B.preventScrollReset === !0 : void 0,
            ge = (B && B.flushSync) === !0,
            _e = Ql({
                currentLocation: pe,
                nextLocation: he,
                historyAction: we
            });
        if (_e) {
            En(_e, {
                state: "blocked",
                location: he,
                proceed() {
                    En(_e, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: he
                    }), ra(_, B)
                },
                reset() {
                    let ke = new Map(M.blockers);
                    ke.set(_e, ml), Ge({
                        blockers: ke
                    })
                }
            });
            return
        }
        await gn(we, he, {
            submission: le,
            pendingError: de,
            preventScrollReset: me,
            replace: B && B.replace,
            enableViewTransition: B && B.viewTransition,
            flushSync: ge
        })
    }

    function yr() {
        Se || (Se = _4()), gr(), Ge({
            revalidation: "loading"
        });
        let _ = Se.promise;
        return M.navigation.state === "submitting" ? _ : M.navigation.state === "idle" ? (gn(M.historyAction, M.location, {
            startUninterruptedRevalidation: !0
        }), _) : (gn(G || M.historyAction, M.navigation.location, {
            overrideNavigation: M.navigation,
            enableViewTransition: ie === !0
        }), _)
    }
    async function gn(_, B, X) {
        ee && ee.abort(), ee = null, G = _, se = (X && X.startUninterruptedRevalidation) === !0, Ga(M.location, M.matches), Z = (X && X.preventScrollReset) === !0, ie = (X && X.enableViewTransition) === !0;
        let te = p || d,
            le = X && X.overrideNavigation,
            de = X?.initialHydration && M.matches && M.matches.length > 0 && !V ? M.matches : Na(te, B, h),
            pe = (X && X.flushSync) === !0;
        if (de && M.initialized && !ae && E4(M.location, B) && !(X && X.submission && qt(X.submission.formMethod))) {
            Mt(B, {
                matches: de
            }, {
                flushSync: pe
            });
            return
        }
        let he = Xa(de, te, B.pathname);
        if (he.active && he.matches && (de = he.matches), !de) {
            let {
                error: ot,
                notFoundMatches: De,
                route: Xe
            } = xi(B.pathname);
            Mt(B, {
                matches: De,
                loaderData: {},
                errors: {
                    [Xe.id]: ot
                }
            }, {
                flushSync: pe
            });
            return
        }
        ee = new AbortController;
        let xe = ar(n.history, B, ee.signal, X && X.submission),
            we = n.unstable_getContext ? await n.unstable_getContext() : new Ip,
            me;
        if (X && X.pendingError) me = [La(de).route.id, {
            type: "error",
            error: X.pendingError
        }];
        else if (X && X.submission && qt(X.submission.formMethod)) {
            let ot = await eu(xe, B, X.submission, de, we, he.active, X && X.initialHydration === !0, {
                replace: X.replace,
                flushSync: pe
            });
            if (ot.shortCircuited) return;
            if (ot.pendingActionResult) {
                let [De, Xe] = ot.pendingActionResult;
                if (Wt(Xe) && Dl(Xe.error) && Xe.error.status === 404) {
                    ee = null, Mt(B, {
                        matches: ot.matches,
                        loaderData: {},
                        errors: {
                            [De]: Xe.error
                        }
                    });
                    return
                }
            }
            de = ot.matches || de, me = ot.pendingActionResult, le = gf(B, X.submission), pe = !1, he.active = !1, xe = ar(n.history, xe.url, xe.signal)
        }
        let {
            shortCircuited: ge,
            matches: _e,
            loaderData: ke,
            errors: st
        } = await tu(xe, B, de, we, he.active, le, X && X.submission, X && X.fetcherSubmission, X && X.replace, X && X.initialHydration === !0, pe, me);
        ge || (ee = null, Mt(B, {
            matches: _e || de,
            ...o1(me),
            loaderData: ke,
            errors: st
        }))
    }
    async function eu(_, B, X, te, le, de, pe, he = {}) {
        gr();
        let xe = A4(B, X);
        if (Ge({
            navigation: xe
        }, {
            flushSync: he.flushSync === !0
        }), de) {
            let ge = await Ka(te, B.pathname, _.signal);
            if (ge.type === "aborted") return {
                shortCircuited: !0
            };
            if (ge.type === "error") {
                let _e = La(ge.partialMatches).route.id;
                return {
                    matches: ge.partialMatches,
                    pendingActionResult: [_e, {
                        type: "error",
                        error: ge.error
                    }]
                }
            } else if (ge.matches) te = ge.matches;
            else {
                let {
                    notFoundMatches: _e,
                    error: ke,
                    route: st
                } = xi(B.pathname);
                return {
                    matches: _e,
                    pendingActionResult: [st.id, {
                        type: "error",
                        error: ke
                    }]
                }
            }
        }
        let we, me = Do(te, B);
        if (!me.route.action && !me.route.lazy) we = {
            type: "error",
            error: mn(405, {
                method: _.method,
                pathname: B.pathname,
                routeId: me.route.id
            })
        };
        else {
            let ge = ur(u, f, _, te, me, pe ? [] : s, le),
                _e = await la(_, ge, le, null);
            if (we = _e[me.route.id], !we) {
                for (let ke of te)
                    if (_e[ke.route.id]) {
                        we = _e[ke.route.id];
                        break
                    }
            }
            if (_.signal.aborted) return {
                shortCircuited: !0
            }
        }
        if (di(we)) {
            let ge;
            return he && he.replace != null ? ge = he.replace : ge = i1(we.response.headers.get("Location"), new URL(_.url), h) === M.location.pathname + M.location.search, await Un(_, we, !0, {
                submission: X,
                replace: ge
            }), {
                shortCircuited: !0
            }
        }
        if (Wt(we)) {
            let ge = La(te, me.route.id);
            return (he && he.replace) !== !0 && (G = "PUSH"), {
                matches: te,
                pendingActionResult: [ge.route.id, we, me.route.id]
            }
        }
        return {
            matches: te,
            pendingActionResult: [me.route.id, we]
        }
    }
    async function tu(_, B, X, te, le, de, pe, he, xe, we, me, ge) {
        let _e = de || gf(B, pe),
            ke = pe || he || f1(_e),
            st = !se && !we;
        if (le) {
            if (st) {
                let pt = Gt(ge);
                Ge({
                    navigation: _e,
                    ...pt !== void 0 ? {
                        actionData: pt
                    } : {}
                }, {
                    flushSync: me
                })
            }
            let je = await Ka(X, B.pathname, _.signal);
            if (je.type === "aborted") return {
                shortCircuited: !0
            };
            if (je.type === "error") {
                let pt = La(je.partialMatches).route.id;
                return {
                    matches: je.partialMatches,
                    loaderData: {},
                    errors: {
                        [pt]: je.error
                    }
                }
            } else if (je.matches) X = je.matches;
            else {
                let {
                    error: pt,
                    notFoundMatches: Qa,
                    route: tn
                } = xi(B.pathname);
                return {
                    matches: Qa,
                    loaderData: {},
                    errors: {
                        [tn.id]: pt
                    }
                }
            }
        }
        let ot = p || d,
            {
                dsMatches: De,
                revalidatingFetchers: Xe
            } = Wp(_, te, u, f, n.history, M, X, ke, B, we ? [] : s, we === !0, ae, be, re, F, A, ot, h, n.patchRoutesOnNavigation != null, ge);
        if (oe = ++$, !n.dataStrategy && !De.some(je => je.shouldLoad) && !De.some(je => je.route.unstable_middleware) && Xe.length === 0) {
            let je = ka();
            return Mt(B, {
                matches: X,
                loaderData: {},
                errors: ge && Wt(ge[1]) ? {
                    [ge[0]]: ge[1].error
                } : null,
                ...o1(ge),
                ...je ? {
                    fetchers: new Map(M.fetchers)
                } : {}
            }, {
                flushSync: me
            }), {
                shortCircuited: !0
            }
        }
        if (st) {
            let je = {};
            if (!le) {
                je.navigation = _e;
                let pt = Gt(ge);
                pt !== void 0 && (je.actionData = pt)
            }
            Xe.length > 0 && (je.fetchers = nu(Xe)), Ge(je, {
                flushSync: me
            })
        }
        Xe.forEach(je => {
            Tn(je.key), je.controller && H.set(je.key, je.controller)
        });
        let Mn = () => Xe.forEach(je => Tn(je.key));
        ee && ee.signal.addEventListener("abort", Mn);
        let {
            loaderResults: Xt,
            fetcherResults: Lt
        } = await Xl(De, Xe, _, te);
        if (_.signal.aborted) return {
            shortCircuited: !0
        };
        ee && ee.signal.removeEventListener("abort", Mn), Xe.forEach(je => H.delete(je.key));
        let en = so(Xt);
        if (en) return await Un(_, en.result, !0, {
            replace: xe
        }), {
            shortCircuited: !0
        };
        if (en = so(Lt), en) return A.add(en.key), await Un(_, en.result, !0, {
            replace: xe
        }), {
            shortCircuited: !0
        };
        let {
            loaderData: wi,
            errors: sa
        } = l1(M, X, Xt, ge, Xe, Lt);
        we && M.errors && (sa = {
            ...M.errors,
            ...sa
        });
        let Pn = ka(),
            kn = qa(oe),
            qn = Pn || kn || Xe.length > 0;
        return {
            matches: X,
            loaderData: wi,
            errors: sa,
            ...qn ? {
                fetchers: new Map(M.fetchers)
            } : {}
        }
    }

    function Gt(_) {
        if (_ && !Wt(_[1])) return {
            [_[0]]: _[1].data
        };
        if (M.actionData) return Object.keys(M.actionData).length === 0 ? null : M.actionData
    }

    function nu(_) {
        return _.forEach(B => {
            let X = M.fetchers.get(B.key),
                te = pl(void 0, X ? X.data : void 0);
            M.fetchers.set(B.key, te)
        }), new Map(M.fetchers)
    }
    async function Yl(_, B, X, te) {
        Tn(_);
        let le = (te && te.flushSync) === !0,
            de = p || d,
            pe = Bf(M.location, M.matches, h, X, B, te?.relative),
            he = Na(de, pe, h),
            xe = Xa(he, de, pe);
        if (xe.active && xe.matches && (he = xe.matches), !he) {
            nt(_, B, mn(404, {
                pathname: pe
            }), {
                flushSync: le
            });
            return
        }
        let {
            path: we,
            submission: me,
            error: ge
        } = Jp(!0, pe, te);
        if (ge) {
            nt(_, B, ge, {
                flushSync: le
            });
            return
        }
        let _e = n.unstable_getContext ? await n.unstable_getContext() : new Ip,
            ke = (te && te.preventScrollReset) === !0;
        if (me && qt(me.formMethod)) {
            await Gl(_, B, we, he, _e, xe.active, le, ke, me);
            return
        }
        F.set(_, {
            routeId: B,
            path: we
        }), await bi(_, B, we, he, _e, xe.active, le, ke, me)
    }
    async function Gl(_, B, X, te, le, de, pe, he, xe) {
        gr(), F.delete(_);
        let we = M.fetchers.get(_);
        Ht(_, D4(xe, we), {
            flushSync: pe
        });
        let me = new AbortController,
            ge = ar(n.history, X, me.signal, xe);
        if (de) {
            let at = await Ka(te, new URL(ge.url).pathname, ge.signal, _);
            if (at.type === "aborted") return;
            if (at.type === "error") {
                nt(_, B, at.error, {
                    flushSync: pe
                });
                return
            } else if (at.matches) te = at.matches;
            else {
                nt(_, B, mn(404, {
                    pathname: X
                }), {
                    flushSync: pe
                });
                return
            }
        }
        let _e = Do(te, X);
        if (!_e.route.action && !_e.route.lazy) {
            let at = mn(405, {
                method: xe.formMethod,
                pathname: X,
                routeId: B
            });
            nt(_, B, at, {
                flushSync: pe
            });
            return
        }
        H.set(_, me);
        let ke = $,
            st = ur(u, f, ge, te, _e, s, le),
            De = (await la(ge, st, le, _))[_e.route.id];
        if (ge.signal.aborted) {
            H.get(_) === me && H.delete(_);
            return
        }
        if (re.has(_)) {
            if (di(De) || Wt(De)) {
                Ht(_, _a(void 0));
                return
            }
        } else {
            if (di(De))
                if (H.delete(_), oe > ke) {
                    Ht(_, _a(void 0));
                    return
                } else return A.add(_), Ht(_, pl(xe)), Un(ge, De, !1, {
                    fetcherSubmission: xe,
                    preventScrollReset: he
                });
            if (Wt(De)) {
                nt(_, B, De.error);
                return
            }
        }
        let Xe = M.navigation.location || M.location,
            Mn = ar(n.history, Xe, me.signal),
            Xt = p || d,
            Lt = M.navigation.state !== "idle" ? Na(Xt, M.navigation.location, h) : M.matches;
        He(Lt, "Didn't find any matches after fetcher action");
        let en = ++$;
        ye.set(_, en);
        let wi = pl(xe, De.data);
        M.fetchers.set(_, wi);
        let {
            dsMatches: sa,
            revalidatingFetchers: Pn
        } = Wp(Mn, le, u, f, n.history, M, Lt, xe, Xe, s, !1, ae, be, re, F, A, Xt, h, n.patchRoutesOnNavigation != null, [_e.route.id, De]);
        Pn.filter(at => at.key !== _).forEach(at => {
            let oa = at.key,
                Il = M.fetchers.get(oa),
                $l = pl(void 0, Il ? Il.data : void 0);
            M.fetchers.set(oa, $l), Tn(oa), at.controller && H.set(oa, at.controller)
        }), Ge({
            fetchers: new Map(M.fetchers)
        });
        let kn = () => Pn.forEach(at => Tn(at.key));
        me.signal.addEventListener("abort", kn);
        let {
            loaderResults: qn,
            fetcherResults: je
        } = await Xl(sa, Pn, Mn, le);
        if (me.signal.aborted) return;
        if (me.signal.removeEventListener("abort", kn), ye.delete(_), H.delete(_), Pn.forEach(at => H.delete(at.key)), M.fetchers.has(_)) {
            let at = _a(De.data);
            M.fetchers.set(_, at)
        }
        let pt = so(qn);
        if (pt) return Un(Mn, pt.result, !1, {
            preventScrollReset: he
        });
        if (pt = so(je), pt) return A.add(pt.key), Un(Mn, pt.result, !1, {
            preventScrollReset: he
        });
        let {
            loaderData: Qa,
            errors: tn
        } = l1(M, Lt, qn, void 0, Pn, je);
        qa(en), M.navigation.state === "loading" && en > oe ? (He(G, "Expected pending action"), ee && ee.abort(), Mt(M.navigation.location, {
            matches: Lt,
            loaderData: Qa,
            errors: tn,
            fetchers: new Map(M.fetchers)
        })) : (Ge({
            errors: tn,
            loaderData: s1(M.loaderData, Qa, Lt, tn),
            fetchers: new Map(M.fetchers)
        }), ae = !1)
    }
    async function bi(_, B, X, te, le, de, pe, he, xe) {
        let we = M.fetchers.get(_);
        Ht(_, pl(xe, we ? we.data : void 0), {
            flushSync: pe
        });
        let me = new AbortController,
            ge = ar(n.history, X, me.signal);
        if (de) {
            let Xe = await Ka(te, new URL(ge.url).pathname, ge.signal, _);
            if (Xe.type === "aborted") return;
            if (Xe.type === "error") {
                nt(_, B, Xe.error, {
                    flushSync: pe
                });
                return
            } else if (Xe.matches) te = Xe.matches;
            else {
                nt(_, B, mn(404, {
                    pathname: X
                }), {
                    flushSync: pe
                });
                return
            }
        }
        let _e = Do(te, X);
        H.set(_, me);
        let ke = $,
            st = ur(u, f, ge, te, _e, s, le),
            De = (await la(ge, st, le, _))[_e.route.id];
        if (H.get(_) === me && H.delete(_), !ge.signal.aborted) {
            if (re.has(_)) {
                Ht(_, _a(void 0));
                return
            }
            if (di(De))
                if (oe > ke) {
                    Ht(_, _a(void 0));
                    return
                } else {
                    A.add(_), await Un(ge, De, !1, {
                        preventScrollReset: he
                    });
                    return
                } if (Wt(De)) {
                    nt(_, B, De.error);
                    return
                }
            Ht(_, _a(De.data))
        }
    }
    async function Un(_, B, X, {
        submission: te,
        fetcherSubmission: le,
        preventScrollReset: de,
        replace: pe
    } = {}) {
        B.response.headers.has("X-Remix-Revalidate") && (ae = !0);
        let he = B.response.headers.get("Location");
        He(he, "Expected a Location header on the redirect Response"), he = i1(he, new URL(_.url), h);
        let xe = Rl(M.location, he, {
            _isRedirect: !0
        });
        if (l) {
            let st = !1;
            if (B.response.headers.has("X-Remix-Reload-Document")) st = !0;
            else if (md(he)) {
                const ot = rg(he, !0);
                st = ot.origin !== i.location.origin || yn(ot.pathname, h) == null
            }
            if (st) {
                pe ? i.location.replace(he) : i.location.assign(he);
                return
            }
        }
        ee = null;
        let we = pe === !0 || B.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH",
            {
                formMethod: me,
                formAction: ge,
                formEncType: _e
            } = M.navigation;
        !te && !le && me && ge && _e && (te = f1(M.navigation));
        let ke = te || le;
        if (u4.has(B.response.status) && ke && qt(ke.formMethod)) await gn(we, xe, {
            submission: {
                ...ke,
                formAction: he
            },
            preventScrollReset: de || Z,
            enableViewTransition: X ? ie : void 0
        });
        else {
            let st = gf(xe, te);
            await gn(we, xe, {
                overrideNavigation: st,
                fetcherSubmission: le,
                preventScrollReset: de || Z,
                enableViewTransition: X ? ie : void 0
            })
        }
    }
    async function la(_, B, X, te) {
        let le, de = {};
        try {
            le = await b4(m, _, B, te, X, !1)
        } catch (pe) {
            return B.filter(he => he.shouldLoad).forEach(he => {
                de[he.route.id] = {
                    type: "error",
                    error: pe
                }
            }), de
        }
        if (_.signal.aborted) return de;
        for (let [pe, he] of Object.entries(le))
            if (M4(he)) {
                let xe = he.result;
                de[pe] = {
                    type: "redirect",
                    response: w4(xe, _, pe, B, h)
                }
            } else de[pe] = await S4(he);
        return de
    }
    async function Xl(_, B, X, te) {
        let le = la(X, _, te, null),
            de = Promise.all(B.map(async xe => {
                if (xe.matches && xe.match && xe.request && xe.controller) {
                    let me = (await la(xe.request, xe.matches, te, xe.key))[xe.match.route.id];
                    return {
                        [xe.key]: me
                    }
                } else return Promise.resolve({
                    [xe.key]: {
                        type: "error",
                        error: mn(404, {
                            pathname: xe.path
                        })
                    }
                })
            })),
            pe = await le,
            he = (await de).reduce((xe, we) => Object.assign(xe, we), {});
        return {
            loaderResults: pe,
            fetcherResults: he
        }
    }

    function gr() {
        ae = !0, F.forEach((_, B) => {
            H.has(B) && be.add(B), Tn(B)
        })
    }

    function Ht(_, B, X = {}) {
        M.fetchers.set(_, B), Ge({
            fetchers: new Map(M.fetchers)
        }, {
            flushSync: (X && X.flushSync) === !0
        })
    }

    function nt(_, B, X, te = {}) {
        let le = La(M.matches, B);
        Rt(_), Ge({
            errors: {
                [le.route.id]: X
            },
            fetchers: new Map(M.fetchers)
        }, {
            flushSync: (te && te.flushSync) === !0
        })
    }

    function vn(_) {
        return ue.set(_, (ue.get(_) || 0) + 1), re.has(_) && re.delete(_), M.fetchers.get(_) || c4
    }

    function Rt(_) {
        let B = M.fetchers.get(_);
        H.has(_) && !(B && B.state === "loading" && ye.has(_)) && Tn(_), F.delete(_), ye.delete(_), A.delete(_), re.delete(_), be.delete(_), M.fetchers.delete(_)
    }

    function au(_) {
        let B = (ue.get(_) || 0) - 1;
        B <= 0 ? (ue.delete(_), re.add(_)) : ue.set(_, B), Ge({
            fetchers: new Map(M.fetchers)
        })
    }

    function Tn(_) {
        let B = H.get(_);
        B && (B.abort(), H.delete(_))
    }

    function Kl(_) {
        for (let B of _) {
            let X = vn(B),
                te = _a(X.data);
            M.fetchers.set(B, te)
        }
    }

    function ka() {
        let _ = [],
            B = !1;
        for (let X of A) {
            let te = M.fetchers.get(X);
            He(te, `Expected fetcher: ${X}`), te.state === "loading" && (A.delete(X), _.push(X), B = !0)
        }
        return Kl(_), B
    }

    function qa(_) {
        let B = [];
        for (let [X, te] of ye)
            if (te < _) {
                let le = M.fetchers.get(X);
                He(le, `Expected fetcher: ${X}`), le.state === "loading" && (Tn(X), ye.delete(X), B.push(X))
            } return Kl(B), B.length > 0
    }

    function Bn(_, B) {
        let X = M.blockers.get(_) || ml;
        return ce.get(_) !== B && ce.set(_, B), X
    }

    function Ya(_) {
        M.blockers.delete(_), ce.delete(_)
    }

    function En(_, B) {
        let X = M.blockers.get(_) || ml;
        He(X.state === "unblocked" && B.state === "blocked" || X.state === "blocked" && B.state === "blocked" || X.state === "blocked" && B.state === "proceeding" || X.state === "blocked" && B.state === "unblocked" || X.state === "proceeding" && B.state === "unblocked", `Invalid blocker state transition: ${X.state} -> ${B.state}`);
        let te = new Map(M.blockers);
        te.set(_, B), Ge({
            blockers: te
        })
    }

    function Ql({
        currentLocation: _,
        nextLocation: B,
        historyAction: X
    }) {
        if (ce.size === 0) return;
        ce.size > 1 && bt(!1, "A router only supports one blocker at a time");
        let te = Array.from(ce.entries()),
            [le, de] = te[te.length - 1],
            pe = M.blockers.get(le);
        if (!(pe && pe.state === "proceeding") && de({
            currentLocation: _,
            nextLocation: B,
            historyAction: X
        })) return le
    }

    function xi(_) {
        let B = mn(404, {
            pathname: _
        }),
            X = p || d,
            {
                matches: te,
                route: le
            } = u1(X);
        return {
            notFoundMatches: te,
            route: le,
            error: B
        }
    }

    function Zl(_, B, X) {
        if (x = _, D = B, T = X || null, !O && M.navigation === yf) {
            O = !0;
            let te = Fl(M.location, M.matches);
            te != null && Ge({
                restoreScrollPosition: te
            })
        }
        return () => {
            x = null, D = null, T = null
        }
    }

    function Si(_, B) {
        return T && T(_, B.map(te => P3(te, M.loaderData))) || _.key
    }

    function Ga(_, B) {
        if (x && D) {
            let X = Si(_, B);
            x[X] = D()
        }
    }

    function Fl(_, B) {
        if (x) {
            let X = Si(_, B),
                te = x[X];
            if (typeof te == "number") return te
        }
        return null
    }

    function Xa(_, B, X) {
        if (n.patchRoutesOnNavigation)
            if (_) {
                if (Object.keys(_[0].params).length > 0) return {
                    active: !0,
                    matches: Ao(B, X, h, !0)
                }
            } else return {
                active: !0,
                matches: Ao(B, X, h, !0) || []
            };
        return {
            active: !1,
            matches: null
        }
    }
    async function Ka(_, B, X, te) {
        if (!n.patchRoutesOnNavigation) return {
            type: "success",
            matches: _
        };
        let le = _;
        for (; ;) {
            let de = p == null,
                pe = p || d,
                he = f;
            try {
                await n.patchRoutesOnNavigation({
                    signal: X,
                    path: B,
                    matches: le,
                    fetcherKey: te,
                    patch: (me, ge) => {
                        X.aborted || e1(me, ge, pe, he, u, !1)
                    }
                })
            } catch (me) {
                return {
                    type: "error",
                    error: me,
                    partialMatches: le
                }
            } finally {
                de && !X.aborted && (d = [...d])
            }
            if (X.aborted) return {
                type: "aborted"
            };
            let xe = Na(pe, B, h);
            if (xe) return {
                type: "success",
                matches: xe
            };
            let we = Ao(pe, B, h, !0);
            if (!we || le.length === we.length && le.every((me, ge) => me.route.id === we[ge].route.id)) return {
                type: "success",
                matches: null
            };
            le = we
        }
    }

    function vr(_) {
        f = {}, p = Al(_, u, void 0, f)
    }

    function br(_, B, X = !1) {
        let te = p == null;
        e1(_, B, p || d, f, u, X), te && (d = [...d], Ge({}))
    }
    return U = {
        get basename() {
            return h
        },
        get future() {
            return y
        },
        get state() {
            return M
        },
        get routes() {
            return d
        },
        get window() {
            return i
        },
        initialize: Je,
        subscribe: lt,
        enableScrollRestoration: Zl,
        navigate: ra,
        fetch: Yl,
        revalidate: yr,
        createHref: _ => n.history.createHref(_),
        encodeLocation: _ => n.history.encodeLocation(_),
        getFetcher: vn,
        deleteFetcher: au,
        dispose: Me,
        getBlocker: Bn,
        deleteBlocker: Ya,
        patchRoutes: br,
        _internalFetchControllers: H,
        _internalSetRoutes: vr,
        _internalSetStateDoNotUseOrYouWillBreakYourApp(_) {
            Ge(_)
        }
    }, U
}

function m4(n) {
    return n != null && ("formData" in n && n.formData != null || "body" in n && n.body !== void 0)
}

function Bf(n, i, l, s, u, f) {
    let d, p;
    if (u) {
        d = [];
        for (let m of i)
            if (d.push(m), m.route.id === u) {
                p = m;
                break
            }
    } else d = i, p = i[i.length - 1];
    let h = hd(s || ".", dd(d), yn(n.pathname, l) || n.pathname, f === "path");
    if (s == null && (h.search = n.search, h.hash = n.hash), (s == null || s === "" || s === ".") && p) {
        let m = pd(h.search);
        if (p.route.index && !m) h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index";
        else if (!p.route.index && m) {
            let y = new URLSearchParams(h.search),
                v = y.getAll("index");
            y.delete("index"), v.filter(x => x).forEach(x => y.append("index", x));
            let b = y.toString();
            h.search = b ? `?${b}` : ""
        }
    }
    return l !== "/" && (h.pathname = W3({
        basename: l,
        pathname: h.pathname
    })), za(h)
}

function Jp(n, i, l) {
    if (!l || !m4(l)) return {
        path: i
    };
    if (l.formMethod && !R4(l.formMethod)) return {
        path: i,
        error: mn(405, {
            method: l.formMethod
        })
    };
    let s = () => ({
        path: i,
        error: mn(400, {
            type: "invalid-body"
        })
    }),
        f = (l.formMethod || "get").toUpperCase(),
        d = vg(i);
    if (l.body !== void 0) {
        if (l.formEncType === "text/plain") {
            if (!qt(f)) return s();
            let v = typeof l.body == "string" ? l.body : l.body instanceof FormData || l.body instanceof URLSearchParams ? Array.from(l.body.entries()).reduce((b, [x, T]) => `${b}${x}=${T}
`, "") : String(l.body);
            return {
                path: i,
                submission: {
                    formMethod: f,
                    formAction: d,
                    formEncType: l.formEncType,
                    formData: void 0,
                    json: void 0,
                    text: v
                }
            }
        } else if (l.formEncType === "application/json") {
            if (!qt(f)) return s();
            try {
                let v = typeof l.body == "string" ? JSON.parse(l.body) : l.body;
                return {
                    path: i,
                    submission: {
                        formMethod: f,
                        formAction: d,
                        formEncType: l.formEncType,
                        formData: void 0,
                        json: v,
                        text: void 0
                    }
                }
            } catch {
                return s()
            }
        }
    }
    He(typeof FormData == "function", "FormData is not available in this environment");
    let p, h;
    if (l.formData) p = qf(l.formData), h = l.formData;
    else if (l.body instanceof FormData) p = qf(l.body), h = l.body;
    else if (l.body instanceof URLSearchParams) p = l.body, h = r1(p);
    else if (l.body == null) p = new URLSearchParams, h = new FormData;
    else try {
        p = new URLSearchParams(l.body), h = r1(p)
    } catch {
        return s()
    }
    let m = {
        formMethod: f,
        formAction: d,
        formEncType: l && l.formEncType || "application/x-www-form-urlencoded",
        formData: h,
        json: void 0,
        text: void 0
    };
    if (qt(m.formMethod)) return {
        path: i,
        submission: m
    };
    let y = Ua(i);
    return n && y.search && pd(y.search) && p.append("index", ""), y.search = `?${p}`, {
        path: za(y),
        submission: m
    }
}

function Wp(n, i, l, s, u, f, d, p, h, m, y, v, b, x, T, D, O, E, V, j) {
    let Q = j ? Wt(j[1]) ? j[1].error : j[1].data : void 0,
        U = u.createURL(f.location),
        M = u.createURL(h),
        G;
    if (y && f.errors) {
        let se = Object.keys(f.errors)[0];
        G = d.findIndex(ae => ae.route.id === se)
    } else if (j && Wt(j[1])) {
        let se = j[0];
        G = d.findIndex(ae => ae.route.id === se) - 1
    }
    let Z = j ? j[1].statusCode : void 0,
        ee = Z && Z >= 400,
        ie = {
            currentUrl: U,
            currentParams: f.matches[0]?.params || {},
            nextUrl: M,
            nextParams: d[0].params,
            ...p,
            actionResult: Q,
            actionStatus: Z
        },
        ne = d.map((se, ae) => {
            let {
                route: be
            } = se, H = null;
            if (G != null && ae > G ? H = !1 : be.lazy ? H = !0 : be.loader == null ? H = !1 : y ? H = Pf(be, f.loaderData, f.errors) : p4(f.loaderData, f.matches[ae], se) && (H = !0), H !== null) return kf(l, s, n, se, m, i, H);
            let $ = ee ? !1 : v || U.pathname + U.search === M.pathname + M.search || U.search !== M.search || y4(f.matches[ae], se),
                oe = {
                    ...ie,
                    defaultShouldRevalidate: $
                },
                ye = Ho(se, oe);
            return kf(l, s, n, se, m, i, ye, oe)
        }),
        K = [];
    return T.forEach((se, ae) => {
        if (y || !d.some(ue => ue.route.id === se.routeId) || x.has(ae)) return;
        let be = f.fetchers.get(ae),
            H = be && be.state !== "idle" && be.data === void 0,
            $ = Na(O, se.path, E);
        if (!$) {
            if (V && H) return;
            K.push({
                key: ae,
                routeId: se.routeId,
                path: se.path,
                matches: null,
                match: null,
                request: null,
                controller: null
            });
            return
        }
        if (D.has(ae)) return;
        let oe = Do($, se.path),
            ye = new AbortController,
            A = ar(u, se.path, ye.signal),
            F = null;
        if (b.has(ae)) b.delete(ae), F = ur(l, s, A, $, oe, m, i);
        else if (H) v && (F = ur(l, s, A, $, oe, m, i));
        else {
            let ue = {
                ...ie,
                defaultShouldRevalidate: ee ? !1 : v
            };
            Ho(oe, ue) && (F = ur(l, s, A, $, oe, m, i, ue))
        }
        F && K.push({
            key: ae,
            routeId: se.routeId,
            path: se.path,
            matches: F,
            match: oe,
            request: A,
            controller: ye
        })
    }), {
        dsMatches: ne,
        revalidatingFetchers: K
    }
}

function Pf(n, i, l) {
    if (n.lazy) return !0;
    if (!n.loader) return !1;
    let s = i != null && n.id in i,
        u = l != null && l[n.id] !== void 0;
    return !s && u ? !1 : typeof n.loader == "function" && n.loader.hydrate === !0 ? !0 : !s && !u
}

function p4(n, i, l) {
    let s = !i || l.route.id !== i.route.id,
        u = !n.hasOwnProperty(l.route.id);
    return s || u
}

function y4(n, i) {
    let l = n.route.path;
    return n.pathname !== i.pathname || l != null && l.endsWith("*") && n.params["*"] !== i.params["*"]
}

function Ho(n, i) {
    if (n.route.shouldRevalidate) {
        let l = n.route.shouldRevalidate(i);
        if (typeof l == "boolean") return l
    }
    return i.defaultShouldRevalidate
}

function e1(n, i, l, s, u, f) {
    let d;
    if (n) {
        let m = s[n];
        He(m, `No route found to patch children into: routeId = ${n}`), m.children || (m.children = []), d = m.children
    } else d = l;
    let p = [],
        h = [];
    if (i.forEach(m => {
        let y = d.find(v => dg(m, v));
        y ? h.push({
            existingRoute: y,
            newRoute: m
        }) : p.push(m)
    }), p.length > 0) {
        let m = Al(p, u, [n || "_", "patch", String(d?.length || "0")], s);
        d.push(...m)
    }
    if (f && h.length > 0)
        for (let m = 0; m < h.length; m++) {
            let {
                existingRoute: y,
                newRoute: v
            } = h[m], b = y, [x] = Al([v], u, [], {}, !0);
            Object.assign(b, {
                element: x.element ? x.element : b.element,
                errorElement: x.errorElement ? x.errorElement : b.errorElement,
                hydrateFallbackElement: x.hydrateFallbackElement ? x.hydrateFallbackElement : b.hydrateFallbackElement
            })
        }
}

function dg(n, i) {
    return "id" in n && "id" in i && n.id === i.id ? !0 : n.index === i.index && n.path === i.path && n.caseSensitive === i.caseSensitive ? (!n.children || n.children.length === 0) && (!i.children || i.children.length === 0) ? !0 : n.children.every((l, s) => i.children?.some(u => dg(l, u))) : !1
}
var t1 = new WeakMap,
    hg = ({
        key: n,
        route: i,
        manifest: l,
        mapRouteProperties: s
    }) => {
        let u = l[i.id];
        if (He(u, "No route found in manifest"), !u.lazy || typeof u.lazy != "object") return;
        let f = u.lazy[n];
        if (!f) return;
        let d = t1.get(u);
        d || (d = {}, t1.set(u, d));
        let p = d[n];
        if (p) return p;
        let h = (async () => {
            let m = V3(n),
                v = u[n] !== void 0 && n !== "hasErrorBoundary";
            if (m) bt(!m, "Route property " + n + " is not a supported lazy route property. This property will be ignored."), d[n] = Promise.resolve();
            else if (v) bt(!1, `Route "${u.id}" has a static property "${n}" defined. The lazy property will be ignored.`);
            else {
                let b = await f();
                b != null && (Object.assign(u, {
                    [n]: b
                }), Object.assign(u, s(u)))
            }
            typeof u.lazy == "object" && (u.lazy[n] = void 0, Object.values(u.lazy).every(b => b === void 0) && (u.lazy = void 0))
        })();
        return d[n] = h, h
    },
    n1 = new WeakMap;

function g4(n, i, l, s, u) {
    let f = l[n.id];
    if (He(f, "No route found in manifest"), !n.lazy) return {
        lazyRoutePromise: void 0,
        lazyHandlerPromise: void 0
    };
    if (typeof n.lazy == "function") {
        let y = n1.get(f);
        if (y) return {
            lazyRoutePromise: y,
            lazyHandlerPromise: y
        };
        let v = (async () => {
            He(typeof n.lazy == "function", "No lazy route function found");
            let b = await n.lazy(),
                x = {};
            for (let T in b) {
                let D = b[T];
                if (D === void 0) continue;
                let O = U3(T),
                    V = f[T] !== void 0 && T !== "hasErrorBoundary";
                O ? bt(!O, "Route property " + T + " is not a supported property to be returned from a lazy route function. This property will be ignored.") : V ? bt(!V, `Route "${f.id}" has a static property "${T}" defined but its lazy function is also returning a value for this property. The lazy route property "${T}" will be ignored.`) : x[T] = D
            }
            Object.assign(f, x), Object.assign(f, {
                ...s(f),
                lazy: void 0
            })
        })();
        return n1.set(f, v), v.catch(() => { }), {
            lazyRoutePromise: v,
            lazyHandlerPromise: v
        }
    }
    let d = Object.keys(n.lazy),
        p = [],
        h;
    for (let y of d) {
        if (u && u.includes(y)) continue;
        let v = hg({
            key: y,
            route: n,
            manifest: l,
            mapRouteProperties: s
        });
        v && (p.push(v), y === i && (h = v))
    }
    let m = p.length > 0 ? Promise.all(p).then(() => { }) : void 0;
    return m?.catch(() => { }), h?.catch(() => { }), {
        lazyRoutePromise: m,
        lazyHandlerPromise: h
    }
}
async function a1(n) {
    let i = n.matches.filter(u => u.shouldLoad),
        l = {};
    return (await Promise.all(i.map(u => u.resolve()))).forEach((u, f) => {
        l[i[f].route.id] = u
    }), l
}
async function v4(n) {
    if (!n.matches.some(l => l.route.unstable_middleware)) return a1(n);
    let i = !1;
    return pg(n, () => (i = !0, a1(n)), (l, s) => mg(l, s, n.matches, i))
}

function mg(n, i, l, s) {
    return s ? {
        [i]: {
            type: "error",
            result: n
        }
    } : {
        [La(l, l.find(f => f.route.id === i || f.route.loader)?.route.id || i).route.id]: {
            type: "error",
            result: n
        }
    }
}
async function pg(n, i, l) {
    let {
        matches: s,
        request: u,
        params: f,
        context: d
    } = n, p = s.flatMap(m => m.route.unstable_middleware ? m.route.unstable_middleware.map(y => [m.route.id, y]) : []), h = {};
    return await yg({
        request: u,
        params: f,
        context: d
    }, p, i, l, h), h
}
async function yg(n, i, l, s, u = {}, f = 0) {
    let {
        request: d
    } = n;
    if (d.signal.aborted) throw d.signal.reason ? d.signal.reason : new Error(`Request aborted without an \`AbortSignal.reason\`: ${d.method} ${d.url}`);
    let p = i[f];
    if (!p) {
        let b = await l();
        Object.assign(u, b);
        return
    }
    let [h, m] = p, y = !1, v = async () => {
        if (y) throw new Error("You may only call `next()` once per middleware");
        y = !0;
        try {
            let b = await yg(n, i, l, s, u, f + 1);
            Object.assign(u, b)
        } catch (b) {
            let x = await s(b, h);
            Object.assign(u, x)
        }
    };
    try {
        let b = await m({
            request: n.request,
            params: n.params,
            context: n.context
        }, v);
        typeof b < "u" && console.warn("client middlewares are not intended to return values, the value will be ignored", b), y || await v()
    } catch (b) {
        let x = await s(b, h);
        Object.assign(u, x)
    }
}

function gg(n, i, l, s, u) {
    let f = hg({
        key: "unstable_middleware",
        route: s.route,
        manifest: i,
        mapRouteProperties: n
    }),
        d = g4(s.route, qt(l.method) ? "action" : "loader", i, n, u);
    return {
        middleware: f,
        route: d.lazyRoutePromise,
        handler: d.lazyHandlerPromise
    }
}

function kf(n, i, l, s, u, f, d, p = null) {
    let h = !1,
        m = gg(n, i, l, s, u);
    return {
        ...s,
        _lazyPromises: m,
        shouldLoad: d,
        unstable_shouldRevalidateArgs: p,
        unstable_shouldCallHandler(y) {
            return h = !0, p ? typeof y == "boolean" ? Ho(s, {
                ...p,
                defaultShouldRevalidate: y
            }) : Ho(s, p) : d
        },
        resolve(y) {
            return h || d || y && !qt(l.method) && (s.route.lazy || s.route.loader) ? x4({
                request: l,
                match: s,
                lazyHandlerPromise: m?.handler,
                lazyRoutePromise: m?.route,
                handlerOverride: y,
                scopedContext: f
            }) : Promise.resolve({
                type: "data",
                result: void 0
            })
        }
    }
}

function ur(n, i, l, s, u, f, d, p = null) {
    return s.map(h => h.route.id !== u.route.id ? {
        ...h,
        shouldLoad: !1,
        unstable_shouldRevalidateArgs: p,
        unstable_shouldCallHandler: () => !1,
        _lazyPromises: gg(n, i, l, h, f),
        resolve: () => Promise.resolve({
            type: "data",
            result: void 0
        })
    } : kf(n, i, l, h, f, d, !0, p))
}
async function b4(n, i, l, s, u, f) {
    l.some(m => m._lazyPromises?.middleware) && await Promise.all(l.map(m => m._lazyPromises?.middleware));
    let d = {
        request: i,
        params: l[0].params,
        context: u,
        matches: l
    },
        h = await n({
            ...d,
            fetcherKey: s,
            unstable_runClientMiddleware: m => {
                let y = d,
                    v = !1;
                return pg(y, () => (v = !0, m({
                    ...y,
                    fetcherKey: s,
                    unstable_runClientMiddleware: () => {
                        throw new Error("Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler")
                    }
                })), (b, x) => mg(b, x, l, v))
            }
        });
    try {
        await Promise.all(l.flatMap(m => [m._lazyPromises?.handler, m._lazyPromises?.route]))
    } catch { }
    return h
}
async function x4({
    request: n,
    match: i,
    lazyHandlerPromise: l,
    lazyRoutePromise: s,
    handlerOverride: u,
    scopedContext: f
}) {
    let d, p, h = qt(n.method),
        m = h ? "action" : "loader",
        y = v => {
            let b, x = new Promise((O, E) => b = E);
            p = () => b(), n.signal.addEventListener("abort", p);
            let T = O => typeof v != "function" ? Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${m}" [routeId: ${i.route.id}]`)) : v({
                request: n,
                params: i.params,
                context: f
            }, ...O !== void 0 ? [O] : []),
                D = (async () => {
                    try {
                        return {
                            type: "data",
                            result: await (u ? u(E => T(E)) : T())
                        }
                    } catch (O) {
                        return {
                            type: "error",
                            result: O
                        }
                    }
                })();
            return Promise.race([D, x])
        };
    try {
        let v = h ? i.route.action : i.route.loader;
        if (l || s)
            if (v) {
                let b, [x] = await Promise.all([y(v).catch(T => {
                    b = T
                }), l, s]);
                if (b !== void 0) throw b;
                d = x
            } else {
                await l;
                let b = h ? i.route.action : i.route.loader;
                if (b) [d] = await Promise.all([y(b), s]);
                else if (m === "action") {
                    let x = new URL(n.url),
                        T = x.pathname + x.search;
                    throw mn(405, {
                        method: n.method,
                        pathname: T,
                        routeId: i.route.id
                    })
                } else return {
                    type: "data",
                    result: void 0
                }
            }
        else if (v) d = await y(v);
        else {
            let b = new URL(n.url),
                x = b.pathname + b.search;
            throw mn(404, {
                pathname: x
            })
        }
    } catch (v) {
        return {
            type: "error",
            result: v
        }
    } finally {
        p && n.signal.removeEventListener("abort", p)
    }
    return d
}
async function S4(n) {
    let {
        result: i,
        type: l
    } = n;
    if (bg(i)) {
        let s;
        try {
            let u = i.headers.get("Content-Type");
            u && /\bapplication\/json\b/.test(u) ? i.body == null ? s = null : s = await i.json() : s = await i.text()
        } catch (u) {
            return {
                type: "error",
                error: u
            }
        }
        return l === "error" ? {
            type: "error",
            error: new Vo(i.status, i.statusText, s),
            statusCode: i.status,
            headers: i.headers
        } : {
            type: "data",
            data: s,
            statusCode: i.status,
            headers: i.headers
        }
    }
    return l === "error" ? c1(i) ? i.data instanceof Error ? {
        type: "error",
        error: i.data,
        statusCode: i.init?.status,
        headers: i.init?.headers ? new Headers(i.init.headers) : void 0
    } : {
        type: "error",
        error: new Vo(i.init?.status || 500, void 0, i.data),
        statusCode: Dl(i) ? i.status : void 0,
        headers: i.init?.headers ? new Headers(i.init.headers) : void 0
    } : {
        type: "error",
        error: i,
        statusCode: Dl(i) ? i.status : void 0
    } : c1(i) ? {
        type: "data",
        data: i.data,
        statusCode: i.init?.status,
        headers: i.init?.headers ? new Headers(i.init.headers) : void 0
    } : {
        type: "data",
        data: i
    }
}

function w4(n, i, l, s, u) {
    let f = n.headers.get("Location");
    if (He(f, "Redirects returned/thrown from loaders/actions must have a Location header"), !md(f)) {
        let d = s.slice(0, s.findIndex(p => p.route.id === l) + 1);
        f = Bf(new URL(i.url), d, u, f), n.headers.set("Location", f)
    }
    return n
}

function i1(n, i, l) {
    if (md(n)) {
        let s = n,
            u = s.startsWith("//") ? new URL(i.protocol + s) : new URL(s),
            f = yn(u.pathname, l) != null;
        if (u.origin === i.origin && f) return u.pathname + u.search + u.hash
    }
    return n
}

function ar(n, i, l, s) {
    let u = n.createURL(vg(i)).toString(),
        f = {
            signal: l
        };
    if (s && qt(s.formMethod)) {
        let {
            formMethod: d,
            formEncType: p
        } = s;
        f.method = d.toUpperCase(), p === "application/json" ? (f.headers = new Headers({
            "Content-Type": p
        }), f.body = JSON.stringify(s.json)) : p === "text/plain" ? f.body = s.text : p === "application/x-www-form-urlencoded" && s.formData ? f.body = qf(s.formData) : f.body = s.formData
    }
    return new Request(u, f)
}

function qf(n) {
    let i = new URLSearchParams;
    for (let [l, s] of n.entries()) i.append(l, typeof s == "string" ? s : s.name);
    return i
}

function r1(n) {
    let i = new FormData;
    for (let [l, s] of n.entries()) i.append(l, s);
    return i
}

function T4(n, i, l, s = !1, u = !1) {
    let f = {},
        d = null,
        p, h = !1,
        m = {},
        y = l && Wt(l[1]) ? l[1].error : void 0;
    return n.forEach(v => {
        if (!(v.route.id in i)) return;
        let b = v.route.id,
            x = i[b];
        if (He(!di(x), "Cannot handle redirect results in processLoaderData"), Wt(x)) {
            let T = x.error;
            if (y !== void 0 && (T = y, y = void 0), d = d || {}, u) d[b] = T;
            else {
                let D = La(n, b);
                d[D.route.id] == null && (d[D.route.id] = T)
            }
            s || (f[b] = fg), h || (h = !0, p = Dl(x.error) ? x.error.status : 500), x.headers && (m[b] = x.headers)
        } else f[b] = x.data, x.statusCode && x.statusCode !== 200 && !h && (p = x.statusCode), x.headers && (m[b] = x.headers)
    }), y !== void 0 && l && (d = {
        [l[0]]: y
    }, l[2] && (f[l[2]] = void 0)), {
        loaderData: f,
        errors: d,
        statusCode: p || 200,
        loaderHeaders: m
    }
}

function l1(n, i, l, s, u, f) {
    let {
        loaderData: d,
        errors: p
    } = T4(i, l, s);
    return u.filter(h => !h.matches || h.matches.some(m => m.shouldLoad)).forEach(h => {
        let {
            key: m,
            match: y,
            controller: v
        } = h;
        if (v && v.signal.aborted) return;
        let b = f[m];
        if (He(b, "Did not find corresponding fetcher result"), Wt(b)) {
            let x = La(n.matches, y?.route.id);
            p && p[x.route.id] || (p = {
                ...p,
                [x.route.id]: b.error
            }), n.fetchers.delete(m)
        } else if (di(b)) He(!1, "Unhandled fetcher revalidation redirect");
        else {
            let x = _a(b.data);
            n.fetchers.set(m, x)
        }
    }), {
        loaderData: d,
        errors: p
    }
}

function s1(n, i, l, s) {
    let u = Object.entries(i).filter(([, f]) => f !== fg).reduce((f, [d, p]) => (f[d] = p, f), {});
    for (let f of l) {
        let d = f.route.id;
        if (!i.hasOwnProperty(d) && n.hasOwnProperty(d) && f.route.loader && (u[d] = n[d]), s && s.hasOwnProperty(d)) break
    }
    return u
}

function o1(n) {
    return n ? Wt(n[1]) ? {
        actionData: {}
    } : {
        actionData: {
            [n[0]]: n[1].data
        }
    } : {}
}

function La(n, i) {
    return (i ? n.slice(0, n.findIndex(s => s.route.id === i) + 1) : [...n]).reverse().find(s => s.route.hasErrorBoundary === !0) || n[0]
}

function u1(n) {
    let i = n.length === 1 ? n[0] : n.find(l => l.index || !l.path || l.path === "/") || {
        id: "__shim-error-route__"
    };
    return {
        matches: [{
            params: {},
            pathname: "",
            pathnameBase: "",
            route: i
        }],
        route: i
    }
}

function mn(n, {
    pathname: i,
    routeId: l,
    method: s,
    type: u,
    message: f
} = {}) {
    let d = "Unknown Server Error",
        p = "Unknown @remix-run/router error";
    return n === 400 ? (d = "Bad Request", s && i && l ? p = `You made a ${s} request to "${i}" but did not provide a \`loader\` for route "${l}", so there is no way to handle the request.` : u === "invalid-body" && (p = "Unable to encode submission body")) : n === 403 ? (d = "Forbidden", p = `Route "${l}" does not match URL "${i}"`) : n === 404 ? (d = "Not Found", p = `No route matches URL "${i}"`) : n === 405 && (d = "Method Not Allowed", s && i && l ? p = `You made a ${s.toUpperCase()} request to "${i}" but did not provide an \`action\` for route "${l}", so there is no way to handle the request.` : s && (p = `Invalid request method "${s.toUpperCase()}"`)), new Vo(n || 500, d, new Error(p), !0)
}

function so(n) {
    let i = Object.entries(n);
    for (let l = i.length - 1; l >= 0; l--) {
        let [s, u] = i[l];
        if (di(u)) return {
            key: s,
            result: u
        }
    }
}

function vg(n) {
    let i = typeof n == "string" ? Ua(n) : n;
    return za({
        ...i,
        hash: ""
    })
}

function E4(n, i) {
    return n.pathname !== i.pathname || n.search !== i.search ? !1 : n.hash === "" ? i.hash !== "" : n.hash === i.hash ? !0 : i.hash !== ""
}

function M4(n) {
    return bg(n.result) && o4.has(n.result.status)
}

function Wt(n) {
    return n.type === "error"
}

function di(n) {
    return (n && n.type) === "redirect"
}

function c1(n) {
    return typeof n == "object" && n != null && "type" in n && "data" in n && "init" in n && n.type === "DataWithResponseInit"
}

function bg(n) {
    return n != null && typeof n.status == "number" && typeof n.statusText == "string" && typeof n.headers == "object" && typeof n.body < "u"
}

function R4(n) {
    return s4.has(n.toUpperCase())
}

function qt(n) {
    return r4.has(n.toUpperCase())
}

function pd(n) {
    return new URLSearchParams(n).getAll("index").some(i => i === "")
}

function Do(n, i) {
    let l = typeof i == "string" ? Ua(i).search : i.search;
    if (n[n.length - 1].route.index && pd(l || "")) return n[n.length - 1];
    let s = og(n);
    return s[s.length - 1]
}

function f1(n) {
    let {
        formMethod: i,
        formAction: l,
        formEncType: s,
        text: u,
        formData: f,
        json: d
    } = n;
    if (!(!i || !l || !s)) {
        if (u != null) return {
            formMethod: i,
            formAction: l,
            formEncType: s,
            formData: void 0,
            json: void 0,
            text: u
        };
        if (f != null) return {
            formMethod: i,
            formAction: l,
            formEncType: s,
            formData: f,
            json: void 0,
            text: void 0
        };
        if (d !== void 0) return {
            formMethod: i,
            formAction: l,
            formEncType: s,
            formData: void 0,
            json: d,
            text: void 0
        }
    }
}

function gf(n, i) {
    return i ? {
        state: "loading",
        location: n,
        formMethod: i.formMethod,
        formAction: i.formAction,
        formEncType: i.formEncType,
        formData: i.formData,
        json: i.json,
        text: i.text
    } : {
        state: "loading",
        location: n,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    }
}

function A4(n, i) {
    return {
        state: "submitting",
        location: n,
        formMethod: i.formMethod,
        formAction: i.formAction,
        formEncType: i.formEncType,
        formData: i.formData,
        json: i.json,
        text: i.text
    }
}

function pl(n, i) {
    return n ? {
        state: "loading",
        formMethod: n.formMethod,
        formAction: n.formAction,
        formEncType: n.formEncType,
        formData: n.formData,
        json: n.json,
        text: n.text,
        data: i
    } : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: i
    }
}

function D4(n, i) {
    return {
        state: "submitting",
        formMethod: n.formMethod,
        formAction: n.formAction,
        formEncType: n.formEncType,
        formData: n.formData,
        json: n.json,
        text: n.text,
        data: i ? i.data : void 0
    }
}

function _a(n) {
    return {
        state: "idle",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: n
    }
}

function O4(n, i) {
    try {
        let l = n.sessionStorage.getItem(cg);
        if (l) {
            let s = JSON.parse(l);
            for (let [u, f] of Object.entries(s || {})) f && Array.isArray(f) && i.set(u, new Set(f || []))
        }
    } catch { }
}

function C4(n, i) {
    if (i.size > 0) {
        let l = {};
        for (let [s, u] of i) l[s] = [...u];
        try {
            n.sessionStorage.setItem(cg, JSON.stringify(l))
        } catch (s) {
            bt(!1, `Failed to save applied view transitions in sessionStorage (${s}).`)
        }
    }
}

function _4() {
    let n, i, l = new Promise((s, u) => {
        n = async f => {
            s(f);
            try {
                await l
            } catch { }
        }, i = async f => {
            u(f);
            try {
                await l
            } catch { }
        }
    });
    return {
        promise: l,
        resolve: n,
        reject: i
    }
}
var vi = C.createContext(null);
vi.displayName = "DataRouter";
var Vl = C.createContext(null);
Vl.displayName = "DataRouterState";
C.createContext(!1);
var yd = C.createContext({
    isTransitioning: !1
});
yd.displayName = "ViewTransition";
var xg = C.createContext(new Map);
xg.displayName = "Fetchers";
var j4 = C.createContext(null);
j4.displayName = "Await";
var Vn = C.createContext(null);
Vn.displayName = "Navigation";
var Xo = C.createContext(null);
Xo.displayName = "Location";
var Hn = C.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
Hn.displayName = "Route";
var gd = C.createContext(null);
gd.displayName = "RouteError";

function N4(n, {
    relative: i
} = {}) {
    He(Hl(), "useHref() may be used only in the context of a <Router> component.");
    let {
        basename: l,
        navigator: s
    } = C.useContext(Vn), {
        hash: u,
        pathname: f,
        search: d
    } = Ul(n, {
        relative: i
    }), p = f;
    return l !== "/" && (p = f === "/" ? l : _n([l, f])), s.createHref({
        pathname: p,
        search: d,
        hash: u
    })
}

function Hl() {
    return C.useContext(Xo) != null
}

function Ba() {
    return He(Hl(), "useLocation() may be used only in the context of a <Router> component."), C.useContext(Xo).location
}
var Sg = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";

function wg(n) {
    C.useContext(Vn).static || C.useLayoutEffect(n)
}

function vd() {
    let {
        isDataRoute: n
    } = C.useContext(Hn);
    return n ? Z4() : L4()
}

function L4() {
    He(Hl(), "useNavigate() may be used only in the context of a <Router> component.");
    let n = C.useContext(vi),
        {
            basename: i,
            navigator: l
        } = C.useContext(Vn),
        {
            matches: s
        } = C.useContext(Hn),
        {
            pathname: u
        } = Ba(),
        f = JSON.stringify(dd(s)),
        d = C.useRef(!1);
    return wg(() => {
        d.current = !0
    }), C.useCallback((h, m = {}) => {
        if (bt(d.current, Sg), !d.current) return;
        if (typeof h == "number") {
            l.go(h);
            return
        }
        let y = hd(h, JSON.parse(f), u, m.relative === "path");
        n == null && i !== "/" && (y.pathname = y.pathname === "/" ? i : _n([i, y.pathname])), (m.replace ? l.replace : l.push)(y, m.state, m)
    }, [i, l, f, u, n])
}
var z4 = C.createContext(null);

function V4(n) {
    let i = C.useContext(Hn).outlet;
    return i && C.createElement(z4.Provider, {
        value: n
    }, i)
}

function Ul(n, {
    relative: i
} = {}) {
    let {
        matches: l
    } = C.useContext(Hn), {
        pathname: s
    } = Ba(), u = JSON.stringify(dd(l));
    return C.useMemo(() => hd(n, JSON.parse(u), s, i === "path"), [n, u, s, i])
}

function H4(n, i, l, s) {
    He(Hl(), "useRoutes() may be used only in the context of a <Router> component.");
    let {
        navigator: u
    } = C.useContext(Vn), {
        matches: f
    } = C.useContext(Hn), d = f[f.length - 1], p = d ? d.params : {}, h = d ? d.pathname : "/", m = d ? d.pathnameBase : "/", y = d && d.route;
    {
        let E = y && y.path || "";
        Tg(h, !y || E.endsWith("*") || E.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${E}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${E}"> to <Route path="${E === "/" ? "*" : `${E}/*`}">.`)
    }
    let v = Ba(),
        b;
    b = v;
    let x = b.pathname || "/",
        T = x;
    if (m !== "/") {
        let E = m.replace(/^\//, "").split("/");
        T = "/" + x.replace(/^\//, "").split("/").slice(E.length).join("/")
    }
    let D = Na(n, {
        pathname: T
    });
    return bt(y || D != null, `No routes matched location "${b.pathname}${b.search}${b.hash}" `), bt(D == null || D[D.length - 1].route.element !== void 0 || D[D.length - 1].route.Component !== void 0 || D[D.length - 1].route.lazy !== void 0, `Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`), q4(D && D.map(E => Object.assign({}, E, {
        params: Object.assign({}, p, E.params),
        pathname: _n([m, u.encodeLocation ? u.encodeLocation(E.pathname).pathname : E.pathname]),
        pathnameBase: E.pathnameBase === "/" ? m : _n([m, u.encodeLocation ? u.encodeLocation(E.pathnameBase).pathname : E.pathnameBase])
    })), f, l, s)
}

function U4() {
    let n = Q4(),
        i = Dl(n) ? `${n.status} ${n.statusText}` : n instanceof Error ? n.message : JSON.stringify(n),
        l = n instanceof Error ? n.stack : null,
        s = "rgba(200,200,200, 0.5)",
        u = {
            padding: "0.5rem",
            backgroundColor: s
        },
        f = {
            padding: "2px 4px",
            backgroundColor: s
        },
        d = null;
    return console.error("Error handled by React Router default ErrorBoundary:", n), d = C.createElement(C.Fragment, null, C.createElement("p", null, "💿 Hey developer 👋"), C.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", C.createElement("code", {
        style: f
    }, "ErrorBoundary"), " or", " ", C.createElement("code", {
        style: f
    }, "errorElement"), " prop on your route.")), C.createElement(C.Fragment, null, C.createElement("h2", null, "Unexpected Application Error!"), C.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, i), l ? C.createElement("pre", {
        style: u
    }, l) : null, d)
}
var B4 = C.createElement(U4, null),
    P4 = class extends C.Component {
        constructor(n) {
            super(n), this.state = {
                location: n.location,
                revalidation: n.revalidation,
                error: n.error
            }
        }
        static getDerivedStateFromError(n) {
            return {
                error: n
            }
        }
        static getDerivedStateFromProps(n, i) {
            return i.location !== n.location || i.revalidation !== "idle" && n.revalidation === "idle" ? {
                error: n.error,
                location: n.location,
                revalidation: n.revalidation
            } : {
                error: n.error !== void 0 ? n.error : i.error,
                location: i.location,
                revalidation: n.revalidation || i.revalidation
            }
        }
        componentDidCatch(n, i) {
            console.error("React Router caught the following error during render", n, i)
        }
        render() {
            return this.state.error !== void 0 ? C.createElement(Hn.Provider, {
                value: this.props.routeContext
            }, C.createElement(gd.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children
        }
    };

function k4({
    routeContext: n,
    match: i,
    children: l
}) {
    let s = C.useContext(vi);
    return s && s.static && s.staticContext && (i.route.errorElement || i.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = i.route.id), C.createElement(Hn.Provider, {
        value: n
    }, l)
}

function q4(n, i = [], l = null, s = null) {
    if (n == null) {
        if (!l) return null;
        if (l.errors) n = l.matches;
        else if (i.length === 0 && !l.initialized && l.matches.length > 0) n = l.matches;
        else return null
    }
    let u = n,
        f = l?.errors;
    if (f != null) {
        let h = u.findIndex(m => m.route.id && f?.[m.route.id] !== void 0);
        He(h >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`), u = u.slice(0, Math.min(u.length, h + 1))
    }
    let d = !1,
        p = -1;
    if (l)
        for (let h = 0; h < u.length; h++) {
            let m = u[h];
            if ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (p = h), m.route.id) {
                let {
                    loaderData: y,
                    errors: v
                } = l, b = m.route.loader && !y.hasOwnProperty(m.route.id) && (!v || v[m.route.id] === void 0);
                if (m.route.lazy || b) {
                    d = !0, p >= 0 ? u = u.slice(0, p + 1) : u = [u[0]];
                    break
                }
            }
        }
    return u.reduceRight((h, m, y) => {
        let v, b = !1,
            x = null,
            T = null;
        l && (v = f && m.route.id ? f[m.route.id] : void 0, x = m.route.errorElement || B4, d && (p < 0 && y === 0 ? (Tg("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), b = !0, T = null) : p === y && (b = !0, T = m.route.hydrateFallbackElement || null)));
        let D = i.concat(u.slice(0, y + 1)),
            O = () => {
                let E;
                return v ? E = x : b ? E = T : m.route.Component ? E = C.createElement(m.route.Component, null) : m.route.element ? E = m.route.element : E = h, C.createElement(k4, {
                    match: m,
                    routeContext: {
                        outlet: h,
                        matches: D,
                        isDataRoute: l != null
                    },
                    children: E
                })
            };
        return l && (m.route.ErrorBoundary || m.route.errorElement || y === 0) ? C.createElement(P4, {
            location: l.location,
            revalidation: l.revalidation,
            component: x,
            error: v,
            children: O(),
            routeContext: {
                outlet: null,
                matches: D,
                isDataRoute: !0
            }
        }) : O()
    }, null)
}

function bd(n) {
    return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function Y4(n) {
    let i = C.useContext(vi);
    return He(i, bd(n)), i
}

function G4(n) {
    let i = C.useContext(Vl);
    return He(i, bd(n)), i
}

function X4(n) {
    let i = C.useContext(Hn);
    return He(i, bd(n)), i
}

function xd(n) {
    let i = X4(n),
        l = i.matches[i.matches.length - 1];
    return He(l.route.id, `${n} can only be used on routes that contain a unique "id"`), l.route.id
}

function K4() {
    return xd("useRouteId")
}

function Q4() {
    let n = C.useContext(gd),
        i = G4("useRouteError"),
        l = xd("useRouteError");
    return n !== void 0 ? n : i.errors?.[l]
}

function Z4() {
    let {
        router: n
    } = Y4("useNavigate"), i = xd("useNavigate"), l = C.useRef(!1);
    return wg(() => {
        l.current = !0
    }), C.useCallback(async (u, f = {}) => {
        bt(l.current, Sg), l.current && (typeof u == "number" ? n.navigate(u) : await n.navigate(u, {
            fromRouteId: i,
            ...f
        }))
    }, [n, i])
}
var d1 = {};

function Tg(n, i, l) {
    !i && !d1[n] && (d1[n] = !0, bt(!1, l))
}
var h1 = {};

function m1(n, i) {
    !n && !h1[i] && (h1[i] = !0, console.warn(i))
}

function F4(n) {
    let i = {
        hasErrorBoundary: n.hasErrorBoundary || n.ErrorBoundary != null || n.errorElement != null
    };
    return n.Component && (n.element && bt(!1, "You should not include both `Component` and `element` on your route - `Component` will be used."), Object.assign(i, {
        element: C.createElement(n.Component),
        Component: void 0
    })), n.HydrateFallback && (n.hydrateFallbackElement && bt(!1, "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."), Object.assign(i, {
        hydrateFallbackElement: C.createElement(n.HydrateFallback),
        HydrateFallback: void 0
    })), n.ErrorBoundary && (n.errorElement && bt(!1, "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."), Object.assign(i, {
        errorElement: C.createElement(n.ErrorBoundary),
        ErrorBoundary: void 0
    })), i
}
var I4 = ["HydrateFallback", "hydrateFallbackElement"],
    $4 = class {
        constructor() {
            this.status = "pending", this.promise = new Promise((n, i) => {
                this.resolve = l => {
                    this.status === "pending" && (this.status = "resolved", n(l))
                }, this.reject = l => {
                    this.status === "pending" && (this.status = "rejected", i(l))
                }
            })
        }
    };

function J4({
    router: n,
    flushSync: i
}) {
    let [l, s] = C.useState(n.state), [u, f] = C.useState(), [d, p] = C.useState({
        isTransitioning: !1
    }), [h, m] = C.useState(), [y, v] = C.useState(), [b, x] = C.useState(), T = C.useRef(new Map), D = C.useCallback((j, {
        deletedFetchers: Q,
        flushSync: U,
        viewTransitionOpts: M
    }) => {
        j.fetchers.forEach((Z, ee) => {
            Z.data !== void 0 && T.current.set(ee, Z.data)
        }), Q.forEach(Z => T.current.delete(Z)), m1(U === !1 || i != null, 'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');
        let G = n.window != null && n.window.document != null && typeof n.window.document.startViewTransition == "function";
        if (m1(M == null || G, "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."), !M || !G) {
            i && U ? i(() => s(j)) : C.startTransition(() => s(j));
            return
        }
        if (i && U) {
            i(() => {
                y && (h && h.resolve(), y.skipTransition()), p({
                    isTransitioning: !0,
                    flushSync: !0,
                    currentLocation: M.currentLocation,
                    nextLocation: M.nextLocation
                })
            });
            let Z = n.window.document.startViewTransition(() => {
                i(() => s(j))
            });
            Z.finished.finally(() => {
                i(() => {
                    m(void 0), v(void 0), f(void 0), p({
                        isTransitioning: !1
                    })
                })
            }), i(() => v(Z));
            return
        }
        y ? (h && h.resolve(), y.skipTransition(), x({
            state: j,
            currentLocation: M.currentLocation,
            nextLocation: M.nextLocation
        })) : (f(j), p({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: M.currentLocation,
            nextLocation: M.nextLocation
        }))
    }, [n.window, i, y, h]);
    C.useLayoutEffect(() => n.subscribe(D), [n, D]), C.useEffect(() => {
        d.isTransitioning && !d.flushSync && m(new $4)
    }, [d]), C.useEffect(() => {
        if (h && u && n.window) {
            let j = u,
                Q = h.promise,
                U = n.window.document.startViewTransition(async () => {
                    C.startTransition(() => s(j)), await Q
                });
            U.finished.finally(() => {
                m(void 0), v(void 0), f(void 0), p({
                    isTransitioning: !1
                })
            }), v(U)
        }
    }, [u, h, n.window]), C.useEffect(() => {
        h && u && l.location.key === u.location.key && h.resolve()
    }, [h, y, l.location, u]), C.useEffect(() => {
        !d.isTransitioning && b && (f(b.state), p({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: b.currentLocation,
            nextLocation: b.nextLocation
        }), x(void 0))
    }, [d.isTransitioning, b]);
    let O = C.useMemo(() => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: j => n.navigate(j),
        push: (j, Q, U) => n.navigate(j, {
            state: Q,
            preventScrollReset: U?.preventScrollReset
        }),
        replace: (j, Q, U) => n.navigate(j, {
            replace: !0,
            state: Q,
            preventScrollReset: U?.preventScrollReset
        })
    }), [n]),
        E = n.basename || "/",
        V = C.useMemo(() => ({
            router: n,
            navigator: O,
            static: !1,
            basename: E
        }), [n, O, E]);
    return C.createElement(C.Fragment, null, C.createElement(vi.Provider, {
        value: V
    }, C.createElement(Vl.Provider, {
        value: l
    }, C.createElement(xg.Provider, {
        value: T.current
    }, C.createElement(yd.Provider, {
        value: d
    }, C.createElement(n5, {
        basename: E,
        location: l.location,
        navigationType: l.historyAction,
        navigator: O
    }, C.createElement(W4, {
        routes: n.routes,
        future: n.future,
        state: l
    })))))), null)
}
var W4 = C.memo(e5);

function e5({
    routes: n,
    future: i,
    state: l
}) {
    return H4(n, void 0, l, i)
}

function t5(n) {
    return V4(n.context)
}

function n5({
    basename: n = "/",
    children: i = null,
    location: l,
    navigationType: s = "POP",
    navigator: u,
    static: f = !1
}) {
    He(!Hl(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let d = n.replace(/^\/*/, "/"),
        p = C.useMemo(() => ({
            basename: d,
            navigator: u,
            static: f,
            future: {}
        }), [d, u, f]);
    typeof l == "string" && (l = Ua(l));
    let {
        pathname: h = "/",
        search: m = "",
        hash: y = "",
        state: v = null,
        key: b = "default"
    } = l, x = C.useMemo(() => {
        let T = yn(h, d);
        return T == null ? null : {
            location: {
                pathname: T,
                search: m,
                hash: y,
                state: v,
                key: b
            },
            navigationType: s
        }
    }, [d, h, m, y, v, b, s]);
    return bt(x != null, `<Router basename="${d}"> is not able to match the URL "${h}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`), x == null ? null : C.createElement(Vn.Provider, {
        value: p
    }, C.createElement(Xo.Provider, {
        children: i,
        value: x
    }))
}
var Oo = "get",
    Co = "application/x-www-form-urlencoded";

function Ko(n) {
    return n != null && typeof n.tagName == "string"
}

function a5(n) {
    return Ko(n) && n.tagName.toLowerCase() === "button"
}

function i5(n) {
    return Ko(n) && n.tagName.toLowerCase() === "form"
}

function r5(n) {
    return Ko(n) && n.tagName.toLowerCase() === "input"
}

function l5(n) {
    return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey)
}

function s5(n, i) {
    return n.button === 0 && (!i || i === "_self") && !l5(n)
}
var oo = null;

function o5() {
    if (oo === null) try {
        new FormData(document.createElement("form"), 0), oo = !1
    } catch {
        oo = !0
    }
    return oo
}
var u5 = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

function vf(n) {
    return n != null && !u5.has(n) ? (bt(!1, `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Co}"`), null) : n
}

function c5(n, i) {
    let l, s, u, f, d;
    if (i5(n)) {
        let p = n.getAttribute("action");
        s = p ? yn(p, i) : null, l = n.getAttribute("method") || Oo, u = vf(n.getAttribute("enctype")) || Co, f = new FormData(n)
    } else if (a5(n) || r5(n) && (n.type === "submit" || n.type === "image")) {
        let p = n.form;
        if (p == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let h = n.getAttribute("formaction") || p.getAttribute("action");
        if (s = h ? yn(h, i) : null, l = n.getAttribute("formmethod") || p.getAttribute("method") || Oo, u = vf(n.getAttribute("formenctype")) || vf(p.getAttribute("enctype")) || Co, f = new FormData(p, n), !o5()) {
            let {
                name: m,
                type: y,
                value: v
            } = n;
            if (y === "image") {
                let b = m ? `${m}.` : "";
                f.append(`${b}x`, "0"), f.append(`${b}y`, "0")
            } else m && f.append(m, v)
        }
    } else {
        if (Ko(n)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        l = Oo, s = null, u = Co, d = n
    }
    return f && u === "text/plain" && (d = f, f = void 0), {
        action: s,
        method: l.toLowerCase(),
        encType: u,
        formData: f,
        body: d
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");

function Sd(n, i) {
    if (n === !1 || n === null || typeof n > "u") throw new Error(i)
}

function f5(n, i, l) {
    let s = typeof n == "string" ? new URL(n, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : n;
    return s.pathname === "/" ? s.pathname = `_root.${l}` : i && yn(s.pathname, i) === "/" ? s.pathname = `${i.replace(/\/$/, "")}/_root.${l}` : s.pathname = `${s.pathname.replace(/\/$/, "")}.${l}`, s
}
async function d5(n, i) {
    if (n.id in i) return i[n.id];
    try {
        let l = await import(n.module);
        return i[n.id] = l, l
    } catch (l) {
        return console.error(`Error loading route module \`${n.module}\`, reloading page...`), console.error(l), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => { })
    }
}

function h5(n) {
    return n == null ? !1 : n.href == null ? n.rel === "preload" && typeof n.imageSrcSet == "string" && typeof n.imageSizes == "string" : typeof n.rel == "string" && typeof n.href == "string"
}
async function m5(n, i, l) {
    let s = await Promise.all(n.map(async u => {
        let f = i.routes[u.route.id];
        if (f) {
            let d = await d5(f, l);
            return d.links ? d.links() : []
        }
        return []
    }));
    return v5(s.flat(1).filter(h5).filter(u => u.rel === "stylesheet" || u.rel === "preload").map(u => u.rel === "stylesheet" ? {
        ...u,
        rel: "prefetch",
        as: "style"
    } : {
        ...u,
        rel: "prefetch"
    }))
}

function p1(n, i, l, s, u, f) {
    let d = (h, m) => l[m] ? h.route.id !== l[m].route.id : !0,
        p = (h, m) => l[m].pathname !== h.pathname || l[m].route.path?.endsWith("*") && l[m].params["*"] !== h.params["*"];
    return f === "assets" ? i.filter((h, m) => d(h, m) || p(h, m)) : f === "data" ? i.filter((h, m) => {
        let y = s.routes[h.route.id];
        if (!y || !y.hasLoader) return !1;
        if (d(h, m) || p(h, m)) return !0;
        if (h.route.shouldRevalidate) {
            let v = h.route.shouldRevalidate({
                currentUrl: new URL(u.pathname + u.search + u.hash, window.origin),
                currentParams: l[0]?.params || {},
                nextUrl: new URL(n, window.origin),
                nextParams: h.params,
                defaultShouldRevalidate: !0
            });
            if (typeof v == "boolean") return v
        }
        return !0
    }) : []
}

function p5(n, i, {
    includeHydrateFallback: l
} = {}) {
    return y5(n.map(s => {
        let u = i.routes[s.route.id];
        if (!u) return [];
        let f = [u.module];
        return u.clientActionModule && (f = f.concat(u.clientActionModule)), u.clientLoaderModule && (f = f.concat(u.clientLoaderModule)), l && u.hydrateFallbackModule && (f = f.concat(u.hydrateFallbackModule)), u.imports && (f = f.concat(u.imports)), f
    }).flat(1))
}

function y5(n) {
    return [...new Set(n)]
}

function g5(n) {
    let i = {},
        l = Object.keys(n).sort();
    for (let s of l) i[s] = n[s];
    return i
}

function v5(n, i) {
    let l = new Set;
    return new Set(i), n.reduce((s, u) => {
        let f = JSON.stringify(g5(u));
        return l.has(f) || (l.add(f), s.push({
            key: f,
            link: u
        })), s
    }, [])
}

function Eg() {
    let n = C.useContext(vi);
    return Sd(n, "You must render this element inside a <DataRouterContext.Provider> element"), n
}

function b5() {
    let n = C.useContext(Vl);
    return Sd(n, "You must render this element inside a <DataRouterStateContext.Provider> element"), n
}
var wd = C.createContext(void 0);
wd.displayName = "FrameworkContext";

function Mg() {
    let n = C.useContext(wd);
    return Sd(n, "You must render this element inside a <HydratedRouter> element"), n
}

function x5(n, i) {
    let l = C.useContext(wd),
        [s, u] = C.useState(!1),
        [f, d] = C.useState(!1),
        {
            onFocus: p,
            onBlur: h,
            onMouseEnter: m,
            onMouseLeave: y,
            onTouchStart: v
        } = i,
        b = C.useRef(null);
    C.useEffect(() => {
        if (n === "render" && d(!0), n === "viewport") {
            let D = E => {
                E.forEach(V => {
                    d(V.isIntersecting)
                })
            },
                O = new IntersectionObserver(D, {
                    threshold: .5
                });
            return b.current && O.observe(b.current), () => {
                O.disconnect()
            }
        }
    }, [n]), C.useEffect(() => {
        if (s) {
            let D = setTimeout(() => {
                d(!0)
            }, 100);
            return () => {
                clearTimeout(D)
            }
        }
    }, [s]);
    let x = () => {
        u(!0)
    },
        T = () => {
            u(!1), d(!1)
        };
    return l ? n !== "intent" ? [f, b, {}] : [f, b, {
        onFocus: yl(p, x),
        onBlur: yl(h, T),
        onMouseEnter: yl(m, x),
        onMouseLeave: yl(y, T),
        onTouchStart: yl(v, x)
    }] : [!1, b, {}]
}

function yl(n, i) {
    return l => {
        n && n(l), l.defaultPrevented || i(l)
    }
}

function S5({
    page: n,
    ...i
}) {
    let {
        router: l
    } = Eg(), s = C.useMemo(() => Na(l.routes, n, l.basename), [l.routes, n, l.basename]);
    return s ? C.createElement(T5, {
        page: n,
        matches: s,
        ...i
    }) : null
}

function w5(n) {
    let {
        manifest: i,
        routeModules: l
    } = Mg(), [s, u] = C.useState([]);
    return C.useEffect(() => {
        let f = !1;
        return m5(n, i, l).then(d => {
            f || u(d)
        }), () => {
            f = !0
        }
    }, [n, i, l]), s
}

function T5({
    page: n,
    matches: i,
    ...l
}) {
    let s = Ba(),
        {
            manifest: u,
            routeModules: f
        } = Mg(),
        {
            basename: d
        } = Eg(),
        {
            loaderData: p,
            matches: h
        } = b5(),
        m = C.useMemo(() => p1(n, i, h, u, s, "data"), [n, i, h, u, s]),
        y = C.useMemo(() => p1(n, i, h, u, s, "assets"), [n, i, h, u, s]),
        v = C.useMemo(() => {
            if (n === s.pathname + s.search + s.hash) return [];
            let T = new Set,
                D = !1;
            if (i.forEach(E => {
                let V = u.routes[E.route.id];
                !V || !V.hasLoader || (!m.some(j => j.route.id === E.route.id) && E.route.id in p && f[E.route.id]?.shouldRevalidate || V.hasClientLoader ? D = !0 : T.add(E.route.id))
            }), T.size === 0) return [];
            let O = f5(n, d, "data");
            return D && T.size > 0 && O.searchParams.set("_routes", i.filter(E => T.has(E.route.id)).map(E => E.route.id).join(",")), [O.pathname + O.search]
        }, [d, p, s, u, m, i, n, f]),
        b = C.useMemo(() => p5(y, u), [y, u]),
        x = w5(y);
    return C.createElement(C.Fragment, null, v.map(T => C.createElement("link", {
        key: T,
        rel: "prefetch",
        as: "fetch",
        href: T,
        ...l
    })), b.map(T => C.createElement("link", {
        key: T,
        rel: "modulepreload",
        href: T,
        ...l
    })), x.map(({
        key: T,
        link: D
    }) => C.createElement("link", {
        key: T,
        nonce: l.nonce,
        ...D
    })))
}

function E5(...n) {
    return i => {
        n.forEach(l => {
            typeof l == "function" ? l(i) : l != null && (l.current = i)
        })
    }
}
var Rg = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    Rg && (window.__reactRouterVersion = "7.8.0")
} catch { }

function M5(n, i) {
    return h4({
        basename: i?.basename,
        unstable_getContext: i?.unstable_getContext,
        future: i?.future,
        history: j3({
            window: i?.window
        }),
        hydrationData: R5(),
        routes: n,
        mapRouteProperties: F4,
        hydrationRouteProperties: I4,
        dataStrategy: i?.dataStrategy,
        patchRoutesOnNavigation: i?.patchRoutesOnNavigation,
        window: i?.window
    }).initialize()
}

function R5() {
    let n = window?.__staticRouterHydrationData;
    return n && n.errors && (n = {
        ...n,
        errors: A5(n.errors)
    }), n
}

function A5(n) {
    if (!n) return null;
    let i = Object.entries(n),
        l = {};
    for (let [s, u] of i)
        if (u && u.__type === "RouteErrorResponse") l[s] = new Vo(u.status, u.statusText, u.data, u.internal === !0);
        else if (u && u.__type === "Error") {
            if (u.__subType) {
                let f = window[u.__subType];
                if (typeof f == "function") try {
                    let d = new f(u.message);
                    d.stack = "", l[s] = d
                } catch { }
            }
            if (l[s] == null) {
                let f = new Error(u.message);
                f.stack = "", l[s] = f
            }
        } else l[s] = u;
    return l
}
var Ag = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Dg = C.forwardRef(function ({
        onClick: i,
        discover: l = "render",
        prefetch: s = "none",
        relative: u,
        reloadDocument: f,
        replace: d,
        state: p,
        target: h,
        to: m,
        preventScrollReset: y,
        viewTransition: v,
        ...b
    }, x) {
        let {
            basename: T
        } = C.useContext(Vn), D = typeof m == "string" && Ag.test(m), O, E = !1;
        if (typeof m == "string" && D && (O = m, Rg)) try {
            let ee = new URL(window.location.href),
                ie = m.startsWith("//") ? new URL(ee.protocol + m) : new URL(m),
                ne = yn(ie.pathname, T);
            ie.origin === ee.origin && ne != null ? m = ne + ie.search + ie.hash : E = !0
        } catch {
            bt(!1, `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
        let V = N4(m, {
            relative: u
        }),
            [j, Q, U] = x5(s, b),
            M = _5(m, {
                replace: d,
                state: p,
                target: h,
                preventScrollReset: y,
                relative: u,
                viewTransition: v
            });

        function G(ee) {
            i && i(ee), ee.defaultPrevented || M(ee)
        }
        let Z = C.createElement("a", {
            ...b,
            ...U,
            href: O || V,
            onClick: E || f ? i : G,
            ref: E5(x, Q),
            target: h,
            "data-discover": !D && l === "render" ? "true" : void 0
        });
        return j && !D ? C.createElement(C.Fragment, null, Z, C.createElement(S5, {
            page: V
        })) : Z
    });
Dg.displayName = "Link";
var D5 = C.forwardRef(function ({
    "aria-current": i = "page",
    caseSensitive: l = !1,
    className: s = "",
    end: u = !1,
    style: f,
    to: d,
    viewTransition: p,
    children: h,
    ...m
}, y) {
    let v = Ul(d, {
        relative: m.relative
    }),
        b = Ba(),
        x = C.useContext(Vl),
        {
            navigator: T,
            basename: D
        } = C.useContext(Vn),
        O = x != null && V5(v) && p === !0,
        E = T.encodeLocation ? T.encodeLocation(v).pathname : v.pathname,
        V = b.pathname,
        j = x && x.navigation && x.navigation.location ? x.navigation.location.pathname : null;
    l || (V = V.toLowerCase(), j = j ? j.toLowerCase() : null, E = E.toLowerCase()), j && D && (j = yn(j, D) || j);
    const Q = E !== "/" && E.endsWith("/") ? E.length - 1 : E.length;
    let U = V === E || !u && V.startsWith(E) && V.charAt(Q) === "/",
        M = j != null && (j === E || !u && j.startsWith(E) && j.charAt(E.length) === "/"),
        G = {
            isActive: U,
            isPending: M,
            isTransitioning: O
        },
        Z = U ? i : void 0,
        ee;
    typeof s == "function" ? ee = s(G) : ee = [s, U ? "active" : null, M ? "pending" : null, O ? "transitioning" : null].filter(Boolean).join(" ");
    let ie = typeof f == "function" ? f(G) : f;
    return C.createElement(Dg, {
        ...m,
        "aria-current": Z,
        className: ee,
        ref: y,
        style: ie,
        to: d,
        viewTransition: p
    }, typeof h == "function" ? h(G) : h)
});
D5.displayName = "NavLink";
var O5 = C.forwardRef(({
    discover: n = "render",
    fetcherKey: i,
    navigate: l,
    reloadDocument: s,
    replace: u,
    state: f,
    method: d = Oo,
    action: p,
    onSubmit: h,
    relative: m,
    preventScrollReset: y,
    viewTransition: v,
    ...b
}, x) => {
    let T = L5(),
        D = z5(p, {
            relative: m
        }),
        O = d.toLowerCase() === "get" ? "get" : "post",
        E = typeof p == "string" && Ag.test(p),
        V = j => {
            if (h && h(j), j.defaultPrevented) return;
            j.preventDefault();
            let Q = j.nativeEvent.submitter,
                U = Q?.getAttribute("formmethod") || d;
            T(Q || j.currentTarget, {
                fetcherKey: i,
                method: U,
                navigate: l,
                replace: u,
                state: f,
                relative: m,
                preventScrollReset: y,
                viewTransition: v
            })
        };
    return C.createElement("form", {
        ref: x,
        method: O,
        action: D,
        onSubmit: s ? h : V,
        ...b,
        "data-discover": !E && n === "render" ? "true" : void 0
    })
});
O5.displayName = "Form";

function C5(n) {
    return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function Og(n) {
    let i = C.useContext(vi);
    return He(i, C5(n)), i
}

function _5(n, {
    target: i,
    replace: l,
    state: s,
    preventScrollReset: u,
    relative: f,
    viewTransition: d
} = {}) {
    let p = vd(),
        h = Ba(),
        m = Ul(n, {
            relative: f
        });
    return C.useCallback(y => {
        if (s5(y, i)) {
            y.preventDefault();
            let v = l !== void 0 ? l : za(h) === za(m);
            p(n, {
                replace: v,
                state: s,
                preventScrollReset: u,
                relative: f,
                viewTransition: d
            })
        }
    }, [h, p, m, l, s, i, n, u, f, d])
}
var j5 = 0,
    N5 = () => `__${String(++j5)}__`;

function L5() {
    let {
        router: n
    } = Og("useSubmit"), {
        basename: i
    } = C.useContext(Vn), l = K4();
    return C.useCallback(async (s, u = {}) => {
        let {
            action: f,
            method: d,
            encType: p,
            formData: h,
            body: m
        } = c5(s, i);
        if (u.navigate === !1) {
            let y = u.fetcherKey || N5();
            await n.fetch(y, l, u.action || f, {
                preventScrollReset: u.preventScrollReset,
                formData: h,
                body: m,
                formMethod: u.method || d,
                formEncType: u.encType || p,
                flushSync: u.flushSync
            })
        } else await n.navigate(u.action || f, {
            preventScrollReset: u.preventScrollReset,
            formData: h,
            body: m,
            formMethod: u.method || d,
            formEncType: u.encType || p,
            replace: u.replace,
            state: u.state,
            fromRouteId: l,
            flushSync: u.flushSync,
            viewTransition: u.viewTransition
        })
    }, [n, i, l])
}

function z5(n, {
    relative: i
} = {}) {
    let {
        basename: l
    } = C.useContext(Vn), s = C.useContext(Hn);
    He(s, "useFormAction must be used inside a RouteContext");
    let [u] = s.matches.slice(-1), f = {
        ...Ul(n || ".", {
            relative: i
        })
    }, d = Ba();
    if (n == null) {
        f.search = d.search;
        let p = new URLSearchParams(f.search),
            h = p.getAll("index");
        if (h.some(y => y === "")) {
            p.delete("index"), h.filter(v => v).forEach(v => p.append("index", v));
            let y = p.toString();
            f.search = y ? `?${y}` : ""
        }
    }
    return (!n || n === ".") && u.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), l !== "/" && (f.pathname = f.pathname === "/" ? l : _n([l, f.pathname])), za(f)
}

function V5(n, {
    relative: i
} = {}) {
    let l = C.useContext(yd);
    He(l != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {
        basename: s
    } = Og("useViewTransitionState"), u = Ul(n, {
        relative: i
    });
    if (!l.isTransitioning) return !1;
    let f = yn(l.currentLocation.pathname, s) || l.currentLocation.pathname,
        d = yn(l.nextLocation.pathname, s) || l.nextLocation.pathname;
    return zo(u.pathname, d) != null || zo(u.pathname, f) != null
}
const Td = C.createContext({});

function Ed(n) {
    const i = C.useRef(null);
    return i.current === null && (i.current = n()), i.current
}
const Md = typeof window < "u",
    Cg = Md ? C.useLayoutEffect : C.useEffect,
    Qo = C.createContext(null);

function Rd(n, i) {
    n.indexOf(i) === -1 && n.push(i)
}

function Ad(n, i) {
    const l = n.indexOf(i);
    l > -1 && n.splice(l, 1)
}
const aa = (n, i, l) => l > i ? i : l < n ? n : l;
let Dd = () => { };
const ia = {},
    _g = n => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);

function jg(n) {
    return typeof n == "object" && n !== null
}
const Ng = n => /^0[^.\s]+$/u.test(n);

function Od(n) {
    let i;
    return () => (i === void 0 && (i = n()), i)
}
const pn = n => n,
    H5 = (n, i) => l => i(n(l)),
    Bl = (...n) => n.reduce(H5),
    Ol = (n, i, l) => {
        const s = i - n;
        return s === 0 ? 1 : (l - n) / s
    };
class Cd {
    constructor() {
        this.subscriptions = []
    }
    add(i) {
        return Rd(this.subscriptions, i), () => Ad(this.subscriptions, i)
    }
    notify(i, l, s) {
        const u = this.subscriptions.length;
        if (u)
            if (u === 1) this.subscriptions[0](i, l, s);
            else
                for (let f = 0; f < u; f++) {
                    const d = this.subscriptions[f];
                    d && d(i, l, s)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const jn = n => n * 1e3,
    Nn = n => n / 1e3;

function Lg(n, i) {
    return i ? n * (1e3 / i) : 0
}
const zg = (n, i, l) => (((1 - 3 * l + 3 * i) * n + (3 * l - 6 * i)) * n + 3 * i) * n,
    U5 = 1e-7,
    B5 = 12;

function P5(n, i, l, s, u) {
    let f, d, p = 0;
    do d = i + (l - i) / 2, f = zg(d, s, u) - n, f > 0 ? l = d : i = d; while (Math.abs(f) > U5 && ++p < B5);
    return d
}

function Pl(n, i, l, s) {
    if (n === i && l === s) return pn;
    const u = f => P5(f, 0, 1, n, l);
    return f => f === 0 || f === 1 ? f : zg(u(f), i, s)
}
const Vg = n => i => i <= .5 ? n(2 * i) / 2 : (2 - n(2 * (1 - i))) / 2,
    Hg = n => i => 1 - n(1 - i),
    Ug = Pl(.33, 1.53, .69, .99),
    _d = Hg(Ug),
    Bg = Vg(_d),
    Pg = n => (n *= 2) < 1 ? .5 * _d(n) : .5 * (2 - Math.pow(2, -10 * (n - 1))),
    jd = n => 1 - Math.sin(Math.acos(n)),
    kg = Hg(jd),
    qg = Vg(jd),
    k5 = Pl(.42, 0, 1, 1),
    q5 = Pl(0, 0, .58, 1),
    Yg = Pl(.42, 0, .58, 1),
    Y5 = n => Array.isArray(n) && typeof n[0] != "number",
    Gg = n => Array.isArray(n) && typeof n[0] == "number",
    G5 = {
        linear: pn,
        easeIn: k5,
        easeInOut: Yg,
        easeOut: q5,
        circIn: jd,
        circInOut: qg,
        circOut: kg,
        backIn: _d,
        backInOut: Bg,
        backOut: Ug,
        anticipate: Pg
    },
    X5 = n => typeof n == "string",
    y1 = n => {
        if (Gg(n)) {
            Dd(n.length === 4);
            const [i, l, s, u] = n;
            return Pl(i, l, s, u)
        } else if (X5(n)) return G5[n];
        return n
    },
    uo = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];

function K5(n, i) {
    let l = new Set,
        s = new Set,
        u = !1,
        f = !1;
    const d = new WeakSet;
    let p = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };

    function h(y) {
        d.has(y) && (m.schedule(y), n()), y(p)
    }
    const m = {
        schedule: (y, v = !1, b = !1) => {
            const T = b && u ? l : s;
            return v && d.add(y), T.has(y) || T.add(y), y
        },
        cancel: y => {
            s.delete(y), d.delete(y)
        },
        process: y => {
            if (p = y, u) {
                f = !0;
                return
            }
            u = !0, [l, s] = [s, l], l.forEach(h), l.clear(), u = !1, f && (f = !1, m.process(y))
        }
    };
    return m
}
const Q5 = 40;

function Xg(n, i) {
    let l = !1,
        s = !0;
    const u = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    },
        f = () => l = !0,
        d = uo.reduce((j, Q) => (j[Q] = K5(f), j), {}),
        {
            setup: p,
            read: h,
            resolveKeyframes: m,
            preUpdate: y,
            update: v,
            preRender: b,
            render: x,
            postRender: T
        } = d,
        D = () => {
            const j = ia.useManualTiming ? u.timestamp : performance.now();
            l = !1, ia.useManualTiming || (u.delta = s ? 1e3 / 60 : Math.max(Math.min(j - u.timestamp, Q5), 1)), u.timestamp = j, u.isProcessing = !0, p.process(u), h.process(u), m.process(u), y.process(u), v.process(u), b.process(u), x.process(u), T.process(u), u.isProcessing = !1, l && i && (s = !1, n(D))
        },
        O = () => {
            l = !0, s = !0, u.isProcessing || n(D)
        };
    return {
        schedule: uo.reduce((j, Q) => {
            const U = d[Q];
            return j[Q] = (M, G = !1, Z = !1) => (l || O(), U.schedule(M, G, Z)), j
        }, {}),
        cancel: j => {
            for (let Q = 0; Q < uo.length; Q++) d[uo[Q]].cancel(j)
        },
        state: u,
        steps: d
    }
}
const {
    schedule: tt,
    cancel: Va,
    state: Ct,
    steps: bf
} = Xg(typeof requestAnimationFrame < "u" ? requestAnimationFrame : pn, !0);
let _o;

function Z5() {
    _o = void 0
}
const Yt = {
    now: () => (_o === void 0 && Yt.set(Ct.isProcessing || ia.useManualTiming ? Ct.timestamp : performance.now()), _o),
    set: n => {
        _o = n, queueMicrotask(Z5)
    }
},
    Kg = n => i => typeof i == "string" && i.startsWith(n),
    Nd = Kg("--"),
    F5 = Kg("var(--"),
    Ld = n => F5(n) ? I5.test(n.split("/*")[0].trim()) : !1,
    I5 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    hr = {
        test: n => typeof n == "number",
        parse: parseFloat,
        transform: n => n
    },
    Cl = {
        ...hr,
        transform: n => aa(0, 1, n)
    },
    co = {
        ...hr,
        default: 1
    },
    Sl = n => Math.round(n * 1e5) / 1e5,
    zd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function $5(n) {
    return n == null
}
const J5 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    Vd = (n, i) => l => !!(typeof l == "string" && J5.test(l) && l.startsWith(n) || i && !$5(l) && Object.prototype.hasOwnProperty.call(l, i)),
    Qg = (n, i, l) => s => {
        if (typeof s != "string") return s;
        const [u, f, d, p] = s.match(zd);
        return {
            [n]: parseFloat(u),
            [i]: parseFloat(f),
            [l]: parseFloat(d),
            alpha: p !== void 0 ? parseFloat(p) : 1
        }
    },
    W5 = n => aa(0, 255, n),
    xf = {
        ...hr,
        transform: n => Math.round(W5(n))
    },
    hi = {
        test: Vd("rgb", "red"),
        parse: Qg("red", "green", "blue"),
        transform: ({
            red: n,
            green: i,
            blue: l,
            alpha: s = 1
        }) => "rgba(" + xf.transform(n) + ", " + xf.transform(i) + ", " + xf.transform(l) + ", " + Sl(Cl.transform(s)) + ")"
    };

function ex(n) {
    let i = "",
        l = "",
        s = "",
        u = "";
    return n.length > 5 ? (i = n.substring(1, 3), l = n.substring(3, 5), s = n.substring(5, 7), u = n.substring(7, 9)) : (i = n.substring(1, 2), l = n.substring(2, 3), s = n.substring(3, 4), u = n.substring(4, 5), i += i, l += l, s += s, u += u), {
        red: parseInt(i, 16),
        green: parseInt(l, 16),
        blue: parseInt(s, 16),
        alpha: u ? parseInt(u, 16) / 255 : 1
    }
}
const Yf = {
    test: Vd("#"),
    parse: ex,
    transform: hi.transform
},
    kl = n => ({
        test: i => typeof i == "string" && i.endsWith(n) && i.split(" ").length === 1,
        parse: parseFloat,
        transform: i => `${i}${n}`
    }),
    ja = kl("deg"),
    Ln = kl("%"),
    Ae = kl("px"),
    tx = kl("vh"),
    nx = kl("vw"),
    g1 = {
        ...Ln,
        parse: n => Ln.parse(n) / 100,
        transform: n => Ln.transform(n * 100)
    },
    ir = {
        test: Vd("hsl", "hue"),
        parse: Qg("hue", "saturation", "lightness"),
        transform: ({
            hue: n,
            saturation: i,
            lightness: l,
            alpha: s = 1
        }) => "hsla(" + Math.round(n) + ", " + Ln.transform(Sl(i)) + ", " + Ln.transform(Sl(l)) + ", " + Sl(Cl.transform(s)) + ")"
    },
    vt = {
        test: n => hi.test(n) || Yf.test(n) || ir.test(n),
        parse: n => hi.test(n) ? hi.parse(n) : ir.test(n) ? ir.parse(n) : Yf.parse(n),
        transform: n => typeof n == "string" ? n : n.hasOwnProperty("red") ? hi.transform(n) : ir.transform(n),
        getAnimatableNone: n => {
            const i = vt.parse(n);
            return i.alpha = 0, vt.transform(i)
        }
    },
    ax = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function ix(n) {
    return isNaN(n) && typeof n == "string" && (n.match(zd)?.length || 0) + (n.match(ax)?.length || 0) > 0
}
const Zg = "number",
    Fg = "color",
    rx = "var",
    lx = "var(",
    v1 = "${}",
    sx = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function _l(n) {
    const i = n.toString(),
        l = [],
        s = {
            color: [],
            number: [],
            var: []
        },
        u = [];
    let f = 0;
    const p = i.replace(sx, h => (vt.test(h) ? (s.color.push(f), u.push(Fg), l.push(vt.parse(h))) : h.startsWith(lx) ? (s.var.push(f), u.push(rx), l.push(h)) : (s.number.push(f), u.push(Zg), l.push(parseFloat(h))), ++f, v1)).split(v1);
    return {
        values: l,
        split: p,
        indexes: s,
        types: u
    }
}

function Ig(n) {
    return _l(n).values
}

function $g(n) {
    const {
        split: i,
        types: l
    } = _l(n), s = i.length;
    return u => {
        let f = "";
        for (let d = 0; d < s; d++)
            if (f += i[d], u[d] !== void 0) {
                const p = l[d];
                p === Zg ? f += Sl(u[d]) : p === Fg ? f += vt.transform(u[d]) : f += u[d]
            } return f
    }
}
const ox = n => typeof n == "number" ? 0 : vt.test(n) ? vt.getAnimatableNone(n) : n;

function ux(n) {
    const i = Ig(n);
    return $g(n)(i.map(ox))
}
const Ha = {
    test: ix,
    parse: Ig,
    createTransformer: $g,
    getAnimatableNone: ux
};

function Sf(n, i, l) {
    return l < 0 && (l += 1), l > 1 && (l -= 1), l < 1 / 6 ? n + (i - n) * 6 * l : l < 1 / 2 ? i : l < 2 / 3 ? n + (i - n) * (2 / 3 - l) * 6 : n
}

function cx({
    hue: n,
    saturation: i,
    lightness: l,
    alpha: s
}) {
    n /= 360, i /= 100, l /= 100;
    let u = 0,
        f = 0,
        d = 0;
    if (!i) u = f = d = l;
    else {
        const p = l < .5 ? l * (1 + i) : l + i - l * i,
            h = 2 * l - p;
        u = Sf(h, p, n + 1 / 3), f = Sf(h, p, n), d = Sf(h, p, n - 1 / 3)
    }
    return {
        red: Math.round(u * 255),
        green: Math.round(f * 255),
        blue: Math.round(d * 255),
        alpha: s
    }
}

function Uo(n, i) {
    return l => l > 0 ? i : n
}
const rt = (n, i, l) => n + (i - n) * l,
    wf = (n, i, l) => {
        const s = n * n,
            u = l * (i * i - s) + s;
        return u < 0 ? 0 : Math.sqrt(u)
    },
    fx = [Yf, hi, ir],
    dx = n => fx.find(i => i.test(n));

function b1(n) {
    const i = dx(n);
    if (!i) return !1;
    let l = i.parse(n);
    return i === ir && (l = cx(l)), l
}
const x1 = (n, i) => {
    const l = b1(n),
        s = b1(i);
    if (!l || !s) return Uo(n, i);
    const u = {
        ...l
    };
    return f => (u.red = wf(l.red, s.red, f), u.green = wf(l.green, s.green, f), u.blue = wf(l.blue, s.blue, f), u.alpha = rt(l.alpha, s.alpha, f), hi.transform(u))
},
    Gf = new Set(["none", "hidden"]);

function hx(n, i) {
    return Gf.has(n) ? l => l <= 0 ? n : i : l => l >= 1 ? i : n
}

function mx(n, i) {
    return l => rt(n, i, l)
}

function Hd(n) {
    return typeof n == "number" ? mx : typeof n == "string" ? Ld(n) ? Uo : vt.test(n) ? x1 : gx : Array.isArray(n) ? Jg : typeof n == "object" ? vt.test(n) ? x1 : px : Uo
}

function Jg(n, i) {
    const l = [...n],
        s = l.length,
        u = n.map((f, d) => Hd(f)(f, i[d]));
    return f => {
        for (let d = 0; d < s; d++) l[d] = u[d](f);
        return l
    }
}

function px(n, i) {
    const l = {
        ...n,
        ...i
    },
        s = {};
    for (const u in l) n[u] !== void 0 && i[u] !== void 0 && (s[u] = Hd(n[u])(n[u], i[u]));
    return u => {
        for (const f in s) l[f] = s[f](u);
        return l
    }
}

function yx(n, i) {
    const l = [],
        s = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let u = 0; u < i.values.length; u++) {
        const f = i.types[u],
            d = n.indexes[f][s[f]],
            p = n.values[d] ?? 0;
        l[u] = p, s[f]++
    }
    return l
}
const gx = (n, i) => {
    const l = Ha.createTransformer(i),
        s = _l(n),
        u = _l(i);
    return s.indexes.var.length === u.indexes.var.length && s.indexes.color.length === u.indexes.color.length && s.indexes.number.length >= u.indexes.number.length ? Gf.has(n) && !u.values.length || Gf.has(i) && !s.values.length ? hx(n, i) : Bl(Jg(yx(s, u), u.values), l) : Uo(n, i)
};

function Wg(n, i, l) {
    return typeof n == "number" && typeof i == "number" && typeof l == "number" ? rt(n, i, l) : Hd(n)(n, i)
}
const vx = n => {
    const i = ({
        timestamp: l
    }) => n(l);
    return {
        start: (l = !0) => tt.update(i, l),
        stop: () => Va(i),
        now: () => Ct.isProcessing ? Ct.timestamp : Yt.now()
    }
},
    ev = (n, i, l = 10) => {
        let s = "";
        const u = Math.max(Math.round(i / l), 2);
        for (let f = 0; f < u; f++) s += Math.round(n(f / (u - 1)) * 1e4) / 1e4 + ", ";
        return `linear(${s.substring(0, s.length - 2)})`
    },
    Bo = 2e4;

function Ud(n) {
    let i = 0;
    const l = 50;
    let s = n.next(i);
    for (; !s.done && i < Bo;) i += l, s = n.next(i);
    return i >= Bo ? 1 / 0 : i
}

function bx(n, i = 100, l) {
    const s = l({
        ...n,
        keyframes: [0, i]
    }),
        u = Math.min(Ud(s), Bo);
    return {
        type: "keyframes",
        ease: f => s.next(u * f).value / i,
        duration: Nn(u)
    }
}
const xx = 5;

function tv(n, i, l) {
    const s = Math.max(i - xx, 0);
    return Lg(l - n(s), i - s)
}
const ft = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
},
    Tf = .001;

function Sx({
    duration: n = ft.duration,
    bounce: i = ft.bounce,
    velocity: l = ft.velocity,
    mass: s = ft.mass
}) {
    let u, f, d = 1 - i;
    d = aa(ft.minDamping, ft.maxDamping, d), n = aa(ft.minDuration, ft.maxDuration, Nn(n)), d < 1 ? (u = m => {
        const y = m * d,
            v = y * n,
            b = y - l,
            x = Xf(m, d),
            T = Math.exp(-v);
        return Tf - b / x * T
    }, f = m => {
        const v = m * d * n,
            b = v * l + l,
            x = Math.pow(d, 2) * Math.pow(m, 2) * n,
            T = Math.exp(-v),
            D = Xf(Math.pow(m, 2), d);
        return (-u(m) + Tf > 0 ? -1 : 1) * ((b - x) * T) / D
    }) : (u = m => {
        const y = Math.exp(-m * n),
            v = (m - l) * n + 1;
        return -Tf + y * v
    }, f = m => {
        const y = Math.exp(-m * n),
            v = (l - m) * (n * n);
        return y * v
    });
    const p = 5 / n,
        h = Tx(u, f, p);
    if (n = jn(n), isNaN(h)) return {
        stiffness: ft.stiffness,
        damping: ft.damping,
        duration: n
    };
    {
        const m = Math.pow(h, 2) * s;
        return {
            stiffness: m,
            damping: d * 2 * Math.sqrt(s * m),
            duration: n
        }
    }
}
const wx = 12;

function Tx(n, i, l) {
    let s = l;
    for (let u = 1; u < wx; u++) s = s - n(s) / i(s);
    return s
}

function Xf(n, i) {
    return n * Math.sqrt(1 - i * i)
}
const Ex = ["duration", "bounce"],
    Mx = ["stiffness", "damping", "mass"];

function S1(n, i) {
    return i.some(l => n[l] !== void 0)
}

function Rx(n) {
    let i = {
        velocity: ft.velocity,
        stiffness: ft.stiffness,
        damping: ft.damping,
        mass: ft.mass,
        isResolvedFromDuration: !1,
        ...n
    };
    if (!S1(n, Mx) && S1(n, Ex))
        if (n.visualDuration) {
            const l = n.visualDuration,
                s = 2 * Math.PI / (l * 1.2),
                u = s * s,
                f = 2 * aa(.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(u);
            i = {
                ...i,
                mass: ft.mass,
                stiffness: u,
                damping: f
            }
        } else {
            const l = Sx(n);
            i = {
                ...i,
                ...l,
                mass: ft.mass
            }, i.isResolvedFromDuration = !0
        } return i
}

function Po(n = ft.visualDuration, i = ft.bounce) {
    const l = typeof n != "object" ? {
        visualDuration: n,
        keyframes: [0, 1],
        bounce: i
    } : n;
    let {
        restSpeed: s,
        restDelta: u
    } = l;
    const f = l.keyframes[0],
        d = l.keyframes[l.keyframes.length - 1],
        p = {
            done: !1,
            value: f
        },
        {
            stiffness: h,
            damping: m,
            mass: y,
            duration: v,
            velocity: b,
            isResolvedFromDuration: x
        } = Rx({
            ...l,
            velocity: -Nn(l.velocity || 0)
        }),
        T = b || 0,
        D = m / (2 * Math.sqrt(h * y)),
        O = d - f,
        E = Nn(Math.sqrt(h / y)),
        V = Math.abs(O) < 5;
    s || (s = V ? ft.restSpeed.granular : ft.restSpeed.default), u || (u = V ? ft.restDelta.granular : ft.restDelta.default);
    let j;
    if (D < 1) {
        const U = Xf(E, D);
        j = M => {
            const G = Math.exp(-D * E * M);
            return d - G * ((T + D * E * O) / U * Math.sin(U * M) + O * Math.cos(U * M))
        }
    } else if (D === 1) j = U => d - Math.exp(-E * U) * (O + (T + E * O) * U);
    else {
        const U = E * Math.sqrt(D * D - 1);
        j = M => {
            const G = Math.exp(-D * E * M),
                Z = Math.min(U * M, 300);
            return d - G * ((T + D * E * O) * Math.sinh(Z) + U * O * Math.cosh(Z)) / U
        }
    }
    const Q = {
        calculatedDuration: x && v || null,
        next: U => {
            const M = j(U);
            if (x) p.done = U >= v;
            else {
                let G = U === 0 ? T : 0;
                D < 1 && (G = U === 0 ? jn(T) : tv(j, U, M));
                const Z = Math.abs(G) <= s,
                    ee = Math.abs(d - M) <= u;
                p.done = Z && ee
            }
            return p.value = p.done ? d : M, p
        },
        toString: () => {
            const U = Math.min(Ud(Q), Bo),
                M = ev(G => Q.next(U * G).value, U, 30);
            return U + "ms " + M
        },
        toTransition: () => { }
    };
    return Q
}
Po.applyToOptions = n => {
    const i = bx(n, 100, Po);
    return n.ease = i.ease, n.duration = jn(i.duration), n.type = "keyframes", n
};

function Kf({
    keyframes: n,
    velocity: i = 0,
    power: l = .8,
    timeConstant: s = 325,
    bounceDamping: u = 10,
    bounceStiffness: f = 500,
    modifyTarget: d,
    min: p,
    max: h,
    restDelta: m = .5,
    restSpeed: y
}) {
    const v = n[0],
        b = {
            done: !1,
            value: v
        },
        x = Z => p !== void 0 && Z < p || h !== void 0 && Z > h,
        T = Z => p === void 0 ? h : h === void 0 || Math.abs(p - Z) < Math.abs(h - Z) ? p : h;
    let D = l * i;
    const O = v + D,
        E = d === void 0 ? O : d(O);
    E !== O && (D = E - v);
    const V = Z => -D * Math.exp(-Z / s),
        j = Z => E + V(Z),
        Q = Z => {
            const ee = V(Z),
                ie = j(Z);
            b.done = Math.abs(ee) <= m, b.value = b.done ? E : ie
        };
    let U, M;
    const G = Z => {
        x(b.value) && (U = Z, M = Po({
            keyframes: [b.value, T(b.value)],
            velocity: tv(j, Z, b.value),
            damping: u,
            stiffness: f,
            restDelta: m,
            restSpeed: y
        }))
    };
    return G(0), {
        calculatedDuration: null,
        next: Z => {
            let ee = !1;
            return !M && U === void 0 && (ee = !0, Q(Z), G(Z)), U !== void 0 && Z >= U ? M.next(Z - U) : (!ee && Q(Z), b)
        }
    }
}

function Ax(n, i, l) {
    const s = [],
        u = l || ia.mix || Wg,
        f = n.length - 1;
    for (let d = 0; d < f; d++) {
        let p = u(n[d], n[d + 1]);
        if (i) {
            const h = Array.isArray(i) ? i[d] || pn : i;
            p = Bl(h, p)
        }
        s.push(p)
    }
    return s
}

function Dx(n, i, {
    clamp: l = !0,
    ease: s,
    mixer: u
} = {}) {
    const f = n.length;
    if (Dd(f === i.length), f === 1) return () => i[0];
    if (f === 2 && i[0] === i[1]) return () => i[1];
    const d = n[0] === n[1];
    n[0] > n[f - 1] && (n = [...n].reverse(), i = [...i].reverse());
    const p = Ax(i, s, u),
        h = p.length,
        m = y => {
            if (d && y < n[0]) return i[0];
            let v = 0;
            if (h > 1)
                for (; v < n.length - 2 && !(y < n[v + 1]); v++);
            const b = Ol(n[v], n[v + 1], y);
            return p[v](b)
        };
    return l ? y => m(aa(n[0], n[f - 1], y)) : m
}

function Ox(n, i) {
    const l = n[n.length - 1];
    for (let s = 1; s <= i; s++) {
        const u = Ol(0, i, s);
        n.push(rt(l, 1, u))
    }
}

function Cx(n) {
    const i = [0];
    return Ox(i, n.length - 1), i
}

function _x(n, i) {
    return n.map(l => l * i)
}

function jx(n, i) {
    return n.map(() => i || Yg).splice(0, n.length - 1)
}

function wl({
    duration: n = 300,
    keyframes: i,
    times: l,
    ease: s = "easeInOut"
}) {
    const u = Y5(s) ? s.map(y1) : y1(s),
        f = {
            done: !1,
            value: i[0]
        },
        d = _x(l && l.length === i.length ? l : Cx(i), n),
        p = Dx(d, i, {
            ease: Array.isArray(u) ? u : jx(i, u)
        });
    return {
        calculatedDuration: n,
        next: h => (f.value = p(h), f.done = h >= n, f)
    }
}
const Nx = n => n !== null;

function Bd(n, {
    repeat: i,
    repeatType: l = "loop"
}, s, u = 1) {
    const f = n.filter(Nx),
        p = u < 0 || i && l !== "loop" && i % 2 === 1 ? 0 : f.length - 1;
    return !p || s === void 0 ? f[p] : s
}
const Lx = {
    decay: Kf,
    inertia: Kf,
    tween: wl,
    keyframes: wl,
    spring: Po
};

function nv(n) {
    typeof n.type == "string" && (n.type = Lx[n.type])
}
class Pd {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(i => {
            this.resolve = i
        })
    }
    notifyFinished() {
        this.resolve()
    }
    then(i, l) {
        return this.finished.then(i, l)
    }
}
const zx = n => n / 100;
class kd extends Pd {
    constructor(i) {
        super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
            const {
                motionValue: l
            } = this.options;
            l && l.updatedAt !== Yt.now() && this.tick(Yt.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.())
        }, this.options = i, this.initAnimation(), this.play(), i.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {
            options: i
        } = this;
        nv(i);
        const {
            type: l = wl,
            repeat: s = 0,
            repeatDelay: u = 0,
            repeatType: f,
            velocity: d = 0
        } = i;
        let {
            keyframes: p
        } = i;
        const h = l || wl;
        h !== wl && typeof p[0] != "number" && (this.mixKeyframes = Bl(zx, Wg(p[0], p[1])), p = [0, 100]);
        const m = h({
            ...i,
            keyframes: p
        });
        f === "mirror" && (this.mirroredGenerator = h({
            ...i,
            keyframes: [...p].reverse(),
            velocity: -d
        })), m.calculatedDuration === null && (m.calculatedDuration = Ud(m));
        const {
            calculatedDuration: y
        } = m;
        this.calculatedDuration = y, this.resolvedDuration = y + u, this.totalDuration = this.resolvedDuration * (s + 1) - u, this.generator = m
    }
    updateTime(i) {
        const l = Math.round(i - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = l
    }
    tick(i, l = !1) {
        const {
            generator: s,
            totalDuration: u,
            mixKeyframes: f,
            mirroredGenerator: d,
            resolvedDuration: p,
            calculatedDuration: h
        } = this;
        if (this.startTime === null) return s.next(0);
        const {
            delay: m = 0,
            keyframes: y,
            repeat: v,
            repeatType: b,
            repeatDelay: x,
            type: T,
            onUpdate: D,
            finalKeyframe: O
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, i) : this.speed < 0 && (this.startTime = Math.min(i - u / this.speed, this.startTime)), l ? this.currentTime = i : this.updateTime(i);
        const E = this.currentTime - m * (this.playbackSpeed >= 0 ? 1 : -1),
            V = this.playbackSpeed >= 0 ? E < 0 : E > u;
        this.currentTime = Math.max(E, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = u);
        let j = this.currentTime,
            Q = s;
        if (v) {
            const Z = Math.min(this.currentTime, u) / p;
            let ee = Math.floor(Z),
                ie = Z % 1;
            !ie && Z >= 1 && (ie = 1), ie === 1 && ee--, ee = Math.min(ee, v + 1), !!(ee % 2) && (b === "reverse" ? (ie = 1 - ie, x && (ie -= x / p)) : b === "mirror" && (Q = d)), j = aa(0, 1, ie) * p
        }
        const U = V ? {
            done: !1,
            value: y[0]
        } : Q.next(j);
        f && (U.value = f(U.value));
        let {
            done: M
        } = U;
        !V && h !== null && (M = this.playbackSpeed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
        const G = this.holdTime === null && (this.state === "finished" || this.state === "running" && M);
        return G && T !== Kf && (U.value = Bd(y, this.options, O, this.speed)), D && D(U.value), G && this.finish(), U
    }
    then(i, l) {
        return this.finished.then(i, l)
    }
    get duration() {
        return Nn(this.calculatedDuration)
    }
    get time() {
        return Nn(this.currentTime)
    }
    set time(i) {
        i = jn(i), this.currentTime = i, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = i : this.driver && (this.startTime = this.driver.now() - i / this.playbackSpeed), this.driver?.start(!1)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(i) {
        this.updateTime(Yt.now());
        const l = this.playbackSpeed !== i;
        this.playbackSpeed = i, l && (this.time = Nn(this.currentTime))
    }
    play() {
        if (this.isStopped) return;
        const {
            driver: i = vx,
            startTime: l
        } = this.options;
        this.driver || (this.driver = i(u => this.tick(u))), this.options.onPlay?.();
        const s = this.driver.now();
        this.state === "finished" ? (this.updateFinished(), this.startTime = s) : this.holdTime !== null ? this.startTime = s - this.holdTime : this.startTime || (this.startTime = l ?? s), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        this.state = "paused", this.updateTime(Yt.now()), this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null
    }
    finish() {
        this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.()
    }
    cancel() {
        this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.()
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(i) {
        return this.startTime = 0, this.tick(i, !0)
    }
    attachTimeline(i) {
        return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), i.observe(this)
    }
}

function Vx(n) {
    for (let i = 1; i < n.length; i++) n[i] ?? (n[i] = n[i - 1])
}
const mi = n => n * 180 / Math.PI,
    Qf = n => {
        const i = mi(Math.atan2(n[1], n[0]));
        return Zf(i)
    },
    Hx = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: n => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
        rotate: Qf,
        rotateZ: Qf,
        skewX: n => mi(Math.atan(n[1])),
        skewY: n => mi(Math.atan(n[2])),
        skew: n => (Math.abs(n[1]) + Math.abs(n[2])) / 2
    },
    Zf = n => (n = n % 360, n < 0 && (n += 360), n),
    w1 = Qf,
    T1 = n => Math.sqrt(n[0] * n[0] + n[1] * n[1]),
    E1 = n => Math.sqrt(n[4] * n[4] + n[5] * n[5]),
    Ux = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: T1,
        scaleY: E1,
        scale: n => (T1(n) + E1(n)) / 2,
        rotateX: n => Zf(mi(Math.atan2(n[6], n[5]))),
        rotateY: n => Zf(mi(Math.atan2(-n[2], n[0]))),
        rotateZ: w1,
        rotate: w1,
        skewX: n => mi(Math.atan(n[4])),
        skewY: n => mi(Math.atan(n[1])),
        skew: n => (Math.abs(n[1]) + Math.abs(n[4])) / 2
    };

function Ff(n) {
    return n.includes("scale") ? 1 : 0
}

function If(n, i) {
    if (!n || n === "none") return Ff(i);
    const l = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let s, u;
    if (l) s = Ux, u = l;
    else {
        const p = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        s = Hx, u = p
    }
    if (!u) return Ff(i);
    const f = s[i],
        d = u[1].split(",").map(Px);
    return typeof f == "function" ? f(d) : d[f]
}
const Bx = (n, i) => {
    const {
        transform: l = "none"
    } = getComputedStyle(n);
    return If(l, i)
};

function Px(n) {
    return parseFloat(n.trim())
}
const mr = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    pr = new Set(mr),
    M1 = n => n === hr || n === Ae,
    kx = new Set(["x", "y", "z"]),
    qx = mr.filter(n => !kx.has(n));

function Yx(n) {
    const i = [];
    return qx.forEach(l => {
        const s = n.getValue(l);
        s !== void 0 && (i.push([l, s.get()]), s.set(l.startsWith("scale") ? 1 : 0))
    }), i
}
const yi = {
    width: ({
        x: n
    }, {
        paddingLeft: i = "0",
        paddingRight: l = "0"
    }) => n.max - n.min - parseFloat(i) - parseFloat(l),
    height: ({
        y: n
    }, {
        paddingTop: i = "0",
        paddingBottom: l = "0"
    }) => n.max - n.min - parseFloat(i) - parseFloat(l),
    top: (n, {
        top: i
    }) => parseFloat(i),
    left: (n, {
        left: i
    }) => parseFloat(i),
    bottom: ({
        y: n
    }, {
        top: i
    }) => parseFloat(i) + (n.max - n.min),
    right: ({
        x: n
    }, {
        left: i
    }) => parseFloat(i) + (n.max - n.min),
    x: (n, {
        transform: i
    }) => If(i, "x"),
    y: (n, {
        transform: i
    }) => If(i, "y")
};
yi.translateX = yi.x;
yi.translateY = yi.y;
const gi = new Set;
let $f = !1,
    Jf = !1,
    Wf = !1;

function av() {
    if (Jf) {
        const n = Array.from(gi).filter(s => s.needsMeasurement),
            i = new Set(n.map(s => s.element)),
            l = new Map;
        i.forEach(s => {
            const u = Yx(s);
            u.length && (l.set(s, u), s.render())
        }), n.forEach(s => s.measureInitialState()), i.forEach(s => {
            s.render();
            const u = l.get(s);
            u && u.forEach(([f, d]) => {
                s.getValue(f)?.set(d)
            })
        }), n.forEach(s => s.measureEndState()), n.forEach(s => {
            s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY)
        })
    }
    Jf = !1, $f = !1, gi.forEach(n => n.complete(Wf)), gi.clear()
}

function iv() {
    gi.forEach(n => {
        n.readKeyframes(), n.needsMeasurement && (Jf = !0)
    })
}

function Gx() {
    Wf = !0, iv(), av(), Wf = !1
}
class qd {
    constructor(i, l, s, u, f, d = !1) {
        this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...i], this.onComplete = l, this.name = s, this.motionValue = u, this.element = f, this.isAsync = d
    }
    scheduleResolve() {
        this.state = "scheduled", this.isAsync ? (gi.add(this), $f || ($f = !0, tt.read(iv), tt.resolveKeyframes(av))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: i,
            name: l,
            element: s,
            motionValue: u
        } = this;
        if (i[0] === null) {
            const f = u?.get(),
                d = i[i.length - 1];
            if (f !== void 0) i[0] = f;
            else if (s && l) {
                const p = s.readValue(l, d);
                p != null && (i[0] = p)
            }
            i[0] === void 0 && (i[0] = d), u && f === void 0 && u.set(i[0])
        }
        Vx(i)
    }
    setFinalKeyframe() { }
    measureInitialState() { }
    renderEndStyles() { }
    measureEndState() { }
    complete(i = !1) {
        this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i), gi.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (gi.delete(this), this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const Xx = n => n.startsWith("--");

function Kx(n, i, l) {
    Xx(i) ? n.style.setProperty(i, l) : n.style[i] = l
}
const Qx = Od(() => window.ScrollTimeline !== void 0),
    Zx = {};

function Fx(n, i) {
    const l = Od(n);
    return () => Zx[i] ?? l()
}
const rv = Fx(() => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}, "linearEasing"),
    xl = ([n, i, l, s]) => `cubic-bezier(${n}, ${i}, ${l}, ${s})`,
    R1 = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: xl([0, .65, .55, 1]),
        circOut: xl([.55, 0, 1, .45]),
        backIn: xl([.31, .01, .66, -.59]),
        backOut: xl([.33, 1.53, .69, .99])
    };

function lv(n, i) {
    if (n) return typeof n == "function" ? rv() ? ev(n, i) : "ease-out" : Gg(n) ? xl(n) : Array.isArray(n) ? n.map(l => lv(l, i) || R1.easeOut) : R1[n]
}

function Ix(n, i, l, {
    delay: s = 0,
    duration: u = 300,
    repeat: f = 0,
    repeatType: d = "loop",
    ease: p = "easeOut",
    times: h
} = {}, m = void 0) {
    const y = {
        [i]: l
    };
    h && (y.offset = h);
    const v = lv(p, u);
    Array.isArray(v) && (y.easing = v);
    const b = {
        delay: s,
        duration: u,
        easing: Array.isArray(v) ? "linear" : v,
        fill: "both",
        iterations: f + 1,
        direction: d === "reverse" ? "alternate" : "normal"
    };
    return m && (b.pseudoElement = m), n.animate(y, b)
}

function sv(n) {
    return typeof n == "function" && "applyToOptions" in n
}

function $x({
    type: n,
    ...i
}) {
    return sv(n) && rv() ? n.applyToOptions(i) : (i.duration ?? (i.duration = 300), i.ease ?? (i.ease = "easeOut"), i)
}
class Jx extends Pd {
    constructor(i) {
        if (super(), this.finishedTime = null, this.isStopped = !1, !i) return;
        const {
            element: l,
            name: s,
            keyframes: u,
            pseudoElement: f,
            allowFlatten: d = !1,
            finalKeyframe: p,
            onComplete: h
        } = i;
        this.isPseudoElement = !!f, this.allowFlatten = d, this.options = i, Dd(typeof i.type != "string");
        const m = $x(i);
        this.animation = Ix(l, s, u, m, f), m.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
            if (this.finishedTime = this.time, !f) {
                const y = Bd(u, this.options, p, this.speed);
                this.updateMotionValue ? this.updateMotionValue(y) : Kx(l, s, y), this.animation.cancel()
            }
            h?.(), this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.finish?.()
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch { }
    }
    stop() {
        if (this.isStopped) return;
        this.isStopped = !0;
        const {
            state: i
        } = this;
        i === "idle" || i === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        this.isPseudoElement || this.animation.commitStyles?.()
    }
    get duration() {
        const i = this.animation.effect?.getComputedTiming?.().duration || 0;
        return Nn(Number(i))
    }
    get time() {
        return Nn(Number(this.animation.currentTime) || 0)
    }
    set time(i) {
        this.finishedTime = null, this.animation.currentTime = jn(i)
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(i) {
        i < 0 && (this.finishedTime = null), this.animation.playbackRate = i
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return Number(this.animation.startTime)
    }
    set startTime(i) {
        this.animation.startTime = i
    }
    attachTimeline({
        timeline: i,
        observe: l
    }) {
        return this.allowFlatten && this.animation.effect?.updateTiming({
            easing: "linear"
        }), this.animation.onfinish = null, i && Qx() ? (this.animation.timeline = i, pn) : l(this)
    }
}
const ov = {
    anticipate: Pg,
    backInOut: Bg,
    circInOut: qg
};

function Wx(n) {
    return n in ov
}

function e6(n) {
    typeof n.ease == "string" && Wx(n.ease) && (n.ease = ov[n.ease])
}
const A1 = 10;
class t6 extends Jx {
    constructor(i) {
        e6(i), nv(i), super(i), i.startTime && (this.startTime = i.startTime), this.options = i
    }
    updateMotionValue(i) {
        const {
            motionValue: l,
            onUpdate: s,
            onComplete: u,
            element: f,
            ...d
        } = this.options;
        if (!l) return;
        if (i !== void 0) {
            l.set(i);
            return
        }
        const p = new kd({
            ...d,
            autoplay: !1
        }),
            h = jn(this.finishedTime ?? this.time);
        l.setWithVelocity(p.sample(h - A1).value, p.sample(h).value, A1), p.stop()
    }
}
const D1 = (n, i) => i === "zIndex" ? !1 : !!(typeof n == "number" || Array.isArray(n) || typeof n == "string" && (Ha.test(n) || n === "0") && !n.startsWith("url("));

function n6(n) {
    const i = n[0];
    if (n.length === 1) return !0;
    for (let l = 0; l < n.length; l++)
        if (n[l] !== i) return !0
}

function a6(n, i, l, s) {
    const u = n[0];
    if (u === null) return !1;
    if (i === "display" || i === "visibility") return !0;
    const f = n[n.length - 1],
        d = D1(u, i),
        p = D1(f, i);
    return !d || !p ? !1 : n6(n) || (l === "spring" || sv(l)) && s
}

function ed(n) {
    n.duration = 0, n.type
}
const i6 = new Set(["opacity", "clipPath", "filter", "transform"]),
    r6 = Od(() => Object.hasOwnProperty.call(Element.prototype, "animate"));

function l6(n) {
    const {
        motionValue: i,
        name: l,
        repeatDelay: s,
        repeatType: u,
        damping: f,
        type: d
    } = n;
    if (!(i?.owner?.current instanceof HTMLElement)) return !1;
    const {
        onUpdate: h,
        transformTemplate: m
    } = i.owner.getProps();
    return r6() && l && i6.has(l) && (l !== "transform" || !m) && !h && !s && u !== "mirror" && f !== 0 && d !== "inertia"
}
const s6 = 40;
class o6 extends Pd {
    constructor({
        autoplay: i = !0,
        delay: l = 0,
        type: s = "keyframes",
        repeat: u = 0,
        repeatDelay: f = 0,
        repeatType: d = "loop",
        keyframes: p,
        name: h,
        motionValue: m,
        element: y,
        ...v
    }) {
        super(), this.stop = () => {
            this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel()
        }, this.createdAt = Yt.now();
        const b = {
            autoplay: i,
            delay: l,
            type: s,
            repeat: u,
            repeatDelay: f,
            repeatType: d,
            name: h,
            motionValue: m,
            element: y,
            ...v
        },
            x = y?.KeyframeResolver || qd;
        this.keyframeResolver = new x(p, (T, D, O) => this.onKeyframesResolved(T, D, b, !O), h, m, y), this.keyframeResolver?.scheduleResolve()
    }
    onKeyframesResolved(i, l, s, u) {
        this.keyframeResolver = void 0;
        const {
            name: f,
            type: d,
            velocity: p,
            delay: h,
            isHandoff: m,
            onUpdate: y
        } = s;
        this.resolvedAt = Yt.now(), a6(i, f, d, p) || ((ia.instantAnimations || !h) && y?.(Bd(i, s, l)), i[0] = i[i.length - 1], ed(s), s.repeat = 0);
        const b = {
            startTime: u ? this.resolvedAt ? this.resolvedAt - this.createdAt > s6 ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: l,
            ...s,
            keyframes: i
        },
            x = !m && l6(b) ? new t6({
                ...b,
                element: b.motionValue.owner.current
            }) : new kd(b);
        x.finished.then(() => this.notifyFinished()).catch(pn), this.pendingTimeline && (this.stopTimeline = x.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = x
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(i, l) {
        return this.finished.finally(i).then(() => { })
    }
    get animation() {
        return this._animation || (this.keyframeResolver?.resume(), Gx()), this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get time() {
        return this.animation.time
    }
    set time(i) {
        this.animation.time = i
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(i) {
        this.animation.speed = i
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(i) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(i) : this.pendingTimeline = i, () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        this._animation && this.animation.cancel(), this.keyframeResolver?.cancel()
    }
}
const u6 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function c6(n) {
    const i = u6.exec(n);
    if (!i) return [,];
    const [, l, s, u] = i;
    return [`--${l ?? s}`, u]
}

function uv(n, i, l = 1) {
    const [s, u] = c6(n);
    if (!s) return;
    const f = window.getComputedStyle(i).getPropertyValue(s);
    if (f) {
        const d = f.trim();
        return _g(d) ? parseFloat(d) : d
    }
    return Ld(u) ? uv(u, i, l + 1) : u
}

function Yd(n, i) {
    return n?.[i] ?? n?.default ?? n
}
const cv = new Set(["width", "height", "top", "left", "right", "bottom", ...mr]),
    f6 = {
        test: n => n === "auto",
        parse: n => n
    },
    fv = n => i => i.test(n),
    dv = [hr, Ae, Ln, ja, nx, tx, f6],
    O1 = n => dv.find(fv(n));

function d6(n) {
    return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || Ng(n) : !0
}
const h6 = new Set(["brightness", "contrast", "saturate", "opacity"]);

function m6(n) {
    const [i, l] = n.slice(0, -1).split("(");
    if (i === "drop-shadow") return n;
    const [s] = l.match(zd) || [];
    if (!s) return n;
    const u = l.replace(s, "");
    let f = h6.has(i) ? 1 : 0;
    return s !== l && (f *= 100), i + "(" + f + u + ")"
}
const p6 = /\b([a-z-]*)\(.*?\)/gu,
    td = {
        ...Ha,
        getAnimatableNone: n => {
            const i = n.match(p6);
            return i ? i.map(m6).join(" ") : n
        }
    },
    C1 = {
        ...hr,
        transform: Math.round
    },
    y6 = {
        rotate: ja,
        rotateX: ja,
        rotateY: ja,
        rotateZ: ja,
        scale: co,
        scaleX: co,
        scaleY: co,
        scaleZ: co,
        skew: ja,
        skewX: ja,
        skewY: ja,
        distance: Ae,
        translateX: Ae,
        translateY: Ae,
        translateZ: Ae,
        x: Ae,
        y: Ae,
        z: Ae,
        perspective: Ae,
        transformPerspective: Ae,
        opacity: Cl,
        originX: g1,
        originY: g1,
        originZ: Ae
    },
    Gd = {
        borderWidth: Ae,
        borderTopWidth: Ae,
        borderRightWidth: Ae,
        borderBottomWidth: Ae,
        borderLeftWidth: Ae,
        borderRadius: Ae,
        radius: Ae,
        borderTopLeftRadius: Ae,
        borderTopRightRadius: Ae,
        borderBottomRightRadius: Ae,
        borderBottomLeftRadius: Ae,
        width: Ae,
        maxWidth: Ae,
        height: Ae,
        maxHeight: Ae,
        top: Ae,
        right: Ae,
        bottom: Ae,
        left: Ae,
        padding: Ae,
        paddingTop: Ae,
        paddingRight: Ae,
        paddingBottom: Ae,
        paddingLeft: Ae,
        margin: Ae,
        marginTop: Ae,
        marginRight: Ae,
        marginBottom: Ae,
        marginLeft: Ae,
        backgroundPositionX: Ae,
        backgroundPositionY: Ae,
        ...y6,
        zIndex: C1,
        fillOpacity: Cl,
        strokeOpacity: Cl,
        numOctaves: C1
    },
    g6 = {
        ...Gd,
        color: vt,
        backgroundColor: vt,
        outlineColor: vt,
        fill: vt,
        stroke: vt,
        borderColor: vt,
        borderTopColor: vt,
        borderRightColor: vt,
        borderBottomColor: vt,
        borderLeftColor: vt,
        filter: td,
        WebkitFilter: td
    },
    hv = n => g6[n];

function mv(n, i) {
    let l = hv(n);
    return l !== td && (l = Ha), l.getAnimatableNone ? l.getAnimatableNone(i) : void 0
}
const v6 = new Set(["auto", "none", "0"]);

function b6(n, i, l) {
    let s = 0,
        u;
    for (; s < n.length && !u;) {
        const f = n[s];
        typeof f == "string" && !v6.has(f) && _l(f).values.length && (u = n[s]), s++
    }
    if (u && l)
        for (const f of i) n[f] = mv(l, u)
}
class x6 extends qd {
    constructor(i, l, s, u, f) {
        super(i, l, s, u, f, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: i,
            element: l,
            name: s
        } = this;
        if (!l || !l.current) return;
        super.readKeyframes();
        for (let h = 0; h < i.length; h++) {
            let m = i[h];
            if (typeof m == "string" && (m = m.trim(), Ld(m))) {
                const y = uv(m, l.current);
                y !== void 0 && (i[h] = y), h === i.length - 1 && (this.finalKeyframe = m)
            }
        }
        if (this.resolveNoneKeyframes(), !cv.has(s) || i.length !== 2) return;
        const [u, f] = i, d = O1(u), p = O1(f);
        if (d !== p)
            if (M1(d) && M1(p))
                for (let h = 0; h < i.length; h++) {
                    const m = i[h];
                    typeof m == "string" && (i[h] = parseFloat(m))
                } else yi[s] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: i,
            name: l
        } = this, s = [];
        for (let u = 0; u < i.length; u++)(i[u] === null || d6(i[u])) && s.push(u);
        s.length && b6(i, s, l)
    }
    measureInitialState() {
        const {
            element: i,
            unresolvedKeyframes: l,
            name: s
        } = this;
        if (!i || !i.current) return;
        s === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = yi[s](i.measureViewportBox(), window.getComputedStyle(i.current)), l[0] = this.measuredOrigin;
        const u = l[l.length - 1];
        u !== void 0 && i.getValue(s, u).jump(u, !1)
    }
    measureEndState() {
        const {
            element: i,
            name: l,
            unresolvedKeyframes: s
        } = this;
        if (!i || !i.current) return;
        const u = i.getValue(l);
        u && u.jump(this.measuredOrigin, !1);
        const f = s.length - 1,
            d = s[f];
        s[f] = yi[l](i.measureViewportBox(), window.getComputedStyle(i.current)), d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d), this.removedTransforms?.length && this.removedTransforms.forEach(([p, h]) => {
            i.getValue(p).set(h)
        }), this.resolveNoneKeyframes()
    }
}

function S6(n, i, l) {
    if (n instanceof EventTarget) return [n];
    if (typeof n == "string") {
        let s = document;
        const u = l?.[n] ?? s.querySelectorAll(n);
        return u ? Array.from(u) : []
    }
    return Array.from(n)
}
const pv = (n, i) => i && typeof n == "number" ? i.transform(n) : n;

function yv(n) {
    return jg(n) && "offsetHeight" in n
}
const _1 = 30,
    w6 = n => !isNaN(parseFloat(n));
class T6 {
    constructor(i, l = {}) {
        this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = s => {
            const u = Yt.now();
            if (this.updatedAt !== u && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(s), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
                for (const f of this.dependents) f.dirty()
        }, this.hasAnimated = !1, this.setCurrent(i), this.owner = l.owner
    }
    setCurrent(i) {
        this.current = i, this.updatedAt = Yt.now(), this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = w6(this.current))
    }
    setPrevFrameValue(i = this.current) {
        this.prevFrameValue = i, this.prevUpdatedAt = this.updatedAt
    }
    onChange(i) {
        return this.on("change", i)
    }
    on(i, l) {
        this.events[i] || (this.events[i] = new Cd);
        const s = this.events[i].add(l);
        return i === "change" ? () => {
            s(), tt.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : s
    }
    clearListeners() {
        for (const i in this.events) this.events[i].clear()
    }
    attach(i, l) {
        this.passiveEffect = i, this.stopPassiveEffect = l
    }
    set(i) {
        this.passiveEffect ? this.passiveEffect(i, this.updateAndNotify) : this.updateAndNotify(i)
    }
    setWithVelocity(i, l, s) {
        this.set(l), this.prev = void 0, this.prevFrameValue = i, this.prevUpdatedAt = this.updatedAt - s
    }
    jump(i, l = !0) {
        this.updateAndNotify(i), this.prev = i, this.prevUpdatedAt = this.prevFrameValue = void 0, l && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        this.events.change?.notify(this.current)
    }
    addDependent(i) {
        this.dependents || (this.dependents = new Set), this.dependents.add(i)
    }
    removeDependent(i) {
        this.dependents && this.dependents.delete(i)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const i = Yt.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || i - this.updatedAt > _1) return 0;
        const l = Math.min(this.updatedAt - this.prevUpdatedAt, _1);
        return Lg(parseFloat(this.current) - parseFloat(this.prevFrameValue), l)
    }
    start(i) {
        return this.stop(), new Promise(l => {
            this.hasAnimated = !0, this.animation = i(l), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function fr(n, i) {
    return new T6(n, i)
}
const {
    schedule: Xd
} = Xg(queueMicrotask, !1), wn = {
    x: !1,
    y: !1
};

function gv() {
    return wn.x || wn.y
}

function E6(n) {
    return n === "x" || n === "y" ? wn[n] ? null : (wn[n] = !0, () => {
        wn[n] = !1
    }) : wn.x || wn.y ? null : (wn.x = wn.y = !0, () => {
        wn.x = wn.y = !1
    })
}

function vv(n, i) {
    const l = S6(n),
        s = new AbortController,
        u = {
            passive: !0,
            ...i,
            signal: s.signal
        };
    return [l, u, () => s.abort()]
}

function j1(n) {
    return !(n.pointerType === "touch" || gv())
}

function M6(n, i, l = {}) {
    const [s, u, f] = vv(n, l), d = p => {
        if (!j1(p)) return;
        const {
            target: h
        } = p, m = i(h, p);
        if (typeof m != "function" || !h) return;
        const y = v => {
            j1(v) && (m(v), h.removeEventListener("pointerleave", y))
        };
        h.addEventListener("pointerleave", y, u)
    };
    return s.forEach(p => {
        p.addEventListener("pointerenter", d, u)
    }), f
}
const bv = (n, i) => i ? n === i ? !0 : bv(n, i.parentElement) : !1,
    Kd = n => n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1,
    R6 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function A6(n) {
    return R6.has(n.tagName) || n.tabIndex !== -1
}
const jo = new WeakSet;

function N1(n) {
    return i => {
        i.key === "Enter" && n(i)
    }
}

function Ef(n, i) {
    n.dispatchEvent(new PointerEvent("pointer" + i, {
        isPrimary: !0,
        bubbles: !0
    }))
}
const D6 = (n, i) => {
    const l = n.currentTarget;
    if (!l) return;
    const s = N1(() => {
        if (jo.has(l)) return;
        Ef(l, "down");
        const u = N1(() => {
            Ef(l, "up")
        }),
            f = () => Ef(l, "cancel");
        l.addEventListener("keyup", u, i), l.addEventListener("blur", f, i)
    });
    l.addEventListener("keydown", s, i), l.addEventListener("blur", () => l.removeEventListener("keydown", s), i)
};

function L1(n) {
    return Kd(n) && !gv()
}

function O6(n, i, l = {}) {
    const [s, u, f] = vv(n, l), d = p => {
        const h = p.currentTarget;
        if (!L1(p)) return;
        jo.add(h);
        const m = i(h, p),
            y = (x, T) => {
                window.removeEventListener("pointerup", v), window.removeEventListener("pointercancel", b), jo.has(h) && jo.delete(h), L1(x) && typeof m == "function" && m(x, {
                    success: T
                })
            },
            v = x => {
                y(x, h === window || h === document || l.useGlobalTarget || bv(h, x.target))
            },
            b = x => {
                y(x, !1)
            };
        window.addEventListener("pointerup", v, u), window.addEventListener("pointercancel", b, u)
    };
    return s.forEach(p => {
        (l.useGlobalTarget ? window : p).addEventListener("pointerdown", d, u), yv(p) && (p.addEventListener("focus", m => D6(m, u)), !A6(p) && !p.hasAttribute("tabindex") && (p.tabIndex = 0))
    }), f
}

function xv(n) {
    return jg(n) && "ownerSVGElement" in n
}

function C6(n) {
    return xv(n) && n.tagName === "svg"
}
const Nt = n => !!(n && n.getVelocity),
    _6 = [...dv, vt, Ha],
    j6 = n => _6.find(fv(n)),
    Qd = C.createContext({
        transformPagePoint: n => n,
        isStatic: !1,
        reducedMotion: "never"
    });
class N6 extends C.Component {
    getSnapshotBeforeUpdate(i) {
        const l = this.props.childRef.current;
        if (l && i.isPresent && !this.props.isPresent) {
            const s = l.offsetParent,
                u = yv(s) && s.offsetWidth || 0,
                f = this.props.sizeRef.current;
            f.height = l.offsetHeight || 0, f.width = l.offsetWidth || 0, f.top = l.offsetTop, f.left = l.offsetLeft, f.right = u - f.width - f.left
        }
        return null
    }
    componentDidUpdate() { }
    render() {
        return this.props.children
    }
}

function L6({
    children: n,
    isPresent: i,
    anchorX: l,
    root: s
}) {
    const u = C.useId(),
        f = C.useRef(null),
        d = C.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            right: 0
        }),
        {
            nonce: p
        } = C.useContext(Qd);
    return C.useInsertionEffect(() => {
        const {
            width: h,
            height: m,
            top: y,
            left: v,
            right: b
        } = d.current;
        if (i || !f.current || !h || !m) return;
        const x = l === "left" ? `left: ${v}` : `right: ${b}`;
        f.current.dataset.motionPopId = u;
        const T = document.createElement("style");
        p && (T.nonce = p);
        const D = s ?? document.head;
        return D.appendChild(T), T.sheet && T.sheet.insertRule(`
          [data-motion-pop-id="${u}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${m}px !important;
            ${x}px !important;
            top: ${y}px !important;
          }
        `), () => {
                D.contains(T) && D.removeChild(T)
            }
    }, [i]), w.jsx(N6, {
        isPresent: i,
        childRef: f,
        sizeRef: d,
        children: C.cloneElement(n, {
            ref: f
        })
    })
}
const z6 = ({
    children: n,
    initial: i,
    isPresent: l,
    onExitComplete: s,
    custom: u,
    presenceAffectsLayout: f,
    mode: d,
    anchorX: p,
    root: h
}) => {
    const m = Ed(V6),
        y = C.useId();
    let v = !0,
        b = C.useMemo(() => (v = !1, {
            id: y,
            initial: i,
            isPresent: l,
            custom: u,
            onExitComplete: x => {
                m.set(x, !0);
                for (const T of m.values())
                    if (!T) return;
                s && s()
            },
            register: x => (m.set(x, !1), () => m.delete(x))
        }), [l, m, s]);
    return f && v && (b = {
        ...b
    }), C.useMemo(() => {
        m.forEach((x, T) => m.set(T, !1))
    }, [l]), C.useEffect(() => {
        !l && !m.size && s && s()
    }, [l]), d === "popLayout" && (n = w.jsx(L6, {
        isPresent: l,
        anchorX: p,
        root: h,
        children: n
    })), w.jsx(Qo.Provider, {
        value: b,
        children: n
    })
};

function V6() {
    return new Map
}

function Sv(n = !0) {
    const i = C.useContext(Qo);
    if (i === null) return [!0, null];
    const {
        isPresent: l,
        onExitComplete: s,
        register: u
    } = i, f = C.useId();
    C.useEffect(() => {
        if (n) return u(f)
    }, [n]);
    const d = C.useCallback(() => n && s && s(f), [f, s, n]);
    return !l && s ? [!1, d] : [!0]
}
const fo = n => n.key || "";

function z1(n) {
    const i = [];
    return C.Children.forEach(n, l => {
        C.isValidElement(l) && i.push(l)
    }), i
}
const H6 = ({
    children: n,
    custom: i,
    initial: l = !0,
    onExitComplete: s,
    presenceAffectsLayout: u = !0,
    mode: f = "sync",
    propagate: d = !1,
    anchorX: p = "left",
    root: h
}) => {
    const [m, y] = Sv(d), v = C.useMemo(() => z1(n), [n]), b = d && !m ? [] : v.map(fo), x = C.useRef(!0), T = C.useRef(v), D = Ed(() => new Map), [O, E] = C.useState(v), [V, j] = C.useState(v);
    Cg(() => {
        x.current = !1, T.current = v;
        for (let M = 0; M < V.length; M++) {
            const G = fo(V[M]);
            b.includes(G) ? D.delete(G) : D.get(G) !== !0 && D.set(G, !1)
        }
    }, [V, b.length, b.join("-")]);
    const Q = [];
    if (v !== O) {
        let M = [...v];
        for (let G = 0; G < V.length; G++) {
            const Z = V[G],
                ee = fo(Z);
            b.includes(ee) || (M.splice(G, 0, Z), Q.push(Z))
        }
        return f === "wait" && Q.length && (M = Q), j(z1(M)), E(v), null
    }
    const {
        forceRender: U
    } = C.useContext(Td);
    return w.jsx(w.Fragment, {
        children: V.map(M => {
            const G = fo(M),
                Z = d && !m ? !1 : v === V || b.includes(G),
                ee = () => {
                    if (D.has(G)) D.set(G, !0);
                    else return;
                    let ie = !0;
                    D.forEach(ne => {
                        ne || (ie = !1)
                    }), ie && (U?.(), j(T.current), d && y?.(), s && s())
                };
            return w.jsx(z6, {
                isPresent: Z,
                initial: !x.current || l ? void 0 : !1,
                custom: i,
                presenceAffectsLayout: u,
                mode: f,
                root: h,
                onExitComplete: Z ? void 0 : ee,
                anchorX: p,
                children: M
            }, G)
        })
    })
},
    wv = C.createContext({
        strict: !1
    }),
    V1 = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    },
    dr = {};
for (const n in V1) dr[n] = {
    isEnabled: i => V1[n].some(l => !!i[l])
};

function U6(n) {
    for (const i in n) dr[i] = {
        ...dr[i],
        ...n[i]
    }
}
const B6 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function ko(n) {
    return n.startsWith("while") || n.startsWith("drag") && n !== "draggable" || n.startsWith("layout") || n.startsWith("onTap") || n.startsWith("onPan") || n.startsWith("onLayout") || B6.has(n)
}
let Tv = n => !ko(n);

function P6(n) {
    typeof n == "function" && (Tv = i => i.startsWith("on") ? !ko(i) : n(i))
}
try {
    P6(require("@emotion/is-prop-valid").default)
} catch { }

function k6(n, i, l) {
    const s = {};
    for (const u in n) u === "values" && typeof n.values == "object" || (Tv(u) || l === !0 && ko(u) || !i && !ko(u) || n.draggable && u.startsWith("onDrag")) && (s[u] = n[u]);
    return s
}
const Zo = C.createContext({});

function Fo(n) {
    return n !== null && typeof n == "object" && typeof n.start == "function"
}

function jl(n) {
    return typeof n == "string" || Array.isArray(n)
}
const Zd = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    Fd = ["initial", ...Zd];

function Io(n) {
    return Fo(n.animate) || Fd.some(i => jl(n[i]))
}

function Ev(n) {
    return !!(Io(n) || n.variants)
}

function q6(n, i) {
    if (Io(n)) {
        const {
            initial: l,
            animate: s
        } = n;
        return {
            initial: l === !1 || jl(l) ? l : void 0,
            animate: jl(s) ? s : void 0
        }
    }
    return n.inherit !== !1 ? i : {}
}

function Y6(n) {
    const {
        initial: i,
        animate: l
    } = q6(n, C.useContext(Zo));
    return C.useMemo(() => ({
        initial: i,
        animate: l
    }), [H1(i), H1(l)])
}

function H1(n) {
    return Array.isArray(n) ? n.join(" ") : n
}
const Nl = {};

function G6(n) {
    for (const i in n) Nl[i] = n[i], Nd(i) && (Nl[i].isCSSVariable = !0)
}

function Mv(n, {
    layout: i,
    layoutId: l
}) {
    return pr.has(n) || n.startsWith("origin") || (i || l !== void 0) && (!!Nl[n] || n === "opacity")
}
const X6 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
},
    K6 = mr.length;

function Q6(n, i, l) {
    let s = "",
        u = !0;
    for (let f = 0; f < K6; f++) {
        const d = mr[f],
            p = n[d];
        if (p === void 0) continue;
        let h = !0;
        if (typeof p == "number" ? h = p === (d.startsWith("scale") ? 1 : 0) : h = parseFloat(p) === 0, !h || l) {
            const m = pv(p, Gd[d]);
            if (!h) {
                u = !1;
                const y = X6[d] || d;
                s += `${y}(${m}) `
            }
            l && (i[d] = m)
        }
    }
    return s = s.trim(), l ? s = l(i, u ? "" : s) : u && (s = "none"), s
}

function Id(n, i, l) {
    const {
        style: s,
        vars: u,
        transformOrigin: f
    } = n;
    let d = !1,
        p = !1;
    for (const h in i) {
        const m = i[h];
        if (pr.has(h)) {
            d = !0;
            continue
        } else if (Nd(h)) {
            u[h] = m;
            continue
        } else {
            const y = pv(m, Gd[h]);
            h.startsWith("origin") ? (p = !0, f[h] = y) : s[h] = y
        }
    }
    if (i.transform || (d || l ? s.transform = Q6(i, n.transform, l) : s.transform && (s.transform = "none")), p) {
        const {
            originX: h = "50%",
            originY: m = "50%",
            originZ: y = 0
        } = f;
        s.transformOrigin = `${h} ${m} ${y}`
    }
}
const $d = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});

function Rv(n, i, l) {
    for (const s in i) !Nt(i[s]) && !Mv(s, l) && (n[s] = i[s])
}

function Z6({
    transformTemplate: n
}, i) {
    return C.useMemo(() => {
        const l = $d();
        return Id(l, i, n), Object.assign({}, l.vars, l.style)
    }, [i])
}

function F6(n, i) {
    const l = n.style || {},
        s = {};
    return Rv(s, l, n), Object.assign(s, Z6(n, i)), s
}

function I6(n, i) {
    const l = {},
        s = F6(n, i);
    return n.drag && n.dragListener !== !1 && (l.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`), n.tabIndex === void 0 && (n.onTap || n.onTapStart || n.whileTap) && (l.tabIndex = 0), l.style = s, l
}
const $6 = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
},
    J6 = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function W6(n, i, l = 1, s = 0, u = !0) {
    n.pathLength = 1;
    const f = u ? $6 : J6;
    n[f.offset] = Ae.transform(-s);
    const d = Ae.transform(i),
        p = Ae.transform(l);
    n[f.array] = `${d} ${p}`
}

function Av(n, {
    attrX: i,
    attrY: l,
    attrScale: s,
    pathLength: u,
    pathSpacing: f = 1,
    pathOffset: d = 0,
    ...p
}, h, m, y) {
    if (Id(n, p, m), h) {
        n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
        return
    }
    n.attrs = n.style, n.style = {};
    const {
        attrs: v,
        style: b
    } = n;
    v.transform && (b.transform = v.transform, delete v.transform), (b.transform || v.transformOrigin) && (b.transformOrigin = v.transformOrigin ?? "50% 50%", delete v.transformOrigin), b.transform && (b.transformBox = y?.transformBox ?? "fill-box", delete v.transformBox), i !== void 0 && (v.x = i), l !== void 0 && (v.y = l), s !== void 0 && (v.scale = s), u !== void 0 && W6(v, u, f, d, !1)
}
const Dv = () => ({
    ...$d(),
    attrs: {}
}),
    Ov = n => typeof n == "string" && n.toLowerCase() === "svg";

function eS(n, i, l, s) {
    const u = C.useMemo(() => {
        const f = Dv();
        return Av(f, i, Ov(s), n.transformTemplate, n.style), {
            ...f.attrs,
            style: {
                ...f.style
            }
        }
    }, [i]);
    if (n.style) {
        const f = {};
        Rv(f, n.style, n), u.style = {
            ...f,
            ...u.style
        }
    }
    return u
}
const tS = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Jd(n) {
    return typeof n != "string" || n.includes("-") ? !1 : !!(tS.indexOf(n) > -1 || /[A-Z]/u.test(n))
}

function nS(n, i, l, {
    latestValues: s
}, u, f = !1) {
    const p = (Jd(n) ? eS : I6)(i, s, u, n),
        h = k6(i, typeof n == "string", f),
        m = n !== C.Fragment ? {
            ...h,
            ...p,
            ref: l
        } : {},
        {
            children: y
        } = i,
        v = C.useMemo(() => Nt(y) ? y.get() : y, [y]);
    return C.createElement(n, {
        ...m,
        children: v
    })
}

function U1(n) {
    const i = [{}, {}];
    return n?.values.forEach((l, s) => {
        i[0][s] = l.get(), i[1][s] = l.getVelocity()
    }), i
}

function Wd(n, i, l, s) {
    if (typeof i == "function") {
        const [u, f] = U1(s);
        i = i(l !== void 0 ? l : n.custom, u, f)
    }
    if (typeof i == "string" && (i = n.variants && n.variants[i]), typeof i == "function") {
        const [u, f] = U1(s);
        i = i(l !== void 0 ? l : n.custom, u, f)
    }
    return i
}

function No(n) {
    return Nt(n) ? n.get() : n
}

function aS({
    scrapeMotionValuesFromProps: n,
    createRenderState: i
}, l, s, u) {
    return {
        latestValues: iS(l, s, u, n),
        renderState: i()
    }
}

function iS(n, i, l, s) {
    const u = {},
        f = s(n, {});
    for (const b in f) u[b] = No(f[b]);
    let {
        initial: d,
        animate: p
    } = n;
    const h = Io(n),
        m = Ev(n);
    i && m && !h && n.inherit !== !1 && (d === void 0 && (d = i.initial), p === void 0 && (p = i.animate));
    let y = l ? l.initial === !1 : !1;
    y = y || d === !1;
    const v = y ? p : d;
    if (v && typeof v != "boolean" && !Fo(v)) {
        const b = Array.isArray(v) ? v : [v];
        for (let x = 0; x < b.length; x++) {
            const T = Wd(n, b[x]);
            if (T) {
                const {
                    transitionEnd: D,
                    transition: O,
                    ...E
                } = T;
                for (const V in E) {
                    let j = E[V];
                    if (Array.isArray(j)) {
                        const Q = y ? j.length - 1 : 0;
                        j = j[Q]
                    }
                    j !== null && (u[V] = j)
                }
                for (const V in D) u[V] = D[V]
            }
        }
    }
    return u
}
const Cv = n => (i, l) => {
    const s = C.useContext(Zo),
        u = C.useContext(Qo),
        f = () => aS(n, i, s, u);
    return l ? f() : Ed(f)
};

function eh(n, i, l) {
    const {
        style: s
    } = n, u = {};
    for (const f in s) (Nt(s[f]) || i.style && Nt(i.style[f]) || Mv(f, n) || l?.getValue(f)?.liveStyle !== void 0) && (u[f] = s[f]);
    return u
}
const rS = Cv({
    scrapeMotionValuesFromProps: eh,
    createRenderState: $d
});

function _v(n, i, l) {
    const s = eh(n, i, l);
    for (const u in n)
        if (Nt(n[u]) || Nt(i[u])) {
            const f = mr.indexOf(u) !== -1 ? "attr" + u.charAt(0).toUpperCase() + u.substring(1) : u;
            s[f] = n[u]
        } return s
}
const lS = Cv({
    scrapeMotionValuesFromProps: _v,
    createRenderState: Dv
}),
    sS = Symbol.for("motionComponentSymbol");

function rr(n) {
    return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current")
}

function oS(n, i, l) {
    return C.useCallback(s => {
        s && n.onMount && n.onMount(s), i && (s ? i.mount(s) : i.unmount()), l && (typeof l == "function" ? l(s) : rr(l) && (l.current = s))
    }, [i])
}
const th = n => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    uS = "framerAppearId",
    jv = "data-" + th(uS),
    Nv = C.createContext({});

function cS(n, i, l, s, u) {
    const {
        visualElement: f
    } = C.useContext(Zo), d = C.useContext(wv), p = C.useContext(Qo), h = C.useContext(Qd).reducedMotion, m = C.useRef(null);
    s = s || d.renderer, !m.current && s && (m.current = s(n, {
        visualState: i,
        parent: f,
        props: l,
        presenceContext: p,
        blockInitialAnimation: p ? p.initial === !1 : !1,
        reducedMotionConfig: h
    }));
    const y = m.current,
        v = C.useContext(Nv);
    y && !y.projection && u && (y.type === "html" || y.type === "svg") && fS(m.current, l, u, v);
    const b = C.useRef(!1);
    C.useInsertionEffect(() => {
        y && b.current && y.update(l, p)
    });
    const x = l[jv],
        T = C.useRef(!!x && !window.MotionHandoffIsComplete?.(x) && window.MotionHasOptimisedAnimation?.(x));
    return Cg(() => {
        y && (b.current = !0, window.MotionIsMounted = !0, y.updateFeatures(), y.scheduleRenderMicrotask(), T.current && y.animationState && y.animationState.animateChanges())
    }), C.useEffect(() => {
        y && (!T.current && y.animationState && y.animationState.animateChanges(), T.current && (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(x)
        }), T.current = !1), y.enteringChildren = void 0)
    }), y
}

function fS(n, i, l, s) {
    const {
        layoutId: u,
        layout: f,
        drag: d,
        dragConstraints: p,
        layoutScroll: h,
        layoutRoot: m,
        layoutCrossfade: y
    } = i;
    n.projection = new l(n.latestValues, i["data-framer-portal-id"] ? void 0 : Lv(n.parent)), n.projection.setOptions({
        layoutId: u,
        layout: f,
        alwaysMeasureLayout: !!d || p && rr(p),
        visualElement: n,
        animationType: typeof f == "string" ? f : "both",
        initialPromotionConfig: s,
        crossfade: y,
        layoutScroll: h,
        layoutRoot: m
    })
}

function Lv(n) {
    if (n) return n.options.allowProjection !== !1 ? n.projection : Lv(n.parent)
}

function Mf(n, {
    forwardMotionProps: i = !1
} = {}, l, s) {
    l && U6(l);
    const u = Jd(n) ? lS : rS;

    function f(p, h) {
        let m;
        const y = {
            ...C.useContext(Qd),
            ...p,
            layoutId: dS(p)
        },
            {
                isStatic: v
            } = y,
            b = Y6(p),
            x = u(p, v);
        if (!v && Md) {
            hS();
            const T = mS(y);
            m = T.MeasureLayout, b.visualElement = cS(n, x, y, s, T.ProjectionNode)
        }
        return w.jsxs(Zo.Provider, {
            value: b,
            children: [m && b.visualElement ? w.jsx(m, {
                visualElement: b.visualElement,
                ...y
            }) : null, nS(n, p, oS(x, b.visualElement, h), x, v, i)]
        })
    }
    f.displayName = `motion.${typeof n == "string" ? n : `create(${n.displayName ?? n.name ?? ""})`}`;
    const d = C.forwardRef(f);
    return d[sS] = n, d
}

function dS({
    layoutId: n
}) {
    const i = C.useContext(Td).id;
    return i && n !== void 0 ? i + "-" + n : n
}

function hS(n, i) {
    C.useContext(wv).strict
}

function mS(n) {
    const {
        drag: i,
        layout: l
    } = dr;
    if (!i && !l) return {};
    const s = {
        ...i,
        ...l
    };
    return {
        MeasureLayout: i?.isEnabled(n) || l?.isEnabled(n) ? s.MeasureLayout : void 0,
        ProjectionNode: s.ProjectionNode
    }
}

function pS(n, i) {
    if (typeof Proxy > "u") return Mf;
    const l = new Map,
        s = (f, d) => Mf(f, d, n, i),
        u = (f, d) => s(f, d);
    return new Proxy(u, {
        get: (f, d) => d === "create" ? s : (l.has(d) || l.set(d, Mf(d, void 0, n, i)), l.get(d))
    })
}

function zv({
    top: n,
    left: i,
    right: l,
    bottom: s
}) {
    return {
        x: {
            min: i,
            max: l
        },
        y: {
            min: n,
            max: s
        }
    }
}

function yS({
    x: n,
    y: i
}) {
    return {
        top: i.min,
        right: n.max,
        bottom: i.max,
        left: n.min
    }
}

function gS(n, i) {
    if (!i) return n;
    const l = i({
        x: n.left,
        y: n.top
    }),
        s = i({
            x: n.right,
            y: n.bottom
        });
    return {
        top: l.y,
        left: l.x,
        bottom: s.y,
        right: s.x
    }
}

function Rf(n) {
    return n === void 0 || n === 1
}

function nd({
    scale: n,
    scaleX: i,
    scaleY: l
}) {
    return !Rf(n) || !Rf(i) || !Rf(l)
}

function fi(n) {
    return nd(n) || Vv(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY
}

function Vv(n) {
    return B1(n.x) || B1(n.y)
}

function B1(n) {
    return n && n !== "0%"
}

function qo(n, i, l) {
    const s = n - l,
        u = i * s;
    return l + u
}

function P1(n, i, l, s, u) {
    return u !== void 0 && (n = qo(n, u, s)), qo(n, l, s) + i
}

function ad(n, i = 0, l = 1, s, u) {
    n.min = P1(n.min, i, l, s, u), n.max = P1(n.max, i, l, s, u)
}

function Hv(n, {
    x: i,
    y: l
}) {
    ad(n.x, i.translate, i.scale, i.originPoint), ad(n.y, l.translate, l.scale, l.originPoint)
}
const k1 = .999999999999,
    q1 = 1.0000000000001;

function vS(n, i, l, s = !1) {
    const u = l.length;
    if (!u) return;
    i.x = i.y = 1;
    let f, d;
    for (let p = 0; p < u; p++) {
        f = l[p], d = f.projectionDelta;
        const {
            visualElement: h
        } = f.options;
        h && h.props.style && h.props.style.display === "contents" || (s && f.options.layoutScroll && f.scroll && f !== f.root && sr(n, {
            x: -f.scroll.offset.x,
            y: -f.scroll.offset.y
        }), d && (i.x *= d.x.scale, i.y *= d.y.scale, Hv(n, d)), s && fi(f.latestValues) && sr(n, f.latestValues))
    }
    i.x < q1 && i.x > k1 && (i.x = 1), i.y < q1 && i.y > k1 && (i.y = 1)
}

function lr(n, i) {
    n.min = n.min + i, n.max = n.max + i
}

function Y1(n, i, l, s, u = .5) {
    const f = rt(n.min, n.max, u);
    ad(n, i, l, f, s)
}

function sr(n, i) {
    Y1(n.x, i.x, i.scaleX, i.scale, i.originX), Y1(n.y, i.y, i.scaleY, i.scale, i.originY)
}

function Uv(n, i) {
    return zv(gS(n.getBoundingClientRect(), i))
}

function bS(n, i, l) {
    const s = Uv(n, l),
        {
            scroll: u
        } = i;
    return u && (lr(s.x, u.offset.x), lr(s.y, u.offset.y)), s
}
const G1 = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
}),
    or = () => ({
        x: G1(),
        y: G1()
    }),
    X1 = () => ({
        min: 0,
        max: 0
    }),
    mt = () => ({
        x: X1(),
        y: X1()
    }),
    id = {
        current: null
    },
    Bv = {
        current: !1
    };

function xS() {
    if (Bv.current = !0, !!Md)
        if (window.matchMedia) {
            const n = window.matchMedia("(prefers-reduced-motion)"),
                i = () => id.current = n.matches;
            n.addEventListener("change", i), i()
        } else id.current = !1
}
const SS = new WeakMap;

function wS(n, i, l) {
    for (const s in i) {
        const u = i[s],
            f = l[s];
        if (Nt(u)) n.addValue(s, u);
        else if (Nt(f)) n.addValue(s, fr(u, {
            owner: n
        }));
        else if (f !== u)
            if (n.hasValue(s)) {
                const d = n.getValue(s);
                d.liveStyle === !0 ? d.jump(u) : d.hasAnimated || d.set(u)
            } else {
                const d = n.getStaticValue(s);
                n.addValue(s, fr(d !== void 0 ? d : u, {
                    owner: n
                }))
            }
    }
    for (const s in l) i[s] === void 0 && n.removeValue(s);
    return i
}
const K1 = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class TS {
    scrapeMotionValuesFromProps(i, l, s) {
        return {}
    }
    constructor({
        parent: i,
        props: l,
        presenceContext: s,
        reducedMotionConfig: u,
        blockInitialAnimation: f,
        visualState: d
    }, p = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = qd, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const b = Yt.now();
            this.renderScheduledAt < b && (this.renderScheduledAt = b, tt.render(this.render, !1, !0))
        };
        const {
            latestValues: h,
            renderState: m
        } = d;
        this.latestValues = h, this.baseTarget = {
            ...h
        }, this.initialValues = l.initial ? {
            ...h
        } : {}, this.renderState = m, this.parent = i, this.props = l, this.presenceContext = s, this.depth = i ? i.depth + 1 : 0, this.reducedMotionConfig = u, this.options = p, this.blockInitialAnimation = !!f, this.isControllingVariants = Io(l), this.isVariantNode = Ev(l), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(i && i.current);
        const {
            willChange: y,
            ...v
        } = this.scrapeMotionValuesFromProps(l, {}, this);
        for (const b in v) {
            const x = v[b];
            h[b] !== void 0 && Nt(x) && x.set(h[b])
        }
    }
    mount(i) {
        this.current = i, SS.set(i, this), this.projection && !this.projection.instance && this.projection.mount(i), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((l, s) => this.bindToMotionValue(s, l)), Bv.current || xS(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : id.current, this.parent?.addChild(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        this.projection && this.projection.unmount(), Va(this.notifyUpdate), Va(this.render), this.valueSubscriptions.forEach(i => i()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
        for (const i in this.events) this.events[i].clear();
        for (const i in this.features) {
            const l = this.features[i];
            l && (l.unmount(), l.isMounted = !1)
        }
        this.current = null
    }
    addChild(i) {
        this.children.add(i), this.enteringChildren ?? (this.enteringChildren = new Set), this.enteringChildren.add(i)
    }
    removeChild(i) {
        this.children.delete(i), this.enteringChildren && this.enteringChildren.delete(i)
    }
    bindToMotionValue(i, l) {
        this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)();
        const s = pr.has(i);
        s && this.onBindTransform && this.onBindTransform();
        const u = l.on("change", d => {
            this.latestValues[i] = d, this.props.onUpdate && tt.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
        });
        let f;
        window.MotionCheckAppearSync && (f = window.MotionCheckAppearSync(this, i, l)), this.valueSubscriptions.set(i, () => {
            u(), f && f(), l.owner && l.stop()
        })
    }
    sortNodePosition(i) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== i.type ? 0 : this.sortInstanceNodePosition(this.current, i.current)
    }
    updateFeatures() {
        let i = "animation";
        for (i in dr) {
            const l = dr[i];
            if (!l) continue;
            const {
                isEnabled: s,
                Feature: u
            } = l;
            if (!this.features[i] && u && s(this.props) && (this.features[i] = new u(this)), this.features[i]) {
                const f = this.features[i];
                f.isMounted ? f.update() : (f.mount(), f.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : mt()
    }
    getStaticValue(i) {
        return this.latestValues[i]
    }
    setStaticValue(i, l) {
        this.latestValues[i] = l
    }
    update(i, l) {
        (i.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = i, this.prevPresenceContext = this.presenceContext, this.presenceContext = l;
        for (let s = 0; s < K1.length; s++) {
            const u = K1[s];
            this.propEventSubscriptions[u] && (this.propEventSubscriptions[u](), delete this.propEventSubscriptions[u]);
            const f = "on" + u,
                d = i[f];
            d && (this.propEventSubscriptions[u] = this.on(u, d))
        }
        this.prevMotionValues = wS(this, this.scrapeMotionValuesFromProps(i, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(i) {
        return this.props.variants ? this.props.variants[i] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(i) {
        const l = this.getClosestVariantNode();
        if (l) return l.variantChildren && l.variantChildren.add(i), () => l.variantChildren.delete(i)
    }
    addValue(i, l) {
        const s = this.values.get(i);
        l !== s && (s && this.removeValue(i), this.bindToMotionValue(i, l), this.values.set(i, l), this.latestValues[i] = l.get())
    }
    removeValue(i) {
        this.values.delete(i);
        const l = this.valueSubscriptions.get(i);
        l && (l(), this.valueSubscriptions.delete(i)), delete this.latestValues[i], this.removeValueFromRenderState(i, this.renderState)
    }
    hasValue(i) {
        return this.values.has(i)
    }
    getValue(i, l) {
        if (this.props.values && this.props.values[i]) return this.props.values[i];
        let s = this.values.get(i);
        return s === void 0 && l !== void 0 && (s = fr(l === null ? void 0 : l, {
            owner: this
        }), this.addValue(i, s)), s
    }
    readValue(i, l) {
        let s = this.latestValues[i] !== void 0 || !this.current ? this.latestValues[i] : this.getBaseTargetFromProps(this.props, i) ?? this.readValueFromInstance(this.current, i, this.options);
        return s != null && (typeof s == "string" && (_g(s) || Ng(s)) ? s = parseFloat(s) : !j6(s) && Ha.test(l) && (s = mv(i, l)), this.setBaseTarget(i, Nt(s) ? s.get() : s)), Nt(s) ? s.get() : s
    }
    setBaseTarget(i, l) {
        this.baseTarget[i] = l
    }
    getBaseTarget(i) {
        const {
            initial: l
        } = this.props;
        let s;
        if (typeof l == "string" || typeof l == "object") {
            const f = Wd(this.props, l, this.presenceContext?.custom);
            f && (s = f[i])
        }
        if (l && s !== void 0) return s;
        const u = this.getBaseTargetFromProps(this.props, i);
        return u !== void 0 && !Nt(u) ? u : this.initialValues[i] !== void 0 && s === void 0 ? void 0 : this.baseTarget[i]
    }
    on(i, l) {
        return this.events[i] || (this.events[i] = new Cd), this.events[i].add(l)
    }
    notify(i, ...l) {
        this.events[i] && this.events[i].notify(...l)
    }
    scheduleRenderMicrotask() {
        Xd.render(this.render)
    }
}
class Pv extends TS {
    constructor() {
        super(...arguments), this.KeyframeResolver = x6
    }
    sortInstanceNodePosition(i, l) {
        return i.compareDocumentPosition(l) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(i, l) {
        return i.style ? i.style[l] : void 0
    }
    removeValueFromRenderState(i, {
        vars: l,
        style: s
    }) {
        delete l[i], delete s[i]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: i
        } = this.props;
        Nt(i) && (this.childSubscription = i.on("change", l => {
            this.current && (this.current.textContent = `${l}`)
        }))
    }
}

function kv(n, {
    style: i,
    vars: l
}, s, u) {
    const f = n.style;
    let d;
    for (d in i) f[d] = i[d];
    u?.applyProjectionStyles(f, s);
    for (d in l) f.setProperty(d, l[d])
}

function ES(n) {
    return window.getComputedStyle(n)
}
class MS extends Pv {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = kv
    }
    readValueFromInstance(i, l) {
        if (pr.has(l)) return this.projection?.isProjecting ? Ff(l) : Bx(i, l);
        {
            const s = ES(i),
                u = (Nd(l) ? s.getPropertyValue(l) : s[l]) || 0;
            return typeof u == "string" ? u.trim() : u
        }
    }
    measureInstanceViewportBox(i, {
        transformPagePoint: l
    }) {
        return Uv(i, l)
    }
    build(i, l, s) {
        Id(i, l, s.transformTemplate)
    }
    scrapeMotionValuesFromProps(i, l, s) {
        return eh(i, l, s)
    }
}
const qv = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function RS(n, i, l, s) {
    kv(n, i, void 0, s);
    for (const u in i.attrs) n.setAttribute(qv.has(u) ? u : th(u), i.attrs[u])
}
class AS extends Pv {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = mt
    }
    getBaseTargetFromProps(i, l) {
        return i[l]
    }
    readValueFromInstance(i, l) {
        if (pr.has(l)) {
            const s = hv(l);
            return s && s.default || 0
        }
        return l = qv.has(l) ? l : th(l), i.getAttribute(l)
    }
    scrapeMotionValuesFromProps(i, l, s) {
        return _v(i, l, s)
    }
    build(i, l, s) {
        Av(i, l, this.isSVGTag, s.transformTemplate, s.style)
    }
    renderInstance(i, l, s, u) {
        RS(i, l, s, u)
    }
    mount(i) {
        this.isSVGTag = Ov(i.tagName), super.mount(i)
    }
}
const DS = (n, i) => Jd(n) ? new AS(i) : new MS(i, {
    allowProjection: n !== C.Fragment
});

function cr(n, i, l) {
    const s = n.getProps();
    return Wd(s, i, l !== void 0 ? l : s.custom, n)
}
const rd = n => Array.isArray(n);

function OS(n, i, l) {
    n.hasValue(i) ? n.getValue(i).set(l) : n.addValue(i, fr(l))
}

function CS(n) {
    return rd(n) ? n[n.length - 1] || 0 : n
}

function _S(n, i) {
    const l = cr(n, i);
    let {
        transitionEnd: s = {},
        transition: u = {},
        ...f
    } = l || {};
    f = {
        ...f,
        ...s
    };
    for (const d in f) {
        const p = CS(f[d]);
        OS(n, d, p)
    }
}

function jS(n) {
    return !!(Nt(n) && n.add)
}

function ld(n, i) {
    const l = n.getValue("willChange");
    if (jS(l)) return l.add(i);
    if (!l && ia.WillChange) {
        const s = new ia.WillChange("auto");
        n.addValue("willChange", s), s.add(i)
    }
}

function Yv(n) {
    return n.props[jv]
}
const NS = n => n !== null;

function LS(n, {
    repeat: i,
    repeatType: l = "loop"
}, s) {
    const u = n.filter(NS),
        f = i && l !== "loop" && i % 2 === 1 ? 0 : u.length - 1;
    return u[f]
}
const zS = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
},
    VS = n => ({
        type: "spring",
        stiffness: 550,
        damping: n === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    HS = {
        type: "keyframes",
        duration: .8
    },
    US = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    BS = (n, {
        keyframes: i
    }) => i.length > 2 ? HS : pr.has(n) ? n.startsWith("scale") ? VS(i[1]) : zS : US;

function PS({
    when: n,
    delay: i,
    delayChildren: l,
    staggerChildren: s,
    staggerDirection: u,
    repeat: f,
    repeatType: d,
    repeatDelay: p,
    from: h,
    elapsed: m,
    ...y
}) {
    return !!Object.keys(y).length
}
const nh = (n, i, l, s = {}, u, f) => d => {
    const p = Yd(s, n) || {},
        h = p.delay || s.delay || 0;
    let {
        elapsed: m = 0
    } = s;
    m = m - jn(h);
    const y = {
        keyframes: Array.isArray(l) ? l : [null, l],
        ease: "easeOut",
        velocity: i.getVelocity(),
        ...p,
        delay: -m,
        onUpdate: b => {
            i.set(b), p.onUpdate && p.onUpdate(b)
        },
        onComplete: () => {
            d(), p.onComplete && p.onComplete()
        },
        name: n,
        motionValue: i,
        element: f ? void 0 : u
    };
    PS(p) || Object.assign(y, BS(n, y)), y.duration && (y.duration = jn(y.duration)), y.repeatDelay && (y.repeatDelay = jn(y.repeatDelay)), y.from !== void 0 && (y.keyframes[0] = y.from);
    let v = !1;
    if ((y.type === !1 || y.duration === 0 && !y.repeatDelay) && (ed(y), y.delay === 0 && (v = !0)), (ia.instantAnimations || ia.skipAnimations) && (v = !0, ed(y), y.delay = 0), y.allowFlatten = !p.type && !p.ease, v && !f && i.get() !== void 0) {
        const b = LS(y.keyframes, p);
        if (b !== void 0) {
            tt.update(() => {
                y.onUpdate(b), y.onComplete()
            });
            return
        }
    }
    return p.isSync ? new kd(y) : new o6(y)
};

function kS({
    protectedKeys: n,
    needsAnimating: i
}, l) {
    const s = n.hasOwnProperty(l) && i[l] !== !0;
    return i[l] = !1, s
}

function Gv(n, i, {
    delay: l = 0,
    transitionOverride: s,
    type: u
} = {}) {
    let {
        transition: f = n.getDefaultTransition(),
        transitionEnd: d,
        ...p
    } = i;
    s && (f = s);
    const h = [],
        m = u && n.animationState && n.animationState.getState()[u];
    for (const y in p) {
        const v = n.getValue(y, n.latestValues[y] ?? null),
            b = p[y];
        if (b === void 0 || m && kS(m, y)) continue;
        const x = {
            delay: l,
            ...Yd(f || {}, y)
        },
            T = v.get();
        if (T !== void 0 && !v.isAnimating && !Array.isArray(b) && b === T && !x.velocity) continue;
        let D = !1;
        if (window.MotionHandoffAnimation) {
            const E = Yv(n);
            if (E) {
                const V = window.MotionHandoffAnimation(E, y, tt);
                V !== null && (x.startTime = V, D = !0)
            }
        }
        ld(n, y), v.start(nh(y, v, b, n.shouldReduceMotion && cv.has(y) ? {
            type: !1
        } : x, n, D));
        const O = v.animation;
        O && h.push(O)
    }
    return d && Promise.all(h).then(() => {
        tt.update(() => {
            d && _S(n, d)
        })
    }), h
}

function Xv(n, i, l, s = 0, u = 1) {
    const f = Array.from(n).sort((m, y) => m.sortNodePosition(y)).indexOf(i),
        d = n.size,
        p = (d - 1) * s;
    return typeof l == "function" ? l(f, d) : u === 1 ? f * s : p - f * s
}

function sd(n, i, l = {}) {
    const s = cr(n, i, l.type === "exit" ? n.presenceContext?.custom : void 0);
    let {
        transition: u = n.getDefaultTransition() || {}
    } = s || {};
    l.transitionOverride && (u = l.transitionOverride);
    const f = s ? () => Promise.all(Gv(n, s, l)) : () => Promise.resolve(),
        d = n.variantChildren && n.variantChildren.size ? (h = 0) => {
            const {
                delayChildren: m = 0,
                staggerChildren: y,
                staggerDirection: v
            } = u;
            return qS(n, i, h, m, y, v, l)
        } : () => Promise.resolve(),
        {
            when: p
        } = u;
    if (p) {
        const [h, m] = p === "beforeChildren" ? [f, d] : [d, f];
        return h().then(() => m())
    } else return Promise.all([f(), d(l.delay)])
}

function qS(n, i, l = 0, s = 0, u = 0, f = 1, d) {
    const p = [];
    for (const h of n.variantChildren) h.notify("AnimationStart", i), p.push(sd(h, i, {
        ...d,
        delay: l + (typeof s == "function" ? 0 : s) + Xv(n.variantChildren, h, s, u, f)
    }).then(() => h.notify("AnimationComplete", i)));
    return Promise.all(p)
}

function YS(n, i, l = {}) {
    n.notify("AnimationStart", i);
    let s;
    if (Array.isArray(i)) {
        const u = i.map(f => sd(n, f, l));
        s = Promise.all(u)
    } else if (typeof i == "string") s = sd(n, i, l);
    else {
        const u = typeof i == "function" ? cr(n, i, l.custom) : i;
        s = Promise.all(Gv(n, u, l))
    }
    return s.then(() => {
        n.notify("AnimationComplete", i)
    })
}

function Kv(n, i) {
    if (!Array.isArray(i)) return !1;
    const l = i.length;
    if (l !== n.length) return !1;
    for (let s = 0; s < l; s++)
        if (i[s] !== n[s]) return !1;
    return !0
}
const GS = Fd.length;

function Qv(n) {
    if (!n) return;
    if (!n.isControllingVariants) {
        const l = n.parent ? Qv(n.parent) || {} : {};
        return n.props.initial !== void 0 && (l.initial = n.props.initial), l
    }
    const i = {};
    for (let l = 0; l < GS; l++) {
        const s = Fd[l],
            u = n.props[s];
        (jl(u) || u === !1) && (i[s] = u)
    }
    return i
}
const XS = [...Zd].reverse(),
    KS = Zd.length;

function QS(n) {
    return i => Promise.all(i.map(({
        animation: l,
        options: s
    }) => YS(n, l, s)))
}

function ZS(n) {
    let i = QS(n),
        l = Q1(),
        s = !0;
    const u = h => (m, y) => {
        const v = cr(n, y, h === "exit" ? n.presenceContext?.custom : void 0);
        if (v) {
            const {
                transition: b,
                transitionEnd: x,
                ...T
            } = v;
            m = {
                ...m,
                ...T,
                ...x
            }
        }
        return m
    };

    function f(h) {
        i = h(n)
    }

    function d(h) {
        const {
            props: m
        } = n, y = Qv(n.parent) || {}, v = [], b = new Set;
        let x = {},
            T = 1 / 0;
        for (let O = 0; O < KS; O++) {
            const E = XS[O],
                V = l[E],
                j = m[E] !== void 0 ? m[E] : y[E],
                Q = jl(j),
                U = E === h ? V.isActive : null;
            U === !1 && (T = O);
            let M = j === y[E] && j !== m[E] && Q;
            if (M && s && n.manuallyAnimateOnMount && (M = !1), V.protectedKeys = {
                ...x
            }, !V.isActive && U === null || !j && !V.prevProp || Fo(j) || typeof j == "boolean") continue;
            const G = FS(V.prevProp, j);
            let Z = G || E === h && V.isActive && !M && Q || O > T && Q,
                ee = !1;
            const ie = Array.isArray(j) ? j : [j];
            let ne = ie.reduce(u(E), {});
            U === !1 && (ne = {});
            const {
                prevResolvedValues: K = {}
            } = V, se = {
                ...K,
                ...ne
            }, ae = $ => {
                Z = !0, b.has($) && (ee = !0, b.delete($)), V.needsAnimating[$] = !0;
                const oe = n.getValue($);
                oe && (oe.liveStyle = !1)
            };
            for (const $ in se) {
                const oe = ne[$],
                    ye = K[$];
                if (x.hasOwnProperty($)) continue;
                let A = !1;
                rd(oe) && rd(ye) ? A = !Kv(oe, ye) : A = oe !== ye, A ? oe != null ? ae($) : b.add($) : oe !== void 0 && b.has($) ? ae($) : V.protectedKeys[$] = !0
            }
            V.prevProp = j, V.prevResolvedValues = ne, V.isActive && (x = {
                ...x,
                ...ne
            }), s && n.blockInitialAnimation && (Z = !1);
            const be = M && G;
            Z && (!be || ee) && v.push(...ie.map($ => {
                const oe = {
                    type: E
                };
                if (typeof $ == "string" && s && !be && n.manuallyAnimateOnMount && n.parent) {
                    const {
                        parent: ye
                    } = n, A = cr(ye, $);
                    if (ye.enteringChildren && A) {
                        const {
                            delayChildren: F
                        } = A.transition || {};
                        oe.delay = Xv(ye.enteringChildren, n, F)
                    }
                }
                return {
                    animation: $,
                    options: oe
                }
            }))
        }
        if (b.size) {
            const O = {};
            if (typeof m.initial != "boolean") {
                const E = cr(n, Array.isArray(m.initial) ? m.initial[0] : m.initial);
                E && E.transition && (O.transition = E.transition)
            }
            b.forEach(E => {
                const V = n.getBaseTarget(E),
                    j = n.getValue(E);
                j && (j.liveStyle = !0), O[E] = V ?? null
            }), v.push({
                animation: O
            })
        }
        let D = !!v.length;
        return s && (m.initial === !1 || m.initial === m.animate) && !n.manuallyAnimateOnMount && (D = !1), s = !1, D ? i(v) : Promise.resolve()
    }

    function p(h, m) {
        if (l[h].isActive === m) return Promise.resolve();
        n.variantChildren?.forEach(v => v.animationState?.setActive(h, m)), l[h].isActive = m;
        const y = d(h);
        for (const v in l) l[v].protectedKeys = {};
        return y
    }
    return {
        animateChanges: d,
        setActive: p,
        setAnimateFunction: f,
        getState: () => l,
        reset: () => {
            l = Q1(), s = !0
        }
    }
}

function FS(n, i) {
    return typeof i == "string" ? i !== n : Array.isArray(i) ? !Kv(i, n) : !1
}

function ci(n = !1) {
    return {
        isActive: n,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function Q1() {
    return {
        animate: ci(!0),
        whileInView: ci(),
        whileHover: ci(),
        whileTap: ci(),
        whileDrag: ci(),
        whileFocus: ci(),
        exit: ci()
    }
}
class Pa {
    constructor(i) {
        this.isMounted = !1, this.node = i
    }
    update() { }
}
class IS extends Pa {
    constructor(i) {
        super(i), i.animationState || (i.animationState = ZS(i))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: i
        } = this.node.getProps();
        Fo(i) && (this.unmountControls = i.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: i
        } = this.node.getProps(), {
            animate: l
        } = this.node.prevProps || {};
        i !== l && this.updateAnimationControlsSubscription()
    }
    unmount() {
        this.node.animationState.reset(), this.unmountControls?.()
    }
}
let $S = 0;
class JS extends Pa {
    constructor() {
        super(...arguments), this.id = $S++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: i,
            onExitComplete: l
        } = this.node.presenceContext, {
            isPresent: s
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || i === s) return;
        const u = this.node.animationState.setActive("exit", !i);
        l && !i && u.then(() => {
            l(this.id)
        })
    }
    mount() {
        const {
            register: i,
            onExitComplete: l
        } = this.node.presenceContext || {};
        l && l(this.id), i && (this.unmount = i(this.id))
    }
    unmount() { }
}
const WS = {
    animation: {
        Feature: IS
    },
    exit: {
        Feature: JS
    }
};

function Ll(n, i, l, s = {
    passive: !0
}) {
    return n.addEventListener(i, l, s), () => n.removeEventListener(i, l)
}

function ql(n) {
    return {
        point: {
            x: n.pageX,
            y: n.pageY
        }
    }
}
const ew = n => i => Kd(i) && n(i, ql(i));

function Tl(n, i, l, s) {
    return Ll(n, i, ew(l), s)
}
const Zv = 1e-4,
    tw = 1 - Zv,
    nw = 1 + Zv,
    Fv = .01,
    aw = 0 - Fv,
    iw = 0 + Fv;

function Vt(n) {
    return n.max - n.min
}

function rw(n, i, l) {
    return Math.abs(n - i) <= l
}

function Z1(n, i, l, s = .5) {
    n.origin = s, n.originPoint = rt(i.min, i.max, n.origin), n.scale = Vt(l) / Vt(i), n.translate = rt(l.min, l.max, n.origin) - n.originPoint, (n.scale >= tw && n.scale <= nw || isNaN(n.scale)) && (n.scale = 1), (n.translate >= aw && n.translate <= iw || isNaN(n.translate)) && (n.translate = 0)
}

function El(n, i, l, s) {
    Z1(n.x, i.x, l.x, s ? s.originX : void 0), Z1(n.y, i.y, l.y, s ? s.originY : void 0)
}

function F1(n, i, l) {
    n.min = l.min + i.min, n.max = n.min + Vt(i)
}

function lw(n, i, l) {
    F1(n.x, i.x, l.x), F1(n.y, i.y, l.y)
}

function I1(n, i, l) {
    n.min = i.min - l.min, n.max = n.min + Vt(i)
}

function Ml(n, i, l) {
    I1(n.x, i.x, l.x), I1(n.y, i.y, l.y)
}

function hn(n) {
    return [n("x"), n("y")]
}
const Iv = ({
    current: n
}) => n ? n.ownerDocument.defaultView : null,
    $1 = (n, i) => Math.abs(n - i);

function sw(n, i) {
    const l = $1(n.x, i.x),
        s = $1(n.y, i.y);
    return Math.sqrt(l ** 2 + s ** 2)
}
class $v {
    constructor(i, l, {
        transformPagePoint: s,
        contextWindow: u = window,
        dragSnapToOrigin: f = !1,
        distanceThreshold: d = 3
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            const b = Df(this.lastMoveEventInfo, this.history),
                x = this.startEvent !== null,
                T = sw(b.offset, {
                    x: 0,
                    y: 0
                }) >= this.distanceThreshold;
            if (!x && !T) return;
            const {
                point: D
            } = b, {
                timestamp: O
            } = Ct;
            this.history.push({
                ...D,
                timestamp: O
            });
            const {
                onStart: E,
                onMove: V
            } = this.handlers;
            x || (E && E(this.lastMoveEvent, b), this.startEvent = this.lastMoveEvent), V && V(this.lastMoveEvent, b)
        }, this.handlePointerMove = (b, x) => {
            this.lastMoveEvent = b, this.lastMoveEventInfo = Af(x, this.transformPagePoint), tt.update(this.updatePoint, !0)
        }, this.handlePointerUp = (b, x) => {
            this.end();
            const {
                onEnd: T,
                onSessionEnd: D,
                resumeAnimation: O
            } = this.handlers;
            if (this.dragSnapToOrigin && O && O(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            const E = Df(b.type === "pointercancel" ? this.lastMoveEventInfo : Af(x, this.transformPagePoint), this.history);
            this.startEvent && T && T(b, E), D && D(b, E)
        }, !Kd(i)) return;
        this.dragSnapToOrigin = f, this.handlers = l, this.transformPagePoint = s, this.distanceThreshold = d, this.contextWindow = u || window;
        const p = ql(i),
            h = Af(p, this.transformPagePoint),
            {
                point: m
            } = h,
            {
                timestamp: y
            } = Ct;
        this.history = [{
            ...m,
            timestamp: y
        }];
        const {
            onSessionStart: v
        } = l;
        v && v(i, Df(h, this.history)), this.removeListeners = Bl(Tl(this.contextWindow, "pointermove", this.handlePointerMove), Tl(this.contextWindow, "pointerup", this.handlePointerUp), Tl(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(i) {
        this.handlers = i
    }
    end() {
        this.removeListeners && this.removeListeners(), Va(this.updatePoint)
    }
}

function Af(n, i) {
    return i ? {
        point: i(n.point)
    } : n
}

function J1(n, i) {
    return {
        x: n.x - i.x,
        y: n.y - i.y
    }
}

function Df({
    point: n
}, i) {
    return {
        point: n,
        delta: J1(n, Jv(i)),
        offset: J1(n, ow(i)),
        velocity: uw(i, .1)
    }
}

function ow(n) {
    return n[0]
}

function Jv(n) {
    return n[n.length - 1]
}

function uw(n, i) {
    if (n.length < 2) return {
        x: 0,
        y: 0
    };
    let l = n.length - 1,
        s = null;
    const u = Jv(n);
    for (; l >= 0 && (s = n[l], !(u.timestamp - s.timestamp > jn(i)));) l--;
    if (!s) return {
        x: 0,
        y: 0
    };
    const f = Nn(u.timestamp - s.timestamp);
    if (f === 0) return {
        x: 0,
        y: 0
    };
    const d = {
        x: (u.x - s.x) / f,
        y: (u.y - s.y) / f
    };
    return d.x === 1 / 0 && (d.x = 0), d.y === 1 / 0 && (d.y = 0), d
}

function cw(n, {
    min: i,
    max: l
}, s) {
    return i !== void 0 && n < i ? n = s ? rt(i, n, s.min) : Math.max(n, i) : l !== void 0 && n > l && (n = s ? rt(l, n, s.max) : Math.min(n, l)), n
}

function W1(n, i, l) {
    return {
        min: i !== void 0 ? n.min + i : void 0,
        max: l !== void 0 ? n.max + l - (n.max - n.min) : void 0
    }
}

function fw(n, {
    top: i,
    left: l,
    bottom: s,
    right: u
}) {
    return {
        x: W1(n.x, l, u),
        y: W1(n.y, i, s)
    }
}

function ey(n, i) {
    let l = i.min - n.min,
        s = i.max - n.max;
    return i.max - i.min < n.max - n.min && ([l, s] = [s, l]), {
        min: l,
        max: s
    }
}

function dw(n, i) {
    return {
        x: ey(n.x, i.x),
        y: ey(n.y, i.y)
    }
}

function hw(n, i) {
    let l = .5;
    const s = Vt(n),
        u = Vt(i);
    return u > s ? l = Ol(i.min, i.max - s, n.min) : s > u && (l = Ol(n.min, n.max - u, i.min)), aa(0, 1, l)
}

function mw(n, i) {
    const l = {};
    return i.min !== void 0 && (l.min = i.min - n.min), i.max !== void 0 && (l.max = i.max - n.min), l
}
const od = .35;

function pw(n = od) {
    return n === !1 ? n = 0 : n === !0 && (n = od), {
        x: ty(n, "left", "right"),
        y: ty(n, "top", "bottom")
    }
}

function ty(n, i, l) {
    return {
        min: ny(n, i),
        max: ny(n, l)
    }
}

function ny(n, i) {
    return typeof n == "number" ? n : n[i] || 0
}
const yw = new WeakMap;
class gw {
    constructor(i) {
        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = mt(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = i
    }
    start(i, {
        snapToCursor: l = !1,
        distanceThreshold: s
    } = {}) {
        const {
            presenceContext: u
        } = this.visualElement;
        if (u && u.isPresent === !1) return;
        const f = v => {
            const {
                dragSnapToOrigin: b
            } = this.getProps();
            b ? this.pauseAnimation() : this.stopAnimation(), l && this.snapToCursor(ql(v).point)
        },
            d = (v, b) => {
                const {
                    drag: x,
                    dragPropagation: T,
                    onDragStart: D
                } = this.getProps();
                if (x && !T && (this.openDragLock && this.openDragLock(), this.openDragLock = E6(x), !this.openDragLock)) return;
                this.latestPointerEvent = v, this.latestPanInfo = b, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), hn(E => {
                    let V = this.getAxisMotionValue(E).get() || 0;
                    if (Ln.test(V)) {
                        const {
                            projection: j
                        } = this.visualElement;
                        if (j && j.layout) {
                            const Q = j.layout.layoutBox[E];
                            Q && (V = Vt(Q) * (parseFloat(V) / 100))
                        }
                    }
                    this.originPoint[E] = V
                }), D && tt.postRender(() => D(v, b)), ld(this.visualElement, "transform");
                const {
                    animationState: O
                } = this.visualElement;
                O && O.setActive("whileDrag", !0)
            },
            p = (v, b) => {
                this.latestPointerEvent = v, this.latestPanInfo = b;
                const {
                    dragPropagation: x,
                    dragDirectionLock: T,
                    onDirectionLock: D,
                    onDrag: O
                } = this.getProps();
                if (!x && !this.openDragLock) return;
                const {
                    offset: E
                } = b;
                if (T && this.currentDirection === null) {
                    this.currentDirection = vw(E), this.currentDirection !== null && D && D(this.currentDirection);
                    return
                }
                this.updateAxis("x", b.point, E), this.updateAxis("y", b.point, E), this.visualElement.render(), O && O(v, b)
            },
            h = (v, b) => {
                this.latestPointerEvent = v, this.latestPanInfo = b, this.stop(v, b), this.latestPointerEvent = null, this.latestPanInfo = null
            },
            m = () => hn(v => this.getAnimationState(v) === "paused" && this.getAxisMotionValue(v).animation?.play()),
            {
                dragSnapToOrigin: y
            } = this.getProps();
        this.panSession = new $v(i, {
            onSessionStart: f,
            onStart: d,
            onMove: p,
            onSessionEnd: h,
            resumeAnimation: m
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: y,
            distanceThreshold: s,
            contextWindow: Iv(this.visualElement)
        })
    }
    stop(i, l) {
        const s = i || this.latestPointerEvent,
            u = l || this.latestPanInfo,
            f = this.isDragging;
        if (this.cancel(), !f || !u || !s) return;
        const {
            velocity: d
        } = u;
        this.startAnimation(d);
        const {
            onDragEnd: p
        } = this.getProps();
        p && tt.postRender(() => p(s, u))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: i,
            animationState: l
        } = this.visualElement;
        i && (i.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: s
        } = this.getProps();
        !s && this.openDragLock && (this.openDragLock(), this.openDragLock = null), l && l.setActive("whileDrag", !1)
    }
    updateAxis(i, l, s) {
        const {
            drag: u
        } = this.getProps();
        if (!s || !ho(i, u, this.currentDirection)) return;
        const f = this.getAxisMotionValue(i);
        let d = this.originPoint[i] + s[i];
        this.constraints && this.constraints[i] && (d = cw(d, this.constraints[i], this.elastic[i])), f.set(d)
    }
    resolveConstraints() {
        const {
            dragConstraints: i,
            dragElastic: l
        } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, u = this.constraints;
        i && rr(i) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : i && s ? this.constraints = fw(s.layoutBox, i) : this.constraints = !1, this.elastic = pw(l), u !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && hn(f => {
            this.constraints !== !1 && this.getAxisMotionValue(f) && (this.constraints[f] = mw(s.layoutBox[f], this.constraints[f]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: i,
            onMeasureDragConstraints: l
        } = this.getProps();
        if (!i || !rr(i)) return !1;
        const s = i.current,
            {
                projection: u
            } = this.visualElement;
        if (!u || !u.layout) return !1;
        const f = bS(s, u.root, this.visualElement.getTransformPagePoint());
        let d = dw(u.layout.layoutBox, f);
        if (l) {
            const p = l(yS(d));
            this.hasMutatedConstraints = !!p, p && (d = zv(p))
        }
        return d
    }
    startAnimation(i) {
        const {
            drag: l,
            dragMomentum: s,
            dragElastic: u,
            dragTransition: f,
            dragSnapToOrigin: d,
            onDragTransitionEnd: p
        } = this.getProps(), h = this.constraints || {}, m = hn(y => {
            if (!ho(y, l, this.currentDirection)) return;
            let v = h && h[y] || {};
            d && (v = {
                min: 0,
                max: 0
            });
            const b = u ? 200 : 1e6,
                x = u ? 40 : 1e7,
                T = {
                    type: "inertia",
                    velocity: s ? i[y] : 0,
                    bounceStiffness: b,
                    bounceDamping: x,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...f,
                    ...v
                };
            return this.startAxisValueAnimation(y, T)
        });
        return Promise.all(m).then(p)
    }
    startAxisValueAnimation(i, l) {
        const s = this.getAxisMotionValue(i);
        return ld(this.visualElement, i), s.start(nh(i, s, 0, l, this.visualElement, !1))
    }
    stopAnimation() {
        hn(i => this.getAxisMotionValue(i).stop())
    }
    pauseAnimation() {
        hn(i => this.getAxisMotionValue(i).animation?.pause())
    }
    getAnimationState(i) {
        return this.getAxisMotionValue(i).animation?.state
    }
    getAxisMotionValue(i) {
        const l = `_drag${i.toUpperCase()}`,
            s = this.visualElement.getProps(),
            u = s[l];
        return u || this.visualElement.getValue(i, (s.initial ? s.initial[i] : void 0) || 0)
    }
    snapToCursor(i) {
        hn(l => {
            const {
                drag: s
            } = this.getProps();
            if (!ho(l, s, this.currentDirection)) return;
            const {
                projection: u
            } = this.visualElement, f = this.getAxisMotionValue(l);
            if (u && u.layout) {
                const {
                    min: d,
                    max: p
                } = u.layout.layoutBox[l];
                f.set(i[l] - rt(d, p, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: i,
            dragConstraints: l
        } = this.getProps(), {
            projection: s
        } = this.visualElement;
        if (!rr(l) || !s || !this.constraints) return;
        this.stopAnimation();
        const u = {
            x: 0,
            y: 0
        };
        hn(d => {
            const p = this.getAxisMotionValue(d);
            if (p && this.constraints !== !1) {
                const h = p.get();
                u[d] = hw({
                    min: h,
                    max: h
                }, this.constraints[d])
            }
        });
        const {
            transformTemplate: f
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = f ? f({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.resolveConstraints(), hn(d => {
            if (!ho(d, i, null)) return;
            const p = this.getAxisMotionValue(d),
                {
                    min: h,
                    max: m
                } = this.constraints[d];
            p.set(rt(h, m, u[d]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        yw.set(this.visualElement, this);
        const i = this.visualElement.current,
            l = Tl(i, "pointerdown", h => {
                const {
                    drag: m,
                    dragListener: y = !0
                } = this.getProps();
                m && y && this.start(h)
            }),
            s = () => {
                const {
                    dragConstraints: h
                } = this.getProps();
                rr(h) && h.current && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: u
            } = this.visualElement,
            f = u.addEventListener("measure", s);
        u && !u.layout && (u.root && u.root.updateScroll(), u.updateLayout()), tt.read(s);
        const d = Ll(window, "resize", () => this.scalePositionWithinConstraints()),
            p = u.addEventListener("didUpdate", ({
                delta: h,
                hasLayoutChanged: m
            }) => {
                this.isDragging && m && (hn(y => {
                    const v = this.getAxisMotionValue(y);
                    v && (this.originPoint[y] += h[y].translate, v.set(v.get() + h[y].translate))
                }), this.visualElement.render())
            });
        return () => {
            d(), l(), f(), p && p()
        }
    }
    getProps() {
        const i = this.visualElement.getProps(),
            {
                drag: l = !1,
                dragDirectionLock: s = !1,
                dragPropagation: u = !1,
                dragConstraints: f = !1,
                dragElastic: d = od,
                dragMomentum: p = !0
            } = i;
        return {
            ...i,
            drag: l,
            dragDirectionLock: s,
            dragPropagation: u,
            dragConstraints: f,
            dragElastic: d,
            dragMomentum: p
        }
    }
}

function ho(n, i, l) {
    return (i === !0 || i === n) && (l === null || l === n)
}

function vw(n, i = 10) {
    let l = null;
    return Math.abs(n.y) > i ? l = "y" : Math.abs(n.x) > i && (l = "x"), l
}
class bw extends Pa {
    constructor(i) {
        super(i), this.removeGroupControls = pn, this.removeListeners = pn, this.controls = new gw(i)
    }
    mount() {
        const {
            dragControls: i
        } = this.node.getProps();
        i && (this.removeGroupControls = i.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || pn
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const ay = n => (i, l) => {
    n && tt.postRender(() => n(i, l))
};
class xw extends Pa {
    constructor() {
        super(...arguments), this.removePointerDownListener = pn
    }
    onPointerDown(i) {
        this.session = new $v(i, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Iv(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: i,
            onPanStart: l,
            onPan: s,
            onPanEnd: u
        } = this.node.getProps();
        return {
            onSessionStart: ay(i),
            onStart: ay(l),
            onMove: s,
            onEnd: (f, d) => {
                delete this.session, u && tt.postRender(() => u(f, d))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Tl(this.node.current, "pointerdown", i => this.onPointerDown(i))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
const Lo = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};

function iy(n, i) {
    return i.max === i.min ? 0 : n / (i.max - i.min) * 100
}
const gl = {
    correct: (n, i) => {
        if (!i.target) return n;
        if (typeof n == "string")
            if (Ae.test(n)) n = parseFloat(n);
            else return n;
        const l = iy(n, i.target.x),
            s = iy(n, i.target.y);
        return `${l}% ${s}%`
    }
},
    Sw = {
        correct: (n, {
            treeScale: i,
            projectionDelta: l
        }) => {
            const s = n,
                u = Ha.parse(n);
            if (u.length > 5) return s;
            const f = Ha.createTransformer(n),
                d = typeof u[0] != "number" ? 1 : 0,
                p = l.x.scale * i.x,
                h = l.y.scale * i.y;
            u[0 + d] /= p, u[1 + d] /= h;
            const m = rt(p, h, .5);
            return typeof u[2 + d] == "number" && (u[2 + d] /= m), typeof u[3 + d] == "number" && (u[3 + d] /= m), f(u)
        }
    };
let Of = !1;
class ww extends C.Component {
    componentDidMount() {
        const {
            visualElement: i,
            layoutGroup: l,
            switchLayoutGroup: s,
            layoutId: u
        } = this.props, {
            projection: f
        } = i;
        G6(Tw), f && (l.group && l.group.add(f), s && s.register && u && s.register(f), Of && f.root.didUpdate(), f.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), f.setOptions({
            ...f.options,
            onExitComplete: () => this.safeToRemove()
        })), Lo.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(i) {
        const {
            layoutDependency: l,
            visualElement: s,
            drag: u,
            isPresent: f
        } = this.props, {
            projection: d
        } = s;
        return d && (d.isPresent = f, Of = !0, u || i.layoutDependency !== l || l === void 0 || i.isPresent !== f ? d.willUpdate() : this.safeToRemove(), i.isPresent !== f && (f ? d.promote() : d.relegate() || tt.postRender(() => {
            const p = d.getStack();
            (!p || !p.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: i
        } = this.props.visualElement;
        i && (i.root.didUpdate(), Xd.postRender(() => {
            !i.currentAnimation && i.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: i,
            layoutGroup: l,
            switchLayoutGroup: s
        } = this.props, {
            projection: u
        } = i;
        Of = !0, u && (u.scheduleCheckAfterUnmount(), l && l.group && l.group.remove(u), s && s.deregister && s.deregister(u))
    }
    safeToRemove() {
        const {
            safeToRemove: i
        } = this.props;
        i && i()
    }
    render() {
        return null
    }
}

function Wv(n) {
    const [i, l] = Sv(), s = C.useContext(Td);
    return w.jsx(ww, {
        ...n,
        layoutGroup: s,
        switchLayoutGroup: C.useContext(Nv),
        isPresent: i,
        safeToRemove: l
    })
}
const Tw = {
    borderRadius: {
        ...gl,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: gl,
    borderTopRightRadius: gl,
    borderBottomLeftRadius: gl,
    borderBottomRightRadius: gl,
    boxShadow: Sw
};

function Ew(n, i, l) {
    const s = Nt(n) ? n : fr(n);
    return s.start(nh("", s, i, l)), s.animation
}
const Mw = (n, i) => n.depth - i.depth;
class Rw {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(i) {
        Rd(this.children, i), this.isDirty = !0
    }
    remove(i) {
        Ad(this.children, i), this.isDirty = !0
    }
    forEach(i) {
        this.isDirty && this.children.sort(Mw), this.isDirty = !1, this.children.forEach(i)
    }
}

function Aw(n, i) {
    const l = Yt.now(),
        s = ({
            timestamp: u
        }) => {
            const f = u - l;
            f >= i && (Va(s), n(f - i))
        };
    return tt.setup(s, !0), () => Va(s)
}
const e2 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    Dw = e2.length,
    ry = n => typeof n == "string" ? parseFloat(n) : n,
    ly = n => typeof n == "number" || Ae.test(n);

function Ow(n, i, l, s, u, f) {
    u ? (n.opacity = rt(0, l.opacity ?? 1, Cw(s)), n.opacityExit = rt(i.opacity ?? 1, 0, _w(s))) : f && (n.opacity = rt(i.opacity ?? 1, l.opacity ?? 1, s));
    for (let d = 0; d < Dw; d++) {
        const p = `border${e2[d]}Radius`;
        let h = sy(i, p),
            m = sy(l, p);
        if (h === void 0 && m === void 0) continue;
        h || (h = 0), m || (m = 0), h === 0 || m === 0 || ly(h) === ly(m) ? (n[p] = Math.max(rt(ry(h), ry(m), s), 0), (Ln.test(m) || Ln.test(h)) && (n[p] += "%")) : n[p] = m
    } (i.rotate || l.rotate) && (n.rotate = rt(i.rotate || 0, l.rotate || 0, s))
}

function sy(n, i) {
    return n[i] !== void 0 ? n[i] : n.borderRadius
}
const Cw = t2(0, .5, kg),
    _w = t2(.5, .95, pn);

function t2(n, i, l) {
    return s => s < n ? 0 : s > i ? 1 : l(Ol(n, i, s))
}

function oy(n, i) {
    n.min = i.min, n.max = i.max
}

function dn(n, i) {
    oy(n.x, i.x), oy(n.y, i.y)
}

function uy(n, i) {
    n.translate = i.translate, n.scale = i.scale, n.originPoint = i.originPoint, n.origin = i.origin
}

function cy(n, i, l, s, u) {
    return n -= i, n = qo(n, 1 / l, s), u !== void 0 && (n = qo(n, 1 / u, s)), n
}

function jw(n, i = 0, l = 1, s = .5, u, f = n, d = n) {
    if (Ln.test(i) && (i = parseFloat(i), i = rt(d.min, d.max, i / 100) - d.min), typeof i != "number") return;
    let p = rt(f.min, f.max, s);
    n === f && (p -= i), n.min = cy(n.min, i, l, p, u), n.max = cy(n.max, i, l, p, u)
}

function fy(n, i, [l, s, u], f, d) {
    jw(n, i[l], i[s], i[u], i.scale, f, d)
}
const Nw = ["x", "scaleX", "originX"],
    Lw = ["y", "scaleY", "originY"];

function dy(n, i, l, s) {
    fy(n.x, i, Nw, l ? l.x : void 0, s ? s.x : void 0), fy(n.y, i, Lw, l ? l.y : void 0, s ? s.y : void 0)
}

function hy(n) {
    return n.translate === 0 && n.scale === 1
}

function n2(n) {
    return hy(n.x) && hy(n.y)
}

function my(n, i) {
    return n.min === i.min && n.max === i.max
}

function zw(n, i) {
    return my(n.x, i.x) && my(n.y, i.y)
}

function py(n, i) {
    return Math.round(n.min) === Math.round(i.min) && Math.round(n.max) === Math.round(i.max)
}

function a2(n, i) {
    return py(n.x, i.x) && py(n.y, i.y)
}

function yy(n) {
    return Vt(n.x) / Vt(n.y)
}

function gy(n, i) {
    return n.translate === i.translate && n.scale === i.scale && n.originPoint === i.originPoint
}
class Vw {
    constructor() {
        this.members = []
    }
    add(i) {
        Rd(this.members, i), i.scheduleRender()
    }
    remove(i) {
        if (Ad(this.members, i), i === this.prevLead && (this.prevLead = void 0), i === this.lead) {
            const l = this.members[this.members.length - 1];
            l && this.promote(l)
        }
    }
    relegate(i) {
        const l = this.members.findIndex(u => i === u);
        if (l === 0) return !1;
        let s;
        for (let u = l; u >= 0; u--) {
            const f = this.members[u];
            if (f.isPresent !== !1) {
                s = f;
                break
            }
        }
        return s ? (this.promote(s), !0) : !1
    }
    promote(i, l) {
        const s = this.lead;
        if (i !== s && (this.prevLead = s, this.lead = i, i.show(), s)) {
            s.instance && s.scheduleRender(), i.scheduleRender(), i.resumeFrom = s, l && (i.resumeFrom.preserveOpacity = !0), s.snapshot && (i.snapshot = s.snapshot, i.snapshot.latestValues = s.animationValues || s.latestValues), i.root && i.root.isUpdating && (i.isLayoutDirty = !0);
            const {
                crossfade: u
            } = i.options;
            u === !1 && s.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(i => {
            const {
                options: l,
                resumingFrom: s
            } = i;
            l.onExitComplete && l.onExitComplete(), s && s.options.onExitComplete && s.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(i => {
            i.instance && i.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function Hw(n, i, l) {
    let s = "";
    const u = n.x.translate / i.x,
        f = n.y.translate / i.y,
        d = l?.z || 0;
    if ((u || f || d) && (s = `translate3d(${u}px, ${f}px, ${d}px) `), (i.x !== 1 || i.y !== 1) && (s += `scale(${1 / i.x}, ${1 / i.y}) `), l) {
        const {
            transformPerspective: m,
            rotate: y,
            rotateX: v,
            rotateY: b,
            skewX: x,
            skewY: T
        } = l;
        m && (s = `perspective(${m}px) ${s}`), y && (s += `rotate(${y}deg) `), v && (s += `rotateX(${v}deg) `), b && (s += `rotateY(${b}deg) `), x && (s += `skewX(${x}deg) `), T && (s += `skewY(${T}deg) `)
    }
    const p = n.x.scale * i.x,
        h = n.y.scale * i.y;
    return (p !== 1 || h !== 1) && (s += `scale(${p}, ${h})`), s || "none"
}
const Cf = ["", "X", "Y", "Z"],
    Uw = 1e3;
let Bw = 0;

function _f(n, i, l, s) {
    const {
        latestValues: u
    } = i;
    u[n] && (l[n] = u[n], i.setStaticValue(n, 0), s && (s[n] = 0))
}

function i2(n) {
    if (n.hasCheckedOptimisedAppear = !0, n.root === n) return;
    const {
        visualElement: i
    } = n.options;
    if (!i) return;
    const l = Yv(i);
    if (window.MotionHasOptimisedAnimation(l, "transform")) {
        const {
            layout: u,
            layoutId: f
        } = n.options;
        window.MotionCancelOptimisedAnimation(l, "transform", tt, !(u || f))
    }
    const {
        parent: s
    } = n;
    s && !s.hasCheckedOptimisedAppear && i2(s)
}

function r2({
    attachResizeListener: n,
    defaultParent: i,
    measureScroll: l,
    checkIsScrollRoot: s,
    resetTransform: u
}) {
    return class {
        constructor(d = {}, p = i?.()) {
            this.id = Bw++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, this.nodes.forEach(qw), this.nodes.forEach(Kw), this.nodes.forEach(Qw), this.nodes.forEach(Yw)
            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = d, this.root = p ? p.root || p : this, this.path = p ? [...p.path, p] : [], this.parent = p, this.depth = p ? p.depth + 1 : 0;
            for (let h = 0; h < this.path.length; h++) this.path[h].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Rw)
        }
        addEventListener(d, p) {
            return this.eventHandlers.has(d) || this.eventHandlers.set(d, new Cd), this.eventHandlers.get(d).add(p)
        }
        notifyListeners(d, ...p) {
            const h = this.eventHandlers.get(d);
            h && h.notify(...p)
        }
        hasListeners(d) {
            return this.eventHandlers.has(d)
        }
        mount(d) {
            if (this.instance) return;
            this.isSVG = xv(d) && !C6(d), this.instance = d;
            const {
                layoutId: p,
                layout: h,
                visualElement: m
            } = this.options;
            if (m && !m.current && m.mount(d), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (h || p) && (this.isLayoutDirty = !0), n) {
                let y, v = 0;
                const b = () => this.root.updateBlockedByResize = !1;
                tt.read(() => {
                    v = window.innerWidth
                }), n(d, () => {
                    const x = window.innerWidth;
                    x !== v && (v = x, this.root.updateBlockedByResize = !0, y && y(), y = Aw(b, 250), Lo.hasAnimatedSinceResize && (Lo.hasAnimatedSinceResize = !1, this.nodes.forEach(xy)))
                })
            }
            p && this.root.registerSharedNode(p, this), this.options.animate !== !1 && m && (p || h) && this.addEventListener("didUpdate", ({
                delta: y,
                hasLayoutChanged: v,
                hasRelativeLayoutChanged: b,
                layout: x
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const T = this.options.transition || m.getDefaultTransition() || Jw,
                    {
                        onLayoutAnimationStart: D,
                        onLayoutAnimationComplete: O
                    } = m.getProps(),
                    E = !this.targetLayout || !a2(this.targetLayout, x),
                    V = !v && b;
                if (this.options.layoutRoot || this.resumeFrom || V || v && (E || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                    const j = {
                        ...Yd(T, "layout"),
                        onPlay: D,
                        onComplete: O
                    };
                    (m.shouldReduceMotion || this.options.layoutRoot) && (j.delay = 0, j.type = !1), this.startAnimation(j), this.setAnimationOrigin(y, V)
                } else v || xy(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = x
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const d = this.getStack();
            d && d.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Va(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Zw), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: d
            } = this.options;
            return d && d.getProps().transformTemplate
        }
        willUpdate(d = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && i2(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let y = 0; y < this.path.length; y++) {
                const v = this.path[y];
                v.shouldResetTransform = !0, v.updateScroll("snapshot"), v.options.layoutRoot && v.willUpdate(!1)
            }
            const {
                layoutId: p,
                layout: h
            } = this.options;
            if (p === void 0 && !h) return;
            const m = this.getTransformTemplate();
            this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0, this.updateSnapshot(), d && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(vy);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(by);
                return
            }
            this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Xw), this.nodes.forEach(Pw), this.nodes.forEach(kw)) : this.nodes.forEach(by), this.clearAllSnapshots();
            const p = Yt.now();
            Ct.delta = aa(0, 1e3 / 60, p - Ct.timestamp), Ct.timestamp = p, Ct.isProcessing = !0, bf.update.process(Ct), bf.preRender.process(Ct), bf.render.process(Ct), Ct.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, Xd.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(Gw), this.sharedNodes.forEach(Fw)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, tt.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            tt.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Vt(this.snapshot.measuredBox.x) && !Vt(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let h = 0; h < this.path.length; h++) this.path[h].updateScroll();
            const d = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = mt(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: p
            } = this.options;
            p && p.notify("LayoutMeasure", this.layout.layoutBox, d ? d.layoutBox : void 0)
        }
        updateScroll(d = "measure") {
            let p = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === d && (p = !1), p && this.instance) {
                const h = s(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: d,
                    isRoot: h,
                    offset: l(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : h
                }
            }
        }
        resetTransform() {
            if (!u) return;
            const d = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                p = this.projectionDelta && !n2(this.projectionDelta),
                h = this.getTransformTemplate(),
                m = h ? h(this.latestValues, "") : void 0,
                y = m !== this.prevTransformTemplateValue;
            d && this.instance && (p || fi(this.latestValues) || y) && (u(this.instance, m), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(d = !0) {
            const p = this.measurePageBox();
            let h = this.removeElementScroll(p);
            return d && (h = this.removeTransform(h)), Ww(h), {
                animationId: this.root.animationId,
                measuredBox: p,
                layoutBox: h,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {
                visualElement: d
            } = this.options;
            if (!d) return mt();
            const p = d.measureViewportBox();
            if (!(this.scroll?.wasRoot || this.path.some(e8))) {
                const {
                    scroll: m
                } = this.root;
                m && (lr(p.x, m.offset.x), lr(p.y, m.offset.y))
            }
            return p
        }
        removeElementScroll(d) {
            const p = mt();
            if (dn(p, d), this.scroll?.wasRoot) return p;
            for (let h = 0; h < this.path.length; h++) {
                const m = this.path[h],
                    {
                        scroll: y,
                        options: v
                    } = m;
                m !== this.root && y && v.layoutScroll && (y.wasRoot && dn(p, d), lr(p.x, y.offset.x), lr(p.y, y.offset.y))
            }
            return p
        }
        applyTransform(d, p = !1) {
            const h = mt();
            dn(h, d);
            for (let m = 0; m < this.path.length; m++) {
                const y = this.path[m];
                !p && y.options.layoutScroll && y.scroll && y !== y.root && sr(h, {
                    x: -y.scroll.offset.x,
                    y: -y.scroll.offset.y
                }), fi(y.latestValues) && sr(h, y.latestValues)
            }
            return fi(this.latestValues) && sr(h, this.latestValues), h
        }
        removeTransform(d) {
            const p = mt();
            dn(p, d);
            for (let h = 0; h < this.path.length; h++) {
                const m = this.path[h];
                if (!m.instance || !fi(m.latestValues)) continue;
                nd(m.latestValues) && m.updateSnapshot();
                const y = mt(),
                    v = m.measurePageBox();
                dn(y, v), dy(p, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, y)
            }
            return fi(this.latestValues) && dy(p, this.latestValues), p
        }
        setTargetDelta(d) {
            this.targetDelta = d, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(d) {
            this.options = {
                ...this.options,
                ...d,
                crossfade: d.crossfade !== void 0 ? d.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ct.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(d = !1) {
            const p = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = p.isSharedProjectionDirty);
            const h = !!this.resumingFrom || this !== p;
            if (!(d || h && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: y,
                layoutId: v
            } = this.options;
            if (!(!this.layout || !(y || v))) {
                if (this.resolvedRelativeTargetAt = Ct.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const b = this.getClosestProjectingParent();
                    b && b.layout && this.animationProgress !== 1 ? (this.relativeParent = b, this.forceRelativeParentToResolveTarget(), this.relativeTarget = mt(), this.relativeTargetOrigin = mt(), Ml(this.relativeTargetOrigin, this.layout.layoutBox, b.layout.layoutBox), dn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = mt(), this.targetWithTransforms = mt()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), lw(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : dn(this.target, this.layout.layoutBox), Hv(this.target, this.targetDelta)) : dn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                    this.attemptToResolveRelativeTarget = !1;
                    const b = this.getClosestProjectingParent();
                    b && !!b.resumingFrom == !!this.resumingFrom && !b.options.layoutScroll && b.target && this.animationProgress !== 1 ? (this.relativeParent = b, this.forceRelativeParentToResolveTarget(), this.relativeTarget = mt(), this.relativeTargetOrigin = mt(), Ml(this.relativeTargetOrigin, this.target, b.target), dn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || nd(this.parent.latestValues) || Vv(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            const d = this.getLead(),
                p = !!this.resumingFrom || this !== d;
            let h = !0;
            if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (h = !1), p && (this.isSharedProjectionDirty || this.isTransformDirty) && (h = !1), this.resolvedRelativeTargetAt === Ct.timestamp && (h = !1), h) return;
            const {
                layout: m,
                layoutId: y
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(m || y)) return;
            dn(this.layoutCorrected, this.layout.layoutBox);
            const v = this.treeScale.x,
                b = this.treeScale.y;
            vS(this.layoutCorrected, this.treeScale, this.path, p), d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox, d.targetWithTransforms = mt());
            const {
                target: x
            } = d;
            if (!x) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            } !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (uy(this.prevProjectionDelta.x, this.projectionDelta.x), uy(this.prevProjectionDelta.y, this.projectionDelta.y)), El(this.projectionDelta, this.layoutCorrected, x, this.latestValues), (this.treeScale.x !== v || this.treeScale.y !== b || !gy(this.projectionDelta.x, this.prevProjectionDelta.x) || !gy(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", x))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(d = !0) {
            if (this.options.visualElement?.scheduleRender(), d) {
                const p = this.getStack();
                p && p.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = or(), this.projectionDelta = or(), this.projectionDeltaWithTransform = or()
        }
        setAnimationOrigin(d, p = !1) {
            const h = this.snapshot,
                m = h ? h.latestValues : {},
                y = {
                    ...this.latestValues
                },
                v = or();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !p;
            const b = mt(),
                x = h ? h.source : void 0,
                T = this.layout ? this.layout.source : void 0,
                D = x !== T,
                O = this.getStack(),
                E = !O || O.members.length <= 1,
                V = !!(D && !E && this.options.crossfade === !0 && !this.path.some($w));
            this.animationProgress = 0;
            let j;
            this.mixTargetDelta = Q => {
                const U = Q / 1e3;
                Sy(v.x, d.x, U), Sy(v.y, d.y, U), this.setTargetDelta(v), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ml(b, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Iw(this.relativeTarget, this.relativeTargetOrigin, b, U), j && zw(this.relativeTarget, j) && (this.isProjectionDirty = !1), j || (j = mt()), dn(j, this.relativeTarget)), D && (this.animationValues = y, Ow(y, m, this.latestValues, U, V, E)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = U
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(d) {
            this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (Va(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = tt.update(() => {
                Lo.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = fr(0)), this.currentAnimation = Ew(this.motionValue, [0, 1e3], {
                    ...d,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: p => {
                        this.mixTargetDelta(p), d.onUpdate && d.onUpdate(p)
                    },
                    onStop: () => { },
                    onComplete: () => {
                        d.onComplete && d.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const d = this.getStack();
            d && d.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Uw), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const d = this.getLead();
            let {
                targetWithTransforms: p,
                target: h,
                layout: m,
                latestValues: y
            } = d;
            if (!(!p || !h || !m)) {
                if (this !== d && this.layout && m && l2(this.options.animationType, this.layout.layoutBox, m.layoutBox)) {
                    h = this.target || mt();
                    const v = Vt(this.layout.layoutBox.x);
                    h.x.min = d.target.x.min, h.x.max = h.x.min + v;
                    const b = Vt(this.layout.layoutBox.y);
                    h.y.min = d.target.y.min, h.y.max = h.y.min + b
                }
                dn(p, h), sr(p, y), El(this.projectionDeltaWithTransform, this.layoutCorrected, p, y)
            }
        }
        registerSharedNode(d, p) {
            this.sharedNodes.has(d) || this.sharedNodes.set(d, new Vw), this.sharedNodes.get(d).add(p);
            const m = p.options.initialPromotionConfig;
            p.promote({
                transition: m ? m.transition : void 0,
                preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(p) : void 0
            })
        }
        isLead() {
            const d = this.getStack();
            return d ? d.lead === this : !0
        }
        getLead() {
            const {
                layoutId: d
            } = this.options;
            return d ? this.getStack()?.lead || this : this
        }
        getPrevLead() {
            const {
                layoutId: d
            } = this.options;
            return d ? this.getStack()?.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: d
            } = this.options;
            if (d) return this.root.sharedNodes.get(d)
        }
        promote({
            needsReset: d,
            transition: p,
            preserveFollowOpacity: h
        } = {}) {
            const m = this.getStack();
            m && m.promote(this, h), d && (this.projectionDelta = void 0, this.needsReset = !0), p && this.setOptions({
                transition: p
            })
        }
        relegate() {
            const d = this.getStack();
            return d ? d.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: d
            } = this.options;
            if (!d) return;
            let p = !1;
            const {
                latestValues: h
            } = d;
            if ((h.z || h.rotate || h.rotateX || h.rotateY || h.rotateZ || h.skewX || h.skewY) && (p = !0), !p) return;
            const m = {};
            h.z && _f("z", d, m, this.animationValues);
            for (let y = 0; y < Cf.length; y++) _f(`rotate${Cf[y]}`, d, m, this.animationValues), _f(`skew${Cf[y]}`, d, m, this.animationValues);
            d.render();
            for (const y in m) d.setStaticValue(y, m[y]), this.animationValues && (this.animationValues[y] = m[y]);
            d.scheduleRender()
        }
        applyProjectionStyles(d, p) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) {
                d.visibility = "hidden";
                return
            }
            const h = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1, d.visibility = "", d.opacity = "", d.pointerEvents = No(p?.pointerEvents) || "", d.transform = h ? h(this.latestValues, "") : "none";
                return
            }
            const m = this.getLead();
            if (!this.projectionDelta || !this.layout || !m.target) {
                this.options.layoutId && (d.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, d.pointerEvents = No(p?.pointerEvents) || ""), this.hasProjected && !fi(this.latestValues) && (d.transform = h ? h({}, "") : "none", this.hasProjected = !1);
                return
            }
            d.visibility = "";
            const y = m.animationValues || m.latestValues;
            this.applyTransformsToTarget();
            let v = Hw(this.projectionDeltaWithTransform, this.treeScale, y);
            h && (v = h(y, v)), d.transform = v;
            const {
                x: b,
                y: x
            } = this.projectionDelta;
            d.transformOrigin = `${b.origin * 100}% ${x.origin * 100}% 0`, m.animationValues ? d.opacity = m === this ? y.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : y.opacityExit : d.opacity = m === this ? y.opacity !== void 0 ? y.opacity : "" : y.opacityExit !== void 0 ? y.opacityExit : 0;
            for (const T in Nl) {
                if (y[T] === void 0) continue;
                const {
                    correct: D,
                    applyTo: O,
                    isCSSVariable: E
                } = Nl[T], V = v === "none" ? y[T] : D(y[T], m);
                if (O) {
                    const j = O.length;
                    for (let Q = 0; Q < j; Q++) d[O[Q]] = V
                } else E ? this.options.visualElement.renderState.vars[T] = V : d[T] = V
            }
            this.options.layoutId && (d.pointerEvents = m === this ? No(p?.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(d => d.currentAnimation?.stop()), this.root.nodes.forEach(vy), this.root.sharedNodes.clear()
        }
    }
}

function Pw(n) {
    n.updateLayout()
}

function kw(n) {
    const i = n.resumeFrom?.snapshot || n.snapshot;
    if (n.isLead() && n.layout && i && n.hasListeners("didUpdate")) {
        const {
            layoutBox: l,
            measuredBox: s
        } = n.layout, {
            animationType: u
        } = n.options, f = i.source !== n.layout.source;
        u === "size" ? hn(y => {
            const v = f ? i.measuredBox[y] : i.layoutBox[y],
                b = Vt(v);
            v.min = l[y].min, v.max = v.min + b
        }) : l2(u, i.layoutBox, l) && hn(y => {
            const v = f ? i.measuredBox[y] : i.layoutBox[y],
                b = Vt(l[y]);
            v.max = v.min + b, n.relativeTarget && !n.currentAnimation && (n.isProjectionDirty = !0, n.relativeTarget[y].max = n.relativeTarget[y].min + b)
        });
        const d = or();
        El(d, l, i.layoutBox);
        const p = or();
        f ? El(p, n.applyTransform(s, !0), i.measuredBox) : El(p, l, i.layoutBox);
        const h = !n2(d);
        let m = !1;
        if (!n.resumeFrom) {
            const y = n.getClosestProjectingParent();
            if (y && !y.resumeFrom) {
                const {
                    snapshot: v,
                    layout: b
                } = y;
                if (v && b) {
                    const x = mt();
                    Ml(x, i.layoutBox, v.layoutBox);
                    const T = mt();
                    Ml(T, l, b.layoutBox), a2(x, T) || (m = !0), y.options.layoutRoot && (n.relativeTarget = T, n.relativeTargetOrigin = x, n.relativeParent = y)
                }
            }
        }
        n.notifyListeners("didUpdate", {
            layout: l,
            snapshot: i,
            delta: p,
            layoutDelta: d,
            hasLayoutChanged: h,
            hasRelativeLayoutChanged: m
        })
    } else if (n.isLead()) {
        const {
            onExitComplete: l
        } = n.options;
        l && l()
    }
    n.options.transition = void 0
}

function qw(n) {
    n.parent && (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty), n.isSharedProjectionDirty || (n.isSharedProjectionDirty = !!(n.isProjectionDirty || n.parent.isProjectionDirty || n.parent.isSharedProjectionDirty)), n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty))
}

function Yw(n) {
    n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1
}

function Gw(n) {
    n.clearSnapshot()
}

function vy(n) {
    n.clearMeasurements()
}

function by(n) {
    n.isLayoutDirty = !1
}

function Xw(n) {
    const {
        visualElement: i
    } = n.options;
    i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"), n.resetTransform()
}

function xy(n) {
    n.finishAnimation(), n.targetDelta = n.relativeTarget = n.target = void 0, n.isProjectionDirty = !0
}

function Kw(n) {
    n.resolveTargetDelta()
}

function Qw(n) {
    n.calcProjection()
}

function Zw(n) {
    n.resetSkewAndRotation()
}

function Fw(n) {
    n.removeLeadSnapshot()
}

function Sy(n, i, l) {
    n.translate = rt(i.translate, 0, l), n.scale = rt(i.scale, 1, l), n.origin = i.origin, n.originPoint = i.originPoint
}

function wy(n, i, l, s) {
    n.min = rt(i.min, l.min, s), n.max = rt(i.max, l.max, s)
}

function Iw(n, i, l, s) {
    wy(n.x, i.x, l.x, s), wy(n.y, i.y, l.y, s)
}

function $w(n) {
    return n.animationValues && n.animationValues.opacityExit !== void 0
}
const Jw = {
    duration: .45,
    ease: [.4, 0, .1, 1]
},
    Ty = n => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n),
    Ey = Ty("applewebkit/") && !Ty("chrome/") ? Math.round : pn;

function My(n) {
    n.min = Ey(n.min), n.max = Ey(n.max)
}

function Ww(n) {
    My(n.x), My(n.y)
}

function l2(n, i, l) {
    return n === "position" || n === "preserve-aspect" && !rw(yy(i), yy(l), .2)
}

function e8(n) {
    return n !== n.root && n.scroll?.wasRoot
}
const t8 = r2({
    attachResizeListener: (n, i) => Ll(n, "resize", i),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
}),
    jf = {
        current: void 0
    },
    s2 = r2({
        measureScroll: n => ({
            x: n.scrollLeft,
            y: n.scrollTop
        }),
        defaultParent: () => {
            if (!jf.current) {
                const n = new t8({});
                n.mount(window), n.setOptions({
                    layoutScroll: !0
                }), jf.current = n
            }
            return jf.current
        },
        resetTransform: (n, i) => {
            n.style.transform = i !== void 0 ? i : "none"
        },
        checkIsScrollRoot: n => window.getComputedStyle(n).position === "fixed"
    }),
    n8 = {
        pan: {
            Feature: xw
        },
        drag: {
            Feature: bw,
            ProjectionNode: s2,
            MeasureLayout: Wv
        }
    };

function Ry(n, i, l) {
    const {
        props: s
    } = n;
    n.animationState && s.whileHover && n.animationState.setActive("whileHover", l === "Start");
    const u = "onHover" + l,
        f = s[u];
    f && tt.postRender(() => f(i, ql(i)))
}
class a8 extends Pa {
    mount() {
        const {
            current: i
        } = this.node;
        i && (this.unmount = M6(i, (l, s) => (Ry(this.node, s, "Start"), u => Ry(this.node, u, "End"))))
    }
    unmount() { }
}
class i8 extends Pa {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let i = !1;
        try {
            i = this.node.current.matches(":focus-visible")
        } catch {
            i = !0
        } !i || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = Bl(Ll(this.node.current, "focus", () => this.onFocus()), Ll(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() { }
}

function Ay(n, i, l) {
    const {
        props: s
    } = n;
    if (n.current instanceof HTMLButtonElement && n.current.disabled) return;
    n.animationState && s.whileTap && n.animationState.setActive("whileTap", l === "Start");
    const u = "onTap" + (l === "End" ? "" : l),
        f = s[u];
    f && tt.postRender(() => f(i, ql(i)))
}
class r8 extends Pa {
    mount() {
        const {
            current: i
        } = this.node;
        i && (this.unmount = O6(i, (l, s) => (Ay(this.node, s, "Start"), (u, {
            success: f
        }) => Ay(this.node, u, f ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() { }
}
const ud = new WeakMap,
    Nf = new WeakMap,
    l8 = n => {
        const i = ud.get(n.target);
        i && i(n)
    },
    s8 = n => {
        n.forEach(l8)
    };

function o8({
    root: n,
    ...i
}) {
    const l = n || document;
    Nf.has(l) || Nf.set(l, {});
    const s = Nf.get(l),
        u = JSON.stringify(i);
    return s[u] || (s[u] = new IntersectionObserver(s8, {
        root: n,
        ...i
    })), s[u]
}

function u8(n, i, l) {
    const s = o8(i);
    return ud.set(n, l), s.observe(n), () => {
        ud.delete(n), s.unobserve(n)
    }
}
const c8 = {
    some: 0,
    all: 1
};
class f8 extends Pa {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: i = {}
        } = this.node.getProps(), {
            root: l,
            margin: s,
            amount: u = "some",
            once: f
        } = i, d = {
            root: l ? l.current : void 0,
            rootMargin: s,
            threshold: typeof u == "number" ? u : c8[u]
        }, p = h => {
            const {
                isIntersecting: m
            } = h;
            if (this.isInView === m || (this.isInView = m, f && !m && this.hasEnteredView)) return;
            m && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", m);
            const {
                onViewportEnter: y,
                onViewportLeave: v
            } = this.node.getProps(), b = m ? y : v;
            b && b(h)
        };
        return u8(this.node.current, d, p)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: i,
            prevProps: l
        } = this.node;
        ["amount", "margin", "root"].some(d8(i, l)) && this.startObserver()
    }
    unmount() { }
}

function d8({
    viewport: n = {}
}, {
    viewport: i = {}
} = {}) {
    return l => n[l] !== i[l]
}
const h8 = {
    inView: {
        Feature: f8
    },
    tap: {
        Feature: r8
    },
    focus: {
        Feature: i8
    },
    hover: {
        Feature: a8
    }
},
    m8 = {
        layout: {
            ProjectionNode: s2,
            MeasureLayout: Wv
        }
    },
    p8 = {
        ...WS,
        ...h8,
        ...n8,
        ...m8
    },
    L = pS(p8, DS);

function y8({
    title: n,
    titleId: i,
    ...l
}, s) {
    return C.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": i
    }, l), n ? C.createElement("title", {
        id: i
    }, n) : null, C.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    }))
}
const g8 = C.forwardRef(y8);

function v8({
    title: n,
    titleId: i,
    ...l
}, s) {
    return C.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": i
    }, l), n ? C.createElement("title", {
        id: i
    }, n) : null, C.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
    }))
}
const Dy = C.forwardRef(v8);

function b8({
    title: n,
    titleId: i,
    ...l
}, s) {
    return C.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": i
    }, l), n ? C.createElement("title", {
        id: i
    }, n) : null, C.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
    }), C.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    }))
}
const Oy = C.forwardRef(b8);

function x8({
    title: n,
    titleId: i,
    ...l
}, s) {
    return C.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": i
    }, l), n ? C.createElement("title", {
        id: i
    }, n) : null, C.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6 18 18 6M6 6l12 12"
    }))
}
const S8 = C.forwardRef(x8);
var et = {},
    mo = {},
    po = {},
    yo = {},
    Lf, Cy;

function w8() {
    if (Cy) return Lf;
    Cy = 1;
    var n = "Expected a function",
        i = NaN,
        l = "[object Symbol]",
        s = /^\s+|\s+$/g,
        u = /^[-+]0x[0-9a-f]+$/i,
        f = /^0b[01]+$/i,
        d = /^0o[0-7]+$/i,
        p = parseInt,
        h = typeof lo == "object" && lo && lo.Object === Object && lo,
        m = typeof self == "object" && self && self.Object === Object && self,
        y = h || m || Function("return this")(),
        v = Object.prototype,
        b = v.toString,
        x = Math.max,
        T = Math.min,
        D = function () {
            return y.Date.now()
        };

    function O(M, G, Z) {
        var ee, ie, ne, K, se, ae, be = 0,
            H = !1,
            $ = !1,
            oe = !0;
        if (typeof M != "function") throw new TypeError(n);
        G = U(G) || 0, V(Z) && (H = !!Z.leading, $ = "maxWait" in Z, ne = $ ? x(U(Z.maxWait) || 0, G) : ne, oe = "trailing" in Z ? !!Z.trailing : oe);

        function ye(Me) {
            var lt = ee,
                Ge = ie;
            return ee = ie = void 0, be = Me, K = M.apply(Ge, lt), K
        }

        function A(Me) {
            return be = Me, se = setTimeout(re, G), H ? ye(Me) : K
        }

        function F(Me) {
            var lt = Me - ae,
                Ge = Me - be,
                Mt = G - lt;
            return $ ? T(Mt, ne - Ge) : Mt
        }

        function ue(Me) {
            var lt = Me - ae,
                Ge = Me - be;
            return ae === void 0 || lt >= G || lt < 0 || $ && Ge >= ne
        }

        function re() {
            var Me = D();
            if (ue(Me)) return ce(Me);
            se = setTimeout(re, F(Me))
        }

        function ce(Me) {
            return se = void 0, oe && ee ? ye(Me) : (ee = ie = void 0, K)
        }

        function Oe() {
            se !== void 0 && clearTimeout(se), be = 0, ee = ae = ie = se = void 0
        }

        function Se() {
            return se === void 0 ? K : ce(D())
        }

        function Je() {
            var Me = D(),
                lt = ue(Me);
            if (ee = arguments, ie = this, ae = Me, lt) {
                if (se === void 0) return A(ae);
                if ($) return se = setTimeout(re, G), ye(ae)
            }
            return se === void 0 && (se = setTimeout(re, G)), K
        }
        return Je.cancel = Oe, Je.flush = Se, Je
    }

    function E(M, G, Z) {
        var ee = !0,
            ie = !0;
        if (typeof M != "function") throw new TypeError(n);
        return V(Z) && (ee = "leading" in Z ? !!Z.leading : ee, ie = "trailing" in Z ? !!Z.trailing : ie), O(M, G, {
            leading: ee,
            maxWait: G,
            trailing: ie
        })
    }

    function V(M) {
        var G = typeof M;
        return !!M && (G == "object" || G == "function")
    }

    function j(M) {
        return !!M && typeof M == "object"
    }

    function Q(M) {
        return typeof M == "symbol" || j(M) && b.call(M) == l
    }

    function U(M) {
        if (typeof M == "number") return M;
        if (Q(M)) return i;
        if (V(M)) {
            var G = typeof M.valueOf == "function" ? M.valueOf() : M;
            M = V(G) ? G + "" : G
        }
        if (typeof M != "string") return M === 0 ? M : +M;
        M = M.replace(s, "");
        var Z = f.test(M);
        return Z || d.test(M) ? p(M.slice(2), Z ? 2 : 8) : u.test(M) ? i : +M
    }
    return Lf = E, Lf
}
var vl = {},
    _y;

function ah() {
    if (_y) return vl;
    _y = 1, Object.defineProperty(vl, "__esModule", {
        value: !0
    }), vl.addPassiveEventListener = function (l, s, u) {
        var f = u.name;
        f || (f = s, console.warn("Listener must be a named function.")), n.has(s) || n.set(s, new Set);
        var d = n.get(s);
        if (!d.has(f)) {
            var p = function () {
                var h = !1;
                try {
                    var m = Object.defineProperty({}, "passive", {
                        get: function () {
                            h = !0
                        }
                    });
                    window.addEventListener("test", null, m)
                } catch { }
                return h
            }();
            l.addEventListener(s, u, p ? {
                passive: !0
            } : !1), d.add(f)
        }
    }, vl.removePassiveEventListener = function (l, s, u) {
        l.removeEventListener(s, u), n.get(s).delete(u.name || s)
    };
    var n = new Map;
    return vl
}
var jy;

function ih() {
    if (jy) return yo;
    jy = 1, Object.defineProperty(yo, "__esModule", {
        value: !0
    });
    var n = w8(),
        i = s(n),
        l = ah();

    function s(d) {
        return d && d.__esModule ? d : {
            default: d
        }
    }
    var u = function (p) {
        var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 66;
        return (0, i.default)(p, h)
    },
        f = {
            spyCallbacks: [],
            spySetState: [],
            scrollSpyContainers: [],
            mount: function (p, h) {
                if (p) {
                    var m = u(function (y) {
                        f.scrollHandler(p)
                    }, h);
                    return f.scrollSpyContainers.push(p), (0, l.addPassiveEventListener)(p, "scroll", m),
                        function () {
                            (0, l.removePassiveEventListener)(p, "scroll", m), f.scrollSpyContainers.splice(f.scrollSpyContainers.indexOf(p), 1)
                        }
                }
                return function () { }
            },
            isMounted: function (p) {
                return f.scrollSpyContainers.indexOf(p) !== -1
            },
            currentPositionX: function (p) {
                if (p === document) {
                    var h = window.scrollY !== void 0,
                        m = (document.compatMode || "") === "CSS1Compat";
                    return h ? window.scrollX : m ? document.documentElement.scrollLeft : document.body.scrollLeft
                } else return p.scrollLeft
            },
            currentPositionY: function (p) {
                if (p === document) {
                    var h = window.scrollX !== void 0,
                        m = (document.compatMode || "") === "CSS1Compat";
                    return h ? window.scrollY : m ? document.documentElement.scrollTop : document.body.scrollTop
                } else return p.scrollTop
            },
            scrollHandler: function (p) {
                var h = f.scrollSpyContainers[f.scrollSpyContainers.indexOf(p)].spyCallbacks || [];
                h.forEach(function (m) {
                    return m(f.currentPositionX(p), f.currentPositionY(p))
                })
            },
            addStateHandler: function (p) {
                f.spySetState.push(p)
            },
            addSpyHandler: function (p, h) {
                var m = f.scrollSpyContainers[f.scrollSpyContainers.indexOf(h)];
                m.spyCallbacks || (m.spyCallbacks = []), m.spyCallbacks.push(p)
            },
            updateStates: function () {
                f.spySetState.forEach(function (p) {
                    return p()
                })
            },
            unmount: function (p, h) {
                f.scrollSpyContainers.forEach(function (m) {
                    return m.spyCallbacks && m.spyCallbacks.length && m.spyCallbacks.indexOf(h) > -1 && m.spyCallbacks.splice(m.spyCallbacks.indexOf(h), 1)
                }), f.spySetState && f.spySetState.length && f.spySetState.indexOf(p) > -1 && f.spySetState.splice(f.spySetState.indexOf(p), 1), document.removeEventListener("scroll", f.scrollHandler)
            },
            update: function () {
                return f.scrollSpyContainers.forEach(function (p) {
                    return f.scrollHandler(p)
                })
            }
        };
    return yo.default = f, yo
}
var go = {},
    vo = {},
    Ny;

function $o() {
    if (Ny) return vo;
    Ny = 1, Object.defineProperty(vo, "__esModule", {
        value: !0
    });
    var n = function (p, h) {
        var m = p.indexOf("#") === 0 ? p.substring(1) : p,
            y = m ? "#" + m : "",
            v = window && window.location,
            b = y ? v.pathname + v.search + y : v.pathname + v.search;
        h ? history.pushState(history.state, "", b) : history.replaceState(history.state, "", b)
    },
        i = function () {
            return window.location.hash.replace(/^#/, "")
        },
        l = function (p) {
            return function (h) {
                return p.contains ? p != h && p.contains(h) : !!(p.compareDocumentPosition(h) & 16)
            }
        },
        s = function (p) {
            return getComputedStyle(p).position !== "static"
        },
        u = function (p, h) {
            for (var m = p.offsetTop, y = p.offsetParent; y && !h(y);) m += y.offsetTop, y = y.offsetParent;
            return {
                offsetTop: m,
                offsetParent: y
            }
        },
        f = function (p, h, m) {
            if (m) return p === document ? h.getBoundingClientRect().left + (window.scrollX || window.pageXOffset) : getComputedStyle(p).position !== "static" ? h.offsetLeft : h.offsetLeft - p.offsetLeft;
            if (p === document) return h.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
            if (s(p)) {
                if (h.offsetParent !== p) {
                    var y = function (O) {
                        return O === p || O === document
                    },
                        v = u(h, y),
                        b = v.offsetTop,
                        x = v.offsetParent;
                    if (x !== p) throw new Error("Seems containerElement is not an ancestor of the Element");
                    return b
                }
                return h.offsetTop
            }
            if (h.offsetParent === p.offsetParent) return h.offsetTop - p.offsetTop;
            var T = function (O) {
                return O === document
            };
            return u(h, T).offsetTop - u(p, T).offsetTop
        };
    return vo.default = {
        updateHash: n,
        getHash: i,
        filterElementInContainer: l,
        scrollOffset: f
    }, vo
}
var bo = {},
    xo = {},
    Ly;

function T8() {
    return Ly || (Ly = 1, Object.defineProperty(xo, "__esModule", {
        value: !0
    }), xo.default = {
        defaultEasing: function (i) {
            return i < .5 ? Math.pow(i * 2, 2) / 2 : 1 - Math.pow((1 - i) * 2, 2) / 2
        },
        linear: function (i) {
            return i
        },
        easeInQuad: function (i) {
            return i * i
        },
        easeOutQuad: function (i) {
            return i * (2 - i)
        },
        easeInOutQuad: function (i) {
            return i < .5 ? 2 * i * i : -1 + (4 - 2 * i) * i
        },
        easeInCubic: function (i) {
            return i * i * i
        },
        easeOutCubic: function (i) {
            return --i * i * i + 1
        },
        easeInOutCubic: function (i) {
            return i < .5 ? 4 * i * i * i : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1
        },
        easeInQuart: function (i) {
            return i * i * i * i
        },
        easeOutQuart: function (i) {
            return 1 - --i * i * i * i
        },
        easeInOutQuart: function (i) {
            return i < .5 ? 8 * i * i * i * i : 1 - 8 * --i * i * i * i
        },
        easeInQuint: function (i) {
            return i * i * i * i * i
        },
        easeOutQuint: function (i) {
            return 1 + --i * i * i * i * i
        },
        easeInOutQuint: function (i) {
            return i < .5 ? 16 * i * i * i * i * i : 1 + 16 * --i * i * i * i * i
        }
    }), xo
}
var So = {},
    zy;

function E8() {
    if (zy) return So;
    zy = 1, Object.defineProperty(So, "__esModule", {
        value: !0
    });
    var n = ah(),
        i = ["mousedown", "wheel", "touchmove", "keydown"];
    return So.default = {
        subscribe: function (s) {
            return typeof document < "u" && i.forEach(function (u) {
                return (0, n.addPassiveEventListener)(document, u, s)
            })
        }
    }, So
}
var wo = {},
    Vy;

function rh() {
    if (Vy) return wo;
    Vy = 1, Object.defineProperty(wo, "__esModule", {
        value: !0
    });
    var n = {
        registered: {},
        scrollEvent: {
            register: function (l, s) {
                n.registered[l] = s
            },
            remove: function (l) {
                n.registered[l] = null
            }
        }
    };
    return wo.default = n, wo
}
var Hy;

function o2() {
    if (Hy) return bo;
    Hy = 1, Object.defineProperty(bo, "__esModule", {
        value: !0
    });
    var n = Object.assign || function (ie) {
        for (var ne = 1; ne < arguments.length; ne++) {
            var K = arguments[ne];
            for (var se in K) Object.prototype.hasOwnProperty.call(K, se) && (ie[se] = K[se])
        }
        return ie
    },
        i = $o();
    h(i);
    var l = T8(),
        s = h(l),
        u = E8(),
        f = h(u),
        d = rh(),
        p = h(d);

    function h(ie) {
        return ie && ie.__esModule ? ie : {
            default: ie
        }
    }
    var m = function (ne) {
        return s.default[ne.smooth] || s.default.defaultEasing
    },
        y = function (ne) {
            return typeof ne == "function" ? ne : function () {
                return ne
            }
        },
        v = function () {
            if (typeof window < "u") return window.requestAnimationFrame || window.webkitRequestAnimationFrame
        },
        b = function () {
            return v() || function (ie, ne, K) {
                window.setTimeout(ie, K || 1e3 / 60, new Date().getTime())
            }
        }(),
        x = function () {
            return {
                currentPosition: 0,
                startPosition: 0,
                targetPosition: 0,
                progress: 0,
                duration: 0,
                cancel: !1,
                target: null,
                containerElement: null,
                to: null,
                start: null,
                delta: null,
                percent: null,
                delayTimeout: null
            }
        },
        T = function (ne) {
            var K = ne.data.containerElement;
            if (K && K !== document && K !== document.body) return K.scrollLeft;
            var se = window.pageXOffset !== void 0,
                ae = (document.compatMode || "") === "CSS1Compat";
            return se ? window.pageXOffset : ae ? document.documentElement.scrollLeft : document.body.scrollLeft
        },
        D = function (ne) {
            var K = ne.data.containerElement;
            if (K && K !== document && K !== document.body) return K.scrollTop;
            var se = window.pageXOffset !== void 0,
                ae = (document.compatMode || "") === "CSS1Compat";
            return se ? window.pageYOffset : ae ? document.documentElement.scrollTop : document.body.scrollTop
        },
        O = function (ne) {
            var K = ne.data.containerElement;
            if (K && K !== document && K !== document.body) return K.scrollWidth - K.offsetWidth;
            var se = document.body,
                ae = document.documentElement;
            return Math.max(se.scrollWidth, se.offsetWidth, ae.clientWidth, ae.scrollWidth, ae.offsetWidth)
        },
        E = function (ne) {
            var K = ne.data.containerElement;
            if (K && K !== document && K !== document.body) return K.scrollHeight - K.offsetHeight;
            var se = document.body,
                ae = document.documentElement;
            return Math.max(se.scrollHeight, se.offsetHeight, ae.clientHeight, ae.scrollHeight, ae.offsetHeight)
        },
        V = function ie(ne, K, se) {
            var ae = K.data;
            if (!K.ignoreCancelEvents && ae.cancel) {
                p.default.registered.end && p.default.registered.end(ae.to, ae.target, ae.currentPositionY);
                return
            }
            if (ae.delta = Math.round(ae.targetPosition - ae.startPosition), ae.start === null && (ae.start = se), ae.progress = se - ae.start, ae.percent = ae.progress >= ae.duration ? 1 : ne(ae.progress / ae.duration), ae.currentPosition = ae.startPosition + Math.ceil(ae.delta * ae.percent), ae.containerElement && ae.containerElement !== document && ae.containerElement !== document.body ? K.horizontal ? ae.containerElement.scrollLeft = ae.currentPosition : ae.containerElement.scrollTop = ae.currentPosition : K.horizontal ? window.scrollTo(ae.currentPosition, 0) : window.scrollTo(0, ae.currentPosition), ae.percent < 1) {
                var be = ie.bind(null, ne, K);
                b.call(window, be);
                return
            }
            p.default.registered.end && p.default.registered.end(ae.to, ae.target, ae.currentPosition)
        },
        j = function (ne) {
            ne.data.containerElement = ne ? ne.containerId ? document.getElementById(ne.containerId) : ne.container && ne.container.nodeType ? ne.container : document : null
        },
        Q = function (ne, K, se, ae) {
            K.data = K.data || x(), window.clearTimeout(K.data.delayTimeout);
            var be = function () {
                K.data.cancel = !0
            };
            if (f.default.subscribe(be), j(K), K.data.start = null, K.data.cancel = !1, K.data.startPosition = K.horizontal ? T(K) : D(K), K.data.targetPosition = K.absolute ? ne : ne + K.data.startPosition, K.data.startPosition === K.data.targetPosition) {
                p.default.registered.end && p.default.registered.end(K.data.to, K.data.target, K.data.currentPosition);
                return
            }
            K.data.delta = Math.round(K.data.targetPosition - K.data.startPosition), K.data.duration = y(K.duration)(K.data.delta), K.data.duration = isNaN(parseFloat(K.data.duration)) ? 1e3 : parseFloat(K.data.duration), K.data.to = se, K.data.target = ae;
            var H = m(K),
                $ = V.bind(null, H, K);
            if (K && K.delay > 0) {
                K.data.delayTimeout = window.setTimeout(function () {
                    p.default.registered.begin && p.default.registered.begin(K.data.to, K.data.target), b.call(window, $)
                }, K.delay);
                return
            }
            p.default.registered.begin && p.default.registered.begin(K.data.to, K.data.target), b.call(window, $)
        },
        U = function (ne) {
            return ne = n({}, ne), ne.data = ne.data || x(), ne.absolute = !0, ne
        },
        M = function (ne) {
            Q(0, U(ne))
        },
        G = function (ne, K) {
            Q(ne, U(K))
        },
        Z = function (ne) {
            ne = U(ne), j(ne), Q(ne.horizontal ? O(ne) : E(ne), ne)
        },
        ee = function (ne, K) {
            K = U(K), j(K);
            var se = K.horizontal ? T(K) : D(K);
            Q(ne + se, K)
        };
    return bo.default = {
        animateTopScroll: Q,
        getAnimationType: m,
        scrollToTop: M,
        scrollToBottom: Z,
        scrollTo: G,
        scrollMore: ee
    }, bo
}
var Uy;

function Jo() {
    if (Uy) return go;
    Uy = 1, Object.defineProperty(go, "__esModule", {
        value: !0
    });
    var n = Object.assign || function (y) {
        for (var v = 1; v < arguments.length; v++) {
            var b = arguments[v];
            for (var x in b) Object.prototype.hasOwnProperty.call(b, x) && (y[x] = b[x])
        }
        return y
    },
        i = $o(),
        l = p(i),
        s = o2(),
        u = p(s),
        f = rh(),
        d = p(f);

    function p(y) {
        return y && y.__esModule ? y : {
            default: y
        }
    }
    var h = {},
        m = void 0;
    return go.default = {
        unmount: function () {
            h = {}
        },
        register: function (v, b) {
            h[v] = b
        },
        unregister: function (v) {
            delete h[v]
        },
        get: function (v) {
            return h[v] || document.getElementById(v) || document.getElementsByName(v)[0] || document.getElementsByClassName(v)[0]
        },
        setActiveLink: function (v) {
            return m = v
        },
        getActiveLink: function () {
            return m
        },
        scrollTo: function (v, b) {
            var x = this.get(v);
            if (!x) {
                console.warn("target Element not found");
                return
            }
            b = n({}, b, {
                absolute: !1
            });
            var T = b.containerId,
                D = b.container,
                O = void 0;
            T ? O = document.getElementById(T) : D && D.nodeType ? O = D : O = document, b.absolute = !0;
            var E = b.horizontal,
                V = l.default.scrollOffset(O, x, E) + (b.offset || 0);
            if (!b.smooth) {
                d.default.registered.begin && d.default.registered.begin(v, x), O === document ? b.horizontal ? window.scrollTo(V, 0) : window.scrollTo(0, V) : O.scrollTop = V, d.default.registered.end && d.default.registered.end(v, x);
                return
            }
            u.default.animateTopScroll(V, b, v, x)
        }
    }, go
}
var zf = {
    exports: {}
},
    Vf, By;

function M8() {
    if (By) return Vf;
    By = 1;
    var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    return Vf = n, Vf
}
var Hf, Py;

function R8() {
    if (Py) return Hf;
    Py = 1;
    var n = M8();

    function i() { }

    function l() { }
    return l.resetWarningCache = i, Hf = function () {
        function s(d, p, h, m, y, v) {
            if (v !== n) {
                var b = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw b.name = "Invariant Violation", b
            }
        }
        s.isRequired = s;

        function u() {
            return s
        }
        var f = {
            array: s,
            bigint: s,
            bool: s,
            func: s,
            number: s,
            object: s,
            string: s,
            symbol: s,
            any: s,
            arrayOf: u,
            element: s,
            elementType: s,
            instanceOf: u,
            node: s,
            objectOf: u,
            oneOf: u,
            oneOfType: u,
            shape: u,
            exact: u,
            checkPropTypes: l,
            resetWarningCache: i
        };
        return f.PropTypes = f, f
    }, Hf
}
var ky;

function Wo() {
    return ky || (ky = 1, zf.exports = R8()()), zf.exports
}
var To = {},
    qy;

function u2() {
    if (qy) return To;
    qy = 1, Object.defineProperty(To, "__esModule", {
        value: !0
    }), ah();
    var n = $o(),
        i = l(n);

    function l(u) {
        return u && u.__esModule ? u : {
            default: u
        }
    }
    var s = {
        mountFlag: !1,
        initialized: !1,
        scroller: null,
        containers: {},
        mount: function (f) {
            this.scroller = f, this.handleHashChange = this.handleHashChange.bind(this), window.addEventListener("hashchange", this.handleHashChange), this.initStateFromHash(), this.mountFlag = !0
        },
        mapContainer: function (f, d) {
            this.containers[f] = d
        },
        isMounted: function () {
            return this.mountFlag
        },
        isInitialized: function () {
            return this.initialized
        },
        initStateFromHash: function () {
            var f = this,
                d = this.getHash();
            d ? window.setTimeout(function () {
                f.scrollTo(d, !0), f.initialized = !0
            }, 10) : this.initialized = !0
        },
        scrollTo: function (f, d) {
            var p = this.scroller,
                h = p.get(f);
            if (h && (d || f !== p.getActiveLink())) {
                var m = this.containers[f] || document;
                p.scrollTo(f, {
                    container: m
                })
            }
        },
        getHash: function () {
            return i.default.getHash()
        },
        changeHash: function (f, d) {
            this.isInitialized() && i.default.getHash() !== f && i.default.updateHash(f, d)
        },
        handleHashChange: function () {
            this.scrollTo(this.getHash())
        },
        unmount: function () {
            this.scroller = null, this.containers = null, window.removeEventListener("hashchange", this.handleHashChange)
        }
    };
    return To.default = s, To
}
var Yy;

function lh() {
    if (Yy) return po;
    Yy = 1, Object.defineProperty(po, "__esModule", {
        value: !0
    });
    var n = Object.assign || function (E) {
        for (var V = 1; V < arguments.length; V++) {
            var j = arguments[V];
            for (var Q in j) Object.prototype.hasOwnProperty.call(j, Q) && (E[Q] = j[Q])
        }
        return E
    },
        i = function () {
            function E(V, j) {
                for (var Q = 0; Q < j.length; Q++) {
                    var U = j[Q];
                    U.enumerable = U.enumerable || !1, U.configurable = !0, "value" in U && (U.writable = !0), Object.defineProperty(V, U.key, U)
                }
            }
            return function (V, j, Q) {
                return j && E(V.prototype, j), Q && E(V, Q), V
            }
        }(),
        l = zn(),
        s = b(l),
        u = ih(),
        f = b(u),
        d = Jo(),
        p = b(d),
        h = Wo(),
        m = b(h),
        y = u2(),
        v = b(y);

    function b(E) {
        return E && E.__esModule ? E : {
            default: E
        }
    }

    function x(E, V) {
        if (!(E instanceof V)) throw new TypeError("Cannot call a class as a function")
    }

    function T(E, V) {
        if (!E) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return V && (typeof V == "object" || typeof V == "function") ? V : E
    }

    function D(E, V) {
        if (typeof V != "function" && V !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof V);
        E.prototype = Object.create(V && V.prototype, {
            constructor: {
                value: E,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), V && (Object.setPrototypeOf ? Object.setPrototypeOf(E, V) : E.__proto__ = V)
    }
    var O = {
        to: m.default.string.isRequired,
        containerId: m.default.string,
        container: m.default.object,
        activeClass: m.default.string,
        activeStyle: m.default.object,
        spy: m.default.bool,
        horizontal: m.default.bool,
        smooth: m.default.oneOfType([m.default.bool, m.default.string]),
        offset: m.default.number,
        delay: m.default.number,
        isDynamic: m.default.bool,
        onClick: m.default.func,
        duration: m.default.oneOfType([m.default.number, m.default.func]),
        absolute: m.default.bool,
        onSetActive: m.default.func,
        onSetInactive: m.default.func,
        ignoreCancelEvents: m.default.bool,
        hashSpy: m.default.bool,
        saveHashHistory: m.default.bool,
        spyThrottle: m.default.number
    };
    return po.default = function (E, V) {
        var j = V || p.default,
            Q = function (M) {
                D(G, M);

                function G(Z) {
                    x(this, G);
                    var ee = T(this, (G.__proto__ || Object.getPrototypeOf(G)).call(this, Z));
                    return U.call(ee), ee.state = {
                        active: !1
                    }, ee.beforeUnmountCallbacks = [], ee
                }
                return i(G, [{
                    key: "getScrollSpyContainer",
                    value: function () {
                        var ee = this.props.containerId,
                            ie = this.props.container;
                        return ee && !ie ? document.getElementById(ee) : ie && ie.nodeType ? ie : document
                    }
                }, {
                    key: "componentDidMount",
                    value: function () {
                        if (this.props.spy || this.props.hashSpy) {
                            var ee = this.getScrollSpyContainer();
                            if (!f.default.isMounted(ee)) {
                                var ie = f.default.mount(ee, this.props.spyThrottle);
                                this.beforeUnmountCallbacks.push(ie)
                            }
                            this.props.hashSpy && (v.default.isMounted() || v.default.mount(j), v.default.mapContainer(this.props.to, ee)), f.default.addSpyHandler(this.spyHandler, ee), this.setState({
                                container: ee
                            })
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function () {
                        f.default.unmount(this.stateHandler, this.spyHandler), this.beforeUnmountCallbacks.forEach(function (ee) {
                            return ee()
                        })
                    }
                }, {
                    key: "render",
                    value: function () {
                        var ee = "";
                        this.state && this.state.active ? ee = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : ee = this.props.className;
                        var ie = {};
                        this.state && this.state.active ? ie = n({}, this.props.style, this.props.activeStyle) : ie = n({}, this.props.style);
                        var ne = n({}, this.props);
                        for (var K in O) ne.hasOwnProperty(K) && delete ne[K];
                        return ne.className = ee, ne.style = ie, ne.onClick = this.handleClick, s.default.createElement(E, ne)
                    }
                }]), G
            }(s.default.PureComponent),
            U = function () {
                var G = this;
                this.scrollTo = function (Z, ee) {
                    j.scrollTo(Z, n({}, G.state, ee))
                }, this.handleClick = function (Z) {
                    G.props.onClick && G.props.onClick(Z), Z.stopPropagation && Z.stopPropagation(), Z.preventDefault && Z.preventDefault(), G.scrollTo(G.props.to, G.props)
                }, this.spyHandler = function (Z, ee) {
                    var ie = G.getScrollSpyContainer();
                    if (!(v.default.isMounted() && !v.default.isInitialized())) {
                        var ne = G.props.horizontal,
                            K = G.props.to,
                            se = null,
                            ae = void 0,
                            be = void 0;
                        if (ne) {
                            var H = 0,
                                $ = 0,
                                oe = 0;
                            if (ie.getBoundingClientRect) {
                                var ye = ie.getBoundingClientRect();
                                oe = ye.left
                            }
                            if (!se || G.props.isDynamic) {
                                if (se = j.get(K), !se) return;
                                var A = se.getBoundingClientRect();
                                H = A.left - oe + Z, $ = H + A.width
                            }
                            var F = Z - G.props.offset;
                            ae = F >= Math.floor(H) && F < Math.floor($), be = F < Math.floor(H) || F >= Math.floor($)
                        } else {
                            var ue = 0,
                                re = 0,
                                ce = 0;
                            if (ie.getBoundingClientRect) {
                                var Oe = ie.getBoundingClientRect();
                                ce = Oe.top
                            }
                            if (!se || G.props.isDynamic) {
                                if (se = j.get(K), !se) return;
                                var Se = se.getBoundingClientRect();
                                ue = Se.top - ce + ee, re = ue + Se.height
                            }
                            var Je = ee - G.props.offset;
                            ae = Je >= Math.floor(ue) && Je < Math.floor(re), be = Je < Math.floor(ue) || Je >= Math.floor(re)
                        }
                        var Me = j.getActiveLink();
                        if (be) {
                            if (K === Me && j.setActiveLink(void 0), G.props.hashSpy && v.default.getHash() === K) {
                                var lt = G.props.saveHashHistory,
                                    Ge = lt === void 0 ? !1 : lt;
                                v.default.changeHash("", Ge)
                            }
                            G.props.spy && G.state.active && (G.setState({
                                active: !1
                            }), G.props.onSetInactive && G.props.onSetInactive(K, se))
                        }
                        if (ae && (Me !== K || G.state.active === !1)) {
                            j.setActiveLink(K);
                            var Mt = G.props.saveHashHistory,
                                ra = Mt === void 0 ? !1 : Mt;
                            G.props.hashSpy && v.default.changeHash(K, ra), G.props.spy && (G.setState({
                                active: !0
                            }), G.props.onSetActive && G.props.onSetActive(K, se))
                        }
                    }
                }
            };
        return Q.propTypes = O, Q.defaultProps = {
            offset: 0
        }, Q
    }, po
}
var Gy;

function A8() {
    if (Gy) return mo;
    Gy = 1, Object.defineProperty(mo, "__esModule", {
        value: !0
    });
    var n = zn(),
        i = u(n),
        l = lh(),
        s = u(l);

    function u(m) {
        return m && m.__esModule ? m : {
            default: m
        }
    }

    function f(m, y) {
        if (!(m instanceof y)) throw new TypeError("Cannot call a class as a function")
    }

    function d(m, y) {
        if (!m) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return y && (typeof y == "object" || typeof y == "function") ? y : m
    }

    function p(m, y) {
        if (typeof y != "function" && y !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof y);
        m.prototype = Object.create(y && y.prototype, {
            constructor: {
                value: m,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), y && (Object.setPrototypeOf ? Object.setPrototypeOf(m, y) : m.__proto__ = y)
    }
    var h = function (m) {
        p(y, m);

        function y() {
            var v, b, x, T;
            f(this, y);
            for (var D = arguments.length, O = Array(D), E = 0; E < D; E++) O[E] = arguments[E];
            return T = (b = (x = d(this, (v = y.__proto__ || Object.getPrototypeOf(y)).call.apply(v, [this].concat(O))), x), x.render = function () {
                return i.default.createElement("a", x.props, x.props.children)
            }, b), d(x, T)
        }
        return y
    }(i.default.Component);
    return mo.default = (0, s.default)(h), mo
}
var Eo = {},
    Xy;

function D8() {
    if (Xy) return Eo;
    Xy = 1, Object.defineProperty(Eo, "__esModule", {
        value: !0
    });
    var n = function () {
        function y(v, b) {
            for (var x = 0; x < b.length; x++) {
                var T = b[x];
                T.enumerable = T.enumerable || !1, T.configurable = !0, "value" in T && (T.writable = !0), Object.defineProperty(v, T.key, T)
            }
        }
        return function (v, b, x) {
            return b && y(v.prototype, b), x && y(v, x), v
        }
    }(),
        i = zn(),
        l = f(i),
        s = lh(),
        u = f(s);

    function f(y) {
        return y && y.__esModule ? y : {
            default: y
        }
    }

    function d(y, v) {
        if (!(y instanceof v)) throw new TypeError("Cannot call a class as a function")
    }

    function p(y, v) {
        if (!y) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return v && (typeof v == "object" || typeof v == "function") ? v : y
    }

    function h(y, v) {
        if (typeof v != "function" && v !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof v);
        y.prototype = Object.create(v && v.prototype, {
            constructor: {
                value: y,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), v && (Object.setPrototypeOf ? Object.setPrototypeOf(y, v) : y.__proto__ = v)
    }
    var m = function (y) {
        h(v, y);

        function v() {
            return d(this, v), p(this, (v.__proto__ || Object.getPrototypeOf(v)).apply(this, arguments))
        }
        return n(v, [{
            key: "render",
            value: function () {
                return l.default.createElement("button", this.props, this.props.children)
            }
        }]), v
    }(l.default.Component);
    return Eo.default = (0, u.default)(m), Eo
}
var Mo = {},
    Ro = {},
    Ky;

function c2() {
    if (Ky) return Ro;
    Ky = 1, Object.defineProperty(Ro, "__esModule", {
        value: !0
    });
    var n = Object.assign || function (x) {
        for (var T = 1; T < arguments.length; T++) {
            var D = arguments[T];
            for (var O in D) Object.prototype.hasOwnProperty.call(D, O) && (x[O] = D[O])
        }
        return x
    },
        i = function () {
            function x(T, D) {
                for (var O = 0; O < D.length; O++) {
                    var E = D[O];
                    E.enumerable = E.enumerable || !1, E.configurable = !0, "value" in E && (E.writable = !0), Object.defineProperty(T, E.key, E)
                }
            }
            return function (T, D, O) {
                return D && x(T.prototype, D), O && x(T, O), T
            }
        }(),
        l = zn(),
        s = m(l),
        u = fd();
    m(u);
    var f = Jo(),
        d = m(f),
        p = Wo(),
        h = m(p);

    function m(x) {
        return x && x.__esModule ? x : {
            default: x
        }
    }

    function y(x, T) {
        if (!(x instanceof T)) throw new TypeError("Cannot call a class as a function")
    }

    function v(x, T) {
        if (!x) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return T && (typeof T == "object" || typeof T == "function") ? T : x
    }

    function b(x, T) {
        if (typeof T != "function" && T !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof T);
        x.prototype = Object.create(T && T.prototype, {
            constructor: {
                value: x,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), T && (Object.setPrototypeOf ? Object.setPrototypeOf(x, T) : x.__proto__ = T)
    }
    return Ro.default = function (x) {
        var T = function (D) {
            b(O, D);

            function O(E) {
                y(this, O);
                var V = v(this, (O.__proto__ || Object.getPrototypeOf(O)).call(this, E));
                return V.childBindings = {
                    domNode: null
                }, V
            }
            return i(O, [{
                key: "componentDidMount",
                value: function () {
                    if (typeof window > "u") return !1;
                    this.registerElems(this.props.name)
                }
            }, {
                key: "componentDidUpdate",
                value: function (V) {
                    this.props.name !== V.name && this.registerElems(this.props.name)
                }
            }, {
                key: "componentWillUnmount",
                value: function () {
                    if (typeof window > "u") return !1;
                    d.default.unregister(this.props.name)
                }
            }, {
                key: "registerElems",
                value: function (V) {
                    d.default.register(V, this.childBindings.domNode)
                }
            }, {
                key: "render",
                value: function () {
                    return s.default.createElement(x, n({}, this.props, {
                        parentBindings: this.childBindings
                    }))
                }
            }]), O
        }(s.default.Component);
        return T.propTypes = {
            name: h.default.string,
            id: h.default.string
        }, T
    }, Ro
}
var Qy;

function O8() {
    if (Qy) return Mo;
    Qy = 1, Object.defineProperty(Mo, "__esModule", {
        value: !0
    });
    var n = Object.assign || function (x) {
        for (var T = 1; T < arguments.length; T++) {
            var D = arguments[T];
            for (var O in D) Object.prototype.hasOwnProperty.call(D, O) && (x[O] = D[O])
        }
        return x
    },
        i = function () {
            function x(T, D) {
                for (var O = 0; O < D.length; O++) {
                    var E = D[O];
                    E.enumerable = E.enumerable || !1, E.configurable = !0, "value" in E && (E.writable = !0), Object.defineProperty(T, E.key, E)
                }
            }
            return function (T, D, O) {
                return D && x(T.prototype, D), O && x(T, O), T
            }
        }(),
        l = zn(),
        s = h(l),
        u = c2(),
        f = h(u),
        d = Wo(),
        p = h(d);

    function h(x) {
        return x && x.__esModule ? x : {
            default: x
        }
    }

    function m(x, T) {
        if (!(x instanceof T)) throw new TypeError("Cannot call a class as a function")
    }

    function y(x, T) {
        if (!x) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return T && (typeof T == "object" || typeof T == "function") ? T : x
    }

    function v(x, T) {
        if (typeof T != "function" && T !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof T);
        x.prototype = Object.create(T && T.prototype, {
            constructor: {
                value: x,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), T && (Object.setPrototypeOf ? Object.setPrototypeOf(x, T) : x.__proto__ = T)
    }
    var b = function (x) {
        v(T, x);

        function T() {
            return m(this, T), y(this, (T.__proto__ || Object.getPrototypeOf(T)).apply(this, arguments))
        }
        return i(T, [{
            key: "render",
            value: function () {
                var O = this,
                    E = n({}, this.props);
                return delete E.name, E.parentBindings && delete E.parentBindings, s.default.createElement("div", n({}, E, {
                    ref: function (j) {
                        O.props.parentBindings.domNode = j
                    }
                }), this.props.children)
            }
        }]), T
    }(s.default.Component);
    return b.propTypes = {
        name: p.default.string,
        id: p.default.string
    }, Mo.default = (0, f.default)(b), Mo
}
var Uf, Zy;

function C8() {
    if (Zy) return Uf;
    Zy = 1;
    var n = Object.assign || function (b) {
        for (var x = 1; x < arguments.length; x++) {
            var T = arguments[x];
            for (var D in T) Object.prototype.hasOwnProperty.call(T, D) && (b[D] = T[D])
        }
        return b
    },
        i = function () {
            function b(x, T) {
                for (var D = 0; D < T.length; D++) {
                    var O = T[D];
                    O.enumerable = O.enumerable || !1, O.configurable = !0, "value" in O && (O.writable = !0), Object.defineProperty(x, O.key, O)
                }
            }
            return function (x, T, D) {
                return T && b(x.prototype, T), D && b(x, D), x
            }
        }();

    function l(b, x) {
        if (!(b instanceof x)) throw new TypeError("Cannot call a class as a function")
    }

    function s(b, x) {
        if (!b) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return x && (typeof x == "object" || typeof x == "function") ? x : b
    }

    function u(b, x) {
        if (typeof x != "function" && x !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof x);
        b.prototype = Object.create(x && x.prototype, {
            constructor: {
                value: b,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), x && (Object.setPrototypeOf ? Object.setPrototypeOf(b, x) : b.__proto__ = x)
    }
    var f = zn();
    fd(), $o();
    var d = ih(),
        p = Jo(),
        h = Wo(),
        m = u2(),
        y = {
            to: h.string.isRequired,
            containerId: h.string,
            container: h.object,
            activeClass: h.string,
            spy: h.bool,
            smooth: h.oneOfType([h.bool, h.string]),
            offset: h.number,
            delay: h.number,
            isDynamic: h.bool,
            onClick: h.func,
            duration: h.oneOfType([h.number, h.func]),
            absolute: h.bool,
            onSetActive: h.func,
            onSetInactive: h.func,
            ignoreCancelEvents: h.bool,
            hashSpy: h.bool,
            spyThrottle: h.number
        },
        v = {
            Scroll: function (x, T) {
                console.warn("Helpers.Scroll is deprecated since v1.7.0");
                var D = T || p,
                    O = function (V) {
                        u(j, V);

                        function j(Q) {
                            l(this, j);
                            var U = s(this, (j.__proto__ || Object.getPrototypeOf(j)).call(this, Q));
                            return E.call(U), U.state = {
                                active: !1
                            }, U
                        }
                        return i(j, [{
                            key: "getScrollSpyContainer",
                            value: function () {
                                var U = this.props.containerId,
                                    M = this.props.container;
                                return U ? document.getElementById(U) : M && M.nodeType ? M : document
                            }
                        }, {
                            key: "componentDidMount",
                            value: function () {
                                if (this.props.spy || this.props.hashSpy) {
                                    var U = this.getScrollSpyContainer();
                                    d.isMounted(U) || d.mount(U, this.props.spyThrottle), this.props.hashSpy && (m.isMounted() || m.mount(D), m.mapContainer(this.props.to, U)), this.props.spy && d.addStateHandler(this.stateHandler), d.addSpyHandler(this.spyHandler, U), this.setState({
                                        container: U
                                    })
                                }
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function () {
                                d.unmount(this.stateHandler, this.spyHandler)
                            }
                        }, {
                            key: "render",
                            value: function () {
                                var U = "";
                                this.state && this.state.active ? U = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : U = this.props.className;
                                var M = n({}, this.props);
                                for (var G in y) M.hasOwnProperty(G) && delete M[G];
                                return M.className = U, M.onClick = this.handleClick, f.createElement(x, M)
                            }
                        }]), j
                    }(f.Component),
                    E = function () {
                        var j = this;
                        this.scrollTo = function (Q, U) {
                            D.scrollTo(Q, n({}, j.state, U))
                        }, this.handleClick = function (Q) {
                            j.props.onClick && j.props.onClick(Q), Q.stopPropagation && Q.stopPropagation(), Q.preventDefault && Q.preventDefault(), j.scrollTo(j.props.to, j.props)
                        }, this.stateHandler = function () {
                            D.getActiveLink() !== j.props.to && (j.state !== null && j.state.active && j.props.onSetInactive && j.props.onSetInactive(), j.setState({
                                active: !1
                            }))
                        }, this.spyHandler = function (Q) {
                            var U = j.getScrollSpyContainer();
                            if (!(m.isMounted() && !m.isInitialized())) {
                                var M = j.props.to,
                                    G = null,
                                    Z = 0,
                                    ee = 0,
                                    ie = 0;
                                if (U.getBoundingClientRect) {
                                    var ne = U.getBoundingClientRect();
                                    ie = ne.top
                                }
                                if (!G || j.props.isDynamic) {
                                    if (G = D.get(M), !G) return;
                                    var K = G.getBoundingClientRect();
                                    Z = K.top - ie + Q, ee = Z + K.height
                                }
                                var se = Q - j.props.offset,
                                    ae = se >= Math.floor(Z) && se < Math.floor(ee),
                                    be = se < Math.floor(Z) || se >= Math.floor(ee),
                                    H = D.getActiveLink();
                                if (be) return M === H && D.setActiveLink(void 0), j.props.hashSpy && m.getHash() === M && m.changeHash(), j.props.spy && j.state.active && (j.setState({
                                    active: !1
                                }), j.props.onSetInactive && j.props.onSetInactive()), d.updateStates();
                                if (ae && H !== M) return D.setActiveLink(M), j.props.hashSpy && m.changeHash(M), j.props.spy && (j.setState({
                                    active: !0
                                }), j.props.onSetActive && j.props.onSetActive(M)), d.updateStates()
                            }
                        }
                    };
                return O.propTypes = y, O.defaultProps = {
                    offset: 0
                }, O
            },
            Element: function (x) {
                console.warn("Helpers.Element is deprecated since v1.7.0");
                var T = function (D) {
                    u(O, D);

                    function O(E) {
                        l(this, O);
                        var V = s(this, (O.__proto__ || Object.getPrototypeOf(O)).call(this, E));
                        return V.childBindings = {
                            domNode: null
                        }, V
                    }
                    return i(O, [{
                        key: "componentDidMount",
                        value: function () {
                            if (typeof window > "u") return !1;
                            this.registerElems(this.props.name)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function (V) {
                            this.props.name !== V.name && this.registerElems(this.props.name)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function () {
                            if (typeof window > "u") return !1;
                            p.unregister(this.props.name)
                        }
                    }, {
                        key: "registerElems",
                        value: function (V) {
                            p.register(V, this.childBindings.domNode)
                        }
                    }, {
                        key: "render",
                        value: function () {
                            return f.createElement(x, n({}, this.props, {
                                parentBindings: this.childBindings
                            }))
                        }
                    }]), O
                }(f.Component);
                return T.propTypes = {
                    name: h.string,
                    id: h.string
                }, T
            }
        };
    return Uf = v, Uf
}
var Fy;

function _8() {
    if (Fy) return et;
    Fy = 1, Object.defineProperty(et, "__esModule", {
        value: !0
    }), et.Helpers = et.ScrollElement = et.ScrollLink = et.animateScroll = et.scrollSpy = et.Events = et.scroller = et.Element = et.Button = et.Link = void 0;
    var n = A8(),
        i = Q(n),
        l = D8(),
        s = Q(l),
        u = O8(),
        f = Q(u),
        d = Jo(),
        p = Q(d),
        h = rh(),
        m = Q(h),
        y = ih(),
        v = Q(y),
        b = o2(),
        x = Q(b),
        T = lh(),
        D = Q(T),
        O = c2(),
        E = Q(O),
        V = C8(),
        j = Q(V);

    function Q(U) {
        return U && U.__esModule ? U : {
            default: U
        }
    }
    return et.Link = i.default, et.Button = s.default, et.Element = f.default, et.scroller = p.default, et.Events = m.default, et.scrollSpy = v.default, et.animateScroll = x.default, et.ScrollLink = D.default, et.ScrollElement = E.default, et.Helpers = j.default, et.default = {
        Link: i.default,
        Button: s.default,
        Element: f.default,
        scroller: p.default,
        Events: m.default,
        scrollSpy: v.default,
        animateScroll: x.default,
        ScrollLink: D.default,
        ScrollElement: E.default,
        Helpers: j.default
    }, et
}
var cd = _8(),
    f2 = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0
    },
    Iy = pi.createContext && pi.createContext(f2),
    j8 = ["attr", "size", "title"];

function N8(n, i) {
    if (n == null) return {};
    var l = L8(n, i),
        s, u;
    if (Object.getOwnPropertySymbols) {
        var f = Object.getOwnPropertySymbols(n);
        for (u = 0; u < f.length; u++) s = f[u], !(i.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(n, s) && (l[s] = n[s])
    }
    return l
}

function L8(n, i) {
    if (n == null) return {};
    var l = {};
    for (var s in n)
        if (Object.prototype.hasOwnProperty.call(n, s)) {
            if (i.indexOf(s) >= 0) continue;
            l[s] = n[s]
        } return l
}

function Yo() {
    return Yo = Object.assign ? Object.assign.bind() : function (n) {
        for (var i = 1; i < arguments.length; i++) {
            var l = arguments[i];
            for (var s in l) Object.prototype.hasOwnProperty.call(l, s) && (n[s] = l[s])
        }
        return n
    }, Yo.apply(this, arguments)
}

function $y(n, i) {
    var l = Object.keys(n);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(n);
        i && (s = s.filter(function (u) {
            return Object.getOwnPropertyDescriptor(n, u).enumerable
        })), l.push.apply(l, s)
    }
    return l
}

function Go(n) {
    for (var i = 1; i < arguments.length; i++) {
        var l = arguments[i] != null ? arguments[i] : {};
        i % 2 ? $y(Object(l), !0).forEach(function (s) {
            z8(n, s, l[s])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : $y(Object(l)).forEach(function (s) {
            Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(l, s))
        })
    }
    return n
}

function z8(n, i, l) {
    return i = V8(i), i in n ? Object.defineProperty(n, i, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : n[i] = l, n
}

function V8(n) {
    var i = H8(n, "string");
    return typeof i == "symbol" ? i : i + ""
}

function H8(n, i) {
    if (typeof n != "object" || !n) return n;
    var l = n[Symbol.toPrimitive];
    if (l !== void 0) {
        var s = l.call(n, i);
        if (typeof s != "object") return s;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (i === "string" ? String : Number)(n)
}

function d2(n) {
    return n && n.map((i, l) => pi.createElement(i.tag, Go({
        key: l
    }, i.attr), d2(i.child)))
}

function Fe(n) {
    return i => pi.createElement(U8, Yo({
        attr: Go({}, n.attr)
    }, i), d2(n.child))
}

function U8(n) {
    var i = l => {
        var {
            attr: s,
            size: u,
            title: f
        } = n, d = N8(n, j8), p = u || l.size || "1em", h;
        return l.className && (h = l.className), n.className && (h = (h ? h + " " : "") + n.className), pi.createElement("svg", Yo({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, l.attr, s, d, {
            className: h,
            style: Go(Go({
                color: n.color || l.color
            }, l.style), n.style),
            height: p,
            width: p,
            xmlns: "http://www.w3.org/2000/svg"
        }), f && pi.createElement("title", null, f), n.children)
    };
    return Iy !== void 0 ? pi.createElement(Iy.Consumer, null, l => i(l)) : i(f2)
}

function B8(n) {
    return Fe({
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
            },
            child: []
        }]
    })(n)
}

function P8(n) {
    return Fe({
        attr: {
            viewBox: "0 0 496 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            },
            child: []
        }]
    })(n)
}

function k8(n) {
    return Fe({
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
            },
            child: []
        }]
    })(n)
}

function q8(n) {
    return Fe({
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
            },
            child: []
        }]
    })(n)
}

function Jy(n) {
    return Fe({
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"
            },
            child: []
        }]
    })(n)
}

function Y8(n) {
    return Fe({
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"
            },
            child: []
        }]
    })(n)
}

function Wy(n) {
    return Fe({
        attr: {
            viewBox: "0 0 576 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"
            },
            child: []
        }]
    })(n)
}

function G8(n) {
    return Fe({
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
            },
            child: []
        }]
    })(n)
}

function h2(n) {
    return Fe({
        attr: {
            viewBox: "0 0 640 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"
            },
            child: []
        }]
    })(n)
}

function X8(n) {
    return Fe({
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
            },
            child: []
        }]
    })(n)
}

function K8(n) {
    return Fe({
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
            },
            child: []
        }]
    })(n)
}

function eg(n) {
    return Fe({
        attr: {
            viewBox: "0 0 384 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"
            },
            child: []
        }]
    })(n)
}

function Q8(n) {
    return Fe({
        attr: {
            viewBox: "0 0 640 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"
            },
            child: []
        }]
    })(n)
}

function Z8(n) {
    return Fe({
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
            },
            child: []
        }]
    })(n)
}

function F8(n) {
    return Fe({
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
            },
            child: []
        }]
    })(n)
}
const I8 = () => {
    const n = Ba(),
        i = vd(),
        [l, s] = C.useState(!1),
        [u, f] = C.useState(!1),
        [d, p] = C.useState("home"),
        h = [{
            name: "Home",
            to: "home"
        }, {
            name: "Skills",
            to: "skills"
        }, {
            name: "Education",
            to: "education"
        }, {
            name: "Projects",
            to: "projects"
        }, {
            name: "About",
            to: "about"
        }, {
            name: "Contact",
            to: "contact"
        }];
    C.useEffect(() => {
        const x = () => {
            s(window.scrollY > 50), m()
        };
        return window.addEventListener("scroll", x), () => window.removeEventListener("scroll", x)
    }, []);
    const m = () => {
        const x = h.map(D => D.to),
            T = window.scrollY + 100;
        for (let D = x.length - 1; D >= 0; D--) {
            const O = document.getElementById(x[D]);
            if (O) {
                const E = O.offsetTop,
                    V = O.offsetHeight;
                if (T >= E && T < E + V) {
                    p(x[D]);
                    break
                }
            }
        }
        T < 100 && p("home")
    };
    C.useEffect(() => {
        const x = {
            root: null,
            rootMargin: "-50% 0px -50% 0px",
            threshold: 0
        },
            T = new IntersectionObserver(D => {
                D.forEach(O => {
                    O.isIntersecting && p(O.target.id)
                })
            }, x);
        return h.forEach(D => {
            const O = document.getElementById(D.to);
            O && T.observe(O)
        }), () => {
            h.forEach(D => {
                const O = document.getElementById(D.to);
                O && T.unobserve(O)
            })
        }
    }, [n.pathname]);
    const y = x => {
        p(x), n.pathname !== "/" ? (i("/"), setTimeout(() => {
            cd.scroller.scrollTo(x, {
                smooth: !0,
                duration: 800,
                offset: -80
            })
        }, 100)) : cd.scroller.scrollTo(x, {
            smooth: !0,
            duration: 800,
            offset: -80
        }), f(!1)
    },
        v = {
            closed: {
                opacity: 0,
                scale: .9,
                y: -20,
                transition: {
                    duration: .2,
                    ease: "easeInOut"
                }
            },
            open: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: {
                    duration: .3,
                    ease: "easeOut",
                    staggerChildren: .1,
                    delayChildren: .1
                }
            }
        },
        b = {
            closed: {
                opacity: 0,
                x: -20
            },
            open: {
                opacity: 1,
                x: 0
            }
        };
    return w.jsxs(L.div, {
        className: `fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ease-in-out mb-2 ${l ? "bg-gradient-to-b from-black/95 via-gray-900/95 to-black/95 backdrop-blur-xl shadow-2xl h-16" : "bg-gradient-to-b from-black/90 via-gray-900/90 to-black/90 backdrop-blur-lg h-20"}`,
        initial: {
            y: -100
        },
        animate: {
            y: 0
        },
        transition: {
            duration: .6,
            ease: "easeOut"
        },
        children: [w.jsxs("div", {
            className: "absolute inset-0 overflow-hidden pointer-events-none",
            children: [
                [...Array(8)].map((x, T) => w.jsx(L.div, {
                    className: "absolute w-1 h-1 bg-blue-400/40 rounded-full",
                    animate: {
                        y: [0, -30, 0],
                        x: [0, Math.sin(T) * 20, 0],
                        scale: [1, 1.5, 1],
                        opacity: [.3, .7, .3]
                    },
                    transition: {
                        duration: 3 + T * .3,
                        repeat: 1 / 0,
                        delay: T * .2,
                        ease: "easeInOut"
                    },
                    style: {
                        left: `${10 + T * 12}%`,
                        top: `${50 + T * 5}%`
                    }
                }, T)), w.jsx(L.div, {
                    className: "absolute -top-10 -left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl",
                    animate: {
                        scale: [1, 1.3, 1],
                        opacity: [.1, .2, .1],
                        x: [0, 15, 0]
                    },
                    transition: {
                        duration: 4,
                        repeat: 1 / 0,
                        ease: "easeInOut"
                    }
                }), w.jsx(L.div, {
                    className: "absolute -top-5 -right-5 w-24 h-24 bg-indigo-500/8 rounded-full blur-xl",
                    animate: {
                        scale: [1.2, 1, 1.2],
                        opacity: [.08, .15, .08],
                        x: [0, -10, 0]
                    },
                    transition: {
                        duration: 5,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                        delay: 1
                    }
                })
            ]
        }), w.jsx("nav", {
            className: "max-w-7xl mx-auto px-4 py-3 relative z-10 mb-3",
            children: w.jsxs("div", {
                className: "flex justify-between items-center",
                children: [w.jsxs(L.div, {
                    className: "flex items-center space-x-3 cursor-pointer",
                    whileHover: {
                        scale: 1.05
                    },
                    transition: {
                        type: "spring",
                        stiffness: 400
                    },
                    onClick: () => y("home"),
                    children: [w.jsxs(L.div, {
                        className: "bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-2 shadow-lg relative overflow-hidden",
                        whileHover: {
                            scale: 1.1,
                            rotate: 360,
                            transition: {
                                type: "spring",
                                stiffness: 300
                            }
                        },
                        children: [w.jsx(L.div, {
                            className: "absolute inset-0 bg-white/20",
                            initial: {
                                x: "-100%"
                            },
                            whileHover: {
                                x: "100%"
                            },
                            transition: {
                                duration: .6
                            }
                        }), w.jsx(h2, {
                            className: "w-5 h-5 text-white relative z-10"
                        })]
                    }), w.jsx(L.span, {
                        className: "text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent tracking-wide",
                        whileHover: {
                            scale: 1.05,
                            transition: {
                                duration: .2
                            }
                        },
                        children: "IFTIKAR"
                    })]
                }), w.jsx(L.div, {
                    className: "hidden lg:flex items-center space-x-1 bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl px-6 py-2 rounded-full transition-all duration-300",
                    whileHover: {
                        boxShadow: "0 10px 40px -10px rgba(59, 130, 246, 0.5)",
                        borderColor: "rgba(99, 102, 241, 0.3)"
                    },
                    children: h.map(x => w.jsxs(L.button, {
                        onClick: () => y(x.to),
                        className: `relative cursor-pointer px-5 py-2 rounded-full font-semibold tracking-wide transition-all duration-300 group ${d === x.to ? "text-blue-600 bg-blue-50 shadow-inner" : "text-gray-800 hover:text-blue-600"}`,
                        whileHover: {
                            scale: 1.05,
                            y: -1,
                            transition: {
                                type: "spring",
                                stiffness: 400
                            }
                        },
                        whileTap: {
                            scale: .95
                        },
                        children: [x.name, w.jsx(L.span, {
                            className: `absolute left-1/2 bottom-1 h-0.5 rounded-full -translate-x-1/2 ${d === x.to ? "w-4/5 bg-gradient-to-r from-blue-500 to-indigo-500" : "w-0 bg-gradient-to-r from-blue-400 to-indigo-400 group-hover:w-4/5"}`,
                            transition: {
                                duration: .3,
                                ease: "easeOut"
                            }
                        }), d === x.to && w.jsxs(w.Fragment, {
                            children: [w.jsx(L.div, {
                                className: "absolute -top-1 -left-1 w-2 h-2 bg-blue-400 rounded-full",
                                animate: {
                                    scale: [1, 1.5, 1],
                                    opacity: [.7, 1, .7]
                                },
                                transition: {
                                    duration: 2,
                                    repeat: 1 / 0,
                                    ease: "easeInOut"
                                }
                            }), w.jsx(L.div, {
                                className: "absolute -top-1 -right-1 w-2 h-2 bg-indigo-400 rounded-full",
                                animate: {
                                    scale: [1, 1.5, 1],
                                    opacity: [.7, 1, .7]
                                },
                                transition: {
                                    duration: 2,
                                    repeat: 1 / 0,
                                    ease: "easeInOut",
                                    delay: 1
                                }
                            })]
                        })]
                    }, x.name))
                }), w.jsxs(L.a, {
                    href: "https://drive.google.com/file/d/1OA0nXxwAhNTXUH5ZLMowzwZ8xgk6m5Kw/view?usp=sharing",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "hidden lg:flex items-center gap-3 bg-gradient-to-br from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full hover:opacity-90 transition-all shadow-lg relative overflow-hidden group",
                    whileHover: {
                        scale: 1.05,
                        boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.8)"
                    },
                    whileTap: {
                        scale: .95
                    },
                    children: [w.jsx(L.div, {
                        className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full",
                        transition: {
                            duration: .8
                        }
                    }), w.jsx(L.div, {
                        animate: {
                            scale: [1, 1.2, 1],
                            transition: {
                                duration: 2,
                                repeat: 1 / 0,
                                ease: "easeInOut"
                            }
                        },
                        children: w.jsx(eg, {
                            className: "text-white text-lg relative z-10"
                        })
                    }), w.jsx("span", {
                        className: "font-semibold relative z-10",
                        children: "Resume"
                    })]
                }), w.jsxs("div", {
                    className: "lg:hidden relative",
                    children: [w.jsx(L.button, {
                        onClick: () => f(!u),
                        "aria-label": "Toggle Menu",
                        className: "focus:outline-none p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20",
                        whileHover: {
                            scale: 1.1,
                            backgroundColor: "rgba(255,255,255,0.2)"
                        },
                        whileTap: {
                            scale: .9
                        },
                        children: w.jsx(L.div, {
                            animate: {
                                rotate: u ? 90 : 0
                            },
                            transition: {
                                duration: .3
                            },
                            children: u ? w.jsx(S8, {
                                className: "h-6 w-6 text-white"
                            }) : w.jsx(g8, {
                                className: "h-6 w-6 text-white"
                            })
                        })
                    }), w.jsx(H6, {
                        children: u && w.jsxs(L.ul, {
                            variants: v,
                            initial: "closed",
                            animate: "open",
                            exit: "closed",
                            className: "absolute right-0 top-full mt-2 p-4 shadow-2xl bg-white/95 backdrop-blur-xl rounded-2xl w-64 space-y-2 border border-white/20",
                            children: [h.map(x => w.jsx(L.li, {
                                variants: b,
                                children: w.jsxs(L.button, {
                                    onClick: () => y(x.to),
                                    className: `w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-200 ${d === x.to ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`,
                                    whileHover: {
                                        scale: 1.02,
                                        x: 5,
                                        transition: {
                                            type: "spring",
                                            stiffness: 400
                                        }
                                    },
                                    whileTap: {
                                        scale: .98
                                    },
                                    children: [x.name, d === x.to && w.jsx(L.span, {
                                        className: "ml-2 w-2 h-2 bg-white rounded-full inline-block",
                                        initial: {
                                            scale: 0
                                        },
                                        animate: {
                                            scale: 1
                                        },
                                        transition: {
                                            duration: .2
                                        }
                                    })]
                                })
                            }, x.name)), w.jsx(L.li, {
                                variants: b,
                                className: "pt-2",
                                children: w.jsxs(L.a, {
                                    href: "https://drive.google.com/file/d/1OA0nXxwAhNTXUH5ZLMowzwZ8xgk6m5Kw/view?usp=sharing",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl py-3 px-4 font-semibold hover:opacity-90 transition-all shadow-lg w-full",
                                    whileHover: {
                                        scale: 1.02
                                    },
                                    whileTap: {
                                        scale: .98
                                    },
                                    children: [w.jsx(eg, {}), "Download CV"]
                                })
                            })]
                        })
                    })]
                })]
            })
        })]
    })
};
var nr = {},
    tg;

function $8() {
    if (tg) return nr;
    tg = 1, Object.defineProperty(nr, "__esModule", {
        value: !0
    });
    var n = ag(),
        i = zn(),
        l = function () {
            return l = Object.assign || function (h) {
                for (var m, y = 1, v = arguments.length; y < v; y++)
                    for (var b in m = arguments[y]) Object.prototype.hasOwnProperty.call(m, b) && (h[b] = m[b]);
                return h
            }, l.apply(this, arguments)
        };

    function s(h, m) {
        var y, v;
        switch (m.type) {
            case "TYPE":
                return l(l({}, h), {
                    speed: m.speed,
                    text: (y = m.payload) === null || y === void 0 ? void 0 : y.substring(0, h.text.length + 1)
                });
            case "DELAY":
                return l(l({}, h), {
                    speed: m.payload
                });
            case "DELETE":
                return l(l({}, h), {
                    speed: m.speed,
                    text: (v = m.payload) === null || v === void 0 ? void 0 : v.substring(0, h.text.length - 1)
                });
            case "COUNT":
                return l(l({}, h), {
                    count: h.count + 1
                });
            default:
                return h
        }
    }
    var u = function (h) {
        var m = h.words,
            y = m === void 0 ? ["Hello World!", "This is", "a simple Typewriter"] : m,
            v = h.loop,
            b = v === void 0 ? 1 : v,
            x = h.typeSpeed,
            T = x === void 0 ? 80 : x,
            D = h.deleteSpeed,
            O = D === void 0 ? 50 : D,
            E = h.delaySpeed,
            V = E === void 0 ? 1500 : E,
            j = h.onLoopDone,
            Q = h.onType,
            U = h.onDelete,
            M = h.onDelay,
            G = i.useReducer(s, {
                speed: T,
                text: "",
                count: 0
            }),
            Z = G[0],
            ee = Z.speed,
            ie = Z.text,
            ne = Z.count,
            K = G[1],
            se = i.useRef(0),
            ae = i.useRef(!1),
            be = i.useRef(!1),
            H = i.useRef(!1),
            $ = i.useRef(!1),
            oe = i.useCallback(function () {
                var ye = ne % y.length,
                    A = y[ye];
                be.current ? (K({
                    type: "DELETE",
                    payload: A,
                    speed: O
                }), ie === "" && (be.current = !1, K({
                    type: "COUNT"
                }))) : (K({
                    type: "TYPE",
                    payload: A,
                    speed: T
                }), H.current = !0, ie === A && (K({
                    type: "DELAY",
                    payload: V
                }), H.current = !1, $.current = !0, setTimeout(function () {
                    $.current = !1, be.current = !0
                }, V), b > 0 && (se.current += 1, se.current / y.length === b && ($.current = !1, ae.current = !0)))), H.current && Q && Q(se.current), be.current && U && U(), $.current && M && M()
            }, [ne, V, O, b, T, y, ie, Q, U, M]);
        return i.useEffect(function () {
            var ye = setTimeout(oe, ee);
            return ae.current && clearTimeout(ye),
                function () {
                    return clearTimeout(ye)
                }
        }, [oe, ee]), i.useEffect(function () {
            j && ae.current && j()
        }, [j]), [ie, {
            isType: H.current,
            isDelay: $.current,
            isDelete: be.current,
            isDone: ae.current
        }]
    },
        f = "styles-module_blinkingCursor__yugAC",
        d = "styles-module_blinking__9VXRT";
    (function (h, m) {
        m === void 0 && (m = {});
        var y = m.insertAt;
        if (typeof document < "u") {
            var v = document.head || document.getElementsByTagName("head")[0],
                b = document.createElement("style");
            b.type = "text/css", y === "top" && v.firstChild ? v.insertBefore(b, v.firstChild) : v.appendChild(b), b.styleSheet ? b.styleSheet.cssText = h : b.appendChild(document.createTextNode(h))
        }
    })(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");
    var p = i.memo(function (h) {
        var m = h.cursorBlinking,
            y = m === void 0 || m,
            v = h.cursorStyle,
            b = v === void 0 ? "|" : v,
            x = h.cursorColor,
            T = x === void 0 ? "inherit" : x;
        return n.jsx("span", l({
            style: {
                color: T
            },
            className: "".concat(f, " ").concat(y ? d : "")
        }, {
            children: b
        }))
    });
    return nr.Cursor = p, nr.Typewriter = function (h) {
        var m = h.words,
            y = m === void 0 ? ["Hello World!", "This is", "a simple Typewriter"] : m,
            v = h.loop,
            b = v === void 0 ? 1 : v,
            x = h.typeSpeed,
            T = x === void 0 ? 80 : x,
            D = h.deleteSpeed,
            O = D === void 0 ? 50 : D,
            E = h.delaySpeed,
            V = E === void 0 ? 1500 : E,
            j = h.cursor,
            Q = j !== void 0 && j,
            U = h.cursorStyle,
            M = U === void 0 ? "|" : U,
            G = h.cursorColor,
            Z = G === void 0 ? "inherit" : G,
            ee = h.cursorBlinking,
            ie = ee === void 0 || ee,
            ne = h.onLoopDone,
            K = h.onType,
            se = h.onDelay,
            ae = h.onDelete,
            be = u({
                words: y,
                loop: b,
                typeSpeed: T,
                deleteSpeed: O,
                delaySpeed: V,
                onLoopDone: ne,
                onType: K,
                onDelay: se,
                onDelete: ae
            })[0];
        return n.jsxs(n.Fragment, {
            children: [n.jsx("span", {
                children: be
            }), Q && n.jsx(p, {
                cursorStyle: M,
                cursorColor: Z,
                cursorBlinking: ie
            })]
        })
    }, nr.useTypewriter = u, nr
}
var J8 = $8();
const W8 = "/assets/ifti.jpg",
    eT = () => {
        const n = {
            animate: {
                y: [0, -20, 0],
                transition: {
                    duration: 4,
                    repeat: 1 / 0,
                    ease: "easeInOut"
                }
            }
        },
            i = {
                initial: {
                    scale: 0,
                    rotate: -180
                },
                animate: {
                    scale: 1,
                    rotate: 0,
                    transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        duration: .8
                    }
                },
                hover: {
                    scale: 1.3,
                    rotate: 360,
                    y: -5,
                    transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                    }
                }
            },
            l = {
                initial: {
                    scale: 1
                },
                hover: {
                    scale: 1.05,
                    boxShadow: "0 10px 30px -10px rgba(99, 102, 241, 0.5)",
                    transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                    }
                },
                tap: {
                    scale: .95
                }
            },
            s = {
                hidden: {
                    opacity: 0,
                    y: 30
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: .8,
                        ease: "easeOut"
                    }
                }
            },
            u = {
                hidden: {
                    opacity: 0
                },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: .2,
                        delayChildren: .3
                    }
                }
            },
            f = {
                animate: {
                    rotate: 360,
                    transition: {
                        duration: 20,
                        repeat: 1 / 0,
                        ease: "linear"
                    }
                }
            },
            d = {
                animate: {
                    rotate: -360,
                    transition: {
                        duration: 15,
                        repeat: 1 / 0,
                        ease: "linear"
                    }
                }
            };
        return w.jsxs("section", {
            id: "home",
            className: "relative overflow-hidden min-h-screen flex items-center justify-center pt-20 lg:pt-10 pb-8 sm:pb-10 lg:py-2 mt-6 bg-gradient-to-b from-black via-gray-900 to-black",
            children: [w.jsx(L.div, {
                className: "absolute top-20 left-10 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-20",
                animate: {
                    scale: [1, 1.2, 1],
                    opacity: [.2, .3, .2]
                },
                transition: {
                    duration: 6,
                    repeat: 1 / 0,
                    ease: "easeInOut"
                }
            }), w.jsx(L.div, {
                className: "absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20",
                animate: {
                    scale: [1.2, 1, 1.2],
                    opacity: [.3, .2, .3]
                },
                transition: {
                    duration: 7,
                    repeat: 1 / 0,
                    ease: "easeInOut"
                }
            }), w.jsx("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [...Array(8)].map((p, h) => w.jsx(L.div, {
                    className: "absolute w-2 h-2 bg-cyan-400 rounded-full opacity-40",
                    animate: {
                        y: [0, -100, 0],
                        x: [0, Math.sin(h) * 30, 0],
                        scale: [1, 1.5, 1]
                    },
                    transition: {
                        duration: 4 + h * .5,
                        repeat: 1 / 0,
                        delay: h * .4,
                        ease: "easeInOut"
                    },
                    style: {
                        left: `${20 + h * 10}%`,
                        top: `${30 + h * 8}%`
                    }
                }, h))
            }), w.jsxs("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-center relative z-10 mt-8 lg:mt-0",
                children: [w.jsxs(L.div, {
                    variants: u,
                    initial: "hidden",
                    animate: "visible",
                    className: "lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 px-4 sm:px-0",
                    children: [w.jsx(L.div, {
                        variants: s,
                        className: "mb-6 sm:mb-8",
                        children: w.jsx(L.div, {
                            className: "flex items-center justify-center lg:justify-start mb-6 sm:mb-8",
                            initial: {
                                opacity: 0,
                                x: -50
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: .8,
                                delay: .2
                            },
                            children: w.jsxs("div", {
                                className: "flex items-center space-x-3 group",
                                children: [w.jsxs(L.div, {
                                    className: "relative",
                                    whileHover: {
                                        scale: 1.1,
                                        rotate: 360
                                    },
                                    transition: {
                                        type: "spring",
                                        stiffness: 300
                                    },
                                    children: [w.jsx("div", {
                                        className: "w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg",
                                        children: w.jsx("span", {
                                            className: "text-sm sm:text-lg",
                                            children: "🚀"
                                        })
                                    }), w.jsx(L.div, {
                                        className: "absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-30 blur-md",
                                        transition: {
                                            duration: .3
                                        }
                                    })]
                                }), w.jsxs("div", {
                                    className: "flex flex-col",
                                    children: [w.jsx(L.span, {
                                        className: "text-gray-400 text-xs sm:text-sm font-medium tracking-widest uppercase",
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1
                                        },
                                        transition: {
                                            delay: .5
                                        },
                                        children: "Welcome"
                                    }), w.jsx(L.span, {
                                        className: "text-white text-lg sm:text-xl font-bold",
                                        initial: {
                                            opacity: 0,
                                            y: 10
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: .7
                                        },
                                        children: "to my digital space"
                                    })]
                                })]
                            })
                        })
                    }), w.jsxs(L.div, {
                        variants: s,
                        className: "mb-6 sm:mb-8",
                        children: [w.jsxs("h1", {
                            className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight",
                            children: ["I'm", " ", w.jsx(L.span, {
                                className: "bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 inline-block",
                                whileInView: {
                                    backgroundPosition: ["0%", "100%"]
                                },
                                transition: {
                                    duration: 2,
                                    repeat: 1 / 0,
                                    repeatType: "reverse"
                                },
                                style: {
                                    backgroundSize: "200% 100%"
                                },
                                children: "Iftikar Rahaman,"
                            })]
                        }), w.jsx("div", {
                            className: "h-14 sm:h-16 md:h-20 flex items-center justify-center lg:justify-start mt-2 sm:mt-4",
                            children: w.jsx(L.span, {
                                className: "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-200",
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: 1
                                },
                                children: w.jsx(J8.Typewriter, {
                                    words: ["CSE Student", "LLM Enthusiast", "Full Stack Developer", "Machine Learning", "NLP", "AI Explorer"],
                                    loop: 0,
                                    cursor: !0,
                                    cursorStyle: "|",
                                    cursorColor: "#8b5cf6",
                                    typeSpeed: 70,
                                    deleteSpeed: 40,
                                    delaySpeed: 2e3
                                })
                            })
                        })]
                    }), w.jsx(L.div, {
                        variants: s,
                        className: "mb-6 sm:mb-8",
                        children: w.jsxs(L.p, {
                            className: "text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                delay: .8
                            },
                            children: ["I'm a passionate", " ", w.jsx("span", {
                                className: "text-indigo-400 font-semibold",
                                children: "Full Stack developer"
                            }), " and", " ", w.jsx("span", {
                                className: "text-purple-400 font-semibold",
                                children: "CSE student"
                            }), " dedicated to creating dynamic, user-focused web applications. I love combining logic, creativity, and performance to build software that leaves a lasting impression."]
                        })
                    }), w.jsxs(L.div, {
                        variants: s,
                        className: "flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8",
                        children: [w.jsx(L.div, {
                            variants: l,
                            whileHover: "hover",
                            whileTap: "tap",
                            className: "flex justify-center",
                            children: w.jsxs(cd.Link, {
                                to: "projects",
                                spy: !0,
                                smooth: !0,
                                duration: 800,
                                offset: -80,
                                className: "flex items-center justify-center space-x-2 bg-gradient-to-br from-indigo-500 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:opacity-90 transition-all text-base sm:text-lg font-semibold whitespace-nowrap cursor-pointer shadow-2xl w-full sm:w-auto",
                                children: [w.jsx("span", {
                                    children: "View My Work"
                                }), w.jsx(L.div, {
                                    animate: {
                                        y: [0, 5, 0]
                                    },
                                    transition: {
                                        duration: 2,
                                        repeat: 1 / 0
                                    },
                                    children: w.jsx(Jy, {
                                        className: "text-xs sm:text-sm"
                                    })
                                })]
                            })
                        }), w.jsx(L.div, {
                            variants: l,
                            whileHover: "hover",
                            whileTap: "tap",
                            className: "flex justify-center",
                            children: w.jsxs(L.a, {
                                href: "https://drive.google.com/file/d/1OA0nXxwAhNTXUH5ZLMowzwZ8xgk6m5Kw/view?usp=sharing",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "flex items-center justify-center space-x-2 text-white border-2 border-indigo-500 px-4 sm:px-6 py-3 sm:py-4 rounded-full hover:bg-indigo-950 transition-all text-base sm:text-lg whitespace-nowrap w-full sm:w-auto shadow-lg backdrop-blur-sm",
                                children: [w.jsx(X8, {
                                    className: "text-indigo-400 text-sm sm:text-base"
                                }), w.jsx("span", {
                                    children: "View & Download Resume"
                                })]
                            })
                        })]
                    }), w.jsx(L.div, {
                        variants: s,
                        className: "flex space-x-6 sm:space-x-8 justify-center lg:justify-start",
                        children: [{
                            icon: w.jsx(P8, {}),
                            href: "https://github.com/IFTI-KAR",
                            label: "GitHub"
                        }, {
                            icon: w.jsx(k8, {}),
                            href: "https://www.linkedin.com/in/iftikar-rahaman91/",
                            label: "LinkedIn"
                        }, {
                            icon: w.jsx(B8, {}),
                            href: "https://www.facebook.com/share/1CvrUiMG9y",
                            label: "Facebook"
                        }].map((p, h) => w.jsx(L.a, {
                            href: p.href,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "aria-label": p.label,
                            variants: i,
                            initial: "initial",
                            animate: "animate",
                            whileHover: "hover",
                            className: "text-2xl sm:text-3xl text-gray-300 hover:text-indigo-400 transition-colors p-2 sm:p-3 rounded-full bg-gray-800/50 backdrop-blur-sm",
                            style: {
                                transitionDelay: `${h * .1}s`
                            },
                            children: p.icon
                        }, p.label))
                    })]
                }), w.jsxs(L.div, {
                    initial: {
                        opacity: 0,
                        scale: .8,
                        rotate: -5
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        rotate: 0
                    },
                    transition: {
                        duration: 1.2,
                        type: "spring",
                        stiffness: 100
                    },
                    className: "lg:w-1/2 flex justify-center items-center relative mt-6 sm:mt-8 lg:mt-0 mb-8 lg:mb-0",
                    children: [w.jsx(L.div, {
                        className: "absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full opacity-40 blur-3xl z-0",
                        animate: {
                            scale: [1, 1.1, 1],
                            opacity: [.3, .5, .3],
                            rotate: [0, 180, 360]
                        },
                        transition: {
                            duration: 8,
                            repeat: 1 / 0,
                            ease: "linear"
                        }
                    }), w.jsxs(L.div, {
                        className: "relative z-10 flex items-center justify-center",
                        children: [w.jsx(L.div, {
                            variants: f,
                            animate: "animate",
                            className: "absolute border-2 border-dashed border-indigo-400/60 rounded-full",
                            style: {
                                width: "calc(100% + 80px)",
                                height: "calc(100% + 80px)"
                            },
                            children: [...Array(12)].map((p, h) => w.jsx(L.div, {
                                className: "absolute w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full",
                                style: {
                                    top: "50%",
                                    left: "0%",
                                    transform: "translate(-50%, -50%)",
                                    transformOrigin: "calc(100% + 40px) center"
                                },
                                animate: {
                                    scale: [1, 1.5, 1],
                                    opacity: [.7, 1, .7]
                                },
                                transition: {
                                    duration: 2,
                                    repeat: 1 / 0,
                                    delay: h * .2
                                }
                            }, h))
                        }), w.jsx(L.div, {
                            variants: d,
                            animate: "animate",
                            className: "absolute border border-purple-400/40 rounded-full",
                            style: {
                                width: "calc(100% + 50px)",
                                height: "calc(100% + 50px)"
                            },
                            children: [...Array(8)].map((p, h) => w.jsx(L.div, {
                                className: "absolute w-2 h-2 bg-cyan-400 rounded-full",
                                style: {
                                    top: "50%",
                                    left: "0%",
                                    transform: "translate(-50%, -50%)",
                                    transformOrigin: "calc(100% + 25px) center"
                                },
                                animate: {
                                    scale: [1, 1.8, 1]
                                },
                                transition: {
                                    duration: 1.5,
                                    repeat: 1 / 0,
                                    delay: h * .3
                                }
                            }, h))
                        }), w.jsx(L.div, {
                            className: "absolute border-2 border-indigo-300/30 rounded-full",
                            style: {
                                width: "calc(100% + 20px)",
                                height: "calc(100% + 20px)"
                            },
                            animate: {
                                scale: [1, 1.1, 1],
                                opacity: [.5, .8, .5],
                                borderColor: ["rgba(99, 102, 241, 0.3)", "rgba(139, 92, 246, 0.6)", "rgba(99, 102, 241, 0.3)"]
                            },
                            transition: {
                                duration: 3,
                                repeat: 1 / 0,
                                ease: "easeInOut"
                            }
                        }), w.jsx(L.div, {
                            variants: n,
                            animate: "animate",
                            className: "relative",
                            children: w.jsx(L.img, {
                                src: W8,
                                alt: "Iftikar Rahaman",
                                className: "w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-[26rem] xl:h-[26rem] object-cover rounded-full border-4 border-indigo-500/80 shadow-[0_0_40px_rgba(99,102,241,0.6)] sm:shadow-[0_0_60px_rgba(99,102,241,0.6)]",
                                whileHover: {
                                    scale: 1.05,
                                    borderColor: "rgba(139, 92, 246, 0.8)",
                                    boxShadow: "0 0 60px rgba(139, 92, 246, 0.8)"
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 300
                                }
                            })
                        }), w.jsxs(w.Fragment, {
                            children: [w.jsx(L.div, {
                                className: "hidden sm:block absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-2xl z-20 border border-cyan-300/30 backdrop-blur-sm",
                                animate: {
                                    y: [0, -12, 0],
                                    rotate: [0, 3, -2, 0],
                                    scale: [1, 1.05, 1]
                                },
                                transition: {
                                    duration: 5,
                                    repeat: 1 / 0,
                                    ease: "easeInOut"
                                },
                                whileHover: {
                                    scale: 1.1,
                                    boxShadow: "0 0 25px rgba(34, 211, 238, 0.4)"
                                },
                                children: w.jsxs("div", {
                                    className: "flex items-center space-x-1 sm:space-x-2",
                                    children: [w.jsx("svg", {
                                        className: "w-3 h-3 sm:w-4 sm:h-4",
                                        fill: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: w.jsx("path", {
                                            d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                                        })
                                    }), w.jsx("span", {
                                        className: "bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent",
                                        children: "Full Stack"
                                    }), w.jsx("div", {
                                        className: "w-1 h-1 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"
                                    })]
                                })
                            }), w.jsx(L.div, {
                                className: "hidden sm:block absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-2xl z-20 border border-pink-300/30 backdrop-blur-sm",
                                animate: {
                                    y: [0, 12, 0],
                                    rotate: [0, -3, 2, 0],
                                    scale: [1, 1.05, 1]
                                },
                                transition: {
                                    duration: 5,
                                    repeat: 1 / 0,
                                    ease: "easeInOut",
                                    delay: 1.5
                                },
                                whileHover: {
                                    scale: 1.1,
                                    boxShadow: "0 0 25px rgba(236, 72, 153, 0.4)"
                                },
                                children: w.jsxs("div", {
                                    className: "flex items-center space-x-1 sm:space-x-2",
                                    children: [w.jsx("svg", {
                                        className: "w-3 h-3 sm:w-4 sm:h-4",
                                        fill: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: w.jsx("path", {
                                            d: "M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 5.5V7H9V5.5L3 7V9L5 8.5V15.5L3 15V17L9 18.5V17H15V18.5L21 17V15L19 15.5V8.5L21 9Z"
                                        })
                                    }), w.jsx("span", {
                                        className: "bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent",
                                        children: "AI Explorer"
                                    }), w.jsx("div", {
                                        className: "w-1 h-1 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-pulse"
                                    })]
                                })
                            }), w.jsx(L.div, {
                                className: "hidden sm:block absolute -top-2 -left-2 sm:-top-3 sm:-left-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-2xl z-20 border border-green-300/30 backdrop-blur-sm",
                                animate: {
                                    y: [0, -8, 0],
                                    x: [0, -5, 0],
                                    rotate: [0, -2, 1, 0]
                                },
                                transition: {
                                    duration: 4,
                                    repeat: 1 / 0,
                                    ease: "easeInOut",
                                    delay: .5
                                },
                                whileHover: {
                                    scale: 1.1,
                                    boxShadow: "0 0 25px rgba(16, 185, 129, 0.4)"
                                },
                                children: w.jsxs("div", {
                                    className: "flex items-center space-x-1 sm:space-x-2",
                                    children: [w.jsx("svg", {
                                        className: "w-3 h-3 sm:w-4 sm:h-4",
                                        fill: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: w.jsx("path", {
                                            d: "M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"
                                        })
                                    }), w.jsx("span", {
                                        className: "bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent",
                                        children: "Full Stack"
                                    })]
                                })
                            }), w.jsx(L.div, {
                                className: "hidden sm:block absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-2xl z-20 border border-orange-300/30 backdrop-blur-sm",
                                animate: {
                                    y: [0, 8, 0],
                                    x: [0, 5, 0],
                                    rotate: [0, 2, -1, 0]
                                },
                                transition: {
                                    duration: 4,
                                    repeat: 1 / 0,
                                    ease: "easeInOut",
                                    delay: 2
                                },
                                whileHover: {
                                    scale: 1.1,
                                    boxShadow: "0 0 25px rgba(249, 115, 22, 0.4)"
                                },
                                children: w.jsxs("div", {
                                    className: "flex items-center space-x-1 sm:space-x-2",
                                    children: [w.jsx("svg", {
                                        className: "w-3 h-3 sm:w-4 sm:h-4",
                                        fill: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: w.jsx("path", {
                                            d: "M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"
                                        })
                                    }), w.jsx("span", {
                                        className: "bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent",
                                        children: "LLM Enthusiast"
                                    })]
                                })
                            })]
                        })]
                    })]
                })]
            }), w.jsx(L.div, {
                className: "absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white text-base sm:text-lg",
                animate: {
                    y: [0, 8, 0]
                },
                transition: {
                    duration: 2,
                    repeat: 1 / 0
                },
                children: w.jsx(Jy, {})
            })]
        })
    };

function tT(n) {
    return Fe({
        attr: {
            role: "img",
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
            },
            child: []
        }]
    })(n)
}

function nT(n) {
    return Fe({
        attr: {
            role: "img",
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"
            },
            child: []
        }]
    })(n)
}

function aT(n) {
    return Fe({
        attr: {
            role: "img",
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            },
            child: []
        }]
    })(n)
}

function iT(n) {
    return Fe({
        attr: {
            role: "img",
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
            },
            child: []
        }]
    })(n)
}

function rT(n) {
    return Fe({
        attr: {
            role: "img",
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
            },
            child: []
        }]
    })(n)
}

function lT(n) {
    return Fe({
        attr: {
            role: "img",
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"
            },
            child: []
        }]
    })(n)
}

function sT(n) {
    return Fe({
        attr: {
            role: "img",
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"
            },
            child: []
        }]
    })(n)
}

function oT(n) {
    return Fe({
        attr: {
            role: "img",
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"
            },
            child: []
        }]
    })(n)
}

function uT(n) {
    return Fe({
        attr: {
            role: "img",
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
            },
            child: []
        }]
    })(n)
}

function cT(n) {
    return Fe({
        attr: {
            role: "img",
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603l6.168 3.564z"
            },
            child: []
        }]
    })(n)
}

function TS_Icon(n) {
    return Fe({
        attr: { role: "img", viewBox: "0 0 24 24" },
        child: [{ tag: "path", attr: { d: "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" }, child: [] }]
    })(n)
}

function PG_Icon(n) {
    return Fe({
        attr: { role: "img", viewBox: "0 0 24 24" },
        child: [{ tag: "path", attr: { d: "M17.128 0a10.134 10.134 0 0 0-2.755.403l-.063.02A10.922 10.922 0 0 0 12.6.258C11.89.258 11.19.373 10.518.575a9.495 9.495 0 0 0-2.984-.472C3.352.103 0 3.165 0 7.486c0 2.37.749 3.98 1.98 5.423.424.496.986.953 1.58 1.357-.043.138-.08.285-.114.417-.05.195-.09.386-.111.559-.079.637-.034 1.089.096 1.479.143.424.39.717.675.898.3.19.64.265.985.265.354 0 .72-.08 1.122-.2.215-.065.448-.148.696-.243.141 1.234.444 2.508.97 3.588.529 1.086 1.347 2.056 2.5 2.459a3.437 3.437 0 0 0 1.122.195c.62 0 1.167-.166 1.636-.41.041.04.08.08.123.117.516.458 1.132.712 1.803.712.672 0 1.331-.253 1.937-.7a4.843 4.843 0 0 0 .991-1.01c.896-.206 1.7-.6 2.381-1.137 1.297-1.026 2.1-2.555 2.1-4.627 0-.695-.087-1.315-.227-1.875.198-.144.387-.295.556-.455 1.023-.975 1.554-2.208 1.554-4.115C24 3.508 21.725 0 17.128 0zm.252 1.607c3.827 0 5.013 2.986 5.013 5.765 0 1.59-.432 2.548-1.2 3.27-.08.076-.168.146-.26.213-.069-.17-.144-.34-.226-.507 1.086-1.814.567-3.685-.781-4.876a5.917 5.917 0 0 0-1.177-.826 6.064 6.064 0 0 0-.47-.222c-.172-.073-.348-.14-.527-.2a7.76 7.76 0 0 0-.917-.228c-.186-.036-.38-.063-.572-.084a10.15 10.15 0 0 0-.695-.042c-.1-.002-.207-.003-.313-.003-.52 0-1.037.042-1.535.119a8.98 8.98 0 0 0-.838.177 9.3 9.3 0 0 0-.809.258 8.77 8.77 0 0 0-.637.26 7.907 7.907 0 0 0-.641.345 7.523 7.523 0 0 0-.567.39 6.928 6.928 0 0 0-.577.519 5.914 5.914 0 0 0-.489.585 5.065 5.065 0 0 0-.373.65 4.48 4.48 0 0 0-.248.717 4.45 4.45 0 0 0-.094.784c0 .194.013.391.04.589.024.177.06.356.106.533-.095-.01-.19-.016-.285-.016-1.93 0-3.014-1.591-3.014-4.002C1.607 3.746 4.44 1.607 7.534 1.607c.928 0 1.833.22 2.668.586A10.418 10.418 0 0 1 12.6 1.866c.64 0 1.249.11 1.82.284a8.5 8.5 0 0 1 2.96-.543zm-4.78 2.86c.358 0 .71.026 1.054.073a6.15 6.15 0 0 1 1.898.598c.238.126.462.27.673.43a4.34 4.34 0 0 1 .538.48 3.818 3.818 0 0 1 .78 1.282c.17.48.25.986.25 1.505 0 .464-.063.938-.196 1.398a4.53 4.53 0 0 1-.58 1.24c-.257.381-.572.724-.931 1.01a5.098 5.098 0 0 1-1.25.67 6.456 6.456 0 0 1-1.483.348c-.261.033-.527.05-.793.05a7.264 7.264 0 0 1-.924-.06 6.43 6.43 0 0 1-.832-.188 5.12 5.12 0 0 1-.708-.303 4.123 4.123 0 0 1-.576-.41 3.79 3.79 0 0 1-.453-.517 3.74 3.74 0 0 1-.335-.623 4.41 4.41 0 0 1-.213-.732 5.07 5.07 0 0 1-.078-.884c0-.472.066-.955.204-1.425a4.69 4.69 0 0 1 .59-1.26 4.31 4.31 0 0 1 .942-1.013 4.85 4.85 0 0 1 1.264-.664 5.97 5.97 0 0 1 1.49-.306c.148-.01.3-.016.449-.016z" }, child: [] }]
    })(n)
}

function TF_Icon(n) {
    return Fe({
        attr: { role: "img", viewBox: "0 0 24 24" },
        child: [{ tag: "path", attr: { d: "M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603l6.168 3.564z" }, child: [] }]
    })(n)
}

function PT_Icon(n) {
    return Fe({
        attr: { role: "img", viewBox: "0 0 24 24" },
        child: [{ tag: "path", attr: { d: "M12.005 0L4.952 4.012v4.925l-4.953 2.86V16.8L0 16.992v.045l4.952 2.868 7.053-4.12 7.052 4.12L24 16.992v-.196l-.002-.004-4.95-2.859V11.8l-4.954-2.863V4.012zm0 1.149l6.04 3.488-6.04 3.488-6.04-3.488zm-6.04 8.64l6.04 3.488v6.975l-6.04-3.488zm12.08 0v6.975l-6.04 3.488V13.277z" }, child: [] }]
    })(n)
}

function SK_Icon(n) {
    return Fe({
        attr: { role: "img", viewBox: "0 0 24 24" },
        child: [{ tag: "path", attr: { d: "M20.548 8.27h-.003c-.006-.022-.996-2.964-3.64-2.964-2.04 0-3.107 1.49-3.107 3.37 0 2.03 1.29 3.18 3.37 3.18 1.56 0 2.68-.82 3.01-2.19h-3.08V8.27h3.45zm-7.488-2.76h-2.19V7.8h-2.3V5.51H6.38v7.48h2.19v-2.5h2.3v2.5h2.19V5.51zm9.59 4.8c-.32 1.79-1.82 2.98-3.74 2.98-2.37 0-3.97-1.65-3.97-4.01 0-2.29 1.6-4.14 3.97-4.14 2.27 0 3.55 1.46 3.74 3.27v.08h-2.19c-.12-.78-.68-1.56-1.55-1.56-1.04 0-1.73.87-1.73 2.3 0 1.5.69 2.32 1.73 2.32.87 0 1.43-.76 1.55-1.49h2.19v.23z" }, child: [] }]
    })(n)
}

function PD_Icon(n) {
    return Fe({
        attr: { role: "img", viewBox: "0 0 24 24" },
        child: [{ tag: "path", attr: { d: "M8.317 0v6.578h-.002C6.108 6.616 4.23 8.19 4.23 10.634c0 2.522 1.985 4.15 4.085 4.15 2.073 0 4.085-1.628 4.085-4.15V0H8.317zm0 1.744h2.396v8.89c0 1.63-1.1 2.647-2.396 2.647-1.296 0-2.396-1.017-2.396-2.647 0-1.619 1.1-2.648 2.396-2.648h.004V1.744zM15.683 9.216v6.578H13.6v-6.578h2.083zM13.6 9.216zm2.083 7.328H13.6V24h2.083v-7.456zm0 0" }, child: [] }]
    })(n)
}

function NP_Icon(n) {
    return Fe({
        attr: { role: "img", viewBox: "0 0 24 24" },
        child: [{ tag: "path", attr: { d: "M0 8.434v7.132l6.443 3.72 6.43-3.72V8.434L6.443 4.717 0 8.434zm11.558 6.539L6.443 18.16l-5.115-3.187V9.027l5.115-3.163 5.115 3.163v5.946zM17.557 0l-6.443 3.716v7.133l6.443 3.716L24 10.849V3.716L17.557 0zm5.115 10.256l-5.115 3.187-5.115-3.187V4.31l5.115-3.187 5.115 3.187v5.946zM6.443 12.58l-6.443 3.72V23.433L6.443 24l6.43-3.567v-7.132L6.443 12.58zm5.115 7.235L6.443 22.77l-5.115-2.74v-5.723l5.115-2.955 5.115 2.955v5.508z" }, child: [] }]
    })(n)
}

function NLP_Icon(n) {
    return Fe({
        attr: { role: "img", viewBox: "0 0 24 24" },
        child: [{ tag: "path", attr: { d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 1.5a8.5 8.5 0 110 17 8.5 8.5 0 010-17zM8.5 8a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm7 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-7 6.5c0 1.933 1.567 3.5 3.5 3.5s3.5-1.567 3.5-3.5H8.5z" }, child: [] }]
    })(n)
}

const fT = [{
    name: "Python",
    icon: w.jsx(oT, {}),
    color: "from-yellow-400 to-yellow-600"
}, {
    name: "HTML5",
    icon: w.jsx(iT, {}),
    color: "from-orange-400 to-orange-600"
}, {
    name: "TypeScript",
    icon: w.jsx(TS_Icon, {}),
    color: "from-blue-500 to-blue-700"
}, {
    name: "JavaScript",
    icon: w.jsx(rT, {}),
    color: "from-yellow-300 to-yellow-500"
}, {
    name: "React",
    icon: w.jsx(uT, {}),
    color: "from-cyan-400 to-cyan-600"
}, {
    name: "Node.js",
    icon: w.jsx(sT, {}),
    color: "from-green-500 to-green-700"
}, {
    name: "PostgreSQL",
    icon: w.jsx(PG_Icon, {}),
    color: "from-blue-600 to-sky-700"
}, {
    name: "Express.js",
    icon: w.jsx(nT, {}),
    color: "from-gray-400 to-gray-600"
}, {
    name: "Data Structures & Algorithms",
    icon: w.jsx(Wy, {}),
    color: "from-pink-400 to-pink-600"
}, {
    name: "Machine Learning & AI",
    icon: w.jsx(cT, {}),
    color: "from-orange-400 to-orange-600"
}, {
    name: "Problem-Solving Skills",
    icon: w.jsx(Wy, {}),
    color: "from-purple-400 to-purple-600"
}, {
    name: "Version Control (Git, GitHub)",
    icon: w.jsx(aT, {}),
    color: "from-gray-400 to-gray-600"
}, {
    name: "TensorFlow",
    icon: w.jsx(TF_Icon, {}),
    color: "from-orange-500 to-amber-600"
}, {
    name: "PyTorch",
    icon: w.jsx(PT_Icon, {}),
    color: "from-red-500 to-rose-600"
}, {
    name: "Scikit-learn",
    icon: w.jsx(SK_Icon, {}),
    color: "from-blue-500 to-sky-600"
}, {
    name: "Pandas",
    icon: w.jsx(PD_Icon, {}),
    color: "from-indigo-500 to-violet-600"
}, {
    name: "NumPy",
    icon: w.jsx(NP_Icon, {}),
    color: "from-cyan-500 to-blue-600"
}, {
    name: "NLP",
    icon: w.jsx(NLP_Icon, {}),
    color: "from-emerald-500 to-teal-600"
}],
    dT = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: .15,
                delayChildren: .3
            }
        }
    },
    hT = {
        hidden: {
            opacity: 0,
            scale: .7,
            y: 50,
            rotate: -10
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: .6
            }
        }
    },
    mT = {
        hidden: {
            scale: 0,
            rotate: -180
        },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
                duration: .8
            }
        },
        hover: {
            scale: 1.2,
            rotate: 360,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    },
    pT = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                delay: .2
            }
        }
    },
    yT = () => w.jsxs("section", {
        id: "skills",
        className: "min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-b from-black via-gray-900 to-black w-full px-6 md:px-12 overflow-hidden py-16 relative",
        children: [w.jsx(L.div, {
            className: "absolute top-1/4 left-1/4 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-20",
            animate: {
                scale: [1, 1.2, 1],
                opacity: [.2, .3, .2]
            },
            transition: {
                duration: 4,
                repeat: 1 / 0,
                ease: "easeInOut"
            }
        }), w.jsx(L.div, {
            className: "absolute bottom-1/4 right-1/4 w-40 h-40 bg-cyan-500 rounded-full blur-3xl opacity-20",
            animate: {
                scale: [1.2, 1, 1.2],
                opacity: [.3, .2, .3]
            },
            transition: {
                duration: 5,
                repeat: 1 / 0,
                ease: "easeInOut"
            }
        }), w.jsxs(L.div, {
            className: "text-center mb-16",
            initial: {
                opacity: 0,
                y: -50
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            transition: {
                duration: .8,
                type: "spring",
                stiffness: 100
            },
            children: [w.jsx(L.h2, {
                className: "text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 select-none",
                initial: {
                    opacity: 0,
                    scale: .9
                },
                whileInView: {
                    opacity: 1,
                    scale: 1
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .6,
                    delay: .2
                },
                children: "Skills & Technologies"
            }), w.jsx(L.div, {
                className: "h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto w-24",
                initial: {
                    width: 0
                },
                whileInView: {
                    width: 96
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .8,
                    delay: .5
                }
            }), w.jsx(L.p, {
                className: "mt-4 text-gray-300 text-lg max-w-2xl mx-auto",
                initial: {
                    opacity: 0
                },
                whileInView: {
                    opacity: 1
                },
                viewport: {
                    once: !0
                },
                transition: {
                    delay: .7
                },
                children: "Technologies I work with to create amazing experiences"
            })]
        }), w.jsx(L.div, {
            className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl w-full relative z-10",
            variants: dT,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
                once: !0,
                amount: .2
            },
            children: fT.map(({
                name: n,
                icon: i,
                color: l
            }, s) => w.jsxs(L.div, {
                className: "flex flex-col items-center cursor-pointer select-none group",
                variants: hT,
                whileHover: {
                    scale: 1.15,
                    y: -10,
                    transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                    }
                },
                whileTap: {
                    scale: .95
                },
                children: [w.jsxs(L.div, {
                    className: `w-24 h-24 rounded-full bg-gradient-to-tr ${l} flex items-center justify-center
                p-1 shadow-2xl relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]`,
                    variants: mT,
                    whileHover: "hover",
                    children: [w.jsx(L.div, {
                        className: "absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent",
                        initial: {
                            x: "-100%"
                        },
                        whileHover: {
                            x: "100%"
                        },
                        transition: {
                            duration: .6
                        }
                    }), w.jsx("div", {
                        className: "w-20 h-20 rounded-full bg-gray-900 flex items-center justify-center text-4xl text-white relative z-10",
                        children: w.jsx(L.div, {
                            whileHover: {
                                scale: 1.3,
                                transition: {
                                    type: "spring",
                                    stiffness: 300
                                }
                            },
                            children: i
                        })
                    }), w.jsx(L.div, {
                        className: `absolute inset-0 rounded-full bg-gradient-to-tr ${l} opacity-0`,
                        animate: {
                            opacity: [0, .5, 0],
                            scale: [1, 1.1, 1]
                        },
                        transition: {
                            duration: 2,
                            repeat: 1 / 0,
                            delay: s * .2
                        }
                    })]
                }), w.jsx(L.p, {
                    className: "mt-6 text-lg font-semibold text-center text-gray-200 group-hover:text-white group-hover:font-bold",
                    variants: pT,
                    whileHover: {
                        scale: 1.1,
                        textShadow: "0 0 8px rgba(99,102,241,0.8)"
                    },
                    children: n
                })]
            }, s))
        }), w.jsx("div", {
            className: "absolute inset-0 overflow-hidden pointer-events-none",
            children: [...Array(10)].map((n, i) => w.jsx(L.div, {
                className: "absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30",
                animate: {
                    y: [0, -100, 0],
                    x: [0, Math.sin(i) * 50, 0],
                    scale: [1, 1.5, 1]
                },
                transition: {
                    duration: 3 + i * .5,
                    repeat: 1 / 0,
                    delay: i * .3,
                    ease: "easeInOut"
                },
                style: {
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                }
            }, i))
        })]
    }),
    gT = "/assets/bracu_logo_12-0-2022-Bs5j4jjQ.png",
    vT = () => {
        const n = {
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: .15
                }
            }
        },
            i = {
                hidden: {
                    opacity: 0,
                    y: 30
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: .5,
                        ease: "easeOut"
                    }
                }
            },
            l = {
                hidden: {
                    opacity: 0,
                    scale: .95
                },
                visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                        duration: .6,
                        ease: "easeOut"
                    }
                },
                hover: {
                    y: -8,
                    scale: 1.02,
                    transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                    }
                }
            },
            s = {
                hidden: {
                    scale: 0,
                    rotate: -180
                },
                visible: {
                    scale: 1,
                    rotate: 0,
                    transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        duration: .8
                    }
                },
                hover: {
                    scale: 1.2,
                    rotate: 360,
                    transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                    }
                }
            };
        return w.jsxs(L.section, {
            id: "education",
            className: "w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black px-6 py-16 flex flex-col items-center justify-center overflow-hidden relative",
            initial: {
                opacity: 0
            },
            whileInView: {
                opacity: 1
            },
            viewport: {
                once: !0,
                amount: .3
            },
            transition: {
                duration: .5
            },
            children: [w.jsx(L.div, {
                className: "absolute top-20 left-10 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl",
                animate: {
                    scale: [1, 1.4, 1],
                    opacity: [.1, .25, .1],
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                    rotate: [0, 180, 360]
                },
                transition: {
                    duration: 4,
                    repeat: 1 / 0,
                    ease: "easeInOut"
                }
            }), w.jsx(L.div, {
                className: "absolute bottom-20 right-10 w-72 h-72 bg-blue-500/12 rounded-full blur-3xl",
                animate: {
                    scale: [1.3, 1, 1.3],
                    opacity: [.15, .08, .15],
                    x: [0, -40, 0],
                    y: [0, 25, 0],
                    rotate: [0, -180, -360]
                },
                transition: {
                    duration: 5,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: .5
                }
            }), w.jsx(L.div, {
                className: "absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl",
                animate: {
                    scale: [1, 1.5, 1],
                    opacity: [.08, .18, .08],
                    x: [0, 35, 0],
                    y: [0, 40, 0],
                    rotate: [0, 120, 240, 360]
                },
                transition: {
                    duration: 6,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: 1
                }
            }), w.jsx(L.div, {
                className: "absolute bottom-1/4 left-1/4 w-56 h-56 bg-cyan-500/8 rounded-full blur-2xl",
                animate: {
                    scale: [1.2, 1, 1.2],
                    opacity: [.12, .06, .12],
                    x: [0, -30, 0],
                    y: [0, -35, 0],
                    rotate: [0, -120, -240, -360]
                },
                transition: {
                    duration: 4.5,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: 1.5
                }
            }), w.jsx("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [...Array(15)].map((u, f) => w.jsx(L.div, {
                    className: "absolute w-1 h-1 bg-gradient-to-r from-cyan-400/70 to-blue-400/70 rounded-full",
                    animate: {
                        y: [0, -120, 0],
                        x: [0, Math.sin(f) * 60, 0],
                        scale: [1, 2.2, 1],
                        opacity: [.4, .9, .4],
                        rotate: [0, 180, 360]
                    },
                    transition: {
                        duration: 2.5 + Math.random() * 1.5,
                        repeat: 1 / 0,
                        delay: f * .2,
                        ease: "easeInOut"
                    },
                    style: {
                        left: `${Math.random() * 100}%`,
                        top: `${10 + Math.random() * 80}%`
                    }
                }, f))
            }), w.jsx("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [...Array(8)].map((u, f) => w.jsx(L.div, {
                    className: "absolute text-lg opacity-40",
                    animate: {
                        y: [0, -200, 0],
                        x: [0, Math.cos(f) * 100, 0],
                        scale: [.3, 1.2, .3],
                        opacity: [.2, .8, .2],
                        rotate: [0, 360, 0]
                    },
                    transition: {
                        duration: 3 + f * .3,
                        repeat: 1 / 0,
                        delay: f * .4,
                        ease: "easeInOut"
                    },
                    style: {
                        left: `${15 + f * 10}%`,
                        top: `${20 + f * 8}%`
                    },
                    children: f % 2 === 0 ? "⭐" : "✨"
                }, f))
            }), w.jsx(L.div, {
                className: "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]",
                animate: {
                    backgroundPosition: ["0px 0px", "64px 64px"]
                },
                transition: {
                    duration: 8,
                    repeat: 1 / 0,
                    ease: "linear"
                }
            }), w.jsxs(L.div, {
                variants: n,
                initial: "hidden",
                whileInView: "visible",
                viewport: {
                    once: !0,
                    amount: .2
                },
                className: "w-full max-w-4xl mx-auto relative z-10",
                children: [w.jsxs(L.div, {
                    className: "text-center mb-16",
                    variants: i,
                    children: [w.jsxs(L.div, {
                        className: "flex items-center justify-center space-x-4 mb-6",
                        initial: {
                            opacity: 0,
                            y: -20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            duration: .6,
                            type: "spring"
                        },
                        children: [w.jsx(L.div, {
                            className: "p-4 bg-gradient-to-br from-indigo-500/30 to-blue-500/30 rounded-2xl border border-indigo-400/40 backdrop-blur-xl",
                            variants: s,
                            whileHover: "hover",
                            children: w.jsx(Q8, {
                                className: "text-2xl text-indigo-300"
                            })
                        }), w.jsx(L.h2, {
                            className: "text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                delay: .3,
                                duration: .7
                            },
                            children: "Education Journey"
                        })]
                    }), w.jsx(L.div, {
                        className: "h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto w-32",
                        initial: {
                            width: 0,
                            opacity: 0
                        },
                        whileInView: {
                            width: 128,
                            opacity: 1
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            duration: .8,
                            delay: .5
                        }
                    })]
                }), w.jsxs(L.div, {
                    variants: l,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: !0
                    },
                    whileHover: "hover",
                    className: "group relative",
                    children: [w.jsx(L.div, {
                        className: "absolute -inset-3 bg-gradient-to-r from-indigo-500/40 via-blue-500/40 to-cyan-500/40 rounded-2xl blur-lg opacity-0 group-hover:opacity-60",
                        transition: {
                            duration: .3
                        }
                    }), w.jsxs(L.div, {
                        className: "relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 shadow-2xl overflow-hidden",
                        whileHover: {
                            boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.4)"
                        },
                        children: [w.jsx(L.div, {
                            className: "absolute inset-0 opacity-5",
                            animate: {
                                backgroundPosition: ["0% 0%", "100% 100%"]
                            },
                            transition: {
                                duration: 10,
                                repeat: 1 / 0,
                                ease: "linear"
                            },
                            style: {
                                backgroundImage: `radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.8) 0%, transparent 50%),
                                 radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.6) 0%, transparent 50%)`
                            }
                        }), w.jsxs("div", {
                            className: "flex flex-col md:flex-row items-center gap-8 relative z-10",
                            children: [w.jsx(L.div, {
                                className: "flex-shrink-0",
                                initial: {
                                    opacity: 0,
                                    scale: .8,
                                    rotate: -10
                                },
                                whileInView: {
                                    opacity: 1,
                                    scale: 1,
                                    rotate: 0
                                },
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    delay: .3,
                                    type: "spring"
                                },
                                children: w.jsxs(L.div, {
                                    className: "relative",
                                    whileHover: {
                                        scale: 1.1,
                                        rotate: 5,
                                        transition: {
                                            type: "spring",
                                            stiffness: 300
                                        }
                                    },
                                    children: [w.jsx(L.img, {
                                        src: gT,
                                        alt: "BRAC University Logo",
                                        className: "w-24 h-24 object-contain rounded-2xl bg-white/10 p-3 border border-indigo-400/30 shadow-lg"
                                    }), w.jsx(L.div, {
                                        className: "absolute inset-0 border-2 border-cyan-400/50 rounded-2xl",
                                        animate: {
                                            scale: [1, 1.15, 1],
                                            opacity: [.6, 0, .6]
                                        },
                                        transition: {
                                            duration: 2,
                                            repeat: 1 / 0,
                                            ease: "easeInOut"
                                        }
                                    })]
                                })
                            }), w.jsxs(L.div, {
                                className: "text-center md:text-left space-y-4 flex-1",
                                variants: n,
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: {
                                    once: !0
                                },
                                children: [w.jsx(L.h3, {
                                    className: "text-3xl font-bold text-white",
                                    variants: i,
                                    whileHover: {
                                        scale: 1.02,
                                        color: "#93c5fd",
                                        transition: {
                                            duration: .2
                                        }
                                    },
                                    children: "BRAC University"
                                }), w.jsx(L.p, {
                                    className: "text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-blue-300 font-semibold",
                                    variants: i,
                                    children: "Bachelor of Science in Computer Science & Engineering"
                                }), w.jsxs(L.div, {
                                    className: "flex items-center justify-center md:justify-start space-x-3 text-gray-300",
                                    variants: i,
                                    children: [w.jsx(L.div, {
                                        animate: {
                                            scale: [1, 1.2, 1],
                                            transition: {
                                                duration: 2,
                                                repeat: 1 / 0,
                                                ease: "easeInOut"
                                            }
                                        },
                                        children: w.jsx(G8, {
                                            className: "text-cyan-400"
                                        })
                                    }), w.jsx("span", {
                                        className: "text-lg font-medium",
                                        children: "2022 - 2026"
                                    }), w.jsx(L.span, {
                                        className: "ml-4 px-4 py-2 bg-gradient-to-r from-green-500/30 to-emerald-600/30 border border-green-400/40 text-green-300 rounded-xl text-sm font-semibold backdrop-blur-sm",
                                        initial: {
                                            opacity: 0,
                                            scale: .8
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        viewport: {
                                            once: !0
                                        },
                                        transition: {
                                            delay: .8,
                                            type: "spring"
                                        },
                                        animate: {
                                            boxShadow: ["0 0 0px rgba(34, 197, 94, 0)", "0 0 20px rgba(34, 197, 94, 0.4)", "0 0 0px rgba(34, 197, 94, 0)"],
                                            y: [0, -3, 0]
                                        },
                                        transition: {
                                            duration: 1.5,
                                            repeat: 1 / 0,
                                            repeatDelay: 1
                                        },
                                        children: "🎓 In Progress"
                                    })]
                                }), w.jsx(L.div, {
                                    className: "pt-4 border-t border-gray-600/50",
                                    variants: i,
                                    children: w.jsxs("p", {
                                        className: "text-gray-300 text-base leading-relaxed",
                                        children: ["Focused on ", w.jsx("span", {
                                            className: "text-cyan-400 font-semibold",
                                            children: "software engineering"
                                        }), ",", w.jsx("span", {
                                            className: "text-blue-400 font-semibold",
                                            children: " algorithms"
                                        }), ", and", w.jsx("span", {
                                            className: "text-indigo-400 font-semibold",
                                            children: " modern web technologies"
                                        }), ". Building expertise in full-stack development while exploring AI and machine learning."]
                                    })
                                }), w.jsx(L.div, {
                                    className: "flex justify-center md:justify-start space-x-4 pt-4",
                                    variants: i,
                                    children: [w.jsx(h2, {}), w.jsx(Y8, {})].map((u, f) => w.jsx(L.div, {
                                        className: "p-2 bg-white/5 rounded-lg border border-white/10",
                                        whileHover: {
                                            scale: 1.2,
                                            backgroundColor: "rgba(99, 102, 241, 0.2)",
                                            transition: {
                                                type: "spring",
                                                stiffness: 400
                                            }
                                        },
                                        children: w.jsx("div", {
                                            className: "text-indigo-300 text-lg",
                                            children: u
                                        })
                                    }, f))
                                })]
                            })]
                        })]
                    })]
                })]
            })]
        })
    },
    bT = "/assets/project-1-CayhLkiF.png",
    xT = "/assets/project-2-BDS-8SIb.png",
    ST = "/assets/project-3-DkKwAvsa.png",
    wT = (n, i = 30) => {
        const l = n.split(" ");
        return l.length > i ? l.slice(0, i).join(" ") + "..." : n
    },
    TT = [{
        id: 1,
        name: "BRACU Research Thesis Management Portal",
        image: ST,
        type: "Full-Stack MERN",
        details: {
            description: "Built a full-stack portal automating the complete thesis lifecycle — proposal submission, supervisor matching, meeting scheduling, and archiving — across 3 distinct user roles (Student, Supervisor, Admin) with JWT-protected routes. Integrated the arXiv academic paper API for paper search, saving, and supervisor recommendations, plus admin controls for semester setup, milestone tracking, role management, and supervisor-to-group allocation.",
            techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "arXiv API"],
            liveLink: "https://bracu-research-connect.web.app",
            githubLink: "https://github.com/IFTI-KAR/BRAC-University-Thesis-Portal"
        }
    }, {
        id: 2,
        name: "Fitness Tracker",
        image: bT,
        type: "Full-Stack MERN",
        details: {
            description: "Engineered a multi-role fitness platform (Admin / Trainer / Member) with Stripe payment integration for trainer bookings, JWT-protected routes, and real-time CRUD with toast notifications. Includes an admin financial dashboard, trainer approval workflow, a community forum with upvote/downvote, and a Featured Classes section powered by MongoDB aggregation.",
            techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
            liveLink: "https://fitness-tracker-faf6f.web.app/",
            githubLink: "https://github.com/IFTI-KAR/Fitness_Tracker_Client_Server"
        }
    }, {
        id: 3,
        name: "Blog Site",
        image: xT,
        type: "Full-Stack",
        details: {
            description: "Developed a full-stack blogging platform with user-authenticated CRUD operations, JWT REST APIs, private route protection, and secure blog ownership enforcement. Features a wishlist/bookmarking system, a Featured Blogs section surfaced via backend aggregation, and pagination with category filtering across a 7-endpoint REST API.",
            techStack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
            liveLink: "https://log-web-34782.web.app/",
            githubLink: "https://github.com/IFTI-KAR/Blogar-a-blog-site-client"
        }
    }],
    ET = () => {
        const [n, i] = C.useState([]);
        vd(), C.useEffect(() => {
            i(TT)
        }, []);
        const l = {
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: .2
                }
            }
        },
            s = {
                hidden: {
                    opacity: 0,
                    y: 30
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: .6,
                        ease: "easeOut"
                    }
                },
                hover: {
                    y: -10,
                    scale: 1.02,
                    transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 25
                    }
                }
            },
            u = {
                hover: {
                    scale: 1.2,
                    rotate: 360,
                    transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                    }
                }
            },
            f = {
                initial: {
                    scale: 1
                },
                hover: {
                    scale: 1.05,
                    transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                    }
                },
                tap: {
                    scale: .95
                }
            };
        return w.jsxs("section", {
            id: "projects",
            className: "min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 lg:py-28 relative overflow-hidden",
            children: [w.jsx(L.div, {
                className: "absolute top-20 left-10 w-80 h-80 bg-blue-500/12 rounded-full blur-3xl",
                animate: {
                    scale: [1, 1.4, 1],
                    opacity: [.08, .18, .08],
                    x: [0, 40, 0],
                    y: [0, -25, 0],
                    rotate: [0, 90, 180, 270, 360]
                },
                transition: {
                    duration: 6,
                    repeat: 1 / 0,
                    ease: "easeInOut"
                }
            }), w.jsx(L.div, {
                className: "absolute bottom-20 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl",
                animate: {
                    scale: [1.3, 1, 1.3],
                    opacity: [.12, .06, .12],
                    x: [0, -35, 0],
                    y: [0, 30, 0],
                    rotate: [0, -90, -180, -270, -360]
                },
                transition: {
                    duration: 7,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: 1
                }
            }), w.jsx(L.div, {
                className: "absolute top-1/3 right-1/3 w-64 h-64 bg-cyan-500/8 rounded-full blur-2xl",
                animate: {
                    scale: [1, 1.3, 1],
                    opacity: [.06, .14, .06],
                    x: [0, 30, 0],
                    y: [0, 35, 0],
                    rotate: [0, 120, 240, 360]
                },
                transition: {
                    duration: 5,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: 2
                }
            }), w.jsx(L.div, {
                className: "absolute bottom-1/4 left-1/4 w-56 h-56 bg-purple-500/6 rounded-full blur-2xl",
                animate: {
                    scale: [1.2, 1, 1.2],
                    opacity: [.08, .04, .08],
                    x: [0, -25, 0],
                    y: [0, -30, 0],
                    rotate: [0, -120, -240, -360]
                },
                transition: {
                    duration: 4.5,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: 1.5
                }
            }), w.jsx("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [...Array(12)].map((d, p) => w.jsx(L.div, {
                    className: "absolute w-1 h-1 bg-gradient-to-r from-cyan-400/60 to-blue-400/60 rounded-full",
                    animate: {
                        y: [0, -100, 0],
                        x: [0, Math.sin(p) * 50, 0],
                        scale: [1, 2, 1],
                        opacity: [.3, .8, .3],
                        rotate: [0, 180, 360]
                    },
                    transition: {
                        duration: 3 + Math.random() * 1.5,
                        repeat: 1 / 0,
                        delay: p * .2,
                        ease: "easeInOut"
                    },
                    style: {
                        left: `${Math.random() * 100}%`,
                        top: `${15 + Math.random() * 70}%`
                    }
                }, p))
            }), w.jsx("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [...Array(6)].map((d, p) => w.jsx(L.div, {
                    className: "absolute text-sm opacity-50",
                    animate: {
                        y: [0, -150, 0],
                        x: [0, Math.cos(p) * 80, 0],
                        scale: [.4, 1.1, .4],
                        opacity: [.3, .7, .3],
                        rotate: [0, 270, 0]
                    },
                    transition: {
                        duration: 4 + p * .4,
                        repeat: 1 / 0,
                        delay: p * .3,
                        ease: "easeInOut"
                    },
                    style: {
                        left: `${10 + p * 15}%`,
                        top: `${25 + p * 10}%`
                    },
                    children: p % 2 === 0 ? "⭐" : "✨"
                }, p))
            }), w.jsx(L.div, {
                className: "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)] opacity-40",
                animate: {
                    backgroundPosition: ["0px 0px", "64px 64px"]
                },
                transition: {
                    duration: 6,
                    repeat: 1 / 0,
                    ease: "linear"
                }
            }), w.jsxs("div", {
                className: "container mx-auto px-6 relative z-10",
                children: [w.jsxs(L.div, {
                    className: "text-center mb-20",
                    initial: {
                        opacity: 0,
                        y: -30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .8
                    },
                    children: [w.jsxs(L.div, {
                        className: "flex items-center justify-center space-x-3 mb-4",
                        initial: {
                            opacity: 0
                        },
                        whileInView: {
                            opacity: 1
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            delay: .2
                        },
                        children: [w.jsx(L.div, {
                            className: "p-3 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-lg border border-blue-500/30 backdrop-blur-sm",
                            initial: {
                                scale: 0,
                                rotate: -180
                            },
                            whileInView: {
                                scale: 1,
                                rotate: 0
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                delay: .3,
                                type: "spring",
                                stiffness: 200
                            },
                            children: w.jsx(Dy, {
                                className: "w-6 h-6 text-blue-400"
                            })
                        }), w.jsxs(L.h2, {
                            className: "text-4xl md:text-5xl font-bold text-white tracking-tight",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                delay: .4
                            },
                            children: ["Featured ", w.jsx("span", {
                                className: "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500",
                                children: "Projects"
                            })]
                        })]
                    }), w.jsx(L.p, {
                        className: "text-gray-400 mt-4 max-w-2xl mx-auto text-lg leading-relaxed",
                        initial: {
                            opacity: 0
                        },
                        whileInView: {
                            opacity: 1
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            delay: .6
                        },
                        children: "A collection of my recent full-stack projects showcasing modern web development with focus on performance, user experience, and clean architecture."
                    }), w.jsx(L.div, {
                        className: "h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-32 mx-auto mt-6",
                        initial: {
                            scaleX: 0
                        },
                        whileInView: {
                            scaleX: 1
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            delay: .8,
                            duration: 1
                        }
                    })]
                }), w.jsx(L.div, {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                    variants: l,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: !0,
                        amount: .2
                    },
                    children: n.map((d, p) => w.jsxs(L.div, {
                        variants: s,
                        whileHover: "hover",
                        className: "group relative bg-gray-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl",
                        children: [w.jsx(L.div, {
                            className: "absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100",
                            transition: {
                                duration: .5
                            }
                        }), w.jsxs("div", {
                            className: "relative overflow-hidden",
                            children: [w.jsx(L.img, {
                                src: d.image,
                                alt: d.name,
                                className: "w-full h-60 object-cover transform group-hover:scale-110 transition-transform duration-500",
                                whileHover: {
                                    scale: 1.1
                                },
                                transition: {
                                    duration: .5
                                }
                            }), w.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            }), w.jsx(L.a, {
                                href: d.details.liveLink,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300",
                                variants: u,
                                whileHover: "hover",
                                children: w.jsx(Oy, {
                                    className: "w-5 h-5"
                                })
                            })]
                        }), w.jsxs("div", {
                            className: "p-6 relative z-10",
                            children: [w.jsx(L.p, {
                                className: "text-blue-400 text-sm font-semibold mb-2",
                                initial: {
                                    opacity: 0
                                },
                                whileInView: {
                                    opacity: 1
                                },
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    delay: p * .1 + .2
                                },
                                children: d.type
                            }), w.jsx(L.h3, {
                                className: "text-xl font-bold text-white mb-3",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    delay: p * .1 + .3
                                },
                                children: d.name
                            }), w.jsx(L.p, {
                                className: "text-gray-300 text-sm leading-relaxed mb-4",
                                initial: {
                                    opacity: 0
                                },
                                whileInView: {
                                    opacity: 1
                                },
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    delay: p * .1 + .4
                                },
                                children: wT(d.details.description, 25)
                            }), w.jsxs(L.div, {
                                className: "flex flex-wrap gap-2 mb-6",
                                initial: {
                                    opacity: 0
                                },
                                whileInView: {
                                    opacity: 1
                                },
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    delay: p * .1 + .5
                                },
                                children: [d.details.techStack.slice(0, 4).map((h, m) => w.jsx(L.span, {
                                    className: "bg-blue-500/20 text-blue-300 text-xs px-3 py-1.5 rounded-full font-medium border border-blue-500/30",
                                    whileHover: {
                                        scale: 1.1,
                                        backgroundColor: "rgba(59, 130, 246, 0.3)"
                                    },
                                    transition: {
                                        type: "spring",
                                        stiffness: 400
                                    },
                                    children: h
                                }, m)), d.details.techStack.length > 4 && w.jsxs(L.span, {
                                    className: "bg-indigo-500/20 text-indigo-300 text-xs px-3 py-1.5 rounded-full font-medium border border-indigo-500/30",
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    children: ["+", d.details.techStack.length - 4]
                                })]
                            }), w.jsxs(L.div, {
                                className: "flex gap-3",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    delay: p * .1 + .6
                                },
                                children: [w.jsxs(L.a, {
                                    href: d.details.liveLink,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center gap-2 bg-gradient-to-br from-blue-500 to-indigo-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold flex-1 justify-center backdrop-blur-sm",
                                    variants: f,
                                    whileHover: "hover",
                                    whileTap: "tap",
                                    children: [w.jsx(Oy, {
                                        className: "w-4 h-4"
                                    }), "Live Demo"]
                                }), w.jsxs(L.a, {
                                    href: d.details.githubLink,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center gap-2 border border-gray-600 text-gray-300 px-4 py-2.5 rounded-xl text-sm font-semibold flex-1 justify-center hover:bg-gray-700/50 hover:border-blue-400 hover:text-white transition-all",
                                    variants: f,
                                    whileHover: "hover",
                                    whileTap: "tap",
                                    children: [w.jsx(Dy, {
                                        className: "w-4 h-4"
                                    }), "Code"]
                                })]
                            })]
                        }), w.jsx(L.div, {
                            className: "absolute inset-0 border-2 border-blue-500/0 rounded-2xl group-hover:border-blue-500/30",
                            transition: {
                                duration: .3
                            }
                        })]
                    }, d.id))
                }), w.jsx(L.div, {
                    className: "text-center mt-16",
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        delay: .8
                    }
                })]
            })]
        })
    },
    zl = {
        _origin: "https://api.emailjs.com"
    },
    MT = (n, i = "https://api.emailjs.com") => {
        zl._userID = n, zl._origin = i
    },
    m2 = (n, i, l) => {
        if (!n) throw "The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";
        if (!i) throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
        if (!l) throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
        return !0
    };
class ng {
    constructor(i) {
        this.status = i.status, this.text = i.responseText
    }
}
const p2 = (n, i, l = {}) => new Promise((s, u) => {
    const f = new XMLHttpRequest;
    f.addEventListener("load", ({
        target: d
    }) => {
        const p = new ng(d);
        p.status === 200 || p.text === "OK" ? s(p) : u(p)
    }), f.addEventListener("error", ({
        target: d
    }) => {
        u(new ng(d))
    }), f.open("POST", zl._origin + n, !0), Object.keys(l).forEach(d => {
        f.setRequestHeader(d, l[d])
    }), f.send(i)
}),
    RT = (n, i, l, s) => {
        const u = s || zl._userID;
        return m2(u, n, i), p2("/api/v1.0/email/send", JSON.stringify({
            lib_version: "3.2.0",
            user_id: u,
            service_id: n,
            template_id: i,
            template_params: l
        }), {
            "Content-type": "application/json"
        })
    },
    AT = n => {
        let i;
        if (typeof n == "string" ? i = document.querySelector(n) : i = n, !i || i.nodeName !== "FORM") throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
        return i
    },
    DT = (n, i, l, s) => {
        const u = s || zl._userID,
            f = AT(l);
        m2(u, n, i);
        const d = new FormData(f);
        return d.append("lib_version", "3.2.0"), d.append("service_id", n), d.append("template_id", i), d.append("user_id", u), p2("/api/v1.0/email/send-form", d)
    },
    OT = {
        init: MT,
        send: RT,
        sendForm: DT
    },
    CT = () => {
        const n = C.useRef(),
            i = h => {
                h.preventDefault(), OT.sendForm("service_i7djc3", "template_82oznug", n.current, "QGrvRb_x998CvgBHR").then(() => {
                    alert("✅ Message sent successfully!"), n.current.reset()
                }, m => {
                    alert("❌ Failed to send. Please try again."), console.error(m.text)
                })
            },
            l = {
                hidden: {
                    opacity: 0
                },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: .2
                    }
                }
            },
            s = {
                hidden: {
                    opacity: 0,
                    y: 50
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        duration: .8
                    }
                }
            },
            u = {
                hidden: {
                    scale: 0,
                    rotate: -180
                },
                visible: {
                    scale: 1,
                    rotate: 0,
                    transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        duration: 1
                    }
                },
                hover: {
                    scale: 1.3,
                    rotate: 360,
                    transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                    }
                }
            },
            f = {
                hidden: {
                    opacity: 0,
                    y: 30
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: .6,
                        ease: "easeOut"
                    }
                }
            },
            d = {
                initial: {
                    scale: 1
                },
                hover: {
                    scale: 1.05,
                    transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                    }
                },
                tap: {
                    scale: .95
                }
            },
            p = {
                focus: {
                    scale: 1.02,
                    boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.5)",
                    transition: {
                        duration: .2
                    }
                }
            };
        return w.jsxs("section", {
            id: "contact",
            className: "relative min-h-screen bg-gradient-to-b from-black via-[#0a0f1c] to-black text-white py-24 px-6 flex items-center justify-center overflow-hidden",
            children: [w.jsx(L.div, {
                className: "absolute top-20 left-10 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl",
                animate: {
                    scale: [1, 1.2, 1],
                    opacity: [.15, .25, .15],
                    x: [0, 30, 0]
                },
                transition: {
                    duration: 6,
                    repeat: 1 / 0,
                    ease: "easeInOut"
                }
            }), w.jsx(L.div, {
                className: "absolute bottom-20 right-10 w-72 h-72 bg-blue-400/15 rounded-full blur-3xl",
                animate: {
                    scale: [1.2, 1, 1.2],
                    opacity: [.2, .1, .2],
                    y: [0, -20, 0]
                },
                transition: {
                    duration: 7,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: 1
                }
            }), w.jsx(L.div, {
                className: "absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl",
                animate: {
                    scale: [1, 1.3, 1],
                    opacity: [.1, .2, .1],
                    y: [0, 25, 0]
                },
                transition: {
                    duration: 8,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: 2
                }
            }), w.jsx("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [...Array(8)].map((h, m) => w.jsx(L.div, {
                    className: "absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60",
                    animate: {
                        y: [0, -100, 0],
                        x: [0, Math.sin(m) * 50, 0],
                        scale: [1, 2, 1],
                        opacity: [.3, .8, .3]
                    },
                    transition: {
                        duration: 4 + m * .5,
                        repeat: 1 / 0,
                        delay: m * .3,
                        ease: "easeInOut"
                    },
                    style: {
                        left: `${10 + m * 12}%`,
                        top: `${20 + m * 10}%`
                    }
                }, m))
            }), w.jsx("div", {
                className: "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)] opacity-40"
            }), w.jsxs("div", {
                className: "relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24",
                children: [w.jsxs(L.div, {
                    variants: l,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: !0,
                        amount: .3
                    },
                    className: "space-y-8",
                    children: [w.jsxs(L.div, {
                        variants: f,
                        children: [w.jsx(L.h2, {
                            className: "text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 mb-6",
                            initial: {
                                opacity: 0,
                                y: -30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                duration: .8,
                                type: "spring",
                                stiffness: 100
                            },
                            children: "Let's Connect"
                        }), w.jsx(L.div, {
                            className: "h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full w-24 mb-6",
                            initial: {
                                width: 0
                            },
                            whileInView: {
                                width: 96
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                duration: 1,
                                delay: .5
                            }
                        })]
                    }), w.jsx(L.p, {
                        className: "text-gray-300 text-lg leading-relaxed text-lg",
                        variants: f,
                        children: "Ready to bring your ideas to life? Let's discuss how we can create something amazing together!"
                    }), [{
                        icon: w.jsx(K8, {}),
                        title: "Email",
                        value: "iftikar.rahaman@g.bracu.ac.bd",
                        color: "from-red-500 to-pink-600"
                    }, {
                        icon: w.jsx(F8, {}),
                        title: "Phone",
                        value: "+880 1818 904 360",
                        color: "from-green-500 to-emerald-600"
                    }, {
                        icon: w.jsx(q8, {}),
                        title: "WhatsApp",
                        value: "+880 1818 904 360",
                        color: "from-green-500 to-teal-600"
                    }].map((h, m) => w.jsxs(L.div, {
                        variants: s,
                        whileHover: {
                            scale: 1.05,
                            y: -5,
                            transition: {
                                type: "spring",
                                stiffness: 300
                            }
                        },
                        className: "group relative",
                        children: [w.jsx(L.div, {
                            className: "absolute -inset-2 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur-md opacity-0 group-hover:opacity-30",
                            transition: {
                                duration: .3
                            }
                        }), w.jsxs("div", {
                            className: "relative flex items-center gap-6 p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl group-hover:border-indigo-400/30 transition-all duration-300 z-10",
                            children: [w.jsxs(L.div, {
                                className: `p-4 bg-gradient-to-br ${h.color} rounded-2xl shadow-lg`,
                                variants: u,
                                whileHover: "hover",
                                children: [w.jsx("div", {
                                    className: "text-2xl text-white",
                                    children: h.icon
                                }), w.jsx(L.div, {
                                    className: "absolute inset-0 border-2 border-white/30 rounded-2xl",
                                    animate: {
                                        scale: [1, 1.1, 1],
                                        opacity: [.5, 0, .5]
                                    },
                                    transition: {
                                        duration: 3,
                                        repeat: 1 / 0,
                                        ease: "easeOut"
                                    }
                                })]
                            }), w.jsxs("div", {
                                children: [w.jsx(L.p, {
                                    className: "font-bold text-lg text-indigo-300 mb-1",
                                    whileHover: {
                                        color: "#93c5fd"
                                    },
                                    children: h.title
                                }), w.jsx(L.p, {
                                    className: "text-gray-200 text-base",
                                    whileHover: {
                                        scale: 1.02
                                    },
                                    transition: {
                                        duration: .2
                                    },
                                    children: h.value
                                })]
                            })]
                        })]
                    }, m))]
                }), w.jsxs(L.div, {
                    variants: l,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: !0,
                        amount: .3
                    },
                    children: [w.jsxs(L.div, {
                        variants: f,
                        children: [w.jsx(L.h2, {
                            className: "text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2 text-center md:text-left",
                            initial: {
                                opacity: 0,
                                x: 30
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                delay: .3
                            },
                            children: "Send a Message"
                        }), w.jsx(L.p, {
                            className: "text-gray-400 text-center md:text-left mb-8",
                            initial: {
                                opacity: 0
                            },
                            whileInView: {
                                opacity: 1
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                delay: .5
                            },
                            children: "I'll get back to you as soon as possible"
                        })]
                    }), w.jsxs(L.form, {
                        ref: n,
                        onSubmit: i,
                        variants: s,
                        className: "bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/10 space-y-6 relative overflow-hidden",
                        children: [w.jsx(L.div, {
                            className: "absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-blue-500/5 opacity-0 hover:opacity-100",
                            transition: {
                                duration: .5
                            }
                        }), [{
                            type: "text",
                            name: "from_name",
                            placeholder: "Your Name"
                        }, {
                            type: "email",
                            name: "from_email",
                            placeholder: "Your Email"
                        }].map((h, m) => w.jsx(L.div, {
                            initial: {
                                opacity: 0,
                                x: 20
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                delay: .3 + m * .1
                            },
                            children: w.jsx(L.input, {
                                type: h.type,
                                name: h.name,
                                placeholder: h.placeholder,
                                className: "w-full p-4 rounded-xl bg-black/30 text-white placeholder-gray-400 outline-none border border-gray-600/50 focus:border-indigo-400 transition-all duration-300 backdrop-blur-sm",
                                required: !0,
                                whileFocus: "focus",
                                variants: p
                            })
                        }, h.name)), w.jsx(L.div, {
                            initial: {
                                opacity: 0,
                                x: 20
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                delay: .5
                            },
                            children: w.jsx(L.textarea, {
                                name: "message",
                                placeholder: "Your Message...",
                                className: "w-full p-4 h-40 rounded-xl bg-black/30 text-white placeholder-gray-400 outline-none border border-gray-600/50 focus:border-indigo-400 resize-none transition-all duration-300 backdrop-blur-sm",
                                required: !0,
                                whileFocus: "focus",
                                variants: p
                            })
                        }), w.jsxs(L.button, {
                            type: "submit",
                            variants: d,
                            whileHover: "hover",
                            whileTap: "tap",
                            className: "w-full flex justify-center items-center gap-3 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-bold py-4 rounded-xl shadow-2xl transition-all duration-300 group relative overflow-hidden",
                            children: [w.jsx(L.div, {
                                className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full",
                                transition: {
                                    duration: .8
                                }
                            }), w.jsx(L.div, {
                                animate: {
                                    x: [0, 5, 0]
                                },
                                transition: {
                                    duration: 2,
                                    repeat: 1 / 0,
                                    ease: "easeInOut"
                                },
                                children: w.jsx(Z8, {
                                    className: "text-white text-lg"
                                })
                            }), w.jsx("span", {
                                className: "relative z-10",
                                children: "Send Message"
                            })]
                        })]
                    })]
                })]
            })]
        })
    },
    _T = () => w.jsx("footer", {
        className: "bg-gray-900 text-gray-400 py-4 text-center",
        children: w.jsxs("p", {
            className: "text-sm",
            children: ["© ", new Date().getFullYear(), " Iftikar Rahaman. All rights reserved."]
        })
    });

function jT(n) {
    return Fe({
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M22 10v6"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5"
            },
            child: []
        }]
    })(n)
}

function NT(n) {
    return Fe({
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"
            },
            child: []
        }]
    })(n)
}

function LT(n) {
    return Fe({
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"
            },
            child: []
        }]
    })(n)
}
const zT = [{
    icon: w.jsx(jT, {
        className: "text-white"
    }),
    title: "Education",
    description: "Currently pursuing a Bachelor's degree in Computer Science at BRAC University. Passionate about mastering algorithms, data structures, and the core principles of software engineering."
}, {
    icon: w.jsx(LT, {
        className: "text-white"
    }),
    title: "Programming Journey",
    description: "I began my coding journey with HTML, CSS, and JavaScript — evolving into full-stack development with the MERN stack. I'm now exploring Artificial Intelligence and Machine Learning, blending logic with creativity to build innovative solutions."
}, {
    icon: w.jsx(NT, {
        className: "text-white"
    }),
    title: "Beyond Coding",
    description: "I believe in maintaining a balanced lifestyle — fitness, self-learning, and curiosity drive me. I love exploring new technologies, improving my craft, and creating things that inspire people."
}],
    VT = () => {
        const n = {
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: .3
                }
            }
        },
            i = {
                hidden: {
                    scale: 0,
                    rotate: -180
                },
                visible: {
                    scale: 1,
                    rotate: 0,
                    transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        duration: 1
                    }
                },
                hover: {
                    scale: 1.2,
                    rotate: 360,
                    transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                    }
                }
            },
            l = {
                hidden: {
                    opacity: 0,
                    y: 30
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: .6,
                        ease: "easeOut"
                    }
                }
            },
            s = {
                hidden: {
                    opacity: 0,
                    y: 50
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: .7,
                        ease: "easeOut"
                    }
                },
                hover: {
                    y: -15,
                    scale: 1.03,
                    transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 25
                    }
                }
            };
        return w.jsxs("section", {
            id: "about",
            className: "min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black text-white py-28 px-6 md:px-16 overflow-hidden relative",
            children: [w.jsx(L.div, {
                className: "absolute top-1/4 left-1/4 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl",
                animate: {
                    scale: [1, 1.15, 1],
                    opacity: [.08, .12, .08],
                    x: [0, 20, 0],
                    y: [0, -15, 0]
                },
                transition: {
                    duration: 4,
                    repeat: 1 / 0,
                    ease: "easeInOut"
                }
            }), w.jsx(L.div, {
                className: "absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-500/8 rounded-full blur-3xl",
                animate: {
                    scale: [1.1, 1, 1.1],
                    opacity: [.1, .06, .1],
                    x: [0, -15, 0],
                    y: [0, 20, 0]
                },
                transition: {
                    duration: 5,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: .5
                }
            }), w.jsx(L.div, {
                className: "absolute top-1/3 right-1/3 w-48 h-48 bg-cyan-500/6 rounded-full blur-2xl",
                animate: {
                    scale: [1, 1.2, 1],
                    opacity: [.06, .1, .06],
                    x: [0, 25, 0],
                    y: [0, 10, 0]
                },
                transition: {
                    duration: 3.5,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: 1
                }
            }), w.jsx(L.div, {
                className: "absolute bottom-1/4 left-1/3 w-56 h-56 bg-purple-500/6 rounded-full blur-2xl",
                animate: {
                    scale: [1.2, 1, 1.2],
                    opacity: [.08, .05, .08],
                    x: [0, -20, 0],
                    y: [0, -25, 0]
                },
                transition: {
                    duration: 4.5,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: 1.5
                }
            }), w.jsx("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [...Array(12)].map((u, f) => w.jsx(L.div, {
                    className: "absolute w-1 h-1 bg-gradient-to-r from-cyan-400/60 to-blue-400/60 rounded-full",
                    animate: {
                        y: [0, -80, 0],
                        x: [0, Math.sin(f) * 40, 0],
                        scale: [1, 1.8, 1],
                        opacity: [.3, .8, .3]
                    },
                    transition: {
                        duration: 3 + Math.random() * 2,
                        repeat: 1 / 0,
                        delay: f * .2,
                        ease: "easeInOut"
                    },
                    style: {
                        left: `${Math.random() * 100}%`,
                        top: `${20 + Math.random() * 60}%`
                    }
                }, f))
            }), w.jsx("div", {
                className: "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)] opacity-30"
            }), w.jsxs(L.div, {
                variants: n,
                initial: "hidden",
                whileInView: "visible",
                viewport: {
                    once: !0,
                    amount: .3
                },
                className: "max-w-7xl mx-auto relative z-10",
                children: [w.jsxs(L.div, {
                    className: "text-center mb-24",
                    variants: l,
                    children: [w.jsx(L.h2, {
                        className: "text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 mb-6",
                        initial: {
                            opacity: 0,
                            y: -30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            duration: .8,
                            type: "spring",
                            stiffness: 100
                        },
                        children: "About Me"
                    }), w.jsx(L.div, {
                        className: "h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto w-32",
                        initial: {
                            width: 0
                        },
                        whileInView: {
                            width: 128
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            duration: 1,
                            delay: .5
                        }
                    }), w.jsx(L.p, {
                        className: "text-gray-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed",
                        initial: {
                            opacity: 0
                        },
                        whileInView: {
                            opacity: 1
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            delay: .7
                        },
                        children: "Discover my journey, passions, and what drives me in the world of technology"
                    })]
                }), w.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12",
                    children: zT.map((u, f) => w.jsxs(L.div, {
                        variants: s,
                        whileHover: "hover",
                        className: "group relative",
                        children: [w.jsx(L.div, {
                            className: "absolute -inset-2 bg-gradient-to-r from-indigo-500/40 via-blue-500/40 to-cyan-500/40 rounded-2xl blur-md opacity-0 group-hover:opacity-100",
                            transition: {
                                duration: .3
                            }
                        }), w.jsxs(L.div, {
                            className: "relative bg-gray-800/30 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-8 shadow-2xl h-full flex flex-col items-center text-center group-hover:border-indigo-400/50 transition-all duration-300",
                            whileHover: {
                                boxShadow: "0 20px 40px -10px rgba(99, 102, 241, 0.3)"
                            },
                            children: [w.jsxs(L.div, {
                                className: "relative mb-8",
                                variants: i,
                                whileHover: "hover",
                                children: [w.jsx(L.div, {
                                    className: "absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl blur-md opacity-0 group-hover:opacity-60",
                                    transition: {
                                        duration: .3
                                    }
                                }), w.jsx("div", {
                                    className: "relative w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg z-10",
                                    children: w.jsx(L.div, {
                                        className: "text-3xl",
                                        whileHover: {
                                            scale: 1.3,
                                            transition: {
                                                type: "spring",
                                                stiffness: 300
                                            }
                                        },
                                        children: u.icon
                                    })
                                }), w.jsx(L.div, {
                                    className: "absolute inset-0 border-2 border-indigo-400/40 rounded-2xl",
                                    animate: {
                                        scale: [1, 1.1, 1],
                                        opacity: [.4, 0, .4]
                                    },
                                    transition: {
                                        duration: 2.5,
                                        repeat: 1 / 0,
                                        ease: "easeInOut"
                                    }
                                })]
                            }), w.jsx(L.h3, {
                                className: "text-2xl font-bold text-white mb-6",
                                variants: l,
                                whileHover: {
                                    scale: 1.05,
                                    color: "#818cf8",
                                    transition: {
                                        duration: .2
                                    }
                                },
                                children: u.title
                            }), w.jsx(L.p, {
                                className: "text-gray-300 text-base leading-relaxed flex-1",
                                variants: l,
                                initial: {
                                    opacity: 0
                                },
                                whileInView: {
                                    opacity: 1
                                },
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    delay: f * .1 + .5
                                },
                                children: u.description
                            }), w.jsx(L.div, {
                                className: "h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full w-16 mt-6 opacity-0 group-hover:opacity-100",
                                transition: {
                                    duration: .3,
                                    delay: .1
                                }
                            })]
                        })]
                    }, f))
                }), w.jsx(L.div, {
                    className: "text-center mt-20",
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        delay: .8
                    }
                })]
            })]
        })
    },
    HT = () => w.jsxs("div", {
        children: [w.jsx(I8, {
            classname: "mb-6"
        }), w.jsx(eT, {}), w.jsx(yT, {}), w.jsx(vT, {}), w.jsx(ET, {}), w.jsx(VT, {}), w.jsx(t5, {}), w.jsx(CT, {}), w.jsx(_T, {})]
    }),
    UT = () => w.jsx("div", {}),
    BT = M5([{
        path: "/",
        Component: HT,
        children: [{
            index: !0,
            Component: UT
        }]
    }]);
O3.createRoot(document.getElementById("root")).render(w.jsxs(C.StrictMode, {
    children: [w.jsx(J4, {
        router: BT
    }), ","]
}));