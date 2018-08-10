(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-view-module"],{

/***/ "./src/app/view/map/versions/viewmapversions.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/view/map/versions/viewmapversions.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn{\n    box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(244, 67, 54, 0.4);\n}\n.mapimg{\n    overflow: hidden;\n}\n.mapimg2{\n    background-size: cover;\n    width: 100%;\n    border-radius: 6px;\n    pointer-events: none;\n    vertical-align: middle;\n    border-style: none;\n    height: 400px;\n    overflow: hidden;\n    -webkit-filter: brightness(97%);\n            filter: brightness(97%)\n}\n#map{\n    display: none;\n}"

/***/ }),

/***/ "./src/app/view/map/versions/viewmapversions.component.html":
/*!******************************************************************!*\
  !*** ./src/app/view/map/versions/viewmapversions.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"header text-center\">\n            <h3 class=\"title\">Versions Visualization</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                        <div class=\"card-header card-header-tabs card-header-danger\">\n                          <div class=\"nav-tabs-navigation\">\n                            <div class=\"nav-tabs-wrapper\">\n                                <span class=\"nav-tabs-title\">Versions:</span>\n                              <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\n                                <li class=\"nav-item\">\n                                  <a class=\"nav-link active\" href=\"#list\" data-toggle=\"tab\">\n                                    <i class=\"material-icons\">view_list</i> List\n                                    <div class=\"ripple-container\"></div>\n                                  </a>\n                                </li>\n                                <li class=\"nav-item\">\n                                  <a class=\"nav-link\" href=\"#navigate\" data-toggle=\"tab\">\n                                    <i class=\"material-icons\">code</i> Navigate\n                                    <div class=\"ripple-container\"></div>\n                                  </a>\n                                </li>\n                                <li class=\"nav-item\">\n                                  <a class=\"nav-link\" href=\"#settings\" data-toggle=\"tab\">\n                                    <i class=\"material-icons\">cloud</i> Server\n                                    <div class=\"ripple-container\"></div>\n                                  </a>\n                                </li>\n                              </ul>\n                            </div>\n                          </div>\n                        </div>\n                          <div class=\"card-body\">\n                              <div class=\"tab-content\">\n                                  <div class=\"tab-pane active\" id=\"list\">\n                                      <table class=\"table\">\n                                            <thead>\n                                                    <tr>\n                                                      <th class=\"text-center\">Check</th>\n                                                      <th>Small Pic</th>\n                                                      <th>Last Update</th>\n                                                      <th>Options</th>\n                                                    </tr>\n                                                </thead>\n                                            <tbody>\n                                                <tr *ngFor=\"let row of versionList; let i = index\" [attr.data-index]=\"i\">\n                                                        <td>\n                                                            <div [ngSwitch]=\"row.checked\">\n                                                                <div *ngSwitchCase=\"true\">\n                                                                    <div class=\"form-check\">\n                                                                    <label class=\"form-check-label\">\n                                                                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                                        <span class=\"form-check-sign\">\n                                                                        <span class=\"check\"></span>\n                                                                        </span>\n                                                                    </label>\n                                                                    </div>\n                                                                </div>\n                                                                <div *ngSwitchDefault>\n                                                                    <div class=\"form-check\">\n                                                                    <label class=\"form-check-label\">\n                                                                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                                                        <span class=\"form-check-sign\">\n                                                                        <span class=\"check\"></span>\n                                                                        </span>\n                                                                    </label>\n                                                                    </div>\n                                                                </div>\n            \n                                                            </div>\n                                                        </td>\n                                                    <td><div class=\"mapimg\" [innerHTML]=\"images[i]\"> </div></td>\n                                                    <td>{{row.last_update | date:'medium'}}</td>\n                                                    <td class=\"td-actions text-right\">\n                                                        <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'left'\" class=\"btn btn-primary btn-link btn-sm\" (click)=\"edit(i)\">\n                                                            <i class=\"material-icons\">edit</i>\n                                                        </button>\n      \n                                                        <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'left'\" class=\"btn btn-danger btn-link btn-sm\">\n                                                            <i class=\"material-icons\">close</i>\n                                                        </button>\n                                                    </td>\n                                                 </tr>\n                                            </tbody>\n                                      </table>\n                                  </div>\n                                  <div class=\"tab-pane\" id=\"navigate\">\n                                     <div class=\"row\">\n                                         <div class=\"col-md-12 text-center\">\n                                             <div class=\"mapimg2\" [innerHTML]=\"images2[count]\"> </div>\n                                         </div>\n                                     </div>\n                                     <div class=\"row\">\n                                        <div class=\"col-md-12 text-center\">\n                                            <button mat-raised-button class=\"btn\">\n                                                <span class=\"btn-label\">\n                                                    <i class=\"material-icons\">keyboard_arrow_left</i>\n                                                </span>\n                                            </button>\n                                            <button mat-raised-button class=\"btn btn-success\">\n                                                <span class=\"btn-label\">\n                                                    <i class=\"material-icons\">edit</i>\n                                                </span>\n                                            </button>\n                                            <button mat-raised-button class=\"btn btn-danger\">\n                                                <span class=\"btn-label\">\n                                                    <i class=\"material-icons\">delete</i>\n                                                </span>\n                                            </button>\n                                            <button mat-raised-button class=\"btn btn\" (click)=\"next()\">\n                                                <span class=\"btn-label\">\n                                                    <i class=\"material-icons\">keyboard_arrow_right</i>\n                                                </span>\n                                            </button>\n                                        </div>\n                                     </div>\n                                  </div>\n                                  <div class=\"tab-pane\" id=\"settings\">\n                                      <table class=\"table\">\n                                            <tbody>\n                                                <tr *ngFor=\"let row of tasks3\">\n                                                    <td>\n                                                        <div [ngSwitch]=\"row.checked\">\n                                                            <div *ngSwitchCase=\"true\">\n                                                              <div class=\"form-check\">\n                                                                <label class=\"form-check-label\">\n                                                                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                                  <span class=\"form-check-sign\">\n                                                                    <span class=\"check\"></span>\n                                                                  </span>\n                                                                </label>\n                                                              </div>\n                                                            </div>\n                                                            <div *ngSwitchDefault>\n                                                              <div class=\"form-check\">\n                                                                <label class=\"form-check-label\">\n                                                                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                                                  <span class=\"form-check-sign\">\n                                                                    <span class=\"check\"></span>\n                                                                  </span>\n                                                                </label>\n                                                              </div>\n                                                            </div>\n      \n                                                        </div>\n                                                    </td>\n                                                    <td>{{row.title}}</td>\n                                                    <td class=\"td-actions text-right\">\n                                                        <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\"class=\"btn btn-primary btn-link btn-sm\">\n                                                            <i class=\"material-icons\">edit</i>\n                                                        </button>\n                                                        <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm\">\n                                                            <i class=\"material-icons\">close</i>\n                                                        </button>\n                                                    </td>\n                                                 </tr>\n                                            </tbody>\n                                      </table>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n            </div>\n            \n        </div>\n    </div>\n</div>\n\n<div id=\"map\" #myDiagramDiv></div>"

/***/ }),

/***/ "./src/app/view/map/versions/viewmapversions.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/view/map/versions/viewmapversions.component.ts ***!
  \****************************************************************/
/*! exports provided: ViewMapVersionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMapVersionsComponent", function() { return ViewMapVersionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_index_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/index.service */ "./src/app/_services/index.service.ts");
/* harmony import */ var gojs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gojs */ "./node_modules/gojs/release/go.js");
/* harmony import */ var gojs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gojs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
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





var myDiagram;
var ViewMapVersionsComponent = /** @class */ (function () {
    function ViewMapVersionsComponent(mapService, meService, _sanitizer, versionService, router) {
        this.mapService = mapService;
        this.meService = meService;
        this._sanitizer = _sanitizer;
        this.versionService = versionService;
        this.router = router;
        this.count = 0;
        this.images = new Array();
        this.images2 = new Array();
    }
    ViewMapVersionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var map = new Array();
        map.push(JSON.parse(this.mapService.getCurrentMap()));
        this.meService.updateDashboardMapsVersions(map)
            .subscribe(function (versions) {
            _this.versionList = versions;
            var serializer = new XMLSerializer();
            var svg;
            for (var i = 0; i < _this.versionList.length; i++) {
                myDiagram.model = gojs__WEBPACK_IMPORTED_MODULE_2__["Model"].fromJson(_this.versionList[i].content);
                svg = myDiagram.makeSvg({
                    scale: 0.5,
                    maxSize: new gojs__WEBPACK_IMPORTED_MODULE_2__["Size"](NaN, 220)
                });
                _this.images[i] = _this._sanitizer.bypassSecurityTrustHtml(serializer.serializeToString(svg));
                svg = myDiagram.makeSvg({
                    scale: 0.8,
                    maxSize: new gojs__WEBPACK_IMPORTED_MODULE_2__["Size"](NaN, 400)
                });
                _this.images2[i] = _this._sanitizer.bypassSecurityTrustHtml(serializer.serializeToString(svg));
            }
        }, function (error) { return console.log(error); });
        //POG AQUI TBM
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
    ViewMapVersionsComponent.prototype.edit = function (n) {
        this.versionService.setCurrentLoadVersion(this.versionList[n]);
        this.router.navigate(['edit', 'cmap']);
    };
    ViewMapVersionsComponent.prototype.next = function () {
        this.count++;
        this.count >= this.images2.length ? this.count = 0 : {};
        console.log(this.count);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myDiagramDiv'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ViewMapVersionsComponent.prototype, "element", void 0);
    ViewMapVersionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-map-versions-cmp',
            template: __webpack_require__(/*! ./viewmapversions.component.html */ "./src/app/view/map/versions/viewmapversions.component.html"),
            styles: [__webpack_require__(/*! ./viewmapversions.component.css */ "./src/app/view/map/versions/viewmapversions.component.css")]
        }),
        __metadata("design:paramtypes", [_services_index_service__WEBPACK_IMPORTED_MODULE_1__["MapService"],
            _services_index_service__WEBPACK_IMPORTED_MODULE_1__["MeService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            _services_index_service__WEBPACK_IMPORTED_MODULE_1__["VersionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ViewMapVersionsComponent);
    return ViewMapVersionsComponent;
}());



/***/ }),

/***/ "./src/app/view/map/viewmap.component.css":
/*!************************************************!*\
  !*** ./src/app/view/map/viewmap.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map{\n    display: none;\n}"

/***/ }),

/***/ "./src/app/view/map/viewmap.component.html":
/*!*************************************************!*\
  !*** ./src/app/view/map/viewmap.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"header text-center\">\n            <h3 class=\"title\">Concept Map Visualization</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                        <div class=\"card\">\n                            <div class=\"card-header card-header-icon card-header-primary\">\n                                <div class=\"card-icon\">\n                                    <i class=\"material-icons\">assignment</i>\n                                </div>\n                                <h4 class=\"card-title\">\n                                    Meta-Informations\n                                </h4>\n                            </div>\n                            <div class=\"card-body\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                    <form method=\"#\" action=\"#\">\n                                        <mat-form-field class=\"example-full-width\">\n                                            <input matInput placeholder=\"Map Title\" [(ngModel)]='currentMap.title' name=\"title\" type=\"text\">\n                                        </mat-form-field>\n                                        <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Question of investigation\" [(ngModel)]='currentMap.question' name=\"question\" type=\"text\">\n                                            </mat-form-field>\n                                        <div class=\"form-group\">\n                                            <label>Description</label>\n                                            <div class=\"form-group\">\n                                                <label class=\"bmd-label-floating\"> Talk about the content of this map.</label>\n                                                <textarea class=\"form-control\" rows=\"3\" [(ngModel)]='currentMap.description' name=\"description\"></textarea>\n                                            </div>\n                                        </div>\n                                        <label>Keywords</label>\n                                        <tag-input [(ngModel)]='currentMap.keywords' secondaryPlaceholder=\"Enter keyword\" placeholder=\"+ Keyword\" theme='filled-theme' [ngModelOptions]=\"{standalone: true}\"></tag-input>\n                                        <div class=\"togglebutton\">\n                                            <label>\n                                                Visibility level: \n                                                <input type=\"checkbox\" [checked]=\"currentMap.isPublic\" (change)=\"currentMap.isPublic = !currentMap.isPublic\">\n                                                <span class=\"toggle\"></span>\n                                                {{currentMap.isPublic?'Is public':'Is private'}}\n                                            </label>\n                                        </div>\n                                        \n                                    </form>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-12 text-center\">\n                                        <button mat-raised-button class=\"btn btn-success\" (click)=\"save()\">\n                                                <span class=\"btn-label\">\n                                                    <i class=\"material-icons\">update</i>\n                                                </span>\n                                                Update\n                                        </button>\n                                        <button mat-raised-button class=\"btn btn-danger\" (click)=\"back()\">\n                                            <span class=\"btn-label\">\n                                                <i class=\"material-icons\">delete</i>\n                                            </span>\n                                            Delete\n                                        </button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"row\">\n                        <div class=\"card\">\n                            <div class=\"card-header card-header-icon card-header-success\">\n                                <div class=\"card-icon\">\n                                    <i class=\"material-icons\">image</i>\n                                </div>\n                                <h4 class=\"card-title\">\n                                    Versions Images\n                                </h4>\n                            </div>\n                            <div class=\"card-body\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-10 text-center\">\n                                        <div class=\"img\" [innerHTML]=\"images[count]\"> </div>\n                                    </div>\n                                    <div class=\"col-md-2 text-center\">\n                                        <a routerLink=\"./versions\" mat-raised-button mat-min-fab class=\"btn btn-warning btn-round btn-fab btn-sm\" title=\"View history\">\n                                            <i class=\"material-icons\">history</i>\n                                        </a>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-12 text-center\">\n                                        <button mat-raised-button mat-min-fab class=\"btn btn-success btn-round btn-fab btn-sm\" (click)=\"previus()\">\n                                            <i class=\"material-icons\">chevron_left</i>\n                                        </button>\n                                        <button mat-raised-button mat-min-fab class=\"btn btn-success btn-round btn-fab btn-sm\" (click)=\"next()\">\n                                            <i class=\"material-icons\">chevron_right</i>\n                                        </button>\n                                    </div>\n                                    \n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"card\">\n                            <div class=\"card-header card-header-icon card-header-info\">\n                                <div class=\"card-icon\">\n                                    <i class=\"material-icons\">share</i>\n                                </div>\n                                <h4 class=\"card-title\">\n                                    Share with...\n                                </h4>\n                            </div>\n                            <div class=\"card-body\">\n                                \n                            </div>\n                        </div>\n                    </div>\n                </div>\n        </div>\n    </div>\n</div>    \n\n<div id=\"map\" #myDiagramDiv></div>"

/***/ }),

/***/ "./src/app/view/map/viewmap.component.ts":
/*!***********************************************!*\
  !*** ./src/app/view/map/viewmap.component.ts ***!
  \***********************************************/
/*! exports provided: ViewMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMapComponent", function() { return ViewMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_index_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/index.service */ "./src/app/_services/index.service.ts");
/* harmony import */ var gojs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gojs */ "./node_modules/gojs/release/go.js");
/* harmony import */ var gojs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gojs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
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





var myDiagram;
var ViewMapComponent = /** @class */ (function () {
    function ViewMapComponent(mapService, meService, _sanitizer, versionService, router) {
        this.mapService = mapService;
        this.meService = meService;
        this._sanitizer = _sanitizer;
        this.versionService = versionService;
        this.router = router;
        this.count = 0;
        this.images = new Array();
        this.images2 = new Array();
    }
    ViewMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        var map = new Array();
        map.push(this.currentMap = JSON.parse(this.mapService.getCurrentMap()));
        console.log(this.currentMap);
        this.meService.updateDashboardMapsVersions(map)
            .subscribe(function (versions) {
            _this.versionList = versions;
            var serializer = new XMLSerializer();
            var svg;
            for (var i = 0; i < _this.versionList.length; i++) {
                myDiagram.model = gojs__WEBPACK_IMPORTED_MODULE_2__["Model"].fromJson(_this.versionList[i].content);
                svg = myDiagram.makeSvg({
                    scale: 0.5,
                    maxSize: new gojs__WEBPACK_IMPORTED_MODULE_2__["Size"](NaN, 220)
                });
                _this.images[i] = _this._sanitizer.bypassSecurityTrustHtml(serializer.serializeToString(svg));
                svg = myDiagram.makeSvg({
                    scale: 0.8,
                    maxSize: new gojs__WEBPACK_IMPORTED_MODULE_2__["Size"](NaN, 400)
                });
                _this.images2[i] = _this._sanitizer.bypassSecurityTrustHtml(serializer.serializeToString(svg));
            }
        }, function (error) { return console.log(error); });
        //POG AQUI TBM
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
    ViewMapComponent.prototype.edit = function (n) {
        this.versionService.setCurrentLoadVersion(this.versionList[n]);
        this.router.navigate(['edit', 'cmap']);
    };
    ViewMapComponent.prototype.next = function () {
        this.count++;
        this.count >= this.images.length ? this.count = 0 : {};
    };
    ViewMapComponent.prototype.previus = function () {
        this.count--;
        this.count < 0 ? this.count = this.images.length - 1 : {};
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myDiagramDiv'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ViewMapComponent.prototype, "element", void 0);
    ViewMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-map-cmp',
            template: __webpack_require__(/*! ./viewmap.component.html */ "./src/app/view/map/viewmap.component.html"),
            styles: [__webpack_require__(/*! ./viewmap.component.css */ "./src/app/view/map/viewmap.component.css")]
        }),
        __metadata("design:paramtypes", [_services_index_service__WEBPACK_IMPORTED_MODULE_1__["MapService"],
            _services_index_service__WEBPACK_IMPORTED_MODULE_1__["MeService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            _services_index_service__WEBPACK_IMPORTED_MODULE_1__["VersionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ViewMapComponent);
    return ViewMapComponent;
}());



/***/ }),

/***/ "./src/app/view/view.module.ts":
/*!*************************************!*\
  !*** ./src/app/view/view.module.ts ***!
  \*************************************/
/*! exports provided: ViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModule", function() { return ViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _view_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view.routing */ "./src/app/view/view.routing.ts");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var _map_viewmap_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./map/viewmap.component */ "./src/app/view/map/viewmap.component.ts");
/* harmony import */ var _map_versions_viewmapversions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./map/versions/viewmapversions.component */ "./src/app/view/map/versions/viewmapversions.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ViewModule = /** @class */ (function () {
    function ViewModule() {
    }
    ViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_view_routing__WEBPACK_IMPORTED_MODULE_5__["ViewRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_6__["NouisliderModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_7__["TagInputModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ],
            declarations: [
                _map_viewmap_component__WEBPACK_IMPORTED_MODULE_8__["ViewMapComponent"],
                _map_versions_viewmapversions_component__WEBPACK_IMPORTED_MODULE_9__["ViewMapVersionsComponent"]
            ]
        })
    ], ViewModule);
    return ViewModule;
}());



/***/ }),

/***/ "./src/app/view/view.routing.ts":
/*!**************************************!*\
  !*** ./src/app/view/view.routing.ts ***!
  \**************************************/
/*! exports provided: ViewRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRoutes", function() { return ViewRoutes; });
/* harmony import */ var _map_viewmap_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map/viewmap.component */ "./src/app/view/map/viewmap.component.ts");
/* harmony import */ var _map_versions_viewmapversions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map/versions/viewmapversions.component */ "./src/app/view/map/versions/viewmapversions.component.ts");


var ViewRoutes = [
    {
        path: '',
        redirectTo: '/view/map',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [{
                path: 'map',
                children: [
                    {
                        path: '',
                        component: _map_viewmap_component__WEBPACK_IMPORTED_MODULE_0__["ViewMapComponent"]
                    },
                    {
                        path: 'versions',
                        component: _map_versions_viewmapversions_component__WEBPACK_IMPORTED_MODULE_1__["ViewMapVersionsComponent"]
                    }
                ]
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=view-view-module.js.map