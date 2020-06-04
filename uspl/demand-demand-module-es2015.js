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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: 'treks', loadChildren: () => Promise.all(/*! import() | treks-treks-module */[__webpack_require__.e("default~events-events-module~treks-treks-module"), __webpack_require__.e("treks-treks-module")]).then(__webpack_require__.bind(null, /*! ./treks/treks.module */ "./src/app/demand/treks/treks.module.ts")).then(module => module.TreksModule),
    },
    {
        path: 'events', loadChildren: () => Promise.all(/*! import() | events-events-module */[__webpack_require__.e("default~events-events-module~treks-treks-module"), __webpack_require__.e("events-events-module")]).then(__webpack_require__.bind(null, /*! ./events/events.module */ "./src/app/demand/events/events.module.ts")).then(module => module.EventsModule)
    }
];
let DemandRoutingModule = class DemandRoutingModule {
};
DemandRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DemandRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DemandComponent = class DemandComponent {
    constructor() { }
    ngOnInit() {
    }
};
DemandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-demand',
        template: __webpack_require__(/*! raw-loader!./demand.component.html */ "./node_modules/raw-loader/index.js!./src/app/demand/demand.component.html"),
        styles: [__webpack_require__(/*! ./demand.component.css */ "./src/app/demand/demand.component.css")]
    })
], DemandComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _demand_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demand-routing.module */ "./src/app/demand/demand-routing.module.ts");
/* harmony import */ var _demand_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demand.component */ "./src/app/demand/demand.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _store_demand_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/demand.reducer */ "./src/app/demand/store/demand.reducer.ts");
/* harmony import */ var _store_demand_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/demand.effects */ "./src/app/demand/store/demand.effects.ts");









let DemandModule = class DemandModule {
};
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

const TRY_FETCH_TREK = 'TRY_FETCH_TREK';
const SET_ALL_TREK = 'SET_ALL_TREK';
const SET_ACTIVE_TREK = 'SET_ACTIVE_TREK';
const SET_SELECTED_TREK_DETAILS = 'SET_SELECTED_TREK_DETAILS';
const TRY_FETCH_EVENT = 'TRY_FETCH_EVENT';
const SET_ALL_EVENT = 'SET_ALL_EVENT';
const SET_ACTIVE_EVENT = 'SET_ACTIVE_EVENT';
const SET_SELECTED_EVENT_DETAILS = 'SET_SELECTED_EVENT_DETAILS';
const SET_PRICE = 'SET_PRICE';
class TryFetchEvent {
    constructor(payload) {
        this.payload = payload;
        this.type = TRY_FETCH_EVENT;
    }
}
TryFetchEvent.ctorParameters = () => [
    { type: undefined }
];
class SetActiveEvent {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_ACTIVE_EVENT;
    }
}
SetActiveEvent.ctorParameters = () => [
    { type: _roles_business_treks_treks_model__WEBPACK_IMPORTED_MODULE_0__["TreksModel"] }
];
class SetAllEvent {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_ALL_EVENT;
    }
}
SetAllEvent.ctorParameters = () => [
    { type: undefined }
];
class SetActiveEventDetails {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_SELECTED_EVENT_DETAILS;
    }
}
SetActiveEventDetails.ctorParameters = () => [
    { type: undefined }
];
class SetAllTrek {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_ALL_TREK;
    }
}
SetAllTrek.ctorParameters = () => [
    { type: undefined }
];
class SetActiveTrek {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_ACTIVE_TREK;
    }
}
SetActiveTrek.ctorParameters = () => [
    { type: _roles_business_treks_treks_model__WEBPACK_IMPORTED_MODULE_0__["TreksModel"] }
];
class TryFetchTrek {
    constructor(payload) {
        this.payload = payload;
        this.type = TRY_FETCH_TREK;
    }
}
TryFetchTrek.ctorParameters = () => [
    { type: undefined }
];
class SetPrice {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_PRICE;
    }
}
SetPrice.ctorParameters = () => [
    { type: Number }
];
class SetActiveTrekDetails {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_SELECTED_TREK_DETAILS;
    }
}
SetActiveTrekDetails.ctorParameters = () => [
    { type: undefined }
];


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _demand_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demand.actions */ "./src/app/demand/store/demand.actions.ts");
/* harmony import */ var _shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/serverEndpoints */ "./src/app/shared/serverEndpoints.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])();
class DemandEffects {
    constructor(action, http) {
        this.action = action;
        this.http = http;
        this.fetchSingleEvent = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_demand_actions__WEBPACK_IMPORTED_MODULE_4__["TRY_FETCH_EVENT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((data) => {
            return data.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((data) => {
            return this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__["eventDetails"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((response) => {
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
        this.fetchSingleTrek = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_demand_actions__WEBPACK_IMPORTED_MODULE_4__["TRY_FETCH_TREK"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((data) => {
            return data.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((data) => {
            return this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__["trekDetails"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((response) => {
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
}
DemandEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], DemandEffects.prototype, "fetchSingleEvent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], DemandEffects.prototype, "fetchSingleTrek", void 0);


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
const initialState = {
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
function DemandReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_SELECTED_EVENT_DETAILS': {
            return Object.assign({}, state, { eventDemand: Object.assign({}, state.eventDemand, { selectedDetails: action.payload }) });
        }
        case 'SET_SELECTED_TREK_DETAILS': {
            return Object.assign({}, state, { trekDemand: Object.assign({}, state.trekDemand, { selectedDetails: action.payload }) });
        }
        case 'SET_PRICE': {
            return Object.assign({}, state, { finalPrice: action.payload });
        }
        case 'SET_ALL_TREK': {
            return Object.assign({}, state, { trekDemand: Object.assign({}, state.trekDemand, { allTreks: action.payload }) });
        }
        case 'SET_ACTIVE_TREK': {
            return Object.assign({}, state, { trekDemand: Object.assign({}, state.trekDemand, { activeTrek: action.payload }) });
        }
        case 'SET_ALL_EVENT': {
            return Object.assign({}, state, { eventDemand: Object.assign({}, state.eventDemand, { allEvents: action.payload }) });
        }
        case 'SET_ACTIVE_EVENT': {
            return Object.assign({}, state, { eventDemand: Object.assign({}, state.eventDemand, { activeEvent: action.payload }) });
        }
        default: {
            return Object.assign({}, state);
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
class TreksModel {
    constructor(_id, company, todoPlan, location, trekDates, totalDays, languages, difficultyLevel, ownerDescription, naturalDisasterResponsePlan, emergencyResponsePlan, cancellationPolicy, medicalResponsePlan, trekDayDetails, trekImage, provided, carry, pricePerPerson, minPeople, maxPeople, trekTitle, delFlg) {
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
}
TreksModel.ctorParameters = () => [
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
];


/***/ })

}]);
//# sourceMappingURL=demand-demand-module-es2015.js.map