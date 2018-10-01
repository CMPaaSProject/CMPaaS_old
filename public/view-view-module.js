(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-view-module"],{

/***/ "./src/app/view/map/versions/viewmapversions.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/view/map/versions/viewmapversions.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn{\r\n    box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(244, 67, 54, 0.4);\r\n}\r\n.mapimg{\r\n    overflow: hidden;\r\n}\r\n.mapimg2{\r\n    background-size: cover;\r\n    width: 100%;\r\n    border-radius: 6px;\r\n    pointer-events: none;\r\n    vertical-align: middle;\r\n    border-style: none;\r\n    height: 400px;\r\n    overflow: hidden;\r\n    -webkit-filter: brightness(97%);\r\n            filter: brightness(97%)\r\n}\r\n#map{\r\n    display: none;\r\n}"

/***/ }),

/***/ "./src/app/view/map/versions/viewmapversions.component.html":
/*!******************************************************************!*\
  !*** ./src/app/view/map/versions/viewmapversions.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"header text-center\">\r\n            <h3 class=\"title\">Versions Visualization</h3>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                        <div class=\"card-header card-header-tabs card-header-danger\">\r\n                          <div class=\"nav-tabs-navigation\">\r\n                            <div class=\"nav-tabs-wrapper\">\r\n                                <span class=\"nav-tabs-title\">Versions:</span>\r\n                              <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\r\n                                <li class=\"nav-item\">\r\n                                  <a class=\"nav-link active\" href=\"#list\" data-toggle=\"tab\">\r\n                                    <i class=\"material-icons\">view_list</i> List\r\n                                    <div class=\"ripple-container\"></div>\r\n                                  </a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                  <a class=\"nav-link\" href=\"#navigate\" data-toggle=\"tab\">\r\n                                    <i class=\"material-icons\">code</i> Navigate\r\n                                    <div class=\"ripple-container\"></div>\r\n                                  </a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                  <a class=\"nav-link\" href=\"#settings\" data-toggle=\"tab\">\r\n                                    <i class=\"material-icons\">cloud</i> Server\r\n                                    <div class=\"ripple-container\"></div>\r\n                                  </a>\r\n                                </li>\r\n                              </ul>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                          <div class=\"card-body\">\r\n                              <div class=\"tab-content\">\r\n                                  <div class=\"tab-pane active\" id=\"list\">\r\n                                      <table class=\"table\">\r\n                                            <thead>\r\n                                                    <tr>\r\n                                                      <th class=\"text-center\">Check</th>\r\n                                                      <th>Small Pic</th>\r\n                                                      <th>Last Update</th>\r\n                                                      <th>Options</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let row of versionList; let i = index\" [attr.data-index]=\"i\">\r\n                                                        <td>\r\n                                                            <div [ngSwitch]=\"row.checked\">\r\n                                                                <div *ngSwitchCase=\"true\">\r\n                                                                    <div class=\"form-check\">\r\n                                                                    <label class=\"form-check-label\">\r\n                                                                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\r\n                                                                        <span class=\"form-check-sign\">\r\n                                                                        <span class=\"check\"></span>\r\n                                                                        </span>\r\n                                                                    </label>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div *ngSwitchDefault>\r\n                                                                    <div class=\"form-check\">\r\n                                                                    <label class=\"form-check-label\">\r\n                                                                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\r\n                                                                        <span class=\"form-check-sign\">\r\n                                                                        <span class=\"check\"></span>\r\n                                                                        </span>\r\n                                                                    </label>\r\n                                                                    </div>\r\n                                                                </div>\r\n            \r\n                                                            </div>\r\n                                                        </td>\r\n                                                    <td><div class=\"mapimg\" [innerHTML]=\"images[i]\"> </div></td>\r\n                                                    <td>{{row.last_update | date:'medium'}}</td>\r\n                                                    <td class=\"td-actions text-right\">\r\n                                                        <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'left'\" class=\"btn btn-primary btn-link btn-sm\" (click)=\"edit(i)\">\r\n                                                            <i class=\"material-icons\">edit</i>\r\n                                                        </button>\r\n      \r\n                                                        <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'left'\" class=\"btn btn-danger btn-link btn-sm\">\r\n                                                            <i class=\"material-icons\">close</i>\r\n                                                        </button>\r\n                                                    </td>\r\n                                                 </tr>\r\n                                            </tbody>\r\n                                      </table>\r\n                                  </div>\r\n                                  <div class=\"tab-pane\" id=\"navigate\">\r\n                                     <div class=\"row\">\r\n                                         <div class=\"col-md-12 text-center\">\r\n                                             <div class=\"mapimg2\" [innerHTML]=\"images2[count]\"> </div>\r\n                                         </div>\r\n                                     </div>\r\n                                     <div class=\"row\">\r\n                                        <div class=\"col-md-12 text-center\">\r\n                                            <button mat-raised-button class=\"btn\">\r\n                                                <span class=\"btn-label\">\r\n                                                    <i class=\"material-icons\">keyboard_arrow_left</i>\r\n                                                </span>\r\n                                            </button>\r\n                                            <button mat-raised-button class=\"btn btn-success\">\r\n                                                <span class=\"btn-label\">\r\n                                                    <i class=\"material-icons\">edit</i>\r\n                                                </span>\r\n                                            </button>\r\n                                            <button mat-raised-button class=\"btn btn-danger\">\r\n                                                <span class=\"btn-label\">\r\n                                                    <i class=\"material-icons\">delete</i>\r\n                                                </span>\r\n                                            </button>\r\n                                            <button mat-raised-button class=\"btn btn\" (click)=\"next()\">\r\n                                                <span class=\"btn-label\">\r\n                                                    <i class=\"material-icons\">keyboard_arrow_right</i>\r\n                                                </span>\r\n                                            </button>\r\n                                        </div>\r\n                                     </div>\r\n                                  </div>\r\n                                  <div class=\"tab-pane\" id=\"settings\">\r\n                                      <table class=\"table\">\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let row of tasks3\">\r\n                                                    <td>\r\n                                                        <div [ngSwitch]=\"row.checked\">\r\n                                                            <div *ngSwitchCase=\"true\">\r\n                                                              <div class=\"form-check\">\r\n                                                                <label class=\"form-check-label\">\r\n                                                                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\r\n                                                                  <span class=\"form-check-sign\">\r\n                                                                    <span class=\"check\"></span>\r\n                                                                  </span>\r\n                                                                </label>\r\n                                                              </div>\r\n                                                            </div>\r\n                                                            <div *ngSwitchDefault>\r\n                                                              <div class=\"form-check\">\r\n                                                                <label class=\"form-check-label\">\r\n                                                                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\r\n                                                                  <span class=\"form-check-sign\">\r\n                                                                    <span class=\"check\"></span>\r\n                                                                  </span>\r\n                                                                </label>\r\n                                                              </div>\r\n                                                            </div>\r\n      \r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td>{{row.title}}</td>\r\n                                                    <td class=\"td-actions text-right\">\r\n                                                        <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\"class=\"btn btn-primary btn-link btn-sm\">\r\n                                                            <i class=\"material-icons\">edit</i>\r\n                                                        </button>\r\n                                                        <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm\">\r\n                                                            <i class=\"material-icons\">close</i>\r\n                                                        </button>\r\n                                                    </td>\r\n                                                 </tr>\r\n                                            </tbody>\r\n                                      </table>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n            </div>\r\n            \r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"map\" #myDiagramDiv></div>"

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
        this.meService.getMapsVersions(map)
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

module.exports = "#map{\r\n    display: none;\r\n}\r\n.img {\r\n    overflow: hidden;\r\n}\r\n.col-md-0 {\r\n    display: none;\r\n}\r\n.row div{\r\n    transition: all 0.5s;\r\n}"

/***/ }),

/***/ "./src/app/view/map/viewmap.component.html":
/*!*************************************************!*\
  !*** ./src/app/view/map/viewmap.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"header text-center\">\r\n            <h3 class=\"title\">Concept Map Visualization</h3>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\" id=\"metaInfo\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-icon card-header-primary\">\r\n                        <div class=\"card-icon\">\r\n                            <i class=\"material-icons\">assignment</i>\r\n                        </div>\r\n                        <h4 class=\"card-title\">\r\n                            Meta-Informations\r\n                            <div class=\"col-md-3 ml-auto text-right\">\r\n                                <button mat-raised-button mat-min-fab class=\"btn btn-primary btn-round btn-fab\" (click)=\"expand()\">\r\n                                    <i class=\"material-icons\">favorite</i>\r\n                                </button>\r\n                            </div>\r\n                        </h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                            <form method=\"#\" action=\"#\">\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                    <input matInput placeholder=\"Map Title\" [(ngModel)]='currentMap.title' name=\"title\" type=\"text\">\r\n                                </mat-form-field>\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                        <input matInput placeholder=\"Question of investigation\" [(ngModel)]='currentMap.question' name=\"question\" type=\"text\">\r\n                                    </mat-form-field>\r\n                                <div class=\"form-group\">\r\n                                    <label>Description</label>\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"bmd-label-floating\"> Talk about the content of this map.</label>\r\n                                        <textarea class=\"form-control\" rows=\"3\" [(ngModel)]='currentMap.description' name=\"description\"></textarea>\r\n                                    </div>\r\n                                </div>\r\n                                <label>Keywords</label>\r\n                                <tag-input [(ngModel)]='currentMap.keywords' secondaryPlaceholder=\"Enter keyword\" placeholder=\"+ Keyword\" theme='filled-theme' [ngModelOptions]=\"{standalone: true}\"></tag-input>\r\n                            </form>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12 text-center\">\r\n                                <button mat-raised-button class=\"btn btn-success\" (click)=\"save()\">\r\n                                        <span class=\"btn-label\">\r\n                                            <i class=\"material-icons\">update</i>\r\n                                        </span>\r\n                                        Update\r\n                                </button>\r\n                                <button mat-raised-button class=\"btn btn-danger\" (click)=\"back()\">\r\n                                    <span class=\"btn-label\">\r\n                                        <i class=\"material-icons\">delete</i>\r\n                                    </span>\r\n                                    Delete\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-0\" id=\"otherInfo\">\r\n                <div class=\"row\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header card-header-icon card-header-success\">\r\n                            <div class=\"card-icon\">\r\n                                <i class=\"material-icons\">image</i>\r\n                            </div>\r\n                            <h4 class=\"card-title\">\r\n                                Versions Preview\r\n                            </h4>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12 text-center\">\r\n                                    <div class=\"img\" [innerHTML]=\"images[count]\"> </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12 text-center\">\r\n                                    <button mat-raised-button mat-min-fab class=\"btn btn-success btn-round btn-fab btn-sm\" (click)=\"previus()\">\r\n                                        <i class=\"material-icons\">chevron_left</i>\r\n                                    </button>\r\n                                    <a routerLink=\"./versions\" mat-raised-button mat-min-fab class=\"btn btn-warning btn-round btn-fab btn-sm\" title=\"View history\">\r\n                                        <i class=\"material-icons\">history</i>\r\n                                    </a>\r\n                                    <button mat-raised-button mat-min-fab class=\"btn btn-success btn-round btn-fab btn-sm\" (click)=\"next()\">\r\n                                        <i class=\"material-icons\">chevron_right</i>\r\n                                    </button>\r\n                                </div>\r\n                                \r\n                            </div>\r\n                        </div>\r\n                    </div>    \r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header card-header-icon card-header-info\">\r\n                            <div class=\"card-icon\">\r\n                                <i class=\"material-icons\">share</i>\r\n                            </div>\r\n                            <h4 class=\"card-title\">\r\n                                Share with...\r\n                            </h4>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n        </div>\r\n        </div>\r\n        <!-- <app-comments-areas></app-comments-areas>  -->\r\n    </div>\r\n</div>\r\n   \r\n\r\n<div id=\"map\" #myDiagramDiv></div>"

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
        this.expanded = false;
        this.count = 0;
        this.images = new Array();
        this.images2 = new Array();
    }
    ViewMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        var map = new Array();
        map.push(this.currentMap = JSON.parse(this.mapService.getCurrentMap()));
        console.log(this.currentMap);
        this.meService.getMapsVersions(map)
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
                    scale: 1,
                    maxSize: new gojs__WEBPACK_IMPORTED_MODULE_2__["Size"](NaN, 440)
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
    ViewMapComponent.prototype.expand = function () {
        this.expanded = !this.expanded;
        $('#metaInfo').toggleClass('col-md-12 col-md-6');
        if (this.expanded) {
            setTimeout(function () {
                $('#otherInfo').toggleClass('col-md-0 col-md-6');
            }, 500);
        }
        else {
            $('#otherInfo').toggleClass('col-md-0 col-md-6');
        }
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
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
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
                _app_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"]
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