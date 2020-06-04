(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["travelagent-travelagent-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/travelagent/travelagent.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/travelagent/travelagent.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/travelagent/travelagentedit/travelagentedit.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/travelagent/travelagentedit/travelagentedit.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 offset-md-3 p-5 mb-5 shadow-boxed\">\n  <div class=\"col-md-12\">\n    <ngb-tabset type=\"pills\" [justify]=\"'center'\" #t=\"ngbTabset\">\n\n      <ngb-tab title=\"FIRM DETAILS\">\n        <ng-template ngbTabContent>\n          <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit('editForm')\">\n            <div class=\"form-group mt-5\">\n              <label class=\"form-title\">Firm Details</label><br>\n              <div class=\"form-group\">\n                <label>Name of Comapny</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"name\">\n              </div>\n              <div class=\"form-group\">\n                <label>Registration Type</label>\n                <select class=\"form-control\" formControlName=\"registrationType\">\n                  <option value=\"privateLimitied\">Private Limited</option>\n                  <option value=\"publicLimited\">Public Limited</option>\n                  <option value=\"proprietorship\">Proprietorship</option>\n                  <option value=\"partnership\">Partnership</option>\n                  <option value=\"powerOfAttorney\">Under Power of Attorney</option>\n                </select>\n              </div>\n              <div class=\"form-group\">\n                <label>Registration CIN No</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"registrationNo\">\n              </div>\n              <div class=\"form-group\">\n                <label>Full Office Address</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"officeAddress\">\n              </div>\n              <div class=\"form-group\">\n                <label>Registration Authority</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"registrationAuthority\">\n              </div>\n              <div class=\"form-group\">\n                <label>Registration MSME Number</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"registrationMsmeNumber\">\n              </div>\n              <div class=\"form-group\">\n                <label>GST Number</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"gstNumber\">\n              </div>\n              <div class=\"form-group\">\n                <label>PAN Number</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"panNumber\">\n              </div>\n              <div class=\"form-group\">\n                <label>TAN Number</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"tanNumber\">\n              </div>\n              <div class=\"form-group\">\n                <label>Union Enrollment Number</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"unionEnrollmentNumber\">\n              </div>\n            </div>\n\n            <div class=\"form-group\" formGroupName=\"firmAddress\">\n              <label class=\"form-title\">Firm Contact Details</label><br>\n              <div formGroupName=\"permanentAddress\">\n                <div class=\"form-group\">\n                  <label>Address</label>\n                  <input class=\"form-control\" type=\"text\" formControlName=\"address\">\n                </div>\n                <div class=\"form-group\">\n                  <label>Pincode</label>\n                  <input class=\"form-control\" type=\"number\" formControlName=\"pincode\">\n                </div>\n                <div class=\"form-group\">\n                  <label>Phone number</label>\n                  <input class=\"form-control\" type=\"number\" formControlName=\"phoneNo\">\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group col-md-12 text-center\">\n              <button class=\"btn btn-uspl\">Save Changes</button>\n            </div>\n          </form>\n        </ng-template>\n      </ngb-tab>\n\n\n      <ngb-tab title=\"OWNER DETAILS\" id=\"ownerDetails\">\n        <ng-template ngbTabContent>\n          <form [formGroup]=\"ownerForm\" (ngSubmit)=\"onSubmit('ownerForm')\">\n            <div class=\"form-group mt-5\" formGroupName=\"ownerDetails\">\n\n              <div class=\"col-md-12 form-group d-flex justify-content-center mt-5\">\n                I am\n                <select class=\"form-control w-25 ml-2 mr-2\" formControlName=\"profileRegistrar\">\n                  <option value=\"OWNER\">OWNER</option>\n                  <option value=\"MANAGER\">MANAGER</option>\n                  <option value=\"OTHER\">OTHER</option>\n                </select>\n                of this company\n              </div>\n\n              <label class=\"form-title\">Owner Details</label><br>\n              <div class=\"form-group\">\n                <label>Name</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"name\">\n              </div>\n              <div class=\"form-group\">\n                <label>Mobile</label>\n                <input class=\"form-control\" type=\"number\" formControlName=\"mobile\">\n              </div>\n              <div class=\"form-group\">\n                <label>Email</label>\n                <input class=\"form-control\" type=\"email\" formControlName=\"email\">\n              </div>\n              <div class=\"form-group\">\n                <label>PAN number</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"pan\">\n              </div>\n              <div formGroupName=\"address\">\n                <div class=\"form-group\">\n                  <label>Address</label>\n                  <input class=\"form-control\" type=\"text\" formControlName=\"address\">\n                </div>\n                <div class=\"form-group\">\n                  <label>Pincode</label>\n                  <input class=\"form-control\" type=\"number\" formControlName=\"pincode\">\n                </div>\n                <div class=\"form-group\">\n                  <label>Phone number</label>\n                  <input class=\"form-control\" type=\"number\" formControlName=\"phoneNo\">\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\" formGroupName=\"bankDetails\">\n              <label class=\"form-title\">Bank Details</label><br>\n              <div class=\"form-group\">\n                <label>Bank Name</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"bankName\">\n              </div>\n              <div class=\"form-group\">\n                <label>Bank Account number</label>\n                <input class=\"form-control\" type=\"number\" formControlName=\"bankAccountNo\">\n              </div>\n              <div class=\"form-group\">\n                <label>Bank IFSC</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"bankIfsc\">\n              </div>\n              <div class=\"form-group\">\n                <label>Bank Address</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"bankAddress\">\n              </div>\n            </div>\n            <div class=\"form-group col-md-12 text-center\">\n              <button class=\"btn btn-uspl\">Save Changes</button>\n            </div>\n          </form>\n        </ng-template>\n      </ngb-tab>\n\n\n      <ngb-tab title=\"UPLOAD IMAGE\" id=\"imagesForm\">\n        <ng-template ngbTabContent>\n          <form [formGroup]=\"imageForm\" (ngSubmit)=\"onSubmit('imageForm')\">\n\n            <!--            <div class=\"row form-group upload-form-group mt-5\">-->\n            <!--              <div class=\"col-md-8\">-->\n            <!--                <label> Upload your Registration number Proof </label>-->\n            <!--                <input class=\"form-control \" type=\"file\" formControlName=\"registrationNoProof\"-->\n            <!--                       (change)=\"imgPreviewRegistrationNo($event)\">-->\n            <!--              </div>-->\n            <!--              <div class=\"col-md-4 image-preview\">-->\n            <!--                <img [src]=\"previewUrlregistrationNo\">-->\n            <!--              </div>-->\n            <!--            </div>-->\n\n            <div class=\"row form-group upload-form-group mt-5\">\n              <div class=\"col-md-8\">\n                <label> Upload your Registration MSME number Proof </label>\n                <input class=\"form-control \" type=\"file\"\n                       formControlName=\"registrationMsmeNumberProof\"\n                       (change)=\"imgPreviewregistrationMsmeNumber($event)\">\n              </div>\n              <div class=\"col-md-4 image-preview\">\n                <img [src]=\"previewUrlregistrationMsmeNumber\">\n              </div>\n            </div>\n\n            <div class=\"row form-group upload-form-group\">\n              <div class=\"col-md-8\">\n                <label> Upload your GST number Proof </label>\n                <input class=\"form-control \" type=\"file\" formControlName=\"gstNumberProof\"\n                       (change)=\"imgPreviewgstNumber($event)\">\n              </div>\n              <div class=\"col-md-4 image-preview\">\n                <img [src]=\"previewUrlgstNumber\">\n              </div>\n            </div>\n\n            <div class=\"row form-group upload-form-group\">\n              <div class=\"col-md-8\">\n                <label> Upload your Registration CIN Proof </label>\n                <input class=\"form-control \" type=\"file\" formControlName=\"registrationCinProof\"\n                       (change)=\"imgPreviewaddress($event)\">\n              </div>\n              <div class=\"col-md-4 image-preview\">\n                <img [src]=\"previewUrlCinProof\">\n              </div>\n            </div>\n\n            <div class=\"form-group col-md-12 text-center\">\n              <button class=\"btn btn-uspl\">Save Changes</button>\n            </div>\n          </form>\n        </ng-template>\n      </ngb-tab>\n\n    </ngb-tabset>\n  </div>\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/roles/business/travelagent/store/travelagent.actions.ts":
/*!*************************************************************************!*\
  !*** ./src/app/roles/business/travelagent/store/travelagent.actions.ts ***!
  \*************************************************************************/
/*! exports provided: TRY_FETCH_TRAVELAGENT, SET_TRAVELAGENT, TRAVELAGENT_EDIT, UPLOAD_TRAVELAGENT_IMAGES, TryFetchTravelAgent, SetTravelAgent, UploadTravelAgentImages, TravelAgentEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_FETCH_TRAVELAGENT", function() { return TRY_FETCH_TRAVELAGENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TRAVELAGENT", function() { return SET_TRAVELAGENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRAVELAGENT_EDIT", function() { return TRAVELAGENT_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_TRAVELAGENT_IMAGES", function() { return UPLOAD_TRAVELAGENT_IMAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryFetchTravelAgent", function() { return TryFetchTravelAgent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTravelAgent", function() { return SetTravelAgent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadTravelAgentImages", function() { return UploadTravelAgentImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelAgentEdit", function() { return TravelAgentEdit; });
// travel agent
var TRY_FETCH_TRAVELAGENT = 'TRY_FETCH_TRAVELAGENT';
var SET_TRAVELAGENT = 'SET_TRAVELAGENT';
var TRAVELAGENT_EDIT = 'TRAVELAGENT_EDIT';
var UPLOAD_TRAVELAGENT_IMAGES = 'UPLOAD_TRAVELAGENT_IMAGES';
// classes for travel agent
var TryFetchTravelAgent = /** @class */ (function () {
    function TryFetchTravelAgent() {
        this.type = TRY_FETCH_TRAVELAGENT;
    }
    return TryFetchTravelAgent;
}());

var SetTravelAgent = /** @class */ (function () {
    function SetTravelAgent(payload) {
        this.payload = payload;
        this.type = SET_TRAVELAGENT;
    }
    SetTravelAgent.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return SetTravelAgent;
}());

var UploadTravelAgentImages = /** @class */ (function () {
    function UploadTravelAgentImages(payload) {
        this.payload = payload;
        this.type = UPLOAD_TRAVELAGENT_IMAGES;
    }
    UploadTravelAgentImages.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UploadTravelAgentImages;
}());

var TravelAgentEdit = /** @class */ (function () {
    function TravelAgentEdit(payload) {
        this.payload = payload;
        this.type = TRAVELAGENT_EDIT;
    }
    TravelAgentEdit.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return TravelAgentEdit;
}());



/***/ }),

/***/ "./src/app/roles/business/travelagent/store/travelagent.effects.ts":
/*!*************************************************************************!*\
  !*** ./src/app/roles/business/travelagent/store/travelagent.effects.ts ***!
  \*************************************************************************/
/*! exports provided: TravelagentEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelagentEffects", function() { return TravelagentEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/serverEndpoints */ "./src/app/shared/serverEndpoints.ts");
/* harmony import */ var _travelagent_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./travelagent.actions */ "./src/app/roles/business/travelagent/store/travelagent.actions.ts");







var TravelagentEffects = /** @class */ (function () {
    function TravelagentEffects(action, http) {
        var _this = this;
        this.action = action;
        this.http = http;
        // effects for travel agent
        this.editTravelAgent = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_travelagent_actions__WEBPACK_IMPORTED_MODULE_6__["TRAVELAGENT_EDIT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (payload) {
            return payload.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (data) {
            return _this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__["edittravelagent"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (response) {
            if (response.status === 200) {
                return [
                    {
                        type: _travelagent_actions__WEBPACK_IMPORTED_MODULE_6__["SET_TRAVELAGENT"],
                        payload: response.body
                    }
                ];
            }
        }));
        this.uploadTravelAgentImages = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_travelagent_actions__WEBPACK_IMPORTED_MODULE_6__["UPLOAD_TRAVELAGENT_IMAGES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (data) {
            return _this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__["uploadtravelagentImages"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (response) {
            if (response.status === 200) {
                return [
                    {
                        type: _travelagent_actions__WEBPACK_IMPORTED_MODULE_6__["SET_TRAVELAGENT"],
                        payload: response.body
                    }
                ];
            }
        }));
        this.fetchTravelAgent = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_travelagent_actions__WEBPACK_IMPORTED_MODULE_6__["TRY_FETCH_TRAVELAGENT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            return _this.http.get(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__["fetchtravelagent"], { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (response) {
            if (response.status === 200) {
                return [
                    {
                        type: _travelagent_actions__WEBPACK_IMPORTED_MODULE_6__["SET_TRAVELAGENT"],
                        payload: response.body
                    }
                ];
            }
        }));
    }
    TravelagentEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
    ], TravelagentEffects.prototype, "editTravelAgent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
    ], TravelagentEffects.prototype, "uploadTravelAgentImages", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
    ], TravelagentEffects.prototype, "fetchTravelAgent", void 0);
    TravelagentEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], TravelagentEffects);
    return TravelagentEffects;
}());



/***/ }),

/***/ "./src/app/roles/business/travelagent/store/travelagent.reducer.ts":
/*!*************************************************************************!*\
  !*** ./src/app/roles/business/travelagent/store/travelagent.reducer.ts ***!
  \*************************************************************************/
/*! exports provided: TravelAgentReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelAgentReducer", function() { return TravelAgentReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _travelagent_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../travelagent.model */ "./src/app/roles/business/travelagent/travelagent.model.ts");


var initialState = {
    travelAgent: new _travelagent_model__WEBPACK_IMPORTED_MODULE_1__["TravelagentModel"]('', '', '', '', '', '', '', '', '', '', {
        permanentAddress: {
            address: '',
            pincode: '',
            phoneNo: ''
        }
    }, {
        profileRegistrar: '', name: '', mobile: '', email: '', pan: '', address: {
            address: '',
            phoneNo: '',
            pincode: ''
        }, bankDetails: {
            bankAccountNo: '',
            bankAddress: '', bankIfsc: '', bankName: ''
        }
    }, '', '', '')
};
function TravelAgentReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'SET_TRAVELAGENT': {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { travelAgent: action.payload });
        }
        default: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
        }
    }
}


/***/ }),

/***/ "./src/app/roles/business/travelagent/travelagent-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/roles/business/travelagent/travelagent-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: TravelagentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelagentRoutingModule", function() { return TravelagentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _travelagent_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./travelagent.component */ "./src/app/roles/business/travelagent/travelagent.component.ts");
/* harmony import */ var _travelagentedit_travelagentedit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./travelagentedit/travelagentedit.component */ "./src/app/roles/business/travelagent/travelagentedit/travelagentedit.component.ts");





var routes = [
    {
        path: '', component: _travelagent_component__WEBPACK_IMPORTED_MODULE_3__["TravelagentComponent"], children: [
            { path: 'dashboard', component: _travelagent_component__WEBPACK_IMPORTED_MODULE_3__["TravelagentComponent"] },
            { path: 'editProfile', component: _travelagentedit_travelagentedit_component__WEBPACK_IMPORTED_MODULE_4__["TravelagenteditComponent"] }
        ]
    }
];
var TravelagentRoutingModule = /** @class */ (function () {
    function TravelagentRoutingModule() {
    }
    TravelagentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TravelagentRoutingModule);
    return TravelagentRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/business/travelagent/travelagent.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/roles/business/travelagent/travelagent.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2J1c2luZXNzL3RyYXZlbGFnZW50L3RyYXZlbGFnZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/roles/business/travelagent/travelagent.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/roles/business/travelagent/travelagent.component.ts ***!
  \*********************************************************************/
/*! exports provided: TravelagentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelagentComponent", function() { return TravelagentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TravelagentComponent = /** @class */ (function () {
    function TravelagentComponent() {
    }
    TravelagentComponent.prototype.ngOnInit = function () {
    };
    TravelagentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-travelagent',
            template: __webpack_require__(/*! raw-loader!./travelagent.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/travelagent/travelagent.component.html"),
            styles: [__webpack_require__(/*! ./travelagent.component.css */ "./src/app/roles/business/travelagent/travelagent.component.css")]
        })
    ], TravelagentComponent);
    return TravelagentComponent;
}());



/***/ }),

/***/ "./src/app/roles/business/travelagent/travelagent.model.ts":
/*!*****************************************************************!*\
  !*** ./src/app/roles/business/travelagent/travelagent.model.ts ***!
  \*****************************************************************/
/*! exports provided: TravelagentModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelagentModel", function() { return TravelagentModel; });
var TravelagentModel = /** @class */ (function () {
    function TravelagentModel(name, registrationType, registrationNo, registrationNoProof, officeAddress, registrationAuthority, registrationMsmeNumber, gstNumber, panNumber, unionEnrollmentNumber, firmAddress, ownerDetails, registrationCinProof, gstNumberProof, registrationMsmeNumberProof) {
        this.name = name;
        this.registrationType = registrationType;
        this.registrationNo = registrationNo;
        this.registrationNoProof = registrationNoProof;
        this.officeAddress = officeAddress;
        this.registrationAuthority = registrationAuthority;
        this.registrationMsmeNumber = registrationMsmeNumber;
        this.gstNumber = gstNumber;
        this.panNumber = panNumber;
        this.unionEnrollmentNumber = unionEnrollmentNumber;
        this.firmAddress = firmAddress;
        this.ownerDetails = ownerDetails;
        this.registrationCinProof = registrationCinProof;
        this.gstNumberProof = gstNumberProof;
        this.registrationMsmeNumberProof = registrationMsmeNumberProof;
    }
    TravelagentModel.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: undefined },
        { type: undefined },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return TravelagentModel;
}());



/***/ }),

/***/ "./src/app/roles/business/travelagent/travelagent.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/roles/business/travelagent/travelagent.module.ts ***!
  \******************************************************************/
/*! exports provided: TravelagentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelagentModule", function() { return TravelagentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _travelagent_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./travelagent-routing.module */ "./src/app/roles/business/travelagent/travelagent-routing.module.ts");
/* harmony import */ var _travelagent_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./travelagent.component */ "./src/app/roles/business/travelagent/travelagent.component.ts");
/* harmony import */ var _travelagentedit_travelagentedit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./travelagentedit/travelagentedit.component */ "./src/app/roles/business/travelagent/travelagentedit/travelagentedit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_travelagent_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/travelagent.reducer */ "./src/app/roles/business/travelagent/store/travelagent.reducer.ts");
/* harmony import */ var _store_travelagent_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/travelagent.effects */ "./src/app/roles/business/travelagent/store/travelagent.effects.ts");












var TravelagentModule = /** @class */ (function () {
    function TravelagentModule() {
    }
    TravelagentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _travelagent_component__WEBPACK_IMPORTED_MODULE_4__["TravelagentComponent"],
                _travelagentedit_travelagentedit_component__WEBPACK_IMPORTED_MODULE_5__["TravelagenteditComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _travelagent_routing_module__WEBPACK_IMPORTED_MODULE_3__["TravelagentRoutingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forFeature('travelAgent', _store_travelagent_reducer__WEBPACK_IMPORTED_MODULE_10__["TravelAgentReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature([_store_travelagent_effects__WEBPACK_IMPORTED_MODULE_11__["TravelagentEffects"]])
            ]
        })
    ], TravelagentModule);
    return TravelagentModule;
}());



/***/ }),

/***/ "./src/app/roles/business/travelagent/travelagentedit/travelagentedit.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/roles/business/travelagent/travelagentedit/travelagentedit.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upload-form-group{\n  padding: 20px;\n  border: 2px dashed #2d0829;\n}\n\n.upload-form-group input{\n  height: auto;\n}\n\n.image-preview{\n  text-align: center;\n}\n\n.image-preview img{\n  height: 100px;\n  width: auto;\n  max-width: 120px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYnVzaW5lc3MvdHJhdmVsYWdlbnQvdHJhdmVsYWdlbnRlZGl0L3RyYXZlbGFnZW50ZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvYnVzaW5lc3MvdHJhdmVsYWdlbnQvdHJhdmVsYWdlbnRlZGl0L3RyYXZlbGFnZW50ZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwbG9hZC1mb3JtLWdyb3Vwe1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IDJweCBkYXNoZWQgIzJkMDgyOTtcbn1cblxuLnVwbG9hZC1mb3JtLWdyb3VwIGlucHV0e1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5pbWFnZS1wcmV2aWV3e1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWFnZS1wcmV2aWV3IGltZ3tcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMTIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/roles/business/travelagent/travelagentedit/travelagentedit.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/roles/business/travelagent/travelagentedit/travelagentedit.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TravelagenteditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelagenteditComponent", function() { return TravelagenteditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_travelagent_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/travelagent.actions */ "./src/app/roles/business/travelagent/store/travelagent.actions.ts");





var TravelagenteditComponent = /** @class */ (function () {
    function TravelagenteditComponent(fb, store) {
        this.fb = fb;
        this.store = store;
        this.registrationMsmeImage = null;
        this.registrationGstImage = null;
        this.registrationCinImage = null;
        this.previewUrlregistrationMsmeNumber = '../../../assets/icons/uploadPic.png';
        this.previewUrlgstNumber = '../../../assets/icons/uploadPic.png';
        this.previewUrlCinProof = '../../../assets/icons/uploadPic.png';
    }
    TravelagenteditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _store_travelagent_actions__WEBPACK_IMPORTED_MODULE_4__["TryFetchTravelAgent"]());
        this.imageForm = this.fb.group({
            registrationCinProof: [''],
            gstNumberProof: [''],
            registrationMsmeNumberProof: [''],
        });
        this.ownerForm = this.fb.group({
            ownerDetails: this.fb.group({
                profileRegistrar: ['OWNER', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                pan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                address: this.fb.group({
                    address: [''],
                    pincode: [''],
                    phoneNo: ['']
                })
            }),
            bankDetails: this.fb.group({
                bankName: [''],
                bankAccountNo: [''],
                bankIfsc: [''],
                bankAddress: ['']
            }),
        });
        this.editForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            registrationType: ['privateLimitied', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            registrationNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            officeAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            registrationAuthority: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            registrationMsmeNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gstNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            panNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            unionEnrollmentNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            firmAddress: this.fb.group({
                permanentAddress: this.fb.group({
                    address: [''],
                    pincode: [''],
                    phoneNo: ['']
                })
            })
        });
        this.store.select('travelAgent').subscribe(function (value) {
            console.log(value);
            _this.travelAgentStore = value.travelAgent;
            _this.previewUrlCinProof = value.travelAgent.registrationCinProof;
            _this.previewUrlgstNumber = value.travelAgent.gstNumberProof;
            _this.previewUrlregistrationMsmeNumber = value.travelAgent.registrationMsmeNumberProof;
            _this.editForm.patchValue(_this.travelAgentStore);
            _this.imageForm.patchValue(_this.travelAgentStore);
            _this.ownerForm.patchValue(_this.travelAgentStore);
        });
    };
    TravelagenteditComponent.prototype.imgPreviewregistrationMsmeNumber = function (fileInput) {
        var _this = this;
        this.registrationMsmeImage = fileInput.target.files[0];
        var mimeType = this.registrationMsmeImage.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(this.registrationMsmeImage);
        reader.onload = function () {
            _this.previewUrlregistrationMsmeNumber = reader.result;
        };
    };
    TravelagenteditComponent.prototype.imgPreviewgstNumber = function (fileInput) {
        var _this = this;
        this.registrationGstImage = fileInput.target.files[0];
        var mimeType = this.registrationGstImage.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(this.registrationGstImage);
        reader.onload = function () {
            _this.previewUrlgstNumber = reader.result;
        };
    };
    TravelagenteditComponent.prototype.imgPreviewaddress = function (fileInput) {
        var _this = this;
        this.registrationCinImage = fileInput.target.files[0];
        var mimeType = this.registrationCinImage.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(this.registrationCinImage);
        reader.onload = function () {
            _this.previewUrlCinProof = reader.result;
        };
    };
    TravelagenteditComponent.prototype.onSubmit = function (type) {
        if (type === 'imageForm') {
            var data = new FormData();
            data.append('registrationCinProof', this.registrationCinImage);
            data.append('gstNumberProof', this.registrationGstImage);
            data.append('registrationMsmeNumberProof', this.registrationMsmeImage);
            this.store.dispatch(new _store_travelagent_actions__WEBPACK_IMPORTED_MODULE_4__["UploadTravelAgentImages"](data));
        }
        else {
            if (type === 'ownerForm') {
                this.tabSet.select('imagesForm');
            }
            else if (type === 'editForm') {
                this.tabSet.select('ownerDetails');
            }
            Object.assign(this.travelAgentStore, this.editForm.value);
            Object.assign(this.travelAgentStore, this.ownerForm.value);
            this.store.dispatch(new _store_travelagent_actions__WEBPACK_IMPORTED_MODULE_4__["TravelAgentEdit"](this.travelAgentStore));
        }
    };
    TravelagenteditComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('t', { static: false })
    ], TravelagenteditComponent.prototype, "tabSet", void 0);
    TravelagenteditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-travelagentedit',
            template: __webpack_require__(/*! raw-loader!./travelagentedit.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/travelagent/travelagentedit/travelagentedit.component.html"),
            styles: [__webpack_require__(/*! ./travelagentedit.component.css */ "./src/app/roles/business/travelagent/travelagentedit/travelagentedit.component.css")]
        })
    ], TravelagenteditComponent);
    return TravelagenteditComponent;
}());



/***/ })

}]);
//# sourceMappingURL=travelagent-travelagent-module-es5.js.map