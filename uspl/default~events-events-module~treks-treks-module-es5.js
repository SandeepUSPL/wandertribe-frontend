(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~events-events-module~treks-treks-module"],{

/***/ "./src/app/demand/store/demand.actions.ts":
/*!************************************************!*\
  !*** ./src/app/demand/store/demand.actions.ts ***!
  \************************************************/
/*! exports provided: TRY_FETCH_TREK, SET_ALL_TREK, SET_ACTIVE_TREK, SET_SELECTED_TREK_DETAILS, TRY_FETCH_EVENT, SET_ALL_EVENT, SET_ACTIVE_EVENT, SET_SELECTED_EVENT_DETAILS, SET_PRICE, TryFetchEvent, SetActiveEvent, SetAllEvent, SetActiveEventDetails, SetAllTrek, SetActiveTrek, TryFetchTrek, SetPrice, SetActiveTrekDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_FETCH_TREK", function() { return TRY_FETCH_TREK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ALL_TREK", function() { return SET_ALL_TREK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ACTIVE_TREK", function() { return SET_ACTIVE_TREK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SELECTED_TREK_DETAILS", function() { return SET_SELECTED_TREK_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_FETCH_EVENT", function() { return TRY_FETCH_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ALL_EVENT", function() { return SET_ALL_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ACTIVE_EVENT", function() { return SET_ACTIVE_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SELECTED_EVENT_DETAILS", function() { return SET_SELECTED_EVENT_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PRICE", function() { return SET_PRICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryFetchEvent", function() { return TryFetchEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetActiveEvent", function() { return SetActiveEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetAllEvent", function() { return SetAllEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetActiveEventDetails", function() { return SetActiveEventDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetAllTrek", function() { return SetAllTrek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetActiveTrek", function() { return SetActiveTrek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryFetchTrek", function() { return TryFetchTrek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPrice", function() { return SetPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetActiveTrekDetails", function() { return SetActiveTrekDetails; });
/* harmony import */ var _roles_business_treks_treks_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../roles/business/treks/treks.model */ "./src/app/roles/business/treks/treks.model.ts");

var TRY_FETCH_TREK = 'TRY_FETCH_TREK';
var SET_ALL_TREK = 'SET_ALL_TREK';
var SET_ACTIVE_TREK = 'SET_ACTIVE_TREK';
var SET_SELECTED_TREK_DETAILS = 'SET_SELECTED_TREK_DETAILS';
var TRY_FETCH_EVENT = 'TRY_FETCH_EVENT';
var SET_ALL_EVENT = 'SET_ALL_EVENT';
var SET_ACTIVE_EVENT = 'SET_ACTIVE_EVENT';
var SET_SELECTED_EVENT_DETAILS = 'SET_SELECTED_EVENT_DETAILS';
var SET_PRICE = 'SET_PRICE';
var TryFetchEvent = /** @class */ (function () {
    function TryFetchEvent(payload) {
        this.payload = payload;
        this.type = TRY_FETCH_EVENT;
    }
    TryFetchEvent.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return TryFetchEvent;
}());

var SetActiveEvent = /** @class */ (function () {
    function SetActiveEvent(payload) {
        this.payload = payload;
        this.type = SET_ACTIVE_EVENT;
    }
    SetActiveEvent.ctorParameters = function () { return [
        { type: _roles_business_treks_treks_model__WEBPACK_IMPORTED_MODULE_0__["TreksModel"] }
    ]; };
    return SetActiveEvent;
}());

var SetAllEvent = /** @class */ (function () {
    function SetAllEvent(payload) {
        this.payload = payload;
        this.type = SET_ALL_EVENT;
    }
    SetAllEvent.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return SetAllEvent;
}());

var SetActiveEventDetails = /** @class */ (function () {
    function SetActiveEventDetails(payload) {
        this.payload = payload;
        this.type = SET_SELECTED_EVENT_DETAILS;
    }
    SetActiveEventDetails.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return SetActiveEventDetails;
}());

var SetAllTrek = /** @class */ (function () {
    function SetAllTrek(payload) {
        this.payload = payload;
        this.type = SET_ALL_TREK;
    }
    SetAllTrek.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return SetAllTrek;
}());

var SetActiveTrek = /** @class */ (function () {
    function SetActiveTrek(payload) {
        this.payload = payload;
        this.type = SET_ACTIVE_TREK;
    }
    SetActiveTrek.ctorParameters = function () { return [
        { type: _roles_business_treks_treks_model__WEBPACK_IMPORTED_MODULE_0__["TreksModel"] }
    ]; };
    return SetActiveTrek;
}());

var TryFetchTrek = /** @class */ (function () {
    function TryFetchTrek(payload) {
        this.payload = payload;
        this.type = TRY_FETCH_TREK;
    }
    TryFetchTrek.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return TryFetchTrek;
}());

var SetPrice = /** @class */ (function () {
    function SetPrice(payload) {
        this.payload = payload;
        this.type = SET_PRICE;
    }
    SetPrice.ctorParameters = function () { return [
        { type: Number }
    ]; };
    return SetPrice;
}());

var SetActiveTrekDetails = /** @class */ (function () {
    function SetActiveTrekDetails(payload) {
        this.payload = payload;
        this.type = SET_SELECTED_TREK_DETAILS;
    }
    SetActiveTrekDetails.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return SetActiveTrekDetails;
}());



/***/ }),

/***/ "./src/app/roles/business/treks/treks.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/roles/business/treks/treks.model.ts ***!
  \*****************************************************/
/*! exports provided: TreksModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreksModel", function() { return TreksModel; });
var TreksModel = /** @class */ (function () {
    function TreksModel(_id, company, todoPlan, location, trekDates, totalDays, languages, difficultyLevel, ownerDescription, naturalDisasterResponsePlan, emergencyResponsePlan, cancellationPolicy, medicalResponsePlan, trekDayDetails, trekImage, provided, carry, pricePerPerson, minPeople, maxPeople, trekTitle, delFlg) {
        this._id = _id;
        this.company = company;
        this.todoPlan = todoPlan;
        this.location = location;
        this.trekDates = trekDates;
        this.totalDays = totalDays;
        this.languages = languages;
        this.difficultyLevel = difficultyLevel;
        this.ownerDescription = ownerDescription;
        this.naturalDisasterResponsePlan = naturalDisasterResponsePlan;
        this.emergencyResponsePlan = emergencyResponsePlan;
        this.cancellationPolicy = cancellationPolicy;
        this.medicalResponsePlan = medicalResponsePlan;
        this.trekDayDetails = trekDayDetails;
        this.trekImage = trekImage;
        this.provided = provided;
        this.carry = carry;
        this.pricePerPerson = pricePerPerson;
        this.minPeople = minPeople;
        this.maxPeople = maxPeople;
        this.trekTitle = trekTitle;
        this.delFlg = delFlg;
    }
    TreksModel.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: Array },
        { type: Number },
        { type: undefined },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: Array },
        { type: Array },
        { type: undefined },
        { type: String },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: String },
        { type: Boolean }
    ]; };
    return TreksModel;
}());



/***/ }),

/***/ "./src/assets/js/cashfree.js":
/*!***********************************!*\
  !*** ./src/assets/js/cashfree.js ***!
  \***********************************/
/*! exports provided: f */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return f; });
/* harmony import */ var _cashfreesdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cashfreesdk */ "./src/assets/js/cashfreesdk.js");
/* harmony import */ var _cashfreesdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cashfreesdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




function f(data) {
  let cfInitialized = false;
  const config = {};
  config.layout = {view: "popup", width: "650"};
  // config.mode = "TEST"; //use PROD when you go live
  config.mode = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production ? 'PROD' : 'TEST'; //use PROD when you go live

  const response = CashFree.init(config);
  console.log(response.status);
  if (response.status === "OK") {
    cfInitialized = true;
  } else {
    //handle error
    console.log(response.message);
  }
  const callback = (event) => {
    var eventName = event.name;
    switch (eventName) {
      case "PAYMENT_REQUEST":
        console.log(event.message);
        break;
      default:
        console.log(event.message);
    }
  };
  // alert(JSON.stringify(data));

  if (cfInitialized) {
    CashFree.makePayment(data, callback);
  }
}



/***/ }),

/***/ "./src/assets/js/cashfreesdk.js":
/*!**************************************!*\
  !*** ./src/assets/js/cashfreesdk.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (f) {
  function v() {
    var t = {}, w = !1, m = "DEVO", B = "transparent", e;
    e = {view: "popup", width: "700"};
    var C = function () {
      }, k = null, q = "INACTIVE",
      r = {DEVO: "http://devo.gocashfree.com", TEST: "https://test.cashfree.com", PROD: "https://www.cashfree.com"},
      D = "", E = "", u = !1, v = {inline: 1, popup: 1}, g = !1, h = null, F = !1, l = null, x = !0, G = null,
      n = function (a, b) {
        null != k && k({name: a, status: "ERROR", message: b})
      }, p = function () {
        var a = "";
        switch (m) {
          case "PROD":
            a = r.PROD;
            break;
          case "TEST":
            a = r.TEST + "/billpay";
            break;
          case "DEVO":
            a = r.DEVO + "/billpay"
        }
        return a
      },
      H = function (a) {
        document.getElementById("cfPaymentFrame").contentWindow.location.replace(a)
      }, I = function () {
        "popup" == e.view && document.body.classList.add("noscroll")
      }, y = function () {
        "popup" == e.view && document.body.classList.remove("noscroll")
      }, z = function () {
        document.getElementById("cfPaymentFrame").contentWindow.postMessage("abort", r[m])
      }, P = function (a) {
        if ("INACTIVE" != q) {
          if (!1 === confirm("Do you want to cancel the payment?")) return a.preventDefault(), !1;
          g && f.history.go(-1);
          k({name: "PAYMENT_RESPONSE", response: {txStatus: "CANCELLED"}});
          q = "INACTIVE";
          document.getElementById("cf-outer-div").style.display = "none";
          z();
          y();
          a.preventDefault();
          return "done"
        }
      }, J = function (a) {
        var b = document.getElementById("cf-toast");
        b.innerHTML = a;
        b.className = "show";
        setTimeout(function () {
          b.className = b.className.replace("show", "");
          b.innerHTML = ""
        }, 5E3)
      }, Q = function (a, b) {
        var d = new XMLHttpRequest;
        "withCredentials" in d ? d.open(a, b, !0) : "undefined" != typeof XDomainRequest ? (d = new XDomainRequest, d.open(a, b)) : d = null;
        return d
      }, A = function (a, b, d) {
        var c = Q("POST", a);
        c ? (c.onload =
          function () {
            var a = JSON.parse(c.responseText);
            d(a)
          }, c.onerror = function () {
          n("PAYMENT_REQUEST", "There was an error making the request.")
        }, a = JSON.stringify(b), D = b.paymentToken, c.setRequestHeader("Content-type", "application/json"), c.send(a)) : n("PAYMENT_REQUEST", "Frame checkout is not supported")
      }, R = function (a) {
        "OK" == a.status ? "page" == e.view ? location.href = a.paymentLink : (E = a.paymentLink, u = !0, K(a.paymentLink)) : (u = !1, n("PAYMENT_REQUEST", a.message))
      }, L = function (a) {
        document.getElementById("frame-loader").style.display =
          "none";
        document.getElementById("cfPaymentFrame").style.display = "block";
        "popup" == a && (document.getElementById("frame-close").style.display = "block")
      };
    t.initPopup = function () {
      h ? (h.focus(), x = !1) : (h = f.open("about:blank", "Popup_Window", "toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=920,height=500,left = 50,top = 50"), x = !0)
    };
    var T = function (a) {
      h && (a.source = "sdk-transparent");
      A(p() + "/checkout/post/generate-paymenthash", a, function (a) {
        S(a)
      })
    }, S = function (a) {
      if ("ERROR" == a.status) h && h.close(),
        n("VALIDATION_ERROR", a.message); else if ("OK" == a.status) {
        var b = document.createElement("a");
        b.id = "paymentHash";
        b.setAttribute("href", p() + "/checkout/post/payment/" + a.paymentHash);
        h ? h.document.body.appendChild(b) : document.body.appendChild(b);
        b.click();
        if (null != h) {
          var d = l.appId, c = l.orderId, e = l.orderAmount, f = l.customerEmail, k = l.customerPhone,
            g = l.paymentToken, m = l.orderCurrency;
          (function () {
            var a = setInterval(function () {
              if (h.closed && (clearInterval(a), h = null, !F)) {
                var b = {
                  appId: d, orderId: c, orderAmount: e, customerEmail: f,
                  customerPhone: k, orderCurrency: m, paymentToken: g
                };
                A(p() + "/checkout/post/close-transparent", b, function (a) {
                  M(a)
                })
              }
            }, 2E3)
          })()
        }
      } else h && h.close(), n("PAY", "Unexpected Error")
    }, U = function () {
      f.location.hash == G && "INACTIVE" != q && (k({
        name: "PAYMENT_RESPONSE",
        response: {txStatus: "CANCELLED"}
      }), q = "INACTIVE", document.getElementById("cf-outer-div").style.display = "none", z(), y())
    }, K = function (a) {
      q = "ACTIVE";
      "popup" == e.view ? (a += "?view=popup", document.getElementById("cf-outer-div").style.display = "block", document.getElementById("frame-loader").style.display =
        "block", document.getElementById("frame-close").style.display = "none", document.getElementById("cfPaymentFrame").style.display = "none", H(a), g && (G = f.location.hash, f.location.hash = "payment", f.addEventListener("hashchange", U)), document.getElementById("cfPaymentFrame").onload = function () {
        L("popup")
      }, I()) : "inline" == e.view && (document.getElementById("cf-inner-div").style.display = "block", document.getElementById("frame-loader").style.display = "block", document.getElementById("cfPaymentFrame").style.display = "none",
        H(a), document.getElementById("cfPaymentFrame").onload = function () {
        L(e.view)
      }, I())
    };
    t.init = function (a) {
      m = a.mode || "TEST";
      if (!(m in r)) return {status: "ERROR", message: "Invalid mode passed"};
      B = a.checkout || "iframe";
      var b = !1, d = navigator.userAgent || navigator.vendor || f.opera;
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(d) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(d.substr(0,
          4))) b = !0;
      b && (g = !0);
      var c;
      if ("transparent" == B) c = {status: "OK"}; else {
        a = a.layout || {};
        for (c in a) e[c] = a[c];
        500 > parseInt(e.width) ? e.width = 500 : 700 < parseInt(e.width) && (e.width = 700);
        g && (e.width = screen.width);
        document.getElementById("cashfree-css") || (c = "DEVO" == m ? p() + "/assets/cashfree-sdk.css" : p() + "/assets/cashfree.sdk.v1.css", a = document.getElementsByTagName("head")[0], b = document.createElement("link"), b.id = "cashfree-css", b.rel = "stylesheet", b.type = "text/css", b.href = c, b.media = "all", a.appendChild(b));
        b:if (!e.view in
          v) c = void 0; else {
          b = '<a class="frame-close" title="Close" id="frame-close" href="#"><img src="' + (g ? p() + "/assets/close-icon-mobile.svg" : p() + "/assets/close-icon.png") + '" height="50px"/></a>';
          d = f.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
          c = document.createElement("iframe");
          c.style.width = g ? "100%" : e.width + "px";
          c.id = "cfPaymentFrame";
          c.name = "cfPaymentFrame";
          c.scrolling = g ? "yes" : "no";
          c.frameBorder = "0";
          a = document.createElement("div");
          a.id = "cf-inner-div";
          a.className = "cf-inner-div";
          g ? (a.style.width = "100%", e.view = "popup") : a.style.width = e.width + "px";
          a.innerHTML = '<div id="frame-loader"><div class="cssload-container"><div class="cssload-speeding-wheel"></div></div>';
          if ("popup" == e.view) a.style.height = d + "px", c.style.height = "100%", d = document.createElement("div"), d.id = "cf-outer-div", d.className = "cf-outer-div", document.body.appendChild(d), d.innerHTML = b, b = document.createElement("div"), b.id = "cf-toast", d.appendChild(b), d.appendChild(a), document.getElementById("frame-close").addEventListener("click",
            P); else if ("inline" == e.view) {
            b = document.getElementById(e.container);
            if (!b) {
              c = {status: "ERROR", message: "Frame container is not present"};
              break b
            }
            b.appendChild(a);
            a.style.display = "none"
          }
          a.appendChild(c);
          c = {status: "OK"}
        }
        c = "ERROR" == c.status ? {status: "ERROR", message: c.message} : {status: "OK"}
      }
      return "OK" == c.status ? (w = !0, {status: "OK", message: "SDK initialized"}) : c
    };
    var M = function (a) {
      F = !0;
      k({name: "PAYMENT_RESPONSE", response: a.orderData})
    }, N = function (a) {
      a.origin == r[m] && (a = atob(a.data), a = JSON.parse(a), M(a))
    }, O =
      function (a) {
        if (a.origin == r[m]) {
          a = a.data;
          var b = a.type;
          "PAYMENT_RESPONSE" == b ? (a = a.data, b = {
            name: "PAYMENT_RESPONSE",
            response: a
          }, "SUCCESS" == a.txStatus ? (k(b), q = "INACTIVE", u = !1, "popup" == e.view && (document.getElementById("cf-outer-div").style.display = "none", z(), y())) : (J(a.txMsg), k(b))) : "PAYMENT_INIT" == b ? (b = {
            name: "PAYMENT_INIT",
            message: a.name
          }, k(b)) : "PAYMENT_ACTION" == b && (a = a.data, J(a.txMsg))
        }
      };
    t.paySeamless = function (a, b) {
      if (w) if (!x && h) h.focus(); else {
        k = b || C;
        f.addEventListener ? f.addEventListener("message", N,
          !1) : f.attachEvent("onmessage", N);
        var d = "appId orderId orderAmount customerName customerEmail customerPhone notifyUrl returnUrl paymentToken paymentOption orderNote pc orderCurrency vendorSplit".split(" ");
        l = {};
        for (var c = 0; c < d.length; c++) {
          var e = d[c];
          e in a && (l[e] = a[e])
        }
        d = a.paymentOption;
        if (["card", "wallet", "nb", "upi", "paypal"].includes(d)) {
          var c = a[d], g;
          for (g in c) c.hasOwnProperty(g) && (l[d + "_" + g] = c[g]);
          T(l)
        }
      } else n("PAYMENT_REQUEST", "Failed to initialize cashfree sdk")
    };
    t.makePayment = function (a, b) {
      if (w) {
        k =
          b || C;
        if (null == a.returnUrl || !1 === a.returnUrl || "" == a.returnUrl.trim()) f.addEventListener ? f.addEventListener("message", O, !1) : f.attachEvent("onmessage", O);
        if ("ACTIVE" == q) n("PAYMENT_REQUEST", "Payment is in progress"); else if (u && D == a.paymentToken) K(E); else {
          var d = p() + "/checkout/post/submit-js-v1";
          null == d ? n("Unsupported mode") : (a.source = "sdk-js", A(d, a, R))
        }
      } else n("PAYMENT_REQUEST", "Failed to initialize cashfree sdk")
    };
    return t
  }

  "undefined" === typeof CashFree ? f.CashFree = v() : console.log("CashFree is already defined.")
})(window);


/***/ })

}]);
//# sourceMappingURL=default~events-events-module~treks-treks-module-es5.js.map