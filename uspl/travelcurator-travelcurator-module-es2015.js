(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["travelcurator-travelcurator-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/travelcurator/travelcurator.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/travelcurator/travelcurator.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/travelcurator/travelcuratoredit/travelcuratoredit.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/travelcurator/travelcuratoredit/travelcuratoredit.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 offset-md-3 p-5 mb-5 shadow-boxed\">\n  <div class=\"col-md-12\">\n    <ngb-tabset type=\"pills\" [justify]=\"'center'\"  #t=\"ngbTabset\">\n\n      <ngb-tab title=\"FIRM DETAILS\">\n        <ng-template ngbTabContent >\n          <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit('editForm')\">\n            <div class=\"form-group mt-5\">\n              <label class=\"form-title\">Firm Details</label><br>\n              <div class=\"form-group\">\n                <label>Name of Comapny</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"name\">\n              </div>\n              <div class=\"form-group\">\n                <label>Registration Type</label>\n                <select class=\"form-control\" formControlName=\"registrationType\">\n                  <option value=\"privateLimitied\">Private Limited</option>\n                  <option value=\"publicLimited\">Public Limited</option>\n                  <option value=\"proprietorship\">Proprietorship</option>\n                  <option value=\"partnership\">Partnership</option>\n                  <option value=\"powerOfAttorney\">Under Power of Attorney</option>\n                </select>\n              </div>\n              <div class=\"form-group\">\n                <label>Registration CIN No</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"registrationNo\">\n              </div>\n              <div class=\"form-group\">\n                <label>Full Office Address</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"officeAddress\">\n              </div>\n              <div class=\"form-group\">\n                <label>Registration Authority</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"registrationAuthority\">\n              </div>\n              <div class=\"form-group\">\n                <label>Registration MSME Number</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"registrationMsmeNumber\">\n              </div>\n              <div class=\"form-group\">\n                <label>GST Number</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"gstNumber\">\n              </div>\n              <div class=\"form-group\">\n                <label>PAN Number</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"panNumber\">\n              </div>\n              <div class=\"form-group\">\n                <label>TAN Number</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"tanNumber\">\n              </div>\n              <div class=\"form-group\">\n                <label>Union Enrollment Number</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"unionEnrollmentNumber\">\n              </div>\n            </div>\n\n            <div class=\"form-group\" formGroupName=\"firmAddress\">\n              <label class=\"form-title\">Firm Contact Details</label><br>\n              <div formGroupName=\"permanentAddress\">\n                <div class=\"form-group\">\n                  <label>Address</label>\n                  <input class=\"form-control\" type=\"text\" formControlName=\"address\">\n                </div>\n                <div class=\"form-group\">\n                  <label>Pincode</label>\n                  <input class=\"form-control\" type=\"number\" formControlName=\"pincode\">\n                </div>\n                <div class=\"form-group\">\n                  <label>Phone number</label>\n                  <input class=\"form-control\" type=\"number\" formControlName=\"phoneNo\">\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group col-md-12 text-center\">\n              <button class=\"btn btn-uspl\">Save Changes</button>\n            </div>\n          </form>\n        </ng-template>\n      </ngb-tab>\n\n\n      <ngb-tab title=\"OWNER DETAILS\" id=\"ownerDetails\">\n        <ng-template ngbTabContent>\n          <form [formGroup]=\"ownerForm\" (ngSubmit)=\"onSubmit('ownerForm')\">\n            <div class=\"form-group mt-5\" formGroupName=\"ownerDetails\">\n\n              <div class=\"col-md-12 form-group d-flex justify-content-center mt-5\">\n                I am\n                <select class=\"form-control w-25 ml-2 mr-2\" formControlName=\"profileRegistrar\">\n                  <option value=\"OWNER\">OWNER</option>\n                  <option value=\"MANAGER\">MANAGER</option>\n                  <option value=\"OTHER\">OTHER</option>\n                </select>\n                of this company\n              </div>\n\n              <label class=\"form-title\">Owner Details</label><br>\n              <div class=\"form-group\">\n                <label>Name</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"name\">\n              </div>\n              <div class=\"form-group\">\n                <label>Mobile</label>\n                <input class=\"form-control\" type=\"number\" formControlName=\"mobile\">\n              </div>\n              <div class=\"form-group\">\n                <label>Email</label>\n                <input class=\"form-control\" type=\"email\" formControlName=\"email\">\n              </div>\n              <div class=\"form-group\">\n                <label>PAN number</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"pan\">\n              </div>\n              <div formGroupName=\"address\">\n                <div class=\"form-group\">\n                  <label>Address</label>\n                  <input class=\"form-control\" type=\"text\" formControlName=\"address\">\n                </div>\n                <div class=\"form-group\">\n                  <label>Pincode</label>\n                  <input class=\"form-control\" type=\"number\" formControlName=\"pincode\">\n                </div>\n                <div class=\"form-group\">\n                  <label>Phone number</label>\n                  <input class=\"form-control\" type=\"number\" formControlName=\"phoneNo\">\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\" formGroupName=\"bankDetails\">\n              <label class=\"form-title\">Bank Details</label><br>\n              <div class=\"form-group\">\n                <label>Bank Name</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"bankName\">\n              </div>\n              <div class=\"form-group\">\n                <label>Bank Account number</label>\n                <input class=\"form-control\" type=\"number\" formControlName=\"bankAccountNo\">\n              </div>\n              <div class=\"form-group\">\n                <label>Bank IFSC</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"bankIfsc\">\n              </div>\n              <div class=\"form-group\">\n                <label>Bank Address</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"bankAddress\">\n              </div>\n            </div>\n            <div class=\"form-group col-md-12 text-center\">\n              <button class=\"btn btn-uspl\">Save Changes</button>\n            </div>\n          </form>\n        </ng-template>\n      </ngb-tab>\n\n\n      <ngb-tab title=\"UPLOAD IMAGE\" id=\"imagesForm\">\n        <ng-template ngbTabContent>\n          <form [formGroup]=\"imageForm\" (ngSubmit)=\"onSubmit('imageForm')\">\n\n<!--            <div class=\"row form-group upload-form-group mt-5\">-->\n<!--              <div class=\"col-md-8\">-->\n<!--                <label> Upload your Registration number Proof </label>-->\n<!--                <input class=\"form-control \" type=\"file\" formControlName=\"registrationNoProof\"-->\n<!--                       (change)=\"imgPreviewRegistrationNo($event)\">-->\n<!--              </div>-->\n<!--              <div class=\"col-md-4 image-preview\">-->\n<!--                <img [src]=\"previewUrlregistrationNo\">-->\n<!--              </div>-->\n<!--            </div>-->\n\n            <div class=\"row form-group upload-form-group mt-5\">\n              <div class=\"col-md-8\">\n                <label> Upload your Registration MSME number Proof </label>\n                <input class=\"form-control \" type=\"file\"\n                       formControlName=\"registrationMsmeNumberProof\"\n                       (change)=\"imgPreviewregistrationMsmeNumber($event)\">\n              </div>\n              <div class=\"col-md-4 image-preview\">\n                <img [src]=\"previewUrlregistrationMsmeNumber\">\n              </div>\n            </div>\n\n            <div class=\"row form-group upload-form-group\">\n              <div class=\"col-md-8\">\n                <label> Upload your GST number Proof </label>\n                <input class=\"form-control \" type=\"file\" formControlName=\"gstNumberProof\"\n                       (change)=\"imgPreviewgstNumber($event)\">\n              </div>\n              <div class=\"col-md-4 image-preview\">\n                <img [src]=\"previewUrlgstNumber\">\n              </div>\n            </div>\n\n            <div class=\"row form-group upload-form-group\">\n              <div class=\"col-md-8\">\n                <label> Upload your Registration CIN Proof </label>\n                <input class=\"form-control \" type=\"file\" formControlName=\"registrationCinProof\"\n                       (change)=\"imgPreviewaddress($event)\">\n              </div>\n              <div class=\"col-md-4 image-preview\">\n                <img [src]=\"previewUrlCinProof\">\n              </div>\n            </div>\n\n            <div class=\"form-group col-md-12 text-center\">\n              <button class=\"btn btn-uspl\">Save Changes</button>\n            </div>\n          </form>\n        </ng-template>\n      </ngb-tab>\n\n    </ngb-tabset>\n  </div>\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/roles/business/travelcurator/store/travelcurator.actions.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/roles/business/travelcurator/store/travelcurator.actions.ts ***!
  \*****************************************************************************/
/*! exports provided: TRY_FETCH_TRAVELCURATOR, SET_TRAVELCURATOR, TRAVELCURATOR_EDIT, UPLOAD_TRAVELCURATOR_IMAGES, TryFetchTravelCurator, SetTravelCurator, UploadTravelCuratorImages, TravelCuratorEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_FETCH_TRAVELCURATOR", function() { return TRY_FETCH_TRAVELCURATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TRAVELCURATOR", function() { return SET_TRAVELCURATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRAVELCURATOR_EDIT", function() { return TRAVELCURATOR_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_TRAVELCURATOR_IMAGES", function() { return UPLOAD_TRAVELCURATOR_IMAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryFetchTravelCurator", function() { return TryFetchTravelCurator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTravelCurator", function() { return SetTravelCurator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadTravelCuratorImages", function() { return UploadTravelCuratorImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelCuratorEdit", function() { return TravelCuratorEdit; });
// travel curator
const TRY_FETCH_TRAVELCURATOR = 'TRY_FETCH_TRAVELCURATOR';
const SET_TRAVELCURATOR = 'SET_TRAVELCURATOR';
const TRAVELCURATOR_EDIT = 'TRAVELCURATOR_EDIT';
const UPLOAD_TRAVELCURATOR_IMAGES = 'UPLOAD_TRAVELCURATOR_IMAGES';
// classes for travel curator
class TryFetchTravelCurator {
    constructor() {
        this.type = TRY_FETCH_TRAVELCURATOR;
    }
}
class SetTravelCurator {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_TRAVELCURATOR;
    }
}
SetTravelCurator.ctorParameters = () => [
    { type: undefined }
];
class UploadTravelCuratorImages {
    constructor(payload) {
        this.payload = payload;
        this.type = UPLOAD_TRAVELCURATOR_IMAGES;
    }
}
UploadTravelCuratorImages.ctorParameters = () => [
    { type: undefined }
];
class TravelCuratorEdit {
    constructor(payload) {
        this.payload = payload;
        this.type = TRAVELCURATOR_EDIT;
    }
}
TravelCuratorEdit.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/roles/business/travelcurator/store/travelcurator.effects.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/roles/business/travelcurator/store/travelcurator.effects.ts ***!
  \*****************************************************************************/
/*! exports provided: TravelcuratorEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelcuratorEffects", function() { return TravelcuratorEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/serverEndpoints */ "./src/app/shared/serverEndpoints.ts");
/* harmony import */ var _travelcurator_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./travelcurator.actions */ "./src/app/roles/business/travelcurator/store/travelcurator.actions.ts");







let TravelcuratorEffects = class TravelcuratorEffects {
    constructor(action, http) {
        this.action = action;
        this.http = http;
        // effects for travel curator
        this.editTravelCurator = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_travelcurator_actions__WEBPACK_IMPORTED_MODULE_6__["TRAVELCURATOR_EDIT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((payload) => {
            return payload.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((data) => {
            return this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__["edittravelcurator"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((response) => {
            if (response.status === 200) {
                return [
                    {
                        type: _travelcurator_actions__WEBPACK_IMPORTED_MODULE_6__["SET_TRAVELCURATOR"],
                        payload: response.body
                    }
                ];
            }
        }));
        this.uploadTravelCuratorImages = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_travelcurator_actions__WEBPACK_IMPORTED_MODULE_6__["UPLOAD_TRAVELCURATOR_IMAGES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((data) => {
            return this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__["uploadtravelcuratorImages"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((response) => {
            if (response.status === 200) {
                return [
                    {
                        type: _travelcurator_actions__WEBPACK_IMPORTED_MODULE_6__["SET_TRAVELCURATOR"],
                        payload: response.body
                    }
                ];
            }
        }));
        this.fetchTravelCurator = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_travelcurator_actions__WEBPACK_IMPORTED_MODULE_6__["TRY_FETCH_TRAVELCURATOR"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => {
            return this.http.get(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__["fetchtravelcurator"], { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((response) => {
            if (response.status === 200) {
                return [
                    {
                        type: _travelcurator_actions__WEBPACK_IMPORTED_MODULE_6__["SET_TRAVELCURATOR"],
                        payload: response.body
                    }
                ];
            }
        }));
    }
};
TravelcuratorEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], TravelcuratorEffects.prototype, "editTravelCurator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], TravelcuratorEffects.prototype, "uploadTravelCuratorImages", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], TravelcuratorEffects.prototype, "fetchTravelCurator", void 0);
TravelcuratorEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TravelcuratorEffects);



/***/ }),

/***/ "./src/app/roles/business/travelcurator/store/travelcurator.reducer.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/roles/business/travelcurator/store/travelcurator.reducer.ts ***!
  \*****************************************************************************/
/*! exports provided: TravelcuratorReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelcuratorReducer", function() { return TravelcuratorReducer; });
/* harmony import */ var _travelcurator_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../travelcurator.model */ "./src/app/roles/business/travelcurator/travelcurator.model.ts");

const initialState = {
    travelCurator: new _travelcurator_model__WEBPACK_IMPORTED_MODULE_0__["TravelcuratorModel"]('', '', '', '', '', '', '', '', '', '', {
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
function TravelcuratorReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_TRAVELCURATOR': {
            return Object.assign({}, state, { travelCurator: action.payload });
        }
        default: {
            return Object.assign({}, state);
        }
    }
}


/***/ }),

/***/ "./src/app/roles/business/travelcurator/travelcurator-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/roles/business/travelcurator/travelcurator-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: TravelcuratorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelcuratorRoutingModule", function() { return TravelcuratorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _travelcurator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./travelcurator.component */ "./src/app/roles/business/travelcurator/travelcurator.component.ts");
/* harmony import */ var _travelcuratoredit_travelcuratoredit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./travelcuratoredit/travelcuratoredit.component */ "./src/app/roles/business/travelcurator/travelcuratoredit/travelcuratoredit.component.ts");





const routes = [
    {
        path: '', component: _travelcurator_component__WEBPACK_IMPORTED_MODULE_3__["TravelcuratorComponent"], children: [
            { path: 'dashboard', component: _travelcurator_component__WEBPACK_IMPORTED_MODULE_3__["TravelcuratorComponent"] },
            { path: 'editProfile', component: _travelcuratoredit_travelcuratoredit_component__WEBPACK_IMPORTED_MODULE_4__["TravelcuratoreditComponent"] }
        ]
    }
];
let TravelcuratorRoutingModule = class TravelcuratorRoutingModule {
};
TravelcuratorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TravelcuratorRoutingModule);



/***/ }),

/***/ "./src/app/roles/business/travelcurator/travelcurator.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/roles/business/travelcurator/travelcurator.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2J1c2luZXNzL3RyYXZlbGN1cmF0b3IvdHJhdmVsY3VyYXRvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/roles/business/travelcurator/travelcurator.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/roles/business/travelcurator/travelcurator.component.ts ***!
  \*************************************************************************/
/*! exports provided: TravelcuratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelcuratorComponent", function() { return TravelcuratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TravelcuratorComponent = class TravelcuratorComponent {
    constructor() { }
    ngOnInit() {
    }
};
TravelcuratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-travelcurator',
        template: __webpack_require__(/*! raw-loader!./travelcurator.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/travelcurator/travelcurator.component.html"),
        styles: [__webpack_require__(/*! ./travelcurator.component.css */ "./src/app/roles/business/travelcurator/travelcurator.component.css")]
    })
], TravelcuratorComponent);



/***/ }),

/***/ "./src/app/roles/business/travelcurator/travelcurator.model.ts":
/*!*********************************************************************!*\
  !*** ./src/app/roles/business/travelcurator/travelcurator.model.ts ***!
  \*********************************************************************/
/*! exports provided: TravelcuratorModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelcuratorModel", function() { return TravelcuratorModel; });
class TravelcuratorModel {
    constructor(name, registrationType, registrationNo, registrationNoProof, officeAddress, registrationAuthority, registrationMsmeNumber, gstNumber, panNumber, unionEnrollmentNumber, firmAddress, ownerDetails, registrationCinProof, gstNumberProof, registrationMsmeNumberProof) {
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
}
TravelcuratorModel.ctorParameters = () => [
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
];


/***/ }),

/***/ "./src/app/roles/business/travelcurator/travelcurator.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/roles/business/travelcurator/travelcurator.module.ts ***!
  \**********************************************************************/
/*! exports provided: TravelcuratorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelcuratorModule", function() { return TravelcuratorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _travelcurator_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./travelcurator-routing.module */ "./src/app/roles/business/travelcurator/travelcurator-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _travelcurator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./travelcurator.component */ "./src/app/roles/business/travelcurator/travelcurator.component.ts");
/* harmony import */ var _travelcuratoredit_travelcuratoredit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./travelcuratoredit/travelcuratoredit.component */ "./src/app/roles/business/travelcurator/travelcuratoredit/travelcuratoredit.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _store_travelcurator_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/travelcurator.reducer */ "./src/app/roles/business/travelcurator/store/travelcurator.reducer.ts");
/* harmony import */ var _store_travelcurator_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/travelcurator.effects */ "./src/app/roles/business/travelcurator/store/travelcurator.effects.ts");












let TravelcuratorModule = class TravelcuratorModule {
};
TravelcuratorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _travelcurator_component__WEBPACK_IMPORTED_MODULE_6__["TravelcuratorComponent"],
            _travelcuratoredit_travelcuratoredit_component__WEBPACK_IMPORTED_MODULE_7__["TravelcuratoreditComponent"]
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _travelcurator_routing_module__WEBPACK_IMPORTED_MODULE_3__["TravelcuratorRoutingModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forFeature('travelCurator', _store_travelcurator_reducer__WEBPACK_IMPORTED_MODULE_10__["TravelcuratorReducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature([_store_travelcurator_effects__WEBPACK_IMPORTED_MODULE_11__["TravelcuratorEffects"]])
        ]
    })
], TravelcuratorModule);



/***/ }),

/***/ "./src/app/roles/business/travelcurator/travelcuratoredit/travelcuratoredit.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/roles/business/travelcurator/travelcuratoredit/travelcuratoredit.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upload-form-group{\n  padding: 20px;\n  border: 2px dashed #2d0829;\n}\n\n.upload-form-group input{\n  height: auto;\n}\n\n.image-preview{\n  text-align: center;\n}\n\n.image-preview img{\n  height: 100px;\n  width: auto;\n  max-width: 120px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYnVzaW5lc3MvdHJhdmVsY3VyYXRvci90cmF2ZWxjdXJhdG9yZWRpdC90cmF2ZWxjdXJhdG9yZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvYnVzaW5lc3MvdHJhdmVsY3VyYXRvci90cmF2ZWxjdXJhdG9yZWRpdC90cmF2ZWxjdXJhdG9yZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwbG9hZC1mb3JtLWdyb3Vwe1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IDJweCBkYXNoZWQgIzJkMDgyOTtcbn1cblxuLnVwbG9hZC1mb3JtLWdyb3VwIGlucHV0e1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5pbWFnZS1wcmV2aWV3e1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWFnZS1wcmV2aWV3IGltZ3tcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMTIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/roles/business/travelcurator/travelcuratoredit/travelcuratoredit.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/roles/business/travelcurator/travelcuratoredit/travelcuratoredit.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: TravelcuratoreditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelcuratoreditComponent", function() { return TravelcuratoreditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_travelcurator_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/travelcurator.actions */ "./src/app/roles/business/travelcurator/store/travelcurator.actions.ts");





let TravelcuratoreditComponent = class TravelcuratoreditComponent {
    constructor(fb, store) {
        this.fb = fb;
        this.store = store;
        this.registrationMsmeImage = null;
        this.registrationGstImage = null;
        this.registrationCinImage = null;
        this.previewUrlregistrationMsmeNumber = '../../../assets/icons/uploadPic.png';
        this.previewUrlgstNumber = '../../../assets/icons/uploadPic.png';
        this.previewUrlCinProof = '../../../assets/icons/uploadPic.png';
    }
    ngOnInit() {
        this.store.dispatch(new _store_travelcurator_actions__WEBPACK_IMPORTED_MODULE_4__["TryFetchTravelCurator"]());
        this.imageForm = this.fb.group({
            registrationCinProof: [''],
            gstNumberProof: [''],
            registrationMsmeNumberProof: ['']
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
        this.store.select('travelCurator').subscribe(value => {
            console.log(value);
            this.travelCuratorStore = value.travelCurator;
            this.previewUrlCinProof = value.travelCurator.registrationCinProof;
            this.previewUrlgstNumber = value.travelCurator.gstNumberProof;
            this.previewUrlregistrationMsmeNumber = value.travelCurator.registrationMsmeNumberProof;
            this.editForm.patchValue(this.travelCuratorStore);
            this.imageForm.patchValue(this.travelCuratorStore);
            this.ownerForm.patchValue(this.travelCuratorStore);
        });
    }
    imgPreviewregistrationMsmeNumber(fileInput) {
        this.registrationMsmeImage = fileInput.target.files[0];
        const mimeType = this.registrationMsmeImage.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(this.registrationMsmeImage);
        reader.onload = () => {
            this.previewUrlregistrationMsmeNumber = reader.result;
        };
    }
    imgPreviewgstNumber(fileInput) {
        this.registrationGstImage = fileInput.target.files[0];
        const mimeType = this.registrationGstImage.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(this.registrationGstImage);
        reader.onload = () => {
            this.previewUrlgstNumber = reader.result;
        };
    }
    imgPreviewaddress(fileInput) {
        this.registrationCinImage = fileInput.target.files[0];
        const mimeType = this.registrationCinImage.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(this.registrationCinImage);
        reader.onload = () => {
            this.previewUrlCinProof = reader.result;
        };
    }
    onSubmit(type) {
        if (type === 'imageForm') {
            const data = new FormData();
            data.append('registrationCinProof', this.registrationCinImage);
            data.append('gstNumberProof', this.registrationGstImage);
            data.append('registrationMsmeNumberProof', this.registrationMsmeImage);
            this.store.dispatch(new _store_travelcurator_actions__WEBPACK_IMPORTED_MODULE_4__["UploadTravelCuratorImages"](data));
        }
        else {
            if (type === 'ownerForm') {
                this.tabSet.select('imagesForm');
            }
            else if (type === 'editForm') {
                this.tabSet.select('ownerDetails');
            }
            Object.assign(this.travelCuratorStore, this.editForm.value);
            Object.assign(this.travelCuratorStore, this.ownerForm.value);
            this.store.dispatch(new _store_travelcurator_actions__WEBPACK_IMPORTED_MODULE_4__["TravelCuratorEdit"](this.travelCuratorStore));
        }
    }
};
TravelcuratoreditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('t', { static: false })
], TravelcuratoreditComponent.prototype, "tabSet", void 0);
TravelcuratoreditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-travelcuratoredit',
        template: __webpack_require__(/*! raw-loader!./travelcuratoredit.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/travelcurator/travelcuratoredit/travelcuratoredit.component.html"),
        styles: [__webpack_require__(/*! ./travelcuratoredit.component.css */ "./src/app/roles/business/travelcurator/travelcuratoredit/travelcuratoredit.component.css")]
    })
], TravelcuratoreditComponent);



/***/ })

}]);
//# sourceMappingURL=travelcurator-travelcurator-module-es2015.js.map