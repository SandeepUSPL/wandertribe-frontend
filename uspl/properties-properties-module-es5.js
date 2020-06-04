(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["properties-properties-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/properties/properties.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/properties/properties.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/properties/propertiesedit/propertiesedit.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/properties/propertiesedit/propertiesedit.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 offset-md-3 p-5 mb-5 shadow-boxed\">\n  <div class=\"col-md-12\">\n    <ngb-tabset type=\"pills\" [justify]=\"'center'\" #t=\"ngbTabset\">\n\n      <ngb-tab title=\"FIRM DETAILS\">\n        <ng-template ngbTabContent>\n          <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit('editForm')\">\n            <div class=\"form-group mt-5\">\n              <label class=\"form-title\">Firm Details</label><br>\n              <div class=\"form-group\">\n                <label>Name of Comapny</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"name\">\n              </div>\n              <div class=\"form-group\">\n                <label>Registration Type</label>\n                <select class=\"form-control\" formControlName=\"registrationType\">\n                  <option value=\"privateLimitied\">Private Limited</option>\n                  <option value=\"publicLimited\">Public Limited</option>\n                  <option value=\"proprietorship\">Proprietorship</option>\n                  <option value=\"partnership\">Partnership</option>\n                  <option value=\"powerOfAttorney\">Under Power of Attorney</option>\n                </select>\n              </div>\n              <div class=\"form-group\">\n                <label>Registration CIN No</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"registrationNo\">\n              </div>\n              <div class=\"form-group\">\n                <label>Full Office Address</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"officeAddress\">\n              </div>\n              <div class=\"form-group\">\n                <label>Registration Authority</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"registrationAuthority\">\n              </div>\n              <div class=\"form-group\">\n                <label>Registration MSME Number</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"registrationMsmeNumber\">\n              </div>\n              <div class=\"form-group\">\n                <label>GST Number</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"gstNumber\">\n              </div>\n              <div class=\"form-group\">\n                <label>PAN Number</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"panNumber\">\n              </div>\n              <div class=\"form-group\">\n                <label>TAN Number</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"tanNumber\">\n              </div>\n              <div class=\"form-group\">\n                <label>Union Enrollment Number</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"unionEnrollmentNumber\">\n              </div>\n            </div>\n\n            <div class=\"form-group\" formGroupName=\"firmAddress\">\n              <label class=\"form-title\">Firm Contact Details</label><br>\n              <div formGroupName=\"permanentAddress\">\n                <div class=\"form-group\">\n                  <label>Address</label>\n                  <input class=\"form-control\" type=\"text\" formControlName=\"address\">\n                </div>\n                <div class=\"form-group\">\n                  <label>Pincode</label>\n                  <input class=\"form-control\" type=\"number\" formControlName=\"pincode\">\n                </div>\n                <div class=\"form-group\">\n                  <label>Phone number</label>\n                  <input class=\"form-control\" type=\"number\" formControlName=\"phoneNo\">\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group col-md-12 text-center\">\n              <button class=\"btn btn-uspl\">Save Changes</button>\n            </div>\n          </form>\n        </ng-template>\n      </ngb-tab>\n\n\n      <ngb-tab title=\"OWNER DETAILS\" id=\"ownerDetails\">\n        <ng-template ngbTabContent>\n          <form [formGroup]=\"ownerForm\" (ngSubmit)=\"onSubmit('ownerForm')\">\n            <div class=\"form-group mt-5\" formGroupName=\"ownerDetails\">\n\n              <div class=\"col-md-12 form-group d-flex justify-content-center mt-5\">\n                I am\n                <select class=\"form-control w-25 ml-2 mr-2\" formControlName=\"profileRegistrar\">\n                  <option value=\"OWNER\">OWNER</option>\n                  <option value=\"MANAGER\">MANAGER</option>\n                  <option value=\"OTHER\">OTHER</option>\n                </select>\n                of this company\n              </div>\n\n              <label class=\"form-title\">Owner Details</label><br>\n              <div class=\"form-group\">\n                <label>Name</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"name\">\n              </div>\n              <div class=\"form-group\">\n                <label>Mobile</label>\n                <input class=\"form-control\" type=\"number\" formControlName=\"mobile\">\n              </div>\n              <div class=\"form-group\">\n                <label>Email</label>\n                <input class=\"form-control\" type=\"email\" formControlName=\"email\">\n              </div>\n              <div class=\"form-group\">\n                <label>PAN number</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"pan\">\n              </div>\n              <div formGroupName=\"address\">\n                <div class=\"form-group\">\n                  <label>Address</label>\n                  <input class=\"form-control\" type=\"text\" formControlName=\"address\">\n                </div>\n                <div class=\"form-group\">\n                  <label>Pincode</label>\n                  <input class=\"form-control\" type=\"number\" formControlName=\"pincode\">\n                </div>\n                <div class=\"form-group\">\n                  <label>Phone number</label>\n                  <input class=\"form-control\" type=\"number\" formControlName=\"phoneNo\">\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\" formGroupName=\"bankDetails\">\n              <label class=\"form-title\">Bank Details</label><br>\n              <div class=\"form-group\">\n                <label>Bank Name</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"bankName\">\n              </div>\n              <div class=\"form-group\">\n                <label>Bank Account number</label>\n                <input class=\"form-control\" type=\"number\" formControlName=\"bankAccountNo\">\n              </div>\n              <div class=\"form-group\">\n                <label>Bank IFSC</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"bankIfsc\">\n              </div>\n              <div class=\"form-group\">\n                <label>Bank Address</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"bankAddress\">\n              </div>\n            </div>\n            <div class=\"form-group col-md-12 text-center\">\n              <button class=\"btn btn-uspl\">Save Changes</button>\n            </div>\n          </form>\n        </ng-template>\n      </ngb-tab>\n\n\n      <ngb-tab title=\"UPLOAD IMAGE\" id=\"imagesForm\">\n        <ng-template ngbTabContent>\n          <form [formGroup]=\"imageForm\" (ngSubmit)=\"onSubmit('imageForm')\">\n\n            <!--            <div class=\"row form-group upload-form-group mt-5\">-->\n            <!--              <div class=\"col-md-8\">-->\n            <!--                <label> Upload your Registration number Proof </label>-->\n            <!--                <input class=\"form-control \" type=\"file\" formControlName=\"registrationNoProof\"-->\n            <!--                       (change)=\"imgPreviewRegistrationNo($event)\">-->\n            <!--              </div>-->\n            <!--              <div class=\"col-md-4 image-preview\">-->\n            <!--                <img [src]=\"previewUrlregistrationNo\">-->\n            <!--              </div>-->\n            <!--            </div>-->\n\n            <div class=\"row form-group upload-form-group mt-5\">\n              <div class=\"col-md-8\">\n                <label> Upload your Registration MSME number Proof </label>\n                <input class=\"form-control \" type=\"file\"\n                       formControlName=\"registrationMsmeNumberProof\"\n                       (change)=\"imgPreviewregistrationMsmeNumber($event)\">\n              </div>\n              <div class=\"col-md-4 image-preview\">\n                <img [src]=\"previewUrlregistrationMsmeNumber\">\n              </div>\n            </div>\n\n            <div class=\"row form-group upload-form-group\">\n              <div class=\"col-md-8\">\n                <label> Upload your GST number Proof </label>\n                <input class=\"form-control \" type=\"file\" formControlName=\"gstNumberProof\"\n                       (change)=\"imgPreviewgstNumber($event)\">\n              </div>\n              <div class=\"col-md-4 image-preview\">\n                <img [src]=\"previewUrlgstNumber\">\n              </div>\n            </div>\n\n            <div class=\"row form-group upload-form-group\">\n              <div class=\"col-md-8\">\n                <label> Upload your Registration CIN Proof </label>\n                <input class=\"form-control \" type=\"file\" formControlName=\"registrationCinProof\"\n                       (change)=\"imgPreviewaddress($event)\">\n              </div>\n              <div class=\"col-md-4 image-preview\">\n                <img [src]=\"previewUrlCinProof\">\n              </div>\n            </div>\n\n            <div class=\"form-group col-md-12 text-center\">\n              <button class=\"btn btn-uspl\">Save Changes</button>\n            </div>\n          </form>\n        </ng-template>\n      </ngb-tab>\n\n    </ngb-tabset>\n  </div>\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/roles/business/properties/properties-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/roles/business/properties/properties-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: PropertiesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesRoutingModule", function() { return PropertiesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _properties_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties.component */ "./src/app/roles/business/properties/properties.component.ts");
/* harmony import */ var _propertiesedit_propertiesedit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./propertiesedit/propertiesedit.component */ "./src/app/roles/business/properties/propertiesedit/propertiesedit.component.ts");





var routes = [
    {
        path: '', component: _properties_component__WEBPACK_IMPORTED_MODULE_3__["PropertiesComponent"], children: [
            { path: 'dashboard', component: _properties_component__WEBPACK_IMPORTED_MODULE_3__["PropertiesComponent"] },
            { path: 'editProfile', component: _propertiesedit_propertiesedit_component__WEBPACK_IMPORTED_MODULE_4__["PropertieseditComponent"] }
        ]
    }
];
var PropertiesRoutingModule = /** @class */ (function () {
    function PropertiesRoutingModule() {
    }
    PropertiesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PropertiesRoutingModule);
    return PropertiesRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/business/properties/properties.component.css":
/*!********************************************************************!*\
  !*** ./src/app/roles/business/properties/properties.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2J1c2luZXNzL3Byb3BlcnRpZXMvcHJvcGVydGllcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/roles/business/properties/properties.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/roles/business/properties/properties.component.ts ***!
  \*******************************************************************/
/*! exports provided: PropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesComponent", function() { return PropertiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PropertiesComponent = /** @class */ (function () {
    function PropertiesComponent() {
    }
    PropertiesComponent.prototype.ngOnInit = function () {
    };
    PropertiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-properties',
            template: __webpack_require__(/*! raw-loader!./properties.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/properties/properties.component.html"),
            styles: [__webpack_require__(/*! ./properties.component.css */ "./src/app/roles/business/properties/properties.component.css")]
        })
    ], PropertiesComponent);
    return PropertiesComponent;
}());



/***/ }),

/***/ "./src/app/roles/business/properties/properties.model.ts":
/*!***************************************************************!*\
  !*** ./src/app/roles/business/properties/properties.model.ts ***!
  \***************************************************************/
/*! exports provided: PropertiesModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesModel", function() { return PropertiesModel; });
var PropertiesModel = /** @class */ (function () {
    function PropertiesModel(name, registrationType, registrationNo, registrationNoProof, officeAddress, registrationAuthority, registrationMsmeNumber, gstNumber, panNumber, unionEnrollmentNumber, firmAddress, ownerDetails, registrationCinProof, gstNumberProof, registrationMsmeNumberProof) {
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
    PropertiesModel.ctorParameters = function () { return [
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
    return PropertiesModel;
}());



/***/ }),

/***/ "./src/app/roles/business/properties/properties.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/roles/business/properties/properties.module.ts ***!
  \****************************************************************/
/*! exports provided: PropertiesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesModule", function() { return PropertiesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _properties_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties-routing.module */ "./src/app/roles/business/properties/properties-routing.module.ts");
/* harmony import */ var _properties_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./properties.component */ "./src/app/roles/business/properties/properties.component.ts");
/* harmony import */ var _propertiesedit_propertiesedit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./propertiesedit/propertiesedit.component */ "./src/app/roles/business/properties/propertiesedit/propertiesedit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_properties_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/properties.reducer */ "./src/app/roles/business/properties/store/properties.reducer.ts");
/* harmony import */ var _store_properties_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/properties.effects */ "./src/app/roles/business/properties/store/properties.effects.ts");












var PropertiesModule = /** @class */ (function () {
    function PropertiesModule() {
    }
    PropertiesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _properties_component__WEBPACK_IMPORTED_MODULE_4__["PropertiesComponent"],
                _propertiesedit_propertiesedit_component__WEBPACK_IMPORTED_MODULE_5__["PropertieseditComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _properties_routing_module__WEBPACK_IMPORTED_MODULE_3__["PropertiesRoutingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forFeature('properties', _store_properties_reducer__WEBPACK_IMPORTED_MODULE_10__["PropertiesReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature([_store_properties_effects__WEBPACK_IMPORTED_MODULE_11__["PropertiesEffects"]])
            ]
        })
    ], PropertiesModule);
    return PropertiesModule;
}());



/***/ }),

/***/ "./src/app/roles/business/properties/propertiesedit/propertiesedit.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/roles/business/properties/propertiesedit/propertiesedit.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upload-form-group{\n  padding: 20px;\n  border: 2px dashed #2d0829;\n}\n\n.upload-form-group input{\n  height: auto;\n}\n\n.image-preview{\n  text-align: center;\n}\n\n.image-preview img{\n  height: 100px;\n  width: auto;\n  max-width: 120px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYnVzaW5lc3MvcHJvcGVydGllcy9wcm9wZXJ0aWVzZWRpdC9wcm9wZXJ0aWVzZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvYnVzaW5lc3MvcHJvcGVydGllcy9wcm9wZXJ0aWVzZWRpdC9wcm9wZXJ0aWVzZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwbG9hZC1mb3JtLWdyb3Vwe1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IDJweCBkYXNoZWQgIzJkMDgyOTtcbn1cblxuLnVwbG9hZC1mb3JtLWdyb3VwIGlucHV0e1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5pbWFnZS1wcmV2aWV3e1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWFnZS1wcmV2aWV3IGltZ3tcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMTIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/roles/business/properties/propertiesedit/propertiesedit.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/roles/business/properties/propertiesedit/propertiesedit.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PropertieseditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertieseditComponent", function() { return PropertieseditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_properties_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/properties.actions */ "./src/app/roles/business/properties/store/properties.actions.ts");





var PropertieseditComponent = /** @class */ (function () {
    function PropertieseditComponent(fb, store) {
        this.fb = fb;
        this.store = store;
        this.registrationMsmeImage = null;
        this.registrationGstImage = null;
        this.registrationCinImage = null;
        this.previewUrlregistrationMsmeNumber = '../../../assets/icons/uploadPic.png';
        this.previewUrlgstNumber = '../../../assets/icons/uploadPic.png';
        this.previewUrlCinProof = '../../../assets/icons/uploadPic.png';
    }
    PropertieseditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _store_properties_actions__WEBPACK_IMPORTED_MODULE_4__["TryFetchProperties"]());
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
        this.store.select('properties').subscribe(function (value) {
            console.log(value);
            _this.transportationStore = value.properties;
            _this.previewUrlCinProof = value.properties.registrationCinProof;
            _this.previewUrlgstNumber = value.properties.gstNumberProof;
            _this.previewUrlregistrationMsmeNumber = value.properties.registrationMsmeNumberProof;
            _this.editForm.patchValue(_this.transportationStore);
            _this.imageForm.patchValue(_this.transportationStore);
            _this.ownerForm.patchValue(_this.transportationStore);
        });
    };
    PropertieseditComponent.prototype.imgPreviewregistrationMsmeNumber = function (fileInput) {
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
    PropertieseditComponent.prototype.imgPreviewgstNumber = function (fileInput) {
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
    PropertieseditComponent.prototype.imgPreviewaddress = function (fileInput) {
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
    PropertieseditComponent.prototype.onSubmit = function (type) {
        if (type === 'imageForm') {
            var data = new FormData();
            data.append('registrationCinProof', this.registrationCinImage);
            data.append('gstNumberProof', this.registrationGstImage);
            data.append('registrationMsmeNumberProof', this.registrationMsmeImage);
            this.store.dispatch(new _store_properties_actions__WEBPACK_IMPORTED_MODULE_4__["UploadPropertiesImages"](data));
        }
        else {
            if (type === 'ownerForm') {
                this.tabSet.select('imagesForm');
            }
            else if (type === 'editForm') {
                this.tabSet.select('ownerDetails');
            }
            Object.assign(this.transportationStore, this.editForm.value);
            Object.assign(this.transportationStore, this.ownerForm.value);
            this.store.dispatch(new _store_properties_actions__WEBPACK_IMPORTED_MODULE_4__["PropertiesEdit"](this.transportationStore));
        }
    };
    PropertieseditComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('t', { static: false })
    ], PropertieseditComponent.prototype, "tabSet", void 0);
    PropertieseditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-propertiesedit',
            template: __webpack_require__(/*! raw-loader!./propertiesedit.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/properties/propertiesedit/propertiesedit.component.html"),
            styles: [__webpack_require__(/*! ./propertiesedit.component.css */ "./src/app/roles/business/properties/propertiesedit/propertiesedit.component.css")]
        })
    ], PropertieseditComponent);
    return PropertieseditComponent;
}());



/***/ }),

/***/ "./src/app/roles/business/properties/store/properties.actions.ts":
/*!***********************************************************************!*\
  !*** ./src/app/roles/business/properties/store/properties.actions.ts ***!
  \***********************************************************************/
/*! exports provided: SET_PROPERTIES, TRY_FETCH_PROPERTIES, PROPERTIES_EDIT, UPLOAD_PROPERTIES_IMAGES, UploadPropertiesImages, PropertiesEdit, TryFetchProperties, SetProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PROPERTIES", function() { return SET_PROPERTIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_FETCH_PROPERTIES", function() { return TRY_FETCH_PROPERTIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROPERTIES_EDIT", function() { return PROPERTIES_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_PROPERTIES_IMAGES", function() { return UPLOAD_PROPERTIES_IMAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPropertiesImages", function() { return UploadPropertiesImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesEdit", function() { return PropertiesEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryFetchProperties", function() { return TryFetchProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetProperties", function() { return SetProperties; });
var SET_PROPERTIES = 'SET_PROPERTIES';
var TRY_FETCH_PROPERTIES = 'TRY_FETCH_PROPERTIES';
var PROPERTIES_EDIT = 'PROPERTIES_EDIT';
var UPLOAD_PROPERTIES_IMAGES = 'UPLOAD_PROPERTIES_IMAGES';
// classes for properties
var UploadPropertiesImages = /** @class */ (function () {
    function UploadPropertiesImages(payload) {
        this.payload = payload;
        this.type = UPLOAD_PROPERTIES_IMAGES;
    }
    UploadPropertiesImages.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UploadPropertiesImages;
}());

var PropertiesEdit = /** @class */ (function () {
    function PropertiesEdit(payload) {
        this.payload = payload;
        this.type = PROPERTIES_EDIT;
    }
    PropertiesEdit.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return PropertiesEdit;
}());

var TryFetchProperties = /** @class */ (function () {
    function TryFetchProperties() {
        this.type = TRY_FETCH_PROPERTIES;
    }
    return TryFetchProperties;
}());

var SetProperties = /** @class */ (function () {
    function SetProperties(payload) {
        this.payload = payload;
        this.type = SET_PROPERTIES;
    }
    SetProperties.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return SetProperties;
}());



/***/ }),

/***/ "./src/app/roles/business/properties/store/properties.effects.ts":
/*!***********************************************************************!*\
  !*** ./src/app/roles/business/properties/store/properties.effects.ts ***!
  \***********************************************************************/
/*! exports provided: PropertiesEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesEffects", function() { return PropertiesEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/serverEndpoints */ "./src/app/shared/serverEndpoints.ts");
/* harmony import */ var _properties_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./properties.actions */ "./src/app/roles/business/properties/store/properties.actions.ts");







var PropertiesEffects = /** @class */ (function () {
    function PropertiesEffects(action, http) {
        var _this = this;
        this.action = action;
        this.http = http;
        // effects for properties
        this.uploadPropertiesImages = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_properties_actions__WEBPACK_IMPORTED_MODULE_6__["UPLOAD_PROPERTIES_IMAGES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (data) {
            return _this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__["uploadPropertiesImages"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (response) {
            if (response.status === 200) {
                return [
                    {
                        type: _properties_actions__WEBPACK_IMPORTED_MODULE_6__["SET_PROPERTIES"],
                        payload: response.body
                    }
                ];
            }
        }));
        this.editProperties = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_properties_actions__WEBPACK_IMPORTED_MODULE_6__["PROPERTIES_EDIT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (payload) {
            return payload.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (data) {
            return _this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__["editProperties"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (response) {
            if (response.status === 200) {
                return [
                    {
                        type: _properties_actions__WEBPACK_IMPORTED_MODULE_6__["SET_PROPERTIES"],
                        payload: response.body
                    }
                ];
            }
        }));
        this.fetchProperties = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_properties_actions__WEBPACK_IMPORTED_MODULE_6__["TRY_FETCH_PROPERTIES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            return _this.http.get(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__["fetchProperties"], { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (response) {
            if (response.status === 200) {
                return [
                    {
                        type: _properties_actions__WEBPACK_IMPORTED_MODULE_6__["SET_PROPERTIES"],
                        payload: response.body
                    }
                ];
            }
        }));
    }
    PropertiesEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
    ], PropertiesEffects.prototype, "uploadPropertiesImages", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
    ], PropertiesEffects.prototype, "editProperties", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
    ], PropertiesEffects.prototype, "fetchProperties", void 0);
    PropertiesEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], PropertiesEffects);
    return PropertiesEffects;
}());



/***/ }),

/***/ "./src/app/roles/business/properties/store/properties.reducer.ts":
/*!***********************************************************************!*\
  !*** ./src/app/roles/business/properties/store/properties.reducer.ts ***!
  \***********************************************************************/
/*! exports provided: PropertiesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesReducer", function() { return PropertiesReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _properties_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../properties.model */ "./src/app/roles/business/properties/properties.model.ts");


var initialState = {
    properties: new _properties_model__WEBPACK_IMPORTED_MODULE_1__["PropertiesModel"]('', '', '', '', '', '', '', '', '', '', {
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
function PropertiesReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'SET_PROPERTIES': {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { properties: action.payload });
        }
        default: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
        }
    }
}


/***/ })

}]);
//# sourceMappingURL=properties-properties-module-es5.js.map