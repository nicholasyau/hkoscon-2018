webpackJsonp([6],{"1WSx":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={name:"timeslot",components:{LinearLoader:function(){return s.e(5).then(s.bind(null,"SD9I"))},Session:function(){return s.e(9).then(s.bind(null,"V4G9"))}},props:{ready:{type:Boolean,required:!0},timeslot:{type:Object,required:!1},filter:{type:Object,required:!0},filterActive:{type:Boolean,required:!0},day:{type:Number}}},r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"timeslot"},[s("div",{staticClass:"startTime"},[e.ready?[s("span",{staticClass:"hours"},[e._v(e._s(e.timeslot.startTime.slice(0,2)))]),e._v(" "),s("span",{staticClass:"minutes"},[e._v(e._s(e.timeslot.startTime.slice(3)))])]:e._e(),e._v(" "),e.ready?e._e():s("linear-loader")],2),e._v(" "),s("div",{staticClass:"sessions"},[e.ready?e._l(e.timeslot.events,function(t,i){return s("session",{key:i,attrs:{event:t,ready:e.ready,filter:e.filter,filterActive:e.filterActive,day:e.day,startTime:e.timeslot.startTime,endTime:e.timeslot.endTime}})}):e._e(),e._v(" "),e.ready?e._e():s("session",{attrs:{ready:e.ready}})],2)])},a=[],n=s("XyMi"),l=Object(n.a)(i,r,a,!1,null,null,null);t.default=l.exports}});
//# sourceMappingURL=6.4335c957cb5046e36b6a.js.map