(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mapimg{\n    background-image: url('image_placeholder2.jpeg');\n    background-size: cover;\n    width: 100%;\n    border-radius: 6px;\n    pointer-events: none;\n    box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n    vertical-align: middle;\n    border-style: none;\n    height: 220px;\n    overflow: hidden;\n    -webkit-filter: brightness(97%);\n            filter: brightness(97%)\n}\n#map{\n    display: none;\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n      <h4>Your Statistics</h4>\n      <div class=\"row\">\n        <div class=\"col-lg-3 col-md-6 col-sm-6\">\n          <div class=\"card card-stats\">\n            <div class=\"card-header card-header-success card-header-icon\">\n              <div class=\"card-icon\">\n                <i class=\"material-icons\">device_hub</i>\n              </div>\n              <p class=\"card-category\">Concept Maps</p>\n              <h3 class=\"card-title\">{{this.user.maps.length}}</h3>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"stats\">\n                <i class=\"material-icons text-success\">plus_one</i>\n                <a (click)=\"newMap($event)\" class=\"text-primary\" href=\"\">Create a new...</a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6 col-sm-6\">\n          <div class=\"card card-stats\">\n            <div class=\"card-header card-header-warning card-header-icon\">\n              <div class=\"card-icon\">\n                <i class=\"material-icons\">group</i>\n              </div>\n              <p class=\"card-category\">Groups</p>\n              <h3 class=\"card-title\">{{this.user.groups.length}}</h3>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"stats\">\n                <i class=\"material-icons text-warning\">group_add</i> \n                <a routerLink=\"/edit/cmap\" class=\"text-primary\" href=\"\"> Manage your groups...</a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6 col-sm-6\">\n          <div class=\"card card-stats\">\n            <div class=\"card-header card-header-danger card-header-icon\">\n              <div class=\"card-icon\">\n                  <i class=\"fas fa-user-tag\"></i>\n              </div>\n              <p class=\"card-category\">Following</p>\n              <h3 class=\"card-title\">{{this.user.following.length}}</h3>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"stats\">\n                <i class=\"material-icons text-danger\">timeline</i> \n                <a routerLink=\"/pages/timeline\" class=\"text-primary\" href=\"\"> View timeline...</a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6 col-sm-6\">\n          <div class=\"card card-stats\">\n            <div class=\"card-header card-header-info card-header-icon\">\n              <div class=\"card-icon\">\n                <i class=\"fa fa-twitter\"></i>\n              </div>\n              <p class=\"card-category\">Followers</p>\n              <h3 class=\"card-title\">+{{this.user.followers.length}}</h3>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"stats\">\n                <i class=\"material-icons text-info\">share</i> \n                <a routerLink=\"/edit/cmap\" class=\"text-primary\" href=\"\"> Manage your maps access level...</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h6>Your recent maps...</h6>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"card card-product\" *ngIf=\"images[0]\">\n            <div class=\"card-header card-header-image\" data-header-animation=\"true\">\n              <a href=\"#pablo\">\n                <div class=\"mapimg\" [innerHTML]=\"images[0]\"> </div>\n              </a>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"card-actions text-center\">\n                <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link fix-broken-card\">\n                  <i class=\"material-icons\">build</i> Fix Header!\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-default btn-link\" matTooltip=\"View\" [matTooltipPosition]=\"'below'\" (click)=\"click(0)\">\n                  <i class=\"material-icons\">art_track</i>\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-success btn-link\" matTooltip=\"Edit\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">edit</i>\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link\" matTooltip=\"Remove\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">close</i>\n                </button>\n              </div>\n              <h4 class=\"card-title\">\n                <a href=\"#pablo\">{{this.maps[0].title}}</a>\n              </h4>\n              <div class=\"card-description\">\n                {{this.maps[0].description}}\n              </div>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"stats\">\n                <p class=\"card-category\"><i class=\"material-icons\">calendar_today</i> {{this.maps[0].last_update | date:'medium'}}</p>\n              </div>\n              <div class=\"stats\">\n                <p class=\"card-category\"><i class=\"material-icons\">favorite</i> 5</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card card-product\" *ngIf=\"images[1]\">\n            <div class=\"card-header card-header-image\" data-header-animation=\"true\">\n              <a href=\"#pablo\">\n                  <div class=\"mapimg\" [innerHTML]=\"images[1]\"> </div>\n              </a>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"card-actions text-center\">\n                <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link fix-broken-card\">\n                  <i class=\"material-icons\">build</i> Fix Header!\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-default btn-link\" matTooltip=\"View\" [matTooltipPosition]=\"'below'\" (click)=\"click(1)\">\n                  <i class=\"material-icons\">art_track</i>\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-success btn-link\" matTooltip=\"Edit\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">edit</i>\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link\" matTooltip=\"Remove\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">close</i>\n                </button>\n              </div>\n              <h4 class=\"card-title\">\n                <a href=\"#pablo\">{{this.maps[1].title}}</a>\n              </h4>\n              <div class=\"card-description\">\n                {{this.maps[1].description}}\n              </div>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"stats\">\n                <p class=\"card-category\"><i class=\"material-icons\">calendar_today</i> {{this.maps[1].last_update | date:'medium'}}</p>\n              </div>\n              <div class=\"stats\">\n                <p class=\"card-category\"><i class=\"material-icons\">favorite</i> 5</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card card-product\" *ngIf=\"images[2]\">\n            <div class=\"card-header card-header-image\" data-header-animation=\"true\">\n              <a href=\"#pablo\">\n                  <div class=\"mapimg\" [innerHTML]=\"images[2]\"> </div>\n              </a>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"card-actions text-center\">\n                <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link fix-broken-card\">\n                  <i class=\"material-icons\">build</i> Fix Header!\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-default btn-link\" matTooltip=\"View\" [matTooltipPosition]=\"'below'\" (click)=\"click(2)\">\n                  <i class=\"material-icons\">art_track</i>\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-success btn-link\" matTooltip=\"Edit\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">edit</i>\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link\" matTooltip=\"Remove\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">close</i>\n                </button>\n              </div>\n              <h4 class=\"card-title\">\n                <a href=\"#pablo\">{{this.maps[2].title}}</a>\n              </h4>\n              <div class=\"card-description\">\n                {{this.maps[2].description}}\n              </div>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"stats\">\n                <p class=\"card-category\"><i class=\"material-icons\">calendar_today</i> {{this.maps[2].last_update | date:'medium'}}</p>\n              </div>\n              <div class=\"stats\">\n                <p class=\"card-category\"><i class=\"material-icons\">favorite</i> 5</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n<div id=\"map\" #myDiagramDiv></div>"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_index_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/index.service */ "./src/app/_services/index.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(http, _sanitizer, authServicve, mapService, meService, router, modelService) {
        this.http = http;
        this._sanitizer = _sanitizer;
        this.authServicve = authServicve;
        this.mapService = mapService;
        this.meService = meService;
        this.router = router;
        this.modelService = modelService;
        this.images = new Array();
        this.idMap = new Array();
        this.versions = new Array();
        this.user = JSON.parse(this.authServicve.getCurrentUser());
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.meService.updateDashboardMaps()
            .subscribe(function (maps) {
            _this.maps = maps;
            _this.meService.updateDashboardMapsVersions(_this.maps)
                .subscribe(function (versions) {
                versions.forEach(function (v) {
                    //this.versions.findIndex(item => item.map._id == v.map._id) === -1 ? this.versions.push(v) : {} ;
                    _this.maps.forEach(function (m, i) {
                        if (m._id == v.map._id) {
                            _this.versions[i] = v;
                        }
                    });
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
    DashboardComponent.prototype.ngAfterViewInit = function () {
    };
    DashboardComponent.prototype.click = function (n) {
        this.mapService.setCurrentMap(this.maps[n]);
        this.router.navigate(['view', 'map']);
    };
    DashboardComponent.prototype.newMap = function (e) {
        e.preventDefault();
        this.modelService.removeCurrentModel();
        this.mapService.removeCurrentMap();
        this.router.navigate(['edit', 'cmap']);
    };
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
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"],
            _services_index_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_index_service__WEBPACK_IMPORTED_MODULE_4__["MapService"],
            _services_index_service__WEBPACK_IMPORTED_MODULE_4__["MeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_index_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"]])
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
                _app_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
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