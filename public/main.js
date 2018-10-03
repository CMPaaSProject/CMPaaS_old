(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./administration/administration.module": [
		"./src/app/administration/administration.module.ts",
		"administration-administration-module~dashboard-dashboard-module~edit-edit-module~forms-forms-module~~1b8c593a",
		"administration-administration-module"
	],
	"./calendar/calendar.module": [
		"./src/app/calendar/calendar.module.ts",
		"calendar-calendar-module"
	],
	"./charts/charts.module": [
		"./src/app/charts/charts.module.ts",
		"charts-charts-module"
	],
	"./components/components.module": [
		"./src/app/components/components.module.ts",
		"components-components-module~view-view-module"
	],
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"administration-administration-module~dashboard-dashboard-module~edit-edit-module~forms-forms-module~~1b8c593a",
		"dashboard-dashboard-module~edit-edit-module~manage-manage-module",
		"dashboard-dashboard-module"
	],
	"./edit/edit.module": [
		"./src/app/edit/edit.module.ts",
		"administration-administration-module~dashboard-dashboard-module~edit-edit-module~forms-forms-module~~1b8c593a",
		"dashboard-dashboard-module~edit-edit-module~manage-manage-module"
	],
	"./findpage/find.module": [
		"./src/app/findpage/find.module.ts",
		"findpage-find-module"
	],
	"./forms/forms.module": [
		"./src/app/forms/forms.module.ts",
		"administration-administration-module~dashboard-dashboard-module~edit-edit-module~forms-forms-module~~1b8c593a",
		"forms-forms-module"
	],
	"./manage/manage.module": [
		"./src/app/manage/manage.module.ts",
		"administration-administration-module~dashboard-dashboard-module~edit-edit-module~forms-forms-module~~1b8c593a",
		"dashboard-dashboard-module~edit-edit-module~manage-manage-module",
		"manage-manage-module"
	],
	"./maps/maps.module": [
		"./src/app/maps/maps.module.ts",
		"maps-maps-module"
	],
	"./pages/pages.module": [
		"./src/app/pages/pages.module.ts",
		"pages-pages-module"
	],
	"./tables/tables.module": [
		"./src/app/tables/tables.module.ts",
		"tables-tables-module"
	],
	"./timeline/timeline.module": [
		"./src/app/timeline/timeline.module.ts",
		"timeline-timeline-module"
	],
	"./tools/tools.module": [
		"./src/app/tools/tools.module.ts",
		"administration-administration-module~dashboard-dashboard-module~edit-edit-module~forms-forms-module~~1b8c593a",
		"tools-tools-module"
	],
	"./userpage/user.module": [
		"./src/app/userpage/user.module.ts",
		"userpage-user-module"
	],
	"./view/view.module": [
		"./src/app/view/view.module.ts",
		"administration-administration-module~dashboard-dashboard-module~edit-edit-module~forms-forms-module~~1b8c593a",
		"components-components-module~view-view-module",
		"view-view-module"
	],
	"./widgets/widgets.module": [
		"./src/app/widgets/widgets.module.ts",
		"widgets-widgets-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/_models/socketMessage.model.ts":
/*!************************************************!*\
  !*** ./src/app/_models/socketMessage.model.ts ***!
  \************************************************/
/*! exports provided: SocketMessage, SocketResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketMessage", function() { return SocketMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketResponse", function() { return SocketResponse; });
var SocketMessage = /** @class */ (function () {
    function SocketMessage() {
    }
    return SocketMessage;
}());

var SocketResponse = /** @class */ (function () {
    function SocketResponse() {
    }
    return SocketResponse;
}());



/***/ }),

/***/ "./src/app/_services/auth/admin.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/auth/admin.guard.ts ***!
  \***********************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/_services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = /** @class */ (function () {
    function AdminGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (router, state) {
        var user = JSON.parse(this.authService.getCurrentUser());
        if (user.groups.filter(function (g) { return (g.name === "Admin"); }).length === 0) {
            this.router.navigate(['pages/login'], { queryParams: { returnUrl: state.url } });
        }
        return true;
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/_services/auth/auth.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/auth/auth.guard.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/_services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (router, state) {
        var user = JSON.parse(this.authService.getCurrentUser());
        if (!user) {
            this.router.navigate(['pages/login'], { queryParams: { returnUrl: state.url } });
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_services/auth/auth.service.ts":
/*!************************************************!*\
  !*** ./src/app/_services/auth/auth.service.ts ***!
  \************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global.vars */ "./src/app/global.vars.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.getCurrentUser = function () {
        return localStorage.getItem('currentUser');
    };
    AuthService.prototype.setCurrentUser = function (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
    };
    AuthService.prototype.updateUser = function () {
        var _this = this;
        return this.http.get(_global_vars__WEBPACK_IMPORTED_MODULE_1__["meApiUri"])
            .map(function (user) {
            user.token = JSON.parse(_this.getCurrentUser()).token;
            localStorage.setItem('currentUser', JSON.stringify(user));
            return user;
        });
    };
    AuthService.prototype.login = function (user) {
        return this.http.post(_global_vars__WEBPACK_IMPORTED_MODULE_1__["authApiUri"], user)
            .map(function (res) {
            if (res.user && res.user.token) {
                localStorage.setItem('currentUser', JSON.stringify(res.user));
            }
            return res;
        });
    };
    AuthService.prototype.fbLogin = function (user) {
        return this.http.post(_global_vars__WEBPACK_IMPORTED_MODULE_1__["authApiUri"] + '/facebook', user)
            .map(function (res) {
            if (res.user && res.user.token) {
                localStorage.setItem('currentUser', JSON.stringify(res.user));
            }
        });
    };
    AuthService.prototype.gLogin = function (user) {
        return this.http.post(_global_vars__WEBPACK_IMPORTED_MODULE_1__["authApiUri"] + '/google', user)
            .map(function (res) {
            if (res.user && res.user.token) {
                localStorage.setItem('currentUser', JSON.stringify(res.user));
            }
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
    };
    AuthService.prototype.lock = function () {
        var user = JSON.parse(localStorage.getItem('currentUser'));
        delete user.token;
        localStorage.setItem('currentUser', JSON.stringify(user));
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/_services/auth/jwt.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/_services/auth/jwt.interceptor.ts ***!
  \***************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    'Authorization': "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_services/auth/lock.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/auth/lock.guard.ts ***!
  \**********************************************/
/*! exports provided: LockGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockGuard", function() { return LockGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/_services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LockGuard = /** @class */ (function () {
    function LockGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LockGuard.prototype.canActivate = function (router, state) {
        var user = JSON.parse(this.authService.getCurrentUser());
        if (user && !user.token) {
            this.router.navigate(['pages/lock'], { queryParams: { returnUrl: state.url } });
        }
        return true;
    };
    LockGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], LockGuard);
    return LockGuard;
}());



/***/ }),

/***/ "./src/app/_services/follow/follow.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_services/follow/follow.service.ts ***!
  \****************************************************/
/*! exports provided: FollowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowService", function() { return FollowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global.vars */ "./src/app/global.vars.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FollowService = /** @class */ (function () {
    function FollowService(http) {
        this.http = http;
    }
    FollowService.prototype.follow = function (user) {
        return this.http.post(_global_vars__WEBPACK_IMPORTED_MODULE_1__["followApiUri"], user);
    };
    FollowService.prototype.unfollow = function (user) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }), body: JSON.stringify(user)
        };
        return this.http.delete(_global_vars__WEBPACK_IMPORTED_MODULE_1__["followApiUri"], httpOptions);
    };
    FollowService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FollowService);
    return FollowService;
}());



/***/ }),

/***/ "./src/app/_services/group/group.service.ts":
/*!**************************************************!*\
  !*** ./src/app/_services/group/group.service.ts ***!
  \**************************************************/
/*! exports provided: GroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupService", function() { return GroupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global.vars */ "./src/app/global.vars.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GroupService = /** @class */ (function () {
    function GroupService(http) {
        this.http = http;
    }
    GroupService.prototype.create = function (group) {
        return this.http.post(_global_vars__WEBPACK_IMPORTED_MODULE_1__["groupApiUri"], group);
    };
    GroupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GroupService);
    return GroupService;
}());



/***/ }),

/***/ "./src/app/_services/index.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/index.service.ts ***!
  \********************************************/
/*! exports provided: UserService, MapService, AuthService, VersionService, MeService, ModelService, GroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/user.service */ "./src/app/_services/user/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]; });

/* harmony import */ var _map_map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map/map.service */ "./src/app/_services/map/map.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return _map_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"]; });

/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/_services/auth/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]; });

/* harmony import */ var _version_version_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./version/version.service */ "./src/app/_services/version/version.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VersionService", function() { return _version_version_service__WEBPACK_IMPORTED_MODULE_3__["VersionService"]; });

/* harmony import */ var _me_me_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./me/me.service */ "./src/app/_services/me/me.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeService", function() { return _me_me_service__WEBPACK_IMPORTED_MODULE_4__["MeService"]; });

/* harmony import */ var _model_model_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model/model.service */ "./src/app/_services/model/model.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModelService", function() { return _model_model_service__WEBPACK_IMPORTED_MODULE_5__["ModelService"]; });

/* harmony import */ var _group_group_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group/group.service */ "./src/app/_services/group/group.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupService", function() { return _group_group_service__WEBPACK_IMPORTED_MODULE_6__["GroupService"]; });










/***/ }),

/***/ "./src/app/_services/map/map.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/map/map.service.ts ***!
  \**********************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global.vars */ "./src/app/global.vars.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapService = /** @class */ (function () {
    function MapService(http) {
        this.http = http;
    }
    MapService.prototype.updateUserMaps = function () {
        return this.http.get(_global_vars__WEBPACK_IMPORTED_MODULE_1__["meApiUri"] + '/maps')
            .map(function (maps) {
            localStorage.setItem('currentUserMaps', JSON.stringify(maps));
            return maps;
        });
    };
    MapService.prototype.getAll = function () {
        return this.http.get(_global_vars__WEBPACK_IMPORTED_MODULE_1__["mapApiUri"]);
    };
    MapService.prototype.create = function (map) {
        return this.http.post(_global_vars__WEBPACK_IMPORTED_MODULE_1__["mapApiUri"], map);
    };
    MapService.prototype.setCurrentMap = function (map) {
        localStorage.setItem('currentMap', JSON.stringify(map));
    };
    MapService.prototype.getCurrentMap = function () {
        return localStorage.getItem('currentMap');
    };
    MapService.prototype.removeCurrentMap = function () {
        localStorage.removeItem('currentMap');
    };
    MapService.prototype.createVersion = function (content) {
        var map = JSON.parse(this.getCurrentMap());
        return this.http.post(_global_vars__WEBPACK_IMPORTED_MODULE_1__["mapApiUri"] + '/' + map._id.toString() + '/versions', JSON.parse(content));
    };
    MapService.prototype.getMapData = function (mapId) {
        return this.http.get(_global_vars__WEBPACK_IMPORTED_MODULE_1__["mapApiUri"] + '/' + mapId);
    };
    MapService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/app/_services/me/me.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/me/me.service.ts ***!
  \********************************************/
/*! exports provided: MeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeService", function() { return MeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global.vars */ "./src/app/global.vars.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/_services/auth/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MeService = /** @class */ (function () {
    function MeService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.updated = false;
    }
    MeService.prototype.getDashboardInfo = function () {
        var _this = this;
        var savedMapArr = JSON.parse(this.authService.getCurrentUser()).last_maps;
        if (this.updated && savedMapArr != null) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(savedMapArr);
        }
        else
            return this.http.get(_global_vars__WEBPACK_IMPORTED_MODULE_1__["meApiUri"] + '/dashboard')
                .map(function (maps) {
                var currentUser = JSON.parse(_this.authService.getCurrentUser());
                currentUser.last_maps = maps;
                _this.authService.setCurrentUser(currentUser);
                _this.updated = true;
                return maps;
            });
    };
    MeService.prototype.isUpdated = function () {
        return this.updated;
    };
    MeService.prototype.updateDashboardInfo = function () {
        this.updated = false;
        this.getDashboardInfo();
    };
    MeService.prototype.getMaps = function () {
        return this.http.get(_global_vars__WEBPACK_IMPORTED_MODULE_1__["meApiUri"] + '/maps?orderBy=last_update&limit=3')
            .map(function (maps) {
            localStorage.setItem('currentDashboardMaps', JSON.stringify(maps));
            return maps;
        });
    };
    MeService.prototype.getMapsVersions = function (maps) {
        var uri = _global_vars__WEBPACK_IMPORTED_MODULE_1__["meApiUri"] + '/versions?';
        maps.forEach(function (map) {
            uri += 'mapId=' + map._id + '&';
        });
        return this.http.get(uri)
            .map(function (versions) {
            localStorage.setItem('currentDashboardUserMapsVersions', JSON.stringify(versions));
            return versions;
        });
    };
    MeService.prototype.getGroups = function () {
        return this.http.get(_global_vars__WEBPACK_IMPORTED_MODULE_1__["meApiUri"] + '/groups');
    };
    MeService.prototype.sendProfileImage = function (img) {
        var uploadData = new FormData();
        uploadData.append('file', img);
        return this.http.post(_global_vars__WEBPACK_IMPORTED_MODULE_1__["meApiUri"] + '/profileImage', uploadData).map(function (res) {
            var user = JSON.parse(localStorage.getItem('currentUser'));
            user.profile_picture = res.url;
            localStorage.setItem('currentUser', JSON.stringify(user));
            return res;
        });
    };
    MeService.prototype.updateInfo = function (data) {
        return this.http.put(_global_vars__WEBPACK_IMPORTED_MODULE_1__["meApiUri"], data).map(function (res) {
            var u = JSON.parse(localStorage.getItem('currentUser'));
            res.token = u.token;
            res.stats = u.stats;
            localStorage.setItem('currentUser', JSON.stringify(res));
            return res;
        });
    };
    MeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], MeService);
    return MeService;
}());



/***/ }),

/***/ "./src/app/_services/model/model.service.ts":
/*!**************************************************!*\
  !*** ./src/app/_services/model/model.service.ts ***!
  \**************************************************/
/*! exports provided: ModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelService", function() { return ModelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ModelService = /** @class */ (function () {
    function ModelService() {
    }
    ModelService.prototype.getCurrentModel = function () {
        return localStorage.getItem('currentModel');
    };
    ModelService.prototype.setCurrentModel = function (model) {
        localStorage.setItem('currentModel', JSON.stringify(model));
    };
    ModelService.prototype.removeCurrentModel = function () {
        localStorage.removeItem('currentModel');
    };
    ModelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ModelService);
    return ModelService;
}());



/***/ }),

/***/ "./src/app/_services/sidebar/sidebar.service.ts":
/*!******************************************************!*\
  !*** ./src/app/_services/sidebar/sidebar.service.ts ***!
  \******************************************************/
/*! exports provided: SidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarService", function() { return SidebarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/_services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarService = /** @class */ (function () {
    function SidebarService(authService) {
        this.authService = authService;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ;
    SidebarService.prototype.updateUserProfile = function () {
        var user = JSON.parse(this.authService.getCurrentUser());
        this.update.emit(user.profile_picture);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SidebarService.prototype, "update", void 0);
    SidebarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SidebarService);
    return SidebarService;
}());



/***/ }),

/***/ "./src/app/_services/socketservice/socket.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/_services/socketservice/socket.service.ts ***!
  \***********************************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _websocket_websocket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../websocket/websocket.service */ "./src/app/_services/websocket/websocket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocketService = /** @class */ (function () {
    function SocketService(wsService) {
        this.wsService = wsService;
    }
    SocketService.prototype.send = function (msg) {
        this.messages.next(msg);
    };
    SocketService.prototype.disconnect = function () {
        this.wsService.disconnect();
    };
    SocketService.prototype.connect = function () {
        this.messages = this.wsService
            .connect()
            .map(function (response) {
            return response;
        });
    };
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_websocket_websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/_services/speech2map/speech-recognition.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/_services/speech2map/speech-recognition.service.ts ***!
  \********************************************************************/
/*! exports provided: SpeechRecognitionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechRecognitionService", function() { return SpeechRecognitionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpeechRecognitionService = /** @class */ (function () {
    function SpeechRecognitionService(zone) {
        this.zone = zone;
    }
    SpeechRecognitionService.prototype.record = function () {
        var _this = this;
        return rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            var webkitSpeechRecognition = window.webkitSpeechRecognition;
            _this.speechRecognition = new webkitSpeechRecognition();
            _this.speechRecognition.continuous = true;
            _this.speechRecognition.interimResults = true;
            _this.speechRecognition.lang = 'pt-br';
            _this.speechRecognition.maxAlternatives = 1;
            _this.speechRecognition.onresult = function (speech) {
                _this.zone.run(function () {
                    observer.next(speech.results[speech.results.length - 1][0].transcript);
                });
            };
            _this.speechRecognition.onerror = function (error) {
                console.log('onerror');
                observer.error(error);
            };
            _this.speechRecognition.onend = function () {
                console.log('onend');
                observer.complete();
            };
            _this.speechRecognition.start();
            console.log("Say something - We are listening !!!");
        });
    };
    SpeechRecognitionService.prototype.DestroySpeechObject = function () {
        if (this.speechRecognition)
            this.speechRecognition.abort();
    };
    SpeechRecognitionService.prototype.stop = function () {
        if (this.speechRecognition)
            this.speechRecognition.stop();
    };
    SpeechRecognitionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], SpeechRecognitionService);
    return SpeechRecognitionService;
}());



/***/ }),

/***/ "./src/app/_services/user/user.service.ts":
/*!************************************************!*\
  !*** ./src/app/_services/user/user.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global.vars */ "./src/app/global.vars.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get(_global_vars__WEBPACK_IMPORTED_MODULE_1__["userApiUri"]);
    };
    UserService.prototype.create = function (user) {
        return this.http.post(_global_vars__WEBPACK_IMPORTED_MODULE_1__["userApiUri"], user);
    };
    UserService.prototype.getUserData = function (userId) {
        return this.http.get(_global_vars__WEBPACK_IMPORTED_MODULE_1__["userApiUri"] + '/' + userId);
    };
    UserService.prototype.searchByUserName = function (userName) {
        return this.http.get(_global_vars__WEBPACK_IMPORTED_MODULE_1__["userApiUri"] + '/search?username=' + userName);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/_services/version/version.service.ts":
/*!******************************************************!*\
  !*** ./src/app/_services/version/version.service.ts ***!
  \******************************************************/
/*! exports provided: VersionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionService", function() { return VersionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global.vars */ "./src/app/global.vars.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/_services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VersionService = /** @class */ (function () {
    function VersionService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    VersionService.prototype.setCurrentLoadVersion = function (v) {
        localStorage.setItem('currentLoadVersion', JSON.stringify(v));
    };
    VersionService.prototype.getCurrentLoadVersion = function () {
        return JSON.parse(localStorage.getItem('currentLoadVersion'));
    };
    VersionService.prototype.removeCurrentLoadVersion = function () {
        localStorage.removeItem('currentLoadVersion');
    };
    VersionService.prototype.updateUserMapVersions = function () {
        var user = JSON.parse(this.authService.getCurrentUser());
        var uri = _global_vars__WEBPACK_IMPORTED_MODULE_1__["versionApiUri"] + '?';
        user.maps.forEach(function (map) {
            uri += 'mapId=' + map._id + '&';
        });
        return this.http.get(uri)
            .map(function (versions) {
            localStorage.setItem('currentUserMapsVersions', JSON.stringify(versions));
            return versions;
        });
    };
    VersionService.prototype.getVersionData = function (versionId) {
        return this.http.get(_global_vars__WEBPACK_IMPORTED_MODULE_1__["versionApiUri"] + '/' + versionId);
    };
    VersionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], VersionService);
    return VersionService;
}());



/***/ }),

/***/ "./src/app/_services/websocket/websocket.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/_services/websocket/websocket.service.ts ***!
  \**********************************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_socketMessage_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_models/socketMessage.model */ "./src/app/_models/socketMessage.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WebsocketService = /** @class */ (function () {
    function WebsocketService() {
    }
    WebsocketService.prototype.connect = function () {
        var _this = this;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].ws_url);
        var observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.socket.on('newMessage', function (data) {
                var res = new _models_socketMessage_model__WEBPACK_IMPORTED_MODULE_5__["SocketResponse"]();
                res.type = 'newMessage';
                res.content = data;
                observer.next(res);
            });
            _this.socket.on('updateModel', function (data) {
                var res = new _models_socketMessage_model__WEBPACK_IMPORTED_MODULE_5__["SocketResponse"]();
                res.type = 'updateModel';
                res.content = data;
                observer.next(res);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        var observer = {
            next: function (data) {
                switch (data.type) {
                    case 'message':
                        _this.socket.emit(data.type, data.content);
                        break;
                    case 'join':
                        _this.socket.emit(data.type, { 'username': data.username, 'roomId': data.content }, function (err) {
                            if (err) {
                                $.notify({
                                    icon: 'notifications',
                                    message: "<b>Error: </b> " + err + "."
                                }, {
                                    type: 'danger',
                                    timer: 2000,
                                    placement: {
                                        from: 'top',
                                        align: 'right'
                                    },
                                    template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0} alert-with-icon" role="alert">' +
                                        '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                                        '<i class="material-icons" data-notify="icon">notifications</i> ' +
                                        '<span data-notify="title">{1}</span> ' +
                                        '<span data-notify="message">{2}</span>' +
                                        '<div class="progress" data-notify="progressbar">' +
                                        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                                        '</div>' +
                                        '<a href="{3}" target="{4}" data-notify="url"></a>' +
                                        '</div>'
                                });
                            }
                            else {
                                $.notify({
                                    icon: 'notifications',
                                    message: 'You are connect in <b>Real Time CMPaaS Editor</b> - you can share this link with your friends.'
                                }, {
                                    type: 'success',
                                    timer: 2000,
                                    placement: {
                                        from: 'top',
                                        align: 'right'
                                    },
                                    template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0} alert-with-icon" role="alert">' +
                                        '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                                        '<i class="material-icons" data-notify="icon">notifications</i> ' +
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
                        break;
                    case 'sendModel':
                        _this.socket.emit(data.type, data.content);
                        break;
                }
            },
        };
        return rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["Subject"].create(observer, observable);
    };
    WebsocketService.prototype.disconnect = function () {
        return this.socket.disconnect();
    };
    WebsocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WebsocketService);
    return WebsocketService;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            var body = document.getElementsByTagName('body')[0];
            var modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
            if (body.classList.contains('modal-open')) {
                body.classList.remove('modal-open');
                modalBackdrop.remove();
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MaterialModule, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebar/sidebar.module */ "./src/app/sidebar/sidebar.module.ts");
/* harmony import */ var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/footer/footer.module */ "./src/app/shared/footer/footer.module.ts");
/* harmony import */ var _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/navbar/navbar.module */ "./src/app/shared/navbar/navbar.module.ts");
/* harmony import */ var _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/fixedplugin/fixedplugin.module */ "./src/app/shared/fixedplugin/fixedplugin.module.ts");
/* harmony import */ var _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts/admin/admin-layout.component */ "./src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layouts/auth/auth-layout.component */ "./src/app/layouts/auth/auth-layout.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_services/auth/auth.service */ "./src/app/_services/auth/auth.service.ts");
/* harmony import */ var _services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_services/auth/auth.guard */ "./src/app/_services/auth/auth.guard.ts");
/* harmony import */ var _services_auth_lock_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_services/auth/lock.guard */ "./src/app/_services/auth/lock.guard.ts");
/* harmony import */ var _services_auth_admin_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_services/auth/admin.guard */ "./src/app/_services/auth/admin.guard.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_index_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_services/index.service */ "./src/app/_services/index.service.ts");
/* harmony import */ var _services_auth_jwt_interceptor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./_services/auth/jwt.interceptor */ "./src/app/_services/auth/jwt.interceptor.ts");
/* harmony import */ var _services_follow_follow_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_services/follow/follow.service */ "./src/app/_services/follow/follow.service.ts");
/* harmony import */ var _speech2map_speech_recognition_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./speech2map/speech-recognition.module */ "./src/app/speech2map/speech-recognition.module.ts");
/* harmony import */ var _speech2map_speech_recognition_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./speech2map/speech-recognition.component */ "./src/app/speech2map/speech-recognition.component.ts");
/* harmony import */ var _services_speech2map_speech_recognition_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_services/speech2map/speech-recognition.service */ "./src/app/_services/speech2map/speech-recognition.service.ts");
/* harmony import */ var _services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_services/sidebar/sidebar.service */ "./src/app/_services/sidebar/sidebar.service.ts");
/* harmony import */ var _services_websocket_websocket_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./_services/websocket/websocket.service */ "./src/app/_services/websocket/websocket.service.ts");
/* harmony import */ var _services_socketservice_socket_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./_services/socketservice/socket.service */ "./src/app/_services/socketservice/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_15__["AppRoutes"]),
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                MaterialModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_9__["SidebarModule"],
                _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_11__["NavbarModule"],
                _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_10__["FooterModule"],
                _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_12__["FixedpluginModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
                _speech2map_speech_recognition_module__WEBPACK_IMPORTED_MODULE_24__["SpeechRecognitionModule"]
            ], entryComponents: [
                _speech2map_speech_recognition_component__WEBPACK_IMPORTED_MODULE_25__["SpeechRecognitionComponent"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_13__["AdminLayoutComponent"],
                _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_14__["AuthLayoutComponent"]
            ],
            providers: [
                _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"],
                _services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"],
                _services_index_service__WEBPACK_IMPORTED_MODULE_21__["UserService"],
                _services_index_service__WEBPACK_IMPORTED_MODULE_21__["MapService"],
                _services_index_service__WEBPACK_IMPORTED_MODULE_21__["ModelService"],
                _services_index_service__WEBPACK_IMPORTED_MODULE_21__["VersionService"],
                _services_follow_follow_service__WEBPACK_IMPORTED_MODULE_23__["FollowService"],
                _services_index_service__WEBPACK_IMPORTED_MODULE_21__["MeService"],
                _services_auth_lock_guard__WEBPACK_IMPORTED_MODULE_18__["LockGuard"],
                _services_auth_admin_guard__WEBPACK_IMPORTED_MODULE_19__["AdminGuard"],
                _services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_27__["SidebarService"],
                _services_speech2map_speech_recognition_service__WEBPACK_IMPORTED_MODULE_26__["SpeechRecognitionService"],
                _services_index_service__WEBPACK_IMPORTED_MODULE_21__["GroupService"],
                _services_websocket_websocket_service__WEBPACK_IMPORTED_MODULE_28__["WebsocketService"],
                _services_socketservice_socket_service__WEBPACK_IMPORTED_MODULE_29__["SocketService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HTTP_INTERCEPTORS"],
                    useClass: _services_auth_jwt_interceptor__WEBPACK_IMPORTED_MODULE_22__["JwtInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/admin/admin-layout.component */ "./src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/auth/auth-layout.component */ "./src/app/layouts/auth/auth-layout.component.ts");
/* harmony import */ var _services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services/auth/auth.guard */ "./src/app/_services/auth/auth.guard.ts");
/* harmony import */ var _services_auth_lock_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services/auth/lock.guard */ "./src/app/_services/auth/lock.guard.ts");
/* harmony import */ var _services_auth_admin_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_services/auth/admin.guard */ "./src/app/_services/auth/admin.guard.ts");





var AppRoutes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    }, {
        path: '',
        component: _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
        canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _services_auth_lock_guard__WEBPACK_IMPORTED_MODULE_3__["LockGuard"]],
        children: [
            {
                path: '',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            }, {
                path: 'administration',
                loadChildren: './administration/administration.module#AdministrationModule',
                canActivate: [_services_auth_admin_guard__WEBPACK_IMPORTED_MODULE_4__["AdminGuard"]]
            }, {
                path: 'manage',
                loadChildren: './manage/manage.module#ManageModule'
            }, {
                path: 'edit',
                loadChildren: './edit/edit.module#EditModule'
            }, {
                path: 'tools',
                loadChildren: './tools/tools.module#ToolsModule'
            }, {
                path: 'view',
                loadChildren: './view/view.module#ViewModule'
            }, {
                path: 'components',
                loadChildren: './components/components.module#ComponentsModule'
            }, {
                path: 'forms',
                loadChildren: './forms/forms.module#Forms'
            }, {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule'
            }, {
                path: 'maps',
                loadChildren: './maps/maps.module#MapsModule'
            }, {
                path: 'widgets',
                loadChildren: './widgets/widgets.module#WidgetsModule'
            }, {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule'
            }, {
                path: 'calendar',
                loadChildren: './calendar/calendar.module#CalendarModule'
            }, {
                path: '',
                loadChildren: './userpage/user.module#UserModule'
            }, {
                path: '',
                loadChildren: './timeline/timeline.module#TimelineModule'
            }, {
                path: '',
                loadChildren: './findpage/find.module#FindModule'
            }
        ]
    }, {
        path: '',
        component: _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__["AuthLayoutComponent"],
        children: [{
                path: 'pages',
                loadChildren: './pages/pages.module#PagesModule'
            }]
    }
];


/***/ }),

/***/ "./src/app/edit/conceptmap/conceptmap.component.html":
/*!***********************************************************!*\
  !*** ./src/app/edit/conceptmap/conceptmap.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"map\" #myDiagramDiv></div>"

/***/ }),

/***/ "./src/app/edit/conceptmap/conceptmap.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/edit/conceptmap/conceptmap.component.ts ***!
  \*********************************************************/
/*! exports provided: myDiagram, socket, ConceptMapComponent, loadModel, resetModel, initListener, stopListener, realTimeUpdateModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myDiagram", function() { return myDiagram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socket", function() { return socket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConceptMapComponent", function() { return ConceptMapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadModel", function() { return loadModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetModel", function() { return resetModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initListener", function() { return initListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopListener", function() { return stopListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "realTimeUpdateModel", function() { return realTimeUpdateModel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var gojs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gojs */ "./node_modules/gojs/release/go.js");
/* harmony import */ var gojs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gojs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_index_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/index.service */ "./src/app/_services/index.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _models_socketMessage_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_models/socketMessage.model */ "./src/app/_models/socketMessage.model.ts");
/* harmony import */ var _services_socketservice_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/socketservice/socket.service */ "./src/app/_services/socketservice/socket.service.ts");
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



var socket;
var ConceptMapComponent = /** @class */ (function () {
    function ConceptMapComponent(versionService, modelService, s) {
        this.versionService = versionService;
        this.modelService = modelService;
        this.s = s;
        socket = s;
    }
    ConceptMapComponent.prototype.ngAfterViewInit = function () {
        var conceptNodeTemplate, relationNodeTemplate, normalLinkTemplate, orLinkTemplate, mapTemplate, selectionAdornmentTemplate;
        var $ = gojs__WEBPACK_IMPORTED_MODULE_1__["GraphObject"].make; // for conciseness in defining templates
        // To simplify this code we define a function for creating a context menu button:
        function makeButton(text, action, visiblePredicate) {
            return $("ContextMenuButton", $(gojs__WEBPACK_IMPORTED_MODULE_1__["TextBlock"], text), { click: action }, 
            // don't bother with binding GraphObject.visible if there's no predicate
            visiblePredicate ? new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("visible", "", function (o, e) { return o.diagram ? visiblePredicate(o, e) : false; }).ofObject() : {});
        }
        function addNode(e, obj) {
            var adornment = obj.part;
            var diagram = e.diagram;
            diagram.startTransaction("Add State");
            // get the node data for which the user clicked the button
            var fromNode = adornment.adornedPart;
            var fromData = fromNode.data;
            // create a new "State" data object, positioned off to the right of the adorned Node
            var newNode = (fromNode.category == "concept" || fromNode.category == "map") ?
                { text: "New Relation", loc: "", category: "relation", error: "" } :
                { text: "New Concept", loc: "", category: "concept", error: "" };
            var p = fromNode.location.copy();
            p.x += 120;
            newNode.loc = gojs__WEBPACK_IMPORTED_MODULE_1__["Point"].stringify(p); // the "loc" property is a string, not a Point object
            // add the new node data to the model
            var model = diagram.model;
            model.addNodeData(newNode);
            // create a link data from the old node data to the new node data
            var nodeData = {
                from: model.getKeyForNodeData(fromData),
                to: model.getKeyForNodeData(newNode),
                category: "normal",
                error: ''
            };
            // and add the link data to the model
            model.addLinkData(nodeData);
            // select the new Node
            var newrelation = diagram.findNodeForData(newNode);
            diagram.select(newrelation);
            diagram.commitTransaction("Add State");
            // if the new node is off-screen, scroll the diagram to show the new node
            diagram.scrollToRect(newrelation.actualBounds);
        }
        function nodeInfo(d) {
            var str;
            if (d.category == "relation") {
                str = "Relation " + d.text + "\n";
            }
            else if (d.category == "concept") {
                str = "Concept " + d.text + "\n";
            }
            if (d.group)
                str += "Member of " + d.group;
            else
                str += "Top-level";
            str += "\nMore Informations: " + (d.moreInfo ? d.moreInfo : "");
            return str;
        }
        // Define the appearance and behavior for Links:
        function linkInfo(d) {
            return "Link:\nfrom " + d.from + " to " + d.to + +"\nMore Informations: " + (d.data.moreInfo ? d.data.moreInfo : "");
        }
        // Define the appearance and behavior for Groups:
        function groupInfo(adornment) {
            var g = adornment.adornedPart; // get the Group that the tooltip adorns
            var mems = g.memberParts.count;
            var links = 0;
            g.memberParts.each(function (part) {
                if (part instanceof gojs__WEBPACK_IMPORTED_MODULE_1__["Link"])
                    links++;
            });
            var relations = 0;
            g.memberParts.each(function (part) {
                if (part instanceof gojs__WEBPACK_IMPORTED_MODULE_1__["Node"] && part.category == "relation")
                    relations++;
            });
            return "Group " + g.data.key + ": " + g.data.text + "\n" + mems + " members including: \nLinks: " + links + "\nRelations: " + relations + "\nConcepts: " + (mems - links - relations) + "\nMore Informations: " + (g.data.moreInfo ? g.data.moreInfo : "");
        }
        // Define the behavior for the Diagram background:
        function diagramInfo(model) {
            return "Model:\n" + model.nodeDataArray.length + " nodes and " + model.linkDataArray.length + " links";
        }
        // this function is used to highlight a Group that the selection may be dropped into
        function highlightGroup(e, grp, show) {
            if (!grp)
                return;
            e.handled = true;
            if (show) {
                // cannot depend on the grp.diagram.selection in the case of external drag-and-drops;
                // instead depend on the DraggingTool.draggedParts or .copiedParts
                var tool = grp.diagram.toolManager.draggingTool;
                var map = tool.draggedParts || tool.copiedParts; // this is a Map
                // now we can check to see if the Group will accept membership of the dragged Parts
                if (grp.canAddMembers(map.toKeySet())) {
                    grp.isHighlighted = true;
                    return;
                }
            }
            grp.isHighlighted = false;
        }
        // Upon a drop onto a Group, we try to add the selection as members of the Group.
        // Upon a drop onto the background, or onto a top-level Node, make selection top-level.
        // If this is OK, we're done; otherwise we cancel the operation to rollback everything.
        function finishDrop(e, grp) {
            var ok = (grp !== null
                ? grp.addMembers(grp.diagram.selection, true)
                : e.diagram.commandHandler.addTopLevelParts(e.diagram.selection, true));
            if (!ok)
                e.diagram.currentTool.doCancel();
        }
        // this predicate is true if both nodes have the same color
        function validateLink(fromnode, fromport, tonode, toport) {
            if (fromnode.data.category == "relation") {
                if (tonode.data.category == "concept" || tonode.data.category == "map")
                    return true;
                else
                    return false;
            }
            else
                return tonode.data.category == "relation";
        }
        function checkInconsistence(d) {
            var message = "";
            myDiagram.selection.each(function (node) {
                myDiagram.startTransaction("remove error");
                var fix = node.data.fix;
                var error = node.data.error;
                if ('conceitoRepetido' === error) {
                    // remove concepts
                    console.log('remove concepts');
                }
                if (fix) {
                    myDiagram.model.setDataProperty(node.data, "text", fix);
                }
                var data = node.data;
                console.log(data.prevColor);
                data.category === 'relation' ? myDiagram.model.setDataProperty(data, "textColor", data.prevColor) : myDiagram.model.setDataProperty(data, "stroke", data.prevColor);
                myDiagram.model.setDataProperty(data, "error", null);
                myDiagram.model.setDataProperty(data, "textColor", '#333');
                myDiagram.commitTransaction("remove error");
            });
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: 'Você deseja fazer essa correção?',
                text: "A frase de liga\u00E7\u00E3o possui um erro de concord\u00E2ncia que pode prejudicar a mensagem da proposi\u00E7\u00E3o. \n            \n            Voc\u00EA pode corrigir para \"possuem\".",
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sim, faça a correção!',
                cancelButtonText: 'Não, deixe como está',
                confirmButtonClass: "btn btn-success",
                cancelButtonClass: "btn btn-danger",
                buttonsStyling: false
            }).then(function (result) {
                if (result.value) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                        title: 'Corrigido!',
                        text: 'A inconsistência foi corrigida com sucesso.',
                        type: 'success',
                        confirmButtonClass: "btn btn-success",
                        buttonsStyling: false
                    }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.noop);
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                        title: 'Cancelled',
                        text: 'Your imaginary file is safe :)',
                        type: 'error',
                        confirmButtonClass: "btn btn-info",
                        buttonsStyling: false
                    }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.noop);
                }
            });
        }
        // a context menu is an Adornment with a bunch of buttons in them
        var partContextMenu = $(gojs__WEBPACK_IMPORTED_MODULE_1__["Adornment"], "Vertical", makeButton("Properties", function (e, obj) {
            var contextmenu = obj.part; // the Button is in the context menu Adornment
            var part = contextmenu.adornedPart; // the adornedPart is the Part that the context menu adorns
            // now can do something with PART, or with its data, or with the Adornment (the context menu)
            if (part instanceof gojs__WEBPACK_IMPORTED_MODULE_1__["Link"]) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                    title: 'Link Informations',
                    text: linkInfo(part.data),
                    type: 'info',
                    showCancelButton: false,
                    confirmButtonText: 'Ok',
                    confirmButtonClass: "btn btn-success",
                    buttonsStyling: false
                });
            }
            else if (part instanceof gojs__WEBPACK_IMPORTED_MODULE_1__["Group"]) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                    title: 'Group Informations',
                    text: groupInfo(contextmenu),
                    type: 'info',
                    showCancelButton: false,
                    confirmButtonText: 'Ok',
                    confirmButtonClass: "btn btn-success",
                    buttonsStyling: false
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                    title: 'Node/Relation Informations',
                    text: nodeInfo(part.data),
                    type: 'info',
                    showCancelButton: false,
                    confirmButtonText: 'Ok',
                    confirmButtonClass: "btn btn-success",
                    buttonsStyling: false
                });
            }
        }, undefined), makeButton("Cut", function (e, obj) { e.diagram.commandHandler.cutSelection(); }, function (o) { return o.diagram.commandHandler.canCutSelection(); }), makeButton("Copy", function (e, obj) { e.diagram.commandHandler.copySelection(); }, function (o) { return o.diagram.commandHandler.canCopySelection(); }), makeButton("Paste", function (e, obj) { e.diagram.commandHandler.pasteSelection(e.diagram.lastInput.documentPoint); }, function (o) { return o.diagram.commandHandler.canPasteSelection(); }), makeButton("Delete", function (e, obj) { e.diagram.commandHandler.deleteSelection(); }, function (o) { return o.diagram.commandHandler.canDeleteSelection(); }), makeButton("Undo", function (e, obj) { e.diagram.commandHandler.undo(); }, function (o) { return o.diagram.commandHandler.canUndo(); }), makeButton("Redo", function (e, obj) { e.diagram.commandHandler.redo(); }, function (o) { return o.diagram.commandHandler.canRedo(); }), makeButton("Group", function (e, obj) { e.diagram.commandHandler.groupSelection(); }, function (o) { return o.diagram.commandHandler.canGroupSelection(); }), makeButton("Ungroup", function (e, obj) { e.diagram.commandHandler.ungroupSelection(); }, function (o) { return o.diagram.commandHandler.canUngroupSelection(); }));
        myDiagram =
            $(gojs__WEBPACK_IMPORTED_MODULE_1__["Diagram"], this.element.nativeElement, // create a Diagram for the DIV HTML element
            {
                allowDrop: true,
                // what to do when a drag-drop occurs in the Diagram's background
                mouseDrop: function (e) { finishDrop(e, null); },
                initialContentAlignment: gojs__WEBPACK_IMPORTED_MODULE_1__["Spot"].Center,
                "undoManager.isEnabled": true,
                "clickCreatingTool.archetypeNodeData": { text: "New Concept", category: "concept" },
                "linkingTool.archetypeLinkData": { category: "normal" },
                "commandHandler.archetypeGroupData": { text: "New Map", isGroup: true, category: "map" },
            });
        // provide a tooltip for the background of the Diagram, when not over any Part
        myDiagram.toolTip =
            $(gojs__WEBPACK_IMPORTED_MODULE_1__["Adornment"], "Auto", $(gojs__WEBPACK_IMPORTED_MODULE_1__["Shape"], {
                fill: "#FFFFCC"
            }), $(gojs__WEBPACK_IMPORTED_MODULE_1__["TextBlock"], {
                margin: 4
            }, new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("text", "", diagramInfo)));
        // provide a context menu for the background of the Diagram, when not over any Part
        myDiagram.contextMenu =
            $(gojs__WEBPACK_IMPORTED_MODULE_1__["Adornment"], "Vertical", makeButton("Paste", function (e, obj) { e.diagram.commandHandler.pasteSelection(e.diagram.lastInput.documentPoint); }, function (o) { return o.diagram.commandHandler.canPasteSelection(); }), makeButton("Undo", function (e, obj) { e.diagram.commandHandler.undo(); }, function (o) { return o.diagram.commandHandler.canUndo(); }), makeButton("Redo", function (e, obj) { e.diagram.commandHandler.redo(); }, function (o) { return o.diagram.commandHandler.canRedo(); }));
        conceptNodeTemplate =
            $(gojs__WEBPACK_IMPORTED_MODULE_1__["Node"], "Auto", // the Shape will go around the TextBlock
            new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("location", "loc", gojs__WEBPACK_IMPORTED_MODULE_1__["Point"].parse).makeTwoWay(gojs__WEBPACK_IMPORTED_MODULE_1__["Point"].stringify), $(gojs__WEBPACK_IMPORTED_MODULE_1__["Shape"], "RoundedRectangle", {
                portId: "",
                strokeWidth: 1,
                fromLinkable: true,
                fromLinkableSelfNode: true,
                fromLinkableDuplicates: true,
                toLinkable: true,
                toLinkableSelfNode: true,
                toLinkableDuplicates: true,
                cursor: "pointer",
                fill: $(gojs__WEBPACK_IMPORTED_MODULE_1__["Brush"], "Linear", { 0: "rgb(254, 201, 0)", 1: "rgb(254, 162, 0)" }),
                stroke: "black"
            }, 
            // Shape.fill is bound to Node.data.color
            new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("fill", "color").makeTwoWay(), new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("stroke", "stroke").makeTwoWay(), new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("stroke", "", function (data) { return data.error ? "red" : data.stroke ? data.stroke : "black"; }), new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("strokeWidth", "error", function (t) { return t ? 3 : 1; })), $(gojs__WEBPACK_IMPORTED_MODULE_1__["TextBlock"], {
                font: "bold 12px sans-serif",
                stroke: '#333',
                margin: 6,
                isMultiline: true,
                editable: true // allow in-place editing by user
            }, // some room around the text
            // TextBlock.text is bound to Node.data.key
            new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("text", "text").makeTwoWay(), new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("stroke", "textColor").makeTwoWay()), {
                toolTip: $(gojs__WEBPACK_IMPORTED_MODULE_1__["Adornment"], "Auto", $(gojs__WEBPACK_IMPORTED_MODULE_1__["Shape"], { fill: "#FFFFCC" }), $(gojs__WEBPACK_IMPORTED_MODULE_1__["TextBlock"], { margin: 4 }, // the tooltip shows the result of calling nodeInfo(data)
                new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("text", "", nodeInfo))),
                // this context menu Adornment is shared by all nodes
                contextMenu: partContextMenu
            });
        relationNodeTemplate =
            $(gojs__WEBPACK_IMPORTED_MODULE_1__["Node"], "Auto", // the Shape will go around the TextBlock
            new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("location", "loc", gojs__WEBPACK_IMPORTED_MODULE_1__["Point"].parse).makeTwoWay(gojs__WEBPACK_IMPORTED_MODULE_1__["Point"].stringify), $(gojs__WEBPACK_IMPORTED_MODULE_1__["Shape"], "Rectangle", {
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
            }), $(gojs__WEBPACK_IMPORTED_MODULE_1__["TextBlock"], {
                font: "bold 12px sans-serif",
                stroke: '#333',
                margin: 6,
                isMultiline: true,
                editable: true
            }, // some room around the text
            // TextBlock.text is bound to Node.data.key
            new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("text", "text").makeTwoWay(), new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("stroke", "textColor").makeTwoWay(), new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("stroke", "", function (data) { return data.error ? "red" : data.textColor ? data.textColor : "#333"; }), new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("font", "error", function (t) { return t ? "bold 14px sans-serif" : "bold 12px sans-serif"; })), {
                toolTip: $(gojs__WEBPACK_IMPORTED_MODULE_1__["Adornment"], "Auto", $(gojs__WEBPACK_IMPORTED_MODULE_1__["Shape"], { fill: "#FFFFCC" }), $(gojs__WEBPACK_IMPORTED_MODULE_1__["TextBlock"], { margin: 4 }, // the tooltip shows the result of calling nodeInfo(data)
                new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("text", "", nodeInfo))),
                // this context menu Adornment is shared by all nodes
                contextMenu: partContextMenu
            });
        normalLinkTemplate =
            $(gojs__WEBPACK_IMPORTED_MODULE_1__["Link"], {
                toShortLength: 3,
                relinkableFrom: true,
                relinkableTo: true,
                curve: gojs__WEBPACK_IMPORTED_MODULE_1__["Link"].Bezier,
                reshapable: true
            }, // allow the user to relink existing links
            new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("points").makeTwoWay(), $(gojs__WEBPACK_IMPORTED_MODULE_1__["Shape"], {
                strokeWidth: 1
            }, new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("stroke", "color").makeTwoWay()), $(gojs__WEBPACK_IMPORTED_MODULE_1__["Shape"], {
                toArrow: "Standard",
                stroke: null
            }, new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("stroke", "color").makeTwoWay(), new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("fill", "color").makeTwoWay()), {
                toolTip: $(gojs__WEBPACK_IMPORTED_MODULE_1__["Adornment"], "Auto", $(gojs__WEBPACK_IMPORTED_MODULE_1__["Shape"], { fill: "#FFFFCC" }), $(gojs__WEBPACK_IMPORTED_MODULE_1__["TextBlock"], {
                    margin: 4
                }, // the tooltip shows the result of calling linkInfo(data)
                new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("text", "", linkInfo))),
                // the same context menu Adornment is shared by all links
                contextMenu: partContextMenu
            });
        orLinkTemplate =
            $(gojs__WEBPACK_IMPORTED_MODULE_1__["Link"], {
                toShortLength: 3,
                relinkableFrom: true,
                relinkableTo: true,
                curve: gojs__WEBPACK_IMPORTED_MODULE_1__["Link"].Bezier,
                reshapable: true
            }, // allow the user to relink existing links
            new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("points").makeTwoWay(), $(gojs__WEBPACK_IMPORTED_MODULE_1__["Shape"], {
                strokeWidth: 1
            }, new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("stroke", "color").makeTwoWay()), $(gojs__WEBPACK_IMPORTED_MODULE_1__["Shape"], {
                toArrow: "Standard",
                stroke: null
            }, new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("fill", "color").makeTwoWay()), $(gojs__WEBPACK_IMPORTED_MODULE_1__["Shape"], {
                strokeWidth: 1,
                fromArrow: "BackwardSemiCircle"
            }, new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("fill", "color").makeTwoWay()), {
                toolTip: $(gojs__WEBPACK_IMPORTED_MODULE_1__["Adornment"], "Auto", $(gojs__WEBPACK_IMPORTED_MODULE_1__["Shape"], { fill: "#FFFFCC" }), $(gojs__WEBPACK_IMPORTED_MODULE_1__["TextBlock"], {
                    margin: 4
                }, // the tooltip shows the result of calling linkInfo(data)
                new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("text", "", linkInfo))),
                // the same context menu Adornment is shared by all links
                contextMenu: partContextMenu
            });
        mapTemplate =
            $(gojs__WEBPACK_IMPORTED_MODULE_1__["Group"], "Auto", {
                // highlight when dragging into the Group
                mouseDragEnter: function (e, grp, prev) { highlightGroup(e, grp, true); },
                mouseDragLeave: function (e, grp, next) { highlightGroup(e, grp, false); },
                computesBoundsAfterDrag: true,
                // when the selection is dropped into a Group, add the selected Parts into that Group;
                // if it fails, cancel the tool, rolling back any changes
                mouseDrop: finishDrop,
                handlesDragDropForMembers: true
            }, new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("isSubGraphExpanded", "expanded").makeTwoWay(), new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("location", "loc", gojs__WEBPACK_IMPORTED_MODULE_1__["Point"].parse).makeTwoWay(gojs__WEBPACK_IMPORTED_MODULE_1__["Point"].stringify), $(gojs__WEBPACK_IMPORTED_MODULE_1__["Shape"], "RoundedRectangle", {
                strokeWidth: 1,
                portId: "",
                cursor: "pointer",
                fromLinkable: true,
                fromLinkableSelfNode: true,
                fromLinkableDuplicates: true,
                toLinkable: true,
                toLinkableSelfNode: true,
                toLinkableDuplicates: true,
                fill: $(gojs__WEBPACK_IMPORTED_MODULE_1__["Brush"], "Linear", { 0: "rgba(224,234,252,0.5)", 1: "rgba(207,222,243,0.5)" })
            }, 
            //new go.Binding("fill", "isHighlighted", function(h) { return h ? "rgba(255,0,0,0.2)" : $(go.Brush, "Linear", { 0: "rgba(224,234,252,0.5)", 1: "rgba(207,222,243,0.5)" }); }).ofObject(),
            new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]('fill', 'color').makeTwoWay(), new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("stroke", "", function (data) { return data.error ? "red" : data.stroke ? data.stroke : "black"; }), new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("strokeWidth", "error", function (t) { return t ? 3 : 1; })), $(gojs__WEBPACK_IMPORTED_MODULE_1__["Panel"], "Vertical", {
                defaultAlignment: gojs__WEBPACK_IMPORTED_MODULE_1__["Spot"].Center,
                margin: 6
            }, $(gojs__WEBPACK_IMPORTED_MODULE_1__["Panel"], "Horizontal", {
                defaultAlignment: gojs__WEBPACK_IMPORTED_MODULE_1__["Spot"].Top
            }, $("SubGraphExpanderButton"), // the SubGraphExpanderButton is a panel that functions as a button to expand or collapse the subGraph
            $(gojs__WEBPACK_IMPORTED_MODULE_1__["TextBlock"], {
                font: "bold 12px sans-serif",
                stroke: '#333',
                margin: 4,
                isMultiline: true,
                editable: true,
                alignment: gojs__WEBPACK_IMPORTED_MODULE_1__["Spot"].Center
            }, new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("text", "text").makeTwoWay(), new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("stroke", "textColor").makeTwoWay())), $(gojs__WEBPACK_IMPORTED_MODULE_1__["Placeholder"], // create a placeholder to represent the area where the contents of the group are
            {
                padding: new gojs__WEBPACK_IMPORTED_MODULE_1__["Margin"](0, 5)
            })), // end Vertical Panel
            {
                toolTip: $(gojs__WEBPACK_IMPORTED_MODULE_1__["Adornment"], "Auto", $(gojs__WEBPACK_IMPORTED_MODULE_1__["Shape"], { fill: "#FFFFCC" }), $(gojs__WEBPACK_IMPORTED_MODULE_1__["TextBlock"], { margin: 4 }, // the tooltip shows the result of calling nodeInfo(data)
                new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("text", "", groupInfo).ofObject())),
                // this context menu Adornment is shared by all nodes
                contextMenu: partContextMenu
            }); // end Group
        selectionAdornmentTemplate =
            $(gojs__WEBPACK_IMPORTED_MODULE_1__["Adornment"], "Spot", $(gojs__WEBPACK_IMPORTED_MODULE_1__["Panel"], "Auto", $(gojs__WEBPACK_IMPORTED_MODULE_1__["Shape"], {
                fill: null,
                stroke: "blue",
                strokeWidth: 2
            }), $(gojs__WEBPACK_IMPORTED_MODULE_1__["Placeholder"]) // a Placeholder sizes itself to the selected Node
            ), 
            // the button to create a "next" node, at the top-right corner
            $("Button", {
                alignment: gojs__WEBPACK_IMPORTED_MODULE_1__["Spot"].TopRight,
                click: addNode // this function is defined below
            }, $(gojs__WEBPACK_IMPORTED_MODULE_1__["Shape"], {
                geometryString: "M0 0 L3 0 3 10 6 10 x F1 M6 6 L14 6 14 14 6 14z",
                fill: "gray"
            })), $("Button", new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("opacity", "error", function (t) { return t ? 1 : 0; }), { alignment: gojs__WEBPACK_IMPORTED_MODULE_1__["Spot"].BottomRight, opacity: 0 }, $(gojs__WEBPACK_IMPORTED_MODULE_1__["Shape"], "FivePointedBurst", { width: 8, height: 8 }), { click: checkInconsistence })); // end Adornment
        conceptNodeTemplate.selectionAdornmentTemplate = selectionAdornmentTemplate;
        relationNodeTemplate.selectionAdornmentTemplate = selectionAdornmentTemplate;
        mapTemplate.selectionAdornmentTemplate = selectionAdornmentTemplate;
        myDiagram.nodeTemplateMap.add("concept", conceptNodeTemplate);
        myDiagram.nodeTemplateMap.add("relation", relationNodeTemplate);
        myDiagram.linkTemplateMap.add("normal", normalLinkTemplate);
        myDiagram.linkTemplateMap.add("or", orLinkTemplate);
        myDiagram.groupTemplateMap.add("map", mapTemplate);
        myDiagram.toolManager.linkingTool.linkValidation = validateLink;
        myDiagram.toolManager.relinkingTool.linkValidation = validateLink;
        var currentModel = this.modelService.getCurrentModel();
        if (!!currentModel)
            loadModel(currentModel);
        else
            resetModel();
    };
    ConceptMapComponent.prototype.ngOnDestroy = function () {
        localStorage.setItem('currentModel', myDiagram.model.toJson());
    };
    ConceptMapComponent.prototype.changeColor = function (color) {
        // Always make changes in a transaction, except when initializing the diagram.
        myDiagram.startTransaction("change color");
        myDiagram.selection.each(function (node) {
            if (node instanceof gojs__WEBPACK_IMPORTED_MODULE_1__["Node"]) {
                // Examine and modify the data, not the Node directly.
                var data = node.data;
                // Call setDataProperty to support undo/redo as well as
                // automatically evaluating any relevant bindings.
                myDiagram.model.setDataProperty(data, "text-color", color);
            }
        });
        myDiagram.commitTransaction("change color");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myDiagramDiv'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ConceptMapComponent.prototype, "element", void 0);
    ConceptMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'conceptmap',
            template: __webpack_require__(/*! ./conceptmap.component.html */ "./src/app/edit/conceptmap/conceptmap.component.html")
        }),
        __metadata("design:paramtypes", [_services_index_service__WEBPACK_IMPORTED_MODULE_2__["VersionService"], _services_index_service__WEBPACK_IMPORTED_MODULE_2__["ModelService"], _services_socketservice_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"]])
    ], ConceptMapComponent);
    return ConceptMapComponent;
}());

function loadModel(loadedModel) {
    var model = gojs__WEBPACK_IMPORTED_MODULE_1__["Model"].fromJson(loadedModel);
    model.makeUniqueKeyFunction = function () { return Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(); };
    model["makeUniqueLinkKeyFunction"] = function () { return Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(); };
    model["linkKeyProperty"] = 'key';
    myDiagram.model = model;
}
function resetModel() {
    var model = new gojs__WEBPACK_IMPORTED_MODULE_1__["GraphLinksModel"]([], []);
    model.makeUniqueKeyFunction = function () { return Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(); };
    model.makeUniqueLinkKeyFunction = function () { return Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(); };
    model.linkKeyProperty = 'key';
    myDiagram.model = model;
}
var monitor = function (e) {
    var message = new _models_socketMessage_model__WEBPACK_IMPORTED_MODULE_5__["SocketMessage"]();
    message.type = 'sendModel';
    message.content = myDiagram.model.toJson();
    socket.send(message);
    //if(e.isTransactionFinished){
    //console.log(e);
    //}
};
function initListener() {
    myDiagram.addModelChangedListener(monitor);
}
function stopListener() {
    myDiagram.removeModelChangedListener(monitor);
}
function getGroupIndex(arr) {
    var index = -1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].hasOwnProperty('isGroup')) {
            index = i;
            break;
        }
    }
    return index;
}
function realTimeUpdateModel(model) {
    stopListener();
    var received = gojs__WEBPACK_IMPORTED_MODULE_1__["Model"].fromJson(model);
    var diff = myDiagram.model["computeJsonDifference"](received);
    diff = JSON.parse(diff);
    if (diff.insertedNodeKeys) {
        var index_1 = getGroupIndex(diff.modifiedNodeData);
        if (index_1 > -1) {
            myDiagram.startTransaction('newGroup');
            myDiagram.model.addNodeData(diff.modifiedNodeData[index_1]);
            myDiagram.commitTransaction('newGroup');
            diff.insertedNodeKeys = diff.insertedNodeKeys.filter(function (el) { return el != diff.modifiedNodeData[index_1].key; });
            diff.modifiedNodeData.splice(index_1, 1);
        }
    }
    else if (diff.modifiedNodeData) {
        var index = getGroupIndex(diff.modifiedNodeData);
        if (index > -1) {
            delete (diff.modifiedNodeData[index].isGroup);
        }
    }
    myDiagram.model.applyIncrementalJson(JSON.stringify(diff));
    initListener();
}


/***/ }),

/***/ "./src/app/global.vars.ts":
/*!********************************!*\
  !*** ./src/app/global.vars.ts ***!
  \********************************/
/*! exports provided: authApiUri, userApiUri, mapApiUri, meApiUri, versionApiUri, followApiUri, groupApiUri */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authApiUri", function() { return authApiUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userApiUri", function() { return userApiUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapApiUri", function() { return mapApiUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meApiUri", function() { return meApiUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "versionApiUri", function() { return versionApiUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followApiUri", function() { return followApiUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupApiUri", function() { return groupApiUri; });
var authApiUri = 'http://cmpaas.org/v1/auth';
var userApiUri = 'http://cmpaas.org/v1/users';
var mapApiUri = 'http://cmpaas.org/v1/maps';
var meApiUri = 'http://cmpaas.org/v1/users/me';
var versionApiUri = 'http://cmpaas.org/v1/versions';
var followApiUri = 'http://cmpaas.org/v1/follow';
var groupApiUri = 'http://cmpaas.org/v1/groups';


/***/ }),

/***/ "./src/app/layouts/admin/admin-layout.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layouts/admin/admin-layout.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"wrapper\">\r\n    <div class=\"sidebar\" data-color=\"white\" data-background-color=\"black\" data-image=\"./assets/img/sidebar-1.jpg\">\r\n        <app-sidebar-cmp></app-sidebar-cmp>\r\n        <div class=\"sidebar-background\" style=\"background-image: url(assets/img/sidebar-1.jpg)\"></div>\r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <app-navbar-cmp></app-navbar-cmp>\r\n        <router-outlet></router-outlet>\r\n        <div *ngIf=\"!isMap()\">\r\n            <app-footer-cmp></app-footer-cmp>\r\n        </div>\r\n    </div>\r\n    <app-fixedplugin *ngIf=\"isEditor()\"></app-fixedplugin>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layouts/admin/admin-layout.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layouts/admin/admin-layout.component.ts ***!
  \*********************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _md_md_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../md/md.module */ "./src/app/md/md.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(router, location) {
        this.router = router;
        this.yScrollStack = [];
        this.location = location;
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        var html = document.getElementsByTagName('html')[0];
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemSidebar);
            html.classList.add('perfect-scrollbar-on');
        }
        else {
            html.classList.add('perfect-scrollbar-off');
        }
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            _this.navbar.sidebarClose();
        });
        this.navItems = [
            { type: _md_md_module__WEBPACK_IMPORTED_MODULE_2__["NavItemType"].NavbarLeft, title: 'Dashboard', iconClass: 'fa fa-dashboard' },
            {
                type: _md_md_module__WEBPACK_IMPORTED_MODULE_2__["NavItemType"].NavbarRight,
                title: '',
                iconClass: 'fa fa-bell-o',
                numNotifications: 5,
                dropdownItems: [
                    { title: 'Notification 1' },
                    { title: 'Notification 2' },
                    { title: 'Notification 3' },
                    { title: 'Notification 4' },
                    { title: 'Another Notification' }
                ]
            },
            {
                type: _md_md_module__WEBPACK_IMPORTED_MODULE_2__["NavItemType"].NavbarRight,
                title: '',
                iconClass: 'fa fa-list',
                dropdownItems: [
                    { iconClass: 'pe-7s-mail', title: 'Messages' },
                    { iconClass: 'pe-7s-help1', title: 'Help Center' },
                    { iconClass: 'pe-7s-tools', title: 'Settings' },
                    'separator',
                    { iconClass: 'pe-7s-lock', title: 'Lock Screen' },
                    { iconClass: 'pe-7s-close-circle', title: 'Log Out' }
                ]
            },
            { type: _md_md_module__WEBPACK_IMPORTED_MODULE_2__["NavItemType"].NavbarLeft, title: 'Search', iconClass: 'fa fa-search' },
            { type: _md_md_module__WEBPACK_IMPORTED_MODULE_2__["NavItemType"].NavbarLeft, title: 'Account' },
            {
                type: _md_md_module__WEBPACK_IMPORTED_MODULE_2__["NavItemType"].NavbarLeft,
                title: 'Dropdown',
                dropdownItems: [
                    { title: 'Action' },
                    { title: 'Another action' },
                    { title: 'Something' },
                    { title: 'Another action' },
                    { title: 'Something' },
                    'separator',
                    { title: 'Separated link' },
                ]
            },
            { type: _md_md_module__WEBPACK_IMPORTED_MODULE_2__["NavItemType"].NavbarLeft, title: 'Log out' }
        ];
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.isMap = function () {
        if (this.location.prepareExternalUrl(this.location.path()) === '/maps/fullscreen') {
            return true;
        }
        else {
            return false;
        }
    };
    AdminLayoutComponent.prototype.isEditor = function () {
        if (this.location.prepareExternalUrl(this.location.path()) === '/edit/cmap' ||
            this.location.prepareExternalUrl(this.location.path()).startsWith('/edit/cmap?')) {
            return true;
        }
        else {
            return false;
        }
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemSidebar);
            ps.update();
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidebar'),
        __metadata("design:type", Object)
    ], AdminLayoutComponent.prototype, "sidebar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]),
        __metadata("design:type", _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"])
    ], AdminLayoutComponent.prototype, "navbar", void 0);
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./admin-layout.component.html */ "./src/app/layouts/admin/admin-layout.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth/auth-layout.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layouts/auth/auth-layout.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg bg-primary navbar-transparent navbar-absolute\" color-on-scroll=\"500\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-wrapper\">\r\n      <a class=\"navbar-brand d-none d-sm-none d-md-block\" [routerLink]=\"['/dashboard']\">Knowledge Portal | CMPaaS Project</a>\r\n      <a class=\"navbar-brand d-block d-sm-block d-md-none\" [routerLink]=\"['/dashboard']\">MD Pro Angular</a>\r\n    </div>\r\n    <button mat-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\r\n      <span class=\"sr-only\">Toggle navigation</span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse justify-content-end\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"!this.isLocked()\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">\r\n            <i class=\"material-icons\">dashboard</i> Dashboard\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"!this.isLocked()\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/pages/register']\">\r\n            <i class=\"material-icons\">person_add</i> Register\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"!this.isLocked()\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/pages/login']\">\r\n            <i class=\"material-icons\">fingerprint</i> Login\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"this.isLocked()\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/pages/lock']\">\r\n            <i class=\"material-icons\">lock_open</i> Lock\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n  <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/layouts/auth/auth-layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layouts/auth/auth-layout.component.ts ***!
  \*******************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/auth/auth.service */ "./src/app/_services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent(router, element, authService) {
        this.router = router;
        this.element = element;
        this.authService = authService;
        this.mobile_menu_visible = 0;
        this.user = JSON.parse(this.authService.getCurrentUser());
        this.sidebarVisible = false;
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            _this.sidebarClose();
        });
    };
    AuthLayoutComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    AuthLayoutComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    AuthLayoutComponent.prototype.sidebarToggle = function () {
        var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.wrapper-full-page')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                this.sidebarClose();
            }.bind(this);
            body.classList.add('nav-open');
        }
        else {
            document.getElementsByClassName("close-layer")[0].remove();
            this.sidebarClose();
        }
    };
    AuthLayoutComponent.prototype.isLocked = function () {
        if (this.user && !this.user.token) {
            return true;
        }
        return false;
    };
    AuthLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./auth-layout.component.html */ "./src/app/layouts/auth/auth-layout.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/md/md-chart/md-chart.component.css":
/*!****************************************************!*\
  !*** ./src/app/md/md-chart/md-chart.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/md/md-chart/md-chart.component.html":
/*!*****************************************************!*\
  !*** ./src/app/md/md-chart/md-chart.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"header\">\r\n    <h4 class=\"title\">{{ title }}</h4>\r\n    <p class=\"category\">{{ subtitle }}</p>\r\n  </div>\r\n  <div class=\"content\">\r\n    <div [attr.id]=\"chartId\" class=\"ct-chart {{ chartClass }}\"></div>\r\n\r\n    <div class=\"footer\">\r\n      <div class=\"legend\">\r\n        <span *ngFor=\"let item of legendItems\">\r\n          <i [ngClass]=\"item.imageClass\"></i> {{ item.title }}\r\n        </span>\r\n      </div>\r\n      <hr *ngIf=\"withHr\">\r\n      <div class=\"stats\">\r\n        <i [ngClass]=\"footerIconClass\"></i> {{ footerText }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/md/md-chart/md-chart.component.ts":
/*!***************************************************!*\
  !*** ./src/app/md/md-chart/md-chart.component.ts ***!
  \***************************************************/
/*! exports provided: ChartType, MdChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartType", function() { return ChartType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdChartComponent", function() { return MdChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartist */ "./node_modules/chartist/dist/chartist.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartType;
(function (ChartType) {
    ChartType[ChartType["Pie"] = 0] = "Pie";
    ChartType[ChartType["Line"] = 1] = "Line";
    ChartType[ChartType["Bar"] = 2] = "Bar";
})(ChartType || (ChartType = {}));
var MdChartComponent = /** @class */ (function () {
    function MdChartComponent() {
    }
    MdChartComponent_1 = MdChartComponent;
    MdChartComponent.prototype.ngOnInit = function () {
        this.chartId = "md-chart-" + MdChartComponent_1.currentId++;
    };
    MdChartComponent.prototype.ngAfterViewInit = function () {
        switch (this.chartType) {
            case ChartType.Pie:
                new chartist__WEBPACK_IMPORTED_MODULE_1__["Pie"]("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
            case ChartType.Line:
                new chartist__WEBPACK_IMPORTED_MODULE_1__["Line"]("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
            case ChartType.Bar:
                new chartist__WEBPACK_IMPORTED_MODULE_1__["Bar"]("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
        }
    };
    MdChartComponent.currentId = 1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "subtitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "chartClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MdChartComponent.prototype, "chartType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MdChartComponent.prototype, "chartData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MdChartComponent.prototype, "chartOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MdChartComponent.prototype, "chartResponsive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "footerIconClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "footerText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MdChartComponent.prototype, "legendItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], MdChartComponent.prototype, "withHr", void 0);
    MdChartComponent = MdChartComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-md-chart',
            template: __webpack_require__(/*! ./md-chart.component.html */ "./src/app/md/md-chart/md-chart.component.html"),
            styles: [__webpack_require__(/*! ./md-chart.component.css */ "./src/app/md/md-chart/md-chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MdChartComponent);
    return MdChartComponent;
    var MdChartComponent_1;
}());



/***/ }),

/***/ "./src/app/md/md-table/md-table.component.html":
/*!*****************************************************!*\
  !*** ./src/app/md/md-table/md-table.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"content table-responsive\">\r\n    <table class=\"table\">\r\n      <tbody>\r\n          <tr *ngFor=\"let row of data.dataRows\">\r\n            <!-- <td *ngFor=\"let cell of row\">{{ cell }}</td> -->\r\n            <td>\r\n                <div class=\"flag\">\r\n                    <img src=\"./assets/img/flags/{{row[0]}}.png\" alt=\"\">\r\n                </div>\r\n            </td>\r\n            <td>\r\n                {{row[1]}}\r\n            </td>\r\n            <td class=\"text-right\">\r\n                {{row[2]}}\r\n            </td>\r\n            <td class=\"text-right\">\r\n                {{row[3]}}\r\n            </td>\r\n          </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/md/md-table/md-table.component.ts":
/*!***************************************************!*\
  !*** ./src/app/md/md-table/md-table.component.ts ***!
  \***************************************************/
/*! exports provided: MdTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTableComponent", function() { return MdTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MdTableComponent = /** @class */ (function () {
    function MdTableComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MdTableComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MdTableComponent.prototype, "subtitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MdTableComponent.prototype, "cardClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MdTableComponent.prototype, "data", void 0);
    MdTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-md-table',
            template: __webpack_require__(/*! ./md-table.component.html */ "./src/app/md/md-table/md-table.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], MdTableComponent);
    return MdTableComponent;
}());



/***/ }),

/***/ "./src/app/md/md.module.ts":
/*!*********************************!*\
  !*** ./src/app/md/md.module.ts ***!
  \*********************************/
/*! exports provided: NavItemType, MdModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItemType", function() { return NavItemType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdModule", function() { return MdModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _md_table_md_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./md-table/md-table.component */ "./src/app/md/md-table/md-table.component.ts");
/* harmony import */ var _md_chart_md_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./md-chart/md-chart.component */ "./src/app/md/md-chart/md-chart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NavItemType;
(function (NavItemType) {
    NavItemType[NavItemType["Sidebar"] = 1] = "Sidebar";
    NavItemType[NavItemType["NavbarLeft"] = 2] = "NavbarLeft";
    NavItemType[NavItemType["NavbarRight"] = 3] = "NavbarRight"; // Right-aligned link on navbar in desktop mode, shown above sidebar items on collapsed sidebar in mobile mode
})(NavItemType || (NavItemType = {}));
var MdModule = /** @class */ (function () {
    function MdModule() {
    }
    MdModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: [
                _md_table_md_table_component__WEBPACK_IMPORTED_MODULE_3__["MdTableComponent"],
                _md_chart_md_chart_component__WEBPACK_IMPORTED_MODULE_4__["MdChartComponent"]
            ],
            exports: [
                _md_table_md_table_component__WEBPACK_IMPORTED_MODULE_3__["MdTableComponent"],
                _md_chart_md_chart_component__WEBPACK_IMPORTED_MODULE_4__["MdChartComponent"]
            ]
        })
    ], MdModule);
    return MdModule;
}());



/***/ }),

/***/ "./src/app/secrets.vars.ts":
/*!*********************************!*\
  !*** ./src/app/secrets.vars.ts ***!
  \*********************************/
/*! exports provided: googleApiKey, googleClientId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleApiKey", function() { return googleApiKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleClientId", function() { return googleClientId; });
var googleApiKey = 'AIzaSyDUUw55UjzKPQPogEaH8AAwa8Hfo3eYWLY';
var googleClientId = '305079514663-ddrsd311mqdghdhkcq4uu8be4i013e41.apps.googleusercontent.com';


/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".f-left {\r\n    float: left;\r\n}\r\n\r\n.f-44 {\r\n    font-size: 44px;\r\n    color: #000\r\n}\r\n\r\n.active {\r\n    border: 4px solid;\r\n    border-color: #f44336 !important;\r\n}\r\n\r\n.active .material-icons {\r\n    line-height: 21px;\r\n    background-color: #2CA8FF;\r\n}\r\n\r\n.no-line {\r\n    border-bottom: 0px !important;\r\n}\r\n\r\n.color-picker {\r\n    height: 75px !important;\r\n}\r\n\r\n.more-info {\r\n    height: 145px !important;\r\n}\r\n\r\n.realtime {\r\n    height: 120px !important;\r\n}\r\n\r\n.realtime-link{\r\n    font-weight: normal;\r\n    font-size: .8125rem !important;\r\n}\r\n\r\n/* \r\n.revert {\r\n    -webkit-transform: rotate(180deg);\r\n    -moz-transform: rotate(180deg);\r\n    -o-transform: rotate(180deg);\r\n    -ms-transform: rotate(180deg);\r\n    transform: rotate(180deg)\r\n} */"

/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Fixed Plugin configurator, used just for Demo Purpose -->\r\n<div class=\"fixed-plugin\">\r\n    <div class=\"dropdown show-dropdown\">\r\n        <a href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"true\" id=\"bt-fixed-plugin\">\r\n            <i class=\"fa fa-cog fa-2x\"> </i>\r\n        </a>\r\n        <ul class=\"dropdown-menu\">\r\n            <li class=\"header-title\">Operations</li>\r\n            <li class=\"adjustments-line\">\r\n                <button mat-raised-button mat-min-fab class=\"btn btn-danger btn-round btn-fab btn-sm\" title=\"Clear all and create a new map\" id=\"bt-new-map\">\r\n                    <i class=\"material-icons\">clear</i>\r\n                </button>\r\n                <button mat-raised-button mat-min-fab class=\"btn btn-success btn-round btn-fab btn-sm\" title=\"Save as new map\" id=\"bt-save\">\r\n                    <i class=\"material-icons\">save</i>\r\n                </button>\r\n                <button mat-raised-button mat-min-fab class=\"btn btn-warning btn-round btn-fab btn-sm\" title=\"Create a new version of this map\" id=\"bt-version\" [disabled]=\"!mapService.getCurrentMap()\">\r\n                    <i class=\"material-icons\">call_split</i>\r\n                    <!-- <i class=\"material-icons\">device_hub</i> -->\r\n                </button>\r\n            </li>\r\n            <li class=\"header-title\">Advanced Operations</li>\r\n            <li class=\"adjustments-line\">\r\n                <!-- <button mat-raised-button mat-min-fab class=\"btn btn-info btn-round btn-fab btn-sm\" title=\"Check map inconsistencies\" id=\"bt-realtime\">\r\n                    <i onclick=\"javascript:void(0)\" class=\"material-icons\">sync</i>\r\n                </button> -->\r\n                <button mat-raised-button mat-min-fab class=\"btn btn-info btn-round btn-fab btn-sm\" title=\"Check map inconsistencies\" id=\"bt-check-map\">\r\n                    <i onclick=\"javascript:void(0)\" class=\"material-icons\">spellcheck</i>\r\n                </button>\r\n                <button mat-raised-button mat-min-fab class=\"btn btn-primary btn-round btn-fab btn-sm\" title=\"Speech2Map\" id=\"bt-speech2map-map\">\r\n                    <i onclick=\"javascript:void(0)\" class=\"material-icons\">mic</i>\r\n                </button>\r\n            </li>\r\n            <li class=\"header-title\">Colors</li>\r\n            <li class=\"adjustments-line no-line\">\r\n                <button type=\"button\" mat-raised-button mat-min-fab class=\"btn btn-default btn-round btn-fab btn-sm color-change\" title=\"Font color\" id=\"bt-font\">\r\n                    <i class=\"material-icons\">format_color_text</i>\r\n                </button>\r\n                <button mat-raised-button mat-min-fab class=\"btn btn-default btn-round btn-fab btn-sm color-change\" title=\"Border/Line color\" id=\"bt-stroke\">\r\n                    <i class=\"material-icons\">border_color</i>\r\n                </button>\r\n                <button mat-raised-button mat-min-fab class=\"btn btn-default btn-round btn-fab btn-sm color-change\" title=\"Background-Color\" id=\"bt-background\">\r\n                    <i class=\"material-icons\">format_color_fill</i>\r\n                </button>\r\n            </li>\r\n            <li class=\"adjustments-line color-picker\">\r\n                <a href=\"javascript:void(0)\" class=\"switch-trigger\" id=\"a-color-picker\">\r\n                  <div class=\"ml-auto mr-auto\">\r\n                    <span class=\"badge filter badge-rose\" data-color=\"#e91e63\"></span>\r\n                    <span class=\"badge filter badge-danger\" data-color=\"#f44336\"></span>\r\n                    <span class=\"badge filter badge-orange\" data-color=\"#ff9800\"></span>\r\n                    <span class=\"badge filter badge-purple\" data-color=\"#9c27b0\"></span>\r\n                    <span class=\"badge filter badge-green\" data-color=\"#4caf50\"></span>\r\n                    <span class=\"badge filter badge-azure\" data-color=\"#00bcd4\"></span> <!--add active class to set active badger-->\r\n                    <span class=\"badge filter badge-white\" data-color=\"white\"></span>\r\n                    <span class=\"badge filter badge-grey\" data-color=\"#bcbcbc\"></span>\r\n                    <span class=\"badge filter badge-black\" data-color=\"black\"></span>\r\n                    <span class=\"badge filter badge-rose2\" data-color=\"#E285A1\" data-color2=\"#e91e63\"></span>\r\n                    <span class=\"badge filter badge-danger2\" data-color=\"#F2938C\" data-color2=\"#f44336\"></span>\r\n                    <span class=\"badge filter badge-orange2\" data-color=\"#FFD08E\" data-color2=\"#ff9800\"></span>\r\n                    <span class=\"badge filter badge-purple2\" data-color=\"#A87CAF\" data-color2=\"#9c27b0\"></span>\r\n                    <span class=\"badge filter badge-green2\" data-color=\"#B0F4BB\" data-color2=\"#4caf50\"></span>\r\n                    <span class=\"badge filter badge-azure2\" data-color=\"#93F2FF\" data-color2=\"#00bcd4\"></span> <!--add active class to set active badger-->\r\n                    <span class=\"badge filter badge-white2\" data-color=\"#FCFCFC\" data-color2=\"#C8C8C8\"></span>\r\n                    <span class=\"badge filter badge-grey2\" data-color=\"#E5E5E5\" data-color2=\"#bcbcbc\"></span>\r\n                    <span class=\"badge filter badge-black2\" data-color=\"#727272\" data-color2=\"#000\"></span>\r\n                  </div>\r\n                    <div class=\"clearfix\"></div>\r\n                </a>\r\n            </li>\r\n            <li class=\"header-title\">More Info...</li>\r\n            <li class=\"adjustments-line more-info\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <textarea class=\"form-control\" placeholder=\"Attach information about this element...\" rows=\"4\" id=\"info-textarea\"></textarea>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <button mat-raised-button mat-min-fab class=\"btn btn-success btn-round btn-fab btn-sm\" title=\"Save this info...\" id=\"bt-save-info\">\r\n                            <i class=\"material-icons\">done</i>\r\n                        </button>\r\n                        <button mat-raised-button mat-min-fab class=\"btn btn-danger btn-round btn-fab btn-sm\" title=\"Discard this info...\" id=\"bt-discard-info\">\r\n                            <i class=\"material-icons\">delete_forever</i>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"header-title\">Realtime edition</li>\r\n            <li class=\"adjustments-line realtime\">\r\n              <a href=\"javascript:void(0)\" class=\"switch-trigger\">\r\n                  <p>Activate realtime</p>\r\n                  <label class=\"ml-auto\">\r\n                    <div class=\"togglebutton switch-realtime\">\r\n                      <label>\r\n                          <input type=\"checkbox\">\r\n                              <span class=\"toggle\"></span>\r\n                      </label>\r\n                    </div>\r\n                  </label>\r\n                  <div class=\"clearfix\"></div>\r\n                  <div class=\"ripple-container\"></div>\r\n              </a>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-9\">\r\n                        <p *ngIf=\"isEnabled\" class=\"realtime-link\" id=\"realtime-link\"></p>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <button *ngIf=\"isEnabled\" type=\"button\" mat-raised-button mat-min-fab class=\"btn btn-primary btn-round btn-fab btn-sm\" title=\"Copy shareable link\" (click)=\"copyLink()\">\r\n                            <i class=\"material-icons\">file_copy</i>\r\n                        </button>\r\n                    </div>                   \r\n                </div>  \r\n            \r\n            </li>\r\n            <!-- <li class=\"adjustments-line\">\r\n              <a href=\"javascript:void(0)\" class=\"switch-trigger\">\r\n                  <p>Sidebar Images</p>\r\n                  <label class=\"switch-mini ml-auto\">\r\n                    <div class=\"togglebutton switch-sidebar-image\">\r\n                      <label>\r\n                          <input type=\"checkbox\" checked=\"\">\r\n                            <span class=\"toggle\"></span>\r\n                      </label>\r\n                    </div>\r\n                  </label>\r\n                  <div class=\"clearfix\"></div>\r\n                  <div class=\"ripple-container\"></div>\r\n              </a>\r\n            </li>\r\n            <li class=\"header-title\">Images</li>\r\n            <li class=\"active\">\r\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                    <img src=\"./assets/img/sidebar-1.jpg\" alt=\"\" />\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                    <img src=\"./assets/img/sidebar-2.jpg\" alt=\"\" />\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                    <img src=\"./assets/img/sidebar-3.jpg\" alt=\"\" />\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                    <img src=\"./assets/img/sidebar-4.jpg\" alt=\"\" />\r\n                </a>\r\n            </li> -->\r\n            \r\n        </ul>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.component.ts ***!
  \*************************************************************/
/*! exports provided: FixedpluginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedpluginComponent", function() { return FixedpluginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_index_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/index.service */ "./src/app/_services/index.service.ts");
/* harmony import */ var _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../edit/conceptmap/conceptmap.component */ "./src/app/edit/conceptmap/conceptmap.component.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gojs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gojs */ "./node_modules/gojs/release/go.js");
/* harmony import */ var gojs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gojs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _speech2map_speech_recognition_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../speech2map/speech-recognition.component */ "./src/app/speech2map/speech-recognition.component.ts");
/* harmony import */ var _services_socketservice_socket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../_services/socketservice/socket.service */ "./src/app/_services/socketservice/socket.service.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var _models_socketMessage_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../_models/socketMessage.model */ "./src/app/_models/socketMessage.model.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var $$ = gojs__WEBPACK_IMPORTED_MODULE_5__["GraphObject"].make; // for conciseness in defining templates
var md = {
    misc: {
        navbar_menu_visible: 0,
        active_collapse: true,
        disabled_collapse_init: 0,
    }
};
var FixedpluginComponent = /** @class */ (function () {
    function FixedpluginComponent(router, mapService, authService, dialog, socket, clipboardService, activateRoute) {
        this.router = router;
        this.mapService = mapService;
        this.authService = authService;
        this.dialog = dialog;
        this.socket = socket;
        this.clipboardService = clipboardService;
        this.activateRoute = activateRoute;
        this.isEnabled = false;
    }
    FixedpluginComponent.prototype.initRealtime = function () {
        var _this = this;
        this.socket.connect();
        var message = new _models_socketMessage_model__WEBPACK_IMPORTED_MODULE_12__["SocketMessage"]();
        message.type = 'join';
        message.username = JSON.parse(this.authService.getCurrentUser()).username;
        setTimeout(function () {
            message.content = _this.activateRoute.snapshot.queryParams.roomId;
            _this.socket.send(message);
        }, 0);
        this.socket.messages.subscribe(function (msg) {
            if (msg.type == 'newMessage')
                $.notify({
                    icon: 'notifications',
                    message: "<b>" + msg.content.from + ": </b>" + msg.content.text + "."
                }, {
                    type: 'success',
                    timer: 2000,
                    placement: {
                        from: 'top',
                        align: 'right'
                    },
                    template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0} alert-with-icon" role="alert">' +
                        '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                        '<i class="material-icons" data-notify="icon">notifications</i> ' +
                        '<span data-notify="title">{1}</span> ' +
                        '<span data-notify="message">{2}</span>' +
                        '<div class="progress" data-notify="progressbar">' +
                        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                        '</div>' +
                        '<a href="{3}" target="{4}" data-notify="url"></a>' +
                        '</div>'
                });
            else if (msg.type == 'updateModel')
                Object(_edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["realTimeUpdateModel"])(msg.content);
        });
    };
    FixedpluginComponent.prototype.disconnectRealTime = function () {
        this.socket.disconnect();
    };
    FixedpluginComponent.prototype.startRealtime = function (id) {
        $('.switch-realtime input').attr('checked', true);
        this.initRealtime();
        this.router.navigate(['edit', 'cmap'], { queryParams: { roomId: id } });
        this.isEnabled = true;
        setTimeout(function () {
            $('#realtime-link').text(window.location.href);
        }, 0);
        Object(_edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["initListener"])();
    };
    FixedpluginComponent.prototype.stopRealtime = function () {
        this.disconnectRealTime();
        this.router.navigate(['edit', 'cmap'], { queryParams: { roomId: null } });
        this.isEnabled = false;
        Object(_edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["stopListener"])();
    };
    FixedpluginComponent.prototype.checkRealtimeUrl = function () {
        if (window.location.href.indexOf('roomId') > 0) {
            this.startRealtime(this.activateRoute.snapshot.queryParams.roomId);
        }
    };
    FixedpluginComponent.prototype.ngOnInit = function () {
        var _this = this;
        // fixed plugin
        var $sidebar = $('.sidebar');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        //
        var $full_page = $('.full-page');
        //
        var $sidebar_responsive = $('body > .navbar-collapse');
        var window_width = $(window).width();
        var fixed_plugin_open = $('.sidebar .sidebar-wrapper .nav li.active a p').html();
        if (window_width > 767 && fixed_plugin_open === 'Dashboard') {
            if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                $('.fixed-plugin .dropdown').addClass('open');
            }
        }
        $('#bt-fixed-plugin').click(function () {
            if (!$('.fixed-plugin .show-dropdown').hasClass('show')) {
                _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].selection.each(function (node) {
                    var moreInfo = node.data.moreInfo;
                    if (moreInfo)
                        $("#info-textarea").val(moreInfo);
                    else
                        $("#info-textarea").val('');
                });
            }
        });
        $('#bt-font').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $('#a-color-picker').removeClass('text-color');
            }
            else {
                $(this).addClass('active');
                $('#a-color-picker').addClass('text-color');
            }
        });
        $('#bt-stroke').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $('#a-color-picker').removeClass('stroke-color');
            }
            else {
                $(this).addClass('active');
                $('#a-color-picker').addClass('stroke-color');
            }
        });
        $('#bt-background').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $('#a-color-picker').removeClass('background-color');
            }
            else {
                $(this).addClass('active');
                $('#a-color-picker').addClass('background-color');
            }
        });
        $('#a-color-picker span').click(function () {
            var color = $(this).data('color');
            var color2 = $(this).data('color2');
            if ($('#a-color-picker').hasClass('text-color')) {
                _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].startTransaction("change text color");
                _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].selection.each(function (node) {
                    if (node instanceof gojs__WEBPACK_IMPORTED_MODULE_5__["Node"]) {
                        // Examine and modify the data, not the Node directly.
                        var data = node.data;
                        // Call setDataProperty to support undo/redo as well as
                        // automatically evaluating any relevant bindings.
                        if (color2) {
                            var gradient = $$(gojs__WEBPACK_IMPORTED_MODULE_5__["Brush"], "Linear", { 0.0: color, 1.0: color2 });
                            _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].model.setDataProperty(data, "textColor", gradient);
                        }
                        else {
                            _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].model.setDataProperty(data, "textColor", color);
                        }
                    }
                    else if (node instanceof gojs__WEBPACK_IMPORTED_MODULE_5__["Link"]) {
                        var data = node.data;
                        // Call setDataProperty to support undo/redo as well as
                        // automatically evaluating any relevant bindings.
                        if (color2) {
                            var gradient = $$(gojs__WEBPACK_IMPORTED_MODULE_5__["Brush"], "Linear", { 0.0: color, 1.0: color2 });
                            _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].model.setDataProperty(data, "color", gradient);
                        }
                        else {
                            _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].model.setDataProperty(data, "color", color);
                        }
                    }
                });
                _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].commitTransaction("change text color");
            }
            if ($('#a-color-picker').hasClass('background-color')) {
                _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].startTransaction("change color");
                _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].selection.each(function (node) {
                    if (node instanceof gojs__WEBPACK_IMPORTED_MODULE_5__["Node"]) {
                        // Examine and modify the data, not the Node directly.
                        var data = node.data;
                        // Call setDataProperty to support undo/redo as well as
                        // automatically evaluating any relevant bindings.
                        if (color2) {
                            var gradient = $$(gojs__WEBPACK_IMPORTED_MODULE_5__["Brush"], "Linear", { 0.0: color, 1.0: color2 });
                            _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].model.setDataProperty(data, "color", gradient);
                        }
                        else {
                            _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].model.setDataProperty(data, "color", color);
                        }
                    }
                });
                _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].commitTransaction("change text color");
            }
            if ($('#a-color-picker').hasClass('stroke-color')) {
                _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].startTransaction("change stroke color");
                _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].selection.each(function (node) {
                    if (node instanceof gojs__WEBPACK_IMPORTED_MODULE_5__["Node"]) {
                        // Examine and modify the data, not the Node directly.
                        var data = node.data;
                        // Call setDataProperty to support undo/redo as well as
                        // automatically evaluating any relevant bindings.
                        if (color2) {
                            var gradient = $$(gojs__WEBPACK_IMPORTED_MODULE_5__["Brush"], "Linear", { 0.0: color, 1.0: color2 });
                            _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].model.setDataProperty(data, "stroke", gradient);
                        }
                        else {
                            _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].model.setDataProperty(data, "stroke", color);
                        }
                    }
                    else if (node instanceof gojs__WEBPACK_IMPORTED_MODULE_5__["Link"]) {
                        var data = node.data;
                        // Call setDataProperty to support undo/redo as well as
                        // automatically evaluating any relevant bindings.
                        if (color2) {
                            var gradient = $$(gojs__WEBPACK_IMPORTED_MODULE_5__["Brush"], "Linear", { 0.0: color, 1.0: color2 });
                            _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].model.setDataProperty(data, "color", gradient);
                        }
                        else {
                            _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].model.setDataProperty(data, "color", color);
                        }
                    }
                });
                _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].commitTransaction("change stroke color");
            }
        });
        $('#bt-new-map').click(function (event) {
            event.preventDefault();
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                title: 'Are you sure?',
                text: 'All your current map modifications will be lost...',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, proceed...',
                cancelButtonText: 'No, keep it',
                confirmButtonClass: "btn btn-success",
                cancelButtonClass: "btn btn-danger",
                buttonsStyling: false
            }).then(function (result) {
                if (result.value) {
                    _this.mapService.removeCurrentMap();
                    Object(_edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["resetModel"])();
                }
            });
        });
        $('#bt-save').click(function (event) {
            event.preventDefault();
            _this.router.navigate(["edit", "cmap", "save"]);
        });
        $('#bt-save-info').click(function (event) {
            event.preventDefault();
            var moreInfo = $('#info-textarea').val();
            if (moreInfo) {
                _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].startTransaction("adding moreInfo to element");
                _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].selection.each(function (node) {
                    var data = node.data;
                    _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].model.setDataProperty(data, "moreInfo", moreInfo);
                });
                _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].commitTransaction("adding moreInfo to element");
            }
        });
        $('#bt-discard-info').click(function (event) {
            event.preventDefault();
            _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].startTransaction("remove moreInfo to element");
            _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].selection.each(function (node) {
                var data = node.data;
                _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].model.setDataProperty(data, "moreInfo", "");
            });
            _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].commitTransaction("remove moreInfo to element");
        });
        $('#bt-version').click(function (event) {
            event.preventDefault();
            _this.mapService.createVersion(_edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].model.toJson())
                .subscribe(function (_) {
                _this.authService.updateUser();
                $.notify({
                    icon: 'notifications',
                    message: 'New version created successful!'
                }, {
                    type: 'success',
                    timer: 250,
                    placement: {
                        from: 'top',
                        align: 'right'
                    }
                });
            }, function (error) {
                console.log(error);
            });
        });
        //   $('#bt-realtime').click((event) => {
        //     event.preventDefault();
        //     this.sendMessage();
        //   });
        $('#bt-check-map').click(function (event) {
            event.preventDefault();
            if (event.stopPropagation) {
                event.stopPropagation();
            }
            else if (window.event) {
                window.event.cancelBubble = true;
            }
            var mapa = _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].model.nodeDataArray;
            var conceitos = mapa.filter(function (item) { return 'concept' === item.category; });
            var frasesDeLigacao = mapa.filter(function (item) { return 'relation' === item.category; });
            var proposicoes = [];
            var frasesDeLigacaoComConexoes = [];
            var links = _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].model;
            var conexoes = links.linkDataArray;
            conceitos.forEach(function (item) {
                var conceitoOrigem = item;
                conexoes.forEach(function (item) {
                    if (item.from === conceitoOrigem.key) {
                        var ligacao_1 = frasesDeLigacao.find(function (element) { return element.key === item.to; });
                        conexoes.forEach(function (item) {
                            if (ligacao_1.key === item.from) {
                                var conceitoDestino = conceitos.find(function (element) { return element.key === item.to; });
                                var temp = __assign({}, ligacao_1, { from: conceitoOrigem.key, to: conceitoDestino.key });
                                frasesDeLigacaoComConexoes.push(temp);
                                proposicoes.push(conceitoOrigem.text + " " + ligacao_1.text + " " + conceitoDestino.text);
                            }
                        });
                    }
                });
            });
            var mapaConceitual = {
                conceitos: conceitos,
                frasesDeLigacao: frasesDeLigacaoComConexoes,
                proposicoes: proposicoes,
                erros: {
                    conceitoNaoDefinido: [],
                    fraseDeLigacaoNaoDefinida: [],
                    fraseDeLigacaoSemVerbo: [],
                    proposicoesComErroDeConcordancia: [],
                    conceitoRepetido: [],
                    conceitoInvalido: []
                }
            };
            var params = new URLSearchParams();
            params.append('mapa', JSON.stringify(mapaConceitual));
            var API = 'http://cmpaas.inf.ufes.br:5002/';
            $('#bt-check-map i').html('autorenew');
            axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(API + "mapa/erros", params)
                .then(function (result) {
                var erros = result.data.mapaEnviado.erros;
                Object.keys(erros).forEach(function (erro) {
                    _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].startTransaction("add error");
                    erros[erro].forEach(function (item) {
                        if (Array.isArray(item)) {
                            if ('proposicoesComErroDeConcordancia' === erro) {
                                var node = _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].model.findNodeDataForKey(item[0].key);
                                var fix = item[1];
                                node.category === 'relation' ? _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].model.setDataProperty(node, "prevColor", node.textColor) : _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].model.setDataProperty(node, "prevColor", node.stroke);
                                _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].model.setDataProperty(node, "error", erro);
                                _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].model.setDataProperty(node, 'fix', fix);
                            }
                            else {
                                item.forEach(function (item) {
                                    var node = _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].model.findNodeDataForKey(item.key);
                                    node.category === 'relation' ? _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].model.setDataProperty(node, "prevColor", node.textColor) : _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].model.setDataProperty(node, "prevColor", node.stroke);
                                    _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].model.setDataProperty(node, "error", erro);
                                });
                            }
                        }
                        else {
                            var node = _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].model.findNodeDataForKey(item.key);
                            node.category === 'relation' ? _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].model.setDataProperty(node, "prevColor", node.textColor) : _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].model.setDataProperty(node, "prevColor", node.stroke);
                            _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].model.setDataProperty(node, "error", erro);
                        }
                    });
                    _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["myDiagram"].commitTransaction("add error");
                });
            })
                .catch(function (error) { return console.log({ error: error }); })
                .then(function () {
                $('#bt-check-map i').html('spellcheck');
            });
        });
        $('#bt-speech2map-map').click(function (event) {
            event.preventDefault();
            var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogConfig"]();
            dialogConfig.disableClose = true;
            dialogConfig.autoFocus = true;
            dialogConfig.width = '1000px';
            var dialogRef = _this.dialog.open(_speech2map_speech_recognition_component__WEBPACK_IMPORTED_MODULE_8__["SpeechRecognitionComponent"], dialogConfig);
        });
        $('.fixed-plugin a').click(function (event) {
            // Alex: if we click on switch, stop propagation of the event,
            // so the dropdown will not be hide, otherwise we set the  section active
            if ($(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        $('.fixed-plugin button').click(function (event) {
            // Alex: if we click on switch, stop propagation of the event,
            // so the dropdown will not be hide, otherwise we set the  section active
            if ($(this).hasClass('color-change')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        $('.fixed-plugin .stroke-color span').click(function () {
            var color = $(this).data('color');
            //   $(this).siblings().removeClass('active');
            //   $(this).addClass('active');
            //   const new_color = $(this).data('color');
            //   if ($sidebar.length !== 0) {
            //       $sidebar.attr('data-background-color', new_color);
            //   }
        });
        //   $('.fixed-plugin .text-color span').click(function() {
        //     const color = $(this).data('color');
        //     //   $(this).siblings().removeClass('active');
        //     //   $(this).addClass('active');
        //     //   const new_color = $(this).data('color');
        //     //   if ($sidebar.length !== 0) {
        //     //       $sidebar.attr('data-background-color', new_color);
        //     //   }
        //     myDiagram.startTransaction("change text color");
        //     myDiagram.selection.each(function(node) {
        //         if (node instanceof go.Node) {  // ignore any selected Links and simple Parts
        //             // Examine and modify the data, not the Node directly.
        //             var data = node.data;
        //             // Call setDataProperty to support undo/redo as well as
        //             // automatically evaluating any relevant bindings.
        //             myDiagram.model.setDataProperty(data, "textColor", color);
        //         }else if(node instanceof go.Link) {
        //             var data = node.data;
        //             // Call setDataProperty to support undo/redo as well as
        //             // automatically evaluating any relevant bindings.
        //             myDiagram.model.setDataProperty(data, "color", color);
        //         }
        //     });
        //     myDiagram.commitTransaction("change color");
        //   });
        $('.fixed-plugin .img-holder').click(function () {
            var $full_page_background = $('.full-page-background');
            $(this).parent('li').siblings().removeClass('active');
            $(this).parent('li').addClass('active');
            var new_image = $(this).find('img').attr('src');
            if ($sidebar_img_container.length !== 0 && $('.switch-sidebar-image input:checked').length !== 0) {
                $sidebar_img_container.fadeOut('fast', function () {
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn('fast');
                });
            }
            if ($full_page_background.length !== 0 && $('.switch-sidebar-image input:checked').length !== 0) {
                var new_image_full_page_1 = $('.fixed-plugin li.active .img-holder').find('img').data('src');
                $full_page_background.fadeOut('fast', function () {
                    $full_page_background.css('background-image', 'url("' + new_image_full_page_1 + '")');
                    $full_page_background.fadeIn('fast');
                });
            }
            if ($('.switch-sidebar-image input:checked').length === 0) {
                new_image = $('.fixed-plugin li.active .img-holder').find('img').attr('src');
                var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');
                $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
            }
            if ($sidebar_responsive.length !== 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });
        $('.switch-sidebar-image input').change(function () {
            var $full_page_background = $('.full-page-background');
            var $input = $(this);
            if ($input.is(':checked')) {
                if ($sidebar_img_container.length !== 0) {
                    $sidebar_img_container.fadeIn('fast');
                    $sidebar.attr('data-image', '#');
                }
                if ($full_page_background.length !== 0) {
                    $full_page_background.fadeIn('fast');
                    $full_page.attr('data-image', '#');
                }
                var background_image = true;
            }
            else {
                if ($sidebar_img_container.length !== 0) {
                    $sidebar.removeAttr('data-image');
                    $sidebar_img_container.fadeOut('fast');
                }
                if ($full_page_background.length !== 0) {
                    $full_page.removeAttr('data-image', '#');
                    $full_page_background.fadeOut('fast');
                }
                var background_image = false;
            }
        });
        $('.switch-realtime input').change(function () {
            if ($('.switch-realtime input')[0].checked) {
                _this.startRealtime(Object(uuid__WEBPACK_IMPORTED_MODULE_10__["v4"])());
            }
            else {
                _this.stopRealtime();
            }
        });
        this.checkRealtimeUrl();
    };
    FixedpluginComponent.prototype.copyLink = function () {
        this.clipboardService.copyFromContent(window.location.href);
    };
    FixedpluginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fixedplugin',
            template: __webpack_require__(/*! ./fixedplugin.component.html */ "./src/app/shared/fixedplugin/fixedplugin.component.html"),
            styles: [__webpack_require__(/*! ./fixedplugin.component.css */ "./src/app/shared/fixedplugin/fixedplugin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_index_service__WEBPACK_IMPORTED_MODULE_2__["MapService"],
            _services_index_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            _services_socketservice_socket_service__WEBPACK_IMPORTED_MODULE_9__["SocketService"],
            ngx_clipboard__WEBPACK_IMPORTED_MODULE_11__["ClipboardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], FixedpluginComponent);
    return FixedpluginComponent;
}());



/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.module.ts ***!
  \**********************************************************/
/*! exports provided: FixedpluginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedpluginModule", function() { return FixedpluginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fixedplugin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fixedplugin.component */ "./src/app/shared/fixedplugin/fixedplugin.component.ts");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FixedpluginModule = /** @class */ (function () {
    function FixedpluginModule() {
    }
    FixedpluginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"]
            ],
            declarations: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_2__["FixedpluginComponent"]],
            exports: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_2__["FixedpluginComponent"]]
        })
    ], FixedpluginModule);
    return FixedpluginModule;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer \">\r\n  <div class=\"container\">\r\n    <nav class=\"pull-left\">\r\n      <!-- <ul>\r\n        <li>\r\n          <a href=\"https://www.creative-tim.com\">\r\n            Creative Tim\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"https://creative-tim.com/about-us\">\r\n            About Us\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"http://blog.creative-tim.com\">\r\n            Blog\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"https://www.creative-tim.com/license\">\r\n            Licenses\r\n          </a>\r\n        </li>\r\n      </ul> -->\r\n    </nav>\r\n    <div class=\"copyright pull-right\">\r\n      &copy;\r\n      {{test | date: 'yyyy'}}, made by\r\n      <a href=\"https://www.ppgi.inf.ufes.br\" target=\"_blank\"> UFES | PPGI | LIED | </a> CMPaaS Project.\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer-cmp',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/footer/footer.module.ts ***!
  \************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.component */ "./src/app/shared/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
            exports: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav #navbar class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-wrapper\">\r\n      <div class=\"navbar-minimize\">\r\n        <button mat-raised-button (click)=\"minimizeSidebar()\" class=\"btn btn-just-icon btn-white btn-fab btn-round\">\r\n          <i class=\"material-icons text_align-center visible-on-sidebar-regular\">more_vert</i>\r\n          <i class=\"material-icons design_bullet-list-67 visible-on-sidebar-mini\">view_list</i>\r\n        </button>\r\n      </div>\r\n      <a class=\"navbar-brand\" href=\"{{getPath()}}\"> {{getTitle()}}</a>\r\n    </div>\r\n    <button mat-button class=\"navbar-toggler btn-no-ripple\" type=\"button\" (click)=\"sidebarToggle()\">\r\n      <span class=\"sr-only\">Toggle navigation</span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\r\n      <form class=\"navbar-form\">\r\n        <div class=\"input-group no-border\">\r\n          <input type=\"text\" [(ngModel)]=\"search\" class=\"form-control\" placeholder=\"Search User...\" [ngModelOptions]=\"{standalone: true}\">\r\n          <button mat-raised-button (click)=\"redirectToSearch($event)\" class=\"btn btn-white btn-round btn-just-icon\">\r\n            <i class=\"material-icons\">search</i>\r\n            <div class=\"ripple-container\"></div>\r\n          </button>\r\n        </div>\r\n      </form>\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/dashboard\">\r\n            <i class=\"material-icons\">dashboard</i>\r\n            <p>\r\n              <span class=\"d-lg-none d-md-block\">Stats</span>\r\n            </p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link\" href=\"\" id=\"navbarDropdownMenuLink\" href=\"\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <i class=\"material-icons\">notifications</i>\r\n            <span class=\"notification\" *ngIf=\"user.notifications.length > 0\">{{ user.notifications.length }}</span>\r\n            <p>\r\n              <span class=\"d-lg-none d-md-block\">Some Actions</span>\r\n            </p>\r\n          </a>\r\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n              <ng-container *ngFor=\"let m of user.notifications\">\r\n                  <a class=\"dropdown-item\" href=\"\">{{ m.message }}</a>\r\n              </ng-container>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link\" href=\"\" id=\"navbarDropdownMenuLink2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <i class=\"material-icons\">person</i>\r\n            <p>\r\n              <span class=\"d-lg-none d-md-block\">Account</span>\r\n            </p>\r\n          </a>\r\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink2\">\r\n            <a class=\"dropdown-item\" href=\"\" (click)=\"logout($event)\">Logout</a>\r\n            <a class=\"dropdown-item\" href=\"\" (click)=\"lock($event)\">Lock</a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/auth/auth.service */ "./src/app/_services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var misc = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, renderer, element, router, authService) {
        this.renderer = renderer;
        this.element = element;
        this.router = router;
        this.authService = authService;
        this.search = "";
        this.mobile_menu_visible = 0;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        this.user = JSON.parse(this.authService.getCurrentUser());
    }
    NavbarComponent.prototype.minimizeSidebar = function () {
        var body = document.getElementsByTagName('body')[0];
        if (misc.sidebar_mini_active === true) {
            body.classList.remove('sidebar-mini');
            misc.sidebar_mini_active = false;
        }
        else {
            setTimeout(function () {
                body.classList.add('sidebar-mini');
                misc.sidebar_mini_active = true;
            }, 300);
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        var simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event('resize'));
        }, 180);
        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    };
    NavbarComponent.prototype.hideSidebar = function () {
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('sidebar')[0];
        if (misc.hide_sidebar_active === true) {
            setTimeout(function () {
                body.classList.remove('hide-sidebar');
                misc.hide_sidebar_active = false;
            }, 300);
            setTimeout(function () {
                sidebar.classList.remove('animation');
            }, 600);
            sidebar.classList.add('animation');
        }
        else {
            setTimeout(function () {
                body.classList.add('hide-sidebar');
                // $('.sidebar').addClass('animation');
                misc.hide_sidebar_active = true;
            }, 300);
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        var simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event('resize'));
        }, 180);
        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    };
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        if (body.classList.contains('sidebar-mini')) {
            misc.sidebar_mini_active = true;
        }
        if (body.classList.contains('hide-sidebar')) {
            misc.hide_sidebar_active = true;
        }
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }).subscribe(function (event) {
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
            }
        });
    };
    NavbarComponent.prototype.onResize = function (event) {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = String(titlee).split('?')[0];
        for (var i = 0; i < this.listTitles.length; i++) {
            if (this.listTitles[i].type === "link" && this.listTitles[i].path === titlee) {
                return this.listTitles[i].title;
            }
            else if (this.listTitles[i].type === "sub") {
                for (var j = 0; j < this.listTitles[i].children.length; j++) {
                    var subtitle = this.listTitles[i].path + '/' + this.listTitles[i].children[j].path;
                    if (subtitle === titlee) {
                        return this.listTitles[i].children[j].title;
                    }
                }
            }
        }
        var t = String(titlee).split('/');
        if (t.length >= 3) {
            return t[t.length - 1].charAt(0).toLocaleUpperCase() + t[t.length - 1].substr(1).toLowerCase() + " " + t[t.length - 2].charAt(0).toLocaleUpperCase() + t[t.length - 2].substr(1).toLowerCase();
        }
        else {
            return t[t.length - 1].charAt(0).toLocaleUpperCase() + t[t.length - 1].substr(1).toLowerCase();
        }
    };
    NavbarComponent.prototype.getPath = function () {
        return this.location.prepareExternalUrl(this.location.path());
    };
    NavbarComponent.prototype.logout = function (event) {
        event.preventDefault();
        this.authService.logout();
        this.router.navigate(['pages/login']);
    };
    NavbarComponent.prototype.lock = function (event) {
        event.preventDefault();
        this.authService.lock();
        this.router.navigate(['pages/lock']);
    };
    NavbarComponent.prototype.redirectToSearch = function (e) {
        e.preventDefault();
        //this.router.navigate(['pages','find', this.search]);
        window.location.href = '/pages/find/' + this.search;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('app-navbar-cmp'),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "button", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar-cmp',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/navbar/navbar.module.ts ***!
  \************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
            declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]],
            exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n        <div class=\"logo\">\r\n          <a class=\"simple-text logo-mini\">\r\n            <div class=\"logo-img\">\r\n                <img src=\"/assets/img/conceptmap.png\"/>\r\n            </div>\r\n          </a>\r\n            <a href=\"#\" class=\"simple-text logo-normal\">\r\n              CMPaaS Project\r\n            </a>\r\n            <p>Knowledge Portal</p> \r\n        </div>\r\n\r\n\r\n        <div class=\"sidebar-wrapper\">\r\n\r\n            <div class=\"user\">\r\n                <div class=\"photo\">\r\n                    <img src={{this.user.profile_picture}} />\r\n                </div>\r\n                <div class=\"user-info\">\r\n                    <a data-toggle=\"collapse\" href=\"#collapseExample\" class=\"collapsed\">\r\n                        <span>\r\n                            {{this.user.firstname}}\r\n                            <b class=\"caret\"></b>\r\n                        </span>\r\n                    </a>\r\n                    <div class=\"collapse\" id=\"collapseExample\">\r\n                        <ul class=\"nav\">\r\n                            <li class=\"nav-item\">\r\n                                <a routerLink=\"/pages/user\" class=\"nav-link\">\r\n                                    <span class=\"sidebar-mini\">MP</span>\r\n                                    <span class=\"sidebar-normal\">My Profile</span>\r\n                                </a>\r\n                            </li>\r\n                            <!-- <li class=\"nav-item\">\r\n                                <a href=\"javascript:void(0)\" class=\"nav-link\">\r\n                                    <span class=\"sidebar-mini\">EP</span>\r\n                                    <span class=\"sidebar-normal\">Edit Profile</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"javascript:void(0)\" class=\"nav-link\">\r\n                                    <span class=\"sidebar-mini\">S</span>\r\n                                    <span class=\"sidebar-normal\">Settings</span>\r\n                                </a>\r\n                            </li> -->\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"isMobileMenu()\">\r\n              <form class=\"navbar-form\">\r\n                <span class=\"bmd-form-group\"><div class=\"input-group no-border\">\r\n                  <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\r\n                  <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                    <i class=\"material-icons\">search</i>\r\n                    <div class=\"ripple-container\"></div>\r\n                  </button>\r\n                </div></span>\r\n              </form>\r\n              <ul class=\"nav navbar-nav nav-mobile-menu\">\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" href=\"#pablo\">\r\n                    <i class=\"material-icons\">dashboard</i>\r\n                    <p>\r\n                      <span class=\"d-lg-none d-md-block\">Stats</span>\r\n                    </p>\r\n                  </a>\r\n                </li>\r\n                <li class=\"nav-item dropdown\">\r\n                  <a class=\"nav-link\" href=\"#pablo\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"material-icons\">notifications</i>\r\n                    <span class=\"notification\">5</span>\r\n                    <p>\r\n                      <span class=\"d-lg-none d-md-block\">Some Actions</span>\r\n                    </p>\r\n                  </a>\r\n                  <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                    <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Another One</a>\r\n                  </div>\r\n                </li>\r\n                <li class=\"nav-item dropdown\">\r\n                    <a class=\"nav-link\" href=\"\" id=\"navbarDropdownMenuLink2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                      <i class=\"material-icons\">person</i>\r\n                      <p>\r\n                        <span class=\"d-lg-none d-md-block\">Account</span>\r\n                      </p>\r\n                    </a>\r\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink2\">\r\n                      <a class=\"dropdown-item\" href=\"\" (click)=\"logout($event)\">Logout</a>\r\n                      <a class=\"dropdown-item\" href=\"\" (click)=\"lock($event)\">Lock</a>\r\n                    </div>\r\n                  </li>\r\n              </ul>\r\n            </div>\r\n            <ul class=\"nav\">\r\n                <li routerLinkActive=\"active\" *ngFor=\"let menuitem of menuItems\" class=\"nav-item\">\r\n                    <!--If is a single link-->\r\n                    <a [routerLink]=\"[menuitem.path]\" *ngIf=\"menuitem.type === 'link'\" class=\"nav-link\">\r\n                        <i class=\"material-icons\">{{menuitem.icontype}}</i>\r\n                        <p>{{menuitem.title}}</p>\r\n                    </a>\r\n                    <!--If it have a submenu-->\r\n                    <a data-toggle=\"collapse\" href=\"#{{menuitem.collapse}}\" *ngIf=\"menuitem.type === 'sub'\" (click)=\"updatePS()\" class=\"nav-link\">\r\n                        <i class=\"material-icons\">{{menuitem.icontype}}</i>\r\n                        <p>{{menuitem.title}}<b class=\"caret\"></b></p>\r\n                    </a>\r\n\r\n                    <!--Display the submenu items-->\r\n                    <div id=\"{{menuitem.collapse}}\" class=\"collapse\" *ngIf=\"menuitem.type === 'sub'\">\r\n                        <ul class=\"nav\">\r\n                            <li routerLinkActive=\"active\" *ngFor=\"let childitem of menuitem.children\" class=\"nav-item\">\r\n                                <a [routerLink]=\"[menuitem.path, childitem.path]\" class=\"nav-link\">\r\n                                    <span class=\"sidebar-mini\">{{childitem.ab}}</span>\r\n                                    <span class=\"sidebar-normal\">{{childitem.title}}</span>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </li>\r\n                <!-- <li class=\"nav-item\">\r\n                    <a href=\"http://md-pro-angular.creative-tim.com/documentation/tutorial?ref=md-pro-archive\" class=\"nav-link\">\r\n                        <i class=\"material-icons\">school</i>\r\n                        <p>Documentation</p>\r\n                    </a>\r\n                </li> -->\r\n            </ul>\r\n\r\n        </div>\r\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth/auth.service */ "./src/app/_services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/sidebar/sidebar.service */ "./src/app/_services/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//Menu Items
var ROUTES = [{
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'dashboard'
    }, {
        path: '/administration',
        title: 'Administration',
        type: 'sub',
        icontype: 'security',
        collapse: 'administration',
        children: [
            { path: 'dashboard', title: 'Dashboard', ab: 'D' },
            { path: 'users', title: 'Users', ab: 'U' },
            { path: 'maps', title: 'Maps', ab: 'M' }
        ]
    }, {
        path: '/manage',
        title: 'Manage',
        type: 'sub',
        icontype: 'developer_board',
        collapse: 'manage',
        children: [
            { path: 'groups', title: 'Groups', ab: 'G' },
            { path: 'maps', title: 'Maps', ab: 'M' }
        ]
    }, {
        path: '/edit',
        title: 'Edit',
        type: 'sub',
        icontype: 'palette',
        collapse: 'edit',
        children: [
            { path: 'cmap', title: 'Concept Map', ab: 'CM' }
        ]
    }
    // ,{
    //     path: '/tools',
    //     title: 'Tools',
    //     type: 'sub',
    //     icontype: 'build',
    //     collapse: 'tools',
    //     children: [
    //         {path: 'mapdb', title: 'Map Debates', ab:'MD'}
    //     ]
    // }
    // ,{
    //     path: '/components',
    //     title: 'Components',
    //     type: 'sub',
    //     icontype: 'apps',
    //     collapse: 'components',
    //     children: [
    //         {path: 'buttons', title: 'Buttons', ab:'B'},
    //         {path: 'grid', title: 'Grid System', ab:'GS'},
    //         {path: 'panels', title: 'Panels', ab:'P'},
    //         {path: 'sweet-alert', title: 'Sweet Alert', ab:'SA'},
    //         {path: 'notifications', title: 'Notifications', ab:'N'},
    //         {path: 'icons', title: 'Icons', ab:'I'},
    //         {path: 'typography', title: 'Typography', ab:'T'}
    //     ]
    // },{
    //     path: '/forms',
    //     title: 'Forms',
    //     type: 'sub',
    //     icontype: 'content_paste',
    //     collapse: 'forms',
    //     children: [
    //         {path: 'regular', title: 'Regular Forms', ab:'RF'},
    //         {path: 'extended', title: 'Extended Forms', ab:'EF'},
    //         {path: 'validation', title: 'Validation Forms', ab:'VF'},
    //         {path: 'wizard', title: 'Wizard', ab:'W'}
    //     ]
    // },{
    //     path: '/tables',
    //     title: 'Tables',
    //     type: 'sub',
    //     icontype: 'grid_on',
    //     collapse: 'tables',
    //     children: [
    //         {path: 'regular', title: 'Regular Tables', ab:'RT'},
    //         {path: 'extended', title: 'Extended Tables', ab:'ET'},
    //         {path: 'datatables.net', title: 'Datatables.net', ab:'DT'}
    //     ]
    // },{
    //     path: '/maps',
    //     title: 'Maps',
    //     type: 'sub',
    //     icontype: 'place',
    //     collapse: 'maps',
    //     children: [
    //         {path: 'google', title: 'Google Maps', ab:'GM'},
    //         {path: 'fullscreen', title: 'Full Screen Map', ab:'FSM'},
    //         {path: 'vector', title: 'Vector Map', ab:'VM'}
    //     ]
    // },{
    //     path: '/widgets',
    //     title: 'Widgets',
    //     type: 'link',
    //     icontype: 'widgets'
    // },{
    //     path: '/charts',
    //     title: 'Charts',
    //     type: 'link',
    //     icontype: 'timeline'
    // },{
    //     path: '/calendar',
    //     title: 'Calendar',
    //     type: 'link',
    //     icontype: 'date_range'
    // },{
    //     path: '/pages',
    //     title: 'Pages',
    //     type: 'sub',
    //     icontype: 'image',
    //     collapse: 'pages',
    //     children: [
    //         {path: 'pricing', title: 'Pricing', ab:'P'},
    //         {path: 'timeline', title: 'Timeline Page', ab:'TP'},
    //         {path: 'login', title: 'Login Page', ab:'LP'},
    //         {path: 'register', title: 'Register Page', ab:'RP'},
    //         {path: 'lock', title: 'Lock Screen Page', ab:'LSP'},
    //         {path: 'user', title: 'User Page', ab:'UP'}
    //     ]
    // }
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router, authService, sidebarService) {
        this.router = router;
        this.authService = authService;
        this.sidebarService = sidebarService;
        this.user = JSON.parse(this.authService.getCurrentUser());
    }
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuItems = ROUTES.filter(function (menuItem) {
            if (menuItem.title !== "Administration")
                return menuItem;
            else if (_this.user.groups.filter(function (g) { return (g.name === "Admin"); }).length > 0)
                return menuItem;
        });
        this.sidebarService.update.subscribe(function (res) {
            _this.user.profile_picture = res;
        });
    };
    SidebarComponent.prototype.updatePS = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["default"](elemSidebar, { wheelSpeed: 2, suppressScrollX: true });
        }
    };
    SidebarComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    SidebarComponent.prototype.logout = function (event) {
        event.preventDefault();
        this.authService.logout();
        this.router.navigate(['pages/login']);
    };
    SidebarComponent.prototype.lock = function (event) {
        event.preventDefault();
        this.authService.lock();
        this.router.navigate(['pages/lock']);
    };
    SidebarComponent.prototype.updateUser = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar-cmp',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sidebar/sidebar.module.ts ***!
  \*******************************************/
/*! exports provided: SidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]],
            exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]]
        })
    ], SidebarModule);
    return SidebarModule;
}());



/***/ }),

/***/ "./src/app/speech2map/spech-analysis.ts":
/*!**********************************************!*\
  !*** ./src/app/speech2map/spech-analysis.ts ***!
  \**********************************************/
/*! exports provided: SpeechAnalysis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechAnalysis", function() { return SpeechAnalysis; });
/* harmony import */ var pegjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pegjs */ "./node_modules/pegjs/lib/peg.js");
/* harmony import */ var pegjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pegjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit/conceptmap/conceptmap.component */ "./src/app/edit/conceptmap/conceptmap.component.ts");



var SpeechAnalysis = /** @class */ (function () {
    function SpeechAnalysis() {
        this.grammar = 'start =  sentence' + '\n' +
            'ws "whitespace" = [ \\t\\n\\r]*' + '\n\n' +
            'sentence = concept relation concept' + '\n\n' +
            'concept = cct:(cnoun conj cnoun) {return cct.join(" ").trim();} /' + '\n' +
            '          cct:(det? cnoun) {return cct.join(" ").replace(\/\\s\\s+\/g, \' \').trim()} /' + '\n\n' +
            '          cct:(spnoun (adj/adv)?) {return cct.join(" ").trim()}' + '\n\n' +
            'relation = rlt:(verb adp) {return rlt.join(" ").trim()} /' + '\n' +
            '           rlt:(verb verb verb? adp) {return rlt.join(" ").replace(\/[, ]+\/g, " ").trim()} /' + '\n' +
            '           rlt:(pron verb adp) {return rlt.trim();} /' + '\n' +
            '           rlt:(adp pron verb) {return rlt.trim();} /' + '\n' +
            '           rlt:(adv verb) {return rlt.trim();} /' + '\n' +
            '           rlt:( verb ) {return rlt.trim();} ' + '\n\n' +
            'verb = verb:("[VERB," tag "]") ws {return verb[1].trim();}' + '\n\n' +
            'noun = noun:("[NOUN," tag "]") ws {return noun[1].trim();}' + '\n\n' +
            'det = det:("[DET," tag "]") ws {return det[1].trim();}' + '\n\n' +
            'adp = adp:("[ADP," tag "]") ws {return adp[1].trim();}' + '\n\n' +
            'adj = adj:("[ADJ," tag "]") ws {return adj[1].trim();}' + '\n\n' +
            'adv = adv:("[ADV," tag "]") ws {return adv[1].trim();}' + '\n\n' +
            'pron = pron:("[PRON," tag "]") ws {return pron[1].trim();}' + '\n\n' +
            'conj = conj:("[CONJ," tag "]") ws {return conj[1].trim();}' + '\n\n' +
            'punct = punct:("[PUNCT," "-" "]") ws {return punct[1].trim();}' + '\n\n' +
            'spnoun = spnoun:(verb (punct pron)?) ws{return spnoun.join("").replace(\/[,]+\/g, "").trim();}' + '\n\n' +
            'cnoun = cnoun:(noun adp noun adj) {return cnoun.join(" ").trim();} /' + '\n' +
            '        cnoun:(noun adp noun) {return cnoun.join(" ").trim();} /' + '\n' +
            '        cnoun:(noun conj noun) {return cnoun.join(" ").trim();} /' + '\n' +
            '        cnoun:(noun adj) {return cnoun.join(" ").trim();} /' + '\n' +
            '        cnoun:(noun) {return cnoun.trim();} /' + '\n' +
            '        cnoun:(adv) {return cnoun.trim();} /' + '\n' +
            '        cnoun:(pron noun?) {return cnoun.join(" ").trim();} /' + '\n' +
            '        cnoun:(adj) {return cnoun.trim();}' + '\n' +
            'tag = tag:[a-zA-Z\\u00C0-\\u00FF]+ {return tag.join("");}' + '\n';
    }
    /**
      * Gera a string para o parser, envia para o parser
      * envia as triplas para a montagem do mapa
      * @param syntax o retorno da Google Cloud Natural Language.
      */
    SpeechAnalysis.prototype.analyze = function (syntax) {
        var query;
        query = this.generateString(syntax.tokens);
        var parser = pegjs__WEBPACK_IMPORTED_MODULE_0__["generate"](this.grammar);
        try {
            var proposition = parser.parse(query);
            this.addNodesToMap(proposition);
        }
        catch (error) {
            if (error.name === 'SyntaxError') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                    title: 'Syntax Error',
                    //text: error.message,
                    text: "Ocorreu um erro na extração das triplas. " +
                        "Verifique se a proposição está no formato correto " +
                        "e tente novamente.",
                    buttonsStyling: false,
                    confirmButtonClass: 'btn btn-info'
                });
            }
            console.log(error.name);
        }
    };
    /**
      * Gera a string que será enviada para o parser (PEG.js)
      * extrair as triplas
      * @param syntax parte da resposta da GCNL que contem os tokens gramaticais.
      */
    SpeechAnalysis.prototype.generateString = function (tokens) {
        var query = '';
        var tag;
        var text;
        tokens.forEach(function (part) {
            tag = part.partOfSpeech.tag;
            text = part.text.content;
            query += "[" + tag + "," + text + "]";
        });
        console.log(query);
        return query;
    };
    SpeechAnalysis.prototype.capitalize = function (s) {
        var first_char = /\S/;
        return s.replace(first_char, function (m) { return m.toUpperCase(); });
    };
    /**
      * Recebe um array com as trilpas e faz a inserção das triplas no mapa conceitual
      * proposition[0]: conceito1
      * proposition[1]: relação
      * proposition[2]: conceito2
      * @param proposition array de strings que contem as triplas.
      */
    SpeechAnalysis.prototype.addNodesToMap = function (proposition) {
        var node1;
        var node2;
        var nodeRelation;
        proposition[0] = this.capitalize(proposition[0]);
        proposition[2] = this.capitalize(proposition[2]);
        proposition[1] = proposition[1].toLocaleLowerCase();
        _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_2__["myDiagram"].startTransaction("new node");
        var rgx1 = new RegExp(proposition[0], "i");
        var rgx2 = new RegExp(proposition[2], "i");
        var rgx3 = new RegExp(proposition[1], "i");
        var nodes1 = _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_2__["myDiagram"].findNodesByExample({ text: rgx1 });
        var nodes2 = _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_2__["myDiagram"].findNodesByExample({ text: rgx2 });
        var nodes3 = _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_2__["myDiagram"].findNodesByExample({ text: rgx3 });
        node1 = nodes1.first();
        node2 = nodes2.first();
        nodeRelation = nodes3.first();
        if (node1 && node2) {
            nodeRelation = { text: proposition[1], category: "relation", error: "" };
            var model = _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_2__["myDiagram"].model;
            model.addNodeData(nodeRelation);
            var newLink1 = { from: node1.key, to: nodeRelation.key, category: "normal", error: "" };
            var newLink2 = { from: nodeRelation.key, to: node2.key, category: "normal", error: "" };
            model.addLinkData(newLink1);
            model.addLinkData(newLink2);
        }
        else if (node1) {
            node2 = { text: proposition[2], category: "concept", error: "" };
            nodeRelation = { text: proposition[1], category: "relation", error: "" };
            var model = _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_2__["myDiagram"].model;
            model.addNodeData(node2);
            model.addNodeData(nodeRelation);
            var newLink1_1 = { from: node1.key, to: nodeRelation.key, category: "normal", error: "" };
            var newLink2_1 = { from: nodeRelation.key, to: node2.key, category: "normal", error: "" };
            model.addLinkData(newLink1_1);
            model.addLinkData(newLink2_1);
        }
        else {
            if (node2) {
                node1 = { text: proposition[0], category: "concept", error: "" };
                nodeRelation = { text: proposition[1], category: "relation", error: "" };
                var model = _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_2__["myDiagram"].model;
                model.addNodeData(node1);
                model.addNodeData(nodeRelation);
                var newLink1_2 = { from: node1.key, to: nodeRelation.key, category: "normal", error: "" };
                var newLink2_2 = { from: nodeRelation.key, to: node2.key, category: "normal", error: "" };
                model.addLinkData(newLink1_2);
                model.addLinkData(newLink2_2);
            }
            else {
                node1 = { text: proposition[0], category: "concept", error: "" };
                node2 = { text: proposition[2], category: "concept", error: "" };
                nodeRelation = { text: proposition[1], category: "relation", error: "" };
                var model = _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_2__["myDiagram"].model;
                model.addNodeData(node1);
                model.addNodeData(node2);
                model.addNodeData(nodeRelation);
                var newLink1_3 = { from: node1.key, to: nodeRelation.key, category: "normal", error: "" };
                var newLink2_3 = { from: nodeRelation.key, to: node2.key, category: "normal", error: "" };
                model.addLinkData(newLink1_3);
                model.addLinkData(newLink2_3);
            }
        }
        _edit_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_2__["myDiagram"].commitTransaction("new node");
    };
    return SpeechAnalysis;
}());



/***/ }),

/***/ "./src/app/speech2map/speech-recognition.component.css":
/*!*************************************************************!*\
  !*** ./src/app/speech2map/speech-recognition.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    z-index: 999;\r\n  }\r\n  \r\n  .dialog {\r\n    z-index: 1000;\r\n    position: fixed;\r\n    right: 0;\r\n    left: 0;\r\n    top: 20px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    min-height: 200px;\r\n    width: 90%;\r\n    max-width: 520px;\r\n    background-color: #fff;\r\n    padding: 12px;\r\n    box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    .dialog {\r\n      top: 40px;\r\n    }\r\n  }\r\n  \r\n  .dialog__close-btn {\r\n    border: 0;\r\n    background: none;\r\n    color: #2d2d2d;\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 8px;\r\n    font-size: 1.2em;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/speech2map/speech-recognition.component.html":
/*!**************************************************************!*\
  !*** ./src/app/speech2map/speech-recognition.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12 col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" data-background-color=\"red\">\r\n                    <small><h3 class=\"card-title\" align=\"center\"><b>Speech2Map</b></h3></small>\r\n                </div>\r\n                <div class=\"content\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-2\"></div>\r\n                        <div class=\"col-md-8\">\r\n                            <form>\r\n                                <div class=\"input-group\">\r\n                                    <input type=\"text\" class=\"form-control border-input\" name=\"txtSpeechSearchMovieName\" id=\"txtSpeechSearchMovieName\"\r\n                                        value=\"\" placeholder=\"Click the button to start recording or type the preposition...\" [(ngModel)]=\"speechData\">\r\n\r\n                                    <span class=\"input-group-btn\">\r\n                                        <button class='btn {{cls}} btn-round btn-md'\r\n                                                name=\"btnActivateSpeechSearchMovie\" \r\n                                                id=\"btnActivateSpeechSearchMovie\"\r\n                                                (click)=\"activateSpeechSearchMovie()\">\r\n                                                \r\n                                            <span class=\"mat-button-wrapper\">\r\n                                                <i class=\"material-icons\">{{mic}}</i>\r\n                                            </span>\r\n                                        </button>\r\n                                    </span>\r\n                                </div>\r\n                                \r\n                                <button class=\"btn btn-success\" id=\"bt-save\" (click)=\"save()\">\r\n                                    Save\r\n                                </button>\r\n                                <button class=\"btn btn-danger\" id=\"bt-save\" (click)=\"close()\">\r\n                                    Cancel\r\n                                </button>\r\n                            </form>\r\n                        </div>\r\n                        <div class=\"col-md-1\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/speech2map/speech-recognition.component.ts":
/*!************************************************************!*\
  !*** ./src/app/speech2map/speech-recognition.component.ts ***!
  \************************************************************/
/*! exports provided: SpeechRecognitionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechRecognitionComponent", function() { return SpeechRecognitionComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _spech_analysis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spech-analysis */ "./src/app/speech2map/spech-analysis.ts");
/* harmony import */ var _services_speech2map_speech_recognition_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/speech2map/speech-recognition.service */ "./src/app/_services/speech2map/speech-recognition.service.ts");
/* harmony import */ var _secrets_vars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../secrets.vars */ "./src/app/secrets.vars.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var text;
var SpeechRecognitionComponent = /** @class */ (function () {
    function SpeechRecognitionComponent(zone, dialogRef, speechData, speechRecognitionService, http) {
        this.zone = zone;
        this.dialogRef = dialogRef;
        this.speechData = speechData;
        this.speechRecognitionService = speechRecognitionService;
        this.http = http;
        this.recognizing = false;
        this.mic = "mic";
        this.cls = "btn-info";
        this.showSearchButton = true;
    }
    SpeechRecognitionComponent.prototype.ngOnInit = function () {
        //myDiagram.layout = new go.ForceDirectedLayout();
        console.log("hello");
    };
    SpeechRecognitionComponent.prototype.ngAfterViewInit = function () {
        gapi.load('client:auth2', start);
    };
    SpeechRecognitionComponent.prototype.ngOnDestroy = function () {
        this.speechRecognitionService.DestroySpeechObject();
    };
    SpeechRecognitionComponent.prototype.activateSpeechSearchMovie = function () {
        var _this = this;
        if (this.recognizing) {
            this.speechRecognitionService.stop();
            this.recognizing = false;
            return;
        }
        this.recognizing = true;
        this.speechData = "";
        this.mic = "mic_off";
        this.cls = "btn-danger";
        this.speechRecognitionService.record()
            .subscribe(
        //listener
        function (value) {
            _this.speechData = value.toLocaleLowerCase();
            //console.log(value);
        }, 
        //errror
        function (err) {
            console.log(err);
            _this.mic = "mic";
            _this.cls = "btn-info";
            if (err.error == "no-speech") {
                console.log("--restarting service--");
                _this.recognizing = false;
            }
        }, 
        //completion
        function () {
            _this.recognizing = false;
            _this.zone.run(function () {
                _this.mic = "mic";
                _this.cls = "btn-info";
            });
            console.log("--complete--");
        });
    };
    SpeechRecognitionComponent.prototype.close = function () {
        this.speechRecognitionService.DestroySpeechObject();
        this.dialogRef.close();
    };
    SpeechRecognitionComponent.prototype.save = function () {
        this.speechRecognitionService.stop();
        if (this.speechData) {
            this.analyzeAndMap(this.speechData.toLocaleLowerCase());
            this.dialogRef.close();
        }
        else {
            this.showMessage();
        }
    };
    SpeechRecognitionComponent.prototype.analyzeAndMap = function (text) {
        gapi.load('client:auth2', start);
        gapi.client.language.documents.analyzeSyntax({
            document: {
                content: text,
                type: 'PLAIN_TEXT',
                language: 'pt-br'
            },
            encodingType: 'UTF32',
        }).then(function (results) {
            var syntax = JSON.parse(results.body);
            new _spech_analysis__WEBPACK_IMPORTED_MODULE_4__["SpeechAnalysis"]().analyze(syntax);
        }).catch(function (err) {
            console.error('ERROR:', err);
        });
    };
    SpeechRecognitionComponent.prototype.hotkeys = function (event) {
        //apertar CTRL + . inicia a gravação
        if (event.keyCode == 190 && event.ctrlKey) {
            this.activateSpeechSearchMovie();
        }
        //Apertar ESC sai da tela de inserção
        if (event.keyCode == 27) {
            this.close();
        }
        //Apertar ENTER salva a proposição se tiver algo escrito
        if (event.keyCode == 13) {
            if (this.speechData) {
                if (this.speechData.trim().length > 3) {
                    this.save();
                }
            }
        }
    };
    SpeechRecognitionComponent.prototype.showMessage = function () {
        swal({
            title: 'Nenhuma Proposição Inserida',
            //text: error.message,
            text: "Por favor, insira uma proposição " +
                "e tente novamente.",
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-info'
        });
    };
    SpeechRecognitionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'speech',
            template: __webpack_require__(/*! ./speech-recognition.component.html */ "./src/app/speech2map/speech-recognition.component.html"),
            styles: [__webpack_require__(/*! ./speech-recognition.component.css */ "./src/app/speech2map/speech-recognition.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('dialog', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(.3, .3, .3)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(100)
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(.0, .0, .0)' }))
                    ])
                ])
            ],
            host: { '(window:keydown)': 'hotkeys($event)' }
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], String, _services_speech2map_speech_recognition_service__WEBPACK_IMPORTED_MODULE_5__["SpeechRecognitionService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SpeechRecognitionComponent);
    return SpeechRecognitionComponent;
}());

function start() {
    // Initializes the client with the API key and the Translate API.
    gapi.client.init({
        apiKey: _secrets_vars__WEBPACK_IMPORTED_MODULE_6__["googleApiKey"],
        clientId: _secrets_vars__WEBPACK_IMPORTED_MODULE_6__["googleClientId"],
        discoveryDocs: ['https://language.googleapis.com/$discovery/rest?version=v1', 'https://language.googleapis.com/$discovery/rest?version=v1beta2'],
        scope: 'https://www.googleapis.com/auth/cloud-language https://www.googleapis.com/auth/cloud-platform'
    });
}


/***/ }),

/***/ "./src/app/speech2map/speech-recognition.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/speech2map/speech-recognition.module.ts ***!
  \*********************************************************/
/*! exports provided: SpeechRecognitionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechRecognitionModule", function() { return SpeechRecognitionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _speech_recognition_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./speech-recognition.component */ "./src/app/speech2map/speech-recognition.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SpeechRecognitionModule = /** @class */ (function () {
    function SpeechRecognitionModule() {
    }
    SpeechRecognitionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                //angular builtin module
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
            ],
            declarations: [
                _speech_recognition_component__WEBPACK_IMPORTED_MODULE_4__["SpeechRecognitionComponent"]
            ],
            exports: [
                _speech_recognition_component__WEBPACK_IMPORTED_MODULE_4__["SpeechRecognitionComponent"]
            ]
        })
    ], SpeechRecognitionModule);
    return SpeechRecognitionModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    ws_url: 'http://cmpaas.org'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");




if (environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\wagne\Desktop\NodeProjects\KnowledgePortal\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map