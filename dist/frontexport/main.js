(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth/auth-guard.service */ "./src/services/auth/auth-guard.service.ts");
/* harmony import */ var _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/not-found/not-found.component */ "./src/app/shared/not-found/not-found.component.ts");
/* harmony import */ var _auth_auth_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth-routing */ "./src/app/auth/auth-routing.ts");







var routes = [
    {
        path: '',
        component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]]
    },
    {
        path: 'auth',
        children: _auth_auth_routing__WEBPACK_IMPORTED_MODULE_6__["AuthRouting"]
    },
    { path: '404', component: _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] },
    { path: '**', redirectTo: '/404' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'export';
    }
    AppComponent.prototype.ngOnInit = function () {
        var preLoader = document.getElementById('preloader');
        if (!lodash__WEBPACK_IMPORTED_MODULE_2__["isNull"](preLoader)) {
            preLoader.remove();
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: setupTranslateFactory, getToken, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupTranslateFactory", function() { return setupTranslateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/translate.service */ "./src/services/translate.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_languages_languages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/languages/languages.component */ "./src/app/shared/languages/languages.component.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/local.storage.service */ "./src/services/local.storage.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/not-found/not-found.component */ "./src/app/shared/not-found/not-found.component.ts");
/* harmony import */ var _shared_forms_error_error_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/forms/error/error.component */ "./src/app/shared/forms/error/error.component.ts");
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../interceptors */ "./src/interceptors/index.ts");
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../requests */ "./src/requests/index.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../services */ "./src/services/index.ts");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/loader/loader.component */ "./src/app/shared/loader/loader.component.ts");
/* harmony import */ var _auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./auth/reset-password/reset-password.component */ "./src/app/auth/reset-password/reset-password.component.ts");
/* harmony import */ var _auth_password_forget_password_forget_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./auth/password-forget/password-forget.component */ "./src/app/auth/password-forget/password-forget.component.ts");
/* harmony import */ var _auth_notice_notice_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./auth/notice/notice.component */ "./src/app/auth/notice/notice.component.ts");
/* harmony import */ var _auth_verify_verify_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./auth/verify/verify.component */ "./src/app/auth/verify/verify.component.ts");





























function setupTranslateFactory(service, localStorage) {
    var language = lodash__WEBPACK_IMPORTED_MODULE_11__["isEmpty"](localStorage.get('language')) ? 'en' : localStorage.get('language');
    if (lodash__WEBPACK_IMPORTED_MODULE_11__["isEmpty"](localStorage.get('language'))) {
        localStorage.set('language', language);
    }
    return function () { return service.use(language); };
}
function getToken() {
    return localStorage.getItem('access_token');
}
var jwtModuleOptions = {
    config: {
        tokenGetter: getToken,
        whitelistedDomains: ['localhost:4200']
    }
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _auth_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _shared_languages_languages_component__WEBPACK_IMPORTED_MODULE_9__["LanguagesComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundComponent"],
                _shared_forms_error_error_component__WEBPACK_IMPORTED_MODULE_15__["ErrorComponent"],
                _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_20__["SidebarComponent"],
                _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_23__["LoaderComponent"],
                _auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_24__["ResetPasswordComponent"],
                _auth_password_forget_password_forget_component__WEBPACK_IMPORTED_MODULE_25__["PasswordForgetComponent"],
                _auth_notice_notice_component__WEBPACK_IMPORTED_MODULE_26__["NoticeComponent"],
                _auth_verify_verify_component__WEBPACK_IMPORTED_MODULE_27__["VerifyComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__["JwtModule"].forRoot(jwtModuleOptions),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_19__["ToastrModule"].forRoot()
            ],
            providers: [
                _services__WEBPACK_IMPORTED_MODULE_22__["services"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                    useFactory: setupTranslateFactory,
                    deps: [_services_translate_service__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _services_local_storage_service__WEBPACK_IMPORTED_MODULE_10__["LocalStorageService"]],
                    multi: true
                },
                _helpers__WEBPACK_IMPORTED_MODULE_21__["helpers"],
                _interceptors__WEBPACK_IMPORTED_MODULE_16__["httpInterceptorProviders"],
                _requests__WEBPACK_IMPORTED_MODULE_17__["apis"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth-routing.ts ***!
  \**************************************/
/*! exports provided: AuthRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRouting", function() { return AuthRouting; });
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/auth/reset-password/reset-password.component.ts");
/* harmony import */ var _password_forget_password_forget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password-forget/password-forget.component */ "./src/app/auth/password-forget/password-forget.component.ts");
/* harmony import */ var _services_auth_guest_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth/guest-guard.service */ "./src/services/auth/guest-guard.service.ts");
/* harmony import */ var _notice_notice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notice/notice.component */ "./src/app/auth/notice/notice.component.ts");
/* harmony import */ var _verify_verify_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verify/verify.component */ "./src/app/auth/verify/verify.component.ts");







var AuthRouting = [
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"], canActivate: [_services_auth_guest_guard_service__WEBPACK_IMPORTED_MODULE_4__["GuestGuardService"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"], canActivate: [_services_auth_guest_guard_service__WEBPACK_IMPORTED_MODULE_4__["GuestGuardService"]] },
    { path: 'verify/:token', component: _verify_verify_component__WEBPACK_IMPORTED_MODULE_6__["VerifyComponent"], canActivate: [_services_auth_guest_guard_service__WEBPACK_IMPORTED_MODULE_4__["GuestGuardService"]] },
    { path: 'password/reset/:token', component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__["ResetPasswordComponent"], canActivate: [_services_auth_guest_guard_service__WEBPACK_IMPORTED_MODULE_4__["GuestGuardService"]] },
    { path: 'password/forget', component: _password_forget_password_forget_component__WEBPACK_IMPORTED_MODULE_3__["PasswordForgetComponent"], canActivate: [_services_auth_guest_guard_service__WEBPACK_IMPORTED_MODULE_4__["GuestGuardService"]] },
    { path: 'notice', component: _notice_notice_component__WEBPACK_IMPORTED_MODULE_5__["NoticeComponent"], canActivate: [_services_auth_guest_guard_service__WEBPACK_IMPORTED_MODULE_4__["GuestGuardService"]] }
];


/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-register\" style=\"background-image:url(assets/images/background/export_background.jpg)\">\n  <div class=\"login-box card\">\n    <div class=\"card-body\">\n      <form class=\"form-horizontal form-material\" id=\"loginForm\" #loginForm=\"ngForm\" (ngSubmit)=\"submit(loginForm)\">\n        <h3 class=\"box-title m-b-20\">{{signIn.label.title}}</h3>\n        <div class=\"form-group\">\n          <div class=\"col-xs-12\">\n            <input autofocus class=\"form-control\" #name=ngModel [(ngModel)]=\"model.email\" name=\"email\" autocomplete=\"off\" type=\"text\" placeholder=\"{{signIn.label.email}}\">\n          </div>\n          <app-shared-form-error [validate]=\"formValidation\" [elementName]=\"formValidation.email\"></app-shared-form-error>\n        </div>\n        <div class=\"form-group \">\n          <div class=\"col-xs-12\">\n            <input class=\"form-control\" #name=ngModel [(ngModel)]=\"model.password\" name=\"password\" autocomplete=\"off\" type=\"password\" placeholder=\"{{signIn.label.password}}\">\n          </div>\n          <app-shared-form-error [validate]=\"formValidation\" [elementName]=\"formValidation.password\"></app-shared-form-error>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-md-12\">\n            <app-languages></app-languages>\n          </div>\n        </div>\n        <div class=\"form-group text-center\">\n          <div class=\"col-xs-12\">\n            <button type=\"submit\" class=\"btn btn-info btn-lg btn-block btn-rounded text-uppercase waves-effect waves-light\">\n              {{signIn.label.submit}}\n              <app-shared-loader></app-shared-loader>\n            </button>\n\n          </div>\n        </div>\n        <div class=\"form-group m-b-0\">\n          <div class=\"col-sm-12 text-center\">\n            {{signIn.label.haveAccount}} <a class=\"text-info m-l-5\" [routerLink]=\"['/auth/register']\"><b>{{lang.common.signUp}}</b></a>\n          </div>\n        </div>\n        <div class=\"form-group m-b-0\">\n          <div class=\"col-sm-12 text-center\">\n            <a class=\"text-info m-l-5\" [routerLink]=\"['/auth/password/forget']\"><b>{{lang.forgetPassword.label.title}}</b></a>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/translate.service */ "./src/services/translate.service.ts");
/* harmony import */ var _helpers_lang_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/lang.helper */ "./src/helpers/lang.helper.ts");
/* harmony import */ var _login_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.validate */ "./src/app/auth/login/login.validate.ts");
/* harmony import */ var _login_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.model */ "./src/app/auth/login/login.model.ts");
/* harmony import */ var _requests_auth_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../requests/auth/login */ "./src/requests/auth/login.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../requests */ "./src/requests/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/loader.service */ "./src/services/loader.service.ts");












var LoginComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoginComponent, _super);
    function LoginComponent(translate, lang, login, toastrService, router, loaderService) {
        var _this = _super.call(this) || this;
        _this.translate = translate;
        _this.lang = lang;
        _this.login = login;
        _this.toastrService = toastrService;
        _this.router = router;
        _this.loaderService = loaderService;
        _this.signIn = {};
        _this.signIn = translate.data.signIn;
        _this.lang = lang;
        _this.model = new _login_model__WEBPACK_IMPORTED_MODULE_6__["LoginModel"]();
        _this.formValidation = new _login_validate__WEBPACK_IMPORTED_MODULE_5__["LoginValidate"](_this.signIn);
        _this.api = login;
        return _this;
    }
    LoginComponent.prototype.submit = function (form) {
        this.formValidation.validation(form.value);
        var self = this;
        if (this.formValidation.validate() && !this.loaderService.isShow()) {
            this.model.email = form.value.email;
            this.model.password = form.value.password;
            this.api.login(this.model).subscribe({
                next: function (req) {
                    if (req.code !== _requests__WEBPACK_IMPORTED_MODULE_9__["codes"].success) {
                        self.toastrService.error(req.message);
                        return false;
                    }
                    localStorage.setItem('token', req.data.access_token);
                    self.router.navigate(['']);
                },
            });
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_translate_service__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _helpers_lang_helper__WEBPACK_IMPORTED_MODULE_4__["LangHelper"],
            _requests_auth_login__WEBPACK_IMPORTED_MODULE_7__["Login"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_11__["LoaderService"]])
    ], LoginComponent);
    return LoginComponent;
}(_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]));



/***/ }),

/***/ "./src/app/auth/login/login.model.ts":
/*!*******************************************!*\
  !*** ./src/app/auth/login/login.model.ts ***!
  \*******************************************/
/*! exports provided: LoginModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModel", function() { return LoginModel; });
var LoginModel = /** @class */ (function () {
    function LoginModel() {
    }
    return LoginModel;
}());



/***/ }),

/***/ "./src/app/auth/login/login.validate.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/login/login.validate.ts ***!
  \**********************************************/
/*! exports provided: LoginValidate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginValidate", function() { return LoginValidate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_shared_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.validation */ "./src/app/shared/shared.validation.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





var LoginValidate = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoginValidate, _super);
    function LoginValidate(loginLang) {
        var _this = _super.call(this) || this;
        _this.loginLang = loginLang;
        _this.email = 'email';
        _this.password = 'password';
        _this.loginLang = loginLang;
        return _this;
    }
    LoginValidate.prototype.validation = function (form) {
        var emailMsg = null;
        var passwordMsg = null;
        if (lodash__WEBPACK_IMPORTED_MODULE_4__["isEmpty"](form.email)) {
            emailMsg = this.loginLang.validation.email.empty;
        }
        else if (!validator__WEBPACK_IMPORTED_MODULE_3__["isEmail"](form.email)) {
            emailMsg = this.loginLang.validation.email.format;
        }
        if (lodash__WEBPACK_IMPORTED_MODULE_4__["isEmpty"](form.password)) {
            passwordMsg = this.loginLang.validation.password.empty;
        }
        else if (form.password.length < 8) {
            passwordMsg = this.loginLang.validation.password.min;
        }
        this.set('email', emailMsg);
        this.set('password', passwordMsg);
    };
    LoginValidate = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], LoginValidate);
    return LoginValidate;
}(_shared_shared_validation__WEBPACK_IMPORTED_MODULE_1__["SharedValidation"]));



/***/ }),

/***/ "./src/app/auth/notice/notice.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/notice/notice.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\" *ngIf=\"this.type === this.REGISTER_SUCCESS\">\n    <div class=\"card card-notice\">\n      <div class=\"card-header btn-primary\">\n        <h3><strong style=\"color: #ffffff\">{{lang.register.success.title}}</strong></h3>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"form-group m-b-0\">\n          <div class=\"col-sm-12 text-center\">\n            {{lang.register.success.body}}\n          </div>\n        </div>\n        <div class=\"form-group m-b-0\">\n          <div class=\"col-sm-12 text-center\">\n            <a class=\"text-info m-l-5\" [routerLink]=\"['/auth/login']\"><b>{{lang.signIn.label.title}}</b></a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-12\" *ngIf=\"this.type === this.FORGET_PASSWORD_SUCCESS\">\n    <div class=\"card card-notice\">\n      <div class=\"card-header btn-primary\">\n        <h3><strong style=\"color: #ffffff\">{{lang.forgetPassword.success.title}}</strong></h3>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"form-group m-b-0\">\n          <div class=\"col-sm-12 text-center\">\n            {{lang.forgetPassword.success.body}}\n          </div>\n        </div>\n        <div class=\"form-group m-b-0\">\n          <div class=\"col-sm-12 text-center\">\n            <a class=\"text-info m-l-5\" [routerLink]=\"['/auth/login']\"><b>{{lang.signIn.label.title}}</b></a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-12\" *ngIf=\"this.type === this.PASSWORD_RESET_SUCCESS\">\n    <div class=\"card card-notice\">\n      <div class=\"card-header btn-primary\">\n        <h3><strong style=\"color: #ffffff\">{{lang.resetPassword.success.title}}</strong></h3>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"form-group m-b-0\">\n          <div class=\"col-sm-12 text-center\">\n            {{lang.resetPassword.success.body}}\n          </div>\n        </div>\n        <div class=\"form-group m-b-0\">\n          <div class=\"col-sm-12 text-center\">\n            <a class=\"text-info m-l-5\" [routerLink]=\"['/auth/login']\"><b>{{lang.signIn.label.title}}</b></a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/auth/notice/notice.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/notice/notice.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-notice {\n  margin: 10% 30%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TaGFyZWQvd29ya3NwYWNlcy9jcm0vZnJvbnRleHBvcnQvc3JjL2FwcC9hdXRoL25vdGljZS9ub3RpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoL25vdGljZS9ub3RpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1ub3RpY2Uge1xuICBtYXJnaW46IDEwJSAzMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/auth/notice/notice.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/notice/notice.component.ts ***!
  \*************************************************/
/*! exports provided: NoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeComponent", function() { return NoticeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_lang_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/lang.helper */ "./src/helpers/lang.helper.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





var NoticeComponent = /** @class */ (function () {
    function NoticeComponent(lang, router) {
        this.lang = lang;
        this.router = router;
        this.REGISTER_SUCCESS = 'auth.register.success';
        this.FORGET_PASSWORD_SUCCESS = 'auth.password.forget.success';
        this.PASSWORD_RESET_SUCCESS = 'password.reset.success';
        this.type = null;
        this.lang = lang;
        this.router = router;
    }
    NoticeComponent.prototype.ngOnInit = function () {
        if (lodash__WEBPACK_IMPORTED_MODULE_4__["isEmpty"](localStorage.getItem('type'))) {
            this.router.navigate(['auth/login']);
        }
        this.type = localStorage.getItem('type');
        localStorage.removeItem('type');
    };
    NoticeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-notice',
            template: __webpack_require__(/*! ./notice.component.html */ "./src/app/auth/notice/notice.component.html"),
            styles: [__webpack_require__(/*! ./notice.component.scss */ "./src/app/auth/notice/notice.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_helpers_lang_helper__WEBPACK_IMPORTED_MODULE_2__["LangHelper"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NoticeComponent);
    return NoticeComponent;
}());



/***/ }),

/***/ "./src/app/auth/password-forget/forget.password.model.ts":
/*!***************************************************************!*\
  !*** ./src/app/auth/password-forget/forget.password.model.ts ***!
  \***************************************************************/
/*! exports provided: ForgetPasswordModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordModel", function() { return ForgetPasswordModel; });
var ForgetPasswordModel = /** @class */ (function () {
    function ForgetPasswordModel() {
    }
    return ForgetPasswordModel;
}());



/***/ }),

/***/ "./src/app/auth/password-forget/forget.password.validate.ts":
/*!******************************************************************!*\
  !*** ./src/app/auth/password-forget/forget.password.validate.ts ***!
  \******************************************************************/
/*! exports provided: ForgetPasswordValidate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordValidate", function() { return ForgetPasswordValidate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_shared_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.validation */ "./src/app/shared/shared.validation.ts");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




var ForgetPasswordValidate = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ForgetPasswordValidate, _super);
    function ForgetPasswordValidate(msgLang) {
        var _this = _super.call(this) || this;
        _this.msgLang = msgLang;
        _this.email = 'email';
        _this.msgLang = msgLang;
        return _this;
    }
    ForgetPasswordValidate.prototype.validation = function (form) {
        var emailMsg = null;
        if (lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](form.email)) {
            emailMsg = this.msgLang.email.empty;
        }
        else if (!validator__WEBPACK_IMPORTED_MODULE_2__["isEmail"](form.email)) {
            emailMsg = this.msgLang.email.format;
        }
        this.set('email', emailMsg);
    };
    return ForgetPasswordValidate;
}(_shared_shared_validation__WEBPACK_IMPORTED_MODULE_1__["SharedValidation"]));



/***/ }),

/***/ "./src/app/auth/password-forget/password-forget.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/auth/password-forget/password-forget.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-register\" style=\"background-image:url(assets/images/background/export_background.jpg)\">\n  <div class=\"login-box card\">\n    <div class=\"card-body\">\n      <form class=\"form-horizontal form-material\" id=\"resetPasswordForm\" #resetPasswordForm=\"ngForm\" (ngSubmit)=\"submit(resetPasswordForm)\">\n        <h3 class=\"box-title m-b-20\">{{lang.forgetPassword.label.title}}</h3>\n        <div class=\"form-group\">\n          <div class=\"col-xs-12\">\n            <input autofocus class=\"form-control\" #name=ngModel [(ngModel)]=\"model.email\" name=\"email\" autocomplete=\"off\" type=\"text\" placeholder=\"{{lang.common.email}}\">\n          </div>\n          <app-shared-form-error [validate]=\"formValidation\" [elementName]=\"formValidation.email\"></app-shared-form-error>\n        </div>\n\n        <div class=\"form-group row\">\n          <div class=\"col-md-12\">\n            <app-languages></app-languages>\n          </div>\n        </div>\n        <div class=\"form-group text-center\">\n          <div class=\"col-xs-12\">\n            <button type=\"submit\" class=\"btn btn-info btn-lg btn-block btn-rounded text-uppercase waves-effect waves-light\">\n              {{lang.forgetPassword.label.submit}}\n              <app-shared-loader></app-shared-loader>\n            </button>\n\n          </div>\n        </div>\n\n        <div class=\"form-group m-b-0\">\n          <div class=\"col-sm-12 text-center\">\n            <a class=\"text-info m-l-5\" [routerLink]=\"['/auth/login']\"><b>{{lang.signIn.label.title}}</b></a>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/auth/password-forget/password-forget.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/auth/password-forget/password-forget.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcGFzc3dvcmQtZm9yZ2V0L3Bhc3N3b3JkLWZvcmdldC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/password-forget/password-forget.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/auth/password-forget/password-forget.component.ts ***!
  \*******************************************************************/
/*! exports provided: PasswordForgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordForgetComponent", function() { return PasswordForgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_lang_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/lang.helper */ "./src/helpers/lang.helper.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _forget_password_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forget.password.validate */ "./src/app/auth/password-forget/forget.password.validate.ts");
/* harmony import */ var _forget_password_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forget.password.model */ "./src/app/auth/password-forget/forget.password.model.ts");
/* harmony import */ var _helpers_response_error_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/response.error.helper */ "./src/helpers/response.error.helper.ts");
/* harmony import */ var _requests_auth_forget_password__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../requests/auth/forget.password */ "./src/requests/auth/forget.password.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");











var PasswordForgetComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PasswordForgetComponent, _super);
    function PasswordForgetComponent(lang, loaderService, api, toastr, router) {
        var _this = _super.call(this) || this;
        _this.lang = lang;
        _this.loaderService = loaderService;
        _this.api = api;
        _this.toastr = toastr;
        _this.router = router;
        _this.type = '';
        _this.lang = lang;
        _this.formValidation = new _forget_password_validate__WEBPACK_IMPORTED_MODULE_5__["ForgetPasswordValidate"](_this.lang.forgetPassword.validation);
        _this.model = new _forget_password_model__WEBPACK_IMPORTED_MODULE_6__["ForgetPasswordModel"]();
        return _this;
    }
    PasswordForgetComponent.prototype.submit = function (form) {
        this.formValidation.validation(form.value);
        var self = this;
        if (this.formValidation.validate() && !this.loaderService.isShow()) {
            this.model.email = form.value.email;
            this.api.forgot(this.model).subscribe({
                next: function () {
                    localStorage.setItem('type', 'auth.password.forget.success');
                    self.router.navigate(['/auth/notice']);
                },
                error: function (req) {
                    if (_helpers_response_error_helper__WEBPACK_IMPORTED_MODULE_7__["ResponseErrorHelper"].is401(req)) {
                        self.toastr.error(req.error.message);
                    }
                }
            });
        }
    };
    PasswordForgetComponent.prototype.ngOnInit = function () {
    };
    PasswordForgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-password-forget',
            template: __webpack_require__(/*! ./password-forget.component.html */ "./src/app/auth/password-forget/password-forget.component.html"),
            styles: [__webpack_require__(/*! ./password-forget.component.scss */ "./src/app/auth/password-forget/password-forget.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_helpers_lang_helper__WEBPACK_IMPORTED_MODULE_2__["LangHelper"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            _requests_auth_forget_password__WEBPACK_IMPORTED_MODULE_8__["ForgetPassword"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])
    ], PasswordForgetComponent);
    return PasswordForgetComponent;
}(_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]));



/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-register\" style=\"background-image:url(assets/images/background/export_background.jpg)\">\n  <div class=\"login-box card\">\n    <div class=\"card-body\">\n      <form class=\"form-horizontal form-material\" id=\"registerForm\" #registerForm=\"ngForm\" (ngSubmit)=\"submit(registerForm)\">\n        <h3 class=\"box-title m-b-20\">{{register.title}}</h3>\n        <div class=\"form-group\">\n          <div class=\"col-xs-12\">\n            <input autofocus class=\"form-control\" #name=\"ngModel\" [(ngModel)]=\"model.name\" name=\"name\" autocomplete=\"off\" required type=\"text\" placeholder=\"{{register.placeholder.name}}\">\n          </div>\n          <app-shared-form-error [validate]=\"formValidation\" [elementName]=\"formValidation.name\"></app-shared-form-error>\n\n        </div>\n        <div class=\"form-group \">\n          <div class=\"col-xs-12\">\n            <input class=\"form-control\" #name=ngModel [(ngModel)]=\"model.email\" name=\"email\" autocomplete=\"off\" required type=\"email\" placeholder=\"{{register.placeholder.email}}\">\n          </div>\n          <app-shared-form-error [validate]=\"formValidation\" [elementName]=\"formValidation.email\"></app-shared-form-error>\n        </div>\n        <div class=\"form-group \">\n          <div class=\"col-xs-12\">\n            <input class=\"form-control\" #password=\"ngModel\" [(ngModel)]=\"model.password\" name=\"password\" autocomplete=\"off\" required type=\"password\"\n                   placeholder=\"{{register.placeholder.password}}\">\n          </div>\n          <app-shared-form-error [validate]=\"formValidation\" [elementName]=\"formValidation.password\"></app-shared-form-error>\n        </div>\n\n        <div class=\"form-group row\">\n          <div class=\"col-md-12\">\n            <app-languages></app-languages>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-md-12\">\n            <div class=\"checkbox checkbox-success p-t-0\">\n              <input [(ngModel)]=\"model.agreeTerm\" name=\"agreeTerm\" #agreeTerm=\"ngModel\" id=\"checkbox-signup\" type=\"checkbox\" value=\"1\" required class=\"filled-in chk-col-light-blue\">\n              <label for=\"checkbox-signup\"> {{register.termOfUse}}</label>\n            </div>\n          </div>\n          <app-shared-form-error [validate]=\"formValidation\" [elementName]=\"formValidation.agreeTerm\"></app-shared-form-error>\n        </div>\n\n        <div class=\"form-group text-center\">\n          <div class=\"col-xs-12\">\n            <button type=\"submit\" class=\"btn btn-info btn-lg btn-block btn-rounded text-uppercase waves-effect waves-light\">\n              {{lang.common.signUp}}\n              <app-shared-loader></app-shared-loader>\n            </button>\n          </div>\n        </div>\n        <div class=\"form-group m-b-0\">\n          <div class=\"col-sm-12 text-center\">\n            {{register.suggestion.haveAccount}}<a class=\"text-info m-l-5\" [routerLink]=\"['/auth/login']\"><b>{{register.suggestion.signIn}}</b></a>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/translate.service */ "./src/services/translate.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _helpers_lang_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/lang.helper */ "./src/helpers/lang.helper.ts");
/* harmony import */ var _register_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register.model */ "./src/app/auth/register/register.model.ts");
/* harmony import */ var _register_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.form */ "./src/app/auth/register/register.form.ts");
/* harmony import */ var _requests_auth_register__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../requests/auth/register */ "./src/requests/auth/register.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _helpers_response_error_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../helpers/response.error.helper */ "./src/helpers/response.error.helper.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");












var RegisterComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RegisterComponent, _super);
    function RegisterComponent(translate, lang, apiRegister, toastr, loaderService, router) {
        var _this = _super.call(this) || this;
        _this.translate = translate;
        _this.lang = lang;
        _this.apiRegister = apiRegister;
        _this.toastr = toastr;
        _this.loaderService = loaderService;
        _this.router = router;
        _this.register = {};
        _this.register = translate.data.register;
        _this.model = new _register_model__WEBPACK_IMPORTED_MODULE_5__["RegisterModel"]();
        _this.formValidation = new _register_form__WEBPACK_IMPORTED_MODULE_6__["RegisterForm"](_this.register);
        _this.api = apiRegister;
        return _this;
    }
    RegisterComponent.prototype.submit = function (form) {
        this.formValidation.validation(form.value);
        var self = this;
        if (this.formValidation.validate() && !this.loaderService.isShow()) {
            this.model.email = form.value.email;
            this.model.name = form.value.name;
            this.model.password = form.value.password;
            this.apiRegister.register(this.model).subscribe({
                next: function () {
                    localStorage.setItem('type', 'auth.register.success');
                    self.router.navigate(['/auth/notice']);
                },
                error: function (req) {
                    _helpers_response_error_helper__WEBPACK_IMPORTED_MODULE_9__["ResponseErrorHelper"].get(req, 'email').map(function (email) { return self.toastr.error(email); });
                }
            });
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/auth/register/register.component.scss")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _helpers_lang_helper__WEBPACK_IMPORTED_MODULE_4__["LangHelper"],
            _requests_auth_register__WEBPACK_IMPORTED_MODULE_7__["Register"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}(_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]));



/***/ }),

/***/ "./src/app/auth/register/register.form.ts":
/*!************************************************!*\
  !*** ./src/app/auth/register/register.form.ts ***!
  \************************************************/
/*! exports provided: RegisterForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterForm", function() { return RegisterForm; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_shared_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.validation */ "./src/app/shared/shared.validation.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_4__);





var RegisterForm = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RegisterForm, _super);
    function RegisterForm(registerLang) {
        var _this = _super.call(this) || this;
        _this.registerLang = registerLang;
        _this.email = 'email';
        _this.name = 'name';
        _this.password = 'password';
        _this.agreeTerm = 'agreeTerm';
        _this.registerLang = registerLang;
        return _this;
    }
    RegisterForm.prototype.validation = function (form) {
        var name = null;
        var email = null;
        var password = null;
        var agreeTerm = null;
        if (lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](form.name)) {
            name = this.registerLang.validation.name.empty;
        }
        if (lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](form.email)) {
            email = this.registerLang.validation.email.empty;
        }
        else if (!validator__WEBPACK_IMPORTED_MODULE_4__["isEmail"](form.email)) {
            email = this.registerLang.validation.email.format;
        }
        if (lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](form.password)) {
            password = this.registerLang.validation.password.empty;
        }
        else if (form.password.length < 8) {
            password = this.registerLang.validation.password.min;
        }
        if (form.agreeTerm === false || form.agreeTerm === undefined) {
            agreeTerm = this.registerLang.validation.agreeTerm.empty;
        }
        this.set('name', name);
        this.set('email', email);
        this.set('password', password);
        this.set('agreeTerm', agreeTerm);
    };
    RegisterForm = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], RegisterForm);
    return RegisterForm;
}(_shared_shared_validation__WEBPACK_IMPORTED_MODULE_2__["SharedValidation"]));



/***/ }),

/***/ "./src/app/auth/register/register.model.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/register/register.model.ts ***!
  \*************************************************/
/*! exports provided: RegisterModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModel", function() { return RegisterModel; });
var RegisterModel = /** @class */ (function () {
    function RegisterModel() {
    }
    return RegisterModel;
}());



/***/ }),

/***/ "./src/app/auth/reset-password/reset-password.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isVerified\" class=\"login-register\" style=\"background-image:url(assets/images/background/export_background.jpg)\">\n  <div class=\"login-box card\">\n    <div class=\"card-body\">\n      <form class=\"form-horizontal form-material\" id=\"resetPasswordForm\" #resetPasswordForm=\"ngForm\" (ngSubmit)=\"submit(resetPasswordForm)\">\n        <h3 class=\"box-title m-b-20\">{{lang.resetPassword.label.title}}</h3>\n        <div class=\"form-group\">\n          <div class=\"col-xs-12\">\n            <input autofocus class=\"form-control\" #name=ngModel [(ngModel)]=\"model.password\" name=\"password\" autocomplete=\"off\" type=\"password\"\n                   placeholder=\"{{lang.resetPassword.placeholder.password}}\">\n          </div>\n          <app-shared-form-error [validate]=\"formValidation\" [elementName]=\"formValidation.password\"></app-shared-form-error>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-xs-12\">\n            <input autofocus class=\"form-control\" #name=ngModel [(ngModel)]=\"model.rePassword\" name=\"rePassword\" autocomplete=\"off\" type=\"password\"\n                   placeholder=\"{{lang.resetPassword.placeholder.rePassword}}\">\n          </div>\n          <app-shared-form-error [validate]=\"formValidation\" [elementName]=\"formValidation.rePassword\"></app-shared-form-error>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-md-12\">\n            <app-languages></app-languages>\n          </div>\n        </div>\n        <div class=\"form-group text-center p-b-20\">\n          <div class=\"col-xs-12\">\n            <button type=\"submit\" class=\"btn btn-info btn-lg btn-block btn-rounded text-uppercase waves-effect waves-light\">\n              {{lang.resetPassword.label.submit}}\n              <app-shared-loader></app-shared-loader>\n            </button>\n\n          </div>\n        </div>\n\n      </form>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"!isVerified\" class=\"preloader\" id=\"preloader_verify\">\n  <svg class=\"circular\" viewBox=\"25 25 50 50\">\n    <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\"/>\n  </svg>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/reset-password/reset-password.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/reset-password/reset-password.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_lang_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/lang.helper */ "./src/helpers/lang.helper.ts");
/* harmony import */ var _reset_password_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset.password.validate */ "./src/app/auth/reset-password/reset.password.validate.ts");
/* harmony import */ var _reset_password_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reset.password.model */ "./src/app/auth/reset-password/reset.password.model.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _requests_auth_reset_password__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../requests/auth/reset.password */ "./src/requests/auth/reset.password.ts");
/* harmony import */ var _helpers_response_error_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/response.error.helper */ "./src/helpers/response.error.helper.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(lang, loaderService, toastr, activatedRoute, router, api) {
        this.lang = lang;
        this.loaderService = loaderService;
        this.toastr = toastr;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.api = api;
        this.isVerified = false;
        this.lang = lang;
        this.formValidation = new _reset_password_validate__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordValidate"](this.lang.resetPassword.validation);
        this.model = new _reset_password_model__WEBPACK_IMPORTED_MODULE_4__["ResetPasswordModel"]();
    }
    ResetPasswordComponent.prototype.submit = function (form) {
        this.formValidation.validation(form.value);
        var self = this;
        if (this.formValidation.validate() && !this.loaderService.isShow()) {
            this.model.password = form.value.password;
            this.api.reset(this.model).subscribe({
                next: function (req) {
                    localStorage.setItem('type', 'password.reset.success');
                    self.router.navigate(['/auth/notice']);
                },
                error: function (req) {
                    if (_helpers_response_error_helper__WEBPACK_IMPORTED_MODULE_7__["ResponseErrorHelper"].is401(req)) {
                        self.toastr.error(req.error.message);
                    }
                }
            });
        }
    };
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            var token = params.get('token');
            _this.model = new _reset_password_model__WEBPACK_IMPORTED_MODULE_4__["ResetPasswordModel"]();
            _this.model.token = token;
            var self = _this;
            _this.api.reset(_this.model).subscribe({
                next: function () {
                    self.isVerified = true;
                },
                error: function (req) {
                    if (_helpers_response_error_helper__WEBPACK_IMPORTED_MODULE_7__["ResponseErrorHelper"].is404(req)) {
                        _helpers_response_error_helper__WEBPACK_IMPORTED_MODULE_7__["ResponseErrorHelper"].redirect404(self.router);
                    }
                }
            });
        });
    };
    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/auth/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/auth/reset-password/reset-password.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_helpers_lang_helper__WEBPACK_IMPORTED_MODULE_2__["LangHelper"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _requests_auth_reset_password__WEBPACK_IMPORTED_MODULE_6__["ResetPassword"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/auth/reset-password/reset.password.model.ts":
/*!*************************************************************!*\
  !*** ./src/app/auth/reset-password/reset.password.model.ts ***!
  \*************************************************************/
/*! exports provided: ResetPasswordModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordModel", function() { return ResetPasswordModel; });
var ResetPasswordModel = /** @class */ (function () {
    function ResetPasswordModel() {
    }
    return ResetPasswordModel;
}());



/***/ }),

/***/ "./src/app/auth/reset-password/reset.password.validate.ts":
/*!****************************************************************!*\
  !*** ./src/app/auth/reset-password/reset.password.validate.ts ***!
  \****************************************************************/
/*! exports provided: ResetPasswordValidate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordValidate", function() { return ResetPasswordValidate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_shared_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.validation */ "./src/app/shared/shared.validation.ts");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




var ResetPasswordValidate = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ResetPasswordValidate, _super);
    function ResetPasswordValidate(msgLang) {
        var _this = _super.call(this) || this;
        _this.msgLang = msgLang;
        _this.password = 'password';
        _this.rePassword = 'rePassword';
        _this.msgLang = msgLang;
        return _this;
    }
    ResetPasswordValidate.prototype.validation = function (form) {
        var passwordMsg = null;
        var rePasswordMsg = null;
        if (lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](form.password)) {
            passwordMsg = this.msgLang.password.empty;
        }
        else if (!validator__WEBPACK_IMPORTED_MODULE_2__["isLength"](form.password, { min: 8 })) {
            passwordMsg = this.msgLang.password.min;
        }
        if (lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](form.rePassword)) {
            rePasswordMsg = this.msgLang.rePassword.empty;
        }
        else if (form.password !== form.rePassword) {
            rePasswordMsg = this.msgLang.rePassword.notMatch;
        }
        this.set('password', passwordMsg);
        this.set('rePassword', rePasswordMsg);
    };
    return ResetPasswordValidate;
}(_shared_shared_validation__WEBPACK_IMPORTED_MODULE_1__["SharedValidation"]));



/***/ }),

/***/ "./src/app/auth/verify/verify.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/verify/verify.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\" *ngIf=\"this.isVerified\">\n    <div class=\"card card-notice\">\n      <div class=\"card-header btn-primary\">\n        <h3><strong style=\"color: #ffffff\" >{{lang.register.verify.title}}</strong></h3>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"form-group m-b-0\">\n          <div class=\"col-sm-12 text-center\">\n            {{lang.register.verify.body}}\n          </div>\n        </div>\n        <div class=\"form-group m-b-0\">\n          <div class=\"col-sm-12 text-center\">\n            <a class=\"text-info m-l-5\" [routerLink]=\"['/auth/login']\"><b>{{lang.signIn.label.title}}</b></a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/verify/verify.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/verify/verify.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-notice {\n  margin: 10% 30%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TaGFyZWQvd29ya3NwYWNlcy9jcm0vZnJvbnRleHBvcnQvc3JjL2FwcC9hdXRoL3ZlcmlmeS92ZXJpZnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3ZlcmlmeS92ZXJpZnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1ub3RpY2Uge1xuICBtYXJnaW46IDEwJSAzMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/auth/verify/verify.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/verify/verify.component.ts ***!
  \*************************************************/
/*! exports provided: VerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyComponent", function() { return VerifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _verify_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./verify.model */ "./src/app/auth/verify/verify.model.ts");
/* harmony import */ var _requests_auth_verify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../requests/auth/verify */ "./src/requests/auth/verify.ts");
/* harmony import */ var _helpers_response_error_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helpers/response.error.helper */ "./src/helpers/response.error.helper.ts");
/* harmony import */ var _helpers_lang_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/lang.helper */ "./src/helpers/lang.helper.ts");








var VerifyComponent = /** @class */ (function () {
    function VerifyComponent(activatedRoute, router, api, lang) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.api = api;
        this.lang = lang;
        this.token = null;
        this.isVerified = false;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.api = api;
        this.lang = lang;
    }
    VerifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            _this.token = params.get('token');
            if (lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](_this.token)) {
                _this.router.navigate(['404']);
            }
            _this.model = new _verify_model__WEBPACK_IMPORTED_MODULE_4__["VerifyModel"]();
            _this.model.token = _this.token;
            var self = _this;
            _this.api.verify(_this.model).subscribe({
                next: function () {
                    self.isVerified = true;
                },
                error: function (req) {
                    if (_helpers_response_error_helper__WEBPACK_IMPORTED_MODULE_6__["ResponseErrorHelper"].is404(req)) {
                        _helpers_response_error_helper__WEBPACK_IMPORTED_MODULE_6__["ResponseErrorHelper"].redirect404(self.router);
                    }
                }
            });
        });
    };
    VerifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verify',
            template: __webpack_require__(/*! ./verify.component.html */ "./src/app/auth/verify/verify.component.html"),
            styles: [__webpack_require__(/*! ./verify.component.scss */ "./src/app/auth/verify/verify.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _requests_auth_verify__WEBPACK_IMPORTED_MODULE_5__["Verify"],
            _helpers_lang_helper__WEBPACK_IMPORTED_MODULE_7__["LangHelper"]])
    ], VerifyComponent);
    return VerifyComponent;
}());



/***/ }),

/***/ "./src/app/auth/verify/verify.model.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/verify/verify.model.ts ***!
  \*********************************************/
/*! exports provided: VerifyModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyModel", function() { return VerifyModel; });
var VerifyModel = /** @class */ (function () {
    function VerifyModel() {
    }
    return VerifyModel;
}());



/***/ }),

/***/ "./src/app/shared/forms/error/error.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/forms/error/error.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"validate.has(elementName)\">\n  <span class=\"text-danger\">{{validate.get(elementName)}}</span>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/forms/error/error.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/shared/forms/error/error.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb3Jtcy9lcnJvci9lcnJvci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/forms/error/error.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/forms/error/error.component.ts ***!
  \*******************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ErrorComponent.prototype, "validate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ErrorComponent.prototype, "elementName", void 0);
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shared-form-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/shared/forms/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.scss */ "./src/app/shared/forms/error/error.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/shared/languages/languages.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/languages/languages.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<select class=\"form-control\" (change)=\"change($event)\">\n    <option *ngFor=\"let item of languages; index as i;\" [selected]=\"currentLang == item.key\" value=\"{{item.key}}\" >{{item.title}}</option>\n</select>\n\n"

/***/ }),

/***/ "./src/app/shared/languages/languages.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/shared/languages/languages.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYW5ndWFnZXMvbGFuZ3VhZ2VzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/languages/languages.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/languages/languages.component.ts ***!
  \*********************************************************/
/*! exports provided: LanguagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagesComponent", function() { return LanguagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/translate.service */ "./src/services/translate.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/local.storage.service */ "./src/services/local.storage.service.ts");




var LanguagesComponent = /** @class */ (function () {
    function LanguagesComponent(trans, localStorage) {
        this.trans = trans;
        this.localStorage = localStorage;
        this.languages = [];
        this.currentLang = 'en';
        this.languages = trans.data.languages;
        this.currentLang = localStorage.get('language');
    }
    LanguagesComponent.prototype.change = function (event) {
        this.localStorage.set('language', event.target.value);
        window.location.reload();
    };
    LanguagesComponent.prototype.ngOnInit = function () {
    };
    LanguagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-languages',
            template: __webpack_require__(/*! ./languages.component.html */ "./src/app/shared/languages/languages.component.html"),
            styles: [__webpack_require__(/*! ./languages.component.scss */ "./src/app/shared/languages/languages.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])
    ], LanguagesComponent);
    return LanguagesComponent;
}());



/***/ }),

/***/ "./src/app/shared/loader/loader.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/loader/loader.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<i *ngIf=\"loader.isShow()\" class=\"fa fa-spin fa-spinner\"></i>\n"

/***/ }),

/***/ "./src/app/shared/loader/loader.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/loader/loader.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/loader/loader.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/loader/loader.component.ts ***!
  \***************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/loader.service */ "./src/services/loader.service.ts");



var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(loader) {
        this.loader = loader;
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shared-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/shared/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/shared/loader/loader.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/not-found/not-found.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/not-found/not-found.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Page not found - 404\n</p>\n"

/***/ }),

/***/ "./src/app/shared/not-found/not-found.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/shared/not-found/not-found.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/not-found/not-found.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/not-found/not-found.component.ts ***!
  \*********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
        document.getElementById('preloader').remove();
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/shared/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/shared/not-found/not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.validation.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/shared.validation.ts ***!
  \*********************************************/
/*! exports provided: SharedValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedValidation", function() { return SharedValidation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var SharedValidation = /** @class */ (function () {
    function SharedValidation() {
        this.errors = [];
    }
    SharedValidation.prototype.validate = function () {
        return Object.entries(this.errors).length === 0;
    };
    SharedValidation.prototype.has = function (key) {
        return !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](this.errors[key]);
    };
    SharedValidation.prototype.get = function (key) {
        return this.errors[key];
    };
    SharedValidation.prototype.set = function (key, value) {
        if (lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](value)) {
            this.remove(key);
            return false;
        }
        this.errors[key] = value;
    };
    SharedValidation.prototype.remove = function (key) {
        if (this.has(key)) {
            delete this.errors[key];
        }
    };
    SharedValidation = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], SharedValidation);
    return SharedValidation;
}());



/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sidebar works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/shared/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/shared/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://crm.local.com/api/v1/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/helpers/index.ts":
/*!******************************!*\
  !*** ./src/helpers/index.ts ***!
  \******************************/
/*! exports provided: helpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "helpers", function() { return helpers; });
/* harmony import */ var _lang_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang.helper */ "./src/helpers/lang.helper.ts");
/* harmony import */ var _response_error_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./response.error.helper */ "./src/helpers/response.error.helper.ts");


var helpers = [
    _lang_helper__WEBPACK_IMPORTED_MODULE_0__["LangHelper"],
    _response_error_helper__WEBPACK_IMPORTED_MODULE_1__["ResponseErrorHelper"]
];


/***/ }),

/***/ "./src/helpers/lang.helper.ts":
/*!************************************!*\
  !*** ./src/helpers/lang.helper.ts ***!
  \************************************/
/*! exports provided: LangHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangHelper", function() { return LangHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/translate.service */ "./src/services/translate.service.ts");



var LangHelper = /** @class */ (function () {
    function LangHelper(translate) {
        this.translate = translate;
        this.common = {};
        this.resetPassword = {};
        this.forgetPassword = {};
        this.signIn = {};
        this.register = {};
        this.common = translate.data.common;
        this.resetPassword = translate.data.resetPassword;
        this.forgetPassword = translate.data.forgetPassword;
        this.signIn = translate.data.signIn;
        this.register = translate.data.register;
    }
    LangHelper = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], LangHelper);
    return LangHelper;
}());



/***/ }),

/***/ "./src/helpers/response.error.helper.ts":
/*!**********************************************!*\
  !*** ./src/helpers/response.error.helper.ts ***!
  \**********************************************/
/*! exports provided: ResponseErrorHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseErrorHelper", function() { return ResponseErrorHelper; });
var ResponseErrorHelper = /** @class */ (function () {
    function ResponseErrorHelper() {
    }
    ResponseErrorHelper.has = function (req, key) {
        return req.error.errors.hasOwnProperty(key);
    };
    ResponseErrorHelper.get = function (req, key) {
        var result = [];
        if (this.has(req, key)) {
            result = req.error.errors[key];
        }
        return result;
    };
    ResponseErrorHelper.is401 = function (req) {
        return req.status === 401;
    };
    ResponseErrorHelper.is404 = function (req) {
        return req.status === 404;
    };
    ResponseErrorHelper.redirect404 = function (router) {
        router.navigate(['404']);
    };
    return ResponseErrorHelper;
}());



/***/ }),

/***/ "./src/interceptors/header.interceptor.ts":
/*!************************************************!*\
  !*** ./src/interceptors/header.interceptor.ts ***!
  \************************************************/
/*! exports provided: HeaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderInterceptor", function() { return HeaderInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderInterceptor = /** @class */ (function () {
    function HeaderInterceptor() {
    }
    HeaderInterceptor.prototype.intercept = function (req, next) {
        var jsonReq = req.clone({
            headers: req.headers.set('Content-Type', 'application/json')
        });
        return next.handle(jsonReq);
    };
    HeaderInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], HeaderInterceptor);
    return HeaderInterceptor;
}());



/***/ }),

/***/ "./src/interceptors/index.ts":
/*!***********************************!*\
  !*** ./src/interceptors/index.ts ***!
  \***********************************/
/*! exports provided: httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _header_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.interceptor */ "./src/interceptors/header.interceptor.ts");
/* harmony import */ var _lang_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lang.interceptor */ "./src/interceptors/lang.interceptor.ts");
/* harmony import */ var _loader_intercepter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader.intercepter */ "./src/interceptors/loader.intercepter.ts");




var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _header_interceptor__WEBPACK_IMPORTED_MODULE_1__["HeaderInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _lang_interceptor__WEBPACK_IMPORTED_MODULE_2__["LangInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _loader_intercepter__WEBPACK_IMPORTED_MODULE_3__["LoaderInterceptor"], multi: true },
];


/***/ }),

/***/ "./src/interceptors/lang.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/interceptors/lang.interceptor.ts ***!
  \**********************************************/
/*! exports provided: LangInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangInterceptor", function() { return LangInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



var LangInterceptor = /** @class */ (function () {
    function LangInterceptor() {
    }
    LangInterceptor.prototype.intercept = function (req, next) {
        var lang = lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](localStorage.getItem('language')) ? 'en' : localStorage.getItem('language');
        var langReq = req.clone({
            headers: req.headers.set('lang', lang)
        });
        return next.handle(langReq);
    };
    LangInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LangInterceptor);
    return LangInterceptor;
}());



/***/ }),

/***/ "./src/interceptors/loader.intercepter.ts":
/*!************************************************!*\
  !*** ./src/interceptors/loader.intercepter.ts ***!
  \************************************************/
/*! exports provided: LoaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function() { return LoaderInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/loader.service */ "./src/services/loader.service.ts");




var LoaderInterceptor = /** @class */ (function () {
    function LoaderInterceptor(injector) {
        this.injector = injector;
    }
    LoaderInterceptor.prototype.intercept = function (req, next) {
        if (!req.url.includes('api/')) {
            return next.handle(req);
        }
        var loaderService = this.injector.get(_services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]);
        loaderService.show();
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return loaderService.hide(); }));
    };
    LoaderInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], LoaderInterceptor);
    return LoaderInterceptor;
}());



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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/requests/auth/forget.password.ts":
/*!**********************************************!*\
  !*** ./src/requests/auth/forget.password.ts ***!
  \**********************************************/
/*! exports provided: ForgetPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPassword", function() { return ForgetPassword; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ForgetPassword = /** @class */ (function () {
    function ForgetPassword(http) {
        this.http = http;
        this.http = http;
    }
    ForgetPassword.prototype.forgot = function (model) {
        return this.http.post('api/v1/auth/password/forget', model);
    };
    ForgetPassword = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ForgetPassword);
    return ForgetPassword;
}());



/***/ }),

/***/ "./src/requests/auth/login.ts":
/*!************************************!*\
  !*** ./src/requests/auth/login.ts ***!
  \************************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var Login = /** @class */ (function () {
    function Login(http) {
        this.http = http;
        this.http = http;
    }
    Login.prototype.login = function (model) {
        return this.http.post('api/v1/auth/login', model);
    };
    Login = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Login);
    return Login;
}());



/***/ }),

/***/ "./src/requests/auth/register.ts":
/*!***************************************!*\
  !*** ./src/requests/auth/register.ts ***!
  \***************************************/
/*! exports provided: Register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var Register = /** @class */ (function () {
    function Register(http) {
        this.http = http;
        this.http = http;
    }
    Register.prototype.register = function (model) {
        return this.http.post('api/v1/auth/register', model);
    };
    Register = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Register);
    return Register;
}());



/***/ }),

/***/ "./src/requests/auth/reset.password.ts":
/*!*********************************************!*\
  !*** ./src/requests/auth/reset.password.ts ***!
  \*********************************************/
/*! exports provided: ResetPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPassword", function() { return ResetPassword; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ResetPassword = /** @class */ (function () {
    function ResetPassword(http) {
        this.http = http;
        this.http = http;
    }
    ResetPassword.prototype.reset = function (model) {
        return this.http.post('api/v1/auth/password/reset', model);
    };
    ResetPassword = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ResetPassword);
    return ResetPassword;
}());



/***/ }),

/***/ "./src/requests/auth/verify.ts":
/*!*************************************!*\
  !*** ./src/requests/auth/verify.ts ***!
  \*************************************/
/*! exports provided: Verify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Verify", function() { return Verify; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var Verify = /** @class */ (function () {
    function Verify(http) {
        this.http = http;
        this.http = http;
    }
    Verify.prototype.verify = function (model) {
        return this.http.post('api/v1/auth/email/verify', model);
    };
    Verify = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], Verify);
    return Verify;
}());



/***/ }),

/***/ "./src/requests/index.ts":
/*!*******************************!*\
  !*** ./src/requests/index.ts ***!
  \*******************************/
/*! exports provided: codes, apis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codes", function() { return codes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apis", function() { return apis; });
/* harmony import */ var _auth_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/login */ "./src/requests/auth/login.ts");
/* harmony import */ var _auth_register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/register */ "./src/requests/auth/register.ts");
/* harmony import */ var _auth_reset_password__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/reset.password */ "./src/requests/auth/reset.password.ts");
/* harmony import */ var _auth_forget_password__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/forget.password */ "./src/requests/auth/forget.password.ts");
/* harmony import */ var _auth_verify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/verify */ "./src/requests/auth/verify.ts");





var codes = {
    success: 1,
};
var apis = [
    _auth_login__WEBPACK_IMPORTED_MODULE_0__["Login"],
    _auth_register__WEBPACK_IMPORTED_MODULE_1__["Register"],
    _auth_reset_password__WEBPACK_IMPORTED_MODULE_2__["ResetPassword"],
    _auth_forget_password__WEBPACK_IMPORTED_MODULE_3__["ForgetPassword"],
    _auth_verify__WEBPACK_IMPORTED_MODULE_4__["Verify"]
];


/***/ }),

/***/ "./src/services/auth/auth-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/services/auth/auth-guard.service.ts ***!
  \*************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/services/auth/auth.service.ts");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['auth/login']);
            return false;
        }
        return true;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/services/auth/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/services/auth/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




var AuthService = /** @class */ (function () {
    function AuthService(jwtHelper) {
        this.jwtHelper = jwtHelper;
        this.tokenName = 'token';
    }
    AuthService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem(this.tokenName);
        return !this.jwtHelper.isTokenExpired(token);
    };
    AuthService.prototype.getAuthorizationToken = function () {
        return localStorage.getItem(this.tokenName);
    };
    AuthService.prototype.isAuthorizationToken = function () {
        return !lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](localStorage.getItem(this.tokenName));
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/services/auth/guest-guard.service.ts":
/*!**************************************************!*\
  !*** ./src/services/auth/guest-guard.service.ts ***!
  \**************************************************/
/*! exports provided: GuestGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestGuardService", function() { return GuestGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/services/auth/auth.service.ts");




var GuestGuardService = /** @class */ (function () {
    function GuestGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    GuestGuardService.prototype.canActivate = function () {
        if (this.auth.isAuthenticated()) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    };
    GuestGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GuestGuardService);
    return GuestGuardService;
}());



/***/ }),

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/*! exports provided: services */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var _translate_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translate.service */ "./src/services/translate.service.ts");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local.storage.service */ "./src/services/local.storage.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/services/auth/auth.service.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/services/auth/auth-guard.service.ts");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _auth_guest_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/guest-guard.service */ "./src/services/auth/guest-guard.service.ts");






var services = [
    _translate_service__WEBPACK_IMPORTED_MODULE_0__["TranslateService"],
    _local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"],
    _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
    _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"],
    _auth_guest_guard_service__WEBPACK_IMPORTED_MODULE_5__["GuestGuardService"],
    _loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]
];


/***/ }),

/***/ "./src/services/loader.service.ts":
/*!****************************************!*\
  !*** ./src/services/loader.service.ts ***!
  \****************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.showLoader = false;
    }
    LoaderService.prototype.show = function () {
        this.showLoader = true;
    };
    LoaderService.prototype.hide = function () {
        this.showLoader = false;
    };
    LoaderService.prototype.isShow = function () {
        return this.showLoader;
    };
    LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/services/local.storage.service.ts":
/*!***********************************************!*\
  !*** ./src/services/local.storage.service.ts ***!
  \***********************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/fesm5/ngx-webstorage-service.js");



var LocalStorageService = /** @class */ (function () {
    function LocalStorageService(storage) {
        this.storage = storage;
        this.storage = storage;
    }
    LocalStorageService.prototype.get = function (key) {
        return this.storage.get(key);
    };
    LocalStorageService.prototype.set = function (key, value) {
        this.storage.set(key, value);
    };
    LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/services/translate.service.ts":
/*!*******************************************!*\
  !*** ./src/services/translate.service.ts ***!
  \*******************************************/
/*! exports provided: TranslateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return TranslateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TranslateService = /** @class */ (function () {
    function TranslateService(http) {
        this.http = http;
        this.data = {};
    }
    TranslateService.prototype.use = function (lang) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var langPath = "../assets/i18n/" + (lang || 'en') + ".json";
            _this.http.get(langPath).subscribe(function (translation) {
                _this.data = Object.assign({}, translation || {});
                resolve(_this.data);
            }, function (error) {
                _this.data = {};
                resolve(_this.data);
            });
        });
    };
    TranslateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TranslateService);
    return TranslateService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Shared/workspaces/crm/frontexport/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map