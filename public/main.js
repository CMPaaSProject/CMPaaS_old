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
		"administration-administration-module~edit-edit-module~forms-forms-module~view-view-module",
		"common",
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
		"components-components-module"
	],
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"dashboard-dashboard-module"
	],
	"./edit/edit.module": [
		"./src/app/edit/edit.module.ts",
		"administration-administration-module~edit-edit-module~forms-forms-module~view-view-module",
		"common",
		"edit-edit-module"
	],
	"./findpage/find.module": [
		"./src/app/findpage/find.module.ts",
		"common",
		"findpage-find-module"
	],
	"./forms/forms.module": [
		"./src/app/forms/forms.module.ts",
		"administration-administration-module~edit-edit-module~forms-forms-module~view-view-module",
		"common",
		"forms-forms-module"
	],
	"./maps/maps.module": [
		"./src/app/maps/maps.module.ts",
		"maps-maps-module"
	],
	"./pages/pages.module": [
		"./src/app/pages/pages.module.ts",
		"common",
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
	"./userpage/user.module": [
		"./src/app/userpage/user.module.ts",
		"userpage-user-module"
	],
	"./view/view.module": [
		"./src/app/view/view.module.ts",
		"administration-administration-module~edit-edit-module~forms-forms-module~view-view-module",
		"common",
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

/***/ "./src/app/_services/index.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/index.service.ts ***!
  \********************************************/
/*! exports provided: UserService, MapService, AuthService, VersionService, MeService, ModelService */
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
    function MeService(http) {
        this.http = http;
    }
    MeService.prototype.updateDashboardMaps = function () {
        return this.http.get(_global_vars__WEBPACK_IMPORTED_MODULE_1__["meApiUri"] + '/maps?orderBy=last_update&limit=3')
            .map(function (maps) {
            localStorage.setItem('currentDashboardMaps', JSON.stringify(maps));
            return maps;
        });
    };
    MeService.prototype.updateDashboardMapsVersions = function (maps) {
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
    MeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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
    ModelService.prototype.removeCurrentModel = function () {
        localStorage.removeItem('currentModel');
    };
    ModelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ModelService);
    return ModelService;
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
/* harmony import */ var _index_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index.service */ "./src/app/_services/index.service.ts");
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
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _index_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], VersionService);
    return VersionService;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

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
                _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"]
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
                path: 'edit',
                loadChildren: './edit/edit.module#EditModule'
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
/*! exports provided: myDiagram, ConceptMapComponent, resetModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myDiagram", function() { return myDiagram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConceptMapComponent", function() { return ConceptMapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetModel", function() { return resetModel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var gojs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gojs */ "./node_modules/gojs/release/go.js");
/* harmony import */ var gojs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gojs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_index_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/index.service */ "./src/app/_services/index.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
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
var ConceptMapComponent = /** @class */ (function () {
    function ConceptMapComponent(versionService, modelService) {
        this.versionService = versionService;
        this.name = 'GoJS';
    }
    ConceptMapComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
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
                { text: "New Relation", loc: "", category: "relation" } :
                { text: "New Concept", loc: "", category: "concept" };
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
                category: "normal"
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
            return str;
        }
        // Define the appearance and behavior for Links:
        function linkInfo(d) {
            return "Link:\nfrom " + d.from + " to " + d.to;
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
            return "Group " + g.data.key + ": " + g.data.text + "\n" + mems + " members including: \nLinks: " + links + "\nRelations: " + relations + "\nConcepts: " + (mems - links - relations);
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
        // a context menu is an Adornment with a bunch of buttons in them
        var partContextMenu = $(gojs__WEBPACK_IMPORTED_MODULE_1__["Adornment"], "Vertical", makeButton("Properties", function (e, obj) {
            var contextmenu = obj.part; // the Button is in the context menu Adornment
            var part = contextmenu.adornedPart; // the adornedPart is the Part that the context menu adorns
            // now can do something with PART, or with its data, or with the Adornment (the context menu)
            if (part instanceof gojs__WEBPACK_IMPORTED_MODULE_1__["Link"])
                alert(linkInfo(part.data));
            else if (part instanceof gojs__WEBPACK_IMPORTED_MODULE_1__["Group"])
                alert(groupInfo(contextmenu));
            else
                alert(nodeInfo(part.data));
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
                "commandHandler.archetypeGroupData": { text: "New Map", isGroup: true, color: "blue", category: "map" } //ctrl+G to group
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
                fill: $(gojs__WEBPACK_IMPORTED_MODULE_1__["Brush"], "Linear", { 0: "rgb(254, 201, 0)", 1: "rgb(254, 162, 0)" }),
                stroke: "black"
            }, 
            // Shape.fill is bound to Node.data.color
            new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("fill", "color")), $(gojs__WEBPACK_IMPORTED_MODULE_1__["TextBlock"], {
                font: "bold 12px sans-serif",
                stroke: '#333',
                margin: 6,
                isMultiline: true,
                editable: true // allow in-place editing by user
            }, // some room around the text
            // TextBlock.text is bound to Node.data.key
            new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("text", "text").makeTwoWay()), {
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
            new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("text", "text").makeTwoWay()), {
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
                toLinkableDuplicates: true
            }, new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("fill", "isHighlighted", function (h) { return h ? "rgba(255,0,0,0.2)" : $(gojs__WEBPACK_IMPORTED_MODULE_1__["Brush"], "Linear", { 0: "rgba(224,234,252,0.5)", 1: "rgba(207,222,243,0.5)" }); }).ofObject()), $(gojs__WEBPACK_IMPORTED_MODULE_1__["Panel"], "Vertical", {
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
            }, new gojs__WEBPACK_IMPORTED_MODULE_1__["Binding"]("text", "text").makeTwoWay())), $(gojs__WEBPACK_IMPORTED_MODULE_1__["Placeholder"], // create a placeholder to represent the area where the contents of the group are
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
            })) // end button
            ); // end Adornment
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
        var nodeDataArray = [
            { key: 0, text: "Concept 1", category: "concept", loc: "-80 -6", group: 4 },
            { key: 1, text: "Concept 2", category: "concept", loc: "170 -30", group: 4 },
            { key: 2, text: "Concept 3", category: "concept", loc: "170 10", group: 4 },
            { key: 3, text: "Relation 1", category: "relation", loc: "30 -6", group: 4 },
            { key: 4, text: "Concept Map 1", isGroup: true, category: "map", expanded: true },
            { key: 5, text: "Relation 2", loc: "290 -30", category: "relation", },
            { key: 6, text: "Concept 4", loc: "400 -30", category: "concept" }
        ];
        var linkDataArray = [
            { from: 0, to: 3, category: "normal", color: "red", group: 4 },
            { from: 3, to: 1, category: "normal", group: 4 },
            { from: 3, to: 2, category: "normal", group: 4 },
            { from: 1, to: 5, category: "normal" },
            { from: 5, to: 6, category: "normal" }
        ];
        if (!!this.versionService.getCurrentLoadVersion()) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: 'Are you sure?',
                text: 'You are loading a new content and you will lost all unseved data of the previous map.',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, load it!',
                cancelButtonText: 'Don\'t load it',
                confirmButtonClass: "btn btn-success",
                cancelButtonClass: "btn btn-danger",
                buttonsStyling: false
            }).then(function (result) {
                if (result.value) {
                    myDiagram.model = gojs__WEBPACK_IMPORTED_MODULE_1__["Model"].fromJson(_this.versionService.getCurrentLoadVersion().content);
                    _this.versionService.removeCurrentLoadVersion();
                }
                else {
                    _this.versionService.removeCurrentLoadVersion();
                    (!!localStorage.getItem('currentModel')) ?
                        myDiagram.model = gojs__WEBPACK_IMPORTED_MODULE_1__["Model"].fromJson(localStorage.getItem('currentModel')) :
                        myDiagram.model = new gojs__WEBPACK_IMPORTED_MODULE_1__["GraphLinksModel"](nodeDataArray, linkDataArray);
                }
            });
        }
        else {
            (!!localStorage.getItem('currentModel')) ?
                myDiagram.model = gojs__WEBPACK_IMPORTED_MODULE_1__["Model"].fromJson(localStorage.getItem('currentModel')) :
                myDiagram.model = new gojs__WEBPACK_IMPORTED_MODULE_1__["GraphLinksModel"](nodeDataArray, linkDataArray);
        }
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
        __metadata("design:paramtypes", [_services_index_service__WEBPACK_IMPORTED_MODULE_2__["VersionService"], _services_index_service__WEBPACK_IMPORTED_MODULE_2__["ModelService"]])
    ], ConceptMapComponent);
    return ConceptMapComponent;
}());

function resetModel() {
    var nodeDataArray = [
        { key: 0, text: "Concept 1", category: "concept", loc: "-80 -6", group: 4 },
        { key: 1, text: "Concept 2", category: "concept", loc: "170 -30", group: 4 },
        { key: 2, text: "Concept 3", category: "concept", loc: "170 10", group: 4 },
        { key: 3, text: "Relation 1", category: "relation", loc: "30 -6", group: 4 },
        { key: 4, text: "Concept Map 1", isGroup: true, category: "map", expanded: true },
        { key: 5, text: "Relation 2", loc: "290 -30", category: "relation", },
        { key: 6, text: "Concept 4", loc: "400 -30", category: "concept" }
    ];
    var linkDataArray = [
        { from: 0, to: 3, category: "normal", color: "red", group: 4 },
        { from: 3, to: 1, category: "normal", group: 4 },
        { from: 3, to: 2, category: "normal", group: 4 },
        { from: 1, to: 5, category: "normal" },
        { from: 5, to: 6, category: "normal" }
    ];
    myDiagram.model = new gojs__WEBPACK_IMPORTED_MODULE_1__["GraphLinksModel"](nodeDataArray, linkDataArray);
}


/***/ }),

/***/ "./src/app/global.vars.ts":
/*!********************************!*\
  !*** ./src/app/global.vars.ts ***!
  \********************************/
/*! exports provided: authApiUri, userApiUri, mapApiUri, meApiUri, versionApiUri, followApiUri */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authApiUri", function() { return authApiUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userApiUri", function() { return userApiUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapApiUri", function() { return mapApiUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meApiUri", function() { return meApiUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "versionApiUri", function() { return versionApiUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followApiUri", function() { return followApiUri; });
var authApiUri = 'http://localhost:3000/v1/auth';
var userApiUri = 'http://localhost:3000/v1/users';
var mapApiUri = 'http://localhost:3000/v1/maps';
var meApiUri = 'http://localhost:3000/v1/users/me';
var versionApiUri = 'http://localhost:3000/v1/versions';
var followApiUri = 'http://localhost:3000/v1/follow';


/***/ }),

/***/ "./src/app/layouts/admin/admin-layout.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layouts/admin/admin-layout.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"white\" data-background-color=\"black\" data-image=\"./assets/img/sidebar-1.jpg\">\n        <app-sidebar-cmp></app-sidebar-cmp>\n        <div class=\"sidebar-background\" style=\"background-image: url(assets/img/sidebar-1.jpg)\"></div>\n    </div>\n    <div class=\"main-panel\">\n        <app-navbar-cmp></app-navbar-cmp>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"!isMap()\">\n            <app-footer-cmp></app-footer-cmp>\n        </div>\n    </div>\n    <app-fixedplugin *ngIf=\"isEditor()\"></app-fixedplugin>\n</div>\n"

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
        if (this.location.prepareExternalUrl(this.location.path()) === '/edit/cmap') {
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

module.exports = "<nav class=\"navbar navbar-expand-lg bg-primary navbar-transparent navbar-absolute\" color-on-scroll=\"500\">\n  <div class=\"container\">\n    <div class=\"navbar-wrapper\">\n      <a class=\"navbar-brand d-none d-sm-none d-md-block\" [routerLink]=\"['/dashboard']\">Knowledge Portal | CMPaaS Project</a>\n      <a class=\"navbar-brand d-block d-sm-block d-md-none\" [routerLink]=\"['/dashboard']\">MD Pro Angular</a>\n    </div>\n    <button mat-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"!this.isLocked()\">\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">\n            <i class=\"material-icons\">dashboard</i> Dashboard\n          </a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"!this.isLocked()\">\n          <a class=\"nav-link\" [routerLink]=\"['/pages/register']\">\n            <i class=\"material-icons\">person_add</i> Register\n          </a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"!this.isLocked()\">\n          <a class=\"nav-link\" [routerLink]=\"['/pages/login']\">\n            <i class=\"material-icons\">fingerprint</i> Login\n          </a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"this.isLocked()\">\n          <a class=\"nav-link\" [routerLink]=\"['/pages/lock']\">\n            <i class=\"material-icons\">lock_open</i> Lock\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n  <router-outlet></router-outlet>\n"

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

module.exports = "<div class=\"card\">\n  <div class=\"header\">\n    <h4 class=\"title\">{{ title }}</h4>\n    <p class=\"category\">{{ subtitle }}</p>\n  </div>\n  <div class=\"content\">\n    <div [attr.id]=\"chartId\" class=\"ct-chart {{ chartClass }}\"></div>\n\n    <div class=\"footer\">\n      <div class=\"legend\">\n        <span *ngFor=\"let item of legendItems\">\n          <i [ngClass]=\"item.imageClass\"></i> {{ item.title }}\n        </span>\n      </div>\n      <hr *ngIf=\"withHr\">\n      <div class=\"stats\">\n        <i [ngClass]=\"footerIconClass\"></i> {{ footerText }}\n      </div>\n    </div>\n  </div>\n</div>\n"

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

module.exports = "\n  <div class=\"content table-responsive\">\n    <table class=\"table\">\n      <tbody>\n          <tr *ngFor=\"let row of data.dataRows\">\n            <!-- <td *ngFor=\"let cell of row\">{{ cell }}</td> -->\n            <td>\n                <div class=\"flag\">\n                    <img src=\"./assets/img/flags/{{row[0]}}.png\" alt=\"\">\n                </div>\n            </td>\n            <td>\n                {{row[1]}}\n            </td>\n            <td class=\"text-right\">\n                {{row[2]}}\n            </td>\n            <td class=\"text-right\">\n                {{row[3]}}\n            </td>\n          </tr>\n      </tbody>\n    </table>\n\n  </div>\n"

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

/***/ "./src/app/shared/fixedplugin/fixedplugin.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".f-left {\n    float: left;\n}\n\n.f-44 {\n    font-size: 44px;\n    color: #000\n}"

/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Fixed Plugin configurator, used just for Demo Purpose -->\n<div class=\"fixed-plugin\">\n    <div class=\"dropdown show-dropdown\">\n        <a href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"true\">\n            <i class=\"fa fa-cog fa-2x\"> </i>\n        </a>\n        <ul class=\"dropdown-menu\">\n            <li class=\"header-title\"> Sidebar Filters</li>\n            <li class=\"adjustments-line\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\n                  <div class=\"ml-auto mr-auto\">\n                    <span class=\"badge filter badge-purple\" data-color=\"purple\"></span>\n                    <span class=\"badge filter badge-azure active\" data-color=\"azure\"></span>\n                    <span class=\"badge filter badge-green\" data-color=\"green\"></span>\n                    <span class=\"badge filter badge-orange\" data-color=\"orange\"></span>\n                    <span class=\"badge filter badge-danger\" data-color=\"danger\"></span>\n                    <span class=\"badge filter badge-rose\" data-color=\"rose\"></span>\n                  </div>\n                    <div class=\"clearfix\"></div>\n                </a>\n            </li>\n            <li class=\"header-title\">Sidebar Background</li>\n            <li class=\"adjustments-line\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\n                    <div class=\"ml-auto mr-auto\">\n                        <span class=\"badge filter badge-white\" data-color=\"white\"></span>\n                        <span class=\"badge filter badge-black\" data-color=\"black\"></span>\n                        <span class=\"badge filter badge-danger active\" data-color=\"red\"></span>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                </a>\n            </li>\n            <li class=\"header-title\">Operations</li>\n            <li class=\"adjustments-line\">\n                    <button mat-raised-button mat-min-fab class=\"btn btn-danger btn-round btn-fab btn-sm\" title=\"Create a new map\" id=\"bt-new-map\">\n                        <i class=\"material-icons\">add</i>\n                    </button>\n                    <button mat-raised-button mat-min-fab class=\"btn btn-success btn-round btn-fab btn-sm\" title=\"Save as new map\" id=\"bt-save\">\n                        <i class=\"material-icons\">save</i>\n                    </button>\n                    <button mat-raised-button mat-min-fab class=\"btn btn-warning btn-round btn-fab btn-sm\" title=\"Save as new version\" id=\"bt-version\" [disabled]=\"!mapService.getCurrentMap()\">\n                        <i class=\"material-icons\">call_split</i>\n                    </button>\n            </li>\n            <li class=\"adjustments-line\">\n              <a href=\"javascript:void(0)\" class=\"switch-trigger\">\n                  <p>Sidebar Mini</p>\n                  <label class=\"ml-auto\">\n                    <div class=\"togglebutton switch-sidebar-mini\">\n                      <label>\n                          <input type=\"checkbox\">\n                              <span class=\"toggle\"></span>\n                      </label>\n                    </div>\n                  </label>\n                  <div class=\"clearfix\"></div>\n                  <div class=\"ripple-container\"></div>\n              </a>\n            </li>\n            <li class=\"adjustments-line\">\n              <a href=\"javascript:void(0)\" class=\"switch-trigger\">\n                  <p>Sidebar Images</p>\n                  <label class=\"switch-mini ml-auto\">\n                    <div class=\"togglebutton switch-sidebar-image\">\n                      <label>\n                          <input type=\"checkbox\" checked=\"\">\n                            <span class=\"toggle\"></span>\n                      </label>\n                    </div>\n                  </label>\n                  <div class=\"clearfix\"></div>\n                  <div class=\"ripple-container\"></div>\n              </a>\n            </li>\n            <li class=\"header-title\">Images</li>\n            <li class=\"active\">\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img src=\"./assets/img/sidebar-1.jpg\" alt=\"\" />\n                </a>\n            </li>\n            <li>\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img src=\"./assets/img/sidebar-2.jpg\" alt=\"\" />\n                </a>\n            </li>\n            <li>\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img src=\"./assets/img/sidebar-3.jpg\" alt=\"\" />\n                </a>\n            </li>\n            <li>\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img src=\"./assets/img/sidebar-4.jpg\" alt=\"\" />\n                </a>\n            </li>\n            \n        </ul>\n    </div>\n</div>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var md = {
    misc: {
        navbar_menu_visible: 0,
        active_collapse: true,
        disabled_collapse_init: 0,
    }
};
var FixedpluginComponent = /** @class */ (function () {
    function FixedpluginComponent(router, mapService, authService) {
        this.router = router;
        this.mapService = mapService;
        this.authService = authService;
    }
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
        $('.fixed-plugin .active-color span').click(function () {
            var $full_page_background = $('.full-page-background');
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length !== 0) {
                $sidebar.attr('data-color', new_color);
            }
            if ($full_page.length !== 0) {
                $full_page.attr('filter-color', new_color);
            }
            if ($sidebar_responsive.length !== 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
        });
        $('.fixed-plugin .background-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length !== 0) {
                $sidebar.attr('data-background-color', new_color);
            }
        });
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
        $('.switch-sidebar-mini input').change(function () {
            var $body = $('body');
            var $input = $(this);
            if (md.misc.sidebar_mini_active === true) {
                $('body').removeClass('sidebar-mini');
                md.misc.sidebar_mini_active = false;
            }
            else {
                setTimeout(function () {
                    $('body').addClass('sidebar-mini');
                    $('.sidebar .collapse').css('height', 'auto');
                    md.misc.sidebar_mini_active = true;
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
        });
    };
    FixedpluginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fixedplugin',
            template: __webpack_require__(/*! ./fixedplugin.component.html */ "./src/app/shared/fixedplugin/fixedplugin.component.html"),
            styles: [__webpack_require__(/*! ./fixedplugin.component.css */ "./src/app/shared/fixedplugin/fixedplugin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_index_service__WEBPACK_IMPORTED_MODULE_2__["MapService"], _services_index_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
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
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
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

module.exports = "<footer class=\"footer \">\n  <div class=\"container\">\n    <nav class=\"pull-left\">\n      <ul>\n        <li>\n          <a href=\"https://www.creative-tim.com\">\n            Creative Tim\n          </a>\n        </li>\n        <li>\n          <a href=\"https://creative-tim.com/about-us\">\n            About Us\n          </a>\n        </li>\n        <li>\n          <a href=\"http://blog.creative-tim.com\">\n            Blog\n          </a>\n        </li>\n        <li>\n          <a href=\"https://www.creative-tim.com/license\">\n            Licenses\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <div class=\"copyright pull-right\">\n      &copy;\n      {{test | date: 'yyyy'}}, made by\n      <a href=\"https://www.ppgi.inf.ufes.br\" target=\"_blank\"> UFES | PPGI | LIED | </a> CMPaaS Project.\n    </div>\n  </div>\n</footer>\n"

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

module.exports = "<nav #navbar class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-wrapper\">\n      <div class=\"navbar-minimize\">\n        <button mat-raised-button (click)=\"minimizeSidebar()\" class=\"btn btn-just-icon btn-white btn-fab btn-round\">\n          <i class=\"material-icons text_align-center visible-on-sidebar-regular\">more_vert</i>\n          <i class=\"material-icons design_bullet-list-67 visible-on-sidebar-mini\">view_list</i>\n        </button>\n      </div>\n      <a class=\"navbar-brand\" href=\"{{getPath()}}\"> {{getTitle()}}</a>\n    </div>\n    <button mat-button class=\"navbar-toggler btn-no-ripple\" type=\"button\" (click)=\"sidebarToggle()\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n      <form class=\"navbar-form\">\n        <div class=\"input-group no-border\">\n          <input type=\"text\" [(ngModel)]=\"search\" class=\"form-control\" placeholder=\"Search User...\" [ngModelOptions]=\"{standalone: true}\">\n          <button mat-raised-button (click)=\"redirectToSearch($event)\" class=\"btn btn-white btn-round btn-just-icon\">\n            <i class=\"material-icons\">search</i>\n            <div class=\"ripple-container\"></div>\n          </button>\n        </div>\n      </form>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#pablo\">\n            <i class=\"material-icons\">dashboard</i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Stats</span>\n            </p>\n          </a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link\" href=\"\" id=\"navbarDropdownMenuLink\" href=\"\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"material-icons\">notifications</i>\n            <span class=\"notification\">5</span>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Some Actions</span>\n            </p>\n          </a>\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" href=\"\">Mike John responded to your email</a>\n            <a class=\"dropdown-item\" href=\"\">You have 5 new tasks</a>\n            <a class=\"dropdown-item\" href=\"\">You're now friend with Andrew</a>\n            <a class=\"dropdown-item\" href=\"\">Another Notification</a>\n            <a class=\"dropdown-item\" href=\"\">Another One</a>\n          </div>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link\" href=\"\" id=\"navbarDropdownMenuLink2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"material-icons\">person</i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Account</span>\n            </p>\n          </a>\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink2\">\n            <a class=\"dropdown-item\" href=\"\" (click)=\"logout($event)\">Logout</a>\n            <a class=\"dropdown-item\" href=\"\" (click)=\"lock($event)\">Lock</a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

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

module.exports = "\n\n        <div class=\"logo\">\n          <a class=\"simple-text logo-mini\">\n            <div class=\"logo-img\">\n                <img src=\"/assets/img/conceptmap.png\"/>\n            </div>\n          </a>\n            <a href=\"#\" class=\"simple-text logo-normal\">\n              CMPaaS Project\n            </a>\n            <p>Knowledge Portal</p> \n        </div>\n\n\n        <div class=\"sidebar-wrapper\">\n\n            <div class=\"user\">\n                <div class=\"photo\">\n                    <img src={{this.user.profile_picture}} />\n                </div>\n                <div class=\"user-info\">\n                    <a data-toggle=\"collapse\" href=\"#collapseExample\" class=\"collapsed\">\n                        <span>\n                            {{this.user.firstname}}\n                            <b class=\"caret\"></b>\n                        </span>\n                    </a>\n                    <div class=\"collapse\" id=\"collapseExample\">\n                        <ul class=\"nav\">\n                            <li class=\"nav-item\">\n                                <a href=\"javascript:void(0)\" class=\"nav-link\">\n                                    <span class=\"sidebar-mini\">MP</span>\n                                    <span class=\"sidebar-normal\">My Profile</span>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a href=\"javascript:void(0)\" class=\"nav-link\">\n                                    <span class=\"sidebar-mini\">EP</span>\n                                    <span class=\"sidebar-normal\">Edit Profile</span>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a href=\"javascript:void(0)\" class=\"nav-link\">\n                                    <span class=\"sidebar-mini\">S</span>\n                                    <span class=\"sidebar-normal\">Settings</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"isMobileMenu()\">\n              <form class=\"navbar-form\">\n                <span class=\"bmd-form-group\"><div class=\"input-group no-border\">\n                  <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n                  <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                    <i class=\"material-icons\">search</i>\n                    <div class=\"ripple-container\"></div>\n                  </button>\n                </div></span>\n              </form>\n              <ul class=\"nav navbar-nav nav-mobile-menu\">\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"#pablo\">\n                    <i class=\"material-icons\">dashboard</i>\n                    <p>\n                      <span class=\"d-lg-none d-md-block\">Stats</span>\n                    </p>\n                  </a>\n                </li>\n                <li class=\"nav-item dropdown\">\n                  <a class=\"nav-link\" href=\"#pablo\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <i class=\"material-icons\">notifications</i>\n                    <span class=\"notification\">5</span>\n                    <p>\n                      <span class=\"d-lg-none d-md-block\">Some Actions</span>\n                    </p>\n                  </a>\n                  <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                    <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\n                    <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\n                    <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\n                    <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\n                    <a class=\"dropdown-item\" href=\"#\">Another One</a>\n                  </div>\n                </li>\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link\" href=\"\" id=\"navbarDropdownMenuLink2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                      <i class=\"material-icons\">person</i>\n                      <p>\n                        <span class=\"d-lg-none d-md-block\">Account</span>\n                      </p>\n                    </a>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink2\">\n                      <a class=\"dropdown-item\" href=\"\" (click)=\"logout($event)\">Logout</a>\n                      <a class=\"dropdown-item\" href=\"\" (click)=\"lock($event)\">Lock</a>\n                    </div>\n                  </li>\n              </ul>\n            </div>\n            <ul class=\"nav\">\n                <li routerLinkActive=\"active\" *ngFor=\"let menuitem of menuItems\" class=\"nav-item\">\n                    <!--If is a single link-->\n                    <a [routerLink]=\"[menuitem.path]\" *ngIf=\"menuitem.type === 'link'\" class=\"nav-link\">\n                        <i class=\"material-icons\">{{menuitem.icontype}}</i>\n                        <p>{{menuitem.title}}</p>\n                    </a>\n                    <!--If it have a submenu-->\n                    <a data-toggle=\"collapse\" href=\"#{{menuitem.collapse}}\" *ngIf=\"menuitem.type === 'sub'\" (click)=\"updatePS()\" class=\"nav-link\">\n                        <i class=\"material-icons\">{{menuitem.icontype}}</i>\n                        <p>{{menuitem.title}}<b class=\"caret\"></b></p>\n                    </a>\n\n                    <!--Display the submenu items-->\n                    <div id=\"{{menuitem.collapse}}\" class=\"collapse\" *ngIf=\"menuitem.type === 'sub'\">\n                        <ul class=\"nav\">\n                            <li routerLinkActive=\"active\" *ngFor=\"let childitem of menuitem.children\" class=\"nav-item\">\n                                <a [routerLink]=\"[menuitem.path, childitem.path]\" class=\"nav-link\">\n                                    <span class=\"sidebar-mini\">{{childitem.ab}}</span>\n                                    <span class=\"sidebar-normal\">{{childitem.title}}</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </li>\n                <!-- <li class=\"nav-item\">\n                    <a href=\"http://md-pro-angular.creative-tim.com/documentation/tutorial?ref=md-pro-archive\" class=\"nav-link\">\n                        <i class=\"material-icons\">school</i>\n                        <p>Documentation</p>\n                    </a>\n                </li> -->\n            </ul>\n\n        </div>\n"

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
    function SidebarComponent(router, authService) {
        this.router = router;
        this.authService = authService;
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
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar-cmp',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
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
    production: false
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

module.exports = __webpack_require__(/*! /Users/wagnerperin/Desktop/NodeProjects/KnowledgePortal/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map