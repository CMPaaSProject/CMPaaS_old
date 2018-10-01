(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-manage-module"],{

/***/ "./src/app/manage/groups/add/addgroup.component.css":
/*!**********************************************************!*\
  !*** ./src/app/manage/groups/add/addgroup.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-top{\r\n    margin-top: 20px;\r\n}"

/***/ }),

/***/ "./src/app/manage/groups/add/addgroup.component.html":
/*!***********************************************************!*\
  !*** ./src/app/manage/groups/add/addgroup.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"header text-center\">\r\n            <h3 class=\"title\">Create a new group</h3>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card \">\r\n                  <div class=\"card-header card-header-icon card-header-success\">\r\n                    <div class=\"card-icon\">\r\n                        <i class=\"material-icons\">group_add</i>\r\n                    </div>\r\n                    <h4 class=\"card-title\">Group - <small class=\"description\">Basic Informations</small></h4>\r\n                  </div>\r\n                  <div class=\"card-body \">\r\n                    <h3 class=\"text-center\"></h3>\r\n                    <form method=\"#\" action=\"#\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-9\">\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                    <input matInput placeholder=\"Group short name\" type=\"text\" [(ngModel)]=\"group.name\" name=\"name\">\r\n                                </mat-form-field> \r\n                            </div>\r\n                            <div class=\"col-md-3 ml-auto text-right margin-top\">\r\n                                <mat-checkbox color=\"primary\" [(ngModel)]=\"group.isPublic\" name=\"isPublic\">Is public?</mat-checkbox>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                    <mat-label>Group Description</mat-label>\r\n                                    <textarea matInput matTextareaAutosize matAutosizeMinRows=4 matAutosizeMaxRows=6 [(ngModel)]=\"group.description\" name=\"description\"></textarea>\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12 text-center\">\r\n                            <button mat-raised-button class=\"btn btn-success\" (click)=\"create()\">\r\n                                Create\r\n                            </button>\r\n                            <button mat-raised-button class=\"btn btn-danger\" (click)=\"cancel()\">\r\n                                Cancel\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6 ml-auto\">\r\n                <div class=\"card \">\r\n                    <div class=\"card-header card-header-icon card-header-info\">\r\n                    <div class=\"card-icon\">\r\n                        <i class=\"material-icons\">card_membership</i>\r\n                    </div>\r\n                    <h4 class=\"card-title\">Members - <small class=\"description\">Add users to this group</small></h4>\r\n                    </div>\r\n                    <div class=\"card-body \">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-8 ml-auto mr-auto\">\r\n                                <div class=\"input-group no-border\">\r\n                                    <input type=\"text\" [(ngModel)]=\"search\" class=\"form-control\" placeholder=\"Add by username...\" [ngModelOptions]=\"{standalone: true}\">\r\n                                    <button mat-raised-button (click)=\"findAndAddUser($event)\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                                        <i class=\"material-icons\">playlist_add</i>\r\n                                        <div class=\"ripple-container\"></div>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"material-datatables\">\r\n                            <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                                <thead>\r\n                                    <tr>\r\n                                    <th>Username</th>\r\n                                    <th class=\"disabled-sorting text-right\">Actions</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tfoot>\r\n                                    <tr>\r\n                                    <th>Username</th>\r\n                                    <th class=\"disabled-sorting text-right\">Actions</th>\r\n                                    </tr>\r\n                                </tfoot>\r\n                                <tbody>\r\n                                    \r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/manage/groups/add/addgroup.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/manage/groups/add/addgroup.component.ts ***!
  \*********************************************************/
/*! exports provided: AddGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGroupComponent", function() { return AddGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_index_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_models/index.model */ "./src/app/_models/index.model.ts");
/* harmony import */ var _services_index_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/index.service */ "./src/app/_services/index.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddGroupComponent = /** @class */ (function () {
    function AddGroupComponent(userService, groupService, authService) {
        this.userService = userService;
        this.groupService = groupService;
        this.authService = authService;
        this.group = new _models_index_model__WEBPACK_IMPORTED_MODULE_1__["Group"]();
        this.group.isPublic = false;
        this.group.users = [];
    }
    AddGroupComponent.prototype.ngOnInit = function () {
        this.dataTable = {
            headerRow: ['#', 'Username', 'Actions'],
            footerRow: ['#', 'Username', 'Actions'],
            dataRows: []
        };
    };
    AddGroupComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        $('#datatables').DataTable({
            "pagingType": "full_numbers",
            "lengthMenu": [
                [5, 10, 20, -1],
                [5, 10, 20, "All"]
            ],
            responsive: true,
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search records",
            }
        });
        var table = $('#datatables').DataTable();
        // Edit record
        table.on('click', '.edit', function (e) {
            var $tr = $(this).closest('tr');
            var data = table.row($tr).data();
            alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
            e.preventDefault();
        });
        // Delete a record
        table.on('click', '.remove', function (e) {
            var $tr = $('.remove').closest('tr');
            var data = table.row($tr).data();
            _this.removeUser(data[0]);
            table.row($tr).remove().draw();
            e.preventDefault();
        });
        //Like record
        table.on('click', '.like', function (e) {
            alert('You clicked on Like button');
            e.preventDefault();
        });
        $('.card .material-datatables label').addClass('form-group');
    };
    AddGroupComponent.prototype.create = function () {
        var _this = this;
        this.groupService.create(this.group)
            .subscribe(function (res) {
            _this.authService.updateUser()
                .subscribe(function (_) { }, function (error) { return console.log(error); });
        }, function (error) { return console.log(error); });
    };
    AddGroupComponent.prototype.findAndAddUser = function (e) {
        var _this = this;
        e.preventDefault();
        this.userService.searchByUserName(this.search)
            .subscribe(function (res) {
            var u = res[0];
            if (!_this.group.users.some(function (o) { return o.username == u.username; })) {
                _this.group.users.push(u);
                var table = $('#datatables').DataTable();
                table.row.add([u.username, '<a href="#" class="btn btn-link btn-danger btn-just-icon remove" style="float: right;height: 28px;margin-top: -7px;"><i class="material-icons">close</i></a>'])
                    .draw(true);
            }
        }, function (error) { return console.log(error); });
    };
    AddGroupComponent.prototype.removeUser = function (username) {
        this.group.users = this.group.users.filter(function (u) {
            return u.username != username;
        });
    };
    AddGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addgroup-cmp',
            template: __webpack_require__(/*! ./addgroup.component.html */ "./src/app/manage/groups/add/addgroup.component.html"),
            styles: [__webpack_require__(/*! ./addgroup.component.css */ "./src/app/manage/groups/add/addgroup.component.css")]
        }),
        __metadata("design:paramtypes", [_services_index_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_index_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"], _services_index_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AddGroupComponent);
    return AddGroupComponent;
}());



/***/ }),

/***/ "./src/app/manage/groups/managegroups.component.css":
/*!**********************************************************!*\
  !*** ./src/app/manage/groups/managegroups.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/manage/groups/managegroups.component.html":
/*!***********************************************************!*\
  !*** ./src/app/manage/groups/managegroups.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-header card-header-warning card-header-icon\">\r\n                    <div class=\"card-icon\">\r\n                      <i class=\"material-icons\">group</i>\r\n                    </div>\r\n                    <h4 class=\"card-title\">Your Groups</h4>\r\n                  </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"toolbar\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-9\">\r\n                                    <a routerLink=\"./add\" mat-raised-button mat-min-fab class=\"btn btn-success btn-round btn-fab\">\r\n                                        <i class=\"material-icons\">group_add</i>\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"col-md-3\">\r\n                                    <div class=\"togglebutton text-right\">\r\n                                        <label>\r\n                                            <input type=\"checkbox\" [checked]=\"isChecked\" (change)=\"isChecked = !isChecked\" (click)=\"change()\">\r\n                                            <span class=\"toggle\"></span>\r\n                                            Only your groups?\r\n                                        </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div> \r\n                    </div>\r\n                        <div class=\"material-datatables\">\r\n                          <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" *ngIf=\"this.loaded\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                                <thead>\r\n                                    <tr>\r\n                                      <th>{{ dataTable.headerRow[0] }}</th>\r\n                                      <th>{{ dataTable.headerRow[1] }}</th>\r\n                                      <th>{{ dataTable.headerRow[2] }}</th>\r\n                                      <th>{{ dataTable.headerRow[3] }}</th>\r\n                                      <th class=\"disabled-sorting text-right\">{{ dataTable.headerRow[4] }}</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tfoot>\r\n                                    <tr>\r\n                                      <th>{{ dataTable.footerRow[0] }}</th>\r\n                                      <th>{{ dataTable.footerRow[1] }}</th>\r\n                                      <th>{{ dataTable.footerRow[2] }}</th>\r\n                                      <th>{{ dataTable.footerRow[3] }}</th>\r\n                                      <th class=\"text-right\">{{ dataTable.footerRow[4] }}</th>\r\n                                    </tr>\r\n                                </tfoot>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let row of dataTable.dataRows\">\r\n                                        <td>{{row.name}}</td>\r\n                                        <td>{{row.description}}</td>\r\n                                        <td>{{row.isPublic}}</td>\r\n                                        <td>{{row.users.length}}</td>\r\n                                        <td class=\"text-right\">\r\n                                          <a href=\"#\" class=\"btn btn-link btn-info btn-just-icon like\"><i class=\"material-icons\">favorite</i></a>\r\n                                          <a href=\"#\" class=\"btn btn-link btn-warning btn-just-icon edit\"><i class=\"material-icons\">dvr</i></a>\r\n                                          <a href=\"#\" class=\"btn btn-link btn-danger btn-just-icon remove\"><i class=\"material-icons\">close</i></a>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                    <!-- end content-->\r\n                </div>\r\n                <!--  end card  -->\r\n            </div>\r\n            <!-- end col-md-12 -->\r\n        </div>\r\n        <!-- end row -->\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/manage/groups/managegroups.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/manage/groups/managegroups.component.ts ***!
  \*********************************************************/
/*! exports provided: ManageGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageGroupsComponent", function() { return ManageGroupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_me_me_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/me/me.service */ "./src/app/_services/me/me.service.ts");
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


var ManageGroupsComponent = /** @class */ (function () {
    function ManageGroupsComponent(meService) {
        this.meService = meService;
        this.loaded = false;
        this.rendered = false;
        this.isChecked = true;
    }
    ManageGroupsComponent.prototype.populate = function () {
        this.dataTable = {
            headerRow: ['Name', 'Description', 'Is Public', 'Members', 'Actions'],
            footerRow: ['Name', 'Description', 'Is Public', 'Members', 'Actions'],
            dataRows: this.groupList
        };
        this.loaded = true;
    };
    ManageGroupsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.meService.getGroups()
            .subscribe(function (data) {
            _this.groupList = data;
            _this.populate();
        });
    };
    ManageGroupsComponent.prototype.ngAfterViewInit = function () {
    };
    ManageGroupsComponent.prototype.ngAfterViewChecked = function () {
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
    ManageGroupsComponent.prototype.change = function () {
        console.log(this.isChecked);
    };
    ManageGroupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-groups-cmp',
            template: __webpack_require__(/*! ./managegroups.component.html */ "./src/app/manage/groups/managegroups.component.html"),
            styles: [__webpack_require__(/*! ./managegroups.component.css */ "./src/app/manage/groups/managegroups.component.css")]
        }),
        __metadata("design:paramtypes", [_services_me_me_service__WEBPACK_IMPORTED_MODULE_1__["MeService"]])
    ], ManageGroupsComponent);
    return ManageGroupsComponent;
}());



/***/ }),

/***/ "./src/app/manage/manage.module.ts":
/*!*****************************************!*\
  !*** ./src/app/manage/manage.module.ts ***!
  \*****************************************/
/*! exports provided: ManageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageModule", function() { return ManageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _manage_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage.routing */ "./src/app/manage/manage.routing.ts");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var _groups_managegroups_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./groups/managegroups.component */ "./src/app/manage/groups/managegroups.component.ts");
/* harmony import */ var _groups_add_addgroup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./groups/add/addgroup.component */ "./src/app/manage/groups/add/addgroup.component.ts");
/* harmony import */ var _maps_managemaps_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./maps/managemaps.component */ "./src/app/manage/maps/managemaps.component.ts");
/* harmony import */ var _edit_edit_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../edit/edit.module */ "./src/app/edit/edit.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ManageModule = /** @class */ (function () {
    function ManageModule() {
    }
    ManageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_manage_routing__WEBPACK_IMPORTED_MODULE_5__["ManageRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_6__["NouisliderModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_7__["TagInputModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _edit_edit_module__WEBPACK_IMPORTED_MODULE_11__["EditModule"]
            ],
            declarations: [
                _groups_managegroups_component__WEBPACK_IMPORTED_MODULE_8__["ManageGroupsComponent"],
                _groups_add_addgroup_component__WEBPACK_IMPORTED_MODULE_9__["AddGroupComponent"],
                _maps_managemaps_component__WEBPACK_IMPORTED_MODULE_10__["ManageMapsComponent"]
            ]
        })
    ], ManageModule);
    return ManageModule;
}());



/***/ }),

/***/ "./src/app/manage/manage.routing.ts":
/*!******************************************!*\
  !*** ./src/app/manage/manage.routing.ts ***!
  \******************************************/
/*! exports provided: ManageRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageRoutes", function() { return ManageRoutes; });
/* harmony import */ var _groups_managegroups_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./groups/managegroups.component */ "./src/app/manage/groups/managegroups.component.ts");
/* harmony import */ var _groups_add_addgroup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./groups/add/addgroup.component */ "./src/app/manage/groups/add/addgroup.component.ts");
/* harmony import */ var _maps_managemaps_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maps/managemaps.component */ "./src/app/manage/maps/managemaps.component.ts");



var ManageRoutes = [
    {
        path: '',
        children: [{
                path: 'groups',
                children: [
                    {
                        path: '',
                        component: _groups_managegroups_component__WEBPACK_IMPORTED_MODULE_0__["ManageGroupsComponent"]
                    }, {
                        path: 'add',
                        component: _groups_add_addgroup_component__WEBPACK_IMPORTED_MODULE_1__["AddGroupComponent"]
                    }
                ]
            }, {
                path: 'maps',
                component: _maps_managemaps_component__WEBPACK_IMPORTED_MODULE_2__["ManageMapsComponent"]
            }]
    }
];


/***/ }),

/***/ "./src/app/manage/maps/managemaps.component.css":
/*!******************************************************!*\
  !*** ./src/app/manage/maps/managemaps.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map{\r\n    display: none;\r\n}"

/***/ }),

/***/ "./src/app/manage/maps/managemaps.component.html":
/*!*******************************************************!*\
  !*** ./src/app/manage/maps/managemaps.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-header card-header-success card-header-icon\">\r\n                    <div class=\"card-icon\">\r\n                      <i class=\"material-icons\">device_hub</i>\r\n                    </div>\r\n                    <h4 class=\"card-title\">Your Concept Maps</h4>\r\n                  </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"toolbar\">\r\n                            <a (click)=\"newMap($event)\" mat-raised-button mat-min-fab class=\"btn btn-success btn-round btn-fab\">\r\n                                <i class=\"material-icons\">add</i>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"material-datatables\">\r\n                          <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" *ngIf=\"this.loaded\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                                <thead>\r\n                                    <tr>\r\n                                      <th>{{ dataTable.headerRow[0] }}</th>\r\n                                      <th>{{ dataTable.headerRow[1] }}</th>\r\n                                      <th>{{ dataTable.headerRow[2] }}</th>\r\n                                      <th>{{ dataTable.headerRow[3] }}</th>\r\n                                      <th class=\"disabled-sorting text-right\">{{ dataTable.headerRow[4] }}</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tfoot>\r\n                                    <tr>\r\n                                      <th>{{ dataTable.footerRow[0] }}</th>\r\n                                      <th>{{ dataTable.footerRow[1] }}</th>\r\n                                      <th>{{ dataTable.footerRow[2] }}</th>\r\n                                      <th>{{ dataTable.footerRow[3] }}</th>\r\n                                      <th class=\"text-right\">{{ dataTable.footerRow[4] }}</th>\r\n                                    </tr>\r\n                                </tfoot>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let row of dataTable.dataRows\">\r\n                                        <td>{{row._id}}</td>\r\n                                        <td>{{row.title}}</td>\r\n                                        <td>{{row.description}}</td>\r\n                                        <td>{{row.versions.length}}</td>\r\n                                        <td class=\"text-right\">\r\n                                          <a href=\"#\" class=\"btn btn-link btn-info btn-just-icon like\"><i class=\"material-icons\">favorite</i></a>\r\n                                          <a href=\"#\" class=\"btn btn-link btn-warning btn-just-icon edit\"><i class=\"material-icons\">dvr</i></a>\r\n                                          <a href=\"#\" class=\"btn btn-link btn-danger btn-just-icon remove\"><i class=\"material-icons\">close</i></a>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                    <!-- end content-->\r\n                </div>\r\n                <!--  end card  -->\r\n            </div>\r\n            <!-- end col-md-12 -->\r\n        </div>\r\n        <!-- end row -->\r\n    </div>\r\n</div>\r\n<conceptmap id=\"map\" #map1></conceptmap>"

/***/ }),

/***/ "./src/app/manage/maps/managemaps.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/manage/maps/managemaps.component.ts ***!
  \*****************************************************/
/*! exports provided: ManageMapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageMapsComponent", function() { return ManageMapsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_me_me_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/me/me.service */ "./src/app/_services/me/me.service.ts");
/* harmony import */ var _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../edit/conceptmap/conceptmap.component */ "./src/app/edit/conceptmap/conceptmap.component.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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





var ManageMapsComponent = /** @class */ (function () {
    function ManageMapsComponent(meService, router) {
        this.meService = meService;
        this.router = router;
        this.loaded = false;
        this.rendered = false;
        this.isChecked = true;
    }
    ManageMapsComponent.prototype.populate = function () {
        this.dataTable = {
            headerRow: ['id', 'Title', 'Description', 'Versions', 'Actions'],
            footerRow: ['id', 'Title', 'Description', 'Versions', 'Actions'],
            dataRows: this.mapList
        };
        this.loaded = true;
    };
    ManageMapsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.meService.getMaps()
            .subscribe(function (data) {
            _this.mapList = data;
            _this.populate();
        });
    };
    ManageMapsComponent.prototype.ngAfterViewInit = function () {
    };
    ManageMapsComponent.prototype.ngAfterViewChecked = function () {
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
    ManageMapsComponent.prototype.change = function () {
        console.log(this.isChecked);
    };
    ManageMapsComponent.prototype.newMap = function (e) {
        var _this = this;
        e.preventDefault();
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
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
                Object(_edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_2__["resetModel"])();
                _this.router.navigate(['edit', 'cmap']);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("map1"),
        __metadata("design:type", _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_2__["ConceptMapComponent"])
    ], ManageMapsComponent.prototype, "map1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myDiagramDiv'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ManageMapsComponent.prototype, "element", void 0);
    ManageMapsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-maps-cmp',
            template: __webpack_require__(/*! ./managemaps.component.html */ "./src/app/manage/maps/managemaps.component.html"),
            styles: [__webpack_require__(/*! ./managemaps.component.css */ "./src/app/manage/maps/managemaps.component.css")]
        }),
        __metadata("design:paramtypes", [_services_me_me_service__WEBPACK_IMPORTED_MODULE_1__["MeService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ManageMapsComponent);
    return ManageMapsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=manage-manage-module.js.map