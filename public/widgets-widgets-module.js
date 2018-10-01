(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["widgets-widgets-module"],{

/***/ "./src/app/widgets/widgets.component.html":
/*!************************************************!*\
  !*** ./src/app/widgets/widgets.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-12\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-header card-header-text card-header-warning\">\r\n                    <div class=\"card-text\">\r\n                      <h4 class=\"card-title\">Employees Stats</h4>\r\n                      <p class=\"card-category\">New employees on 15th September, 2016</p>\r\n                    </div>\r\n                  </div>\r\n                    <div class=\"card-body table-responsive\">\r\n                        <table class=\"table table-hover\">\r\n                                <thead class=\"text-warning\">\r\n                                    <tr>\r\n                                      <th *ngFor=\"let cell of tableData.headerRow\">{{ cell }}</th>\r\n                                    </tr>\r\n                                </thead>\r\n                              <tbody>\r\n                                  <tr *ngFor=\"let row of tableData.dataRows\">\r\n                                      <td *ngFor=\"let cell of row\">{{cell}}</td>\r\n                                  </tr>\r\n                              </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-12\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-header card-header-tabs card-header-rose\">\r\n                    <div class=\"nav-tabs-navigation\">\r\n                      <div class=\"nav-tabs-wrapper\">\r\n                        <span class=\"nav-tabs-title\">Tasks:</span>\r\n                        <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link active\" href=\"#profile\" data-toggle=\"tab\">\r\n                              <i class=\"material-icons\">bug_report</i> Bugs\r\n                              <div class=\"ripple-container\"></div>\r\n                            </a>\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" href=\"#messages\" data-toggle=\"tab\">\r\n                              <i class=\"material-icons\">code</i> Website\r\n                              <div class=\"ripple-container\"></div>\r\n                            </a>\r\n                          </li>\r\n                          <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" href=\"#settings\" data-toggle=\"tab\">\r\n                              <i class=\"material-icons\">cloud</i> Server\r\n                              <div class=\"ripple-container\"></div>\r\n                            </a>\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"tab-content\">\r\n                            <div class=\"tab-pane active\" id=\"profile\">\r\n                                <table class=\"table\">\r\n                                      <tbody>\r\n                                          <tr *ngFor=\"let row of tasks1\">\r\n                                              <td>\r\n                                                  <div [ngSwitch]=\"row.checked\">\r\n                                                      <div *ngSwitchCase=\"true\">\r\n                                                        <div class=\"form-check\">\r\n                                                          <label class=\"form-check-label\">\r\n                                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\r\n                                                            <span class=\"form-check-sign\">\r\n                                                              <span class=\"check\"></span>\r\n                                                            </span>\r\n                                                          </label>\r\n                                                        </div>\r\n                                                      </div>\r\n                                                      <div *ngSwitchDefault>\r\n                                                        <div class=\"form-check\">\r\n                                                          <label class=\"form-check-label\">\r\n                                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\r\n                                                            <span class=\"form-check-sign\">\r\n                                                              <span class=\"check\"></span>\r\n                                                            </span>\r\n                                                          </label>\r\n                                                        </div>\r\n                                                      </div>\r\n\r\n                                                  </div>\r\n                                              </td>\r\n                                              <td>{{row.title}}</td>\r\n                                              <td class=\"td-actions text-right\">\r\n                                                  <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'left'\" class=\"btn btn-primary btn-link btn-sm\">\r\n                                                      <i class=\"material-icons\">edit</i>\r\n                                                  </button>\r\n\r\n                                                  <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'left'\" class=\"btn btn-danger btn-link btn-sm\">\r\n                                                      <i class=\"material-icons\">close</i>\r\n                                                  </button>\r\n                                              </td>\r\n                                           </tr>\r\n                                      </tbody>\r\n                                </table>\r\n                            </div>\r\n                            <div class=\"tab-pane\" id=\"messages\">\r\n                                <table class=\"table\">\r\n                                      <tbody>\r\n                                          <tr *ngFor=\"let row of tasks2\">\r\n                                              <td>\r\n                                                  <div [ngSwitch]=\"row.checked\">\r\n                                                      <div *ngSwitchCase=\"true\">\r\n                                                        <div class=\"form-check\">\r\n                                                          <label class=\"form-check-label\">\r\n                                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\r\n                                                            <span class=\"form-check-sign\">\r\n                                                              <span class=\"check\"></span>\r\n                                                            </span>\r\n                                                          </label>\r\n                                                        </div>\r\n                                                      </div>\r\n                                                      <div *ngSwitchDefault>\r\n                                                        <div class=\"form-check\">\r\n                                                          <label class=\"form-check-label\">\r\n                                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\r\n                                                            <span class=\"form-check-sign\">\r\n                                                              <span class=\"check\"></span>\r\n                                                            </span>\r\n                                                          </label>\r\n                                                        </div>\r\n                                                      </div>\r\n\r\n                                                  </div>\r\n                                              </td>\r\n                                              <td>{{row.title}}</td>\r\n                                              <td class=\"td-actions text-right\">\r\n                                                  <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm\">\r\n                                                      <i class=\"material-icons\">edit</i>\r\n                                                  </button>\r\n                                                  <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm\">\r\n                                                      <i class=\"material-icons\">close</i>\r\n                                                  </button>\r\n                                              </td>\r\n                                           </tr>\r\n                                      </tbody>\r\n                                </table>\r\n                            </div>\r\n                            <div class=\"tab-pane\" id=\"settings\">\r\n                                <table class=\"table\">\r\n                                      <tbody>\r\n                                          <tr *ngFor=\"let row of tasks3\">\r\n                                              <td>\r\n                                                  <div [ngSwitch]=\"row.checked\">\r\n                                                      <div *ngSwitchCase=\"true\">\r\n                                                        <div class=\"form-check\">\r\n                                                          <label class=\"form-check-label\">\r\n                                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\r\n                                                            <span class=\"form-check-sign\">\r\n                                                              <span class=\"check\"></span>\r\n                                                            </span>\r\n                                                          </label>\r\n                                                        </div>\r\n                                                      </div>\r\n                                                      <div *ngSwitchDefault>\r\n                                                        <div class=\"form-check\">\r\n                                                          <label class=\"form-check-label\">\r\n                                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\r\n                                                            <span class=\"form-check-sign\">\r\n                                                              <span class=\"check\"></span>\r\n                                                            </span>\r\n                                                          </label>\r\n                                                        </div>\r\n                                                      </div>\r\n\r\n                                                  </div>\r\n                                              </td>\r\n                                              <td>{{row.title}}</td>\r\n                                              <td class=\"td-actions text-right\">\r\n                                                  <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\"class=\"btn btn-primary btn-link btn-sm\">\r\n                                                      <i class=\"material-icons\">edit</i>\r\n                                                  </button>\r\n                                                  <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm\">\r\n                                                      <i class=\"material-icons\">close</i>\r\n                                                  </button>\r\n                                              </td>\r\n                                           </tr>\r\n                                      </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"col-lg-6 cards\">\r\n                  <div class=\"card card-pricing card-raised\">\r\n                    <div class=\"card-body\">\r\n                      <h6 class=\"card-category\">Small Company</h6>\r\n                      <div class=\"card-icon icon-rose\">\r\n                        <i class=\"material-icons\">home</i>\r\n                      </div>\r\n                      <h3 class=\"card-title\">$29</h3>\r\n                      <p class=\"card-description\">\r\n                        This is good if your company size is between 2 and 10 Persons.\r\n                      </p>\r\n                      <a href=\"#pablo\" class=\"btn btn-rose btn-round\">Choose Plan</a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-6 cards\">\r\n                  <div class=\"card card-pricing card-plain\">\r\n                    <div class=\"card-body\">\r\n                      <h6 class=\"card-category\">Freelancer</h6>\r\n                      <div class=\"card-icon\">\r\n                        <i class=\"material-icons\">weekend</i>\r\n                      </div>\r\n                      <h3 class=\"card-title\">FREE</h3>\r\n                      <p class=\"card-description\">\r\n                        This is good if your company size is between 2 and 10 Persons.\r\n                      </p>\r\n                      <a href=\"#pablo\" class=\"btn btn-white btn-round\">Choose Plan</a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-11\">\r\n                  <div class=\"card card-testimonial\">\r\n                    <div class=\"icon\">\r\n                      <i class=\"material-icons\">format_quote</i>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                      <h5 class=\"card-description\">\r\n                        Your products, all the kits that I have downloaded from your site and worked with are sooo cool! I love the color mixtures, cards... everything. Keep up the great work!\r\n                      </h5>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                      <h4 class=\"card-title\">Alec Thompson</h4>\r\n                      <h6 class=\"card-category\">@alecthompson</h6>\r\n                      <div class=\"card-avatar\">\r\n                        <a href=\"#pablo\">\r\n                          <img class=\"img\" src=\"./assets/img/faces/card-profile1-square.jpg\" />\r\n                        </a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <ul class=\"timeline timeline-simple\">\r\n                <li class=\"timeline-inverted\">\r\n                  <div class=\"timeline-badge danger\">\r\n                    <i class=\"material-icons\">card_travel</i>\r\n                  </div>\r\n                  <div class=\"timeline-panel\">\r\n                    <div class=\"timeline-heading\">\r\n                      <span class=\"badge badge-danger\">Some title</span>\r\n                    </div>\r\n                    <div class=\"timeline-body\">\r\n                      <p>Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the “future” theme !!! It was a fun night all together ... The always rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.</p>\r\n                    </div>\r\n                    <h6>\r\n                      <i class=\"ti-time\"></i> 11 hours ago via Twitter\r\n                    </h6>\r\n                  </div>\r\n                </li>\r\n                <li class=\"timeline-inverted\">\r\n                  <div class=\"timeline-badge success\">\r\n                    <i class=\"material-icons\">extension</i>\r\n                  </div>\r\n                  <div class=\"timeline-panel\">\r\n                    <div class=\"timeline-heading\">\r\n                      <span class=\"badge badge-success\">Another One</span>\r\n                    </div>\r\n                    <div class=\"timeline-body\">\r\n                      <p>Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first album to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything I do from shoes to music to homes is that Kim has to like it....</p>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"timeline-inverted\">\r\n                  <div class=\"timeline-badge info\">\r\n                    <i class=\"material-icons\">fingerprint</i>\r\n                  </div>\r\n                  <div class=\"timeline-panel\">\r\n                    <div class=\"timeline-heading\">\r\n                      <span class=\"badge badge-info\">Another Title</span>\r\n                    </div>\r\n                    <div class=\"timeline-body\">\r\n                      <p>Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown LA 11:10PM</p>\r\n                      <p>What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch is my favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye</p>\r\n                      <hr>\r\n                      <div class=\"dropdown pull-left\">\r\n                        <button mat-raised-button type=\"button\" class=\"btn btn-round btn-info dropdown-toggle\" data-toggle=\"dropdown\">\r\n                          <i class=\"material-icons\">build</i>\r\n                          <span class=\"caret\"></span>\r\n                        </button>\r\n                        <ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\r\n                          <li>\r\n                            <a href=\"#action\">Action</a>\r\n                          </li>\r\n                          <li>\r\n                            <a href=\"#action\">Another action</a>\r\n                          </li>\r\n                          <li>\r\n                            <a href=\"#here\">Something else here</a>\r\n                          </li>\r\n                          <li class=\"divider\"></li>\r\n                          <li>\r\n                            <a href=\"#link\">Separated link</a>\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/widgets/widgets.component.ts":
/*!**********************************************!*\
  !*** ./src/app/widgets/widgets.component.ts ***!
  \**********************************************/
/*! exports provided: WidgetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsComponent", function() { return WidgetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WidgetsComponent = /** @class */ (function () {
    function WidgetsComponent() {
    }
    WidgetsComponent.prototype.ngOnInit = function () {
        this.tableData = {
            headerRow: ['ID', 'Name', 'Salary', 'Country'],
            dataRows: [
                ['1', 'Dakota Rice', '$36,738', 'Niger'],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands'],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South']
            ]
        };
        this.tasks1 = [
            { title: 'Sign contract for \'What are conference organizers afraid of?\'', checked: false },
            { title: 'Lines From Great Russian Literature? Or E-mails From My Boss?', checked: true },
            {
                title: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
                checked: true
            },
            { title: 'Create 4 Invisible User Experiences you Never Knew About', checked: false }
        ];
        this.tasks2 = [
            {
                title: "Flooded: One year later, assessing what was lost and\n                 what was found when a ravaging rain swept through metro Detroit",
                checked: true
            },
            { title: 'Sign contract for \'What are conference organizers afraid of?\'', checked: false },
        ];
        this.tasks3 = [
            { title: 'Lines From Great Russian Literature? Or E-mails From My Boss?', checked: false },
            {
                title: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
                checked: true
            },
            { title: 'Sign contract for \'What are conference organizers afraid of?\'', checked: false }
        ];
    };
    WidgetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widgets-cmp',
            template: __webpack_require__(/*! ./widgets.component.html */ "./src/app/widgets/widgets.component.html")
        })
    ], WidgetsComponent);
    return WidgetsComponent;
}());



/***/ }),

/***/ "./src/app/widgets/widgets.module.ts":
/*!*******************************************!*\
  !*** ./src/app/widgets/widgets.module.ts ***!
  \*******************************************/
/*! exports provided: WidgetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsModule", function() { return WidgetsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _widgets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widgets.component */ "./src/app/widgets/widgets.component.ts");
/* harmony import */ var _widgets_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widgets.routing */ "./src/app/widgets/widgets.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var WidgetsModule = /** @class */ (function () {
    function WidgetsModule() {
    }
    WidgetsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_widgets_routing__WEBPACK_IMPORTED_MODULE_6__["WidgetsRoutes"]),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ],
            declarations: [_widgets_component__WEBPACK_IMPORTED_MODULE_5__["WidgetsComponent"]]
        })
    ], WidgetsModule);
    return WidgetsModule;
}());



/***/ }),

/***/ "./src/app/widgets/widgets.routing.ts":
/*!********************************************!*\
  !*** ./src/app/widgets/widgets.routing.ts ***!
  \********************************************/
/*! exports provided: WidgetsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsRoutes", function() { return WidgetsRoutes; });
/* harmony import */ var _widgets_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgets.component */ "./src/app/widgets/widgets.component.ts");

var WidgetsRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: _widgets_component__WEBPACK_IMPORTED_MODULE_0__["WidgetsComponent"]
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=widgets-widgets-module.js.map