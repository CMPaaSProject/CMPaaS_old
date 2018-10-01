(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-forms-module"],{

/***/ "./src/app/forms/extendedforms/extendedforms.component.html":
/*!******************************************************************!*\
  !*** ./src/app/forms/extendedforms/extendedforms.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <br>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4 mr-auto\">\r\n                        <legend>Datepicker</legend>\r\n                        <mat-form-field >\r\n                          <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" (click)=\"picker.open()\">\r\n                          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                          <mat-datepicker #picker></mat-datepicker>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-4 mr-auto\">\r\n                        <legend>Datepicker Year</legend>\r\n                        <mat-form-field>\r\n                          <input matInput [matDatepicker]=\"picker2\" placeholder=\"Choose a date\" (click)=\"picker2.open()\">\r\n                          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                          <mat-datepicker #picker2 startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div>\r\n                <br>\r\n                <br>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <legend>Switches</legend>\r\n                        <div class=\"togglebutton\">\r\n                          <label>\r\n                            <input type=\"checkbox\" checked=\"\">\r\n                            <span class=\"toggle\"></span>\r\n                            Toggle is on\r\n                          </label>\r\n                        </div>\r\n                        <div class=\"togglebutton\">\r\n                          <label>\r\n                            <input type=\"checkbox\">\r\n                            <span class=\"toggle\"></span>\r\n                            Toggle is off\r\n                          </label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <legend>Customisable Select</legend>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-5 col-md-8 col-sm-4\">\r\n                              <mat-form-field>\r\n                                  <mat-select multiple placeholder=\"Multiple Cities\" [(ngModel)]=\"currentCity\" name=\"Paris\" ariaLabel=\"cities[0]\">\r\n                                      <mat-option *ngFor=\"let city of cities\" [value]=\"city.value\">\r\n                                          {{ city.viewValue }}\r\n                                      </mat-option>\r\n                                  </mat-select>\r\n                              </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-lg-5 col-md-8 col-sm-4\">\r\n                                <mat-form-field>\r\n                                    <mat-select placeholder=\"Single City\" name=\"city\">\r\n                                      <mat-option *ngFor=\"let city of cities\" [value]=\"city.value\">\r\n                                        {{ city.viewValue }}\r\n                                      </mat-option>\r\n                                    </mat-select>\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <br>\r\n                <br>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <legend>Tags</legend>\r\n                        Regular: <tag-input [(ngModel)]='regularItems' theme='filled-theme'></tag-input>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <legend>Dropdown & Dropup</legend>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-4 col-md-6 col-sm-3\">\r\n                                <div class=\"dropdown\">\r\n                                    <button mat-raised-button href=\"#pablo\" class=\"dropdown-toggle btn btn-primary btn-round btn-block\" data-toggle=\"dropdown\">Dropdown\r\n                                        <b class=\"caret\"></b>\r\n                                    </button>\r\n                                    <ul class=\"dropdown-menu dropdown-menu-left\">\r\n                                        <li class=\"dropdown-header\">Dropdown header</li>\r\n                                        <li>\r\n                                            <a href=\"#pablo\">Action</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"#pablo\">Another action</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"#pablo\">Something else here</a>\r\n                                        </li>\r\n                                        <li class=\"divider\"></li>\r\n                                        <li>\r\n                                            <a href=\"#pablo\">Separated link</a>\r\n                                        </li>\r\n                                        <li class=\"divider\"></li>\r\n                                        <li>\r\n                                            <a href=\"#pablo\">One more separated link</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-4 col-md-6 col-sm-3\">\r\n                                <div class=\"dropup\">\r\n                                    <button mat-raised-button href=\"#pablo\" class=\"dropdown-toggle btn btn-primary btn-round btn-block\" data-toggle=\"dropdown\">Dropup\r\n                                        <b class=\"caret\"></b>\r\n                                    </button>\r\n                                    <ul class=\"dropdown-menu dropdown-menu-left\">\r\n                                        <li class=\"dropdown-header\">Dropdown header</li>\r\n                                        <li>\r\n                                            <a href=\"#pablo\">Action</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"#pablo\">Another action</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"#pablo\">Something else here</a>\r\n                                        </li>\r\n                                        <li class=\"divider\"></li>\r\n                                        <li>\r\n                                            <a href=\"#pablo\">Separated link</a>\r\n                                        </li>\r\n                                        <li class=\"divider\"></li>\r\n                                        <li>\r\n                                            <a href=\"#pablo\">One more separated link</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <br>\r\n                <br>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <legend>Progress Bars</legend>\r\n                        <div class=\"progress progress-line-primary\">\r\n                            <div class=\"progress-bar progress-bar-primary\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 30%;\">\r\n                                <span class=\"sr-only\">60% Complete</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"progress progress-line-info\">\r\n                            <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\">\r\n                                <span class=\"sr-only\">60% Complete</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"progress progress-line-danger\">\r\n                            <div class=\"progress-bar progress-bar-success\" style=\"width: 35%\">\r\n                                <span class=\"sr-only\">35% Complete (success)</span>\r\n                            </div>\r\n                            <div class=\"progress-bar progress-bar-warning\" style=\"width: 20%\">\r\n                                <span class=\"sr-only\">20% Complete (warning)</span>\r\n                            </div>\r\n                            <div class=\"progress-bar progress-bar-danger\" style=\"width: 10%\">\r\n                                <span class=\"sr-only\">10% Complete (danger)</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <legend>Sliders</legend>\r\n                        <nouislider [connect]=\"true\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"simpleSlider\" [tooltips]=\"true\" class=\"slider\"></nouislider>\r\n                        <br>\r\n                        <nouislider class=\"slider slider-info\" [connect]=\"true\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"doubleSlider\" [tooltips]=\"true\"></nouislider>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4 col-sm-4\">\r\n                        <legend>Regular Image</legend>\r\n                        <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\r\n                            <div class=\"fileinput-new thumbnail\">\r\n                                <img src=\"./assets/img/image_placeholder.jpg\" alt=\"...\">\r\n                            </div>\r\n                            <div class=\"fileinput-preview fileinput-exists thumbnail\"></div>\r\n                            <div>\r\n                                <span class=\"btn btn-rose btn-round btn-file\">\r\n                                    <span class=\"fileinput-new\">Select image</span>\r\n                                    <span class=\"fileinput-exists\">Change</span>\r\n                                    <input type=\"file\" name=\"...\" />\r\n                                </span>\r\n                                <a href=\"#pablo\" class=\"btn btn-danger btn-round fileinput-exists\" data-dismiss=\"fileinput\"><i class=\"fa fa-times\"></i> Remove</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3 col-sm-4\">\r\n                        <legend>Avatar</legend>\r\n                        <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\r\n                            <div class=\"fileinput-new thumbnail img-circle\">\r\n                                <img src=\"./assets/img/placeholder.jpg\" alt=\"...\">\r\n                            </div>\r\n                            <div class=\"fileinput-preview fileinput-exists thumbnail img-circle\"></div>\r\n                            <div>\r\n                                <span class=\"btn btn-round btn-rose btn-file\">\r\n                                    <span class=\"fileinput-new\">Add Photo</span>\r\n                                    <span class=\"fileinput-exists\">Change</span>\r\n                                    <input type=\"file\" name=\"...\" />\r\n                                </span>\r\n                                <br />\r\n                                <a href=\"#pablo\" class=\"btn btn-danger btn-round fileinput-exists\" data-dismiss=\"fileinput\"><i class=\"fa fa-times\"></i> Remove</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- end card -->\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/forms/extendedforms/extendedforms.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/forms/extendedforms/extendedforms.component.ts ***!
  \****************************************************************/
/*! exports provided: ExtendedFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendedFormsComponent", function() { return ExtendedFormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExtendedFormsComponent = /** @class */ (function () {
    function ExtendedFormsComponent() {
        this.simpleSlider = 40;
        this.doubleSlider = [20, 60];
        this.regularItems = ['Pizza', 'Pasta', 'Parmesan'];
        this.selectTheme = 'primary';
        this.cities = [
            { value: 'paris-0', viewValue: 'Paris' },
            { value: 'miami-1', viewValue: 'Miami' },
            { value: 'bucharest-2', viewValue: 'Bucharest' },
            { value: 'new-york-3', viewValue: 'New York' },
            { value: 'london-4', viewValue: 'London' },
            { value: 'barcelona-5', viewValue: 'Barcelona' },
            { value: 'moscow-6', viewValue: 'Moscow' },
        ];
    }
    ExtendedFormsComponent.prototype.ngOnInit = function () { };
    ExtendedFormsComponent.prototype.myFunc = function (val) {
        // code here
    };
    ExtendedFormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-extendedforms-cmp',
            template: __webpack_require__(/*! ./extendedforms.component.html */ "./src/app/forms/extendedforms/extendedforms.component.html"),
            styles: ["md-calendar {\n      width: 300px;\n  }"]
        })
    ], ExtendedFormsComponent);
    return ExtendedFormsComponent;
}());



/***/ }),

/***/ "./src/app/forms/forms.module.ts":
/*!***************************************!*\
  !*** ./src/app/forms/forms.module.ts ***!
  \***************************************/
/*! exports provided: Forms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Forms", function() { return Forms; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _forms_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms.routing */ "./src/app/forms/forms.routing.ts");
/* harmony import */ var _extendedforms_extendedforms_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./extendedforms/extendedforms.component */ "./src/app/forms/extendedforms/extendedforms.component.ts");
/* harmony import */ var _regularforms_regularforms_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./regularforms/regularforms.component */ "./src/app/forms/regularforms/regularforms.component.ts");
/* harmony import */ var _validationforms_validationforms_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./validationforms/validationforms.component */ "./src/app/forms/validationforms/validationforms.component.ts");
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wizard/wizard.component */ "./src/app/forms/wizard/wizard.component.ts");
/* harmony import */ var _validationforms_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./validationforms/field-error-display/field-error-display.component */ "./src/app/forms/validationforms/field-error-display/field-error-display.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var Forms = /** @class */ (function () {
    function Forms() {
    }
    Forms = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_forms_routing__WEBPACK_IMPORTED_MODULE_7__["FormsRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_5__["TagInputModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
            ],
            declarations: [
                _extendedforms_extendedforms_component__WEBPACK_IMPORTED_MODULE_8__["ExtendedFormsComponent"],
                _regularforms_regularforms_component__WEBPACK_IMPORTED_MODULE_9__["RegularFormsComponent"],
                _validationforms_validationforms_component__WEBPACK_IMPORTED_MODULE_10__["ValidationFormsComponent"],
                _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_11__["WizardComponent"],
                _validationforms_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_12__["FieldErrorDisplayComponent"]
            ]
        })
    ], Forms);
    return Forms;
}());



/***/ }),

/***/ "./src/app/forms/forms.routing.ts":
/*!****************************************!*\
  !*** ./src/app/forms/forms.routing.ts ***!
  \****************************************/
/*! exports provided: FormsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsRoutes", function() { return FormsRoutes; });
/* harmony import */ var _extendedforms_extendedforms_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extendedforms/extendedforms.component */ "./src/app/forms/extendedforms/extendedforms.component.ts");
/* harmony import */ var _regularforms_regularforms_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regularforms/regularforms.component */ "./src/app/forms/regularforms/regularforms.component.ts");
/* harmony import */ var _validationforms_validationforms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validationforms/validationforms.component */ "./src/app/forms/validationforms/validationforms.component.ts");
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wizard/wizard.component */ "./src/app/forms/wizard/wizard.component.ts");




var FormsRoutes = [
    {
        path: '',
        children: [{
                path: 'regular',
                component: _regularforms_regularforms_component__WEBPACK_IMPORTED_MODULE_1__["RegularFormsComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'extended',
                component: _extendedforms_extendedforms_component__WEBPACK_IMPORTED_MODULE_0__["ExtendedFormsComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'validation',
                component: _validationforms_validationforms_component__WEBPACK_IMPORTED_MODULE_2__["ValidationFormsComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'wizard',
                component: _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_3__["WizardComponent"]
            }]
    }
];


/***/ }),

/***/ "./src/app/forms/regularforms/regularforms.component.html":
/*!****************************************************************!*\
  !*** ./src/app/forms/regularforms/regularforms.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"card \">\r\n          <div class=\"card-header card-header-rose card-header-icon\">\r\n            <div class=\"card-icon\">\r\n              <i class=\"material-icons\">mail_outline</i>\r\n            </div>\r\n            <h4 class=\"card-title\">Stacked Form</h4>\r\n          </div>\r\n          <div class=\"card-body \">\r\n            <form method=\"#\" action=\"#\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Email Address\" type=\"email\">\r\n              </mat-form-field>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Password\" type=\"password\">\r\n              </mat-form-field>\r\n              <div class=\"form-check\">\r\n                <label class=\"form-check-label\">\r\n                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\"> Subscribe to newsletter\r\n                  <span class=\"form-check-sign\">\r\n                    <span class=\"check\"></span>\r\n                  </span>\r\n                </label>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <div class=\"card-footer \">\r\n            <button mat-raised-button type=\"submit\" class=\"btn btn-fill btn-rose\">Submit</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"card \">\r\n          <div class=\"card-header card-header-rose card-header-icon\">\r\n            <div class=\"card-icon\">\r\n              <i class=\"material-icons\">contacts</i>\r\n            </div>\r\n            <h4 class=\"card-title\">Horizontal Form</h4>\r\n          </div>\r\n          <div class=\"card-body \">\r\n            <form class=\"form-horizontal\">\r\n              <div class=\"row\">\r\n                <label class=\"col-md-3 col-2 col-form-label\">Email</label>\r\n                <div class=\"col-md-9 col-9\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput type=\"email\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <label class=\"col-md-3 col-2 col-form-label\">Password</label>\r\n                <div class=\"col-md-9 col-9\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput type=\"password\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <label class=\"col-md-3\"></label>\r\n                <div class=\"col-md-9\">\r\n                  <div class=\"form-check\">\r\n                    <label class=\"form-check-label\">\r\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\"> Remember me\r\n                      <span class=\"form-check-sign\">\r\n                        <span class=\"check\"></span>\r\n                      </span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <div class=\"card-footer \">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-9\">\r\n                <button mat-raised-button type=\"submit\" class=\"btn btn-fill btn-rose\">Sign in</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card \">\r\n          <div class=\"card-header card-header-rose card-header-text\">\r\n            <div class=\"card-text\">\r\n              <h4 class=\"card-title\">Form Elements</h4>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body \">\r\n            <form method=\"get\" action=\"/\" class=\"form-horizontal\">\r\n              <div class=\"row\">\r\n                <label class=\"col-sm-2 col-form-label\">With help</label>\r\n                <div class=\"col-sm-10\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput type=\"text\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <label class=\"col-sm-2 col-form-label\">Password</label>\r\n                <div class=\"col-sm-10\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput type=\"password\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <label class=\"col-sm-2 col-form-label\">Placeholder</label>\r\n                <div class=\"col-sm-10\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput type=\"text\" placeholder=\"placeholder\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <label class=\"col-sm-2 col-form-label\">Disabled</label>\r\n                <div class=\"col-sm-10\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput type=\"text\" placeholder=\"placeholder\" value=\"Disabled input here..\" disabled>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <label class=\"col-sm-2 col-form-label\">Static control</label>\r\n                <div class=\"col-sm-10\">\r\n                  <div class=\"form-group\">\r\n                    <p class=\"form-control-static\">hello@creative-tim.com</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <label class=\"col-sm-2 col-form-label\">Checkboxes and radios</label>\r\n                <div class=\"col-sm-10 checkbox-radios\">\r\n                  <div class=\"form-check\">\r\n                    <label class=\"form-check-label\">\r\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\"> First Checkbox\r\n                      <span class=\"form-check-sign\">\r\n                        <span class=\"check\"></span>\r\n                      </span>\r\n                    </label>\r\n                  </div>\r\n                  <div class=\"form-check\">\r\n                    <label class=\"form-check-label\">\r\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\"> Second Checkbox\r\n                      <span class=\"form-check-sign\">\r\n                        <span class=\"check\"></span>\r\n                      </span>\r\n                    </label>\r\n                  </div>\r\n                  <div class=\"form-check\">\r\n                    <label class=\"form-check-label\">\r\n                      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" value=\"option2\" checked> First Radio\r\n                      <span class=\"circle\">\r\n                        <span class=\"check\"></span>\r\n                      </span>\r\n                    </label>\r\n                  </div>\r\n                  <div class=\"form-check\">\r\n                    <label class=\"form-check-label\">\r\n                      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" value=\"option1\"> Second Radio\r\n                      <span class=\"circle\">\r\n                        <span class=\"check\"></span>\r\n                      </span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <label class=\"col-sm-2 col-form-label\">Inline checkboxes</label>\r\n                <div class=\"col-sm-10\">\r\n                  <div class=\"form-check form-check-inline\">\r\n                    <label class=\"form-check-label\">\r\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\"> a\r\n                      <span class=\"form-check-sign\">\r\n                        <span class=\"check\"></span>\r\n                      </span>\r\n                    </label>\r\n                  </div>\r\n                  <div class=\"form-check form-check-inline\">\r\n                    <label class=\"form-check-label\">\r\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\"> b\r\n                      <span class=\"form-check-sign\">\r\n                        <span class=\"check\"></span>\r\n                      </span>\r\n                    </label>\r\n                  </div>\r\n                  <div class=\"form-check form-check-inline\">\r\n                    <label class=\"form-check-label\">\r\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\"> c\r\n                      <span class=\"form-check-sign\">\r\n                        <span class=\"check\"></span>\r\n                      </span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card \">\r\n          <div class=\"card-header card-header-rose card-header-text\">\r\n            <div class=\"card-text\">\r\n              <h4 class=\"card-title\">Input Variants</h4>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body \">\r\n            <form method=\"get\" action=\"/\" class=\"form-horizontal\">\r\n              <div class=\"row\">\r\n                <label class=\"col-sm-2 col-form-label\">Custom Checkboxes &amp; radios</label>\r\n                <div class=\"col-sm-4 col-sm-offset-1 checkbox-radios\">\r\n                  <div class=\"form-check\">\r\n                    <label class=\"form-check-label\">\r\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked> Checked\r\n                      <span class=\"form-check-sign\">\r\n                        <span class=\"check\"></span>\r\n                      </span>\r\n                    </label>\r\n                  </div>\r\n                  <div class=\"form-check\">\r\n                    <label class=\"form-check-label\">\r\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\"> Unchecked\r\n                      <span class=\"form-check-sign\">\r\n                        <span class=\"check\"></span>\r\n                      </span>\r\n                    </label>\r\n                  </div>\r\n                  <div class=\"form-check disabled\">\r\n                    <label class=\"form-check-label\">\r\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" disabled checked> Disabled Checked\r\n                      <span class=\"form-check-sign\">\r\n                        <span class=\"check\"></span>\r\n                      </span>\r\n                    </label>\r\n                  </div>\r\n                  <div class=\"form-check disabled\">\r\n                    <label class=\"form-check-label\">\r\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" disabled> Disabled Unchecked\r\n                      <span class=\"form-check-sign\">\r\n                        <span class=\"check\"></span>\r\n                      </span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-5 checkbox-radios\">\r\n                  <div class=\"form-check\">\r\n                    <label class=\"form-check-label\">\r\n                      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" value=\"option1\" checked> Radio is on\r\n                      <span class=\"circle\">\r\n                        <span class=\"check\"></span>\r\n                      </span>\r\n                    </label>\r\n                  </div>\r\n                  <div class=\"form-check\">\r\n                    <label class=\"form-check-label\">\r\n                      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" value=\"option2\"> Radio is off\r\n                      <span class=\"circle\">\r\n                        <span class=\"check\"></span>\r\n                      </span>\r\n                    </label>\r\n                  </div>\r\n                  <div class=\"form-check disabled\">\r\n                    <label class=\"form-check-label\">\r\n                      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios2\" value=\"option1\" checked disabled> Disabled Radio is on\r\n                      <span class=\"circle\">\r\n                        <span class=\"check\"></span>\r\n                      </span>\r\n                    </label>\r\n                  </div>\r\n                  <div class=\"form-check disabled\">\r\n                    <label class=\"form-check-label\">\r\n                      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios2\" value=\"option2\" disabled> Disabled Radio is off\r\n                      <span class=\"circle\">\r\n                        <span class=\"check\"></span>\r\n                      </span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <label class=\"col-sm-2 col-form-label\">Input with success</label>\r\n                <div class=\"col-sm-10\">\r\n                  <mat-form-field class=\"example-full-width has-success\">\r\n                    <input matInput type=\"text\" placeholder=\"Success input\">\r\n                    <span class=\"form-control-feedback\">\r\n                      <i class=\"material-icons\">done</i>\r\n                    </span>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <label class=\"col-sm-2 col-form-label\">Input with error</label>\r\n                <div class=\"col-sm-10\">\r\n                  <mat-form-field class=\"example-full-width has-danger\">\r\n                    <input matInput type=\"text\" placeholder=\"Error input\">\r\n                    <span class=\"form-control-feedback\">\r\n                      <i class=\"material-icons\">clear</i>\r\n                    </span>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <label class=\"col-sm-2 col-form-label\">Column sizing</label>\r\n                <div class=\"col-sm-10\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                      <mat-form-field class=\"example-full-width\">\r\n                        <input matInput type=\"text\" placeholder=\".col-md-3\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                      <mat-form-field class=\"example-full-width\">\r\n                        <input matInput type=\"text\" placeholder=\".col-md-4\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-5\">\r\n                      <mat-form-field class=\"example-full-width\">\r\n                        <input matInput type=\"text\" placeholder=\".col-md-5\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/forms/regularforms/regularforms.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forms/regularforms/regularforms.component.ts ***!
  \**************************************************************/
/*! exports provided: RegularFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularFormsComponent", function() { return RegularFormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RegularFormsComponent = /** @class */ (function () {
    function RegularFormsComponent() {
    }
    RegularFormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-regularforms-cmp',
            template: __webpack_require__(/*! ./regularforms.component.html */ "./src/app/forms/regularforms/regularforms.component.html")
        })
    ], RegularFormsComponent);
    return RegularFormsComponent;
}());



/***/ }),

/***/ "./src/app/forms/validationforms/field-error-display/field-error-display.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/forms/validationforms/field-error-display/field-error-display.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-msg {\r\n  color: red;\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 34px;\r\n  /* font-size: 10px; */\r\n  font-size: 75%;\r\n  margin-top: 2.604167em;\r\n  top: calc(100% - 1.72916667em);\r\n}\r\n.fix-error-icon {\r\n  top: 27px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/forms/validationforms/field-error-display/field-error-display.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/forms/validationforms/field-error-display/field-error-display.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"displayError\" >\r\n  <!-- <span class=\"glyphicon glyphicon-remove form-control-feedback fix-error-icon\"></span> -->\r\n  <span class=\"sr-only\">(error)</span>\r\n  <div class=\"error-msg\">\r\n    {{ errorMsg }}\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/forms/validationforms/field-error-display/field-error-display.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/forms/validationforms/field-error-display/field-error-display.component.ts ***!
  \********************************************************************************************/
/*! exports provided: FieldErrorDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldErrorDisplayComponent", function() { return FieldErrorDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FieldErrorDisplayComponent = /** @class */ (function () {
    function FieldErrorDisplayComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FieldErrorDisplayComponent.prototype, "errorMsg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FieldErrorDisplayComponent.prototype, "displayError", void 0);
    FieldErrorDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-field-error-display',
            template: __webpack_require__(/*! ./field-error-display.component.html */ "./src/app/forms/validationforms/field-error-display/field-error-display.component.html"),
            styles: [__webpack_require__(/*! ./field-error-display.component.css */ "./src/app/forms/validationforms/field-error-display/field-error-display.component.css")]
        })
    ], FieldErrorDisplayComponent);
    return FieldErrorDisplayComponent;
}());



/***/ }),

/***/ "./src/app/forms/validationforms/password-validator.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/forms/validationforms/password-validator.component.ts ***!
  \***********************************************************************/
/*! exports provided: PasswordValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidation", function() { return PasswordValidation; });
var PasswordValidation = /** @class */ (function () {
    function PasswordValidation() {
    }
    PasswordValidation.MatchPassword = function (AC) {
        var password = AC.get('password').value; // to get value in input tag
        var confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if (password !== confirmPassword) {
            AC.get('confirmPassword').setErrors({ MatchPassword: true });
        }
        else {
            return null;
        }
    };
    return PasswordValidation;
}());



/***/ }),

/***/ "./src/app/forms/validationforms/validationforms.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/forms/validationforms/validationforms.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <form [formGroup]=\"register\">\r\n                      <div class=\"card-header card-header-rose card-header-icon\">\r\n                        <div class=\"card-icon\">\r\n                          <i class=\"material-icons\">mail_outline</i>\r\n                        </div>\r\n                        <h4 class=\"card-title\">Register Form</h4>\r\n                      </div>\r\n                        <div class=\"card-body\">\r\n                          <mat-form-field class=\"example-full-width\" [ngClass]=\"{'has-success':validEmailRegister===true}\">\r\n                             <input\r\n                             type=\"email\"\r\n                             matInput\r\n                             placeholder=\"Email Address *\"\r\n                             [errorStateMatcher]=\"matcher\"\r\n                             formControlName=\"email\"\r\n                             (ngModelChange)=\"emailValidationRegister($event)\">\r\n                             <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n                               Please enter a valid email address\r\n                             </mat-error>\r\n                             <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n                               Email is <strong>required</strong>\r\n                             </mat-error>\r\n                           </mat-form-field>\r\n                            <mat-form-field class=\"example-full-width has-label\" [ngClass]=\"{'has-success':validPasswordRegister===true}\">\r\n                              <input type=\"password\"\r\n                              matInput\r\n                              id=\"password\"\r\n                              placeholder=\"Password *\"\r\n                              (ngModelChange)=\"passwordValidationRegister($event)\"\r\n                              formControlName=\"password\">\r\n                              <app-field-error-display [displayError]=\"isFieldValid(register, 'password')\" errorMsg=\"Enter a valid password.\">\r\n                              </app-field-error-display>\r\n                            </mat-form-field>\r\n\r\n                            <mat-form-field class=\"example-full-width has-label\" [ngClass]=\"{'has-success':validConfirmPasswordRegister===true}\" [ngClass]=\"displayFieldCss(register, 'password')\">\r\n                              <input type=\"password\"\r\n                              matInput\r\n                              id=\"confirmPassword\"\r\n                              placeholder=\"Confirm Password *\"\r\n                              (ngModelChange)=\"confirmPasswordValidationRegister($event)\"\r\n                              formControlName=\"confirmPassword\">\r\n                              <app-field-error-display\r\n                               [displayError]=\"isFieldValid(register, 'confirmPassword')\" errorMsg=\"These passwords don't match. Try again!\">\r\n                              </app-field-error-display>\r\n                            </mat-form-field>\r\n                            <div class=\"category form-category\">* Required fields</div>\r\n\r\n                          </div>\r\n                            <div class=\"card-footer text-right\">\r\n                              <div class=\"form-check mr-auto\">\r\n                                <label class=\"form-check-label\">\r\n                                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\"> Subscribe to newsletter\r\n                                  <span class=\"form-check-sign\">\r\n                                    <span class=\"check\"></span>\r\n                                  </span>\r\n                                </label>\r\n                              </div>\r\n                              <button mat-raised-button type=\"submit\" class=\"btn btn-rose\" (click)=\"onRegister()\">Register</button>\r\n                            </div>\r\n                    </form>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <form [formGroup]=\"login\">\r\n                      <div class=\"card-header card-header-rose card-header-icon\">\r\n                        <div class=\"card-icon\">\r\n                          <i class=\"material-icons\">contacts</i>\r\n                        </div>\r\n                        <h4 class=\"card-title\">Login Form</h4>\r\n                      </div>\r\n                        <div class=\"card-body\">\r\n                          <mat-form-field class=\"example-full-width\" [ngClass]=\"{'has-success':validEmailLogin===true}\">\r\n                             <input\r\n                             type=\"email\"\r\n                             matInput\r\n                             placeholder=\"Email Address *\"\r\n                             [errorStateMatcher]=\"matcher\"\r\n                             (ngModelChange)=\"emailValidationLogin($event)\"\r\n                             formControlName=\"email\">\r\n                             <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n                               Please enter a valid email address\r\n                             </mat-error>\r\n                             <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n                               Email is <strong>required</strong>\r\n                             </mat-error>\r\n                           </mat-form-field>\r\n                            <mat-form-field class=\"example-full-width\" [ngClass]=\"{'has-success':validPasswordLogin===true}\" [ngClass]=\"displayFieldCss(login, 'password')\">\r\n                              <input type=\"password\"\r\n                              matInput\r\n                              placeholder=\"Password *\"\r\n                              (ngModelChange)=\"passwordValidationLogin($event)\"\r\n                              formControlName=\"password\">\r\n                              <app-field-error-display [displayError]=\"isFieldValid(login, 'password')\" errorMsg=\"Enter a valid password.\">\r\n                              </app-field-error-display>\r\n                            </mat-form-field>\r\n                            <div class=\"category form-category\">* Required fields</div>\r\n                          </div>\r\n                            <div class=\"card-footer text-right\">\r\n                                <div class=\"form-group\">\r\n                                    <button mat-raised-button type=\"submit\" class=\"btn btn-rose btn-fill btn-wd\" (click)=\"onLogin()\">Login</button>\r\n                                </div>\r\n                            </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <form [formGroup]=\"type\" class=\"form-horizontal\">\r\n                      <div class=\"card-header card-header-rose card-header-text\">\r\n                        <div class=\"card-text\">\r\n                          <h4 class=\"card-title\">Type Validation</h4>\r\n                        </div>\r\n                      </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row\">\r\n                              <label class=\"col-sm-2 col-form-label\">Required Text</label>\r\n                                <div class=\"col-sm-7\">\r\n                                  <mat-form-field class=\"example-full-width has-label\" [ngClass]=\"{'has-success':validTextType===true}\" [ngClass]=\"displayFieldCss(type, 'text')\">\r\n                                    <input type=\"text\"\r\n                                    matInput\r\n                                    id=\"text\"\r\n                                    (ngModelChange)=\"textValidationType($event)\"\r\n                                    formControlName=\"text\">\r\n                                    <app-field-error-display [displayError]=\"isFieldValid(type, 'text')\" errorMsg=\"Required text\">\r\n                                    </app-field-error-display>\r\n                                  </mat-form-field>\r\n                                </div>\r\n                                <label class=\"col-sm-3 label-on-right\">\r\n                                    <code>required</code>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"row\">\r\n\r\n                                <label class=\"col-sm-2 col-form-label\">Email</label>\r\n\r\n                                <div class=\"col-sm-7\">\r\n                                  <mat-form-field class=\"example-full-width\" [ngClass]=\"{'has-success':validEmailType===true}\">\r\n                                     <input\r\n                                     type=\"email\"\r\n                                     matInput\r\n                                     [errorStateMatcher]=\"matcher\"\r\n                                     (ngModelChange)=\"emailValidationType($event)\"\r\n                                     formControlName=\"email\">\r\n                                     <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n                                       Please enter a valid email address\r\n                                     </mat-error>\r\n                                     <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n                                       Email is <strong>required</strong>\r\n                                     </mat-error>\r\n                                   </mat-form-field>\r\n                                </div>\r\n                                <label class=\"col-sm-3 label-on-right\">\r\n                                    <code>email=\"true\"</code>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <label class=\"col-sm-2 col-form-label\">Number</label>\r\n                                <div class=\"col-sm-7\">\r\n                                  <mat-form-field class=\"example-full-width has-label\" [ngClass]=\"{'has-success':validNumberType===true}\" [ngClass]=\"displayFieldCss(type, 'number')\">\r\n                                    <input type=\"number\" name=\"number\" number=\"true\"\r\n                                    matInput\r\n                                    (ngModelChange)=\"numberValidationType($event)\"\r\n                                    formControlName=\"number\">\r\n                                    <app-field-error-display [displayError]=\"isFieldValid(type, 'number')\" errorMsg=\"Add a number!\">\r\n                                    </app-field-error-display>\r\n                                  </mat-form-field>\r\n                                </div>\r\n                                <label class=\"col-sm-3 label-on-right\">\r\n                                    <code>number=\"true\"</code>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <label class=\"col-sm-2 col-form-label\">Url</label>\r\n                                <div class=\"col-sm-7\">\r\n                                  <mat-form-field class=\"example-full-width has-label\" [ngClass]=\"{'has-success':validUrlType===true}\" [ngClass]=\"displayFieldCss(type, 'url')\">\r\n                                    <input type=\"text\" id=\"url\" pattern=\"https?://.+\" name=\"url\" formControlName=\"url\"\r\n                                    matInput\r\n                                    (ngModelChange)=\"urlValidationType($event)\">\r\n                                    <app-field-error-display [displayError]=\"isFieldValid(type, 'url')\" errorMsg=\"Must be a valid URL!\">\r\n                                    </app-field-error-display>\r\n                                  </mat-form-field>\r\n                                </div>\r\n\r\n                                <label class=\"col-sm-3 label-on-right\">\r\n                                    <code>url=\"true\"</code>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"row\">\r\n\r\n                                <label class=\"col-sm-2 col-form-label\">Equal to</label>\r\n                                <div class=\"col-sm-3\">\r\n                                  <mat-form-field class=\"example-full-width\" [ngClass]=\"{'has-success':validSourceType===true}\" [ngClass]=\"displayFieldCss(type, 'password')\">\r\n                                    <input type=\"text\"\r\n                                    matInput\r\n                                    placeholder=\"#idSource\"\r\n                                      name=\"idSource\"\r\n                                      (ngModelChange)=\"sourceValidationType($event)\"\r\n                                    formControlName=\"password\">\r\n                                    <app-field-error-display [displayError]=\"isFieldValid(type, 'password')\" errorMsg=\"IdSource is required\">\r\n                                    </app-field-error-display>\r\n                                  </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <mat-form-field class=\"example-full-width\" [ngClass]=\"{'has-success':validDestinationType===true}\" [ngClass]=\"displayFieldCss(type, 'confirmPassword')\">\r\n                                    <input type=\"text\"\r\n                                    matInput\r\n                                    name=\"idDestination\"\r\n                                    placeholder=\"#idDestination\"\r\n                                    (ngModelChange)=\"confirmDestinationValidationType($event)\"\r\n                                    formControlName=\"confirmPassword\">\r\n                                    <app-field-error-display [displayError]=\"isFieldValid(type, 'confirmPassword')\" errorMsg=\" IdSource mismatch!\">\r\n                                    </app-field-error-display>\r\n                                  </mat-form-field>\r\n                                </div>\r\n                                <label class=\"col-sm-4 label-on-right\">\r\n                                    <code>equalTo=\"#idSource\"</code>\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-footer text-center\">\r\n                            <button mat-raised-button type=\"submit\" class=\"btn btn-rose btn-fill\" (click)=\"onType()\">Validate Inputs</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <form id=\"RangeValidation\" class=\"form-horizontal\" action=\"\" method=\"\">\r\n\r\n                        <div class=\"card-header card-header-text\" data-background-color=\"rose\">\r\n                            <h4 class=\"card-title\">Range Validation</h4>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <div class=\"row\">\r\n                                <label class=\"col-sm-2 col-form-label\">Min Length</label>\r\n                                <div class=\"col-sm-7\">\r\n                                    <div class=\"form-group has-label\">\r\n                                        <label class=\"bmd-label-floating\"></label>\r\n                                        <input class=\"form-control\" type=\"text\" name=\"min_length\" minLength=\"5\" />\r\n                                    </div>\r\n                                </div>\r\n                                <label class=\"col-sm-3 label-on-right\">\r\n                                    <code>minLength=\"5\"</code>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <label class=\"col-sm-2 col-form-label\">Max Length</label>\r\n                                <div class=\"col-sm-7\">\r\n                                    <div class=\"form-group has-label\">\r\n                                        <label class=\"bmd-label-floating\"></label>\r\n                                        <input class=\"form-control\" type=\"text\" name=\"max_length\" maxLength=\"5\" />\r\n                                    </div>\r\n                                </div>\r\n                                <label class=\"col-sm-3 label-on-right\">\r\n                                    <code>maxLength=\"5\"</code>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <label class=\"col-sm-2 col-form-label\">Range</label>\r\n                                <div class=\"col-sm-7\">\r\n                                    <div class=\"form-group has-label\">\r\n                                        <label class=\"bmd-label-floating\"></label>\r\n                                        <input class=\"form-control\" type=\"text\" name=\"range\" range=\"[6,10]\" />\r\n                                    </div>\r\n                                </div>\r\n                                <label class=\"col-sm-3 label-on-right\">\r\n                                    <code>range=\"[6,10]\"</code>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <label class=\"col-sm-2 col-form-label\">Min Value</label>\r\n                                <div class=\"col-sm-7\">\r\n                                    <div class=\"form-group has-label\">\r\n                                        <label class=\"bmd-label-floating\"></label>\r\n                                        <input class=\"form-control\" type=\"text\" name=\"min\" min=\"6\" />\r\n                                    </div>\r\n                                </div>\r\n                                <label class=\"col-sm-3 label-on-right\">\r\n                                    <code>min=\"6\"</code>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <label class=\"col-sm-2 col-form-label\">Max Value</label>\r\n                                <div class=\"col-sm-7\">\r\n                                    <div class=\"form-group has-label\">\r\n                                        <label class=\"bmd-label-floating\"></label>\r\n                                        <input class=\"form-control\" type=\"text\" name=\"max\" max=\"6\" />\r\n                                    </div>\r\n                                </div>\r\n                                <label class=\"col-sm-3 label-on-right\">\r\n                                    <code>max=\"6\"</code>\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-footer text-center\">\r\n                            <button mat-raised-button type=\"submit\" class=\"btn btn-rose btn-fill\">Validate Inputs</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div> -->\r\n        <!-- </div> -->\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/forms/validationforms/validationforms.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/forms/validationforms/validationforms.component.ts ***!
  \********************************************************************/
/*! exports provided: MyErrorStateMatcher, ValidationFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationFormsComponent", function() { return ValidationFormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _password_validator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-validator.component */ "./src/app/forms/validationforms/password-validator.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var ValidationFormsComponent = /** @class */ (function () {
    function ValidationFormsComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.validEmailRegister = false;
        this.validConfirmPasswordRegister = false;
        this.validPasswordRegister = false;
        this.validEmailLogin = false;
        this.validPasswordLogin = false;
        this.validTextType = false;
        this.validEmailType = false;
        this.validNumberType = false;
        this.validUrlType = false;
        this.pattern = "https?://.+";
        this.validSourceType = false;
        this.validDestinationType = false;
        this.matcher = new MyErrorStateMatcher();
    }
    ValidationFormsComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).touched;
    };
    ValidationFormsComponent.prototype.displayFieldCss = function (form, field) {
        return {
            'has-error': this.isFieldValid(form, field),
            'has-feedback': this.isFieldValid(form, field)
        };
    };
    ValidationFormsComponent.prototype.onRegister = function () {
        if (this.register.valid) {
        }
        else {
            this.validateAllFormFields(this.register);
        }
    };
    ValidationFormsComponent.prototype.onLogin = function () {
        if (this.login.valid) {
        }
        else {
            this.validateAllFormFields(this.login);
        }
    };
    ValidationFormsComponent.prototype.onType = function () {
        if (this.type.valid) {
        }
        else {
            this.validateAllFormFields(this.type);
        }
    };
    ValidationFormsComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    ValidationFormsComponent.prototype.ngOnInit = function () {
        this.register = this.formBuilder.group({
            // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
            optionsCheckboxes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        }, {
            validator: _password_validator_component__WEBPACK_IMPORTED_MODULE_2__["PasswordValidation"].MatchPassword // your validation method
        });
        this.login = this.formBuilder.group({
            // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.type = this.formBuilder.group({
            // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
            text: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            number: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            url: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        }, {
            validator: _password_validator_component__WEBPACK_IMPORTED_MODULE_2__["PasswordValidation"].MatchPassword // your validation method
        });
    };
    ValidationFormsComponent.prototype.emailValidationRegister = function (e) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(e).toLowerCase())) {
            this.validEmailRegister = true;
        }
        else {
            this.validEmailRegister = false;
        }
    };
    ValidationFormsComponent.prototype.passwordValidationRegister = function (e) {
        if (e.length > 5) {
            this.validPasswordRegister = true;
        }
        else {
            this.validPasswordRegister = false;
        }
    };
    ValidationFormsComponent.prototype.confirmPasswordValidationRegister = function (e) {
        if (this.register.controls['password'].value === e) {
            this.validConfirmPasswordRegister = true;
        }
        else {
            this.validConfirmPasswordRegister = false;
        }
    };
    ValidationFormsComponent.prototype.emailValidationLogin = function (e) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(e).toLowerCase())) {
            this.validEmailLogin = true;
        }
        else {
            this.validEmailLogin = false;
        }
    };
    ValidationFormsComponent.prototype.passwordValidationLogin = function (e) {
        if (e.length > 5) {
            this.validPasswordLogin = true;
        }
        else {
            this.validPasswordLogin = false;
        }
    };
    ValidationFormsComponent.prototype.textValidationType = function (e) {
        if (e) {
            this.validTextType = true;
        }
        else {
            this.validTextType = false;
        }
    };
    ValidationFormsComponent.prototype.emailValidationType = function (e) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(e).toLowerCase())) {
            this.validEmailType = true;
        }
        else {
            this.validEmailType = false;
        }
    };
    ValidationFormsComponent.prototype.numberValidationType = function (e) {
        if (e) {
            this.validNumberType = true;
        }
        else {
            this.validNumberType = false;
        }
    };
    ValidationFormsComponent.prototype.urlValidationType = function (e) {
        try {
            new URL(e);
            this.validUrlType = true;
        }
        catch (_) {
            this.validUrlType = false;
        }
    };
    ValidationFormsComponent.prototype.sourceValidationType = function (e) {
        if (e) {
            this.validSourceType = true;
        }
        else {
            this.validSourceType = false;
        }
    };
    ValidationFormsComponent.prototype.confirmDestinationValidationType = function (e) {
        if (this.type.controls['password'].value === e) {
            this.validDestinationType = true;
        }
        else {
            this.validDestinationType = false;
        }
    };
    ValidationFormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-validationforms-cmp',
            template: __webpack_require__(/*! ./validationforms.component.html */ "./src/app/forms/validationforms/validationforms.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ValidationFormsComponent);
    return ValidationFormsComponent;
}());



/***/ }),

/***/ "./src/app/forms/wizard/wizard.component.css":
/*!***************************************************!*\
  !*** ./src/app/forms/wizard/wizard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms/wizard/wizard.component.html":
/*!****************************************************!*\
  !*** ./src/app/forms/wizard/wizard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"col-md-8 mr-auto ml-auto\">\r\n      <!--      Wizard container        -->\r\n      <div class=\"wizard-container\">\r\n        <div class=\"card card-wizard\" data-color=\"rose\" id=\"wizardProfile\">\r\n          <form [formGroup]=\"type\" action=\"\" method=\"\">\r\n            <!--        You can switch \" data-color=\"primary\" \"  with one of the next bright colors: \"green\", \"orange\", \"red\", \"blue\"       -->\r\n            <div class=\"card-header text-center\">\r\n              <h3 class=\"card-title\">\r\n                Build Your Profile\r\n              </h3>\r\n              <h5 class=\"card-description\">This information will let us know more about you.</h5>\r\n            </div>\r\n            <div class=\"wizard-navigation\">\r\n              <ul class=\"nav nav-pills\">\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link active\" href=\"#about\" data-toggle=\"tab\" role=\"tab\">\r\n                    About\r\n                  </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" href=\"#account\" data-toggle=\"tab\" role=\"tab\">\r\n                    Account\r\n                  </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" href=\"#address\" data-toggle=\"tab\" role=\"tab\">\r\n                    Address\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"tab-content\">\r\n                <div class=\"tab-pane active\" id=\"about\">\r\n                  <h5 class=\"info-text\"> Let's start with the basic information (with validation)</h5>\r\n                  <div class=\"row justify-content-center\">\r\n                    <div class=\"col-sm-4\">\r\n                      <div class=\"picture-container\">\r\n                        <div class=\"picture\">\r\n                          <img src=\"./assets/img/default-avatar.png\" class=\"picture-src\" id=\"wizardPicturePreview\" title=\"\" />\r\n                          <input type=\"file\" id=\"wizard-picture\">\r\n                        </div>\r\n                        <h6 class=\"description\">Choose Picture</h6>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                      <div class=\"input-group form-control-lg\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\">\r\n                            <i class=\"material-icons\">face</i>\r\n                          </span>\r\n                        </div>\r\n                        <mat-form-field class=\"example-full-width has-label\" [ngClass]=\"displayFieldCss(type, 'firstName')\">\r\n                          <input type=\"text\"\r\n                          name=\"firstname\"\r\n                          matInput\r\n                          id=\"text\"\r\n                          placeholder=\"First Name\"\r\n                          formControlName=\"firstName\">\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"input-group form-control-lg\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\">\r\n                            <i class=\"material-icons\">record_voice_over</i>\r\n                          </span>\r\n                        </div>\r\n                        <mat-form-field class=\"example-full-width has-label\" [ngClass]=\"displayFieldCss(type, 'lastName')\">\r\n                          <input type=\"text\"\r\n                          name=\"lastname\"\r\n                          matInput\r\n                          id=\"text\"\r\n                          placeholder=\"last Name\"\r\n                          formControlName=\"lastName\">\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-10 mt-3\">\r\n                      <div class=\"input-group form-control-lg\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\">\r\n                            <i class=\"material-icons\">email</i>\r\n                          </span>\r\n                        </div>\r\n                        <mat-form-field class=\"example-full-width\">\r\n                           <input matInput placeholder=\"Email (required)\" [formControl]=\"emailFormControl\"\r\n                             type=\"email\" id=\"exampleemalil\" name=\"email\">\r\n                         </mat-form-field>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"tab-pane\" id=\"account\">\r\n                  <h5 class=\"info-text\"> What are you doing? (checkboxes) </h5>\r\n                  <div class=\"row justify-content-center\">\r\n                    <div class=\"col-lg-10\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-4\">\r\n                          <div class=\"choice\" data-toggle=\"wizard-checkbox\">\r\n                            <input type=\"checkbox\" name=\"jobb\" value=\"Design\">\r\n                            <div class=\"icon\">\r\n                              <i class=\"fa fa-pencil\"></i>\r\n                            </div>\r\n                            <h6>Design</h6>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                          <div class=\"choice\" data-toggle=\"wizard-checkbox\">\r\n                            <input type=\"checkbox\" name=\"jobb\" value=\"Code\">\r\n                            <div class=\"icon\">\r\n                              <i class=\"fa fa-terminal\"></i>\r\n                            </div>\r\n                            <h6>Code</h6>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                          <div class=\"choice\" data-toggle=\"wizard-checkbox\">\r\n                            <input type=\"checkbox\" name=\"jobb\" value=\"Develop\">\r\n                            <div class=\"icon\">\r\n                              <i class=\"fa fa-laptop\"></i>\r\n                            </div>\r\n                            <h6>Develop</h6>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"tab-pane\" id=\"address\">\r\n                  <div class=\"row justify-content-center\">\r\n                    <div class=\"col-sm-12\">\r\n                      <h5 class=\"info-text\"> Are you living in a nice area? </h5>\r\n                    </div>\r\n                    <div class=\"col-sm-7\">\r\n                      <mat-form-field class=\"example-full-width\">\r\n                        <input matInput type=\"text\" placeholder=\"Street Name\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                      <mat-form-field class=\"example-full-width\">\r\n                        <input matInput type=\"text\" placeholder=\"Street No.\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-sm-5\">\r\n                      <mat-form-field class=\"example-full-width\">\r\n                        <input matInput type=\"text\" placeholder=\"City\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-sm-5\">\r\n                        <mat-form-field>\r\n                            <mat-select placeholder=\"Single City\" name=\"city\">\r\n                              <mat-option *ngFor=\"let city of cities\" [value]=\"city.value\">\r\n                                {{ city.viewValue }}\r\n                              </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <div class=\"mr-auto\">\r\n                <input type=\"button\" class=\"btn btn-previous btn-fill btn-default btn-wd disabled\" name=\"previous\" value=\"Previous\">\r\n              </div>\r\n              <div class=\"ml-auto\">\r\n                <input type=\"button\" class=\"btn btn-next btn-fill btn-rose btn-wd\" name=\"next\" value=\"Next\">\r\n                <input type=\"button\" class=\"btn btn-finish btn-fill btn-rose btn-wd\" name=\"finish\" value=\"Finish\" style=\"display: none;\">\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <!-- wizard container -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/forms/wizard/wizard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/forms/wizard/wizard.component.ts ***!
  \**************************************************/
/*! exports provided: MyErrorStateMatcher, WizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardComponent", function() { return WizardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
// IMPORTANT: this is a plugin which requires jQuery for initialisation and data manipulation
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var WizardComponent = /** @class */ (function () {
    function WizardComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.cities = [
            { value: 'paris-0', viewValue: 'Paris' },
            { value: 'miami-1', viewValue: 'Miami' },
            { value: 'bucharest-2', viewValue: 'Bucharest' },
            { value: 'new-york-3', viewValue: 'New York' },
            { value: 'london-4', viewValue: 'London' },
            { value: 'barcelona-5', viewValue: 'Barcelona' },
            { value: 'moscow-6', viewValue: 'Moscow' },
        ];
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    WizardComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).touched;
    };
    WizardComponent.prototype.displayFieldCss = function (form, field) {
        return {
            'has-error': this.isFieldValid(form, field),
            'has-feedback': this.isFieldValid(form, field)
        };
    };
    WizardComponent.prototype.ngOnInit = function () {
        this.type = this.formBuilder.group({
            // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
        });
        // Code for the Validator
        var $validator = $('.card-wizard form').validate({
            rules: {
                firstname: {
                    required: true,
                    minlength: 3
                },
                lastname: {
                    required: true,
                    minlength: 3
                },
                email: {
                    required: true,
                    minlength: 3,
                }
            },
            highlight: function (element) {
                $(element).closest('.form-group').removeClass('has-success').addClass('has-danger');
            },
            success: function (element) {
                $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
            },
            errorPlacement: function (error, element) {
                $(element).append(error);
            }
        });
        // Wizard Initialization
        $('.card-wizard').bootstrapWizard({
            'tabClass': 'nav nav-pills',
            'nextSelector': '.btn-next',
            'previousSelector': '.btn-previous',
            onNext: function (tab, navigation, index) {
                var $valid = $('.card-wizard form').valid();
                if (!$valid) {
                    $validator.focusInvalid();
                    return false;
                }
            },
            onInit: function (tab, navigation, index) {
                // check number of tabs and fill the entire row
                var $total = navigation.find('li').length;
                var $wizard = navigation.closest('.card-wizard');
                var $first_li = navigation.find('li:first-child a').html();
                var $moving_div = $('<div class="moving-tab">' + $first_li + '</div>');
                $('.card-wizard .wizard-navigation').append($moving_div);
                $total = $wizard.find('.nav li').length;
                var $li_width = 100 / $total;
                var total_steps = $wizard.find('.nav li').length;
                var move_distance = $wizard.width() / total_steps;
                var index_temp = index;
                var vertical_level = 0;
                var mobile_device = $(document).width() < 600 && $total > 3;
                if (mobile_device) {
                    move_distance = $wizard.width() / 2;
                    index_temp = index % 2;
                    $li_width = 50;
                }
                $wizard.find('.nav li').css('width', $li_width + '%');
                var step_width = move_distance;
                move_distance = move_distance * index_temp;
                var $current = index + 1;
                if ($current == 1 || (mobile_device == true && (index % 2 == 0))) {
                    move_distance -= 8;
                }
                else if ($current == total_steps || (mobile_device == true && (index % 2 == 1))) {
                    move_distance += 8;
                }
                if (mobile_device) {
                    var x = index / 2;
                    vertical_level = parseInt(x);
                    vertical_level = vertical_level * 38;
                }
                $wizard.find('.moving-tab').css('width', step_width);
                $('.moving-tab').css({
                    'transform': 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
                    'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
                });
                $('.moving-tab').css('transition', 'transform 0s');
            },
            onTabClick: function (tab, navigation, index) {
                var $valid = $('.card-wizard form').valid();
                if (!$valid) {
                    return false;
                }
                else {
                    return true;
                }
            },
            onTabShow: function (tab, navigation, index) {
                var $total = navigation.find('li').length;
                var $current = index + 1;
                var $wizard = navigation.closest('.card-wizard');
                // If it's the last tab then hide the last button and show the finish instead
                if ($current >= $total) {
                    $($wizard).find('.btn-next').hide();
                    $($wizard).find('.btn-finish').show();
                }
                else {
                    $($wizard).find('.btn-next').show();
                    $($wizard).find('.btn-finish').hide();
                }
                var button_text = navigation.find('li:nth-child(' + $current + ') a').html();
                setTimeout(function () {
                    $('.moving-tab').text(button_text);
                }, 150);
                var checkbox = $('.footer-checkbox');
                if (index !== 0) {
                    $(checkbox).css({
                        'opacity': '0',
                        'visibility': 'hidden',
                        'position': 'absolute'
                    });
                }
                else {
                    $(checkbox).css({
                        'opacity': '1',
                        'visibility': 'visible'
                    });
                }
                $total = $wizard.find('.nav li').length;
                var $li_width = 100 / $total;
                var total_steps = $wizard.find('.nav li').length;
                var move_distance = $wizard.width() / total_steps;
                var index_temp = index;
                var vertical_level = 0;
                var mobile_device = $(document).width() < 600 && $total > 3;
                if (mobile_device) {
                    move_distance = $wizard.width() / 2;
                    index_temp = index % 2;
                    $li_width = 50;
                }
                $wizard.find('.nav li').css('width', $li_width + '%');
                var step_width = move_distance;
                move_distance = move_distance * index_temp;
                $current = index + 1;
                if ($current == 1 || (mobile_device == true && (index % 2 == 0))) {
                    move_distance -= 8;
                }
                else if ($current == total_steps || (mobile_device == true && (index % 2 == 1))) {
                    move_distance += 8;
                }
                if (mobile_device) {
                    var x = index / 2;
                    vertical_level = parseInt(x);
                    vertical_level = vertical_level * 38;
                }
                $wizard.find('.moving-tab').css('width', step_width);
                $('.moving-tab').css({
                    'transform': 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
                    'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
                });
            }
        });
        // Prepare the preview for profile picture
        $('#wizard-picture').change(function () {
            var input = $(this);
            if (input[0].files && input[0].files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
                };
                reader.readAsDataURL(input[0].files[0]);
            }
        });
        $('[data-toggle="wizard-radio"]').click(function () {
            var wizard = $(this).closest('.card-wizard');
            wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
            $(this).addClass('active');
            $(wizard).find('[type="radio"]').removeAttr('checked');
            $(this).find('[type="radio"]').attr('checked', 'true');
        });
        $('[data-toggle="wizard-checkbox"]').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).find('[type="checkbox"]').removeAttr('checked');
            }
            else {
                $(this).addClass('active');
                $(this).find('[type="checkbox"]').attr('checked', 'true');
            }
        });
        $('.set-full-height').css('height', 'auto');
    };
    WizardComponent.prototype.ngOnChanges = function (changes) {
        var input = $(this);
        if (input[0].files && input[0].files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
            };
            reader.readAsDataURL(input[0].files[0]);
        }
    };
    WizardComponent.prototype.ngAfterViewInit = function () {
        $(window).resize(function () {
            $('.card-wizard').each(function () {
                var $wizard = $(this);
                var index = $wizard.bootstrapWizard('currentIndex');
                var $total = $wizard.find('.nav li').length;
                var $li_width = 100 / $total;
                var total_steps = $wizard.find('.nav li').length;
                var move_distance = $wizard.width() / total_steps;
                var index_temp = index;
                var vertical_level = 0;
                var mobile_device = $(document).width() < 600 && $total > 3;
                if (mobile_device) {
                    move_distance = $wizard.width() / 2;
                    index_temp = index % 2;
                    $li_width = 50;
                }
                $wizard.find('.nav li').css('width', $li_width + '%');
                var step_width = move_distance;
                move_distance = move_distance * index_temp;
                var $current = index + 1;
                if ($current == 1 || (mobile_device == true && (index % 2 == 0))) {
                    move_distance -= 8;
                }
                else if ($current == total_steps || (mobile_device == true && (index % 2 == 1))) {
                    move_distance += 8;
                }
                if (mobile_device) {
                    var x = index / 2;
                    vertical_level = parseInt(x);
                    vertical_level = vertical_level * 38;
                }
                $wizard.find('.moving-tab').css('width', step_width);
                $('.moving-tab').css({
                    'transform': 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
                    'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
                });
                $('.moving-tab').css({
                    'transition': 'transform 0s'
                });
            });
        });
    };
    WizardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wizard-cmp',
            template: __webpack_require__(/*! ./wizard.component.html */ "./src/app/forms/wizard/wizard.component.html"),
            styles: [__webpack_require__(/*! ./wizard.component.css */ "./src/app/forms/wizard/wizard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], WizardComponent);
    return WizardComponent;
}());



/***/ })

}]);
//# sourceMappingURL=forms-forms-module.js.map