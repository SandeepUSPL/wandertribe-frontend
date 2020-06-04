(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demand-demand-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/demand/demand.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demand/demand.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/demand/demand-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/demand/demand-routing.module.ts ***!
  \*************************************************/
/*! exports provided: DemandRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandRoutingModule", function() { return DemandRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: 'treks', loadChildren: function () { return Promise.all(/*! import() | treks-treks-module */[__webpack_require__.e("default~events-events-module~treks-treks-module"), __webpack_require__.e("treks-treks-module")]).then(__webpack_require__.bind(null, /*! ./treks/treks.module */ "./src/app/demand/treks/treks.module.ts")).then(function (module) { return module.TreksModule; }); },
    },
    {
        path: 'events', loadChildren: function () { return Promise.all(/*! import() | events-events-module */[__webpack_require__.e("default~events-events-module~treks-treks-module"), __webpack_require__.e("events-events-module")]).then(__webpack_require__.bind(null, /*! ./events/events.module */ "./src/app/demand/events/events.module.ts")).then(function (module) { return module.EventsModule; }); }
    }
];
var DemandRoutingModule = /** @class */ (function () {
    function DemandRoutingModule() {
    }
    DemandRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DemandRoutingModule);
    return DemandRoutingModule;
}());



/***/ }),

/***/ "./src/app/demand/demand.component.css":
/*!*********************************************!*\
  !*** ./src/app/demand/demand.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbWFuZC9kZW1hbmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/demand/demand.component.ts":
/*!********************************************!*\
  !*** ./src/app/demand/demand.component.ts ***!
  \********************************************/
/*! exports provided: DemandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandComponent", function() { return DemandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DemandComponent = /** @class */ (function () {
    function DemandComponent() {
    }
    DemandComponent.prototype.ngOnInit = function () {
    };
    DemandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-demand',
            template: __webpack_require__(/*! raw-loader!./demand.component.html */ "./node_modules/raw-loader/index.js!./src/app/demand/demand.component.html"),
            styles: [__webpack_require__(/*! ./demand.component.css */ "./src/app/demand/demand.component.css")]
        })
    ], DemandComponent);
    return DemandComponent;
}());



/***/ }),

/***/ "./src/app/demand/demand.module.ts":
/*!*****************************************!*\
  !*** ./src/app/demand/demand.module.ts ***!
  \*****************************************/
/*! exports provided: DemandModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandModule", function() { return DemandModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _demand_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demand-routing.module */ "./src/app/demand/demand-routing.module.ts");
/* harmony import */ var _demand_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demand.component */ "./src/app/demand/demand.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_demand_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/demand.reducer */ "./src/app/demand/store/demand.reducer.ts");
/* harmony import */ var _store_demand_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/demand.effects */ "./src/app/demand/store/demand.effects.ts");









var DemandModule = /** @class */ (function () {
    function DemandModule() {
    }
    DemandModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _demand_component__WEBPACK_IMPORTED_MODULE_4__["DemandComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _demand_routing_module__WEBPACK_IMPORTED_MODULE_3__["DemandRoutingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature('demand', _store_demand_reducer__WEBPACK_IMPORTED_MODULE_7__["DemandReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forFeature([_store_demand_effects__WEBPACK_IMPORTED_MODULE_8__["DemandEffects"]])
            ]
        })
    ], DemandModule);
    return DemandModule;
}());



/***/ }),

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

/***/ "./src/app/demand/store/demand.effects.ts":
/*!************************************************!*\
  !*** ./src/app/demand/store/demand.effects.ts ***!
  \************************************************/
/*! exports provided: DemandEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandEffects", function() { return DemandEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _demand_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demand.actions */ "./src/app/demand/store/demand.actions.ts");
/* harmony import */ var _shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/serverEndpoints */ "./src/app/shared/serverEndpoints.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])();
var DemandEffects = /** @class */ (function () {
    function DemandEffects(action, http) {
        var _this = this;
        this.action = action;
        this.http = http;
        this.fetchSingleEvent = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_demand_actions__WEBPACK_IMPORTED_MODULE_4__["TRY_FETCH_EVENT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) {
            return data.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (data) {
            return _this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__["eventDetails"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (response) {
            if (response.status === 200) {
                return [
                    {
                        type: _demand_actions__WEBPACK_IMPORTED_MODULE_4__["SET_ACTIVE_EVENT"],
                        payload: response.body
                    }
                ];
            }
            else {
                return [];
            }
        }));
        this.fetchSingleTrek = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_demand_actions__WEBPACK_IMPORTED_MODULE_4__["TRY_FETCH_TREK"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) {
            return data.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (data) {
            return _this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__["trekDetails"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (response) {
            if (response.status === 200) {
                return [
                    {
                        type: _demand_actions__WEBPACK_IMPORTED_MODULE_4__["SET_ACTIVE_TREK"],
                        payload: response.body
                    }
                ];
            }
            else {
                return [];
            }
        }));
    }
    DemandEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
    ], DemandEffects.prototype, "fetchSingleEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
    ], DemandEffects.prototype, "fetchSingleTrek", void 0);
    return DemandEffects;
}());



/***/ }),

/***/ "./src/app/demand/store/demand.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/demand/store/demand.reducer.ts ***!
  \************************************************/
/*! exports provided: DemandReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandReducer", function() { return DemandReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var initialState = {
    eventDemand: {
        activeEvent: null,
        allEvents: null,
        selectedDetails: null
    },
    trekDemand: {
        allTreks: null,
        activeTrek: null,
        selectedDetails: null
    },
    finalPrice: 0
};
function DemandReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'SET_SELECTED_EVENT_DETAILS': {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { eventDemand: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.eventDemand, { selectedDetails: action.payload }) });
        }
        case 'SET_SELECTED_TREK_DETAILS': {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { trekDemand: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.trekDemand, { selectedDetails: action.payload }) });
        }
        case 'SET_PRICE': {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { finalPrice: action.payload });
        }
        case 'SET_ALL_TREK': {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { trekDemand: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.trekDemand, { allTreks: action.payload }) });
        }
        case 'SET_ACTIVE_TREK': {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { trekDemand: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.trekDemand, { activeTrek: action.payload }) });
        }
        case 'SET_ALL_EVENT': {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { eventDemand: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.eventDemand, { allEvents: action.payload }) });
        }
        case 'SET_ACTIVE_EVENT': {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { eventDemand: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.eventDemand, { activeEvent: action.payload }) });
        }
        default: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
        }
    }
}


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



/***/ })

}]);
//# sourceMappingURL=demand-demand-module-es5.js.map