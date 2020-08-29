(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contacts/contacts.component */ "./src/app/components/contacts/contacts.component.ts");







const routes = [
    { path: '', redirectTo: '/contacts', pathMatch: 'full' },
    {
        path: 'contacts',
        component: _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_4__["ContactsComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");




class AppComponent {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
        this.isLoggedIn = this.userService.isLoggedIn;
    }
    logout() {
        this.userService.logout();
        this.router.navigate(['/login']);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-scrollbar */ "./node_modules/ngx-scrollbar/__ivy_ngcc__/fesm2015/ngx-scrollbar.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth.interceptor */ "./src/app/services/auth.interceptor.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/contacts/contacts.component */ "./src/app/components/contacts/contacts.component.ts");
/* harmony import */ var _services_googleService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/googleService */ "./src/app/services/googleService.ts");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["AuthInterceptor"],
            multi: true
        },
        _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"],
        _services_googleService__WEBPACK_IMPORTED_MODULE_13__["GoogleService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ngx_scrollbar__WEBPACK_IMPORTED_MODULE_6__["NgScrollbarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_12__["ContactsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        ngx_scrollbar__WEBPACK_IMPORTED_MODULE_6__["NgScrollbarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                    _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_12__["ContactsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    ngx_scrollbar__WEBPACK_IMPORTED_MODULE_6__["NgScrollbarModule"]
                ],
                providers: [
                    _services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["AuthInterceptor"],
                        multi: true
                    },
                    _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"],
                    _services_googleService__WEBPACK_IMPORTED_MODULE_13__["GoogleService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/contacts/contacts.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-scrollbar */ "./node_modules/ngx-scrollbar/__ivy_ngcc__/fesm2015/ngx-scrollbar.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_googleService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/googleService */ "./src/app/services/googleService.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function ContactsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_div_0_Template_img_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.userService.user.googlePictureLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r0.userService.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.me.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.me.email);
} }
function ContactsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Loading. Please wait...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactsComponent_div_17_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 27);
} if (rf & 2) {
    const contact_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", contact_r5.coverPhoto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ContactsComponent_div_17_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contact_r5.email);
} }
function ContactsComponent_div_17_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactsComponent_div_17_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contact_r5.phoneNumber);
} }
function ContactsComponent_div_17_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactsComponent_div_17_img_2_Template, 1, 1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ContactsComponent_div_17_span_6_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ContactsComponent_div_17_span_7_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ContactsComponent_div_17_span_9_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ContactsComponent_div_17_span_10_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", contact_r5.coverPhoto != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contact_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", contact_r5.email != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", contact_r5.email == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", contact_r5.phoneNumber != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", contact_r5.phoneNumber == "");
} }
class ContactsComponent {
    constructor(userService, router, zone, googleService) {
        this.userService = userService;
        this.router = router;
        this.zone = zone;
        this.googleService = googleService;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.contacts = [];
        this.totalContacts = 0;
        this.nextPageToken = null;
        this.busy = false;
        this.contactsContainerHeight = 400;
        this.logoutUser = () => {
            this.userService.logout();
            this.zone.run(() => this.router.navigateByUrl('/login'));
        };
        this.me = this.userService.user;
        if (googleService.isExpired()) {
            this.logout();
        }
        else {
            this.loadContacts();
        }
    }
    ngAfterViewInit() {
        this.subs.add(this.scrollbarRef.scrolled.subscribe(e => {
            const pos = e.target.scrollTop + e.target.clientHeight;
            const max = e.target.scrollHeight;
            if (pos >= max) {
                this.loadContacts(this.nextPageToken);
            }
        }));
        setTimeout(() => {
            this.contactsContainerHeight = this.calContactsContainerHeight();
        }, 0);
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    calContactsContainerHeight() {
        return jquery__WEBPACK_IMPORTED_MODULE_3__(window).innerHeight() - jquery__WEBPACK_IMPORTED_MODULE_3__('.contacts-container').offset().top - 10;
    }
    logout() {
        this.googleService.getAuthInstance().then((auth2) => {
            if (auth2 != null) {
                auth2.signOut().then(this.logoutUser);
            }
            else {
                this.logoutUser();
            }
        });
    }
    loadContacts(token = null) {
        this.busy = true;
        this.googleService.loadContacts(token).subscribe((res) => {
            this.contacts = this.contacts.concat(res.contacts);
            this.totalContacts = res.totalItems;
            this.nextPageToken = res.nextPageToken;
            this.busy = false;
        });
    }
}
ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_googleService__WEBPACK_IMPORTED_MODULE_6__["GoogleService"])); };
ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], viewQuery: function ContactsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_scrollbar__WEBPACK_IMPORTED_MODULE_2__["NgScrollbar"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollbarRef = _t.first);
    } }, decls: 18, vars: 7, consts: [["class", "header", 4, "ngIf"], [1, "body"], [1, "table-container"], [1, "heading"], [1, "fw-500"], [1, "row", "table-heading"], [1, "col"], ["class", "d-flex justify-content-center mt-3", 4, "ngIf"], [1, "my-scrollbar"], [1, "contacts-container"], ["class", "row table-row", 4, "ngFor", "ngForOf"], [1, "header"], [1, "d-flex", "align-items-center"], [1, "dp", 3, "src", "alt"], [1, "info"], [1, "name"], [1, "email"], ["src", "../../../assets/Logout.png", "alt", "logout", 1, "c-pointer", 3, "click"], [1, "d-flex", "justify-content-center", "mt-3"], [1, "fa", "fa-spin", "fa-spinner"], [1, "row", "table-row"], ["class", "cover-photo", "alt", "contact.name", 3, "src", 4, "ngIf"], ["class", "email", 4, "ngIf"], [4, "ngIf"], ["class", "phone-number", 4, "ngIf"], ["src", "../../../assets/bin-2-alternate.png", "alt", "delete", 1, "delete"], ["src", "../../../assets/Selection_box.png", "alt", "check", 1, "checkbox"], ["alt", "contact.name", 1, "cover-photo", 3, "src"], [1, "phone-number"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContactsComponent_div_0_Template, 9, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contacts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "EMAIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "PHONE NUMBER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ContactsComponent_div_14_Template, 4, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ng-scrollbar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ContactsComponent_div_17_Template, 13, 6, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userService.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("( ", ctx.totalContacts, " )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.busy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("height: ", ctx.contactsContainerHeight, "px;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contacts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_2__["NgScrollbar"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: ["body {\n  background: #f8feff;\n}\n\n.header[_ngcontent-%COMP%] {\n  background-image: url('Header_bar.png');\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.header[_ngcontent-%COMP%]   .dp[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 60px;\n}\n\n.header[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  color: white;\n  margin-left: 10px;\n}\n\n.header[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n}\n\n.header[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  font-size: small;\n}\n\n.body[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.body[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%] {\n  width: 95%;\n  margin-top: 30px;\n}\n\n.body[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 600;\n  font-family: Poppins;\n  letter-spacing: 0.08em;\n  color: #053ED1;\n  margin-bottom: 10px;\n}\n\n.body[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #053ED1;\n  font-size: 16px;\n  letter-spacing: 0.08em;\n}\n\n.body[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-heading[_ngcontent-%COMP%] {\n  letter-spacing: 0.08em;\n  color: #B0C6FF;\n  font-size: 12px;\n  font-family: Poppins;\n  margin-bottom: 10px;\n  padding-left: 10px;\n}\n\n.body[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .contacts-container[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  padding-top: 5px;\n}\n\n.body[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .my-scrollbar[_ngcontent-%COMP%] {\n  --scrollbar-thumb-color: #053ED1;\n}\n\n.body[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0px 2px 6px rgba(5, 62, 209, 0.14);\n  border-radius: 8px;\n  margin-bottom: 10px;\n  padding: 10px 5px 10px 10px;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\n.body[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .cover-photo[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  border-radius: 40px;\n  margin-right: 5px;\n}\n\n.body[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .phone-number[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #000000;\n  letter-spacing: 0.08em;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n}\n\n.body[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  color: #000000;\n  letter-spacing: 0.08em;\n  font-family: Poppins;\n  font-style: normal;\n  font-size: 10px;\n}\n\n.body[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  width: 12px;\n  display: none;\n}\n\n.body[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 5px;\n  width: 12px;\n  display: none;\n}\n\n.body[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:hover {\n  background: #FFFFFF;\n  border: 1px solid #4EB4FF;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 10px rgba(5, 62, 209, 0.19);\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.body[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:hover   .delete[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.body[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:hover   .checkbox[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n@media screen and (min-width: 700px) {\n  .header[_ngcontent-%COMP%] {\n    height: 75px;\n    padding-left: 40px;\n    padding-right: 40px;\n  }\n  .header[_ngcontent-%COMP%]   .dp[_ngcontent-%COMP%] {\n    width: 55px;\n    height: 55px;\n  }\n  .header[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n  .header[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  .body[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%] {\n    width: 70%;\n    margin-top: 30px;\n  }\n  .body[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n    font-size: 26px;\n    margin-bottom: 10px;\n  }\n  .body[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .body[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-heading[_ngcontent-%COMP%] {\n    font-size: 12px;\n    margin-bottom: 10px;\n    padding-left: 25px;\n  }\n  .body[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .contacts-container[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n  .body[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    padding: 10px;\n    padding-left: 25px;\n  }\n  .body[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .cover-photo[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    border-radius: 40px;\n    margin-right: 5px;\n  }\n  .body[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .phone-number[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .body[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .body[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n    right: 10px;\n  }\n  .body[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n    left: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLG1CQUFBO0FBREo7O0FBS0E7RUFDRSx1Q0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFJRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFLRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUhKOztBQUtJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBSE47O0FBTUk7RUFDRSxnQkFBQTtBQUpOOztBQVFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBTEY7O0FBT0U7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUFMSjs7QUFPSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFMTjs7QUFPTTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQUxSOztBQVNJO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVBOOztBQVVJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQVJOOztBQVdJO0VBQ0UsZ0NBQUE7QUFUTjs7QUFZSTtFQUNFLG1CQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQVZOOztBQVlNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBVlI7O0FBYU07RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBWFI7O0FBY007RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVpSOztBQWVNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFiUjs7QUFnQk07RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQWRSOztBQWlCTTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBZlI7O0FBaUJRO0VBQ0UsY0FBQTtBQWZWOztBQWtCUTtFQUNFLGNBQUE7QUFoQlY7O0FBc0JBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQW5CRjs7QUFzQkE7RUFDRTtJQUNFLFlBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VBbkJGO0VBcUJFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUFuQko7RUFzQkU7SUFDRSxpQkFBQTtFQXBCSjtFQXNCSTtJQUNFLGVBQUE7RUFwQk47O0VBMEJFO0lBQ0UsVUFBQTtJQUNBLGdCQUFBO0VBdkJKO0VBeUJJO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VBdkJOO0VBeUJNO0lBQ0UsZUFBQTtFQXZCUjtFQTJCSTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0VBekJOO0VBNEJJO0lBQ0Usa0JBQUE7RUExQk47RUE2Qkk7SUFDRSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtFQTNCTjtFQTZCTTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtFQTNCUjtFQThCTTtJQUNFLGVBQUE7RUE1QlI7RUErQk07SUFDRSxlQUFBO0VBN0JSO0VBZ0NNO0lBQ0UsV0FBQTtFQTlCUjtFQWlDTTtJQUNFLFVBQUE7RUEvQlI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL3NyYy9zYXNzL3ZhcmlhYmxlcyc7XG46Om5nLWRlZXAge1xuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmZWZmO1xuICB9XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9IZWFkZXJfYmFyLnBuZycpO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuXG4gIC5kcCB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XG4gIH1cblxuICAuaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcblxuICAgIC5uYW1lIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIC5lbWFpbCB7XG4gICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIH1cbiAgfVxufVxuLmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAudGFibGUtY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgICAuaGVhZGluZyB7XG4gICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICAgICAgY29sb3I6ICMwNTNFRDE7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgICBzbWFsbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGNvbG9yOiAjMDUzRUQxO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRhYmxlLWhlYWRpbmcge1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgICAgIGNvbG9yOiAjQjBDNkZGO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIH1cblxuICAgIC5jb250YWN0cy1jb250YWluZXIge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB9XG5cbiAgICAubXktc2Nyb2xsYmFyIHtcbiAgICAgIC0tc2Nyb2xsYmFyLXRodW1iLWNvbG9yOiAjMDUzRUQxO1xuICAgIH1cblxuICAgIC50YWJsZS1yb3cge1xuICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoNSwgNjIsIDIwOSwgMC4xNCk7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgcGFkZGluZzogMTBweCA1cHggMTBweCAxMHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIC5jb3Zlci1waG90byB7XG4gICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgfVxuXG4gICAgICAucGhvbmUtbnVtYmVyLCAubmFtZSB7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG5cbiAgICAgIC5lbWFpbCB7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIC5kZWxldGUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAuY2hlY2tib3gge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNEVCNEZGO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSg1LCA2MiwgMjA5LCAwLjE5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgLmRlbGV0ZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hlY2tib3gge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4ucm93IHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gIC5oZWFkZXIge1xuICAgIGhlaWdodDogNzVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcblxuICAgIC5kcCB7XG4gICAgICB3aWR0aDogNTVweDtcbiAgICAgIGhlaWdodDogNTVweDtcbiAgICB9XG5cbiAgICAuaW5mbyB7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcblxuICAgICAgLm5hbWUge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmJvZHkge1xuICAgIC50YWJsZS1jb250YWluZXIge1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgICAgIC5oZWFkaW5nIHtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgICAgIHNtYWxsIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnRhYmxlLWhlYWRpbmcge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICAgIH1cblxuICAgICAgLmNvbnRhY3RzLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIH1cblxuICAgICAgLnRhYmxlLXJvdyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcblxuICAgICAgICAuY292ZXItcGhvdG8ge1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBob25lLW51bWJlciwgLm5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lbWFpbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRlbGV0ZSB7XG4gICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hlY2tib3gge1xuICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacts',
                templateUrl: './contacts.component.html',
                styleUrls: ['./contacts.component.scss']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: src_app_services_googleService__WEBPACK_IMPORTED_MODULE_6__["GoogleService"] }]; }, { scrollbarRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_scrollbar__WEBPACK_IMPORTED_MODULE_2__["NgScrollbar"]]
        }] }); })();


/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_googleService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/googleService */ "./src/app/services/googleService.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class LoginComponent {
    constructor(userService, router, zone, googleService) {
        this.userService = userService;
        this.router = router;
        this.zone = zone;
        this.googleService = googleService;
        this.busy = false;
        if (userService.isLoggedIn()) {
            router.navigateByUrl('/');
        }
    }
    ngAfterViewInit() {
        this.googleInit();
    }
    login(data) {
        this.busy = true;
        this.userService.login(data).subscribe((res) => {
            this.zone.run(() => this.router.navigate(['/']));
        }, () => {
            this.busy = false;
        });
    }
    googleInit() {
        this.googleService.getAuth().then((auth2) => {
            this.auth2 = auth2;
            this.attachSignIn(document.getElementById('googleBtn'));
        });
    }
    attachSignIn(element) {
        this.auth2.attachClickHandler(element, {}, (googleUser) => {
            const data = googleUser.getAuthResponse();
            this.login({
                idToken: data.id_token,
                accessToken: data.access_token
            });
        }, (error) => {
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_googleService__WEBPACK_IMPORTED_MODULE_3__["GoogleService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 17, vars: 0, consts: [[1, "main-container"], [1, "login-container"], [1, "login-form"], ["loginForm", "ngForm"], ["type", "email", "placeholder", "Email", 1, "input"], ["type", "password", "placeholder", "Password", 1, "input"], ["type", "button", 1, "signin"], [1, "mt-4", "mb-4", "text-center"], [1, "google-login"], ["src", "../../../assets/google.png", "alt", "google"], [1, "mb-2", "text-center"], [1, "d-flex", "justify-content-center"], ["id", "googleBtn", 1, "btn", "btn-primary"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "OR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sign in with Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]], styles: [".main-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n.main-container[_ngcontent-%COMP%]   .g-signin2[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.main-container[_ngcontent-%COMP%]   .google-login[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.main-container[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0px 4px 10px rgba(5, 62, 209, 0.19);\n  border-radius: 10px;\n  padding: 30px;\n  max-width: 700px;\n}\n.main-container[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #0A45C2;\n  box-sizing: border-box;\n  border-radius: 4px;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  letter-spacing: 0.08em;\n  display: block;\n  color: #B6B6B6 !important;\n  width: 100%;\n  padding: 8px;\n  padding-left: 20px;\n  margin-bottom: 20px;\n}\n.main-container[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .signin[_ngcontent-%COMP%] {\n  background: #0A45C2;\n  border-radius: 4px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  padding: 8px;\n  color: #FFFFFF !important;\n  margin-top: 20px;\n  letter-spacing: 0.08em;\n  width: 100%;\n}\n@media screen and (min-width: 500px) {\n  .login-form[_ngcontent-%COMP%] {\n    width: 500px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQURGO0FBR0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFESjtBQUlFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUtFO0VBQ0UsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBSEo7QUFPTTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBTFI7QUFRTTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFOUjtBQWFBO0VBQ0U7SUFDRSxZQUFBO0VBVkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL3NyYy9zYXNzL3ZhcmlhYmxlcyc7XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLmctc2lnbmluMiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5nb29nbGUtbG9naW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSg1LCA2MiwgMjA5LCAwLjE5KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcblxuICAgIC5sb2dpbi1mb3JtIHtcblxuICAgICAgLmlucHV0IHtcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzBBNDVDMjtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbG9yOiAjQjZCNkI2ICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIH1cblxuICAgICAgLnNpZ25pbiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwQTQ1QzI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIGNvbG9yOiAjRkZGRkZGIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLmxvZ2luLWZvcm0ge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: src_app_services_googleService__WEBPACK_IMPORTED_MODULE_3__["GoogleService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");




class AuthGuardService {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    canActivate() {
        if (!this.userService.isLoggedIn()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/services/auth.interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AuthInterceptor {
    intercept(req, next) {
        let token;
        try {
            token = JSON.parse(localStorage.getItem('user')).token;
        }
        catch (e) {
            token = '';
        }
        req = req.clone({
            setHeaders: {
                'Content-Type': 'application/json; charset=utf-8',
                Accept: 'application/json',
                Authorization: `token ${token}`,
            },
        });
        return next.handle(req);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/googleService.ts":
/*!*******************************************!*\
  !*** ./src/app/services/googleService.ts ***!
  \*******************************************/
/*! exports provided: GoogleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleService", function() { return GoogleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");




class GoogleService {
    constructor(http, userService) {
        this.http = http;
        this.userService = userService;
        this.api = '/api/v1';
    }
    loadContacts(nextPageToken) {
        let endPoint = `${this.api}/google/contacts`;
        if (nextPageToken) {
            endPoint += `?nextPageToken=${nextPageToken}`;
        }
        return this.http.get(endPoint);
    }
    getAuth() {
        return new Promise((res, rej) => {
            gapi.load('auth2', () => {
                const auth2 = gapi.auth2.init({
                    client_id: '737715185635-6r9bbcbsa2d1hm4ok049iugrqjop6odb.apps.googleusercontent.com',
                    scope: 'profile email https://www.googleapis.com/auth/contacts.readonly',
                    redirect_uri: 'http://localhost:3000/google/callback'
                });
                res(auth2);
            });
        });
    }
    getAuthInstance() {
        return new Promise((res, rej) => {
            gapi.load('auth2', () => {
                const auth2 = gapi.auth2.getAuthInstance();
                res(auth2);
            });
        });
    }
    isExpired() {
        const expiry = this.userService.user.expiry;
        const timenow = Date.now() / 1000;
        return expiry < timenow;
    }
}
GoogleService.ɵfac = function GoogleService_Factory(t) { return new (t || GoogleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
GoogleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GoogleService, factory: GoogleService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class UserService {
    constructor(http) {
        this.http = http;
        this.api = '/api/v1';
    }
    register(user) {
        const endpoint = this.api + '/register';
        return this.http.post(endpoint, user);
    }
    login(data) {
        const endpoint = `${this.api}/login`;
        return this.http.post(endpoint, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((res) => localStorage.setItem('user', JSON.stringify({
            user: res.user,
            token: res.token
        }))));
    }
    isLoggedIn() {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user.token) {
                return true;
            }
            return false;
        }
        catch (e) {
            return false;
        }
    }
    getAuthUrl() {
        const endpoint = `${this.api}/authurl`;
        return this.http.get(endpoint);
    }
    logout() {
        localStorage.removeItem('user');
    }
    get user() {
        try {
            return JSON.parse(localStorage.getItem('user')).user;
        }
        catch (e) {
            return {};
        }
    }
    get token() {
        try {
            return JSON.parse(localStorage.getItem('user')).token;
        }
        catch (e) {
            return '';
        }
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
const environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sourabh/projects/google-contacts/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map