(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["finance-finance-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/finance/finance.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/finance/finance.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/finance/financeedit/financeedit.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/finance/financeedit/financeedit.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 offset-md-3 p-5 mb-5 shadow-boxed\">\n    <div class=\"col-md-12\">\n        <ngb-tabset type=\"pills\" [justify]=\"'center'\"  #t=\"ngbTabset\">\n\n            <ngb-tab title=\"FIRM DETAILS\">\n                <ng-template ngbTabContent >\n                    <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit('editForm')\">\n                        <div class=\"form-group mt-5\">\n                            <label class=\"form-title\">Firm Details</label><br>\n                            <div class=\"form-group\">\n                                <label>Name of Comapny</label>\n                                <input class=\"form-control\" type=\"text\" formControlName=\"name\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Registration Type</label>\n                                <select class=\"form-control\" formControlName=\"registrationType\">\n                                    <option value=\"privateLimitied\">Private Limited</option>\n                                    <option value=\"publicLimited\">Public Limited</option>\n                                    <option value=\"proprietorship\">Proprietorship</option>\n                                    <option value=\"partnership\">Partnership</option>\n                                    <option value=\"powerOfAttorney\">Under Power of Attorney</option>\n                                </select>\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Registration CIN No</label>\n                                <input class=\"form-control\" type=\"text\" formControlName=\"registrationNo\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Full Office Address</label>\n                                <input class=\"form-control\" type=\"text\" formControlName=\"officeAddress\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Registration Authority</label>\n                                <input class=\"form-control\" type=\"text\" formControlName=\"registrationAuthority\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Registration MSME Number</label>\n                                <input class=\"form-control\" type=\"text\" formControlName=\"registrationMsmeNumber\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>GST Number</label>\n                                <input class=\"form-control\" type=\"text\" formControlName=\"gstNumber\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>PAN Number</label>\n                                <input class=\"form-control\" type=\"text\" formControlName=\"panNumber\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>TAN Number</label>\n                                <input class=\"form-control\" type=\"text\" formControlName=\"tanNumber\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Union Enrollment Number</label>\n                                <input class=\"form-control\" type=\"text\" formControlName=\"unionEnrollmentNumber\">\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\" formGroupName=\"firmAddress\">\n                            <label class=\"form-title\">Firm Contact Details</label><br>\n                            <div formGroupName=\"permanentAddress\">\n                                <div class=\"form-group\">\n                                    <label>Address</label>\n                                    <input class=\"form-control\" type=\"text\" formControlName=\"address\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>Pincode</label>\n                                    <input class=\"form-control\" type=\"number\" formControlName=\"pincode\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>Phone number</label>\n                                    <input class=\"form-control\" type=\"number\" formControlName=\"phoneNo\">\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group col-md-12 text-center\">\n                            <button class=\"btn btn-uspl\">Save Changes</button>\n                        </div>\n                    </form>\n                </ng-template>\n            </ngb-tab>\n\n\n            <ngb-tab title=\"OWNER DETAILS\" id=\"ownerDetails\">\n                <ng-template ngbTabContent>\n                    <form [formGroup]=\"ownerForm\" (ngSubmit)=\"onSubmit('ownerForm')\">\n                        <div class=\"form-group mt-5\" formGroupName=\"ownerDetails\">\n\n                            <div class=\"col-md-12 form-group d-flex justify-content-center mt-5\">\n                                I am\n                                <select class=\"form-control w-25 ml-2 mr-2\" formControlName=\"profileRegistrar\">\n                                    <option value=\"OWNER\">OWNER</option>\n                                    <option value=\"MANAGER\">MANAGER</option>\n                                    <option value=\"OTHER\">OTHER</option>\n                                </select>\n                                of this company\n                            </div>\n\n                            <label class=\"form-title\">Owner Details</label><br>\n                            <div class=\"form-group\">\n                                <label>Name</label>\n                                <input class=\"form-control\" type=\"text\" formControlName=\"name\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Mobile</label>\n                                <input class=\"form-control\" type=\"number\" formControlName=\"mobile\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Email</label>\n                                <input class=\"form-control\" type=\"email\" formControlName=\"email\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>PAN number</label>\n                                <input class=\"form-control\" type=\"text\" formControlName=\"pan\">\n                            </div>\n                            <div formGroupName=\"address\">\n                                <div class=\"form-group\">\n                                    <label>Address</label>\n                                    <input class=\"form-control\" type=\"text\" formControlName=\"address\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>Pincode</label>\n                                    <input class=\"form-control\" type=\"number\" formControlName=\"pincode\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>Phone number</label>\n                                    <input class=\"form-control\" type=\"number\" formControlName=\"phoneNo\">\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\" formGroupName=\"bankDetails\">\n                            <label class=\"form-title\">Bank Details</label><br>\n                            <div class=\"form-group\">\n                                <label>Bank Name</label>\n                                <input class=\"form-control\" type=\"text\" formControlName=\"bankName\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Bank Account number</label>\n                                <input class=\"form-control\" type=\"number\" formControlName=\"bankAccountNo\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Bank IFSC</label>\n                                <input class=\"form-control\" type=\"text\" formControlName=\"bankIfsc\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Bank Address</label>\n                                <input class=\"form-control\" type=\"text\" formControlName=\"bankAddress\">\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-12 text-center\">\n                            <button class=\"btn btn-uspl\">Save Changes</button>\n                        </div>\n                    </form>\n                </ng-template>\n            </ngb-tab>\n\n\n            <ngb-tab title=\"UPLOAD IMAGE\" id=\"imagesForm\">\n                <ng-template ngbTabContent>\n                    <form [formGroup]=\"imageForm\" (ngSubmit)=\"onSubmit('imageForm')\">\n\n<!--                        <div class=\"row form-group upload-form-group mt-5\">-->\n<!--                            <div class=\"col-md-8\">-->\n<!--                                <label> Upload your Registration number Proof </label>-->\n<!--                                <input class=\"form-control \" type=\"file\" formControlName=\"registrationNoProof\"-->\n<!--                                       (change)=\"imgPreviewRegistrationNo($event)\">-->\n<!--                            </div>-->\n<!--                            <div class=\"col-md-4 image-preview\">-->\n<!--                                <img [src]=\"previewUrlregistrationNo\">-->\n<!--                            </div>-->\n<!--                        </div>-->\n\n                        <div class=\"row form-group upload-form-group mt-5\">\n                            <div class=\"col-md-8\">\n                                <label> Upload your Registration MSME number Proof </label>\n                                <input class=\"form-control \" type=\"file\"\n                                       formControlName=\"registrationMsmeNumberProof\"\n                                       (change)=\"imgPreviewregistrationMsmeNumber($event)\">\n                            </div>\n                            <div class=\"col-md-4 image-preview\">\n                                <img [src]=\"previewUrlregistrationMsmeNumber\">\n                            </div>\n                        </div>\n\n                        <div class=\"row form-group upload-form-group\">\n                            <div class=\"col-md-8\">\n                                <label> Upload your GST number Proof </label>\n                                <input class=\"form-control \" type=\"file\" formControlName=\"gstNumberProof\"\n                                       (change)=\"imgPreviewgstNumber($event)\">\n                            </div>\n                            <div class=\"col-md-4 image-preview\">\n                                <img [src]=\"previewUrlgstNumber\">\n                            </div>\n                        </div>\n\n                        <div class=\"row form-group upload-form-group\">\n                            <div class=\"col-md-8\">\n                                <label> Upload your Registration CIN Proof </label>\n                                <input class=\"form-control \" type=\"file\" formControlName=\"registrationCinProof\"\n                                       (change)=\"imgPreviewaddress($event)\">\n                            </div>\n                            <div class=\"col-md-4 image-preview\">\n                                <img [src]=\"previewUrlCinProof\">\n                            </div>\n                        </div>\n\n                        <div class=\"form-group col-md-12 text-center\">\n                            <button class=\"btn btn-uspl\">Save Changes</button>\n                        </div>\n                    </form>\n                </ng-template>\n            </ngb-tab>\n\n        </ngb-tabset>\n    </div>\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/roles/business/finance/finance-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/roles/business/finance/finance-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: FinanceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceRoutingModule", function() { return FinanceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _finance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finance.component */ "./src/app/roles/business/finance/finance.component.ts");
/* harmony import */ var _financeedit_financeedit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./financeedit/financeedit.component */ "./src/app/roles/business/finance/financeedit/financeedit.component.ts");





const routes = [
    {
        path: '', component: _finance_component__WEBPACK_IMPORTED_MODULE_3__["FinanceComponent"], children: [
            { path: 'dashboard', component: _finance_component__WEBPACK_IMPORTED_MODULE_3__["FinanceComponent"] },
            { path: 'editProfile', component: _financeedit_financeedit_component__WEBPACK_IMPORTED_MODULE_4__["FinanceeditComponent"] }
        ]
    },
];
let FinanceRoutingModule = class FinanceRoutingModule {
};
FinanceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FinanceRoutingModule);



/***/ }),

/***/ "./src/app/roles/business/finance/finance.component.css":
/*!**************************************************************!*\
  !*** ./src/app/roles/business/finance/finance.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2J1c2luZXNzL2ZpbmFuY2UvZmluYW5jZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/roles/business/finance/finance.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/roles/business/finance/finance.component.ts ***!
  \*************************************************************/
/*! exports provided: FinanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceComponent", function() { return FinanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FinanceComponent = class FinanceComponent {
    constructor() { }
    ngOnInit() {
    }
};
FinanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-finance',
        template: __webpack_require__(/*! raw-loader!./finance.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/finance/finance.component.html"),
        styles: [__webpack_require__(/*! ./finance.component.css */ "./src/app/roles/business/finance/finance.component.css")]
    })
], FinanceComponent);



/***/ }),

/***/ "./src/app/roles/business/finance/finance.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/roles/business/finance/finance.model.ts ***!
  \*********************************************************/
/*! exports provided: FinanceModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceModel", function() { return FinanceModel; });
class FinanceModel {
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
FinanceModel.ctorParameters = () => [
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

/***/ "./src/app/roles/business/finance/finance.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/roles/business/finance/finance.module.ts ***!
  \**********************************************************/
/*! exports provided: FinanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceModule", function() { return FinanceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _finance_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finance-routing.module */ "./src/app/roles/business/finance/finance-routing.module.ts");
/* harmony import */ var _finance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./finance.component */ "./src/app/roles/business/finance/finance.component.ts");
/* harmony import */ var _financeedit_financeedit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./financeedit/financeedit.component */ "./src/app/roles/business/finance/financeedit/financeedit.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _store_finance_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/finance.reducer */ "./src/app/roles/business/finance/store/finance.reducer.ts");
/* harmony import */ var _store_finance_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/finance.effects */ "./src/app/roles/business/finance/store/finance.effects.ts");












let FinanceModule = class FinanceModule {
};
FinanceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _finance_component__WEBPACK_IMPORTED_MODULE_4__["FinanceComponent"],
            _financeedit_financeedit_component__WEBPACK_IMPORTED_MODULE_5__["FinanceeditComponent"],
        ],
        imports: [
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _finance_routing_module__WEBPACK_IMPORTED_MODULE_3__["FinanceRoutingModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forFeature('finance', _store_finance_reducer__WEBPACK_IMPORTED_MODULE_10__["FinanceReducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature([_store_finance_effects__WEBPACK_IMPORTED_MODULE_11__["FinanceEffects"]])
        ]
    })
], FinanceModule);



/***/ }),

/***/ "./src/app/roles/business/finance/financeedit/financeedit.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/roles/business/finance/financeedit/financeedit.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upload-form-group{\n    padding: 20px;\n    border: 2px dashed #2d0829;\n}\n\n.upload-form-group input{\n    height: auto;\n}\n\n.image-preview{\n    text-align: center;\n}\n\n.image-preview img{\n    height: 100px;\n    width: auto;\n    max-width: 120px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYnVzaW5lc3MvZmluYW5jZS9maW5hbmNlZWRpdC9maW5hbmNlZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2J1c2luZXNzL2ZpbmFuY2UvZmluYW5jZWVkaXQvZmluYW5jZWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGxvYWQtZm9ybS1ncm91cHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjMmQwODI5O1xufVxuXG4udXBsb2FkLWZvcm0tZ3JvdXAgaW5wdXR7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaW1hZ2UtcHJldmlld3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWFnZS1wcmV2aWV3IGltZ3tcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1heC13aWR0aDogMTIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/roles/business/finance/financeedit/financeedit.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/roles/business/finance/financeedit/financeedit.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FinanceeditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceeditComponent", function() { return FinanceeditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_finance_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/finance.actions */ "./src/app/roles/business/finance/store/finance.actions.ts");





let FinanceeditComponent = class FinanceeditComponent {
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
        this.store.dispatch(new _store_finance_actions__WEBPACK_IMPORTED_MODULE_4__["TryFetchFinance"]());
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
        this.store.select('finance').subscribe(value => {
            console.log(value);
            this.financeStore = value.finance;
            this.previewUrlCinProof = value.finance.registrationCinProof;
            this.previewUrlgstNumber = value.finance.gstNumberProof;
            this.previewUrlregistrationMsmeNumber = value.finance.registrationMsmeNumberProof;
            this.editForm.patchValue(this.financeStore);
            this.imageForm.patchValue(this.financeStore);
            this.ownerForm.patchValue(this.financeStore);
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
            this.store.dispatch(new _store_finance_actions__WEBPACK_IMPORTED_MODULE_4__["UploadFinanceImages"](data));
        }
        else {
            if (type === 'ownerForm') {
                this.tabSet.select('imagesForm');
            }
            else if (type === 'editForm') {
                this.tabSet.select('ownerDetails');
            }
            Object.assign(this.financeStore, this.editForm.value);
            Object.assign(this.financeStore, this.ownerForm.value);
            this.store.dispatch(new _store_finance_actions__WEBPACK_IMPORTED_MODULE_4__["FinanceEdit"](this.financeStore));
        }
    }
};
FinanceeditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('t', { static: false })
], FinanceeditComponent.prototype, "tabSet", void 0);
FinanceeditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-financeedit',
        template: __webpack_require__(/*! raw-loader!./financeedit.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/finance/financeedit/financeedit.component.html"),
        styles: [__webpack_require__(/*! ./financeedit.component.css */ "./src/app/roles/business/finance/financeedit/financeedit.component.css")]
    })
], FinanceeditComponent);



/***/ }),

/***/ "./src/app/roles/business/finance/store/finance.actions.ts":
/*!*****************************************************************!*\
  !*** ./src/app/roles/business/finance/store/finance.actions.ts ***!
  \*****************************************************************/
/*! exports provided: TRY_FETCH_FINANCE, SET_FINANCE, FINANCE_EDIT, UPLOAD_FINANCE_IMAGES, TryFetchFinance, SetFinance, UploadFinanceImages, FinanceEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_FETCH_FINANCE", function() { return TRY_FETCH_FINANCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FINANCE", function() { return SET_FINANCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FINANCE_EDIT", function() { return FINANCE_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_FINANCE_IMAGES", function() { return UPLOAD_FINANCE_IMAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryFetchFinance", function() { return TryFetchFinance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetFinance", function() { return SetFinance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFinanceImages", function() { return UploadFinanceImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceEdit", function() { return FinanceEdit; });
const TRY_FETCH_FINANCE = 'TRY_FETCH_FINANCE';
const SET_FINANCE = 'SET_FINANCE';
const FINANCE_EDIT = 'FINANCE_EDIT';
const UPLOAD_FINANCE_IMAGES = 'UPLOAD_FINANCE_IMAGES';
// classes for finance
class TryFetchFinance {
    constructor() {
        this.type = TRY_FETCH_FINANCE;
    }
}
class SetFinance {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_FINANCE;
    }
}
SetFinance.ctorParameters = () => [
    { type: undefined }
];
class UploadFinanceImages {
    constructor(payload) {
        this.payload = payload;
        this.type = UPLOAD_FINANCE_IMAGES;
    }
}
UploadFinanceImages.ctorParameters = () => [
    { type: undefined }
];
class FinanceEdit {
    constructor(payload) {
        this.payload = payload;
        this.type = FINANCE_EDIT;
    }
}
FinanceEdit.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/roles/business/finance/store/finance.effects.ts":
/*!*****************************************************************!*\
  !*** ./src/app/roles/business/finance/store/finance.effects.ts ***!
  \*****************************************************************/
/*! exports provided: FinanceEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceEffects", function() { return FinanceEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/serverEndpoints */ "./src/app/shared/serverEndpoints.ts");
/* harmony import */ var _finance_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./finance.actions */ "./src/app/roles/business/finance/store/finance.actions.ts");







let FinanceEffects = class FinanceEffects {
    constructor(action, http) {
        this.action = action;
        this.http = http;
        // effects for finance
        this.editFinance = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_finance_actions__WEBPACK_IMPORTED_MODULE_6__["FINANCE_EDIT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((payload) => {
            return payload.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((data) => {
            return this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__["editfinance"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((response) => {
            if (response.status === 200) {
                return [
                    {
                        type: _finance_actions__WEBPACK_IMPORTED_MODULE_6__["SET_FINANCE"],
                        payload: response.body
                    }
                ];
            }
        }));
        this.uploadFinanceImages = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_finance_actions__WEBPACK_IMPORTED_MODULE_6__["UPLOAD_FINANCE_IMAGES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((data) => {
            return this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__["uploadfinanceImages"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((response) => {
            if (response.status === 200) {
                return [
                    {
                        type: _finance_actions__WEBPACK_IMPORTED_MODULE_6__["SET_FINANCE"],
                        payload: response.body
                    }
                ];
            }
        }));
        this.fetchFinance = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_finance_actions__WEBPACK_IMPORTED_MODULE_6__["TRY_FETCH_FINANCE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => {
            return this.http.get(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__["fetchfinance"], { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((response) => {
            if (response.status === 200) {
                return [
                    {
                        type: _finance_actions__WEBPACK_IMPORTED_MODULE_6__["SET_FINANCE"],
                        payload: response.body
                    }
                ];
            }
        }));
    }
};
FinanceEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], FinanceEffects.prototype, "editFinance", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], FinanceEffects.prototype, "uploadFinanceImages", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], FinanceEffects.prototype, "fetchFinance", void 0);
FinanceEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], FinanceEffects);



/***/ }),

/***/ "./src/app/roles/business/finance/store/finance.reducer.ts":
/*!*****************************************************************!*\
  !*** ./src/app/roles/business/finance/store/finance.reducer.ts ***!
  \*****************************************************************/
/*! exports provided: FinanceReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceReducer", function() { return FinanceReducer; });
/* harmony import */ var _finance_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../finance.model */ "./src/app/roles/business/finance/finance.model.ts");

const initialState = {
    finance: new _finance_model__WEBPACK_IMPORTED_MODULE_0__["FinanceModel"]('', '', '', '', '', '', '', '', '', '', {
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
function FinanceReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_FINANCE': {
            return Object.assign({}, state, { finance: action.payload });
        }
        default: {
            return Object.assign({}, state);
        }
    }
}


/***/ })

}]);
//# sourceMappingURL=finance-finance-module-es2015.js.map