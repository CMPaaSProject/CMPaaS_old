(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/app/pages/lock/lock.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/lock/lock.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"wrapper wrapper-full-page\">\n  <div class=\"page-header lock-page header-filter\" style=\"background-image: url('./assets/img/bgufes.jpg'); background-size: cover; background-position: top center;\">\n    <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\n    <div class=\"container\">\n      <div class=\"col-md-4 ml-auto mr-auto\">\n        <div class=\"card card-profile text-center card-hidden\">\n          <div class=\"card-header \">\n            <div class=\"card-avatar\">\n              <a href=\"#pablo\">\n                <img class=\"img\" src=\"./assets/img/faces/wagner.jpg\">\n              </a>\n            </div>\n          </div>\n          <div class=\"card-body \">\n            <h4 class=\"card-title\">{{this.user.username}}</h4>\n            <mat-form-field class=\"example-full-width\">\n              <input matInput [(ngModel)]=\"this.user.password\" placeholder=\"Enter Password\" type=\"password\">\n            </mat-form-field>\n          </div>\n          <div class=\"card-footer justify-content-center\">\n            <a href=\"\" class=\"btn btn-rose btn-round\" (click)=\"login($event)\">Unlock</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <footer class=\"footer \">\n    <div class=\"container\">\n      <nav class=\"pull-left\">\n        <ul>\n          <li>\n            <a href=\"https://www.creative-tim.com\">\n              Creative Tim\n            </a>\n          </li>\n          <li>\n            <a href=\"https://creative-tim.com/about-us\">\n              About Us\n            </a>\n          </li>\n          <li>\n            <a href=\"http://blog.creative-tim.com\">\n              Blog\n            </a>\n          </li>\n          <li>\n            <a href=\"https://www.creative-tim.com/license\">\n              Licenses\n            </a>\n          </li>\n        </ul>\n      </nav>\n      <div class=\"copyright pull-right\">\n        &copy;\n          {{test | date: 'yyyy'}}, made by\n        <a href=\"http://www.informatica.ufes.br\" target=\"_blank\">UFES | PPGI | LIED |</a> CMPaaS Project.\n      </div>\n    </div>\n  </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/lock/lock.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/lock/lock.component.ts ***!
  \**********************************************/
/*! exports provided: LockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockComponent", function() { return LockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/auth/auth.service */ "./src/app/_services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LockComponent = /** @class */ (function () {
    function LockComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.test = new Date();
    }
    ;
    LockComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('lock-page');
        body.classList.add('off-canvas-sidebar');
        var card = document.getElementsByClassName('card')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);
        this.user = JSON.parse(this.authService.getCurrentUser());
    };
    LockComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('lock-page');
        body.classList.remove('off-canvas-sidebar');
    };
    LockComponent.prototype.login = function (e) {
        var _this = this;
        e.preventDefault();
        this.authService.login(this.user)
            .subscribe(function (data) {
            _this.router.navigate(['dashboard']);
        }, function (error) {
            $.notify({
                icon: 'notifications',
                message: error.error.userMessage
            }, {
                type: 'danger',
                timer: 1000,
                placement: {
                    from: 'top',
                    align: 'right'
                },
                template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert">' +
                    '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                    '<span data-notify="title">{1}</span> ' +
                    '<span data-notify="message">{2}</span>' +
                    '<div class="progress" data-notify="progressbar">' +
                    '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                    '</div>' +
                    '<a href="{3}" target="{4}" data-notify="url"></a>' +
                    '</div>'
            });
        });
    };
    LockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lock-cmp',
            template: __webpack_require__(/*! ./lock.component.html */ "./src/app/pages/lock/lock.component.html")
        }),
        __metadata("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LockComponent);
    return LockComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper wrapper-full-page\">\n  <div class=\"page-header login-page header-filter\" filter-color=\"black\" style=\"background-image: url('./assets/img/bgufes.jpg'); background-size: cover; background-position: top center;\">\n    <!--   you can change the color of the filter page using: data-color=\"blue | purple | green | orange | red | rose \" -->\n    <div class=\"container\">\n      <div class=\"col-lg-4 col-md-6 col-sm-6 ml-auto mr-auto\">\n        <form class=\"form\" method=\"\" action=\"\">\n          <div class=\"card card-login card-hidden\">\n            <div class=\"card-header card-header-danger text-center\">\n              <h4 class=\"card-title\">Log in</h4>\n              <div class=\"social-line\">\n                <a class=\"btn btn-just-icon btn-link btn-white\" (click)=\"fbLogin($event)\">\n                  <i class=\"fa fa-facebook-square\"></i>\n                </a>\n                <!-- <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-white\">\n                  <i class=\"fa fa-twitter\"></i>\n                </a> -->\n                <a id=\"googleBtn\" class=\"btn btn-just-icon btn-link btn-white\" (click)=\"gLogin($event)\">\n                  <i class=\"fa fa-google\"></i>\n                </a>\n              </div>\n            </div>\n            <div class=\"card-body \">\n              <p class=\"card-description text-center\">Or Be Classical</p>\n              <span class=\"bmd-form-group\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"material-icons\">face</i>\n                    </span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Username...\" [(ngModel)]=\"user.username\" name=\"username\">\n                </div>\n              </span>\n              <span class=\"bmd-form-group\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"material-icons\">lock_outline</i>\n                    </span>\n                  </div>\n                  <input type=\"password\" class=\"form-control\" placeholder=\"Password...\" [(ngModel)]=\"user.password\" name=\"password\">\n                </div>\n              </span>\n            </div>\n            <div class=\"card-footer justify-content-center\">\n              <button type=\"submit\" class=\"btn btn-rose btn-link btn-lg\" (click)=\"login()\">Lets Go</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n    <footer class=\"footer \">\n      <div class=\"container\">\n        <nav class=\"pull-left\">\n          <ul>\n            <li>\n              <a href=\"https://www.creative-tim.com\">\n                Creative Tim\n              </a>\n            </li>\n            <li>\n              <a href=\"https://creative-tim.com/about-us\">\n                About Us\n              </a>\n            </li>\n            <li>\n              <a href=\"http://blog.creative-tim.com\">\n                Blog\n              </a>\n            </li>\n            <li>\n              <a href=\"https://www.creative-tim.com/license\">\n                Licenses\n              </a>\n            </li>\n          </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n          &copy;\n            {{test | date: 'yyyy'}}, made by\n            <a href=\"http://www.informatica.ufes.br\" target=\"_blank\">UFES | PPGI | LIED |</a> CMPaaS Project.\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/auth/auth.service */ "./src/app/_services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_models/user.model */ "./src/app/_models/user.model.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/user/user.service */ "./src/app/_services/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(element, authService, userService, router, route) {
        this.element = element;
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.test = new Date();
        if (this.authService.getCurrentUser()) {
            this.router.navigate(['dashboard']);
        }
        else {
            this.nativeElement = element.nativeElement;
            this.sidebarVisible = false;
        }
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.user)
            .subscribe(function (_) {
            _this.router.navigate(['dashboard']);
        }, function (error) {
            $.notify({
                icon: 'notifications',
                message: error.error.userMessage
            }, {
                type: 'danger',
                timer: 1000,
                placement: {
                    from: 'top',
                    align: 'right'
                },
                template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert">' +
                    '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                    '<span data-notify="title">{1}</span> ' +
                    '<span data-notify="message">{2}</span>' +
                    '<div class="progress" data-notify="progressbar">' +
                    '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                    '</div>' +
                    '<a href="{3}" target="{4}" data-notify="url"></a>' +
                    '</div>'
            });
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        body.classList.add('off-canvas-sidebar');
        var card = document.getElementsByClassName('card')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);
        FB.init({
            appId: '673893062964918',
            cookie: true,
            xfbml: true,
            version: 'v3.0'
        });
    };
    LoginComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
        body.classList.remove('off-canvas-sidebar');
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        this.googleInit();
    };
    LoginComponent.prototype.googleInit = function () {
        var that = this;
        gapi.load('auth2', function () {
            that.auth2 = gapi.auth2.init({
                client_id: '305079514663-ddrsd311mqdghdhkcq4uu8be4i013e41.apps.googleusercontent.com',
                cookiepolici: 'single_host_origin',
                scope: 'profile email'
            });
            that.attachLogin(document.getElementById('googleBtn'));
        });
    };
    LoginComponent.prototype.attachLogin = function (element) {
        var that = this;
        this.auth2.attachClickHandler(element, {}, function (googleUser) {
            var user = new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
            var profile = googleUser.getBasicProfile();
            var auth = googleUser.getAuthResponse();
            user.google = {
                id: profile.getId(),
                access_token: auth.access_token,
                id_token: auth.id_token
            };
            that.authService.gLogin(user)
                .subscribe(function (res) {
                window.location.href = '/dashboard';
                // that.router.navigateByUrl('dashboard');
                // that.router.navigate(['dashboard']);
            }, function (error) {
                console.log(error);
                if (error.error.errorCode == "auth-3") {
                    var pass = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                    user.firstname = profile.getGivenName();
                    user.surname = profile.getFamilyName();
                    user.email = profile.getEmail();
                    user.username = user.email.split('@')[0];
                    user.password = pass;
                    user.profile_picture = profile.getImageUrl();
                    that.userService.create(user)
                        .subscribe(function (_) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                            type: 'success',
                            html: 'Greate! <strong>' +
                                'User creation successfull' +
                                '</strong>. <br /> You will be redirect!',
                            confirmButtonClass: 'btn btn-success',
                            buttonsStyling: false
                        }).then(function () {
                            that.authService.login(user)
                                .subscribe(function (res) {
                                window.location.href = '/dashboard';
                                // that.router.navigateByUrl('dashboard');
                                // that.router.navigate(['/dashboard']);
                            }, function (error) {
                                $.notify({
                                    icon: 'notifications',
                                    message: 'Oooopppss! <strong>' + error.error.userMessage + '</strong>. You can correct it and try again!'
                                }, {
                                    type: 'danger',
                                    timer: 250,
                                    placement: {
                                        from: 'top',
                                        align: 'right'
                                    }
                                });
                            });
                        });
                    }, function (error) {
                        $.notify({
                            icon: 'notifications',
                            message: error.error.userMessage
                        }, {
                            type: 'danger',
                            timer: 1000,
                            placement: {
                                from: 'top',
                                align: 'right'
                            },
                            template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert">' +
                                '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                                '<span data-notify="title">{1}</span> ' +
                                '<span data-notify="message">{2}</span>' +
                                '<div class="progress" data-notify="progressbar">' +
                                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                                '</div>' +
                                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                                '</div>'
                        });
                    });
                }
                else {
                    $.notify({
                        icon: 'notifications',
                        message: 'Oooopppss! <strong>' + error.error.userMessage + '</strong>. You can correct it and try again!'
                    }, {
                        type: 'danger',
                        timer: 250,
                        placement: {
                            from: 'top',
                            align: 'right'
                        }
                    });
                }
            });
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                type: 'error',
                html: 'Oooopppss! <strong>' +
                    error +
                    '</strong>. <br /> You can try again later!',
                confirmButtonClass: 'btn btn-danger',
                buttonsStyling: false
            });
        });
    };
    LoginComponent.prototype.fbLogin = function (e) {
        var _this = this;
        e.preventDefault();
        FB.login(function (result) {
            if (result.authResponse) {
                _this.user.facebook = {
                    access_token: result.authResponse.accessToken,
                    id: result.authResponse.userID
                };
                _this.authService.fbLogin(_this.user)
                    .subscribe(function (_) {
                    _this.router.navigate(['dashboard']);
                }, function (error) {
                    if (error.error.errorCode == "auth-3") {
                        var that_1 = _this;
                        FB.api('/me', 'GET', { "fields": "email,first_name,last_name,picture,id" }, function (response) {
                            var pass = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                            that_1.user.firstname = response.first_name;
                            that_1.user.surname = response.last_name;
                            that_1.user.email = response.email;
                            that_1.user.username = that_1.user.email.split('@')[0];
                            that_1.user.password = pass;
                            that_1.user.profile_picture = response.picture.data.url;
                            that_1.userService.create(that_1.user)
                                .subscribe(function (data) {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                                    type: 'success',
                                    html: 'Greate! <strong>' +
                                        'User creation successfull' +
                                        '</strong>. <br /> You will be redirect!',
                                    confirmButtonClass: 'btn btn-success',
                                    buttonsStyling: false
                                }).then(function () {
                                    that_1.authService.login(that_1.user)
                                        .subscribe(function (res) {
                                        that_1.router.navigate(['dashboard']);
                                    }, function (error) {
                                        $.notify({
                                            icon: 'notifications',
                                            message: 'Oooopppss! <strong>' + error.json().userMessage + '</strong>. You can correct it and try again!'
                                        }, {
                                            type: 'danger',
                                            timer: 250,
                                            placement: {
                                                from: 'top',
                                                align: 'right'
                                            }
                                        });
                                    });
                                });
                            }, function (error) {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                                    type: 'error',
                                    html: 'Oooopppss! <strong>' +
                                        error.error.userMessage +
                                        '</strong>. <br /> You can correct it and try again!',
                                    confirmButtonClass: 'btn btn-danger',
                                    buttonsStyling: false
                                });
                            });
                        });
                    }
                    else {
                        $.notify({
                            icon: 'notifications',
                            message: error.error.userMessage
                        }, {
                            type: 'danger',
                            timer: 1000,
                            placement: {
                                from: 'top',
                                align: 'right'
                            },
                            template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert">' +
                                '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                                '<span data-notify="title">{1}</span> ' +
                                '<span data-notify="message">{2}</span>' +
                                '<div class="progress" data-notify="progressbar">' +
                                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                                '</div>' +
                                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                                '</div>'
                        });
                    }
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                    type: 'error',
                    html: 'Oooopppss! <strong>' +
                        'An unexpected error occurred.' +
                        '</strong>. <br /> You can try again later!',
                    confirmButtonClass: 'btn btn-danger',
                    buttonsStyling: false
                });
            }
        });
    };
    LoginComponent.prototype.gLogin = function (e) {
        e.preventDefault();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-cmp',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages.routing */ "./src/app/pages/pages.routing.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pages/pricing/pricing.component.ts");
/* harmony import */ var _lock_lock_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lock/lock.component */ "./src/app/pages/lock/lock.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/pages/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { FlexLayoutModule } from '@angular/flex-layout';





var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_pages_routing__WEBPACK_IMPORTED_MODULE_5__["PagesRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_7__["PricingComponent"],
                _lock_lock_component__WEBPACK_IMPORTED_MODULE_8__["LockComponent"]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.routing.ts":
/*!****************************************!*\
  !*** ./src/app/pages/pages.routing.ts ***!
  \****************************************/
/*! exports provided: PagesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutes", function() { return PagesRoutes; });
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pages/pricing/pricing.component.ts");
/* harmony import */ var _lock_lock_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lock/lock.component */ "./src/app/pages/lock/lock.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _services_auth_lock_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/auth/lock.guard */ "./src/app/_services/auth/lock.guard.ts");
/* harmony import */ var _services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/auth/auth.guard */ "./src/app/_services/auth/auth.guard.ts");






var PagesRoutes = [
    {
        path: '',
        children: [{
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                canActivate: [_services_auth_lock_guard__WEBPACK_IMPORTED_MODULE_4__["LockGuard"]]
            }, {
                path: 'lock',
                component: _lock_lock_component__WEBPACK_IMPORTED_MODULE_2__["LockComponent"],
                canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
            }, {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"],
                canActivate: [_services_auth_lock_guard__WEBPACK_IMPORTED_MODULE_4__["LockGuard"]]
            }, {
                path: 'pricing',
                component: _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_1__["PricingComponent"]
            }]
    }
];


/***/ }),

/***/ "./src/app/pages/pricing/pricing.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/pricing/pricing.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\n  <div class=\"page-header pricing-page header-filter\" style=\"background-image: url('./assets/img/bg-pricing.jpg'); background-size: cover; background-position: top center;\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 ml-auto mr-auto text-center\">\n          <h2 class=\"title\">Pick the best plan for you</h2>\n          <h5 class=\"description\">You have Free Unlimited Updates and Premium Support on each package.</h5>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-3 col-md-6\">\n          <div class=\"card card-pricing card-plain\">\n            <h6 class=\"card-category\"> Freelancer</h6>\n            <div class=\"card-body\">\n              <div class=\"card-icon icon-white \">\n                <i class=\"material-icons\">weekend</i>\n              </div>\n              <h3 class=\"card-title\">Free</h3>\n              <p class=\"card-description\">This is good if your company size is between 2 and 10 Persons.</p>\n            </div>\n            <div class=\"card-footer justify-content-center \">\n              <a href=\"#pablo\" class=\"btn btn-round btn-white\">Choose Plan</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6\">\n          <div class=\"card card-pricing \">\n            <h6 class=\"card-category\"> Small Company</h6>\n            <div class=\"card-body\">\n              <div class=\"card-icon icon-rose \">\n                <i class=\"material-icons\">home</i>\n              </div>\n              <h3 class=\"card-title\">29$</h3>\n              <p class=\"card-description\">This is good if your company size is between 2 and 10 Persons.</p>\n            </div>\n            <div class=\"card-footer justify-content-center \">\n              <a href=\"#pablo\" class=\"btn btn-round btn-rose\">Choose Plan</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6\">\n          <div class=\"card card-pricing card-plain\">\n            <h6 class=\"card-category\"> Medium Company</h6>\n            <div class=\"card-body\">\n              <div class=\"card-icon icon-white \">\n                <i class=\"material-icons\">business</i>\n              </div>\n              <h3 class=\"card-title\">69$</h3>\n              <p class=\"card-description\">This is good if your company size is between 11 and 99 Persons.</p>\n            </div>\n            <div class=\"card-footer justify-content-center \">\n              <a href=\"#pablo\" class=\"btn btn-round btn-white\">Choose Plan</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6\">\n          <div class=\"card card-pricing card-plain\">\n            <h6 class=\"card-category\"> Extra Pack</h6>\n            <div class=\"card-body\">\n              <div class=\"card-icon icon-white \">\n                <i class=\"material-icons\">account_balance</i>\n              </div>\n              <h3 class=\"card-title\">159$</h3>\n              <p class=\"card-description\">This is good if your company size is 99+ Persons.</p>\n            </div>\n            <div class=\"card-footer justify-content-center \">\n              <a href=\"#pablo\" class=\"btn btn-round btn-white\">Choose Plan</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <footer class=\"footer \">\n      <div class=\"container\">\n        <nav class=\"pull-left\">\n          <ul>\n            <li>\n              <a href=\"https://www.creative-tim.com\">\n                Creative Tim\n              </a>\n            </li>\n            <li>\n              <a href=\"https://creative-tim.com/about-us\">\n                About Us\n              </a>\n            </li>\n            <li>\n              <a href=\"http://blog.creative-tim.com\">\n                Blog\n              </a>\n            </li>\n            <li>\n              <a href=\"https://www.creative-tim.com/license\">\n                Licenses\n              </a>\n            </li>\n          </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n          &copy;\n          {{test | date: 'yyyy'}}, made by\n          <a href=\"https://www.ppgi.inf.ufes.br\" target=\"_blank\">UFES | PPGI | LIED |</a> CMPaaS Project.\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/pricing/pricing.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/pricing/pricing.component.ts ***!
  \****************************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PricingComponent = /** @class */ (function () {
    function PricingComponent() {
        this.test = new Date();
    }
    PricingComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('pricing-page');
        body.classList.add('off-canvas-sidebar');
    };
    PricingComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('pricing-page');
        body.classList.remove('off-canvas-sidebar');
    };
    PricingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pricing-cmp',
            template: __webpack_require__(/*! ./pricing.component.html */ "./src/app/pages/pricing/pricing.component.html")
        })
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<script src=\"//connect.facebook.net/en_US/sdk.js\"></script>\n<div class=\"wrapper wrapper-full-page\">\n  <div class=\"page-header register-page header-filter\" filter-color=\"black\" style=\"background-image: url('./assets/img/bgufes.jpg'); background-size: cover; background-position: top center;\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-10 ml-auto mr-auto\">\n          <div class=\"card card-signup card-hidden\">\n            <h2 class=\"card-title text-center\">Register</h2>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-5 ml-auto\">\n                  <div class=\"info info-horizontal\">\n                    <div class=\"icon icon-rose\">\n                      <i class=\"material-icons\">cloud_queue</i>\n                    </div>\n                    <div class=\"description\">\n                      <h4 class=\"info-title\">Cloud</h4>\n                      <p class=\"description\">\n                          Do not miss your maps. Using CMPaaS you will have access to your maps wherever and whenever you want.\n                      </p>\n                    </div>\n                  </div>\n                  <div class=\"info info-horizontal\">\n                    <div class=\"icon icon-primary\">\n                      <i class=\"material-icons\">code</i>\n                    </div>\n                    <div class=\"description\">\n                      <h4 class=\"info-title\">Open-Source</h4>\n                      <p class=\"description\">\n                          Our project is completely open-source. You can use our api's freely in your projects and integrate them into the CMPaaS.\n                      </p>\n                    </div>\n                  </div>\n                  <div class=\"info info-horizontal\">\n                    <div class=\"icon icon-info\">\n                      <i class=\"material-icons\">group</i>\n                    </div>\n                    <div class=\"description\">\n                      <h4 class=\"info-title\">Social Concept Map Network</h4>\n                      <p class=\"description\">\n                          You can use our services to interact with the mapping community, build collaborative maps, access and publish your maps for surveys across our network.\n                      </p>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-5 mr-auto\">\n                  <div class=\"social text-center\">\n                    <button mat-raised-button class=\"btn btn-just-icon btn-round btn-facebook\" (click)=\"fbRegister($event)\">\n                      <i class=\"fa fa-facebook\"> </i>\n                    </button>\n                    <!-- <button mat-raised-button class=\"btn btn-just-icon btn-round btn-twitter\">\n                      <i class=\"fa fa-twitter\"></i>\n                    </button> -->\n                    <button id=\"googleBtn\" mat-raised-button class=\"btn btn-just-icon btn-round btn-google\">\n                        <i class=\"fa fa-google\"></i>\n                    </button>\n                    <h4 class=\"mt-3\"> or be classical </h4>\n                  </div>\n                  <form class=\"form\" [formGroup]=\"registerForm\">\n                    <div class=\"form-group has-default\">\n                      <div class=\"input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\" [ngClass]=\"{'has-error':!registerForm.controls['firstname'].valid}\">\n                            <i class=\"material-icons\">assignment_ind</i>\n                          </span>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"firstname\" placeholder=\"First Name...\" [ngClass]=\"{'has-error':!registerForm.controls['firstname'].valid}\">\n                      </div>\n                    </div>\n                    <div class=\"form-group has-default\">\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\" [ngClass]=\"{'has-error':!registerForm.controls['surname'].valid}\">\n                              <i class=\"material-icons\">assignment</i>\n                            </span>\n                          </div>\n                          <input type=\"text\" formControlName=\"surname\" class=\"form-control\" placeholder=\"Surname...\" [ngClass]=\"{'has-error':!registerForm.controls['surname'].valid}\">\n                        </div>\n                      </div>\n                      <div class=\"form-group has-default\">\n                          <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\" [ngClass]=\"{'has-error':!registerForm.controls['username'].valid}\">\n                                <i class=\"material-icons\">face</i>\n                              </span>\n                            </div>\n                            <input type=\"text\" formControlName=\"username\" class=\"form-control\" placeholder=\"Username...\" [ngClass]=\"{'has-error':!registerForm.controls['username'].valid}\">\n                          </div>\n                        </div>\n                    <div class=\"form-group has-default\">\n                      <div class=\"input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\" [ngClass]=\"{'has-error':!registerForm.controls['email'].valid}\">\n                            <i class=\"material-icons\">mail</i>\n                          </span>\n                        </div>\n                        <input formControlName=\"email\" type=\"text\" class=\"form-control\" placeholder=\"Email...\" [ngClass]=\"{'has-error':!registerForm.controls['email'].valid}\">\n                      </div>\n                    </div>\n                    <div class=\"form-group has-default\">\n                      <div class=\"input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\" [ngClass]=\"{'has-error':!registerForm.controls['password'].valid}\">\n                            <i class=\"material-icons\">lock_outline</i>\n                          </span>\n                        </div>\n                        <input type=\"password\" formControlName=\"password\" placeholder=\"Password...\" class=\"form-control\" [ngClass]=\"{'has-error':!registerForm.controls['password'].valid}\">\n                      </div>\n                    </div>\n                    <!-- <div class=\"form-check\">\n                      <label class=\"form-check-label\">\n                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\n                        <span class=\"form-check-sign\">\n                          <span class=\"check\"></span>\n                        </span>\n                        I agree to the\n                        <a href=\"#something\">terms and conditions</a>.\n                      </label>\n                    </div> -->\n                    <div class=\"text-center\">\n                        <button id=\"bt-register\" type=\"button\" class=\"btn btn-primary btn-round mt-4\" [disabled]=\"!registerForm.valid\" (click)=\"register($event)\"> Get Started </button>\n                      <!-- <a href=\"#pablo\" class=\"btn btn-primary btn-round mt-4\">Get Started</a> -->\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <footer class=\"footer \">\n      <div class=\"container\">\n        <nav class=\"pull-left\">\n          <ul>\n            <li>\n              <a href=\"https://www.creative-tim.com\">\n                Creative Tim\n              </a>\n            </li>\n            <li>\n              <a href=\"https://creative-tim.com/about-us\">\n                About Us\n              </a>\n            </li>\n            <li>\n              <a href=\"http://blog.creative-tim.com\">\n                Blog\n              </a>\n            </li>\n            <li>\n              <a href=\"https://www.creative-tim.com/license\">\n                Licenses\n              </a>\n            </li>\n          </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n          &copy;\n        {{test | date: 'yyyy'}}, made by\n        <a href=\"http://www.informatica.ufes.br\" target=\"_blank\">UFES | PPGI | LIED |</a> CMPaaS Project.\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/user/user.service */ "./src/app/_services/user/user.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/auth/auth.service */ "./src/app/_services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_models/user.model */ "./src/app/_models/user.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, userService, authService, router, http) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.http = http;
        this.test = new Date();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('register-page');
        body.classList.add('off-canvas-sidebar');
        var card = document.getElementsByClassName('card')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);
        this.registerForm = this.formBuilder.group({
            // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstname attribute must have a value in it.
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            surname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        FB.init({
            appId: '673893062964918',
            cookie: true,
            xfbml: true,
            version: 'v3.0'
        });
        this.http.get('http://ip-api.com/json')
            .subscribe(function (data) {
            _this.userLocInformation = data;
        }, function (error) { return console.log(error); });
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('register-page');
        body.classList.remove('off-canvas-sidebar');
    };
    RegisterComponent.prototype.ngAfterViewInit = function () {
        this.googleInit();
    };
    RegisterComponent.prototype.googleInit = function () {
        var that = this;
        gapi.load('auth2', function () {
            that.auth2 = gapi.auth2.init({
                client_id: '305079514663-ddrsd311mqdghdhkcq4uu8be4i013e41.apps.googleusercontent.com',
                cookiepolici: 'single_host_origin',
                scope: 'profile email'
            });
            that.attachSignin(document.getElementById('googleBtn'));
        });
    };
    RegisterComponent.prototype.attachSignin = function (element) {
        var that = this;
        this.auth2.attachClickHandler(element, {}, function (googleUser) {
            var user = new _models_user_model__WEBPACK_IMPORTED_MODULE_6__["User"]();
            var profile = googleUser.getBasicProfile();
            var auth = googleUser.getAuthResponse();
            var pass = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            user.firstname = profile.getGivenName();
            user.surname = profile.getFamilyName();
            user.email = profile.getEmail();
            user.username = user.email.split('@')[0];
            user.password = pass;
            user.profile_picture = profile.getImageUrl();
            user.google = {
                id: profile.getId(),
                access_token: auth.access_token,
                id_token: auth.id_token
            };
            that.userService.create(user)
                .subscribe(function (_) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                    type: 'success',
                    html: 'Greate! <strong>' +
                        'User creation successfull' +
                        '</strong>. <br /> You will be redirect!',
                    confirmButtonClass: 'btn btn-success',
                    buttonsStyling: false
                }).then(function () {
                    that.authService.login(user)
                        .subscribe(function (res) {
                        window.location.href = '/dashboard';
                        // that.router.navigateByUrl('dashboard');
                        // that.router.navigate(['/dashboard']);
                    }, function (error) {
                        $.notify({
                            icon: 'notifications',
                            message: 'Oooopppss! <strong>' + error.json().userMessage + '</strong>. You can correct it and try again!'
                        }, {
                            type: 'danger',
                            timer: 250,
                            placement: {
                                from: 'top',
                                align: 'right'
                            }
                        });
                    });
                });
            }, function (error) {
                if (error.error.errorCode == "users-3") {
                    that.authService.gLogin(user)
                        .subscribe(function (_) {
                        window.location.href = '/dashboard';
                    }, function (error) {
                        $.notify({
                            icon: 'notifications',
                            message: error.error.userMessage
                        }, {
                            type: 'danger',
                            timer: 1000,
                            placement: {
                                from: 'top',
                                align: 'right'
                            },
                            template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert">' +
                                '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                                '<span data-notify="title">{1}</span> ' +
                                '<span data-notify="message">{2}</span>' +
                                '<div class="progress" data-notify="progressbar">' +
                                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                                '</div>' +
                                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                                '</div>'
                        });
                    });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                        type: 'error',
                        html: 'Oooopppss! <strong>' +
                            error.error.userMessage +
                            '</strong>. <br /> You can correct it and try again!',
                        confirmButtonClass: 'btn btn-danger',
                        buttonsStyling: false
                    });
                }
            });
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                type: 'error',
                html: 'Oooopppss! <strong>' +
                    error +
                    '</strong>. <br /> You can try again later!',
                confirmButtonClass: 'btn btn-danger',
                buttonsStyling: false
            });
        });
    };
    RegisterComponent.prototype.register = function (e) {
        var _this = this;
        e.preventDefault();
        var user = this.registerForm.getRawValue();
        user.locInfo = {};
        user.locInfo.country = this.userLocInformation.country;
        user.locInfo.countryCode = this.userLocInformation.countryCode;
        user.locInfo.city = this.userLocInformation.city;
        user.locInfo.region = this.userLocInformation.region;
        user.locInfo.regionName = this.userLocInformation.regionName;
        this.userService.create(user)
            .subscribe(function (data) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                type: 'success',
                html: 'Greate! <strong>' +
                    'User creation successfull' +
                    '</strong>. <br /> You will be redirect!',
                confirmButtonClass: 'btn btn-success',
                buttonsStyling: false
            }).then(function () {
                _this.authService.login(user)
                    .subscribe(function (res) {
                    _this.router.navigate(['dashboard']);
                }, function (error) {
                    $.notify({
                        icon: 'notifications',
                        message: 'Oooopppss! <strong>' + error.json().userMessage + '</strong>. You can correct it and try again!'
                    }, {
                        type: 'danger',
                        timer: 250,
                        placement: {
                            from: 'top',
                            align: 'right'
                        }
                    });
                });
            });
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                type: 'error',
                html: 'Oooopppss! <strong>' +
                    error.error.userMessage +
                    '</strong>. <br /> You can correct it and try again!',
                confirmButtonClass: 'btn btn-danger',
                buttonsStyling: false
            });
        });
    };
    RegisterComponent.prototype.fbRegister = function (e) {
        var that = this;
        var user = new _models_user_model__WEBPACK_IMPORTED_MODULE_6__["User"]();
        e.preventDefault();
        FB.login(function (result) {
            if (result.authResponse) {
                FB.api('/me', 'GET', { "fields": "email,first_name,last_name,picture,id" }, function (response) {
                    var pass = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                    user.firstname = response.first_name;
                    user.surname = response.last_name;
                    user.email = response.email;
                    user.username = user.email.split('@')[0];
                    user.password = pass;
                    user.profile_picture = response.picture.data.url;
                    user.facebook = {};
                    user.facebook.id = result.authResponse.userID;
                    user.facebook.access_token = result.authResponse.accessToken;
                    that.userService.create(user)
                        .subscribe(function (data) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                            type: 'success',
                            html: 'Greate! <strong>' +
                                'User creation successfull' +
                                '</strong>. <br /> You will be redirect!',
                            confirmButtonClass: 'btn btn-success',
                            buttonsStyling: false
                        }).then(function () {
                            that.authService.login(user)
                                .subscribe(function (res) {
                                that.router.navigate(['dashboard']);
                            }, function (error) {
                                $.notify({
                                    icon: 'notifications',
                                    message: 'Oooopppss! <strong>' + error.json().userMessage + '</strong>. You can correct it and try again!'
                                }, {
                                    type: 'danger',
                                    timer: 250,
                                    placement: {
                                        from: 'top',
                                        align: 'right'
                                    }
                                });
                            });
                        });
                    }, function (error) {
                        if (error.error.errorCode == "users-3") {
                            that.authService.fbLogin(user)
                                .subscribe(function (_) {
                                that.router.navigate(['dashboard']);
                            }, function (error) {
                                $.notify({
                                    icon: 'notifications',
                                    message: error.error.userMessage
                                }, {
                                    type: 'danger',
                                    timer: 1000,
                                    placement: {
                                        from: 'top',
                                        align: 'right'
                                    },
                                    template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert">' +
                                        '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                                        '<span data-notify="title">{1}</span> ' +
                                        '<span data-notify="message">{2}</span>' +
                                        '<div class="progress" data-notify="progressbar">' +
                                        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                                        '</div>' +
                                        '<a href="{3}" target="{4}" data-notify="url"></a>' +
                                        '</div>'
                                });
                            });
                        }
                        else {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                                type: 'error',
                                html: 'Oooopppss! <strong>' +
                                    error.error.userMessage +
                                    '</strong>. <br /> You can correct it and try again!',
                                confirmButtonClass: 'btn btn-danger',
                                buttonsStyling: false
                            });
                        }
                    });
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                    type: 'error',
                    html: 'Oooopppss! <strong>' +
                        'An unexpected error occurred.' +
                        '</strong>. <br /> You can try again later!',
                    confirmButtonClass: 'btn btn-danger',
                    buttonsStyling: false
                });
            }
        }, { scope: 'email, public_profile' });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-cmp',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/pages/register/register.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map