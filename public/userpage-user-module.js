(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userpage-user-module"],{

/***/ "./src/app/userpage/user.component.html":
/*!**********************************************!*\
  !*** ./src/app/userpage/user.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-header-icon card-header-rose\">\r\n            <div class=\"card-icon\">\r\n              <i class=\"material-icons\">perm_identity</i>\r\n            </div>\r\n            <h4 class=\"card-title\">Edit Profile -\r\n              <small class=\"category\">Your profile informations</small>\r\n            </h4>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <form>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"bmd-label-floating\">Username (uneditable)</label>\r\n                    <input type=\"text\" class=\"form-control\" value=\"{{editUser.username}}\" disabled>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-5\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"bmd-label-floating\">E-Mail</label>\r\n                    <input type=\"email\" class=\"form-control\" value=\"{{editUser.email}}\" [disabled]=\"!editing\" #email (blur)='editUser.email = email.value'>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"bmd-label-floating\">Registered at</label>\r\n                    <input type=\"text\" class=\"form-control\" value=\"{{editUser.created | date:'medium'}}\" disabled>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"bmd-label-floating\">First Name</label>\r\n                    <input type=\"text\" class=\"form-control\" value=\"{{editUser.firstname}}\" [disabled]=\"!editing\" #firstname (blur)='editUser.firstname = firstname.value'>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-8\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"bmd-label-floating\">Surname</label>\r\n                    <input type=\"text\" class=\"form-control\" value=\"{{editUser.surname}}\" [disabled]=\"!editing\" #surname (blur)='editUser.surname = surname.value'>\r\n                  </div>\r\n                </div>  \r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"bmd-label-floating\">Country</label>\r\n                    <input type=\"text\" class=\"form-control\" value=\"{{editUser.locInfo.country}}\" [disabled]=\"!editing\" #country (blur)='editUser.locInfo.country = country.value'>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"bmd-label-floating\">Region / State</label>\r\n                    <input type=\"text\" class=\"form-control\" value=\"{{editUser.locInfo.regionName}}\" [disabled]=\"!editing\" #region (blur)='editUser.locInfo.regionName = region.value'>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"bmd-label-floating\">City</label>\r\n                    <input type=\"text\" class=\"form-control\" value=\"{{editUser.locInfo.city}}\" [disabled]=\"!editing\" #city (blur)='editUser.locInfo.city = city.value'>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"form-group\">\r\n                    <label>About Me</label>\r\n                    <div class=\"form-group\">\r\n                      <textarea class=\"form-control\" rows=\"5\" [disabled]=\"!editing\" [(ngModel)]=\"editUser.description\" name=\"description\"></textarea>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <button mat-raised-button type=\"submit\" class=\"btn btn-rose pull-right\" (click)=\"edit()\">{{editing?'Send':'Edit'}}</button>\r\n              <div class=\"clearfix\"></div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"card card-profile\">\r\n          <div class=\"card-avatar\">\r\n            <div class=\"picture\">\r\n              <img src=\"{{user.profile_picture}}\" class=\"picture-src\" id=\"wizardPicturePreview\" title=\"\" />\r\n              <input type=\"file\" id=\"wizard-picture\" #wizardPicture title=\"Click to change your profile picture\">\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <h6 class=\"card-category text-gray\">{{user.username}} </h6>\r\n            <h4 class=\"card-title\">{{user.firstname + ' ' + user.surname}}</h4>\r\n            <p class=\"card-description\">\r\n              {{user.description}}\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/userpage/user.component.ts":
/*!********************************************!*\
  !*** ./src/app/userpage/user.component.ts ***!
  \********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_me_me_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/me/me.service */ "./src/app/_services/me/me.service.ts");
/* harmony import */ var _services_index_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/index.service */ "./src/app/_services/index.service.ts");
/* harmony import */ var _services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/sidebar/sidebar.service */ "./src/app/_services/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = /** @class */ (function () {
    function UserComponent(meService, authService, sidebarService) {
        this.meService = meService;
        this.authService = authService;
        this.sidebarService = sidebarService;
        this.editing = false;
        this.user = JSON.parse(this.authService.getCurrentUser());
        this.editUser = JSON.parse(this.authService.getCurrentUser());
    }
    ;
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Prepare the preview for profile picture
        $(this.el.nativeElement).change(function (e, args) {
            var input = $(_this.el.nativeElement);
            var file = input[0].files[0];
            _this.meService.sendProfileImage(file).subscribe(function (_) {
                _this.sidebarService.updateUserProfile();
            });
            if (input[0].files && input[0].files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
                };
                reader.readAsDataURL(input[0].files[0]);
            }
        });
    };
    UserComponent.prototype.edit = function () {
        var _this = this;
        if (this.editing) {
            this.meService.updateInfo(this.editUser).subscribe(function (res) {
                _this.user = res;
                _this.editUser = res;
            });
        }
        this.editing = !this.editing;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('wizardPicture'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UserComponent.prototype, "el", void 0);
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-cmp',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/userpage/user.component.html")
        }),
        __metadata("design:paramtypes", [_services_me_me_service__WEBPACK_IMPORTED_MODULE_1__["MeService"], _services_index_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__["SidebarService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/userpage/user.module.ts":
/*!*****************************************!*\
  !*** ./src/app/userpage/user.module.ts ***!
  \*****************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.component */ "./src/app/userpage/user.component.ts");
/* harmony import */ var _user_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.routing */ "./src/app/userpage/user.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_user_routing__WEBPACK_IMPORTED_MODULE_5__["UserRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/userpage/user.routing.ts":
/*!******************************************!*\
  !*** ./src/app/userpage/user.routing.ts ***!
  \******************************************/
/*! exports provided: UserRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutes", function() { return UserRoutes; });
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.component */ "./src/app/userpage/user.component.ts");

var UserRoutes = [
    {
        path: '',
        children: [{
                path: 'pages/user',
                component: _user_component__WEBPACK_IMPORTED_MODULE_0__["UserComponent"]
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=userpage-user-module.js.map