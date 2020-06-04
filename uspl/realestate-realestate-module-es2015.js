(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["realestate-realestate-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/realestate/addpropertyre/addpropertyre.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/realestate/addpropertyre/addpropertyre.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 text-center mb-5\">\n    <div class=\"h3 text-bold mb-1 text-center\">Add Property</div>\n  </div>\n  <div class=\"col-md-10 offset-md-1 business-form\">\n\n    <ngb-tabset type=\"pills\" [justify]=\"'center'\" #t=\"ngbTabset\">\n\n      <ngb-tab title=\"Properties Details\">\n\n        <ng-template ngbTabContent>\n          <form [formGroup]=\"editForm\"\n                (ngSubmit)=\"onSubmit(rentTerm1.checked && rentTerm2.checked && rentTerm3.checked)\">\n            <div class=\"row form-group mt-5\">\n              <div class=\"col-md-5\"><label>I want to list this property as </label></div>\n              <div class=\"col-md-7\">\n                <select formControlName=\"listedBy\" class=\"form-control\">\n                  <option value=\"owner\">Owner</option>\n                  <option value=\"agent\">Agent</option>\n                  <option value=\"builder\">Builder</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"row form-group\">\n              <div class=\"col-md-5\">\n                <label>Location</label></div>\n              <div class=\"col-md-7\">\n                <input ngx-google-places-autocomplete formControlName=\"location\" type=\"text\">\n              </div>\n            </div>\n            <div class=\"row form-group\">\n              <div class=\"col-md-5\"><label>Property Name</label></div>\n              <div class=\"col-md-7\"><input formControlName=\"name\" class=\"form-control\" type=\"text\"></div>\n            </div>\n            <div class=\"row form-group\">\n              <div class=\"col-md-5\"><label>Start Rating (if applicable)</label></div>\n              <div class=\"col-md-7\">\n                <select formControlName=\"starRating\" class=\"form-control\">\n                  <option value=\"NONE\">NONE</option>\n                  <option value=\"5\">5</option>\n                  <option value=\"4\">4</option>\n                  <option value=\"3\">3</option>\n                  <option value=\"2\">2</option>\n                  <option value=\"1\">1</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"row form-group\">\n              <div class=\"col-md-5\"><label>Manager Name</label></div>\n              <div class=\"col-md-7\"><input formControlName=\"managerName\" class=\"form-control\" type=\"text\"></div>\n            </div>\n            <div class=\"row form-group\">\n              <div class=\"col-md-5\"><label>Manager Email</label></div>\n              <div class=\"col-md-7\"><input formControlName=\"managerEmail\" class=\"form-control\" type=\"mail\"></div>\n            </div>\n            <div class=\"row form-group\">\n              <div class=\"col-md-5\"><label>Manager Number</label></div>\n              <div class=\"col-md-7\"><input formControlName=\"managerMobile\" class=\"form-control\" type=\"number\"></div>\n            </div>\n            <div class=\"row form-group\">\n              <div class=\"col-md-5\"><label>Landmark</label></div>\n              <div class=\"col-md-7\"><input formControlName=\"landmark\" class=\"form-control\" type=\"text\"></div>\n            </div>\n            <div class=\"row form-group\">\n              <div class=\"col-md-5\"><label>Address</label></div>\n              <div class=\"col-md-7\"><input formControlName=\"address\" class=\"form-control\" type=\"text\"></div>\n            </div>\n            <div class=\"row form-group\">\n              <div class=\"col-md-5\"><label>Postal Code</label></div>\n              <div class=\"col-md-7\"><input formControlName=\"postalCode\" class=\"form-control\" type=\"number\"></div>\n            </div>\n\n            <div class=\"row form-group\">\n              <div class=\"col-md-5\">\n                <label>Plot Size</label>\n              </div>\n              <div class=\"col-md-7\">\n                <div class=\"form-group d-flex\" formGroupName=\"plotSize\">\n                  <input formControlName=\"size\" class=\"form-control w-50\" type=\"number\">\n                  <select formControlName=\"unit\" class=\"form-control w-50\">\n                    <option value=\"sqft\">sqft</option>\n                    <option value=\"sqmt\">sqmt</option>\n                    <option value=\"sqyards\">sqyards</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row form-group\">\n              <div class=\"col-md-5\"><label>Constructed Area</label></div>\n              <div class=\"col-md-7\">\n                <div class=\"form-group d-flex\" formGroupName=\"contructedArea\">\n                  <input formControlName=\"size\" class=\"form-control w-50\" type=\"number\">\n                  <select formControlName=\"unit\" class=\"form-control w-50\">\n                    <option value=\"sqft\">sqft</option>\n                    <option value=\"sqmt\">sqmt</option>\n                    <option value=\"sqyards\">sqyards</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row form-group\">\n              <div class=\"col-md-5\"><label>Year of construction</label></div>\n              <div class=\"col-md-7\"><input formControlName=\"constructionYear\" class=\"form-control\" type=\"number\"></div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <div class=\"col-md-5\"><label>Date of last renovation</label></div>\n                <div class=\"col-md-7\"><input formControlName=\"lastRenovation\" placeholder=\"yyyy-mm-dd\" ngbDatepicker\n                                             #dor=\"ngbDatepicker\"\n                                             class=\"form-control\" (click)=\"dor.toggle()\"\n                                             autocomplete=\"off\"></div>\n              </div>\n            </div>\n\n            <div class=\"row form-group\">\n              <div class=\"col-md-5\"><label>Is it listed on OTA/Channel manager?</label></div>\n              <div class=\"col-md-7\"><select formControlName=\"otaChannel\" class=\"form-control\">\n                <option value=\"yes\">Yes</option>\n                <option value=\"no\">No</option>\n              </select></div>\n            </div>\n\n            <div class=\"form-group\">\n              <label>Description</label>\n              <textarea rows=\"5\" class=\"w-100 p-4\" formControlName=\"description\"></textarea>\n            </div>\n\n            <div class=\"form-group\">\n              <label class=\"form-title\">Hotel Facilities</label>\n              <div class=\"row\" formGroupName=\"facilities\">\n                <div class=\"col-md-4\">\n                  <input formControlName=\"reception\" type=\"checkbox\">\n                  <label class=\"ml-2\">Reception</label>\n                </div>\n                <div class=\"col-md-4\">\n                  <input formControlName=\"laundry\" type=\"checkbox\">\n                  <label class=\"ml-2\">Laundry Room</label>\n                </div>\n                <div class=\"col-md-4\">\n                  <input formControlName=\"powerBackup\" type=\"checkbox\">\n                  <label class=\"ml-2\">Power Backup</label>\n                </div>\n                <div class=\"col-md-4\">\n                  <input formControlName=\"cctv\" type=\"checkbox\">\n                  <label class=\"ml-2\">CCTV</label>\n                </div>\n                <div class=\"col-md-4\">\n                  <input formControlName=\"mobileNetwork\" type=\"checkbox\">\n                  <label class=\"ml-2\">Mobile Network</label>\n                </div>\n                <div class=\"col-md-4\">\n                  <input formControlName=\"parking\" type=\"checkbox\">\n                  <label class=\"ml-2\">Parking</label>\n                </div>\n                <div class=\"col-md-4\">\n                  <input formControlName=\"coldStorage\" type=\"checkbox\">\n                  <label class=\"ml-2\">Cold Storage</label>\n                </div>\n                <div class=\"col-md-4\">\n                  <input formControlName=\"guide\" type=\"checkbox\">\n                  <label class=\"ml-2\">Guide</label>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label class=\"form-title\">Amenities</label>\n              <div class=\"row\" formGroupName=\"amenities\">\n                <div class=\"col-md-4\">\n                  <input formControlName=\"restaurants\" type=\"checkbox\">\n                  <label class=\"ml-2\">Restaurants</label>\n                </div>\n                <div class=\"col-md-4\">\n                  <input formControlName=\"gym\" type=\"checkbox\">\n                  <label class=\"ml-2\">Gym</label>\n                </div>\n                <div class=\"col-md-4\">\n                  <input formControlName=\"spa\" type=\"checkbox\">\n                  <label class=\"ml-2\">Spa</label>\n                </div>\n                <div class=\"col-md-4\">\n                  <input formControlName=\"fitnessRoom\" type=\"checkbox\">\n                  <label class=\"ml-2\">Fitness Room</label>\n                </div>\n                <div class=\"col-md-4\">\n                  <input formControlName=\"swimmingPool\" type=\"checkbox\">\n                  <label class=\"ml-2\">Swimming Pool</label>\n                </div>\n                <div class=\"col-md-4\">\n                  <input formControlName=\"lounge\" type=\"checkbox\">\n                  <label class=\"ml-2\">Lounge</label>\n                </div>\n                <div class=\"col-md-4\">\n                  <input formControlName=\"bonfire\" type=\"checkbox\">\n                  <label class=\"ml-2\">Bonfire</label>\n                </div>\n                <div class=\"col-md-4\">\n                  <input formControlName=\"park\" type=\"checkbox\">\n                  <label class=\"ml-2\">Park</label>\n                </div>\n                <div class=\"col-md-4\">\n                  <input formControlName=\"fireplace\" type=\"checkbox\">\n                  <label class=\"ml-2\">Fireplace</label>\n                </div>\n                <div class=\"col-md-12 form-group\">\n                  <label>Other Amenities</label>\n                  <textarea rows=\"5\" class=\"w-100 p-4\" formControlName=\"otherAmenities\"></textarea>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label class=\"form-title\">Activity Centres</label>\n              <div class=\"row\" formGroupName=\"activities\">\n                <div class=\"col-md-4\">\n                  <input formControlName=\"waterPark\" type=\"checkbox\">\n                  <label class=\"ml-2\">Water Park</label>\n                </div>\n                <div class=\"col-md-4\">\n                  <input formControlName=\"adventurePark\" type=\"checkbox\">\n                  <label class=\"ml-2\">Adventure Park</label>\n                </div>\n                <div class=\"col-md-4\">\n                  <input formControlName=\"golf\" type=\"checkbox\">\n                  <label class=\"ml-2\">Golf</label>\n                </div>\n                <div class=\"col-md-4\">\n                  <input formControlName=\"casino\" type=\"checkbox\">\n                  <label class=\"ml-2\">Casino</label>\n                </div>\n                <div class=\"col-md-4\">\n                  <input formControlName=\"businessCentre\" type=\"checkbox\">\n                  <label class=\"ml-2\">Business Centre</label>\n                </div>\n                <div class=\"col-md-4\">\n                  <input formControlName=\"gamesRoom\" type=\"checkbox\">\n                  <label class=\"ml-2\">Games Room</label>\n                </div>\n                <div class=\"col-md-4\">\n                  <input formControlName=\"tvRoom\" type=\"checkbox\">\n                  <label class=\"ml-2\">TV Room</label>\n                </div>\n                <div class=\"col-md-4\">\n                  <input formControlName=\"sunDeck\" type=\"checkbox\">\n                  <label class=\"ml-2\">Sun Deck</label>\n                </div>\n              </div>\n\n            </div>\n\n            <div class=\"form-group\">\n              <label class=\"form-title\"\n                     [ngClass]=\" !(rentTerm1.checked && rentTerm2.checked && rentTerm3.checked) ? 'text-danger' : ''\">To\n                Complete Your Registration, Please Tick Boxes Below:</label>\n              <div class=\"col-md-12\">\n                <input #rentTerm1 (change)=\"true\" type=\"checkbox\">\n                <label class=\"ml-2\">I hereby certify that I am authorized person for the referenced\n                  property</label>\n              </div>\n              <div class=\"col-md-12\">\n                <input #rentTerm2 (change)=\"true\" type=\"checkbox\">\n                <label class=\"ml-2\">I certify that this is a legitimate listing</label>\n              </div>\n              <div class=\"col-md-12\">\n                <input #rentTerm3 (change)=\"true\" type=\"checkbox\">\n                <label class=\"ml-2\">I have read, accepted and agreed to the General terms and\n                  conditions</label>\n              </div>\n            </div>\n\n            <div class=\"form-group row text-center mt-5\">\n              <div class=\"col-md-12 text-center\">\n                <button class=\"btn btn-yellow\" type=\"submit\">\n                  Save And Next\n                </button>\n              </div>\n            </div>\n          </form>\n        </ng-template>\n\n      </ngb-tab>\n\n      <ngb-tab title=\"Pricing\" id=\"pricing\">\n\n        <ng-template ngbTabContent>\n          <form [formGroup]=\"pricingForm\" (ngSubmit)=\"pricingSubmit()\">\n            <div class=\"form-group\">\n              <label>Expected Rent</label>\n              <input formControlName=\"rent\" class=\"form-control\" type=\"number\">\n            </div>\n\n            <div class=\"row form-group\">\n              <div class=\"col-md-6\">\n                <input formControlName=\"electricityIncluded\" type=\"checkbox\">\n                <label class=\"ml-2\">Electricity And Water Bill Included</label>\n              </div>\n              <div class=\"col-md-6\">\n                <input formControlName=\"priceNegotiable\" type=\"checkbox\">\n                <label class=\"ml-2\">Price Negotiable</label>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label>Security Deposit</label>\n              <input formControlName=\"securityDeposit\" class=\"form-control\" type=\"text\">\n            </div>\n\n            <div class=\"form-group\">\n              <label>Maintenance</label>\n              <input formControlName=\"maintenanceCharges\" class=\"form-control\" type=\"text\">\n            </div>\n\n            <div class=\"form-group\">\n              <label>Booking Amount</label>\n              <input formControlName=\"bookingAmount\" class=\"form-control\" type=\"text\">\n            </div>\n\n            <div class=\"form-group\">\n              <label>Duration of Rent Agreement</label>\n              <input formControlName=\"rentAgreementDuration\" class=\"form-control\" type=\"text\">\n            </div>\n\n            <div class=\"form-group\">\n              <label>Months Of Notice</label>\n              <input formControlName=\"noticePeriod\" class=\"form-control\" type=\"text\">\n            </div>\n\n            <div class=\"form-group row text-center mt-5\">\n              <div class=\"col-md-6 text-left pl-3\">\n                <button class=\"btn btn-yellow\">Previous</button>\n              </div>\n              <div class=\"col-md-6 text-right pr-3\">\n                <button class=\"btn btn-yellow\">Next\n                </button>\n              </div>\n            </div>\n          </form>\n        </ng-template>\n\n      </ngb-tab>\n\n      <ngb-tab title=\"UPLOAD IMAGE\" id=\"imagesForm\">\n\n        <ng-template ngbTabContent>\n          <form [formGroup]=\"imageForm\" (ngSubmit)=\"onImageSubmit()\">\n            <div class=\"row\" *ngIf=\"!editMode\">\n              <div class=\"row form-group upload-form-group\">\n                <div class=\"col-md-12 d-flex\">\n                  <div class=\"pt-1\">\n                    <label> Add Some Photos </label>\n                  </div>\n                  <div class=\"\">\n                    <input class=\"form-control\" type=\"file\"\n                           (change)=\"imgPreviewFeature($event)\" multiple accept=\"image/x-png,image/jpeg\">\n                  </div>\n                </div>\n                <div class=\"col-md-12 image-preview\">\n                  <div class=\"row\">\n                    <div class=\"col-md-4 p-1\" *ngFor=\"let image of imageForm.get('images').value;\">\n                      <img [src]=\"image.url\" alt=\"\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\" *ngIf=\"editMode\">\n              <div class=\"col-md-6\">\n                <div class=\"row form-group upload-form-group\">\n                  <div class=\"col-md-12\">\n                    <div class=\"col-md-12 pt-1\">\n                      <label>Add new Photos </label>\n                    </div>\n                    <div class=\"col-md-12\">\n                      <input class=\"form-control\" type=\"file\"\n                             (change)=\"imgPreviewFeature($event)\" multiple accept=\"image/x-png,image/jpeg\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-12 image-preview\">\n                    <div class=\"row\">\n                      <div class=\"col-md-6 p-1\" *ngFor=\"let image of imageForm.get('images').value;\">\n                        <img [src]=\"image.url\" alt=\"\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6 pt-5\">\n                <label style=\"width: 100%; text-align: center\">Old Photos</label>\n                <div class=\"row form-group upload-form-group\">\n                  <div class=\"col-md-12 image-preview\">\n                    <div class=\"row\">\n                      <div class=\"col-md-6 p-1\" *ngFor=\"let img of realEstate.properties[id].images;\">\n                        <img [src]=\"img\" alt=\"\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row form-group text-center\">\n              <div class=\"col-md-12 text-center\">\n                <button class=\"btn btn-yellow\">Save</button>\n              </div>\n            </div>\n          </form>\n        </ng-template>\n      </ngb-tab>\n\n    </ngb-tabset>\n  </div>\n\n\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/realestate/dashboard/dashboard.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/realestate/dashboard/dashboard.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"h3 text-bold mb-5 text-center\">Your Dashboard</div>\n    </div>\n\n    <div class=\"col-md-12\">\n        <div class=\"row\">\n            <div class=\"col-md-3 offset-1\">\n                <div class=\"info-box-tile\">\n                    <div class=\"info-box-top\">\n                        <span>0</span>\n                    </div>\n                    <div class=\"info-box-bottom\">\n                        On Lease\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"info-box-tile\">\n                    <div class=\"info-box-top\">\n                        <span>0</span>\n                    </div>\n                    <div class=\"info-box-bottom\">\n                        Sold Properties\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"info-box-tile\">\n                    <div class=\"info-box-top\">\n                        <span>0</span>\n                    </div>\n                    <div class=\"info-box-bottom\">\n                      Total <br> Properties\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-12\">\n        <div class=\"h4 mt-5 mb-4 text-bold\">Sales</div>\n    </div>\n\n    <div class=\"col-md-12\">\n        <div class=\"row\">\n            <div class=\"col-md-4 offset-1\">\n                <div class=\"info-box-card\">\n                    <div>From Lease</div>\n                    <div>\n                        ₹ <span class=\"h6 text-bold\">0</span>\n                        <span>/month</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"info-box-card\">\n                    <div>From Sale</div>\n                    <div>\n                        ₹ <span class=\"h6 text-bold\">0</span>\n                        <span>Total</span>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/realestate/manageproperty/manageproperty.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/realestate/manageproperty/manageproperty.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"h3 text-bold mb-5 text-center\">Your Properties</div>\n  </div>\n  <div class=\"col-md-12 property-list\" *ngIf=\"allProperties.length; else elseBlock\">\n\n    <div class=\"row property-list-item\" *ngFor=\"let property of allProperties;let i = index\">\n\n      <div class=\"col-md-5\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            Location\n          </div>\n          <div class=\"col-md-6\">\n            <span>{{property.location}}</span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            Manager\n          </div>\n          <div class=\"col-md-6\">\n            <span>{{property.managerName}}</span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <span>{{property.managerMobile}}</span>\n          </div>\n          <div class=\"col-md-6\">\n            <span>{{property.managerEmail}}</span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-6 d-flex m-auto\">\n        <div class=\"h4 text-bold\">{{property.name}}</div>\n      </div>\n\n      <div class=\"col-md-1 property-action\">\n        <div><img src=\"../../../../../assets/icons/edit-black.png\" alt=\"\" (click)=\"editProperty(i)\"></div>\n        <div><img src=\"../../../../../assets/icons/delete.png\" alt=\"\" (click)=\"deleteProperty(i)\"></div>\n      </div>\n\n    </div>\n\n  </div>\n  <ng-template #elseBlock>\n    <div class=\"col-md-12 text-center\">\n      <h3>\n        No Property found\n      </h3>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/realestate/realestate.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/realestate/realestate.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-2 business-sidebar\">\n    <div class=\"sidebar pt-5\">\n      <div class=\"h5 text-center text-bold text-white\">Manage Business</div>\n      <a routerLink=\"dashboard\" routerLinkActive=\"active\"><span><img\n        src=\"../../../../assets/icons/business/dashboard.png\" alt=\"\"></span>Dashboard</a>\n      <a routerLink=\"editProfile\" routerLinkActive=\"active\"><span><img\n        src=\"../../../../assets/icons/business/edit-profile.png\" alt=\"\"></span>Edit Profile</a>\n      <a routerLink=\"manageProperty\" routerLinkActive=\"active\"><span><img\n        src=\"../../../../assets/icons/business/manage-inventory.png\" alt=\"\"></span>Manage</a>\n      <a routerLink=\"addProperty\" routerLinkActive=\"active\"><span><img\n        src=\"../../../../assets/icons/business/manage-inventory.png\" alt=\"\"></span>Rent</a>\n    </div>\n  </div>\n  <div class=\"col-md-10 scroll-view pt-5\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/roles/business/realestate/realestateedit/realestateedit.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roles/business/realestate/realestateedit/realestateedit.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 mb-5\">\n    <div class=\"h3 text-bold mb-5 text-center\">Your Details</div>\n    <ngb-tabset type=\"pills\" [justify]=\"'center'\" #t=\"ngbTabset\">\n\n      <ngb-tab title=\"FIRM DETAILS\">\n        <ng-template ngbTabContent>\n          <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-group mt-5\">\n\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>Company Name</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"text\" formControlName=\"name\">\n                </div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>Registration Type</label></div>\n                <div class=\"col-md-7\"><select class=\"form-control\" formControlName=\"registrationType\">\n                  <option value=\"privateLimitied\">Private Limited</option>\n                  <option value=\"publicLimited\">Public Limited</option>\n                  <option value=\"proprietorship\">Proprietorship</option>\n                  <option value=\"partnership\">Partnership</option>\n                  <option value=\"powerOfAttorney\">Under Power of Attorney</option>\n                </select></div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>Registration CIN No</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"text\"\n                                             formControlName=\"registrationNo\"></div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>Full Office Address</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"text\"\n                                             formControlName=\"officeAddress\"></div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>Pincode</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"number\"\n                                             formControlName=\"officePostalCode\"></div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>Registration Authority</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"text\"\n                                             formControlName=\"registrationAuthority\"></div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>Registration MSME Number</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"text\"\n                                             formControlName=\"registrationMsmeNumber\"></div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>GST Number</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"text\"\n                                             formControlName=\"gstNumber\"></div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>PAN Number</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"text\"\n                                             formControlName=\"panNumber\"></div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>TAN Number</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"text\"\n                                             formControlName=\"tanNumber\"></div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>Union Enrollment Number</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"text\"\n                                             formControlName=\"unionEnrollmentNumber\"></div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>Contact Number</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"number\"\n                                             formControlName=\"mobile\"\n                                             onkeypress=\"if((this.value.length==10)) return false;\">\n                </div>\n              </div>\n            </div>\n\n\n            <div class=\"form-group row text-center mt-5\">\n              <div class=\"col-md-6 text-left pl-3\">\n                <button class=\"btn btn-yellow\">Next</button>\n              </div>\n              <div class=\"col-md-6 text-right pr-3\">\n                <button class=\"btn btn-yellow\" (click)=\"navigationTrigger()\">Save and Continue Later\n                </button>\n              </div>\n            </div>\n\n          </form>\n        </ng-template>\n      </ngb-tab>\n\n\n      <ngb-tab title=\"OWNER DETAILS\" id=\"ownerDetails\">\n        <ng-template ngbTabContent>\n          <form [formGroup]=\"ownerForm\" (ngSubmit)=\"onOwnerSubmit()\">\n            <div class=\"form-group mt-5\" formGroupName=\"ownerDetails\">\n\n              <div class=\"col-md-12 form-group d-flex mt-5\">\n                <span class=\"text-center-vertical\"> I am </span>\n                <select class=\"form-control w-25 ml-2 mr-2\" formControlName=\"profileRegistrar\">\n                  <option value=\"OWNER\">OWNER</option>\n                  <option value=\"MANAGER\">MANAGER</option>\n                  <option value=\"OTHER\">OTHER</option>\n                </select>\n                <span class=\"text-center-vertical\"> of this company </span>\n              </div>\n\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>Name</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"text\" formControlName=\"name\">\n                </div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>Mobile</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"number\"\n                                             formControlName=\"mobile\"\n                                             onkeypress=\"if((this.value.length==10)) return false;\">\n                </div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>Email</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"email\" formControlName=\"email\">\n                </div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>PAN number</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"text\" formControlName=\"pan\">\n                </div>\n              </div>\n              <div formGroupName=\"address\">\n                <div class=\"row form-group\">\n                  <div class=\"col-md-5\"><label>Address</label></div>\n                  <div class=\"col-md-7\"><input class=\"form-control\" type=\"text\"\n                                               formControlName=\"address\"></div>\n                </div>\n                <div class=\"row form-group\">\n                  <div class=\"col-md-5\"><label>Pincode</label></div>\n                  <div class=\"col-md-7\"><input class=\"form-control\" type=\"number\"\n                                               formControlName=\"pincode\"></div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\" formGroupName=\"bankDetails\">\n              <!--<label class=\"form-title\">Bank Details</label><br>-->\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>Bank Name</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"text\"\n                                             formControlName=\"bankName\"></div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>Bank Account number</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"number\"\n                                             formControlName=\"bankAccountNo\"></div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>Bank IFSC</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"text\"\n                                             formControlName=\"bankIfsc\"></div>\n              </div>\n              <div class=\"row form-group\">\n                <div class=\"col-md-5\"><label>Bank Address</label></div>\n                <div class=\"col-md-7\"><input class=\"form-control\" type=\"text\"\n                                             formControlName=\"bankAddress\"></div>\n              </div>\n            </div>\n            <div class=\"form-group row text-center mt-5\">\n              <div class=\"col-md-6 text-left pl-3\">\n                <button class=\"btn btn-yellow\">Next</button>\n              </div>\n              <div class=\"col-md-6 text-right pr-3\">\n                <button class=\"btn btn-yellow\" (click)=\"navigationTrigger()\">Save and Continue Later\n                </button>\n              </div>\n            </div>\n          </form>\n        </ng-template>\n      </ngb-tab>\n\n\n      <ngb-tab title=\"UPLOAD IMAGE\" id=\"imagesForm\">\n        <ng-template ngbTabContent>\n          <form [formGroup]=\"imageForm\" (ngSubmit)=\"onImageSubmit()\">\n\n\n            <div class=\"row form-group upload-form-group mt-5\">\n              <div class=\"col-md-9 d-flex\">\n                <div class=\"col-md-8\"><label> Upload your Registration MSME number Proof </label></div>\n                <div class=\"col-md-4\"><input class=\"form-control \" type=\"file\"\n                                             formControlName=\"registrationMsmeNumberProof\"\n                                             (change)=\"imgPreviewregistrationMsmeNumber($event)\"></div>\n              </div>\n              <div class=\"col-md-3 image-preview\">\n                <img [src]=\"previewUrlregistrationMsmeNumber\">\n              </div>\n            </div>\n\n            <div class=\"row form-group upload-form-group\">\n              <div class=\"col-md-9 d-flex\">\n                <div class=\"col-md-8\"><label> Upload your GST number Proof </label></div>\n                <div class=\"col-md-4\"><input class=\"form-control \" type=\"file\"\n                                             formControlName=\"gstNumberProof\"\n                                             (change)=\"imgPreviewgstNumber($event)\"></div>\n              </div>\n              <div class=\"col-md-3 image-preview\">\n                <img [src]=\"previewUrlgstNumber\">\n              </div>\n            </div>\n\n            <div class=\"row form-group upload-form-group\">\n              <div class=\"col-md-9 d-flex\">\n                <div class=\"col-md-8\"><label> Upload your Registration CIN Proof </label></div>\n                <div class=\"col-md-4\"><input class=\"form-control \" type=\"file\"\n                                             formControlName=\"registrationCinProof\"\n                                             (change)=\"imgPreviewaddress($event)\"></div>\n              </div>\n              <div class=\"col-md-3 image-preview\">\n                <img [src]=\"previewUrlCinProof\">\n              </div>\n            </div>\n\n            <div class=\"form-group col-md-12 text-center\">\n              <button class=\"btn btn-yellow\">Save</button>\n            </div>\n          </form>\n        </ng-template>\n      </ngb-tab>\n\n    </ngb-tabset>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/roles/business/realestate/addpropertyre/addpropertyre.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/roles/business/realestate/addpropertyre/addpropertyre.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upload-form-group>div{\n    margin: auto;\n}\n\n.upload-form-group{\n    padding: 20px;\n    /*height: 150px;*/\n    /*border: 2px dashed #2d0829;*/\n}\n\n.upload-form-group input{\n    height: auto;\n}\n\n.image-preview{\n    text-align: center;\n  max-height: 180px;\n  overflow-y: scroll;\n  overflow: auto;\n}\n\n.image-preview img{\n    width: 100%;\n  height: auto;\n  max-height: 100px;\n}\n\n.btn{\n    background: white;\n    color: black;\n    border: 1px solid black;\n    border-radius: 38px;\n    font-weight: 700 !important;\n}\n\ninput[type='file'] {\n    color: transparent;\n    border: none;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYnVzaW5lc3MvcmVhbGVzdGF0ZS9hZGRwcm9wZXJ0eXJlL2FkZHByb3BlcnR5cmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDhCQUE4QjtBQUNsQzs7QUFHQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztFQUNiLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9idXNpbmVzcy9yZWFsZXN0YXRlL2FkZHByb3BlcnR5cmUvYWRkcHJvcGVydHlyZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwbG9hZC1mb3JtLWdyb3VwPmRpdntcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi51cGxvYWQtZm9ybS1ncm91cHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIC8qaGVpZ2h0OiAxNTBweDsqL1xuICAgIC8qYm9yZGVyOiAycHggZGFzaGVkICMyZDA4Mjk7Ki9cbn1cblxuXG4udXBsb2FkLWZvcm0tZ3JvdXAgaW5wdXR7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaW1hZ2UtcHJldmlld3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1heC1oZWlnaHQ6IDE4MHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uaW1hZ2UtcHJldmlldyBpbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogMTAwcHg7XG59XG5cbi5idG57XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDM4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xufVxuXG5pbnB1dFt0eXBlPSdmaWxlJ10ge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/roles/business/realestate/addpropertyre/addpropertyre.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/roles/business/realestate/addpropertyre/addpropertyre.component.ts ***!
  \************************************************************************************/
/*! exports provided: AddpropertyreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpropertyreComponent", function() { return AddpropertyreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _models_property_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/property.model */ "./src/app/roles/business/realestate/models/property.model.ts");
/* harmony import */ var _store_realestate_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/realestate.actions */ "./src/app/roles/business/realestate/store/realestate.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/toast/toast.service */ "./src/app/shared/toast/toast.service.ts");








let AddpropertyreComponent = class AddpropertyreComponent {
    constructor(fb, store, router, route, toastService) {
        this.fb = fb;
        this.store = store;
        this.router = router;
        this.route = route;
        this.toastService = toastService;
        this.editMode = false;
        this.image = [];
        this.previewImage = '../../../assets/icons/uploadPic.png';
        this.property = new _models_property_model__WEBPACK_IMPORTED_MODULE_4__["PropertyModel"]();
    }
    ngOnInit() {
        this.editForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            listedBy: ['owner', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            starRating: ['NONE', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            managerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            managerEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            managerMobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            landmark: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            postalCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            plotSize: this.fb.group({
                size: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                unit: ['sqft', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            }),
            contructedArea: this.fb.group({
                size: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                unit: ['sqft', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            }),
            constructionYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastRenovation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            otaChannel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            facilities: this.fb.group({
                reception: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                laundry: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                powerBackup: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                cctv: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                mobileNetwork: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                parking: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                coldStorage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                guide: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            }),
            amenities: this.fb.group({
                restaurants: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                gym: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                spa: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                fitnessRoom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                swimmingPool: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                lounge: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                bonfire: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                park: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                fireplace: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                otherAmenities: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            activities: this.fb.group({
                waterPark: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                adventurePark: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                golf: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                casino: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                businessCentre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                gamesRoom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                tvRoom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                sunDeck: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            }),
        });
        // only for img preview
        this.imageForm = this.fb.group({
            images: this.fb.array([]),
        });
        this.pricingForm = this.fb.group({
            rent: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            electricityIncluded: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            priceNegotiable: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            securityDeposit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            maintenanceCharges: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            bookingAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            rentAgreementDuration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            noticePeriod: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.store.select('realEstate').subscribe(value => {
            console.log(value);
            this.realEstate = value.realEstate;
            if (value.property) {
                this.property = value.property;
            }
        });
        this.route.paramMap.subscribe((params) => {
            if (params.get('id')) {
                this.id = +params.get('id');
                this.editMode = true;
                this.property = this.realEstate.properties[this.id];
                this.editForm.patchValue(this.realEstate.properties[this.id]);
                this.pricingForm.patchValue(this.realEstate.properties[this.id]);
                if (this.realEstate.properties[this.id].images) {
                    this.image = this.realEstate.properties[this.id].images;
                }
            }
        });
    }
    imgPreviewFeature(event) {
        const files = event.target.files;
        // only for img preview
        if (files) {
            for (const file of files) {
                this.image.push(file);
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.imageForm.get('images').push(this.fb.group({
                        url: e.target.result // Base64 string for preview image
                    }));
                };
                reader.readAsDataURL(file);
            }
        }
    }
    onSubmit(clickCheck) {
        if (!this.editMode) {
            this.property._id = null;
            this.property.delFlg = false;
        }
        if (clickCheck) {
            this.dispatch(this.editForm.value);
            this.tabSet.select('pricing');
        }
        else {
            this.toastService.showDanger('Please Tick the checkbox First!');
        }
    }
    onImageSubmit() {
        if (this.image.length) {
            const data = new FormData();
            Array.from(this.image).forEach(file => {
                data.append('images[]', file);
            });
            data.append('_id', this.property._id);
            this.store.dispatch(new _store_realestate_actions__WEBPACK_IMPORTED_MODULE_5__["UploadRealEstatePropertyImages"](data));
            if (this.editMode) {
                this.router.navigate(['../../dashboard'], { relativeTo: this.route });
            }
            else {
                this.router.navigate(['../dashboard'], { relativeTo: this.route });
            }
        }
        else {
            this.toastService.showDanger('Please Select Images');
        }
    }
    pricingSubmit() {
        this.dispatch(this.pricingForm.value);
        this.tabSet.select('imagesForm');
    }
    dispatch(obj) {
        Object.assign(this.property, obj);
        this.store.dispatch(new _store_realestate_actions__WEBPACK_IMPORTED_MODULE_5__["PropertyEdit"](this.property));
    }
    ngOnDestroy() {
        this.property = null;
    }
};
AddpropertyreComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('t', { static: false })
], AddpropertyreComponent.prototype, "tabSet", void 0);
AddpropertyreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addpropertyre',
        template: __webpack_require__(/*! raw-loader!./addpropertyre.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/realestate/addpropertyre/addpropertyre.component.html"),
        styles: [__webpack_require__(/*! ./addpropertyre.component.css */ "./src/app/roles/business/realestate/addpropertyre/addpropertyre.component.css")]
    })
], AddpropertyreComponent);



/***/ }),

/***/ "./src/app/roles/business/realestate/dashboard/dashboard.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/roles/business/realestate/dashboard/dashboard.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info-box-tile{\n    height: 160px;\n    width: auto;\n    text-align: center;\n    border-radius: 20px;\n    box-shadow: 1px 2px 10px 3px lightgrey;\n    background: linear-gradient(white 60%, #4b6cdb 40%);\n}\n\n.info-box-tile .info-box-top{\n    padding-top: 20px;\n    color: black;\n    height: 60%;\n    font-weight: 700;\n    font-size: 1.75rem;\n}\n\n.info-box-tile .info-box-bottom{\n    padding-top: 10px;\n    color: white;\n    height: 40%;\n}\n\n.info-box-card{\n    min-height: 100px;\n    padding: 20px 10px;\n    background: #4b6cdb;\n    color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYnVzaW5lc3MvcmVhbGVzdGF0ZS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0NBQXNDO0lBQ3RDLG1EQUFtRDtBQUN2RDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9idXNpbmVzcy9yZWFsZXN0YXRlL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZvLWJveC10aWxle1xuICAgIGhlaWdodDogMTYwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAxMHB4IDNweCBsaWdodGdyZXk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHdoaXRlIDYwJSwgIzRiNmNkYiA0MCUpO1xufVxuXG4uaW5mby1ib3gtdGlsZSAuaW5mby1ib3gtdG9we1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBoZWlnaHQ6IDYwJTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbn1cblxuLmluZm8tYm94LXRpbGUgLmluZm8tYm94LWJvdHRvbXtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiA0MCU7XG59XG5cbi5pbmZvLWJveC1jYXJke1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNGI2Y2RiO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/roles/business/realestate/dashboard/dashboard.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/roles/business/realestate/dashboard/dashboard.component.ts ***!
  \****************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/realestate/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/roles/business/realestate/dashboard/dashboard.component.css")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/roles/business/realestate/manageproperty/manageproperty.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/roles/business/realestate/manageproperty/manageproperty.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".property-list-item{\n  border: 2px solid black;\n  border-radius: 10px;\n  padding: 10px;\n  margin: 20px 10px;\n}\n\n.property-action img{\n  height: 28px;\n  margin: 5px;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYnVzaW5lc3MvcmVhbGVzdGF0ZS9tYW5hZ2Vwcm9wZXJ0eS9tYW5hZ2Vwcm9wZXJ0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvYnVzaW5lc3MvcmVhbGVzdGF0ZS9tYW5hZ2Vwcm9wZXJ0eS9tYW5hZ2Vwcm9wZXJ0eS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb3BlcnR5LWxpc3QtaXRlbXtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMjBweCAxMHB4O1xufVxuXG4ucHJvcGVydHktYWN0aW9uIGltZ3tcbiAgaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW46IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/roles/business/realestate/manageproperty/manageproperty.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/roles/business/realestate/manageproperty/manageproperty.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ManagepropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagepropertyComponent", function() { return ManagepropertyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _store_realestate_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/realestate.actions */ "./src/app/roles/business/realestate/store/realestate.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ManagepropertyComponent = class ManagepropertyComponent {
    constructor(store, router, route) {
        this.store = store;
        this.router = router;
        this.route = route;
        this.allProperties = [];
    }
    ngOnInit() {
        this.store.dispatch(new _store_realestate_actions__WEBPACK_IMPORTED_MODULE_2__["TryFetchRealEstate"]());
        this.store.select('realEstate').subscribe(value => {
            console.log('subscribed to realestate');
            return this.allProperties = value.realEstate.properties;
        });
    }
    editProperty(index) {
        this.router.navigate(['../editProperty', index], { relativeTo: this.route });
    }
    deleteProperty(index) {
        this.currentProperty = this.allProperties[index];
        this.currentProperty.delFlg = true;
        this.store.dispatch(new _store_realestate_actions__WEBPACK_IMPORTED_MODULE_2__["PropertyEdit"](this.currentProperty));
        this.store.dispatch(new _store_realestate_actions__WEBPACK_IMPORTED_MODULE_2__["TryFetchRealEstate"]());
    }
};
ManagepropertyComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
ManagepropertyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manageproperty',
        template: __webpack_require__(/*! raw-loader!./manageproperty.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/realestate/manageproperty/manageproperty.component.html"),
        styles: [__webpack_require__(/*! ./manageproperty.component.css */ "./src/app/roles/business/realestate/manageproperty/manageproperty.component.css")]
    })
], ManagepropertyComponent);



/***/ }),

/***/ "./src/app/roles/business/realestate/models/property.model.ts":
/*!********************************************************************!*\
  !*** ./src/app/roles/business/realestate/models/property.model.ts ***!
  \********************************************************************/
/*! exports provided: PropertyModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyModel", function() { return PropertyModel; });
class PropertyModel {
    constructor(_id, listedBy, location, name, starRating, managerName, managerEmail, managerMobile, landmark, address, postalCode, plotSize, contructedArea, contructionYear, lastRenovation, otaChannel, description, facilities, amenities, activities, rent, electricityIncluded, priceNegotiable, securityDeposit, maintenanceCharges, bookingAmount, rentAgreementDuration, noticePeriod, delFlg, images) {
        this._id = _id;
        this.listedBy = listedBy;
        this.location = location;
        this.name = name;
        this.starRating = starRating;
        this.managerName = managerName;
        this.managerEmail = managerEmail;
        this.managerMobile = managerMobile;
        this.landmark = landmark;
        this.address = address;
        this.postalCode = postalCode;
        this.plotSize = plotSize;
        this.contructedArea = contructedArea;
        this.contructionYear = contructionYear;
        this.lastRenovation = lastRenovation;
        this.otaChannel = otaChannel;
        this.description = description;
        this.facilities = facilities;
        this.amenities = amenities;
        this.activities = activities;
        this.rent = rent;
        this.electricityIncluded = electricityIncluded;
        this.priceNegotiable = priceNegotiable;
        this.securityDeposit = securityDeposit;
        this.maintenanceCharges = maintenanceCharges;
        this.bookingAmount = bookingAmount;
        this.rentAgreementDuration = rentAgreementDuration;
        this.noticePeriod = noticePeriod;
        this.delFlg = delFlg;
        this.images = images;
    }
}
PropertyModel.ctorParameters = () => [
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
    { type: Number },
    { type: undefined },
    { type: undefined },
    { type: Number },
    { type: undefined },
    { type: String },
    { type: String },
    { type: undefined },
    { type: undefined },
    { type: undefined },
    { type: Number },
    { type: Boolean },
    { type: Boolean },
    { type: Boolean },
    { type: Boolean },
    { type: Boolean },
    { type: Boolean },
    { type: Boolean },
    { type: Boolean },
    { type: Array }
];


/***/ }),

/***/ "./src/app/roles/business/realestate/models/realestate.model.ts":
/*!**********************************************************************!*\
  !*** ./src/app/roles/business/realestate/models/realestate.model.ts ***!
  \**********************************************************************/
/*! exports provided: RealestateModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealestateModel", function() { return RealestateModel; });
class RealestateModel {
    constructor(profilePercentage, name, registrationType, registrationNo, officeAddress, officePostalCode, registrationAuthority, registrationMsmeNumber, gstNumber, panNumber, tanNumber, unionEnrollmentNumber, mobile, ownerDetails, registrationCinProof, gstNumberProof, registrationMsmeNumberProof, properties) {
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
        this.properties = properties;
    }
}
RealestateModel.ctorParameters = () => [
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
    { type: String },
    { type: Array }
];


/***/ }),

/***/ "./src/app/roles/business/realestate/realestate-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/roles/business/realestate/realestate-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: RealestateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealestateRoutingModule", function() { return RealestateRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _realestate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./realestate.component */ "./src/app/roles/business/realestate/realestate.component.ts");
/* harmony import */ var _realestateedit_realestateedit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./realestateedit/realestateedit.component */ "./src/app/roles/business/realestate/realestateedit/realestateedit.component.ts");
/* harmony import */ var _addpropertyre_addpropertyre_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addpropertyre/addpropertyre.component */ "./src/app/roles/business/realestate/addpropertyre/addpropertyre.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/roles/business/realestate/dashboard/dashboard.component.ts");
/* harmony import */ var _manageproperty_manageproperty_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manageproperty/manageproperty.component */ "./src/app/roles/business/realestate/manageproperty/manageproperty.component.ts");








const routes = [
    {
        path: '', component: _realestate_component__WEBPACK_IMPORTED_MODULE_3__["RealestateComponent"], children: [
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"] },
            { path: 'editProfile', component: _realestateedit_realestateedit_component__WEBPACK_IMPORTED_MODULE_4__["RealestateeditComponent"] },
            { path: 'manageProperty', component: _manageproperty_manageproperty_component__WEBPACK_IMPORTED_MODULE_7__["ManagepropertyComponent"] },
            { path: 'editProperty/:id', component: _addpropertyre_addpropertyre_component__WEBPACK_IMPORTED_MODULE_5__["AddpropertyreComponent"] },
            { path: 'addProperty', component: _addpropertyre_addpropertyre_component__WEBPACK_IMPORTED_MODULE_5__["AddpropertyreComponent"] }
        ]
    }
];
let RealestateRoutingModule = class RealestateRoutingModule {
};
RealestateRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RealestateRoutingModule);



/***/ }),

/***/ "./src/app/roles/business/realestate/realestate.component.css":
/*!********************************************************************!*\
  !*** ./src/app/roles/business/realestate/realestate.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2J1c2luZXNzL3JlYWxlc3RhdGUvcmVhbGVzdGF0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/roles/business/realestate/realestate.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/roles/business/realestate/realestate.component.ts ***!
  \*******************************************************************/
/*! exports provided: RealestateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealestateComponent", function() { return RealestateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _store_realestate_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/realestate.actions */ "./src/app/roles/business/realestate/store/realestate.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let RealestateComponent = class RealestateComponent {
    constructor(store, router, route) {
        this.store = store;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.store.dispatch(new _store_realestate_actions__WEBPACK_IMPORTED_MODULE_4__["TryFetchRealEstate"]());
        this.store.select('realEstate').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(value => {
            if (value.realEstate.profilePercentage === 0 || value.realEstate.profilePercentage === undefined) {
                // alert('inside profile percentage zero');
                this.router.navigate(['editProfile'], { relativeTo: this.route });
            }
            else {
                this.router.navigate(['dashboard'], { relativeTo: this.route });
            }
        });
    }
};
RealestateComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
RealestateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-realestate',
        template: __webpack_require__(/*! raw-loader!./realestate.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/realestate/realestate.component.html"),
        styles: [__webpack_require__(/*! ./realestate.component.css */ "./src/app/roles/business/realestate/realestate.component.css")]
    })
], RealestateComponent);



/***/ }),

/***/ "./src/app/roles/business/realestate/realestate.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/roles/business/realestate/realestate.module.ts ***!
  \****************************************************************/
/*! exports provided: RealestateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealestateModule", function() { return RealestateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _realestate_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./realestate-routing.module */ "./src/app/roles/business/realestate/realestate-routing.module.ts");
/* harmony import */ var _realestate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./realestate.component */ "./src/app/roles/business/realestate/realestate.component.ts");
/* harmony import */ var _realestateedit_realestateedit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./realestateedit/realestateedit.component */ "./src/app/roles/business/realestate/realestateedit/realestateedit.component.ts");
/* harmony import */ var _addpropertyre_addpropertyre_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addpropertyre/addpropertyre.component */ "./src/app/roles/business/realestate/addpropertyre/addpropertyre.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _store_realestate_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/realestate.reducer */ "./src/app/roles/business/realestate/store/realestate.reducer.ts");
/* harmony import */ var _store_realestate_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store/realestate.effects */ "./src/app/roles/business/realestate/store/realestate.effects.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/roles/business/realestate/dashboard/dashboard.component.ts");
/* harmony import */ var _manageproperty_manageproperty_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./manageproperty/manageproperty.component */ "./src/app/roles/business/realestate/manageproperty/manageproperty.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
















let RealestateModule = class RealestateModule {
};
RealestateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _realestate_component__WEBPACK_IMPORTED_MODULE_4__["RealestateComponent"],
            _realestateedit_realestateedit_component__WEBPACK_IMPORTED_MODULE_5__["RealestateeditComponent"],
            _addpropertyre_addpropertyre_component__WEBPACK_IMPORTED_MODULE_6__["AddpropertyreComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
            _manageproperty_manageproperty_component__WEBPACK_IMPORTED_MODULE_14__["ManagepropertyComponent"]
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _realestate_routing_module__WEBPACK_IMPORTED_MODULE_3__["RealestateRoutingModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forFeature('realEstate', _store_realestate_reducer__WEBPACK_IMPORTED_MODULE_11__["RealEstateReducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forFeature([_store_realestate_effects__WEBPACK_IMPORTED_MODULE_12__["RealestateEffects"]]),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"]
        ]
    })
], RealestateModule);



/***/ }),

/***/ "./src/app/roles/business/realestate/realestateedit/realestateedit.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/roles/business/realestate/realestateedit/realestateedit.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upload-form-group input{\n  height: 110px;\n}\n\n.image-preview{\n  text-align: center;\n}\n\n.image-preview img{\n  height: 80px;\n  width: auto;\n  max-width: 120px;\n}\n\ninput[type='file'] {\n  color: transparent;\n  border: none;\n  border-radius: 0px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYnVzaW5lc3MvcmVhbGVzdGF0ZS9yZWFsZXN0YXRlZWRpdC9yZWFsZXN0YXRlZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2J1c2luZXNzL3JlYWxlc3RhdGUvcmVhbGVzdGF0ZWVkaXQvcmVhbGVzdGF0ZWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGxvYWQtZm9ybS1ncm91cCBpbnB1dHtcbiAgaGVpZ2h0OiAxMTBweDtcbn1cblxuLmltYWdlLXByZXZpZXd7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltYWdlLXByZXZpZXcgaW1ne1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEyMHB4O1xufVxuXG5cbmlucHV0W3R5cGU9J2ZpbGUnXSB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/roles/business/realestate/realestateedit/realestateedit.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/roles/business/realestate/realestateedit/realestateedit.component.ts ***!
  \**************************************************************************************/
/*! exports provided: RealestateeditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealestateeditComponent", function() { return RealestateeditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_realestate_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/realestate.actions */ "./src/app/roles/business/realestate/store/realestate.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let RealestateeditComponent = class RealestateeditComponent {
    constructor(fb, store, router, route) {
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
    ngOnInit() {
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
        this.store.select('realEstate').subscribe(value => {
            console.log(value);
            this.realEstateStore = value.realEstate;
            this.previewUrlCinProof = value.realEstate.registrationCinProof !== undefined ? value.realEstate.registrationCinProof : this.previewUrlCinProof;
            this.previewUrlgstNumber = value.realEstate.gstNumberProof !== undefined ? value.realEstate.gstNumberProof : this.previewUrlregistrationMsmeNumber;
            this.previewUrlregistrationMsmeNumber = value.realEstate.registrationMsmeNumberProof !== undefined ? value.realEstate.registrationMsmeNumberProof : this.previewUrlgstNumber;
            this.editForm.patchValue(this.realEstateStore);
            this.imageForm.patchValue(this.realEstateStore);
            if (value.realEstate.ownerDetails !== undefined) {
                this.ownerForm.patchValue(this.realEstateStore);
            }
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
    onImageSubmit() {
        const data = new FormData();
        data.append('registrationCinProof', this.registrationCinImage);
        data.append('gstNumberProof', this.registrationGstImage);
        data.append('registrationMsmeNumberProof', this.registrationMsmeImage);
        this.store.dispatch(new _store_realestate_actions__WEBPACK_IMPORTED_MODULE_4__["UploadRealEstateImages"](data));
    }
    onOwnerSubmit() {
        this.dispatch(this.ownerForm.value);
        this.tabSet.select('imagesForm');
    }
    onSubmit() {
        this.dispatch(this.editForm.value);
        this.tabSet.select('ownerDetails');
    }
    dispatch(obj) {
        Object.assign(this.realEstateStore, obj);
        this.store.dispatch(new _store_realestate_actions__WEBPACK_IMPORTED_MODULE_4__["RealEstateEdit"](this.realEstateStore));
    }
    navigationTrigger() {
        this.navigationCheck = true;
    }
};
RealestateeditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('t', { static: false })
], RealestateeditComponent.prototype, "tabSet", void 0);
RealestateeditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-realestateedit',
        template: __webpack_require__(/*! raw-loader!./realestateedit.component.html */ "./node_modules/raw-loader/index.js!./src/app/roles/business/realestate/realestateedit/realestateedit.component.html"),
        styles: [__webpack_require__(/*! ./realestateedit.component.css */ "./src/app/roles/business/realestate/realestateedit/realestateedit.component.css")]
    })
], RealestateeditComponent);



/***/ }),

/***/ "./src/app/roles/business/realestate/store/realestate.actions.ts":
/*!***********************************************************************!*\
  !*** ./src/app/roles/business/realestate/store/realestate.actions.ts ***!
  \***********************************************************************/
/*! exports provided: TRY_FETCH_REALESTATE, SET_REALESTATE, REALESTATE_EDIT, UPLOAD_REALESTATE_IMAGES, SET_PROPERTY, UPLOAD_PROPERTY_IMAGES, PROPERTY_EDIT, PropertyEdit, UploadRealEstatePropertyImages, SetRealEstateProperty, TryFetchRealEstate, SetRealEstate, UploadRealEstateImages, RealEstateEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_FETCH_REALESTATE", function() { return TRY_FETCH_REALESTATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_REALESTATE", function() { return SET_REALESTATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REALESTATE_EDIT", function() { return REALESTATE_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_REALESTATE_IMAGES", function() { return UPLOAD_REALESTATE_IMAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PROPERTY", function() { return SET_PROPERTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_PROPERTY_IMAGES", function() { return UPLOAD_PROPERTY_IMAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROPERTY_EDIT", function() { return PROPERTY_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyEdit", function() { return PropertyEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadRealEstatePropertyImages", function() { return UploadRealEstatePropertyImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetRealEstateProperty", function() { return SetRealEstateProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryFetchRealEstate", function() { return TryFetchRealEstate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetRealEstate", function() { return SetRealEstate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadRealEstateImages", function() { return UploadRealEstateImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealEstateEdit", function() { return RealEstateEdit; });
/* harmony import */ var _models_realestate_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/realestate.model */ "./src/app/roles/business/realestate/models/realestate.model.ts");
/* harmony import */ var _models_property_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/property.model */ "./src/app/roles/business/realestate/models/property.model.ts");


const TRY_FETCH_REALESTATE = 'TRY_FETCH_REALESTATE';
const SET_REALESTATE = 'SET_REALESTATE';
const REALESTATE_EDIT = 'REALESTATE_EDIT';
const UPLOAD_REALESTATE_IMAGES = 'UPLOAD_REALESTATE_IMAGES';
const SET_PROPERTY = 'SET_REALESTATE_PROPERTY';
const UPLOAD_PROPERTY_IMAGES = 'UPLOAD_REALESTATE__PROPERTY_IMAGES';
const PROPERTY_EDIT = 'PROPERTY_EDIT';
class PropertyEdit {
    constructor(payload) {
        this.payload = payload;
        this.type = PROPERTY_EDIT;
    }
}
PropertyEdit.ctorParameters = () => [
    { type: _models_property_model__WEBPACK_IMPORTED_MODULE_1__["PropertyModel"] }
];
class UploadRealEstatePropertyImages {
    constructor(payload) {
        this.payload = payload;
        this.type = UPLOAD_PROPERTY_IMAGES;
    }
}
UploadRealEstatePropertyImages.ctorParameters = () => [
    { type: undefined }
];
class SetRealEstateProperty {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_PROPERTY;
    }
}
SetRealEstateProperty.ctorParameters = () => [
    { type: Array }
];
// classes for realestate
class TryFetchRealEstate {
    constructor() {
        this.type = TRY_FETCH_REALESTATE;
    }
}
class SetRealEstate {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_REALESTATE;
    }
}
SetRealEstate.ctorParameters = () => [
    { type: _models_realestate_model__WEBPACK_IMPORTED_MODULE_0__["RealestateModel"] }
];
class UploadRealEstateImages {
    constructor(payload) {
        this.payload = payload;
        this.type = UPLOAD_REALESTATE_IMAGES;
    }
}
UploadRealEstateImages.ctorParameters = () => [
    { type: undefined }
];
class RealEstateEdit {
    constructor(payload) {
        this.payload = payload;
        this.type = REALESTATE_EDIT;
    }
}
RealEstateEdit.ctorParameters = () => [
    { type: _models_realestate_model__WEBPACK_IMPORTED_MODULE_0__["RealestateModel"] }
];


/***/ }),

/***/ "./src/app/roles/business/realestate/store/realestate.effects.ts":
/*!***********************************************************************!*\
  !*** ./src/app/roles/business/realestate/store/realestate.effects.ts ***!
  \***********************************************************************/
/*! exports provided: RealestateEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealestateEffects", function() { return RealestateEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/serverEndpoints */ "./src/app/shared/serverEndpoints.ts");
/* harmony import */ var _realestate_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./realestate.actions */ "./src/app/roles/business/realestate/store/realestate.actions.ts");
/* harmony import */ var _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/toast/toast.service */ "./src/app/shared/toast/toast.service.ts");








let RealestateEffects = class RealestateEffects {
    constructor(action, http, toastService) {
        this.action = action;
        this.http = http;
        this.toastService = toastService;
        this.uploadPropertyImage = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_realestate_actions__WEBPACK_IMPORTED_MODULE_6__["UPLOAD_PROPERTY_IMAGES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((data) => {
            return this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__["uploadrealestatePropertyImages"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((response) => {
            if (response.status === 200) {
                this.toastService.showSuccess('Voila! Images Uploaded Successfully!');
                return [
                    {
                        type: _realestate_actions__WEBPACK_IMPORTED_MODULE_6__["SET_PROPERTY"],
                        payload: response.body
                    }
                ];
            }
            else {
                return [];
            }
        }));
        // effects for realestate
        this.editProperty = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_realestate_actions__WEBPACK_IMPORTED_MODULE_6__["PROPERTY_EDIT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((payload) => {
            return payload.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((data) => {
            return this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__["saverealEstateProperty"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((response) => {
            this.toastService.showSuccess('Thanks for updating your Property Details!');
            if (response.status === 200) {
                return [
                    {
                        type: _realestate_actions__WEBPACK_IMPORTED_MODULE_6__["SET_PROPERTY"],
                        payload: response.body
                    }
                ];
            }
            else {
                return [];
            }
        }));
        // effects for realestate
        this.editRealEstate = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_realestate_actions__WEBPACK_IMPORTED_MODULE_6__["REALESTATE_EDIT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((payload) => {
            return payload.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((data) => {
            return this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__["editrealestate"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((response) => {
            if (response.status === 200) {
                this.toastService.showSuccess('Thanks for updating your Real Estate Company Details!');
                return [
                    {
                        type: _realestate_actions__WEBPACK_IMPORTED_MODULE_6__["SET_REALESTATE"],
                        payload: response.body
                    }
                ];
            }
            else {
                return [];
            }
        }));
        this.uploadRealEstateImages = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_realestate_actions__WEBPACK_IMPORTED_MODULE_6__["UPLOAD_REALESTATE_IMAGES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((data) => {
            return this.http.post(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__["uploadrealestateImages"], data, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((response) => {
            if (response.status === 200) {
                this.toastService.showSuccess('Voila! Images Uploaded Successfully!');
                return [
                    {
                        type: _realestate_actions__WEBPACK_IMPORTED_MODULE_6__["SET_REALESTATE"],
                        payload: response.body
                    }
                ];
            }
            else {
                return [];
            }
        }));
        this.fetchRealEstate = this.action.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_realestate_actions__WEBPACK_IMPORTED_MODULE_6__["TRY_FETCH_REALESTATE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => {
            return this.http.get(_shared_serverEndpoints__WEBPACK_IMPORTED_MODULE_5__["fetchrealestate"], { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((response) => {
            if (response.status === 200) {
                return [
                    {
                        type: _realestate_actions__WEBPACK_IMPORTED_MODULE_6__["SET_REALESTATE"],
                        payload: response.body
                    }
                ];
            }
            else {
                return [];
            }
        }));
    }
};
RealestateEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], RealestateEffects.prototype, "uploadPropertyImage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], RealestateEffects.prototype, "editProperty", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], RealestateEffects.prototype, "editRealEstate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], RealestateEffects.prototype, "uploadRealEstateImages", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], RealestateEffects.prototype, "fetchRealEstate", void 0);
RealestateEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], RealestateEffects);



/***/ }),

/***/ "./src/app/roles/business/realestate/store/realestate.reducer.ts":
/*!***********************************************************************!*\
  !*** ./src/app/roles/business/realestate/store/realestate.reducer.ts ***!
  \***********************************************************************/
/*! exports provided: RealEstateReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealEstateReducer", function() { return RealEstateReducer; });
/* harmony import */ var _models_realestate_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/realestate.model */ "./src/app/roles/business/realestate/models/realestate.model.ts");
/* harmony import */ var _models_property_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/property.model */ "./src/app/roles/business/realestate/models/property.model.ts");


const initialState = {
    realEstate: new _models_realestate_model__WEBPACK_IMPORTED_MODULE_0__["RealestateModel"](),
    property: new _models_property_model__WEBPACK_IMPORTED_MODULE_1__["PropertyModel"]()
};
function RealEstateReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_REALESTATE': {
            return Object.assign({}, state, { realEstate: action.payload });
        }
        case 'SET_REALESTATE_PROPERTY': {
            return Object.assign({}, state, { property: action.payload });
        }
        default: {
            return Object.assign({}, state);
        }
    }
}


/***/ })

}]);
//# sourceMappingURL=realestate-realestate-module-es2015.js.map