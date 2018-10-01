(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mapimg{\r\n    background-image: url('image_placeholder2.jpeg');\r\n    background-size: cover;\r\n    width: 100%;\r\n    border-radius: 6px;\r\n    pointer-events: none;\r\n    box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\r\n    vertical-align: middle;\r\n    border-style: none;\r\n    height: 220px;\r\n    overflow: hidden;\r\n    -webkit-filter: brightness(97%);\r\n            filter: brightness(97%)\r\n}\r\n#map{\r\n    display: none;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n      <h4>Your Statistics</h4>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n          <div class=\"card card-stats\">\r\n            <div class=\"card-header card-header-success card-header-icon\">\r\n              <div class=\"card-icon\">\r\n                <i class=\"material-icons\">device_hub</i>\r\n              </div>\r\n              <p class=\"card-category\">Concept Maps</p>\r\n              <h3 class=\"card-title\">{{this.user.stats.maps}}</h3>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <div class=\"stats\">\r\n                <i class=\"material-icons text-success\">plus_one</i>\r\n                <a (click)=\"newMap($event)\" class=\"text-primary\" href=\"\">Create a new...</a>\r\n              </div>\r\n            </div>\r\n          </div> \r\n        </div>\r\n        <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n          <div class=\"card card-stats\">\r\n            <div class=\"card-header card-header-warning card-header-icon\">\r\n              <div class=\"card-icon\">\r\n                <i class=\"material-icons\">group</i>\r\n              </div>\r\n              <p class=\"card-category\">Groups</p>\r\n              <h3 class=\"card-title\">{{this.user.stats.groups}}</h3>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <div class=\"stats\">\r\n                <i class=\"material-icons text-warning\">group_add</i> \r\n                <a routerLink=\"/manage/groups\" class=\"text-primary\" href=\"\"> Manage your groups...</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n          <div class=\"card card-stats\">\r\n            <div class=\"card-header card-header-danger card-header-icon\">\r\n              <div class=\"card-icon\">\r\n                  <i class=\"fas fa-user-tag\"></i>\r\n              </div>\r\n              <p class=\"card-category\">Following</p>\r\n              <h3 class=\"card-title\">{{this.user.stats.following}}</h3>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <div class=\"stats\">\r\n                <i class=\"material-icons text-danger\">timeline</i> \r\n                <a routerLink=\"/pages/timeline\" class=\"text-primary\" href=\"\"> View timeline...</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n          <div class=\"card card-stats\">\r\n            <div class=\"card-header card-header-info card-header-icon\">\r\n              <div class=\"card-icon\">\r\n                <i class=\"fa fa-twitter\"></i>\r\n              </div>\r\n              <p class=\"card-category\">Followers</p>\r\n              <h3 class=\"card-title\">+{{this.user.stats.followers}}</h3>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <div class=\"stats\">\r\n                <i class=\"material-icons text-info\">share</i> \r\n                <a routerLink=\"/edit/cmap\" class=\"text-primary\" href=\"\"> Manage your maps access level...</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <h6>Your recent maps...</h6>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"card card-product\" *ngIf=\"images[0]\">\r\n            <div class=\"card-header card-header-image\" data-header-animation=\"true\">\r\n              <a href=\"#pablo\">\r\n                <div class=\"mapimg\" [innerHTML]=\"images[0]\"> </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"card-actions text-center\">\r\n                <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link fix-broken-card\">\r\n                  <i class=\"material-icons\">build</i> Fix Header!\r\n                </button>\r\n                <button mat-raised-button type=\"button\" class=\"btn btn-default btn-link\" matTooltip=\"View\" [matTooltipPosition]=\"'below'\" (click)=\"click(0)\">\r\n                  <i class=\"material-icons\">art_track</i>\r\n                </button>\r\n                <button mat-raised-button type=\"button\" class=\"btn btn-success btn-link\" matTooltip=\"Edit\" [matTooltipPosition]=\"'below'\">\r\n                  <i class=\"material-icons\">edit</i>\r\n                </button>\r\n                <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link\" matTooltip=\"Remove\" [matTooltipPosition]=\"'below'\">\r\n                  <i class=\"material-icons\">close</i>\r\n                </button>\r\n              </div>\r\n              <h4 class=\"card-title\">\r\n                <a href=\"#pablo\">{{this.maps[0].title}}</a>\r\n              </h4>\r\n              <div class=\"card-description\">\r\n                {{this.maps[0].description}}\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <div class=\"stats\">\r\n                <p class=\"card-category\"><i class=\"material-icons\">calendar_today</i> {{this.maps[0].last_update | date:'medium'}}</p>\r\n              </div>\r\n              <div class=\"stats\">\r\n                <p class=\"card-category\"><i class=\"material-icons\">favorite</i> 5</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"card card-product\" *ngIf=\"images[1]\">\r\n            <div class=\"card-header card-header-image\" data-header-animation=\"true\">\r\n              <a href=\"#pablo\">\r\n                  <div class=\"mapimg\" [innerHTML]=\"images[1]\"> </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"card-actions text-center\">\r\n                <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link fix-broken-card\">\r\n                  <i class=\"material-icons\">build</i> Fix Header!\r\n                </button>\r\n                <button mat-raised-button type=\"button\" class=\"btn btn-default btn-link\" matTooltip=\"View\" [matTooltipPosition]=\"'below'\" (click)=\"click(1)\">\r\n                  <i class=\"material-icons\">art_track</i>\r\n                </button>\r\n                <button mat-raised-button type=\"button\" class=\"btn btn-success btn-link\" matTooltip=\"Edit\" [matTooltipPosition]=\"'below'\">\r\n                  <i class=\"material-icons\">edit</i>\r\n                </button>\r\n                <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link\" matTooltip=\"Remove\" [matTooltipPosition]=\"'below'\">\r\n                  <i class=\"material-icons\">close</i>\r\n                </button>\r\n              </div>\r\n              <h4 class=\"card-title\">\r\n                <a href=\"#pablo\">{{this.maps[1].title}}</a>\r\n              </h4>\r\n              <div class=\"card-description\">\r\n                {{this.maps[1].description}}\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <div class=\"stats\">\r\n                <p class=\"card-category\"><i class=\"material-icons\">calendar_today</i> {{this.maps[1].last_update | date:'medium'}}</p>\r\n              </div>\r\n              <div class=\"stats\">\r\n                <p class=\"card-category\"><i class=\"material-icons\">favorite</i> 5</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"card card-product\" *ngIf=\"images[2]\">\r\n            <div class=\"card-header card-header-image\" data-header-animation=\"true\">\r\n              <a href=\"#pablo\">\r\n                  <div class=\"mapimg\" [innerHTML]=\"images[2]\"> </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"card-actions text-center\">\r\n                <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link fix-broken-card\">\r\n                  <i class=\"material-icons\">build</i> Fix Header!\r\n                </button>\r\n                <button mat-raised-button type=\"button\" class=\"btn btn-default btn-link\" matTooltip=\"View\" [matTooltipPosition]=\"'below'\" (click)=\"click(2)\">\r\n                  <i class=\"material-icons\">art_track</i>\r\n                </button>\r\n                <button mat-raised-button type=\"button\" class=\"btn btn-success btn-link\" matTooltip=\"Edit\" [matTooltipPosition]=\"'below'\">\r\n                  <i class=\"material-icons\">edit</i>\r\n                </button>\r\n                <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link\" matTooltip=\"Remove\" [matTooltipPosition]=\"'below'\">\r\n                  <i class=\"material-icons\">close</i>\r\n                </button>\r\n              </div>\r\n              <h4 class=\"card-title\">\r\n                <a href=\"#pablo\">{{this.maps[2].title}}</a>\r\n              </h4>\r\n              <div class=\"card-description\">\r\n                {{this.maps[2].description}}\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <div class=\"stats\">\r\n                <p class=\"card-category\"><i class=\"material-icons\">calendar_today</i> {{this.maps[2].last_update | date:'medium'}}</p>\r\n              </div>\r\n              <div class=\"stats\">\r\n                <p class=\"card-category\"><i class=\"material-icons\">favorite</i> 5</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n<conceptmap id=\"map\" #map1></conceptmap>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var gojs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gojs */ "./node_modules/gojs/release/go.js");
/* harmony import */ var gojs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gojs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_index_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/index.service */ "./src/app/_services/index.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../edit/conceptmap/conceptmap.component */ "./src/app/edit/conceptmap/conceptmap.component.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_sanitizer, authServicve, mapService, meService, router, modelService) {
        this._sanitizer = _sanitizer;
        this.authServicve = authServicve;
        this.mapService = mapService;
        this.meService = meService;
        this.router = router;
        this.modelService = modelService;
        this.images = new Array();
        this.user = JSON.parse(this.authServicve.getCurrentUser());
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.meService.getDashboardInfo()
            .subscribe(function (maps) {
            _this.maps = maps;
            var serializer = new XMLSerializer();
            var svg;
            _this.maps.forEach(function (m, i) {
                _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_5__["myDiagram"].model = gojs__WEBPACK_IMPORTED_MODULE_2__["Model"].fromJson(m.versions[0].content);
                svg = _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_5__["myDiagram"].makeSvg({
                    scale: 0.5,
                    maxSize: new gojs__WEBPACK_IMPORTED_MODULE_2__["Size"](NaN, 220)
                });
                _this.images[i] = _this._sanitizer.bypassSecurityTrustHtml(serializer.serializeToString(svg));
                Object(_edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_5__["resetModel"])();
            });
        }, function (error) { return console.log(error); });
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
    };
    DashboardComponent.prototype.click = function (n) {
        this.mapService.setCurrentMap(this.maps[n]);
        this.router.navigate(['view', 'map']);
    };
    DashboardComponent.prototype.newMap = function (e) {
        var _this = this;
        e.preventDefault();
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
            title: 'Are you sure?',
            text: "If you have a map not yet saved, this will delete all unsaved information. Do you wish to continue?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            confirmButtonText: 'Yes, create a new...',
            buttonsStyling: false
        }).then(function (result) {
            if (result.value) {
                Object(_edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_5__["resetModel"])();
                _this.router.navigate(['edit', 'cmap']);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("map1"),
        __metadata("design:type", _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_5__["ConceptMapComponent"])
    ], DashboardComponent.prototype, "map1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myDiagramDiv'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DashboardComponent.prototype, "element", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"],
            _services_index_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_index_service__WEBPACK_IMPORTED_MODULE_3__["MapService"],
            _services_index_service__WEBPACK_IMPORTED_MODULE_3__["MeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_index_service__WEBPACK_IMPORTED_MODULE_3__["ModelService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _md_md_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../md/md.module */ "./src/app/md/md.module.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard.routing */ "./src/app/dashboard/dashboard.routing.ts");
/* harmony import */ var _edit_edit_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../edit/edit.module */ "./src/app/edit/edit.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_7__["DashboardRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _md_md_module__WEBPACK_IMPORTED_MODULE_4__["MdModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _edit_edit_module__WEBPACK_IMPORTED_MODULE_8__["EditModule"]
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.routing.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.routing.ts ***!
  \************************************************/
/*! exports provided: DashboardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutes", function() { return DashboardRoutes; });
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");

var DashboardRoutes = [
    {
        path: '',
        children: [{
                path: 'dashboard',
                component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map