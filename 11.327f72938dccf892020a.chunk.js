webpackJsonp([11,52],{1167:function(e,t,n){"use strict";var o=n(0),a=n(508),i=n(1242),r=n(1244),c=n(1243),s=n(1334);n.d(t,"MapsModule",function(){return d});var l=this&&this.__decorate||function(e,t,n,o){var a,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(r=(i<3?a(r):i>3?a(t,n,r):a(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},f=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(){function e(){}return e=l([n.i(o.NgModule)({imports:[s.a,a.a],declarations:[i.a],exports:[i.a],providers:[c.a,r.a]}),f("design:paramtypes",[])],e)}()},1242:function(e,t,n){"use strict";var o=n(0),a=n(1335),i=n(64);n.d(t,"a",function(){return s});var r=this&&this.__decorate||function(e,t,n,o){var a,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(r=(i<3?a(r):i>3?a(t,n,r):a(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(e,t){this.apiService=e,this.styleService=t,this.styles=[{key:"colorful",name:"Colorful",url:i.a.API_URL+"/maps/colorful.json"},{key:"greyscale",name:"Greyscale",url:i.a.API_URL+"/maps/greyscale.json"},{key:"metro",name:"Metro",url:i.a.API_URL+"/maps/metro.json"},{key:"mono-color",name:"Mono-color",url:i.a.API_URL+"/maps/mono-color.json"},{key:"monochrome",name:"Monochrome",url:i.a.API_URL+"/maps/monochrome.json"},{key:"nightvision",name:"Nightvision",url:i.a.API_URL+"/maps/nightvision.json"},{key:"nightvision-highlight",name:"Nightvision Highlight",url:i.a.API_URL+"/maps/nightvision-highlight.json"},{key:"old-paper",name:"Old Paper",url:i.a.API_URL+"/maps/old-paper.json"}]}return e.prototype.ngOnInit=function(){var e=this;this.activeStyle=this.styles[0],this.apiService.loadAPI.then(function(t){e.map=new t.maps.Map(document.getElementById("map-canvas"),{center:{lat:-34.397,lng:150.644},zoom:8}),e.fetchStyle(e.activeStyle)})},e.prototype.ngOnDestroy=function(){},e.prototype.setStyle=function(e){this.activeStyle=e,this.fetchStyle(e)},e.prototype.fetchStyle=function(e){var t=this;this.styleService.fetchStyle(e).subscribe(function(n){t.map.mapTypes.set(e.key,new google.maps.StyledMapType(n,{name:e.name})),t.map.setMapTypeId(e.key)})},e=r([n.i(o.Component)({selector:"sa-maps",template:n(1471)}),c("design:paramtypes",["function"==typeof(t="undefined"!=typeof a.a&&a.a)&&t||Object,"function"==typeof(s="undefined"!=typeof a.b&&a.b)&&s||Object])],e);var t,s}()},1243:function(e,t,n){"use strict";var o=n(0),a=n(64);n.d(t,"a",function(){return s});var i=this&&this.__decorate||function(e,t,n,o){var a,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(r=(i<3?a(r):i>3?a(t,n,r):a(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c="https://maps.googleapis.com/maps/api/js?key="+a.a.GOOGLE_API_KEY+"&callback=__onGoogleLoaded",s=function(){function e(){var e=this;window.google?this.loadAPI=Promise.resolve(window.google):this.loadAPI=new Promise(function(t){window.__onGoogleLoaded=function(e){console.log("google.maps loaded"),t(window.google)},e.loadScript()})}return e.prototype.loadScript=function(){var e=document.createElement("script");e.src=c,e.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(e)},e=i([n.i(o.Injectable)(),r("design:paramtypes",[])],e)}()},1244:function(e,t,n){"use strict";var o=n(0),a=n(82),i=n(125),r=(n.n(i),n(126)),c=(n.n(r),n(514)),s=(n.n(c),n(302));n.n(s);n.d(t,"a",function(){return d});var l=this&&this.__decorate||function(e,t,n,o){var a,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(r=(i<3?a(r):i>3?a(t,n,r):a(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},f=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(){function e(e){this.http=e}return e.prototype.fetchStyle=function(e){return this.http.get(e.url).map(this.extractData).catch(this.handleError)},e.prototype.extractData=function(e){var t=e.json();return t||{}},e.prototype.handleError=function(e){var t=e.message?e.message:e.status?e.status+" - "+e.statusText:"Server error";return console.error(t),i.Observable.throw(t)},e=l([n.i(o.Injectable)(),f("design:paramtypes",["function"==typeof(t="undefined"!=typeof a.a&&a.a)&&t||Object])],e);var t}()},1334:function(e,t,n){"use strict";var o=n(73),a=n(1242);n.d(t,"a",function(){return r});var i=[{path:"",component:a.a}],r=o.a.forChild(i)},1335:function(e,t,n){"use strict";var o=n(1243),a=n(1244);n(1336);n.d(t,"a",function(){return o.a}),n.d(t,"b",function(){return a.a})},1336:function(e,t,n){"use strict";var o=n(0),a=this&&this.__decorate||function(e,t,n,o){var a,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(r=(i<3?a(r):i>3?a(t,n,r):a(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};(function(){function e(){}return e.prototype.ngOnInit=function(){},e=a([n.i(o.Component)({selector:"sa-map",template:"\n    <p>\n      map Works!\n    </p>\n  ",styles:[]}),i("design:paramtypes",[])],e)})()},1471:function(e,t){e.exports='<div id="content">\n  <div class="row">\n    <sa-big-breadcrumbs [items]="[\'Google Map\', \'Custom Skins\']" icon="map-marker"\n                        class="col-xs-12 col-sm-7 col-md-7 col-lg-4"></sa-big-breadcrumbs>\n    <sa-stats class="hidden-3xs"></sa-stats>\n  </div>\n\n\n  <div class="row">\n    <div class="col-xs-12">\n      <button class="btn btn-default" [ngClass]="{active: activeStyle == style}" (click)="setStyle(style)"\n              *ngFor="let style of styles">{{style.name}}\n      </button>\n    </div>\n    <hr>\n  </div>\n  <!-- @link: widgetGrid directive  -->\n  <sa-widgets-grid class="fx-fill">\n    <!-- row -->\n    <div class="row fx-fill">\n      <!-- NEW WIDGET START -->\n      <article class="col-xs-12 col-sm-12 col-md-12 col-lg-12 fx-fill">\n        <!-- @link: jarvisWidget -->\n        <sa-widget  class="fx-fill" [editbutton]="false" [deletebutton]="false" [fullscreenbutton]="false" color="white">\n          <header>\n            <span class="widget-icon"> <i class="fa fa-map-marker"></i> </span>\n            <h2>Map demo</h2>\n          </header>\n          <!-- widget div-->\n          <div  class="fx-fill" >\n            <!-- widget content -->\n            <div class="widget-body no-padding fx-fill" >\n\n              <div id="map-canvas" class="fx-fill" >\n\n              </div>\n            </div>\n            <!-- end widget content data-gmap-src="xml/gmap/pins.xml" -->\n          </div>\n          <!-- end widget div -->\n        </sa-widget>\n        <!-- end widget -->\n      </article>\n      <!-- WIDGET END -->\n    </div>\n    <!-- end row -->\n  </sa-widgets-grid>\n  <!-- end widget grid -->\n</div>\n'}});