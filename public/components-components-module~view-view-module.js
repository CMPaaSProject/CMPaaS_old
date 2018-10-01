(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-components-module~view-view-module"],{

/***/ "./src/app/components/buttons/buttons.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/buttons/buttons.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"card\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"card-header\">\r\n              <h4 class=\"card-title\">Pick your Color</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <button mat-raised-button class=\"btn\">Default</button>\r\n              <button mat-raised-button class=\"btn btn-primary\">Primary</button>\r\n              <button mat-raised-button class=\"btn btn-info\">Info</button>\r\n              <button mat-raised-button class=\"btn btn-success\">Success</button>\r\n              <button mat-raised-button class=\"btn btn-warning\">Warning</button>\r\n              <button mat-raised-button class=\"btn btn-danger\">Danger</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"card-header\">\r\n              <h4 class=\"card-title\">Buttons with Label</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <button mat-raised-button class=\"btn\">\r\n                <span class=\"btn-label\">\r\n                  <i class=\"material-icons\">keyboard_arrow_left</i>\r\n                </span>\r\n                Left\r\n              </button>\r\n              <button mat-raised-button class=\"btn\">\r\n                Right\r\n                <span class=\"btn-label btn-label-right\">\r\n                  <i class=\"material-icons\">keyboard_arrow_right</i>\r\n                </span>\r\n              </button>\r\n              <button mat-raised-button class=\"btn btn-info\">\r\n                <span class=\"btn-label\">\r\n                  <i class=\"material-icons\">priority_high</i>\r\n                </span>\r\n                Info\r\n              </button>\r\n              <button mat-raised-button class=\"btn btn-success\">\r\n                <span class=\"btn-label\">\r\n                  <i class=\"material-icons\">check</i>\r\n                </span>\r\n                Success\r\n              </button>\r\n              <button mat-raised-button class=\"btn btn-warning\">\r\n                <i class=\"material-icons\">warning</i> Warning\r\n              </button>\r\n              <button mat-raised-button class=\"btn btn-danger\">\r\n                <i class=\"material-icons\">close</i> Danger\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"card-header\">\r\n              <h4 class=\"card-title\">Pick your Size</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <button mat-raised-button class=\"btn btn-primary btn-sm\">Small</button>\r\n              <button mat-raised-button class=\"btn btn-primary\">Regular</button>\r\n              <button mat-raised-button class=\"btn btn-primary btn-lg\">Large</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"card-header\">\r\n              <h4 class=\"card-title\">Pick your Style</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <button mat-raised-button class=\"btn btn-primary\">Default</button>\r\n              <button mat-raised-button class=\"btn btn-primary btn-round\">round</button>\r\n              <button mat-raised-button class=\"btn btn-primary btn-round\">\r\n                <i class=\"material-icons\">favorite</i> with icon\r\n              </button>\r\n              <button mat-raised-button mat-min-fab class=\"btn btn-primary btn-round btn-fab\">\r\n                <i class=\"material-icons\">favorite</i>\r\n              </button>\r\n              <button mat-raised-button class=\"btn btn-primary btn-link\">\r\n                simple\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"card-header\">\r\n              <h4 class=\"card-title\">Pagination</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <nav aria-label=\"Page navigation example\">\r\n                <ul class=\"pagination pagination-primary\">\r\n                  <li class=\"page-item active\">\r\n                    <a mat-button class=\"page-link\">1</a>\r\n                  </li>\r\n                  <li class=\"page-item\">\r\n                    <a mat-button class=\"page-link\">2</a>\r\n                  </li>\r\n                  <li class=\"page-item\">\r\n                    <a mat-button class=\"page-link\">3</a>\r\n                  </li>\r\n                  <li class=\"page-item\">\r\n                    <a mat-button class=\"page-link\">4</a>\r\n                  </li>\r\n                  <li class=\"page-item\">\r\n                    <a mat-button class=\"page-link\">5</a>\r\n                  </li>\r\n                </ul>\r\n                <ul class=\"pagination\">\r\n                  <li class=\"page-item\">\r\n                    <a mat-button class=\"page-link\" aria-label=\"Previous\">\r\n                      <span aria-hidden=\"true\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i></span>\r\n                    </a>\r\n                  </li>\r\n                  <li class=\"page-item\">\r\n                    <a mat-button class=\"page-link\">1</a>\r\n                  </li>\r\n                  <li class=\"page-item active\">\r\n                    <a mat-button class=\"page-link\">2</a>\r\n                  </li>\r\n                  <li class=\"page-item\">\r\n                    <a mat-button class=\"page-link\">3</a>\r\n                  </li>\r\n                  <li class=\"page-item\">\r\n                    <a mat-button class=\"page-link\" aria-label=\"Next\">\r\n                      <span aria-hidden=\"true\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></span>\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n              </nav>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"card-header\">\r\n              <h4 class=\"card-title\">Button Group</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"btn-group\">\r\n                <button mat-raised-button type=\"button\" class=\"btn btn-info\">Left</button>\r\n                <button mat-raised-button type=\"button\" class=\"btn btn-info\">Middle</button>\r\n                <button mat-raised-button type=\"button\" class=\"btn btn-info\">Right</button>\r\n              </div>\r\n              <br>\r\n              <br>\r\n              <div class=\"btn-group\" data-toggle=\"buttons\">\r\n                <button mat-raised-button type=\"button\" class=\"btn btn-round btn-info\">1</button>\r\n                <button mat-raised-button type=\"button\" class=\"btn btn-round btn-info\">2</button>\r\n                <button mat-raised-button type=\"button\" class=\"btn btn-round btn-info\">3</button>\r\n                <button mat-raised-button type=\"button\" class=\"btn btn-round btn-info\">4</button>\r\n              </div>\r\n              <div class=\"btn-group\">\r\n                <button mat-raised-button type=\"button\" class=\"btn btn-round btn-info\">5</button>\r\n                <button mat-raised-button type=\"button\" class=\"btn btn-round btn-info\">6</button>\r\n                <button mat-raised-button type=\"button\" class=\"btn btn-round btn-info\">7</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <div class=\"card-header\">\r\n              <h4 class=\"card-title\">Social buttons</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4 col-sm-5\">\r\n                  <p class=\"category\">Default</p>\r\n                  <button mat-raised-button class=\"btn btn-twitter\">\r\n                    <i class=\"fa fa-twitter\"></i> Connect with Twitter\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <p class=\"category\">&nbsp;</p>\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-twitter\">\r\n                    <i class=\"fa fa-twitter\"></i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <p class=\"category\">&nbsp;</p>\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-round btn-twitter\">\r\n                    <i class=\"fa fa-twitter\"></i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <p class=\"category\">Neutral</p>\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-link btn-twitter\">\r\n                    <i class=\"fa fa-twitter\"></i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-3 col-sm-4\">\r\n                  <p class=\"category\">&nbsp;</p>\r\n                  <button mat-raised-button class=\"btn btn-link btn-twitter\">\r\n                    <i class=\"fa fa-twitter\"></i> Connect with Twitter\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4 col-sm-5\">\r\n                  <button mat-raised-button class=\"btn btn-facebook\">\r\n                    <i class=\"fa fa-facebook-square\"></i> Share · 2.2k\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-facebook\">\r\n                    <i class=\"fa fa-facebook\"> </i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-round btn-facebook\">\r\n                    <i class=\"fa fa-facebook\"> </i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-link btn-facebook\">\r\n                    <i class=\"fa fa-facebook-square\"> </i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-3 col-sm-4\">\r\n                  <button mat-raised-button class=\"btn btn-link btn-facebook\">\r\n                    <i class=\"fa fa-facebook-square\"></i> Share · 2.2k\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4 col-sm-5\">\r\n                  <button mat-raised-button class=\"btn btn-google\">\r\n                    <i class=\"fa fa-google-plus\"></i> Share on Google+\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-google\">\r\n                    <i class=\"fa fa-google-plus\"> </i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-round btn-google\">\r\n                    <i class=\"fa fa-google-plus\"> </i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-link btn-google\">\r\n                    <i class=\"fa fa-google-plus\"> </i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-3 col-sm-4\">\r\n                  <button mat-raised-button class=\"btn btn-link btn-google\">\r\n                    <i class=\"fa fa-google-plus\"></i> Share on Google+\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4 col-sm-5\">\r\n                  <button mat-raised-button class=\"btn btn-linkedin\">\r\n                    <i class=\"fa fa-linkedin-square\"></i> Connect with Linkedin\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-linkedin\">\r\n                    <i class=\"fa fa-linkedin\"></i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-round btn-linkedin\">\r\n                    <i class=\"fa fa-linkedin\"></i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-link btn-linkedin\">\r\n                    <i class=\"fa fa-linkedin-square\"></i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-3 col-sm-4\">\r\n                  <button mat-raised-button class=\"btn btn-link btn-linkedin\">\r\n                    <i class=\"fa fa-linkedin-square\"></i> Connect with Linkedin\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4 col-sm-5\">\r\n                  <button mat-raised-button class=\"btn btn-pinterest\">\r\n                    <i class=\"fa fa-pinterest\"></i> Pint it · 212\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-pinterest\">\r\n                    <i class=\"fa fa-pinterest\"></i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-round btn-pinterest\">\r\n                    <i class=\"fa fa-pinterest\"></i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-link btn-pinterest\">\r\n                    <i class=\"fa fa-pinterest\"></i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-3 col-sm-4\">\r\n                  <button mat-raised-button class=\"btn btn-link btn-pinterest\">\r\n                    <i class=\"fa fa-pinterest\"></i> Pint it · 212\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4 col-sm-5\">\r\n                  <button mat-raised-button class=\"btn btn-youtube\">\r\n                    <i class=\"fa fa-youtube-play\"></i> View on Youtube\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-youtube\">\r\n                    <i class=\"fa fa-youtube\"> </i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-round btn-youtube\">\r\n                    <i class=\"fa fa-youtube\"> </i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-link btn-youtube\">\r\n                    <i class=\"fa fa-youtube\"> </i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-3 col-sm-4\">\r\n                  <button mat-raised-button class=\"btn btn-link btn-youtube\">\r\n                    <i class=\"fa fa-youtube-play\"></i> View on Youtube\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4 col-sm-5\">\r\n                  <button mat-raised-button class=\"btn btn-tumblr\">\r\n                    <i class=\"fa fa-tumblr-square\"></i> Repost\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-tumblr\">\r\n                    <i class=\"fa fa-tumblr\"> </i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-round btn-tumblr\">\r\n                    <i class=\"fa fa-tumblr\"> </i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-link btn-tumblr\">\r\n                    <i class=\"fa fa-tumblr-square\"> </i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-3 col-sm-4\">\r\n                  <button mat-raised-button class=\"btn btn-link btn-tumblr\">\r\n                    <i class=\"fa fa-tumblr-square\"></i> Repost\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4 col-sm-5\">\r\n                  <button mat-raised-button class=\"btn btn-github\">\r\n                    <i class=\"fa fa-github\"></i> Connect with Github\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-github\">\r\n                    <i class=\"fa fa-github\"></i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-round btn-github\">\r\n                    <i class=\"fa fa-github\"></i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-link btn-github\">\r\n                    <i class=\"fa fa-github\"></i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-3 col-sm-4\">\r\n                  <button mat-raised-button class=\"btn btn-link btn-github\">\r\n                    <i class=\"fa fa-github\"></i> Connect with Github\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4 col-sm-5\">\r\n                  <button mat-raised-button class=\"btn btn-behance\">\r\n                    <i class=\"fa fa-behance-square\"></i> Follow us\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-behance\">\r\n                    <i class=\"fa fa-behance\"></i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-round btn-behance\">\r\n                    <i class=\"fa fa-behance\"></i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-link btn-behance\">\r\n                    <i class=\"fa fa-behance\"></i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-3 col-sm-4\">\r\n                  <button mat-raised-button class=\"btn btn-link btn-behance\">\r\n                    <i class=\"fa fa-behance-square\"></i> Follow us\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4 col-sm-5\">\r\n                  <button mat-raised-button class=\"btn btn-dribbble\">\r\n                    <i class=\"fa fa-dribbble\"></i> Find us on Dribble\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-dribbble\">\r\n                    <i class=\"fa fa-dribbble\"></i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-round btn-dribbble\">\r\n                    <i class=\"fa fa-dribbble\"></i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-link btn-dribbble\">\r\n                    <i class=\"fa fa-dribbble\"></i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-3 col-sm-4\">\r\n                  <button mat-raised-button class=\"btn btn-link btn-dribbble\">\r\n                    <i class=\"fa fa-dribbble\"></i> Find us on Dribble\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4 col-sm-5\">\r\n                  <button mat-raised-button class=\"btn btn-reddit\">\r\n                    <i class=\"fa fa-reddit\"></i> Repost · 232\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-reddit\">\r\n                    <i class=\"fa fa-reddit\"></i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-round btn-reddit\">\r\n                    <i class=\"fa fa-reddit\"></i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-1 col-sm-1\">\r\n                  <button mat-raised-button class=\"btn btn-just-icon btn-link btn-reddit\">\r\n                    <i class=\"fa fa-reddit\"></i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-3 col-sm-4\">\r\n                  <button mat-raised-button class=\"btn btn-link btn-reddit\">\r\n                    <i class=\"fa fa-reddit\"></i> Repost · 232\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/buttons/buttons.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/buttons/buttons.component.ts ***!
  \*********************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
    }
    ButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__(/*! ./buttons.component.html */ "./src/app/components/buttons/buttons.component.html")
        })
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/components/comments-areas/comments-areas.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/comments-areas/comments-areas.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-10 ml-auto mr-auto\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header \">\r\n                <h3 class=\"card-title text-center\">Comments</h3>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"media-area\">\r\n                            <div class=\"media\">\r\n                                <a class=\"pull-left\" href=\"#\">\r\n                                    <div class=\"avatar\">\r\n                                        <img class=\"media-object img-raised\" src={{comments[0].author.img}}>\r\n                                    </div>\r\n                                </a>\r\n                                <div class=\"media-body\">\r\n                                    <h5 class=\"media-heading\">{{comments[0].author.name}}\r\n                                        <small class=\"text-muted\">&middot; {{comments[0].author.date}}</small>\r\n                                    </h5>\r\n                                    <!-- <p>Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!</p>\r\n                                    <p>All praises and blessings to the families of people who never gave up on dreams. Don't forget, You're Awesome!</p> -->\r\n                                    <p>{{comments[0].content}}</p>\r\n                                    <div class=\"media-footer\">\r\n                                        <a (click) = \"reply(0)\" class=\"btn btn-primary btn-link pull-right\" placement=\"top\" ngbTooltip=\"Reply to Comment\">\r\n                                            <i class=\"material-icons\">reply</i> Reply\r\n                                        </a>\r\n                                        <a href=\"#\" class=\"btn btn-danger btn-link pull-right\">\r\n                                            <i class=\"material-icons\">favorite_border</i> 243\r\n                                        </a>\r\n                                    </div>\r\n                                    <div class=\"media\">\r\n                                        <a class=\"pull-left\" href=\"#pablo\">\r\n                                            <div class=\"avatar\">\r\n                                                <img class=\"media-object img-raised\" alt=\"64x64\" src={{comments[0].responses[0].author.img}}>\r\n                                            </div>\r\n                                        </a>\r\n                                        <div class=\"media-body\">\r\n                                            <h5 class=\"media-heading\">{{comments[0].responses[0].author.name}}\r\n                                                <small class=\"text-muted\">&middot; {{comments[0].responses[0].author.date}}</small>\r\n                                            </h5>\r\n                                            <p>{{comments[0].responses[0].content}}</p>\r\n                                            <div class=\"media-footer\">\r\n                                                <a (click)=\"reply(0, comments[0].responses[0].author.name)\" class=\"btn btn-primary btn-link pull-right\" placement=\"top\" ngbTooltip=\"Reply to Comment\">\r\n                                                    <i class=\"material-icons\">reply</i> Reply\r\n                                                </a>\r\n                                                <a href=\"#\" class=\"btn btn-danger btn-link pull-right\">\r\n                                                    <i class=\"material-icons\">favorite_border</i> 243\r\n                                                </a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"media media-post\" *ngIf=\"displayRespondeOf == 0\">\r\n                                        <a class=\"pull-left author\" href=\"#pablo\">\r\n                                            <div class=\"avatar\">\r\n                                                <img class=\"media-object img-raised\" alt=\"64x64\" src=\"./assets/img/faces/wagner.jpg\">\r\n                                            </div>\r\n                                        </a>\r\n                                        <div class=\"media-body\">\r\n                                            <textarea class=\"form-control\" placeholder=\"Write a nice reply or go home...\" rows=\"4\">{{responseTo}}</textarea>\r\n                                            <div class=\"media-footer\">\r\n                                                <a href=\"#pablo\" class=\"btn btn-primary pull-right bt-comment\">\r\n                                                    <i class=\"material-icons\">reply</i> Reply\r\n                                                </a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"pagination pagination-primary justify-content-center\">\r\n                                <nav aria-label=\"Page navigation example\">\r\n                                    <ul class=\"pagination\">\r\n                                        <li class=\"page-item\">\r\n                                        <a mat-button class=\"page-link\" aria-label=\"Previous\">\r\n                                            <span aria-hidden=\"true\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i></span>\r\n                                        </a>\r\n                                        </li>\r\n                                        <li class=\"page-item\">\r\n                                        <a mat-button class=\"page-link\">1</a>\r\n                                        </li>\r\n                                        <li class=\"page-item active\">\r\n                                        <a mat-button class=\"page-link\">2</a>\r\n                                        </li>\r\n                                        <li class=\"page-item\">\r\n                                        <a mat-button class=\"page-link\">3</a>\r\n                                        </li>\r\n                                        <li class=\"page-item\">\r\n                                        <a mat-button class=\"page-link\" aria-label=\"Next\">\r\n                                            <span aria-hidden=\"true\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></span>\r\n                                        </a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </nav>\r\n                            </div>\r\n                            <div class=\"media media-post\">\r\n                                <a class=\"pull-left author\" href=\"#pablo\">\r\n                                    <div class=\"avatar\">\r\n                                        <img class=\"media-object img-raised\" alt=\"64x64\" src=\"./assets/img/faces/wagner.jpg\">\r\n                                    </div>\r\n                                </a>\r\n                                <div class=\"media-body\">\r\n                                    <textarea class=\"form-control\" placeholder=\"Write some nice stuff or nothing...\" rows=\"6\"></textarea>\r\n                                    <div class=\"media-footer\">\r\n                                        <a href=\"#pablo\" class=\"btn btn-primary btn-wd pull-right bt-comment\">Post Comment</a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/comments-areas/comments-areas.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/comments-areas/comments-areas.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".media .avatar {\n  margin: 0 auto;\n  width: 64px;\n  height: 64px;\n  margin-right: 15px; }\n  .media .avatar img {\n    width: 100%;\n    border-radius: 50%; }\n  .media textarea {\n  margin-bottom: 20px; }\n  .media .media-heading small {\n  font-family: Roboto,Helvetica,Arial,sans-serif; }\n  .media .media-body {\n  padding-right: 10px; }\n  .media .media-body .media .media-body {\n    padding-right: 0px; }\n  .media.media-post .form-group,\n.media.media-post .input-group {\n  margin-top: 25px; }\n  .media .media-footer {\n  margin-top: -30px; }\n  .media .media-footer .bt-comment {\n    top: -45px; }\n  .media .media-footer:after {\n    display: table;\n    content: \" \";\n    clear: both; }\n  .media p {\n  color: #333;\n  font-size: 368;\n  line-height: 1.61em; }\n  .media-left,\n.media > .pull-left {\n  padding: 10px; }\n"

/***/ }),

/***/ "./src/app/components/comments-areas/comments-areas.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/comments-areas/comments-areas.component.ts ***!
  \***********************************************************************/
/*! exports provided: CommentsAreasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsAreasComponent", function() { return CommentsAreasComponent; });
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

var CommentsAreasComponent = /** @class */ (function () {
    function CommentsAreasComponent() {
        this.displayRespondeOf = -1;
        this.responseTo = "";
        this.comments = [
            {
                author: {
                    name: "Wagner Perin",
                    img: "./assets/img/faces/wagner.jpg",
                    date: "7 minutes ago"
                },
                content: "Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed! All praises and blessings to the families of people who never gave up on dreams. Don't forget, You're Awesome!",
                responses: [
                    {
                        author: {
                            name: "Mark Zuckerberg",
                            img: "./assets/img/faces/marc.jpg",
                            date: "19 minutes ago"
                        },
                        content: "Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed! All praises and blessings to the families of people who never gave up on dreams. Don't forget, You're Awesome!",
                    }
                ]
            }
        ];
    }
    CommentsAreasComponent.prototype.ngOnInit = function () {
    };
    CommentsAreasComponent.prototype.reply = function (n, name) {
        this.displayRespondeOf = n;
        name ? this.responseTo = "@" + name : "";
    };
    CommentsAreasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comments-areas',
            template: __webpack_require__(/*! ./comments-areas.component.html */ "./src/app/components/comments-areas/comments-areas.component.html"),
            styles: [__webpack_require__(/*! ./comments-areas.component.scss */ "./src/app/components/comments-areas/comments-areas.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CommentsAreasComponent);
    return CommentsAreasComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/components/buttons/buttons.component.ts");
/* harmony import */ var _components_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components.routing */ "./src/app/components/components.routing.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/components/grid/grid.component.ts");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons/icons.component */ "./src/app/components/icons/icons.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/components/notifications/notifications.component.ts");
/* harmony import */ var _panels_panels_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./panels/panels.component */ "./src/app/components/panels/panels.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/components/typography/typography.component.ts");
/* harmony import */ var _sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sweetalert/sweetalert.component */ "./src/app/components/sweetalert/sweetalert.component.ts");
/* harmony import */ var _comments_areas_comments_areas_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comments-areas/comments-areas.component */ "./src/app/components/comments-areas/comments-areas.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_components_routing__WEBPACK_IMPORTED_MODULE_6__["ComponentsRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ],
            declarations: [
                _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_5__["ButtonsComponent"],
                _grid_grid_component__WEBPACK_IMPORTED_MODULE_7__["GridSystemComponent"],
                _icons_icons_component__WEBPACK_IMPORTED_MODULE_8__["IconsComponent"],
                _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_9__["NotificationsComponent"],
                _panels_panels_component__WEBPACK_IMPORTED_MODULE_10__["PanelsComponent"],
                _sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_12__["SweetAlertComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_11__["TypographyComponent"],
                _comments_areas_comments_areas_component__WEBPACK_IMPORTED_MODULE_13__["CommentsAreasComponent"]
            ],
            exports: [_comments_areas_comments_areas_component__WEBPACK_IMPORTED_MODULE_13__["CommentsAreasComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/components.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/components/components.routing.ts ***!
  \**************************************************/
/*! exports provided: ComponentsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsRoutes", function() { return ComponentsRoutes; });
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/components/buttons/buttons.component.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/components/grid/grid.component.ts");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/icons.component */ "./src/app/components/icons/icons.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/components/notifications/notifications.component.ts");
/* harmony import */ var _panels_panels_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panels/panels.component */ "./src/app/components/panels/panels.component.ts");
/* harmony import */ var _sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sweetalert/sweetalert.component */ "./src/app/components/sweetalert/sweetalert.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/components/typography/typography.component.ts");
/* harmony import */ var _comments_areas_comments_areas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comments-areas/comments-areas.component */ "./src/app/components/comments-areas/comments-areas.component.ts");








var ComponentsRoutes = [
    {
        path: '',
        children: [{
                path: 'buttons',
                component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_0__["ButtonsComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'grid',
                component: _grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridSystemComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'icons',
                component: _icons_icons_component__WEBPACK_IMPORTED_MODULE_2__["IconsComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'comments',
                component: _comments_areas_comments_areas_component__WEBPACK_IMPORTED_MODULE_7__["CommentsAreasComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'notifications',
                component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__["NotificationsComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'panels',
                component: _panels_panels_component__WEBPACK_IMPORTED_MODULE_4__["PanelsComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'sweet-alert',
                component: _sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_5__["SweetAlertComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'typography',
                component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_6__["TypographyComponent"]
            }]
    }
];


/***/ }),

/***/ "./src/app/components/grid/grid.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/grid/grid.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"card card-plain\">\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title pl-3\">XS Grid\r\n          <small>Always Horizontal</small>\r\n        </h4>\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body text-center\">\r\n                <code>col-4</code>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body text-center\">\r\n                <code>col-4</code>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body text-center\">\r\n                <code>col-4</code>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <h4 class=\"card-title pl-3\">SM Grid\r\n          <small>Collapsed at 576px</small>\r\n        </h4>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body text-center\">\r\n                <code>col-sm-4</code>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body text-center\">\r\n                <code>col-sm-4</code>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body text-center\">\r\n                <code>col-sm-4</code>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <h4 class=\"card-title pl-3\">MD Grid\r\n          <small>Collapsed at 768px</small>\r\n        </h4>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body text-center\">\r\n                <code>col-md-4</code>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body text-center\">\r\n                <code>col-md-4</code>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body text-center\">\r\n                <code>col-md-4</code>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <h4 class=\"card-title pl-3\">LG Grid\r\n          <small>Collapsed at 992px</small>\r\n        </h4>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body text-center\">\r\n                <code>col-lg-4</code>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body text-center\">\r\n                <code>col-lg-4</code>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body text-center\">\r\n                <code>col-lg-4</code>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <h4 class=\"card-title pl-3\">XL Grid\r\n          <small>Collapsed at 1200px</small>\r\n        </h4>\r\n        <div class=\"row\">\r\n          <div class=\"col-xl-4\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body text-center\">\r\n                <code>col-xl-4</code>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-xl-4\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body text-center\">\r\n                <code>col-xl-4</code>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-xl-4\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body text-center\">\r\n                <code>col-xl-4</code>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <h4 class=\"card-title pl-3\">Mixed Grid\r\n          <small>Showing different sizes on different screens</small>\r\n        </h4>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6 col-lg-3\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body text-center\">\r\n                <code>col-sm-6 col-lg-3</code>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-6 col-lg-3\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body text-center\">\r\n                <code>col-sm-6 col-lg-3</code>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-6 col-lg-3\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body text-center\">\r\n                <code>col-sm-6 col-lg-3</code>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-6 col-lg-3\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body text-center\">\r\n                <code>col-sm-6 col-lg-3</code>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <h4 class=\"card-title pl-3\">Offset Grid\r\n          <small>Adding some space when needed</small>\r\n        </h4>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body text-center\">\r\n                <code>col-md-3</code>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 ml-auto\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body text-center\">\r\n                <code>col-md-3 ml-auto</code>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4 ml-auto mr-auto\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body text-center\">\r\n                <code>col-md-4 ml-auto mr-auto</code>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4 ml-auto mr-auto\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body text-center\">\r\n                <code>col-md-4 ml-auto mr-auto</code>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 ml-auto mr-auto\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body text-center\">\r\n                <code>col-md-6 ml-auto mr-auto</code>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <h3 class=\"title mt-4 text-center\">Paragraphs</h3>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6\">\r\n            <h3>Some Title Here</h3>\r\n            <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. \"What's happened to me?\" he thought.</p>\r\n          </div>\r\n          <div class=\"col-sm-6\">\r\n            <h3>Another Title Here</h3>\r\n            <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. \"What's happened to me?\" he thought.</p>\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-4\">\r\n            <h3>Some Title Here</h3>\r\n            <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <h3>Another Title Here</h3>\r\n            <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <h3>Another Title Here</h3>\r\n            <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-4\">\r\n            <h3>Some Title Here</h3>\r\n            <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>\r\n          </div>\r\n          <div class=\"col-sm-8\">\r\n            <h3>Another Title Here</h3>\r\n            <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--  end card -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/grid/grid.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/grid/grid.component.ts ***!
  \***************************************************/
/*! exports provided: GridSystemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridSystemComponent", function() { return GridSystemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GridSystemComponent = /** @class */ (function () {
    function GridSystemComponent() {
    }
    GridSystemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid-cmp',
            template: __webpack_require__(/*! ./grid.component.html */ "./src/app/components/grid/grid.component.html")
        })
    ], GridSystemComponent);
    return GridSystemComponent;
}());



/***/ }),

/***/ "./src/app/components/icons/icons.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/icons/icons.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n      <div class=\"header text-center\">\r\n        <h3 class=\"title\">Material Design Icons</h3>\r\n        <p class=\"category\">Handcrafted by our friends from\r\n          <a target=\"_blank\" href=\"https://design.google.com/icons/\">Google</a>\r\n        </p>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"card card-plain\">\r\n            <div class=\"card-body\">\r\n              <div class=\"iframe-container d-none d-lg-block\">\r\n                <iframe src=\"https://design.google.com/icons/\">\r\n                  <p>Your browser does not support iframes.</p>\r\n                </iframe>\r\n              </div>\r\n              <div class=\"col-md-12 d-none d-sm-block d-md-block d-lg-none d-block d-sm-none text-center ml-auto mr-auto\">\r\n                <h5>The icons are visible on Desktop mode inside an iframe. Since the iframe is not working on Mobile and Tablets please visit the icons on their original page on Google. Check the\r\n                  <a href=\"https://design.google.com/icons/\" target=\"_blank\">Material Icons</a>\r\n                </h5>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/icons/icons.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/icons/icons.component.ts ***!
  \*****************************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
    }
    IconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-icons-cmp',
            template: __webpack_require__(/*! ./icons.component.html */ "./src/app/components/icons/icons.component.html")
        })
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "./src/app/components/notifications/notifications.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/notifications/notifications.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"header text-center ml-auto mr-auto\">\r\n          <h3 class=\"title\">Notifications</h3>\r\n          <p class=\"category\">Handcrafted by our friend\r\n            <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the\r\n            <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a>\r\n          </p>\r\n        </div>\r\n      </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                <h4 class=\"card-title\">Notifications Style</h4>\r\n              </div>\r\n              <div class=\"card-body\">\r\n                <div class=\"alert alert-info\">\r\n                  <span>This is a plain notification</span>\r\n                </div>\r\n                <div class=\"alert alert-info\">\r\n                  <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                    <i class=\"material-icons\">close</i>\r\n                  </button>\r\n                  <span>This is a notification with close button.</span>\r\n                </div>\r\n                <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\r\n                  <i class=\"material-icons\" data-notify=\"icon\">notifications</i>\r\n                  <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                    <i class=\"material-icons\">close</i>\r\n                  </button>\r\n                  <span data-notify=\"icon\" class=\"now-ui-icons ui-1_bell-53\"></span>\r\n                  <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\r\n                </div>\r\n                <div class=\"alert alert-rose alert-with-icon\" data-notify=\"container\">\r\n                  <i class=\"material-icons\" data-notify=\"icon\">notifications</i>\r\n                  <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                    <i class=\"material-icons\">close</i>\r\n                  </button>\r\n                  <span data-notify=\"message\">This is a notification with close button and icon and is made with \".alert-rose\". You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                <h4 class=\"card-title\">Notification states</h4>\r\n              </div>\r\n              <div class=\"card-body\">\r\n                <div class=\"alert alert-info\">\r\n                  <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                    <i class=\"material-icons\">close</i>\r\n                  </button>\r\n                  <span>\r\n                    <b> Info - </b> This is a regular notification made with \".alert-info\"</span>\r\n                </div>\r\n                <div class=\"alert alert-success\">\r\n                  <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                    <i class=\"material-icons\">close</i>\r\n                  </button>\r\n                  <span>\r\n                    <b> Success - </b> This is a regular notification made with \".alert-success\"</span>\r\n                </div>\r\n                <div class=\"alert alert-warning\">\r\n                  <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                    <i class=\"material-icons\">close</i>\r\n                  </button>\r\n                  <span>\r\n                    <b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\r\n                </div>\r\n                <div class=\"alert alert-danger\">\r\n                  <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                    <i class=\"material-icons\">close</i>\r\n                  </button>\r\n                  <span>\r\n                    <b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\r\n                </div>\r\n                <div class=\"alert alert-primary\">\r\n                  <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                    <i class=\"material-icons\">close</i>\r\n                  </button>\r\n                  <span>\r\n                    <b> Primary - </b> This is a regular notification made with \".alert-primary\"</span>\r\n                </div>\r\n                <div class=\"alert alert-rose\">\r\n                  <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                    <i class=\"material-icons\">close</i>\r\n                  </button>\r\n                  <span>\r\n                    <b> Rose - </b> This is a regular notification made with \".alert-rose\"</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"places-buttons\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-6 ml-auto mr-auto text-center\">\r\n                              <h4 class=\"card-title\">\r\n                                Notifications Places\r\n                                <p class=\"category\">Click to view notifications</p>\r\n                              </h4>\r\n                            </div>\r\n                          </div>\r\n                            <div class=\"row\">\r\n                              <div class=\"col-lg-8 col-md-10 ml-auto mr-auto\">\r\n                                <div class=\"row\">\r\n\r\n                                    <div class=\"col-md-4\">\r\n                                        <button mat-raised-button class=\"btn btn-primary btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <button mat-raised-button class=\"btn btn-primary btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <button mat-raised-button class=\"btn btn-primary btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\r\n                                    </div>\r\n                                  </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                              <div class=\"col-lg-8 col-md-10 ml-auto mr-auto\">\r\n                                <div class=\"row\">\r\n\r\n                                    <div class=\"col-md-4\">\r\n                                        <button mat-raised-button class=\"btn btn-primary btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <button mat-raised-button class=\"btn btn-primary btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <button mat-raised-button class=\"btn btn-primary btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\r\n                                    </div>\r\n                                </div>\r\n                              </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12 text-center\">\r\n                                <div class=\"card-header\">\r\n                                    <h4 class=\"card-title\">Modal</h4>\r\n                                </div>\r\n                                <button mat-raised-button class=\"btn btn-primary btn-raised btn-round\" data-toggle=\"modal\" data-target=\"#myModal\">\r\n                                    Classic modal\r\n                                </button>\r\n                                <button mat-raised-button class=\"btn btn-raised btn-round btn-info\" data-toggle=\"modal\" data-target=\"#noticeModal\">\r\n                                    Notice modal\r\n                                </button>\r\n                                <button mat-raised-button class=\"btn btn-raised btn-round btn-rose\" data-toggle=\"modal\" data-target=\"#myModal10\">\r\n                                    Small alert modal\r\n                                </button>\r\n                                <!-- Classic Modal -->\r\n                                <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n                                  <div class=\"modal-dialog\">\r\n                                    <div class=\"modal-content\">\r\n                                      <div class=\"modal-header\">\r\n                                        <h4 class=\"modal-title\">Modal title</h4>\r\n                                        <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\r\n                                          <i class=\"material-icons\">clear</i>\r\n                                        </button>\r\n                                      </div>\r\n                                      <div class=\"modal-body\">\r\n                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.\r\n                                        </p>\r\n                                        <div class=\"form-group bmd-form-group is-filled\">\r\n                                          <label class=\"label-control\">Datetime Picker</label>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-md-10 col-lg-8 ml-auto mr-auto\">\r\n                                              <mat-form-field >\r\n                                                <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" (click)=\"picker.open()\">\r\n                                                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                                                <mat-datepicker #picker></mat-datepicker>\r\n                                              </mat-form-field>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"modal-footer\">\r\n                                        <button mat-raised-button type=\"button\" class=\"btn btn-link\">Nice Button</button>\r\n                                        <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link\" data-dismiss=\"modal\">Close</button>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <!--  End Modal -->\r\n                                <!-- notice modal -->\r\n                                <div class=\"modal fade\" id=\"noticeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n                                  <div class=\"modal-dialog modal-notice\">\r\n                                    <div class=\"modal-content\">\r\n                                      <div class=\"modal-header\">\r\n                                        <h5 class=\"modal-title\" id=\"myModalLabel\">How Do You Become an Affiliate?</h5>\r\n                                        <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\r\n                                          <i class=\"material-icons\">close</i>\r\n                                        </button>\r\n                                      </div>\r\n                                      <div class=\"modal-body\">\r\n                                        <div class=\"instruction\">\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-md-8\">\r\n                                              <strong>1. Register</strong>\r\n                                              <p class=\"description\">The first step is to create an account at\r\n                                                <a href=\"https://www.creative-tim.com/\">Creative Tim</a>. You can choose a social network or go for the classic version, whatever works best for you.</p>\r\n                                            </div>\r\n                                            <div class=\"col-md-4\">\r\n                                              <div class=\"picture\">\r\n                                                <img src=\"./assets/img/card-1.jpg\" alt=\"Thumbnail Image\" class=\"rounded img-fluid\">\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\"instruction\">\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-md-8\">\r\n                                              <strong>2. Apply</strong>\r\n                                              <p class=\"description\">The first step is to create an account at\r\n                                                <a href=\"https://www.creative-tim.com/\">Creative Tim</a>. You can choose a social network or go for the classic version, whatever works best for you.</p>\r\n                                            </div>\r\n                                            <div class=\"col-md-4\">\r\n                                              <div class=\"picture\">\r\n                                                <img src=\"./assets/img/card-2.jpg\" alt=\"Thumbnail Image\" class=\"rounded img-fluid\">\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                        <p>If you have more questions, don't hesitate to contact us or send us a tweet @creativetim. We're here to help!</p>\r\n                                      </div>\r\n                                      <div class=\"modal-footer justify-content-center\">\r\n                                        <button mat-raised-button type=\"button\" class=\"btn btn-info btn-round\" data-dismiss=\"modal\">Sounds good!</button>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- end notice modal -->\r\n                                <!-- small modal -->\r\n                                <div class=\"modal fade modal-mini modal-primary\" id=\"myModal10\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n                                  <div class=\"modal-dialog modal-small\">\r\n                                    <div class=\"modal-content\">\r\n                                      <div class=\"modal-header\">\r\n                                        <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><i class=\"material-icons\">clear</i></button>\r\n                                      </div>\r\n                                      <div class=\"modal-body\">\r\n                                        <p>Are you sure you want to do this?</p>\r\n                                      </div>\r\n                                      <div class=\"modal-footer justify-content-center\">\r\n                                        <button mat-raised-button type=\"button\" class=\"btn btn-link\" data-dismiss=\"modal\">Never mind</button>\r\n                                        <button mat-raised-button type=\"button\" class=\"btn btn-success btn-link\">Yes\r\n                                          <div class=\"ripple-container\"></div>\r\n                                        </button>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <!--    end small modal -->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/notifications/notifications.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/notifications/notifications.component.ts ***!
  \*********************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// IMPORTANT: this is a plugin which requires jQuery for initialisation and data manipulation
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger', 'rose', 'primary'];
        var color = Math.floor((Math.random() * 6) + 1);
        $.notify({
            icon: 'notifications',
            message: 'Welcome to <b>Material Dashboard</b> - a beautiful dashboard for every web developer.'
        }, {
            type: type[color],
            timer: 3000,
            placement: {
                from: from,
                align: align
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
    };
    NotificationsComponent.prototype.ngOnInit = function () {
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        $('.modal').on('shown.bs.modal', function () {
            mainPanel.classList.add('no-scroll');
        });
        $('.modal').on('hidden.bs.modal', function () {
            mainPanel.classList.remove('no-scroll');
        });
    };
    NotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notifications-cmp',
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/components/notifications/notifications.component.html")
        })
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/components/panels/panels.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/panels/panels.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"card \">\r\n          <div class=\"card-header \">\r\n            <h4 class=\"card-title\">Navigation Pills -\r\n              <small class=\"description\">Horizontal Tabs</small>\r\n            </h4>\r\n          </div>\r\n          <div class=\"card-body \">\r\n            <ul class=\"nav nav-pills nav-pills-warning\" role=\"tablist\">\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#link1\" role=\"tablist\">\r\n                  Profile\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link\" data-toggle=\"tab\" href=\"#link2\" role=\"tablist\">\r\n                  Settings\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link\" data-toggle=\"tab\" href=\"#link3\" role=\"tablist\">\r\n                  Options\r\n                </a>\r\n              </li>\r\n            </ul>\r\n            <div class=\"tab-content tab-space\">\r\n              <div class=\"tab-pane active\" id=\"link1\">\r\n                Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\r\n                <br />\r\n                <br /> Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\r\n                <br/>\r\n                <br/> This is very nice.\r\n              </div>\r\n              <div class=\"tab-pane\" id=\"link2\">\r\n                Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\r\n                <br />\r\n                <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.\r\n              </div>\r\n              <div class=\"tab-pane\" id=\"link3\">\r\n                Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.\r\n                <br />\r\n                <br />Dynamically innovate resource-leveling customer service for state of the art customer service.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"card \">\r\n          <div class=\"card-header \">\r\n            <h4 class=\"card-title\">Navigation Pills -\r\n              <small class=\"description\">Vertical Tabs</small>\r\n            </h4>\r\n          </div>\r\n          <div class=\"card-body \">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\">\r\n                <ul class=\"nav nav-pills nav-pills-rose flex-column\" role=\"tablist\">\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#link4\" role=\"tablist\">\r\n                      Profile\r\n                    </a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#link5\" role=\"tablist\">\r\n                      Settings\r\n                    </a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#link6\" role=\"tablist\">\r\n                      Options\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"col-md-8\">\r\n                <div class=\"tab-content\">\r\n                  <div class=\"tab-pane active\" id=\"link4\">\r\n                    Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\r\n                    <br>\r\n                    <br> Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. This is very nice.\r\n                  </div>\r\n                  <div class=\"tab-pane\" id=\"link5\">\r\n                    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\r\n                    <br>\r\n                    <br>Dramatically maintain clicks-and-mortar solutions without functional solutions.\r\n                  </div>\r\n                  <div class=\"tab-pane\" id=\"link6\">\r\n                    Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.\r\n                    <br>\r\n                    <br>Dynamically innovate resource-leveling customer service for state of the art customer service.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <h4 class=\"card-title\">Collapsible Accordion</h4>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div id=\"accordion\" role=\"tablist\">\r\n              <div class=\"card-collapse\">\r\n                <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\r\n                  <h5 class=\"mb-0\">\r\n                    <a data-toggle=\"collapse\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\" class=\"collapsed\">\r\n                      Collapsible Group Item #1\r\n                      <i class=\"material-icons\">keyboard_arrow_down</i>\r\n                    </a>\r\n                  </h5>\r\n                </div>\r\n                <div id=\"collapseOne\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\" style=\"\">\r\n                  <div class=\"card-body\">\r\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-collapse\">\r\n                <div class=\"card-header\" role=\"tab\" id=\"headingTwo\">\r\n                  <h5 class=\"mb-0\">\r\n                    <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n                      Collapsible Group Item #2\r\n                      <i class=\"material-icons\">keyboard_arrow_down</i>\r\n                    </a>\r\n                  </h5>\r\n                </div>\r\n                <div id=\"collapseTwo\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\r\n                  <div class=\"card-body\">\r\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-collapse\">\r\n                <div class=\"card-header\" role=\"tab\" id=\"headingThree\">\r\n                  <h5 class=\"mb-0\">\r\n                    <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n                      Collapsible Group Item #3\r\n                      <i class=\"material-icons\">keyboard_arrow_down</i>\r\n                    </a>\r\n                  </h5>\r\n                </div>\r\n                <div id=\"collapseThree\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\r\n                  <div class=\"card-body\">\r\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"card \">\r\n          <div class=\"card-header \">\r\n            <h4 class=\"card-title\">Navigation Pills Icons -\r\n              <small class=\"description\">Vertical Tabs</small>\r\n            </h4>\r\n          </div>\r\n          <div class=\"card-body \">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-4 col-md-6\">\r\n                <!--\r\n                                  color-classes: \"nav-pills-primary\", \"nav-pills-info\", \"nav-pills-success\", \"nav-pills-warning\",\"nav-pills-danger\"\r\n                              -->\r\n                <ul class=\"nav nav-pills nav-pills-rose nav-pills-icons flex-column\" role=\"tablist\">\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#link10\" role=\"tablist\">\r\n                      <i class=\"material-icons\">dashboard</i> Home\r\n                    </a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#link11\" role=\"tablist\">\r\n                      <i class=\"material-icons\">schedule</i> Settings\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"col-md-8\">\r\n                <div class=\"tab-content\">\r\n                  <div class=\"tab-pane active\" id=\"link10\">\r\n                    Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\r\n                    <br>\r\n                    <br> Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\r\n                    <br/>\r\n                    <br/> Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\r\n                  </div>\r\n                  <div class=\"tab-pane\" id=\"link11\">\r\n                    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\r\n                    <br>\r\n                    <br>Dramatically maintain clicks-and-mortar solutions without functional solutions.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 ml-auto mr-auto\">\r\n        <div class=\"page-categories\">\r\n          <h3 class=\"title text-center\">Page Subcategories</h3>\r\n          <br />\r\n          <ul class=\"nav nav-pills nav-pills-warning nav-pills-icons justify-content-center\" role=\"tablist\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" data-toggle=\"tab\" href=\"#link7\" role=\"tablist\">\r\n                <i class=\"material-icons\">info</i> Description\r\n              </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#link8\" role=\"tablist\">\r\n                <i class=\"material-icons\">location_on</i> Location\r\n              </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" data-toggle=\"tab\" href=\"#link9\" role=\"tablist\">\r\n                <i class=\"material-icons\">gavel</i> Legal Info\r\n              </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" data-toggle=\"tab\" href=\"#link10\" role=\"tablist\">\r\n                <i class=\"material-icons\">help_outline</i> Help Center\r\n              </a>\r\n            </li>\r\n          </ul>\r\n          <div class=\"tab-content tab-space tab-subcategories\">\r\n            <div class=\"tab-pane\" id=\"link7\">\r\n              <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                  <h4 class=\"card-title\">Description about product</h4>\r\n                  <p class=\"card-category\">\r\n                    More information here\r\n                  </p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\r\n                  <br>\r\n                  <br> Dramatically visualize customer directed convergence without revolutionary ROI.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"tab-pane active\" id=\"link8\">\r\n              <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                  <h4 class=\"card-title\">Location of the product</h4>\r\n                  <p class=\"card-category\">\r\n                    More information here\r\n                  </p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\r\n                  <br>\r\n                  <br> Dramatically maintain clicks-and-mortar solutions without functional solutions.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"tab-pane\" id=\"link9\">\r\n              <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                  <h4 class=\"card-title\">Legal info of the product</h4>\r\n                  <p class=\"card-category\">\r\n                    More information here\r\n                  </p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.\r\n                  <br>\r\n                  <br>Dynamically innovate resource-leveling customer service for state of the art customer service.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"tab-pane\" id=\"link10\">\r\n              <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                  <h4 class=\"card-title\">Help center</h4>\r\n                  <p class=\"card-category\">\r\n                    More information here\r\n                  </p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  From the seamless transition of glass and metal to the streamlined profile, every detail was carefully considered to enhance your experience. So while its display is larger, the phone feels just right.\r\n                  <br>\r\n                  <br> Another Text. The first thing you notice when you hold the phone is how great it feels in your hand. The cover glass curves down around the sides to meet the anodized aluminum enclosure in a remarkable, simplified design.\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/panels/panels.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/panels/panels.component.ts ***!
  \*******************************************************/
/*! exports provided: PanelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelsComponent", function() { return PanelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PanelsComponent = /** @class */ (function () {
    function PanelsComponent() {
    }
    PanelsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-panels-cmp',
            template: __webpack_require__(/*! ./panels.component.html */ "./src/app/components/panels/panels.component.html")
        })
    ], PanelsComponent);
    return PanelsComponent;
}());



/***/ }),

/***/ "./src/app/components/sweetalert/sweetalert.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/sweetalert/sweetalert.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"header text-center\">\r\n            <h3 class=\"title\">Sweet Alert 2</h3>\r\n            <p class=\"category\">A beautiful plugin, that replace the classic alert, Handcrafted by our friend\r\n                <a target=\"_blank\" href=\"https://twitter.com/t4t5\">Tristan Edwards</a>. Please check out the\r\n                <a href=\"https://sweetalert2.github.io/\" target=\"_blank\">full documentation.</a>\r\n            </p>\r\n        </div>\r\n        <div class=\"places-sweet-alerts\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body text-center\">\r\n                            <h5>Basic example</h5>\r\n                            <button mat-raised-button class=\"btn btn-rose btn-fill\" (click)=\"showSwal('basic')\">Try me!</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body text-center\">\r\n                            <h5>A title with a text under</h5>\r\n                            <button mat-raised-button class=\"btn btn-rose btn-fill\" (click)=\"showSwal('title-and-text')\">Try me!</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body text-center\">\r\n                            <h5>A success message</h5>\r\n                            <button mat-raised-button class=\"btn btn-rose btn-fill\" (click)=\"showSwal('success-message')\">Try me!</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body text-center\">\r\n                            <h5>Custom HTML description</h5>\r\n                            <button mat-raised-button class=\"btn btn-rose btn-fill\" (click)=\"showSwal('custom-html')\">Try me!</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body text-center\">\r\n                            <h5>A warning message, with a function attached to the \"Confirm\" Button...</h5>\r\n                            <button mat-raised-button class=\"btn btn-rose btn-fill\" (click)=\"showSwal('warning-message-and-confirmation')\">Try me!</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body text-center\">\r\n                            <h5>...and by passing a parameter, you can execute something else for \"Cancel\"</h5>\r\n                            <button mat-raised-button class=\"btn btn-rose btn-fill\" (click)=\"showSwal('warning-message-and-cancel')\">Try me!</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body text-center\">\r\n                            <h5>A message with auto close timer set to 2 seconds</h5>\r\n                            <button mat-raised-button class=\"btn btn-rose btn-fill\" (click)=\"showSwal('auto-close')\">Try me!</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body text-center\">\r\n                            <h5>Modal window with input field</h5>\r\n                            <button mat-raised-button class=\"btn btn-rose btn-fill\" (click)=\"showSwal('input-field')\">Try me!</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/sweetalert/sweetalert.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/sweetalert/sweetalert.component.ts ***!
  \***************************************************************/
/*! exports provided: SweetAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweetAlertComponent", function() { return SweetAlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SweetAlertComponent = /** @class */ (function () {
    function SweetAlertComponent() {
    }
    SweetAlertComponent.prototype.showSwal = function (type) {
        if (type == 'basic') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                title: "Here's a message!",
                buttonsStyling: false,
                confirmButtonClass: "btn btn-success"
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.noop);
        }
        else if (type == 'title-and-text') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                title: "Here's a message!",
                text: "It's pretty, isn't it?",
                buttonsStyling: false,
                confirmButtonClass: "btn btn-info"
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.noop);
        }
        else if (type == 'success-message') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                title: "Good job!",
                text: "You clicked the button!",
                buttonsStyling: false,
                confirmButtonClass: "btn btn-success",
                type: "success"
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.noop);
        }
        else if (type == 'warning-message-and-confirmation') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonClass: 'btn btn-success',
                cancelButtonClass: 'btn btn-danger',
                confirmButtonText: 'Yes, delete it!',
                buttonsStyling: false
            }).then(function (result) {
                if (result.value) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                        title: 'Deleted!',
                        text: 'Your file has been deleted.',
                        type: 'success',
                        confirmButtonClass: "btn btn-success",
                        buttonsStyling: false
                    });
                }
            });
        }
        else if (type == 'warning-message-and-cancel') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                title: 'Are you sure?',
                text: 'You will not be able to recover this imaginary file!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, keep it',
                confirmButtonClass: "btn btn-success",
                cancelButtonClass: "btn btn-danger",
                buttonsStyling: false
            }).then(function (result) {
                if (result.value) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                        title: 'Deleted!',
                        text: 'Your imaginary file has been deleted.',
                        type: 'success',
                        confirmButtonClass: "btn btn-success",
                        buttonsStyling: false
                    }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.noop);
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                        title: 'Cancelled',
                        text: 'Your imaginary file is safe :)',
                        type: 'error',
                        confirmButtonClass: "btn btn-info",
                        buttonsStyling: false
                    }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.noop);
                }
            });
        }
        else if (type == 'custom-html') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                title: 'HTML example',
                buttonsStyling: false,
                confirmButtonClass: "btn btn-success",
                html: 'You can use <b>bold text</b>, ' +
                    '<a href="http://github.com">links</a> ' +
                    'and other HTML tags'
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.noop);
        }
        else if (type == 'auto-close') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                title: "Auto close alert!",
                text: "I will close in 2 seconds.",
                timer: 2000,
                showConfirmButton: false
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.noop);
        }
        else if (type == 'input-field') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                title: 'Input something',
                html: '<div class="form-group">' +
                    '<input id="input-field" type="text" class="form-control" />' +
                    '</div>',
                showCancelButton: true,
                confirmButtonClass: 'btn btn-success',
                cancelButtonClass: 'btn btn-danger',
                buttonsStyling: false
            }).then(function (result) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                    type: 'success',
                    html: 'You entered: <strong>' +
                        $('#input-field').val() +
                        '</strong>',
                    confirmButtonClass: 'btn btn-success',
                    buttonsStyling: false
                });
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.noop);
        }
    };
    SweetAlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sweetalert-cmp',
            template: __webpack_require__(/*! ./sweetalert.component.html */ "./src/app/components/sweetalert/sweetalert.component.html")
        })
    ], SweetAlertComponent);
    return SweetAlertComponent;
}());



/***/ }),

/***/ "./src/app/components/typography/typography.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/typography/typography.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"header text-center\">\r\n            <h3 class=\"title\">Material Dashboard Heading</h3>\r\n            <p class=\"category\">Created using Roboto Font Family</p>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div id=\"typography\">\r\n                            <div class=\"card-title\">\r\n                                <h2>Typography</h2>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"tim-typo\">\r\n                                    <h1>\r\n                                        <span class=\"tim-note\">Header 1</span>The Life of Material Kit </h1>\r\n                                </div>\r\n                                <div class=\"tim-typo\">\r\n                                    <h2>\r\n                                        <span class=\"tim-note\">Header 2</span>The Life of Material Kit</h2>\r\n                                </div>\r\n                                <div class=\"tim-typo\">\r\n                                    <h3>\r\n                                        <span class=\"tim-note\">Header 3</span>The Life of Material Kit</h3>\r\n                                </div>\r\n                                <div class=\"tim-typo\">\r\n                                    <h4>\r\n                                        <span class=\"tim-note\">Header 4</span>The Life of Material Kit</h4>\r\n                                </div>\r\n                                <div class=\"tim-typo\">\r\n                                    <h5>\r\n                                        <span class=\"tim-note\">Header 5</span>The Life of Material Kit</h5>\r\n                                </div>\r\n                                <div class=\"tim-typo\">\r\n                                    <h6>\r\n                                        <span class=\"tim-note\">Header 6</span>The Life of Material Kit</h6>\r\n                                </div>\r\n                                <div class=\"tim-typo\">\r\n                                    <p>\r\n                                        <span class=\"tim-note\">Paragraph</span>\r\n                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\r\n                                </div>\r\n                                <div class=\"tim-typo\">\r\n                                    <span class=\"tim-note\">Quote</span>\r\n                                    <blockquote>\r\n                                        <p>\r\n                                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\r\n                                        </p>\r\n                                        <small>\r\n                                            Kanye West, Musician\r\n                                        </small>\r\n                                    </blockquote>\r\n                                </div>\r\n                                <div class=\"tim-typo\">\r\n                                    <span class=\"tim-note\">Muted Text</span>\r\n                                    <p class=\"text-muted\">\r\n                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\r\n                                    </p>\r\n                                </div>\r\n                                <div class=\"tim-typo\">\r\n                                    <span class=\"tim-note\">Primary Text</span>\r\n                                    <p class=\"text-primary\">\r\n                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\r\n                                </div>\r\n                                <div class=\"tim-typo\">\r\n                                    <span class=\"tim-note\">Info Text</span>\r\n                                    <p class=\"text-info\">\r\n                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\r\n                                </div>\r\n                                <div class=\"tim-typo\">\r\n                                    <span class=\"tim-note\">Success Text</span>\r\n                                    <p class=\"text-success\">\r\n                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\r\n                                </div>\r\n                                <div class=\"tim-typo\">\r\n                                    <span class=\"tim-note\">Warning Text</span>\r\n                                    <p class=\"text-warning\">\r\n                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\r\n                                    </p>\r\n                                </div>\r\n                                <div class=\"tim-typo\">\r\n                                    <span class=\"tim-note\">Danger Text</span>\r\n                                    <p class=\"text-danger\">\r\n                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\r\n                                </div>\r\n                                <div class=\"tim-typo\">\r\n                                    <h2>\r\n                                        <span class=\"tim-note\">Small Tag</span>\r\n                                        Header with small subtitle\r\n                                        <br>\r\n                                        <small>Use \"small\" tag for the headers</small>\r\n                                    </h2>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/typography/typography.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/typography/typography.component.ts ***!
  \***************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typography-cmp',
            template: __webpack_require__(/*! ./typography.component.html */ "./src/app/components/typography/typography.component.html")
        })
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-components-module~view-view-module.js.map