(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["findpage-find-module"],{

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

/***/ "./src/app/findpage/find.component.css":
/*!*********************************************!*\
  !*** ./src/app/findpage/find.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    max-width: 50px;\r\n    max-height: 50px;\r\n    overflow: hidden;\r\n    overflow-x: hidden;\r\n    overflow-y: hidden;\r\n    border-radius: 50%;\r\n    border-top-left-radius: 50%;\r\n    border-top-right-radius: 50%;\r\n    border-bottom-right-radius: 50%;\r\n    border-bottom-left-radius: 50%;\r\n}"

/***/ }),

/***/ "./src/app/findpage/find.component.html":
/*!**********************************************!*\
  !*** ./src/app/findpage/find.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-header card-header-danger card-header-icon\">\r\n                    <div class=\"card-icon\">\r\n                      <i class=\"material-icons\">people</i>\r\n                    </div>\r\n                    <h4 class=\"card-title\">Users</h4>\r\n                  </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"material-datatables\">\r\n                          <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" *ngIf=\"this.loaded\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                                <thead>\r\n                                    <tr>\r\n                                      <th>{{ dataTable.headerRow[0] }}</th>\r\n                                      <th>{{ dataTable.headerRow[1] }}</th>\r\n                                      <th>{{ dataTable.headerRow[2] }}</th>\r\n                                      <th>{{ dataTable.headerRow[3] }}</th>\r\n                                      <th class=\"disabled-sorting text-right\">{{ dataTable.headerRow[4] }}</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tfoot>\r\n                                    <tr>\r\n                                      <th>{{ dataTable.footerRow[0] }}</th>\r\n                                      <th>{{ dataTable.footerRow[1] }}</th>\r\n                                      <th>{{ dataTable.footerRow[2] }}</th>\r\n                                      <th>{{ dataTable.footerRow[3] }}</th>\r\n                                      <th class=\"text-right\">{{ dataTable.footerRow[4] }}</th>\r\n                                    </tr>\r\n                                </tfoot>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let row of dataTable.dataRows\">\r\n                                        <td><img src=\"{{row.profile_picture}}\"></td>\r\n                                        <td>{{row.username}}</td>\r\n                                        <td>{{row.firstname + ' ' + row.surname}}</td>\r\n                                        <td>{{row.email}}</td>\r\n                                        <td class=\"text-right\">\r\n                                          <a href=\"#\" class=\"btn btn-link btn-info btn-just-icon {{following(row._id)?'favorite':'favorite_border'}}\"><i class=\"material-icons\">{{following(row._id)?'favorite':'favorite_border'}}</i></a>\r\n                                          <a href=\"#\" class=\"btn btn-link btn-warning btn-just-icon edit\"><i class=\"material-icons\">dvr</i></a>\r\n                                          <a href=\"#\" class=\"btn btn-link btn-danger btn-just-icon remove\"><i class=\"material-icons\">close</i></a>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                    <!-- end content-->\r\n                </div>\r\n                <!--  end card  -->\r\n            </div>\r\n            <!-- end col-md-12 -->\r\n        </div>\r\n        <!-- end row -->\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/findpage/find.component.ts":
/*!********************************************!*\
  !*** ./src/app/findpage/find.component.ts ***!
  \********************************************/
/*! exports provided: FindComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindComponent", function() { return FindComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/user/user.service */ "./src/app/_services/user/user.service.ts");
/* harmony import */ var _models_index_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models/index.model */ "./src/app/_models/index.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_index_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/index.service */ "./src/app/_services/index.service.ts");
/* harmony import */ var _services_follow_follow_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/follow/follow.service */ "./src/app/_services/follow/follow.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FindComponent = /** @class */ (function () {
    function FindComponent(userService, route, authService, followService) {
        this.userService = userService;
        this.route = route;
        this.authService = authService;
        this.followService = followService;
        this.loaded = false;
        this.rendered = false;
        this.search = this.route.snapshot.params.search || "";
        this.user = JSON.parse(this.authService.getCurrentUser());
    }
    FindComponent.prototype.populate = function () {
        this.dataTable = {
            headerRow: ['picture', 'Username', 'Full Name', 'e-Mail', 'Actions'],
            footerRow: ['picture', 'Username', 'Full Name', 'e-Mail', 'Actions'],
            dataRows: this.userList
        };
        this.loaded = true;
    };
    FindComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAll()
            .subscribe(function (data) {
            _this.userList = data;
            _this.populate();
        });
    };
    FindComponent.prototype.ngAfterViewInit = function () {
    };
    FindComponent.prototype.ngAfterViewChecked = function () {
        var that = this;
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
                    searchPlaceholder: "Search user",
                    zeroRecords: "No user found...",
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
            //Follow user
            table_1.on('click', '.favorite_border', function (e) {
                e.preventDefault();
                var $tr = $(this).closest('tr');
                var data = table_1.row($tr).data();
                var user = new _models_index_model__WEBPACK_IMPORTED_MODULE_2__["User"]();
                user.username = data[1];
                that.followService.follow(user)
                    .subscribe(function (_) {
                    that.authService.updateUser()
                        .subscribe(function (_) {
                        window.location.reload();
                    });
                });
            });
            table_1.on('click', '.favorite', function (e) {
                e.preventDefault();
                var $tr = $(this).closest('tr');
                var data = table_1.row($tr).data();
                var user = new _models_index_model__WEBPACK_IMPORTED_MODULE_2__["User"]();
                user.username = data[1];
                that.followService.unfollow(user)
                    .subscribe(function (_) {
                    that.authService.updateUser()
                        .subscribe(function (_) {
                        window.location.reload();
                    });
                });
            });
            $('.card .material-datatables label').addClass('form-group');
            table_1.search(this.search).draw();
            this.rendered = true;
        }
    };
    FindComponent.prototype.following = function (id) {
        var found = false;
        for (var i = 0; i < this.user.following.length; i++) {
            if (this.user.following[i]._id == id) {
                found = true;
                break;
            }
        }
        return found;
    };
    FindComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-find-cmp',
            template: __webpack_require__(/*! ./find.component.html */ "./src/app/findpage/find.component.html"),
            styles: [__webpack_require__(/*! ./find.component.css */ "./src/app/findpage/find.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_index_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_follow_follow_service__WEBPACK_IMPORTED_MODULE_5__["FollowService"]])
    ], FindComponent);
    return FindComponent;
}());



/***/ }),

/***/ "./src/app/findpage/find.module.ts":
/*!*****************************************!*\
  !*** ./src/app/findpage/find.module.ts ***!
  \*****************************************/
/*! exports provided: FindModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindModule", function() { return FindModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _find_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./find.component */ "./src/app/findpage/find.component.ts");
/* harmony import */ var _find_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./find.routing */ "./src/app/findpage/find.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FindModule = /** @class */ (function () {
    function FindModule() {
    }
    FindModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_find_routing__WEBPACK_IMPORTED_MODULE_5__["FindRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_find_component__WEBPACK_IMPORTED_MODULE_4__["FindComponent"]]
        })
    ], FindModule);
    return FindModule;
}());



/***/ }),

/***/ "./src/app/findpage/find.routing.ts":
/*!******************************************!*\
  !*** ./src/app/findpage/find.routing.ts ***!
  \******************************************/
/*! exports provided: FindRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindRoutes", function() { return FindRoutes; });
/* harmony import */ var _find_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find.component */ "./src/app/findpage/find.component.ts");

var FindRoutes = [
    {
        path: '',
        children: [{
                path: 'pages/find',
                component: _find_component__WEBPACK_IMPORTED_MODULE_0__["FindComponent"]
            }, {
                path: 'pages/find/:search',
                component: _find_component__WEBPACK_IMPORTED_MODULE_0__["FindComponent"]
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=findpage-find-module.js.map