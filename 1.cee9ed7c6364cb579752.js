webpackJsonp([1],{Sz75:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"day",components:{Timeslot:function(){return r.e(6).then(r.bind(null,"1WSx"))}},props:{day:{type:Object,required:!1,default:function(){return{day:0,timeslots:[]}}},ready:{type:Boolean,required:!0},filter:{type:Object,required:!0},filterActive:{type:Boolean,required:!0}},computed:{id:function(){return"day"+this.day.day}}},i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col s12",attrs:{id:e.id,"data-day":e.day.day}},[e.ready?r("h4",[e._v("Day "+e._s(e.day.day))]):e._e(),e._v(" "),e._l(e.day.timeslots,function(t,a){return e.ready?r("timeslot",{key:a,attrs:{timeslot:t,ready:e.ready,filter:e.filter,filterActive:e.filterActive,day:e.day.day}}):e._e()}),e._v(" "),e.ready?e._e():r("timeslot",{attrs:{ready:e.ready,filter:e.filter,filterActive:e.filterActive}})],2)},d=[],l=r("XyMi"),n=Object(l.a)(a,i,d,!1,null,null,null);t.default=n.exports}});
//# sourceMappingURL=1.cee9ed7c6364cb579752.js.map