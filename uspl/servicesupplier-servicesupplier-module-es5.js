(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["servicesupplier-servicesupplier-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/servicesupplier/servicesupplier.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/servicesupplier/servicesupplier.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/servicesupplier/servicesupplieredit/servicesupplieredit.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/servicesupplier/servicesupplieredit/servicesupplieredit.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 offset-md-3 p-5 mb-5 shadow-boxed\">\n    <div class=\"col-md-12\">\n        <ngb-tabset type=\"pills\" [justify]=\"'center'\"  #t=\"ngbTabset\">\n\n            <ngb-tab title=\"FIRM DETAILS\">\n                <ng-template ngbTabContent >\n                    <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit('editForm')\">\n                        <div class=\"form-group mt-5\">\n                            <label class=\"form-title\">Firm Details</label><br>\n                            <div class=\"form-group\">\n                                <label>Name of Comapny</label>\n                                <input class=\"form-control\" type=\"text\" formControlName=\"name\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Registration Type</label>\n                                <select class=\"form-control\" formControlName=\"registrationType\">\n                                    <option value=\"privateLimitied\">Private Limited</option>\n                                    <option value=\"publicLimited\">Public Limited</option>\n                                    <option value=\"proprietorship\">Proprietorship</option>\n                                    <option value=\"partnership\">Partnership</option>\n                                    <option value=\"powerOfAttorney\">Under Power of Attorney</option>\n                                </select>\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Registration CIN No</label>\n                                <input class=\"form-control\" type=\"text\" formControlName=\"registrationNo\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Full Office Address</label>\n                                <input class=\"form-control\" type=\"text\" formControlName=\"officeAddress\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Registration Authority</label>\n                                <input class=\"form-control\" type=\"text\" formControlName=\"registrationAuthority\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Registration MSME Number</label>\n                                <input class=\"form-control\" type=\"text\" formControlName=\"registrationMsmeNumber\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>GST Number</label>\n                                <input class=\"form-control\" type=\"text\" formControlName=\"gstNumber\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>PAN Number</label>\n                                <input class=\"form-control\" type=\"text\" formControlName=\"panNumber\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>TAN Number</label>\n                                <input class=\"form-control\" type=\"text\" formControlName=\"tanNumber\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Union Enrollment Number</label>\n                                <input class=\"form-control\" type=\"text\" formControlName=\"unionEnrollmentNumber\">\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\" formGroupName=\"firmAddress\">\n                            <label class=\"form-title\">Firm Contact Details</label><br>\n                            <div formGroupName=\"permanentAddress\">\n                                <div class=\"form-group\">\n                                    <label>Address</label>\n                                    <input class=\"form-control\" type=\"text\" formControlName=\"address\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>Pincode</label>\n                                    <input class=\"form-control\" type=\"number\" formControlName=\"pincode\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>Phone number</label>\n                                    <input class=\"form-control\" type=\"number\" formControlName=\"phoneNo\">\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group col-md-12 text-center\">\n                            <button class=\"btn btn-uspl\">Save Changes</button>\n                        </div>\n                    </form>\n                </ng-template>\n            </ngb-tab>\n\n\n            <ngb-tab title=\"OWNER DETAILS\" id=\"ownerDetails\">\n                <ng-template ngbTabContent>\n                    <form [formGroup]=\"ownerForm\" (ngSubmit)=\"onSubmit('ownerForm')\">\n                        <div class=\"form-group mt-5\" formGroupName=\"ownerDetails\">\n\n                            <div class=\"col-md-12 form-group d-flex justify-content-center mt-5\">\n                                I am\n                                <select class=\"form-control w-25 ml-2 mr-2\" formControlName=\"profileRegistrar\">\n                                    <option value=\"OWNER\">OWNER</option>\n                                    <option value=\"MANAGER\">MANAGER</option>\n                                    <option value=\"OTHER\">OTHER</option>\n                                </select>\n                                of this company\n                            </div>\n\n                            <label class=\"form-title\">Owner Details</label><br>\n                            <div class=\"form-group\">\n                                <label>Name</label>\n                                <input class=\"form-control\" type=\"text\" formControlName=\"name\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Mobile</label>\n                                <input class=\"form-control\" type=\"number\" formControlName=\"mobile\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Email</label>\n                                <input class=\"form-control\" type=\"email\" formControlName=\"email\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>PAN number</label>\n                                <input class=\"form-control\" type=\"text\" formControlName=\"pan\">\n                            </div>\n                            <div formGroupName=\"address\">\n                                <div class=\"form-group\">\n                                    <label>Address</label>\n                                    <input class=\"form-control\" type=\"text\" formControlName=\"address\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>Pincode</label>\n                                    <input class=\"form-control\" type=\"number\" formControlName=\"pincode\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>Phone number</label>\n                                    <input class=\"form-control\" type=\"number\" formControlName=\"phoneNo\">\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\" formGroupName=\"bankDetails\">\n                            <label class=\"form-title\">Bank Details</label><br>\n                            <div class=\"form-group\">\n                                <label>Bank Name</label>\n                                <input class=\"form-control\" type=\"text\" formControlName=\"bankName\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Bank Account number</label>\n                                <input class=\"form-control\" type=\"number\" formControlName=\"bankAccountNo\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Bank IFSC</label>\n                                <input class=\"form-control\" type=\"text\" formControlName=\"bankIfsc\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Bank Address</label>\n                                <input class=\"form-control\" type=\"text\" formControlName=\"bankAddress\">\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-12 text-center\">\n                            <button class=\"btn btn-uspl\">Save Changes</button>\n                        </div>\n                    </form>\n                </ng-template>\n            </ngb-tab>\n\n\n            <ngb-tab title=\"UPLOAD IMAGE\" id=\"imagesForm\">\n                <ng-template ngbTabContent>\n                    <form [formGroup]=\"imageForm\" (ngSubmit)=\"onSubmit('imageForm')\">\n\n<!--                        <div class=\"row form-group upload-form-group mt-5\">-->\n<!--                            <div class=\"col-md-8\">-->\n<!--                                <label> Upload your Registration number Proof </label>-->\n<!--                                <input class=\"form-control \" type=\"file\" formControlName=\"registrationNoProof\"-->\n<!--                                       (change)=\"imgPreviewRegistrationNo($event)\">-->\n<!--                            </div>-->\n<!--                            <div class=\"col-md-4 image-preview\">-->\n<!--                                <img [src]=\"previewUrlregistrationNo\">-->\n<!--                            </div>-->\n<!--                        </div>-->\n\n                      <div class=\"row form-group upload-form-group mt-5\">\n                            <div class=\"col-md-8\">\n                                <label> Upload your Registration MSME number Proof </label>\n                                <input class=\"form-control \" type=\"file\"\n                                       formControlName=\"registrationMsmeNumberProof\"\n                                       (change)=\"imgPreviewregistrationMsmeNumber($event)\">\n                            </div>\n                            <div class=\"col-md-4 image-preview\">\n                                <img [src]=\"previewUrlregistrationMsmeNumber\">\n                            </div>\n                        </div>\n\n                        <div class=\"row form-group upload-form-group\">\n                            <div class=\"col-md-8\">\n                                <label> Upload your GST number Proof </label>\n                                <input class=\"form-control \" type=\"file\" formControlName=\"gstNumberProof\"\n                                       (change)=\"imgPreviewgstNumber($event)\">\n                            </div>\n                            <div class=\"col-md-4 image-preview\">\n                                <img [src]=\"previewUrlgstNumber\">\n                            </div>\n                        </div>\n\n                        <div class=\"row form-group upload-form-group\">\n                            <div class=\"col-md-8\">\n                                <label> Upload your Registration CIN Proof </label>\n                                <input class=\"form-control \" type=\"file\" formControlName=\"registrationCinProof\"\n                                       (change)=\"imgPreviewaddress($event)\">\n                            </div>\n                            <div class=\"col-md-4 image-preview\">\n                                <img [src]=\"previewUrlCinProof\">\n                            </div>\n                        </div>\n\n                        <div class=\"form-group col-md-12 text-center\">\n                            <button class=\"btn btn-uspl\">Save Changes</button>\n                        </div>\n                    </form>\n                </ng-template>\n            </ngb-tab>\n\n        </ngb-tabset>\n    </div>\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/roles/business/servicesupplier/servicesupplier-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/roles/business/servicesupplier/servicesupplier-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ServicesupplierRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesupplierRoutingModule", function() { return ServicesupplierRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicesupplier_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./servicesupplier.component */ "./src/app/roles/business/servicesupplier/servicesupplier.component.ts");
/* harmony import */ var _servicesupplieredit_servicesupplieredit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./servicesupplieredit/servicesupplieredit.component */ "./src/app/roles/business/servicesupplier/servicesupplieredit/servicesupplieredit.component.ts");





var routes = [
    {
        path: '', component: _servicesupplier_component__WEBPACK_IMPORTED_MODULE_3__["ServicesupplierComponent"], children: [
            { path: 'dashboard', component: _servicesupplier_component__WEBPACK_IMPORTED_MODULE_3__["ServicesupplierComponent"] },
            { path: 'editProfile', component: _servicesupplieredit_servicesupplieredit_component__WEBPACK_IMPORTED_MODULE_4__["ServicesuppliereditComponent"] }
        ]
    },
];
var ServicesupplierRoutingModule = /** @class */ (function () {
    function ServicesupplierRoutingModule() {
    }
    ServicesupplierRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ServicesupplierRoutingModule);
    return ServicesupplierRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/business/servicesupplier/servicesupplier.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/roles/business/servicesupplier/servicesupplier.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2J1c2luZXNzL3NlcnZpY2VzdXBwbGllci9zZXJ2aWNlc3VwcGxpZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/roles/business/servicesupplier/servicesupplier.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/roles/business/servicesupplier/servicesupplier.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ServicesupplierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesupplierComponent", function() { return ServicesupplierComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicesupplierComponent = /** @class */ (function () {
    function ServicesupplierComponent() {
    }
    ServicesupplierComponent.prototype.ngOnInit = function () {
    };
    ServicesupplierComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-servicesupplier',
            template: __webpack_require__(/*! raw-loader!./servicesupplier.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/servicesupplier/servicesupplier.component.html"),
            styles: [__webpack_require__(/*! ./servicesupplier.component.css */ "./src/app/roles/business/servicesupplier/servicesupplier.component.css")]
        })
    ], ServicesupplierComponent);
    return ServicesupplierComponent;
}());



/***/ }),

/***/ "./src/app/roles/business/servicesupplier/servicesupplier.model.ts":
/*!*************************************************************************!*\
  !*** ./src/app/roles/business/servicesupplier/servicesupplier.model.ts ***!
  \*************************************************************************/
/*! exports provided: ServicesupplierModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesupplierModel", function() { return ServicesupplierModel; });
var ServicesupplierModel = /** @class */ (function () {
    function ServicesupplierModel(name, registrationType, registrationNo, registrationNoProof, officeAddress, registrationAuthority, registrationMsmeNumber, gstNumber, panNumber, unionEnrollmentNumber, firmAddress, ownerDetails, registrationCinProof, gstNumberProof, registrationMsmeNumberProof) {
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
    ServicesupplierModel.ctorParameters = function () { return [
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
    return ServicesupplierModel;
}());



/***/ }),

/***/ "./src/app/roles/business/servicesupplier/servicesupplier.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/roles/business/servicesupplier/servicesupplier.module.ts ***!
  \**************************************************************************/
/*! exports provided: ServicesupplierModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesupplierModule", function() { return ServicesupplierModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _servicesupplier_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./servicesupplier-routing.module */ "./src/app/roles/business/servicesupplier/servicesupplier-routing.module.ts");
/* harmony import */ var _servicesupplier_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./servicesupplier.component */ "./src/app/roles/business/servicesupplier/servicesupplier.component.ts");
/* harmony import */ var _servicesupplieredit_servicesupplieredit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./servicesupplieredit/servicesupplieredit.component */ "./src/app/roles/business/servicesupplier/servicesupplieredit/servicesupplieredit.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_servicesupplier_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/servicesupplier.reducer */ "./src/app/roles/business/servicesupplier/store/servicesupplier.reducer.ts");
/* harmony import */ var _store_servicesupplier_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/servicesupplier.effects */ "./src/app/roles/business/servicesupplier/store/servicesupplier.effects.ts");












var ServicesupplierModule = /** @class */ (function () {
    function ServicesupplierModule() {
    }
    ServicesupplierModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _servicesupplier_component__WEBPACK_IMPORTED_MODULE_4__["ServicesupplierComponent"],
                _servicesupplieredit_servicesupplieredit_component__WEBPACK_IMPORTED_MODULE_5__["ServicesuppliereditComponent"]
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _servicesupplier_routing_module__WEBPACK_IMPORTED_MODULE_3__["ServicesupplierRoutingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forFeature('serviceSupplier', _store_servicesupplier_reducer__WEBPACK_IMPORTED_MODULE_10__["ServiceSupplierReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature([_store_servicesupplier_effects__WEBPACK_IMPORTED_MODULE_11__["ServicesupplierEffects"]])
            ]
        })
    ], ServicesupplierModule);
    return ServicesupplierModule;
}());



/***/ }),

/***/ "./src/app/roles/business/servicesupplier/servicesupplieredit/servicesupplieredit.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/roles/business/servicesupplier/servicesupplieredit/servicesupplieredit.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upload-form-group{\n    padding: 20px;\n    border: 2px dashed #2d0829;\n}\n\n.upload-form-group input{\n    height: auto;\n}\n\n.image-preview{\n    text-align: center;\n}\n\n.image-preview img{\n    height: 100px;\n    width: auto;\n    max-width: 120px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYnVzaW5lc3Mvc2VydmljZXN1cHBsaWVyL3NlcnZpY2VzdXBwbGllcmVkaXQvc2VydmljZXN1cHBsaWVyZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2J1c2luZXNzL3NlcnZpY2VzdXBwbGllci9zZXJ2aWNlc3VwcGxpZXJlZGl0L3NlcnZpY2VzdXBwbGllcmVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGxvYWQtZm9ybS1ncm91cHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjMmQwODI5O1xufVxuXG4udXBsb2FkLWZvcm0tZ3JvdXAgaW5wdXR7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaW1hZ2UtcHJldmlld3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWFnZS1wcmV2aWV3IGltZ3tcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1heC13aWR0aDogMTIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/roles/business/servicesupplier/servicesupplieredit/servicesupplieredit.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/roles/business/servicesupplier/servicesupplieredit/servicesupplieredit.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ServicesuppliereditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesuppliereditComponent", function() { return ServicesuppliereditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_servicesupplier_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/servicesupplier.actions */ "./src/app/roles/business/servicesupplier/store/servicesupplier.actions.ts");





var ServicesuppliereditComponent = /** @class */ (function () {
    function ServicesuppliereditComponent(fb, store) {
        this.fb = fb;
        this.store = store;
        this.registrationMsmeImage = null;
        this.registrationGstImage = null;
        this.registrationCinImage = null;
        this.previewUrlregistrationMsmeNumber = '../../../assets/icons/uploadPic.png';
        this.previewUrlgstNumber = '../../../assets/icons/uploadPic.png';
        this.previewUrlCinProof = '../../../assets/icons/uploadPic.png';
    }
    ServicesuppliereditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _store_servicesupplier_actions__WEBPACK_IMPORTED_MODULE_4__["TryFetchServiceSupplier"]());
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
        this.store.select('serviceSupplier').subscribe(function (value) {
            console.log(value);
            _this.serviceSupplierStore = value.serviceSupplier;
            _this.previewUrlCinProof = value.serviceSupplier.registrationCinProof;
            _this.previewUrlgstNumber = value.serviceSupplier.gstNumberProof;
            _this.previewUrlregistrationMsmeNumber = value.serviceSupplier.registrationMsmeNumberProof;
            // this.previewUrlregistrationNo = value.serviceSupplier.registrationNoProof;
            _this.editForm.patchValue(_this.serviceSupplierStore);
            _this.imageForm.patchValue(_this.serviceSupplierStore);
            _this.ownerForm.patchValue(_this.serviceSupplierStore);
        });
    };
    ServicesuppliereditComponent.prototype.imgPreviewregistrationMsmeNumber = function (fileInput) {
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
    ServicesuppliereditComponent.prototype.imgPreviewgstNumber = function (fileInput) {
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
    ServicesuppliereditComponent.prototype.imgPreviewaddress = function (fileInput) {
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
    ServicesuppliereditComponent.prototype.onSubmit = function (type) {
        if (type === 'imageForm') {
            var data = new FormData();
            data.append('registrationCinProof', this.registrationCinImage);
            data.append('gstNumberProof', this.registrationGstImage);
            data.append('registrationMsmeNumberProof', this.registrationMsmeImage);
            // data.append('registrationNoProof', this.registrationRcImage);
            this.store.dispatch(new _store_servicesupplier_actions__WEBPACK_IMPORTED_MODULE_4__["UploadServiceSupplierImages"](data));
        }
        else {
            if (type === 'ownerForm') {
                this.tabSet.select('imagesForm');
            }
            else if (type === 'editForm') {
                this.tabSet.select('ownerDetails');
            }
            Object.assign(this.serviceSupplierStore, this.editForm.value);
            Object.assign(this.serviceSupplierStore, this.ownerForm.value);
            this.store.dispatch(new _store_servicesupplier_actions__WEBPACK_IMPORTED_MODULE_4__["ServiceSupplierEdit"](this.serviceSupplierStore));
        }
    };
    ServicesuppliereditComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('t', { static: false })
    ], ServicesuppliereditComponent.prototype, "tabSet", void 0);
    ServicesuppliereditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-servicesupplieredit',
            template: __webpack_require__(/*! raw-loader!./servicesupplieredit.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/servicesupplier/servicesupplieredit/servicesupplieredit.component.html"),
            styles: [__webpack_require__(/*! ./servicesupplieredit.component.css */ "./src/app/roles/business/servicesupplier/servicesupplieredit/servicesupplieredit.component.css")]
        })
    ], ServicesuppliereditComponent);
    return ServicesuppliereditComponent;
}());



/***/ }),

/***/ "./src/app/roles/business/servicesupplier/store/servicesupplier.actions.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/roles/business/servicesupplier/store/servicesupplier.actions.ts ***!
  \*********************************************************************************/
/*! exports provided: TRY_FETCH_SERVICESUPPLIER, SET_SERVICESUPPLIER, SERVICESUPPLIER_EDIT, UPLOAD_SERVICESUPPLIER_IMAGES, TryFetchServiceSupplier, SetServiceSupplier, UploadServiceSupplierImages, ServiceSupplierEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_FETCH_SERVICESUPPLIER", function() { return TRY_FETCH_SERVICESUPPLIER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SERVICESUPPLIER", function() { return SET_SERVICESUPPLIER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICESUPPLIER_EDIT", function() { return SERVICESUPPLIER_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_SERVICESUPPLIER_IMAGES", function() { return UPLOAD_SERVICESUPPLIER_IMAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryFetchServiceSupplier", function() { return TryFetchServiceSupplier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetServiceSupplier", function() { return SetServiceSupplier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadServiceSupplierImages", function() { return UploadServiceSupplierImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceSupplierEdit", function() { return ServiceSupplierEdit; });
var TRY_FETCH_SERVICESUPPLIER = 'TRY_FETCH_SERVICESUPPLIER';
var SET_SERVICESUPPLIER = 'SET_SERVICESUPPLIER';
var SERVICESUPPLIER_EDIT = 'SERVICESUPPLIER_EDIT';
var UPLOAD_SERVICESUPPLIER_IMAGES = 'UPLOAD_SERVICESUPPLIER_IMAGES';
// classes for service supplier
var TryFetchServiceSupplier = /** @class */ (function () {
    function TryFetchServiceSupplier() {
        this.type = TRY_FETCH_SERVICESUPPLIER;
    }
    return TryFetchServiceSupplier;
}());

var SetServiceSupplier = /** @class */ (function () {
    function SetServiceSupplier(payload) {
        this.payload = payload;
        this.type = SET_SERVICESUPPLIER;
    }
    SetServiceSupplier.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return SetServiceSupplier;
}());

var UploadServiceSupplierImages = /** @class */ (function () {
    function UploadServiceSupplierImages(payload) {
        this.payload = payload;
        this.type = UPLOAD_SERVICESUPPLIER_IMAGES;
    }
    UploadServiceSupplierImages.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UploadServiceSupplierImages;
}());

var ServiceSupplierEdit = /** @class */ (function () {
    function ServiceSupplierEdit(payload) {
        this.payload = payload;
        this.type = SERVICESUPPLIER_EDIT;
    }
    ServiceSupplierEdit.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return ServiceSupplierEdit;
}());



/***/ }),

/***/ "./src/app/roles/business/servicesupplier/store/servicesupplier.effects.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/roles/business/servicesupplier/store/servicesupplier.effects.ts ***!
  \*********************************************************************************/
/*! exports provided: ServicesupplierEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesupplierEffects", function() { return ServicesupplierEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _servicesupplier_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./servicesupplier.actions */ "./src/app/roles/business/servicesupplier/store/servicesupplier.actions.ts");
/* harmony import */ var _shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/serverEndpoints */ "./src/app/shared/serverEndpoints.ts");







var ServicesupplierEffects = /** @class */ (function () {
    function ServicesupplierEffects(action, http) {
        var _this = this;
        this.action = action;
        this.http = http;
        // effects for service supplier
        this.editServiceSupplier = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_servicesupplier_actions__WEBPACK_IMPORTED_MODULE_5__["SERVICESUPPLIER_EDIT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (payload) {
            return payload.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (data) {
            return _this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_6__["editservicesuppliers"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (response) {
            if (response.status === 200) {
                return [
                    {
                        type: _servicesupplier_actions__WEBPACK_IMPORTED_MODULE_5__["SET_SERVICESUPPLIER"],
                        payload: response.body
                    }
                ];
            }
        }));
        this.uploadServiceSupplierImages = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_servicesupplier_actions__WEBPACK_IMPORTED_MODULE_5__["UPLOAD_SERVICESUPPLIER_IMAGES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (data) {
            return _this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_6__["uploadservicesuppliersImages"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (response) {
            if (response.status === 200) {
                return [
                    {
                        type: _servicesupplier_actions__WEBPACK_IMPORTED_MODULE_5__["SET_SERVICESUPPLIER"],
                        payload: response.body
                    }
                ];
            }
        }));
        this.fetchServiceSupplier = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_servicesupplier_actions__WEBPACK_IMPORTED_MODULE_5__["TRY_FETCH_SERVICESUPPLIER"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            return _this.http.get(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_6__["fetchservicesuppliers"], { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (response) {
            if (response.status === 200) {
                return [
                    {
                        type: _servicesupplier_actions__WEBPACK_IMPORTED_MODULE_5__["SET_SERVICESUPPLIER"],
                        payload: response.body
                    }
                ];
            }
        }));
    }
    ServicesupplierEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
    ], ServicesupplierEffects.prototype, "editServiceSupplier", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
    ], ServicesupplierEffects.prototype, "uploadServiceSupplierImages", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
    ], ServicesupplierEffects.prototype, "fetchServiceSupplier", void 0);
    ServicesupplierEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ServicesupplierEffects);
    return ServicesupplierEffects;
}());



/***/ }),

/***/ "./src/app/roles/business/servicesupplier/store/servicesupplier.reducer.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/roles/business/servicesupplier/store/servicesupplier.reducer.ts ***!
  \*********************************************************************************/
/*! exports provided: ServiceSupplierReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceSupplierReducer", function() { return ServiceSupplierReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _servicesupplier_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicesupplier.model */ "./src/app/roles/business/servicesupplier/servicesupplier.model.ts");


var initialState = {
    serviceSupplier: new _servicesupplier_model__WEBPACK_IMPORTED_MODULE_1__["ServicesupplierModel"]('', '', '', '', '', '', '', '', '', '', {
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
function ServiceSupplierReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'SET_SERVICESUPPLIER':
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { serviceSupplier: action.payload });
        default: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
        }
    }
}


/***/ })

}]);
//# sourceMappingURL=servicesupplier-servicesupplier-module-es5.js.map