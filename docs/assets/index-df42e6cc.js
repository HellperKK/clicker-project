(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function up(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var O = {},
  sp = {
    get exports() {
      return O;
    },
    set exports(e) {
      O = e;
    },
  },
  Xl = {},
  X = {},
  ap = {
    get exports() {
      return X;
    },
    set exports(e) {
      X = e;
    },
  },
  $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lr = Symbol.for("react.element"),
  cp = Symbol.for("react.portal"),
  fp = Symbol.for("react.fragment"),
  dp = Symbol.for("react.strict_mode"),
  pp = Symbol.for("react.profiler"),
  mp = Symbol.for("react.provider"),
  hp = Symbol.for("react.context"),
  vp = Symbol.for("react.forward_ref"),
  yp = Symbol.for("react.suspense"),
  gp = Symbol.for("react.memo"),
  wp = Symbol.for("react.lazy"),
  Us = Symbol.iterator;
function Sp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Us && e[Us]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Sc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  kc = Object.assign,
  _c = {};
function An(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = _c),
    (this.updater = n || Sc);
}
An.prototype.isReactComponent = {};
An.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
An.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ec() {}
Ec.prototype = An.prototype;
function Tu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = _c),
    (this.updater = n || Sc);
}
var $u = (Tu.prototype = new Ec());
$u.constructor = Tu;
kc($u, An.prototype);
$u.isPureReactComponent = !0;
var Bs = Array.isArray,
  Pc = Object.prototype.hasOwnProperty,
  Ru = { current: null },
  xc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Pc.call(t, r) && !xc.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Lr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Ru.current,
  };
}
function kp(e, t) {
  return {
    $$typeof: Lr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Mu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Lr;
}
function _p(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ws = /\/+/g;
function Uo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? _p("" + e.key)
    : t.toString(36);
}
function ol(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Lr:
          case cp:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Uo(i, 0) : r),
      Bs(l)
        ? ((n = ""),
          e != null && (n = e.replace(Ws, "$&/") + "/"),
          ol(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (Mu(l) &&
            (l = kp(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Ws, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Bs(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Uo(o, u);
      i += ol(o, t, n, s, l);
    }
  else if (((s = Sp(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Uo(o, u++)), (i += ol(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function Wr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    ol(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Ep(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var he = { current: null },
  il = { transition: null },
  Pp = {
    ReactCurrentDispatcher: he,
    ReactCurrentBatchConfig: il,
    ReactCurrentOwner: Ru,
  };
$.Children = {
  map: Wr,
  forEach: function (e, t, n) {
    Wr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Wr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Wr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Mu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
$.Component = An;
$.Fragment = fp;
$.Profiler = pp;
$.PureComponent = Tu;
$.StrictMode = dp;
$.Suspense = yp;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pp;
$.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = kc({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Ru.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Pc.call(t, s) &&
        !xc.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: Lr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
$.createContext = function (e) {
  return (
    (e = {
      $$typeof: hp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: mp, _context: e }),
    (e.Consumer = e)
  );
};
$.createElement = Cc;
$.createFactory = function (e) {
  var t = Cc.bind(null, e);
  return (t.type = e), t;
};
$.createRef = function () {
  return { current: null };
};
$.forwardRef = function (e) {
  return { $$typeof: vp, render: e };
};
$.isValidElement = Mu;
$.lazy = function (e) {
  return { $$typeof: wp, _payload: { _status: -1, _result: e }, _init: Ep };
};
$.memo = function (e, t) {
  return { $$typeof: gp, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function (e) {
  var t = il.transition;
  il.transition = {};
  try {
    e();
  } finally {
    il.transition = t;
  }
};
$.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
$.useCallback = function (e, t) {
  return he.current.useCallback(e, t);
};
$.useContext = function (e) {
  return he.current.useContext(e);
};
$.useDebugValue = function () {};
$.useDeferredValue = function (e) {
  return he.current.useDeferredValue(e);
};
$.useEffect = function (e, t) {
  return he.current.useEffect(e, t);
};
$.useId = function () {
  return he.current.useId();
};
$.useImperativeHandle = function (e, t, n) {
  return he.current.useImperativeHandle(e, t, n);
};
$.useInsertionEffect = function (e, t) {
  return he.current.useInsertionEffect(e, t);
};
$.useLayoutEffect = function (e, t) {
  return he.current.useLayoutEffect(e, t);
};
$.useMemo = function (e, t) {
  return he.current.useMemo(e, t);
};
$.useReducer = function (e, t, n) {
  return he.current.useReducer(e, t, n);
};
$.useRef = function (e) {
  return he.current.useRef(e);
};
$.useState = function (e) {
  return he.current.useState(e);
};
$.useSyncExternalStore = function (e, t, n) {
  return he.current.useSyncExternalStore(e, t, n);
};
$.useTransition = function () {
  return he.current.useTransition();
};
$.version = "18.2.0";
(function (e) {
  e.exports = $;
})(ap);
const xp = up(X);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cp = X,
  Np = Symbol.for("react.element"),
  Op = Symbol.for("react.fragment"),
  zp = Object.prototype.hasOwnProperty,
  jp = Cp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Tp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Nc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) zp.call(t, r) && !Tp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Np,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: jp.current,
  };
}
Xl.Fragment = Op;
Xl.jsx = Nc;
Xl.jsxs = Nc;
(function (e) {
  e.exports = Xl;
})(sp);
var Ei = {},
  yl = {},
  $p = {
    get exports() {
      return yl;
    },
    set exports(e) {
      yl = e;
    },
  },
  ze = {},
  Pi = {},
  Rp = {
    get exports() {
      return Pi;
    },
    set exports(e) {
      Pi = e;
    },
  },
  Oc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, j) {
    var T = E.length;
    E.push(j);
    e: for (; 0 < T; ) {
      var G = (T - 1) >>> 1,
        b = E[G];
      if (0 < l(b, j)) (E[G] = j), (E[T] = b), (T = G);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var j = E[0],
      T = E.pop();
    if (T !== j) {
      E[0] = T;
      e: for (var G = 0, b = E.length, Ur = b >>> 1; G < Ur; ) {
        var Dt = 2 * (G + 1) - 1,
          Fo = E[Dt],
          It = Dt + 1,
          Br = E[It];
        if (0 > l(Fo, T))
          It < b && 0 > l(Br, Fo)
            ? ((E[G] = Br), (E[It] = T), (G = It))
            : ((E[G] = Fo), (E[Dt] = T), (G = Dt));
        else if (It < b && 0 > l(Br, T)) (E[G] = Br), (E[It] = T), (G = It);
        else break e;
      }
    }
    return j;
  }
  function l(E, j) {
    var T = E.sortIndex - j.sortIndex;
    return T !== 0 ? T : E.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    a = [],
    d = 1,
    h = null,
    m = 3,
    v = !1,
    y = !1,
    g = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(E) {
    for (var j = n(a); j !== null; ) {
      if (j.callback === null) r(a);
      else if (j.startTime <= E)
        r(a), (j.sortIndex = j.expirationTime), t(s, j);
      else break;
      j = n(a);
    }
  }
  function w(E) {
    if (((g = !1), p(E), !y))
      if (n(s) !== null) (y = !0), Io(k);
      else {
        var j = n(a);
        j !== null && Ao(w, j.startTime - E);
      }
  }
  function k(E, j) {
    (y = !1), g && ((g = !1), f(N), (N = -1)), (v = !0);
    var T = m;
    try {
      for (
        p(j), h = n(s);
        h !== null && (!(h.expirationTime > j) || (E && !le()));

      ) {
        var G = h.callback;
        if (typeof G == "function") {
          (h.callback = null), (m = h.priorityLevel);
          var b = G(h.expirationTime <= j);
          (j = e.unstable_now()),
            typeof b == "function" ? (h.callback = b) : h === n(s) && r(s),
            p(j);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var Ur = !0;
      else {
        var Dt = n(a);
        Dt !== null && Ao(w, Dt.startTime - j), (Ur = !1);
      }
      return Ur;
    } finally {
      (h = null), (m = T), (v = !1);
    }
  }
  var P = !1,
    x = null,
    N = -1,
    I = 5,
    z = -1;
  function le() {
    return !(e.unstable_now() - z < I);
  }
  function Wn() {
    if (x !== null) {
      var E = e.unstable_now();
      z = E;
      var j = !0;
      try {
        j = x(!0, E);
      } finally {
        j ? Vn() : ((P = !1), (x = null));
      }
    } else P = !1;
  }
  var Vn;
  if (typeof c == "function")
    Vn = function () {
      c(Wn);
    };
  else if (typeof MessageChannel < "u") {
    var Fs = new MessageChannel(),
      ip = Fs.port2;
    (Fs.port1.onmessage = Wn),
      (Vn = function () {
        ip.postMessage(null);
      });
  } else
    Vn = function () {
      C(Wn, 0);
    };
  function Io(E) {
    (x = E), P || ((P = !0), Vn());
  }
  function Ao(E, j) {
    N = C(function () {
      E(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || v || ((y = !0), Io(k));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (I = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (E) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = m;
      }
      var T = m;
      m = j;
      try {
        return E();
      } finally {
        m = T;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, j) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var T = m;
      m = E;
      try {
        return j();
      } finally {
        m = T;
      }
    }),
    (e.unstable_scheduleCallback = function (E, j, T) {
      var G = e.unstable_now();
      switch (
        (typeof T == "object" && T !== null
          ? ((T = T.delay), (T = typeof T == "number" && 0 < T ? G + T : G))
          : (T = G),
        E)
      ) {
        case 1:
          var b = -1;
          break;
        case 2:
          b = 250;
          break;
        case 5:
          b = 1073741823;
          break;
        case 4:
          b = 1e4;
          break;
        default:
          b = 5e3;
      }
      return (
        (b = T + b),
        (E = {
          id: d++,
          callback: j,
          priorityLevel: E,
          startTime: T,
          expirationTime: b,
          sortIndex: -1,
        }),
        T > G
          ? ((E.sortIndex = T),
            t(a, E),
            n(s) === null &&
              E === n(a) &&
              (g ? (f(N), (N = -1)) : (g = !0), Ao(w, T - G)))
          : ((E.sortIndex = b), t(s, E), y || v || ((y = !0), Io(k))),
        E
      );
    }),
    (e.unstable_shouldYield = le),
    (e.unstable_wrapCallback = function (E) {
      var j = m;
      return function () {
        var T = m;
        m = j;
        try {
          return E.apply(this, arguments);
        } finally {
          m = T;
        }
      };
    });
})(Oc);
(function (e) {
  e.exports = Oc;
})(Rp);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zc = X,
  xe = Pi;
function S(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var jc = new Set(),
  dr = {};
function tn(e, t) {
  Cn(e, t), Cn(e + "Capture", t);
}
function Cn(e, t) {
  for (dr[e] = t, e = 0; e < t.length; e++) jc.add(t[e]);
}
var ot = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  xi = Object.prototype.hasOwnProperty,
  Mp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Vs = {},
  Hs = {};
function Lp(e) {
  return xi.call(Hs, e)
    ? !0
    : xi.call(Vs, e)
    ? !1
    : Mp.test(e)
    ? (Hs[e] = !0)
    : ((Vs[e] = !0), !1);
}
function Dp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ip(e, t, n, r) {
  if (t === null || typeof t > "u" || Dp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ve(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ue[e] = new ve(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ue[t] = new ve(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ue[e] = new ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ue[e] = new ve(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ue[e] = new ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ue[e] = new ve(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ue[e] = new ve(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ue[e] = new ve(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ue[e] = new ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Lu = /[\-:]([a-z])/g;
function Du(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Lu, Du);
    ue[t] = new ve(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Lu, Du);
    ue[t] = new ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Lu, Du);
  ue[t] = new ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ue[e] = new ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ue.xlinkHref = new ve(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ue[e] = new ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Iu(e, t, n, r) {
  var l = ue.hasOwnProperty(t) ? ue[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ip(t, n, l, r) && (n = null),
    r || l === null
      ? Lp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ct = zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Vr = Symbol.for("react.element"),
  on = Symbol.for("react.portal"),
  un = Symbol.for("react.fragment"),
  Au = Symbol.for("react.strict_mode"),
  Ci = Symbol.for("react.profiler"),
  Tc = Symbol.for("react.provider"),
  $c = Symbol.for("react.context"),
  Fu = Symbol.for("react.forward_ref"),
  Ni = Symbol.for("react.suspense"),
  Oi = Symbol.for("react.suspense_list"),
  Uu = Symbol.for("react.memo"),
  dt = Symbol.for("react.lazy"),
  Rc = Symbol.for("react.offscreen"),
  Qs = Symbol.iterator;
function Hn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Qs && e[Qs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Q = Object.assign,
  Bo;
function Jn(e) {
  if (Bo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Bo = (t && t[1]) || "";
    }
  return (
    `
` +
    Bo +
    e
  );
}
var Wo = !1;
function Vo(e, t) {
  if (!e || Wo) return "";
  Wo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Wo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Jn(e) : "";
}
function Ap(e) {
  switch (e.tag) {
    case 5:
      return Jn(e.type);
    case 16:
      return Jn("Lazy");
    case 13:
      return Jn("Suspense");
    case 19:
      return Jn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Vo(e.type, !1)), e;
    case 11:
      return (e = Vo(e.type.render, !1)), e;
    case 1:
      return (e = Vo(e.type, !0)), e;
    default:
      return "";
  }
}
function zi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case un:
      return "Fragment";
    case on:
      return "Portal";
    case Ci:
      return "Profiler";
    case Au:
      return "StrictMode";
    case Ni:
      return "Suspense";
    case Oi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case $c:
        return (e.displayName || "Context") + ".Consumer";
      case Tc:
        return (e._context.displayName || "Context") + ".Provider";
      case Fu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Uu:
        return (
          (t = e.displayName || null), t !== null ? t : zi(e.type) || "Memo"
        );
      case dt:
        (t = e._payload), (e = e._init);
        try {
          return zi(e(t));
        } catch {}
    }
  return null;
}
function Fp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return zi(t);
    case 8:
      return t === Au ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function zt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Mc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Up(e) {
  var t = Mc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Hr(e) {
  e._valueTracker || (e._valueTracker = Up(e));
}
function Lc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Mc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function gl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ji(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ks(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = zt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Dc(e, t) {
  (t = t.checked), t != null && Iu(e, "checked", t, !1);
}
function Ti(e, t) {
  Dc(e, t);
  var n = zt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? $i(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && $i(e, t.type, zt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Gs(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function $i(e, t, n) {
  (t !== "number" || gl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var bn = Array.isArray;
function gn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + zt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ri(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ys(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92));
      if (bn(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: zt(n) };
}
function Ic(e, t) {
  var n = zt(t.value),
    r = zt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Xs(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ac(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Mi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ac(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Qr,
  Fc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Qr = Qr || document.createElement("div"),
          Qr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Qr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function pr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var rr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Bp = ["Webkit", "ms", "Moz", "O"];
Object.keys(rr).forEach(function (e) {
  Bp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (rr[t] = rr[e]);
  });
});
function Uc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (rr.hasOwnProperty(e) && rr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Bc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Uc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Wp = Q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Li(e, t) {
  if (t) {
    if (Wp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function Di(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
      return !0;
  }
}
var Ii = null;
function Bu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ai = null,
  wn = null,
  Sn = null;
function qs(e) {
  if ((e = Ar(e))) {
    if (typeof Ai != "function") throw Error(S(280));
    var t = e.stateNode;
    t && ((t = eo(t)), Ai(e.stateNode, e.type, t));
  }
}
function Wc(e) {
  wn ? (Sn ? Sn.push(e) : (Sn = [e])) : (wn = e);
}
function Vc() {
  if (wn) {
    var e = wn,
      t = Sn;
    if (((Sn = wn = null), qs(e), t)) for (e = 0; e < t.length; e++) qs(t[e]);
  }
}
function Hc(e, t) {
  return e(t);
}
function Qc() {}
var Ho = !1;
function Kc(e, t, n) {
  if (Ho) return e(t, n);
  Ho = !0;
  try {
    return Hc(e, t, n);
  } finally {
    (Ho = !1), (wn !== null || Sn !== null) && (Qc(), Vc());
  }
}
function mr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = eo(n);
  if (r === null) return null;
  n = r[t];
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var Fi = !1;
if (ot)
  try {
    var Qn = {};
    Object.defineProperty(Qn, "passive", {
      get: function () {
        Fi = !0;
      },
    }),
      window.addEventListener("test", Qn, Qn),
      window.removeEventListener("test", Qn, Qn);
  } catch {
    Fi = !1;
  }
function Vp(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (d) {
    this.onError(d);
  }
}
var lr = !1,
  wl = null,
  Sl = !1,
  Ui = null,
  Hp = {
    onError: function (e) {
      (lr = !0), (wl = e);
    },
  };
function Qp(e, t, n, r, l, o, i, u, s) {
  (lr = !1), (wl = null), Vp.apply(Hp, arguments);
}
function Kp(e, t, n, r, l, o, i, u, s) {
  if ((Qp.apply(this, arguments), lr)) {
    if (lr) {
      var a = wl;
      (lr = !1), (wl = null);
    } else throw Error(S(198));
    Sl || ((Sl = !0), (Ui = a));
  }
}
function nn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Gc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Zs(e) {
  if (nn(e) !== e) throw Error(S(188));
}
function Gp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = nn(e)), t === null)) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Zs(l), e;
        if (o === r) return Zs(l), t;
        o = o.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function Yc(e) {
  return (e = Gp(e)), e !== null ? Xc(e) : null;
}
function Xc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Xc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var qc = xe.unstable_scheduleCallback,
  Js = xe.unstable_cancelCallback,
  Yp = xe.unstable_shouldYield,
  Xp = xe.unstable_requestPaint,
  Y = xe.unstable_now,
  qp = xe.unstable_getCurrentPriorityLevel,
  Wu = xe.unstable_ImmediatePriority,
  Zc = xe.unstable_UserBlockingPriority,
  kl = xe.unstable_NormalPriority,
  Zp = xe.unstable_LowPriority,
  Jc = xe.unstable_IdlePriority,
  ql = null,
  Ze = null;
function Jp(e) {
  if (Ze && typeof Ze.onCommitFiberRoot == "function")
    try {
      Ze.onCommitFiberRoot(ql, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Qe = Math.clz32 ? Math.clz32 : tm,
  bp = Math.log,
  em = Math.LN2;
function tm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((bp(e) / em) | 0)) | 0;
}
var Kr = 64,
  Gr = 4194304;
function er(e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function _l(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = er(u)) : ((o &= i), o !== 0 && (r = er(o)));
  } else (i = n & ~l), i !== 0 ? (r = er(i)) : o !== 0 && (r = er(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Qe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function nm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function rm(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Qe(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = nm(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function Bi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function bc() {
  var e = Kr;
  return (Kr <<= 1), !(Kr & 4194240) && (Kr = 64), e;
}
function Qo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Dr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Qe(t)),
    (e[t] = n);
}
function lm(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Qe(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Vu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Qe(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var M = 0;
function ef(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var tf,
  Hu,
  nf,
  rf,
  lf,
  Wi = !1,
  Yr = [],
  wt = null,
  St = null,
  kt = null,
  hr = new Map(),
  vr = new Map(),
  mt = [],
  om =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function bs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      wt = null;
      break;
    case "dragenter":
    case "dragleave":
      St = null;
      break;
    case "mouseover":
    case "mouseout":
      kt = null;
      break;
    case "pointerover":
    case "pointerout":
      hr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      vr.delete(t.pointerId);
  }
}
function Kn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = Ar(t)), t !== null && Hu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function im(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (wt = Kn(wt, e, t, n, r, l)), !0;
    case "dragenter":
      return (St = Kn(St, e, t, n, r, l)), !0;
    case "mouseover":
      return (kt = Kn(kt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return hr.set(o, Kn(hr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), vr.set(o, Kn(vr.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function of(e) {
  var t = Wt(e.target);
  if (t !== null) {
    var n = nn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Gc(n)), t !== null)) {
          (e.blockedOn = t),
            lf(e.priority, function () {
              nf(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ul(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Vi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ii = r), n.target.dispatchEvent(r), (Ii = null);
    } else return (t = Ar(n)), t !== null && Hu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ea(e, t, n) {
  ul(e) && n.delete(t);
}
function um() {
  (Wi = !1),
    wt !== null && ul(wt) && (wt = null),
    St !== null && ul(St) && (St = null),
    kt !== null && ul(kt) && (kt = null),
    hr.forEach(ea),
    vr.forEach(ea);
}
function Gn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Wi ||
      ((Wi = !0),
      xe.unstable_scheduleCallback(xe.unstable_NormalPriority, um)));
}
function yr(e) {
  function t(l) {
    return Gn(l, e);
  }
  if (0 < Yr.length) {
    Gn(Yr[0], e);
    for (var n = 1; n < Yr.length; n++) {
      var r = Yr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    wt !== null && Gn(wt, e),
      St !== null && Gn(St, e),
      kt !== null && Gn(kt, e),
      hr.forEach(t),
      vr.forEach(t),
      n = 0;
    n < mt.length;
    n++
  )
    (r = mt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < mt.length && ((n = mt[0]), n.blockedOn === null); )
    of(n), n.blockedOn === null && mt.shift();
}
var kn = ct.ReactCurrentBatchConfig,
  El = !0;
function sm(e, t, n, r) {
  var l = M,
    o = kn.transition;
  kn.transition = null;
  try {
    (M = 1), Qu(e, t, n, r);
  } finally {
    (M = l), (kn.transition = o);
  }
}
function am(e, t, n, r) {
  var l = M,
    o = kn.transition;
  kn.transition = null;
  try {
    (M = 4), Qu(e, t, n, r);
  } finally {
    (M = l), (kn.transition = o);
  }
}
function Qu(e, t, n, r) {
  if (El) {
    var l = Vi(e, t, n, r);
    if (l === null) ti(e, t, r, Pl, n), bs(e, r);
    else if (im(l, e, t, n, r)) r.stopPropagation();
    else if ((bs(e, r), t & 4 && -1 < om.indexOf(e))) {
      for (; l !== null; ) {
        var o = Ar(l);
        if (
          (o !== null && tf(o),
          (o = Vi(e, t, n, r)),
          o === null && ti(e, t, r, Pl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else ti(e, t, r, null, n);
  }
}
var Pl = null;
function Vi(e, t, n, r) {
  if (((Pl = null), (e = Bu(r)), (e = Wt(e)), e !== null))
    if (((t = nn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Gc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Pl = e), null;
}
function uf(e) {
  switch (e) {
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
      return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (qp()) {
        case Wu:
          return 1;
        case Zc:
          return 4;
        case kl:
        case Zp:
          return 16;
        case Jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var yt = null,
  Ku = null,
  sl = null;
function sf() {
  if (sl) return sl;
  var e,
    t = Ku,
    n = t.length,
    r,
    l = "value" in yt ? yt.value : yt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (sl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function al(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Xr() {
  return !0;
}
function ta() {
  return !1;
}
function je(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Xr
        : ta),
      (this.isPropagationStopped = ta),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Xr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Xr));
      },
      persist: function () {},
      isPersistent: Xr,
    }),
    t
  );
}
var Fn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Gu = je(Fn),
  Ir = Q({}, Fn, { view: 0, detail: 0 }),
  cm = je(Ir),
  Ko,
  Go,
  Yn,
  Zl = Q({}, Ir, {
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
    getModifierState: Yu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Yn &&
            (Yn && e.type === "mousemove"
              ? ((Ko = e.screenX - Yn.screenX), (Go = e.screenY - Yn.screenY))
              : (Go = Ko = 0),
            (Yn = e)),
          Ko);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Go;
    },
  }),
  na = je(Zl),
  fm = Q({}, Zl, { dataTransfer: 0 }),
  dm = je(fm),
  pm = Q({}, Ir, { relatedTarget: 0 }),
  Yo = je(pm),
  mm = Q({}, Fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hm = je(mm),
  vm = Q({}, Fn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ym = je(vm),
  gm = Q({}, Fn, { data: 0 }),
  ra = je(gm),
  wm = {
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
    MozPrintableKey: "Unidentified",
  },
  Sm = {
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
    224: "Meta",
  },
  km = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function _m(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = km[e]) ? !!t[e] : !1;
}
function Yu() {
  return _m;
}
var Em = Q({}, Ir, {
    key: function (e) {
      if (e.key) {
        var t = wm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = al(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Sm[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Yu,
    charCode: function (e) {
      return e.type === "keypress" ? al(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? al(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Pm = je(Em),
  xm = Q({}, Zl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  la = je(xm),
  Cm = Q({}, Ir, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Yu,
  }),
  Nm = je(Cm),
  Om = Q({}, Fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  zm = je(Om),
  jm = Q({}, Zl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Tm = je(jm),
  $m = [9, 13, 27, 32],
  Xu = ot && "CompositionEvent" in window,
  or = null;
ot && "documentMode" in document && (or = document.documentMode);
var Rm = ot && "TextEvent" in window && !or,
  af = ot && (!Xu || (or && 8 < or && 11 >= or)),
  oa = String.fromCharCode(32),
  ia = !1;
function cf(e, t) {
  switch (e) {
    case "keyup":
      return $m.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ff(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var sn = !1;
function Mm(e, t) {
  switch (e) {
    case "compositionend":
      return ff(t);
    case "keypress":
      return t.which !== 32 ? null : ((ia = !0), oa);
    case "textInput":
      return (e = t.data), e === oa && ia ? null : e;
    default:
      return null;
  }
}
function Lm(e, t) {
  if (sn)
    return e === "compositionend" || (!Xu && cf(e, t))
      ? ((e = sf()), (sl = Ku = yt = null), (sn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return af && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Dm = {
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
  week: !0,
};
function ua(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Dm[e.type] : t === "textarea";
}
function df(e, t, n, r) {
  Wc(r),
    (t = xl(t, "onChange")),
    0 < t.length &&
      ((n = new Gu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ir = null,
  gr = null;
function Im(e) {
  Ef(e, 0);
}
function Jl(e) {
  var t = fn(e);
  if (Lc(t)) return e;
}
function Am(e, t) {
  if (e === "change") return t;
}
var pf = !1;
if (ot) {
  var Xo;
  if (ot) {
    var qo = "oninput" in document;
    if (!qo) {
      var sa = document.createElement("div");
      sa.setAttribute("oninput", "return;"),
        (qo = typeof sa.oninput == "function");
    }
    Xo = qo;
  } else Xo = !1;
  pf = Xo && (!document.documentMode || 9 < document.documentMode);
}
function aa() {
  ir && (ir.detachEvent("onpropertychange", mf), (gr = ir = null));
}
function mf(e) {
  if (e.propertyName === "value" && Jl(gr)) {
    var t = [];
    df(t, gr, e, Bu(e)), Kc(Im, t);
  }
}
function Fm(e, t, n) {
  e === "focusin"
    ? (aa(), (ir = t), (gr = n), ir.attachEvent("onpropertychange", mf))
    : e === "focusout" && aa();
}
function Um(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Jl(gr);
}
function Bm(e, t) {
  if (e === "click") return Jl(t);
}
function Wm(e, t) {
  if (e === "input" || e === "change") return Jl(t);
}
function Vm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ge = typeof Object.is == "function" ? Object.is : Vm;
function wr(e, t) {
  if (Ge(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!xi.call(t, l) || !Ge(e[l], t[l])) return !1;
  }
  return !0;
}
function ca(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function fa(e, t) {
  var n = ca(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ca(n);
  }
}
function hf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? hf(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function vf() {
  for (var e = window, t = gl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = gl(e.document);
  }
  return t;
}
function qu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Hm(e) {
  var t = vf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    hf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && qu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = fa(n, o));
        var i = fa(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Qm = ot && "documentMode" in document && 11 >= document.documentMode,
  an = null,
  Hi = null,
  ur = null,
  Qi = !1;
function da(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Qi ||
    an == null ||
    an !== gl(r) ||
    ((r = an),
    "selectionStart" in r && qu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ur && wr(ur, r)) ||
      ((ur = r),
      (r = xl(Hi, "onSelect")),
      0 < r.length &&
        ((t = new Gu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = an))));
}
function qr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var cn = {
    animationend: qr("Animation", "AnimationEnd"),
    animationiteration: qr("Animation", "AnimationIteration"),
    animationstart: qr("Animation", "AnimationStart"),
    transitionend: qr("Transition", "TransitionEnd"),
  },
  Zo = {},
  yf = {};
ot &&
  ((yf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete cn.animationend.animation,
    delete cn.animationiteration.animation,
    delete cn.animationstart.animation),
  "TransitionEvent" in window || delete cn.transitionend.transition);
function bl(e) {
  if (Zo[e]) return Zo[e];
  if (!cn[e]) return e;
  var t = cn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in yf) return (Zo[e] = t[n]);
  return e;
}
var gf = bl("animationend"),
  wf = bl("animationiteration"),
  Sf = bl("animationstart"),
  kf = bl("transitionend"),
  _f = new Map(),
  pa =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Rt(e, t) {
  _f.set(e, t), tn(t, [e]);
}
for (var Jo = 0; Jo < pa.length; Jo++) {
  var bo = pa[Jo],
    Km = bo.toLowerCase(),
    Gm = bo[0].toUpperCase() + bo.slice(1);
  Rt(Km, "on" + Gm);
}
Rt(gf, "onAnimationEnd");
Rt(wf, "onAnimationIteration");
Rt(Sf, "onAnimationStart");
Rt("dblclick", "onDoubleClick");
Rt("focusin", "onFocus");
Rt("focusout", "onBlur");
Rt(kf, "onTransitionEnd");
Cn("onMouseEnter", ["mouseout", "mouseover"]);
Cn("onMouseLeave", ["mouseout", "mouseover"]);
Cn("onPointerEnter", ["pointerout", "pointerover"]);
Cn("onPointerLeave", ["pointerout", "pointerover"]);
tn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
tn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
tn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
tn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
tn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
tn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var tr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Ym = new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));
function ma(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Kp(r, t, void 0, e), (e.currentTarget = null);
}
function Ef(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          ma(l, u, a), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          ma(l, u, a), (o = s);
        }
    }
  }
  if (Sl) throw ((e = Ui), (Sl = !1), (Ui = null), e);
}
function F(e, t) {
  var n = t[qi];
  n === void 0 && (n = t[qi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Pf(t, e, 2, !1), n.add(r));
}
function ei(e, t, n) {
  var r = 0;
  t && (r |= 4), Pf(n, e, r, t);
}
var Zr = "_reactListening" + Math.random().toString(36).slice(2);
function Sr(e) {
  if (!e[Zr]) {
    (e[Zr] = !0),
      jc.forEach(function (n) {
        n !== "selectionchange" && (Ym.has(n) || ei(n, !1, e), ei(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Zr] || ((t[Zr] = !0), ei("selectionchange", !1, t));
  }
}
function Pf(e, t, n, r) {
  switch (uf(t)) {
    case 1:
      var l = sm;
      break;
    case 4:
      l = am;
      break;
    default:
      l = Qu;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Fi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function ti(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = Wt(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Kc(function () {
    var a = o,
      d = Bu(n),
      h = [];
    e: {
      var m = _f.get(e);
      if (m !== void 0) {
        var v = Gu,
          y = e;
        switch (e) {
          case "keypress":
            if (al(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Pm;
            break;
          case "focusin":
            (y = "focus"), (v = Yo);
            break;
          case "focusout":
            (y = "blur"), (v = Yo);
            break;
          case "beforeblur":
          case "afterblur":
            v = Yo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = na;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = dm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Nm;
            break;
          case gf:
          case wf:
          case Sf:
            v = hm;
            break;
          case kf:
            v = zm;
            break;
          case "scroll":
            v = cm;
            break;
          case "wheel":
            v = Tm;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = ym;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = la;
        }
        var g = (t & 4) !== 0,
          C = !g && e === "scroll",
          f = g ? (m !== null ? m + "Capture" : null) : m;
        g = [];
        for (var c = a, p; c !== null; ) {
          p = c;
          var w = p.stateNode;
          if (
            (p.tag === 5 &&
              w !== null &&
              ((p = w),
              f !== null && ((w = mr(c, f)), w != null && g.push(kr(c, w, p)))),
            C)
          )
            break;
          c = c.return;
        }
        0 < g.length &&
          ((m = new v(m, y, null, n, d)), h.push({ event: m, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Ii &&
            (y = n.relatedTarget || n.fromElement) &&
            (Wt(y) || y[it]))
        )
          break e;
        if (
          (v || m) &&
          ((m =
            d.window === d
              ? d
              : (m = d.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          v
            ? ((y = n.relatedTarget || n.toElement),
              (v = a),
              (y = y ? Wt(y) : null),
              y !== null &&
                ((C = nn(y)), y !== C || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((v = null), (y = a)),
          v !== y)
        ) {
          if (
            ((g = na),
            (w = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = la),
              (w = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (C = v == null ? m : fn(v)),
            (p = y == null ? m : fn(y)),
            (m = new g(w, c + "leave", v, n, d)),
            (m.target = C),
            (m.relatedTarget = p),
            (w = null),
            Wt(d) === a &&
              ((g = new g(f, c + "enter", y, n, d)),
              (g.target = p),
              (g.relatedTarget = C),
              (w = g)),
            (C = w),
            v && y)
          )
            t: {
              for (g = v, f = y, c = 0, p = g; p; p = rn(p)) c++;
              for (p = 0, w = f; w; w = rn(w)) p++;
              for (; 0 < c - p; ) (g = rn(g)), c--;
              for (; 0 < p - c; ) (f = rn(f)), p--;
              for (; c--; ) {
                if (g === f || (f !== null && g === f.alternate)) break t;
                (g = rn(g)), (f = rn(f));
              }
              g = null;
            }
          else g = null;
          v !== null && ha(h, m, v, g, !1),
            y !== null && C !== null && ha(h, C, y, g, !0);
        }
      }
      e: {
        if (
          ((m = a ? fn(a) : window),
          (v = m.nodeName && m.nodeName.toLowerCase()),
          v === "select" || (v === "input" && m.type === "file"))
        )
          var k = Am;
        else if (ua(m))
          if (pf) k = Wm;
          else {
            k = Um;
            var P = Fm;
          }
        else
          (v = m.nodeName) &&
            v.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (k = Bm);
        if (k && (k = k(e, a))) {
          df(h, k, n, d);
          break e;
        }
        P && P(e, m, a),
          e === "focusout" &&
            (P = m._wrapperState) &&
            P.controlled &&
            m.type === "number" &&
            $i(m, "number", m.value);
      }
      switch (((P = a ? fn(a) : window), e)) {
        case "focusin":
          (ua(P) || P.contentEditable === "true") &&
            ((an = P), (Hi = a), (ur = null));
          break;
        case "focusout":
          ur = Hi = an = null;
          break;
        case "mousedown":
          Qi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Qi = !1), da(h, n, d);
          break;
        case "selectionchange":
          if (Qm) break;
        case "keydown":
        case "keyup":
          da(h, n, d);
      }
      var x;
      if (Xu)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        sn
          ? cf(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (af &&
          n.locale !== "ko" &&
          (sn || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && sn && (x = sf())
            : ((yt = d),
              (Ku = "value" in yt ? yt.value : yt.textContent),
              (sn = !0))),
        (P = xl(a, N)),
        0 < P.length &&
          ((N = new ra(N, e, null, n, d)),
          h.push({ event: N, listeners: P }),
          x ? (N.data = x) : ((x = ff(n)), x !== null && (N.data = x)))),
        (x = Rm ? Mm(e, n) : Lm(e, n)) &&
          ((a = xl(a, "onBeforeInput")),
          0 < a.length &&
            ((d = new ra("onBeforeInput", "beforeinput", null, n, d)),
            h.push({ event: d, listeners: a }),
            (d.data = x)));
    }
    Ef(h, t);
  });
}
function kr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function xl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = mr(e, n)),
      o != null && r.unshift(kr(e, o, l)),
      (o = mr(e, t)),
      o != null && r.push(kr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function rn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ha(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = mr(n, o)), s != null && i.unshift(kr(n, s, u)))
        : l || ((s = mr(n, o)), s != null && i.push(kr(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Xm = /\r\n?/g,
  qm = /\u0000|\uFFFD/g;
function va(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Xm,
      `
`
    )
    .replace(qm, "");
}
function Jr(e, t, n) {
  if (((t = va(t)), va(e) !== t && n)) throw Error(S(425));
}
function Cl() {}
var Ki = null,
  Gi = null;
function Yi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Xi = typeof setTimeout == "function" ? setTimeout : void 0,
  Zm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ya = typeof Promise == "function" ? Promise : void 0,
  Jm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ya < "u"
      ? function (e) {
          return ya.resolve(null).then(e).catch(bm);
        }
      : Xi;
function bm(e) {
  setTimeout(function () {
    throw e;
  });
}
function ni(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), yr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  yr(t);
}
function _t(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ga(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Un = Math.random().toString(36).slice(2),
  qe = "__reactFiber$" + Un,
  _r = "__reactProps$" + Un,
  it = "__reactContainer$" + Un,
  qi = "__reactEvents$" + Un,
  eh = "__reactListeners$" + Un,
  th = "__reactHandles$" + Un;
function Wt(e) {
  var t = e[qe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[it] || n[qe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ga(e); e !== null; ) {
          if ((n = e[qe])) return n;
          e = ga(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ar(e) {
  return (
    (e = e[qe] || e[it]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function fn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function eo(e) {
  return e[_r] || null;
}
var Zi = [],
  dn = -1;
function Mt(e) {
  return { current: e };
}
function U(e) {
  0 > dn || ((e.current = Zi[dn]), (Zi[dn] = null), dn--);
}
function A(e, t) {
  dn++, (Zi[dn] = e.current), (e.current = t);
}
var jt = {},
  de = Mt(jt),
  we = Mt(!1),
  Gt = jt;
function Nn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return jt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Se(e) {
  return (e = e.childContextTypes), e != null;
}
function Nl() {
  U(we), U(de);
}
function wa(e, t, n) {
  if (de.current !== jt) throw Error(S(168));
  A(de, t), A(we, n);
}
function xf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(S(108, Fp(e) || "Unknown", l));
  return Q({}, n, r);
}
function Ol(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || jt),
    (Gt = de.current),
    A(de, e),
    A(we, we.current),
    !0
  );
}
function Sa(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n
    ? ((e = xf(e, t, Gt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(we),
      U(de),
      A(de, e))
    : U(we),
    A(we, n);
}
var tt = null,
  to = !1,
  ri = !1;
function Cf(e) {
  tt === null ? (tt = [e]) : tt.push(e);
}
function nh(e) {
  (to = !0), Cf(e);
}
function Lt() {
  if (!ri && tt !== null) {
    ri = !0;
    var e = 0,
      t = M;
    try {
      var n = tt;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (tt = null), (to = !1);
    } catch (l) {
      throw (tt !== null && (tt = tt.slice(e + 1)), qc(Wu, Lt), l);
    } finally {
      (M = t), (ri = !1);
    }
  }
  return null;
}
var pn = [],
  mn = 0,
  zl = null,
  jl = 0,
  $e = [],
  Re = 0,
  Yt = null,
  nt = 1,
  rt = "";
function At(e, t) {
  (pn[mn++] = jl), (pn[mn++] = zl), (zl = e), (jl = t);
}
function Nf(e, t, n) {
  ($e[Re++] = nt), ($e[Re++] = rt), ($e[Re++] = Yt), (Yt = e);
  var r = nt;
  e = rt;
  var l = 32 - Qe(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Qe(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (nt = (1 << (32 - Qe(t) + l)) | (n << l) | r),
      (rt = o + e);
  } else (nt = (1 << o) | (n << l) | r), (rt = e);
}
function Zu(e) {
  e.return !== null && (At(e, 1), Nf(e, 1, 0));
}
function Ju(e) {
  for (; e === zl; )
    (zl = pn[--mn]), (pn[mn] = null), (jl = pn[--mn]), (pn[mn] = null);
  for (; e === Yt; )
    (Yt = $e[--Re]),
      ($e[Re] = null),
      (rt = $e[--Re]),
      ($e[Re] = null),
      (nt = $e[--Re]),
      ($e[Re] = null);
}
var Pe = null,
  Ee = null,
  W = !1,
  We = null;
function Of(e, t) {
  var n = Me(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ka(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Pe = e), (Ee = _t(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Pe = e), (Ee = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Yt !== null ? { id: nt, overflow: rt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Me(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Pe = e),
            (Ee = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ji(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function bi(e) {
  if (W) {
    var t = Ee;
    if (t) {
      var n = t;
      if (!ka(e, t)) {
        if (Ji(e)) throw Error(S(418));
        t = _t(n.nextSibling);
        var r = Pe;
        t && ka(e, t)
          ? Of(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (W = !1), (Pe = e));
      }
    } else {
      if (Ji(e)) throw Error(S(418));
      (e.flags = (e.flags & -4097) | 2), (W = !1), (Pe = e);
    }
  }
}
function _a(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Pe = e;
}
function br(e) {
  if (e !== Pe) return !1;
  if (!W) return _a(e), (W = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Yi(e.type, e.memoizedProps))),
    t && (t = Ee))
  ) {
    if (Ji(e)) throw (zf(), Error(S(418)));
    for (; t; ) Of(e, t), (t = _t(t.nextSibling));
  }
  if ((_a(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ee = _t(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ee = null;
    }
  } else Ee = Pe ? _t(e.stateNode.nextSibling) : null;
  return !0;
}
function zf() {
  for (var e = Ee; e; ) e = _t(e.nextSibling);
}
function On() {
  (Ee = Pe = null), (W = !1);
}
function bu(e) {
  We === null ? (We = [e]) : We.push(e);
}
var rh = ct.ReactCurrentBatchConfig;
function Ue(e, t) {
  if (e && e.defaultProps) {
    (t = Q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Tl = Mt(null),
  $l = null,
  hn = null,
  es = null;
function ts() {
  es = hn = $l = null;
}
function ns(e) {
  var t = Tl.current;
  U(Tl), (e._currentValue = t);
}
function eu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function _n(e, t) {
  ($l = e),
    (es = hn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ge = !0), (e.firstContext = null));
}
function De(e) {
  var t = e._currentValue;
  if (es !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), hn === null)) {
      if ($l === null) throw Error(S(308));
      (hn = e), ($l.dependencies = { lanes: 0, firstContext: e });
    } else hn = hn.next = e;
  return t;
}
var Vt = null;
function rs(e) {
  Vt === null ? (Vt = [e]) : Vt.push(e);
}
function jf(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), rs(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    ut(e, r)
  );
}
function ut(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var pt = !1;
function ls(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Tf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function lt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Et(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), R & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      ut(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), rs(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    ut(e, n)
  );
}
function cl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Vu(e, n);
  }
}
function Ea(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Rl(e, t, n, r) {
  var l = e.updateQueue;
  pt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), i === null ? (o = a) : (i.next = a), (i = s);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (u = d.lastBaseUpdate),
      u !== i &&
        (u === null ? (d.firstBaseUpdate = a) : (u.next = a),
        (d.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var h = l.baseState;
    (i = 0), (d = a = s = null), (u = o);
    do {
      var m = u.lane,
        v = u.eventTime;
      if ((r & m) === m) {
        d !== null &&
          (d = d.next =
            {
              eventTime: v,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var y = e,
            g = u;
          switch (((m = t), (v = n), g.tag)) {
            case 1:
              if (((y = g.payload), typeof y == "function")) {
                h = y.call(v, h, m);
                break e;
              }
              h = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = g.payload),
                (m = typeof y == "function" ? y.call(v, h, m) : y),
                m == null)
              )
                break e;
              h = Q({}, h, m);
              break e;
            case 2:
              pt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (v = {
          eventTime: v,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          d === null ? ((a = d = v), (s = h)) : (d = d.next = v),
          (i |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (d === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = d),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (qt |= i), (e.lanes = i), (e.memoizedState = h);
  }
}
function Pa(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(S(191, l));
        l.call(r);
      }
    }
}
var $f = new zc.Component().refs;
function tu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var no = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? nn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = me(),
      l = xt(e),
      o = lt(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Et(e, o, l)),
      t !== null && (Ke(t, e, l, r), cl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = me(),
      l = xt(e),
      o = lt(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Et(e, o, l)),
      t !== null && (Ke(t, e, l, r), cl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = me(),
      r = xt(e),
      l = lt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Et(e, l, r)),
      t !== null && (Ke(t, e, r, n), cl(t, e, r));
  },
};
function xa(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !wr(n, r) || !wr(l, o)
      : !0
  );
}
function Rf(e, t, n) {
  var r = !1,
    l = jt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = De(o))
      : ((l = Se(t) ? Gt : de.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Nn(e, l) : jt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = no),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Ca(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && no.enqueueReplaceState(t, t.state, null);
}
function nu(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = $f), ls(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = De(o))
    : ((o = Se(t) ? Gt : de.current), (l.context = Nn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (tu(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && no.enqueueReplaceState(l, l.state, null),
      Rl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Xn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === $f && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function el(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      S(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Na(e) {
  var t = e._init;
  return t(e._payload);
}
function Mf(e) {
  function t(f, c) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [c]), (f.flags |= 16)) : p.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = Ct(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, c, p) {
    return (
      (f.index = p),
      e
        ? ((p = f.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((f.flags |= 2), c) : p)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, p, w) {
    return c === null || c.tag !== 6
      ? ((c = ci(p, f.mode, w)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function s(f, c, p, w) {
    var k = p.type;
    return k === un
      ? d(f, c, p.props.children, w, p.key)
      : c !== null &&
        (c.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === dt &&
            Na(k) === c.type))
      ? ((w = l(c, p.props)), (w.ref = Xn(f, c, p)), (w.return = f), w)
      : ((w = vl(p.type, p.key, p.props, null, f.mode, w)),
        (w.ref = Xn(f, c, p)),
        (w.return = f),
        w);
  }
  function a(f, c, p, w) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = fi(p, f.mode, w)), (c.return = f), c)
      : ((c = l(c, p.children || [])), (c.return = f), c);
  }
  function d(f, c, p, w, k) {
    return c === null || c.tag !== 7
      ? ((c = Kt(p, f.mode, w, k)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function h(f, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = ci("" + c, f.mode, p)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Vr:
          return (
            (p = vl(c.type, c.key, c.props, null, f.mode, p)),
            (p.ref = Xn(f, null, c)),
            (p.return = f),
            p
          );
        case on:
          return (c = fi(c, f.mode, p)), (c.return = f), c;
        case dt:
          var w = c._init;
          return h(f, w(c._payload), p);
      }
      if (bn(c) || Hn(c))
        return (c = Kt(c, f.mode, p, null)), (c.return = f), c;
      el(f, c);
    }
    return null;
  }
  function m(f, c, p, w) {
    var k = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return k !== null ? null : u(f, c, "" + p, w);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Vr:
          return p.key === k ? s(f, c, p, w) : null;
        case on:
          return p.key === k ? a(f, c, p, w) : null;
        case dt:
          return (k = p._init), m(f, c, k(p._payload), w);
      }
      if (bn(p) || Hn(p)) return k !== null ? null : d(f, c, p, w, null);
      el(f, p);
    }
    return null;
  }
  function v(f, c, p, w, k) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (f = f.get(p) || null), u(c, f, "" + w, k);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Vr:
          return (f = f.get(w.key === null ? p : w.key) || null), s(c, f, w, k);
        case on:
          return (f = f.get(w.key === null ? p : w.key) || null), a(c, f, w, k);
        case dt:
          var P = w._init;
          return v(f, c, p, P(w._payload), k);
      }
      if (bn(w) || Hn(w)) return (f = f.get(p) || null), d(c, f, w, k, null);
      el(c, w);
    }
    return null;
  }
  function y(f, c, p, w) {
    for (
      var k = null, P = null, x = c, N = (c = 0), I = null;
      x !== null && N < p.length;
      N++
    ) {
      x.index > N ? ((I = x), (x = null)) : (I = x.sibling);
      var z = m(f, x, p[N], w);
      if (z === null) {
        x === null && (x = I);
        break;
      }
      e && x && z.alternate === null && t(f, x),
        (c = o(z, c, N)),
        P === null ? (k = z) : (P.sibling = z),
        (P = z),
        (x = I);
    }
    if (N === p.length) return n(f, x), W && At(f, N), k;
    if (x === null) {
      for (; N < p.length; N++)
        (x = h(f, p[N], w)),
          x !== null &&
            ((c = o(x, c, N)), P === null ? (k = x) : (P.sibling = x), (P = x));
      return W && At(f, N), k;
    }
    for (x = r(f, x); N < p.length; N++)
      (I = v(x, f, N, p[N], w)),
        I !== null &&
          (e && I.alternate !== null && x.delete(I.key === null ? N : I.key),
          (c = o(I, c, N)),
          P === null ? (k = I) : (P.sibling = I),
          (P = I));
    return (
      e &&
        x.forEach(function (le) {
          return t(f, le);
        }),
      W && At(f, N),
      k
    );
  }
  function g(f, c, p, w) {
    var k = Hn(p);
    if (typeof k != "function") throw Error(S(150));
    if (((p = k.call(p)), p == null)) throw Error(S(151));
    for (
      var P = (k = null), x = c, N = (c = 0), I = null, z = p.next();
      x !== null && !z.done;
      N++, z = p.next()
    ) {
      x.index > N ? ((I = x), (x = null)) : (I = x.sibling);
      var le = m(f, x, z.value, w);
      if (le === null) {
        x === null && (x = I);
        break;
      }
      e && x && le.alternate === null && t(f, x),
        (c = o(le, c, N)),
        P === null ? (k = le) : (P.sibling = le),
        (P = le),
        (x = I);
    }
    if (z.done) return n(f, x), W && At(f, N), k;
    if (x === null) {
      for (; !z.done; N++, z = p.next())
        (z = h(f, z.value, w)),
          z !== null &&
            ((c = o(z, c, N)), P === null ? (k = z) : (P.sibling = z), (P = z));
      return W && At(f, N), k;
    }
    for (x = r(f, x); !z.done; N++, z = p.next())
      (z = v(x, f, N, z.value, w)),
        z !== null &&
          (e && z.alternate !== null && x.delete(z.key === null ? N : z.key),
          (c = o(z, c, N)),
          P === null ? (k = z) : (P.sibling = z),
          (P = z));
    return (
      e &&
        x.forEach(function (Wn) {
          return t(f, Wn);
        }),
      W && At(f, N),
      k
    );
  }
  function C(f, c, p, w) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === un &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case Vr:
          e: {
            for (var k = p.key, P = c; P !== null; ) {
              if (P.key === k) {
                if (((k = p.type), k === un)) {
                  if (P.tag === 7) {
                    n(f, P.sibling),
                      (c = l(P, p.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  P.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === dt &&
                    Na(k) === P.type)
                ) {
                  n(f, P.sibling),
                    (c = l(P, p.props)),
                    (c.ref = Xn(f, P, p)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, P);
                break;
              } else t(f, P);
              P = P.sibling;
            }
            p.type === un
              ? ((c = Kt(p.props.children, f.mode, w, p.key)),
                (c.return = f),
                (f = c))
              : ((w = vl(p.type, p.key, p.props, null, f.mode, w)),
                (w.ref = Xn(f, c, p)),
                (w.return = f),
                (f = w));
          }
          return i(f);
        case on:
          e: {
            for (P = p.key; c !== null; ) {
              if (c.key === P)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, p.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = fi(p, f.mode, w)), (c.return = f), (f = c);
          }
          return i(f);
        case dt:
          return (P = p._init), C(f, c, P(p._payload), w);
      }
      if (bn(p)) return y(f, c, p, w);
      if (Hn(p)) return g(f, c, p, w);
      el(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, p)), (c.return = f), (f = c))
          : (n(f, c), (c = ci(p, f.mode, w)), (c.return = f), (f = c)),
        i(f))
      : n(f, c);
  }
  return C;
}
var zn = Mf(!0),
  Lf = Mf(!1),
  Fr = {},
  Je = Mt(Fr),
  Er = Mt(Fr),
  Pr = Mt(Fr);
function Ht(e) {
  if (e === Fr) throw Error(S(174));
  return e;
}
function os(e, t) {
  switch ((A(Pr, t), A(Er, e), A(Je, Fr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Mi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Mi(t, e));
  }
  U(Je), A(Je, t);
}
function jn() {
  U(Je), U(Er), U(Pr);
}
function Df(e) {
  Ht(Pr.current);
  var t = Ht(Je.current),
    n = Mi(t, e.type);
  t !== n && (A(Er, e), A(Je, n));
}
function is(e) {
  Er.current === e && (U(Je), U(Er));
}
var V = Mt(0);
function Ml(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var li = [];
function us() {
  for (var e = 0; e < li.length; e++)
    li[e]._workInProgressVersionPrimary = null;
  li.length = 0;
}
var fl = ct.ReactCurrentDispatcher,
  oi = ct.ReactCurrentBatchConfig,
  Xt = 0,
  H = null,
  Z = null,
  te = null,
  Ll = !1,
  sr = !1,
  xr = 0,
  lh = 0;
function se() {
  throw Error(S(321));
}
function ss(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ge(e[n], t[n])) return !1;
  return !0;
}
function as(e, t, n, r, l, o) {
  if (
    ((Xt = o),
    (H = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (fl.current = e === null || e.memoizedState === null ? sh : ah),
    (e = n(r, l)),
    sr)
  ) {
    o = 0;
    do {
      if (((sr = !1), (xr = 0), 25 <= o)) throw Error(S(301));
      (o += 1),
        (te = Z = null),
        (t.updateQueue = null),
        (fl.current = ch),
        (e = n(r, l));
    } while (sr);
  }
  if (
    ((fl.current = Dl),
    (t = Z !== null && Z.next !== null),
    (Xt = 0),
    (te = Z = H = null),
    (Ll = !1),
    t)
  )
    throw Error(S(300));
  return e;
}
function cs() {
  var e = xr !== 0;
  return (xr = 0), e;
}
function Xe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return te === null ? (H.memoizedState = te = e) : (te = te.next = e), te;
}
function Ie() {
  if (Z === null) {
    var e = H.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Z.next;
  var t = te === null ? H.memoizedState : te.next;
  if (t !== null) (te = t), (Z = e);
  else {
    if (e === null) throw Error(S(310));
    (Z = e),
      (e = {
        memoizedState: Z.memoizedState,
        baseState: Z.baseState,
        baseQueue: Z.baseQueue,
        queue: Z.queue,
        next: null,
      }),
      te === null ? (H.memoizedState = te = e) : (te = te.next = e);
  }
  return te;
}
function Cr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ii(e) {
  var t = Ie(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = Z,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      a = o;
    do {
      var d = a.lane;
      if ((Xt & d) === d)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var h = {
          lane: d,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = h), (i = r)) : (s = s.next = h),
          (H.lanes |= d),
          (qt |= d);
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? (i = r) : (s.next = u),
      Ge(r, t.memoizedState) || (ge = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (H.lanes |= o), (qt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ui(e) {
  var t = Ie(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Ge(o, t.memoizedState) || (ge = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function If() {}
function Af(e, t) {
  var n = H,
    r = Ie(),
    l = t(),
    o = !Ge(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (ge = !0)),
    (r = r.queue),
    fs(Bf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (te !== null && te.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Nr(9, Uf.bind(null, n, r, l, t), void 0, null),
      ne === null)
    )
      throw Error(S(349));
    Xt & 30 || Ff(n, t, l);
  }
  return l;
}
function Ff(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Uf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Wf(t) && Vf(e);
}
function Bf(e, t, n) {
  return n(function () {
    Wf(t) && Vf(e);
  });
}
function Wf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ge(e, n);
  } catch {
    return !0;
  }
}
function Vf(e) {
  var t = ut(e, 1);
  t !== null && Ke(t, e, 1, -1);
}
function Oa(e) {
  var t = Xe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Cr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = uh.bind(null, H, e)),
    [t.memoizedState, e]
  );
}
function Nr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Hf() {
  return Ie().memoizedState;
}
function dl(e, t, n, r) {
  var l = Xe();
  (H.flags |= e),
    (l.memoizedState = Nr(1 | t, n, void 0, r === void 0 ? null : r));
}
function ro(e, t, n, r) {
  var l = Ie();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Z !== null) {
    var i = Z.memoizedState;
    if (((o = i.destroy), r !== null && ss(r, i.deps))) {
      l.memoizedState = Nr(t, n, o, r);
      return;
    }
  }
  (H.flags |= e), (l.memoizedState = Nr(1 | t, n, o, r));
}
function za(e, t) {
  return dl(8390656, 8, e, t);
}
function fs(e, t) {
  return ro(2048, 8, e, t);
}
function Qf(e, t) {
  return ro(4, 2, e, t);
}
function Kf(e, t) {
  return ro(4, 4, e, t);
}
function Gf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Yf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ro(4, 4, Gf.bind(null, t, e), n)
  );
}
function ds() {}
function Xf(e, t) {
  var n = Ie();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ss(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function qf(e, t) {
  var n = Ie();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ss(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Zf(e, t, n) {
  return Xt & 21
    ? (Ge(n, t) || ((n = bc()), (H.lanes |= n), (qt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ge = !0)), (e.memoizedState = n));
}
function oh(e, t) {
  var n = M;
  (M = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = oi.transition;
  oi.transition = {};
  try {
    e(!1), t();
  } finally {
    (M = n), (oi.transition = r);
  }
}
function Jf() {
  return Ie().memoizedState;
}
function ih(e, t, n) {
  var r = xt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    bf(e))
  )
    ed(t, n);
  else if (((n = jf(e, t, n, r)), n !== null)) {
    var l = me();
    Ke(n, e, r, l), td(n, t, r);
  }
}
function uh(e, t, n) {
  var r = xt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (bf(e)) ed(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Ge(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), rs(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = jf(e, t, l, r)),
      n !== null && ((l = me()), Ke(n, e, r, l), td(n, t, r));
  }
}
function bf(e) {
  var t = e.alternate;
  return e === H || (t !== null && t === H);
}
function ed(e, t) {
  sr = Ll = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function td(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Vu(e, n);
  }
}
var Dl = {
    readContext: De,
    useCallback: se,
    useContext: se,
    useEffect: se,
    useImperativeHandle: se,
    useInsertionEffect: se,
    useLayoutEffect: se,
    useMemo: se,
    useReducer: se,
    useRef: se,
    useState: se,
    useDebugValue: se,
    useDeferredValue: se,
    useTransition: se,
    useMutableSource: se,
    useSyncExternalStore: se,
    useId: se,
    unstable_isNewReconciler: !1,
  },
  sh = {
    readContext: De,
    useCallback: function (e, t) {
      return (Xe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: De,
    useEffect: za,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        dl(4194308, 4, Gf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return dl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return dl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Xe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Xe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = ih.bind(null, H, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Xe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Oa,
    useDebugValue: ds,
    useDeferredValue: function (e) {
      return (Xe().memoizedState = e);
    },
    useTransition: function () {
      var e = Oa(!1),
        t = e[0];
      return (e = oh.bind(null, e[1])), (Xe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = H,
        l = Xe();
      if (W) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = t()), ne === null)) throw Error(S(349));
        Xt & 30 || Ff(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        za(Bf.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Nr(9, Uf.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Xe(),
        t = ne.identifierPrefix;
      if (W) {
        var n = rt,
          r = nt;
        (n = (r & ~(1 << (32 - Qe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = xr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = lh++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ah = {
    readContext: De,
    useCallback: Xf,
    useContext: De,
    useEffect: fs,
    useImperativeHandle: Yf,
    useInsertionEffect: Qf,
    useLayoutEffect: Kf,
    useMemo: qf,
    useReducer: ii,
    useRef: Hf,
    useState: function () {
      return ii(Cr);
    },
    useDebugValue: ds,
    useDeferredValue: function (e) {
      var t = Ie();
      return Zf(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = ii(Cr)[0],
        t = Ie().memoizedState;
      return [e, t];
    },
    useMutableSource: If,
    useSyncExternalStore: Af,
    useId: Jf,
    unstable_isNewReconciler: !1,
  },
  ch = {
    readContext: De,
    useCallback: Xf,
    useContext: De,
    useEffect: fs,
    useImperativeHandle: Yf,
    useInsertionEffect: Qf,
    useLayoutEffect: Kf,
    useMemo: qf,
    useReducer: ui,
    useRef: Hf,
    useState: function () {
      return ui(Cr);
    },
    useDebugValue: ds,
    useDeferredValue: function (e) {
      var t = Ie();
      return Z === null ? (t.memoizedState = e) : Zf(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = ui(Cr)[0],
        t = Ie().memoizedState;
      return [e, t];
    },
    useMutableSource: If,
    useSyncExternalStore: Af,
    useId: Jf,
    unstable_isNewReconciler: !1,
  };
function Tn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Ap(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function si(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ru(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var fh = typeof WeakMap == "function" ? WeakMap : Map;
function nd(e, t, n) {
  (n = lt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Al || ((Al = !0), (pu = r)), ru(e, t);
    }),
    n
  );
}
function rd(e, t, n) {
  (n = lt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        ru(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        ru(e, t),
          typeof r != "function" &&
            (Pt === null ? (Pt = new Set([this])) : Pt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function ja(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new fh();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = xh.bind(null, e, t, n)), t.then(e, e));
}
function Ta(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function $a(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = lt(-1, 1)), (t.tag = 2), Et(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var dh = ct.ReactCurrentOwner,
  ge = !1;
function pe(e, t, n, r) {
  t.child = e === null ? Lf(t, null, n, r) : zn(t, e.child, n, r);
}
function Ra(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    _n(t, l),
    (r = as(e, t, n, r, o, l)),
    (n = cs()),
    e !== null && !ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        st(e, t, l))
      : (W && n && Zu(t), (t.flags |= 1), pe(e, t, r, l), t.child)
  );
}
function Ma(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Ss(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), ld(e, t, o, r, l))
      : ((e = vl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : wr), n(i, r) && e.ref === t.ref)
    )
      return st(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Ct(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ld(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (wr(o, r) && e.ref === t.ref)
      if (((ge = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (ge = !0);
      else return (t.lanes = e.lanes), st(e, t, l);
  }
  return lu(e, t, n, r, l);
}
function od(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        A(yn, _e),
        (_e |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          A(yn, _e),
          (_e |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        A(yn, _e),
        (_e |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      A(yn, _e),
      (_e |= r);
  return pe(e, t, l, n), t.child;
}
function id(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function lu(e, t, n, r, l) {
  var o = Se(n) ? Gt : de.current;
  return (
    (o = Nn(t, o)),
    _n(t, l),
    (n = as(e, t, n, r, o, l)),
    (r = cs()),
    e !== null && !ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        st(e, t, l))
      : (W && r && Zu(t), (t.flags |= 1), pe(e, t, n, l), t.child)
  );
}
function La(e, t, n, r, l) {
  if (Se(n)) {
    var o = !0;
    Ol(t);
  } else o = !1;
  if ((_n(t, l), t.stateNode === null))
    pl(e, t), Rf(t, n, r), nu(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = De(a))
      : ((a = Se(n) ? Gt : de.current), (a = Nn(t, a)));
    var d = n.getDerivedStateFromProps,
      h =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && Ca(t, i, r, a)),
      (pt = !1);
    var m = t.memoizedState;
    (i.state = m),
      Rl(t, r, i, l),
      (s = t.memoizedState),
      u !== r || m !== s || we.current || pt
        ? (typeof d == "function" && (tu(t, n, d, r), (s = t.memoizedState)),
          (u = pt || xa(t, n, u, r, m, s, a))
            ? (h ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = a),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Tf(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : Ue(t.type, u)),
      (i.props = a),
      (h = t.pendingProps),
      (m = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = De(s))
        : ((s = Se(n) ? Gt : de.current), (s = Nn(t, s)));
    var v = n.getDerivedStateFromProps;
    (d =
      typeof v == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== h || m !== s) && Ca(t, i, r, s)),
      (pt = !1),
      (m = t.memoizedState),
      (i.state = m),
      Rl(t, r, i, l);
    var y = t.memoizedState;
    u !== h || m !== y || we.current || pt
      ? (typeof v == "function" && (tu(t, n, v, r), (y = t.memoizedState)),
        (a = pt || xa(t, n, a, r, m, y, s) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, y, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, y, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (i.props = r),
        (i.state = y),
        (i.context = s),
        (r = a))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ou(e, t, n, r, o, l);
}
function ou(e, t, n, r, l, o) {
  id(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Sa(t, n, !1), st(e, t, o);
  (r = t.stateNode), (dh.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = zn(t, e.child, null, o)), (t.child = zn(t, null, u, o)))
      : pe(e, t, u, o),
    (t.memoizedState = r.state),
    l && Sa(t, n, !0),
    t.child
  );
}
function ud(e) {
  var t = e.stateNode;
  t.pendingContext
    ? wa(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && wa(e, t.context, !1),
    os(e, t.containerInfo);
}
function Da(e, t, n, r, l) {
  return On(), bu(l), (t.flags |= 256), pe(e, t, n, r), t.child;
}
var iu = { dehydrated: null, treeContext: null, retryLane: 0 };
function uu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function sd(e, t, n) {
  var r = t.pendingProps,
    l = V.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    A(V, l & 1),
    e === null)
  )
    return (
      bi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = io(i, r, 0, null)),
              (e = Kt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = uu(n)),
              (t.memoizedState = iu),
              e)
            : ps(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return ph(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Ct(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = Ct(u, o)) : ((o = Kt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? uu(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = iu),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Ct(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ps(e, t) {
  return (
    (t = io({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function tl(e, t, n, r) {
  return (
    r !== null && bu(r),
    zn(t, e.child, null, n),
    (e = ps(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ph(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = si(Error(S(422)))), tl(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = io({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Kt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && zn(t, e.child, null, i),
        (t.child.memoizedState = uu(i)),
        (t.memoizedState = iu),
        o);
  if (!(t.mode & 1)) return tl(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(S(419))), (r = si(o, r, void 0)), tl(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), ge || u)) {
    if (((r = ne), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), ut(e, l), Ke(r, e, l, -1));
    }
    return ws(), (r = si(Error(S(421)))), tl(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Ch.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ee = _t(l.nextSibling)),
      (Pe = t),
      (W = !0),
      (We = null),
      e !== null &&
        (($e[Re++] = nt),
        ($e[Re++] = rt),
        ($e[Re++] = Yt),
        (nt = e.id),
        (rt = e.overflow),
        (Yt = t)),
      (t = ps(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ia(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), eu(e.return, t, n);
}
function ai(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function ad(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((pe(e, t, r.children, n), (r = V.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ia(e, n, t);
        else if (e.tag === 19) Ia(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((A(V, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Ml(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ai(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Ml(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ai(t, !0, n, null, o);
        break;
      case "together":
        ai(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function pl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function st(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (qt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ct(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ct(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function mh(e, t, n) {
  switch (t.tag) {
    case 3:
      ud(t), On();
      break;
    case 5:
      Df(t);
      break;
    case 1:
      Se(t.type) && Ol(t);
      break;
    case 4:
      os(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      A(Tl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (A(V, V.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? sd(e, t, n)
          : (A(V, V.current & 1),
            (e = st(e, t, n)),
            e !== null ? e.sibling : null);
      A(V, V.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return ad(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        A(V, V.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), od(e, t, n);
  }
  return st(e, t, n);
}
var cd, su, fd, dd;
cd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
su = function () {};
fd = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Ht(Je.current);
    var o = null;
    switch (n) {
      case "input":
        (l = ji(e, l)), (r = ji(e, r)), (o = []);
        break;
      case "select":
        (l = Q({}, l, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = Ri(e, l)), (r = Ri(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Cl);
    }
    Li(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (dr.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(a, s))
            : a === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(a, "" + s)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (dr.hasOwnProperty(a)
                ? (s != null && a === "onScroll" && F("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
dd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function qn(e, t) {
  if (!W)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ae(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function hh(e, t, n) {
  var r = t.pendingProps;
  switch ((Ju(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ae(t), null;
    case 1:
      return Se(t.type) && Nl(), ae(t), null;
    case 3:
      return (
        (r = t.stateNode),
        jn(),
        U(we),
        U(de),
        us(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (br(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), We !== null && (vu(We), (We = null)))),
        su(e, t),
        ae(t),
        null
      );
    case 5:
      is(t);
      var l = Ht(Pr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        fd(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return ae(t), null;
        }
        if (((e = Ht(Je.current)), br(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[qe] = t), (r[_r] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              F("cancel", r), F("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              F("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < tr.length; l++) F(tr[l], r);
              break;
            case "source":
              F("error", r);
              break;
            case "img":
            case "image":
            case "link":
              F("error", r), F("load", r);
              break;
            case "details":
              F("toggle", r);
              break;
            case "input":
              Ks(r, o), F("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                F("invalid", r);
              break;
            case "textarea":
              Ys(r, o), F("invalid", r);
          }
          Li(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Jr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Jr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : dr.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  F("scroll", r);
            }
          switch (n) {
            case "input":
              Hr(r), Gs(r, o, !0);
              break;
            case "textarea":
              Hr(r), Xs(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Cl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ac(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[qe] = t),
            (e[_r] = r),
            cd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Di(n, r)), n)) {
              case "dialog":
                F("cancel", e), F("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                F("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < tr.length; l++) F(tr[l], e);
                l = r;
                break;
              case "source":
                F("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                F("error", e), F("load", e), (l = r);
                break;
              case "details":
                F("toggle", e), (l = r);
                break;
              case "input":
                Ks(e, r), (l = ji(e, r)), F("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = Q({}, r, { value: void 0 })),
                  F("invalid", e);
                break;
              case "textarea":
                Ys(e, r), (l = Ri(e, r)), F("invalid", e);
                break;
              default:
                l = r;
            }
            Li(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? Bc(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Fc(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && pr(e, s)
                    : typeof s == "number" && pr(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (dr.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && F("scroll", e)
                      : s != null && Iu(e, o, s, i));
              }
            switch (n) {
              case "input":
                Hr(e), Gs(e, r, !1);
                break;
              case "textarea":
                Hr(e), Xs(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + zt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? gn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      gn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Cl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ae(t), null;
    case 6:
      if (e && t.stateNode != null) dd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (((n = Ht(Pr.current)), Ht(Je.current), br(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[qe] = t),
            (o = r.nodeValue !== n) && ((e = Pe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Jr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Jr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[qe] = t),
            (t.stateNode = r);
      }
      return ae(t), null;
    case 13:
      if (
        (U(V),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (W && Ee !== null && t.mode & 1 && !(t.flags & 128))
          zf(), On(), (t.flags |= 98560), (o = !1);
        else if (((o = br(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(S(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(S(317));
            o[qe] = t;
          } else
            On(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ae(t), (o = !1);
        } else We !== null && (vu(We), (We = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || V.current & 1 ? J === 0 && (J = 3) : ws())),
          t.updateQueue !== null && (t.flags |= 4),
          ae(t),
          null);
    case 4:
      return (
        jn(), su(e, t), e === null && Sr(t.stateNode.containerInfo), ae(t), null
      );
    case 10:
      return ns(t.type._context), ae(t), null;
    case 17:
      return Se(t.type) && Nl(), ae(t), null;
    case 19:
      if ((U(V), (o = t.memoizedState), o === null)) return ae(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) qn(o, !1);
        else {
          if (J !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Ml(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    qn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return A(V, (V.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Y() > $n &&
            ((t.flags |= 128), (r = !0), qn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ml(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              qn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !W)
            )
              return ae(t), null;
          } else
            2 * Y() - o.renderingStartTime > $n &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), qn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Y()),
          (t.sibling = null),
          (n = V.current),
          A(V, r ? (n & 1) | 2 : n & 1),
          t)
        : (ae(t), null);
    case 22:
    case 23:
      return (
        gs(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? _e & 1073741824 && (ae(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ae(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function vh(e, t) {
  switch ((Ju(t), t.tag)) {
    case 1:
      return (
        Se(t.type) && Nl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        jn(),
        U(we),
        U(de),
        us(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return is(t), null;
    case 13:
      if ((U(V), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340));
        On();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return U(V), null;
    case 4:
      return jn(), null;
    case 10:
      return ns(t.type._context), null;
    case 22:
    case 23:
      return gs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var nl = !1,
  fe = !1,
  yh = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function vn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        K(e, t, r);
      }
    else n.current = null;
}
function au(e, t, n) {
  try {
    n();
  } catch (r) {
    K(e, t, r);
  }
}
var Aa = !1;
function gh(e, t) {
  if (((Ki = El), (e = vf()), qu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            a = 0,
            d = 0,
            h = e,
            m = null;
          t: for (;;) {
            for (
              var v;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = i + l),
                h !== o || (r !== 0 && h.nodeType !== 3) || (s = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (v = h.firstChild) !== null;

            )
              (m = h), (h = v);
            for (;;) {
              if (h === e) break t;
              if (
                (m === n && ++a === l && (u = i),
                m === o && ++d === r && (s = i),
                (v = h.nextSibling) !== null)
              )
                break;
              (h = m), (m = h.parentNode);
            }
            h = v;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Gi = { focusedElem: e, selectionRange: n }, El = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var g = y.memoizedProps,
                    C = y.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Ue(t.type, g),
                      C
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (w) {
          K(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (y = Aa), (Aa = !1), y;
}
function ar(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && au(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function lo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function cu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function pd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), pd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[qe], delete t[_r], delete t[qi], delete t[eh], delete t[th])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function md(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Fa(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || md(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function fu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Cl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (fu(e, t, n), e = e.sibling; e !== null; ) fu(e, t, n), (e = e.sibling);
}
function du(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (du(e, t, n), e = e.sibling; e !== null; ) du(e, t, n), (e = e.sibling);
}
var oe = null,
  Be = !1;
function ft(e, t, n) {
  for (n = n.child; n !== null; ) hd(e, t, n), (n = n.sibling);
}
function hd(e, t, n) {
  if (Ze && typeof Ze.onCommitFiberUnmount == "function")
    try {
      Ze.onCommitFiberUnmount(ql, n);
    } catch {}
  switch (n.tag) {
    case 5:
      fe || vn(n, t);
    case 6:
      var r = oe,
        l = Be;
      (oe = null),
        ft(e, t, n),
        (oe = r),
        (Be = l),
        oe !== null &&
          (Be
            ? ((e = oe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : oe.removeChild(n.stateNode));
      break;
    case 18:
      oe !== null &&
        (Be
          ? ((e = oe),
            (n = n.stateNode),
            e.nodeType === 8
              ? ni(e.parentNode, n)
              : e.nodeType === 1 && ni(e, n),
            yr(e))
          : ni(oe, n.stateNode));
      break;
    case 4:
      (r = oe),
        (l = Be),
        (oe = n.stateNode.containerInfo),
        (Be = !0),
        ft(e, t, n),
        (oe = r),
        (Be = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !fe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && au(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      ft(e, t, n);
      break;
    case 1:
      if (
        !fe &&
        (vn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          K(n, t, u);
        }
      ft(e, t, n);
      break;
    case 21:
      ft(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((fe = (r = fe) || n.memoizedState !== null), ft(e, t, n), (fe = r))
        : ft(e, t, n);
      break;
    default:
      ft(e, t, n);
  }
}
function Ua(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new yh()),
      t.forEach(function (r) {
        var l = Nh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Fe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (oe = u.stateNode), (Be = !1);
              break e;
            case 3:
              (oe = u.stateNode.containerInfo), (Be = !0);
              break e;
            case 4:
              (oe = u.stateNode.containerInfo), (Be = !0);
              break e;
          }
          u = u.return;
        }
        if (oe === null) throw Error(S(160));
        hd(o, i, l), (oe = null), (Be = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        K(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) vd(t, e), (t = t.sibling);
}
function vd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Fe(t, e), Ye(e), r & 4)) {
        try {
          ar(3, e, e.return), lo(3, e);
        } catch (g) {
          K(e, e.return, g);
        }
        try {
          ar(5, e, e.return);
        } catch (g) {
          K(e, e.return, g);
        }
      }
      break;
    case 1:
      Fe(t, e), Ye(e), r & 512 && n !== null && vn(n, n.return);
      break;
    case 5:
      if (
        (Fe(t, e),
        Ye(e),
        r & 512 && n !== null && vn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          pr(l, "");
        } catch (g) {
          K(e, e.return, g);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && Dc(l, o),
              Di(u, i);
            var a = Di(u, o);
            for (i = 0; i < s.length; i += 2) {
              var d = s[i],
                h = s[i + 1];
              d === "style"
                ? Bc(l, h)
                : d === "dangerouslySetInnerHTML"
                ? Fc(l, h)
                : d === "children"
                ? pr(l, h)
                : Iu(l, d, h, a);
            }
            switch (u) {
              case "input":
                Ti(l, o);
                break;
              case "textarea":
                Ic(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? gn(l, !!o.multiple, v, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? gn(l, !!o.multiple, o.defaultValue, !0)
                      : gn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[_r] = o;
          } catch (g) {
            K(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Fe(t, e), Ye(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (g) {
          K(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Fe(t, e), Ye(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          yr(t.containerInfo);
        } catch (g) {
          K(e, e.return, g);
        }
      break;
    case 4:
      Fe(t, e), Ye(e);
      break;
    case 13:
      Fe(t, e),
        Ye(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (vs = Y())),
        r & 4 && Ua(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((fe = (a = fe) || d), Fe(t, e), (fe = a)) : Fe(t, e),
        Ye(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !d && e.mode & 1)
        )
          for (_ = e, d = e.child; d !== null; ) {
            for (h = _ = d; _ !== null; ) {
              switch (((m = _), (v = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ar(4, m, m.return);
                  break;
                case 1:
                  vn(m, m.return);
                  var y = m.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (g) {
                      K(r, n, g);
                    }
                  }
                  break;
                case 5:
                  vn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Wa(h);
                    continue;
                  }
              }
              v !== null ? ((v.return = m), (_ = v)) : Wa(h);
            }
            d = d.sibling;
          }
        e: for (d = null, h = e; ; ) {
          if (h.tag === 5) {
            if (d === null) {
              d = h;
              try {
                (l = h.stateNode),
                  a
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = h.stateNode),
                      (s = h.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Uc("display", i)));
              } catch (g) {
                K(e, e.return, g);
              }
            }
          } else if (h.tag === 6) {
            if (d === null)
              try {
                h.stateNode.nodeValue = a ? "" : h.memoizedProps;
              } catch (g) {
                K(e, e.return, g);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            d === h && (d = null), (h = h.return);
          }
          d === h && (d = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Fe(t, e), Ye(e), r & 4 && Ua(e);
      break;
    case 21:
      break;
    default:
      Fe(t, e), Ye(e);
  }
}
function Ye(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (md(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (pr(l, ""), (r.flags &= -33));
          var o = Fa(e);
          du(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Fa(e);
          fu(e, u, i);
          break;
        default:
          throw Error(S(161));
      }
    } catch (s) {
      K(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function wh(e, t, n) {
  (_ = e), yd(e);
}
function yd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || nl;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || fe;
        u = nl;
        var a = fe;
        if (((nl = i), (fe = s) && !a))
          for (_ = l; _ !== null; )
            (i = _),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Va(l)
                : s !== null
                ? ((s.return = i), (_ = s))
                : Va(l);
        for (; o !== null; ) (_ = o), yd(o), (o = o.sibling);
        (_ = l), (nl = u), (fe = a);
      }
      Ba(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (_ = o)) : Ba(e);
  }
}
function Ba(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              fe || lo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !fe)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ue(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Pa(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Pa(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var d = a.memoizedState;
                  if (d !== null) {
                    var h = d.dehydrated;
                    h !== null && yr(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(S(163));
          }
        fe || (t.flags & 512 && cu(t));
      } catch (m) {
        K(t, t.return, m);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function Wa(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function Va(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            lo(4, t);
          } catch (s) {
            K(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              K(t, l, s);
            }
          }
          var o = t.return;
          try {
            cu(t);
          } catch (s) {
            K(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            cu(t);
          } catch (s) {
            K(t, i, s);
          }
      }
    } catch (s) {
      K(t, t.return, s);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (_ = u);
      break;
    }
    _ = t.return;
  }
}
var Sh = Math.ceil,
  Il = ct.ReactCurrentDispatcher,
  ms = ct.ReactCurrentOwner,
  Le = ct.ReactCurrentBatchConfig,
  R = 0,
  ne = null,
  q = null,
  ie = 0,
  _e = 0,
  yn = Mt(0),
  J = 0,
  Or = null,
  qt = 0,
  oo = 0,
  hs = 0,
  cr = null,
  ye = null,
  vs = 0,
  $n = 1 / 0,
  et = null,
  Al = !1,
  pu = null,
  Pt = null,
  rl = !1,
  gt = null,
  Fl = 0,
  fr = 0,
  mu = null,
  ml = -1,
  hl = 0;
function me() {
  return R & 6 ? Y() : ml !== -1 ? ml : (ml = Y());
}
function xt(e) {
  return e.mode & 1
    ? R & 2 && ie !== 0
      ? ie & -ie
      : rh.transition !== null
      ? (hl === 0 && (hl = bc()), hl)
      : ((e = M),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : uf(e.type))),
        e)
    : 1;
}
function Ke(e, t, n, r) {
  if (50 < fr) throw ((fr = 0), (mu = null), Error(S(185)));
  Dr(e, n, r),
    (!(R & 2) || e !== ne) &&
      (e === ne && (!(R & 2) && (oo |= n), J === 4 && ht(e, ie)),
      ke(e, r),
      n === 1 && R === 0 && !(t.mode & 1) && (($n = Y() + 500), to && Lt()));
}
function ke(e, t) {
  var n = e.callbackNode;
  rm(e, t);
  var r = _l(e, e === ne ? ie : 0);
  if (r === 0)
    n !== null && Js(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Js(n), t === 1))
      e.tag === 0 ? nh(Ha.bind(null, e)) : Cf(Ha.bind(null, e)),
        Jm(function () {
          !(R & 6) && Lt();
        }),
        (n = null);
    else {
      switch (ef(r)) {
        case 1:
          n = Wu;
          break;
        case 4:
          n = Zc;
          break;
        case 16:
          n = kl;
          break;
        case 536870912:
          n = Jc;
          break;
        default:
          n = kl;
      }
      n = xd(n, gd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function gd(e, t) {
  if (((ml = -1), (hl = 0), R & 6)) throw Error(S(327));
  var n = e.callbackNode;
  if (En() && e.callbackNode !== n) return null;
  var r = _l(e, e === ne ? ie : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ul(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var o = Sd();
    (ne !== e || ie !== t) && ((et = null), ($n = Y() + 500), Qt(e, t));
    do
      try {
        Eh();
        break;
      } catch (u) {
        wd(e, u);
      }
    while (1);
    ts(),
      (Il.current = o),
      (R = l),
      q !== null ? (t = 0) : ((ne = null), (ie = 0), (t = J));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Bi(e)), l !== 0 && ((r = l), (t = hu(e, l)))), t === 1)
    )
      throw ((n = Or), Qt(e, 0), ht(e, r), ke(e, Y()), n);
    if (t === 6) ht(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !kh(l) &&
          ((t = Ul(e, r)),
          t === 2 && ((o = Bi(e)), o !== 0 && ((r = o), (t = hu(e, o)))),
          t === 1))
      )
        throw ((n = Or), Qt(e, 0), ht(e, r), ke(e, Y()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Ft(e, ye, et);
          break;
        case 3:
          if (
            (ht(e, r), (r & 130023424) === r && ((t = vs + 500 - Y()), 10 < t))
          ) {
            if (_l(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              me(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Xi(Ft.bind(null, e, ye, et), t);
            break;
          }
          Ft(e, ye, et);
          break;
        case 4:
          if ((ht(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Qe(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = Y() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Sh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Xi(Ft.bind(null, e, ye, et), r);
            break;
          }
          Ft(e, ye, et);
          break;
        case 5:
          Ft(e, ye, et);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return ke(e, Y()), e.callbackNode === n ? gd.bind(null, e) : null;
}
function hu(e, t) {
  var n = cr;
  return (
    e.current.memoizedState.isDehydrated && (Qt(e, t).flags |= 256),
    (e = Ul(e, t)),
    e !== 2 && ((t = ye), (ye = n), t !== null && vu(t)),
    e
  );
}
function vu(e) {
  ye === null ? (ye = e) : ye.push.apply(ye, e);
}
function kh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Ge(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function ht(e, t) {
  for (
    t &= ~hs,
      t &= ~oo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Qe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ha(e) {
  if (R & 6) throw Error(S(327));
  En();
  var t = _l(e, 0);
  if (!(t & 1)) return ke(e, Y()), null;
  var n = Ul(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Bi(e);
    r !== 0 && ((t = r), (n = hu(e, r)));
  }
  if (n === 1) throw ((n = Or), Qt(e, 0), ht(e, t), ke(e, Y()), n);
  if (n === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ft(e, ye, et),
    ke(e, Y()),
    null
  );
}
function ys(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    (R = n), R === 0 && (($n = Y() + 500), to && Lt());
  }
}
function Zt(e) {
  gt !== null && gt.tag === 0 && !(R & 6) && En();
  var t = R;
  R |= 1;
  var n = Le.transition,
    r = M;
  try {
    if (((Le.transition = null), (M = 1), e)) return e();
  } finally {
    (M = r), (Le.transition = n), (R = t), !(R & 6) && Lt();
  }
}
function gs() {
  (_e = yn.current), U(yn);
}
function Qt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Zm(n)), q !== null))
    for (n = q.return; n !== null; ) {
      var r = n;
      switch ((Ju(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Nl();
          break;
        case 3:
          jn(), U(we), U(de), us();
          break;
        case 5:
          is(r);
          break;
        case 4:
          jn();
          break;
        case 13:
          U(V);
          break;
        case 19:
          U(V);
          break;
        case 10:
          ns(r.type._context);
          break;
        case 22:
        case 23:
          gs();
      }
      n = n.return;
    }
  if (
    ((ne = e),
    (q = e = Ct(e.current, null)),
    (ie = _e = t),
    (J = 0),
    (Or = null),
    (hs = oo = qt = 0),
    (ye = cr = null),
    Vt !== null)
  ) {
    for (t = 0; t < Vt.length; t++)
      if (((n = Vt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Vt = null;
  }
  return e;
}
function wd(e, t) {
  do {
    var n = q;
    try {
      if ((ts(), (fl.current = Dl), Ll)) {
        for (var r = H.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Ll = !1;
      }
      if (
        ((Xt = 0),
        (te = Z = H = null),
        (sr = !1),
        (xr = 0),
        (ms.current = null),
        n === null || n.return === null)
      ) {
        (J = 1), (Or = t), (q = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = ie),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            d = u,
            h = d.tag;
          if (!(d.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = d.alternate;
            m
              ? ((d.updateQueue = m.updateQueue),
                (d.memoizedState = m.memoizedState),
                (d.lanes = m.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var v = Ta(i);
          if (v !== null) {
            (v.flags &= -257),
              $a(v, i, u, o, t),
              v.mode & 1 && ja(o, a, t),
              (t = v),
              (s = a);
            var y = t.updateQueue;
            if (y === null) {
              var g = new Set();
              g.add(s), (t.updateQueue = g);
            } else y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              ja(o, a, t), ws();
              break e;
            }
            s = Error(S(426));
          }
        } else if (W && u.mode & 1) {
          var C = Ta(i);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              $a(C, i, u, o, t),
              bu(Tn(s, u));
            break e;
          }
        }
        (o = s = Tn(s, u)),
          J !== 4 && (J = 2),
          cr === null ? (cr = [o]) : cr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = nd(o, s, t);
              Ea(o, f);
              break e;
            case 1:
              u = s;
              var c = o.type,
                p = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (Pt === null || !Pt.has(p))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = rd(o, u, t);
                Ea(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      _d(n);
    } catch (k) {
      (t = k), q === n && n !== null && (q = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Sd() {
  var e = Il.current;
  return (Il.current = Dl), e === null ? Dl : e;
}
function ws() {
  (J === 0 || J === 3 || J === 2) && (J = 4),
    ne === null || (!(qt & 268435455) && !(oo & 268435455)) || ht(ne, ie);
}
function Ul(e, t) {
  var n = R;
  R |= 2;
  var r = Sd();
  (ne !== e || ie !== t) && ((et = null), Qt(e, t));
  do
    try {
      _h();
      break;
    } catch (l) {
      wd(e, l);
    }
  while (1);
  if ((ts(), (R = n), (Il.current = r), q !== null)) throw Error(S(261));
  return (ne = null), (ie = 0), J;
}
function _h() {
  for (; q !== null; ) kd(q);
}
function Eh() {
  for (; q !== null && !Yp(); ) kd(q);
}
function kd(e) {
  var t = Pd(e.alternate, e, _e);
  (e.memoizedProps = e.pendingProps),
    t === null ? _d(e) : (q = t),
    (ms.current = null);
}
function _d(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = vh(n, t)), n !== null)) {
        (n.flags &= 32767), (q = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (J = 6), (q = null);
        return;
      }
    } else if (((n = hh(n, t, _e)), n !== null)) {
      q = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      q = t;
      return;
    }
    q = t = e;
  } while (t !== null);
  J === 0 && (J = 5);
}
function Ft(e, t, n) {
  var r = M,
    l = Le.transition;
  try {
    (Le.transition = null), (M = 1), Ph(e, t, n, r);
  } finally {
    (Le.transition = l), (M = r);
  }
  return null;
}
function Ph(e, t, n, r) {
  do En();
  while (gt !== null);
  if (R & 6) throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (lm(e, o),
    e === ne && ((q = ne = null), (ie = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      rl ||
      ((rl = !0),
      xd(kl, function () {
        return En(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Le.transition), (Le.transition = null);
    var i = M;
    M = 1;
    var u = R;
    (R |= 4),
      (ms.current = null),
      gh(e, n),
      vd(n, e),
      Hm(Gi),
      (El = !!Ki),
      (Gi = Ki = null),
      (e.current = n),
      wh(n),
      Xp(),
      (R = u),
      (M = i),
      (Le.transition = o);
  } else e.current = n;
  if (
    (rl && ((rl = !1), (gt = e), (Fl = l)),
    (o = e.pendingLanes),
    o === 0 && (Pt = null),
    Jp(n.stateNode),
    ke(e, Y()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Al) throw ((Al = !1), (e = pu), (pu = null), e);
  return (
    Fl & 1 && e.tag !== 0 && En(),
    (o = e.pendingLanes),
    o & 1 ? (e === mu ? fr++ : ((fr = 0), (mu = e))) : (fr = 0),
    Lt(),
    null
  );
}
function En() {
  if (gt !== null) {
    var e = ef(Fl),
      t = Le.transition,
      n = M;
    try {
      if (((Le.transition = null), (M = 16 > e ? 16 : e), gt === null))
        var r = !1;
      else {
        if (((e = gt), (gt = null), (Fl = 0), R & 6)) throw Error(S(331));
        var l = R;
        for (R |= 4, _ = e.current; _ !== null; ) {
          var o = _,
            i = o.child;
          if (_.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (_ = a; _ !== null; ) {
                  var d = _;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ar(8, d, o);
                  }
                  var h = d.child;
                  if (h !== null) (h.return = d), (_ = h);
                  else
                    for (; _ !== null; ) {
                      d = _;
                      var m = d.sibling,
                        v = d.return;
                      if ((pd(d), d === a)) {
                        _ = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = v), (_ = m);
                        break;
                      }
                      _ = v;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var g = y.child;
                if (g !== null) {
                  y.child = null;
                  do {
                    var C = g.sibling;
                    (g.sibling = null), (g = C);
                  } while (g !== null);
                }
              }
              _ = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (_ = i);
          else
            e: for (; _ !== null; ) {
              if (((o = _), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ar(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (_ = f);
                break e;
              }
              _ = o.return;
            }
        }
        var c = e.current;
        for (_ = c; _ !== null; ) {
          i = _;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) (p.return = i), (_ = p);
          else
            e: for (i = c; _ !== null; ) {
              if (((u = _), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      lo(9, u);
                  }
                } catch (k) {
                  K(u, u.return, k);
                }
              if (u === i) {
                _ = null;
                break e;
              }
              var w = u.sibling;
              if (w !== null) {
                (w.return = u.return), (_ = w);
                break e;
              }
              _ = u.return;
            }
        }
        if (
          ((R = l), Lt(), Ze && typeof Ze.onPostCommitFiberRoot == "function")
        )
          try {
            Ze.onPostCommitFiberRoot(ql, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (M = n), (Le.transition = t);
    }
  }
  return !1;
}
function Qa(e, t, n) {
  (t = Tn(n, t)),
    (t = nd(e, t, 1)),
    (e = Et(e, t, 1)),
    (t = me()),
    e !== null && (Dr(e, 1, t), ke(e, t));
}
function K(e, t, n) {
  if (e.tag === 3) Qa(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Qa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Pt === null || !Pt.has(r)))
        ) {
          (e = Tn(n, e)),
            (e = rd(t, e, 1)),
            (t = Et(t, e, 1)),
            (e = me()),
            t !== null && (Dr(t, 1, e), ke(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function xh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ne === e &&
      (ie & n) === n &&
      (J === 4 || (J === 3 && (ie & 130023424) === ie && 500 > Y() - vs)
        ? Qt(e, 0)
        : (hs |= n)),
    ke(e, t);
}
function Ed(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Gr), (Gr <<= 1), !(Gr & 130023424) && (Gr = 4194304))
      : (t = 1));
  var n = me();
  (e = ut(e, t)), e !== null && (Dr(e, t, n), ke(e, n));
}
function Ch(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ed(e, n);
}
function Nh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), Ed(e, n);
}
var Pd;
Pd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || we.current) ge = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ge = !1), mh(e, t, n);
      ge = !!(e.flags & 131072);
    }
  else (ge = !1), W && t.flags & 1048576 && Nf(t, jl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      pl(e, t), (e = t.pendingProps);
      var l = Nn(t, de.current);
      _n(t, n), (l = as(null, t, r, e, l, n));
      var o = cs();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Se(r) ? ((o = !0), Ol(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            ls(t),
            (l.updater = no),
            (t.stateNode = l),
            (l._reactInternals = t),
            nu(t, r, e, n),
            (t = ou(null, t, r, !0, o, n)))
          : ((t.tag = 0), W && o && Zu(t), pe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (pl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = zh(r)),
          (e = Ue(r, e)),
          l)
        ) {
          case 0:
            t = lu(null, t, r, e, n);
            break e;
          case 1:
            t = La(null, t, r, e, n);
            break e;
          case 11:
            t = Ra(null, t, r, e, n);
            break e;
          case 14:
            t = Ma(null, t, r, Ue(r.type, e), n);
            break e;
        }
        throw Error(S(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ue(r, l)),
        lu(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ue(r, l)),
        La(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((ud(t), e === null)) throw Error(S(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Tf(e, t),
          Rl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = Tn(Error(S(423)), t)), (t = Da(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Tn(Error(S(424)), t)), (t = Da(e, t, r, n, l));
            break e;
          } else
            for (
              Ee = _t(t.stateNode.containerInfo.firstChild),
                Pe = t,
                W = !0,
                We = null,
                n = Lf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((On(), r === l)) {
            t = st(e, t, n);
            break e;
          }
          pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Df(t),
        e === null && bi(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Yi(r, l) ? (i = null) : o !== null && Yi(r, o) && (t.flags |= 32),
        id(e, t),
        pe(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && bi(t), null;
    case 13:
      return sd(e, t, n);
    case 4:
      return (
        os(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = zn(t, null, r, n)) : pe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ue(r, l)),
        Ra(e, t, r, l, n)
      );
    case 7:
      return pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          A(Tl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Ge(o.value, i)) {
            if (o.children === l.children && !we.current) {
              t = st(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = lt(-1, n & -n)), (s.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var d = a.pending;
                        d === null
                          ? (s.next = s)
                          : ((s.next = d.next), (d.next = s)),
                          (a.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      eu(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(S(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  eu(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        pe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        _n(t, n),
        (l = De(l)),
        (r = r(l)),
        (t.flags |= 1),
        pe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Ue(r, t.pendingProps)),
        (l = Ue(r.type, l)),
        Ma(e, t, r, l, n)
      );
    case 15:
      return ld(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ue(r, l)),
        pl(e, t),
        (t.tag = 1),
        Se(r) ? ((e = !0), Ol(t)) : (e = !1),
        _n(t, n),
        Rf(t, r, l),
        nu(t, r, l, n),
        ou(null, t, r, !0, e, n)
      );
    case 19:
      return ad(e, t, n);
    case 22:
      return od(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function xd(e, t) {
  return qc(e, t);
}
function Oh(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Me(e, t, n, r) {
  return new Oh(e, t, n, r);
}
function Ss(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function zh(e) {
  if (typeof e == "function") return Ss(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Fu)) return 11;
    if (e === Uu) return 14;
  }
  return 2;
}
function Ct(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Me(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function vl(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Ss(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case un:
        return Kt(n.children, l, o, t);
      case Au:
        (i = 8), (l |= 8);
        break;
      case Ci:
        return (
          (e = Me(12, n, t, l | 2)), (e.elementType = Ci), (e.lanes = o), e
        );
      case Ni:
        return (e = Me(13, n, t, l)), (e.elementType = Ni), (e.lanes = o), e;
      case Oi:
        return (e = Me(19, n, t, l)), (e.elementType = Oi), (e.lanes = o), e;
      case Rc:
        return io(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Tc:
              i = 10;
              break e;
            case $c:
              i = 9;
              break e;
            case Fu:
              i = 11;
              break e;
            case Uu:
              i = 14;
              break e;
            case dt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Me(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Kt(e, t, n, r) {
  return (e = Me(7, e, r, t)), (e.lanes = n), e;
}
function io(e, t, n, r) {
  return (
    (e = Me(22, e, r, t)),
    (e.elementType = Rc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ci(e, t, n) {
  return (e = Me(6, e, null, t)), (e.lanes = n), e;
}
function fi(e, t, n) {
  return (
    (t = Me(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function jh(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Qo(0)),
    (this.expirationTimes = Qo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Qo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function ks(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new jh(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Me(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ls(o),
    e
  );
}
function Th(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: on,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Cd(e) {
  if (!e) return jt;
  e = e._reactInternals;
  e: {
    if (nn(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Se(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Se(n)) return xf(e, n, t);
  }
  return t;
}
function Nd(e, t, n, r, l, o, i, u, s) {
  return (
    (e = ks(n, r, !0, e, l, o, i, u, s)),
    (e.context = Cd(null)),
    (n = e.current),
    (r = me()),
    (l = xt(n)),
    (o = lt(r, l)),
    (o.callback = t ?? null),
    Et(n, o, l),
    (e.current.lanes = l),
    Dr(e, l, r),
    ke(e, r),
    e
  );
}
function uo(e, t, n, r) {
  var l = t.current,
    o = me(),
    i = xt(l);
  return (
    (n = Cd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = lt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Et(l, t, i)),
    e !== null && (Ke(e, l, i, o), cl(e, l, i)),
    i
  );
}
function Bl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ka(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function _s(e, t) {
  Ka(e, t), (e = e.alternate) && Ka(e, t);
}
function $h() {
  return null;
}
var Od =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Es(e) {
  this._internalRoot = e;
}
so.prototype.render = Es.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  uo(e, t, null, null);
};
so.prototype.unmount = Es.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Zt(function () {
      uo(null, e, null, null);
    }),
      (t[it] = null);
  }
};
function so(e) {
  this._internalRoot = e;
}
so.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = rf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < mt.length && t !== 0 && t < mt[n].priority; n++);
    mt.splice(n, 0, e), n === 0 && of(e);
  }
};
function Ps(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ao(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ga() {}
function Rh(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = Bl(i);
        o.call(a);
      };
    }
    var i = Nd(t, r, e, 0, null, !1, !1, "", Ga);
    return (
      (e._reactRootContainer = i),
      (e[it] = i.current),
      Sr(e.nodeType === 8 ? e.parentNode : e),
      Zt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = Bl(s);
      u.call(a);
    };
  }
  var s = ks(e, 0, !1, null, null, !1, !1, "", Ga);
  return (
    (e._reactRootContainer = s),
    (e[it] = s.current),
    Sr(e.nodeType === 8 ? e.parentNode : e),
    Zt(function () {
      uo(t, s, n, r);
    }),
    s
  );
}
function co(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = Bl(i);
        u.call(s);
      };
    }
    uo(t, i, e, l);
  } else i = Rh(n, t, e, l, r);
  return Bl(i);
}
tf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = er(t.pendingLanes);
        n !== 0 &&
          (Vu(t, n | 1), ke(t, Y()), !(R & 6) && (($n = Y() + 500), Lt()));
      }
      break;
    case 13:
      Zt(function () {
        var r = ut(e, 1);
        if (r !== null) {
          var l = me();
          Ke(r, e, 1, l);
        }
      }),
        _s(e, 1);
  }
};
Hu = function (e) {
  if (e.tag === 13) {
    var t = ut(e, 134217728);
    if (t !== null) {
      var n = me();
      Ke(t, e, 134217728, n);
    }
    _s(e, 134217728);
  }
};
nf = function (e) {
  if (e.tag === 13) {
    var t = xt(e),
      n = ut(e, t);
    if (n !== null) {
      var r = me();
      Ke(n, e, t, r);
    }
    _s(e, t);
  }
};
rf = function () {
  return M;
};
lf = function (e, t) {
  var n = M;
  try {
    return (M = e), t();
  } finally {
    M = n;
  }
};
Ai = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ti(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = eo(r);
            if (!l) throw Error(S(90));
            Lc(r), Ti(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ic(e, n);
      break;
    case "select":
      (t = n.value), t != null && gn(e, !!n.multiple, t, !1);
  }
};
Hc = ys;
Qc = Zt;
var Mh = { usingClientEntryPoint: !1, Events: [Ar, fn, eo, Wc, Vc, ys] },
  Zn = {
    findFiberByHostInstance: Wt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Lh = {
    bundleType: Zn.bundleType,
    version: Zn.version,
    rendererPackageName: Zn.rendererPackageName,
    rendererConfig: Zn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ct.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Yc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Zn.findFiberByHostInstance || $h,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ll = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ll.isDisabled && ll.supportsFiber)
    try {
      (ql = ll.inject(Lh)), (Ze = ll);
    } catch {}
}
ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mh;
ze.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ps(t)) throw Error(S(200));
  return Th(e, t, null, n);
};
ze.createRoot = function (e, t) {
  if (!Ps(e)) throw Error(S(299));
  var n = !1,
    r = "",
    l = Od;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = ks(e, 1, !1, null, null, n, !1, r, l)),
    (e[it] = t.current),
    Sr(e.nodeType === 8 ? e.parentNode : e),
    new Es(t)
  );
};
ze.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(S(188))
      : ((e = Object.keys(e).join(",")), Error(S(268, e)));
  return (e = Yc(t)), (e = e === null ? null : e.stateNode), e;
};
ze.flushSync = function (e) {
  return Zt(e);
};
ze.hydrate = function (e, t, n) {
  if (!ao(t)) throw Error(S(200));
  return co(null, e, t, !0, n);
};
ze.hydrateRoot = function (e, t, n) {
  if (!Ps(e)) throw Error(S(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Od;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Nd(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[it] = t.current),
    Sr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new so(t);
};
ze.render = function (e, t, n) {
  if (!ao(t)) throw Error(S(200));
  return co(null, e, t, !1, n);
};
ze.unmountComponentAtNode = function (e) {
  if (!ao(e)) throw Error(S(40));
  return e._reactRootContainer
    ? (Zt(function () {
        co(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[it] = null);
        });
      }),
      !0)
    : !1;
};
ze.unstable_batchedUpdates = ys;
ze.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ao(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return co(e, t, n, !1, r);
};
ze.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = ze);
})($p);
var Ya = yl;
(Ei.createRoot = Ya.createRoot), (Ei.hydrateRoot = Ya.hydrateRoot);
function Ve(e) {
  for (
    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw Error(
    "[Immer] minified error nr: " +
      e +
      (n.length
        ? " " +
          n
            .map(function (l) {
              return "'" + l + "'";
            })
            .join(",")
        : "") +
      ". Find the full error at: https://bit.ly/3cXEKWf"
  );
}
function Tt(e) {
  return !!e && !!e[B];
}
function at(e) {
  var t;
  return (
    !!e &&
    ((function (n) {
      if (!n || typeof n != "object") return !1;
      var r = Object.getPrototypeOf(n);
      if (r === null) return !0;
      var l = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
      return (
        l === Object ||
        (typeof l == "function" && Function.toString.call(l) === Hh)
      );
    })(e) ||
      Array.isArray(e) ||
      !!e[tc] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[tc]) ||
      xs(e) ||
      Cs(e))
  );
}
function Jt(e, t, n) {
  n === void 0 && (n = !1),
    Bn(e) === 0
      ? (n ? Object.keys : xn)(e).forEach(function (r) {
          (n && typeof r == "symbol") || t(r, e[r], e);
        })
      : e.forEach(function (r, l) {
          return t(l, r, e);
        });
}
function Bn(e) {
  var t = e[B];
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
    ? 1
    : xs(e)
    ? 2
    : Cs(e)
    ? 3
    : 0;
}
function Pn(e, t) {
  return Bn(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Dh(e, t) {
  return Bn(e) === 2 ? e.get(t) : e[t];
}
function zd(e, t, n) {
  var r = Bn(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function jd(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function xs(e) {
  return Wh && e instanceof Map;
}
function Cs(e) {
  return Vh && e instanceof Set;
}
function Ut(e) {
  return e.o || e.t;
}
function Ns(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = $d(e);
  delete t[B];
  for (var n = xn(t), r = 0; r < n.length; r++) {
    var l = n[r],
      o = t[l];
    o.writable === !1 && ((o.writable = !0), (o.configurable = !0)),
      (o.get || o.set) &&
        (t[l] = {
          configurable: !0,
          writable: !0,
          enumerable: o.enumerable,
          value: e[l],
        });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function Os(e, t) {
  return (
    t === void 0 && (t = !1),
    zs(e) ||
      Tt(e) ||
      !at(e) ||
      (Bn(e) > 1 && (e.set = e.add = e.clear = e.delete = Ih),
      Object.freeze(e),
      t &&
        Jt(
          e,
          function (n, r) {
            return Os(r, !0);
          },
          !0
        )),
    e
  );
}
function Ih() {
  Ve(2);
}
function zs(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function be(e) {
  var t = Su[e];
  return t || Ve(18, e), t;
}
function Ah(e, t) {
  Su[e] || (Su[e] = t);
}
function yu() {
  return zr;
}
function di(e, t) {
  t && (be("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function Wl(e) {
  gu(e), e.p.forEach(Fh), (e.p = null);
}
function gu(e) {
  e === zr && (zr = e.l);
}
function Xa(e) {
  return (zr = { p: [], l: zr, h: e, m: !0, _: 0 });
}
function Fh(e) {
  var t = e[B];
  t.i === 0 || t.i === 1 ? t.j() : (t.g = !0);
}
function pi(e, t) {
  t._ = t.p.length;
  var n = t.p[0],
    r = e !== void 0 && e !== n;
  return (
    t.h.O || be("ES5").S(t, e, r),
    r
      ? (n[B].P && (Wl(t), Ve(4)),
        at(e) && ((e = Vl(t, e)), t.l || Hl(t, e)),
        t.u && be("Patches").M(n[B].t, e, t.u, t.s))
      : (e = Vl(t, n, [])),
    Wl(t),
    t.u && t.v(t.u, t.s),
    e !== Td ? e : void 0
  );
}
function Vl(e, t, n) {
  if (zs(t)) return t;
  var r = t[B];
  if (!r)
    return (
      Jt(
        t,
        function (u, s) {
          return qa(e, r, t, u, s, n);
        },
        !0
      ),
      t
    );
  if (r.A !== e) return t;
  if (!r.P) return Hl(e, r.t, !0), r.t;
  if (!r.I) {
    (r.I = !0), r.A._--;
    var l = r.i === 4 || r.i === 5 ? (r.o = Ns(r.k)) : r.o,
      o = l,
      i = !1;
    r.i === 3 && ((o = new Set(l)), l.clear(), (i = !0)),
      Jt(o, function (u, s) {
        return qa(e, r, l, u, s, n, i);
      }),
      Hl(e, l, !1),
      n && e.u && be("Patches").N(r, n, e.u, e.s);
  }
  return r.o;
}
function qa(e, t, n, r, l, o, i) {
  if (Tt(l)) {
    var u = Vl(e, l, o && t && t.i !== 3 && !Pn(t.R, r) ? o.concat(r) : void 0);
    if ((zd(n, r, u), !Tt(u))) return;
    e.m = !1;
  } else i && n.add(l);
  if (at(l) && !zs(l)) {
    if (!e.h.D && e._ < 1) return;
    Vl(e, l), (t && t.A.l) || Hl(e, l);
  }
}
function Hl(e, t, n) {
  n === void 0 && (n = !1), !e.l && e.h.D && e.m && Os(t, n);
}
function mi(e, t) {
  var n = e[B];
  return (n ? Ut(n) : e)[t];
}
function Za(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, t);
      if (r) return r;
      n = Object.getPrototypeOf(n);
    }
}
function vt(e) {
  e.P || ((e.P = !0), e.l && vt(e.l));
}
function hi(e) {
  e.o || (e.o = Ns(e.t));
}
function wu(e, t, n) {
  var r = xs(t)
    ? be("MapSet").F(t, n)
    : Cs(t)
    ? be("MapSet").T(t, n)
    : e.O
    ? (function (l, o) {
        var i = Array.isArray(l),
          u = {
            i: i ? 1 : 0,
            A: o ? o.A : yu(),
            P: !1,
            I: !1,
            R: {},
            l: o,
            t: l,
            k: null,
            o: null,
            j: null,
            C: !1,
          },
          s = u,
          a = jr;
        i && ((s = [u]), (a = nr));
        var d = Proxy.revocable(s, a),
          h = d.revoke,
          m = d.proxy;
        return (u.k = m), (u.j = h), m;
      })(t, n)
    : be("ES5").J(t, n);
  return (n ? n.A : yu()).p.push(r), r;
}
function Uh(e) {
  return (
    Tt(e) || Ve(22, e),
    (function t(n) {
      if (!at(n)) return n;
      var r,
        l = n[B],
        o = Bn(n);
      if (l) {
        if (!l.P && (l.i < 4 || !be("ES5").K(l))) return l.t;
        (l.I = !0), (r = Ja(n, o)), (l.I = !1);
      } else r = Ja(n, o);
      return (
        Jt(r, function (i, u) {
          (l && Dh(l.t, i) === u) || zd(r, i, t(u));
        }),
        o === 3 ? new Set(r) : r
      );
    })(e)
  );
}
function Ja(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return Ns(e);
}
function Bh() {
  function e(o, i) {
    var u = l[o];
    return (
      u
        ? (u.enumerable = i)
        : (l[o] = u =
            {
              configurable: !0,
              enumerable: i,
              get: function () {
                var s = this[B];
                return jr.get(s, o);
              },
              set: function (s) {
                var a = this[B];
                jr.set(a, o, s);
              },
            }),
      u
    );
  }
  function t(o) {
    for (var i = o.length - 1; i >= 0; i--) {
      var u = o[i][B];
      if (!u.P)
        switch (u.i) {
          case 5:
            r(u) && vt(u);
            break;
          case 4:
            n(u) && vt(u);
        }
    }
  }
  function n(o) {
    for (var i = o.t, u = o.k, s = xn(u), a = s.length - 1; a >= 0; a--) {
      var d = s[a];
      if (d !== B) {
        var h = i[d];
        if (h === void 0 && !Pn(i, d)) return !0;
        var m = u[d],
          v = m && m[B];
        if (v ? v.t !== h : !jd(m, h)) return !0;
      }
    }
    var y = !!i[B];
    return s.length !== xn(i).length + (y ? 0 : 1);
  }
  function r(o) {
    var i = o.k;
    if (i.length !== o.t.length) return !0;
    var u = Object.getOwnPropertyDescriptor(i, i.length - 1);
    if (u && !u.get) return !0;
    for (var s = 0; s < i.length; s++) if (!i.hasOwnProperty(s)) return !0;
    return !1;
  }
  var l = {};
  Ah("ES5", {
    J: function (o, i) {
      var u = Array.isArray(o),
        s = (function (d, h) {
          if (d) {
            for (var m = Array(h.length), v = 0; v < h.length; v++)
              Object.defineProperty(m, "" + v, e(v, !0));
            return m;
          }
          var y = $d(h);
          delete y[B];
          for (var g = xn(y), C = 0; C < g.length; C++) {
            var f = g[C];
            y[f] = e(f, d || !!y[f].enumerable);
          }
          return Object.create(Object.getPrototypeOf(h), y);
        })(u, o),
        a = {
          i: u ? 5 : 4,
          A: i ? i.A : yu(),
          P: !1,
          I: !1,
          R: {},
          l: i,
          t: o,
          k: s,
          o: null,
          g: !1,
          C: !1,
        };
      return Object.defineProperty(s, B, { value: a, writable: !0 }), s;
    },
    S: function (o, i, u) {
      u
        ? Tt(i) && i[B].A === o && t(o.p)
        : (o.u &&
            (function s(a) {
              if (a && typeof a == "object") {
                var d = a[B];
                if (d) {
                  var h = d.t,
                    m = d.k,
                    v = d.R,
                    y = d.i;
                  if (y === 4)
                    Jt(m, function (p) {
                      p !== B &&
                        (h[p] !== void 0 || Pn(h, p)
                          ? v[p] || s(m[p])
                          : ((v[p] = !0), vt(d)));
                    }),
                      Jt(h, function (p) {
                        m[p] !== void 0 || Pn(m, p) || ((v[p] = !1), vt(d));
                      });
                  else if (y === 5) {
                    if ((r(d) && (vt(d), (v.length = !0)), m.length < h.length))
                      for (var g = m.length; g < h.length; g++) v[g] = !1;
                    else for (var C = h.length; C < m.length; C++) v[C] = !0;
                    for (
                      var f = Math.min(m.length, h.length), c = 0;
                      c < f;
                      c++
                    )
                      m.hasOwnProperty(c) || (v[c] = !0),
                        v[c] === void 0 && s(m[c]);
                  }
                }
              }
            })(o.p[0]),
          t(o.p));
    },
    K: function (o) {
      return o.i === 4 ? n(o) : r(o);
    },
  });
}
var ba,
  zr,
  js = typeof Symbol < "u" && typeof Symbol("x") == "symbol",
  Wh = typeof Map < "u",
  Vh = typeof Set < "u",
  ec = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u",
  Td = js
    ? Symbol.for("immer-nothing")
    : (((ba = {})["immer-nothing"] = !0), ba),
  tc = js ? Symbol.for("immer-draftable") : "__$immer_draftable",
  B = js ? Symbol.for("immer-state") : "__$immer_state",
  Hh = "" + Object.prototype.constructor,
  xn =
    typeof Reflect < "u" && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e)
          );
        }
      : Object.getOwnPropertyNames,
  $d =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        xn(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n);
        }),
        t
      );
    },
  Su = {},
  jr = {
    get: function (e, t) {
      if (t === B) return e;
      var n = Ut(e);
      if (!Pn(n, t))
        return (function (l, o, i) {
          var u,
            s = Za(o, i);
          return s
            ? "value" in s
              ? s.value
              : (u = s.get) === null || u === void 0
              ? void 0
              : u.call(l.k)
            : void 0;
        })(e, n, t);
      var r = n[t];
      return e.I || !at(r)
        ? r
        : r === mi(e.t, t)
        ? (hi(e), (e.o[t] = wu(e.A.h, r, e)))
        : r;
    },
    has: function (e, t) {
      return t in Ut(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(Ut(e));
    },
    set: function (e, t, n) {
      var r = Za(Ut(e), t);
      if (r != null && r.set) return r.set.call(e.k, n), !0;
      if (!e.P) {
        var l = mi(Ut(e), t),
          o = l == null ? void 0 : l[B];
        if (o && o.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
        if (jd(n, l) && (n !== void 0 || Pn(e.t, t))) return !0;
        hi(e), vt(e);
      }
      return (
        (e.o[t] === n && (n !== void 0 || t in e.o)) ||
          (Number.isNaN(n) && Number.isNaN(e.o[t])) ||
          ((e.o[t] = n), (e.R[t] = !0)),
        !0
      );
    },
    deleteProperty: function (e, t) {
      return (
        mi(e.t, t) !== void 0 || t in e.t
          ? ((e.R[t] = !1), hi(e), vt(e))
          : delete e.R[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = Ut(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.i !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty: function () {
      Ve(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      Ve(12);
    },
  },
  nr = {};
Jt(jr, function (e, t) {
  nr[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (nr.deleteProperty = function (e, t) {
    return nr.set.call(this, e, t, void 0);
  }),
  (nr.set = function (e, t, n) {
    return jr.set.call(this, e[0], t, n, e[0]);
  });
var Qh = (function () {
    function e(n) {
      var r = this;
      (this.O = ec),
        (this.D = !0),
        (this.produce = function (l, o, i) {
          if (typeof l == "function" && typeof o != "function") {
            var u = o;
            o = l;
            var s = r;
            return function (g) {
              var C = this;
              g === void 0 && (g = u);
              for (
                var f = arguments.length, c = Array(f > 1 ? f - 1 : 0), p = 1;
                p < f;
                p++
              )
                c[p - 1] = arguments[p];
              return s.produce(g, function (w) {
                var k;
                return (k = o).call.apply(k, [C, w].concat(c));
              });
            };
          }
          var a;
          if (
            (typeof o != "function" && Ve(6),
            i !== void 0 && typeof i != "function" && Ve(7),
            at(l))
          ) {
            var d = Xa(r),
              h = wu(r, l, void 0),
              m = !0;
            try {
              (a = o(h)), (m = !1);
            } finally {
              m ? Wl(d) : gu(d);
            }
            return typeof Promise < "u" && a instanceof Promise
              ? a.then(
                  function (g) {
                    return di(d, i), pi(g, d);
                  },
                  function (g) {
                    throw (Wl(d), g);
                  }
                )
              : (di(d, i), pi(a, d));
          }
          if (!l || typeof l != "object") {
            if (
              ((a = o(l)) === void 0 && (a = l),
              a === Td && (a = void 0),
              r.D && Os(a, !0),
              i)
            ) {
              var v = [],
                y = [];
              be("Patches").M(l, a, v, y), i(v, y);
            }
            return a;
          }
          Ve(21, l);
        }),
        (this.produceWithPatches = function (l, o) {
          if (typeof l == "function")
            return function (a) {
              for (
                var d = arguments.length, h = Array(d > 1 ? d - 1 : 0), m = 1;
                m < d;
                m++
              )
                h[m - 1] = arguments[m];
              return r.produceWithPatches(a, function (v) {
                return l.apply(void 0, [v].concat(h));
              });
            };
          var i,
            u,
            s = r.produce(l, o, function (a, d) {
              (i = a), (u = d);
            });
          return typeof Promise < "u" && s instanceof Promise
            ? s.then(function (a) {
                return [a, i, u];
              })
            : [s, i, u];
        }),
        typeof (n == null ? void 0 : n.useProxies) == "boolean" &&
          this.setUseProxies(n.useProxies),
        typeof (n == null ? void 0 : n.autoFreeze) == "boolean" &&
          this.setAutoFreeze(n.autoFreeze);
    }
    var t = e.prototype;
    return (
      (t.createDraft = function (n) {
        at(n) || Ve(8), Tt(n) && (n = Uh(n));
        var r = Xa(this),
          l = wu(this, n, void 0);
        return (l[B].C = !0), gu(r), l;
      }),
      (t.finishDraft = function (n, r) {
        var l = n && n[B],
          o = l.A;
        return di(o, r), pi(void 0, o);
      }),
      (t.setAutoFreeze = function (n) {
        this.D = n;
      }),
      (t.setUseProxies = function (n) {
        n && !ec && Ve(20), (this.O = n);
      }),
      (t.applyPatches = function (n, r) {
        var l;
        for (l = r.length - 1; l >= 0; l--) {
          var o = r[l];
          if (o.path.length === 0 && o.op === "replace") {
            n = o.value;
            break;
          }
        }
        l > -1 && (r = r.slice(l + 1));
        var i = be("Patches").$;
        return Tt(n)
          ? i(n, r)
          : this.produce(n, function (u) {
              return i(u, r);
            });
      }),
      e
    );
  })(),
  Ce = new Qh(),
  Rd = Ce.produce;
Ce.produceWithPatches.bind(Ce);
Ce.setAutoFreeze.bind(Ce);
Ce.setUseProxies.bind(Ce);
Ce.applyPatches.bind(Ce);
Ce.createDraft.bind(Ce);
Ce.finishDraft.bind(Ce);
function Tr(e) {
  return (
    (Tr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Tr(e)
  );
}
function Kh(e, t) {
  if (Tr(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Tr(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Gh(e) {
  var t = Kh(e, "string");
  return Tr(t) === "symbol" ? t : String(t);
}
function Yh(e, t, n) {
  return (
    (t = Gh(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function nc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function rc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? nc(Object(n), !0).forEach(function (r) {
          Yh(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : nc(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function ce(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var lc = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  vi = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  Ql = {
    INIT: "@@redux/INIT" + vi(),
    REPLACE: "@@redux/REPLACE" + vi(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + vi();
    },
  };
function Xh(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Md(e, t, n) {
  var r;
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(ce(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(ce(1));
    return n(Md)(e, t);
  }
  if (typeof e != "function") throw new Error(ce(2));
  var l = e,
    o = t,
    i = [],
    u = i,
    s = !1;
  function a() {
    u === i && (u = i.slice());
  }
  function d() {
    if (s) throw new Error(ce(3));
    return o;
  }
  function h(g) {
    if (typeof g != "function") throw new Error(ce(4));
    if (s) throw new Error(ce(5));
    var C = !0;
    return (
      a(),
      u.push(g),
      function () {
        if (C) {
          if (s) throw new Error(ce(6));
          (C = !1), a();
          var c = u.indexOf(g);
          u.splice(c, 1), (i = null);
        }
      }
    );
  }
  function m(g) {
    if (!Xh(g)) throw new Error(ce(7));
    if (typeof g.type > "u") throw new Error(ce(8));
    if (s) throw new Error(ce(9));
    try {
      (s = !0), (o = l(o, g));
    } finally {
      s = !1;
    }
    for (var C = (i = u), f = 0; f < C.length; f++) {
      var c = C[f];
      c();
    }
    return g;
  }
  function v(g) {
    if (typeof g != "function") throw new Error(ce(10));
    (l = g), m({ type: Ql.REPLACE });
  }
  function y() {
    var g,
      C = h;
    return (
      (g = {
        subscribe: function (c) {
          if (typeof c != "object" || c === null) throw new Error(ce(11));
          function p() {
            c.next && c.next(d());
          }
          p();
          var w = C(p);
          return { unsubscribe: w };
        },
      }),
      (g[lc] = function () {
        return this;
      }),
      g
    );
  }
  return (
    m({ type: Ql.INIT }),
    (r = { dispatch: m, subscribe: h, getState: d, replaceReducer: v }),
    (r[lc] = y),
    r
  );
}
function qh(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: Ql.INIT });
    if (typeof r > "u") throw new Error(ce(12));
    if (typeof n(void 0, { type: Ql.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(ce(13));
  });
}
function Zh(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var l = t[r];
    typeof e[l] == "function" && (n[l] = e[l]);
  }
  var o = Object.keys(n),
    i;
  try {
    qh(n);
  } catch (u) {
    i = u;
  }
  return function (s, a) {
    if ((s === void 0 && (s = {}), i)) throw i;
    for (var d = !1, h = {}, m = 0; m < o.length; m++) {
      var v = o[m],
        y = n[v],
        g = s[v],
        C = y(g, a);
      if (typeof C > "u") throw (a && a.type, new Error(ce(14)));
      (h[v] = C), (d = d || C !== g);
    }
    return (d = d || o.length !== Object.keys(s).length), d ? h : s;
  };
}
function Kl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, l) {
        return function () {
          return r(l.apply(void 0, arguments));
        };
      });
}
function Jh() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var l = r.apply(void 0, arguments),
        o = function () {
          throw new Error(ce(15));
        },
        i = {
          getState: l.getState,
          dispatch: function () {
            return o.apply(void 0, arguments);
          },
        },
        u = t.map(function (s) {
          return s(i);
        });
      return (
        (o = Kl.apply(void 0, u)(l.dispatch)),
        rc(rc({}, l), {}, { dispatch: o })
      );
    };
  };
}
function Ld(e) {
  var t = function (r) {
    var l = r.dispatch,
      o = r.getState;
    return function (i) {
      return function (u) {
        return typeof u == "function" ? u(l, o, e) : i(u);
      };
    };
  };
  return t;
}
var Dd = Ld();
Dd.withExtraArgument = Ld;
const oc = Dd;
var Id =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, l) {
                r.__proto__ = l;
              }) ||
            function (r, l) {
              for (var o in l)
                Object.prototype.hasOwnProperty.call(l, o) && (r[o] = l[o]);
            }),
          e(t, n)
        );
      };
      return function (t, n) {
        if (typeof n != "function" && n !== null)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        e(t, n);
        function r() {
          this.constructor = t;
        }
        t.prototype =
          n === null
            ? Object.create(n)
            : ((r.prototype = n.prototype), new r());
      };
    })(),
  bh =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (o[0] & 1) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        },
        r,
        l,
        o,
        i;
      return (
        (i = { next: u(0), throw: u(1), return: u(2) }),
        typeof Symbol == "function" &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function u(a) {
        return function (d) {
          return s([a, d]);
        };
      }
      function s(a) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; n; )
          try {
            if (
              ((r = 1),
              l &&
                (o =
                  a[0] & 2
                    ? l.return
                    : a[0]
                    ? l.throw || ((o = l.return) && o.call(l), 0)
                    : l.next) &&
                !(o = o.call(l, a[1])).done)
            )
              return o;
            switch (((l = 0), o && (a = [a[0] & 2, o.value]), a[0])) {
              case 0:
              case 1:
                o = a;
                break;
              case 4:
                return n.label++, { value: a[1], done: !1 };
              case 5:
                n.label++, (l = a[1]), (a = [0]);
                continue;
              case 7:
                (a = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((o = n.trys),
                  !(o = o.length > 0 && o[o.length - 1]) &&
                    (a[0] === 6 || a[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (a[0] === 3 && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                  n.label = a[1];
                  break;
                }
                if (a[0] === 6 && n.label < o[1]) {
                  (n.label = o[1]), (o = a);
                  break;
                }
                if (o && n.label < o[2]) {
                  (n.label = o[2]), n.ops.push(a);
                  break;
                }
                o[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            a = t.call(e, n);
          } catch (d) {
            (a = [6, d]), (l = 0);
          } finally {
            r = o = 0;
          }
        if (a[0] & 5) throw a[1];
        return { value: a[0] ? a[1] : void 0, done: !0 };
      }
    },
  Rn =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, l = e.length; n < r; n++, l++) e[l] = t[n];
      return e;
    },
  ev = Object.defineProperty,
  tv = Object.defineProperties,
  nv = Object.getOwnPropertyDescriptors,
  ic = Object.getOwnPropertySymbols,
  rv = Object.prototype.hasOwnProperty,
  lv = Object.prototype.propertyIsEnumerable,
  uc = function (e, t, n) {
    return t in e
      ? ev(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  Nt = function (e, t) {
    for (var n in t || (t = {})) rv.call(t, n) && uc(e, n, t[n]);
    if (ic)
      for (var r = 0, l = ic(t); r < l.length; r++) {
        var n = l[r];
        lv.call(t, n) && uc(e, n, t[n]);
      }
    return e;
  },
  yi = function (e, t) {
    return tv(e, nv(t));
  },
  ov = function (e, t, n) {
    return new Promise(function (r, l) {
      var o = function (s) {
          try {
            u(n.next(s));
          } catch (a) {
            l(a);
          }
        },
        i = function (s) {
          try {
            u(n.throw(s));
          } catch (a) {
            l(a);
          }
        },
        u = function (s) {
          return s.done ? r(s.value) : Promise.resolve(s.value).then(o, i);
        };
      u((n = n.apply(e, t)).next());
    });
  },
  iv =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? Kl
              : Kl.apply(null, arguments);
        };
function uv(e) {
  if (typeof e != "object" || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var n = t; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
var sv = (function (e) {
    Id(t, e);
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      var l = e.apply(this, n) || this;
      return Object.setPrototypeOf(l, t.prototype), l;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return e.prototype.concat.apply(this, n);
      }),
      (t.prototype.prepend = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, Rn([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, Rn([void 0], n.concat(this))))();
      }),
      t
    );
  })(Array),
  av = (function (e) {
    Id(t, e);
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      var l = e.apply(this, n) || this;
      return Object.setPrototypeOf(l, t.prototype), l;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return e.prototype.concat.apply(this, n);
      }),
      (t.prototype.prepend = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, Rn([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, Rn([void 0], n.concat(this))))();
      }),
      t
    );
  })(Array);
function ku(e) {
  return at(e) ? Rd(e, function () {}) : e;
}
function cv(e) {
  return typeof e == "boolean";
}
function fv() {
  return function (t) {
    return dv(t);
  };
}
function dv(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    n = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck;
  var r = new sv();
  return (
    n && (cv(n) ? r.push(oc) : r.push(oc.withExtraArgument(n.extraArgument))), r
  );
}
var pv = !0;
function mv(e) {
  var t = fv(),
    n = e || {},
    r = n.reducer,
    l = r === void 0 ? void 0 : r,
    o = n.middleware,
    i = o === void 0 ? t() : o,
    u = n.devTools,
    s = u === void 0 ? !0 : u,
    a = n.preloadedState,
    d = a === void 0 ? void 0 : a,
    h = n.enhancers,
    m = h === void 0 ? void 0 : h,
    v;
  if (typeof l == "function") v = l;
  else if (uv(l)) v = Zh(l);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    );
  var y = i;
  typeof y == "function" && (y = y(t));
  var g = Jh.apply(void 0, y),
    C = Kl;
  s && (C = iv(Nt({ trace: !pv }, typeof s == "object" && s)));
  var f = new av(g),
    c = f;
  Array.isArray(m) ? (c = Rn([g], m)) : typeof m == "function" && (c = m(f));
  var p = C.apply(void 0, c);
  return Md(v, d, p);
}
function Ot(e, t) {
  function n() {
    for (var r = [], l = 0; l < arguments.length; l++) r[l] = arguments[l];
    if (t) {
      var o = t.apply(void 0, r);
      if (!o) throw new Error("prepareAction did not return an object");
      return Nt(
        Nt({ type: e, payload: o.payload }, "meta" in o && { meta: o.meta }),
        "error" in o && { error: o.error }
      );
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = function () {
      return "" + e;
    }),
    (n.type = e),
    (n.match = function (r) {
      return r.type === e;
    }),
    n
  );
}
function Ad(e) {
  var t = {},
    n = [],
    r,
    l = {
      addCase: function (o, i) {
        var u = typeof o == "string" ? o : o.type;
        if (u in t)
          throw new Error(
            "addCase cannot be called with two reducers for the same action type"
          );
        return (t[u] = i), l;
      },
      addMatcher: function (o, i) {
        return n.push({ matcher: o, reducer: i }), l;
      },
      addDefaultCase: function (o) {
        return (r = o), l;
      },
    };
  return e(l), [t, n, r];
}
function hv(e) {
  return typeof e == "function";
}
function vv(e, t, n, r) {
  n === void 0 && (n = []);
  var l = typeof t == "function" ? Ad(t) : [t, n, r],
    o = l[0],
    i = l[1],
    u = l[2],
    s;
  if (hv(e))
    s = function () {
      return ku(e());
    };
  else {
    var a = ku(e);
    s = function () {
      return a;
    };
  }
  function d(h, m) {
    h === void 0 && (h = s());
    var v = Rn(
      [o[m.type]],
      i
        .filter(function (y) {
          var g = y.matcher;
          return g(m);
        })
        .map(function (y) {
          var g = y.reducer;
          return g;
        })
    );
    return (
      v.filter(function (y) {
        return !!y;
      }).length === 0 && (v = [u]),
      v.reduce(function (y, g) {
        if (g)
          if (Tt(y)) {
            var C = y,
              f = g(C, m);
            return f === void 0 ? y : f;
          } else {
            if (at(y))
              return Rd(y, function (c) {
                return g(c, m);
              });
            var f = g(y, m);
            if (f === void 0) {
              if (y === null) return y;
              throw Error(
                "A case reducer on a non-draftable value must not return undefined"
              );
            }
            return f;
          }
        return y;
      }, h)
    );
  }
  return (d.getInitialState = s), d;
}
function yv(e, t) {
  return e + "/" + t;
}
function Fd(e) {
  var t = e.name;
  if (!t) throw new Error("`name` is a required option for createSlice");
  typeof process < "u";
  var n =
      typeof e.initialState == "function" ? e.initialState : ku(e.initialState),
    r = e.reducers || {},
    l = Object.keys(r),
    o = {},
    i = {},
    u = {};
  l.forEach(function (d) {
    var h = r[d],
      m = yv(t, d),
      v,
      y;
    "reducer" in h ? ((v = h.reducer), (y = h.prepare)) : (v = h),
      (o[d] = v),
      (i[m] = v),
      (u[d] = y ? Ot(m, y) : Ot(m));
  });
  function s() {
    var d =
        typeof e.extraReducers == "function"
          ? Ad(e.extraReducers)
          : [e.extraReducers],
      h = d[0],
      m = h === void 0 ? {} : h,
      v = d[1],
      y = v === void 0 ? [] : v,
      g = d[2],
      C = g === void 0 ? void 0 : g,
      f = Nt(Nt({}, m), i);
    return vv(n, function (c) {
      for (var p in f) c.addCase(p, f[p]);
      for (var w = 0, k = y; w < k.length; w++) {
        var P = k[w];
        c.addMatcher(P.matcher, P.reducer);
      }
      C && c.addDefaultCase(C);
    });
  }
  var a;
  return {
    name: t,
    reducer: function (d, h) {
      return a || (a = s()), a(d, h);
    },
    actions: u,
    caseReducers: o,
    getInitialState: function () {
      return a || (a = s()), a.getInitialState();
    },
  };
}
var gv = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  wv = function (e) {
    e === void 0 && (e = 21);
    for (var t = "", n = e; n--; ) t += gv[(Math.random() * 64) | 0];
    return t;
  },
  Sv = ["name", "message", "stack", "code"],
  gi = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  sc = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  kv = function (e) {
    if (typeof e == "object" && e !== null) {
      for (var t = {}, n = 0, r = Sv; n < r.length; n++) {
        var l = r[n];
        typeof e[l] == "string" && (t[l] = e[l]);
      }
      return t;
    }
    return { message: String(e) };
  };
(function () {
  function e(t, n, r) {
    var l = Ot(t + "/fulfilled", function (a, d, h, m) {
        return {
          payload: a,
          meta: yi(Nt({}, m || {}), {
            arg: h,
            requestId: d,
            requestStatus: "fulfilled",
          }),
        };
      }),
      o = Ot(t + "/pending", function (a, d, h) {
        return {
          payload: void 0,
          meta: yi(Nt({}, h || {}), {
            arg: d,
            requestId: a,
            requestStatus: "pending",
          }),
        };
      }),
      i = Ot(t + "/rejected", function (a, d, h, m, v) {
        return {
          payload: m,
          error: ((r && r.serializeError) || kv)(a || "Rejected"),
          meta: yi(Nt({}, v || {}), {
            arg: h,
            requestId: d,
            rejectedWithValue: !!m,
            requestStatus: "rejected",
            aborted: (a == null ? void 0 : a.name) === "AbortError",
            condition: (a == null ? void 0 : a.name) === "ConditionError",
          }),
        };
      }),
      u =
        typeof AbortController < "u"
          ? AbortController
          : (function () {
              function a() {
                this.signal = {
                  aborted: !1,
                  addEventListener: function () {},
                  dispatchEvent: function () {
                    return !1;
                  },
                  onabort: function () {},
                  removeEventListener: function () {},
                  reason: void 0,
                  throwIfAborted: function () {},
                };
              }
              return (a.prototype.abort = function () {}), a;
            })();
    function s(a) {
      return function (d, h, m) {
        var v = r != null && r.idGenerator ? r.idGenerator(a) : wv(),
          y = new u(),
          g;
        function C(c) {
          (g = c), y.abort();
        }
        var f = (function () {
          return ov(this, null, function () {
            var c, p, w, k, P, x, N;
            return bh(this, function (I) {
              switch (I.label) {
                case 0:
                  return (
                    I.trys.push([0, 4, , 5]),
                    (k =
                      (c = r == null ? void 0 : r.condition) == null
                        ? void 0
                        : c.call(r, a, { getState: h, extra: m })),
                    Ev(k) ? [4, k] : [3, 2]
                  );
                case 1:
                  (k = I.sent()), (I.label = 2);
                case 2:
                  if (k === !1 || y.signal.aborted)
                    throw {
                      name: "ConditionError",
                      message:
                        "Aborted due to condition callback returning false.",
                    };
                  return (
                    (P = new Promise(function (z, le) {
                      return y.signal.addEventListener("abort", function () {
                        return le({
                          name: "AbortError",
                          message: g || "Aborted",
                        });
                      });
                    })),
                    d(
                      o(
                        v,
                        a,
                        (p = r == null ? void 0 : r.getPendingMeta) == null
                          ? void 0
                          : p.call(
                              r,
                              { requestId: v, arg: a },
                              { getState: h, extra: m }
                            )
                      )
                    ),
                    [
                      4,
                      Promise.race([
                        P,
                        Promise.resolve(
                          n(a, {
                            dispatch: d,
                            getState: h,
                            extra: m,
                            requestId: v,
                            signal: y.signal,
                            abort: C,
                            rejectWithValue: function (z, le) {
                              return new gi(z, le);
                            },
                            fulfillWithValue: function (z, le) {
                              return new sc(z, le);
                            },
                          })
                        ).then(function (z) {
                          if (z instanceof gi) throw z;
                          return z instanceof sc
                            ? l(z.payload, v, a, z.meta)
                            : l(z, v, a);
                        }),
                      ]),
                    ]
                  );
                case 3:
                  return (w = I.sent()), [3, 5];
                case 4:
                  return (
                    (x = I.sent()),
                    (w =
                      x instanceof gi
                        ? i(null, v, a, x.payload, x.meta)
                        : i(x, v, a)),
                    [3, 5]
                  );
                case 5:
                  return (
                    (N =
                      r &&
                      !r.dispatchConditionRejection &&
                      i.match(w) &&
                      w.meta.condition),
                    N || d(w),
                    [2, w]
                  );
              }
            });
          });
        })();
        return Object.assign(f, {
          abort: C,
          requestId: v,
          arg: a,
          unwrap: function () {
            return f.then(_v);
          },
        });
      };
    }
    return Object.assign(s, {
      pending: o,
      rejected: i,
      fulfilled: l,
      typePrefix: t,
    });
  }
  return (
    (e.withTypes = function () {
      return e;
    }),
    e
  );
})();
function _v(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function Ev(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Ts = "listenerMiddleware";
Ot(Ts + "/add");
Ot(Ts + "/removeAll");
Ot(Ts + "/remove");
var ac;
typeof queueMicrotask == "function" &&
  queueMicrotask.bind(
    typeof window < "u" ? window : typeof global < "u" ? global : globalThis
  );
Bh();
const Pv = { value: 0 },
  Ud = Fd({
    name: "money",
    initialState: Pv,
    reducers: {
      changeByAmount: (e, t) => {
        e.value += t.payload;
      },
      setMoney: (e, t) => {
        e.value = t.payload;
      },
      resetMoney: (e) => {
        e.value = 0;
      },
    },
  }),
  { changeByAmount: wi, setMoney: cc, resetMoney: xv } = Ud.actions,
  Cv = Ud.reducer,
  ln = {
    id: 1,
    make: function (e, t, n, r) {
      return {
        name: e,
        desc: t,
        basePrice: n,
        moneyGain: r,
        id: this.id++,
        quantity: 0,
        isUnlocked: !1,
      };
    },
  };
function fc(e) {
  return e.reduce((t, n) => t + n.moneyGain * n.quantity, 0);
}
function Nv(e) {
  return Math.ceil(e.basePrice * 1.1 ** e.quantity);
}
function Ov(e) {
  return e.basePrice * 0.5;
}
const Bd = [
    ln.make("Finger", "A finger to click for you.", 10, 1),
    ln.make("Palm", "Many fingers at the same time.", 200, 5),
    ln.make("Fist", "A stronger hand by punching.", 3e3, 25),
    ln.make("Chest", "To press with the whole body.", 5e4, 200),
    ln.make("Hammer", "When the need for tools start to rise.", 1e6, 1e3),
    ln.make("Mass", "A heavier tool for more strenght.", 15e6, 5e3),
  ],
  zv = { buildings: Bd },
  Wd = Fd({
    name: "buildings",
    initialState: zv,
    reducers: {
      buyBuilding: (e, t) => {
        const n = e.buildings.findIndex((r) => r.id === t.payload.id);
        n !== void 0 && e.buildings[n].quantity++;
      },
      unlockBuilding: (e, t) => {
        const n = e.buildings.findIndex((r) => r.id === t.payload.id);
        n !== void 0 && (e.buildings[n].isUnlocked = !0);
      },
      sellBuilding: (e, t) => {
        const n = e.buildings.findIndex((r) => r.id === t.payload.id);
        n !== void 0 && e.buildings[n].quantity--;
      },
      setBuildings: (e, t) => {
        e.buildings = t.payload;
      },
      resetBuildings: (e) => {
        e.buildings = Bd;
      },
    },
  }),
  {
    buyBuilding: jv,
    sellBuilding: Hy,
    setBuildings: dc,
    resetBuildings: Tv,
    unlockBuilding: $v,
  } = Wd.actions,
  Rv = Wd.reducer,
  Mv = mv({ reducer: { money: Cv, buildings: Rv } });
var _u = {},
  Lv = {
    get exports() {
      return _u;
    },
    set exports(e) {
      _u = e;
    },
  },
  Vd = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mn = X;
function Dv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Iv = typeof Object.is == "function" ? Object.is : Dv,
  Av = Mn.useState,
  Fv = Mn.useEffect,
  Uv = Mn.useLayoutEffect,
  Bv = Mn.useDebugValue;
function Wv(e, t) {
  var n = t(),
    r = Av({ inst: { value: n, getSnapshot: t } }),
    l = r[0].inst,
    o = r[1];
  return (
    Uv(
      function () {
        (l.value = n), (l.getSnapshot = t), Si(l) && o({ inst: l });
      },
      [e, n, t]
    ),
    Fv(
      function () {
        return (
          Si(l) && o({ inst: l }),
          e(function () {
            Si(l) && o({ inst: l });
          })
        );
      },
      [e]
    ),
    Bv(n),
    n
  );
}
function Si(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Iv(e, n);
  } catch {
    return !0;
  }
}
function Vv(e, t) {
  return t();
}
var Hv =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? Vv
    : Wv;
Vd.useSyncExternalStore =
  Mn.useSyncExternalStore !== void 0 ? Mn.useSyncExternalStore : Hv;
(function (e) {
  e.exports = Vd;
})(Lv);
var Eu = {},
  Qv = {
    get exports() {
      return Eu;
    },
    set exports(e) {
      Eu = e;
    },
  },
  Hd = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fo = X,
  Kv = _u;
function Gv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Yv = typeof Object.is == "function" ? Object.is : Gv,
  Xv = Kv.useSyncExternalStore,
  qv = fo.useRef,
  Zv = fo.useEffect,
  Jv = fo.useMemo,
  bv = fo.useDebugValue;
Hd.useSyncExternalStoreWithSelector = function (e, t, n, r, l) {
  var o = qv(null);
  if (o.current === null) {
    var i = { hasValue: !1, value: null };
    o.current = i;
  } else i = o.current;
  o = Jv(
    function () {
      function s(v) {
        if (!a) {
          if (((a = !0), (d = v), (v = r(v)), l !== void 0 && i.hasValue)) {
            var y = i.value;
            if (l(y, v)) return (h = y);
          }
          return (h = v);
        }
        if (((y = h), Yv(d, v))) return y;
        var g = r(v);
        return l !== void 0 && l(y, g) ? y : ((d = v), (h = g));
      }
      var a = !1,
        d,
        h,
        m = n === void 0 ? null : n;
      return [
        function () {
          return s(t());
        },
        m === null
          ? void 0
          : function () {
              return s(m());
            },
      ];
    },
    [t, n, r, l]
  );
  var u = Xv(e, o[0], o[1]);
  return (
    Zv(
      function () {
        (i.hasValue = !0), (i.value = u);
      },
      [u]
    ),
    bv(u),
    u
  );
};
(function (e) {
  e.exports = Hd;
})(Qv);
function ey(e) {
  e();
}
let Qd = ey;
const ty = (e) => (Qd = e),
  ny = () => Qd,
  $t = X.createContext(null);
function Kd() {
  return X.useContext($t);
}
const ry = () => {
  throw new Error("uSES not initialized!");
};
let Gd = ry;
const ly = (e) => {
    Gd = e;
  },
  oy = (e, t) => e === t;
function iy(e = $t) {
  const t = e === $t ? Kd : () => X.useContext(e);
  return function (r, l = oy) {
    const { store: o, subscription: i, getServerState: u } = t(),
      s = Gd(i.addNestedSub, o.getState, u || o.getState, r, l);
    return X.useDebugValue(s), s;
  };
}
const Ln = iy();
var Pu = {},
  uy = {
    get exports() {
      return Pu;
    },
    set exports(e) {
      Pu = e;
    },
  },
  L = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var re = typeof Symbol == "function" && Symbol.for,
  $s = re ? Symbol.for("react.element") : 60103,
  Rs = re ? Symbol.for("react.portal") : 60106,
  po = re ? Symbol.for("react.fragment") : 60107,
  mo = re ? Symbol.for("react.strict_mode") : 60108,
  ho = re ? Symbol.for("react.profiler") : 60114,
  vo = re ? Symbol.for("react.provider") : 60109,
  yo = re ? Symbol.for("react.context") : 60110,
  Ms = re ? Symbol.for("react.async_mode") : 60111,
  go = re ? Symbol.for("react.concurrent_mode") : 60111,
  wo = re ? Symbol.for("react.forward_ref") : 60112,
  So = re ? Symbol.for("react.suspense") : 60113,
  sy = re ? Symbol.for("react.suspense_list") : 60120,
  ko = re ? Symbol.for("react.memo") : 60115,
  _o = re ? Symbol.for("react.lazy") : 60116,
  ay = re ? Symbol.for("react.block") : 60121,
  cy = re ? Symbol.for("react.fundamental") : 60117,
  fy = re ? Symbol.for("react.responder") : 60118,
  dy = re ? Symbol.for("react.scope") : 60119;
function Te(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case $s:
        switch (((e = e.type), e)) {
          case Ms:
          case go:
          case po:
          case ho:
          case mo:
          case So:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case yo:
              case wo:
              case _o:
              case ko:
              case vo:
                return e;
              default:
                return t;
            }
        }
      case Rs:
        return t;
    }
  }
}
function Yd(e) {
  return Te(e) === go;
}
L.AsyncMode = Ms;
L.ConcurrentMode = go;
L.ContextConsumer = yo;
L.ContextProvider = vo;
L.Element = $s;
L.ForwardRef = wo;
L.Fragment = po;
L.Lazy = _o;
L.Memo = ko;
L.Portal = Rs;
L.Profiler = ho;
L.StrictMode = mo;
L.Suspense = So;
L.isAsyncMode = function (e) {
  return Yd(e) || Te(e) === Ms;
};
L.isConcurrentMode = Yd;
L.isContextConsumer = function (e) {
  return Te(e) === yo;
};
L.isContextProvider = function (e) {
  return Te(e) === vo;
};
L.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === $s;
};
L.isForwardRef = function (e) {
  return Te(e) === wo;
};
L.isFragment = function (e) {
  return Te(e) === po;
};
L.isLazy = function (e) {
  return Te(e) === _o;
};
L.isMemo = function (e) {
  return Te(e) === ko;
};
L.isPortal = function (e) {
  return Te(e) === Rs;
};
L.isProfiler = function (e) {
  return Te(e) === ho;
};
L.isStrictMode = function (e) {
  return Te(e) === mo;
};
L.isSuspense = function (e) {
  return Te(e) === So;
};
L.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === po ||
    e === go ||
    e === ho ||
    e === mo ||
    e === So ||
    e === sy ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === _o ||
        e.$$typeof === ko ||
        e.$$typeof === vo ||
        e.$$typeof === yo ||
        e.$$typeof === wo ||
        e.$$typeof === cy ||
        e.$$typeof === fy ||
        e.$$typeof === dy ||
        e.$$typeof === ay))
  );
};
L.typeOf = Te;
(function (e) {
  e.exports = L;
})(uy);
var Xd = Pu,
  py = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  my = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  qd = {};
qd[Xd.ForwardRef] = py;
qd[Xd.Memo] = my;
var pc = {},
  hy = {
    get exports() {
      return pc;
    },
    set exports(e) {
      pc = e;
    },
  },
  D = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ls = Symbol.for("react.element"),
  Ds = Symbol.for("react.portal"),
  Eo = Symbol.for("react.fragment"),
  Po = Symbol.for("react.strict_mode"),
  xo = Symbol.for("react.profiler"),
  Co = Symbol.for("react.provider"),
  No = Symbol.for("react.context"),
  vy = Symbol.for("react.server_context"),
  Oo = Symbol.for("react.forward_ref"),
  zo = Symbol.for("react.suspense"),
  jo = Symbol.for("react.suspense_list"),
  To = Symbol.for("react.memo"),
  $o = Symbol.for("react.lazy"),
  yy = Symbol.for("react.offscreen"),
  Zd;
Zd = Symbol.for("react.module.reference");
function Ae(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ls:
        switch (((e = e.type), e)) {
          case Eo:
          case xo:
          case Po:
          case zo:
          case jo:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case vy:
              case No:
              case Oo:
              case $o:
              case To:
              case Co:
                return e;
              default:
                return t;
            }
        }
      case Ds:
        return t;
    }
  }
}
D.ContextConsumer = No;
D.ContextProvider = Co;
D.Element = Ls;
D.ForwardRef = Oo;
D.Fragment = Eo;
D.Lazy = $o;
D.Memo = To;
D.Portal = Ds;
D.Profiler = xo;
D.StrictMode = Po;
D.Suspense = zo;
D.SuspenseList = jo;
D.isAsyncMode = function () {
  return !1;
};
D.isConcurrentMode = function () {
  return !1;
};
D.isContextConsumer = function (e) {
  return Ae(e) === No;
};
D.isContextProvider = function (e) {
  return Ae(e) === Co;
};
D.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ls;
};
D.isForwardRef = function (e) {
  return Ae(e) === Oo;
};
D.isFragment = function (e) {
  return Ae(e) === Eo;
};
D.isLazy = function (e) {
  return Ae(e) === $o;
};
D.isMemo = function (e) {
  return Ae(e) === To;
};
D.isPortal = function (e) {
  return Ae(e) === Ds;
};
D.isProfiler = function (e) {
  return Ae(e) === xo;
};
D.isStrictMode = function (e) {
  return Ae(e) === Po;
};
D.isSuspense = function (e) {
  return Ae(e) === zo;
};
D.isSuspenseList = function (e) {
  return Ae(e) === jo;
};
D.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Eo ||
    e === xo ||
    e === Po ||
    e === zo ||
    e === jo ||
    e === yy ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === $o ||
        e.$$typeof === To ||
        e.$$typeof === Co ||
        e.$$typeof === No ||
        e.$$typeof === Oo ||
        e.$$typeof === Zd ||
        e.getModuleId !== void 0))
  );
};
D.typeOf = Ae;
(function (e) {
  e.exports = D;
})(hy);
function gy() {
  const e = ny();
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      let r = [],
        l = t;
      for (; l; ) r.push(l), (l = l.next);
      return r;
    },
    subscribe(r) {
      let l = !0,
        o = (n = { callback: r, next: null, prev: n });
      return (
        o.prev ? (o.prev.next = o) : (t = o),
        function () {
          !l ||
            t === null ||
            ((l = !1),
            o.next ? (o.next.prev = o.prev) : (n = o.prev),
            o.prev ? (o.prev.next = o.next) : (t = o.next));
        }
      );
    },
  };
}
const mc = { notify() {}, get: () => [] };
function wy(e, t) {
  let n,
    r = mc;
  function l(h) {
    return s(), r.subscribe(h);
  }
  function o() {
    r.notify();
  }
  function i() {
    d.onStateChange && d.onStateChange();
  }
  function u() {
    return !!n;
  }
  function s() {
    n || ((n = t ? t.addNestedSub(i) : e.subscribe(i)), (r = gy()));
  }
  function a() {
    n && (n(), (n = void 0), r.clear(), (r = mc));
  }
  const d = {
    addNestedSub: l,
    notifyNestedSubs: o,
    handleChangeWrapper: i,
    isSubscribed: u,
    trySubscribe: s,
    tryUnsubscribe: a,
    getListeners: () => r,
  };
  return d;
}
const Sy =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  ky = Sy ? X.useLayoutEffect : X.useEffect;
function _y({ store: e, context: t, children: n, serverState: r }) {
  const l = X.useMemo(() => {
      const u = wy(e);
      return {
        store: e,
        subscription: u,
        getServerState: r ? () => r : void 0,
      };
    }, [e, r]),
    o = X.useMemo(() => e.getState(), [e]);
  ky(() => {
    const { subscription: u } = l;
    return (
      (u.onStateChange = u.notifyNestedSubs),
      u.trySubscribe(),
      o !== e.getState() && u.notifyNestedSubs(),
      () => {
        u.tryUnsubscribe(), (u.onStateChange = void 0);
      }
    );
  }, [l, o]);
  const i = t || $t;
  return xp.createElement(i.Provider, { value: l }, n);
}
function Jd(e = $t) {
  const t = e === $t ? Kd : () => X.useContext(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const Ey = Jd();
function Py(e = $t) {
  const t = e === $t ? Ey : Jd(e);
  return function () {
    return t().dispatch;
  };
}
const bd = Py();
ly(Eu.useSyncExternalStoreWithSelector);
ty(yl.unstable_batchedUpdates);
var ep = Symbol.for("immer-nothing"),
  hc = Symbol.for("immer-draftable"),
  Ne = Symbol.for("immer-state");
function He(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Dn = Object.getPrototypeOf;
function In(e) {
  return !!e && !!e[Ne];
}
function bt(e) {
  var t;
  return e
    ? tp(e) ||
        Array.isArray(e) ||
        !!e[hc] ||
        !!((t = e.constructor) != null && t[hc]) ||
        Mo(e) ||
        Lo(e)
    : !1;
}
var xy = Object.prototype.constructor.toString();
function tp(e) {
  if (!e || typeof e != "object") return !1;
  const t = Dn(e);
  if (t === null) return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object
    ? !0
    : typeof n == "function" && Function.toString.call(n) === xy;
}
function $r(e, t) {
  Ro(e) === 0
    ? Object.entries(e).forEach(([n, r]) => {
        t(n, r, e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function Ro(e) {
  const t = e[Ne];
  return t ? t.type_ : Array.isArray(e) ? 1 : Mo(e) ? 2 : Lo(e) ? 3 : 0;
}
function xu(e, t) {
  return Ro(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function np(e, t, n) {
  const r = Ro(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function Cy(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Mo(e) {
  return e instanceof Map;
}
function Lo(e) {
  return e instanceof Set;
}
function Bt(e) {
  return e.copy_ || e.base_;
}
function Cu(e, t) {
  if (Mo(e)) return new Map(e);
  if (Lo(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  if (!t && tp(e))
    return Dn(e) ? { ...e } : Object.assign(Object.create(null), e);
  const n = Object.getOwnPropertyDescriptors(e);
  delete n[Ne];
  let r = Reflect.ownKeys(n);
  for (let l = 0; l < r.length; l++) {
    const o = r[l],
      i = n[o];
    i.writable === !1 && ((i.writable = !0), (i.configurable = !0)),
      (i.get || i.set) &&
        (n[o] = {
          configurable: !0,
          writable: !0,
          enumerable: i.enumerable,
          value: e[o],
        });
  }
  return Object.create(Dn(e), n);
}
function Is(e, t = !1) {
  return (
    Do(e) ||
      In(e) ||
      !bt(e) ||
      (Ro(e) > 1 && (e.set = e.add = e.clear = e.delete = Ny),
      Object.freeze(e),
      t && $r(e, (n, r) => Is(r, !0))),
    e
  );
}
function Ny() {
  He(2);
}
function Do(e) {
  return Object.isFrozen(e);
}
var Oy = {};
function en(e) {
  const t = Oy[e];
  return t || He(0, e), t;
}
var Rr;
function rp() {
  return Rr;
}
function zy(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function vc(e, t) {
  t &&
    (en("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function Nu(e) {
  Ou(e), e.drafts_.forEach(jy), (e.drafts_ = null);
}
function Ou(e) {
  e === Rr && (Rr = e.parent_);
}
function yc(e) {
  return (Rr = zy(Rr, e));
}
function jy(e) {
  const t = e[Ne];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function gc(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[Ne].modified_ && (Nu(t), He(4)),
        bt(e) && ((e = Gl(t, e)), t.parent_ || Yl(t, e)),
        t.patches_ &&
          en("Patches").generateReplacementPatches_(
            n[Ne].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = Gl(t, n, [])),
    Nu(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== ep ? e : void 0
  );
}
function Gl(e, t, n) {
  if (Do(t)) return t;
  const r = t[Ne];
  if (!r) return $r(t, (l, o) => wc(e, r, t, l, o, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return Yl(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const l = r.copy_;
    let o = l,
      i = !1;
    r.type_ === 3 && ((o = new Set(l)), l.clear(), (i = !0)),
      $r(o, (u, s) => wc(e, r, l, u, s, n, i)),
      Yl(e, l, !1),
      n &&
        e.patches_ &&
        en("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function wc(e, t, n, r, l, o, i) {
  if (In(l)) {
    const u =
        o && t && t.type_ !== 3 && !xu(t.assigned_, r) ? o.concat(r) : void 0,
      s = Gl(e, l, u);
    if ((np(n, r, s), In(s))) e.canAutoFreeze_ = !1;
    else return;
  } else i && n.add(l);
  if (bt(l) && !Do(l)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    Gl(e, l), (!t || !t.scope_.parent_) && Yl(e, l);
  }
}
function Yl(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Is(t, n);
}
function Ty(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : rp(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let l = r,
    o = As;
  n && ((l = [r]), (o = Mr));
  const { revoke: i, proxy: u } = Proxy.revocable(l, o);
  return (r.draft_ = u), (r.revoke_ = i), u;
}
var As = {
    get(e, t) {
      if (t === Ne) return e;
      const n = Bt(e);
      if (!xu(n, t)) return $y(e, n, t);
      const r = n[t];
      return e.finalized_ || !bt(r)
        ? r
        : r === ki(e.base_, t)
        ? (_i(e), (e.copy_[t] = ju(r, e)))
        : r;
    },
    has(e, t) {
      return t in Bt(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(Bt(e));
    },
    set(e, t, n) {
      const r = lp(Bt(e), t);
      if (r != null && r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        const l = ki(Bt(e), t),
          o = l == null ? void 0 : l[Ne];
        if (o && o.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if (Cy(n, l) && (n !== void 0 || xu(e.base_, t))) return !0;
        _i(e), zu(e);
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        ki(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), _i(e), zu(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = Bt(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty() {
      He(11);
    },
    getPrototypeOf(e) {
      return Dn(e.base_);
    },
    setPrototypeOf() {
      He(12);
    },
  },
  Mr = {};
$r(As, (e, t) => {
  Mr[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
Mr.deleteProperty = function (e, t) {
  return Mr.set.call(this, e, t, void 0);
};
Mr.set = function (e, t, n) {
  return As.set.call(this, e[0], t, n, e[0]);
};
function ki(e, t) {
  const n = e[Ne];
  return (n ? Bt(n) : e)[t];
}
function $y(e, t, n) {
  var l;
  const r = lp(t, n);
  return r
    ? "value" in r
      ? r.value
      : (l = r.get) == null
      ? void 0
      : l.call(e.draft_)
    : void 0;
}
function lp(e, t) {
  if (!(t in e)) return;
  let n = Dn(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = Dn(n);
  }
}
function zu(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && zu(e.parent_));
}
function _i(e) {
  e.copy_ || (e.copy_ = Cu(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var Ry = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == "function" && typeof n != "function") {
          const o = n;
          n = t;
          const i = this;
          return function (s = o, ...a) {
            return i.produce(s, (d) => n.call(this, d, ...a));
          };
        }
        typeof n != "function" && He(6),
          r !== void 0 && typeof r != "function" && He(7);
        let l;
        if (bt(t)) {
          const o = yc(this),
            i = ju(t, void 0);
          let u = !0;
          try {
            (l = n(i)), (u = !1);
          } finally {
            u ? Nu(o) : Ou(o);
          }
          return vc(o, r), gc(l, o);
        } else if (!t || typeof t != "object") {
          if (
            ((l = n(t)),
            l === void 0 && (l = t),
            l === ep && (l = void 0),
            this.autoFreeze_ && Is(l, !0),
            r)
          ) {
            const o = [],
              i = [];
            en("Patches").generateReplacementPatches_(t, l, o, i), r(o, i);
          }
          return l;
        } else He(1, t);
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == "function")
          return (i, ...u) => this.produceWithPatches(i, (s) => t(s, ...u));
        let r, l;
        return [
          this.produce(t, n, (i, u) => {
            (r = i), (l = u);
          }),
          r,
          l,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    bt(e) || He(8), In(e) && (e = My(e));
    const t = yc(this),
      n = ju(e, void 0);
    return (n[Ne].isManual_ = !0), Ou(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Ne];
    (!n || !n.isManual_) && He(9);
    const { scope_: r } = n;
    return vc(r, t), gc(void 0, r);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const l = t[n];
      if (l.path.length === 0 && l.op === "replace") {
        e = l.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = en("Patches").applyPatches_;
    return In(e) ? r(e, t) : this.produce(e, (l) => r(l, t));
  }
};
function ju(e, t) {
  const n = Mo(e)
    ? en("MapSet").proxyMap_(e, t)
    : Lo(e)
    ? en("MapSet").proxySet_(e, t)
    : Ty(e, t);
  return (t ? t.scope_ : rp()).drafts_.push(n), n;
}
function My(e) {
  return In(e) || He(10, e), op(e);
}
function op(e) {
  if (!bt(e) || Do(e)) return e;
  const t = e[Ne];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (n = Cu(e, t.scope_.immer_.useStrictShallowCopy_));
  } else n = Cu(e, !0);
  return (
    $r(n, (r, l) => {
      np(n, r, op(l));
    }),
    t && (t.finalized_ = !1),
    n
  );
}
var Oe = new Ry(),
  Ly = Oe.produce;
Oe.produceWithPatches.bind(Oe);
Oe.setAutoFreeze.bind(Oe);
Oe.setUseStrictShallowCopy.bind(Oe);
Oe.applyPatches.bind(Oe);
Oe.createDraft.bind(Oe);
Oe.finishDraft.bind(Oe);
function Dy({ achivements: e }) {
  return O.jsx("div", {
    className: "columns wrap is-3",
    children: e
      .filter((t) => t.isDiscovered)
      .map((t) =>
        O.jsx(
          "div",
          {
            className: "card column is-2",
            children: O.jsxs("div", {
              className: "card-content",
              children: [
                O.jsx("p", { className: "title is-4", children: t.name }),
                O.jsx("div", { className: "content", children: t.description }),
              ],
            }),
          },
          t.id
        )
      ),
  });
}
const ee = {
    id: 1,
    make: function (e, t, n) {
      return {
        name: e,
        description: t,
        condition: n,
        id: this.id++,
        isDiscovered: !1,
      };
    },
  },
  Iy = [
    ee.make(
      "10 fingers",
      "Purchase 10 fingers",
      (e) => e.buildings[0].quantity >= 10
    ),
    ee.make(
      "50 fingers",
      "Purchase 50 fingers",
      (e) => e.buildings[0].quantity >= 50
    ),
    ee.make(
      "100 fingers",
      "Purchase 100 fingers",
      (e) => e.buildings[0].quantity >= 100
    ),
    ee.make(
      "10 palms",
      "Purchase 10 palms",
      (e) => e.buildings[1].quantity >= 10
    ),
    ee.make(
      "50 palms",
      "Purchase 50 palms",
      (e) => e.buildings[1].quantity >= 50
    ),
    ee.make(
      "100 palms",
      "Purchase 100 palms",
      (e) => e.buildings[1].quantity >= 100
    ),
    ee.make(
      "10 fists",
      "Purchase 10 fists",
      (e) => e.buildings[2].quantity >= 10
    ),
    ee.make(
      "50 fists",
      "Purchase 50 fists",
      (e) => e.buildings[2].quantity >= 50
    ),
    ee.make(
      "100 fists",
      "Purchase 100 fists",
      (e) => e.buildings[2].quantity >= 100
    ),
    ee.make(
      "10 chests",
      "Purchase 10 chests",
      (e) => e.buildings[3].quantity >= 10
    ),
    ee.make(
      "50 chests",
      "Purchase 50 chests",
      (e) => e.buildings[3].quantity >= 50
    ),
    ee.make(
      "100 chests",
      "Purchase 100 chests",
      (e) => e.buildings[3].quantity >= 100
    ),
    ee.make(
      "10 hammers",
      "Purchase 10 hammers",
      (e) => e.buildings[4].quantity >= 10
    ),
    ee.make(
      "50 hammers",
      "Purchase 50 hammers",
      (e) => e.buildings[4].quantity >= 50
    ),
    ee.make(
      "100 hammers",
      "Purchase 100 hammers",
      (e) => e.buildings[4].quantity >= 100
    ),
    ee.make(
      "10 mass",
      "Purchase 10 mass",
      (e) => e.buildings[5].quantity >= 10
    ),
    ee.make(
      "50 mass",
      "Purchase 50 mass",
      (e) => e.buildings[5].quantity >= 50
    ),
    ee.make(
      "100 mass",
      "Purchase 100 mass",
      (e) => e.buildings[5].quantity >= 100
    ),
  ];
const Ay = "assets/burger-2b1e05ae.png";
function Fy() {
  const e = Ln((l) => l.money.value),
    t = Ln((l) => l.buildings.buildings),
    n = bd();
  t.forEach((l) => {
    !l.isUnlocked && e >= Ov(l) && n($v(l));
  });
  const r = X.useMemo(
    () =>
      new Intl.NumberFormat("en-GB", {
        notation: "compact",
        compactDisplay: "short",
      }),
    []
  );
  return (
    X.useEffect(() => {
      const l = setInterval(() => {
        const o = fc(t);
        n(wi(o / 10));
      }, 100);
      return () => clearInterval(l);
    }, [t, n]),
    O.jsxs(O.Fragment, {
      children: [
        O.jsxs("div", {
          className: "columns",
          children: [
            O.jsxs("div", {
              className: "column is-one-third  has-text-centered",
              children: [
                O.jsxs("p", {
                  className: "is-size-1",
                  children: [
                    "Money : ",
                    r.format(e),
                    " (+",
                    r.format(fc(t)),
                    "/s)",
                  ],
                }),
                O.jsx("button", {
                  className: "transparent-button",
                  onClick: () => n(wi(1)),
                  children: O.jsx("img", { src: Ay, alt: "Click me!" }),
                }),
              ],
            }),
            O.jsxs("div", {
              className: "column",
              children: [
                O.jsx("div", {
                  className: "columns",
                  children: O.jsx("div", { className: "column" }),
                }),
                t
                  .filter((l) => l.isUnlocked)
                  .map((l) => {
                    const o = Nv(l);
                    return O.jsx(
                      "div",
                      {
                        children: O.jsxs("button", {
                          className: "button max-width is-size-4",
                          title: `${l.desc} (${l.moneyGain}/s)`,
                          disabled: e < o,
                          onClick: () => {
                            n(wi(Math.ceil(-o))), n(jv(l));
                          },
                          children: [
                            l.name,
                            " (",
                            l.quantity,
                            ")",
                            " ",
                            r.format(o),
                          ],
                        }),
                      },
                      l.id
                    );
                  }),
              ],
            }),
          ],
        }),
        O.jsxs("div", {
          className: "columns",
          children: [
            O.jsx("div", { className: "column is-one-quarter" }),
            O.jsx("div", { className: "column" }),
            O.jsx("div", { className: "column is-one-quarter" }),
          ],
        }),
      ],
    })
  );
}
function Uy(e, t) {
  const n = document.createElement("a");
  n.setAttribute(
    "href",
    "data:text/plain;charset=utf-8, " + encodeURIComponent(t)
  ),
    n.setAttribute("download", e),
    n.click();
}
function By(e = [], t = !1) {
  return new Promise((n, r) => {
    const l = document.createElement("input");
    (l.type = "file"),
      (l.multiple = t),
      e.length > 0 && (l.accept = e.join(",")),
      l.addEventListener("change", () => {
        l.files !== null ? n(l.files) : r(new Error("no file selected"));
      }),
      l.click();
  });
}
function Wy() {
  const e = bd(),
    t = Ln((r) => r.money.value),
    n = Ln((r) => r.buildings.buildings);
  return O.jsxs(O.Fragment, {
    children: [
      O.jsx("button", {
        className: "button",
        onClick: () => {
          e(xv()), e(Tv());
        },
        children: "Reset",
      }),
      O.jsx("button", {
        className: "button",
        onClick: () => {
          const r = { buildings: n, money: t };
          localStorage.setItem("save", JSON.stringify(r));
        },
        children: "Save",
      }),
      O.jsx("button", {
        className: "button",
        onClick: () => {
          const r = localStorage.getItem("save");
          if (r !== null) {
            const l = JSON.parse(r);
            e(cc(l.money)), e(dc(l.buildings));
          }
        },
        children: "Load",
      }),
      O.jsx("button", {
        className: "button",
        onClick: () => {
          Uy("save.json", JSON.stringify({ buildings: n, money: t }));
        },
        children: "Export",
      }),
      O.jsx("button", {
        className: "button",
        onClick: async () => {
          const l = (await By())[0];
          if (l) {
            const o = await l.text(),
              i = JSON.parse(o);
            e(cc(i.money)), e(dc(i.buildings));
          }
        },
        children: "Import",
      }),
    ],
  });
}
function Vy() {
  const e = Ln((a) => a.money.value),
    t = Ln((a) => a.buildings.buildings),
    n = { money: e, buildings: t },
    [r, l] = X.useState(0),
    [o, i] = X.useState(Iy),
    [u, s] = X.useState(!1);
  return (
    o.forEach((a, d) => {
      !a.isDiscovered &&
        a.condition(n) &&
        (i(
          Ly(o, (h) => {
            h[d].isDiscovered = !0;
          })
        ),
        s(!0));
    }),
    O.jsxs("div", {
      children: [
        O.jsx("div", {
          className: "tabs",
          children: O.jsxs("ul", {
            children: [
              O.jsx("li", {
                className: r === 0 ? "is-active" : "",
                children: O.jsx("a", { onClick: () => l(0), children: "Game" }),
              }),
              O.jsx("li", {
                className: r === 1 ? "is-active" : "",
                children: O.jsx("a", {
                  onClick: () => l(1),
                  children: "Options",
                }),
              }),
              O.jsx("li", {
                className: r === 2 ? "is-active" : "",
                children: O.jsxs("a", {
                  onClick: () => {
                    l(2), s(!1);
                  },
                  children: [
                    "Achievements",
                    " ",
                    u &&
                      O.jsx("span", {
                        className: "has-text-info",
                        children: "NEW!",
                      }),
                  ],
                }),
              }),
            ],
          }),
        }),
        O.jsx("div", {
          className: r !== 0 ? "hidden" : "",
          children: O.jsx(Fy, {}),
        }),
        O.jsx("div", {
          className: r !== 1 ? "hidden" : "",
          children: O.jsx(Wy, {}),
        }),
        O.jsx("div", {
          className: r !== 2 ? "hidden" : "",
          children: O.jsx(Dy, { achivements: o }),
        }),
      ],
    })
  );
}
Ei.createRoot(document.getElementById("root")).render(
  O.jsx(_y, { store: Mv, children: O.jsx(Vy, {}) })
);
