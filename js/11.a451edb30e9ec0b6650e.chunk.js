webpackJsonp([11],{1296:function(e,n,t){"use strict";var o=t(0),i=t(1623),a=function(){function e(){}return e}();a=__decorate([o.NgModule({declarations:[],imports:[i.routing],providers:[]}),__metadata("design:paramtypes",[])],a),n.UiElementsModule=a},1623:function(e,n,t){"use strict";var o=t(36);n.routes=[{path:"",redirectTo:"buttons",pathMatch:"full"},{path:"buttons",loadChildren:function(){return new Promise(function(e){t.e(33).then(function(n){e(t(1607).ButtonsModule)}.bind(null,t)).catch(t.oe)})},data:{pageTitle:"Buttons"}},{path:"grid",loadChildren:function(){return new Promise(function(e){t.e(28).then(function(n){e(t(1611).GridModule)}.bind(null,t)).catch(t.oe)})},data:{pageTitle:"Grid"}},{path:"typography",loadChildren:function(){return new Promise(function(e){t.e(27).then(function(n){e(t(1621).TypographyModule)}.bind(null,t)).catch(t.oe)})},data:{pageTitle:"Typography"}},{path:"tree-views",loadChildren:function(){return new Promise(function(e){t.e(29).then(function(n){e(t(1619).TreeViewsModule)}.bind(null,t)).catch(t.oe)})},data:{pageTitle:"Tree Views"}},{path:"nestable-lists",loadChildren:function(){return new Promise(function(e){t.e(30).then(function(n){e(t(1617).NestableListsModule)}.bind(null,t)).catch(t.oe)})},data:{pageTitle:"Nestable Lists"}},{path:"jquery-ui",loadChildren:function(){return new Promise(function(e){t.e(21).then(function(n){e(t(1615).JqueryUiShowcaseModule)}.bind(null,t)).catch(t.oe)})},data:{pageTitle:"Jquery Ui"}},{path:"general",loadChildren:function(){return new Promise(function(e){t.e(32).then(function(n){e(t(1609).GeneralElementsModule)}.bind(null,t)).catch(t.oe)})},data:{pageTitle:"General Elements"}},{path:"icons",loadChildren:function(){return new Promise(function(e){t.e(22).then(function(n){e(t(1613).IconsModule)}.bind(null,t)).catch(t.oe)})},data:{pageTitle:"Icons"}}],n.routing=o.RouterModule.forChild(n.routes)}});