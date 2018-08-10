(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["findpage-find-module"],{

/***/ "./src/app/findpage/find.component.css":
/*!*********************************************!*\
  !*** ./src/app/findpage/find.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\n    max-width: 50px;\n    max-height: 50px;\n    overflow: hidden;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    border-radius: 50%;\n    border-top-left-radius: 50%;\n    border-top-right-radius: 50%;\n    border-bottom-right-radius: 50%;\n    border-bottom-left-radius: 50%;\n}"

/***/ }),

/***/ "./src/app/findpage/find.component.html":
/*!**********************************************!*\
  !*** ./src/app/findpage/find.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                  <div class=\"card-header card-header-danger card-header-icon\">\n                    <div class=\"card-icon\">\n                      <i class=\"material-icons\">people</i>\n                    </div>\n                    <h4 class=\"card-title\">Users</h4>\n                  </div>\n                    <div class=\"card-body\">\n                        <div class=\"material-datatables\">\n                          <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" *ngIf=\"this.loaded\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                                <thead>\n                                    <tr>\n                                      <th>{{ dataTable.headerRow[0] }}</th>\n                                      <th>{{ dataTable.headerRow[1] }}</th>\n                                      <th>{{ dataTable.headerRow[2] }}</th>\n                                      <th>{{ dataTable.headerRow[3] }}</th>\n                                      <th class=\"disabled-sorting text-right\">{{ dataTable.headerRow[4] }}</th>\n                                    </tr>\n                                </thead>\n                                <tfoot>\n                                    <tr>\n                                      <th>{{ dataTable.footerRow[0] }}</th>\n                                      <th>{{ dataTable.footerRow[1] }}</th>\n                                      <th>{{ dataTable.footerRow[2] }}</th>\n                                      <th>{{ dataTable.footerRow[3] }}</th>\n                                      <th class=\"text-right\">{{ dataTable.footerRow[4] }}</th>\n                                    </tr>\n                                </tfoot>\n                                <tbody>\n                                    <tr *ngFor=\"let row of dataTable.dataRows\">\n                                        <td><img src=\"{{row.profile_picture}}\"></td>\n                                        <td>{{row.username}}</td>\n                                        <td>{{row.firstname + ' ' + row.surname}}</td>\n                                        <td>{{row.email}}</td>\n                                        <td class=\"text-right\">\n                                          <a href=\"#\" class=\"btn btn-link btn-info btn-just-icon {{following(row._id)?'favorite':'favorite_border'}}\"><i class=\"material-icons\">{{following(row._id)?'favorite':'favorite_border'}}</i></a>\n                                          <a href=\"#\" class=\"btn btn-link btn-warning btn-just-icon edit\"><i class=\"material-icons\">dvr</i></a>\n                                          <a href=\"#\" class=\"btn btn-link btn-danger btn-just-icon remove\"><i class=\"material-icons\">close</i></a>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <!-- end content-->\n                </div>\n                <!--  end card  -->\n            </div>\n            <!-- end col-md-12 -->\n        </div>\n        <!-- end row -->\n    </div>\n</div>\n"

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