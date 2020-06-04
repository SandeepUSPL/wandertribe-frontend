(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transportation-transportation-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/transportation/dashboard/dashboard.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/transportation/dashboard/dashboard.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"h3 text-bold mb-5 text-center\">Your Dashboard</div>\n    </div>\n\n    <div class=\"col-md-12\">\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"info-box-tile\">\n                    <div class=\"info-box-top\">\n                        ₹<span>0</span>\n                    </div>\n                    <div class=\"info-box-bottom\">\n                        Wallet\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"info-box-tile\">\n                    <div class=\"info-box-top\">\n                        <span>0</span>\n                    </div>\n                    <div class=\"info-box-bottom\">\n                        Upcoming Booking\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"info-box-tile\">\n                    <div class=\"info-box-top\">\n                        <span>0</span>\n                    </div>\n                    <div class=\"info-box-bottom\">\n                        Total <br> Booking\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"info-box-tile\">\n                    <div class=\"info-box-top\">\n                        <span>0</span>\n                    </div>\n                    <div class=\"info-box-bottom\">\n                        Active Vehicle\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-12\">\n        <div class=\"h4 mt-5 mb-4 text-bold\">Sales</div>\n    </div>\n\n    <div class=\"col-md-12\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"info-box-card\">\n                    <div>Today</div>\n                    <div>\n                        ₹ <span class=\"h6 text-bold\">0</span>\n                        <span>/10 orders</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"info-box-card\">\n                    <div>Week</div>\n                    <div>\n                        ₹ <span class=\"h6 text-bold\">0</span>\n                        <span>/10 orders</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"info-box-card\">\n                    <div>Month</div>\n                    <div>\n                        ₹ <span class=\"h6 text-bold\">0</span>\n                        <span>/10 orders</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-12\">\n        <div class=\"h4 mt-5 mb-4 text-bold\">Your Vehicles</div>\n    </div>\n\n    <div class=\"col-md-12\">\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"info-box-tile\">\n                    <div class=\"info-box-top\">\n                        <span>0</span>\n                    </div>\n                    <div class=\"info-box-bottom\">\n                        Active Vehicles\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"info-box-tile\">\n                    <div class=\"info-box-top\">\n                        <span>0</span>\n                    </div>\n                    <div class=\"info-box-bottom\">\n                        Vehicles On Road\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"info-box-tile\">\n                    <div class=\"info-box-top\">\n                        <span>0</span>\n                    </div>\n                    <div class=\"info-box-bottom\">\n                        Total Listed Vehicles\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-12\">\n        <div class=\"h4 mt-5 mb-4 text-bold\">Job Posting</div>\n    </div>\n\n    <div class=\"col-md-12 text-center\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"info-box-card\">\n                    <div>Active Job Posting</div>\n                    <div>\n                        <span>0</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"info-box-card\">\n                    <div>New Applications</div>\n                    <div>\n                        <span>0</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"info-box-card\">\n                    <div>Selected For Interview</div>\n                    <div>\n                        <span>0</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/transportation/listvehicle/listvehicle.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/transportation/listvehicle/listvehicle.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 business-form\">\n    <div class=\"h3 text-bold mb-5 text-center\">Manage Vehicles</div>\n    <div class=\"h4 text-bold\">Add Vehicles</div>\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"addVehicleForm\">\n      <div class=\"row\">\n        <div class=\"col-md-4 form-group\">\n          <label>Mode of Transportation</label>\n          <select formControlName=\"transportationMode\" class=\"form-control\">\n            <option value=\"Road\">Road</option>\n            <option value=\"Water\">Water</option>\n          </select>\n        </div>\n        <div class=\"col-md-4 form-group\">\n          <label>Type of Vehicle</label>\n          <select formControlName=\"vehicleType\" class=\"form-control\">\n            <option value=\"Bus\">Bus</option>\n            <option value=\"Car\">Car</option>\n            <option value=\"Boat\">Boat</option>\n          </select>\n        </div>\n        <div class=\"col-md-4 form-group\">\n          <label class=\"w-100\">Add New Vehicle</label>\n          <button class=\"btn btn-yellow form-control w-50\">Add</button>\n        </div>\n      </div>\n    </form>\n    <div class=\"row mt-3\">\n      <div class=\"col-md-4\">\n        <div class=\"h4 text-bold mt-1\">List Vehicles</div>\n      </div>\n<!--      <div class=\"col-md-8\">-->\n<!--        <form>-->\n<!--          <div class=\"form-group form-inline justify-content-center\">-->\n<!--            <input class=\"form-control ml-2\" type=\"text\" placeholder=\"Search Your Vehicle\" (change)=\"search()\"-->\n<!--                   [formControl]=\"filter\"/>-->\n<!--          </div>-->\n<!--        </form>-->\n<!--      </div>-->\n    </div>\n\n    <table class=\"table table-striped\">\n      <thead>\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Registration No</th>\n        <th scope=\"col\">Type</th>\n        <th scope=\"col\">Brand</th>\n        <th scope=\"col\">Registration State</th>\n        <th scope=\"col\">Edit</th>\n      </tr>\n      </thead>\n      <tbody>\n      <ng-template *ngIf=\"vehicles.length===0 else elseBlock\">\n        <tr class=\"text-center\">\n          <h6>No Vehicle Found!</h6>\n        </tr>\n      </ng-template>\n\n      <ng-template #elseBlock>\n        <tr *ngFor=\"let vehicle of vehicles; let i = index\">\n          <th scope=\"row\">{{ i + 1 }}</th>\n          <td>\n            <ngb-highlight [result]=\"vehicle.registrationNo!==''?vehicle.registrationNo:'-'\"\n                           [term]=\"filter.value\"></ngb-highlight>\n          </td>\n          <td>\n            <ngb-highlight [result]=\"vehicle.vehicleType!==''?vehicle.vehicleType:'-' \"\n                           [term]=\"filter.value\"></ngb-highlight>\n          </td>\n          <td>\n            <ngb-highlight [result]=\"vehicle.vehicleBrand !==''?vehicle.vehicleBrand:'-'\"\n                           [term]=\"filter.value\"></ngb-highlight>\n          </td>\n          <td>\n            <ngb-highlight [result]=\"vehicle.registrationState!==''?vehicle.registrationState:'-' \"\n                           [term]=\"filter.value\"></ngb-highlight>\n          </td>\n          <td>\n\n            <button class=\"btn btn-success\" (click)=\"editVehicle(i)\">Edit\n            </button>\n\n\n          </td>\n        </tr>\n      </ng-template>\n\n      </tbody>\n    </table>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/transportation/savevehicle/savevehicle.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/transportation/savevehicle/savevehicle.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 mb-5\">\n    <ngb-tabset type=\"pills\" [justify]=\"'center'\" #t=\"ngbTabset\">\n      <ngb-tab title=\"Register your vehicle\">\n        <ng-template ngbTabContent>\n\n          <div class=\"col-md-12 mt-5\">\n            <form [formGroup]=\"editVehicleForm\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\">\n                  <label for=\"registrationNo\">Vehicle Registration No</label></div>\n                <div class=\"col-md-7\">\n                  <input class=\"form-control \" type=\"text\" name=\"registrationNo\" formControlName=\"registrationNo\"\n                         id=\"registrationNo\"\n                         placeholder=\"Enter your Registration No\">\n                </div>\n              </div>\n\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\">\n                  <label>Vehicle Registration Year</label></div>\n                <div class=\"col-md-7\">\n                  <select class=\"form-control \" formControlName=\"registrationYear\">\n                    <option value=\"2019\">2019</option>\n                    <option value=\"2018\">2018</option>\n                    <option value=\"2017\">2017</option>\n                    <option value=\"2016\">2016</option>\n                    <option value=\"2015\">2015</option>\n                    <option value=\"2014\">2014</option>\n                    <option value=\"2013\">2013</option>\n                    <option value=\"2012\">2012</option>\n                    <option value=\"2011\">2011</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\">\n                  <label>Vehicle Registration State</label></div>\n                <div class=\"col-md-7\">\n                  <select class=\"form-control \" formControlName=\"registrationState\">\n                    <option value=\"Delhi\">Delhi</option>\n                    <option value=\"Uttar Pradesh\">Uttar Pradesh</option>\n                    <option value=\"Uttrakhand\">Uttrakhand</option>\n                    <option value=\"Rajasthan\">Rajasthan</option>\n                    <option value=\"Punjab\">Punjab</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\">\n                  <label for=\"vehicleBrand\"> Vehicle Brand & Model</label></div>\n                <div class=\"col-md-7\">\n                  <input class=\"form-control \" type=\"text\" name=\"vehicleBrand\" formControlName=\"vehicleBrand\"\n                         id=\"vehicleBrand\"\n                         placeholder=\"Enter your Vehicle Brand\">\n                </div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\">\n                  <label for=\"noOfSeats\"> No of Seats</label></div>\n                <div class=\"col-md-7\">\n                  <input class=\"form-control \" type=\"text\" name=\"noOfSeats\" formControlName=\"noOfSeats\"\n                         id=\"noOfSeats\"\n                         placeholder=\"Enter No of Seats\">\n                </div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\">\n                  <label for=\"vehicleColour\"> Vehicle Colour</label></div>\n                <div class=\"col-md-7\">\n                  <input class=\"form-control \" type=\"text\" name=\"vehicleColour\" formControlName=\"vehicleColour\"\n                         id=\"vehicleColour\"\n                         placeholder=\"Enter your Vehicle Colour\">\n                </div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\">\n                  <label for=\"kmsCovered\"> Kms Covered</label></div>\n                <div class=\"col-md-7\">\n                  <input class=\"form-control \" type=\"text\" name=\"kmsCovered\" formControlName=\"kmsCovered\"\n                         id=\"kmsCovered\"\n                         placeholder=\"Enter your  Kms Covered\">\n                </div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\">\n                  <label for=\"insurancePolicyNo\">Insurance Policy No</label></div>\n                <div class=\"col-md-7\">\n                  <input class=\"form-control \" type=\"text\" name=\"insurancePolicyNo\" formControlName=\"insurancePolicyNo\"\n                         id=\"insurancePolicyNo\"\n                         placeholder=\"Enter your Insurance Policy No\">\n                </div>\n              </div>\n\n              <div class=\"col-md-12 form-group text-center\">\n                <button class=\"btn btn-uspl\" type=\"submit\">Save Changes</button>\n              </div>\n            </form>\n          </div>\n        </ng-template>\n      </ngb-tab>\n\n      <ngb-tab title=\"UPLOAD IMAGE\" id=\"images\">\n        <ng-template ngbTabContent>\n\n          <div class=\"col-md-12 mt-5\">\n            <form [formGroup]=\"imageForm\" (ngSubmit)=\"onSubmitImages()\" autocomplete=\"off\">\n              <div class=\"row form-group upload-form-group\">\n                <div class=\"col-md-8\">\n                  <label for=\"vehicleRcImage\"> Upload your Registration Certificate image </label>\n                  <input class=\"form-control \" type=\"file\" formControlName=\"vehicleRcImage\"\n                         id=\"vehicleRcImage\"\n                         placeholder=\"vehicleRcImage\" (change)=\"imgPreviewVehicleRc($event)\">\n                </div>\n                <div class=\"col-md-4 image-preview\">\n                  <img [src]=\"previewUrlRc\">\n                </div>\n              </div>\n              <div class=\"row form-group upload-form-group\">\n                <div class=\"col-md-8\">\n                  <label for=\"imgVehicleInsurance\"> Upload Insurance Policy</label>\n                  <input class=\"form-control\" type=\"file\"\n                         formControlName=\"vehicleInsuranceImage\" id=\"imgVehicleInsurance\"\n                         placeholder=\"Insurance Policy\" (change)=\"imgPreviewInsurance($event)\">\n                </div>\n                <div class=\"col-md-4 image-preview\">\n                  <img [src]=\"previewUrlInsurance\">\n                </div>\n              </div>\n              <div class=\"row form-group upload-form-group\">\n                <div class=\"col-md-8\">\n                  <label for=\"imgVehiclePuc\"> Upload your PUC proof </label>\n                  <input class=\"form-control\" type=\"file\" id=\"imgVehiclePuc\"\n                         formControlName=\"vehiclePucImage\"\n                         placeholder=\"PUC Proof\" (change)=\"imgPreviewPuc($event)\">\n                </div>\n                <div class=\"col-md-4 image-preview\">\n                  <img [src]=\"previewUrlPuc\">\n                </div>\n              </div>\n\n              <div class=\"row form-group upload-form-group\">\n                <div class=\"col-md-8\">\n                  <label for=\"imgVehicleFitness\"> Upload your Fitness proof </label>\n                  <input class=\"form-control\" type=\"file\" id=\"imgVehicleFitness\"\n                         formControlName=\"vehicleFitnessImage\"\n                         placeholder=\"PUC Proof\" (change)=\"imgPreviewFitness($event)\">\n                </div>\n                <div class=\"col-md-4 image-preview\">\n                  <img [src]=\"previewUrlFitness\">\n                </div>\n              </div>\n\n              <div class=\"col-md-12 form-group text-center\">\n                <button class=\"btn btn-uspl\" type=\"submit\">Upload</button>\n              </div>\n            </form>\n          </div>\n\n        </ng-template>\n      </ngb-tab>\n\n\n    </ngb-tabset>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/transportation/transportation.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/transportation/transportation.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-2 business-sidebar\">\n    <div class=\"sidebar pt-5\">\n      <div class=\"h5 text-center text-bold text-white\">Manage Business</div>\n      <a routerLink=\"dashboard\" routerLinkActive=\"active\"><span><img\n        src=\"../../../../assets/icons/business/dashboard.png\" alt=\"\"></span>Home</a>\n      <a routerLink=\"editProfile\" routerLinkActive=\"active\"><span><img\n        src=\"../../../../assets/icons/business/edit-profile.png\" alt=\"\"></span>Edit Profile</a>\n      <a routerLink=\"manageVehicle\" routerLinkActive=\"active\"><span><img\n        src=\"../../../../assets/icons/business/manage-vehicle.png\" alt=\"\"></span>Manage</a>\n      <!--            <a routerLinkActive=\"active\"><span><img src=\"../../../../assets/icons/business/sales.png\" alt=\"\"></span>Sales</a>-->\n    </div>\n  </div>\n  <div class=\"col-md-10 scroll-view pt-5\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/transportation/transportationedit/transportationedit.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/transportation/transportationedit/transportationedit.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 business-form\">\n    <div class=\"h3 text-bold mb-5 text-center\">Your Details</div>\n    <ngb-tabset type=\"pills\" [justify]=\"'center'\" #t=\"ngbTabset\">\n\n      <ngb-tab title=\"FIRM DETAILS\">\n\n        <ng-template ngbTabContent>\n          <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-group mt-5\">\n\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>Company Name</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"text\" formControlName=\"name\">\n                </div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>Registration Type</label></div>\n                <div class=\"col-md-7\"><select class=\"form-control\" formControlName=\"registrationType\">\n                  <option value=\"privateLimitied\">Private Limited</option>\n                  <option value=\"publicLimited\">Public Limited</option>\n                  <option value=\"proprietorship\">Proprietorship</option>\n                  <option value=\"partnership\">Partnership</option>\n                  <option value=\"powerOfAttorney\">Under Power of Attorney</option>\n                </select></div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>Registration CIN No</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"text\"\n                                             formControlName=\"registrationNo\"></div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>Full Office Address</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"text\"\n                                             formControlName=\"officeAddress\"></div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>Pincode</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"number\"\n                                             formControlName=\"officePostalCode\"></div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>Registration Authority</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"text\"\n                                             formControlName=\"registrationAuthority\"></div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>Registration MSME Number</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"text\"\n                                             formControlName=\"registrationMsmeNumber\"></div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>GST Number</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"text\"\n                                             formControlName=\"gstNumber\"></div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>PAN Number</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"text\"\n                                             formControlName=\"panNumber\"></div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>TAN Number</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"text\"\n                                             formControlName=\"tanNumber\"></div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>Union Enrollment Number</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"text\"\n                                             formControlName=\"unionEnrollmentNumber\"></div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>Contact Number</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"number\"\n                                             formControlName=\"mobile\"\n                                             onkeypress=\"if((this.value.length==10)) return false;\">\n                </div>\n              </div>\n            </div>\n\n\n            <div class=\"form-group row text-center mt-5\">\n              <div class=\"col-md-6 text-left pl-3\">\n                <button class=\"btn btn-yellow\" type=\"submit\">Next</button>\n              </div>\n              <div class=\"col-md-6 text-right pr-3\">\n                <button class=\"btn btn-yellow\" (click)=\"navigationTrigger()\" type=\"submit\">Save and Continue Later\n                </button>\n              </div>\n            </div>\n\n          </form>\n        </ng-template>\n      </ngb-tab>\n\n\n      <ngb-tab title=\"OWNER DETAILS\" id=\"ownerDetails\">\n        <ng-template ngbTabContent>\n          <form [formGroup]=\"ownerForm\" (ngSubmit)=\"onOwnerSubmit()\">\n            <div class=\"form-group mt-5\" formGroupName=\"ownerDetails\">\n\n              <div class=\"col-md-12 form-group d-flex mt-5\">\n                I am\n                <select class=\"form-control w-25 ml-2 mr-2\" formControlName=\"profileRegistrar\">\n                  <option value=\"OWNER\">OWNER</option>\n                  <option value=\"MANAGER\">MANAGER</option>\n                  <option value=\"OTHER\">OTHER</option>\n                </select>\n                of this company\n              </div>\n\n              <!--<label class=\"form-title\">Owner Details</label><br>-->\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>Name</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"text\" formControlName=\"name\">\n                </div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>Mobile</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"number\"\n                                             formControlName=\"mobile\"\n                                             onkeypress=\"if((this.value.length==10)) return false;\">\n                </div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>Email</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"email\" formControlName=\"email\">\n                </div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>PAN number</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"text\" formControlName=\"pan\">\n                </div>\n              </div>\n              <div formGroupName=\"address\">\n                <div class=\"row form-group\">\n                  <div class=\"col-md-5\"><label>Address</label></div>\n                  <div class=\"col-md-7\"><input class=\"form-control\" type=\"text\"\n                                               formControlName=\"address\"></div>\n                </div>\n                <div class=\"row form-group\">\n                  <div class=\"col-md-5\"><label>Pincode</label></div>\n                  <div class=\"col-md-7\"><input class=\"form-control\" type=\"number\"\n                                               formControlName=\"pincode\"></div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\" formGroupName=\"bankDetails\">\n              <!--<label class=\"form-title\">Bank Details</label><br>-->\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>Bank Name</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"text\"\n                                             formControlName=\"bankName\"></div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>Bank Account number</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"number\"\n                                             formControlName=\"bankAccountNo\"></div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>Bank IFSC</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"text\"\n                                             formControlName=\"bankIfsc\"></div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>Bank Address</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"text\"\n                                             formControlName=\"bankAddress\"></div>\n              </div>\n            </div>\n            <div class=\"form-group row text-center mt-5\">\n              <div class=\"col-md-6 text-left pl-3\">\n                <button class=\"btn btn-yellow\">Next</button>\n              </div>\n              <div class=\"col-md-6 text-right pr-3\">\n                <button class=\"btn btn-yellow\" (click)=\"navigationTrigger()\">Save and Continue Later\n                </button>\n              </div>\n            </div>\n          </form>\n        </ng-template>\n      </ngb-tab>\n\n\n      <ngb-tab title=\"UPLOAD IMAGE\" id=\"imagesForm\">\n        <ng-template ngbTabContent>\n          <form [formGroup]=\"imageForm\" (ngSubmit)=\"onImageSubmit()\">\n\n\n            <div class=\"row form-group upload-form-group mt-5\">\n              <div class=\"col-md-9 d-flex\">\n                <div class=\"col-md-8\"><label> Upload your Registration MSME number Proof </label></div>\n                <div class=\"col-md-4\"><input class=\"form-control \" type=\"file\"\n                                             formControlName=\"registrationMsmeNumberProof\"\n                                             (change)=\"imgPreviewregistrationMsmeNumber($event)\"></div>\n              </div>\n              <div class=\"col-md-3 image-preview\">\n                <img [src]=\"previewUrlregistrationMsmeNumber\">\n              </div>\n            </div>\n\n            <div class=\"row form-group upload-form-group\">\n              <div class=\"col-md-9 d-flex\">\n                <div class=\"col-md-8\"><label> Upload your GST number Proof </label></div>\n                <div class=\"col-md-4\"><input class=\"form-control \" type=\"file\"\n                                             formControlName=\"gstNumberProof\"\n                                             (change)=\"imgPreviewgstNumber($event)\"></div>\n              </div>\n              <div class=\"col-md-3 image-preview\">\n                <img [src]=\"previewUrlgstNumber\">\n              </div>\n            </div>\n\n            <div class=\"row form-group upload-form-group\">\n              <div class=\"col-md-9 d-flex\">\n                <div class=\"col-md-8\"><label> Upload your Registration CIN Proof </label></div>\n                <div class=\"col-md-4\"><input class=\"form-control \" type=\"file\"\n                                             formControlName=\"registrationCinProof\"\n                                             (change)=\"imgPreviewaddress($event)\"></div>\n              </div>\n              <div class=\"col-md-3 image-preview\">\n                <img [src]=\"previewUrlCinProof\">\n              </div>\n            </div>\n\n            <div class=\"form-group col-md-12 text-center\">\n              <button class=\"btn btn-yellow\">Save</button>\n            </div>\n          </form>\n        </ng-template>\n      </ngb-tab>\n\n    </ngb-tabset>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/roles/activeRoute.directive.ts":
/*!************************************************!*\
  !*** ./src/app/roles/activeRoute.directive.ts ***!
  \************************************************/
/*! exports provided: ActiveRouteDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveRouteDirective", function() { return ActiveRouteDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ActiveRouteDirective = /** @class */ (function () {
    // @HostListener('click') toggleOpen() {
    //   this.isOpen = !this.isOpen;
    // }
    function ActiveRouteDirective(elr) {
        this.isOpen = false;
        elr.nativeElement.style.className = 'active';
    }
    ActiveRouteDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.active')
    ], ActiveRouteDirective.prototype, "isOpen", void 0);
    ActiveRouteDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appActiveRouteDirective]'
        })
    ], ActiveRouteDirective);
    return ActiveRouteDirective;
}());



/***/ }),

/***/ "./src/app/roles/business/transportation/dashboard/dashboard.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/roles/business/transportation/dashboard/dashboard.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info-box-tile{\n    height: 160px;\n    width: auto;\n    text-align: center;\n    border-radius: 20px;\n    box-shadow: 1px 2px 10px 3px lightgrey;\n    background: linear-gradient(white 60%, #4b6cdb 40%);\n}\n\n.info-box-tile .info-box-top{\n    padding-top: 20px;\n    color: black;\n    height: 60%;\n    font-weight: 700;\n    font-size: 1.75rem;\n}\n\n.info-box-tile .info-box-bottom{\n    padding-top: 10px;\n    color: white;\n    height: 40%;\n}\n\n.info-box-card{\n    min-height: 100px;\n    padding: 20px 10px;\n    background: #4b6cdb;\n    color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYnVzaW5lc3MvdHJhbnNwb3J0YXRpb24vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNDQUFzQztJQUN0QyxtREFBbUQ7QUFDdkQ7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvYnVzaW5lc3MvdHJhbnNwb3J0YXRpb24vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm8tYm94LXRpbGV7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDEwcHggM3B4IGxpZ2h0Z3JleTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQod2hpdGUgNjAlLCAjNGI2Y2RiIDQwJSk7XG59XG5cbi5pbmZvLWJveC10aWxlIC5pbmZvLWJveC10b3B7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGhlaWdodDogNjAlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xufVxuXG4uaW5mby1ib3gtdGlsZSAuaW5mby1ib3gtYm90dG9te1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDQwJTtcbn1cblxuLmluZm8tYm94LWNhcmR7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICM0YjZjZGI7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/roles/business/transportation/dashboard/dashboard.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/roles/business/transportation/dashboard/dashboard.component.ts ***!
  \********************************************************************************/
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
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/transportation/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/roles/business/transportation/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/roles/business/transportation/listvehicle/listvehicle.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/roles/business/transportation/listvehicle/listvehicle.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2J1c2luZXNzL3RyYW5zcG9ydGF0aW9uL2xpc3R2ZWhpY2xlL2xpc3R2ZWhpY2xlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/roles/business/transportation/listvehicle/listvehicle.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/roles/business/transportation/listvehicle/listvehicle.component.ts ***!
  \************************************************************************************/
/*! exports provided: ListvehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListvehicleComponent", function() { return ListvehicleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_vehicle_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/vehicle.model */ "./src/app/roles/business/transportation/models/vehicle.model.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_transportation_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/transportation.actions */ "./src/app/roles/business/transportation/store/transportation.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var ListvehicleComponent = /** @class */ (function () {
    function ListvehicleComponent(store, fb, authStore, route, router) {
        this.store = store;
        this.fb = fb;
        this.authStore = authStore;
        this.route = route;
        this.router = router;
        this.filter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.currentVehicle = new _models_vehicle_model__WEBPACK_IMPORTED_MODULE_3__["VehicleModel"]();
    }
    ListvehicleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _store_transportation_actions__WEBPACK_IMPORTED_MODULE_5__["TryFetchVehicles"]());
        this.store.select('authState').subscribe(function (auth) {
            _this.addVehicleForm = _this.fb.group({
                transportationMode: ['Road', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                vehicleType: ['Car', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                ownerId: [auth.profile._id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
        });
        this.store.select('transportation').subscribe(function (vehicleState) {
            _this.vehicles = vehicleState.vehicles;
        });
    };
    ListvehicleComponent.prototype.onSubmit = function () {
        Object.assign(this.currentVehicle, this.addVehicleForm.value);
        this.store.dispatch(new _store_transportation_actions__WEBPACK_IMPORTED_MODULE_5__["SaveVehicles"](this.currentVehicle));
    };
    ListvehicleComponent.prototype.editVehicle = function (index) {
        this.store.dispatch(new _store_transportation_actions__WEBPACK_IMPORTED_MODULE_5__["SetCurrentVehicle"](this.vehicles[index]));
        this.router.navigate(['../saveVehicle'], { relativeTo: this.route });
    };
    ListvehicleComponent.prototype.search = function () {
        var text = this.filter.value;
        return this.vehicles.filter(function (vehicle) {
            var term = text.toLowerCase();
            return vehicle.registrationNo.toLowerCase().includes(term)
                || vehicle.vehicleBrand.toLowerCase().includes(term)
                || vehicle.registrationState.toLowerCase().includes(term)
                || vehicle.vehicleType.toLowerCase().includes(term);
        });
    };
    ListvehicleComponent.prototype.ngOnDestroy = function () {
    };
    ListvehicleComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    ListvehicleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listvehicle',
            template: __webpack_require__(/*! raw-loader!./listvehicle.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/transportation/listvehicle/listvehicle.component.html"),
            styles: [__webpack_require__(/*! ./listvehicle.component.css */ "./src/app/roles/business/transportation/listvehicle/listvehicle.component.css")]
        })
    ], ListvehicleComponent);
    return ListvehicleComponent;
}());



/***/ }),

/***/ "./src/app/roles/business/transportation/models/transportation.model.ts":
/*!******************************************************************************!*\
  !*** ./src/app/roles/business/transportation/models/transportation.model.ts ***!
  \******************************************************************************/
/*! exports provided: TransportationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportationModel", function() { return TransportationModel; });
var TransportationModel = /** @class */ (function () {
    function TransportationModel(profilePercentage, name, registrationType, registrationNo, officeAddress, officePostalCode, registrationAuthority, registrationMsmeNumber, gstNumber, panNumber, tanNumber, unionEnrollmentNumber, mobile, ownerDetails, registrationCinProof, gstNumberProof, registrationMsmeNumberProof) {
        this.profilePercentage = profilePercentage;
        this.name = name;
        this.registrationType = registrationType;
        this.registrationNo = registrationNo;
        this.officeAddress = officeAddress;
        this.officePostalCode = officePostalCode;
        this.registrationAuthority = registrationAuthority;
        this.registrationMsmeNumber = registrationMsmeNumber;
        this.gstNumber = gstNumber;
        this.panNumber = panNumber;
        this.tanNumber = tanNumber;
        this.unionEnrollmentNumber = unionEnrollmentNumber;
        this.mobile = mobile;
        this.ownerDetails = ownerDetails;
        this.registrationCinProof = registrationCinProof;
        this.gstNumberProof = gstNumberProof;
        this.registrationMsmeNumberProof = registrationMsmeNumberProof;
    }
    TransportationModel.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: Number },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: Number },
        { type: undefined },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return TransportationModel;
}());



/***/ }),

/***/ "./src/app/roles/business/transportation/models/vehicle.model.ts":
/*!***********************************************************************!*\
  !*** ./src/app/roles/business/transportation/models/vehicle.model.ts ***!
  \***********************************************************************/
/*! exports provided: VehicleModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleModel", function() { return VehicleModel; });
var VehicleModel = /** @class */ (function () {
    function VehicleModel(_id, ownerId, registrationNo, registrationYear, registrationState, vehicleBrand, insurancePolicyNo, kmsCovered, vehicleColour, noOfSeats, vehicleType, vehicleRcImage, vehicleInsuranceImage, vehiclePucImage, vehicleFitnessImage) {
        this._id = _id;
        this.ownerId = ownerId;
        this.registrationNo = registrationNo;
        this.registrationYear = registrationYear;
        this.registrationState = registrationState;
        this.vehicleBrand = vehicleBrand;
        this.insurancePolicyNo = insurancePolicyNo;
        this.kmsCovered = kmsCovered;
        this.vehicleColour = vehicleColour;
        this.noOfSeats = noOfSeats;
        this.vehicleType = vehicleType;
        this.vehicleRcImage = vehicleRcImage;
        this.vehicleInsuranceImage = vehicleInsuranceImage;
        this.vehiclePucImage = vehiclePucImage;
        this.vehicleFitnessImage = vehicleFitnessImage;
    }
    VehicleModel.ctorParameters = function () { return [
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
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return VehicleModel;
}());



/***/ }),

/***/ "./src/app/roles/business/transportation/savevehicle/savevehicle.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/roles/business/transportation/savevehicle/savevehicle.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upload-form-group input{\n  height: 110px;\n}\n\n.image-preview{\n  text-align: center;\n}\n\n.image-preview img{\n  height: 80px;\n  width: auto;\n  max-width: 120px;\n}\n\ninput[type='file'] {\n  color: transparent;\n  border: none;\n  border-radius: 0px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYnVzaW5lc3MvdHJhbnNwb3J0YXRpb24vc2F2ZXZlaGljbGUvc2F2ZXZlaGljbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9idXNpbmVzcy90cmFuc3BvcnRhdGlvbi9zYXZldmVoaWNsZS9zYXZldmVoaWNsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwbG9hZC1mb3JtLWdyb3VwIGlucHV0e1xuICBoZWlnaHQ6IDExMHB4O1xufVxuXG4uaW1hZ2UtcHJldmlld3tcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1hZ2UtcHJldmlldyBpbWd7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMTIwcHg7XG59XG5cblxuaW5wdXRbdHlwZT0nZmlsZSddIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/roles/business/transportation/savevehicle/savevehicle.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/roles/business/transportation/savevehicle/savevehicle.component.ts ***!
  \************************************************************************************/
/*! exports provided: SavevehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavevehicleComponent", function() { return SavevehicleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_vehicle_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/vehicle.model */ "./src/app/roles/business/transportation/models/vehicle.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _transportation_store_transportation_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../transportation/store/transportation.actions */ "./src/app/roles/business/transportation/store/transportation.actions.ts");







var SavevehicleComponent = /** @class */ (function () {
    function SavevehicleComponent(fb, store, route, router) {
        this.fb = fb;
        this.store = store;
        this.route = route;
        this.router = router;
        this.vehicle = new _models_vehicle_model__WEBPACK_IMPORTED_MODULE_2__["VehicleModel"]();
        this.vehicleFitnessImage = null;
        this.vehicleRcImage = null;
        this.vehicleInsuranceImage = null;
        this.vehiclePucImage = null;
        this.previewUrlRc = '../../../assets/icons/uploadPic.png';
        this.previewUrlInsurance = '../../../assets/icons/uploadPic.png';
        this.previewUrlPuc = '../../../assets/icons/uploadPic.png';
        this.previewUrlFitness = '../../../assets/icons/uploadPic.png';
    }
    SavevehicleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editVehicleForm = this.fb.group({
            registrationNo: [this.vehicle.registrationNo, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            registrationYear: [this.vehicle.registrationYear ? this.vehicle.registrationYear : '2019', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            registrationState: [this.vehicle.registrationState ? this.vehicle.registrationState : 'Delhi', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            vehicleBrand: [this.vehicle.vehicleBrand, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            noOfSeats: [this.vehicle.noOfSeats, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            vehicleColour: [this.vehicle.vehicleColour, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            kmsCovered: [this.vehicle.kmsCovered, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            insurancePolicyNo: [this.vehicle.insurancePolicyNo, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.imageForm = this.fb.group({
            vehicleRcImage: [''],
            vehicleInsuranceImage: [''],
            vehiclePucImage: [''],
            vehicleFitnessImage: ['']
        });
        this.store.select('transportation').subscribe(function (vehicleState) {
            _this.vehicle = vehicleState.currentVehicle;
            _this.editVehicleForm.patchValue(vehicleState.currentVehicle);
            _this.imageForm.patchValue(vehicleState.currentVehicle);
        });
    };
    SavevehicleComponent.prototype.imgPreviewVehicleRc = function (fileInput) {
        var _this = this;
        this.vehicleRcImage = fileInput.target.files[0];
        var mimeType = this.vehicleRcImage.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(this.vehicleRcImage);
        reader.onload = function () {
            _this.previewUrlRc = reader.result;
        };
    };
    SavevehicleComponent.prototype.imgPreviewInsurance = function (fileInput) {
        var _this = this;
        this.vehicleInsuranceImage = fileInput.target.files[0];
        var mimeType = this.vehicleInsuranceImage.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(this.vehicleInsuranceImage);
        reader.onload = function () {
            _this.previewUrlInsurance = reader.result;
        };
    };
    SavevehicleComponent.prototype.imgPreviewPuc = function (fileInput) {
        var _this = this;
        this.vehiclePucImage = fileInput.target.files[0];
        var mimeType = this.vehiclePucImage.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(this.vehiclePucImage);
        reader.onload = function () {
            _this.previewUrlPuc = reader.result;
        };
    };
    SavevehicleComponent.prototype.imgPreviewFitness = function (fileInput) {
        var _this = this;
        this.vehicleFitnessImage = fileInput.target.files[0];
        var mimeType = this.vehicleFitnessImage.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(this.vehicleFitnessImage);
        reader.onload = function () {
            _this.previewUrlFitness = reader.result;
        };
    };
    SavevehicleComponent.prototype.onSubmitImages = function () {
        var data = new FormData();
        data.append('vehicleRcImage', this.vehicleRcImage);
        data.append('vehicleInsuranceImage', this.vehicleInsuranceImage);
        data.append('vehiclePucImage', this.vehiclePucImage);
        data.append('vehicleFitnessImage', this.vehicleFitnessImage);
        data.append('_id', this.vehicle._id);
        this.store.dispatch(new _transportation_store_transportation_actions__WEBPACK_IMPORTED_MODULE_6__["UploadVehicleImages"](data));
        this.router.navigate(['../dashboard'], { relativeTo: this.route });
    };
    SavevehicleComponent.prototype.onSubmit = function () {
        this.tabSet.select('images');
        this.dispatch(this.editVehicleForm.value);
    };
    SavevehicleComponent.prototype.dispatch = function (obj) {
        Object.assign(this.vehicle, obj);
        this.store.dispatch(new _transportation_store_transportation_actions__WEBPACK_IMPORTED_MODULE_6__["SaveVehicles"](this.vehicle));
    };
    SavevehicleComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('t', { static: false })
    ], SavevehicleComponent.prototype, "tabSet", void 0);
    SavevehicleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-savevehicle',
            template: __webpack_require__(/*! raw-loader!./savevehicle.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/transportation/savevehicle/savevehicle.component.html"),
            styles: [__webpack_require__(/*! ./savevehicle.component.css */ "./src/app/roles/business/transportation/savevehicle/savevehicle.component.css")]
        })
    ], SavevehicleComponent);
    return SavevehicleComponent;
}());



/***/ }),

/***/ "./src/app/roles/business/transportation/store/transportation.actions.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/roles/business/transportation/store/transportation.actions.ts ***!
  \*******************************************************************************/
/*! exports provided: TRANSPORTATION_EDIT, SAVE_VEHICLES, SET_VEHICLES, SET_TRANSPORTATION, TRY_FETCH_VEHICLES, TRY_FETCH_TRANSPORTATION, UPLOAD_TRANSPORTATION_IMAGES, UPLOAD_VEHICLE_IMAGES, SET_CURRENT_VEHICLE, UploadVehicleImages, UploadTransportationImages, TryFetchTransportation, SetTransportation, TransportationEdit, SaveVehicles, SetVehicles, TryFetchVehicles, SetCurrentVehicle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSPORTATION_EDIT", function() { return TRANSPORTATION_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_VEHICLES", function() { return SAVE_VEHICLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_VEHICLES", function() { return SET_VEHICLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TRANSPORTATION", function() { return SET_TRANSPORTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_FETCH_VEHICLES", function() { return TRY_FETCH_VEHICLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_FETCH_TRANSPORTATION", function() { return TRY_FETCH_TRANSPORTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_TRANSPORTATION_IMAGES", function() { return UPLOAD_TRANSPORTATION_IMAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_VEHICLE_IMAGES", function() { return UPLOAD_VEHICLE_IMAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_VEHICLE", function() { return SET_CURRENT_VEHICLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadVehicleImages", function() { return UploadVehicleImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadTransportationImages", function() { return UploadTransportationImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryFetchTransportation", function() { return TryFetchTransportation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTransportation", function() { return SetTransportation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportationEdit", function() { return TransportationEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveVehicles", function() { return SaveVehicles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetVehicles", function() { return SetVehicles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryFetchVehicles", function() { return TryFetchVehicles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCurrentVehicle", function() { return SetCurrentVehicle; });
/* harmony import */ var _models_vehicle_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/vehicle.model */ "./src/app/roles/business/transportation/models/vehicle.model.ts");
/* harmony import */ var _models_transportation_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/transportation.model */ "./src/app/roles/business/transportation/models/transportation.model.ts");


// transportation actions
var TRANSPORTATION_EDIT = 'TRANSPORTATION_EDIT';
var SAVE_VEHICLES = 'SAVE_VEHICLES';
var SET_VEHICLES = 'SET_VEHICLES';
var SET_TRANSPORTATION = 'SET_TRANSPORTATION';
var TRY_FETCH_VEHICLES = 'TRY_FETCH_VEHICLES';
var TRY_FETCH_TRANSPORTATION = 'TRY_FETCH_TRANSPORTATION';
var UPLOAD_TRANSPORTATION_IMAGES = 'UPLOAD_TRANSPORTATION_IMAGES';
var UPLOAD_VEHICLE_IMAGES = 'UPLOAD_VEHICLE_IMAGES';
var SET_CURRENT_VEHICLE = 'SET_CURRENT_VEHICLE';
// transportation classses
var UploadVehicleImages = /** @class */ (function () {
    function UploadVehicleImages(payload) {
        this.payload = payload;
        this.type = UPLOAD_VEHICLE_IMAGES;
    }
    UploadVehicleImages.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UploadVehicleImages;
}());

var UploadTransportationImages = /** @class */ (function () {
    function UploadTransportationImages(payload) {
        this.payload = payload;
        this.type = UPLOAD_TRANSPORTATION_IMAGES;
    }
    UploadTransportationImages.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UploadTransportationImages;
}());

var TryFetchTransportation = /** @class */ (function () {
    function TryFetchTransportation() {
        this.type = TRY_FETCH_TRANSPORTATION;
    }
    return TryFetchTransportation;
}());

var SetTransportation = /** @class */ (function () {
    function SetTransportation(payload) {
        this.payload = payload;
        this.type = SET_TRANSPORTATION;
    }
    SetTransportation.ctorParameters = function () { return [
        { type: _models_transportation_model__WEBPACK_IMPORTED_MODULE_1__["TransportationModel"] }
    ]; };
    return SetTransportation;
}());

var TransportationEdit = /** @class */ (function () {
    function TransportationEdit(payload) {
        this.payload = payload;
        this.type = TRANSPORTATION_EDIT;
    }
    TransportationEdit.ctorParameters = function () { return [
        { type: _models_transportation_model__WEBPACK_IMPORTED_MODULE_1__["TransportationModel"] }
    ]; };
    return TransportationEdit;
}());

var SaveVehicles = /** @class */ (function () {
    function SaveVehicles(payload) {
        this.payload = payload;
        this.type = SAVE_VEHICLES;
    }
    SaveVehicles.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return SaveVehicles;
}());

var SetVehicles = /** @class */ (function () {
    function SetVehicles(payload) {
        this.payload = payload;
        this.type = SET_VEHICLES;
    }
    SetVehicles.ctorParameters = function () { return [
        { type: Array }
    ]; };
    return SetVehicles;
}());

var TryFetchVehicles = /** @class */ (function () {
    function TryFetchVehicles() {
        this.type = TRY_FETCH_VEHICLES;
    }
    return TryFetchVehicles;
}());

var SetCurrentVehicle = /** @class */ (function () {
    function SetCurrentVehicle(payload) {
        this.payload = payload;
        this.type = SET_CURRENT_VEHICLE;
    }
    SetCurrentVehicle.ctorParameters = function () { return [
        { type: _models_vehicle_model__WEBPACK_IMPORTED_MODULE_0__["VehicleModel"] }
    ]; };
    return SetCurrentVehicle;
}());



/***/ }),

/***/ "./src/app/roles/business/transportation/store/transportation.effects.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/roles/business/transportation/store/transportation.effects.ts ***!
  \*******************************************************************************/
/*! exports provided: TransportationEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportationEffects", function() { return TransportationEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/serverEndpoints */ "./src/app/shared/serverEndpoints.ts");
/* harmony import */ var _transportation_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transportation.actions */ "./src/app/roles/business/transportation/store/transportation.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var TransportationEffects = /** @class */ (function () {
    function TransportationEffects(action, http, router, route) {
        var _this = this;
        this.action = action;
        this.http = http;
        this.router = router;
        this.route = route;
        this.uploadVehicleImages = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_transportation_actions__WEBPACK_IMPORTED_MODULE_6__["UPLOAD_VEHICLE_IMAGES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (data) {
            return _this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__["uploadVehicleImages"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (response) {
            if (response.status === 200) {
                return [
                    {
                        type: _transportation_actions__WEBPACK_IMPORTED_MODULE_6__["SET_CURRENT_VEHICLE"],
                        payload: response.body
                    }
                ];
            }
            else {
                return [];
            }
        }));
        this.uploadTransportationImages = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_transportation_actions__WEBPACK_IMPORTED_MODULE_6__["UPLOAD_TRANSPORTATION_IMAGES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (data) {
            return _this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__["uploadTransportationImages"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (response) {
            if (response.status === 200) {
                return [
                    {
                        type: _transportation_actions__WEBPACK_IMPORTED_MODULE_6__["SET_TRANSPORTATION"],
                        payload: response.body
                    }
                ];
            }
            else {
                return [];
            }
        }));
        this.fetchTransportation = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_transportation_actions__WEBPACK_IMPORTED_MODULE_6__["TRY_FETCH_TRANSPORTATION"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            return _this.http.get(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__["fetchTransportation"], { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (response) {
            if (response.status === 200) {
                console.log('fetching transporatation');
                return [
                    {
                        type: _transportation_actions__WEBPACK_IMPORTED_MODULE_6__["SET_TRANSPORTATION"],
                        payload: response.body
                    }
                ];
            }
            else {
                return [];
            }
        }));
        this.fetchVehicles = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_transportation_actions__WEBPACK_IMPORTED_MODULE_6__["TRY_FETCH_VEHICLES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            return _this.http.get(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__["fetchVehicles"], { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (response) {
            if (response.status === 200) {
                return [
                    { type: _transportation_actions__WEBPACK_IMPORTED_MODULE_6__["SET_VEHICLES"], payload: response.body }
                ];
            }
            else {
                return [];
            }
        }));
        this.SaveVehicles = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_transportation_actions__WEBPACK_IMPORTED_MODULE_6__["SAVE_VEHICLES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (payload) {
            return payload.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (data) {
            return _this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__["saveVehicles"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (response) {
            if (response.status === 200) {
                _this.router.navigate(['/roles/b/transportationBusiness/saveVehicle']);
                return [
                    { type: _transportation_actions__WEBPACK_IMPORTED_MODULE_6__["SET_CURRENT_VEHICLE"], payload: response.body }
                ];
            }
            else {
                return [];
            }
        }));
        this.editTransportation = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_transportation_actions__WEBPACK_IMPORTED_MODULE_6__["TRANSPORTATION_EDIT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (payload) {
            console.log(1);
            return payload.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (data) {
            console.log(2);
            return _this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__["editTransportation"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (response) {
            if (response.status === 200) {
                return [
                    {
                        type: _transportation_actions__WEBPACK_IMPORTED_MODULE_6__["SET_TRANSPORTATION"],
                        payload: response.body
                    }
                ];
            }
            else {
                return [];
            }
        }));
    }
    TransportationEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
    ], TransportationEffects.prototype, "uploadVehicleImages", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
    ], TransportationEffects.prototype, "uploadTransportationImages", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
    ], TransportationEffects.prototype, "fetchTransportation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
    ], TransportationEffects.prototype, "fetchVehicles", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
    ], TransportationEffects.prototype, "SaveVehicles", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
    ], TransportationEffects.prototype, "editTransportation", void 0);
    TransportationEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], TransportationEffects);
    return TransportationEffects;
}());



/***/ }),

/***/ "./src/app/roles/business/transportation/store/transportation.reducer.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/roles/business/transportation/store/transportation.reducer.ts ***!
  \*******************************************************************************/
/*! exports provided: TransportationReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportationReducer", function() { return TransportationReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_transportation_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/transportation.model */ "./src/app/roles/business/transportation/models/transportation.model.ts");
/* harmony import */ var _models_vehicle_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/vehicle.model */ "./src/app/roles/business/transportation/models/vehicle.model.ts");



var initialState = {
    transportation: new _models_transportation_model__WEBPACK_IMPORTED_MODULE_1__["TransportationModel"](),
    vehicles: [],
    currentVehicle: new _models_vehicle_model__WEBPACK_IMPORTED_MODULE_2__["VehicleModel"]()
};
function TransportationReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'SET_VEHICLES': {
            console.log('inside set vehicles reducer');
            console.log(action.payload);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { vehicles: action.payload });
        }
        case 'SET_TRANSPORTATION': {
            console.log('setting transporatation');
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { transportation: action.payload });
        }
        case 'SET_CURRENT_VEHICLE': {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentVehicle: action.payload });
        }
        default: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
        }
    }
}


/***/ }),

/***/ "./src/app/roles/business/transportation/transportation-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/roles/business/transportation/transportation-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: TransportationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportationRoutingModule", function() { return TransportationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _transportation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transportation.component */ "./src/app/roles/business/transportation/transportation.component.ts");
/* harmony import */ var _transportationedit_transportationedit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transportationedit/transportationedit.component */ "./src/app/roles/business/transportation/transportationedit/transportationedit.component.ts");
/* harmony import */ var _listvehicle_listvehicle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listvehicle/listvehicle.component */ "./src/app/roles/business/transportation/listvehicle/listvehicle.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/roles/business/transportation/dashboard/dashboard.component.ts");
/* harmony import */ var _savevehicle_savevehicle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./savevehicle/savevehicle.component */ "./src/app/roles/business/transportation/savevehicle/savevehicle.component.ts");








var routes = [
    {
        path: '', component: _transportation_component__WEBPACK_IMPORTED_MODULE_3__["TransportationComponent"], children: [
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"] },
            { path: 'editProfile', component: _transportationedit_transportationedit_component__WEBPACK_IMPORTED_MODULE_4__["TransportationeditComponent"] },
            { path: 'saveVehicle', component: _savevehicle_savevehicle_component__WEBPACK_IMPORTED_MODULE_7__["SavevehicleComponent"] },
            { path: 'manageVehicle', component: _listvehicle_listvehicle_component__WEBPACK_IMPORTED_MODULE_5__["ListvehicleComponent"] },
        ]
    },
];
var TransportationRoutingModule = /** @class */ (function () {
    function TransportationRoutingModule() {
    }
    TransportationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TransportationRoutingModule);
    return TransportationRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/business/transportation/transportation.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/roles/business/transportation/transportation.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2J1c2luZXNzL3RyYW5zcG9ydGF0aW9uL3RyYW5zcG9ydGF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/roles/business/transportation/transportation.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/roles/business/transportation/transportation.component.ts ***!
  \***************************************************************************/
/*! exports provided: TransportationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportationComponent", function() { return TransportationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _store_transportation_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/transportation.actions */ "./src/app/roles/business/transportation/store/transportation.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var TransportationComponent = /** @class */ (function () {
    function TransportationComponent(store, router, route) {
        this.store = store;
        this.router = router;
        this.route = route;
    }
    TransportationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _store_transportation_actions__WEBPACK_IMPORTED_MODULE_4__["TryFetchTransportation"]());
        this.store.select('transportation').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (value) {
            // console.log(value);
            if (value.transportation.profilePercentage === 0 || value.transportation.profilePercentage === undefined) {
                _this.router.navigate(['editProfile'], { relativeTo: _this.route });
            }
            else {
                _this.router.navigate(['dashboard'], { relativeTo: _this.route });
            }
        });
    };
    TransportationComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    TransportationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transportation',
            template: __webpack_require__(/*! raw-loader!./transportation.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/transportation/transportation.component.html"),
            styles: [__webpack_require__(/*! ./transportation.component.css */ "./src/app/roles/business/transportation/transportation.component.css")]
        })
    ], TransportationComponent);
    return TransportationComponent;
}());



/***/ }),

/***/ "./src/app/roles/business/transportation/transportation.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/roles/business/transportation/transportation.module.ts ***!
  \************************************************************************/
/*! exports provided: TransportationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportationModule", function() { return TransportationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _transportation_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transportation-routing.module */ "./src/app/roles/business/transportation/transportation-routing.module.ts");
/* harmony import */ var _transportationedit_transportationedit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transportationedit/transportationedit.component */ "./src/app/roles/business/transportation/transportationedit/transportationedit.component.ts");
/* harmony import */ var _activeRoute_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../activeRoute.directive */ "./src/app/roles/activeRoute.directive.ts");
/* harmony import */ var _listvehicle_listvehicle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listvehicle/listvehicle.component */ "./src/app/roles/business/transportation/listvehicle/listvehicle.component.ts");
/* harmony import */ var _transportation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transportation.component */ "./src/app/roles/business/transportation/transportation.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _store_transportation_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/transportation.reducer */ "./src/app/roles/business/transportation/store/transportation.reducer.ts");
/* harmony import */ var _store_transportation_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/transportation.effects */ "./src/app/roles/business/transportation/store/transportation.effects.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/roles/business/transportation/dashboard/dashboard.component.ts");
/* harmony import */ var _savevehicle_savevehicle_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./savevehicle/savevehicle.component */ "./src/app/roles/business/transportation/savevehicle/savevehicle.component.ts");
















var TransportationModule = /** @class */ (function () {
    function TransportationModule() {
    }
    TransportationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _transportation_component__WEBPACK_IMPORTED_MODULE_7__["TransportationComponent"],
                _transportationedit_transportationedit_component__WEBPACK_IMPORTED_MODULE_4__["TransportationeditComponent"],
                _activeRoute_directive__WEBPACK_IMPORTED_MODULE_5__["ActiveRouteDirective"],
                _listvehicle_listvehicle_component__WEBPACK_IMPORTED_MODULE_6__["ListvehicleComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
                _savevehicle_savevehicle_component__WEBPACK_IMPORTED_MODULE_15__["SavevehicleComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _transportation_routing_module__WEBPACK_IMPORTED_MODULE_3__["TransportationRoutingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_12__["StoreModule"].forFeature('transportation', _store_transportation_reducer__WEBPACK_IMPORTED_MODULE_10__["TransportationReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsModule"].forFeature([_store_transportation_effects__WEBPACK_IMPORTED_MODULE_11__["TransportationEffects"]])
            ]
        })
    ], TransportationModule);
    return TransportationModule;
}());



/***/ }),

/***/ "./src/app/roles/business/transportation/transportationedit/transportationedit.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/roles/business/transportation/transportationedit/transportationedit.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upload-form-group input{\n  height: 110px;\n}\n\n.image-preview{\n  text-align: center;\n}\n\n.image-preview img{\n  height: 80px;\n  width: auto;\n  max-width: 120px;\n}\n\ninput[type='file'] {\n  color: transparent;\n  border: none;\n  border-radius: 0px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYnVzaW5lc3MvdHJhbnNwb3J0YXRpb24vdHJhbnNwb3J0YXRpb25lZGl0L3RyYW5zcG9ydGF0aW9uZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2J1c2luZXNzL3RyYW5zcG9ydGF0aW9uL3RyYW5zcG9ydGF0aW9uZWRpdC90cmFuc3BvcnRhdGlvbmVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGxvYWQtZm9ybS1ncm91cCBpbnB1dHtcbiAgaGVpZ2h0OiAxMTBweDtcbn1cblxuLmltYWdlLXByZXZpZXd7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltYWdlLXByZXZpZXcgaW1ne1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEyMHB4O1xufVxuXG5cbmlucHV0W3R5cGU9J2ZpbGUnXSB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/roles/business/transportation/transportationedit/transportationedit.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/roles/business/transportation/transportationedit/transportationedit.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: TransportationeditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportationeditComponent", function() { return TransportationeditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_transportation_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/transportation.actions */ "./src/app/roles/business/transportation/store/transportation.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var TransportationeditComponent = /** @class */ (function () {
    function TransportationeditComponent(fb, store, router, route) {
        this.fb = fb;
        this.store = store;
        this.router = router;
        this.route = route;
        this.navigationCheck = false;
        this.registrationMsmeImage = null;
        this.registrationGstImage = null;
        this.registrationCinImage = null;
        this.previewImage = '../../../assets/icons/uploadPic.png';
        this.previewUrlCinProof = '../../../assets/icons/uploadPic.png';
        this.previewUrlregistrationMsmeNumber = '../../../assets/icons/uploadPic.png';
        this.previewUrlgstNumber = '../../../assets/icons/uploadPic.png';
    }
    TransportationeditComponent.prototype.ngOnInit = function () {
        var _this = this;
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
            registrationType: ['privateLimited', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            registrationNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            officeAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            officePostalCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            registrationAuthority: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            registrationMsmeNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gstNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            panNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tanNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            unionEnrollmentNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.store.select('transportation').subscribe(function (value) {
            console.log(value);
            _this.transportationStore = value.transportation;
            _this.previewUrlCinProof = value.transportation.registrationCinProof ? value.transportation.registrationCinProof : _this.previewImage;
            _this.previewUrlgstNumber = value.transportation.gstNumberProof ? value.transportation.gstNumberProof : _this.previewImage;
            _this.previewUrlregistrationMsmeNumber = value.transportation.registrationMsmeNumberProof ? value.transportation.registrationMsmeNumberProof : _this.previewImage;
            _this.editForm.patchValue(value.transportation);
            _this.imageForm.patchValue(value.transportation);
            if (value.transportation.ownerDetails !== undefined) {
                _this.ownerForm.patchValue(value.transportation);
            }
        });
    };
    TransportationeditComponent.prototype.imgPreviewregistrationMsmeNumber = function (fileInput) {
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
    TransportationeditComponent.prototype.imgPreviewgstNumber = function (fileInput) {
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
    TransportationeditComponent.prototype.imgPreviewaddress = function (fileInput) {
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
    TransportationeditComponent.prototype.onSubmit = function () {
        if (this.navigationCheck) {
            this.navigationCheck = false;
            // this.router.navigate(['../dashboard'], {relativeTo: this.route});
        }
        else {
            this.tabSet.select('ownerDetails');
        }
        this.dispatch(this.transportationStore, this.editForm.value);
    };
    TransportationeditComponent.prototype.onOwnerSubmit = function () {
        this.dispatch(this.transportationStore, this.ownerForm.value);
        if (this.navigationCheck) {
            this.navigationCheck = false;
            this.router.navigate(['../dashboard'], { relativeTo: this.route });
        }
        else {
            this.tabSet.select('imagesForm');
        }
    };
    TransportationeditComponent.prototype.onImageSubmit = function () {
        var data = new FormData();
        data.append('registrationCinProof', this.registrationCinImage);
        data.append('gstNumberProof', this.registrationGstImage);
        data.append('registrationMsmeNumberProof', this.registrationMsmeImage);
        this.store.dispatch(new _store_transportation_actions__WEBPACK_IMPORTED_MODULE_4__["UploadTransportationImages"](data));
    };
    TransportationeditComponent.prototype.dispatch = function (obj1, obj2) {
        Object.assign(obj1, obj2);
        this.store.dispatch(new _store_transportation_actions__WEBPACK_IMPORTED_MODULE_4__["TransportationEdit"](this.transportationStore));
    };
    TransportationeditComponent.prototype.navigationTrigger = function () {
        alert('inside navigation trigger');
        this.navigationCheck = true;
    };
    TransportationeditComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('t', { static: false })
    ], TransportationeditComponent.prototype, "tabSet", void 0);
    TransportationeditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transportationedit',
            template: __webpack_require__(/*! raw-loader!./transportationedit.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/transportation/transportationedit/transportationedit.component.html"),
            styles: [__webpack_require__(/*! ./transportationedit.component.css */ "./src/app/roles/business/transportation/transportationedit/transportationedit.component.css")]
        })
    ], TransportationeditComponent);
    return TransportationeditComponent;
}());



/***/ })

}]);
//# sourceMappingURL=transportation-transportation-module-es5.js.map