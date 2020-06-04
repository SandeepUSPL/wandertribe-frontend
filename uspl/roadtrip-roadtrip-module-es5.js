(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roadtrip-roadtrip-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/roadtrip/dashboard/dashboard.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/roadtrip/dashboard/dashboard.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"h3 text-bold mb-5 text-center\">Your Dashboard</div>\n  </div>\n\n  <div class=\"col-md-12 text-center\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"info-box-card\">\n          <div>Active Road Trip</div>\n          <div>\n            <span>0</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"info-box-card\">\n          <div>Total Road Trip</div>\n          <div>\n            <span>0</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"info-box-card\">\n          <div>Past Road Trip</div>\n          <div>\n            <span>0</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/roadtrip/manageroadtrip/manageroadtrip.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/roadtrip/manageroadtrip/manageroadtrip.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"h3 text-bold mb-5 text-center\">Your RTrips</div>\n  </div>\n  <div class=\"col-md-12 RTrip-list\" *ngIf=\"RTrips.length; else elseBlock\">\n\n    <div class=\"row RTrip-list-item\" *ngFor=\"let RTrip of RTrips;let i = index\">\n\n      <div class=\"col-md-5\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            Location\n          </div>\n          <div class=\"col-md-6\">\n            <span>{{RTrip.location}}</span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            Total Days\n          </div>\n          <div class=\"col-md-6\">\n            <span>{{RTrip.totalDays}}</span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <span>Max People</span>\n          </div>\n          <div class=\"col-md-6\">\n            <span>{{RTrip.maxPeople}}</span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-6 d-flex m-auto\">\n        <div class=\"h4 text-bold\">{{RTrip.RTripTitle}}</div>\n      </div>\n\n      <div class=\"col-md-1 RTrip-action\">\n        <div><img src=\"../../../../../assets/icons/edit-black.png\" alt=\"\" (click)=\"editRTrip(i)\"></div>\n        <div><img src=\"../../../../../assets/icons/delete.png\" alt=\"\" (click)=\"deleteRTrip(i)\"></div>\n      </div>\n\n    </div>\n\n  </div>\n  <ng-template #elseBlock>\n    <div class=\"col-md-12 text-center\">\n      <h3>\n        No RTrips found\n      </h3>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/roadtrip/roadtrip.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/roadtrip/roadtrip.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-2 business-sidebar\">\n    <div class=\"sidebar pt-5\">\n      <div class=\"h5 text-center text-bold text-white\">Road Trips</div>\n      <a routerLink=\"dashboard\" routerLinkActive=\"active\">\n        <span>\n          <img src=\"../../../../assets/icons/business/dashboard.png\" alt=\"\">\n        </span>\n        Dashboard\n      </a>\n\n      <a routerLink=\"addRoadTrip\" routerLinkActive=\"active\">\n        <span>\n          <img src=\"../../../../assets/icons/business/add-trek%20icon.png\" alt=\"\">\n        </span>\n        Add Trip\n      </a><a routerLink=\"manageRoadTrip\" routerLinkActive=\"active\">\n        <span>\n          <img src=\"../../../../assets/icons/business/add-trek%20icon.png\" alt=\"\">\n        </span>\n      Manage Trip\n    </a>\n\n    </div>\n  </div>\n  <div class=\"col-md-10 scroll-view pt-5\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/roadtrip/saveroadtrip/saveroadtrip.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/roadtrip/saveroadtrip/saveroadtrip.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row addRTrip\" #addRTrip>\n  <div class=\"col-md-10 offset-1 mb-5\">\n    <div class=\"h3 text-bold mb-5 text-center\">Your Details</div>\n    <ngb-tabset type=\"pills\" [justify]=\"'center'\" #t=\"ngbTabset\">\n\n      <ngb-tab title=\"BASIC DETAILS\" id=\"basicForm\">\n        <ng-template ngbTabContent>\n\n          <form [formGroup]=\"basicForm\" (ngSubmit)=\"basicFormSubmit()\">\n\n            <div class=\"row form-group main-form-div mt-1\" #addRTripday>\n\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">Company</label>\n                <input formControlName=\"company\" class=\"form-control w-50\"\n                       placeholder=\"Enter your Company Name\">\n\n              </div>\n\n              <div class=\"col-md-8\">\n                <label class=\"form-title\">Dates of the Road Trip</label> <br>\n                <small>Select the Start and End for your Road Trip</small>\n                <div class=\"row\">\n                  <input name=\"datepicker\"\n                         class=\"form-control\"\n                         ngbDatepicker\n                         #datepicker=\"ngbDatepicker\"\n                         [autoClose]=\"'outside'\"\n                         (dateSelect)=\"onDateSelection($event)\"\n                         [displayMonths]=\"2\"\n                         [dayTemplate]=\"dates\"\n                         outsideDays=\"hidden\"\n                         [startDate]=\"fromDate\"\n                         type=\"hidden\">\n                  <ng-template #dates let-date let-focused=\"focused\">\n                    <span class=\"custom-day\"\n                          [class.focused]=\"focused\"\n                          [class.range]=\"isRange(date)\"\n                          [class.faded]=\"isHovered(date) || isInside(date)\"\n                          (mouseenter)=\"hoveredDate = date\"\n                          (mouseleave)=\"hoveredDate = null\">\n                      {{ date.day }}\n                    </span>\n                  </ng-template>\n                  <div class=\"col-md-5 form-group\">\n                    <div class=\"input-group\">\n                      <input #dpFromDate\n                             class=\"form-control\"\n                             name=\"dpFromDate\"\n                             [value]=\"formatter.format(fromDate)\"\n                             (input)=\"fromDate = validateInput(fromDate, dpFromDate.value)\"\n                             placeholder=\"Start Date\"\n                             (click)=\"datepicker.toggle()\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-5 form-group\">\n                    <div class=\"input-group\">\n                      <input #dpToDate\n                             class=\"form-control\"\n                             name=\"dpToDate\"\n                             [value]=\"formatter.format(toDate)\"\n                             placeholder=\"End Date\"\n                             (input)=\"toDate = validateInput(toDate, dpToDate.value)\" (click)=\"datepicker.toggle()\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <button class=\"btn btn-cyan\" type=\"button\" (click)=\"addRTripDate()\">add</button>\n                  </div>\n\n                  <div class=\"col-md-12\" *ngIf=\"basicForm.get('RTripDates').value\">\n                    <div *ngFor=\"let date of basicForm.get('RTripDates').value as Array; let i=index\">\n                      <small>\n                        Dates for day {{i + 1}} : {{date.startDate.year}}\n                        /{{date.startDate.month}}\n                        /{{date.startDate.day}} to  {{date.toDate.year}}/{{date.toDate.month}}\n                        /{{date.toDate.day}} </small>\n\n                      <button class=\"btn btn-danger\" type=\"button\" style=\"cursor: pointer\"\n                              (click)=\"removeRTripDate(i)\">x\n                      </button>\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">No of Days for this Road Trip</label> <br>\n                <input type=\"number\" class=\"form-control w-50\" readonly formControlName=\"totalDays\">\n              </div>\n\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">Will you be providing vehicle for this roadtrip</label>\n                <select class=\"form-control w-25\" formControlName=\"vehicleProvided\">\n                  <option value=\"Yes\">Yes</option>\n                  <option value=\"no\">no</option>\n                </select>\n              </div>\n\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">Choose the type of vehicle</label>\n                <select class=\"form-control w-25\" formControlName=\"vehicleType\">\n                  <option value=\"4 wheeler\">4 wheeler</option>\n                  <option value=\"2 wheeler\">2 wheeler</option>\n                </select>\n              </div>\n\n              <div class=\"col-md-12\">\n                <small>Give a small description for the vehicle for your guests to know what vehicle is best suited for\n                  the trip .</small>\n                <textarea class=\"form-control p-3 w-75\" rows=\"5\" formControlName=\"vehicleDescription\"></textarea>\n              </div>\n\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">Choose the language for the Road Trip</label> <br>\n                <small>Your primary language will be the main language set on the roadtrip. Guests will be able to\n                  filter to find roadtrip hosted in your language.</small>\n                <div class=\"row\" formGroupName=\"languages\">\n                  <div class=\"col-md-3\">\n                    <input type=\"checkbox\" formControlName=\"hindi\">\n                    <label class=\"ml-2\">Hindi</label>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <input type=\"checkbox\" formControlName=\"english\">\n                    <label class=\"ml-2\">English</label>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">Total kilometers covered (Km)</label> <br>\n                <input type=\"number\" class=\"form-control w-25\" formControlName=\"totalDistance\">\n              </div>\n\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">Meetup point</label>\n                <input ngx-google-places-autocomplete formControlName=\"meetupPoint\" class=\"form-control w-50\"\n                       placeholder=\"Meetup point\" #meetupPoint>\n\n              </div>\n\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">Tell us more about you</label> <br>\n                <small>\n                  Tell us more about yourself, use this space to describe to your guests how you make this roadtrip\n                  special and more about yourself as a person.\n                </small>\n                <textarea class=\"form-control p-3 w-75\" rows=\"5\" formControlName=\"about\"></textarea>\n              </div>\n\n            </div>\n\n            <div class=\"form-group row mt-5\">\n              <div class=\"col-md-12 text-center\">\n                <button class=\"btn btn-cyan\" [disabled]=\"!basicForm.valid\">Next</button>\n              </div>\n            </div>\n\n          </form>\n        </ng-template>\n      </ngb-tab>\n\n      <ngb-tab title=\"ROAD TRIP DETAILS\" id=\"RTripForm\">\n        <ng-template ngbTabContent>\n\n          <div class=\"col-md-12 pt-2\">\n            <button *ngFor=\"let x of RTripDaysArrayDummy; let it= index\"\n                    class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"setRTripDay(it)\">\n              Day : {{it + 1}}\n            </button>\n          </div>\n\n          <div class=\"col-md-12\">\n            <form [formGroup]=\"RTripForm\">\n              <div class=\"row form-group main-form-div mt-1\">\n\n                <div class=\"col-md-12 text-bold h3\">\n                  Day : {{currentDay + 1}}\n                </div>\n\n                <div class=\"col-md-6\">\n                  <label class=\"form-title\">Start point</label>\n                  <input ngx-google-places-autocomplete formControlName=\"startPoint\" class=\"form-control w-50\"\n                         placeholder=\"Start point\" #startPoint>\n\n                </div>\n\n                <div class=\"col-md-6\">\n                  <label class=\"form-title\">End point</label>\n                  <input ngx-google-places-autocomplete formControlName=\"endPoint\" class=\"form-control w-50\"\n                         placeholder=\"End point\" #endPoint>\n\n                </div>\n\n                <div class=\"col-md-12\">\n                  <label class=\"form-title\">Attractions for the day</label> <br>\n                  <small>Share with your guests the attractions they will be seeing through the journey of the\n                    day</small>\n                  <textarea class=\"form-control p-3 w-75\" rows=\"5\" formControlName=\"attractions\"></textarea>\n                </div>\n\n                <div class=\"col-md-12\">\n                  <label class=\"form-title\">Accommodation for the day</label> <br>\n                  <small>Share with your guests the accommodation you'll be stopping at during the day</small>\n                  <textarea class=\"form-control p-3 w-75\" rows=\"5\" formControlName=\"accommodation\"></textarea>\n                </div>\n\n                <div class=\"col-md-12\">\n                  <label class=\"form-title\">Add photo for your day</label> <br>\n                  <small>Share the picture you want to show for this specific day for your guests.</small>\n\n                  <div class=\"row form-group upload-form-group\">\n                    <div class=\"col-md-4\">\n                      <input class=\"form-control\" type=\"file\" (change)=\"imgPreviewRTripDay($event)\">\n                    </div>\n                    <div class=\"col-md-8 image-preview\">\n                      <img [src]=\"imgPreviewUrlRTripDay\">\n                    </div>\n                  </div>\n\n                </div>\n\n                <div class=\"col-md-12\">\n                  <label class=\"form-title\">Add details about what you’ll provide</label> <br>\n                  <small>\n                    You can provide food and drink, special equipment, a ticket to a concert, or anything else special\n                    to make your guests comfortable. Share details specific to this day.\n                  </small>\n                  <input type=\"text\" class=\"form-control w-50\" formControlName=\"provided\">\n                </div>\n\n                <div class=\"col-md-12\">\n                  <label class=\"form-title\">What should guests bring with them for this day ?</label> <br>\n                  <input type=\"text\" class=\"form-control w-50\" formControlName=\"carry\">\n                </div>\n\n                <div class=\"col-md-12\">\n                  <label class=\"form-title\">Kilometers covered</label> <br>\n                  <input type=\"number\" class=\"form-control w-50\" formControlName=\"distance\">\n                </div>\n\n                <div class=\"col-md-12\">\n                  <label class=\"form-title\">Notes for the day</label> <br>\n                  <small>You can provide your guests with important notes for the day and also leave any other important\n                    piece of information for their safe trekking.</small>\n                  <textarea class=\"form-control p-3 w-75\" rows=\"5\" formControlName=\"notes\"></textarea>\n                </div>\n              </div>\n              <div class=\"form-group row mt-5\">\n                <div class=\"col-md-12 text-center\">\n                  <button class=\"btn btn-cyan\" type=\"button\" [disabled]=\"!RTripForm.valid\" (click)=\"RTripFormSubmit()\">\n                    {{(currentDay == days - 1) ? 'Submit & Next' : 'Submit Day-' + (+currentDay + 1)}}\n                  </button>\n                </div>\n              </div>\n            </form>\n          </div>\n\n        </ng-template>\n      </ngb-tab>\n\n      <ngb-tab title=\"SETTING\" id=\"settingForm\">\n        <ng-template ngbTabContent>\n          <form [formGroup]=\"settingForm\" (ngSubmit)=\"settingFormSubmit()\">\n\n            <div class=\"ow form-group main-form-div mt-5\">\n\n              <div class=\"col-mRTrip-12\">\n                <label class=\"form-title\">Describe What you'll Do</label> <br>\n                <small>\n                  Your activity description is a chance to inspire guests to take your experience. Talk about the\n                  details of the itinerary for this specific day that you have planned for them.\n                </small>\n                <textarea class=\"form-control p-3 w-75\" rows=\"5\"\n                          formControlName=\"todoPlan\"></textarea>\n              </div>\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">Add photo for your roadtrip</label> <br>\n                <small>Share the picture from the roadtrip for you guests to see.</small>\n\n                <div class=\"row form-group upload-form-group\">\n                  <div class=\"col-md-4\">\n                    <input class=\"form-control \" type=\"file\" (change)=\"imgPreviewRTrip($event)\" multiple\n                           accept=\"image/x-png,image/jpeg\">\n                  </div>\n                  <!--                  <div class=\"col-md-8 image-preview\">-->\n                  <!--                    <img [src]=\"imgPreviewUrlRTrip\">-->\n                  <!--                  </div>-->\n                </div>\n\n              </div>\n              <div class=\"col-md-12 mt-0 image-preview\">\n                <div class=\"row\">\n\n                  <div class=\"col-md-3 p-1\" *ngFor=\"let image of settingForm.get('RTripImage').value;\">\n                    <img [src]=\"image.url\" alt=\"\">\n                  </div>\n                </div>\n              </div>\n\n\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">Add details about what you’ll provide</label> <br>\n                <input type=\"text\" class=\"form-control w-50\" formControlName=\"provided\">\n              </div>\n\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">What should guests bring with them?</label> <br>\n                <input type=\"text\" class=\"form-control w-50\" formControlName=\"carry\">\n              </div>\n\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">Price per person</label> <br>\n                <input type=\"number\" class=\"form-control w-25\" formControlName=\"pricePerPerson\">\n              </div>\n\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">Minimum number of people</label> <br>\n                <input type=\"number\" class=\"form-control w-25\" formControlName=\"minPeople\">\n              </div>\n\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">Maximum number of people</label> <br>\n                <input type=\"number\" class=\"form-control w-25\" formControlName=\"maxPeople\">\n              </div>\n\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">Give your roadtrip a title</label> <br>\n                <input type=\"text\" class=\"form-control w-50\" formControlName=\"RTripTitle\">\n              </div>\n            </div>\n\n            <div class=\"form-group row mt-5\">\n              <div class=\"col-md-12 text-center\">\n                <button class=\"btn btn-cyan\" type=\"submit\" [disabled]=\"!settingForm.valid\">Save Trip</button>\n              </div>\n            </div>\n\n          </form>\n        </ng-template>\n      </ngb-tab>\n\n\n    </ngb-tabset>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/roles/business/roadtrip/dashboard/dashboard.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/roles/business/roadtrip/dashboard/dashboard.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info-box-tile{\n  height: 160px;\n  width: auto;\n  text-align: center;\n  border-radius: 20px;\n  box-shadow: 1px 2px 10px 3px lightgrey;\n  background: linear-gradient(white 60%, #4b6cdb 40%);\n}\n\n.info-box-tile .info-box-top{\n  padding-top: 20px;\n  color: black;\n  height: 60%;\n  font-weight: 700;\n  font-size: 1.75rem;\n}\n\n.info-box-tile .info-box-bottom{\n  padding-top: 10px;\n  color: white;\n  height: 40%;\n}\n\n.info-box-card{\n  min-height: 100px;\n  padding: 20px 10px;\n  background: #4b6cdb;\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYnVzaW5lc3Mvcm9hZHRyaXAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNDQUFzQztFQUN0QyxtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9idXNpbmVzcy9yb2FkdHJpcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mby1ib3gtdGlsZXtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgd2lkdGg6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogMXB4IDJweCAxMHB4IDNweCBsaWdodGdyZXk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh3aGl0ZSA2MCUsICM0YjZjZGIgNDAlKTtcbn1cblxuLmluZm8tYm94LXRpbGUgLmluZm8tYm94LXRvcHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiA2MCU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbn1cblxuLmluZm8tYm94LXRpbGUgLmluZm8tYm94LWJvdHRvbXtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA0MCU7XG59XG5cbi5pbmZvLWJveC1jYXJke1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjNGI2Y2RiO1xuICBjb2xvcjogd2hpdGU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/roles/business/roadtrip/dashboard/dashboard.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/roles/business/roadtrip/dashboard/dashboard.component.ts ***!
  \**************************************************************************/
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
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/roadtrip/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/roles/business/roadtrip/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/roles/business/roadtrip/manageroadtrip/manageroadtrip.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/roles/business/roadtrip/manageroadtrip/manageroadtrip.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".trek-list-item {\n  border: 2px solid black;\n  border-radius: 10px;\n  padding: 10px;\n  margin: 20px 10px;\n}\n\n.trek-action img {\n  height: 28px;\n  margin: 5px;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYnVzaW5lc3Mvcm9hZHRyaXAvbWFuYWdlcm9hZHRyaXAvbWFuYWdlcm9hZHRyaXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2J1c2luZXNzL3JvYWR0cmlwL21hbmFnZXJvYWR0cmlwL21hbmFnZXJvYWR0cmlwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJlay1saXN0LWl0ZW0ge1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAyMHB4IDEwcHg7XG59XG5cbi50cmVrLWFjdGlvbiBpbWcge1xuICBoZWlnaHQ6IDI4cHg7XG4gIG1hcmdpbjogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/roles/business/roadtrip/manageroadtrip/manageroadtrip.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/roles/business/roadtrip/manageroadtrip/manageroadtrip.component.ts ***!
  \************************************************************************************/
/*! exports provided: ManageroadtripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageroadtripComponent", function() { return ManageroadtripComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_rtrips_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/rtrips.actions */ "./src/app/roles/business/roadtrip/store/rtrips.actions.ts");





var ManageroadtripComponent = /** @class */ (function () {
    function ManageroadtripComponent(router, route, store) {
        this.router = router;
        this.route = route;
        this.store = store;
    }
    ManageroadtripComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _store_rtrips_actions__WEBPACK_IMPORTED_MODULE_4__["TryFetchRTrips"]());
        this.store.select('RTrips').subscribe(function (tripState) {
            return _this.RTrips = tripState.RTrips;
        });
    };
    ManageroadtripComponent.prototype.editRTrip = function (index) {
        this.router.navigate(['../editRoadTrip', index], { relativeTo: this.route });
    };
    ManageroadtripComponent.prototype.deleteRTrip = function (index) {
        this.currentRTrip = this.RTrips[index];
        this.currentRTrip.delFlg = true;
        this.store.dispatch(new _store_rtrips_actions__WEBPACK_IMPORTED_MODULE_4__["TrySaveRTrip"](this.currentRTrip));
        this.store.dispatch(new _store_rtrips_actions__WEBPACK_IMPORTED_MODULE_4__["TryFetchRTrips"]());
    };
    ManageroadtripComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    ManageroadtripComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manageroadtrip',
            template: __webpack_require__(/*! raw-loader!./manageroadtrip.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/roadtrip/manageroadtrip/manageroadtrip.component.html"),
            styles: [__webpack_require__(/*! ./manageroadtrip.component.css */ "./src/app/roles/business/roadtrip/manageroadtrip/manageroadtrip.component.css")]
        })
    ], ManageroadtripComponent);
    return ManageroadtripComponent;
}());



/***/ }),

/***/ "./src/app/roles/business/roadtrip/roadtrip-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/roles/business/roadtrip/roadtrip-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: RoadtripRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoadtripRoutingModule", function() { return RoadtripRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _roadtrip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roadtrip.component */ "./src/app/roles/business/roadtrip/roadtrip.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/roles/business/roadtrip/dashboard/dashboard.component.ts");
/* harmony import */ var _saveroadtrip_saveroadtrip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./saveroadtrip/saveroadtrip.component */ "./src/app/roles/business/roadtrip/saveroadtrip/saveroadtrip.component.ts");
/* harmony import */ var _manageroadtrip_manageroadtrip_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manageroadtrip/manageroadtrip.component */ "./src/app/roles/business/roadtrip/manageroadtrip/manageroadtrip.component.ts");







var routes = [
    {
        path: '', component: _roadtrip_component__WEBPACK_IMPORTED_MODULE_3__["RoadtripComponent"], children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
            { path: 'addRoadTrip', component: _saveroadtrip_saveroadtrip_component__WEBPACK_IMPORTED_MODULE_5__["SaveroadtripComponent"] },
            { path: 'editRoadTrip/:id', component: _saveroadtrip_saveroadtrip_component__WEBPACK_IMPORTED_MODULE_5__["SaveroadtripComponent"] },
            { path: 'manageRoadTrip', component: _manageroadtrip_manageroadtrip_component__WEBPACK_IMPORTED_MODULE_6__["ManageroadtripComponent"] },
        ]
    }
];
var RoadtripRoutingModule = /** @class */ (function () {
    function RoadtripRoutingModule() {
    }
    RoadtripRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RoadtripRoutingModule);
    return RoadtripRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/business/roadtrip/roadtrip.component.css":
/*!****************************************************************!*\
  !*** ./src/app/roles/business/roadtrip/roadtrip.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2J1c2luZXNzL3JvYWR0cmlwL3JvYWR0cmlwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/roles/business/roadtrip/roadtrip.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/roles/business/roadtrip/roadtrip.component.ts ***!
  \***************************************************************/
/*! exports provided: RoadtripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoadtripComponent", function() { return RoadtripComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RoadtripComponent = /** @class */ (function () {
    function RoadtripComponent() {
    }
    RoadtripComponent.prototype.ngOnInit = function () {
    };
    RoadtripComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-roadtrip',
            template: __webpack_require__(/*! raw-loader!./roadtrip.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/roadtrip/roadtrip.component.html"),
            styles: [__webpack_require__(/*! ./roadtrip.component.css */ "./src/app/roles/business/roadtrip/roadtrip.component.css")]
        })
    ], RoadtripComponent);
    return RoadtripComponent;
}());



/***/ }),

/***/ "./src/app/roles/business/roadtrip/roadtrip.module.ts":
/*!************************************************************!*\
  !*** ./src/app/roles/business/roadtrip/roadtrip.module.ts ***!
  \************************************************************/
/*! exports provided: RoadtripModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoadtripModule", function() { return RoadtripModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _roadtrip_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roadtrip-routing.module */ "./src/app/roles/business/roadtrip/roadtrip-routing.module.ts");
/* harmony import */ var _manageroadtrip_manageroadtrip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manageroadtrip/manageroadtrip.component */ "./src/app/roles/business/roadtrip/manageroadtrip/manageroadtrip.component.ts");
/* harmony import */ var _roadtrip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./roadtrip.component */ "./src/app/roles/business/roadtrip/roadtrip.component.ts");
/* harmony import */ var _saveroadtrip_saveroadtrip_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./saveroadtrip/saveroadtrip.component */ "./src/app/roles/business/roadtrip/saveroadtrip/saveroadtrip.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/roles/business/roadtrip/dashboard/dashboard.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_rtrips_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/rtrips.effects */ "./src/app/roles/business/roadtrip/store/rtrips.effects.ts");
/* harmony import */ var _store_rtrips_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store/rtrips.reducer */ "./src/app/roles/business/roadtrip/store/rtrips.reducer.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");















var RoadtripModule = /** @class */ (function () {
    function RoadtripModule() {
    }
    RoadtripModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _manageroadtrip_manageroadtrip_component__WEBPACK_IMPORTED_MODULE_4__["ManageroadtripComponent"],
                _roadtrip_component__WEBPACK_IMPORTED_MODULE_5__["RoadtripComponent"],
                _saveroadtrip_saveroadtrip_component__WEBPACK_IMPORTED_MODULE_6__["SaveroadtripComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _roadtrip_routing_module__WEBPACK_IMPORTED_MODULE_3__["RoadtripRoutingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forFeature('RTrips', _store_rtrips_reducer__WEBPACK_IMPORTED_MODULE_12__["RTripsReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forFeature([_store_rtrips_effects__WEBPACK_IMPORTED_MODULE_11__["RTripsEffects"]]),
            ]
        })
    ], RoadtripModule);
    return RoadtripModule;
}());



/***/ }),

/***/ "./src/app/roles/business/roadtrip/rtrip.model.ts":
/*!********************************************************!*\
  !*** ./src/app/roles/business/roadtrip/rtrip.model.ts ***!
  \********************************************************/
/*! exports provided: RTripModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTripModel", function() { return RTripModel; });
var RTripModel = /** @class */ (function () {
    function RTripModel(_id, company, location, RTripDates, totalDays, languages, vehicleProvided, vehicleType, vehicleDescription, totalDistance, meetupPoint, about, RTripDayDetails, RTripImage, todoPlan, carry, pricePerPerson, minPeople, maxPeople, RTripTitle, delFlg) {
        this._id = _id;
        this.company = company;
        this.location = location;
        this.RTripDates = RTripDates;
        this.totalDays = totalDays;
        this.languages = languages;
        this.vehicleProvided = vehicleProvided;
        this.vehicleType = vehicleType;
        this.vehicleDescription = vehicleDescription;
        this.totalDistance = totalDistance;
        this.meetupPoint = meetupPoint;
        this.about = about;
        this.RTripDayDetails = RTripDayDetails;
        this.RTripImage = RTripImage;
        this.todoPlan = todoPlan;
        this.carry = carry;
        this.pricePerPerson = pricePerPerson;
        this.minPeople = minPeople;
        this.maxPeople = maxPeople;
        this.RTripTitle = RTripTitle;
        this.delFlg = delFlg;
    }
    RTripModel.ctorParameters = function () { return [
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
        { type: String },
        { type: String },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: String },
        { type: Boolean }
    ]; };
    return RTripModel;
}());



/***/ }),

/***/ "./src/app/roles/business/roadtrip/saveroadtrip/saveroadtrip.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/roles/business/roadtrip/saveroadtrip/saveroadtrip.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.upload-form-group input {\n  height: 110px;\n}\n\n.image-preview {\n  /*text-align: center;*/\n}\n\n.image-preview img {\n  height: 80px;\n  width: auto;\n  max-width: 120px;\n}\n\ninput[type='file'] {\n  color: transparent;\n  border: none;\n  border-radius: 0px !important;\n}\n\n.custom-day {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n.custom-day.focused {\n  background-color: #e6e6e6;\n}\n\n.custom-day.range, .custom-day:hover {\n  background-color: rgb(2, 117, 216);\n  color: white;\n}\n\n.custom-day.faded {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n\n.main-form-div > div {\n  margin-top: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYnVzaW5lc3Mvcm9hZHRyaXAvc2F2ZXJvYWR0cmlwL3NhdmVyb2FkdHJpcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2J1c2luZXNzL3JvYWR0cmlwL3NhdmVyb2FkdHJpcC9zYXZlcm9hZHRyaXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnVwbG9hZC1mb3JtLWdyb3VwIGlucHV0IHtcbiAgaGVpZ2h0OiAxMTBweDtcbn1cblxuLmltYWdlLXByZXZpZXcge1xuICAvKnRleHQtYWxpZ246IGNlbnRlcjsqL1xufVxuXG4uaW1hZ2UtcHJldmlldyBpbWcge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEyMHB4O1xufVxuXG5cbmlucHV0W3R5cGU9J2ZpbGUnXSB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1kYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbn1cblxuLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG5cbi5jdXN0b20tZGF5LnJhbmdlLCAuY3VzdG9tLWRheTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCAxMTcsIDIxNik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmN1c3RvbS1kYXkuZmFkZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xufVxuXG4ubWFpbi1mb3JtLWRpdiA+IGRpdiB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/roles/business/roadtrip/saveroadtrip/saveroadtrip.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/roles/business/roadtrip/saveroadtrip/saveroadtrip.component.ts ***!
  \********************************************************************************/
/*! exports provided: SaveroadtripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveroadtripComponent", function() { return SaveroadtripComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _rtrip_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rtrip.model */ "./src/app/roles/business/roadtrip/rtrip.model.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/toast/toast.service */ "./src/app/shared/toast/toast.service.ts");
/* harmony import */ var _store_rtrips_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/rtrips.actions */ "./src/app/roles/business/roadtrip/store/rtrips.actions.ts");









var SaveroadtripComponent = /** @class */ (function () {
    function SaveroadtripComponent(router, fb, calendar, formatter, store, route, toastService) {
        this.router = router;
        this.fb = fb;
        this.calendar = calendar;
        this.formatter = formatter;
        this.store = store;
        this.route = route;
        this.toastService = toastService;
        this.finalRTrip = new _rtrip_model__WEBPACK_IMPORTED_MODULE_3__["RTripModel"]();
        this.RTripDayImg = null;
        this.RTripImg = null;
        this.RTripImgArray = [];
        this.imgPreviewUrlRTripDay = '../../../assets/icons/uploadPic.png';
        this.imgPreviewUrlRTrip = '../../../assets/icons/uploadPic.png';
        this.editMode = false;
        this.currentDay = 0;
        this.days = 3;
        this.RTripDaysArrayDummy = Array(this.days).fill(0);
        this.RTripDaysArray = [];
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', this.days - 1);
    }
    SaveroadtripComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.basicForm = this.fb.group({
            company: [''],
            RTripDates: this.fb.array([], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            totalDays: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            vehicleProvided: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            vehicleType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            vehicleDescription: [''],
            languages: this.fb.group({
                hindi: [false],
                english: [false]
            }),
            totalDistance: [''],
            meetupPoint: [''],
            about: [''],
        });
        this.RTripForm = this.fb.group({
            startPoint: [''],
            endPoint: [''],
            attractions: [''],
            accommodation: [''],
            RTripDayImage: [''],
            carry: [''],
            distance: [''],
            notes: [''],
        });
        this.settingForm = this.fb.group({
            todoPlan: [''],
            RTripImage: this.fb.array([]),
            provided: [''],
            carry: [''],
            pricePerPerson: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            minPeople: [''],
            maxPeople: [''],
            RTripTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.RTripDayDetails = this.fb.array([]);
        this.store.select('RTrips').subscribe(function (rTrip) {
            if (!_this.editMode) {
                if (rTrip.activeRTrip) {
                    _this.finalRTrip = rTrip.activeRTrip;
                    if (rTrip.activeRTrip.RTripDayDetails) {
                        _this.RTripDaysArray = rTrip.activeRTrip.RTripDayDetails;
                    }
                }
            }
        });
        // for editing a RTrip
        this.route.paramMap.subscribe(function (params) {
            if (params.get('id')) {
                _this.editMode = true;
                _this.id = +params.get('id');
                _this.store.select('RTrips').subscribe(function (rTrip) {
                    _this.finalRTrip = rTrip.RTrips[_this.id];
                    if (_this.finalRTrip) {
                        _this.basicForm.patchValue(_this.finalRTrip);
                        _this.settingForm.patchValue(_this.finalRTrip);
                        _this.finalRTrip.RTripDayDetails.forEach(function (value) {
                            _this.RTripDayDetails.push(_this.addRTripDayDetailGroup(value));
                        });
                        _this.RTripForm.setValue(_this.RTripDayDetails.value[0]);
                    }
                    else {
                        _this.router.navigate(['../../manageRTrip'], { relativeTo: _this.route });
                    }
                });
            }
        });
    };
    SaveroadtripComponent.prototype.addRTripDayDetailGroup = function (value) {
        var group = this.fb.group({
            startPoint: [value.startPoint],
            endPoint: [value.endPoint],
            attractions: [value.attractions],
            accommodation: [value.accommodation],
            RTripDayImage: [''],
            carry: [value.carry],
            distance: [value.distance],
            notes: [value.notes],
        });
        return group;
    };
    SaveroadtripComponent.prototype.onDateSelection = function (date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
        if (this.toDate && this.fromDate) {
            this.days = Math.floor((Date.parse(this.toDate.month + '/' + this.toDate.day + '/' + this.toDate.year) - Date.parse(this.fromDate.month + '/' + this.fromDate.day + '/' + this.fromDate.year)) / 86400000);
            this.days += 1;
        }
        this.RTripDaysArrayDummy = Array(this.days).fill(0);
    };
    SaveroadtripComponent.prototype.isHovered = function (date) {
        return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
    };
    SaveroadtripComponent.prototype.isInside = function (date) {
        return date.after(this.fromDate) && date.before(this.toDate);
    };
    SaveroadtripComponent.prototype.isRange = function (date) {
        return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
    };
    SaveroadtripComponent.prototype.validateInput = function (currentValue, input) {
        var parsed = this.formatter.parse(input);
        return parsed && this.calendar.isValid(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDate"].from(parsed)) ? _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDate"].from(parsed) : currentValue;
    };
    SaveroadtripComponent.prototype.addRTripDate = function () {
        var x = {
            startDate: this.fromDate,
            toDate: this.toDate
        };
        var obj = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](x);
        this.basicForm.controls["RTripDates"].push(obj);
        this.basicForm.patchValue({ totalDays: this.days });
    };
    SaveroadtripComponent.prototype.removeRTripDate = function (i) {
        this.basicForm.controls["RTripDates"].removeAt(i);
    };
    SaveroadtripComponent.prototype.imgPreviewRTripDay = function (fileInput) {
        var _this = this;
        this.RTripDayImg = fileInput.target.files[0];
        var mimeType = this.RTripDayImg.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(this.RTripDayImg);
        reader.onload = function () {
            _this.imgPreviewUrlRTripDay = reader.result;
        };
    };
    SaveroadtripComponent.prototype.imgPreviewRTrip = function (fileInput) {
        var e_1, _a;
        var _this = this;
        var files = fileInput.target.files;
        if (files.length >= 5) {
            try {
                for (var files_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
                    var image = files_1_1.value;
                    this.RTripImgArray.push(image);
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        _this.settingForm.get('RTripImage').push(_this.fb.group({
                            url: e.target.result
                        }));
                    };
                    reader.readAsDataURL(image);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else {
            this.toastService.showDanger('Please select more than 4 images!');
        }
    };
    SaveroadtripComponent.prototype.setRTripDay = function (it) {
        this.currentDay = it;
        if (this.RTripDayDetails.value[it]) {
            this.RTripForm.setValue(this.RTripDayDetails.value[it]);
        }
        else {
            this.RTripForm.reset();
        }
    };
    SaveroadtripComponent.prototype.basicFormSubmit = function () {
        this.basicForm.controls["meetupPoint"].patchValue(this.meetupPoint.nativeElement.value);
        this.dispatch(this.basicForm.value);
        this.tabSet.select('RTripForm');
    };
    SaveroadtripComponent.prototype.RTripFormSubmit = function () {
        this.RTripForm.controls["startPoint"].patchValue(this.startPoint.nativeElement.value);
        this.RTripForm.controls["endPoint"].patchValue(this.endPoint.nativeElement.value);
        if (this.RTripDayDetails && this.RTripDayDetails.value[this.currentDay]) {
            this.RTripDayDetails.insert(this.currentDay, this.addRTripDayDetailGroup(this.RTripForm.value));
        }
        else {
            this.RTripDayDetails.push(this.addRTripDayDetailGroup(this.RTripForm.value));
        }
        console.log(this.RTripDayDetails.value);
        this.dispatch({ RTripDayDetails: this.RTripDayDetails.value });
        var data = new FormData();
        data.append('_id', this.finalRTrip._id);
        data.append('RTripDayImage', this.RTripDayImg);
        data.append('index', (this.currentDay).toString());
        this.store.dispatch(new _store_rtrips_actions__WEBPACK_IMPORTED_MODULE_8__["TryUploadRoadTripImage"](data));
        if (this.currentDay === this.days - 1) {
            this.tabSet.select('settingForm');
            this.currentDay = 0;
        }
        else {
            this.currentDay += 1;
        }
    };
    SaveroadtripComponent.prototype.settingFormSubmit = function () {
        this.dispatch(this.settingForm.value);
        if (this.RTripImgArray.length) {
            var data_1 = new FormData();
            data_1.append('_id', this.finalRTrip._id);
            Array.from(this.RTripImgArray).forEach(function (image) {
                data_1.append('RTripImage[]', image);
            });
            this.store.dispatch(new _store_rtrips_actions__WEBPACK_IMPORTED_MODULE_8__["TryUploadRoadTripImage"](data_1));
        }
        this.router.navigate(['../manageRTrip'], { relativeTo: this.route });
    };
    SaveroadtripComponent.prototype.dispatch = function (obj) {
        console.log('inside dispatch function');
        console.log(this.finalRTrip);
        console.log('after assign');
        Object.assign(this.finalRTrip, obj);
        console.log(this.finalRTrip);
        console.log('outside assign');
        this.store.dispatch(new _store_rtrips_actions__WEBPACK_IMPORTED_MODULE_8__["TrySaveRTrip"](this.finalRTrip));
    };
    SaveroadtripComponent.prototype.ngOnDestroy = function () {
        this.finalRTrip = null;
        this.store.dispatch(new _store_rtrips_actions__WEBPACK_IMPORTED_MODULE_8__["SetActiveRTrip"](null));
    };
    SaveroadtripComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCalendar"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDateParserFormatter"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('t', { static: false })
    ], SaveroadtripComponent.prototype, "tabSet", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('meetupPoint', { static: false })
    ], SaveroadtripComponent.prototype, "meetupPoint", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('startPoint', { static: false })
    ], SaveroadtripComponent.prototype, "startPoint", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('endPoint', { static: false })
    ], SaveroadtripComponent.prototype, "endPoint", void 0);
    SaveroadtripComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-saveroadtrip',
            template: __webpack_require__(/*! raw-loader!./saveroadtrip.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/roadtrip/saveroadtrip/saveroadtrip.component.html"),
            styles: [__webpack_require__(/*! ./saveroadtrip.component.css */ "./src/app/roles/business/roadtrip/saveroadtrip/saveroadtrip.component.css")]
        })
    ], SaveroadtripComponent);
    return SaveroadtripComponent;
}());



/***/ }),

/***/ "./src/app/roles/business/roadtrip/store/rtrips.actions.ts":
/*!*****************************************************************!*\
  !*** ./src/app/roles/business/roadtrip/store/rtrips.actions.ts ***!
  \*****************************************************************/
/*! exports provided: TRY_SAVE_RTRIP, TRY_FETCH_RTRIPS, TRY_UPLOAD_RTRIP_IMAGE, SET_RTRIPS, SET_ACTIVE_RTRIP, TryUploadRoadTripImage, TryFetchRTrips, TrySaveRTrip, SetRTrips, SetActiveRTrip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_SAVE_RTRIP", function() { return TRY_SAVE_RTRIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_FETCH_RTRIPS", function() { return TRY_FETCH_RTRIPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_UPLOAD_RTRIP_IMAGE", function() { return TRY_UPLOAD_RTRIP_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_RTRIPS", function() { return SET_RTRIPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ACTIVE_RTRIP", function() { return SET_ACTIVE_RTRIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryUploadRoadTripImage", function() { return TryUploadRoadTripImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryFetchRTrips", function() { return TryFetchRTrips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrySaveRTrip", function() { return TrySaveRTrip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetRTrips", function() { return SetRTrips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetActiveRTrip", function() { return SetActiveRTrip; });
/* harmony import */ var _rtrip_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rtrip.model */ "./src/app/roles/business/roadtrip/rtrip.model.ts");

var TRY_SAVE_RTRIP = 'TRY_SAVE_RTRIP';
var TRY_FETCH_RTRIPS = 'TRY_FETCH_RTRIPS';
var TRY_UPLOAD_RTRIP_IMAGE = 'TRY_UPLOAD_RTRIP_IMAGE';
var SET_RTRIPS = 'SET_RTRIPS';
var SET_ACTIVE_RTRIP = 'SET_ACTIVE_RTRIP';
var TryUploadRoadTripImage = /** @class */ (function () {
    function TryUploadRoadTripImage(payload) {
        this.payload = payload;
        this.type = TRY_UPLOAD_RTRIP_IMAGE;
    }
    TryUploadRoadTripImage.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return TryUploadRoadTripImage;
}());

var TryFetchRTrips = /** @class */ (function () {
    function TryFetchRTrips() {
        this.type = TRY_FETCH_RTRIPS;
    }
    return TryFetchRTrips;
}());

var TrySaveRTrip = /** @class */ (function () {
    function TrySaveRTrip(payload) {
        this.payload = payload;
        this.type = TRY_SAVE_RTRIP;
    }
    TrySaveRTrip.ctorParameters = function () { return [
        { type: _rtrip_model__WEBPACK_IMPORTED_MODULE_0__["RTripModel"] }
    ]; };
    return TrySaveRTrip;
}());

var SetRTrips = /** @class */ (function () {
    function SetRTrips(payload) {
        this.payload = payload;
        this.type = SET_RTRIPS;
    }
    SetRTrips.ctorParameters = function () { return [
        { type: Array }
    ]; };
    return SetRTrips;
}());

var SetActiveRTrip = /** @class */ (function () {
    function SetActiveRTrip(payload) {
        this.payload = payload;
        this.type = SET_ACTIVE_RTRIP;
    }
    SetActiveRTrip.ctorParameters = function () { return [
        { type: _rtrip_model__WEBPACK_IMPORTED_MODULE_0__["RTripModel"] }
    ]; };
    return SetActiveRTrip;
}());



/***/ }),

/***/ "./src/app/roles/business/roadtrip/store/rtrips.effects.ts":
/*!*****************************************************************!*\
  !*** ./src/app/roles/business/roadtrip/store/rtrips.effects.ts ***!
  \*****************************************************************/
/*! exports provided: RTripsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTripsEffects", function() { return RTripsEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/serverEndpoints */ "./src/app/shared/serverEndpoints.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rtrips_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rtrips.actions */ "./src/app/roles/business/roadtrip/store/rtrips.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var RTripsEffects = /** @class */ (function () {
    function RTripsEffects(action, http) {
        var _this = this;
        this.action = action;
        this.http = http;
        this.uploadImage = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_rtrips_actions__WEBPACK_IMPORTED_MODULE_5__["TRY_UPLOAD_RTRIP_IMAGE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) {
            return data.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (data) {
            return _this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_1__["uploadRTripImage"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (response) {
            if (response.status === 200) {
                return [
                    {
                        type: _rtrips_actions__WEBPACK_IMPORTED_MODULE_5__["SET_ACTIVE_RTRIP"],
                        payload: response.body
                    }
                ];
            }
            else {
                alert('Some error occured !');
                return [];
            }
        }));
        this.editRTrip = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_rtrips_actions__WEBPACK_IMPORTED_MODULE_5__["TRY_SAVE_RTRIP"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) {
            return data.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (data) {
            return _this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_1__["saveRTrip"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (response) {
            if (response.status === 200) {
                return [
                    {
                        type: _rtrips_actions__WEBPACK_IMPORTED_MODULE_5__["SET_ACTIVE_RTRIP"],
                        payload: response.body
                    }
                ];
            }
            else {
                alert('Some error occured !');
                return [];
            }
        }));
        this.fetchRTrips = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_rtrips_actions__WEBPACK_IMPORTED_MODULE_5__["TRY_FETCH_RTRIPS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () {
            return _this.http.get(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_1__["fetchRTrips"], { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (response) {
            if (response.status === 200) {
                console.log('inside fetch trek 200');
                return [
                    {
                        type: _rtrips_actions__WEBPACK_IMPORTED_MODULE_5__["SET_RTRIPS"],
                        payload: response.body
                    }
                ];
            }
            else {
                // alert('Some error occured !');
                return [];
            }
        }));
    }
    RTripsEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()
    ], RTripsEffects.prototype, "uploadImage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()
    ], RTripsEffects.prototype, "editRTrip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()
    ], RTripsEffects.prototype, "fetchRTrips", void 0);
    RTripsEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], RTripsEffects);
    return RTripsEffects;
}());



/***/ }),

/***/ "./src/app/roles/business/roadtrip/store/rtrips.reducer.ts":
/*!*****************************************************************!*\
  !*** ./src/app/roles/business/roadtrip/store/rtrips.reducer.ts ***!
  \*****************************************************************/
/*! exports provided: RTripsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTripsReducer", function() { return RTripsReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var initialState = {
    activeRTrip: null,
    RTrips: []
};
function RTripsReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'SET_ACTIVE_RTRIP': {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { activeRTrip: action.payload });
        }
        case 'SET_RTRIPS': {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { RTrips: action.payload });
        }
        default: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
        }
    }
}


/***/ })

}]);
//# sourceMappingURL=roadtrip-roadtrip-module-es5.js.map