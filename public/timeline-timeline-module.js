(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["timeline-timeline-module"],{

/***/ "./src/app/timeline/timeline.component.css":
/*!*************************************************!*\
  !*** ./src/app/timeline/timeline.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mapimg{\n    padding: 10px 10px;\n    background-image: url('image_placeholder2.jpeg');\n    background-size: cover;\n    width: 100%;\n    border-radius: 6px;\n    pointer-events: none;\n    box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n    vertical-align: middle;\n    border-style: none;\n    height: 300px;\n    overflow: hidden;\n    -webkit-filter: brightness(97%);\n            filter: brightness(97%)\n}\n#map{\n    display: none;\n}\n.foot{\n    display: flex;\n    justify-content: space-between;\n    vertical-align: middle;\n}\n.timeline-heading{\n    display: flex;\n    justify-content: space-between;\n    vertical-align: middle;\n}"

/***/ }),

/***/ "./src/app/timeline/timeline.component.html":
/*!**************************************************!*\
  !*** ./src/app/timeline/timeline.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"header text-center\">\n            <h3 class=\"title\">{{currentUser.firstname}} friends maps...</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card card-plain\">\n                    <div class=\"card-content\">\n                        <ul class=\"timeline\">\n                            <li class=\"timeline-inverted\" *ngFor=\"let value of currentUser.following; index as i; trackBy: index\">\n                                <div class=\"timeline-badge primary\">\n                                    <i class=\"material-icons\">filter_{{i+1}}</i>\n                                </div>\n                                <div class=\"timeline-panel\">\n                                    <div class=\"timeline-heading\">\n                                        <h6>{{value.maps && value.maps[value.maps.length-1].title}}</h6>\n                                        <div><i class=\"material-icons text-primary\">account_circle</i> {{value.username}}</div>\n                                    </div>\n                                    <div class=\"timeline-body\">\n                                        {{value.maps && value.maps[value.maps.length-1].description}}\n                                    </div>\n                                    <div class=\"mapimg\" [innerHTML]=\"images[i]\"> </div>\n                                    <hr>\n                                    <div class=\"foot\">\n                                        <h6>\n                                            <i class=\"material-icons text-primary\">access_time</i> Create at: {{value.maps && value.maps[value.maps.length-1].created | date:'medium'}}\n                                        </h6>\n                                        \n                                        <a href=\"\" (click)=\"like($event, i)\"><i class=\"material-icons text-danger\">favorite_border</i></a>\n                                    </div>\n                                    \n                                </div>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"map\" #myDiagramDiv></div>\n"

/***/ }),

/***/ "./src/app/timeline/timeline.component.ts":
/*!************************************************!*\
  !*** ./src/app/timeline/timeline.component.ts ***!
  \************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var gojs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gojs */ "./node_modules/gojs/release/go.js");
/* harmony import */ var gojs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gojs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_index_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/index.service */ "./src/app/_services/index.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
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
var TimelineComponent = /** @class */ (function () {
    function TimelineComponent(authService, userService, mapService, versionService, _sanitizer) {
        this.authService = authService;
        this.userService = userService;
        this.mapService = mapService;
        this.versionService = versionService;
        this._sanitizer = _sanitizer;
        this.images = new Array();
        this.idImages = new Array();
        this.currentUser = JSON.parse(authService.getCurrentUser());
    }
    TimelineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser.following.forEach(function (follow, i, arr) {
            _this.userService.getUserData(follow._id)
                .subscribe(function (u) {
                u.maps.forEach(function (map, i2, arr2) {
                    _this.mapService.getMapData(map._id)
                        .subscribe(function (m) {
                        m.versions.forEach(function (version, i3, arr3) {
                            _this.versionService.getVersionData(version._id)
                                .subscribe(function (v) {
                                arr3[i3] = v;
                                var serializer = new XMLSerializer();
                                var svg;
                                myDiagram.model = gojs__WEBPACK_IMPORTED_MODULE_1__["Model"].fromJson(v.content);
                                svg = myDiagram.makeSvg({
                                    scale: 0.8,
                                    maxSize: new gojs__WEBPACK_IMPORTED_MODULE_1__["Size"](NaN, 300)
                                });
                                _this.images.push(_this._sanitizer.bypassSecurityTrustHtml(serializer.serializeToString(svg)));
                                _this.idImages.push(v._id);
                            });
                        });
                        arr2[i2] = m;
                    });
                });
                arr[i] = u;
            });
        });
        // RESOLVER ESSA POG 
        var conceptNodeTemplate, relationNodeTemplate, normalLinkTemplate, orLinkTemplate, mapTemplate;
        var $$ = gojs__WEBPACK_IMPORTED_MODULE_1__["GraphObject"].make;
        myDiagram =
            $$(gojs__WEBPACK_IMPORTED_MODULE_1__["Diagram"], this.element.nativeElement, {
                initialContentAlignment: gojs__WEBPACK_IMPORTED_MODULE_1__["Spot"].Center,
            });
        conceptNodeTemplate =
            $$(gojs__WEBPACK_IMPORTED_MODULE_1__["Node"], "Auto", // the Shape will go around the TextBlock
            new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("location", "loc", gojs__WEBPACK_IMPORTED_MODULE_1__["Point"].parse).makeTwoWay(gojs__WEBPACK_IMPORTED_MODULE_1__["Point"].stringify), $$(gojs__WEBPACK_IMPORTED_MODULE_1__["Shape"], "Rectangle", {
                portId: "",
                strokeWidth: 1,
                fromLinkable: true,
                fromLinkableSelfNode: true,
                fromLinkableDuplicates: true,
                toLinkable: true,
                toLinkableSelfNode: true,
                toLinkableDuplicates: true,
                cursor: "pointer",
                fill: $$(gojs__WEBPACK_IMPORTED_MODULE_1__["Brush"], "Linear", { 0: "rgb(254, 201, 0)", 1: "rgb(254, 162, 0)" }),
                stroke: "black"
            }, 
            // Shape.fill is bound to Node.data.color
            new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("fill", "color")), $$(gojs__WEBPACK_IMPORTED_MODULE_1__["TextBlock"], {
                font: "bold 12px sans-serif",
                stroke: '#333',
                margin: 6,
                isMultiline: true,
                editable: true // allow in-place editing by user
            }, // some room around the text
            // TextBlock.text is bound to Node.data.key
            new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("text", "text").makeTwoWay()));
        relationNodeTemplate =
            $$(gojs__WEBPACK_IMPORTED_MODULE_1__["Node"], "Auto", // the Shape will go around the TextBlock
            new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("location", "loc", gojs__WEBPACK_IMPORTED_MODULE_1__["Point"].parse).makeTwoWay(gojs__WEBPACK_IMPORTED_MODULE_1__["Point"].stringify), $$(gojs__WEBPACK_IMPORTED_MODULE_1__["Shape"], "Rectangle", {
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
            }), $$(gojs__WEBPACK_IMPORTED_MODULE_1__["TextBlock"], {
                font: "bold 12px sans-serif",
                stroke: '#333',
                margin: 6,
                isMultiline: true,
                editable: true
            }, // some room around the text
            // TextBlock.text is bound to Node.data.key
            new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("text", "text").makeTwoWay()));
        normalLinkTemplate =
            $$(gojs__WEBPACK_IMPORTED_MODULE_1__["Link"], {
                toShortLength: 3,
                relinkableFrom: true,
                relinkableTo: true,
                curve: gojs__WEBPACK_IMPORTED_MODULE_1__["Link"].Bezier,
                reshapable: true
            }, // allow the user to relink existing links
            new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("points").makeTwoWay(), $$(gojs__WEBPACK_IMPORTED_MODULE_1__["Shape"], {
                strokeWidth: 1
            }, new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("stroke", "color").makeTwoWay()), $$(gojs__WEBPACK_IMPORTED_MODULE_1__["Shape"], {
                toArrow: "Standard",
                stroke: null
            }, new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("stroke", "color").makeTwoWay(), new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("fill", "color").makeTwoWay()));
        orLinkTemplate =
            $$(gojs__WEBPACK_IMPORTED_MODULE_1__["Link"], {
                toShortLength: 3,
                relinkableFrom: true,
                relinkableTo: true,
                curve: gojs__WEBPACK_IMPORTED_MODULE_1__["Link"].Bezier,
                reshapable: true
            }, // allow the user to relink existing links
            new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("points").makeTwoWay(), $$(gojs__WEBPACK_IMPORTED_MODULE_1__["Shape"], {
                strokeWidth: 1
            }, new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("stroke", "color").makeTwoWay()), $$(gojs__WEBPACK_IMPORTED_MODULE_1__["Shape"], {
                toArrow: "Standard",
                stroke: null
            }, new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("fill", "color").makeTwoWay()), $$(gojs__WEBPACK_IMPORTED_MODULE_1__["Shape"], {
                strokeWidth: 1,
                fromArrow: "BackwardSemiCircle"
            }, new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("fill", "color").makeTwoWay()));
        mapTemplate =
            $$(gojs__WEBPACK_IMPORTED_MODULE_1__["Group"], "Auto", {}, new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("isSubGraphExpanded", "expanded").makeTwoWay(), new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("location", "loc", gojs__WEBPACK_IMPORTED_MODULE_1__["Point"].parse).makeTwoWay(gojs__WEBPACK_IMPORTED_MODULE_1__["Point"].stringify), $$(gojs__WEBPACK_IMPORTED_MODULE_1__["Shape"], "RoundedRectangle", {
                strokeWidth: 1,
                portId: "",
                cursor: "pointer",
                fromLinkable: true,
                fromLinkableSelfNode: true,
                fromLinkableDuplicates: true,
                toLinkable: true,
                toLinkableSelfNode: true,
                toLinkableDuplicates: true
            }, new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("fill", "isHighlighted", function (h) { return h ? "rgba(255,0,0,0.2)" : $$(gojs__WEBPACK_IMPORTED_MODULE_1__["Brush"], "Linear", { 0: "rgba(224,234,252,0.5)", 1: "rgba(207,222,243,0.5)" }); }).ofObject()), $$(gojs__WEBPACK_IMPORTED_MODULE_1__["Panel"], "Vertical", {
                defaultAlignment: gojs__WEBPACK_IMPORTED_MODULE_1__["Spot"].Center,
                margin: 6
            }, $$(gojs__WEBPACK_IMPORTED_MODULE_1__["Panel"], "Horizontal", {
                defaultAlignment: gojs__WEBPACK_IMPORTED_MODULE_1__["Spot"].Top
            }, $$("SubGraphExpanderButton"), // the SubGraphExpanderButton is a panel that functions as a button to expand or collapse the subGraph
            $$(gojs__WEBPACK_IMPORTED_MODULE_1__["TextBlock"], {
                font: "bold 12px sans-serif",
                stroke: '#333',
                margin: 4,
                isMultiline: true,
                editable: true,
                alignment: gojs__WEBPACK_IMPORTED_MODULE_1__["Spot"].Center
            }, new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("text", "text").makeTwoWay())), $$(gojs__WEBPACK_IMPORTED_MODULE_1__["Placeholder"], // create a placeholder to represent the area where the contents of the group are
            {
                padding: new gojs__WEBPACK_IMPORTED_MODULE_1__["Margin"](0, 5)
            })));
        myDiagram.nodeTemplateMap.add("concept", conceptNodeTemplate);
        myDiagram.nodeTemplateMap.add("relation", relationNodeTemplate);
        myDiagram.linkTemplateMap.add("normal", normalLinkTemplate);
        myDiagram.linkTemplateMap.add("or", orLinkTemplate);
        myDiagram.groupTemplateMap.add("map", mapTemplate);
    };
    TimelineComponent.prototype.ngAfterViewInit = function () {
    };
    TimelineComponent.prototype.like = function (e, i) {
        e.preventDefault();
        console.log(i);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myDiagramDiv'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TimelineComponent.prototype, "element", void 0);
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline-cmp',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.css */ "./src/app/timeline/timeline.component.css")]
        }),
        __metadata("design:paramtypes", [_services_index_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_index_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_index_service__WEBPACK_IMPORTED_MODULE_2__["MapService"],
            _services_index_service__WEBPACK_IMPORTED_MODULE_2__["VersionService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/app/timeline/timeline.module.ts":
/*!*********************************************!*\
  !*** ./src/app/timeline/timeline.module.ts ***!
  \*********************************************/
/*! exports provided: TimelineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineModule", function() { return TimelineModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _timeline_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timeline.component */ "./src/app/timeline/timeline.component.ts");
/* harmony import */ var _timeline_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timeline.routing */ "./src/app/timeline/timeline.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TimelineModule = /** @class */ (function () {
    function TimelineModule() {
    }
    TimelineModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_timeline_routing__WEBPACK_IMPORTED_MODULE_5__["TimelineRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_timeline_component__WEBPACK_IMPORTED_MODULE_4__["TimelineComponent"]]
        })
    ], TimelineModule);
    return TimelineModule;
}());



/***/ }),

/***/ "./src/app/timeline/timeline.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/timeline/timeline.routing.ts ***!
  \**********************************************/
/*! exports provided: TimelineRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineRoutes", function() { return TimelineRoutes; });
/* harmony import */ var _timeline_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeline.component */ "./src/app/timeline/timeline.component.ts");

var TimelineRoutes = [
    {
        path: '',
        children: [{
                path: 'pages/timeline',
                component: _timeline_component__WEBPACK_IMPORTED_MODULE_0__["TimelineComponent"]
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=timeline-timeline-module.js.map