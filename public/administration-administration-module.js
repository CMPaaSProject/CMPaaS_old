(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administration-administration-module"],{

/***/ "./src/app/administration/administration.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/administration/administration.module.ts ***!
  \*********************************************************/
/*! exports provided: AdministrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationModule", function() { return AdministrationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _administration_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./administration.routing */ "./src/app/administration/administration.routing.ts");
/* harmony import */ var _users_adminusers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users/adminusers.component */ "./src/app/administration/users/adminusers.component.ts");
/* harmony import */ var _users_add_adduserform_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users/add/adduserform.component */ "./src/app/administration/users/add/adduserform.component.ts");
/* harmony import */ var _users_add_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users/add/field-error-display/field-error-display.component */ "./src/app/administration/users/add/field-error-display/field-error-display.component.ts");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var _maps_adminmaps_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./maps/adminmaps.component */ "./src/app/administration/maps/adminmaps.component.ts");
/* harmony import */ var _dashboard_admindashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/admindashboard.component */ "./src/app/administration/dashboard/admindashboard.component.ts");
/* harmony import */ var _md_md_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../md/md.module */ "./src/app/md/md.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AdministrationModule = /** @class */ (function () {
    function AdministrationModule() {
    }
    AdministrationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_administration_routing__WEBPACK_IMPORTED_MODULE_5__["AdministrationRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_9__["NouisliderModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_10__["TagInputModule"],
                _md_md_module__WEBPACK_IMPORTED_MODULE_13__["MdModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ],
            declarations: [
                _users_adminusers_component__WEBPACK_IMPORTED_MODULE_6__["AdminUsersComponent"],
                _users_add_adduserform_component__WEBPACK_IMPORTED_MODULE_7__["AddUserFormComponent"],
                _maps_adminmaps_component__WEBPACK_IMPORTED_MODULE_11__["AdminMapsComponent"],
                _dashboard_admindashboard_component__WEBPACK_IMPORTED_MODULE_12__["AdminDashboardComponent"],
                _users_add_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_8__["FieldErrorDisplayComponent"]
            ]
        })
    ], AdministrationModule);
    return AdministrationModule;
}());



/***/ }),

/***/ "./src/app/administration/administration.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/administration/administration.routing.ts ***!
  \**********************************************************/
/*! exports provided: AdministrationRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationRoutes", function() { return AdministrationRoutes; });
/* harmony import */ var _users_adminusers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users/adminusers.component */ "./src/app/administration/users/adminusers.component.ts");
/* harmony import */ var _users_add_adduserform_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users/add/adduserform.component */ "./src/app/administration/users/add/adduserform.component.ts");
/* harmony import */ var _maps_adminmaps_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maps/adminmaps.component */ "./src/app/administration/maps/adminmaps.component.ts");
/* harmony import */ var _dashboard_admindashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/admindashboard.component */ "./src/app/administration/dashboard/admindashboard.component.ts");




var AdministrationRoutes = [
    {
        path: '',
        children: [
            {
                path: 'users',
                children: [
                    {
                        path: '',
                        component: _users_adminusers_component__WEBPACK_IMPORTED_MODULE_0__["AdminUsersComponent"]
                    },
                    {
                        path: 'add',
                        component: _users_add_adduserform_component__WEBPACK_IMPORTED_MODULE_1__["AddUserFormComponent"]
                    }
                ]
            }, {
                path: 'maps',
                children: [
                    {
                        path: '',
                        component: _maps_adminmaps_component__WEBPACK_IMPORTED_MODULE_2__["AdminMapsComponent"]
                    }
                ]
            }, {
                path: 'dashboard',
                children: [
                    {
                        path: '',
                        component: _dashboard_admindashboard_component__WEBPACK_IMPORTED_MODULE_3__["AdminDashboardComponent"]
                    }
                ]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/administration/dashboard/admindashboard.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/administration/dashboard/admindashboard.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mapimg{\n    background-image: url('image_placeholder2.jpeg');\n    background-size: cover;\n    width: 100%;\n    border-radius: 6px;\n    pointer-events: none;\n    box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n    vertical-align: middle;\n    border-style: none;\n    height: 220px;\n    overflow: hidden;\n    -webkit-filter: brightness(97%);\n            filter: brightness(97%)\n}\n#map{\n    display: none;\n}"

/***/ }),

/***/ "./src/app/administration/dashboard/admindashboard.component.html":
/*!************************************************************************!*\
  !*** ./src/app/administration/dashboard/admindashboard.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <h4>CMPaaS General Statistics</h4>\n        <div class=\"row\">\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n            <div class=\"card card-stats\">\n              <div class=\"card-header card-header-success card-header-icon\">\n                <div class=\"card-icon\">\n                  <i class=\"material-icons\">device_hub</i>\n                </div>\n                <p class=\"card-category\">Concept Maps</p>\n                <h3 class=\"card-title\">{{this.user.maps.length}}</h3>\n              </div>\n              <div class=\"card-footer\">\n                <div class=\"stats\">\n                  <i class=\"material-icons text-success\">plus_one</i>\n                  <a routerLink=\"/edit/cmap\" class=\"text-primary\" href=\"\">Create a new...</a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n            <div class=\"card card-stats\">\n              <div class=\"card-header card-header-warning card-header-icon\">\n                <div class=\"card-icon\">\n                  <i class=\"material-icons\">group</i>\n                </div>\n                <p class=\"card-category\">Groups</p>\n                <h3 class=\"card-title\">{{this.user.groups.length}}</h3>\n              </div>\n              <div class=\"card-footer\">\n                <div class=\"stats\">\n                  <i class=\"material-icons text-warning\">group_add</i> \n                  <a routerLink=\"/edit/cmap\" class=\"text-primary\" href=\"\"> Manage your groups...</a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n            <div class=\"card card-stats\">\n              <div class=\"card-header card-header-danger card-header-icon\">\n                <div class=\"card-icon\">\n                    <i class=\"fas fa-user-tag\"></i>\n                </div>\n                <p class=\"card-category\">Following</p>\n                <h3 class=\"card-title\">45</h3>\n              </div>\n              <div class=\"card-footer\">\n                <div class=\"stats\">\n                  <i class=\"material-icons text-danger\">timeline</i> \n                  <a routerLink=\"/edit/cmap\" class=\"text-primary\" href=\"\"> View timeline...</a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n            <div class=\"card card-stats\">\n              <div class=\"card-header card-header-info card-header-icon\">\n                <div class=\"card-icon\">\n                  <i class=\"fa fa-twitter\"></i>\n                </div>\n                <p class=\"card-category\">Followers</p>\n                <h3 class=\"card-title\">+245</h3>\n              </div>\n              <div class=\"card-footer\">\n                <div class=\"stats\">\n                  <i class=\"material-icons text-info\">share</i> \n                  <a routerLink=\"/edit/cmap\" class=\"text-primary\" href=\"\"> Manage your maps access level...</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                  <div class=\"card-header card-header-success card-header-icon\">\n                    <div class=\"card-icon\">\n                      <i class=\"material-icons\"></i>\n                    </div>\n                    <h4 class=\"card-title\">Users by Country</h4>\n                  </div>\n                    <div class=\"card-body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <app-md-table *ngIf=\"this.loaded\"\n                                  [data]=\"tableData\">\n                              </app-md-table>\n                            </div>\n                            <div class=\"col-md-6 ml-auto mr-auto\">\n                                <div id=\"worldMap\" class=\"map\"></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"card card-chart\">\n            <div class=\"card-header card-header-rose\" data-header-animation=\"true\">\n              <div class=\"ct-chart\" id=\"websiteViewsChart\"></div>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"card-actions\">\n                <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link fix-broken-card\">\n                  <i class=\"material-icons\">build</i> Fix Header!\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-info btn-link\" matTooltip=\"Refresh\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">refresh</i>\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-default btn-link\" matTooltip=\"Change Date\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">edit</i>\n                </button>\n              </div>\n              <h4 class=\"card-title\">Website Views</h4>\n              <p class=\"card-category\">Last Campaign Performance</p>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"stats\">\n                <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card card-chart\">\n            <div class=\"card-header card-header-success\" data-header-animation=\"true\">\n              <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"card-actions\">\n                <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link fix-broken-card\">\n                  <i class=\"material-icons\">build</i> Fix Header!\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-info btn-link\" matTooltip=\"Refresh\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">refresh</i>\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-default btn-link\" matTooltip=\"Change Date\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">edit</i>\n                </button>\n              </div>\n              <h4 class=\"card-title\">Daily Sales</h4>\n              <p class=\"card-category\">\n                <span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> 55% </span> increase in today sales.</p>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"stats\">\n                <i class=\"material-icons\">access_time</i> updated 4 minutes ago\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card card-chart\">\n            <div class=\"card-header card-header-info\" data-header-animation=\"true\">\n              <div class=\"ct-chart\" id=\"completedTasksChart\"></div>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"card-actions\">\n                <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link fix-broken-card\">\n                  <i class=\"material-icons\">build</i> Fix Header!\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-info btn-link\" matTooltip=\"Refresh\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">refresh</i>\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-default btn-link\" matTooltip=\"Change Date\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">edit</i>\n                </button>\n              </div>\n              <h4 class=\"card-title\">Completed Tasks</h4>\n              <p class=\"card-category\">Last Campaign Performance</p>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"stats\">\n                <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n<div id=\"map\" #myDiagramDiv></div>"

/***/ }),

/***/ "./src/app/administration/dashboard/admindashboard.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/administration/dashboard/admindashboard.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var gojs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gojs */ "./node_modules/gojs/release/go.js");
/* harmony import */ var gojs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gojs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chartist */ "./node_modules/chartist/dist/chartist.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_index_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/index.service */ "./src/app/_services/index.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var myDiagram;
var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent(http, _sanitizer, authServicve, versionService, mapService, meService, router) {
        this.http = http;
        this._sanitizer = _sanitizer;
        this.authServicve = authServicve;
        this.versionService = versionService;
        this.mapService = mapService;
        this.meService = meService;
        this.router = router;
        this.images = new Array();
        this.idMap = new Array();
        this.loaded = false;
        this.versions = new Array();
        this.user = JSON.parse(authServicve.getCurrentUser());
    }
    AdminDashboardComponent.prototype.startAnimationForLineChart = function (chart) {
        var seq, delays, durations;
        seq = 0;
        delays = 80;
        durations = 500;
        chart.on('draw', function (data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: chartist__WEBPACK_IMPORTED_MODULE_3__["Svg"].Easing.easeOutQuint
                    }
                });
            }
            else if (data.type === 'point') {
                seq++;
                data.element.animate({
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq = 0;
    };
    AdminDashboardComponent.prototype.startAnimationForBarChart = function (chart) {
        var seq2, delays2, durations2;
        seq2 = 0;
        delays2 = 80;
        durations2 = 500;
        chart.on('draw', function (data) {
            if (data.type === 'bar') {
                seq2++;
                data.element.animate({
                    opacity: {
                        begin: seq2 * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq2 = 0;
    };
    // constructor(private navbarTitleService: NavbarTitleService) { }
    AdminDashboardComponent.prototype.populate = function () {
        var total = 0;
        var arr = new Array();
        this.globalInfo.forEach(function (el) { return total += el.count; });
        this.globalInfo.forEach(function (el) {
            if (el._id)
                arr.push([el.countryCode, el._id, el.count, Math.round(((el.count / total) * 100) * 10) / 10 + '%']);
            else
                arr.push(['unknow', 'Unknow', el.count, Math.round(((el.count / total) * 100) * 10) / 10 + '%']);
        });
        this.tableData = {
            headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
            dataRows: arr
        };
        this.loaded = true;
    };
    AdminDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.meService.updateDashboardMaps()
            .subscribe(function (maps) {
            _this.maps = maps;
            _this.meService.updateDashboardMapsVersions(_this.maps)
                .subscribe(function (versions) {
                versions.forEach(function (v) {
                    _this.versions.findIndex(function (item) { return item.map._id == v.map._id; }) === -1 ? _this.versions.push(v) : {};
                });
                var serializer = new XMLSerializer();
                var svg;
                for (var i = 0; i < (_this.versions.length > 3 ? 3 : _this.versions.length); i++) {
                    myDiagram.model = gojs__WEBPACK_IMPORTED_MODULE_2__["Model"].fromJson(_this.versions[i].content);
                    _this.idMap[i] = _this.versions[i].map._id;
                    svg = myDiagram.makeSvg({
                        scale: 0.5,
                        maxSize: new gojs__WEBPACK_IMPORTED_MODULE_2__["Size"](NaN, 220)
                    });
                    _this.images[i] = _this._sanitizer.bypassSecurityTrustHtml(serializer.serializeToString(svg));
                }
            });
        }, function (error) { return console.log(error); });
        this.http.get('http://localhost:3000/v1/users/globalInfo')
            .subscribe(function (data) {
            _this.globalInfo = data;
            _this.populate();
        }, function (error) { return console.log(error); });
        /* ----------==========     Daily Sales Chart initialization    ==========---------- */
        var dataDailySalesChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };
        var optionsDailySalesChart = {
            lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_3__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 50,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
        };
        var dailySalesChart = new chartist__WEBPACK_IMPORTED_MODULE_3__["Line"]('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
        this.startAnimationForLineChart(dailySalesChart);
        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */
        var dataCompletedTasksChart = {
            labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
            series: [
                [230, 750, 450, 300, 280, 240, 200, 190]
            ]
        };
        var optionsCompletedTasksChart = {
            lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_3__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 1000,
            // look
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
        };
        var completedTasksChart = new chartist__WEBPACK_IMPORTED_MODULE_3__["Line"]('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
        this.startAnimationForLineChart(completedTasksChart);
        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */
        var dataWebsiteViewsChart = {
            labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
            ]
        };
        var optionsWebsiteViewsChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var websiteViewsChart = new chartist__WEBPACK_IMPORTED_MODULE_3__["Bar"]('#websiteViewsChart', dataWebsiteViewsChart, optionsWebsiteViewsChart, responsiveOptions);
        this.startAnimationForBarChart(websiteViewsChart);
        $('#worldMap').vectorMap({
            map: 'world_en',
            backgroundColor: 'transparent',
            borderColor: '#818181',
            borderOpacity: 0.25,
            borderWidth: 1,
            color: '#b3b3b3',
            enableZoom: true,
            hoverColor: '#eee',
            hoverOpacity: null,
            normalizeFunction: 'linear',
            scaleColors: ['#b6d6ff', '#005ace'],
            selectedColor: '#c9dfaf',
            selectedRegions: null,
            showTooltip: true,
            onRegionClick: function (element, code, region) {
                var message = 'You clicked "'
                    + region
                    + '" which has the code: '
                    + code.toUpperCase();
                alert(message);
            }
        });
        // RESOLVER ESSA POG 
        var conceptNodeTemplate, relationNodeTemplate, normalLinkTemplate, orLinkTemplate, mapTemplate;
        var $$ = gojs__WEBPACK_IMPORTED_MODULE_2__["GraphObject"].make;
        myDiagram =
            $$(gojs__WEBPACK_IMPORTED_MODULE_2__["Diagram"], this.element.nativeElement, {
                initialContentAlignment: gojs__WEBPACK_IMPORTED_MODULE_2__["Spot"].Center,
            });
        conceptNodeTemplate =
            $$(gojs__WEBPACK_IMPORTED_MODULE_2__["Node"], "Auto", // the Shape will go around the TextBlock
            new gojs__WEBPACK_IMPORTED_MODULE_2__["Binding"]("location", "loc", gojs__WEBPACK_IMPORTED_MODULE_2__["Point"].parse).makeTwoWay(gojs__WEBPACK_IMPORTED_MODULE_2__["Point"].stringify), $$(gojs__WEBPACK_IMPORTED_MODULE_2__["Shape"], "Rectangle", {
                portId: "",
                strokeWidth: 1,
                fromLinkable: true,
                fromLinkableSelfNode: true,
                fromLinkableDuplicates: true,
                toLinkable: true,
                toLinkableSelfNode: true,
                toLinkableDuplicates: true,
                cursor: "pointer",
                fill: $$(gojs__WEBPACK_IMPORTED_MODULE_2__["Brush"], "Linear", { 0: "rgb(254, 201, 0)", 1: "rgb(254, 162, 0)" }),
                stroke: "black"
            }, 
            // Shape.fill is bound to Node.data.color
            new gojs__WEBPACK_IMPORTED_MODULE_2__["Binding"]("fill", "color")), $$(gojs__WEBPACK_IMPORTED_MODULE_2__["TextBlock"], {
                font: "bold 12px sans-serif",
                stroke: '#333',
                margin: 6,
                isMultiline: true,
                editable: true // allow in-place editing by user
            }, // some room around the text
            // TextBlock.text is bound to Node.data.key
            new gojs__WEBPACK_IMPORTED_MODULE_2__["Binding"]("text", "text").makeTwoWay()));
        relationNodeTemplate =
            $$(gojs__WEBPACK_IMPORTED_MODULE_2__["Node"], "Auto", // the Shape will go around the TextBlock
            new gojs__WEBPACK_IMPORTED_MODULE_2__["Binding"]("location", "loc", gojs__WEBPACK_IMPORTED_MODULE_2__["Point"].parse).makeTwoWay(gojs__WEBPACK_IMPORTED_MODULE_2__["Point"].stringify), $$(gojs__WEBPACK_IMPORTED_MODULE_2__["Shape"], "Rectangle", {
                portId: "",
                strokeWidth: 1,
                fromLinkable: true,
                fromLinkableSelfNode: true,
                fromLinkableDuplicates: true,
                toLinkable: true,
                toLinkableSelfNode: true,
                toLinkableDuplicates: true,
                cursor: "pointer",
                fill: "rgba(255,255,255,0)",
                stroke: "rgba(255,255,255,0)"
            }), $$(gojs__WEBPACK_IMPORTED_MODULE_2__["TextBlock"], {
                font: "bold 12px sans-serif",
                stroke: '#333',
                margin: 6,
                isMultiline: true,
                editable: true
            }, // some room around the text
            // TextBlock.text is bound to Node.data.key
            new gojs__WEBPACK_IMPORTED_MODULE_2__["Binding"]("text", "text").makeTwoWay()));
        normalLinkTemplate =
            $$(gojs__WEBPACK_IMPORTED_MODULE_2__["Link"], {
                toShortLength: 3,
                relinkableFrom: true,
                relinkableTo: true,
                curve: gojs__WEBPACK_IMPORTED_MODULE_2__["Link"].Bezier,
                reshapable: true
            }, // allow the user to relink existing links
            new gojs__WEBPACK_IMPORTED_MODULE_2__["Binding"]("points").makeTwoWay(), $$(gojs__WEBPACK_IMPORTED_MODULE_2__["Shape"], {
                strokeWidth: 1
            }, new gojs__WEBPACK_IMPORTED_MODULE_2__["Binding"]("stroke", "color").makeTwoWay()), $$(gojs__WEBPACK_IMPORTED_MODULE_2__["Shape"], {
                toArrow: "Standard",
                stroke: null
            }, new gojs__WEBPACK_IMPORTED_MODULE_2__["Binding"]("stroke", "color").makeTwoWay(), new gojs__WEBPACK_IMPORTED_MODULE_2__["Binding"]("fill", "color").makeTwoWay()));
        orLinkTemplate =
            $$(gojs__WEBPACK_IMPORTED_MODULE_2__["Link"], {
                toShortLength: 3,
                relinkableFrom: true,
                relinkableTo: true,
                curve: gojs__WEBPACK_IMPORTED_MODULE_2__["Link"].Bezier,
                reshapable: true
            }, // allow the user to relink existing links
            new gojs__WEBPACK_IMPORTED_MODULE_2__["Binding"]("points").makeTwoWay(), $$(gojs__WEBPACK_IMPORTED_MODULE_2__["Shape"], {
                strokeWidth: 1
            }, new gojs__WEBPACK_IMPORTED_MODULE_2__["Binding"]("stroke", "color").makeTwoWay()), $$(gojs__WEBPACK_IMPORTED_MODULE_2__["Shape"], {
                toArrow: "Standard",
                stroke: null
            }, new gojs__WEBPACK_IMPORTED_MODULE_2__["Binding"]("fill", "color").makeTwoWay()), $$(gojs__WEBPACK_IMPORTED_MODULE_2__["Shape"], {
                strokeWidth: 1,
                fromArrow: "BackwardSemiCircle"
            }, new gojs__WEBPACK_IMPORTED_MODULE_2__["Binding"]("fill", "color").makeTwoWay()));
        mapTemplate =
            $$(gojs__WEBPACK_IMPORTED_MODULE_2__["Group"], "Auto", {}, new gojs__WEBPACK_IMPORTED_MODULE_2__["Binding"]("isSubGraphExpanded", "expanded").makeTwoWay(), new gojs__WEBPACK_IMPORTED_MODULE_2__["Binding"]("location", "loc", gojs__WEBPACK_IMPORTED_MODULE_2__["Point"].parse).makeTwoWay(gojs__WEBPACK_IMPORTED_MODULE_2__["Point"].stringify), $$(gojs__WEBPACK_IMPORTED_MODULE_2__["Shape"], "RoundedRectangle", {
                strokeWidth: 1,
                portId: "",
                cursor: "pointer",
                fromLinkable: true,
                fromLinkableSelfNode: true,
                fromLinkableDuplicates: true,
                toLinkable: true,
                toLinkableSelfNode: true,
                toLinkableDuplicates: true
            }, new gojs__WEBPACK_IMPORTED_MODULE_2__["Binding"]("fill", "isHighlighted", function (h) { return h ? "rgba(255,0,0,0.2)" : $$(gojs__WEBPACK_IMPORTED_MODULE_2__["Brush"], "Linear", { 0: "rgba(224,234,252,0.5)", 1: "rgba(207,222,243,0.5)" }); }).ofObject()), $$(gojs__WEBPACK_IMPORTED_MODULE_2__["Panel"], "Vertical", {
                defaultAlignment: gojs__WEBPACK_IMPORTED_MODULE_2__["Spot"].Center,
                margin: 6
            }, $$(gojs__WEBPACK_IMPORTED_MODULE_2__["Panel"], "Horizontal", {
                defaultAlignment: gojs__WEBPACK_IMPORTED_MODULE_2__["Spot"].Top
            }, $$("SubGraphExpanderButton"), // the SubGraphExpanderButton is a panel that functions as a button to expand or collapse the subGraph
            $$(gojs__WEBPACK_IMPORTED_MODULE_2__["TextBlock"], {
                font: "bold 12px sans-serif",
                stroke: '#333',
                margin: 4,
                isMultiline: true,
                editable: true,
                alignment: gojs__WEBPACK_IMPORTED_MODULE_2__["Spot"].Center
            }, new gojs__WEBPACK_IMPORTED_MODULE_2__["Binding"]("text", "text").makeTwoWay())), $$(gojs__WEBPACK_IMPORTED_MODULE_2__["Placeholder"], // create a placeholder to represent the area where the contents of the group are
            {
                padding: new gojs__WEBPACK_IMPORTED_MODULE_2__["Margin"](0, 5)
            })));
        myDiagram.nodeTemplateMap.add("concept", conceptNodeTemplate);
        myDiagram.nodeTemplateMap.add("relation", relationNodeTemplate);
        myDiagram.linkTemplateMap.add("normal", normalLinkTemplate);
        myDiagram.linkTemplateMap.add("or", orLinkTemplate);
        myDiagram.groupTemplateMap.add("map", mapTemplate);
    };
    AdminDashboardComponent.prototype.ngAfterViewInit = function () {
        var breakCards = true;
        if (breakCards === true) {
            // We break the cards headers if there is too much stress on them :-)
            $('[data-header-animation="true"]').each(function () {
                var $fix_button = $(this);
                var $card = $(this).parent('.card');
                $card.find('.fix-broken-card').click(function () {
                    var $header = $(this).parent().parent().siblings('.card-header, .card-image');
                    $header.removeClass('hinge').addClass('fadeInDown');
                    $card.attr('data-count', 0);
                    setTimeout(function () {
                        $header.removeClass('fadeInDown animate');
                    }, 480);
                });
                $card.mouseenter(function () {
                    var $this = $(this);
                    var hover_count = parseInt($this.attr('data-count'), 10) + 1 || 0;
                    $this.attr('data-count', hover_count);
                    if (hover_count >= 20) {
                        $(this).children('.card-header, .card-image').addClass('hinge animated');
                    }
                });
            });
        }
    };
    AdminDashboardComponent.prototype.click = function (n) {
        this.mapService.setCurrentMap(this.maps[n]);
        this.router.navigate(['view', 'map']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myDiagramDiv'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AdminDashboardComponent.prototype, "element", void 0);
    AdminDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-dashboard',
            template: __webpack_require__(/*! ./admindashboard.component.html */ "./src/app/administration/dashboard/admindashboard.component.html"),
            styles: [__webpack_require__(/*! ./admindashboard.component.css */ "./src/app/administration/dashboard/admindashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"],
            _services_index_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _services_index_service__WEBPACK_IMPORTED_MODULE_5__["VersionService"],
            _services_index_service__WEBPACK_IMPORTED_MODULE_5__["MapService"],
            _services_index_service__WEBPACK_IMPORTED_MODULE_5__["MeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "./src/app/administration/maps/adminmaps.component.html":
/*!**************************************************************!*\
  !*** ./src/app/administration/maps/adminmaps.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                  <div class=\"card-header card-header-danger card-header-icon\">\n                    <div class=\"card-icon\">\n                      <i class=\"material-icons\">map</i>\n                    </div>\n                    <h4 class=\"card-title\">Maps</h4>\n                  </div>\n                    <div class=\"card-body\">\n                        <div class=\"toolbar\">\n                                \n                        </div>\n                        <div class=\"material-datatables\">\n                          <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" *ngIf=\"this.loaded\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                                <thead>\n                                    <tr>\n                                      <th>{{ dataTable.headerRow[0] }}</th>\n                                      <th>{{ dataTable.headerRow[1] }}</th>\n                                      <th>{{ dataTable.headerRow[2] }}</th>\n                                      <th class=\"disabled-sorting text-right\">{{ dataTable.headerRow[3] }}</th>\n                                    </tr>\n                                </thead>\n                                <tfoot>\n                                    <tr>\n                                      <th>{{ dataTable.footerRow[0] }}</th>\n                                      <th>{{ dataTable.footerRow[1] }}</th>\n                                      <th>{{ dataTable.footerRow[2] }}</th>\n                                      <th class=\"text-right\">{{ dataTable.footerRow[3] }}</th>\n                                    </tr>\n                                </tfoot>\n                                <tbody>\n                                    <tr *ngFor=\"let row of dataTable.dataRows\">\n                                        <td>{{row.title}}</td>\n                                        <td>{{row.question}}</td>\n                                        <td>{{row.author.username}}</td>\n                                        <td class=\"text-right\">\n                                          <a href=\"#\" class=\"btn btn-link btn-info btn-just-icon like\"><i class=\"material-icons\">favorite</i></a>\n                                          <a href=\"#\" class=\"btn btn-link btn-warning btn-just-icon edit\"><i class=\"material-icons\">dvr</i></a>\n                                          <a href=\"#\" class=\"btn btn-link btn-danger btn-just-icon remove\"><i class=\"material-icons\">close</i></a>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <!-- end content-->\n                </div>\n                <!--  end card  -->\n            </div>\n            <!-- end col-md-12 -->\n        </div>\n        <!-- end row -->\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/administration/maps/adminmaps.component.ts":
/*!************************************************************!*\
  !*** ./src/app/administration/maps/adminmaps.component.ts ***!
  \************************************************************/
/*! exports provided: AdminMapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMapsComponent", function() { return AdminMapsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_index_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/index.service */ "./src/app/_services/index.service.ts");
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


var AdminMapsComponent = /** @class */ (function () {
    function AdminMapsComponent(mapService) {
        this.mapService = mapService;
        this.loaded = false;
        this.rendered = false;
    }
    AdminMapsComponent.prototype.populate = function () {
        this.dataTable = {
            headerRow: ['Title', 'Question', 'Author', 'Actions'],
            footerRow: ['Title', 'Question', 'Author', 'Actions'],
            dataRows: this.mapList
        };
        this.loaded = true;
    };
    AdminMapsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapService.getAll()
            .subscribe(function (data) {
            _this.mapList = data;
            _this.populate();
        });
    };
    AdminMapsComponent.prototype.ngAfterViewInit = function () {
    };
    AdminMapsComponent.prototype.ngAfterViewChecked = function () {
        if (this.loaded && !this.rendered) {
            $('#datatables').DataTable({
                "pagingType": "full_numbers",
                "lengthMenu": [
                    [10, 25, 50, -1],
                    [10, 25, 50, "All"]
                ],
                responsive: true,
                language: {
                    search: "_INPUT_",
                    searchPlaceholder: "Search records",
                }
            });
            var table_1 = $('#datatables').DataTable();
            // Edit record
            table_1.on('click', '.edit', function (e) {
                var $tr = $(this).closest('tr');
                var data = table_1.row($tr).data();
                alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
                e.preventDefault();
            });
            // Delete a record
            table_1.on('click', '.remove', function (e) {
                var $tr = $(this).closest('tr');
                table_1.row($tr).remove().draw();
                e.preventDefault();
            });
            //Like record
            table_1.on('click', '.like', function (e) {
                alert('You clicked on Like button');
                e.preventDefault();
            });
            $('.card .material-datatables label').addClass('form-group');
            this.rendered = true;
        }
    };
    AdminMapsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-maps-cmp',
            template: __webpack_require__(/*! ./adminmaps.component.html */ "./src/app/administration/maps/adminmaps.component.html")
        }),
        __metadata("design:paramtypes", [_services_index_service__WEBPACK_IMPORTED_MODULE_1__["MapService"]])
    ], AdminMapsComponent);
    return AdminMapsComponent;
}());



/***/ }),

/***/ "./src/app/administration/users/add/adduserform.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/administration/users/add/adduserform.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"card\">\n                        <form [formGroup]=\"type\" class=\"form-horizontal\">\n                          <div class=\"card-header card-header-success card-header-icon\">\n                              <div class=\"card-icon\" style=\"margin-top: -35px\">\n                                  <i class=\"material-icons\">person_add</i>\n                                </div>\n                                <h4 class=\"card-title\">Add New User</h4>\n                          </div>\n                            <div class=\"card-body\">\n                                <div class=\"row\">\n                                  <label class=\"col-sm-2 col-form-label\">First Name: </label>\n                                    <div class=\"col-sm-3\">\n                                      <mat-form-field class=\"example-full-width has-label\" [ngClass]=\"{'has-success':validTextType===true}\" [ngClass]=\"displayFieldCss(type, 'text')\">\n                                        <input type=\"text\"\n                                        matInput\n                                        id=\"firstname\"\n                                        (ngModelChange)=\"textValidationType($event)\"\n                                        formControlName=\"firstname\">\n                                        <app-field-error-display [displayError]=\"isFieldValid(type, 'firstname')\" errorMsg=\"Required text\">\n                                        </app-field-error-display>\n                                      </mat-form-field>\n                                    </div>\n                                    <label class=\"col-sm-1 col-form-label\">Surname: </label>\n                                      <div class=\"col-sm-5\">\n                                        <mat-form-field class=\"example-full-width has-label\" [ngClass]=\"{'has-success':validTextType===true}\" [ngClass]=\"displayFieldCss(type, 'text')\">\n                                          <input type=\"text\"\n                                          matInput\n                                          id=\"surname\"\n                                          (ngModelChange)=\"textValidationType($event)\"\n                                          formControlName=\"surname\">\n                                          <app-field-error-display [displayError]=\"isFieldValid(type, 'surname')\" errorMsg=\"Required text\">\n                                          </app-field-error-display>\n                                        </mat-form-field>\n                                      </div>\n                                </div>\n                                <div class=\"row\">\n                                    <label class=\"col-sm-2 col-form-label\">Username: </label>\n                                    <div class=\"col-sm-3\">\n                                      <mat-form-field class=\"example-full-width has-label\" [ngClass]=\"{'has-success':validTextType===true}\" [ngClass]=\"displayFieldCss(type, 'text')\">\n                                        <input type=\"text\"\n                                        matInput\n                                        id=\"username\"\n                                        (ngModelChange)=\"textValidationType($event)\"\n                                        formControlName=\"username\">\n                                        <app-field-error-display [displayError]=\"isFieldValid(type, 'username')\" errorMsg=\"Required text\">\n                                        </app-field-error-display>\n                                      </mat-form-field>\n                                    </div>\n    \n                                    <label class=\"col-sm-1 col-form-label\">Email:</label>\n    \n                                    <div class=\"col-sm-5\">\n                                      <mat-form-field class=\"example-full-width has-label\" [ngClass]=\"{'has-success':validEmailType===true}\">\n                                         <input\n                                         type=\"email\"\n                                         matInput\n                                         [errorStateMatcher]=\"matcher\"\n                                         (ngModelChange)=\"emailValidationType($event)\"\n                                         formControlName=\"email\">\n                                         <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n                                           Please enter a valid email address\n                                         </mat-error>\n                                         <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n                                           Email is <strong>required</strong>\n                                         </mat-error>\n                                       </mat-form-field>\n                                    </div>\n                                    \n                                </div>\n                                <div class=\"row\">\n    \n                                    <label class=\"col-sm-2 col-form-label\">Password: </label>\n                                    <div class=\"col-sm-3\">\n                                      <mat-form-field class=\"example-full-width\" [ngClass]=\"{'has-success':validSourceType===true}\" [ngClass]=\"displayFieldCss(type, 'password')\">\n                                        <input type=\"password\"\n                                        matInput\n                                          name=\"password\"\n                                          (ngModelChange)=\"sourceValidationType($event)\"\n                                        formControlName=\"password\">\n                                        <app-field-error-display [displayError]=\"isFieldValid(type, 'password')\" errorMsg=\"IdSource is required\">\n                                        </app-field-error-display>\n                                      </mat-form-field>\n                                    </div>\n                                    <label class=\"col-sm-1 col-form-label\">Repeate: </label>\n                                    <div class=\"col-sm-3\">\n                                      <mat-form-field class=\"example-full-width\" [ngClass]=\"{'has-success':validDestinationType===true}\" [ngClass]=\"displayFieldCss(type, 'confirmPassword')\">\n                                        <input type=\"password\"\n                                        matInput\n                                        name=\"repeated\"\n                                        (ngModelChange)=\"confirmDestinationValidationType($event)\"\n                                        formControlName=\"confirmPassword\">\n                                        <app-field-error-display [displayError]=\"isFieldValid(type, 'confirmPassword')\" errorMsg=\" Password mismatch!\">\n                                        </app-field-error-display>\n                                      </mat-form-field>\n                                    </div>\n                                </div>\n                                \n                            </div>\n                            <div class=\"card-footer\">\n                              <div class=\"col-md-6\">\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-success btn-fill\" (click)=\"onType()\">\n                                    <span class=\"btn-label\">\n                                        <i class=\"material-icons\">check</i>\n                                    </span>\n                                    Register\n                                </button>\n                                <button mat-raised-button class=\"btn btn-danger\" (click)=\"back()\">\n                                    <span class=\"btn-label\">\n                                      <i class=\"material-icons\">keyboard_arrow_left</i>\n                                    </span>\n                                    Back\n                                  </button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n        </div>\n    </div>\n    "

/***/ }),

/***/ "./src/app/administration/users/add/adduserform.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/administration/users/add/adduserform.component.ts ***!
  \*******************************************************************/
/*! exports provided: MyErrorStateMatcher, AddUserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserFormComponent", function() { return AddUserFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _password_validator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-validator.component */ "./src/app/administration/users/add/password-validator.component.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services/user/user.service */ "./src/app/_services/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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

var AddUserFormComponent = /** @class */ (function () {
    function AddUserFormComponent(userService, formBuilder, router) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.validTextType = false;
        this.validEmailType = false;
        this.validNumberType = false;
        this.validUrlType = false;
        this.pattern = "https?://.+";
        this.validSourceType = false;
        this.validDestinationType = false;
        this.matcher = new MyErrorStateMatcher();
    }
    ;
    AddUserFormComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).touched;
    };
    AddUserFormComponent.prototype.displayFieldCss = function (form, field) {
        return {
            'has-error': this.isFieldValid(form, field),
            'has-feedback': this.isFieldValid(form, field)
        };
    };
    AddUserFormComponent.prototype.back = function () {
        this.router.navigate(['administration/users']);
    };
    AddUserFormComponent.prototype.onType = function () {
        var _this = this;
        if (this.type.valid) {
            this.userService.create(this.type.getRawValue())
                .subscribe(function (data) {
                $.notify({
                    icon: 'notifications',
                    message: data.userMessage
                }, {
                    type: 'success',
                    timer: 3000,
                    placement: {
                        from: 'top',
                        align: 'right'
                    },
                    template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert">' +
                        '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                        '<span data-notify="title">{1}</span> ' +
                        '<span data-notify="message">{2}</span>' +
                        '<div class="progress" data-notify="progressbar">' +
                        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                        '</div>' +
                        '<a href="{3}" target="{4}" data-notify="url"></a>' +
                        '</div>'
                });
                _this.type.reset();
                for (var key in _this.type.controls)
                    _this.type.controls[key].setErrors(null);
            }, function (error) { return alert(error); });
        }
        else {
            this.validateAllFormFields(this.type);
        }
    };
    AddUserFormComponent.prototype.validateAllFormFields = function (formGroup) {
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
    AddUserFormComponent.prototype.ngOnInit = function () {
        this.type = this.formBuilder.group({
            // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstname attribute must have a value in it.
            firstname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            surname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        }, {
            validator: _password_validator_component__WEBPACK_IMPORTED_MODULE_2__["PasswordValidation"].MatchPassword // your validation method
        });
    };
    AddUserFormComponent.prototype.textValidationType = function (e) {
        if (e) {
            this.validTextType = true;
        }
        else {
            this.validTextType = false;
        }
    };
    AddUserFormComponent.prototype.emailValidationType = function (e) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(e).toLowerCase())) {
            this.validEmailType = true;
        }
        else {
            this.validEmailType = false;
        }
    };
    AddUserFormComponent.prototype.sourceValidationType = function (e) {
        if (e) {
            this.validSourceType = true;
        }
        else {
            this.validSourceType = false;
        }
    };
    AddUserFormComponent.prototype.confirmDestinationValidationType = function (e) {
        if (this.type.controls['password'].value === e) {
            this.validDestinationType = true;
        }
        else {
            this.validDestinationType = false;
        }
    };
    AddUserFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adduserform-cmp',
            template: __webpack_require__(/*! ./adduserform.component.html */ "./src/app/administration/users/add/adduserform.component.html")
        }),
        __metadata("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AddUserFormComponent);
    return AddUserFormComponent;
}());



/***/ }),

/***/ "./src/app/administration/users/add/field-error-display/field-error-display.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/administration/users/add/field-error-display/field-error-display.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-msg {\n  color: red;\n  display: inline-block;\n  position: absolute;\n  top: 34px;\n  /* font-size: 10px; */\n  font-size: 75%;\n  margin-top: 2.604167em;\n  top: calc(100% - 1.72916667em);\n}\n.fix-error-icon {\n  top: 27px;\n}\n"

/***/ }),

/***/ "./src/app/administration/users/add/field-error-display/field-error-display.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/administration/users/add/field-error-display/field-error-display.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"displayError\" >\n  <!-- <span class=\"glyphicon glyphicon-remove form-control-feedback fix-error-icon\"></span> -->\n  <span class=\"sr-only\">(error)</span>\n  <div class=\"error-msg\">\n    {{ errorMsg }}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/administration/users/add/field-error-display/field-error-display.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/administration/users/add/field-error-display/field-error-display.component.ts ***!
  \***********************************************************************************************/
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
            template: __webpack_require__(/*! ./field-error-display.component.html */ "./src/app/administration/users/add/field-error-display/field-error-display.component.html"),
            styles: [__webpack_require__(/*! ./field-error-display.component.css */ "./src/app/administration/users/add/field-error-display/field-error-display.component.css")]
        })
    ], FieldErrorDisplayComponent);
    return FieldErrorDisplayComponent;
}());



/***/ }),

/***/ "./src/app/administration/users/add/password-validator.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/administration/users/add/password-validator.component.ts ***!
  \**************************************************************************/
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

/***/ "./src/app/administration/users/adminusers.component.css":
/*!***************************************************************!*\
  !*** ./src/app/administration/users/adminusers.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\n    max-width: 50px;\n    max-height: 50px;\n    overflow: hidden;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    border-radius: 50%;\n    border-top-left-radius: 50%;\n    border-top-right-radius: 50%;\n    border-bottom-right-radius: 50%;\n    border-bottom-left-radius: 50%;\n}"

/***/ }),

/***/ "./src/app/administration/users/adminusers.component.html":
/*!****************************************************************!*\
  !*** ./src/app/administration/users/adminusers.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                  <div class=\"card-header card-header-danger card-header-icon\">\n                    <div class=\"card-icon\">\n                      <i class=\"material-icons\">people</i>\n                    </div>\n                    <h4 class=\"card-title\">Users</h4>\n                  </div>\n                    <div class=\"card-body\">\n                        <div class=\"toolbar\">\n                                <a routerLink=\"./add\" mat-raised-button mat-min-fab class=\"btn btn-success btn-round btn-fab\">\n                                    <i class=\"material-icons\">person_add</i>\n                                </a>\n                        </div>\n                        <div class=\"material-datatables\">\n                          <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" *ngIf=\"this.loaded\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                                <thead>\n                                    <tr>\n                                      <th>{{ dataTable.headerRow[0] }}</th>\n                                      <th>{{ dataTable.headerRow[1] }}</th>\n                                      <th>{{ dataTable.headerRow[2] }}</th>\n                                      <th>{{ dataTable.headerRow[3] }}</th>\n                                      <th class=\"disabled-sorting text-right\">{{ dataTable.headerRow[4] }}</th>\n                                    </tr>\n                                </thead>\n                                <tfoot>\n                                    <tr>\n                                      <th>{{ dataTable.footerRow[0] }}</th>\n                                      <th>{{ dataTable.footerRow[1] }}</th>\n                                      <th>{{ dataTable.footerRow[2] }}</th>\n                                      <th>{{ dataTable.footerRow[3] }}</th>\n                                      <th class=\"text-right\">{{ dataTable.footerRow[4] }}</th>\n                                    </tr>\n                                </tfoot>\n                                <tbody>\n                                    <tr *ngFor=\"let row of dataTable.dataRows\">\n                                        <td><img src=\"{{row.profile_picture}}\"></td>\n                                        <td>{{row.username}}</td>\n                                        <td>{{row.firstname + ' ' + row.surname}}</td>\n                                        <td>{{row.email}}</td>\n                                        <td class=\"text-right\">\n                                          <a href=\"#\" class=\"btn btn-link btn-info btn-just-icon like\"><i class=\"material-icons\">favorite</i></a>\n                                          <a href=\"#\" class=\"btn btn-link btn-warning btn-just-icon edit\"><i class=\"material-icons\">dvr</i></a>\n                                          <a href=\"#\" class=\"btn btn-link btn-danger btn-just-icon remove\"><i class=\"material-icons\">close</i></a>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <!-- end content-->\n                </div>\n                <!--  end card  -->\n            </div>\n            <!-- end col-md-12 -->\n        </div>\n        <!-- end row -->\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/administration/users/adminusers.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/administration/users/adminusers.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUsersComponent", function() { return AdminUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/user/user.service */ "./src/app/_services/user/user.service.ts");
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


var AdminUsersComponent = /** @class */ (function () {
    function AdminUsersComponent(userService) {
        this.userService = userService;
        this.loaded = false;
        this.rendered = false;
    }
    AdminUsersComponent.prototype.populate = function () {
        this.dataTable = {
            headerRow: ['picture', 'Username', 'Full Name', 'e-Mail', 'Actions'],
            footerRow: ['picture', 'Username', 'Full Name', 'e-Mail', 'Actions'],
            dataRows: this.userList
        };
        this.loaded = true;
    };
    AdminUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAll()
            .subscribe(function (data) {
            _this.userList = data;
            _this.populate();
        });
    };
    AdminUsersComponent.prototype.ngAfterViewInit = function () {
    };
    AdminUsersComponent.prototype.ngAfterViewChecked = function () {
        if (this.loaded && !this.rendered) {
            $('#datatables').DataTable({
                "pagingType": "full_numbers",
                "lengthMenu": [
                    [10, 25, 50, -1],
                    [10, 25, 50, "All"]
                ],
                responsive: true,
                language: {
                    search: "_INPUT_",
                    searchPlaceholder: "Search records",
                }
            });
            var table_1 = $('#datatables').DataTable();
            // Edit record
            table_1.on('click', '.edit', function (e) {
                var $tr = $(this).closest('tr');
                var data = table_1.row($tr).data();
                alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
                e.preventDefault();
            });
            // Delete a record
            table_1.on('click', '.remove', function (e) {
                var $tr = $(this).closest('tr');
                table_1.row($tr).remove().draw();
                e.preventDefault();
            });
            //Like record
            table_1.on('click', '.like', function (e) {
                alert('You clicked on Like button');
                e.preventDefault();
            });
            $('.card .material-datatables label').addClass('form-group');
            this.rendered = true;
        }
    };
    AdminUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-users-cmp',
            template: __webpack_require__(/*! ./adminusers.component.html */ "./src/app/administration/users/adminusers.component.html"),
            styles: [__webpack_require__(/*! ./adminusers.component.css */ "./src/app/administration/users/adminusers.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], AdminUsersComponent);
    return AdminUsersComponent;
}());



/***/ })

}]);
//# sourceMappingURL=administration-administration-module.js.map