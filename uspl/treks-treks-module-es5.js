(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["treks-treks-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/demand/treks/treks.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demand/treks/treks.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demand/treks/trekscheckout/trekscheckout.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demand/treks/trekscheckout/trekscheckout.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-5 mb-5\">\n  <div class=\"col-md-8 offset-md-2 trek-checkout\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"row\">\n          <h1 class=\"text-bold\">Payments</h1>\n        </div>\n\n        <div class=\"row mt-5\">\n          <h2 class=\"text-bold\">Verify your Details</h2>\n        </div>\n\n        <div class=\"row mt-1\">\n          <form [formGroup]=\"userForm\">\n            <div class=\"col-md-12\">\n              <label for=\"\">Mobile Number</label>\n              <input class=\"form-control\" type=\"number\" formControlName=\"mobile\" #mobile\n                     (change)=\"getUserDetails(+(mobile.value))\">\n            </div>\n\n            <div class=\"col-md-12\">\n              <label for=\"\">Name</label>\n              <input class=\"form-control\" type=\"text\" formControlName=\"name\">\n            </div>\n            <div class=\"col-md-12\">\n              <label for=\"\">Email</label>\n              <input class=\"form-control\" type=\"text\" formControlName=\"email\">\n            </div>\n          </form>\n        </div>\n\n        <div class=\"row mt-5\">\n          <h2 class=\"text-bold\">Special Requirement</h2>\n        </div>\n        <div class=\"row mt-2\">\n          <textarea name=\"\" id=\"\" cols=\"300\" rows=\"4\" class=\"p-3\"></textarea>\n        </div>\n\n        <div class=\"row mt-5 pl-3\">\n          <button class=\"btn btn-red\" id=\"pay\" [disabled]=\"!userForm.value\" (click)=\"onSubmit()\">Confirm and Pay Now\n          </button>\n          <!--          <button class=\"btn btn-red\" id=\"pay\" [disabled]=\"!userForm.value\" onclick=\"$.pay()\">Confirm and Pay Now-->\n          <!--          </button>-->\n\n        </div>\n      </div>\n\n      <div class=\"col-md-6\">\n        <div class=\"row\">\n          <div class=\"col-md-11 offset-1 pb-5 pt-5 checkout-details\">\n            <div class=\"m-2\">\n              <div class=\"border-bottom pb-4 mb-2\">\n                <h4 class=\"text-bold\">{{activeTrek.trekTitle}}</h4>\n              </div>\n\n              <div class=\"mt-3\">\n                <h6>\n\n                  From\n\n                  {{selectedPersonDetails.days.startDate.year}}\n                  /{{selectedPersonDetails.days.startDate.month}}\n                  /{{selectedPersonDetails.days.startDate.day}}  to   {{selectedPersonDetails.days.toDate.year}}\n                  /{{selectedPersonDetails.days.toDate.month}}\n                  /{{selectedPersonDetails.days.toDate.day}}\n\n\n                </h6>\n              </div>\n              <div class=\" \">\n                <h6>₹ {{activeTrek.pricePerPerson}} per person</h6>\n              </div>\n              <div class=\" \">\n                <h6>Language is {{activeTrek.languages.english ? 'English' : ''}}\n                  {{activeTrek.languages.hindi ? 'Hindi' : ''}}</h6>\n              </div>\n            </div>\n            <div class=\"row mt-5 b-r shadow-boxed p-2 m-2\">\n              <div class=\"col-md-12\">Provided : {{activeTrek.provided.transport ? 'Transport' : ''}}\n                {{activeTrek.provided.food ? 'Food' : ''}}\n                {{activeTrek.provided.accommodation ? 'Accommodation' : ''}}</div>\n            </div>\n            <div class=\"row mt-5 b-r shadow-boxed p-2 m-2\">\n              <h3 class=\"text-bold\">Who's coming along</h3>\n              <div class=\"col-md-7 people-count\">\n                <div class=\"row\">\n                  <div class=\"col-md-6\"> Adults</div>\n                  <div class=\"col-md-6\">{{selectedPersonDetails.adults}}</div>\n                </div>\n              </div>\n              <div class=\"col-md-7 people-count\">\n                <div class=\"row\">\n                  <div class=\"col-md-6\"> Children</div>\n                  <div class=\"col-md-6\">{{selectedPersonDetails.children}}</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row mt-5 bg-pink b-r shadow-boxed p-2 m-2\">\n              <div class=\"col-md-6\">Total INR</div>\n              <div class=\"col-md-6\">₹ {{finalPrice}}</div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n</div>\n<div id=\"payment-div\"></div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demand/treks/treksdetails/treksdetails.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demand/treks/treksdetails/treksdetails.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mainRow\">\n  <div class=\"col-md-12 trekDetailHeader\">\n    <div class=\"w-75 m-auto\">\n      <div class=\"row \">\n        <div class=\"col-md-4 pr-0 trek-header-image\">\n          <img [src]=\"trekBannerImages[0]\" alt=\"\" class=\"h-100\">\n        </div>\n        <div class=\"col-md-2 pr-0 trek-header-image\">\n          <img [src]=\"trekBannerImages[1]\" alt=\"\" class=\"h-100\">\n\n        </div>\n        <div class=\"col-md-2 pr-0 trek-header-image\">\n          <img [src]=\"trekBannerImages[2]\" alt=\"\" class=\"h-50\">\n          <img [src]=\"trekBannerImages[3]\" alt=\"\" class=\"h-50\">\n\n        </div>\n        <div class=\"col-md-4 pr-0 trek-header-image\">\n          <img [src]=\"trekBannerImages[4]\" alt=\"\" class=\"h-100\">\n\n        </div>\n      </div>\n    </div>\n    <div class=\"w-75 m-auto\">\n      <div class=\"row mt-3\">\n        <div class=\"col-md-4 pr-0\">\n          <div class=\"headerSubheading\">\n            {{activeTrek.totalDays}} Day Adventure\n          </div>\n          <div class=\"mainHeading\">\n            <h4>\n              {{activeTrek.trekTitle}}\n            </h4>\n            <h6 class=\"headerSubheading text-bold\">\n              {{activeTrek.location}}\n            </h6>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n            <span class=\"text-white mr-2\">\n              4.0\n            </span>\n              <span>\n              <img src=\"../../../../assets/icons/treks/star.png\" class=\"starsImage\" alt=\"\">\n            </span>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-2 pr-0\">\n          <div class=\"headerSubheading\">\n            Language Spoken\n          </div>\n          <div class=\"mainHeading\">\n            <h4 *ngIf=\"activeTrek.languages.hindi \">\n              Hindi\n            </h4>\n            <h4 *ngIf=\"activeTrek.languages.english \">\n              English\n            </h4>\n          </div>\n        </div>\n        <div class=\"col-md-2 pr-0\">\n          <div class=\"headerSubheading\">\n            Difficulty Level\n          </div>\n          <div class=\"mainHeading\">\n            <h4>{{activeTrek.difficultyLevel}}</h4>\n          </div>\n\n        </div>\n        <div class=\"col-md-4 pr-0\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"headerSubheading\">\n                Price/Person\n              </div>\n\n              <div class=\"mainHeading\">\n                <h4>₹{{activeTrek.pricePerPerson}}\n                </h4>\n              </div>\n            </div>\n\n            <div class=\"col-md-6\">\n\n              <div class=\"headerSubheading\">\n                Includes\n              </div>\n              <div class=\"mainHeading\">\n                <div *ngIf=\"activeTrek.provided.accommodation\"><small>Accommodation</small></div>\n                <div *ngIf=\"activeTrek.provided.food\"><small>Food</small></div>\n                <div *ngIf=\"activeTrek.provided.transport\"><small>Transport</small></div>\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-8 offset-2 pt-3 fixed-bottom booking-bar\">\n    <form [formGroup]=\"queryForm\" (ngSubmit)=\"onSubmitQueryForm()\">\n      <div class=\"row\">\n        <div class=\"col-md-6 form-group\">\n          <label class=\"pl-3\">Selected Dates</label>\n          <select (change)=\"selectedDatesIndexFunction(+sel.value)\" #sel class=\"form-control text-white\">\n            <option [selected]=\"i===0\" [value]=\"i\"\n                    *ngFor=\"let date of activeTrek.trekDates;let i=index\"> {{date.startDate.year}}\n              /{{date.startDate.month}}\n              /{{date.startDate.day}}  to   {{date.toDate.year}}/{{date.toDate.month}}\n              /{{date.toDate.day}}</option>\n          </select>\n        </div>\n        <div class=\"col\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <label class=\"pl-3\">No. of People</label>\n              <div class=\"row\">\n                <div class=\"col\">\n                  <div ngbDropdown class=\"d-inline-block\">\n                    <input class=\"form-control\" type=\"number\" placeholder=\"No. of People\" id=\"dropdownForm1\"\n                           [value]=\"adult+children\"\n                           ngbDropdownToggle readonly>\n\n                    <div ngbDropdownMenu aria-labelledby=\"dropdownForm1\">\n\n                      <div class=\"w-100 d-flex\">\n                        <div class=\"w-50 pl-2\">\n                          <small> Adults </small>\n                        </div>\n                        <div class=\"col control-div pointer-event\" (click)=\"adultControl(-1)\">\n                          -\n                        </div>\n                        <div class=\"col control-div\">\n                          {{adult}}\n                        </div>\n                        <div class=\"col control-div pointer-event\" (click)=\"adultControl(1)\">\n                          +\n                        </div>\n                      </div>\n                      <div class=\"w-100 d-flex\">\n                        <div class=\"w-50 pl-2\">\n                          <small> Children </small>\n                        </div>\n                        <div class=\"col control-div pointer-event\" (click)=\"childControl(-1)\">\n                          -\n                        </div>\n                        <div class=\"col control-div\">\n                          {{children}}\n                        </div>\n                        <div class=\"col control-div pointer-event\" (click)=\"childControl(1)\">\n                          +\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n            <div class=\"col-md-6\">\n              <label class=\"pl-3\">Total : ₹{{finalPrice}}</label>\n              <input [disabled]=\"!queryForm.valid\" class=\"form-control btn btn-red\" type=\"submit\" value=\"Book Now\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n\n  <div class=\"col-md-12 mt-5\">\n    <div class=\"row pt-5 w-75 m-auto\">\n      <div class=\"col-md-5\">\n        <h1 class=\"text-bold\">\n          What you'll do\n        </h1>\n      </div>\n      <div class=\"col-md-7\">\n        <p>\n          {{activeTrek.ownerDescription}}\n        </p>\n      </div>\n    </div>\n\n    <div class=\"row pt-5 w-75 m-auto\">\n\n      <!--      div for left headings-->\n      <div class=\"col-md-5\">\n        <h1 class=\"text-bold\">\n          Your Itenary\n        </h1>\n      </div>\n\n      <div class=\"col-md-7\">\n        <!--        div for no of days-->\n        <div *ngFor=\" let day of activeTrek.trekDayDetails; let i = index\">\n          <div class=\"col-md-12\">\n            <h6 class=\"text-bold\">\n              Day {{i + 1}}\n            </h6>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"row\">\n              <div class=\"col-md-5\">\n                <img [src]=\"day.trekDayImage\" alt=\"\" class=\"itn-image\">\n              </div>\n              <div class=\"col-md-7\">\n                <div class=\"row\">\n                  <div class=\"col-md-12 h4 text-bold\">\n                    {{day.title}}\n                  </div>\n                  <div class=\"col-md-12 itn-txt\">\n                    {{day.activityDescription}}\n                  </div>\n\n                  <div class=\"col-md-12 text-right\">\n                    <span class=\"h6 show-more-span\">Show more</span>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n\n    <div class=\"row pt-5 w-75 m-auto\">\n\n      <div class=\"col-md-5\">\n        <h1 class=\"text-bold\">\n          What is included\n        </h1>\n      </div>\n      <div class=\"col-md-7\">\n        <div class=\"row\">\n          <div class=\"col-md-5 inclusive-box\" *ngIf=\"activeTrek.provided.food\">\n            <div class=\"h5 mt-3\">\n              Food\n            </div>\n            <!--            <div class=\"h6\">-->\n            <!--              2 Food-->\n            <!--            </div>-->\n          </div>\n          <div class=\"col-md-5 inclusive-box\" *ngIf=\"activeTrek.provided.accommodation\">\n            <div class=\"h5 mt-3\">\n              Accommodation\n            </div>\n            <!--            <div class=\"h6\">-->\n            <!--              1 Room-->\n            <!--            </div>-->\n          </div>\n          <div class=\"col-md-5 inclusive-box\" *ngIf=\"activeTrek.provided.transport\">\n            <div class=\"h5 mt-3\">\n              Transportation\n            </div>\n            <!--            <div class=\"h6\">-->\n            <!--              Cycle-->\n            <!--            </div>-->\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"row pt-5 w-75 m-auto\">\n\n      <!--      div for left headings-->\n      <div class=\"col-md-5\">\n        <h1 class=\"text-bold\">\n          Things to keep in mind\n        </h1>\n      </div>\n\n      <div class=\"col-md-7\">\n        <!--        div for no of days-->\n        <div>\n          <div class=\"col-md-12\">\n            <div class=\"row\">\n              <div class=\"col-md-5\">\n                <h5 class=\"text-bold\">\n                  Things to keep with you\n                </h5>\n              </div>\n              <div class=\"col-md-7\">\n                <div class=\"col-md-12 itn-txt\">\n                  {{activeTrek.carry}}\n                </div>\n                <div class=\"col-md-12 text-right\">\n                  <span class=\"h6 show-more-span\">Show more</span>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-5\">\n                <h5 class=\"text-bold\">\n                  Cancellation policy\n                </h5>\n              </div>\n              <div class=\"col-md-7\">\n                <div class=\"col-md-12 itn-txt\">\n                  {{activeTrek.cancellationPolicy}}\n                </div>\n                <div class=\"col-md-12 text-right\">\n                  <span class=\"h6 show-more-span\">Show more</span>\n                </div>\n              </div>\n            </div>\n            <!--            <div class=\"row\">-->\n            <!--              <div class=\"col-md-5\">-->\n            <!--                <h5 class=\"text-bold\">-->\n            <!--                  Guest requirements-->\n            <!--                </h5>-->\n            <!--              </div>-->\n            <!--              <div class=\"col-md-7\">-->\n            <!--                <div class=\"col-md-12 itn-txt\">-->\n            <!--                  He was born in Florence to American parents, and trained in Paris before moving to London, living-->\n            <!--                  most of his life in Europe.-->\n            <!--                </div>-->\n            <!--                <div class=\"col-md-12 text-right\">-->\n            <!--                  <span class=\"h6 show-more-span\">Show more</span>-->\n            <!--                </div>-->\n            <!--              </div>-->\n            <!--            </div>-->\n\n          </div>\n\n\n        </div>\n      </div>\n\n    </div>\n\n\n    <!--for similar treks-->\n\n    <!--    <div class=\"row pt-5 w-75 m-auto\">-->\n    <!--      <div class=\"col-md-5\">-->\n    <!--        <h1 class=\"text-bold\">-->\n    <!--          Similar Treks-->\n    <!--        </h1>-->\n    <!--      </div>-->\n    <!--    </div>-->\n    <!--    <div class=\"row pt-5 w-75 similar-trek m-auto\">-->\n    <!--      <div class=\"row\">-->\n    <!--        <div class=\"col-md-3\">-->\n    <!--          <div class=\"col-md-12\">-->\n    <!--            <img src=\"../../../../assets/img/treks/Image%2038.png\" class=\"itn-image\" alt=\"\">-->\n    <!--          </div>-->\n    <!--          <div class=\"col-md-12\">-->\n    <!--            <div class=\"row\">-->\n    <!--              <div class=\"col-md-12\">-->\n    <!--                <div class=\"row\">-->\n    <!--                  <div class=\"col-md-8\">-->\n    <!--                   <span class=\" mr-2\">-->\n    <!--                 Name of the trek-->\n    <!--                </span>-->\n    <!--                  </div>-->\n    <!--                  <div class=\"col-md-4\">-->\n    <!--                  <span class=\" mr-2\">-->\n    <!--               4.0-->\n    <!--                </span>-->\n    <!--                    <span>-->\n    <!--                 <img src=\"../../../../assets/icons/treks/star.png\" class=\"starsImage\" alt=\"\">-->\n    <!--                </span>-->\n    <!--                  </div>-->\n    <!--                </div>-->\n\n\n    <!--              </div>-->\n    <!--              <div class=\"col-md-12\"></div>-->\n    <!--            </div>-->\n    <!--          </div>-->\n    <!--          <div class=\"col-md-12\">-->\n    <!--            <h6> $1233/Night</h6>-->\n    <!--          </div>-->\n    <!--        </div>-->\n    <!--        <div class=\"col-md-3\">-->\n    <!--          <div class=\"col-md-12\">-->\n    <!--            <img src=\"../../../../assets/img/treks/Image%2038.png\" class=\"itn-image\" alt=\"\">-->\n    <!--          </div>-->\n    <!--          <div class=\"col-md-12\">-->\n    <!--            <div class=\"row\">-->\n    <!--              <div class=\"col-md-12\">-->\n    <!--                <div class=\"row\">-->\n    <!--                  <div class=\"col-md-8\">-->\n    <!--                   <span class=\" mr-2\">-->\n    <!--                 Name of the trek-->\n    <!--                </span>-->\n    <!--                  </div>-->\n    <!--                  <div class=\"col-md-4\">-->\n    <!--                  <span class=\" mr-2\">-->\n    <!--               4.0-->\n    <!--                </span>-->\n    <!--                    <span>-->\n    <!--                 <img src=\"../../../../assets/icons/treks/star.png\" class=\"starsImage\" alt=\"\">-->\n    <!--                </span>-->\n    <!--                  </div>-->\n    <!--                </div>-->\n\n\n    <!--              </div>-->\n    <!--              <div class=\"col-md-12\"></div>-->\n    <!--            </div>-->\n    <!--          </div>-->\n    <!--          <div class=\"col-md-12\">-->\n    <!--            <h6> $1233/Night</h6>-->\n    <!--          </div>-->\n    <!--        </div>-->\n    <!--        <div class=\"col-md-3\">-->\n    <!--          <div class=\"col-md-12\">-->\n    <!--            <img src=\"../../../../assets/img/treks/Image%2038.png\" class=\"itn-image\" alt=\"\">-->\n    <!--          </div>-->\n    <!--          <div class=\"col-md-12\">-->\n    <!--            <div class=\"row\">-->\n    <!--              <div class=\"col-md-12\">-->\n    <!--                <div class=\"row\">-->\n    <!--                  <div class=\"col-md-8\">-->\n    <!--                   <span class=\" mr-2\">-->\n    <!--                 Name of the trek-->\n    <!--                </span>-->\n    <!--                  </div>-->\n    <!--                  <div class=\"col-md-4\">-->\n    <!--                  <span class=\" mr-2\">-->\n    <!--               4.0-->\n    <!--                </span>-->\n    <!--                    <span>-->\n    <!--                 <img src=\"../../../../assets/icons/treks/star.png\" class=\"starsImage\" alt=\"\">-->\n    <!--                </span>-->\n    <!--                  </div>-->\n    <!--                </div>-->\n\n\n    <!--              </div>-->\n    <!--              <div class=\"col-md-12\"></div>-->\n    <!--            </div>-->\n    <!--          </div>-->\n    <!--          <div class=\"col-md-12\">-->\n    <!--            <h6> $1233/Night</h6>-->\n    <!--          </div>-->\n    <!--        </div>-->\n    <!--        <div class=\"col-md-3\">-->\n    <!--          <div class=\"col-md-12\">-->\n    <!--            <img src=\"../../../../assets/img/treks/Image%2038.png\" class=\"itn-image\" alt=\"\">-->\n    <!--          </div>-->\n    <!--          <div class=\"col-md-12\">-->\n    <!--            <div class=\"row\">-->\n    <!--              <div class=\"col-md-12\">-->\n    <!--                <div class=\"row\">-->\n    <!--                  <div class=\"col-md-8\">-->\n    <!--                   <span class=\" mr-2\">-->\n    <!--                 Name of the trek-->\n    <!--                </span>-->\n    <!--                  </div>-->\n    <!--                  <div class=\"col-md-4\">-->\n    <!--                  <span class=\" mr-2\">-->\n    <!--               4.0-->\n    <!--                </span>-->\n    <!--                    <span>-->\n    <!--                 <img src=\"../../../../assets/icons/treks/star.png\" class=\"starsImage\" alt=\"\">-->\n    <!--                </span>-->\n    <!--                  </div>-->\n    <!--                </div>-->\n\n\n    <!--              </div>-->\n    <!--              <div class=\"col-md-12\"></div>-->\n    <!--            </div>-->\n    <!--          </div>-->\n    <!--          <div class=\"col-md-12\">-->\n    <!--            <h6> $1233/Night</h6>-->\n    <!--          </div>-->\n    <!--        </div>-->\n\n    <!--      </div>-->\n\n    <!--      <div class=\"col-md-12 text-center mt-5 mb-5 pb-5\">-->\n    <!--        <a routerLink=\"../details\">-->\n    <!--          <button class=\"btn border-dark\">Show More</button>-->\n    <!--        </a>-->\n    <!--      </div>-->\n    <!--    </div>-->\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demand/treks/trekslist/trekslist.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demand/treks/trekslist/trekslist.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\"> `\n  <div class=\"col-md-8 offset-2 pt-3\">\n    <form [formGroup]=\"basicForm\" action=\"\" (ngSubmit)=\"search()\" > \n      <div class=\"row\">\n        <div class=\"col-md-5 form-group \">\n                <input ngx-google-places-autocomplete formControlName=\"location\" class=\"form-control\"\n                       placeholder=\"Enter your location\" #location>\n        </div>\n        <div class=\"col\"> \n          <div class=\"row\">\n            <div class=\"col-md-4 form-group\">\n              <input placeholder=\"Date\" name=\"sd\" ngbDatepicker\n                 #sd=\"ngbDatepicker\"\n                 class=\"form-control\" (click)=\"sd.toggle()\" autocomplete=\"off\" formControlName=\"startDate\">\n            </div>\n            <div class=\"col-md-4\">\n              <select class=\"form-control\" formControlName=\"difficultyLevel\"> \n                <option value=\"Easy\">Easy</option>\n                <option value=\"Moderate\">Moderate</option>\n                <option value=\"Hard\">Hard</option>\n              </select>\n            </div>\n            <div class=\"col-md-4\">\n              <input class=\"form-control btn btn-blue\" type=\"submit\" value=\"Search\"> \n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n<div class=\"row mb-5\" *ngIf=\"!isSearched && !show_all && !no_treks\">\n  <div class=\"col-md-12 trekDetailHeader\">\n\n    <div class=\"row\">\n      <div class=\"col-md-12 trek-header\">\n        <div class=\"col-md-8 offset-2 pt-5\">\n          <small class=\"text-bold\">Introducing</small>\n          <h1 class=\"text-bold\">USPL Treks</h1>\n          <h2 class=\"text-bold\">Treks hosted to amazing places, all you have to do is <br> show up.</h2>\n          <small class=\"text-bold\">Scroll to explore </small>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-12 sub-header\">\n      <div class=\"row\">\n        <div class=\"col-md-5\">\n          <img src=\"../../../../assets/img/treks/Image%2056.png\" class=\"trek-header-image w-100\">\n        </div>\n        <div class=\"col-md-7\">\n          <div class=\"\">\n            <img src=\"../../../../assets/img/treks/Image%2050.png\" class=\"trek-subheader-image w-100\">\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <img src=\"../../../../assets/img/treks/Image%2054.png\" class=\"trek-subheader-image w-100\">\n            </div>\n            <div class=\"col-md-6\">\n              <img src=\"../../../../assets/img/treks/Image%2051.png\" class=\"trek-subheader-image w-100\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-12 text-center mt-5 text-bold text-white\">\n      <div class=\"h1 text-bold\">Planning a trek should be easy.</div>\n    </div>\n\n    <div class=\"row w-75 m-auto\">\n      <div class=\"col-md-12 mt-5\">\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <img src=\"../../../../assets/icons/treks/treasure-map.svg\">\n            <h3 class=\"text-white text-bold mt-3\">Expertly curated itineraries</h3>\n            <h6 class=\"text-white mt-3\">Choose from hundreds of small group trips designed by expert hosts with in-depth\n              local knowledge and outdoor credentials.</h6>\n          </div>\n          <div class=\"col-md-4\">\n            <img src=\"../../../../assets/icons/treks/camp.svg\">\n            <h3 class=\"text-white text-bold mt-3\">Lodging & meals included</h3>\n            <h6 class=\"text-white mt-3\">In addition to planning activities, adventure hosts also provide lodging and\n              meals. So all you have to do is book and go.</h6>\n          </div>\n          <div class=\"col-md-4\">\n            <img src=\"../../../../assets/icons/treks/safari.svg\">\n            <h3 class=\"text-white text-bold mt-3\">All logistics handled</h3>\n            <h6 class=\"text-white mt-3\">Save time researching specialist guides and stop worrying about what to bring.\n              Hosts coordinate your equipment list and provide local transport.</h6>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-8 offset-2 mt-5 trek-lists\">\n    <div class=\"row\">\n\n      <div class=\"col-md-12 h3 text-bold\">\n        <div class=\"row\">Travel India with USPL</div>\n      </div>\n      <div class=\"col-md-12 text-right\">\n        <button class=\"btn border-dark\" (click)=\"searchList()\">Show All</button>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"row\">\n\n          <div class=\"col-md-4 trek-block\" *ngFor=\"let trek of allTreks| slice :0:3;\">\n            <div class=\"row trek-chip\">\n              <div class=\"col-md-4 pl-0\">\n                <img src=\"../../../../assets/img/treks/trek-card.png\" alt=\"\">\n              </div>\n              <div class=\"col-md-8 h6 text-bold pl-2 trek-chip-text\">\n                {{trek.trek[0].state}}\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"row pt-5\" *ngFor=\"let trek of allTreks \">\n      <div class=\"col-md-12 h3 text-bold\">\n        <div class=\"row\">Treks in {{trek.trek[0].state}}</div>\n      </div>\n\n      <div class=\"col-md-12 text-right\">\n        <!-- <button class=\"btn border-dark\" (click)=\"searchList()\">Show All</button> -->\n        <button class=\"btn border-dark\" (click)=\"statewiselist(trek._id,trek.trek[0].state)\">Show All</button>\n      </div>\n\n      <div class=\"col-md-12 mt-3\">\n        <div class=\"row\">\n          <div class=\"col-md-4\" (click)=\"navigateToTrekDetail(subtrek._id.$oid)\"\n               *ngFor=\"let subtrek of trek.trek | slice:0:3;\">\n            <div class=\"trek-card\">\n              <div class=\"w-100 trek-card-content pt-2 mb-3\">\n                <div class=\"w-100 d-flex\">\n                  <div class=\"w-50\">\n                    <div>\n                      <small>\n                        Company: {{subtrek.company}}\n                      </small>\n                    </div>\n                    <div>\n                      {{subtrek.trekTitle}}\n                    </div>\n                    <div class=\"text-bold\">\n                      {{subtrek.totalDays}} days {{subtrek.totalDays -1}} nights\n                    </div>\n                  </div>\n                  <div class=\"w-50 h4 text-right\">\n                    <span>4.5</span>\n                    <span class=\"text-danger\">&#9733;</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n   <!--  <div class=\"row pt-5\">\n      <div class=\"col-md-12 h3 text-bold\">\n        <div class=\"row\">Treks from all over India</div>\n      </div>\n\n      <div class=\"col-md-12 text-right\">\n        <button class=\"btn border-dark\" (click)=\"searchList()\">Show All</button>\n      </div>\n\n      <div class=\"col-md-12 mt-3\">\n        <div class=\"row\" *ngFor=\"let trek of allTreks\">\n          <div class=\"col-md-4\" *ngFor=\"let subtrek of trek.trek\">\n            <div>\n              <div class=\"trek-card\" (click)=\"navigateToTrekDetail(subtrek._id.$oid)\" style=\"cursor: pointer\">\n                <div class=\"w-100 trek-card-img\">\n                  <img [src]=\"subtrek.trekImage[0]\" alt=\"\">\n                </div>\n                <div class=\"w-100 trek-card-content pt-2 mb-3\">\n                  <div class=\"w-100 d-flex\">\n                    <div class=\"w-50\">\n                      <div>\n                        <small>\n                          Company: {{subtrek.company}}\n                        </small>\n                      </div>\n                      <div>\n                        {{subtrek.trekTitle}}\n                      </div>\n                      <div class=\"text-bold\">\n                        ${{subtrek.pricePerPerson}} / person\n                      </div>\n                    </div>\n                    <div class=\"w-50 h4 text-right\">\n                      <span>4.5</span>\n                      <span class=\"text-danger\">&#9733;</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n    </div> -->\n\n  </div>\n\n  <div class=\"col-md-12 text-center mt-5\">\n    <a routerLink=\"../details\">\n      <button class=\"btn border-dark\" (click)=\"searchList()\">Show More</button>\n    </a>\n  </div>\n</div>\n\n<div class=\"row mb-5 mt-3\" *ngIf=\"no_treks\">\n  <div class=\"col-md-12 h3 text-black-50 text-center mb-5\">\n    <span class=\"text-danger\">Sorry no treks starting on for your prefernce</span>\n  </div>  \n</div>\n\n<div class=\"row mb-5 mt-3\" *ngIf=\"show_all\">\n  <div class=\"col-md-12 h3 text-black-50 text-center mb-5\" *ngIf=\"show_all\">\n    <hr *ngIf=\"!reletive_treks\">\n    All Treks\n  </div>\n  <div class=\"col-md-12 h3 text-black-50 text-center mb-5\" *ngIf=\"reletive_treks\" >\n    <span class=\"text-info\">Sorry no treks starting on specified date.The following treks are starting on the days close to your preference. </span>\n  </div>\n  <div class=\"col-md-10 offset-1\">\n    <div class=\"row\" *ngFor=\"let trek of allTreks\">\n     <h5 >{{trek.trek[0].state}}</h5>\n      <div class=\"col-md-3\" *ngFor=\"let subtrek of trek.trek\">\n        <div>\n          <div class=\"trek-card\" style=\"cursor: pointer\">\n            <div class=\"w-100 trek-card-content pt-2 mb-3\">\n              <div class=\"w-100 d-flex\">\n                <div class=\"w-50\">\n                  <div>\n                    <small>\n                      Company: {{subtrek.company}}\n                    </small>\n                  </div>\n                  <div>\n                    {{subtrek.trekTitle}}\n                  </div>\n                  <div class=\"text-bold\">\n                    {{subtrek.totalDays}} days {{subtrek.totalDays -1}} nights\n                  </div>\n                  <div class=\"text-bold\">\n                    {{subtrek.difficultyLevel}}\n                  </div>\n                </div>\n                <div class=\"w-50 h4 text-right\">\n                  <span>4.5</span>\n                  <span class=\"text-danger\">&#9733;</span>\n                </div>\n              </div>\n              <div class=\"w-100 text-center mt-1\">\n                <span class=\"btn btn-blue btn-sm\" (click)=\"navigateToTrekDetail(subtrek._id.$oid)\">Get Details</span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n</div>\n<div class=\"row mb-5 mt-3\" *ngIf=\"isSearched\">\n  <div class=\"col-md-12 h3 text-black-50 text-center mb-5\">\n    <h5>Treks in {{state}}</h5>\n  </div>\n  <div class=\"col-md-10 offset-1\">\n    <div class=\"row\" *ngFor=\"let trek of statewiseTreks\">\n      <div class=\"col-md-3\" *ngFor=\"let subtrek of trek.trek\">\n        <div>\n          <div class=\"trek-card\" style=\"cursor: pointer\">\n            <div class=\"w-100 trek-card-content pt-2 mb-3\">\n              <div class=\"w-100 d-flex\">\n                <div class=\"w-50\">\n                  <div>\n                    <small>\n                      Company: {{subtrek.company}}\n                    </small>\n                  </div>\n                  <div>\n                    {{subtrek.trekTitle}}\n                  </div>\n                  <div class=\"text-bold\">\n                    {{subtrek.totalDays}} days {{subtrek.totalDays -1}} nights\n                  </div>\n                  <div class=\"text-bold\">\n                    {{subtrek.difficultyLevel}}\n                  </div>\n                </div>\n                <div class=\"w-50 h4 text-right\">\n                  <span>4.5</span>\n                  <span class=\"text-danger\">&#9733;</span>\n                </div>\n              </div>\n              <div class=\"w-100 text-center mt-1\">\n                <span class=\"btn btn-blue btn-sm\" (click)=\"navigateToTrekDetail(subtrek._id.$oid)\">Get Details</span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/treks/addtrek/addtrek.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/treks/addtrek/addtrek.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row addtrek\" #addtrek>\n  <div class=\"col-md-10 offset-1 mb-5\">\n    <div class=\"h3 text-bold mb-5 text-center\">Your Details</div>\n    <ngb-tabset type=\"pills\" [justify]=\"'center'\" #t=\"ngbTabset\">\n\n      <ngb-tab title=\"BASIC DETAILS\" id=\"basicForm\">\n        <ng-template ngbTabContent>\n\n          <form [formGroup]=\"basicForm\" (ngSubmit)=\"basicFormSubmit()\">\n\n            <div class=\"row form-group main-form-div mt-1\" #addtrekday>\n\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">Give your trek a title</label> <br>\n                <input type=\"text\" class=\"form-control w-50\" formControlName=\"trekTitle\">\n              </div>\n\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">Company</label>\n                <input formControlName=\"company\" class=\"form-control w-50\"\n                       placeholder=\"Enter your Company Name\">\n\n              </div>\n              <div class=\"col-md-12\">\n                  <label class=\"form-title\">Tour Guide Name</label> <br>\n                  <input type=\"text\" class=\"form-control w-50\" formControlName=\"tourGuide\">\n              </div>\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">Your Guide Bio:</label> <br>\n                <small>Tell us more about the person, use this space to describe to your guide, give us a brief description about this person.</small>\n                <textarea class=\"form-control p-3 w-75\" rows=\"5\" formControlName=\"guideDescription\"></textarea>\n              </div>\n\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">Location</label>\n                <input ngx-google-places-autocomplete formControlName=\"location\" class=\"form-control w-50\"\n                       placeholder=\"Enter your location\" #location>\n\n              </div>\n\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">Temperature</label>\n                <input formControlName=\"temperature\" class=\"form-control w-50\"\n                       placeholder=\"Temperature\" #temperature>\n              </div>\n\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">Maximum Altitude</label>\n                <input formControlName=\"altitude\" class=\"form-control w-50\"\n                       placeholder=\"Max Altitude\" #altitude>\n              </div>\n\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">No of Days for this Trek</label> <br>\n                <input type=\"number\" class=\"form-control w-50\" formControlName=\"totalDays\" (blur)=\"onDaySelection($event)\">\n              </div>\n\n              <div class=\"col-md-8\">\n                <label class=\"form-title\">Dates of the trek</label> <br>\n                <small>Select the Start and End for your trek</small>\n                <div class=\"row\">\n                  <input name=\"datepicker\"\n                         class=\"form-control\"\n                         ngbDatepicker\n                         #datepicker=\"ngbDatepicker\"\n                         [autoClose]=\"'outside'\"\n                         (dateSelect)=\"onDateSelection($event)\"\n                         [displayMonths]=\"2\"\n                         [dayTemplate]=\"dates\"\n                         outsideDays=\"hidden\"\n                         [startDate]=\"fromDate\"\n                         type=\"hidden\">\n                  <ng-template #dates let-date let-focused=\"focused\">\n                    <span class=\"custom-day\"\n                          [class.focused]=\"focused\"\n                          [class.range]=\"isRange(date)\"\n                          [class.faded]=\"isHovered(date) || isInside(date)\"\n                          (mouseenter)=\"hoveredDate = date\"\n                          (mouseleave)=\"hoveredDate = null\">\n                      {{ date.day }}\n                    </span>\n                  </ng-template>\n                  <div class=\"col-md-5 form-group\">\n                    <div class=\"input-group\">\n                      <input #dpFromDate\n                             class=\"form-control\"\n                             name=\"dpFromDate\"\n                             [value]=\"formatter.format(fromDate)\"\n                             (input)=\"fromDate = validateInput(fromDate, dpFromDate.value)\"\n                             placeholder=\"Start Date\"\n                             (click)=\"datepicker.toggle()\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-5 form-group\">\n                    <div class=\"input-group\">\n                      <input #dpToDate\n                             class=\"form-control\"\n                             name=\"dpToDate\"\n                             [value]=\"formatter.format(toDate)\"\n                             placeholder=\"End Date\"\n                             (input)=\"toDate = validateInput(toDate, dpToDate.value)\" (click)=\"datepicker.toggle()\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <button class=\"btn btn-cyan\" type=\"button\" (click)=\"addTrekDate()\">add</button>\n                  </div>\n\n                  <div class=\"col-md-12\" *ngIf=\"basicForm.get('trekDates').value\">\n                    <div *ngFor=\"let date of basicForm.get('trekDates').value as Array; let i=index\">\n                     <!--  <small>\n                        Dates for day {{i + 1}} : {{date.startDate.year}}\n                        /{{date.startDate.month}}\n                        /{{date.startDate.day}} to  {{date.toDate.year}}/{{date.toDate.month}}\n                        /{{date.toDate.day}} </small> -->\n                         <small>\n                        Dates for day {{i + 1}} : {{date.startDate}}\n                         to  {{date.toDate}} </small>\n\n                      <button class=\"btn btn-danger\" type=\"button\" style=\"cursor: pointer\"\n                              (click)=\"removeTrekDate(i)\">x\n                      </button>\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">Choose the language for the trek</label> <br>\n                <small>Your primary language will be the main language set on your trek. Guests will be able to filter\n                  to find trek hosted in your language.</small>\n                <div class=\"row\" formGroupName=\"languages\">\n                  <div class=\"col-md-3\">\n                    <input type=\"checkbox\" formControlName=\"hindi\">\n                    <label class=\"ml-2\">Hindi</label>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <input type=\"checkbox\" formControlName=\"english\">\n                    <label class=\"ml-2\">English</label>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">Difficulty level of trek</label>\n                <select class=\"form-control w-25\" formControlName=\"difficultyLevel\">\n                  <option value=\"Easy\" >Easy</option>\n                  <option value=\"Easy to Moderate\">Easy to Moderate</option>\n                  <option value=\"Moderate\">Moderate</option>\n                  <option value=\"Moderate to Hard\">Moderate to Hard</option>\n                  <option value=\"Hard\">Hard</option>\n                  <option value=\"Very Hard\">Very Hard</option>\n                </select>\n              </div>\n\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">Details of your company</label> <br>\n                <small>Tell us more about yourself, use this space to describe to your guests how you make this trek\n                  special and more about yourself as a person.</small>\n                <textarea class=\"form-control p-3 w-75\" rows=\"5\" formControlName=\"ownerDescription\"></textarea>\n              </div>\n\n              <!-- <div class=\"col-md-12\">\n                <label class=\"form-title\">Emergency Response Plan</label> <br>\n                <textarea class=\"form-control p-3 w-75\" rows=\"5\" formControlName=\"emergencyResponsePlan\"></textarea>\n              </div>\n\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">Natural Disaster Emergency Plan</label> <br>\n                <textarea class=\"form-control p-3 w-75\" rows=\"5\"\n                          formControlName=\"naturalDisasterResponsePlan\"></textarea>\n              </div>\n\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">Medical Emergency Response Plan</label> <br>\n                <textarea class=\"form-control p-3 w-75\" rows=\"5\" formControlName=\"medicalResponsePlan\"></textarea>\n              </div> -->\n\n               <div class=\"col-md-12\">\n                  <label class=\"form-title\">Add photo for your trek</label> <br>\n                  <small>Share the picture from the trek for you guests to see.</small>\n\n                  <div class=\"row form-group upload-form-group\">\n                    <div class=\"col-md-4\">\n                      <input class=\"form-control \" type=\"file\" (change)=\"imgPreviewTrek($event)\" multiple\n                             accept=\"image/x-png,image/jpeg\">\n                    </div>\n                    <!--                  <div class=\"col-md-8 image-preview\">-->\n                    <!--                    <img [src]=\"imgPreviewUrlTrek\">-->\n                    <!--                  </div>-->\n                  </div>\n                  <div class=\"col-md-12 mt-0 image-preview\">\n                    <div class=\"row\">\n\n                      <div class=\"col-md-3 p-1\" *ngFor=\"let image of basicForm.get('trekImage').value;\">\n                        <img [src]=\"image.url\" alt=\"\">\n                      </div>\n                    </div>\n                   </div> \n                </div>  \n\n              <!-- <div class=\"col-md-12\">\n                <label class=\"form-title\">Cancellation Policy</label> <br>\n                <textarea class=\"form-control p-3 w-75\" rows=\"5\" formControlName=\"cancellationPolicy\"></textarea>\n              </div> -->\n\n            </div>\n\n            <div class=\"col-md-12\">\n                <label class=\"form-title\">Equipments you will provide</label> <br>\n                <small>Tell us more about yourself, use this space to describe to your guests how you make this trek\n                  special and more about yourself as a person.</small>\n                <textarea class=\"form-control p-3 w-75\" rows=\"5\" formControlName=\"equipmentDescription\"></textarea>\n              </div>\n\n            <div class=\"form-group row mt-5\">\n              <div class=\"col-md-12 text-center\">\n                <button class=\"btn btn-cyan\" [disabled]=\"!basicForm.valid\">Next</button>\n              </div>\n            </div>\n\n          </form>\n        </ng-template>\n      </ngb-tab>\n\n      <ngb-tab title=\"TREK DETAILS\" id=\"trekForm\">\n        <ng-template ngbTabContent>\n\n          <div class=\"col-md-12 pt-2\">\n            <button *ngFor=\"let x of trekDaysArrayDummy; let it= index\"\n                    class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"setTrekDay(it)\">\n              Day : {{it + 1}}\n            </button>\n          </div>\n\n          <div class=\"col-md-12\">\n            <form [formGroup]=\"trekForm\">\n              <div class=\"row form-group main-form-div mt-1\">\n\n                <div class=\"col-md-12 text-bold h3\">\n                  Day : {{currentDay + 1}}\n                </div>\n\n                <div class=\"col-md-12\">\n                  <label class=\"form-title\">Title of the Day</label> <br>\n                  <input type=\"text\" class=\"form-control w-50\" formControlName=\"title\">\n                </div>\n\n                <div class=\"col-md-12\">\n                  <label class=\"form-title\">Describe What you'll Do</label> <br>\n                  <small>Your activity description is a chance to inspire guests to take your experience. Talk\n                    about the\n                    details of the itinerary for this specific day that you have planned for them.</small>\n                  <textarea class=\"form-control p-3 w-75\" rows=\"5\" formControlName=\"activityDescription\"></textarea>\n                </div>\n\n                <div class=\"col-md-12\">\n                  <label class=\"form-title\">Add photo for your day</label> <br>\n                  <small>Share the picture you want to show for this specific day for your guests.</small>\n\n                  <div class=\"row form-group upload-form-group\">\n                    <div class=\"col-md-4\">\n                      <input class=\"form-control\" type=\"file\" (change)=\"imgPreviewTrekDay($event)\">\n                    </div>\n                    <div class=\"col-md-8 image-preview\">\n                      <img [src]=\"imgPreviewUrlTrekDay\">\n                    </div>\n                  </div>\n\n                </div>\n\n                <div class=\"col-md-12\">\n                  <label class=\"form-title\">Location you'll be visiting during the day</label> <br>\n                  <small>Share with your guests the location you will be visiting during the day.</small>\n                  <input ngx-google-places-autocomplete type=\"text\" class=\"form-control w-50\"\n                         formControlName=\"locations\" #daylocation>\n                        <!--  <input ngx-google-places-autocomplete formControlName=\"daylocation\" class=\"form-control w-50\"\n                       placeholder=\"Enter your location\" #daylocation> -->\n                </div>\n\n                <div class=\"col-md-12\" formGroupName=\"provided\">\n                  <label class=\"form-title\">Add details about what you’ll provide</label> <br>\n                  <small>You can provide food and drink, special equipment, a ticket to a concert, or anything\n                    else\n                    special to make your guests comfortable. Share details specific to this day.</small>\n                  <div class=\"row\">\n                    <div class=\"col-md-3\">\n                      <input type=\"checkbox\" formControlName=\"water\">\n                      <label class=\"ml-2\">Water</label>\n                    </div>\n                    <div class=\"col-md-3\">\n                      <input type=\"checkbox\" formControlName=\"food\">\n                      <label class=\"ml-2\">Food</label>\n                    </div>\n                    <div class=\"col-md-3\">\n                      <input type=\"checkbox\" formControlName=\"sleepingBag\">\n                      <label class=\"ml-2\">Sleeping Bag</label>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-md-12\">\n                  <label class=\"form-title\">What should guests bring with them for this day ?</label> <br>\n                  <input type=\"text\" class=\"form-control w-50\" formControlName=\"carry\">\n                </div>\n\n                <div class=\"col-md-12\">\n                  <label class=\"form-title\">The mode of transport for this day</label> <br>\n                  <input type=\"text\" class=\"form-control w-50\" formControlName=\"transport\">\n                </div>\n\n                <div class=\"col-md-12\">\n                  <label class=\"form-title\">Make this a meetup point</label>\n                  <select class=\"form-control w-25\" formControlName=\"meetup\">\n                    <option value=\"YES\">YES</option>\n                    <option value=\"NO\">NO</option>\n                  </select>\n                </div>\n\n                <div class=\"col-md-12\">\n                  <label class=\"form-title\">Notes for the day</label> <br>\n                  <small>You can provide your guests with important notes for the day and also leave any other\n                    important\n                    piece of information for their safe trekking.</small>\n                  <textarea class=\"form-control p-3 w-75\" rows=\"5\" formControlName=\"notes\"></textarea>\n                </div>\n              </div>\n              <div class=\"form-group row mt-5\">\n                <div class=\"col-md-12 text-center\">\n                  <button class=\"btn btn-cyan\" type=\"button\" [disabled]=\"!trekForm.valid\" (click)=\"trekFormSubmit()\">\n                    {{(currentDay == days - 1) ? 'Submit & Next' : 'Submit Day-' + (+currentDay + 1)}}\n                  </button>\n                </div>\n              </div>\n            </form>\n          </div>\n\n        </ng-template>\n      </ngb-tab>\n\n      <ngb-tab title=\"SETTING\" id=\"settingForm\">\n        <ng-template ngbTabContent>\n          <form [formGroup]=\"settingForm\" (ngSubmit)=\"settingFormSubmit()\">\n\n            <div class=\"ow form-group main-form-div mt-5\">\n              <!-- <div class=\"col-md-12\">\n                <label class=\"form-title\">Add photo for your trek</label> <br>\n                <small>Share the picture from the trek for you guests to see.</small>\n\n                <div class=\"row form-group upload-form-group\">\n                  <div class=\"col-md-4\">\n                    <input class=\"form-control \" type=\"file\" (change)=\"imgPreviewTrek($event)\" multiple\n                           accept=\"image/x-png,image/jpeg\">\n                  </div> -->\n                                    <!-- <div class=\"col-md-8 image-preview\"> -->\n                  <!--                    <img [src]=\"imgPreviewUrlTrek\">-->\n                  <!--                  </div>-->\n                <!-- </div>\n              </div> -->\n              <!-- <div class=\"col-md-12 mt-0 image-preview\">\n                <div class=\"row\">\n\n                  <div class=\"col-md-3 p-1\" *ngFor=\"let image of settingForm.get('trekImage').value;\">\n                    <img [src]=\"image.url\" alt=\"\">\n                  </div>\n                </div>\n              </div> -->\n\n              <div class=\"col-md-12\" formGroupName=\"provided\">\n                <label class=\"form-title\">Add details about what you’ll provide</label> <br>\n                <small>You can provide food and drink, special equipment, a ticket to a concert, or anything else\n                  special to make your guests comfortable.</small>\n                <div class=\"row\">\n                  <div class=\"col-md-3\">\n                    <input type=\"checkbox\" formControlName=\"accommodation\">\n                    <label class=\"ml-2\">Accommodation</label>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <input type=\"checkbox\" formControlName=\"food\">\n                    <label class=\"ml-2\">Food</label>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <input type=\"checkbox\" formControlName=\"transport\">\n                    <label class=\"ml-2\">Transport</label>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">What should guests bring with them for this trek ?</label> <br>\n               <!--  <input type=\"text\" class=\"form-control w-50\" formControlName=\"carry\"> -->\n               <textarea class=\"form-control p-3 w-75\" rows=\"5\" formControlName=\"carry\"></textarea>\n              </div>\n\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">Price per person</label> <br>\n                <input type=\"number\" class=\"form-control w-25\" formControlName=\"pricePerPerson\">\n              </div>\n\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">Minimum number of people</label> <br>\n                <input type=\"number\" class=\"form-control w-25\" formControlName=\"minPeople\">\n              </div>\n\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">Maximum number of people</label> <br>\n                <input type=\"number\" class=\"form-control w-25\" formControlName=\"maxPeople\">\n              </div>\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">Tell us what you'll do</label> <br>\n                <textarea class=\"form-control p-3 w-75\" rows=\"5\"\n                          formControlName=\"todoPlan\"></textarea>\n              </div>\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">Emergency Response Plan</label> <br>\n                <textarea class=\"form-control p-3 w-75\" rows=\"5\" formControlName=\"emergencyResponsePlan\"></textarea>\n              </div>\n\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">Natural Disaster Emergency Plan</label> <br>\n                <textarea class=\"form-control p-3 w-75\" rows=\"5\"\n                          formControlName=\"naturalDisasterResponsePlan\"></textarea>\n              </div>\n\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">Medical Emergency Response Plan</label> <br>\n                <textarea class=\"form-control p-3 w-75\" rows=\"5\" formControlName=\"medicalResponsePlan\"></textarea>\n              </div> \n\n              <div class=\"col-md-12\">\n                <label class=\"form-title\">Cancellation Policy</label> <br>\n                <textarea class=\"form-control p-3 w-75\" rows=\"5\" formControlName=\"cancellationPolicy\"></textarea>\n              </div>\n\n            </div>\n\n            <div class=\"form-group row mt-5\">\n              <div class=\"col-md-12 text-center\">\n                <button class=\"btn btn-cyan\" type=\"submit\" [disabled]=\"!settingForm.valid\">Save Trek</button>\n              </div>\n            </div>\n\n          </form>\n        </ng-template>\n      </ngb-tab>\n\n\n    </ngb-tabset>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/treks/dashboard/dashboard.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/treks/dashboard/dashboard.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"h3 text-bold mb-5 text-center\">Your Dashboard</div>\n  </div>\n\n  <div class=\"col-md-12 text-center\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"info-box-card\">\n          <div>Active Treks</div>\n          <div>\n            <span>0</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"info-box-card\">\n          <div>Total Treks</div>\n          <div>\n            <span>0</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"info-box-card\">\n          <div>Past Treks</div>\n          <div>\n            <span>0</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/treks/managetrek/managetrek.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/treks/managetrek/managetrek.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"h3 text-bold mb-5 text-center\">Your Treks</div>\n  </div>\n\n  <div class=\"col-md-12 trek-list\" *ngIf=\"treks.length; else elseBlock\">\n\n    <div class=\"row trek-list-item\" *ngFor=\"let trek of treks;let i = index\">\n\n      <div class=\"col-md-5\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            Location\n          </div>\n          <div class=\"col-md-6\">\n            <span>{{trek.location}}</span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            Total Days\n          </div>\n          <div class=\"col-md-6\">\n            <span>{{trek.totalDays}}</span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <span>Max People</span>\n          </div>\n          <div class=\"col-md-6\">\n            <span>{{trek.maxPeople}}</span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-6 d-flex m-auto\">\n        <div class=\"h4 text-bold\">{{trek.trekTitle}}</div>\n      </div>\n\n      <div class=\"col-md-1 trek-action\">\n        <div><img src=\"../../../../../assets/icons/edit-black.png\" alt=\"\" (click)=\"editTrek(i)\"></div>\n        <div><img src=\"../../../../../assets/icons/delete.png\" alt=\"\" (click)=\"deleteTrek(i)\"></div>\n      </div>\n\n    </div>\n\n  </div>\n  <ng-template #elseBlock>\n    <div class=\"col-md-12 text-center\">\n      <h3>\n        No Treks found\n      </h3>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/treks/treks.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/treks/treks.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-2 business-sidebar\">\n    <div class=\"sidebar pt-5\">\n      <div class=\"h5 text-center text-bold text-white\">Treks</div>\n      <a routerLink=\"dashboard\" routerLinkActive=\"active\">\n        <span>\n          <img src=\"../../../../assets/icons/business/dashboard.png\" alt=\"\">\n        </span>\n        Dashboard\n      </a>\n\n      <a routerLink=\"addTrek\" routerLinkActive=\"active\">\n        <span>\n          <img src=\"../../../../assets/icons/business/add-trek%20icon.png\" alt=\"\">\n        </span>\n        Add Trek\n      </a><a routerLink=\"manageTrek\" routerLinkActive=\"active\">\n        <span>\n          <img src=\"../../../../assets/icons/business/add-trek%20icon.png\" alt=\"\">\n        </span>\n      Manage Trek\n    </a>\n\n    </div>\n  </div>\n  <div class=\"col-md-10 scroll-view pt-5\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demand/treks/treks-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/demand/treks/treks-routing.module.ts ***!
  \******************************************************/
/*! exports provided: TreksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreksRoutingModule", function() { return TreksRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _treks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./treks.component */ "./src/app/demand/treks/treks.component.ts");
/* harmony import */ var _trekslist_trekslist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trekslist/trekslist.component */ "./src/app/demand/treks/trekslist/trekslist.component.ts");
/* harmony import */ var _treksdetails_treksdetails_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./treksdetails/treksdetails.component */ "./src/app/demand/treks/treksdetails/treksdetails.component.ts");
/* harmony import */ var _trekscheckout_trekscheckout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trekscheckout/trekscheckout.component */ "./src/app/demand/treks/trekscheckout/trekscheckout.component.ts");







var routes = [
    {
        path: '', component: _treks_component__WEBPACK_IMPORTED_MODULE_3__["TreksComponent"], children: [
            { path: 'list', component: _trekslist_trekslist_component__WEBPACK_IMPORTED_MODULE_4__["TrekslistComponent"] },
            { path: 'details/:id', component: _treksdetails_treksdetails_component__WEBPACK_IMPORTED_MODULE_5__["TreksdetailsComponent"] },
            { path: 'checkout', component: _trekscheckout_trekscheckout_component__WEBPACK_IMPORTED_MODULE_6__["TrekscheckoutComponent"] }
        ]
    }
];
var TreksRoutingModule = /** @class */ (function () {
    function TreksRoutingModule() {
    }
    TreksRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TreksRoutingModule);
    return TreksRoutingModule;
}());



/***/ }),

/***/ "./src/app/demand/treks/treks.component.css":
/*!**************************************************!*\
  !*** ./src/app/demand/treks/treks.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbWFuZC90cmVrcy90cmVrcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/demand/treks/treks.component.ts":
/*!*************************************************!*\
  !*** ./src/app/demand/treks/treks.component.ts ***!
  \*************************************************/
/*! exports provided: TreksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreksComponent", function() { return TreksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TreksComponent = /** @class */ (function () {
    function TreksComponent() {
    }
    TreksComponent.prototype.ngOnInit = function () {
    };
    TreksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-treks',
            template: __webpack_require__(/*! raw-loader!./treks.component.html */ "./node_modules/raw-loader/index.js!./src/app/demand/treks/treks.component.html"),
            styles: [__webpack_require__(/*! ./treks.component.css */ "./src/app/demand/treks/treks.component.css")]
        })
    ], TreksComponent);
    return TreksComponent;
}());



/***/ }),

/***/ "./src/app/demand/treks/treks.module.ts":
/*!**********************************************!*\
  !*** ./src/app/demand/treks/treks.module.ts ***!
  \**********************************************/
/*! exports provided: TreksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreksModule", function() { return TreksModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _treks_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./treks-routing.module */ "./src/app/demand/treks/treks-routing.module.ts");
/* harmony import */ var _treks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./treks.component */ "./src/app/demand/treks/treks.component.ts");
/* harmony import */ var _trekslist_trekslist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trekslist/trekslist.component */ "./src/app/demand/treks/trekslist/trekslist.component.ts");
/* harmony import */ var _treksdetails_treksdetails_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./treksdetails/treksdetails.component */ "./src/app/demand/treks/treksdetails/treksdetails.component.ts");
/* harmony import */ var _trekscheckout_trekscheckout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trekscheckout/trekscheckout.component */ "./src/app/demand/treks/trekscheckout/trekscheckout.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");










var TreksModule = /** @class */ (function () {
    function TreksModule() {
    }
    TreksModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _treks_component__WEBPACK_IMPORTED_MODULE_4__["TreksComponent"],
                _trekslist_trekslist_component__WEBPACK_IMPORTED_MODULE_5__["TrekslistComponent"],
                _treksdetails_treksdetails_component__WEBPACK_IMPORTED_MODULE_6__["TreksdetailsComponent"],
                _trekscheckout_trekscheckout_component__WEBPACK_IMPORTED_MODULE_7__["TrekscheckoutComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _treks_routing_module__WEBPACK_IMPORTED_MODULE_3__["TreksRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbButtonsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
            ]
        })
    ], TreksModule);
    return TreksModule;
}());



/***/ }),

/***/ "./src/app/demand/treks/trekscheckout/trekscheckout.component.css":
/*!************************************************************************!*\
  !*** ./src/app/demand/treks/trekscheckout/trekscheckout.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".trek-checkout {\n  width: 85%;\n  margin: auto;\n  /*border: 1px red solid;*/\n}\n\n.people-count {\n  border: 1px solid black;\n  border-radius: 15px;\n  height: 25px;\n  margin-top: 5px;\n  width: 10px;\n  /*text-align: left;*/\n}\n\n.checkout-details {\n  box-shadow: 0px 3px 6px #00000029;\n}\n\n.bg-pink{\n  background: #F2E3C9;\n}\n\n.b-r{\n border-radius: 15px;\n}\n\n.shadow-boxed{\n  box-shadow: 0px 1px 5px #00000029;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtYW5kL3RyZWtzL3RyZWtzY2hlY2tvdXQvdHJla3NjaGVja291dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFDQTtFQUNFLGlDQUFpQztBQUNuQyIsImZpbGUiOiJzcmMvYXBwL2RlbWFuZC90cmVrcy90cmVrc2NoZWNrb3V0L3RyZWtzY2hlY2tvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmVrLWNoZWNrb3V0IHtcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiBhdXRvO1xuICAvKmJvcmRlcjogMXB4IHJlZCBzb2xpZDsqL1xufVxuXG4ucGVvcGxlLWNvdW50IHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB3aWR0aDogMTBweDtcbiAgLyp0ZXh0LWFsaWduOiBsZWZ0OyovXG59XG5cbi5jaGVja291dC1kZXRhaWxzIHtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xufVxuXG4uYmctcGlua3tcbiAgYmFja2dyb3VuZDogI0YyRTNDOTtcbn1cbi5iLXJ7XG4gYm9yZGVyLXJhZGl1czogMTVweDtcbn1cbi5zaGFkb3ctYm94ZWR7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggNXB4ICMwMDAwMDAyOTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/demand/treks/trekscheckout/trekscheckout.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/demand/treks/trekscheckout/trekscheckout.component.ts ***!
  \***********************************************************************/
/*! exports provided: TrekscheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrekscheckoutComponent", function() { return TrekscheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/toast/toast.service */ "./src/app/shared/toast/toast.service.ts");
/* harmony import */ var _shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/serverEndpoints */ "./src/app/shared/serverEndpoints.ts");
/* harmony import */ var _assets_js_cashfree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../assets/js/cashfree */ "./src/assets/js/cashfree.js");









var TrekscheckoutComponent = /** @class */ (function () {
    function TrekscheckoutComponent(fb, route, http, store, demandStore, toast) {
        this.fb = fb;
        this.route = route;
        this.http = http;
        this.store = store;
        this.demandStore = demandStore;
        this.toast = toast;
        this.name = '';
        this.email = '';
        this.mobile = '';
        this.id = '';
    }
    TrekscheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userForm = this.fb.group({
            name: this.fb.control(''),
            email: this.fb.control(''),
            mobile: this.fb.control('')
        });
        this.demandStore.select('demand').subscribe(function (demandState) {
            if (demandState.trekDemand.activeTrek) {
                _this.activeTrek = demandState.trekDemand.activeTrek;
            }
            if (demandState.trekDemand.selectedDetails) {
                _this.selectedPersonDetails = demandState.trekDemand.selectedDetails;
            }
            if (demandState.finalPrice) {
                _this.finalPrice = demandState.finalPrice;
            }
        });
        this.store.select('authState').subscribe(function (value) {
            if (value.authenticated) {
                _this.name = value.profile.name;
                _this.email = value.profile.email;
                _this.mobile = value.profile.mobile;
                _this.userForm.patchValue(value.profile);
            }
        });
        this.paymentGatewayForm = this.fb.group({
            appId: [''],
            orderId: [''],
            orderCurrency: [''],
            orderNote: [''],
            customerName: [this.name],
            customerEmail: [this.email],
            returnUrl: [''],
            signature: [''],
            notifyUrl: [''],
            orderAmount: [''],
            customerPhone: [this.mobile],
        });
    };
    TrekscheckoutComponent.prototype.onSubmit = function () {
        var uuid = 'xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var dt = new Date().getTime();
            var r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        var data = {
            days: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.selectedPersonDetails.days),
            mobile: this.userForm.controls["mobile"].value,
            email: this.userForm.controls["email"].value,
            name: this.userForm.controls["name"].value,
            bookingType: 'trek',
            bookingStatus: 'pending',
            noOfBookings: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.selectedPersonDetails),
            amount: this.finalPrice,
            orderId: uuid
        };
        this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_7__["newBooking"], data, { observe: 'response' })
            .subscribe(function (response) {
            if (response.status === 200) {
                _assets_js_cashfree__WEBPACK_IMPORTED_MODULE_8__["f"](response.body);
            }
        });
    };
    TrekscheckoutComponent.prototype.getUserDetails = function (val) {
        var _this = this;
        if (val > 5999999999) {
            this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_7__["getUserByMobile"], { mobile: val }, { observe: 'response' }).subscribe(function (response) {
                if (response.status === 200) {
                    _this.toast.showSuccess('Congratulations! User found.');
                    _this.userForm.patchValue(response.body);
                }
                else {
                    _this.toast.showDanger('No user found!! Enter your details.');
                }
            });
        }
        else {
            this.toast.showDanger('Invalid Mobile Number !!');
        }
    };
    TrekscheckoutComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pgForm', { static: true })
    ], TrekscheckoutComponent.prototype, "paymentGatewayFormElement", void 0);
    TrekscheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trekscheckout',
            template: __webpack_require__(/*! raw-loader!./trekscheckout.component.html */ "./node_modules/raw-loader/index.js!./src/app/demand/treks/trekscheckout/trekscheckout.component.html"),
            styles: [__webpack_require__(/*! ./trekscheckout.component.css */ "./src/app/demand/treks/trekscheckout/trekscheckout.component.css")]
        })
    ], TrekscheckoutComponent);
    return TrekscheckoutComponent;
}());



/***/ }),

/***/ "./src/app/demand/treks/treksdetails/treksdetails.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/demand/treks/treksdetails/treksdetails.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainRow {\n  margin-bottom: 150px!important;\n}\nimg {\n  width: 100%;\n  padding: 10px 0 10px 0;\n}\n.trekDetailHeader {\n  background: black;\n  padding-bottom: 100px;\n  height: 90vh;\n}\n.headerSubheading {\n  text-align: left;\n  /*font: Mo;*/\n  letter-spacing: 0;\n  color: #7E7E7E;\n  opacity: 1;\n  /*font-weight: 500;*/\n}\n.mainHeading {\n  background: #000000 no-repeat padding-box;\n  opacity: 1;\n  color: white;\n}\n.starsImage {\n  width: 15px;\n  /*filter: brightness(0);*/\n}\n.similar-trek .starsImage {\n  -webkit-filter: brightness(0);\n          filter: brightness(0);\n}\n.trekDates {\n  border: 2px solid #FFFFFF;\n  border-radius: 8px;\n  opacity: 1;\n}\n.itn-txt {\n  height: 100px;\n  overflow: hidden;\n}\n.guideImage {\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n}\n.inclusive-box {\n  text-align: center;\n  border: 1px solid black;\n  margin: 10px;\n  height: 100px;\n}\n.show-more-span {\n  color: #1A6AB9;\n  cursor: pointer;\n}\n.itn-image {\n  height: 150px;\n}\n.show-more-button {\n  border-radius: 20%;\n  text-align: left;\n  /*font: SemiBold 18px/22px Montserrat;*/\n  letter-spacing: 0;\n  color: #000000;\n  opacity: 1;\n}\n.trek-header-image {\n  height: 350px;\n}\n.booking-bar {\n  background: black;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n.booking-bar label, .booking-bar input {\n  color: white;\n  font-weight: 400;\n}\n.booking-bar input {\n  border-radius: 10px !important;\n}\n.control-div {\n  border: 1px solid black;\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n  padding-top: 3px;\n  padding-left: 10px;\n  margin: 2px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtYW5kL3RyZWtzL3RyZWtzZGV0YWlscy90cmVrc2RldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsNkJBQXFCO1VBQXJCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtBQUNmO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsdUNBQXVDO0VBQ3ZDLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsVUFBVTtBQUNaO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2RlbWFuZC90cmVrcy90cmVrc2RldGFpbHMvdHJla3NkZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpblJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDE1MHB4IWltcG9ydGFudDtcbn1cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xufVxuXG4udHJla0RldGFpbEhlYWRlciB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gIGhlaWdodDogOTB2aDtcbn1cblxuLmhlYWRlclN1YmhlYWRpbmcge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAvKmZvbnQ6IE1vOyovXG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzdFN0U3RTtcbiAgb3BhY2l0eTogMTtcbiAgLypmb250LXdlaWdodDogNTAwOyovXG59XG5cbi5tYWluSGVhZGluZyB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDAgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBvcGFjaXR5OiAxO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zdGFyc0ltYWdlIHtcbiAgd2lkdGg6IDE1cHg7XG4gIC8qZmlsdGVyOiBicmlnaHRuZXNzKDApOyovXG59XG5cbi5zaW1pbGFyLXRyZWsgLnN0YXJzSW1hZ2Uge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMCk7XG59XG5cbi50cmVrRGF0ZXMge1xuICBib3JkZXI6IDJweCBzb2xpZCAjRkZGRkZGO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5pdG4tdHh0IHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmd1aWRlSW1hZ2Uge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmluY2x1c2l2ZS1ib3gge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBtYXJnaW46IDEwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5zaG93LW1vcmUtc3BhbiB7XG4gIGNvbG9yOiAjMUE2QUI5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pdG4taW1hZ2Uge1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4uc2hvdy1tb3JlLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgLypmb250OiBTZW1pQm9sZCAxOHB4LzIycHggTW9udHNlcnJhdDsqL1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi50cmVrLWhlYWRlci1pbWFnZSB7XG4gIGhlaWdodDogMzUwcHg7XG59XG5cbi5ib29raW5nLWJhciB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYm9va2luZy1iYXIgbGFiZWwsIC5ib29raW5nLWJhciBpbnB1dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmJvb2tpbmctYmFyIGlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uY29udHJvbC1kaXYge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbjogMnB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/demand/treks/treksdetails/treksdetails.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/demand/treks/treksdetails/treksdetails.component.ts ***!
  \*********************************************************************/
/*! exports provided: TreksdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreksdetailsComponent", function() { return TreksdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_demand_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/demand.actions */ "./src/app/demand/store/demand.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/serverEndpoints */ "./src/app/shared/serverEndpoints.ts");








var TreksdetailsComponent = /** @class */ (function () {
    function TreksdetailsComponent(store, router, route, fb, http) {
        this.store = store;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.http = http;
        this.children = 0;
        this.adult = 1;
        this.similarTrek = [];
        this.trekBannerImages = new Array(5);
        this.finalPrice = 0;
        this.selectedDatesIndex = 0;
    }
    TreksdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            if (params.get('id')) {
                _this.id = params.get('id');
                _this.store.dispatch(new _store_demand_actions__WEBPACK_IMPORTED_MODULE_3__["TryFetchTrek"]({ _id: _this.id }));
                // initializing form to get pricing info
                _this.queryForm = _this.fb.group({
                    days: _this.fb.control(''),
                    adults: _this.fb.control(_this.adult),
                    children: _this.fb.control(_this.children),
                    _id: _this.fb.control(_this.id),
                });
                _this.getPricing();
            }
        });
        this.store.select('demand').subscribe(function (demandState) {
            if (demandState.trekDemand.activeTrek) {
                _this.activeTrek = demandState.trekDemand.activeTrek;
                _this.trekBannerImages = demandState.trekDemand.activeTrek.trekImage;
                if (demandState.trekDemand.activeTrek.similarTreks.length > 0) {
                    demandState.trekDemand.activeTrek.similarTreks.forEach(function (trek) {
                        _this.similarTrek.push(trek);
                    });
                }
                console.log(_this.similarTrek);
            }
        });
    };
    TreksdetailsComponent.prototype.adultControl = function (x) {
        if (!(this.adult < 2 && x < 0)) {
            this.adult += x;
        }
        this.queryForm.controls["adults"].patchValue(this.adult);
        this.getPricing();
    };
    TreksdetailsComponent.prototype.childControl = function (x) {
        if (!(this.children < 1 && x < 0)) {
            this.children += x;
        }
        this.queryForm.controls["children"].patchValue(this.children);
        this.getPricing();
    };
    TreksdetailsComponent.prototype.getPricing = function () {
        var _this = this;
        this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_7__["trekPricing"], this.queryForm.value, { observe: 'response' }).subscribe(function (response) {
            if (response.status === 200) {
                _this.finalPrice = response.body;
            }
        });
    };
    TreksdetailsComponent.prototype.selectedDatesIndexFunction = function (val) {
        this.selectedDatesIndex = val;
    };
    TreksdetailsComponent.prototype.onSubmitQueryForm = function () {
        this.queryForm.controls["days"].patchValue(this.activeTrek.trekDates[this.selectedDatesIndex]);
        this.store.dispatch(new _store_demand_actions__WEBPACK_IMPORTED_MODULE_3__["SetActiveTrekDetails"](this.queryForm.value));
        this.store.dispatch(new _store_demand_actions__WEBPACK_IMPORTED_MODULE_3__["SetPrice"](this.finalPrice));
        this.router.navigate(['../../checkout'], { relativeTo: this.route });
    };
    TreksdetailsComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
    ]; };
    TreksdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-treksdetails',
            template: __webpack_require__(/*! raw-loader!./treksdetails.component.html */ "./node_modules/raw-loader/index.js!./src/app/demand/treks/treksdetails/treksdetails.component.html"),
            styles: [__webpack_require__(/*! ./treksdetails.component.css */ "./src/app/demand/treks/treksdetails/treksdetails.component.css")]
        })
    ], TreksdetailsComponent);
    return TreksdetailsComponent;
}());



/***/ }),

/***/ "./src/app/demand/treks/trekslist/trekslist.component.css":
/*!****************************************************************!*\
  !*** ./src/app/demand/treks/trekslist/trekslist.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".trek-block {\n  padding: 10px 20px 10px 20px\n}\n\n.sort-button {\n  border: 1px solid black;\n  border-radius: 10%;\n  background: transparent;\n  /*width: 100px;*/\n  margin-right: 5px;\n}\n\n.trek-header {\n  height: 90vh;\n  background: url('/frontend/uspl/trek-header.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  color: white;\n}\n\n.trek-header h1 {\n  font-size: 4rem;\n}\n\n.trekDetailHeader {\n  background: black;\n  padding-bottom: 100px;\n}\n\n.sub-header img {\n  border-radius: 15px;\n}\n\n.sub-header .trek-header-image {\n  height: 73vh;\n  margin-top: 10px;\n}\n\n.sub-header .trek-subheader-image {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  height: 35vh;\n}\n\n.state-image {\n  height: 50px;\n  width: 50px;\n}\n\n.similar-trek {\n  height: 100px;\n}\n\n.trek-lists img {\n  width: 100%;\n}\n\n.trek-chip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 5px black;\n}\n\n.trek-chip-text {\n  padding-top: 15px;\n}\n\n.trek-card {\n  cursor: pointer;\n  box-shadow: 2px 2px 5px #0000006b;\n  border-radius: 15px;\n}\n\n.trek-card-img {\n  max-height: 150px;\n  overflow: hidden;\n}\n\n.trek-card-img img {\n  border-radius: 10px;\n}\n\n.trek-card-content {\n  padding: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtYW5kL3RyZWtzL3RyZWtzbGlzdC90cmVrc2xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlEQUErRDtFQUMvRCxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9kZW1hbmQvdHJla3MvdHJla3NsaXN0L3RyZWtzbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyZWstYmxvY2sge1xuICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4XG59XG5cbi5zb3J0LWJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAvKndpZHRoOiAxMDBweDsqL1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnRyZWstaGVhZGVyIHtcbiAgaGVpZ2h0OiA5MHZoO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL3RyZWtzL3RyZWstaGVhZGVyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHJlay1oZWFkZXIgaDEge1xuICBmb250LXNpemU6IDRyZW07XG59XG5cbi50cmVrRGV0YWlsSGVhZGVyIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cblxuLnN1Yi1oZWFkZXIgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLnN1Yi1oZWFkZXIgLnRyZWstaGVhZGVyLWltYWdlIHtcbiAgaGVpZ2h0OiA3M3ZoO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc3ViLWhlYWRlciAudHJlay1zdWJoZWFkZXItaW1hZ2Uge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBoZWlnaHQ6IDM1dmg7XG59XG5cbi5zdGF0ZS1pbWFnZSB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5zaW1pbGFyLXRyZWsge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4udHJlay1saXN0cyBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRyZWstY2hpcCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XG59XG5cbi50cmVrLWNoaXAtdGV4dCB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG4udHJlay1jYXJkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAycHggMnB4IDVweCAjMDAwMDAwNmI7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi50cmVrLWNhcmQtaW1nIHtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50cmVrLWNhcmQtaW1nIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi50cmVrLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/demand/treks/trekslist/trekslist.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/demand/treks/trekslist/trekslist.component.ts ***!
  \***************************************************************/
/*! exports provided: TrekslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrekslistComponent", function() { return TrekslistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/serverEndpoints */ "./src/app/shared/serverEndpoints.ts");
/* harmony import */ var _store_demand_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/demand.actions */ "./src/app/demand/store/demand.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");









var TrekslistComponent = /** @class */ (function () {
    function TrekslistComponent(store, fb, route, router, http, calendar, formatter) {
        this.store = store;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.http = http;
        this.calendar = calendar;
        this.formatter = formatter;
    }
    TrekslistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__["trekList"], this.requestData, { observe: 'response' }).subscribe(function (response) {
            if (response.status === 200) {
                _this.store.dispatch(new _store_demand_actions__WEBPACK_IMPORTED_MODULE_6__["SetAllTrek"](response.body));
            }
        });
        this.isSearched = false;
        this.reletive_treks = false;
        this.no_treks = false;
        this.show_all = false;
        this.trekSubscription = this.store.select('demand').subscribe(function (demandState) {
            if (demandState.trekDemand.allTreks) {
                _this.allTreks = [];
                demandState.trekDemand.allTreks.forEach(function (trek) {
                    _this.allTreks.push(trek);
                });
            }
        });
        this.basicForm = this.fb.group({
            location: [''],
            startDate: [''],
            difficultyLevel: [''],
        });
    };
    TrekslistComponent.prototype.search = function (form) {
        var _this = this;
        this.basicForm.controls["location"].patchValue(this.location.nativeElement.value);
        console.log(this.basicForm.value);
        this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__["trekQuery"], this.basicForm.value, { observe: 'response' }).subscribe(function (response) {
            if (response.status === 200) {
                _this.isSearched = false;
                _this.reletive_treks = false;
                _this.no_treks = false;
                _this.show_all = true;
                _this.store.dispatch(new _store_demand_actions__WEBPACK_IMPORTED_MODULE_6__["SetAllTrek"](response.body));
            }
            if (response.status == 201) {
                _this.store.dispatch(new _store_demand_actions__WEBPACK_IMPORTED_MODULE_6__["SetAllTrek"](response.body));
                _this.isSearched = false;
                _this.no_treks = false;
                _this.reletive_treks = true;
            }
            if (response.status == 202) {
                _this.isSearched = false;
                _this.reletive_treks = false;
                _this.show_all = false;
                _this.no_treks = true;
            }
        });
        this.trekSubscription = this.store.select('demand').subscribe(function (demandState) {
            if (demandState.trekDemand.allTreks) {
                _this.allTreks = [];
                demandState.trekDemand.allTreks.forEach(function (trek) {
                    _this.allTreks.push(trek);
                });
            }
        });
        //this.dispatch(this.basicForm.value);
        //console.log(this.basicForm.value);
        this.show_all = true;
    };
    TrekslistComponent.prototype.searchList = function () {
        this.show_all = true;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        console.log(this.allTreks);
        console.log(this.show_all);
    };
    TrekslistComponent.prototype.statewiselist = function (id, state_name) {
        this.state = state_name;
        this.statewiseTreks = this.allTreks.filter(function (obj) {
            return obj._id === id;
        });
        this.reletive_treks = false;
        this.no_treks = false;
        this.isSearched = true;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    TrekslistComponent.prototype.navigateToTrekDetail = function (id) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        this.router.navigate(['../details', id], { relativeTo: this.route });
    };
    TrekslistComponent.prototype.lazyLoading = function () {
        var _this = this;
        this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__["trekList"], this.requestData, { observe: 'response' }).subscribe(function (response) {
            if (response.status === 200) {
                _this.store.dispatch(new _store_demand_actions__WEBPACK_IMPORTED_MODULE_6__["SetAllTrek"](response.body));
            }
        });
        this.isSearched = false;
        this.reletive_treks = false;
        this.no_treks = false;
        this.show_all = false;
        this.trekSubscription = this.store.select('demand').subscribe(function (demandState) {
            if (demandState.trekDemand.allTreks) {
                _this.allTreks = [];
                demandState.trekDemand.allTreks.forEach(function (trek) {
                    _this.allTreks.push(trek);
                });
            }
        });
    };
    TrekslistComponent.prototype.ngOnDestroy = function () {
        this.allTreks = null;
        this.trekSubscription.unsubscribe();
    };
    TrekslistComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDateParserFormatter"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('location', { static: false })
    ], TrekslistComponent.prototype, "location", void 0);
    TrekslistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trekslist',
            template: __webpack_require__(/*! raw-loader!./trekslist.component.html */ "./node_modules/raw-loader/index.js!./src/app/demand/treks/trekslist/trekslist.component.html"),
            styles: [__webpack_require__(/*! ./trekslist.component.css */ "./src/app/demand/treks/trekslist/trekslist.component.css")]
        })
    ], TrekslistComponent);
    return TrekslistComponent;
}());



/***/ }),

/***/ "./src/app/roles/business/treks/addtrek/addtrek.component.css":
/*!********************************************************************!*\
  !*** ./src/app/roles/business/treks/addtrek/addtrek.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.upload-form-group input {\n  height: 110px;\n}\n\n.image-preview {\n  /*text-align: center;*/\n}\n\n.image-preview img {\n  height: 80px;\n  width: auto;\n  max-width: 120px;\n}\n\ninput[type='file'] {\n  color: transparent;\n  border: none;\n  border-radius: 0px !important;\n}\n\n.custom-day {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n.custom-day.focused {\n  background-color: #e6e6e6;\n}\n\n.custom-day.range, .custom-day:hover {\n  background-color: rgb(2, 117, 216);\n  color: white;\n}\n\n.custom-day.faded {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n\n.main-form-div > div {\n  margin-top: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYnVzaW5lc3MvdHJla3MvYWRkdHJlay9hZGR0cmVrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvYnVzaW5lc3MvdHJla3MvYWRkdHJlay9hZGR0cmVrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi51cGxvYWQtZm9ybS1ncm91cCBpbnB1dCB7XG4gIGhlaWdodDogMTEwcHg7XG59XG5cbi5pbWFnZS1wcmV2aWV3IHtcbiAgLyp0ZXh0LWFsaWduOiBjZW50ZXI7Ki9cbn1cblxuLmltYWdlLXByZXZpZXcgaW1nIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiAxMjBweDtcbn1cblxuXG5pbnB1dFt0eXBlPSdmaWxlJ10ge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tZGF5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjE4NXJlbSAwLjI1cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDJyZW07XG59XG5cbi5jdXN0b20tZGF5LmZvY3VzZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xufVxuXG4uY3VzdG9tLWRheS5yYW5nZSwgLmN1c3RvbS1kYXk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0b20tZGF5LmZhZGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KTtcbn1cblxuLm1haW4tZm9ybS1kaXYgPiBkaXYge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/roles/business/treks/addtrek/addtrek.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/roles/business/treks/addtrek/addtrek.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddtrekComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtrekComponent", function() { return AddtrekComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _treks_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../treks.model */ "./src/app/roles/business/treks/treks.model.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_treks_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/treks.actions */ "./src/app/roles/business/treks/store/treks.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/toast/toast.service */ "./src/app/shared/toast/toast.service.ts");









var AddtrekComponent = /** @class */ (function () {
    function AddtrekComponent(router, fb, calendar, formatter, store, route, toastService) {
        this.router = router;
        this.fb = fb;
        this.calendar = calendar;
        this.formatter = formatter;
        this.store = store;
        this.route = route;
        this.toastService = toastService;
        this.finalTrek = new _treks_model__WEBPACK_IMPORTED_MODULE_4__["TreksModel"]();
        this.trekDayImg = null;
        this.trekImg = null;
        this.trekImgArray = [];
        this.imgPreviewUrlTrekDay = '../../../assets/icons/uploadPic.png';
        this.imgPreviewUrlTrek = '../../../assets/icons/uploadPic.png';
        this.editMode = false;
        this.currentDay = 0;
        this.days = 3;
        this.trekDaysArrayDummy = Array(this.days).fill(0);
        this.trekDaysArray = [];
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', this.days - 1);
    }
    AddtrekComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.basicForm = this.fb.group({
            company: ['Wander Tribe'],
            tourGuide: [''],
            guideDescription: [''],
            // trekTitle: ['', Validators.required],
            // location: ['', Validators.required],
            // temperature:['',Validators.required],
            // altitude:['',Validators.required],
            // trekDates: this.fb.array([], Validators.required),
            // totalDays: ['', Validators.required],
            trekTitle: [''],
            location: ['',],
            temperature: [''],
            altitude: [''],
            trekDates: this.fb.array([], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            totalDays: [''],
            languages: this.fb.group({
                hindi: [false],
                english: [false]
            }),
            difficultyLevel: ['easy', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ownerDescription: [''],
            trekImage: this.fb.array([]),
            equipmentDescription: ['']
            //naturalDisasterResponsePlan: [''],
            //emergencyResponsePlan: [''],
            //medicalResponsePlan: [''],
            //cancellationPolicy: [''],
        });
        this.trekForm = this.fb.group({
            activityDescription: [''],
            trekDayImage: [''],
            locations: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            provided: this.fb.group({
                water: [false],
                food: [false],
                sleepingBag: [false]
            }),
            carry: [''],
            transport: [''],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            meetup: [''],
            notes: [''],
        });
        this.settingForm = this.fb.group({
            //trekImage: this.fb.array([]),
            naturalDisasterResponsePlan: [''],
            emergencyResponsePlan: [''],
            medicalResponsePlan: [''],
            cancellationPolicy: [''],
            provided: this.fb.group({
                accommodation: [false],
                food: [false],
                transport: [false]
            }),
            carry: [''],
            pricePerPerson: [''],
            minPeople: [''],
            maxPeople: [''],
            todoPlan: [''],
        });
        this.trekDayDetails = this.fb.array([]);
        this.store.select('treks').subscribe(function (trekState) {
            if (!_this.editMode) {
                if (trekState.activeTrek) {
                    _this.finalTrek = trekState.activeTrek;
                    if (trekState.activeTrek.trekDayDetails) {
                        _this.trekDaysArray = trekState.activeTrek.trekDayDetails;
                    }
                }
            }
        });
        // for editing a trek
        this.route.paramMap.subscribe(function (params) {
            if (params.get('id')) {
                _this.editMode = true;
                _this.id = +params.get('id');
                _this.store.select('treks').subscribe(function (trekState) {
                    _this.finalTrek = trekState.treks[_this.id];
                    if (_this.finalTrek) {
                        _this.basicForm.patchValue(_this.finalTrek);
                        _this.settingForm.patchValue(_this.finalTrek);
                        _this.finalTrek.trekDayDetails.forEach(function (value) {
                            _this.trekDayDetails.push(_this.addTrekDayDetailGroup(value));
                        });
                        _this.trekForm.setValue(_this.trekDayDetails.value[0]);
                    }
                    else {
                        _this.router.navigate(['../../manageTrek'], { relativeTo: _this.route });
                    }
                });
            }
        });
    };
    AddtrekComponent.prototype.addTrekDayDetailGroup = function (value) {
        var group = this.fb.group({
            activityDescription: [value.activityDescription],
            trekDayImage: [''],
            locations: [value.locations],
            provided: this.fb.group({
                water: [value.provided.water],
                food: [value.provided.food],
                sleepingBag: [value.provided.sleepingBag]
            }),
            carry: [value.carry],
            transport: [value.transport],
            title: [value.title],
            meetup: [value.meetup],
            notes: [value.notes],
        });
        return group;
    };
    AddtrekComponent.prototype.onDateSelection = function (date) {
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
        this.trekDaysArrayDummy = Array(this.days).fill(0);
    };
    AddtrekComponent.prototype.isHovered = function (date) {
        return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
    };
    AddtrekComponent.prototype.isInside = function (date) {
        return date.after(this.fromDate) && date.before(this.toDate);
    };
    AddtrekComponent.prototype.isRange = function (date) {
        return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
    };
    AddtrekComponent.prototype.validateInput = function (currentValue, input) {
        var parsed = this.formatter.parse(input);
        return parsed && this.calendar.isValid(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDate"].from(parsed)) ? _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDate"].from(parsed) : currentValue;
    };
    AddtrekComponent.prototype.addTrekDate = function () {
        var ngbDate = this.fromDate;
        var fromdate = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
        var ngbDate1 = this.toDate;
        var todate = new Date(ngbDate1.year, ngbDate1.month - 1, ngbDate1.day);
        var x = {
            startDate: fromdate,
            toDate: todate,
        };
        var obj = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](x);
        this.basicForm.controls["trekDates"].push(obj);
        this.basicForm.patchValue({ totalDays: this.days });
    };
    AddtrekComponent.prototype.removeTrekDate = function (i) {
        this.basicForm.controls["trekDates"].removeAt(i);
    };
    AddtrekComponent.prototype.imgPreviewTrekDay = function (fileInput) {
        var _this = this;
        this.trekDayImg = fileInput.target.files[0];
        var mimeType = this.trekDayImg.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(this.trekDayImg);
        reader.onload = function () {
            _this.imgPreviewUrlTrekDay = reader.result;
        };
    };
    AddtrekComponent.prototype.imgPreviewTrek = function (fileInput) {
        var e_1, _a;
        var _this = this;
        var files = fileInput.target.files;
        if (files.length >= 1) {
            try {
                for (var files_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
                    var image = files_1_1.value;
                    this.trekImgArray.push(image);
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        _this.basicForm.get('trekImage').push(_this.fb.group({
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
    AddtrekComponent.prototype.setTrekDay = function (it) {
        this.currentDay = it;
        if (this.trekDayDetails.value[it]) {
            this.trekForm.setValue(this.trekDayDetails.value[it]);
        }
        else {
            this.trekForm.reset();
        }
    };
    AddtrekComponent.prototype.basicFormSubmit = function () {
        this.basicForm.controls["location"].patchValue(this.location.nativeElement.value);
        this.dispatch(this.basicForm.value);
        this.tabSet.select('trekForm');
    };
    AddtrekComponent.prototype.trekFormSubmit = function () {
        this.trekForm.controls["locations"].patchValue(this.daylocation.nativeElement.value);
        if (this.trekDayDetails && this.trekDayDetails.value[this.currentDay]) {
            this.trekDayDetails.insert(this.currentDay, this.addTrekDayDetailGroup(this.trekForm.value));
        }
        else {
            this.trekDayDetails.push(this.addTrekDayDetailGroup(this.trekForm.value));
        }
        this.dispatch({ trekDayDetails: this.trekDayDetails.value });
        var data = new FormData();
        data.append('_id', this.finalTrek._id);
        data.append('trekDayImage', this.trekDayImg);
        data.append('index', (this.currentDay).toString());
        this.store.dispatch(new _store_treks_actions__WEBPACK_IMPORTED_MODULE_6__["TryUploadTrekImage"](data));
        if (this.currentDay === this.days - 1) {
            this.tabSet.select('settingForm');
            this.currentDay = 0;
        }
        else {
            this.currentDay += 1;
        }
    };
    AddtrekComponent.prototype.settingFormSubmit = function () {
        this.dispatch(this.settingForm.value);
        if (this.trekImgArray.length) {
            var data_1 = new FormData();
            data_1.append('_id', this.finalTrek._id);
            Array.from(this.trekImgArray).forEach(function (image) {
                data_1.append('trekImage[]', image);
            });
            this.store.dispatch(new _store_treks_actions__WEBPACK_IMPORTED_MODULE_6__["TryUploadTrekImage"](data_1));
        }
        this.router.navigate(['../manageTrek'], { relativeTo: this.route });
    };
    AddtrekComponent.prototype.dispatch = function (obj) {
        Object.assign(this.finalTrek, obj);
        this.store.dispatch(new _store_treks_actions__WEBPACK_IMPORTED_MODULE_6__["TrySaveTrek"](this.finalTrek));
    };
    AddtrekComponent.prototype.ngOnDestroy = function () {
        this.finalTrek = null;
        this.store.dispatch(new _store_treks_actions__WEBPACK_IMPORTED_MODULE_6__["SetActiveTrek"](null));
    };
    AddtrekComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDateParserFormatter"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('daylocation', { static: false })
    ], AddtrekComponent.prototype, "daylocation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('location', { static: false })
    ], AddtrekComponent.prototype, "location", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('t', { static: false })
    ], AddtrekComponent.prototype, "tabSet", void 0);
    AddtrekComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addtrek',
            template: __webpack_require__(/*! raw-loader!./addtrek.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/treks/addtrek/addtrek.component.html"),
            styles: [__webpack_require__(/*! ./addtrek.component.css */ "./src/app/roles/business/treks/addtrek/addtrek.component.css")]
        })
    ], AddtrekComponent);
    return AddtrekComponent;
}());



/***/ }),

/***/ "./src/app/roles/business/treks/dashboard/dashboard.component.css":
/*!************************************************************************!*\
  !*** ./src/app/roles/business/treks/dashboard/dashboard.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info-box-tile{\n  height: 160px;\n  width: auto;\n  text-align: center;\n  border-radius: 20px;\n  box-shadow: 1px 2px 10px 3px lightgrey;\n  background: linear-gradient(white 60%, #4b6cdb 40%);\n}\n\n.info-box-tile .info-box-top{\n  padding-top: 20px;\n  color: black;\n  height: 60%;\n  font-weight: 700;\n  font-size: 1.75rem;\n}\n\n.info-box-tile .info-box-bottom{\n  padding-top: 10px;\n  color: white;\n  height: 40%;\n}\n\n.info-box-card{\n  min-height: 100px;\n  padding: 20px 10px;\n  background: #4b6cdb;\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYnVzaW5lc3MvdHJla3MvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNDQUFzQztFQUN0QyxtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9idXNpbmVzcy90cmVrcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mby1ib3gtdGlsZXtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgd2lkdGg6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogMXB4IDJweCAxMHB4IDNweCBsaWdodGdyZXk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh3aGl0ZSA2MCUsICM0YjZjZGIgNDAlKTtcbn1cblxuLmluZm8tYm94LXRpbGUgLmluZm8tYm94LXRvcHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiA2MCU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbn1cblxuLmluZm8tYm94LXRpbGUgLmluZm8tYm94LWJvdHRvbXtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA0MCU7XG59XG5cbi5pbmZvLWJveC1jYXJke1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjNGI2Y2RiO1xuICBjb2xvcjogd2hpdGU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/roles/business/treks/dashboard/dashboard.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/roles/business/treks/dashboard/dashboard.component.ts ***!
  \***********************************************************************/
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
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/treks/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/roles/business/treks/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/roles/business/treks/managetrek/managetrek.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/roles/business/treks/managetrek/managetrek.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".trek-list-item {\n  border: 2px solid black;\n  border-radius: 10px;\n  padding: 10px;\n  margin: 20px 10px;\n}\n\n.trek-action img {\n  height: 28px;\n  margin: 5px;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYnVzaW5lc3MvdHJla3MvbWFuYWdldHJlay9tYW5hZ2V0cmVrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9idXNpbmVzcy90cmVrcy9tYW5hZ2V0cmVrL21hbmFnZXRyZWsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmVrLWxpc3QtaXRlbSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDIwcHggMTBweDtcbn1cblxuLnRyZWstYWN0aW9uIGltZyB7XG4gIGhlaWdodDogMjhweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/roles/business/treks/managetrek/managetrek.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/roles/business/treks/managetrek/managetrek.component.ts ***!
  \*************************************************************************/
/*! exports provided: ManagetrekComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagetrekComponent", function() { return ManagetrekComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_treks_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/treks.actions */ "./src/app/roles/business/treks/store/treks.actions.ts");





var ManagetrekComponent = /** @class */ (function () {
    function ManagetrekComponent(router, route, store) {
        this.router = router;
        this.route = route;
        this.store = store;
    }
    ManagetrekComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _store_treks_actions__WEBPACK_IMPORTED_MODULE_4__["TryFetchTreks"]());
        this.store.select('treks').subscribe(function (trekState) {
            _this.treks = trekState.treks;
        });
    };
    ManagetrekComponent.prototype.editTrek = function (index) {
        this.router.navigate(['../editTrek', index], { relativeTo: this.route });
    };
    ManagetrekComponent.prototype.deleteTrek = function (index) {
        this.currentTrek = this.treks[index];
        this.currentTrek.delFlg = true;
        this.store.dispatch(new _store_treks_actions__WEBPACK_IMPORTED_MODULE_4__["TrySaveTrek"](this.currentTrek));
        this.store.dispatch(new _store_treks_actions__WEBPACK_IMPORTED_MODULE_4__["TryFetchTreks"]());
    };
    ManagetrekComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    ManagetrekComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-managetrek',
            template: __webpack_require__(/*! raw-loader!./managetrek.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/treks/managetrek/managetrek.component.html"),
            styles: [__webpack_require__(/*! ./managetrek.component.css */ "./src/app/roles/business/treks/managetrek/managetrek.component.css")]
        })
    ], ManagetrekComponent);
    return ManagetrekComponent;
}());



/***/ }),

/***/ "./src/app/roles/business/treks/store/treks.actions.ts":
/*!*************************************************************!*\
  !*** ./src/app/roles/business/treks/store/treks.actions.ts ***!
  \*************************************************************/
/*! exports provided: TRY_SAVE_TREK, TRY_FETCH_TREKS, TRY_UPLOAD_TREK_IMAGE, SET_TREKS, SET_ACTIVE_TREK, TryUploadTrekImage, TryFetchTreks, TrySaveTrek, SetTreks, SetActiveTrek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_SAVE_TREK", function() { return TRY_SAVE_TREK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_FETCH_TREKS", function() { return TRY_FETCH_TREKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_UPLOAD_TREK_IMAGE", function() { return TRY_UPLOAD_TREK_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TREKS", function() { return SET_TREKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ACTIVE_TREK", function() { return SET_ACTIVE_TREK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryUploadTrekImage", function() { return TryUploadTrekImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryFetchTreks", function() { return TryFetchTreks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrySaveTrek", function() { return TrySaveTrek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreks", function() { return SetTreks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetActiveTrek", function() { return SetActiveTrek; });
/* harmony import */ var _treks_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../treks.model */ "./src/app/roles/business/treks/treks.model.ts");

var TRY_SAVE_TREK = 'TRY_SAVE_TREK';
var TRY_FETCH_TREKS = 'TRY_FETCH_TREKS';
var TRY_UPLOAD_TREK_IMAGE = 'TRY_UPLOAD_TREK_IMAGE';
var SET_TREKS = 'SET_TREKS';
var SET_ACTIVE_TREK = 'SET_ACTIVE_TREK';
var TryUploadTrekImage = /** @class */ (function () {
    function TryUploadTrekImage(payload) {
        this.payload = payload;
        this.type = TRY_UPLOAD_TREK_IMAGE;
    }
    TryUploadTrekImage.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return TryUploadTrekImage;
}());

var TryFetchTreks = /** @class */ (function () {
    function TryFetchTreks() {
        this.type = TRY_FETCH_TREKS;
    }
    return TryFetchTreks;
}());

var TrySaveTrek = /** @class */ (function () {
    function TrySaveTrek(payload) {
        this.payload = payload;
        this.type = TRY_SAVE_TREK;
    }
    TrySaveTrek.ctorParameters = function () { return [
        { type: _treks_model__WEBPACK_IMPORTED_MODULE_0__["TreksModel"] }
    ]; };
    return TrySaveTrek;
}());

var SetTreks = /** @class */ (function () {
    function SetTreks(payload) {
        this.payload = payload;
        this.type = SET_TREKS;
    }
    SetTreks.ctorParameters = function () { return [
        { type: Array }
    ]; };
    return SetTreks;
}());

var SetActiveTrek = /** @class */ (function () {
    function SetActiveTrek(payload) {
        this.payload = payload;
        this.type = SET_ACTIVE_TREK;
    }
    SetActiveTrek.ctorParameters = function () { return [
        { type: _treks_model__WEBPACK_IMPORTED_MODULE_0__["TreksModel"] }
    ]; };
    return SetActiveTrek;
}());



/***/ }),

/***/ "./src/app/roles/business/treks/store/treks.effects.ts":
/*!*************************************************************!*\
  !*** ./src/app/roles/business/treks/store/treks.effects.ts ***!
  \*************************************************************/
/*! exports provided: TreksEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreksEffects", function() { return TreksEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/serverEndpoints */ "./src/app/shared/serverEndpoints.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _treks_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./treks.actions */ "./src/app/roles/business/treks/store/treks.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var TreksEffects = /** @class */ (function () {
    function TreksEffects(action, http) {
        var _this = this;
        this.action = action;
        this.http = http;
        this.uploadImage = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_treks_actions__WEBPACK_IMPORTED_MODULE_5__["TRY_UPLOAD_TREK_IMAGE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) {
            return data.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (data) {
            return _this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_1__["uploadTrekImage"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (response) {
            if (response.status === 200) {
                return [
                    {
                        type: _treks_actions__WEBPACK_IMPORTED_MODULE_5__["SET_ACTIVE_TREK"],
                        payload: response.body
                    }
                ];
            }
            else {
                alert('Some error occured !');
                return [];
            }
        }));
        this.editTrek = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_treks_actions__WEBPACK_IMPORTED_MODULE_5__["TRY_SAVE_TREK"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) {
            return data.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (data) {
            return _this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_1__["saveTrek"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (response) {
            if (response.status === 200) {
                return [
                    {
                        type: _treks_actions__WEBPACK_IMPORTED_MODULE_5__["SET_ACTIVE_TREK"],
                        payload: response.body
                    }
                ];
            }
            else {
                alert('Some error occured !');
                return [];
            }
        }));
        this.fetchTreks = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_treks_actions__WEBPACK_IMPORTED_MODULE_5__["TRY_FETCH_TREKS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () {
            return _this.http.get(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_1__["fetchTreks"], { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (response) {
            if (response.status === 200) {
                console.log('inside fetch trek 200');
                return [
                    {
                        type: _treks_actions__WEBPACK_IMPORTED_MODULE_5__["SET_TREKS"],
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
    TreksEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()
    ], TreksEffects.prototype, "uploadImage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()
    ], TreksEffects.prototype, "editTrek", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()
    ], TreksEffects.prototype, "fetchTreks", void 0);
    TreksEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], TreksEffects);
    return TreksEffects;
}());



/***/ }),

/***/ "./src/app/roles/business/treks/store/treks.reducer.ts":
/*!*************************************************************!*\
  !*** ./src/app/roles/business/treks/store/treks.reducer.ts ***!
  \*************************************************************/
/*! exports provided: TreksReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreksReducer", function() { return TreksReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var initialState = {
    activeTrek: null,
    treks: []
};
function TreksReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'SET_ACTIVE_TREK': {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { activeTrek: action.payload });
        }
        case 'SET_TREKS': {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { treks: action.payload });
        }
        default: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
        }
    }
}


/***/ }),

/***/ "./src/app/roles/business/treks/treks-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/roles/business/treks/treks-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: TreksBusinessRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreksBusinessRoutingModule", function() { return TreksBusinessRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _treks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./treks.component */ "./src/app/roles/business/treks/treks.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/roles/business/treks/dashboard/dashboard.component.ts");
/* harmony import */ var _addtrek_addtrek_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addtrek/addtrek.component */ "./src/app/roles/business/treks/addtrek/addtrek.component.ts");
/* harmony import */ var _managetrek_managetrek_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./managetrek/managetrek.component */ "./src/app/roles/business/treks/managetrek/managetrek.component.ts");







var routes = [
    {
        path: '', component: _treks_component__WEBPACK_IMPORTED_MODULE_3__["TreksComponent"], children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
            { path: 'addTrek', component: _addtrek_addtrek_component__WEBPACK_IMPORTED_MODULE_5__["AddtrekComponent"] },
            { path: 'editTrek/:id', component: _addtrek_addtrek_component__WEBPACK_IMPORTED_MODULE_5__["AddtrekComponent"] },
            { path: 'manageTrek', component: _managetrek_managetrek_component__WEBPACK_IMPORTED_MODULE_6__["ManagetrekComponent"] },
        ]
    },
];
var TreksBusinessRoutingModule = /** @class */ (function () {
    function TreksBusinessRoutingModule() {
    }
    TreksBusinessRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TreksBusinessRoutingModule);
    return TreksBusinessRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/business/treks/treks.component.css":
/*!**********************************************************!*\
  !*** ./src/app/roles/business/treks/treks.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2J1c2luZXNzL3RyZWtzL3RyZWtzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/roles/business/treks/treks.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/roles/business/treks/treks.component.ts ***!
  \*********************************************************/
/*! exports provided: TreksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreksComponent", function() { return TreksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TreksComponent = /** @class */ (function () {
    function TreksComponent() {
    }
    TreksComponent.prototype.ngOnInit = function () {
    };
    TreksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-treks',
            template: __webpack_require__(/*! raw-loader!./treks.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/treks/treks.component.html"),
            styles: [__webpack_require__(/*! ./treks.component.css */ "./src/app/roles/business/treks/treks.component.css")]
        })
    ], TreksComponent);
    return TreksComponent;
}());



/***/ }),

/***/ "./src/app/roles/business/treks/treks.module.ts":
/*!******************************************************!*\
  !*** ./src/app/roles/business/treks/treks.module.ts ***!
  \******************************************************/
/*! exports provided: TreksBusinessModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreksBusinessModule", function() { return TreksBusinessModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _treks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./treks.component */ "./src/app/roles/business/treks/treks.component.ts");
/* harmony import */ var _addtrek_addtrek_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addtrek/addtrek.component */ "./src/app/roles/business/treks/addtrek/addtrek.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/roles/business/treks/dashboard/dashboard.component.ts");
/* harmony import */ var _treks_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./treks-routing.module */ "./src/app/roles/business/treks/treks-routing.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_treks_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store/treks.reducer */ "./src/app/roles/business/treks/store/treks.reducer.ts");
/* harmony import */ var _store_treks_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/treks.effects */ "./src/app/roles/business/treks/store/treks.effects.ts");
/* harmony import */ var _managetrek_managetrek_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./managetrek/managetrek.component */ "./src/app/roles/business/treks/managetrek/managetrek.component.ts");















var TreksBusinessModule = /** @class */ (function () {
    function TreksBusinessModule() {
    }
    TreksBusinessModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _treks_component__WEBPACK_IMPORTED_MODULE_6__["TreksComponent"],
                _addtrek_addtrek_component__WEBPACK_IMPORTED_MODULE_7__["AddtrekComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _managetrek_managetrek_component__WEBPACK_IMPORTED_MODULE_14__["ManagetrekComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _treks_routing_module__WEBPACK_IMPORTED_MODULE_9__["TreksBusinessRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forFeature('treks', _store_treks_reducer__WEBPACK_IMPORTED_MODULE_12__["TreksReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__["EffectsModule"].forFeature([_store_treks_effects__WEBPACK_IMPORTED_MODULE_13__["TreksEffects"]]),
            ],
            providers: []
        })
    ], TreksBusinessModule);
    return TreksBusinessModule;
}());



/***/ })

}]);
//# sourceMappingURL=treks-treks-module-es5.js.map