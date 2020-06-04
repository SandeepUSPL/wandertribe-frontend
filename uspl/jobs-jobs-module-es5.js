(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["jobs-jobs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/jobs/applicantlist/applicantlist.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/jobs/applicantlist/applicantlist.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"h3 text-bold mb-5 text-center\">Applicants</div>\n    </div>\n\n    <div class=\"col-md-12 applicant-list\">\n\n        <div class=\"row justify-content-center\">\n            <h3>\n                No Applicants Found\n            </h3>\n        </div>\n\n        <!--<div class=\"row applicant-list-item\">-->\n\n            <!--<div class=\"col-md-5\">-->\n                <!--<div class=\"row\">-->\n                    <!--<div class=\"col-md-6\">-->\n                        <!--Name-->\n                    <!--</div>-->\n                    <!--<div class=\"col-md-6\">-->\n                        <!--<span>Saurav Kumar</span>-->\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"row\">-->\n                    <!--<div class=\"col-md-6\">-->\n                        <!--Experience-->\n                    <!--</div>-->\n                    <!--<div class=\"col-md-6\">-->\n                        <!--<span>3</span> years-->\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"row\">-->\n                    <!--<div class=\"col-md-6\">-->\n                        <!--Available From-->\n                    <!--</div>-->\n                    <!--<div class=\"col-md-6\">-->\n                        <!--<span>26/3/2019</span>-->\n                    <!--</div>-->\n                <!--</div>-->\n            <!--</div>-->\n\n            <!--<div class=\"col-md-4\">-->\n                <!--<div class=\"row\">-->\n                    <!--<div class=\"col-md-6\">-->\n                        <!--Position-->\n                    <!--</div>-->\n                    <!--<div class=\"col-md-6\">-->\n                        <!--<span>Manager</span>-->\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"row\">-->\n                    <!--<div class=\"col-md-6\">-->\n                        <!--Location-->\n                    <!--</div>-->\n                    <!--<div class=\"col-md-6\">-->\n                        <!--<span>Delhi</span>-->\n                    <!--</div>-->\n                <!--</div>-->\n            <!--</div>-->\n\n            <!--<div class=\"col-md-3 d-flex m-auto applicant-action\">-->\n                <!--<button class=\"btn btn-blue\">Ask For CV</button>-->\n            <!--</div>-->\n\n        <!--</div>-->\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/jobs/dashboard/dashboard.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/jobs/dashboard/dashboard.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"h3 text-bold mb-5 text-center\">Your Dashboard</div>\n    </div>\n\n    <div class=\"col-md-12 text-center\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"info-box-card\">\n                    <div>Listed Job Posting</div>\n                    <div>\n                        <span>0</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"info-box-card\">\n                    <div>Listed Job Posting</div>\n                    <div>\n                        <span>0</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"info-box-card\">\n                    <div>New Applicants</div>\n                    <div>\n                        <span>0</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/jobs/joblist/joblist.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/jobs/joblist/joblist.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"h3 text-bold mb-5 text-center\">View Your Listings</div>\n  </div>\n  <div class=\"col-md-12 job-list\" *ngIf=\"jobs.length>0; else elseBlock\">\n\n    <div class=\"row job-list-item\" *ngFor=\"let job of jobs;let i = index\">\n\n      <div class=\"col-md-5\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            Experience\n          </div>\n          <div class=\"col-md-6\">\n            <span>{{job.experience.year}}</span> years\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            Start Date\n          </div>\n          <div class=\"col-md-6\">\n            <span> {{job.startDate.day + '-' + job.startDate.month + '-' + job.startDate.year}}</span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <span>{{job.location}}</span>\n          </div>\n          <div class=\"col-md-6\">\n            <span>{{job.commission|camelToSentanceCase}}</span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-6 d-flex m-auto\">\n        <div class=\"h2 text-bold\">{{job.jobType|camelToSentanceCase}}</div>\n      </div>\n\n      <div class=\"col-md-1 job-action\">\n        <div><img src=\"../../../../../assets/icons/edit-black.png\" alt=\"\" (click)=\"editJob(i)\"></div>\n        <div><img src=\"../../../../../assets/icons/delete.png\" alt=\"\" (click)=\"deleteJob(i)\"></div>\n      </div>\n\n    </div>\n\n    <!--    </ng-template>-->\n\n  </div>\n  <ng-template #elseBlock>\n    <div class=\"col-md-12 text-center\">\n      <h3>\n        No jobs found\n      </h3>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/jobs/jobs.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/jobs/jobs.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-2 business-sidebar\">\n    <div class=\"sidebar pt-5\">\n      <div class=\"h5 text-center text-bold text-white\">Jobs</div>\n      <a routerLink=\"dashboard\" routerLinkActive=\"active\"><span><img\n        src=\"../../../../assets/icons/business/dashboard.png\" alt=\"\"></span>Dashboard</a>\n      <a routerLink=\"list\" routerLinkActive=\"active\"><span><img src=\"../../../../assets/icons/business/list.png\" alt=\"\"></span>Listing</a>\n      <a routerLink=\"postJob\" routerLinkActive=\"active\"><span><img src=\"../../../../assets/icons/business/jobs.png\"\n                                                                   alt=\"\"></span>Post Job</a>\n      <a routerLink=\"applicant\" routerLinkActive=\"active\"><span><img\n        src=\"../../../../assets/icons/business/applicant.png\" alt=\"\"></span>Applicants</a>\n    </div>\n  </div>\n  <div class=\"col-md-10 scroll-view pt-5\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/jobs/postjob/postjob.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/jobs/postjob/postjob.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"h3 text-bold mb-5 text-center\">Post Job</div>\n  </div>\n\n  <div class=\"col-md-8 offset-md-2\">\n    <form action=\"\" [formGroup]=\"jobForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"row form-group\">\n        <div class=\"col-md-5\"><label>Type of Job</label></div>\n        <div class=\"col-md-7\">\n          <select class=\"form-control\" formControlName=\"jobType\">\n            <option value=\"hotelStaffJob\">Hotel Staff</option>\n            <option value=\"wellnessMeditationJob\">Wellness Meditation</option>\n            <option value=\"sportsGuideJob\">Sports Guide</option>\n            <option value=\"hobbyExpertJob\">Hobby Expert</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"row form-group\">\n        <div class=\"col-md-5\"><label>Job Title</label></div>\n        <div class=\"col-md-7\">\n          <input class=\"form-control\" type=\"text\" formControlName=\"jobTitle\">\n        </div>\n      </div>\n      <div class=\"row form-group\">\n        <div class=\"col-md-5\"><label>Start Date</label></div>\n        <div class=\"col-md-7\">\n          <input placeholder=\"yyyy-mm-dd\" name=\"sd\" ngbDatepicker\n                 #sd=\"ngbDatepicker\"\n                 class=\"form-control\" (click)=\"sd.toggle()\" autocomplete=\"off\" formControlName=\"startDate\">\n        </div>\n      </div>\n      <div class=\"row form-group\">\n        <div class=\"col-md-5\"><label>Location</label></div>\n        <div class=\"col-md-7\">\n          <input class=\"form-control\" type=\"text\" formControlName=\"location\">\n        </div>\n      </div>\n\n      <div class=\"row form-group\">\n        <div class=\"col-md-5\"><label>Experience</label></div>\n        <div class=\"col-md-7 d-flex\" formGroupName=\"experience\">\n          <div class=\"w-50 pr-2\">\n            <input class=\"form-control\" type=\"number\" placeholder=\"month\" formControlName=\"month\" max=\"12\" oninput=\"validity.valid||(value='');\">\n          </div>\n          <div class=\"w-50\">\n            <input class=\"form-control\" type=\"number\" placeholder=\"year\" formControlName=\"year\" max=\"50\" oninput=\"validity.valid||(value='');\">\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row form-group\">\n        <div class=\"col-md-12 d-flex\">\n          <div class=\"pr-5\"><input type=\"radio\" name=\"commission\" value=\"fulltime\"\n                                   formControlName=\"commission\"> Full Time\n          </div>\n          <div class=\"pr-5\"><input type=\"radio\" name=\"commission\" value=\"parttime\"\n                                   formControlName=\"commission\"> Part Time\n          </div>\n          <div class=\"pr-5\"><input type=\"radio\" name=\"commission\" value=\"contract\"\n                                   formControlName=\"commission\"> Contract\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row form-group\">\n        <div class=\"col-md-5\"><label>Email for Contact</label></div>\n        <div class=\"col-md-7\">\n          <input class=\"form-control\" type=\"email\" formControlName=\"email\">\n        </div>\n      </div>\n\n      <div class=\"row form-group\">\n        <div class=\"col-md-5\"><label>Add Skills</label></div>\n        <div class=\"col-md-7\">\n          <div class=\"row\">\n            <div class=\"col-md-7\">\n              <input class=\"form-control\" type=\"text\" [ngbTypeahead]=\"search\" #skl>\n            </div>\n            <div class=\"col-md-4\">\n              <button class=\"btn btn-yellow\" type=\"button\" (click)=\"addSkill(skl.value)\" (click)=\"skl.value=''\">Add\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row skills-box\" *ngIf=\"jobForm.get('skills').value.length > 0\">\n        <div class=\"chip\" *ngFor=\"let skill of jobForm.get('skills').value;let i=index\">\n          {{skill}}\n          <span class=\"closebtn\" (click)=\"removeSkill(i)\">&times;</span>\n        </div>\n      </div>\n\n      <div class=\"row form-group\">\n        <div class=\"col-md-12\"><label>Description</label></div>\n        <div class=\"col-md-12\">\n          <textarea class=\"form-control w-100\" ROWS=\"5\" formControlName=\"description\"></textarea>\n        </div>\n      </div>\n\n      <div class=\"row form-group\">\n        <div class=\"col-md-12 text-center\">\n          <button class=\"btn btn-yellow\" *ngIf=\"!editMode\">Post Job</button>\n          <button class=\"btn btn-yellow\" *ngIf=\"editMode\">Update Job</button>\n        </div>\n      </div>\n\n    </form>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/roles/business/jobs/applicantlist/applicantlist.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/roles/business/jobs/applicantlist/applicantlist.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".applicant-list-item{\n    border: 2px solid black;\n    border-radius: 10px;\n    padding: 10px;\n    margin: 20px 10px;\n}\n\n.applicant-action img{\n    height: 28px;\n    margin: 5px;\n    cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYnVzaW5lc3Mvam9icy9hcHBsaWNhbnRsaXN0L2FwcGxpY2FudGxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2J1c2luZXNzL2pvYnMvYXBwbGljYW50bGlzdC9hcHBsaWNhbnRsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwbGljYW50LWxpc3QtaXRlbXtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAyMHB4IDEwcHg7XG59XG5cbi5hcHBsaWNhbnQtYWN0aW9uIGltZ3tcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/roles/business/jobs/applicantlist/applicantlist.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/roles/business/jobs/applicantlist/applicantlist.component.ts ***!
  \******************************************************************************/
/*! exports provided: ApplicantlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicantlistComponent", function() { return ApplicantlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ApplicantlistComponent = /** @class */ (function () {
    function ApplicantlistComponent() {
    }
    ApplicantlistComponent.prototype.ngOnInit = function () {
    };
    ApplicantlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-applicantlist',
            template: __webpack_require__(/*! raw-loader!./applicantlist.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/jobs/applicantlist/applicantlist.component.html"),
            styles: [__webpack_require__(/*! ./applicantlist.component.css */ "./src/app/roles/business/jobs/applicantlist/applicantlist.component.css")]
        })
    ], ApplicantlistComponent);
    return ApplicantlistComponent;
}());



/***/ }),

/***/ "./src/app/roles/business/jobs/dashboard/dashboard.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/roles/business/jobs/dashboard/dashboard.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info-box-tile{\n    height: 160px;\n    width: auto;\n    text-align: center;\n    border-radius: 20px;\n    box-shadow: 1px 2px 10px 3px lightgrey;\n    background: linear-gradient(white 60%, #4b6cdb 40%);\n}\n\n.info-box-tile .info-box-top{\n    padding-top: 20px;\n    color: black;\n    height: 60%;\n    font-weight: 700;\n    font-size: 1.75rem;\n}\n\n.info-box-tile .info-box-bottom{\n    padding-top: 10px;\n    color: white;\n    height: 40%;\n}\n\n.info-box-card{\n    min-height: 100px;\n    padding: 20px 10px;\n    background: #4b6cdb;\n    color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYnVzaW5lc3Mvam9icy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0NBQXNDO0lBQ3RDLG1EQUFtRDtBQUN2RDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9idXNpbmVzcy9qb2JzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZvLWJveC10aWxle1xuICAgIGhlaWdodDogMTYwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAxMHB4IDNweCBsaWdodGdyZXk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHdoaXRlIDYwJSwgIzRiNmNkYiA0MCUpO1xufVxuXG4uaW5mby1ib3gtdGlsZSAuaW5mby1ib3gtdG9we1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBoZWlnaHQ6IDYwJTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbn1cblxuLmluZm8tYm94LXRpbGUgLmluZm8tYm94LWJvdHRvbXtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiA0MCU7XG59XG5cbi5pbmZvLWJveC1jYXJke1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNGI2Y2RiO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/roles/business/jobs/dashboard/dashboard.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/roles/business/jobs/dashboard/dashboard.component.ts ***!
  \**********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/jobs/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/roles/business/jobs/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/roles/business/jobs/joblist/joblist.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/roles/business/jobs/joblist/joblist.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".job-list-item{\n    border: 2px solid black;\n    border-radius: 10px;\n    padding: 10px;\n    margin: 20px 10px;\n}\n\n.job-action img{\n    height: 28px;\n    margin: 5px;\n    cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYnVzaW5lc3Mvam9icy9qb2JsaXN0L2pvYmxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2J1c2luZXNzL2pvYnMvam9ibGlzdC9qb2JsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuam9iLWxpc3QtaXRlbXtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAyMHB4IDEwcHg7XG59XG5cbi5qb2ItYWN0aW9uIGltZ3tcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/roles/business/jobs/joblist/joblist.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/roles/business/jobs/joblist/joblist.component.ts ***!
  \******************************************************************/
/*! exports provided: JoblistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoblistComponent", function() { return JoblistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_jobs_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/jobs.actions */ "./src/app/roles/business/jobs/store/jobs.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var JoblistComponent = /** @class */ (function () {
    function JoblistComponent(store, router, route) {
        this.store = store;
        this.router = router;
        this.route = route;
    }
    JoblistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('jobs').subscribe(function (value) {
            console.log(value);
            if (value.jobs !== undefined) {
                _this.jobs = value.jobs;
            }
        });
    };
    JoblistComponent.prototype.editJob = function (index) {
        this.router.navigate(['../editJob', index], { relativeTo: this.route });
    };
    JoblistComponent.prototype.deleteJob = function (index) {
        this.store.dispatch(new _store_jobs_actions__WEBPACK_IMPORTED_MODULE_3__["TryDeleteJob"](this.jobs[index]._id));
    };
    JoblistComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    JoblistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-joblist',
            template: __webpack_require__(/*! raw-loader!./joblist.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/jobs/joblist/joblist.component.html"),
            styles: [__webpack_require__(/*! ./joblist.component.css */ "./src/app/roles/business/jobs/joblist/joblist.component.css")]
        })
    ], JoblistComponent);
    return JoblistComponent;
}());



/***/ }),

/***/ "./src/app/roles/business/jobs/jobs-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/roles/business/jobs/jobs-routing.module.ts ***!
  \************************************************************/
/*! exports provided: JobsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsRoutingModule", function() { return JobsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _jobs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jobs.component */ "./src/app/roles/business/jobs/jobs.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/roles/business/jobs/dashboard/dashboard.component.ts");
/* harmony import */ var _postjob_postjob_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./postjob/postjob.component */ "./src/app/roles/business/jobs/postjob/postjob.component.ts");
/* harmony import */ var _joblist_joblist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./joblist/joblist.component */ "./src/app/roles/business/jobs/joblist/joblist.component.ts");
/* harmony import */ var _applicantlist_applicantlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./applicantlist/applicantlist.component */ "./src/app/roles/business/jobs/applicantlist/applicantlist.component.ts");








var routes = [
    {
        path: '', component: _jobs_component__WEBPACK_IMPORTED_MODULE_3__["JobsComponent"], children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
            { path: 'postJob', component: _postjob_postjob_component__WEBPACK_IMPORTED_MODULE_5__["PostjobComponent"] },
            { path: 'editJob/:id', component: _postjob_postjob_component__WEBPACK_IMPORTED_MODULE_5__["PostjobComponent"] },
            { path: 'list', component: _joblist_joblist_component__WEBPACK_IMPORTED_MODULE_6__["JoblistComponent"] },
            { path: 'applicant', component: _applicantlist_applicantlist_component__WEBPACK_IMPORTED_MODULE_7__["ApplicantlistComponent"] }
        ]
    },
];
var JobsRoutingModule = /** @class */ (function () {
    function JobsRoutingModule() {
    }
    JobsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], JobsRoutingModule);
    return JobsRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/business/jobs/jobs.component.css":
/*!********************************************************!*\
  !*** ./src/app/roles/business/jobs/jobs.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2J1c2luZXNzL2pvYnMvam9icy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/roles/business/jobs/jobs.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/roles/business/jobs/jobs.component.ts ***!
  \*******************************************************/
/*! exports provided: JobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsComponent", function() { return JobsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_jobs_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/jobs.actions */ "./src/app/roles/business/jobs/store/jobs.actions.ts");
/* harmony import */ var _sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sidebar/sidebar.service */ "./src/app/roles/business/sidebar/sidebar.service.ts");





var JobsComponent = /** @class */ (function () {
    function JobsComponent(store, sidebarService) {
        this.store = store;
        this.sidebarService = sidebarService;
    }
    JobsComponent.prototype.ngOnInit = function () {
        // this.sidebarService.show();
        this.store.dispatch(new _store_jobs_actions__WEBPACK_IMPORTED_MODULE_3__["TryFetchJobs"]());
    };
    JobsComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"] }
    ]; };
    JobsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jobs',
            template: __webpack_require__(/*! raw-loader!./jobs.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/jobs/jobs.component.html"),
            styles: [__webpack_require__(/*! ./jobs.component.css */ "./src/app/roles/business/jobs/jobs.component.css")]
        })
    ], JobsComponent);
    return JobsComponent;
}());



/***/ }),

/***/ "./src/app/roles/business/jobs/jobs.model.ts":
/*!***************************************************!*\
  !*** ./src/app/roles/business/jobs/jobs.model.ts ***!
  \***************************************************/
/*! exports provided: JobsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsModel", function() { return JobsModel; });
var JobsModel = /** @class */ (function () {
    function JobsModel(_id, jobType, jobTitle, startDate, location, commission, email, skills, description, experience, postedBy) {
        this._id = _id;
        this.jobType = jobType;
        this.jobTitle = jobTitle;
        this.startDate = startDate;
        this.location = location;
        this.commission = commission;
        this.email = email;
        this.skills = skills;
        this.description = description;
        this.experience = experience;
        this.postedBy = postedBy;
    }
    JobsModel.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: undefined },
        { type: String },
        { type: String },
        { type: String },
        { type: Array },
        { type: String },
        { type: undefined },
        { type: String }
    ]; };
    return JobsModel;
}());



/***/ }),

/***/ "./src/app/roles/business/jobs/jobs.module.ts":
/*!****************************************************!*\
  !*** ./src/app/roles/business/jobs/jobs.module.ts ***!
  \****************************************************/
/*! exports provided: JobsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsModule", function() { return JobsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _jobs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jobs-routing.module */ "./src/app/roles/business/jobs/jobs-routing.module.ts");
/* harmony import */ var _jobs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jobs.component */ "./src/app/roles/business/jobs/jobs.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/roles/business/jobs/dashboard/dashboard.component.ts");
/* harmony import */ var _postjob_postjob_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./postjob/postjob.component */ "./src/app/roles/business/jobs/postjob/postjob.component.ts");
/* harmony import */ var _joblist_joblist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./joblist/joblist.component */ "./src/app/roles/business/jobs/joblist/joblist.component.ts");
/* harmony import */ var _applicantlist_applicantlist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./applicantlist/applicantlist.component */ "./src/app/roles/business/jobs/applicantlist/applicantlist.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_jobs_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store/jobs.reducer */ "./src/app/roles/business/jobs/store/jobs.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_jobs_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./store/jobs.effects */ "./src/app/roles/business/jobs/store/jobs.effects.ts");
/* harmony import */ var _jobs_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./jobs.service */ "./src/app/roles/business/jobs/jobs.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");

















var JobsModule = /** @class */ (function () {
    function JobsModule() {
    }
    JobsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _jobs_component__WEBPACK_IMPORTED_MODULE_6__["JobsComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _postjob_postjob_component__WEBPACK_IMPORTED_MODULE_8__["PostjobComponent"],
                _joblist_joblist_component__WEBPACK_IMPORTED_MODULE_9__["JoblistComponent"],
                _applicantlist_applicantlist_component__WEBPACK_IMPORTED_MODULE_10__["ApplicantlistComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _jobs_routing_module__WEBPACK_IMPORTED_MODULE_5__["JobsRoutingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forFeature('jobs', _store_jobs_reducer__WEBPACK_IMPORTED_MODULE_12__["JobsReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsModule"].forFeature([_store_jobs_effects__WEBPACK_IMPORTED_MODULE_14__["JobsEffects"]]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"]
            ],
            providers: [_jobs_service__WEBPACK_IMPORTED_MODULE_15__["JobsService"]]
        })
    ], JobsModule);
    return JobsModule;
}());



/***/ }),

/***/ "./src/app/roles/business/jobs/jobs.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/roles/business/jobs/jobs.service.ts ***!
  \*****************************************************/
/*! exports provided: JobsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsService", function() { return JobsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JobsService = /** @class */ (function () {
    function JobsService() {
    }
    JobsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], JobsService);
    return JobsService;
}());



/***/ }),

/***/ "./src/app/roles/business/jobs/postjob/postjob.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/roles/business/jobs/postjob/postjob.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".skills-box {\n  border: 1px solid lightgray;\n  min-height: 100px;\n  border-radius: 20px;\n  padding: 5px;\n  margin-bottom: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYnVzaW5lc3Mvam9icy9wb3N0am9iL3Bvc3Rqb2IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9idXNpbmVzcy9qb2JzL3Bvc3Rqb2IvcG9zdGpvYi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNraWxscy1ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/roles/business/jobs/postjob/postjob.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/roles/business/jobs/postjob/postjob.component.ts ***!
  \******************************************************************/
/*! exports provided: PostjobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostjobComponent", function() { return PostjobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _store_jobs_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/jobs.actions */ "./src/app/roles/business/jobs/store/jobs.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var PostjobComponent = /** @class */ (function () {
    function PostjobComponent(fb, route, store, router) {
        var _this = this;
        this.fb = fb;
        this.route = route;
        this.store = store;
        this.router = router;
        this.editMode = false;
        this.skillSet = [
            'Guest Service- Receptionist/ Front-office',
            'Guest Service- Porter/ Bell boy',
            'Housekeeping/ Room keeping',
            'Concierge',
            'Washroom cleaning staff',
            'Room Cleaning staff',
            'Cook',
            'Waiter',
            'Kitchen staff (washing utensils, peeling, cleaning)',
            'Kitchen item Purchase',
            'Kitchen Cleaning staff',
            'Outdoor cleaning staff',
            'Supervisor-  Hotel/ Kitchen/ Garden',
            'Electrician',
            'Plumber',
            'Gardner',
            'Mason',
            'Gym Instructor',
            'Gym Manager',
            'Swimming pool manager',
            'Tour/ Local sightseeing Guide',
            'Hotel Manager',
            'Accountant/ Billing Staf',
            'Zip line',
            'Zorbing',
            'Other',
            'Boat- Canoeing, Yachting, Sailing, kayaking, wind surfing',
            'Rafting',
            'Swimming',
            'Cliff Diving',
            'Scuba Diving',
            'Snorkelling',
            'Surfing,',
            'Jet Skiing',
            'Water boards,  skiis, Parasailing',
            'Dragon Boat Racing',
            'Cave Diving',
            'Ice Diving',
            'Others',
            'Mountain Sports',
            'Snow Sports',
            'Air Sports',
            'Auto sports',
            'Animal Sports',
            'Hatha yoga',
            'Vinyasa yoga',
            'Ashtanga yoga',
            'Power yoga',
            'Bikram yoga',
            'Jivamukti yoga',
            'Iyengar yoga',
            'Anusara yoga',
            'Sivananda yoga',
            'Viniyoga',
            'Kundalini yoga',
            'Yin yog',
            'Integrative/ hybrid yoga',
            'Restorative yoga',
            'Wellness coaching',
            'Meditation',
            'Life-coach',
            'Kung fu',
            'Judo',
            'Karate',
            'Jeet Kune Do',
            'Krav Maga',
            'Capoeira',
            'Brazilian Jiu-Jitsu',
            'Tae Kwon Do',
            'Arnis',
            'Muay Thai',
            'Jujitsu',
            'Kenjutsu',
            'Sumo',
            'Sambo',
            'Ninjutsu',
            'Aikido',
            'Yoseikan Budo',
            'American Kenpo',
            'Wing Chun Kung Fu',
            'Choi Kwang Do',
            'Vovinam Viet Vo Dao',
            'Gatka',
            'Kumdo',
            'Kajukenbo',
            'Kyokushinkai Karate',
            'Praying Mantis',
            'Tai Chi Chuan',
            'Shotokan Karate',
            'Greco-Roman wrestling',
            'Kickboxing',
            'Hwa Rang Do',
            'Iaido',
            'Kalaripayattu',
            'Kendo',
            'Naginatajutsu',
            'Boxing',
            'Daito-ryu Aiki-jujutsu',
            'Freestyle Wrestling',
            'Pencak Silat',
            'Sanshou',
            'Tang Soo do',
            'Juego de man',
            'Kalenda',
            'Kamau Njia',
            'Photography',
            'Cooking',
            'Martial Arts',
            'Clay modelling/ pottery',
            'Carpentry',
            'Painting',
            'Calligraphy',
            'Fabric/ basket making',
            'Music',
            'Dance',
            'Drama and Theatre',
        ];
        this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (term) { return term.length < 1 ? []
                : _this.skillSet.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }); }));
        };
    }
    PostjobComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('jobs').subscribe(function (value) {
            _this.jobs = value.jobs;
        });
        this.jobForm = this.fb.group({
            _id: [''],
            jobType: ['hotelStaffJob'],
            jobTitle: [''],
            startDate: [''],
            location: [''],
            experience: this.fb.group({
                month: [''],
                year: ['']
            }),
            commission: this.fb.control('fulltime'),
            email: [''],
            skills: this.fb.array([]),
            description: ['']
        });
        this.route.paramMap.subscribe(function (params) {
            if (params.get('id')) {
                _this.id = +params.get('id');
                _this.editMode = true;
                _this.jobForm.patchValue(_this.jobs[_this.id]);
            }
        });
    };
    PostjobComponent.prototype.removeSkill = function (index) {
        this.skillSet.push(this.jobForm.get("skills").value[index]);
        this.jobForm.get("skills").removeAt(index);
    };
    PostjobComponent.prototype.addSkill = function (skl) {
        var obj = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](skl);
        if (skl.length > 0) {
            this.skillSet.splice(this.skillSet.indexOf(skl), 1);
            this.jobForm.get("skills").push(obj);
        }
        else {
            alert('Please select a skill first');
        }
    };
    PostjobComponent.prototype.onSubmit = function () {
        if (this.editMode) {
            this.store.dispatch(new _store_jobs_actions__WEBPACK_IMPORTED_MODULE_3__["TryEditJob"](this.jobForm.value));
            this.router.navigate(['../../list'], { relativeTo: this.route });
        }
        else {
            this.store.dispatch(new _store_jobs_actions__WEBPACK_IMPORTED_MODULE_3__["TryAddJobs"](this.jobForm.value));
            this.router.navigate(['../list'], { relativeTo: this.route });
        }
    };
    PostjobComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    PostjobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-postjob',
            template: __webpack_require__(/*! raw-loader!./postjob.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/jobs/postjob/postjob.component.html"),
            styles: [__webpack_require__(/*! ./postjob.component.css */ "./src/app/roles/business/jobs/postjob/postjob.component.css")]
        })
    ], PostjobComponent);
    return PostjobComponent;
}());



/***/ }),

/***/ "./src/app/roles/business/jobs/store/jobs.actions.ts":
/*!***********************************************************!*\
  !*** ./src/app/roles/business/jobs/store/jobs.actions.ts ***!
  \***********************************************************/
/*! exports provided: TRY_FETCH_JOBS, TRY_ADD_JOBS, TRY_EDIT_JOB, TRY_DELETE_JOB, SET_JOBS, SetJobs, TryDeleteJob, TryEditJob, TryAddJobs, TryFetchJobs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_FETCH_JOBS", function() { return TRY_FETCH_JOBS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_ADD_JOBS", function() { return TRY_ADD_JOBS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_EDIT_JOB", function() { return TRY_EDIT_JOB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_DELETE_JOB", function() { return TRY_DELETE_JOB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_JOBS", function() { return SET_JOBS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetJobs", function() { return SetJobs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryDeleteJob", function() { return TryDeleteJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryEditJob", function() { return TryEditJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryAddJobs", function() { return TryAddJobs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryFetchJobs", function() { return TryFetchJobs; });
/* harmony import */ var _jobs_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jobs.model */ "./src/app/roles/business/jobs/jobs.model.ts");

var TRY_FETCH_JOBS = 'TRY_FETCH_JOBS';
var TRY_ADD_JOBS = 'TRY_ADD_JOBS';
var TRY_EDIT_JOB = 'TRY_EDIT_JOB';
var TRY_DELETE_JOB = 'TRY_DELETE_JOB';
var SET_JOBS = 'SET_JOBS';
var SetJobs = /** @class */ (function () {
    function SetJobs(payload) {
        this.payload = payload;
        this.type = SET_JOBS;
    }
    SetJobs.ctorParameters = function () { return [
        { type: Array }
    ]; };
    return SetJobs;
}());

var TryDeleteJob = /** @class */ (function () {
    function TryDeleteJob(payload) {
        this.payload = payload;
        this.type = TRY_DELETE_JOB;
    }
    TryDeleteJob.ctorParameters = function () { return [
        { type: String }
    ]; };
    return TryDeleteJob;
}());

var TryEditJob = /** @class */ (function () {
    function TryEditJob(payload) {
        this.payload = payload;
        this.type = TRY_EDIT_JOB;
    }
    TryEditJob.ctorParameters = function () { return [
        { type: _jobs_model__WEBPACK_IMPORTED_MODULE_0__["JobsModel"] }
    ]; };
    return TryEditJob;
}());

var TryAddJobs = /** @class */ (function () {
    function TryAddJobs(payload) {
        this.payload = payload;
        this.type = TRY_ADD_JOBS;
    }
    TryAddJobs.ctorParameters = function () { return [
        { type: _jobs_model__WEBPACK_IMPORTED_MODULE_0__["JobsModel"] }
    ]; };
    return TryAddJobs;
}());

var TryFetchJobs = /** @class */ (function () {
    function TryFetchJobs() {
        this.type = TRY_FETCH_JOBS;
    }
    return TryFetchJobs;
}());



/***/ }),

/***/ "./src/app/roles/business/jobs/store/jobs.effects.ts":
/*!***********************************************************!*\
  !*** ./src/app/roles/business/jobs/store/jobs.effects.ts ***!
  \***********************************************************/
/*! exports provided: JobsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsEffects", function() { return JobsEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _jobs_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jobs.actions */ "./src/app/roles/business/jobs/store/jobs.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/serverEndpoints */ "./src/app/shared/serverEndpoints.ts");







var JobsEffects = /** @class */ (function () {
    function JobsEffects(action, http) {
        var _this = this;
        this.action = action;
        this.http = http;
        this.addJob = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_jobs_actions__WEBPACK_IMPORTED_MODULE_4__["TRY_ADD_JOBS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
            return data.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (data) {
            return _this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_6__["newJob"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (response) {
            if (response.status === 200) {
                return [
                    {
                        type: _jobs_actions__WEBPACK_IMPORTED_MODULE_4__["SET_JOBS"],
                        payload: response.body
                    }
                ];
            }
            else {
                alert('Some error occured !');
                return [];
            }
        }));
        this.fetchAllJobs = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_jobs_actions__WEBPACK_IMPORTED_MODULE_4__["TRY_FETCH_JOBS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return _this.http.get(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_6__["fetchJobByUser"], { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (response) {
            if (response.status === 200) {
                return [
                    {
                        type: _jobs_actions__WEBPACK_IMPORTED_MODULE_4__["SET_JOBS"],
                        payload: response.body
                    }
                ];
            }
            else {
                return [];
            }
        }));
        this.deleteJob = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_jobs_actions__WEBPACK_IMPORTED_MODULE_4__["TRY_DELETE_JOB"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
            return data.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (data) {
            return _this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_6__["editJob"], { _id: data, delFlg: 'Y' }, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (response) {
            if (response.status === 200) {
                return [
                    {
                        type: _jobs_actions__WEBPACK_IMPORTED_MODULE_4__["SET_JOBS"],
                        payload: response.body
                    }
                ];
            }
            else {
                return [];
            }
        }));
        this.editJob = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_jobs_actions__WEBPACK_IMPORTED_MODULE_4__["TRY_EDIT_JOB"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
            return data.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (data) {
            return _this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_6__["editJob"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (response) {
            if (response.status === 200) {
                return [
                    {
                        type: _jobs_actions__WEBPACK_IMPORTED_MODULE_4__["SET_JOBS"],
                        payload: response.body
                    }
                ];
            }
            else {
                alert('Some error occured !');
                return [];
            }
        }));
    }
    JobsEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
    ], JobsEffects.prototype, "addJob", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
    ], JobsEffects.prototype, "fetchAllJobs", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
    ], JobsEffects.prototype, "deleteJob", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
    ], JobsEffects.prototype, "editJob", void 0);
    JobsEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], JobsEffects);
    return JobsEffects;
}());



/***/ }),

/***/ "./src/app/roles/business/jobs/store/jobs.reducer.ts":
/*!***********************************************************!*\
  !*** ./src/app/roles/business/jobs/store/jobs.reducer.ts ***!
  \***********************************************************/
/*! exports provided: JobsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsReducer", function() { return JobsReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var initialState = {
    jobs: []
};
function JobsReducer(state, action) {
    var e_1, _a;
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'SET_JOBS': {
            console.log(action.payload);
            var finalJob = [];
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](action.payload), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var job = _c.value;
                    finalJob.push(job);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { jobs: finalJob });
        }
        default: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
        }
    }
}


/***/ })

}]);
//# sourceMappingURL=jobs-jobs-module-es5.js.map