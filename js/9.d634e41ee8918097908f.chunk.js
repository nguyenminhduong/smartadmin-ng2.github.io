webpackJsonp([9],{1294:function(n,s,e){"use strict";var l=e(0),a=e(1604),t=e(1442),o=e(1443),i=function(){function n(){}return n}();i=__decorate([l.NgModule({declarations:[t.AppLayoutsComponent,o.PrebuiltSkinsComponent],imports:[a.routing],entryComponents:[t.AppLayoutsComponent,o.PrebuiltSkinsComponent]}),__metadata("design:paramtypes",[])],i),s.SmartadminIntelModule=i},1300:function(n,s){"use strict";function e(){function n(n){for(var s=0,e=n;s<e.length;s++){e[s]}}var s=window.Reflect;return function(e){var l=s.getOwnMetadata("annotations",e);l&&n(l)}}s.FadeInTop=e},1442:function(n,s,e){"use strict";var l=e(0),a=e(1300),t=function(){function n(){}return n.prototype.ngOnInit=function(){},n}();t=__decorate([a.FadeInTop(),l.Component({selector:"sa-app-layouts",template:e(1840)}),__metadata("design:paramtypes",[])],t),s.AppLayoutsComponent=t},1443:function(n,s,e){"use strict";var l=e(0),a=e(1300),t=function(){function n(){}return n.prototype.ngOnInit=function(){},n}();t=__decorate([a.FadeInTop(),l.Component({selector:"sa-prebuilt-skins",template:e(1841)}),__metadata("design:paramtypes",[])],t),s.PrebuiltSkinsComponent=t},1604:function(n,s,e){"use strict";var l=e(36),a=e(1442),t=e(1443);s.routes=[{path:"",redirectTo:"app-layouts",pathMatch:"full"},{path:"app-layouts",component:a.AppLayoutsComponent},{path:"prebuilt-skins",component:t.PrebuiltSkinsComponent}],s.routing=l.RouterModule.forChild(s.routes)},1840:function(n,s){n.exports='<div id="content">\n\n  <!-- Bread crumb is created dynamically -->\n  <!-- row -->\n  <div class="row">\n\n    <!-- col -->\n    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n      <h1 class="page-title txt-color-blueDark text-center well">\n\n        <!-- PAGE HEADER -->\n        SmartAdmin Layout Options<br>\n        <small class="text-success">Morph SmartAdmin to your need! The layout of SmartAdmin is extreamly flexible</small>\n      </h1>\n\n    </div>\n    <!-- end col -->\n\n  </div>\n  <!-- end row -->\n\n  <!--\n      The ID "widget-grid" will start to initialize all widgets below\n      You do not need to use widgets if you dont want to. Simply remove\n      the <section></section> and you can use wells or panels instead\n      -->\n\n  <!-- widget grid -->\n  <section id="widget-grid" class="">\n\n    <!-- row -->\n\n    <div class="row">\n\n      <!-- a blank row to get started -->\n      <div class="col-sm-6">\n        <!-- your contents here -->\n        <div class="well text-center">\n          <h5>\n            Layout type "<strong>Navigation Minified</strong>" <br>\n            <small>\n              Add the following class(s) to body tag\n              <code>.minified</code>\n            </small>\n          </h5>\n          <h5>\n            <small>\n              <i>\n                Avalible options\n              </i>\n            </small>\n          </h5>\n          <span class="label label-default">.fixed-navigation</span>\n          <span class="label label-default">.container</span>\n          <span class="label label-default">.fixed-page-footer</span>\n          <span class="label label-default">.fixed-header</span>\n          <span class="label label-default">.fixed-ribbon</span>\n          <span class="label label-default">.smart-rtl</span>\n          <br>\n          <br>\n\n          <img src="assets/img/demo/layout-skins/layout-collapse.png" class="img-responsive center-block" style="box-shadow: 0px 0px 3px 0px #919191;">\n        </div>\n      </div>\n      <div class="col-sm-6">\n        <!-- your contents here -->\n        <div class="well text-center">\n          <h5>\n            Layout type "<strong>Hidden Navigation</strong>" <br>\n            <small>Add the following class(s) to body tag <code>.hidden-menu</code></small>\n          </h5>\n          <h5>\n            <small>\n              <i>\n                Avalible options\n              </i>\n            </small>\n          </h5>\n          <span class="label label-default">.fixed-navigation</span>\n          <span class="label label-default">.container</span>\n          <span class="label label-default">.fixed-page-footer</span>\n          <span class="label label-default">.fixed-header</span>\n          <span class="label label-default">.fixed-ribbon</span>\n          <span class="label label-default">.smart-rtl</span>\n          <br>\n          <br>\n          <img src="assets/img/demo/layout-skins/layout-hidden.png" class="img-responsive center-block" style="box-shadow: 0px 0px 3px 0px #919191;">\n        </div>\n      </div>\n\n    </div>\n    <div class="row">\n\n      <!-- a blank row to get started -->\n      <div class="col-sm-6">\n        <!-- your contents here -->\n        <div class="well text-center">\n          <h5>\n            Layout type "<strong>Menu on Top with center content</strong>" <br>\n            <small>Add the following class(s) to body tag <code>.top-navigation .container</code></small>\n          </h5>\n          <h5>\n            <small>\n              <i>\n                Avalible options\n              </i>\n            </small>\n          </h5>\n          <span class="label label-default">.fixed-navigation</span>\n          <span class="label label-default">.fixed-page-footer</span>\n          <span class="label label-default">.fixed-header</span>\n          <span class="label label-default">.fixed-ribbon</span>\n          <span class="label label-default">.smart-rtl</span>\n          <br>\n          <br>\n          <img src="assets/img/demo/layout-skins/layout-menutop.png" class="img-responsive center-block" style="box-shadow: 0px 0px 3px 0px #919191;">\n        </div>\n      </div>\n      <div class="col-sm-6">\n        <!-- your contents here -->\n        <div class="well text-center">\n          <h5>\n            Layout type "<strong>Center content with minified nav</strong>" <br>\n            <small>Add the following class(s) to body tag <code>.minified .container</code></small>\n          </h5>\n          <h5>\n            <small>\n              <i>\n                Avalible options\n              </i>\n            </small>\n          </h5>\n          <span class="label label-default">.top-navigation</span>\n          <span class="label label-default">.fixed-navigation</span>\n          <span class="label label-default">.fixed-page-footer</span>\n          <span class="label label-default">.fixed-header</span>\n          <span class="label label-default">.fixed-ribbon</span>\n          <span class="label label-default">.smart-rtl</span>\n          <br>\n          <br>\n          <img src="assets/img/demo/layout-skins/layout-collapse-minified.png" class="img-responsive center-block" style="box-shadow: 0px 0px 3px 0px #919191;">\n        </div>\n      </div>\n\n    </div>\n    <div class="row">\n\n      <!-- a blank row to get started -->\n      <div class="col-sm-6">\n        <!-- your contents here -->\n        <div class="well text-center">\n          <h5>\n            Layout type "<strong>RTL Layout</strong>" <br>\n            <small>Add the following class(s) to body tag <code>.smart-rtl</code></small>\n          </h5>\n          <h5>\n            <small>\n              <i>\n                Avalible options\n              </i>\n            </small>\n          </h5>\n          <span class="label label-default">.container</span>\n          <span class="label label-default">.hidden-menu</span>\n          <span class="label label-default">.fixed-page-footer</span>\n          <span class="label label-default">.fixed-header</span>\n          <span class="label label-default">.fixed-ribbon</span>\n          <span class="label label-default">.minified</span>\n          <br>\n          <br>\n          <img src="assets/img/demo/layout-skins/layout-rtl.png" class="img-responsive center-block" style="box-shadow: 0px 0px 3px 0px #919191;">\n        </div>\n      </div>\n      <div class="col-sm-6">\n        <!-- your contents here -->\n        <div class="well text-center">\n          <h5>\n            Layout type "<strong>RTL with Menu on Top</strong>" <br>\n            <small>Add the following class(s) to body tag <code>.smart-rtl .top-navigation</code></small>\n          </h5>\n          <h5>\n            <small>\n              <i>\n                Avalible options\n              </i>\n            </small>\n          </h5>\n          <span class="label label-default">.fixed-navigation</span>\n          <span class="label label-default">.container</span>\n          <span class="label label-default">.fixed-page-footer</span>\n          <span class="label label-default">.fixed-header</span>\n          <span class="label label-default">.fixed-ribbon</span>\n          <br>\n          <br>\n          <img src="assets/img/demo/layout-skins/layout-rtl-menutop.png" class="img-responsive center-block" style="box-shadow: 0px 0px 3px 0px #919191;">\n        </div>\n      </div>\n\n    </div>\n    <!-- end row -->\n\n  </section>\n  <!-- end widget grid -->\n\n\n</div>\n'},1841:function(n,s){n.exports='<div id="content">\n\n  <!-- row -->\n  <div class="row">\n\n    <!-- col -->\n    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n      <h1 class="page-title txt-color-blueDark text-center well">\n\n        <!-- PAGE HEADER -->\n        SmartAdmin Pre-built Skins<br>\n        <small class="text-primary">Don\'t like the default look of SmartAdmin? Not a problem! SmartAdmin comes with 6 prebuilt skins to choose from.</small>\n      </h1>\n\n    </div>\n    <!-- end col -->\n\n  </div>\n  <!-- end row -->\n\n  <!--\n      The ID "widget-grid" will start to initialize all widgets below\n      You do not need to use widgets if you dont want to. Simply remove\n      the <section></section> and you can use wells or panels instead\n      -->\n\n  <!-- widget grid -->\n  <section id="widget-grid" class="">\n\n    <!-- row -->\n\n    <div class="row">\n\n      <!-- a blank row to get started -->\n      <div class="col-sm-6">\n        <!-- your contents here -->\n        <div class="well text-center">\n          <h5>\n            Skin name "<strong>Glass</strong>" <br>\n            <small>Add the following class to body tag <code>.smart-style-5</code></small>\n          </h5>\n          <img src="assets/img/demo/layout-skins/skin-glass.png" class="img-responsive center-block" style="box-shadow: 0px 0px 3px 0px #919191;">\n        </div>\n      </div>\n      <div class="col-sm-6">\n        <!-- your contents here -->\n        <div class="well text-center">\n          <h5>\n            Skin name "<strong>Google</strong>" <br>\n            <small>Add the following class to body tag <code>.smart-style-3</code></small>\n          </h5>\n          <img src="assets/img/demo/layout-skins/skin-google.png" class="img-responsive center-block" style="box-shadow: 0px 0px 3px 0px #919191;">\n        </div>\n      </div>\n\n    </div>\n\n    <div class="row">\n\n      <!-- a blank row to get started -->\n      <div class="col-sm-6">\n        <!-- your contents here -->\n        <div class="well text-center">\n          <h5>\n            Skin name "<strong>PixelSmash</strong>" <br>\n            <small>Add the following class to body tag <code>.smart-style-4</code></small>\n          </h5>\n          <img src="assets/img/demo/layout-skins/skin-pixel.png" class="img-responsive center-block" style="box-shadow: 0px 0px 3px 0px #919191;">\n        </div>\n      </div>\n      <div class="col-sm-6">\n        <!-- your contents here -->\n        <div class="well text-center">\n          <h5>\n            Skin name "<strong>Dark Elegance</strong>" <br>\n            <small>Add the following class to body tag <code>.smart-style-1</code></small>\n          </h5>\n          <img src="assets/img/demo/layout-skins/skin-dark.png" class="img-responsive center-block" style="box-shadow: 0px 0px 3px 0px #919191;">\n        </div>\n      </div>\n\n    </div>\n\n    <div class="row">\n\n      <!-- a blank row to get started -->\n      <div class="col-sm-6">\n        <!-- your contents here -->\n        <div class="well text-center">\n          <h5>\n            Skin name "<strong>Default</strong>" <br>\n            <small>Add the following class to body tag <code>.smart-style-0</code></small>\n          </h5>\n          <img src="assets/img/demo/layout-skins/skin-default.png" class="img-responsive center-block" style="box-shadow: 0px 0px 3px 0px #919191;">\n        </div>\n      </div>\n      <div class="col-sm-6">\n        <!-- your contents here -->\n        <div class="well text-center">\n          <h5>\n            Skin name "<strong>Ultra Light</strong>" <br>\n            <small>Add the following class to body tag <code>.smart-style-2</code></small>\n          </h5>\n          <img src="assets/img/demo/layout-skins/skin-ultralight.png" class="img-responsive center-block" style="box-shadow: 0px 0px 3px 0px #919191;">\n        </div>\n      </div>\n\n    </div>\n    <!-- end row -->\n\n  </section>\n  <!-- end widget grid -->\n\n\n</div>\n'}});