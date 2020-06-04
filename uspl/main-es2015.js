(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-component shadow-boxed\">\n  <app-header></app-header>\n</div>\n\n<app-loader></app-loader>\n\n<div class=\"row\">\n  <div class=\"col-md-12 \">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/forgotpassword/forgotpassword.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/forgotpassword/forgotpassword.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-8 offset-md-1 mt-5 mb-5 p-5 d-flex shadow-boxed\">\n    <div class=\"col-md-6 login-image\">\n      <img src=\"../../../assets/img/login.jpg\" alt=\"\">\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"col-md-12 d-flex mt-3 mb-3 social-login\">\n        <span class=\"h3\">Forgot Password</span>\n      </div>\n      <div class=\"col-md-12 text-center\" *ngIf=\"!isMobileVerified\">\n        <form #form=\"ngForm\" (ngSubmit)=\"verifymobile(form)\">\n          <div class=\"form-group text-left\">\n            <label for=\"exampleInputEmail1\">Mobile No</label>\n            <input type=\"number\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\n                   placeholder=\"Enter Mobile\" name=\"mobile\" ngModel\n                   pattern=\"/^-?\\d+\\.?\\d*$/\" onkeypress=\"if((this.value.length==10)) return false;\"\n                   oninput=\"validity.valid||(value='');\"\n                   required>\n          </div>\n\n          <div class=\"form-group\">\n            <small *ngIf=\"mobileCheckToken\" style=\"color: red\">Invalid mobile number !!</small>\n          </div>\n          <button type=\"submit\" class=\"btn btn-uspl\">Get OTP</button>\n        </form>\n      </div>\n      <div class=\"col-md-12 mt-5 text-center\" *ngIf=\"isMobileVerified &&  !isOtpVerified\">\n        <form #form=\"ngForm\" (ngSubmit)=\"verifyotp(form)\">\n          <label>Enter OTP</label>\n          <div class=\"row multiple-input\">\n            <input ngModel type=\"number\" name=\"otp1\" class=\"col-md-3 col-xs-3 inputs\" pattern=\"/^-?\\d+\\.?\\d*$/\"\n                   onKeyPress=\"if(this.value.length==1) return false;\" placeholder=\"\" required autocomplete=\"off\"\n                   style=\"color:#585858;\" (keyup)=\"keytab($event)\"/>\n            <input ngModel type=\"number\" name=\"otp2\" class=\"col-md-3 col-xs-3 inputs\" maxlength=\"1\"\n                   pattern=\"/^-?\\d+\\.?\\d*$/\"\n                   onKeyPress=\"if(this.value.length==1) return false;\" placeholder=\"\" required autocomplete=\"off\"\n                   style=\"color: #585858;\" (keyup)=\"keytab($event)\"/>\n            <input ngModel type=\"number\" name=\"otp3\" class=\"col-md-3 col-xs-3 inputs\" maxlength=\"1\"\n                   pattern=\"/^-?\\d+\\.?\\d*$/\"\n                   onKeyPress=\"if(this.value.length==1) return false;\" placeholder=\"\" required autocomplete=\"off\"\n                   style=\"color: #585858;\" (keyup)=\"keytab($event)\"/>\n            <input ngModel type=\"number\" name=\"otp4\" class=\"col-md-3 col-xs-3 inputs\" maxlength=\"1\"\n                   pattern=\"/^-?\\d+\\.?\\d*$/\"\n                   onKeyPress=\"if(this.value.length==1) return false;\" placeholder=\"\" required autocomplete=\"off\"\n                   style=\"color: #585858;\"/>\n          </div>\n          <div class=\"form-group\">\n            <small *ngIf=\"otpCheckToken\" style=\"color: red\">Invalid OTP !!</small>\n          </div>\n          <button type=\"submit\" class=\"btn btn-uspl\">Verify OTP</button>\n        </form>\n      </div>\n\n      <div class=\"col-md-12 text-center\" *ngIf=\"isOtpVerified\">\n        <form #form=\"ngForm\" (ngSubmit)=\"changepassword(form)\">\n\n          <div class=\"form-group text-left\">\n            <label>New Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" ngModel #password\n                   placeholder=\"Password\" required>\n          </div>\n\n          <div class=\"form-group text-left\">\n            <label>Confirm Password</label>\n            <!--            <input type=\"password\" class=\"form-control\" name=\"cnfpassword\" ngModel #confirmPass=\"ngModel\"-->\n            <!--                   pattern=\"{{password.value}}\"-->\n            <!--                   placeholder=\"Confirm Password\" required>-->\n\n            <input type=\"password\" ngModel name=\"confirmpassword\" placeholder=\"Confirm Password\" class=\"form-control\"\n                   required #confirmpassword=\"ngModel\" pattern=\"{{ password.value }}\"/>\n          </div>\n          <div class=\"form-group text-left\">\n            <small *ngIf=\"confirmpassword.errors.pattern\" style=\"color: red\">Passwords must match!</small>\n          </div>\n          <button type=\"submit\" class=\"btn btn-uspl\">Submit</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-8 offset-md-1 mt-5 mb-5 p-5 d-flex shadow-boxed\">\n    <div class=\"col-md-6 login-image\">\n      <img src=\"../../../assets/img/login.jpg\" alt=\"\">\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"col-md-12 d-flex mt-3 mb-3 social-login\">\n        <span class=\"h3\">Log in with</span>\n        <a [href]=\"googleLoginUrl\">\n          <img src=\"../../../assets/icons/google.png\" alt=\"\">\n        </a>\n        <span class=\"h5\">OR</span>\n        <a [href]=\"fbLoginUrl\">\n          <img src=\"../../../assets/icons/fb.png\" alt=\"\">\n        </a>\n      </div>\n      <div class=\"col-md-12\">\n        <form #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\">\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Mobile No</label>\n            <input ngModel type=\"number\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\n                   placeholder=\"Enter Mobile\" name=\"mobile\"\n                   pattern=\"/^-?\\d+\\.?\\d*$/\" onkeypress=\"if((this.value.length==10)) return false;\"\n                   oninput=\"validity.valid||(value='');\"\n                   required>\n            <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your Details with anyone\n              else.\n            </small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" ngModel id=\"exampleInputPassword1\"\n                   placeholder=\"Password\" required minlength=\"10\">\n          </div>\n          <div class=\"form-group\">\n            <small *ngIf=\"mobileCheckToken\" style=\"color: red\">Invalid login details !!\n            </small>\n          </div>\n          <button type=\"submit\" class=\"btn btn-uspl\">Submit</button>\n          <a [routerLink]=\"'/forgotpassword'\">\n            <span class=\"pl-5\"> <strong>Forgot Password?</strong> </span>\n          </a>\n\n        </form>\n      </div>\n      <div class=\"col-md-12 text-center mt-3 mb-5\">\n        <span>New here?</span>\n        <a [routerLink]=\"'/register'\">\n          <span class=\"h5 pl-2\">Create new account?</span>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/mobileverify/mobileverify.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/mobileverify/mobileverify.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-8 offset-md-1 mt-5 mb-5 p-5 d-flex shadow-boxed\">\n    <div class=\"col-md-6 login-image\">\n      <img src=\"../../../assets/img/login.jpg\" alt=\"\">\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"col-md-12 d-flex mt-3 mb-3 social-login\">\n        <span class=\"h3\">Verify Mobile Number</span>\n      </div>\n      <div class=\"col-md-12 text-center\" *ngIf=\"!isMobileVerified\">\n        <form #form=\"ngForm\" (ngSubmit)=\"verifymobile(form)\">\n          <div class=\"form-group text-left\">\n            <label for=\"exampleInputEmail1\">Mobile No</label>\n            <input type=\"number\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\n                   placeholder=\"Enter Mobile\" name=\"mobile\" ngModel\n                   pattern=\"/^-?\\d+\\.?\\d*$/\" onkeypress=\"if((this.value.length==10)) return false;\"\n                   oninput=\"validity.valid||(value='');\"\n                   required>\n          </div>\n\n          <div class=\"form-group\">\n            <small *ngIf=\"mobileCheckToken\" style=\"color: red\">Invalid mobile number !!</small>\n          </div>\n          <button type=\"submit\" class=\"btn btn-uspl\">Get OTP</button>\n        </form>\n      </div>\n      <div class=\"col-md-12 mt-5 text-center\" *ngIf=\"isMobileVerified &&  !isOtpVerified\">\n        <form #form=\"ngForm\" (ngSubmit)=\"verifyotp(form)\">\n          <label>Enter OTP</label>\n          <div class=\"row multiple-input\">\n            <input ngModel type=\"number\" name=\"otp1\" class=\"col-md-3 col-xs-3 inputs\" pattern=\"/^-?\\d+\\.?\\d*$/\"\n                   onKeyPress=\"if(this.value.length==1) return false;\" placeholder=\"\" required autocomplete=\"off\"\n                   style=\"color:#585858;\" (keyup)=\"keytab($event)\"/>\n            <input ngModel type=\"number\" name=\"otp2\" class=\"col-md-3 col-xs-3 inputs\" maxlength=\"1\"\n                   pattern=\"/^-?\\d+\\.?\\d*$/\"\n                   onKeyPress=\"if(this.value.length==1) return false;\" placeholder=\"\" required autocomplete=\"off\"\n                   style=\"color: #585858;\" (keyup)=\"keytab($event)\"/>\n            <input ngModel type=\"number\" name=\"otp3\" class=\"col-md-3 col-xs-3 inputs\" maxlength=\"1\"\n                   pattern=\"/^-?\\d+\\.?\\d*$/\"\n                   onKeyPress=\"if(this.value.length==1) return false;\" placeholder=\"\" required autocomplete=\"off\"\n                   style=\"color: #585858;\" (keyup)=\"keytab($event)\"/>\n            <input ngModel type=\"number\" name=\"otp4\" class=\"col-md-3 col-xs-3 inputs\" maxlength=\"1\"\n                   pattern=\"/^-?\\d+\\.?\\d*$/\"\n                   onKeyPress=\"if(this.value.length==1) return false;\" placeholder=\"\" required autocomplete=\"off\"\n                   style=\"color: #585858;\"/>\n          </div>\n          <div class=\"form-group\">\n            <small *ngIf=\"otpCheckToken\" style=\"color: red\">Invalid OTP !!</small>\n          </div>\n          <button type=\"submit\" class=\"btn btn-uspl\">Verify OTP</button>\n        </form>\n      </div>\n\n<!--      <div class=\"col-md-12 text-center\" *ngIf=\"isOtpVerified\">-->\n<!--        <form #form=\"ngForm\" (ngSubmit)=\"changepassword(form)\">-->\n\n<!--          <div class=\"form-group text-left\">-->\n<!--            <label>New Password</label>-->\n<!--            <input type=\"password\" class=\"form-control\" name=\"password\" ngModel #password-->\n<!--                   placeholder=\"Password\" required>-->\n<!--          </div>-->\n\n<!--          <div class=\"form-group text-left\">-->\n<!--            <label>Confirm Password</label>-->\n<!--            &lt;!&ndash;            <input type=\"password\" class=\"form-control\" name=\"cnfpassword\" ngModel #confirmPass=\"ngModel\"&ndash;&gt;-->\n<!--            &lt;!&ndash;                   pattern=\"{{password.value}}\"&ndash;&gt;-->\n<!--            &lt;!&ndash;                   placeholder=\"Confirm Password\" required>&ndash;&gt;-->\n\n<!--            <input type=\"password\" ngModel name=\"confirmpassword\" placeholder=\"Confirm Password\" class=\"form-control\"-->\n<!--                   required #confirmpassword=\"ngModel\" pattern=\"{{ password.value }}\"/>-->\n<!--          </div>-->\n<!--          <div class=\"form-group text-left\">-->\n<!--            <small *ngIf=\"confirmpassword.errors.pattern\" style=\"color: red\">Passwords must match!</small>-->\n<!--          </div>-->\n<!--          <button type=\"submit\" class=\"btn btn-uspl\">Submit</button>-->\n<!--        </form>-->\n<!--      </div>-->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/signup/signup.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/signup/signup.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-8 offset-md-1 mt-5 mb-5 p-5 d-flex shadow-boxed\">\n    <div class=\"col-md-6 signup-image\">\n      <img src=\"../../../assets/img/login.jpg\" alt=\"\">\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"col-md-12 d-flex mt-3 mb-3 social-signup\">\n        <span class=\"h3\">Register with</span>\n        <a [href]=\"googleLoginUrl\">\n          <img src=\"../../../assets/icons/google.png\" alt=\"\">\n        </a>\n        <span class=\"h5\">OR</span>\n        <a [href]=\"fbLoginUrl\">\n          <img src=\"../../../assets/icons/fb.png\" alt=\"\">\n        </a>\n      </div>\n\n      <div class=\"col-md-12\">\n        <form #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\" autocomplete=\"off\">\n          <div class=\"row form-group\">\n            <div class=\"col-md-12\">\n              <label for=\"name\"> Enter your full name </label><input\n\n              class=\"form-control \"\n              ngModel type=\"text\" name=\"name\"\n              id=\"name\" placeholder=\"Name\" required>\n            </div>\n          </div>\n          <div class=\"row form-group\">\n            <div class=\"col-md-12\">\n              <label for=\"mobile\"> Enter your mobile </label><input\n\n              class=\"form-control\"\n              ngModel type=\"number\" name=\"mobile\"\n              id=\"mobile\" placeholder=\"Mobile\"\n              pattern=\"/^-?\\d+\\.?\\d*$/\" onkeypress=\"if((this.value.length===10)) return false;\"\n              oninput=\"validity.valid||(value='');\"\n              required>\n            </div>\n            <small *ngIf=\"mobileCheckToken\" style=\"color: red\">This mobile number is already registered.Please login your your id or use another mobile number. \n          </small>\n          </div>\n          <div class=\"row form-group\">\n            <div class=\"col-md-12\">\n              <label for=\"email\"> Enter your email </label><input\n\n              class=\"form-control\"\n              ngModel type=\"email\" id=\"email\" name=\"email\"\n              placeholder=\"email\" required></div>\n          </div>\n          <div class=\"row form-group\">\n            <div class=\"col-md-12\">\n              <label for=\"password\"> Enter your password </label><input\n\n              class=\"form-control\"\n              ngModel type=\"password\" name=\"password\"\n              id=\"password\" placeholder=\"Password\" required>\n            </div>\n          </div>\n          <div class=\"col-md-12 form-group text-center\">\n            <button class=\"btn btn-uspl\" type=\"submit\" >Register</button>\n          </div>\n        </form>\n      </div>\n\n      <div class=\"col-md-12 text-center mt-3 mb-5\">\n        <span>Already have an account?</span>\n        <a [routerLink]=\"'/login'\">\n          <span class=\"h5 pl-2\">Login</span>\n        </a>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/footer/footer.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/footer/footer.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\" class=\"footer-area\">\n  <!--<div class=\"container\">-->\n    <!--<div class=\"container\">-->\n      <!--<div class=\"row\">-->\n        <!--<div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12 m-auto\">-->\n          <!--<div class=\"widget\">-->\n            <!--<h3 class=\"footer-logo\"><img src=\"../../../assets/icons/logo.png\" alt=\"\"></h3>-->\n            <!--<div class=\"textwidget\">-->\n              <!--<p style=\"text-align: justify;\">We \"incubate\" disruptive ideas with the hope of building out a business-->\n                <!--model and company. We develop outposts for technology , nurturing ecosystems and internal processes that-->\n                <!--support a more collaborative innovation mindset for sustainable growth.</p>-->\n            <!--</div>-->\n\n          <!--</div>-->\n        <!--</div>-->\n\n        <!--<div class=\"col-lg-4 col-md-6 col-sm-12 col-xs-12 m-auto\">-->\n          <!--<h3 class=\"footer-titel\">Contact</h3>-->\n          <!--<ul class=\"address\">-->\n            <!--<li>-->\n              <!--<a href=\"#\"><i class=\"lni-map-marker\"></i> 99 GF, National Park, <br>Lajpat Nagar-IV, New Delhi-110024</a>-->\n            <!--</li>-->\n            <!--<li>-->\n              <!--<a href=\"#\"><i class=\"lni-phone-handset\"></i>+91 11 26433273</a>-->\n            <!--</li>-->\n            <!--<li>-->\n              <!--<a href=\"#\"><i class=\"lni-envelope\"></i>info@unfoldingskies.com</a>-->\n            <!--</li>-->\n          <!--</ul>-->\n        <!--</div>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n  <div id=\"copyright\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"copyright-content\">\n            <p>Copyright © 2019 <a rel=\"nofollow\" href=\"#\">Unfolding Skies</a> All Right Reserved</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/header/header.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/header/header.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" [routerLink]=\"'home'\">\n        <img src=\"../../../assets/icons/wt.png\" alt=\"\">\n      </a>\n    </div>\n\n    <ul class=\"nav navbar-right\">\n      <li>\n        <button *ngIf=\"!((authenticated | async).authenticated)\" class=\"btn btn-outline-success  m-2\"\n                type=\"button\"\n                routerLinkActive=\"active\"\n                [routerLink]=\"'/login'\">Login\n        </button>\n      </li>\n      <li>\n\n        <div class=\"col\" *ngIf=\"(authenticated|async).authenticated\">\n          <div ngbDropdown class=\"d-inline-block\">\n            <button class=\"btn btn-default user-profile\" id=\"dropdownBasic1\" ngbDropdownToggle>\n              <img\n                [src]=\"((authenticated|async).profile.profileImage) === '' ? '../../../assets/icons/user.png' : ((authenticated|async).profile.profileImage)\"\n                alt=\"\" width=\"20px\">\n              {{ 'Hi,' + ((authenticated|async).profile.name | titlecase)}}\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n              <button ngbDropdownItem routerLinkActive=\"active\" routerLink=\"/profile/viewProfile\">\n                My Profile\n              </button>\n              <button ngbDropdownItem routerLinkActive=\"active\" routerLink=\"/profile/orders\">\n                My Orders\n              </button>\n              <button ngbDropdownItem routerLinkActive=\"active\"\n                      [routerLink]=\"'roles/b/myProfile/viewProfile'\">\n                Settings\n              </button>\n              <button ngbDropdownItem routerLinkActive=\"active\">\n                Job Board\n              </button>\n\n\n              <button ngbDropdownItem (click)=\"onLogout()\">Logout</button>\n            </div>\n          </div>\n        </div>\n\n      </li>\n\n    </ul>\n  </div>\n</nav>\n\n<div class=\"toast-container\">\n  <ngb-toast\n    *ngFor=\"let toast of toastService.toasts\"\n    [class]=\"toast.classname\"\n    [autohide]=\"true\"\n    [delay]=\"toast.delay\"\n    (hide)=\"toastService.remove(toast)\"\n  >\n\n    <ng-template [ngIf]=\"isTemplate(toast)\" [ngIfElse]=\"text\">\n      <ng-template [ngTemplateOutlet]=\"toast.textOrTpl\"></ng-template>\n    </ng-template>\n    <ng-template #text>{{ toast.textOrTpl }}</ng-template>\n  </ngb-toast>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/home/home.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/home/home.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row home-comp\">\n  <div class=\"col-lg-11 header\">\n    <div class=\"header-tabs\" (click)=\"t.select('tab-property')\" [ngClass]=\"{active: homeView==='property'}\"\n         (click)=\"homeView='property'\" (click)=\"hotelMigrate()\">\n      <img src=\"../../../assets/icons/newhomepageicons/stays.png\" alt=\"\">\n      <figcaption>Stays</figcaption>\n    </div>\n    <div class=\"header-tabs\" routerLink=\"/d/treks/list\">\n      <img src=\"../../../assets/icons/treks/trekHomePage.png\" alt=\"\">\n      <figcaption>Treks</figcaption>\n    </div>\n\n    <div class=\"header-tabs\" routerLink=\"/d/events/list\">\n      <img src=\"../../../assets/icons/newhomepageicons/experience.png\" alt=\"\">\n      <figcaption>Experiences</figcaption>\n    </div>\n\n\n    <div class=\"header-tabs \" placement=\"top\" triggers=\"click:blur\" ngbTooltip=\"will be available shortly\">\n      <img src=\"../../../assets/icons/newhomepageicons/roadtrip.png\" alt=\"\">\n      <figcaption>Road Trips</figcaption>\n    </div>\n    <div class=\"header-tabs\" placement=\"top\" triggers=\"click:blur\" ngbTooltip=\"will be available shortly\">\n      <img src=\"../../../assets/icons/newhomepageicons/calendar.png\" alt=\"\">\n      <figcaption>Travel Calendar</figcaption>\n    </div>\n    <!--    <div class=\"header-tabs\" placement=\"top\" triggers=\"click:blur\" ngbTooltip=\"will be available shortly\">-->\n    <!--      <img src=\"../../../assets/icons/staff.png\" alt=\"\">-->\n    <!--      <figcaption>Staff Training Services</figcaption>-->\n    <!--    </div>-->\n    <!--    <div class=\"header-tabs\" placement=\"top\" triggers=\"click:blur\" ngbTooltip=\"will be available shortly\">-->\n    <!--      <img src=\"../../../assets/icons/supplies.png\" alt=\"\">-->\n    <!--      <figcaption>Standardized Supplies</figcaption>-->\n    <!--    </div>-->\n    <!--    <div class=\"header-tabs\" placement=\"top\" triggers=\"click:blur\" ngbTooltip=\"will be available shortly\">-->\n    <!--      <img src=\"../../../assets/icons/jobs.png\" alt=\"\">-->\n    <!--      <figcaption>Jobs Services</figcaption>-->\n    <!--    </div>-->\n    <!--    <div class=\"header-tabs\" (click)=\"t.select('tab-green')\" [ngClass]=\"{active: homeView==='green'}\"-->\n    <!--         (click)=\"homeView='green'\">-->\n    <!--      <img src=\"../../../assets/icons/green.png\" alt=\"\">-->\n    <!--      <figcaption>Green Hotel Services</figcaption>-->\n    <!--    </div>-->\n    <div class=\"header-tabs\" placement=\"top\" triggers=\"click:blur\" ngbTooltip=\"will be available shortly\">\n      <img src=\"../../../assets/icons/comm.png\" alt=\"\">\n      <figcaption>Others</figcaption>\n    </div>\n    <!--    <div class=\"header-tabs dda\" (click)=\"t.select('tab-dda')\" [ngClass]=\"{active: homeView==='dda'}\"-->\n    <!--         (click)=\"homeView='dda'\">-->\n    <!--      <img src=\"../../../assets/icons/dda.png\" alt=\"\">-->\n    <!--      <figcaption>Destination Development Advisory</figcaption>-->\n    <!--    </div>-->\n  </div>\n</div>\n\n<div class=\"home-navigation\">\n  <ngb-tabset #t=\"ngbTabset\">\n    <ngb-tab title=\"property\" id=\"tab-property\">\n      <ng-template ngbTabContent>\n        <div class=\"row\">\n          <!--          <div class=\"search-nav\">-->\n          <!--            <form #form=\"ngForm\" (ngSubmit)=\"onSearch(form)\">-->\n          <!--              <div class=\"row search-bar\">-->\n          <!--                <div class=\"col-md-12 search-fields\">-->\n          <!--                  <div class=\"search-input\">-->\n          <!--                    <div>Destination</div>-->\n          <!--                    <select name=\"destination\" id=\"destination\"-->\n          <!--                            [(ngModel)]=\"searchForm.destination\">-->\n          <!--                      <option value=\"Andaman\">Andaman</option>-->\n          <!--                      <option value=\"Barot\">Barot</option>-->\n          <!--                      <option value=\"Bir Billing\">Bir Billing</option>-->\n          <!--                      <option value=\"Chail\">Chail</option>-->\n          <!--                      <option value=\"Dehradun\">Dehradun</option>-->\n          <!--                      <option value=\"Dharamshala\">Dharamshala</option>-->\n          <!--                      <option value=\"Jibhi\">Jibhi</option>-->\n          <!--                      <option value=\"Kanatal\">Kanatal</option>-->\n          <!--                      <option value=\"Kasol\">Kasol</option>-->\n          <!--                      <option value=\"Leh\">Leh</option>-->\n          <!--                      <option value=\"Manali\">Manali</option>-->\n          <!--                      <option value=\"McLeod Ganj\">McLeod Ganj</option>-->\n          <!--                      <option value=\"Mukteshwar\">Mukteshwar</option>-->\n          <!--                      <option value=\"Naggar\">Naggar</option>-->\n          <!--                      <option value=\"Naldehra\">Naldehra</option>-->\n          <!--                      <option value=\"Narkanda\">Narkanda</option>-->\n          <!--                      <option value=\"Pangot\">Pangot</option>-->\n          <!--                      <option value=\"Rishikesh\">Rishikesh</option>-->\n          <!--                      <option value=\"Shimla\">Shimla</option>-->\n          <!--                      <option value=\"Shoghi\">Shoghi</option>-->\n          <!--                      <option value=\"Tirthan Valley\">Tirthan Valley</option>-->\n          <!--                    </select>-->\n          <!--                  </div>-->\n\n\n          <!--                  <div class=\"search-input\">-->\n          <!--                    <div>From Date</div>-->\n          <!--                    <input placeholder=\"yyyy-mm-dd\" ngModel-->\n          <!--                           name=\"from_date\" [(ngModel)]=\"searchForm.from_date\" ngbDatepicker-->\n          <!--                           [startDate]=\"searchForm.from_date\" #d=\"ngbDatepicker\"-->\n          <!--                           class=\"calendar\" (click)=\"d.toggle()\" autocomplete=\"off\"-->\n          <!--                           [minDate]=\"searchForm.min_date\" (ngModelChange)=\"setToDate()\">-->\n          <!--                  </div>-->\n\n          <!--                  <div class=\"search-input\">-->\n          <!--                    <div>To Date</div>-->\n          <!--                    <input placeholder=\"yyyy-mm-dd\" ngModel-->\n          <!--                           name=\"to_date\" [(ngModel)]=\"searchForm.to_date\" ngbDatepicker-->\n          <!--                           #db=\"ngbDatepicker\"-->\n          <!--                           class=\"calendar\" (click)=\"db.toggle()\" autocomplete=\"off\"-->\n          <!--                           [minDate]=\"searchForm.from_date\">-->\n          <!--                  </div>-->\n\n          <!--                  <div class=\"search-input border-0\">-->\n          <!--                    <div>No of People</div>-->\n          <!--                    <input type=\"number\" name=\"booking_required\"-->\n          <!--                           [(ngModel)]=\"searchForm.booking_required\">-->\n          <!--                  </div>-->\n\n          <!--                </div>-->\n          <!--                <div class=\"col-md-12 text-center home-search-button\">-->\n          <!--                  <button class=\"btn btn-black text-bold\" type=\"submit\">Search</button>-->\n          <!--                </div>-->\n          <!--              </div>-->\n          <!--            </form>-->\n          <!--          </div>-->\n        </div>\n        <div class=\"col-md-12 mt-5 mb-4 pt-5\">\n          <div class=\"h2 text-bold text-center\">Special Offer <span class=\"text-stroke\">For You</span></div>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"row\">\n            <div class=\"carousel-images\">\n              <div class=\"pointer-event\" (click)=\"redirectDestination('Jibhi')\" (click)=\"open(content)\"><img\n                src=\"../../../assets/img/offers/offer1.png\" alt=\"offers\"></div>\n              <div class=\"pointer-event\" (click)=\"redirectDestination('Jibhi')\" (click)=\"open(content)\"><img\n                src=\"../../../assets/img/offers/offer2.png\" alt=\"offers\"></div>\n              <div class=\"pointer-event\" (click)=\"redirectDestination('Tirthan Valley')\" (click)=\"open(content)\"><img\n                src=\"../../../assets/img/offers/offer3.png\" alt=\"offers\"></div>\n            </div>\n            <!--                        <ngb-carousel #carousel interval=\"3000\" [pauseOnHover]=\"pauseOnHover\"-->\n            <!--                                      [showNavigationIndicators]=\"showNavigationIndicators\" (slide)=\"onSlide($event)\">-->\n            <!--                            <ng-template ngbSlide>-->\n            <!--                                <a target=\"_blank\" rel=\"nofollow noopener noreferrer\">-->\n            <!--                                    <div class=\"picsum-img-wrapper carousel-images\">-->\n            <!--                                        <img src=\"../../../assets/img/offers/offer1.png\" alt=\"offers\">-->\n            <!--                                        <img src=\"../../../assets/img/offers/offer2.png\" alt=\"offers\">-->\n            <!--                                        <img src=\"../../../assets/img/offers/offer3.png\" alt=\"offers\">-->\n            <!--                                    </div>-->\n            <!--                                </a>-->\n            <!--                            </ng-template>-->\n            <!--                            <ng-template ngbSlide>-->\n            <!--                                <a target=\"_blank\" rel=\"nofollow noopener noreferrer\">-->\n            <!--                                    <div class=\"picsum-img-wrapper carousel-images\">-->\n            <!--                                        <img src=\"../../../assets/img/offers/offer2.png\" alt=\"offers\">-->\n            <!--                                        <img src=\"../../../assets/img/offers/offer3.png\" alt=\"offers\">-->\n            <!--                                        <img src=\"../../../assets/img/offers/offer1.png\" alt=\"offers\">-->\n            <!--                                    </div>-->\n            <!--                                </a>-->\n            <!--                            </ng-template>-->\n            <!--                            <ng-template ngbSlide>-->\n            <!--                                <a target=\"_blank\" rel=\"nofollow noopener noreferrer\">-->\n            <!--                                    <div class=\"picsum-img-wrapper carousel-images\">-->\n            <!--                                        <img src=\"../../../assets/img/offers/offer3.png\" alt=\"offers\">-->\n            <!--                                        <img src=\"../../../assets/img/offers/offer1.png\" alt=\"offers\">-->\n            <!--                                        <img src=\"../../../assets/img/offers/offer2.png\" alt=\"offers\">-->\n            <!--                                    </div>-->\n            <!--                                </a>-->\n            <!--                            </ng-template>-->\n            <!--                        </ngb-carousel>-->\n          </div>\n        </div>\n      </ng-template>\n    </ngb-tab>\n    <ngb-tab title=\"dda\" id=\"tab-dda\">\n      <ng-template ngbTabContent>\n        <div class=\"col-md-12 mt-5\">\n          <div class=\"\">\n            <div class=\"h2 text-bold text-center\">Destination Development Consulting and Advisory</div>\n            <hr>\n\n            <div class=\"col-md-10 black m-auto\">\n\n              <p>Addressing the nation from the ramparts of the Red Fort on the 73rd Independence Day,\n                Prime Minister Narendra Modi urged people to visit at least 15 tourist destinations\n                within India by 2022, saying there is a \"huge\" scope to improve India's tourism\n                sector.</p>\n\n              <h4 style=\"text-decoration: underline;\">6 Reasons: Why “Strategic Planning and Destination\n                Management Planning” is an Essential Tourism Activity </h4>\n              <h6>Tourism is disrupted. Rural, small, quaint towns are now emerging as new destinations\n                and competing with traditional tourist destinations.</h6>\n              <p>\n                Planning has become paramount to avoid disasterous situations caused by haphazard\n                developments not just for new emerging destinations but also for existing destinations.\n                Ecosensitive destinations in particluar need a strong planning to avoid natural disaster\n                as well as things like like traffic congestion, problems with solid waste disposal, a\n                shortage of water, electricity generation and utilisation. It is required to ensure that\n                the created assets are sustainable and don’t disturb the natural assests of the place.\n                Globally, the misuse and abuse of a public and natural resource being commonplace, this\n                planning is quite important.\n                Thus strategic planning is an important comprehensive process for determining what a\n                destination should become and the steps needed to make tourists visit the place again\n                and to keep tourists happy. Destination management is the coordinated management of all\n                elements that make up a destination, including the infrastructure, stay, local\n                transport, attractions, amenities, access, marketing and pricing.\n              </p>\n\n              <ol>\n                <li>\n                  Every destination is unique. Its stories are uniques and things you can do are\n                  unique too. A destination known for heritage and history will be different from a\n                  destination for water sports or religious tourism. A careful planning is needed to\n                  create its appeal and to attract right kind of tourists. A scenario based response\n                  plan must be put in place to manage low/high-volume as per seasonality\n                </li>\n                <li>\n                  Public sector (government) and private sectors have important roles that are not\n                  always clearly demarcated. A planning is needed to demarcate these roles and set\n                  clear expectations as well as\n                </li>\n                <li>\n                  Most places were never planned to handle the kind of tourism rush that they are\n                  witnessing now this is putting stress on local resources. Tourism means town\n                  infrastructure like Tourist Information Centers/ Kiosks, beautification of local\n                  roads and spots, parking facilities, safe boarding and lodging facilities compliant\n                  to fire and earthquake safety, sanitation, sewage and waste disposal upgradation,\n                  water availability, fire station, hospital, new power grids to meet higher demand\n                  for electricity as well as local adminstration strengthening.\n                </li>\n                <li>\n                  A plan is needed to ensure compliance to “enviornment guidelines and sustainability”\n                </li>\n                <li>\n                  Sometimes, tourism development requires intesive intervational collaboration as it\n                  involves heavy outlays and investments in core infrastructure (e.g. all weather Char\n                  Dham Route). This leaves government with little resources for several other\n                  competing development activities , therefore, particularly need to undertake tourism\n                  planning to ensure availability of funds and expertise. It is also needed in order\n                  to ensure the proper utilization of the finances so that maximum economic and other\n                  benefits may be derived.\n                </li>\n                <li>\n                  A number of tourist destinations have experienced a cycle of intense building\n                  activity and capital investment, witnessed a tourist boom, hit a hay day and then\n                  began to decline. To avoid eventual decline responsible planning and management are\n                  essential.\n                </li>\n              </ol>\n\n              <h5>USPL Expertise</h5>\n              <p>\n                We are experts at understanding and recognizing the unique and exceptional experiences\n                desired by today’s traveler and believe in the importance of developing tourism in a way\n                that syncs with ongoing trends of industry and provides the greatest benefit to the\n                local stakeholders while conserving the natural assets for future generations. USPL\n                provides comprehensive strategic planning solutions for destination development and\n                management and links objectives to the actions and resources required to achieve them.\n\n                Our goal is to help elevate group and leisure travel through comprehensive research,\n                innovative engagement tools, and strategies.\n\n                At the core of our tourism expertise is our ability to quickly and effectively assess\n                the tourism business case. We combine the social interactions and best market\n                intelligence for feasibility assessments and business planning for destinations and\n                suggest tourism products, experiences, events, attractions and the needs like local\n                infrastructure, large resorts to homestays, from locally owned and operated businesses\n                to large global operators, and from retail to food service businesses.\n\n                The Destination Assessment is a 3-5 month long, most of which is spent at the\n                destination and includes a thorough review of your destination’s stories, existing\n                facilities, assets, activities, and supporting amenities. The Destination Assessment\n                culminates in a photographic design thinking based \"Findings & Suggestions Workshop,\"\n                which will set the foundation to tasks that can really make a difference.\n\n                The assessment gives a way to Destination Development Plan – where we enable\n                governments, local authorities and communities create an execution plan. We help them\n                define concrete milestones, plan for funds and select right vendors and stakeholders. We\n                put in place the project governance. Destination development can be both a one time\n                activity ranging from 2-12 months and an ongoing governance activity.\n\n              </p>\n\n              <h6>Destination Assessments, Impact Assessment, Gap Analysis and Market Research – Seeing\n                from the eyes of tourists</h6>\n              <p>\n                Over 1 billion travellers are visiting the world's seven continents today. We leverage\n                the complexities of destinations to drive the tourists to our destinations.\n\n\n                Our market assessment provides the valuable insights and on number of tourists who\n                can/will visit annually and money they will be willing to spend based on multiple\n                scenarios. This helps in drawing the right investments for the destinations and in\n                development of the infrastructure. We clearly outline\n\n              </p>\n\n              <ol>\n                <li>Tourism Potential– Numbers and revenue</li>\n                <li>Boarding requirements, segmentation and fulfilment strategies- home stays, hotels,\n                  camping , zero waste and eco-friendly properties\n                </li>\n                <li>Transportation infrastructure and fulfilment- road, water, overhead trolleys, lifts,\n                  parking, traffic management, use of green technologies\n                </li>\n                <li>Manpower Requirements and fulfilment – skills needed – managerial, niche (experts-\n                  yoga, sports, experience), generic- housekeeping, guides, chefs, drivers etc, skill\n                  development programs for locals- Lingual, Communication, personality, semiskilled\n                </li>\n                <li>Financial system for electronic transactions and taxation</li>\n                <li>Strengthening local administration – policing, compliance monitoring, safety,\n                  cleaniness and food safety\n                </li>\n                <li>Infrastructure Upgrades – Sanitation and garbage disposal, water management,\n                  Pollution Management, electric infrastructure upgrades , use of green technologies\n                </li>\n                <li>Emergency and disaster management planning</li>\n\n              </ol>\n\n              <h6>Destination Stories, Brand and Activities</h6>\n\n              <p>\n                People travel for a variety of reasons: to escape, explore, understand, and participate.\n                But at the core of the experience lies the destination — the place that hands something\n                to the traveller to keep forever and share with others. Tourists choose destinations for\n                their soul and story ( Ecozone, recreational, historical) and expect facilities in line\n                with it.\n\n                Once people are at destination, the focus shifts to activities they will do, the local\n                transportation and local experiences. A destination known for heritage and history will\n                be different from a destination for water sports or religious tourism.\n\n              </p>\n\n              <ol>\n                <li>We advisory on developing the tourism facilities and infrastructure can be developed\n                  to reveal and build on the story of the place.\n                </li>\n                <li>We design the experiences for the tourists based on soul and theme of destination –\n                  landscape, recreation, adventure, religious, historical, culture\n                </li>\n                <li>We create the “Execution plan” where we work with communities, established\n                  institutions and agencies to develop strategies to deliver experinces to tourists\n                  and keeping them occupied and entertained while at destination\n                </li>\n                <li>We develop a plan to promote local events, monuments, landmarks, places of natural\n                  beauty, cuisines and handicrafts and recreational activity like land/water/ air and\n                  other activities like paragliding, trekking etc.\n                </li>\n                <li>We create We also help in developing the destination as the brand and related\n                  promotional strategies (digital/ print and traditional). It also enables prober\n                  promotion strategies for bringing tourists to destinations.\n                </li>\n\n              </ol>\n\n              <h6>International Collaboration</h6>\n\n              <p>\n                International and domestic collaboration is often a key aspect of the destination\n                planning and development. The key stakeholders of destination management can include\n                international agencies like UN World Tourism Organization (UNWTO), UNDP, global and\n                national Banks, central governments and public entities. International collaboration had\n                a dual logic. International partners could participate as integral part of funding and\n                can also enable multi-lateral teams to tap into specific knowledge as needed for\n                concrete project work.\n              </p>\n\n              <div class=\"flex-box\">\n                <div style=\"width: 50%\">\n                  <ol>\n                    <li>We define the drivers and motivations of collaboration</li>\n                    <li>Destination management plan clearly documents the role that each of these\n                      will play and demarcate the roles and responsibilities while contextualising\n                      the international activities\n                    </li>\n                    <li>Project Governance</li>\n\n                  </ol>\n                </div>\n\n                <div style=\"width: 50%\">\n                  <img src=\"../../../assets/img/home/destination-dev1.jpg\" alt=\"\" width=\"90%\">\n                </div>\n              </div>\n\n              <h6>Community Engagement- Community Hub model</h6>\n\n              <p>\n                The key aspects of our plan are USPL portal, local individual champions and Women SHG\n                who work with us via Knowledge Hubs and Community hubs leveraging UN SDG framework and\n                enabling “collective inclusive growth” for the local economies by developing sustainable\n                eco-tourism destinations in rural India to achieve the vision outlined by our prime\n                minister.\n              </p>\n\n              <div>\n                <img src=\"../../../assets/img/home/destination-dev2.jpg\" alt=\"\" width=\"80%\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n    </ngb-tab>\n    <ngb-tab title=\"dda\" id=\"tab-green\">\n      <ng-template ngbTabContent>\n        <div class=\"col-md-12 mt-5\">\n          <div class=\"\">\n            <div class=\"h2 text-bold text-center\">GREEN HOTEL</div>\n            <hr>\n\n            <div class=\"col-md-9 offset-md-1 black\">\n              <h6 class=\"\">WHAT IS A GREEN HOTEL?</h6>\n              <p>\n                A GREEN HOTEL, is an environmentally sustainable hotel that minimize its impact on the\n                natural environment.\n\n                A GREEN HOTEL follows the practices of Green living:\n              </p>\n              <ol>\n                <li>Non-toxic housekeeping practices</li>\n                <li>Use of renewable energy</li>\n                <li>Organic soaps</li>\n                <li>Energy-efficient light fixtures</li>\n                <li>Serving local organic food in restaurants</li>\n                <li>Reusing linens when a guest is staying for more than one night</li>\n                <li>Incorporating recycling and composting programs.</li>\n              </ol>\n              <p>\n                HOTELS THAT FOLLOW THESE BEST\n                PRACTICES CAN ATTRACT\n                ENVIRONMENTALLY CONSCIOUS\n                TRAVELERS AND STAND OUT FROM\n                OTHER HOTELS.\n\n              </p>\n              <h6>WHY IS IT IMPORTANT?</h6>\n              <ol>\n                <li>ZERO WASTE program will help you reduce the amount of waste you produce, saving materials, resources\n                  and energy.\n                </li>\n\n                <li>You often pay twice for the waste you produce – firstly in the form of packaging and secondly to\n                  dispose of it.\n                </li>\n\n\n                <li>On average, a hotel creates around .5kg of waste per guest per night. This soon mounts up if you\n                  multiply it by the number of guest nights each year, as does the cost to dispose of it.\n                </li>\n\n\n                <li>Waste legislation on business and households is becoming increasingly stringent, especially in\n                  Delhi/NCR. This would increase your waste disposal costs.\n                </li>\n\n\n                <li>Many items of waste have a value because they can be recycled into something else. You may be able\n                  to make money from your hotel’s waste.\n                </li>\n\n                <li>Often at least 30 per cent of a hotel’s solid waste stream can be sorted for recovery and\n                  recycling.\n                </li>\n\n              </ol>\n              <h6>ZERO WASTE OBJECTIVE</h6>\n              <ol>\n                <li>REDUCE The best way to improve waste management is to create as little waste as possible by not\n                  purchasing it to begin with.\n                </li>\n\n\n                <li>RECOVER You need to set up systems to collect and sort the waste so that it can be reused or\n                  recycled.\n                </li>\n                <li>REUSE Consideration will need to be given to where certain items can be reused, or whether they can\n                  be sold or donated to organizations outside the hotel that can reuse them.\n                </li>\n                <li>RECYCLE Many hotels, restaurants and tourism establishments already have some system in place for\n                  sorting and collecting everyday waste items such as bottles, cans, cardboard and paper for reuse or\n                  recycling.\n                </li>\n\n              </ol>\n              <h6>ALTERNATIVES!</h6>\n              <ol>\n                <li>Install a POS system. Take orders digitally rather than writing them down on paper to help reduce\n                  paper waste\n                </li>\n                <li>Use cloth napkins instead of paper napkins. If you use paper napkins, ask customers to be careful\n                  with use\n                </li>\n                <li>Get laminated menus for longer use</li>\n\n                <li>Get rid of Styrofoam, plastic straws, plastic bottles, disposables</li>\n                <li>Install flow restricts on faucets and low flush toilets to limit the amount of water used</li>\n                <li>Buying local foods is an easy way to go green.</li>\n                <li>Energy Efficient lights, appliances and ventilators</li>\n                <li>Donate leftovers to charity.</li>\n\n                <li>Waste management program – segregate your waste and recycle</li>\n\n              </ol>\n              <h6>SOURCE SEGREGATION</h6>\n              <p>\n                Source Segregation is the most\n\n                critical but simplest step in\n\n                efficient waste management.\n\n\n                Some of the benefits of source\n\n                segregation include:\n              </p>\n              <ol>\n                <li>Improving the recycling potential for different types of waste •Reducing pollution significantly\n                  •Reducing cost of processing waste\n                </li>\n                <li>Enabling composting/ bio-mechanization which helps in enriching the soil</li>\n                <li>Giving a dignified livelihood to waste workers</li>\n\n              </ol>\n              <h6>WET WASTE</h6>\n              <ol>\n                <li>Vegetable and Fruit peels</li>\n\n                <li>Rotten Vegetable and fruits</li>\n\n                <li>leftover food</li>\n\n                <li>used tea and coffee bags</li>\n\n                <li>Mango seeds</li>\n\n                <li>Egg shells , Rotten egg</li>\n\n                <li>coconut shell, fiber, tender part</li>\n\n                <li>Used flower and leaves after pooja</li>\n\n                <li>Soiled spices</li>\n\n                <li>Meat and non-veg food remains</li>\n\n                <li>Bones</li>\n\n                <li>floor sweeping dust</li>\n\n                <li>Expired food items packets (like bread ,</li>\n\n                <li>biscuits , ready to food)</li>\n\n                <li>Finger or toe nails</li>\n\n                <li>Hair</li>\n\n                <li>pet food</li>\n\n                <li>Garden leaves , Weeds , Dried Flowers</li>\n\n                <li>Chewing Gum</li>\n\n              </ol>\n\n              <h6>DRY WASTE</h6>\n              <ol>\n\n                <li>Aluminium Foil, cling wraps used to pack Food Used Hair Bands, Hair Clips , Combs , Hair Brushes\n                </li>\n\n                <li>Stapler Pins , broken pins</li>\n\n                <li>Take Away Food Packing like Pizza Boxes,</li>\n\n                <li>Chutney , Sambar Covers etc</li>\n\n                <li>Leather, Rexine, Rubber, furniture,</li>\n\n                <li>thermocole (expanded polystyrene)</li>\n\n                <li>Used bottles, tubes , cans of Shaving cream ,</li>\n\n                <li>Deodorant, creams , etc.</li>\n\n                <li>Small broken Toys</li>\n\n                <li>Thermocaol Balls from bean bags</li>\n\n                <li>Tissue paper</li>\n\n                <li>Old brooms</li>\n\n                <li>Pieces of Aluminium Foils used to cover Ghee , Jam etc.</li>\n\n                <li>Small Tubs like the ones used for jam , cheese , yogurt etc.</li>\n\n                <li>Tin Bottles , like Pepsi cans etc.</li>\n\n                <li>Broken house hold Plastic items</li>\n\n                <li>Tetra packs, all pet bottles, plastic bottles</li>\n\n                <li>All stationery items, bathroom items</li>\n\n              </ol>\n\n              <h6>ACTION PLAN</h6>\n              <ol>\n\n                <li>Avoid the use of plastic straws.</li>\n                <li>Use containers with lids in preference to plastic wrap, cling film or foil.</li>\n\n                <li>Use refillable containers for soap, cleaners and foodstuffs.</li>\n\n                <li>Substitute reusable glass bottles for plastic ones.</li>\n\n                <li>Use cloth or canvas bags or baskets for laundry, shoe polish, etc. instead of plastic bags.</li>\n\n                <li>Use mugs in preference to paper cups, and paper cups rather than polystyrene.</li>\n\n                <li>Maximize the use of computers/electronic mail to reduce paper use. Ask yourself if you really need\n                  to print out the document\n                </li>\n\n                <li>Make and use your own compost, where feasible.</li>\n\n                <li>Worn towels, sheets and tablecloths can be re-used as cleaning cloths and dusters or turned into\n                  aprons.\n                </li>\n\n\n                <li>Reuse computer and other paper as notepaper.</li>\n\n                <li>Donate used and surplus items to schools or charitable organisations instead of throwing them away,\n                  such as donating partially-used guest shampoo, conditioner and bath gel to homeless shelters and\n                  charities.\n                </li>\n\n\n                <li>Reuse leftover pads and pencils from meeting rooms.</li>\n\n                <li>Use straw and shredded paper or other degradable material for packaging.</li>\n\n                <li>Use cloth napkins in preference to paper ones. If you do use paper ones, they can be composted after\n                  use unless they are badly soiled.\n                </li>\n\n\n                <li>Avoid using waste disposal units that grind kitchen waste before putting it down the drain. They\n                  require a lot of water to work effectively and increase the burden on waste water treatment. They can\n                  also cause odours and attract rodents.\n                </li>\n\n              </ol>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n    </ngb-tab>\n  </ngb-tabset>\n</div>\n\n\n<div class=\"col-md-12 mt-5 pt-5 mb-2\">\n  <div class=\"h2 text-bold text-center\">About Us</div>\n</div>\n\n<div class=\"col-md-12 mb-5\">\n  <div class=\"col-md-6 offset-md-3 text-center\">\n    <p class=\"text-black-50\">\n      At Unfolding skies we offer a balanced portfolio of growth &amp; innovation services\n      helping clients\n      make the best of innovation.\n      We are focused on innovation. We engage with our customers as trusted advisors and a\n      partner in their\n      innovation journey. By bringing together everything- the required experience, expertise,\n      methods and\n      tools, we get things done. Making innovation work, is our purpose. Customers can take\n      some comfort with\n      us as we enable the tech behind the services and solutions they intend to create.\n    </p>\n    <a href=\"https://hotels.wandertribe.in\" class=\"btn btn-uspl mt-3\">Our recent Product</a>\n  </div>\n</div>\n\n<ng-template #content let-modal>\n  <form [formGroup]=\"contactUserForm\" (ngSubmit)=\"contactFormSubmit()\">\n    <div class=\"modal-header \">\n      <h2 class=\"text-center w-100\">Looking for more details!</h2>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body mt-3\">\n      <div CLASS=\"form-group\">\n        <label class=\"pl-2\">Name</label>\n        <input type=\"text\" formControlName=\"name\" class=\"form-control\">\n      </div>\n      <div CLASS=\"form-group\">\n        <label class=\"pl-2\">Email</label>\n        <input type=\"email\" formControlName=\"email\" class=\"form-control\">\n      </div>\n      <div CLASS=\"form-group\">\n        <label class=\"pl-2\">Mobile</label>\n        <input type=\"number\" formControlName=\"mobile\" class=\"form-control\">\n      </div>\n      <div CLASS=\"form-group\">\n        <label class=\"pl-2\">Query</label>\n        <textarea formControlName=\"query\" rows=\"4\" class=\"form-control\"></textarea>\n      </div>\n      <input type=\"hidden\" formControlName=\"type\">\n    </div>\n    <div class=\"form-group text-center\">\n      <button class=\"btn btn-primary mb-2\" (click)=\"modal.close('Save click')\" [disabled]=\"!contactUserForm.valid\">\n        Save\n      </button>\n    </div>\n  </form>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/loader/loader.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/loader/loader.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class.hidden]=\"!show\">\n  <div class=\"loader-overlay\">\n    <div *ngIf=\"show\" class=\"loader\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/notfound/notfound.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/notfound/notfound.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>notfound works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/orders/orders.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/orders/orders.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-8 offset-2 pt-2\">\n\n<!--    <form>-->\n<!--      <div class=\"form-group form-inline\">-->\n<!--        Search: <input class=\"form-control ml-2\" type=\"text\" [formControl]=\"filter\"/>-->\n<!--      </div>-->\n<!--    </form>-->\n\n    <table class=\"table table-striped\">\n      <thead>\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Booking Id</th>\n        <th scope=\"col\">Booking Type</th>\n        <th scope=\"col\">Booking Status</th>\n        <th scope=\"col\">Transaction Status</th>\n        <th scope=\"col\">Amount</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let order of initialOrders ; index as i\">\n        <th scope=\"row\">{{ i + 1 }}</th>\n        <td>\n          <ngb-highlight [result]=\"order._id| uppercase\" [term]=\"filter.value\"></ngb-highlight>\n        </td>\n        <td>\n          <ngb-highlight [result]=\"order.type | uppercase\" [term]=\"filter.value\"></ngb-highlight>\n        </td>\n        <td>\n          <ngb-highlight [result]=\"order.bookingStatus | uppercase \" [term]=\"filter.value\"></ngb-highlight>\n        </td>\n        <td>\n          <ngb-highlight [result]=\"order.transaction.status| uppercase\" [term]=\"filter.value\"></ngb-highlight>\n        </td>\n        <td>\n          <ngb-highlight [result]=\"order.transaction.amount| number\" [term]=\"filter.value\"></ngb-highlight>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/profile/profile.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/profile/profile.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/profile/profileedit/profileedit.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/profile/profileedit/profileedit.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 pt-5 hero-area-profile\">\n\n  <div class=\"col-md-10 offset-md-1\">\n    <ngb-tabset type=\"pills\" [justify]=\"'justified'\" #t=\"ngbTabset\">\n      <ngb-tab title=\"PROFILE DETAILS\">\n        <ng-template ngbTabContent>\n\n\n          <div class=\"col-md-12 mt-5\">\n            <form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\n              <div class=\"row form-group\">\n                <div class=\"col-md-12 d-flex\">\n                  <div class=\"col-md-5\">\n                    <label for=\"name\"> Full Name </label>\n                  </div>\n                  <div class=\"col-md-7\">\n                    <input class=\"form-control \" type=\"text\" name=\"name\" formControlName=\"name\"\n                           id=\"name\"\n                           placeholder=\"Name\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-12 d-flex\">\n                  <div class=\"col-md-5\">\n                    <label for=\"mobile\">Mobile </label>\n                  </div>\n                  <div class=\"col-md-7\">\n                    <input class=\"form-control\" type=\"number\" name=\"mobile\" formControlName=\"mobile\"\n                           id=\"mobile\"\n                           placeholder=\"Mobile\" readonly>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-12 d-flex\">\n                  <div class=\"col-md-5\">\n                    <label for=\"email\">Email </label>\n                  </div>\n                  <div class=\"col-md-7\">\n                    <input class=\"form-control\" type=\"email\" id=\"email\" name=\"email\"\n                           formControlName=\"email\"\n                           placeholder=\"Email\" readonly>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-12 d-flex\">\n                  <div class=\"col-md-5\">\n                    <label> Date of Birth </label>\n                  </div>\n                  <div class=\"col-md-7\">\n                    <input placeholder=\"yyyy-mm-dd\" name=\"dob\" formControlName=\"dob\" ngbDatepicker\n                           #dob=\"ngbDatepicker\"\n                           class=\"form-control\" (click)=\"dob.toggle()\" autocomplete=\"off\">\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row form-group\" formGroupName=\"address\">\n                <div class=\"col-md-12 d-flex\" formGroupName=\"currentAddress\">\n                  <div class=\"col-md-5\">\n                    <label for=\"name\">Current Address</label>\n                  </div>\n                  <div class=\"col-md-7\">\n                    <input class=\"form-control \" type=\"text\" name=\"cFullAddress\"\n                           formControlName=\"cFullAddress\" id=\"c_fullAddress\"\n                           placeholder=\"Full Address\">\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row form-group\" formGroupName=\"address\">\n                <div class=\"col-md-12 d-flex\" formGroupName=\"currentAddress\">\n                  <div class=\"col-md-5\">\n                    <label for=\"mobile\">Postal Code</label>\n                  </div>\n                  <div class=\"col-md-7\">\n                    <input class=\"form-control\" type=\"number\" name=\"cPostalCode\"\n                           formControlName=\"cPostalCode\" id=\"c_postalCode\"\n                           placeholder=\"Postal Code\">\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-md-12 d-flex\">\n                  <div class=\"col-md-5 text-bold\">\n                    <span>Same as Current Address</span>\n                  </div>\n                  <div class=\"col-md-7\">\n                    <label class=\"switch ml-5\">\n                      <input type=\"checkbox\" #adrs (click)=\"set_address(adrs.checked)\">\n                      <span class=\"slider round\"></span>\n                    </label>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row form-group\" formGroupName=\"address\">\n                <div class=\"col-md-12 d-flex\" formGroupName=\"permanentAddress\">\n                  <div class=\"col-md-5\">\n                    <label for=\"name\">Permanent Address</label>\n                  </div>\n                  <div class=\"col-md-7\">\n                    <input class=\"form-control \" type=\"text\" name=\"pFullAddress\"\n                           formControlName=\"pFullAddress\" id=\"p_fullAddress\"\n                           placeholder=\"Full Address\">\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row form-group\" formGroupName=\"address\">\n                <div class=\"col-md-12 d-flex\" formGroupName=\"permanentAddress\">\n                  <div class=\"col-md-5\">\n                    <label for=\"mobile\">Postal Code</label>\n                  </div>\n                  <div class=\"col-md-7\">\n                    <input class=\"form-control\" type=\"number\" name=\"pPostalCode\"\n                           formControlName=\"pPostalCode\" id=\"p_postalCode\"\n                           placeholder=\"Postal Code\">\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-md-12 form-group text-center\">\n                <button class=\"btn btn-uspl\" type=\"submit\">Save & Next</button>\n              </div>\n            </form>\n          </div>\n\n        </ng-template>\n      </ngb-tab>\n\n      <ngb-tab title=\"DOCUMENT UPLOAD\" id=\"upload_image\">\n        <ng-template ngbTabContent>\n\n          <div class=\"col-md-12 mt-5\">\n            <form [formGroup]=\"imageForm\" (ngSubmit)=\"onImageSubmit()\" autocomplete=\"off\">\n              <div class=\"row form-group upload-form-group\">\n                <div class=\"col-md-8 d-flex\">\n                  <div class=\"col-md-7\">\n                    <label for=\"name\"> Upload your Profile Image </label>\n                  </div>\n                  <div class=\"col-md-5\">\n                    <input class=\"form-control \" type=\"file\" name=\"profileImage\"\n                           id=\"profileImage\"\n                           placeholder=\"Profile Image\" (change)=\"imgPreviewProfile($event)\">\n                  </div>\n                </div>\n                <div class=\"col-md-4 image-preview\">\n                  <img [src]=\"previewUrlProfile\">\n                </div>\n              </div>\n              <div class=\"row form-group upload-form-group\">\n                <div class=\"col-md-8 d-flex\">\n                  <div class=\"col-md-7\">\n                    <label for=\"mobile\"> Upload your Date of Birth Proof </label>\n                  </div>\n                  <div class=\"col-md-5\">\n                    <input class=\"form-control\" type=\"file\" name=\"dobProof\"\n                           id=\"dobProof\"\n                           placeholder=\"DOB Proof\" (change)=\"imgPreviewDob($event)\">\n                  </div>\n                </div>\n                <div class=\"col-md-4 image-preview\">\n                  <img [src]=\"previewUrlDob\">\n                </div>\n              </div>\n              <div class=\"row form-group upload-form-group\">\n                <div class=\"col-md-8 d-flex\">\n                  <div class=\"col-md-7\">\n                    <label for=\"email\"> Upload your Address Proof </label>\n                  </div>\n                  <div class=\"col-md-5\">\n                    <input class=\"form-control\" type=\"file\" id=\"addressProof\"\n                           name=\"addressProof\"\n                           placeholder=\"Address Proof\" (change)=\"imgPreviewAddress($event)\">\n                  </div>\n                </div>\n                <div class=\"col-md-4 image-preview\">\n                  <img [src]=\"previewUrlAddress\">\n                </div>\n              </div>\n\n              <div class=\"col-md-12 form-group text-center\">\n                <button class=\"btn btn-uspl\" type=\"submit\">Upload</button>\n              </div>\n            </form>\n          </div>\n\n        </ng-template>\n      </ngb-tab>\n\n      <!-- <ngb-tab title=\"BUSINESS PROFILES\" id=\"business_profile\">\n        <ng-template ngbTabContent>\n\n          <div class=\"row\">\n            <form #form=\"ngForm\" (ngSubmit)=\"businessProfileSubmit(form)\" class=\"w-100\">\n\n              <div class=\"col-md-12 mt-5\">\n                <!--<label class=\"form-title\">Add Business Profiles</label>-->\n                <!-- <div class=\"col-md-12\">\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" placement=\"left\" triggers=\"click:blur\"\n                         ngbTooltip=\"will be available shortly\">\n                      <input type=\"checkbox\" id=\"travelAgentBusiness\" name=\"travelAgentBusiness\"\n                             [(ngModel)]=\"profileData.roles.business.travelAgentBusiness\" disabled>\n                      <label class=\"ml-2\" for=\"travelAgentBusiness\">Travel Agent</label>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" placement=\"left\" triggers=\"click:blur\"\n                         ngbTooltip=\"will be available shortly\">\n                      <input type=\"checkbox\" id=\"travelCuratorBusiness\" name=\"travelCuratorBusiness\"\n                             [(ngModel)]=\"profileData.roles.business.travelCuratorBusiness\" disabled>\n                      <label class=\"ml-2\" for=\"travelCuratorBusiness\">Curator / Fixed Departure Travel\n                        Organiser</label>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <input type=\"checkbox\" id=\"treksBusiness\" name=\"treksBusiness\"\n                             [(ngModel)]=\"profileData.roles.business.treksBusiness\">\n                      <label class=\"ml-2\" for=\"treksBusiness\">Treks</label>\n                    </div>\n                  </div>\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <input type=\"checkbox\" id=\"roadTripBusiness\" name=\"roadTripBusiness\"\n                             [(ngModel)]=\"profileData.roles.business.roadTripBusiness\">\n                      <label class=\"ml-2\" for=\"roadTripBusiness\">Road Trip</label>\n                    </div>\n                  </div>\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <input type=\"checkbox\" id=\"eventsBusiness\" name=\"eventsBusiness\"\n                             [(ngModel)]=\"profileData.roles.business.eventsBusiness\">\n                      <label class=\"ml-2\" for=\"eventsBusiness\">Events</label>\n                    </div>\n                  </div>\n\n                  <hr>\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" placement=\"left\" triggers=\"click:blur\"\n                         ngbTooltip=\"will be available shortly\">\n                      <input type=\"checkbox\" id=\"properties\" name=\"propertiesBusiness\"\n                             [(ngModel)]=\"profileData.roles.business.propertiesBusiness\" disabled>\n                      <label class=\"ml-2\" for=\"properties\">Hotels and Properties</label>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <input type=\"checkbox\" id=\"realEstate\" name=\"realEstateBusiness\"\n                             [(ngModel)]=\"profileData.roles.business.realEstateBusiness\">\n                      <label class=\"ml-2\" for=\"realEstate\">Real Estate</label>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <input type=\"checkbox\" id=\"transportation\" name=\"transportationBusiness\"\n                             [(ngModel)]=\"profileData.roles.business.transportationBusiness\">\n                      <label class=\"ml-2\" for=\"transportation\">Transport Service</label>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" placement=\"left\" triggers=\"click:blur\"\n                         ngbTooltip=\"will be available shortly\">\n                      <input type=\"checkbox\" id=\"serviceSupplier\" name=\"serviceSupplierBusiness\"\n                             [(ngModel)]=\"profileData.roles.business.serviceSupplierBusiness\" disabled>\n                      <label class=\"ml-2\" for=\"serviceSupplier\">Material / Service supplier for\n                        Hotels</label>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" placement=\"left\" triggers=\"click:blur\"\n                         ngbTooltip=\"will be available shortly\">\n                      <input type=\"checkbox\" name=\"financeBusiness\"\n                             [(ngModel)]=\"profileData.roles.business.financeBusiness\" disabled>\n                      <label class=\"ml-2\">Finance Services</label>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" placement=\"left\" triggers=\"click:blur\"\n                         ngbTooltip=\"will be available shortly\">\n                      <input type=\"checkbox\" name=\"tourismRelatedSoftwareProvidersBusiness\"\n                             [(ngModel)]=\"profileData.roles.business.tourismRelatedSoftwareProvidersBusiness\" disabled>\n                      <label class=\"ml-2\">Tourism related Software Providers</label>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" placement=\"left\" triggers=\"click:blur\"\n                         ngbTooltip=\"will be available shortly\">\n                      <input type=\"checkbox\" name=\"insuranceBusiness\"\n                             [(ngModel)]=\"profileData.roles.business.insuranceBusiness\" disabled>\n                      <label class=\"ml-2\">Insurance</label>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" placement=\"left\" triggers=\"click:blur\"\n                         ngbTooltip=\"will be available shortly\">\n                      <input type=\"checkbox\" name=\"greenHotelExpertBusiness\"\n                             [(ngModel)]=\"profileData.roles.business.greenHotelExpertBusiness\" disabled>\n                      <label class=\"ml-2\">Green Hotel Experts</label>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" placement=\"left\" triggers=\"click:blur\"\n                         ngbTooltip=\"will be available shortly\">\n                      <input type=\"checkbox\" name=\"destinationDevelopmentExpertBusiness\"\n                             [(ngModel)]=\"profileData.roles.business.destinationDevelopmentExpertBusiness\" disabled>\n                      <label class=\"ml-2\">Destination Development Experts</label>\n                    </div>\n                  </div>\n\n                </div>\n\n                <div class=\"row mt-5\">\n                  <div class=\"form-group text-center col-md-6 text-left\">\n                    <button class=\"btn\" type=\"submit\" (click)=\"navigationTrigger()\">Save & Continue to dashboard\n                    </button>\n                  </div>\n                  <div class=\"form-group text-center col-md-6 text-right\">\n                    <button class=\"btn\" type=\"submit\">Save & Next</button>\n                  </div>\n\n                </div>\n\n              </div>\n            </form>\n          </div>\n\n\n        </ng-template> -->\n      <!-- </ngb-tab> -->\n\n     <!--  <ngb-tab title=\"ACTIVITY EXPERT\" id=\"activity_expert\">\n        <ng-template ngbTabContent>\n\n          <div class=\"row\">\n            <form #form=\"ngForm\" (ngSubmit)=\"activityExpertSubmit(form)\" class=\"w-100\">\n\n              <div class=\"col-md-12 mt-5\"> -->\n                <!--<label class=\"form-title\">Add Business Profiles</label>-->\n                <!-- <div class=\"col-md-12\">\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" placement=\"left\" triggers=\"click:blur\"\n                         ngbTooltip=\"will be available shortly\">\n                      <input type=\"checkbox\" id=\"wellness\" name=\"wellnessExperts\"\n                             [(ngModel)]=\"profileData.roles.activityExperts.wellnessExperts\" disabled>\n                      <label class=\"ml-2\" for=\"wellness\">Wellness</label>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" placement=\"left\" triggers=\"click:blur\"\n                         ngbTooltip=\"will be available shortly\">\n                      <input type=\"checkbox\" id=\"waterExpert\" name=\"waterExperts\"\n                             [(ngModel)]=\"profileData.roles.activityExperts.waterExperts\" disabled>\n                      <label class=\"ml-2\" for=\"waterExpert\">Water Adventure</label>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" placement=\"left\" triggers=\"click:blur\"\n                         ngbTooltip=\"will be available shortly\">\n                      <input type=\"checkbox\" id=\"mountainAdventure\" name=\"mountainAdventureExperts\"\n                             [(ngModel)]=\"profileData.roles.activityExperts.mountainAdventureExperts\" disabled>\n                      <label class=\"ml-2\" for=\"mountainAdventure\">Mountain Adventure</label>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" placement=\"left\" triggers=\"click:blur\"\n                         ngbTooltip=\"will be available shortly\">\n                      <input type=\"checkbox\" id=\"autoAdventure\" name=\"autoAdventureExperts\"\n                             [(ngModel)]=\"profileData.roles.activityExperts.autoAdventureExperts\" disabled>\n                      <label class=\"ml-2\" for=\"autoAdventure\">Auto Adventure</label>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" placement=\"left\" triggers=\"click:blur\"\n                         ngbTooltip=\"will be available shortly\">\n                      <input type=\"checkbox\" id=\"airAdventure\" name=\"airAdventureExperts\"\n                             [(ngModel)]=\"profileData.roles.activityExperts.airAdventureExperts\" disabled>\n                      <label class=\"ml-2\" for=\"airAdventure\">Air Adventure</label>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" placement=\"left\" triggers=\"click:blur\"\n                         ngbTooltip=\"will be available shortly\">\n                      <input type=\"checkbox\" id=\"otherActivity\" name=\"otherExperts\"\n                             [(ngModel)]=\"profileData.roles.activityExperts.otherExperts\" disabled>\n                      <label class=\"ml-2\" for=\"otherActivity\">Others</label>\n                    </div>\n                  </div>\n\n                </div>\n\n                <div class=\"row mt-5\">\n                  <div class=\"form-group text-center col-md-6 text-left\">\n                    <button class=\"btn\" type=\"submit\" (click)=\"navigationTrigger()\">Save & Continue to dashboard\n                    </button>\n                  </div>\n                  <div class=\"form-group text-center col-md-6 text-right\">\n                    <button class=\"btn\" type=\"submit\">Save & Next</button>\n                  </div>\n\n                </div>\n\n              </div>\n            </form>\n          </div>\n\n\n        </ng-template> -->\n     <!--  </ngb-tab> -->\n\n      <!-- <ngb-tab title=\"JOB BOARD\" id=\"job_seeker\">\n        <ng-template ngbTabContent>\n\n          <div class=\"row\">\n            <form #form=\"ngForm\" (ngSubmit)=\"jobSeekerSubmit(form)\" class=\"w-100\">\n\n              <div class=\"col-md-12 mt-5\"> -->\n                <!--<label class=\"form-title\">Add Business Profiles</label>-->\n                <!-- <div class=\"col-md-12\">\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" placement=\"left\" triggers=\"click:blur\"\n                         ngbTooltip=\"will be available shortly\">\n                      <input type=\"checkbox\" id=\"hotelStaffJob\" name=\"hotelStaffJob\"\n                             [(ngModel)]=\"profileData.roles.jobBoard.hotelStaffJob\" disabled>\n                      <label class=\"ml-2\" for=\"hotelStaffJob\">Hotel Staff</label>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" placement=\"left\" triggers=\"click:blur\"\n                         ngbTooltip=\"will be available shortly\">\n                      <input type=\"checkbox\" id=\"wellnessMeditationJob\" name=\"wellnessMeditationJob\"\n                             [(ngModel)]=\"profileData.roles.jobBoard.wellnessMeditationJob\" disabled>\n                      <label class=\"ml-2\" for=\"wellnessMeditationJob\">Wellness and Meditation Experts</label>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" placement=\"left\" triggers=\"click:blur\"\n                         ngbTooltip=\"will be available shortly\">\n                      <input type=\"checkbox\" id=\"sportsGuideJob\" name=\"sportsGuideJob\"\n                             [(ngModel)]=\"profileData.roles.jobBoard.sportsGuideJob\" disabled>\n                      <label class=\"ml-2\" for=\"sportsGuideJob\">Trained Guides for Sports and Adventure\n                        Activities</label>\n                    </div>\n                  </div>\n\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" placement=\"left\" triggers=\"click:blur\"\n                         ngbTooltip=\"will be available shortly\">\n                      <input type=\"checkbox\" id=\"hobbyExpertJob\" name=\"hobbyExpertJob\"\n                             [(ngModel)]=\"profileData.roles.jobBoard.hobbyExpertJob\" disabled>\n                      <label class=\"ml-2\" for=\"hobbyExpertJob\">Hobby Experts</label>\n                    </div>\n                  </div>\n\n                </div>\n\n                <div class=\"row mt-5 justify-content-end\">\n                  <div class=\"form-group \">\n                    <button class=\"btn\" type=\"submit\">Save & Continue to dashboard\n                    </button>\n                  </div>\n                </div>\n\n              </div>\n            </form>\n          </div>\n\n\n        </ng-template>\n      </ngb-tab> -->\n\n    </ngb-tabset>\n\n  </div>\n\n</div>\n\n<!--{{profileData.roles.business|json}}-->\n<!--{{profileData.roles.activityExperts|json}}-->\n<!--{{profileData.roles.jobBoard|json}}-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/profile/profileview/profileview.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/profile/profileview/profileview.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 mt-5 mb-5 pb-5 d-flex\">\n  <div class=\"col-md-7 profile-data\">\n    <div class=\"col-md-12 mt-5 mb-5 d-flex\">\n      <div class=\"col-md-2\">\n        <div class=\"profile-image\">\n          <img [src]=\"profileImage\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <h1>My Profile</h1>\n      </div>\n      <div class=\"col-md-4 edit-icon\">\n        <a [routerLink]=\"'../editProfile'\">\n          <img src=\"../../../assets/icons/edit.png\" alt=\"\">\n        </a>\n      </div>\n    </div>\n\n    <div class=\"col-md-12 d-flex\" *ngIf=\"profileData.name !== ''\">\n      <div class=\"col-md-4 pr-2 text-bold\">Name</div>\n      <div class=\"col-md-8\"> {{profileData.name}} </div>\n    </div>\n    <div class=\"col-md-12 d-flex\" *ngIf=\"profileData.mobile !== ''\">\n      <div class=\"col-md-4 pr-2 text-bold\">Mobile</div>\n      <div class=\"col-md-8\"> {{profileData.mobile}} </div>\n    </div>\n    <div class=\"col-md-12 d-flex\" *ngIf=\"profileData.dob && profileData.dob.day\">\n      <div class=\"col-md-4 pr-2 text-bold\">Dob</div>\n      <div class=\"col-md-8\"> {{profileData.dob.day}}-{{profileData.dob.month}}-{{profileData.dob.year}} </div>\n    </div>\n    <div class=\"col-md-12 d-flex\" *ngIf=\"profileData.email !== ''\">\n      <div class=\"col-md-4 pr-2 text-bold\">Email</div>\n      <div class=\"col-md-8\"> {{profileData.email}} </div>\n    </div>\n\n    <div class=\"row\" *ngIf=\"profileData.address.currentAddress && profileData.address.currentAddress.cFullAddress\">\n      <div class=\"col-md-12 d-flex\"\n           *ngIf=\"profileData.address.currentAddress && profileData.address.currentAddress.cFullAddress\">\n        <div class=\"col-md-4 pr-2 text-bold\">Current Address</div>\n        <div class=\"col-md-8\"> {{profileData.address.currentAddress.cFullAddress}}, Postal Code\n          : {{profileData.address.currentAddress.cPostalCode}}</div>\n      </div>\n    </div>\n\n\n    <div class=\"row\"\n         *ngIf=\"profileData.address.permanentAddress && profileData.address.permanentAddress.pFullAddress\">\n      <div class=\"col-md-12 d-flex\"\n           *ngIf=\"profileData.address.permanentAddress && profileData.address.permanentAddress.pFullAddress\">\n        <div class=\"col-md-4 pr-2 text-bold\">Permanent Address</div>\n        <div class=\"col-md-8\"> {{profileData.address.permanentAddress.pFullAddress}}, Postal Code\n          : {{profileData.address.permanentAddress.pPostalCode}}</div>\n      </div>\n    </div>\n\n    <div class=\"col-md-12\" *ngIf=\"(profileData.roles | json) != ([] | json)\">\n      <hr>\n      <div class=\"col-md-12 text-bold\">Registered for</div>\n      <div class=\"col-md-12 roles-list pl-4\">\n        <span *ngFor=\"let role of profileData.roles.business | keyvalue\">\n          <span *ngIf=\"role.value\">\n            {{role.key | camelToSentanceCase}},\n          </span>\n        </span>\n        <span *ngFor=\"let role of profileData.roles.activityExperts | keyvalue\">\n          <span *ngIf=\"role.value\">\n            {{role.key | camelToSentanceCase}},\n          </span>\n        </span>\n        <span *ngFor=\"let role of profileData.roles.jobBoard | keyvalue\">\n          <span *ngIf=\"role.value\">\n            {{role.key | camelToSentanceCase}},\n          </span>\n        </span>\n\n\n      </div>\n    </div>\n\n\n  </div>\n  <div class=\"col-md-5 profile-bg text-right\">\n    <img src=\"../../../assets/img/my-profile.png\" alt=\"\">\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/home/home.component */ "./src/app/core/home/home.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _core_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/notfound/notfound.component */ "./src/app/core/notfound/notfound.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/forgotpassword/forgotpassword.component */ "./src/app/auth/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _core_profile_profileview_profileview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/profile/profileview/profileview.component */ "./src/app/core/profile/profileview/profileview.component.ts");
/* harmony import */ var _core_profile_profileedit_profileedit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/profile/profileedit/profileedit.component */ "./src/app/core/profile/profileedit/profileedit.component.ts");
/* harmony import */ var _core_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/profile/profile.component */ "./src/app/core/profile/profile.component.ts");
/* harmony import */ var _auth_mobileverify_mobileverify_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/mobileverify/mobileverify.component */ "./src/app/auth/mobileverify/mobileverify.component.ts");
/* harmony import */ var _core_orders_orders_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/orders/orders.component */ "./src/app/core/orders/orders.component.ts");













const appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _core_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    {
        path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'register', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]
    },
    {
        path: 'forgotpassword', component: _auth_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_7__["ForgotpasswordComponent"]
    },
    {
        path: 'mobileVerify', component: _auth_mobileverify_mobileverify_component__WEBPACK_IMPORTED_MODULE_11__["MobileverifyComponent"]
    },
    {
        path: 'profile', component: _core_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"], children: [
            { path: '', redirectTo: 'editProfile', pathMatch: 'full' },
            { path: 'viewProfile', component: _core_profile_profileview_profileview_component__WEBPACK_IMPORTED_MODULE_8__["ProfileviewComponent"] },
            { path: 'editProfile', component: _core_profile_profileedit_profileedit_component__WEBPACK_IMPORTED_MODULE_9__["ProfileeditComponent"] },
            { path: 'orders', component: _core_orders_orders_component__WEBPACK_IMPORTED_MODULE_12__["OrdersComponent"] }
        ]
    },
    {
        path: 'roles', loadChildren: () => __webpack_require__.e(/*! import() | roles-role-module */ "roles-role-module").then(__webpack_require__.bind(null, /*! ./roles/role.module */ "./src/app/roles/role.module.ts")).then(module => module.RoleModule)
    },
    {
        path: 'd', loadChildren: () => __webpack_require__.e(/*! import() | demand-demand-module */ "demand-demand-module").then(__webpack_require__.bind(null, /*! ./demand/demand.module */ "./src/app/demand/demand.module.ts")).then(module => module.DemandModule)
    },
    { path: '**', component: _core_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_5__["NotfoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-component{\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1;\n    background: white;\n    border-radius: 0px !important;\n}\n.shadow-boxed{\n    /*background: #fff;*/\n    /*border-radius: 20px;*/\n    box-shadow: 0 3px 30px 0 rgba(0,0,0,.1);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2Qix1Q0FBdUM7QUFDM0MiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItY29tcG9uZW50e1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG59XG4uc2hhZG93LWJveGVke1xuICAgIC8qYmFja2dyb3VuZDogI2ZmZjsqL1xuICAgIC8qYm9yZGVyLXJhZGl1czogMjBweDsqL1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDMwcHggMCByZ2JhKDAsMCwwLC4xKTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Wandertribe';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/app.reducer */ "./src/app/store/app.reducer.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/auth.interceptor */ "./src/app/shared/auth.interceptor.ts");
/* harmony import */ var _shared_response_intercept__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/response.intercept */ "./src/app/shared/response.intercept.ts");
/* harmony import */ var _core_loader_loader_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/loader/loader.service */ "./src/app/core/loader/loader.service.ts");
/* harmony import */ var _shared_loader_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/loader.interceptor */ "./src/app/shared/loader.interceptor.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _auth_store_auth_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/store/auth.effects */ "./src/app/auth/store/auth.effects.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _core_loader_loader_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/loader/loader.component */ "./src/app/core/loader/loader.component.ts");
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_21__);






















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _core_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
            _core_loader_loader_component__WEBPACK_IMPORTED_MODULE_18__["LoaderComponent"],
            _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"]
        ],
        imports: [
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_16__["AuthModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_8__["reducers"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__["EffectsModule"].forRoot([_auth_store_auth_effects__WEBPACK_IMPORTED_MODULE_15__["AuthEffects"]]),
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_21__["GooglePlaceModule"]
        ],
        providers: [
            _core_loader_loader_service__WEBPACK_IMPORTED_MODULE_12__["LoaderService"],
            _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _shared_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["AuthInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _shared_response_intercept__WEBPACK_IMPORTED_MODULE_11__["ResponseIntercept"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _shared_loader_interceptor__WEBPACK_IMPORTED_MODULE_13__["LoaderInterceptorService"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");



class AuthGuardService {
    constructor(router, store) {
        this.router = router;
        this.store = store;
    }
    canActivate(route, state) {
        return this.isAuthorized();
    }
    isAuthorized() {
        return this.store.select('authState').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((authState) => {
            return authState.authenticated;
        }));
    }
}
AuthGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }
];


/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "./src/app/auth/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _mobileverify_mobileverify_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mobileverify/mobileverify.component */ "./src/app/auth/mobileverify/mobileverify.component.ts");










let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
            _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_8__["ForgotpasswordComponent"],
            _mobileverify_mobileverify_component__WEBPACK_IMPORTED_MODULE_9__["MobileverifyComponent"]
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        providers: [
            _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        ]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let AuthService = class AuthService {
    constructor() {
        this.forgotPassMobileCheck = false;
        this.signupMobileCheckToken = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loginMobilePageToken = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loginMobileCheckToken = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loginOtpCheckToken = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
};
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/auth/forgotpassword/forgotpassword.component.css":
/*!******************************************************************!*\
  !*** ./src/app/auth/forgotpassword/forgotpassword.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\n    text-decoration: none;\n    color: inherit;\n}\n\n.login-image{\n    display : flex;\n    align-items : center;\n    justify-content: center;\n}\n\n.login-image img{\n    width: 80%;\n    border-radius: 10px;\n}\n\ninput .ng-touched.ng-invalid {\n    border: 2px red;\n}\n\n.social-login{\n    justify-content: space-evenly;\n}\n\n.social-login img{\n    width: 40px;\n    height: 40px;\n}\n\n.btn-uspl{\n    background: #2d0829;\n    color: #FFFFFF;\n}\n\n.shadow-boxed{\n    background: #fff;\n    border-radius: 20px;\n    box-shadow: 0 3px 30px 0 rgba(0,0,0,.1);\n}\n\n.Enter-otp-container{\n    margin-top: 8%;\n    margin-bottom: 5%;\n    height: 350px;\n    width: 585px;\n    max-width: 100%;\n    background-color:\t#FFFFFF;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    border-radius: 5px;\n    text-align: center;\n\n}\n\n.heading-1 h1{\n    font-size: 40px;\n    color:\t#585858;\n    font-family: Century Gothic;\n    padding:35px;\n    margin-left:0px;\n\n    text-align: center;\n    padding-bottom: 14px;\n    font-weight: bold;\n}\n\n.heading-2 {\n    text-align: center;\n    font-size:15px;\n    font-family: Century Gothic;\n    color: #909090;\n}\n\n.heading-3{\n    text-align: center;\n    font-size: 15px;\n    font-family: Century Gothic;\n    color: #909090;\n}\n\n.multiple-input{\n    padding: 20px;\n    display: inline-block;\n\n}\n\n.multiple-input .inputs{\n    width: 50px;\n    padding: 0px !important;\n    height: 50px;\n    margin-left: 20px;\n    background-color: #FFFFFF;\n    border:1px solid #D0D0D0;\n    outline: none;\n    text-align: center;\n    font-size: 24px;\n    font-weight: bold;\n    font-family: monospace;\n    border-radius: 7px;\n\n\n}\n\n.button-get-otp{\n    width: 100px !important;\n    height: 40px;\n    background-color:#6699FF;\n    border:none;\n    outline: none;\n    display: inline-block;\n\n\n\n\n}\n\n.button-get-otp:hover{\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)!important;\n    background-color: #6699FF;\n\n\n}\n\n.button-get-otp:focus{\n\n    border: none;\n    outline: none;\n    background-color: #6699FF;\n\n\n}\n\n@media screen and(max-width: 600px)  {\n    .Enter-otp-container{\n        max-width: 100%;\n    }\n    .multiple-input {\n        margin-left:0px;\n    }\n    .multiple-input .inputs{\n        margin: auto;\n    }\n\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9mb3Jnb3RwYXNzd29yZC9mb3Jnb3RwYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsdUNBQXVDO0FBQzNDOztBQUlBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsNEVBQTRFO0lBQzVFLGtCQUFrQjtJQUNsQixrQkFBa0I7O0FBRXRCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGVBQWU7O0lBRWYsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLDJCQUEyQjtJQUMzQixjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsY0FBYztBQUNsQjs7QUFDQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7O0FBRXpCOztBQUNBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixrQkFBa0I7OztBQUd0Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxhQUFhO0lBQ2IscUJBQXFCOzs7OztBQUt6Qjs7QUFDQTtJQUNJLHNGQUFzRjtJQUN0Rix5QkFBeUI7OztBQUc3Qjs7QUFDQTs7SUFFSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5Qjs7O0FBRzdCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCOzs7QUFHSiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvZm9yZ290cGFzc3dvcmQvZm9yZ290cGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xufVxuXG4ubG9naW4taW1hZ2V7XG4gICAgZGlzcGxheSA6IGZsZXg7XG4gICAgYWxpZ24taXRlbXMgOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5sb2dpbi1pbWFnZSBpbWd7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5pbnB1dCAubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcbiAgICBib3JkZXI6IDJweCByZWQ7XG59XG5cbi5zb2NpYWwtbG9naW57XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5zb2NpYWwtbG9naW4gaW1ne1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuLmJ0bi11c3Bse1xuICAgIGJhY2tncm91bmQ6ICMyZDA4Mjk7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5zaGFkb3ctYm94ZWR7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDMwcHggMCByZ2JhKDAsMCwwLC4xKTtcbn1cblxuXG5cbi5FbnRlci1vdHAtY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDglO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAgd2lkdGg6IDU4NXB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOlx0I0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cbi5oZWFkaW5nLTEgaDF7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGNvbG9yOlx0IzU4NTg1ODtcbiAgICBmb250LWZhbWlseTogQ2VudHVyeSBHb3RoaWM7XG4gICAgcGFkZGluZzozNXB4O1xuICAgIG1hcmdpbi1sZWZ0OjBweDtcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5oZWFkaW5nLTIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6MTVweDtcbiAgICBmb250LWZhbWlseTogQ2VudHVyeSBHb3RoaWM7XG4gICAgY29sb3I6ICM5MDkwOTA7XG59XG4uaGVhZGluZy0ze1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IENlbnR1cnkgR290aGljO1xuICAgIGNvbG9yOiAjOTA5MDkwO1xufVxuLm11bHRpcGxlLWlucHV0e1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG59XG4ubXVsdGlwbGUtaW5wdXQgLmlucHV0c3tcbiAgICB3aWR0aDogNTBweDtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNEMEQwRDA7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuXG5cbn1cblxuLmJ1dHRvbi1nZXQtb3Rwe1xuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM2Njk5RkY7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cblxuXG5cbn1cbi5idXR0b24tZ2V0LW90cDpob3ZlcntcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY5OUZGO1xuXG5cbn1cbi5idXR0b24tZ2V0LW90cDpmb2N1c3tcblxuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2Njk5RkY7XG5cblxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDYwMHB4KSAge1xuICAgIC5FbnRlci1vdHAtY29udGFpbmVye1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5tdWx0aXBsZS1pbnB1dCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OjBweDtcbiAgICB9XG4gICAgLm11bHRpcGxlLWlucHV0IC5pbnB1dHN7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG5cblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/auth/forgotpassword/forgotpassword.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/auth/forgotpassword/forgotpassword.component.ts ***!
  \*****************************************************************/
/*! exports provided: ForgotpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordComponent", function() { return ForgotpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/auth.actions */ "./src/app/auth/store/auth.actions.ts");





let ForgotpasswordComponent = class ForgotpasswordComponent {
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
        this.mobileCheckToken = false;
        this.otpCheckToken = false;
        this.isMobileVerified = false;
        this.isOtpVerified = false;
    }
    ngOnInit() {
        this.mobileCheck = this.authService.loginMobileCheckToken.subscribe((value) => {
            if (value === true) {
                this.isMobileVerified = true;
            }
            else {
                this.mobileCheckToken = true;
            }
        });
        this.otpCheck = this.authService.loginOtpCheckToken.subscribe((value) => {
            if (value === true) {
                this.isOtpVerified = true;
            }
            else {
                this.otpCheckToken = true;
            }
        });
    }
    verifymobile(form) {
        this.mobile = form.value.mobile;
        this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_4__["SendOtp"]({ type: 'otp', mobile: this.mobile }));
    }
    verifyotp(form) {
        const otp = (+form.value.otp1) + '' + (+form.value.otp2) + '' + (+form.value.otp3) + '' + (+form.value.otp4);
        this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_4__["VerifyOtp"]({ mobile: this.mobile, otp: +otp }));
    }
    changepassword(form) {
        this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_4__["SetPassword"]({ mobile: this.mobile, password: form.value.password }));
    }
    keytab(event) {
        const element = event.srcElement.nextElementSibling; // get the sibling element
        if (element == null) {
            return;
        }
        else {
            element.focus();
        }
    }
    ngOnDestroy() {
        this.otpCheck.unsubscribe();
        this.mobileCheck.unsubscribe();
    }
};
ForgotpasswordComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
ForgotpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgotpassword',
        template: __webpack_require__(/*! raw-loader!./forgotpassword.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/forgotpassword/forgotpassword.component.html"),
        styles: [__webpack_require__(/*! ./forgotpassword.component.css */ "./src/app/auth/forgotpassword/forgotpassword.component.css")]
    })
], ForgotpasswordComponent);



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched {\n  border: 1px red solid;\n}\n\na{\n  text-decoration: none;\n  color: inherit;\n}\n\n.login-image{\n  display : flex;\n  align-items : center;\n  justify-content: center;\n}\n\n.login-image img{\n  width: 80%;\n  border-radius: 10px;\n}\n\ninput .ng-touched.ng-invalid {\n  border: 2px red;\n}\n\n.social-login{\n  justify-content: space-evenly;\n}\n\n.social-login img{\n  width: 40px;\n  height: 40px;\n}\n\n.btn-uspl{\n  background: #2d0829;\n  color: #FFFFFF;\n}\n\n.shadow-boxed{\n  background: #fff;\n  border-radius: 20px;\n  box-shadow: 0 3px 30px 0 rgba(0,0,0,.1);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1Q0FBdUM7QUFDekMiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICBib3JkZXI6IDFweCByZWQgc29saWQ7XG59XG5cbmF7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5sb2dpbi1pbWFnZXtcbiAgZGlzcGxheSA6IGZsZXg7XG4gIGFsaWduLWl0ZW1zIDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxvZ2luLWltYWdlIGltZ3tcbiAgd2lkdGg6IDgwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuaW5wdXQgLm5nLXRvdWNoZWQubmctaW52YWxpZCB7XG4gIGJvcmRlcjogMnB4IHJlZDtcbn1cblxuLnNvY2lhbC1sb2dpbntcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5zb2NpYWwtbG9naW4gaW1ne1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uYnRuLXVzcGx7XG4gIGJhY2tncm91bmQ6ICMyZDA4Mjk7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uc2hhZG93LWJveGVke1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDNweCAzMHB4IDAgcmdiYSgwLDAsMCwuMSk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/auth.actions */ "./src/app/auth/store/auth.actions.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/serverEndpoints */ "./src/app/shared/serverEndpoints.ts");






let LoginComponent = class LoginComponent {
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
        this.mobileCheckToken = false;
        this.fbLoginUrl = _shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__["fbLogin"];
        this.googleLoginUrl = _shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__["googleLogin"];
    }
    ngOnInit() {
        this.mobileCheck = this.authService.loginMobilePageToken.subscribe(value => {
            if (value === false) {
                this.mobileCheckToken = true;
            }
        });
    }
    onSubmit(form) {
        this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["TrySignIn"](form.value));
    }
};
LoginComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/mobileverify/mobileverify.component.css":
/*!**************************************************************!*\
  !*** ./src/app/auth/mobileverify/mobileverify.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched {\n  border: 1px red solid;\n}\n\na{\n  text-decoration: none;\n  color: inherit;\n}\n\n.login-image{\n  display : flex;\n  align-items : center;\n  justify-content: center;\n}\n\n.login-image img{\n  width: 80%;\n  border-radius: 10px;\n}\n\ninput .ng-touched.ng-invalid {\n  border: 2px red;\n}\n\n.social-login{\n  justify-content: space-evenly;\n}\n\n.social-login img{\n  width: 40px;\n  height: 40px;\n}\n\n.btn-uspl{\n  background: #2d0829;\n  color: #FFFFFF;\n}\n\n.shadow-boxed{\n  background: #fff;\n  border-radius: 20px;\n  box-shadow: 0 3px 30px 0 rgba(0,0,0,.1);\n}\n\n.Enter-otp-container{\n  margin-top: 8%;\n  margin-bottom: 5%;\n  height: 350px;\n  width: 585px;\n  max-width: 100%;\n  background-color:\t#FFFFFF;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  border-radius: 5px;\n  text-align: center;\n\n}\n\n.heading-1 h1{\n  font-size: 40px;\n  color:\t#585858;\n  font-family: Century Gothic;\n  padding:35px;\n  margin-left:0px;\n\n  text-align: center;\n  padding-bottom: 14px;\n  font-weight: bold;\n}\n\n.heading-2 {\n  text-align: center;\n  font-size:15px;\n  font-family: Century Gothic;\n  color: #909090;\n}\n\n.heading-3{\n  text-align: center;\n  font-size: 15px;\n  font-family: Century Gothic;\n  color: #909090;\n}\n\n.multiple-input{\n  padding: 20px;\n  display: inline-block;\n\n}\n\n.multiple-input .inputs{\n  width: 50px;\n  padding: 0px !important;\n  height: 50px;\n  margin-left: 20px;\n  background-color: #FFFFFF;\n  border:1px solid #D0D0D0;\n  outline: none;\n  text-align: center;\n  font-size: 24px;\n  font-weight: bold;\n  font-family: monospace;\n  border-radius: 7px;\n\n\n}\n\n.button-get-otp{\n  width: 100px !important;\n  height: 40px;\n  background-color:#6699FF;\n  border:none;\n  outline: none;\n  display: inline-block;\n\n\n\n\n}\n\n.button-get-otp:hover{\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)!important;\n  background-color: #6699FF;\n\n\n}\n\n.button-get-otp:focus{\n\n  border: none;\n  outline: none;\n  background-color: #6699FF;\n\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9tb2JpbGV2ZXJpZnkvbW9iaWxldmVyaWZ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHVDQUF1QztBQUN6Qzs7QUFHQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLDRFQUE0RTtFQUM1RSxrQkFBa0I7RUFDbEIsa0JBQWtCOztBQUVwQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixlQUFlOztFQUVmLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCwyQkFBMkI7RUFDM0IsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IscUJBQXFCOztBQUV2Qjs7QUFDQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0JBQWtCOzs7QUFHcEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsYUFBYTtFQUNiLHFCQUFxQjs7Ozs7QUFLdkI7O0FBQ0E7RUFDRSxzRkFBc0Y7RUFDdEYseUJBQXlCOzs7QUFHM0I7O0FBQ0E7O0VBRUUsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7OztBQUczQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbW9iaWxldmVyaWZ5L21vYmlsZXZlcmlmeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyOiAxcHggcmVkIHNvbGlkO1xufVxuXG5he1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4ubG9naW4taW1hZ2V7XG4gIGRpc3BsYXkgOiBmbGV4O1xuICBhbGlnbi1pdGVtcyA6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5sb2dpbi1pbWFnZSBpbWd7XG4gIHdpZHRoOiA4MCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmlucHV0IC5uZy10b3VjaGVkLm5nLWludmFsaWQge1xuICBib3JkZXI6IDJweCByZWQ7XG59XG5cbi5zb2NpYWwtbG9naW57XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4uc29jaWFsLWxvZ2luIGltZ3tcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmJ0bi11c3Bse1xuICBiYWNrZ3JvdW5kOiAjMmQwODI5O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLnNoYWRvdy1ib3hlZHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogMCAzcHggMzBweCAwIHJnYmEoMCwwLDAsLjEpO1xufVxuXG5cbi5FbnRlci1vdHAtY29udGFpbmVye1xuICBtYXJnaW4tdG9wOiA4JTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIGhlaWdodDogMzUwcHg7XG4gIHdpZHRoOiA1ODVweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOlx0I0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cbi5oZWFkaW5nLTEgaDF7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6XHQjNTg1ODU4O1xuICBmb250LWZhbWlseTogQ2VudHVyeSBHb3RoaWM7XG4gIHBhZGRpbmc6MzVweDtcbiAgbWFyZ2luLWxlZnQ6MHB4O1xuXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmhlYWRpbmctMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOjE1cHg7XG4gIGZvbnQtZmFtaWx5OiBDZW50dXJ5IEdvdGhpYztcbiAgY29sb3I6ICM5MDkwOTA7XG59XG4uaGVhZGluZy0ze1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IENlbnR1cnkgR290aGljO1xuICBjb2xvcjogIzkwOTA5MDtcbn1cbi5tdWx0aXBsZS1pbnB1dHtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG59XG4ubXVsdGlwbGUtaW5wdXQgLmlucHV0c3tcbiAgd2lkdGg6IDUwcHg7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXI6MXB4IHNvbGlkICNEMEQwRDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuXG5cbn1cblxuLmJ1dHRvbi1nZXQtb3Rwe1xuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiM2Njk5RkY7XG4gIGJvcmRlcjpub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cblxuXG5cbn1cbi5idXR0b24tZ2V0LW90cDpob3ZlcntcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KSFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2Njk5RkY7XG5cblxufVxuLmJ1dHRvbi1nZXQtb3RwOmZvY3Vze1xuXG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2OTlGRjtcblxuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/auth/mobileverify/mobileverify.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/auth/mobileverify/mobileverify.component.ts ***!
  \*************************************************************/
/*! exports provided: MobileverifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileverifyComponent", function() { return MobileverifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/auth.actions */ "./src/app/auth/store/auth.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_model_profile_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/model/profile.model */ "./src/app/core/model/profile.model.ts");







let MobileverifyComponent = class MobileverifyComponent {
    constructor(store, authService, route) {
        this.store = store;
        this.authService = authService;
        this.route = route;
        this.mobileCheckToken = false;
        this.otpCheckToken = false;
        this.isMobileVerified = false;
        this.isOtpVerified = false;
        this.profileData = new _core_model_profile_model__WEBPACK_IMPORTED_MODULE_6__["ProfileModel"]();
        this.role = {
            dob: {
                year: null,
                month: null,
                day: null
            },
            address: {
                permanentAddress: {
                    pFullAddress: '',
                    pPostalCode: null
                },
                currentAddress: {
                    cFullAddress: '',
                    cPostalCode: null
                }
            },
            roles: {
                business: {
                    realEstateBusiness: false,
                    transportationBusiness: false,
                    travelCuratorBusiness: false,
                    serviceSupplierBusiness: false,
                    financeBusiness: false,
                    propertiesBusiness: false,
                    travelAgentBusiness: false
                },
                activityExperts: {
                    wellnessExperts: false,
                    waterExperts: false,
                    mountainAdventureExperts: false,
                    autoAdventureExperts: false,
                    airAdventureExperts: false,
                    otherExperts: false
                },
                jobBoard: {
                    hotelStaffJob: false,
                    wellnessMeditationJob: false,
                    sportsGuideJob: false,
                    hobbyExpertJob: false
                }
            }
        };
    }
    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            if (params[`auth_key`]) {
                this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_4__["SetToken"](params[`auth_key`]));
                this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_4__["TryAuthSignIn"]());
            }
            else {
                this.profileData.name = params[`name`];
                this.profileData.email = params[`email`];
                Object.assign(this.profileData, this.role);
                // this.profileData.roles = this.role.roles;
            }
            console.log(this.profileData);
        });
        this.mobileCheck = this.authService.loginMobileCheckToken.subscribe((value) => {
            if (value === true) {
                this.isMobileVerified = true;
            }
            else {
                this.mobileCheckToken = true;
            }
        });
        this.otpCheck = this.authService.loginOtpCheckToken.subscribe((value) => {
            if (value === true) {
                this.signUp();
            }
            else {
                this.otpCheckToken = true;
            }
        });
    }
    verifymobile(form) {
        this.mobile = form.value.mobile;
        this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_4__["SendOtp"]({ type: 'socialMedia', mobile: this.mobile }));
    }
    verifyotp(form) {
        const otp = (+form.value.otp1) + '' + (+form.value.otp2) + '' + (+form.value.otp3) + '' + (+form.value.otp4);
        this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_4__["VerifyOtp"]({ mobile: this.mobile, otp: +otp }));
    }
    signUp() {
        Object.assign(this.profileData, { mobile: this.mobile, password: 'uspl1234@' });
        this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_4__["TrySignUp"](this.profileData));
    }
    keytab(event) {
        const element = event.srcElement.nextElementSibling; // get the sibling element
        if (element == null) {
            return;
        }
        else {
            element.focus();
        }
    }
    ngOnDestroy() {
        this.otpCheck.unsubscribe();
        this.mobileCheck.unsubscribe();
    }
};
MobileverifyComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
MobileverifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mobileverify',
        template: __webpack_require__(/*! raw-loader!./mobileverify.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/mobileverify/mobileverify.component.html"),
        styles: [__webpack_require__(/*! ./mobileverify.component.css */ "./src/app/auth/mobileverify/mobileverify.component.css")]
    })
], MobileverifyComponent);



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched {\n    border: 1px red solid;\n}\n\n.signup-image {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.signup-image img {\n    width: 80%;\n    border-radius: 10px;\n}\n\n.shadow-boxed {\n    background: #fff;\n    border-radius: 20px;\n    box-shadow: 0 3px 30px 0 rgba(0, 0, 0, .1);\n}\n\n.social-signup {\n    justify-content: space-evenly;\n}\n\n.social-signup img {\n    width: 40px;\n    height: 40px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICAgIGJvcmRlcjogMXB4IHJlZCBzb2xpZDtcbn1cblxuLnNpZ251cC1pbWFnZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc2lnbnVwLWltYWdlIGltZyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uc2hhZG93LWJveGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMCAzcHggMzBweCAwIHJnYmEoMCwgMCwgMCwgLjEpO1xufVxuXG4uc29jaWFsLXNpZ251cCB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5zb2NpYWwtc2lnbnVwIGltZyB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/auth.actions */ "./src/app/auth/store/auth.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _core_model_profile_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/model/profile.model */ "./src/app/core/model/profile.model.ts");
/* harmony import */ var _shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/serverEndpoints */ "./src/app/shared/serverEndpoints.ts");







let SignupComponent = class SignupComponent {
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
        this.fbLoginUrl = _shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_6__["fbLogin"];
        this.googleLoginUrl = _shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_6__["googleLogin"];
        this.mobileCheckToken = false;
        this.profileData = new _core_model_profile_model__WEBPACK_IMPORTED_MODULE_5__["ProfileModel"]();
        this.extraData = {
            dob: {
                year: null,
                month: null,
                day: null
            },
            address: {
                permanentAddress: {
                    pFullAddress: '',
                    pPostalCode: null
                },
                currentAddress: {
                    cFullAddress: '',
                    cPostalCode: null
                }
            },
            roles: {
                business: {
                    realEstateBusiness: false,
                    transportationBusiness: false,
                    travelCuratorBusiness: false,
                    serviceSupplierBusiness: false,
                    financeBusiness: false,
                    propertiesBusiness: false,
                    travelAgentBusiness: false
                },
                activityExperts: {
                    wellnessExperts: false,
                    waterExperts: false,
                    mountainAdventureExperts: false,
                    autoAdventureExperts: false,
                    airAdventureExperts: false,
                    otherExperts: false
                },
                jobBoard: {
                    hotelStaffJob: false,
                    wellnessMeditationJob: false,
                    sportsGuideJob: false,
                    hobbyExpertJob: false
                }
            }
        };
    }
    ngOnInit() {
        Object.assign(this.profileData, this.extraData);
        console.log(this.profileData);
        this.mobileCheck = this.authService.signupMobileCheckToken.subscribe(value => {
            if (value === true) {
                this.mobileCheckToken = true;
            }
        });
    }
    onSubmit(form) {
        Object.assign(this.profileData, form.value);
        this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_2__["TrySignUp"](this.profileData));
    }
    ngOnDestroy() {
        this.mobileCheck.unsubscribe();
    }
};
SignupComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/signup/signup.component.html"),
        styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/auth/store/auth.actions.ts":
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.actions.ts ***!
  \********************************************/
/*! exports provided: FETCH_SIGNUP_FIELDS, TRY_SIGNIN, TRY_AUTH_SIGNIN, TRY_SIGNUP, SIGNIN, LOGOUT, SET_TOKEN, TRY_PROFILE_EDIT, SET_PROFILE, SEND_OTP, VERIFY_OTP, SET_PASSWORD, UPLOAD_IMAGES, UploadImages, SetPassword, VerifyOtp, SendOtp, SetProfile, TryProfileEdit, FetchSignupFields, TrySignUp, TrySignIn, TryAuthSignIn, SignIn, LogOut, SetToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SIGNUP_FIELDS", function() { return FETCH_SIGNUP_FIELDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_SIGNIN", function() { return TRY_SIGNIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_AUTH_SIGNIN", function() { return TRY_AUTH_SIGNIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_SIGNUP", function() { return TRY_SIGNUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN", function() { return SIGNIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TOKEN", function() { return SET_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_PROFILE_EDIT", function() { return TRY_PROFILE_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PROFILE", function() { return SET_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_OTP", function() { return SEND_OTP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERIFY_OTP", function() { return VERIFY_OTP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PASSWORD", function() { return SET_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES", function() { return UPLOAD_IMAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadImages", function() { return UploadImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPassword", function() { return SetPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyOtp", function() { return VerifyOtp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendOtp", function() { return SendOtp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetProfile", function() { return SetProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryProfileEdit", function() { return TryProfileEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchSignupFields", function() { return FetchSignupFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrySignUp", function() { return TrySignUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrySignIn", function() { return TrySignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryAuthSignIn", function() { return TryAuthSignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignIn", function() { return SignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogOut", function() { return LogOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetToken", function() { return SetToken; });
/* harmony import */ var _core_model_profile_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/model/profile.model */ "./src/app/core/model/profile.model.ts");

const FETCH_SIGNUP_FIELDS = 'FETCH_SIGNUP_FIELDS';
const TRY_SIGNIN = 'TRY_SIGNIN';
const TRY_AUTH_SIGNIN = 'TRY_AUTH_SIGNIN';
const TRY_SIGNUP = 'TRY_SIGNUP';
const SIGNIN = 'SIGNIN';
const LOGOUT = 'LOGOUT';
const SET_TOKEN = 'SET_TOKEN';
const TRY_PROFILE_EDIT = 'TRY_PROFILE_EDIT';
const SET_PROFILE = 'SET_PROFILE';
const SEND_OTP = 'SEND_OTP';
const VERIFY_OTP = 'VERIFY_OTP';
const SET_PASSWORD = 'SET_PASSWORD';
const UPLOAD_IMAGES = 'UPLOAD_IMAGES';
class UploadImages {
    constructor(payload) {
        this.payload = payload;
        this.type = UPLOAD_IMAGES;
    }
}
UploadImages.ctorParameters = () => [
    { type: undefined }
];
class SetPassword {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_PASSWORD;
    }
}
SetPassword.ctorParameters = () => [
    { type: undefined }
];
class VerifyOtp {
    constructor(payload) {
        this.payload = payload;
        this.type = VERIFY_OTP;
    }
}
VerifyOtp.ctorParameters = () => [
    { type: undefined }
];
class SendOtp {
    constructor(payload) {
        this.payload = payload;
        this.type = SEND_OTP;
    }
}
SendOtp.ctorParameters = () => [
    { type: undefined }
];
class SetProfile {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_PROFILE;
    }
}
SetProfile.ctorParameters = () => [
    { type: _core_model_profile_model__WEBPACK_IMPORTED_MODULE_0__["ProfileModel"] }
];
class TryProfileEdit {
    constructor(payload) {
        this.payload = payload;
        this.type = TRY_PROFILE_EDIT;
    }
}
TryProfileEdit.ctorParameters = () => [
    { type: undefined }
];
class FetchSignupFields {
    constructor(payload) {
        this.payload = payload;
        this.type = FETCH_SIGNUP_FIELDS;
    }
}
FetchSignupFields.ctorParameters = () => [
    { type: undefined }
];
class TrySignUp {
    constructor(payload) {
        this.payload = payload;
        this.type = TRY_SIGNUP;
    }
}
TrySignUp.ctorParameters = () => [
    { type: undefined }
];
class TrySignIn {
    constructor(payload) {
        this.payload = payload;
        this.type = TRY_SIGNIN;
    }
}
TrySignIn.ctorParameters = () => [
    { type: undefined }
];
class TryAuthSignIn {
    constructor() {
        this.type = TRY_AUTH_SIGNIN;
    }
}
class SignIn {
    constructor() {
        this.type = SIGNIN;
    }
}
class LogOut {
    constructor() {
        this.type = LOGOUT;
    }
}
class SetToken {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_TOKEN;
    }
}
SetToken.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/auth/store/auth.effects.ts":
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.effects.ts ***!
  \********************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.actions */ "./src/app/auth/store/auth.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/serverEndpoints */ "./src/app/shared/serverEndpoints.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/toast/toast.service */ "./src/app/shared/toast/toast.service.ts");











let AuthEffects = class AuthEffects {
    constructor(action, store, http, router, authService, toastService) {
        this.action = action;
        this.store = store;
        this.http = http;
        this.router = router;
        this.authService = authService;
        this.toastService = toastService;
        this.uploadImages = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_4__["UPLOAD_IMAGES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((data) => {
            return data.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((data) => {
            return this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_8__["uploadProfileImages"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((response) => {
            if (response.status === 200) {
                this.toastService.showSuccess('Images uploaded successfully!');
                return [
                    {
                        type: _auth_actions__WEBPACK_IMPORTED_MODULE_4__["SET_PROFILE"],
                        payload: response.body
                    }
                ];
            }
            else {
                alert('Unable to upload your photos! Please try again after sometime');
                return [];
            }
        }));
        this.setPassword = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_4__["SET_PASSWORD"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((data) => {
            return data.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((data) => {
            return this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_8__["changePassword"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((response) => {
            if (response.status === 200) {
                this.toastService.showSuccess('Your password is updated, Please login!');
                this.router.navigate(['/login']);
                return [];
            }
        }));
        this.verifyOtp = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_4__["VERIFY_OTP"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((data) => {
            return data.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((data) => {
            return this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_8__["verifyOtp"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((response) => {
            if (response.status === 200) {
                this.toastService.showSuccess('OTP verified successfully!');
                this.authService.loginOtpCheckToken.next(true);
                return [];
            }
            else {
                this.authService.loginOtpCheckToken.next(false);
                return [];
            }
        }));
        this.sendOtp = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_4__["SEND_OTP"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((data) => {
            return data.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((data) => {
            return this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_8__["sendOtp"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((response) => {
            if (response.status === 200) {
                this.toastService.showSuccess('OTP sent successfully!');
                this.authService.loginMobileCheckToken.next(true);
                return [];
            }
            else if (response.status === 203) {
                this.toastService.showSuccess('User already Found!');
                this.authService.loginMobileCheckToken.next(false);
                return [];
            }
            else {
                this.authService.loginMobileCheckToken.next(false);
                return [];
            }
        }));
        // for profile edit
        this.profileEdit = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_4__["TRY_PROFILE_EDIT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((action) => {
            return action.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((data) => {
            return this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_8__["editProfile"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((response) => {
            if (response.status === 200) {
                this.toastService.showSuccess('Your Profile is updated Successfully!');
                return [
                    {
                        type: _auth_actions__WEBPACK_IMPORTED_MODULE_4__["SET_PROFILE"],
                        payload: response.body
                    }
                ];
            }
        }));
        // for signing up
        this.authSignUp = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_4__["TRY_SIGNUP"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((action) => {
            return action.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((data) => {
            return this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_8__["signupUrl"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((response) => {
            if (response.status === 200) {
                this.toastService.showSuccess('Welcome to Unfoldingskies!');
                this.router.navigate(['/profile']);
                return [
                    {
                        type: _auth_actions__WEBPACK_IMPORTED_MODULE_4__["SET_PROFILE"],
                        payload: response.body
                    },
                    {
                        type: _auth_actions__WEBPACK_IMPORTED_MODULE_4__["SIGNIN"]
                    },
                    {
                        type: _auth_actions__WEBPACK_IMPORTED_MODULE_4__["SET_TOKEN"],
                        payload: JSON.stringify(response.body.auth_key)
                    }
                ];
            }
            else if (response.status === 201) {
                this.authService.signupMobileCheckToken.next(true);
            }
        }));
        // for log out
        this.authLogout = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_4__["LOGOUT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() => {
            window.location.href = '/';
        }));
        // for signup using social media where authkey is used to signin
        this.authSignIn = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_4__["TRY_AUTH_SIGNIN"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => {
            return this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_8__["authSignIn"], {}, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((response) => {
            if (response.status === 200) {
                this.router.navigate(['/profile']);
                return [
                    {
                        type: _auth_actions__WEBPACK_IMPORTED_MODULE_4__["SET_PROFILE"],
                        payload: response.body
                    },
                    { type: _auth_actions__WEBPACK_IMPORTED_MODULE_4__["SIGNIN"] },
                    {
                        type: _auth_actions__WEBPACK_IMPORTED_MODULE_4__["SET_TOKEN"],
                        payload: JSON.stringify(response.body.auth_key)
                    },
                ];
            }
        }));
        // for signing in
        this.signIn = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_4__["TRY_SIGNIN"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((action) => {
            return action.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((data) => {
            return this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_8__["loginUrl"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((response) => {
            if (response.status === 200) {
                this.router.navigate(['/home']);
                return [
                    {
                        type: _auth_actions__WEBPACK_IMPORTED_MODULE_4__["SET_PROFILE"],
                        payload: response.body
                    },
                    { type: _auth_actions__WEBPACK_IMPORTED_MODULE_4__["SIGNIN"] },
                    {
                        type: _auth_actions__WEBPACK_IMPORTED_MODULE_4__["SET_TOKEN"],
                        payload: JSON.stringify(response.body.auth_key)
                    },
                ];
            }
            else {
                this.authService.loginMobilePageToken.next(false);
                return [];
            }
        }));
    }
};
AuthEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], AuthEffects.prototype, "uploadImages", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
], AuthEffects.prototype, "setPassword", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
], AuthEffects.prototype, "verifyOtp", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
], AuthEffects.prototype, "sendOtp", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], AuthEffects.prototype, "profileEdit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], AuthEffects.prototype, "authSignUp", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], AuthEffects.prototype, "authLogout", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], AuthEffects.prototype, "authSignIn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], AuthEffects.prototype, "signIn", void 0);
AuthEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthEffects);



/***/ }),

/***/ "./src/app/auth/store/auth.reducer.ts":
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.reducer.ts ***!
  \********************************************/
/*! exports provided: AuthReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthReducer", function() { return AuthReducer; });
/* harmony import */ var _core_model_profile_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/model/profile.model */ "./src/app/core/model/profile.model.ts");

const profile = JSON.parse(localStorage.getItem('user'));
const initialState = {
    token: localStorage.getItem('Authorization') !== null ? localStorage.getItem('Authorization') : null,
    authenticated: localStorage.getItem('Authorization') !== null,
    profile: localStorage.getItem('Authorization') ? Object.assign(new _core_model_profile_model__WEBPACK_IMPORTED_MODULE_0__["ProfileModel"](), profile) : new _core_model_profile_model__WEBPACK_IMPORTED_MODULE_0__["ProfileModel"]()
};
function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_PROFILE': {
            console.log('executing set profile');
            localStorage.setItem('user', JSON.stringify(action.payload));
            const profileObject = action.payload;
            return Object.assign({}, state, { profile: profileObject });
        }
        case 'SIGNIN': {
            console.log('executing sign in action');
            return Object.assign({}, state, { authenticated: true });
        }
        case 'SET_TOKEN':
            console.log('executing set token action');
            localStorage.setItem('Authorization', action.payload);
            return Object.assign({}, state, { token: action.payload });
        case 'LOGOUT': {
            localStorage.removeItem('Authorization');
            localStorage.removeItem('user');
            return Object.assign({}, state, { token: null, authenticated: false });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/core/notfound/notfound.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/core/home/home.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/core/profile/profile.component.ts");
/* harmony import */ var _profile_profileedit_profileedit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profileedit/profileedit.component */ "./src/app/core/profile/profileedit/profileedit.component.ts");
/* harmony import */ var _profile_profileview_profileview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profileview/profileview.component */ "./src/app/core/profile/profileview/profileview.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/core/orders/orders.component.ts");












let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_2__["NotfoundComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
            _profile_profileedit_profileedit_component__WEBPACK_IMPORTED_MODULE_8__["ProfileeditComponent"],
            _profile_profileview_profileview_component__WEBPACK_IMPORTED_MODULE_9__["ProfileviewComponent"],
            _orders_orders_component__WEBPACK_IMPORTED_MODULE_11__["OrdersComponent"]
        ],
        exports: [],
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        ],
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]
        ]
    })
], CoreModule);



/***/ }),

/***/ "./src/app/core/footer/footer.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/footer/footer.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n@import url(\"https://fonts.googleapis.com/css?family=Arvo:700|Open+Sans\");\n/*not using this*/\nhtml {\n  overflow-x: hidden;\n}\nbody {\n  background: #fff;\n  font-size: 14px;\n  font-weight: 400;\n  font-family: 'Open Sans', sans-serif;\n  box-sizing: border-box;\n  -webkit-font-smoothing: subpixel-antialiased;\n  color: #abacae;\n  line-height: 25px;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  overflow-x: hidden;\n}\nh1, h2, h3, h4 {\n  font-size: 38px;\n  color: #222222;\n  font-weight: 700;\n  font-family: 'cambria', serif;\n}\na {\n  transition: all 0.2s linear;\n}\na:hover {\n  text-decoration: none;\n}\na a:focus {\n  outline: none;\n}\np {\n  font-weight: 400;\n  font-family: 'Open Sans', sans-serif;\n  margin: 0px;\n  font-size: 14px;\n}\nul, ol {\n  list-style: outside none none;\n  margin: 0;\n  padding: 0;\n}\nul li, ol li {\n  list-style: none;\n}\na:not([href]):not([tabindex]) {\n  color: #fff;\n}\n.section-header {\n  margin-bottom: 30px;\n}\n.section-header p {\n  text: center;\n  font-weight: 400;\n  line-height: 26px;\n}\n.section-title {\n  font-size: 30px;\n  color: #222222;\n  display: inline-block;\n  font-weight: 700;\n  position: relative;\n}\n.shape {\n  height: 1px;\n  margin: 0 auto 30px;\n  position: relative;\n  width: 60px;\n  background-color: #6D94BA;\n}\n.padding-none {\n  padding: 0px;\n}\n.bg-gray {\n  background: #f9f9f9;\n}\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background: rgba(61, 96, 244, 0.3);\n}\n.btn {\n  font-size: 14px;\n  padding: 10px 30px;\n  cursor: pointer;\n  font-weight: 400;\n  color: #fff;\n  border-radius: 30px;\n  transition: all 0.2s linear;\n  display: inline-block;\n}\n.btn:focus,\n.btn:active {\n  box-shadow: none;\n  outline: none;\n  color: #fff;\n}\n.btn-common {\n  background-color: #6D94BA;\n  position: relative;\n  z-index: 1;\n  text-transform: uppercase;\n}\n.btn-common:hover {\n  color: #6D94BA;\n  background: transparent;\n  border: 1px dotted #6D94BA;\n  box-shadow: 0 6px 22px rgba(0, 0, 0, 0.1);\n  transition: all .2s ease-in-out;\n  -moz-transition: all .2s ease-in-out;\n  -webkit-transition: all .2s ease-in-out;\n}\n.btn-border {\n  color: #6D94BA;\n  background-color: transparent;\n  border: 1px solid #6D94BA;\n  border-radius: 30px;\n  text-transform: uppercase;\n}\n.btn-border:hover {\n  color: #fff;\n  border-color: #6D94BA;\n  background-color: #6D94BA;\n}\n.btn-border:focus {\n  color: #fff;\n  border-color: #6D94BA;\n  background-color: #6D94BA;\n}\n.btn-lg {\n  padding: 14px 33px;\n  text-transform: uppercase;\n  font-size: 16px;\n}\n.btn-rm {\n  padding: 7px 0px;\n  color: #6D94BA;\n  text-transform: capitalize;\n}\n.btn-rm:hover {\n  color: #6D94BA;\n}\nbutton:focus {\n  outline: none !important;\n}\n.icon-close, .icon-check {\n  color: #6D94BA;\n}\n.social-icon a {\n  color: #666;\n  background: #fff;\n  width: 32px;\n  height: 32px;\n  line-height: 34px;\n  display: inline-block;\n  text-align: center;\n  border-radius: 100%;\n  font-size: 16px;\n  margin: 15px 6px 12px 4px;\n  transition: all 0.3s ease-in-out 0s;\n  -moz-transition: all 0.3s ease-in-out 0s;\n  -webkit-transition: all 0.3s ease-in-out 0s;\n  -o-transition: all 0.3s ease-in-out 0s;\n}\n.social-icon a:hover {\n  color: #fff !important;\n}\n.social-icon .facebook:hover {\n  background: #3b5999;\n}\n.social-icon .twitter:hover {\n  background: #4A9CEC;\n}\n.social-icon .instagram:hover {\n  background: #D6274D;\n}\n.social-icon .linkedin:hover {\n  background: #1260A2;\n}\n.social-icon .google:hover {\n  background: #CE332A;\n}\n/* ScrollToTop */\na.back-to-top {\n  display: none;\n  position: fixed;\n  bottom: 18px;\n  right: 15px;\n  text-decoration: none;\n}\na.back-to-top i {\n  display: block;\n  font-size: 22px;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  color: #fff;\n  background: #6D94BA;\n  border-radius: 30px;\n  text-align: center;\n  transition: all 0.2s ease-in-out;\n  -moz-transition: all 0.2s ease-in-out;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);\n}\na.back-to-top:hover, a.back-to-top:focus {\n  text-decoration: none;\n}\n/* Preloader */\n#preloader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #fff;\n  z-index: 9999999;\n}\n.loader {\n  top: 50%;\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  position: relative;\n  margin: 0 auto;\n}\n#loader-1:before, #loader-1:after {\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  width: 100%;\n  height: 100%;\n  border-radius: 100%;\n  border: 7px solid transparent;\n  border-top-color: #6D94BA;\n}\n#loader-1:before {\n  z-index: 100;\n  -webkit-animation: spin 1s infinite;\n          animation: spin 1s infinite;\n}\n#loader-1:after {\n  border: 7px solid #f2f2f2;\n}\n@-webkit-keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.section-padding {\n  padding: 60px 0;\n}\nhr {\n  border-top: 1px dotted #ddd;\n}\n.img-icon{\n    width: 70px;\n    height: 70px;\n    border: 4px solid #6D94BA;\n    border-radius: 50%;\n    display: inline-block;\n}\n.img-icon img{\n    width: 30px;\n    margin-top: 16px;\n}\n/* ==========================================================================\n  8. Features Section Style\n   ========================================================================== */\n#features {\n  background: #fff;\n}\n#features .icon {\n  display: inline-block;\n  width: 60px;\n  height: 60px;\n  border-radius: 4px;\n  text-align: center;\n  position: relative;\n  z-index: 1;\n}\n#features .content-left span {\n  float: right;\n}\n#features .content-left .text {\n  text-align: right;\n}\n#features .content-right span {\n  float: left;\n}\n#features .box-item {\n  box-shadow: 0 0 12px #F4F4F4;\n  padding: 28px;\n  line-height: 22px;\n  margin-top: 30px;\n  border-radius: 3px;\n  background-color: #fff;\n  -mox-transition: all .3s ease-in-out;\n  transition: all .3s ease-in-out;\n  position: relative;\n  top: 0;\n}\n#features .box-item .icon {\n  text-align: center;\n  margin: 12px;\n  transition: all 0.2s linear;\n    margin-top: 5px;\n}\n#features .box-item .icon img{\n    width: 40px;\n    height: 40px;\n    -webkit-filter: invert(40%) sepia(49%) saturate(7480%) hue-rotate(335deg) brightness(114%) contrast(103%);\n            filter: invert(40%) sepia(49%) saturate(7480%) hue-rotate(335deg) brightness(114%) contrast(103%);\n}\n#features .box-item .icon i {\n  color: #6D94BA;\n  font-size: 30px;\n  transition: all 0.2s linear;\n}\n#features .box-item .text h4 {\n  cursor: pointer;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 22px;\n    text-transform: uppercase;\n  transition: all 0.2s linear;\n\n}\n#features .box-item .text p {\n  font-size: 14px;\n  line-height: 26px;\n    margin-top: 35px;\n}\n#features .box-item:hover {\n  box-shadow: 0 10px 22px 10px rgba(27, 38, 49, 0.1);\n}\n#features .box-item:hover h4 {\n  color: #6D94BA;\n}\n#features .show-box {\n  margin-top: 200px;\n}\n#features .show-box img {\n  width: 100%;\n}\n/* Services Item */\n.services-item {\n  padding: 20px;\n  border-radius: 4px;\n  text-align: center;\n  margin: 15px 0;\n  min-height: 240px;\n  box-shadow: 0 0 12px #F4F4F4;\n  transition: all 0.3s ease-in-out 0s;\n  -moz-transition: all 0.3s ease-in-out 0s;\n  -webkit-transition: all 0.3s ease-in-out 0s;\n  -o-transition: all 0.3s ease-in-out 0s;\n}\n.services-item .icon {\n  border: 1px solid #f1f1f1;\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  margin: 0 auto;\n  transition: all 0.3s ease-in-out 0s;\n  -moz-transition: all 0.3s ease-in-out 0s;\n  -webkit-transition: all 0.3s ease-in-out 0s;\n  -o-transition: all 0.3s ease-in-out 0s;\n}\n.services-item .icon i {\n  font-size: 30px;\n  color: #6D94BA;\n  line-height: 70px;\n  transition: all 0.3s ease-in-out 0s;\n  -moz-transition: all 0.3s ease-in-out 0s;\n  -webkit-transition: all 0.3s ease-in-out 0s;\n  -o-transition: all 0.3s ease-in-out 0s;\n}\n.services-item .icon img{\n    width: 35px;\n    margin-top: 16px;\n}\n.services-item .services-content h3 {\n  margin-top: 10px;\n  font-weight: 500;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n}\n.services-item .services-content h3 a {\n  font-size: 20px;\n  color: #585b60;\n  font-weight: 700;\n}\n.services-item .services-content h3 a:hover {\n  color: #6D94BA;\n}\n.services-item:hover {\n  box-shadow: 0 10px 22px 10px rgba(27, 38, 49, 0.1);\n}\n.services-item:hover .icon {\n  background: #6D94BA;\n}\n.services-item:hover .icon img{\n    -webkit-filter: invert(1);\n            filter: invert(1);\n}\n.services-item:hover .icon i {\n  color: #fff;\n}\n#service {\n  position: relative;\n}\n#industries .services-item{\n    min-height: 180px;\n}\n.about-area .about-wrapper {\n  height: 100%;\n  width: 100%;\n  display: table;\n}\n.about-area .about-wrapper > div {\n  vertical-align: middle;\n  display: table-cell;\n}\n.about-area img {\n  border-radius: 4px;\n}\n.about-area .content {\n  margin-top: 15px;\n}\n.about-area .content p {\n  margin-bottom: 30px;\n}\n#cta {\n  padding: 30px 0;\n}\n.navbar-brand {\n  position: relative;\n  padding: 0px;\n}\n.top-nav-collapse {\n  background: #fff;\n  z-index: 999999;\n  padding: 5px !important;\n  top: 0px !important;\n  box-shadow: 0px 3px 6px 3px rgba(0, 0, 0, 0.06);\n  background: #fff !important;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n}\n.top-nav-collapse .navbar-brand {\n  top: 0px;\n}\n.top-nav-collapse .navbar-brand img {\n  width: 23%;\n}\n.top-nav-collapse .navbar-nav .nav-link {\n  color: #585b60 !important;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important;\n}\n.top-nav-collapse .navbar-nav .nav-link:hover {\n  cursor: pointer;\n  color: #6D94BA !important;\n  border-color: #6D94BA !important;\n}\n.top-nav-collapse .navbar-nav .nav-link:hover {\n  color: #6D94BA !important;\n}\n.navbar-expand-md .navbar-toggler {\n  background: transparent;\n  border: 1px solid #6D94BA;\n  color: #6D94BA;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.navbar-brand img {\n  width: 23%;\n}\n.top-nav-collapse .navbar-nav li.active a.nav-link {\n  color: #6D94BA !important;\n  border-color: #6D94BA;\n}\n.indigo {\n  background: transparent;\n}\n.menu-bg {\n  background: transparent;\n}\n.navbar-expand-md .navbar-nav .nav-link i {\n  font-size: 14px;\n  margin-left: 5px;\n  vertical-align: middle;\n  transition: all 0.3s ease-in-out;\n}\n.navbar-expand-md .navbar-nav .nav-item {\n  padding-left: 25px;\n}\n.navbar-expand-md .navbar-nav .nav-link {\n  color: #333;\n  font-weight: 400;\n  padding: 7px 0;\n  cursor: pointer;\n  position: relative;\n  background: transparent;\n  transition: all 0.3s ease-in-out;\n}\n.navbar-expand-md .navbar-nav .nav-link:before {\n  background-color: #6D94BA;\n  content: '';\n  display: block;\n  height: 2px;\n  position: absolute;\n  margin: 0 auto;\n  width: 0;\n  top: 35px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  transition: width 1s;\n  -ms-transition: width 1s;\n  -webkit-transition: width 1s;\n}\n.navbar-expand-md .navbar-nav li a:hover,\n.navbar-expand-md .navbar-nav li .active > a,\n.navbar-expand-md .navbar-nav li a:focus {\n  color: #fff;\n  outline: none;\n}\n.navbar-expand-md .navbar-nav .active > .nav-link,\n.navbar-expand-md .navbar-nav .nav-link.active,\n.navbar-expand-md .navbar-nav .nav-link.open,\n.navbar-expand-md .navbar-nav .open > .nav-link {\n  color: #6D94BA !important;\n  width: 100%;\n}\n.navbar-expand-md .navbar-nav .nav-link:hover,\n.navbar-expand-md .navbar-nav .nav-link:hover::before,\n.navbar-expand-md .navbar-nav .nav-link:focus {\n  color: #6D94BA;\n  width: 100%;\n  transition: width 1s;\n  -webkit-transition: width 1s;\n  -ms-transition: width 1s;\n}\n.navbar {\n  padding: 10px 0;\n  background: white;\n}\n.navbar li.active a.nav-link {\n  /*color: #preset;*/\n}\n.dropdown-toggle::after {\n  display: none;\n}\n.dropdown-menu {\n  margin: 0;\n  padding: 0;\n  display: none;\n  position: absolute;\n  z-index: 99;\n  min-width: 210px;\n  background-color: #fff;\n  white-space: nowrap;\n  border-radius: 4px;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  animation: fadeIn 0.4s;\n  -webkit-animation: fadeIn 0.4s;\n  -moz-animation: fadeIn 0.4s;\n  -o-animation: fadeIn 0.4s;\n  -ms-animation: fadeIn 0.4s;\n}\n.dropdown-menu:before {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  bottom: 100%;\n  left: 20%;\n  margin-left: -5px;\n  border-right: 10px solid transparent;\n  border-left: 10px solid transparent;\n  border-bottom: 10px solid #fff;\n}\n.dropdown:hover .dropdown-menu {\n  display: block;\n  position: absolute;\n  text-align: left;\n  top: 100%;\n  border: none;\n  animation: fadeIn 0.4s;\n  -webkit-animation: fadeIn 0.4s;\n  -moz-animation: fadeIn 0.4s;\n  -o-animation: fadeIn 0.4s;\n  -ms-animation: fadeIn 0.4s;\n}\n.dropdown .dropdown-menu .dropdown-item {\n  width: 100%;\n  padding: 12px 20px;\n  font-size: 14px;\n  color: #333;\n  border-bottom: 1px solid #f1f1f1;\n  text-decoration: none;\n  display: inline-block;\n  float: left;\n  clear: both;\n  position: relative;\n  outline: 0;\n  transition: all 0.3s ease-in-out;\n  -webkit-transition: all 0.3s ease-in-out;\n  -moz-transition: all 0.3s ease-in-out;\n  -o-transition: all 0.3s ease-in-out;\n  -ms-transition: all 0.3s ease-in-out;\n}\n.dropdown .dropdown-menu .dropdown-item:last-child {\n  border-bottom: none;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.dropdown .dropdown-menu .dropdown-item:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.dropdown .dropdown-item:focus,\n.dropdown .dropdown-item:hover,\n.dropdown .dropdown-item.active {\n  color: #6D94BA;\n  background: #f7f7f7;\n}\n.dropdown-item.active, .dropdown-item:active {\n  background: transparent;\n}\n.fadeInUpMenu {\n  -webkit-animation-name: fadeInUpMenu;\n  animation-name: fadeInUpMenu;\n}\n/* ==========================================================================\n3. Hero Area\n========================================================================== */\n/*#hero-area {*/\n/*background-image: url(../img/cover.jpg);*/\n/*background-position: center center;*/\n/*background-repeat: no-repeat;*/\n/*background-size: cover;*/\n/*!*min-height: 650px;*!*/\n/*position: relative;*/\n/*overflow: hidden;*/\n/*padding: 180px 0 80px;*/\n/*}*/\n/*#hero-area .contents .head-title {*/\n/*color: #fff;*/\n/*font-size: 35px;*/\n/*font-weight: 700;*/\n/*line-height: 55px;*/\n/*margin-bottom: 10px;*/\n/*}*/\n/*#hero-area .contents .header-button {*/\n/*margin-top: 20px;*/\n/*color: #222222;*/\n/*}*/\n/*#hero-area .contents .header-button .btn {*/\n/*margin-right: 10px;*/\n/*}*/\n/*.sloder-img {*/\n/*background: #34363a;*/\n/*}*/\n/* Team Item */\n.team-item:hover {\n  box-shadow: 0 10px 22px 10px rgba(27, 38, 49, 0.1);\n}\n.team-item {\n  margin: 15px 0;\n  border-radius: 0px;\n  box-shadow: 0px 2px 18px 0px rgba(198, 198, 198, 0.3);\n  transition: all 0.3s ease-in-out 0s;\n  -moz-transition: all 0.3s ease-in-out 0s;\n  -webkit-transition: all 0.3s ease-in-out 0s;\n  -o-transition: all 0.3s ease-in-out 0s;\n  background: #fff;\n}\n.team-item .team-img {\n  float: left;\n  width: 200px;\n  margin-right: 30px;\n}\n.team-item .contetn {\n  padding: 15px 50px;\n  height: 200px;\n}\n.team-item .social-icons {\n  padding-top: 11px;\n  transition: all 0.3s ease-in-out 0s;\n  -moz-transition: all 0.3s ease-in-out 0s;\n  -webkit-transition: all 0.3s ease-in-out 0s;\n  -o-transition: all 0.3s ease-in-out 0s;\n}\n.team-item .social-icons li {\n  display: inline-block;\n  margin-right: 10px;\n}\n.team-item .social-icons li a {\n  letter-spacing: 0px;\n  outline: 0 !important;\n}\n.team-item .social-icons li a i {\n  font-size: 18px;\n  display: block;\n  transition: all 0.3s ease-in-out 0s;\n  -moz-transition: all 0.3s ease-in-out 0s;\n  -webkit-transition: all 0.3s ease-in-out 0s;\n  -o-transition: all 0.3s ease-in-out 0s;\n}\n.team-item .social-icons li .lni-facebook-filled {\n  color: #3b5998;\n}\n.team-item .social-icons li .lni-twitter-filled {\n  color: #00aced;\n}\n.team-item .social-icons li .lni-instagram-filled {\n  color: #fb3958;\n}\n.team-item .info-text {\n  margin-bottom: 10px;\n}\n.team-item .info-text h3 {\n  font-size: 16px;\n  text-transform: uppercase;\n  font-weight: 500;\n  margin-bottom: 5px;\n}\n.team-item .info-text h3 a {\n  color: #333;\n}\n.team-item .info-text h3 a:hover {\n  color: #6D94BA;\n}\n.team-item .info-text p {\n  margin: 0;\n  color: #888;\n}\n.team-item:hover .team-overlay {\n  opacity: 1;\n}\n/* ==========================================================================\n   Pricing Table Style\n   ========================================================================== */\n#pricing {\n  text-align: center;\n}\n#pricing .title {\n  padding-top: 20px;\n}\n#pricing .title h3 {\n  text-transform: uppercase;\n  color: #333;\n  font-size: 18px;\n}\n#pricing .title .month-plan {\n  font-size: 16px;\n  font-weight: 500;\n  color: #333;\n}\n#pricing .table {\n  margin-top: 15px;\n  padding: 30px;\n  border-radius: 4px;\n  border: none !important;\n  box-shadow: 0px 2px 18px 0px rgba(198, 198, 198, 0.3);\n  transition: all .3s linear;\n}\n#pricing .table .icon-box {\n  position: relative;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  display: inline-block;\n  vertical-align: middle;\n  background-color: #EBEDEF;\n  margin-bottom: 20px;\n  transition: all .3s linear;\n}\n#pricing .table .icon-box i {\n  color: #6D94BA;\n  line-height: 80px;\n  font-size: 30px;\n  transition: all .3s linear;\n}\n#pricing .table .pricing-header {\n  position: relative;\n  text-align: center;\n}\n#pricing .table .pricing-header .price-value {\n  font-size: 24px;\n  color: #6D94BA;\n  position: relative;\n  text-align: center;\n  font-weight: 700;\n}\n#pricing .table .pricing-header .price-value sup {\n  font-size: 16px;\n  font-weight: 500;\n  top: -18px;\n}\n#pricing .table .pricing-header .price-value span {\n  font-size: 15px;\n  color: #abacae;\n  font-weight: 400;\n}\n#pricing .table .description {\n  text-align: center;\n  padding: 0px 50px;\n  margin-bottom: 20px;\n}\n#pricing .table .description li {\n  font-size: 14px;\n  font-weight: 400;\n  color: #abacae;\n  padding: 4px 0;\n}\n#pricing .table .description li:last-child {\n  border-bottom: none;\n}\n#pricing .table:hover {\n  background: #ffffff;\n  box-shadow: 0 10px 22px 10px rgba(27, 38, 49, 0.1);\n}\n#pricing .table:hover .icon-box {\n  background: #6D94BA;\n}\n#pricing .table:hover .icon-box i {\n  color: #fff;\n}\n#pricing #active-tb {\n  background: #ffffff;\n  box-shadow: 0 10px 22px 10px rgba(27, 38, 49, 0.1);\n}\n#pricing #active-tb .icon-box {\n  background: #6D94BA;\n}\n#pricing #active-tb .icon-box i {\n  color: #fff;\n}\n#pricing .active {\n  z-index: 99999;\n}\n.testimonial {\n  position: relative;\n  background-color: #6D94BA;\n}\n.testimonial-item {\n  background: #fff;\n  border-radius: 4px;\n  text-align: center;\n  padding: 30px 20px;\n}\n.testimonial-item .img-thumb {\n  position: relative;\n  margin: 15px 15px 15px 0;\n}\n.testimonial-item .img-thumb img {\n  border-radius: 50%;\n  display: inline-block;\n  width: inherit;\n  padding: 7px;\n}\n.testimonial-item .content {\n  overflow: hidden;\n}\n.testimonial-item .content .description {\n  width: 100%;\n  color: #333;\n}\n.testimonial-item .content .star-icon i {\n  color: #6D94BA;\n}\n.testimonial-item .info h2 {\n  font-size: 16px;\n  font-weight: 700;\n  text-transform: uppercase;\n  line-height: 30px;\n  margin: 0;\n}\n.testimonial-item .info h2 a {\n  color: #333;\n}\n.testimonial-item .info h3 {\n  margin: 0;\n  clear: both;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 26px;\n  margin-bottom: 10px;\n}\n.testimonial-item .info h3 a {\n  color: #333;\n}\n.testimonial-item .info .indicator {\n  font-size: 26px;\n  font-weight: 700;\n  color: #6D94BA;\n}\n.testimonial-item .icon-social {\n  margin-top: 30px;\n}\n.testimonial-item .icon-social a {\n  color: #666;\n  background: #fff;\n  width: 32px;\n  height: 32px;\n  line-height: 34px;\n  display: inline-block;\n  text-align: center;\n  border-radius: 100%;\n  font-size: 15px;\n  margin: 15px 6px 12px 4px;\n  transition: all 0.3s ease-in-out 0s;\n  -moz-transition: all 0.3s ease-in-out 0s;\n  -webkit-transition: all 0.3s ease-in-out 0s;\n  -o-transition: all 0.3s ease-in-out 0s;\n}\n.testimonial-item .icon-social a:hover {\n  color: #fff;\n}\n.testimonial-item .icon-social .facebook:hover {\n  background: #3b5999;\n}\n.testimonial-item .icon-social .twitter:hover {\n  background: #4A9CEC;\n}\n.testimonial-item .icon-social .instagram:hover {\n  background: #D6274D;\n}\n.testimonial-item .icon-social .linkedin:hover {\n  background: #1260A2;\n}\n.testimonial-item .icon-social .google:hover {\n  background: #CE332A;\n}\n.owl-pagination {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: -40px;\n}\n.owl-carousel .owl-dots {\n  text-align: center;\n  margin-top: 20px;\n}\n.owl-carousel button.owl-dot {\n  display: inline-block;\n  zoom: 1;\n  display: inline;\n  text-align: center;\n}\n.owl-carousel button.owl-dot span {\n  display: block;\n  width: 12px;\n  height: 12px;\n  margin: 2px 4px;\n  filter: alpha(opacity=50);\n  opacity: 1;\n  border-radius: 30px;\n  background: #fff;\n  border: 2px solid #fff;\n  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);\n  transition: all 0.4s ease-in-out;\n  -moz-transition: all 0.4s ease-in-out;\n  -webkit-transition: all 0.4s ease-in-out;\n  -o-transition: all 0.4s ease-in-out;\n}\n.owl-carousel button.owl-dot.active span, .owl-carousel button.owl-dot.clickable, .owl-carousel button.owl-dot:hover span {\n  background: #6D94BA;\n}\n.slick-slider {\n  padding: 80px 0;\n}\n.slider-center img {\n  opacity: 0.7;\n  transition: all 0.4s ease-in-out;\n  -moz-transition: all 0.4s ease-in-out;\n  -webkit-transition: all 0.4s ease-in-out;\n  -o-transition: all 0.4s ease-in-out;\n  padding: 63px 63px;\n  position: relative;\n  text-align: center;\n}\n.slider-center .slick-center img {\n  -moz-transform: scale(1.9);\n  -ms-transform: scale(1.9);\n  -o-transform: scale(1.9);\n  -webkit-transform: scale(1.9);\n  opacity: 1;\n  transform: scale(1.9);\n}\n.form-control {\n  width: 100%;\n  margin-bottom: 20px;\n  font-size: 14px;\n  border-radius: 4px;\n  transition: all 0.3s;\n  padding: 10px;\n  border: 1px solid #f1f1f1;\n}\n.form-control:focus {\n  border-color: #6D94BA;\n  box-shadow: none;\n  outline: none;\n}\ntextarea {\n  border-radius: 4px !important;\n}\n.form-control:focus {\n  box-shadow: none;\n  outline: none;\n}\n.btn.disabled, .btn:disabled {\n  opacity: 1;\n}\n.contact-form-area h2 {\n  font-size: 18px;\n  text-transform: uppercase;\n}\n.contact-right-area {\n  margin-left: 50px;\n}\n.contact-right-area .contact-title {\n  margin-bottom: 20px;\n}\n.contact-right-area .contact-title h1 {\n  font-size: 22px;\n}\n.contact-right {\n  padding: 4px;\n}\n.contact-right .single-contact {\n  margin: 30px 0px;\n  padding: 3px 55px;\n  position: relative;\n  color: #abacae;\n}\n.contact-right .single-contact p {\n  margin-bottom: 0px;\n}\n.contact-right .single-contact p a {\n  color: #abacae;\n}\n.contact-right .contact-icon {\n  background: #6D94BA;\n  color: #fff;\n  border-radius: 4px;\n  font-size: 20px;\n  height: 40px;\n  left: 0;\n  padding-top: 8px;\n  position: absolute;\n  text-align: center;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 40px;\n}\n.h3 {\n  float: right;\n  font-size: 16px;\n}\n/*cta\n*/\n/* Footer Area Start */\n.footer-logo img{\n  width: 202px;\n}\n.footer-area {\n  position: relative;\n  padding: 150px 0px 0px;\n  background: #fff;\n}\n.footer-area .footer-titel {\n  font-size: 18px;\n  color: #333333;\n  font-weight: 500;\n  padding-bottom: 20px;\n  letter-spacing: 0.5px;\n}\n.footer-area .footer-titel span {\n  color: #ccc;\n  font-weight: 400;\n}\n.footer-area .textwidget p {\n  color: #333;\n}\n.footer-area .footer-link li {\n  margin-bottom: 10px;\n}\n.footer-area .footer-link li a {\n  color: #333;\n  font-size: 14px;\n  font-weight: 400;\n  position: relative;\n}\n.footer-area .footer-link li a:hover {\n  color: #6D94BA;\n}\n.footer-area .address li {\n  margin-bottom: 20px;\n}\n.footer-area .address li a {\n  color: #666666;\n  font-size: 14px;\n  line-height: 30px;\n  font-weight: 400;\n}\n.footer-area .address li a i {\n  font-size: 22px;\n  width: 32px;\n  vertical-align: middle;\n  height: 50px;\n  text-align: center;\n  display: inline-block;\n  float: left;\n  margin-right: 5px;\n  line-height: 32px;\n}\n.footer-area #subscribe-form {\n  margin-top: 10px;\n}\n.footer-area #subscribe-form .form-group {\n  position: relative;\n}\n.footer-area #subscribe-form .form-group .btn-common {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 7px 15px;\n  height: 52px;\n  border-radius: 0;\n  background: transparent;\n  color: #6D94BA;\n}\n#copyright .copyright-content {\n  border-top: 1px solid #d5d4e9;\n  padding: 15px 0;\n  margin: 45px 0 0px;\n}\n#copyright p {\n  line-height: 42px;\n  color: #333;\n  text-align: center;\n  margin: 0;\n}\n#copyright p a {\n  color: #6D94BA;\n}\n.social-icon a {\n  color: #272727;\n  background: #fff;\n  width: 32px;\n  height: 32px;\n  line-height: 34px;\n  display: inline-block;\n  text-align: center;\n  border-radius: 4px;\n  font-size: 16px;\n  margin: 15px 6px 12px 4px;\n  transition: all 0.3s ease-in-out 0s;\n  -moz-transition: all 0.3s ease-in-out 0s;\n  -webkit-transition: all 0.3s ease-in-out 0s;\n  -o-transition: all 0.3s ease-in-out 0s;\n}\n.social-icon a:hover {\n  color: #fff !important;\n}\n.social-icon .facebook:hover {\n  background: #3b5999;\n}\n.social-icon .twitter:hover {\n  background: #4A9CEC;\n}\n.social-icon .instagram:hover {\n  background: #D6274D;\n}\n.social-icon .linkedin:hover {\n  background: #1260A2;\n}\n.social-icon .google:hover {\n  background: #CE332A;\n}\n.btn-uspl{\n  background: #2d0829;\n  color: #FFFFFF;\n}\n.footer-area{\n    padding: 0px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL3VzcGwuY3NzIiwic3JjL2FwcC9jb3JlL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHlFQUF5RTtBQUZ6RSxpQkFBaUI7QUFHakI7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUdwQyxzQkFBc0I7RUFDdEIsNENBQTRDO0VBQzVDLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtBQUMvQjtBQUVBO0VBSUUsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osUUFBUTtFQUNSLFNBQVM7RUFDVCxrQ0FBa0M7QUFDcEM7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsbUJBQW1CO0VBSW5CLDJCQUEyQjtFQUMzQixxQkFBcUI7QUFDdkI7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFdBQVc7QUFDYjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQix5Q0FBeUM7RUFDekMsK0JBQStCO0VBQy9CLG9DQUFvQztFQUNwQyx1Q0FBdUM7QUFDekM7QUFFQTtFQUNFLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsbUNBQW1DO0VBQ25DLHdDQUF3QztFQUN4QywyQ0FBMkM7RUFDM0Msc0NBQXNDO0FBQ3hDO0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLHFDQUFxQztFQUNyQyx3Q0FBd0M7RUFDeEMsbUNBQW1DO0VBQ25DLHNFQUFzRTtBQUN4RTtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUEsY0FBYztBQUNkO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxZQUFZO0VBQ1osbUNBQTJCO1VBQTNCLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRTtJQUlFLHVCQUF1QjtFQUN6QjtFQUNBO0lBSUUseUJBQXlCO0VBQzNCO0FBQ0Y7QUFiQTtFQUNFO0lBSUUsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFJRSx5QkFBeUI7RUFDM0I7QUFDRjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBRUE7OytFQUUrRTtBQUMvRTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUV0QixvQ0FBb0M7RUFDcEMsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixNQUFNO0FBQ1I7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBSVosMkJBQTJCO0lBQ3pCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUdBQWlHO1lBQWpHLGlHQUFpRztBQUNyRztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFJZiwyQkFBMkI7QUFDN0I7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtJQUNmLHlCQUF5QjtFQUkzQiwyQkFBMkI7O0FBRTdCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBRUE7RUFDRSxrREFBa0Q7QUFDcEQ7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsbUNBQW1DO0VBQ25DLHdDQUF3QztFQUN4QywyQ0FBMkM7RUFDM0Msc0NBQXNDO0FBQ3hDO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1DQUFtQztFQUNuQyx3Q0FBd0M7RUFDeEMsMkNBQTJDO0VBQzNDLHNDQUFzQztBQUN4QztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLHdDQUF3QztFQUN4QywyQ0FBMkM7RUFDM0Msc0NBQXNDO0FBQ3hDO0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxrREFBa0Q7QUFDcEQ7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0lBQ0kseUJBQWlCO1lBQWpCLGlCQUFpQjtBQUNyQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsK0NBQStDO0VBQy9DLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxRQUFRO0FBQ1Y7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQiw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUd0QixnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFHdkIsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsNEJBQTRCO0FBQzlCO0FBRUE7OztFQUdFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7QUFFQTs7OztFQUlFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7QUFFQTs7O0VBR0UsY0FBYztFQUNkLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsNEJBQTRCO0VBQzVCLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBRWxCLDJDQUEyQztFQUMzQyxzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsbUNBQW1DO0VBQ25DLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdDQUFnQztFQUNoQyx3Q0FBd0M7RUFDeEMscUNBQXFDO0VBQ3JDLG1DQUFtQztFQUNuQyxvQ0FBb0M7QUFDdEM7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsK0JBQStCO0FBQ2pDO0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCO0FBRUE7OztFQUdFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDRCQUE0QjtBQUM5QjtBQUVBOzs0RUFFNEU7QUFDNUUsZUFBZTtBQUNiLDJDQUEyQztBQUMzQyxzQ0FBc0M7QUFDdEMsZ0NBQWdDO0FBQ2hDLDBCQUEwQjtBQUMxQix5QkFBeUI7QUFDekIsc0JBQXNCO0FBQ3RCLG9CQUFvQjtBQUNwQix5QkFBeUI7QUFDM0IsSUFBSTtBQUVKLHFDQUFxQztBQUNuQyxlQUFlO0FBQ2YsbUJBQW1CO0FBQ25CLG9CQUFvQjtBQUNwQixxQkFBcUI7QUFDckIsdUJBQXVCO0FBQ3pCLElBQUk7QUFFSix3Q0FBd0M7QUFDdEMsb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNwQixJQUFJO0FBRUosNkNBQTZDO0FBQzNDLHNCQUFzQjtBQUN4QixJQUFJO0FBRUosZ0JBQWdCO0FBQ2QsdUJBQXVCO0FBQ3pCLElBQUk7QUFFSixjQUFjO0FBQ2Q7RUFDRSxrREFBa0Q7QUFDcEQ7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIscURBQXFEO0VBQ3JELG1DQUFtQztFQUNuQyx3Q0FBd0M7RUFDeEMsMkNBQTJDO0VBQzNDLHNDQUFzQztFQUN0QyxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLHdDQUF3QztFQUN4QywyQ0FBMkM7RUFDM0Msc0NBQXNDO0FBQ3hDO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLG1DQUFtQztFQUNuQyx3Q0FBd0M7RUFDeEMsMkNBQTJDO0VBQzNDLHNDQUFzQztBQUN4QztBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsU0FBUztFQUNULFdBQVc7QUFDYjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7OytFQUUrRTtBQUMvRTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIscURBQXFEO0VBS3JELDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUtuQiwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtFQUtmLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsY0FBYztBQUNoQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0RBQWtEO0FBQ3BEO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtEQUFrRDtBQUNwRDtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsWUFBWTtBQUNkO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixTQUFTO0FBQ1g7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixtQ0FBbUM7RUFDbkMsd0NBQXdDO0VBQ3hDLDJDQUEyQztFQUMzQyxzQ0FBc0M7QUFDeEM7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsT0FBTztFQUNQLGFBQWE7QUFDZjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLE9BQU87RUFDUCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QiwwQ0FBMEM7RUFDMUMsZ0NBQWdDO0VBQ2hDLHFDQUFxQztFQUNyQyx3Q0FBd0M7RUFDeEMsbUNBQW1DO0FBQ3JDO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMscUNBQXFDO0VBQ3JDLHdDQUF3QztFQUN4QyxtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFHbEIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmO0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixRQUFRO0VBRVIsMkJBQTJCO0VBQzNCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFFQTtDQUNDO0FBRUQsc0JBQXNCO0FBQ3RCO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixtQ0FBbUM7RUFDbkMsd0NBQXdDO0VBQ3hDLDJDQUEyQztFQUMzQyxzQ0FBc0M7QUFDeEM7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCO0FDdjdDQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypub3QgdXNpbmcgdGhpcyovXG5cbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFydm86NzAwfE9wZW4rU2Fuc1wiKTtcbmh0bWwge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xuICBjb2xvcjogI2FiYWNhZTtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuaDEsIGgyLCBoMywgaDQge1xuICBmb250LXNpemU6IDM4cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWZhbWlseTogJ2NhbWJyaWEnLCBzZXJpZjtcbn1cblxuYSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG59XG5cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmEgYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbnAge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbnVsLCBvbCB7XG4gIGxpc3Qtc3R5bGU6IG91dHNpZGUgbm9uZSBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbnVsIGxpLCBvbCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmE6bm90KFtocmVmXSk6bm90KFt0YWJpbmRleF0pIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zZWN0aW9uLWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5zZWN0aW9uLWhlYWRlciBwIHtcbiAgdGV4dDogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuLnNlY3Rpb24tdGl0bGUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNoYXBlIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogMCBhdXRvIDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2RDk0QkE7XG59XG5cbi5wYWRkaW5nLW5vbmUge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5iZy1ncmF5IHtcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbn1cblxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoNjEsIDk2LCAyNDQsIDAuMyk7XG59XG5cbi5idG4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYnRuOmZvY3VzLFxuLmJ0bjphY3RpdmUge1xuICBib3gtc2hhZG93OiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ0bi1jb21tb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkQ5NEJBO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5idG4tY29tbW9uOmhvdmVyIHtcbiAgY29sb3I6ICM2RDk0QkE7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBkb3R0ZWQgIzZEOTRCQTtcbiAgYm94LXNoYWRvdzogMCA2cHggMjJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnRuLWJvcmRlciB7XG4gIGNvbG9yOiAjNkQ5NEJBO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzZEOTRCQTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmJ0bi1ib3JkZXI6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjNkQ5NEJBO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkQ5NEJBO1xufVxuXG4uYnRuLWJvcmRlcjpmb2N1cyB7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICM2RDk0QkE7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2RDk0QkE7XG59XG5cbi5idG4tbGcge1xuICBwYWRkaW5nOiAxNHB4IDMzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmJ0bi1ybSB7XG4gIHBhZGRpbmc6IDdweCAwcHg7XG4gIGNvbG9yOiAjNkQ5NEJBO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmJ0bi1ybTpob3ZlciB7XG4gIGNvbG9yOiAjNkQ5NEJBO1xufVxuXG5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uLWNsb3NlLCAuaWNvbi1jaGVjayB7XG4gIGNvbG9yOiAjNkQ5NEJBO1xufVxuXG4uc29jaWFsLWljb24gYSB7XG4gIGNvbG9yOiAjNjY2O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBsaW5lLWhlaWdodDogMzRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAxNXB4IDZweCAxMnB4IDRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xufVxuXG4uc29jaWFsLWljb24gYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5zb2NpYWwtaWNvbiAuZmFjZWJvb2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjM2I1OTk5O1xufVxuXG4uc29jaWFsLWljb24gLnR3aXR0ZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNEE5Q0VDO1xufVxuXG4uc29jaWFsLWljb24gLmluc3RhZ3JhbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNENjI3NEQ7XG59XG5cbi5zb2NpYWwtaWNvbiAubGlua2VkaW46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMTI2MEEyO1xufVxuXG4uc29jaWFsLWljb24gLmdvb2dsZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNDRTMzMkE7XG59XG5cbi8qIFNjcm9sbFRvVG9wICovXG5hLmJhY2stdG8tdG9wIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDE4cHg7XG4gIHJpZ2h0OiAxNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmEuYmFjay10by10b3AgaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDIycHg7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzZEOTRCQTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yOCk7XG59XG5cbmEuYmFjay10by10b3A6aG92ZXIsIGEuYmFjay10by10b3A6Zm9jdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIFByZWxvYWRlciAqL1xuI3ByZWxvYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB6LWluZGV4OiA5OTk5OTk5O1xufVxuXG4ubG9hZGVyIHtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbiNsb2FkZXItMTpiZWZvcmUsICNsb2FkZXItMTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTBweDtcbiAgbGVmdDogLTEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wLWNvbG9yOiAjNkQ5NEJBO1xufVxuXG4jbG9hZGVyLTE6YmVmb3JlIHtcbiAgei1pbmRleDogMTAwO1xuICBhbmltYXRpb246IHNwaW4gMXMgaW5maW5pdGU7XG59XG5cbiNsb2FkZXItMTphZnRlciB7XG4gIGJvcmRlcjogN3B4IHNvbGlkICNmMmYyZjI7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbi5zZWN0aW9uLXBhZGRpbmcge1xuICBwYWRkaW5nOiA2MHB4IDA7XG59XG5cbmhyIHtcbiAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCAjZGRkO1xufVxuXG4uaW1nLWljb257XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGJvcmRlcjogNHB4IHNvbGlkICM2RDk0QkE7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmltZy1pY29uIGltZ3tcbiAgICB3aWR0aDogMzBweDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICA4LiBGZWF0dXJlcyBTZWN0aW9uIFN0eWxlXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuI2ZlYXR1cmVzIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuI2ZlYXR1cmVzIC5pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4jZmVhdHVyZXMgLmNvbnRlbnQtbGVmdCBzcGFuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4jZmVhdHVyZXMgLmNvbnRlbnQtbGVmdCAudGV4dCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4jZmVhdHVyZXMgLmNvbnRlbnQtcmlnaHQgc3BhbiB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4jZmVhdHVyZXMgLmJveC1pdGVtIHtcbiAgYm94LXNoYWRvdzogMCAwIDEycHggI0Y0RjRGNDtcbiAgcGFkZGluZzogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuICAtbW94LXRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xufVxuXG4jZmVhdHVyZXMgLmJveC1pdGVtIC5pY29uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDEycHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4jZmVhdHVyZXMgLmJveC1pdGVtIC5pY29uIGltZ3tcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZmlsdGVyOiBpbnZlcnQoNDAlKSBzZXBpYSg0OSUpIHNhdHVyYXRlKDc0ODAlKSBodWUtcm90YXRlKDMzNWRlZykgYnJpZ2h0bmVzcygxMTQlKSBjb250cmFzdCgxMDMlKTtcbn1cblxuI2ZlYXR1cmVzIC5ib3gtaXRlbSAuaWNvbiBpIHtcbiAgY29sb3I6ICM2RDk0QkE7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbn1cblxuI2ZlYXR1cmVzIC5ib3gtaXRlbSAudGV4dCBoNCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuXG59XG5cbiNmZWF0dXJlcyAuYm94LWl0ZW0gLnRleHQgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgbWFyZ2luLXRvcDogMzVweDtcbn1cblxuI2ZlYXR1cmVzIC5ib3gtaXRlbTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMnB4IDEwcHggcmdiYSgyNywgMzgsIDQ5LCAwLjEpO1xufVxuXG4jZmVhdHVyZXMgLmJveC1pdGVtOmhvdmVyIGg0IHtcbiAgY29sb3I6ICM2RDk0QkE7XG59XG5cbiNmZWF0dXJlcyAuc2hvdy1ib3gge1xuICBtYXJnaW4tdG9wOiAyMDBweDtcbn1cblxuI2ZlYXR1cmVzIC5zaG93LWJveCBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyogU2VydmljZXMgSXRlbSAqL1xuLnNlcnZpY2VzLWl0ZW0ge1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIG1pbi1oZWlnaHQ6IDI0MHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTJweCAjRjRGNEY0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XG59XG5cbi5zZXJ2aWNlcy1pdGVtIC5pY29uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xufVxuXG4uc2VydmljZXMtaXRlbSAuaWNvbiBpIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzZEOTRCQTtcbiAgbGluZS1oZWlnaHQ6IDcwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcbn1cblxuLnNlcnZpY2VzLWl0ZW0gLmljb24gaW1ne1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5zZXJ2aWNlcy1pdGVtIC5zZXJ2aWNlcy1jb250ZW50IGgzIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnNlcnZpY2VzLWl0ZW0gLnNlcnZpY2VzLWNvbnRlbnQgaDMgYSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM1ODViNjA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zZXJ2aWNlcy1pdGVtIC5zZXJ2aWNlcy1jb250ZW50IGgzIGE6aG92ZXIge1xuICBjb2xvcjogIzZEOTRCQTtcbn1cblxuLnNlcnZpY2VzLWl0ZW06aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDEwcHggMjJweCAxMHB4IHJnYmEoMjcsIDM4LCA0OSwgMC4xKTtcbn1cblxuLnNlcnZpY2VzLWl0ZW06aG92ZXIgLmljb24ge1xuICBiYWNrZ3JvdW5kOiAjNkQ5NEJBO1xufVxuXG4uc2VydmljZXMtaXRlbTpob3ZlciAuaWNvbiBpbWd7XG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XG59XG5cbi5zZXJ2aWNlcy1pdGVtOmhvdmVyIC5pY29uIGkge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuI3NlcnZpY2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNpbmR1c3RyaWVzIC5zZXJ2aWNlcy1pdGVte1xuICAgIG1pbi1oZWlnaHQ6IDE4MHB4O1xufVxuXG4uYWJvdXQtYXJlYSAuYWJvdXQtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4uYWJvdXQtYXJlYSAuYWJvdXQtd3JhcHBlciA+IGRpdiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59XG5cbi5hYm91dC1hcmVhIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmFib3V0LWFyZWEgLmNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uYWJvdXQtYXJlYSAuY29udGVudCBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuI2N0YSB7XG4gIHBhZGRpbmc6IDMwcHggMDtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4udG9wLW5hdi1jb2xsYXBzZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG4gIHRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbn1cblxuLnRvcC1uYXYtY29sbGFwc2UgLm5hdmJhci1icmFuZCB7XG4gIHRvcDogMHB4O1xufVxuXG4udG9wLW5hdi1jb2xsYXBzZSAubmF2YmFyLWJyYW5kIGltZyB7XG4gIHdpZHRoOiAyMyU7XG59XG5cbi50b3AtbmF2LWNvbGxhcHNlIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gIGNvbG9yOiAjNTg1YjYwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnRvcC1uYXYtY29sbGFwc2UgLm5hdmJhci1uYXYgLm5hdi1saW5rOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzZEOTRCQSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICM2RDk0QkEgIWltcG9ydGFudDtcbn1cblxuLnRvcC1uYXYtY29sbGFwc2UgLm5hdmJhci1uYXYgLm5hdi1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICM2RDk0QkEgIWltcG9ydGFudDtcbn1cblxuLm5hdmJhci1leHBhbmQtbWQgLm5hdmJhci10b2dnbGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2RDk0QkE7XG4gIGNvbG9yOiAjNkQ5NEJBO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdmJhci1icmFuZCBpbWcge1xuICB3aWR0aDogMjMlO1xufVxuXG4udG9wLW5hdi1jb2xsYXBzZSAubmF2YmFyLW5hdiBsaS5hY3RpdmUgYS5uYXYtbGluayB7XG4gIGNvbG9yOiAjNkQ5NEJBICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzZEOTRCQTtcbn1cblxuLmluZGlnbyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ubWVudS1iZyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ubmF2YmFyLWV4cGFuZC1tZCAubmF2YmFyLW5hdiAubmF2LWxpbmsgaSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5uYXZiYXItZXhwYW5kLW1kIC5uYXZiYXItbmF2IC5uYXYtaXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbn1cblxuLm5hdmJhci1leHBhbmQtbWQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDdweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4ubmF2YmFyLWV4cGFuZC1tZCAubmF2YmFyLW5hdiAubmF2LWxpbms6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZEOTRCQTtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDA7XG4gIHRvcDogMzVweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNpdGlvbjogd2lkdGggMXM7XG4gIC1tcy10cmFuc2l0aW9uOiB3aWR0aCAxcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAxcztcbn1cblxuLm5hdmJhci1leHBhbmQtbWQgLm5hdmJhci1uYXYgbGkgYTpob3Zlcixcbi5uYXZiYXItZXhwYW5kLW1kIC5uYXZiYXItbmF2IGxpIC5hY3RpdmUgPiBhLFxuLm5hdmJhci1leHBhbmQtbWQgLm5hdmJhci1uYXYgbGkgYTpmb2N1cyB7XG4gIGNvbG9yOiAjZmZmO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubmF2YmFyLWV4cGFuZC1tZCAubmF2YmFyLW5hdiAuYWN0aXZlID4gLm5hdi1saW5rLFxuLm5hdmJhci1leHBhbmQtbWQgLm5hdmJhci1uYXYgLm5hdi1saW5rLmFjdGl2ZSxcbi5uYXZiYXItZXhwYW5kLW1kIC5uYXZiYXItbmF2IC5uYXYtbGluay5vcGVuLFxuLm5hdmJhci1leHBhbmQtbWQgLm5hdmJhci1uYXYgLm9wZW4gPiAubmF2LWxpbmsge1xuICBjb2xvcjogIzZEOTRCQSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5hdmJhci1leHBhbmQtbWQgLm5hdmJhci1uYXYgLm5hdi1saW5rOmhvdmVyLFxuLm5hdmJhci1leHBhbmQtbWQgLm5hdmJhci1uYXYgLm5hdi1saW5rOmhvdmVyOjpiZWZvcmUsXG4ubmF2YmFyLWV4cGFuZC1tZCAubmF2YmFyLW5hdiAubmF2LWxpbms6Zm9jdXMge1xuICBjb2xvcjogIzZEOTRCQTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IHdpZHRoIDFzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDFzO1xuICAtbXMtdHJhbnNpdGlvbjogd2lkdGggMXM7XG59XG5cbi5uYXZiYXIge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4ubmF2YmFyIGxpLmFjdGl2ZSBhLm5hdi1saW5rIHtcbiAgLypjb2xvcjogI3ByZXNldDsqL1xufVxuXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBtaW4td2lkdGg6IDIxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTc1KTtcbiAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTc1KTtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC40cztcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAwLjRzO1xuICAtbW96LWFuaW1hdGlvbjogZmFkZUluIDAuNHM7XG4gIC1vLWFuaW1hdGlvbjogZmFkZUluIDAuNHM7XG4gIC1tcy1hbmltYXRpb246IGZhZGVJbiAwLjRzO1xufVxuXG4uZHJvcGRvd24tbWVudTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMDAlO1xuICBsZWZ0OiAyMCU7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNmZmY7XG59XG5cbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tbWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRvcDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBhbmltYXRpb246IGZhZGVJbiAwLjRzO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDAuNHM7XG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlSW4gMC40cztcbiAgLW8tYW5pbWF0aW9uOiBmYWRlSW4gMC40cztcbiAgLW1zLWFuaW1hdGlvbjogZmFkZUluIDAuNHM7XG59XG5cbi5kcm9wZG93biAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzMzM7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNsZWFyOiBib3RoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG91dGxpbmU6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbn1cblxuLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xufVxuXG4uZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW06Zm9jdXMsXG4uZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW06aG92ZXIsXG4uZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW0uYWN0aXZlIHtcbiAgY29sb3I6ICM2RDk0QkE7XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG59XG5cbi5kcm9wZG93bi1pdGVtLmFjdGl2ZSwgLmRyb3Bkb3duLWl0ZW06YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5mYWRlSW5VcE1lbnUge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcE1lbnU7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcE1lbnU7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4zLiBIZXJvIEFyZWFcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKiNoZXJvLWFyZWEgeyovXG4gIC8qYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9jb3Zlci5qcGcpOyovXG4gIC8qYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjsqL1xuICAvKmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7Ki9cbiAgLypiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyovXG4gIC8qISptaW4taGVpZ2h0OiA2NTBweDsqISovXG4gIC8qcG9zaXRpb246IHJlbGF0aXZlOyovXG4gIC8qb3ZlcmZsb3c6IGhpZGRlbjsqL1xuICAvKnBhZGRpbmc6IDE4MHB4IDAgODBweDsqL1xuLyp9Ki9cblxuLyojaGVyby1hcmVhIC5jb250ZW50cyAuaGVhZC10aXRsZSB7Ki9cbiAgLypjb2xvcjogI2ZmZjsqL1xuICAvKmZvbnQtc2l6ZTogMzVweDsqL1xuICAvKmZvbnQtd2VpZ2h0OiA3MDA7Ki9cbiAgLypsaW5lLWhlaWdodDogNTVweDsqL1xuICAvKm1hcmdpbi1ib3R0b206IDEwcHg7Ki9cbi8qfSovXG5cbi8qI2hlcm8tYXJlYSAuY29udGVudHMgLmhlYWRlci1idXR0b24geyovXG4gIC8qbWFyZ2luLXRvcDogMjBweDsqL1xuICAvKmNvbG9yOiAjMjIyMjIyOyovXG4vKn0qL1xuXG4vKiNoZXJvLWFyZWEgLmNvbnRlbnRzIC5oZWFkZXItYnV0dG9uIC5idG4geyovXG4gIC8qbWFyZ2luLXJpZ2h0OiAxMHB4OyovXG4vKn0qL1xuXG4vKi5zbG9kZXItaW1nIHsqL1xuICAvKmJhY2tncm91bmQ6ICMzNDM2M2E7Ki9cbi8qfSovXG5cbi8qIFRlYW0gSXRlbSAqL1xuLnRlYW0taXRlbTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMnB4IDEwcHggcmdiYSgyNywgMzgsIDQ5LCAwLjEpO1xufVxuXG4udGVhbS1pdGVtIHtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxOHB4IDBweCByZ2JhKDE5OCwgMTk4LCAxOTgsIDAuMyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLnRlYW0taXRlbSAudGVhbS1pbWcge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG5cbi50ZWFtLWl0ZW0gLmNvbnRldG4ge1xuICBwYWRkaW5nOiAxNXB4IDUwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi50ZWFtLWl0ZW0gLnNvY2lhbC1pY29ucyB7XG4gIHBhZGRpbmctdG9wOiAxMXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XG59XG5cbi50ZWFtLWl0ZW0gLnNvY2lhbC1pY29ucyBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4udGVhbS1pdGVtIC5zb2NpYWwtaWNvbnMgbGkgYSB7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDtcbn1cblxuLnRlYW0taXRlbSAuc29jaWFsLWljb25zIGxpIGEgaSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcbn1cblxuLnRlYW0taXRlbSAuc29jaWFsLWljb25zIGxpIC5sbmktZmFjZWJvb2stZmlsbGVkIHtcbiAgY29sb3I6ICMzYjU5OTg7XG59XG5cbi50ZWFtLWl0ZW0gLnNvY2lhbC1pY29ucyBsaSAubG5pLXR3aXR0ZXItZmlsbGVkIHtcbiAgY29sb3I6ICMwMGFjZWQ7XG59XG5cbi50ZWFtLWl0ZW0gLnNvY2lhbC1pY29ucyBsaSAubG5pLWluc3RhZ3JhbS1maWxsZWQge1xuICBjb2xvcjogI2ZiMzk1ODtcbn1cblxuLnRlYW0taXRlbSAuaW5mby10ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRlYW0taXRlbSAuaW5mby10ZXh0IGgzIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi50ZWFtLWl0ZW0gLmluZm8tdGV4dCBoMyBhIHtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi50ZWFtLWl0ZW0gLmluZm8tdGV4dCBoMyBhOmhvdmVyIHtcbiAgY29sb3I6ICM2RDk0QkE7XG59XG5cbi50ZWFtLWl0ZW0gLmluZm8tdGV4dCBwIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzg4ODtcbn1cblxuLnRlYW0taXRlbTpob3ZlciAudGVhbS1vdmVybGF5IHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIFByaWNpbmcgVGFibGUgU3R5bGVcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4jcHJpY2luZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3ByaWNpbmcgLnRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbiNwcmljaW5nIC50aXRsZSBoMyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbiNwcmljaW5nIC50aXRsZSAubW9udGgtcGxhbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbiNwcmljaW5nIC50YWJsZSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMThweCAwcHggcmdiYSgxOTgsIDE5OCwgMTk4LCAwLjMpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3MgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAuM3MgbGluZWFyO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIC4zcyBsaW5lYXI7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAuM3MgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGxpbmVhcjtcbn1cblxuI3ByaWNpbmcgLnRhYmxlIC5pY29uLWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkVERUY7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcyBsaW5lYXI7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIC4zcyBsaW5lYXI7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgLjNzIGxpbmVhcjtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIC4zcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGFsbCAuM3MgbGluZWFyO1xufVxuXG4jcHJpY2luZyAudGFibGUgLmljb24tYm94IGkge1xuICBjb2xvcjogIzZEOTRCQTtcbiAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjNzIGxpbmVhcjtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAuM3MgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBhbGwgLjNzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBsaW5lYXI7XG59XG5cbiNwcmljaW5nIC50YWJsZSAucHJpY2luZy1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3ByaWNpbmcgLnRhYmxlIC5wcmljaW5nLWhlYWRlciAucHJpY2UtdmFsdWUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNkQ5NEJBO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuI3ByaWNpbmcgLnRhYmxlIC5wcmljaW5nLWhlYWRlciAucHJpY2UtdmFsdWUgc3VwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0b3A6IC0xOHB4O1xufVxuXG4jcHJpY2luZyAudGFibGUgLnByaWNpbmctaGVhZGVyIC5wcmljZS12YWx1ZSBzcGFuIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogI2FiYWNhZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuI3ByaWNpbmcgLnRhYmxlIC5kZXNjcmlwdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMHB4IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbiNwcmljaW5nIC50YWJsZSAuZGVzY3JpcHRpb24gbGkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjYWJhY2FlO1xuICBwYWRkaW5nOiA0cHggMDtcbn1cblxuI3ByaWNpbmcgLnRhYmxlIC5kZXNjcmlwdGlvbiBsaTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuI3ByaWNpbmcgLnRhYmxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIycHggMTBweCByZ2JhKDI3LCAzOCwgNDksIDAuMSk7XG59XG5cbiNwcmljaW5nIC50YWJsZTpob3ZlciAuaWNvbi1ib3gge1xuICBiYWNrZ3JvdW5kOiAjNkQ5NEJBO1xufVxuXG4jcHJpY2luZyAudGFibGU6aG92ZXIgLmljb24tYm94IGkge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuI3ByaWNpbmcgI2FjdGl2ZS10YiB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMnB4IDEwcHggcmdiYSgyNywgMzgsIDQ5LCAwLjEpO1xufVxuXG4jcHJpY2luZyAjYWN0aXZlLXRiIC5pY29uLWJveCB7XG4gIGJhY2tncm91bmQ6ICM2RDk0QkE7XG59XG5cbiNwcmljaW5nICNhY3RpdmUtdGIgLmljb24tYm94IGkge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuI3ByaWNpbmcgLmFjdGl2ZSB7XG4gIHotaW5kZXg6IDk5OTk5O1xufVxuXG4udGVzdGltb25pYWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2RDk0QkE7XG59XG5cbi50ZXN0aW1vbmlhbC1pdGVtIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHggMjBweDtcbn1cblxuLnRlc3RpbW9uaWFsLWl0ZW0gLmltZy10aHVtYiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxNXB4IDE1cHggMTVweCAwO1xufVxuXG4udGVzdGltb25pYWwtaXRlbSAuaW1nLXRodW1iIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogaW5oZXJpdDtcbiAgcGFkZGluZzogN3B4O1xufVxuXG4udGVzdGltb25pYWwtaXRlbSAuY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50ZXN0aW1vbmlhbC1pdGVtIC5jb250ZW50IC5kZXNjcmlwdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogIzMzMztcbn1cblxuLnRlc3RpbW9uaWFsLWl0ZW0gLmNvbnRlbnQgLnN0YXItaWNvbiBpIHtcbiAgY29sb3I6ICM2RDk0QkE7XG59XG5cbi50ZXN0aW1vbmlhbC1pdGVtIC5pbmZvIGgyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4udGVzdGltb25pYWwtaXRlbSAuaW5mbyBoMiBhIHtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi50ZXN0aW1vbmlhbC1pdGVtIC5pbmZvIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjbGVhcjogYm90aDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRlc3RpbW9uaWFsLWl0ZW0gLmluZm8gaDMgYSB7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4udGVzdGltb25pYWwtaXRlbSAuaW5mbyAuaW5kaWNhdG9yIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzZEOTRCQTtcbn1cblxuLnRlc3RpbW9uaWFsLWl0ZW0gLmljb24tc29jaWFsIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnRlc3RpbW9uaWFsLWl0ZW0gLmljb24tc29jaWFsIGEge1xuICBjb2xvcjogIzY2NjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbjogMTVweCA2cHggMTJweCA0cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcbn1cblxuLnRlc3RpbW9uaWFsLWl0ZW0gLmljb24tc29jaWFsIGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRlc3RpbW9uaWFsLWl0ZW0gLmljb24tc29jaWFsIC5mYWNlYm9vazpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzYjU5OTk7XG59XG5cbi50ZXN0aW1vbmlhbC1pdGVtIC5pY29uLXNvY2lhbCAudHdpdHRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM0QTlDRUM7XG59XG5cbi50ZXN0aW1vbmlhbC1pdGVtIC5pY29uLXNvY2lhbCAuaW5zdGFncmFtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI0Q2Mjc0RDtcbn1cblxuLnRlc3RpbW9uaWFsLWl0ZW0gLmljb24tc29jaWFsIC5saW5rZWRpbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxMjYwQTI7XG59XG5cbi50ZXN0aW1vbmlhbC1pdGVtIC5pY29uLXNvY2lhbCAuZ29vZ2xlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI0NFMzMyQTtcbn1cblxuLm93bC1wYWdpbmF0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtNDBweDtcbn1cblxuLm93bC1jYXJvdXNlbCAub3dsLWRvdHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5vd2wtY2Fyb3VzZWwgYnV0dG9uLm93bC1kb3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHpvb206IDE7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ub3dsLWNhcm91c2VsIGJ1dHRvbi5vd2wtZG90IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgbWFyZ2luOiAycHggNHB4O1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NTApO1xuICBvcGFjaXR5OiAxO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbn1cblxuLm93bC1jYXJvdXNlbCBidXR0b24ub3dsLWRvdC5hY3RpdmUgc3BhbiwgLm93bC1jYXJvdXNlbCBidXR0b24ub3dsLWRvdC5jbGlja2FibGUsIC5vd2wtY2Fyb3VzZWwgYnV0dG9uLm93bC1kb3Q6aG92ZXIgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICM2RDk0QkE7XG59XG5cbi5zbGljay1zbGlkZXIge1xuICBwYWRkaW5nOiA4MHB4IDA7XG59XG5cbi5zbGlkZXItY2VudGVyIGltZyB7XG4gIG9wYWNpdHk6IDAuNztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICBwYWRkaW5nOiA2M3B4IDYzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2xpZGVyLWNlbnRlciAuc2xpY2stY2VudGVyIGltZyB7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjkpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjkpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuOSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjkpO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuOSk7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjNkQ5NEJBO1xuICBib3gtc2hhZG93OiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG50ZXh0YXJlYSB7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmJ0bi5kaXNhYmxlZCwgLmJ0bjpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5jb250YWN0LWZvcm0tYXJlYSBoMiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNvbnRhY3QtcmlnaHQtYXJlYSB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4uY29udGFjdC1yaWdodC1hcmVhIC5jb250YWN0LXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNvbnRhY3QtcmlnaHQtYXJlYSAuY29udGFjdC10aXRsZSBoMSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmNvbnRhY3QtcmlnaHQge1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbi5jb250YWN0LXJpZ2h0IC5zaW5nbGUtY29udGFjdCB7XG4gIG1hcmdpbjogMzBweCAwcHg7XG4gIHBhZGRpbmc6IDNweCA1NXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjYWJhY2FlO1xufVxuXG4uY29udGFjdC1yaWdodCAuc2luZ2xlLWNvbnRhY3QgcCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmNvbnRhY3QtcmlnaHQgLnNpbmdsZS1jb250YWN0IHAgYSB7XG4gIGNvbG9yOiAjYWJhY2FlO1xufVxuXG4uY29udGFjdC1yaWdodCAuY29udGFjdC1pY29uIHtcbiAgYmFja2dyb3VuZDogIzZEOTRCQTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi5oMyB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4vKmN0YVxuKi9cblxuLyogRm9vdGVyIEFyZWEgU3RhcnQgKi9cbi5mb290ZXItbG9nbyBpbWd7XG4gIHdpZHRoOiAyMDJweDtcbn1cblxuLmZvb3Rlci1hcmVhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxNTBweCAwcHggMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uZm9vdGVyLWFyZWEgLmZvb3Rlci10aXRlbCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5mb290ZXItYXJlYSAuZm9vdGVyLXRpdGVsIHNwYW4ge1xuICBjb2xvcjogI2NjYztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmZvb3Rlci1hcmVhIC50ZXh0d2lkZ2V0IHAge1xuICBjb2xvcjogIzMzMztcbn1cblxuLmZvb3Rlci1hcmVhIC5mb290ZXItbGluayBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5mb290ZXItYXJlYSAuZm9vdGVyLWxpbmsgbGkgYSB7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZvb3Rlci1hcmVhIC5mb290ZXItbGluayBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICM2RDk0QkE7XG59XG5cbi5mb290ZXItYXJlYSAuYWRkcmVzcyBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5mb290ZXItYXJlYSAuYWRkcmVzcyBsaSBhIHtcbiAgY29sb3I6ICM2NjY2NjY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5mb290ZXItYXJlYSAuYWRkcmVzcyBsaSBhIGkge1xuICBmb250LXNpemU6IDIycHg7XG4gIHdpZHRoOiAzMnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xufVxuXG4uZm9vdGVyLWFyZWEgI3N1YnNjcmliZS1mb3JtIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmZvb3Rlci1hcmVhICNzdWJzY3JpYmUtZm9ybSAuZm9ybS1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZvb3Rlci1hcmVhICNzdWJzY3JpYmUtZm9ybSAuZm9ybS1ncm91cCAuYnRuLWNvbW1vbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgcGFkZGluZzogN3B4IDE1cHg7XG4gIGhlaWdodDogNTJweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjNkQ5NEJBO1xufVxuXG4jY29weXJpZ2h0IC5jb3B5cmlnaHQtY29udGVudCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDVkNGU5O1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIG1hcmdpbjogNDVweCAwIDBweDtcbn1cblxuI2NvcHlyaWdodCBwIHtcbiAgbGluZS1oZWlnaHQ6IDQycHg7XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvcHlyaWdodCBwIGEge1xuICBjb2xvcjogIzZEOTRCQTtcbn1cblxuLnNvY2lhbC1pY29uIGEge1xuICBjb2xvcjogIzI3MjcyNztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAxNXB4IDZweCAxMnB4IDRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xufVxuXG4uc29jaWFsLWljb24gYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5zb2NpYWwtaWNvbiAuZmFjZWJvb2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjM2I1OTk5O1xufVxuXG4uc29jaWFsLWljb24gLnR3aXR0ZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNEE5Q0VDO1xufVxuXG4uc29jaWFsLWljb24gLmluc3RhZ3JhbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNENjI3NEQ7XG59XG5cbi5zb2NpYWwtaWNvbiAubGlua2VkaW46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMTI2MEEyO1xufVxuXG4uc29jaWFsLWljb24gLmdvb2dsZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNDRTMzMkE7XG59XG5cbi5idG4tdXNwbHtcbiAgYmFja2dyb3VuZDogIzJkMDgyOTtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL2Nzcy91c3BsLmNzc1wiO1xuLmZvb3Rlci1hcmVhe1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/core/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/core/header/header.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/header/header.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  min-height: 10vh;\n  max-height: 70px;\n  background: white;\n  padding: 0 !important;\n}\n\n.navbar .btn {\n  /*color: white !important;*/\n}\n\n.navbar-brand img {\n  width: 165px;\n}\n\n.user-profile img {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n}\n\n.toast-container {\n  position: fixed;\n  top: 70px;\n  right: 5px;\n  z-index: 1200;\n  font-weight: 700;\n  opacity: 0.9;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29yZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcbiAgbWluLWhlaWdodDogMTB2aDtcbiAgbWF4LWhlaWdodDogNzBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLm5hdmJhciAuYnRuIHtcbiAgLypjb2xvcjogd2hpdGUgIWltcG9ydGFudDsqL1xufVxuXG4ubmF2YmFyLWJyYW5kIGltZyB7XG4gIHdpZHRoOiAxNjVweDtcbn1cblxuLnVzZXItcHJvZmlsZSBpbWcge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi50b2FzdC1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNzBweDtcbiAgcmlnaHQ6IDVweDtcbiAgei1pbmRleDogMTIwMDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgb3BhY2l0eTogMC45O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/store/auth.actions */ "./src/app/auth/store/auth.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/toast/toast.service */ "./src/app/shared/toast/toast.service.ts");






let HeaderComponent = class HeaderComponent {
    constructor(store, router, toastService) {
        this.store = store;
        this.router = router;
        this.toastService = toastService;
    }
    ngOnInit() {
        this.authenticated = this.store.select('authState');
    }
    onLogout() {
        this.store.dispatch(new _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["LogOut"]());
        this.router.navigate(['/home']);
    }
    isTemplate(toast) {
        return toast.textOrTpl instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"];
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/core/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/core/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/core/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-comp {\n  background-image: linear-gradient(#235fac, white);\n  padding-top: 0px;\n  margin-top: 0px;\n  border-radius: 10px;\n  justify-content: center;\n\n}\n\n.header img {\n  width: auto;\n  min-height: 30px;\n}\n\n.header {\n  padding: 20px 10px 10px 10px;\n  margin: auto;\n  margin-top: 20px;\n  display: flex;\n  border-radius: 10px;\n  justify-content: space-evenly;\n  background: white;\n  box-shadow: 0px 15px 10px -10px #ccc;\n}\n\n.header .dda {\n  min-width: 150px;\n}\n\nfigcaption {\n  color: black;\n  font-size: 13px;\n  padding-top: 10px;\n}\n\n.header-tabs {\n  width: 8%;\n  text-align: center;\n  cursor: pointer;\n}\n\n.header-tabs.active {\n  border-bottom: 2px #235fac solid;\n}\n\n.search-nav {\n  background: #FFFFFF;\n  border-radius: 10px;\n  padding-top: 50px;\n  width: 100%;\n  margin: 0px 2%;\n  margin-top: -25px;\n  box-shadow: 0px 15px 10px -10px #ccc;\n  font-size: 1.5rem;\n}\n\n.search-nav .btn-black {\n  font-size: 1.5rem;\n}\n\n.search-bar {\n  text-align: center;\n  padding: 10px 80px;\n}\n\n.search-fields {\n  padding: 10px;\n  border: 1px solid grey;\n  border-radius: 10px;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.search-input {\n  width: 25%;\n  border-right: 1px solid gray;\n}\n\n.search-input input, .search-input select {\n  text-align: center;\n  border: none;\n  font-weight: 700 !important;\n}\n\n.home-search-button {\n  margin-top: 20px;\n  margin-bottom: -30px;\n}\n\n.btn-black {\n  width: 200px;\n  background: black;\n  color: #FFFFFF;\n  border-radius: 38px;\n}\n\nngb-carousel {\n  width: 100%;\n}\n\n.carousel-images {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.carousel-images img {\n  border-radius: 50px;\n  width: 80%;\n  box-shadow: 1px 2px 5px 1px grey;\n  margin: 20px;\n}\n\n.text-stroke {\n  -webkit-text-stroke: 2px #333333;\n  color: white;\n}\n\nol {\n  list-style: disc !important;\n}\n\n/* Modal Header */\n\n.modal-header {\n  padding: 2px 16px;\n  background-color: #5b0b91;\n  color: white;\n}\n\n/* Modal Body */\n\n.modal-body {\n  padding: 2px 16px;\n}\n\n/* Modal Footer */\n\n.modal-footer {\n  padding: 2px 16px;\n  background-color: #5b0b91;\n  color: white;\n}\n\n/* Modal Content */\n\n.modal-content {\n  position: relative;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  border: 1px solid #888;\n  width: 80%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-animation-name: animatetop;\n          animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n          animation-duration: 0.4s\n}\n\n/* Add Animation */\n\n@-webkit-keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0\n  }\n  to {\n    top: 0;\n    opacity: 1\n  }\n}\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0\n  }\n  to {\n    top: 0;\n    opacity: 1\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlEQUFpRDtFQUNqRCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix1QkFBdUI7O0FBRXpCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFVBQVU7RUFDViw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixnQ0FBZ0M7RUFDaEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFHQSxpQkFBaUI7O0FBQ2pCO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUEsZUFBZTs7QUFDZjtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSxpQkFBaUI7O0FBQ2pCO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUEsa0JBQWtCOztBQUNsQjtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLDRFQUE0RTtFQUM1RSxrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLGdDQUF1QjtVQUF2QjtBQUNGOztBQUVBLGtCQUFrQjs7QUFDbEI7RUFDRTtJQUNFLFdBQVc7SUFDWDtFQUNGO0VBQ0E7SUFDRSxNQUFNO0lBQ047RUFDRjtBQUNGOztBQVRBO0VBQ0U7SUFDRSxXQUFXO0lBQ1g7RUFDRjtFQUNBO0lBQ0UsTUFBTTtJQUNOO0VBQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1jb21wIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMyMzVmYWMsIHdoaXRlKTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxufVxuXG4uaGVhZGVyIGltZyB7XG4gIHdpZHRoOiBhdXRvO1xuICBtaW4taGVpZ2h0OiAzMHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgcGFkZGluZzogMjBweCAxMHB4IDEwcHggMTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTEwcHggI2NjYztcbn1cblxuLmhlYWRlciAuZGRhIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbn1cblxuXG5maWdjYXB0aW9uIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uaGVhZGVyLXRhYnMge1xuICB3aWR0aDogOCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaGVhZGVyLXRhYnMuYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4ICMyMzVmYWMgc29saWQ7XG59XG5cbi5zZWFyY2gtbmF2IHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweCAyJTtcbiAgbWFyZ2luLXRvcDogLTI1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTEwcHggI2NjYztcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5zZWFyY2gtbmF2IC5idG4tYmxhY2sge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnNlYXJjaC1iYXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggODBweDtcbn1cblxuLnNlYXJjaC1maWVsZHMge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIHdpZHRoOiAyNSU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XG59XG5cbi5zZWFyY2gtaW5wdXQgaW5wdXQsIC5zZWFyY2gtaW5wdXQgc2VsZWN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbn1cblxuLmhvbWUtc2VhcmNoLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IC0zMHB4O1xufVxuXG4uYnRuLWJsYWNrIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDM4cHg7XG59XG5cbm5nYi1jYXJvdXNlbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2Fyb3VzZWwtaW1hZ2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5jYXJvdXNlbC1pbWFnZXMgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgd2lkdGg6IDgwJTtcbiAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggMXB4IGdyZXk7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLnRleHQtc3Ryb2tlIHtcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMnB4ICMzMzMzMzM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxub2wge1xuICBsaXN0LXN0eWxlOiBkaXNjICFpbXBvcnRhbnQ7XG59XG5cblxuLyogTW9kYWwgSGVhZGVyICovXG4ubW9kYWwtaGVhZGVyIHtcbiAgcGFkZGluZzogMnB4IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YjBiOTE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogTW9kYWwgQm9keSAqL1xuLm1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAycHggMTZweDtcbn1cblxuLyogTW9kYWwgRm9vdGVyICovXG4ubW9kYWwtZm9vdGVyIHtcbiAgcGFkZGluZzogMnB4IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YjBiOTE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogTW9kYWwgQ29udGVudCAqL1xuLm1vZGFsLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgd2lkdGg6IDgwJTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40c1xufVxuXG4vKiBBZGQgQW5pbWF0aW9uICovXG5Aa2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xuICBmcm9tIHtcbiAgICB0b3A6IC0zMDBweDtcbiAgICBvcGFjaXR5OiAwXG4gIH1cbiAgdG8ge1xuICAgIHRvcDogMDtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/core/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/toast/toast.service */ "./src/app/shared/toast/toast.service.ts");
/* harmony import */ var _shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/serverEndpoints */ "./src/app/shared/serverEndpoints.ts");










let HomeComponent = class HomeComponent {
    constructor(store, router, fb, http, toastService, modalService) {
        this.store = store;
        this.router = router;
        this.fb = fb;
        this.http = http;
        this.toastService = toastService;
        this.modalService = modalService;
        this.homeView = 'property';
        this.offerContact = false;
        this.date = new Date();
        this.searchForm = {
            booking_required: 2,
            min_date: { year: this.date.getFullYear(), month: this.date.getMonth() + 1, day: this.date.getDate() },
            from_date: { year: this.date.getFullYear(), month: this.date.getMonth() + 1, day: this.date.getDate() },
            to_date: { year: this.date.getFullYear(), month: this.date.getMonth() + 1, day: this.date.getDate() + 1 },
            destination: 'Bir Billing'
        };
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.authenticated = false;
        this.token = '';
    }
    ngOnInit() {
        this.store.select('authState').subscribe(auth => {
            this.authenticated = auth.authenticated;
            this.token = auth.token;
        });
        this.contactUserForm = this.fb.group({
            name: this.fb.control(''),
            mobile: this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            email: this.fb.control(''),
            type: this.fb.control(''),
            query: this.fb.control(''),
        });
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    onSearch(form) {
        const data = {
            destination: form.value.destination,
            from_date: form.value.from_date.day + '/' + form.value.from_date.month + '/' + form.value.from_date.year,
            to_date: form.value.to_date.day + '/' + form.value.to_date.month + '/' + form.value.to_date.year,
            booking_required: form.value.booking_required
        };
        window.location.href = 'https://www.wandertribe.in/search.php?destination_name=' + data.destination + '&from_date=' + data.from_date + '&to_date=' + data.to_date + '&booking_required=' + data.booking_required + '&type=%22NULL%22';
        // this.router.navigate(
        //   ['https://www.wandertribe.in/search.php?destination_name=' + data.destination + '' +
        //   '&from_date=' + data.from_date + '&to_date=' + data.to_date + '&booking_required=' + data.booking_required + '&type=%22NULL%22']);
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
    redirectDestination(dest) {
        this.contactUserForm.controls[`type`].patchValue(dest);
        this.offerContact = true;
        // window.location.href = 'https://www.wandertribe.in/search.php?destination_name=' + dest + '&from_date=' +
        //   this.searchForm.from_date.month + '/' + this.searchForm.from_date.day + '/' + this.searchForm.from_date.year
        //   + '&to_date=' +
        //   this.searchForm.to_date.month + '/' + this.searchForm.to_date.day + '/' + this.searchForm.to_date.year
        //   + '&booking_required=' + 2 + '&type=%22NULL%22';
    }
    setToDate() {
        this.searchForm.to_date = JSON.stringify(this.searchForm.from_date) > JSON.stringify(this.searchForm.to_date) ? this.searchForm.from_date : this.searchForm.to_date;
    }
    hotelMigrate() {
        if (this.authenticated) {
            let url = 'https://hotels.wandertribe.in/index.php?auth_key=' + this.token;
            url = url.replace(/"/g, '');
            // console.log(url);
            window.location.href = url;
        }
        else {
            window.location.href = 'https://hotels.wandertribe.in';
        }
    }
    contactFormSubmit() {
        this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_8__["contactUs"], this.contactUserForm.value, { observe: 'response' }).subscribe(value => {
            this.offerContact = false;
            if (value.status === 200) {
                this.toastService.showSuccess('Your response recorded successfully!');
            }
            else {
                this.toastService.showDanger('Some error occurred!!');
            }
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('carousel', { static: true })
], HomeComponent.prototype, "carousel", void 0);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/core/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/core/loader/loader.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/loader/loader.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hidden {\n  visibility: hidden;\n}\n.loader-overlay {\n  position: absolute;\n  width: 100%;\n  z-index: 500000;\n  top: 0;\n}\n.loader {\n  height: 4px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #FFF;\n}\n.loader:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -200px;\n  width: 200px;\n  height: 4px;\n  background-color: red;\n  -webkit-animation: loading 2s linear infinite;\n          animation: loading 2s linear infinite;\n}\n@-webkit-keyframes loading {\n  from {left: -200px; width: 30%;}\n  50% {width: 30%;}\n  70% {width: 70%;}\n  80% {left: 50%;}\n  95% {left: 120%;}\n  to {left: 100%;}\n}\n@keyframes loading {\n  from {left: -200px; width: 30%;}\n  50% {width: 30%;}\n  70% {width: 70%;}\n  80% {left: 50%;}\n  95% {left: 120%;}\n  to {left: 100%;}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLE1BQU07QUFDUjtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLDZDQUFxQztVQUFyQyxxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLE1BQU0sWUFBWSxFQUFFLFVBQVUsQ0FBQztFQUMvQixLQUFLLFVBQVUsQ0FBQztFQUNoQixLQUFLLFVBQVUsQ0FBQztFQUNoQixLQUFLLFNBQVMsQ0FBQztFQUNmLEtBQUssVUFBVSxDQUFDO0VBQ2hCLElBQUksVUFBVSxDQUFDO0FBQ2pCO0FBUEE7RUFDRSxNQUFNLFlBQVksRUFBRSxVQUFVLENBQUM7RUFDL0IsS0FBSyxVQUFVLENBQUM7RUFDaEIsS0FBSyxVQUFVLENBQUM7RUFDaEIsS0FBSyxTQUFTLENBQUM7RUFDZixLQUFLLFVBQVUsQ0FBQztFQUNoQixJQUFJLFVBQVUsQ0FBQztBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5sb2FkZXItb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDUwMDAwMDtcbiAgdG9wOiAwO1xufVxuLmxvYWRlciB7XG4gIGhlaWdodDogNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xufVxuLmxvYWRlcjpiZWZvcmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBsZWZ0OiAtMjAwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nIDJzIGxpbmVhciBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgbG9hZGluZyB7XG4gIGZyb20ge2xlZnQ6IC0yMDBweDsgd2lkdGg6IDMwJTt9XG4gIDUwJSB7d2lkdGg6IDMwJTt9XG4gIDcwJSB7d2lkdGg6IDcwJTt9XG4gIDgwJSB7bGVmdDogNTAlO31cbiAgOTUlIHtsZWZ0OiAxMjAlO31cbiAgdG8ge2xlZnQ6IDEwMCU7fVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/core/loader/loader.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/loader/loader.component.ts ***!
  \*************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.service */ "./src/app/core/loader/loader.service.ts");



let LoaderComponent = class LoaderComponent {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.show = false;
    }
    ngOnInit() {
        this.subscription = this.loaderService.loaderState
            .subscribe((state) => {
            console.log('showing loader');
            this.show = state.show;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
LoaderComponent.ctorParameters = () => [
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }
];
LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loader',
        template: __webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/loader/loader.component.html"),
        styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/core/loader/loader.component.css")]
    })
], LoaderComponent);



/***/ }),

/***/ "./src/app/core/loader/loader.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/loader/loader.service.ts ***!
  \***********************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let LoaderService = class LoaderService {
    constructor() {
        this.loaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loaderState = this.loaderSubject.asObservable();
    }
    show() {
        console.log('inside loader service show');
        const obj = { show: true };
        this.loaderSubject.next({ show: true });
    }
    hide() {
        console.log('inside loader service hide');
        const obj = { show: false };
        this.loaderSubject.next(obj);
    }
};
LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoaderService);



/***/ }),

/***/ "./src/app/core/model/profile.model.ts":
/*!*********************************************!*\
  !*** ./src/app/core/model/profile.model.ts ***!
  \*********************************************/
/*! exports provided: ProfileModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModel", function() { return ProfileModel; });
class ProfileModel {
    constructor(roles, _id, name, mobile, email, address, dob, profileImage, dobImage, addressImage) {
        this.roles = roles;
        this._id = _id;
        this.name = name;
        this.mobile = mobile;
        this.email = email;
        this.address = address;
        this.dob = dob;
        this.profileImage = profileImage;
        this.dobImage = dobImage;
        this.addressImage = addressImage;
    }
}
ProfileModel.ctorParameters = () => [
    { type: undefined },
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

/***/ "./src/app/core/notfound/notfound.component.css":
/*!******************************************************!*\
  !*** ./src/app/core/notfound/notfound.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/core/notfound/notfound.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/notfound/notfound.component.ts ***!
  \*****************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotfoundComponent = class NotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notfound',
        template: __webpack_require__(/*! raw-loader!./notfound.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/notfound/notfound.component.html"),
        styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/core/notfound/notfound.component.css")]
    })
], NotfoundComponent);



/***/ }),

/***/ "./src/app/core/orders/orders.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/orders/orders.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvb3JkZXJzL29yZGVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/orders/orders.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/orders/orders.component.ts ***!
  \*************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/serverEndpoints */ "./src/app/shared/serverEndpoints.ts");
/* harmony import */ var _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/toast/toast.service */ "./src/app/shared/toast/toast.service.ts");








let OrdersComponent = class OrdersComponent {
    constructor(pipe, http, toastService) {
        this.http = http;
        this.toastService = toastService;
        this.filter = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.orders = this.filter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(text => this.search(text, pipe)));
    }
    ngOnInit() {
        this.http.get(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_6__["getBookings"], { observe: 'response' }).subscribe((response) => {
            if (response.status === 200) {
                this.initialOrders = [];
                response.body.forEach(order => {
                    this.initialOrders.push(order);
                });
                console.log(this.initialOrders);
            }
            else {
                this.toastService.showDefault('No Orders found! Thanks');
            }
        });
    }
    //
    //
    search(text, pipe) {
        return this.initialOrders.filter(order => {
            const term = text.toLowerCase();
            return order.type.toLowerCase().includes(term)
                || pipe.transform(order.transaction.amount).includes(term);
            // || pipe.transform(country.population).includes(term);
        });
    }
};
OrdersComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] }
];
OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orders',
        template: __webpack_require__(/*! raw-loader!./orders.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/orders/orders.component.html"),
        styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/core/orders/orders.component.css")]
    })
], OrdersComponent);



/***/ }),

/***/ "./src/app/core/profile/profile.component.css":
/*!****************************************************!*\
  !*** ./src/app/core/profile/profile.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upload-form-group{\n    padding: 20px;\n    border: 2px dashed #2d0829;\n}\n\n.upload-form-group input{\n    height: auto;\n}\n\n.image-preview{\n    text-align: center;\n}\n\n.image-preview img{\n    height: 100px;\n    width: auto;\n    max-width: 120px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwbG9hZC1mb3JtLWdyb3Vwe1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAycHggZGFzaGVkICMyZDA4Mjk7XG59XG5cbi51cGxvYWQtZm9ybS1ncm91cCBpbnB1dHtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5pbWFnZS1wcmV2aWV3e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltYWdlLXByZXZpZXcgaW1ne1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWF4LXdpZHRoOiAxMjBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/profile/profile.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/profile/profile.component.ts ***!
  \***************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileComponent = class ProfileComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/core/profile/profile.component.css")]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/core/profile/profileedit/profileedit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/core/profile/profileedit/profileedit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hero-area-profile{\n    background: url('/frontend/uspl/hero-profile.png');\n    background-size: cover;\n    background-position: center;\n    height: 700px;\n}\n\n.upload-form-group>div{\n    margin: auto;\n}\n\n.upload-form-group{\n    padding: 20px;\n    height: 150px;\n    /*border: 2px dashed #2d0829;*/\n}\n\n.upload-form-group input{\n    height: auto;\n}\n\n.image-preview{\n    text-align: left;\n}\n\n.image-preview img{\n    height: 100px;\n    width: auto;\n    max-width: 120px;\n}\n\n.btn{\n    background: white;\n    color: black;\n    border: 1px solid black;\n    border-radius: 38px;\n    font-weight: 700 !important;\n}\n\ninput[type='file'] {\n    color: transparent;\n    border: none;\n}\n\n/*custom tabset bar*/\n\n.hero-area-profile /deep/ .nav-pills .nav-link.active {\n    background-color: transparent !important;\n    border-radius: 0px;\n    border: none;\n    border-bottom: 2px solid black;\n    color: black;\n}\n\n.hero-area-profile /deep/ .nav-pills .nav-link {\n    font-weight: 700;\n    font-size: 1.1em;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wcm9maWxlL3Byb2ZpbGVlZGl0L3Byb2ZpbGVlZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrREFBMEQ7SUFDMUQsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUdBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUdBLG9CQUFvQjs7QUFFcEI7SUFDSSx3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3Byb2ZpbGUvcHJvZmlsZWVkaXQvcHJvZmlsZWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZXJvLWFyZWEtcHJvZmlsZXtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2hlcm8tcHJvZmlsZS5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA3MDBweDtcbn1cblxuLnVwbG9hZC1mb3JtLWdyb3VwPmRpdntcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi51cGxvYWQtZm9ybS1ncm91cHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgLypib3JkZXI6IDJweCBkYXNoZWQgIzJkMDgyOTsqL1xufVxuXG5cbi51cGxvYWQtZm9ybS1ncm91cCBpbnB1dHtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5pbWFnZS1wcmV2aWV3e1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5pbWFnZS1wcmV2aWV3IGltZ3tcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1heC13aWR0aDogMTIwcHg7XG59XG5cbi5idG57XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDM4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xufVxuXG5pbnB1dFt0eXBlPSdmaWxlJ10ge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cblxuLypjdXN0b20gdGFic2V0IGJhciovXG5cbi5oZXJvLWFyZWEtcHJvZmlsZSAvZGVlcC8gLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmhlcm8tYXJlYS1wcm9maWxlIC9kZWVwLyAubmF2LXBpbGxzIC5uYXYtbGluayB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDEuMWVtO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/core/profile/profileedit/profileedit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/profile/profileedit/profileedit.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProfileeditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileeditComponent", function() { return ProfileeditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _model_profile_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/profile.model */ "./src/app/core/model/profile.model.ts");
/* harmony import */ var _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../auth/store/auth.actions */ "./src/app/auth/store/auth.actions.ts");








let ProfileeditComponent = class ProfileeditComponent {
    constructor(fb, store, authService, router) {
        this.fb = fb;
        this.store = store;
        this.authService = authService;
        this.router = router;
        this.navigationRoute = '';
        this.navigationCheck = false;
        this.profileData = new _model_profile_model__WEBPACK_IMPORTED_MODULE_6__["ProfileModel"]();
        this.profileImage = null;
        this.dobProof = null;
        this.addressProof = null;
        this.imgPreview = '../../../assets/icons/uploadPic.png';
        this.fileUploadPreview = '../../../assets/icons/fileUploadPreview.svg';
        this.previewUrlProfile = this.imgPreview;
        this.previewUrlDob = this.imgPreview;
        this.previewUrlAddress = this.imgPreview;
    }
    ngOnInit() {
        this.profileForm = this.fb.group({
            name: [''],
            mobile: [''],
            email: [''],
            dob: [''],
            address: this.fb.group({
                permanentAddress: this.fb.group({
                    pFullAddress: [''],
                    pPostalCode: ['']
                }),
                currentAddress: this.fb.group({
                    cFullAddress: [''],
                    cPostalCode: ['']
                })
            }),
        });
        this.imageForm = this.fb.group({
            profileImage: [],
            dobProof: [],
            addressProof: [],
        });
        this.store.select('authState').subscribe(value => {
            Object.assign(this.profileData, value.profile);
            // this.profileData = value.profile;
            console.log(this.profileData);
            this.profileForm.patchValue(value.profile);
            this.previewUrlProfile = value.profile.profileImage ? value.profile.profileImage : this.imgPreview;
            this.previewUrlAddress = value.profile.addressImage ? value.profile.addressImage : this.imgPreview;
            this.previewUrlDob = value.profile.dobImage ? value.profile.dobImage : this.imgPreview;
        });
    }
    set_address(adrs) {
        if (adrs) {
            const currentAddress = this.profileForm.get(['address', 'currentAddress']).value;
            const permanentAddress = {
                pFullAddress: currentAddress.cFullAddress,
                pPostalCode: currentAddress.cPostalCode
            };
            console.log(currentAddress);
            console.log(permanentAddress);
            this.profileForm.get(['address', 'permanentAddress']).setValue(permanentAddress);
        }
        else {
            this.profileForm.get(['address', 'permanentAddress']).reset();
        }
    }
    imgPreviewProfile(fileInput) {
        this.profileImage = fileInput.target.files[0];
        const mimeType = this.profileImage.type;
        if (mimeType.match(/image\/*/) == null) {
            alert('This should be image file only');
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(this.profileImage);
        reader.onload = () => {
            this.previewUrlProfile = reader.result;
        };
        this.imageForm.controls.profileImage.patchValue(this.profileImage);
    }
    imgPreviewDob(fileInput) {
        this.dobProof = fileInput.target.files[0];
        const mimeType = this.dobProof.type;
        const reader = new FileReader();
        reader.readAsDataURL(this.dobProof);
        reader.onload = () => {
            if (mimeType.match(/image\/*/) == null) {
                this.previewUrlDob = this.fileUploadPreview;
            }
            else {
                this.previewUrlDob = reader.result;
            }
        };
    }
    imgPreviewAddress(fileInput) {
        this.addressProof = fileInput.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(this.addressProof);
        const mimeType = this.addressProof.type;
        reader.onload = () => {
            if (mimeType.match(/image\/*/) == null) {
                // if file type is not image
                this.previewUrlAddress = this.fileUploadPreview;
            }
            else {
                // if file type is image
                this.previewUrlAddress = reader.result;
            }
        };
        this.imageForm.controls.addressProof.patchValue(this.addressProof);
    }
    onSubmit() {
        this.updateProfile(this.profileData, this.profileForm.value);
        this.tabSet.select('upload_image');
    }
    onImageSubmit() {
        const data = new FormData();
        data.append('profileImage', this.profileImage);
        data.append('dobImage', this.dobProof);
        data.append('addressImage', this.addressProof);
        this.store.dispatch(new _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_7__["UploadImages"](data));
        this.tabSet.select('business_profile');
    }
    businessProfileSubmit(form) {
        this.updateProfile(this.profileData.roles.business, form.value);
        if (this.navigationCheck) {
            this.navigationCheck = false;
            this.router.navigate(['/roles/b/list']);
        }
        else {
            this.tabSet.select('activity_expert');
        }
    }
    activityExpertSubmit(form) {
        this.updateProfile(this.profileData.roles.activityExperts, form.value);
        if (this.navigationCheck) {
            this.navigationCheck = false;
            this.router.navigate(['/roles/b/list']);
        }
        else {
            this.tabSet.select('job_seeker');
        }
    }
    jobSeekerSubmit(form) {
        this.updateProfile(this.profileData.roles.jobBoard, form.value);
        this.router.navigate(['/roles/b/list']);
    }
    navigationTrigger() {
        this.navigationCheck = true;
    }
    updateProfile(obj1, obj2) {
        Object.assign(obj1, obj2);
        this.store.dispatch(new _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_7__["TryProfileEdit"](this.profileData));
    }
};
ProfileeditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('t', { static: false })
], ProfileeditComponent.prototype, "tabSet", void 0);
ProfileeditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profileedit',
        template: __webpack_require__(/*! raw-loader!./profileedit.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/profile/profileedit/profileedit.component.html"),
        styles: [__webpack_require__(/*! ./profileedit.component.css */ "./src/app/core/profile/profileedit/profileedit.component.css")]
    })
], ProfileeditComponent);



/***/ }),

/***/ "./src/app/core/profile/profileview/profileview.component.css":
/*!********************************************************************!*\
  !*** ./src/app/core/profile/profileview/profileview.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n    font-weight: 700;\n    font-size: 3.5rem;\n}\n\n.profile-data{\n    /*padding-left: 100px;*/\n    font-size: 1.5em;\n}\n\n.profile-data > div {\n    padding: 5px;\n}\n\n.profile-image img {\n    width: 64px;\n    height: 64px;\n    border-radius: 50%;\n    /*border: 2px solid #2d0829;*/\n}\n\n.edit-icon img{\n    width: 40px;\n}\n\n.profile-bg img{\n    height: 600px;\n    margin-right: -40px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wcm9maWxlL3Byb2ZpbGV2aWV3L3Byb2ZpbGV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29yZS9wcm9maWxlL3Byb2ZpbGV2aWV3L3Byb2ZpbGV2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDMuNXJlbTtcbn1cblxuLnByb2ZpbGUtZGF0YXtcbiAgICAvKnBhZGRpbmctbGVmdDogMTAwcHg7Ki9cbiAgICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4ucHJvZmlsZS1kYXRhID4gZGl2IHtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi5wcm9maWxlLWltYWdlIGltZyB7XG4gICAgd2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAvKmJvcmRlcjogMnB4IHNvbGlkICMyZDA4Mjk7Ki9cbn1cblxuLmVkaXQtaWNvbiBpbWd7XG4gICAgd2lkdGg6IDQwcHg7XG59XG5cbi5wcm9maWxlLWJnIGltZ3tcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIG1hcmdpbi1yaWdodDogLTQwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/core/profile/profileview/profileview.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/profile/profileview/profileview.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProfileviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileviewComponent", function() { return ProfileviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth/auth.service */ "./src/app/auth/auth.service.ts");




let ProfileviewComponent = class ProfileviewComponent {
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
        this.profileImage = '../../../assets/icons/user.png';
    }
    ngOnInit() {
        this.store.select('authState').subscribe(value => {
            this.profileData = value.profile;
            this.profileImage = this.profileData.profileImage === '' ? '../../../assets/icons/user.png' : this.profileData.profileImage;
        });
    }
};
ProfileviewComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
ProfileviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profileview',
        template: __webpack_require__(/*! raw-loader!./profileview.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/profile/profileview/profileview.component.html"),
        styles: [__webpack_require__(/*! ./profileview.component.css */ "./src/app/core/profile/profileview/profileview.component.css")]
    })
], ProfileviewComponent);



/***/ }),

/***/ "./src/app/shared/active-class.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/active-class.directive.ts ***!
  \**************************************************/
/*! exports provided: ActiveClassDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveClassDirective", function() { return ActiveClassDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ActiveClassDirective = class ActiveClassDirective {
    constructor() {
        this.isActive = false;
    }
    toggleOpen() {
        this.isActive = !this.isActive;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.active')
], ActiveClassDirective.prototype, "isActive", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')
], ActiveClassDirective.prototype, "toggleOpen", null);
ActiveClassDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appActiveClass]'
    })
], ActiveClassDirective);



/***/ }),

/***/ "./src/app/shared/auth.interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/shared/auth.interceptor.ts ***!
  \********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let AuthInterceptor = class AuthInterceptor {
    constructor(store) {
        this.store = store;
    }
    intercept(req, next) {
        return this.store.select('authState').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((authState) => {
            const token = authState.token ? authState.token : '';
            const cloneReq = req.clone({ headers: req.headers.append('Authorization', token) });
            return next.handle(cloneReq);
        }));
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthInterceptor);



/***/ }),

/***/ "./src/app/shared/camel-to-sentance-case.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/camel-to-sentance-case.pipe.ts ***!
  \*******************************************************/
/*! exports provided: CamelToSentanceCasePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamelToSentanceCasePipe", function() { return CamelToSentanceCasePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CamelToSentanceCasePipe = class CamelToSentanceCasePipe {
    transform(value) {
        return ((value.replace(/([a-z])([A-Z][a-z])/g, '$1 $2')
            .charAt(0).toUpperCase() + value
            .slice(1)
            .replace(/([a-z])([A-Z][a-z])/g, '$1 $2')).replace(/\w+[.!?]?$/, ''));
    }
};
CamelToSentanceCasePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'camelToSentanceCase'
    })
], CamelToSentanceCasePipe);



/***/ }),

/***/ "./src/app/shared/loader.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/loader.interceptor.ts ***!
  \**********************************************/
/*! exports provided: LoaderInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptorService", function() { return LoaderInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/loader/loader.service */ "./src/app/core/loader/loader.service.ts");





let LoaderInterceptorService = class LoaderInterceptorService {
    constructor(loaderService) {
        this.loaderService = loaderService;
    }
    intercept(req, next) {
        this.showLoader();
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                this.onEnd();
            }
        }, (err) => {
            this.onEnd();
        }));
    }
    onEnd() {
        this.hideLoader();
    }
    showLoader() {
        this.loaderService.show();
    }
    hideLoader() {
        this.loaderService.hide();
    }
};
LoaderInterceptorService.ctorParameters = () => [
    { type: _core_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }
];
LoaderInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoaderInterceptorService);



/***/ }),

/***/ "./src/app/shared/response.intercept.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/response.intercept.ts ***!
  \**********************************************/
/*! exports provided: ResponseIntercept */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseIntercept", function() { return ResponseIntercept; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/store/auth.actions */ "./src/app/auth/store/auth.actions.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _toast_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toast/toast.service */ "./src/app/shared/toast/toast.service.ts");







let ResponseIntercept = class ResponseIntercept {
    constructor(store, toastService) {
        this.store = store;
        this.toastService = toastService;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(event => {
            console.log(event);
        }, e => {
            if (e instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"] && e.status === 401) {
                this.toastService.showDanger('Unauthorized Request !! You will be logged out now.');
                setTimeout(() => {
                    this.store.dispatch(new _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["LogOut"]());
                }, 3000);
            }
        }));
    }
};
ResponseIntercept.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
    { type: _toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }
];
ResponseIntercept = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])()
], ResponseIntercept);



/***/ }),

/***/ "./src/app/shared/serverEndpoints.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/serverEndpoints.ts ***!
  \*******************************************/
/*! exports provided: fbLogin, googleLogin, newBooking, loginUrl, authSignIn, signupUrl, fetchRoleUrl, fetchSingleRole, getUserByMobile, editRole, editProfile, changePassword, editrealestate, fetchrealestate, uploadrealestateImages, saverealEstateProperty, uploadrealestatePropertyImages, fetechrealestateProperties, editfinance, fetchfinance, uploadfinanceImages, editservicesuppliers, fetchservicesuppliers, uploadservicesuppliersImages, edittravelcurator, fetchtravelcurator, uploadtravelcuratorImages, edittravelagent, fetchtravelagent, uploadtravelagentImages, editProperties, fetchProperties, uploadPropertiesImages, editTransportation, fetchTransportation, saveVehicles, fetchVehicles, uploadTransportationImages, uploadVehicleImages, sendOtp, verifyOtp, uploadProfileImages, newJob, fetchJobByUser, editJob, saveTrek, fetchTreks, uploadTrekImage, trekList, trekQuery, trekDetails, trekPricing, saveRTrip, fetchRTrips, uploadRTripImage, RTripQuery, RTripDetails, RTripPricing, saveEvent, fetchEvents, uploadEventImage, eventQuery, eventDetails, eventPricing, contactUs, getBookings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fbLogin", function() { return fbLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleLogin", function() { return googleLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newBooking", function() { return newBooking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUrl", function() { return loginUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authSignIn", function() { return authSignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signupUrl", function() { return signupUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRoleUrl", function() { return fetchRoleUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSingleRole", function() { return fetchSingleRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserByMobile", function() { return getUserByMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editRole", function() { return editRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editProfile", function() { return editProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePassword", function() { return changePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editrealestate", function() { return editrealestate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchrealestate", function() { return fetchrealestate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadrealestateImages", function() { return uploadrealestateImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saverealEstateProperty", function() { return saverealEstateProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadrealestatePropertyImages", function() { return uploadrealestatePropertyImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetechrealestateProperties", function() { return fetechrealestateProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editfinance", function() { return editfinance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchfinance", function() { return fetchfinance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadfinanceImages", function() { return uploadfinanceImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editservicesuppliers", function() { return editservicesuppliers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchservicesuppliers", function() { return fetchservicesuppliers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadservicesuppliersImages", function() { return uploadservicesuppliersImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edittravelcurator", function() { return edittravelcurator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchtravelcurator", function() { return fetchtravelcurator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadtravelcuratorImages", function() { return uploadtravelcuratorImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edittravelagent", function() { return edittravelagent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchtravelagent", function() { return fetchtravelagent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadtravelagentImages", function() { return uploadtravelagentImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editProperties", function() { return editProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProperties", function() { return fetchProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadPropertiesImages", function() { return uploadPropertiesImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editTransportation", function() { return editTransportation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTransportation", function() { return fetchTransportation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveVehicles", function() { return saveVehicles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchVehicles", function() { return fetchVehicles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadTransportationImages", function() { return uploadTransportationImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadVehicleImages", function() { return uploadVehicleImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendOtp", function() { return sendOtp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyOtp", function() { return verifyOtp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadProfileImages", function() { return uploadProfileImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newJob", function() { return newJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchJobByUser", function() { return fetchJobByUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editJob", function() { return editJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveTrek", function() { return saveTrek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTreks", function() { return fetchTreks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadTrekImage", function() { return uploadTrekImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trekList", function() { return trekList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trekQuery", function() { return trekQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trekDetails", function() { return trekDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trekPricing", function() { return trekPricing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveRTrip", function() { return saveRTrip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRTrips", function() { return fetchRTrips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadRTripImage", function() { return uploadRTripImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTripQuery", function() { return RTripQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTripDetails", function() { return RTripDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTripPricing", function() { return RTripPricing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveEvent", function() { return saveEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchEvents", function() { return fetchEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadEventImage", function() { return uploadEventImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventQuery", function() { return eventQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventDetails", function() { return eventDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventPricing", function() { return eventPricing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactUs", function() { return contactUs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBookings", function() { return getBookings; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");

// this is the generic url
const genericUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl;
const fbLogin = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].webUrl + 'socialMediaRedirect/facebook';
const googleLogin = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].webUrl + 'socialMediaRedirect/google';
const newBooking = genericUrl + 'newBooking';
const loginUrl = genericUrl + 'login';
const authSignIn = genericUrl + 'authlogin';
const signupUrl = genericUrl + 'register';
const fetchRoleUrl = genericUrl + 'get_all_roles';
const fetchSingleRole = genericUrl + 'get_role';
const getUserByMobile = genericUrl + 'getUserByMobile';
const editRole = genericUrl + 'edit_user_roles';
const editProfile = genericUrl + 'edit_profile';
const changePassword = genericUrl + 'change_password';
// realestate routes
const editrealestate = genericUrl + 'realestate/edit_realestate';
const fetchrealestate = genericUrl + 'realestate/get_realestate';
const uploadrealestateImages = genericUrl + 'realestate/upload_images';
const saverealEstateProperty = genericUrl + 'realestate/save_property';
const uploadrealestatePropertyImages = genericUrl + 'realestate/upload_property_images';
const fetechrealestateProperties = genericUrl + 'realestate/fetch_all_properties';
// finance routes
const editfinance = genericUrl + 'finance/edit_finance';
const fetchfinance = genericUrl + 'finance/get_finance';
const uploadfinanceImages = genericUrl + 'finance/upload_images';
// servicesuppliers routes
const editservicesuppliers = genericUrl + 'servicesuppliers/edit_servicesuppliers';
const fetchservicesuppliers = genericUrl + 'servicesuppliers/get_servicesuppliers';
const uploadservicesuppliersImages = genericUrl + 'servicesuppliers/upload_images';
// travel curator routes
const edittravelcurator = genericUrl + 'travelcurator/edit_travelcurator';
const fetchtravelcurator = genericUrl + 'travelcurator/get_travelcurator';
const uploadtravelcuratorImages = genericUrl + 'travelcurator/upload_images';
// travel agent routes
const edittravelagent = genericUrl + 'travelagent/edit_travelagent';
const fetchtravelagent = genericUrl + 'travelagent/get_travelagent';
const uploadtravelagentImages = genericUrl + 'travelagent/upload_images';
// properties routes
const editProperties = genericUrl + 'properties/edit_properties';
const fetchProperties = genericUrl + 'properties/get_properties';
const uploadPropertiesImages = genericUrl + 'properties/upload_images';
// transportation routes
const editTransportation = genericUrl + 'transportation/edit_transportation';
const fetchTransportation = genericUrl + 'transportation/get_transportation';
const saveVehicles = genericUrl + 'transportation/save_vehicles';
const fetchVehicles = genericUrl + 'transportation/fetch_vehicles';
const uploadTransportationImages = genericUrl + 'transportation/upload_images';
const uploadVehicleImages = genericUrl + 'transportation/upload_vehicle_images';
const sendOtp = genericUrl + 'send_otp';
const verifyOtp = genericUrl + 'verify_otp';
// upload urls
const uploadProfileImages = genericUrl + 'upload_profile_images';
// jobs urls
const newJob = genericUrl + 'jobs/new_job';
const fetchJobByUser = genericUrl + 'jobs/get_by_user';
const editJob = genericUrl + 'jobs/edit_job';
// treks url
const saveTrek = genericUrl + 'treks/save_trek';
const fetchTreks = genericUrl + 'treks/fetch_by_user';
const uploadTrekImage = genericUrl + 'treks/upload_image';
const trekList = genericUrl + 'treks/trek_list';
const trekQuery = genericUrl + 'treks/trek_query';
const trekDetails = genericUrl + 'treks/trek_details';
const trekPricing = genericUrl + 'treks/getTrekPricing';
// road trip url
const saveRTrip = genericUrl + 'RTrips/save_RTrip';
const fetchRTrips = genericUrl + 'RTrips/fetch_by_user';
const uploadRTripImage = genericUrl + 'RTrips/upload_image';
const RTripQuery = genericUrl + 'RTrips/RTrip_query';
const RTripDetails = genericUrl + 'RTrips/RTrip_details';
const RTripPricing = genericUrl + 'RTrips/getRTripPricing';
// events url
const saveEvent = genericUrl + 'events/save_event';
const fetchEvents = genericUrl + 'events/fetch_by_user';
const uploadEventImage = genericUrl + 'events/upload_image';
const eventQuery = genericUrl + 'events/event_query';
const eventDetails = genericUrl + 'events/event_details';
const eventPricing = genericUrl + 'events/getEventPricing';
const contactUs = genericUrl + 'contact_us';
const getBookings = genericUrl + 'getBookings';


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _camel_to_sentance_case_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./camel-to-sentance-case.pipe */ "./src/app/shared/camel-to-sentance-case.pipe.ts");
/* harmony import */ var _active_class_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./active-class.directive */ "./src/app/shared/active-class.directive.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_7__);








let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _camel_to_sentance_case_pipe__WEBPACK_IMPORTED_MODULE_3__["CamelToSentanceCasePipe"],
            _active_class_directive__WEBPACK_IMPORTED_MODULE_4__["ActiveClassDirective"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_7__["GooglePlaceModule"]
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _camel_to_sentance_case_pipe__WEBPACK_IMPORTED_MODULE_3__["CamelToSentanceCasePipe"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_7__["GooglePlaceModule"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/toast/toast.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/toast/toast.service.ts ***!
  \***********************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ToastService = class ToastService {
    constructor() {
        this.toasts = [];
    }
    showDefault(textOrTpl, options = {}) {
        this.toasts.push({ textOrTpl, classname: 'bg-bluish text-light', delay: 3000 });
    }
    showSuccess(textOrTpl) {
        this.toasts.push({ textOrTpl, classname: 'bg-success text-light', delay: 4000 });
    }
    showDanger(textOrTpl) {
        this.toasts.push({ textOrTpl, classname: 'bg-danger text-light', delay: 5000 });
    }
    remove(toast) {
        this.toasts = this.toasts.filter(t => t !== toast);
    }
};
ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToastService);



/***/ }),

/***/ "./src/app/store/app.reducer.ts":
/*!**************************************!*\
  !*** ./src/app/store/app.reducer.ts ***!
  \**************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _auth_store_auth_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/store/auth.reducer */ "./src/app/auth/store/auth.reducer.ts");

const reducers = {
    authState: _auth_store_auth_reducer__WEBPACK_IMPORTED_MODULE_0__["AuthReducer"]
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'https://dev.unfoldingskies.com/api/',
    webUrl: 'https://dev.unfoldingskies.com/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/usplFrontend-master (1)/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map