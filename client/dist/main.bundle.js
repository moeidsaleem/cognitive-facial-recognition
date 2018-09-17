webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/addface/addface.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/addface/addface.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-1-12 text-center\" (click)=\"hidex = !hidex\" *ngIf=\"hidex==false\">\r\n\t\t\t<img src=\"./assets/face.png\" class=\"img img-thumbnail\" alt=\"\" >\r\n\t\t\t<h4>Facial recognition</h4>\r\n\t\t\t<small>Click to Detaict Photo!</small>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-12\"  *ngIf=\"hidex==true\" >\r\n\t\t\t<div class=\"row\" style=\"padding:10px;border:10px;border-style: solid;border-color:rgb(221, 221, 221)\">\r\n\t\t\t\t\t<div class=\"col-md-6 text-center\" >\r\n\t\t\t\t\t\t\t<webcam  [height]=\"500\" [width]=\"500\" [trigger]=\"triggerObservable\" (imageCapture)=\"handleImage($event)\" *ngIf=\"showWebcam\"\r\n\t\t\t\t\t\t\t[allowCameraSwitch]=\"allowCameraSwitch\" [switchCamera]=\"nextWebcamObservable\"\r\n\t\t\t\t\t\t\t[videoOptions]=\"videoOptions\"\r\n\t\t\t\t\t\t\t(cameraSwitched)=\"cameraWasSwitched($event)\"\r\n\t\t\t\t\t\t\t(initError)=\"handleInitError($event)\"\r\n\t\t\t\t\t></webcam>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-6\" *ngIf=\"!imgx\">\r\n\t\t\t\t\t\t<img src=\"./assets/facialcover.png\" class=\"img img-thumbnail\" alt=\"\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-6\" *ngIf=\"imgx\">\r\n\t\t\t\t\t\t\t<img [src]=\"imgx\" class=\"img img-thumbnail\" alt=\"\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-12 text-center\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t  <label for=\"\">Name</label>\r\n\t\t\t\t\t\t  <input type=\"text\"\r\n\t\t\t\t\t\t\tclass=\"form-control\" [(ngModel)]=\"data.name\" id=\"\" aria-describedby=\"helpId\" placeholder=\"\">\r\n\t\t\t\t\t\t  <small id=\"helpId\" class=\"form-text text-muted\">Please enter Employee name</small>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"triggerSnapshot()\" *ngIf=\"!imgx\">\r\n\t\t\t\t\t\t\tTAKE PICTURE\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button type=\"button\"  class=\"btn btn-outline-success btn-lg\" (click)=\"save()\" *ngIf=\"imgx\">\r\n\t\t\t\t\t\t\t\tSAVE / Upload\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<button type=\"button\"  class=\"btn btn-danger btn-lg\" (click)=\"reset()\" *ngIf=\"imgx\">\r\n\t\t\t\t\t\t\t\t\tRESET\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<button></button>\r\n\t\t\t\t\t\r\n\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\r\n\t</div>\r\n</div>\r\n<!-- \r\n\r\n\r\n<h1 class=\"text-center\">Add Face to A Face list</h1>\r\n\r\n<form method=\"POST\" (ngSubmit)=\"add()\">\r\n\t<div class=\"row col-md-offset-3\">\r\n\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t<label for=\"\">face List Id:</label>\r\n\t\t\t<input type=\"text\" disabled  class=\"form-control\" name=\"faceListId\" [(ngModel)]=\"data.facelist_id\">\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row col-md-offset-3\">\r\n\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t<label for=\"\">name:</label>\r\n\t\t\t<input type=\"text\"  class=\"form-control\" name=\"name\" [(ngModel)]=\"data.name\">\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row col-md-offset-3\">\r\n\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t<label for=\"\">link:</label>\r\n\t\t\t<input type=\"text\" class=\"form-control\" name=\"link\" [(ngModel)]=\"data.link\">\r\n\t\t</div>\t\r\n\t</div>\r\n\t<button type=\"submit\" class=\"btn btn-primary row col-md-offset-6\" style=\"padding-right:50px\" >Add face</button>\r\n\t<div [hidden]=\"!bar\" class=\"row col-md-offset-4\" style=\"padding-top: 20px\">\r\n        <div class=\"form-group col-md-6\">\r\n\t\t\t<div class=\"progress\">\r\n\t\t\t  <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\"\r\n\t\t\t  aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:100%\"> \r\n\t\t\t  </div>\r\n\t         </div>\r\n\t\t</div>\r\n\t</div>\r\n</form>\r\n\r\n<img [src]=\"imgx\"  *ngIf=\"imgx\" alt=\"\">\r\n<div>\r\n    <webcam [height]=\"500\" [width]=\"500\" [trigger]=\"triggerObservable\" (imageCapture)=\"handleImage($event)\" *ngIf=\"showWebcam\"\r\n            [allowCameraSwitch]=\"allowCameraSwitch\" [switchCamera]=\"nextWebcamObservable\"\r\n            [videoOptions]=\"videoOptions\"\r\n            (cameraSwitched)=\"cameraWasSwitched($event)\"\r\n            (initError)=\"handleInitError($event)\"\r\n    ></webcam>\r\n    <br/>\r\n    <button class=\"actionBtn\" (click)=\"triggerSnapshot();\">Take A Snapshot</button>\r\n    <button class=\"actionBtn\" (click)=\"toggleWebcam();\">Toggle Webcam</button>\r\n    <br/>\r\n    <button class=\"actionBtn\" (click)=\"showNextWebcam(true);\" [disabled]=\"!multipleWebcamsAvailable\">Next Webcam</button>\r\n    <input id=\"cameraSwitchCheckbox\" type=\"checkbox\" [(ngModel)]=\"allowCameraSwitch\"><label for=\"cameraSwitchCheckbox\">Allow Camera Switch</label>\r\n    <br/>\r\n    DeviceId: <input id=\"deviceId\" type=\"text\" [(ngModel)]=\"deviceId\" style=\"width: 500px\">\r\n    <button (click)=\"showNextWebcam(deviceId);\">Activate</button>\r\n  </div>\r\n\r\n<div *ngIf=\"check\">\r\n<h1 class=\"text-center\"><b>Face Added...!!!</b></h1>\r\n<table>\r\n\t<tr>\r\n\t\t<th>Details</th>\r\n\t</tr>\r\n\t<br>\r\n\t<tr>\r\n\t\t<td><b>Name:</b>{{added.name}}<br><b>Face_id:</b>{{added.face_id}}</td>\t\r\n\t</tr>\r\n\t<br><br>\r\n\t<tr>\r\n\t\t<th>Picture</th>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td><img class=\"img-thumbnail\" src={{added.img_url}} alt=\"img\" style=\"width:300px;height:300px;\"></td>\r\n\t</tr>\r\n\r\n</table>\r\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/addface/addface.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__faces_service__ = __webpack_require__("../../../../../src/app/faces.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_webcam__ = __webpack_require__("../../../../ngx-webcam/ngx-webcam.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddfaceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddfaceComponent = (function () {
    function AddfaceComponent(faceService) {
        this.faceService = faceService;
        this.data = {
            facelist_id: 'atrix',
            name: '',
            link: ''
        };
        this.hidex = false;
        this.bar = false;
        this.check = false;
        // base64toImg(){
        //   base64Img.img('data:image/png;base64,...', './assets/', '1', function(err, filepath) {});
        // }
        //webcam stuff
        // toggle webcam on/off
        this.showWebcam = true;
        this.allowCameraSwitch = true;
        this.multipleWebcamsAvailable = false;
        this.videoOptions = {};
        this.errors = [];
        // latest snapshot
        this.webcamImage = null;
        // webcam snapshot trigger
        this.trigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
        this.nextWebcam = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    AddfaceComponent.prototype.save = function () {
        if (this.data.name && this.data.facelist_id && this.data.link) {
            this.bar = true;
            this.data.link = this.imgx; /*  base64 Image to server */
            this.data.facelist_id = 'atrix';
            this.faceService.addFace(this.data).subscribe(function (resp) {
                alert("added");
            });
        }
        else {
            alert("Please upload all required data..");
        }
    };
    AddfaceComponent.prototype.add = function () {
        var _this = this;
        this.bar = true;
        this.faceService.addFace(this.data).subscribe(function (res) {
            _this.added = res;
            _this.check = true;
            _this.bar = false;
        }, function (err) {
            console.log("Error:" + err);
            _this.bar = false;
        });
    };
    AddfaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_ngx_webcam__["b" /* WebcamUtil */].getAvailableVideoInputs()
            .then(function (mediaDevices) {
            _this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
        });
    };
    AddfaceComponent.prototype.triggerSnapshot = function () {
        this.trigger.next();
    };
    AddfaceComponent.prototype.toggleWebcam = function () {
        this.showWebcam = !this.showWebcam;
    };
    AddfaceComponent.prototype.handleInitError = function (error) {
        this.errors.push(error);
    };
    AddfaceComponent.prototype.showNextWebcam = function (directionOrDeviceId) {
        // true => move forward through devices
        // false => move backwards through devices
        // string => move to device with given deviceId
        this.nextWebcam.next(directionOrDeviceId);
    };
    AddfaceComponent.prototype.handleImage = function (webcamImage) {
        console.info('received webcam image', webcamImage);
        this.webcamImage = webcamImage;
        this.imgx = this.webcamImage.imageAsDataUrl;
        this.data.link = this.imgx;
    };
    AddfaceComponent.prototype.cameraWasSwitched = function (deviceId) {
        console.log('active device: ' + deviceId);
        this.deviceId = deviceId;
    };
    Object.defineProperty(AddfaceComponent.prototype, "triggerObservable", {
        get: function () {
            return this.trigger.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddfaceComponent.prototype, "nextWebcamObservable", {
        get: function () {
            return this.nextWebcam.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    return AddfaceComponent;
}());
AddfaceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-addface',
        template: __webpack_require__("../../../../../src/app/addface/addface.component.html"),
        styles: [__webpack_require__("../../../../../src/app/addface/addface.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__faces_service__["a" /* FacesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__faces_service__["a" /* FacesService */]) === "function" && _a || Object])
], AddfaceComponent);

var _a;
//# sourceMappingURL=addface.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__addface_addface_component__ = __webpack_require__("../../../../../src/app/addface/addface.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__show_faces_show_faces_component__ = __webpack_require__("../../../../../src/app/show-faces/show-faces.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__find_similar_face_find_similar_face_component__ = __webpack_require__("../../../../../src/app/find-similar-face/find-similar-face.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__faces_service__ = __webpack_require__("../../../../../src/app/faces.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_webcam__ = __webpack_require__("../../../../ngx-webcam/ngx-webcam.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__addface_addface_component__["a" /* AddfaceComponent */],
            __WEBPACK_IMPORTED_MODULE_7__show_faces_show_faces_component__["a" /* ShowFacesComponent */],
            __WEBPACK_IMPORTED_MODULE_8__find_similar_face_find_similar_face_component__["a" /* FindSimilarFaceComponent */],
            __WEBPACK_IMPORTED_MODULE_11__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            // NgxSpinnerModule,
            __WEBPACK_IMPORTED_MODULE_10_ngx_webcam__["a" /* WebcamModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: '',
                    redirectTo: 'home',
                    pathMatch: 'full'
                },
                { path: 'home',
                    component: __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */]
                },
                {
                    path: 'addFace',
                    component: __WEBPACK_IMPORTED_MODULE_6__addface_addface_component__["a" /* AddfaceComponent */]
                },
                {
                    path: 'faces',
                    component: __WEBPACK_IMPORTED_MODULE_7__show_faces_show_faces_component__["a" /* ShowFacesComponent */]
                },
                {
                    path: 'findSimilarFaces',
                    component: __WEBPACK_IMPORTED_MODULE_8__find_similar_face_find_similar_face_component__["a" /* FindSimilarFaceComponent */]
                }
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__faces_service__["a" /* FacesService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/faces.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FacesService = (function () {
    function FacesService(http) {
        this.http = http;
        // server='http://localhost:3000/';
        this.server = 'http://ec2-13-229-128-0.ap-southeast-1.compute.amazonaws.com:3000/';
    }
    /*Add a face to a face list*/
    FacesService.prototype.addFace = function (data) {
        return this.http.post(this.server + 'api/faces/', data).map(function (res) { return res.json(); });
    };
    /*find a similar face in the face list*/
    FacesService.prototype.findSimilar = function (data) {
        return this.http.post(this.server + 'api/faces/find', data).map(function (res) { return res.json(); });
    };
    /*Show all the avaliable faces*/
    FacesService.prototype.getAllFaces = function () {
        console.log("gettting all faces...");
        return this.http.get(this.server + 'api/faces/').map(function (res) { return res.json(); });
    };
    /*Delete the selected face*/
    FacesService.prototype.deleteFace = function (id) {
        console.log('checking2');
        return this.http.delete(this.server + 'api/faces/' + id).map(function (res) { return res.json(); });
    };
    return FacesService;
}());
FacesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FacesService);

var _a;
//# sourceMappingURL=faces.service.js.map

/***/ }),

/***/ "../../../../../src/app/find-similar-face/find-similar-face.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/find-similar-face/find-similar-face.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">FACE IDENTIFIER</h1>\r\n\r\n\r\n\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-6 text-center\" *ngIf=\"hidex==false\"  style=\"border-style:solid;border:10px;border-color: #fece1a;\">\r\n\t\t\t<img src=\"./assets/facialcover.png\" class=\"img img-thumbnail\" alt=\"\">\r\n\t\t\t<h2 class=\"text-center\">FACE</h2>\r\n\t\t\t<button class=\"btn btn-success text-center\" (click)=\"hidex=!hidex\">SCAN FACE</button>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-6\"  *ngIf=\"hidex==true\" >\r\n\t\t\t\t<div class=\"row\" style=\"padding:10px;border:10px;border-style: solid;border-color:rgb(221, 221, 221)\">\r\n\t\t\t\t\t\t<div class=\"col-md-6 text-center\" >\r\n\t\t\t\t\t\t\t\t<webcam  [height]=\"500\" [width]=\"500\" [trigger]=\"triggerObservable\" (imageCapture)=\"handleImage($event)\" *ngIf=\"showWebcam\"\r\n\t\t\t\t\t\t\t\t[allowCameraSwitch]=\"allowCameraSwitch\" [switchCamera]=\"nextWebcamObservable\"\r\n\t\t\t\t\t\t\t\t[videoOptions]=\"videoOptions\"\r\n\t\t\t\t\t\t\t\t(cameraSwitched)=\"cameraWasSwitched($event)\"\r\n\t\t\t\t\t\t\t\t(initError)=\"handleInitError($event)\"\r\n\t\t\t\t\t\t></webcam>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6\" *ngIf=\"imgx\">\r\n\t\t\t\t\t\t\t\t<img [src]=\"imgx\" class=\"img img-thumbnail\" alt=\"\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-12 text-center\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"triggerSnapshot()\" *ngIf=\"!imgx\">\r\n\t\t\t\t\t\t\t\tTAKE PICTURE\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<button type=\"button\"  class=\"btn btn-outline-success btn-lg\" (click)=\"find()\" *ngIf=\"imgx\">\r\n\t\t\t\t\t\t\t\t\tSAVE / Upload\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t<button type=\"button\"  class=\"btn btn-danger btn-lg\" (click)=\"reset()\" *ngIf=\"imgx\">\r\n\t\t\t\t\t\t\t\t\t\tRESET\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t<div class=\"col-md-6 text-center\" *ngIf=\"!foundData \" style=\"border-style:solid;border:10px;border-color: #fece1a;\">\r\n\t\t\t\t<img src=\"http://media2.govtech.com/images/940*650/shutterstock_797603911.jpg\" class=\"img img-thumbnail\" alt=\"\">\r\n\t\t\t\t<h2 class=\"text-center\">\r\n\t\t\t\t\t\tMATCH\r\n\t\t\t\t\t</h2>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-6\" *ngIf=\"found && foundData \">\r\n\t\t\t\t<div class=\"card text-center border-primary\">\r\n\t\t\t\t\t\t<img class=\"card-img-top\" [src]=\"foundData.img_url\" alt=\"\">\r\n\t\t\t\t\t\t<img *ngIf=\"!foundData.name\" class=\"card-img-top\" src=\"./assets/notfound.jpg\" alt=\"\">\r\n\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<h4 class=\"card-title text-capitalize\">{{foundData.name}}</h4>\r\n\t\t\t\t\t<p *ngIf=\"foundData.name\"class=\"card-text text-success\">Match Found!</p>\r\n\t\t\t\t\t<p *ngIf=\"!foundData.name\" class=\"card-text text-danger\">Not Match Found!</p>\r\n\t\t\t\t  </div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\r\n\t</div>\r\n</div>\t\r\n<!-- \r\n<div class=\"container\">\r\n<form method=\"POST\" (ngSubmit)=\"find()\">\r\n\t<div class=\"row col-md-offset-3\">\r\n\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t<label for=\"\">face List Id:</label>\r\n\t\t\t<input type=\"text\"  name=\"faceListId\" disabled class=\"form-control\" [(ngModel)]=\"data.faceList_id\">\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row col-md-offset-3\">\r\n\t\t<div class=\"form-group  col-md-6\">\r\n\t\t\t<label for=\"\">link:</label>\r\n\t\t\t<input type=\"text\" name=\"link\" class=\"form-control\" [(ngModel)]=\"data.link\">\r\n\t\t</div>\r\n\t</div>\t\r\n\t<button type=\"submit\" class=\"btn btn-primary col-md-offset-6\">find similar</button>\r\n\t<div [hidden]=\"!bar\" class=\"row col-md-offset-4\" style=\"padding-top: 20px\">\r\n        <div class=\"form-group col-md-6\">\r\n\t\t\t<div class=\"progress\">\r\n\t\t\t  <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\"\r\n\t\t\t  aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:100%\"> \r\n\t\t\t  </div>\r\n\t         </div>\r\n\t\t</div>\r\n\t</div>\r\n</form>\r\n<br><br><br><br>\r\n<div *ngIf=\"found && foundData.name\">\r\n<h1 class=\"text-center\"><b>Found...!!!</b></h1>\r\n<table>\r\n\t<tr>\r\n\t\t<th>Details</th>\r\n\t</tr>\r\n\t<br>\r\n\t<tr>\r\n\t\t<td><b>Name:</b>{{foundData.name}}<br><b>Face_id:</b>{{foundData.face_id}}</td>\t\r\n\t</tr>\r\n\t<br><br>\r\n\t<tr>\r\n\t\t<th>Query photo</th>\r\n\t\t<th>Matched photo</th>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td><img class=\"img-thumbnail\" src={{data.link}} alt=\"img\" style=\"width:300px;height:300px;\"></td>\r\n\t\t<td><img class=\"img-thumbnail\" src={{foundData.img_url}} alt=\"img\" style=\"width:300px;height:300px;\"></td>\r\n\t</tr>\r\n\r\n</table>\r\n</div>\r\n<div *ngIf=\"found && !foundData.name\">\r\n\t<h1>Not FOUNd</h1>\r\n</div>\r\n\r\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/find-similar-face/find-similar-face.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__faces_service__ = __webpack_require__("../../../../../src/app/faces.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_webcam__ = __webpack_require__("../../../../ngx-webcam/ngx-webcam.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindSimilarFaceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FindSimilarFaceComponent = (function () {
    function FindSimilarFaceComponent(faceService) {
        this.faceService = faceService;
        this.data = {
            faceList_id: 'atrix',
            link: ''
        };
        this.bar = false;
        this.found = false;
        this.foundData = '';
        this.hidex = false;
        //webcam stuff
        // toggle webcam on/off
        this.showWebcam = true;
        this.allowCameraSwitch = true;
        this.multipleWebcamsAvailable = false;
        this.videoOptions = {};
        this.errors = [];
        // latest snapshot
        this.webcamImage = null;
        // webcam snapshot trigger
        this.trigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
        this.nextWebcam = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    FindSimilarFaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_ngx_webcam__["b" /* WebcamUtil */].getAvailableVideoInputs()
            .then(function (mediaDevices) {
            _this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
        });
    };
    FindSimilarFaceComponent.prototype.find = function () {
        var _this = this;
        this.foundData = null;
        this.bar = true;
        this.faceService.findSimilar(this.data).subscribe(function (res) {
            console.log(res);
            _this.foundData = res;
            _this.found = true;
            _this.bar = false;
        }, function (err) {
            console.log('Error:' + err);
            _this.bar = false;
            _this.found = false;
        });
    };
    FindSimilarFaceComponent.prototype.reset = function () {
        this.foundData = '';
        this.data.link = '';
        this.imgx = '';
    };
    FindSimilarFaceComponent.prototype.triggerSnapshot = function () {
        this.trigger.next();
    };
    FindSimilarFaceComponent.prototype.toggleWebcam = function () {
        this.showWebcam = !this.showWebcam;
    };
    FindSimilarFaceComponent.prototype.handleInitError = function (error) {
        this.errors.push(error);
    };
    FindSimilarFaceComponent.prototype.showNextWebcam = function (directionOrDeviceId) {
        // true => move forward through devices
        // false => move backwards through devices
        // string => move to device with given deviceId
        this.nextWebcam.next(directionOrDeviceId);
    };
    FindSimilarFaceComponent.prototype.handleImage = function (webcamImage) {
        console.info('received webcam image', webcamImage);
        this.webcamImage = webcamImage;
        this.imgx = this.webcamImage.imageAsDataUrl;
        this.data.link = this.imgx;
    };
    FindSimilarFaceComponent.prototype.cameraWasSwitched = function (deviceId) {
        console.log('active device: ' + deviceId);
        this.deviceId = deviceId;
    };
    Object.defineProperty(FindSimilarFaceComponent.prototype, "triggerObservable", {
        get: function () {
            return this.trigger.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FindSimilarFaceComponent.prototype, "nextWebcamObservable", {
        get: function () {
            return this.nextWebcam.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    return FindSimilarFaceComponent;
}());
FindSimilarFaceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-find-similar-face',
        template: __webpack_require__("../../../../../src/app/find-similar-face/find-similar-face.component.html"),
        styles: [__webpack_require__("../../../../../src/app/find-similar-face/find-similar-face.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__faces_service__["a" /* FacesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__faces_service__["a" /* FacesService */]) === "function" && _a || Object])
], FindSimilarFaceComponent);

var _a;
//# sourceMappingURL=find-similar-face.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bs-docs-section clearfix\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n\n\n      <div class=\"bs-component\">\n        <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n          <a class=\"navbar-brand\" href=\"#\">Facial Security</a>\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n          </button>\n\n          <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n            <ul class=\"navbar-nav mr-auto\">\n              <li class=\"nav-item active\">\n                <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n              </li>\n              <li class=\"nav-item\"  routerLink=\"/faces\">\n                <a class=\"nav-link\">Faces</a>\n              </li>\n              <li class=\"nav-item\" routerLink=\"/addFace\">\n                <a class=\"nav-link\">Register Face</a>\n              </li>\n              <li class=\"nav-item\" routerLink=\"/findSimilarFaces\">\n                <a class=\"nav-link\">Face Identifier</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\">About</a>\n              </li>\n            </ul>\n      \n          </div>\n        </nav>\n      <div id=\"source-button\" class=\"btn btn-primary btn-xs\" style=\"display: none;\">&lt; &gt;</div></div>\n\n   \n\n\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n<!-- <div class=\"row\">\n  <div class=\" col-md-offset-2\">\n    <button class=\"btn btn-success btn-lg col-md-offset-0\" routerLink=\"/findSimilarFaces\">find a face</button>\n    <button class=\"btn btn-success btn-lg col-md-offset-0\" routerLink=\"/addFace\">Add a face</button>\n  </div>  \n</div> -->"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"  background: url('../assets/facex2.jpg');background-repeat: no-repeat;background-blend-mode: darken \">\n  <h1 class=\"display-3\">Hello, world!</h1>\n  <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n  <hr class=\"my-4\">\n  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\n  <p class=\"lead\">\n    <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\n  </p>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.arr = [
            { name: 'ali', status: false },
            { name: 'ali', status: false },
            { name: 'ali', status: false },
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.submit = function () {
        console.log("SDASDAS");
        console.log(this.arr);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/show-faces/show-faces.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/show-faces/show-faces.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class = \"sub-header\"> faces </h2>\r\n<div class=\"table-responsive\">\r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n      <tr>\r\n        <th>persisted Face Id </th>\r\n        <th>Name</th>\r\n        <th>Image</th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let face of faces\">\r\n        <td>{{face.face_id}}\r\n        <td>{{face.name}}</td>\r\n        <td><img class=\"img-thumbnail\" src={{face.img_url}} alt=\"img\" style=\"width:100px;height:100px;\"></td>\r\n        <td><a href=\"#/face/edit/{{face._id}}\" class = \"btn btn-default\">Edit</a>\r\n        <button (click)=\"del(face._id)\" class = \"btn btn-danger\">Delete</button></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/show-faces/show-faces.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__faces_service__ = __webpack_require__("../../../../../src/app/faces.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowFacesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowFacesComponent = (function () {
    function ShowFacesComponent(faceService) {
        this.faceService = faceService;
    }
    ShowFacesComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*This will get all the faces*/
        this.faceService.getAllFaces().subscribe(function (res) {
            _this.faces = res;
            console.log(_this.faces);
        }, function (err) {
            console.log('Error:' + err);
        });
    };
    ShowFacesComponent.prototype.del = function (id) {
        console.log('checking1');
        this.faceService.deleteFace(id).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log('Error:' + err);
        });
    };
    return ShowFacesComponent;
}());
ShowFacesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-show-faces',
        template: __webpack_require__("../../../../../src/app/show-faces/show-faces.component.html"),
        styles: [__webpack_require__("../../../../../src/app/show-faces/show-faces.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__faces_service__["a" /* FacesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__faces_service__["a" /* FacesService */]) === "function" && _a || Object])
], ShowFacesComponent);

var _a;
//# sourceMappingURL=show-faces.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map