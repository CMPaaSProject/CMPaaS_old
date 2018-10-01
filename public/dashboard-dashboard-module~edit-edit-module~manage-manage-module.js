(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module~edit-edit-module~manage-manage-module"],{

/***/ "./src/app/_models/conceptmap.model.ts":
/*!*********************************************!*\
  !*** ./src/app/_models/conceptmap.model.ts ***!
  \*********************************************/
/*! exports provided: ConceptMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConceptMap", function() { return ConceptMap; });
var ConceptMap = /** @class */ (function () {
    function ConceptMap() {
    }
    return ConceptMap;
}());



/***/ }),

/***/ "./src/app/_models/group.model.ts":
/*!****************************************!*\
  !*** ./src/app/_models/group.model.ts ***!
  \****************************************/
/*! exports provided: Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
var Group = /** @class */ (function () {
    function Group() {
    }
    return Group;
}());



/***/ }),

/***/ "./src/app/_models/index.model.ts":
/*!****************************************!*\
  !*** ./src/app/_models/index.model.ts ***!
  \****************************************/
/*! exports provided: User, ConceptMap, Group, Version, Permission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.model */ "./src/app/_models/user.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user_model__WEBPACK_IMPORTED_MODULE_0__["User"]; });

/* harmony import */ var _conceptmap_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conceptmap.model */ "./src/app/_models/conceptmap.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConceptMap", function() { return _conceptmap_model__WEBPACK_IMPORTED_MODULE_1__["ConceptMap"]; });

/* harmony import */ var _group_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group.model */ "./src/app/_models/group.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return _group_model__WEBPACK_IMPORTED_MODULE_2__["Group"]; });

/* harmony import */ var _version_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./version.model */ "./src/app/_models/version.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Version", function() { return _version_model__WEBPACK_IMPORTED_MODULE_3__["Version"]; });

/* harmony import */ var _permission_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./permission.model */ "./src/app/_models/permission.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Permission", function() { return _permission_model__WEBPACK_IMPORTED_MODULE_4__["Permission"]; });








/***/ }),

/***/ "./src/app/_models/permission.model.ts":
/*!*********************************************!*\
  !*** ./src/app/_models/permission.model.ts ***!
  \*********************************************/
/*! exports provided: Permission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Permission", function() { return Permission; });
var Permission = /** @class */ (function () {
    function Permission() {
        this.canView = true;
        this.canFork = true;
        this.canEdit = false;
    }
    return Permission;
}());



/***/ }),

/***/ "./src/app/_models/user.model.ts":
/*!***************************************!*\
  !*** ./src/app/_models/user.model.ts ***!
  \***************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/_models/version.model.ts":
/*!******************************************!*\
  !*** ./src/app/_models/version.model.ts ***!
  \******************************************/
/*! exports provided: Version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Version", function() { return Version; });
var Version = /** @class */ (function () {
    function Version() {
    }
    return Version;
}());



/***/ }),

/***/ "./src/app/edit/conceptmap/save/savemap.component.css":
/*!************************************************************!*\
  !*** ./src/app/edit/conceptmap/save/savemap.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content{\r\n    margin-top: 70px;\r\n    padding: 30px 15px;\r\n    min-height: calc(100vh - 123px);\r\n}\r\n.main-content .container-fluid{\r\n    width: 100%;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}\r\n.header{\r\n    margin-bottom: 30px;\r\n}\r\n.header .title{\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n.img{\r\n    position: relative;\r\n    padding: 0;\r\n    width: 100%;\r\n    overflow: hidden;\r\n}\r\nth{\r\n    font-weight: 400;\r\n    font-size: 1em !important;\r\n}\r\n.td-name{\r\n    min-width: 100px;\r\n}\r\n.th-small{\r\n    max-width: 5px;\r\n}"

/***/ }),

/***/ "./src/app/edit/conceptmap/save/savemap.component.html":
/*!*************************************************************!*\
  !*** ./src/app/edit/conceptmap/save/savemap.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"header text-center\">\r\n            <h3 class=\"title\">Save Concept Map</h3>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header card-header-icon card-header-primary\">\r\n                            <div class=\"card-icon\">\r\n                                <i class=\"material-icons\">assignment</i>\r\n                            </div>\r\n                            <h4 class=\"card-title\">\r\n                                Required Meta-Informations\r\n                            </h4>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12\">\r\n                                <form method=\"#\" action=\"#\">\r\n                                    <mat-form-field class=\"example-full-width\">\r\n                                        <input matInput placeholder=\"Map Title\" [(ngModel)]='map.title' name=\"title\" type=\"text\">\r\n                                    </mat-form-field>\r\n                                    <mat-form-field class=\"example-full-width\">\r\n                                            <input matInput placeholder=\"Question of investigation\" [(ngModel)]='map.question' name=\"question\" type=\"text\">\r\n                                        </mat-form-field>\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"bmd-label-floating\">Description</label>\r\n                                        <div class=\"form-group\">\r\n                                            <textarea class=\"form-control\" placeholder=\"Talk about the content of this map.\" rows=\"3\" [(ngModel)]='map.description' name=\"description\"></textarea>\r\n                                        </div>\r\n                                    </div>\r\n                                    <label>Keywords</label>\r\n                                    <tag-input [(ngModel)]='map.keywords' secondaryPlaceholder=\"Enter keyword\" placeholder=\"+ Keyword\" theme='filled-theme' [ngModelOptions]=\"{standalone: true}\"></tag-input>                                        \r\n                                </form>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12 text-center\">\r\n                                    <button mat-raised-button class=\"btn btn-success\" (click)=\"save()\">\r\n                                            <span class=\"btn-label\">\r\n                                                <i class=\"material-icons\">check</i>\r\n                                            </span>\r\n                                            Save\r\n                                    </button>\r\n                                    <button mat-raised-button class=\"btn btn-danger\" (click)=\"back()\">\r\n                                        <span class=\"btn-label\">\r\n                                            <i class=\"material-icons\">keyboard_arrow_left</i>\r\n                                        </span>\r\n                                        Back\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12 text-center\">\r\n                            <div class=\"img\" [innerHTML]=\"image\"> </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"card\">\r\n                            <div class=\"card-header card-header-icon card-header-info\">\r\n                                <div class=\"card-icon\">\r\n                                    <i class=\"material-icons\">share</i>\r\n                                </div>\r\n                                <h4 class=\"card-title\">\r\n                                    Share settings...\r\n                                </h4>\r\n                            </div>\r\n                            <div class=\"card-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-3\">\r\n                                        <ul class=\"nav nav-pills nav-pills-info flex-column\" role=\"tablist\">\r\n                                        <li class=\"nav-item\">\r\n                                            <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#link4\" role=\"tablist\">\r\n                                            Public\r\n                                            </a>\r\n                                        </li>\r\n                                        <li class=\"nav-item\">\r\n                                            <a class=\"nav-link\" data-toggle=\"tab\" href=\"#link5\" role=\"tablist\">\r\n                                            Group\r\n                                            </a>\r\n                                        </li>\r\n                                        <li class=\"nav-item\">\r\n                                            <a class=\"nav-link\" data-toggle=\"tab\" href=\"#link6\" role=\"tablist\">\r\n                                            Users\r\n                                            </a>\r\n                                        </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                    <div class=\"col-md-9\">\r\n                                        <div class=\"tab-content\">\r\n                                        <div class=\"tab-pane active\" id=\"link4\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-4\">\r\n                                                    Can view\r\n                                                </div>\r\n                                                <div class=\"col-md-4\">\r\n                                                    Can fork\r\n                                                </div>\r\n                                                <div class=\"col-md-4\">\r\n                                                    Can edit\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-4\">\r\n                                                    <div class=\"togglebutton\">    \r\n                                                        <label>\r\n                                                            <input type=\"checkbox\" [checked]=\"map.permissions.publicPermission.canView\" (change)=\"click('canView')\">\r\n                                                            <span class=\"toggle\"></span>\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-4\">\r\n                                                    <div class=\"togglebutton\">    \r\n                                                        <label>\r\n                                                            <input type=\"checkbox\" [checked]=\"map.permissions.publicPermission.canFork\" (change)=\"click('canFork')\">\r\n                                                            <span class=\"toggle\"></span>\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-4\">\r\n                                                    <div class=\"togglebutton\">    \r\n                                                        <label>\r\n                                                            <input type=\"checkbox\" [checked]=\"map.permissions.publicPermission.canEdit\" (change)=\"click('canEdit')\">\r\n                                                            <span class=\"toggle\"></span>\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-12\">\r\n                                                    <br />\r\n                                                    <h6>Permissions Description: </h6>\r\n                                                    <p *ngIf=\"!map.permissions.publicPermission.canView\">This map is completely private.</p>\r\n                                                    <p *ngIf=\"map.permissions.publicPermission.canView && !map.permissions.publicPermission.canFork && !map.permissions.publicPermission.canEdit\">Everyone can only view this map and its versions.</p>\r\n                                                    <p *ngIf=\"map.permissions.publicPermission.canFork && !map.permissions.publicPermission.canEdit\">Everyone can view this map and its versions and create/copy versions of this map.</p>\r\n                                                    <p *ngIf=\"map.permissions.publicPermission.canEdit\">Everyone has full access to this map and its versions.</p>\r\n                                                </div>\r\n                                            </div>\r\n                                            \r\n                                        </div>\r\n                                        <div class=\"tab-pane\" id=\"link5\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-12\">\r\n                                                    <div class=\"input-group no-border\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"search\" class=\"form-control\" placeholder=\"Group name...\" [ngModelOptions]=\"{standalone: true}\">\r\n                                                        <button mat-raised-button (click)=\"findAndAddGroup($event)\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                                                            <i class=\"material-icons\">playlist_add</i>\r\n                                                            <div class=\"ripple-container\"></div>\r\n                                                        </button>\r\n                                                    </div>\r\n                                                    <div class=\"table-responsive\" *ngIf=\"map.permissions.groups.length > 0\">\r\n                                                        <table class=\"table\">\r\n                                                            <thead>\r\n                                                                <tr>\r\n                                                                    <th class=\"text-center th-small\">#</th>\r\n                                                                    <th class=\"text-center\">Group Name</th>\r\n                                                                    <th class=\"text-center\">View</th>\r\n                                                                    <th class=\"text-center\">Fork</th>\r\n                                                                    <th class=\"text-center\">Edit</th>\r\n                                                                </tr>\r\n                                                            </thead>\r\n                                                            <tbody>\r\n                                                                <tr *ngFor=\"let row of map.permissions.groups; let i = index\">\r\n                                                                    <td class=\"td-actions th-small\">\r\n                                                                        <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"removeGroup(i)\">\r\n                                                                            <i class=\"material-icons\">close</i>\r\n                                                                        </button>\r\n                                                                    </td>\r\n                                                                    <td class=\"text-center td-name\">{{row.group.name}}</td>\r\n                                                                    <td class=\"text-center\">\r\n                                                                        <div class=\"togglebutton\">  \r\n                                                                            <label>\r\n                                                                                <input type=\"checkbox\" [checked]=\"row.permission.canView\" (change)=\"click('canView', 'groups', i)\">\r\n                                                                                <span class=\"toggle\"></span>\r\n                                                                            </label>\r\n                                                                        </div>\r\n                                                                    </td>\r\n                                                                    <td class=\"text-center\">\r\n                                                                        <div class=\"togglebutton\">  \r\n                                                                            <label>\r\n                                                                                <input type=\"checkbox\" [checked]=\"row.permission.canFork\" (change)=\"click('canFork', 'groups', i)\">\r\n                                                                                <span class=\"toggle\"></span>\r\n                                                                            </label>\r\n                                                                        </div>\r\n                                                                    </td>\r\n                                                                    <td class=\"text-center\">\r\n                                                                        <div class=\"togglebutton\">  \r\n                                                                            <label>\r\n                                                                                <input type=\"checkbox\" [checked]=\"row.permission.canEdit\" (change)=\"click('canEdit', 'groups', i)\">\r\n                                                                                <span class=\"toggle\"></span>\r\n                                                                            </label>\r\n                                                                        </div>\r\n                                                                    </td>\r\n                                                                </tr>\r\n                                                            </tbody>\r\n                                                        </table>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"tab-pane\" id=\"link6\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-12\">\r\n                                                    <div class=\"input-group no-border\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"search\" class=\"form-control\" placeholder=\"Username...\" [ngModelOptions]=\"{standalone: true}\">\r\n                                                        <button mat-raised-button (click)=\"findAndAddUser($event)\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                                                            <i class=\"material-icons\">playlist_add</i>\r\n                                                            <div class=\"ripple-container\"></div>\r\n                                                        </button>\r\n                                                    </div>\r\n                                                    <div class=\"table-responsive\" *ngIf=\"map.permissions.users.length > 0\">\r\n                                                        <table class=\"table\">\r\n                                                            <thead>\r\n                                                                <tr>\r\n                                                                    <th class=\"text-center th-small\">#</th>\r\n                                                                    <th class=\"text-center\">Username</th>\r\n                                                                    <th class=\"text-center\">View</th>\r\n                                                                    <th class=\"text-center\">Fork</th>\r\n                                                                    <th class=\"text-center\">Edit</th>\r\n                                                                </tr>\r\n                                                            </thead>\r\n                                                            <tbody>\r\n                                                                <tr *ngFor=\"let row of map.permissions.users; let i = index\">\r\n                                                                    <td class=\"td-actions th-small\">\r\n                                                                        <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"removeUser(i)\">\r\n                                                                            <i class=\"material-icons\">close</i>\r\n                                                                        </button>\r\n                                                                    </td>\r\n                                                                    <td class=\"text-center td-name\">{{row.user.username}}</td>\r\n                                                                    <td class=\"text-center\">\r\n                                                                        <div class=\"togglebutton\">  \r\n                                                                            <label>\r\n                                                                                <input type=\"checkbox\" [checked]=\"row.permission.canView\" (change)=\"click('canView', 'users', i)\">\r\n                                                                                <span class=\"toggle\"></span>\r\n                                                                            </label>\r\n                                                                        </div>\r\n                                                                    </td>\r\n                                                                    <td class=\"text-center\">\r\n                                                                        <div class=\"togglebutton\">  \r\n                                                                            <label>\r\n                                                                                <input type=\"checkbox\" [checked]=\"row.permission.canFork\" (change)=\"click('canFork', 'users', i)\">\r\n                                                                                <span class=\"toggle\"></span>\r\n                                                                            </label>\r\n                                                                        </div>\r\n                                                                    </td>\r\n                                                                    <td class=\"text-center\">\r\n                                                                        <div class=\"togglebutton\">  \r\n                                                                            <label>\r\n                                                                                <input type=\"checkbox\" [checked]=\"row.permission.canEdit\" (change)=\"click('canEdit', 'users', i)\">\r\n                                                                                <span class=\"toggle\"></span>\r\n                                                                            </label>\r\n                                                                        </div>\r\n                                                                    </td>\r\n                                                                </tr>\r\n                                                            </tbody>\r\n                                                        </table>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    \r\n                </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n  "

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
        this.map = new _models_index_model__WEBPACK_IMPORTED_MODULE_6__["ConceptMap"]();
        this.map.keywords = [];
        this.map.permissions = {
            publicPermission: new _models_index_model__WEBPACK_IMPORTED_MODULE_6__["Permission"](),
            groups: [],
            users: []
        };
        this.user = JSON.parse(this.authService.getCurrentUser());
    }
    SaveMapComponent.prototype.ngOnInit = function () {
        if (!!_conceptmap_component__WEBPACK_IMPORTED_MODULE_1__["myDiagram"]) {
            var serializer = new XMLSerializer();
            var svg = _conceptmap_component__WEBPACK_IMPORTED_MODULE_1__["myDiagram"].makeSvg({
                scale: 0.6,
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
    SaveMapComponent.prototype.click = function (bt, gu, i) {
        switch (bt) {
            case 'canView':
                if (gu) {
                    this.map.permissions[gu][i].permission.canView = !this.map.permissions[gu][i].permission.canView;
                    if (!this.map.permissions[gu][i].permission.canView) {
                        this.map.permissions[gu][i].permission.canFork = false;
                        this.map.permissions[gu][i].permission.canEdit = false;
                    }
                }
                else {
                    this.map.permissions.publicPermission.canView = !this.map.permissions.publicPermission.canView;
                    if (!this.map.permissions.publicPermission.canView) {
                        this.map.permissions.publicPermission.canFork = false;
                        this.map.permissions.publicPermission.canEdit = false;
                    }
                }
                break;
            case 'canFork':
                if (gu) {
                    this.map.permissions[gu][i].permission.canFork = !this.map.permissions[gu][i].permission.canFork;
                    if (this.map.permissions[gu][i].permission.canFork) {
                        this.map.permissions[gu][i].permission.canView = true;
                    }
                    else {
                        this.map.permissions[gu][i].permission.canEdit = false;
                    }
                }
                else {
                    this.map.permissions.publicPermission.canFork = !this.map.permissions.publicPermission.canFork;
                    if (this.map.permissions.publicPermission.canFork) {
                        this.map.permissions.publicPermission.canView = true;
                    }
                    else {
                        this.map.permissions.publicPermission.canEdit = false;
                    }
                }
                break;
            case 'canEdit':
                if (gu) {
                    this.map.permissions[gu][i].permission.canEdit = !this.map.permissions[gu][i].permission.canEdit;
                    if (this.map.permissions[gu][i].permission.canEdit) {
                        this.map.permissions[gu][i].permission.canView = true;
                        this.map.permissions[gu][i].permission.canFork = true;
                    }
                }
                else {
                    this.map.permissions.publicPermission.canEdit = !this.map.permissions.publicPermission.canEdit;
                    if (this.map.permissions.publicPermission.canEdit) {
                        this.map.permissions.publicPermission.canView = true;
                        this.map.permissions.publicPermission.canFork = true;
                    }
                }
                break;
        }
    };
    SaveMapComponent.prototype.findAndAddGroup = function (e) {
        var _this = this;
        e.preventDefault();
        var group = this.user.groups.find(function (g) { return g.name === _this.search; });
        // let g = new Group();
        // g.name = this.search;
        // let a = {
        //     group: g,
        //     permission: new Permission()
        // }
        // this.map.permissions.groups.push(a);
    };
    SaveMapComponent.prototype.findAndAddUser = function (e) {
        e.preventDefault();
        var u = new _models_index_model__WEBPACK_IMPORTED_MODULE_6__["User"]();
        u.username = this.search;
        var a = {
            user: u,
            permission: new _models_index_model__WEBPACK_IMPORTED_MODULE_6__["Permission"]()
        };
        this.map.permissions.users.push(a);
    };
    SaveMapComponent.prototype.removeGroup = function (i) {
        this.map.permissions.groups.splice(i, 1);
    };
    SaveMapComponent.prototype.removeUser = function (i) {
        this.map.permissions.users.splice(i, 1);
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
            ],
            exports: [_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_8__["ConceptMapComponent"]]
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
//# sourceMappingURL=dashboard-dashboard-module~edit-edit-module~manage-manage-module.js.map