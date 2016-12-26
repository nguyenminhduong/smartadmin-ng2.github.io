webpackJsonp([52],{1423:function(t,n,a){"use strict";var d=a(0),e=a(1300),s=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();s=__decorate([e.FadeInTop(),d.Component({selector:"sa-highchart-tables",template:a(1823)}),__metadata("design:paramtypes",[])],s),n.HighchartTablesComponent=s},1577:function(t,n,a){"use strict";var d=a(0),e=a(10),s=a(1578),r=a(1423),i=a(1310),l=a(1648),c=function(){function t(){}return t}();c=__decorate([d.NgModule({imports:[e.CommonModule,s.highchartTablesRouting,i.SmartadminModule,l.HighchartsModule],declarations:[r.HighchartTablesComponent]}),__metadata("design:paramtypes",[])],c),n.HighchartTablesModule=c},1578:function(t,n,a){"use strict";var d=a(36),e=a(1423);n.highchartTablesRoutes=[{path:"",component:e.HighchartTablesComponent}],n.highchartTablesRouting=d.RouterModule.forChild(n.highchartTablesRoutes)},1647:function(t,n,a){"use strict";var d=a(0),e=function(){function t(t){this.el=t}return t.prototype.ngOnInit=function(){var t=this;a.e(74).then(a.bind(null,1862)).then(function(){return a.e(66).then(a.bind(null,1865))}).then(function(){$(t.el.nativeElement).highchartTable()})},t}();__decorate([d.Input(),__metadata("design:type",Object)],e.prototype,"saHighchartTable",void 0),e=__decorate([d.Directive({selector:"[saHighchartTable]"}),__metadata("design:paramtypes",["function"==typeof(s="undefined"!=typeof d.ElementRef&&d.ElementRef)&&s||Object])],e),n.HighchartTable=e;var s},1648:function(t,n,a){"use strict";var d=a(0),e=a(10),s=a(1647),r=function(){function t(){}return t}();r=__decorate([d.NgModule({imports:[e.CommonModule],declarations:[s.HighchartTable],exports:[s.HighchartTable]}),__metadata("design:paramtypes",[])],r),n.HighchartsModule=r},1823:function(t,n){t.exports='<div id="content"  >\n\n  <div class="row">\n    <sa-big-breadcrumbs icon="bar-chart-o" [items]="[\'Graphs\', \'Highchart Tables\']" class="col-xs-12 col-sm-7 col-md-7 col-lg-4"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n  <!-- widget grid -->\n  <sa-widgets-grid>\n\n    <!-- row -->\n\n    <div class="row">\n\n      <div class="col-sm-12">\n\n        <div class="alert alert-info">\n\n          <h3 class="no-margin">jQuery HighchartTable</h3>\n          <h5>Convert your HTML data tables into fancy Highcharts graphs without any coding!</h5>\n          <ul>\n            <li>The HighchartTable plugin takes data and attributes from a table and parses them to simply create an Hightcharts chart</li>\n            <li>Control the graph dynamically and easily without any javascript</li>\n            <li>Builds automatically during page load, all you need to do is load the plugin</li>\n            <li>See the full documentation <a href="http://highcharttable.org/#documentation" target="_blank"><strong>here <i class="fa fa-link"></i> </strong> </a></li>\n          </ul>\n\n\n\n        </div>\n\n        <div class="col-sm-12 well">\n          <div class="col-sm-6">\n            <table class="highchart table table-hover table-bordered" [saHighchartTable] data-graph-container=".. .. .highchart-container2" data-graph-type="column">\n              <caption>Column example</caption>\n              <thead>\n              <tr>\n                <th>Month</th>\n                <th class="">Sales</th>\n                <th class="">Benefits</th>\n                <th class="">Expenses</th>\n                <th class="">Prediction</th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr>\n                <td>January</td>\n                <td class="">8000</td>\n                <td class="">2000</td>\n                <td class="">1000</td>\n                <td class="">9000</td>\n              </tr>\n              <tr>\n                <td>February</td>\n                <td class="">12000</td>\n                <td class="">3000</td>\n                <td class="">1300</td>\n                <td class="">10000</td>\n              </tr>\n              <tr>\n                <td>March</td>\n                <td class="">18000</td>\n                <td class="">4000</td>\n                <td class="">1240</td>\n                <td class="">11000</td>\n              </tr>\n              <tr>\n                <td>April</td>\n                <td class="">2000</td>\n                <td class="">-1000</td>\n                <td class="">-150</td>\n                <td class="">13000</td>\n              </tr>\n              <tr>\n                <td>May</td>\n                <td class="">500</td>\n                <td class="">-2500</td>\n                <td class="">1000</td>\n                <td class="">14000</td>\n              </tr>\n              <tr>\n                <td>June</td>\n                <td class="">600</td>\n                <td class="">-500</td>\n                <td class="">-500</td>\n                <td class="">15000</td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n          <div class="col-sm-6">\n            <div class="highchart-container2"></div>\n          </div>\n        </div>\n\n        <div class="col-sm-12 well">\n          <div class="col-sm-6">\n            <table class="highchart table table-hover table-bordered" [saHighchartTable] data-graph-container=".. .. .highchart-container" data-graph-type="line">\n              <caption>Line example</caption>\n              <thead>\n              <tr>\n                <th>Month</th>\n                <th>Sales</th>\n                <th>Benefits</th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr>\n                <td>January</td>\n                <td>8000</td>\n                <td>2000</td>\n              </tr>\n              <tr>\n                <td>February</td>\n                <td>12000</td>\n                <td>3000</td>\n              </tr>\n              <tr>\n                <td>March</td>\n                <td>18000</td>\n                <td>4000</td>\n              </tr>\n              <tr>\n                <td>April</td>\n                <td>2000</td>\n                <td>-1000</td>\n              </tr>\n              <tr>\n                <td>May</td>\n                <td>500</td>\n                <td>-2500</td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n          <div class="col-sm-6">\n            <div class="highchart-container"></div>\n          </div>\n        </div>\n\n        <div class="col-sm-12 well">\n          <div class="col-sm-6">\n            <table class="highchart table table-hover table-bordered" [saHighchartTable] data-graph-container=".. .. .highchart-container3" data-graph-type="column">\n              <caption>Column + area example</caption>\n              <thead>\n              <tr>\n                <th>Month</th>\n                <th>Sales</th>\n                <th data-graph-type="area">Benefits</th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr>\n                <td>January</td>\n                <td>8000</td>\n                <td>2000</td>\n              </tr>\n              <tr>\n                <td>February</td>\n                <td>12000</td>\n                <td>3000</td>\n              </tr>\n              <tr>\n                <td>March</td>\n                <td>18000</td>\n                <td>4000</td>\n              </tr>\n              <tr>\n                <td>April</td>\n                <td>2000</td>\n                <td>-1000</td>\n              </tr>\n              <tr>\n                <td>May</td>\n                <td>500</td>\n                <td>-2500</td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n          <div class="col-sm-6 ">\n            <div class="highchart-container3"></div>\n          </div>\n        </div>\n\n      </div>\n\n      <!-- end row -->\n\n    </div>\n\n    <!-- end row -->\n\n  </sa-widgets-grid>\n\n\n</div>\n'}});