(function (t) {
  function e(e) {
    for (
      var s, i, l = e[0], r = e[1], c = e[2], d = 0, u = [];
      d < l.length;
      d++
    )
      (i = l[d]),
        Object.prototype.hasOwnProperty.call(o, i) && o[i] && u.push(o[i][0]),
        (o[i] = 0);
    for (s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    m && m(e);
    while (u.length) u.shift()();
    return n.push.apply(n, c || []), a();
  }
  function a() {
    for (var t, e = 0; e < n.length; e++) {
      for (var a = n[e], s = !0, i = 1; i < a.length; i++) {
        var l = a[i];
        0 !== o[l] && (s = !1);
      }
      s && (n.splice(e--, 1), (t = r((r.s = a[0]))));
    }
    return t;
  }
  var s = {},
    i = { app: 0 },
    o = { app: 0 },
    n = [];
  function l(t) {
    return (
      r.p +
      "js/" +
      ({
        "compresspdf~download~mergepdf~splitpdf":
          "compresspdf~download~mergepdf~splitpdf",
        "compresspdf~mergepdf~splitpdf": "compresspdf~mergepdf~splitpdf",
        compresspdf: "compresspdf",
        "download~mergepdf~splitpdf": "download~mergepdf~splitpdf",
        mergepdf: "mergepdf",
        splitpdf: "splitpdf",
        download: "download",
        deleted: "deleted",
        "locale-ar-json": "locale-ar-json",
        "locale-bg-json": "locale-bg-json",
        "locale-ca-json": "locale-ca-json",
        "locale-de-json": "locale-de-json",
        "locale-el-json": "locale-el-json",
        "locale-en-json": "locale-en-json",
        "locale-es-json": "locale-es-json",
        "locale-fr-json": "locale-fr-json",
        "locale-hi-json": "locale-hi-json",
        "locale-id-json": "locale-id-json",
        "locale-it-json": "locale-it-json",
        "locale-ja-json": "locale-ja-json",
        "locale-ko-json": "locale-ko-json",
        "locale-ms-json": "locale-ms-json",
        "locale-nl-json": "locale-nl-json",
        "locale-pl-json": "locale-pl-json",
        "locale-pt-json": "locale-pt-json",
        "locale-ru-json": "locale-ru-json",
        "locale-sv-json": "locale-sv-json",
        "locale-th-json": "locale-th-json",
        "locale-tr-json": "locale-tr-json",
        "locale-uk-json": "locale-uk-json",
        "locale-vi-json": "locale-vi-json",
        "locale-zh_cn-json": "locale-zh_cn-json",
        "locale-zh_tw-json": "locale-zh_tw-json",
        login: "login",
      }[t] || t) +
      "." +
      {
        "compresspdf~download~mergepdf~splitpdf": "459672f7",
        "compresspdf~mergepdf~splitpdf": "714cafed",
        compresspdf: "e3a59358",
        "download~mergepdf~splitpdf": "bcdf7683",
        mergepdf: "c2f75920",
        splitpdf: "3645523f",
        download: "6f28a372",
        deleted: "7f7c2afa",
        "locale-ar-json": "54f85bb8",
        "locale-bg-json": "ed57c2b0",
        "locale-ca-json": "481b8935",
        "locale-de-json": "85df9121",
        "locale-el-json": "14d5a89a",
        "locale-en-json": "11a91dce",
        "locale-es-json": "8f179fbd",
        "locale-fr-json": "a82d4f89",
        "locale-hi-json": "6712e188",
        "locale-id-json": "433ab16d",
        "locale-it-json": "e6e1649f",
        "locale-ja-json": "7bbab334",
        "locale-ko-json": "12528975",
        "locale-ms-json": "e96b9beb",
        "locale-nl-json": "afb4d2ee",
        "locale-pl-json": "e9a3edbc",
        "locale-pt-json": "299eda35",
        "locale-ru-json": "c84feec8",
        "locale-sv-json": "e0ccc4e3",
        "locale-th-json": "630aefa5",
        "locale-tr-json": "73e5130a",
        "locale-uk-json": "7d169192",
        "locale-vi-json": "79f2f633",
        "locale-zh_cn-json": "8cc2875a",
        "locale-zh_tw-json": "89311149",
        login: "ebcf7df0",
        "chunk-2d216214": "dda534f6",
        "chunk-5152d91b": "e0694419",
      }[t] +
      ".js"
    );
  }
  function r(e) {
    if (s[e]) return s[e].exports;
    var a = (s[e] = { i: e, l: !1, exports: {} });
    return t[e].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
  }
  (r.e = function (t) {
    var e = [],
      a = {
        "compresspdf~download~mergepdf~splitpdf": 1,
        "compresspdf~mergepdf~splitpdf": 1,
        compresspdf: 1,
        mergepdf: 1,
        splitpdf: 1,
        download: 1,
        deleted: 1,
        login: 1,
      };
    i[t]
      ? e.push(i[t])
      : 0 !== i[t] &&
        a[t] &&
        e.push(
          (i[t] = new Promise(function (e, a) {
            for (
              var s =
                  "css/" +
                  ({
                    "compresspdf~download~mergepdf~splitpdf":
                      "compresspdf~download~mergepdf~splitpdf",
                    "compresspdf~mergepdf~splitpdf":
                      "compresspdf~mergepdf~splitpdf",
                    compresspdf: "compresspdf",
                    "download~mergepdf~splitpdf": "download~mergepdf~splitpdf",
                    mergepdf: "mergepdf",
                    splitpdf: "splitpdf",
                    download: "download",
                    deleted: "deleted",
                    "locale-ar-json": "locale-ar-json",
                    "locale-bg-json": "locale-bg-json",
                    "locale-ca-json": "locale-ca-json",
                    "locale-de-json": "locale-de-json",
                    "locale-el-json": "locale-el-json",
                    "locale-en-json": "locale-en-json",
                    "locale-es-json": "locale-es-json",
                    "locale-fr-json": "locale-fr-json",
                    "locale-hi-json": "locale-hi-json",
                    "locale-id-json": "locale-id-json",
                    "locale-it-json": "locale-it-json",
                    "locale-ja-json": "locale-ja-json",
                    "locale-ko-json": "locale-ko-json",
                    "locale-ms-json": "locale-ms-json",
                    "locale-nl-json": "locale-nl-json",
                    "locale-pl-json": "locale-pl-json",
                    "locale-pt-json": "locale-pt-json",
                    "locale-ru-json": "locale-ru-json",
                    "locale-sv-json": "locale-sv-json",
                    "locale-th-json": "locale-th-json",
                    "locale-tr-json": "locale-tr-json",
                    "locale-uk-json": "locale-uk-json",
                    "locale-vi-json": "locale-vi-json",
                    "locale-zh_cn-json": "locale-zh_cn-json",
                    "locale-zh_tw-json": "locale-zh_tw-json",
                    login: "login",
                  }[t] || t) +
                  "." +
                  {
                    "compresspdf~download~mergepdf~splitpdf": "d264b076",
                    "compresspdf~mergepdf~splitpdf": "2ac61390",
                    compresspdf: "d2702cf3",
                    "download~mergepdf~splitpdf": "31d6cfe0",
                    mergepdf: "c33a0664",
                    splitpdf: "df933f8a",
                    download: "cc6cdb00",
                    deleted: "9545d4c9",
                    "locale-ar-json": "31d6cfe0",
                    "locale-bg-json": "31d6cfe0",
                    "locale-ca-json": "31d6cfe0",
                    "locale-de-json": "31d6cfe0",
                    "locale-el-json": "31d6cfe0",
                    "locale-en-json": "31d6cfe0",
                    "locale-es-json": "31d6cfe0",
                    "locale-fr-json": "31d6cfe0",
                    "locale-hi-json": "31d6cfe0",
                    "locale-id-json": "31d6cfe0",
                    "locale-it-json": "31d6cfe0",
                    "locale-ja-json": "31d6cfe0",
                    "locale-ko-json": "31d6cfe0",
                    "locale-ms-json": "31d6cfe0",
                    "locale-nl-json": "31d6cfe0",
                    "locale-pl-json": "31d6cfe0",
                    "locale-pt-json": "31d6cfe0",
                    "locale-ru-json": "31d6cfe0",
                    "locale-sv-json": "31d6cfe0",
                    "locale-th-json": "31d6cfe0",
                    "locale-tr-json": "31d6cfe0",
                    "locale-uk-json": "31d6cfe0",
                    "locale-vi-json": "31d6cfe0",
                    "locale-zh_cn-json": "31d6cfe0",
                    "locale-zh_tw-json": "31d6cfe0",
                    login: "214aebf8",
                    "chunk-2d216214": "31d6cfe0",
                    "chunk-5152d91b": "31d6cfe0",
                  }[t] +
                  ".css",
                o = r.p + s,
                n = document.getElementsByTagName("link"),
                l = 0;
              l < n.length;
              l++
            ) {
              var c = n[l],
                d = c.getAttribute("data-href") || c.getAttribute("href");
              if ("stylesheet" === c.rel && (d === s || d === o)) return e();
            }
            var u = document.getElementsByTagName("style");
            for (l = 0; l < u.length; l++) {
              (c = u[l]), (d = c.getAttribute("data-href"));
              if (d === s || d === o) return e();
            }
            var m = document.createElement("link");
            (m.rel = "stylesheet"),
              (m.type = "text/css"),
              (m.onload = e),
              (m.onerror = function (e) {
                var s = (e && e.target && e.target.src) || o,
                  n = new Error(
                    "Loading CSS chunk " + t + " failed.\n(" + s + ")"
                  );
                (n.code = "CSS_CHUNK_LOAD_FAILED"),
                  (n.request = s),
                  delete i[t],
                  m.parentNode.removeChild(m),
                  a(n);
              }),
              (m.href = o);
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(m);
          }).then(function () {
            i[t] = 0;
          }))
        );
    var s = o[t];
    if (0 !== s)
      if (s) e.push(s[2]);
      else {
        var n = new Promise(function (e, a) {
          s = o[t] = [e, a];
        });
        e.push((s[2] = n));
        var c,
          d = document.createElement("script");
        (d.charset = "utf-8"),
          (d.timeout = 120),
          r.nc && d.setAttribute("nonce", r.nc),
          (d.src = l(t));
        var u = new Error();
        c = function (e) {
          (d.onerror = d.onload = null), clearTimeout(m);
          var a = o[t];
          if (0 !== a) {
            if (a) {
              var s = e && ("load" === e.type ? "missing" : e.type),
                i = e && e.target && e.target.src;
              (u.message =
                "Loading chunk " + t + " failed.\n(" + s + ": " + i + ")"),
                (u.name = "ChunkLoadError"),
                (u.type = s),
                (u.request = i),
                a[1](u);
            }
            o[t] = void 0;
          }
        };
        var m = setTimeout(function () {
          c({ type: "timeout", target: d });
        }, 12e4);
        (d.onerror = d.onload = c), document.head.appendChild(d);
      }
    return Promise.all(e);
  }),
    (r.m = t),
    (r.c = s),
    (r.d = function (t, e, a) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
    }),
    (r.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (r.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var s in t)
          r.d(
            a,
            s,
            function (e) {
              return t[e];
            }.bind(null, s)
          );
      return a;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = "/"),
    (r.oe = function (t) {
      throw (console.error(t), t);
    });
  var c = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    d = c.push.bind(c);
  (c.push = e), (c = c.slice());
  for (var u = 0; u < c.length; u++) e(c[u]);
  var m = d;
  n.push([0, "chunk-vendors"]), a();
})({
  0: function (t, e, a) {
    t.exports = a("56d7");
  },
  "070a": function (t, e, a) {
    t.exports = a.p + "img/split_pdf.6ffbd3d2.svg";
  },
  "0b55": function (t, e, a) {
    "use strict";
    a("da68");
  },
  "0fe1": function (t, e) {
    t.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABESURBVHgB7dTBCQAgDAPA4CTuv5SjRIS8FYSIhRz4kwRKKRDxBMmh1+GgcNpKVmhKrktO/xt+Yh1R3XAV2DfHeyoitiaf2a20F55stgAAAABJRU5ErkJggg==";
  },
  "15b3": function (t, e, a) {
    t.exports = a.p + "img/excel_pdf.b2fe44a7.svg";
  },
  "1d5a": function (t, e, a) {},
  "1dcf": function (t, e) {
    t.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABIUlEQVQ4y62TMU4DQQxF359dRaMoSsUREBUF2oIyNcpBQpurbLlHSIWiVGkpUyBqxBGooi1GURRT4A2jZRsgrjzf35bH/hY9k1SZ2SNwDwSHT8BOUmNmLwxZURRjoAHqEMItsC3Lcuz41rEaaBz7kbyRNHNoKWmedTUHlu7PgE2/SJMlA6xjjGX3cH+dFZx5twRJFZDM7BlgNBpFIKWUjl2C+8ljODdJquSVboAP50+Aa+C1N6Y74B1o/X0FvCFpnbMkPQCLgTkvPJZznwJw7BEnkvYDBfZmNskBMzsF/mmBb7F01prZdIA7ldTmgKRwkSFWfCkMOK9xNdDBqlujWy2pCq7t2AnpcDgkIA4IKXqsE1I838UlpPznY1L/o78950+MW2tphlIHkQAAAABJRU5ErkJggg==";
  },
  "1ed9": function (t, e, a) {
    t.exports = a.p + "img/repair_pdf.c50d0edf.svg";
  },
  "24e8": function (t, e, a) {
    t.exports = a.p + "img/pdf_powerpoint.d768d29a.svg";
  },
  "2eae": function (t, e, a) {
    t.exports = a.p + "img/compress_pdf.d52ac6c4.svg";
  },
  "30df": function (t, e, a) {
    t.exports = a.p + "img/pdf_pdfa.d59bbf0b.svg";
  },
  "31ec": function (t, e, a) {
    "use strict";
    a("1d5a");
  },
  "33c1": function (t, e, a) {},
  "38fd": function (t, e, a) {},
  "39c3": function (t, e, a) {
    var s = {
      "./ar.json": ["af08", "locale-ar-json"],
      "./bg.json": ["dcd0", "locale-bg-json"],
      "./ca.json": ["a4e4", "locale-ca-json"],
      "./de.json": ["6ce2", "locale-de-json"],
      "./el.json": ["f184", "locale-el-json"],
      "./en.json": ["edd4", "locale-en-json"],
      "./es.json": ["a306", "locale-es-json"],
      "./fr.json": ["f693", "locale-fr-json"],
      "./hi.json": ["7a03", "locale-hi-json"],
      "./id.json": ["210c", "locale-id-json"],
      "./it.json": ["0825", "locale-it-json"],
      "./ja.json": ["0423", "locale-ja-json"],
      "./ko.json": ["dd11", "locale-ko-json"],
      "./ms.json": ["2060", "locale-ms-json"],
      "./nl.json": ["a625", "locale-nl-json"],
      "./pl.json": ["89b2", "locale-pl-json"],
      "./pt.json": ["5d67", "locale-pt-json"],
      "./ru.json": ["7704", "locale-ru-json"],
      "./sv.json": ["4c5b", "locale-sv-json"],
      "./th.json": ["8680", "locale-th-json"],
      "./tr.json": ["ffeb", "locale-tr-json"],
      "./uk.json": ["62ea", "locale-uk-json"],
      "./vi.json": ["aced", "locale-vi-json"],
      "./zh_cn.json": ["eadb", "locale-zh_cn-json"],
      "./zh_tw.json": ["056c", "locale-zh_tw-json"],
    };
    function i(t) {
      if (!a.o(s, t))
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        });
      var e = s[t],
        i = e[0];
      return a.e(e[1]).then(function () {
        return a.t(i, 3);
      });
    }
    (i.keys = function () {
      return Object.keys(s);
    }),
      (i.id = "39c3"),
      (t.exports = i);
  },
  4360: function (t, e, a) {
    "use strict";
    var s = a("2b0e"),
      i = a("5502");
    s["default"].use(i["a"]);
    var o = new i["a"].Store({
      state: { user: null },
      mutations: {
        setUser: function (t, e) {
          return (t.user = e);
        },
      },
      actions: {
        setUser: function (t, e) {
          t.commit("setUser", e);
        },
      },
    });
    e["a"] = o;
  },
  4453: function (t, e, a) {
    "use strict";
    a("894e");
  },
  "50e8": function (t, e, a) {
    t.exports = a.p + "img/organize_pdf.74238c2f.svg";
  },
  "51c8": function (t, e, a) {
    t.exports = a.p + "img/page_numbers.3a6a7c1a.svg";
  },
  5296: function (t, e, a) {
    t.exports = a.p + "img/merge_pdf.1df058e7.svg";
  },
  5308: function (t, e, a) {},
  "56d7": function (t, e, a) {
    "use strict";
    a.r(e);
    a("e260"), a("e6cf"), a("cca6"), a("a79d");
    var s = a("2b0e"),
      i = function () {
        var t = this,
          e = t._self._c;
        return e("div", [
          t.isLoading
            ? e("div", [t._v("Loading...")])
            : e("div", [e("Nav"), e("router-view"), e("Footer")], 1),
        ]);
      },
      o = [],
      n =
        (a("b0c0"),
        function () {
          var t = this,
            e = t._self._c;
          return e("nav", { staticClass: "navbar" }, [
            e(
              "div",
              { staticClass: "block__container" },
              [
                e(
                  "LocalizedLink",
                  {
                    staticStyle: { "background-color": "#fff !important" },
                    attrs: { to: "/" },
                  },
                  [
                    e("img", {
                      attrs: { src: a("fdbc"), width: "160", srcset: "" },
                    }),
                  ]
                ),
                e(
                  "div",
                  {
                    staticClass: "navbar-toggle",
                    on: { click: t.toggleNavbar },
                  },
                  [e("md-icon", [t._v("menu")])],
                  1
                ),
                e("ul", { staticClass: "nav-lists" }, [
                  e(
                    "li",
                    {
                      staticClass: "nav-item",
                      staticStyle: { position: "relative", right: "10%" },
                    },
                    [
                      e("ul", { staticClass: "nav-list" }, [
                        e(
                          "li",
                          [
                            e(
                              "LocalizedLink",
                              {
                                staticClass: "nav-btn",
                                class: {
                                  "active-link": t.isActive("/mergepdf"),
                                },
                                attrs: { to: "/mergepdf" },
                              },
                              [
                                t._v(
                                  " " + t._s(t.$t("features.merge.title")) + " "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                        e(
                          "li",
                          [
                            e(
                              "LocalizedLink",
                              {
                                staticClass: "nav-btn",
                                class: {
                                  "active-link": t.isActive("/splitpdf"),
                                },
                                attrs: { to: "/splitpdf" },
                              },
                              [
                                t._v(
                                  " " + t._s(t.$t("features.split.title")) + " "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                        e(
                          "li",
                          [
                            e(
                              "LocalizedLink",
                              {
                                staticClass: "nav-btn",
                                class: {
                                  "active-link": t.isActive("/compresspdf"),
                                },
                                attrs: { to: "/compresspdf" },
                              },
                              [
                                t._v(
                                  " " +
                                    t._s(t.$t("features.compress.title")) +
                                    " "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                        e(
                          "li",
                          [
                            e(
                              "LocalizedLink",
                              {
                                staticClass: "nav-btn",
                                class: {
                                  "active-link": t.isActive("/signpdf"),
                                },
                                attrs: { to: "/signpdf" },
                              },
                              [
                                t._v(
                                  " " + t._s(t.$t("features.sign.title")) + " "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                        e(
                          "li",
                          [
                            e(
                              "LocalizedLink",
                              {
                                staticClass: "nav-btn",
                                class: {
                                  "active-link": t.isActive("/editpdf"),
                                },
                                attrs: { to: "/editpdf" },
                              },
                              [
                                t._v(
                                  " " + t._s(t.$t("features.edit.title")) + " "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                        e(
                          "li",
                          [
                            e(
                              "LocalizedLink",
                              {
                                staticClass: "nav-btn",
                                class: {
                                  "active-link": t.isActive("/rotatepdf"),
                                },
                                attrs: { to: "/rotatepdf" },
                              },
                              [
                                t._v(
                                  " " +
                                    t._s(t.$t("features.rotate.title")) +
                                    " "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                        e(
                          "li",
                          { staticStyle: { "margin-top": "-10px" } },
                          [
                            e(
                              "md-speed-dial",
                              {
                                staticClass: "dropdown-tooltip",
                                staticStyle: {
                                  padding: "0",
                                  position: "absolute",
                                  right: "-140px",
                                },
                                attrs: { "md-direction": "bottom" },
                              },
                              [
                                e(
                                  "button",
                                  {
                                    staticClass: "nav-btn",
                                    staticStyle: { "min-width": "38px" },
                                    attrs: { "md-menu-trigger": "" },
                                  },
                                  [
                                    t._v(
                                      " " +
                                        t._s(
                                          t.$t(
                                            "other_features.convert_pdf.title"
                                          )
                                        ) +
                                        " "
                                    ),
                                  ]
                                ),
                                e(
                                  "md-speed-dial-content",
                                  { staticStyle: { "z-index": "1000" } },
                                  [
                                    e(
                                      "md-button",
                                      { staticClass: "nav-btn" },
                                      [
                                        e(
                                          "LocalizedLink",
                                          { attrs: { to: "wordtopdf" } },
                                          [
                                            t._v(
                                              " " +
                                                t._s(
                                                  t.$t(
                                                    "features.word_pdf.title"
                                                  )
                                                ) +
                                                " "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                    e(
                                      "md-button",
                                      { staticClass: "nav-btn" },
                                      [
                                        e(
                                          "LocalizedLink",
                                          { attrs: { to: "pdftoword" } },
                                          [
                                            t._v(
                                              " " +
                                                t._s(
                                                  t.$t(
                                                    "features.pdf_word.title"
                                                  )
                                                ) +
                                                " "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            t._v(" " + t._s(t.user && t.user.name) + " "),
                          ],
                          1
                        ),
                      ]),
                    ]
                  ),
                  e("li", { staticClass: "nav-item" }, [
                    e("ul", { staticClass: "nav-list" }, [
                      e(
                        "li",
                        { staticClass: "md-list-item login-btn" },
                        [
                          e("LocalizedLink", { attrs: { to: "login" } }, [
                            t._v(" " + t._s(t.$t("nav-links.login")) + " "),
                          ]),
                        ],
                        1
                      ),
                      e(
                        "li",
                        { staticClass: "md-list-item signup-btn" },
                        [
                          e("LocalizedLink", { attrs: { to: "signup" } }, [
                            t._v(" " + t._s(t.$t("nav-links.signup")) + " "),
                          ]),
                        ],
                        1
                      ),
                    ]),
                  ]),
                ]),
                e("div", { class: { "navbar-open": t.isOpen } }, [
                  e(
                    "ul",
                    {
                      staticClass: "mobile-nav-list",
                      on: {
                        mouseleave: function (e) {
                          t.isOpen = !1;
                        },
                      },
                    },
                    [
                      e(
                        "li",
                        [
                          e("LocalizedLink", { attrs: { to: "/" } }, [
                            t._v(" HOME "),
                          ]),
                        ],
                        1
                      ),
                      e(
                        "li",
                        [
                          e("LocalizedLink", { attrs: { to: "/mergepdf" } }, [
                            t._v(
                              " " + t._s(t.$t("features.merge.title")) + " "
                            ),
                          ]),
                        ],
                        1
                      ),
                      e(
                        "li",
                        [
                          e("LocalizedLink", { attrs: { to: "/splitpdf" } }, [
                            t._v(
                              " " + t._s(t.$t("features.split.title")) + " "
                            ),
                          ]),
                        ],
                        1
                      ),
                      e(
                        "li",
                        [
                          e(
                            "LocalizedLink",
                            { attrs: { to: "/compresspdf" } },
                            [
                              t._v(
                                " " +
                                  t._s(t.$t("features.compress.title")) +
                                  " "
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      e(
                        "li",
                        [
                          e("LocalizedLink", { attrs: { to: "wordtopdf" } }, [
                            t._v(
                              " " +
                                t._s(t.$t("other_features.convert_pdf.title")) +
                                " "
                            ),
                          ]),
                        ],
                        1
                      ),
                      e(
                        "li",
                        [
                          e("LocalizedLink", { attrs: { to: "login" } }, [
                            t._v(" " + t._s(t.$t("nav-links.login")) + " "),
                          ]),
                        ],
                        1
                      ),
                      e(
                        "li",
                        [
                          e("LocalizedLink", { attrs: { to: "signup" } }, [
                            t._v(" " + t._s(t.$t("nav-links.signup")) + " "),
                          ]),
                        ],
                        1
                      ),
                    ]
                  ),
                ]),
              ],
              1
            ),
          ]);
        }),
      l = [],
      r = a("4360"),
      c = a("6cc1"),
      d = {
        data: function () {
          return { isOpen: !1 };
        },
        components: { LocalizedLink: c["a"] },
        computed: {
          user: function () {
            return r["a"].state.user;
          },
        },
        methods: {
          toggleNavbar: function () {
            this.isOpen = !this.isOpen;
          },
          isActive: function (t) {
            return this.$route.path === t;
          },
        },
      },
      u = d,
      m = (a("4453"), a("2877")),
      p = Object(m["a"])(u, n, l, !1, null, "e36aa982", null),
      f = p.exports,
      v = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "footer" }, [
          e("div", { staticClass: "block__container" }, [
            e(
              "div",
              { staticClass: "footer_menus" },
              [
                e("LocaleSwitcher"),
                e("div", { staticClass: "footer-links" }, [
                  e(
                    "div",
                    { staticClass: "footer-link" },
                    [
                      e("LocalizedLink", { attrs: { to: "/" } }, [
                        e("img", {
                          attrs: { src: a("fdbc"), width: "100", srcset: "" },
                        }),
                      ]),
                    ],
                    1
                  ),
                  e(
                    "div",
                    { staticClass: "footer-link border-right" },
                    [
                      e("router-link", { attrs: { to: "/" } }, [
                        t._v(" " + t._s(t.$t("nav-links.about")) + " "),
                      ]),
                    ],
                    1
                  ),
                  e(
                    "div",
                    { staticClass: "footer-link border-right" },
                    [
                      e(
                        "LocalizedLink",
                        {
                          staticClass: "nav-btn",
                          class: { "active-link": t.isActive("/mergepdf") },
                          attrs: { to: "/mergepdf" },
                        },
                        [t._v(" " + t._s(t.$t("features.merge.title")) + " ")]
                      ),
                    ],
                    1
                  ),
                  e(
                    "div",
                    { staticClass: "footer-link border-right" },
                    [
                      e(
                        "LocalizedLink",
                        {
                          staticClass: "nav-btn",
                          class: { "active-link": t.isActive("/splitpdf") },
                          attrs: { to: "/splitpdf" },
                        },
                        [t._v(" " + t._s(t.$t("features.split.title")) + " ")]
                      ),
                    ],
                    1
                  ),
                  e(
                    "div",
                    { staticClass: "footer-link border-right" },
                    [
                      e(
                        "LocalizedLink",
                        {
                          staticClass: "nav-btn",
                          class: { "active-link": t.isActive("/compresspdf") },
                          attrs: { to: "/compresspdf" },
                        },
                        [
                          t._v(
                            " " + t._s(t.$t("features.compress.title")) + " "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                  e(
                    "div",
                    { staticClass: "footer-link border-right" },
                    [
                      e(
                        "LocalizedLink",
                        { staticClass: "nav-btn", attrs: { to: "wordtopdf" } },
                        [
                          t._v(
                            " " +
                              t._s(t.$t("other_features.convert_pdf.title")) +
                              " "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                  e(
                    "div",
                    { staticClass: "footer-link" },
                    [
                      e("router-link", { attrs: { to: "/" } }, [
                        t._v(" " + t._s(t.$t("nav-links.blog")) + " "),
                      ]),
                    ],
                    1
                  ),
                ]),
              ],
              1
            ),
            t._m(0),
          ]),
          e("div", { staticClass: "block__container" }, [
            e("div", { staticClass: "copyright" }, [
              t._v("© " + t._s(t.$t("nav-links.copyright"))),
            ]),
          ]),
        ]);
      },
      h = [
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "footer-social" }, [
            e("div", { staticClass: "social" }, [
              e("i", { staticClass: "fa-brands fa-facebook-f" }),
            ]),
            e("div", { staticClass: "social" }, [
              e("i", { staticClass: "fa-brands fa-instagram" }),
            ]),
            e("div", { staticClass: "social" }, [
              e("i", { staticClass: "fa-brands fa-twitter" }),
            ]),
            e("div", { staticClass: "social" }, [
              e("i", { staticClass: "fa-brands fa-youtube" }),
            ]),
          ]);
        },
      ],
      g = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "locale-switcher" }, [
          t._m(0),
          e(
            "div",
            {
              staticClass: "current_language",
              on: {
                mouseover: function (e) {
                  t.showLan = !0;
                },
              },
            },
            [t._v(" " + t._s(t.getName(t.$i18n.locale)) + " ")]
          ),
          e(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: t.showLan,
                  expression: "showLan",
                },
              ],
              staticClass: "md-layout",
              on: {
                mouseleave: function (e) {
                  t.showLan = !1;
                },
              },
            },
            [
              e(
                "div",
                { staticClass: "md-layout-item" },
                t._l(9, function (a) {
                  return e(
                    "div",
                    {
                      key: a,
                      staticClass: "locale-item",
                      class: { active: t.isActive(t.locales[a - 1].code) },
                      on: {
                        click: function (e) {
                          return t.selLocale(t.locales[a - 1].code);
                        },
                      },
                    },
                    [t._v(" " + t._s(t.locales[a - 1].name) + " ")]
                  );
                }),
                0
              ),
              e(
                "div",
                { staticClass: "md-layout-item" },
                t._l(7, function (a) {
                  return e(
                    "div",
                    {
                      key: a,
                      staticClass: "locale-item",
                      class: { active: t.isActive(t.locales[a + 8].code) },
                      on: {
                        click: function (e) {
                          return t.selLocale(t.locales[a + 8].code);
                        },
                      },
                    },
                    [t._v(" " + t._s(t.locales[a + 8].name) + " ")]
                  );
                }),
                0
              ),
              e(
                "div",
                { staticClass: "md-layout-item" },
                t._l(8, function (a) {
                  return e(
                    "div",
                    {
                      key: a,
                      staticClass: "locale-item",
                      class: { active: t.isActive(t.locales[a + 16].code) },
                      on: {
                        click: function (e) {
                          return t.selLocale(t.locales[a + 16].code);
                        },
                      },
                    },
                    [t._v(" " + t._s(t.locales[a + 16].name) + " ")]
                  );
                }),
                0
              ),
            ]
          ),
        ]);
      },
      b = [
        function () {
          var t = this,
            e = t._self._c;
          return e("div", [
            e("img", {
              staticClass: "langSelector__img",
              attrs: {
                src: a("1dcf"),
                srcset: a("1dcf"),
                alt: "language selector icon",
              },
            }),
          ]);
        },
      ],
      _ =
        (a("14d9"),
        a("b64b"),
        a("caad"),
        a("2532"),
        {
          en: "English",
          fr: "Français",
          ja: "日本語",
          it: "Italiano",
          es: "Español",
          de: "Deutsch",
          ar: "العربية",
          ca: "Català",
          el: "Greek",
          hi: " हिन्दी",
          id: "Bahasa Indonesia",
          ko: "한국어",
          ms: "Bahasa Melayu",
          nl: "Nederlands",
          pl: "Polski",
          pt: " Português",
          ru: "Pусский",
          sv: "Svenska",
          th: " ภาษาไทย",
          tr: "Türkçe",
          uk: "Українська",
          vi: "Tiếng Việt",
          zh_cn: "中文(简体)",
          zh_tw: "中文(繁體)",
          bg: "Български",
        });
    function y() {
      for (var t = [], e = 0, a = Object.keys(_); e < a.length; e++) {
        var s = a[e];
        t.push({ code: s, name: _[s] });
      }
      return t;
    }
    function C(t) {
      return Object.keys(_).includes(t);
    }
    var w,
      j = {
        data: function () {
          return { locales: y(), showLan: !1 };
        },
        methods: {
          getName: function (t) {
            for (var e = "", a = 0; a < this.locales.length; a++)
              this.locales[a].code == t && (e = this.locales[a].name);
            return e;
          },
          changeLocale: function (t) {
            var e = t.target.value;
            this.$router.push("/".concat(e));
          },
          selLocale: function (t) {
            this.$router.push("/".concat(t));
          },
          isActive: function (t) {
            return this.$i18n.locale == t;
          },
        },
      },
      k = j,
      x =
        (a("7313"),
        a("0b55"),
        Object(m["a"])(k, g, b, !1, null, "5b35ef3c", null)),
      A = x.exports,
      S = {
        components: { LocaleSwitcher: A, LocalizedLink: c["a"] },
        methods: {
          isActive: function (t) {
            return this.$route.path === t;
          },
        },
      },
      z = S,
      L = (a("31ec"), Object(m["a"])(z, v, h, !1, null, "5e9cc2da", null)),
      O = L.exports,
      T = new s["default"](),
      D = T,
      P = {
        name: "app",
        components: { Nav: f, Footer: O },
        data: function () {
          return { isLoading: !0 };
        },
        mounted: function () {
          var t = this;
          D.$on("i18n-load-start", function () {
            return (t.isLoading = !0);
          }),
            D.$on("i18n-load-complete", function () {
              return (t.isLoading = !1);
            });
        },
      },
      I = P,
      M = (a("7a49"), Object(m["a"])(I, i, o, !1, null, null, null)),
      N = M.exports,
      B = a("49c6"),
      F = a("b4b3"),
      E = a.n(F),
      $ = (a("3a93"), a("f9d5")),
      U = a.n($),
      R = (a("4413"), a("1dce")),
      H = a.n(R),
      V = (a("d3b7"), a("3ca3"), a("ddb0"), a("a925")),
      J = a("5530");
    a("ac1f"), a("1276"), a("498a");
    function X() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = { countryCodeOnly: !1 },
        a = Object(J["a"])(Object(J["a"])({}, e), t),
        s =
          void 0 !== navigator.languages
            ? navigator.languages[0]
            : navigator.language;
      if (s) {
        var i = a.countryCodeOnly ? s.trim().split(/-|_/)[0] : s.trim();
        return i;
      }
    }
    function Y(t) {
      w = t;
    }
    function W(t, e) {
      return void 0 === w
        ? t
        : "ar" !== this.locale
        ? w.apply(this, [t, e])
        : [0, 1, 2].includes(t)
        ? t
        : 3 <= t && t <= 10
        ? 3
        : 11 <= t && t <= 99
        ? 4
        : 5;
    }
    var G = {
        en: { short: { year: "numeric", month: "short", day: "numeric" } },
        ar: { short: { year: "numeric", month: "long", day: "numeric" } },
      },
      K = G,
      Q = {
        en: { currency: { style: "currency", currency: "USD" } },
        ar: {
          currency: {
            style: "currency",
            currency: "USD",
            currencyDisplay: "code",
          },
        },
      },
      q = Q;
    function Z() {
      var t = X({ countryCodeOnly: !0 });
      return C(t) ? t : "en";
    }
    s["default"].use(V["a"]),
      Y(V["a"].prototype.getChoiceIndex),
      (V["a"].prototype.getChoiceIndex = W);
    var tt = Z(),
      et = new V["a"]({
        locale: tt,
        fallbackLocale: "en",
        messages: {},
        dateTimeFormats: K,
        numberFormats: q,
      }),
      at = [];
    function st(t) {
      return (
        D.$emit("i18n-load-start"),
        at.length > 0 && et.locale === t
          ? (D.$emit("i18n-load-complete"), Promise.resolve(t))
          : at.includes(t)
          ? (D.$emit("i18n-load-complete"), (et.locale = t), Promise.resolve(t))
          : a("39c3")("./".concat(t, ".json")).then(function (e) {
              return (
                et.setLocaleMessage(t, e.default),
                at.push(t),
                (et.locale = t),
                D.$emit("i18n-load-complete"),
                Promise.resolve(t)
              );
            })
      );
    }
    st(tt);
    var it = et,
      ot = a("8c4f"),
      nt = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          {
            staticClass: "wrapper",
            class: { "nav-open": t.$sidebar.showSidebar },
          },
          [
            e("notifications"),
            e(
              "side-bar",
              {
                attrs: {
                  "sidebar-item-color": t.sidebarBackground,
                  "sidebar-background-image": t.sidebarBackgroundImage,
                },
              },
              [
                e("mobile-menu", {
                  attrs: { slot: "content" },
                  slot: "content",
                }),
                e(
                  "sidebar-link",
                  { attrs: { to: "/dashboard" } },
                  [
                    e("md-icon", [t._v("dashboard")]),
                    e("p", [t._v("Dashboard")]),
                  ],
                  1
                ),
                e(
                  "sidebar-link",
                  { attrs: { to: "/user" } },
                  [
                    e("md-icon", [t._v("person")]),
                    e("p", [t._v("User Profile")]),
                  ],
                  1
                ),
                e(
                  "sidebar-link",
                  { attrs: { to: "/table" } },
                  [
                    e("md-icon", [t._v("content_paste")]),
                    e("p", [t._v("Table list")]),
                  ],
                  1
                ),
                e(
                  "sidebar-link",
                  { attrs: { to: "/typography" } },
                  [
                    e("md-icon", [t._v("library_books")]),
                    e("p", [t._v("Typography")]),
                  ],
                  1
                ),
                e(
                  "sidebar-link",
                  { attrs: { to: "/icons" } },
                  [
                    e("md-icon", [t._v("bubble_chart")]),
                    e("p", [t._v("Icons")]),
                  ],
                  1
                ),
                e(
                  "sidebar-link",
                  { attrs: { to: "/maps" } },
                  [e("md-icon", [t._v("location_on")]), e("p", [t._v("Maps")])],
                  1
                ),
                e(
                  "sidebar-link",
                  { attrs: { to: "/notifications" } },
                  [
                    e("md-icon", [t._v("notifications")]),
                    e("p", [t._v("Notifications")]),
                  ],
                  1
                ),
              ],
              1
            ),
            e(
              "div",
              { staticClass: "main-panel" },
              [
                e("top-navbar"),
                e("fixed-plugin", {
                  attrs: {
                    color: t.sidebarBackground,
                    image: t.sidebarBackgroundImage,
                  },
                  on: {
                    "update:color": function (e) {
                      t.sidebarBackground = e;
                    },
                    "update:image": function (e) {
                      t.sidebarBackgroundImage = e;
                    },
                  },
                }),
                e("dashboard-content"),
                t.$route.meta.hideFooter ? t._e() : e("content-footer"),
              ],
              1
            ),
          ],
          1
        );
      },
      lt = [],
      rt = function () {
        var t = this,
          e = t._self._c;
        return e(
          "md-toolbar",
          { staticClass: "md-transparent", attrs: { "md-elevation": "0" } },
          [
            e("div", { staticClass: "md-toolbar-row" }, [
              e("div", { staticClass: "md-toolbar-section-start" }, [
                e("h3", { staticClass: "md-title" }, [
                  t._v(t._s(t.$route.name)),
                ]),
              ]),
              e(
                "div",
                { staticClass: "md-toolbar-section-end" },
                [
                  e(
                    "md-button",
                    {
                      staticClass: "md-just-icon md-simple md-toolbar-toggle",
                      class: { toggled: t.$sidebar.showSidebar },
                      on: { click: t.toggleSidebar },
                    },
                    [
                      e("span", { staticClass: "icon-bar" }),
                      e("span", { staticClass: "icon-bar" }),
                      e("span", { staticClass: "icon-bar" }),
                    ]
                  ),
                  e(
                    "div",
                    { staticClass: "md-collapse" },
                    [
                      e(
                        "div",
                        { staticClass: "md-autocomplete" },
                        [
                          e(
                            "md-autocomplete",
                            {
                              staticClass: "search",
                              attrs: { "md-options": t.employees },
                              model: {
                                value: t.selectedEmployee,
                                callback: function (e) {
                                  t.selectedEmployee = e;
                                },
                                expression: "selectedEmployee",
                              },
                            },
                            [e("label", [t._v("Search...")])]
                          ),
                        ],
                        1
                      ),
                      e(
                        "md-list",
                        [
                          e("md-list-item", { attrs: { href: "#/" } }, [
                            e("i", { staticClass: "material-icons" }, [
                              t._v("dashboard"),
                            ]),
                            e("p", { staticClass: "hidden-lg hidden-md" }, [
                              t._v("Dashboard"),
                            ]),
                          ]),
                          e("li", { staticClass: "md-list-item" }, [
                            e(
                              "a",
                              {
                                staticClass:
                                  "md-list-item-router md-list-item-container md-button-clean dropdown",
                                attrs: { href: "#/notifications" },
                              },
                              [
                                e(
                                  "div",
                                  { staticClass: "md-list-item-content" },
                                  [
                                    e(
                                      "drop-down",
                                      [
                                        e(
                                          "md-button",
                                          {
                                            staticClass:
                                              "md-button md-just-icon md-simple",
                                            attrs: {
                                              slot: "title",
                                              "data-toggle": "dropdown",
                                            },
                                            slot: "title",
                                          },
                                          [
                                            e("md-icon", [
                                              t._v("notifications"),
                                            ]),
                                            e(
                                              "span",
                                              { staticClass: "notification" },
                                              [t._v("5")]
                                            ),
                                            e(
                                              "p",
                                              {
                                                staticClass:
                                                  "hidden-lg hidden-md",
                                              },
                                              [t._v("Notifications")]
                                            ),
                                          ],
                                          1
                                        ),
                                        e(
                                          "ul",
                                          {
                                            staticClass:
                                              "dropdown-menu dropdown-menu-right",
                                          },
                                          [
                                            e("li", [
                                              e("a", { attrs: { href: "#" } }, [
                                                t._v(
                                                  "Mike John responded to your email"
                                                ),
                                              ]),
                                            ]),
                                            e("li", [
                                              e("a", { attrs: { href: "#" } }, [
                                                t._v("You have 5 new tasks"),
                                              ]),
                                            ]),
                                            e("li", [
                                              e("a", { attrs: { href: "#" } }, [
                                                t._v(
                                                  "You're now friend with Andrew"
                                                ),
                                              ]),
                                            ]),
                                            e("li", [
                                              e("a", { attrs: { href: "#" } }, [
                                                t._v("Another Notification"),
                                              ]),
                                            ]),
                                            e("li", [
                                              e("a", { attrs: { href: "#" } }, [
                                                t._v("Another One"),
                                              ]),
                                            ]),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            ),
                          ]),
                          e("md-list-item", { attrs: { href: "#/user" } }, [
                            e("i", { staticClass: "material-icons" }, [
                              t._v("person"),
                            ]),
                            e("p", { staticClass: "hidden-lg hidden-md" }, [
                              t._v("Profile"),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]),
          ]
        );
      },
      ct = [],
      dt = {
        data: function () {
          return {
            selectedEmployee: null,
            employees: [
              "Jim Halpert",
              "Dwight Schrute",
              "Michael Scott",
              "Pam Beesly",
              "Angela Martin",
              "Kelly Kapoor",
              "Ryan Howard",
              "Kevin Malone",
            ],
          };
        },
        methods: {
          toggleSidebar: function () {
            this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
          },
        },
      },
      ut = dt,
      mt = Object(m["a"])(ut, rt, ct, !1, null, null, null),
      pt = mt.exports,
      ft = function () {
        var t = this,
          e = t._self._c;
        return e("footer", { staticClass: "footer" }, [
          e("div", { staticClass: "container" }, [
            t._m(0),
            e("div", { staticClass: "copyright text-center" }, [
              t._v(" © " + t._s(new Date().getFullYear()) + " "),
              e(
                "a",
                {
                  attrs: {
                    href: "https://www.creative-tim.com/?ref=mdf-vuejs",
                    target: "_blank",
                  },
                },
                [t._v("Creative Tim")]
              ),
              t._v(", made with "),
              e("i", { staticClass: "fa fa-heart heart" }),
              t._v(" for a better web "),
            ]),
          ]),
        ]);
      },
      vt = [
        function () {
          var t = this,
            e = t._self._c;
          return e("nav", [
            e("ul", [
              e("li", [
                e("a", { attrs: { href: "https://www.creative-tim.com" } }, [
                  t._v("Creative Tim"),
                ]),
              ]),
              e("li", [
                e(
                  "a",
                  { attrs: { href: "https://creative-tim.com/presentation" } },
                  [t._v(" About Us ")]
                ),
              ]),
              e("li", [
                e("a", { attrs: { href: "http://blog.creative-tim.com" } }, [
                  t._v(" Blog "),
                ]),
              ]),
              e("li", [
                e(
                  "a",
                  { attrs: { href: "https://www.creative-tim.com/license" } },
                  [t._v(" Licenses ")]
                ),
              ]),
            ]),
          ]);
        },
      ],
      ht = {},
      gt = ht,
      bt = Object(m["a"])(gt, ft, vt, !1, null, null, null),
      _t = bt.exports,
      yt = function () {
        var t = this,
          e = t._self._c;
        return e(
          "transition",
          { attrs: { name: "fade", mode: "out-in" } },
          [e("router-view")],
          1
        );
      },
      Ct = [],
      wt = {},
      jt = wt,
      kt = (a("8eb9"), Object(m["a"])(jt, yt, Ct, !1, null, null, null)),
      xt = kt.exports,
      At =
        (a("841c"),
        function () {
          var t = this,
            e = t._self._c;
          return e("ul", { staticClass: "nav nav-mobile-menu" }, [
            e(
              "li",
              [
                e(
                  "md-field",
                  [
                    e("label", [t._v("Search")]),
                    e("md-input", {
                      attrs: { type: "text" },
                      model: {
                        value: t.search,
                        callback: function (e) {
                          t.search = e;
                        },
                        expression: "search",
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
            t._m(0),
            e(
              "li",
              [
                e("drop-down", [
                  e(
                    "a",
                    {
                      staticClass: "dropdown-toggle",
                      attrs: { slot: "title", "data-toggle": "dropdown" },
                      slot: "title",
                    },
                    [
                      e("i", { staticClass: "material-icons" }, [
                        t._v("notifications"),
                      ]),
                      e("span", { staticClass: "notification" }, [t._v("5")]),
                      e("p", [t._v("Notifications")]),
                    ]
                  ),
                  e(
                    "ul",
                    { staticClass: "dropdown-menu dropdown-menu-right" },
                    [
                      e("li", [
                        e("a", { attrs: { href: "#" } }, [
                          t._v("Mike John responded to your email"),
                        ]),
                      ]),
                      e("li", [
                        e("a", { attrs: { href: "#" } }, [
                          t._v("You have 5 new tasks"),
                        ]),
                      ]),
                      e("li", [
                        e("a", { attrs: { href: "#" } }, [
                          t._v("You're now friend with Andrew"),
                        ]),
                      ]),
                      e("li", [
                        e("a", { attrs: { href: "#" } }, [
                          t._v("Another Notification"),
                        ]),
                      ]),
                      e("li", [
                        e("a", { attrs: { href: "#" } }, [t._v("Another One")]),
                      ]),
                    ]
                  ),
                ]),
              ],
              1
            ),
            t._m(1),
          ]);
        }),
      St = [
        function () {
          var t = this,
            e = t._self._c;
          return e("li", [
            e(
              "a",
              {
                staticClass: "dropdown-toggle",
                attrs: { href: "#", "data-toggle": "dropdown" },
              },
              [
                e("i", { staticClass: "material-icons" }, [t._v("dashboard")]),
                e("p", [t._v("Dashboard")]),
              ]
            ),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("li", [
            e(
              "a",
              {
                staticClass: "dropdown-toggle",
                attrs: { href: "#", "data-toggle": "dropdown" },
              },
              [
                e("i", { staticClass: "material-icons" }, [t._v("person")]),
                e("p", [t._v("Profile")]),
              ]
            ),
          ]);
        },
      ],
      zt = {
        data: function () {
          return {
            search: null,
            selectedEmployee: null,
            employees: [
              "Jim Halpert",
              "Dwight Schrute",
              "Michael Scott",
              "Pam Beesly",
              "Angela Martin",
              "Kelly Kapoor",
              "Ryan Howard",
              "Kevin Malone",
            ],
          };
        },
      },
      Lt = zt,
      Ot = Object(m["a"])(Lt, At, St, !1, null, null, null),
      Tt = Ot.exports,
      Dt = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          {
            directives: [
              {
                name: "click-outside",
                rawName: "v-click-outside",
                value: t.closeDropDown,
                expression: "closeDropDown",
              },
            ],
            staticClass: "fixed-plugin",
          },
          [
            e(
              "div",
              {
                staticClass: "dropdown show-dropdown",
                class: { show: t.isOpen },
              },
              [
                e("a", { attrs: { "data-toggle": "dropdown" } }, [
                  e("i", {
                    staticClass: "fa fa-cog fa-2x",
                    on: { click: t.toggleDropDown },
                  }),
                ]),
                e(
                  "ul",
                  { staticClass: "dropdown-menu", class: { show: t.isOpen } },
                  [
                    e("li", { staticClass: "header-title" }, [
                      t._v("Sidebar Filters"),
                    ]),
                    e(
                      "li",
                      { staticClass: "adjustments-line text-center" },
                      t._l(t.sidebarColors, function (a) {
                        return e("span", {
                          key: a.color,
                          staticClass: "badge filter",
                          class: [
                            "badge-".concat(a.color),
                            { active: a.active },
                          ],
                          attrs: { "data-color": a.color },
                          on: {
                            click: function (e) {
                              return t.changeSidebarBackground(a);
                            },
                          },
                        });
                      }),
                      0
                    ),
                    e("li", { staticClass: "header-title" }, [t._v("Images")]),
                    t._l(t.sidebarImages, function (a) {
                      return e(
                        "li",
                        {
                          key: a.image,
                          class: { active: a.active },
                          on: {
                            click: function (e) {
                              return t.changeSidebarImage(a);
                            },
                          },
                        },
                        [
                          e("a", { staticClass: "img-holder switch-trigger" }, [
                            e("img", { attrs: { src: a.image, alt: "" } }),
                          ]),
                        ]
                      );
                    }),
                    e("li", { staticClass: "button-container" }, [
                      e(
                        "div",
                        {},
                        [
                          e(
                            "md-button",
                            {
                              staticClass: "md-success md-block",
                              attrs: { href: t.freeUrl, target: "_blank" },
                            },
                            [t._v("Free Download")]
                          ),
                        ],
                        1
                      ),
                    ]),
                    e("li", { staticClass: "button-container" }, [
                      e(
                        "div",
                        {},
                        [
                          e(
                            "md-button",
                            {
                              staticClass: "md-block md-primary",
                              attrs: {
                                href: t.documentationLink,
                                target: "_blank",
                              },
                            },
                            [t._v("Documentation")]
                          ),
                        ],
                        1
                      ),
                    ]),
                    e(
                      "li",
                      {
                        staticClass:
                          "header-title d-flex justify-content-center",
                      },
                      [t._v(" Thank you for sharing! ")]
                    ),
                    e(
                      "li",
                      { staticClass: "button-container" },
                      [
                        e("social-sharing", {
                          attrs: {
                            url: t.shareUrl,
                            title:
                              "Vue Material Dashboard - Admin Template for Vue.js",
                            hashtags: "vuejs, dashboard, vuematerial",
                            "twitter-user": "creativetim",
                          },
                          inlineTemplate: {
                            render: function () {
                              var t = this,
                                e = t._self._c;
                              return e(
                                "div",
                                { staticClass: "centered-buttons" },
                                [
                                  e(
                                    "ShareNetwork",
                                    {
                                      staticClass:
                                        "md-button md-round md-just-icon md-facebook",
                                      attrs: {
                                        title: "",
                                        url: "https://www.creative-tim.com/product/vue-material-dashboard",
                                        network: "facebook",
                                      },
                                    },
                                    [
                                      e("i", {
                                        staticClass: "fab fa-facebook-f",
                                      }),
                                    ]
                                  ),
                                  e(
                                    "ShareNetwork",
                                    {
                                      staticClass:
                                        "md-button md-round md-just-icon md-twitter",
                                      attrs: {
                                        url: "https://www.creative-tim.com/product/vue-material-dashboard",
                                        title: "",
                                        network: "twitter",
                                      },
                                    },
                                    [e("i", { staticClass: "fab fa-twitter" })]
                                  ),
                                ],
                                1
                              );
                            },
                            staticRenderFns: [],
                          },
                        }),
                      ],
                      1
                    ),
                    e(
                      "li",
                      { staticClass: "github-buttons" },
                      [
                        e("gh-btns-star", {
                          attrs: {
                            slug: "creativetimofficial/vue-material-dashboard",
                            "show-count": "",
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  2
                ),
              ]
            ),
          ]
        );
      },
      Pt = [],
      It = (a("159b"), a("bd8c")),
      Mt = a.n(It),
      Nt = a("f676");
    a("3a06");
    s["default"].use(Mt.a), s["default"].use(Nt["a"], { useCache: !0 });
    var Bt = {
        components: { SocialSharing: Mt.a },
        data: function () {
          return {
            documentationLink:
              "https://creativetimofficial.github.io/vue-material-dashboard/documentation",
            shareUrl:
              "https://www.creative-tim.com/product/vue-material-dashboard",
            buyUrl: "",
            freeUrl:
              "https://www.creative-tim.com/product/vue-material-dashboard",
            isOpen: !1,
            sidebarColors: [
              { color: "purple", active: !1 },
              { color: "blue", active: !1 },
              { color: "green", active: !0 },
              { color: "orange", active: !1 },
              { color: "red", active: !1 },
            ],
            sidebarImages: [
              { image: a("7d6d"), active: !1 },
              { image: a("9524"), active: !0 },
              { image: a("aeef"), active: !1 },
              { image: a("eb9e"), active: !1 },
            ],
          };
        },
        methods: {
          toggleDropDown: function () {
            this.isOpen = !this.isOpen;
          },
          closeDropDown: function () {
            this.isOpen = !1;
          },
          toggleList: function (t, e) {
            t.forEach(function (t) {
              t.active = !1;
            }),
              (e.active = !0);
          },
          updateValue: function (t, e) {
            this.$emit("update:".concat(t), e);
          },
          changeSidebarBackground: function (t) {
            this.$emit("update:color", t.color),
              this.toggleList(this.sidebarColors, t);
          },
          changeSidebarImage: function (t) {
            this.$emit("update:image", t.image),
              this.toggleList(this.sidebarImages, t);
          },
        },
      },
      Ft = Bt,
      Et = (a("900b"), Object(m["a"])(Ft, Dt, Pt, !1, null, null, null)),
      $t = Et.exports,
      Ut = {
        components: {
          TopNavbar: pt,
          DashboardContent: xt,
          ContentFooter: _t,
          MobileMenu: Tt,
          FixedPlugin: $t,
        },
        data: function () {
          return {
            sidebarBackground: "green",
            sidebarBackgroundImage: a("9524"),
          };
        },
      },
      Rt = Ut,
      Ht = Object(m["a"])(Rt, nt, lt, !1, null, null, null),
      Vt = Ht.exports,
      Jt = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "content" }, [
          e("div", { staticClass: "md-layout" }, [
            e(
              "div",
              {
                staticClass:
                  "md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33",
              },
              [
                e(
                  "chart-card",
                  {
                    attrs: {
                      "chart-data": t.dailySalesChart.data,
                      "chart-options": t.dailySalesChart.options,
                      "chart-type": "Line",
                      "data-background-color": "blue",
                    },
                  },
                  [
                    e("template", { slot: "content" }, [
                      e("h4", { staticClass: "title" }, [t._v("Daily Sales")]),
                      e("p", { staticClass: "category" }, [
                        e("span", { staticClass: "text-success" }, [
                          e("i", { staticClass: "fas fa-long-arrow-alt-up" }),
                          t._v(" 55% "),
                        ]),
                        t._v(" increase in today sales. "),
                      ]),
                    ]),
                    e("template", { slot: "footer" }, [
                      e(
                        "div",
                        { staticClass: "stats" },
                        [
                          e("md-icon", [t._v("access_time")]),
                          t._v(" updated 4 minutes ago "),
                        ],
                        1
                      ),
                    ]),
                  ],
                  2
                ),
              ],
              1
            ),
            e(
              "div",
              {
                staticClass:
                  "md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33",
              },
              [
                e(
                  "chart-card",
                  {
                    attrs: {
                      "chart-data": t.emailsSubscriptionChart.data,
                      "chart-options": t.emailsSubscriptionChart.options,
                      "chart-responsive-options":
                        t.emailsSubscriptionChart.responsiveOptions,
                      "chart-type": "Bar",
                      "data-background-color": "red",
                    },
                  },
                  [
                    e("template", { slot: "content" }, [
                      e("h4", { staticClass: "title" }, [
                        t._v("Email Subscription"),
                      ]),
                      e("p", { staticClass: "category" }, [
                        t._v("Last Campaign Performance"),
                      ]),
                    ]),
                    e("template", { slot: "footer" }, [
                      e(
                        "div",
                        { staticClass: "stats" },
                        [
                          e("md-icon", [t._v("access_time")]),
                          t._v(" updated 10 days ago "),
                        ],
                        1
                      ),
                    ]),
                  ],
                  2
                ),
              ],
              1
            ),
            e(
              "div",
              {
                staticClass:
                  "md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33",
              },
              [
                e(
                  "chart-card",
                  {
                    attrs: {
                      "chart-data": t.dataCompletedTasksChart.data,
                      "chart-options": t.dataCompletedTasksChart.options,
                      "chart-type": "Line",
                      "data-background-color": "green",
                    },
                  },
                  [
                    e("template", { slot: "content" }, [
                      e("h4", { staticClass: "title" }, [
                        t._v("Completed Tasks"),
                      ]),
                      e("p", { staticClass: "category" }, [
                        t._v("Last Campaign Performance"),
                      ]),
                    ]),
                    e("template", { slot: "footer" }, [
                      e(
                        "div",
                        { staticClass: "stats" },
                        [
                          e("md-icon", [t._v("access_time")]),
                          t._v(" campaign sent 26 minutes ago "),
                        ],
                        1
                      ),
                    ]),
                  ],
                  2
                ),
              ],
              1
            ),
            e(
              "div",
              {
                staticClass:
                  "md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25",
              },
              [
                e(
                  "stats-card",
                  { attrs: { "data-background-color": "green" } },
                  [
                    e(
                      "template",
                      { slot: "header" },
                      [e("md-icon", [t._v("store")])],
                      1
                    ),
                    e("template", { slot: "content" }, [
                      e("p", { staticClass: "category" }, [t._v("Revenue")]),
                      e("h3", { staticClass: "title" }, [t._v("$34,245")]),
                    ]),
                    e("template", { slot: "footer" }, [
                      e(
                        "div",
                        { staticClass: "stats" },
                        [
                          e("md-icon", [t._v("date_range")]),
                          t._v(" Last 24 Hours "),
                        ],
                        1
                      ),
                    ]),
                  ],
                  2
                ),
              ],
              1
            ),
            e(
              "div",
              {
                staticClass:
                  "md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25",
              },
              [
                e(
                  "stats-card",
                  { attrs: { "data-background-color": "orange" } },
                  [
                    e(
                      "template",
                      { slot: "header" },
                      [e("md-icon", [t._v("content_copy")])],
                      1
                    ),
                    e("template", { slot: "content" }, [
                      e("p", { staticClass: "category" }, [t._v("Used Space")]),
                      e("h3", { staticClass: "title" }, [
                        t._v(" 49/50 "),
                        e("small", [t._v("GB")]),
                      ]),
                    ]),
                    e("template", { slot: "footer" }, [
                      e(
                        "div",
                        { staticClass: "stats" },
                        [
                          e("md-icon", { staticClass: "text-danger" }, [
                            t._v("warning"),
                          ]),
                          e("a", { attrs: { href: "#pablo" } }, [
                            t._v("Get More Space..."),
                          ]),
                        ],
                        1
                      ),
                    ]),
                  ],
                  2
                ),
              ],
              1
            ),
            e(
              "div",
              {
                staticClass:
                  "md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25",
              },
              [
                e(
                  "stats-card",
                  { attrs: { "data-background-color": "red" } },
                  [
                    e(
                      "template",
                      { slot: "header" },
                      [e("md-icon", [t._v("info_outline")])],
                      1
                    ),
                    e("template", { slot: "content" }, [
                      e("p", { staticClass: "category" }, [
                        t._v("Fixed Issues"),
                      ]),
                      e("h3", { staticClass: "title" }, [t._v("75")]),
                    ]),
                    e("template", { slot: "footer" }, [
                      e(
                        "div",
                        { staticClass: "stats" },
                        [
                          e("md-icon", [t._v("local_offer")]),
                          t._v(" Tracked from Github "),
                        ],
                        1
                      ),
                    ]),
                  ],
                  2
                ),
              ],
              1
            ),
            e(
              "div",
              {
                staticClass:
                  "md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25",
              },
              [
                e(
                  "stats-card",
                  { attrs: { "data-background-color": "blue" } },
                  [
                    e("template", { slot: "header" }, [
                      e("i", { staticClass: "fab fa-twitter" }),
                    ]),
                    e("template", { slot: "content" }, [
                      e("p", { staticClass: "category" }, [t._v("Folowers")]),
                      e("h3", { staticClass: "title" }, [t._v("+245")]),
                    ]),
                    e("template", { slot: "footer" }, [
                      e(
                        "div",
                        { staticClass: "stats" },
                        [
                          e("md-icon", [t._v("update")]),
                          t._v(" Just Updated "),
                        ],
                        1
                      ),
                    ]),
                  ],
                  2
                ),
              ],
              1
            ),
            e(
              "div",
              {
                staticClass:
                  "md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50",
              },
              [
                e(
                  "md-card",
                  [
                    e(
                      "md-card-header",
                      { attrs: { "data-background-color": "orange" } },
                      [
                        e("h4", { staticClass: "title" }, [
                          t._v("Employees Stats"),
                        ]),
                        e("p", { staticClass: "category" }, [
                          t._v("New employees on 15th September, 2016"),
                        ]),
                      ]
                    ),
                    e(
                      "md-card-content",
                      [
                        e("ordered-table", {
                          attrs: { "table-header-color": "orange" },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
            e(
              "div",
              {
                staticClass:
                  "md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50",
              },
              [
                e(
                  "nav-tabs-card",
                  [
                    e(
                      "template",
                      { slot: "content" },
                      [
                        e("span", { staticClass: "md-nav-tabs-title" }, [
                          t._v("Tasks:"),
                        ]),
                        e(
                          "md-tabs",
                          {
                            staticClass: "md-success",
                            attrs: { "md-alignment": "left" },
                          },
                          [
                            e(
                              "md-tab",
                              {
                                attrs: {
                                  id: "tab-home",
                                  "md-label": "Bugs",
                                  "md-icon": "bug_report",
                                },
                              },
                              [e("nav-tabs-table")],
                              1
                            ),
                            e(
                              "md-tab",
                              {
                                attrs: {
                                  id: "tab-pages",
                                  "md-label": "Website",
                                  "md-icon": "code",
                                },
                              },
                              [e("nav-tabs-table")],
                              1
                            ),
                            e(
                              "md-tab",
                              {
                                attrs: {
                                  id: "tab-posts",
                                  "md-label": "server",
                                  "md-icon": "cloud",
                                },
                              },
                              [e("nav-tabs-table")],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  2
                ),
              ],
              1
            ),
          ]),
        ]);
      },
      Xt = [],
      Yt = function () {
        var t = this,
          e = t._self._c;
        return e(
          "md-card",
          [
            e(
              "md-card-header",
              {
                staticClass: "card-chart",
                attrs: { "data-background-color": t.dataBackgroundColor },
              },
              [e("div", { staticClass: "ct-chart", attrs: { id: t.chartId } })]
            ),
            e("md-card-content", [t._t("content")], 2),
            e(
              "md-card-actions",
              { attrs: { "md-alignment": "left" } },
              [t._t("footer")],
              2
            ),
          ],
          1
        );
      },
      Wt = [],
      Gt =
        (a("25f0"),
        {
          name: "chart-card",
          props: {
            footerText: { type: String, default: "" },
            headerTitle: { type: String, default: "Chart title" },
            chartType: { type: String, default: "Line" },
            chartOptions: {
              type: Object,
              default: function () {
                return {};
              },
            },
            chartResponsiveOptions: {
              type: Array,
              default: function () {
                return [];
              },
            },
            chartData: {
              type: Object,
              default: function () {
                return { labels: [], series: [] };
              },
            },
            dataBackgroundColor: { type: String, default: "" },
          },
          data: function () {
            return { chartId: "no-id" };
          },
          methods: {
            initChart: function (t) {
              var e = "#".concat(this.chartId);
              t[this.chartType](e, this.chartData, this.chartOptions);
            },
            updateChartId: function () {
              var t = new Date().getTime().toString(),
                e = this.getRandomInt(0, t);
              this.chartId = "div_".concat(e);
            },
            getRandomInt: function (t, e) {
              return Math.floor(Math.random() * (e - t + 1)) + t;
            },
          },
          mounted: function () {
            var t = this;
            this.updateChartId(),
              Promise.resolve()
                .then(a.t.bind(null, "ba48", 7))
                .then(function (e) {
                  var a = e.default || e;
                  t.$nextTick(function () {
                    t.initChart(a);
                  });
                });
          },
        }),
      Kt = Gt,
      Qt = Object(m["a"])(Kt, Yt, Wt, !1, null, null, null),
      qt = Qt.exports,
      Zt = function () {
        var t = this,
          e = t._self._c;
        return e(
          "md-card",
          { staticClass: "md-card-nav-tabs" },
          [e("md-card-content", [t._t("content")], 2)],
          1
        );
      },
      te = [],
      ee = { name: "nav-tabs-card" },
      ae = ee,
      se = Object(m["a"])(ae, Zt, te, !1, null, null, null),
      ie = se.exports,
      oe = function () {
        var t = this,
          e = t._self._c;
        return e(
          "md-card",
          { staticClass: "md-card-stats" },
          [
            e(
              "md-card-header",
              { attrs: { "data-background-color": t.dataBackgroundColor } },
              [t._t("header")],
              2
            ),
            e("md-card-content", [t._t("content")], 2),
            e(
              "md-card-actions",
              { attrs: { "md-alignment": "left" } },
              [t._t("footer")],
              2
            ),
          ],
          1
        );
      },
      ne = [],
      le = {
        name: "stats-card",
        props: { dataBackgroundColor: { type: String, default: "" } },
      },
      re = le,
      ce = Object(m["a"])(re, oe, ne, !1, null, null, null),
      de = ce.exports,
      ue = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          [
            e("md-table", {
              on: { "md-selected": t.onSelect },
              scopedSlots: t._u([
                {
                  key: "md-table-row",
                  fn: function (a) {
                    var s = a.item;
                    return e(
                      "md-table-row",
                      {
                        attrs: {
                          "md-selectable": "multiple",
                          "md-auto-select": "",
                        },
                      },
                      [
                        e("md-table-cell", [t._v(t._s(s.name))]),
                        e(
                          "md-table-cell",
                          [
                            e(
                              "md-button",
                              {
                                staticClass:
                                  "md-just-icon md-simple md-primary",
                              },
                              [
                                e("md-icon", [t._v("edit")]),
                                e(
                                  "md-tooltip",
                                  { attrs: { "md-direction": "top" } },
                                  [t._v("Edit")]
                                ),
                              ],
                              1
                            ),
                            e(
                              "md-button",
                              {
                                staticClass: "md-just-icon md-simple md-danger",
                              },
                              [
                                e("md-icon", [t._v("close")]),
                                e(
                                  "md-tooltip",
                                  { attrs: { "md-direction": "top" } },
                                  [t._v("Close")]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    );
                  },
                },
              ]),
              model: {
                value: t.users,
                callback: function (e) {
                  t.users = e;
                },
                expression: "users",
              },
            }),
          ],
          1
        );
      },
      me = [],
      pe = {
        name: "nav-tabs-table",
        data: function () {
          return {
            selected: [],
            users: [
              {
                name: 'Sign contract for "What are conference organizers afraid of?"',
              },
              {
                name: "Lines From Great Russian Literature? Or E-mails From My Boss?",
              },
              {
                name: "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
              },
            ],
          };
        },
        methods: {
          onSelect: function (t) {
            this.selected = t;
          },
        },
      },
      fe = pe,
      ve = Object(m["a"])(fe, ue, me, !1, null, null, null),
      he = ve.exports,
      ge = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          [
            e("md-table", {
              attrs: { "table-header-color": t.tableHeaderColor },
              scopedSlots: t._u([
                {
                  key: "md-table-row",
                  fn: function (a) {
                    var s = a.item;
                    return e(
                      "md-table-row",
                      {},
                      [
                        e("md-table-cell", { attrs: { "md-label": "ID" } }, [
                          t._v(t._s(s.id)),
                        ]),
                        e("md-table-cell", { attrs: { "md-label": "Name" } }, [
                          t._v(t._s(s.name)),
                        ]),
                        e(
                          "md-table-cell",
                          { attrs: { "md-label": "Salary" } },
                          [t._v(t._s(s.salary))]
                        ),
                        e(
                          "md-table-cell",
                          { attrs: { "md-label": "Country" } },
                          [t._v(t._s(s.country))]
                        ),
                        e("md-table-cell", { attrs: { "md-label": "City" } }, [
                          t._v(t._s(s.city)),
                        ]),
                      ],
                      1
                    );
                  },
                },
              ]),
              model: {
                value: t.users,
                callback: function (e) {
                  t.users = e;
                },
                expression: "users",
              },
            }),
          ],
          1
        );
      },
      be = [],
      _e = {
        name: "ordered-table",
        props: { tableHeaderColor: { type: String, default: "" } },
        data: function () {
          return {
            selected: [],
            users: [
              {
                id: 1,
                name: "Dakota Rice",
                salary: "$36,738",
                country: "Niger",
                city: "Oud-Turnhout",
              },
              {
                id: 2,
                name: "Minerva Hooper",
                salary: "$23,738",
                country: "Curaçao",
                city: "Sinaai-Waas",
              },
              {
                id: 3,
                name: "Sage Rodriguez",
                salary: "$56,142",
                country: "Netherlands",
                city: "Overland Park",
              },
              {
                id: 4,
                name: "Philip Chaney",
                salary: "$38,735",
                country: "Korea, South",
                city: "Gloucester",
              },
            ],
          };
        },
      },
      ye = _e,
      Ce = Object(m["a"])(ye, ge, be, !1, null, null, null),
      we = Ce.exports,
      je = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          [
            e("md-table", {
              attrs: { "table-header-color": t.tableHeaderColor },
              scopedSlots: t._u([
                {
                  key: "md-table-row",
                  fn: function (a) {
                    var s = a.item;
                    return e(
                      "md-table-row",
                      {},
                      [
                        e("md-table-cell", { attrs: { "md-label": "Name" } }, [
                          t._v(t._s(s.name)),
                        ]),
                        e(
                          "md-table-cell",
                          { attrs: { "md-label": "Country" } },
                          [t._v(t._s(s.country))]
                        ),
                        e("md-table-cell", { attrs: { "md-label": "City" } }, [
                          t._v(t._s(s.city)),
                        ]),
                        e(
                          "md-table-cell",
                          { attrs: { "md-label": "Salary" } },
                          [t._v(t._s(s.salary))]
                        ),
                      ],
                      1
                    );
                  },
                },
              ]),
              model: {
                value: t.users,
                callback: function (e) {
                  t.users = e;
                },
                expression: "users",
              },
            }),
          ],
          1
        );
      },
      ke = [],
      xe = {
        name: "simple-table",
        props: { tableHeaderColor: { type: String, default: "" } },
        data: function () {
          return {
            selected: [],
            users: [
              {
                name: "Dakota Rice",
                salary: "$36,738",
                country: "Niger",
                city: "Oud-Turnhout",
              },
              {
                name: "Minerva Hooper",
                salary: "$23,738",
                country: "Curaçao",
                city: "Sinaai-Waas",
              },
              {
                name: "Sage Rodriguez",
                salary: "$56,142",
                country: "Netherlands",
                city: "Overland Park",
              },
              {
                name: "Philip Chaney",
                salary: "$38,735",
                country: "Korea, South",
                city: "Gloucester",
              },
              {
                name: "Doris Greene",
                salary: "$63,542",
                country: "Malawi",
                city: "Feldkirchen in Kārnten",
              },
              {
                name: "Mason Porter",
                salary: "$78,615",
                country: "Chile",
                city: "Gloucester",
              },
            ],
          };
        },
      },
      Ae = xe,
      Se = Object(m["a"])(Ae, je, ke, !1, null, null, null),
      ze = Se.exports,
      Le = {
        components: {
          StatsCard: de,
          ChartCard: qt,
          NavTabsCard: ie,
          NavTabsTable: he,
          OrderedTable: we,
        },
        data: function () {
          return {
            dailySalesChart: {
              data: {
                labels: ["M", "T", "W", "T", "F", "S", "S"],
                series: [[12, 17, 7, 17, 23, 18, 38]],
              },
              options: {
                lineSmooth: this.$Chartist.Interpolation.cardinal({
                  tension: 0,
                }),
                low: 0,
                high: 50,
                chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
              },
            },
            dataCompletedTasksChart: {
              data: {
                labels: [
                  "12am",
                  "3pm",
                  "6pm",
                  "9pm",
                  "12pm",
                  "3am",
                  "6am",
                  "9am",
                ],
                series: [[230, 750, 450, 300, 280, 240, 200, 190]],
              },
              options: {
                lineSmooth: this.$Chartist.Interpolation.cardinal({
                  tension: 0,
                }),
                low: 0,
                high: 1e3,
                chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
              },
            },
            emailsSubscriptionChart: {
              data: {
                labels: [
                  "Ja",
                  "Fe",
                  "Ma",
                  "Ap",
                  "Mai",
                  "Ju",
                  "Jul",
                  "Au",
                  "Se",
                  "Oc",
                  "No",
                  "De",
                ],
                series: [
                  [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
                ],
              },
              options: {
                axisX: { showGrid: !1 },
                low: 0,
                high: 1e3,
                chartPadding: { top: 0, right: 5, bottom: 0, left: 0 },
              },
              responsiveOptions: [
                [
                  "screen and (max-width: 640px)",
                  {
                    seriesBarDistance: 5,
                    axisX: {
                      labelInterpolationFnc: function (t) {
                        return t[0];
                      },
                    },
                  },
                ],
              ],
            },
          };
        },
      },
      Oe = Le,
      Te = Object(m["a"])(Oe, Jt, Xt, !1, null, null, null),
      De = Te.exports,
      Pe = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "content" }, [
          e("div", { staticClass: "md-layout" }, [
            e(
              "div",
              { staticClass: "md-layout-item md-medium-size-100 md-size-66" },
              [
                e("edit-profile-form", {
                  attrs: { "data-background-color": "green" },
                }),
              ],
              1
            ),
            e(
              "div",
              { staticClass: "md-layout-item md-medium-size-100 md-size-33" },
              [e("user-card")],
              1
            ),
          ]),
        ]);
      },
      Ie = [],
      Me = function () {
        var t = this,
          e = t._self._c;
        return e(
          "md-card",
          { staticClass: "md-card-profile" },
          [
            e("div", { staticClass: "md-card-avatar" }, [
              e("img", { staticClass: "img", attrs: { src: t.cardUserImage } }),
            ]),
            e(
              "md-card-content",
              [
                e("h6", { staticClass: "category text-gray" }, [
                  t._v("CEO / Co-Founder"),
                ]),
                e("h4", { staticClass: "card-title" }, [t._v("Alec Thompson")]),
                e("p", { staticClass: "card-description" }, [
                  t._v(
                    " Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is... "
                  ),
                ]),
                e("md-button", { staticClass: "md-round md-success" }, [
                  t._v("Follow"),
                ]),
              ],
              1
            ),
          ],
          1
        );
      },
      Ne = [],
      Be = {
        name: "user-card",
        props: { cardUserImage: { type: String, default: a("a180") } },
        data: function () {
          return {};
        },
      },
      Fe = Be,
      Ee = Object(m["a"])(Fe, Me, Ne, !1, null, null, null),
      $e = Ee.exports,
      Ue = function () {
        var t = this,
          e = t._self._c;
        return e(
          "form",
          [
            e(
              "md-card",
              [
                e(
                  "md-card-header",
                  { attrs: { "data-background-color": t.dataBackgroundColor } },
                  [
                    e("h4", { staticClass: "title" }, [t._v("Edit Profile")]),
                    e("p", { staticClass: "category" }, [
                      t._v("Complete your profile"),
                    ]),
                  ]
                ),
                e("md-card-content", [
                  e("div", { staticClass: "md-layout" }, [
                    e(
                      "div",
                      {
                        staticClass:
                          "md-layout-item md-small-size-100 md-size-33",
                      },
                      [
                        e(
                          "md-field",
                          [
                            e("label", [t._v("Company (disabled)")]),
                            e("md-input", {
                              attrs: { disabled: "" },
                              model: {
                                value: t.disabled,
                                callback: function (e) {
                                  t.disabled = e;
                                },
                                expression: "disabled",
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e(
                      "div",
                      {
                        staticClass:
                          "md-layout-item md-small-size-100 md-size-33",
                      },
                      [
                        e(
                          "md-field",
                          [
                            e("label", [t._v("User Name")]),
                            e("md-input", {
                              attrs: { type: "text" },
                              model: {
                                value: t.username,
                                callback: function (e) {
                                  t.username = e;
                                },
                                expression: "username",
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e(
                      "div",
                      {
                        staticClass:
                          "md-layout-item md-small-size-100 md-size-33",
                      },
                      [
                        e(
                          "md-field",
                          [
                            e("label", [t._v("Email Address")]),
                            e("md-input", {
                              attrs: { type: "email" },
                              model: {
                                value: t.emailadress,
                                callback: function (e) {
                                  t.emailadress = e;
                                },
                                expression: "emailadress",
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e(
                      "div",
                      {
                        staticClass:
                          "md-layout-item md-small-size-100 md-size-50",
                      },
                      [
                        e(
                          "md-field",
                          [
                            e("label", [t._v("First Name")]),
                            e("md-input", {
                              attrs: { type: "text" },
                              model: {
                                value: t.firstname,
                                callback: function (e) {
                                  t.firstname = e;
                                },
                                expression: "firstname",
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e(
                      "div",
                      {
                        staticClass:
                          "md-layout-item md-small-size-100 md-size-50",
                      },
                      [
                        e(
                          "md-field",
                          [
                            e("label", [t._v("Last Name")]),
                            e("md-input", {
                              attrs: { type: "text" },
                              model: {
                                value: t.lastname,
                                callback: function (e) {
                                  t.lastname = e;
                                },
                                expression: "lastname",
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e(
                      "div",
                      {
                        staticClass:
                          "md-layout-item md-small-size-100 md-size-100",
                      },
                      [
                        e(
                          "md-field",
                          [
                            e("label", [t._v("Adress")]),
                            e("md-input", {
                              attrs: { type: "text" },
                              model: {
                                value: t.address,
                                callback: function (e) {
                                  t.address = e;
                                },
                                expression: "address",
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e(
                      "div",
                      {
                        staticClass:
                          "md-layout-item md-small-size-100 md-size-33",
                      },
                      [
                        e(
                          "md-field",
                          [
                            e("label", [t._v("City")]),
                            e("md-input", {
                              attrs: { type: "text" },
                              model: {
                                value: t.city,
                                callback: function (e) {
                                  t.city = e;
                                },
                                expression: "city",
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e(
                      "div",
                      {
                        staticClass:
                          "md-layout-item md-small-size-100 md-size-33",
                      },
                      [
                        e(
                          "md-field",
                          [
                            e("label", [t._v("Country")]),
                            e("md-input", {
                              attrs: { type: "text" },
                              model: {
                                value: t.country,
                                callback: function (e) {
                                  t.country = e;
                                },
                                expression: "country",
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e(
                      "div",
                      {
                        staticClass:
                          "md-layout-item md-small-size-100 md-size-33",
                      },
                      [
                        e(
                          "md-field",
                          [
                            e("label", [t._v("Postal Code")]),
                            e("md-input", {
                              attrs: { type: "number" },
                              model: {
                                value: t.code,
                                callback: function (e) {
                                  t.code = e;
                                },
                                expression: "code",
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e(
                      "div",
                      { staticClass: "md-layout-item md-size-100" },
                      [
                        e(
                          "md-field",
                          { attrs: { maxlength: "5" } },
                          [
                            e("label", [t._v("About Me")]),
                            e("md-textarea", {
                              model: {
                                value: t.aboutme,
                                callback: function (e) {
                                  t.aboutme = e;
                                },
                                expression: "aboutme",
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e(
                      "div",
                      { staticClass: "md-layout-item md-size-100 text-right" },
                      [
                        e(
                          "md-button",
                          { staticClass: "md-raised md-success" },
                          [t._v("Update Profile")]
                        ),
                      ],
                      1
                    ),
                  ]),
                ]),
              ],
              1
            ),
          ],
          1
        );
      },
      Re = [],
      He = {
        name: "edit-profile-form",
        props: { dataBackgroundColor: { type: String, default: "" } },
        data: function () {
          return {
            username: null,
            disabled: null,
            emailadress: null,
            lastname: null,
            firstname: null,
            address: null,
            city: null,
            country: null,
            code: null,
            aboutme:
              "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.",
          };
        },
      },
      Ve = He,
      Je = Object(m["a"])(Ve, Ue, Re, !1, null, null, null),
      Xe = Je.exports,
      Ye = { components: { EditProfileForm: Xe, UserCard: $e } },
      We = Ye,
      Ge = Object(m["a"])(We, Pe, Ie, !1, null, null, null),
      Ke = Ge.exports,
      Qe = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "content" }, [
          e("div", { staticClass: "md-layout" }, [
            e(
              "div",
              {
                staticClass:
                  "md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100",
              },
              [
                e(
                  "md-card",
                  [
                    e(
                      "md-card-header",
                      { attrs: { "data-background-color": "green" } },
                      [
                        e("h4", { staticClass: "title" }, [
                          t._v("Simple Table"),
                        ]),
                        e("p", { staticClass: "category" }, [
                          t._v("Here is a subtitle for this table"),
                        ]),
                      ]
                    ),
                    e(
                      "md-card-content",
                      [
                        e("simple-table", {
                          attrs: { "table-header-color": "green" },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
            e(
              "div",
              {
                staticClass:
                  "md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100",
              },
              [
                e(
                  "md-card",
                  { staticClass: "md-card-plain" },
                  [
                    e(
                      "md-card-header",
                      { attrs: { "data-background-color": "green" } },
                      [
                        e("h4", { staticClass: "title" }, [
                          t._v("Table on Plain Background"),
                        ]),
                        e("p", { staticClass: "category" }, [
                          t._v("Here is a subtitle for this table"),
                        ]),
                      ]
                    ),
                    e("md-card-content", [e("ordered-table")], 1),
                  ],
                  1
                ),
              ],
              1
            ),
          ]),
        ]);
      },
      qe = [],
      Ze = { components: { OrderedTable: we, SimpleTable: ze } },
      ta = Ze,
      ea = Object(m["a"])(ta, Qe, qe, !1, null, null, null),
      aa = ea.exports,
      sa = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "content" }, [
          e("div", { staticClass: "md-layout" }, [
            e(
              "div",
              { staticClass: "md-layout-item" },
              [
                e(
                  "md-card",
                  [
                    e(
                      "md-card-header",
                      { attrs: { "data-background-color": "green" } },
                      [
                        e("h4", { staticClass: "title" }, [
                          t._v("Material Dashboard Heading"),
                        ]),
                        e("p", { staticClass: "category" }, [
                          t._v("Created using Roboto Font Family"),
                        ]),
                      ]
                    ),
                    e("md-card-content", [
                      e("div", { attrs: { id: "typography" } }, [
                        e("div", { staticClass: "title" }, [
                          e("h2", [t._v("Typography")]),
                        ]),
                        e("div", { staticClass: "row" }, [
                          e("div", { staticClass: "tim-typo" }, [
                            e("h1", [
                              e("span", { staticClass: "tim-note" }, [
                                t._v("Header 1"),
                              ]),
                              t._v("The Life of Material Dashboard "),
                            ]),
                          ]),
                          e("div", { staticClass: "tim-typo" }, [
                            e("h2", [
                              e("span", { staticClass: "tim-note" }, [
                                t._v("Header 2"),
                              ]),
                              t._v("The life of Material Dashboard "),
                            ]),
                          ]),
                          e("div", { staticClass: "tim-typo" }, [
                            e("h3", [
                              e("span", { staticClass: "tim-note" }, [
                                t._v("Header 3"),
                              ]),
                              t._v("The life of Material Dashboard "),
                            ]),
                          ]),
                          e("div", { staticClass: "tim-typo" }, [
                            e("h4", [
                              e("span", { staticClass: "tim-note" }, [
                                t._v("Header 4"),
                              ]),
                              t._v("The life of Material Dashboard "),
                            ]),
                          ]),
                          e("div", { staticClass: "tim-typo" }, [
                            e("h5", [
                              e("span", { staticClass: "tim-note" }, [
                                t._v("Header 5"),
                              ]),
                              t._v("The life of Material Dashboard "),
                            ]),
                          ]),
                          e("div", { staticClass: "tim-typo" }, [
                            e("h6", [
                              e("span", { staticClass: "tim-note" }, [
                                t._v("Header 6"),
                              ]),
                              t._v("The life of Material Dashboard "),
                            ]),
                          ]),
                          e("div", { staticClass: "tim-typo" }, [
                            e("p", [
                              e("span", { staticClass: "tim-note" }, [
                                t._v("Paragraph"),
                              ]),
                              t._v(
                                " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. "
                              ),
                            ]),
                          ]),
                          e("div", { staticClass: "tim-typo" }, [
                            e("span", { staticClass: "tim-note" }, [
                              t._v("Quote"),
                            ]),
                            e("blockquote", [
                              e("p", [
                                t._v(
                                  " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. "
                                ),
                              ]),
                              e("small", [t._v(" Kanye West, Musician ")]),
                            ]),
                          ]),
                          e("div", { staticClass: "tim-typo" }, [
                            e("span", { staticClass: "tim-note" }, [
                              t._v("Muted Text"),
                            ]),
                            e("p", { staticClass: "text-muted" }, [
                              t._v(
                                " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... "
                              ),
                            ]),
                          ]),
                          e("div", { staticClass: "tim-typo" }, [
                            e("span", { staticClass: "tim-note" }, [
                              t._v("Primary Text"),
                            ]),
                            e("p", { staticClass: "text-primary" }, [
                              t._v(
                                " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... "
                              ),
                            ]),
                          ]),
                          e("div", { staticClass: "tim-typo" }, [
                            e("span", { staticClass: "tim-note" }, [
                              t._v("Info Text"),
                            ]),
                            e("p", { staticClass: "text-info" }, [
                              t._v(
                                " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... "
                              ),
                            ]),
                          ]),
                          e("div", { staticClass: "tim-typo" }, [
                            e("span", { staticClass: "tim-note" }, [
                              t._v("Success Text"),
                            ]),
                            e("p", { staticClass: "text-success" }, [
                              t._v(
                                " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... "
                              ),
                            ]),
                          ]),
                          e("div", { staticClass: "tim-typo" }, [
                            e("span", { staticClass: "tim-note" }, [
                              t._v("Warning Text"),
                            ]),
                            e("p", { staticClass: "text-warning" }, [
                              t._v(
                                " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... "
                              ),
                            ]),
                          ]),
                          e("div", { staticClass: "tim-typo" }, [
                            e("span", { staticClass: "tim-note" }, [
                              t._v("Danger Text"),
                            ]),
                            e("p", { staticClass: "text-danger" }, [
                              t._v(
                                " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... "
                              ),
                            ]),
                          ]),
                          e("div", { staticClass: "tim-typo" }, [
                            e("h2", [
                              e("span", { staticClass: "tim-note" }, [
                                t._v("Small Tag"),
                              ]),
                              t._v(" Header with small subtitle "),
                              e("br"),
                              e("small", [
                                t._v('Use "small" tag for the headers'),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ],
                  1
                ),
              ],
              1
            ),
          ]),
        ]);
      },
      ia = [],
      oa = { props: { dataBackgroundColor: { type: String, default: "" } } },
      na = oa,
      la = Object(m["a"])(na, sa, ia, !1, null, null, null),
      ra = la.exports,
      ca = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "content" }, [
          e("div", { staticClass: "md-layout" }, [
            e(
              "div",
              { staticClass: "md-layout-item" },
              [
                e(
                  "md-card",
                  { staticClass: "md-card-plain" },
                  [
                    e(
                      "md-card-header",
                      { attrs: { "data-background-color": "green" } },
                      [
                        e("h4", { staticClass: "title" }, [
                          t._v("Material Design Icons"),
                        ]),
                        e("p", { staticClass: "category" }, [
                          t._v(" Handcrafted by our friends from "),
                          e(
                            "a",
                            {
                              attrs: {
                                target: "_blank",
                                href: "https://design.google.com/icons/",
                              },
                            },
                            [t._v("Google")]
                          ),
                        ]),
                      ]
                    ),
                    e("md-card-content", [
                      e("div", { staticClass: "iframe-container hidden-sm" }, [
                        e(
                          "iframe",
                          {
                            attrs: {
                              src: "https://vuematerial.io/components/icon",
                            },
                          },
                          [
                            e("p", [
                              t._v("Your browser does not support iframes."),
                            ]),
                          ]
                        ),
                      ]),
                      e("div", { staticClass: "hidden-md" }, [
                        e("h5", [
                          t._v(
                            " The icons are visible on Desktop mode inside an iframe. Since the iframe is not working on Mobile and Tablets please visit the icons on their original page on Google. Check the "
                          ),
                          e(
                            "a",
                            {
                              attrs: {
                                href: "https://design.google.com/icons/",
                                target: "_blank",
                              },
                            },
                            [t._v("Material Icons")]
                          ),
                        ]),
                      ]),
                    ]),
                  ],
                  1
                ),
              ],
              1
            ),
          ]),
        ]);
      },
      da = [],
      ua = {},
      ma = ua,
      pa = Object(m["a"])(ma, ca, da, !1, null, null, null),
      fa = pa.exports,
      va = function () {
        var t = this,
          e = t._self._c;
        return e("div", { attrs: { id: "map" } });
      },
      ha = [],
      ga = "AIzaSyB2Yno10-YTnLjjn_Vtk0V8cdcY5lC4plU",
      ba = a("7a6e"),
      _a = new ba["a"](ga),
      ya = {
        mounted: function () {
          _a.load().then(function (t) {
            var e = new t.maps.LatLng(40.748817, -73.985428),
              a = {
                zoom: 13,
                center: e,
                scrollwheel: !1,
                styles: [
                  {
                    featureType: "water",
                    stylers: [
                      { saturation: 43 },
                      { lightness: -11 },
                      { hue: "#0088ff" },
                    ],
                  },
                  {
                    featureType: "road",
                    elementType: "geometry.fill",
                    stylers: [
                      { hue: "#ff0000" },
                      { saturation: -100 },
                      { lightness: 99 },
                    ],
                  },
                  {
                    featureType: "road",
                    elementType: "geometry.stroke",
                    stylers: [{ color: "#808080" }, { lightness: 54 }],
                  },
                  {
                    featureType: "landscape.man_made",
                    elementType: "geometry.fill",
                    stylers: [{ color: "#ece2d9" }],
                  },
                  {
                    featureType: "poi.park",
                    elementType: "geometry.fill",
                    stylers: [{ color: "#ccdca1" }],
                  },
                  {
                    featureType: "road",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#767676" }],
                  },
                  {
                    featureType: "road",
                    elementType: "labels.text.stroke",
                    stylers: [{ color: "#ffffff" }],
                  },
                  { featureType: "poi", stylers: [{ visibility: "off" }] },
                  {
                    featureType: "landscape.natural",
                    elementType: "geometry.fill",
                    stylers: [{ visibility: "on" }, { color: "#b8cb93" }],
                  },
                  { featureType: "poi.park", stylers: [{ visibility: "on" }] },
                  {
                    featureType: "poi.sports_complex",
                    stylers: [{ visibility: "on" }],
                  },
                  {
                    featureType: "poi.medical",
                    stylers: [{ visibility: "on" }],
                  },
                  {
                    featureType: "poi.business",
                    stylers: [{ visibility: "simplified" }],
                  },
                ],
              },
              s = new t.maps.Map(document.getElementById("map"), a),
              i = new t.maps.Marker({ position: e, title: "Hello World!" });
            i.setMap(s);
          });
        },
      },
      Ca = ya,
      wa = Object(m["a"])(Ca, va, ha, !1, null, null, null),
      ja = wa.exports,
      ka = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "content" }, [
          e("div", { staticClass: "md-layout" }, [
            e(
              "div",
              { staticClass: "md-layout-item" },
              [
                e(
                  "md-card",
                  [
                    e(
                      "md-card-header",
                      { attrs: { "data-background-color": "green" } },
                      [
                        e("h4", { staticClass: "title" }, [
                          t._v("Notifications"),
                        ]),
                        e("p", { staticClass: "category" }, [
                          t._v(" Handcrafted by us with "),
                          e("i", { staticClass: "fa fa-heart heart" }),
                        ]),
                      ]
                    ),
                    e("md-card-content", [
                      e("div", { staticClass: "md-layout" }, [
                        e(
                          "div",
                          { staticClass: "md-layout-item md-medium-size-100" },
                          [
                            e("h5", [t._v("Notifications Style")]),
                            e("div", { staticClass: "alert alert-info" }, [
                              e("span", [t._v("This is a plain notification")]),
                            ]),
                            e("div", { staticClass: "alert alert-info" }, [
                              e(
                                "button",
                                {
                                  staticClass: "close",
                                  attrs: {
                                    type: "button",
                                    "aria-hidden": "true",
                                  },
                                },
                                [t._v(" × ")]
                              ),
                              e("span", [
                                t._v(
                                  "This is a notification with close button."
                                ),
                              ]),
                            ]),
                            e(
                              "div",
                              {
                                staticClass: "alert alert-info alert-with-icon",
                                attrs: { "data-notify": "container" },
                              },
                              [
                                e(
                                  "button",
                                  {
                                    staticClass: "close",
                                    attrs: {
                                      type: "button",
                                      "aria-hidden": "true",
                                    },
                                  },
                                  [t._v(" × ")]
                                ),
                                e(
                                  "i",
                                  {
                                    staticClass: "material-icons",
                                    attrs: { "data-notify": "icon" },
                                  },
                                  [t._v("add_alert")]
                                ),
                                e(
                                  "span",
                                  { attrs: { "data-notify": "message" } },
                                  [
                                    t._v(
                                      "This is a notification with close button and icon."
                                    ),
                                  ]
                                ),
                              ]
                            ),
                            e(
                              "div",
                              {
                                staticClass: "alert alert-info alert-with-icon",
                                attrs: { "data-notify": "container" },
                              },
                              [
                                e(
                                  "button",
                                  {
                                    staticClass: "close",
                                    attrs: {
                                      type: "button",
                                      "aria-hidden": "true",
                                    },
                                  },
                                  [t._v(" × ")]
                                ),
                                e(
                                  "i",
                                  {
                                    staticClass: "material-icons",
                                    attrs: { "data-notify": "icon" },
                                  },
                                  [t._v("add_alert")]
                                ),
                                e(
                                  "span",
                                  { attrs: { "data-notify": "message" } },
                                  [
                                    t._v(
                                      "This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style."
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                        e(
                          "div",
                          { staticClass: "md-layout-item md-medium-size-100" },
                          [
                            e("h5", [t._v("Notification states")]),
                            e("div", { staticClass: "alert alert-info" }, [
                              e(
                                "button",
                                {
                                  staticClass: "close",
                                  attrs: {
                                    type: "button",
                                    "aria-hidden": "true",
                                  },
                                },
                                [t._v(" × ")]
                              ),
                              e("span", [
                                e("b", [t._v(" Info - ")]),
                                t._v(
                                  ' This is a regular notification made with ".alert-info"'
                                ),
                              ]),
                            ]),
                            e("div", { staticClass: "alert alert-success" }, [
                              e(
                                "button",
                                {
                                  staticClass: "close",
                                  attrs: {
                                    type: "button",
                                    "aria-hidden": "true",
                                  },
                                },
                                [t._v(" × ")]
                              ),
                              e("span", [
                                e("b", [t._v(" Success - ")]),
                                t._v(
                                  ' This is a regular notification made with ".alert-success"'
                                ),
                              ]),
                            ]),
                            e("div", { staticClass: "alert alert-warning" }, [
                              e(
                                "button",
                                {
                                  staticClass: "close",
                                  attrs: {
                                    type: "button",
                                    "aria-hidden": "true",
                                  },
                                },
                                [t._v(" × ")]
                              ),
                              e("span", [
                                e("b", [t._v(" Warning - ")]),
                                t._v(
                                  ' This is a regular notification made with ".alert-warning"'
                                ),
                              ]),
                            ]),
                            e("div", { staticClass: "alert alert-danger" }, [
                              e(
                                "button",
                                {
                                  staticClass: "close",
                                  attrs: {
                                    type: "button",
                                    "aria-hidden": "true",
                                  },
                                },
                                [t._v(" × ")]
                              ),
                              e("span", [
                                e("b", [t._v(" Danger - ")]),
                                t._v(
                                  ' This is a regular notification made with ".alert-danger"'
                                ),
                              ]),
                            ]),
                            e("div", { staticClass: "alert alert-primary" }, [
                              e(
                                "button",
                                {
                                  staticClass: "close",
                                  attrs: {
                                    type: "button",
                                    "aria-hidden": "true",
                                  },
                                },
                                [t._v(" × ")]
                              ),
                              e("span", [
                                e("b", [t._v(" Primary - ")]),
                                t._v(
                                  ' This is a regular notification made with ".alert-primary"'
                                ),
                              ]),
                            ]),
                          ]
                        ),
                        e(
                          "div",
                          { staticClass: "md-layout-item md-size-100" },
                          [
                            e(
                              "div",
                              { staticClass: "places-buttons text-center" },
                              [
                                e("h5", { staticClass: "text-center" }, [
                                  t._v(" Notifications Places "),
                                  e("p", { staticClass: "category" }, [
                                    t._v("Click to view notifications"),
                                  ]),
                                ]),
                                e(
                                  "md-button",
                                  {
                                    staticClass: "md-primary",
                                    on: {
                                      click: function (e) {
                                        return t.notifyVue("top", "left");
                                      },
                                    },
                                  },
                                  [t._v("Top Left")]
                                ),
                                e(
                                  "md-button",
                                  {
                                    staticClass: "md-primary",
                                    on: {
                                      click: function (e) {
                                        return t.notifyVue("top", "center");
                                      },
                                    },
                                  },
                                  [t._v("Top Center")]
                                ),
                                e(
                                  "md-button",
                                  {
                                    staticClass: "md-primary",
                                    on: {
                                      click: function (e) {
                                        return t.notifyVue("top", "right");
                                      },
                                    },
                                  },
                                  [t._v("Top Right")]
                                ),
                                e(
                                  "md-button",
                                  {
                                    staticClass: "md-primary",
                                    on: {
                                      click: function (e) {
                                        return t.notifyVue("bottom", "left");
                                      },
                                    },
                                  },
                                  [t._v("Bottom Left")]
                                ),
                                e(
                                  "md-button",
                                  {
                                    staticClass: "md-primary",
                                    on: {
                                      click: function (e) {
                                        return t.notifyVue("bottom", "center");
                                      },
                                    },
                                  },
                                  [t._v("Bottom Center")]
                                ),
                                e(
                                  "md-button",
                                  {
                                    staticClass: "md-primary",
                                    on: {
                                      click: function (e) {
                                        return t.notifyVue("bottom", "right");
                                      },
                                    },
                                  },
                                  [t._v("Bottom Right")]
                                ),
                              ],
                              1
                            ),
                          ]
                        ),
                      ]),
                    ]),
                  ],
                  1
                ),
              ],
              1
            ),
          ]),
        ]);
      },
      xa = [],
      Aa = {
        data: function () {
          return {
            type: ["", "info", "success", "warning", "danger"],
            notifications: { topCenter: !1 },
          };
        },
        methods: {
          notifyVue: function (t, e) {
            var a = Math.floor(4 * Math.random() + 1);
            this.$notify({
              message:
                "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer.",
              icon: "add_alert",
              horizontalAlign: e,
              verticalAlign: t,
              type: this.type[a],
            });
          },
        },
      },
      Sa = Aa,
      za = Object(m["a"])(Sa, ka, xa, !1, null, null, null),
      La = za.exports,
      Oa = function () {
        var t = this,
          e = t._self._c;
        return e("router-view");
      },
      Ta = [],
      Da = {},
      Pa = Object(m["a"])(Da, Oa, Ta, !1, null, null, null),
      Ia = Pa.exports;
    function Ma(t) {
      document.dir = "ar" === t ? "rtl" : "ltr";
    }
    function Na(t) {
      document.documentElement.lang = t;
    }
    var Ba = function () {
        var t = this,
          e = t._self._c;
        return e("div", [
          e("div", { staticClass: "tools" }, [
            e("h2", [t._v(t._s(t.$t("page_titles.landing.title1")))]),
            e("h4", [t._v(t._s(t.$t("page_titles.landing.text1")))]),
            e(
              "div",
              { staticClass: "tools_container" },
              t._l(t.$t("features"), function (t, a) {
                return e(
                  "div",
                  { key: a, staticClass: "tools__item" },
                  [e("feature-title", { attrs: { item: { item: t } } })],
                  1
                );
              }),
              0
            ),
          ]),
          e("div", { staticClass: "solution" }, [
            e("div", { staticClass: "block__container" }, [
              e("div", { staticClass: "solution-header" }, [
                t._v(
                  " " + t._s(t.$t("page_titles.landing.section1.title")) + " "
                ),
              ]),
              e("div", { staticClass: "md-layout" }, [
                e(
                  "div",
                  { staticClass: "md-layout-item" },
                  [
                    e(
                      "md-card",
                      [
                        e("md-card-media", [
                          e("img", {
                            attrs: { src: a("59f0"), alt: "People" },
                          }),
                          e("div", { staticClass: "card-tip" }, [
                            e("div", { staticClass: "card-tip-date" }, [
                              t._v("10"),
                            ]),
                            e("div", { staticClass: "card-tip-month" }, [
                              t._v("NOV"),
                            ]),
                          ]),
                        ]),
                        e("md-card-header", [
                          e("div", { staticClass: "md-title" }, [
                            t._v(
                              " " +
                                t._s(
                                  t.$t("page_titles.landing.section1.title1")
                                ) +
                                " "
                            ),
                          ]),
                          e("div", { staticClass: "md-subhead" }, [
                            t._v(
                              " " +
                                t._s(
                                  t.$t("page_titles.landing.section1.text1")
                                ) +
                                " "
                            ),
                          ]),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "md-layout-item" },
                  [
                    e(
                      "md-card",
                      [
                        e("md-card-media", [
                          e("img", {
                            attrs: { src: a("cfa5"), alt: "People" },
                          }),
                          e("div", { staticClass: "card-tip" }, [
                            e("div", { staticClass: "card-tip-date" }, [
                              t._v("10"),
                            ]),
                            e("div", { staticClass: "card-tip-month" }, [
                              t._v("NOV"),
                            ]),
                          ]),
                        ]),
                        e("md-card-header", [
                          e("div", { staticClass: "md-title" }, [
                            t._v(
                              " " +
                                t._s(
                                  t.$t("page_titles.landing.section1.title2")
                                ) +
                                " "
                            ),
                          ]),
                          e("div", { staticClass: "md-subhead" }, [
                            t._v(
                              " " +
                                t._s(
                                  t.$t("page_titles.landing.section1.text2")
                                ) +
                                " "
                            ),
                          ]),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "md-layout-item" },
                  [
                    e(
                      "md-card",
                      [
                        e("md-card-media", [
                          e("img", {
                            attrs: { src: a("757a"), alt: "People" },
                          }),
                          e("div", { staticClass: "card-tip" }, [
                            e("div", { staticClass: "card-tip-date" }, [
                              t._v("10"),
                            ]),
                            e("div", { staticClass: "card-tip-month" }, [
                              t._v("NOV"),
                            ]),
                          ]),
                        ]),
                        e("md-card-header", [
                          e("div", { staticClass: "md-title" }, [
                            t._v(
                              " " +
                                t._s(
                                  t.$t("page_titles.landing.section1.title3")
                                ) +
                                " "
                            ),
                          ]),
                          e("div", { staticClass: "md-subhead" }, [
                            t._v(
                              " " +
                                t._s(
                                  t.$t("page_titles.landing.section1.text3")
                                ) +
                                " "
                            ),
                          ]),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ]),
            ]),
          ]),
          e("div", { staticClass: "premium" }, [
            e("div", { staticClass: "block__container" }, [
              e("div", { staticClass: "md-layout" }, [
                e("div", { staticClass: "md-layout-item" }, [
                  e("div", { staticClass: "premium_title" }, [
                    t._v(
                      " " +
                        t._s(t.$t("page_titles.landing.section2.title")) +
                        " "
                    ),
                  ]),
                  e("div", { staticClass: "premium_text" }, [
                    e("div", [
                      t._m(0),
                      e("span", [
                        t._v(
                          t._s(t.$t("page_titles.landing.section2.item1")) + " "
                        ),
                      ]),
                    ]),
                    e("div", [
                      t._m(1),
                      e("span", [
                        t._v(t._s(t.$t("page_titles.landing.section2.item2"))),
                      ]),
                    ]),
                    e("div", [
                      t._m(2),
                      e("span", [
                        t._v(
                          " " + t._s(t.$t("page_titles.landing.section2.item3"))
                        ),
                      ]),
                    ]),
                  ]),
                  e("div", [
                    e(
                      "a",
                      { staticClass: "btn premium_btn", attrs: { href: "" } },
                      [
                        t._v(
                          t._s(t.$t("page_titles.landing.section2.button")) +
                            " "
                        ),
                      ]
                    ),
                  ]),
                ]),
                t._m(3),
              ]),
            ]),
          ]),
        ]);
      },
      Fa = [
        function () {
          var t = this,
            e = t._self._c;
          return e("span", [e("img", { attrs: { src: a("0fe1"), alt: "" } })]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("span", [e("img", { attrs: { src: a("0fe1"), alt: "" } })]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("span", [e("img", { attrs: { src: a("0fe1"), alt: "" } })]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "md-layout-item" }, [
            e("div", { staticClass: "free-img" }, [
              e("img", { attrs: { src: a("7f99"), alt: "" } }),
            ]),
          ]);
        },
      ],
      Ea = a("eb1f"),
      $a = [
        {
          name: "mergepdf",
          title: "Merge PDF",
          description:
            "Combine PDFs in the order you want with the easiest PDF merger available",
          file: "merge_pdf.svg",
        },
        {
          name: "splitpdf",
          title: "Split PDF",
          description:
            "Separate one page or a whole set for easy conversion into independent PDF files",
          file: "split_pdf.svg",
        },
        {
          name: "compresspdf",
          title: "Compress PDF",
          description:
            "Reduce file size while optimizing for maximal PDF quality",
          file: "compress_pdf.svg",
        },
        {
          name: "pdftoword",
          title: "PDF to Word",
          description:
            "Easily convert your PDF files into easy to edit DOC and DOCX documents. The converted WORD document is almost 100% accurate.",
          file: "pdf_word.svg",
        },
        {
          name: "wordtopdf",
          title: "Word to PDF",
          description:
            "Make DOC and DOCX files easy to read by converting them to PDF.",
          file: "word_pdf.svg",
        },
        {
          name: "sign_pdf",
          title: "Sign PDF",
          description:
            "Sign yourself or request electronic signatures from others.",
          file: "sign_pdf.svg",
        },
        {
          name: "edit_pdf",
          title: "Edit PDF",
          description:
            "Add text, images, shapes or freehand annotations to a PDF document. Edit the size, font, and color of the added content.",
          file: "edit_pdf.svg",
        },
        {
          name: "rotate_pdf",
          title: "Rotate PDF",
          description:
            "Rotate your PDFs the way you need them. You can even rotate multiple PDFs at once!",
          file: "rotate_pdf.svg",
        },
      ],
      Ua = {
        components: { FeatureTitle: Ea["a"] },
        data: function () {
          return { features: $a };
        },
      },
      Ra = Ua,
      Ha = (a("bcc1"), Object(m["a"])(Ra, Ba, Fa, !1, null, "5270d039", null)),
      Va = Ha.exports;
    s["default"].use(ot["a"]);
    var Ja = it.locale,
      Xa = [
        { path: "/", redirect: Ja },
        {
          path: "/:locale",
          component: Ia,
          children: [
            { path: "", component: Va, name: "allfertures" },
            {
              path: "/:locale/signup",
              component: function () {
                return a.e("login").then(a.bind(null, "89a8"));
              },
              name: "signup",
            },
            {
              path: "/:locale/mergepdf",
              component: function () {
                return Promise.all([
                  a.e("compresspdf~download~mergepdf~splitpdf"),
                  a.e("compresspdf~mergepdf~splitpdf"),
                  a.e("download~mergepdf~splitpdf"),
                  a.e("mergepdf"),
                ]).then(a.bind(null, "7e3e"));
              },
              name: "mergepdf",
            },
            {
              path: "/:locale/rotatepdf",
              component: function () {
                return Promise.all([
                  a.e("compresspdf~download~mergepdf~splitpdf"),
                  a.e("compresspdf~mergepdf~splitpdf"),
                  a.e("download~mergepdf~splitpdf"),
                  a.e("mergepdf"),
                ]).then(a.bind(null, "98d8"));
              },
              name: "rotatepdf",
            },
            {
              path: "/:locale/download/:param",
              component: function () {
                return Promise.all([
                  a.e("compresspdf~download~mergepdf~splitpdf"),
                  a.e("download~mergepdf~splitpdf"),
                  a.e("download"),
                ]).then(a.bind(null, "9793"));
              },
              name: "download",
            },
            {
              path: "/:locale/splitpdf",
              component: function () {
                return Promise.all([
                  a.e("compresspdf~download~mergepdf~splitpdf"),
                  a.e("compresspdf~mergepdf~splitpdf"),
                  a.e("download~mergepdf~splitpdf"),
                  a.e("splitpdf"),
                ]).then(a.bind(null, "778d"));
              },
              name: "splitpdf",
            },
            {
              path: "/:locale/compresspdf",
              component: function () {
                return Promise.all([
                  a.e("compresspdf~download~mergepdf~splitpdf"),
                  a.e("compresspdf~mergepdf~splitpdf"),
                  a.e("compresspdf"),
                ]).then(a.bind(null, "c6bc"));
              },
              name: "compresspdf",
            },
            {
              path: "/:locale/deleted",
              component: function () {
                return a.e("deleted").then(a.bind(null, "d54a"));
              },
              name: "deleted",
            },
            {
              path: "/:locale/wordtopdf",
              component: function () {
                return Promise.all([
                  a.e("compresspdf~download~mergepdf~splitpdf"),
                  a.e("compresspdf~mergepdf~splitpdf"),
                  a.e("compresspdf"),
                ]).then(a.bind(null, "e71e"));
              },
              name: "wordtopdf",
            },
            {
              path: "/:locale/pdftoword",
              component: function () {
                return Promise.all([
                  a.e("compresspdf~download~mergepdf~splitpdf"),
                  a.e("compresspdf~mergepdf~splitpdf"),
                  a.e("compresspdf"),
                ]).then(a.bind(null, "0118"));
              },
              name: "pdftoword",
            },
            {
              path: "/:locale/editpdf",
              component: function () {
                return Promise.all([
                  a.e("compresspdf~download~mergepdf~splitpdf"),
                  a.e("compresspdf~mergepdf~splitpdf"),
                  a.e("compresspdf"),
                ]).then(a.bind(null, "c010"));
              },
              name: "editpdf",
            },
            {
              path: "/:locale/signpdf",
              component: function () {
                return Promise.all([
                  a.e("compresspdf~download~mergepdf~splitpdf"),
                  a.e("compresspdf~mergepdf~splitpdf"),
                  a.e("compresspdf"),
                ]).then(a.bind(null, "1ba5"));
              },
              name: "signpdf",
            },
          ],
        },
        {
          path: "/profile",
          component: Vt,
          redirect: "/dashboard",
          children: [
            { path: "dashboard", name: "Dashboard", component: De },
            { path: "user", name: "User Profile", component: Ke },
            { path: "table", name: "Table List", component: aa },
            { path: "typography", name: "Typography", component: ra },
            { path: "icons", name: "Icons", component: fa },
            {
              path: "maps",
              name: "Maps",
              meta: { hideFooter: !0 },
              component: ja,
            },
            { path: "notifications", name: "Notifications", component: La },
          ],
        },
      ],
      Ya = new ot["a"]({ mode: "history", base: "/", routes: Xa });
    Ya.beforeEach(function (t, e, a) {
      if (t.params.locale !== e.params.locale) {
        var s = t.params.locale;
        st(s).then(function () {
          Na(s), Ma(s);
        }),
          a();
      } else a();
    });
    var Wa = Ya,
      Ga = a("cee4"),
      Ka = Ga["a"].create({ baseURL: "http://127.0.0.1:5000/api" }),
      Qa = {
        install: function (t) {
          Object.defineProperty(t.prototype, "$axios", { value: Ka });
        },
      },
      qa = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          {
            directives: [
              {
                name: "click-outside",
                rawName: "v-click-outside",
                value: t.closeDropDown,
                expression: "closeDropDown",
              },
            ],
            staticClass: "dropdown",
            class: { open: t.isOpen },
            on: { click: t.toggleDropDown },
          },
          [
            t._t("title", function () {
              return [
                e(
                  "a",
                  {
                    staticClass: "dropdown-toggle",
                    attrs: {
                      "data-toggle": "dropdown",
                      href: "javascript:void(0)",
                    },
                  },
                  [
                    e("i", { class: t.icon }),
                    e("p", { staticClass: "notification" }, [
                      t._v(" " + t._s(t.title) + " "),
                      e("b", { staticClass: "caret" }),
                    ]),
                  ]
                ),
              ];
            }),
            t._t("default"),
          ],
          2
        );
      },
      Za = [],
      ts = {
        name: "drop-down",
        props: { title: String, icon: String },
        data: function () {
          return { isOpen: !1 };
        },
        methods: {
          toggleDropDown: function () {
            this.isOpen = !this.isOpen;
          },
          closeDropDown: function () {
            this.isOpen = !1;
          },
        },
      },
      es = ts,
      as = Object(m["a"])(es, qa, Za, !1, null, null, null),
      ss = as.exports,
      is = {
        install: function (t) {
          t.component("drop-down", ss);
        },
      },
      os = is,
      ns = a("c7db"),
      ls = {
        install: function (t) {
          t.directive("click-outside", ns["directive"]);
        },
      },
      rs = ls,
      cs =
        (a("c740"),
        a("a434"),
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            { staticClass: "notifications" },
            [
              e(
                "transition-group",
                { attrs: { name: "list" } },
                t._l(t.notifications, function (a) {
                  return e("notification", {
                    key: a.timestamp.getTime(),
                    attrs: {
                      message: a.message,
                      icon: a.icon,
                      type: a.type,
                      timestamp: a.timestamp,
                      "vertical-align": a.verticalAlign,
                      "horizontal-align": a.horizontalAlign,
                    },
                    on: { "on-close": t.removeNotification },
                  });
                }),
                1
              ),
            ],
            1
          );
        }),
      ds = [],
      us = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          {
            staticClass: "alert open alert-with-icon",
            class: [t.verticalAlign, t.horizontalAlign, t.alertType],
            style: t.customPosition,
            attrs: {
              "data-notify": "container",
              role: "alert",
              "data-notify-position": "top-center",
            },
            on: {
              click: function (e) {
                return t.close();
              },
            },
          },
          [
            e(
              "button",
              {
                staticClass: "close",
                attrs: {
                  type: "button",
                  "aria-hidden": "true",
                  "data-notify": "dismiss",
                },
                on: { click: t.close },
              },
              [t._v(" × ")]
            ),
            e(
              "i",
              {
                staticClass: "material-icons",
                attrs: { "data-notify": "icon" },
              },
              [t._v(t._s(t.icon))]
            ),
            e("span", {
              attrs: { "data-notify": "message" },
              domProps: { innerHTML: t._s(t.message) },
            }),
          ]
        );
      },
      ms = [],
      ps =
        (a("a9e3"),
        a("4de4"),
        {
          name: "notification",
          props: {
            message: String,
            icon: String,
            verticalAlign: { type: String, default: "top" },
            horizontalAlign: { type: String, default: "center" },
            type: { type: String, default: "info" },
            timeout: { type: Number, default: 2500 },
            timestamp: {
              type: Date,
              default: function () {
                return new Date();
              },
            },
          },
          data: function () {
            return { elmHeight: 0 };
          },
          computed: {
            hasIcon: function () {
              return this.icon && this.icon.length > 0;
            },
            alertType: function () {
              return "alert-".concat(this.type);
            },
            customPosition: function () {
              var t = this,
                e = 20,
                a = this.elmHeight + 10,
                s = this.$notifications.state.filter(function (e) {
                  return (
                    e.horizontalAlign === t.horizontalAlign &&
                    e.verticalAlign === t.verticalAlign &&
                    e.timestamp <= t.timestamp
                  );
                }).length,
                i = (s - 1) * a + e,
                o = {};
              return (
                "top" === this.verticalAlign
                  ? (o.top = "".concat(i, "px"))
                  : (o.bottom = "".concat(i, "px")),
                o
              );
            },
          },
          methods: {
            close: function () {
              this.$emit("on-close", this.timestamp);
            },
          },
          mounted: function () {
            (this.elmHeight = this.$el.clientHeight),
              this.timeout && setTimeout(this.close, this.timeout);
          },
        }),
      fs = ps,
      vs = (a("96c7"), Object(m["a"])(fs, us, ms, !1, null, "41890b97", null)),
      hs = vs.exports,
      gs = {
        components: { Notification: hs },
        data: function () {
          return { notifications: this.$notifications.state };
        },
        methods: {
          removeNotification: function (t) {
            this.$notifications.removeNotification(t);
          },
        },
      },
      bs = gs,
      _s = (a("9a1b"), Object(m["a"])(bs, cs, ds, !1, null, null, null)),
      ys = _s.exports,
      Cs = {
        state: [],
        removeNotification: function (t) {
          var e = this.state.findIndex(function (e) {
            return e.timestamp === t;
          });
          -1 !== e && this.state.splice(e, 1);
        },
        addNotification: function (t) {
          (t.timestamp = new Date()),
            t.timestamp.setMilliseconds(
              t.timestamp.getMilliseconds() + this.state.length
            ),
            this.state.push(t);
        },
        notify: function (t) {
          var e = this;
          Array.isArray(t)
            ? t.forEach(function (t) {
                e.addNotification(t);
              })
            : this.addNotification(t);
        },
      },
      ws = {
        install: function (t) {
          t.mixin({
            data: function () {
              return { notificationStore: Cs };
            },
            methods: {
              notify: function (t) {
                this.notificationStore.notify(t);
              },
            },
          }),
            Object.defineProperty(t.prototype, "$notify", {
              get: function () {
                return this.$root.notify;
              },
            }),
            Object.defineProperty(t.prototype, "$notifications", {
              get: function () {
                return this.$root.notificationStore;
              },
            }),
            t.component("Notifications", ys);
        },
      },
      js = ws,
      ks = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          {
            staticClass: "sidebar",
            style: t.sidebarStyle,
            attrs: {
              "data-color": t.sidebarItemColor,
              "data-image": t.sidebarBackgroundImage,
            },
          },
          [
            e("div", { staticClass: "logo" }, [
              e(
                "a",
                { staticClass: "simple-text logo-mini", attrs: { href: "#" } },
                [
                  e("div", { staticClass: "logo-img" }, [
                    e("img", { attrs: { src: t.imgLogo, alt: "" } }),
                  ]),
                ]
              ),
              e(
                "a",
                {
                  staticClass: "simple-text logo-normal",
                  attrs: {
                    href: "https://www.creative-tim.com/product/vue-material-dashboard",
                    target: "_blank",
                  },
                },
                [t._v(" " + t._s(t.title) + " ")]
              ),
            ]),
            e(
              "div",
              { staticClass: "sidebar-wrapper" },
              [
                t._t("content"),
                e(
                  "md-list",
                  { staticClass: "nav" },
                  [
                    t._t("default", function () {
                      return t._l(t.sidebarLinks, function (t, a) {
                        return e("sidebar-link", {
                          key: t.name + a,
                          attrs: { to: t.path, link: t },
                        });
                      });
                    }),
                  ],
                  2
                ),
              ],
              2
            ),
          ]
        );
      },
      xs = [],
      As =
        (a("9911"),
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "li",
            { staticClass: "md-list-item" },
            [
              e(
                "router-link",
                t._b(
                  {
                    staticClass:
                      "md-list-item-router md-list-item-container md-button-clean",
                    on: { click: t.hideSidebar },
                  },
                  "router-link",
                  t.$attrs,
                  !1
                ),
                [
                  e(
                    "div",
                    { staticClass: "md-list-item-content md-ripple" },
                    [
                      t._t("default", function () {
                        return [
                          e("md-icon", [t._v(t._s(t.link.icon))]),
                          e("p", [t._v(t._s(t.link.name))]),
                        ];
                      }),
                    ],
                    2
                  ),
                ]
              ),
            ],
            1
          );
        }),
      Ss = [],
      zs = {
        inject: { autoClose: { default: !0 } },
        props: {
          link: {
            type: [String, Object],
            default: function () {
              return { name: "", path: "", icon: "" };
            },
          },
          tag: { type: String, default: "router-link" },
        },
        methods: {
          hideSidebar: function () {
            this.autoClose &&
              this.$sidebar &&
              !0 === this.$sidebar.showSidebar &&
              this.$sidebar.displaySidebar(!1);
          },
        },
      },
      Ls = zs,
      Os = Object(m["a"])(Ls, As, Ss, !1, null, null, null),
      Ts = Os.exports,
      Ds = {
        components: { SidebarLink: Ts },
        props: {
          title: { type: String, default: "Vue MD" },
          sidebarBackgroundImage: { type: String, default: a("9524") },
          imgLogo: { type: String, default: a("fdbc") },
          sidebarItemColor: {
            type: String,
            default: "green",
            validator: function (t) {
              var e = ["", "purple", "blue", "green", "orange", "red"];
              return -1 !== e.indexOf(t);
            },
          },
          sidebarLinks: {
            type: Array,
            default: function () {
              return [];
            },
          },
          autoClose: { type: Boolean, default: !0 },
        },
        provide: function () {
          return { autoClose: this.autoClose };
        },
        computed: {
          sidebarStyle: function () {
            return {
              backgroundImage: "url(".concat(this.sidebarBackgroundImage, ")"),
            };
          },
        },
      },
      Ps = Ds,
      Is = (a("c657"), Object(m["a"])(Ps, ks, xs, !1, null, null, null)),
      Ms = Is.exports,
      Ns = {
        showSidebar: !1,
        displaySidebar: function (t) {
          this.showSidebar = t;
        },
      },
      Bs = {
        install: function (t) {
          t.mixin({
            data: function () {
              return { sidebarStore: Ns };
            },
          }),
            Object.defineProperty(t.prototype, "$sidebar", {
              get: function () {
                return this.$root.sidebarStore;
              },
            }),
            t.component("side-bar", Ms),
            t.component("sidebar-link", Ts);
        },
      },
      Fs = Bs,
      Es = a("43f9"),
      $s = a.n(Es),
      Us =
        (a("43f4"),
        a("9e17"),
        a("54ba"),
        {
          install: function (t) {
            t.use(Fs), t.use($s.a);
          },
        }),
      Rs = a("ba48"),
      Hs = a.n(Rs);
    (s["default"].prototype.$Chartist = Hs.a),
      s["default"].use(Us),
      s["default"].use(os),
      s["default"].use(rs),
      s["default"].use(js),
      s["default"].use(Qa),
      s["default"].use(E.a),
      s["default"].use(U.a),
      s["default"].use(H.a),
      (s["default"].config.productionTip = !1),
      s["default"].use(B["a"], { size: 5, icon_color: "white" }),
      new s["default"]({
        el: "#app",
        router: Wa,
        i18n: it,
        store: r["a"],
        render: function (t) {
          return t(N);
        },
      });
  },
  "59f0": function (t, e, a) {
    t.exports = a.p + "img/solution1.641092e1.png";
  },
  "5ef3": function (t, e, a) {
    t.exports = a.p + "img/split_range.d53267ef.svg";
  },
  "679b": function (t, e, a) {
    t.exports = a.p + "img/ppt_pdf.9e5f737c.svg";
  },
  "6cc1": function (t, e, a) {
    "use strict";
    var s = function () {
        var t = this,
          e = t._self._c;
        return e(
          "router-link",
          { attrs: { to: t.getTo() } },
          [t._t("default")],
          2
        );
      },
      i = [],
      o =
        (a("99af"),
        a("ac1f"),
        a("5319"),
        {
          props: ["to"],
          methods: {
            getTo: function () {
              if ("string" !== typeof this.to) return this.to;
              var t = this.$route.params.locale;
              return "/".concat(t, "/").concat(this.to.replace(/^\/|\/$/g, ""));
            },
          },
        }),
      n = o,
      l = a("2877"),
      r = Object(l["a"])(n, s, i, !1, null, null, null);
    e["a"] = r.exports;
  },
  "6f86": function (t, e, a) {},
  7313: function (t, e, a) {
    "use strict";
    a("d57a");
  },
  "757a": function (t, e, a) {
    t.exports = a.p + "img/solution3.132ee123.png";
  },
  "75a9": function (t, e, a) {
    t.exports = a.p + "img/pdf_to_word.d73781c0.svg";
  },
  "78e5": function (t, e, a) {
    t.exports = a.p + "img/watermark.3db372e8.svg";
  },
  "7a49": function (t, e, a) {
    "use strict";
    a("8a92");
  },
  "7d6d": function (t, e, a) {
    t.exports = a.p + "img/sidebar-1.23832d31.jpg";
  },
  "7f07": function (t, e, a) {
    t.exports = a.p + "img/protect_pdf.8b460cb5.svg";
  },
  "7f99": function (t, e, a) {
    t.exports = a.p + "img/free.f9909b6e.png";
  },
  "816b": function (t, e, a) {},
  "87d4": function (t, e, a) {
    t.exports = a.p + "img/sign_pdf.8d1ea642.svg";
  },
  "88e2": function (t, e, a) {
    t.exports = a.p + "img/ocr_pdf.a8139e95.svg";
  },
  "894e": function (t, e, a) {},
  "8a92": function (t, e, a) {},
  "8d4f": function (t, e, a) {
    t.exports = a.p + "img/jpg_pdf.4db727d5.svg";
  },
  "8e8e": function (t, e, a) {
    t.exports = a.p + "img/rotate_pdf.f85f7267.svg";
  },
  "8eb9": function (t, e, a) {
    "use strict";
    a("33c1");
  },
  "900b": function (t, e, a) {
    "use strict";
    a("aa81");
  },
  9524: function (t, e, a) {
    t.exports = a.p + "img/sidebar-2.32103624.jpg";
  },
  "96c7": function (t, e, a) {
    "use strict";
    a("816b");
  },
  "9a1b": function (t, e, a) {
    "use strict";
    a("9bb5");
  },
  "9bb5": function (t, e, a) {},
  "9d87": function (t, e, a) {
    var s = {
      "./compress_pdf.svg": "2eae",
      "./dropbox_icon.svg": "b48f",
      "./edit_pdf.svg": "a8c3",
      "./excel_pdf.svg": "15b3",
      "./html_pdf.svg": "f40a",
      "./jpg_pdf.svg": "8d4f",
      "./merge_pdf.svg": "5296",
      "./ocr_pdf.svg": "88e2",
      "./organize_pdf.svg": "50e8",
      "./page_numbers.svg": "51c8",
      "./pdf_excel.svg": "ed21",
      "./pdf_jpg.svg": "e8cb",
      "./pdf_pdfa.svg": "30df",
      "./pdf_powerpoint.svg": "24e8",
      "./pdf_to_word.svg": "75a9",
      "./pdf_word.svg": "fda5",
      "./ppt_pdf.svg": "679b",
      "./protect_pdf.svg": "7f07",
      "./repair_pdf.svg": "1ed9",
      "./rotate_pdf.svg": "8e8e",
      "./scan_pdf.svg": "a2c7",
      "./sign_pdf.svg": "87d4",
      "./split_pdf.svg": "070a",
      "./split_range.svg": "5ef3",
      "./unlock_pdf.svg": "edfb",
      "./watermark.svg": "78e5",
      "./word_pdf.svg": "d975",
    };
    function i(t) {
      var e = o(t);
      return a(e);
    }
    function o(t) {
      if (!a.o(s, t)) {
        var e = new Error("Cannot find module '" + t + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      return s[t];
    }
    (i.keys = function () {
      return Object.keys(s);
    }),
      (i.resolve = o),
      (t.exports = i),
      (i.id = "9d87");
  },
  "9e17": function (t, e, a) {},
  a180: function (t, e, a) {
    t.exports = a.p + "img/marc.aba54d65.jpg";
  },
  a2c7: function (t, e, a) {
    t.exports = a.p + "img/scan_pdf.236d784b.svg";
  },
  a8c3: function (t, e, a) {
    t.exports = a.p + "img/edit_pdf.74b5436e.svg";
  },
  aa81: function (t, e, a) {},
  aeef: function (t, e, a) {
    t.exports = a.p + "img/sidebar-3.3a54f533.jpg";
  },
  b48f: function (t, e, a) {
    t.exports = a.p + "img/dropbox_icon.0344dd30.svg";
  },
  bcc1: function (t, e, a) {
    "use strict";
    a("38fd");
  },
  c657: function (t, e, a) {
    "use strict";
    a("5308");
  },
  cbaf: function (t, e, a) {
    "use strict";
    a("6f86");
  },
  cfa5: function (t, e, a) {
    t.exports = a.p + "img/solution2.24be0afa.png";
  },
  d57a: function (t, e, a) {},
  d975: function (t, e, a) {
    t.exports = a.p + "img/word_pdf.a458dc42.svg";
  },
  da68: function (t, e, a) {},
  e8cb: function (t, e, a) {
    t.exports = a.p + "img/pdf_jpg.1fcfec58.svg";
  },
  eb1f: function (t, e, a) {
    "use strict";
    a("b0c0"), a("a4d3"), a("e01a");
    var s = function () {
        var t = this,
          e = t._self._c;
        return e(
          "md-content",
          {},
          [
            e("LocalizedLink", { attrs: { to: t.item.item.name } }, [
              e("div", [
                e("img", {
                  attrs: { src: a("9d87")("./".concat(t.item.item.file)) },
                }),
              ]),
              e("div", [
                e("h3", [t._v(" " + t._s(t.item.item.title) + " ")]),
                e("p", [t._v(" " + t._s(t.item.item.description) + " ")]),
              ]),
            ]),
          ],
          1
        );
      },
      i = [],
      o = (a("14d9"), a("6cc1")),
      n = {
        components: { LocalizedLink: o["a"] },
        name: "feature-title",
        props: { item: Object },
        data: function () {
          return {};
        },
        methods: {
          redirect: function (t) {
            this.$router.push({ name: t });
          },
        },
      },
      l = n,
      r = (a("cbaf"), a("2877")),
      c = Object(r["a"])(l, s, i, !1, null, "8757eb9c", null);
    e["a"] = c.exports;
  },
  eb9e: function (t, e, a) {
    t.exports = a.p + "img/sidebar-4.3b7e38ed.jpg";
  },
  ed21: function (t, e, a) {
    t.exports = a.p + "img/pdf_excel.bdd4e6d3.svg";
  },
  edfb: function (t, e, a) {
    t.exports = a.p + "img/unlock_pdf.1c4f4201.svg";
  },
  f40a: function (t, e, a) {
    t.exports = a.p + "img/html_pdf.6913f798.svg";
  },
  fda5: function (t, e, a) {
    t.exports = a.p + "img/pdf_word.d73781c0.svg";
  },
  fdbc: function (t, e) {
    t.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOsAAAAyCAYAAAC9OywyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAf+SURBVHgB7Z0/cBRVHMe/e0mBM84YOq3YlNgYtNJCD6i0EITOQk5SOmMCNI7yJ/xzbJTAjCUhUNApYIEVyaXRxpFQQaMsFXQJM85AQbK+770sd3O57Ns/b3ffcr/PzBvCZZPb233f9/v7Nh4SEE5jDK9jAt7oPqyvN+F5vnp5DMJQ4p1b8yCUzmjcN7VIG1Pq9kyD4gxD9aXcJ0Gogi3FGp5UIl33ZiAWVBCcYKBYwxONC0qo0xAEwRk2iTX8rnEFodeCIAhO0ej9T8eieiJUQXCRl5Y1/HakhRDi+gqCo3Qsa/gNfIzgFARBcBbtBo82Dimr6kMQBGfRYpU4VRCcZzQ8PrI/kVXdpsqtn/8CbDcfmohnq8D1A8DqIwiCYEYlmMKmMq3mI8c/0sMWYzuAyTvA5b3ZBXv2BTLD91wJgCf3gH+XgAe3kv/ssX/0+WfhuVqkVh7pfx8u6REsIROH79i9J72cGE35A2rJz466GAg2Bi9GW41lZCPPecRxWo2ZvtdaalzZ4vi2GruRjthzV3fEewdJ2PYGrDPm5xds5vfeoQcn+/tfq/cPgL+vAXevFnsu9FDe2mgKi4TG96ZoF84Mq6fBCzKxMfZvvBZAC+QmtJjrRlMNJm1PwxJcPieQFk6sXw8jM5MLXctUpWB74XnsOQm8+4X6bJP6M5b53rs4DmnBLp6B0AnNaLWiCT+P+jGjxlM1ZmEBijVb769NYbki2Ohc6F5SsLSyZRMtGC5cCzfwoUVLN+QI6mdludi0kd2tf0kDrhAJNmssaJsDl5W7mixCsI5r18INWmoson4bS3i+N4D8pVF3xEpcm6Qf/4TKEMEOgiHbDdQPH/q8cy00qVN+hWPTJaYbuzLgd9BivjVhFkKUAU8bv271vtt36M/H99+W4L7x2ANzwNxeZOL+LT3c4CIGu7C8CT50QiYJPI5tsVnjwC+RjbxuLBeaCznev0CxMsMaTci0GVZO0vFm/pjx7rV4oTE+3H0SsfBzpBbrNfPP7FJx6Z5TxS0Y5PE9fS5uwIkaNwl86EzwFMwuI+PAeWSLX+dRHS10s9ypKU6sH0x1JyKF2iu820cHl4KSTF6bMPPqG+rHRdUxKaL7v+nYeOe++GO5oDzMaF3rQwBtLVmqYWzqxxxLK0DrOoP6MaOGWkU7nzMVxcWsvWJ8sy9RQ9eMk7V/sEmhbP68FP99egdJXNYssDHi+kGz1bTdkOI2AXQzgclqTqG+MLvtIyXFiJVubO8EZynCVR4nCEWKaAjpJUld1R8asZIAOsaNgxOsiXrCc0+d2S7GDe4veVC4dPXcSXZ04cJi4vlTFErUdhhnPasqI1UHXWJaz7gJzaRNG+lYTHk8LfxnsI8PnSFO3JJYjFh3frr5tU9+1BPyuWM17bf3mY8p45y5kNkWK7PPaS0ye6XduEc8iTa67YeD8JGeJtIRoDia0Im3I0kOLkaszOT2QwvGXTtzDiVKOm1+Bhe9rLZDk0CyxM1sX+RIA+9Pma2W8ZhKCAXHJ7nhTTXdOCbK+DmNpSj7MStX8t6M7kJPPEbLwbphlXDS8xyZYf3qL7MIynLdVwzzsqgkl9uYTLwPt2HG1xR7E1rXpukg+5a1N5nEcg2TJ6+N6XoloSUb/7Cc3lf2+OalLLFuN5SsXAsfysG0QgVwH1pOxiKmDTPGziy7lrXjVva4XVFBnnXV3jorj+OeUNYYXW6nWyxxy5op0bVS0nm4hSlQLzjzZw0mqALDMUbXya5l3XOi+zXjHtZN6W7S/R2UIKGwn6nr/ftROAcXl4USt6qZ6qjDaVlN1ihAetK2+9m48AG0YHNtRLAnVrq3vVaVbh2tpwl3khldKFRukSuLTnulQawuXqdiacE8sRMUyTcxj2rguTLrewUZsSPWzsbtU5tf64fWgTXLqFOJSZPAoUnI87t9rPx9rJMJYusHGWLn+m5k9wHjo3EDpK+xVs08kn22geQXKwUXt5WLFoFJGoqSjeWuQYHyvKIWyDLdTV471p9NcTsf++LitSsGH+beYNJGPZmB/mwpa2p5xcrJdniAUDnh2XP7x6VqY63OM42Cwd+jhWerYVVPY2D56OBcsgTbwlkMAXR52bE0DbP7y0mVaeeKI0QZYj/ND+UTK4X4ZLmbPHJFpBHBUjWxHuP3QZ1DjOO5wDE+TVo3pUtexeNl7LPVI1mi/axMJiVNvrB2GSAbLWSHdVMbE5u/g22Gd5Ei4ZTfDWaMx44lxqF8iJo8Nyh919BW0CtYqGXMOQhbu2QomBlkJ3OCB9o9t2WFAnQzxInIL1Za0J/fG9bSQnFQqPLQtH6YUU1benGZNrTHcSHJwXaaIkSodnFbqFXdbMYCSfa51o1ZJGtJzGhZGW/Jg7zs41rMP5gstc08RMkkY6N7jWHCiYmfZtxB2cTKhFKShgchGfUQ6QZhWTWkANqaUqTD4LoxfmXCyd/qAPeebhjx7BW9P1FjSFQ2Yn23Tt1Ja14b9llFd/8qF4Nl1LeOmhVjhtgLj4+ESILtvyIXBzPLfDaRxMJuEYaBd359HEIlJLesFI5LG8eF8vEayi1dh1AN7rrBglsoq4q1tXkIleHWn88Q3CX0Tns/1GKz9yuLiFVIgHfR+16satWIGyzEE+Kqd/7FNITKEcsqxKAs6vm1FgQnELEKAwhXETaOeOfEorqEuMFCD0qkaFzEf2uz3uy6FLkdQ8Q61FCczPA22EJ1U4l0WUTqLv8DCkZkuikOR3oAAAAASUVORK5CYII=";
  },
});
//# sourceMappingURL=app.fedf2c37.js.map
