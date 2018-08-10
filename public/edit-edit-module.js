(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-edit-module"],{

/***/ "./src/app/edit/conceptmap/save/savemap.component.css":
/*!************************************************************!*\
  !*** ./src/app/edit/conceptmap/save/savemap.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content{\n    margin-top: 70px;\n    padding: 30px 15px;\n    min-height: calc(100vh - 123px);\n}\n.main-content .container-fluid{\n    width: 100%;\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto;\n}\n.header{\n    margin-bottom: 30px;\n}\n.header .title{\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n.img{\n    position: relative;\n    padding: 0;\n    width: 100%;\n    overflow: hidden;\n}"

/***/ }),

/***/ "./src/app/edit/conceptmap/save/savemap.component.html":
/*!*************************************************************!*\
  !*** ./src/app/edit/conceptmap/save/savemap.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"header text-center\">\n            <h3 class=\"title\">Save Concept Map</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                        <div class=\"card\">\n                            <div class=\"card-header card-header-icon card-header-primary\">\n                                <div class=\"card-icon\">\n                                    <i class=\"material-icons\">assignment</i>\n                                </div>\n                                <h4 class=\"card-title\">\n                                    Required Meta-Informations\n                                </h4>\n                            </div>\n                            <div class=\"card-body\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                    <form method=\"#\" action=\"#\">\n                                        <mat-form-field class=\"example-full-width\">\n                                            <input matInput placeholder=\"Map Title\" [(ngModel)]='map.title' name=\"title\" type=\"text\">\n                                        </mat-form-field>\n                                        <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Question of investigation\" [(ngModel)]='map.question' name=\"question\" type=\"text\">\n                                            </mat-form-field>\n                                        <div class=\"form-group\">\n                                            <label>Description</label>\n                                            <div class=\"form-group\">\n                                                <label class=\"bmd-label-floating\"> Talk about the content of this map.</label>\n                                                <textarea class=\"form-control\" rows=\"3\" [(ngModel)]='map.description' name=\"description\"></textarea>\n                                            </div>\n                                        </div>\n                                        <label>Keywords</label>\n                                        <tag-input [(ngModel)]='map.keywords' secondaryPlaceholder=\"Enter keyword\" placeholder=\"+ Keyword\" theme='filled-theme' [ngModelOptions]=\"{standalone: true}\"></tag-input>\n                                        <div class=\"togglebutton\">\n                                            <label>\n                                                Visibility level: \n                                                <input type=\"checkbox\" [checked]=\"map.isPublic\" (change)=\"map.isPublic = !map.isPublic\">\n                                                <span class=\"toggle\"></span>\n                                                {{map.isPublic?'Is public':'Is private'}}\n                                            </label>\n                                        </div>\n                                        \n                                    </form>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-12 text-center\">\n                                        <button mat-raised-button class=\"btn btn-success\" (click)=\"save()\">\n                                                <span class=\"btn-label\">\n                                                    <i class=\"material-icons\">check</i>\n                                                </span>\n                                                Save\n                                        </button>\n                                        <button mat-raised-button class=\"btn btn-danger\" (click)=\"back()\">\n                                            <span class=\"btn-label\">\n                                                <i class=\"material-icons\">keyboard_arrow_left</i>\n                                            </span>\n                                            Back\n                                        </button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"row\">\n                        <div class=\"card\">\n                            <div class=\"card-header card-header-icon card-header-success\">\n                                <div class=\"card-icon\">\n                                    <i class=\"material-icons\">image</i>\n                                </div>\n                                <h4 class=\"card-title\">\n                                    Image\n                                </h4>\n                            </div>\n                            <div class=\"card-body\">\n                                <div class=\"img\" [innerHTML]=\"image\"> </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"card\">\n                            <div class=\"card-header card-header-icon card-header-info\">\n                                <div class=\"card-icon\">\n                                    <i class=\"material-icons\">share</i>\n                                </div>\n                                <h4 class=\"card-title\">\n                                    Share with...\n                                </h4>\n                            </div>\n                            <div class=\"card-body\">\n                                \n                            </div>\n                        </div>\n                    </div>\n                </div>\n        </div>\n    </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/edit/conceptmap/save/savemap.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/edit/conceptmap/save/savemap.component.ts ***!
  \***********************************************************/
/*! exports provided: SaveMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveMapComponent", function() { return SaveMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _conceptmap_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../conceptmap.component */ "./src/app/edit/conceptmap/conceptmap.component.ts");
/* harmony import */ var gojs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gojs */ "./node_modules/gojs/release/go.js");
/* harmony import */ var gojs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gojs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_index_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_services/index.service */ "./src/app/_services/index.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_index_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_models/index.model */ "./src/app/_models/index.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SaveMapComponent = /** @class */ (function () {
    function SaveMapComponent(_sanitizer, mapService, router, authService) {
        this._sanitizer = _sanitizer;
        this.mapService = mapService;
        this.router = router;
        this.authService = authService;
        this.teste = false;
        this.map = new _models_index_model__WEBPACK_IMPORTED_MODULE_6__["ConceptMap"]();
        this.map.isPublic = true;
        this.map.keywords = [];
    }
    SaveMapComponent.prototype.ngOnInit = function () {
        this.regularItems = [];
        if (!!_conceptmap_component__WEBPACK_IMPORTED_MODULE_1__["myDiagram"]) {
            var serializer = new XMLSerializer();
            var svg = _conceptmap_component__WEBPACK_IMPORTED_MODULE_1__["myDiagram"].makeSvg({
                scale: 0.4,
                maxSize: new gojs__WEBPACK_IMPORTED_MODULE_2__["Size"](NaN, 220)
            });
            this.image = this._sanitizer.bypassSecurityTrustHtml(serializer.serializeToString(svg));
        }
    };
    SaveMapComponent.prototype.save = function () {
        var _this = this;
        var that = this;
        this.map.keywords = this.map.keywords.map(function (el) { return el.value; });
        this.mapService.create(this.map)
            .subscribe(function (data) {
            _this.mapService.setCurrentMap(data.map);
            _this.mapService.createVersion(_conceptmap_component__WEBPACK_IMPORTED_MODULE_1__["myDiagram"].model.toJson())
                .subscribe(function (_) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                    type: 'success',
                    html: 'Greate! <strong>' +
                        'Your map was saved' +
                        '</strong>. <br /> You will be redirect to your dashboard!',
                    confirmButtonClass: 'btn btn-success',
                    buttonsStyling: false
                }).then(function () {
                    that.authService.updateUser()
                        .subscribe(function (_) {
                        that.router.navigate(['dashboard']);
                    }, function (error) { return console.log(error); });
                });
            }, function (error) { return console.log(error); });
        }, function (error) { return console.log(error); });
    };
    SaveMapComponent.prototype.back = function () {
        this.router.navigate(['edit/cmap']);
    };
    SaveMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-savemap-cmp',
            template: __webpack_require__(/*! ./savemap.component.html */ "./src/app/edit/conceptmap/save/savemap.component.html"),
            styles: [__webpack_require__(/*! ./savemap.component.css */ "./src/app/edit/conceptmap/save/savemap.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            _services_index_service__WEBPACK_IMPORTED_MODULE_4__["MapService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _services_index_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], SaveMapComponent);
    return SaveMapComponent;
}());



/***/ }),

/***/ "./src/app/edit/edit.module.ts":
/*!*************************************!*\
  !*** ./src/app/edit/edit.module.ts ***!
  \*************************************/
/*! exports provided: EditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditModule", function() { return EditModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _edit_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit.routing */ "./src/app/edit/edit.routing.ts");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var _conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./conceptmap/conceptmap.component */ "./src/app/edit/conceptmap/conceptmap.component.ts");
/* harmony import */ var _conceptmap_save_savemap_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./conceptmap/save/savemap.component */ "./src/app/edit/conceptmap/save/savemap.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var EditModule = /** @class */ (function () {
    function EditModule() {
    }
    EditModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_edit_routing__WEBPACK_IMPORTED_MODULE_5__["EditRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_6__["NouisliderModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_7__["TagInputModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ],
            declarations: [
                _conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_8__["ConceptMapComponent"],
                _conceptmap_save_savemap_component__WEBPACK_IMPORTED_MODULE_9__["SaveMapComponent"]
            ]
        })
    ], EditModule);
    return EditModule;
}());



/***/ }),

/***/ "./src/app/edit/edit.routing.ts":
/*!**************************************!*\
  !*** ./src/app/edit/edit.routing.ts ***!
  \**************************************/
/*! exports provided: EditRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRoutes", function() { return EditRoutes; });
/* harmony import */ var _conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conceptmap/conceptmap.component */ "./src/app/edit/conceptmap/conceptmap.component.ts");
/* harmony import */ var _conceptmap_save_savemap_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conceptmap/save/savemap.component */ "./src/app/edit/conceptmap/save/savemap.component.ts");


var EditRoutes = [
    {
        path: '',
        children: [{
                path: 'cmap',
                children: [
                    {
                        path: '',
                        component: _conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_0__["ConceptMapComponent"]
                    }, {
                        path: 'save',
                        component: _conceptmap_save_savemap_component__WEBPACK_IMPORTED_MODULE_1__["SaveMapComponent"]
                    }
                ]
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=edit-edit-module.js.map