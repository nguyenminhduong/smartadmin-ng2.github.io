webpackJsonp([18,53],{1167:function(a,n,t){"use strict";var s=t(0),e=t(509),l=t(1246),i=t(1242),r=t(1333);t.d(n,"GraphsShowcaseModule",function(){return d});var p=this&&this.__decorate||function(a,n,t,s){var e,l=arguments.length,i=l<3?n:null===s?s=Object.getOwnPropertyDescriptor(n,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(a,n,t,s);else for(var r=a.length-1;r>=0;r--)(e=a[r])&&(i=(l<3?e(i):l>3?e(n,t,i):e(n,t))||i);return l>3&&i&&Object.defineProperty(n,t,i),i},o=this&&this.__metadata||function(a,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,n)},d=function(){function a(){}return a=p([t.i(s.NgModule)({declarations:[l.a,i.a],imports:[e.a,r.a],providers:[]}),o("design:paramtypes",[])],a)}()},1242:function(a,n,t){"use strict";var s=t(0);t.d(n,"a",function(){return i});var e=this&&this.__decorate||function(a,n,t,s){var e,l=arguments.length,i=l<3?n:null===s?s=Object.getOwnPropertyDescriptor(n,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(a,n,t,s);else for(var r=a.length-1;r>=0;r--)(e=a[r])&&(i=(l<3?e(i):l>3?e(n,t,i):e(n,t))||i);return l>3&&i&&Object.defineProperty(n,t,i),i},l=this&&this.__metadata||function(a,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,n)},i=function(){function a(){}return a.prototype.ngOnInit=function(){},a=e([t.i(s.Component)({selector:"sa-easy-pie-charts",template:t(1465)}),l("design:paramtypes",[])],a)}()},1246:function(a,n,t){"use strict";var s=t(0);t.d(n,"a",function(){return i});var e=this&&this.__decorate||function(a,n,t,s){var e,l=arguments.length,i=l<3?n:null===s?s=Object.getOwnPropertyDescriptor(n,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(a,n,t,s);else for(var r=a.length-1;r>=0;r--)(e=a[r])&&(i=(l<3?e(i):l>3?e(n,t,i):e(n,t))||i);return l>3&&i&&Object.defineProperty(n,t,i),i},l=this&&this.__metadata||function(a,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,n)},i=function(){function a(){}return a.prototype.ngOnInit=function(){},a=e([t.i(s.Component)({selector:"sa-sparklines",template:t(1469)}),l("design:paramtypes",[])],a)}()},1333:function(a,n,t){"use strict";var s=t(81),e=t(1246),l=t(1242);t.d(n,"a",function(){return r});var i=[{path:"flot-charts",loadChildren:"app/+graphs/+flot-charts/flot-charts.module#FlotChartsModule"},{path:"morris-charts",loadChildren:"app/+graphs/+morris-charts/morris-charts.module#MorrisChartsModule"},{path:"sparklines",component:e.a},{path:"easy-pie-charts",component:l.a},{path:"dygraphs",loadChildren:"app/+graphs/+dygraphs/dygraphs.module#DygraphsModule"},{path:"chart-js",loadChildren:"app/+graphs/+chart-js/chart-js-showcase.module#ChartJsShowcaseModule"},{path:"highchart-tables",loadChildren:"app/+graphs/+highchart-tables/highchart-tables.module#HighchartTablesModule"}],r=s.a.forChild(i)},1465:function(a,n){a.exports='<div id="content"  >\n\n  <div class="row">\n    <sa-big-breadcrumbs [items]="[\'Charts\', \'Easy Pie Charts\']" class="col-xs-12 col-sm-7 col-md-7 col-lg-4"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n  <!-- widget grid -->\n  <div class="row">\n\n    <div class="col-sm-12" saEasyPieChartContainer>\n\n      <div class="well">\n        <h1>Easy <span class="semi-bold">Pie Charts</span> <small>Simplified for faster production</small></h1>\n        <p>Easy Pie Charts gives you a nice animation twist to your pie charts - they are also dynamic, which will make it a really nice ajax based live charts for your project</p>\n        <p class="note">&lt;div class=&quot;easy-pie-chart txt-color-blue easyPieChart&quot; data-percent=&quot;36&quot; data-size=&quot;180&quot;&gt; data-pie-size=&quot;50&quot;&gt;\n          &lt;span class=&quot;percent percent-sign txt-color-blue font-xl semi-bold&quot;&gt;36&lt;/span&gt;\n          &lt;/div&gt;</p>\n        <ul class="list-inline">\n          <li>&nbsp;&nbsp;&nbsp;\n            <div class="easy-pie-chart txt-color-red easyPieChart" data-percent="50" data-size="180" data-pie-size="50">\n              <span class="percent percent-sign txt-color-red font-xl semi-bold">49</span>\n            </div>\n            &nbsp;&nbsp;&nbsp;\n          </li>\n          <li>&nbsp;&nbsp;&nbsp;\n            <div class="easy-pie-chart txt-color-blue easyPieChart" data-percent="36" data-pie-size="180">\n              <span class="percent percent-sign txt-color-blue font-xl semi-bold">36</span>\n            </div>\n            &nbsp;&nbsp;&nbsp;\n          </li>\n          <li>&nbsp;&nbsp;&nbsp;\n            <div class="easy-pie-chart txt-color-pinkDark easyPieChart" data-percent="46" data-pie-size="160">\n              <span class="percent percent-sign txt-color-pinkDark font-lg semi-bold">46</span>\n            </div>\n            &nbsp;&nbsp;&nbsp;\n          </li>\n          <li>&nbsp;&nbsp;&nbsp;\n            <div class="easy-pie-chart txt-color-greenLight easyPieChart" data-percent="56" data-pie-size="110">\n              <span class="percent percent-sign txt-color-greenLight font-md">56</span>\n            </div>\n            &nbsp;&nbsp;&nbsp;\n          </li>\n          <li>&nbsp;&nbsp;&nbsp;\n            <div class="easy-pie-chart txt-color-orange easyPieChart" data-percent="66" data-pie-size="60">\n              <span class="percent percent-sign txt-color-orange">66</span>\n            </div>\n            &nbsp;&nbsp;&nbsp;\n          </li>\n          <li>&nbsp;&nbsp;&nbsp;\n            <div class="easy-pie-chart txt-color-darken easyPieChart" data-percent="76" data-pie-size="45">\n              <span class="percent percent-sign font-sm">76</span>\n            </div>\n            &nbsp;&nbsp;&nbsp;\n          </li>\n          <li>&nbsp;&nbsp;&nbsp;\n            <div class="easy-pie-chart txt-color-blue easyPieChart" data-percent="86" data-pie-size="35">\n              <span class="percent percent-sign font-xs">86</span>\n            </div>\n            &nbsp;&nbsp;&nbsp;\n          </li>\n        </ul>\n\n      </div>\n\n    </div>\n  </div>\n\n\n</div>\n'},1469:function(a,n){a.exports='<div id="content"  >\n\n  <div class="row">\n    <sa-big-breadcrumbs [items]="[\'Charts\', \'Sparkline\']" class="col-xs-12 col-sm-7 col-md-7 col-lg-4"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n  <!-- widget grid -->\n  <div class="row">\n\n    <div class="col-sm-12" saSparklineContainer >\n\n      <div class="well">\n\n        <h1>JQuery <span class="semi-bold">Sparklines</span> <small>Modified for easier usage</small></h1>\n        <p>Sparklines are light weight, easy to use, inline charts. We have modified sparklines so you can use it with just <code>data-*</code> values, without the use of javascript</p>\n        <br>\n        <div class="row">\n          <div class="col-sm-6">\n            <ul>\n              <li>\n                Inline Graphs &nbsp;\n                <span class="sparkline" data-sparkline-type="line" data-sparkline-width="50px" data-sparkline-height="18px">90,30,60,40,60,70,50,40,70,60,90,50</span>&nbsp;\n                also change width, height, and color &nbsp;\n                <span class="sparkline txt-color-green" data-sparkline-type="line" data-sparkline-width="80px" data-fill-color="transparent" data-sparkline-spotradius="3" data-sparkline-height="15px">4,1,5,7,9,9,8,7,6,6,4,7,8,4,3,2,2,5,6,7</span>\n                <p class="note">\n                  &lt;span data-sparkline-type="line" data-sparkline-width="50px" data-sparkline-height="18px"&gt;90,30,60,...&lt;/span&gt;\n                </p>\n              </li>\n              <li>\n                Compose inline charts\n                <span class="sparkline display-inline" data-sparkline-type="compositeline" data-sparkline-barcolor="#aafaaf" data-sparkline-linecolor="#ed1c24" data-sparkline-height="15px" data-sparkline-line-val="[6,4,7,8,4,3,2,2,5,6,7,4,1,5,7,9,9,8,7,6]" data-sparkline-bar-val="[4,1,5,7,9,9,8,7,6,6,4,7,8,4,3,2,2,5,6,7]"></span>\n                and Composite Bar charts&nbsp;\n                <span class="sparkline display-inline" data-sparkline-type="compositebar" data-sparkline-height="15px" data-sparkline-color-bottom="#57889C" data-sparkline-barcolor="#aafaaf" data-sparkline-line-width="1.5" data-sparkline-linecolor="#ed1c24" data-sparkline-line-val="[6,4,7,8,4,3,2,2,5,6,7,4,1,5,7,9,9,8,7,6]" data-sparkline-bar-val="[4,1,5,7,9,9,8,7,6,6,4,7,8,4]"></span>\n                <p class="note">\n                  &lt;span data-sparkline-type="compositeline" data-sparkline-height="15px" data-sparkline-line-val="[9,8,7...]" data-sparkline-bar-val="[4,1,5...]"&gt;&lt;/span&gt;\n                </p>\n\n              </li>\n              <li>\n                Discrete bars &nbsp;&nbsp; <span class="sparkline txt-color-blue" data-sparkline-type="discrete" data-sparkline-height="18px" data-sparkline-width="30">4,6,7,7,4,3,2,1,4,4</span> &nbsp;\n                and with threshhold  &nbsp;\n                <span class="sparkline txt-color-blue" data-sparkline-type="discrete" data-sparkline-height="18px" data-sparkline-width="30" data-sparkline-threshold="4">4,6,7,7,4,3,2,1,4,4</span>\n                <p class="note">\n                  &lt;span data-sparkline-type="discrete" data-sparkline-height="18px" data-sparkline-width="30" data-sparkline-threshold="4"&gt;4,6,7,...&lt;/span&gt;\n                </p>\n              </li>\n            </ul>\n\n\n          </div>\n          <div class="col-sm-6">\n            <ul>\n              <li>\n                Nifty Bar Charts &nbsp;&nbsp;\n                <span class="sparkline txt-color-blue" data-sparkline-type="bar" data-sparkline-width="50px" data-sparkline-barwidth="3" data-sparkline-height="15px">50,40,70,60,90,50</span> &nbsp;\n                with negatives and thicker bars &nbsp;\n                <span class="sparkline txt-color-blue" data-sparkline-type="bar" data-sparkline-width="50px" data-sparkline-barwidth="5" data-sparkline-height="18px">5,6,7,2,0,-4,-2,4</span> and stacked bars &nbsp;\n                <span class="sparkline txt-color-blue" data-sparkline-type="bar" data-sparkline-width="50px" data-sparkline-barwidth="5" data-sparkline-height="15px">1:3, 5:3, 2:7,9:1,5:6</span>\n                <p class="note">\n                  &lt;span data-sparkline-type="bar" data-sparkline-width="50px" data-sparkline-bar data-sparkline-height="15px"&gt;50,40,70,...&lt;/span&gt;\n                </p>\n              </li>\n              <li>\n                Box plots&nbsp;\n                <span class="sparkline display-inline" data-sparkline-type="bullet" data-sparkline-height="14px" data-sparkline-bulletrange-color=\'["#CCD7DB", "#92A2A8", "#57889C"]\' data-sparkline-performance-color="#A4CBDB" data-sparkline-bullet-color="#143644">10,12,12,9,7</span>\n                &nbsp; and bullet plots &nbsp;\n                <span class="sparkline display-inline" data-sparkline-type="box" data-sparkline-height="14px">4,27,34,52,54,59,61,68,78,82,85,87,91,93,100</span>\n\n\n\n                <p class="note">\n                  &lt;span data-sparkline-type="compositebar" data-sparkline-line-width="1.5" data-sparkline-line-val="[6,4,7...]" data-sparkline-bar-val="[4,1,5...]"&gt;&lt;/span&gt;\n                </p>\n              </li>\n              <li>\n                Pie Charts &nbsp; <span class="sparkline display-inline" data-sparkline-type="pie" data-sparkline-offset="90" data-sparkline-piesize="18px">3,5,2</span>\n                <p class="note">\n                  &lt;span data-sparkline-type="pie" data-sparkline-offset="90" data-sparkline-piesize="18px"&gt;3,5,2&lt;/span&gt;\n                </p>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <div class="row">\n          <h2 class="row-seperator-header"><small>Examples below are done <strong>without</strong> any javascript!</small></h2>\n          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">\n            <div class="well well-sm well-light">\n              <h4 class="txt-color-blue">Pie <span class="semi-bold">Chart</span> <a href="javascript:void(0);" class="pull-right"><i class="fa fa-refresh"></i></a></h4>\n              <br>\n              <div class="text-center">\n                <div class="sparkline txt-color-blue display-inline"\n                     data-sparkline-type="pie"\n                     data-sparkline-offset="90"\n                     data-sparkline-piesize="75px">3,5,2</div>\n                <div class="sparkline txt-color-blue display-inline"\n                     data-sparkline-type="pie"\n                     data-sparkline-offset="90"\n                     data-sparkline-piesize="75px">30,20,15,35</div>\n              </div>\n\n            </div>\n          </div>\n          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">\n            <div class="well well-sm well-light padding-10">\n              <h4 class="txt-color-green">Composite <span class="semi-bold">Chart</span> <a href="javascript:void(0);" class="pull-right txt-color-green"><i class="fa fa-refresh"></i></a></h4>\n              <br>\n              <div class="sparkline"\n                   data-sparkline-type="compositeline"\n                   data-sparkline-spotradius-top="5"\n                   data-sparkline-color-top="#3a6965"\n                   data-sparkline-line-width-top="3"\n                   data-sparkline-color-bottom="#2b5c59"\n                   data-sparkline-spot-color="#2b5c59"\n                   data-sparkline-minspot-color-top="#97bfbf"\n                   data-sparkline-maxspot-color-top="#c2cccc"\n                   data-sparkline-highlightline-color-top="#cce8e4"\n                   data-sparkline-highlightspot-color-top="#9dbdb9"\n                   data-sparkline-width="96%"\n                   data-sparkline-height="78px"\n                   data-sparkline-line-val="[6,4,7,8,4,3,2,2,5,6,7,4,1,5,7,9,9,8,7,6]"\n                   data-sparkline-bar-val="[4,1,5,7,9,9,8,7,6,6,4,7,8,4,3,2,2,5,6,7]">\n              </div>\n            </div>\n          </div>\n          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">\n            <div class="well well-sm well-light">\n              <h4 class="txt-color-blueLight">Bar <span class="semi-bold">Chart</span> <a href="javascript:void(0);" class="pull-right txt-color-blueLight"><i class="fa fa-refresh"></i></a></h4>\n              <br>\n              <div class="sparkline txt-color-blueLight text-center"\n                   data-sparkline-type="bar"\n                   data-sparkline-width="96%"\n                   data-sparkline-barwidth="11"\n                   data-sparkline-barspacing = "5"\n                   data-sparkline-height="80px">\n                4,3,5,7,9,9,8,7,6,6,4,7,8,4\n              </div>\n            </div>\n          </div>\n          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">\n            <div class="well well-sm well-light">\n              <h4 class="txt-color-blueLight">Bar <span class="semi-bold">Stacked Chart</span> <a href="javascript:void(0);" class="pull-right txt-color-blueLight"><i class="fa fa-refresh"></i></a></h4>\n              <br>\n              <div class="sparkline txt-color-blue text-center"\n                   data-sparkline-type="bar"\n                   data-sparkline-width="96%"\n                   data-sparkline-barwidth="11"\n                   data-sparkline-barspacing = "5"\n                   data-sparkline-barstacked-color=\'["#92A2A8", "#4493B1"]\'\n                   data-sparkline-height="80px">4:5,3:4,5:7,6:3,4:6,6:5,8:2,4:3,6:4,6:2,4:4,7:2,8:5,4:2</div>\n            </div>\n          </div>\n          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">\n            <div class="well padding-10">\n              <h4 class="txt-color-blue">Composite Line with fills <a href="javascript:void(0);" class="pull-right txt-color-white"><i class="fa fa-refresh"></i></a></h4>\n              <br>\n              <div class="sparkline txt-color-darken"\n                   data-sparkline-line-val="[3,2,3,4,3,2,4,2,3]"\n                   data-sparkline-bar-val="[5,3,3,1,5,3,2,2,3]"\n                   data-sparkline-type="compositeline"\n                   data-sparkline-line-width="1"\n                   data-sparkline-width="100%"\n                   data-sparkline-height="180px"\n                   data-sparkline-fillcolor-top="rgba(87, 136, 156, 0.30)"\n                   data-sparkline-fillcolor-bottom="rgba(0, 141, 214, 0.10)"\n                   data-sparkline-color-top="#fff"\n                   data-sparkline-color-bottom="#fff"\n                   data-sparkline-spotradius-top="4"\n                   data-data-sparkline-bar-val-spots-top="[5,3,3,1,4,3,2,2,3]"\n                   data-sparkline-bar-val-spots-bottom="[3,2,3,4,3,2,4,1,3]"\n                   data-sparkline-minspot-color-top="#d1dade"\n                   data-sparkline-minspot-color-bottom="#167db2"\n                   data-sparkline-maxspot-color-top="#d1dade"\n                   data-sparkline-maxspot-color-bottom="#167db2"\n                   data-sparkline-highlightspot-color-top="#d1dade"\n                   data-sparkline-highlightspot-color-bottom="#8fcded"\n                   data-sparkline-highlightline-color-top="#bec6ca"\n                   data-sparkline-highlightline-color-bottom="#bec6ca"\n              >\n                4,3,3,1,4,3,2,2,3\n              </div>\n            </div>\n          </div>\n          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">\n            <div class="well padding-10">\n              <h4 class="txt-color-teal">Line chart variation <a href="javascript:void(0);" class="pull-right txt-color-white"><i class="fa fa-refresh"></i></a></h4>\n              <br>\n              <div class="sparkline"\n                   data-sparkline-type="line"\n                   data-fill-color="#e6f6f5"\n                   data-sparkline-line-color="#0aa699"\n                   data-sparkline-spotradius="5"\n                   data-sparkline-width="100%"\n                   data-sparkline-height="180px">6,4,3,5,2,4,6,4,3,3,4,5,4,3,2,4,5,</div>\n              <h4 class="air air-top-right padding-10 font-xl txt-color-teal">+ 39.<small class="ultra-light txt-color-teal">57 <i class="fa fa-caret-up fa-lg"></i></small></h4>\n              <h5 class="air air-bottom-left padding-10 font-md text-danger">-12.<small class="ultra-light text-danger">45 <i class="fa fa-caret-down fa-lg"></i></small></h5>\n            </div>\n\n          </div>\n        </div>\n\n      </div>\n\n    </div >\n\n\n  </div>\n\n\n</div>\n'}});